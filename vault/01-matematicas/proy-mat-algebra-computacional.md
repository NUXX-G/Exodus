---
id: proy-mat-algebra-computacional
title: "Proyecto: un sistema de álgebra computacional (racionales exactos, polinomios, Euclides extendido, factorización libre de cuadrados, factorización sobre cuerpos finitos y bases de Gröbner)"
area: matematicas
trunk_level: 13
kind: proyecto
prerequisites: [mat-estructuras-algebraicas, mat-teoria-numeros, mat-algebra-lineal-avanzada]
academic_sources:
  - "von zur Gathen, J.; Gerhard, J. Modern Computer Algebra, 3ª ed. Cambridge University Press, 2013 (Euclides, factorización libre de cuadrados, Berlekamp, Cantor-Zassenhaus)."
  - "Cox, D.; Little, J.; O'Shea, D. Ideals, Varieties, and Algorithms, 4ª ed. Springer, 2015 (órdenes monomiales, algoritmo de Buchberger, bases reducidas)."
  - "Yun, D. Y. Y. On square-free decomposition algorithms. SYMSAC 1976; Berlekamp, E. R. Factoring polynomials over finite fields. Bell System Technical Journal 46, 1967; Cantor, D. G.; Zassenhaus, H. A new algorithm for factoring polynomials over finite fields. Mathematics of Computation 36, 1981."
  - "Buchberger, B. Ein Algorithmus zum Auffinden der Basiselemente des Restklassenringes nach einem nulldimensionalen Polynomideal. Tesis doctoral, Innsbruck, 1965."
attachments: [prueba.sh]
exercises:
  - id: hito-1-racionales
    tier: 1
    prompt: |
      **Hito 1.** `alg racional EXPRESION` evalúa con racionales exactos y enteros de tamaño arbitrario una expresión con enteros no negativos, `+ - * / ^`, paréntesis y menos unario (precedencia habitual; `^` con exponente entero no negativo, más fuerte que `*` y `/`, y menos unario más fuerte que `^`) e imprime el resultado irreducible `p/q` con q > 0, o `p` si q = 1. Una división por cero, una expresión mal formada o un exponente negativo o no entero terminan con código 1.

      Comprueba con `bash prueba.sh ./alg 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:358c9bde25b867660d5458cc793136bc44072dce9606b85a4cdb632cfdd2bd34"]
  - id: hito-2-polinomios
    tier: 1
    prompt: |
      **Hito 2.** `alg poli suma|producto|division P Q`: los polinomios se escriben como sus coeficientes racionales del grado mayor al menor, separados por espacios (`1 -3/2 0 5` es x³ − 3/2·x² + 5), y se imprimen igual, sin ceros a la izquierda (el polinomio nulo es `0`). `division` imprime `cociente …` y `resto …` (división euclídea, grado del resto menor que el del divisor). Dividir entre el polinomio nulo termina con código 1.

      Comprueba con `bash prueba.sh ./alg 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:7c664aabcf69b6205fd94c2809a3b6a0cd182775e826955a9febf1f87f589328"]
  - id: hito-3-mcd-extendido
    tier: 2
    prompt: |
      **Hito 3.** `alg mcd P Q` imprime el máximo común divisor **mónico** `mcd` y los coeficientes de Bézout `s` y `t` con s·P + t·Q = mcd que da el algoritmo de Euclides extendido (los de grado mínimo). Si los dos son nulos, código 1.

      Comprueba con `bash prueba.sh ./alg 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:97d456417013dfef47970c915076989f708fb3541d6f2874085084957f38d1ec"]
  - id: hito-4-factorizacion-libre-de-cuadrados
    tier: 2
    prompt: |
      **Hito 4.** `alg factoriza P` (coeficientes enteros) imprime `contenido c` (el mcd de los coeficientes con el signo del coeficiente principal) y la factorización libre de cuadrados f = c·Π aₖᵏ: una línea `k: aₖ` por cada k con grado de aₖ positivo, con aₖ primitivo (coeficientes enteros sin factor común) y coeficiente principal positivo, en orden creciente de k. Grado 0, código 1.

      Comprueba con `bash prueba.sh ./alg 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:cb49682b60a991de4bb45ab7804af56a777ff49a2e572c06f539b3a019255d5a"]
  - id: hito-5-factorizacion-sobre-fp
    tier: 3
    prompt: |
      **Hito 5.** `alg fp p P` (p primo impar, coeficientes enteros que se reducen módulo p) imprime `coeficiente c` (el principal módulo p) y la factorización en irreducibles mónicos: una línea `multiplicidad: coeficientes` por factor (del grado mayor al menor, en [0, p)), ordenadas por grado, después por coeficientes (lexicográficamente) y después por multiplicidad. p = 2, p no primo o grado 0 terminan con código 1.

      Comprueba con `bash prueba.sh ./alg 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:30d9eb8c6040f5d32a2edf5a0d8eda54abb2393c13580cef6ed5ecdafdc5597e"]
  - id: hito-6-bases-de-groebner
    tier: 3
    prompt: |
      **Hito 6.** `alg grobner n P1 P2 …` calcula la base de Gröbner **reducida** del ideal en ℚ[x₁, …, xₙ] con el orden lexicográfico x₁ > … > xₙ. Cada polinomio se escribe como términos `coef[e1,…,en]` separados por espacios (`1[2,0] -1/2[0,1]` es x₁² − ½x₂). Imprime un polinomio por línea, mónico, con sus términos en orden decreciente y los polinomios en orden decreciente de su monomio principal. Un término mal formado termina con código 1.

      Comprueba con `bash prueba.sh ./alg 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:39c55d8f0d9cc0f4cf1579c919ecbea7cb67daa589fcfe6872871a1dbde30119"]
