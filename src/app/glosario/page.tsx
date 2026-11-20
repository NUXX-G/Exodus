import Link from "next/link";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { compactarFormulas } from "@/lib/svg-compacto";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Glosario" };

const sinAcentos = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** La «leyenda» de Exodus: cada tecnicismo con una explicación llana, su definición formal y dónde se estudia. */
export default async function Glosario({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  await requireUser();
  const vault = loadVault();
  const { q = "" } = await searchParams;
  const busca = sinAcentos(q.trim()).slice(0, 80);
  const terminos = vault.glosario
    .filter((t) => !busca || sinAcentos([t.termino, ...t.sinonimos, t.llano].join(" ")).includes(busca))
    .sort((a, b) => a.termino.localeCompare(b.termino, "es"));
  const resolve = linkResolverFor(vault);
  const crudos = await Promise.all(terminos.map((t) => (t.formal ? renderMarkdown(t.formal, resolve, "usuario") : Promise.resolve(""))));
  const { fragmentos, definiciones } = compactarFormulas(crudos);
  const porArea = new Map<string, number[]>();
  terminos.forEach((t, i) => porArea.set(t.area, [...(porArea.get(t.area) ?? []), i]));

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Glosario</h1>
      </section>
      <p className="nota">
        Cada término técnico con una explicación para cualquiera, su definición rigurosa y el tema donde se explica. En el
        texto de los nodos, la primera vez que aparece un término está subrayado con puntos: pasa el ratón (o pulsa) para
        ver qué significa.
      </p>
      <form method="get" action="/glosario" className="filtro-area">
        <input type="search" name="q" defaultValue={q} placeholder="Buscar un término" aria-label="Buscar un término" />
        <button type="submit" className="boton-secundario">
          Buscar
        </button>
      </form>
      {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
      {terminos.length === 0 && <p>No hay ningún término{busca ? " que coincida" : ""}.</p>}
      {[...porArea].map(([area, idx]) => (
        <section key={area}>
          <h2>{vault.areas.get(area)?.label ?? area}</h2>
          <ul className="glosario-lista">
            {idx.map((i) => {
              const t = terminos[i];
              const nodo = vault.nodes.get(t.nodo);
              return (
                <li key={t.slug} id={t.slug}>
                  <h3>{t.termino}</h3>
                  <p>{t.llano}</p>
                  {t.formal && (
                    <details>
                      <summary>Definición formal</summary>
                      <div className="prosa" dangerouslySetInnerHTML={{ __html: fragmentos[i] }} />
                    </details>
                  )}
                  {nodo && (
                    <p className="meta">
                      Se explica en{" "}
                      <Link href={`/nodo/${nodo.id}`} prefetch={false}>
                        {nodo.title}
                      </Link>
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </main>
  );
}
