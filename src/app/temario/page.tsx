import Link from "next/link";
import type { Metadata } from "next";
import { areaOf } from "@/lib/areas";
import { requireUser } from "@/lib/auth";
import { computeStates, getCompleted, getDiagnosed } from "@/lib/progress";
import { estimateMinutes, formatMinutes, studyOrder } from "@/lib/study";
import { KIND_LABEL, loadVault, NODE_KINDS } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Temario" };

const ESTADOS = {
  completed: "Completado",
  diagnosed: "Dominado (diagnóstico)",
  available: "Disponible",
  locked: "Bloqueado",
} as const;

/** Lo que dice el botón de cada fila: invita a entrar en el nodo. */
const ACCION = {
  completed: "Completado · repasar",
  diagnosed: "Ya lo sabes · repasar",
  available: "Empezar →",
  locked: "Bloqueado · leer",
} as const;

type Props ={ searchParams: Promise<{ area?: string; estado?: string; tipo?: string }> };

export default async function Temario({ searchParams }: Props) {
  const user = await requireUser();
  const { area, estado, tipo } = await searchParams;
  const vault = loadVault();
  const completed = getCompleted(user.id);
  const states = computeStates(vault, completed, getDiagnosed(user.id));

  const AREA_IDS = [...vault.areas.keys()];
  const areaSel = AREA_IDS.find((a) => a === area);
  const estadoSel = (Object.keys(ESTADOS) as (keyof typeof ESTADOS)[]).find((e) => e === estado);
  const tipoSel = NODE_KINDS.find((k) => k === tipo);

  const all = studyOrder(vault);
  const visibles = all.filter(
    (n) =>
      (!areaSel || n.area === areaSel) && (!estadoSel || states.get(n.id) === estadoSel) && (!tipoSel || n.kind === tipoSel),
  );
  const niveles = [...new Set(visibles.map((n) => n.trunkLevel))].sort((a, b) => a - b);
  const totalMin = visibles.reduce((s, n) => s + estimateMinutes(n), 0);

  const href = (a?: string, e?: string, t: string | null = tipoSel ?? null) => {
    const q = new URLSearchParams();
    if (a) q.set("area", a);
    if (e) q.set("estado", e);
    if (t) q.set("tipo", t);
    const s = q.toString();
    return s ? `/temario?${s}` : "/temario";
  };

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Temario</h1>
        <p className="nota">
          ¿Ya sabes parte? <Link href="/diagnostico">Prueba de nivel</Link> por área.
        </p>
        <dl className="cifras">
          <div>
            <dt>Nodos</dt>
            <dd>{visibles.length}</dd>
          </div>
          <div>
            <dt>Tiempo estimado</dt>
            <dd>{formatMinutes(totalMin)}</dd>
          </div>
        </dl>
      </section>

      <nav className="filtros" aria-label="Filtros del temario">
        <div>
          <span>Área</span>
          <Link prefetch={false} href={href(undefined, estadoSel)} aria-current={!areaSel ? "true" : undefined}>
            Todas
          </Link>
          {AREA_IDS.filter((a) => all.some((n) => n.area === a)).map((a) => (
            <Link key={a} prefetch={false} href={href(a, estadoSel)} aria-current={areaSel === a ? "true" : undefined}>
              {areaOf(vault.areas, a).label}
            </Link>
          ))}
        </div>
        <div>
          <span>Estado</span>
          <Link prefetch={false} href={href(areaSel, undefined)} aria-current={!estadoSel ? "true" : undefined}>
            Todos
          </Link>
          {(Object.keys(ESTADOS) as (keyof typeof ESTADOS)[]).map((e) => (
            <Link key={e} prefetch={false} href={href(areaSel, e)} aria-current={estadoSel === e ? "true" : undefined}>
              {ESTADOS[e]}
            </Link>
          ))}
        </div>
        <div>
          <span>Tipo</span>
          <Link prefetch={false} href={href(areaSel, estadoSel, null)} aria-current={!tipoSel ? "true" : undefined}>
            Todos
          </Link>
          {NODE_KINDS.map((k) => (
            <Link key={k} prefetch={false} href={href(areaSel, estadoSel, k)} aria-current={tipoSel === k ? "true" : undefined}>
              {KIND_LABEL[k]}
            </Link>
          ))}
        </div>
      </nav>

      {visibles.length === 0 && <p className="nota">Ningún nodo cumple ese filtro.</p>}

      {niveles.map((nivel) => (
        <section key={nivel} className="temario-nivel">
          <h2>{nivel === 0 ? "Raíz" : `Nivel ${nivel}`}</h2>
          <ul className="temario-lista">
            {visibles
              .filter((n) => n.trunkLevel === nivel)
              .map((n) => {
                const st = states.get(n.id)!;
                return (
                  <li key={n.id} data-estado={st}>
                    <Link href={`/nodo/${n.id}`} prefetch={false}>
                      <span className="titulo">
                        <i className="punto" style={{ "--color-area": areaOf(vault.areas, n.area).color } as React.CSSProperties} />
                        {n.title}
                      </span>
                      <span className="meta">
                        {areaOf(vault.areas, n.area).label} · {formatMinutes(estimateMinutes(n))}
                        {n.kind !== "teoria" ? ` · ${KIND_LABEL[n.kind].toLowerCase()}` : ""}
                        {n.ctfFlag ? " · con reto" : ""}
                      </span>
                      <span className="estado" data-estado={st}>
                        {ACCION[st]}
                      </span>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </section>
      ))}
    </main>
  );
}
