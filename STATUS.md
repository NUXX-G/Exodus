# STATUS — Exodus

Última actualización: 2026-11-12 (sesión: panel, ejercicios, troncal N0 de matemáticas y computación)

**Documento de traspaso.** Quien retome el proyecto (persona o agente, sin contexto previo) lee esto
primero, luego `CLAUDE.md`, `docs/PEDAGOGIA.md` y `docs/CURRICULO.md`. Con eso puede continuar solo.

## 1. La misión (lo que el usuario exige, sin rebajarlo)

- Llevar a una persona **desde un nivel ultrabásico (1º de ESO) hasta un nivel de máster o superior, un
  experto real**, en cada rama, y que pueda competir con quien tiene un máster o con buenos cursos
  universitarios. Aplicable al trabajo, al día a día y a cualquier situación.
- **El troncal es la primera escalera** (N0 → N3, cimientos de todas las áreas, con la misma profundidad
  de principio a fin). Solo después se ramifica (N4 → N6). No basta un nodo por tema: hacen falta muchos
  nodos pequeños y encadenados, con ejercicios graduados y retos de verdad.
- **Rigor máximo.** Todo contenido, ejercicio y reto contrastado por varias fuentes fiables; todo resultado
  numérico recalculado por un segundo método; citas verificadas en la web (nunca de memoria).
- **Prohibida la IA durante el estudio**: pistas graduales de 3 niveles, sin chat.
- **Trabajo autónomo**: sin pedir confirmaciones; el usuario autorizó git, GitHub, PR, merges y CI en
  `NUXX-G/Exodus`. Un PR por unidad de trabajo, fusionado con el CI en verde. Mensajes al usuario: los
  mínimos; lo que importa queda aquí y en el repositorio.
- El usuario dijo que no probará nada hasta que haya un producto real funcionando: la verificación
  (build, navegador, Docker, CI) la hace el agente.

## 2. Estado en una línea

Plataforma funcional (árbol, panel, temario, búsqueda, flags, pistas, **ejercicios autocorregidos con dominio del 80 % y
repaso espaciado**, heatmap, cuenta, Docker, CI), probada de extremo a extremo en navegador contra la imagen Docker.
Contenido: **24 nodos de la nueva escalera del troncal** (con 8 a 16 ejercicios cada uno, verificados por doble método) y
**27 nodos troncales comprimidos** anteriores, pendientes de reubicar y desdoblar. Escalera nueva hecha: `tro-aprender-a-aprender`,
matemáticas N0 completas (6 nodos), `prog-pensamiento-computacional` y `prog-python-fundamentos`.

## 3. Qué hacer ahora, por orden

1. **Seguir escribiendo el troncal** en el orden de `docs/CURRICULO.md` (los ✅ ya están hechos). Hechos N0 y N1 de matemáticas
   (salvo desdoblar `mat-logica-demostraciones`), de física y de electricidad, y los dos nodos iniciales de programación. Siguen:
   `mat-logica-demostraciones` (reescribir como N1 con demostraciones guiadas), `prog-estructuras-datos`, `prog-terminal-linux-git`,
   y el **N2**: `mat-calculo-1`, `mat-calculo-2`, `mat-algebra-lineal` (desdoblar), `mat-matematica-discreta`, `prog-algoritmos`,
   `fis-mecanica-newtoniana`, `fis-electricidad-magnetismo-1`, `ing-circuitos-dc-ac`, `sys-c-memoria` (desdoblar), `prog-poo-diseno`. Cada nodo con la plantilla de `docs/PEDAGOGIA.md`, ≥ 8 ejercicios (lo normal: 14 a 16), 3 niveles.
2. **Reubicar los 27 nodos existentes** en la escalera: cambiar `trunk_level` y `prerequisites`, y desdoblarlos donde falte
   profundidad. `nodo-ejemplo` (raíz huérfana, «Enteros en máquina y aritmética modular») debe desaparecer; su reto pasa a un nodo
   de teoría de números. Los nodos nuevos de N0 no dependen de él.
3. Troncal N2 y N3, luego las ramas (N4 → N6) por prerrequisitos.
4. Plataforma, cuando haga falta: cambio de contraseña y cierre de otras sesiones; tests de `progress.ts` y `auth.ts`
   (`server-only` impide importarlos en `tsx --test`, habrá que aislarlo); perfil `https` probado en un VPS real; el
   componente del árbol (React Flow) no respondía a clics en `npm run dev` según el usuario (no reproducido).
