# STATUS — Exodus v2

Última actualización: 2026-11-15 · Rama de trabajo: **`v2`** · Plan: `docs/ROADMAP_V2.md`

Este archivo es el **panel de control** entre sesiones. Es corto a propósito: con él, más la sección de la fase actual
del roadmap, una sesión nueva puede seguir trabajando sin leer nada más. Mantenlo corto: lo que sea historia va al
registro de sesiones (una línea) o a `docs/`.

## 0. Arranque de una sesión nueva

1. `git checkout v2 && git pull -q && git status --short && git log --oneline -3`
2. Lee este archivo entero.
3. Lee **solo** la sección de la fase actual en `docs/ROADMAP_V2.md`:
   `grep -n "^## " docs/ROADMAP_V2.md` y lee desde `## FASE <n>` hasta la siguiente `## `.
4. Retoma en «Ahora mismo → Siguiente paso». No releas el plan completo ni explores el repo: el mapa de §4 basta.
5. Consulta, sin leer enteros: `docs/HISTORIAL_V1.md` (estado de la v1 y lista de nodos; usa `grep`),
   `docs/PEDAGOGIA.md` (al escribir contenido), `docs/AMPLIAR.md` (formato de nodos y efectos sobre el progreso),
   `docs/CURRICULO.md` (árbol de la v1).
6. Antes de que se llene el contexto: termina la tarea en curso, actualiza §1 y el registro (§9) y ejecuta
   `bash scripts/dev/guardar.sh "v2: fase N · <tarea>"`. **Desde el 2026-11-20 no se para nunca la sesión ni se
   pide abrir otra**: el contexto se resume solo y se sigue. Un trabajo cron de la sesión («continúa con el roadmap»,
   cada hora en el minuto 17) reanuda el trabajo tras los límites de uso; si no existe (`CronList`), recréalo.

## 1. Ahora mismo

- **Fase actual**: FASE 9 — Contenido: troncal (desde cero hasta Bachillerato).
- **Tarea actual**: c) redacción del troncal en escalera, nodo a nodo en el orden de `docs/contenido/troncal.md` §b.
- **Siguiente paso concreto**: nodo 29, `prog-pensamiento-computacional` (hechos 1-28; valores de variantes con coma decimal siempre dentro de $…$; utilidades en `scripts/dev/vault/` (prereq, excepto, tambien, objetivo-sin-repetidos); si un nodo ya tiene `.v2.mjs`, renombrarlo a `.v2-base.mjs` e importarlo desde la nueva v2; script útil: `node scripts/dev/degeneradas.mjs .soluciones/<id>.v2.mjs` lista todas las variantes con respuesta = dato). Receta: script de parche en el scratchpad con `practico()`/`formal()` (ver registro en troncal.md), spec `.soluciones/<id>.v2.mjs` con variantes doble-comprobadas y banco `r-*`, `ex-inject`, `vault:soluciones`, `vault:fugas`, `vault:check -- --avisos` sin avisos del nodo.
- **Bloqueos**: `next build` (Turbopack) se cuelga desde el 2026-11-21 en «Creating an optimized production build» (1 núcleo al 100 %, >4 GB, sin escribir en `.next`); la última vez que terminó fue en el guardado del nodo 25 (de1f531, ya tardó >10 min). Mientras no se resuelva, guardar con `RAPIDO=1 bash scripts/dev/guardar.sh …` (vault:check, typecheck y tests sí corren). Pendiente: investigar en una sesión con memoria libre (¿crece el vault que se importa en el bundle?, probar `next build --webpack`).
- **Prueba en navegador**: `scripts/dev/sesion-prueba.ts` (usuario y sesión en una base temporal) y
  `scripts/dev/e2e-v2.cjs` (Playwright 1.58 de la caché de npx: `PLAYWRIGHT_CORE=C:/Users/nelso/AppData/Local/npm-cache/_npx/787f53666b8d4740/node_modules/playwright-core`).
  En Git Bash, con `MSYS_NO_PATHCONV=1` las rutas `/tmp` no se traducen: usa `cygpath -w`. Para el servidor de
  prueba antes de `guardar.sh` (que reconstruye `.next`): el `node` hijo sobrevive a TaskStop; ciérralo por PID.

## 1b. Cola de pendientes (en orden; no adelantar nada)

