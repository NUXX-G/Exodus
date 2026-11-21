# Contenido de matemáticas: mapa, plan y revisiones (fase 10)

La rama de matemáticas va desde el final del troncal (2.º de Bachillerato, fase 9) hasta **nivel máster**. La
referencia es el **Grado en Matemáticas de la UNED**, que es la parte matemática del Doble Grado en Matemáticas y Física
que el usuario quiere cursar (`docs/contenido/uned-doble-grado.md`), y el **Máster Universitario en Matemáticas
Avanzadas de la UNED**, que es su continuación natural. Los ids no cambian: muchos nodos de nivel grado viven en
`vault/00-troncal/matematicas/` por razones históricas y siguen ahí (mover archivos no cambia ids, pero tampoco aporta
nada).

## a) Fuentes de referencia (y por qué)

1. **Guías docentes del Grado en Matemáticas de la UNED, curso 2026-27** (las mismas asignaturas en el doble grado).
   Páginas `https://www.uned.es/universidad/inicio/estudios/grados/grado-en-matematicas/asignaturas.html?codTitulacion=6102&codAsignatura=<código>`,
   consultadas el 2026-11-21 (temario y bibliografía básica de 19 asignaturas; los PDF de las guías no se leyeron).
   *Por qué*: es exactamente lo que el usuario estudiará y con qué libro; seguir sus temas garantiza que Exodus sirva
   para aprobar, y los textos base (casi todos de Sanz y Torres o de la Editorial UNED) son la «fuente concreta» de cada
   nodo, junto con un clásico internacional accesible para contrastar.
2. **Máster Universitario en Matemáticas Avanzadas (UNED, código 215201), guía 2026-27**:
   <https://www.uned.es/universidad/inicio/estudios/masteres/master-universitario-en-matematicas-avanzadas.html>,
   consultada el 2026-11-21. 60 créditos: 4 asignaturas de 7,5 de un catálogo de 24 (cuatro especialidades: Análisis
   Matemático; Álgebra, Geometría y Topología; Estadística e Investigación Operativa; Matemática Aplicada) y un TFM de 30.
   *Por qué*: fija qué es «nivel máster» en la misma universidad y con el mismo estilo; Exodus cubre el **núcleo común**
   que recomiendan varias especialidades, no las 24 optativas (ver la tabla de máster).

Códigos de las asignaturas de grado leídas: Lenguaje matemático 61021039, Geometría básica 61021105, Funciones de una
variable II 61021074, Geometrías lineales 61022010, Funciones de varias variables II 61022027, Programación lineal y
entera 61022062, Análisis numérico matricial 61022085, Cálculo de probabilidades I 61022033, Variable compleja 61022079,
Álgebra 61022091, Estructuras algebraicas 6102204-, Topología 61023015, Introducción a los espacios de Hilbert 61023044,
Campos y formas 61023050, Cálculo de probabilidades II 61023038, Análisis de Fourier y EDP 61023073, Inferencia
estadística 61023104, Resolución numérica de ecuaciones 6102308-, Sistemas dinámicos (optativa) 61044098.

### Temario y texto base de las guías (resumen, para redactar)

Leídas el 2026-11-21 con el mismo patrón de URL (`codAsignatura` entre paréntesis).

- **Matemática discreta** (61021051). Tema 1, teoría elemental de números: división y Euclides, primos y factorización,
  inducción, ecuaciones diofánticas, congruencias, sistemas de numeración y criterios de divisibilidad. Tema 2, grafos:
  grafos, digrafos y multigrafos, eulerianos y hamiltonianos, exploración, mapas y coloraciones. Tema 3, combinatoria:
  técnicas básicas, permutaciones, variaciones y combinaciones, binomio, inclusión-exclusión, recurrencias. Texto base:
  Bujalance et al., *Elementos de Matemática Discreta*, 3.ª ed., Sanz y Torres.
