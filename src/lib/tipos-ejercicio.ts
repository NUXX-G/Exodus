/**
 * Registro de tipos de ejercicio. Cada tipo sabe:
 *  - `huellas(envío)`: convertir la respuesta del alumno en una lista de hashes canónicos;
 *  - `referencia(respuesta)`: lo mismo con la respuesta de referencia en claro (lo usa `scripts/ex-inject.ts`);
 *  - `coincide(aceptadas, huellas)`: decidir si son la misma respuesta.
 *
 * En el vault solo hay hashes: la solución nunca queda en claro (regla de Exodus). Para que un hash no se
 * reconozca entre ejercicios, cada uno lleva una «sal» con el id del ejercicio y de la variante.
 *
 * Tipos:
 *   texto      respuesta exacta tras normalizar (el formato de la v1; hash sin sal, compatible)
 *   numero     valor con cifras significativas (`sig`, 3 por defecto) y unidad opcional (`unit`); se acepta
 *              ±1 en la última cifra y cualquier unidad compatible (km/h ↔ m/s)
 *   expresion  equivalencia matemática: se evalúa en puntos fijos del dominio (`vars`, `domain`); opcionalmente
 *              se exige una forma (`form`: factorizada, expandida, sin-raices-en-denominador)
 *   matriz     matriz o vector de números (admite fracciones y expresiones sin variables)
 *   opcion     opción múltiple (`options`; `multiple: true` para varias correctas)
 *   flag       texto exacto sin normalizar (como la flag de un nodo)
 *   desarrollo demostración, derivación, informe…: no se corrige solo; el alumno se puntúa con la rúbrica sellada
 *              (src/lib/sellado.ts) tras ver la solución modelo
 *
 * Módulo puro: lo usan el servidor, los tests y los scripts.
 */
import crypto from "node:crypto";
import { aLatex, analizar, aTexto, cumpleForma, ErrorExpresion, evaluar, leerNumero, prng, semillaDe, variablesDe, type Forma } from "./cas";
import { describirDimension, ErrorUnidad, leerUnidad, mismaDimension } from "./unidades";
import { hashAnswer } from "./exercises";

export const TIPOS = ["texto", "numero", "expresion", "matriz", "opcion", "flag", "desarrollo"] as const;
export type TipoId = (typeof TIPOS)[number];

export const ETIQUETA_TIPO: Record<TipoId, string> = {
  texto: "Respuesta corta",
  numero: "Numérico",
  expresion: "Expresión",
  matriz: "Matriz o vector",
  opcion: "Opción múltiple",
  flag: "Flag",
  desarrollo: "Desarrollo",
};

/** Lo que un tipo necesita saber del ejercicio (subconjunto del frontmatter). */
export interface DefEjercicio {
  id: string;
  type: TipoId;
  sig?: number;
  unit?: string;
  vars?: string[];
  domain?: [number, number];
  form?: Forma;
  options?: string[];
  multiple?: boolean;
}

export type Lectura = { ok: true; huellas: string[]; interpretacion?: string } | { ok: false; error: string };

export const salDe = (ejercicioId: string, variante: number | null) => (variante === null ? ejercicioId : `${ejercicioId}#${variante}`);

const h = (sal: string, tipo: string, clave: string) =>
  "sha256:" + crypto.createHash("sha256").update(`${sal}|${tipo}|${clave}`, "utf8").digest("hex");

/* ───────── numero ───────── */

/** Clave canónica de un valor redondeado a `sig` cifras: mantisa entera sin ceros finales y exponente. */
export function claveNumero(v: number, sig: number, desplazamiento = 0): string {
  if (v === 0 && desplazamiento === 0) return "0";
  const e = v === 0 ? 0 : Math.floor(Math.log10(Math.abs(v)));
  let k = e - sig + 1;
  let m = Math.round(v / 10 ** k);
  // El redondeo puede subir de 999 a 1000: se renormaliza.
  if (Math.abs(m) >= 10 ** sig) {
    k++;
    m = Math.round(v / 10 ** k);
  }
  m += desplazamiento;
  if (m === 0) return "0";
  while (m % 10 === 0) {
    m /= 10;
    k++;
  }
  return `${m}e${k}`;
}

