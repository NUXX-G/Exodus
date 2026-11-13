/**
 * Invitaciones: la cuenta `admin` genera códigos de un solo uso que caducan, y quien tiene uno crea
 * su cuenta (`miembro`) en /registro. No hay registro abierto: sin invitación válida no se crea nada.
 *
 * Como sessions.ts, no depende de Next para poder probarlo con una base de datos temporal. El código
 * solo existe en la pantalla de quien lo genera; en la base de datos se guarda su SHA-256.
 */
import "server-only";
import crypto from "node:crypto";
import { and, desc, eq, gt, isNull, sql } from "drizzle-orm";
import { alias } from "drizzle-orm/sqlite-core";
import { getDb, schema } from "./db";
import { hashPassword } from "./password";

const { users, invitations } = schema;

/** Caducidades que se pueden elegir, en días. */
export const INVITE_DAYS = [1, 3, 7] as const;
/** Invitaciones pendientes como máximo a la vez por cuenta. */
export const MAX_PENDING = 20;
export const MAX_NOTE = 60;

// Sin 0/O, 1/I/L: se dicta y se copia a mano sin confusiones. 31 símbolos × 16 ≈ 79 bits.
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 16;

/** Mayúsculas y sin guiones ni espacios: `abcd-efgh ...` y `ABCDEFGH...` son el mismo código. */
export const normalizeCode = (code: string) => code.toUpperCase().replace(/[^A-Z0-9]/g, "");

export const invitationId = (code: string) => crypto.createHash("sha256").update(normalizeCode(code)).digest("hex");

function newCode(): string {
  let raw = "";
  for (let i = 0; i < CODE_LENGTH; i++) raw += ALPHABET[crypto.randomInt(ALPHABET.length)];
  return raw.match(/.{4}/g)!.join("-");
}

function isAdmin(userId: number): boolean {
  return getDb().select({ role: users.role }).from(users).where(eq(users.id, userId)).get()?.role === "admin";
}

function pendingCount(userId: number, now: Date): number {
  return getDb()
    .select({ n: sql<number>`count(*)` })
    .from(invitations)
    .where(and(eq(invitations.createdBy, userId), isNull(invitations.usedAt), gt(invitations.expiresAt, now)))
    .get()!.n;
}

export type CreatedInvitation = { code: string; expiresAt: Date };

/** Genera una invitación. Solo la cuenta `admin` puede, y con un tope de pendientes. */
export function createInvitation(
  userId: number,
  days: number,
  note: string,
  now = new Date(),
): CreatedInvitation | "permiso" | "limite" | "dias" {
  if (!isAdmin(userId)) return "permiso";
  if (!(INVITE_DAYS as readonly number[]).includes(days)) return "dias";
  if (pendingCount(userId, now) >= MAX_PENDING) return "limite";
  const code = newCode();
  const expiresAt = new Date(now.getTime() + days * 86_400_000);
  const cleanNote = note.trim().slice(0, MAX_NOTE) || null;
  getDb().insert(invitations).values({ id: invitationId(code), createdBy: userId, note: cleanNote, expiresAt, createdAt: now }).run();
  return { code, expiresAt };
}

export type InvitationState = "pendiente" | "usada" | "caducada";

export interface InvitationRow {
  id: string;
  note: string | null;
  createdAt: Date;
  expiresAt: Date;
  usedAt: Date | null;
  usedByName: string | null;
  state: InvitationState;
}

/** Las últimas invitaciones generadas por la cuenta, de la más reciente a la más antigua. */
export function listInvitations(userId: number, now = new Date(), limit = 30): InvitationRow[] {
  const invitee = alias(users, "invitee");
  return getDb()
    .select({
      id: invitations.id,
      note: invitations.note,
      createdAt: invitations.createdAt,
      expiresAt: invitations.expiresAt,
      usedAt: invitations.usedAt,
      usedByName: invitee.username,
    })
    .from(invitations)
    .leftJoin(invitee, eq(invitee.id, invitations.usedBy))
    .where(eq(invitations.createdBy, userId))
    .orderBy(desc(invitations.createdAt), desc(invitations.id))
    .limit(limit)
    .all()
    .map((r) => ({ ...r, state: r.usedAt ? "usada" : r.expiresAt > now ? "pendiente" : "caducada" }));
}

/** Anula una invitación pendiente propia. Devuelve si había algo que anular. */
export function revokeInvitation(userId: number, id: string): boolean {
  return (
    getDb()
      .delete(invitations)
      .where(and(eq(invitations.id, id), eq(invitations.createdBy, userId), isNull(invitations.usedAt)))
      .run().changes === 1
  );
}

export type Redeem = { userId: number } | "codigo" | "usuario";

/**
 * Crea una cuenta `miembro` consumiendo la invitación, todo en una transacción: si el nombre de usuario
 * ya existe, la invitación sigue sin usar. El código se comprueba antes que el usuario para que sin
 * una invitación válida no se pueda averiguar qué nombres existen.
 */
export function redeemInvitation(code: string, username: string, password: string, now = new Date()): Redeem {
  const id = invitationId(code);
  return getDb().transaction((tx) => {
    const inv = tx
      .select({ id: invitations.id })
      .from(invitations)
      .where(and(eq(invitations.id, id), isNull(invitations.usedAt), gt(invitations.expiresAt, now)))
      .get();
    if (!inv) return "codigo";
    if (tx.select({ id: users.id }).from(users).where(eq(users.username, username)).get()) return "usuario";
    const created = tx.insert(users).values({ username, passwordHash: hashPassword(password), role: "miembro" }).returning({ id: users.id }).get();
    tx.update(invitations).set({ usedAt: now, usedBy: created.id }).where(eq(invitations.id, id)).run();
    return { userId: created.id };
  });
}
