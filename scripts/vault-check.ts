/**
 * Valida el vault: frontmatter, ids duplicados, prerequisitos inexistentes, ciclos, que cada nodo y cada enunciado
 * (con cada una de sus variantes y opciones) se renderiza sin errores de LaTeX, wikilinks rotos ni LaTeX sin procesar,
 * y la estructura de los ejercicios (src/lib/calidad.ts). No necesita las soluciones: corre en CI.
 *
 *   npm run vault:check                 (falla si hay problemas; cuenta los avisos)
 *   npm run vault:check -- --avisos     (además lista los avisos: fuentes vagas, pocas variantes…)
 *
 * La verificación de las soluciones (contra .soluciones/) está en scripts/vault-soluciones.ts.
 */
import { avisosDeEjercicio, avisosDeFuentes, problemasDeEjercicio } from "../src/lib/calidad";
import { linkResolverFor, renderMarkdown } from "../src/lib/markdown";
import { loadRecursos } from "../src/lib/recursos";
import { loadObjetivos, problemasDeObjetivo } from "../src/lib/objetivos";
import { patronTerminos, terminosEn } from "../src/lib/glosario";
import { rellenar } from "../src/lib/tipos-ejercicio";
import { loadVault, vaultRoot } from "../src/lib/vault";

async function main() {
  const listarAvisos = process.argv.includes("--avisos");
  const vault = loadVault();
  const problems = vault.issues.map((i) => `${i.file}: ${i.message}`);
  const avisos: string[] = [];
  const resolve = linkResolverFor(vault);

  /** Renderiza un Markdown y anota LaTeX inválido o «$» sin procesar. */
  const revisa = async (md: string, donde: string) => {
    const html = await renderMarkdown(md, resolve);
    for (const m of html.matchAll(/data-mjx-error="([^"]*)"/g)) problems.push(`${donde}: LaTeX inválido: ${m[1]}`);
    for (const m of html.matchAll(/wikilink-rota[^>]*>([^<]*)/g)) problems.push(`${donde}: wikilink roto: [[${m[1]}]]`);
    const prosa = html.replace(/<pre[\s\S]*?<\/pre>|<code[\s\S]*?<\/code>|<svg[\s\S]*?<\/svg>/g, "");
    if (/\$[^<\s]/.test(prosa)) problems.push(`${donde}: queda un "$" sin procesar (¿fórmula mal cerrada?)`);
    // La coma decimal «{,}» solo tiene sentido dentro de LaTeX (p. ej., el valor de una variante fuera de $…$).
    if (prosa.includes("{,}")) problems.push(`${donde}: hay un "{,}" fuera de una fórmula (¿valor de variante sin $…$?)`);
  };

  for (const node of vault.nodes.values()) {
    await revisa(node.body, node.file);
    if (node.ctfFlag && !/^sha256:[0-9a-f]{64}$/.test(node.ctfFlag)) {
      problems.push(`${node.file}: ctf_flag debe ser "sha256:<64 hex>" (npm run vault:flag)`);
    }
    for (const ex of [...node.exercises, ...node.reviewBank, ...node.examExercises]) {
      const donde = `${node.file}: ejercicio ${ex.id}`;
      // Cada variante es un enunciado distinto: se renderizan todas (un dato puede romper el LaTeX).
      const enunciados = ex.variants?.length ? ex.variants.map((v) => rellenar(ex.prompt, v.values)) : [ex.prompt];
      for (const [i, p] of enunciados.entries()) await revisa(p, ex.variants?.length ? `${donde} (variante ${i})` : donde);
      for (const [i, o] of (ex.options ?? []).entries()) await revisa(o, `${donde} (opción ${String.fromCharCode(97 + i)})`);
      for (const p of problemasDeEjercicio(node, ex)) problems.push(`${node.file}: ${p}`);
      for (const a of avisosDeEjercicio(ex)) avisos.push(`${node.file}: ${a}`);
    }
    if (node.exercises.length > 0 && node.exercises.length < 5) problems.push(`${node.file}: un nodo con ejercicios necesita al menos 5`);
    if (node.ctfFlag && node.hints.length !== 3) problems.push(`${node.file}: un nodo con reto necesita exactamente 3 pistas`);
    for (const a of avisosDeFuentes(node)) avisos.push(`${node.file}: ${a}`);
  }

  // Páginas de recursos (vault/_recursos): área existente, Markdown que se renderiza y solo enlaces https o internos (/…).
  const recursos = loadRecursos();
  problems.push(...recursos.problemas);
  for (const p of recursos.paginas) {
    if (!vault.areas.has(p.area)) problems.push(`${p.archivo}: área desconocida "${p.area}"`);
    const html = await renderMarkdown(p.cuerpo, resolve);
    for (const m of html.matchAll(/wikilink-rota[^>]*>([^<]*)/g)) problems.push(`${p.archivo}: wikilink roto: [[${m[1]}]]`);
    for (const m of p.cuerpo.matchAll(/\]\((?!https:\/\/|\/[a-z])([^)]*)\)/g)) problems.push(`${p.archivo}: enlace que no es https ni interno: ${m[1]}`);
  }

  // Glosario: un término usado en un nodo que no tiene entre sus prerequisitos (directos o indirectos) el nodo que lo
  // explica es un tecnicismo sin explicar antes (PEDAGOGIA.md: escalera). Aviso, no error.
  const patron = patronTerminos(vault.glosario);
  const ancestros = new Map<string, Set<string>>();
  const deps = (id: string): Set<string> => {
    if (ancestros.has(id)) return ancestros.get(id)!;
    const s = new Set<string>();
    ancestros.set(id, s);
    for (const p of vault.nodes.get(id)?.prerequisites ?? []) {
      s.add(p);
      for (const q of deps(p)) s.add(q);
    }
    return s;
  };
  for (const node of vault.nodes.values()) {
    if (node.kind === "examen") continue;
    const antes = [...terminosEn(node.body, patron)].filter((x) => ![x.nodo, ...x.tambien].some((n) => n === node.id || deps(node.id).has(n)));
    if (antes.length) avisos.push(`${node.file}: usa términos que se explican en nodos posteriores: ${antes.map((x) => `«${x.termino}» (${x.nodo})`).join(", ")}`);
  }

  // Objetivos (vault/_objetivos): formato y nodos. Un nodo aún no escrito es un aviso (marca un hueco del temario).
  const objetivos = loadObjetivos(vaultRoot());
  problems.push(...objetivos.problemas);
  for (const o of objetivos.objetivos) for (const a of problemasDeObjetivo(o, vault)) avisos.push(`${a} (pendiente de escribir)`);

  const withExercises = [...vault.nodes.values()].filter((n) => n.exercises.length > 0).length;
  const withChallenge = [...vault.nodes.values()].filter((n) => n.ctfFlag).length;
  console.log(`Vault: ${vaultRoot()}`);
  console.log(`Nodos válidos: ${vault.nodes.size} (${withChallenge} con reto, ${withExercises} con ejercicios); páginas de recursos: ${recursos.paginas.length}; objetivos: ${objetivos.objetivos.length}; términos del glosario: ${vault.glosario.length}`);
  console.log(`Avisos: ${avisos.length}${avisos.length && !listarAvisos ? " (npm run vault:check -- --avisos para verlos)" : ""}`);
  if (listarAvisos) for (const a of avisos) console.log(`  · ${a}`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  process.exit(problems.length ? 1 : 0);
}

main();
