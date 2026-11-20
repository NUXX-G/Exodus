import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import DiagForm from "@/components/DiagForm";
import { requireUser } from "@/lib/auth";
import { answerSpec } from "@/lib/answer-spec";
import { diagResult } from "@/lib/diagnostico";
import { currentDiagQuestion, getDiagSession } from "@/lib/diagnostico-db";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { promptOf } from "@/lib/progress";
import { compactarFormulas } from "@/lib/svg-compacto";
import { loadVault } from "@/lib/vault";
import { undoDiagnosisAction } from "../actions";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Prueba de nivel" };

type Props = { params: Promise<{ id: string }> };

export default async function SesionDiagnostico({ params }: Props) {
  const user = await requireUser();
  const { id } = await params;
  const ses = getDiagSession(user.id, Number(id));
  if (!ses) notFound();
  const vault = loadVault();
  const area = vault.areas.get(ses.area);
  const s = ses.state;

  if (ses.finishedAt || s.done) {
    const { mastered, start } = diagResult(s);
    const inicio = start ? vault.nodes.get(start) : null;
    return (
      <main className="pagina">
        <section className="resumen">
          <h1>Resultado: {area?.label ?? ses.area}</h1>
        </section>
        {inicio ? (
          <p className="consejo">
            <strong>Empieza por:</strong>{" "}
            <Link href={`/nodo/${inicio.id}`} prefetch={false}>
              {inicio.title}
            </Link>
            . Es el primer tema del área que la prueba no ha dado por sabido.
          </p>
        ) : (
          <p className="consejo">Dominas todo lo que hay en esta área. Prueba otra o repasa con la práctica intercalada.</p>
        )}
        <h2>Sondas</h2>
        <ol className="lista-simple">
          {s.history.map((h, i) => (
            <li key={i}>
              {vault.nodes.get(h.nodeId)?.title ?? h.nodeId}: {h.aciertos} de {h.preguntas} · {h.pass ? "dominado" : "por estudiar"}
            </li>
          ))}
        </ol>
        {mastered.length > 0 && (
          <>
            <h2>Marcados como «dominado por diagnóstico» ({mastered.length})</h2>
            <p className="nota">
              Desbloquean lo que sigue, pero no cuentan como completados. Si alguno no lo dominas de verdad, quita su marca
              (aquí o en el propio nodo) y estúdialo.
            </p>
            <ul className="lista-simple">
              {mastered.map((nid) => (
                <li key={nid} className="fila-marca">
                  <Link href={`/nodo/${nid}`} prefetch={false}>
                    {vault.nodes.get(nid)?.title ?? nid}
                  </Link>
                  <form action={undoDiagnosisAction}>
                    <input type="hidden" name="nodeId" value={nid} />
                    <button type="submit" className="boton-reporte">
                      quitar marca
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          </>
        )}
        <p>
          <Link href="/diagnostico">Volver a la prueba de nivel</Link>
        </p>
      </main>
    );
  }

  const q = currentDiagQuestion(s, vault);
  if (!q) notFound();
  const partes = await Promise.all([promptOf(q.ex, q.variant), ...(q.ex.options ?? [])].map((md) => renderMarkdown(md, linkResolverFor(vault))));
  const { fragmentos, definiciones } = compactarFormulas(partes);
  const spec = answerSpec(q.node.id, q.ex, q.variant, q.ex.options ? fragmentos.slice(1) : undefined);
  const restantes = Math.max(1, Math.ceil(Math.log2(Math.max(2, s.hi - s.lo + 1))));

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Prueba de nivel: {area?.label ?? ses.area}</h1>
        <dl className="cifras">
          <div>
            <dt>Pregunta</dt>
            <dd>{q.numero}</dd>
          </div>
          <div>
            <dt>Temas por sondear (aprox.)</dt>
            <dd>{restantes}</dd>
          </div>
        </dl>
      </section>
      <p className="nota">
        Sin apuntes. Si no lo sabes, pulsa «No lo sé». No verás si aciertas hasta el final: así la prueba no te influye.
      </p>
      {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
      <article className="ejercicios">
        <p className="meta">Tema: {q.node.title}</p>
        <div className="prosa ejercicio-enunciado" dangerouslySetInnerHTML={{ __html: fragmentos[0] }} />
        <DiagForm sessionId={ses.id} spec={spec} />
      </article>
    </main>
  );
}
