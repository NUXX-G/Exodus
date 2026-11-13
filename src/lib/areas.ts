/**
 * Grandes áreas de conocimiento. Las integradas están aquí; el vault puede añadir áreas nuevas (o
 * cambiar la etiqueta y el color de las existentes) sin tocar código, con una nota `_areas.md`:
 *
 *   ---
 *   areas:
 *     - id: quimica
 *       label: Química
 *       color: "#9be37f"
 *   ---
 *
 * El orden define la disposición horizontal en el árbol: primero las integradas y después las nuevas,
 * en el orden del archivo.
 */
export interface AreaInfo {
  id: string;
  label: string;
  color: string;
}

export type AreaId = string;

export const BUILTIN_AREAS: readonly AreaInfo[] = [
  { id: "troncal", label: "Troncal", color: "#f4f7fb" },
  { id: "matematicas", label: "Matemáticas", color: "#8ec5ff" },
  { id: "fisica", label: "Física", color: "#c3a6ff" },
  { id: "ingenieria", label: "Ingeniería y hardware", color: "#ffb86b" },
  { id: "robotica", label: "Robótica", color: "#ff8f8f" },
  { id: "bajo-nivel", label: "Bajo nivel", color: "#7fe3c4" },
  { id: "ciberseguridad", label: "Redes y ciberseguridad", color: "#ffe066" },
  { id: "ia-cuantica", label: "IA y cuántica", color: "#ff9ed8" },
];

/** Nota del vault con las áreas añadidas o modificadas. */
export const AREAS_FILE = "_areas.md";

const AREA_ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const COLOR = /^#[0-9a-fA-F]{6}$/;

/** Áreas integradas más las del vault. Devuelve también los problemas encontrados en el archivo. */
export function mergeAreas(extra: unknown): { areas: Map<string, AreaInfo>; issues: string[] } {
  const areas = new Map(BUILTIN_AREAS.map((a) => [a.id, { ...a }]));
  const issues: string[] = [];
  if (extra === undefined || extra === null) return { areas, issues };
  if (!Array.isArray(extra)) return { areas, issues: ["`areas` debe ser una lista"] };
  extra.forEach((raw, i) => {
    const a = raw as Partial<AreaInfo> | null;
    if (!a || typeof a.id !== "string" || !AREA_ID.test(a.id)) {
      issues.push(`areas[${i}]: id en kebab-case obligatorio`);
      return;
    }
    const prev = areas.get(a.id);
    const label = typeof a.label === "string" && a.label.trim() ? a.label.trim() : prev?.label;
    const color = typeof a.color === "string" && COLOR.test(a.color) ? a.color : prev?.color;
    if (!label) issues.push(`areas[${i}] (${a.id}): falta label`);
    if (a.color !== undefined && !COLOR.test(String(a.color))) issues.push(`areas[${i}] (${a.id}): color debe ser #rrggbb`);
    if (!label) return;
    areas.set(a.id, { id: a.id, label, color: color ?? "#9fb6cf" });
  });
  return { areas, issues };
}

/** Información de un área; si no existe (vault con errores), una neutra con el id como nombre. */
export function areaOf(areas: Map<string, AreaInfo>, id: string): AreaInfo {
  return areas.get(id) ?? { id, label: id, color: "#9fb6cf" };
}
