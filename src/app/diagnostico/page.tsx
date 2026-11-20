import Link from "next/link";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth";
import { lastDiagnostics, marksByArea } from "@/lib/diagnostico-db";
import { getCompleted } from "@/lib/progress";
import { loadVault } from "@/lib/vault";
import { startDiagnosticAction, undoDiagnosisAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Prueba de nivel" };

const fecha = (d: Date) => d.toISOString().slice(0, 10);

export default async function Diagnostico() {
  const user = await requireUser();
  const vault = loadVault();
  const ultimas = lastDiagnostics(user.id);
  const marcas = marksByArea(user.id);
  const completados = getCompleted(user.id);
  const areas = [...vault.areas.values()]
    .map((a) => ({ ...a, nodos: [...vault.nodes.values()].filter((n) => n.area === a.id) }))
    .filter((a) => a.nodos.length > 0);

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Prueba de nivel</h1>
      </section>
      <p className="nota">
        Si ya sabes parte de un área, no hace falta empezar desde el principio. La prueba te hace unas pocas preguntas
        (de 6 a 20), elige cada una según cómo respondiste las anteriores y busca el primer tema que no dominas. Los temas
        anteriores quedan marcados como <strong>«dominado por diagnóstico»</strong>: desbloquean lo que sigue, pero
        <em> no</em> cuentan como completados, y puedes quitar la marca cuando quieras. Responde sin apuntes y, si no
        sabes algo, pulsa «No lo sé»: adivinar solo te haría saltarte temas que necesitas. Puedes repetirla cuando
        quieras.
      </p>
      <ul className="lista-diagnostico">
        {areas.map((a) => {
          const u = ultimas.get(a.id);
          const enCurso = u && !u.finishedAt;
          const inicio = u?.startNodeId ? vault.nodes.get(u.startNodeId) : null;
          const hechos = a.nodos.filter((n) => completados.has(n.id)).length;
          return (
            <li key={a.id} style={{ ["--color-area" as string]: a.color }}>
              <div>
                <h2>{a.label}</h2>
                <p className="meta">
                  {a.nodos.length} nodos · {hechos} completados · {marcas.get(a.id) ?? 0} dominados por diagnóstico
                </p>
                {u?.finishedAt && (
                  <p>
                    Última prueba ({fecha(u.finishedAt)}):{" "}
                    {inicio ? (
                      <>
                        empieza por{" "}
                        <Link href={`/nodo/${inicio.id}`} prefetch={false}>
                          {inicio.title}
                        </Link>
                      </>
                    ) : (
                      "dominas todo lo que hay en el área."
                    )}
                  </p>
                )}
              </div>
              <div className="fila-botones">
                {enCurso ? (
                  <Link href={`/diagnostico/${u.id}`} className="boton">
                    Continuar la prueba
                  </Link>
                ) : (
                  <form action={startDiagnosticAction}>
                    <input type="hidden" name="area" value={a.id} />
                    <button type="submit" className="boton">
                      {u ? "Repetir la prueba" : "Hacer la prueba"}
                    </button>
                  </form>
                )}
                {(marcas.get(a.id) ?? 0) > 0 && (
                  <form action={undoDiagnosisAction}>
                    <input type="hidden" name="area" value={a.id} />
                    <button type="submit" className="boton-secundario">
                      Quitar las marcas
                    </button>
                  </form>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
