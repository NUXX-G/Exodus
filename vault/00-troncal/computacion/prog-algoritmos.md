---
id: prog-algoritmos
title: "Algoritmos: complejidad, ordenación, dividir y vencer, programación dinámica"
area: bajo-nivel
trunk_level: 9
prerequisites: [prog-estructuras-datos, mat-calculo-1]
academic_sources:
  - "Cormen, T. H.; Leiserson, C. E.; Rivest, R. L.; Stein, C. Introduction to Algorithms, 4ª ed. MIT Press, 2022."
  - "Dasgupta, S.; Papadimitriou, C.; Vazirani, U. Algorithms. McGraw-Hill, 2008."
  - "Sedgewick, R.; Wayne, K. Algorithms, 4ª ed. Addison-Wesley, 2011."
  - "Knuth, D. E. The Art of Computer Programming, vol. 3: Sorting and Searching, 2ª ed. Addison-Wesley, 1998."
  - "Skiena, S. S. The Algorithm Design Manual, 3ª ed. Springer, 2020."
hints:
  - "Concepto: un algoritmo se evalúa por su corrección (demostrable con un invariante de bucle o inducción) y por cómo crece su coste con el tamaño de la entrada. Para recurrencias, dibuja el árbol de llamadas y suma el trabajo por niveles. En programación dinámica, define el estado (qué subproblema), la recurrencia y el orden de cálculo, y comprueba con un caso pequeño a mano."
  - "Herramienta: cuenta operaciones con un contador dentro del código (no con el reloj) para comparar algoritmos; `time.perf_counter` y `timeit` para medir tiempos reales; para comprobar una solución de programación dinámica, escribe la fuerza bruta (todas las posibilidades) y compara resultados en entradas pequeñas."
  - "Documentación oficial: docs.python.org/3/library/functools.html (lru_cache), docs.python.org/3/library/timeit.html y wiki.python.org/moin/TimeComplexity; Cormen et al., capítulos sobre crecimiento de funciones, dividir y vencer, programación dinámica y algoritmos voraces; Dasgupta-Papadimitriou-Vazirani, capítulos de divide y vencerás y programación dinámica."
