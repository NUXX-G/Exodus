import "server-only";
import { and, desc, eq, isNull } from "drizzle-orm";
import { getDb, schema } from "./db";
import { semillaDe } from "./cas";
import { applyVerdict, diagResult, initDiag, pickProbe, probeVerdict, type DiagState } from "./diagnostico";
import { getCompleted, gradeExercise } from "./progress";
import { studyOrder } from "./study";
import type { Vault, VaultExercise, VaultNode } from "./vault";

const { diagnosticSessions, diagnosticMarks } = schema;

/** Tipos que se pueden preguntar en la prueba de nivel (corrección automática e inmediata). */
const PREGUNTABLES = new Set(["texto", "numero", "expresion", "matriz", "opcion"]);
const POR_SONDA = 3;

/** Candidatas de un nodo: primero el banco de repaso (preguntas distintas de las del nodo), después los ejercicios. */
function candidatas(node: VaultNode): VaultExercise[] {
  return [...node.reviewBank, ...node.exercises].filter((e) => PREGUNTABLES.has(e.type));
}

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

/** Prepara la siguiente sonda si no hay ninguna en curso (o termina si no quedan nodos con preguntas). */
function prepara(s: DiagState, vault: Vault, sessionId: number): DiagState {
  if (s.done || s.probe) return s;
  const i = pickProbe(s, (id) => {
    const n = vault.nodes.get(id);
    return !!n && candidatas(n).length > 0;
  });
  if (i === null) return { ...s, done: true };
  const node = vault.nodes.get(s.order[i])!;
  const elegidas = barajar(candidatas(node), semillaDe(`${sessionId}:${node.id}`)).slice(0, POR_SONDA);
  return {
    ...s,
    probe: {
      index: i,
      questions: elegidas.map((e) => ({
        nodeId: node.id,
        exerciseId: e.id,
        // Una variante cualquiera (no la que le toca en el nodo, para no gastarla).
        variant: e.variants?.length ? semillaDe(`${sessionId}:${e.id}:v`) % e.variants.length : null,
      })),
    },
  };
}

export interface DiagSession {
  id: number;
  area: string;
  state: DiagState;
  startNodeId: string | null;
  startedAt: Date;
  finishedAt: Date | null;
}

const fila = (r: typeof diagnosticSessions.$inferSelect): DiagSession => ({ ...r, state: JSON.parse(r.state) as DiagState });

/** Empieza (o retoma, si hay una a medias) la prueba de nivel de un área. */
export function startDiagnostic(userId: number, vault: Vault, area: string): number {
  const db = getDb();
  const abierta = db
    .select()
    .from(diagnosticSessions)
    .where(and(eq(diagnosticSessions.userId, userId), eq(diagnosticSessions.area, area), isNull(diagnosticSessions.finishedAt)))
    .get();
  if (abierta) return abierta.id;
  const order = studyOrder(vault)
    .filter((n) => n.area === area)
    .map((n) => n.id);
  const id = db.insert(diagnosticSessions).values({ userId, area, state: JSON.stringify(initDiag(area, order)) }).returning({ id: diagnosticSessions.id }).get().id;
  const s = prepara(initDiag(area, order), vault, id);
  db.update(diagnosticSessions).set({ state: JSON.stringify(s) }).where(eq(diagnosticSessions.id, id)).run();
  if (s.done) finish(userId, id, s);
  return id;
}

export function getDiagSession(userId: number, id: number): DiagSession | null {
  const r = getDb().select().from(diagnosticSessions).where(eq(diagnosticSessions.id, id)).get();
  return r && r.userId === userId ? fila(r) : null;
}

/** Pregunta en curso: nodo, ejercicio, variante y número de pregunta. */
export function currentDiagQuestion(s: DiagState, vault: Vault): { node: VaultNode; ex: VaultExercise; variant: number | null; numero: number } | null {
  if (s.done || !s.probe) return null;
  const q = s.probe.questions.find((x) => x.correct === undefined);
  const node = q && vault.nodes.get(q.nodeId);
  const ex = node && candidatas(node).find((e) => e.id === q.exerciseId);
  if (!q || !node || !ex) return null;
  const hechas = s.history.reduce((a, h) => a + h.preguntas, 0) + s.probe.questions.filter((x) => x.correct !== undefined).length;
  return { node, ex, variant: q.variant, numero: hechas + 1 };
}