5. Revisar la bibliografía de los 27 nodos antiguos (se escribió de memoria) contra la web. Los 9 nodos nuevos llevan
   referencias verificadas en la web o citadas solo por libro/capítulo sin número.

### Reubicación de los nodos antiguos (HECHA el 2026-11-12)
Se borró `nodo-ejemplo` (raíz huérfana; su reto de exponenciación modular con exponente de 127 bits queda en la historia de git
y puede reaprovecharse en el futuro nodo de teoría de números) y se reescribieron los prerrequisitos de los 27 nodos antiguos para
enlazarlos con la escalera nueva. `trunk_level` pasa a ser la **profundidad** en el grafo de prerrequisitos (0 sin prerrequisitos);
se recalcula con `npm run vault:relevel` (`-- --dry` solo muestra los cambios). Tras añadir o enlazar nodos, ejecutarlo.
Los nodos antiguos siguen siendo el esqueleto comprimido: hay que **desdoblarlos y ampliarlos** en la escalera (ver CURRICULO).

## 4. Cómo escribir un nodo (formato actual)

Frontmatter (`vault/<carpeta-del-area>/<id>.md`):

```yaml
---
id: mat-numeros-aritmetica      # kebab-case, único
title: "Números y aritmética"
area: matematicas               # una clave de src/lib/areas.ts
trunk_level: 0                  # N0..N6 (ver PEDAGOGIA.md)
prerequisites: [tro-aprender-a-aprender]
academic_sources:               # al menos dos fuentes independientes, verificadas
  - "..."
ctf_flag: "sha256:..."          # opcional: reto integrador (npm run vault:flag -- "EXODUS{...}")
hints: ["concepto", "herramienta/comando", "documentación oficial"]   # exactamente 3 si hay flag
exercises:                      # opcional pero obligatorio en la escalera nueva: mínimo 5
  - id: suma-fracciones
    tier: 1                     # 1 a completar, 2 problema, 3 difícil
    prompt: |
      Enunciado en Markdown con LaTeX. Indica el formato de la respuesta (entero, fracción irreducible a/b...).
    answers: ["sha256:..."]     # npm run vault:ex -- "3/4" "0.75"
---
```

Reglas:

- **Dominio**: el nodo se completa al resolver el **80 %** de sus ejercicios (`MASTERY_FRACTION`). Sin
  `ctf_flag`, el nodo se completa al alcanzar el dominio. Con `ctf_flag`, la flag integradora solo se
  acepta tras el dominio.
- **Repaso espaciado**: cada ejercicio resuelto entra en `/repaso` a 1, 3, 7, 16, 35 y 70 días; fallar
  vuelve a mañana (`src/lib/exercises.ts`).
- **Respuestas**: se normalizan (minúsculas, sin espacios, coma decimal, sin «+» inicial). Pide formatos
  únicos (entero, fracción irreducible, expresión canónica). Listas: separadas por `;`. El hash se
  calcula con `npm run vault:ex -- "respuesta"` y admite varias formas equivalentes.
- **Cada ejercicio con un solo valor correcto y verificable por un segundo método.** Guarda el script de
  cálculo en `.soluciones/` (ignorada por git) y comprueba allí cada respuesta.
- Un nodo con ejercicios necesita **al menos 5** (lo valida `vault:check`).
- Plantilla de contenido y criterios de calidad: `docs/PEDAGOGIA.md`.

**Flujo de trabajo por nodo (el que se ha seguido):**

1. Escribir `.soluciones/<id>.spec.mjs` (no versionado): calcula cada respuesta por **dos métodos** (en los nodos de
   programación, la respuesta es la salida de Python 3.12 ejecutado en Docker: `docker run --rm -v <dir>:/w -w /w python:3.12-slim python p.py`,
   contrastada con una implementación en JavaScript) y exporta `[{ id, tier, prompt, answers: [...] }]`. En `String.raw`,
   `\\\`` escribe una comilla invertida. Las listas se piden separadas por `;`.
2. Escribir el nodo con `exercises: __EJERCICIOS__` en el frontmatter y ejecutar
   `npx tsx scripts/ex-inject.ts vault/<ruta>.md .soluciones/<id>.spec.mjs`.
