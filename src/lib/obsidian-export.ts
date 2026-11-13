/**
 * Exportación a Obsidian: convierte el progreso de UN usuario en notas Markdown. Módulo puro (sin base de
 * datos ni Next): recibe el vault y los datos del usuario y devuelve la lista de archivos.
 *
 * Cada nota generada tiene una parte que reescribe la sincronización, entre MARK_START y MARK_END, y
 * debajo un espacio "Mis notas" que es del usuario y nunca se toca (ver mergeNote en obsidian-plugin.ts).
 * Nunca se exportan respuestas, flags ni pistas no reveladas.
 */
import { AREAS, AREA_IDS } from "./areas";
import { masteryNeeded } from "./exercises";
import type { Vault, VaultNode } from "./vault";

export const EXPORT_VERSION = 1;
export const MARK_START = "<!-- exodus:inicio · esta parte la reescribe la sincronización: escribe tus notas debajo de exodus:fin -->";
export const MARK_END = "<!-- exodus:fin -->";
const USER_TAIL = "\n\n## Mis notas\n\n";

export interface UserExportData {
  username: string;
  /** Fecha local YYYY-MM-DD de "hoy" para repasos pendientes. */
  today: string;
  progress: { nodeId: string; status: "in_progress" | "completed"; firstOpenedAt: Date; completedAt: Date | null }[];
  solved: { nodeId: string; exerciseId: string; solvedAt: Date }[];
  reviews: { nodeId: string; exerciseId: string; dueDay: string }[];
  hints: { nodeId: string; level: number }[];
  /** Actividad por día: tipo de evento y nodo. */
  activity: { day: string; kind: string; nodeId: string | null }[];
  streak: number;
}

export interface ExportFile {
  path: string;
  content: string;
}

const pad = (n: number) => String(n).padStart(2, "0");
const day = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const yaml = (s: string) => JSON.stringify(s);
const TIER = ["", "a completar", "problema", "difícil"];

