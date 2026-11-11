import "server-only";
import { and, eq, gte, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { checkFlag, sha256, type Vault, type VaultNode } from "./vault";
import type { ActivityKind } from "@db/schema";

const { nodeProgress, flagSubmissions, hintReveals, activityLog } = schema;

/**
 * completed  — flag validada
 * available  — todos los prerequisitos completados (o no tiene)
 * locked     — falta algún prerequisito. Se puede leer, pero no validar su flag.
 */
export type NodeState = "completed" | "available" | "locked";

export function dayKey(d = new Date()): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function logActivity(userId: number, kind: ActivityKind, nodeId: string) {
  getDb().insert(activityLog).values({ userId, kind, nodeId, day: dayKey() }).run();
}

export function getCompleted(userId: number): Set<string> {
  const rows = getDb()
    .select({ nodeId: nodeProgress.nodeId })
    .from(nodeProgress)
    .where(and(eq(nodeProgress.userId, userId), eq(nodeProgress.status, "completed")))
    .all();
  return new Set(rows.map((r) => r.nodeId));
}

export function stateOf(node: VaultNode, completed: Set<string>): NodeState {
  if (completed.has(node.id)) return "completed";
  return node.prerequisites.every((p) => completed.has(p)) ? "available" : "locked";
}

export function computeStates(vault: Vault, completed: Set<string>): Map<string, NodeState> {
  const out = new Map<string, NodeState>();
  for (const node of vault.nodes.values()) out.set(node.id, stateOf(node, completed));
  return out;
}

/** Marca el nodo como abierto. La actividad se registra una vez por nodo y día. */
export function recordOpen(userId: number, nodeId: string) {
  const db = getDb();
  db.insert(nodeProgress)
    .values({ userId, nodeId })
    .onConflictDoUpdate({
      target: [nodeProgress.userId, nodeProgress.nodeId],
      set: { lastOpenedAt: new Date() },
    })
    .run();

  const seenToday = db
    .select({ id: activityLog.id })
    .from(activityLog)
    .where(
      and(
        eq(activityLog.userId, userId),
        eq(activityLog.nodeId, nodeId),
        eq(activityLog.kind, "node_opened"),
        eq(activityLog.day, dayKey()),
      ),
    )
    .get();
  if (!seenToday) logActivity(userId, "node_opened", nodeId);
}

export function getRevealedLevels(userId: number, nodeId: string): number[] {
  return getDb()
    .select({ level: hintReveals.level })
    .from(hintReveals)
    .where(and(eq(hintReveals.userId, userId), eq(hintReveals.nodeId, nodeId)))
    .all()
    .map((r) => r.level)
    .sort((a, b) => a - b);
}

/** Revela la siguiente pista en orden (1 → 2 → 3). Devuelve los niveles revelados. */
export function revealNextHint(userId: number, node: VaultNode): number[] {
  const revealed = getRevealedLevels(userId, node.id);
  const next = revealed.length + 1;
  if (next > node.hints.length) return revealed;
  getDb().insert(hintReveals).values({ userId, nodeId: node.id, level: next }).onConflictDoNothing().run();
  logActivity(userId, "hint_revealed", node.id);
  return [...revealed, next];
}

export type FlagResult =
  | { ok: true }
  | { ok: false; reason: "sin-reto" | "bloqueado" | "incorrecta" | "espera"; retryInSeconds?: number };

const MAX_FAILS_PER_MINUTE = 10;

export function submitFlag(userId: number, node: VaultNode, submission: string): FlagResult {
  const db = getDb();
  if (!node.ctfFlag) return { ok: false, reason: "sin-reto" };

  const completed = getCompleted(userId);
  if (completed.has(node.id)) return { ok: true };
  if (stateOf(node, completed) === "locked") return { ok: false, reason: "bloqueado" };

  // Freno a la fuerza bruta: máximo de fallos por minuto y nodo.
  const since = new Date(Date.now() - 60_000);
  const recentFails = db
    .select({ n: sql<number>`count(*)` })
    .from(flagSubmissions)
    .where(
      and(
        eq(flagSubmissions.userId, userId),
        eq(flagSubmissions.nodeId, node.id),
        eq(flagSubmissions.correct, false),
        gte(flagSubmissions.createdAt, since),
      ),
    )
    .get()!.n;
  if (recentFails >= MAX_FAILS_PER_MINUTE) return { ok: false, reason: "espera", retryInSeconds: 60 };

  const correct = checkFlag(node, submission);
  const hintsUsed = getRevealedLevels(userId, node.id).length;

  db.transaction((tx) => {
    tx.insert(flagSubmissions)
      .values({ userId, nodeId: node.id, submittedHash: sha256(submission.trim()), correct, hintsUsed })
      .run();
    tx.insert(activityLog)
      .values({ userId, nodeId: node.id, day: dayKey(), kind: correct ? "flag_captured" : "flag_attempt" })
      .run();
    if (correct) {
      const now = new Date();
      tx.insert(nodeProgress)
        .values({ userId, nodeId: node.id, status: "completed", completedAt: now })
        .onConflictDoUpdate({
          target: [nodeProgress.userId, nodeProgress.nodeId],
          set: { status: "completed", completedAt: now },
        })
        .run();
    }
  });

  return correct ? { ok: true } : { ok: false, reason: "incorrecta" };
}

export interface ActivitySummary {
  /** Eventos por día (YYYY-MM-DD) dentro de la ventana solicitada. */
  days: Record<string, number>;
  /** Días consecutivos con actividad hasta hoy (o hasta ayer si hoy aún no hay). */
  streak: number;
  flagsCaptured: number;
}

export function getActivity(userId: number, windowDays: number): ActivitySummary {
  const db = getDb();
  const start = new Date();
  start.setDate(start.getDate() - windowDays);

  const rows = db
    .select({ day: activityLog.day, n: sql<number>`count(*)` })
    .from(activityLog)
    .where(and(eq(activityLog.userId, userId), gte(activityLog.day, dayKey(start))))
    .groupBy(activityLog.day)
    .all();
  const days: Record<string, number> = {};
  for (const r of rows) days[r.day] = r.n;

  const active = new Set(
    db
      .selectDistinct({ day: activityLog.day })
      .from(activityLog)
      .where(eq(activityLog.userId, userId))
      .all()
      .map((r) => r.day),
  );
  const cursor = new Date();
  if (!active.has(dayKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (active.has(dayKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }

  const flagsCaptured = db
    .select({ n: sql<number>`count(*)` })
    .from(nodeProgress)
    .where(and(eq(nodeProgress.userId, userId), eq(nodeProgress.status, "completed")))
    .get()!.n;

  return { days, streak, flagsCaptured };
}
