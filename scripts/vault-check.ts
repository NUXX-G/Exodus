/** Valida el vault: frontmatter, ids duplicados, prerequisitos inexistentes y ciclos. */
import { loadVault, vaultRoot } from "../src/lib/vault";

const { nodes, issues } = loadVault();
console.log(`Vault: ${vaultRoot()}`);
console.log(`Nodos válidos: ${nodes.size} (${[...nodes.values()].filter((n) => n.ctfFlag).length} con reto)`);
for (const issue of issues) console.error(`  ✗ ${issue.file}: ${issue.message}`);
process.exit(issues.length ? 1 : 0);
