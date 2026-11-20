"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { revealFor, type DevReveal } from "@/lib/desarrollo";
import { gradeDevelopment, lastAttemptId, MAX_DEV_ANSWER, submitDevelopment } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export type { DevReveal };

export type DevSubmitState = { ok: true; reveal: DevReveal } | { ok: false; message: string };

const MENSAJE_ENTREGA = {
  "sin-ejercicio": "Ese ejercicio ya no existe.",
  bloqueado: "Completa antes los prerequisitos de este nodo.",
  vacia: "Escribe tu respuesta o marca que la has hecho en papel.",
  larga: `La respuesta supera los ${MAX_DEV_ANSWER} caracteres.`,
  "sin-repaso": "Este repaso ya no está pendiente.",
  cambiada: "La pregunta ha cambiado (¿otra pestaña?). Recarga la página.",
  pendiente: "Tienes una entrega de este ejercicio sin puntuar: recarga la página para puntuarla.",
} as const;

export async function submitDevelopmentAction(form: FormData): Promise<DevSubmitState> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const exerciseId = String(form.get("exerciseId") ?? "");
  const answer = String(form.get("answer") ?? "");
  const onPaper = form.get("onPaper") === "on";
  const modo = String(form.get("mode") ?? "estudio");
  const mode = modo === "repaso" || modo === "intercalado" ? modo : "estudio";
  const reviewOf = String(form.get("reviewOf") ?? "") || undefined;
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { ok: false, message: "El nodo ya no existe en el vault." };
  const r = submitDevelopment(user.id, node, exerciseId, { answer, onPaper, mode, reviewOf });
  if (!r.ok) return { ok: false, message: MENSAJE_ENTREGA[r.reason] };
  const ex = [...node.exercises, ...node.reviewBank].find((e) => e.id === exerciseId)!;
  const reveal = await revealFor(ex, r.id, answer, onPaper);
  if (!reveal) return { ok: false, message: "Este ejercicio no tiene solución ni rúbrica publicadas. Usa «Creo que esto está mal»." };
  return { ok: true, reveal };
}

export type DevGradeState = { ok: true; message: string; solved: boolean; attemptId?: number } | { ok: false; message: string };

export async function gradeDevelopmentAction(form: FormData): Promise<DevGradeState> {
  const user = await requireUser();
  const id = Number(form.get("submissionId"));
  const scores = form.getAll("score").map(Number);
  if (!Number.isInteger(id)) return { ok: false, message: "Entrega no válida." };
  const vault = loadVault();
  const r = gradeDevelopment(user.id, vault, id, scores);
  if (!r.ok) {
    return { ok: false, message: { "no-existe": "Esa entrega ya no existe.", puntuada: "Esa entrega ya está puntuada.", puntos: "Puntúa cada criterio de la rúbrica." }[r.reason] };
  }
  revalidatePath("/");
  revalidatePath("/repaso");
  revalidatePath("/errores");
  const nota = `${r.score} de ${r.max} puntos (${Math.round((r.score / r.max) * 100)} %).`;
  if (!r.solved) return { ok: true, solved: false, message: `${nota} Por debajo del 60 %: cuenta como fallo. Repasa la solución y vuelve a intentarlo.`, attemptId: lastAttemptId(user.id) ?? undefined };
  return { ok: true, solved: true, message: `${nota} ${r.completedNode ? "Has dominado el nodo: completado." : r.mastered ? "Dominio alcanzado." : "Cuenta como resuelto."}` };
}

/** Vista previa de la respuesta (motor MathJax de contenido de usuario). */
export async function previewDevelopmentAction(md: string): Promise<string> {
  await requireUser();
  if (!md.trim() || md.length > MAX_DEV_ANSWER) return "";
  return renderMarkdown(md, linkResolverFor(loadVault()), "usuario");
}