1. Roadmap v2: lo que quede de `docs/ROADMAP_V2.md` (fases 8A, 8B, 8C, 9-17 y «Fin del plan»), en su orden.
2. Sistema de aprendizaje (recuerdo activo, repetición espaciada, priming, datos, quiz, socrático). Especificación completa en docs/APRENDIZAJE.md. Ejecutar por fases en el orden que indica el documento.
   Nota del usuario (2026-11-20): son funciones **nuevas**; no eliminar nada de lo anterior para sustituirlo. Si algo
   que ya existe es mejor que lo que pide el documento (p. ej. el repaso espaciado con variantes y banco de repaso, el
   diario de errores o el temporizador), se deja tal cual y se integra con lo nuevo; anotar en §6 cada caso y su porqué.

## 2. Reglas de la v2 (resumen; el texto completo está en el roadmap)

- Avanza fase a fase sin pedir permiso. Cierre de fase: tests, `npm run vault:check` y `npm run typecheck` en verde,
  casillas marcadas en el roadmap, este archivo al día y commit `v2: fase N completada`
  (`bash scripts/dev/guardar.sh "v2: fase N completada"`). Después, la fase siguiente.
- **⛔ Parar y preguntar solo** en: decisiones de seguridad, cambios que puedan afectar al progreso o a las cuentas de
  los usuarios, y cambios de stack (servicios o lenguajes nuevos). Todo lo demás: decidir y anotarlo en §6 con su porqué.
- Tarea bloqueada → a §7 y seguir con lo que no dependa de ella.
- Nunca romper el progreso: todo cambio de esquema va con migración (`npm run db:generate`) y se sigue `docs/AMPLIAR.md`.
  **No cambiar ids de nodos ni de ejercicios.**
- Sin IA durante el estudio, pistas graduales (3 niveles), markdown-first.
- **No fusionar `v2` en `main`** ni abrir PR hacia `main`: lo decide el usuario.
- Commits en español; terminan con `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>` (lo pone `guardar.sh`).

## 3. Lo que no está en el código

- El usuario prepara el **doble grado de Física y Matemáticas de la UNED** desde nivel de 1º de ESO, en unos 14 meses.
  Exámenes presenciales, en papel, con desarrollo y demostraciones. Mates y física son la prioridad; las demás ramas
  necesitan la misma calidad de práctica y verificación.
- La instancia corre en su VPS (Ubuntu, Docker detrás de Apache: `EXODUS_PROXY=externo ./deploy.sh`) con cuentas de
  amigos invitados. Su progreso es sagrado.
- Escribe en español e informal. **Si pregunta «cómo funciona X», responde y no implementes.**
- Autorizado: git, GitHub, ramas y commits en `NUXX-G/Exodus` (privado). Prohibido: acciones destructivas fuera del
  repo, flags en claro (solo sha256), versionar `.soluciones/` o `database/exodus.db`. Seguridad ofensiva: siempre como
  análisis y defensa, nunca exploits.

## 4. Mapa del código (para no explorar)

| Qué | Dónde |
| --- | --- |
| Stack | Next.js 16 (App Router, `output: standalone`) + TypeScript + Drizzle + SQLite (better-sqlite3). Tests: `node:test` con `tsx` |
| Carga y validación del vault (zod: frontmatter, ejercicios, adjuntos, ciclos) | `src/lib/vault.ts` |
| Render Markdown (MathJax SVG, Shiki, wikilinks, callouts, saneado) y su caché | `src/lib/markdown.ts`, `src/lib/render-cache.ts`, `src/lib/precalentar.ts` |
| Ejercicios: normalización, hashes, dominio 80 %, repaso 1-3-7-16-35-70 días | `src/lib/exercises.ts` (puro, con tests) |
| Progreso, flags, actividad | `src/lib/progress.ts` |
| Siguiente nodo, tiempo estimado, búsqueda | `src/lib/study.ts` |
| Áreas (integradas + `vault/_areas.md`) | `src/lib/areas.ts` |
| Usuarios, sesiones, invitaciones, contraseñas, limitador | `auth.ts`, `sessions.ts`, `invitations.ts`, `password.ts`, `rate-limit.ts` |
| Libreta | `src/lib/notes.ts`, `src/app/libreta/` |
| Obsidian (export, tokens, plugin, ZIP, plugin Git, «Primeros pasos») | `src/lib/obsidian*.ts`, `zip.ts`, `src/app/api/obsidian/` |
| Esquema y migraciones | `database/schema.ts`, `database/migrations/0000…0005` |
| Páginas | `src/app/`: `/`, `temario`, `nodo/[id]`, `repaso`, `practica`, `recursos`, `buscar`, `libreta`, `guia`, `(cuenta)/cuenta` |
| Componentes de ejercicio | `src/components/ExerciseForm.tsx`, `ReviewForm.tsx`, `FlagForm.tsx` |
| Scripts del vault | `scripts/`: `vault-check.ts`, `ex-inject.ts`, `ex-hash.ts`, `flag-hash.ts`, `relevel.ts`, `vault-fugas.mjs` |
| Utilidades de sesión | `scripts/dev/guardar.sh` (checks + commit + push de v2), `scripts/dev/reemplaza.cjs` (parches exactos con CRLF) |
| Contenido | `vault/00-troncal/…`, `vault/01-matematicas/`, `02-fisica/`, … ; `vault/_recursos/`, `vault/_adjuntos/` |
| Respuestas de referencia (no versionadas) | `.soluciones/<id>.spec.mjs` → `npx tsx scripts/ex-inject.ts <nodo.md> <spec>` |

