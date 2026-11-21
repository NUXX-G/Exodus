// Sustituye [[id]] por un texto llano cuando el nodo id aún no existe; deja una marca en un registro para enlazarlo después.
// Uso: node enlaces-pendientes.cjs <raíz> <archivo.md relativo>
const fs = require("fs"), path = require("path");
const [raiz, rel] = process.argv.slice(2);
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".md") ? [path.join(d, e.name)] : []));
const ids = new Set(walk(path.join(raiz, "vault")).map((f) => (fs.readFileSync(f, "utf8").match(/^id: (.+)$/m) || [])[1]).filter(Boolean));
const f = path.join(raiz, rel); let t = fs.readFileSync(f, "utf8");
const pendientes = [];
t = t.replace(/\[\[([a-z0-9-]+)(\|[^\]]*)?\]\]/g, (m, id, alias) => {
  if (ids.has(id)) return m;
  pendientes.push(id);
  return alias ? alias.slice(1) : "el tema `" + id + "`";
});
fs.writeFileSync(f, t);
if (pendientes.length) {
  const reg = path.join(raiz, "docs/contenido/enlaces-pendientes.md");
  let r = fs.existsSync(reg) ? fs.readFileSync(reg, "utf8") : "# Enlaces pendientes\n\nNodos que mencionan un nodo de tema aún no escrito. Al crear el nodo, sustituir el texto por el enlace `[[id]]`.\n\n| Archivo | Nodo pendiente |\n| --- | --- |\n";
  for (const id of new Set(pendientes)) if (!r.includes(`| ${rel} | \`${id}\` |`)) r += `| ${rel} | \`${id}\` |\n`;
  fs.writeFileSync(reg, r);
}
console.log("pendientes:", [...new Set(pendientes)].join(", ") || "ninguno");
