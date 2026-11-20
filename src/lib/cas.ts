/**
 * CAS mínimo para corregir respuestas: lee expresiones en notación sencilla (`2x^2 + sqrt(x)/3`) o en LaTeX
 * (`2x^{2}+\frac{\sqrt{x}}{3}`), las convierte en un árbol y las evalúa numéricamente. No simplifica ni deriva:
 * la equivalencia de dos expresiones se decide evaluándolas en puntos fijos (ver `tipos-ejercicio.ts`).
 *
 * Módulo puro (sin servidor ni disco) y sin `eval`: el texto del usuario solo pasa por este analizador.
 */

export type Nodo =
  | { t: "num"; v: number }
  | { t: "var"; n: string }
  | { t: "const"; n: "pi" | "e" }
  | { t: "neg"; a: Nodo }
  | { t: "op"; o: "+" | "-" | "*" | "/" | "^"; a: Nodo; b: Nodo }
  | { t: "fn"; f: string; args: Nodo[] }
  | { t: "fact"; a: Nodo };

export class ErrorExpresion extends Error {}

/** Funciones admitidas (con sus sinónimos en español). */
const FUNCIONES: Record<string, string> = {
  sin: "sin", sen: "sin", cos: "cos", tan: "tan", tg: "tan", sec: "sec", csc: "csc", cosec: "csc", cot: "cot", cotg: "cot",
  asin: "asin", arcsin: "asin", arcsen: "asin", acos: "acos", arccos: "acos", atan: "atan", arctan: "atan", arctg: "atan",
  sinh: "sinh", senh: "sinh", cosh: "cosh", tanh: "tanh", asinh: "asinh", acosh: "acosh", atanh: "atanh",
  ln: "ln", log: "log", log10: "log10", log2: "log2", exp: "exp", sqrt: "sqrt", raiz: "sqrt", cbrt: "cbrt",
  abs: "abs", floor: "floor", ceil: "ceil", sign: "sign", sgn: "sign", max: "max", min: "min",
};
const ARIDAD: Record<string, [number, number]> = { log: [1, 2], max: [2, 8], min: [2, 8] };

const GRIEGAS = [
  "alpha", "beta", "gamma", "delta", "epsilon", "varepsilon", "zeta", "eta", "theta", "vartheta", "iota", "kappa",
  "lambda", "mu", "nu", "xi", "rho", "sigma", "tau", "phi", "varphi", "chi", "psi", "omega",
  "Gamma", "Delta", "Theta", "Lambda", "Xi", "Sigma", "Phi", "Psi", "Omega",
];

/* ───────── LaTeX → notación sencilla ───────── */

/** Lee un argumento `{...}` (o un solo carácter) desde `i`. Devuelve el contenido y la posición siguiente. */
function argumento(s: string, i: number): [string, number] {
  while (s[i] === " ") i++;
  if (s[i] !== "{") {
    if (s[i] === "\\") {
      const m = /^\\[A-Za-z]+/.exec(s.slice(i));
      if (m) return [m[0], i + m[0].length];
    }
    if (i >= s.length) throw new ErrorExpresion("falta un argumento");
    return [s[i], i + 1];
  }
  let nivel = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === "{") nivel++;
    else if (s[j] === "}" && --nivel === 0) return [s.slice(i + 1, j), j + 1];
  }
  throw new ErrorExpresion("llaves sin cerrar");
}