/** Separa «12,5 km/h» en número y unidad. Prueba cortes desde el final hasta que las dos partes se entienden. */
function separarUnidad(s: string): { valor: number; unidad: string | null } {
  const t = s.trim();
  try {
    return { valor: leerNumero(t), unidad: null };
  } catch {
    /* sigue: puede llevar unidad */
  }
  for (let i = t.length - 1; i > 0; i--) {
    const izq = t.slice(0, i).trim();
    const der = t.slice(i).trim();
    if (!izq || !der || !/^[A-Za-zΩµμ°%€1]/.test(der)) continue;
    try {
      leerUnidad(der);
      return { valor: leerNumero(izq), unidad: der };
    } catch {
      /* otro corte */
    }
  }
  throw new ErrorExpresion("no entiendo el número (¿falta el valor o sobra algo?)");
}

/** Valor del envío expresado en la unidad del ejercicio. */
function valorEnUnidad(envio: string, def: DefEjercicio): number {
  const { valor, unidad } = separarUnidad(envio);
  if (!def.unit || !unidad) return valor;
  const esperada = leerUnidad(def.unit);
  const dada = leerUnidad(unidad);
  if (!mismaDimension(esperada.dim, dada.dim)) {
    throw new ErrorUnidad(`«${unidad}» no es compatible con la unidad pedida (${describirDimension(esperada.dim)})`);
  }
  return (valor * dada.factor) / esperada.factor;
}

/* ───────── expresion ───────── */

const PUNTOS = 8;
const TOLERADOS = 1; // puntos que pueden no coincidir por redondeo en el borde

function puntos(def: DefEjercicio, sal: string): Record<string, number>[] {
  const [a, b] = def.domain ?? [0.5, 2.5];
  const r = prng(semillaDe(sal));
  return Array.from({ length: PUNTOS }, () => Object.fromEntries((def.vars ?? []).map((v) => [v, a + (b - a) * r()])));
}

function valorClave(v: number): string {
  if (!Number.isFinite(v)) return "nd";
  if (Math.abs(v) < 1e-10) return "0";
  return Number(v.toPrecision(9)).toExponential(8);
}

function huellasExpresion(texto: string, def: DefEjercicio, sal: string): { huellas: string[]; interpretacion: string } {
  const arbol = analizar(texto, def.vars ?? []);
  for (const v of variablesDe(arbol)) {
    if (!(def.vars ?? []).includes(v)) throw new ErrorExpresion(`variable desconocida: ${v}`);
  }
  const huellas = puntos(def, sal).map((p, i) => h(sal, `expr${i}`, valorClave(evaluar(arbol, p))));
  if (def.form && !cumpleForma(arbol, def.form)) {
    // Se marca la forma en la última huella: la equivalencia se comprueba igual, pero no puntúa.
    huellas.push(h(sal, "forma", "no"));
  } else if (def.form) huellas.push(h(sal, "forma", "si"));
  return { huellas, interpretacion: aTexto(arbol) };
}


/* ───────── matriz ───────── */

export function leerMatriz(texto: string): number[][] {
  let s = texto.trim();
  const latex = /\\begin\{([pbvBV]?matrix)\}([\s\S]*)\\end\{\1\}/.exec(s);
  let filas: string[][];
  if (latex) {
    filas = latex[2].split(/\\\\/).map((f) => f.split("&").map((c) => c.trim())).filter((f) => f.some(Boolean));
  } else {
    s = s.replace(/^[\[(]\s*\[/, "[").replace(/\]\s*[\])]$/, "]");
    if (/\]\s*,?\s*\[/.test(s)) {
      // [[1,2],[3,4]] o [1,2],[3,4]
      filas = s.replace(/^\[|\]$/g, "").split(/\]\s*,?\s*\[/).map((f) => f.split(/[,\s]+/).filter(Boolean));
    } else {
      s = s.replace(/^[\[(]|[\])]$/g, "");
      filas = s.split(";").map((f) => f.trim().split(/\s*,\s*|\s+/).filter(Boolean));
    }
  }
  if (filas.length === 0 || filas.some((f) => f.length === 0)) throw new ErrorExpresion("matriz vacía");
  if (filas.some((f) => f.length !== filas[0].length)) throw new ErrorExpresion("las filas no tienen el mismo número de elementos");
  if (filas.length * filas[0].length > 100) throw new ErrorExpresion("matriz demasiado grande");
  return filas.map((f) => f.map((c) => leerNumero(c)));
}

