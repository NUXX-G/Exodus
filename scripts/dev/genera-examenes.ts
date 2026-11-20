/**
 * Genera los nodos de simulacros y retos (fase 6) en vault/09-simulacros/. Elige los items de forma determinista:
 * de cada nodo de origen, los ejercicios de corrección automática de mayor nivel (tier). Uso (desde la raíz):
 *   npx tsx --conditions=react-server scripts/dev/genera-examenes.ts && npm run vault:relevel
 */
import fs from "node:fs";
import path from "node:path";
import { loadVault, type VaultExercise } from "../../src/lib/vault";

const v = loadVault();
const AUTO = new Set(["texto", "numero", "expresion", "matriz", "opcion"]);

function elige(nodeId: string, k: number, permitir: Set<string>): string[] {
  const n = v.nodes.get(nodeId);
  if (!n) throw new Error("no existe " + nodeId);
  const xs = n.exercises.filter((e: VaultExercise) => permitir.has(e.type)).sort((a, b) => b.tier - a.tier || a.id.localeCompare(b.id));
  if (xs.length < k) throw new Error(`${nodeId}: solo ${xs.length} ejercicios elegibles`);
  // Uno del nivel más alto y, si se piden más, alternando niveles para no repetir el mismo tipo de problema.
  const out: VaultExercise[] = [];
  for (const t of [3, 2, 1]) for (const e of xs.filter((x) => x.tier === t)) if (out.length < k && !out.includes(e)) out.push(e);
  return out.map((e) => `${nodeId}/${e.id}`);
}

interface Def {
  id: string;
  title: string;
  area: string;
  duration?: number;
  chained?: boolean;
  paper?: boolean;
  pass?: number;
  fuentes: [string, number][];
  extra?: { ref: string; puntos: number }[];
  cuerpo: string;
  fuentesAcademicas: string[];
}

const SIMULACRO = (texto: string) => `${texto}

## Cómo usarlo

- **Hazlo en papel** (botón «Empezar en modo papel»), como el examen presencial: escribe el desarrollo completo en folios
  y, al terminar, pasa aquí los resultados. Las preguntas de desarrollo te las puntúas tú con la rúbrica después de
  entregar: sé exigente, como lo sería un tribunal.
- Sin apuntes, sin calculadora gráfica y sin IA. Ponte un reloj y no lo pares.
- Al terminar verás qué preguntas fallaste y de qué tema son: repasa esos nodos (y etiqueta los fallos en tu diario de
  errores) antes de repetirlo. Cada intento usa datos nuevos donde el ejercicio lo permite.
`;

const RETO = (texto: string) => `${texto}

## Cómo funciona

Cada paso es un problema de un tema distinto de la rama, de dificultad creciente. El siguiente no se abre hasta que
resuelves el actual: no hay límite de tiempo ni de intentos, pero hay que llegar al final. Si un paso se te atasca, vuelve
al nodo de ese tema (enlazado en el resultado) y a sus pistas. Los pasos de código se prueban con el script de pruebas
del nodo de origen, en tu ordenador.
`;