3. Validar los fragmentos de código del texto ejecutándolos (los ejemplos de Python se probaron con `assert` en Docker; así se
   cazó un resultado erróneo en el contador de palabras).
4. `npm run vault:check` y `npm test`; commit; PR; esperar el CI; fusionar.

Verificación antes de cada PR: `npm run vault:check`, `npm test`, `npx tsc --noEmit`. El CI repite todo
y construye la imagen Docker.

## 5. Entorno y trampas conocidas (Windows 11, Git Bash y PowerShell)

- **Servidor de desarrollo**: `npm run dev`. Si el 3000 está ocupado arranca en el 3001. Next **no permite
  dos servidores de desarrollo en la misma carpeta**. El código de configuración de la cuenta se imprime
  en la terminal del servidor (`[exodus] Código de configuración: ...`); la cuenta del usuario ya está
  creada en `database/exodus.db`.
- **Probar la interfaz sin tocar la cuenta del usuario**: `docker build -f docker/Dockerfile -t exodus-e2e .` y
  `docker run -d --name exodus-e2e -p 127.0.0.1:3299:3000 -v <repo>/vault:/vault:ro -v <dirtemporal>:/data exodus-e2e`; el código de
  configuración sale en `docker logs`. Se maneja con el navegador de Playwright (`mcp__playwright__*`). Un worktree con `node_modules`
  enlazado **no** funciona con `next dev` (Turbopack no sigue el enlace).
- **Python no está instalado.** Usar Node (`node script.cjs`) para scripts de apoyo, y la imagen Docker
  `gcc:14` (`MSYS_NO_PATHCONV=1 docker run --rm -v <ruta>:/w -w /w gcc:14 ...`) para compilar C.
- **Heredocs largos con comillas rompen la shell** (`unexpected EOF`). Escribir los parches y los
  contenidos con la herramienta de archivos y ejecutarlos después, en lugar de `cat <<EOF`.
- **Saltos de línea CRLF** en los `.tsx`/`.ts` del repo: al parchear con scripts, leer con
  `split("\r\n").join("\n")` antes de buscar texto.
- `sleep` encadenado está bloqueado en la herramienta Bash: esperar al CI con
  `until [ -z "$(gh pr checks N | grep pending)" ]; do sleep 6; done`.
- **Filtro de seguridad**: una sesión fue cortada al preparar contenido de explotación binaria. Tratar
  ese tema como análisis y defensa (formato ELF, mitigaciones, auditoría); no construir exploits.