exercises:
  - id: doble-bucle
    tier: 1
    prompt: |
      ¿Cuántas veces se ejecuta `c += 1`?

      ~~~python
      n = 60
      c = 0
      for i in range(n):
          for j in range(i, n):
              c += 1
      ~~~
      Respuesta: un entero.
    answers: ["sha256:aa4b0d224e2b4488c6e3c5692347a0e26322d86dcb6bf01ab937e15d76037ee4"]
  - id: busqueda-binaria-peor-caso
    tier: 1
    prompt: |
      ¿Cuántas comparaciones hace **como máximo** la búsqueda binaria en una lista ordenada de $1\,000\,000$ de elementos? Respuesta: la **parte entera superior** de $\log_2(n + 1)$, un entero.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: desplazamientos-insercion
    tier: 1
    prompt: |
      La ordenación por inserción desplaza elementos hacia la derecha. Para la lista `[5, 2, 4, 6, 1, 3]`, ¿cuántos desplazamientos hace en total? (Cada vez que `a[j + 1] = a[j]` se ejecuta cuenta uno;
      equivale al número de inversiones.) Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: comparaciones-de-mezcla
    tier: 2
    prompt: |
      La ordenación por mezcla (`merge sort`) en el **peor caso** cumple $T(n) = T(\lfloor n/2\rfloor) + T(\lceil n/2\rceil) + n - 1$ comparaciones, con $T(1) = 0$. ¿Cuánto vale $T(8)$? Respuesta: un entero.
    answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
  - id: llamadas-de-fibonacci
    tier: 2
    prompt: |
      La función `fib(n)` ingenua (`return n if n < 2 else fib(n-1) + fib(n-2)`) se llama recursivamente. ¿Cuántas llamadas se hacen **en total** (incluida la primera) al evaluar `fib(20)`? Respuesta: un entero.
    answers: ["sha256:ca8760cb35d2a66f62fd642cdd708f7d4970d5e3c0512ce078bd60cf8f88d946"]
  - id: memoizacion
    tier: 2
    prompt: |
      Se evalúa `fib(50)` con memoización (`functools.lru_cache`). ¿Cuántos valores **distintos** de `n` quedan almacenados en la caché al terminar? Respuesta: un entero.
    answers: ["sha256:031b4af5197ec30a926f48cf40e11a7dbc470048a21e4003b7a3c07c5dab1baa"]
  - id: mochila
    tier: 3
    prompt: |
      Problema de la mochila 0/1: capacidad $10$ y objetos (peso, valor): $(5, 10)$, $(4, 40)$, $(6, 30)$, $(3, 50)$; cada objeto se usa a lo sumo una vez. ¿Cuál es el **valor máximo** que cabe? Respuesta: un entero.
    answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
  - id: subsecuencia-comun
    tier: 3
    prompt: |
      ¿Cuál es la longitud de la **subsecuencia común más larga** (no necesariamente contigua) de `ACGTTGCA` y `GTACGCAT`? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: cambio-optimo
    tier: 3
    prompt: |
      Con monedas de valor $1, 5, 10, 21$ y $25$ (cantidad ilimitada de cada una), ¿cuál es el **mínimo número de monedas** para pagar exactamente $63$? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: cambio-voraz
    tier: 3
    prompt: |
      Con las mismas monedas $1, 5, 10, 21, 25$, el algoritmo **voraz** toma siempre la mayor moneda que cabe. ¿Cuántas monedas usa para pagar $63$? (Compáralo con el óptimo: el voraz no siempre acierta.) Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: torres-de-hanoi
    tier: 2
    prompt: |
      Las Torres de Hanoi con $n$ discos necesitan $H(n) = 2H(n-1) + 1$ movimientos, con $H(0) = 0$. ¿Cuánto vale $H(10)$? Respuesta: un entero.
    answers: ["sha256:6629ddae3736e894e89cb4a1300a9d2c5c0fad418f8ea06a341b81f2a98bb491"]
  - id: caminos-en-cuadricula
    tier: 2
    prompt: |
      En una cuadrícula de $8\times8$ casillas, ¿de cuántas maneras se puede ir de la esquina superior izquierda a la inferior derecha moviéndose solo a la **derecha** o **hacia abajo** una casilla cada vez? Respuesta: un entero.
    answers: ["sha256:a898a8776c1b93c5718bf0d1c5f4e90fc60d7bc54c8699bc676cf9f60ce2aec9"]
  - id: distancia-de-edicion
    tier: 3
    prompt: |
      La **distancia de edición** (Levenshtein) es el mínimo de inserciones, borrados y sustituciones de un carácter para transformar una cadena en otra. ¿Cuál es entre `kitten` y `sitting`? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: euclides-extendido
    tier: 3
    prompt: |
      El algoritmo de Euclides extendido halla $g = \gcd(a, b)$ y enteros $x, y$ con $ax + by = g$. Para $a = 240$ y $b = 46$, con la recursión estándar
      `eg(a, b) = (g, y', x' - (a//b) y')` donde `(g, x', y') = eg(b, a % b)`, y `eg(a, 0) = (a, 1, 0)`, ¿qué terna $(g, x, y)$ se obtiene? Respuesta en la forma «g;x;y».
    answers: ["sha256:180475a05801d5d391e18c826301f24d52b8aa45fe4043992c72d5367afb9f0e"]
  - id: criba-operaciones
    tier: 3
    prompt: |
      La criba de Eratóstenes hasta $100$ marca los múltiplos de cada primo $p\le10$ **empezando en $p^2$**. ¿Cuántas marcas (asignaciones `s[m] = False`) hace en total? Respuesta: un entero.
    answers: ["sha256:5ef6fdf32513aa7cd11f72beccf132b9224d33f271471fff402742887a171edf"]
  - id: quicksort-peor-caso
    tier: 3
    prompt: |
      Un quicksort toma como pivote el **primer** elemento y en cada llamada compara el pivote con los demás. Sobre la lista **ya ordenada** de $10$ elementos, ¿cuántas comparaciones hace en total? (Es el peor caso: $\binom{n}{2}$.) Respuesta: un entero.
    answers: ["sha256:811786ad1ae74adfdd20dd0372abaaebc6246e343aebd01da0bfc4c02bf0106c"]