- **Álgebra lineal I** (61021016). Matrices (Gauss, rango, inversa, determinante); sistemas (Rouché-Frobenius); espacios
  vectoriales (base, coordenadas, cambio de base, subespacios, suma e intersección, cociente); aplicaciones lineales
  (núcleo, imagen, matriz, endomorfismos, proyecciones y simetrías, dual). Texto base: Borobia y Estrada, *Álgebra
  Lineal y Geometría Vectorial*, 2.ª ed., Sanz y Torres, 2019, caps. 1-4.
- **Álgebra lineal II** (61021068). Formas canónicas (diagonalización, Jordan, Jordan real); subespacios invariantes;
  formas bilineales y cuadráticas (congruencia, clasificación real); espacio euclídeo (ortonormales, proyección,
  diagonalización ortogonal); isometrías (clasificación en dimensión 2 y 3, Cartan-Dieudonné). Borobia y Estrada, caps.
  5-9; Axler como recomendado.
- **Funciones de una variable I** (61021022). Sucesiones; los reales; límites infinitos; topología de ℝ; límites de
  funciones; continuas; derivables; derivables en intervalos; Taylor; límites superior e inferior; series (I y II).
  Texto base: Fernández Novoa, *Análisis Matemático I*, UNED.
- **Funciones de varias variables I** (61021080). Geometría del espacio euclídeo (escalar, vectorial, cilíndricas y
  esféricas); continuidad; diferenciación (diferencial, parciales, cadena, gradiente, direccionales); orden superior,
  Taylor, hessiana, máximos y mínimos. Texto base: Marsden y Tromba, *Cálculo Vectorial*, 6.ª ed.
- **Estadística básica** (61021045). R; descriptiva; probabilidad; modelos; muestreo; intervalos; contrastes;
  no paramétricos; ANOVA; regresión y correlación. Texto base: García Pérez, *Estadística Básica con R*, 2.ª ed., UNED,
  2023.
- **Introducción a las ecuaciones diferenciales** (61023021). Conceptos; primer orden (separables, homogéneas, lineales,
  Bernoulli, exactas, factor integrante); existencia y unicidad (Peano, Picard-Lindelöf); modelos; lineales de orden
  superior; sistemas lineales; Laplace. Texto base: Simmons, *Ecuaciones diferenciales con aplicaciones y notas
  históricas*.
- **Geometría diferencial de curvas y superficies** (61023067). Curvas planas y en el espacio (Frenet, teorema
  fundamental); superficies; geometría intrínseca (primera forma, geodésicas, isometrías); Weingarten, segunda forma,
  curvaturas; Christoffel, *Theorema Egregium*, Gauss-Bonnet. Texto base: Costa, Gamboa y Porto, *Geometría Diferencial
  de Curvas y Superficies*, Sanz y Torres.

## a) Mapa: asignaturas del grado → nodos

Leyenda: ✔ cubierto · ◐ parcial (qué falta) · ✗ hueco (nodo nuevo en el plan). Entre paréntesis, el texto base de la guía.

