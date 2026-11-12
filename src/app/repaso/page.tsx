import Link from "next/link";
import type { Metadata } from "next";
import ReviewForm from "@/components/ReviewForm";
import { requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { getDueReviews } from "@/lib/progress";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Repaso" };

export default async function Repaso() {
  const user = await requireUser();
  const vault = loadVault();
  const resolve = linkResolverFor(vault);
  const due = getDueReviews(user.id).filter((r) => vault.nodes.get(r.nodeId)?.exercises.some((e) => e.id === r.exerciseId));

  const items = await Promise.all(
    due.slice(0, 20).map(async (r) => {
      const node = vault.nodes.get(r.nodeId)!;
      const ex = node.exercises.find((e) => e.id === r.exerciseId)!;
      return { r, node, html: await renderMarkdown(ex.prompt, resolve) };
    }),
  );

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
        Recuperar de memoria, sin apuntes, es la técnica que más fija lo aprendido. Los ejercicios vuelven a
        pedirse a los 1, 3, 7, 16, 35 y 70 días; si fallas, vuelven mañana.
      </p>

      {items.length === 0 ? (
        <p>Nada pendiente. Vuelve mañana, o avanza con un nodo nuevo desde el <Link href="/temario">temario</Link>.</p>
      ) : (
        <ol className="repasos">
          {items.map(({ r, node, html }) => (
            <li key={`${r.nodeId}/${r.exerciseId}`}>
              <p className="meta">
                <Link href={`/nodo/${node.id}`} prefetch={false}>
                  {node.title}
                </Link>
                {" · "}repaso {r.step + 1}
              </p>
              <div className="prosa ejercicio-enunciado" dangerouslySetInnerHTML={{ __html: html }} />
              <ReviewForm nodeId={node.id} exerciseId={r.exerciseId} />
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
