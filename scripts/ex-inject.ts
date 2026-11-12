/**
 * Inserta los ejercicios de un nodo en su frontmatter a partir de una especificación local.
 *
 * Uso:  npx tsx scripts/ex-inject.ts vault/00-troncal/mi-nodo.md .soluciones/mi-nodo.spec.mjs
 *
 * El nodo debe contener en el frontmatter la línea `exercises: __EJERCICIOS__` (se sustituye) o un
 * bloque `exercises:` previo generado por esta herramienta (se reemplaza entero).
 *
 * La especificación (`export default [...]`) vive en `.soluciones/`, que no se versiona, porque
 * contiene las respuestas en claro. Cada elemento: { id, tier, prompt, answers: ["..."] }.
 * En el nodo solo queda el hash de la respuesta normalizada.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { hashAnswer } from "../src/lib/exercises";

interface Spec {
  id: string;
  tier: 1 | 2 | 3;
  prompt: string;
  answers: string[];
}

async function main() {
  const [nodeFile, specFile] = process.argv.slice(2);
  if (!nodeFile || !specFile) {
    console.error("Uso: npx tsx scripts/ex-inject.ts <nodo.md> <especificacion.mjs>");
    process.exit(1);
  }
  const specs: Spec[] = (await import(pathToFileURL(path.resolve(specFile)).href)).default;
  const ids = new Set<string>();
  const blocks = specs.map((s) => {
    if (ids.has(s.id)) throw new Error(`id repetido: ${s.id}`);
    ids.add(s.id);
    if (!s.answers?.length) throw new Error(`sin respuestas: ${s.id}`);
    const prompt = s.prompt.replace(/^\n+|\s+$/g, "").split("\n").map((l) => (l ? "      " + l : "")).join("\n");
    const answers = [...new Set(s.answers.map(hashAnswer))].map((h) => `"${h}"`).join(", ");
    return `  - id: ${s.id}\n    tier: ${s.tier}\n    prompt: |\n${prompt}\n    answers: [${answers}]`;
  });
  const yaml = `exercises:\n${blocks.join("\n")}`;

  const raw = fs.readFileSync(nodeFile, "utf8").replace(/\r\n/g, "\n");
  const end = raw.indexOf("\n---", 4);
  if (!raw.startsWith("---\n") || end < 0) throw new Error("el nodo no tiene frontmatter");
  let front = raw.slice(4, end);
  const rest = raw.slice(end);

  if (front.includes("exercises: __EJERCICIOS__")) {
    front = front.replace("exercises: __EJERCICIOS__", yaml);
  } else if (/^exercises:/m.test(front)) {
    // reemplaza el bloque previo: desde `exercises:` hasta la siguiente clave de primer nivel
    front = front.replace(/^exercises:[\s\S]*?(?=^[A-Za-z_]+:|(?![\s\S]))/m, yaml + "\n");
  } else {
    throw new Error("falta `exercises: __EJERCICIOS__` en el frontmatter");
  }
  fs.writeFileSync(nodeFile, "---\n" + front.replace(/\n+$/, "") + rest);
  console.log(`${specs.length} ejercicios insertados en ${nodeFile}`);
}

main();
