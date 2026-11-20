/**
 * Unidades para los ejercicios numéricos: convierte «km/h», «m·s^-2», «kN*m», «µF» o «eV» a un factor respecto al
 * SI y un vector de dimensiones [m, kg, s, A, K, mol, cd]. Valores de las unidades no SI: BIPM, folleto del SI,
 * 9.ª ed. (2019), tablas 8 y 9; el electronvoltio con el valor exacto de e desde la redefinición de 2019.
 * Módulo puro.
 */

export type Dim = [number, number, number, number, number, number, number];
export interface Unidad {
  factor: number;
  dim: Dim;
}

const D = (m = 0, kg = 0, s = 0, A = 0, K = 0, mol = 0, cd = 0): Dim => [m, kg, s, A, K, mol, cd];
const U = (factor: number, dim: Dim): Unidad => ({ factor, dim });

/** Unidades con nombre. Las que admiten prefijo SI se marcan en PREFIJABLES. */
const BASE: Record<string, Unidad> = {
  m: U(1, D(1)),
  g: U(1e-3, D(0, 1)),
  s: U(1, D(0, 0, 1)),
  A: U(1, D(0, 0, 0, 1)),
  K: U(1, D(0, 0, 0, 0, 1)),
  mol: U(1, D(0, 0, 0, 0, 0, 1)),
  cd: U(1, D(0, 0, 0, 0, 0, 0, 1)),
  N: U(1, D(1, 1, -2)),
  J: U(1, D(2, 1, -2)),
  W: U(1, D(2, 1, -3)),
  Pa: U(1, D(-1, 1, -2)),
  Hz: U(1, D(0, 0, -1)),
  C: U(1, D(0, 0, 1, 1)),
  V: U(1, D(2, 1, -3, -1)),
  Ω: U(1, D(2, 1, -3, -2)),
  ohm: U(1, D(2, 1, -3, -2)),
  S: U(1, D(-2, -1, 3, 2)),
  F: U(1, D(-2, -1, 4, 2)),
  H: U(1, D(2, 1, -2, -2)),
  T: U(1, D(0, 1, -2, -1)),
  Wb: U(1, D(2, 1, -2, -1)),
  L: U(1e-3, D(3)),
  l: U(1e-3, D(3)),
  eV: U(1.602176634e-19, D(2, 1, -2)),
  t: U(1000, D(0, 1)),
  bar: U(1e5, D(-1, 1, -2)),
  rad: U(1, D()),
  sr: U(1, D()),
  Bq: U(1, D(0, 0, -1)),
  Gy: U(1, D(2, 0, -2)),
  Sv: U(1, D(2, 0, -2)),
  lm: U(1, D(0, 0, 0, 0, 0, 0, 1)),
  lx: U(1, D(-2, 0, 0, 0, 0, 0, 1)),
  kat: U(1, D(0, 0, -1, 0, 0, 1)),
  // Sin prefijo:
  min: U(60, D(0, 0, 1)),
  h: U(3600, D(0, 0, 1)),
  d: U(86400, D(0, 0, 1)),
  atm: U(101325, D(-1, 1, -2)),
  cal: U(4.184, D(2, 1, -2)),
  kcal: U(4184, D(2, 1, -2)),
  Wh: U(3600, D(2, 1, -2)),
  kWh: U(3.6e6, D(2, 1, -2)),
  mmHg: U(133.322387415, D(-1, 1, -2)),
  "°": U(Math.PI / 180, D()),
  deg: U(Math.PI / 180, D()),
  grados: U(Math.PI / 180, D()),
  rpm: U((2 * Math.PI) / 60, D(0, 0, -1)),
  au: U(149597870700, D(1)),
  ua: U(149597870700, D(1)),
  ly: U(9460730472580800, D(1)),
  pc: U(3.0856775814913673e16, D(1)),
  Da: U(1.66053906892e-27, D(0, 1)),
  u: U(1.66053906892e-27, D(0, 1)),
  B: U(8, D()),
  b: U(1, D()),
  bit: U(1, D()),
  byte: U(8, D()),
  "%": U(0.01, D()),
  // Moneda: sin dimensión física; permite escribir «160 €» o «160 euros» en ejercicios de dinero.
  "€": U(1, D()),
  euro: U(1, D()),
  euros: U(1, D()),
  EUR: U(1, D()),
};

