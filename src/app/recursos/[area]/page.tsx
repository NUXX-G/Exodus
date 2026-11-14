import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { areaOf } from "@/lib/areas";
import { requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { loadRecursos } from "@/lib/recursos";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ area: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const p = loadRecursos().paginas.find((x) => x.area === area);
  return { title: p ? p.titulo : "Recursos" };
}

/** Página de recursos recomendados de una rama. */
export default async function RecursosArea({ params }: Props) {
  await requireUser();
  const { area } = await params;
  const pagina = loadRecursos().paginas.find((x) => x.area === area);
  if (!pagina) notFound();
  const vault = loadVault();
  const info = areaOf(vault.areas, pagina.area);
  const html = await renderMarkdown(pagina.cuerpo, linkResolverFor(vault));

  return (
    <main className="pagina recursos-pagina">
      <p className="migas">
        <Link href="/recursos">Recursos</Link> / {info.label}
      </p>
      <h1 className="recursos-titulo" style={{ "--color-area": info.color } as React.CSSProperties}>
        {pagina.titulo}
      </h1>
      {pagina.resumen && <p className="nota">{pagina.resumen}</p>}
      {/* HTML generado en el servidor a partir del vault; el HTML crudo del Markdown se descarta. */}
      <article className="prosa" dangerouslySetInnerHTML={{ __html: html }} />
      <p className="nota">
        {pagina.revisado ? `Enlaces comprobados el ${pagina.revisado}. ` : ""}
        <Link href={`/temario?area=${pagina.area}`}>Ver el temario de {info.label}</Link>
      </p>
    </main>
  );
}
