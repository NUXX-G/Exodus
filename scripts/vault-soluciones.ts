/**
 * Verifica las soluciones del vault contra las especificaciones locales de .soluciones/ (no versionadas). Para cada
 * nodo con spec (`<id>.v2.mjs` si existe, si no `<id>.spec.mjs`):
 *  1. importa el spec, que recalcula cada respuesta por dos métodos y falla si no coinciden (y, en los ejercicios de
 *     código, ejecuta la solución de referencia con el script de pruebas real);
 *  2. regenera el bloque `exercises` y comprueba que coincide con el del vault (si no, el vault está desfasado: alguien
 *     cambió el nodo a mano o el spec cambió sin volver a inyectar);
 *  3. busca variantes degeneradas: respuestas no finitas, todas las variantes con la misma respuesta, o una respuesta
 *     que coincide con un dato del enunciado (se adivina sin pensar).
 *
 *   npm run vault:soluciones                        (todos; los specs que usan Docker tardan)
 *   npm run vault:soluciones -- mat-calculo-1 …     (solo esos nodos)
 *   npm run vault:soluciones -- --sin-docker        (salta los specs que ejecutan Docker)
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import matter from "gray-matter";
import { insertar, type Spec } from "./lib/inyectar";
import { loadVault, vaultRoot } from "../src/lib/vault";

const SOL = ".soluciones";

function specDe(id: string): string | null {
  for (const f of [`${id}.v2.mjs`, `${id}.spec.mjs`]) if (fs.existsSync(path.join(SOL, f))) return path.join(SOL, f);
  return null;
}

/** Variantes degeneradas (solo con respuestas numéricas o de texto corto). */
function degeneradas(s: Spec): string[] {
  const out: string[] = [];
  if (!s.variants?.length) return out;
  const resp = s.variants.map((v) => v.answers.map(String));
  if (s.type === "numero" && resp.flat().some((r) => !Number.isFinite(Number(r)))) out.push(`${s.id}: alguna variante tiene una respuesta no finita`);
  if (s.variants.length > 1 && new Set(resp.map((r) => r.join("|"))).size === 1) out.push(`${s.id}: todas las variantes tienen la misma respuesta`);
  s.variants.forEach((v, i) => {
    const datos = new Set(Object.values(v.values).map((x) => String(x).replace("{,}", ".")));
    if (v.answers.some((a) => datos.has(String(a)))) out.push(`${s.id}: la variante ${i} tiene como respuesta uno de sus datos (${v.answers.join(", ")})`);
  });
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  const sinDocker = args.includes("--sin-docker");
  const ids = args.filter((a) => !a.startsWith("--"));
  if (!fs.existsSync(SOL)) {
    console.error("No hay carpeta .soluciones/ (las soluciones no se versionan): nada que verificar.");
    process.exit(0);
  }
  const vault = loadVault();
  const nodos = [...vault.nodes.values()].filter((n) => (ids.length ? ids.includes(n.id) : true));
  const problemas: string[] = [];
  const avisos: string[] = [];
  let verificados = 0, saltados = 0, sinSpec = 0;
  for (const n of nodos) {
    if (n.kind === "examen") continue;
    const spec = specDe(n.id);
    if (!spec) {
      if (n.exercises.length) sinSpec++;
      continue;
    }
    const texto = fs.readFileSync(spec, "utf8");
    if (sinDocker && /docker/.test(texto + (texto.includes("./_codigo.mjs") ? "docker" : ""))) {
      saltados++;
      continue;
    }
    let specs: Spec[];
    try {
      specs = (await import(pathToFileURL(path.resolve(spec)).href)).default;
    } catch (e) {
      problemas.push(`${n.id}: el spec falla (doble comprobación): ${(e as Error).message.split("\n")[0]}`);
      continue;
    }
    const archivo = path.join(vaultRoot(), n.file);
    const actual = matter(fs.readFileSync(archivo, "utf8").replace(/\r\n/g, "\n")).data.exercises ?? [];
    let regenerado: unknown[];
    try {
      regenerado = matter(insertar(fs.readFileSync(archivo, "utf8"), specs)).data.exercises ?? [];
    } catch (e) {
      problemas.push(`${n.id}: no se puede regenerar desde el spec: ${(e as Error).message}`);
      continue;
    }
    const porId = (xs: unknown[]) => new Map((xs as { id: string }[]).map((x) => [x.id, JSON.stringify(x)]));
    const a = porId(actual), b = porId(regenerado);
    for (const [id, v] of b) {
      if (!a.has(id)) problemas.push(`${n.id}: el ejercicio ${id} está en el spec pero no en el vault (falta inyectar)`);
      else if (a.get(id) !== v) problemas.push(`${n.id}: el ejercicio ${id} del vault no coincide con el spec (vuelve a inyectar o revisa el cambio)`);
    }
    for (const id of a.keys()) if (!b.has(id)) problemas.push(`${n.id}: el ejercicio ${id} está en el vault pero no en el spec`);
    for (const s of specs) avisos.push(...degeneradas(s).map((d) => `${n.id}: ${d}`));
    verificados++;
  }
  console.log(`Nodos verificados contra su spec: ${verificados}; saltados (Docker): ${saltados}; con ejercicios y sin spec: ${sinSpec}`);
  for (const x of avisos) console.log(`  · ${x}`);
  for (const p of problemas) console.error(`  ✗ ${p}`);
  process.exit(problemas.length ? 1 : 0);
}

main();