| Curso | Asignatura (texto base) | Temas de la guía | Nodo de Exodus | Estado |
| --- | --- | --- | --- | --- |
| 1.º | Álgebra lineal I | sistemas, matrices, determinantes, espacios, autovalores | `mat-algebra-lineal-1` | ✔ |
| 1.º | Funciones de una variable I | límites, continuidad, derivadas | `mat-calculo-1` (troncal), `mat-analisis-real` §2-§5 | ✔ |
| 1.º | Lenguaje matemático, conjuntos y números (Delgado y Muñoz, Sanz y Torres) | lógica; conjuntos; relaciones y aplicaciones; operaciones internas; naturales y enteros; racionales y reales; complejos | `mat-logica-demostraciones` (lógica, conjuntos, relaciones, funciones) | ◐ falta la construcción de $\mathbb N$ (Peano), $\mathbb Z$, $\mathbb Q$, $\mathbb R$ y $\mathbb C$, cardinalidad y operaciones internas → ✗ `mat-conjuntos-numeros` |
| 1.º | Estadística básica | descriptiva, probabilidad, inferencia elemental | `mat-estadistica-bidimensional` (troncal), `mat-probabilidad`, `mat-estadistica-inferencia` | ✔ |
| 1.º | Matemática discreta | lógica, inducción, recurrencias, grafos, aritmética modular | `mat-matematica-discreta` | ✔ |
| 1.º | Álgebra lineal II | espacios abstractos, aplicaciones, diagonalización, producto interior | `mat-algebra-lineal`, `mat-algebra-lineal-avanzada` (Jordan) | ✔ |
| 1.º | Funciones de una variable II (Fernández Novoa, *Análisis Matemático I*, UNED) | Riemann, TFC, exp/log/trig, primitivas, impropias, eulerianas, sucesiones y series de funciones, potencias | `mat-calculo-2`, `mat-analisis-real` §6-§7 | ◐ faltan las integrales eulerianas (Γ, B): se añaden a `mat-calculo-2` |
| 1.º | Funciones de varias variables I | límites, diferenciabilidad, cadena, Taylor | `mat-calculo-multivariable` §2-§5 | ✔ |
| 1.º | Geometría básica (Costa y Buser, Sanz y Torres) | espacios métricos; axiomas euclídeos; isometrías del plano y del espacio; Tales, Pitágoras, semejanzas; inversión; geometría hiperbólica; construcciones con regla y compás; poliedros | `mat-movimientos-plano`, `mat-geometria-basica` (troncal, nivel ESO) | ✗ el nivel axiomático → `mat-geometria-euclidea` |
| 2.º | Geometrías lineales (Costa y Lafuente; Outerelo y Sánchez Abril) | espacios y aplicaciones afines, teorema fundamental, endomorfismos afines, geometría euclídea, isometrías y su clasificación, semejanzas; espacio proyectivo, dualidad, razón doble, homografías, cuádricas | — | ✗ → `mat-geometrias-lineales` |
| 2.º | Funciones de varias variables II (Marsden y Tromba) | extremos y Lagrange; función implícita e inversa; campos, divergencia, rotacional; integrales dobles y triples; cambio de variable; impropias | `mat-calculo-multivariable` §5-§7, `mat-optimizacion` §3 | ◐ faltan los teoremas de la función inversa e implícita, el cambio de variable con jacobiano demostrado y las integrales de línea y superficie con Green, Stokes y Gauss → ✗ `mat-calculo-vectorial` |
| 2.º | Introducción a los espacios de Hilbert (Tello, *Introducción al análisis funcional*) | topología y Baire; Lebesgue; Banach, Hahn-Banach, Banach-Steinhaus; $C(K)$, Ascoli-Arzelà, Stone-Weierstrass; $L^p$; Hilbert, proyección, Riesz, adjuntos, compactos | `mat-medida-integracion`, `mat-analisis-funcional` | ◐ faltan Baire y sus consecuencias, Ascoli-Arzelà y Stone-Weierstrass: se añaden a `mat-analisis-funcional` |
| 2.º | Introducción a las ecuaciones diferenciales | primer orden, lineales, sistemas, Laplace | `mat-ecuaciones-diferenciales` | ✔ |
| 2.º | Programación lineal y entera (Ramos, Sanz y Torres) | modelos, convexos, simplex, dualidad, análisis de sensibilidad; programación entera (ramificación y acotación, planos de corte); transporte y asignación | `mat-optimizacion` §5 (PL y dualidad, una sección) | ✗ → `mat-programacion-lineal-entera` |
| 2.º | Variable compleja (Fernández Arias) | complejas, holomorfía, Cauchy, singularidades, residuos, transformación conforme | `mat-analisis-complejo` | ✔ |
| 2.º | Análisis de Fourier y EDP (Tello, *EDP*) | primer orden; Sturm-Liouville; series de Fourier; clasificación; elípticas, parabólicas, hiperbólicas; transformada de Fourier | `mat-edp` | ◐ faltan Sturm-Liouville, la teoría de las series de Fourier (convergencia, Parseval) y la transformada de Fourier → ✗ `mat-analisis-fourier` |
| 3.º | Topología (Arregui, UNED) | espacios, bases, entornos, continuidad; topologías inducida, producto, cociente; compacidad y conexión | `mat-topologia` | ◐ faltan la topología producto y la cociente: se añaden a `mat-topologia` |
| 3.º | Estructuras algebraicas (Bujalance, Etayo y Gamboa) | grupos, Lagrange, cocientes, isomorfía, abelianos finitamente generados, acciones, Cayley, Cauchy-Frobenius | `mat-estructuras-algebraicas` | ◐ faltan las acciones de grupos (órbitas, estabilizadores, Burnside) y el teorema de estructura de los abelianos finitamente generados: se añaden |
| 3.º | Cálculo de probabilidades I (Hernández y Vélez, UNED) | modelo, inclusión-exclusión, condicionada, variables, esperanza, pruebas repetidas | `mat-probabilidad` | ✔ |
| 3.º | Álgebra (Gamboa y Ruiz, *Anillos y cuerpos*) | anillos, divisibilidad, polinomios e irreducibilidad, extensiones, Galois | `mat-algebra-conmutativa-galois`, `mat-estructuras-algebraicas` §5-§6 | ✔ |
| 3.º | Análisis numérico matricial e interpolación (Moreno, UNED) | estabilidad y errores; sistemas (directos e iterativos); autovalores; aproximación; interpolación; cuadratura | `mat-analisis-numerico` | ◐ todo en un nodo y sin métodos iterativos ni autovalores ni aproximación por mínimos cuadrados continua → ✗ `mat-algebra-lineal-numerica` |
| 4.º | Campos y formas (López Gordón y Jiménez, *Integración en variedades*) | variedades; campos y formas; integración y Stokes; Poincaré, Brouwer, teorema fundamental del álgebra | `mat-geometria-diferencial` §6-§7 | ◐ solo un resumen → ✗ `mat-variedades-formas` |
| 4.º | Cálculo de probabilidades II (Vélez, UNED) | probabilidad en $\mathbb R^k$ con medida, condicionadas, función característica, normal multivariante, convergencias, TCL, leyes de los grandes números | `mat-probabilidad` §6-§7, `mat-medida-integracion` §8 | ✗ el nivel con medida → `mat-probabilidad-avanzada` |
| 4.º | Geometría diferencial de curvas y superficies | curvas, Frenet, formas fundamentales, Gauss, Gauss-Bonnet | `mat-geometria-diferencial` §2-§5 | ✔ |
| 4.º | Resolución numérica de ecuaciones (Moreno, UNED, parte II) | ecuaciones y sistemas no lineales; ecuaciones en diferencias; problemas de valor inicial y de contorno para EDO | `mat-analisis-numerico` §3, `mat-ecuaciones-diferenciales` §8 | ✗ → `mat-numerico-ecuaciones-edo` |
| 5.º | Inferencia estadística (Vélez y García Pérez, UNED) | muestreo normal, intervalos, estimación puntual y de mínimo riesgo, métodos, contrastes, razón de verosimilitudes, χ² | `mat-estadistica-inferencia`, `mat-estadistica-matematica` | ✔ |
| optativa | Sistemas dinámicos (Strogatz) | flujos en 1D, bifurcaciones, plano de fases, ciclos límite y Poincaré-Bendixson, Hopf, Lorenz y caos, aplicación logística | `mat-ecuaciones-diferenciales` §6 (plano de fases lineal) | ✗ → `mat-sistemas-dinamicos` |

