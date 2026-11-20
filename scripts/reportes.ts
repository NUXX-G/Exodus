/**
 * Resumen de los reportes «creo que esto está mal» pendientes, por área, para pegarlo en STATUS.md (§8).
 *
 *   DATABASE_PATH=database/exodus.db npm run -s reportes          (en el servidor, o con una copia de la base)
 *
 * Solo lee la base de datos.
 */
import { listReports } from "../src/lib/progress";
import { loadVault } from "../src/lib/vault";

const vault = loadVault();
const pendientes = listReports("pendiente");
if (pendientes.length === 0) {
  console.log("- Ningún reporte pendiente.");
  process.exit(0);
}
const porArea = new Map<string, typeof pendientes>();
for (const r of pendientes) {
  const area = vault.nodes.get(r.nodeId)?.area ?? "desconocida";
  porArea.set(area, [...(porArea.get(area) ?? []), r]);
}
for (const [area, rs] of porArea) {
  console.log(`- **${vault.areas.get(area)?.label ?? area}** (${rs.length}):`);
  for (const r of rs) {
    const msg = r.message.replace(/\s+/g, " ").slice(0, 160);
    console.log(`  - \`${r.nodeId}\`${r.exerciseId ? ` / \`${r.exerciseId}\`` : ""} (${r.createdAt.toISOString().slice(0, 10)}): ${msg}`);
  }
}