export function latexASencilla(entrada: string): string {
  let s = entrada.trim().replace(/^\$+|\$+$/g, "").replace(/^\\\(|\\\)$/g, "").replace(/^\\\[|\\\]$/g, "");
  s = s
    .replace(/\\(left|right|big|Big|bigg|Bigg)(?=[()[\]|.]|\\[{}|])/g, "")
    .replace(/\\left\./g, "")
    .replace(/\\right\./g, "")
    .replace(/\\[{}]/g, (m) => (m === "\\{" ? "(" : ")"))
    .replace(/\\(,|;|:|!|quad|qquad)/g, " ")
    .replace(/\\(cdot|times|ast)/g, "*")
    .replace(/\\div/g, "/")
    .replace(/\\(mathrm|operatorname|text|mathit|mathbf)\{([^{}]*)\}/g, "$2")
    .replace(/\\(lvert|rvert|vert|mid)/g, "|");
  let out = "";
  for (let i = 0; i < s.length; ) {
    if (s.startsWith("\\frac", i) || s.startsWith("\\dfrac", i) || s.startsWith("\\tfrac", i)) {
      i += s.startsWith("\\frac", i) ? 5 : 6;
      const [a, j] = argumento(s, i);
      const [b, k] = argumento(s, j);
      out += `((${latexASencilla(a)})/(${latexASencilla(b)}))`;
      i = k;
    } else if (s.startsWith("\\sqrt", i)) {
      i += 5;
      while (s[i] === " ") i++;
      let indice: string | null = null;
      if (s[i] === "[") {
        const fin = s.indexOf("]", i);
        if (fin < 0) throw new ErrorExpresion("corchete sin cerrar en \\sqrt");
        indice = s.slice(i + 1, fin);
        i = fin + 1;
      }
      const [a, j] = argumento(s, i);
      out += indice ? `((${latexASencilla(a)})^(1/(${latexASencilla(indice)})))` : `sqrt(${latexASencilla(a)})`;
      i = j;
    } else if (s[i] === "^" || s[i] === "_") {
      const op = s[i];
      const [a, j] = argumento(s, i + 1);
      out += op === "^" ? `^(${latexASencilla(a)})` : `_${a.replace(/[{}\s]/g, "")}`;
      i = j;
    } else if (s[i] === "\\") {
      const m = /^\\([A-Za-z]+)/.exec(s.slice(i));
      if (!m) {
        i++;
        continue;
      }
      const cmd = m[1];
      if (cmd === "pi") out += " pi ";
      else if (GRIEGAS.includes(cmd)) out += ` ${cmd} `;
      else if (FUNCIONES[cmd]) out += ` ${cmd} `;
      else if (cmd === "infty") throw new ErrorExpresion("∞ no es un número: escribe un valor finito");
      else throw new ErrorExpresion(`orden LaTeX no admitida: \\${cmd}`);
      i += m[0].length;
    } else if (s[i] === "{") out += "(", i++;
    else if (s[i] === "}") out += ")", i++;
    else out += s[i++];
  }
  return out;
}

/* ───────── Analizador ───────── */

type Token =
  | { k: "num"; v: number }
  | { k: "id"; v: string }
  | { k: "op"; v: string };

/** Separa en tokens. `vars` son los nombres de variable admitidos (los de varias letras se buscan primero). */
function tokens(s: string, vars: string[]): Token[] {
  const out: Token[] = [];
  const ordenadas = [...new Set([...vars, ...GRIEGAS])].sort((a, b) => b.length - a.length);
  const funciones = Object.keys(FUNCIONES).sort((a, b) => b.length - a.length);
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) {
      i++;
      continue;
    }
    const num = /^(\d+(?:[.,]\d+)?|[.,]\d+)(?:[eE][+-]?\d+)?/.exec(s.slice(i));
    if (num && !/^[eE]/.test(num[0])) {
      // «2e» seguido de no-dígito sería 2·e: el regex solo toma el exponente si hay dígitos.
      out.push({ k: "num", v: Number(num[0].replace(",", ".")) });
      i += num[0].length;
      continue;
    }
    if (/[A-Za-zα-ωΑ-Ωπ]/.test(c)) {
      const resto = s.slice(i);
      const letras = /^[A-Za-zα-ωΑ-Ωπ]+(?:_[A-Za-z0-9]+)?/.exec(resto)![0];
      // 1) función o constante al principio; 2) variable declarada; 3) una sola letra.
      const f = funciones.find((n) => letras.startsWith(n) && (letras.length === n.length || !vars.some((v) => letras.startsWith(v) && v.length > n.length)));
      const v = ordenadas.find((n) => resto.startsWith(n));
      if (f && (!v || f.length >= v.length)) {
        out.push({ k: "id", v: f });
        i += f.length;
      } else if (v) {
        out.push({ k: "id", v });
        i += v.length;
      } else if (letras.startsWith("pi")) {
        out.push({ k: "id", v: "pi" });
        i += 2;
      } else if (c === "π") {
        out.push({ k: "id", v: "pi" });
        i++;
      } else {
        const sub = /^[A-Za-zα-ωΑ-Ω](_[A-Za-z0-9]+)?/.exec(resto)![0];
        out.push({ k: "id", v: sub });
        i += sub.length;
      }
      continue;
    }
    const sim: Record<string, string> = { "·": "*", "×": "*", "÷": "/", "−": "-", "–": "-", "√": "√", "**": "^", "²": "²", "³": "³" };
    if (s.startsWith("**", i)) {
      out.push({ k: "op", v: "^" });
      i += 2;
      continue;
    }
    if ("+-*/^()[]|!;,".includes(c) || sim[c]) {
      out.push({ k: "op", v: sim[c] ?? c });
      i++;
      continue;
    }
    throw new ErrorExpresion(`carácter no admitido: «${c}»`);
  }
  return out;
}

