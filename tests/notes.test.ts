import "./db-temporal";
import assert from "node:assert/strict";
import { test } from "node:test";
import { mergeAreas } from "../src/lib/areas";
import { getDb, schema } from "../src/lib/db";
import { hashPassword } from "../src/lib/password";
import { createNote, deleteNote, getNote, listNotes, MAX_TITLE, updateNote } from "../src/lib/notes";
import { userExportData } from "../src/lib/obsidian";
import { buildExport, MARK_END, noteFileName } from "../src/lib/obsidian-export";
import { recordOpen } from "../src/lib/progress";
import type { Note } from "../database/schema";
import type { Vault, VaultNode } from "../src/lib/vault";

const makeUser = (username: string) =>
  getDb().insert(schema.users).values({ username, passwordHash: hashPassword("contraseña-123456") }).returning({ id: schema.users.id }).get().id;

test("crear, leer, editar y borrar una nota; cada usuario solo ve las suyas", () => {
  const ana = makeUser("ana-libreta");
  const bea = makeUser("bea-libreta");
  const n = createNote(ana, { title: "  Integrales  ", body: "$\\int x\\,dx$", nodeId: "mat-calculo-1" }) as Note;
  assert.equal(n.title, "Integrales");
  assert.equal(n.nodeId, "mat-calculo-1");
  assert.equal(getNote(bea, n.id), null, "otra usuaria no puede leerla");
  assert.equal(updateNote(bea, n.id, { title: "x", body: "" }), null, "ni editarla");
  assert.equal(deleteNote(bea, n.id), false, "ni borrarla");

  const later = new Date(Date.now() + 1000);
  const u = updateNote(ana, n.id, { title: "Integrales definidas", body: "regla de Barrow", nodeId: null }, later) as Note;
  assert.equal(u.title, "Integrales definidas");
  assert.equal(u.nodeId, null);
  assert.ok(u.updatedAt.getTime() >= n.updatedAt.getTime());

  createNote(bea, { title: "Nota de Bea", body: "" });
  assert.deepEqual(listNotes(ana).map((x) => x.title), ["Integrales definidas"]);
  assert.equal(deleteNote(ana, n.id), true);
  assert.equal(listNotes(ana).length, 0);
});

test("validación: título obligatorio, longitudes máximas e id de nodo con formato", () => {
  const u = makeUser("val-libreta");
  assert.equal(createNote(u, { title: "   ", body: "x" }), "titulo");
  assert.equal(createNote(u, { title: "t".repeat(MAX_TITLE + 1), body: "" }), "largo");
  const n = createNote(u, { title: "ok", body: "", nodeId: "../../etc" }) as Note;
  assert.equal(n.nodeId, null, "un nodeId raro se descarta");
  assert.deepEqual(listNotes(u, "mat-x"), []);
});

test("las notas aparecen en la exportación a Obsidian, enlazadas desde su nodo", () => {
  const u = makeUser("obs-libreta");
  recordOpen(u, "mat-a");
  createNote(u, { title: "Qué es una derivada", body: "límite del cociente", nodeId: "mat-a" });
  createNote(u, { title: "Ideas sueltas", body: "repasar [[mat-a]]" });
  const node: VaultNode = { id: "mat-a", title: "Cálculo", area: "matematicas", trunkLevel: 1, kind: "teoria", prerequisites: [], academicSources: [], ctfFlag: null, hints: [], exercises: [], reviewBank: [], attachments: [], file: "a.md", body: "# Cálculo\n" };
  const vault = { nodes: new Map([["mat-a", node]]), areas: mergeAreas(undefined).areas, issues: [] } as unknown as Vault;
  const data = userExportData(u, "obs-libreta");
  const files = buildExport(vault, data);
  const notas = files.filter((f) => f.path.startsWith("Libreta/"));
  assert.equal(notas.length, 2);
  const derivada = notas.find((f) => f.content.includes("límite del cociente"))!;
  assert.match(derivada.path, /^Libreta\/\d+-que-es-una-derivada\.md$/);
  assert.match(derivada.content, /nodo: "mat-a"/);
  assert.ok(derivada.content.indexOf(MARK_END) > derivada.content.indexOf("límite del cociente"));
  const nodo = files.find((f) => f.path.endsWith("mat-a.md"))!.content;
  assert.match(nodo, /## Tus notas de la libreta/);
  const d = data.notes!.find((x) => x.title === "Qué es una derivada")!;
  assert.ok(nodo.includes(`[[${noteFileName(d.id, d.title)}|Qué es una derivada]]`), "enlace desde el nodo");
  assert.ok(!nodo.includes("Ideas sueltas"), "solo las notas de ese nodo");
  assert.ok(files.some((f) => f.path === "Libreta.md"));
  assert.equal(noteFileName(7, "Ñandú: ¿qué es?"), "7-nandu-que-es");
});
