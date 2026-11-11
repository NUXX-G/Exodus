/**
 * Motor de contenido: lee el vault de Obsidian desde disco en cada petición
 * (sin caché persistente), de modo que guardar un .md en Obsidian se refleja al recargar.
 *
 * Frontmatter YAML de un nodo:
 *
 *   id: sys-c-memoria              # único, kebab-case; es la identidad del nodo
 *   title: C y el modelo de memoria
 *   area: bajo-nivel               # una clave de AREAS
 *   trunk_level: 1                 # profundidad en el tronco (0 = raíz)
 *   prerequisites: [nodo-ejemplo]  # ids de otros nodos
 *   academic_sources:              # bibliografía real
 *     - "Kernighan & Ritchie. The C Programming Language, 2ª ed."
 *   ctf_flag: "sha256:<hex>"       # SHA-256 de la flag (npm run vault:flag); null = nodo aún sin reto
 *   hints:                         # opcional, máx. 3, en este orden:
 *     - "Concepto"
 *     - "Herramienta o comando"
 *     - "Documentación oficial"
 *   attachments:                   # opcional: archivos del reto (binarios, capturas...), servidos
 *     - reto.elf                   # desde vault/_adjuntos/<id>/ solo a usuarios con sesión
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import matter from "gray-matter";
import { z } from "zod";
import { AREA_IDS, type AreaId } from "./areas";

/** Directorio, dentro del vault, con una carpeta de adjuntos por id de nodo. */
export const ATTACHMENTS_DIR = "_adjuntos";
/** Sin barras ni punto inicial: un nombre válido no puede salir de la carpeta del nodo. */
const ATTACHMENT_NAME = /^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/;
const MAX_ATTACHMENTS = 10;
export const MAX_ATTACHMENT_BYTES = 20 * 1024 * 1024;

const frontmatterSchema = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id debe ser kebab-case (a-z, 0-9, guiones)"),
  title: z.string().min(1),
  area: z.enum(AREA_IDS),
  trunk_level: z.number().int().min(0),
  prerequisites: z.array(z.string()).nullish().transform((v) => v ?? []),
  academic_sources: z.array(z.string()).nullish().transform((v) => v ?? []),
  ctf_flag: z.string().min(1).nullish().transform((v) => v ?? null),
  hints: z.array(z.string().min(1)).max(3).nullish().transform((v) => v ?? []),
  attachments: z
    .array(z.string().regex(ATTACHMENT_NAME, "nombre de adjunto inválido: solo letras, cifras, '.', '_' y '-', sin empezar por '.'"))
    .max(MAX_ATTACHMENTS)
    .nullish()
    .transform((v) => v ?? []),
});

export interface VaultNode {
  id: string;
  title: string;
  area: AreaId;
  trunkLevel: number;
  prerequisites: string[];
  academicSources: string[];
  /** Solo servidor. Nunca serializar hacia el cliente. */
  ctfFlag: string | null;
  /** Solo servidor. Se entregan al cliente de una en una al revelarlas. */
  hints: string[];
  /** Nombres de los archivos del reto, en vault/_adjuntos/<id>/. */
  attachments: string[];
  /** Ruta relativa al vault, con `/`. */
  file: string;
  /** Cuerpo Markdown sin frontmatter. */
  body: string;
}

export interface VaultIssue {
  file: string;
  message: string;
}

export interface Vault {
  nodes: Map<string, VaultNode>;
  issues: VaultIssue[];
}

export function vaultRoot(): string {
  // El vault se lee en runtime desde un volumen: no debe empaquetarse con el build.
  return path.resolve(/*turbopackIgnore: true*/ process.env.VAULT_PATH ?? "./vault");
}

function* walk(dir: string): Generator<string> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue; // .obsidian, .trash, .git
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) yield full;
  }
}

