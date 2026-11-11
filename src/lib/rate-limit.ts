/**
 * Limitador de intentos fallidos en memoria (un único proceso).
 *  - Por cliente: un atacante agota sus intentos sin bloquear a los demás.
 *  - Global: tope de respaldo frente a ataques distribuidos desde muchas direcciones.
 *  - Memoria acotada: al llenarse se expulsan las entradas caducadas y luego las más antiguas.
 */
export interface LimiterOptions {
  maxPerClient: number;
  maxGlobal: number;
  windowMs: number;
  maxTracked: number;
}

export class FailureLimiter {
  private readonly byClient = new Map<string, number[]>();
  private global: number[] = [];

  constructor(private readonly opts: LimiterOptions) {}

  private recent(times: number[] | undefined, now: number): number[] {
    return (times ?? []).filter((t) => t > now - this.opts.windowMs);
  }

  blocked(client: string, now = Date.now()): boolean {
    this.global = this.recent(this.global, now);
    return (
      this.global.length >= this.opts.maxGlobal ||
      this.recent(this.byClient.get(client), now).length >= this.opts.maxPerClient
    );
  }

  fail(client: string, now = Date.now()): void {
    this.global = [...this.recent(this.global, now), now];
    const times = [...this.recent(this.byClient.get(client), now), now];
    this.byClient.delete(client); // reinsertar lo coloca al final: el Map queda ordenado por último fallo
    this.byClient.set(client, times);
    if (this.byClient.size > this.opts.maxTracked) this.evict(now);
  }

  succeed(client: string): void {
    this.byClient.delete(client);
  }

  private evict(now: number): void {
    for (const [key, times] of this.byClient) {
      if (this.recent(times, now).length === 0) this.byClient.delete(key);
    }
    for (const key of this.byClient.keys()) {
      if (this.byClient.size <= this.opts.maxTracked) break;
      this.byClient.delete(key);
    }
  }
}

/**
 * Clave de cliente a partir de la cabecera X-Forwarded-For, que solo se consulta cuando hay un
 * proxy de confianza delante (`trustProxy`). Se toma la última entrada, la que añade el proxy;
 * las anteriores las controla el cliente. Las direcciones IPv6 se agrupan por prefijo /64,
 * porque un mismo cliente dispone de todo ese rango.
 */
export function clientKeyFrom(forwardedFor: string | null, trustProxy: boolean): string {
  if (!trustProxy) return "directo";
  const ip = forwardedFor?.split(",").pop()?.trim();
  if (!ip) return "directo";
  if (!ip.includes(":")) return ip;

  const [head, tail = ""] = ip.toLowerCase().split("::");
  const left = head ? head.split(":") : [];
  const right = tail ? tail.split(":") : [];
  const groups = ip.includes("::")
    ? [...left, ...Array(Math.max(0, 8 - left.length - right.length)).fill("0"), ...right]
    : left;
  return groups.slice(0, 4).map((g) => g.replace(/^0+(?=.)/, "")).join(":") + "::/64";
}
