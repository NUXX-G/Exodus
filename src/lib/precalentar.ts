/**
 * Precalentamiento: al arrancar el servidor, renderiza en segundo plano todos los nodos (texto y ejercicios) y
 * las páginas de recursos, en el orden de estudio, para que la primera visita a cualquier nodo sea inmediata.
 * Lo ya renderizado en un arranque anterior sale de la caché en disco, así que tras una actualización solo
 * se rehacen los nodos que han cambiado. Entre nodo y nodo cede el turno para no frenar a las peticiones.
 */
import { linkResolverFor, renderMarkdown } from "./markdown";
import { loadRecursos } from "./recursos";
import { podarDisco } from "./render-cache";
import { studyOrder } from "./study";
import { loadVault } from "./vault";

const ceder = () => new Promise<void>((r) => setImmediate(r));

let enMarcha: Promise<void> | null = null;

export function precalentar(): Promise<void> {
  if (enMarcha) return enMarcha;
  enMarcha = (async () => {
    const t0 = Date.now();
    const vault = loadVault();
    const resolve = linkResolverFor(vault);
    let n = 0;
    for (const node of studyOrder(vault)) {
      await renderMarkdown(node.body, resolve);
      for (const e of node.exercises) await renderMarkdown(e.prompt, resolve);
      n++;
      await ceder();
    }
    for (const p of loadRecursos().paginas) {
      await renderMarkdown(p.cuerpo, resolve);
      await ceder();
    }
    const borradas = podarDisco();
    console.log(`[exodus] Precalentados ${n} nodos en ${Math.round((Date.now() - t0) / 1000)} s (caché: ${borradas} entradas viejas borradas).`);
  })().catch((e) => {
    console.warn(`[exodus] Precalentamiento interrumpido: ${(e as Error).message}`);
  });
  return enMarcha;
}
