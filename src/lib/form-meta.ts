import type { AttemptMeta } from "./progress";

/** Variante y tiempo que manda un formulario de ejercicio. Variante «» = sin variantes; ausente = no se comprueba. */
export function metaFrom(form: FormData): AttemptMeta {
  const v = form.get("variant");
  const t = Number(form.get("elapsedMs"));
  return {
    variant: v === null ? undefined : v === "" ? null : Number.isInteger(Number(v)) ? Number(v) : undefined,
    elapsedMs: Number.isFinite(t) ? t : null,
  };
}
