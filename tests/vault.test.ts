import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { linkResolverFor, renderMarkdown } from "../src/lib/markdown";
import { checkFlag, loadVault, sha256, type VaultNode } from "../src/lib/vault";

function tempVault(files: Record<string, string>): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "exodus-vault-"));
  for (const [name, content] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, name)), { recursive: true });
    fs.writeFileSync(path.join(dir, name), content);
  }
  process.env.VAULT_PATH = dir;
  return dir;
}

const node = (id: string, extra = "") =>
  `---\nid: ${id}\ntitle: Nodo ${id}\narea: troncal\ntrunk_level: 0\n${extra}---\n\nCuerpo de ${id}.\n`;

test("carga nodos válidos e ignora notas sin id y carpetas ocultas", () => {
  tempVault({
    "a/uno.md": node("uno"),
    "a/nota.md": "# Apunte suelto sin frontmatter\n",
    ".obsidian/x.md": node("oculto"),
  });
  const { nodes, issues } = loadVault();
  assert.deepEqual([...nodes.keys()], ["uno"]);
  assert.equal(issues.length, 0);
});

test("detecta frontmatter inválido, ids duplicados, prerequisitos inexistentes y ciclos", () => {
  tempVault({
    "malo.md": "---\nid: Mal Id\ntitle: x\narea: troncal\ntrunk_level: 0\n---\n",
    "dup1.md": node("dup"),
    "dup2.md": node("dup"),
    "huerfano.md": node("huerfano", "prerequisites: [no-existe]\n"),
    "c1.md": node("c1", "prerequisites: [c2]\n"),
    "c2.md": node("c2", "prerequisites: [c1]\n"),
  });
  const messages = loadVault().issues.map((i) => i.message).join("\n");
  assert.match(messages, /kebab-case/);
  assert.match(messages, /id duplicado "dup"/);
  assert.match(messages, /prerequisito inexistente "no-existe"/);
  assert.match(messages, /ciclo de prerequisitos/);
});

test("checkFlag acepta hash o texto en claro, ignora espacios y rechaza lo demás", () => {
  const base = { id: "n", hints: [], prerequisites: [] } as unknown as VaultNode;
  const hashed = { ...base, ctfFlag: `sha256:${sha256("EXODUS{ok}")}` };
  assert.equal(checkFlag(hashed, "EXODUS{ok}"), true);
  assert.equal(checkFlag(hashed, "  EXODUS{ok}\n"), true);
  assert.equal(checkFlag(hashed, "EXODUS{no}"), false);
  assert.equal(checkFlag({ ...base, ctfFlag: "EXODUS{claro}" }, "EXODUS{claro}"), true);
  assert.equal(checkFlag({ ...base, ctfFlag: null }, ""), false);
});

test("render: LaTeX, código, wikilinks, callouts y descarte de HTML peligroso", async () => {
  tempVault({ "uno.md": node("uno"), "dos.md": node("dos") });
  const vault = loadVault();
  const html = await renderMarkdown(
    [
      "Fórmula $a^2 + b^2 = c^2$ y enlace [[dos]] y [[dos|alias]] y [[fantasma]].",
      "",
      "```c",
      "int main(void) { return 0; }",
      "```",
      "",
      "> [!warning] Cuidado",
      "> Texto del aviso.",
      "",
      "<script>alert(1)</script>",
      "",
      "[malo](javascript:alert(1))",
      "",
      "$\\href{javascript:alert(1)}{x}$ y $\\href{https://example.org}{y}$",
    ].join("\n"),
    linkResolverFor(vault),
  );
  assert.match(html, /<mjx-container/);
  assert.match(html, /class="shiki/);
  assert.match(html, /href="\/nodo\/dos"[^>]*>Nodo dos</);
  assert.match(html, />alias</);
  assert.match(html, /wikilink-rota/);
  assert.match(html, /<aside class="callout callout-warning">/);
  const folded = await renderMarkdown(
    ["> [!tip]- Solución", "> Oculta.", "", "> [!note]+ Abierta", "> Visible."].join("\n"),
    linkResolverFor(vault),
  );
  assert.match(folded, /<details class="callout callout-tip">\s*<summary class="callout-titulo">Solución<\/summary>/);
  assert.match(folded, /<details class="callout callout-note" open>/);
  assert.doesNotMatch(html, /<script/);
  assert.doesNotMatch(html, /javascript:/);
  assert.ok(html.includes('href="https://example.org"'));
});

test("adjuntos: valida existencia, nombres y que la ruta no salga de la carpeta del nodo", async () => {
  const { attachmentInfo, attachmentPath } = await import("../src/lib/vault");
  const dir = tempVault({
    "con.md": node("con", "attachments: [reto.bin]\n"),
    "falta.md": node("falta", "attachments: [no-esta.bin]\n"),
    "malo.md": node("malo", 'attachments: ["../con.md"]\n'),
    "oculto.md": node("oculto", "attachments: [.env]\n"),
    "_adjuntos/con/reto.bin": "\x7fELF",
  });
  const { nodes, issues } = loadVault();
  assert.deepEqual(nodes.get("con")?.attachments, ["reto.bin"]);
  assert.ok(issues.some((i) => i.file === "falta.md" && /adjunto inexistente/.test(i.message)));
  assert.ok(!nodes.has("malo") && issues.some((i) => i.file === "malo.md" && /adjunto inválido/.test(i.message)));
  assert.ok(!nodes.has("oculto"));

  const [info] = attachmentInfo(nodes.get("con")!);
  assert.equal(info.size, 4);
  assert.equal(info.sha256, sha256("\x7fELF"));
  assert.equal(attachmentPath("con", "reto.bin"), path.join(dir, "_adjuntos", "con", "reto.bin"));
  for (const bad of ["../x", "a/b", "..", ".env", ""]) assert.throws(() => attachmentPath("con", bad));
  assert.throws(() => attachmentPath("../con", "reto.bin"));
});

test("adjuntos: un enlace simbólico no se sirve aunque apunte a un archivo real", async (t) => {
  const { readAttachment } = await import("../src/lib/vault");
  const dir = tempVault({ "s.md": node("s", "attachments: [ok.bin, enlace.bin]\n"), "_adjuntos/s/ok.bin": "ok", "secreto.txt": "no" });
  try {
    fs.symlinkSync(path.join(dir, "secreto.txt"), path.join(dir, "_adjuntos", "s", "enlace.bin"));
  } catch {
    t.skip("el sistema no permite crear enlaces simbólicos");
    return;
  }
  assert.equal(readAttachment("s", "ok.bin")?.toString(), "ok");
  assert.equal(readAttachment("s", "enlace.bin"), null);
  assert.ok(loadVault().issues.some((i) => /enlace\.bin no es un archivo normal/.test(i.message)));
});
