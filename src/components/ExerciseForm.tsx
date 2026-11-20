"use client";

import { useActionState } from "react";
import { submitExerciseAction } from "@/app/nodo/[id]/actions";
import type { FlagFormState } from "@/app/nodo/[id]/actions";
import AnswerField, { marcarTiempo, type AnswerSpec } from "./AnswerField";

export default function ExerciseForm({ spec, solved, locked }: { spec: AnswerSpec; solved: boolean; locked: boolean }) {
  const [state, action, pending] = useActionState<FlagFormState | null, FormData>(submitExerciseAction, null);
  const formId = `ej-${spec.exerciseId}`;

  return (
    <form action={action} className="ejercicio-form" data-tipo={spec.type} onSubmit={(e) => marcarTiempo(e.currentTarget)}>
      <input type="hidden" name="nodeId" value={spec.nodeId} />
      <input type="hidden" name="exerciseId" value={spec.exerciseId} />
      <AnswerField
        spec={spec}
        formId={formId}
        disabled={locked}
        placeholder={solved && spec.type === "texto" ? "Resuelto. Puedes volver a comprobar." : undefined}
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
