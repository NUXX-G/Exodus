import "server-only";
import { and, eq, gte, lte, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { checkFlag, sha256, type Vault, type VaultNode } from "./vault";
import { checkAnswer, firstReview, hashAnswer, masteryNeeded, nextReview } from "./exercises";
import type { ActivityKind } from "@db/schema";

const { nodeProgress, flagSubmissions, hintReveals, activityLog, exerciseAttempts, exerciseSolved, reviews } = schema;

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
  | { ok: false; reason: "sin-reto" | "bloqueado" | "dominio" | "incorrecta" | "espera"; retryInSeconds?: number };

const MAX_FAILS_PER_MINUTE = 10;

export function submitFlag(userId: number, node: VaultNode, submission: string): FlagResult {
  const db = getDb();
  if (!node.ctfFlag) return { ok: false, reason: "sin-reto" };

  const completed = getCompleted(userId);
  if (completed.has(node.id)) return { ok: true };
  if (stateOf(node, completed) === "locked") return { ok: false, reason: "bloqueado" };
  // Con ejercicios, la flag integradora solo se acepta tras dominar el nodo.
  if (node.exercises.length > 0 && getSolvedExercises(userId, node.id).length < masteryNeeded(node.exercises.length)) {
    return { ok: false, reason: "dominio" };
  }

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

/* ───────── Ejercicios, dominio y repaso espaciado ───────── */

export function getSolvedExercises(userId: number, nodeId: string): string[] {
  return getDb()
    .select({ id: exerciseSolved.exerciseId })
    .from(exerciseSolved)
    .where(and(eq(exerciseSolved.userId, userId), eq(exerciseSolved.nodeId, nodeId)))
    .all()
    .map((r) => r.id);
}

export interface Mastery {
  solved: number;
  total: number;
  needed: number;
  mastered: boolean;
}

export function masteryOf(node: VaultNode, solvedIds: string[]): Mastery {
  const valid = new Set(node.exercises.map((e) => e.id));
  const solved = solvedIds.filter((id) => valid.has(id)).length;
  const needed = masteryNeeded(node.exercises.length);
  return { solved, total: node.exercises.length, needed, mastered: solved >= needed };
}

export type ExerciseResult =
  | { ok: true; mastered: boolean; completedNode: boolean }
  | { ok: false; reason: "sin-ejercicio" | "bloqueado" | "incorrecta" | "espera" };

const MAX_EXERCISE_FAILS_PER_MINUTE = 30;

function recentExerciseFails(userId: number, nodeId: string): number {
  return getDb()
    .select({ n: sql<number>`count(*)` })
    .from(exerciseAttempts)
    .where(
      and(
        eq(exerciseAttempts.userId, userId),
        eq(exerciseAttempts.nodeId, nodeId),
        eq(exerciseAttempts.correct, false),
        gte(exerciseAttempts.createdAt, new Date(Date.now() - 60_000)),
      ),
    )
    .get()!.n;
}

export function submitExercise(userId: number, node: VaultNode, exerciseId: string, submission: string): ExerciseResult {
  const db = getDb();
  const ex = node.exercises.find((e) => e.id === exerciseId);
  if (!ex) return { ok: false, reason: "sin-ejercicio" };
  const completed = getCompleted(userId);
  if (stateOf(node, completed) === "locked") return { ok: false, reason: "bloqueado" };
  if (recentExerciseFails(userId, node.id) >= MAX_EXERCISE_FAILS_PER_MINUTE) return { ok: false, reason: "espera" };

  const correct = checkAnswer(ex.answers, submission);
  const today = dayKey();
  let completedNode = false;

  db.transaction((tx) => {
    tx.insert(exerciseAttempts)
      .values({ userId, nodeId: node.id, exerciseId, submittedHash: hashAnswer(submission), correct })
      .run();
    tx.insert(activityLog)
      .values({ userId, nodeId: node.id, day: today, kind: correct ? "exercise_solved" : "exercise_attempt" })
      .run();
    if (!correct) return;
    tx.insert(exerciseSolved).values({ userId, nodeId: node.id, exerciseId }).onConflictDoNothing().run();
    const sch = firstReview(today);
    tx.insert(reviews).values({ userId, nodeId: node.id, exerciseId, step: sch.step, dueDay: sch.dueDay }).onConflictDoNothing().run();
  });

  const m = masteryOf(node, getSolvedExercises(userId, node.id));
  // Un nodo sin flag integradora se completa al alcanzar el dominio.
  if (correct && m.mastered && !node.ctfFlag && !completed.has(node.id)) {
    const now = new Date();
    db.insert(nodeProgress)
      .values({ userId, nodeId: node.id, status: "completed", completedAt: now })
      .onConflictDoUpdate({ target: [nodeProgress.userId, nodeProgress.nodeId], set: { status: "completed", completedAt: now } })
      .run();
    completedNode = true;
  }
  return correct ? { ok: true, mastered: m.mastered, completedNode } : { ok: false, reason: "incorrecta" };
}

export interface DueReview {
  nodeId: string;
  exerciseId: string;
  step: number;
  dueDay: string;
}

export function getDueReviews(userId: number, today = dayKey()): DueReview[] {
  return getDb()
    .select({ nodeId: reviews.nodeId, exerciseId: reviews.exerciseId, step: reviews.step, dueDay: reviews.dueDay })
    .from(reviews)
    .where(and(eq(reviews.userId, userId), lte(reviews.dueDay, today)))
    .orderBy(reviews.dueDay)
    .all();
}

export function submitReview(userId: number, node: VaultNode, exerciseId: string, submission: string): "ok" | "incorrecta" | "sin-repaso" | "espera" {
  const db = getDb();
  const ex = node.exercises.find((e) => e.id === exerciseId);
  const today = dayKey();
  const row = db
    .select()
    .from(reviews)
    .where(and(eq(reviews.userId, userId), eq(reviews.nodeId, node.id), eq(reviews.exerciseId, exerciseId)))
    .get();
  if (!ex || !row || row.dueDay > today) return "sin-repaso";
  if (recentExerciseFails(userId, node.id) >= MAX_EXERCISE_FAILS_PER_MINUTE) return "espera";

  const correct = checkAnswer(ex.answers, submission);
  const next = nextReview(row.step, correct, today);
  db.transaction((tx) => {
    tx.insert(exerciseAttempts).values({ userId, nodeId: node.id, exerciseId, submittedHash: hashAnswer(submission), correct }).run();
    tx.update(reviews)
      .set({ step: next.step, dueDay: next.dueDay })
      .where(and(eq(reviews.userId, userId), eq(reviews.nodeId, node.id), eq(reviews.exerciseId, exerciseId)))
      .run();
    tx.insert(activityLog).values({ userId, nodeId: node.id, day: today, kind: "review_done" }).run();
  });
  return correct ? "ok" : "incorrecta";
}
