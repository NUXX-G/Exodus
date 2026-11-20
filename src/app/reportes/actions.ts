"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { resolveReport, type ReportStatus } from "@/lib/progress";

const ESTADOS: ReportStatus[] = ["pendiente", "resuelto", "descartado"];

export async function resolveReportAction(form: FormData): Promise<void> {
  await requireAdmin();
  const id = Number(form.get("id"));
  const status = String(form.get("status")) as ReportStatus;
  if (!Number.isInteger(id) || !ESTADOS.includes(status)) return;
  resolveReport(id, status, String(form.get("resolution") ?? ""));
  revalidatePath("/reportes");
}
