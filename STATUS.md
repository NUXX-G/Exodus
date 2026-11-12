# STATUS — Exodus

Última actualización: 2026-11-12 (sesión: panel, pedagogía, currículo, motor de ejercicios)

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

Plataforma funcional con árbol, panel, temario, búsqueda, flags, pistas, **ejercicios autocorregidos con
dominio del 80 % y repaso espaciado**, heatmap, cuenta con contraseña, Docker y CI. Contenido: **27 nodos
troncales comprimidos** (cada uno con teoría y un reto) que habrá que reubicar y desdoblar en la escalera
completa. La escalera N0 → N3 del troncal **está sin escribir**: es lo siguiente.

## 3. Qué hacer ahora, por orden

1. **Escribir el troncal N0 → N1** (ver `docs/CURRICULO.md`, secciones T-A a T-D): empezar por
   `tro-aprender-a-aprender`, `mat-numeros-aritmetica`, `mat-algebra-basica`, `mat-geometria-basica`,
   `mat-funciones-basicas`, `prog-pensamiento-computacional`, `prog-python-fundamentos`,
   `fis-medida-movimiento`. Cada uno con la **plantilla de nodo** de `docs/PEDAGOGIA.md` y ejercicios.
2. **Reubicar los 27 nodos existentes** en la escalera: cambiar `trunk_level` y `prerequisites`, y
   desdoblarlos donde falte profundidad. `nodo-ejemplo` (raíz huérfana) debe desaparecer; su reto de
   exponenciación modular pasa a un nodo de teoría de números. Ver «Reajuste de niveles» abajo.
3. Troncal N2 y N3, luego las ramas (N4 → N6) por prerrequisitos.
4. Plataforma, cuando haga falta: cambio de contraseña y cierre de otras sesiones; tests de
   `progress.ts` y `auth.ts` (necesitan base de datos temporal; `server-only` impide importarlos en
   `tsx --test`, habrá que aislarlo); perfil `https` probado en un VPS real.
5. Revisar la bibliografía de los 27 nodos existentes (se escribió de memoria) contra la web.

### Reajuste de niveles (pendiente)
Los 27 nodos actuales usan `trunk_level` 0 a 6 con otro criterio. En la escalera nueva: N0 a N3 es el
troncal y N4 a N6 son ramas. Cuando se escriban los nodos de N0 a N3, los existentes se desplazan
(p. ej. `mat-analisis-real` pasa a N3, `sec-criptografia` a N4). Hacerlo con un script que reescriba el
frontmatter y se ejecute una sola vez, y comprobar con `npm run vault:check`.

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

Verificación antes de cada PR: `npm run vault:check`, `npm test`, `npx tsc --noEmit`. El CI repite todo
y construye la imagen Docker.

## 5. Entorno y trampas conocidas (Windows 11, Git Bash y PowerShell)

- **Servidor de desarrollo**: `npm run dev`. Si el 3000 está ocupado arranca en el 3001. Next **no permite
  dos servidores de desarrollo en la misma carpeta**. El código de configuración de la cuenta se imprime
  en la terminal del servidor (`[exodus] Código de configuración: ...`); la cuenta del usuario ya está
  creada en `database/exodus.db`.
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

## 7. Contenido existente (27 nodos troncales comprimidos, cada uno con reto verificado)

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
- El flujo de ejercicios y repaso en el navegador con sesión real (se probó la lógica pura con tests;
  falta una pasada con la interfaz).
- El usuario reportó que no podía hacer clic en los nodos del árbol (React Flow) en `npm run dev`; no se
  llegó a reproducir. El temario y el panel navegan con enlaces de servidor y no dependen de ese componente.

## 9. Convenciones

- Commits en español, prefijos `feat` / `fix` / `chore` / `docs` / `content` / `test` / `ci`, con la
  línea `Co-Authored-By` que indique la sesión. Ramas por unidad de trabajo y PR con CI en verde; no se
  hace push directo a `main`.
- Formato de flag: `EXODUS{...}`. Nunca en claro en el repositorio.
- `database/exodus.db` y `.soluciones/` no se versionan.
