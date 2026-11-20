import "server-only";
import { linkResolverFor, renderMarkdown } from "./markdown";
import { sealedOf } from "./progress";
import { loadVault, type VaultExercise } from "./vault";

/** Lo que ve el alumno después de entregar: su respuesta, la solución modelo y la rúbrica (todo ya en HTML). */
export interface DevReveal {
  submissionId: number;
  answerHtml: string | null;
  solutionHtml: string;
  rubric: { criterioHtml: string; puntos: number }[];
}

/** Solo se llama con una entrega hecha: nunca antes de entregar se renderiza ni se envía la solución. */
export async function revealFor(ex: VaultExercise, submissionId: number, answer: string, onPaper: boolean): Promise<DevReveal | null> {
  const sellado = sealedOf(ex);
  if (!sellado) return null;
  const resolve = linkResolverFor(loadVault());
  const [solutionHtml, answerHtml, ...criterios] = await Promise.all([
    renderMarkdown(sellado.solution, resolve),
    onPaper ? Promise.resolve(null) : renderMarkdown(answer, resolve, "usuario"),
    ...sellado.rubric.map((r) => renderMarkdown(r.criterio, resolve)),
  ]);
  return { submissionId, answerHtml, solutionHtml, rubric: sellado.rubric.map((r, i) => ({ criterioHtml: criterios[i], puntos: r.puntos })) };
}
