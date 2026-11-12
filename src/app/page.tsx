import Link from "next/link";
import SkillGraph, { type GraphNode } from "@/components/SkillGraph";
import Heatmap from "@/components/Heatmap";
import { AREAS } from "@/lib/areas";
import { requireUser } from "@/lib/auth";
import { computeStates, getActivity, getCompleted } from "@/lib/progress";
import { areaProgress, estimateMinutes, formatMinutes, recommendedNext } from "@/lib/study";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";

export default async function Inicio() {
  const vault = loadVault();
  const user = await requireUser();
  const completed = getCompleted(user.id);
  const states = computeStates(vault, completed);
  const activity = getActivity(user.id, 26 * 7);

  const nodes = [...vault.nodes.values()];
  // Al cliente solo viajan datos públicos del nodo: nunca la flag ni las pistas.
  const graphNodes: GraphNode[] = nodes.map((n) => ({
    id: n.id,
    title: n.title,
    area: n.area,
    level: n.trunkLevel,
    state: states.get(n.id)!,
    hasChallenge: n.ctfFlag !== null,
    prerequisites: n.prerequisites,
  }));

  const done = nodes.filter((n) => completed.has(n.id)).length;
  const next = nodes
    .filter((n) => states.get(n.id) === "available" && n.ctfFlag)
    .sort((a, b) => a.trunkLevel - b.trunkLevel);
  const areas = areaProgress(vault, completed);
  const siguiente = recommendedNext(vault, states);
  const minutosRestantes = areas.reduce((s, a) => s + a.minutesLeft, 0);

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Árbol de conocimiento troncal</h1>
        <dl className="cifras">
          <div>
            <dt>Nodos completados</dt>
            <dd>
              {done} de {nodes.length}
            </dd>
          </div>
          <div>
            <dt>Racha</dt>
            <dd>
              {activity.streak} {activity.streak === 1 ? "día" : "días"}
            </dd>
          </div>
          <div>
            <dt>Estudio restante</dt>
            <dd>{formatMinutes(minutosRestantes)}</dd>
          </div>
        </dl>
      </section>

      {siguiente ? (
        <section className="continuar" aria-label="Siguiente paso">
          <div>
            <p className="etiqueta">{done === 0 ? "Empieza aquí" : "Siguiente paso"}</p>
            <h2>{siguiente.title}</h2>
            <p className="nota">
              {AREAS[siguiente.area].label} · nivel {siguiente.trunkLevel} · unas {formatMinutes(estimateMinutes(siguiente))}
            </p>
          </div>
          <Link href={`/nodo/${siguiente.id}`} prefetch={false} className="boton">
            {done === 0 ? "Empezar" : "Continuar"}
          </Link>
        </section>
      ) : (
        done === nodes.length && (
          <section className="continuar">
            <h2>Has completado todos los nodos con reto disponibles.</h2>
          </section>
        )
      )}

      <nav className="atajos" aria-label="Accesos">
        <Link href="/temario">Temario completo</Link>
        <Link href="/buscar">Buscar</Link>
      </nav>

      {vault.issues.length > 0 && (
        <div className="aviso" role="alert">
          {vault.issues.length === 1 ? "Hay 1 problema" : `Hay ${vault.issues.length} problemas`} en el vault.
          Los archivos afectados no aparecen en el árbol hasta corregirlos.
          <ul>
            {vault.issues.map((issue, i) => (
              <li key={i}>
                {issue.file}: {issue.message}
              </li>
            ))}
          </ul>
        </div>
      )}

      {nodes.length === 0 ? (
        <p>
          El vault está vacío. Crea un archivo <code>.md</code> con frontmatter (<code>id</code>, <code>title</code>,{" "}
          <code>area</code>, <code>trunk_level</code>) y recarga.
        </p>
      ) : (
        <SkillGraph nodes={graphNodes} />
      )}

      <div className="bajo-plano">
        <section>
          <h2>Actividad</h2>
          <Heatmap days={activity.days} />
        </section>

        <section>
          <h2>Retos disponibles</h2>
          {next.length === 0 ? (
            <p className="nota">
              Ningún nodo disponible tiene reto todavía. Puedes leer cualquier nodo del árbol, incluidos los bloqueados.
            </p>
          ) : (
            <ul className="lista">
              {next.map((n) => (
                <li key={n.id}>
                  <Link href={`/nodo/${n.id}`} prefetch={false}>
                    <span>
                      <i className="punto" style={{ "--color-area": AREAS[n.area].color } as React.CSSProperties} />
                      {n.title}
                    </span>
                    <small>nivel {n.trunkLevel}</small>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h2>Áreas</h2>
          <ul className="lista areas">
            {areas.map((a) => (
              <li key={a.id}>
                <Link href={`/temario?area=${a.id}`} prefetch={false}>
                  <span className="fila-area">
                    <span>
                      <i className="punto" style={{ "--color-area": AREAS[a.id].color } as React.CSSProperties} />
                      {AREAS[a.id].label}
                    </span>
                    <small>
                      {a.done} de {a.total}
                    </small>
                  </span>
                  <span className="barra" aria-hidden="true">
                    <i style={{ width: `${(a.done / a.total) * 100}%`, background: AREAS[a.id].color }} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