- Al fusionar PR: `gh pr merge N --merge --delete-branch`, y apuntar cada PR a `main` (sin apilar).
- **Tablas Markdown y fórmulas**: un `|` dentro de `$...# STATUS — Exodus

Última actualización: 2026-11-12 (sesión: panel, ejercicios, troncal N0 de matemáticas y computación)

**Documento de traspaso.** Quien retome el proyecto (persona o agente, sin contexto previo) lee esto
primero, luego `CLAUDE.md`, `docs/PEDAGOGIA.md` y `docs/CURRICULO.md`. Con eso puede continuar solo.

## 1. La misión (lo que el usuario exige, sin rebajarlo)

- Llevar a una persona **desde un nivel ultrabásico (1º de ESO) hasta un nivel de máster o superior, un
  experto real**, en cada rama, y que pueda competir con quien tiene un máster o con buenos cursos
  universitarios. Aplicable al trabajo, al día a día y a cualquier situación.
- **El troncal es la primera escalera** (N0 → N3, cimientos de todas las áreas, con la misma profundidad
  de principio a fin). Solo después se ramifica (N4 → N6). No basta un nodo por tema: hacen falta muchos
  nodos pequeños y encadenados, con ejercicios graduados y retos de verdad.
- **Rigor máximo.** Todo contenido, ejercicio y reto contrastado por varias fuentes fiables; todo resultado
  numérico recalculado por un segundo método; citas verificadas en la web (nunca de memoria).
- **Prohibida la IA durante el estudio**: pistas graduales de 3 niveles, sin chat.
- **Trabajo autónomo**: sin pedir confirmaciones; el usuario autorizó git, GitHub, PR, merges y CI en
  `NUXX-G/Exodus`. Un PR por unidad de trabajo, fusionado con el CI en verde. Mensajes al usuario: los
  mínimos; lo que importa queda aquí y en el repositorio.
- El usuario dijo que no probará nada hasta que haya un producto real funcionando: la verificación
  (build, navegador, Docker, CI) la hace el agente.

## 2. Estado en una línea

Plataforma funcional (árbol, panel, temario, búsqueda, flags, pistas, **ejercicios autocorregidos con dominio del 80 % y
repaso espaciado**, heatmap, cuenta, Docker, CI), probada de extremo a extremo en navegador contra la imagen Docker.
Contenido: **22 nodos de la nueva escalera del troncal** (con 8 a 16 ejercicios cada uno, verificados por doble método) y
**27 nodos troncales comprimidos** anteriores, pendientes de reubicar y desdoblar. Escalera nueva hecha: `tro-aprender-a-aprender`,
matemáticas N0 completas (6 nodos), `prog-pensamiento-computacional` y `prog-python-fundamentos`.

## 3. Qué hacer ahora, por orden

1. **Seguir escribiendo el troncal** en el orden de `docs/CURRICULO.md` (los ✅ ya están hechos). Hechos N0 y N1 de matemáticas
   (salvo desdoblar `mat-logica-demostraciones`), de física y de electricidad, y los dos nodos iniciales de programación. Siguen:
   `mat-logica-demostraciones` (reescribir como N1 con demostraciones guiadas), `prog-estructuras-datos`, `prog-terminal-linux-git`,
   y el **N2**: `mat-calculo-1`, `mat-calculo-2`, `mat-algebra-lineal` (desdoblar), `mat-matematica-discreta`, `prog-algoritmos`,
   `fis-mecanica-newtoniana`, `fis-electricidad-magnetismo-1`, `ing-circuitos-dc-ac`, `sys-c-memoria` (desdoblar), `prog-poo-diseno`. Cada nodo con la plantilla de `docs/PEDAGOGIA.md`, ≥ 8 ejercicios (lo normal: 14 a 16), 3 niveles.
2. **Reubicar los 27 nodos existentes** en la escalera: cambiar `trunk_level` y `prerequisites`, y desdoblarlos donde falte
   profundidad. `nodo-ejemplo` (raíz huérfana, «Enteros en máquina y aritmética modular») debe desaparecer; su reto pasa a un nodo
   de teoría de números. Los nodos nuevos de N0 no dependen de él.
3. Troncal N2 y N3, luego las ramas (N4 → N6) por prerrequisitos.
4. Plataforma, cuando haga falta: cambio de contraseña y cierre de otras sesiones; tests de `progress.ts` y `auth.ts`
   (`server-only` impide importarlos en `tsx --test`, habrá que aislarlo); perfil `https` probado en un VPS real; el
   componente del árbol (React Flow) no respondía a clics en `npm run dev` según el usuario (no reproducido).
5. Revisar la bibliografía de los 27 nodos antiguos (se escribió de memoria) contra la web. Los 9 nodos nuevos llevan
   referencias verificadas en la web o citadas solo por libro/capítulo sin número.

### Reubicación de los nodos antiguos (HECHA el 2026-11-12)
Se borró `nodo-ejemplo` (raíz huérfana; su reto de exponenciación modular con exponente de 127 bits queda en la historia de git
y puede reaprovecharse en el futuro nodo de teoría de números) y se reescribieron los prerrequisitos de los 27 nodos antiguos para
enlazarlos con la escalera nueva. `trunk_level` pasa a ser la **profundidad** en el grafo de prerrequisitos (0 sin prerrequisitos);
se recalcula con `npm run vault:relevel` (`-- --dry` solo muestra los cambios). Tras añadir o enlazar nodos, ejecutarlo.
Los nodos antiguos siguen siendo el esqueleto comprimido: hay que **desdoblarlos y ampliarlos** en la escalera (ver CURRICULO).

## 4. Cómo escribir un nodo (formato actual)

Frontmatter (`vault/<carpeta-del-area>/<id>.md`):

```yaml
---
id: mat-numeros-aritmetica      # kebab-case, único
title: "Números y aritmética"
area: matematicas               # una clave de src/lib/areas.ts
trunk_level: 0                  # N0..N6 (ver PEDAGOGIA.md)
prerequisites: [tro-aprender-a-aprender]
academic_sources:               # al menos dos fuentes independientes, verificadas
  - "..."
