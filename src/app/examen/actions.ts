"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { answerChainStep, gradeExamDevelopment, saveExamAnswer, startExam, submitExam } from "@/lib/examen";
import { loadVault } from "@/lib/vault";

export async function startExamAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const vault = loadVault();
  const node = vault.nodes.get(String(form.get("nodeId") ?? ""));
  if (!node) return;
  const r = startExam(user.id, vault, node, form.get("mode") === "papel" ? "papel" : "normal");
  if (r.ok) redirect(`/examen/${r.id}`);
}

/** Guardado automático de una respuesta (sin corregir). */
export async function saveExamAnswerAction(id: number, ref: string, answer: string): Promise<boolean> {
  const user = await requireUser();
  if (answer.length > 20_000) return false;
  return saveExamAnswer(user.id, id, ref, answer);
}

export async function submitExamAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const id = Number(form.get("attemptId"));
  const a = submitExam(user.id, loadVault(), id);
  if (a) {
    revalidatePath(`/nodo/${a.nodeId}`);
    revalidatePath("/");
  }
  redirect(`/examen/${id}`);
}

export async function gradeExamDevelopmentAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const id = Number(form.get("attemptId"));
  const ref = String(form.get("ref") ?? "");
  const n = Number(form.get("criterios"));
  const scores = Array.from({ length: Number.isInteger(n) && n > 0 && n <= 20 ? n : 0 }, (_, i) => Number(form.get(`score-${i}`)));
  gradeExamDevelopment(user.id, loadVault(), id, ref, scores);
  revalidatePath(`/examen/${id}`);
}

export interface ChainState {
  tone: "ok" | "error";
  message: string;
}

export async function chainStepAction(_prev: ChainState | null, form: FormData): Promise<ChainState> {
  const user = await requireUser();
  const id = Number(form.get("attemptId"));
  const answer = form.getAll("answer").map(String).join(",");
  if (!answer.trim()) return { tone: "error", message: "Escribe una respuesta." };
  if (answer.length > 512) return { tone: "error", message: "La respuesta supera los 512 caracteres." };
  const r = answerChainStep(user.id, loadVault(), id, answer);
  if (!r.ok) return { tone: "error", message: r.error };
  if (!r.correcto) return { tone: "error", message: "No es correcto. Revisa y vuelve a intentarlo: el siguiente paso sigue cerrado." };
  revalidatePath(`/examen/${id}`);
  return { tone: "ok", message: r.terminado ? "¡Reto superado!" : "Correcto: se ha desbloqueado el siguiente paso." };
}
