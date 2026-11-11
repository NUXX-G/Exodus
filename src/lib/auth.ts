/**
 * Autenticación de instancia privada: una única cuenta (la primera que se crea en /configurar)
 * y sesiones por cookie HttpOnly. El token solo existe en la cookie; en la base de datos se
 * guarda su SHA-256, de modo que una copia de la base de datos no permite suplantar sesiones.
 */
import "server-only";
import crypto from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { and, eq, gt, isNotNull, lt, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { hashPassword, verifyPassword } from "./password";
import { clientKeyFrom, FailureLimiter } from "./rate-limit";
import type { User } from "@db/schema";

const { users, sessions } = schema;

const COOKIE = "exodus_session";
const SESSION_DAYS = 30;

const tokenId = (token: string) => crypto.createHash("sha256").update(token).digest("hex");

/** ¿Existe ya la cuenta de la instancia? */
export function hasOwner(): boolean {
  return getDb().select({ id: users.id }).from(users).where(isNotNull(users.passwordHash)).get() !== undefined;
}

async function startSession(userId: number) {
  const db = getDb();
  const token = crypto.randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_DAYS * 86_400_000);
  db.delete(sessions).where(lt(sessions.expiresAt, new Date())).run();
  db.insert(sessions).values({ id: tokenId(token), userId, expiresAt }).run();

  // `Secure` cuando la petición llegó por HTTPS (directo o a través del proxy inverso).
  const https = (await headers()).get("x-forwarded-proto") === "https";
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: https,
    path: "/",
    expires: expiresAt,
  });
}

export async function getSessionUser(): Promise<User | null> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  const row = getDb()
    .select({ user: users })
    .from(sessions)
    .innerJoin(users, eq(users.id, sessions.userId))
    .where(and(eq(sessions.id, tokenId(token)), gt(sessions.expiresAt, new Date())))
    .get();
  return row?.user ?? null;
}

/** Para páginas y acciones protegidas: devuelve el usuario o redirige a /configurar o /entrar. */
export async function requireUser(): Promise<User> {
  const user = await getSessionUser();
  if (user) return user;
  redirect(hasOwner() ? "/entrar" : "/configurar");
}

/**
 * Código de configuración de un solo uso. Mientras no exista la cuenta, el servidor genera un
 * código aleatorio y lo escribe en su registro: solo quien puede leer los logs del servidor
 * (el dueño de la máquina) puede crear la cuenta, aunque /configurar sea alcanzable desde fuera.
 */
const setupState = globalThis as unknown as { __exodusSetupCode?: string };

export function announceSetupCode(): void {
  if (setupState.__exodusSetupCode || hasOwner()) return;
  setupState.__exodusSetupCode = crypto.randomBytes(10).toString("hex");
  console.log(`[exodus] Código de configuración: ${setupState.__exodusSetupCode}`);
  console.log("[exodus] Úsalo en /configurar para crear la cuenta de esta instancia.");
}

function setupCodeMatches(code: string): boolean {
  const expected = setupState.__exodusSetupCode;
  if (!expected) return false;
  const a = crypto.createHash("sha256").update(code.trim().toLowerCase()).digest();
  const b = crypto.createHash("sha256").update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

// Freno a la fuerza bruta (ver rate-limit.ts). Cinco fallos por cliente en diez minutos; el tope
// global solo salta ante un ataque distribuido y entonces ralentiza a todos, también al dueño.
const limits = { maxPerClient: 5, maxGlobal: 200, windowMs: 10 * 60_000, maxTracked: 5_000 };
const loginLimiter = new FailureLimiter(limits);
const setupLimiter = new FailureLimiter(limits);

/** X-Forwarded-For solo es fiable si hay un proxy propio delante (perfil https del compose). */
async function clientKey(): Promise<string> {
  return clientKeyFrom((await headers()).get("x-forwarded-for"), process.env.EXODUS_TRUST_PROXY === "1");
}

export type SetupResult = "ok" | "codigo" | "existe" | "espera";

/** Crea la cuenta de la instancia. Falla si ya existe: no hay registro abierto. */
export async function createOwner(username: string, password: string, code: string): Promise<SetupResult> {
  if (hasOwner()) return "existe";
  const client = await clientKey();
  if (setupLimiter.blocked(client)) return "espera";
  if (!setupCodeMatches(code)) {
    setupLimiter.fail(client);
    return "codigo";
  }

  const db = getDb();
  const created = db.transaction((tx) => {
    const exists = tx.select({ n: sql<number>`count(*)` }).from(users).where(isNotNull(users.passwordHash)).get()!.n;
    if (exists > 0) return null;
    return tx.insert(users).values({ username, passwordHash: hashPassword(password) }).returning({ id: users.id }).get();
  });
  if (!created) return "existe";
  setupState.__exodusSetupCode = undefined;
  await startSession(created.id);
  return "ok";
}

export type LoginResult = "ok" | "credenciales" | "espera";

export async function login(username: string, password: string): Promise<LoginResult> {
  const client = await clientKey();
  if (loginLimiter.blocked(client)) return "espera";

  const user = getDb().select().from(users).where(eq(users.username, username)).get();
  // Se calcula el hash aunque el usuario no exista para no revelarlo por el tiempo de respuesta.
  const ok = verifyPassword(password, user?.passwordHash ?? "scrypt$15$AAAAAAAAAAAAAAAAAAAAAA==$AA==") && !!user;
  if (!ok) {
    loginLimiter.fail(client);
    return "credenciales";
  }
  loginLimiter.succeed(client);
  await startSession(user.id);
  return "ok";
}

export async function logout() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (token) getDb().delete(sessions).where(eq(sessions.id, tokenId(token))).run();
  jar.delete(COOKIE);
}
