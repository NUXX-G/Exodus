/**
 * Calidad automática del vault (fase 7): comprobaciones de estructura de los ejercicios que no necesitan las soluciones
 * (corren en CI), avisos sobre las fuentes y el informe de cobertura. Módulo puro.
 */
import { marcadores, rellenar } from "./tipos-ejercicio";
import type { Vault, VaultExercise, VaultNode } from "./vault";

export interface Hallazgo {
  file: string;
  message: string;
}

/** Huellas que produce cada tipo para UNA respuesta de referencia (para detectar bloques corruptos o mal generados). */
const HUELLAS: Partial<Record<VaultExercise["type"], [number, number]>> = {
  numero: [1, 3], // valor y ±1 en la última cifra (pueden coincidir)
  expresion: [8, 9], // 8 puntos (+ forma)
  matriz: [1, 2], // matriz (+ vector)
  opcion: [1, 1],
};

/** Problemas de estructura de un ejercicio (fallan vault:check). */
export function problemasDeEjercicio(node: VaultNode, ex: VaultExercise): string[] {
  const out: string[] = [];
  const conjuntos = ex.variants?.length ? ex.variants.map((v) => v.answers) : [ex.answers];
  const rango = HUELLAS[ex.type];
  if (rango && ex.type !== "numero" && ex.type !== "matriz") {
    for (const [i, a] of conjuntos.entries()) {
      // expresion y opcion: una respuesta de referencia por ejercicio (varias formas equivalentes no hacen falta).
      if (a.length < rango[0] || a.length > rango[1]) out.push(`ejercicio ${ex.id}${ex.variants ? ` (variante ${i})` : ""}: ${a.length} huellas, se esperaban ${rango[0]}-${rango[1]} para ${ex.type}`);
    }
  }
  if (ex.variants?.length) {
    const vistos = new Map<string, number>();
    ex.variants.forEach((v, i) => {
      const clave = JSON.stringify(Object.entries(v.values).sort());
      if (vistos.has(clave)) out.push(`ejercicio ${ex.id}: las variantes ${vistos.get(clave)} y ${i} tienen los mismos datos`);
      else vistos.set(clave, i);
      const sobra = marcadores(rellenar(ex.prompt, v.values));
      if (sobra.length) out.push(`ejercicio ${ex.id}, variante ${i}: queda {{${sobra[0]}}} sin rellenar`);
    });
  } else if (marcadores(ex.prompt).length) {
    out.push(`ejercicio ${ex.id}: el enunciado tiene {{${marcadores(ex.prompt)[0]}}} pero no hay variantes`);
  }
  if (ex.type === "codigo" && ex.cases?.length && !ex.language) out.push(`ejercicio ${ex.id}: un ejercicio de código necesita language`);
  if (ex.type === "opcion" && ex.options && ex.options.length < 3 && !ex.review) out.push(`ejercicio ${ex.id}: una opción múltiple del nodo debería tener al menos 3 opciones`);
  void node;
  return out;
}

/** Avisos (no fallan): cosas mejorables. */
export function avisosDeEjercicio(ex: VaultExercise): string[] {
  const out: string[] = [];
  if (ex.variants && ex.variants.length < 3) out.push(`ejercicio ${ex.id}: solo ${ex.variants.length} variantes (con menos de 3, el repaso repite datos enseguida)`);
  if (ex.type === "codigo" && ex.cases?.length && !ex.template) out.push(`ejercicio ${ex.id}: ejercicio de código sin plantilla inicial`);
  return out;
}

/**
 * ¿Es concreta una fuente? Debe permitir ir al sitio exacto: capítulo, sección, páginas, un estándar con número o una
 * URL con ruta. «Autor. Libro. Editorial, año.» a secas no lo es.
 */
export function fuenteConcreta(s: string): boolean {
  return (
    /\b(cap(ítulo|itulo|\.)?|chapter|ch\.|secci[oó]n|section|sec\.|§|p(p|ágs?|ags?)?\.\s*\d|tema\s+\d|lecci[oó]n|unit|parte\s+[IVX\d]|part\s+[IVX\d]|libro\s+[IVX\d]|book\s+[IVX\d]|vol\.?\s*\d|ap[eé]ndice|appendix)/i.test(s) ||
    /\b(RFC|ISO(\/IEC)?|IEC|IEEE|FIPS|NIST\s+SP|ECMA|POSIX|ANSI|ETSI|ITU-T|CVE|CWE)[\s-]*\d/i.test(s) ||
    /https?:\/\/[^\s/]+\/[^\s]+/.test(s) ||
    /\b(doi|arxiv)\b/i.test(s)
  );
}

