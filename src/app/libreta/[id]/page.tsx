import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DeleteNoteButton, NoteForm } from "@/components/NoteForms";
import { getSessionUser, requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { compactarFormulas } from "@/lib/svg-compacto";
import { getNote, listDrawings } from "@/lib/notes";
import { svgDe, type Trazo } from "@/lib/dibujo";
import DibujosNota from "@/components/DibujosNota";
import { studyOrder } from "@/lib/study";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await getSessionUser();
  if (!user) return {};
  const note = getNote(user.id, Number((await params).id));
  return { title: note ? note.title : "Nota no encontrada" };
}

export default async function Nota({ params }: Props) {
  const user = await requireUser();
  const id = Number((await params).id);
  const note = Number.isInteger(id) ? getNote(user.id, id) : null;
  if (!note) notFound();
  const vault = loadVault();
  const nodo = note.nodeId ? vault.nodes.get(note.nodeId) : undefined;
  const {
    fragmentos: [html],
    definiciones,
  } = compactarFormulas([await renderMarkdown(note.body || "_Nota vacía._", linkResolverFor(vault), "usuario")]);
  const nodos = studyOrder(vault).map((n) => ({ id: n.id, title: n.title }));
  const dibujos = listDrawings(user.id, note.id).map((d) => {
    const trazos = JSON.parse(d.strokes) as Trazo[];
    return { id: d.id, trazos, svg: svgDe(trazos) };
  });

  return (
    <main className="pagina nota-pagina">
      <p className="migas">
        <Link href="/libreta">Libreta</Link>
        {nodo && (
          <>
            {" "}
            · nodo <Link href={`/nodo/${nodo.id}`}>{nodo.title}</Link>
          </>
        )}
      </p>
      <h1>{note.title}</h1>
      {/* HTML generado en el servidor por el mismo motor que los nodos: el HTML crudo se descarta y se sanea. */}
      {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
      <article className="prosa" dangerouslySetInnerHTML={{ __html: html }} />

      <DibujosNota noteId={note.id} dibujos={dibujos} />

      <details className="editar-nota">
        <summary>Editar</summary>
        <NoteForm note={note} nodes={nodos} />
        <DeleteNoteButton id={note.id} />
      </details>
    </main>
  );
}
