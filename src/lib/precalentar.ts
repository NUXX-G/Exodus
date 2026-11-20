/**
 * Precalentamiento: al arrancar el servidor, renderiza en segundo plano todos los nodos (texto y ejercicios) y
 * las páginas de recursos, en el orden de estudio, para que la primera visita a cualquier nodo sea inmediata.
 * Lo ya renderizado en un arranque anterior sale de la caché en disco, así que tras una actualización solo
 * se rehacen los nodos que han cambiado.
 *
 * Node tiene un solo hilo: mientras se renderiza un texto, las peticiones esperan. Por eso, tras cada texto (no
 * tras cada nodo) descansa tanto como ha trabajado: como mucho usa la mitad del tiempo de CPU y una visita espera,
 * en el peor caso, lo que tarda un solo texto. Lo que ya está en la caché de disco no cuesta nada.
 */
import { linkResolverFor, renderMarkdown } from "./markdown";
import { loadRecursos } from "./recursos";
import { podarDisco } from "./render-cache";
import { studyOrder } from "./study";
import { loadVault } from "./vault";

const esperar = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Renderiza un texto y descansa lo mismo que ha tardado (lo que sale de la caché apenas descansa). */
async function renderizarConDescanso(md: string, resolve: ReturnType<typeof linkResolverFor>) {
  const t = Date.now();
  await renderMarkdown(md, resolve);
  await esperar(Date.now() - t);
}

let enMarcha: Promise<void> | null = null;

export function precalentar(): Promise<void> {
  if (enMarcha) return enMarcha;
  enMarcha = (async () => {
    const t0 = Date.now();
    const vault = loadVault();
    const resolve = linkResolverFor(vault);
    let n = 0;
    for (const node of studyOrder(vault)) {
      await renderizarConDescanso(node.body, resolve);
      for (const e of node.exercises) if (!e.variants?.length) await renderizarConDescanso(e.prompt, resolve);
      n++;
    }
    for (const p of loadRecursos().paginas) {
      await renderizarConDescanso(p.cuerpo, resolve);
    }
    const borradas = podarDisco();
    console.log(`[exodus] Precalentados ${n} nodos en ${Math.round((Date.now() - t0) / 1000)} s (caché: ${borradas} entradas viejas borradas).`);
  })().catch((e) => {
    console.warn(`[exodus] Precalentamiento interrumpido: ${(e as Error).message}`);
  });
  return enMarcha;
}
