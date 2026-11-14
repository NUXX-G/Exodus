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
repaso espaciado**, heatmap, cuenta con cambio de contraseña y cierre de otras sesiones, Docker, HTTPS con Caddy, CI), probada de extremo a extremo en navegador contra la imagen Docker.
Contenido: **155 nodos de la escalera del troncal** (8 a 17 ejercicios cada uno, verificados por doble método; cubren
todo el troncal de `docs/CURRICULO.md`, de 1º ESO a final de grado: matemáticas hasta análisis real, álgebra lineal avanzada y
estadística; física hasta electromagnetismo, termodinámica estadística y circuitos con semiconductores; computación hasta sistemas
operativos, redes y bases de datos) y **0 nodos comprimidos** anteriores (cada uno con un reto con
flag), ya enlazados a la escalera pero pendientes de desdoblar.

## 3. Qué hacer ahora, por orden

1. **El troncal está completo**: todos sus nodos (incluidos los ✳️ antiguos de N3, reescritos y movidos a `vault/00-troncal/` con su
   flag conservada y comprobada en el spec) son nodos de escalera. Cada nodo nuevo sigue la plantilla de `docs/PEDAGOGIA.md`, ≥ 8
   ejercicios (lo normal: 14 a 16) y 3 niveles de pistas si lleva flag.
2. **Ramas N4 → N6 (lo siguiente)** por prerrequisitos (lista en `docs/CURRICULO.md`: topología, EDP, C++, Rust, ARM, forense y logs, PCB,
   PyTorch, Transformers, LLM locales…). Los nodos comprimidos antiguos se desdoblan en ellas. Hechos: `fis-mecanica-cuantica`, `cua-computacion-cuantica`, `rob-cinematica`, `rob-control`, `rob-microcontroladores`, `ia-aprendizaje-estadistico`, `ia-redes-profundas`, `sec-criptografia`, `sec-web`, `sec-explotacion-binaria`, `sys-ensamblador-x86-64`. **Ya no queda ningún nodo comprimido (✳️)**:
   lo pendiente son los ⬜ de las ramas. Nuevos de las ramas ya escritos: `mat-analisis-complejo`, `mat-teoria-numeros`, `mat-optimizacion`, `mat-procesos-estocasticos`, `mat-edp`, `mat-topologia`, `mat-medida-integracion`, `mat-teoria-informacion`, `mat-estadistica-matematica`, `mat-analisis-funcional`, `mat-geometria-diferencial`, `mat-algebra-conmutativa-galois`, `fis-relatividad-especial`, `fis-fluidos`, `fis-mecanica-estadistica-avanzada`, `fis-materia-condensada-1`, `fis-relatividad-general`, `fis-fisica-nuclear-particulas`, `fis-astrofisica`, `fis-teoria-cuantica-campos`, `ing-electronica-analogica`, `ing-diseno-digital-hdl`, `ing-pcb-diseno`, `ing-electronica-potencia`, `ing-comunicaciones`, `ing-procesado-digital-senal`, `ing-microelectronica-vlsi`, `ing-rf-microondas`, `ing-integridad-senal`, `ing-diseno-asic`, `rob-sensores-actuadores`, `rob-dinamica`, `rob-ros2`, `rob-percepcion-slam`, `rob-planificacion-movimiento`, `rob-control-optimo-mpc`, `rob-aprendizaje-robots`, `prog-bash-scripting`, `prog-unix-texto`, `prog-powershell-batch`, `prog-rust-fundamentos`, `prog-rust-traits-genericos`, `prog-rust-concurrencia-async`, `prog-rust-unsafe-ffi-macros`, `prog-rust-profesional`, `prog-cpp-moderno`, `prog-cpp-genericidad`, `prog-cpp-profesional`, `sys-c-profesional`, `proy-sys-shell-c`, `proy-sys-kv-rust`, `lab-sec-forense-servidor`, `lab-sec-captura-red`, `lab-sec-cripto-mal-usada`, `lab-sec-hardening`, `lab-sec-reversing-crackme`, `proy-sys-automatizacion`, `sys-compiladores`, `proy-sys-compilador`, `sys-ensamblador-arm`, `sys-concurrencia`, `sys-kernel-linux`, `sys-sistemas-distribuidos`, `proy-cua-simulador`, `proy-fis-nbody`, `proy-mat-numerico`, `proy-ia-autograd`, `proy-rob-robot-movil`, `proy-ing-filtros-dsp`, `proy-sec-cripto-verificada`, `proy-exodus-mision`, `sys-verificacion-formal`, `sys-optimizacion-rendimiento`, `sys-lenguajes-programacion`, `lab-sys-depuracion`, `lab-sys-rendimiento`, `sec-seguridad-so`, `sec-forense-logs`, `sec-reversing-malware`, `sec-criptografia-aplicada`, `sec-seguridad-redes`, `sec-metodologia-pentest`, `sec-cloud-contenedores`, `sec-criptoanalisis`, `sec-seguridad-hardware`, `sec-formal-protocolos`, `sec-gestion-riesgo`.
   (reescrito como nodo de escalera en `vault/02-fisica/`, conserva su flag). Las ramas se quedan en su carpeta (`vault/02-fisica/`, etc.).
