"use client";

import { useActionState, useState } from "react";
import { inviteAction, revokeInviteAction } from "@/app/(cuenta)/actions";

/** Genera una invitación y la muestra una sola vez, con el enlace listo para copiar. */
export function InviteForm({ days, maxNote }: { days: readonly number[]; maxNote: number }) {
  const [state, action, pending] = useActionState(inviteAction, null);
  return (
    <>
      <form action={action} className="campo cuenta-form">
        <label htmlFor="note">Para quién (opcional, solo lo ves tú)</label>
        <input id="note" name="note" type="text" maxLength={maxNote} autoComplete="off" />
        <label htmlFor="days">Caduca en</label>
        <select id="days" name="days" defaultValue={String(days[days.length - 1])}>
          {days.map((d) => (
            <option key={d} value={d}>
              {d === 1 ? "1 día" : `${d} días`}
            </option>
          ))}
        </select>
        <button type="submit" className="boton" disabled={pending}>
          {pending ? "Generando…" : "Generar invitación"}
        </button>
        {state && (
          <p className="mensaje" data-tono={state.ok ? "ok" : "error"} role={state.ok ? "status" : "alert"}>
            {state.message}
          </p>
        )}
      </form>
      {state?.code && state.link && (
        <div className="invitacion-nueva">
          <Copiable etiqueta="Código" valor={state.code} />
          <Copiable etiqueta="Enlace (lleva el código ya puesto)" valor={state.link} />
        </div>
      )}
    </>
  );
}

function Copiable({ etiqueta, valor }: { etiqueta: string; valor: string }) {
  const [copiado, setCopiado] = useState(false);
  return (
    <div className="copiable">
      <span>{etiqueta}</span>
      <div>
        <input type="text" readOnly value={valor} onFocus={(e) => e.currentTarget.select()} aria-label={etiqueta} />
        <button
          type="button"
          className="boton boton-secundario"
          onClick={async () => {
            // El portapapeles solo existe en contextos seguros (HTTPS o localhost); si no, basta con seleccionar.
            try {
              await navigator.clipboard.writeText(valor);
              setCopiado(true);
            } catch {
              setCopiado(false);
            }
          }}
        >
          {copiado ? "Copiado" : "Copiar"}
        </button>
      </div>
    </div>
  );
}

/** Botón de anular una invitación pendiente. */
export function RevokeButton({ id }: { id: string }) {
  return (
    <form action={revokeInviteAction}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="enlace-boton">
        Anular
      </button>
    </form>
  );
}
