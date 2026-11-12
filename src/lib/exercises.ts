/**
 * Ejercicios autocorregidos, dominio y repaso espaciado. Módulo puro (sin base de datos ni
 * acceso a disco) para poder probarlo y usarlo desde los scripts del vault.
 */
import crypto from "node:crypto";

/** Fracción de ejercicios de un nodo que hay que resolver para dominarlo. */
export const MASTERY_FRACTION = 0.8;

export function masteryNeeded(total: number): number {
  return total === 0 ? 0 : Math.ceil(total * MASTERY_FRACTION);
}

/**
 * Normaliza una respuesta antes de compararla: minúsculas, sin espacios, coma decimal como punto,
 * signo menos tipográfico como guion y sin «+» inicial. Las listas se piden separadas por «;»
 * (o coma y espacio), porque «1,2» sin espacio se lee como decimal. Las respuestas se diseñan con un formato
 * único (entero, fracción irreducible, expresión canónica), indicado en el enunciado.
 */
export function normalizeAnswer(s: string): string {
  return s
    .normalize("NFKC")
    .toLowerCase()
    .replace(/(\d),(\d)/g, "$1.$2") // coma decimal antes de quitar espacios: «1, 2» sigue siendo una lista
    .replace(/[\s ]+/g, "")
    .replace(/[−–—]/g, "-")
    .replace(/^\+/, "");
}

export const hashAnswer = (s: string): string =>
  "sha256:" + crypto.createHash("sha256").update(normalizeAnswer(s), "utf8").digest("hex");

/** Compara en tiempo constante con cualquiera de las respuestas aceptadas (`sha256:<hex>`). */
export function checkAnswer(accepted: string[], submission: string): boolean {
  const got = Buffer.from(hashAnswer(submission));
  let ok = false;
  for (const a of accepted) {
    const exp = Buffer.from(a.trim().toLowerCase());
    if (exp.length === got.length && crypto.timingSafeEqual(exp, got)) ok = true;
  }
  return ok;
}

/** Intervalos de repaso en días: tras acertar en el paso k, el siguiente repaso es a los INTERVALOS[k] días. */
export const REVIEW_INTERVALS = [1, 3, 7, 16, 35, 70] as const;

export interface ReviewSchedule {
  step: number;
  dueDay: string;
}

const pad = (n: number) => String(n).padStart(2, "0");
export const toDayKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export function addDays(day: string, n: number): string {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(y, m - 1, d + n);
  return toDayKey(date);
}

/** Primer repaso de un ejercicio recién resuelto: mañana. */
export function firstReview(today: string): ReviewSchedule {
  return { step: 0, dueDay: addDays(today, REVIEW_INTERVALS[0]) };
}

/** Acertar sube un paso (hasta el último intervalo); fallar vuelve al paso 0 y repite mañana. */
export function nextReview(step: number, correct: boolean, today: string): ReviewSchedule {
  if (!correct) return { step: 0, dueDay: addDays(today, REVIEW_INTERVALS[0]) };
  const next = Math.min(step + 1, REVIEW_INTERVALS.length - 1);
  return { step: next, dueDay: addDays(today, REVIEW_INTERVALS[next]) };
}
