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

## Ampliación del 2026-11-20 (pedida por el usuario; manda sobre lo anterior si choca)

El usuario pide terminar **todas** las fases de forma autónoma, **sin preguntar**: autoriza a decidir también los ⛔
(se decide la opción más segura, se documenta en `STATUS.md` §6 y se sigue). Requisitos nuevos:

1. **Repaso que hace pensar**: las preguntas de repaso NO son las mismas que las del temario. Dos clases: (a) la
   misma pregunta con otros datos (plantillas parametrizadas) y (b) preguntas distintas pero del mismo temario
   (conceptuales, de aplicación, «¿por qué falla esto?»). Ver FASE 1 y FASE 2.
2. **Explicación en escalera** en todos los nodos de todas las ramas: empieza para que lo entienda cualquiera
   (sin tecnicismos, con ejemplos prácticos de la vida real) y sube peldaño a peldaño hasta el nivel formal que
   necesita un matemático o físico (o un profesional de la rama). Dos registros conmutables: «práctico» y «formal».
   Ningún tecnicismo sin explicar antes: **glosario/leyenda** por área y términos enlazados. Ver FASE 8A y PARTE 2.
3. **Libreta con dibujo** (lienzo tipo paint para escribir a mano, guardable y exportable a Obsidian) y
   **calculadora científica** integrada. Ver FASE 8B.
4. **Más comodidad de estudio**: buscar y añadir otras funciones que ayuden a estudiar solo con Exodus. Ver FASE 8C.
5. **Alcance de contenido**: de 1º de ESO hasta **el nivel de un estudiante que termina un máster universitario**,
   en cada rama. Estructura: el **troncal** es solo el primer escalón (los fundamentos, ~20 % del contenido total
   de Exodus, de 1º de ESO a Bachillerato/inicio de grado, el 20 % que abre el 80 % restante); cada **rama**
   (matemáticas, física, ingeniería, robótica, sistemas, ciberseguridad, IA, cuántica) parte del troncal y
   especializa hasta fin de máster (~80 % del contenido). Exodus debe bastar para estudiar por cuenta propia. Todo
   contrastado con fuentes reales (libro y sección o documentación oficial).
6. **Proyectos**: revisar, mejorar y añadir. Pueden costar dinero (p. ej. construir y lanzar un cohete de modelismo),
   pero con presupuesto ajustado: cada proyecto indica lista de materiales con coste aproximado, alternativas
   baratas y normas de seguridad/legales.

## Ampliación del 2026-11-21: un nodo por tema (pedida por el usuario; manda sobre lo anterior si choca)

Los nodos del tamaño de una asignatura entera (6-7,5 ECTS en una página y 15-20 ejercicios) sirven de resumen, no para
estudiar desde cero. El usuario elige la **opción B**: cada asignatura (y cada bloque del troncal) se divide en **un nodo por
tema** de su guía docente o de su libro de referencia, y cada nodo se escribe **completo, extenso y en profundidad**: escalera
práctico → formal en cada sección, varios ejemplos resueltos, todas las demostraciones del temario, ejercicios abundantes y
graduados (con variantes comprobadas dos veces), desarrollo con rúbrica y banco de repaso. Se aceptan 600-1000 nodos en total.

- Los nodos existentes **no se borran ni cambian de id** (guardan progreso): pasan a ser la **visión general** de su asignatura
  o bloque, y los nodos de tema son prerrequisitos de los temas siguientes y la ampliación de cada parte.
- Vale para todas las fases de contenido que quedan (9B, 10-17).
- Orden: primero el troncal por temas (FASE 9B), porque es lo que el usuario estudia primero; después se retoma la FASE 10.

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

- [x] Ejercicios en el frontmatter o en un archivo hermano del nodo (elegir el formato más limpio y documentarlo en
      `docs/AMPLIAR.md`). Los nodos con `ctf_flag` siguen funcionando.
- [x] Sistema extensible de tipos de ejercicio (registro de tipos).
- [x] Tipos iniciales: numérico con tolerancia y unidades opcionales.
- [x] Tipo expresión simbólica (equivalencia matemática, no igualdad de texto).
- [x] Tipo vectores y matrices.
- [x] Tipo opción múltiple.
- [x] Tipo flag.
- [x] Plantillas parametrizadas: variables y rangos, de modo que cada intento sea una variante nueva con su solución
      calculada.
