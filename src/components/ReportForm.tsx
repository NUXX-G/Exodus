"use client";

import { useActionState, useState } from "react";
import { reportAction, type ReportState } from "@/app/nodo/[id]/actions";

/** Botón «creo que esto está mal»: abre un cuadro corto y manda el reporte al administrador. */
export default function ReportForm({ nodeId, exerciseId }: { nodeId: string; exerciseId: string | null }) {
  const [abierto, setAbierto] = useState(false);
  const [state, action, pending] = useActionState<ReportState | null, FormData>(reportAction, null);
  const que = exerciseId ? "este ejercicio" : "este nodo";

  if (!abierto) {
    return (
      <button type="button" className="boton-reporte" onClick={() => setAbierto(true)}>
        Creo que {que} está mal
      </button>
    );
  }
  return (
    <form action={action} className="reporte-form">
      <input type="hidden" name="nodeId" value={nodeId} />
      {exerciseId && <input type="hidden" name="exerciseId" value={exerciseId} />}
      <label>
        ¿Qué crees que está mal en {que}? (un error, algo ambiguo, una respuesta que no acepta…)
        <textarea name="message" rows={3} maxLength={2000} required disabled={state?.tone === "ok"} />
      </label>
      <div className="fila-botones">
        <button type="submit" className="boton" disabled={pending || state?.tone === "ok"}>
          {pending ? "Enviando…" : "Enviar reporte"}
        </button>
        <button type="button" className="boton-secundario" onClick={() => setAbierto(false)}>
          Cerrar
        </button>
      </div>
      {state && (
        <p className="mensaje" data-tono={state.tone} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
