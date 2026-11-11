import { sql } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";

/** Comprobación de salud para Docker: la base de datos responde y el vault es legible. */
export function GET() {
  try {
    getDb().run(sql`select 1`);
    const { nodes, issues } = loadVault();
    return Response.json({ ok: true, nodes: nodes.size, vaultIssues: issues.length });
  } catch (e) {
    return Response.json({ ok: false, error: (e as Error).message }, { status: 503 });
  }
}