Formato actual de un ejercicio (v1): `exercises: [{ id, tier: 1|2|3, prompt, answers: ["sha256:…"] }]` en el
frontmatter; la respuesta se normaliza y se compara por hash. Detalle en `docs/HISTORIAL_V1.md` §4.

## 5. Comandos y trampas del entorno (Windows 11)

- Checks: `npm run vault:check` (`-- --avisos` lista fuentes vagas y demás), `npm run typecheck`, `npm test`,
  `npm run build`. Con soluciones: `npm run vault:soluciones [-- <id>… | --sin-docker]`. Cobertura:
  `npm run vault:cobertura` (→ `docs/contenido/cobertura.md`). Tras tocar prerequisitos:
  `npm run vault:relevel`. Fugas de respuestas en el texto: `npm run vault:fugas -- <id>`.
- Probar en navegador: `npm run build`, luego `DATABASE_PATH=<db temporal> npx next start -p 3211`, y Playwright.
  **Nunca** con la base del usuario (`database/exodus.db`). Con `next dev`, los logs de `.playwright-mcp/` provocan
  bucles de recarga.
- **Python no está instalado**: scripts de apoyo en Node; para ejecutar Python, C, Rust… usar Docker
  (`python:3.12-slim`, `gcc:14`, etc.; con `MSYS_NO_PATHCONV=1` en Git Bash).
