import { getSessionUser } from "@/lib/auth";
import { buildExport } from "@/lib/obsidian-export";
import { createApiToken, userExportData } from "@/lib/obsidian";
import { PLUGIN_ID, PLUGIN_MAIN_JS, PLUGIN_MANIFEST, pluginData, VAULT_GITIGNORE } from "@/lib/obsidian-plugin";
import { GIT_PLUGIN_DATA, GIT_PLUGIN_ID, gitPluginFiles } from "@/lib/obsidian-git";
import { leemePlugin, NOTA_PRIMEROS_PASOS, primerosPasos } from "@/lib/obsidian-primeros-pasos";
import { publicOrigin, sameOrigin } from "@/lib/origin";
import { loadVault } from "@/lib/vault";
import { buildZip, type ZipEntry } from "@/lib/zip";

export const dynamic = "force-dynamic";

const json = (v: unknown) => JSON.stringify(v, null, 2) + "\n";

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
  const conGit = form.get("git") === "on";
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

  // Plugin Git (Vinzent03/obsidian-git, MIT) tal cual se publica, con su licencia y unos ajustes iniciales.
  const gitPlugin = (base: string): ZipEntry[] => [
    ...Object.entries(gitPluginFiles()).map(([nombre, data]) => ({ path: `${base}/${nombre}`, data })),
    { path: `${base}/data.json`, data: json(GIT_PLUGIN_DATA) },
  ];

  const safeUser = user.username.replace(/[^a-z0-9_-]/g, "");
  let entries: ZipEntry[];
  let filename: string;
  if (tipo === "boveda") {
    // Todo en la raíz del ZIP: «Extraer todo» de Windows (y el Finder) ya crean una carpeta con el nombre del ZIP.
    // Con una carpeta dentro quedaba Exodus-x/Exodus-x/.obsidian, y al abrir la de fuera Obsidian no veía el plugin.
    const notas = buildExport(loadVault(), userExportData(user.id, user.username), "Exodus");
    entries = [
      { path: NOTA_PRIMEROS_PASOS, data: primerosPasos({ origin, conSync, conGit }) },
      { path: ".gitignore", data: VAULT_GITIGNORE },
      { path: ".obsidian/community-plugins.json", data: json(conGit ? [PLUGIN_ID, GIT_PLUGIN_ID] : [PLUGIN_ID]) },
      ...plugin(`.obsidian/plugins/${PLUGIN_ID}`),
      ...(conGit ? gitPlugin(`.obsidian/plugins/${GIT_PLUGIN_ID}`) : []),
      ...notas.map((f) => ({ path: f.path, data: f.content })),
    ];
    filename = `Exodus-${safeUser}.zip`;
  } else {
    entries = [{ path: "LEEME.txt", data: leemePlugin(origin, conSync) }, ...plugin(PLUGIN_ID)];
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
