"use strict";
var obsidian = require("obsidian");

var EXPORT_VERSION = 1;
var MARK_END = "<!-- exodus:fin -->";
var DEFAULTS = { serverUrl: "", token: "", folder: "Exodus", intervalMinutes: 30, lastSync: "" };

/** Une la nota que llega del servidor con la que ya existe, conservando lo escrito por el usuario. */
function mergeNote(existing, incoming) {
  if (existing === null || existing === undefined || existing.trim() === "") return incoming;
  var endIn = incoming.indexOf(MARK_END);
  if (endIn === -1) return existing;
  var head = incoming.slice(0, endIn + MARK_END.length);
  var endEx = existing.indexOf(MARK_END);
  if (endEx === -1) return head + "\n\n" + existing.replace(/^\s+/, "");
  return head + existing.slice(endEx + MARK_END.length);
}

/** Solo rutas relativas de notas Markdown o dibujos SVG, sin subir de carpeta ni caracteres raros. */
function safeRelative(rel) {
  if (typeof rel !== "string" || rel.length === 0 || rel.length > 300) return false;
  if (rel.charAt(0) === "/" || rel.indexOf("\\") !== -1 || rel.indexOf(":") !== -1) return false;
  if (!/\.(md|svg)$/.test(rel)) return false;
  var parts = rel.split("/");
  for (var i = 0; i < parts.length; i++) if (parts[i] === "" || parts[i] === "." || parts[i] === "..") return false;
  return true;
}

function joinPath(folder, rel) {
  var f = String(folder || "").replace(/^\/+|\/+$/g, "");
  return f ? f + "/" + rel : rel;
}

/** Escribe las notas con el adaptador de la bóveda. Devuelve cuántas creó, cambió, dejó igual o descartó. */
async function syncFiles(adapter, folder, files, normalize) {
  var norm = normalize || function (p) { return p; };
  var r = { created: 0, updated: 0, unchanged: 0, skipped: 0 };
  for (var i = 0; i < files.length; i++) {
    var f = files[i];
    if (!f || !safeRelative(f.path) || typeof f.content !== "string") { r.skipped++; continue; }
    var path = norm(joinPath(folder, f.path));
    var dirs = path.split("/").slice(0, -1);
    for (var d = 1; d <= dirs.length; d++) {
      var dir = dirs.slice(0, d).join("/");
      if (!(await adapter.exists(dir))) await adapter.mkdir(dir);
    }
    var existing = (await adapter.exists(path)) ? await adapter.read(path) : null;
    // Las notas conservan lo que el usuario escribe debajo de exodus:fin; los dibujos se sustituyen enteros.
    var merged = /\.md$/.test(path) ? mergeNote(existing, f.content) : f.content;
    if (existing === merged) { r.unchanged++; continue; }
    await adapter.write(path, merged);
    if (existing === null) r.created++; else r.updated++;
  }
  return r;
}

class ExodusSync extends obsidian.Plugin {
  async onload() {
    this.settings = Object.assign({}, DEFAULTS, await this.loadData());
    this.running = false;
    this.timer = null;
    this.addSettingTab(new ExodusSettingTab(this.app, this));
    this.addCommand({ id: "sincronizar", name: "Sincronizar ahora", callback: () => this.sync(true) });
    this.addRibbonIcon("refresh-cw", "Sincronizar Exodus", () => this.sync(true));
    this.app.workspace.onLayoutReady(() => this.sync(false));
    this.schedule();
  }

  schedule() {
    if (this.timer !== null) window.clearInterval(this.timer);
    this.timer = null;
    var minutes = Number(this.settings.intervalMinutes);
    if (minutes > 0) {
      this.timer = window.setInterval(() => this.sync(false), minutes * 60000);
      this.registerInterval(this.timer);
    }
  }

  async saveSettings() {
    await this.saveData(this.settings);
    this.schedule();
  }

