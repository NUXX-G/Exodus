/**
 * Inserta los ejercicios de un nodo en su frontmatter a partir de una especificación local.
 *
 * Uso:  npx tsx scripts/ex-inject.ts vault/00-troncal/mi-nodo.md .soluciones/mi-nodo.spec.mjs
 *
 * El nodo debe contener en el frontmatter la línea `exercises: __EJERCICIOS__` (se sustituye) o un
 * bloque `exercises:` previo generado por esta herramienta (se reemplaza entero).
 *
 * La especificación (`export default [...]`) vive en `.soluciones/`, que no se versiona, porque contiene las
 * respuestas en claro. Cada elemento (ver docs/AMPLIAR.md §1, «Tipos de ejercicio»):
 *
 *   { id, tier, prompt, answers: ["3/4"] }                                   texto (formato v1)
 *   { id, tier, type: "numero", sig: 3, unit: "m/s", prompt, answers: ["27.8"] }
 *   { id, tier, type: "expresion", vars: ["x"], domain: [0.5, 3], form?: "factorizada", prompt, answers: ["2x cos(x^2)"] }
 *   { id, tier, type: "matriz", prompt, answers: ["[[1,2],[3,4]]"] }
 *   { id, tier, type: "opcion", options: ["…", "…"], multiple?: true, prompt, answers: ["b"] }
 *   { id, tier, type: "flag", prompt, answers: ["EXODUS{...}"] }
 *   … y en cualquiera: review: true (solo repaso) y variants: [{ values: { a: 3 }, answers: ["6"] }, …]
 *     con `{{a}}` en el enunciado (cada variante se corrige con sus propias respuestas).
 *
 * En el nodo solo quedan hashes (con la sal del ejercicio y la variante): nunca la solución en claro.
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { insertar, type Spec } from "./lib/inyectar";

async function main() {
  const [nodeFile, specFile] = process.argv.slice(2);
  if (!nodeFile || !specFile) {
    console.error("Uso: npx tsx scripts/ex-inject.ts <nodo.md> <especificacion.mjs>");
    process.exit(1);
  }
  const specs: Spec[] = (await import(pathToFileURL(path.resolve(specFile)).href)).default;
  fs.writeFileSync(nodeFile, insertar(fs.readFileSync(nodeFile, "utf8"), specs));
  const n = specs.filter((s) => !s.review).length;
  console.log(`${n} ejercicios${specs.length > n ? ` y ${specs.length - n} de repaso` : ""} insertados en ${nodeFile}`);
}

main();
