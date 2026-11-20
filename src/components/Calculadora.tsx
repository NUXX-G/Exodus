"use client";

import { useEffect, useRef, useState } from "react";
import { analizar, ErrorExpresion, evaluar, enGrados } from "@/lib/cas";

interface Entrada {
  expr: string;
  res: string;
}

/** Formato del resultado: entero si lo es, si no 12 cifras significativas sin ceros de sobra. */
function formatea(v: number): string {
  if (!Number.isFinite(v)) return Number.isNaN(v) ? "no definido" : v > 0 ? "∞" : "−∞";
  if (Number.isInteger(v) && Math.abs(v) < 1e15) return String(v);
  const s = v.toPrecision(12);
  return s.includes("e") ? s.replace(/\.?0+e/, "e") : s.replace(/\.?0+$/, "");
}

const TECLAS: [string, string][] = [
  ["sin(", "sin"], ["cos(", "cos"], ["tan(", "tan"], ["^", "xʸ"], ["sqrt(", "√"],
  ["asin(", "sin⁻¹"], ["acos(", "cos⁻¹"], ["atan(", "tan⁻¹"], ["!", "n!"], ["abs(", "|x|"],
  ["ln(", "ln"], ["log(", "log"], ["exp(", "eˣ"], ["pi", "π"], ["e", "e"],
  ["(", "("], [")", ")"], ["ans", "Ans"], ["*10^", "×10ⁿ"], ["/", "÷"],
];

/**
 * Calculadora científica flotante (fase 8B). Sin IA ni `eval`: usa el mismo analizador que corrige los ejercicios
 * (src/lib/cas.ts). Grados o radianes, Ans, historial (en este navegador) y teclado: Intro calcula, Esc cierra,
 * Alt+C la abre desde cualquier página.
 */
export default function Calculadora() {
  const [abierta, setAbierta] = useState(false);
  const [expr, setExpr] = useState("");
  const [res, setRes] = useState<string>("");
  const [error, setError] = useState("");
  const [grados, setGrados] = useState(true);
  const [ans, setAns] = useState(0);
  const [historial, setHistorial] = useState<Entrada[]>([]);
  const campo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const h = JSON.parse(localStorage.getItem("exodus_calc") ?? "{}");
      if (Array.isArray(h.historial)) setHistorial(h.historial.slice(0, 20));
      if (typeof h.grados === "boolean") setGrados(h.grados);
    } catch {
      /* historial corrupto: se ignora */
    }
    const atajo = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        setAbierta((a) => !a);
      }
    };
    window.addEventListener("keydown", atajo);
    return () => window.removeEventListener("keydown", atajo);
  }, []);

  useEffect(() => {
    if (abierta) campo.current?.focus();
  }, [abierta]);

  const guarda = (h: Entrada[], g: boolean) => localStorage.setItem("exodus_calc", JSON.stringify({ historial: h, grados: g }));

  const calcula = () => {
    if (!expr.trim()) return;
    try {
      const arbol = analizar(expr.replace(/×/g, "*").replace(/÷/g, "/"), ["ans"]);
      const v = evaluar(grados ? enGrados(arbol) : arbol, { ans });
      const r = formatea(v);
      setRes(r);
      setError("");
      if (Number.isFinite(v)) setAns(v);
      const h = [{ expr, res: r }, ...historial.filter((x) => x.expr !== expr)].slice(0, 20);
      setHistorial(h);
      guarda(h, grados);
    } catch (e) {
      setError(e instanceof ErrorExpresion ? e.message : "no se puede calcular");
      setRes("");
    }
  };

  const inserta = (t: string) => {
    const el = campo.current;
    const i = el?.selectionStart ?? expr.length;
    const j = el?.selectionEnd ?? expr.length;
    const nuevo = expr.slice(0, i) + t + expr.slice(j);
    setExpr(nuevo);
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(i + t.length, i + t.length);
    });
  };

  if (!abierta) {
    return (
      <button type="button" className="calc-boton" onClick={() => setAbierta(true)} title="Calculadora científica (Alt+C)" aria-label="Abrir la calculadora">
        🧮
      </button>
    );
  }

  return (
    <div className="calc" role="dialog" aria-label="Calculadora científica">
      <div className="calc-cabecera">
        <strong>Calculadora</strong>
        <button type="button" className="calc-modo" onClick={() => { setGrados(!grados); guarda(historial, !grados); }} title="Unidad de los ángulos">
          {grados ? "GRA" : "RAD"}
        </button>
        <button type="button" className="calc-cerrar" onClick={() => setAbierta(false)} aria-label="Cerrar la calculadora">
          ×
        </button>
      </div>
      <input
        ref={campo}
        className="calc-entrada"
        value={expr}
        onChange={(e) => setExpr(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") calcula();
          if (e.key === "Escape") setAbierta(false);
        }}
        placeholder="2*sin(30) + sqrt(2)^2"
        spellCheck={false}
        autoComplete="off"
        aria-label="Expresión"
      />
      <div className="calc-resultado" aria-live="polite">
        {error ? <span className="vista-error">{error}</span> : res ? <>= {res}</> : <span className="nota">Intro para calcular</span>}
      </div>
      <div className="calc-teclas">
        {TECLAS.map(([t, etiqueta]) => (
          <button key={etiqueta} type="button" onClick={() => inserta(t)}>
            {etiqueta}
          </button>
        ))}
        <button type="button" onClick={() => { setExpr(""); setRes(""); setError(""); }}>
          C
        </button>
        <button type="button" onClick={() => setExpr(expr.slice(0, -1))}>
          ⌫
        </button>
        <button type="button" className="calc-igual" onClick={calcula}>
          =
        </button>
      </div>
      {historial.length > 0 && (
        <ol className="calc-historial">
          {historial.slice(0, 6).map((h, i) => (
            <li key={i}>
              <button type="button" onClick={() => setExpr(h.expr)} title="Volver a usar">
                {h.expr} = <strong>{h.res}</strong>
              </button>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
