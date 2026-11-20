"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { activateGoal, deactivateGoal, logStudyTime } from "@/lib/objetivos-db";
import { loadVault } from "@/lib/vault";

export async function activateGoalAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const h = Number(form.get("hours"));
  activateGoal(user.id, String(form.get("goalId") ?? ""), Number.isFinite(h) && h > 0 ? h : null, String(form.get("target") ?? "") || null);
  revalidatePath("/objetivos");
  revalidatePath("/");
}

export async function deactivateGoalAction(form: FormData): Promise<void> {
  const user = await requireUser();
  deactivateGoal(user.id, String(form.get("goalId") ?? ""));
  revalidatePath("/objetivos");
  revalidatePath("/");
}

export interface TimeState {
  ok: boolean;
  message: string;
}

/** Registro de tiempo de estudio (a mano desde un nodo, o desde el temporizador). */
export async function logStudyTimeAction(_prev: TimeState | null, form: FormData): Promise<TimeState> {
  const user = await requireUser();
  const vault = loadVault();
  const nodeId = String(form.get("nodeId") ?? "") || null;
  const node = nodeId ? vault.nodes.get(nodeId) : undefined;
  const area = node?.area ?? String(form.get("area") ?? "");
  if (!vault.areas.has(area)) return { ok: false, message: "Área desconocida." };
  const min = Number(form.get("minutes"));
  if (!logStudyTime(user.id, area, min, node?.id ?? null, form.get("source") === "temporizador" ? "temporizador" : "manual")) {
    return { ok: false, message: "Indica entre 1 y 720 minutos." };
  }
  revalidatePath("/");
  return { ok: true, message: `Anotados ${Math.round(min)} minutos.` };
}
