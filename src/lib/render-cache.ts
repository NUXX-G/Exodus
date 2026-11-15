/**
 * Caché del HTML renderizado. Renderizar un nodo (MathJax a SVG y Shiki) cuesta de 0,1 a 4 s, y la primera
 * vez tras arrancar el servidor, varios segundos más; sin caché, cada visita repetía ese trabajo.
 *
 * La clave es el SHA-256 del Markdown junto con la firma del resolutor de enlaces (ids y títulos del vault) y
 * la versión del renderizador: si cambia el texto de un nodo o el título de otro al que enlaza, la clave
 * cambia y se renderiza de nuevo; lo demás sale de la caché. Dos niveles:
 *  - memoria: LRU limitado en bytes, para las páginas más visitadas;
 *  - disco: un archivo por clave en RENDER_CACHE_DIR (por defecto, junto a la base de datos), así que
 *    sobrevive a los reinicios y a las actualizaciones de la imagen.
 * Las peticiones simultáneas de la misma clave comparten un único renderizado.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

/** Súbelo cuando cambie el renderizador (plugins, opciones de MathJax o Shiki): invalida toda la caché. */
export const RENDER_VERSION = "1";

// Poco: el disco sirve cualquier página en ~1 ms y el contenedor tiene 512 MB; con pocos usuarios, las páginas que se
// repiten caben de sobra.
const MAX_MEMORIA = 16 * 1024 * 1024;

const memoria = new Map<string, string>();
let bytesEnMemoria = 0;
const enCurso = new Map<string, Promise<string>>();
/** Claves usadas desde que arrancó el proceso (para podar del disco lo que ya no se usa). */
const usadas = new Set<string>();

export function cacheDir(): string {
  if (process.env.RENDER_CACHE_DIR) return path.resolve(/*turbopackIgnore: true*/ process.env.RENDER_CACHE_DIR);
  const db = path.resolve(/*turbopackIgnore: true*/ process.env.DATABASE_PATH ?? "./database/exodus.db");
  return path.join(path.dirname(db), "cache-html");
}

export function claveDeRender(markdown: string, firma: string): string {
  return crypto.createHash("sha256").update(RENDER_VERSION).update("\0").update(firma).update("\0").update(markdown).digest("hex");
}

function guardarEnMemoria(clave: string, html: string) {
  const previo = memoria.get(clave);
  if (previo !== undefined) {
    memoria.delete(clave);
    bytesEnMemoria -= previo.length;
  }
  memoria.set(clave, html);
  bytesEnMemoria += html.length;
  while (bytesEnMemoria > MAX_MEMORIA && memoria.size > 1) {
    const [vieja, valor] = memoria.entries().next().value as [string, string];
    memoria.delete(vieja);
    bytesEnMemoria -= valor.length;
  }
}

function leerDisco(clave: string): string | null {
  try {
    return fs.readFileSync(path.join(cacheDir(), clave + ".html"), "utf8");
  } catch {
    return null;
  }
}

function escribirDisco(clave: string, html: string) {
  try {
    const dir = cacheDir();
    fs.mkdirSync(dir, { recursive: true });
    const tmp = path.join(dir, `${clave}.${process.pid}.tmp`);
    fs.writeFileSync(tmp, html);
    fs.renameSync(tmp, path.join(dir, clave + ".html"));
  } catch {
    // Sin permiso de escritura o disco lleno: la caché en memoria sigue funcionando.
  }
}

/** Devuelve el HTML de la clave, renderizándolo con `producir` solo si no está en memoria ni en disco. */
export function conCache(clave: string, producir: () => Promise<string>): Promise<string> {
  usadas.add(clave);
  const enMemoria = memoria.get(clave);
  if (enMemoria !== undefined) {
    guardarEnMemoria(clave, enMemoria); // al final de la LRU
    return Promise.resolve(enMemoria);
  }
  const pendiente = enCurso.get(clave);
  if (pendiente) return pendiente;
  const p = (async () => {
    try {
      const enDisco = leerDisco(clave);
      if (enDisco !== null) {
        guardarEnMemoria(clave, enDisco);
        return enDisco;
      }
      const html = await producir();
      guardarEnMemoria(clave, html);
      escribirDisco(clave, html);
      return html;
    } finally {
      enCurso.delete(clave);
    }
  })();
  enCurso.set(clave, p);
  return p;
}

/** Borra del disco las entradas que no se han usado en este proceso (tras precalentar todo el vault). */
export function podarDisco(): number {
  let borradas = 0;
  try {
    for (const nombre of fs.readdirSync(cacheDir())) {
      const clave = nombre.replace(/\.html$/, "");
      if (nombre.endsWith(".tmp") || (nombre.endsWith(".html") && !usadas.has(clave))) {
        fs.rmSync(path.join(cacheDir(), nombre), { force: true });
        borradas++;
      }
    }
  } catch {
    // La carpeta aún no existe.
  }
  return borradas;
}

/** Solo para pruebas. */
export function vaciarMemoria() {
  memoria.clear();
  bytesEnMemoria = 0;
  usadas.clear();
}