Nodos que **no** corresponden a ninguna asignatura del doble grado y se quedan como ampliación útil para otras ramas:
`mat-teoria-numeros` (criptografía), `mat-teoria-informacion` (IA, comunicaciones), `mat-procesos-estocasticos`
(probabilidad II, colas, finanzas) y `mat-optimizacion` (IA). Ninguno sobra ni está fuera de orden.

## a) Mapa: máster (UNED, Matemáticas Avanzadas) → nodos

El usuario cursará 4 de 24 asignaturas; Exodus cubre las que la guía recomienda en varias especialidades o que son base
de otras ramas, y deja fuera las muy especializadas.

| Asignatura del máster | Nodo de Exodus | Estado |
| --- | --- | --- |
| Teoría de la medida | `mat-medida-integracion` | ✔ |
| Análisis funcional | `mat-analisis-funcional` | ✔ (con lo que se añade en el grado) |
| Álgebra lineal avanzada | `mat-algebra-lineal-avanzada` | ✔ |
| Geometría diferencial | `mat-geometria-diferencial`, `mat-variedades-formas` | ✔ tras el plan |
| Análisis complejo | `mat-analisis-complejo` | ✔ |
| Ecuaciones diferenciales ordinarias y sistemas dinámicos | `mat-sistemas-dinamicos` | ✗ (en el plan del grado) |
| Análisis no lineal de EDPs; Introducción a los métodos numéricos en problemas variacionales; Optimización en espacios de Banach | `mat-analisis-funcional` §6 (Sobolev, un resumen) | ✗ → `mat-edp-variacional` (formulación débil, Lax-Milgram, métodos directos del cálculo de variaciones, elementos finitos) |
| Topología algebraica | `mat-topologia` §7 (un resumen) | ✗ → `mat-topologia-algebraica` |
| Combinatoria de las coloraciones | `mat-matematica-discreta` §6 | ✗ → `mat-grafos-coloraciones` |
| Iniciación a la investigación en teoría de juegos | — | ✗ → `mat-teoria-juegos` |
| Estadística matemática en la ciencia de datos | `mat-estadistica-matematica` | ✔ |
| Optimización convexa en ciencia de datos | `mat-optimizacion` | ✔ |
| Fundamentos del aprendizaje estadístico; Modelos gráficos probabilísticos | `ia-aprendizaje-estadistico`, `ia-bayesiana` | rama de IA (fase 14) |
| Información cuántica; Matemáticas aplicadas a la mecánica cuántica | nodos de cuántica | rama de cuántica (fase 15) |
| Criptografía | `mat-teoria-numeros`, nodos de criptografía | rama de ciberseguridad (fase 17) |
| Superficies de Riemann; Análisis geométrico y aplicaciones; Teoría de orbifolds; Fibrados principales y Yang-Mills | — | fuera de alcance por ahora: optativas muy especializadas de una sola especialidad; se reconsiderarán si el usuario elige esa especialidad |

