/**
 * «Sellado» de la solución modelo y la rúbrica de los ejercicios de desarrollo: JSON comprimido con gzip y en base64,
 * con el prefijo `gz64:`. No es cifrado (el servidor tiene que mostrarlo tras la entrega y cualquiera con el repositorio
 * puede deshacerlo): solo evita leer la solución sin querer al abrir el .md en Obsidian o en GitHub. La regla de
 * Exodus sigue siendo que ni la solución ni la rúbrica llegan al navegador ni a la exportación antes de entregar.
 */
import zlib from "node:zlib";
import { z } from "zod";

const PREFIJO = "gz64:";

export const selladoSchema = z.object({
  /** Solución modelo en Markdown (con LaTeX y código). */
  solution: z.string().min(1),
  /** Criterios de la rúbrica, cada uno con sus puntos (enteros). */
  rubric: z.array(z.object({ criterio: z.string().min(1), puntos: z.number().int().min(1).max(20) })).min(1).max(20),
});
export type Sellado = z.infer<typeof selladoSchema>;

export function sellar(datos: Sellado): string {
  const ok = selladoSchema.parse(datos);
  return PREFIJO + zlib.gzipSync(Buffer.from(JSON.stringify(ok), "utf8"), { level: 9 }).toString("base64");
}

export function abrir(sellado: string): Sellado {
  if (!sellado.startsWith(PREFIJO)) throw new Error("sellado sin prefijo gz64:");
  const json = zlib.gunzipSync(Buffer.from(sellado.slice(PREFIJO.length), "base64"), { maxOutputLength: 1 << 20 }).toString("utf8");
  return selladoSchema.parse(JSON.parse(json));
}

/** Para vault:check: ¿se puede abrir? Devuelve el error o null. */
export function errorDeSellado(sellado: string): string | null {
  try {
    abrir(sellado);
    return null;
  } catch (e) {
    return (e as Error).message.slice(0, 200);
  }
}
