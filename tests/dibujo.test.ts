import "./db-temporal";
import assert from "node:assert/strict";
import { test } from "node:test";
import { analizar, enGrados, evaluar } from "../src/lib/cas";
import { caminoDe, LIENZO, PALETA, svgDe, validarTrazos } from "../src/lib/dibujo";

const casi = (a: number, b: number) => assert.ok(Math.abs(a - b) < 1e-12, `${a} ≠ ${b}`);

test("dibujo: valida, recorta al lienzo y rechaza colores o formas que no son de la paleta", () => {
  const ok = validarTrazos([{ color: PALETA[1], grosor: 4, puntos: [[-10, 5, 0.5], [2000, 900.123, 0.7]] }]);
  assert.ok(ok);
  assert.deepEqual(ok![0].puntos, [[0, 5, 0.5], [LIENZO.ancho, LIENZO.alto, 0.7]]);
  assert.equal(validarTrazos([{ color: "url(javascript:alert(1))", grosor: 4, puntos: [[1, 1, 0.5]] }]), null);
  assert.equal(validarTrazos([{ color: PALETA[0], grosor: 4, puntos: [] }]), null);
  assert.equal(validarTrazos("<svg onload=alert(1)>"), null);
});

test("dibujo: el SVG solo contiene números, colores de la paleta y el título saneado", () => {
  const t = validarTrazos([{ color: PALETA[2], grosor: 3, puntos: [[10, 10, 0.5], [20, 30, 0.5], [40, 35, 0.5]] }])!;
  const svg = svgDe(t, { titulo: 'Mi nota <script>alert("x")</script>' });
  assert.match(svg, /^<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" viewBox="0 0 1200 800"/);
  assert.ok(!svg.includes("<script") && !svg.includes('"x"'));
  assert.match(svg, /<path d="M10 10Q20 30 30 32\.5L40 35"/);
  assert.equal(caminoDe({ color: PALETA[0], grosor: 1, puntos: [[5, 5, 0.5]] }), "M5 5l0.01 0", "un punto suelto se ve");
});

test("calculadora: modo grados", () => {
  const g = (s: string) => evaluar(enGrados(analizar(s, [])));
  casi(g("sin(30)"), 0.5);
  casi(g("cos(60) + tan(45)"), 1.5);
  casi(g("asin(1)"), 90);
  casi(g("2^3 + sqrt(16)"), 12);
});

test("dibujos de la Libreta: solo en notas propias, con límite, y se exportan a Obsidian como SVG", async () => {
  const { getDb, schema } = await import("../src/lib/db");
  const { createNote, saveDrawing, listDrawings, deleteDrawing } = await import("../src/lib/notes");
  const { userExportData } = await import("../src/lib/obsidian");
  const { buildExport } = await import("../src/lib/obsidian-export");
  const { mergeAreas } = await import("../src/lib/areas");
  const u = getDb().insert(schema.users).values({ username: "dibuja" }).returning().get().id;
  const otro = getDb().insert(schema.users).values({ username: "otro-dibuja" }).returning().get().id;
  const nota = createNote(u, { title: "Esquema", body: "texto" });
  assert.ok(typeof nota === "object");
  const trazos = JSON.stringify(validarTrazos([{ color: PALETA[0], grosor: 4, puntos: [[1, 1, 0.5], [50, 50, 0.5]] }]));
  assert.equal(saveDrawing(otro, nota.id, null, trazos), null, "nota ajena");
  const id = saveDrawing(u, nota.id, null, trazos)!;
  assert.ok(id);
  assert.equal(saveDrawing(otro, nota.id, id, trazos), null, "no se puede editar el dibujo de otro");
  assert.equal(saveDrawing(u, nota.id, id, "[]"), id);
  assert.equal(listDrawings(u, nota.id).length, 1);
  saveDrawing(u, nota.id, id, trazos);
  const vault = { nodes: new Map(), areas: mergeAreas(undefined).areas, glosario: [], issues: [] } as never;
  const files = buildExport(vault, userExportData(u, "dibuja"));
  const svg = files.find((f) => f.path.endsWith(`dibujo-${id}.svg`));
  assert.ok(svg && svg.content.startsWith("<svg"));
  const md = files.find((f) => f.path.includes("Libreta/") && f.path.endsWith(".md"));
  assert.ok(md?.content.includes(`![[dibujo-${id}.svg]]`));
  assert.equal(deleteDrawing(otro, id), false);
  assert.equal(deleteDrawing(u, id), true);
});
