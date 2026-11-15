/**
 * Plugin «Git» de Obsidian (Vinzent03/obsidian-git, licencia MIT), incluido sin cambios en src/vendor/obsidian-git
 * para que la bóveda descargada traiga ya lo necesario para guardar los apuntes en un repositorio propio de GitHub.
 * Exodus no sube nada: el repositorio, la cuenta y la decisión de usarlo son de cada usuario.
 *
 * Actualizarlo (con una versión publicada hace al menos dos semanas):
 *   gh release download <versión> -R Vinzent03/obsidian-git -p main.js -p manifest.json -p styles.css \
 *     -D src/vendor/obsidian-git --clobber
 * y cambiar GIT_PLUGIN_SHA256 por los sha256 que muestra la release (campo «digest» de cada archivo). La licencia:
 *   gh api "repos/Vinzent03/obsidian-git/contents/LICENSE?ref=<versión>" --jq .content | base64 -d > src/vendor/obsidian-git/LICENSE
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const GIT_PLUGIN_ID = "obsidian-git";

/** sha256 de los archivos de la release 2.42.0, tal como los publica GitHub. */
export const GIT_PLUGIN_SHA256: Record<string, string> = {
  "main.js": "496db148bcea4169f455e234bb02f08f8c50c317c0ad5afde3b27c0904daf133",
  "manifest.json": "7ad98e8cce157e9846b47941c6a7cb9b022bc9d5c6d11782290e7a7a164b470d",
  "styles.css": "f30ad2ca42fefe3b704c548f7747d285c2038fa4ce90601e68fe6fd660494052",
};

/**
 * Ajustes iniciales (se mezclan con los del plugin): guarda y sube cada 10 minutos y trae los cambios al abrir.
 * Sin repositorio configurado, el plugin solo muestra un aviso; la nota «Primeros pasos» explica cómo crearlo.
 */
export const GIT_PLUGIN_DATA = {
  commitMessage: "apuntes: {{date}}",
  autoCommitMessage: "apuntes: {{date}}",
  autoSaveInterval: 10,
  autoPullOnBoot: true,
  syncMethod: "merge",
  pullBeforePush: true,
};

function vendorDir(): string {
  return path.join(process.cwd(), "src", "vendor", GIT_PLUGIN_ID);
}

let cache: Record<string, Buffer> | null = null;

/** Archivos del plugin comprobados contra GIT_PLUGIN_SHA256; lanza un error si falta alguno o no coincide. */
export function gitPluginFiles(): Record<string, Buffer> {
  if (cache) return cache;
  const out: Record<string, Buffer> = {};
  for (const [nombre, esperado] of Object.entries(GIT_PLUGIN_SHA256)) {
    const data = fs.readFileSync(path.join(vendorDir(), nombre));
    const real = crypto.createHash("sha256").update(data).digest("hex");
    if (real !== esperado) throw new Error(`src/vendor/${GIT_PLUGIN_ID}/${nombre} no coincide con la release publicada`);
    out[nombre] = data;
  }
  // La licencia MIT exige acompañar cada copia del aviso de copyright: viaja junto al plugin.
  out["LICENSE"] = fs.readFileSync(path.join(vendorDir(), "LICENSE"));
  cache = out;
  return out;
}

export function gitPluginVersion(): string {
  return JSON.parse(gitPluginFiles()["manifest.json"].toString("utf8")).version;
}
