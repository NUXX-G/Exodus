# Currículo de Exodus

Mapa de todos los nodos. Niveles: N0 = 1º-2º de ESO … N6 = frontera (ver `PEDAGOGIA.md`).
Estado: ✅ existe y es suficiente, ✳️ existe como nodo troncal comprimido y hay que desdoblarlo en varios,
⬜ por escribir.

## Estructura: primero el troncal, después las ramas

El **troncal es la primera escalera** y la única que todos recorren. Son los cimientos: lo que hay que
dominar de verdad antes de especializarse. Cubre de N0 hasta un nivel de fundamentos equivalente a un
buen grado (N0 → N3, con N4 donde el tema lo exige). Solo entonces se **ramifica**: las ramas empiezan en
N4 y llegan a N6, y cada una exige completar sus prerrequisitos troncales.

```
TRONCAL  N0 ─ N1 ─ N2 ─ N3 ──┬── Matemáticas      N4 ─ N5 ─ N6
(cimientos, todos los         ├── Física           N4 ─ N5 ─ N6
 estudiantes)                 ├── Ingeniería       N4 ─ N5 ─ N6
                              ├── Robótica         N4 ─ N5 ─ N6
                              ├── Sistemas         N4 ─ N5 ─ N6
                              ├── Ciberseguridad   N4 ─ N5 ─ N6
                              └── IA y cuántica    N4 ─ N5 ─ N6
```

Hito en la plataforma: **«Troncal completado»** (todos los nodos N0-N3 troncales). Las ramas se pueden
leer siempre; sus retos se desbloquean con el grafo de prerrequisitos.

---

# TRONCAL (≈ 60 nodos)

Cuatro pilares, que se estudian entrelazados por nivel, no uno detrás de otro.

## T-A. Método y razonamiento (3 nodos)

- ✅ `tro-aprender-a-aprender` (N0): práctica de recuperación, espaciado, ejemplos resueltos, cómo usar Exodus.
- ✅ `tro-razonamiento-cientifico` (N1): método científico, estimación de Fermi, orden de magnitud, errores
  y cifras significativas, leer una fuente crítica.
- ✅ `tro-lectura-tecnica` (N2): leer manuales, estándares y artículos; buscar y verificar fuentes.

## T-B. Matemáticas fundamentales (≈ 22 nodos)

- **N0** (hechos): ✅ `mat-numeros-naturales` · ✅ `mat-enteros-fracciones` · ✅ `mat-proporcionalidad-porcentajes` ·
  ✅ `mat-algebra-basica` · ✅ `mat-geometria-basica` · ✅ `mat-funciones-basicas` (incluye estadística descriptiva).
- **N1** (hechos): ✅ `mat-algebra-secundaria` · ✅ `mat-trigonometria` · ✅ `mat-geometria-analitica` ·
  ✅ `mat-combinatoria-probabilidad-basica` · ✅ `mat-logica-demostraciones` (reescrito: técnicas de demostración con ejemplos que se desvanecen).
- **N2**: ✅ `mat-calculo-1` · ✅ `mat-calculo-2` · ✅ `mat-algebra-lineal-1` · ✅ `mat-algebra-lineal` (ahora «Álgebra lineal II», abstracto) · ✅ `mat-matematica-discreta`.
- **N3**: ✅ `mat-analisis-real` · ✅ `mat-calculo-multivariable` · ✅ `mat-ecuaciones-diferenciales` ·
  ✅ `mat-estructuras-algebraicas` · ✅ `mat-probabilidad` · ✅ `mat-estadistica-inferencia` ·
  ✅ `mat-analisis-numerico` · ✅ `mat-algebra-lineal-avanzada`.

## T-C. Computación fundamental (≈ 17 nodos)

- **N0-N1**: ✅ `prog-pensamiento-computacional` · ✅ `prog-python-fundamentos` · ✅ `prog-estructuras-datos` ·
  ✅ `prog-terminal-linux-git`.
- **N2**: ✅ `prog-algoritmos` (complejidad, ordenación, dividir y vencer, programación dinámica, voraces; CLRS) ·
  ✅ `sys-c-fundamentos` (tipos, representación, operadores, cadenas) · ✅ `sys-c-memoria` (punteros, disposición, memoria dinámica, UB) · ✅ `prog-poo-diseno` · ✅ `ing-logica-digital`.
