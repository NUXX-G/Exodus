/**
 * Informe de cobertura por área (fase 7): nodos con ejercicios, tipos, variantes, banco de repaso, exámenes y fuentes
 * vagas. Escribe docs/contenido/cobertura.md y un resumen en consola.
 *
 *   npm run vault:cobertura
 */
import fs from "node:fs";
import { cobertura, coberturaMarkdown } from "../src/lib/calidad";
import { loadVault } from "../src/lib/vault";

const c = cobertura(loadVault());
const hoy = new Date().toISOString().slice(0, 10);
fs.mkdirSync("docs/contenido", { recursive: true });
fs.writeFileSync("docs/contenido/cobertura.md", coberturaMarkdown(c, hoy));
for (const x of c) {
  console.log(
    `${x.label.padEnd(24)} ${String(x.nodos).padStart(3)} nodos · ${String(x.ejercicios).padStart(4)} ejercicios · ${String(x.conVariantes).padStart(3)} con variantes · banco ${String(x.bancoRepaso).padStart(3)} · fuentes vagas ${x.fuentesVagas}`,
  );
}
console.log("Escrito docs/contenido/cobertura.md");