- [x] ⛔ Antes de implementar la verificación simbólica, proponer un servicio Python con SymPy en docker-compose o un
      CAS en JS, con pros y contras. (Decidido con la autorización del 2026-11-20: CAS en JS; STATUS.md §6.9.)
- [x] Respuestas en LaTeX o notación sencilla, con vista previa.
- [x] Cada intento se guarda: resultado, tiempo y variante.
- [x] Botón «creo que esto está mal» en cada nodo y ejercicio. Los reportes van a una página de pendientes y se
      resumen en `STATUS.md`.
- [x] Repaso con variantes: en `/repaso` un ejercicio parametrizado sale con otros datos, y cada nodo puede tener
      un banco `review` de preguntas distintas (conceptuales/aplicación) que solo salen en el repaso.
- [x] Convertir como ejemplo 3 nodos del troncal y 1 de cada rama con contenido. (Troncal: `mat-proporcionalidad-porcentajes`,
      `mat-calculo-1`, `fis-medida-movimiento`; ramas: `mat-teoria-numeros`, `fis-relatividad-especial`, `rob-cinematica`,
      `sys-ensamblador-x86-64`, `sec-criptografia`, `cua-computacion-cuantica`. Specs en `.soluciones/<id>.v2.mjs`.)
- [x] Cierre de fase: tests, `vault:check`, `typecheck`, casillas, `STATUS.md`, commit `v2: fase 1 completada`.

## FASE 2 — Diario de errores y repaso inteligente

- [x] Tras un fallo, el usuario etiqueta el error: concepto, cálculo/álgebra, despiste, no sabía empezar, mala
      lectura, bug de implementación o caso límite. Nota opcional.
- [x] Página `/errores` con patrones por tipo, por nodo, por área y su evolución.
- [x] El repaso espaciado pondera también los fallos recientes y su tipo.
- [x] Sesiones de repaso intercaladas entre nodos dominados, filtrables por área.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 2 completada`).

## FASE 3 — Respuesta desarrollada con rúbrica

- [x] Tipo «desarrollo»: demostraciones, derivaciones, análisis de diseño, informes forenses o de incidente,
      explicación de algoritmos.
- [x] Respuesta en Markdown + LaTeX + código, o marcada como «hecha en papel».
- [x] Solo después de entregar se muestran la solución modelo y la rúbrica del vault. El usuario se puntúa punto a
      punto y la nota cuenta para el dominio del nodo.
- [x] Nada de esto se exporta a Obsidian antes de entregar.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 3 completada`).

## FASE 4 — Ejercicios de código con tests

- [x] Tipo «código»: enunciado, plantilla inicial y tests por etapas. Si existen hitos con `prueba.sh`, integrarlos
      en lugar de duplicarlos.
- [x] Lenguajes: Python, C, C++, Rust y Bash.
- [x] ⛔ Antes de implementar, proponer entre un contenedor efímero aislado (sin red y con límites de CPU, memoria,
      tiempo y disco) y un runner local por CLI con el resultado firmado. Explicar los riesgos de cada uno, porque hay
      varios usuarios y el código no es de confianza.
- [x] Usos por rama: sistemas; IA (gradient check, métricas mínimas); física computacional (conservación de la
      energía, convergencia a la solución analítica); robótica (cinemática, estabilidad del control); ingeniería
      (respuesta del filtro, CPU); cuántica (amplitudes del circuito).
- [x] Los tests ocultos nunca se exportan.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 4 completada`).

## FASE 5 — Prueba de nivel

- [x] Diagnóstico adaptativo y repetible, por área.
- [x] Marca nodos como «dominado por diagnóstico» (distinto de completado y reversible) y propone dónde empezar en
      cada área.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 5 completada`).

## FASE 6 — Simulacros y retos

- [x] Nodo «examen»: ejercicios de varios nodos o áreas, o un examen real importado del vault, con duración fija y
      cronómetro.
- [x] «Modo papel» para mates y física: se resuelve a mano y después se introducen resultados o se autocorrige con
      rúbrica.
- [x] Retos finales por rama técnica: CTF encadenado o proyecto con etapas de tests.
- [x] Historial con notas y comparativa.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 6 completada`).

## FASE 7 — Calidad automática

- [x] `vault:check` verifica la solución de cada ejercicio calculable, genera variantes de muestra para detectar casos
      degenerados y comprueba que las soluciones de referencia de código pasan sus tests.
- [x] Avisos para nodos sin `academic_sources` concretos (libro y capítulo, o documentación oficial concreta).
- [x] Informe de cobertura por área: nodos con ejercicios verificados, de qué tipos y cuántos.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 7 completada`).