- **N3**: ✅ `ing-arquitectura-computadores` · ✅ `sys-procesos-planificacion` (núcleo, procesos, descriptores, señales, planificación) · ✅ `sys-sistemas-operativos` (memoria virtual, reemplazo, concurrencia, archivos) · ✅ `sys-bases-datos` ·
  ✅ `sec-redes-tcpip` · ✅ `sys-redes-sockets` · ✅ `sec-fundamentos` (seguridad básica: toda persona que
  programa la necesita).

## T-D. Ciencias físicas e ingeniería básica (≈ 16 nodos)

- **N1 (hechos)**: ✅ `fis-medida-movimiento` · ✅ `fis-fuerzas-energia` · ✅ `fis-ondas-calor-fluidos` (sustituye a `fis-ondas-calor-carga`;
  la carga eléctrica está en el siguiente) · ✅ `ing-electricidad-basica`.
- **N2**: ✅ `fis-mecanica-newtoniana` · ✅ `fis-electricidad-magnetismo-1` · ✅ `ing-circuitos-dc-ac` ·
  ✅ `ing-medidas-laboratorio`.
- **N3**: ✅ `fis-mecanica-clasica` · ✅ `fis-electromagnetismo` · ✅ `fis-termo-estadistica` ·
  ✅ `fis-ondas-optica` · ✅ `ing-circuitos` · ✅ `ing-senales-sistemas`.

**Criterio de «fin del troncal»**: con solo el troncal, la persona resuelve problemas de nivel de grado en
matemáticas, programa con soltura en Python y C, entiende un ordenador de la lógica digital al sistema
operativo y la red, y domina física general y circuitos. Es la base de todo lo demás.

---

# RAMAS (desde N4)

Cada rama exige los nodos troncales que cita.

## Matemáticas (≈ 12 nodos)
- **N4**: ✅ `mat-analisis-complejo` · ✅ `mat-topologia` · ✅ `mat-medida-integracion` · ✅ `mat-edp` ·
  ✅ `mat-teoria-numeros` · ✅ `mat-optimizacion` · ✅ `mat-procesos-estocasticos`.
- **N5-N6**: ✅ `mat-analisis-funcional` · ✅ `mat-geometria-diferencial` · ✅ `mat-estadistica-matematica` ·
  ✅ `mat-teoria-informacion` · ✅ `mat-algebra-conmutativa-galois`.

## Física (≈ 10 nodos)
- **N4**: ✅ `fis-mecanica-cuantica` · ✅ `fis-relatividad-especial` · ✅ `fis-fluidos` ·
  ✅ `fis-mecanica-estadistica-avanzada` · ✅ `fis-materia-condensada-1`.
- **N5-N6**: ✅ `fis-teoria-cuantica-campos` · ✅ `fis-relatividad-general` ·
  ✅ `fis-fisica-nuclear-particulas` · ✅ `fis-astrofisica`.

## Ingeniería y hardware (≈ 12 nodos)
- **N4**: ✅ `ing-electronica-analogica` · ✅ `ing-diseno-digital-hdl` · ✅ `ing-pcb-diseno` ·
  ✅ `ing-electronica-potencia` · ✅ `ing-comunicaciones` · ✅ `ing-procesado-digital-senal`.
- **N5-N6**: ✅ `ing-microelectronica-vlsi` · ✅ `ing-rf-microondas` · ✅ `ing-integridad-senal` ·
  ✅ `ing-diseno-asic`.

## Robótica (≈ 12 nodos)
- **N4**: ✅ `rob-microcontroladores` · ✅ `rob-sensores-actuadores` · ✅ `rob-cinematica` ·
  ✅ `rob-control` · ✅ `rob-dinamica` · ✅ `rob-ros2`.
- **N5-N6**: ✅ `rob-percepcion-slam` · ✅ `rob-planificacion-movimiento` · ✅ `rob-control-optimo-mpc` ·
  ✅ `rob-aprendizaje-robots`.

## Sistemas y programación avanzada (≈ 25 nodos; CS2023)

