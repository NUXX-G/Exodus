/**
 * Valida el vault: frontmatter, ids duplicados, prerequisitos inexistentes, ciclos,
 * y que cada nodo se renderiza sin errores de LaTeX, wikilinks rotos ni LaTeX sin procesar.
 */
import { linkResolverFor, renderMarkdown } from "../src/lib/markdown";
import { loadVault, vaultRoot } from "../src/lib/vault";

async function main() {
  const vault = loadVault();
  const problems = vault.issues.map((i) => `${i.file}: ${i.message}`);
  const resolve = linkResolverFor(vault);

  for (const node of vault.nodes.values()) {
    const html = await renderMarkdown(node.body, resolve);
    for (const m of html.matchAll(/data-mjx-error="([^"]*)"/g)) problems.push(`${node.file}: LaTeX inválido: ${m[1]}`);
    for (const m of html.matchAll(/wikilink-rota[^>]*>([^<]*)/g)) problems.push(`${node.file}: wikilink roto: [[${m[1]}]]`);
    const prose = html.replace(/<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>|<svg[\s\S]*?<\/svg>/g, "");
    if (/\$[^<\s]/.test(prose)) problems.push(`${node.file}: queda un "$" sin procesar (¿fórmula mal cerrada?)`);
    if (node.ctfFlag && !/^sha256:[0-9a-f]{64}$/.test(node.ctfFlag)) {
      problems.push(`${node.file}: ctf_flag debe ser "sha256:<64 hex>" (npm run vault:flag)`);
    }
    if (node.ctfFlag && node.hints.length !== 3) problems.push(`${node.file}: un nodo con reto necesita exactamente 3 pistas`);
  }

  const withChallenge = [...vault.nodes.values()].filter((n) => n.ctfFlag).length;
  console.log(`Vault: ${vaultRoot()}`);
  console.log(`Nodos válidos: ${vault.nodes.size} (${withChallenge} con reto)`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(problems.length ? 1 : 0);
}

main();
