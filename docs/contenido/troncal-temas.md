# Troncal por temas (FASE 9B): mapa y plan

Decisión del usuario del 2026-11-21 (ver `docs/ROADMAP_V2.md`, «Ampliación del 2026-11-21»): **un nodo por tema**, escrito
completo y en profundidad. Los 31 nodos del troncal de la fase 9 no se borran ni cambian de id (guardan progreso): pasan a ser
la **visión de conjunto y repaso del bloque**, y los nodos de tema nuevos son sus prerrequisitos. Así el recorrido de estudio es
«tema → tema → … → repaso del bloque».

## a) Criterios

1. **Un tema, un nodo.** Un tema se agrupa a lo largo de los cursos (los enteros de 1.º y de 2.º de ESO son un nodo con
   dificultad creciente), no se repite por curso. Lo que en Marea Verde es un capítulo con una idea central es un nodo; un
   capítulo con varias ideas independientes se parte.
2. **Extensión.** Cada nodo: para qué sirve; escalera práctico → formal en cada sección; tres o más ejemplos resueltos por
   técnica; todas las demostraciones del nivel; errores típicos; 15-25 ejercicios graduados, la mayoría con
   seis variantes comprobadas dos veces (cada uno equivale a seis problemas para practicar), al menos un desarrollo con rúbrica y un banco de repaso `r-*` de 6-10 preguntas distintas.
3. **Fuente concreta por nodo**: el capítulo y las secciones de Marea Verde del curso correspondiente (PDF leído antes de
   citarlo) y, en física, el capítulo de OpenStax *Física universitaria*; un segundo texto de contraste cuando haga falta.
4. **Orden de estudio**: el del objetivo `acceso-universidad`, que se rehace con los nodos de tema en orden.

## a2) PDF de Marea Verde (LOMLOE) por curso

Índices: https://www.apuntesmareaverde.org.es/grupos/mat/ESOLL.htm (ESO). Para leerlos: `curl -s -L -o x.pdf <url>`,
`pdftotext -layout x.pdf x.txt` e `iconv -f latin1 -t utf-8` (el texto sale en Latin-1).

- **1.º ESO** (rev. 11/08/2024; página https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESOLL.htm): base
  `https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/` + `1%2001%20Resolucion%20problemas.pdf`,
  `1%2002%20DIVISIBILIDAD.pdf`, `1%2003%20Potencias.pdf`, `1%2004%20Numeros%20enteros.pdf`, `1%2005%20Fracciones.pdf`,
  `1%2006%20Decimales.pdf`, `1%2007%20Unidades%20medida.pdf`, `1%2008%20FigurasPlanas.pdf`, `1%2009%20Longitudes.pdf`,
  `1%2010%20Proporciones.pdf`, `1%2011%20algebra.pdf`, `1%2012%20graficas.pdf`, `1%2013%20Estadistica.pdf`.
- **4.º ESO B y Bachillerato**: las URL ya citadas en los nodos de la fase 9 (`LOMLOE/4B/…`, `LOMLOE/Bachillerato/…`). 4.º ESO B
  (índice: `https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/`): `01_Reales_4B.pdf`, `02_POTENCIAS_4B.pdf`,
  `03_Polinomios_4B.pdf`, `04_Ecuaciones_4B.pdf`, `05_Inecuaciones_4B.pdf`, `06_proporciones_4B.pdf`, `07_Semejanza_4B.pdf`,
  `08_Trigonometria.pdf`, `09_geometria.pdf`, `10_Funciones_4B.pdf`, `11_funciones_lineales_cuadraticas.pdf`,
  `12_Exponencial_4B.pdf`, `13_Derivadas_4B.pdf`, `14_Estadistica_4B.pdf`, `15_Combinatoria_4B.pdf`, `16_Probabilidad_4B.pdf`.
- **2.º ESO** (rev. 10/08/2024; https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESOLL.htm): base
  `https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/` + `2_01_Problemas.pdf`, `2_02_Numeros.pdf`, `2_03_Potencias.pdf`,
  `2_04_Divisibilidad.pdf`, `2_05_Medida.pdf`, `2_06_Longitudes.pdf`, `2_07_Cuerpos.pdf`, `2_08_Movimientos.pdf`,
  `2_09_Proporciones.pdf`, `2_10_algebra.pdf`, `2_11_graficas.pdf`, `2_12_Estadistica.pdf`.
- **3.º ESO** (rev. 27/08/2022 caps. 1-6 y 10/08/2024 caps. 7-12; https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESOLL.htm):
  base `https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/` + `01%20Racionales%203.pdf`, `02%20potencias%203.pdf`,
  `03%20Sucesiones%203.pdf`, `04%20Polinomios%203.pdf`, `05%20Ec%202%20grado%203.pdf`, `06%20proporciones%203.pdf`,
  `07%20Educacion%20financiera%203.pdf`, `08%20Geometria%20en%20el%20plano%203.pdf`, `09%20Movimientos%203.pdf`,
  `10%20geometria%20del%20espacio%203.pdf`, `11%20Funciones%203.pdf`, `12%20estadistica%203.pdf`.

