import "server-only";
import { and, desc, eq, isNull } from "drizzle-orm";
import { getDb, schema } from "./db";
import { semillaDe } from "./cas";
import { dayKey, getCompleted, getDiagnosed, gradeExercise, sealedOf, stateOf } from "./progress";
import type { Vault, VaultExercise, VaultNode } from "./vault";

const { examAttempts, nodeProgress, activityLog } = schema;

/** En modo papel, tras el tiempo del examen hay unos minutos para pasar los resultados. */
export const PAPER_GRACE_MIN = 10;

export interface ExamItem {
  ref: string;
  puntos: number;
  variant: number | null;
}

export type ItemEstado = "bien" | "mal" | "sin-respuesta" | "pendiente";

export interface ItemResult {
  ref: string;
  estado: ItemEstado;
  puntos: number;
  max: number;
}

export interface ExamAttempt {
  id: number;
  nodeId: string;
  mode: "normal" | "papel";
  items: ExamItem[];
  answers: Record<string, string>;
  results: ItemResult[] | null;
  score: number | null;
  maxScore: number | null;
  step: number;
  startedAt: Date;
  deadline: Date | null;
  finishedAt: Date | null;
}

const parse = (r: typeof examAttempts.$inferSelect): ExamAttempt => ({
  ...r,
  items: JSON.parse(r.items),
  answers: JSON.parse(r.answers),
  results: r.results ? JSON.parse(r.results) : null,
});

/** Ejercicio al que apunta un item: `nodo/ejercicio` o `./ejercicio` (propio del examen). */
export function resolveItem(vault: Vault, exam: VaultNode, ref: string): { node: VaultNode; ex: VaultExercise } | null {
  const [nid, eid] = ref.split("/");
  const node = nid === "." ? exam : vault.nodes.get(nid);
  if (!node) return null;
  const lista = nid === "." ? node.examExercises : [...node.exercises, ...node.reviewBank];
  const ex = lista.find((e) => e.id === eid);
  return ex ? { node, ex } : null;
}

export function getExamAttempt(userId: number, id: number): ExamAttempt | null {
  const r = getDb().select().from(examAttempts).where(eq(examAttempts.id, id)).get();
  return r && r.userId === userId ? parse(r) : null;
}

export function listExamAttempts(userId: number, nodeId: string): ExamAttempt[] {
  return getDb()
    .select()
    .from(examAttempts)
    .where(and(eq(examAttempts.userId, userId), eq(examAttempts.nodeId, nodeId)))
    .orderBy(desc(examAttempts.id))
    .all()
    .map(parse);
}

/** ¿Se acabó el tiempo? (con margen para pasar resultados en modo papel). */
export function expired(a: ExamAttempt, now = new Date()): boolean {
  if (!a.deadline) return false;
  const limite = a.deadline.getTime() + (a.mode === "papel" ? PAPER_GRACE_MIN * 60_000 : 0);
  return now.getTime() > limite;
}

export type StartResult = { ok: true; id: number } | { ok: false; reason: "no-examen" | "bloqueado" | "papel" };

/** Empieza un intento (o devuelve el que está en curso). Fija los items y sus variantes. */
export function startExam(userId: number, vault: Vault, node: VaultNode, mode: "normal" | "papel"): StartResult {
  if (node.kind !== "examen" || !node.exam) return { ok: false, reason: "no-examen" };
  if (stateOf(node, getCompleted(userId), getDiagnosed(userId)) === "locked") return { ok: false, reason: "bloqueado" };
  if (mode === "papel" && !node.exam.paper) return { ok: false, reason: "papel" };
  const db = getDb();
  const abierto = db
    .select()
    .from(examAttempts)
    .where(and(eq(examAttempts.userId, userId), eq(examAttempts.nodeId, node.id), isNull(examAttempts.finishedAt)))
    .get();
  if (abierto) {
    const a = parse(abierto);
    if (!expired(a)) return { ok: true, id: a.id };
    submitExam(userId, vault, a.id); // caducado: se entrega con lo que haya
  }
  const ahora = new Date();
  const deadline = node.exam.duration && !node.exam.chained ? new Date(ahora.getTime() + node.exam.duration * 60_000) : null;
  const id = db.insert(examAttempts).values({ userId, nodeId: node.id, mode, items: "[]", startedAt: ahora, deadline }).returning({ id: examAttempts.id }).get().id;
  const items: ExamItem[] = node.exam.items.map((it) => {
    const r = resolveItem(vault, node, it.ref);
    const n = r?.ex.variants?.length ?? 0;
    return { ref: it.ref, puntos: it.puntos, variant: n ? semillaDe(`${id}:${it.ref}`) % n : null };
  });
  db.update(examAttempts).set({ items: JSON.stringify(items) }).where(eq(examAttempts.id, id)).run();
  return { ok: true, id };
}

/** Guarda una respuesta mientras se hace el examen (no corrige). */
export function saveExamAnswer(userId: number, id: number, ref: string, answer: string): boolean {
  const a = getExamAttempt(userId, id);
  if (!a || a.finishedAt || expired(a) || !a.items.some((i) => i.ref === ref)) return false;
  const answers = { ...a.answers, [ref]: answer.slice(0, 20_000) };
  getDb().update(examAttempts).set({ answers: JSON.stringify(answers) }).where(eq(examAttempts.id, id)).run();
  return true;
}