/* ───────── Registro ───────── */

export interface TipoEjercicio {
  id: TipoId;
  /** Hashes del envío del alumno. */
  leer(envio: string, def: DefEjercicio, sal: string): Lectura;
  /** Hashes que se guardan en el vault a partir de la respuesta de referencia en claro. */
  referencia(respuesta: string, def: DefEjercicio, sal: string): string[];
  /** ¿El envío coincide con alguna respuesta aceptada? */
  coincide(aceptadas: string[], huellas: string[]): boolean;
}

const igualCualquiera = (aceptadas: string[], huellas: string[]) => {
  const set = new Set(aceptadas.map((a) => a.trim().toLowerCase()));
  // Recorre todo sin cortocircuito para no filtrar por tiempo cuál coincide.
  let ok = false;
  for (const x of huellas) if (set.has(x)) ok = true;
  return ok;
};

const envuelve = (f: () => { huellas: string[]; interpretacion?: string }): Lectura => {
  try {
    return { ok: true, ...f() };
  } catch (e) {
    if (e instanceof ErrorExpresion || e instanceof ErrorUnidad) return { ok: false, error: e.message };
    throw e;
  }
};

const NO_AUTOMATICO = "los ejercicios de desarrollo se corrigen con la rúbrica, no automáticamente";

export const REGISTRO: Record<TipoId, TipoEjercicio> = {
  desarrollo: {
    id: "desarrollo",
    leer: () => ({ ok: false, error: NO_AUTOMATICO }),
    referencia: () => {
      throw new Error(NO_AUTOMATICO);
    },
    coincide: () => false,
  },
  texto: {
    id: "texto",
    leer: (envio) => ({ ok: true, huellas: [hashAnswer(envio)] }),
    referencia: (r) => [hashAnswer(r)],
    coincide: igualCualquiera,
  },
  flag: {
    id: "flag",
    leer: (envio) => ({ ok: true, huellas: ["sha256:" + crypto.createHash("sha256").update(envio.trim(), "utf8").digest("hex")] }),
    referencia: (r) => ["sha256:" + crypto.createHash("sha256").update(r.trim(), "utf8").digest("hex")],
    coincide: igualCualquiera,
  },
  numero: {
    id: "numero",
    leer: (envio, def, sal) =>
      envuelve(() => {
        const v = valorEnUnidad(envio, def);
        return { huellas: [h(sal, "num", claveNumero(v, def.sig ?? 3))], interpretacion: `${Number(v.toPrecision(def.sig ?? 3))}${def.unit ? " " + def.unit : ""}` };
      }),
    referencia: (r, def, sal) => {
      const v = valorEnUnidad(r, def);
      const sig = def.sig ?? 3;
      return [...new Set([0, -1, 1].map((d) => h(sal, "num", claveNumero(v, sig, d))))];
    },
    coincide: igualCualquiera,
  },
  expresion: {
    id: "expresion",
    leer: (envio, def, sal) => envuelve(() => huellasExpresion(envio, def, sal)),
    referencia: (r, def, sal) => {
      const { huellas } = huellasExpresion(r, def, sal);
      const finitos = puntos(def, sal).filter((p) => Number.isFinite(evaluar(analizar(r, def.vars ?? []), p))).length;
      if (finitos < PUNTOS - TOLERADOS) throw new Error(`la solución no está definida en todo el dominio de muestreo (${finitos}/${PUNTOS}); ajusta \`domain\``);
      return huellas;
    },
    coincide: (aceptadas, huellas) => {
      // Comparación posicional: punto i con punto i; la forma (si se pide) debe coincidir siempre.
      if (aceptadas.length !== huellas.length) return false;
      let iguales = 0;
      for (let i = 0; i < PUNTOS; i++) if (aceptadas[i] === huellas[i]) iguales++;
      const formaOk = aceptadas.length === PUNTOS || aceptadas[PUNTOS] === huellas[PUNTOS];
      return iguales >= PUNTOS - TOLERADOS && formaOk;
    },
  },
  matriz: {
    id: "matriz",
    leer: (envio, def, sal) =>
      envuelve(() => {
        const m = leerMatriz(envio);
        return { huellas: clavesMatriz(m, def, sal), interpretacion: m.map((f) => f.join("  ")).join(" ; ") };
      }),
    referencia: (r, def, sal) => clavesMatriz(leerMatriz(r), def, sal),
    coincide: igualCualquiera,
  },
  opcion: {
    id: "opcion",
    leer: (envio, def, sal) =>
      envuelve(() => {
        const n = def.options?.length ?? 0;
        const elegidas = [...new Set(envio.split(/[,;\s]+/).filter(Boolean).map(Number))].sort((a, b) => a - b);
        if (elegidas.length === 0 || elegidas.some((i) => !Number.isInteger(i) || i < 0 || i >= n)) throw new ErrorExpresion("elige una opción");
        if (!def.multiple && elegidas.length > 1) throw new ErrorExpresion("solo hay una respuesta correcta");
        return { huellas: [h(sal, "opt", elegidas.join(","))] };
      }),
    referencia: (r, def, sal) => {
      // En el spec la respuesta son letras: «b» o «a,c».
      const idx = r.split(/[,;\s]+/).filter(Boolean).map((l) => l.toLowerCase().charCodeAt(0) - 97).sort((a, b) => a - b);
      if (idx.some((i) => i < 0 || i >= (def.options?.length ?? 0))) throw new Error(`opción fuera de rango: ${r}`);
      return [h(sal, "opt", idx.join(","))];
    },
    coincide: igualCualquiera,
  },
};

