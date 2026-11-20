import "./db-temporal";
import assert from "node:assert/strict";
import { test } from "node:test";
import { getDb, schema } from "../src/lib/db";
import { mergeAreas } from "../src/lib/areas";
import { addDays, hashAnswer, REVIEW_INTERVALS } from "../src/lib/exercises";
import {
  computeStates,
  dayKey,
  getActivity,
  getCompleted,
  getDueReviews,
  getRevealedLevels,
  getSolvedExercises,
  masteryOf,
  recordOpen,
  revealNextHint,
  stateOf,
  submitExercise,
  submitFlag,
  submitReview,
  createReport,
  currentVariant,
  listReports,
  promptOf,
  resolveReport,
  reviewQuestion,
  errorStats,
  interleavedSet,
  lastAttemptId,
  submitPractice,
  tagAttempt,
} from "../src/lib/progress";
import { sha256, type Vault, type VaultExercise, type VaultNode } from "../src/lib/vault";
import { REGISTRO, salDe } from "../src/lib/tipos-ejercicio";
import { and, eq } from "drizzle-orm";

const FLAG = "EXODUS{prueba}";

function node(id: string, opts: Partial<VaultNode> = {}): VaultNode {
  return {
    id,
    title: id,
    area: "matematicas",
    trunkLevel: 0,
    prerequisites: [],
    academicSources: [],
    ctfFlag: null,
    hints: [],
    exercises: [],
    reviewBank: [],
    attachments: [],
    file: `${id}.md`,
    body: "",
    ...opts,
  } as VaultNode;
}

const ejercicios = (n: number): VaultExercise[] =>
  Array.from({ length: n }, (_, i) => ({ id: `e${i}`, tier: 1, type: "texto", review: false, prompt: "¿?", answers: [hashAnswer(String(i))] }));

let n = 0;
function makeUser(): number {
  return getDb().insert(schema.users).values({ username: `u${n++}` }).returning({ id: schema.users.id }).get().id;
}

test("estados: disponible sin prerrequisitos, bloqueado hasta completarlos, completado tras la flag", () => {
  const a = node("a"), b = node("b", { prerequisites: ["a"] });
  const vault: Vault = { nodes: new Map([["a", a], ["b", b]]), areas: mergeAreas(undefined).areas, issues: [] };
  const st = computeStates(vault, new Set());
  assert.equal(st.get("a"), "available");
  assert.equal(st.get("b"), "locked");
  assert.equal(stateOf(b, new Set(["a"])), "available");
  assert.equal(stateOf(a, new Set(["a"])), "completed");
});

test("abrir un nodo registra actividad una sola vez por día", () => {
  const u = makeUser();
  recordOpen(u, "a");
  recordOpen(u, "a");
  recordOpen(u, "b");
  const rows = getDb().select().from(schema.activityLog).where(eq(schema.activityLog.userId, u)).all();
  assert.equal(rows.filter((r) => r.kind === "node_opened").length, 2);
  assert.equal(getActivity(u, 30).days[dayKey()], 2);
});

test("las pistas se revelan en orden y no pasan del número disponible", () => {
  const u = makeUser();
  const nd = node("p", { hints: ["uno", "dos", "tres"] });
  assert.deepEqual(revealNextHint(u, nd), [1]);
  assert.deepEqual(revealNextHint(u, nd), [1, 2]);
  assert.deepEqual(revealNextHint(u, nd), [1, 2, 3]);
  assert.deepEqual(revealNextHint(u, nd), [1, 2, 3]);
  assert.deepEqual(getRevealedLevels(u, "p"), [1, 2, 3]);
});

