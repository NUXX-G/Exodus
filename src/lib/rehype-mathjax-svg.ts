/**
 * LaTeX → SVG con MathJax, como `rehype-mathjax` (mismo recorrido del árbol, misma salida y mismo tratamiento de
 * errores) pero con **un único motor para todo el proceso**.
 *
 * Por qué: `rehype-mathjax` 7 crea en cada renderizado una entrada TeX con todos los paquetes y una salida SVG
 * nuevas. MathJax 3 deja parte de ese trabajo registrado y nunca lo libera: medido sobre el vault, ~0,8 MB de memoria
 * retenida por nodo (250 MB tras renderizar los 180), suficiente para que el contenedor de 512 MB se quedara sin
 * memoria y se reiniciara en bucle. Con un motor compartido la memoria se queda plana y cada renderizado es más rápido.
 *
 * Compartir un motor exige que ninguna fórmula pueda dejarle estado (macros, colores, flechas u opciones nuevas): si
 * no, una fórmula cambiaría cómo se dibujan las siguientes, también las de otros usuarios y las guardadas en la caché.
 * Dos defensas:
 *  - Dos motores. El del vault (contenido de confianza, revisado en el repositorio) tiene todos los paquetes. El de
 *    lo que escriben los usuarios (Libreta) no carga los paquetes que permiten definir cosas: `newcommand`
 *    (`\newcommand`, `\def`, `\let`, `\DeclareMathOperator`…), `mathtools` (`\DeclarePairedDelimiter`,
 *    `\newtagform`, `\mathtoolsset`…), `extpfeil` (`\Newextarrow`), `configmacros` y `tagformat`.
 *  - En los dos, `TEX_CON_ESTADO` rechaza antes de convertir cualquier orden que defina o configure algo: la fórmula
 *    sale como error (`data-mjx-error`) y `vault:check` falla si aparece en el vault.
 * Además, `entrada.reset()` vacía antes de cada fórmula la numeración y las etiquetas de ecuaciones.
 */
import type { Element, ElementContent, Root, Text } from "hast";
import { h } from "hastscript";
import { toText } from "hast-util-to-text";
import { SKIP, visitParents } from "unist-util-visit-parents";
import type { VFile } from "vfile";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import type { LiteElement } from "mathjax-full/js/adaptors/lite/Element.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { mathjax } from "mathjax-full/js/mathjax.js";
import { SVG } from "mathjax-full/js/output/svg.js";

/**
 * Órdenes TeX que definen o configuran algo que sobrevive a la fórmula. Cubre todas las variantes de MathJax 3: todo
 * lo que empieza por new/renew/provide/declare en cualquier capitalización salvo `\newline` (`\newcommand`,
 * `\renewcommand`, `\newenvironment`, `\Newextarrow`, `\newtagform`, `\DeclareMathOperator`,
 * `\DeclarePairedDelimiter`…), `\def`, `\gdef`, `\edef`, `\xdef`, `\let`, `\definecolor`, `\require`, `\setOptions`,
 * `\mathtoolsset`, `\usetagform`, `\label`, `\ref`, `\eqref` y `\tag`.
 */
export const TEX_CON_ESTADO =
  /\\(?!newline(?![a-z]))(?:(?:re)?new|provide|declare)[a-z]*|\\[gex]?def(?![a-z])|\\let(?![a-z])|\\(?:definecolor|require|setoptions|mathtoolsset|usetagform|label|eqref|ref|tag)(?![a-z])/i;

/** Paquetes que permiten definir o configurar algo: fuera del motor de contenido de usuario. */
const PAQUETES_QUE_DEFINEN = new Set(["newcommand", "mathtools", "extpfeil", "configmacros", "tagformat", "setoptions", "require", "autoload"]);
const PAQUETES_USUARIO = AllPackages.filter((p) => !PAQUETES_QUE_DEFINEN.has(p));

interface Motor {
  convertir(tex: string, display: boolean): LiteElement;
  hojaDeEstilo(): LiteElement;
}

