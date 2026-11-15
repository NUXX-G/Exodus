// Uso: node reemplaza.cjs <archivo> <pares.json>  — pares: [[viejo, nuevo], ...]; respeta CRLF; falla si un «viejo» no aparece exactamente una vez.
const fs = require("fs");
const [f, p] = process.argv.slice(2);
let s = fs.readFileSync(f, "utf8");
const crlf = s.includes("\r\n");
if (crlf) s = s.replace(/\r\n/g, "\n");
for (const [a, b] of JSON.parse(fs.readFileSync(p, "utf8"))) {
  const n = s.split(a).length - 1;
  if (n !== 1) { console.error(`«${a.slice(0, 80)}» aparece ${n} veces`); process.exit(1); }
  s = s.replace(a, () => b);
}
fs.writeFileSync(f, crlf ? s.replace(/\n/g, "\r\n") : s);
console.log("ok", f);
