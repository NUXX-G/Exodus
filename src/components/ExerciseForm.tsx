"use client";

import { useActionState } from "react";
import { submitExerciseAction } from "@/app/nodo/[id]/actions";
import type { FlagFormState } from "@/app/nodo/[id]/actions";

export default function ExerciseForm({
  nodeId,
  exerciseId,
  solved,
  locked,
}: {
  nodeId: string;
  exerciseId: string;
  solved: boolean;
  locked: boolean;
}) {
  const [state, action, pending] = useActionState<FlagFormState | null, FormData>(submitExerciseAction, null);
  const id = `resp-${exerciseId}`;

  return (
    <form action={action} className="ejercicio-form">
      <input type="hidden" name="nodeId" value={nodeId} />
      <input type="hidden" name="exerciseId" value={exerciseId} />
      <label htmlFor={id} className="visualmente-oculto">
        Respuesta
      </label>
      <input
        id={id}
        name="answer"
        type="text"
        placeholder={solved ? "Resuelto. Puedes volver a comprobar." : "Tu respuesta"}
        autoComplete="off"
        spellCheck={false}
        maxLength={512}
        disabled={locked}
        required
      />
      <button type="submit" className="boton" disabled={locked || pending}>
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