export function analizar(entrada: string, vars: string[] = []): Nodo {
  const texto = /\\[A-Za-z]|\\frac|[{}]/.test(entrada) ? latexASencilla(entrada) : entrada;
  if (texto.length > 400) throw new ErrorExpresion("expresión demasiado larga");
  const tk = tokens(texto, vars);
  let p = 0;
  let profundidad = 0;
  const ver = () => tk[p];
  const es = (v: string) => tk[p]?.k === "op" && tk[p].v === v;
  const espera = (v: string) => {
    if (!es(v)) throw new ErrorExpresion(`se esperaba «${v}»`);
    p++;
  };
  const empiezaPrimario = () => {
    const t = ver();
    return !!t && (t.k === "num" || t.k === "id" || (t.k === "op" && (t.v === "(" || t.v === "[" || t.v === "√")));
  };

  function suma(): Nodo {
    if (++profundidad > 60) throw new ErrorExpresion("expresión demasiado anidada");
    let a = termino();
    while (es("+") || es("-")) {
      const o = tk[p++].v as "+" | "-";
      a = { t: "op", o, a, b: termino() };
    }
    profundidad--;
    return a;
  }
  function termino(): Nodo {
    let a = unario();
    for (;;) {
      if (es("*") || es("/")) {
        const o = tk[p++].v as "*" | "/";
        a = { t: "op", o, a, b: unario() };
      } else if (empiezaPrimario()) {
        a = { t: "op", o: "*", a, b: potencia() }; // multiplicación implícita: 2x, x(x+1), 2 sin x
      } else return a;
    }
  }
  function unario(): Nodo {
    if (es("-")) {
      p++;
      return { t: "neg", a: unario() };
    }
    if (es("+")) {
      p++;
      return unario();
    }
    return potencia();
  }
  function potencia(): Nodo {
    let base = postfijo();
    if (es("²") || es("³")) {
      const e = tk[p++].v === "²" ? 2 : 3;
      base = { t: "op", o: "^", a: base, b: { t: "num", v: e } };
    }
    if (es("^")) {
      p++;
      return { t: "op", o: "^", a: base, b: unario() };
    }
    return base;
  }
  function postfijo(): Nodo {
    let a = primario();
    while (es("!")) {
      p++;
      a = { t: "fact", a };
    }
    return a;
  }
  function primario(): Nodo {
    const t = ver();
    if (!t) throw new ErrorExpresion("expresión incompleta");
    if (t.k === "num") {
      p++;
      return { t: "num", v: t.v };
    }
    if (t.k === "op" && (t.v === "(" || t.v === "[")) {
      p++;
      const a = suma();
      espera(t.v === "(" ? ")" : "]");
      return a;
    }
    if (t.k === "op" && t.v === "|") {
      p++;
      const a = suma();
      espera("|");
      return { t: "fn", f: "abs", args: [a] };
    }
    if (t.k === "op" && t.v === "√") {
      p++;
      return { t: "fn", f: "sqrt", args: [potencia()] };
    }
    if (t.k === "id") {
      p++;
      const f = FUNCIONES[t.v];
      if (f) {
        let args: Nodo[];
        if (es("(")) {
          p++;
          args = [suma()];
          while (es(";") || es(",")) {
            p++;
            args.push(suma());
          }
          espera(")");
        } else if (es("^")) {
          // sin^2 x = (sin x)^2
          p++;
          const exp = unario();
          return { t: "op", o: "^", a: { t: "fn", f, args: [potencia()] }, b: exp };
        } else args = [potencia()];
        const [min, max] = ARIDAD[f] ?? [1, 1];
        if (args.length < min || args.length > max) throw new ErrorExpresion(`número de argumentos incorrecto en ${t.v}`);
        return { t: "fn", f, args };
      }
      if (t.v === "pi") return { t: "const", n: "pi" };
      if (t.v === "e" && !vars.includes("e")) return { t: "const", n: "e" };
      if (!vars.includes(t.v)) throw new ErrorExpresion(`variable desconocida: «${t.v}»${vars.length ? ` (usa ${vars.join(", ")})` : ""}`);
      return { t: "var", n: t.v };
    }
    throw new ErrorExpresion(`símbolo inesperado: «${t.v}»`);
  }

  const arbol = suma();
  if (p < tk.length) throw new ErrorExpresion(`sobra algo a partir de «${tk[p].v}»`);
  return arbol;
}