---

# Algoritmos: complejidad, ordenación, dividir y vencer, programación dinámica

Un **algoritmo** es un método preciso para resolver un problema. Pero el mismo problema admite algoritmos que tardan un segundo o mil años: ordenar un millón de números cuesta una fracción de segundo con un buen algoritmo
y días con uno malo. Entender **cuánto cuesta** cada uno, **por qué es correcto** y **qué técnicas** sirven para diseñarlos es lo que distingue a un programador que escribe código de uno que **resuelve problemas**. Este nodo
da el lenguaje (la complejidad), las técnicas clásicas y la forma de razonar sobre ellas.

## Objetivos

Al terminar sabrás:

1. Medir un algoritmo contando operaciones y expresarlo con $O$, $\Omega$ y $\Theta$.
2. Demostrar la corrección de un algoritmo con **invariantes de bucle** e inducción.
3. Entender y analizar los algoritmos de ordenación y búsqueda clásicos y sus límites.
4. Diseñar con **dividir y vencer**, resolver recurrencias y aplicar el teorema maestro.
5. Resolver problemas con **programación dinámica** y distinguir cuándo basta un algoritmo **voraz**.
6. Reconocer problemas intratables (NP) y qué hacer ante ellos.

> [!question] Test de entrada
> 1. ¿Cuántos elementos mira, como máximo, una búsqueda lineal en $1000$ elementos? 2. ¿Y una búsqueda binaria? 3. ¿Cuántas veces se ejecuta el interior de dos bucles anidados `for i in range(n): for j in range(n)`?
>
> Respuestas: $1000$; unos $10$; $n^2$.

## 1. Para qué sirve

- **Rendimiento a escala**: buscadores, redes sociales, mapas y bases de datos manejan miles de millones de elementos; la diferencia entre $n\log n$ y $n^2$ es la diferencia entre posible e imposible.
- **Resolver problemas difíciles**: rutas, asignación, planificación, edición de texto, bioinformática, compresión.
- **Entrevistas y criterio profesional**: elegir el algoritmo adecuado y justificarlo.
- **Seguridad**: muchos ataques explotan el coste de un algoritmo (por ejemplo, entradas que hacen degenerar un quicksort o una tabla hash).

## 2. Contar operaciones y notación asintótica

No se mide el tiempo en segundos (depende de la máquina), sino el **número de operaciones elementales** en función del **tamaño de la entrada** $n$. En un doble bucle con `j` desde `i` hasta $n - 1$, el interior se ejecuta
$n + (n-1) + \cdots + 1 = \frac{n(n+1)}{2}$ veces: para $n = 100$, $5050$.

**Notación $O$.** $f(n) = O(g(n))$ si existen $c > 0$ y $n_0$ tales que $f(n) \le c\,g(n)$ para todo $n \ge n_0$: **cota superior**, ignorando constantes y términos menores. $\Omega$ es la cota inferior y $\Theta$ cuando coinciden ambas.
**Ejemplo:** $\frac{n(n+1)}{2} = \Theta(n^2)$, porque $\frac{n^2}{2} \le \frac{n(n+1)}{2} \le n^2$ para $n \ge 1$. Reglas: se **suman** las partes en secuencia (queda la mayor), se **multiplican** las anidadas, y se descartan constantes.

**La jerarquía** (de menor a mayor crecimiento):

$$
1 \ll \log n \ll \sqrt n \ll n \ll n\log n \ll n^2 \ll n^3 \ll 2^n \ll n! .
$$

Lo que significa en la práctica, suponiendo $10^9$ operaciones por segundo:

