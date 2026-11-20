/**
 * Dibujos de la Libreta (fase 8B): validación de los trazos y generación del SVG. Módulo puro.
 *
 * Un dibujo es una lista de trazos en un lienzo lógico de LIENZO.ancho × LIENZO.alto. Cada trazo: color de la paleta,
 * grosor y puntos [x, y, presión]. El SVG se construye solo con números y colores de la paleta: nunca con texto del
 * usuario, así que es seguro insertarlo en la página y exportarlo.
 */
import { z } from "zod";

export const LIENZO = { ancho: 1200, alto: 800 } as const;
/** Fondo de «papel»: el dibujo se ve igual en el tema claro y en el oscuro de Obsidian. */
export const PAPEL = "#fdfcf7";
export const PALETA = ["#1d1d1f", "#1f5fbf", "#c62828", "#2e7d32", "#ef6c00", "#6a1b9a"] as const;
export const MAX_TRAZOS = 3000;
export const MAX_PUNTOS = 200_000;

const punto = z.tuple([z.number().finite(), z.number().finite(), z.number().min(0).max(1)]);
const trazo = z.object({
  color: z.enum(PALETA),
  grosor: z.number().min(0.5).max(40),
  puntos: z.array(punto).min(1).max(20_000),
});
export const trazosSchema = z.array(trazo).max(MAX_TRAZOS);
export type Trazo = z.infer<typeof trazo>;

/** Valida y normaliza (recorta al lienzo y redondea a 0,1) los trazos que manda el navegador. */
export function validarTrazos(datos: unknown): Trazo[] | null {
  const r = trazosSchema.safeParse(datos);
  if (!r.success) return null;
  if (r.data.reduce((s, t) => s + t.puntos.length, 0) > MAX_PUNTOS) return null;
  const c = (v: number, max: number) => Math.round(Math.min(max, Math.max(0, v)) * 10) / 10;
  return r.data.map((t) => ({ ...t, puntos: t.puntos.map(([x, y, p]) => [c(x, LIENZO.ancho), c(y, LIENZO.alto), Math.round(p * 100) / 100] as [number, number, number]) }));
}

/** Camino SVG de un trazo, suavizado con curvas cuadráticas por los puntos medios. */
export function caminoDe(t: Trazo): string {
  const p = t.puntos;
  if (p.length === 1) return `M${p[0][0]} ${p[0][1]}l0.01 0`;
  let d = `M${p[0][0]} ${p[0][1]}`;
  for (let i = 1; i < p.length - 1; i++) {
    const mx = Math.round(((p[i][0] + p[i + 1][0]) / 2) * 10) / 10;
    const my = Math.round(((p[i][1] + p[i + 1][1]) / 2) * 10) / 10;
    d += `Q${p[i][0]} ${p[i][1]} ${mx} ${my}`;
  }
  const u = p[p.length - 1];
  return d + `L${u[0]} ${u[1]}`;
}

/** Grosor efectivo: el lápiz con presión (tableta) varía entre el 50 % y el 150 %. */
const grosorDe = (t: Trazo) => {
  const media = t.puntos.reduce((s, p) => s + (p[2] || 0.5), 0) / t.puntos.length;
  return Math.round(t.grosor * (0.5 + media) * 10) / 10;
};

/** SVG completo (con fondo de papel), para mostrarlo y exportarlo. */
export function svgDe(trazos: Trazo[], opciones: { titulo?: string } = {}): string {
  const caminos = trazos
    .map((t) => `<path d="${caminoDe(t)}" stroke="${t.color}" stroke-width="${grosorDe(t)}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`)
    .join("");
  // El título solo admite letras, cifras y puntuación básica (es lo único que no son números).
  const titulo = opciones.titulo ? `<title>${opciones.titulo.replace(/[^\p{L}\p{N} .,:;()¿?¡!-]/gu, "").slice(0, 120)}</title>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LIENZO.ancho} ${LIENZO.alto}" width="${LIENZO.ancho}" height="${LIENZO.alto}">${titulo}<rect width="100%" height="100%" fill="${PAPEL}"/>${caminos}</svg>`;
}

/** Nombre del archivo del dibujo en la exportación a Obsidian. */
export const archivoDibujo = (id: number) => `dibujo-${id}.svg`;
