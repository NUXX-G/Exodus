"use client";

import { useActionState } from "react";
import { loginAction, setupAction } from "@/app/(cuenta)/actions";

/** Formulario de acceso (`entrar`) o de creación de la cuenta de la instancia (`configurar`). */
export default function AccountForm({ mode, minLength }: { mode: "entrar" | "configurar"; minLength: number }) {
  const setup = mode === "configurar";
  const [state, action, pending] = useActionState(setup ? setupAction : loginAction, null);

  return (
    <form action={action} className="campo cuenta-form">
      <label htmlFor="username">Usuario</label>
      <input id="username" name="username" type="text" autoComplete="username" autoCapitalize="none" spellCheck={false} required />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete={setup ? "new-password" : "current-password"}
        minLength={setup ? minLength : undefined}
        required
      />

      {setup && (
        <>
          <label htmlFor="repeat">Repite la contraseña</label>
          <input id="repeat" name="repeat" type="password" autoComplete="new-password" minLength={minLength} required />
        </>
      )}

      <button type="submit" className="boton" disabled={pending}>
        {setup ? (pending ? "Creando cuenta…" : "Crear cuenta") : pending ? "Entrando…" : "Entrar"}
      </button>
      {state && (
        <p className="mensaje" data-tono="error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
