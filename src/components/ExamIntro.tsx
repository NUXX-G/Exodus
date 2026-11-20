import Link from "next/link";
import { startExamAction } from "@/app/examen/actions";
import { expired, listExamAttempts } from "@/lib/examen";
import type { VaultNode } from "@/lib/vault";

const nota10 = (s: number, m: number) => (m === 0 ? "—" : (Math.round((s / m) * 100) / 10).toFixed(1).replace(".", ","));

/** Cabecera de un nodo examen o reto: cómo funciona, botones para empezar e historial de intentos. */
export default function ExamIntro({ userId, node, locked }: { userId: number; node: VaultNode; locked: boolean }) {
  const exam = node.exam!;
  const intentos = listExamAttempts(userId, node.id);
  const enCurso = intentos.find((a) => !a.finishedAt && !expired(a));
  const hechos = intentos.filter((a) => a.finishedAt);
  return (
    <section className="examen-intro" aria-label={exam.chained ? "Reto" : "Examen"}>
      <h2>{exam.chained ? "Reto encadenado" : "Simulacro de examen"}</h2>
      <ul className="lista-simple">
        <li>
          {exam.items.length} {exam.chained ? "pasos: cada uno se desbloquea al resolver el anterior" : "preguntas"}
          {exam.duration && !exam.chained ? ` · ${exam.duration} minutos` : " · sin límite de tiempo"}
        </li>
        {!exam.chained && <li>No verás si aciertas hasta entregar. Las respuestas se guardan solas.</li>}
        {exam.paper && <li>Modo papel: resuelves a mano y al final pasas los resultados (y te puntúas los desarrollos).</li>}
        <li>Se aprueba con el {Math.round(exam.pass * 100)} %. No cuenta para el dominio de los nodos de las preguntas: es un simulacro.</li>
      </ul>
      {locked ? (
        <p className="nota">Completa antes los prerequisitos.</p>
      ) : enCurso ? (
        <Link href={`/examen/${enCurso.id}`} className="boton">
          Continuar el intento en curso
        </Link>
      ) : (
        <div className="fila-botones">
          <form action={startExamAction}>
            <input type="hidden" name="nodeId" value={node.id} />
            <input type="hidden" name="mode" value="normal" />
            <button type="submit" className="boton">
              {exam.chained ? "Empezar el reto" : "Empezar el examen"}
            </button>
          </form>
          {exam.paper && !exam.chained && (
            <form action={startExamAction}>
              <input type="hidden" name="nodeId" value={node.id} />
              <input type="hidden" name="mode" value="papel" />
              <button type="submit" className="boton-secundario">
                Empezar en modo papel
              </button>
            </form>
          )}
        </div>
      )}
      {hechos.length > 0 && (
        <>
          <h3>Tus intentos</h3>
          <table className="tabla-errores">
            <tbody>
              {hechos.map((a) => (
                <tr key={a.id}>
                  <th scope="row">
                    <Link href={`/examen/${a.id}`}>{a.startedAt.toISOString().slice(0, 10)}</Link>
                  </th>
                  <td>{a.mode === "papel" ? "Papel" : "Normal"}</td>
                  <td className="num">{nota10(a.score ?? 0, a.maxScore ?? 0)} / 10</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
}