---

Vas a escribir **`alg`**, el núcleo de un sistema de álgebra computacional como los que hay dentro de Mathematica, Maple, SageMath o SymPy: aritmética **exacta** (nada de coma flotante), polinomios, máximo común divisor
con coeficientes de Bézout, factorización libre de cuadrados, factorización completa sobre cuerpos finitos y bases de Gröbner para resolver sistemas de ecuaciones polinómicas. Cada pieza es un algoritmo clásico
con nombre propio y una idea matemática profunda detrás, y todas se comprueban de una forma muy exigente: la salida es **canónica** (única), así que cualquier algoritmo correcto da exactamente el mismo texto.
Aplica [[mat-estructuras-algebraicas]] (anillos de polinomios, ideales, cuerpos finitos), [[mat-teoria-numeros]] y [[mat-algebra-lineal-avanzada]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `alg` en el lenguaje que quieras, con seis órdenes (`racional`, `poli`, `mcd`, `factoriza`, `fp` y `grobner`), una por hito, con el contrato exacto de los ejercicios. El adjunto **`prueba.sh`**
ejecuta tu programa en casos preparados y da un código por hito si todo coincide; con `-v` muestra cada salida. Necesitas **enteros de tamaño arbitrario** (los de Python, `BigInt` en JavaScript, `num-bigint` en
Rust, GMP en C).

## 2. Racionales exactos

Un racional es un par (p, q) con q > 0 y mcd(p, q) = 1, normalizado tras **cada** operación (si no, los números crecen sin control). La expresión se analiza con descenso recursivo y la gramática
expr → término (± término)*, término → factor ((* | /) factor)*, factor → unario (^ unario)?, unario → − unario | ( expr ) | número. Al reducir la suma armónica 1 + ½ + … + 1/12 o calcular 2¹⁰⁰/6²⁰ verás por qué la
coma flotante no sirve para esto.

## 3. Polinomios y Euclides extendido

Un polinomio sobre ℚ es la lista de sus coeficientes; guarda la representación normalizada (sin ceros principales). La **división euclídea** P = C·Q + R con grado R < grado Q es la base de todo lo demás. El
**algoritmo de Euclides** encadena divisiones (rᵢ₊₁ = rᵢ₋₁ mód rᵢ) hasta el resto cero; el último resto no nulo, dividido por su coeficiente principal, es el mcd mónico. La versión **extendida** mantiene a la vez
sᵢ y tᵢ con sᵢ·P + tᵢ·Q = rᵢ, y da los coeficientes de Bézout (los de grado mínimo: grado s < grado Q − grado mcd). Con ellos se calculan inversos en ℚ[x]/(m(x)), que es como se construyen los cuerpos finitos y las
extensiones algebraicas.

## 4. Factorización libre de cuadrados

Un factor repetido de f también divide a f′: mcd(f, f′) recoge las multiplicidades. El algoritmo de **Yun** (1976) separa f = c·Π aₖᵏ, con los aₖ libres de cuadrados y coprimos entre sí, usando solo mcd y
derivadas: b₁ = f/a₀, c₁ = f′/a₀ con a₀ = mcd(f, f′), y en cada paso aₖ = mcd(bₖ, dₖ) con dₖ = cₖ − bₖ′. (El algoritmo de **Musser** obtiene lo mismo de otra forma; cualquiera vale.) Para que la salida sea
única, cada aₖ se da **primitivo** (coeficientes enteros sin factor común) y con coeficiente principal positivo, y el contenido aparte con su signo. Es el primer paso de cualquier factorización completa sobre ℤ.

## 5. Factorización sobre 𝔽ₚ

Sobre un cuerpo finito, todo polinomio se factoriza en irreducibles de forma única, y hay algoritmos eficientes para encontrarlos:

1. **Libre de cuadrados** en característica p, con una diferencia: si f′ = 0, entonces f(x) = g(x^p) = g(x)^p (en 𝔽ₚ, cᵖ = c), y hay que extraer la raíz p-ésima y multiplicar las multiplicidades por p.
2. **Berlekamp** (1967): los polinomios h con h^p ≡ h (mód f) forman un subespacio (el núcleo de Q − I, con Q la matriz de la aplicación de Frobenius h ↦ h^p mód f); su dimensión es el número de factores
   irreducibles, y los mcd(f, h − s) para s ∈ 𝔽ₚ separan los factores.
3. **Cantor-Zassenhaus** (1981): primero, la **factorización por grados distintos** (mcd(f, x^(p^d) − x) reúne los factores irreducibles de grado d); después, la de **grado igual**, probabilista: para un a(x) al azar,
   mcd(f, a^((p^d − 1)/2) − 1) separa los factores con probabilidad cercana a ½ (por eso exige p impar).

Las dos dan los mismos factores, porque la factorización es única: ordénalos como dice el contrato y ambas salidas coinciden carácter a carácter.

## 6. Bases de Gröbner

Para un sistema de ecuaciones polinómicas en varias variables, la base de Gröbner del ideal que generan juega el papel de la forma escalonada de Gauss en los sistemas lineales: con el orden **lexicográfico**, la
última ecuación tiene solo la última variable, y se puede despejar hacia atrás. **Buchberger** (1965): para cada par de polinomios, su **S-polinomio** (la combinación que cancela los monomios principales) se reduce
por la base; si no da cero, se añade; se repite hasta que todos los pares se reducen a cero. El resultado depende del orden en que se procesan los pares, pero la base **reducida** (polinomios mónicos, ningún
monomio de uno divisible por el principal de otro) es **única** para cada ideal y orden: eso es lo que imprime `grobner`. Mejoras clásicas: el criterio del producto (si los monomios principales no comparten
variables, el S-polinomio se reduce a cero) y la estrategia normal (procesar antes el par de menor mínimo común múltiplo).

## 7. Arquitectura recomendada

- Capas: racionales → polinomios en una variable sobre ℚ → polinomios sobre 𝔽ₚ (enteros módulo p) → polinomios en varias variables (diccionario de exponentes a coeficientes).
- Normaliza siempre (fracciones reducidas, sin ceros principales, términos nulos eliminados).
- Pruebas propias: el producto de los factores devuelve el polinomio; s·P + t·Q = mcd; cada factor de `fp` es irreducible (no tiene factores de grado ≤ n/2: compruébalo con mcd con x^(p^d) − x); el resto de reducir
  cada generador original por la base de Gröbner es cero.

## 8. Ampliaciones

Factorización sobre ℤ (Hensel y Zassenhaus, o LLL de van Hoeij), mcd modular, resultantes y eliminación, raíces racionales y aislamiento de raíces reales con la regla de Descartes o secuencias de Sturm,
derivación simbólica de expresiones, o el algoritmo F4 de Faugère para Gröbner.

## 9. Recursos

von zur Gathen y Gerhard (capítulos 3, 14 y 15), Cox, Little y O'Shea (capítulos 2 y 3) y los artículos originales de Yun, Berlekamp y Cantor-Zassenhaus. La teoría de anillos e ideales, en
[[mat-estructuras-algebraicas]].
