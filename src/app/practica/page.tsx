import Link from "next/link";
import type { Metadata } from "next";
import { areaOf } from "@/lib/areas";
import { requireUser } from "@/lib/auth";
import { computeStates, getCompleted, getDiagnosed, getSolvedExercises, masteryOf } from "@/lib/progress";
import { studyOrder } from "@/lib/study";
import { loadVault, type NodeKind } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Práctica" };

const ESTADOS = { completed: "Completado", diagnosed: "Dominado (diagnóstico)", available: "Disponible", locked: "Bloqueado" } as const;

const DESCRIPCION: Record<Exclude<NodeKind, "teoria">, string> = {
  proyecto:
    "Trabajos grandes por hitos: construyes algo real de principio a fin y cada hito se comprueba con la salida de tu programa para una entrada fija.",
  laboratorio:
    "Retos prácticos con archivos que descargas y analizas (registros, capturas, binarios, datos de sensores…) hasta encontrar la flag.",
  examen:
    "Simulacros con tiempo (como el examen real, también en papel) y retos encadenados en los que cada paso se desbloquea al resolver el anterior. Tu historial guarda cada nota.",
};

const TITULO = { proyecto: "Proyectos", laboratorio: "Laboratorios", examen: "Simulacros y retos" } as const;

/** Proyectos y laboratorios de todas las ramas, con el progreso del usuario en cada uno. */
export default async function Practica() {
  const user = await requireUser();
  const vault = loadVault();
  const states = computeStates(vault, getCompleted(user.id), getDiagnosed(user.id));
  const orden = studyOrder(vault);

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Práctica</h1>
        <p className="nota">
          La teoría de cada nodo se afianza aquí. Los bloqueados se abren al completar sus prerrequisitos; puedes leer su enunciado
          siempre.
        </p>
      </section>

      {(["examen", "proyecto", "laboratorio"] as const).map((kind) => {
        const lista = orden.filter((n) => n.kind === kind);
        return (
          <section key={kind} className="temario-nivel">
            <h2>{TITULO[kind]}</h2>
            <p className="nota">{DESCRIPCION[kind]}</p>
            {lista.length === 0 ? (
              <p className="nota">Todavía no hay ninguno publicado.</p>
            ) : (
              <ul className="temario-lista">
                {lista.map((n) => {
                  const st = states.get(n.id)!;
                  const m = masteryOf(n, getSolvedExercises(user.id, n.id));
                  return (
                    <li key={n.id} data-estado={st}>
                      <Link href={`/nodo/${n.id}`} prefetch={false}>
                        <span className="titulo">
                          <i className="punto" style={{ "--color-area": areaOf(vault.areas, n.area).color } as React.CSSProperties} />
                          {n.title}
                        </span>
                        <span className="meta">
                          {areaOf(vault.areas, n.area).label}
                          {m.total > 0 ? ` · ${m.solved} de ${m.total} hitos` : ""}
                          {n.exam ? ` · ${n.exam.items.length} ${n.exam.chained ? "pasos" : "preguntas"}${n.exam.duration ? ` · ${n.exam.duration} min` : ""}` : ""}
                          {n.ctfFlag ? " · con flag" : ""}
                          {n.attachments.length > 0 ? ` · ${n.attachments.length} archivo${n.attachments.length > 1 ? "s" : ""}` : ""}
                        </span>
                        <span className="estado" data-estado={st}>
                          {ESTADOS[st]}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        );
      })}
    </main>
  );
}
