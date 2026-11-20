# Contenido del troncal: mapa, plan y revisiones (fase 9)

El **troncal** son los fundamentos (~20 % de Exodus): matemáticas y física de 1.º de ESO a 2.º de Bachillerato, más las
destrezas comunes (aprender, leer textos técnicos, razonar con evidencia) y la informática básica que usan todas las
ramas. Todo lo demás de `vault/00-troncal/` que ya es de grado pertenece a su rama (matemáticas, física, sistemas…):
no cambia de id ni de área; solo se aclara aquí qué es troncal.

## a) Fuentes de referencia (y por qué)

1. **Matemáticas: Apuntes Marea Verde, edición LOMLOE** (1.º–4.º ESO, Matemáticas I y II de Bachillerato de
   Ciencias). <https://www.apuntesmareaverde.org.es/grupos/mat/index.html>, consultado el 2026-11-20. *Por qué*: sigue el
   currículo español curso a curso (el mismo orden que el usuario habría seguido en el instituto), es gratuito y en
   español (CC BY-NC-SA 3.0; Exodus no copia texto: resume y remite) y lo escriben profesores de secundaria.
   Complemento para Bachillerato: **OpenStax, Precálculo 2ed** (en español, CC BY 4.0).
2. **Física: OpenStax, Física universitaria, volúmenes 1 y 2** (Moebs, Ling y Sanny), en español.
   <https://openstax.org/books/física-universitaria-volumen-1/pages/prefacio>, consultado el 2026-11-20. *Por qué*: no hay
   un libro abierto en español de Física y Química de ESO/Bachillerato (búsqueda del 2026-11-20); OpenStax es gratuito,
   riguroso, por capítulos y sirve después para primero de grado (continuidad). Los nodos de secundaria usan sus
   capítulos con el nivel matemático de cada curso (sin cálculo hasta Bachillerato). La licencia que muestra la web es
   CC BY-NC-SA 4.0 en el pie y CC BY 4.0 en el prefacio: indiferente para Exodus, que no reproduce su texto.

## a) Mapa: Marea Verde (matemáticas) → nodos

Leyenda: ✔ cubierto · ◐ parcial (qué falta) · ✗ hueco (nodo nuevo en el plan).

