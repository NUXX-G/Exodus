import { test } from "node:test";
import assert from "node:assert/strict";
import { fuenteConcreta, problemasDeEjercicio } from "../src/lib/calidad";
import type { VaultExercise, VaultNode } from "../src/lib/vault";

test("fuentes concretas frente a vagas", () => {
  for (const s of [
    "Spivak, M. Calculus, 4.ª ed., cap. 10.",
    "Apostol, Calculus vol. 1, sección 4.3",
    "RFC 8446 (TLS 1.3)",
    "NIST SP 800-86",
    "Python docs: https://docs.python.org/3/library/math.html",
    "Euclides, Elementos, libro V",
    "Kernighan y Ritchie, The C Programming Language, chapter 5",
    "Griffiths, Introduction to Electrodynamics, pp. 120-135",
  ])
    assert.ok(fuenteConcreta(s), s);
  for (const s of ["Kernighan & Ritchie. The C Programming Language, 2ª ed.", "Wikipedia", "Feynman Lectures on Physics", "https://example.com"])
    assert.ok(!fuenteConcreta(s), s);
});

test("estructura de ejercicios: variantes repetidas, datos sin rellenar, huellas de expresión", () => {
  const base: VaultExercise = { id: "x", tier: 1, type: "numero", review: false, prompt: "Calcula {{a}} + {{b}}", answers: [] };
  const n = {} as VaultNode;
  const h = "sha256:" + "0".repeat(64);
  assert.deepEqual(problemasDeEjercicio(n, { ...base, variants: [{ values: { a: 1, b: 2 }, answers: [h] }, { values: { a: 3, b: 4 }, answers: [h] }] }), []);
  assert.match(problemasDeEjercicio(n, { ...base, variants: [{ values: { a: 1, b: 2 }, answers: [h] }, { values: { b: 2, a: 1 }, answers: [h] }] }).join(), /mismos datos/);
  assert.match(problemasDeEjercicio(n, { ...base, variants: [{ values: { a: 1 }, answers: [h] }] }).join(), /\{\{b\}\} sin rellenar/);
  assert.match(problemasDeEjercicio(n, { ...base, answers: [h] }).join(), /no hay variantes/);
  assert.match(problemasDeEjercicio(n, { ...base, type: "expresion", vars: ["x"], prompt: "?", answers: [h, h] }).join(), /huellas/);
});