/* ───────── Evaluación ───────── */

function factorial(n: number): number {
  if (!Number.isInteger(n) || n < 0) return NaN;
  if (n > 170) return Infinity;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

export function evaluar(n: Nodo, vals: Record<string, number> = {}): number {
  switch (n.t) {
    case "num":
      return n.v;
    case "const":
      return n.n === "pi" ? Math.PI : Math.E;
    case "var":
      if (!(n.n in vals)) throw new ErrorExpresion(`sin valor para ${n.n}`);
      return vals[n.n];
    case "neg":
      return -evaluar(n.a, vals);
    case "fact":
      return factorial(evaluar(n.a, vals));
    case "op": {
      const a = evaluar(n.a, vals);
      const b = evaluar(n.b, vals);
      switch (n.o) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        case "^": {
          // Raíz real de índice impar de un negativo: (-8)^(1/3) = -2.
          if (a < 0 && !Number.isInteger(b)) {
            const inv = 1 / b;
            if (Math.abs(inv - Math.round(inv)) < 1e-12 && Math.round(inv) % 2 !== 0) return -Math.pow(-a, b);
          }
          return Math.pow(a, b);
        }
      }
    }
    // eslint-disable-next-line no-fallthrough
    case "fn": {
      const x = n.args.map((a) => evaluar(a, vals));
      const [u, v] = x;
      switch (n.f) {
        case "sin": return Math.sin(u);
        case "cos": return Math.cos(u);
        case "tan": return Math.tan(u);
        case "sec": return 1 / Math.cos(u);
        case "csc": return 1 / Math.sin(u);
        case "cot": return 1 / Math.tan(u);
        case "asin": return Math.asin(u);
        case "acos": return Math.acos(u);
        case "atan": return Math.atan(u);
        case "sinh": return Math.sinh(u);
        case "cosh": return Math.cosh(u);
        case "tanh": return Math.tanh(u);
        case "asinh": return Math.asinh(u);
        case "acosh": return Math.acosh(u);
        case "atanh": return Math.atanh(u);
        case "ln": return Math.log(u);
        case "log": return x.length === 2 ? Math.log(v) / Math.log(u) : Math.log10(u); // log(b; x) = log_b x
        case "log10": return Math.log10(u);
        case "log2": return Math.log2(u);
        case "exp": return Math.exp(u);
        case "sqrt": return Math.sqrt(u);
        case "cbrt": return Math.cbrt(u);
        case "abs": return Math.abs(u);
        case "floor": return Math.floor(u);
        case "ceil": return Math.ceil(u);
        case "sign": return Math.sign(u);
        case "max": return Math.max(...x);
        case "min": return Math.min(...x);
      }
      throw new ErrorExpresion(`función desconocida: ${n.f}`);
    }
  }
}

