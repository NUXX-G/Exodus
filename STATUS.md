# STATUS — Exodus

Última actualización: 2026-11-11

Documento de continuidad. Quien retome el proyecto (persona o agente) debe leer esto primero,
junto con `CLAUDE.md` y `README.md`.

## Estado en una línea

Plataforma completa y verificada (árbol, lectura, flags, pistas, heatmap, cuenta con contraseña,
Docker, CI). 10 de 27 nodos tienen teoría completa y reto: la raíz y los niveles 1 y 2 enteros.

## Ramas y pull requests

El trabajo va en PR apilados; **hay que fusionarlos en orden** (el agente no tiene permiso para
fusionar):

| PR | Rama | Base | Contenido |
|---|---|---|---|
| #1 | `ci/pipeline` | `main` | CI, tests, arreglo de la imagen Docker, filtros de seguridad del render |
| #2 | `feat/auth` | `ci/pipeline` | Cuenta única, sesiones, código de configuración, HTTPS con Caddy |
| #3 | `content/nivel-2` | `feat/auth` | Seis nodos de nivel 2 y este documento |

Al fusionar #1 borrando su rama, GitHub reapunta #2 a `main`, y lo mismo con #3.

## Completado

### Plataforma
- [x] Next.js 16 (App Router, salida standalone) + TypeScript + Drizzle + SQLite (`better-sqlite3`).
- [x] Esquema `database/schema.ts`, migraciones `0000_init` y `0001_sessions`. Se migra sola al arrancar.
- [x] Parser del vault `src/lib/vault.ts`: frontmatter validado con zod, ids duplicados,
      prerequisitos inexistentes y ciclos.
- [x] Render `src/lib/markdown.ts`: GFM, LaTeX con MathJax (SVG en servidor), Shiki, wikilinks y
      callouts de Obsidian. Saneado de HTML antes de MathJax y filtro de URLs después.
- [x] Árbol de habilidades: estados completado / disponible / bloqueado, lectura libre.
- [x] Validación de flags por SHA-256, límite de 10 fallos por minuto y nodo, registro de intentos.
- [x] Pistas graduales (concepto, herramienta o comando, documentación oficial), registradas.
- [x] Heatmap de 26 semanas y racha.
- [x] Autenticación: cuenta única creada en `/configurar` con un código de un solo uso que el
      servidor escribe en su log; scrypt; sesiones por cookie HttpOnly (solo el hash en la base de
      datos); limitador de intentos por cliente y global (`src/lib/rate-limit.ts`).
- [x] Sin chat de IA en ninguna parte de la plataforma.

### Infraestructura
- [x] `docker/Dockerfile` multi-etapa y `docker/docker-compose.yml` (vault en solo lectura,
      `database/` montado, contenedor de solo lectura y sin capacidades). Puerto por defecto 3210.
- [x] Perfil `https` con Caddy y Let's Encrypt (`EXODUS_DOMAIN=... ./deploy.sh`).
- [x] `deploy.sh` y `deploy.bat`.
- [x] CI en GitHub Actions: tipos, `vault:check`, tests, build, y arranque de la imagen Docker.

### Contenido con teoría completa y reto verificado
| Nivel | Nodo | Reto |
|:---:|---|---|
| 0 | `nodo-ejemplo` | Exponenciación modular con exponente de 127 bits |
| 1 | `mat-logica-demostraciones` | Tres conteos (recurrencia, inclusión-exclusión, particiones) |
| 1 | `sys-c-memoria` | Hash de la representación de un array de estructuras |
| 1 | `sec-redes-tcpip` | Disección de trama y checksums IP y TCP |
| 2 | `mat-algebra-lineal` | Determinante exacto, rango sobre 𝔽₂, potencia de matrices |
| 2 | `mat-analisis-real` | ζ(3) con cota de error y umbral de la serie armónica |
| 2 | `mat-estructuras-algebraicas` | Orden de un elemento, raíces primitivas, irreducibles |
| 2 | `ing-logica-digital` | Implicantes primos y estado de un LFSR |
| 2 | `sys-sistemas-operativos` | Fallos de página con FIFO, LRU y OPT |
| 2 | `sec-web` | Recuperar la clave de un JWT y falsificar un token |