ctf_flag: "sha256:..."          # opcional: reto integrador (npm run vault:flag -- "EXODUS{...}")
hints: ["concepto", "herramienta/comando", "documentación oficial"]   # exactamente 3 si hay flag
exercises:                      # opcional pero obligatorio en la escalera nueva: mínimo 5
  - id: suma-fracciones
    tier: 1                     # 1 a completar, 2 problema, 3 difícil
    prompt: |
      Enunciado en Markdown con LaTeX. Indica el formato de la respuesta (entero, fracción irreducible a/b...).
    answers: ["sha256:..."]     # npm run vault:ex -- "3/4" "0.75"
---
```

Reglas:

- **Dominio**: el nodo se completa al resolver el **80 %** de sus ejercicios (`MASTERY_FRACTION`). Sin
  `ctf_flag`, el nodo se completa al alcanzar el dominio. Con `ctf_flag`, la flag integradora solo se
  acepta tras el dominio.
- **Repaso espaciado**: cada ejercicio resuelto entra en `/repaso` a 1, 3, 7, 16, 35 y 70 días; fallar
  vuelve a mañana (`src/lib/exercises.ts`).
- **Respuestas**: se normalizan (minúsculas, sin espacios, coma decimal, sin «+» inicial). Pide formatos
  únicos (entero, fracción irreducible, expresión canónica). Listas: separadas por `;`. El hash se
  calcula con `npm run vault:ex -- "respuesta"` y admite varias formas equivalentes.
- **Cada ejercicio con un solo valor correcto y verificable por un segundo método.** Guarda el script de
  cálculo en `.soluciones/` (ignorada por git) y comprueba allí cada respuesta.
- Un nodo con ejercicios necesita **al menos 5** (lo valida `vault:check`).
- Plantilla de contenido y criterios de calidad: `docs/PEDAGOGIA.md`.

**Flujo de trabajo por nodo (el que se ha seguido):**

1. Escribir `.soluciones/<id>.spec.mjs` (no versionado): calcula cada respuesta por **dos métodos** (en los nodos de
   programación, la respuesta es la salida de Python 3.12 ejecutado en Docker: `docker run --rm -v <dir>:/w -w /w python:3.12-slim python p.py`,
   contrastada con una implementación en JavaScript) y exporta `[{ id, tier, prompt, answers: [...] }]`. En `String.raw`,
   `\\\`` escribe una comilla invertida. Las listas se piden separadas por `;`.
2. Escribir el nodo con `exercises: __EJERCICIOS__` en el frontmatter y ejecutar
   `npx tsx scripts/ex-inject.ts vault/<ruta>.md .soluciones/<id>.spec.mjs`.
3. Validar los fragmentos de código del texto ejecutándolos (los ejemplos de Python se probaron con `assert` en Docker; así se
   cazó un resultado erróneo en el contador de palabras).
4. `npm run vault:check` y `npm test`; commit; PR; esperar el CI; fusionar.

Verificación antes de cada PR: `npm run vault:check`, `npm test`, `npx tsc --noEmit`. El CI repite todo
y construye la imagen Docker.

## 5. Entorno y trampas conocidas (Windows 11, Git Bash y PowerShell)

- **Servidor de desarrollo**: `npm run dev`. Si el 3000 está ocupado arranca en el 3001. Next **no permite
  dos servidores de desarrollo en la misma carpeta**. El código de configuración de la cuenta se imprime
  en la terminal del servidor (`[exodus] Código de configuración: ...`); la cuenta del usuario ya está
  creada en `database/exodus.db`.
- **Probar la interfaz sin tocar la cuenta del usuario**: `docker build -f docker/Dockerfile -t exodus-e2e .` y
  `docker run -d --name exodus-e2e -p 127.0.0.1:3299:3000 -v <repo>/vault:/vault:ro -v <dirtemporal>:/data exodus-e2e`; el código de
  configuración sale en `docker logs`. Se maneja con el navegador de Playwright (`mcp__playwright__*`). Un worktree con `node_modules`
  enlazado **no** funciona con `next dev` (Turbopack no sigue el enlace).
- **Python no está instalado.** Usar Node (`node script.cjs`) para scripts de apoyo, y la imagen Docker
  `gcc:14` (`MSYS_NO_PATHCONV=1 docker run --rm -v <ruta>:/w -w /w gcc:14 ...`) para compilar C.