test("flag: sin reto, bloqueada, incorrecta, correcta e idempotente; guarda solo el hash", () => {
  const u = makeUser();
  assert.deepEqual(submitFlag(u, node("x"), FLAG), { ok: false, reason: "sin-reto" });

  const base = node("base");
  const reto = node("reto", { prerequisites: ["base"], ctfFlag: "sha256:" + sha256(FLAG), hints: ["h"] });
  assert.deepEqual(submitFlag(u, reto, FLAG), { ok: false, reason: "bloqueado" });

  getDb().insert(schema.nodeProgress).values({ userId: u, nodeId: base.id, status: "completed" }).run();
  revealNextHint(u, reto);
  assert.deepEqual(submitFlag(u, reto, "EXODUS{otra}"), { ok: false, reason: "incorrecta" });
  assert.deepEqual(submitFlag(u, reto, `  ${FLAG}  `), { ok: true });
  assert.ok(getCompleted(u).has("reto"));
  assert.deepEqual(submitFlag(u, reto, "lo que sea"), { ok: true }, "un nodo completado no vuelve a evaluarse");

  const envios = getDb().select().from(schema.flagSubmissions).where(eq(schema.flagSubmissions.userId, u)).all();
  assert.equal(envios.length, 2);
  assert.ok(envios.every((e) => !e.submittedHash.includes("EXODUS")));
  assert.equal(envios.find((e) => e.correct)!.hintsUsed, 1);
  assert.equal(getActivity(u, 30).flagsCaptured, 2, "cuenta los nodos completados: base y reto");
});

test("flag: freno de 10 fallos por minuto y nodo", () => {
  const u = makeUser();
  const reto = node("frenado", { ctfFlag: "sha256:" + sha256(FLAG) });
  for (let i = 0; i < 10; i++) assert.equal(submitFlag(u, reto, `mal-${i}`).ok, false);
  const r = submitFlag(u, reto, FLAG);
  assert.equal(r.ok, false);
  assert.equal(!r.ok && r.reason, "espera");
});

test("flag con ejercicios: solo se acepta tras el dominio del 80 %", () => {
  const u = makeUser();
  const nd = node("dominio", { ctfFlag: "sha256:" + sha256(FLAG), exercises: ejercicios(5) });
  assert.deepEqual(submitFlag(u, nd, FLAG), { ok: false, reason: "dominio" });
  for (let i = 0; i < 4; i++) assert.equal(submitExercise(u, nd, `e${i}`, String(i)).ok, true);
  assert.equal(masteryOf(nd, getSolvedExercises(u, nd.id)).mastered, true);
  assert.deepEqual(submitFlag(u, nd, FLAG), { ok: true });
});

test("ejercicios: corrige, programa el repaso y completa el nodo sin flag al alcanzar el dominio", () => {
  const u = makeUser();
  const nd = node("sin-flag", { exercises: ejercicios(5) });
  assert.deepEqual(submitExercise(u, nd, "no-existe", "0"), { ok: false, reason: "sin-ejercicio" });
  assert.deepEqual(submitExercise(u, nd, "e0", "999"), { ok: false, reason: "incorrecta" });
  assert.deepEqual(submitExercise(u, nd, "e0", " 0 "), { ok: true, mastered: false, completedNode: false });
  assert.deepEqual(submitExercise(u, nd, "e0", "0"), { ok: true, mastered: false, completedNode: false }, "repetir no cuenta doble");
  assert.deepEqual(getSolvedExercises(u, nd.id), ["e0"]);
  for (let i = 1; i < 3; i++) submitExercise(u, nd, `e${i}`, String(i));
  assert.deepEqual(submitExercise(u, nd, "e3", "3"), { ok: true, mastered: true, completedNode: true });
  assert.ok(getCompleted(u).has(nd.id));

  const hoy = dayKey();
  assert.deepEqual(getDueReviews(u, hoy), [], "el primer repaso no es el mismo día");
  const manana = addDays(hoy, REVIEW_INTERVALS[0]);
  assert.equal(getDueReviews(u, manana).length, 4);
});

test("ejercicios bloqueados mientras falten prerrequisitos", () => {
  const u = makeUser();
  const nd = node("tras-base", { prerequisites: ["nunca"], exercises: ejercicios(1) });
  assert.deepEqual(submitExercise(u, nd, "e0", "0"), { ok: false, reason: "bloqueado" });
});

