"use client";

import { useEffect, useRef, useState } from "react";
import { previewAnswerAction, type PreviewState } from "@/app/nodo/[id]/actions";

/** Lo que el cliente necesita saber de un ejercicio (nunca los hashes). */
export interface AnswerSpec {
  nodeId: string;
  exerciseId: string;
  type: "texto" | "numero" | "expresion" | "matriz" | "opcion" | "flag" | "desarrollo" | "codigo";
  unit?: string;
  sig?: number;
  vars?: string[];
  multiple?: boolean;
  /** HTML ya renderizado de cada opción (tipo opcion). */
  optionsHtml?: string[];
  /** Variante que se está viendo; null si el ejercicio no tiene variantes. */
  variant: number | null;
}

const AYUDA: Partial<Record<AnswerSpec["type"], string>> = {
  expresion: "Escribe como en la calculadora (2x^2 + sqrt(x)/3, sin(x), pi, e^x) o en LaTeX (\\frac{1}{x}). La vista previa muestra cómo lo he entendido.",
  matriz: "Filas separadas por «;» y elementos por espacios o comas: 1 2; 3 4  ·  [[1,2],[3,4]]  ·  vector: (1, 2, 3). Decimales con punto.",
};

/**
 * Campo de respuesta según el tipo de ejercicio. Incluye los campos ocultos que necesita el servidor (variante y
 * tiempo empleado) y, para expresiones, matrices y números, una vista previa que no corrige ni cuenta como intento.
 */
export default function AnswerField({
  spec,
  disabled,
  placeholder,
  formId,
  initial,
}: {
  spec: AnswerSpec;
  disabled?: boolean;
  placeholder?: string;
  formId: string;
  /** Respuesta guardada (exámenes): texto, o índices separados por comas en opción múltiple. */
  initial?: string;
}) {
  const tiempo = useRef<HTMLInputElement>(null);
  const [valor, setValor] = useState(initial ?? "");
  const [vista, setVista] = useState<PreviewState | null>(null);
  const conVista = spec.type === "expresion" || spec.type === "matriz" || spec.type === "numero";

  // La hora de inicio se fija en el navegador (no en el servidor) al mostrar el enunciado.
  useEffect(() => {
    if (tiempo.current) tiempo.current.dataset.inicio = String(Date.now());
  }, [spec.exerciseId, spec.variant]);

  useEffect(() => {
    if (!conVista || !valor.trim()) {
      setVista(null);
      return;
    }
    let vigente = true;
    const t = setTimeout(async () => {
      const r = await previewAnswerAction(spec.nodeId, spec.exerciseId, valor);
      if (vigente) setVista(r);
    }, 450);
    return () => {
      vigente = false;
      clearTimeout(t);
    };
  }, [valor, conVista, spec.nodeId, spec.exerciseId]);

  const id = `${formId}-resp`;
  const ocultos = (
    <>
      <input type="hidden" name="variant" value={spec.variant === null ? "" : String(spec.variant)} />
      <input type="hidden" name="elapsedMs" defaultValue="" ref={tiempo} />
    </>
  );

  if (spec.type === "opcion") {
    const html = spec.optionsHtml ?? [];
    return (
      <fieldset className="opciones" disabled={disabled}>
        <legend className="visualmente-oculto">Opciones</legend>
        {ocultos}
        {html.map((h, i) => (
          <label key={i} className="opcion">
            <input
              type={spec.multiple ? "checkbox" : "radio"}
              name="answer"
              value={String(i)}
              required={!spec.multiple}
              defaultChecked={initial?.split(",").includes(String(i))}
            />
            <span className="opcion-letra">{String.fromCharCode(97 + i)})</span>
            <span className="prosa opcion-texto" dangerouslySetInnerHTML={{ __html: h }} />
          </label>
        ))}
        {spec.multiple && <p className="nota">Puede haber varias correctas: marca todas.</p>}
      </fieldset>
    );
  }

  const comun = {
    id,
    name: "answer",
    autoComplete: "off",
    spellCheck: false,
    maxLength: 512,
    disabled,
    required: true,
    value: valor,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValor(e.target.value),
  };
  const sugerencia =
    placeholder ??
    (spec.type === "numero"
      ? `Número${spec.unit ? ` (en ${spec.unit} u otra unidad compatible)` : ""}${spec.sig && spec.sig <= 4 ? `, redondeado a ${spec.sig} cifras significativas` : ""}`
      : spec.type === "expresion"
        ? `Expresión en ${spec.vars?.join(", ") || "x"}`
        : spec.type === "codigo"
          ? "Código de 12 caracteres que imprime el script de pruebas"
          : "Tu respuesta");

  return (
    <div className="respuesta">
      {ocultos}
      <label htmlFor={id} className="visualmente-oculto">
        Respuesta
      </label>
      {spec.type === "matriz" ? <textarea {...comun} rows={3} placeholder={sugerencia} /> : <input {...comun} type="text" placeholder={sugerencia} />}
      {AYUDA[spec.type] && <p className="nota ayuda-respuesta">{AYUDA[spec.type]}</p>}
      {conVista && vista && (
        <div className="vista-previa" aria-live="polite">
          {vista.ok ? (
            vista.html ? <div className="prosa" dangerouslySetInnerHTML={{ __html: vista.html }} /> : <span>{vista.texto}</span>
          ) : (
            <span className="vista-error">{vista.texto}</span>
          )}
        </div>
      )}
    </div>
  );
}

/** Rellena el tiempo empleado justo antes de enviar. Úsalo en `onSubmit` del formulario. */
export function marcarTiempo(form: HTMLFormElement) {
  const campo = form.querySelector<HTMLInputElement>('input[name="elapsedMs"]');
  if (campo?.dataset.inicio) campo.value = String(Date.now() - Number(campo.dataset.inicio));
}
