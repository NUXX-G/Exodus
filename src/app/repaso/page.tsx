import Link from "next/link";
import type { Metadata } from "next";
import ReviewForm from "@/components/ReviewForm";
import { requireUser } from "@/lib/auth";
import { answerSpec } from "@/lib/answer-spec";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { compactarFormulas } from "@/lib/svg-compacto";
import { getDueReviews, promptOf, reviewQuestion } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Repaso" };

const CLASE = {
  variante: "Mismo problema, datos nuevos",
  banco: "Pregunta nueva del mismo tema",
  igual: "Repetición",
} as const;

export default async function Repaso() {
  const user = await requireUser();
  const vault = loadVault();
  const resolve = linkResolverFor(vault);
  const due = getDueReviews(user.id).filter((r) => vault.nodes.get(r.nodeId)?.exercises.some((e) => e.id === r.exerciseId));

  const crudos = await Promise.all(
    due.slice(0, 20).map(async (r) => {
      const node = vault.nodes.get(r.nodeId)!;
      const scheduled = node.exercises.find((e) => e.id === r.exerciseId)!;
      const q = reviewQuestion(user.id, node, scheduled, r.step);
      const partes = await Promise.all([promptOf(q.ex, q.variant), ...(q.ex.options ?? [])].map((md) => renderMarkdown(md, resolve)));
      return { r, node, q, partes };
    }),
  );
  // Todas las fórmulas de la página comparten glifos (svg-compacto.ts): se aplanan y se reparten después.
  const { fragmentos, definiciones } = compactarFormulas(crudos.flatMap((c) => c.partes));
  let cursor = 0;
  const items = crudos.map((c) => {
    const trozo = fragmentos.slice(cursor, (cursor += c.partes.length));
    return { ...c, html: trozo[0], spec: answerSpec(c.node.id, c.q.ex, c.q.variant, c.q.ex.options ? trozo.slice(1) : undefined) };
  });

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Repaso espaciado</h1>
        <dl className="cifras">
          <div>
            <dt>Pendientes hoy</dt>
            <dd>{due.length}</dd>
          </div>
        </dl>
      </section>
      <p className="nota">
        Recuperar de memoria, sin apuntes, es la técnica que más fija lo aprendido. El repaso no repite el enunciado
        que ya resolviste: unas veces es el mismo problema con otros datos y otras una pregunta distinta del mismo
        tema. Vuelve a los 1, 3, 7, 16, 35 y 70 días; si fallas, vuelve mañana.
      </p>

      {items.length === 0 ? (
        <p>Nada pendiente. Vuelve mañana, o avanza con un nodo nuevo desde el <Link href="/temario">temario</Link>.</p>
      ) : (
        <>
          {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
          <ol className="repasos">
            {items.map(({ r, node, q, html, spec }) => (
              <li key={`${r.nodeId}/${r.exerciseId}`}>
                <p className="meta">
                  <Link href={`/nodo/${node.id}`} prefetch={false}>
                    {node.title}
                  </Link>
                  {" · "}repaso {r.step + 1}
                  {" · "}
                  {CLASE[q.kind]}
                </p>
                <div className="prosa ejercicio-enunciado" dangerouslySetInnerHTML={{ __html: html }} />
                <ReviewForm exerciseId={r.exerciseId} spec={spec} />
              </li>
            ))}
          </ol>
        </>
      )}
    </main>
  );
}
