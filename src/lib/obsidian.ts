/**
 * Conexión con Obsidian: datos de exportación de un usuario y tokens personales del plugin. Sin
 * dependencias de Next (como sessions.ts) para probarlo con una base de datos temporal.
 */
import "server-only";
import crypto from "node:crypto";
import { and, asc, desc, eq, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { dayKey, getActivity, userDevelopments } from "./progress";
import type { UserExportData } from "./obsidian-export";

const { users, apiTokens, nodeProgress, exerciseSolved, reviews, hintReveals, activityLog, notes } = schema;

/** Tokens a la vez como máximo por cuenta (cada dispositivo con Obsidian usa uno). */
export const MAX_TOKENS = 10;
const TOKEN_PREFIX = "exo_";

const tokenId = (token: string) => crypto.createHash("sha256").update(token.trim()).digest("hex");

/** Crea un token y lo devuelve en claro (solo esta vez). null si se alcanzó el máximo. */
export function createApiToken(userId: number, name: string, now = new Date()): string | null {
  const db = getDb();
  const n = db.select({ n: sql<number>`count(*)` }).from(apiTokens).where(eq(apiTokens.userId, userId)).get()!.n;
  if (n >= MAX_TOKENS) return null;
  const token = TOKEN_PREFIX + crypto.randomBytes(32).toString("base64url");
  db.insert(apiTokens).values({ id: tokenId(token), userId, name: name.trim().slice(0, 60) || "Obsidian", createdAt: now }).run();
  return token;
}

export interface ApiTokenRow {
  id: string;
  name: string;
  createdAt: Date;
  lastUsedAt: Date | null;
}

export function listApiTokens(userId: number): ApiTokenRow[] {
  return getDb()
    .select({ id: apiTokens.id, name: apiTokens.name, createdAt: apiTokens.createdAt, lastUsedAt: apiTokens.lastUsedAt })
    .from(apiTokens)
    .where(eq(apiTokens.userId, userId))
    .orderBy(desc(apiTokens.createdAt))
    .all();
}

export function revokeApiToken(userId: number, id: string): boolean {
  return getDb().delete(apiTokens).where(and(eq(apiTokens.id, id), eq(apiTokens.userId, userId))).run().changes === 1;
}

/** Usuario dueño del token (y anota su último uso), o null. */
export function userForApiToken(token: string, now = new Date()) {
  if (!token.startsWith(TOKEN_PREFIX)) return null;
  const db = getDb();
  const id = tokenId(token);
  const row = db
    .select({ user: users })
    .from(apiTokens)
    .innerJoin(users, eq(users.id, apiTokens.userId))
    .where(eq(apiTokens.id, id))
    .get();
  if (!row) return null;
  db.update(apiTokens).set({ lastUsedAt: now }).where(eq(apiTokens.id, id)).run();
  return row.user;
}

/** Todo lo que la exportación necesita de un usuario, y solo de él. */
export function userExportData(userId: number, username: string): UserExportData {
  const db = getDb();
  return {
    username,
    today: dayKey(),
    progress: db
      .select({
        nodeId: nodeProgress.nodeId,
        status: nodeProgress.status,
        firstOpenedAt: nodeProgress.firstOpenedAt,
        completedAt: nodeProgress.completedAt,
      })
      .from(nodeProgress)
      .where(eq(nodeProgress.userId, userId))
      .all(),
    solved: db
      .select({ nodeId: exerciseSolved.nodeId, exerciseId: exerciseSolved.exerciseId, solvedAt: exerciseSolved.solvedAt })
      .from(exerciseSolved)
      .where(eq(exerciseSolved.userId, userId))
      .orderBy(asc(exerciseSolved.solvedAt))
      .all(),
    reviews: db
      .select({ nodeId: reviews.nodeId, exerciseId: reviews.exerciseId, dueDay: reviews.dueDay })
      .from(reviews)
      .where(eq(reviews.userId, userId))
      .orderBy(asc(reviews.dueDay))
      .all(),
    hints: db
      .select({ nodeId: hintReveals.nodeId, level: hintReveals.level })
      .from(hintReveals)
      .where(eq(hintReveals.userId, userId))
      .all(),
    activity: db
      .select({ day: activityLog.day, kind: activityLog.kind, nodeId: activityLog.nodeId })
      .from(activityLog)
      .where(eq(activityLog.userId, userId))
      .all(),
    streak: getActivity(userId, 1).streak,
    notes: db
      .select({ id: notes.id, title: notes.title, body: notes.body, nodeId: notes.nodeId, createdAt: notes.createdAt, updatedAt: notes.updatedAt })
      .from(notes)
      .where(eq(notes.userId, userId))
      .orderBy(desc(notes.updatedAt))
      .all(),
    // Solo entregas puntuadas: la solución modelo no se exporta antes de entregar y puntuarse.
    developments: userDevelopments(userId)
      .filter((d) => d.gradedAt)
      .map((d) => ({ nodeId: d.nodeId, exerciseId: d.exerciseId, answer: d.answer, onPaper: d.onPaper, score: d.score ?? 0, maxScore: d.maxScore ?? 0, gradedAt: d.gradedAt! })),
  };
}