const motores: { vault?: Motor; usuario?: Motor } = {};
let manejadorRegistrado = false;

function crearMotor(paquetes: string[]): Motor {
  if (!manejadorRegistrado) {
    RegisterHTMLHandler(liteAdaptor());
    manejadorRegistrado = true;
  }
  const entrada = new TeX({ packages: paquetes });
  const salida = new SVG();
  const documento = mathjax.document("", { InputJax: entrada, OutputJax: salida });
  return {
    convertir: (tex, display) => {
      // Numeración de ecuaciones a cero en cada fórmula, como con un motor nuevo.
      entrada.reset();
      return documento.convert(tex, { display }) as LiteElement;
    },
    hojaDeEstilo: () => salida.styleSheet(documento) as LiteElement,
  };
}

/** Convierte un LiteElement con las mismas reglas que rehype-mathjax (`h(kind, attributes, children)`). */
function desdeLite(el: LiteElement): Element {
  const hijos: Array<Element | Text> = [];
  for (const n of el.children) {
    hijos.push("value" in n ? { type: "text", value: (n as unknown as { value: string }).value } : desdeLite(n as LiteElement));
  }
  return h(el.kind, el.attributes as Record<string, string>, hijos) as Element;
}

export interface OpcionesMathjax {
  /** Contenido escrito por un usuario (Libreta): motor sin los paquetes que permiten definir cosas. */
  usuario?: boolean;
}

export default function rehypeMathjaxSvg(opciones: OpcionesMathjax = {}) {
  const tipo = opciones.usuario ? "usuario" : "vault";
  return function (tree: Root, file: VFile) {
    let motor: Motor | undefined;
    let encontrado = false;
    let contexto: Root | Element = tree;

    visitParents(tree, "element", function (element, parents) {
      const clases = Array.isArray(element.properties.className) ? (element.properties.className as string[]) : [];
      const lenguajeMath = clases.includes("language-math");
      const mathDisplay = clases.includes("math-display");
      const mathInline = clases.includes("math-inline");
      let display = mathDisplay;

      if (element.tagName === "head") contexto = element;
      if (!lenguajeMath && !mathDisplay && !mathInline) return;

      let padre = parents[parents.length - 1] as Root | Element | undefined;
      let ambito: Element = element;
      if (element.tagName === "code" && lenguajeMath && padre && padre.type === "element" && padre.tagName === "pre") {
        ambito = padre;
        padre = parents[parents.length - 2] as Root | Element | undefined;
        display = true;
      }
      if (!padre) return;

      motor ??= motores[tipo] ??= crearMotor(tipo === "usuario" ? PAQUETES_USUARIO : AllPackages);
      encontrado = true;
      const texto = toText(ambito, { whitespace: "pre" });
      let resultado: ElementContent[];
      try {
        const conEstado = texto.match(TEX_CON_ESTADO);
        if (conEstado) throw new Error(`${conEstado[0]} no está permitida: el motor MathJax es compartido entre nodos`);
        resultado = [desdeLite(motor.convertir(texto, display))];
      } catch (error) {
        const causa = error as Error;
        file.message("Could not render math with mathjax", {
          ancestors: [...parents, element],
          cause: causa,
          place: element.position,
          ruleId: "mathjax-error",
          source: "rehype-mathjax",
        });
        resultado = [
          {
            type: "element",
            tagName: "span",
            // data-mjx-error, como los errores de TeX que marca MathJax: vault:check lo detecta y falla.
            properties: { className: ["mathjax-error"], style: "color:#cc0000", title: String(causa), dataMjxError: String(causa) },
            children: [{ type: "text", value: texto }],
          },
        ];
      }
      const indice = padre.children.indexOf(ambito);
      padre.children.splice(indice, 1, ...resultado);
      return SKIP;
    });

    if (encontrado && motor) {
      const hoja = desdeLite(motor.hojaDeEstilo());
      // rehype-mathjax quita el id que sugiere MathJax.
      hoja.properties.id = undefined;
      (contexto.children as ElementContent[]).push(hoja);
    }
  };
}