## b) Mapa y plan: matemáticas

Columnas: id nuevo · tema · fuente (Marea Verde, curso y capítulo) · prerrequisitos (nodos de tema) · bloque al que alimenta
(nodo existente, que pasa a ser su repaso de conjunto).

| # | Nodo de tema | Tema | Marea Verde | Prerrequisitos | Bloque |
| ---: | --- | --- | --- | --- | --- |
| 1 | `mat-resolucion-problemas` | Resolución de problemas (Pólya, estrategias, comprobar) | 1.º ESO cap. 1 | — | `mat-numeros-naturales` |
| 2 | `mat-sistema-decimal-operaciones` | Números naturales: sistema decimal, operaciones, jerarquía, propiedades | 1.º ESO cap. 2 (1-2) | 1 | `mat-numeros-naturales` |
| 3 | `mat-divisibilidad` | Divisibilidad: múltiplos, divisores, criterios, primos, factorización, mcd y mcm | 1.º ESO cap. 2; 2.º ESO cap. 4 | 2 | `mat-numeros-naturales` |
| 4 | `mat-potencias-raices` | Potencias y raíces: exponente natural y entero, notación científica, raíz cuadrada | 1.º ESO cap. 3; 2.º ESO cap. 3; 3.º ESO cap. 2 | 2 | `mat-numeros-naturales` |
| 5 | `mat-numeros-enteros` | Números enteros: recta, valor absoluto, operaciones y signos | 1.º ESO cap. 4; 2.º ESO cap. 2 | 2 | `mat-enteros-fracciones` |
| 6 | `mat-fracciones` | Fracciones: equivalencia, comparación, operaciones, problemas | 1.º ESO cap. 5; 2.º ESO cap. 2; 3.º ESO cap. 1 | 3, 5 | `mat-enteros-fracciones` |
| 7 | `mat-decimales` | Expresiones decimales: operaciones, redondeo, periódicos y fracción generatriz | 1.º ESO cap. 6; 3.º ESO cap. 1 | 6 | `mat-enteros-fracciones` |
| 8 | `mat-sistema-metrico` | Sistemas de medida: métrico decimal, superficie, volumen, capacidad, sexagesimal | 1.º ESO cap. 7; 2.º ESO cap. 5 | 7 | `mat-proporcionalidad-porcentajes` |
| 9 | `mat-proporcionalidad` | Proporcionalidad directa e inversa, regla de tres, repartos | 1.º ESO cap. 10; 2.º ESO cap. 9; 3.º ESO cap. 6 | 6, 7 | `mat-proporcionalidad-porcentajes` |
| 10 | `mat-porcentajes-finanzas` | Porcentajes, aumentos y descuentos, interés simple y compuesto, TAE, préstamos | 1.º ESO cap. 10; 3.º ESO cap. 7 | 9 | `mat-proporcionalidad-porcentajes` |
| 11 | `mat-expresiones-algebraicas` | Lenguaje algebraico, monomios, polinomios, productos notables | 1.º ESO cap. 11; 2.º ESO cap. 10; 3.º ESO cap. 4 | 5, 6 | `mat-algebra-basica` |
| 12 | `mat-ecuaciones-primer-grado` | Ecuaciones de primer grado y problemas | 1.º ESO cap. 11; 2.º ESO cap. 10 | 11 | `mat-algebra-basica` |
| 13 | `mat-sistemas-dos-incognitas` | Sistemas de dos ecuaciones lineales: métodos, interpretación y problemas | 2.º ESO cap. 10; 3.º ESO cap. 5 | 12 | `mat-algebra-basica` |
| 14 | `mat-ecuaciones-segundo-grado` | Ecuaciones de segundo grado, bicuadradas, racionales e irracionales | 3.º ESO cap. 5; 4.º ESO B cap. 4 | 12, 4 | `mat-algebra-secundaria` |
| 15 | `mat-polinomios-factorizacion` | División de polinomios, Ruffini, teorema del resto, factorización, fracciones algebraicas | 4.º ESO B cap. 3; Mat. I cap. 2 | 11, 14 | `mat-algebra-secundaria` |
| 16 | `mat-inecuaciones` | Inecuaciones y sistemas de inecuaciones | 4.º ESO B cap. 5; Mat. I cap. 2 | 14, `mat-numeros-reales` | `mat-algebra-secundaria` |
| 17 | `mat-exponenciales-logaritmos` | Logaritmos y ecuaciones exponenciales y logarítmicas | 4.º ESO B cap. 2; Mat. I cap. 2 | 4, 14 | `mat-algebra-secundaria` |
| 18 | `mat-rectas-angulos` | Elementos del plano: rectas, ángulos, paralelas, mediatriz y bisectriz | 1.º ESO cap. 8 | 1 | `mat-geometria-basica` |
| 19 | `mat-triangulos-pitagoras` | Triángulos: clasificación, rectas notables, congruencia, Pitágoras | 1.º ESO caps. 8-9; 2.º ESO cap. 6 | 18, 4 | `mat-geometria-basica` |
| 20 | `mat-poligonos-circunferencia` | Polígonos, circunferencia y círculo: ángulos, perímetros y áreas | 1.º ESO caps. 8-9; 3.º ESO cap. 8 | 19 | `mat-geometria-basica` |
| 21 | `mat-semejanza-tales` | Semejanza, Tales, escalas y razón de áreas y volúmenes | 2.º ESO cap. 6 (comprobar); 4.º ESO B cap. 7 | 9, 20 | `mat-geometria-basica` |
| 22 | `mat-cuerpos-geometricos` | Poliedros y cuerpos de revolución: áreas y volúmenes | 2.º ESO cap. 7; 3.º ESO cap. 10 | 20, 8 | `mat-geometria-basica` |
| 23 | `mat-funciones-graficas` | Plano cartesiano, tablas y gráficas, concepto de función y sus características | 1.º ESO cap. 12; 2.º ESO cap. 11; 3.º ESO cap. 11 | 5, 9 | `mat-funciones-basicas` |
| 24 | `mat-funciones-lineales-cuadraticas` | Funciones lineales, afines y cuadráticas | 2.º ESO cap. 11; 3.º ESO cap. 11; 4.º ESO B cap. 10 | 23, 14 | `mat-funciones-basicas` |
| 25 | `mat-estadistica-descriptiva` | Estadística unidimensional: tablas, gráficos, centralización, posición y dispersión | 1.º ESO cap. 13; 2.º ESO cap. 12; 4.º ESO B cap. 14 | 7, 23 | `mat-funciones-basicas` |
| 26 | `mat-combinatoria` | Combinatoria: principio del producto, variaciones, permutaciones, combinaciones, binomio | 4.º ESO B cap. 15; Mat. II cap. 11 | 3, 4 | `mat-combinatoria-probabilidad-basica` |
| 27 | `mat-probabilidad-elemental` | Probabilidad: experimentos, Laplace, árboles, condicionada, total y Bayes | 1.º ESO cap. 13; 4.º ESO B cap. 16; Mat. I cap. 9 | 26, 6 | `mat-combinatoria-probabilidad-basica` |
| 28 | `mat-razones-trigonometricas` | Ángulos y radianes, razones trigonométricas, circunferencia goniométrica | 4.º ESO B cap. 8; Mat. I cap. 4 | 19, 21 | `mat-trigonometria` |
| 29 | `mat-resolucion-triangulos` | Teoremas del seno y del coseno; resolución de triángulos y problemas | 4.º ESO B cap. 8; Mat. I cap. 4 | 28 | `mat-trigonometria` |
| 30 | `mat-identidades-ecuaciones-trigonometricas` | Fórmulas de suma, ángulo doble y mitad; identidades y ecuaciones trigonométricas | Mat. I cap. 4 | 29, 15 | `mat-trigonometria` |
| 31 | `mat-vectores-rectas-plano` | Vectores del plano, producto escalar, ecuaciones de la recta, posiciones, distancias | 4.º ESO B cap. 9; Mat. I cap. 5 | 24, 28 | `mat-geometria-analitica` |
| 32 | `mat-conicas` | Lugares geométricos y cónicas: circunferencia, elipse, hipérbola y parábola | Mat. I cap. 5 | 31 | `mat-geometria-analitica` |
| 33 | `mat-funciones-exponencial-logaritmica` | Funciones exponenciales y logarítmicas, y modelos de crecimiento | 4.º ESO B cap. 12; Mat. I cap. 6 | 17, 24 | `mat-funciones-elementales` |
| 34 | `mat-funciones-trigonometricas` | Funciones trigonométricas y sus inversas: gráficas, periodo, amplitud y fase | 4.º ESO B cap. 12; Mat. I cap. 6 | 28, 24 | `mat-funciones-elementales` |
| 35 | `mat-limites-continuidad` | Límites de funciones, indeterminaciones, asíntotas y continuidad | Mat. I cap. 7; Mat. II cap. 7 | `mat-funciones-elementales`, `mat-sucesiones-progresiones` | `mat-calculo-1` |
| 36 | `mat-derivadas` | Derivada: definición, interpretación, reglas, derivada de la compuesta, recta tangente | 4.º ESO B cap. 13; Mat. I cap. 8; Mat. II cap. 8 | 35 | `mat-calculo-1` |
| 37 | `mat-aplicaciones-derivada` | Monotonía, extremos, curvatura, optimización, representación, L'Hôpital, Rolle y valor medio | Mat. II caps. 8-9 | 36 | `mat-calculo-1` |
| 38 | `mat-integrales-bachillerato` | Primitivas, técnicas de integración, integral definida, Barrow y áreas | Mat. II cap. 10 | 37 | `mat-calculo-2` |
| 39 | `mat-matrices` | Matrices: tipos, operaciones, potencias, inversa por Gauss-Jordan, rango | Mat. II cap. 1 | 13 | `mat-algebra-lineal-1` |
| 40 | `mat-determinantes` | Determinantes: propiedades, desarrollo, cálculo, inversa por adjuntos | Mat. II cap. 2 | 39 | `mat-algebra-lineal-1` |
| 41 | `mat-sistemas-lineales-bachillerato` | Sistemas lineales: Gauss, Rouché-Frobenius, Cramer, discusión con parámetros | Mat. II cap. 3 | 40 | `mat-algebra-lineal-1` |
| 42 | `mat-vectores-espacio` | Vectores en el espacio: dependencia, bases, productos escalar, vectorial y mixto | Mat. II cap. 4 | 31, 40 | `mat-geometria-espacio` |
| 43 | `mat-rectas-planos-espacio` | Rectas y planos en el espacio: ecuaciones y posiciones relativas | Mat. II cap. 5 | 42, 41 | `mat-geometria-espacio` |
| 44 | `mat-geometria-metrica-espacio` | Ángulos, distancias, proyecciones, simétricos, áreas y volúmenes en el espacio | Mat. II cap. 6 | 43 | `mat-geometria-espacio` |
| 45 | `mat-distribucion-binomial` | Variable aleatoria discreta y distribución binomial | Mat. II cap. 12 (1) | 27, 26 | `mat-distribuciones-binomial-normal` |
| 46 | `mat-distribucion-normal` | Variable continua, distribución normal, tipificación, aproximación de la binomial | Mat. II cap. 12 (2) | 45 | `mat-distribuciones-binomial-normal` |