export function loadVault(): Vault {
  const root = vaultRoot();
  const nodes = new Map<string, VaultNode>();
  const issues: VaultIssue[] = [];
  if (!fs.existsSync(root)) {
    return { nodes, issues: [{ file: root, message: "El directorio del vault no existe" }] };
  }

  for (const full of walk(root)) {
    const file = path.relative(root, full).split(path.sep).join("/");
    let parsed: matter.GrayMatterFile<string>;
    try {
      parsed = matter(fs.readFileSync(full, "utf8"));
    } catch (e) {
      issues.push({ file, message: `YAML inválido: ${(e as Error).message}` });
      continue;
    }
    // Notas sin `id` son notas normales de Obsidian (índices, apuntes): no son nodos.
    if (parsed.data.id === undefined) continue;

    const fm = frontmatterSchema.safeParse(parsed.data);
    if (!fm.success) {
      for (const issue of fm.error.issues) {
        issues.push({ file, message: `${issue.path.join(".") || "frontmatter"}: ${issue.message}` });
      }
      continue;
    }
    if (nodes.has(fm.data.id)) {
      issues.push({ file, message: `id duplicado "${fm.data.id}" (ya definido en ${nodes.get(fm.data.id)!.file})` });
      continue;
    }
    nodes.set(fm.data.id, {
      id: fm.data.id,
      title: fm.data.title,
      area: fm.data.area,
      trunkLevel: fm.data.trunk_level,
      prerequisites: fm.data.prerequisites,
      academicSources: fm.data.academic_sources,
      ctfFlag: fm.data.ctf_flag,
      hints: fm.data.hints,
      attachments: fm.data.attachments,
      file,
      body: parsed.content,
    });
  }

  // Adjuntos: deben existir, ser archivos normales y no superar el tamaño máximo.
  for (const node of nodes.values()) {
    if (new Set(node.attachments).size !== node.attachments.length) {
      issues.push({ file: node.file, message: "adjuntos repetidos" });
    }
    for (const name of node.attachments) {
      const full = attachmentPath(node.id, name);
      let st: fs.Stats;
      try {
        st = fs.lstatSync(full);
      } catch {
        issues.push({ file: node.file, message: `adjunto inexistente: ${ATTACHMENTS_DIR}/${node.id}/${name}` });
        continue;
      }
      if (!st.isFile()) issues.push({ file: node.file, message: `el adjunto ${name} no es un archivo normal` });
      else if (st.size > MAX_ATTACHMENT_BYTES) issues.push({ file: node.file, message: `el adjunto ${name} supera ${MAX_ATTACHMENT_BYTES} bytes` });
    }
  }

  // Integridad del grafo: prerequisitos existentes y sin ciclos.
  for (const node of nodes.values()) {
    for (const pre of node.prerequisites) {
      if (!nodes.has(pre)) issues.push({ file: node.file, message: `prerequisito inexistente "${pre}"` });
    }
  }
  const state = new Map<string, 1 | 2>(); // 1 = en pila, 2 = terminado
  const visit = (id: string, trail: string[]): void => {
    if (state.get(id) === 2) return;
    if (state.get(id) === 1) {
      const cycle = [...trail.slice(trail.indexOf(id)), id].join(" → ");
      issues.push({ file: nodes.get(id)!.file, message: `ciclo de prerequisitos: ${cycle}` });
      return;
    }
    state.set(id, 1);
    for (const pre of nodes.get(id)!.prerequisites) if (nodes.has(pre)) visit(pre, [...trail, id]);
    state.set(id, 2);
  };
  for (const id of nodes.keys()) visit(id, []);

  return { nodes, issues };
}

/**
 * Ruta en disco de un adjunto. Solo acepta nombres que pasan ATTACHMENT_NAME, y comprueba
 * además que el resultado queda dentro de la carpeta del nodo.
 */
export function attachmentPath(nodeId: string, name: string): string {
  if (!ATTACHMENT_NAME.test(name) || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(nodeId)) {
    throw new Error("nombre de adjunto inválido");
  }
  const dir = path.join(vaultRoot(), ATTACHMENTS_DIR, nodeId);
  const full = path.join(dir, name);
  if (path.dirname(full) !== dir) throw new Error("nombre de adjunto inválido");
  return full;
}

export interface AttachmentInfo {
  name: string;
  size: number;
  sha256: string;
}

/** Tamaño y SHA-256 de cada adjunto existente, para mostrarlos junto al enlace de descarga. */
export function attachmentInfo(node: VaultNode): AttachmentInfo[] {
  const out: AttachmentInfo[] = [];
  for (const name of node.attachments) {
    try {
      const data = fs.readFileSync(attachmentPath(node.id, name));
      out.push({ name, size: data.length, sha256: crypto.createHash("sha256").update(data).digest("hex") });
    } catch {
      // Un adjunto que falta ya aparece como problema en vault:check; aquí simplemente no se lista.
    }
  }
  return out;
}

export const sha256 = (s: string) => crypto.createHash("sha256").update(s, "utf8").digest("hex");

/** Compara en tiempo constante el envío con la flag del nodo (en claro o `sha256:<hex>`). */
export function checkFlag(node: VaultNode, submission: string): boolean {
  if (!node.ctfFlag) return false;
  const expected = node.ctfFlag.startsWith("sha256:")
    ? node.ctfFlag.slice(7).trim().toLowerCase()
    : sha256(node.ctfFlag.trim());
  const got = sha256(submission.trim());
  if (expected.length !== got.length) return false;
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(got));
}
