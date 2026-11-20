import Link from "next/link";
import type { Metadata } from "next";
import ErrorTagger from "@/components/ErrorTagger";
import { requireUser } from "@/lib/auth";
import { ERROR_HELP, ERROR_LABEL, ERROR_TAGS, type ErrorTag } from "@/lib/errores-etiquetas";
import { errorStats } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Diario de errores" };

type Clave = ErrorTag | "sin-etiqueta";
const ETIQUETA = (k: Clave) => (k === "sin-etiqueta" ? "Sin etiquetar" : ERROR_LABEL[k]);
const CLAVES: Clave[] = [...ERROR_TAGS, "sin-etiqueta"];
const pct = (a: number, b: number) => (b === 0 ? 0 : Math.round((a / b) * 100));

function Barra({ valor, max }: { valor: number; max: number }) {
  return (
    <span className="barra-h" aria-hidden="true">
      <i style={{ width: `${max === 0 ? 0 : (valor / max) * 100}%` }} />
    </span>
  );
}

/** Consejo según el tipo de error que más se repite. */
const CONSEJO: Record<Clave, string> = {
  concepto: "Vuelve a la teoría del nodo antes de hacer más ejercicios: explica la idea con tus palabras en la libreta.",
  "no-sabia-empezar": "Antes de calcular, escribe qué te piden, qué datos tienes y qué herramienta del nodo conecta ambos.",
  calculo: "Haz los cálculos más despacio y comprueba el resultado por otro camino (sustituir, estimar el orden de magnitud).",
  "mala-lectura": "Subraya los datos y el formato de respuesta pedido antes de empezar.",
  despiste: "Repasa la respuesta antes de enviarla: signo, unidades y formato.",
  bug: "Prueba tu programa con casos pequeños que puedas comprobar a mano antes del caso real.",
  "caso-limite": "Pregúntate siempre qué pasa con cero, vacío, negativo, el máximo y el borde.",
  "sin-etiqueta": "Etiqueta tus fallos (abajo): sin saber qué tipo de error cometes, no se puede corregir el hábito.",
};

export default async function Errores() {
  const user = await requireUser();
  const vault = loadVault();
  const s = errorStats(user.id, vault);
  const maxTipo = Math.max(0, ...s.porTipo.values());
  const masFrecuente = [...s.porTipo].filter(([k]) => k !== "sin-etiqueta").sort((a, b) => b[1] - a[1])[0];
  const maxSemana = Math.max(0, ...s.semanas.map((w) => w.fallos + w.aciertos));
  const titulo = (id: string) => vault.nodes.get(id)?.title ?? id;

  return (
    <main className="pagina pagina-errores">
      <section className="resumen">
        <h1>Diario de errores</h1>
        <dl className="cifras">
          <div>
            <dt>Fallos</dt>
            <dd>{s.total}</dd>
          </div>
          <div>
            <dt>Sin etiquetar</dt>
            <dd>{s.sinEtiqueta}</dd>
          </div>
          <div>
            <dt>Más frecuente</dt>
            <dd>{masFrecuente ? ERROR_LABEL[masFrecuente[0] as ErrorTag] : "—"}</dd>
          </div>
        </dl>
      </section>
      <p className="nota">
        Cada fallo que etiquetas te dice <em>qué tipo</em> de error cometes. El repaso usa estas etiquetas: los
        ejercicios con fallos recientes de concepto salen antes y se espacian menos hasta que los dominas.
      </p>

      {s.total === 0 ? (
        <p>Aún no tienes fallos registrados. Cuando falles un ejercicio, podrás decir qué ha pasado y aparecerá aquí.</p>
      ) : (
        <>
          {masFrecuente && (
            <p className="consejo">
              <strong>Tu error más repetido es «{ERROR_LABEL[masFrecuente[0] as ErrorTag]}».</strong> {CONSEJO[masFrecuente[0]]}
            </p>
          )}
          {!masFrecuente && <p className="consejo">{CONSEJO["sin-etiqueta"]}</p>}

          <section>
            <h2>Por tipo</h2>
            <table className="tabla-errores">
              <tbody>
                {CLAVES.filter((k) => s.porTipo.get(k)).map((k) => (
                  <tr key={k}>
                    <th scope="row" title={k === "sin-etiqueta" ? undefined : ERROR_HELP[k]}>
                      {ETIQUETA(k)}
                    </th>
                    <td>
                      <Barra valor={s.porTipo.get(k)!} max={maxTipo} />
                    </td>
                    <td className="num">
                      {s.porTipo.get(k)} ({pct(s.porTipo.get(k)!, s.total)} %)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2>Evolución (últimas 12 semanas)</h2>
            <p className="nota">Porcentaje de aciertos por semana, con los fallos desglosados por tipo.</p>
            <table className="tabla-errores">
              <thead>
                <tr>
                  <th>Semana</th>
                  <th>Intentos</th>
                  <th className="num">Aciertos</th>
                  <th>Fallos por tipo</th>
                </tr>
              </thead>
              <tbody>
                {s.semanas.map((w) => (
                  <tr key={w.semana}>
                    <th scope="row">{w.semana}</th>
                    <td>
                      <Barra valor={w.fallos + w.aciertos} max={maxSemana} />
                    </td>
                    <td className="num">{pct(w.aciertos, w.aciertos + w.fallos)} %</td>
                    <td className="tipos-semana">
                      {CLAVES.filter((k) => w.tipos.get(k)).map((k) => `${ETIQUETA(k)} ${w.tipos.get(k)}`).join(" · ") || "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2>Por área</h2>
            <ul className="lista-simple">
              {[...s.porArea].sort((a, b) => b[1] - a[1]).map(([a, n]) => (
                <li key={a}>
                  {vault.areas.get(a)?.label ?? a}: {n}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2>Nodos con más fallos</h2>
            <table className="tabla-errores">
              <tbody>
                {s.porNodo.slice(0, 12).map((n) => (
                  <tr key={n.nodeId}>
                    <th scope="row">
                      <Link href={`/nodo/${n.nodeId}`} prefetch={false}>
                        {titulo(n.nodeId)}
                      </Link>
                    </th>
                    <td className="num">{n.total}</td>
                    <td className="tipos-semana">{CLAVES.filter((k) => n.tipos.get(k)).map((k) => `${ETIQUETA(k)} ${n.tipos.get(k)}`).join(" · ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2>Fallos recientes</h2>
            <ol className="fallos-recientes">
              {s.recientes.map((r) => (
                <li key={r.id}>
                  <p className="meta">
                    {r.day} ·{" "}
                    <Link href={`/nodo/${r.nodeId}`} prefetch={false}>
                      {titulo(r.nodeId)}
                    </Link>{" "}
                    · <code>{r.exerciseId}</code> · {r.mode}
                    {r.tag ? ` · ${ERROR_LABEL[r.tag]}` : ""}
                  </p>
                  {r.note && <blockquote>{r.note}</blockquote>}
                  {!r.tag && <ErrorTagger attemptId={r.id} />}
                </li>
              ))}
            </ol>
          </section>
        </>
      )}
    </main>
  );
}