## FASE 8 — Objetivos recomendados

- [x] Objetivos opcionales definidos en el vault como listas ordenadas de nodos de cualquier área. Ejemplos:
      «Primero de Física y Matemáticas», «Junior de sistemas», «Analista SOC nivel 1».
- [x] Se pueden activar varios, con avance, ritmo estimado y siguiente nodo recomendado.
- [x] Registro opcional de tiempo de estudio por día y por área en el heatmap.
- [x] Estructura preparada para que mates y física crezcan hasta el grado completo sin reorganizar el árbol.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 8 completada`).

## FASE 8A — Explicación en escalera y glosario

- [x] Formato de nodo con secciones «práctico» (intuición, vida real, sin tecnicismos) y «formal» (definiciones,
      teoremas, demostraciones), conmutables en la página del nodo; por defecto, el registro que elija el usuario.
- [x] Glosario por área en el vault (`vault/_glosario/<area>.md`): término, explicación llana, definición formal y
      nodo donde se introduce. Los términos del glosario se resaltan en el texto con su explicación al pasar/pulsar.
- [x] Página `/glosario` (leyenda) con búsqueda; `vault:check` avisa de términos usados antes de definirse.
- [x] Documentarlo en `docs/PEDAGOGIA.md` y `docs/AMPLIAR.md`.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 8A completada`).

## FASE 8B — Libreta con dibujo y calculadora

- [x] Lienzo de dibujo a mano en la Libreta (lápiz, borrador, colores, deshacer, cuadrícula, ratón/táctil/lápiz),
      guardado por usuario y exportable a Obsidian (PNG/SVG junto a la nota).
- [x] Calculadora científica integrada (flotante, accesible desde cualquier página de estudio), sin IA.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 8B completada`).

## FASE 8C — Comodidad de estudio

- [x] Investigar y añadir funciones que ayuden a estudiar solo con Exodus (p. ej. temporizador Pomodoro, modo
      concentración, tarjetas de glosario, atajos de teclado, impresión de hojas de ejercicios). Decidir y anotar.
- [x] Cierre de fase (checks, casillas, `STATUS.md`, commit `v2: fase 8C completada`).

# PARTE 2: CONTENIDO (un ciclo por área)

Orden de áreas: troncal → matemáticas → física → sistemas/bajo nivel → ingeniería → IA → cuántica → robótica →
ciberseguridad.

Alcance (ampliado el 2026-11-20): todas las áreas desde 1º de ESO hasta **nivel máster como mínimo**. Matemáticas y
física cubren el doble grado completo de la UNED (guías docentes como referencia) y siguen hasta máster. El resto
de ramas: de cero a nivel profesional/máster. Se avanza por tramos: primero lo que el usuario necesita antes
(troncal y primero de la UNED), luego se profundiza.

Cada nodo se escribe **en escalera** (FASE 8A): práctico → formal, sin tecnicismos sin explicar, términos en el
glosario. Cada rama tiene proyectos buenos (pueden costar dinero, con presupuesto ajustado, materiales, coste y
seguridad).

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

- [x] a) Mapa (`docs/contenido/troncal.md`)
- [x] b) Plan (⛔ si cambia ids o afecta al progreso) — sin cambios de id
- [x] c) Redacción — 31 nodos en orden (ver `docs/contenido/troncal.md` §b); hechos: 31/31
- [x] d) Revisión independiente (subagente) — 3 bloques, 59 hallazgos (58 aplicados): `docs/contenido/troncal.md` §d
- [x] e) Reportes «creo que esto está mal» del área — `npm run reportes` (2026-11-21): ninguno pendiente
- [x] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 9 completada`) — 2026-11-21; cobertura: 392 ejercicios con variantes y 213 preguntas de repaso en todo el vault (al empezar la fase: 27 con variantes); el troncal sin avisos de fuentes vagas

## FASE 9B — Troncal por temas (de 1.º de ESO a 2.º de Bachillerato, un nodo por tema)