2b. **Ampliación pedida el 2026-11-13** (ver `docs/CURRICULO.md`, «Práctica» y la sección de Sistemas): scripting (bash, utilidades
   de texto, PowerShell y batch), Rust en cinco nodos hasta nivel sénior, C++ en tres, `sys-c-profesional`, y **proyectos** (`kind: proyecto`,
   hitos verificados con la salida del programa del estudiante) y **laboratorios** (`kind: laboratorio`, adjuntos y flag) por rama, visibles en
   `/practica` (PR #120). Los ids `prog-cpp` y `prog-rust` desaparecen en favor de los nodos desdoblados. Los nodos de robótica usan `area: robotica`.
2c. **Auditoría de fugas** (2026-11-14): los nodos de #143 a #167 ya están revisados. Los anteriores tienen coincidencias por revisar a mano
   (`npm run vault:fugas`; muchas son falsos positivos, como un dato que el nodo enseña y el ejercicio pide recordar).
3. **Plataforma (MVP cerrado el 2026-11-12; invitaciones añadidas el 2026-11-13)**: el admin genera en `/cuenta` invitaciones de un
   solo uso que caducan (1, 3 o 7 días; máximo 20 pendientes; se pueden anular) y el invitado crea su cuenta `miembro` en
   `/registro` (enlace con `?codigo=`). No hay registro abierto; los miembros no invitan. La base solo guarda el SHA-256 del código;
   la migración 0003 añade `users.role` y marca `admin` a las cuentas existentes. Probado en navegador con contextos aislados
   (registro, reuso rechazado, miembro sin sección de invitaciones, anular). `/cuenta` permite cambiar la contraseña (pide la actual; al cambiarla se cierran las
   demás sesiones) y cerrar las demás sesiones; probado en navegador con dos contextos. La lógica de sesiones está en
   `src/lib/sessions.ts` (sin dependencias de Next) y tiene tests, igual que `progress.ts` (`tests/sessions.test.ts`,
   `tests/progress.test.ts`): `npm test` usa `--conditions=react-server` para que `server-only` resuelva a su versión vacía, y
   `tests/db-temporal.ts` abre una base SQLite temporal con las migraciones. `deploy.bat` se ejecutó tal cual (se corrigió la espera:
   `timeout` falla sin consola, ahora usa `ping`). El perfil `https` se probó en local con `EXODUS_DOMAIN=localhost` (certificado
   interno de Caddy, cabeceras HSTS/nosniff/DENY y salud correctas, mapeando el 443 a otro puerto porque el 80 de Windows está
   ocupado). Lo único sin probar es Let's Encrypt con un dominio real, que exige un VPS y un DNS del usuario:
   `EXODUS_DOMAIN=exodus.midominio.com ./deploy.sh` (ver `docker/Caddyfile`).
4. Bibliografía: todos los nodos son ya de escalera y llevan referencias verificadas en la web (o citadas solo por libro/capítulo
   sin número); al reescribir los antiguos se quitaron las que no se pudieron confirmar.
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
- **Ningún ejemplo resuelto ni bloque de código del texto puede dar la respuesta de un ejercicio**: los ejemplos usan otros valores
  (otra semilla, otro tamaño, otro caso). Compruébalo con `npm run vault:fugas -- <id>` (usa `.soluciones/`) y revisa a mano cada coincidencia.
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
- Libreta por usuario (2026-11-14): tabla `notes` (migración 0005), `src/lib/notes.ts` (CRUD siempre filtrado por usuario,
  límites de longitud y número), páginas `/libreta` y `/libreta/[id]` (render con el mismo motor saneado que los nodos), apunte
  rápido desde cada nodo, exportación a Obsidian en `Libreta/<id>-<slug>.md` con índice y enlaces desde el nodo. Tests en
  `tests/notes.test.ts`; probado en build de producción (LaTeX, wikilinks, `<script>` descartado, sync con token).
- Obsidian por usuario (2026-11-13): `src/lib/obsidian-export.ts` (exportación pura), `obsidian.ts` (datos y tokens
  `api_tokens`, migración 0004), `obsidian-plugin.ts` (plugin *Exodus Sync* en JS plano, servido por la instancia),
  `zip.ts` (ZIP sin dependencias, validado con `zipfile` de Python), rutas `/api/obsidian/sync` (Bearer) y
  `/api/obsidian/descarga` (sesión + mismo origen). Tests en `tests/obsidian.test.ts` con la API de Obsidian simulada.
  Probado en build de producción: descarga con token, sync con el token emitido, 401 sin credenciales. **No probado
  dentro de Obsidian real** (no hay Obsidian en esta máquina): si falla, mirar la consola de Obsidian (Ctrl+Shift+I).
  Nota: con `next dev` y Playwright, los logs de `.playwright-mcp/` en la raíz provocan un bucle de recarga;
  para pruebas de navegador usar `next build && next start`.
- Auth: cuenta `admin` (creada en /configurar con el código del registro del servidor) y cuentas `miembro` solo por
  invitación (`src/lib/invitations.ts`, tests en `tests/invitations.test.ts`); scrypt, sesiones por cookie HttpOnly,
  limitador de intentos.
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
| 3 | `prog-bash-scripting` | 16 |
| 3 | `sys-c-fundamentos` | 17 |
| 4 | `mat-funciones-basicas` | 16 |
| 4 | `prog-powershell-batch` | 16 |
| 4 | `prog-unix-texto` | 16 |
| 5 | `fis-medida-movimiento` | 16 |
| 5 | `mat-algebra-secundaria` | 16 |
| 5 | `proy-sys-automatizacion` | 6 |
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
| 7 | `tro-razonamiento-cientifico` | 16 |
| 8 | `ing-logica-digital` | 15 |
| 8 | `mat-algebra-lineal-1` | 16 |
| 8 | `mat-calculo-1` | 16 |
| 8 | `mat-estructuras-algebraicas` | 16 |
| 8 | `prog-poo-diseno` | 17 |
| 8 | `sec-redes-tcpip` | 16 |
| 8 | `sys-bases-datos` | 17 |
| 8 | `sys-c-memoria` | 16 |
| 8 | `tro-lectura-tecnica` | 14 |
| 9 | `ing-arquitectura-computadores` | 15 |
| 9 | `lab-sec-captura-red` | 9 |
| 9 | `lab-sec-forense-servidor` | 10 |
| 9 | `mat-algebra-lineal` | 14 |
| 9 | `mat-calculo-2` | 16 |
| 9 | `mat-teoria-numeros` | 16 |
| 9 | `prog-algoritmos` | 16 |
| 9 | `prog-cpp-moderno` | 16 |
| 9 | `prog-rust-fundamentos` | 16 |
| 9 | `sec-web` | 16 |
| 9 | `sys-c-profesional` | 16 |
| 9 | `sys-procesos-planificacion` | 16 |
| 10 | `fis-mecanica-newtoniana` | 16 |
| 10 | `ing-diseno-digital-hdl` | 16 |
| 10 | `mat-algebra-conmutativa-galois` | 16 |
| 10 | `mat-analisis-real` | 16 |
| 10 | `mat-calculo-multivariable` | 16 |
| 10 | `mat-ecuaciones-diferenciales` | 16 |
| 10 | `prog-cpp-genericidad` | 16 |
| 10 | `prog-rust-traits-genericos` | 16 |
| 10 | `proy-sys-shell-c` | 8 |
| 10 | `sys-ensamblador-x86-64` | 16 |
| 10 | `sys-redes-sockets` | 14 |
| 10 | `sys-sistemas-operativos` | 16 |
| 11 | `fis-electricidad-magnetismo-1` | 17 |
| 11 | `fis-mecanica-clasica` | 16 |
| 11 | `ing-senales-sistemas` | 16 |
| 11 | `lab-sec-hardening` | 8 |
| 11 | `lab-sec-reversing-crackme` | 7 |
| 11 | `lab-sys-depuracion` | 14 |
| 11 | `mat-analisis-complejo` | 16 |
| 11 | `mat-analisis-numerico` | 16 |
| 11 | `mat-probabilidad` | 16 |
| 11 | `mat-topologia` | 16 |
| 11 | `prog-cpp-profesional` | 16 |
| 11 | `prog-rust-concurrencia-async` | 16 |
| 11 | `sec-explotacion-binaria` | 16 |
| 11 | `sys-compiladores` | 16 |
| 11 | `sys-concurrencia` | 16 |
| 11 | `sys-ensamblador-arm` | 16 |
| 12 | `fis-electromagnetismo` | 16 |
| 12 | `fis-fluidos` | 16 |
| 12 | `fis-ondas-optica` | 16 |
| 12 | `fis-termo-estadistica` | 16 |
| 12 | `ing-circuitos-dc-ac` | 17 |
| 12 | `ing-procesado-digital-senal` | 16 |
| 12 | `mat-algebra-lineal-avanzada` | 16 |
| 12 | `mat-edp` | 16 |
| 12 | `mat-estadistica-inferencia` | 15 |
| 12 | `mat-medida-integracion` | 16 |
| 12 | `mat-teoria-informacion` | 16 |
| 12 | `prog-rust-unsafe-ffi-macros` | 16 |
| 12 | `proy-fis-nbody` | 7 |
| 12 | `proy-mat-numerico` | 7 |
| 12 | `proy-sys-compilador` | 8 |
| 12 | `rob-cinematica` | 16 |
| 12 | `rob-control` | 16 |
| 12 | `sec-criptografia` | 16 |
| 12 | `sys-kernel-linux` | 16 |
| 12 | `sys-optimizacion-rendimiento` | 16 |
| 12 | `sys-sistemas-distribuidos` | 16 |
| 12 | `sys-verificacion-formal` | 16 |
| 13 | `fis-mecanica-cuantica` | 16 |
| 13 | `fis-relatividad-especial` | 16 |
| 13 | `ia-aprendizaje-estadistico` | 16 |
| 13 | `ing-circuitos` | 16 |
| 13 | `ing-comunicaciones` | 16 |
| 13 | `ing-medidas-laboratorio` | 16 |
| 13 | `lab-sec-cripto-mal-usada` | 6 |
| 13 | `lab-sys-rendimiento` | 13 |
| 13 | `mat-analisis-funcional` | 16 |
| 13 | `mat-estadistica-matematica` | 16 |
| 13 | `mat-geometria-diferencial` | 16 |
| 13 | `mat-optimizacion` | 16 |
| 13 | `mat-procesos-estocasticos` | 16 |
| 13 | `prog-rust-profesional` | 16 |
| 13 | `proy-ing-filtros-dsp` | 6 |
| 13 | `proy-sec-cripto-verificada` | 6 |
| 13 | `rob-dinamica` | 16 |
| 13 | `sec-seguridad-so` | 16 |
| 13 | `sys-lenguajes-programacion` | 16 |
| 14 | `cua-computacion-cuantica` | 16 |
| 14 | `fis-fisica-nuclear-particulas` | 16 |
| 14 | `fis-materia-condensada-1` | 16 |
| 14 | `fis-mecanica-estadistica-avanzada` | 16 |
| 14 | `fis-relatividad-general` | 16 |
| 14 | `ia-redes-profundas` | 16 |
| 14 | `ing-electronica-analogica` | 16 |
| 14 | `proy-sys-kv-rust` | 8 |
| 14 | `rob-microcontroladores` | 16 |
| 14 | `sec-criptografia-aplicada` | 16 |
| 14 | `sec-forense-logs` | 16 |
| 15 | `fis-astrofisica` | 16 |
| 15 | `fis-teoria-cuantica-campos` | 16 |
| 15 | `ing-electronica-potencia` | 16 |
| 15 | `ing-microelectronica-vlsi` | 16 |
| 15 | `ing-pcb-diseno` | 16 |
| 15 | `proy-cua-simulador` | 8 |
| 15 | `proy-ia-autograd` | 6 |
| 15 | `rob-sensores-actuadores` | 16 |
| 15 | `sec-criptoanalisis` | 15 |
| 15 | `sec-formal-protocolos` | 11 |
| 15 | `sec-reversing-malware` | 17 |
| 15 | `sec-seguridad-redes` | 15 |
| 16 | `ing-diseno-asic` | 16 |
| 16 | `ing-rf-microondas` | 16 |
| 16 | `rob-ros2` | 16 |
| 16 | `sec-metodologia-pentest` | 14 |
| 16 | `sec-seguridad-hardware` | 13 |
| 17 | `ing-integridad-senal` | 16 |
| 17 | `rob-percepcion-slam` | 16 |
| 17 | `sec-cloud-contenedores` | 14 |
| 18 | `rob-planificacion-movimiento` | 16 |
| 18 | `sec-gestion-riesgo` | 14 |
| 19 | `proy-rob-robot-movil` | 5 |
| 19 | `rob-control-optimo-mpc` | 16 |
| 20 | `proy-exodus-mision` | 9 |
| 20 | `rob-aprendizaje-robots` | 16 |

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
`sec-redes-tcpip` (reescrito, conserva su reto): subredes con `ipaddress` de Python frente a bits en JS, sumas de comprobación en
C frente a JS (la flag se recalcula), fragmentación y ventana de congestión simuladas en Python y JS.
`sys-redes-sockets`: servidores y clientes reales (TCP, UDP, `select`) en Python sobre 127.0.0.1 dentro de Docker frente a modelos
en JS; ley de Little contrastada con una simulación.
`fis-mecanica-clasica` (reescrito, conserva su reto y recalcula la flag): cada fórmula (órbitas, rodadura, modos normales, péndulo
exacto por AGM, precesión, masa reducida) se contrasta con RK4, Euler simpléctico, autovalores por Jacobi, Simpson o sección áurea en JS;
el bloque Python del texto (RK4 frente a AGM, Newton frente a bisección en Kepler, deriva de Euler explícito) se ejecuta en Docker.
`ing-senales-sistemas` (reescrito, conserva su reto y recalcula la flag): DFT directa frente a FFT propia, convolución directa frente a
producto en frecuencia, filtros simulados (RK4 para el RC y el segundo orden, ecuación en diferencias para FIR/IIR) frente a fórmulas,
polos por Durand-Kerner; el bloque Python del texto se ejecuta en Docker.
`fis-electromagnetismo` (reescrito, conserva su reto y recalcula la flag): Biot-Savart numérico frente a fórmulas (hilo, espira,
solenoide, hexágono del reto), carga inducida integrada frente a la imagen, energías de campo frente a C y L, Fresnel por fórmula y por
sistema de contorno, RK4 de la fuerza de Lorentz; el bloque Python (incluye Laplace por SOR) se ejecuta en Docker.
`fis-termo-estadistica` (reescrito, conserva su reto y recalcula la flag con enteros exactos): procesos integrados con Simpson/RK4,
microestados enumerados, sumas directas sobre niveles y derivadas numéricas de ln Z frente a fórmulas; Ising 4×4 por enumeración y por
programación dinámica fila a fila; el bloque Python (Boltzmann desde la cuenta, anchura 1/√N, Wien) se ejecuta en Docker.
`ing-circuitos` (reescrito, conserva su reto y recalcula la flag con fracciones exactas y Tellegen): transitorios por RK4, diodos por
Newton frente a bisección, amplificadores por sistema nodal con el operacional como fuente controlada, pequeña señal por derivada
numérica de la característica de gran señal, filtros por bisección sobre |H|; el bloque Python se ejecuta en Docker.
`fis-mecanica-cuantica` (rama, reescrito, conserva su reto y recalcula la flag): niveles por diferencias finitas con bisección de
Sturm (pozos, oscilador, hidrógeno 2s/3s), túnel y Rabi por RK4 complejo, Schmidt por determinante frente a Jacobi, CHSH con productos
tensoriales; el bloque Python (incluye exp(−iHt) por serie de Taylor) se ejecuta en Docker.
`cua-computacion-cuantica` (rama, reescrito, conserva su reto): simulador de vector de estado en JS (puertas, CNOT, teleportación,
Grover, Deutsch-Jozsa, Bernstein-Vazirani) frente a fórmulas cerradas; estimación de fase por suma directa frente a núcleo de Dirichlet;
fracciones continuas frente a orden por fuerza bruta. El bloque Python (sin numpy) se ejecuta en Docker.
`rob-cinematica` (rama, reescrito, conserva su reto): ángulos por traza frente a cuaterniones, Rodrigues frente a producto de matrices,
inversa analítica frente a Newton y a la directa, jacobiano frente a diferencias finitas, Cauchy-Binet frente a det(JJᵀ).
`rob-control` (rama, reescrito, conserva su reto): respuestas por RK4 en forma canónica controlable frente a fórmulas y residuos,
raíces por Durand-Kerner, márgenes por bisección, LQR por Newton-Kleinman frente a forma cerrada; el bloque Python (P frente a PI,
antiwindup, Routh simulado) se ejecuta en Docker.
`rob-microcontroladores` (rama, reescrito, conserva su reto): búsquedas exhaustivas en los registros (PSC/ARR, BRR), contadores y
cargas RC simulados, CRC bit a bit frente a tabla, SNR por cuantificación simulada; el programa C del texto se compila en `gcc:14`
con ASan/UBSan y -O2. Se corrigió el texto antiguo: el tiempo de subida de I²C se mide entre 0,3 y 0,7 VDD (de ahí 0,8473 = ln 7/3).
`ia-aprendizaje-estadistico` (rama, reescrito, conserva su reto): QR frente a ecuaciones normales, atajo LOOCV frente a reajustes,
Newton frente a ascenso de gradiente, potencias para ACP, partición exhaustiva para k-medias, Mann-Whitney frente a trapecios para AUC.
`ia-redes-profundas` (rama, reescrito, conserva su reto): retropropagación en fracciones exactas (BigInt) frente a diferencias centrales,
Adam directo frente a su forma eficiente, atención estable frente a logsumexp, recuento de parámetros por fórmula frente a lista de tensores.
`sec-criptografia` (rama, reescrito, conserva su reto): BigInt en JS (Fermat, RSA con CRT, BSGS, Pohlig-Hellman, curvas en afines y
jacobianas, Legendre frente a pares), HMAC de la biblioteca frente a ipad/opad, AES-CTR real con nonce repetido. Ojo al escribir isqrt de BigInt:
arrancar desde Math.sqrt(Number(n)) con n de 1024 bits deja un error enorme y el bucle de corrección no termina; usar Newton desde una potencia de 2.
`sec-web` (rama, reescrito, conserva su reto): parsers reales (URL, base64url, JWT), SQLite real en Docker para la inyección frente a la
consulta parametrizada, HMAC manual frente a biblioteca, decisiones de SameSite/SOP/CSP/CSRF contrastadas con tablas de casos; la clave del
JWT del reto se recupera por fuerza bruta (10^5) y se recalcula la firma falsificada.
`sec-explotacion-binaria` (rama, reescrito, conserva su reto; enfoque de análisis y defensa, sin construir exploits): analizador ELF propio
en JS contrastado con readelf (binutils en Docker, valores anotados en el spec), aritmética con BigInt; el desplazamiento de ASan (0x7fff8000)
se confirmó desensamblando un objeto compilado con -fsanitize=address en gcc:14. Programa C (ASan/UBSan, -O2) y auditor ELF en Python ejecutados.
`sys-ensamblador-x86-64` (rama, reescrito, conserva su reto): cada ejercicio es una función en ensamblador que el spec ensambla y ejecuta en
gcc:14 (main con ASan/UBSan y con -O2, salidas idénticas) frente a una emulación con BigInt; el programa del texto usa __asm__ de nivel superior.
`mat-analisis-complejo` (rama, nuevo, en `vault/01-matematicas/`): residuos y fórmula de Cauchy frente a la regla del trapecio sobre circunferencias
(convergencia exponencial), integrales reales por Simpson, Rouché frente a Durand-Kerner y al principio del argumento numérico.
`mat-teoria-numeros` (rama, nuevo): fórmulas multiplicativas, Euclides extendido, reciprocidad, Tonelli-Shanks, Miller-Rabin y fracciones
continuas de Pell frente a búsquedas exhaustivas; el bloque Python (criba, Miller-Rabin determinista, TCR, Pell D = 61) se ejecuta en Docker.
`mat-optimizacion` (rama, nuevo): soluciones analíticas (primer orden, KKT, dualidad, tasas) frente a gradiente, Newton, gradiente conjugado,
sección áurea, penalización, símplex frente a enumeración de vértices, mochila por DP frente a 2^n y llenado de agua por bisección frente a rejilla.
- `mat-procesos-estocasticos` (nuevo, rama de matemáticas): 16 ejercicios. Cada respuesta por dos caminos deterministas: estacionaria por fórmula y por potencias de la matriz; ruina del jugador (justa y sesgada, probabilidad y duración) por fórmula de parada opcional y por sistema lineal; Poisson por la fórmula y por diferencia de integrales de Erlang (Simpson); tiempo de retorno por $1/\pi$ y por tiempos de llegada; matriz fundamental frente a iteración; M/M/1 por fórmula y por suma de la geométrica + Little; PageRank por potencias y por sistema; extinción por raíz y por iteración; reflexión por $2\Pr(B_1>1)$ y por la densidad del primer paso; Ornstein-Uhlenbeck y Kolmogorov por fórmula y RK4; carrera de Poisson por Simpson. Bloque Python ejecutado en python:3.12-slim (simulación de Poisson con semilla fija). Fuentes verificadas: Norris (CUP 1997), Grimmett-Stirzaker 4ª ed. (OUP 2020).
- `mat-edp` (nuevo, rama de matemáticas): 16 ejercicios. Cada respuesta por la fórmula analítica y por un método numérico independiente: transporte por característica integrada; Fourier, Parseval, núcleo del calor y energía por Simpson; d'Alembert por salto de rana; calor por esquema explícito (Dirichlet y Neumann); estabilidad por bisección en el factor de von Neumann; Poisson 1D por sistema tridiagonal; frecuencia fundamental por iteración inversa del laplaciano discreto; autovalor mixto por disparo RK4 + bisección; Laplace en el cuadrado por SOR en dos mallas + Richardson; Burgers por cruce de características en malla. Bloque Python (explícito estable e inestable, d'Alembert, SOR) ejecutado en python:3.12-slim; se corrigió un valor del ejemplo 3 (0,0431). Fuentes verificadas: Strauss 2ª ed. (Wiley 2008), Evans 2ª ed. (AMS GSM 19, 2010).
- `mat-topologia` (nuevo, rama de matemáticas): 16 ejercicios. Dos caminos por respuesta: distancias por fórmula y por $d_p$ con $p$ grande; contraejemplo de métrica por búsqueda; componentes por grafos y por fusión de intervalos; 29 topologías por fuerza bruta y por preórdenes (Alexandrov); punto fijo de Banach por iteración y Newton; cota a priori por fórmula y búsqueda; χ del toro de 7 vértices (comprobando que cada arista está en dos caras) frente a 2 − 2g; Betti (1, 2, 1) por rangos sobre Q y sobre GF(2) con ∂∂ = 0 comprobado; Cantor por conteo de cajas; número de Lebesgue por bisección sobre un barrido; índice por argumento acumulado y por cruces con signo; estereográfica por la inversa. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Munkres 2ª ed. (Prentice Hall 2000), Hatcher (CUP 2002).
- `mat-medida-integracion` (nuevo, rama de matemáticas): 16 ejercicios. Dos caminos por respuesta: Cantor y Cantor gordo por serie y por construcción explícita; simples y Fatou por sumas de Riemann; truncamientos y $I_{10} = 10/9$ por Simpson; Fubini en 2D por Simpson anidado; el contraejemplo de Fubini con la integral interior $1/(1+x^2)$ comprobada numéricamente; capas frente a integral directa; Radon-Nikodym por derivada numérica de la CDF; Borel-Cantelli por productos telescópicos; media y varianza de Cantor enumerando $2^{20}$ puntos; máquina de escribir construyendo la sucesión. En el bloque Python se corrigió la comparación de la distribución de Cantor (en el nivel $k$ la media es $(1 - 3^{-k})/2$, no $1/2$). Fuentes verificadas: Folland 2ª ed. (Wiley 1999), Tao (AMS GSM 126, 2011).
- `mat-teoria-informacion` (nuevo, rama de matemáticas): 16 ejercicios. Dos caminos por respuesta: entropía diádica frente a Huffman; $H(0{,}1)$ frente a $\frac1n\log_2\binom{n}{n/10}$; Huffman por profundidades y por suma de fusiones; regla de la cadena; KL como cruzada − entropía; información mutua desde la conjunta; capacidades BEC/Z por maximización numérica (malla, sección áurea) y canal simétrico por Blahut-Arimoto; Kraft por construcción voraz; entropía diferencial por Simpson; Hamming (7,4) decodificando los 128 patrones; codificación aritmética subdividiendo el intervalo; Fano por bisección y Newton. Se corrigió en el texto la comparación de Hamming con la transmisión sin código (unas 20 veces menos error, no 5). Fuentes verificadas: Cover-Thomas 2ª ed. (Wiley 2006), MacKay (CUP 2003).
- `mat-estadistica-matematica` (nuevo, rama de matemáticas): 16 ejercicios. Dos caminos por respuesta: Fisher por $E[s^2]$; Cramér-Rao frente a la varianza exacta de la media; EMV por sección áurea; método delta frente a la varianza exacta Gamma; potencia de Neyman-Pearson integrando bajo $H_1$; $-2\log\Lambda$ por log-verosimilitudes; UMVUE de $e^{-\lambda}$ comprobando su insesgadez con la ley de $T$; posterior Beta por rejilla; remuestras bootstrap enumerando $5^5$; uniforme por malla; ECM del máximo integrando su densidad; James-Stein con $E[1/\chi^2_{10}]$ por Simpson; Wilson invirtiendo el test por bisección; K-S en malla fina. Cuantiles normales por bisección sobre Φ (Simpson) y contrastados con sus valores tabulados. Bloque Python (simulaciones con semilla fija) ejecutado en python:3.12-slim. Fuentes verificadas: Casella-Berger 2ª ed. (Duxbury 2002), Wasserman (Springer 2004).
- `mat-analisis-funcional` (nuevo, rama de matemáticas): 16 ejercicios. Dos caminos por respuesta: normas de sucesiones por sumas parciales; norma euclídea por potencias sobre AᵀA; normas inducidas en los vértices de las bolas unidad; proyección y error por la matriz de Gram con Simpson; Gram-Schmidt numérico; Parseval por el coeficiente calculado; ecuación integral por Picard; Riesz por discretización; Volterra (2/π) y núcleo min (4/π²) por discretización y potencias; Poincaré por el autovalor discreto exacto; constante de Lebesgue $L_5$ por integración y por la fórmula con tangentes; norma H¹ con la derivada débil. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Kreyszig (Wiley 1978), Brezis (Springer 2011).
- `mat-geometria-diferencial` (nuevo, rama de matemáticas): 16 ejercicios. Dos caminos por respuesta: curvatura, longitud, curvatura y torsión con derivadas numéricas y Simpson; curvaturas de esfera, toro y cilindro con las formas fundamentales calculadas numéricamente; Gauss-Bonnet integrando $K\,dA$ en el toro; área del toro por $\sqrt{EG - F^2}$ numérico (3 decimales para evitar redondeo ambiguo); Christoffel por la fórmula con derivadas numéricas de la métrica; holonomía integrando la ecuación de transporte con RK4; corchete de Lie con jacobianos numéricos; Stokes por integral de línea; Poincaré por la fórmula conforme con diferencias finitas. Bloque Python (geodésica de la esfera con RK4) ejecutado en python:3.12-slim. Fuentes verificadas: do Carmo (Prentice-Hall 1976), Lee 2ª ed. (Springer GTM 218, 2012).
- `mat-algebra-conmutativa-galois` (nuevo, rama de matemáticas; cierra las ramas de matemáticas): 16 ejercicios. Dos caminos por respuesta: polinomio mínimo de √2+√3 por producto de conjugados y descarte de factores; discriminantes por fórmula y por raíces numéricas; cuerpos finitos por fuerza bruta (irreducibles sobre F₂, órdenes en F₁₆ con x⁴+x+1); Z/12, Z/60 y enteros de Gauss por enumeración; mcd de polinomios por Euclides; Bézout por resultante; subgrupos de Z/6 enumerados; construcciones por grado potencia de 2. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Dummit-Foote 3ª ed. (Wiley 2004), Atiyah-Macdonald (Addison-Wesley 1969).
- `fis-relatividad-especial` (nuevo, rama de física): 16 ejercicios. Dos caminos por respuesta: γ por rapidez; dilatación y simultaneidad por boosts explícitos de sucesos; contracción transformando los extremos; composición por suma de rapideces; tiempo propio por boost al sistema donde Δx' = 0; momento por γ; umbral del pion por bisección en la masa invariante; Compton resolviendo la conservación del cuadrimomento; aberración transformando el cuadrimomento del fotón; gemelos integrando dt/γ; cohete a un g integrando cosh; campos con el invariante $E^2 - c^2B^2$. Se ajustaron decimales para evitar redondeos ambiguos (momento del protón a 1 decimal). Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Taylor-Wheeler 2ª ed. (Freeman 1992), Rindler 2ª ed. (OUP 2006).
- `fis-fluidos` (nuevo, rama de física): 16 ejercicios. Dos caminos por respuesta: hidrostática integrando dp/dz; Torricelli con la caída de una partícula (RK4); Poiseuille integrando el perfil parabólico; Stokes integrando la dinámica hasta la terminal (y comprobando Re < 1); Venturi por bisección en Bernoulli + continuidad; pérdida de carga por Δp; cilindro por gradiente numérico del potencial; Kutta-Joukowski integrando la presión de Bernoulli; Blasius por disparo (f''(0) = 0,332, η₉₉ = 4,91); flotación por bisección del calado; dispersión por bisección en ω; vorticidad por rotacional numérico; chorro integrando el flujo de cantidad de movimiento; remanso por balance de entalpía. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Kundu-Cohen-Dowling 6ª ed. (Academic Press 2015), Acheson (Clarendon 1990).
- `fis-mecanica-estadistica-avanzada` (nuevo, rama de física): 16 ejercicios. Dos caminos por respuesta: $T_c$ de BEC con $g_{3/2}(1)$ integrado (cambio $x = s^2$ para quitar la singularidad) y contado como excitados; $E_F$ integrando la densidad de estados; Sommerfeld por derivada numérica de la energía de Fermi-Dirac con μ(T) por bisección; Debye por la integral y por total menos cola; Onsager por bisección; campo medio por la pendiente; magnetización por punto fijo y Newton; correlación por matriz de transferencia; Metropolis por balance detallado; Einstein-Stokes por Green-Kubo; virial por límite de van der Waals; Langmuir por gran partición; fluctuaciones por $k_BT^2C_V$; Planck integrado; decimación por $\tanh K' = \tanh^2 K$; fracción condensada por integrales. Bloque Python (Metropolis 16×16 con semilla) ejecutado en python:3.12-slim. Fuentes verificadas: Pathria-Beale 3ª ed. (Academic Press 2011), Kardar (CUP 2007).
- `fis-materia-condensada-1` (nuevo, rama de física): 16 ejercicios. Dos caminos por respuesta: Bragg frente a Laue con |G|; empaquetamiento por volumen de esferas; cadenas mono y diatómica diagonalizando la matriz dinámica (Jacobi); masa efectiva por curvatura numérica; $n_i$ y nivel de Fermi dopado por neutralidad de carga con bisección; Hall simulando la tensión; Drude por movilidad; plasmón por λ_p; Curie-Weiss por la recta 1/χ; London integrando $B'' = B/\lambda^2$ con RK4; gap BCS con $\pi e^{-\gamma_E}$; red recíproca por productos vectoriales; densidad de estados 2D contando estados en una caja. Bloque Python (ausencias sistemáticas FCC incluidas) ejecutado en python:3.12-slim. Fuentes verificadas: Kittel 8ª ed. (Wiley 2005), Ashcroft-Mermin (Holt 1976).
- `fis-relatividad-general` (nuevo, rama de física): 16 ejercicios. Dos caminos por respuesta: $r_s$ con G·M y con GM☉ medida; GPS por expansión y por el cociente exacto de ritmos de la métrica; desviación de la luz y perihelio de Mercurio integrando las ecuaciones de órbita relativistas con RK4; redshift con $g_{tt}$; ISCO donde $dL^2/dr = 0$; esfera de fotones por el máximo del potencial; Hawking por la gravedad superficial; chirp con η; Hubble y densidad crítica por cadenas de unidades distintas; edad ΛCDM integrando Friedmann; caída a la singularidad por integral con cambio $r = r_0\sin^2\theta$; ascensor paso a paso; Pound-Rebka con el potencial exacto. Decimales ajustados para evitar redondeos ambiguos. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Hartle (Addison-Wesley 2003), Carroll (Addison-Wesley 2004).
- `fis-fisica-nuclear-particulas` (nuevo, rama de física): 16 ejercicios. Dos caminos por respuesta: ligadura con masas atómicas y nucleares; isóbaro más estable por fuerza bruta en la fórmula semiempírica y por Z₀ continuo más apareamiento; desintegración por RK4; actividad por desintegraciones en 1 s; repartos α y D-T por bisección en el momento; barrera con constantes SI; pion por bisección en la energía; masa invariante con cuadrivectores; conservación con tabla de números cuánticos; Yukawa en SI; luminosidad en cm²; anchura del muon frente a la teoría de Fermi (0,5 %); oscilaciones en unidades naturales. Decimales ajustados para evitar redondeos ambiguos. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Krane (Wiley 1988), Griffiths 2ª ed. (Wiley-VCH 2008).
- `fis-astrofisica` (nuevo, rama de física): 16 ejercicios. Dos caminos por respuesta: Wien maximizando Planck (sección áurea); luminosidad integrando el espectro; masas por Kepler y por una órbita integrada; Eddington por balance de fuerzas a cualquier radio; presión central integrando el equilibrio hidrostático; masa galáctica por periodo; edad y distancia de luminosidad en Einstein-de Sitter integrando $H(z)$; combustible solar por defecto de masa y por número de reacciones; radio de Einstein con la distancia efectiva; velocidad radial de Júpiter por conservación del momento. Decimales ajustados (Eddington en miles de L☉, $d_L$ entero). Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Carroll-Ostlie 2ª ed. (Pearson 2007), Ryden 2ª ed. (CUP 2017).
- `fis-teoria-cuantica-campos` (nuevo, rama de física; cierra la rama de física): 16 ejercicios. Dos caminos por respuesta: velocidad de grupo por derivada numérica; Compton y 1/α en SI frente a MeV·fm y CODATA; osciladores con matrices de escalera truncadas; Casimir por derivada de la energía; Yukawa verificando $(\nabla^2 - m^2)V = 0$; σ(ee→μμ) integrando la distribución angular; Mandelstam con cuadrivectores; carreras de α y α_s con RK4 de las ecuaciones del grupo de renormalización; vida del Z por la anchura a media altura de la Breit-Wigner; traza de Dirac con matrices explícitas; Rutherford desde $b(\theta)$; Wick por integral; $Z(\lambda)$ por dos cuadraturas. Bloque Python (serie asintótica incluida) ejecutado en python:3.12-slim. Fuentes verificadas: Peskin-Schroeder (Addison-Wesley 1995), Schwartz (CUP 2014).
- `fis-teoria-cuantica-campos` (nuevo, rama de física; cierra la rama de física): 16 ejercicios. Dos caminos por respuesta: velocidad de grupo por derivada numérica; Compton y 1/α en SI frente a MeV·fm y CODATA; osciladores con matrices de escalera truncadas; Casimir por derivada de la energía; Yukawa verificando $(\nabla^2 - m^2)V = 0$; σ(ee→μμ) integrando la distribución angular; Mandelstam con cuadrivectores; carreras de α y α_s con RK4 de las ecuaciones del grupo de renormalización; vida del Z por la anchura a media altura de la Breit-Wigner; traza de Dirac con matrices explícitas; Rutherford desde $b(\theta)$; Wick por integral; $Z(\lambda)$ por dos cuadraturas. Bloque Python (serie asintótica incluida) ejecutado en python:3.12-slim. Fuentes verificadas: Peskin-Schroeder (Addison-Wesley 1995), Schwartz (CUP 2014).
- `ing-diseno-digital-hdl` (nuevo, rama de ingeniería): 16 ejercicios. Dos caminos por respuesta: Karnaugh contra la tabla completa; complemento a dos por inversión + 1; FSM de 1011 construyendo los autómatas por prefijos y minimizándolos por refinamiento de particiones; temporización por búsqueda del periodo; Gray por construcción reflejada; LFSR por simulación y por potencia de la matriz de transición en GF(2); autoduales y mayoría enumerando tablas; caché y segmentación contando bits y simulando. El nodo incluye tres bancos de prueba Verilog autocomprobados (detector de secuencia, LFSR, sumador con 65 536 casos) simulados con Icarus Verilog en una imagen Docker propia (`exodus-iverilog`, Debian bookworm + iverilog). Fuentes verificadas: Harris-Harris 2ª ed. (Morgan Kaufmann 2012), Mano-Ciletti 5ª ed. (Pearson 2012).
- `ing-pcb-diseno` (nuevo, rama de ingeniería): 16 ejercicios. Dos caminos por respuesta: resistencia por cuadros; anchura IPC-2221 recuperando la corriente; impedancia IPC-2141 invertida por bisección y anchura de 50 Ω por bisección y Newton; resonancia y antirresonancia de desacoplo como extremos de |Z| complejo (sección áurea); Γ y ROE por tensiones; emisión de bucle con unidades convertidas a mano; vía térmica por corona y por pared delgada; profundidad pelicular con f y con ω. Se corrigió en el ejemplo 2 la resistencia de la pista (31 mΩ, no 22). La correlación IPC-2221 se tomó de varias fuentes secundarias concordantes (la norma no es de acceso libre) y no se cita como bibliografía. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Ott (Wiley 2009), Montrose 2ª ed. (Wiley-IEEE 2000).
- `ing-electronica-potencia` (nuevo, rama de ingeniería): 16 ejercicios. Dos caminos por respuesta: relaciones de conversión por simulación conmutada y por balance de voltios-segundo resuelto por bisección; rizado de corriente simulando un ciclo; rizado de tensión por la carga del triángulo; frontera de discontinua bajando la carga en la simulación; pérdidas de conmutación integrando v·i con carga inductiva enclavada; rectificadores e inversor por medias numéricas y por Fourier de la SPWM; bobina por reluctancia; resonancia LC midiendo el periodo de la oscilación libre. Respuestas de lista con ceros finales aceptadas en las dos formas («0.20;0.24» y «0.2;0.24»). Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Erickson-Maksimović 3ª ed. (Springer 2020), Mohan-Undeland-Robbins 3ª ed. (Wiley 2003).
- `ing-comunicaciones` (nuevo, rama de ingeniería): 16 ejercicios. Dos caminos por respuesta: eficiencia de AM integrando potencias; BER de BPSK con la cola gaussiana por Simpson frente a erfc, y $E_b/N_0$ por bisección y Newton; balance de enlace y capacidad en dB y en vatios; aliasing por la DFT de las muestras; Doppler con la fórmula relativista; filtro adaptado por correlación numérica; cuantificación midiendo 10⁶ muestras (la fórmula 6,02N + 1,76 supone error uniforme: ±0,25 dB); parábola por área efectiva; 16-QAM enumerando. Bloque Python (BER por Monte Carlo con semilla, OFDM con eco ecualizada) ejecutado en python:3.12-slim. Fuentes verificadas: Proakis-Salehi 5ª ed. (McGraw-Hill 2008), Haykin 4ª ed. (Wiley 2001).
- `ing-procesado-digital-senal` (nuevo, rama de ingeniería): 16 ejercicios. Dos caminos por respuesta: bins y tono por DFT directa; media móvil y FIR por ventana evaluando la DTFT y por DFT con relleno de ceros; corte del filtro de un polo por fórmula y bisección; estabilidad por la envolvente de la respuesta al impulso simulada; bilineal por la inversa; lóbulo de Hann por DTFT densa + sección áurea y por relleno de ceros; convolución por DFT; Goertzel contra la DFT; coste de la FFT contando multiplicaciones en una FFT recursiva; retardo de grupo por derivada numérica de la fase; promediado coherente por simulación con semilla. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Oppenheim-Schafer 3ª ed. (Pearson 2010), Lyons 3ª ed. (Pearson 2010).
- `ing-microelectronica-vlsi` (nuevo, rama de ingeniería): 16 ejercicios. Dos caminos por respuesta: esfuerzo lógico por la fórmula y por optimización numérica de los tamaños; número de etapas minimizando D(N) en enteros; Elmore por resistencias compartidas; línea distribuida simulando 200 tramos RC; umbral del inversor por bisección de corrientes; rendimiento de Poisson por simulación con semilla; capacidad por C_ox por área; oscilador contando flancos; SRAM integrando la descarga; DVFS y electromigración con valores explícitos. En el bloque Python se ajustó el paso de Euler (RC/10 por tramo) para que la simulación de la línea sea estable. Fuentes verificadas: Weste-Harris 4ª ed. (Addison-Wesley 2011), Rabaey-Chandrakasan-Nikolić 2ª ed. (Prentice Hall 2003).
- `ing-rf-microondas` (nuevo, rama de ingeniería): 16 ejercicios. Dos caminos por respuesta con aritmética compleja: Z_in de cuarto de onda y stub con la fórmula general; Z₀ de adaptación por bisección; ROE muestreando la onda estacionaria; red L comprobando la impedancia vista; Friis del ruido frente a temperaturas equivalentes; admitancia por el punto opuesto de la carta; estabilidad barriendo cargas pasivas; ganancia máxima por adaptación conjugada simultánea iterativa. Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: Pozar 4ª ed. (Wiley 2012), Ludwig-Bogdanov 2ª ed. (Pearson 2009).
Integridad de señal y alimentación (N5-6): BW 0,35/t_r y longitud crítica, Z₀ y retardo, celosía y terminaciones, TDR, NEXT/FEXT, pelicular y dieléctricas, ISI y ojo, jitter frente a BER, pares diferenciales, retorno y stubs de vía, PDN con impedancia objetivo. 16 ejercicios verificados con celosía, escalera LC simulada, PRBS-7 filtrada y bisección/Newton de la cola gaussiana; Python comprobado en Docker.
Diseño de ASIC (N5-6): flujo RTL→GDSII de celdas estándar, síntesis y Liberty, DFT (stuck-at, scan, ATPG), STA con sesgo, OCV y CRPR, partición KL/FM, HPWL y colocación cuadrática, Elmore y CTS, Lee/Steiner/Hanan, repetidores de Bakoglu, potencia, caída IR, electromigración (Black), DPW, Poisson y Murphy, coste, flujo abierto (Yosys, OpenROAD, LibreLane; SKY130, GF180MCU, SG13G2). 16 ejercicios verificados por fuerza bruta, simulación de fallos con dos simuladores, Gauss-Seidel, escalera RC e integración numérica; Python comprobado en Docker.
Sensores y actuadores (N4): encoders en cuadratura y Gray, velocidad por métodos M y T, IMU (sesgo, ARW, Allan), filtro complementario y Kalman estacionario, ultrasonidos, LiDAR/ToF, galgas en puente, motor de CC (curva par-velocidad, rendimiento), BLDC/FOC, paso a paso, servos, puente H y rizado, reductoras e inercia reflejada, par de pico y eficaz. 16 ejercicios verificados con señales de encoder simuladas, ODE del motor, filtros simulados, Riccati iterada y barridos; Python comprobado en Docker.
Dinámica de robots (N4): inercias y Steiner, inercia reflejada, Lagrange para brazos (M, C, g del brazo de dos eslabones), propiedades estructurales, Newton–Euler recursivo, dinámica directa, identificación por mínimos cuadrados, PD con compensación de gravedad, par calculado y espacio operacional. 16 ejercicios verificados con Lagrange frente a RNEA, Lagrange numérico, polarización de la energía, simulación RK4 y Cramer frente a Gauss; Python comprobado en Docker (incluye conservación de energía).
ROS 2 (N4): grafo de nodos, topics/servicios/acciones/parámetros, CDR, rmw (DDS/RTPS, Zenoh nivel 1 desde Kilted), dominios y puertos, QoS y compatibilidad, ejecutores y grupos de callbacks, ciclo de vida, tiempo simulado, tf2 y cuaterniones, REP 103/105, colcon/launch/rosbag2, ros2_control, Nav2, MoveIt 2, distribuciones (Jazzy LTS, Kilted, Lyrical LTS de mayo de 2026). 16 ejercicios verificados con colas y temporizadores simulados, serializador, enumeración de QoS, SLERP y matrices; Python comprobado en Docker y el nodo rclpy y la incompatibilidad de QoS probados en ros:jazzy-ros-core.
Percepción y SLAM (N5-6): filtro de Bayes, Kalman/EKF/UKF, Mahalanobis, filtros de partículas y remuestreo sistemático, rejillas de ocupación en log-odds, pinhole y distorsión, estéreo y su incertidumbre, geometría epipolar, RANSAC, ICP de forma cerrada, grafos de poses y cierres de bucle. 16 ejercicios verificados con matrices homogéneas, Bayes directo, Cholesky, búsqueda binaria, triangulación por rayos, jacobiano numérico, Gauss-Newton frente a rejilla y búsqueda ternaria; Python comprobado en Docker.
Planificación de movimiento (N5-6): C-espacio y Minkowski, Dijkstra/A*/heurísticas/grafo de visibilidad, PRM, RRT, RRT* (completitud probabilística y optimalidad asintótica), pasos estrechos, campos de potencial y mínimos locales, controladores locales, cúbicas, quínticas, trapecios, sincronización, parametrización temporal de dos pasadas y comprobación de colisiones. 16 ejercicios verificados con Bellman-Ford, Dijkstra en rejilla y en grafo de visibilidad, A* con heurística octil, derivadas numéricas, simulación, muestreo, Gauss-Legendre frente a poligonal y bisección; Python (A*, trapecios y un RRT) comprobado en Docker.
Control óptimo y MPC (N5-6): programación dinámica de Bellman, recursión y ecuación algebraica de Riccati, Pontryagin (mínima energía, mínimo tiempo y curva de conmutación), MPC lineal como QP condensado o disperso, coste y conjunto terminales, restricciones blandas, MPC explícito y robusto, MPC no lineal (disparo múltiple, SQP, RTI) y MPPI. 16 ejercicios verificados con mínimo exacto de la cuadrática, iteración de Riccati frente a doubling, serie de la exponencial, simulación bang-bang, rejillas, gradiente proyectado y Taylor; Python (incluye un MPC en lazo cerrado frente a LQR recortado) comprobado en Docker.
Control óptimo y MPC (N5-6): programación dinámica de Bellman, recursión y ecuación algebraica de Riccati, Pontryagin (mínima energía, mínimo tiempo y curva de conmutación), MPC lineal como QP condensado o disperso, coste y conjunto terminales, restricciones blandas, MPC explícito y robusto, MPC no lineal (disparo múltiple, SQP, RTI) y MPPI. 16 ejercicios verificados con mínimo exacto de la cuadrática, iteración de Riccati frente a doubling, serie de la exponencial, simulación bang-bang, rejillas, gradiente proyectado y Taylor; Python (incluye un MPC en lazo cerrado frente a LQR recortado) comprobado en Docker.
Bash y sh POSIX (scripting): análisis de una línea y orden de expansiones, comillas, "$@"/"$*", expansión de parámetros, aritmética, arrays, estados de salida y condiciones, lectura segura de archivos, redirecciones y here-docs, sustitución de procesos y de órdenes, funciones y subshells, getopts, modo estricto y sus excepciones, trap y mktemp, procesos y wait -n, POSIX frente a bash, ShellCheck y bats. Los 16 ejercicios son scripts reales: la respuesta razonada se comprueba ejecutándolos en bash 5.3, bash 5.2 y dash (los POSIX). El bloque del nodo se ejecuta en bash 5.3 y pasa ShellCheck; el script del ejemplo 1 se probó de verdad (rotación, validación, uso).
Procesar texto en Unix: filtros y locale, expresiones regulares BRE/ERE/PCRE (coincidencia más larga, ReDoS), grep, sed (direcciones, s///, edición portable), awk (campos, arrays asociativos, NR == FNR), cut/sort/uniq/comm/join/tr, find (-prune, -exec +, -print0), xargs, jq y make. Los 16 ejercicios son órdenes reales con datos: la respuesta razonada se comprueba con las herramientas GNU (Debian) y con BusyBox (Alpine). El bloque del nodo pasa en ambos entornos y ShellCheck; el Makefile del texto se probó con GNU make.
Scripting en Windows: cmd y archivos por lotes (expansión inmediata frente a retardada, %~dp0, subcadenas, if errorlevel, for /f, call :etiqueta, exit /b, CRLF), Windows PowerShell 5.1 frente a PowerShell 7.6 LTS, tubería de objetos, operadores, colecciones, desenrollado y cultura, funciones avanzadas con validación y entrada por tubería, módulos, PSScriptAnalyzer y Pester, errores terminantes y no terminantes, $LASTEXITCODE, remoting, política de ejecución y registros de seguridad. Los 16 ejercicios se ejecutan de verdad: .bat con el cmd.exe de Windows 11 y .ps1 con PowerShell 7.6.10 (imagen dotnet/sdk:10.0) y Windows PowerShell 5.1. Los bloques del nodo pasan en los tres intérpretes.
Rust I, fundamentos (edición 2024): cargo, ediciones y semver, tipos y desbordamiento explícito, UTF-8, propiedad y movimiento, Copy/clone, drop determinista, préstamos y NLL, vidas y elisión, structs, enums y patrones exhaustivos, Result y ?, errores propios, Vec/String/HashMap/iteradores, módulos y pruebas. Los 16 ejercicios son programas reales: la salida razonada (o el código de error E0xxx) se comprueba compilando con rustc 1.100 y con rustc 1.85. El programa del nodo pasa cargo clippy -D warnings, cargo run y cargo test.
Rust II, traits y genéricos: traits (por defecto, asociados, supertraits, generales, regla del huérfano, contratos de los estándar), genéricos y monomorfización (E0277), dyn Trait con vtable y compatibilidad con dyn (E0038), cierres Fn/FnMut/FnOnce, iteradores por dentro y collect en Result, Box/Rc/Weak/Cell/RefCell, operadores y diseño de tipos (newtype, builder, typestate, traits sellados). Los 16 ejercicios se compilan y ejecutan con rustc 1.100 y 1.85; el programa del nodo (árbol con Weak, typestate, estático frente a dinámico) pasa clippy -D warnings, run y test.
Rust III, concurrencia y async: hilos, scope, Send y Sync (E0373, E0277), Arc/Mutex con envenenamiento, RwLock, Condvar, Barrier, OnceLock, interbloqueos, atómicos y ordenaciones de memoria (Relaxed, Acquire/Release, SeqCst), canales y contrapresión, Future/poll/Waker/Pin y ejecutor mínimo, tokio (tareas Send, spawn_blocking, select!, timeout, Semaphore, JoinSet, cancelación). Los 16 ejercicios son programas deterministas compilados y ejecutados con rustc 1.100 y 1.85. El programa del nodo usa tokio con el reloj pausado y pasa clippy -D warnings, run y test.
Rust IV, unsafe, FFI y macros: las cinco operaciones de unsafe (E0133), cambios de la edición 2024, SAFETY y solidez, comportamiento indefinido y Miri, punteros crudos, NonNull, &raw y procedencia, repr(C)/transparent, MaybeUninit, transmute, std::alloc y Layout, abstracciones seguras (split_at_mut, Vec propio), FFI con C (unsafe extern, CString/CStr, propiedad, retrollamadas, pánicos), macros declarativas (fragmentos, repeticiones, recursión, higiene) y procedurales. Los 16 ejercicios se compilan y ejecutan con rustc 1.100 y 1.85, y los que usan unsafe sin FFI pasan Miri; el programa del nodo pasa clippy -D warnings, run, test y Miri (run y test).
Rust V, en producción: paquetes, workspaces, features aditivas, MSRV y resolver 3, perfiles; Rust API Guidelines y semver de cargo; thiserror frente a anyhow; pruebas (unitarias, integración, documentación, proptest, insta, fuzzing, servicios con oneshot); rendimiento con criterion y perfiladores; tracing, serde y configuración; tokio, axum, tower, sqlx y clap; CI y cadena de suministro (clippy -D warnings, cargo-deny, cargo-audit, compilación cruzada, imágenes en varias etapas). Los 16 ejercicios son proyectos de cargo con crates reales (semver, serde, thiserror, anyhow, clap, axum) construidos y ejecutados con Rust 1.100 y 1.85. El servicio del nodo pasa clippy -D warnings y sus pruebas, incluida una de propiedades. Cierra la serie de Rust.
C++ moderno I: estándares (C++23 vigente, C++26 terminado técnicamente en 2026), unidades de traducción y ODR, tipos e inicialización, clases y const, RAII y reglas de cero y cinco, categorías de valor y movimiento noexcept, elisión, unique_ptr/shared_ptr/weak_ptr, contenedores con coste e invalidación, string_view/span/optional/variant, algoritmos, lambdas y rangos, excepciones y garantías, std::expected, UB y sanitizadores. Los 16 ejercicios se compilan (C++23) y ejecutan con GCC 16.2 y Clang 22.1, incluido uno con AddressSanitizer; el programa del nodo pasa -Wall -Wextra -Wpedantic -Werror en ambos y ASan/UBSan.
C++ moderno II, programación genérica: plantillas de función y clase, parámetros de valor, especialización completa y parcial, deducción (decaimiento, referencias de reenvío y colapso, auto, decltype(auto)), resolución de sobrecargas con plantillas, SFINAE frente a conceptos y requires con subsunción, constexpr/consteval/constinit, static_assert, if constexpr, rasgos de tipo, variádicas y plegado, reenvío perfecto, CRTP y deducing this, borrado de tipos, despacho por etiquetas, listas de tipos. Los 16 ejercicios se compilan (C++23) y ejecutan con GCC 16.2 y Clang 22.1; el programa del nodo (unidades en el tipo, make_unique propio) pasa -Werror y sanitizadores en ambos.
C++ moderno III, en producción: jthread y stop_token, mutex y scoped_lock, variables de condición, latch/barrier/semáforos, futuros y grupos de hilos, modelo de memoria y cola SPSC, jerarquía de memoria y compartición falsa, SSO y crecimiento de vector, medición, CMake por objetivos (PRIVATE/INTERFACE/PUBLIC, FetchContent, presets), vcpkg y Conan, ABI y bibliotecas, sanitizadores (ASan/UBSan/TSan), análisis estático, pruebas, fuzzing y endurecimiento. Los 16 ejercicios se verifican con GCC 16.2 y Clang 22.1 (con TSan en contenedores sin restricción de seccomp) y uno con CMake 3.31; el programa del nodo pasa -Werror, ASan/UBSan en ambos compiladores y TSan sin informes. Cierra la serie de C++.
C profesional (C23): promociones y conversiones aritméticas, desbordamiento y <stdckdint.h>, tipos de anchura fija y formatos, duraciones, alineación, relleno, alias estricto y memcpy, restrict, arrays flexibles, comportamiento indefinido y optimizadores, APIs con tipos opacos, códigos de error, [[nodiscard]] y goto de limpieza, cadenas y entradas seguras, novedades de C23, avisos estrictos en dos compiladores, -fanalyzer, sanitizadores, Valgrind, gdb y volcados, análisis estático, fuzzing, CERT C y MISRA, endurecimiento. Los 16 ejercicios se compilan en C23 y ejecutan con GCC 16.2 y Clang 22.1 (incluidos ASan y UBSan); el programa del nodo pasa -Werror y sanitizadores en ambos.
Proyecto: shell de Unix en C en 8 hitos (órdenes, variables y estado, redirecciones, tuberías, comillas, operadores, segundo plano, guiones completos). Adjunto prueba.sh: ejecuta la shell del estudiante con los casos de cada hito y da un código por hito. Los 8 códigos se verificaron con una shell de referencia propia (C17, con ASan y UBSan, no publicada) y con dash: coinciden en los 8. Primer nodo de tipo proyecto.
Proyecto: almacén clave-valor en Rust en 8 hitos (órdenes en memoria, INCR, persistencia, registro y compactación atómica, servidor TCP, clientes concurrentes, durabilidad ante kill -9, rendimiento con pipelining). Adjunto prueba.sh que habla con el servidor por /dev/tcp. Los 8 códigos se verificaron con dos referencias independientes (Rust con std y Python con socketserver, no publicadas): coinciden en todos.
Laboratorio (análisis defensivo): forense de un servidor web comprometido a partir de auth.log, access.log de nginx, historial de root y crontab sintéticos. 10 preguntas (origen, intentos, usuarios probados, cuenta, hora, escalada con sudo, reconocimiento web de /.git/config, descarga, persistencia por cron, exfiltración) y flag EXODUS{IP_usuario_host} con 3 pistas. Registros generados de forma determinista (genera.py) y respuestas comprobadas con un análisis independiente en grep/awk; el spec verifica también que los adjuntos publicados son los generados. Primer nodo de tipo laboratorio.
Laboratorio (análisis defensivo): captura de red sintética de una oficina con un equipo infectado: baliza HTTP de mando y control cada 60 s, credenciales FTP en claro y exfiltración por túnel DNS (base32 en subdominios TXT). 9 preguntas y flag dentro de los datos exfiltrados, con 3 pistas. La captura (pcap escrito a mano con checksums) se genera de forma determinista y las respuestas se comprueban disecándola con tshark 4.0; el spec verifica además que la captura publicada es la generada.
Laboratorio (análisis defensivo): tres usos incorrectos de la criptografía con artefactos generados con OpenSSL: AES-128-CTR con nonce reutilizado (recuperar un mensaje con texto en claro conocido), AES-ECB que revela la estructura de una tabla, y MD5 sin sal frente a un diccionario. 6 preguntas, flag dentro del mensaje recuperado y 3 pistas. El spec regenera los artefactos, comprueba que coinciden con los publicados y los ataca sin la clave.
Laboratorio (auditoría defensiva): bastionado de un servidor Linux a partir de sshd_config con bloques Match, sudoers, permisos y crontab. 8 preguntas (configuración efectiva de SSH por usuario y origen, reglas de sudo que equivalen a una shell de root según GTFOBins, archivos escribibles por todos que ejecuta root, SUID no estándar, secretos legibles) y flag con 3 pistas. Comprobado con sshd -T y visudo -c de Debian 12 y con find sobre los permisos recreados.
Laboratorio (auditoría defensiva): bastionado de un servidor Linux a partir de sshd_config con bloques Match, sudoers, permisos y crontab. 8 preguntas (configuración efectiva de SSH por usuario y origen, reglas de sudo que equivalen a una shell de root según GTFOBins, archivos escribibles por todos que ejecuta root, SUID no estándar, secretos legibles) y flag con 3 pistas. Comprobado con sshd -T y visudo -c de Debian 12 y con find sobre los permisos recreados.
Proyecto: kit de operaciones en shell (kitops) en 6 hitos: respaldo con rotación y manifiesto SHA-256, verificación de integridad, auditoría de permisos (escribibles, SUID, grandes), resumen de registros de nginx, limpieza por antigüedad y robustez con códigos de salida y cerrojo flock. Adjunto prueba.sh; los 6 códigos se verificaron con dos referencias independientes (bash y Python): coinciden en todos.
Compiladores: léxico (Thompson, subconjuntos, minimización), LL(1) con FIRST/FOLLOW, Pratt y shunting-yard, LR(0)/SLR/LALR, AST y tipos con Hindley-Milner, tres direcciones, CFG, dominancia y SSA (Cytron), flujo de datos, optimizaciones, coloreado de registros, entornos de ejecución y GC. Mini compilador en Python verificado; 16 ejercicios comprobados por dos vías (el de nivel 3 ejecuta con GCC el ensamblador generado).
Proyecto: compilador de Mini (enteros de 64 bits, ámbito de bloque, if/while, funciones recursivas) a x86-64 en 8 hitos: léxico, sintáctico (AST en expresiones S), semántico, intérprete, código de main, funciones con la ABI System V, robustez y rendimiento (primos hasta 200 000 en <10 s), y plegado de constantes. Adjuntos prueba.sh y runtime.c; códigos verificados con dos referencias independientes (Python con pila AT&T; Node con Pratt, BigInt y código Intel con temporales en el marco).
Ensamblador ARM: AArch64 (registros, inmediatos aritméticos y lógicos, movz/movk, banderas y csel, direccionamiento y adrp, AAPCS64, memoria débil, exclusivos y LSE, NEON y SVE, PAC/BTI/MTE, llamadas al sistema) y Cortex-M con Thumb-2 (AAPCS32, marco de excepción, NVIC, hard faults). Programa C con ensamblador AArch64 ejecutado en arm64; 16 ejercicios comprobados ejecutando AArch64 real (contenedor arm64 emulado) y con un segundo cálculo.
Concurrencia en profundidad: SC, TSO y ARM con pruebas de tornasol, modelo de memoria de C11/C++/Rust (happens-before, órdenes, DRF-SC), cerrojos por dentro (TTAS, tique, MCS, futex), coordinación y patrones, interbloqueo e inversión de prioridad, linealizabilidad y progreso, Treiber/Michael-Scott, ABA, punteros de riesgo, épocas y RCU, Amdahl/Gustafson/Little, falso compartir, TSan y comprobación de modelos. Programa C limpio bajo TSan (GCC y Clang); 16 ejercicios verificados con un explorador exhaustivo de intercalaciones (SC y TSO), simulación y C real con TSan.
El núcleo Linux por dentro: arquitectura y arranque, llamadas al sistema (r10, rcx/r11, vDSO, strace), task_struct y EEVDF con pesos de nice, memoria (VMA, buddy, SLUB, GFP, OOM), VFS y controlador misc como módulo, interrupciones y trabajo diferido, sincronización del núcleo, espacios de nombres/cgroups/capacidades/seccomp, printk, oops, ftrace, perf y eBPF. 16 ejercicios comprobados en Linux real: contenedor (cabeceras, strace, /proc, ioctl, syscall con r10), cgroup con OOM, y núcleo 6.12 de Debian arrancado en QEMU (módulo propio, oops, unshare, seccomp estricto y reparto medido por nice: 75 %).
Sistemas distribuidos: modelos de sistema y de fallo, NTP, relojes de Lamport y vectoriales, HLC y TrueTime, replicación con y sin líder, quórums, modelos de consistencia, CAP/PACELC, FLP, Paxos, Raft (elección, replicación, compromiso), BFT, 2PC, sagas, Spanner, CRDT y difusión causal, hash consistente, gossip, cercado, idempotencia, Jepsen y simulación determinista. Programa Python verificado; 16 ejercicios comprobados simulando cada algoritmo.
Proyecto de cuántica: simulador de circuitos por vector de estado en 8 hitos (puertas de un cúbit, entrelazamiento, medida con colapso y control clásico con un generador fijado, Grover, QFT y estimación de fase, búsqueda del orden de Shor con factorización, ruido con matrices densidad y código de repetición). Contrato numérico reproducible (redondeo de x + 1e-12). Códigos verificados con dos referencias independientes (Python puro con fórmulas; Node con Shor y QFT por puertas y Kraus densos).
Proyecto de física: simulación de N cuerpos en 7 hitos (energía y momentos, fuerzas con suavizado, integradores Euler, Euler simpléctico, Verlet, RK4 y Yoshida 4, solución analítica de Kepler, orden de convergencia medido frente a Kepler, conservación a largo plazo y Barnes-Hut con recuento exacto de interacciones). Contrato numérico con suelo de redondeo (1e-12). Códigos verificados con dos referencias independientes.
Proyecto de matemáticas: biblioteca numérica validada en 7 hitos (raíces con raíz múltiple y parada engañosa, fenómeno de Runge y cuadraturas, EDO con problema rígido e implícito, pivoteo parcial, condicionamiento de Hilbert y mínimos cuadrados con QR, autovalores, multiplicación exacta de enteros de 10 000 cifras con FFT, suma compensada y cancelación). Códigos verificados con dos referencias independientes y el producto contra enteros exactos.
Proyecto de IA: diferenciación automática en modo inverso y redes desde cero en 6 hitos (grafo escalar, retropropagación con acumulación, MLP con entropía cruzada, entrenamiento con Glorot y datos generados, momentum y Adam, generalización con L2 y matriz de confusión). Comprobación exacta en entrenamientos cortos y con umbrales en los largos (la deriva por orden de suma es real). Códigos verificados con dos referencias independientes (C y un motor de tensores en Node).
Proyecto de robótica: navegación de un robot diferencial en 5 hitos (odometría con arcos exactos, localización con EKF y marcas con normalización de ángulos, A* con costes enteros y desempate exacto frente a Dijkstra, persecución pura, misión completa). Códigos verificados con dos referencias independientes.
Proyecto de ingeniería: cadena de procesado digital de señal en 6 hitos (FIR por ventana, filtrado y SNR con fase lineal, biquads IIR del Audio EQ Cookbook y estabilidad, coma fija Q15 con acumulador ancho, redondeo y saturación, diezmado polifásico idéntico bit a bit, decodificador DTMF con Goertzel y confirmación). Códigos verificados con dos referencias independientes.
Proyecto de ciberseguridad (defensivo): implementación desde cero y verificación contra los vectores oficiales de ChaCha20, Poly1305, ChaCha20-Poly1305 (RFC 8439), SHA-256, HMAC y HKDF (FIPS 180-4, RFC 2104, RFC 5869), AES (FIPS 197) y AES-GCM (SP 800-38D), con rechazo de manipulaciones y comparación en tiempo constante. 6 hitos verificados con Python puro y con OpenSSL (node:crypto).
SUPERPROYECTO proy-exodus-mision: vehículo de exploración en Marte en 9 hitos, uno por rama más la integración (física con RK4 y balance energético; trilateración Gauss-Newton y suavizado; batería con OCV y resistencia; mapa de pendientes y A*; tramas con CRC-32 por un canal con fallos y tiempos de respuesta monótonos en tasa; ChaCha20-Poly1305 con HKDF frente a repetición y falsificación; regresión logística y anomalías con mediana/MAD; BB84 con espía, QBER y Toeplitz; misión completa con código). Adjuntos prueba.sh y mision.txt. Códigos verificados con dos referencias independientes (Python puro y Node con OpenSSL).
Verificación formal: Hoare y wp, invariantes y variantes, comprobación de modelos (Kripke, LTL, CTL por puntos fijos, explosión de estados), SAT (DPLL/CDCL) y SMT, BMC, TLA+, interpretación abstracta, ejecución simbólica, asistentes de demostración y sistemas verificados. Programa Python (DPLL, comprobador de modelos de Peterson, CTL) verificado; 16 ejercicios comprobados por dos vías (DPLL frente a fuerza bruta, BFS frente a DFS con otra codificación, puntos fijos frente a enumeración de caminos, intervalos frente a ejecución).
Optimización del rendimiento: método (USE, perf, estadística robusta), jerarquía de memoria y tres C, TLB, localidad (orden de bucles, bloques, SoA), predicción de saltos, vectorización y sus límites, roofline. Simulador de caché y predictor en Python verificado; 16 ejercicios con dos simuladores LRU independientes, fórmulas, cachegrind sobre C real (proporción 16 columnas/filas) y el informe de vectorización de GCC.
- `sys-lenguajes-programacion` (nuevo, rama de sistemas): 16 ejercicios. Cada respuesta por dos vías: reductor del λ-cálculo con nombres y sustitución que evita capturas frente a reductor con índices de De Bruijn (mismo resultado y mismo número de pasos), inferencia Hindley-Milner frente al tipo de S del libro de Pierce, intérpretes con ámbito léxico y dinámico frente al cálculo a mano, comprobador de varianza frente al razonamiento a mano, parametricidad de ∀a. a → a → a por fuerza bruta (2), combinador Z ejecutado, WHILE con semánticas de pasos grandes y pequeños coincidentes. Bloque Python (De Bruijn + algoritmo W) ejecutado en python:3.12-slim; sus 31 pasos de MULT 2 3 coinciden con el reductor con nombres. Fuentes verificadas: Pierce TAPL (MIT 2002), Harper PFPL 2ª ed. (CUP 2016), Damas-Milner POPL 1982, Wadler FPCA 1989, Krishnamurthi PLAI 3ª ed. (2022).
- `lab-sys-depuracion` (nuevo laboratorio de sistemas): caída real de un agregador en C. Adjuntos: binario estático `-O0 -g`, volcado generado con gdb en el momento del SIGSEGV (comprimido), fuente, órdenes y registro. 14 ejercicios y flag, cada dato por dos vías: referencia en JS que interpreta las órdenes con la semántica del programa (incluido el desbordamiento de `nombre[16]` sobre `muestras`) frente a herramientas reales en gcc:latest sobre los adjuntos publicados (gdb con el volcado: marco, puntero 0x706d6574 = «temp», `s->n`, línea 1203, datos y sensores; ASan informa SEGV; FORTIFY=2 aborta en el `strcpy` de `alta` de la línea 1180; versión corregida con LeakSanitizer: 2176 bytes en 3 reservas; TOTAL 1454;208.393). Fuentes verificadas: manual de GDB, Serebryany et al. USENIX ATC 2012, Agans (AMACOM 2002).
- `lab-sys-rendimiento` (nuevo laboratorio de sistemas): resumen de un registro web que se vuelve cuadrático (búsqueda lineal de IP). Adjuntos medidos de verdad en una imagen debian:trixie con linux-perf, valgrind y hyperfine (`--privileged`): `perf report` con pilas DWARF y con puntero de marco (este atribuye `strcmp` a `main`: el error típico de desenrollado), `callgrind_annotate` inclusivo con árbol de llamantes, escalado de instrucciones y tiempos JSON. 13 ejercicios y flag; cada dato por dos vías: modelo en JS que reimplementa el generador y cuenta comparaciones (coincide exactamente con las 48 285 808 llamadas a `strcmp`, 4 417 711 de rutas y 233 835 `strlen` de callgrind) y, en gcc:latest, la solución con tabla hash sobre el día completo de 2 000 000 de líneas igual al modelo (199 991 IP, 47 908 217 115 bytes, ruta más pedida 219 914). Fuentes verificadas: Gregg (2020), Knuth vol. 3, Cormen 4ª ed., Crosby-Wallach USENIX Security 2003.
- `sec-seguridad-so` (nuevo, rama de ciberseguridad, enfoque de diseño y auditoría): 16 ejercicios. Cada respuesta por dos vías: modelo programado (clases POSIX, sticky, ACL con máscara, identidades de setuid, fórmula de capacidades de capabilities(7), intérprete BPF del filtro, retículos de Bell-LaPadula y Biba, esperanza de intentos frente a suma explícita) frente a medida real en la imagen local exodus-secso (debian:trixie: stat, setfacl/getfacl, setpriv con y sin no_new_privs, setcap y CapEff, capsh --decode, filtro seccomp compilado que devuelve EPERM, unshare --user). Bloque Python ejecutado en python:3.12-slim. Fuentes verificadas: CyBOK OSV v1.0.1 (Bos), Saltzer-Schroeder (Proc. IEEE 1975), Jaeger (Morgan & Claypool 2008).
- `sec-forense-logs` (nuevo, rama de ciberseguridad): 16 ejercicios. Cada respuesta por dos vías: cálculo en JS frente a herramientas reales en python:3.12-slim (logger imprime `<36>`, `stat` tras mv/chmod/escritura, `date -d` con zonas, regla de fuerza bruta en awk sobre el mismo auth.log, hashlib para la cadena de hashes, Python para entropía, orden temporal y traducción de direcciones). Lo normativo, comprobado en la fuente primaria: RFC 3227 §2.1 y RFC 5424 (rfc-editor.org), páginas de Microsoft Learn de 4688/4720/1102 y attack.mitre.org (T1110; T1070.001 redirige ahora a T1685.005). Los ejemplos del texto usan valores distintos de los ejercicios. Bloque Python ejecutado en python:3.12-slim. Fuentes: CyBOK Forensics v1.0.1 (Roussev), NIST SP 800-86, Carrier (2005), Ligh et al. (2014).
- `sec-reversing-malware` (nuevo, rama de ciberseguridad, solo análisis y defensa): 17 ejercicios. Cada respuesta por dos vías: cálculo en JS frente a herramientas reales en la imagen local exodus-malw (debian:trixie): `yara` sobre las cuatro muestras, `strings -n 4`, un PE real compilado con mingw para validar el imphash de JS contra `pefile.get_imphash()` y la traducción RVA → desplazamiento contra `get_offset_from_rva`, las constantes de características de pefile, y reimplementaciones independientes en Python (RC4, XOR, base64, entropía, balizas, DGA; esta última detectó una pérdida de precisión en la versión JS, corregida con BigInt). IDs de ATT&CK comprobados en attack.mitre.org (T1547.001, T1568.002, T1622). Ejemplos del texto con valores distintos (`npm run vault:fugas` limpio). Se corrige además el texto de `lab-sys-rendimiento` para no nombrar la función culpable. Fuentes: CyBOK Malware v1.0.1 (Lee), Sikorski-Honig (No Starch 2012), Mandiant (imphash, 2014).
- `sec-criptografia-aplicada` (nuevo, rama de ciberseguridad): 16 ejercicios. Cada respuesta por dos vías: node:crypto o implementación a mano frente a OpenSSL 3.5.7 y Python en la imagen local exodus-cripto (debian:trixie): `openssl kdf` HKDF y TLS13-KDF (HKDF-Expand-Label a mano), PBKDF2 con hashlib, cadena real con intermedia `CA:FALSE` (`openssl verify`: «invalid CA certificate»; el número de error cambió de 24 a 79 entre versiones, por eso se pregunta el mensaje), certificado caducado, `-checkhost` con comodines, tamaños reales de firmas Ed25519/RSA-3072 y de ML-KEM-768 (`genpkey`, `pkeyutl -encap`), X25519 con `pkeyutl -derive`, prefijos con `mkpasswd`. El bloque Python valida HKDF-Expand-Label con el vector del RFC 8448. Fuentes verificadas: OWASP Password Storage (600 000 iteraciones, Argon2id 19 MiB/2/1, en la página oficial), Signal X3DH, FIPS 203, RFC 9525 (comodín de una sola etiqueta), Boneh-Shoup v0.6.
- `sec-seguridad-redes` (nuevo, rama de ciberseguridad): 15 ejercicios. Cada respuesta por dos vías: JS frente a herramientas reales y Python en la imagen local exodus-red (debian:trixie): `ipaddress` (que detectó un prefijo mal alineado en los datos del ejercicio, 203.0.113.0/22, corregido a 203.0.112.0/22), `wpa_passphrase` para la PMK de WPA2, `dnssec-dsfromkey` para la etiqueta y el DS de un DNSKEY fijo, awk para la regla de escaneo, y reimplementaciones de cortafuegos, carreras DNS, RFC 6811, EUI-64 y BGP. Cifras normativas leídas en la fuente primaria: CISA TA14-017A (NTP 556,9; DNS 28-54; memcached 10 000-51 000), ip-sysctl del núcleo (63 s con tcp_synack_retries = 5), wireguard.com/protocol (Noise_IKpsk2). Bloque Python ejecutado en python:3.12-slim. Fuentes: CyBOK Network Security v2.0.0 (Rossow y Jha), Kurose-Ross 8ª ed., Donenfeld NDSS 2017.
- `sec-metodologia-pentest` (nuevo, rama de ciberseguridad; metodología de pruebas autorizadas, sin técnicas de explotación): 14 ejercicios. Cada respuesta por dos vías: CVSS 3.1 implementado según la especificación de FIRST (redondeo del apéndice A) frente a la biblioteca `cvss` 3.4 de Python; estados de nmap medidos de verdad en la imagen local exodus-pentest contra puertos del propio contenedor (abierto con http.server, cerrado, y filtrado con iptables DROP) y los 1000 puertos por defecto (`numservices`); alcance con ipaddress. Lo normativo leído en la fuente: FIRST CVSS 4.0 (métrica AT; desaparece S), CWE-89 y CWE-79 en cwe.mitre.org, matriz de riesgo de OWASP en su página oficial, política de 90 días de Project Zero, fases de PTES y de NIST SP 800-115. El bloque Python reproduce las puntuaciones canónicas 9.8, 7.8 y 6.1.
- `sec-cloud-contenedores` (nuevo, rama de ciberseguridad): 14 ejercicios. Cada respuesta por dos vías: evaluadores de IAM (Deny explícito, límite de permisos), Pod Security Standards `restricted`, NetworkPolicy y RBAC implementados en JS y, de forma independiente, en Python (python:3.12-slim); experimentos reales con Docker: `mount -t tmpfs` con y sin `--privileged`, `unshare -U` con el seccomp por defecto y sin él, `--read-only` con y sin `--tmpfs`, y un secreto copiado y borrado en la capa siguiente que no está en el contenedor pero sí en `docker save`; resumen SHA-256 de un manifiesto con node:crypto y sha256sum. Datos de la fuente oficial: IMDSv2 (TTL hasta 21600 s, límite de saltos 1) y lógica de evaluación de IAM en docs.aws.amazon.com, campos de PSS en kubernetes.io, niveles SLSA v1.0 en slsa.dev. Fuentes: NIST SP 800-190 (2017).
- `sec-criptoanalisis` (nuevo, rama de ciberseguridad, N5): 15 ejercicios sobre parámetros de juguete y fallos documentados. Cada respuesta por dos vías: JS con BigInt frente a Python con sympy 1.13.3 (`integer_nthroot`, `discrete_log` para BSGS y Pohlig-Hellman, convergentes de fracciones continuas para Wiener) e implementaciones independientes (Vigenère por IC y χ² con frecuencias del castellano, DDT/LAT de PRESENT, Fermat, MCD, relleno de SHA-256); las dos firmas ECDSA P-256 con nonce repetido se validan con OpenSSL (node:crypto) antes de recuperar la clave. Lecciones de la verificación: una clave de Vigenère con letras repetidas a distancia 3 hacía que la longitud 3 ya superase el umbral de IC (se usa una clave de longitud prima), y una raíz entera que partía de `Math.sqrt` se colgaba con números de 512 bits (Newton desde una potencia de 2). Fuentes: Stinson-Paterson 4ª ed., Heys (Cryptologia 2002), Boneh (Notices AMS 1999), Heninger et al. (USENIX Security 2012).
- `sec-seguridad-hardware` (nuevo, rama de ciberseguridad, N5): 13 ejercicios. Cada respuesta por dos vías: JS frente a un TPM 2.0 simulado en la imagen local exodus-tpm (debian:trixie con swtpm y tpm2-tools: `tpm2_pcrextend` y `tpm2_pcrread` sobre el PCR 16) y frente a Python con aritmética exacta (`Fraction` para la cola binomial de la PUF, MCD para Bellcore sobre una firma RSA-CRT defectuosa, decodificación de la traza SPA, Rowhammer, Flush+Reload, pesos y distancias de Hamming). Bloque Python ejecutado en python:3.12-slim. Fuentes: CyBOK Hardware Security v1.0.1 (Verbauwhede), Kocher 1996, Kocher-Jaffe-Jun 1999, Boneh-DeMillo-Lipton 1997, Yarom-Falkner 2014, Meltdown y Spectre, Kim et al. 2014.
- `sec-formal-protocolos` (nuevo, rama de ciberseguridad, N5): 11 ejercicios. Cada respuesta por dos vías: un modelo de Dolev-Yao (análisis hasta punto fijo y síntesis) implementado en JS y, de forma independiente, en Python, que comprueba que el intruso puede construir cada mensaje de la traza del ataque de Lowe, que B acepta y que Nb se filtra, y que con NSL A aborta; Diffie-Hellman con intruso en medio y cotas de juegos en los dos lenguajes. No se pudo usar ProVerif (no está en Debian y no hubo permiso para descargar y compilar el código fuente); queda como práctica sugerida en el nodo. Lo bibliográfico se contrastó: Lowe 1995/1997, Rusinowitch-Turuani CSFW 2001, Cremers et al. IEEE S&P 2016 (ataque del borrador 10, comunicado en la lista del IETF).
- `sec-gestion-riesgo` (nuevo, rama de ciberseguridad, N6): 14 ejercicios. Cálculos por dos vías (JS frente a Python) y una tercera comprobación por Monte Carlo del modelo Poisson × uniforme (media y probabilidad de un año sin incidentes dentro de tolerancia). Lo normativo, de la fuente primaria: funciones de NIST CSF 2.0 extraídas del PDF oficial (CSWP 29, 26-2-2024), plazos de BOD 22-01 en cisa.gov, fecha de SP 800-61r3 (abril de 2025) en csrc.nist.gov; ISO 27001:2022 (93 = 37 + 8 + 14 + 34), NIS2 (24 h/72 h/un mes) y RGPD art. 33 contrastados en varias fuentes. Con este nodo la rama de ciberseguridad queda completa en teoría.

### Nodos troncales comprimidos anteriores (cada uno con un reto con flag)

| Profundidad | Nodo |
|:---:|---|

- Commits en español, prefijos `feat` / `fix` / `chore` / `docs` / `content` / `test` / `ci`, con la
  línea `Co-Authored-By` que indique la sesión. Ramas por unidad de trabajo y PR con CI en verde; no se
  hace push directo a `main`.
- Formato de flag: `EXODUS{...}`. Nunca en claro en el repositorio.
- `database/exodus.db` y `.soluciones/` no se versionan.
