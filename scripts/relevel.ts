/**
 * Recalcula `trunk_level` de cada nodo como su profundidad en el grafo de prerrequisitos:
 * 0 si no tiene prerrequisitos, y 1 + el máximo nivel de sus prerrequisitos en caso contrario.
 * Así el árbol y el temario siempre se ordenan de forma coherente con los prerrequisitos.
 *
 * Uso: npm run vault:relevel          (escribe los cambios)
 *      npm run vault:relevel -- --dry (solo muestra qué cambiaría)
 */
import fs from "node:fs";
import path from "node:path";
import { loadVault, vaultRoot } from "../src/lib/vault";

const dry = process.argv.includes("--dry");
const vault = loadVault();
if (vault.issues.length) {
  console.error("El vault tiene problemas; corrígelos antes (npm run vault:check).");
  process.exit(1);
}

const level = new Map<string, number>();
const depth = (id: string): number => {
  const known = level.get(id);
  if (known !== undefined) return known;
  const pre = vault.nodes.get(id)!.prerequisites;
  const v = pre.length ? 1 + Math.max(...pre.map(depth)) : 0;
  level.set(id, v);
  return v;
};

let changed = 0;
for (const node of vault.nodes.values()) {
  const want = depth(node.id);
  if (want === node.trunkLevel) continue;
  changed++;
  console.log(`${node.id}: ${node.trunkLevel} -> ${want}`);
  if (dry) continue;
  const file = path.join(vaultRoot(), node.file);
  const raw = fs.readFileSync(file, "utf8");
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  const out = raw.replace(/^trunk_level: .*$/m, `trunk_level: ${want}`);
  fs.writeFileSync(file, eol === "\r\n" ? out.replace(/\r?\n/g, "\r\n") : out);
}
console.log(changed === 0 ? "Los niveles ya son coherentes." : `${changed} nodos ${dry ? "cambiarían" : "actualizados"}.`);
