/**
 * Valida el vault: frontmatter, ids duplicados, prerequisitos inexistentes, ciclos,
 * y que cada nodo se renderiza sin errores de LaTeX, wikilinks rotos ni LaTeX sin procesar.
 */
import { linkResolverFor, renderMarkdown } from "../src/lib/markdown";
import { loadRecursos } from "../src/lib/recursos";
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
    for (const ex of node.exercises) {
      const eh = await renderMarkdown(ex.prompt, resolve);
      for (const m of eh.matchAll(/data-mjx-error="([^"]*)"/g)) problems.push(`${node.file}: ejercicio ${ex.id}: LaTeX inválido: ${m[1]}`);
      const prose2 = eh.replace(/<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>|<svg[\s\S]*?<\/svg>/g, "");
      if (/\$[^<\s]/.test(prose2)) problems.push(`${node.file}: ejercicio ${ex.id}: queda un "$" sin procesar`);
    }
    if (node.exercises.length > 0 && node.exercises.length < 5) problems.push(`${node.file}: un nodo con ejercicios necesita al menos 5`);
    if (node.ctfFlag && node.hints.length !== 3) problems.push(`${node.file}: un nodo con reto necesita exactamente 3 pistas`);
  }

  // Páginas de recursos (vault/_recursos): área existente, Markdown que se renderiza y solo enlaces https.
  const recursos = loadRecursos();
  problems.push(...recursos.problemas);
  for (const p of recursos.paginas) {
    if (!vault.areas.has(p.area)) problems.push(`${p.archivo}: área desconocida "${p.area}"`);
    const html = await renderMarkdown(p.cuerpo, resolve);
    for (const m of html.matchAll(/wikilink-rota[^>]*>([^<]*)/g)) problems.push(`${p.archivo}: wikilink roto: [[${m[1]}]]`);
    for (const m of p.cuerpo.matchAll(/\]\((?!https:\/\/)([^)]*)\)/g)) problems.push(`${p.archivo}: enlace no https: ${m[1]}`);
  }

  const withExercises = [...vault.nodes.values()].filter((n) => n.exercises.length > 0).length;
  const withChallenge = [...vault.nodes.values()].filter((n) => n.ctfFlag).length;
  console.log(`Vault: ${vaultRoot()}`);
  console.log(`Nodos válidos: ${vault.nodes.size} (${withChallenge} con reto, ${withExercises} con ejercicios); páginas de recursos: ${recursos.paginas.length}`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(problems.length ? 1 : 0);
}

main();
