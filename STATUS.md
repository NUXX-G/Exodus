# STATUS — Exodus

Última actualización: 2026-11-11

Documento de continuidad. Quien retome el proyecto (persona o agente) debe leer esto primero,
junto con `CLAUDE.md` y `README.md`.

## Estado en una línea

Plataforma funcional de extremo a extremo (árbol, lectura, flags, pistas, heatmap). 4 de 27 nodos
tienen teoría completa y reto; los 23 restantes son nodos base con alcance y bibliografía.

## Completado

### Plataforma
- [x] Next.js 16 (App Router, salida standalone) + TypeScript + Drizzle + SQLite (`better-sqlite3`).
- [x] Esquema `database/schema.ts` y migración `0000_init`: `users`, `node_progress`,
      `flag_submissions`, `hint_reveals`, `activity_log`. Se migra sola al arrancar.
- [x] Parser del vault `src/lib/vault.ts`: frontmatter validado con zod, ids duplicados,
      prerequisitos inexistentes y ciclos.
- [x] Render `src/lib/markdown.ts`: GFM, LaTeX con MathJax (SVG en servidor), Shiki, wikilinks y
      callouts de Obsidian, saneado de HTML.
- [x] Árbol de habilidades (`src/components/SkillGraph.tsx`): estados completado / disponible /
      bloqueado, lectura libre de cualquier nodo.
- [x] Validación de flags por SHA-256, límite de 10 fallos por minuto y nodo, registro de intentos.
- [x] Pistas graduales (máx. 3: concepto, herramienta o comando, documentación oficial), registradas.
- [x] Heatmap de 26 semanas y racha.
- [x] Sin chat de IA en ninguna parte de la plataforma.

### Infraestructura
- [x] `docker/Dockerfile` multi-etapa y `docker/docker-compose.yml` (vault en solo lectura,
      `database/` montado para `database/exodus.db`, contenedor de solo lectura y sin capacidades).
- [x] `deploy.sh` y `deploy.bat`.

### Contenido con teoría completa y reto verificado
| Nodo | Archivo | Reto |
|---|---|---|
| `nodo-ejemplo` | `vault/00-troncal/nodo-ejemplo.md` | Exponenciación modular con exponente de 127 bits |
| `mat-logica-demostraciones` | `vault/01-matematicas/` | Tres conteos (recurrencia, inclusión-exclusión, particiones) |
| `sys-c-memoria` | `vault/05-sistemas-bajonivel/` | Hash de la representación de un array de estructuras |
| `sec-redes-tcpip` | `vault/06-ciberseguridad/` | Disección de trama y checksums IP y TCP |

## Verificado y no verificado

- Verificado en navegador con el build de producción: flag incorrecta, pista, flag correcta,
  desbloqueo de dependientes, registros en SQLite. Flag y pistas no reveladas no viajan al cliente.
- Las cuatro flags se calcularon con scripts y se contrastaron con valores de control
  independientes. El reto de `sys-c-memoria` se simuló en JavaScript con la disposición del ABI
  System V; **no se compiló en C real** (no hay compilador de C en la máquina de desarrollo).
- **La imagen Docker no se ha construido ni ejecutado nunca**: Docker Desktop estaba parado.
  Solo se validó la sintaxis con `docker compose config`. Es lo primero que hay que probar.
- Las referencias bibliográficas se citaron de memoria: revisar ediciones, años y números de
  sección antes de darlas por definitivas.

## Pendiente, por orden

### 1. Infraestructura
- [ ] Ejecutar `deploy.bat` / `./deploy.sh` con Docker arrancado y corregir lo que falle.
- [ ] Compilar el reto de `sys-c-memoria` con GCC en Linux y confirmar que da la flag.
- [ ] Autenticación (login con contraseña; `users.password_hash` ya existe). Hasta entonces el
      puerto solo se publica en `127.0.0.1`.

### 2. Contenido: nodos base sin teoría ni reto
Seguir el orden del árbol para que siempre haya un nodo disponible con reto.

Nivel 2
- [ ] `mat-algebra-lineal`
- [ ] `mat-analisis-real`
- [ ] `mat-estructuras-algebraicas`
- [ ] `ing-logica-digital`
- [ ] `sys-sistemas-operativos`
- [ ] `sec-web`

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

### 3. Áreas del prompt maestro sin nodo todavía
Topología, ecuaciones diferenciales, análisis numérico, C++, Rust, ARM, sockets, forense y logs,
diseño de PCB, algoritmos (CLRS), redes neuronales desde cero en Python, PyTorch, Transformers,
LLMs locales (Ollama / vLLM).

### 4. Plataforma
- [ ] Retos con artefactos descargables (binarios, pcaps): hoy todo reto debe caber en el Markdown.
- [ ] Añadir a `npm run vault:check` la prueba de render de todos los nodos (errores de LaTeX,
      wikilinks rotos).
- [ ] Tests automáticos de `vault.ts` y `progress.ts`.

## Cómo añadir un nodo con reto

1. Sustituir el cuerpo del nodo base por teoría desde primeros principios: definiciones, teoremas
   con demostración, LaTeX y código funcional. Mantener `id`, `area` y `prerequisites`.
2. Diseñar un reto cuya flag se **calcule** (no se adivine): escribir un script que la genere y
   contrastarlo con un valor de control independiente. Incluir valores de control en el enunciado.
3. `npm run vault:flag -- "EXODUS{...}"` y pegar el `ctf_flag: "sha256:..."` resultante.
4. Tres pistas en este orden: concepto, herramienta o comando, documentación oficial.
5. `npm run vault:check`, abrir el nodo en `npm run dev` y revisar fórmulas y código.
6. Un commit por nodo: `content(<area>): <tema> con reto de <tipo>`.

## Convenciones

- Commits en español, prefijos `feat` / `fix` / `chore` / `docs` / `content`, uno por unidad de trabajo.
- Formato de flag: `EXODUS{...}`. Nunca en claro en el repositorio.
- La base de datos `database/exodus.db` no se versiona.
- Los commits están en `main` local; no se ha hecho `git push`.