| Curso | Capítulo (Marea Verde) | Nodo de Exodus | Estado |
| --- | --- | --- | --- |
| 1.º ESO | 1 Resolución de problemas | `mat-numeros-naturales` §8 | ◐ falta el método de Pólya como hilo de todo el troncal |
| 1.º ESO | 2 Números naturales. Divisibilidad | `mat-numeros-naturales` | ✔ |
| `mat-enteros-fracciones` | Bloque práctico en §2-§5 (ascensor con sótanos, deudas, vídeo al revés, pizza, botellas); teoremas de decimales en bloques formales; sin «porcentaje» antes de su nodo; 10 ejercicios con variantes (fracciones exactas contrastadas en coma flotante / división larga); 6 de repaso. vault:check ya no cuenta ids de wikilinks como términos | 2026-11-20 |
| `mat-algebra-basica` | Bloque práctico en §2, §3, §6 y §7 (letras como cajas, hoja de cálculo, cuadrado partido, entradas de cine, presupuesto); «pendiente» sustituida por la condición $a_1b_2 - a_2b_1 
| `mat-proporcionalidad-porcentajes` | (Ya tenía §2 en escalera, variantes y banco.) Bloque práctico en inversa, §3, encadenados, §4-§6 (pizza a escote, abrigo que sube y baja, viaje al pueblo, bola de nieve, foto y gigante); demostraciones en bloques formales; «velocidad media» explicada aquí (glosario `tambien`) | 2026-11-20 |
| `mat-geometria-basica` | Bloque práctico en §2-§4 y §6-§8 (reloj y tijeras, esquinas de papel, campo de fútbol, foto ampliada, hilo y lata, cono de arroz, barcos); 6 demostraciones en bloques formales; sin «integral» ni «función» antes de su nodo; 15 ejercicios con variantes (contraste por coordenadas o búsqueda); 6 de repaso. `vault:fugas` revisa ahora la v2 (todas las variantes) | 2026-11-20 |
| `mat-movimientos-plano` (**nuevo**) | Escrito desde Marea Verde 3.º ESO cap. 9 (secciones 1-5, leído el PDF) y Coxeter caps. 3-4: isometrías, traslaciones, giros, simetrías, composición, clasificación, mosaicos/frisos/rosetones; escalera en cada sección; 4 demostraciones formales; 15 ejercicios (11 con variantes contrastadas con giro trigonométrico y reflexión por proyección; 1 desarrollo con rúbrica: los tres mosaicos regulares); 6 de repaso. Añadido al objetivo `acceso-universidad`. Afirmación sobre la Alhambra matizada (debate abierto) | 2026-11-20 |
| `mat-funciones-basicas` | Bloque práctico en §2-§5 y §7 (máquina de refrescos, taxi, pelota, rumor, notas); demostraciones (pendiente, vértice y fórmula) en bloques formales; prerequisito nuevo `mat-proporcionalidad-porcentajes` (usa la proporcionalidad directa); fuentes concretas (Marea Verde 3.º y 4.º, Charig et al. con páginas); 15 ejercicios con variantes; 6 de repaso | 2026-11-20 |
| `mat-sucesiones-progresiones` (**nuevo**) | Escrito desde Marea Verde 3.º ESO cap. 3 (secciones 1-3) y Matemáticas I cap. 3 (1.4-1.6, 2.1-2.2), ambos PDF leídos, y OpenStax Precálculo cap. 9: sucesiones, aritméticas, geométricas, sumas (Gauss, multiplicar y restar), monotonía, acotación, convergencia, suma infinita con demostración vía Bernoulli; 14 ejercicios (11 con variantes contrastadas generando términos; 1 desarrollo con rúbrica); 6 de repaso; 2 términos de glosario. Añadido al objetivo | 2026-11-20 |
| `mat-numeros-reales` (**nuevo**) | Escrito desde Marea Verde 4.º B ESO cap. 1 (secciones 1-4) y Matemáticas I cap. 1 (1.1-1.8), PDF leídos, y Spivak caps. 1-2: racionales e irracionales (√2 por reducción al absurdo), recta real y construcción de √n, densidad, valor absoluto y distancia (desigualdad triangular demostrada), intervalos, semirrectas y entornos, errores absoluto y relativo, cifras significativas, notación científica; 13 ejercicios (8 con variantes; 1 desarrollo: √3 irracional); 6 de repaso; glosario «número irracional». Añadido al objetivo y enlazado desde sucesiones | 2026-11-20 |
e 0$ (la pendiente llega en funciones); 12 ejercicios con variantes (expresiones: tipo `expresion` con forma expandida); 6 de repaso | 2026-11-20 |
| 1.º ESO | 3 Potencias y raíces | `mat-numeros-naturales` §5, `mat-algebra-secundaria` §4 | ◐ raíz cuadrada (cálculo y estimación) en ESO |
| 1.º ESO | 4 Números enteros | `mat-enteros-fracciones` | ✔ |
| 1.º ESO | 5 Fracciones | `mat-enteros-fracciones` | ✔ |
| 1.º ESO | 6 Expresiones decimales | `mat-enteros-fracciones` §5 | ✔ |
| 1.º ESO | 7 Sistemas de medida | `mat-proporcionalidad-porcentajes` §6, `fis-medida-movimiento` | ◐ falta el sistema métrico decimal (longitud, masa, capacidad, superficie, volumen) en un sitio |
| 1.º ESO | 8 Figuras planas · 9 Longitudes y áreas | `mat-geometria-basica` | ✔ |
| 1.º ESO | 10 Magnitudes proporcionales. Porcentajes | `mat-proporcionalidad-porcentajes` | ✔ |
| 1.º ESO | 11 Álgebra | `mat-algebra-basica` | ✔ |
| 1.º ESO | 12 Tablas y gráficas. Plano cartesiano | `mat-funciones-basicas` | ✔ |
| 1.º ESO | 13 Estadística y probabilidad | `mat-funciones-basicas` §7, `mat-combinatoria-probabilidad-basica` | ✔ |
| 2.º ESO | 2-6, 9-12 (números, potencias, divisibilidad, medida, áreas, proporcionalidad, álgebra, gráficas, estadística) | los mismos nodos que en 1.º | ✔ (más profundidad: en sus ejercicios) |
| 2.º ESO | 7 Cuerpos geométricos | `mat-geometria-basica` §7 | ✔ |
| 2.º ESO | 8 Movimientos en el plano y el espacio | — | ✗ **`mat-movimientos-plano`** |
| 3.º ESO | 1 Números racionales · 2 Potencias y raíces | `mat-enteros-fracciones`, `mat-algebra-secundaria` | ✔ |
| 3.º ESO | 3 Sucesiones. Progresiones | — | ✗ **`mat-sucesiones-progresiones`** |
| 3.º ESO | 4 Polinomios. Productos notables · 5 Ecuaciones de 2.º grado y sistemas | `mat-algebra-basica` §3, `mat-algebra-secundaria` | ✔ |
| 3.º ESO | 6 Proporcionalidad · 7 Educación financiera | `mat-proporcionalidad-porcentajes` §5 | ✔ |
| 3.º ESO | 8 Geometría en el plano · 10 Geometría en el espacio | `mat-geometria-basica` | ✔ |
| 3.º ESO | 9 Movimientos | — | ✗ (el mismo nodo nuevo) |
| 3.º ESO | 11 Funciones y gráficas · 12 Estadística y probabilidad | `mat-funciones-basicas`, `mat-combinatoria-probabilidad-basica` | ✔ |
| 4.º ESO B | 1 Números reales | `mat-enteros-fracciones` §4-5 | ◐ faltan irracionales, intervalos y valor absoluto → **`mat-numeros-reales`** |
| 4.º ESO B | 2-5 Potencias, polinomios, ecuaciones y sistemas, inecuaciones | `mat-algebra-secundaria`, `mat-algebra-basica` §7 | ✔ |
| 4.º ESO B | 6 Proporcionalidad · 7 Semejanza | `mat-proporcionalidad-porcentajes`, `mat-geometria-basica` §4 | ✔ |
| 4.º ESO B | 8 Trigonometría | `mat-trigonometria` | ✔ |
| 4.º ESO B | 9 Geometría (analítica en el plano) | `mat-geometria-analitica` | ✔ |
| 4.º ESO B | 10-12 Funciones (polinómicas, a trozos, de proporcionalidad inversa, exponenciales, logarítmicas, trigonométricas) | `mat-funciones-basicas`, `mat-algebra-secundaria` §5 y §7, `mat-trigonometria` §5 | ◐ faltan funciones a trozos, de proporcionalidad inversa y transformaciones de gráficas → **`mat-funciones-elementales`** |
| 4.º ESO B | 13 Derivadas | `mat-calculo-1` | ✔ |
| 4.º ESO B | 14 Estadística · 15 Combinatoria · 16 Probabilidad | `mat-funciones-basicas` §7, `mat-combinatoria-probabilidad-basica` | ✔ |
| Mat. I | 1 Números reales y complejos | — | ◐ reales (nodo nuevo de 4.º) · ✗ **`mat-numeros-complejos`** |
| Mat. I | 2 Álgebra | `mat-algebra-secundaria` | ✔ |
| Mat. I | 3 Sucesiones (y su límite) | — | ✗ (en `mat-sucesiones-progresiones`) |
| Mat. I | 4 Trigonometría · 5 Geometría analítica | `mat-trigonometria`, `mat-geometria-analitica` | ✔ |
| Mat. I | 6 Funciones · 7 Límites · 8 Derivadas | `mat-funciones-elementales` (nuevo), `mat-calculo-1` | ✔ con el nodo nuevo |
| Mat. I | 9 Probabilidad | `mat-combinatoria-probabilidad-basica` | ✔ |
| Mat. I | 10 Estadística (bidimensional: correlación y regresión) | `mat-funciones-basicas` §7 | ◐ falta la recta de regresión → **`mat-estadistica-bidimensional`** |
| Mat. II | 1 Matrices · 2 Determinantes · 3 Sistemas lineales | `mat-algebra-lineal-1` §2-5 | ✔ (el nodo es de nivel grado: sirve, con ejercicios de Bachillerato) |
| Mat. II | 4 Vectores en el espacio · 5 Rectas y planos · 6 Geometría métrica | `mat-geometria-analitica` §8 (solo una mirada) | ✗ **`mat-geometria-espacio`** |
| Mat. II | 7 Límites y continuidad · 8 Derivadas · 9 Funciones | `mat-calculo-1` | ✔ |
| Mat. II | 10 Integrales | `mat-calculo-2` | ✔ (nivel grado; cubre primitivas y área) |
| Mat. II | 11 Probabilidad y combinatoria | `mat-combinatoria-probabilidad-basica` | ✔ |
| Mat. II | 12 Distribuciones de probabilidad (binomial, normal) | `mat-probabilidad` (nivel grado) | ◐ falta a nivel de Bachillerato → **`mat-distribuciones-binomial-normal`** |

