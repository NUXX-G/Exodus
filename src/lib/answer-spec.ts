import type { AnswerSpec } from "@/components/AnswerField";
import type { VaultExercise } from "./vault";

/** Lo que se manda al navegador de un ejercicio: el tipo y cómo se responde, nunca los hashes. */
export function answerSpec(nodeId: string, e: VaultExercise, variant: number | null, optionsHtml?: string[]): AnswerSpec {
  return { nodeId, exerciseId: e.id, type: e.type, unit: e.unit, sig: e.sig, vars: e.vars, multiple: e.multiple, optionsHtml, variant };
}
