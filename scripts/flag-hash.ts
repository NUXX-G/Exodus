/**
 * Genera el valor de `ctf_flag` para el frontmatter sin dejar la flag en claro en el vault.
 * Uso: npm run vault:flag -- "EXODUS{...}"
 */
import { sha256 } from "../src/lib/vault";

const flag = process.argv[2];
if (!flag) {
  console.error('Uso: npm run vault:flag -- "EXODUS{...}"');
  process.exit(1);
}
console.log(`ctf_flag: "sha256:${sha256(flag.trim())}"`);
