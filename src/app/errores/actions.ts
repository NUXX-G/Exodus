"use server";

import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { isErrorTag } from "@/lib/errores";
import { MAX_ERROR_NOTE, tagAttempt } from "@/lib/progress";

export interface TagState {
  ok: boolean;
  message: string;
}

/** Etiqueta un fallo propio con su tipo de error y una nota opcional (diario de errores). */
export async function tagErrorAction(_prev: TagState | null, form: FormData): Promise<TagState> {
  const user = await requireUser();
  const id = Number(form.get("attemptId"));
  const tag = form.get("tag");
  const note = String(form.get("note") ?? "");
  if (!Number.isInteger(id) || !isErrorTag(tag)) return { ok: false, message: "Elige un tipo de error." };
  if (note.length > MAX_ERROR_NOTE) return { ok: false, message: `La nota admite ${MAX_ERROR_NOTE} caracteres.` };
  if (!tagAttempt(user.id, id, tag, note)) return { ok: false, message: "Ese intento no se puede etiquetar." };
  revalidatePath("/errores");
  return { ok: true, message: "Anotado en tu diario de errores." };
}
