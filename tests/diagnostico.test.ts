import { test } from "node:test";
import assert from "node:assert/strict";
import { applyVerdict, diagResult, initDiag, pickProbe, probeVerdict } from "../src/lib/diagnostico";

test("veredicto de una sonda: 2 aciertos aprueban, 2 fallos suspenden, empate pide una tercera", () => {
  assert.equal(probeVerdict([true, true]), "pass");
  assert.equal(probeVerdict([false, false]), "fail");
  assert.equal(probeVerdict([true, false]), "more");
  assert.equal(probeVerdict([true, false, true]), "pass");
  assert.equal(probeVerdict([false, true, false]), "fail");
});

test("búsqueda binaria de la frontera: encuentra el primer nodo que no se sabe en log2(n) sondas", () => {
  const order = Array.from({ length: 60 }, (_, i) => `n${i}`);
  for (const verdad of [0, 1, 17, 42, 59, 60]) {
    let s = initDiag("a", order);
    let sondas = 0;
    while (!s.done) {
      const i = pickProbe(s, () => true)!;
      s = { ...s, probe: { index: i, questions: [] } };
      s = applyVerdict(s, i < verdad);
      sondas++;
    }
    const r = diagResult(s);
    assert.equal(r.mastered.length, verdad, `frontera ${verdad}`);
    assert.equal(r.start, order[verdad] ?? null);
    assert.ok(sondas <= 7, `sondas: ${sondas}`);
  }
});

test("los nodos sin preguntas se saltan al elegir la sonda", () => {
  const s = initDiag("a", ["a", "b", "c", "d", "e"]);
  assert.equal(pickProbe(s, (id) => id !== "c"), 1);
  assert.equal(pickProbe(s, () => false), null);
});
