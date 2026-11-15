/**
 * Compacta las fórmulas de una página. MathJax (salida SVG, caché de glifos «local») mete en cada fórmula los trazos de
 * cada letra que usa: un nodo con muchas fórmulas repetía los mismos ~70 glifos cientos de veces (en
 * `mat-numeros-naturales`, 1462 trazos de los que solo 74 eran distintos: 627 KB de 2,4 MB) y la hoja de estilo de
 * MathJax una vez por fragmento. Next manda además el HTML dos veces (página y datos de navegación), así que todo
 * eso pesaba el doble.
 *
 * `compactarFormulas` deja en cada fragmento solo las referencias (`<use xlink:href="#MJX-G-TEX-N-37">`) y devuelve
 * aparte, una sola vez por página, los trazos distintos y una sola hoja de estilo. El dibujo es idéntico: son los
 * mismos trazos, referenciados desde otro `<svg>` del mismo documento, como hace la caché «global» de MathJax.
 *
 * Es una transformación de texto sobre el HTML que genera nuestro renderizador. Si un fragmento tiene algo que no
 * encaja con lo esperado (un `<defs>` con otra cosa, dos trazos distintos con el mismo nombre), se deja intacto.
 */

const RE_DEFS = /<defs>((?:<path id="MJX-\d+-TEX-[^"]+" d="[^"]*"><\/path>)*)<\/defs>/g;
const RE_PATH = /<path id="MJX-\d+-(TEX-[^"]+)" d="([^"]*)"><\/path>/g;
const RE_USE = /xlink:href="#MJX-\d+-(TEX-[^"]+)"/g;
const RE_ESTILO = /<style>\nmjx-container\[jax="SVG"\][\s\S]*?<\/style>/g;

export interface FormulasCompactadas {
  fragmentos: string[];
  /** HTML que debe ir una vez en la página (antes o después de los fragmentos): trazos y hoja de estilo. Vacío si no hay fórmulas. */
  definiciones: string;
}

export function compactarFormulas(fragmentos: string[]): FormulasCompactadas {
  const glifos = new Map<string, string>();
  let estilo = "";
  const salida = fragmentos.map((html) => {
    if (!html.includes("<mjx-container")) return html;
    // Trazos de este fragmento; si alguno choca con uno ya visto con otro dibujo, no se toca el fragmento.
    const propios = new Map<string, string>();
    for (const defs of html.matchAll(RE_DEFS)) {
      for (const [, clave, d] of defs[1].matchAll(RE_PATH)) {
        const previo = glifos.get(clave) ?? propios.get(clave);
        if (previo !== undefined && previo !== d) return html;
        propios.set(clave, d);
      }
    }
    for (const [clave, d] of propios) glifos.set(clave, d);
    let compacto = html.replace(RE_DEFS, "").replace(RE_USE, 'xlink:href="#MJX-G-$1"');
    compacto = compacto.replace(RE_ESTILO, (s) => {
      estilo ||= s;
      return "";
    });
    return compacto;
  });
  if (glifos.size === 0 && !estilo) return { fragmentos: salida, definiciones: "" };
  const trazos = [...glifos].map(([clave, d]) => `<path id="MJX-G-${clave}" d="${d}"></path>`).join("");
  const svg = glifos.size
    ? `<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;width:0;height:0;overflow:hidden" aria-hidden="true" focusable="false"><defs>${trazos}</defs></svg>`
    : "";
  return { fragmentos: salida, definiciones: svg + estilo };
}
