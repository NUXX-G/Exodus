/**
 * Next.js llama a register() una vez al arrancar el servidor. Aquí se lanza el precalentamiento de la caché de
 * HTML (ver lib/precalentar.ts) unos segundos después, sin bloquear el arranque. EXODUS_PRECALENTAR=0 lo desactiva.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  if (process.env.NEXT_PHASE === "phase-production-build" || process.env.EXODUS_PRECALENTAR === "0") return;
  const { precalentar } = await import("./lib/precalentar");
  setTimeout(() => void precalentar(), 10_000);
}
