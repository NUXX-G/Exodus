import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { loadGlosario, patronTerminos, slugTermino, terminosEn } from "../src/lib/glosario";
import { linkResolverFor, renderMarkdownSinCache } from "../src/lib/markdown";
import { loadVault } from "../src/lib/vault";

const GLOS = `---
glosario: fisica
terminos:
  - termino: fuerza
    sinonimos: [fuerzas]
    excepto: [fuerza bruta, misma fuerza]
    llano: "Un empujón o un tirón. Como $F = ma$."
    formal: "$\\\\vec F = m\\\\vec a$"
    nodo: base
  - termino: energía cinética
    llano: "La energía del movimiento."
    nodo: base
    tambien: [base]
  - termino: fuerza
    llano: "repetido"
    nodo: base
---
`;

function vaultTemporal(cuerpo: string) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "exodus-glos-"));
  fs.mkdirSync(path.join(dir, "_glosario"));
  fs.writeFileSync(path.join(dir, "_glosario", "fisica.md"), GLOS);
  fs.writeFileSync(path.join(dir, "base.md"), `---\nid: base\ntitle: Base\narea: fisica\ntrunk_level: 0\n---\n\n${cuerpo}\n`);
  process.env.VAULT_PATH = dir;
  return dir;
}

test("glosario: carga, slugs sin acentos y términos repetidos", () => {
  const dir = vaultTemporal("x");
  const { terminos, problemas } = loadGlosario(dir);
  assert.equal(terminos.length, 2);
  assert.equal(terminos[1].slug, "energia-cinetica");
  assert.equal(slugTermino("Ley de Ohm"), "ley-de-ohm");
  assert.match(problemas.join(), /repetido/);
});

test("glosario: palabras completas, sin mayúsculas, el más largo gana y las excepciones no cuentan", () => {
  const dir = vaultTemporal("x");
  const p = patronTerminos(loadGlosario(dir).terminos);
  const en = (s: string) => [...terminosEn(s, p)].map((t) => t.termino).sort();
  assert.deepEqual(en("La Fuerza y la energía cinética."), ["energía cinética", "fuerza"]);
  assert.deepEqual(en("un ataque de fuerza bruta"), []);
  assert.deepEqual(en("refuerza el muro"), [], "solo palabras completas");
  assert.deepEqual(en("las fuerzas"), ["fuerza"], "sinónimo");
  assert.deepEqual(en("`fuerza` en código y $fuerza$ en fórmulas"), []);
  assert.deepEqual(en("con la misma fuerza que antes"), [], "excepción con el término al final");
  assert.deepEqual(en("ver [[nodo-de-fuerza]] y [[otro-fuerza|la fuerza]]"), ["fuerza"], "el id de un wikilink no cuenta; el alias sí");
  assert.deepEqual(loadGlosario(dir).terminos[1].tambien, ["base"]);
});

test("glosario: el render resalta solo la primera aparición, fuera de código, títulos y enlaces, sin LaTeX en el aviso", async () => {
  vaultTemporal("x");
  const vault = loadVault();
  const html = await renderMarkdownSinCache(
    "## La fuerza\n\nUna fuerza mueve. Otra fuerza también.\n\n`fuerza` en código.\n\nY la energía cinética.",
    linkResolverFor(vault),
  );
  const marcas = [...html.matchAll(/<a class="termino"[^>]*>([^<]*)<\/a>/g)].map((m) => m[1]);
  assert.deepEqual(marcas, ["fuerza", "energía cinética"]);
  assert.ok(!/<h2[^>]*>[^<]*<a class="termino"/.test(html), "no en títulos");
  assert.match(html, /data-def="Un empujón o un tirón. Como F = ma."/);
  // Las notas de los usuarios no se tocan.
  const nota = await renderMarkdownSinCache("Una fuerza.", linkResolverFor(vault), "usuario");
  assert.ok(!nota.includes("termino"));
});
