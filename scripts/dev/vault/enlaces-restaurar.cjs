// Restaura los enlaces anotados en docs/contenido/enlaces-pendientes.md cuyo nodo ya existe: sustituye el texto
// «el nodo de <id sin prefijo, con espacios>» por [[id]] y borra la fila del registro. Uso: node enlaces-restaurar.cjs <raíz>
const fs = require("fs"), path = require("path");
const raiz = process.argv[2];
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".md") ? [path.join(d, e.name)] : []));
const ids = new Set(walk(path.join(raiz, "vault")).map((f) => (fs.readFileSync(f, "utf8").match(/^id: (.+)$/m) || [])[1]).filter(Boolean));
const reg = path.join(raiz, "docs/contenido/enlaces-pendientes.md");
if (!fs.existsSync(reg)) { console.log("sin registro"); process.exit(0); }
const lineas = fs.readFileSync(reg, "utf8").split("\n");
const quedan = [];
let n = 0;
for (const l of lineas) {
  const m = l.match(/^\| (.+?) \| `([a-z0-9-]+)` \|$/);
  if (!m || !ids.has(m[2])) { quedan.push(l); continue; }
  const [, rel, id] = m; const f = path.join(raiz, rel);
  let t = fs.readFileSync(f, "utf8");
  const texto = `el nodo de ${id.replace(/^(mat|fis|prog)-/, "").split("-").join(" ")}`;
  if (t.includes(texto)) { t = t.split(texto).join(`[[${id}]]`); fs.writeFileSync(f, t); n++; }
}
fs.writeFileSync(reg, quedan.join("\n"));
console.log("enlaces restaurados:", n);
