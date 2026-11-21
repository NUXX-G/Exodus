// Inserta nodos de tema en la lista «nodos» de un objetivo, justo antes de un nodo dado (sin repetir).
// Uso: node scripts/dev/vault/objetivo-insertar.cjs <raíz> <objetivo> <antes-de> <id1> <id2> ...
const fs = require("fs");
const [raiz, obj, antes, ...ids] = process.argv.slice(2);
const f = `${raiz}/vault/_objetivos/${obj}.md`;
let t = fs.readFileSync(f, "utf8");
const m = t.match(/^nodos: (\[.*\])$/m);
if (!m) throw new Error("sin lista de nodos");
let lista = JSON.parse(m[1]).filter((x) => !ids.includes(x));
const i = lista.indexOf(antes);
if (i < 0) throw new Error("no está " + antes);
lista.splice(i, 0, ...ids);
t = t.replace(m[0], "nodos: " + JSON.stringify(lista));
fs.writeFileSync(f, t);
console.log(lista.slice(0, i + ids.length + 1).join(" → "));
