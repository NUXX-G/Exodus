/**
 * Cierre de fase: marca las casillas de la fase en docs/ROADMAP_V2.md, pone «Ahora mismo» de STATUS.md en la fase
 * siguiente y añade una línea al registro de sesiones. Después: bash scripts/dev/guardar.sh "v2: fase N completada".
 *
 *   node scripts/dev/cerrar-fase.cjs "2" "FASE 3 — Respuesta desarrollada con rúbrica" \
 *     "Primera tarea…" "Siguiente paso concreto…" "Resumen de lo hecho en la fase"
 *
 * Una casilla que deba quedar sin marcar (bloqueada) se deja como «[~]» antes de ejecutar esto: solo se marcan «[ ]».
 */
const fs = require("fs");
const [fase, siguiente, tarea, paso, resumen] = process.argv.slice(2);
if (!fase || !siguiente || !tarea || !paso || !resumen) {
  console.error("Uso: node scripts/dev/cerrar-fase.cjs <n> <título fase siguiente> <tarea> <paso> <resumen>");
  process.exit(1);
}
const leer = (f) => fs.readFileSync(f, "utf8").split("\r\n").join("\n");

let r = leer("docs/ROADMAP_V2.md");
const a = r.indexOf(`## FASE ${fase} —`);
if (a < 0) throw new Error(`no encuentro «## FASE ${fase} —» en el roadmap`);
const b = r.indexOf("\n## ", a + 5) >= 0 ? r.indexOf("\n#", a + 5) : r.length;
r = r.slice(0, a) + r.slice(a, b).split("- [ ]").join("- [x]") + r.slice(b);
fs.writeFileSync("docs/ROADMAP_V2.md", r);

let s = leer("STATUS.md");
const i1 = s.indexOf("- **Fase actual**:");
const i2 = s.indexOf("- **Bloqueos**:");
if (i1 < 0 || i2 < 0) throw new Error("STATUS.md §1 no tiene el formato esperado");
s = s.slice(0, i1) + `- **Fase actual**: ${siguiente}.\n- **Tarea actual**: ${tarea}\n- **Siguiente paso concreto**: ${paso}\n` + s.slice(i2);
const hoy = new Date().toISOString().slice(0, 10);
const cab = "| Fecha | Qué se hizo | Commit |\n| --- | --- | --- |\n";
if (!s.includes(cab)) throw new Error("STATUS.md: no encuentro la tabla del registro");
s = s.replace(cab, cab + `| ${hoy} | Fase ${fase}: ${resumen} | \`v2: fase ${fase} completada\` |\n`);
fs.writeFileSync("STATUS.md", s);
console.log(`Fase ${fase} cerrada en el roadmap y STATUS.md.`);