| $n$ | $n\log_2 n$ | $n^2$ | $2^n$ |
|---|---|---|---|
| $10^3$ | $10^4$ (10 µs) | $10^6$ (1 ms) | $\approx10^{301}$ (**inimaginable**) |
| $10^6$ | $2\cdot10^7$ (20 ms) | $10^{12}$ (**17 min**) | — |
| $10^9$ | $3\cdot10^{10}$ (30 s) | $10^{18}$ (**32 años**) | — |

**Casos.** El coste puede depender de la entrada concreta: **mejor caso**, **peor caso** (el que se suele garantizar) y **caso promedio**. El análisis **amortizado** promedia sobre una secuencia de operaciones: añadir al final de una lista dinámica cuesta
$O(1)$ amortizado aunque a veces copie todo.

## 3. Corrección: invariantes de bucle

Un algoritmo es **correcto** si termina y da la respuesta pedida. Para bucles se usa un **invariante**: una propiedad que se cumple **antes** de cada iteración y que, al final, implica el resultado. Se prueba como una inducción:
**inicialización** (vale al empezar), **conservación** (si vale antes de una iteración, vale después) y **terminación** (al acabar, el invariante da la corrección).

**Ejemplo: búsqueda binaria.** Invariante: «si el objetivo está en la lista, está en `lista[lo..hi]`». Inicialmente `lo = 0`, `hi = n-1`: cierto. Cada paso compara con el punto medio y descarta una mitad **sin perder** el objetivo: se conserva.
Cada paso reduce `hi - lo` al menos a la mitad (**variante decreciente**), así que termina en $\lceil\log_2(n + 1)\rceil$ pasos como máximo. Si al terminar `lo > hi`, el intervalo está vacío: el objetivo no está.

**Ejemplo: ordenación por inserción.** Invariante: «`a[0..i-1]` está ordenado y contiene los elementos originales de esas posiciones». Insertar `a[i]` en su sitio lo conserva.

## 4. Ordenación

Ordenar es la operación más estudiada. **Ordenación por inserción** ($O(n^2)$ en el peor caso, $O(n)$ si ya está casi ordenada): cada elemento se desplaza hacia atrás hasta su sitio. El número de **desplazamientos** es el de **inversiones**
(pares fuera de orden), como en [[prog-pensamiento-computacional]]: $[5,2,4,6,1,3]$ tiene $9$.

### Ordenación por mezcla (merge sort)

**Dividir y vencer:** se parte la lista en dos mitades, se ordena cada una **recursivamente** y se **mezclan** (combinar dos listas ordenadas cuesta $O(n)$).

```python
def mezcla(a):
    if len(a) <= 1:
        return a
    m = len(a) // 2
    izq, der = mezcla(a[:m]), mezcla(a[m:])
    res, i, j = [], 0, 0
    while i < len(izq) and j < len(der):
        if izq[i] <= der[j]:                 # <= mantiene el orden relativo: es ESTABLE
            res.append(izq[i]); i += 1
        else:
            res.append(der[j]); j += 1
    return res + izq[i:] + der[j:]
```

**Análisis.** $T(n) = 2T(n/2) + \Theta(n)$. Árbol de llamadas: en cada nivel el trabajo total es $\approx n$, y hay $\log_2 n$ niveles, luego $T(n) = \Theta(n\log n)$. Para el **peor caso en comparaciones**, $T(n) = T(\lfloor n/2\rfloor) + T(\lceil n/2\rceil) + n - 1$:
$T(8) = 17$, que coincide con $n\log_2 n - n + 1$ para potencias de $2$.

### Quicksort

Se elige un **pivote**, se reparten los demás en menores y mayores, y se ordena cada parte recursivamente. En **promedio** es $\Theta(n\log n)$ y muy rápido en la práctica; pero con mala elección del pivote (primer elemento sobre una lista **ya ordenada**) el reparto es
$0 + (n-1)$ y cuesta $\binom n2 = \Theta(n^2)$ comparaciones: **peor caso cuadrático**. Se evita eligiendo el pivote **aleatorio** o la **mediana de tres**.