Objetivo explícito: nivel **profesional** (de programador intermedio a sénior) en Rust, C y C++, y soltura real
con scripting y automatización. Por eso los lenguajes se desdoblan en varios nodos con código que compila y
pruebas que pasan, no en un resumen por lenguaje.

- **Scripting y automatización (N3-N4)**: ✅ `prog-bash-scripting` (bash y sh POSIX: expansiones, comillas,
  redirecciones, `set -euo pipefail`, `trap`, `getopts`, funciones, portabilidad, ShellCheck, pruebas con bats) ·
  ✅ `prog-unix-texto` (expresiones regulares, grep, sed, awk, find, xargs, sort/uniq/join, jq, make como
  automatizador) · ✅ `prog-powershell-batch` (cmd y `.bat`, PowerShell 7: objetos en la tubería, módulos,
  errores, remoting, Pester; equivalencias con bash).
- **C profesional (N4)**: ✅ `sys-c-fundamentos` y ✅ `sys-c-memoria` (troncal) · ✅ `sys-c-profesional`
  (C17/C23, comportamiento indefinido a fondo, diseño de API y de errores, Make/CMake, sanitizadores, Valgrind,
  gdb, pruebas, análisis estático, portabilidad y ABI).
- **C++ (N4-N5)**: ✅ `prog-cpp-moderno` (semántica de valor, RAII, movimiento, punteros inteligentes, STL y
  algoritmos, lambdas, errores y excepciones) · ✅ `prog-cpp-genericidad` (plantillas, deducción, SFINAE y
  concepts, constexpr, rangos, borrado de tipos) · ✅ `prog-cpp-profesional` (modelo de memoria y atómicos,
  hilos, rendimiento y caché, CMake, vcpkg/Conan, GoogleTest, sanitizadores, clang-tidy, ABI).
- **Rust (N4-N5), hasta nivel sénior**: ✅ `prog-rust-fundamentos` (propiedad, préstamos, vidas, enums y
  patrones, errores con `Result`, colecciones, cargo) · ✅ `prog-rust-traits-genericos` (traits, genéricos,
  objetos de trait, iteradores, cierres, punteros inteligentes, `Rc`/`RefCell`, módulos y crates) ·
  ✅ `prog-rust-concurrencia-async` (`Send`/`Sync`, hilos, canales, `Arc`/`Mutex`, atómicos, `async`/`await`,
  `Future` y `Pin`, tokio) · ✅ `prog-rust-unsafe-ffi-macros` (unsafe y sus invariantes, Miri, FFI con C,
  macros declarativas y procedurales) · ✅ `prog-rust-profesional` (diseño de API, errores con thiserror/anyhow,
  pruebas y propiedades, criterion, tracing, serde, servicios con axum, workspaces, CI, clippy, semver).
- **Sistemas (N4)**: ✅ `sys-ensamblador-x86-64` · ✅ `sys-ensamblador-arm` · ✅ `sys-compiladores` ·
  ✅ `sys-concurrencia` · ✅ `sys-kernel-linux` · ✅ `sys-sistemas-distribuidos`.
- **N5-N6**: ⬜ `sys-verificacion-formal` · ⬜ `sys-optimizacion-rendimiento` · ⬜ `sys-lenguajes-programacion`.

## Ciberseguridad (≈ 14 nodos; CyBOK)
- **N4**: ✅ `sec-criptografia` · ✅ `sec-web` · ✅ `sec-explotacion-binaria` · ⬜ `sec-seguridad-so` ·
  ⬜ `sec-forense-logs` · ⬜ `sec-reversing-malware` · ⬜ `sec-criptografia-aplicada` ·
  ⬜ `sec-seguridad-redes` · ⬜ `sec-metodologia-pentest` · ⬜ `sec-cloud-contenedores`.
- **N5-N6**: ⬜ `sec-criptoanalisis` · ⬜ `sec-seguridad-hardware` · ⬜ `sec-formal-protocolos` ·
  ⬜ `sec-gestion-riesgo`.

## IA y computación cuántica (≈ 14 nodos)
- **N4**: ⬜ `ia-python-datos` · ✅ `ia-aprendizaje-estadistico` · ⬜ `ia-redes-desde-cero` ·
  ✅ `ia-redes-profundas` · ⬜ `ia-pytorch` · ✅ `cua-computacion-cuantica`.
