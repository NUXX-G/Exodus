import assert from "node:assert/strict";
import { test } from "node:test";
import {
  addDays,
  checkAnswer,
  firstReview,
  hashAnswer,
  masteryNeeded,
  nextReview,
  normalizeAnswer,
  REVIEW_INTERVALS,
} from "../src/lib/exercises";

test("normaliza espacios, mayúsculas, coma decimal, signo menos y + inicial", () => {
  assert.equal(normalizeAnswer(" X = 3 "), "x=3");
  assert.equal(normalizeAnswer("1,5"), "1.5");
  assert.equal(normalizeAnswer("−2"), "-2");
  assert.equal(normalizeAnswer("+7"), "7");
  assert.equal(normalizeAnswer("3 / 4"), "3/4");
  // la coma que separa elementos no se toca si no es decimal
  assert.equal(normalizeAnswer("1, 2"), "1,2");
});

test("checkAnswer acepta cualquiera de las respuestas y rechaza el resto", () => {
  const acc = [hashAnswer("3/4"), hashAnswer("0.75")];
  assert.equal(checkAnswer(acc, " 3 / 4"), true);
  assert.equal(checkAnswer(acc, "0,75"), true);
  assert.equal(checkAnswer(acc, "6/8"), false);
  assert.equal(checkAnswer(acc, ""), false);
});

test("el hash tiene el formato sha256:<64 hex>", () => {
  assert.match(hashAnswer("42"), /^sha256:[0-9a-f]{64}$/);
});

test("el dominio exige el 80 % redondeado hacia arriba", () => {
  assert.equal(masteryNeeded(0), 0);
  assert.equal(masteryNeeded(5), 4);
  assert.equal(masteryNeeded(10), 8);
  assert.equal(masteryNeeded(12), 10);
});

test("addDays cruza meses, años y bisiestos", () => {
  assert.equal(addDays("2026-01-31", 1), "2026-02-01");
  assert.equal(addDays("2026-12-31", 1), "2027-01-01");
  assert.equal(addDays("2028-02-28", 1), "2028-02-29");
  assert.equal(addDays("2026-03-01", -1), "2026-02-28");
});

test("el calendario de repaso sube un paso al acertar y vuelve a 0 al fallar", () => {
  const s0 = firstReview("2026-05-01");
  assert.deepEqual(s0, { step: 0, dueDay: "2026-05-02" });
  const s1 = nextReview(0, true, "2026-05-02");
  assert.deepEqual(s1, { step: 1, dueDay: "2026-05-05" }); // +3 días
  const s2 = nextReview(1, true, "2026-05-05");
  assert.deepEqual(s2, { step: 2, dueDay: "2026-05-12" }); // +7 días
  assert.deepEqual(nextReview(2, false, "2026-05-12"), { step: 0, dueDay: "2026-05-13" });
});

test("el último intervalo es el techo del calendario", () => {
  const top = REVIEW_INTERVALS.length - 1;
  assert.equal(nextReview(top, true, "2026-01-01").step, top);
  assert.equal(nextReview(top, true, "2026-01-01").dueDay, addDays("2026-01-01", REVIEW_INTERVALS[top]));
});