### ¿Se puede ordenar más rápido?

**Teorema.** Cualquier algoritmo que ordene **solo comparando** elementos necesita $\Omega(n\log n)$ comparaciones en el peor caso.
*Demostración.* Cada comparación tiene dos resultados, luego un algoritmo es un **árbol de decisión binario**. Debe tener al menos una hoja por cada permutación posible: $n!$ hojas, y un árbol binario con $L$ hojas tiene altura $\ge\log_2 L$. Como $\log_2 n! = \Theta(n\log n)$
(por la aproximación de Stirling), la altura, es decir, el peor caso, es $\Omega(n\log n)$. $\blacksquare$ Merge sort y heapsort son, pues, **óptimos** entre los de comparación. Si se conoce más sobre los datos (enteros en un rango pequeño $k$), la **ordenación por conteo** funciona
en $O(n + k)$ sin comparar. `sorted()` de Python usa **Timsort** ($O(n\log n)$, estable, aprovecha tramos ya ordenados).

## 5. Dividir y vencer y recurrencias

El patrón: dividir en subproblemas **del mismo tipo y menor tamaño**, resolver recursivamente y **combinar**. Su coste obedece a recurrencias $T(n) = aT(n/b) + f(n)$.

**Teorema maestro** (versión simple, con $f(n) = \Theta(n^d)$): $T(n) = \Theta(n^d)$ si $a < b^d$; $\Theta(n^d\log n)$ si $a = b^d$; $\Theta(n^{\log_b a})$ si $a > b^d$.
Merge sort: $a = 2$, $b = 2$, $d = 1$, $2 = 2^1$: $\Theta(n\log n)$. Búsqueda binaria: $a = 1$, $b = 2$, $d = 0$: $\Theta(\log n)$.

**Exponenciación rápida.** Para calcular $x^n$: $x^n = (x^{n/2})^2$ si $n$ es par y $x\cdot x^{n-1}$ si es impar: **$O(\log n)$ productos** en lugar de $n - 1$. Es la base de la criptografía de clave pública ([[sec-criptografia]]) y de calcular los términos de Fibonacci por matrices ([[mat-algebra-lineal-1]]).

```python
def potencia(x, n, mod=None):
    if n == 0:
        return 1
    mitad = potencia(x, n // 2, mod)
    r = mitad * mitad
    if n % 2:
        r *= x
    return r % mod if mod else r

assert potencia(2, 100) == 2**100 and potencia(3, 200, 1000007) == pow(3, 200, 1000007)
```

## 6. Programación dinámica

Cuando un problema se descompone en **subproblemas que se repiten** (solapados) y la solución óptima se construye con óptimas de los subproblemas (**subestructura óptima**), resolver cada subproblema **una sola vez** y guardar el resultado puede bajar el coste de
exponencial a polinómico. Dos formas: **memoización** (recursión con caché) y **tabulación** (rellenar una tabla en orden).

**Ejemplo: Fibonacci.** La versión recursiva ingenua recalcula una y otra vez: para `fib(20)` hace **21 891 llamadas**; el número de llamadas crece como $\varphi^n$. Con memoización solo se calculan $n + 1$ valores distintos:

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    return n if n < 2 else fib(n - 1) + fib(n - 2)