const PREFIJABLES = new Set(["m", "g", "s", "A", "K", "mol", "cd", "N", "J", "W", "Pa", "Hz", "C", "V", "Ω", "ohm", "S", "F", "H", "T", "Wb", "L", "l", "eV", "t", "bar", "Bq", "Gy", "Sv", "lm", "lx", "rad", "B", "b", "bit", "byte", "Wh"]);

const PREFIJOS: Record<string, number> = {
  Q: 1e30, R: 1e27, Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6, k: 1e3, h: 1e2, da: 1e1,
  d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6, μ: 1e-6, u: 1e-6, n: 1e-9, p: 1e-12, f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24, r: 1e-27, q: 1e-30,
  Ki: 1024, Mi: 1024 ** 2, Gi: 1024 ** 3, Ti: 1024 ** 4,
};

export class ErrorUnidad extends Error {}

function simbolo(sim: string): Unidad {
  if (BASE[sim]) return BASE[sim];
  for (const [p, f] of Object.entries(PREFIJOS).sort((a, b) => b[0].length - a[0].length)) {
    if (sim.startsWith(p) && sim.length > p.length) {
      const resto = sim.slice(p.length);
      if (PREFIJABLES.has(resto)) {
        const b = BASE[resto];
        // Prefijos binarios solo con bits y bytes.
        if (p.endsWith("i") && !["B", "b", "bit", "byte"].includes(resto)) continue;
        return U(f * b.factor, b.dim);
      }
    }
  }
  throw new ErrorUnidad(`unidad desconocida: «${sim}»`);
}

/** Lee una unidad compuesta: «kg·m/s^2», «m s^-1», «km/h», «N*m», «1/s», «m²». */
export function leerUnidad(texto: string): Unidad {
  const s = texto.trim().replace(/\*\*/g, "^").replace(/²/g, "^2").replace(/³/g, "^3").replace(/⁻¹/g, "^-1");
  if (!s) throw new ErrorUnidad("unidad vacía");
  let factor = 1;
  const dim: Dim = D();
  let signo = 1;
  const re = /(\s*)([*·.×\/])?\s*([A-Za-zΩµμ°%€][A-Za-zΩµμ_]*|1)(?:\s*\^\s*\(?\s*([+\-−]?\d+)\s*\)?)?/y;
  let i = 0;
  let primero = true;
  while (i < s.length) {
    re.lastIndex = i;
    const m = re.exec(s);
    if (!m || m[0].length === 0) throw new ErrorUnidad(`no entiendo la unidad «${texto}»`);
    const sep = m[2] ?? "";
    if (sep === "/") signo = -1; // todo lo que sigue a «/» va al denominador (m/s/s = m·s⁻²)
    else if (!primero && sep === "" && m[1] === "") throw new ErrorUnidad(`separa las unidades con «·», «*» o un espacio: «${texto}»`);
    const exp = signo * Number((m[4] ?? "1").replace("−", "-"));
    if (m[3] !== "1") {
      const u = simbolo(m[3]);
      factor *= u.factor ** exp;
      for (let k = 0; k < 7; k++) dim[k] += u.dim[k] * exp;
    }
    primero = false;
    i = re.lastIndex;
  }
  return { factor, dim };
}

export const mismaDimension = (a: Dim, b: Dim) => a.every((x, i) => x === b[i]);

export function describirDimension(d: Dim): string {
  const n = ["m", "kg", "s", "A", "K", "mol", "cd"];
  const partes = d.map((e, i) => (e === 0 ? "" : e === 1 ? n[i] : `${n[i]}^${e}`)).filter(Boolean);
  return partes.length ? partes.join("·") : "adimensional";
}
