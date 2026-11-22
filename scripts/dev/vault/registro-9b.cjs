// Registro de la FASE 9B: añade una fila al registro de docs/contenido/troncal-temas.md, actualiza el contador «hechos: N/68»
// de docs/ROADMAP_V2.md y el «Siguiente paso concreto» de STATUS.md.
// Uso: node scripts/dev/vault/registro-9b.cjs <raíz> <hechos> "<siguiente paso>" "<fila markdown>"
const fs = require("fs");
const [raiz, hechos, siguiente, fila] = process.argv.slice(2);
let f = raiz + "/docs/contenido/troncal-temas.md", t = fs.readFileSync(f, "utf8");
t = t.replace(/\n*$/, "\n") + fila + "\n";
fs.writeFileSync(f, t);
f = raiz + "/docs/ROADMAP_V2.md"; t = fs.readFileSync(f, "utf8");
const re = /(abundantes con variantes, repaso\); hechos: )\d+\/68/;
if (!re.test(t)) throw new Error("contador 9B");
t = t.replace(re, (_, p1) => `${p1}${hechos}/68`);
fs.writeFileSync(f, t);
f = raiz + "/STATUS.md"; t = fs.readFileSync(f, "utf8");
const re2 = /- \*\*Siguiente paso concreto\*\*:[^\n]*\n/;
if (!re2.test(t)) throw new Error("status");
// Con una función como reemplazo: si el texto lleva «$`», «$'» o «$$», String.replace los interpretaría como patrones
// especiales (insertaría el texto anterior o posterior a la coincidencia). Eso corrompió STATUS.md entre los temas 7 y 46.
t = t.replace(re2, () => "- **Siguiente paso concreto**: " + siguiente + "\n");
fs.writeFileSync(f, t);
console.log("ok");
