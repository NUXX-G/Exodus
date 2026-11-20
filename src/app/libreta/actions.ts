"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { createNote, deleteDrawing, deleteNote, MAX_BODY, MAX_TITLE, saveDrawing, updateNote, type NoteError } from "@/lib/notes";
import { validarTrazos } from "@/lib/dibujo";

export interface NoteFormState {
  ok: boolean;
  message: string;
}

const MENSAJES: Record<NoteError, string> = {
  titulo: "La nota necesita un título.",
  largo: `El título admite ${MAX_TITLE} caracteres y el texto ${MAX_BODY.toLocaleString("es-ES")}.`,
  limite: "Has llegado al máximo de notas. Borra alguna antes de crear otra.",
};

function campos(form: FormData) {
  return {
    title: String(form.get("title") ?? ""),
    body: String(form.get("body") ?? ""),
    nodeId: String(form.get("nodeId") ?? "") || null,
  };
}

/** Crea una nota. Desde la libreta abre la nota nueva; desde un nodo, se queda en el nodo. */
export async function createNoteAction(_prev: NoteFormState | null, form: FormData): Promise<NoteFormState> {
  const user = await requireUser();
  const input = campos(form);
  const r = createNote(user.id, input);
  if (typeof r === "string") return { ok: false, message: MENSAJES[r] };
  revalidatePath("/libreta");
  if (input.nodeId) {
    revalidatePath(`/nodo/${input.nodeId}`);
    if (form.get("quedarse") === "1") return { ok: true, message: "Nota guardada en tu libreta." };
  }
  redirect(`/libreta/${r.id}`);
}

export async function updateNoteAction(_prev: NoteFormState | null, form: FormData): Promise<NoteFormState> {
  const user = await requireUser();
  const id = Number(form.get("id"));
  const r = updateNote(user.id, id, campos(form));
  if (r === null) return { ok: false, message: "Esa nota no existe." };
  if (typeof r === "string") return { ok: false, message: MENSAJES[r] };
  revalidatePath("/libreta");
  revalidatePath(`/libreta/${id}`);
  if (r.nodeId) revalidatePath(`/nodo/${r.nodeId}`);
  return { ok: true, message: "Guardada." };
}

export async function deleteNoteAction(form: FormData): Promise<void> {
  const user = await requireUser();
  deleteNote(user.id, Number(form.get("id")));
  revalidatePath("/libreta");
  redirect("/libreta");
}

/* ───────── Dibujos (fase 8B) ───────── */

export type SaveDrawingResult = { ok: true; id: number } | { ok: false; error: string };

/** Guarda los trazos de un dibujo (nuevo si `drawingId` es null). Se validan y normalizan en el servidor. */
export async function saveDrawingAction(noteId: number, drawingId: number | null, strokesJson: string): Promise<SaveDrawingResult> {
  const user = await requireUser();
  if (strokesJson.length > 4_000_000) return { ok: false, error: "El dibujo es demasiado grande." };
  let datos: unknown;
  try {
    datos = JSON.parse(strokesJson);
  } catch {
    return { ok: false, error: "Datos de dibujo no válidos." };
  }
  const trazos = validarTrazos(datos);
  if (!trazos) return { ok: false, error: "Datos de dibujo no válidos." };
  const id = saveDrawing(user.id, noteId, drawingId, JSON.stringify(trazos));
  if (id === null) return { ok: false, error: "No se pudo guardar (¿nota ajena o demasiados dibujos?)." };
  revalidatePath(`/libreta/${noteId}`);
  return { ok: true, id };
}

export async function deleteDrawingAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const id = Number(form.get("drawingId"));
  const noteId = Number(form.get("noteId"));
  if (Number.isInteger(id)) deleteDrawing(user.id, id);
  revalidatePath(`/libreta/${noteId}`);
}
