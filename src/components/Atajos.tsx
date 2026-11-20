"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LISTA: [string, string][] = [
  ["?", "Mostrar u ocultar esta ayuda"],
  ["/", "Buscar en el temario"],
  ["f", "Modo concentración (en un nodo): solo el texto, sin menús"],
  ["Esc", "Salir del modo concentración o cerrar ventanas"],
  ["Alt + C", "Calculadora científica"],
  ["Alt + P", "Temporizador de estudio (Pomodoro)"],
  ["Ctrl + Z / Ctrl + Y", "Deshacer y rehacer en el lienzo de dibujo"],
];

/** ¿Se está escribiendo en un campo? (los atajos de una tecla no deben saltar). */
const escribiendo = (e: KeyboardEvent) => {
  const t = e.target as HTMLElement | null;
  return !!t && (t.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(t.tagName));
};

/**
 * Atajos de teclado globales (fase 8C) y modo concentración. El modo concentración oculta la barra de navegación y el
 * lateral del nodo (clase en <body>, ver globals.css) y se recuerda durante la sesión del navegador.
 */
export default function Atajos() {
  const [ayuda, setAyuda] = useState(false);
  const router = useRouter();
  const ruta = usePathname();

  useEffect(() => {
    const enNodo = !!ruta?.startsWith("/nodo/");
    const aplica = (on: boolean) => {
      document.body.dataset.concentracion = on && enNodo ? "true" : "";
      sessionStorage.setItem("exodus_concentracion", on ? "1" : "");
    };
    aplica(sessionStorage.getItem("exodus_concentracion") === "1");
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAyuda(false);
        if (document.body.dataset.concentracion === "true") aplica(false);
        return;
      }
      if (escribiendo(e) || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "?") {
        e.preventDefault();
        setAyuda((a) => !a);
      } else if (e.key === "/") {
        e.preventDefault();
        router.push("/buscar");
      } else if (e.key.toLowerCase() === "f" && enNodo) {
        e.preventDefault();
        aplica(document.body.dataset.concentracion !== "true");
      }
    };
    const evento = () => aplica(document.body.dataset.concentracion !== "true");
    window.addEventListener("keydown", tecla);
    window.addEventListener("exodus:concentracion", evento);
    return () => {
      window.removeEventListener("keydown", tecla);
      window.removeEventListener("exodus:concentracion", evento);
    };
  }, [ruta, router]);

  if (!ayuda) return null;
  return (
    <div className="atajos" role="dialog" aria-label="Atajos de teclado" onClick={() => setAyuda(false)}>
      <div className="atajos-caja" onClick={(e) => e.stopPropagation()}>
        <h2>Atajos de teclado</h2>
        <dl>
          {LISTA.map(([k, d]) => (
            <div key={k}>
              <dt>
                <kbd>{k}</kbd>
              </dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
        <button type="button" className="boton-secundario" onClick={() => setAyuda(false)}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

/** Botón del nodo para entrar o salir del modo concentración. */
export function BotonConcentracion() {
  return (
    <button type="button" className="boton-secundario boton-concentracion" onClick={() => window.dispatchEvent(new Event("exodus:concentracion"))} title="Modo concentración (f)">
      Concentración
    </button>
  );
}
