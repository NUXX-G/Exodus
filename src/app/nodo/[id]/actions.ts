"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { createReport, defDe, lastAttemptId, MAX_REPORT_CHARS, revealNextHint, submitExercise, submitFlag } from "@/lib/progress";
import { interpretar } from "@/lib/tipos-ejercicio";
import { metaFrom } from "@/lib/form-meta";
import { loadVault } from "@/lib/vault";

export interface PreviewState {
  ok: boolean;
  /** HTML de la fórmula (motor MathJax de contenido de usuario) o texto del error. */
  html?: string;
  texto: string;
}

/**
 * Vista previa de una respuesta: cómo la ha entendido Exodus, dibujada. No corrige ni cuenta como intento.
 * La fórmula la genera el propio servidor a partir del árbol (no es el texto del usuario tal cual), y se dibuja
 * con el motor de contenido de usuario (STATUS.md §6.7).
 */
export async function previewAnswerAction(nodeId: string, exerciseId: string, answer: string): Promise<PreviewState> {
  await requireUser();
  const node = loadVault().nodes.get(nodeId);
  const ex = node && [...node.exercises, ...node.reviewBank].find((e) => e.id === exerciseId);
  if (!node || !ex) return { ok: false, texto: "" };
  if (!answer.trim() || answer.length > 512) return { ok: false, texto: "" };
  const r = interpretar(defDe(ex), answer);
  if (!r.ok) return { ok: false, texto: r.error };
  const html = r.latex ? await renderMarkdown(`$$\n${r.latex}\n$$`, linkResolverFor(loadVault()), "usuario") : undefined;
  return { ok: true, html, texto: r.texto };
}

export interface ReportState {
  tone: "ok" | "error";
  message: string;
}

/** «Creo que esto está mal»: queda pendiente para el administrador en /reportes. */
export async function reportAction(_prev: ReportState | null, form: FormData): Promise<ReportState> {
  const user = await requireUser();
  const nodeId = String(form.get("nodeId") ?? "");
  const exerciseId = String(form.get("exerciseId") ?? "") || null;
  const message = String(form.get("message") ?? "");
  if (!loadVault().nodes.has(nodeId)) return { tone: "error", message: "El nodo ya no existe." };
  if (message.length > MAX_REPORT_CHARS) return { tone: "error", message: `Máximo ${MAX_REPORT_CHARS} caracteres.` };
  const r = createReport(user.id, nodeId, exerciseId, message);
  if (r === "vacio") return { tone: "error", message: "Cuenta qué crees que está mal." };
  if (r === "espera") return { tone: "error", message: "Demasiados reportes en una hora. Prueba más tarde." };
  revalidatePath("/reportes");
  return { tone: "ok", message: "Gracias. Queda anotado para revisarlo." };
}

export interface FlagFormState {
  tone: "ok" | "error";
  message: string;
  /** Tras un fallo: el intento, para etiquetarlo en el diario de errores. */
  attemptId?: number;
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
  // Opción múltiple con varias correctas: cada casilla marcada llega como un «answer».
  const answer = form.getAll("answer").map(String).join(",");
  const node = loadVault().nodes.get(nodeId);
  if (!node) return { tone: "error", message: "El nodo ya no existe en el vault." };
  if (!answer.trim()) return { tone: "error", message: "Escribe una respuesta." };
  if (answer.length > 512) return { tone: "error", message: "La respuesta supera los 512 caracteres." };

  const r = submitExercise(user.id, node, exerciseId, answer, metaFrom(form));
  if (!r.ok) {
    if (r.reason === "ilegible") return { tone: "error", message: `No entiendo la respuesta: ${r.error}. No cuenta como intento.` };
    const msg = {
      "sin-ejercicio": "Ese ejercicio ya no existe.",
      bloqueado: "Completa antes los prerequisitos de este nodo.",
      incorrecta: "Respuesta incorrecta. Revisa el formato pedido y vuelve a intentarlo.",
      espera: "Demasiados intentos fallidos. Espera un minuto.",
      variante: "Los datos de este ejercicio han cambiado (lo resolviste en otra pestaña). Recarga la página.",
    }[r.reason];
    if (r.reason === "incorrecta") return { tone: "error", message: msg, attemptId: lastAttemptId(user.id) ?? undefined };
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
