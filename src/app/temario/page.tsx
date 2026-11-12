import Link from "next/link";
import type { Metadata } from "next";
import { AREAS, AREA_IDS, type AreaId } from "@/lib/areas";
import { requireUser } from "@/lib/auth";
import { computeStates, getCompleted } from "@/lib/progress";
import { estimateMinutes, formatMinutes, studyOrder } from "@/lib/study";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Temario" };

const ESTADOS = {
  completed: "Completado",
  available: "Disponible",
  locked: "Bloqueado",
} as const;

type Props = { searchParams: Promise<{ area?: string; estado?: string }> };

export default async function Temario({ searchParams }: Props) {
  const user = await requireUser();
  const { area, estado } = await searchParams;
  const vault = loadVault();
  const completed = getCompleted(user.id);
  const states = computeStates(vault, completed);

  const areaSel = AREA_IDS.find((a) => a === area) as AreaId | undefined;
  const estadoSel = (Object.keys(ESTADOS) as (keyof typeof ESTADOS)[]).find((e) => e === estado);

  const all = studyOrder(vault);
  const visibles = all.filter(
    (n) => (!areaSel || n.area === areaSel) && (!estadoSel || states.get(n.id) === estadoSel),
  );
  const niveles = [...new Set(visibles.map((n) => n.trunkLevel))].sort((a, b) => a - b);
  const totalMin = visibles.reduce((s, n) => s + estimateMinutes(n), 0);

  const href = (a?: string, e?: string) => {
    const q = new URLSearchParams();
    if (a) q.set("area", a);
    if (e) q.set("estado", e);
    const s = q.toString();
    return s ? `/temario?${s}` : "/temario";
  };

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Temario</h1>
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
          <Link href={href(undefined, estadoSel)} aria-current={!areaSel ? "true" : undefined}>
            Todas
          </Link>
          {AREA_IDS.filter((a) => all.some((n) => n.area === a)).map((a) => (
            <Link key={a} href={href(a, estadoSel)} aria-current={areaSel === a ? "true" : undefined}>
              {AREAS[a].label}
            </Link>
          ))}
        </div>
        <div>
          <span>Estado</span>
          <Link href={href(areaSel, undefined)} aria-current={!estadoSel ? "true" : undefined}>
            Todos
          </Link>
          {(Object.keys(ESTADOS) as (keyof typeof ESTADOS)[]).map((e) => (
            <Link key={e} href={href(areaSel, e)} aria-current={estadoSel === e ? "true" : undefined}>
              {ESTADOS[e]}
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
                        <i className="punto" style={{ "--color-area": AREAS[n.area].color } as React.CSSProperties} />
                        {n.title}
                      </span>
                      <span className="meta">
                        {AREAS[n.area].label} · {formatMinutes(estimateMinutes(n))}
                        {n.ctfFlag ? " · con reto" : ""}
                      </span>
                      <span className="estado" data-estado={st}>
                        {ESTADOS[st]}
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
