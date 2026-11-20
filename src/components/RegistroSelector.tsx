"use client";

import { useState } from "react";

export type Registro = "todo" | "practico" | "formal";

const OPCIONES: { valor: Registro; texto: string; ayuda: string }[] = [
  { valor: "todo", texto: "Todo", ayuda: "Primero la explicación práctica y después la formal (la escalera completa)." },
  { valor: "practico", texto: "Práctico", ayuda: "Solo la intuición y los ejemplos de la vida real, sin tecnicismos." },
  { valor: "formal", texto: "Formal", ayuda: "Solo las definiciones, teoremas y demostraciones." },
];

/**
 * Elige qué registro de la explicación se ve en los nodos. La preferencia se guarda en una cookie (vale para todos los
 * nodos y la lee el servidor, así que la página ya llega bien pintada) y se aplica al momento con `data-registro`.
 */
export default function RegistroSelector({ inicial }: { inicial: Registro }) {
  const [registro, setRegistro] = useState<Registro>(inicial);
  const elegir = (r: Registro) => {
    setRegistro(r);
    document.cookie = `exodus_registro=${r}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
    document.querySelectorAll<HTMLElement>("[data-registro]").forEach((el) => (el.dataset.registro = r));
  };
  return (
    <div className="registro-selector" role="radiogroup" aria-label="Nivel de la explicación">
      <span className="nota">Explicación:</span>
      {OPCIONES.map((o) => (
        <button key={o.valor} type="button" role="radio" aria-checked={registro === o.valor} title={o.ayuda} onClick={() => elegir(o.valor)}>
          {o.texto}
        </button>
      ))}
    </div>
  );
}
