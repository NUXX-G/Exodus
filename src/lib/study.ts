import "server-only";
import type { AreaId } from "./areas";
import type { NodeState } from "./progress";
import type { Vault, VaultNode } from "./vault";

/** Minutos: lectura (~180 palabras/min), 30 por reto con flag y 4 por ejercicio. */
export function estimateMinutes(node: VaultNode): number {
  const words = node.body.replace(/```[\s\S]*?```/g, " código ").split(/\s+/).filter(Boolean).length;
  const reading = Math.round(words / 180);
  return reading + (node.ctfFlag ? 30 : 0) + node.exercises.length * 4;
}

export function formatMinutes(min: number): string {
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}

/** Orden de estudio: por nivel del tronco y, dentro del nivel, por el orden de las áreas. */
export function studyOrder(vault: Vault): VaultNode[] {
  const AREA_IDS = [...vault.areas.keys()];
  return [...vault.nodes.values()].sort(
    (a, b) =>
      a.trunkLevel - b.trunkLevel ||
      AREA_IDS.indexOf(a.area) - AREA_IDS.indexOf(b.area) ||
      a.title.localeCompare(b.title, "es"),
  );
}

/** Siguiente nodo recomendado: el primero disponible, con reto, en orden de estudio. */
export function recommendedNext(vault: Vault, states: Map<string, NodeState>): VaultNode | null {
  return studyOrder(vault).find((n) => states.get(n.id) === "available" && (n.ctfFlag || n.exercises.length > 0)) ?? null;
}

export interface AreaProgress {
  id: AreaId;
  total: number;
  done: number;
  minutesLeft: number;
}

export function areaProgress(vault: Vault, completed: Set<string>): AreaProgress[] {
  return [...vault.areas.keys()].map((id) => {
    const own = [...vault.nodes.values()].filter((n) => n.area === id);
    return {
      id,
      total: own.length,
      done: own.filter((n) => completed.has(n.id)).length,
      minutesLeft: own.filter((n) => !completed.has(n.id)).reduce((s, n) => s + estimateMinutes(n), 0),
    };
  }).filter((a) => a.total > 0);
}

export interface SearchHit {
  node: VaultNode;
  score: number;
  snippet: string;
}

const strip = (s: string) => Array.from(s, (c) => c.normalize("NFD")[0].toLowerCase()).join("");

/** Búsqueda de texto completo sin índice: el vault es pequeño y se relee en cada petición. */
export function searchVault(vault: Vault, query: string, limit = 30): SearchHit[] {
  const terms = strip(query).split(/\s+/).filter((t) => t.length >= 2);
  if (terms.length === 0) return [];
  const hits: SearchHit[] = [];
  for (const node of vault.nodes.values()) {
    const title = strip(node.title);
    const body = strip(node.body);
    let score = 0;
    let first = -1;
    for (const t of terms) {
      if (title.includes(t)) score += 20;
      let from = 0;
      let count = 0;
      for (let i = body.indexOf(t, from); i !== -1 && count < 50; i = body.indexOf(t, from)) {
        if (first === -1) first = i;
        count++;
        from = i + t.length;
      }
      score += count;
      if (count === 0 && !title.includes(t)) {
        score = 0; // todos los términos deben aparecer
        break;
      }
    }
    if (score === 0) continue;
    // `strip` conserva la longitud, así que el índice vale también sobre el texto original.
    const start = Math.max(0, (first === -1 ? 0 : first) - 80);
    const raw = node.body
      .slice(start, start + 240)
      .replace(/```[\s\S]*?(```|$)/g, " ")
      .replace(/[#>*_`|]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    hits.push({ node, score, snippet: (start > 0 ? "… " : "") + raw + " …" });
  }
  return hits.sort((a, b) => b.score - a.score).slice(0, limit);
}
