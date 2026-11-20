"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { answerDiagnosticAction, type DiagFormState } from "@/app/diagnostico/actions";
import AnswerField, { type AnswerSpec } from "./AnswerField";

/** Una pregunta de la prueba de nivel. No dice si has acertado: solo avanza (como un examen adaptativo). */
export default function DiagForm({ sessionId, spec }: { sessionId: number; spec: AnswerSpec }) {
  const [state, action, pending] = useActionState<DiagFormState | null, FormData>(answerDiagnosticAction, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.ok) router.refresh();
  }, [state, router]);

  return (
    <form action={action} className="ejercicio-form">
      <input type="hidden" name="sessionId" value={sessionId} />
      <input type="hidden" name="askedId" value={spec.exerciseId} />
      <AnswerField key={`${spec.exerciseId}-${spec.variant}`} spec={spec} formId={`diag-${sessionId}`} />
      <div className="fila-botones">
        <button type="submit" className="boton" disabled={pending}>
          {pending ? "…" : "Siguiente"}
        </button>
        <button type="submit" name="dontKnow" value="1" formNoValidate className="boton-secundario" disabled={pending}>
          No lo sé
        </button>
      </div>
      {state && !state.ok && (
        <p className="mensaje" data-tono="error" role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
