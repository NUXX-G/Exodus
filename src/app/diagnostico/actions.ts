"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { requireUser } from "@/lib/auth";
import { answerDiagnostic, startDiagnostic, undoDiagnosis } from "@/lib/diagnostico-db";
import { loadVault } from "@/lib/vault";

export async function startDiagnosticAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const area = String(form.get("area") ?? "");
  const vault = loadVault();
  if (!vault.areas.has(area)) return;
  const id = startDiagnostic(user.id, vault, area);
  redirect(`/diagnostico/${id}`);
}

export async function undoDiagnosisAction(form: FormData): Promise<void> {
  const user = await requireUser();
  const area = String(form.get("area") ?? "") || undefined;
  const nodeId = String(form.get("nodeId") ?? "") || undefined;
  if (!area && !nodeId) return;
  undoDiagnosis(user.id, { area, nodeId });
  revalidatePath("/", "layout");
}

export interface DiagFormState {
  ok: boolean;
  message?: string;
}

export async function answerDiagnosticAction(_prev: DiagFormState | null, form: FormData): Promise<DiagFormState> {
  const user = await requireUser();
  const id = Number(form.get("sessionId"));
  const askedId = String(form.get("askedId") ?? "");
  const dontKnow = form.get("dontKnow") === "1";
  const answer = form.getAll("answer").map(String).join(",");
  if (!dontKnow && !answer.trim()) return { ok: false, message: "Escribe una respuesta o pulsa «No lo sé»." };
  if (answer.length > 512) return { ok: false, message: "La respuesta supera los 512 caracteres." };
  const r = answerDiagnostic(user.id, loadVault(), id, answer, { askedId, dontKnow });
  if (!r.ok) return { ok: false, message: r.error };
  revalidatePath(`/diagnostico/${id}`);
  if (r.done) revalidatePath("/", "layout");
  return { ok: true };
}
