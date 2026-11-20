import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ChainForm from "@/components/ChainForm";
import CodeInfo from "@/components/CodeInfo";
import ExamRunner, { type ExamRunnerItem } from "@/components/ExamRunner";
import { requireUser } from "@/lib/auth";
import { answerSpec } from "@/lib/answer-spec";
import { expired, getExamAttempt, listExamAttempts, PAPER_GRACE_MIN, resolveItem, submitExam } from "@/lib/examen";
import { linkResolverFor, renderMarkdown } from "@/lib/markdown";
import { promptOf, sealedOf } from "@/lib/progress";
import { compactarFormulas } from "@/lib/svg-compacto";
import { loadVault } from "@/lib/vault";
import { gradeExamDevelopmentAction } from "../actions";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Examen" };

type Props = { params: Promise<{ id: string }> };

const nota10 = (s: number, m: number) => (m === 0 ? "—" : (Math.round((s / m) * 100) / 10).toFixed(1).replace(".", ","));
const minutos = (a: Date, b: Date) => Math.max(1, Math.round((b.getTime() - a.getTime()) / 60_000));
const ESTADO = { bien: "Bien", mal: "Mal", "sin-respuesta": "Sin respuesta", pendiente: "Puntúate con la rúbrica" } as const;

export default async function Examen({ params }: Props) {
  const user = await requireUser();
  const { id } = await params;
  const vault = loadVault();
  let a = getExamAttempt(user.id, Number(id));
  if (!a) notFound();
  const node = vault.nodes.get(a.nodeId);
  if (!node || !node.exam) notFound();
  // Se acabó el tiempo con el examen abierto: se entrega con lo guardado.
  if (!a.finishedAt && expired(a)) a = submitExam(user.id, vault, a.id)!;
  const resolve = linkResolverFor(vault);
  const resueltos = a.items.map((it) => ({ it, r: resolveItem(vault, node, it.ref) }));

  /* ── Reto encadenado en curso ── */
  if (!a.finishedAt && node.exam.chained) {
    const actual = resueltos[a.step];
    if (!actual?.r) notFound();
    const partes = await Promise.all([promptOf(actual.r.ex, actual.it.variant), ...(actual.r.ex.options ?? [])].map((md) => renderMarkdown(md, resolve)));
    const { fragmentos, definiciones } = compactarFormulas(partes);
    return (
      <main className="pagina">
        <section className="resumen">
          <h1>{node.title}</h1>
          <dl className="cifras">
            <div>
              <dt>Paso</dt>
              <dd>
                {a.step + 1} de {a.items.length}
              </dd>
            </div>
          </dl>
        </section>
        <ol className="pasos-reto">
          {resueltos.map(({ it, r }, i) => (
            <li key={it.ref} data-estado={i < a.step ? "hecho" : i === a.step ? "actual" : "cerrado"}>
              {i < a.step ? "✔ " : i === a.step ? "▶ " : "🔒 "}
              {r ? `${r.node.title}` : it.ref}
            </li>
          ))}
        </ol>
        {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
        <article className="ejercicios">
          <div className="prosa ejercicio-enunciado" dangerouslySetInnerHTML={{ __html: fragmentos[0] }} />
          {actual.r.ex.type === "codigo" && <CodeInfo nodeId={actual.r.node.id} ex={actual.r.ex} />}
          <ChainForm attemptId={a.id} spec={answerSpec(actual.r.node.id, actual.r.ex, actual.it.variant, actual.r.ex.options ? fragmentos.slice(1) : undefined)} />
        </article>
      </main>
    );
  }

  /* ── Examen en curso ── */
  if (!a.finishedAt) {
    const partes = await Promise.all(resueltos.map(({ it, r }) => (r ? Promise.all([promptOf(r.ex, it.variant), ...(r.ex.options ?? [])].map((md) => renderMarkdown(md, resolve))) : Promise.resolve([""]))));
    const { fragmentos, definiciones } = compactarFormulas(partes.flat());
    let cursor = 0;
    const items: ExamRunnerItem[] = resueltos.map(({ it, r }, i) => {
      const trozo = fragmentos.slice(cursor, (cursor += partes[i].length));
      const esDesarrollo = r?.ex.type === "desarrollo";
      return {
        ref: it.ref,
        html: trozo[0],
        puntos: it.puntos,
        spec: r && !esDesarrollo ? answerSpec(r.node.id, r.ex, it.variant, r.ex.options ? trozo.slice(1) : undefined) : null,
        saved: a.answers[it.ref] ?? "",
        fuente: r?.ex.type === "codigo" && r.node.id !== node.id ? { href: `/nodo/${r.node.id}`, titulo: `script de pruebas en «${r.node.title}»` } : undefined,
      };
    });
    return (
      <main className="pagina">
        <section className="resumen">
          <h1>{node.title}</h1>
        </section>
        {definiciones && <div className="formulas-definiciones" dangerouslySetInnerHTML={{ __html: definiciones }} />}
        <ExamRunner attemptId={a.id} deadline={a.deadline?.getTime() ?? null} graceMs={PAPER_GRACE_MIN * 60_000} papel={a.mode === "papel"} items={items} />
      </main>
    );
  }

  /* ── Resultado ── */
  const results = a.results ?? [];
  const pendientes = results.filter((x) => x.estado === "pendiente");
  const revelados = await Promise.all(
    pendientes.map(async (p) => {
      const r = resolveItem(vault, node, p.ref);
      const s = r && sealedOf(r.ex);
      if (!s) return null;
      const [sol, ...crit] = await Promise.all([renderMarkdown(s.solution, resolve), ...s.rubric.map((c) => renderMarkdown(c.criterio, resolve))]);
      const resp = a!.answers[p.ref]?.trim() ? await renderMarkdown(a!.answers[p.ref], resolve, "usuario") : null;
      return { ref: p.ref, sol, resp, rubric: s.rubric.map((c, i) => ({ html: crit[i], puntos: c.puntos })) };
    }),
  );
  const historial = listExamAttempts(user.id, node.id).filter((x) => x.finishedAt && x.maxScore);
  const notas = historial.map((x) => (x.score ?? 0) / (x.maxScore ?? 1));
  const mejor = notas.length ? Math.max(...notas) : 0;
  const media = notas.length ? notas.reduce((s, x) => s + x, 0) / notas.length : 0;
  const aprobado = !pendientes.length && (a.score ?? 0) >= node.exam.pass * (a.maxScore ?? 0);

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Resultado: {node.title}</h1>
        <dl className="cifras">
          <div>
            <dt>Nota{pendientes.length ? " (provisional)" : ""}</dt>
            <dd>{nota10(a.score ?? 0, a.maxScore ?? 0)} / 10</dd>
          </div>
          <div>
            <dt>Tiempo</dt>
            <dd>{minutos(a.startedAt, a.finishedAt)} min</dd>
          </div>
          <div>
            <dt>Modo</dt>
            <dd>{node.exam.chained ? "Reto" : a.mode === "papel" ? "Papel" : "Normal"}</dd>
          </div>
        </dl>
      </section>
      {pendientes.length > 0 ? (
        <p className="consejo">Te quedan {pendientes.length} desarrollos por puntuar con la rúbrica (abajo). La nota final se calcula al terminar.</p>
      ) : (
        <p className="consejo">{aprobado ? "Aprobado: el nodo queda completado." : `Por debajo del ${Math.round(node.exam.pass * 100)} % necesario. Repasa los temas de las preguntas falladas y vuelve a intentarlo.`}</p>
      )}

      <h2>Preguntas</h2>
      <table className="tabla-errores">
        <tbody>
          {results.map((x, i) => {
            const r = resolveItem(vault, node, x.ref);
            return (
              <tr key={x.ref}>
                <th scope="row">
                  {i + 1}.{" "}
                  {r && r.node.id !== node.id ? (
                    <Link href={`/nodo/${r.node.id}`} prefetch={false}>
                      {r.node.title}
                    </Link>
                  ) : (
                    "Propia del examen"
                  )}
                </th>
                <td>{ESTADO[x.estado]}</td>
                <td className="num">
                  {String(x.puntos).replace(".", ",")} / {x.max}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {revelados.map(
        (d) =>
          d && (
            <section key={d.ref} className="desarrollo-revelado">
              <h3>Desarrollo: {d.ref}</h3>
              <details open>
                <summary>Tu respuesta</summary>
                {d.resp ? <div className="prosa" dangerouslySetInnerHTML={{ __html: d.resp }} /> : <p className="nota">Hecha en papel.</p>}
              </details>
              <details open>
                <summary>Solución modelo</summary>
                <div className="prosa solucion-modelo" dangerouslySetInnerHTML={{ __html: d.sol }} />
              </details>
              <form action={gradeExamDevelopmentAction} className="rubrica">
                <input type="hidden" name="attemptId" value={a.id} />
                <input type="hidden" name="ref" value={d.ref} />
                <input type="hidden" name="criterios" value={d.rubric.length} />
                <ol>
                  {d.rubric.map((c, i) => (
                    <li key={i}>
                      <div className="prosa" dangerouslySetInnerHTML={{ __html: c.html }} />
                      <div className="puntos">
                        {Array.from({ length: c.puntos + 1 }, (_, p) => (
                          <label key={p}>
                            <input type="radio" name={`score-${i}`} value={p} required />
                            <span>{p}</span>
                          </label>
                        ))}
                        <small>de {c.puntos}</small>
                      </div>
                    </li>
                  ))}
                </ol>
                <button type="submit" className="boton">
                  Guardar la puntuación
                </button>
              </form>
            </section>
          ),
      )}

      {historial.length > 1 && (
        <>
          <h2>Tu historial en este examen</h2>
          <p className="nota">
            {historial.length} intentos · mejor {nota10(mejor, 1)} · media {nota10(media, 1)}
          </p>
          <table className="tabla-errores">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Modo</th>
                <th className="num">Tiempo</th>
                <th className="num">Nota</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((x) => (
                <tr key={x.id} data-actual={x.id === a!.id ? "true" : undefined}>
                  <th scope="row">
                    <Link href={`/examen/${x.id}`}>{x.startedAt.toISOString().slice(0, 10)}</Link>
                  </th>
                  <td>{x.mode === "papel" ? "Papel" : "Normal"}</td>
                  <td className="num">{minutos(x.startedAt, x.finishedAt!)} min</td>
                  <td className="num">{nota10(x.score ?? 0, x.maxScore ?? 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      <p>
        <Link href={`/nodo/${node.id}`}>Volver al examen</Link>
      </p>
    </main>
  );
}
