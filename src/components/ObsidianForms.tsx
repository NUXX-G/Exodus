"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { createManualTokenAction, revokeApiTokenAction, type TokenState } from "@/app/(cuenta)/actions";

/**
 * Descarga de la bóveda o del plugin. Es un POST normal (la respuesta es un ZIP); como puede crear una
 * conexión nueva, la lista se refresca un momento después.
 */
export function ObsidianDownloadForm() {
  const router = useRouter();
  return (
    <form
      method="post"
      action="/api/obsidian/descarga"
      className="campo cuenta-form"
      onSubmit={() => window.setTimeout(() => router.refresh(), 1500)}
    >
      <fieldset className="opciones">
        <legend>Qué descargar</legend>
        <label>
          <input type="radio" name="tipo" value="boveda" defaultChecked /> Una bóveda nueva con tu progreso y el plugin ya
          instalado (ordenador)
        </label>
        <label>
          <input type="radio" name="tipo" value="plugin" /> Solo el plugin, para añadirlo a una bóveda que ya tienes
        </label>
      </fieldset>
      <label className="casilla">
        <input type="checkbox" name="sync" defaultChecked /> Sincronizar automáticamente (crea una conexión con token)
      </label>
      <label className="casilla">
        <input type="checkbox" name="git" defaultChecked /> Incluir el plugin Git, para guardar la bóveda en tu propio
        repositorio privado de GitHub (solo bóveda nueva; la nota «Primeros pasos» explica cómo)
      </label>
      <button type="submit" className="boton">
        Descargar
      </button>
    </form>
  );
}

/** Token para configurar el plugin a mano (móvil o bóveda ya existente): se muestra una sola vez. */
export function ManualTokenForm() {
  const [state, action, pending] = useActionState<TokenState | null>(createManualTokenAction, null);
  return (
    <form action={action} className="campo cuenta-form">
      <button type="submit" className="boton boton-secundario" disabled={pending}>
        {pending ? "Creando…" : "Crear un token para conectar a mano"}
      </button>
      {state && (
        <div className="token-mostrado" role="status">
          <p>{state.message}</p>
          {state.token && (
            <dl>
              <dt>Dirección de Exodus</dt>
              <dd>
                <code>{state.servidor}</code>
              </dd>
              <dt>Token</dt>
              <dd>
                <code className="seleccionable">{state.token}</code>
              </dd>
            </dl>
          )}
        </div>
      )}
    </form>
  );
}

export function RevokeTokenButton({ id }: { id: string }) {
  return (
    <form action={revokeApiTokenAction}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="enlace-boton">
        Desconectar
      </button>
    </form>
  );
}