test("repaso: un acierto alarga el intervalo y un fallo lo reinicia", () => {
  const u = makeUser();
  const nd = node("repaso", { exercises: ejercicios(1) });
  submitExercise(u, nd, "e0", "0");
  const fila = () => getDb().select().from(schema.reviews).where(eq(schema.reviews.userId, u)).get()!;
  // Se adelanta el repaso a hoy para poder hacerlo.
  getDb().update(schema.reviews).set({ dueDay: dayKey() }).where(eq(schema.reviews.userId, u)).run();
  const paso = fila().step;
  assert.equal(submitReview(u, nd, "e0", "0"), "ok");
  assert.equal(fila().step, paso + 1);
  assert.equal(submitReview(u, nd, "e0", "0"), "sin-repaso", "ya no toca hoy");
  getDb().update(schema.reviews).set({ dueDay: dayKey() }).where(eq(schema.reviews.userId, u)).run();
  assert.equal(submitReview(u, nd, "e0", "mal"), "incorrecta");
  assert.equal(fila().step, 0);
});

test("racha: días consecutivos con actividad hasta hoy", () => {
  const u = makeUser();
  const d = (k: number) => {
    const x = new Date();
    x.setDate(x.getDate() - k);
    return dayKey(x);
  };
  for (const k of [0, 1, 2, 4]) getDb().insert(schema.activityLog).values({ userId: u, kind: "node_opened", nodeId: "a", day: d(k) }).run();
  assert.equal(getActivity(u, 30).streak, 3);
});

/* ───────── v2: tipos, variantes, banco de repaso y reportes ───────── */

const numerico = (id: string, valores: number[], extra: Partial<VaultExercise> = {}): VaultExercise => ({
  id,
  tier: 2,
  type: "numero",
  review: false,
  sig: 3,
  prompt: "Calcula {{a}} · 2",
  answers: [],
  variants: valores.map((a, i) => ({ values: { a }, answers: REGISTRO.numero.referencia(String(a * 2), { id, type: "numero", sig: 3 }, salDe(id, i)) })),
  ...extra,
});

test("variantes: cada acierto pasa a otros datos; fallar no los cambia", () => {
  const u = makeUser();
  const ex = numerico("doble", [3, 5, 7]);
  const nd = node("variantes", { exercises: [ex] });
  const v0 = currentVariant(u, nd.id, ex)!;
  const a = [3, 5, 7][v0];
  assert.match(promptOf(ex, v0), new RegExp(`Calcula ${a} `));
  assert.deepEqual(submitExercise(u, nd, "doble", "999", { variant: v0 }), { ok: false, reason: "incorrecta" });
  assert.equal(currentVariant(u, nd.id, ex), v0, "fallar no cambia la variante");
  // Respuesta de otra variante: incorrecta.
  const otra = [3, 5, 7][(v0 + 1) % 3] * 2;
  assert.equal(submitExercise(u, nd, "doble", String(otra), { variant: v0 }).ok, false);
  assert.equal(submitExercise(u, nd, "doble", String(a * 2), { variant: v0 }).ok, true);
  const v1 = currentVariant(u, nd.id, ex);
  assert.notEqual(v1, v0);
  // Una página antigua (variante vieja) se detecta y no cuenta.
  assert.deepEqual(submitExercise(u, nd, "doble", String(a * 2), { variant: v0 }), { ok: false, reason: "variante" });
  const fila = getDb().select().from(schema.exerciseAttempts).where(eq(schema.exerciseAttempts.userId, u)).all().at(-1)!;
  assert.equal(fila.variant, v0);
  assert.equal(fila.mode, "estudio");
});

test("respuesta ilegible: no cuenta como intento", () => {
  const u = makeUser();
  const nd = node("ilegible", { exercises: [numerico("doble", [3])] });
  const r = submitExercise(u, nd, "doble", "tres", { variant: 0 });
  assert.equal(r.ok, false);
  assert.equal((r as { reason: string }).reason, "ilegible");
  assert.equal(getDb().select().from(schema.exerciseAttempts).where(eq(schema.exerciseAttempts.userId, u)).all().length, 0);
});

