import { test } from "node:test";
import assert from "node:assert/strict";
import { failWeight, interleave, reviewPriority, weekOf, weightedNextReview } from "../src/lib/errores";

const HOY = "2026-11-20";

test("peso de fallos: por tipo y desvanecido con la edad", () => {
  assert.equal(failWeight([{ day: HOY, tag: "concepto" }], HOY), 3);
  assert.equal(failWeight([{ day: HOY, tag: "despiste" }], HOY), 0.5);
  assert.equal(failWeight([{ day: HOY, tag: null }], HOY), 1);
  assert.ok(failWeight([{ day: "2026-11-10", tag: "concepto" }], HOY) < 3);
  assert.equal(failWeight([{ day: "2026-10-01", tag: "concepto" }], HOY), 0, "fuera de la ventana");
});

test("prioridad: un fallo de concepto adelanta un repaso frente a otro más atrasado sin fallos", () => {
  const sinFallos = reviewPriority("2026-11-18", HOY, [], []);
  const conConcepto = reviewPriority("2026-11-20", HOY, [{ day: "2026-11-19", tag: "concepto" }], []);
  const conDespiste = reviewPriority("2026-11-20", HOY, [{ day: "2026-11-19", tag: "despiste" }], []);
  assert.ok(conConcepto > sinFallos);
  assert.ok(conDespiste < sinFallos);
});

test("siguiente repaso: fallar = mañana; acertar con fallos de concepto recientes no pasa de 7 días", () => {
  assert.deepEqual(weightedNextReview(4, false, HOY, []), { step: 0, dueDay: "2026-11-21" });
  assert.deepEqual(weightedNextReview(3, true, HOY, []), { step: 4, dueDay: "2026-12-25" });
  assert.equal(weightedNextReview(3, true, HOY, [{ day: HOY, tag: "concepto" }]).step, 2);
  assert.equal(weightedNextReview(4, true, HOY, [{ day: HOY, tag: "mala-lectura" }]).step, 3);
  assert.equal(weightedNextReview(4, true, HOY, [{ day: HOY, tag: "despiste" }]).step, 5, "un despiste no frena");
});

test("semanas e intercalado", () => {
  assert.equal(weekOf("2026-11-20"), "2026-11-16"); // viernes → lunes
  assert.equal(weekOf("2026-11-16"), "2026-11-16");
  assert.deepEqual(interleave([["a1", "a2"], ["b1"], ["c1", "c2", "c3"]], 5), ["a1", "b1", "c1", "a2", "c2"]);
});
