import Link from "next/link";
import type { Metadata } from "next";
import { AREAS } from "@/lib/areas";
import { requireUser } from "@/lib/auth";
import { searchVault } from "@/lib/study";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Buscar" };

type Props = { searchParams: Promise<{ q?: string }> };

export default async function Buscar({ searchParams }: Props) {
  await requireUser();
  const q = ((await searchParams).q ?? "").slice(0, 120);
  const hits = q.trim() ? searchVault(loadVault(), q) : [];

  return (
    <main className="pagina buscar">
      <section className="resumen">
        <h1>Buscar en el temario</h1>
      </section>
      <form action="/buscar" method="get" className="buscador" role="search">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Por ejemplo: transformada de Fourier, canario de pila, entropía..."
          aria-label="Texto a buscar"
          autoFocus
        />
        <button type="submit">Buscar</button>
      </form>

      {q.trim() && (
        <p className="nota">
          {hits.length === 0 ? "Sin resultados." : `${hits.length} ${hits.length === 1 ? "nodo" : "nodos"}.`} Deben
          aparecer todas las palabras.
        </p>
      )}

      <ul className="resultados">
        {hits.map(({ node, snippet }) => (
          <li key={node.id}>
            <Link href={`/nodo/${node.id}`} prefetch={false}>
              <strong>{node.title}</strong>
              <span className="meta">
                {AREAS[node.area].label} · nivel {node.trunkLevel}
              </span>
              <span className="fragmento">{snippet}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