## Verificado y no verificado

- **Navegador, build de producción**: flag incorrecta, pista, flag correcta, desbloqueo de
  dependientes; crear cuenta con código incorrecto y correcto, cerrar sesión, contraseña
  incorrecta, acceso, redirecciones sin sesión.
- **Docker**: imagen construida y arrancada en local; escribe `database/exodus.db` en el host;
  creación de cuenta probada contra el contenedor. CI lo repite en cada push.
- **Flags**: las diez se calculan con scripts que contrastan cada resultado por un segundo
  método. Los dos retos en C (`nodo-ejemplo`, `sys-c-memoria`) se compilaron además con GCC 14.
  Los scripts están en `.soluciones/` (ignorada por git, solo en la máquina de desarrollo).
- **Sin probar**: el perfil `https` con un dominio real (solo `caddy validate`), y `deploy.bat`
  ejecutado como tal (se probaron sus comandos por separado).
- **Bibliografía citada de memoria**: revisar ediciones, años y números de sección.

## Pendiente, por orden

### 1. Contenido: nodos base sin teoría ni reto

Nivel 3
- [ ] `mat-probabilidad`
- [ ] `fis-mecanica-clasica`
- [ ] `ing-senales-sistemas`
- [ ] `ing-arquitectura-computadores`

Nivel 4
- [ ] `fis-electromagnetismo`
- [ ] `fis-termo-estadistica`
- [ ] `fis-mecanica-cuantica`
- [ ] `rob-control`
- [ ] `rob-cinematica`
- [ ] `sys-ensamblador-x86-64`
- [ ] `sec-criptografia`
- [ ] `ia-aprendizaje-estadistico`

Nivel 5 y 6
- [ ] `ing-circuitos`
- [ ] `sec-explotacion-binaria`
- [ ] `ia-redes-profundas`
- [ ] `cua-computacion-cuantica`
- [ ] `rob-microcontroladores`

### 2. Áreas del prompt maestro sin nodo todavía
Topología, ecuaciones diferenciales, análisis numérico, algoritmos (CLRS), C++, Rust, ARM,
sockets, forense y logs, diseño de PCB, redes neuronales desde cero en Python, PyTorch,
Transformers, LLMs locales (Ollama / vLLM).

### 3. Plataforma
- [ ] Retos con artefactos descargables (binarios, pcaps): hoy todo reto debe caber en el
      Markdown. Imprescindible para `sec-explotacion-binaria` y forense.
- [ ] Cambio de contraseña y cierre de otras sesiones desde la interfaz.
- [ ] Tests de `progress.ts` y `auth.ts` (necesitan una base de datos temporal).
- [ ] Probar el perfil `https` en un VPS con dominio.

## Cómo añadir un nodo con reto

1. Sustituir el cuerpo del nodo base por teoría desde primeros principios: definiciones, teoremas
   con demostración, LaTeX y código funcional. Mantener `id`, `area` y `prerequisites`.
2. Diseñar un reto cuya flag se **calcule** (no se adivine) y cuyo espacio de respuestas sea
   grande. Escribir en `.soluciones/` un script que la genere y la contraste por un segundo
   método. Incluir valores de control en el enunciado, también verificados por el script.
3. `npm run vault:flag -- "EXODUS{...}"` y pegar el `ctf_flag: "sha256:..."` resultante.
4. Tres pistas en este orden: concepto, herramienta o comando, documentación oficial.
5. `npm run vault:check` (valida también LaTeX y wikilinks).
6. Un commit por nodo: `content(<area>): <tema> con reto de <tipo>`.

## Convenciones

- Commits en español, prefijos `feat` / `fix` / `chore` / `docs` / `content` / `test` / `ci`.
- Ramas por unidad de trabajo y PR con CI en verde; no se hace push directo a `main`.
- Formato de flag: `EXODUS{...}`. Nunca en claro en el repositorio.
- `database/exodus.db` y `.soluciones/` no se versionan.
