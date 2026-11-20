/** Generación del bloque `exercises:` de un nodo a partir de un spec (lo usa scripts/ex-inject.ts). */
import { marcadores, REGISTRO, salDe, TIPOS, type DefEjercicio, type TipoId } from "../../src/lib/tipos-ejercicio";

export interface Spec extends Omit<DefEjercicio, "type"> {
  type?: TipoId;
  tier: 1 | 2 | 3;
  prompt: string;
  answers?: string[];
  review?: boolean;
  variants?: { values: Record<string, string | number>; answers: string[] }[];
}

const indentar = (s: string, n: number) =>
  s.split("\n").map((l) => (l ? " ".repeat(n) + l : "")).join("\n");

/** Bloque literal YAML (`|`) para textos con saltos de línea, comillas o LaTeX. */
const literal = (s: string, n: number) => `|\n${indentar(s.split("\\`").join("`").replace(/^\n+|\s+$/g, ""), n)}`;

function hashes(spec: Spec, def: DefEjercicio, respuestas: string[], variante: number | null): string[] {
  const tipo = REGISTRO[def.type];
  const sal = def.type === "texto" || def.type === "flag" ? spec.id : salDe(spec.id, variante);
  if (!respuestas?.length) throw new Error(`sin respuestas: ${spec.id}${variante === null ? "" : ` (variante ${variante})`}`);
  const out = respuestas.flatMap((r) => tipo.referencia(String(r), def, sal));
  // Toda respuesta de referencia debe corregirse como correcta con el propio corrector (doble comprobación).
  for (const r of respuestas) {
    // En el spec, la opción se da por letra («b»); el formulario manda el índice («1»).
    const envio = def.type === "opcion" ? String(r).split(/[,;\s]+/).filter(Boolean).map((x) => x.toLowerCase().charCodeAt(0) - 97).join(",") : String(r);
    const l = tipo.leer(envio, def, sal);
    if (!l.ok || !tipo.coincide(out, l.huellas)) throw new Error(`la respuesta de referencia «${r}» de ${spec.id} no se acepta a sí misma`);
  }
  return [...new Set(out)];
}

export function bloqueEjercicio(s: Spec): string {
  const type = s.type ?? "texto";
  if (!TIPOS.includes(type)) throw new Error(`tipo desconocido en ${s.id}: ${type}`);
  const def: DefEjercicio = { id: s.id, type, sig: s.sig, unit: s.unit, vars: s.vars, domain: s.domain, form: s.form, options: s.options, multiple: s.multiple };
  const l: string[] = [`  - id: ${s.id}`, `    tier: ${s.tier}`];
  if (type !== "texto") l.push(`    type: ${type}`);
  if (s.review) l.push(`    review: true`);
  if (s.sig !== undefined) l.push(`    sig: ${s.sig}`);
  if (s.unit) l.push(`    unit: ${JSON.stringify(s.unit)}`);
  if (s.vars) l.push(`    vars: ${JSON.stringify(s.vars)}`);
  if (s.domain) l.push(`    domain: ${JSON.stringify(s.domain)}`);
  if (s.form) l.push(`    form: ${s.form}`);
  if (s.multiple) l.push(`    multiple: true`);
  l.push(`    prompt: ${literal(s.prompt, 6)}`);
  if (s.options) {
    l.push(`    options:`);
    for (const o of s.options) l.push(`      - ${literal(o, 8)}`);
  }
  if (s.variants?.length) {
    const faltan = marcadores(s.prompt).filter((k) => s.variants!.some((v) => !(k in v.values)));
    if (faltan.length) throw new Error(`${s.id}: variantes sin el dato ${faltan.join(", ")}`);
    l.push(`    variants:`);
    s.variants.forEach((v, i) => {
      l.push(`      - values: ${JSON.stringify(v.values)}`);
      l.push(`        answers: ${JSON.stringify(hashes(s, def, v.answers, i))}`);
    });
  } else {
    l.push(`    answers: ${JSON.stringify(hashes(s, def, s.answers ?? [], null))}`);
  }
  return l.join("\n");
}

export function insertar(raw0: string, specs: Spec[]): string {
  const ids = new Set<string>();
  for (const s of specs) {
    if (ids.has(s.id)) throw new Error(`id repetido: ${s.id}`);
    ids.add(s.id);
  }
  const yaml = `exercises:\n${specs.map(bloqueEjercicio).join("\n")}`;
  const raw = raw0.replace(/\r\n/g, "\n");
  const end = raw.indexOf("\n---", 4);
  if (!raw.startsWith("---\n") || end < 0) throw new Error("el nodo no tiene frontmatter");
  let front = raw.slice(4, end);
  const rest = raw.slice(end);
  if (front.includes("exercises: __EJERCICIOS__")) {
    front = front.replace("exercises: __EJERCICIOS__", () => yaml); // función: el texto puede contener $` o $'
  } else if (/^exercises:/m.test(front)) {
    // reemplaza el bloque previo: desde `exercises:` hasta la siguiente clave de primer nivel
    front = front.replace(/^exercises:[\s\S]*?(?=^[A-Za-z_]+:|(?![\s\S]))/m, () => yaml + "\n");
  } else {
    throw new Error("falta `exercises: __EJERCICIOS__` en el frontmatter");
  }
  return "---\n" + front.replace(/\n+$/, "") + rest;
}