- **Heredocs largos con comillas rompen la shell** (`unexpected EOF`). Escribir los parches y los
  contenidos con la herramienta de archivos y ejecutarlos después, en lugar de `cat <<EOF`.
- **Saltos de línea CRLF** en los `.tsx`/`.ts` del repo: al parchear con scripts, leer con
  `split("\r\n").join("\n")` antes de buscar texto.
- `sleep` encadenado está bloqueado en la herramienta Bash: esperar al CI con
  `until [ -z "$(gh pr checks N | grep pending)" ]; do sleep 6; done`.
- **Filtro de seguridad**: una sesión fue cortada al preparar contenido de explotación binaria. Tratar
  ese tema como análisis y defensa (formato ELF, mitigaciones, auditoría); no construir exploits.
- Al fusionar PR: `gh pr merge N --merge --delete-branch`, y apuntar cada PR a `main` (sin apilar).
 en una celda rompe la tabla (usa `lvert xvert`, `mid`). `vault:check` lo detecta
  como «queda un $ sin procesar».
- **Wikilinks a nodos que aún no existen** rompen `vault:check`: enlaza solo a nodos que ya están en el vault y menciona los futuros
  en texto plano.
- **Laboratorio de pruebas en Docker**: imagen `exodus-lab` (Debian + git; `docker build` con un Dockerfile de 3 líneas: ver el spec de
  `prog-terminal-linux-git`) y `python:3.12-slim` para validar con ejecución real los ejemplos de código y los ejercicios.
- **Citas**: verificar con búsqueda web antes de escribirlas; si no se puede respaldar un dato (capítulo,
  página), se omite.

## 6. Plataforma: qué existe

- Next.js 16 (App Router, standalone) + TypeScript + Drizzle + SQLite. Migraciones `0000_init`,
  `0001_sessions`, `0002_ejercicios` (se aplican al arrancar).
- Rutas: `/` panel (siguiente paso, estudio restante, progreso por área, árbol, actividad, repaso
  pendiente), `/temario` (filtros por área y estado), `/buscar`, `/repaso`, `/nodo/<id>`,
  `/entrar`, `/configurar`, `/api/adjunto/<id>/<nombre>`, `/api/health`.
- Parser del vault `src/lib/vault.ts` (zod: frontmatter, ejercicios, adjuntos, ciclos); render
  `src/lib/markdown.ts` (GFM, LaTeX con MathJax en servidor, Shiki, wikilinks, callouts, saneado).
- Lógica de estudio `src/lib/study.ts` (siguiente nodo, tiempo estimado, búsqueda), progreso
  `src/lib/progress.ts`, ejercicios y repaso `src/lib/exercises.ts` (módulo puro con tests).
- Auth: una cuenta, scrypt, sesiones por cookie HttpOnly, limitador de intentos.
- Docker (`deploy.bat` / `deploy.sh`, puerto 3210), perfil `https` con Caddy, CI en GitHub Actions.

## 7. Contenido

### Escalera nueva del troncal (con ejercicios autocorregidos)

| Nivel | Nodo | Ejercicios |
|:---:|---|:---:|
| 0 | `tro-aprender-a-aprender` | 8 |
| 0 | `mat-numeros-naturales` | 16 |
| 0 | `mat-enteros-fracciones` | 16 |
| 0 | `mat-proporcionalidad-porcentajes` | 16 |
| 0 | `mat-algebra-basica` | 16 |
| 0 | `mat-geometria-basica` | 16 |
| 0 | `mat-funciones-basicas` (con estadística descriptiva) | 16 |
| 0 | `prog-pensamiento-computacional` | 14 |
| 1 | `prog-python-fundamentos` | 16 |
| 1 | `fis-medida-movimiento` | 16 |
| 1 | `fis-fuerzas-energia` | 15 |
| 1 | `fis-ondas-calor-fluidos` | 16 |
| 1 | `ing-electricidad-basica` | 16 |
| 1 | `prog-terminal-linux-git` (ejecutado en contenedor Debian real) | 16 |
| 2 | `prog-estructuras-datos` | 16 |
| 2 | `mat-calculo-1` | 16 |
| 2 | `mat-calculo-2` | 16 |
| 2 | `mat-algebra-lineal-1` | 16 |
| 3 | `sec-fundamentos` (hashes, HMAC y TOTP calculados con Python y Node; TOTP validado con el vector del RFC 6238) | 16 |
| 1 | `mat-algebra-secundaria` | 16 |
| 1 | `mat-trigonometria` | 16 |
| 1 | `mat-geometria-analitica` | 16 |
| 1 | `mat-combinatoria-probabilidad-basica` | 16 |