  async sync(manual) {
    if (this.running) return null;
    if (!this.settings.serverUrl || !this.settings.token) {
      if (manual) new obsidian.Notice("Exodus: pon la dirección de tu instancia y el token en los ajustes del plugin.");
      return null;
    }
    this.running = true;
    try {
      var url = this.settings.serverUrl.trim().replace(/\/+$/, "") + "/api/obsidian/sync";
      var res = await obsidian.requestUrl({
        url: url,
        method: "GET",
        headers: { Authorization: "Bearer " + this.settings.token.trim() },
        throw: false,
      });
      if (res.status === 401) throw new Error("el token no es válido o se desconectó desde /cuenta");
      if (res.status !== 200) throw new Error("el servidor respondió " + res.status);
      var data = res.json;
      if (!data || !Array.isArray(data.files)) throw new Error("respuesta inesperada del servidor");
      if (data.version !== EXPORT_VERSION) throw new Error("versión distinta: descarga de nuevo el plugin desde /cuenta");
      var r = await syncFiles(this.app.vault.adapter, this.settings.folder, data.files, obsidian.normalizePath);
      this.settings.lastSync = new Date().toISOString();
      await this.saveData(this.settings);
      if (manual || r.created + r.updated > 0) {
        new obsidian.Notice("Exodus: " + r.created + " notas nuevas, " + r.updated + " actualizadas.");
      }
      return r;
    } catch (e) {
      var msg = "Exodus: no se pudo sincronizar (" + (e && e.message ? e.message : String(e)) + ").";
      if (manual) new obsidian.Notice(msg);
      else console.warn(msg);
      return null;
    } finally {
      this.running = false;
    }
  }
}

class ExodusSettingTab extends obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display() {
    var c = this.containerEl;
    var p = this.plugin;
    c.empty();
    new obsidian.Setting(c)
      .setName("Dirección de Exodus")
      .setDesc("Por ejemplo https://exodus.midominio.com")
      .addText((t) => t.setValue(p.settings.serverUrl).onChange(async (v) => { p.settings.serverUrl = v.trim(); await p.saveSettings(); }));
    new obsidian.Setting(c)
      .setName("Token")
      .setDesc("Se genera en /cuenta → Obsidian. Si lo desconectas allí, deja de funcionar.")
      .addText((t) => {
        t.inputEl.type = "password";
        t.setValue(p.settings.token).onChange(async (v) => { p.settings.token = v.trim(); await p.saveSettings(); });
      });
    new obsidian.Setting(c)
      .setName("Carpeta")
      .setDesc("Dónde se escriben las notas de Exodus dentro de esta bóveda.")
      .addText((t) => t.setValue(p.settings.folder).onChange(async (v) => { p.settings.folder = v.trim() || "Exodus"; await p.saveSettings(); }));
    new obsidian.Setting(c)
      .setName("Sincronizar automáticamente")
      .setDesc("Al abrir Obsidian y cada cierto tiempo.")
      .addDropdown((d) =>
        d
          .addOptions({ "0": "Solo a mano", "15": "Cada 15 minutos", "30": "Cada 30 minutos", "60": "Cada hora" })
          .setValue(String(p.settings.intervalMinutes))
          .onChange(async (v) => { p.settings.intervalMinutes = Number(v); await p.saveSettings(); }),
      );
    new obsidian.Setting(c)
      .setName("Sincronizar ahora")
      .setDesc(p.settings.lastSync ? "Última sincronización: " + new Date(p.settings.lastSync).toLocaleString() : "Aún no se ha sincronizado.")
      .addButton((b) => b.setButtonText("Sincronizar").setCta().onClick(async () => { await p.sync(true); this.display(); }));
  }
}

module.exports = ExodusSync;
module.exports.default = ExodusSync;
module.exports.mergeNote = mergeNote;
module.exports.syncFiles = syncFiles;
module.exports.safeRelative = safeRelative;
