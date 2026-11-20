"use client";

import { useActionState } from "react";
import { logStudyTimeAction, type TimeState } from "@/app/objetivos/actions";

/** Registro manual (opcional) del tiempo dedicado a un nodo: alimenta el heatmap y el ritmo de los objetivos. */
export default function StudyTimeForm({ nodeId }: { nodeId: string }) {
  const [state, action, pending] = useActionState<TimeState | null, FormData>(logStudyTimeAction, null);
  return (
    <form action={action} className="tiempo-form">
      <input type="hidden" name="nodeId" value={nodeId} />
      <label>
        Minutos <input type="number" name="minutes" min={1} max={720} required placeholder="45" />
      </label>
      <button type="submit" className="boton-secundario" disabled={pending}>
        Anotar
      </button>
      {state && (
        <p className="mensaje" data-tono={state.ok ? "ok" : "error"} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