## a) Mapa: OpenStax Física universitaria → nodos (nivel de secundaria)

| Capítulo (OpenStax) | Nodo de Exodus | Estado |
| --- | --- | --- |
| Vol. 1, 1 Unidades y medidas · 2 Vectores · 3 Movimiento rectilíneo · 4 Movimiento en dos y tres dimensiones | `fis-medida-movimiento` | ✔ |
| Vol. 1, 5 Leyes de Newton · 6 Aplicaciones · 7 Trabajo y energía cinética · 8 Energía potencial y conservación · 13 Gravitación | `fis-fuerzas-energia` | ✔ |
| Vol. 1, 9 Momento lineal · 10 Rotación · 11 Momento angular · 12 Equilibrio · 15 Oscilaciones | `fis-mecanica-newtoniana` (con cálculo, Bachillerato/grado) | ✔ |
| Vol. 1, 14 Fluidos · 16 Ondas · 17 Sonido · Vol. 2, 1 Temperatura y calor | `fis-ondas-calor-fluidos` | ✔ |
| Vol. 2, 2-4 Teoría cinética y termodinámica | `fis-ondas-calor-fluidos` (introducción) | ◐ el resto, en la rama de física (`fis-termo-estadistica`) |
| Vol. 2, 9 Corriente y resistencia · 10 Circuitos de corriente continua | `ing-electricidad-basica` | ✔ |
| Vol. 2, 5-8 Campo y potencial eléctricos · 11-13 Magnetismo e inducción | `fis-electricidad-magnetismo-1` | ✔ (Física de 2.º de Bachillerato) |
| Física de 2.º de Bachillerato: óptica geométrica, física cuántica, nuclear y relatividad (volumen 3, no consultado aún) | `fis-ondas-calor-fluidos` (luz) | ✗ **`fis-fisica-moderna-bach`** (fotón y efecto fotoeléctrico, dualidad, núcleo y radiactividad, relatividad, a nivel de Bachillerato; su fuente se fija en el plan) |

