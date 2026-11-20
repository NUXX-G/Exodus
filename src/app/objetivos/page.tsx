import Link from "next/link";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth";
import { activeGoals, objetivosDelVault } from "@/lib/objetivos-db";
import { avanceObjetivo } from "@/lib/objetivos";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { computeStates, getCompleted, getDiagnosed } from "@/lib/progress";
import { estimateMinutes, formatMinutes } from "@/lib/study";
import { loadVault } from "@/lib/vault";
import { activateGoalAction, deactivateGoalAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Objetivos" };

/** Semanas entre hoy y un día (YYYY-MM-DD). */
function semanasHasta(dia: string): number {
  const [y, m, d] = dia.split("-").map(Number);
  return Math.max(0, (Date.UTC(y, m - 1, d) - Date.now()) / (7 * 86_400_000));
}

export default async function Objetivos() {
  const user = await requireUser();
  const vault = loadVault();
  const { objetivos } = objetivosDelVault();
  const activos = activeGoals(user.id);
  const states = computeStates(vault, getCompleted(user.id), getDiagnosed(user.id));
  const resolve = linkResolverFor(vault);
  const cuerpos = await Promise.all(objetivos.map((o) => renderMarkdown(o.cuerpo, resolve)));

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Objetivos</h1>
      </section>
      <p className="nota">
        Un objetivo es un camino recomendado hacia una meta concreta, con nodos de varias áreas en el orden en que conviene
        estudiarlos. Activa los que quieras: Inicio te dirá el siguiente paso de cada uno y a qué ritmo vas. Puedes
        indicar cuántas horas por semana estudias y para cuándo quieres llegar.
      </p>
      {objetivos.length === 0 && <p>Todavía no hay objetivos en el vault.</p>}
      <ul className="lista-objetivos">
        {objetivos.map((o, i) => {
          const act = activos.find((a) => a.objetivo.id === o.id);
          const av = avanceObjetivo(o, vault, states, estimateMinutes, act?.hoursPerWeek);
          const pct = av.total ? Math.round(((av.hechos + av.diagnosticados) / av.total) * 100) : 0;
          const semanasDisp = act?.targetDay ? semanasHasta(act.targetDay) : null;
          const ritmoNecesario = semanasDisp !== null && semanasDisp > 0 ? av.minutosRestantes / 60 / semanasDisp : null;
          return (
            <li key={o.id} data-activo={act ? "true" : undefined}>
              <h2>{o.titulo}</h2>
              <p className="nota">{o.resumen}</p>
              <p className="meta">
                {av.total} nodos · {av.hechos} completados{av.diagnosticados ? ` · ${av.diagnosticados} por diagnóstico` : ""} · quedan unas{" "}
                {formatMinutes(av.minutosRestantes)} de estudio
                {av.faltan.length ? ` · ${av.faltan.length} temas aún no están en Exodus` : ""}
              </p>
              <span className="barra" aria-hidden="true">
                <i style={{ width: `${pct}%` }} />
              </span>
              {act && (
                <>
                  <p>
                    A {String(act.hoursPerWeek).replace(".", ",")} h/semana: unas <strong>{av.semanas} semanas</strong>.
                    {act.targetDay && ritmoNecesario !== null && (
                      <>
                        {" "}
                        Para llegar el {act.targetDay} necesitas unas <strong>{Math.ceil(ritmoNecesario)} h/semana</strong>
                        {ritmoNecesario > act.hoursPerWeek ? " (más de lo que tienes previsto)." : " (vas bien)."}
                      </>
                    )}
                  </p>
                  {av.siguiente && (
                    <p>
                      Siguiente:{" "}
                      <Link href={`/nodo/${av.siguiente.id}`} prefetch={false} className="boton">
                        {av.siguiente.title}
                      </Link>
                    </p>
                  )}
                </>
              )}
              <details>
                <summary>{act ? "Cambiar ritmo o fecha" : "Activar"}</summary>
                <form action={activateGoalAction} className="form-objetivo">
                  <input type="hidden" name="goalId" value={o.id} />
                  <label>
                    Horas por semana <input type="number" name="hours" min={1} max={80} step={0.5} defaultValue={act?.hoursPerWeek ?? o.horasSemana} />
                  </label>
                  <label>
                    Fecha objetivo (opcional) <input type="date" name="target" defaultValue={act?.targetDay ?? ""} />
                  </label>
                  <button type="submit" className="boton">
                    {act ? "Guardar" : "Activar este objetivo"}
                  </button>
                </form>
                {act && (
                  <form action={deactivateGoalAction}>
                    <input type="hidden" name="goalId" value={o.id} />
                    <button type="submit" className="boton-secundario">
                      Desactivar
                    </button>
                  </form>
                )}
              </details>
              <details>
                <summary>Qué incluye</summary>
                <div className="prosa" dangerouslySetInnerHTML={{ __html: cuerpos[i] }} />
                <ol className="lista-simple">
                  {o.nodos.map((id) => {
                    const n = vault.nodes.get(id);
                    const st = states.get(id);
                    return (
                      <li key={id}>
                        {n ? (
                          <Link href={`/nodo/${id}`} prefetch={false}>
                            {n.title}
                          </Link>
                        ) : (
                          <span className="nota">{id} (pendiente de escribir)</span>
                        )}
                        {st === "completed" ? " ✔" : st === "diagnosed" ? " ✔ (diagnóstico)" : ""}
                      </li>
                    );
                  })}
                </ol>
                {o.fuente && <p className="nota">Fuente: {o.fuente}</p>}
              </details>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
