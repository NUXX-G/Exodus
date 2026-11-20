import Link from "next/link";
import type { Metadata } from "next";
import ReviewForm from "@/components/ReviewForm";
import DevelopmentForm from "@/components/DevelopmentForm";
import { devInitial } from "@/lib/desarrollo-inicial";
import { requireUser } from "@/lib/auth";
import { answerSpec } from "@/lib/answer-spec";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { compactarFormulas } from "@/lib/svg-compacto";
import { getDueReviews, interleavedSet, promptOf, reviewQuestion } from "@/lib/progress";
import { loadVault, type VaultExercise, type VaultNode } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Repaso" };

const CLASE = {
  variante: "Mismo problema, datos nuevos",
  banco: "Pregunta nueva del mismo tema",
  igual: "Repetición",
} as const;

type Props = { searchParams: Promise<{ modo?: string; area?: string; ronda?: string }> };

interface Item {
  clave: string;
  node: VaultNode;
  ex: VaultExercise;
  variant: number | null;
  /** Ejercicio programado (repaso) o el propio ejercicio (práctica intercalada). */
  programado: string;
  meta: string;
}

export default async function Repaso({ searchParams }: Props) {
  const user = await requireUser();
  const vault = loadVault();
  const resolve = linkResolverFor(vault);
  const { modo, area: areaParam, ronda: rondaParam } = await searchParams;
  const intercalado = modo === "intercalado";
  const area = areaParam && vault.areas.has(areaParam) ? areaParam : null;
  const ronda = Math.max(0, Math.min(1000, Number(rondaParam) || 0));

  const due = getDueReviews(user.id).filter((r) => vault.nodes.get(r.nodeId)?.exercises.some((e) => e.id === r.exerciseId));
  let items: Item[];
  if (intercalado) {
    items = interleavedSet(user.id, vault, area, 12, ronda).map((p) => ({
      clave: `${p.node.id}/${p.ex.id}`,
      node: p.node,
      ex: p.ex,
      variant: p.variant,
      programado: p.ex.id,
      meta: p.ex.review ? "Pregunta de repaso" : p.variant !== null ? "Datos nuevos" : "Ejercicio del nodo",
    }));
  } else {
    items = due.slice(0, 20).map((r) => {
      const node = vault.nodes.get(r.nodeId)!;
      const q = reviewQuestion(user.id, node, node.exercises.find((e) => e.id === r.exerciseId)!, r.step);
      return { clave: `${r.nodeId}/${r.exerciseId}`, node, ex: q.ex, variant: q.variant, programado: r.exerciseId, meta: `repaso ${r.step + 1} · ${CLASE[q.kind]}` };
    });
  }

  const partes = await Promise.all(items.map((it) => Promise.all([promptOf(it.ex, it.variant), ...(it.ex.options ?? [])].map((md) => renderMarkdown(md, resolve)))));
  // Todas las fórmulas de la página comparten glifos (svg-compacto.ts): se aplanan y se reparten después.
  const { fragmentos, definiciones } = compactarFormulas(partes.flat());
  let cursor = 0;
  const iniciales = await Promise.all(items.map((it) => (it.ex.type === "desarrollo" ? devInitial(user.id, it.node.id, it.ex, true) : null)));
  const listos = items.map((it, i) => {
    const trozo = fragmentos.slice(cursor, (cursor += partes[i].length));
    return { ...it, html: trozo[0], inicial: iniciales[i], spec: answerSpec(it.node.id, it.ex, it.variant, it.ex.options ? trozo.slice(1) : undefined) };
  });
  const enlace = (m: string | null, a: string | null, r = 0) => {
    const q = new URLSearchParams();
    if (m) q.set("modo", m);
    if (a) q.set("area", a);
    if (r) q.set("ronda", String(r));
    const s = q.toString();
    return `/repaso${s ? `?${s}` : ""}`;
  };

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Repaso</h1>
        <dl className="cifras">
          <div>
            <dt>Pendientes hoy</dt>
            <dd>{due.length}</dd>
          </div>
        </dl>
      </section>
      <nav className="pestanas" aria-label="Modo de repaso">
        <Link href={enlace(null, null)} aria-current={!intercalado ? "page" : undefined}>
          Pendientes hoy
        </Link>
        <Link href={enlace("intercalado", area)} aria-current={intercalado ? "page" : undefined}>
          Práctica intercalada
        </Link>
      </nav>

      {intercalado ? (
        <>
          <p className="nota">
            Preguntas mezcladas de nodos que ya dominas, alternando temas: obliga a reconocer qué herramienta usar en cada
            problema, como en un examen. No cambia tu dominio; si fallas una, vuelve a tu repaso de mañana.
          </p>
          <form className="filtro-area" method="get" action="/repaso">
            <input type="hidden" name="modo" value="intercalado" />
            <label>
              Área{" "}
              <select name="area" defaultValue={area ?? ""}>
                <option value="">Todas</option>
                {[...vault.areas.values()].map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.label}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="boton-secundario">
              Filtrar
            </button>
            <Link href={enlace("intercalado", area, ronda + 1)} className="boton-secundario">
              Otra tanda
            </Link>
          </form>
        </>
      ) : (
        <p className="nota">
          Recuperar de memoria, sin apuntes, es la técnica que más fija lo aprendido. El repaso no repite el enunciado que
          ya resolviste: unas veces es el mismo problema con otros datos y otras una pregunta distinta del mismo tema.
          Vuelve a los 1, 3, 7, 16, 35 y 70 días; si fallas, mañana. Primero salen los temas en los que has fallado
          hace poco (sobre todo por concepto).
        </p>
      )}

      {listos.length === 0 ? (
        intercalado ? (
          <p>Aún no has completado nodos{area ? " de esta área" : ""}. La práctica intercalada usa los nodos que ya dominas.</p>
        ) : (
          <p>
            Nada pendiente. Prueba la <Link href={enlace("intercalado", null)}>práctica intercalada</Link> o avanza con un nodo
            nuevo desde el <Link href="/temario">temario</Link>.
          </p>
        )
      ) : (
        <>
          {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
          <ol className="repasos">
            {listos.map((it) => (
              <li key={it.clave}>
                <p className="meta">
                  <Link href={`/nodo/${it.node.id}`} prefetch={false}>
                    {it.node.title}
                  </Link>
                  {" · "}
                  {it.meta}
                </p>
                <div className="prosa ejercicio-enunciado" dangerouslySetInnerHTML={{ __html: it.html }} />
                {it.inicial ? (
                  <DevelopmentForm
                    nodeId={it.node.id}
                    exerciseId={it.ex.id}
                    mode={intercalado ? "intercalado" : "repaso"}
                    reviewOf={intercalado ? undefined : it.programado}
                    initial={it.inicial}
                  />
                ) : (
                  <ReviewForm exerciseId={it.programado} spec={it.spec} practica={intercalado} />
                )}
              </li>
            ))}
          </ol>
        </>
      )}
    </main>
  );
}