- [x] a) Mapa por temas (2026-11-21: 68 nodos de tema nuevos, `docs/contenido/troncal-temas.md`): cada capítulo de Marea Verde (matemáticas, 1.º ESO a Matemáticas II) y cada bloque de física y de las
      destrezas → un nodo de tema (nuevo) o el nodo existente si ya es de un solo tema (`docs/contenido/troncal-temas.md`)
- [x] b) Plan: ids, prerrequisitos, orden de estudio y objetivo `acceso-universidad` actualizado (el objetivo se rehace al cerrar cada bloque)
- [ ] c) Redacción tema a tema, extensa (escalera, ejemplos, demostraciones, ejercicios abundantes con variantes, repaso); hechos: 63/68
- [ ] d) Revisión independiente (subagente), por bloques
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 9B completada`)

## FASE 10 — Contenido: matemáticas (doble grado UNED completo y máster)

- [x] a) Mapa (`docs/contenido/matematicas.md`, con la guía docente de la UNED) — 19 guías del grado y el máster de Matemáticas Avanzadas, leídos el 2026-11-21
- [x] b) Plan (⛔ si cambia ids o afecta al progreso) — sin cambios de id: 15 nodos nuevos y puesta al día de los existentes, en 5 tramos
- [ ] c) Redacción — tramo 1 completo (11 nodos de asignatura), tramo 2 empezado; **se replanifica por temas tras la FASE 9B** (ver «Ampliación del 2026-11-21»); hechos: 12
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 10 completada`)

## FASE 11 — Contenido: física (doble grado UNED completo y máster)

- [ ] a) Mapa (`docs/contenido/fisica.md`, con la guía docente de la UNED)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 11 completada`)

## FASE 12 — Contenido: sistemas / bajo nivel (hasta fin de máster)

- [ ] a) Mapa (`docs/contenido/sistemas.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 12 completada`)

## FASE 13 — Contenido: ingeniería (hasta fin de máster)

- [ ] a) Mapa (`docs/contenido/ingenieria.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 13 completada`)

## FASE 14 — Contenido: IA (hasta fin de máster)

- [ ] a) Mapa (`docs/contenido/ia.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 14 completada`)

## FASE 15 — Contenido: cuántica (hasta fin de máster)

- [ ] a) Mapa (`docs/contenido/cuantica.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 15 completada`)

## FASE 16 — Contenido: robótica (hasta fin de máster)

- [ ] a) Mapa (`docs/contenido/robotica.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 16 completada`)

## FASE 17 — Contenido: ciberseguridad (hasta fin de máster)

- [ ] a) Mapa (`docs/contenido/ciberseguridad.md`)
- [ ] b) Plan (⛔ si cambia ids o afecta al progreso)
- [ ] c) Redacción
- [ ] d) Revisión independiente (subagente)
- [ ] e) Reportes «creo que esto está mal» del área
- [ ] f) Cierre (checks, cobertura, `STATUS.md`, commit `v2: fase 17 completada`)

## FASE 18 — Cierre: README y ampliación sencilla (pedida por el usuario el 2026-11-21)

- [ ] a) **Ampliar con una orden**: que un Claude Code futuro (o una persona) pueda añadir un área o rama nueva con el mínimo
      esfuerzo. Revisar `docs/AMPLIAR.md` (§2 y §3) y añadir lo que falte: un script de andamiaje (`npm run nueva-rama -- <área>
      <rama>` o similar) que cree la carpeta del vault, el glosario del área, un objetivo de ejemplo, un nodo plantilla en escalera
      y su spec `.soluciones/` con variantes; y una receta corta paso a paso (mapa → plan por temas → redacción → revisión) para
      que una sesión nueva la siga sin contexto previo.
- [ ] b) **README al día**: qué es Exodus, cómo se instala y arranca, cómo se estudia (objetivos, nodos por tema, repaso, libreta,
      calculadora), cómo se amplía (enlace a `docs/AMPLIAR.md`), estructura del repositorio y estado del contenido (números finales
      de nodos, ejercicios y variantes de `npm run vault:cobertura`).
- [ ] c) Cierre (checks, `STATUS.md`, commit `v2: fase 18 completada`).

## FIN DEL PLAN

- [ ] Resumen final al usuario (con el número final de nodos): qué se hizo, decisiones tomadas, preguntas abiertas y callouts «Revisar» pendientes
      por área. No fusionar `v2` en la rama principal: lo decide el usuario.
