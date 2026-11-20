import Link from "next/link";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth";
import { listReports } from "@/lib/progress";
import { loadVault } from "@/lib/vault";
import { resolveReportAction } from "./actions";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Reportes" };

const fecha = (d: Date) => d.toISOString().slice(0, 10);

/**
 * «Creo que esto está mal»: el administrador ve todos los reportes y los cierra; cada miembro ve los suyos y su
 * respuesta. Al trabajar un área, los pendientes se resumen en STATUS.md (§8).
 */
export default async function Reportes({ searchParams }: { searchParams: Promise<{ ver?: string }> }) {
  const user = await requireUser();
  const admin = user.role === "admin";
  const { ver } = await searchParams;
  const vault = loadVault();
  const todos = listReports(ver === "todos" ? undefined : "pendiente").filter((r) => admin || r.username === user.username);
  const titulo = (id: string) => vault.nodes.get(id)?.title ?? `${id} (ya no existe)`;
  const porArea = new Map<string, number>();
  for (const r of todos) {
    const a = vault.nodes.get(r.nodeId)?.area ?? "?";
    porArea.set(a, (porArea.get(a) ?? 0) + 1);
  }

  return (
    <main className="pagina">
      <section className="resumen">
        <h1>Reportes «creo que esto está mal»</h1>
        <dl className="cifras">
          <div>
            <dt>{ver === "todos" ? "Total" : "Pendientes"}</dt>
            <dd>{todos.length}</dd>
          </div>
          {[...porArea].map(([a, n]) => (
            <div key={a}>
              <dt>{vault.areas.get(a)?.label ?? a}</dt>
              <dd>{n}</dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="nota">
        {admin
          ? "Todos los reportes de los usuarios. Ciérralos al corregir el vault (o descártalos explicando por qué)."
          : "Tus reportes. Cuando se revisen verás aquí la respuesta."}{" "}
        {ver === "todos" ? <Link href="/reportes">Ver solo pendientes</Link> : <Link href="/reportes?ver=todos">Ver también los cerrados</Link>}
      </p>
      {todos.length === 0 ? (
        <p>No hay reportes {ver === "todos" ? "" : "pendientes"}.</p>
      ) : (
        <ol className="reportes">
          {todos.map((r) => (
            <li key={r.id} data-estado={r.status}>
              <p className="meta">
                <Link href={`/nodo/${r.nodeId}`} prefetch={false}>
                  {titulo(r.nodeId)}
                </Link>
                {r.exerciseId ? ` · ejercicio ${r.exerciseId}` : " · nodo"} · {r.username} · {fecha(r.createdAt)} · {r.status}
              </p>
              <blockquote>{r.message}</blockquote>
              {r.resolution && <p className="nota">Respuesta: {r.resolution}</p>}
              {admin && (
                <form action={resolveReportAction} className="reporte-cierre">
                  <input type="hidden" name="id" value={r.id} />
                  <input type="text" name="resolution" placeholder="Qué se ha hecho (opcional)" maxLength={2000} defaultValue={r.resolution ?? ""} />
                  <button type="submit" name="status" value="resuelto" className="boton">
                    Resuelto
                  </button>
                  <button type="submit" name="status" value="descartado" className="boton-secundario">
                    Descartar
                  </button>
                  {r.status !== "pendiente" && (
                    <button type="submit" name="status" value="pendiente" className="boton-secundario">
                      Reabrir
                    </button>
                  )}
                </form>
              )}
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}