const defs: Def[] = [
  {
    id: "sim-mat-eso",
    title: "Simulacro: matemáticas de la ESO",
    area: "matematicas",
    duration: 75,
    paper: true,
    fuentes: [["mat-numeros-naturales", 2], ["mat-enteros-fracciones", 2], ["mat-algebra-basica", 2], ["mat-proporcionalidad-porcentajes", 2], ["mat-geometria-basica", 2], ["mat-funciones-basicas", 2]],
    cuerpo: SIMULACRO("# Simulacro: matemáticas de la ESO\n\nDoce problemas de los seis primeros temas de matemáticas (números naturales, enteros y fracciones, álgebra básica,\nproporcionalidad, geometría y funciones), los más difíciles de cada uno. Es el nivel que hay que tener firme antes de\nempezar el Bachillerato: si sacas menos de un 7, vuelve a los temas fallados."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "sim-mat-bachillerato",
    title: "Simulacro: matemáticas de Bachillerato",
    area: "matematicas",
    duration: 120,
    paper: true,
    fuentes: [["mat-algebra-secundaria", 2], ["mat-combinatoria-probabilidad-basica", 2], ["mat-trigonometria", 2], ["mat-geometria-analitica", 2], ["mat-calculo-1", 2]],
    extra: [
      { ref: "mat-logica-demostraciones/induccion-suma-de-impares", puntos: 2 },
      { ref: "mat-calculo-1/derivada-de-1-sobre-x", puntos: 2 },
    ],
    cuerpo: SIMULACRO("# Simulacro: matemáticas de Bachillerato\n\nDiez problemas de álgebra, combinatoria y probabilidad, trigonometría, geometría analítica y cálculo, y **dos\ndemostraciones** (inducción y derivada desde la definición) que valen el doble. Es el puente al primer curso de la\nuniversidad: los exámenes de la UNED son presenciales, en papel y con desarrollo, así que acostúmbrate a justificar\ncada paso."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "sim-fis-bachillerato",
    title: "Simulacro: física de Bachillerato",
    area: "fisica",
    duration: 120,
    paper: true,
    fuentes: [["fis-medida-movimiento", 2], ["fis-fuerzas-energia", 2], ["fis-ondas-calor-fluidos", 2], ["fis-mecanica-newtoniana", 2], ["fis-electricidad-magnetismo-1", 2]],
    extra: [{ ref: "fis-medida-movimiento/deduce-distancia-de-seguridad", puntos: 2 }],
    cuerpo: SIMULACRO("# Simulacro: física de Bachillerato\n\nDiez problemas de cinemática, dinámica y energía, ondas y calor, mecánica newtoniana y electricidad, más una\n**deducción** con análisis dimensional que vale el doble. En física, un resultado sin unidades o sin comprobar el orden\nde magnitud está a medias: compruébalo siempre antes de pasar a la siguiente."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "sim-mat-primero-grado",
    title: "Simulacro: matemáticas de primero de grado",
    area: "matematicas",
    duration: 150,
    paper: true,
    fuentes: [["mat-algebra-lineal-1", 3], ["mat-calculo-2", 3], ["mat-matematica-discreta", 2], ["mat-estructuras-algebraicas", 2], ["mat-teoria-numeros", 2]],
    cuerpo: SIMULACRO("# Simulacro: matemáticas de primero de grado\n\nDoce problemas de álgebra lineal, cálculo en una variable, matemática discreta, estructuras algebraicas y teoría de\nnúmeros: el núcleo del primer curso de un grado de matemáticas o física. Dos horas y media, como un examen de\nconvocatoria."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "sim-fis-grado",
    title: "Simulacro: física de grado",
    area: "fisica",
    duration: 150,
    paper: true,
    fuentes: [["fis-mecanica-clasica", 2], ["fis-electromagnetismo", 2], ["fis-termo-estadistica", 2], ["fis-mecanica-cuantica", 2], ["fis-relatividad-especial", 2]],
    cuerpo: SIMULACRO("# Simulacro: física de grado\n\nDiez problemas de mecánica analítica, electromagnetismo, termodinámica y física estadística, mecánica cuántica y\nrelatividad especial. Mezcla temas a propósito: en un examen real lo difícil es reconocer qué herramienta usar."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "reto-bajo-nivel",
    title: "Reto final: sistemas y bajo nivel",
    area: "bajo-nivel",
    chained: true,
    pass: 1,
    fuentes: [["prog-bash-scripting", 1], ["sys-c-memoria", 1], ["sys-ensamblador-x86-64", 1], ["sys-sistemas-operativos", 1], ["sys-concurrencia", 1], ["lab-sys-depuracion", 1]],
    extra: [{ ref: "prog-bash-scripting/resumen-de-notas", puntos: 1 }],
    cuerpo: RETO("# Reto final: sistemas y bajo nivel\n\nDel shell al kernel: scripts, memoria en C, ensamblador x86-64, sistemas operativos, concurrencia y depuración,\nterminando con un programa tuyo que tiene que pasar las pruebas."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "reto-ciberseguridad",
    title: "Reto final: redes y ciberseguridad",
    area: "ciberseguridad",
    chained: true,
    pass: 1,
    fuentes: [["sec-redes-tcpip", 1], ["lab-sec-captura-red", 1], ["sec-criptografia", 1], ["lab-sec-cripto-mal-usada", 1], ["sec-forense-logs", 1], ["sec-reversing-malware", 1], ["lab-sec-reversing-crackme", 1]],
    cuerpo: RETO("# Reto final: redes y ciberseguridad\n\nUna cadena de análisis **defensivo**: tráfico de red, criptografía mal usada, registros de un incidente e ingeniería\ninversa de malware. Todo con los artefactos de los laboratorios (nada contra sistemas reales)."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "reto-ia-cuantica",
    title: "Reto final: IA y computación cuántica",
    area: "ia-cuantica",
    chained: true,
    pass: 1,
    fuentes: [["ia-aprendizaje-estadistico", 1], ["ia-redes-profundas", 1], ["lab-ia-fuga-de-datos", 1], ["cua-computacion-cuantica", 1], ["lab-cua-tomografia", 1]],
    extra: [{ ref: "ia-redes-desde-cero/gradiente-logistica", puntos: 1 }],
    cuerpo: RETO("# Reto final: IA y computación cuántica\n\nAprendizaje estadístico, redes profundas, una fuga de datos que hay que descubrir, circuitos cuánticos y tomografía,\nterminando con tu propia implementación del gradiente de la regresión logística."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "reto-robotica",
    title: "Reto final: robótica",
    area: "robotica",
    chained: true,
    pass: 1,
    fuentes: [["rob-cinematica", 1], ["rob-dinamica", 1], ["rob-control", 1], ["rob-sensores-actuadores", 1], ["lab-rob-fusion-sensores", 1], ["rob-planificacion-movimiento", 1]],
    cuerpo: RETO("# Reto final: robótica\n\nCinemática, dinámica, control, sensores, fusión de datos de un robot real y planificación de movimiento: la cadena\ncompleta de un robot que percibe, decide y se mueve."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
  {
    id: "reto-ingenieria",
    title: "Reto final: ingeniería y hardware",
    area: "ingenieria",
    chained: true,
    pass: 1,
    fuentes: [["ing-electricidad-basica", 1], ["ing-logica-digital", 1], ["ing-circuitos-dc-ac", 1], ["ing-senales-sistemas", 1], ["ing-procesado-digital-senal", 1], ["lab-ing-iq-demodulacion", 1]],
    cuerpo: RETO("# Reto final: ingeniería y hardware\n\nDe la ley de Ohm a demodular una señal de radio real: circuitos, lógica digital, señales y procesado digital."),
    fuentesAcademicas: ["Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."],
  },
];

const dir = path.join("vault", "09-simulacros");
fs.mkdirSync(dir, { recursive: true });
for (const d of defs) {
  const permitir = new Set(AUTO);
  const items = d.fuentes.flatMap(([n, k]) => elige(n, k, permitir)).map((ref) => ({ ref, puntos: 1 }));
  for (const x of d.extra ?? []) items.push(x);
  const prereqs = [...new Set(items.map((i) => i.ref.split("/")[0]))];
  const exam: Record<string, unknown> = { items };
  if (d.duration) exam.duration = d.duration;
  if (d.chained) exam.chained = true;
  if (d.paper) exam.paper = true;
  if (d.pass !== undefined) exam.pass = d.pass;
  const fm = [
    "---",
    `id: ${d.id}`,
    `title: ${JSON.stringify(d.title)}`,
    `area: ${d.area}`,
    "trunk_level: 0",
    "kind: examen",
    `prerequisites: ${JSON.stringify(prereqs)}`,
    "academic_sources:",
    ...d.fuentesAcademicas.map((s) => `  - ${JSON.stringify(s)}`),
    `exam: ${JSON.stringify(exam)}`,
    "---",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(dir, `${d.id}.md`), fm + d.cuerpo.trim() + "\n");
  console.log(`${d.id}: ${items.length} items, ${prereqs.length} prerequisitos`);
}
