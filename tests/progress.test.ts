import "./db-temporal";
import assert from "node:assert/strict";
import { test } from "node:test";
import { getDb, schema } from "../src/lib/db";
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
} from "../src/lib/progress";
import { sha256, type Vault, type VaultExercise, type VaultNode } from "../src/lib/vault";
import { eq } from "drizzle-orm";

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
    attachments: [],
    file: `${id}.md`,
    body: "",
    ...opts,
  } as VaultNode;
}

const ejercicios = (n: number): VaultExercise[] =>
  Array.from({ length: n }, (_, i) => ({ id: `e${i}`, tier: 1, prompt: "¿?", answers: [hashAnswer(String(i))] }));

let n = 0;
function makeUser(): number {
  return getDb().insert(schema.users).values({ username: `u${n++}` }).returning({ id: schema.users.id }).get().id;
}

test("estados: disponible sin prerrequisitos, bloqueado hasta completarlos, completado tras la flag", () => {
  const a = node("a"), b = node("b", { prerequisites: ["a"] });
  const vault: Vault = { nodes: new Map([["a", a], ["b", b]]), issues: [] };
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