assert fib(50) == 12586269025 and fib.cache_info().currsize == 51      # 51 valores distintos
```

**Método para diseñar una solución:** **1)** definir el **estado** (¿qué subproblema?); **2)** escribir la **recurrencia**; **3)** fijar los **casos base**; **4)** decidir el **orden** de cálculo; **5)** leer la respuesta. Siempre se **valida** contra la fuerza bruta en entradas pequeñas.

### Mochila $0/1$

Dados objetos con peso y valor y una capacidad $W$, maximizar el valor sin pasarse. Estado: $dp[c]$ = máximo valor con capacidad $c$. Para cada objeto $(w, v)$, **en orden decreciente de $c$** (para no usarlo dos veces): $dp[c] = \max(dp[c],\ dp[c - w] + v)$. Coste $O(nW)$.

```python
def mochila(items, W):
    dp = [0] * (W + 1)
    for w, v in items:
        for c in range(W, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[W]

assert mochila([(2, 3), (3, 4), (4, 5), (5, 6)], 5) == 7        # los objetos (2,3) y (3,4)
```

### Subsecuencia común más larga y distancia de edición

**LCS** de dos cadenas $a$ y $b$: $d[i][j] = d[i-1][j-1] + 1$ si $a_i = b_j$, y $\max(d[i-1][j],\ d[i][j-1])$ si no. Coste $O(|a||b|)$. Es la base de `diff` y de la comparación de secuencias de ADN. La **distancia de edición** (Levenshtein) cuenta el mínimo de inserciones, borrados y sustituciones: entre
*kitten* y *sitting* es $3$ (sustituir k→s, e→i, insertar g). Se usa en correctores ortográficos y en la búsqueda aproximada.

```python
def levenshtein(a, b):
    d = list(range(len(b) + 1))
    for i in range(1, len(a) + 1):
        previo, d[0] = d[0], i
        for j in range(1, len(b) + 1):
            tmp = d[j]
            d[j] = min(d[j] + 1, d[j - 1] + 1, previo + (a[i - 1] != b[j - 1]))
            previo = tmp
    return d[len(b)]

assert levenshtein("kitten", "sitting") == 3
```

**Otros ejemplos:** el **número de caminos** en una cuadrícula $n\times m$ (derecha/abajo) cumple $c[i][j] = c[i-1][j] + c[i][j-1]$ y vale $\binom{n+m-2}{n-1}$ (la misma recurrencia del triángulo de Pascal: ver [[mat-combinatoria-probabilidad-basica]]); el **cambio de monedas mínimo**; el camino más corto en un grafo (Bellman-Ford).

## 7. Algoritmos voraces

Un algoritmo **voraz** (*greedy*) construye la solución tomando, en cada paso, la **mejor opción local**, sin retroceder. Es muy rápido y simple, pero **solo es correcto en ciertos problemas**, y hay que **demostrarlo**.

**Cuando funciona: selección de actividades.** Dadas actividades con horarios, elegir el máximo número sin solaparse: ordenar por **hora de fin** y tomar siempre la primera compatible. *Demostración por intercambio:* cualquier solución óptima puede transformarse, sin perder tamaño, en una que incluya la actividad
que acaba antes; se razona por inducción. Otros casos correctos: **Dijkstra** (pesos no negativos), **Kruskal** y **Prim** (árbol de expansión mínimo) y los **códigos de Huffman**.

**Cuando falla: el cambio de monedas.** Con las monedas del euro (1, 2, 5, 10, 20, 50...) el voraz es óptimo, pero con $\{1, 5, 10, 21, 25\}$ para pagar $63$: voraz $= 25 + 25 + 10 + 1 + 1 + 1$ (**6** monedas) y el óptimo es $21 + 21 + 21$ (**3**). La
programación dinámica ($dp[n] = 1 + \min dp[n - m]$) lo resuelve bien.

```python
def cambio_minimo(monedas, N):
    dp = [0] + [10**9] * N
    for n in range(1, N + 1):
        for m in monedas:
            if m <= n:
                dp[n] = min(dp[n], dp[n - m] + 1)
    return dp[N]

assert cambio_minimo([1, 5, 10, 21, 25], 63) == 3
```

## 8. Fuerza bruta, retroceso y problemas difíciles

La **fuerza bruta** prueba todas las posibilidades. El **retroceso** (*backtracking*) las explora construyendo la solución paso a paso y **abandona** una rama en cuanto es inviable (poda). **Ejemplo: el problema de las $8$ reinas** (colocar $8$ reinas sin que se ataquen): tiene $92$ soluciones.

```python
def reinas(n):
    def poner(fila, cols, d1, d2):
        if fila == n:
            return 1
        total = 0
        for c in range(n):
            if c not in cols and fila - c not in d1 and fila + c not in d2:
                total += poner(fila + 1, cols | {c}, d1 | {fila - c}, d2 | {fila + c})
        return total
    return poner(0, frozenset(), frozenset(), frozenset())

assert reinas(8) == 92
```

**Clases de complejidad.** **P** es el conjunto de problemas resolubles en tiempo **polinómico**; **NP**, los problemas cuya solución se **verifica** en tiempo polinómico. Hay problemas **NP-completos** (SAT, viajante, mochila general, coloreado de grafos): si uno se resolviera en tiempo polinómico, todos los de NP
también (**P vs NP** es el gran problema abierto; la mayoría de los expertos cree que $\text{P}\ne\text{NP}$). Ante un problema NP-completo se usan **heurísticas**, **aproximaciones**, **instancias pequeñas** o se explota la estructura. La seguridad de buena parte de la
criptografía se apoya en que ciertos problemas parecen difíciles ([[sec-criptografia]]).

## 9. Teoría de números algorítmica

El **algoritmo de Euclides** halla el mcd con $O(\log\min(a, b))$ divisiones: el peor caso son **números de Fibonacci consecutivos** (de ahí que $\gcd(10946, 6765)$ necesite $19$ pasos). El **Euclides extendido** halla también los coeficientes de **Bézout** $x, y$ con $ax + by = \gcd(a, b)$: para
$(240, 46)$ da $\gcd = 2 = 240\cdot(-9) + 46\cdot47$. Es la forma de calcular **inversos modulares** (cuando $\gcd(a, m) = 1$, $x$ es $a^{-1}\bmod m$), imprescindible en RSA. La **criba de Eratóstenes** halla todos los primos hasta $N$ en $O(N\log\log N)$.

## 10. En la práctica

- **Primero correcto, luego rápido.** La optimización prematura es una fuente de errores. Mide antes de optimizar.
- **Mide de verdad:** `timeit` para microbenchmarks, un **perfilador** (`cProfile`) para ver dónde se va el tiempo; a menudo el cuello de botella no es donde crees.
- **Elige la estructura de datos adecuada** ([[prog-estructuras-datos]]): cambiar una lista por un conjunto convierte un $O(n^2)$ en $O(n)$.
- Las **constantes** y la **memoria caché** importan: dos algoritmos del mismo orden pueden diferir $10\times$ en la práctica.
- Usa la biblioteca estándar: `sorted`, `bisect`, `heapq`, `itertools` están muy optimizadas.

## 11. Errores típicos

- Confundir $O$ con «tiempo exacto»: ignora constantes y vale solo para $n$ grande.
- Olvidar el caso base de una recursión o la condición de terminación del bucle.
- Quicksort con pivote fijo sobre datos ordenados (cuadrático).
- Memoización con estados mutables o mal definidos (la recurrencia debe depender **solo** del estado).
- En la mochila, iterar $c$ de menor a mayor (permite usar un objeto varias veces: es otro problema).
- Suponer que un voraz es óptimo sin demostrarlo.
- Medir un algoritmo con una sola entrada pequeña.

## Repaso: lo que debe quedarte dentro de un mes

1. $O$, $\Omega$, $\Theta$; jerarquía $1 \ll \log n \ll n \ll n\log n \ll n^2 \ll 2^n$; invariantes de bucle para demostrar corrección.
2. Merge sort $\Theta(n\log n)$ (dividir y vencer); quicksort promedio $n\log n$, peor $n^2$; ordenar por comparaciones $\Omega(n\log n)$.
3. Teorema maestro $T(n) = aT(n/b) + \Theta(n^d)$; exponenciación rápida $O(\log n)$.
4. Programación dinámica: estado, recurrencia, base, orden; mochila, LCS, edición, cambio.
5. Voraz solo si se demuestra; P frente a NP; heurísticas.

## Siguiente

`sys-bases-datos` aplica árboles B, índices y optimización de consultas; `prog-poo-diseno` trata el diseño de software a gran escala; y las ramas de ciberseguridad e IA reutilizan constantemente estas técnicas.
