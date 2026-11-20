/**
 * Motor de contenido: lee el vault de Obsidian desde disco en cada petición
 * (sin caché persistente), de modo que guardar un .md en Obsidian se refleja al recargar.
 *
 * Frontmatter YAML de un nodo:
 *
 *   id: sys-c-memoria              # único, kebab-case; es la identidad del nodo
 *   title: C y el modelo de memoria
 *   area: bajo-nivel               # un área integrada (areas.ts) o declarada en vault/_areas.md
 *   trunk_level: 1                 # profundidad en el tronco (0 = raíz)
 *   kind: proyecto                 # opcional: teoria (por defecto), proyecto o laboratorio
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
import { AREAS_FILE, mergeAreas, type AreaId, type AreaInfo } from "./areas";
import { marcadores, TIPOS, type TipoId } from "./tipos-ejercicio";
import { errorDeSellado } from "./sellado";

const HASH = z.string().regex(/^sha256:[0-9a-f]{64}$/);

const exerciseSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id de ejercicio en kebab-case"),
    /** 1 = a completar (guiado), 2 = problema propio, 3 = difícil / integrador. */
    tier: z.number().int().min(1).max(3).default(2),
    /** Tipo de corrección (src/lib/tipos-ejercicio.ts). Sin `type`: texto exacto normalizado (formato v1). */
    type: z.enum(TIPOS).default("texto"),
    /** Enunciado en Markdown; con variantes, admite `{{dato}}`. */
    prompt: z.string().min(1),
    /** Hashes aceptados (los genera scripts/ex-inject.ts). Con `variants`, cada variante lleva los suyos. */
    answers: z.array(HASH).max(64).default([]),
    /** numero/matriz: cifras significativas que se comparan. */
    sig: z.number().int().min(1).max(12).optional(),
    /** numero: unidad en que se espera el resultado; se admite cualquier unidad compatible. */
    unit: z.string().min(1).max(40).optional(),
    /** expresion: variables admitidas e intervalo donde se evalúa. */
    vars: z.array(z.string().regex(/^[A-Za-z][A-Za-z0-9_]*$/)).max(6).optional(),
    domain: z.tuple([z.number(), z.number()]).optional(),
    form: z.enum(["factorizada", "expandida", "sin-raices-en-denominador"]).optional(),
    /** opcion: texto de cada opción (Markdown) y si hay varias correctas. */
    options: z.array(z.string().min(1)).min(2).max(10).optional(),
    multiple: z.boolean().optional(),
    /** Solo para el repaso: no cuenta para el dominio ni aparece en el nodo (pregunta distinta del temario). */
    review: z.boolean().default(false),
    /** desarrollo: solución modelo y rúbrica selladas (src/lib/sellado.ts); nunca llegan al navegador antes de entregar. */
    sealed: z.string().startsWith("gz64:").max(200_000).optional(),
    /** Plantilla parametrizada: cada intento usa otra variante, con sus datos y sus hashes. */
    variants: z
      .array(z.object({ values: z.record(z.string(), z.union([z.number(), z.string()])), answers: z.array(HASH).min(1).max(64) }))
      .max(200)
      .optional(),
  })
  .superRefine((e, ctx) => {
    if (e.type === "desarrollo") {
      if (!e.sealed) ctx.addIssue({ code: "custom", message: "un ejercicio de desarrollo necesita sealed (solución y rúbrica)" });
      else if (errorDeSellado(e.sealed)) ctx.addIssue({ code: "custom", message: `sealed ilegible: ${errorDeSellado(e.sealed)}` });
    } else if (!e.variants?.length && e.answers.length === 0) ctx.addIssue({ code: "custom", message: "sin respuestas (answers o variants)" });
    if (e.type === "opcion" && !e.options) ctx.addIssue({ code: "custom", message: "un ejercicio de opción múltiple necesita options" });
    if (e.type === "expresion" && !e.vars) ctx.addIssue({ code: "custom", message: "un ejercicio de expresión necesita vars" });
    if (e.domain && !(e.domain[0] < e.domain[1])) ctx.addIssue({ code: "custom", message: "domain: el extremo izquierdo debe ser menor" });
    for (const [i, v] of (e.variants ?? []).entries()) {
      for (const k of marcadores(e.prompt)) {
        if (!(k in v.values)) ctx.addIssue({ code: "custom", message: `variante ${i}: falta el dato {{${k}}}` });
      }
    }
  });


/** Directorio, dentro del vault, con una carpeta de adjuntos por id de nodo. */
export const ATTACHMENTS_DIR = "_adjuntos";
/** Sin barras ni punto inicial: un nombre válido no puede salir de la carpeta del nodo. */
const ATTACHMENT_NAME = /^[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/;
const MAX_ATTACHMENTS = 10;
export const MAX_ATTACHMENT_BYTES = 20 * 1024 * 1024;

/** Teoría (por defecto), proyecto grande por hitos o laboratorio práctico con adjuntos y flag. */
export const NODE_KINDS = ["teoria", "proyecto", "laboratorio"] as const;
export type NodeKind = (typeof NODE_KINDS)[number];
export const KIND_LABEL: Record<NodeKind, string> = { teoria: "Teoría", proyecto: "Proyecto", laboratorio: "Laboratorio" };

const frontmatterSchema = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "id debe ser kebab-case (a-z, 0-9, guiones)"),
  title: z.string().min(1),
  area: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "area debe ser kebab-case"),
  trunk_level: z.number().int().min(0),
  prerequisites: z.array(z.string()).nullish().transform((v) => v ?? []),
  academic_sources: z.array(z.string()).nullish().transform((v) => v ?? []),
  kind: z.enum(NODE_KINDS).nullish().transform((v): NodeKind => v ?? "teoria"),
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
  type: TipoId;
  prompt: string;
  /** Solo servidor: hashes de las respuestas aceptadas. */
  answers: string[];
  sig?: number;
  unit?: string;
  vars?: string[];
  domain?: [number, number];
  form?: "factorizada" | "expandida" | "sin-raices-en-denominador";
  options?: string[];
  multiple?: boolean;
  review: boolean;
  /** Solo servidor: solución y rúbrica selladas de un ejercicio de desarrollo. */
  sealed?: string;
  /** Solo servidor (los hashes); los datos se muestran al rellenar el enunciado. */
  variants?: { values: Record<string, string | number>; answers: string[] }[];
}

