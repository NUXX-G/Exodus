# STATUS — Exodus

Última actualización: 2026-11-12 (sesión: escalera del troncal; lógica y demostración reescrita; callouts plegables)

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
Contenido: **35 nodos de la escalera del troncal** (8 a 17 ejercicios cada uno, verificados por doble método; cubren
matemáticas hasta cálculo 2, álgebra lineal I, matemática discreta y lógica y demostración, física hasta mecánica newtoniana, electricidad básica,
programación hasta algoritmos y fundamentos de seguridad) y **23 nodos comprimidos** anteriores (cada uno con un reto con
flag), ya enlazados a la escalera pero pendientes de desdoblar.

## 3. Qué hacer ahora, por orden

1. **Seguir escribiendo el troncal** en el orden de `docs/CURRICULO.md` (los ✅ ya están hechos). Faltan, entre otros:
      `sys-redes-sockets`, `mat-calculo-multivariable`, `mat-ecuaciones-diferenciales`, `mat-estadistica-inferencia`,
   `mat-analisis-numerico`, `mat-algebra-lineal-avanzada`, `ing-medidas-laboratorio`, `fis-ondas-optica`,
   `tro-razonamiento-cientifico`, `tro-lectura-tecnica`. Cada nodo con la plantilla de `docs/PEDAGOGIA.md`, ≥ 8 ejercicios
   (lo normal: 14 a 16) y 3 niveles de pistas si lleva flag.
2. **Ramas N4 → N6** por prerrequisitos (lista en `docs/CURRICULO.md`: topología, EDP, C++, Rust, ARM, forense y logs, PCB,
   PyTorch, Transformers, LLM locales…). Los nodos comprimidos antiguos se desdoblan en ellas.
3. Plataforma, cuando haga falta: cambio de contraseña y cierre de otras sesiones; tests de `progress.ts` y `auth.ts`
   (`server-only` impide importarlos en `tsx --test`, habrá que aislarlo); perfil `https` probado en un VPS real y
   `deploy.bat` ejecutado como tal.
4. Revisar la bibliografía de los 23 nodos antiguos (se escribió de memoria) contra la web. Los nodos de la escalera llevan
   referencias verificadas en la web o citadas solo por libro/capítulo sin número.
5. Tras añadir o enlazar nodos: `npm run vault:relevel`, `npm run vault:check`, `npm test`, `npx tsc --noEmit`.

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

**Ejemplos que se desvanecen**: tras cada ejemplo resuelto, un «Ahora tú» con huecos y la solución en un callout plegable
(`> [!tip]- Solución`, se renderiza como `<details>` cerrado; `[!tipo]+` empieza abierto). Modelo: `mat-logica-demostraciones`.

**Tablas de STATUS §7**: se regeneran desde el vault con un script de apoyo (cargar `src/lib/vault.ts` con `tsx`, ordenar por
`trunkLevel` e `id`, escalera = nodos con ejercicios). Los contadores de §2 se ajustan a mano.

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
 en una celda rompe la tabla (usa `\lvert x\rvert`, `mid`). `vault:check` lo detecta
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

### Escalera del troncal (con ejercicios autocorregidos)

`trunk_level` es la profundidad en el grafo de prerrequisitos (se recalcula con `npm run vault:relevel`).

| Profundidad | Nodo | Ejercicios |
|:---:|---|:---:|
| 0 | `mat-numeros-naturales` | 16 |
| 0 | `tro-aprender-a-aprender` | 8 |
| 1 | `mat-enteros-fracciones` | 16 |
| 1 | `prog-pensamiento-computacional` | 14 |
| 2 | `mat-algebra-basica` | 16 |
| 2 | `mat-proporcionalidad-porcentajes` | 16 |
| 2 | `prog-python-fundamentos` | 16 |
| 2 | `prog-terminal-linux-git` | 16 |
| 3 | `mat-geometria-basica` | 16 |
| 3 | `sys-c-fundamentos` | 17 |
| 4 | `mat-funciones-basicas` | 16 |
| 5 | `fis-medida-movimiento` | 16 |
| 5 | `mat-algebra-secundaria` | 16 |
| 6 | `fis-fuerzas-energia` | 16 |
| 6 | `mat-combinatoria-probabilidad-basica` | 16 |
| 6 | `mat-trigonometria` | 16 |
| 7 | `fis-ondas-calor-fluidos` | 16 |
| 7 | `ing-electricidad-basica` | 16 |
| 7 | `mat-geometria-analitica` | 16 |
| 7 | `mat-logica-demostraciones` | 17 |
| 7 | `mat-matematica-discreta` | 16 |
| 7 | `prog-estructuras-datos` | 16 |
| 7 | `sec-fundamentos` | 16 |
| 8 | `mat-algebra-lineal-1` | 16 |
| 8 | `mat-calculo-1` | 16 |
| 8 | `prog-poo-diseno` | 17 |
| 8 | `sys-bases-datos` | 17 |
| 8 | `sys-c-memoria` | 16 |
| 9 | `mat-calculo-2` | 16 |
| 9 | `prog-algoritmos` | 16 |
| 9 | `sys-procesos-planificacion` | 16 |
| 10 | `fis-mecanica-newtoniana` | 16 |
| 10 | `sys-sistemas-operativos` | 16 |
| 11 | `fis-electricidad-magnetismo-1` | 17 |
| 12 | `ing-circuitos-dc-ac` | 17 |

