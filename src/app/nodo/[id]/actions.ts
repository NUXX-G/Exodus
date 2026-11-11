"use server";

import { revalidatePath } from "next/cache";
import { getCurrentUser } from "@/lib/db";
import { revealNextHint, submitFlag } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export interface FlagFormState {
  tone: "ok" | "error";
  message: string;
}

const MENSAJES = {
  "sin-reto": "Este nodo aún no tiene reto.",
  bloqueado: "Completa antes los prerequisitos de este nodo.",
  incorrecta: "Flag incorrecta. Revisa el formato y vuelve a calcular.",
  espera: "Demasiados intentos fallidos. Espera un minuto antes de volver a enviar.",
} as const;

export async function submitFlagAction(_prev: FlagFormState | null, form: FormData): Promise<FlagFormState> {
  const nodeId = String(form.get("nodeId") ?? "");
  const flag = String(form.get("flag") ?? "");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { tone: "error", message: "El nodo ya no existe en el vault." };
  if (!flag.trim()) return { tone: "error", message: "Escribe la flag antes de validar." };
  if (flag.length > 512) return { tone: "error", message: "La flag supera los 512 caracteres." };

  const result = submitFlag(getCurrentUser().id, node, flag);
  if (!result.ok) return { tone: "error", message: MENSAJES[result.reason] };

  revalidatePath("/");
  revalidatePath(`/nodo/${nodeId}`);
  return { tone: "ok", message: "Flag validada. Nodo completado." };
}

export async function revealHintAction(form: FormData): Promise<void> {
  const nodeId = String(form.get("nodeId") ?? "");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return;
  revealNextHint(getCurrentUser().id, node);
  revalidatePath(`/nodo/${nodeId}`);
}