- **N5-N6**: ⬜ `ia-vision` · ⬜ `ia-nlp` · ⬜ `ia-transformers-llm` · ⬜ `ia-llm-locales` (Ollama, vLLM) ·
  ⬜ `ia-aprendizaje-refuerzo` · ⬜ `ia-modelos-generativos` · ⬜ `ia-bayesiana` ·
  ⬜ `cua-algoritmos-correccion-errores`.

---

# PRÁCTICA: PROYECTOS Y LABORATORIOS POR RAMA

La teoría de cada nodo ya trae ejercicios; esta capa añade práctica **grande**, la que en una carrera serían
las prácticas de laboratorio y el trabajo de fin de asignatura. Se ven en `/practica` (formato en
`docs/AMPLIAR.md`).

- **Proyectos** (`kind: proyecto`): construir algo real de principio a fin, en varios hitos de dificultad
  creciente. Cada hito tiene un contrato preciso y se comprueba con la salida del programa del estudiante para
  una entrada fija. Se resuelven con el código propio, nunca mirando una solución.
- **Laboratorios** (`kind: laboratorio`): situaciones realistas con archivos que analizar (registros, capturas
  de red, binarios, datos de sensores o de un experimento) hasta encontrar una flag, con pistas en tres niveles.
  En seguridad son siempre de análisis y defensa: forense, detección, ingeniería inversa y auditoría.

| Rama | Proyectos | Laboratorios |
|---|---|---|
| Matemáticas | ✅ `proy-mat-numerico` (biblioteca numérica validada: raíces, cuadratura, EDO, álgebra lineal) · ⬜ `proy-mat-algebra-computacional` (racionales, polinomios, factorización, Gröbner pequeño) | ⬜ `lab-mat-criptoaritmetica` (romper con teoría de números un esquema de juguete mal diseñado) |
| Física | ✅ `proy-fis-nbody` (N cuerpos con integradores simplécticos y conservación) · ⬜ `proy-fis-ising` (Monte Carlo, transición de fase, exponentes) · ⬜ `proy-fis-schrodinger` (ecuación de Schrödinger numérica: estados ligados, paquetes de onda, efecto túnel) | ⬜ `lab-fis-datos-experimentales` (ajuste con incertidumbres a datos medidos) |
| Ingeniería | ⬜ `proy-ing-cpu-riscv` (CPU RV32I en Verilog que pasa la batería de pruebas) · ✅ `proy-ing-filtros-dsp` (cadena de filtrado y diezmado en punto fijo) | ⬜ `lab-ing-iq-demodulacion` (demodular una grabación IQ hasta leer el mensaje) |
| Robótica | ✅ `proy-rob-robot-movil` (simulador, odometría, EKF, A*, seguimiento de trayectorias) · ⬜ `proy-rob-brazo` (cinemática, dinámica y control por par calculado de un brazo de 3 GDL) | ⬜ `lab-rob-fusion-sensores` (reconstruir una trayectoria a partir de registros de IMU y encoders) |
| Sistemas | ✅ `proy-sys-shell-c` (shell de Unix en C: tuberías, redirecciones, señales, trabajos) · ✅ `proy-sys-kv-rust` (almacén clave-valor persistente y concurrente en Rust con protocolo de red) · ✅ `proy-sys-compilador` (compilador de un lenguaje pequeño a ensamblador) · ✅ `proy-sys-automatizacion` (kit de copias, auditoría y despliegue en bash y PowerShell) | ⬜ `lab-sys-depuracion` (diagnosticar un fallo a partir de un volcado y sus registros) · ⬜ `lab-sys-rendimiento` (encontrar el cuello de botella en trazas de perf) |
| Ciberseguridad | ⬜ `proy-sec-ids` (detector de intrusiones sobre capturas y registros) · ✅ `proy-sec-cripto-verificada` (AES-GCM y ChaCha20-Poly1305 contra vectores oficiales) | ✅ `lab-sec-forense-servidor` · ✅ `lab-sec-captura-red` · ✅ `lab-sec-reversing-crackme` · ✅ `lab-sec-cripto-mal-usada` · ✅ `lab-sec-hardening` |
| IA | ✅ `proy-ia-autograd` (motor de diferenciación automática y red desde cero) · ⬜ `proy-ia-mini-gpt` (transformer pequeño entrenado y evaluado) · ⬜ `proy-ia-aprendizaje-refuerzo` (agente que aprende a controlar un sistema físico simulado) | ⬜ `lab-ia-fuga-de-datos` (encontrar la fuga que infla las métricas de un modelo) |
| Cuántica | ✅ `proy-cua-simulador` (simulador de circuitos por vector de estado: puertas, medida, Grover, QFT y Shor pequeño, ruido y corrección de errores) | ⬜ `lab-cua-tomografia` (reconstruir un estado y detectar un espía en BB84 a partir de recuentos de medidas) |

