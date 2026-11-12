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
- **N3**: ✳️ `fis-mecanica-clasica` · ✳️ `fis-electromagnetismo` · ✳️ `fis-termo-estadistica` ·
  ✅ `fis-ondas-optica` · ✳️ `ing-circuitos` · ✳️ `ing-senales-sistemas`.

**Criterio de «fin del troncal»**: con solo el troncal, la persona resuelve problemas de nivel de grado en
matemáticas, programa con soltura en Python y C, entiende un ordenador de la lógica digital al sistema
operativo y la red, y domina física general y circuitos. Es la base de todo lo demás.

---

# RAMAS (desde N4)

Cada rama exige los nodos troncales que cita.

## Matemáticas (≈ 12 nodos)
- **N4**: ⬜ `mat-analisis-complejo` · ⬜ `mat-topologia` · ⬜ `mat-medida-integracion` · ⬜ `mat-edp` ·
  ⬜ `mat-teoria-numeros` · ⬜ `mat-optimizacion` · ⬜ `mat-procesos-estocasticos`.
- **N5-N6**: ⬜ `mat-analisis-funcional` · ⬜ `mat-geometria-diferencial` · ⬜ `mat-estadistica-matematica` ·
  ⬜ `mat-teoria-informacion` · ⬜ `mat-algebra-conmutativa-galois`.

## Física (≈ 10 nodos)
- **N4**: ✳️ `fis-mecanica-cuantica` · ⬜ `fis-relatividad-especial` · ⬜ `fis-fluidos` ·
  ⬜ `fis-mecanica-estadistica-avanzada` · ⬜ `fis-materia-condensada-1`.
- **N5-N6**: ⬜ `fis-teoria-cuantica-campos` · ⬜ `fis-relatividad-general` ·
  ⬜ `fis-fisica-nuclear-particulas` · ⬜ `fis-astrofisica`.

## Ingeniería y hardware (≈ 12 nodos)
- **N4**: ⬜ `ing-electronica-analogica` · ⬜ `ing-diseno-digital-hdl` · ⬜ `ing-pcb-diseno` ·
  ⬜ `ing-electronica-potencia` · ⬜ `ing-comunicaciones` · ⬜ `ing-procesado-digital-senal`.
- **N5-N6**: ⬜ `ing-microelectronica-vlsi` · ⬜ `ing-rf-microondas` · ⬜ `ing-integridad-senal` ·
  ⬜ `ing-diseno-asic`.

## Robótica (≈ 12 nodos)
- **N4**: ✳️ `rob-microcontroladores` · ⬜ `rob-sensores-actuadores` · ✳️ `rob-cinematica` ·
  ✳️ `rob-control` · ⬜ `rob-dinamica` · ⬜ `rob-ros2`.
- **N5-N6**: ⬜ `rob-percepcion-slam` · ⬜ `rob-planificacion-movimiento` · ⬜ `rob-control-optimo-mpc` ·
  ⬜ `rob-aprendizaje-robots`.

## Sistemas y programación avanzada (≈ 13 nodos; CS2023)
- **N4**: ✳️ `sys-ensamblador-x86-64` · ⬜ `prog-cpp` · ⬜ `prog-rust` · ⬜ `sys-ensamblador-arm` ·
  ⬜ `sys-compiladores` · ⬜ `sys-concurrencia` · ⬜ `sys-kernel-linux` · ⬜ `sys-sistemas-distribuidos`.
- **N5-N6**: ⬜ `sys-verificacion-formal` · ⬜ `sys-optimizacion-rendimiento` · ⬜ `sys-lenguajes-programacion`.

## Ciberseguridad (≈ 14 nodos; CyBOK)
- **N4**: ✳️ `sec-criptografia` · ✳️ `sec-web` · ✳️ `sec-explotacion-binaria` · ⬜ `sec-seguridad-so` ·
  ⬜ `sec-forense-logs` · ⬜ `sec-reversing-malware` · ⬜ `sec-criptografia-aplicada` ·
  ⬜ `sec-seguridad-redes` · ⬜ `sec-metodologia-pentest` · ⬜ `sec-cloud-contenedores`.
- **N5-N6**: ⬜ `sec-criptoanalisis` · ⬜ `sec-seguridad-hardware` · ⬜ `sec-formal-protocolos` ·
  ⬜ `sec-gestion-riesgo`.

## IA y computación cuántica (≈ 14 nodos)
- **N4**: ⬜ `ia-python-datos` · ✳️ `ia-aprendizaje-estadistico` · ⬜ `ia-redes-desde-cero` ·
  ✳️ `ia-redes-profundas` · ⬜ `ia-pytorch` · ✳️ `cua-computacion-cuantica`.
- **N5-N6**: ⬜ `ia-vision` · ⬜ `ia-nlp` · ⬜ `ia-transformers-llm` · ⬜ `ia-llm-locales` (Ollama, vLLM) ·
  ⬜ `ia-aprendizaje-refuerzo` · ⬜ `ia-modelos-generativos` · ⬜ `ia-bayesiana` ·
  ⬜ `cua-algoritmos-correccion-errores`.

---

## Orden de construcción

1. **Troncal N0 → N1**: matemáticas, programación y física base, más `tro-aprender-a-aprender`. Es la entrada
   de cualquier persona y lo que hoy más falta.
2. **Troncal N2**, con los nodos ✳️ existentes reubicados y enlazados.
3. **Troncal N3**: desdoblar los ✳️ en la profundidad que pide un grado.
4. **Ramas**, una por una, por prerrequisitos.

Los 27 nodos ya escritos se reubican en esta escalera (cambian de nivel y de prerrequisitos) y se amplían
donde falte profundidad; no se tiran.