test("repaso: pregunta del banco distinta del ejercicio original, y se registra como repaso", () => {
  const u = makeUser();
  const banco: VaultExercise = { id: "por-que", tier: 2, type: "texto", review: true, prompt: "¿Por qué?", answers: [hashAnswer("porque")] };
  const nd = node("con-banco", { exercises: ejercicios(1), reviewBank: [banco] });
  submitExercise(u, nd, "e0", "0");
  getDb().update(schema.reviews).set({ dueDay: dayKey() }).where(eq(schema.reviews.userId, u)).run();
  const q = reviewQuestion(u, nd, nd.exercises[0], 0);
  assert.equal(q.kind, "banco");
  assert.equal(q.ex.id, "por-que");
  assert.equal(submitReview(u, nd, "e0", "0", { askedId: "por-que" }), "incorrecta", "la respuesta del original no vale");
  getDb().update(schema.reviews).set({ dueDay: dayKey() }).where(eq(schema.reviews.userId, u)).run();
  assert.equal(submitReview(u, nd, "e0", "porque", { askedId: "e0" }), "cambiada", "no se puede elegir la pregunta");
  assert.equal(submitReview(u, nd, "e0", "porque", { askedId: "por-que" }), "ok");
  const ultimo = getDb().select().from(schema.exerciseAttempts).where(eq(schema.exerciseAttempts.userId, u)).all().at(-1)!;
  assert.equal(ultimo.mode, "repaso");
  assert.equal(ultimo.reviewOf, "e0");
  assert.equal(ultimo.exerciseId, "por-que");
  // El banco no cuenta para el dominio.
  assert.equal(masteryOf(nd, getSolvedExercises(u, nd.id)).total, 1);
});

test("repaso con variantes y sin banco: mismo problema con otros datos", () => {
  const u = makeUser();
  const ex = numerico("doble", [3, 5, 7, 9]);
  const nd = node("rep-var", { exercises: [ex] });
  const v0 = currentVariant(u, nd.id, ex)!;
  submitExercise(u, nd, "doble", String([3, 5, 7, 9][v0] * 2), { variant: v0 });
  const q = reviewQuestion(u, nd, ex, 0);
  assert.equal(q.kind, "variante");
  assert.notEqual(q.variant, v0);
});

test("reportes: se guardan pendientes, con límite y resolución", () => {
  const u = makeUser();
  assert.equal(createReport(u, "nodo-x", null, "   "), "vacio");
  assert.equal(createReport(u, "nodo-x", "e1", "La solución del 1 parece mal"), "ok");
  const pend = listReports("pendiente").filter((r) => r.nodeId === "nodo-x");
  assert.equal(pend.length, 1);
  assert.equal(pend[0].exerciseId, "e1");
  resolveReport(pend[0].id, "resuelto", "Corregido");
  assert.equal(listReports("pendiente").filter((r) => r.nodeId === "nodo-x").length, 0);
  for (let i = 0; i < 19; i++) createReport(u, "nodo-y", null, "x");
  assert.equal(createReport(u, "nodo-y", null, "uno más"), "espera");
});

/* ───────── v2 fase 2: diario de errores, prioridad y práctica intercalada ───────── */

test("diario de errores: solo se etiquetan fallos propios", () => {
  const u = makeUser();
  const otro = makeUser();
  const nd = node("diario", { exercises: ejercicios(2) });
  submitExercise(u, nd, "e0", "mal");
  const id = lastAttemptId(u)!;
  assert.equal(tagAttempt(otro, id, "concepto", null), false, "no es suyo");
  assert.equal(tagAttempt(u, id, "concepto", "  confundí la definición  "), true);
  submitExercise(u, nd, "e1", "1");
  assert.equal(tagAttempt(u, lastAttemptId(u)!, "despiste", null), false, "un acierto no se etiqueta");
  const fila = getDb().select().from(schema.exerciseAttempts).where(eq(schema.exerciseAttempts.id, id)).get()!;
  assert.equal(fila.errorTag, "concepto");
  assert.equal(fila.errorNote, "confundí la definición");
  const vault = { nodes: new Map([[nd.id, nd]]), areas: mergeAreas(undefined).areas, issues: [] } as unknown as Vault;
  const s = errorStats(u, vault);
  assert.equal(s.total, 1);
  assert.equal(s.porTipo.get("concepto"), 1);
  assert.equal(s.porNodo[0].nodeId, "diario");
});

