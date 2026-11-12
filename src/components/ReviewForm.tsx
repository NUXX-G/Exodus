"use client";

import { useActionState } from "react";
import { submitReviewAction, type ReviewState } from "@/app/repaso/actions";

export default function ReviewForm({ nodeId, exerciseId }: { nodeId: string; exerciseId: string }) {
  const [state, action, pending] = useActionState<ReviewState | null, FormData>(submitReviewAction, null);
  const id = `rep-${nodeId}-${exerciseId}`;

  return (
    <form action={action} className="ejercicio-form">
      <input type="hidden" name="nodeId" value={nodeId} />
      <input type="hidden" name="exerciseId" value={exerciseId} />
      <label htmlFor={id} className="visualmente-oculto">
        Respuesta
      </label>
      <input id={id} name="answer" type="text" placeholder="Sin apuntes" autoComplete="off" spellCheck={false} maxLength={512} required />
      <button type="submit" className="boton" disabled={pending}>
        {pending ? "Comprobando…" : "Comprobar"}
      </button>
      {state && (
        <p className="mensaje" data-tono={state.tone} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
