/**
 * Autenticación de instancia privada: una única cuenta (la primera que se crea en /configurar)
 * y sesiones por cookie HttpOnly. La lógica de base de datos (sesiones y contraseña) vive en
 * sessions.ts; aquí solo se conecta con las cookies, las cabeceras y las redirecciones de Next.
 */
import "server-only";
import crypto from "node:crypto";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { eq, isNotNull, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { hashPassword, verifyPassword } from "./password";
import { clientKeyFrom, FailureLimiter } from "./rate-limit";
import {
  changePassword as changePasswordCore,
  countSessions,
  createSession,
  revokeOtherSessions,
  revokeSession,
  userForToken,
  type PasswordChange,
} from "./sessions";
import type { User } from "@db/schema";

const { users } = schema;

const COOKIE = "exodus_session";

/** ¿Existe ya la cuenta de la instancia? */
export function hasOwner(): boolean {
  return getDb().select({ id: users.id }).from(users).where(isNotNull(users.passwordHash)).get() !== undefined;
}

async function startSession(userId: number) {
  const { token, expiresAt } = createSession(userId);

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

async function currentToken(): Promise<string | null> {
  return (await cookies()).get(COOKIE)?.value ?? null;
}

export async function getSessionUser(): Promise<User | null> {
  const token = await currentToken();
  return token ? userForToken(token) : null;
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
// La contraseña actual tampoco se puede adivinar a ciegas desde una sesión robada.
const passwordLimiter = new FailureLimiter(limits);

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
  if (token) revokeSession(token);
  jar.delete(COOKIE);
}

/* ───────── Cuenta: contraseña y sesiones ───────── */

/** Sesiones abiertas del usuario actual (incluida esta). */
export async function activeSessions(): Promise<number> {
  const user = await requireUser();
  return countSessions(user.id);
}

/** Cambia la contraseña del usuario actual y cierra sus demás sesiones. */
export async function changeOwnPassword(current: string, next: string): Promise<PasswordChange | "espera"> {
  const user = await requireUser();
  const token = await currentToken();
  if (!token) redirect("/entrar");
  const key = `usuario-${user.id}`;
  if (passwordLimiter.blocked(key)) return "espera";
  const result = changePasswordCore(user.id, current, next, token);
  if (result === "actual") passwordLimiter.fail(key);
  else if (result === "ok") passwordLimiter.succeed(key);
  return result;
}

/** Cierra todas las sesiones salvo la actual. Devuelve cuántas cerró. */
export async function closeOtherSessions(): Promise<number> {
  const user = await requireUser();
  const token = await currentToken();
  if (!token) redirect("/entrar");
  return revokeOtherSessions(user.id, token);
}