/** Nombre de carpeta seguro en cualquier sistema de archivos. */
const folder = (s: string) => s.replace(/[\\/:*?"<>|#^[\]]/g, "-").trim();

function note(frontmatter: Record<string, string | number | string[]>, body: string): string {
  const fm = Object.entries(frontmatter)
    .map(([k, v]) => (Array.isArray(v) ? `${k}: [${v.map(yaml).join(", ")}]` : `${k}: ${typeof v === "number" ? v : yaml(v)}`))
    .join("\n");
  return `---\n${fm}\n---\n${MARK_START}\n${body.trim()}\n${MARK_END}${USER_TAIL}`;
}

/** Cita como bloque de Markdown (cada línea con `> `). */
const quote = (text: string) =>
  text
    .trim()
    .split("\n")
    .map((l) => (l ? `> ${l}` : ">"))
    .join("\n");

/** `root`: carpeta que antecede a todas las rutas (la del ZIP); vacía para el plugin, que pone la suya. */
export function buildExport(vault: Vault, data: UserExportData, root = ""): ExportFile[] {
  const pre = root ? root + "/" : "";
  const progress = new Map(data.progress.map((p) => [p.nodeId, p]));
  const exported = (id: string) => progress.has(id) && vault.nodes.has(id);
  const link = (n: VaultNode) => (exported(n.id) ? `[[${n.id}|${n.title}]]` : n.title);
  const solvedBy = new Map<string, Map<string, Date>>();
  for (const s of data.solved) {
    if (!solvedBy.has(s.nodeId)) solvedBy.set(s.nodeId, new Map());
    solvedBy.get(s.nodeId)!.set(s.exerciseId, s.solvedAt);
  }
  const reviewOf = new Map(data.reviews.map((r) => [`${r.nodeId}/${r.exerciseId}`, r.dueDay]));
  const hintsOf = new Map<string, number[]>();
  for (const h of data.hints) hintsOf.set(h.nodeId, [...(hintsOf.get(h.nodeId) ?? []), h.level].sort());
  const completed = new Set(data.progress.filter((p) => p.status === "completed").map((p) => p.nodeId));
  const nodes = [...vault.nodes.values()].sort(
    (a, b) => AREA_IDS.indexOf(a.area) - AREA_IDS.indexOf(b.area) || a.trunkLevel - b.trunkLevel || a.title.localeCompare(b.title, "es"),
  );
  const nodePath = (n: VaultNode) => `${pre}Nodos/${folder(AREAS[n.area].label)}/${n.id}.md`;
  const files: ExportFile[] = [];

  /* ── Una nota por nodo abierto ── */
  for (const n of nodes) {
    const p = progress.get(n.id);
    if (!p) continue;
    const solved = solvedBy.get(n.id) ?? new Map<string, Date>();
    const hints = hintsOf.get(n.id) ?? [];
    const dependents = nodes.filter((m) => m.prerequisites.includes(n.id));
    const prereqs = n.prerequisites.map((id) => vault.nodes.get(id)).filter((m): m is VaultNode => !!m);

    const estado = p.status === "completed" ? "completado" : "en curso";
    const lines = [
      `> [!info] Tu progreso`,
      `> **${estado[0].toUpperCase() + estado.slice(1)}** · abierto el ${day(p.firstOpenedAt)}` +
        (p.completedAt ? ` · completado el ${day(p.completedAt)}` : ""),
    ];
    if (n.exercises.length > 0) {
      lines.push(`> Ejercicios: ${solved.size} de ${n.exercises.length} resueltos (dominio con ${masteryNeeded(n.exercises.length)})`);
    }
    if (n.hints.length > 0) lines.push(`> Pistas reveladas: ${hints.length} de ${n.hints.length}`);
    if (prereqs.length) lines.push(`> Prerequisitos: ${prereqs.map(link).join(" · ")}`);
    if (dependents.length) lines.push(`> Abre paso a: ${dependents.map(link).join(" · ")}`);

    let body = `${lines.join("\n")}\n\n${n.body.trim()}\n`;

    if (hints.length > 0) {
      body += `\n## Pistas que revelaste\n\n${hints.map((l) => `${l}. ${n.hints[l - 1]}`).join("\n")}\n`;
    }
    if (n.exercises.length > 0) {
      body += `\n## Ejercicios\n`;
      n.exercises.forEach((e, i) => {
        const when = solved.get(e.id);
        const due = reviewOf.get(`${n.id}/${e.id}`);
        const estadoEj = when ? `✅ resuelto el ${day(when)}${due ? ` · próximo repaso el ${due}` : ""}` : "⬜ pendiente";
        body += `\n### ${i + 1}. \`${e.id}\` (${TIER[e.tier]})\n\n${e.prompt.trim()}\n\n*${estadoEj}*\n`;
      });
    }
    if (n.academicSources.length > 0) {
      body += `\n## Bibliografía\n\n${n.academicSources.map((s) => `- ${s}`).join("\n")}\n`;
    }

    files.push({
      path: nodePath(n),
      content: note(
        {
          exodus_id: n.id,
          aliases: [n.title],
          area: AREAS[n.area].label,
          nivel: n.trunkLevel,
          estado,
          abierto: day(p.firstOpenedAt),
          ...(p.completedAt ? { completado: day(p.completedAt) } : {}),
          ...(n.exercises.length ? { ejercicios: `${solved.size}/${n.exercises.length}` } : {}),
          tags: ["exodus", `exodus/${n.area}`],
        },
        body,
      ),
    });
  }

  /* ── Temario completo con el estado de cada nodo ── */
  let temario = `# Temario de Exodus\n\nTodos los nodos, por área y nivel. Los enlazados son los que ya has abierto.\n`;
  for (const area of AREA_IDS) {
    const deArea = nodes.filter((n) => n.area === area);
    if (!deArea.length) continue;
    const hechos = deArea.filter((n) => completed.has(n.id)).length;
    temario += `\n## ${AREAS[area].label} (${hechos}/${deArea.length})\n`;
    for (const level of [...new Set(deArea.map((n) => n.trunkLevel))]) {
      temario += `\n**Nivel ${level}**\n\n`;
      for (const n of deArea.filter((m) => m.trunkLevel === level)) {
        const p = progress.get(n.id);
        const marca = completed.has(n.id) ? "x" : " ";
        const extra = p?.completedAt ? ` — completado el ${day(p.completedAt)}` : p ? " — en curso" : "";
        temario += `- [${marca}] ${link(n)}${extra}\n`;
      }
    }
  }
  files.push({ path: `${pre}Temario.md`, content: note({ tags: ["exodus"] }, temario) });

  /* ── Panel: resumen, repasos pendientes, en curso ── */
  const total = vault.nodes.size;
  const enCurso = nodes.filter((n) => progress.get(n.id)?.status === "in_progress");
  const pendientes = data.reviews.filter((r) => r.dueDay <= data.today && vault.nodes.has(r.nodeId));
  let panel = `# Exodus · ${data.username}\n\n`;
  panel += `| Nodos completados | En curso | Ejercicios resueltos | Racha |\n| --- | --- | --- | --- |\n`;
  panel += `| ${completed.size} de ${total} | ${enCurso.length} | ${data.solved.length} | ${data.streak} ${data.streak === 1 ? "día" : "días"} |\n`;
  panel += `\n## Repasos pendientes (${pendientes.length})\n\n`;
  panel += pendientes.length
    ? pendientes.map((r) => `- ${r.dueDay} · \`${r.exerciseId}\` de ${link(vault.nodes.get(r.nodeId)!)}`).join("\n") + "\n"
    : "Ninguno: estás al día.\n";
  panel += `\n## En curso\n\n`;
  panel += enCurso.length ? enCurso.map((n) => `- ${link(n)}`).join("\n") + "\n" : "Nada a medias.\n";
  panel += `\nVer también: [[Temario]] y la carpeta \`Registro\`.\n`;
  files.push({ path: `${pre}Panel.md`, content: note({ tags: ["exodus"] }, panel) });

  /* ── Registro: un archivo por mes, una sección por día ── */
  type Dia = { abiertos: Set<string>; resueltos: string[]; flags: Set<string>; repasos: number; pistas: number };
  const dias = new Map<string, Dia>();
  const get = (d: string) => {
    if (!dias.has(d)) dias.set(d, { abiertos: new Set(), resueltos: [], flags: new Set(), repasos: 0, pistas: 0 });
    return dias.get(d)!;
  };
  for (const a of data.activity) {
    const d = get(a.day);
    if (a.kind === "node_opened" && a.nodeId) d.abiertos.add(a.nodeId);
    else if (a.kind === "flag_captured" && a.nodeId) d.flags.add(a.nodeId);
    else if (a.kind === "review_done") d.repasos++;
    else if (a.kind === "hint_revealed") d.pistas++;
  }
  for (const s of data.solved) get(day(s.solvedAt)).resueltos.push(`${s.nodeId}/${s.exerciseId}`);

  const nombre = (id: string) => (vault.nodes.has(id) ? link(vault.nodes.get(id)!) : `\`${id}\``);
  const meses = new Map<string, string[]>();
  for (const d of [...dias.keys()].sort().reverse()) {
    const r = dias.get(d)!;
    const partes: string[] = [];
    if (r.abiertos.size) partes.push(`- Estudiaste: ${[...r.abiertos].map(nombre).join(", ")}`);
    if (r.resueltos.length) {
      const porNodo = new Map<string, string[]>();
      for (const k of r.resueltos) {
        const [nodo, ej] = k.split("/");
        porNodo.set(nodo, [...(porNodo.get(nodo) ?? []), `\`${ej}\``]);
      }
      partes.push(`- Resolviste ${r.resueltos.length} ${r.resueltos.length === 1 ? "ejercicio" : "ejercicios"}: ` +
        [...porNodo].map(([nodo, ejs]) => `${nombre(nodo)} (${ejs.join(", ")})`).join("; "));
    }
    if (r.flags.size) partes.push(`- Capturaste la flag de ${[...r.flags].map(nombre).join(", ")}`);
    if (r.repasos) partes.push(`- Repasos hechos: ${r.repasos}`);
    if (r.pistas) partes.push(`- Pistas reveladas: ${r.pistas}`);
    if (!partes.length) continue;
    const mes = d.slice(0, 7);
    meses.set(mes, [...(meses.get(mes) ?? []), `## ${d}\n\n${partes.join("\n")}\n`]);
  }
  for (const [mes, secciones] of meses) {
    files.push({ path: `${pre}Registro/${mes}.md`, content: note({ tags: ["exodus", "exodus/registro"] }, `# Registro de ${mes}\n\n${secciones.join("\n")}`) });
  }

  return files;
}
