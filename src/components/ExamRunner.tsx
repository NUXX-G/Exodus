"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { saveExamAnswerAction, submitExamAction } from "@/app/examen/actions";
import AnswerField, { type AnswerSpec } from "./AnswerField";

export interface ExamRunnerItem {
  ref: string;
  html: string;
  puntos: number;
  /** null para desarrollo (área de texto libre). */
  spec: AnswerSpec | null;
  saved: string;
  /** Enlace al nodo de origen (para ejercicios de código: allí está el script de pruebas). */
  fuente?: { href: string; titulo: string };
}

const mmss = (ms: number) => {
  const s = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = String(s % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
};

/** Lee el valor de las entradas «answer» de un item (texto, área o casillas). */
function valorDe(el: HTMLElement): string {
  const campos = [...el.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[name="answer"]')];
  if (campos.length && campos[0] instanceof HTMLInputElement && (campos[0].type === "radio" || campos[0].type === "checkbox")) {
    return (campos as HTMLInputElement[]).filter((c) => c.checked).map((c) => c.value).join(",");
  }
  return campos[0]?.value ?? "";
}

/**
 * Examen en curso. Las respuestas se guardan solas (al escribir) y no se corrigen hasta entregar. Con tiempo límite,
 * al llegar a cero se entrega solo. En modo papel, primero se resuelve a mano y después se pasan los resultados.
 */
export default function ExamRunner({
  attemptId,
  deadline,
  graceMs,
  papel,
  items,
}: {
  attemptId: number;
  deadline: number | null;
  graceMs: number;
  papel: boolean;
  items: ExamRunnerItem[];
}) {
  const [ahora, setAhora] = useState<number | null>(null);
  const [pasando, setPasando] = useState(!papel);
  const [confirmar, setConfirmar] = useState(false);
  const [estado, setEstado] = useState<Record<string, "guardando" | "guardado" | "error">>({});
  const temporizadores = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const entrega = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setAhora(Date.now());
    const t = setInterval(() => setAhora(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const limite = deadline === null ? null : deadline + (papel ? graceMs : 0);
  const restante = limite === null || ahora === null ? null : limite - ahora;
  const enGracia = papel && deadline !== null && ahora !== null && ahora > deadline;

  // Fin del tiempo: en papel, se abren las respuestas; al acabar el margen (o sin papel), se entrega.
  useEffect(() => {
    if (enGracia && !pasando) setPasando(true);
    if (restante !== null && restante <= 0) entrega.current?.requestSubmit();
  }, [restante, enGracia, pasando]);

  const guarda = useCallback(
    (ref: string, el: HTMLElement) => {
      clearTimeout(temporizadores.current[ref]);
      temporizadores.current[ref] = setTimeout(async () => {
        setEstado((e) => ({ ...e, [ref]: "guardando" }));
        const ok = await saveExamAnswerAction(attemptId, ref, valorDe(el));
        setEstado((e) => ({ ...e, [ref]: ok ? "guardado" : "error" }));
      }, 700);
    },
    [attemptId],
  );

  return (
    <div className="examen">
      <div className="examen-barra" role="timer" aria-live="off">
        {restante === null ? <span>Sin límite de tiempo</span> : <strong data-urgente={restante < 5 * 60_000 ? "true" : undefined}>{mmss(restante)}</strong>}
        {enGracia && <span> · tiempo de pasar resultados</span>}
        <span className="nota"> · {items.length} preguntas · las respuestas se guardan solas</span>
      </div>

      {papel && !pasando && (
        <div className="consejo">
          <p>
            <strong>Modo papel.</strong> Resuelve en papel, como en el examen presencial: escribe el desarrollo completo.
            Cuando acabes (o se acabe el tiempo), pulsa el botón y pasa aquí los resultados finales. Tendrás{" "}
            {Math.round(graceMs / 60_000)} minutos extra para teclearlos.
          </p>
          <button type="button" className="boton" onClick={() => setPasando(true)}>
            He terminado en papel: pasar resultados
          </button>
        </div>
      )}

      <ol className="examen-items">
        {items.map((it, i) => (
          <li key={it.ref}>
            <p className="meta">
              Pregunta {i + 1} · {it.puntos} {it.puntos === 1 ? "punto" : "puntos"}
              {it.fuente && (
                <>
                  {" · "}
                  <a href={it.fuente.href} target="_blank" rel="noreferrer">
                    {it.fuente.titulo}
                  </a>
                </>
              )}
              {estado[it.ref] && <span className="guardado"> · {estado[it.ref] === "guardando" ? "guardando…" : estado[it.ref] === "guardado" ? "guardado" : "no se pudo guardar"}</span>}
            </p>
            <div className="prosa ejercicio-enunciado" dangerouslySetInnerHTML={{ __html: it.html }} />
            {pasando && (
              <div
                className="examen-respuesta"
                onInput={(e) => guarda(it.ref, e.currentTarget)}
                onChange={(e) => guarda(it.ref, e.currentTarget)}
              >
                {it.spec ? (
                  <AnswerField spec={it.spec} formId={`ex-${attemptId}-${i}`} initial={it.saved} />
                ) : (
                  <textarea
                    name="answer"
                    rows={papel ? 3 : 8}
                    maxLength={20000}
                    defaultValue={it.saved}
                    placeholder={papel ? "Hecho en papel (opcional: resumen o resultado). Al entregar te puntuarás con la rúbrica." : "Tu desarrollo (Markdown, fórmulas entre $…$)."}
                  />
                )}
              </div>
            )}
          </li>
        ))}
      </ol>

      <form ref={entrega} action={submitExamAction} className="examen-entrega">
        <input type="hidden" name="attemptId" value={attemptId} />
        {confirmar ? (
          <>
            <span>¿Entregar ahora? Ya no podrás cambiar nada.</span>
            <button type="submit" className="boton">
              Sí, entregar
            </button>
            <button type="button" className="boton-secundario" onClick={() => setConfirmar(false)}>
              Seguir
            </button>
          </>
        ) : (
          <button type="button" className="boton" onClick={() => setConfirmar(true)}>
            Entregar el examen
          </button>
        )}
      </form>
    </div>
  );
}
