/**
 * Objetivos recomendados (fase 8): listas ordenadas de nodos de cualquier área que llevan a una meta concreta
 * («Primero del doble grado de la UNED», «Junior de sistemas», «Analista SOC nivel 1»…). Cada objetivo es una nota en
 * vault/_objetivos/<id>.md, sin `id` de nodo (el cargador de nodos la ignora):
 *
 *   ---
 *   objetivo: uned-primero             # id del objetivo (kebab-case, único)
 *   title: Primero del doble grado de Matemáticas y Física (UNED)
 *   resumen: Una línea para la tarjeta.
 *   horas_semana: 15                   # ritmo sugerido
 *   fuente: "UNED, folleto del doble grado 2026-27 (https://…)"   # de dónde sale el temario (si aplica)
 *   nodos: [mat-algebra-lineal-1, mat-calculo-1, …]   # en el orden recomendado
 *   ---
 *   (Markdown: qué se consigue, qué cubre cada bloque y qué falta todavía en Exodus)
 *
 * Así el árbol puede crecer (más nodos de matemáticas y física hasta el grado completo) sin reorganizarse: un objetivo
 * nuevo es otra lista de ids. Módulo puro salvo la lectura de disco.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { NodeState } from "./progress";
import type { Vault, VaultNode } from "./vault";

export const OBJETIVOS_DIR = "_objetivos";

export interface Objetivo {
  id: string;
  titulo: string;
  resumen: string;
  horasSemana: number;
  fuente: string | null;
  nodos: string[];
  cuerpo: string;
  archivo: string;
}

export function loadObjetivos(root: string): { objetivos: Objetivo[]; problemas: string[] } {
  const dir = path.join(root, OBJETIVOS_DIR);
  const objetivos: Objetivo[] = [];
  const problemas: string[] = [];
  if (!fs.existsSync(dir)) return { objetivos, problemas };
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.toLowerCase().endsWith(".md")) continue;
    const archivo = `${OBJETIVOS_DIR}/${f}`;
    let p: matter.GrayMatterFile<string>;
    try {
      p = matter(fs.readFileSync(path.join(dir, f), "utf8").replace(/\r\n?/g, "\n"));
    } catch (e) {
      problemas.push(`${archivo}: YAML inválido: ${(e as Error).message}`);
      continue;
    }
    const id = p.data.objetivo;
    if (typeof id !== "string" || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) {
      problemas.push(`${archivo}: falta \`objetivo: <id en kebab-case>\``);
      continue;
    }
    if (objetivos.some((o) => o.id === id)) {
      problemas.push(`${archivo}: objetivo repetido "${id}"`);
      continue;
    }
    const nodos = Array.isArray(p.data.nodos) ? p.data.nodos.filter((x: unknown): x is string => typeof x === "string") : [];
    if (nodos.length === 0) problemas.push(`${archivo}: \`nodos\` vacío`);
    if (new Set(nodos).size !== nodos.length) problemas.push(`${archivo}: nodos repetidos`);
    const h = Number(p.data.horas_semana);
    objetivos.push({
      id,
      titulo: typeof p.data.title === "string" && p.data.title.trim() ? p.data.title.trim() : id,
      resumen: typeof p.data.resumen === "string" ? p.data.resumen.trim() : "",
      horasSemana: Number.isFinite(h) && h > 0 && h <= 80 ? h : 10,
      fuente: typeof p.data.fuente === "string" ? p.data.fuente : null,
      nodos,
      cuerpo: p.content,
      archivo,
    });
  }
  return { objetivos, problemas };
}

/** Problemas de un objetivo frente al vault (nodos inexistentes). */
export function problemasDeObjetivo(o: Objetivo, vault: Vault): string[] {
  return o.nodos.filter((id) => !vault.nodes.has(id)).map((id) => `${o.archivo}: el nodo "${id}" no existe`);
}

export interface AvanceObjetivo {
  total: number;
  hechos: number;
  /** Dominados por la prueba de nivel (cuentan para avanzar, no como completados). */
  diagnosticados: number;
  minutosRestantes: number;
  /** Semanas que faltan al ritmo dado. */
  semanas: number;
  /** Siguiente nodo que se puede estudiar ya (o el prerequisito pendiente más cercano). */
  siguiente: VaultNode | null;
  /** Nodos del objetivo que aún no existen en Exodus. */
  faltan: string[];
}

/**
 * Avance de un objetivo. El siguiente nodo es el primero de la lista que no está hecho; si está bloqueado, se busca
 * hacia atrás por sus prerequisitos el primero disponible (para no proponer algo que no se puede abrir).
 */
export function avanceObjetivo(
  o: Objetivo,
  vault: Vault,
  states: Map<string, NodeState>,
  minutos: (n: VaultNode) => number,
  horasSemana = o.horasSemana,
): AvanceObjetivo {
  const nodos = o.nodos.map((id) => vault.nodes.get(id)).filter((n): n is VaultNode => !!n);
  const hecho = (n: VaultNode) => states.get(n.id) === "completed";
  const pendientes = nodos.filter((n) => !hecho(n) && states.get(n.id) !== "diagnosed");
  const minutosRestantes = pendientes.reduce((s, n) => s + minutos(n), 0);
  let siguiente: VaultNode | null = null;
  const primero = pendientes[0];
  if (primero) {
    const visto = new Set<string>();
    const busca = (n: VaultNode): VaultNode | null => {
      if (visto.has(n.id)) return null;
      visto.add(n.id);
      const st = states.get(n.id);
      if (st === "available") return n;
      if (st !== "locked") return null;
      for (const p of n.prerequisites) {
        const pn = vault.nodes.get(p);
        const r = pn && busca(pn);
        if (r) return r;
      }
      return null;
    };
    siguiente = busca(primero) ?? primero;
  }
  return {
    total: nodos.length,
    hechos: nodos.filter(hecho).length,
    diagnosticados: nodos.filter((n) => states.get(n.id) === "diagnosed").length,
    minutosRestantes,
    semanas: Math.ceil(minutosRestantes / (horasSemana * 60)),
    siguiente,
    faltan: o.nodos.filter((id) => !vault.nodes.has(id)),
  };
}
