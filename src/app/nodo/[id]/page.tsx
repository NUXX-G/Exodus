import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ExerciseForm from "@/components/ExerciseForm";
import FlagForm from "@/components/FlagForm";
import { NoteForm } from "@/components/NoteForms";
import { listNotes } from "@/lib/notes";
import { areaOf } from "@/lib/areas";
import { getSessionUser, requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { compactarFormulas } from "@/lib/svg-compacto";
import { getCompleted, getRevealedLevels, getSolvedExercises, masteryOf, recordOpen, stateOf } from "@/lib/progress";
import { loadRecursos } from "@/lib/recursos";
import { studyOrder } from "@/lib/study";
import { attachmentInfo, KIND_LABEL, loadVault } from "@/lib/vault";
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
  completed: { titulo: "Completado", detalle: "Dominio alcanzado o flag validada." },
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
  const area = areaOf(vault.areas, node.area);
  const nextHint = revealed.length + 1;
  const attachments = attachmentInfo(node);
  const resolve = linkResolverFor(vault);
  const solvedIds = getSolvedExercises(user.id, node.id);
  const mastery = masteryOf(node, solvedIds);
  // Texto y enunciados se renderizan por separado (caché por fragmento) y luego comparten una sola copia de los
  // glifos y la hoja de estilo de MathJax (svg-compacto.ts).
  const crudos = await Promise.all([node.body, ...node.exercises.map((e) => e.prompt)].map((md) => renderMarkdown(md, resolve)));
  const { fragmentos, definiciones } = compactarFormulas(crudos);
  const html = fragmentos[0];
  const ejercicios = node.exercises.map((e, i) => ({ e, html: fragmentos[i + 1] }));
  const TIER = ["", "A completar", "Problema", "Difícil"] as const;
  const misNotas = listNotes(user.id, node.id);
  // Lo que este nodo desbloquea: los nodos que lo tienen como prerequisito.
  const siguientes = [...vault.nodes.values()]
    .filter((n) => n.prerequisites.includes(node.id))
    .sort((a, b) => a.trunkLevel - b.trunkLevel || a.title.localeCompare(b.title, "es"));
  // Anterior y siguiente en el orden de estudio de la misma área.
  const deLaRama = studyOrder(vault).filter((n) => n.area === node.area);
  const pos = deLaRama.findIndex((n) => n.id === node.id);
  const anterior = pos > 0 ? deLaRama[pos - 1] : null;
  const siguiente = pos >= 0 && pos < deLaRama.length - 1 ? deLaRama[pos + 1] : null;

  return (
    <main className="pagina nodo-pagina">
      <div>
        <Link href={`/temario?area=${node.area}`} className="boton-volver">
          ← Volver al temario
        </Link>
        <p className="migas">
          <Link href="/">Árbol</Link> / <Link href="/temario">Temario</Link> /{" "}
          <Link href={`/temario?area=${node.area}`}>{area.label}</Link> / nivel {node.trunkLevel}
          {loadRecursos().paginas.some((p) => p.area === node.area) && (
            <>
              {" · "}
              <Link href={`/recursos/${node.area}`}>recursos de la rama</Link>
            </>
          )}
        </p>
        {node.kind !== "teoria" && (
          <p className="tipo-nodo" data-tipo={node.kind}>
            {KIND_LABEL[node.kind]}
            {node.kind === "proyecto" ? ": cada hito se comprueba con la salida de tu propio programa." : ": descarga los archivos, analízalos y entrega la flag."}
          </p>
        )}
        {/* HTML generado en el servidor a partir del vault; el HTML crudo del Markdown se descarta. */}
        {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
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

        <nav className="nodo-navegacion" aria-label="Navegación entre nodos">
          {anterior ? (
            <Link href={`/nodo/${anterior.id}`} prefetch={false} className="anterior">
              <small>← Anterior en {area.label}</small>
              <span>{anterior.title}</span>
            </Link>
          ) : (
            <span />
          )}
          <Link href={`/temario?area=${node.area}`} className="volver">
            Volver al temario
          </Link>
          {siguiente ? (
            <Link href={`/nodo/${siguiente.id}`} prefetch={false} className="siguiente">
              <small>Siguiente en {area.label} →</small>
              <span>{siguiente.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
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

        {siguientes.length > 0 && (
          <section>
            <h2>Abre paso a</h2>
            <ul className="lista">
              {siguientes.map((n) => {
                const st = stateOf(n, completed);
                return (
                  <li key={n.id}>
                    <Link href={`/nodo/${n.id}`} prefetch={false}>
                      <span>{n.title}</span>
                      <small>{st === "completed" ? "completado" : st === "available" ? "disponible" : "bloqueado"}</small>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        <section>
          <h2>Tus notas</h2>
          {misNotas.length > 0 && (
            <ul className="lista">
              {misNotas.map((n) => (
                <li key={n.id}>
                  <Link href={`/libreta/${n.id}`} prefetch={false}>
                    <span>{n.title}</span>
                    <small>{n.updatedAt.toLocaleDateString("es-ES", { day: "numeric", month: "short" })}</small>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <details className="nueva-nota">
            <summary>Apuntar algo de este nodo</summary>
            <NoteForm fixedNode={node.id} compact />
          </details>
        </section>

        {attachments.length > 0 && (
          <section>
            <h2>Archivos adjuntos</h2>
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
            <p className="nota">
              Comprueba el SHA-256 tras descargarlos. Los ejecutables, ábrelos solo en una máquina virtual o un contenedor
              desechable.
            </p>
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
