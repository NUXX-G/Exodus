# Sistema de aprendizaje de Exodus

Objetivo: añadir a Exodus un sistema de aprendizaje basado en recuerdo activo, repetición espaciada guiada por errores y priming. Antes de empezar, relee CLAUDE.md, STATUS.md, FASE_1.md, docs/AMPLIAR.md, database/schema.ts y src/lib/ (parser del vault, progreso, render) tal como estén en ese momento. Adapta todo a las convenciones existentes (nombres, estructura, estilo de componentes, UI en español). Si algo de aquí choca con el diseño actual, elige la opción que menos rompa y apúntalo en STATUS.md con el porqué.

## Principios que no se negocian

1. Sin IA durante el estudio. La plataforma no llama a ningún modelo en tiempo de uso. La IA solo entra en un script de autoría opcional (Fase 7) que genera borradores que un humano revisa y commitea.
2. No se pierde el progreso de nadie. Todo cambio de esquema va con migración (npm run db:generate). Los nodos y usuarios existentes siguen funcionando, y los campos nuevos del frontmatter son opcionales.
3. Multiusuario: todo estado nuevo es por usuario.
4. Exportación a Obsidian: se pueden exportar los próximos repasos, las secciones débiles y las flashcards pendientes. NO se exportan las respuestas del usuario (recuerdo libre, respuestas socráticas, respuestas de quiz). Respeta los marcadores <!-- exodus:inicio --> / <!-- exodus:fin -->.
5. Cada fase termina con npm run typecheck, npm test y npm run vault:check en verde, tests nuevos para la lógica nueva, STATUS.md actualizado y un commit propio.

## Orden de ejecución

Fases 3 y 4 primero (las que más rinden), luego 1, 2, 5, 6 y 7. No pases a la siguiente con tests en rojo. Si la sesión se corta, en STATUS.md tiene que quedar claro qué fase va por dónde.

## Concepto clave: secciones

