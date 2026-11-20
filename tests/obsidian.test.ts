import "./db-temporal";
import assert from "node:assert/strict";
import Module from "node:module";
import zlib from "node:zlib";
import { test } from "node:test";
import { mergeAreas } from "../src/lib/areas";
import { getDb, schema } from "../src/lib/db";
import { hashPassword } from "../src/lib/password";
import { createApiToken, listApiTokens, MAX_TOKENS, revokeApiToken, userExportData, userForApiToken } from "../src/lib/obsidian";
import { buildExport, EXPORT_VERSION, MARK_END, MARK_START, type UserExportData } from "../src/lib/obsidian-export";
import { PLUGIN_MAIN_JS, PLUGIN_MANIFEST } from "../src/lib/obsidian-plugin";
import { recordOpen, submitExercise } from "../src/lib/progress";
import type { Vault, VaultNode } from "../src/lib/vault";
import { buildZip } from "../src/lib/zip";

const HASH = "sha256:" + "ab".repeat(32);

function makeNode(id: string, extra: Partial<VaultNode> = {}): VaultNode {
  return {
    id,
    title: `Título de ${id}`,
    area: "matematicas",
    trunkLevel: 1,
    kind: "teoria",
    prerequisites: [],
    academicSources: ["Autor. Libro. Editorial, 2020."],
    ctfFlag: "sha256:" + "cd".repeat(32),
    hints: ["pista uno", "pista dos", "pista tres"],
    exercises: [
      { id: "ej-a", tier: 1, type: "texto", review: false, prompt: "¿Cuánto es $1 + 1$?", answers: [HASH] },
      { id: "ej-b", tier: 2, type: "texto", review: false, prompt: "Calcula algo difícil.", answers: [HASH] },
    ],
    reviewBank: [],
    attachments: [],
    file: `${id}.md`,
    body: `# ${id}\n\nTeoría de ${id} con [[otro]].\n`,
    ...extra,
  };
}

const vault: Vault = {
  nodes: new Map([
    ["mat-a", makeNode("mat-a")],
    ["mat-b", makeNode("mat-b", { prerequisites: ["mat-a"], trunkLevel: 2 })],
    ["mat-c", makeNode("mat-c", { prerequisites: ["mat-b"], trunkLevel: 3 })],
  ]),
  areas: mergeAreas(undefined).areas,
  issues: [],
} as unknown as Vault;

const d = (s: string) => new Date(`${s}T10:00:00`);
const data: UserExportData = {
  username: "ana",
  today: "2026-11-13",
  progress: [
    { nodeId: "mat-a", status: "completed", firstOpenedAt: d("2026-11-01"), completedAt: d("2026-11-03") },
    { nodeId: "mat-b", status: "in_progress", firstOpenedAt: d("2026-11-04"), completedAt: null },
  ],
  solved: [{ nodeId: "mat-a", exerciseId: "ej-a", solvedAt: d("2026-11-02") }],
  reviews: [{ nodeId: "mat-a", exerciseId: "ej-a", dueDay: "2026-11-05" }],
  hints: [{ nodeId: "mat-a", level: 1 }],
  activity: [
    { day: "2026-11-01", kind: "node_opened", nodeId: "mat-a" },
    { day: "2026-11-03", kind: "flag_captured", nodeId: "mat-a" },
    { day: "2026-10-30", kind: "review_done", nodeId: "mat-a" },
  ],
  streak: 2,
};

/* ───────── Exportación ───────── */

