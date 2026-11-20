import "server-only";
import type { DevInitial } from "@/components/DevelopmentForm";
import { revealFor } from "./desarrollo";
import { lastDevelopment } from "./progress";
import type { VaultExercise } from "./vault";

/**
 * Estado inicial del formulario de un desarrollo: sin entregas, entregado sin puntuar o puntuado. Solo con una entrega
 * hecha se renderiza la solución. En el repaso y la práctica, una entrega puntuada no cuenta: se empieza de nuevo.
 */
export async function devInitial(userId: number, nodeId: string, ex: VaultExercise, soloPendiente = false): Promise<DevInitial> {
  const last = lastDevelopment(userId, nodeId, ex.id);
  if (!last || (soloPendiente && last.gradedAt)) return { kind: "nuevo" };
  const reveal = await revealFor(ex, last.id, last.answer, last.onPaper);
  if (!reveal) return { kind: "nuevo" };
  if (!last.gradedAt) return { kind: "entregado", reveal };
  return { kind: "puntuado", reveal, score: last.score ?? 0, max: last.maxScore ?? 0, solved: (last.score ?? 0) >= 0.6 * (last.maxScore ?? 1) };
}
