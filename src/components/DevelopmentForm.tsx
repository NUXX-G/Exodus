"use client";

import { useState, useTransition } from "react";
import {
  gradeDevelopmentAction,
  previewDevelopmentAction,
  submitDevelopmentAction,
  type DevReveal,
} from "@/app/nodo/[id]/desarrollo-actions";
import ErrorTagger from "./ErrorTagger";

export type DevInitial =
  | { kind: "nuevo" }
  | { kind: "entregado"; reveal: DevReveal }
  | { kind: "puntuado"; reveal: DevReveal; score: number; max: number; solved: boolean };

/**
 * Ejercicio de desarrollo: escribir (Markdown + LaTeX + código) o marcar «hecho en papel» → entregar → ver la solución
 * modelo y la rúbrica → puntuarse criterio a criterio. La solución solo llega del servidor tras entregar.
 */
export default function DevelopmentForm({
  nodeId,
  exerciseId,
  mode = "estudio",
  reviewOf,
  locked = false,
  initial,
}: {
  nodeId: string;
  exerciseId: string;
  mode?: "estudio" | "repaso" | "intercalado";
  reviewOf?: string;
  locked?: boolean;
  initial: DevInitial;
}) {
  const [estado, setEstado] = useState<DevInitial>(initial);
  const [texto, setTexto] = useState("");
  const [papel, setPapel] = useState(false);
  const [vista, setVista] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState<{ tono: "ok" | "error"; texto: string; attemptId?: number } | null>(null);
  const [pendiente, empezar] = useTransition();

  const entregar = (form: FormData) =>
    empezar(async () => {
      const r = await submitDevelopmentAction(form);
      if (!r.ok) setMensaje({ tono: "error", texto: r.message });
      else {
        setMensaje(null);
        setEstado({ kind: "entregado", reveal: r.reveal });
      }
    });

  const puntuar = (datos: FormData) =>
    empezar(async () => {
      if (estado.kind !== "entregado") return;
      // Cada criterio es un grupo de radios «score-i»; el servidor espera los puntos en orden como «score».
      const form = new FormData();
      form.set("submissionId", String(estado.reveal.submissionId));
      estado.reveal.rubric.forEach((_, i) => form.append("score", String(datos.get(`score-${i}`) ?? "")));
      const r = await gradeDevelopmentAction(form);
      if (!r.ok) {
        setMensaje({ tono: "error", texto: r.message });
        return;
      }
      setMensaje({ tono: r.solved ? "ok" : "error", texto: r.message, attemptId: r.attemptId });
      if (estado.kind === "entregado") {
        const scores = form.getAll("score").map(Number);
        const max = estado.reveal.rubric.reduce((a, c) => a + c.puntos, 0);
        setEstado({ kind: "puntuado", reveal: estado.reveal, score: scores.reduce((a, b) => a + b, 0), max, solved: r.solved });
      }
    });

  if (estado.kind === "nuevo") {
    return (
      <form action={entregar} className="desarrollo-form">
        <input type="hidden" name="nodeId" value={nodeId} />
        <input type="hidden" name="exerciseId" value={exerciseId} />
        <input type="hidden" name="mode" value={mode} />
        {reviewOf && <input type="hidden" name="reviewOf" value={reviewOf} />}
        <label className="papel">
          <input type="checkbox" name="onPaper" checked={papel} onChange={(e) => setPapel(e.target.checked)} disabled={locked} /> Lo he hecho en papel
          (en el examen será así)
        </label>
        {!papel && (
          <>
            <label htmlFor={`des-${exerciseId}`} className="visualmente-oculto">
              Tu respuesta
            </label>
            <textarea
              id={`des-${exerciseId}`}
              name="answer"
              rows={10}
              maxLength={20000}
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              disabled={locked}
              placeholder={"Escribe tu desarrollo. Markdown, fórmulas entre $…$ o $$…$$ y código entre ```.\nJustifica cada paso: así se corrige en el examen."}
            />
            <div className="fila-botones">
              <button
                type="button"
                className="boton-secundario"
                disabled={!texto.trim() || pendiente}
                onClick={() => empezar(async () => setVista(await previewDevelopmentAction(texto)))}
              >
                Vista previa
              </button>
            </div>
            {vista && <div className="prosa vista-previa" dangerouslySetInnerHTML={{ __html: vista }} />}
          </>
        )}
        <button type="submit" className="boton" disabled={locked || pendiente || (!papel && !texto.trim())}>
          {pendiente ? "Entregando…" : "Entregar y ver la solución"}
        </button>
        <p className="nota">Después de entregar verás la solución modelo y la rúbrica, y te puntuarás tú.</p>
        {mensaje && (
          <p className="mensaje" data-tono={mensaje.tono} role="status">
            {mensaje.texto}
          </p>
        )}
      </form>
    );
  }

  const { reveal } = estado;
  return (
    <div className="desarrollo-revelado">
      <details open={estado.kind === "entregado"}>
        <summary>Tu respuesta</summary>
        {reveal.answerHtml ? <div className="prosa" dangerouslySetInnerHTML={{ __html: reveal.answerHtml }} /> : <p className="nota">Hecha en papel.</p>}
      </details>
      <details open={estado.kind === "entregado"}>
        <summary>Solución modelo</summary>
        <div className="prosa solucion-modelo" dangerouslySetInnerHTML={{ __html: reveal.solutionHtml }} />
      </details>
      {estado.kind === "entregado" ? (
        <form action={puntuar} className="rubrica">
          <input type="hidden" name="submissionId" value={reveal.submissionId} />
          <p>
            <strong>Puntúate con la rúbrica</strong>, criterio a criterio, comparando con la solución. Sé honesto: esto
            es para ti. Con un 60 % cuenta como resuelto.
          </p>
          <ol>
            {reveal.rubric.map((c, i) => (
              <li key={i}>
                <div className="prosa" dangerouslySetInnerHTML={{ __html: c.criterioHtml }} />
                <div className="puntos" role="radiogroup">
                  {Array.from({ length: c.puntos + 1 }, (_, p) => (
                    <label key={p}>
                      <input type="radio" name={`score-${i}`} value={p} required />
                      <span>{p}</span>
                    </label>
                  ))}
                  <small>de {c.puntos}</small>
                </div>
              </li>
            ))}
          </ol>
          <button
            type="submit"
            className="boton"
            disabled={pendiente}
          >
            {pendiente ? "Guardando…" : "Guardar mi nota"}
          </button>
        </form>
      ) : (
        <div className="fila-botones">
          <p className="mensaje" data-tono={estado.solved ? "ok" : "error"}>
            Tu nota: {estado.score} de {estado.max}.
          </p>
          <button
            type="button"
            className="boton-secundario"
            onClick={() => {
              setEstado({ kind: "nuevo" });
              setMensaje(null);
              setTexto("");
              setVista(null);
            }}
          >
            Intentarlo de nuevo
          </button>
        </div>
      )}
      {mensaje && (
        <p className="mensaje" data-tono={mensaje.tono} role="status">
          {mensaje.texto}
        </p>
      )}
      {mensaje?.attemptId && <ErrorTagger key={mensaje.attemptId} attemptId={mensaje.attemptId} />}
    </div>
  );
}
