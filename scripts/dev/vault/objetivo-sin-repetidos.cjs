// Quita ids repetidos de la lista `nodos` de un objetivo (se queda con la primera aparición).
const fs = require("fs");
const f = process.argv[2];
let t = fs.readFileSync(f, "utf8");
t = t.replace(/^nodos: (\[.*\])$/m, (_, lista) => "nodos: " + JSON.stringify([...new Set(JSON.parse(lista))]));
fs.writeFileSync(f, t);
console.log(t.match(/^nodos: .*$/m)[0]);
