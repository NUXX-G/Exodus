"use client";

import { useActionState } from "react";
import { createNoteAction, deleteNoteAction, updateNoteAction } from "@/app/libreta/actions";

interface NodeOption {
  id: string;
  title: string;
}

/** Formulario de nota (nueva o existente). El texto admite Markdown, LaTeX y [[enlaces]] como el resto de Exodus. */
export function NoteForm({
  note,
  nodes,
  fixedNode,
  compact = false,
}: {
  note?: { id: number; title: string; body: string; nodeId: string | null };
  nodes?: NodeOption[];
  fixedNode?: string;
  compact?: boolean;
}) {
  const [state, action, pending] = useActionState(note ? updateNoteAction : createNoteAction, null);
  return (
    <form action={action} className="campo nota-form">
      {note && <input type="hidden" name="id" value={note.id} />}
      {fixedNode && (
        <>
          <input type="hidden" name="nodeId" value={fixedNode} />
          <input type="hidden" name="quedarse" value="1" />
        </>
      )}
      <label htmlFor={`titulo-${note?.id ?? "nueva"}`}>Título</label>
      <input id={`titulo-${note?.id ?? "nueva"}`} name="title" type="text" maxLength={200} defaultValue={note?.title} required />
      <label htmlFor={`texto-${note?.id ?? "nueva"}`}>Texto (Markdown y LaTeX)</label>
      <textarea
        id={`texto-${note?.id ?? "nueva"}`}
        name="body"
        rows={compact ? 5 : 18}
        maxLength={100000}
        defaultValue={note?.body}
        placeholder="Lo que has entendido, dudas, fórmulas con $…$, enlaces a nodos con [[id-del-nodo]]…"
      />
      {!fixedNode && nodes && (
        <>
          <label htmlFor={`nodo-${note?.id ?? "nueva"}`}>Nodo relacionado (opcional)</label>
          <select id={`nodo-${note?.id ?? "nueva"}`} name="nodeId" defaultValue={note?.nodeId ?? ""}>
            <option value="">Ninguno</option>
            {nodes.map((n) => (
              <option key={n.id} value={n.id}>
                {n.title}
              </option>
            ))}
          </select>
        </>
      )}
      <button type="submit" className="boton" disabled={pending}>
        {pending ? "Guardando…" : note ? "Guardar cambios" : "Guardar nota"}
      </button>
      {state && (
        <p className="mensaje" data-tono={state.ok ? "ok" : "error"} role={state.ok ? "status" : "alert"}>
          {state.message}
        </p>
      )}
    </form>
  );
}

export function DeleteNoteButton({ id }: { id: number }) {
  return (
    <form
      action={deleteNoteAction}
      onSubmit={(e) => {
        if (!window.confirm("¿Borrar esta nota? No se puede deshacer.")) e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="enlace-boton peligro">
        Borrar nota
      </button>
    </form>
  );
}
