import { getSessionUser } from "@/lib/auth";
import { runnerScript } from "@/lib/codigo";
import { loadVault } from "@/lib/vault";

export const dynamic = "force-dynamic";

type Ctx = { params: Promise<{ id: string }> };

/**
 * Script de pruebas (`prueba.sh`) de los ejercicios de código con casos de un nodo. Solo con sesión. Contiene las
 * entradas de las pruebas, nunca las salidas esperadas (en el vault solo está la huella del código correcto).
 */
export async function GET(_req: Request, { params }: Ctx) {
  if (!(await getSessionUser())) return new Response("No autorizado", { status: 401 });
  const { id } = await params;
  const node = loadVault().nodes.get(id);
  const ejercicios = node?.exercises.filter((e) => e.type === "codigo" && e.cases?.length) ?? [];
  if (!node || ejercicios.length === 0) return new Response("No encontrado", { status: 404 });
  const script = runnerScript(
    node.id,
    ejercicios.map((e) => ({ id: e.id, title: e.prompt.split("\n").find((l) => l.trim())?.slice(0, 100) ?? e.id, cases: e.cases! })),
  );
  const data = Buffer.from(script, "utf8");
  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="prueba.sh"',
      "Content-Length": String(data.length),
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "private, no-store",
    },
  });
}
