import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { insertar, type Spec } from "../scripts/lib/inyectar";
import { corregir, rellenar, salDe } from "../src/lib/tipos-ejercicio";
import { loadVault } from "../src/lib/vault";
import { defDe } from "../src/lib/ejercicio-def";

const NODO = "---\nid: prueba\ntitle: Prueba\narea: troncal\ntrunk_level: 0\nexercises: __EJERCICIOS__\n---\n\nCuerpo.\n";

const SPECS: Spec[] = [
  { id: "suma", tier: 1, prompt: "¿$1/2 + 1/4$? (fracción irreducible)", answers: ["3/4"] },
  { id: "vel", tier: 2, type: "numero", sig: 3, unit: "m/s", prompt: "Velocidad: «comillas», $x: y$ y `código`", answers: ["27.8"] },
  { id: "deriv", tier: 2, type: "expresion", vars: ["x"], prompt: String.raw`Deriva $\sin(x^2)$`, answers: [String.raw`2x\cos(x^2)`] },
  { id: "fact", tier: 3, type: "expresion", vars: ["x"], form: "factorizada", prompt: "Factoriza $x^2+x-2$", answers: ["(x-1)(x+2)"] },
  { id: "inv", tier: 2, type: "matriz", prompt: "Inversa de diag(2, 3)", answers: ["[[1/2, 0], [0, 1/3]]"] },
  { id: "opc", tier: 1, type: "opcion", options: ["Un número par: $2$", "Un primo: $7$", "Ninguno"], multiple: true, prompt: "¿Cuáles son primos?", answers: ["a, b"] },
  { id: "doble", tier: 1, type: "numero", sig: 2, prompt: "¿Cuánto es {{a}} · 2?", variants: [3, 4, 5].map((a) => ({ values: { a }, answers: [String(2 * a)] })) },
  { id: "por-que", tier: 2, review: true, type: "opcion", options: ["sí", "no"], prompt: "¿Repaso?", answers: ["a"] },
];

test("ex-inject: el bloque generado se carga, valida y corrige como el spec", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "exodus-iny-"));
  fs.writeFileSync(path.join(dir, "prueba.md"), insertar(NODO, SPECS));
  process.env.VAULT_PATH = dir;
  const { nodes, issues } = loadVault();
  assert.deepEqual(issues, []);
  const n = nodes.get("prueba")!;
  assert.equal(n.exercises.length, 7);
  assert.deepEqual(n.reviewBank.map((e) => e.id), ["por-que"]);
  const ok = (id: string, envio: string, variante: number | null = null) => {
    const e = [...n.exercises, ...n.reviewBank].find((x) => x.id === id)!;
    const acept = variante === null ? e.answers : e.variants![variante].answers;
    const r = corregir(defDe(e), acept, envio, salDe(e.id, variante));
    return "correcto" in r && r.correcto;
  };
  assert.ok(ok("suma", "3/4"));
  assert.ok(ok("vel", "100 km/h"));
  assert.ok(ok("deriv", "2*x*cos(x^2)"));
  assert.ok(ok("fact", "(x+2)(x-1)"));
  assert.ok(!ok("fact", "x^2+x-2"));
  assert.ok(ok("inv", "0.5 0; 0 0.333333333"));
  assert.ok(ok("opc", "1,0"));
  assert.ok(!ok("opc", "1"));
  assert.ok(ok("doble", "8", 1));
  assert.ok(!ok("doble", "8", 0));
  assert.ok(ok("por-que", "0"));
  const doble = n.exercises.find((e) => e.id === "doble")!;
  assert.equal(rellenar(doble.prompt, doble.variants![2].values).trim(), "¿Cuánto es 5 · 2?");
  // Nada en claro en el archivo.
  const texto = fs.readFileSync(path.join(dir, "prueba.md"), "utf8");
  assert.ok(!texto.includes("27.8") && !texto.includes("(x-1)(x+2)") && !texto.includes("3/4"));
});

test("ex-inject: rechaza una respuesta de referencia que el corrector no acepta", () => {
  assert.throws(() => insertar(NODO, [{ id: "mal", tier: 1, type: "expresion", vars: ["x"], domain: [-3, -1], prompt: "?", answers: ["ln(x)"] }]), /dominio/);
  assert.throws(() => insertar(NODO, [{ id: "mal", tier: 1, type: "opcion", options: ["a", "b"], prompt: "?", answers: ["z"] }]), /rango/);
});
