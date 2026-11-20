/** Tipos de error del diario de errores. Sin dependencias: lo usan también los componentes del navegador. */
export const ERROR_TAGS = ["concepto", "no-sabia-empezar", "calculo", "mala-lectura", "despiste", "bug", "caso-limite"] as const;
export type ErrorTag = (typeof ERROR_TAGS)[number];

export const ERROR_LABEL: Record<ErrorTag, string> = {
  concepto: "Concepto",
  "no-sabia-empezar": "No sabía empezar",
  calculo: "Cálculo / álgebra",
  "mala-lectura": "Mala lectura",
  despiste: "Despiste",
  bug: "Bug de implementación",
  "caso-limite": "Caso límite",
};

/** Qué significa cada etiqueta (se muestra al elegirla y en /errores). */
export const ERROR_HELP: Record<ErrorTag, string> = {
  concepto: "No entendía bien la idea o la definición.",
  "no-sabia-empezar": "Entendía el enunciado pero no sabía qué herramienta usar ni por dónde empezar.",
  calculo: "El planteamiento era bueno, pero me equivoqué al operar (signos, despejes, fracciones).",
  "mala-lectura": "Leí mal el enunciado, un dato o el formato pedido.",
  despiste: "Sabía hacerlo; fue un descuido.",
  bug: "Mi programa tenía un fallo de código.",
  "caso-limite": "Funciona en general pero no en un caso especial (cero, vacío, borde, desbordamiento).",
};