test("repaso ponderado: primero el ejercicio con fallo de concepto; su intervalo no pasa de 7 días", () => {
  const u = makeUser();
  const nd = node("ponderado", { exercises: ejercicios(2) });
  submitExercise(u, nd, "e0", "0");
  submitExercise(u, nd, "e1", "1");
  // e1 falla por concepto (en estudio); los dos repasos vencen hoy, e0 desde hace más días.
  submitExercise(u, nd, "e1", "mal");
  tagAttempt(u, lastAttemptId(u)!, "concepto", null);
  getDb().update(schema.reviews).set({ dueDay: addDays(dayKey(), -2), step: 4 }).where(and(eq(schema.reviews.userId, u), eq(schema.reviews.exerciseId, "e0"))).run();
  getDb().update(schema.reviews).set({ dueDay: dayKey(), step: 4 }).where(and(eq(schema.reviews.userId, u), eq(schema.reviews.exerciseId, "e1"))).run();
  assert.deepEqual(getDueReviews(u).map((r) => r.exerciseId), ["e1", "e0"]);
  assert.equal(submitReview(u, nd, "e1", "1"), "ok");
  const r1 = getDb().select().from(schema.reviews).where(and(eq(schema.reviews.userId, u), eq(schema.reviews.exerciseId, "e1"))).get()!;
  assert.equal(r1.step, 2, "con un fallo de concepto reciente, como mucho 7 días");
  assert.equal(submitReview(u, nd, "e0", "0"), "ok");
  const r0 = getDb().select().from(schema.reviews).where(and(eq(schema.reviews.userId, u), eq(schema.reviews.exerciseId, "e0"))).get()!;
  assert.equal(r0.step, 5);
});

test("práctica intercalada: solo nodos completados, alternando nodos; un fallo reprograma para mañana", () => {
  const u = makeUser();
  const a = node("int-a", { exercises: ejercicios(5) });
  const b = node("int-b", { exercises: ejercicios(5) });
  const c = node("int-c", { exercises: ejercicios(5) });
  for (const n of [a, b]) for (let i = 0; i < 5; i++) submitExercise(u, n, `e${i}`, String(i));
  const vault = { nodes: new Map([a, b, c].map((n) => [n.id, n])), areas: mergeAreas(undefined).areas, issues: [] } as unknown as Vault;
  const set = interleavedSet(u, vault, null, 4);
  assert.equal(set.length, 4);
  assert.ok(set.every((p) => p.node.id !== "int-c"), "int-c no está completado");
  for (let i = 1; i < set.length; i++) assert.notEqual(set[i].node.id, set[i - 1].node.id, "alterna nodos");
  assert.deepEqual(interleavedSet(u, vault, null, 4).map((p) => p.ex.id), set.map((p) => p.ex.id), "estable en el día");
  const p = set[0];
  assert.equal(submitPractice(u, p.node, p.ex.id, "mal"), "incorrecta");
  const fila = getDb().select().from(schema.reviews).where(and(eq(schema.reviews.userId, u), eq(schema.reviews.nodeId, p.node.id), eq(schema.reviews.exerciseId, p.ex.id))).get()!;
  assert.equal(fila.dueDay, addDays(dayKey(), 1));
  assert.equal(fila.step, 0);
  const ult = getDb().select().from(schema.exerciseAttempts).where(eq(schema.exerciseAttempts.id, lastAttemptId(u)!)).get()!;
  assert.equal(ult.mode, "intercalado");
  assert.equal(submitPractice(u, p.node, p.ex.id, p.ex.id.slice(1)), "ok");
});
