"use client";

import { useActionState } from "react";
import { loginAction, registerAction, setupAction } from "@/app/(cuenta)/actions";

type Mode = "entrar" | "configurar" | "registro";

const ACTIONS = { entrar: loginAction, configurar: setupAction, registro: registerAction };
const BUTTON = {
  entrar: ["Entrar", "Entrando…"],
  configurar: ["Crear cuenta", "Creando cuenta…"],
  registro: ["Crear cuenta", "Creando cuenta…"],
};

/**
 * Formulario de acceso (`entrar`), de creación de la cuenta de la instancia (`configurar`, con el código
 * del registro del servidor) o de una cuenta invitada (`registro`, con el código de invitación).
 */
export default function AccountForm({ mode, minLength, defaultCode }: { mode: Mode; minLength: number; defaultCode?: string }) {
  const nueva = mode !== "entrar";
  const [state, action, pending] = useActionState(ACTIONS[mode], null);

  return (
    <form action={action} className="campo cuenta-form">
      {nueva && (
        <>
          <label htmlFor="code">{mode === "configurar" ? "Código de configuración" : "Código de invitación"}</label>
          <input
            id="code"
            name="code"
            type="text"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            defaultValue={defaultCode}
            required
          />
        </>
      )}

      <label htmlFor="username">Usuario</label>
      <input id="username" name="username" type="text" autoComplete="username" autoCapitalize="none" spellCheck={false} required />

      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete={nueva ? "new-password" : "current-password"}
        minLength={nueva ? minLength : undefined}
        required
      />

      {nueva && (
        <>
          <label htmlFor="repeat">Repite la contraseña</label>
          <input id="repeat" name="repeat" type="password" autoComplete="new-password" minLength={minLength} required />
        </>
      )}

      <button type="submit" className="boton" disabled={pending}>
        {BUTTON[mode][pending ? 1 : 0]}
      </button>
      {state && (
        <p className="mensaje" data-tono="error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
}
