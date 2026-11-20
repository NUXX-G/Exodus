"use client";

import { useActionState } from "react";
import { submitPracticeAction, submitReviewAction, type ReviewState } from "@/app/repaso/actions";
import AnswerField, { marcarTiempo, type AnswerSpec } from "./AnswerField";
import ErrorTagger from "./ErrorTagger";

/**
 * `exerciseId` es el ejercicio programado; `spec.exerciseId`, la pregunta que se hace hoy (puede ser otra).
 * En la práctica intercalada (`practica`) no hay ejercicio programado.
 */
export default function ReviewForm({ exerciseId, spec, practica = false }: { exerciseId: string; spec: AnswerSpec; practica?: boolean }) {
  const [state, action, pending] = useActionState<ReviewState | null, FormData>(practica ? submitPracticeAction : submitReviewAction, null);
  const formId = `rep-${spec.nodeId}-${exerciseId}`;

  return (
    <>
      <form action={action} className="ejercicio-form" data-tipo={spec.type} onSubmit={(e) => marcarTiempo(e.currentTarget)}>
        <input type="hidden" name="nodeId" value={spec.nodeId} />
        <input type="hidden" name="exerciseId" value={exerciseId} />
        <input type="hidden" name="askedId" value={spec.exerciseId} />
        <AnswerField spec={spec} formId={formId} disabled={state?.done} placeholder={spec.type === "texto" ? "Sin apuntes" : undefined} />
        <button type="submit" className="boton" disabled={pending || state?.done}>
          {pending ? "Comprobando…" : "Comprobar"}
        </button>
        {state && (
          <p className="mensaje" data-tono={state.tone} role="status">
            {state.message}
          </p>
        )}
      </form>
      {/* Fuera del formulario del ejercicio: los formularios no se pueden anidar. */}
      {state?.attemptId && <ErrorTagger key={state.attemptId} attemptId={state.attemptId} />}
    </>
  );
}
