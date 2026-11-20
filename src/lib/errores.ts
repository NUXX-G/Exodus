/**
 * Diario de errores y repaso ponderado. Módulo puro (sin base de datos), probado en tests/errores.test.ts.
 *
 * Tras un fallo, el alumno dice qué tipo de error fue. Esa etiqueta sirve para dos cosas:
 *  1. ver patrones en /errores (¿fallo por conceptos o por despistes?, ¿en qué nodos?, ¿mejoro con el tiempo?);
 *  2. ordenar y espaciar el repaso: un fallo de concepto pesa más que un despiste, y frena el alargamiento de los
 *     intervalos de ese ejercicio durante un tiempo.
 *
 * Los pesos son una decisión de diseño (STATUS.md §6), no un dato empírico: un error de comprensión pide volver
 * antes sobre la idea; un despiste, mucho menos. La literatura sobre práctica de recuperación y repaso espaciado
 * (Dunlosky et al. 2013, Psychological Science in the Public Interest 14(1); Rohrer y Taylor 2007, Instructional
 * Science 35) respalda espaciar e intercalar, no unos pesos concretos.
 */
import { addDays, REVIEW_INTERVALS, type ReviewSchedule } from "./exercises";

import { ERROR_TAGS, type ErrorTag } from "./errores-etiquetas";
export { ERROR_HELP, ERROR_LABEL, ERROR_TAGS, type ErrorTag } from "./errores-etiquetas";

/** Peso de un fallo según su tipo. Sin etiqueta cuenta como 1. */
export const ERROR_WEIGHT: Record<ErrorTag, number> = {
  concepto: 3,
  "no-sabia-empezar": 3,
  "caso-limite": 2,
  bug: 2,
  calculo: 1.5,
  "mala-lectura": 1,
  despiste: 0.5,
};

export const isErrorTag = (s: unknown): s is ErrorTag => typeof s === "string" && (ERROR_TAGS as readonly string[]).includes(s);

/** Días hacia atrás que cuentan como «fallos recientes». */
export const RECENT_DAYS = 21;

export interface RecentFail {
  /** Día del fallo, YYYY-MM-DD. */
  day: string;
  tag: ErrorTag | null;
}

const diasEntre = (a: string, b: string) => {
  const [y1, m1, d1] = a.split("-").map(Number);
  const [y2, m2, d2] = b.split("-").map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86_400_000);
};

/** Peso de los fallos recientes: cada uno pesa por su tipo y se desvanece linealmente en RECENT_DAYS días. */
export function failWeight(fails: RecentFail[], today: string): number {
  let w = 0;
  for (const f of fails) {
    const edad = diasEntre(f.day, today);
    if (edad < 0 || edad >= RECENT_DAYS) continue;
    w += (f.tag ? ERROR_WEIGHT[f.tag] : 1) * (1 - edad / RECENT_DAYS);
  }
  return w;
}

/** Prioridad de un repaso pendiente: días de retraso más el peso de los fallos recientes del ejercicio y del nodo. */
export function reviewPriority(dueDay: string, today: string, exerciseFails: RecentFail[], nodeFails: RecentFail[]): number {
  const retraso = Math.max(0, diasEntre(dueDay, today));
  return retraso + 2 * failWeight(exerciseFails, today) + 0.5 * failWeight(nodeFails, today);
}

/**
 * Siguiente repaso teniendo en cuenta los fallos recientes del ejercicio. Fallar vuelve al paso 0 (mañana), como
 * siempre. Acertar sube un paso, pero si hay fallos recientes de peso (concepto, no saber empezar…) el intervalo no
 * pasa de 7 días hasta que esos fallos envejezcan: la idea se comprueba otra vez pronto antes de espaciarla más.
 */
export function weightedNextReview(step: number, correct: boolean, today: string, exerciseFails: RecentFail[]): ReviewSchedule {
  if (!correct) return { step: 0, dueDay: addDays(today, REVIEW_INTERVALS[0]) };
  let next = Math.min(step + 1, REVIEW_INTERVALS.length - 1);
  const w = failWeight(exerciseFails, today);
  if (w >= 2) next = Math.min(next, 2); // como mucho 7 días
  else if (w >= 1) next = Math.min(next, 3); // como mucho 16 días
  return { step: next, dueDay: addDays(today, REVIEW_INTERVALS[next]) };
}

/** Lunes (YYYY-MM-DD) de la semana de un día, para agrupar la evolución por semanas. */
export function weekOf(day: string): string {
  const [y, m, d] = day.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  const dow = (dt.getUTCDay() + 6) % 7; // 0 = lunes
  dt.setUTCDate(dt.getUTCDate() - dow);
  return dt.toISOString().slice(0, 10);
}

/**
 * Intercala: de varias listas (una por nodo), toma un elemento de cada una por turnos. Así dos preguntas seguidas son
 * de nodos distintos (práctica intercalada), en vez de bloques del mismo tema.
 */
export function interleave<T>(groups: T[][], max: number): T[] {
  const out: T[] = [];
  const colas = groups.map((g) => [...g]).filter((g) => g.length > 0);
  while (out.length < max && colas.some((c) => c.length > 0)) {
    for (const c of colas) {
      if (c.length > 0 && out.length < max) out.push(c.shift()!);
    }
  }
  return out;
}