/** Variables que aparecen en el árbol. */
export function variablesDe(n: Nodo, out = new Set<string>()): Set<string> {
  if (n.t === "var") out.add(n.n);
  else if (n.t === "neg" || n.t === "fact") variablesDe(n.a, out);
  else if (n.t === "op") {
    variablesDe(n.a, out);
    variablesDe(n.b, out);
  } else if (n.t === "fn") n.args.forEach((a) => variablesDe(a, out));
  return out;
}

/** Texto legible del árbol, con paréntesis explícitos: sirve de vista previa de «cómo lo he entendido». */
export function aTexto(n: Nodo): string {
  const prec = (m: Nodo): number =>
    m.t === "op" ? { "+": 1, "-": 1, "*": 2, "/": 2, "^": 4 }[m.o] : m.t === "neg" ? 3 : 5;
  const envuelve = (m: Nodo, min: number) => (prec(m) < min ? `(${aTexto(m)})` : aTexto(m));
  switch (n.t) {
    case "num": return String(n.v);
    case "var": return n.n;
    case "const": return n.n === "pi" ? "π" : "e";
    case "neg": return `-${envuelve(n.a, 4)}`;
    case "fact": return `${envuelve(n.a, 5)}!`;
    case "fn": return `${n.f}(${n.args.map(aTexto).join("; ")})`;
    case "op": {
      const p = prec(n);
      if (n.o === "^") return `${envuelve(n.a, 5)}^${envuelve(n.b, 4)}`;
      const sim = n.o === "*" ? "·" : n.o;
      return `${envuelve(n.a, p)} ${sim} ${envuelve(n.b, n.o === "-" || n.o === "/" ? p + 1 : p)}`;
    }
  }
}

const LATEX_FN: Record<string, string> = {
  sin: "\\sin", cos: "\\cos", tan: "\\tan", sec: "\\sec", csc: "\\csc", cot: "\\cot", asin: "\\arcsin", acos: "\\arccos",
  atan: "\\arctan", sinh: "\\sinh", cosh: "\\cosh", tanh: "\\tanh", ln: "\\ln", log: "\\log", exp: "\\exp", max: "\\max", min: "\\min",
};

/** LaTeX del árbol, para la vista previa de la respuesta (lo que Exodus ha entendido, bien dibujado). */
export function aLatex(n: Nodo): string {
  const prec = (m: Nodo): number => (m.t === "op" ? { "+": 1, "-": 1, "*": 2, "/": 5, "^": 4 }[m.o] : m.t === "neg" ? 3 : 5);
  const env = (m: Nodo, min: number) => (prec(m) < min ? `\\left(${aLatex(m)}\\right)` : aLatex(m));
  const nombre = (s: string) => {
    const [base, sub] = s.split("_");
    const b = GRIEGAS.includes(base) ? `\\${base}` : base;
    return sub ? `${b}_{${sub}}` : b;
  };
  switch (n.t) {
    case "num": return Number.isInteger(n.v) || Math.abs(n.v) >= 1e-4 ? String(n.v) : n.v.toExponential().replace(/e([+-]?\d+)/, "\\cdot 10^{$1}");
    case "var": return nombre(n.n);
    case "const": return n.n === "pi" ? "\\pi" : "e";
    case "neg": return `-${env(n.a, 4)}`;
    case "fact": return `${env(n.a, 5)}!`;
    case "fn":
      if (n.f === "sqrt") return `\\sqrt{${aLatex(n.args[0])}}`;
      if (n.f === "cbrt") return `\\sqrt[3]{${aLatex(n.args[0])}}`;
      if (n.f === "abs") return `\\left|${aLatex(n.args[0])}\\right|`;
      if (n.f === "log" && n.args.length === 2) return `\\log_{${aLatex(n.args[0])}}\\left(${aLatex(n.args[1])}\\right)`;
      return `${LATEX_FN[n.f] ?? `\\operatorname{${n.f}}`}\\left(${n.args.map(aLatex).join(", ")}\\right)`;
    case "op":
      if (n.o === "/") return `\\frac{${aLatex(n.a)}}{${aLatex(n.b)}}`;
      if (n.o === "^") return `${env(n.a, 5)}^{${aLatex(n.b)}}`;
      if (n.o === "*") {
        // Número por letra sin punto (2x); en otro caso, punto.
        const implicito = n.a.t === "num" && (n.b.t === "var" || n.b.t === "const" || n.b.t === "fn");
        return `${env(n.a, 2)}${implicito ? "" : " \\cdot "}${env(n.b, 2)}`;
      }
      return `${env(n.a, 1)} ${n.o} ${env(n.b, n.o === "-" ? 2 : 1)}`;
  }
}

