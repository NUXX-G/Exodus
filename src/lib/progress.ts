import "server-only";
import { and, eq, gte, lte, sql } from "drizzle-orm";
import { getDb, schema } from "./db";
import { checkFlag, sha256, type Vault, type VaultExercise, type VaultNode } from "./vault";
import { firstReview, masteryNeeded } from "./exercises";
import { interleave, isErrorTag, weekOf, RECENT_DAYS, reviewPriority, weightedNextReview, type ErrorTag, type RecentFail } from "./errores";
import { corregir, rellenar, salDe } from "./tipos-ejercicio";
import { defDe } from "./ejercicio-def";
import { semillaDe } from "./cas";
import { abrir as abrirSellado, type Sellado } from "./sellado";
import type { ActivityKind } from "@db/schema";

const { nodeProgress, flagSubmissions, hintReveals, activityLog, exerciseAttempts, exerciseSolved, reviews, reports, developmentSubmissions } = schema;

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

  if (!correct) return { ok: false, reason: "incorrecta" };
  // Un nodo sin flag integradora se completa al alcanzar el dominio.
  const m = completeIfMastered(userId, node);
  return { ok: true, mastered: m.mastered, completedNode: m.completedNode };
}

export interface DueReview {
  nodeId: string;
  exerciseId: string;
  step: number;
  dueDay: string;
}

/**
 * Repasos pendientes hoy, ordenados por prioridad: primero los más atrasados y los de ejercicios (y nodos) con fallos
 * recientes, pesando más los fallos de concepto que los despistes (src/lib/errores.ts).
 */