## SUPERPROYECTO: la misión Exodus (todas las ramas)

✅ `proy-exodus-mision` (en `vault/08-superproyecto/`)

Un proyecto final que integra todas las ramas en un solo sistema: un **vehículo autónomo de exploración planetaria
simulado**, con su software de a bordo, su estación de tierra y su enlace seguro. Cada hito usa una rama y produce un
artefacto que el siguiente necesita; el hito final ejecuta la misión completa y da un código que solo sale si todo
encaja. Requiere haber hecho antes los proyectos de cada rama.

| Hito | Rama | Qué se construye |
|---|---|---|
| 1 | Física | Simulador del vehículo: dinámica de un robot diferencial sobre terreno con pendientes y rozamiento, integrador con paso controlado y conservación comprobada |
| 2 | Matemáticas | Estimación y optimización: filtro de Kalman extendido para la posición y planificación de trayectorias como problema de optimización con restricciones |
| 3 | Ingeniería | Cadena de sensores: modelo de IMU y encoders con ruido, filtrado digital en punto fijo y presupuesto de energía con un modelo de batería |
| 4 | Robótica | Navegación: mapa de ocupación, A* o RRT*, seguimiento con control predictivo, evitación de obstáculos |
| 5 | Sistemas | Software de a bordo en Rust (tareas concurrentes con plazos, registro persistente) y estación de tierra con telemetría replicada |
| 6 | Ciberseguridad | Enlace seguro: telemetría autenticada y cifrada (AEAD), protección contra repetición, modelo de amenazas y análisis forense de un incidente simulado |
| 7 | IA | Percepción: clasificación del terreno a partir de datos de sensores con una red entrenada y evaluada sin fugas, y detección de anomalías en la telemetría |
| 8 | Cuántica | Distribución de la clave del enlace con BB84 simulado, estimación del QBER, detección de un espía y amplificación de privacidad |
| 9 | Integración | La misión completa: del despliegue a la recogida de muestras, con fallos inyectados (sensor degradado, pérdida de enlace, ataque) y un informe final |

Cada hito se comprueba como los demás proyectos: un programa de prueba adjunto ejecuta el código del estudiante con
entradas fijas y da un código si el contrato se cumple. Se construye cuando estén los proyectos de cada rama.

## RECURSOS POR RAMA

Además de la bibliografía de cada nodo, cada rama tiene una página de **recursos recomendados** (`/recursos`):
canales de YouTube y cursos en español y en inglés, libros por nivel y herramientas, con lo que aporta cada uno.
Viven en `vault/_recursos/<área>.md` y cada recomendación se comprueba (que existe, en qué idioma está y de qué
trata) en más de una fuente.

---

## Orden de construcción

1. **Troncal N0 → N1**: matemáticas, programación y física base, más `tro-aprender-a-aprender`. Es la entrada
   de cualquier persona y lo que hoy más falta.
2. **Troncal N2**, con los nodos ✳️ existentes reubicados y enlazados.
3. **Troncal N3**: desdoblar los ✳️ en la profundidad que pide un grado.
4. **Ramas**, una por una, por prerrequisitos.
5. **Ampliación de noviembre de 2026** (petición expresa): scripting (bash, utilidades de texto, PowerShell y
   batch), después Rust, C y C++ en profundidad, después los proyectos y laboratorios de Sistemas y Ciberseguridad,
   el resto de nodos de Sistemas, Ciberseguridad e IA, y por último los proyectos y laboratorios de las demás ramas.

Los 27 nodos ya escritos se reubican en esta escalera (cambian de nivel y de prerrequisitos) y se amplían
donde falte profundidad; no se tiran.
