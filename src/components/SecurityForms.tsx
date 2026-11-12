"use client";

import { useActionState } from "react";
import { changePasswordAction, closeSessionsAction } from "@/app/(cuenta)/actions";

/** Cambio de contraseña: pide la actual y la nueva dos veces. */
export function PasswordForm({ minLength, username }: { minLength: number; username: string }) {
  const [state, action, pending] = useActionState(changePasswordAction, null);
  return (
    <form action={action} className="campo cuenta-form">
      {/* Para los gestores de contraseñas: asocian la clave nueva a este usuario. */}
      <input type="text" name="username" autoComplete="username" value={username} readOnly hidden />
      <label htmlFor="current">Contraseña actual</label>
      <input id="current" name="current" type="password" autoComplete="current-password" required />
      <label htmlFor="next">Contraseña nueva</label>
      <input id="next" name="next" type="password" autoComplete="new-password" minLength={minLength} maxLength={256} required />
      <label htmlFor="repeat">Repite la contraseña nueva</label>
      <input id="repeat" name="repeat" type="password" autoComplete="new-password" minLength={minLength} maxLength={256} required />
      <button type="submit" className="boton" disabled={pending}>
        {pending ? "Cambiando…" : "Cambiar contraseña"}
      </button>
      {state && (
        <p className="mensaje" data-tono={state.ok ? "ok" : "error"} role={state.ok ? "status" : "alert"}>
          {state.message}
        </p>
      )}
    </form>
  );
}

/** Cierra todas las sesiones abiertas salvo la de este navegador. */
export function SessionsForm({ others }: { others: number }) {
  const [state, action, pending] = useActionState(closeSessionsAction, null);
  return (
    <form action={action} className="cuenta-form">
      <button type="submit" className="boton-secundario" disabled={pending || others === 0}>
        {pending ? "Cerrando…" : "Cerrar las demás sesiones"}
      </button>
      {state && (
        <p className="mensaje" data-tono="ok" role="status">
          {state.message}
        </p>
      )}
    </form>
  );
}