### Nodos troncales comprimidos anteriores (cada uno con un reto con flag)

| Nodo | Reto |
|---|---|
| `nodo-ejemplo` | Exponenciación modular con exponente de 127 bits |
| `mat-logica-demostraciones` | Tres conteos (recurrencia, inclusión-exclusión, particiones) |
| `sys-c-memoria` | Hash de la representación de un array de estructuras |
| `sec-redes-tcpip` | Disección de trama y checksums IP y TCP |
| `mat-algebra-lineal` | Determinante exacto, rango sobre 𝔽₂, potencia de matrices |
| `mat-analisis-real` | ζ(3) con cota de error y umbral de la serie armónica |
| `mat-estructuras-algebraicas` | Orden de un elemento, raíces primitivas, irreducibles |
| `ing-logica-digital` | Implicantes primos y estado de un LFSR |
| `sys-sistemas-operativos` | Fallos de página con FIFO, LRU y OPT |
| `sec-web` | Recuperar la clave de un JWT y falsificar un token |
| `mat-probabilidad` | Suma de dados, espera de un patrón y coincidencias, exactos |
| `fis-mecanica-clasica` | Periodo exacto del péndulo, ecuación de Kepler, modos normales |
| `ing-senales-sistemas` | Aliasing, energía de una convolución y pico de una DFT |
| `ing-arquitectura-computadores` | Fallos de caché en el producto de matrices |
| `sec-criptografia` | Fermat contra RSA, Pohlig-Hellman y conteo de puntos de una curva elíptica |
| `sys-ensamblador-x86-64` | Leer un hash y una recursión en System V AMD64 |
| `fis-electromagnetismo` | Potencial de una placa, espira hexagonal y Fresnel |
| `fis-termo-estadistica` | Sólidos de Einstein, Ising 4×4 y anomalía de Schottky |
| `fis-mecanica-cuantica` | Pozo finito, oscilaciones de Rabi y entropía de entrelazamiento |
| `rob-cinematica` | Ángulo de rotación, inversa de un brazo 3R y manipulabilidad |
| `rob-control` | Margen de fase, pico de la respuesta a escalón y LQR |
| `ia-aprendizaje-estadistico` | Regresión polinómica, LOOCV y regresión logística |
| `ing-circuitos` | Nodos exactos, RLC, Sallen-Key y diodo de Shockley |
| `ia-redes-profundas` | Gradiente exacto, Adam, atención y recuento de parámetros |
| `cua-computacion-cuantica` | Grover, orden y estimación de fase tipo Shor, CHSH |
| `sec-explotacion-binaria` | Auditoría de un ELF adjunto, entropía de ASLR y desbordamiento de enteros |
| `rob-microcontroladores` | PSC/ARR, BRR de la USART, vector de IRQ y CRC-32 |

Los scripts que calculan y contrastan estas flags están en `.soluciones/` (`nivel-*.mjs`,
`verificar.ts`, `flags.txt`), **solo en la máquina del usuario**; `npx tsx .soluciones/verificar.ts`
comprueba que cada flag valida contra el hash de su nodo.

## 8. Sin probar todavía

- El perfil `https` con un dominio real y `deploy.bat` ejecutado como tal.
- El usuario reportó que no podía hacer clic en los nodos del árbol (React Flow) en `npm run dev`; no se llegó a reproducir. El
  panel y el temario navegan con enlaces de servidor y no dependen de ese componente.
- Probado en navegador (imagen Docker, base temporal): creación de cuenta, panel, página de nodo con ejercicios, respuesta
  incorrecta y correcta, normalización (espacios), dominio del 80 % que completa el nodo, calendario de repaso (fallo a mañana,
  acierto a 3 días) y feedback del repaso.

## 9. Convenciones

- Commits en español, prefijos `feat` / `fix` / `chore` / `docs` / `content` / `test` / `ci`, con la
  línea `Co-Authored-By` que indique la sesión. Ramas por unidad de trabajo y PR con CI en verde; no se
  hace push directo a `main`.
- Formato de flag: `EXODUS{...}`. Nunca en claro en el repositorio.
- `database/exodus.db` y `.soluciones/` no se versionan.
