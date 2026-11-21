// Añade expresiones a la lista `excepto` de un término del glosario. Uso: node excepto.cjs <archivo> <término> <expr1> <expr2>...
const fs = require("fs");
const [f, termino, ...nuevas] = process.argv.slice(2);
let t = fs.readFileSync(f, "utf8");
const crlf = t.includes("\r\n");
t = t.split("\r\n").join("\n");
const ini = t.indexOf(`  - termino: ${termino}\n`);
if (ini < 0) throw new Error("no está el término " + termino);
const fin = t.indexOf("\n  - termino:", ini + 5);
const bloque = t.slice(ini, fin < 0 ? undefined : fin);
const m = bloque.match(/^    excepto: \[(.*)\]$/m);
let nuevo;
if (m) {
  const xs = m[1].split(",").map((s) => s.trim()).filter(Boolean);
  for (const x of nuevas) if (!xs.includes(x)) xs.push(x);
  if (xs.length > 30) throw new Error("más de 30 excepciones");
  nuevo = bloque.replace(m[0], `    excepto: [${xs.join(", ")}]`);
} else {
  nuevo = bloque.replace(`  - termino: ${termino}\n`, `  - termino: ${termino}\n    excepto: [${nuevas.join(", ")}]\n`);
}
t = t.slice(0, ini) + nuevo + (fin < 0 ? "" : t.slice(fin));
fs.writeFileSync(f, crlf ? t.split("\n").join("\r\n") : t);
console.log(nuevo.match(/^    excepto: .*$/m)[0]);
