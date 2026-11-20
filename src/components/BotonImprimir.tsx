"use client";

/** Abre el diálogo de impresión del navegador (también sirve para guardar en PDF). */
export default function BotonImprimir() {
  return (
    <button type="button" className="boton" onClick={() => window.print()}>
      Imprimir o guardar en PDF
    </button>
  );
}
