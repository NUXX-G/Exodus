"use client";

import { useActionState } from "react";
import { tagErrorAction, type TagState } from "@/app/errores/actions";
import { ERROR_HELP, ERROR_LABEL, ERROR_TAGS } from "@/lib/errores-etiquetas";

/** Tras un fallo: «¿qué ha pasado?». Alimenta el diario de errores (/errores) y la prioridad del repaso. */
export default function ErrorTagger({ attemptId }: { attemptId: number }) {
  const [state, action, pending] = useActionState<TagState | null, FormData>(tagErrorAction, null);
  if (state?.ok) {
    return (
      <p className="mensaje etiqueta-hecha" data-tono="ok" role="status">
        {state.message}
      </p>
    );
  }
  return (
    <form action={action} className="etiquetar-error">
      <input type="hidden" name="attemptId" value={attemptId} />
      <fieldset>
        <legend>¿Qué ha pasado? (para tu diario de errores)</legend>
        <div className="etiquetas">
          {ERROR_TAGS.map((t) => (
            <label key={t} title={ERROR_HELP[t]}>
              <input type="radio" name="tag" value={t} required />
              <span>{ERROR_LABEL[t]}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <input type="text" name="note" maxLength={1000} placeholder="Nota opcional: qué se te escapó, qué harás distinto" />
      <button type="submit" className="boton-secundario" disabled={pending}>
        {pending ? "Guardando…" : "Anotar"}
      </button>
      {state && !state.ok && (
        <p className="mensaje" data-tono="error" role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
