"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteDrawingAction } from "@/app/libreta/actions";
import type { Trazo } from "@/lib/dibujo";
import Lienzo from "./Lienzo";

export interface DibujoVista {
  id: number;
  /** SVG generado en el servidor a partir de los trazos (solo números y colores de la paleta). */
  svg: string;
  trazos: Trazo[];
}

/** Dibujos de una nota: verlos, editarlos, borrarlos y añadir uno nuevo. */
export default function DibujosNota({ noteId, dibujos }: { noteId: number; dibujos: DibujoVista[] }) {
  const [editando, setEditando] = useState<number | "nuevo" | null>(null);
  const router = useRouter();
  const alGuardar = () => router.refresh();

  return (
    <section className="dibujos-nota" aria-label="Dibujos">
      <h2>Dibujos</h2>
      {dibujos.length === 0 && editando === null && <p className="nota">Aún no hay dibujos. Escribe a mano, haz esquemas o diagramas: se exportan a Obsidian.</p>}
      {dibujos.map((d) =>
        editando === d.id ? (
          <div key={d.id}>
            <Lienzo noteId={noteId} drawingId={d.id} inicial={d.trazos} onGuardado={alGuardar} />
            <button type="button" className="boton-secundario" onClick={() => setEditando(null)}>
              Cerrar el editor
            </button>
          </div>
        ) : (
          <figure key={d.id} className="dibujo">
            <div dangerouslySetInnerHTML={{ __html: d.svg }} />
            <figcaption className="fila-botones">
              <button type="button" className="boton-secundario" onClick={() => setEditando(d.id)}>
                Editar
              </button>
              <form action={deleteDrawingAction}>
                <input type="hidden" name="drawingId" value={d.id} />
                <input type="hidden" name="noteId" value={noteId} />
                <button type="submit" className="boton-reporte">
                  borrar
                </button>
              </form>
            </figcaption>
          </figure>
        ),
      )}
      {editando === "nuevo" ? (
        <div>
          <Lienzo
            noteId={noteId}
            drawingId={null}
            inicial={[]}
            onGuardado={() => {
              setEditando(null);
              alGuardar();
            }}
          />
          <button type="button" className="boton-secundario" onClick={() => setEditando(null)}>
            Cerrar sin guardar
          </button>
        </div>
      ) : (
        <button type="button" className="boton" onClick={() => setEditando("nuevo")}>
          + Añadir dibujo
        </button>
      )}
    </section>
  );
}
