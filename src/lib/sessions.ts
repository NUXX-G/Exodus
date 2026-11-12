/**
 * Núcleo de sesiones y credenciales, sin dependencias de Next (cookies, cabeceras, redirecciones):
 * todo lo que toca la base de datos vive aquí para poder probarlo con una base de datos temporal.
 * El token solo existe en la cookie; en la base de datos se guarda su SHA-256.
 */
import "server-only";
import crypto from "node:crypto";
import { and, eq, gt, lt, ne, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { hashPassword, MIN_PASSWORD_LENGTH, verifyPassword } from "./password";
import type { User } from "@db/schema";

const { users, sessions } = schema;

export const SESSION_DAYS = 30;

export const tokenId = (token: string) => crypto.createHash("sha256").update(token).digest("hex");

/** Crea una sesión y devuelve el token (que solo debe ir a la cookie). Purga las caducadas. */
export function createSession(userId: number, now = new Date()): { token: string; expiresAt: Date } {
  const db = getDb();
  const token = crypto.randomBytes(32).toString("base64url");
  const expiresAt = new Date(now.getTime() + SESSION_DAYS * 86_400_000);
  db.delete(sessions).where(lt(sessions.expiresAt, now)).run();
  db.insert(sessions).values({ id: tokenId(token), userId, expiresAt }).run();
  return { token, expiresAt };
}

/** Usuario de una sesión vigente, o null. */
export function userForToken(token: string, now = new Date()): User | null {
  const row = getDb()
    .select({ user: users })
    .from(sessions)
    .innerJoin(users, eq(users.id, sessions.userId))
    .where(and(eq(sessions.id, tokenId(token)), gt(sessions.expiresAt, now)))
    .get();
  return row?.user ?? null;
}

export function revokeSession(token: string): void {
  getDb().delete(sessions).where(eq(sessions.id, tokenId(token))).run();
}

/** Cierra todas las sesiones del usuario salvo la del token dado. Devuelve cuántas cerró. */
export function revokeOtherSessions(userId: number, keepToken: string): number {
  return getDb()
    .delete(sessions)
    .where(and(eq(sessions.userId, userId), ne(sessions.id, tokenId(keepToken))))
    .run().changes;
}

/** Sesiones vigentes del usuario (incluida la actual). */
export function countSessions(userId: number, now = new Date()): number {
  return getDb()
    .select({ n: sql<number>`count(*)` })
    .from(sessions)
    .where(and(eq(sessions.userId, userId), gt(sessions.expiresAt, now)))
    .get()!.n;
}

export type PasswordChange = "ok" | "actual" | "corta" | "larga" | "igual";

/**
 * Cambia la contraseña tras comprobar la actual. Si cambia, se cierran las demás sesiones: quien
 * cambia la contraseña porque sospecha que alguien la conoce no debe dejar a ese alguien dentro.
 */
export function changePassword(userId: number, current: string, next: string, keepToken: string): PasswordChange {
  const db = getDb();
  const user = db.select().from(users).where(eq(users.id, userId)).get();
  if (!user?.passwordHash || !verifyPassword(current, user.passwordHash)) return "actual";
  if (next.length < MIN_PASSWORD_LENGTH) return "corta";
  if (next.length > 256) return "larga";
  if (next === current) return "igual";
  db.transaction((tx) => {
    tx.update(users).set({ passwordHash: hashPassword(next) }).where(eq(users.id, userId)).run();
    tx.delete(sessions).where(and(eq(sessions.userId, userId), ne(sessions.id, tokenId(keepToken)))).run();
  });
  return "ok";
}
