/**
 * Integra los hitos con `prueba.sh` de los proyectos en el tipo `codigo` (fase 4 de la v2): en cada ejercicio cuyo
 * enunciado dice «bash prueba.sh ./programa N», añade `type: codigo`, `language`, `harness: prueba.sh` y `stage: N`
 * justo después de `tier:`. Las respuestas no cambian (el código del hito se compara igual que antes), así que el
 * progreso guardado se conserva. Idempotente: no toca ejercicios que ya tienen `type:`.
 *
 *   node scripts/dev/marcar-hitos.cjs            (todos los nodos del vault con prueba.sh en attachments)
 *
 * Si se vuelve a inyectar un proyecto desde su spec, hay que volver a ejecutar esto (o usar un spec .v2 que ponga
 * esos campos).
 */
const fs = require("fs");
const path = require("path");

const LENGUAJE = { "proy-sys-kv-rust": "rust", "proy-sys-shell-c": "c" };

function* md(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name.startsWith("_")) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* md(p);
    else if (e.name.endsWith(".md")) yield p;
  }
}

let total = 0;
for (const f of md("vault")) {
  const raw = fs.readFileSync(f, "utf8");
  const crlf = raw.includes("\r\n");
  const t = raw.split("\r\n").join("\n");
  const fin = t.indexOf("\n---", 4);
  if (!t.startsWith("---\n") || fin < 0) continue;
  const front = t.slice(4, fin);
  if (!/^attachments:.*\bprueba\.sh\b/m.test(front)) continue;
  const id = /^id:\s*(\S+)/m.exec(front)?.[1];
  const lineas = front.split("\n");
  const out = [];
  let cambios = 0;
  for (let i = 0; i < lineas.length; i++) {
    out.push(lineas[i]);
    if (!/^ {4}tier: \d/.test(lineas[i])) continue;
    // Bloque del ejercicio: hasta el siguiente «  - id:» o una clave de primer nivel.
    let j = i + 1;
    while (j < lineas.length && !/^ {2}- id:/.test(lineas[j]) && !/^[A-Za-z_]+:/.test(lineas[j])) j++;
    const bloque = lineas.slice(i + 1, j).join("\n");
    if (/^ {4}type:/m.test(bloque)) continue;
    const m = /bash prueba\.sh \S+ (\d+)/.exec(bloque);
    if (!m) continue;
    out.push("    type: codigo", `    language: ${LENGUAJE[id] ?? "cualquiera"}`, "    harness: prueba.sh", `    stage: ${m[1]}`);
    cambios++;
  }
  if (cambios === 0) continue;
  const nuevo = "---\n" + out.join("\n") + t.slice(fin);
  fs.writeFileSync(f, crlf ? nuevo.split("\n").join("\r\n") : nuevo);
  console.log(`${f}: ${cambios} hitos`);
  total += cambios;
}
console.log(`${total} hitos marcados como código`);