**Química** (la mitad de «Física y Química» en ESO y Bachillerato, y asignatura de 2.º del doble grado de la UNED):
Exodus no tiene área de química. Hueco anotado para decidir en la fase 10/11 (área nueva `quimica` con su propio
ciclo), sin bloquear este.

## a) Destrezas e informática del troncal

| Tema | Nodo | Estado |
| --- | --- | --- |
| Cómo estudiar (recuperación, espaciado, intercalado) | `tro-aprender-a-aprender` | ✔ |
| `mat-numeros-naturales` | Bloque práctico en §2-§7 (cuentakilómetros, repartos, piezas de Lego, cuerdas y autobuses); «teorema», «algoritmo» y «logaritmo» explicados antes de usarse (glosario: campo nuevo `tambien`); demostraciones en bloques formales; 11 ejercicios con variantes; 6 preguntas de repaso | 2026-11-20 |
| Leer textos técnicos y verificar fuentes | `tro-lectura-tecnica` | ✔ |
| Razonamiento científico, incertidumbre y estimación | `tro-razonamiento-cientifico` | ✔ |
| Pensar como un programador; primer lenguaje; terminal y Git | `prog-pensamiento-computacional`, `prog-python-fundamentos`, `prog-terminal-linux-git` | ✔ |

## a) Lo que está en `00-troncal/` y es de una rama (no del troncal)

Nivel de grado, se tratan en su fase de rama (sin cambiar id): `mat-logica-demostraciones`*, `mat-matematica-discreta`,
`mat-estructuras-algebraicas`, `mat-algebra-lineal`, `mat-algebra-lineal-avanzada`, `mat-calculo-2`*,
`mat-calculo-multivariable`, `mat-analisis-real`, `mat-ecuaciones-diferenciales`, `mat-analisis-numerico`,
`mat-probabilidad`, `mat-estadistica-inferencia`, `fis-mecanica-clasica`, `fis-electromagnetismo`, `fis-ondas-optica`,
`fis-termo-estadistica`; y los de computación más allá de lo básico (`sys-*`, `ing-*` salvo electricidad básica,
`prog-estructuras-datos`, `prog-algoritmos`, `prog-poo-diseno`, `sec-*`).
(*) Usados también por el troncal como puente a primero de grado.

## b) Plan

Ningún id existente cambia ni se borra: el progreso guardado no se toca (no hay ⛔). Los nodos nuevos entran en el
orden de estudio por sus prerequisitos; el objetivo `acceso-universidad` se amplía con ellos.

### Nodos nuevos

