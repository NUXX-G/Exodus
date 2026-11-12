import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ExerciseForm from "@/components/ExerciseForm";
import FlagForm from "@/components/FlagForm";
import { AREAS } from "@/lib/areas";
import { getSessionUser, requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { getCompleted, getRevealedLevels, getSolvedExercises, masteryOf, recordOpen, stateOf } from "@/lib/progress";
import { attachmentInfo, loadVault } from "@/lib/vault";
import { revealHintAction } from "./actions";

const formatBytes = (n: number) =>
  n < 1024 ? `${n} B` : n < 1024 * 1024 ? `${(n / 1024).toFixed(1)} KiB` : `${(n / 1024 / 1024).toFixed(1)} MiB`;

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Sin sesión no se revela ni el título: la página redirige a /entrar.
  if (!(await getSessionUser())) return {};
  const { id } = await params;
  return { title: loadVault().nodes.get(id)?.title ?? "Nodo no encontrado" };
}

/** Las pistas van de menos a más concretas; el orden en el frontmatter es este. */
const TIPO_PISTA = ["Concepto", "Herramienta o comando", "Documentación oficial"] as const;

const ESTADO = {
  completed: { titulo: "Completado", detalle: "Flag validada." },
  available: { titulo: "Disponible", detalle: "Prerequisitos cumplidos." },
  locked: { titulo: "Bloqueado", detalle: "Puedes leerlo; la flag se valida al completar los prerequisitos." },
} as const;

export default async function PaginaNodo({ params }: Props) {
  const user = await requireUser();
  const { id } = await params;
  const vault = loadVault();
  const node = vault.nodes.get(id);
  if (!node) notFound();

  recordOpen(user.id, node.id);

  const completed = getCompleted(user.id);
  const state = stateOf(node, completed);
  const revealed = getRevealedLevels(user.id, node.id);
  const html = await renderMarkdown(node.body, linkResolverFor(vault));
  const area = AREAS[node.area];
  const nextHint = revealed.length + 1;
  const attachments = attachmentInfo(node);
  const resolve = linkResolverFor(vault);
  const solvedIds = getSolvedExercises(user.id, node.id);
  const mastery = masteryOf(node, solvedIds);
  const ejercicios = await Promise.all(
    node.exercises.map(async (e) => ({ e, html: await renderMarkdown(e.prompt, resolve) })),
  );
  const TIER = ["", "A completar", "Problema", "Difícil"] as const;

  return (
    <main className="pagina nodo-pagina">
      <div>
        <p className="migas">
          <Link href="/">Árbol</Link> / {area.label} / nivel {node.trunkLevel}
        </p>
        {/* HTML generado en el servidor a partir del vault; el HTML crudo del Markdown se descarta. */}
        <article className="prosa" dangerouslySetInnerHTML={{ __html: html }} />

        {ejercicios.length > 0 && (
          <section className="ejercicios" aria-label="Ejercicios">
            <header className="ejercicios-cabecera">
              <h2>Ejercicios</h2>
              <p className="dominio" data-dominado={mastery.mastered ? "true" : undefined}>
                {mastery.solved} de {mastery.total} resueltos · dominio con {mastery.needed}
              </p>
              <span className="barra" aria-hidden="true">
                <i style={{ width: `${(mastery.solved / mastery.total) * 100}%` }} />
              </span>
            </header>
            <ol className="ejercicios-lista">
              {ejercicios.map(({ e, html: h }, i) => (
                <li key={e.id} data-resuelto={solvedIds.includes(e.id) ? "true" : undefined}>
                  <p className="meta">
                    Ejercicio {i + 1} · {TIER[e.tier]}
                    {solvedIds.includes(e.id) ? " · resuelto" : ""}
                  </p>
                  <div className="prosa ejercicio-enunciado" dangerouslySetInnerHTML={{ __html: h }} />
                  <ExerciseForm nodeId={node.id} exerciseId={e.id} solved={solvedIds.includes(e.id)} locked={state === "locked"} />
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      <aside className="lateral" aria-label="Progreso del nodo">
        <div className="estado-nodo" data-estado={state}>
          <strong>{ESTADO[state].titulo}</strong>
          <span>{ESTADO[state].detalle}</span>
        </div>

        {node.prerequisites.length > 0 && (
          <section>
            <h2>Prerequisitos</h2>
            <ul className="lista">
              {node.prerequisites.map((pre) => {
                const p = vault.nodes.get(pre);
                return (
                  <li key={pre}>
                    {p ? (
                      <Link href={`/nodo/${p.id}`} prefetch={false}>
                        <span>{p.title}</span>
                        <small>{completed.has(p.id) ? "completado" : "pendiente"}</small>
                      </Link>
                    ) : (
                      <span className="fila">
                        <span>{pre}</span>
                        <small>no existe</small>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <section>
          <h2>Reto</h2>
          {node.ctfFlag === null ? (
            node.exercises.length > 0 ? (
              <p className="nota">
                {state === "completed"
                  ? "Nodo dominado."
                  : `Este nodo se completa al resolver ${mastery.needed} de sus ${mastery.total} ejercicios.`}
              </p>
            ) : (
              <p className="nota">Este nodo aún no tiene reto. Se completa cuando se publique su flag.</p>
            )
          ) : state === "completed" ? (
            <p className="mensaje" data-tono="ok">
              Flag validada{revealed.length > 0 ? ` con ${revealed.length} de ${node.hints.length} pistas` : " sin pistas"}.
            </p>
          ) : (
            <>
              {node.exercises.length > 0 && !mastery.mastered && (
                <p className="nota">
                  Primero domina los ejercicios ({mastery.solved} de {mastery.needed} necesarios).
                </p>
              )}
              <FlagForm nodeId={node.id} locked={state === "locked" || (node.exercises.length > 0 && !mastery.mastered)} />
            </>
          )}
        </section>

        {attachments.length > 0 && (
          <section>
            <h2>Archivos del reto</h2>
            <ul className="lista adjuntos">
              {attachments.map((a) => (
                <li key={a.name}>
                  <a href={`/api/adjunto/${node.id}/${encodeURIComponent(a.name)}`} download>
                    <span>{a.name}</span>
                    <small>{formatBytes(a.size)}</small>
                  </a>
                  <code className="hash" title="SHA-256">
                    {a.sha256}
                  </code>
                </li>
              ))}
            </ul>
            <p className="nota">Ejecútalos solo en una máquina virtual o un contenedor desechable.</p>
          </section>
        )}

        {node.hints.length > 0 && (
          <section>
            <h2>
              Pistas ({revealed.length} de {node.hints.length} reveladas)
            </h2>
            {revealed.length > 0 && (
              <ol className="pistas">
                {revealed.map((level) => (
                  <li key={level}>
                    <strong>{TIPO_PISTA[level - 1]}.</strong> {node.hints[level - 1]}
                  </li>
                ))}
              </ol>
            )}
            {nextHint <= node.hints.length && state !== "completed" && (
              <form action={revealHintAction}>
                <input type="hidden" name="nodeId" value={node.id} />
                <button type="submit" className="boton boton-secundario">
                  Revelar pista {nextHint}: {TIPO_PISTA[nextHint - 1].toLowerCase()}
                </button>
                <p className="nota">Cada pista revelada queda registrada en tu progreso.</p>
              </form>
            )}
          </section>
        )}

        {node.academicSources.length > 0 && (
          <section>
            <h2>Bibliografía</h2>
            <ul className="fuentes">
              {node.academicSources.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>
        )}
      </aside>
    </main>
  );
}
