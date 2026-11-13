import { getSessionUser } from "@/lib/auth";
import { buildExport } from "@/lib/obsidian-export";
import { createApiToken, userExportData } from "@/lib/obsidian";
import { PLUGIN_ID, PLUGIN_MAIN_JS, PLUGIN_MANIFEST, pluginData } from "@/lib/obsidian-plugin";
import { publicOrigin, sameOrigin } from "@/lib/origin";
import { loadVault } from "@/lib/vault";
import { buildZip, type ZipEntry } from "@/lib/zip";

export const dynamic = "force-dynamic";

const json = (v: unknown) => JSON.stringify(v, null, 2) + "\n";

function instrucciones(origin: string, conSync: boolean, tipo: "boveda" | "plugin"): string {
  const pasos =
    tipo === "boveda"
      ? [
          "1. Descomprime este ZIP donde quieras guardar tus apuntes.",
          "2. En Obsidian: «Abrir carpeta como bóveda» y elige la carpeta descomprimida.",
          "3. Si Obsidian pregunta por los plugins de la comunidad, pulsa «Confiar en el autor y activar plugins».",
        ]
      : [
          "1. Abre la carpeta de tu bóveda y entra en .obsidian/plugins (créala si no existe; .obsidian está oculta).",
          `2. Copia ahí la carpeta ${PLUGIN_ID} de este ZIP.`,
          "3. En Obsidian: Ajustes → Plugins de la comunidad → activa los plugins si hace falta y luego «Exodus Sync».",
        ];
  const sync = conSync
    ? [
        "",
        `El plugin ya está conectado a ${origin} con un token personal. Al abrir Obsidian, cada 30 minutos y con el`,
        "botón de la barra lateral (o el comando «Exodus Sync: Sincronizar ahora») trae tu progreso a la carpeta Exodus.",
        "Solo reescribe lo que hay entre las marcas exodus:inicio y exodus:fin; escribe tus notas debajo de «Mis notas».",
        "El token se puede desconectar en /cuenta → Obsidian. No compartas este ZIP: da acceso de lectura a tu progreso.",
      ]
    : ["", "Esta copia no se sincroniza: es una foto de tu progreso de hoy. Para mantenerla al día, descarga con sincronización."];
  return ["Exodus en Obsidian", "", ...pasos, ...sync, ""].join("\n");
}

/**
 * Descarga de la bóveda (o solo del plugin) del usuario con sesión. POST desde /cuenta: puede crear un
 * token, así que exige la misma procedencia además de la cookie SameSite=Lax.
 */
export async function POST(req: Request) {
  const user = await getSessionUser();
  if (!user) return new Response("No autorizado", { status: 401 });
  if (!sameOrigin(req.headers)) return new Response("Origen no permitido", { status: 403 });

  const form = await req.formData();
  const tipo = form.get("tipo") === "plugin" ? "plugin" : "boveda";
  const conSync = form.get("sync") === "on";
  const origin = publicOrigin(req.headers);
  const fecha = new Date().toLocaleDateString("es-ES");

  let token: string | null = null;
  if (conSync) {
    token = createApiToken(user.id, `Obsidian · ${tipo === "boveda" ? "bóveda" : "plugin"} · ${fecha}`);
    if (!token) return new Response("Has llegado al máximo de conexiones: desconecta alguna en /cuenta.", { status: 409 });
  }

  const plugin = (base: string): ZipEntry[] => [
    { path: `${base}/manifest.json`, data: json(PLUGIN_MANIFEST) },
    { path: `${base}/main.js`, data: PLUGIN_MAIN_JS },
    { path: `${base}/data.json`, data: json(pluginData(origin, token)) },
  ];

  const safeUser = user.username.replace(/[^a-z0-9_-]/g, "");
  let entries: ZipEntry[];
  let filename: string;
  if (tipo === "boveda") {
    const top = `Exodus-${safeUser}`;
    const notas = buildExport(loadVault(), userExportData(user.id, user.username), "Exodus");
    entries = [
      { path: `${top}/LEEME.txt`, data: instrucciones(origin, conSync, tipo) },
      { path: `${top}/.obsidian/community-plugins.json`, data: json([PLUGIN_ID]) },
      ...plugin(`${top}/.obsidian/plugins/${PLUGIN_ID}`),
      ...notas.map((f) => ({ path: `${top}/${f.path}`, data: f.content })),
    ];
    filename = `${top}.zip`;
  } else {
    entries = [{ path: "LEEME.txt", data: instrucciones(origin, conSync, tipo) }, ...plugin(PLUGIN_ID)];
    filename = `${PLUGIN_ID}.zip`;
  }

  const zip = buildZip(entries);
  return new Response(new Uint8Array(zip), {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Content-Length": String(zip.length),
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
