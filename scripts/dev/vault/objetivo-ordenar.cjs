// Reordena la lista «nodos» de un objetivo para que cada nodo vaya después de sus prerrequisitos que estén en la lista,
// alterando lo mínimo el orden actual (ordenación topológica estable: en cada paso se coloca el primer nodo pendiente cuyos
// prerrequisitos ya están colocados). Uso: node scripts/dev/vault/objetivo-ordenar.cjs <raíz> <objetivo> [--comprobar]
const fs = require("fs");
const path = require("path");
const [raiz, obj, flag] = process.argv.slice(2);
const pre = {};
const recorre = (d) => {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) recorre(p);
    else if (f.endsWith(".md")) {
      const s = fs.readFileSync(p, "utf8");
      const id = (s.match(/^id: (.*)$/m) || [])[1];
      const pr = (s.match(/^prerequisites: \[(.*)\]$/m) || [])[1];
      if (id) pre[id.trim()] = pr ? pr.split(",").map((x) => x.trim()).filter(Boolean) : [];
    }
  }
};
recorre(path.join(raiz, "vault"));
const f = path.join(raiz, "vault", "_objetivos", `${obj}.md`);
let t = fs.readFileSync(f, "utf8");
const m = t.match(/^nodos: (\[.*\])$/m);
const lista = JSON.parse(m[1]);
const enLista = new Set(lista);
// Cierre transitivo de prerrequisitos dentro de la lista (un nodo de la lista puede depender de otro a través de nodos que no están).
const memo = new Map();
const ancestros = (id) => {
  if (memo.has(id)) return memo.get(id);
  const out = new Set(), vistos = new Set([id]), pila = [...(pre[id] || [])];
  while (pila.length) {
    const p = pila.pop();
    if (vistos.has(p)) continue;
    vistos.add(p);
    if (enLista.has(p)) out.add(p);
    pila.push(...(pre[p] || []));
  }
  memo.set(id, out);
  return out;
};
const violaciones = [];
const pos = new Map(lista.map((x, i) => [x, i]));
for (const x of lista) for (const p of ancestros(x)) if (pos.get(p) > pos.get(x)) violaciones.push(`${p} va después de ${x}`);
if (flag === "--comprobar") {
  console.log(violaciones.length ? violaciones.join("\n") : "orden correcto");
  process.exit(violaciones.length ? 1 : 0);
}
const colocados = new Set(), nueva = [], pendientes = [...lista];
while (pendientes.length) {
  const i = pendientes.findIndex((x) => [...ancestros(x)].every((p) => colocados.has(p) || p === x));
  if (i < 0) throw new Error("ciclo de prerrequisitos entre: " + pendientes.join(", "));
  const [x] = pendientes.splice(i, 1);
  nueva.push(x);
  colocados.add(x);
}
t = t.replace(m[0], "nodos: " + JSON.stringify(nueva));
fs.writeFileSync(f, t);
console.log(`violaciones corregidas: ${violaciones.length}; movidos: ${nueva.filter((x, i) => lista[i] !== x).length}`);
