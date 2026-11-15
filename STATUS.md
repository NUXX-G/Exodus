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
6. Antes de que se llene el contexto: termina la tarea en curso, actualiza §1 y el registro (§8), ejecuta
   `bash scripts/dev/guardar.sh "v2: fase N · <tarea>"` y di al usuario:
   **«Abre una sesión nueva y escribe: continúa con el roadmap»**.

## 1. Ahora mismo

- **Fase actual**: FASE 1 — Ejercicios verificados y parametrizados.
- **Tarea actual**: ninguna empezada. Primera: formato de los ejercicios (frontmatter o archivo hermano) y registro
  de tipos.
- **Siguiente paso concreto**: leer el esquema de `exercises` en `src/lib/vault.ts` y la corrección en
  `src/lib/exercises.ts`; decidir el formato y documentarlo en `docs/AMPLIAR.md`. La verificación simbólica tiene un
  ⛔: antes de implementarla, presentar al usuario la propuesta «servicio SymPy en docker-compose» frente a «CAS en JS»
  con pros y contras, y seguir con lo que no dependa de ella.
- **Bloqueos**: ninguno.

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

- Checks: `npm run vault:check`, `npm run typecheck`, `npm test`, `npm run build`. Tras tocar prerequisitos:
  `npm run vault:relevel`. Fugas de respuestas en el texto: `npm run vault:fugas -- <id>`.
- Probar en navegador: `npm run build`, luego `DATABASE_PATH=<db temporal> npx next start -p 3211`, y Playwright.
  **Nunca** con la base del usuario (`database/exodus.db`). Con `next dev`, los logs de `.playwright-mcp/` provocan
  bucles de recarga.
- **Python no está instalado**: scripts de apoyo en Node; para ejecutar Python, C, Rust… usar Docker
  (`python:3.12-slim`, `gcc:14`, etc.; con `MSYS_NO_PATHCONV=1` en Git Bash).
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

## 7. Preguntas abiertas

- Ninguna todavía. (Las ⛔ de la fase 1 se preguntarán al llegar a ellas.)

## 8. Reportes «creo que esto está mal» pendientes

- (La función llega en la fase 1; aquí irá el resumen por área.)

## 9. Registro de sesiones (una línea por sesión, la más reciente arriba)

| Fecha | Qué se hizo | Commit |
| --- | --- | --- |
| 2026-11-15 | Urgente en v1: la instancia se quedaba sin memoria (fuga de MathJax) y los nodos pesaban 2,4 MB. PR #209 en `main`, fusionado en `v2` | merge de `main` |
| 2026-11-15 | Paso 0: rama `v2`, `docs/ROADMAP_V2.md`, `STATUS.md` nuevo, `docs/HISTORIAL_V1.md`, `scripts/dev/`, `CLAUDE.md` | `v2: fase 0 completada` |
