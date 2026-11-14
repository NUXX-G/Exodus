/**
 * Recursos recomendados por rama: canales, cursos, libros y herramientas, fuera del árbol de nodos.
 * Cada rama tiene una nota en vault/_recursos/<área>.md (una nota normal de Obsidian, sin `id`, así que el
 * cargador de nodos la ignora):
 *
 *   ---
 *   recursos: matematicas          # id del área (debe existir)
 *   title: Recursos de matemáticas
 *   resumen: Canales, cursos y libros para estudiar matemáticas, de la ESO al máster.
 *   revisado: 2026-11-14           # fecha de la última comprobación de los enlaces
 *   ---
 *   (Markdown: secciones con listas de recursos y para qué sirve cada uno)
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { vaultRoot } from "./vault";

export const RECURSOS_DIR = "_recursos";

export interface PaginaRecursos {
  area: string;
  titulo: string;
  resumen: string;
  revisado: string | null;
  cuerpo: string;
  archivo: string;
}

export function loadRecursos(root: string = vaultRoot()): { paginas: PaginaRecursos[]; problemas: string[] } {
  const dir = path.join(root, RECURSOS_DIR);
  const paginas: PaginaRecursos[] = [];
  const problemas: string[] = [];
  if (!fs.existsSync(dir)) return { paginas, problemas };
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.toLowerCase().endsWith(".md")) continue;
    const archivo = `${RECURSOS_DIR}/${f}`;
    let p: matter.GrayMatterFile<string>;
    try {
      p = matter(fs.readFileSync(path.join(dir, f), "utf8").replace(/\r\n?/g, "\n"));
    } catch (e) {
      problemas.push(`${archivo}: YAML inválido: ${(e as Error).message}`);
      continue;
    }
    const area = p.data.recursos;
    if (typeof area !== "string" || !area) {
      problemas.push(`${archivo}: falta \`recursos: <área>\` en el frontmatter`);
      continue;
    }
    if (paginas.some((x) => x.area === area)) {
      problemas.push(`${archivo}: el área "${area}" ya tiene página de recursos`);
      continue;
    }
    const revisado = p.data.revisado instanceof Date ? p.data.revisado.toISOString().slice(0, 10) : typeof p.data.revisado === "string" ? p.data.revisado : null;
    paginas.push({
      area,
      titulo: typeof p.data.title === "string" && p.data.title.trim() ? p.data.title.trim() : `Recursos: ${area}`,
      resumen: typeof p.data.resumen === "string" ? p.data.resumen.trim() : "",
      revisado,
      cuerpo: p.content,
      archivo,
    });
  }
  return { paginas, problemas };
}
