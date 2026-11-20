/**
 * Glosario por área (fase 8A): la «leyenda» de Exodus. Cada área tiene una nota vault/_glosario/<área>.md, sin `id`
 * de nodo:
 *
 *   ---
 *   glosario: matematicas
 *   terminos:
 *     - termino: razón
 *       sinonimos: [razones]                     # otras formas que también se resaltan (plural, etc.)
 *       llano: "Comparar dos cantidades dividiendo una entre otra: «3 de cada 4»."
 *       formal: "El cociente $a/b$ de dos cantidades con $b \\ne 0$."   # Markdown con LaTeX (opcional)
 *       nodo: mat-proporcionalidad-porcentajes  # dónde se explica
 *   ---
 *
 * En el texto de los nodos, la primera aparición de cada término se resalta y muestra la explicación llana al pasar
 * el ratón o al enfocarla; enlaza a /glosario. Módulo puro salvo la lectura de disco.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

export const GLOSARIO_DIR = "_glosario";

const terminoSchema = z.object({
  termino: z.string().min(1).max(80),
  sinonimos: z.array(z.string().min(1).max(80)).max(10).optional(),
  /** Expresiones hechas que empiezan por el término pero no son él («fuerza bruta» no es una fuerza). */
  excepto: z.array(z.string().min(1).max(80)).max(10).optional(),
  llano: z.string().min(1).max(600),
  formal: z.string().max(1500).optional(),
  nodo: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
});

export interface Termino {
  termino: string;
  sinonimos: string[];
  excepto: string[];
  llano: string;
  formal: string | null;
  nodo: string;
  area: string;
  /** Ancla en /glosario. */
  slug: string;
}

export function slugTermino(t: string): string {
  return t
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function loadGlosario(root: string): { terminos: Termino[]; problemas: string[] } {
  const dir = path.join(root, GLOSARIO_DIR);
  const terminos: Termino[] = [];
  const problemas: string[] = [];
  if (!fs.existsSync(dir)) return { terminos, problemas };
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.toLowerCase().endsWith(".md")) continue;
    const archivo = `${GLOSARIO_DIR}/${f}`;
    let p: matter.GrayMatterFile<string>;
    try {
      p = matter(fs.readFileSync(path.join(dir, f), "utf8").replace(/\r\n?/g, "\n"));
    } catch (e) {
      problemas.push(`${archivo}: YAML inválido: ${(e as Error).message}`);
      continue;
    }
    const area = p.data.glosario;
    if (typeof area !== "string" || !area) {
      problemas.push(`${archivo}: falta \`glosario: <área>\``);
      continue;
    }
    const lista = Array.isArray(p.data.terminos) ? p.data.terminos : [];
    for (const [i, t] of lista.entries()) {
      const r = terminoSchema.safeParse(t);
      if (!r.success) {
        problemas.push(`${archivo}: término ${i + 1}: ${r.error.issues.map((x) => `${x.path.join(".")}: ${x.message}`).join("; ")}`);
        continue;
      }
      const slug = slugTermino(r.data.termino);
      if (terminos.some((x) => x.slug === slug)) {
        problemas.push(`${archivo}: término repetido «${r.data.termino}»`);
        continue;
      }
      terminos.push({ termino: r.data.termino, sinonimos: r.data.sinonimos ?? [], excepto: (r.data.excepto ?? []).map((x) => x.toLowerCase()), llano: r.data.llano, formal: r.data.formal ?? null, nodo: r.data.nodo, area, slug });
    }
  }
  return { terminos, problemas };
}

const escapar = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Expresión que encuentra cualquier término o sinónimo como palabra completa (sin distinguir mayúsculas). Los más
 * largos primero, para que «número primo» gane a «número».
 */
export function patronTerminos(terminos: Termino[]): { re: RegExp; porForma: Map<string, Termino> } | null {
  const porForma = new Map<string, Termino>();
  for (const t of terminos) for (const f of [t.termino, ...t.sinonimos]) porForma.set(f.toLowerCase(), t);
  if (porForma.size === 0) return null;
  const formas = [...porForma.keys()].sort((a, b) => b.length - a.length).map(escapar);
  return { re: new RegExp(`(?<![\\p{L}\\p{N}_])(${formas.join("|")})(?![\\p{L}\\p{N}_])`, "giu"), porForma };
}

/** El término encontrado en `texto` en la posición `i`, salvo que sea el comienzo de una de sus excepciones. */
export function terminoEn(texto: string, i: number, forma: string, patron: NonNullable<ReturnType<typeof patronTerminos>>): Termino | null {
  const t = patron.porForma.get(forma.toLowerCase());
  if (!t) return null;
  const resto = texto.slice(i, i + 100).toLowerCase();
  return t.excepto.some((e) => resto.startsWith(e)) ? null : t;
}

/** Términos que aparecen en un texto (para vault:check). */
export function terminosEn(texto: string, patron: ReturnType<typeof patronTerminos>): Set<Termino> {
  const out = new Set<Termino>();
  if (!patron) return out;
  // Sin código ni fórmulas: ahí un término no es una palabra del texto.
  const limpio = texto.replace(/```[\s\S]*?```|`[^`\n]*`|\$\$[\s\S]*?\$\$|\$[^$\n]*\$/g, " ");
  for (const m of limpio.matchAll(patron.re)) {
    const t = terminoEn(limpio, m.index!, m[1], patron);
    if (t) out.add(t);
  }
  return out;
}
