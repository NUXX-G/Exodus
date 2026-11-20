import { LANGUAGE_LABEL, LANGUAGE_RUN, type Language } from "@/lib/codigo";
import type { VaultExercise } from "@/lib/vault";

/**
 * Cómo se resuelve un ejercicio de código: plantilla, script de pruebas y orden. El programa se ejecuta solo en el
 * ordenador del alumno; Exodus compara el «código del ejercicio» que imprime el script (STATUS.md §6).
 * `plantillaHtml` es la plantilla ya resaltada (Shiki) por el servidor.
 */
export default function CodeInfo({ nodeId, ex, plantillaHtml }: { nodeId: string; ex: VaultExercise; plantillaHtml?: string }) {
  const lang: Language = ex.language ?? "cualquiera";
  const run = LANGUAGE_RUN[lang];
  const script = ex.harness ? `/api/adjunto/${nodeId}/${ex.harness}` : `/api/codigo/${nodeId}`;
  const orden = ex.harness ? `bash ${ex.harness} ./tu-programa ${ex.stage ?? 1}` : `bash prueba.sh ${ex.id} -- ${run.ejecutar}`;
  return (
    <div className="codigo-info">
      <p className="meta">
        Lenguaje: <strong>{LANGUAGE_LABEL[lang]}</strong> · tu programa se ejecuta solo en tu ordenador
      </p>
      {plantillaHtml && (
        <details>
          <summary>
            Plantilla inicial (<code>{run.archivo}</code>)
          </summary>
          <div className="prosa" dangerouslySetInnerHTML={{ __html: plantillaHtml }} />
          <a className="boton-secundario" download={run.archivo} href={`data:text/plain;charset=utf-8,${encodeURIComponent(ex.template ?? "")}`}>
            Descargar plantilla
          </a>
        </details>
      )}
      <ol className="pasos-codigo">
        <li>
          Descarga el script de pruebas:{" "}
          <a href={script} download>
            {ex.harness ?? "prueba.sh"}
          </a>{" "}
          (Linux, macOS, WSL o Git Bash en Windows).
        </li>
        {!ex.harness && run.preparar && (
          <li>
            Compila: <code>{run.preparar}</code>
          </li>
        )}
        <li>
          Ejecuta: <code>{orden}</code> (con <code>-v</code> ves cada salida completa).
        </li>
        <li>Pega abajo el «código del ejercicio» que imprime al final. Si algún caso falla, el código no coincidirá.</li>
      </ol>
    </div>
  );
}
