/**
 * Genera la carpeta obsidian-plugin/ (manifest.json, main.js y versions.json) a partir de src/lib/obsidian-plugin.ts,
 * para publicar el plugin en un repositorio de GitHub propio (instalable con BRAT). El README y el flujo de
 * publicación de esa carpeta se mantienen a mano.
 *
 * Uso: npm run obsidian:plugin            (escribe los archivos)
 *      npm run obsidian:plugin -- --comprobar   (falla si la carpeta no está al día; lo usa la prueba)
 */
import fs from "node:fs";
import path from "node:path";
import { PLUGIN_MAIN_JS, PLUGIN_MANIFEST } from "../src/lib/obsidian-plugin";

const dir = path.join(__dirname, "..", "obsidian-plugin");
const json = (v: unknown) => JSON.stringify(v, null, 2) + "\n";
export const archivosDelPlugin: Record<string, string> = {
  "manifest.json": json(PLUGIN_MANIFEST),
  "main.js": PLUGIN_MAIN_JS,
  "versions.json": json({ [PLUGIN_MANIFEST.version]: PLUGIN_MANIFEST.minAppVersion }),
};

if (require.main === module) {
  const comprobar = process.argv.includes("--comprobar");
  let distintos = 0;
  for (const [nombre, contenido] of Object.entries(archivosDelPlugin)) {
    const f = path.join(dir, nombre);
    const actual = fs.existsSync(f) ? fs.readFileSync(f, "utf8").replace(/\r\n/g, "\n") : null;
    if (actual === contenido) continue;
    distintos++;
    if (comprobar) console.error(`obsidian-plugin/${nombre} no está al día: ejecuta npm run obsidian:plugin`);
    else fs.writeFileSync(f, contenido);
  }
  if (comprobar && distintos) process.exit(1);
  console.log(comprobar ? "obsidian-plugin/ al día" : `obsidian-plugin/: ${distintos} archivos escritos`);
}
