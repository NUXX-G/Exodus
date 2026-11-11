# STATUS — Exodus

Última actualización: 2026-11-11 (sesión: nivel 4 + adjuntos)

Documento de continuidad. Quien retome el proyecto (persona o agente) debe leer esto primero,
junto con `CLAUDE.md` y `README.md`.

## Estado en una línea

Plataforma completa y verificada (árbol, lectura, flags, pistas, heatmap, cuenta con contraseña,
Docker, CI, adjuntos de reto). 22 de 27 nodos tienen teoría completa y reto: la raíz y los
niveles 1 a 4 enteros. Faltan 5 nodos (niveles 5 y 6) y varias áreas del prompt sin nodo.

## Ramas y pull requests

Los PR #1 a #5 están fusionados en `main`. Cada unidad de trabajo nueva va en su rama y su PR
contra `main`, y se fusiona con CI en verde.

Lección aprendida: con PR apilados, fusionar uno **sin borrar su rama** no reapunta el siguiente a
`main`, y este acaba fusionado en la rama intermedia. Por eso hizo falta el #5. O se borra la rama
al fusionar, o se apunta cada PR directamente a `main`.

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

### Plataforma: adjuntos de reto (nuevo esta sesión)
- [x] Los nodos declaran `attachments: [...]` en el frontmatter; los archivos viven en
      `vault/_adjuntos/<id>/` (binarios, pcaps, volcados: lo que no cabe en el Markdown).
- [x] `GET /api/adjunto/<id>/<nombre>`: exige sesión, solo sirve lo declarado, no sigue enlaces
      simbólicos, archivo normal, máx. 20 MiB, siempre `application/octet-stream` con `nosniff`.
- [x] La página del nodo lista cada archivo con su tamaño y su SHA-256.
- [x] `vault:check` valida los adjuntos; tests de rutas de escape y de enlaces simbólicos.

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
| 3 | `mat-probabilidad` | Suma de dados, espera de un patrón y coincidencias, exactos |
| 3 | `fis-mecanica-clasica` | Periodo exacto del péndulo, ecuación de Kepler, modos normales |
| 3 | `ing-senales-sistemas` | Aliasing, energía de una convolución y pico de una DFT |
| 3 | `ing-arquitectura-computadores` | Fallos de caché en el producto de matrices |
| 4 | `sec-criptografia` | Fermat contra RSA, Pohlig-Hellman y conteo de puntos de una curva elíptica |
| 4 | `sys-ensamblador-x86-64` | Leer un hash y una recursión en System V AMD64 |
| 4 | `fis-electromagnetismo` | Potencial de una placa, espira hexagonal y Fresnel |
| 4 | `fis-termo-estadistica` | Sólidos de Einstein, Ising 4×4 y anomalía de Schottky |
| 4 | `fis-mecanica-cuantica` | Pozo finito, oscilaciones de Rabi y entropía de entrelazamiento |
| 4 | `rob-cinematica` | Ángulo de rotación, inversa de un brazo 3R y manipulabilidad |
| 4 | `rob-control` | Margen de fase, pico de la respuesta a escalón y LQR |
| 4 | `ia-aprendizaje-estadistico` | Regresión polinómica, LOOCV y regresión logística |

## Verificado y no verificado

- **Navegador, build de producción**: flag incorrecta, pista, flag correcta, desbloqueo de
  dependientes; crear cuenta con código incorrecto y correcto, cerrar sesión, contraseña
  incorrecta, acceso, redirecciones sin sesión.
- **Docker**: imagen construida y arrancada en local; escribe `database/exodus.db` en el host;
  creación de cuenta probada contra el contenedor. CI lo repite en cada push.
- **Flags**: las veintidós se calculan con scripts que contrastan cada resultado por un segundo
  método, y `.soluciones/verificar.ts` comprueba que cada una valida contra el hash de su nodo. Los dos retos en C (`nodo-ejemplo`, `sys-c-memoria`) y el listado de `sys-ensamblador-x86-64` se compilaron además con GCC 14 (imagen Docker `gcc:14`; en Windows no hay GCC nativo).
  Los scripts están en `.soluciones/` (ignorada por git, solo en la máquina de desarrollo).
- **Sin probar**: el perfil `https` con un dominio real (solo `caddy validate`), y `deploy.bat`
  ejecutado como tal (se probaron sus comandos por separado).
- **Bibliografía citada de memoria**: revisar ediciones, años y números de sección.

## Pendiente, por orden

### 1. Contenido: nodos base sin teoría ni reto

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
- [x] ~~Retos con artefactos descargables~~: hecho esta sesión (ver arriba). Ya desbloquea
      `sec-explotacion-binaria` y forense.
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
5. `npm run vault:check` (valida también LaTeX y wikilinks) y `npx tsx .soluciones/verificar.ts`
   (confirma que la flag calculada valida contra el hash pegado en el nodo).
6. Un commit por nodo: `content(<area>): <tema> con reto de <tipo>`.

## Convenciones

- Commits en español, prefijos `feat` / `fix` / `chore` / `docs` / `content` / `test` / `ci`.
- Ramas por unidad de trabajo y PR con CI en verde; no se hace push directo a `main`.
- Formato de flag: `EXODUS{...}`. Nunca en claro en el repositorio.
- `database/exodus.db` y `.soluciones/` no se versionan.
