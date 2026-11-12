"use server";

import { requireUser } from "@/lib/auth";
import { submitReview } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export interface ReviewState {
  tone: "ok" | "error";
  message: string;
  /** El repaso ya se procesó: el formulario se bloquea y el resultado queda visible. */
  done?: boolean;
}

export async function submitReviewAction(_prev: ReviewState | null, form: FormData): Promise<ReviewState> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const exerciseId = String(form.get("exerciseId") ?? "");
  const answer = String(form.get("answer") ?? "");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { tone: "error", message: "El nodo ya no existe en el vault." };
  if (!answer.trim()) return { tone: "error", message: "Escribe una respuesta." };
  if (answer.length > 512) return { tone: "error", message: "La respuesta supera los 512 caracteres." };

  const r = submitReview(user.id, node, exerciseId, answer);
  if (r === "sin-repaso") return { tone: "error", message: "Este repaso ya no está pendiente." };
  if (r === "espera") return { tone: "error", message: "Demasiados intentos fallidos. Espera un minuto." };
  return r === "ok"
    ? { tone: "ok", done: true, message: "Correcto. Volverá a pedirse más adelante, con más separación." }
    : { tone: "error", done: true, message: "Incorrecta. Repasa el nodo: este ejercicio se repetirá mañana." };
}