export type DiagAnswer = { ok: true; done: boolean } | { ok: false; error: string };

/**
 * Responde la pregunta en curso. «No lo sé» (`dontKnow`) cuenta como fallo: es mejor que adivinar, porque el
 * diagnóstico solo sirve si es honesto. Las respuestas no cuentan como intentos de ejercicio.
 */
export function answerDiagnostic(userId: number, vault: Vault, id: number, submission: string, opts: { askedId?: string; dontKnow?: boolean } = {}): DiagAnswer {
  const ses = getDiagSession(userId, id);
  if (!ses || ses.finishedAt) return { ok: false, error: "Esta prueba ya ha terminado." };
  let s = ses.state;
  const actual = currentDiagQuestion(s, vault);
  if (!actual) return { ok: false, error: "No hay pregunta pendiente. Recarga la página." };
  if (opts.askedId !== undefined && opts.askedId !== actual.ex.id) return { ok: false, error: "La pregunta ha cambiado (¿otra pestaña?). Recarga la página." };
  let correcto = false;
  if (!opts.dontKnow) {
    const r = gradeExercise(actual.ex, actual.variant, submission);
    if ("error" in r) return { ok: false, error: `No entiendo la respuesta: ${r.error}.` };
    correcto = r.correcto;
  }
  const probe = s.probe!;
  const questions = probe.questions.map((q) => (q.exerciseId === actual.ex.id && q.correct === undefined ? { ...q, correct: correcto } : q));
  s = { ...s, probe: { ...probe, questions } };
  const respondidas = questions.filter((q) => q.correct !== undefined).map((q) => q.correct!);
  const v = probeVerdict(respondidas);
  // Sin más preguntas en el nodo, se decide con lo que hay.
  const agotadas = respondidas.length === questions.length;
  if (v !== "more" || agotadas) s = applyVerdict(s, v === "pass" || (v === "more" && respondidas.filter(Boolean).length * 2 > respondidas.length));
  s = prepara(s, vault, id);
  getDb().update(diagnosticSessions).set({ state: JSON.stringify(s) }).where(eq(diagnosticSessions.id, id)).run();
  if (s.done) finish(userId, id, s);
  return { ok: true, done: s.done };
}

/** Termina: sustituye las marcas del área y guarda dónde empezar. */
function finish(userId: number, id: number, s: DiagState) {
  const db = getDb();
  const { mastered, start } = diagResult(s);
  const completados = getCompleted(userId);
  db.transaction((tx) => {
    tx.delete(diagnosticMarks).where(and(eq(diagnosticMarks.userId, userId), eq(diagnosticMarks.area, s.area))).run();
    for (const nodeId of mastered) {
      if (!completados.has(nodeId)) tx.insert(diagnosticMarks).values({ userId, nodeId, area: s.area, sessionId: id }).onConflictDoNothing().run();
    }
    tx.update(diagnosticSessions).set({ finishedAt: new Date(), startNodeId: start }).where(eq(diagnosticSessions.id, id)).run();
  });
}

/** Quita marcas «dominado por diagnóstico»: de un nodo, de un área o todas. */
export function undoDiagnosis(userId: number, opts: { nodeId?: string; area?: string } = {}): number {
  const conds = [eq(diagnosticMarks.userId, userId)];
  if (opts.nodeId) conds.push(eq(diagnosticMarks.nodeId, opts.nodeId));
  if (opts.area) conds.push(eq(diagnosticMarks.area, opts.area));
  return getDb().delete(diagnosticMarks).where(and(...conds)).run().changes;
}

/** Última prueba de cada área (para /diagnostico). */
export function lastDiagnostics(userId: number): Map<string, DiagSession> {
  const out = new Map<string, DiagSession>();
  for (const r of getDb().select().from(diagnosticSessions).where(eq(diagnosticSessions.userId, userId)).orderBy(desc(diagnosticSessions.id)).all()) {
    if (!out.has(r.area)) out.set(r.area, fila(r));
  }
  return out;
}

/** Marcas por área (cuántos nodos dominados por diagnóstico). */
export function marksByArea(userId: number): Map<string, number> {
  const out = new Map<string, number>();
  for (const r of getDb().select({ area: diagnosticMarks.area }).from(diagnosticMarks).where(eq(diagnosticMarks.userId, userId)).all()) {
    out.set(r.area, (out.get(r.area) ?? 0) + 1);
  }
  return out;
}
