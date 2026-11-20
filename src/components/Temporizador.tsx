"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { logStudyTimeAction } from "@/app/objetivos/actions";

const MODOS = {
  "25/5": { estudio: 25, pausa: 5 },
  "50/10": { estudio: 50, pausa: 10 },
} as const;
type Modo = keyof typeof MODOS;

interface Estado {
  modo: Modo;
  fase: "estudio" | "pausa";
  /** Fin de la fase en curso (ms) si está en marcha; null si está parado. */
  fin: number | null;
  /** Lo que quedaba al pausar (ms). */
  resto: number;
  /** Nodo en el que se empezó el bloque de estudio (para anotar el tiempo). */
  nodo: string | null;
  bloques: number;
}

const mmss = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

/** Pitido corto (Web Audio, sin archivos). */
function pita() {
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.value = 660;
    g.gain.setValueAtTime(0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.6);
  } catch {
    /* sin audio */
  }
}

/**
 * Temporizador Pomodoro flotante (fase 8C): bloques de estudio y pausas. Al terminar un bloque de estudio empezado en un
 * nodo, anota esos minutos en ese nodo (heatmap y ritmo de los objetivos). Sigue contando al cambiar de página (el
 * estado vive en localStorage). Alt+P lo abre o lo cierra.
 */
export default function Temporizador() {
  const ruta = usePathname();
  const [abierto, setAbierto] = useState(false);
  const [e, setE] = useState<Estado>({ modo: "25/5", fase: "estudio", fin: null, resto: 25 * 60_000, nodo: null, bloques: 0 });
  const [ahora, setAhora] = useState(0);
  const [aviso, setAviso] = useState("");
  const cargado = useRef(false);

  const nodoActual = ruta?.startsWith("/nodo/") ? decodeURIComponent(ruta.slice(6).split("/")[0]) : null;

  useEffect(() => {
    try {
      const g = JSON.parse(localStorage.getItem("exodus_pomodoro") ?? "null");
      if (g && MODOS[g.modo as Modo]) setE(g);
    } catch {
      /* estado corrupto: se ignora */
    }
    cargado.current = true;
    setAhora(Date.now());
    const t = setInterval(() => setAhora(Date.now()), 1000);
    const atajo = (ev: KeyboardEvent) => {
      if (ev.altKey && ev.key.toLowerCase() === "p") {
        ev.preventDefault();
        setAbierto((a) => !a);
      }
    };
    window.addEventListener("keydown", atajo);
    return () => {
      clearInterval(t);
      window.removeEventListener("keydown", atajo);
    };
  }, []);

  useEffect(() => {
    if (cargado.current) localStorage.setItem("exodus_pomodoro", JSON.stringify(e));
  }, [e]);

  const restante = e.fin !== null ? e.fin - ahora : e.resto;

  // Fin de una fase: se anota el bloque de estudio y se pasa a la siguiente fase (parada, para no encadenar sin querer).
  useEffect(() => {
    if (e.fin === null || ahora === 0 || restante > 0) return;
    pita();
    const conf = MODOS[e.modo];
    if (e.fase === "estudio") {
      if (e.nodo) {
        const f = new FormData();
        f.set("nodeId", e.nodo);
        f.set("minutes", String(conf.estudio));
        f.set("source", "temporizador");
        logStudyTimeAction(null, f).then((r) => setAviso(r.ok ? `Bloque terminado: ${conf.estudio} min anotados. ¡Pausa!` : "Bloque terminado. ¡Pausa!"));
      } else setAviso("Bloque terminado. ¡Pausa!");
      setE({ ...e, fase: "pausa", fin: null, resto: conf.pausa * 60_000, bloques: e.bloques + 1 });
    } else {
      setAviso("Pausa terminada. ¿Otro bloque?");
      setE({ ...e, fase: "estudio", fin: null, resto: conf.estudio * 60_000 });
    }
    setAbierto(true);
  }, [restante, e, ahora]);

  useEffect(() => {
    if (e.fin !== null) document.title = `${mmss(restante)} · ${e.fase === "estudio" ? "estudio" : "pausa"} | Exodus`;
  }, [restante, e.fin, e.fase]);

  const arranca = () => {
    setAviso("");
    setE({ ...e, fin: Date.now() + e.resto, nodo: e.fase === "estudio" ? (e.nodo ?? nodoActual) : e.nodo });
  };
  const pausa = () => setE({ ...e, fin: null, resto: Math.max(0, restante) });
  const reinicia = (modo: Modo = e.modo) => {
    setAviso("");
    setE({ modo, fase: "estudio", fin: null, resto: MODOS[modo].estudio * 60_000, nodo: null, bloques: e.bloques });
  };

  if (!abierto) {
    return (
      <button type="button" className="pomo-boton" data-activo={e.fin !== null ? "true" : undefined} onClick={() => setAbierto(true)} title="Temporizador de estudio (Alt+P)" aria-label="Abrir el temporizador">
        {e.fin !== null ? mmss(restante) : "⏱"}
      </button>
    );
  }
  return (
    <div className="pomo" role="dialog" aria-label="Temporizador de estudio">
      <div className="calc-cabecera">
        <strong>{e.fase === "estudio" ? "Estudio" : "Pausa"}</strong>
        <select value={e.modo} onChange={(ev) => reinicia(ev.target.value as Modo)} aria-label="Duración de los bloques" disabled={e.fin !== null}>
          {Object.keys(MODOS).map((m) => (
            <option key={m} value={m}>
              {m} min
            </option>
          ))}
        </select>
        <button type="button" className="calc-cerrar" onClick={() => setAbierto(false)} aria-label="Cerrar el temporizador">
          ×
        </button>
      </div>
      <div className="pomo-reloj" role="timer">{mmss(restante)}</div>
      <div className="fila-botones">
        {e.fin === null ? (
          <button type="button" className="boton" onClick={arranca}>
            {e.resto < MODOS[e.modo][e.fase] * 60_000 ? "Seguir" : e.fase === "estudio" ? "Empezar a estudiar" : "Empezar la pausa"}
          </button>
        ) : (
          <button type="button" className="boton-secundario" onClick={pausa}>
            Pausar
          </button>
        )}
        <button type="button" className="boton-secundario" onClick={() => reinicia()}>
          Reiniciar
        </button>
      </div>
      <p className="nota">
        {e.fase === "estudio" && (e.nodo ?? nodoActual) ? "El tiempo se anotará en este nodo. " : e.fase === "estudio" ? "Ábrelo en un nodo para que el tiempo se anote. " : "Levántate, bebe agua, mira lejos. "}
        Bloques terminados: {e.bloques}.
      </p>
      {aviso && <p className="mensaje" data-tono="ok">{aviso}</p>}
    </div>
  );
}
