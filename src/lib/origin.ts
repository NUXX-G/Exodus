/**
 * Dirección pública por la que el usuario ve la web, a partir de las cabeceras de la petición: la
 * cabecera Origin del navegador (exacta también tras Caddy, Apache, Tailscale o un túnel) y, si falta,
 * X-Forwarded-Host / Host.
 */
type HeaderBag = { get(name: string): string | null };

export function publicOrigin(h: HeaderBag): string {
  const origin = h.get("origin");
  if (origin && /^https?:\/\/[^/\s]+$/.test(origin)) return origin;
  const proto = h.get("x-forwarded-proto") === "https" ? "https" : "http";
  return `${proto}://${h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000"}`;
}

/** Para formularios POST fuera de las server actions: la petición viene de esta misma web. */
export function sameOrigin(h: HeaderBag): boolean {
  const origin = h.get("origin");
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
