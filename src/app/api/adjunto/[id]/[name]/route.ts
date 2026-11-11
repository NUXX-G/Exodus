import { getSessionUser } from "@/lib/auth";
import { loadVault, readAttachment } from "@/lib/vault";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string; name: string }> };

/**
 * Descarga de un archivo de reto. Solo con sesión, y solo si el nombre figura en el
 * `attachments` del nodo: no se sirve nada del vault que no esté declarado.
 */
export async function GET(_req: Request, { params }: Ctx) {
  if (!(await getSessionUser())) return new Response("No autorizado", { status: 401 });
  const { id, name } = await params;
  const node = loadVault().nodes.get(id);
  if (!node || !node.attachments.includes(name)) return new Response("No encontrado", { status: 404 });

  // Comprueba de nuevo en el momento de servir: sin enlaces simbólicos, archivo normal, tamaño máximo.
  const data = readAttachment(node.id, name);
  if (!data) return new Response("No encontrado", { status: 404 });
  return new Response(new Uint8Array(data), {
    headers: {
      // Siempre como descarga opaca: un adjunto nunca se interpreta ni se ejecuta en el navegador.
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${name}"`,
      "Content-Length": String(data.length),
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "private, no-store",
    },
  });
}