export function getDueReviews(userId: number, today = dayKey()): DueReview[] {
  const rows = getDb()
    .select({ nodeId: reviews.nodeId, exerciseId: reviews.exerciseId, step: reviews.step, dueDay: reviews.dueDay })
    .from(reviews)
    .where(and(eq(reviews.userId, userId), lte(reviews.dueDay, today)))
    .orderBy(reviews.dueDay)
    .all();
  if (rows.length < 2) return rows;
  const fails = recentFails(userId, today);
  const prioridad = new Map(
    rows.map((r) => [
      `${r.nodeId}/${r.exerciseId}`,
      reviewPriority(r.dueDay, today, failsOf(fails, r.nodeId, r.exerciseId), fails.filter((f) => f.nodeId === r.nodeId)),
    ]),
  );
  return rows.sort((a, b) => prioridad.get(`${b.nodeId}/${b.exerciseId}`)! - prioridad.get(`${a.nodeId}/${a.exerciseId}`)! || a.dueDay.localeCompare(b.dueDay));
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
  const next = weightedNextReview(row.step, correct, today, failsOf(recentFails(userId, today), node.id, exerciseId));
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

/* ───────── Diario de errores (fase 2) ───────── */

export interface FailRow extends RecentFail {
  id: number;
  nodeId: string;
  exerciseId: string;
  /** En el repaso, el ejercicio programado al que sustituía la pregunta. */
  reviewOf: string | null;
}

/** Fallos de los últimos RECENT_DAYS días (para ponderar el repaso). */
export function recentFails(userId: number, today = dayKey()): FailRow[] {
  const [y, m, d] = today.split("-").map(Number);
  const desde = new Date(y, m - 1, d - RECENT_DAYS);
  return getDb()
    .select({ id: exerciseAttempts.id, nodeId: exerciseAttempts.nodeId, exerciseId: exerciseAttempts.exerciseId, reviewOf: exerciseAttempts.reviewOf, tag: exerciseAttempts.errorTag, createdAt: exerciseAttempts.createdAt })
    .from(exerciseAttempts)
    .where(and(eq(exerciseAttempts.userId, userId), eq(exerciseAttempts.correct, false), gte(exerciseAttempts.createdAt, desde)))
    .all()
    .map((r) => ({ id: r.id, nodeId: r.nodeId, exerciseId: r.exerciseId, reviewOf: r.reviewOf, day: dayKey(r.createdAt), tag: isErrorTag(r.tag) ? r.tag : null }));
}

/** Fallos que cuentan para un ejercicio: los suyos y los de las preguntas de repaso que lo sustituían. */
export function failsOf(fails: FailRow[], nodeId: string, exerciseId: string): FailRow[] {
  return fails.filter((f) => f.nodeId === nodeId && (f.exerciseId === exerciseId || f.reviewOf === exerciseId));
}

/** Último intento del usuario (para ofrecer etiquetar el fallo que acaba de cometer). */
export function lastAttemptId(userId: number): number | null {
  return (
    getDb()
      .select({ id: sql<number>`max(${exerciseAttempts.id})` })
      .from(exerciseAttempts)
      .where(eq(exerciseAttempts.userId, userId))
      .get()?.id ?? null
  );
}

export const MAX_ERROR_NOTE = 1000;

/** Etiqueta un fallo propio. Solo los intentos incorrectos del mismo usuario. */
export function tagAttempt(userId: number, attemptId: number, tag: ErrorTag, note: string | null): boolean {
  const row = getDb()
    .select({ userId: exerciseAttempts.userId, correct: exerciseAttempts.correct })
    .from(exerciseAttempts)
    .where(eq(exerciseAttempts.id, attemptId))
    .get();
  if (!row || row.userId !== userId || row.correct) return false;
  getDb()
    .update(exerciseAttempts)
    .set({ errorTag: tag, errorNote: note?.trim().slice(0, MAX_ERROR_NOTE) || null })
    .where(eq(exerciseAttempts.id, attemptId))
    .run();
  return true;
}

export interface ErrorStats {
  total: number;
  sinEtiqueta: number;
  porTipo: Map<ErrorTag | "sin-etiqueta", number>;
  porNodo: { nodeId: string; total: number; tipos: Map<ErrorTag | "sin-etiqueta", number> }[];
  porArea: Map<string, number>;
  /** Por semana (lunes): fallos por tipo y aciertos, para ver la evolución. */
  semanas: { semana: string; fallos: number; aciertos: number; tipos: Map<ErrorTag | "sin-etiqueta", number> }[];
  /** Fallos recientes, para etiquetarlos o releer las notas. */
  recientes: { id: number; nodeId: string; exerciseId: string; day: string; tag: ErrorTag | null; note: string | null; mode: string }[];
}

/** Estadísticas del diario de errores de un usuario (todos sus intentos; el volumen es pequeño: decenas de miles). */
export function errorStats(userId: number, vault: Vault, weeks = 12): ErrorStats {
  const rows = getDb()
    .select({ id: exerciseAttempts.id, nodeId: exerciseAttempts.nodeId, exerciseId: exerciseAttempts.exerciseId, correct: exerciseAttempts.correct, tag: exerciseAttempts.errorTag, note: exerciseAttempts.errorNote, mode: exerciseAttempts.mode, createdAt: exerciseAttempts.createdAt })
    .from(exerciseAttempts)
    .where(eq(exerciseAttempts.userId, userId))
    .all();
  const porTipo = new Map<ErrorTag | "sin-etiqueta", number>();
  const porNodo = new Map<string, Map<ErrorTag | "sin-etiqueta", number>>();
  const porArea = new Map<string, number>();
  const semanas = new Map<string, { fallos: number; aciertos: number; tipos: Map<ErrorTag | "sin-etiqueta", number> }>();
  const suma = <K>(m: Map<K, number>, k: K) => m.set(k, (m.get(k) ?? 0) + 1);
  const hoy = dayKey();
  const [y, mo, d] = hoy.split("-").map(Number);
  const desdeSemana = weekOf(dayKey(new Date(y, mo - 1, d - 7 * (weeks - 1))));
  let total = 0;
  for (const r of rows) {
    const semana = weekOf(dayKey(r.createdAt));
    if (semana >= desdeSemana) {
      const s = semanas.get(semana) ?? { fallos: 0, aciertos: 0, tipos: new Map() };
      if (r.correct) s.aciertos++;
      else s.fallos++;
      semanas.set(semana, s);
    }
    if (r.correct) continue;
    total++;
    const tag: ErrorTag | "sin-etiqueta" = isErrorTag(r.tag) ? r.tag : "sin-etiqueta";
    suma(porTipo, tag);
    if (!porNodo.has(r.nodeId)) porNodo.set(r.nodeId, new Map());
    suma(porNodo.get(r.nodeId)!, tag);
    suma(porArea, vault.nodes.get(r.nodeId)?.area ?? "desconocida");
    if (semana >= desdeSemana) suma(semanas.get(semana)!.tipos, tag);
  }
  const recientes = rows
    .filter((r) => !r.correct)
    .sort((a, b) => b.id - a.id)
    .slice(0, 30)
    .map((r) => ({ id: r.id, nodeId: r.nodeId, exerciseId: r.exerciseId, day: dayKey(r.createdAt), tag: isErrorTag(r.tag) ? r.tag : null, note: r.note, mode: r.mode }));
  return {
    total,
    sinEtiqueta: porTipo.get("sin-etiqueta") ?? 0,
    porTipo,
    porNodo: [...porNodo]
      .map(([nodeId, tipos]) => ({ nodeId, tipos, total: [...tipos.values()].reduce((a, b) => a + b, 0) }))
      .sort((a, b) => b.total - a.total),
    porArea,
    semanas: [...semanas].map(([semana, s]) => ({ semana, ...s })).sort((a, b) => a.semana.localeCompare(b.semana)),
    recientes,
  };
}

/* ───────── Repaso intercalado (fase 2) ───────── */

export interface PracticeItem {
  node: VaultNode;
  ex: VaultExercise;
  variant: number | null;
}

/** Mezcla determinista (Fisher-Yates con semilla). */
function barajar<T>(xs: T[], semilla: number): T[] {
  const a = [...xs];
  let s = semilla >>> 0;
  for (let i = a.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Sesión de práctica intercalada: preguntas de nodos ya completados (de un área o de todas), alternando nodos.
 * Usa el banco de repaso y los ejercicios del nodo (con su variante actual). Estable durante el día, salvo que la
 * pida otra vez con `ronda` distinta.
 */
export function interleavedSet(userId: number, vault: Vault, area: string | null, max = 12, ronda = 0, today = dayKey()): PracticeItem[] {
  const completados = getCompleted(userId);
  const nodos = [...vault.nodes.values()].filter((n) => completados.has(n.id) && (!area || n.area === area) && n.exercises.length + n.reviewBank.length > 0);
  const semilla = semillaDe(`${userId}:${today}:${area ?? "*"}:${ronda}`);
  const fails = recentFails(userId, today);
  // Primero los nodos con más peso de fallos recientes; el resto, en orden aleatorio.
  const pesoNodo = (id: string) => fails.filter((f) => f.nodeId === id).length;
  const orden = barajar(nodos, semilla).sort((a, b) => pesoNodo(b.id) - pesoNodo(a.id));
  const grupos = orden.map((n, i) =>
    barajar([...n.reviewBank, ...n.exercises], semilla + i)
      .slice(0, 2)
      .map((ex) => ({ node: n, ex, variant: currentVariant(userId, n.id, ex) })),
  );
  return interleave(grupos, max);
}

export type PracticeResult = "ok" | "incorrecta" | "espera" | "cambiada" | "sin-ejercicio" | { error: string };

/**
 * Respuesta en la práctica intercalada. No cuenta para el dominio ni adelanta el calendario; un fallo en un ejercicio
 * del nodo lo vuelve a programar para mañana (se ha olvidado).
 */
export function submitPractice(userId: number, node: VaultNode, exerciseId: string, submission: string, meta: AttemptMeta = {}): PracticeResult {
  const ex = [...node.exercises, ...node.reviewBank].find((e) => e.id === exerciseId);
  if (!ex) return "sin-ejercicio";
  if (recentExerciseFails(userId, node.id) >= MAX_EXERCISE_FAILS_PER_MINUTE) return "espera";
  const variant = currentVariant(userId, node.id, ex);
  if (meta.variant !== undefined && (meta.variant ?? null) !== variant) return "cambiada";
  const r = grade(ex, variant, submission);
  if ("error" in r) return { error: r.error };
  const today = dayKey();
  const db = getDb();
  db.transaction((tx) => {
    tx.insert(exerciseAttempts)
      .values({ userId, nodeId: node.id, exerciseId: ex.id, submittedHash: r.huella, correct: r.correcto, variant, elapsedMs: clampMs(meta.elapsedMs), mode: "intercalado" })
      .run();
    tx.insert(activityLog).values({ userId, nodeId: node.id, day: today, kind: "review_done" }).run();
    if (!r.correcto && !ex.review) {
      const sch = { step: 0, dueDay: weightedNextReview(0, false, today, []).dueDay };
      tx.insert(reviews)
        .values({ userId, nodeId: node.id, exerciseId: ex.id, ...sch })
        .onConflictDoUpdate({ target: [reviews.userId, reviews.nodeId, reviews.exerciseId], set: sch })
        .run();
    }
  });
  return r.correcto ? "ok" : "incorrecta";
}

/* ───────── Ejercicios de desarrollo con rúbrica (fase 3) ───────── */

/** Fracción de la rúbrica que hay que alcanzar para que un desarrollo cuente como resuelto. */
export const DEV_THRESHOLD = 0.6;
export const MAX_DEV_ANSWER = 20_000;

/** Solución y rúbrica (solo servidor; nunca antes de que el alumno entregue). */
export function sealedOf(ex: VaultExercise): Sellado | null {
  if (ex.type !== "desarrollo" || !ex.sealed) return null;
  try {
    return abrirSellado(ex.sealed);
  } catch {
    return null;
  }
}

/** Completa el nodo si se alcanza el dominio y no tiene flag integradora. */
function completeIfMastered(userId: number, node: VaultNode): { mastered: boolean; completedNode: boolean } {
  const m = masteryOf(node, getSolvedExercises(userId, node.id));
  if (!m.mastered || node.ctfFlag || getCompleted(userId).has(node.id)) return { mastered: m.mastered, completedNode: false };
  const now = new Date();
  getDb()
    .insert(nodeProgress)
    .values({ userId, nodeId: node.id, status: "completed", completedAt: now })
    .onConflictDoUpdate({ target: [nodeProgress.userId, nodeProgress.nodeId], set: { status: "completed", completedAt: now } })
    .run();
  return { mastered: true, completedNode: true };
}

export type DevSubmitResult =
  | { ok: true; id: number }
  | { ok: false; reason: "sin-ejercicio" | "bloqueado" | "vacia" | "larga" | "sin-repaso" | "cambiada" | "pendiente" };

/**
 * Entrega de un desarrollo. Se guarda el texto (o «en papel») y, a partir de aquí, el alumno puede ver la solución y la
 * rúbrica y puntuarse. Mientras una entrega del mismo ejercicio esté sin puntuar, no se admite otra.
 */
export function submitDevelopment(
  userId: number,
  node: VaultNode,
  exerciseId: string,
  input: { answer: string; onPaper: boolean; mode?: "estudio" | "repaso" | "intercalado"; reviewOf?: string },
): DevSubmitResult {
  const mode = input.mode ?? "estudio";
  const ex = (mode === "estudio" ? node.exercises : [...node.exercises, ...node.reviewBank]).find((e) => e.id === exerciseId);
  if (!ex || ex.type !== "desarrollo") return { ok: false, reason: "sin-ejercicio" };
  const answer = input.onPaper ? "" : input.answer.trim();
  if (!input.onPaper && !answer) return { ok: false, reason: "vacia" };
  if (answer.length > MAX_DEV_ANSWER) return { ok: false, reason: "larga" };
  if (mode === "estudio" && stateOf(node, getCompleted(userId)) === "locked") return { ok: false, reason: "bloqueado" };
  if (mode === "repaso") {
    const scheduled = node.exercises.find((e) => e.id === input.reviewOf);
    const row = scheduled && getDb().select().from(reviews).where(and(eq(reviews.userId, userId), eq(reviews.nodeId, node.id), eq(reviews.exerciseId, scheduled.id))).get();
    if (!scheduled || !row || row.dueDay > dayKey()) return { ok: false, reason: "sin-repaso" };
    if (reviewQuestion(userId, node, scheduled, row.step).ex.id !== ex.id) return { ok: false, reason: "cambiada" };
  }
  const pendiente = getDb()
    .select({ id: developmentSubmissions.id })
    .from(developmentSubmissions)
    .where(and(eq(developmentSubmissions.userId, userId), eq(developmentSubmissions.nodeId, node.id), eq(developmentSubmissions.exerciseId, ex.id), sql`${developmentSubmissions.gradedAt} is null`))
    .get();
  if (pendiente) return { ok: false, reason: "pendiente" };
  const fila = getDb()
    .insert(developmentSubmissions)
    .values({ userId, nodeId: node.id, exerciseId: ex.id, answer, onPaper: input.onPaper, mode, reviewOf: mode === "repaso" ? input.reviewOf : null })
    .returning({ id: developmentSubmissions.id })
    .get();
  logActivity(userId, "exercise_attempt", node.id);
  return { ok: true, id: fila.id };
}

export type DevGradeResult =
  | { ok: true; score: number; max: number; solved: boolean; mastered: boolean; completedNode: boolean }
  | { ok: false; reason: "no-existe" | "puntuada" | "puntos" };

/**
 * El alumno se puntúa criterio a criterio. Con al menos el 60 % de la rúbrica, el ejercicio cuenta como resuelto
 * (dominio y repaso, como cualquier otro); por debajo cuenta como fallo (y se puede etiquetar en el diario de errores).
 */
export function gradeDevelopment(userId: number, vault: Vault, submissionId: number, scores: number[]): DevGradeResult {
  const db = getDb();
  const sub = db.select().from(developmentSubmissions).where(eq(developmentSubmissions.id, submissionId)).get();
  if (!sub || sub.userId !== userId) return { ok: false, reason: "no-existe" };
  if (sub.gradedAt) return { ok: false, reason: "puntuada" };
  const node = vault.nodes.get(sub.nodeId);
  const ex = node && [...node.exercises, ...node.reviewBank].find((e) => e.id === sub.exerciseId);
  const sellado = ex && sealedOf(ex);
  if (!node || !ex || !sellado) return { ok: false, reason: "no-existe" };
  if (scores.length !== sellado.rubric.length || scores.some((s, i) => !Number.isInteger(s) || s < 0 || s > sellado.rubric[i].puntos)) {
    return { ok: false, reason: "puntos" };
  }
  const score = scores.reduce((a, b) => a + b, 0);
  const max = sellado.rubric.reduce((a, c) => a + c.puntos, 0);
  const solved = score >= DEV_THRESHOLD * max;
  const today = dayKey();
  db.transaction((tx) => {
    tx.update(developmentSubmissions)
      .set({ scores: JSON.stringify(scores), score, maxScore: max, gradedAt: new Date() })
      .where(eq(developmentSubmissions.id, submissionId))
      .run();
    // Un intento como los demás: alimenta el diario de errores, la actividad y la ponderación del repaso.
    tx.insert(exerciseAttempts)
      .values({ userId, nodeId: node.id, exerciseId: ex.id, submittedHash: `desarrollo:${submissionId}`, correct: solved, mode: sub.mode, reviewOf: sub.reviewOf })
      .run();
    tx.insert(activityLog).values({ userId, nodeId: node.id, day: today, kind: solved ? "exercise_solved" : "exercise_attempt" }).run();
    if (sub.mode === "estudio" && solved) {
      tx.insert(exerciseSolved).values({ userId, nodeId: node.id, exerciseId: ex.id }).onConflictDoNothing().run();
      const sch = firstReview(today);
      tx.insert(reviews).values({ userId, nodeId: node.id, exerciseId: ex.id, step: sch.step, dueDay: sch.dueDay }).onConflictDoNothing().run();
    }
  });
  if (sub.mode === "repaso" && sub.reviewOf) {
    const row = db.select().from(reviews).where(and(eq(reviews.userId, userId), eq(reviews.nodeId, node.id), eq(reviews.exerciseId, sub.reviewOf))).get();
    if (row) {
      const next = weightedNextReview(row.step, solved, today, failsOf(recentFails(userId, today), node.id, sub.reviewOf));
      db.update(reviews).set(next).where(and(eq(reviews.userId, userId), eq(reviews.nodeId, node.id), eq(reviews.exerciseId, sub.reviewOf))).run();
    }
  }
  if (sub.mode === "intercalado" && !solved && !ex.review) {
    const sch = { step: 0, dueDay: weightedNextReview(0, false, today, []).dueDay };
    db.insert(reviews).values({ userId, nodeId: node.id, exerciseId: ex.id, ...sch }).onConflictDoUpdate({ target: [reviews.userId, reviews.nodeId, reviews.exerciseId], set: sch }).run();
  }
  const m = sub.mode === "estudio" && solved ? completeIfMastered(userId, node) : { mastered: false, completedNode: false };
  return { ok: true, score, max, solved, ...m };
}

export type DevSubmission = typeof developmentSubmissions.$inferSelect;

/** Última entrega de un desarrollo (para mostrar su estado al volver al nodo). */
export function lastDevelopment(userId: number, nodeId: string, exerciseId: string): DevSubmission | null {
  return (
    getDb()
      .select()
      .from(developmentSubmissions)
      .where(and(eq(developmentSubmissions.userId, userId), eq(developmentSubmissions.nodeId, nodeId), eq(developmentSubmissions.exerciseId, exerciseId)))
      .orderBy(sql`${developmentSubmissions.id} desc`)
      .get() ?? null
  );
}

/** Todas las entregas de desarrollo de un usuario (para la exportación a Obsidian). */
export function userDevelopments(userId: number): DevSubmission[] {
  return getDb().select().from(developmentSubmissions).where(eq(developmentSubmissions.userId, userId)).orderBy(developmentSubmissions.id).all();
}