export function avisosDeFuentes(node: VaultNode): string[] {
  if (node.kind === "examen") return [];
  if (node.academicSources.length === 0) return ["sin academic_sources"];
  const vagas = node.academicSources.filter((s) => !fuenteConcreta(s));
  return vagas.length === node.academicSources.length ? [`ninguna fuente concreta (capítulo, sección, estándar o URL exacta): «${vagas[0].slice(0, 70)}»…`] : [];
}

/* ───────── Informe de cobertura ───────── */

export interface CoberturaArea {
  area: string;
  label: string;
  nodos: number;
  conEjercicios: number;
  ejercicios: number;
  porTipo: Record<string, number>;
  conVariantes: number;
  bancoRepaso: number;
  nodosConBanco: number;
  desarrollos: number;
  codigo: number;
  examenes: number;
  fuentesVagas: number;
  /** Nodos de teoría sin preguntas de repaso (el repaso y la prueba de nivel los usarían). */
  sinBanco: string[];
}

export function cobertura(vault: Vault): CoberturaArea[] {
  const out: CoberturaArea[] = [];
  for (const a of vault.areas.values()) {
    const nodos = [...vault.nodes.values()].filter((n) => n.area === a.id);
    if (nodos.length === 0) continue;
    const ejercicios = nodos.flatMap((n) => n.exercises);
    const porTipo: Record<string, number> = {};
    for (const e of ejercicios) porTipo[e.type] = (porTipo[e.type] ?? 0) + 1;
    out.push({
      area: a.id,
      label: a.label,
      nodos: nodos.length,
      conEjercicios: nodos.filter((n) => n.exercises.length > 0).length,
      ejercicios: ejercicios.length,
      porTipo,
      conVariantes: ejercicios.filter((e) => (e.variants?.length ?? 0) > 0).length,
      bancoRepaso: nodos.reduce((s, n) => s + n.reviewBank.length, 0),
      nodosConBanco: nodos.filter((n) => n.reviewBank.length > 0).length,
      desarrollos: ejercicios.filter((e) => e.type === "desarrollo").length,
      codigo: ejercicios.filter((e) => e.type === "codigo").length,
      examenes: nodos.filter((n) => n.kind === "examen").length,
      fuentesVagas: nodos.filter((n) => avisosDeFuentes(n).length > 0).length,
      sinBanco: nodos.filter((n) => n.kind === "teoria" && n.reviewBank.length === 0).map((n) => n.id),
    });
  }
  return out;
}

export function coberturaMarkdown(c: CoberturaArea[], fecha: string): string {
  const tipos = ["texto", "numero", "expresion", "matriz", "opcion", "codigo", "desarrollo", "flag"];
  const fila = (x: CoberturaArea) =>
    `| ${x.label} | ${x.nodos} | ${x.conEjercicios} | ${x.ejercicios} | ${tipos.map((t) => x.porTipo[t] ?? 0).join(" | ")} | ${x.conVariantes} | ${x.bancoRepaso} (${x.nodosConBanco} nodos) | ${x.examenes} | ${x.fuentesVagas} |`;
  const total = c.reduce(
    (s, x) => ({ nodos: s.nodos + x.nodos, ej: s.ej + x.ejercicios, var: s.var + x.conVariantes, banco: s.banco + x.bancoRepaso, vagas: s.vagas + x.fuentesVagas }),
    { nodos: 0, ej: 0, var: 0, banco: 0, vagas: 0 },
  );
  return `# Cobertura del vault

Generado por \`npm run vault:cobertura\` el ${fecha}. No editar a mano.

Totales: ${total.nodos} nodos, ${total.ej} ejercicios (${total.var} con variantes), ${total.banco} preguntas de repaso,
${total.vagas} nodos sin ninguna fuente concreta (capítulo, sección, estándar o URL exacta).

| Área | Nodos | Con ejercicios | Ejercicios | ${tipos.join(" | ")} | Con variantes | Banco de repaso | Exámenes | Fuentes vagas |
| --- | ---: | ---: | ---: | ${tipos.map(() => "---:").join(" | ")} | ---: | ---: | ---: | ---: |
${c.map(fila).join("\n")}

## Nodos de teoría sin banco de repaso

El repaso de estos nodos repite el enunciado (o usa variantes) y la prueba de nivel solo puede usar sus ejercicios. Se
completan en las fases de contenido (PARTE 2 del roadmap).

${c.map((x) => `- **${x.label}** (${x.sinBanco.length}): ${x.sinBanco.map((id) => `\`${id}\``).join(", ") || "ninguno"}`).join("\n")}
`;
}
