// Añade un nodo a `tambien` de un término del glosario. Uso: node tambien.cjs <archivo> <término> <nodo>
const fs = require("fs");
const [f, termino, nodo] = process.argv.slice(2);
let t = fs.readFileSync(f, "utf8");
const crlf = t.includes("\r\n");
t = t.split("\r\n").join("\n");
const ini = t.indexOf(`  - termino: ${termino}\n`);
if (ini < 0) throw new Error("no está el término " + termino);
let fin = t.indexOf("\n  - termino:", ini + 5); if (fin < 0) fin = t.indexOf("\n---", ini);
let bloque = t.slice(ini, fin);
const m = bloque.match(/^    tambien: \[(.*)\]$/m);
if (m) { const xs = m[1].split(",").map((s) => s.trim()).filter(Boolean); if (!xs.includes(nodo)) xs.push(nodo); bloque = bloque.replace(m[0], `    tambien: [${xs.join(", ")}]`); }
else bloque = bloque.replace(/(\n    nodo: [a-z0-9-]+)/, `$1\n    tambien: [${nodo}]`);
t = t.slice(0, ini) + bloque + t.slice(fin);
fs.writeFileSync(f, crlf ? t.split("\n").join("\r\n") : t);
console.log(bloque.match(/^    tambien: .*$/m)[0]);
