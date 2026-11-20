import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BotonImprimir from "@/components/BotonImprimir";
import { requireUser } from "@/lib/auth";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { currentVariant, promptOf } from "@/lib/progress";
import { compactarFormulas } from "@/lib/svg-compacto";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Hoja de ejercicios" };

type Props = { params: Promise<{ id: string }> };

/**
 * Hoja de ejercicios para imprimir (fase 8C): los enunciados del nodo (con los datos que tocan ahora) y espacio para
 * resolver a mano, como en un examen en papel. Sin soluciones: las respuestas se comprueban después en el nodo.
 */
export default async function Hoja({ params }: Props) {
  const user = await requireUser();
  const { id } = await params;
  const vault = loadVault();
  const node = vault.nodes.get(id);
  if (!node) notFound();
  const ejercicios = node.exercises.filter((e) => e.type !== "codigo");
  const resolve = linkResolverFor(vault);
  const partes = await Promise.all(
    ejercicios.map((e) => Promise.all([promptOf(e, currentVariant(user.id, node.id, e)), ...(e.options ?? []).map((o, i) => `${String.fromCharCode(97 + i)}) ${o}`)].map((md) => renderMarkdown(md, resolve)))),
  );
  const { fragmentos, definiciones } = compactarFormulas(partes.flat());
  let cursor = 0;
  const items = ejercicios.map((e, i) => {
    const trozo = fragmentos.slice(cursor, (cursor += partes[i].length));
    return { e, enunciado: trozo[0], opciones: trozo.slice(1) };
  });
  const hoy = new Date().toISOString().slice(0, 10);

  return (
    <main className="pagina hoja-ejercicios">
      <p className="no-imprimir">
        <Link href={`/nodo/${node.id}`}>← Volver al nodo</Link> · <BotonImprimir />
      </p>
      <header className="hoja-cabecera">
        <h1>{node.title}</h1>
        <p>
          Nombre: ______________________ · Fecha: {hoy} · Inicio: ______ · Fin: ______
        </p>
        <p className="nota">
          Sin apuntes. Escribe el desarrollo completo y comprueba después cada resultado en el nodo (los datos son los que
          te tocan ahora en Exodus). {node.exercises.some((e) => e.type === "codigo") ? "Los ejercicios de código no se imprimen." : ""}
        </p>
      </header>
      {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
      <ol className="hoja-lista">
        {items.map(({ e, enunciado, opciones }) => (
          <li key={e.id} data-desarrollo={e.type === "desarrollo" ? "true" : undefined}>
            <div className="prosa" dangerouslySetInnerHTML={{ __html: enunciado }} />
            {opciones.map((o, k) => (
              <div key={k} className="prosa hoja-opcion" dangerouslySetInnerHTML={{ __html: o }} />
            ))}
            <div className="hoja-espacio" aria-hidden="true" />
          </li>
        ))}
      </ol>
    </main>
  );
}
