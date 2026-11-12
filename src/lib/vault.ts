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

const exerciseSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id de ejercicio en kebab-case"),
  /** 1 = a completar (guiado), 2 = problema propio, 3 = difícil / integrador. */
  tier: z.number().int().min(1).max(3).default(2),
  prompt: z.string().min(1),
  /** Respuestas aceptadas, cada una `sha256:<hex>` del texto normalizado (npm run vault:ex). */
  answers: z.array(z.string().regex(/^sha256:[0-9a-f]{64}$/)).min(1).max(8),
});


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
  exercises: z.array(exerciseSchema).max(60).nullish().transform((v) => v ?? []),
  attachments: z
    .array(z.string().regex(ATTACHMENT_NAME, "nombre de adjunto inválido: solo letras, cifras, '.', '_' y '-', sin empezar por '.'"))
    .max(MAX_ATTACHMENTS)
    .nullish()
    .transform((v) => v ?? []),
});

export interface VaultExercise {
  id: string;
  tier: number;
  prompt: string;
  /** Solo servidor: hashes de las respuestas aceptadas. */
  answers: string[];
}

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
  /** Ejercicios autocorregidos; el dominio del nodo exige resolver el 80 %. */
  exercises: VaultExercise[];
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
      exercises: fm.data.exercises,
      attachments: fm.data.attachments,
      file,
      body: parsed.content,
    });
  }

  for (const node of nodes.values()) {
    const ids = node.exercises.map((e) => e.id);
    if (new Set(ids).size !== ids.length) issues.push({ file: node.file, message: "ids de ejercicio repetidos" });
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
      if (!st.isFile()) issues.push({ file: node.file, message: `el adjunto ${name} no es un archivo normal (¿enlace simbólico?)` });
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

/**
 * Lee un adjunto repitiendo en el momento de servirlo todas las comprobaciones de vault:check
 * (que solo avisa): no sigue enlaces simbólicos (O_NOFOLLOW en el archivo, realpath para los
 * directorios intermedios), exige un archivo normal y respeta el tamaño máximo. Devuelve null si
 * algo falla.
 */
export function readAttachment(nodeId: string, name: string): Buffer | null {
  let fd: number | undefined;
  try {
    const full = attachmentPath(nodeId, name);
    const root = fs.realpathSync(vaultRoot());
    const dir = fs.realpathSync(path.dirname(full));
    if (dir !== path.join(root, ATTACHMENTS_DIR, nodeId)) return null;
    // O_NOFOLLOW no existe en Windows (vale 0); allí el lstat previo rechaza los enlaces.
    if (!fs.lstatSync(full).isFile()) return null;
    fd = fs.openSync(full, fs.constants.O_RDONLY | (fs.constants.O_NOFOLLOW ?? 0));
    const st = fs.fstatSync(fd);
    if (!st.isFile() || st.size > MAX_ATTACHMENT_BYTES) return null;
    return fs.readFileSync(fd);
  } catch {
    return null;
  } finally {
    if (fd !== undefined) fs.closeSync(fd);
  }
}

/** Tamaño y SHA-256 de cada adjunto servible, para mostrarlos junto al enlace de descarga. */
export function attachmentInfo(node: VaultNode): AttachmentInfo[] {
  const out: AttachmentInfo[] = [];
  for (const name of node.attachments) {
    const data = readAttachment(node.id, name);
    // Un adjunto inválido ya aparece en vault:check; aquí simplemente no se lista.
    if (data) out.push({ name, size: data.length, sha256: crypto.createHash("sha256").update(data).digest("hex") });
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
