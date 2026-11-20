"use server";

import { requireUser } from "@/lib/auth";
import { metaFrom } from "@/lib/form-meta";
import { lastAttemptId, submitPractice, submitReview } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export interface ReviewState {
  tone: "ok" | "error";
  message: string;
  /** El repaso ya se procesó: el formulario se bloquea y el resultado queda visible. */
  done?: boolean;
  /** Tras un fallo: el intento, para etiquetarlo en el diario de errores. */
  attemptId?: number;
}

export async function submitReviewAction(_prev: ReviewState | null, form: FormData): Promise<ReviewState> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const exerciseId = String(form.get("exerciseId") ?? "");
  const askedId = form.get("askedId");
  // Opción múltiple con varias correctas: cada casilla marcada llega como un «answer».
  const answer = form.getAll("answer").map(String).join(",");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { tone: "error", message: "El nodo ya no existe en el vault." };
  if (!answer.trim()) return { tone: "error", message: "Escribe una respuesta." };
  if (answer.length > 512) return { tone: "error", message: "La respuesta supera los 512 caracteres." };

  const r = submitReview(user.id, node, exerciseId, answer, { ...metaFrom(form), askedId: askedId === null ? undefined : String(askedId) });
  if (typeof r === "object") return { tone: "error", message: `No entiendo la respuesta: ${r.error}. No cuenta como intento.` };
  if (r === "sin-repaso") return { tone: "error", message: "Este repaso ya no está pendiente." };
  if (r === "espera") return { tone: "error", message: "Demasiados intentos fallidos. Espera un minuto." };
  if (r === "cambiada") return { tone: "error", message: "La pregunta ha cambiado (¿otra pestaña?). Recarga la página." };
  return r === "ok"
    ? { tone: "ok", done: true, message: "Correcto. Volverá a pedirse más adelante, con más separación." }
    : { tone: "error", done: true, message: "Incorrecta. Repasa el nodo: este tema se repetirá mañana.", attemptId: lastAttemptId(user.id) ?? undefined };
}

/** Respuesta en la práctica intercalada (/repaso?modo=intercalado). */
export async function submitPracticeAction(_prev: ReviewState | null, form: FormData): Promise<ReviewState> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const exerciseId = String(form.get("askedId") ?? "");
  const answer = form.getAll("answer").map(String).join(",");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { tone: "error", message: "El nodo ya no existe en el vault." };
  if (!answer.trim()) return { tone: "error", message: "Escribe una respuesta." };
  if (answer.length > 512) return { tone: "error", message: "La respuesta supera los 512 caracteres." };
  const r = submitPractice(user.id, node, exerciseId, answer, metaFrom(form));
  if (typeof r === "object") return { tone: "error", message: `No entiendo la respuesta: ${r.error}. No cuenta como intento.` };
  if (r === "sin-ejercicio") return { tone: "error", message: "Esa pregunta ya no existe." };
  if (r === "espera") return { tone: "error", message: "Demasiados intentos fallidos. Espera un minuto." };
  if (r === "cambiada") return { tone: "error", message: "La pregunta ha cambiado (¿otra pestaña?). Recarga la página." };
  return r === "ok"
    ? { tone: "ok", done: true, message: "Correcto." }
    : { tone: "error", done: true, message: "Incorrecta. Vuelve a salir en tu repaso de mañana.", attemptId: lastAttemptId(user.id) ?? undefined };
}