- **Los heredocs de esta shell estropean las barras invertidas** (`\n` llega como salto de línea real, `\\` como `\`):
  los scripts de parche se escriben con la herramienta Write en el scratchpad y se ejecutan con `node`. **Nunca `sed`
  ni `node -e '…'` con LaTeX**: sed convierte `\a`, `\f`… en caracteres de control y en `node -e` `"\{"` pierde la barra.
  Para texto con barras, Edit o un script escrito con Write.
- Una línea de Markdown que empieza por `+ ` o `- ` dentro de una fórmula en línea la convierte en lista (vault:check:
  «queda un "$" sin procesar»): no partir fórmulas en un `+`/`-`.
- Los `.ts`/`.tsx`/`.md` del repo pueden tener **CRLF**: para parchear, `node scripts/dev/reemplaza.cjs <archivo> <pares.json>`
  o la herramienta Edit. Los heredocs largos con comillas rompen la shell.
- Wikilinks solo a nodos que ya existen (si no, `vault:check` falla). `|` dentro de LaTeX en tablas rompe la tabla:
  `\lvert x\rvert`, `\mid`.
- Citas y datos: verificar en la web antes de escribirlos; si no se puede respaldar, se omite.

## 6. Decisiones tomadas (con su porqué)

1. **2026-11-15 · Traspaso entre sesiones.** `STATUS.md` pasa a ser un panel corto y el antiguo (595 líneas) se
   archiva en `docs/HISTORIAL_V1.md`. *Por qué*: el roadmap pide leer `STATUS.md` en cada sesión; con 595 líneas eso
   gastaba miles de tokens en historia que casi nunca hace falta.
2. **2026-11-15 · Utilidades de sesión versionadas** en `scripts/dev/` (antes vivían en la carpeta temporal de una
   sesión y se perdían). *Por qué*: una sesión nueva no tiene la carpeta temporal de la anterior.
3. **2026-11-15 · Commits directos en `v2`, sin PR, y `git push` de `v2` como copia de seguridad.** El CI de GitHub solo
   corre en PR y en `main`, así que `guardar.sh` repite los checks en local antes de cada commit. *Por qué*: el plan pide
   un commit por fase en la rama `v2` y prohíbe fusionar en `main`.
4. **2026-11-15 · `CLAUDE.md`**: se corrigió el stack (decía «Next.js / FastAPI» y «Prisma/Drizzle»; es Next.js +
   Drizzle, sin FastAPI) y se añadieron el protocolo de arranque y la regla del roadmap. *Por qué*: `CLAUDE.md` se carga
   solo en cada sesión y un dato falso ahí despista a la siguiente.
5. **2026-11-15 · `FASE_1.md` se deja como está**: es el encargo original de la v1, ya cumplido; no se usa en la v2.
6. **2026-11-15 · Arreglos urgentes de la v1 van a `main` por PR y luego se fusionan en `v2`** (`git merge main`).
   *Por qué*: el usuario usa la v1 en su VPS mientras se hace la v2. Primer caso: PR #209 (memoria de MathJax).
7. **2026-11-15 · Presupuesto de rendimiento** (VPS de 2 GB compartido con otros servicios; contenedor de 512 MB; 2–4
   usuarios). Toda función nueva se prueba en Docker con `--memory=512m --cpus=1` y no debe superar ~350 MB en uso ni
   ~0,3 s de servidor por página. Fórmulas: un solo motor MathJax (`src/lib/rehype-mathjax-svg.ts`, sin órdenes TeX con
   estado) y glifos compartidos por página (`src/lib/svg-compacto.ts`: todo HTML con fórmulas que se pinte en una página
   debe pasar por `compactarFormulas`). *Por qué*: el precalentado del PR #207 tumbó la instancia por una fuga de MathJax.
   Contenido escrito por usuarios (Libreta y, en el futuro, respuestas de desarrollo de la fase 3): siempre
   `renderMarkdown(md, resolve, "usuario")`, que usa un motor MathJax aparte sin paquetes que definen macros y otra
   clave de caché (PR #210). *Por qué*: con un motor compartido, una nota podía cambiar las fórmulas de otros usuarios.

8. **2026-11-20 · Autonomía total.** El usuario autoriza decidir también los ⛔ sin preguntar y amplía el plan
   (sección «Ampliación del 2026-11-20» del roadmap: repaso con variantes, explicación en escalera, glosario,
   libreta con dibujo, calculadora, contenido hasta máster, proyectos con presupuesto). Fases nuevas 8A, 8B y 8C.
9. **2026-11-20 · ⛔ Verificación simbólica: CAS mínimo en JS, sin servicio Python.** La respuesta del alumno se
   evalúa en puntos fijos (sembrados por el id del ejercicio) y se compara la **huella** (hash de los valores
   redondeados) con la de la solución, calculada al inyectar. *Pros*: sin servicio ni lenguaje nuevo, cabe en los
   512 MB, la solución no queda en claro en el vault (regla de siempre), es determinista y comprobable en tests.
   *Contras frente a SymPy*: no simplifica ni demuestra; equivalencia probabilística (prácticamente segura con
   varios puntos); dominios restringidos (raíces, logaritmos) exigen declarar el intervalo de muestreo; la forma
   («factoriza», «simplifica») se comprueba aparte con reglas sobre el árbol. *Descartado SymPy*: un contenedor
   Python más (~150 MB) en un VPS de 2 GB y otro servicio que mantener, para un beneficio que no hace falta aquí.
10. **2026-11-20 · Plantillas parametrizadas como variantes precalculadas.** El spec de `.soluciones/` genera
   N variantes (datos + hash de la solución, verificada por dos métodos) y el servidor elige una no vista en cada
   intento. *Por qué*: mantiene la regla de no tener soluciones ni fórmulas en claro y la doble verificación offline.

11. **2026-11-20 · Pesos del diario de errores** (`src/lib/errores.ts`): concepto y «no sabía empezar» 3, caso
   límite y bug 2, cálculo 1,5, mala lectura 1, despiste 0,5; se desvanecen en 21 días. Un acierto con fallos de
   peso ≥ 2 en esa ventana no pasa de 7 días de intervalo (≥ 1: 16 días). *Por qué*: un fallo de comprensión pide
   volver pronto sobre la idea y un despiste no; los pesos son una decisión de diseño, no un dato empírico (la
   literatura respalda espaciar e intercalar: Dunlosky et al. 2013; Rohrer y Taylor 2007), y se pueden ajustar.
12. **2026-11-20 · Práctica intercalada** en `/repaso?modo=intercalado`: no cambia el dominio; un fallo reprograma
   ese ejercicio para mañana. *Por qué*: intercalar sirve para elegir la herramienta adecuada, como en un examen;
   un fallo indica olvido.
13. **2026-11-20 · Desarrollo con rúbrica**: la solución y la rúbrica van **selladas** en el frontmatter (gzip + base64), no
   cifradas: el servidor tiene que mostrarlas tras entregar y el repo es del usuario; el sellado evita leerlas sin
   querer. Umbral: **60 %** de la rúbrica para contar como resuelto (aprobar en la UNED es un 5 sobre 10; se pide algo
   más porque la nota es una autoevaluación). La nota se guarda como un intento más, así el diario de errores y el
   repaso funcionan igual. Con una entrega sin puntuar no se admite otra del mismo ejercicio.

14. **2026-11-20 · ⛔ Ejercicios de código: runner local, ningún código de los alumnos en el servidor.** El alumno
   descarga `prueba.sh` (generado con las entradas del vault, o el del proyecto), lo ejecuta en su máquina y pega el
   «código del ejercicio» (SHA-256 truncado de todas las salidas); Exodus compara su hash. *Contenedor efímero
   descartado*: exige dar al contenedor de Exodus acceso al demonio Docker (equivale a root en el VPS), compilar
   Rust o C++ consume cientos de MB en un VPS de 2 GB compartido, y hay que defenderse de bombas de procesos, de
   disco y de tiempo con varios usuarios. *Firma descartada*: no hace falta, porque las salidas esperadas nunca se
   publican (solo su huella); falsificar el código exige conocer las salidas, es decir, resolver el ejercicio. *Riesgo
   aceptado*: el alumno podría copiar el código de otro; en estudio personal solo se engaña a sí mismo (igual que con
   cualquier respuesta). Los casos (entradas) son visibles; las salidas esperadas, no («tests ocultos»).

15. **2026-11-20 · Prueba de nivel por búsqueda binaria** en el orden de estudio de cada área (2 preguntas por
   nodo sondeado, 3 si hay empate; «No lo sé» cuenta como fallo; no se dice si se acierta hasta el final). Las marcas
   «dominado por diagnóstico» van en una tabla aparte (`diagnostic_marks`): desbloquean dependientes (`stateOf`
   devuelve `diagnosed`) pero no tocan `node_progress` ni el dominio, y se quitan por nodo o por área. *Por qué*: el
   árbol no es una cadena perfecta, así que el resultado es una estimación; hacerla reversible y separada del
   progreso evita estropear lo ganado de verdad.

16. **2026-11-20 · Simulacros y retos como nodos `kind: examen`** que **referencian** ejercicios de otros nodos (sin
   duplicarlos), con variantes fijadas al empezar, guardado automático, entrega automática al acabarse el tiempo y modo
   papel con 10 min de margen. No resuelven los ejercicios de origen (un simulacro mide, no enseña). Retos finales por
   rama técnica: cadenas de pasos de los nodos de la rama, de dificultad creciente (`vault/09-simulacros/`). *Por qué*:
   reutilizar los ejercicios ya verificados por dos métodos es más fiable que escribir exámenes nuevos sin verificar.

17. **2026-11-20 · Objetivos en `vault/_objetivos`** (listas ordenadas de ids, como notas sin id) y tiempo de estudio
   opcional en `study_time` (manual o temporizador), sumado en el heatmap. Los ids pendientes de escribir son avisos,
   no errores, para que un objetivo como «primero UNED» muestre los huecos reales. `vault:soluciones` compara los hitos
   marcados por `marcar-hitos.cjs` sin sus campos de código (los specs antiguos no los generan).

18. **2026-11-20 · Escalera con callouts `[!practico]`/`[!formal]`** (Obsidian los muestra igual) y conmutador «Todo /
   Práctico / Formal» con cookie (la página llega ya pintada). Glosario en `vault/_glosario/` con resaltado de la primera
   aparición (plugin rehype tras el saneado, solo en contenido del vault) y aviso de términos usados antes de
   explicarse (127 nodos hoy: es la lista de trabajo de las fases de contenido). Los términos se eligen sin otro
   significado común (el resaltado es global) y admiten `excepto` («fuerza bruta»).

19. **2026-11-20 · Dibujos como trazos vectoriales** (JSON validado: colores de una paleta fija, puntos recortados al
   lienzo) y SVG generado en el servidor solo con números: no se guarda ni se inserta SVG escrito por el usuario. Se
   exportan a Obsidian como `Libreta/dibujos/dibujo-N.svg` incrustados en la nota; el plugin 1.1 acepta `.svg` y los
   sustituye enteros (el 1.0 los salta sin romper nada). El trazo se sigue con escuchas en `window` y
   `getCoalescedEvents` (la captura del puntero se perdía al repintar y los movimientos rápidos se fundían en uno).
   Calculadora: el mismo CAS de los ejercicios, en el navegador, sin `eval`.
20. **2026-11-20 · `vault:soluciones` completo (180 nodos, con Docker)** encontró 2 enunciados de la v1 estropeados por
   una versión antigua de `ex-inject` que interpretaba `

- Ninguna todavía. (Las ⛔ de la fase 1 se preguntarán al llegar a ellas.)

## 8. Reportes «creo que esto está mal» pendientes

- Ninguno (resumen con `DATABASE_PATH=<copia de la base> npm run -s reportes`; página `/reportes`).

## 9. Registro de sesiones (una línea por sesión, la más reciente arriba)

| Fecha | Qué se hizo | Commit |
| --- | --- | --- |
| 2026-11-20 | Fase 8C: comodidad de estudio: temporizador Pomodoro flotante (Alt+P) que anota cada bloque terminado en el nodo, modo concentración (f/Esc), atajos con ayuda (?), hoja de ejercicios imprimible por nodo (sin soluciones, con espacio para el desarrollo). Fin de la PARTE 1 (plataforma). | `v2: fase 8C completada` |
| 2026-11-20 | Fase 8B: lienzo de dibujo en la Libreta (lápiz con presión, borrador de trazos, 6 colores, 4 grosores, deshacer/rehacer con Ctrl+Z/Ctrl+Y, cuadrícula), guardado vectorial y exportación a Obsidian como SVG (plugin 1.1); calculadora científica flotante en todas las páginas (Alt+C, grados/radianes, Ans, historial) con el CAS propio; arreglados 2 enunciados de la v1 | `v2: fase 8B completada` |
| 2026-11-20 | Fase 8A: explicación en escalera (callouts práctico/formal con títulos propios y conmutador recordado), glosario por área (58 términos en 7 notas) resaltado en el texto con explicación al pasar el ratón, /glosario con búsqueda, aviso de tecnicismos usados antes de explicarse, documentado en PEDAGOGIA y AMPLIAR; ejemplo en mat-proporcionalidad-porcentajes (y corregida una fuga en su banco de repaso) | `v2: fase 8A completada` |
| 2026-11-20 | Fase 8: objetivos recomendados en vault/_objetivos (6: acceso a la universidad, primero UNED con el plan oficial 2026-27, junior de sistemas, analista SOC 1, junior de IA, junior de robótica) con avance, semanas al ritmo elegido, ritmo necesario para una fecha y siguiente nodo, en /objetivos y en Inicio; tiempo de estudio opcional por nodo sumado en el heatmap; cómo crecer hasta el grado completo (AMPLIAR §3b); vault:soluciones compara los hitos marcados sin sus campos de código | `v2: fase 8 completada` |
| 2026-11-20 | Fase 7: vault:check ampliado (renderiza cada variante, opción y banco; variantes repetidas, datos sin rellenar, huellas por tipo; avisos de fuentes sin capítulo o sección), vault:soluciones (doble comprobación de cada spec, vault sincronizado con el spec, variantes degeneradas: 6 corregidas), vault:cobertura (docs/contenido/cobertura.md); arreglado un wikilink falso en ia-pytorch | `v2: fase 7 completada` |
| 2026-11-20 | Fase 6: simulacros y retos (kind: examen): items referenciados con variantes, cronómetro con entrega automática, guardado automático, modo papel, desarrollos con rúbrica tras entregar, retos encadenados, historial con mejor y media; 5 simulacros (ESO, Bachillerato mates y física, primero de grado mates, física de grado) y 5 retos finales por rama técnica | `v2: fase 6 completada` |
| 2026-11-20 | Fase 5: prueba de nivel adaptativa por área (búsqueda binaria de la frontera en el orden de estudio, 2-3 preguntas por sonda, «No lo sé»), marcas «dominado por diagnóstico» que desbloquean sin completar y se quitan por nodo o área, /diagnostico con resultado y nodo por el que empezar | `v2: fase 5 completada` |
| 2026-11-20 | Fase 4: tipo «código» con runner local (prueba.sh generado con las entradas del vault; Exodus solo guarda la huella del código), 132 hitos de 20 proyectos integrados (harness + stage), 3 ejercicios nuevos verificados contra referencias reales (bash+awk, Python en Docker): resumen de notas, gradiente logístico estable con gradient check, Verlet con deriva de energía | `v2: fase 4 completada` |
| 2026-11-20 | Fase 3: tipo «desarrollo» (respuesta Markdown/LaTeX/código o en papel; solución modelo y rúbrica selladas que solo se muestran tras entregar; autopuntuación por criterios, 60 % para resolver; cuenta para dominio, repaso y diario de errores; exportación a Obsidian solo tras puntuarse); 4 desarrollos (cálculo, cinemática, inducción, informe de incidente) | `v2: fase 3 completada` |
| 2026-11-20 | Fase 2: diario de errores (etiquetas y nota tras cada fallo, /errores con patrones, consejo y evolución), repaso ordenado por fallos recientes ponderados por tipo e intervalos frenados tras fallos de concepto, práctica intercalada de nodos dominados con filtro por área | `v2: fase 2 completada` |
| 2026-11-20 | Fase 1: tipos de ejercicio (CAS en JS, unidades, matrices, opción, flag), variantes, banco de repaso, intentos con variante y tiempo, reportes y `/reportes`, vista previa, 9 nodos convertidos, e2e con Playwright | `v2: fase 1 completada` |
| 2026-11-15 | Seguridad en v1: motor MathJax aparte para contenido de usuario (PR #210), fusionado en `v2` | merge de `main` |
| 2026-11-15 | Urgente en v1: la instancia se quedaba sin memoria (fuga de MathJax) y los nodos pesaban 2,4 MB. PR #209 en `main`, fusionado en `v2` | merge de `main` |
| 2026-11-15 | Paso 0: rama `v2`, `docs/ROADMAP_V2.md`, `STATUS.md` nuevo, `docs/HISTORIAL_V1.md`, `scripts/dev/`, `CLAUDE.md` | `v2: fase 0 completada` |
` como patrón de reemplazo (`prog-powershell-batch`,
   `prog-unix-texto`); reinyectados (respuestas iguales, progreso intacto).

21. **2026-11-20 · Fase 8C: qué funciones de comodidad.** Elegidas: (1) temporizador Pomodoro flotante que anota el
   tiempo en el nodo donde estás (alimenta el heatmap y el ritmo de los objetivos); (2) modo concentración en el nodo;
   (3) hoja de ejercicios imprimible por nodo (practicar en papel, como el examen de la UNED); (4) atajos de teclado con
   ayuda en «?». Descartadas aquí porque las cubre la tarea en cola `docs/APRENDIZAJE.md` (priming, modo estudio con
   bloques y reconstrucción, tarjetas de datos, quiz, socrático): no duplicar; esa tarea reutilizará el temporizador.

## 7. Preguntas abiertas

- Ninguna todavía. (Las ⛔ de la fase 1 se preguntarán al llegar a ellas.)

## 8. Reportes «creo que esto está mal» pendientes

- Ninguno (resumen con `DATABASE_PATH=<copia de la base> npm run -s reportes`; página `/reportes`).

## 9. Registro de sesiones (una línea por sesión, la más reciente arriba)

| Fecha | Qué se hizo | Commit |
| --- | --- | --- |
| 2026-11-20 | Fase 8A: explicación en escalera (callouts práctico/formal con títulos propios y conmutador recordado), glosario por área (58 términos en 7 notas) resaltado en el texto con explicación al pasar el ratón, /glosario con búsqueda, aviso de tecnicismos usados antes de explicarse, documentado en PEDAGOGIA y AMPLIAR; ejemplo en mat-proporcionalidad-porcentajes (y corregida una fuga en su banco de repaso) | `v2: fase 8A completada` |
| 2026-11-20 | Fase 8: objetivos recomendados en vault/_objetivos (6: acceso a la universidad, primero UNED con el plan oficial 2026-27, junior de sistemas, analista SOC 1, junior de IA, junior de robótica) con avance, semanas al ritmo elegido, ritmo necesario para una fecha y siguiente nodo, en /objetivos y en Inicio; tiempo de estudio opcional por nodo sumado en el heatmap; cómo crecer hasta el grado completo (AMPLIAR §3b); vault:soluciones compara los hitos marcados sin sus campos de código | `v2: fase 8 completada` |
| 2026-11-20 | Fase 7: vault:check ampliado (renderiza cada variante, opción y banco; variantes repetidas, datos sin rellenar, huellas por tipo; avisos de fuentes sin capítulo o sección), vault:soluciones (doble comprobación de cada spec, vault sincronizado con el spec, variantes degeneradas: 6 corregidas), vault:cobertura (docs/contenido/cobertura.md); arreglado un wikilink falso en ia-pytorch | `v2: fase 7 completada` |
| 2026-11-20 | Fase 6: simulacros y retos (kind: examen): items referenciados con variantes, cronómetro con entrega automática, guardado automático, modo papel, desarrollos con rúbrica tras entregar, retos encadenados, historial con mejor y media; 5 simulacros (ESO, Bachillerato mates y física, primero de grado mates, física de grado) y 5 retos finales por rama técnica | `v2: fase 6 completada` |
| 2026-11-20 | Fase 5: prueba de nivel adaptativa por área (búsqueda binaria de la frontera en el orden de estudio, 2-3 preguntas por sonda, «No lo sé»), marcas «dominado por diagnóstico» que desbloquean sin completar y se quitan por nodo o área, /diagnostico con resultado y nodo por el que empezar | `v2: fase 5 completada` |
| 2026-11-20 | Fase 4: tipo «código» con runner local (prueba.sh generado con las entradas del vault; Exodus solo guarda la huella del código), 132 hitos de 20 proyectos integrados (harness + stage), 3 ejercicios nuevos verificados contra referencias reales (bash+awk, Python en Docker): resumen de notas, gradiente logístico estable con gradient check, Verlet con deriva de energía | `v2: fase 4 completada` |
| 2026-11-20 | Fase 3: tipo «desarrollo» (respuesta Markdown/LaTeX/código o en papel; solución modelo y rúbrica selladas que solo se muestran tras entregar; autopuntuación por criterios, 60 % para resolver; cuenta para dominio, repaso y diario de errores; exportación a Obsidian solo tras puntuarse); 4 desarrollos (cálculo, cinemática, inducción, informe de incidente) | `v2: fase 3 completada` |
| 2026-11-20 | Fase 2: diario de errores (etiquetas y nota tras cada fallo, /errores con patrones, consejo y evolución), repaso ordenado por fallos recientes ponderados por tipo e intervalos frenados tras fallos de concepto, práctica intercalada de nodos dominados con filtro por área | `v2: fase 2 completada` |
| 2026-11-20 | Fase 1: tipos de ejercicio (CAS en JS, unidades, matrices, opción, flag), variantes, banco de repaso, intentos con variante y tiempo, reportes y `/reportes`, vista previa, 9 nodos convertidos, e2e con Playwright | `v2: fase 1 completada` |
| 2026-11-15 | Seguridad en v1: motor MathJax aparte para contenido de usuario (PR #210), fusionado en `v2` | merge de `main` |
| 2026-11-15 | Urgente en v1: la instancia se quedaba sin memoria (fuga de MathJax) y los nodos pesaban 2,4 MB. PR #209 en `main`, fusionado en `v2` | merge de `main` |
| 2026-11-15 | Paso 0: rama `v2`, `docs/ROADMAP_V2.md`, `STATUS.md` nuevo, `docs/HISTORIAL_V1.md`, `scripts/dev/`, `CLAUDE.md` | `v2: fase 0 completada` |
