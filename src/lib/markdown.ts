/**
 * Motor de renderizado: Markdown de Obsidian → HTML en el servidor.
 *  - GFM (tablas, listas de tareas, notas al pie)
 *  - LaTeX ($…$ y $$…$$) compuesto con MathJax a SVG: sin JS ni fuentes en el cliente
 *  - Resaltado de código con Shiki (gramáticas de TextMate, cualquier lenguaje, carga perezosa)
 *  - Sintaxis de Obsidian: [[wikilinks]] / [[destino|alias]] y callouts `> [!tipo] Título`
 *  - Un id de nodo existente escrito como código (`mat-topologia`) se convierte en enlace a ese nodo
 * El HTML crudo incrustado en el Markdown se descarta (remark-rehype sin allowDangerousHtml).
 */
import crypto from "node:crypto";
import { unified, type Processor } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeMathjax from "./rehype-mathjax-svg";
import rehypeShiki from "@shikijs/rehype";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { visit, SKIP } from "unist-util-visit";
import type { Blockquote, InlineCode, Link, PhrasingContent, Root, Text } from "mdast";
import type { Element, Root as HastRoot } from "hast";
import type { Vault } from "./vault";
import { claveDeRender, conCache } from "./render-cache";

/** Resuelve el destino de un wikilink a un id de nodo (por id o por nombre de archivo). */
export type LinkResolver = ((target: string) => { id: string; title: string } | null) & {
  /** Huella de todo lo que el resolutor puede devolver: forma parte de la clave de la caché de HTML. */
  firma?: string;
};

const resolutores = new WeakMap<Vault, LinkResolver>();

export function linkResolverFor(vault: Vault): LinkResolver {
  const hecho = resolutores.get(vault);
  if (hecho) return hecho;
  const byName = new Map<string, string>();
  for (const node of vault.nodes.values()) {
    byName.set(node.id.toLowerCase(), node.id);
    const base = node.file.split("/").pop()!.replace(/\.md$/i, "").toLowerCase();
    if (!byName.has(base)) byName.set(base, node.id);
  }
  const resolve: LinkResolver = (target) => {
    const key = target.split("#")[0].split("/").pop()!.replace(/\.md$/i, "").trim().toLowerCase();
    const id = byName.get(key);
    return id ? { id, title: vault.nodes.get(id)!.title } : null;
  };
  const huella = crypto.createHash("sha256");
  for (const [nombre, id] of [...byName.entries()].sort()) huella.update(`${nombre}\t${id}\t${vault.nodes.get(id)!.title}\n`);
  resolve.firma = huella.digest("hex");
  resolutores.set(vault, resolve);
  return resolve;
}

const WIKILINK = /\[\[([^\[\]|]+)(?:\|([^\[\]]+))?\]\]/g;

function remarkWikilinks(options: { resolve: () => LinkResolver }) {
  return (tree: Root) => {
    const resolve = options.resolve();
    visit(tree, "text", (node: Text, index, parent) => {
      if (!parent || index === undefined || !node.value.includes("[[")) return;
      const out: PhrasingContent[] = [];
      let last = 0;
      for (const m of node.value.matchAll(WIKILINK)) {
        if (m.index > last) out.push({ type: "text", value: node.value.slice(last, m.index) });
        const hit = resolve(m[1]);
        const label = (m[2] ?? hit?.title ?? m[1]).trim();
        const link: Link = {
          type: "link",
          url: hit ? `/nodo/${hit.id}` : "#",
          children: [{ type: "text", value: label }],
          data: {
            hProperties: hit
              ? { className: ["wikilink"] }
              : { className: ["wikilink", "wikilink-rota"], title: `Nota no encontrada: ${m[1]}`, ariaDisabled: "true" },
          },
        };
        out.push(link);
        last = m.index + m[0].length;
      }
      if (out.length === 0) return;
      if (last < node.value.length) out.push({ type: "text", value: node.value.slice(last) });
      parent.children.splice(index, 1, ...out);
      return [SKIP, index + out.length];
    });
  };
}

const NODE_ID = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)+$/;

/**
 * Los nodos citan a otros por su id entre comillas invertidas («En las ramas, `mat-topologia`»). Si ese
 * nodo ya existe, el código pasa a ser un enlace; si aún no se ha escrito, queda como texto de código.
 */
function remarkNodeIdLinks(options: { resolve: () => LinkResolver }) {
  return (tree: Root) => {
    const resolve = options.resolve();
    visit(tree, "inlineCode", (node: InlineCode, index, parent) => {
      if (!parent || index === undefined || parent.type === "link" || !NODE_ID.test(node.value)) return;
      const hit = resolve(node.value);
      if (hit?.id !== node.value) return;
      const link: Link = {
        type: "link",
        url: `/nodo/${hit.id}`,
        children: [node],
        data: { hProperties: { className: ["wikilink"], title: hit.title } },
      };
      parent.children.splice(index, 1, link);
      return SKIP;
    });
  };
}

const CALLOUT = /^\[!([a-zA-Z-]+)\]([+-]?)[ \t]*(.*?)\r?(?:\n|$)/;