function clavesMatriz(m: number[][], def: DefEjercicio, sal: string): string[] {
  const sig = def.sig ?? 6;
  const cuerpo = m.flat().map((v) => claveNumero(v, sig)).join(",");
  const claves = [h(sal, "mat", `${m.length}x${m[0].length}:${cuerpo}`)];
  // Un vector vale igual en fila o en columna.
  if (m.length === 1 || m[0].length === 1) claves.push(h(sal, "vec", `${m.flat().length}:${cuerpo}`));
  return claves;
}

/** Corrige un envío. Devuelve si es correcto, o el error de lectura (que no cuenta como intento). */
export function corregir(def: DefEjercicio, aceptadas: string[], envio: string, sal: string): { correcto: boolean; huella: string; interpretacion?: string } | { error: string } {
  const tipo = REGISTRO[def.type];
  const l = tipo.leer(envio, def, def.type === "texto" || def.type === "flag" ? def.id : sal);
  if (!l.ok) return { error: l.error };
  return { correcto: tipo.coincide(aceptadas, l.huellas), huella: l.huellas[0], interpretacion: l.interpretacion };
}

/** Vista previa sin corregir: cómo ha entendido Exodus la respuesta. */
export function interpretar(def: DefEjercicio, envio: string): { ok: true; texto: string; latex?: string } | { ok: false; error: string } {
  if (def.type === "texto" || def.type === "flag" || def.type === "opcion") return { ok: true, texto: envio.trim() };
  const l = REGISTRO[def.type].leer(envio, def, "vista");
  if (!l.ok) return { ok: false, error: l.error };
  let latex: string | undefined;
  try {
    if (def.type === "expresion") latex = aLatex(analizar(envio, def.vars ?? []));
    else if (def.type === "matriz") {
      const m = leerMatriz(envio);
      latex = `\\begin{pmatrix}${m.map((f) => f.map((v) => Number(v.toPrecision(6))).join(" & ")).join(" \\\\ ")}\\end{pmatrix}`;
    } else if (def.type === "numero") {
      latex = (l.interpretacion ?? "").replace(/^(-?[\d.]+)e([+-]?\d+)/, "$1\\cdot 10^{$2}").replace(/ (.+)$/, "\\ \\mathrm{$1}");
    }
  } catch {
    latex = undefined;
  }
  return { ok: true, texto: l.interpretacion ?? envio, latex };
}

/** Sustituye `{{nombre}}` en un enunciado con los datos de la variante. */
export function rellenar(plantilla: string, valores: Record<string, string | number>): string {
  return plantilla.replace(/\{\{\s*([A-Za-z_][A-Za-z0-9_]*)\s*\}\}/g, (m, k: string) => (k in valores ? String(valores[k]) : m));
}

export const marcadores = (plantilla: string) => [...plantilla.matchAll(/\{\{\s*([A-Za-z_][A-Za-z0-9_]*)\s*\}\}/g)].map((m) => m[1]);