function corrige(vault: Vault, exam: VaultNode, it: ExamItem, respuesta: string | undefined): ItemResult {
  const r = resolveItem(vault, exam, it.ref);
  if (!r) return { ref: it.ref, estado: "sin-respuesta", puntos: 0, max: it.puntos };
  if (r.ex.type === "desarrollo") {
    return { ref: it.ref, estado: respuesta?.trim() ? "pendiente" : "sin-respuesta", puntos: 0, max: it.puntos };
  }
  if (!respuesta?.trim()) return { ref: it.ref, estado: "sin-respuesta", puntos: 0, max: it.puntos };
  const g = gradeExercise(r.ex, it.variant, respuesta);
  const bien = !("error" in g) && g.correcto;
  return { ref: it.ref, estado: bien ? "bien" : "mal", puntos: bien ? it.puntos : 0, max: it.puntos };
}

function suma(results: ItemResult[]) {
  return { score: results.reduce((s, r) => s + r.puntos, 0), max: results.reduce((s, r) => s + r.max, 0) };
}

/** Completa el nodo examen si la nota llega al mínimo y no quedan desarrollos por puntuar. */
function completaSiAprueba(userId: number, node: VaultNode, results: ItemResult[]) {
  if (results.some((r) => r.estado === "pendiente")) return;
  const { score, max } = suma(results);
  if (max === 0 || score < (node.exam?.pass ?? 0.5) * max) return;
  const now = new Date();
  getDb()
    .insert(nodeProgress)
    .values({ userId, nodeId: node.id, status: "completed", completedAt: now })
    .onConflictDoUpdate({ target: [nodeProgress.userId, nodeProgress.nodeId], set: { status: "completed", completedAt: now } })
    .run();
}

/** Entrega: corrige lo automático; los desarrollos quedan pendientes de la rúbrica. */
export function submitExam(userId: number, vault: Vault, id: number): ExamAttempt | null {
  const a = getExamAttempt(userId, id);
  const node = a && vault.nodes.get(a.nodeId);
  if (!a || !node) return null;
  if (a.finishedAt) return a;
  const results = a.items.map((it) => corrige(vault, node, it, a.answers[it.ref]));
  const { score, max } = suma(results);
  const fin = new Date();
  getDb()
    .update(examAttempts)
    .set({ results: JSON.stringify(results), score, maxScore: max, finishedAt: fin })
    .where(eq(examAttempts.id, id))
    .run();
  getDb().insert(activityLog).values({ userId, nodeId: node.id, day: dayKey(), kind: "exercise_attempt" }).run();
  completaSiAprueba(userId, node, results);
  return getExamAttempt(userId, id);
}

/** Puntúa con la rúbrica un desarrollo de un examen ya entregado. */
export function gradeExamDevelopment(userId: number, vault: Vault, id: number, ref: string, scores: number[]): boolean {
  const a = getExamAttempt(userId, id);
  const node = a && vault.nodes.get(a.nodeId);
  if (!a || !node || !a.finishedAt || !a.results) return false;
  const i = a.results.findIndex((r) => r.ref === ref && r.estado === "pendiente");
  const r = resolveItem(vault, node, ref);
  const sellado = r && sealedOf(r.ex);
  if (i < 0 || !sellado) return false;
  if (scores.length !== sellado.rubric.length || scores.some((s, k) => !Number.isInteger(s) || s < 0 || s > sellado.rubric[k].puntos)) return false;
  const frac = scores.reduce((x, y) => x + y, 0) / sellado.rubric.reduce((x, c) => x + c.puntos, 0);
  const results = a.results.map((x, k) => (k === i ? { ...x, estado: (frac >= 0.5 ? "bien" : "mal") as ItemEstado, puntos: Math.round(frac * x.max * 100) / 100 } : x));
  const { score, max } = suma(results);
  getDb().update(examAttempts).set({ results: JSON.stringify(results), score, maxScore: max }).where(eq(examAttempts.id, id)).run();
  completaSiAprueba(userId, node, results);
  return true;
}

export type ChainResult = { ok: true; correcto: boolean; terminado: boolean } | { ok: false; error: string };

/** Reto encadenado: responde el paso actual; si acierta, se desbloquea el siguiente. */
export function answerChainStep(userId: number, vault: Vault, id: number, answer: string): ChainResult {
  const a = getExamAttempt(userId, id);
  const node = a && vault.nodes.get(a.nodeId);
  if (!a || !node || a.finishedAt) return { ok: false, error: "Este reto ya está terminado." };
  const it = a.items[a.step];
  const r = it && resolveItem(vault, node, it.ref);
  if (!it || !r) return { ok: false, error: "No hay paso pendiente." };
  if (r.ex.type === "desarrollo") return { ok: false, error: "Un reto encadenado no admite pasos de desarrollo." };
  const g = gradeExercise(r.ex, it.variant, answer);
  if ("error" in g) return { ok: false, error: `No entiendo la respuesta: ${g.error}.` };
  if (!g.correcto) return { ok: true, correcto: false, terminado: false };
  const step = a.step + 1;
  const answers = { ...a.answers, [it.ref]: answer.slice(0, 2000) };
  getDb().update(examAttempts).set({ step, answers: JSON.stringify(answers) }).where(eq(examAttempts.id, id)).run();
  if (step === a.items.length) {
    submitExam(userId, vault, id);
    return { ok: true, correcto: true, terminado: true };
  }
  return { ok: true, correcto: true, terminado: false };
}
