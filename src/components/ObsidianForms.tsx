"use client";

import { useRouter } from "next/navigation";
import { revokeApiTokenAction } from "@/app/(cuenta)/actions";

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
          instalado
        </label>
        <label>
          <input type="radio" name="tipo" value="plugin" /> Solo el plugin, para añadirlo a una bóveda que ya tienes
        </label>
      </fieldset>
      <label className="casilla">
        <input type="checkbox" name="sync" defaultChecked /> Sincronizar automáticamente (crea una conexión con token)
      </label>
      <button type="submit" className="boton">
        Descargar
      </button>
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
