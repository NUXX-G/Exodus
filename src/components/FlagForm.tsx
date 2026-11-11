"use client";

import { useActionState } from "react";
import { submitFlagAction, type FlagFormState } from "@/app/nodo/[id]/actions";

export default function FlagForm({ nodeId, locked }: { nodeId: string; locked: boolean }) {
  const [state, action, pending] = useActionState<FlagFormState | null, FormData>(submitFlagAction, null);

  return (
    <form action={action} className="campo">
      <input type="hidden" name="nodeId" value={nodeId} />
      <label htmlFor="flag">Flag del reto</label>
      <input
        id="flag"
        name="flag"
        type="text"
        placeholder="EXODUS{...}"
        autoComplete="off"
        spellCheck={false}
        maxLength={512}
        disabled={locked}
        required
      />
      <button type="submit" className="boton" disabled={locked || pending}>
        {pending ? "Validando…" : "Validar flag"}
      </button>
      {locked && <p className="mensaje">Podrás validar la flag cuando completes los prerequisitos.</p>}
      {state && (
        <p className="mensaje" data-tono={state.tone} role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