function remarkCallouts() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote) => {
      const first = node.children[0];
      if (first?.type !== "paragraph") return;
      const head = first.children[0];
      if (head?.type !== "text") return;
      const m = CALLOUT.exec(head.value);
      if (!m) return;

      const kind = m[1].toLowerCase();
      // El título es el resto de la primera línea; el contenido sigue en la línea siguiente.
      const title = m[3].trim() || kind.charAt(0).toUpperCase() + kind.slice(1);
      // Plegables al estilo Obsidian: «[!tipo]-» empieza cerrado y «[!tipo]+» abierto (<details>/<summary>).
      const fold = m[2];
      head.value = head.value.slice(m[0].length);
      if (head.value === "" && first.children.length === 1) node.children.shift();

      const className = ["callout", `callout-${kind}`];
      node.children.unshift({
        type: "paragraph",
        children: [{ type: "text", value: title }],
        data: fold
          ? { hName: "summary", hProperties: { className: ["callout-titulo"] } }
          : { hProperties: { className: ["callout-titulo"] } },
      });
      node.data = fold
        ? { hName: "details", hProperties: { className, open: fold === "+" } }
        : { hName: "aside", hProperties: { className } };
    });
  };
}

const SAFE_URL = /^(https?:|mailto:|\/|#)/i;

/** Elimina href / xlink:href que no sean http(s), mailto, rutas internas o anclas (HTML y SVG). */
function rehypeSafeLinks() {
  return (tree: HastRoot) => {
    visit(tree, "element", (el: Element) => {
      for (const key of ["href", "xLinkHref"]) {
        const value = el.properties?.[key];
        if (typeof value === "string" && !SAFE_URL.test(value.trim())) delete el.properties[key];
      }
    });
  };
}

const sanitizeSchema = {
  ...defaultSchema,
  clobberPrefix: "",
  tagNames: [...(defaultSchema.tagNames ?? []), "aside", "details", "summary"],
  attributes: {
    ...defaultSchema.attributes,
    code: [["className", /^language-./, "math-inline", "math-display"]],
    aside: [["className", /^callout/]],
    details: [["className", /^callout/], "open"],
    summary: [["className", "callout-titulo"]],
    p: [...(defaultSchema.attributes?.p ?? []), ["className", "callout-titulo"]],
    // La primera definición de `className` gana: se sustituye la del esquema por defecto.
    a: [
      ["className", "wikilink", "wikilink-rota", "data-footnote-backref"],
      ...(defaultSchema.attributes?.a ?? []).filter((d) => !(Array.isArray(d) && d[0] === "className")),
      "title",
      "ariaDisabled",
    ],
  },
} satisfies typeof defaultSchema;

// El resolver cambia en cada render (el vault se relee); el pipeline se construye una sola vez.
let currentResolver: LinkResolver = () => null;
/** Quién escribió el Markdown: el vault (confianza) o un usuario (Libreta). Cambia el motor de fórmulas. */
export type Origen = "vault" | "usuario";

const processors: Partial<Record<Origen, Processor<any, any, any, any, any>>> = {};

function getProcessor(origen: Origen) {
  return (processors[origen] ??= unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkCallouts)
    .use(remarkWikilinks, { resolve: () => currentResolver })
    .use(remarkNodeIdLinks, { resolve: () => currentResolver })
    .use(remarkRehype)
    // Saneado ANTES de MathJax/Shiki: filtra URLs peligrosas (javascript:) y atributos no previstos
    // del Markdown, sin tocar el SVG y los estilos que generan después los plugins de confianza.
    .use(rehypeSanitize, sanitizeSchema)
    .use(rehypeSlug)
    // MathJax antes que Shiki: consume los bloques `math` para que no se traten como código.
    // Contenido de usuario: motor MathJax propio y sin paquetes que definen macros (ver rehype-mathjax-svg.ts).
    .use(rehypeMathjax, { usuario: origen === "usuario" })
    .use(rehypeShiki, {
      theme: "night-owl",
      lazy: true,
      defaultLanguage: "text",
      fallbackLanguage: "text",
    })
    // MathJax corre después del saneado y admite \href{...}: segundo filtro solo de URLs.
    .use(rehypeSafeLinks)
    .use(rehypeStringify));
}

/** Renderiza sin caché. Las peticiones normales usan renderMarkdown. */
export async function renderMarkdownSinCache(markdown: string, resolve: LinkResolver, origen: Origen = "vault"): Promise<string> {
  currentResolver = resolve;
  const file = await getProcessor(origen).process(markdown);
  return String(file);
}

/**
 * Markdown → HTML con caché por contenido (ver render-cache.ts). Un resolutor sin firma (hecho a mano en las
 * pruebas) no usa la caché: no habría forma de saber si dos resolutores dan los mismos enlaces.
 */
export async function renderMarkdown(markdown: string, resolve: LinkResolver, origen: Origen = "vault"): Promise<string> {
  if (!resolve.firma) return renderMarkdownSinCache(markdown, resolve, origen);
  // El origen entra en la clave: una nota de usuario nunca comparte entrada de caché con el vault.
  const firma = origen === "vault" ? resolve.firma : `${resolve.firma}|origen=${origen}`;
  return conCache(claveDeRender(markdown, firma), () => renderMarkdownSinCache(markdown, resolve, origen));
}
