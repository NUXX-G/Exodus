# Roadmap v2 de Exodus

Plan dado por el usuario el 2026-11-15, copiado completo. Rama de trabajo: `v2` (la v1 sigue en `main`, intacta).
**No se fusiona `v2` en `main`: lo decide el usuario.**

Cómo usar este archivo en una sesión nueva: lee `STATUS.md` (fase y tarea actuales) y **solo** la sección de la fase
actual de este archivo (búscala con `grep -n "^## FASE" docs/ROADMAP_V2.md` y lee desde esa línea hasta la siguiente
`## `). Las secciones «Reglas de ejecución» y «Contexto» están resumidas en `STATUS.md`; no hace falta releerlas.

Leyenda: `[ ]` pendiente · `[x]` hecha · `[~]` en curso o parcial (con nota) · ⛔ = parar y preguntar al usuario.

## Reglas de ejecución

- Avanza fase a fase sin pedir permiso. Al acabar cada fase: tests en verde, `npm run vault:check` y
  `npm run typecheck` sin errores, casillas marcadas en este roadmap, `STATUS.md` actualizado y un commit con el
  mensaje `v2: fase X completada`. Después pasa directamente a la siguiente.
- PARA y pregunta SOLO en estos casos (marcados como ⛔ en el plan): decisiones de seguridad, cambios que puedan
  afectar al progreso o a las cuentas de los usuarios y cambios de stack (añadir servicios o lenguajes nuevos). Para
  todo lo demás, decide con criterio y anota la decisión y su porqué en `STATUS.md`.
- Si una tarea se bloquea, anótala en «Preguntas abiertas» de `STATUS.md` y sigue con lo siguiente que no dependa de ella.
- Si el contexto de la sesión se está llenando: termina la tarea en curso, haz commit, actualiza `STATUS.md` y di al
  usuario: «Abre una sesión nueva y escribe: continúa con el roadmap».
- Nunca rompas el progreso de ningún usuario: todo cambio de esquema va con migración y se sigue `docs/AMPLIAR.md`.
- Filosofía de Exodus: sin IA durante el estudio, pistas graduales, markdown-first.

## Contexto

El usuario usa Exodus para prepararse el doble grado de Física y Matemáticas de la UNED. Parte de nivel de 1º de ESO
y tiene unos 14 meses. Los exámenes de la UNED son presenciales, en papel, con desarrollo y demostraciones. El troncal
es obligatorio y las ramas son opcionales. Matemáticas y física son la prioridad, pero todas las ramas (ingeniería,
robótica, sistemas/bajo nivel, ciberseguridad, IA, cuántica) deben tener la misma calidad de práctica y verificación,
cada una con los tipos de ejercicio que le encajan.

## PASO 0 — Preparación

- [x] Leer `CLAUDE.md`, `STATUS.md`, `FASE_1.md` y `docs/AMPLIAR.md`.
- [x] Crear la rama git `v2` (la v1 actual queda intacta) y trabajar siempre en ella.
- [x] Copiar este plan completo en `docs/ROADMAP_V2.md`, con cada fase como sección y sus tareas como casillas.
- [x] Añadir al final de `CLAUDE.md` la regla del roadmap activo.
- [x] Poner en `STATUS.md`: fase actual, tarea actual, «decisiones tomadas» y «preguntas abiertas».
- [x] (Pedido aparte) Mecanismo de traspaso entre sesiones para que una sesión nueva retome el trabajo rápido y sin
      gastar tokens: `STATUS.md` corto como panel de control, historia de la v1 en `docs/HISTORIAL_V1.md`, utilidades
      de sesión versionadas en `scripts/dev/` y protocolo de arranque en `CLAUDE.md`.

# PARTE 1: PLATAFORMA

## FASE 1 — Ejercicios verificados y parametrizados

- [ ] Ejercicios en el frontmatter o en un archivo hermano del nodo (elegir el formato más limpio y documentarlo en
      `docs/AMPLIAR.md`). Los nodos con `ctf_flag` siguen funcionando.
- [ ] Sistema extensible de tipos de ejercicio (registro de tipos).
- [ ] Tipos iniciales: numérico con tolerancia y unidades opcionales.
- [ ] Tipo expresión simbólica (equivalencia matemática, no igualdad de texto).
- [ ] Tipo vectores y matrices.
- [ ] Tipo opción múltiple.
- [ ] Tipo flag.
- [ ] Plantillas parametrizadas: variables y rangos, de modo que cada intento sea una variante nueva con su solución
      calculada.
