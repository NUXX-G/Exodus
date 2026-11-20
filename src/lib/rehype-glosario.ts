/**
 * Resalta en el HTML de un nodo la **primera** aparición de cada término del glosario: un enlace a /glosario con la
 * explicación llana en `data-def` (se muestra al pasar el ratón o al enfocar, ver globals.css). No toca código,
 * fórmulas, enlaces ni títulos. Corre después del saneado (su salida es de confianza: viene del vault).
 */
import type { Element, ElementContent, Root, Text } from "hast";
import { visitParents } from "unist-util-visit-parents";
import { patronTerminos, terminoEn, type Termino } from "./glosario";

const NO_TOCAR = new Set(["code", "pre", "a", "h1", "h2", "h3", "h4", "h5", "h6", "script", "style", "svg", "summary"]);

const esMath = (e: Element) => {
  const c = e.properties?.className;
  return Array.isArray(c) && c.some((x) => String(x).startsWith("math") || String(x) === "language-math");
};

export function rehypeGlosario(options: { terminos: () => Termino[] }) {
  return (tree: Root) => {
    const terminos = options.terminos();
    const patron = patronTerminos(terminos);
    if (!patron) return;
    const usados = new Set<string>();
    const cambios: { padre: Element | Root; nodo: Text; nuevos: ElementContent[] }[] = [];
    visitParents(tree, "text", (nodo: Text, ancestros) => {
      if (ancestros.some((a) => a.type === "element" && (NO_TOCAR.has((a as Element).tagName) || esMath(a as Element)))) return;
      const texto = nodo.value;
      patron.re.lastIndex = 0;
      const nuevos: ElementContent[] = [];
      let ultimo = 0;
      for (const m of texto.matchAll(patron.re)) {
        const t = terminoEn(texto, m.index!, m[1], patron);
        if (!t || usados.has(t.slug)) continue;
        // El aviso emergente es texto plano: sin delimitadores de LaTeX.
        const llano = t.llano.replace(/\$([^$]+)\$/g, "$1");
        usados.add(t.slug);
        if (m.index! > ultimo) nuevos.push({ type: "text", value: texto.slice(ultimo, m.index) });
        nuevos.push({
          type: "element",
          tagName: "a",
          properties: { className: ["termino"], href: `/glosario#${t.slug}`, dataDef: llano, title: `${t.termino}: ${llano}` },
          children: [{ type: "text", value: m[1] }],
        });
        ultimo = m.index! + m[1].length;
      }
      if (nuevos.length === 0) return;
      if (ultimo < texto.length) nuevos.push({ type: "text", value: texto.slice(ultimo) });
      cambios.push({ padre: ancestros[ancestros.length - 1] as Element | Root, nodo, nuevos });
    });
    for (const { padre, nodo, nuevos } of cambios) {
      const i = padre.children.indexOf(nodo as never);
      if (i >= 0) padre.children.splice(i, 1, ...(nuevos as never[]));
    }
  };
}
