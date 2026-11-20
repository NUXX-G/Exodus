import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { canonicalOutput, codeFor, runnerScript, type CodeCase } from "../src/lib/codigo";

// Programa de prueba (Node): imprime la entrada al revés por líneas, con \r\n si se le pide, y sale con el código
// que diga el primer argumento.
const PROG = String.raw`
const fs = require("fs");
const entrada = fs.readFileSync(0, "utf8");
const args = process.argv.slice(2);
const lineas = entrada.split("\n").reverse().join("\n");
process.stdout.write(args.includes("crlf") ? lineas.replace(/\n/g, "\r\n") + "\r\n" : lineas);
process.exitCode = Number(args.find((a) => /^\d+$/.test(a)) ?? 0);
`;
const transforma = (c: CodeCase) => {
  const l = c.stdin.split("\n").reverse().join("\n");
  const crlf = (c.args ?? []).includes("crlf");
  return { stdout: crlf ? l.replace(/\n/g, "\r\n") + "\r\n" : l, status: Number((c.args ?? []).find((a) => /^\d+$/.test(a)) ?? 0) };
};

const CASOS: CodeCase[] = [
  { name: "simple", stdin: "uno\ndos\ntres\n" },
  { name: "comillas", stdin: "it's \"raro\" $HOME `ls` \n\n" },
  { name: "unicode", stdin: "año π ∑ 漢字\n" },
  { name: "vacio", stdin: "" },
  { name: "sin-salto-final", stdin: "a\nb" },
  { name: "windows", stdin: "x\ny\n", args: ["crlf"] },
  { name: "sale-con-3", stdin: "z\n", args: ["3"] },
];

test("codigo: salida canónica", () => {
  assert.equal(canonicalOutput("a\r\nb\r\n\n"), "a\nb");
});

test("codigo: el script de pruebas calcula el mismo código que codeFor", { skip: spawnSync("bash", ["--version"]).status !== 0 }, () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "exodus-codigo-"));
  fs.writeFileSync(path.join(dir, "prog.js"), PROG);
  fs.writeFileSync(path.join(dir, "prueba.sh"), runnerScript("nodo-prueba", [{ id: "al-reves", title: "Al revés", cases: CASOS }]));
  const r = spawnSync("bash", ["prueba.sh", "al-reves", "--", "node", "prog.js"], { cwd: dir, encoding: "utf8" });
  assert.equal(r.status, 0, r.stderr);
  const m = /código del ejercicio al-reves: ([0-9a-f]{12})/.exec(r.stdout);
  assert.ok(m, r.stdout);
  assert.equal(m[1], codeFor(CASOS, CASOS.map(transforma)));
  // Un programa distinto da otro código.
  fs.writeFileSync(path.join(dir, "mal.js"), "process.stdout.write(require('fs').readFileSync(0,'utf8'))");
  const r2 = spawnSync("bash", ["prueba.sh", "al-reves", "--", "node", "mal.js"], { cwd: dir, encoding: "utf8" });
  assert.notEqual(/: ([0-9a-f]{12})/.exec(r2.stdout)?.[1], m[1]);
});

test("codigo: nombres de caso y de ejercicio seguros en el script", () => {
  assert.throws(() => runnerScript("n", [{ id: "x", title: "x", cases: [{ name: "a;rm -rf /", stdin: "" }] }]));
  assert.throws(() => runnerScript("n", [{ id: "X y", title: "x", cases: [] }]));
});
