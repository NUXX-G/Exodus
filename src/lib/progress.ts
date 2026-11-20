import "server-only";
import { and, eq, gte, lte, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { checkFlag, sha256, type Vault, type VaultExercise, type VaultNode } from "./vault";
import { firstReview, masteryNeeded, nextReview } from "./exercises";
import { corregir, rellenar, salDe } from "./tipos-ejercicio";
import { defDe } from "./ejercicio-def";
import { semillaDe } from "./cas";
import type { ActivityKind } from "@db/schema";

const { nodeProgress, flagSubmissions, hintReveals, activityLog, exerciseAttempts, exerciseSolved, reviews, reports } = schema;

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
  | { ok: false; reason: "sin-ejercicio" | "bloqueado" | "incorrecta" | "espera" | "variante" }
  | { ok: false; reason: "ilegible"; error: string };

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

/* ───────── Tipos y variantes ───────── */

export { defDe };

/**
 * Variante que toca ahora: cada acierto (en el nodo o en el repaso) pasa a la siguiente, empezando en un punto
 * distinto para cada usuario. Fallar no cambia los datos: se puede reintentar el mismo problema.
 */
export function currentVariant(userId: number, nodeId: string, ex: VaultExercise): number | null {
  const n = ex.variants?.length ?? 0;
  if (n === 0) return null;
  const aciertos = getDb()
    .select({ n: sql<number>`count(*)` })
    .from(exerciseAttempts)
    .where(and(eq(exerciseAttempts.userId, userId), eq(exerciseAttempts.nodeId, nodeId), eq(exerciseAttempts.exerciseId, ex.id), eq(exerciseAttempts.correct, true)))
    .get()!.n;
  return (semillaDe(`${userId}:${nodeId}:${ex.id}`) + aciertos) % n;
}

/** Enunciado listo para mostrar (con los datos de la variante, si la hay). */
export function promptOf(ex: VaultExercise, variant: number | null): string {
  return variant === null || !ex.variants?.[variant] ? ex.prompt : rellenar(ex.prompt, ex.variants[variant].values);
}

function grade(ex: VaultExercise, variant: number | null, submission: string) {
  const aceptadas = variant === null ? ex.answers : ex.variants![variant].answers;
  return corregir(defDe(ex), aceptadas, submission, salDe(ex.id, variant));
}

export interface AttemptMeta {
  /** Variante que vio el alumno (para detectar una página antigua). */
  variant?: number | null;
  elapsedMs?: number | null;
}

const clampMs = (ms: number | null | undefined) => (ms && Number.isFinite(ms) && ms > 0 ? Math.min(Math.round(ms), 24 * 3600_000) : null);

export function submitExercise(userId: number, node: VaultNode, exerciseId: string, submission: string, meta: AttemptMeta = {}): ExerciseResult {
  const db = getDb();
  const ex = node.exercises.find((e) => e.id === exerciseId);
  if (!ex) return { ok: false, reason: "sin-ejercicio" };
  const completed = getCompleted(userId);
  if (stateOf(node, completed) === "locked") return { ok: false, reason: "bloqueado" };
  if (recentExerciseFails(userId, node.id) >= MAX_EXERCISE_FAILS_PER_MINUTE) return { ok: false, reason: "espera" };

  const variant = currentVariant(userId, node.id, ex);
  if (meta.variant !== undefined && (meta.variant ?? null) !== variant) return { ok: false, reason: "variante" };
  const r = grade(ex, variant, submission);
  if ("error" in r) return { ok: false, reason: "ilegible", error: r.error };
  const correct = r.correcto;
  const today = dayKey();
  let completedNode = false;

  db.transaction((tx) => {
    tx.insert(exerciseAttempts)
      .values({ userId, nodeId: node.id, exerciseId, submittedHash: r.huella, correct, variant, elapsedMs: clampMs(meta.elapsedMs), mode: "estudio" })
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

export interface ReviewQuestion {
  /** Ejercicio que se pregunta (puede ser del banco de repaso del nodo). */
  ex: VaultExercise;
  variant: number | null;
  /** «variante»: el mismo problema con otros datos; «banco»: otra pregunta del mismo temario; «igual»: el original. */
  kind: "variante" | "banco" | "igual";
}

/**
 * Pregunta que se hace hoy en lugar del ejercicio programado. El repaso no repite el enunciado del temario:
 * alterna preguntas del banco de repaso del nodo con el mismo problema con otros datos. Solo si el nodo no tiene
 * ninguna de las dos cosas se repite el original. Es determinista: recargar la página no la cambia.
 */
export function reviewQuestion(userId: number, node: VaultNode, scheduled: VaultExercise, step: number): ReviewQuestion {
  const bank = node.reviewBank ?? [];
  const tieneVariantes = (scheduled.variants?.length ?? 0) > 1;
  const semilla = semillaDe(`${userId}:${node.id}:${scheduled.id}`);
  const usarBanco = bank.length > 0 && (!tieneVariantes || (semilla + step) % 2 === 0);
  if (usarBanco) {
    const ex = bank[(semilla + step) % bank.length];
    return { ex, variant: currentVariant(userId, node.id, ex), kind: "banco" };
  }
  const variant = currentVariant(userId, node.id, scheduled);
  return { ex: scheduled, variant, kind: tieneVariantes ? "variante" : "igual" };
}

export type ReviewResult = "ok" | "incorrecta" | "sin-repaso" | "espera" | "cambiada" | { error: string };

export function submitReview(
  userId: number,
  node: VaultNode,
  exerciseId: string,
  submission: string,
  meta: AttemptMeta & { askedId?: string } = {},
): ReviewResult {
  const db = getDb();
  const scheduled = node.exercises.find((e) => e.id === exerciseId);
  const today = dayKey();
  const row = db
    .select()
    .from(reviews)
    .where(and(eq(reviews.userId, userId), eq(reviews.nodeId, node.id), eq(reviews.exerciseId, exerciseId)))
    .get();
  if (!scheduled || !row || row.dueDay > today) return "sin-repaso";
  if (recentExerciseFails(userId, node.id) >= MAX_EXERCISE_FAILS_PER_MINUTE) return "espera";

  // La pregunta la decide el servidor; el formulario solo dice cuál vio, para detectar una página antigua.
  const q = reviewQuestion(userId, node, scheduled, row.step);
  if ((meta.askedId !== undefined && meta.askedId !== q.ex.id) || (meta.variant !== undefined && (meta.variant ?? null) !== q.variant)) return "cambiada";
  const r = grade(q.ex, q.variant, submission);
  if ("error" in r) return { error: r.error };
  const correct = r.correcto;
  const next = nextReview(row.step, correct, today);
  db.transaction((tx) => {
    tx.insert(exerciseAttempts)
      .values({ userId, nodeId: node.id, exerciseId: q.ex.id, submittedHash: r.huella, correct, variant: q.variant, elapsedMs: clampMs(meta.elapsedMs), mode: "repaso", reviewOf: exerciseId })
      .run();
    tx.update(reviews)
      .set({ step: next.step, dueDay: next.dueDay })
      .where(and(eq(reviews.userId, userId), eq(reviews.nodeId, node.id), eq(reviews.exerciseId, exerciseId)))
      .run();
    tx.insert(activityLog).values({ userId, nodeId: node.id, day: today, kind: "review_done" }).run();
  });
  return correct ? "ok" : "incorrecta";
}

/* ───────── Reportes «creo que esto está mal» ───────── */

export const MAX_REPORT_CHARS = 2000;
const MAX_REPORTS_PER_HOUR = 20;

export function createReport(userId: number, nodeId: string, exerciseId: string | null, message: string): "ok" | "espera" | "vacio" {
  const texto = message.trim().slice(0, MAX_REPORT_CHARS);
  if (!texto) return "vacio";
  const db = getDb();
  const recientes = db
    .select({ n: sql<number>`count(*)` })
    .from(reports)
    .where(and(eq(reports.userId, userId), gte(reports.createdAt, new Date(Date.now() - 3600_000))))
    .get()!.n;
  if (recientes >= MAX_REPORTS_PER_HOUR) return "espera";
  db.insert(reports).values({ userId, nodeId, exerciseId, message: texto }).run();
  return "ok";
}

export type ReportStatus = "pendiente" | "resuelto" | "descartado";

export function listReports(status?: ReportStatus) {
  const db = getDb();
  const q = db
    .select({
      id: reports.id,
      nodeId: reports.nodeId,
      exerciseId: reports.exerciseId,
      message: reports.message,
      status: reports.status,
      resolution: reports.resolution,
      createdAt: reports.createdAt,
      resolvedAt: reports.resolvedAt,
      username: schema.users.username,
    })
    .from(reports)
    .innerJoin(schema.users, eq(schema.users.id, reports.userId));
  return (status ? q.where(eq(reports.status, status)) : q).orderBy(reports.createdAt).all();
}

export function resolveReport(id: number, status: ReportStatus, resolution: string | null) {
  getDb()
    .update(reports)
    .set({ status, resolution: resolution?.trim().slice(0, MAX_REPORT_CHARS) || null, resolvedAt: status === "pendiente" ? null : new Date() })
    .where(eq(reports.id, id))
    .run();
}