## b) Plan

No se cambian ids ni áreas, así que el progreso guardado no se ve afectado (no hay ⛔). El trabajo es de dos tipos y va
en el orden de los cursos de la UNED (primero lo que el usuario necesita antes):

- **Puesta al día** de los nodos que ya existen, con el método de la fase 9 (descrito en el «Registro de redacción» de
  `docs/contenido/troncal.md`):
  - bloque práctico y después formal en cada sección, y términos nuevos en el glosario;
  - demostraciones en bloques formales;
  - ejercicios con variantes comprobadas dos veces y banco de repaso `r-*`;
  - fuente concreta: capítulo o sección del texto base de la guía y de un clásico internacional, **comprobada** antes de
    citarla;
  - lo que falta según el mapa.
- **Nodos nuevos** (15), con la misma receta.

En el plan figura el tema de la guía de la UNED, que es la referencia que manda. Las secciones de los clásicos no se citan
de memoria: se comprueban al redactar cada nodo.

| Tramo | Nodo | Tipo | Prerrequisitos | Fuente (tema de la guía UNED + clásico) |
| --- | --- | --- | --- | --- |
| 1 (1.º) | `mat-logica-demostraciones` | puesta al día | — | Lenguaje matemático, temas 1-3; Hammack, *Book of Proof* |
| 1 | `mat-conjuntos-numeros` — Conjuntos y números: relaciones, cardinalidad y construcción de ℕ, ℤ, ℚ, ℝ y ℂ | **nuevo** | `mat-logica-demostraciones`, `mat-numeros-reales`, `mat-numeros-complejos` | Lenguaje matemático, temas 3-7; Hammack |
| 1 | `mat-matematica-discreta` | puesta al día | — | Matemática discreta |
| 1 | `mat-algebra-lineal-1` | puesta al día | — | Álgebra lineal I; Strang |
| 1 | `mat-algebra-lineal` | puesta al día | — | Álgebra lineal II; Axler, *Linear Algebra Done Right* |
| 1 | `mat-analisis-real` | puesta al día | + `mat-conjuntos-numeros` | Funciones de una variable I-II; Spivak, *Calculus* |
| 1 | `mat-calculo-2` | puesta al día (+ integrales eulerianas) | — | Funciones de una variable II (Fernández Novoa) |
| 1 | `mat-calculo-multivariable` | puesta al día | — | Funciones de varias variables I; Marsden y Tromba |
| 1 | `mat-geometria-euclidea` — Geometría euclídea: axiomas, isometrías, inversión, construcciones y un primer vistazo a la hiperbólica | **nuevo** | `mat-logica-demostraciones`, `mat-movimientos-plano`, `mat-trigonometria` | Geometría básica (Costa y Buser), temas 1-13; Hartshorne, *Geometry: Euclid and Beyond* |
| 1 | `mat-probabilidad`, `mat-estadistica-inferencia` | puesta al día | — | Estadística básica; Cálculo de probabilidades I |
| 2 (2.º) | `mat-geometrias-lineales` — Geometrías lineales: afín, euclídea y proyectiva; cónicas y cuádricas | **nuevo** | `mat-algebra-lineal`, `mat-geometria-euclidea`, `mat-geometria-espacio` | Geometrías lineales (Costa y Lafuente; Outerelo y Sánchez Abril) |
| 2 | `mat-calculo-vectorial` — Cálculo vectorial: función inversa e implícita, cambio de variable, integrales de línea y superficie, Green, Stokes y Gauss | **nuevo** | `mat-calculo-multivariable`, `mat-algebra-lineal-1` | Funciones de varias variables II (Marsden y Tromba) |
| 2 | `mat-programacion-lineal-entera` — Programación lineal y entera: simplex, dualidad, sensibilidad, ramificación y acotación, transporte y asignación | **nuevo** | `mat-algebra-lineal-1` | Programación lineal y entera (Ramos), unidades I-III |
| 2 | `mat-analisis-fourier` — Análisis de Fourier: series, convergencia, Parseval, Sturm-Liouville y transformada | **nuevo** | `mat-calculo-2`, `mat-analisis-real`, `mat-algebra-lineal` | Análisis de Fourier y EDP (Tello), temas 3, 4 y 9 |
| 2 | `mat-ecuaciones-diferenciales`, `mat-analisis-complejo`, `mat-edp` (+ `mat-analisis-fourier` como prerrequisito), `mat-medida-integracion`, `mat-analisis-funcional` (+ Baire, Ascoli-Arzelà, Stone-Weierstrass) | puesta al día | — | Introducción a las EDO; Variable compleja; Análisis de Fourier y EDP; Introducción a los espacios de Hilbert (Tello) |
| 3 (3.º) | `mat-topologia` (+ producto y cociente), `mat-estructuras-algebraicas` (+ acciones, abelianos finitamente generados), `mat-algebra-conmutativa-galois`, `mat-analisis-numerico` | puesta al día | — | Topología (Arregui); Estructuras algebraicas; Álgebra (Gamboa y Ruiz) |
| 3 | `mat-algebra-lineal-numerica` — Álgebra lineal numérica: condicionamiento, factorizaciones, métodos iterativos, autovalores y aproximación | **nuevo** | `mat-analisis-numerico`, `mat-algebra-lineal-avanzada` | Análisis numérico matricial (Moreno), caps. 1-6; Trefethen y Bau |
| 4 (4.º-5.º) | `mat-variedades-formas` — Variedades, formas diferenciales y el teorema de Stokes | **nuevo** | `mat-calculo-vectorial`, `mat-topologia`, `mat-algebra-lineal` | Campos y formas (López Gordón y Jiménez); Spivak, *Calculus on Manifolds* |
| 4 | `mat-probabilidad-avanzada` — Probabilidad con medida: vectores aleatorios, función característica, normal multivariante y teoremas límite | **nuevo** | `mat-probabilidad`, `mat-medida-integracion` | Cálculo de probabilidades II (Vélez) |
| 4 | `mat-numerico-ecuaciones-edo` — Resolución numérica: sistemas no lineales, ecuaciones en diferencias y EDO (valor inicial y contorno) | **nuevo** | `mat-analisis-numerico`, `mat-ecuaciones-diferenciales` | Resolución numérica de ecuaciones (Moreno, parte II) |
| 4 | `mat-sistemas-dinamicos` — Sistemas dinámicos: bifurcaciones, ciclos límite y caos | **nuevo** | `mat-ecuaciones-diferenciales`, `mat-algebra-lineal` | Sistemas dinámicos (Strogatz) |
| 4 | `mat-geometria-diferencial`, `mat-estadistica-matematica`, `mat-procesos-estocasticos` | puesta al día | — | Geometría diferencial de curvas y superficies; Inferencia estadística |
| 5 (máster) | `mat-topologia-algebraica` — Topología algebraica: homotopía, grupo fundamental, recubridores y homología | **nuevo** | `mat-topologia`, `mat-estructuras-algebraicas` | Máster: Topología algebraica; Hatcher, *Algebraic Topology* |
| 5 | `mat-edp-variacional` — EDP variacionales: Sobolev, formulación débil, Lax-Milgram, métodos directos y elementos finitos | **nuevo** | `mat-analisis-funcional`, `mat-edp`, `mat-medida-integracion` | Máster: Análisis no lineal de EDPs; Métodos numéricos en problemas variacionales; Evans, *PDE*; Brezis |
| 5 | `mat-grafos-coloraciones` — Grafos y coloraciones: número cromático, Brooks, Vizing, polinomio cromático y Ramsey | **nuevo** | `mat-matematica-discreta` | Máster: Combinatoria de las coloraciones; Diestel, *Graph Theory* |
| 5 | `mat-teoria-juegos` — Teoría de juegos: estrategias, minimax, equilibrio de Nash y juegos cooperativos | **nuevo** | `mat-programacion-lineal-entera`, `mat-probabilidad` | Máster: Teoría de juegos; Maschler, Solan y Zamir, *Game Theory* |
| 5 | `mat-algebra-lineal-avanzada`, `mat-optimizacion`, `mat-teoria-numeros`, `mat-teoria-informacion` | puesta al día | — | — |

