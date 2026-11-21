// Añade un prerequisito a varios nodos (si no lo tienen ya). Uso: node prereq.cjs <raíz> <prerequisito> <id1> <id2> ...
const fs = require("fs");
const path = require("path");
const [root, pre, ...ids] = process.argv.slice(2);
const buscar = (d, id) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? buscar(path.join(d, e.name), id) : e.name === id + ".md" ? [path.join(d, e.name)] : []);
for (const id of ids) {
  const [f] = buscar(path.join(root, "vault"), id);
  if (!f) throw new Error("no existe " + id);
  let t = fs.readFileSync(f, "utf8");
  t = t.replace(/^prerequisites: \[(.*)\]$/m, (l, lista) => {
    const xs = lista.split(",").map((s) => s.trim()).filter(Boolean);
    if (xs.includes(pre)) return l;
    return `prerequisites: [${[...xs, pre].join(", ")}]`;
  });
  fs.writeFileSync(f, t);
  console.log(id, "→", t.match(/^prerequisites: .*$/m)[0]);
}
