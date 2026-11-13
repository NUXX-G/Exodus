import Link from "next/link";
import type { Metadata } from "next";
import { NoteForm } from "@/components/NoteForms";
import { requireUser } from "@/lib/auth";
import { listNotes } from "@/lib/notes";
import { studyOrder } from "@/lib/study";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Libreta" };

type Props = { searchParams: Promise<{ q?: string }> };

export default async function Libreta({ searchParams }: Props) {
  const user = await requireUser();
  const q = ((await searchParams).q ?? "").trim().toLowerCase().slice(0, 100);
  const vault = loadVault();
  const todas = listNotes(user.id);
  const notas = q ? todas.filter((n) => (n.title + "\n" + n.body).toLowerCase().includes(q)) : todas;
  const nodos = studyOrder(vault).map((n) => ({ id: n.id, title: n.title }));
  const fecha = (d: Date) => d.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });

  return (
    <main className="pagina libreta">
      <section className="resumen">
        <h1>Libreta</h1>
        <p className="nota">
          Tus apuntes, solo tuyos. Admiten Markdown, fórmulas y enlaces a nodos con <code>[[id-del-nodo]]</code>. Si conectas
          Obsidian desde <Link href="/cuenta">Cuenta</Link>, cada nota aparece en la carpeta <code>Exodus/Libreta</code> de tu bóveda.
        </p>
      </section>

      <details className="nueva-nota" open={todas.length === 0}>
        <summary>Nueva nota</summary>
        <NoteForm nodes={nodos} />
      </details>

      <form action="/libreta" method="get" className="buscador" role="search">
        <input type="search" name="q" defaultValue={q} placeholder="Buscar en tus notas" aria-label="Buscar en tus notas" />
        <button type="submit">Buscar</button>
      </form>

      {notas.length === 0 ? (
        <p className="nota">{todas.length === 0 ? "Aún no tienes notas." : "Ninguna nota contiene ese texto."}</p>
      ) : (
        <ul className="lista notas-lista">
          {notas.map((n) => {
            const nodo = n.nodeId ? vault.nodes.get(n.nodeId) : undefined;
            return (
              <li key={n.id}>
                <Link href={`/libreta/${n.id}`} prefetch={false}>
                  <span>{n.title}</span>
                  <small>
                    {nodo ? `${nodo.title} · ` : ""}
                    {fecha(n.updatedAt)}
                  </small>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
