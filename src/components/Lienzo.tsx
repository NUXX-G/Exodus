"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { saveDrawingAction } from "@/app/libreta/actions";
import { caminoDe, LIENZO, PALETA, PAPEL, type Trazo } from "@/lib/dibujo";

const NOMBRES_COLOR = ["negro", "azul", "rojo", "verde", "naranja", "morado"];
const GROSORES = [2, 4, 8, 16];

/**
 * Lienzo para escribir y dibujar a mano en la Libreta (ratón, dedo o lápiz con presión). Trazos vectoriales: se guardan
 * como números y el servidor genera el SVG. Herramientas: lápiz, borrador de trazos, colores, grosor, deshacer y
 * rehacer, cuadrícula y borrar todo.
 */
export default function Lienzo({ noteId, drawingId, inicial, onGuardado }: { noteId: number; drawingId: number | null; inicial: Trazo[]; onGuardado?: (id: number) => void }) {
  const svg = useRef<SVGSVGElement>(null);
  const [trazos, setTrazos] = useState<Trazo[]>(inicial);
  const [deshechos, setDeshechos] = useState<Trazo[][]>([]);
  const [historia, setHistoria] = useState<Trazo[][]>([]);
  const [actual, setActual] = useState<Trazo | null>(null);
  const [color, setColor] = useState<(typeof PALETA)[number]>(PALETA[0]);
  const [grosor, setGrosor] = useState(4);
  const [herramienta, setHerramienta] = useState<"lapiz" | "borrador">("lapiz");
  const [cuadricula, setCuadricula] = useState(true);
  const [estado, setEstado] = useState<"" | "guardando" | "guardado" | "error">("");
  const [id, setId] = useState<number | null>(drawingId);
  const cambiado = useRef(false);
  // Los eventos del puntero llegan más deprisa de lo que React repinta: el trazo en curso y la lista de trazos se
  // llevan también en refs para no leer un estado viejo (si no, un trazo rápido se queda en un punto).
  const actualRef = useRef<Trazo | null>(null);
  const trazosRef = useRef<Trazo[]>(inicial);

  /** Coordenadas del puntero en el sistema lógico del lienzo. */
  const aLienzo = (e: { clientX: number; clientY: number; pressure: number; pointerType: string }): [number, number, number] => {
    const r = svg.current!.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * LIENZO.ancho;
    const y = ((e.clientY - r.top) / r.height) * LIENZO.alto;
    // Ratón y dedo sin presión: 0,5 (grosor nominal).
    const p = e.pointerType === "pen" && e.pressure > 0 ? e.pressure : 0.5;
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10, Math.round(p * 100) / 100];
  };

  const cambia = (nuevo: Trazo[]) => {
    const previo = trazosRef.current;
    setHistoria((h) => [...h.slice(-99), previo]);
    setDeshechos([]);
    trazosRef.current = nuevo;
    setTrazos(nuevo);
    cambiado.current = true;
  };

  /** Borrador: quita los trazos que tienen algún punto cerca del puntero. */
  const borraCerca = (x: number, y: number) => {
    const radio = 12 + grosor * 2;
    const ahora = trazosRef.current;
    const quedan = ahora.filter((t) => !t.puntos.some(([px, py]) => (px - x) ** 2 + (py - y) ** 2 < radio * radio));
    if (quedan.length !== ahora.length) cambia(quedan);
  };

  /**
   * Al apoyar el puntero se siguen sus movimientos con escuchas en `window` hasta que se levanta: no depende de la
   * captura del puntero (que el navegador puede perder al repintar) y el trazo sigue aunque se salga del borde.
   */
  const abajo = (e: React.PointerEvent) => {
    e.preventDefault();
    const p = aLienzo(e);
    if (herramienta === "borrador") borraCerca(p[0], p[1]);
    else {
      actualRef.current = { color, grosor, puntos: [p] };
      setActual(actualRef.current);
    }
    const id = e.pointerId;
    const mover = (ev: PointerEvent) => {
      if (ev.pointerId === id) mueve(ev);
    };
    const soltar = (ev: PointerEvent) => {
      if (ev.pointerId !== id) return;
      window.removeEventListener("pointermove", mover);
      window.removeEventListener("pointerup", soltar);
      window.removeEventListener("pointercancel", soltar);
      arriba();
    };
    window.addEventListener("pointermove", mover);
    window.addEventListener("pointerup", soltar);
    window.addEventListener("pointercancel", soltar);
  };
  const mueve = (nativo: PointerEvent) => {
    const p = aLienzo(nativo);
    if (herramienta === "borrador") return borraCerca(p[0], p[1]);
    const a = actualRef.current;
    if (!a) return;
    // El navegador junta en un solo evento los movimientos de un mismo fotograma: se recuperan todos para que un trazo
    // rápido (o un lápiz de tableta) no salga a tramos rectos.
    const eventos = typeof nativo.getCoalescedEvents === "function" ? nativo.getCoalescedEvents() : [];
    const puntos = [...a.puntos];
    for (const ev of eventos.length ? eventos : [nativo]) {
      const q = aLienzo(ev);
      const u = puntos[puntos.length - 1];
      // Descarta puntos casi iguales: menos datos y trazo más limpio.
      if ((u[0] - q[0]) ** 2 + (u[1] - q[1]) ** 2 >= 2.5) puntos.push(q);
    }
    if (puntos.length === a.puntos.length) return;
    actualRef.current = { ...a, puntos };
    setActual(actualRef.current);
  };
  const arriba = () => {
    const a = actualRef.current;
    actualRef.current = null;
    if (a) cambia([...trazosRef.current, a]);
    setActual(null);
  };

  const deshacer = () => {
    if (!historia.length) return;
    setDeshechos((d) => [...d, trazosRef.current]);
    trazosRef.current = historia[historia.length - 1];
    setTrazos(trazosRef.current);
    setHistoria((h) => h.slice(0, -1));
    cambiado.current = true;
  };
  const rehacer = () => {
    if (!deshechos.length) return;
    setHistoria((h) => [...h, trazosRef.current]);
    trazosRef.current = deshechos[deshechos.length - 1];
    setTrazos(trazosRef.current);
    setDeshechos((d) => d.slice(0, -1));
    cambiado.current = true;
  };

  const guardar = useCallback(async () => {
    setEstado("guardando");
    const r = await saveDrawingAction(noteId, id, JSON.stringify(trazosRef.current));
    if (r.ok) {
      setId(r.id);
      setEstado("guardado");
      cambiado.current = false;
      onGuardado?.(r.id);
    } else setEstado("error");
  }, [noteId, id, trazos, onGuardado]);

  // Atajos: Ctrl+Z / Ctrl+Y (o Ctrl+Mayús+Z).
  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      if (e.key.toLowerCase() === "z" && !e.shiftKey) {
        e.preventDefault();
        deshacer();
      } else if (e.key.toLowerCase() === "y" || (e.key.toLowerCase() === "z" && e.shiftKey)) {
        e.preventDefault();
        rehacer();
      }
    };
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  });

  // Aviso al salir con cambios sin guardar.
  useEffect(() => {
    const salir = (e: BeforeUnloadEvent) => {
      if (cambiado.current) e.preventDefault();
    };
    window.addEventListener("beforeunload", salir);
    return () => window.removeEventListener("beforeunload", salir);
  }, []);

  return (
    <div className="lienzo">
      <div className="lienzo-barra" role="toolbar" aria-label="Herramientas de dibujo">
        <button type="button" aria-pressed={herramienta === "lapiz"} onClick={() => setHerramienta("lapiz")}>
          ✏️ Lápiz
        </button>
        <button type="button" aria-pressed={herramienta === "borrador"} onClick={() => setHerramienta("borrador")}>
          🧽 Borrador
        </button>
        <span className="separador" />
        {PALETA.map((c, i) => (
          <button
            key={c}
            type="button"
            className="color"
            aria-label={`Color ${NOMBRES_COLOR[i]}`}
            aria-pressed={color === c && herramienta === "lapiz"}
            style={{ background: c }}
            onClick={() => {
              setColor(c);
              setHerramienta("lapiz");
            }}
          />
        ))}
        <span className="separador" />
        {GROSORES.map((g) => (
          <button key={g} type="button" aria-label={`Grosor ${g}`} aria-pressed={grosor === g} onClick={() => setGrosor(g)}>
            <i className="punto-grosor" style={{ width: g + 4, height: g + 4 }} />
          </button>
        ))}
        <span className="separador" />
        <button type="button" onClick={deshacer} disabled={!historia.length} title="Ctrl+Z">
          ↶ Deshacer
        </button>
        <button type="button" onClick={rehacer} disabled={!deshechos.length} title="Ctrl+Y">
          ↷ Rehacer
        </button>
        <button type="button" aria-pressed={cuadricula} onClick={() => setCuadricula(!cuadricula)}>
          # Cuadrícula
        </button>
        <button type="button" onClick={() => trazos.length && cambia([])} disabled={!trazos.length}>
          Borrar todo
        </button>
        <span className="separador" />
        <button type="button" className="boton" onClick={guardar} disabled={estado === "guardando"}>
          {estado === "guardando" ? "Guardando…" : "Guardar dibujo"}
        </button>
        {estado === "guardado" && <span className="nota">Guardado</span>}
        {estado === "error" && <span className="vista-error">No se pudo guardar</span>}
      </div>
      <svg
        ref={svg}
        className="lienzo-papel"
        viewBox={`0 0 ${LIENZO.ancho} ${LIENZO.alto}`}
        data-cuadricula={cuadricula ? "true" : undefined}
        data-herramienta={herramienta}
        onPointerDown={abajo}
        role="img"
        aria-label="Lienzo de dibujo"
      >
        <rect width="100%" height="100%" fill={PAPEL} />
        {cuadricula && (
          <g stroke="#cfe0f3" strokeWidth={1}>
            {Array.from({ length: LIENZO.ancho / 40 - 1 }, (_, i) => (
              <line key={`v${i}`} x1={(i + 1) * 40} y1={0} x2={(i + 1) * 40} y2={LIENZO.alto} />
            ))}
            {Array.from({ length: LIENZO.alto / 40 - 1 }, (_, i) => (
              <line key={`h${i}`} x1={0} y1={(i + 1) * 40} x2={LIENZO.ancho} y2={(i + 1) * 40} />
            ))}
          </g>
        )}
        {[...trazos, ...(actual ? [actual] : [])].map((t, i) => (
          <path key={i} d={caminoDe(t)} stroke={t.color} strokeWidth={t.grosor * (0.5 + t.puntos.reduce((s, p) => s + (p[2] || 0.5), 0) / t.puntos.length)} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        ))}
      </svg>
    </div>
  );
}