Ya son de un solo tema y se quedan como nodo de tema (con su escalera de la fase 9): `mat-movimientos-plano`,
`mat-sucesiones-progresiones`, `mat-numeros-reales`, `mat-numeros-complejos`, `mat-estadistica-bidimensional`. Si al
releerlos con el criterio de extensión se quedan cortos, se amplían (sin cambiar el id).

## c) Mapa y plan: física y destrezas

Fuente: OpenStax *Física universitaria* (vols. 1-3), con el nivel matemático de cada curso; la Física y Química de la ESO y la
Física de Bachillerato siguen los mismos temas.

| # | Nodo de tema | Tema | OpenStax | Prerrequisitos | Bloque |
| ---: | --- | --- | --- | --- | --- |
| 47 | `fis-magnitudes-medida` | Magnitudes, SI, notación científica, cifras significativas, errores, análisis dimensional | vol. 1 cap. 1 | 4, 8 | `fis-medida-movimiento` |
| 48 | `fis-cinematica-rectilinea` | Movimiento rectilíneo: MRU, MRUA, caída libre, gráficas | vol. 1 cap. 3 | 47, 12 | `fis-medida-movimiento` |
| 49 | `fis-vectores-movimiento-plano` | Vectores; tiro parabólico; movimiento circular | vol. 1 caps. 2 y 4 | 48, 28 | `fis-medida-movimiento` |
| 50 | `fis-leyes-newton` | Fuerzas y leyes de Newton; diagramas de cuerpo libre | vol. 1 cap. 5 | 49 | `fis-fuerzas-energia` |
| 51 | `fis-dinamica-aplicaciones` | Rozamiento, planos inclinados, tensiones, poleas, dinámica circular | vol. 1 cap. 6 | 50 | `fis-fuerzas-energia` |
| 52 | `fis-trabajo-energia` | Trabajo, energía cinética y potencial, conservación, potencia | vol. 1 caps. 7-8 | 51 | `fis-fuerzas-energia` |
| 53 | `fis-momento-choques` | Momento lineal, impulso, conservación y choques | vol. 1 cap. 9 | 52 | `fis-fuerzas-energia` |
| 54 | `fis-gravitacion` | Gravitación universal, campo gravitatorio, órbitas y Kepler | vol. 1 cap. 13 | 52 | `fis-fuerzas-energia` |
| 55 | `fis-oscilaciones` | Movimiento armónico simple, muelles y péndulos | vol. 1 cap. 15 | 52, 34 | `fis-ondas-calor-fluidos` |
| 56 | `fis-ondas-sonido` | Ondas mecánicas, ecuación de onda, sonido, Doppler | vol. 1 caps. 16-17 | 55 | `fis-ondas-calor-fluidos` |
| 57 | `fis-fluidos` | Presión, hidrostática, Pascal, Arquímedes, Bernoulli | vol. 1 cap. 14 | 51 | `fis-ondas-calor-fluidos` |
| 58 | `fis-calor-temperatura` | Temperatura, calor, calorimetría, cambios de estado, transmisión, primer principio | vol. 2 caps. 1-3 | 52 | `fis-ondas-calor-fluidos` |
| 59 | `fis-optica` | Luz: reflexión, refracción, espejos, lentes e instrumentos | vol. 3 caps. 1-2 | 56 | `fis-ondas-calor-fluidos` |
| 60 | `fis-electrostatica` | Carga, Coulomb, campo y potencial eléctricos, condensadores | vol. 2 caps. 5-8 | 52, 49 | `fis-electricidad-magnetismo-1` |
| 61 | `fis-corriente-circuitos` | Corriente, Ohm, resistencias, potencia, circuitos y Kirchhoff | vol. 2 caps. 9-10 | 60 | `ing-electricidad-basica` |
| 62 | `fis-campo-magnetico` | Campo magnético, fuerza de Lorentz, fuentes del campo | vol. 2 caps. 11-12 | 61 | `fis-electricidad-magnetismo-1` |
| 63 | `fis-induccion` | Inducción electromagnética, Faraday y Lenz, alterna y transformadores | vol. 2 caps. 13-15 | 62 | `fis-electricidad-magnetismo-1` |
| 64 | `fis-relatividad-especial` | Relatividad especial | vol. 3 cap. 5 | 52, 56 | `fis-fisica-moderna-bach` |
| 65 | `fis-cuantica-introduccion` | Fotones, efecto fotoeléctrico, dualidad, De Broglie, incertidumbre | vol. 3 caps. 6-7 | 63, 64 | `fis-fisica-moderna-bach` |
| 66 | `fis-fisica-nuclear` | Núcleo, desintegraciones, actividad, fisión, fusión y partículas | vol. 3 caps. 10-11 | 65 | `fis-fisica-moderna-bach` |
| 67 | `prog-python-datos-control` | Python I: tipos, variables, condicionales y bucles | (fuentes del nodo existente) | `prog-pensamiento-computacional` | `prog-python-fundamentos` |
| 68 | `prog-python-funciones-colecciones` | Python II: funciones, listas, diccionarios, conjuntos y archivos | (ídem) | 67 | `prog-python-fundamentos` |

