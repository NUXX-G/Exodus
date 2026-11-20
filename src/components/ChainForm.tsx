"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { chainStepAction, type ChainState } from "@/app/examen/actions";
import AnswerField, { type AnswerSpec } from "./AnswerField";

/** Paso actual de un reto encadenado: hasta acertarlo, el siguiente sigue cerrado. */
export default function ChainForm({ attemptId, spec }: { attemptId: number; spec: AnswerSpec }) {
  const [state, action, pending] = useActionState<ChainState | null, FormData>(chainStepAction, null);
  const router = useRouter();
  useEffect(() => {
    if (state?.tone === "ok") {
      const t = setTimeout(() => router.refresh(), 900);
      return () => clearTimeout(t);
    }
  }, [state, router]);
  return (
    <form action={action} className="ejercicio-form">
      <input type="hidden" name="attemptId" value={attemptId} />
      <AnswerField key={spec.exerciseId} spec={spec} formId={`reto-${attemptId}`} />
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
