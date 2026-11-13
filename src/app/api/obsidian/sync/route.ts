import { loadVault } from "@/lib/vault";
import { EXPORT_VERSION, buildExport } from "@/lib/obsidian-export";
import { userExportData, userForApiToken } from "@/lib/obsidian";

export const dynamic = "force-dynamic";

/**
 * Exportación del usuario dueño del token, para el plugin de Obsidian. Solo lectura y solo sus datos:
 * `Authorization: Bearer exo_...` (el token se crea y se revoca en /cuenta).
 */
export async function GET(req: Request) {
  const auth = req.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  const user = token ? userForApiToken(token) : null;
  if (!user) {
    return Response.json({ error: "token no válido" }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }
  const files = buildExport(loadVault(), userExportData(user.id, user.username));
  return Response.json(
    { version: EXPORT_VERSION, generatedAt: new Date().toISOString(), user: user.username, files },
    { headers: { "Cache-Control": "no-store" } },
  );
}