test("la exportación crea una nota por nodo abierto, el temario, el panel y el registro por meses", () => {
  const files = buildExport(vault, data);
  const paths = files.map((f) => f.path).sort();
  assert.deepEqual(paths, [
    "Nodos/Matemáticas/mat-a.md",
    "Nodos/Matemáticas/mat-b.md",
    "Panel.md",
    "Registro/2026-10.md",
    "Registro/2026-11.md",
    "Temario.md",
  ]);
  assert.ok(buildExport(vault, data, "Exodus").every((f) => f.path.startsWith("Exodus/")));

  const a = files.find((f) => f.path.endsWith("mat-a.md"))!.content;
  assert.ok(a.startsWith('---\nexodus_id: "mat-a"\n'));
  assert.ok(a.includes(MARK_START) && a.includes(MARK_END));
  assert.ok(a.indexOf(MARK_END) < a.indexOf("## Mis notas"));
  assert.match(a, /Teoría de mat-a/);
  assert.match(a, /✅ resuelto el 2026-11-02 · próximo repaso el 2026-11-05/);
  assert.match(a, /⬜ pendiente/);
  assert.match(a, /1\. pista uno/);
  assert.doesNotMatch(a, /pista dos/, "solo las pistas reveladas");
  // mat-b está abierto (enlace); mat-c no (texto plano, sin crear notas fantasma).
  assert.match(a, /Abre paso a: \[\[mat-b\|Título de mat-b\]\]/);
  const b = files.find((f) => f.path.endsWith("mat-b.md"))!.content;
  assert.match(b, /Abre paso a: Título de mat-c\n/);

  for (const f of files) {
    assert.ok(!f.content.includes("abab"), `${f.path} contiene un hash de respuesta`);
    assert.ok(!f.content.includes("cdcd"), `${f.path} contiene la flag`);
  }

  const temario = files.find((f) => f.path === "Temario.md")!.content;
  assert.match(temario, /- \[x\] \[\[mat-a\|Título de mat-a\]\] — completado el 2026-11-03/);
  assert.match(temario, /- \[ \] \[\[mat-b\|Título de mat-b\]\] — en curso/);
  assert.match(temario, /- \[ \] Título de mat-c\n/);
  assert.match(temario, /## Matemáticas \(1\/3\)/);

  const panel = files.find((f) => f.path === "Panel.md")!.content;
  assert.match(panel, /\| 1 de 3 \| 1 \| 1 \| 2 días \|/);
  assert.match(panel, /2026-11-05 · `ej-a` de \[\[mat-a/);

  const nov = files.find((f) => f.path === "Registro/2026-11.md")!.content;
  assert.ok(nov.indexOf("## 2026-11-03") < nov.indexOf("## 2026-11-01"), "días del más reciente al más antiguo");
  assert.match(nov, /Resolviste 1 ejercicio: \[\[mat-a\|Título de mat-a\]\] \(`ej-a`\)/);
  assert.match(nov, /Capturaste la flag de \[\[mat-a/);
});

/* ───────── Tokens y datos de la base ───────── */

function makeUser(username: string): number {
  return getDb().insert(schema.users).values({ username, passwordHash: hashPassword("contraseña-123456") }).returning({ id: schema.users.id }).get().id;
}

test("un token identifica a su usuario, registra el uso y se puede desconectar", () => {
  const ana = makeUser("ana");
  const otro = makeUser("otro");
  const token = createApiToken(ana, "Portátil")!;
  assert.match(token, /^exo_[A-Za-z0-9_-]{43}$/);
  assert.equal(userForApiToken(token)?.id, ana);
  assert.equal(userForApiToken(token + "x"), null);
  assert.equal(userForApiToken("sin-prefijo"), null);
  const [row] = listApiTokens(ana);
  assert.equal(row.name, "Portátil");
  assert.ok(row.lastUsedAt);
  assert.ok(!JSON.stringify(getDb().select().from(schema.apiTokens).all()).includes(token), "solo se guarda el hash");

  assert.equal(revokeApiToken(otro, row.id), false, "no se desconectan tokens ajenos");
  assert.equal(revokeApiToken(ana, row.id), true);
  assert.equal(userForApiToken(token), null);

  for (let i = 0; i < MAX_TOKENS; i++) assert.ok(createApiToken(otro, `t${i}`));
  assert.equal(createApiToken(otro, "uno más"), null);
});

test("los datos de exportación son solo los del usuario", () => {
  const uno = makeUser("uno");
  const dos = makeUser("dos");
  recordOpen(uno, "mat-a");
  recordOpen(dos, "mat-b");
  submitExercise(uno, vault.nodes.get("mat-a")!, "ej-a", "respuesta incorrecta");
  const du = userExportData(uno, "uno");
  assert.deepEqual(du.progress.map((p) => p.nodeId), ["mat-a"]);
  assert.equal(du.solved.length, 0);
  assert.ok(du.activity.every((a) => a.nodeId === "mat-a"));
  assert.deepEqual(userExportData(dos, "dos").progress.map((p) => p.nodeId), ["mat-b"]);
});

/* ───────── Plugin de Obsidian (con la API de Obsidian simulada) ───────── */

// En Obsidian el plugin corre en una ventana; aquí basta con el global de Node.
(globalThis as { window?: unknown }).window ??= globalThis;

type Notice = { msg: string };
const notices: Notice[] = [];
let fakeResponse: { status: number; json: unknown } = { status: 200, json: null };
const requests: { url: string; headers: Record<string, string> }[] = [];

const fakeObsidian = {
  Plugin: class {
    app: unknown;
    stored: unknown;
    constructor(app: unknown, stored: unknown) {
      this.app = app;
      this.stored = stored;
    }
    async loadData() {
      return this.stored;
    }
    async saveData(v: unknown) {
      this.stored = JSON.parse(JSON.stringify(v));
    }
    addSettingTab() {}
    addCommand() {}
    addRibbonIcon() {}
    registerInterval(id: number) {
      clearInterval(id);
      return id;
    }
  },
  PluginSettingTab: class {},
  Setting: class {},
  Notice: class {
    constructor(msg: string) {
      notices.push({ msg });
    }
  },
  normalizePath: (p: string) => p.replace(/\/+/g, "/"),
  requestUrl: async (req: { url: string; headers: Record<string, string> }) => {
    requests.push(req);
    return fakeResponse;
  },
};

function loadPlugin() {
  const m = new Module("main.js");
  const original = (Module as unknown as { _load: (r: string, ...a: unknown[]) => unknown })._load;
  (Module as unknown as { _load: unknown })._load = (request: string, ...rest: unknown[]) =>
    request === "obsidian" ? fakeObsidian : original(request, ...rest);
  try {
    (m as unknown as { _compile: (code: string, file: string) => void })._compile(PLUGIN_MAIN_JS, "main.js");
  } finally {
    (Module as unknown as { _load: unknown })._load = original;
  }
  return m.exports as {
    new (app: unknown, data: unknown): { onload(): Promise<void>; sync(manual: boolean): Promise<unknown>; stored: unknown };
    mergeNote(existing: string | null, incoming: string): string;
    syncFiles(adapter: unknown, folder: string, files: unknown[]): Promise<Record<string, number>>;
    safeRelative(p: string): boolean;
  };
}

function memoryAdapter(initial: Record<string, string> = {}) {
  const files = new Map(Object.entries(initial));
  const dirs = new Set<string>();
  return {
    files,
    dirs,
    exists: async (p: string) => files.has(p) || dirs.has(p),
    read: async (p: string) => files.get(p)!,
    write: async (p: string, c: string) => void files.set(p, c),
    mkdir: async (p: string) => void dirs.add(p),
  };
}

const gen = (body: string) => `---\nx: 1\n---\n${MARK_START}\n${body}\n${MARK_END}\n\n## Mis notas\n\n`;

test("plugin: el manifiesto es válido y la fusión conserva siempre lo que escribe el usuario", () => {
  assert.equal(PLUGIN_MANIFEST.id, "exodus-sync");
  const P = loadPlugin();
  assert.equal(P.mergeNote(null, gen("v1")), gen("v1"));
  assert.equal(P.mergeNote("  \n", gen("v1")), gen("v1"));
  const conNotas = gen("v1") + "Mi resumen propio.\n";
  assert.equal(P.mergeNote(conNotas, gen("v2")), gen("v2") + "Mi resumen propio.\n");
  // Nota creada a mano (p. ej. al pinchar un enlace) sin marcas: su texto queda debajo de lo generado.
  const fusion = P.mergeNote("Texto mío", gen("v1"));
  assert.ok(fusion.startsWith(gen("v1").split(MARK_END)[0]) && fusion.endsWith("Texto mío"));
  assert.equal(P.mergeNote(fusion, gen("v2")), gen("v2").split(MARK_END)[0] + MARK_END + "\n\nTexto mío");

  for (const bad of ["../x.md", "/abs.md", "a/../b.md", "a\\b.md", "C:x.md", "a.txt", "a//b.md", ""]) {
    assert.equal(P.safeRelative(bad), false, bad);
  }
  assert.equal(P.safeRelative("Nodos/Matemáticas/mat-a.md"), true);
});

test("plugin: sincroniza en la carpeta elegida, crea carpetas, no duplica y respeta las notas", async () => {
  const P = loadPlugin();
  const adapter = memoryAdapter();
  const files = buildExport(vault, data);
  const r1 = await P.syncFiles(adapter, "Estudio/Exodus", files);
  assert.equal(r1.created, files.length);
  assert.ok(adapter.dirs.has("Estudio") && adapter.dirs.has("Estudio/Exodus/Nodos/Matemáticas"));

  const ruta = "Estudio/Exodus/Nodos/Matemáticas/mat-a.md";
  adapter.files.set(ruta, adapter.files.get(ruta)! + "Lo que he entendido.\n");
  const r2 = await P.syncFiles(adapter, "Estudio/Exodus", files);
  assert.deepEqual(r2, { created: 0, updated: 0, unchanged: files.length, skipped: 0 });

  const files2 = buildExport(vault, { ...data, solved: [...data.solved, { nodeId: "mat-a", exerciseId: "ej-b", solvedAt: d("2026-11-12") }] });
  const r3 = await P.syncFiles(adapter, "Estudio/Exodus", [...files2, { path: "../fuera.md", content: "x" }]);
  assert.equal(r3.skipped, 1);
  assert.ok(r3.updated >= 2);
  const a = adapter.files.get(ruta)!;
  assert.match(a, /resuelto el 2026-11-12/);
  assert.ok(a.endsWith("Lo que he entendido.\n"));
  assert.ok(![...adapter.files.keys()].some((k) => k.includes("fuera")));
});

test("plugin: pide la exportación con el token y avisa de los errores", async () => {
  const P = loadPlugin();
  const adapter = memoryAdapter();
  const app = { vault: { adapter }, workspace: { onLayoutReady: () => {} } };
  const plugin = new P(app, { serverUrl: "https://exodus.ejemplo.org/", token: "exo_abc", folder: "Exodus", intervalMinutes: 0 });
  await plugin.onload();

  fakeResponse = { status: 200, json: { version: EXPORT_VERSION, files: buildExport(vault, data) } };
  const r = (await plugin.sync(true)) as Record<string, number>;
  assert.equal(requests.at(-1)!.url, "https://exodus.ejemplo.org/api/obsidian/sync");
  assert.equal(requests.at(-1)!.headers.Authorization, "Bearer exo_abc");
  assert.equal(r.created, 6);
  assert.ok(adapter.files.has("Exodus/Temario.md"));
  assert.ok((plugin.stored as { lastSync: string }).lastSync);

  fakeResponse = { status: 401, json: { error: "token no válido" } };
  assert.equal(await plugin.sync(true), null);
  assert.match(notices.at(-1)!.msg, /token no es válido/);

  fakeResponse = { status: 200, json: { version: EXPORT_VERSION + 1, files: [] } };
  assert.equal(await plugin.sync(true), null);
  assert.match(notices.at(-1)!.msg, /descarga de nuevo el plugin/);

  const sinConfig = new P(app, {});
  await sinConfig.onload();
  const antes = requests.length;
  assert.equal(await sinConfig.sync(true), null);
  assert.equal(requests.length, antes, "sin dirección ni token no hace peticiones");
});

/* ───────── ZIP ───────── */

test("el ZIP se puede leer de vuelta: nombres UTF-8, contenido y CRC", () => {
  const entries = [
    { path: "Exodus-ana/Exodus/Nodos/Matemáticas/mat-a.md", data: "contenido con tildes: áéíóú ∑" },
    { path: "Exodus-ana/.obsidian/community-plugins.json", data: '["exodus-sync"]\n' },
  ];
  const zip = buildZip(entries);
  const eocd = zip.length - 22;
  assert.equal(zip.readUInt32LE(eocd), 0x06054b50);
  assert.equal(zip.readUInt16LE(eocd + 10), 2);
  let p = zip.readUInt32LE(eocd + 16);
  for (const e of entries) {
    assert.equal(zip.readUInt32LE(p), 0x02014b50);
    const crc = zip.readUInt32LE(p + 16);
    const size = zip.readUInt32LE(p + 20);
    const nameLen = zip.readUInt16LE(p + 28);
    const local = zip.readUInt32LE(p + 42);
    assert.equal(zip.subarray(p + 46, p + 46 + nameLen).toString("utf8"), e.path);
    const lNameLen = zip.readUInt16LE(local + 26);
    const content = zip.subarray(local + 30 + lNameLen, local + 30 + lNameLen + size);
    assert.equal(content.toString("utf8"), e.data);
    assert.equal(zlib.crc32(content) >>> 0, crc);
    p += 46 + nameLen;
  }
  assert.throws(() => buildZip([{ path: "../malo", data: "" }]));
});

test("la carpeta obsidian-plugin/ coincide con el plugin que sirve la web", async () => {
  const fs = await import("node:fs");
  const path = await import("node:path");
  const { archivosDelPlugin } = await import("../scripts/obsidian-plugin");
  for (const [nombre, contenido] of Object.entries(archivosDelPlugin)) {
    const actual = fs.readFileSync(path.join(__dirname, "..", "obsidian-plugin", nombre), "utf8").replace(/\r\n/g, "\n");
    assert.equal(actual, contenido, `obsidian-plugin/${nombre} no está al día: ejecuta npm run obsidian:plugin`);
  }
  const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "obsidian-plugin", "manifest.json"), "utf8"));
  assert.equal(manifest.id, "exodus-sync");
  assert.equal(manifest.isDesktopOnly, false);
});

test("el .gitignore de la bóveda deja fuera el token del plugin", async () => {
  const { VAULT_GITIGNORE, PLUGIN_ID } = await import("../src/lib/obsidian-plugin");
  const lineas = VAULT_GITIGNORE.split("\n");
  assert.ok(lineas.includes(`.obsidian/plugins/${PLUGIN_ID}/data.json`));
  assert.ok(!lineas.some((l) => l.trim() === ".obsidian/" || l.trim() === ".obsidian"), "el plugin debe poder viajar con la bóveda");
});

test("plugin Git incluido: archivos de la release comprobados, licencia y ajustes iniciales", async () => {
  const { gitPluginFiles, gitPluginVersion, GIT_PLUGIN_ID, GIT_PLUGIN_DATA } = await import("../src/lib/obsidian-git");
  const archivos = gitPluginFiles();
  assert.deepEqual(Object.keys(archivos).sort(), ["LICENSE", "main.js", "manifest.json", "styles.css"]);
  const manifest = JSON.parse(archivos["manifest.json"].toString("utf8"));
  assert.equal(manifest.id, GIT_PLUGIN_ID);
  assert.equal(manifest.isDesktopOnly, false);
  assert.equal(gitPluginVersion(), manifest.version);
  assert.match(archivos["LICENSE"].toString("utf8"), /^MIT License/);
  assert.ok(GIT_PLUGIN_DATA.autoSaveInterval > 0 && GIT_PLUGIN_DATA.autoPullOnBoot);
});

test("nota «Primeros pasos»: explica GitHub solo si va el plugin Git y nunca menciona subir el token", async () => {
  const { primerosPasos } = await import("../src/lib/obsidian-primeros-pasos");
  const conGit = primerosPasos({ origin: "https://exodus.example", conSync: true, conGit: true });
  const sinGit = primerosPasos({ origin: "https://exodus.example", conSync: false, conGit: false });
  assert.match(conGit, /^# Primeros pasos/);
  assert.match(conGit, /Git: Initialize a new repo/);
  assert.match(conGit, /Git: Clone an existing remote repo/);
  assert.match(conGit, /\.obsidian\/plugins\/exodus-sync\/data\.json/);
  assert.doesNotMatch(sinGit, /Git: Initialize/);
  assert.match(sinGit, /Crear un token para conectar a mano/);
  // Numeración seguida en las dos variantes.
  for (const nota of [conGit, sinGit]) {
    const nums = [...nota.matchAll(/^## (\d+)\./gm)].map((m) => Number(m[1]));
    assert.deepEqual(nums, nums.map((_, i) => i + 1));
  }
  assert.doesNotMatch(conGit, /\n{3,}/);
});