export interface VaultNode {
  id: string;
  title: string;
  area: AreaId;
  trunkLevel: number;
  /** Teoría, proyecto o laboratorio (frontmatter `kind`, por defecto teoría). */
  kind: NodeKind;
  prerequisites: string[];
  academicSources: string[];
  /** Solo servidor. Nunca serializar hacia el cliente. */
  ctfFlag: string | null;
  /** Solo servidor. Se entregan al cliente de una en una al revelarlas. */
  hints: string[];
  /** Ejercicios autocorregidos del nodo; el dominio exige resolver el 80 %. */
  exercises: VaultExercise[];
  /** Banco de preguntas solo de repaso (`review: true`): distintas de las del nodo, no cuentan para el dominio. */
  reviewBank: VaultExercise[];
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
  /** Áreas integradas más las de vault/_areas.md, en orden de presentación. */
  areas: Map<string, AreaInfo>;
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

let enCache: { root: string; firma: string; vault: Vault; comprobado: number } | null = null;

/** Huella barata del vault: ruta, tamaño y fecha de cada .md (y de cada adjunto). Leerlo entero cuesta ~100 ms. */
function firmaDelVault(root: string): string {
  const h = crypto.createHash("sha1").update(root);
  const anota = (full: string) => {
    try {
      const st = fs.statSync(full);
      h.update(`${full}\t${st.size}\t${st.mtimeMs}\n`);
    } catch {
      h.update(`${full}\t-\n`);
    }
  };
  for (const full of walk(root)) anota(full);
  const adj = path.join(root, ATTACHMENTS_DIR);
  if (fs.existsSync(adj)) for (const d of fs.readdirSync(adj)) for (const f of fs.readdirSync(path.join(adj, d))) anota(path.join(adj, d, f));
  return h.digest("hex");
}

/**
 * El vault, leído de disco solo si algún archivo ha cambiado desde la última vez: guardar un .md en Obsidian
 * se sigue viendo al recargar. No modifiques el objeto devuelto: lo comparten todas las peticiones.
 */
export function loadVault(): Vault {
  const root = vaultRoot();
  // Comprobar la huella cuesta un stat por archivo (~200 archivos): se hace como mucho una vez cada
  // VAULT_RECHECK_MS (2 s por defecto). Un cambio en el vault se ve, como tarde, a los 2 s.
  if (enCache?.root === root && Date.now() - enCache.comprobado < recheckMs()) return enCache.vault;
  if (!fs.existsSync(root)) return leerVault(root);
  const firma = firmaDelVault(root);
  if (enCache?.root === root && enCache.firma === firma) {
    enCache.comprobado = Date.now();
    return enCache.vault;
  }
  const vault = leerVault(root);
  enCache = { root, firma, vault, comprobado: Date.now() };
  return vault;
}

function recheckMs(): number {
  const v = Number(process.env.VAULT_RECHECK_MS);
  return Number.isFinite(v) && v >= 0 ? v : 2000;
}

function leerVault(root: string): Vault {
  const nodes = new Map<string, VaultNode>();
  const issues: VaultIssue[] = [];
  if (!fs.existsSync(root)) {
    return { nodes, areas: mergeAreas(undefined).areas, issues: [{ file: root, message: "El directorio del vault no existe" }] };
  }

  let areasData: unknown;
  for (const full of walk(root)) {
    const file = path.relative(root, full).split(path.sep).join("/");
    let parsed: matter.GrayMatterFile<string>;
    try {
      // Normaliza CRLF a LF: en Windows, Git puede entregar los .md con finales \r\n, y el análisis de Markdown
      // (avisos, tablas, bloques) espera \n.
      parsed = matter(fs.readFileSync(full, "utf8").replace(/\r\n?/g, "\n"));
    } catch (e) {
      issues.push({ file, message: `YAML inválido: ${(e as Error).message}` });
      continue;
    }
    if (file === AREAS_FILE) {
      areasData = parsed.data.areas;
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
      kind: fm.data.kind,
      prerequisites: fm.data.prerequisites,
      academicSources: fm.data.academic_sources,
      ctfFlag: fm.data.ctf_flag,
      hints: fm.data.hints,
      exercises: fm.data.exercises.filter((e) => !e.review),
      reviewBank: fm.data.exercises.filter((e) => e.review),
      attachments: fm.data.attachments,
      file,
      body: parsed.content,
    });
  }

  const { areas, issues: areaIssues } = mergeAreas(areasData);
  for (const message of areaIssues) issues.push({ file: AREAS_FILE, message });
  for (const node of nodes.values()) {
    if (!areas.has(node.area)) issues.push({ file: node.file, message: `área desconocida "${node.area}": declárala en ${AREAS_FILE}` });
  }

  for (const node of nodes.values()) {
    const ids = [...node.exercises, ...node.reviewBank].map((e) => e.id);
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

  return { nodes, areas, issues };
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