| id | Título | Prerequisitos | Fuente (sección exacta) |
| --- | --- | --- | --- |
| `mat-movimientos-plano` | Movimientos en el plano: traslaciones, giros y simetrías | `mat-geometria-basica` | Marea Verde 2.º ESO cap. 8 y 3.º ESO cap. 9 |
| `mat-sucesiones-progresiones` | Sucesiones y progresiones aritméticas y geométricas | `mat-algebra-basica`, `mat-proporcionalidad-porcentajes` | Marea Verde 3.º ESO cap. 3 y Mat. I cap. 3; OpenStax Precálculo 2ed, secciones de secuencias aritméticas y geométricas |
| `mat-numeros-reales` | Números reales: irracionales, intervalos y valor absoluto | `mat-enteros-fracciones`, `mat-algebra-basica` | Marea Verde 4.º ESO B cap. 1 |
| `mat-funciones-elementales` | Funciones elementales: a trozos, de proporcionalidad inversa, transformaciones de gráficas | `mat-funciones-basicas`, `mat-algebra-secundaria` | Marea Verde 4.º ESO B caps. 10-12 y Mat. I cap. 6 |
| `mat-numeros-complejos` | Números complejos: forma binómica, polar y raíces | `mat-algebra-secundaria`, `mat-trigonometria` | Marea Verde Mat. I cap. 1 |
| `mat-estadistica-bidimensional` | Estadística bidimensional: correlación y recta de regresión | `mat-funciones-basicas` | Marea Verde Mat. I cap. 10 |
| `mat-geometria-espacio` | Geometría del espacio: vectores, rectas, planos, ángulos y distancias | `mat-geometria-analitica`, `mat-algebra-lineal-1` | Marea Verde Mat. II caps. 4-6 |
| `mat-distribuciones-binomial-normal` | Distribuciones binomial y normal | `mat-combinatoria-probabilidad-basica` | Marea Verde Mat. II cap. 12 |
| `fis-fisica-moderna-bach` | Física moderna de Bachillerato: fotones, átomo, núcleo y relatividad | `fis-electricidad-magnetismo-1`, `fis-ondas-calor-fluidos` | OpenStax Física universitaria vol. 3 (capítulos de física moderna: se comprueban al redactar) |

### Orden de redacción (escalera práctico → formal, glosario, banco de repaso y variantes)

Cada nodo existente se reescribe sin cambiar su id ni sus ejercicios (se añaden variantes y banco de repaso):
explicación práctica sin tecnicismos antes de cada parte formal, términos al glosario, ejemplos con otros números
que los ejercicios, y fuente con sección. Orden (el de estudio):

1. `tro-aprender-a-aprender` · 2. `mat-numeros-naturales` · 3. `mat-enteros-fracciones` · 4. `mat-algebra-basica` ·
5. `mat-proporcionalidad-porcentajes` (empezado) · 6. `mat-geometria-basica` · 7. **`mat-movimientos-plano`** ·
8. `mat-funciones-basicas` · 9. **`mat-sucesiones-progresiones`** · 10. **`mat-numeros-reales`** ·
11. `mat-algebra-secundaria` · 12. **`mat-funciones-elementales`** · 13. `mat-combinatoria-probabilidad-basica` ·
14. `mat-trigonometria` · 15. `mat-geometria-analitica` · 16. **`mat-numeros-complejos`** ·
17. **`mat-estadistica-bidimensional`** · 18. `mat-calculo-1` · 19. **`mat-geometria-espacio`** ·
20. **`mat-distribuciones-binomial-normal`** · 21. `fis-medida-movimiento` · 22. `fis-fuerzas-energia` ·
23. `fis-ondas-calor-fluidos` · 24. `ing-electricidad-basica` · 25. `fis-electricidad-magnetismo-1` ·
26. **`fis-fisica-moderna-bach`** · 27. `tro-lectura-tecnica` · 28. `tro-razonamiento-cientifico` ·
29. `prog-pensamiento-computacional` · 30. `prog-python-fundamentos` · 31. `prog-terminal-linux-git`.

Tras cada bloque de nodos: revisión independiente (d) por un subagente que no haya visto la redacción.

### Registro de redacción

| Nodo | Qué se hizo | Fecha |
| --- | --- | --- |
| `tro-aprender-a-aprender` | Escalera en §1, §2, §3 y §6; §3 actualizada a la v2 (escalera, glosario, repaso con variantes, diario de errores, temporizador); plan con cifras actuales; fuentes con páginas; 3 ejercicios con variantes y 4 preguntas de repaso; glosario del troncal (4 términos) | 2026-11-20 |

## d) Revisión independiente

(Se anota aquí cada nodo revisado, qué encontró el revisor y qué se cambió.)
