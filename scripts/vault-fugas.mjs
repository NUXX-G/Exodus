// Detector de «fugas»: respuestas de ejercicios que aparecen literalmente en el texto de su propio nodo (un ejemplo resuelto con los
// mismos valores, un bloque de código que imprime la respuesta...). Necesita las especificaciones locales de `.soluciones/` (no se
// versionan), así que solo funciona en la máquina del autor.
// Uso: npm run vault:fugas [-- id1 id2 ...]   (SIN_DOCKER=1 se pone solo: no repite las comprobaciones lentas).
// Cada coincidencia hay que revisarla a mano: muchas son falsos positivos (un «1000» que aparece por otro motivo, un dato que el
// nodo enseña y el ejercicio pide recordar). Lo que hay que evitar es que un ejemplo o un bloque resuelva el ejercicio tal cual.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const vault = path.join(raiz, "vault");
const soluciones = path.join(raiz, ".soluciones");
const buscar = (d, id) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? buscar(path.join(d, e.name), id) : e.name === id + ".md" ? [path.join(d, e.name)] : []);
const escapa = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

if (process.argv[2] === "--uno") {
  const id = path.basename(process.argv[3]).replace(/\.spec\.mjs$/, "");
  // La v2 (variantes y banco de repaso) manda si existe: se revisan las respuestas de todas las variantes.
  const v2 = path.join(path.dirname(process.argv[3]), id + ".v2.mjs");
  const spec = fs.existsSync(v2) ? v2 : process.argv[3];
  const f = buscar(vault, id)[0];
  if (!f) { console.log(`${id}: sin nodo`); process.exit(0); }
  const txt = fs.readFileSync(f, "utf8"), cuerpo = txt.slice(txt.indexOf("\n---", 4) + 4);
  const m = await import(pathToFileURL(spec).href), fugas = [];
  for (const e of m.default) for (const a of (e.answers ?? []).concat((e.variants ?? []).flatMap((v) => v.answers))) {
    // Las opciones múltiples se responden con una letra: no hay nada que filtrar en el texto.
    if (e.type === "opcion" || a.length < 3 || /^(si|sí|no)$/i.test(a)) continue;
    const variantes = new Set([a, a.replace(/\./g, ","), a.replace(/;/g, " "), a.replace(/;/g, ", ")]);
    if ([...variantes].some((v) => new RegExp(`(^|[^0-9A-Za-z_.,])${escapa(v)}($|[^0-9A-Za-z_])`).test(cuerpo))) { fugas.push(`${e.id} = ${a}`); }
  }
  console.log(fugas.length ? `${id}: ${fugas.join(" | ")}` : `${id}: ok`);
  process.exit(0);
}

if (!fs.existsSync(soluciones)) { console.error("No hay .soluciones/: este detector solo funciona con las especificaciones locales."); process.exit(1); }
const pedidos = process.argv.slice(2);
const specs = fs.readdirSync(soluciones).filter((n) => n.endsWith(".spec.mjs") && (!pedidos.length || pedidos.includes(n.replace(/\.spec\.mjs$/, ""))));
for (const n of specs) {
  try {
    const out = execFileSync(process.execPath, [fileURLToPath(import.meta.url), "--uno", path.join(soluciones, n)],
      { encoding: "utf8", env: { ...process.env, SIN_DOCKER: "1" }, timeout: 120000 });
    const l = out.trim().split("\n").at(-1);
    if (!l.endsWith(": ok")) console.log(l);
  } catch (e) { console.log(`${n}: error al cargar (${String(e.message).split("\n")[0]})`); }
}