Una sección es cada encabezado H2 (##) del cuerpo del nodo. El parser las extrae con un id estable (slug del título), su título y su número de palabras. Si un nodo no tiene H2, se trata como una sola sección.

## Fase 1 — Priming

Frontmatter opcional:

priming:
  resumen: ["frase 1", "frase 2", "frase 3", "frase 4", "frase 5"]
  secciones:
    - { seccion: "slug-del-h2", frase: "De qué va en una frase" }

- La primera vez que un usuario abre un nodo con priming, antes de la teoría ve: las frases del resumen, las secciones con su frase y 2-3 huecos opcionales de "qué me suena / qué dudas tengo" (se guardan por usuario). Temporizador visible de 5 min que no bloquea, y botón "Empezar a estudiar".
- Queda registrado que el priming se hizo, y se puede volver a ver desde el nodo.
- vault:check: resumen entre 3 y 7 frases, y cada `seccion` existe como H2.

## Fase 2 — Modo estudio con ritmo y reconstrucción

- Botón "Estudiar" en el nodo, que abre la teoría con un temporizador de bloques de 25 min.
- Ritmo: caras de folio del nodo (unas 500 palabras por cara, en una constante configurable), objetivo de 5-10 caras/hora y tiempo estimado. Indicador discreto del avance frente al objetivo.
- Al acabar cada bloque (o con el botón "Reconstruir"): se OCULTA la teoría y se muestra solo el mapa del usuario y un textarea "Re-explícate todo lo que llevas". Después el usuario marca qué secciones le han salido flojas, y eso alimenta las secciones débiles (Fase 3).
- Mapa: una nota de la Libreta de tipo "mapa" asociada al nodo (añade ese tipo a la Libreta). Se edita en un panel lateral con el aviso fijo "Pocas palabras clave y flechas, no un resumen". Si no existe, se crea vacía.
- Se registran las sesiones (duración y caras avanzadas), y cuentan para el heatmap y la racha si encaja.

## Fase 3 — Repaso: recuerdo libre primero, errores como brújula (la más importante)

- Todo repaso empieza SIN material: el título del nodo, solo los títulos de sección como andamio y un textarea grande "Explica todo lo que recuerdes del tema". Se guarda el texto por usuario y fecha.
- Después se muestra la teoría sección a sección, con autoevaluación Bien / Flojo / Ni idea.
- Flojo y Ni idea marcan la sección como débil para ese usuario. Se destaca en el nodo y en el siguiente repaso, con un botón "Reestudiar solo las débiles" que abre el modo estudio filtrado.
- Programación por usuario y nodo, con intervalos base en días: [2, 4, 7, 14, 21, 30, 60, 120].
  - Todas Bien: sube un escalón.
  - Alguna Flojo y ninguna Ni idea: se queda en el mismo escalón.
  - Alguna Ni idea: baja 2 escalones (mínimo 0).
  - Jitter de ±15% para que no se amontonen repasos el mismo día.
- Fecha límite opcional por usuario y nodo (o por área si es fácil): comprime los intervalos para que haya al menos 2 repasos en los 7 días anteriores y ningún repaso caiga después de la fecha.
- Integra esto con los "próximos repasos" que ya existen, sin duplicarlos. Si hace falta, migra los datos.
- Vista /repasos: lo de hoy, lo atrasado y lo próximo, ordenado por urgencia, con las secciones débiles contadas aparte.
- Tests a fondo de la programación: subida, estancamiento, bajada, suelo en 0, compresión por fecha límite y jitter acotado.

## Fase 4 — Datos literales: callout [!dato] → flashcards

- Sintaxis en el cuerpo del nodo:
  > [!dato] Referencia corta | pista de contexto opcional
  > Texto literal exacto (puede ser multilínea, LaTeX o código).
- Se renderiza como un callout con estilo propio. El parser extrae cada [!dato] como flashcard con un id estable (hash de nodo + referencia) para conservar el progreso aunque se edite el texto.
- Repaso: anverso con referencia + pista. El usuario ESCRIBE la respuesta, se muestra el texto exacto con un diff palabra a palabra frente a lo que escribió, y marca Exacta / Casi / No. Cada tarjeta tiene sus propios escalones, con los mismos intervalos y reglas que la Fase 3.
- Las tarjetas que tocan entran en /repasos. Hay también un modo de repasar todos los datos de un nodo o de un área.
- vault:check: referencia y cuerpo no vacíos.

## Fase 5 — Quiz tipo test

Frontmatter opcional:

quiz:
  - pregunta: "..."
    opciones: ["...", "...", "...", "..."]
    correcta: 0
    explicacion: "Por qué es esa y por qué no las otras"
    seccion: "slug-del-h2"

- Opciones barajadas en cada intento. Al responder: acierto o fallo, la explicación y un enlace a la sección. Los fallos marcan la sección como débil.
- vault:check: exactamente 4 opciones, `correcta` en rango, `seccion` existente y sin opciones duplicadas. AVISO (no error) si en un nodo la correcta es la más larga en más del 40% de las preguntas, o si en una pregunta la correcta supera en más de un 50% la longitud media de los distractores. Las preguntas no deben poder acertarse por la longitud.
- Historial de intentos por usuario. No se exporta.

## Fase 6 — Preguntas socráticas autoevaluadas

Frontmatter opcional:

socratico:
  panoramica:
    - { pregunta: "...", claves: ["idea que debe aparecer", "otra"], seccion: "slug-opcional" }
  detalle: [ ... ]
  profundizacion: [ ... ]

- Modo "Examen oral": las preguntas van de una en una y en orden (panorámica → detalle → profundización). El usuario escribe su respuesta, y después ve las claves y marca cuáles ha cubierto.
- Cobertura por pregunta y por bloque. Si queda por debajo del 60%, la sección asociada pasa a débil.
- La UI recomienda la profundización solo cuando el nodo lleve al menos 2 repasos con todo Bien.
- vault:check: estructura válida y al menos 2 claves por pregunta.

## Fase 7 — Script de autoría con IA (opcional)

- npm run vault:generar -- <id-nodo> [--priming] [--quiz] [--socratico] [--n 15]
- Usa la API de Anthropic con ANTHROPIC_API_KEY y ANTHROPIC_MODEL por variable de entorno (nunca hardcodeados ni commiteados). Escribe BORRADORES en vault/_borradores/<id>.yml y nunca toca el nodo directamente.
- Instrucciones del prompt interno: usar solo el contenido del nodo, repartir las preguntas por todas las secciones, mezclar ideas generales y detalles concretos, distractores plausibles de longitud similar a la correcta, alguna pregunta de "señala la incorrecta", sin repetir datos, y cada explicación citando la sección.
- npm run vault:aplicar -- <id-nodo> fusiona el borrador revisado en el frontmatter, pasa vault:check y borra el borrador.
- vault/_borradores/ no rompe vault:check ni genera nodos. Sin API key, todo lo demás funciona igual.

## Cierre

- Nodo de ejemplo en vault/ que lo use TODO: priming, varias H2, algún [!dato], quiz de 6+ preguntas y socrático con los 3 bloques.
- Documentar los campos nuevos en el README ("Formato de un nodo") y en docs/AMPLIAR.md, y los comandos nuevos en la tabla de comandos.
- Exportación a Obsidian: en la nota de cada nodo, próximos repasos, secciones débiles y flashcards pendientes, sin respuestas.
- No subir de forma notable el uso de memoria (límite de 512 MB). Lo que extraiga el parser se cachea junto a cache-html/.
- Al terminar: resumen por fase, decisiones tomadas y pendientes en STATUS.md.