Las destrezas (`tro-aprender-a-aprender`, `tro-lectura-tecnica`, `tro-razonamiento-cientifico`) y `prog-terminal-linux-git`
ya son de un tema cada una.

## d) Orden de trabajo

Por bloques y en el orden de estudio (1 → 68): aritmética (1-10), álgebra (11-17), geometría (18-22), funciones y estadística
(23-27), trigonometría y analítica (28-34), cálculo (35-38), álgebra lineal y espacio (39-44), distribuciones (45-46), física
(47-66) y programación (67-68). Tras cada bloque: prerrequisitos del nodo de bloque, objetivo `acceso-universidad`,
glosario, `vault:check` y commit. La revisión independiente (d) se hace por bloques al terminar cada uno.

## e) Registro de redacción

| Nodo | Cambios | Fecha |
| --- | --- | --- |
| `mat-resolucion-problemas` (1) | Escrito desde Marea Verde 1.º ESO cap. 1 (secciones 1-4, PDF leído), Pólya y Engel: problema frente a ejercicio; las cuatro fases con sus preguntas; nueve estrategias, cada una con bloque práctico y ejemplo resuelto (estimar y Fermi, 1089 con su demostración, Hanoi, barras, ensayo ordenado con tabla, hacia atrás, lista sistemática, problema parecido, invariante del tablero mutilado con demostración); comprobar de cinco formas; bloqueos y «¡eureka!»; juego del 20; 18 ejercicios (15 con variantes contrastadas por fuerza bruta: simulación de Hanoi, BFS del río, programación dinámica de monedas, fechas), 1 desarrollo con rúbrica (las cuatro fases), 7 de repaso; prerrequisito de `mat-numeros-naturales` (que pasa a ser repaso de conjunto del bloque) | 2026-11-21 |
| `mat-sistema-decimal-operaciones` (2) | Escrito desde Marea Verde 1.º ESO cap. 2, secciones 1.1-1.2 (PDF leído) e Ifrah: sistema decimal posicional y valor de posición (con demostración de la unicidad de la escritura), redondeo y estimación, romanos, binario, bases 12 y 60; propiedades de la suma y el producto, distributiva y cálculo mental, por qué funciona sumar en columna; división entera (existencia y unicidad del cociente y el resto demostradas), resto con calculadora, división por exceso; jerarquía de las operaciones; 15 ejercicios con variantes contrastadas (romanos por tabla y por análisis de cadenas, evaluador de expresiones propio, conversiones de base, restas sucesivas), 1 desarrollo (por qué funciona multiplicar en columna), 7 de repaso; prerrequisito de `mat-numeros-naturales`; nuevos scripts `enlaces-pendientes.cjs`, `enlaces-restaurar.cjs` y `registro-9b.cjs` | 2026-11-21 |
| `mat-divisibilidad` (3) | Escrito desde Marea Verde 1.º ESO cap. 2, secciones 2-3 (PDF leído) y Euclides (VII.2, IX.20): múltiplos y divisores (por parejas hasta √n), criterios del 2 al 11 en tabla con la demostración del 4 (y el del 3 y el 9 como desarrollo), primos y compuestos, criba, prueba hasta √n, infinitud de los primos demostrada, factorización y número de divisores, mcd y mcm por factorización, Euclides y mcd·mcm = ab demostrados, coprimos; 14 ejercicios con variantes contrastadas por fuerza bruta (el doble cálculo cazó dos patrones imposibles del criterio del 11), 1 desarrollo, 7 de repaso; glosario: «número primo» y «máximo común divisor» pasan a este nodo (y `tambien` para «teorema» y «algoritmo»); prerrequisito de `mat-numeros-naturales` | 2026-11-21 |
| `mat-potencias-raices` (4) | Escrito desde Marea Verde 1.º ESO cap. 3 (secciones 1-3), 2.º ESO cap. 3 (1.5, 2.4-2.6) y 3.º ESO cap. 2 (2.1, 3, 4.6), PDF leídos: potencias, cuadrados y cubos, base negativa, potencias de 10; propiedades en tabla con demostración por conteo de factores; exponente cero y negativo; notación científica (grandes y pequeños, operar); raíz cuadrada exacta, entera con resto y aproximada; raíz n-ésima; $\sqrt{r^2} = |r|$; extraer e introducir factores, radicales semejantes; 18 ejercicios con variantes contrastadas con BigInt y búsqueda, 1 desarrollo (por qué las propiedades y por qué $a^0 = 1$), 7 de repaso; prerrequisito de `mat-numeros-naturales`. Los enlaces pendientes pasan a escribirse «el tema `id`» para no disparar el glosario | 2026-11-21 |
| `mat-numeros-enteros` (5) | Escrito desde Marea Verde 1.º ESO cap. 4 (secciones 1-3, PDF leído) y 2.º ESO cap. 2: enteros en situaciones reales, recta, orden, opuesto, valor absoluto y distancia; suma y resta (restar es sumar el opuesto, quitar paréntesis y corchetes, agrupar positivos y negativos); regla de los signos con su justificación por la distributiva; potencias de enteros y $(-a)^n \neq -a^n$; combinadas y calculadora; 12 ejercicios con variantes contrastadas con un evaluador de expresiones propio (con el menos unario por debajo de la potencia, error mío cazado por el doble cálculo), cálculos a mano, simulación del saldo y del calendario sin año 0; 1 desarrollo, 7 de repaso; prerrequisito de `mat-enteros-fracciones` | 2026-11-21 |
| `mat-fracciones` (6) | Escrito desde Marea Verde 1.º ESO cap. 5 (secciones 1-4, PDF leído) y 3.º ESO cap. 1: tres lecturas de la fracción, equivalencia y productos cruzados (justificados), simplificación e irreducible, comparación y recta, negativas; suma y resta con común denominador (y el error de sumar denominadores), producto, inversa y cociente, combinadas y problemas de «lo que queda» con barras; 14 ejercicios con variantes contrastadas en aritmética exacta y con decimales, búsqueda y recorrido hacia atrás, 1 desarrollo (por qué dividir es multiplicar por la inversa), 7 de repaso; glosario: «fracción irreducible» pasa a este nodo; prerrequisito de `mat-enteros-fracciones` | 2026-11-21 |
| `mat-decimales` (7) | Escrito desde Marea Verde 1.º ESO cap. 6 (secciones 1-3, PDF leído) y 3.º ESO cap. 1: posiciones y comparación, decimal ↔ fracción, operaciones con la coma (regla del producto justificada), exactos y periódicos (criterio de los primos 2 y 5, longitud del periodo), fracción generatriz de puros y mixtos con la justificación por serie geométrica, racionales = exactos o periódicos, truncar, redondear y error; 13 ejercicios con variantes calculadas en enteros y BigInt (división larga, series, fracciones exactas), 1 desarrollo ($0{,}\overline 9 = 1$), 7 de repaso; prerrequisito de `mat-enteros-fracciones` | 2026-11-21 |
| `mat-sistema-metrico` (8) | Escrito desde Marea Verde 1.º ESO cap. 7 (secciones 1-4, PDF leído), 2.º ESO cap. 5 y el folleto del SI (BIPM): magnitud y unidad, las siete unidades básicas y los prefijos; escaleras de longitud, capacidad y masa ($\times10$), superficie ($\times100$, unidades agrarias) y volumen ($\times1000$, con la justificación $k^2$, $k^3$); litro = dm³ y kilo de agua; sistema sexagesimal (horas decimales, sumar tiempos), km/h a m/s y escalas; 12 ejercicios con variantes en fracciones exactas contrastadas recorriendo la escalera paso a paso, 1 desarrollo (por qué $1\ \mathrm m^2 = 10\,000\ \mathrm{cm}^2$), 7 de repaso; prerrequisito de `mat-proporcionalidad-porcentajes` | 2026-11-21 |
| `mat-proporcionalidad` (9) | Escrito desde Marea Verde 1.º ESO cap. 10 (secciones 1, 2, 4 y 5) y 3.º ESO cap. 6 (secciones 1-3), PDF leídos: razón y proporción (cuarto y medio proporcional), directa e inversa con la definición precisa ($y = kx$, $xy = k$) y por qué «crecer a la vez» no basta, reducción a la unidad, regla de tres directa, inversa y compuesta (horas-obrero), repartos directo e inverso, mezclas, quilates, divisas y escalas; 14 ejercicios con variantes en fracciones exactas contrastadas con la reducción a la unidad, el producto constante y las condiciones del reparto (el doble cálculo cazó repartos inversos no exactos), 1 desarrollo (reparto inverso), 7 de repaso; glosario: «proporcionalidad directa» e «inversa» pasan a este nodo; prerrequisito de `mat-proporcionalidad-porcentajes` | 2026-11-21 |
| `mat-porcentajes-finanzas` (10) | Escrito desde Marea Verde 1.º ESO cap. 10 (2.3, 3) y 3.º ESO caps. 6 (1.4-1.6) y 7 (intereses, préstamos, comisiones, divisas), PDF leídos, y el Portal del Cliente Bancario del Banco de España: las tres preguntas del porcentaje, índice de variación (deshacer dividiendo, encadenar multiplicando, con justificación), interés simple y compuesto, regla del 72, TAE (con comisiones en la definición legal española), tabla de amortización con cuotas de capital constantes, comisiones con mínimo; 12 ejercicios con variantes contrastadas paso a paso, año a año, mes a mes y con la tabla de amortización, 1 desarrollo (+20 % y −20 % no se anulan), 7 de repaso; glosario: «porcentaje» pasa a este nodo; prerrequisito de `mat-proporcionalidad-porcentajes`. **Bloque de aritmética completo** (temas 1-10): objetivo `acceso-universidad` reordenado con los temas antes de sus nodos de bloque (script nuevo `objetivo-insertar.cjs`) | 2026-11-21 |
| `mat-expresiones-algebraicas` (11) | Escrito desde Marea Verde 1.º ESO cap. 11 (sección 1), 2.º ESO cap. 10 y 3.º ESO cap. 4 (secciones 1, 2 y 3.4), PDF leídos: traducción al lenguaje algebraico, valor numérico, monomios (coeficiente, parte literal, grado, semejantes), polinomios (grado, coeficiente principal, término independiente), suma, resta y producto, comprobación dando valores (con la justificación por número de raíces), productos notables con dibujo, cálculo mental y lectura al revés, factor común; 12 ejercicios con variantes contrastadas evaluando en 7 puntos (y Horner frente a potencias), 1 desarrollo ($(a+b)^2$ de dos maneras), 7 de repaso; glosario: «polinomio» pasa a este nodo; prerrequisito de `mat-algebra-basica` | 2026-11-21 |
| `mat-ecuaciones-primer-grado` (12) | Escrito desde Marea Verde 1.º ESO cap. 11 (secciones 2-3) y 2.º ESO cap. 10 (secciones 2-3), PDF leídos, y Pólya: partes de una ecuación, solución, ecuaciones equivalentes con la justificación de por qué no se multiplica por 0, orden con paréntesis y denominadores, una/ninguna/infinitas soluciones (identidad), despejar en fórmulas, planteamiento de problemas (números, edades, geometría, monedas, móviles, grifos, repartos) con comprobación en el enunciado; 12 ejercicios con variantes resueltas con fracciones exactas y comprobadas sustituyendo en la ecuación o el enunciado, 1 desarrollo (ninguna o infinitas), 7 de repaso; glosario: «ecuación» e «incógnita» pasan a este nodo; prerrequisito de `mat-algebra-basica` | 2026-11-21 |
| `mat-sistemas-dos-incognitas` (13) | Escrito desde Marea Verde 2.º ESO cap. 10 (sección 5) y 3.º ESO cap. 5 (secciones 3 y 4.3), PDF leídos: solución de un sistema, los tres métodos sobre el mismo sistema, interpretación gráfica, clasificación por proporcionalidad de coeficientes, fórmula general con $D = ab' - a'b$ demostrada, problemas tipo (objetos de dos clases, mezclas, edades, cifras, suma y diferencia); 11 ejercicios con datos construidos desde la solución y recuperados con la fórmula, contrastados por sustitución, fuerza bruta (corral, cifras) y prueba de puntos (clasificación), 1 desarrollo (los tres tipos gráficamente), 7 de repaso; prerrequisito de `mat-algebra-basica` | 2026-11-21 |
| `mat-ecuaciones-segundo-grado` (14) | Escrito desde Marea Verde 3.º ESO cap. 5 (sección 2 y 4.2) y 4.º ESO B cap. 4 (secciones 1, 2.1-2.3 y 5.1), PDF leídos: producto igual a cero, incompletas (y el error de dividir entre $x$), fórmula deducida completando el cuadrado, discriminante, suma y producto (con justificación), bicuadradas, racionales (descartar lo que anula denominadores), radicales (por qué elevar al cuadrado añade soluciones y hay que comprobar), problemas con selección de soluciones; 13 ejercicios con ecuaciones construidas desde las raíces y resueltas de nuevo con la fórmula, sustitución y barridos, 1 desarrollo (deducir la fórmula), 7 de repaso; prerrequisito de `mat-algebra-secundaria`. URL de los capítulos de 4.º ESO B anotadas en §a2 | 2026-11-21 |
| `mat-polinomios-factorizacion` (15) | Escrito desde Marea Verde 3.º ESO cap. 4 (sección 3) y 4.º ESO B cap. 3 (secciones 3-4), PDF leídos: división larga con comprobación, Ruffini con huecos, teoremas del resto y del factor demostrados (y la cota de $n$ raíces), candidatos a raíces enteras y racionales con justificación, multiplicidad, receta de factorización, fracciones algebraicas (simplificar factores, común denominador); 11 ejercicios con polinomios construidos desde sus factores, contrastados con división larga frente a Ruffini, evaluación en 6 puntos y barrido de candidatos, 1 desarrollo (demostrar el teorema del resto y el del factor), 7 de repaso; prerrequisito de `mat-algebra-secundaria` | 2026-11-21 |
| `mat-inecuaciones` (16) | Escrito desde Marea Verde 4.º ESO B cap. 5 (secciones 1-4), PDF leído: intervalos y semirrectas, intersección y unión, reglas de equivalencia con la demostración del cambio de sentido, primer grado y sistemas, tablas de signos para grado 2 y polinómicas, racionales (sin multiplicar por el denominador, ceros del denominador excluidos), valor absoluto como distancia, semiplanos, problemas de tarifas y notas; 11 ejercicios contrastados con barridos de todos los enteros en $[-200, 200]$ (o rejilla fina) frente al despeje y el recuento entre raíces, 1 desarrollo (por qué cambia el sentido; $1/x < 2$), 7 de repaso; prerrequisito de `mat-algebra-secundaria` | 2026-11-21 |
| `mat-exponenciales-logaritmos` (17) | Escrito desde Marea Verde 4.º ESO B caps. 2 (sección 6), 12 (secciones 1-2) y 4 (sección 2.4), PDF leídos: crecimiento y decrecimiento exponencial, número $e$, definición de logaritmo como exponente, propiedades y cambio de base demostrados, ecuaciones exponenciales (misma base, logaritmos, cambio de variable) y logarítmicas con comprobación del dominio, tiempo para alcanzar un valor, semivida, escalas logarítmicas (pH); 12 ejercicios contrastados elevando la base, con el cambio de base en otra base, sustituyendo y simulando año a año, 1 desarrollo (demostrar las propiedades; por qué no hay logaritmos de 0 ni de negativos), 7 de repaso; glosario: «logaritmo» pasa a este nodo; prerrequisito de `mat-algebra-secundaria`. **Bloque de álgebra completo** (temas 11-17): objetivo `acceso-universidad` reordenado con los temas antes de `mat-algebra-basica` y `mat-algebra-secundaria` | 2026-11-21 |
| `mat-rectas-angulos` (18) | Escrito desde Marea Verde 1.º ESO cap. 8 (sección 1), PDF leído, y Euclides, libro I (edición Joyce): punto, recta, semirrecta, segmento, posiciones; clasificación de ángulos y relaciones (complementarios, suplementarios, adyacentes, opuestos por el vértice con demostración); sistema sexagesimal con las cuatro operaciones y el paso decimal ↔ sexagesimal; paralelas y secante (y su relación con el postulado de las paralelas); mediatriz y bisectriz con construcción y propiedad de equidistancia; 12 ejercicios con aritmética exacta en segundos contrastada en grados decimales, posiciones de los ocho ángulos y simulación minuto a minuto del reloj, 1 desarrollo (opuestos, bisectrices de adyacentes, mediatriz), 7 de repaso; prerrequisito de `mat-geometria-basica` | 2026-11-21 |
