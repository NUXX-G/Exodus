import { test } from "node:test";
import assert from "node:assert/strict";
import { analizar, aTexto, cumpleForma, evaluar, leerNumero } from "../src/lib/cas";
import { leerUnidad } from "../src/lib/unidades";
import { claveNumero, corregir, leerMatriz, REGISTRO, rellenar, type DefEjercicio } from "../src/lib/tipos-ejercicio";

const val = (s: string, x = 2) => evaluar(analizar(s, ["x"]), { x });
const casi = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≠ ${b}`);

test("cas: notación sencilla y precedencia", () => {
  casi(val("2x^2+3x-1"), 13);
  casi(val("-x^2"), -4);
  casi(val("2^3^2"), 512); // potencia asociativa por la derecha
  casi(val("2(x+1)(x-1)"), 6);
  casi(val("sin^2 x + cos^2 x"), 1);
  casi(val("|x-3|"), 1);
  casi(val("x²+1"), 5);
  casi(val("3!"), 6);
  casi(val("sen(x)/x"), Math.sin(2) / 2);
  casi(val("log(2;8)"), 3);
  casi(val("(-8)^(1/3)"), -2);
});

test("cas: LaTeX", () => {
  casi(val(String.raw`\frac{x+1}{2x}`), 3 / 4);
  casi(val(String.raw`\sqrt[3]{x^3}`), 2);
  casi(val(String.raw`x\cdot e^{x}`), 2 * Math.exp(2));
  casi(val(String.raw`\left(x+1\right)^{2}`), 9);
  casi(val(String.raw`\dfrac{\sqrt{x}}{\pi}`), Math.SQRT2 / Math.PI);
  assert.throws(() => analizar(String.raw`\int x`, ["x"]));
});

test("cas: errores claros y sin eval", () => {
  assert.throws(() => analizar("y+1", ["x"]), /variable desconocida/);
  assert.throws(() => analizar("process.exit()", ["x"]));
  assert.throws(() => analizar("(x+1", ["x"]), /se esperaba/);
  assert.throws(() => analizar("(".repeat(100) + "x" + ")".repeat(100), ["x"]), /anidada/);
});

test("cas: forma factorizada / expandida", () => {
  assert.ok(cumpleForma(analizar("(x-1)(x+2)", ["x"]), "factorizada"));
  assert.ok(!cumpleForma(analizar("x^2+x-2", ["x"]), "factorizada"));
  assert.ok(cumpleForma(analizar("x^2+x-2", ["x"]), "expandida"));
  assert.ok(!cumpleForma(analizar("(x+1)^2", ["x"]), "expandida"));
  assert.ok(cumpleForma(analizar("sqrt(2)/2", []), "sin-raices-en-denominador"));
  assert.ok(!cumpleForma(analizar("1/sqrt(2)", []), "sin-raices-en-denominador"));
  assert.equal(aTexto(analizar("2x", ["x"])), "2 · x");
});

test("números y unidades", () => {
  assert.equal(leerNumero("1,5·10^3"), 1500);
  assert.equal(leerNumero("3/4"), 0.75);
  assert.equal(leerNumero("12 345"), 12345);
  casi(leerUnidad("km/h").factor, 1 / 3.6);
  assert.deepEqual(leerUnidad("kg·m/s^2").dim, leerUnidad("N").dim);
  assert.deepEqual(leerUnidad("m/s/s").dim, leerUnidad("m/s^2").dim);
  casi(leerUnidad("µF").factor, 1e-6);
  casi(leerUnidad("hPa").factor, 100);
  assert.throws(() => leerUnidad("furlong"));
  assert.equal(claveNumero(9.81, 3), "981e-2");
  assert.equal(claveNumero(999.7, 3), "1e3");
  assert.equal(claveNumero(9.81, 3, 1), "982e-2");
});

test("tipo numero: cifras, ±1 en la última y conversión de unidades", () => {
  const def: DefEjercicio = { id: "v", type: "numero", sig: 3, unit: "m/s" };
  const ref = REGISTRO.numero.referencia("27.8", def, "v");
  const ok = (s: string) => "correcto" in corregir(def, ref, s, "v") && (corregir(def, ref, s, "v") as { correcto: boolean }).correcto;
  assert.ok(ok("27.8"));
  assert.ok(ok("27,8 m/s"));
  assert.ok(ok("100 km/h"));
  assert.ok(ok("27.7"));
  assert.ok(!ok("27.5"));
  assert.ok("error" in corregir(def, ref, "100 kg", "v"));
  // La sal cambia el hash: la misma respuesta en otro ejercicio no coincide.
  assert.notDeepEqual(REGISTRO.numero.referencia("27.8", def, "otro"), ref);
});

test("tipo expresion: equivalencia, no igualdad de texto", () => {
  const def: DefEjercicio = { id: "d", type: "expresion", vars: ["x"] };
  const ref = REGISTRO.expresion.referencia(String.raw`2x\cos(x^2)`, def, "d");
  const ok = (s: string) => (corregir(def, ref, s, "d") as { correcto: boolean }).correcto;
  assert.ok(ok("2*x*cos(x^2)"));
  assert.ok(ok("cos(x^2)·2x"));
  assert.ok(ok("x cos(x^2) + x cos(x^2)"));
  assert.ok(!ok("x cos(x^2)"));
  assert.ok(!ok("2x cos(x)"));
});

test("tipo expresion: forma exigida y dominio", () => {
  const def: DefEjercicio = { id: "f", type: "expresion", vars: ["x"], form: "factorizada" };
  const ref = REGISTRO.expresion.referencia("(x-1)(x+2)", def, "f");
  assert.ok((corregir(def, ref, "(x+2)(x-1)", "f") as { correcto: boolean }).correcto);
  assert.ok(!(corregir(def, ref, "x^2+x-2", "f") as { correcto: boolean }).correcto);
  const log: DefEjercicio = { id: "l", type: "expresion", vars: ["x"], domain: [-3, -1] };
  assert.throws(() => REGISTRO.expresion.referencia("ln(x)", log, "l"), /dominio/);
});

test("tipo matriz y vector", () => {
  assert.deepEqual(leerMatriz("[[1,2],[3,4]]"), [[1, 2], [3, 4]]);
  assert.deepEqual(leerMatriz("1 2; 3 4"), [[1, 2], [3, 4]]);
  assert.deepEqual(leerMatriz(String.raw`\begin{pmatrix}1&1/2\\0&1\end{pmatrix}`), [[1, 0.5], [0, 1]]);
  const def: DefEjercicio = { id: "m", type: "matriz" };
  const ref = REGISTRO.matriz.referencia("[[1, 1/3], [0, 2]]", def, "m");
  assert.ok((corregir(def, ref, "1 0.333333333; 0 2", "m") as { correcto: boolean }).correcto);
  assert.ok(!(corregir(def, ref, "1 0.33; 0 2", "m") as { correcto: boolean }).correcto);
  const vec = REGISTRO.matriz.referencia("(1, 2, 3)", def, "m");
  assert.ok((corregir(def, vec, "[1; 2; 3]", "m") as { correcto: boolean }).correcto, "columna = fila");
});

test("tipo opcion", () => {
  const def: DefEjercicio = { id: "o", type: "opcion", options: ["a", "b", "c"], multiple: true };
  const ref = REGISTRO.opcion.referencia("a, c", def, "o");
  assert.ok((corregir(def, ref, "2,0", "o") as { correcto: boolean }).correcto);
  assert.ok(!(corregir(def, ref, "0", "o") as { correcto: boolean }).correcto);
  assert.ok("error" in corregir(def, ref, "7", "o"));
});

test("plantillas", () => {
  assert.equal(rellenar("Un coche a {{v}} km/h durante {{ t }} h", { v: 90, t: 2 }), "Un coche a 90 km/h durante 2 h");
});

test("tipo numero: admite el símbolo de la moneda y %", () => {
  const def: DefEjercicio = { id: "p", type: "numero", sig: 6 };
  const ref = REGISTRO.numero.referencia("160", def, "p");
  for (const s of ["160,00 €", "160 euros", "160€", "160"]) assert.ok((corregir(def, ref, s, "p") as { correcto: boolean }).correcto, s);
});