Cada tramo se cierra con `vault:check`, los objetivos actualizados (`vault/_objetivos/`), las entradas de glosario y un
commit.

## c) Registro de redacción

| Nodo | Cambios | Fecha |
| --- | --- | --- |
| `mat-logica-demostraciones` | Bloque práctico en §2-§8 (promesa «si apruebas», «todos» y «alguno», receta comprobada, caja de herramientas y escalera, lista de la compra, agrupar y ordenar, DNI y buzones); 4 demostraciones en bloques formales (validez de la inducción, inclusión-exclusión, clases y particiones, Cantor); fuentes concretas: texto base UNED (Delgado y Muñoz, temas 1-3) y Hammack 3.ª ed. por capítulos (índice comprobado en richardhammack.github.io); 14 ejercicios con variantes contrastadas por fuerza bruta (tablas de verdad, relaciones sobre $2^{n^2}$ casos, funciones, Stirling, involuciones, anticadenas, Cantor); 9 de repaso | 2026-11-21 |
| `mat-conjuntos-numeros` (**nuevo**) | Escrito desde el temario de la guía UNED de «Lenguaje matemático, conjuntos y números» (temas 3-7; texto base de Delgado y Muñoz), Hammack caps. 11, 12 y 14 (índice comprobado) y Spivak cap. 8: equivalencia y cociente («bien definida»), órdenes (maximal, máximo, supremo), imagen y preimagen, composición e inversa, idempotentes, cardinalidad (diagonal, Cantor-Bernstein), estructuras, Peano, división euclídea y Bézout, $\mathbb Z$ y $\mathbb Q$ como cocientes, axioma del supremo (arquimediana, densidad, cortaduras y Cauchy), $\mathbb C$ como $\mathbb R^2$ y por qué no se ordena; 4 bloques formales; 12 ejercicios con variantes contrastadas por fuerza bruta, 1 de desarrollo con rúbrica, 7 de repaso, reto con flag; glosario: «supremo», «conjunto cociente»; prerrequisito de `mat-analisis-real`, `mat-estructuras-algebraicas` y `mat-teoria-informacion`; objetivo `uned-primero` alineado con los ids del plan | 2026-11-21 |
| `mat-matematica-discreta` | Bloque práctico en §2-§7 (§2-§3 marcados como repaso de los nodos de lógica y conjuntos; dominó y buzones; recurrencias paso a paso; mapas y redes; reloj); 3 demostraciones en bloques formales (árbol, inverso modular, Fermat); temas de la guía UNED que faltaban: hamiltonianos (Dirac, Ore), digrafos y multigrafos, coloraciones ($\chi$, ciclos, voraz $\le \Delta + 1$), §7b ecuaciones diofánticas (con demostración de la solución general), bases y criterios de divisibilidad, §7c variaciones y combinaciones con y sin repetición y binomio; texto base UNED (Bujalance et al.) en las fuentes; prerrequisito `mat-logica-demostraciones`; variantes en los 16 ejercicios (9 repetían ejemplos de la teoría: 7⁻¹ mod 26, 3¹⁰⁰ mod 7, D₈, K₈, el árbol, Bell(4)…), 3 ejercicios nuevos, 8 de repaso; el doble cálculo cazó un error mío en una pregunta de repaso (123 456 mod 9 = 3, no 6) | 2026-11-21 |
| `mat-algebra-lineal-1` | Bloque práctico en §2-§10 (cafés y bollos, máquina que transforma, botón de deshacer, cuánto estira las áreas, listas de números, piezas de una base, direcciones que no giran, línea de tendencia, balanza que se vuelca); 4 bloques formales nuevos (inversa $2\times2$, rango y nulidad, traza y determinante, ecuaciones normales por proyección); §7b nueva de la guía UNED (subespacios, Grassmann, coordenadas y cambio de base, aplicaciones lineales, núcleo e imagen, semejanza, proyecciones y simetrías); fuentes: Borobia y Estrada caps. 1-4 (texto base UNED) y Strang 5.ª ed. por capítulos (índice comprobado en math.mit.edu); variantes en los 16 ejercicios (casi todos repetían un ejemplo resuelto), con doble cálculo exacto en fracciones (cofactores frente a eliminación, Cramer frente a Gauss, rango por menores, potencias frente a iteración); 2 ejercicios nuevos (coordenadas, Grassmann); 7 de repaso | 2026-11-21 |
