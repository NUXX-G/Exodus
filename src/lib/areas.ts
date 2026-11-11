/** Grandes áreas de conocimiento. El orden define la disposición horizontal en el árbol. */
export const AREAS = {
  troncal: { label: "Troncal", color: "#f4f7fb" },
  matematicas: { label: "Matemáticas", color: "#8ec5ff" },
  fisica: { label: "Física", color: "#c3a6ff" },
  ingenieria: { label: "Ingeniería y hardware", color: "#ffb86b" },
  robotica: { label: "Robótica", color: "#ff8f8f" },
  "bajo-nivel": { label: "Bajo nivel", color: "#7fe3c4" },
  ciberseguridad: { label: "Redes y ciberseguridad", color: "#ffe066" },
  "ia-cuantica": { label: "IA y cuántica", color: "#ff9ed8" },
} as const;

export type AreaId = keyof typeof AREAS;
export const AREA_IDS = Object.keys(AREAS) as [AreaId, ...AreaId[]];