- [ ] ⛔ Antes de implementar la verificación simbólica, proponer un servicio Python con SymPy en docker-compose o un
      CAS en JS, con pros y contras.
- [ ] Respuestas en LaTeX o notación sencilla, con vista previa.
- [ ] Cada intento se guarda: resultado, tiempo y variante.
- [ ] Botón «creo que esto está mal» en cada nodo y ejercicio. Los reportes van a una página de pendientes y se
      resumen en `STATUS.md`.
- [ ] Convertir como ejemplo 3 nodos del troncal y 1 de cada rama con contenido.
- [ ] Cierre de fase: tests, `vault:check`, `typecheck`, casillas, `STATUS.md`, commit `v2: fase 1 completada`.

## FASE 2 — Diario de errores y repaso inteligente

- [ ] Tras un fallo, el usuario etiqueta el error: concepto, cálculo/álgebra, despiste, no sabía empezar, mala
      lectura, bug de implementación o caso límite. Nota opcional.
- [ ] Página `/errores` con patrones por tipo, por nodo, por área y su evolución.
- [ ] El repaso espaciado pondera también los fallos recientes y su tipo.
- [ ] Sesiones de repaso intercaladas entre nodos dominados, filtrables por área.
- [ ] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 2 completada`).

## FASE 3 — Respuesta desarrollada con rúbrica

- [ ] Tipo «desarrollo»: demostraciones, derivaciones, análisis de diseño, informes forenses o de incidente,
      explicación de algoritmos.
- [ ] Respuesta en Markdown + LaTeX + código, o marcada como «hecha en papel».
- [ ] Solo después de entregar se muestran la solución modelo y la rúbrica del vault. El usuario se puntúa punto a
      punto y la nota cuenta para el dominio del nodo.
- [ ] Nada de esto se exporta a Obsidian antes de entregar.
- [ ] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 3 completada`).

## FASE 4 — Ejercicios de código con tests

- [ ] Tipo «código»: enunciado, plantilla inicial y tests por etapas. Si existen hitos con `prueba.sh`, integrarlos
      en lugar de duplicarlos.
- [ ] Lenguajes: Python, C, C++, Rust y Bash.
- [ ] ⛔ Antes de implementar, proponer entre un contenedor efímero aislado (sin red y con límites de CPU, memoria,
      tiempo y disco) y un runner local por CLI con el resultado firmado. Explicar los riesgos de cada uno, porque hay
      varios usuarios y el código no es de confianza.
- [ ] Usos por rama: sistemas; IA (gradient check, métricas mínimas); física computacional (conservación de la
      energía, convergencia a la solución analítica); robótica (cinemática, estabilidad del control); ingeniería
      (respuesta del filtro, CPU); cuántica (amplitudes del circuito).
- [ ] Los tests ocultos nunca se exportan.
- [ ] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 4 completada`).

## FASE 5 — Prueba de nivel

- [ ] Diagnóstico adaptativo y repetible, por área.
- [ ] Marca nodos como «dominado por diagnóstico» (distinto de completado y reversible) y propone dónde empezar en
      cada área.
- [ ] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 5 completada`).

## FASE 6 — Simulacros y retos

- [ ] Nodo «examen»: ejercicios de varios nodos o áreas, o un examen real importado del vault, con duración fija y
      cronómetro.
- [ ] «Modo papel» para mates y física: se resuelve a mano y después se introducen resultados o se autocorrige con
      rúbrica.
- [ ] Retos finales por rama técnica: CTF encadenado o proyecto con etapas de tests.
- [ ] Historial con notas y comparativa.
- [ ] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 6 completada`).

## FASE 7 — Calidad automática

- [ ] `vault:check` verifica la solución de cada ejercicio calculable, genera variantes de muestra para detectar casos
      degenerados y comprueba que las soluciones de referencia de código pasan sus tests.
- [ ] Avisos para nodos sin `academic_sources` concretos (libro y capítulo, o documentación oficial concreta).
- [ ] Informe de cobertura por área: nodos con ejercicios verificados, de qué tipos y cuántos.
- [ ] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 7 completada`).

## FASE 8 — Objetivos recomendados

