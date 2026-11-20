/**
 * Prueba de nivel adaptativa (fase 5). Módulo puro: el estado se guarda en la base de datos como JSON.
 *
 * Idea: los nodos de un área en orden de estudio forman (aproximadamente) una cadena en la que saber un nodo implica
 * saber los anteriores. Se busca la **frontera** (el primer nodo que no se domina) con búsqueda binaria: se prueba el
 * nodo central del intervalo pendiente con 2 preguntas (3 si hay empate); si las acierta, la frontera está más
 * adelante; si no, más atrás. Con 60 nodos bastan unas 6 sondas (12-18 preguntas). Al terminar, los nodos anteriores
 * a la frontera se marcan «dominado por diagnóstico» y se propone empezar por la frontera.
 *
 * Es una heurística (el árbol no es una cadena perfecta): por eso las marcas son reversibles y no cuentan como
 * completado. Referencia de la idea: los tests adaptativos eligen la siguiente pregunta según las respuestas previas
 * (van der Linden y Glas, «Elements of Adaptive Testing», Springer 2010); aquí con un modelo muy simple.
 */

export interface DiagQuestion {
  nodeId: string;
  exerciseId: string;
  variant: number | null;
  correct?: boolean;
}

export interface DiagState {
  area: string;
  /** Ids de los nodos del área en orden de estudio. */
  order: string[];
  /** La frontera está en [lo, hi]: order[0..lo-1] se dominan; order[hi] (si existe) no. */
  lo: number;
  hi: number;
  /** Sonda en curso: índice del nodo y preguntas hechas. */
  probe: { index: number; questions: DiagQuestion[] } | null;
  history: { nodeId: string; pass: boolean; aciertos: number; preguntas: number }[];
  done: boolean;
}

export function initDiag(area: string, order: string[]): DiagState {
  return { area, order, lo: 0, hi: order.length, probe: null, history: [], done: order.length === 0 };
}

/**
 * Elige el nodo que se sonda: el más cercano al centro de [lo, hi) que tenga preguntas. Si ninguno tiene, termina.
 */
export function pickProbe(s: DiagState, hasQuestions: (nodeId: string) => boolean): number | null {
  if (s.lo >= s.hi) return null;
  const mid = Math.floor((s.lo + s.hi - 1) / 2);
  for (let d = 0; d < s.hi - s.lo; d++) {
    for (const i of [mid - d, mid + d]) if (i >= s.lo && i < s.hi && hasQuestions(s.order[i])) return i;
  }
  return null;
}

/** Resultado de una sonda con las respuestas hasta ahora: aprobada, suspendida o falta otra pregunta. */
export function probeVerdict(answers: boolean[]): "pass" | "fail" | "more" {
  const ok = answers.filter(Boolean).length;
  const ko = answers.length - ok;
  if (ok >= 2) return "pass";
  if (ko >= 2) return "fail";
  return answers.length >= 3 ? (ok > ko ? "pass" : "fail") : "more";
}

/** Aplica el veredicto de la sonda: estrecha el intervalo de la frontera. */
export function applyVerdict(s: DiagState, pass: boolean): DiagState {
  if (!s.probe) return s;
  const i = s.probe.index;
  const aciertos = s.probe.questions.filter((q) => q.correct).length;
  const history = [...s.history, { nodeId: s.order[i], pass, aciertos, preguntas: s.probe.questions.length }];
  const lo = pass ? Math.max(s.lo, i + 1) : s.lo;
  const hi = pass ? s.hi : Math.min(s.hi, i);
  return { ...s, lo, hi, probe: null, history, done: lo >= hi };
}

/** Frontera final (índice del primer nodo no dominado). Solo tiene sentido con `done`. */
export const frontier = (s: DiagState) => s.lo;

/** Nodos que quedan «dominados por diagnóstico» y nodo por el que empezar (null si se domina toda el área). */
export function diagResult(s: DiagState): { mastered: string[]; start: string | null } {
  const f = frontier(s);
  return { mastered: s.order.slice(0, f), start: s.order[f] ?? null };
}
