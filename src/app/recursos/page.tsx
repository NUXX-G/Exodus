import Link from "next/link";
import type { Metadata } from "next";
import { areaOf } from "@/lib/areas";
import { requireUser } from "@/lib/auth";
import { loadRecursos } from "@/lib/recursos";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Recursos" };

/** Índice de las páginas de recursos recomendados, en el orden de las áreas. */
export default async function Recursos() {
  await requireUser();
  const vault = loadVault();
  const orden = [...vault.areas.keys()];
  const paginas = loadRecursos().paginas.sort((a, b) => {
    const ia = orden.indexOf(a.area), ib = orden.indexOf(b.area);
    return (ia < 0 ? 1e9 : ia) - (ib < 0 ? 1e9 : ib) || a.titulo.localeCompare(b.titulo, "es");
  });

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Recursos</h1>
        <p className="nota">
          Canales de vídeo, cursos y libros recomendados por rama, en español y en inglés, para complementar los nodos. Cada
          recomendación dice qué aporta y para qué nivel es. Ningún vídeo sustituye a resolver los ejercicios: úsalos para
          ver otra explicación de lo que estás estudiando, no para sentir que lo has aprendido.
        </p>
      </section>
      {paginas.length === 0 ? (
        <p className="nota">Todavía no hay recursos publicados.</p>
      ) : (
        <ul className="recursos-indice">
          {paginas.map((p) => {
            const area = areaOf(vault.areas, p.area);
            return (
              <li key={p.area} style={{ "--color-area": area.color } as React.CSSProperties}>
                <Link href={`/recursos/${p.area}`} prefetch={false}>
                  <span className="titulo">{area.label}</span>
                  {p.resumen && <span className="meta">{p.resumen}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
