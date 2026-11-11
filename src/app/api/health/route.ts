import { sql } from "drizzle-orm";
import { announceSetupCode } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";

/** Comprobación de salud para Docker: la base de datos responde y el vault es legible. */
export function GET() {
  try {
    getDb().run(sql`select 1`);
    // Primer arranque: deja el código de configuración en el registro sin esperar a una visita.
    announceSetupCode();
    const { nodes, issues } = loadVault();
    if (issues.length) console.warn(`[health] ${issues.length} problemas en el vault`);
    return Response.json({ ok: true, nodes: nodes.size });
  } catch (e) {
    // El detalle (rutas, errores de SQLite) se queda en el log del servidor.
    console.error("[health]", e);
    return Response.json({ ok: false }, { status: 503 });
  }
}
