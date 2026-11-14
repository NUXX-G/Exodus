import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { loadRecursos } from "../src/lib/recursos";
import { loadVault } from "../src/lib/vault";

function tempVault(files: Record<string, string>): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "exodus-recursos-"));
  for (const [name, content] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    fs.writeFileSync(path.join(dir, name), content);
  }
  return dir;
}

test("carga las páginas de recursos, con fecha de revisión, y no las confunde con nodos", () => {
  const dir = tempVault({
    "_recursos/matematicas.md": "---\r\nrecursos: matematicas\r\ntitle: Recursos de matemáticas\r\nresumen: Canales y libros.\r\nrevisado: 2026-11-14\r\n---\r\n\r\n## Canales\r\n\r\n- Uno\r\n",
    "_recursos/fisica.md": "---\nrecursos: fisica\n---\n\nTexto.\n",
    "_recursos/leeme.txt": "no es markdown",
  });
  const { paginas, problemas } = loadRecursos(dir);
  assert.deepEqual(problemas, []);
  assert.deepEqual(paginas.map((p) => p.area), ["fisica", "matematicas"]);
  const m = paginas.find((p) => p.area === "matematicas")!;
  assert.equal(m.titulo, "Recursos de matemáticas");
  assert.equal(m.resumen, "Canales y libros.");
  assert.equal(m.revisado, "2026-11-14");
  assert.ok(m.cuerpo.includes("## Canales\n\n- Uno"), "normaliza CRLF");
  assert.equal(paginas.find((p) => p.area === "fisica")!.titulo, "Recursos: fisica");

  process.env.VAULT_PATH = dir;
  assert.equal(loadVault().nodes.size, 0, "las páginas de recursos no son nodos");
});

test("informa de páginas sin área y de áreas repetidas", () => {
  const dir = tempVault({
    "_recursos/a.md": "---\ntitle: Sin área\n---\n",
    "_recursos/b.md": "---\nrecursos: fisica\n---\n",
    "_recursos/c.md": "---\nrecursos: fisica\n---\n",
  });
  const { paginas, problemas } = loadRecursos(dir);
  assert.equal(paginas.length, 1);
  assert.equal(problemas.length, 2);
  assert.match(problemas[0], /falta `recursos/);
  assert.match(problemas[1], /ya tiene página/);
});

test("sin carpeta de recursos no hay páginas ni problemas", () => {
  const dir = tempVault({ "x.md": "# nada\n" });
  assert.deepEqual(loadRecursos(dir), { paginas: [], problemas: [] });
});
