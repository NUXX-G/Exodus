"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { revealNextHint, submitExercise, submitFlag } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export interface FlagFormState {
  tone: "ok" | "error";
  message: string;
}

const MENSAJES = {
  "sin-reto": "Este nodo aún no tiene reto.",
  bloqueado: "Completa antes los prerequisitos de este nodo.",
  dominio: "Antes de la flag integradora, resuelve al menos el 80 % de los ejercicios del nodo.",
  incorrecta: "Flag incorrecta. Revisa el formato y vuelve a calcular.",
  espera: "Demasiados intentos fallidos. Espera un minuto antes de volver a enviar.",
} as const;

export async function submitFlagAction(_prev: FlagFormState | null, form: FormData): Promise<FlagFormState> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const flag = String(form.get("flag") ?? "");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { tone: "error", message: "El nodo ya no existe en el vault." };
  if (!flag.trim()) return { tone: "error", message: "Escribe la flag antes de validar." };
  if (flag.length > 512) return { tone: "error", message: "La flag supera los 512 caracteres." };

  const result = submitFlag(user.id, node, flag);
  if (!result.ok) return { tone: "error", message: MENSAJES[result.reason] };

  revalidatePath("/");
  revalidatePath(`/nodo/${nodeId}`);
  return { tone: "ok", message: "Flag validada. Nodo completado." };
}

export async function revealHintAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return;
  revealNextHint(user.id, node);
  revalidatePath(`/nodo/${nodeId}`);
}

export async function submitExerciseAction(_prev: FlagFormState | null, form: FormData): Promise<FlagFormState> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const exerciseId = String(form.get("exerciseId") ?? "");
  const answer = String(form.get("answer") ?? "");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { tone: "error", message: "El nodo ya no existe en el vault." };
  if (!answer.trim()) return { tone: "error", message: "Escribe una respuesta." };
  if (answer.length > 512) return { tone: "error", message: "La respuesta supera los 512 caracteres." };

  const r = submitExercise(user.id, node, exerciseId, answer);
  if (!r.ok) {
    const msg = {
      "sin-ejercicio": "Ese ejercicio ya no existe.",
      bloqueado: "Completa antes los prerequisitos de este nodo.",
      incorrecta: "Respuesta incorrecta. Revisa el formato pedido y vuelve a intentarlo.",
      espera: "Demasiados intentos fallidos. Espera un minuto.",
    }[r.reason];
    return { tone: "error", message: msg };
  }
  revalidatePath("/");
  revalidatePath(`/nodo/${nodeId}`);
  revalidatePath("/repaso");
  return {
    tone: "ok",
    message: r.completedNode ? "Correcto. Has dominado el nodo: completado." : r.mastered ? "Correcto. Dominio alcanzado." : "Correcto.",
  };
}