- [ ] Objetivos opcionales definidos en el vault como listas ordenadas de nodos de cualquier área. Ejemplos:
      «Primero de Física y Matemáticas», «Junior de sistemas», «Analista SOC nivel 1».
- [ ] Se pueden activar varios, con avance, ritmo estimado y siguiente nodo recomendado.
- [ ] Registro opcional de tiempo de estudio por día y por área en el heatmap.
- [ ] Estructura preparada para que mates y física crezcan hasta el grado completo sin reorganizar el árbol.
- [ ] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 8 completada`).

# PARTE 2: CONTENIDO (un ciclo por área)

Orden de áreas: troncal → matemáticas → física → sistemas/bajo nivel → ingeniería → IA → cuántica → robótica →
ciberseguridad.

Alcance: troncal desde cero hasta Bachillerato. Matemáticas y física hasta primero completo del doble grado de la UNED,
usando como referencia sus guías docentes. El resto de ramas hasta nivel junior.

Principio: Exodus NO es la fuente primaria de teoría. Cada nodo sigue una fuente fiable concreta y contrastable (libro
y sección, o documentación oficial). Priorizar fuentes gratuitas y en español cuando existan (OpenStax, Book of
Proof...).

Ciclo por cada área (una fase por área), con estas tareas:

- a) **MAPA**: elegir 1 o 2 fuentes de referencia y justificarlo. Escribir en `docs/contenido/<area>.md` una tabla:
  sección de la fuente → nodo que la cubre / hueco / nodo que sobra o está fuera de orden.
- b) **PLAN**: nodos nuevos o reestructurados con id, título, prerequisitos y sección exacta de la fuente. ⛔ Parar SOLO
  si la reestructuración cambia ids existentes o afecta al progreso guardado.
- c) **REDACCIÓN**: teoría breve que resume y remite a la fuente (sin copiarla); ejercicios de dificultad creciente y
  en cantidad suficiente para practicar de verdad; ejercicios de desarrollo con rúbrica donde aplique. Marcar con
  `> [!question] Revisar` toda afirmación de la que no se esté seguro.
- d) **REVISIÓN INDEPENDIENTE**: un subagente que no haya visto la redacción revisa cada nodo contra su fuente buscando
  errores conceptuales, definiciones imprecisas, notación inconsistente, prerequisitos mal puestos y soluciones
  incorrectas o ambiguas. Corregir y anotar los cambios en `docs/contenido/<area>.md`.
- e) Revisar los reportes «creo que esto está mal» pendientes de esa área.
- f) Cierre normal de fase: checks, cobertura, `STATUS.md` y commit.

## FASE 9 — Contenido: troncal (desde cero hasta Bachillerato)

- [ ] a) Mapa (`docs/contenido/troncal.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 9 completada`)

## FASE 10 — Contenido: matemáticas (hasta primero del doble grado UNED)

- [ ] a) Mapa (`docs/contenido/matematicas.md`, con la guía docente de la UNED)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 10 completada`)

## FASE 11 — Contenido: física (hasta primero del doble grado UNED)

- [ ] a) Mapa (`docs/contenido/fisica.md`, con la guía docente de la UNED)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 11 completada`)

## FASE 12 — Contenido: sistemas / bajo nivel (hasta junior)

- [ ] a) Mapa (`docs/contenido/sistemas.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 12 completada`)

## FASE 13 — Contenido: ingeniería (hasta junior)

- [ ] a) Mapa (`docs/contenido/ingenieria.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 13 completada`)

## FASE 14 — Contenido: IA (hasta junior)

- [ ] a) Mapa (`docs/contenido/ia.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 14 completada`)

## FASE 15 — Contenido: cuántica (hasta junior)

- [ ] a) Mapa (`docs/contenido/cuantica.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 15 completada`)

## FASE 16 — Contenido: robótica (hasta junior)

- [ ] a) Mapa (`docs/contenido/robotica.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 16 completada`)

## FASE 17 — Contenido: ciberseguridad (hasta junior)

- [ ] a) Mapa (`docs/contenido/ciberseguridad.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 17 completada`)

## FIN DEL PLAN

- [ ] Resumen final al usuario: qué se hizo, decisiones tomadas, preguntas abiertas y callouts «Revisar» pendientes
      por área. No fusionar `v2` en la rama principal: lo decide el usuario.
