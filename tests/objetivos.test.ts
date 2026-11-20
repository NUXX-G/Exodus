import "./db-temporal";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { avanceObjetivo, loadObjetivos, type Objetivo } from "../src/lib/objetivos";
import type { NodeState } from "../src/lib/progress";
import type { Vault, VaultNode } from "../src/lib/vault";

const nodo = (id: string, prerequisites: string[] = []) => ({ id, title: id, prerequisites }) as unknown as VaultNode;

test("objetivos: se cargan del vault y avisan de formato", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "exodus-obj-"));
  fs.mkdirSync(path.join(dir, "_objetivos"));
  fs.writeFileSync(path.join(dir, "_objetivos", "a.md"), '---\nobjetivo: meta\ntitle: Meta\nhoras_semana: 8\nnodos: [x, y]\n---\nCuerpo.\n');
  fs.writeFileSync(path.join(dir, "_objetivos", "b.md"), "---\ntitle: Sin id\n---\n");
  const { objetivos, problemas } = loadObjetivos(dir);
  assert.equal(objetivos.length, 1);
  assert.equal(objetivos[0].horasSemana, 8);
  assert.deepEqual(objetivos[0].nodos, ["x", "y"]);
  assert.match(problemas.join(), /falta `objetivo/);
});

test("avance: cuenta hechos y diagnosticados, estima semanas y propone un nodo que se puede abrir", () => {
  const a = nodo("a"), b = nodo("b", ["a"]), c = nodo("c", ["b"]), d = nodo("d", ["z"]), z = nodo("z");
  const vault = { nodes: new Map([a, b, c, d, z].map((n) => [n.id, n])) } as unknown as Vault;
  const o: Objetivo = { id: "o", titulo: "O", resumen: "", horasSemana: 1, fuente: null, nodos: ["a", "b", "d", "c", "nuevo"], cuerpo: "", archivo: "" };
  const states = new Map<string, NodeState>([["a", "completed"], ["b", "diagnosed"], ["c", "available"], ["d", "locked"], ["z", "available"]]);
  const av = avanceObjetivo(o, vault, states, () => 60);
  assert.equal(av.total, 4, "el nodo que no existe no cuenta");
  assert.equal(av.hechos, 1);
  assert.equal(av.diagnosticados, 1);
  assert.equal(av.minutosRestantes, 120, "d y c");
  assert.equal(av.semanas, 2, "120 min a 1 h/semana");
  assert.equal(av.siguiente?.id, "z", "d está bloqueado: se propone su prerequisito disponible");
  assert.deepEqual(av.faltan, ["nuevo"]);
});

test("tiempo de estudio: se registra con límites y se suma por día y área", async () => {
  const { getDb, schema } = await import("../src/lib/db");
  const { logStudyTime, studyMinutes, activateGoal, activeGoals, deactivateGoal } = await import("../src/lib/objetivos-db");
  const u = getDb().insert(schema.users).values({ username: "tiempo" }).returning().get().id;
  assert.equal(logStudyTime(u, "matematicas", 0, null), false);
  assert.equal(logStudyTime(u, "matematicas", 900, null), false);
  assert.ok(logStudyTime(u, "matematicas", 45, "mat-calculo-1"));
  assert.ok(logStudyTime(u, "fisica", 30, null, "temporizador"));
  const s = studyMinutes(u, 7);
  assert.equal(s.total, 75);
  assert.equal(s.porArea.matematicas, 45);
  assert.equal(Object.values(s.porDia)[0], 75);
  // Objetivos: activar uno que no existe en el vault no hace nada.
  assert.equal(activateGoal(u, "no-existe", 5, null), false);
  assert.equal(activeGoals(u).length, 0);
  deactivateGoal(u, "no-existe");
});