Notas de verificación: los nodos de programación se validaron ejecutando Python 3.12 real en Docker; `prog-terminal-linux-git` en un
contenedor Debian con git; `sec-fundamentos` con hashes/HMAC/TOTP calculados en Python y Node (TOTP contrastado con el vector del
RFC 6238); `fis-mecanica-newtoniana` compara RK4 con la solución analítica; `mat-matematica-discreta` y `prog-algoritmos`
usan fuerza bruta o BFS como segundo método. `mat-logica-demostraciones` (reescrito sobre el nodo comprimido, conserva su flag y la
comprueba en el spec) contrasta cada fórmula de conteo con enumeración exhaustiva y las tautologías con tablas completas.
`ing-circuitos-dc-ac` contrasta cada fasor con una simulación temporal RK4 del circuito, el análisis nodal con superposición y
Thévenin con vacío/cortocircuito; su código Python (Gauss-Jordan con fracciones y complejos) se ejecutó en Docker. `prog-poo-diseno`: cada ejercicio es un
programa cuya salida real (Python 3.12 en Docker, un solo contenedor para todos) se contrasta con una reimplementación en
JavaScript (incluida la linealización C3 del MRO); cada bloque ```python del texto se ejecuta por separado.
`sys-c-fundamentos`: cada ejercicio es un programa C compilado con GCC 14 (imagen `gcc:14`) en `-O0` con ASan y UBSan y en
`-O2`; ambas salidas deben coincidir entre sí y con JavaScript. Los bloques ```c del texto son programas completos con `assert`
y se compilan y ejecutan igual (script de apoyo: extraer cada bloque a un archivo y compilarlo en el contenedor; los bloques sin
`main` se tratan como fragmentos). `sys-c-memoria` (reescrito sobre el nodo comprimido, conserva su reto) usa el mismo método y
además recalcula la flag del reto en C y en JavaScript (disposición de la estructura calculada con las reglas de la ABI).
`sys-procesos-planificacion`: los programas con `fork`/`exec`/`pipe`/señales se ejecutan en `gcc:14` con la salida redirigida a
un archivo (búfer completo de stdio) y se contrastan con un modelo en JS; la planificación se simula en Python y en JS.
`sys-sistemas-operativos` (reescrito, conserva su reto): reemplazo de páginas simulado en C y en JS (la flag se recalcula),
banquero en Python y JS, hilos/enlaces/`mmap` ejecutados en `gcc:14`.
`sys-bases-datos`: el spec genera de forma determinista la base `vault/_adjuntos/sys-bases-datos/tienda.sql` (adjunto del nodo,
versionado) y cada respuesta sale de SQL real en SQLite (Python en Docker) y de un recorrido de los datos en JavaScript; la teoría
(cierres, claves, B-árboles) se calcula por fuerza bruta en Python y JS. Los adjuntos se muestran como «Archivos adjuntos».

### Nodos troncales comprimidos anteriores (cada uno con un reto con flag)

| Profundidad | Nodo |
|:---:|---|
| 8 | `ing-logica-digital` |
| 8 | `mat-estructuras-algebraicas` |
| 8 | `sec-redes-tcpip` |
| 9 | `ing-arquitectura-computadores` |
| 9 | `mat-algebra-lineal` |
| 9 | `sec-web` |
| 10 | `fis-mecanica-clasica` |
| 10 | `ing-senales-sistemas` |
| 10 | `mat-analisis-real` |
| 10 | `mat-probabilidad` |
| 10 | `sys-ensamblador-x86-64` |
| 11 | `fis-electromagnetismo` |
| 11 | `fis-mecanica-cuantica` |
| 11 | `fis-termo-estadistica` |
| 11 | `ia-aprendizaje-estadistico` |
| 11 | `rob-cinematica` |
| 11 | `rob-control` |
| 11 | `sec-criptografia` |
| 11 | `sec-explotacion-binaria` |
| 12 | `cua-computacion-cuantica` |
| 12 | `ia-redes-profundas` |
| 13 | `ing-circuitos` |
| 14 | `rob-microcontroladores` |

Los scripts que calculan y contrastan estas flags están en `.soluciones/` (`nivel-*.mjs`,
`verificar.ts`, `flags.txt`), **solo en la máquina del usuario**; `npx tsx .soluciones/verificar.ts`
comprueba que cada flag valida contra el hash de su nodo.

## 8. Sin probar todavía

- El perfil `https` con un dominio real y `deploy.bat` ejecutado como tal.
- **Resuelto (PR #29)**: el usuario no podía hacer clic en los nodos del árbol. Se reprodujo en el navegador (Playwright contra la imagen
  Docker): `.react-flow__pane` interceptaba los clics porque React Flow deja los nodos con `pointer-events: none` si no son
  arrastrables ni seleccionables. Corregido con CSS; el clic abre `/nodo/<id>`. Probado también el temario y el buscador con los 50 nodos.
- Probado en navegador (imagen Docker, base temporal): creación de cuenta, panel, página de nodo con ejercicios, respuesta
  incorrecta y correcta, normalización (espacios), dominio del 80 % que completa el nodo, calendario de repaso (fallo a mañana,
  acierto a 3 días) y feedback del repaso.

## 9. Convenciones

- Commits en español, prefijos `feat` / `fix` / `chore` / `docs` / `content` / `test` / `ci`, con la
  línea `Co-Authored-By` que indique la sesión. Ramas por unidad de trabajo y PR con CI en verde; no se
  hace push directo a `main`.
- Formato de flag: `EXODUS{...}`. Nunca en claro en el repositorio.
- `database/exodus.db` y `.soluciones/` no se versionan.