/* ───────── Forma de la expresión ───────── */

export type Forma = "factorizada" | "expandida" | "sin-raices-en-denominador";

const esSuma = (n: Nodo) => n.t === "op" && (n.o === "+" || n.o === "-");

/** Comprueba reglas de forma sobre el árbol (además de la equivalencia numérica). */
export function cumpleForma(n: Nodo, forma: Forma): boolean {
  if (forma === "factorizada") {
    // Producto (o potencia, o negación de producto) en la raíz, con al menos un factor no constante que sea suma
    // o potencia: «(x-1)(x+2)», «2(x+3)^2». Una suma en la raíz no está factorizada.
    const raiz = n.t === "neg" ? n.a : n;
    if (esSuma(raiz)) return false;
    return raiz.t === "op" || raiz.t === "var" || raiz.t === "fn";
  }
  if (forma === "expandida") {
    // Ninguna suma dentro de un producto, cociente-numerador o potencia entera.
    const malo = (m: Nodo): boolean => {
      if (m.t === "op") {
        if (m.o === "*" && (esSuma(m.a) || esSuma(m.b))) return true;
        if (m.o === "^" && esSuma(m.a) && m.b.t === "num" && Number.isInteger(m.b.v) && m.b.v > 1) return true;
        return malo(m.a) || malo(m.b);
      }
      if (m.t === "neg") return esSuma(m.a) || malo(m.a);
      if (m.t === "fn") return m.args.some(malo);
      return false;
    };
    return !malo(n);
  }
  // Sin raíces en el denominador (racionalizada).
  const tieneRaiz = (m: Nodo): boolean =>
    (m.t === "fn" && (m.f === "sqrt" || m.f === "cbrt")) ||
    (m.t === "op" && m.o === "^" && m.b.t !== "num" && /\//.test(aTexto(m.b))) ||
    (m.t === "op" && m.o === "^" && m.b.t === "num" && !Number.isInteger(m.b.v)) ||
    (m.t === "op" && (tieneRaiz(m.a) || tieneRaiz(m.b))) ||
    (m.t === "neg" && tieneRaiz(m.a)) ||
    (m.t === "fn" && m.args.some(tieneRaiz));
  const malo = (m: Nodo): boolean =>
    m.t === "op" ? (m.o === "/" && tieneRaiz(m.b)) || malo(m.a) || malo(m.b) : m.t === "neg" ? malo(m.a) : m.t === "fn" ? m.args.some(malo) : false;
  return !malo(n);
}

/* ───────── Números ───────── */

/** Evalúa un texto que debe ser un número (admite fracciones, potencias, π, raíces, notación científica). */
export function leerNumero(entrada: string): number {
  const s = entrada
    .trim()
    .replace(/(\d)\s*[·×x*]\s*10\s*\^\s*\{?\s*([+\-−]?\d+)\s*\}?/g, "$1e$2")
    .replace(/(\d)\s+(?=\d{3}\b)/g, "$1"); // separador de miles con espacio: 12 345
  const v = evaluar(analizar(s, []));
  if (!Number.isFinite(v)) throw new ErrorExpresion("el resultado no es un número finito");
  return v;
}

/** Generador pseudoaleatorio determinista (mulberry32) para puntos de muestreo reproducibles. */
export function prng(semilla: number): () => number {
  let a = semilla >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function semillaDe(texto: string): number {
  let h = 2166136261;
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
