---
id: mat-algebra-lineal
title: "Álgebra lineal II: espacios vectoriales abstractos, aplicaciones lineales, determinante, autovalores y producto interior"
area: matematicas
trunk_level: 9
prerequisites: [mat-algebra-lineal-1, mat-logica-demostraciones]
academic_sources:
  - "Axler, S. Linear Algebra Done Right, 4ª ed. Springer, 2024 (acceso abierto, licencia CC BY-NC; linear.axler.net)."
  - "Strang, G. Introduction to Linear Algebra, 6ª ed. Wellesley-Cambridge Press, 2023; y MIT OpenCourseWare 18.06 Linear Algebra, primavera de 2010."
  - "Hoffman, K.; Kunze, R. Linear Algebra, 2ª ed. Prentice-Hall, 1971."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997."
ctf_flag: "sha256:f06fe0752519c4a4624d895e64d4a175d13a9848457ba38a7c3fc13b1be70407"
hints:
  - "Los tres apartados son eliminación gaussiana o producto de matrices sobre un cuerpo distinto: ℚ en (a), 𝔽₂ en (b) y ℤ/pℤ en (c). En (a) la coma flotante puede darte un determinante casi entero: trabaja con aritmética exacta. En (c) no se itera 10¹⁸ veces: se eleva una matriz 2×2 a esa potencia por cuadrados sucesivos."
  - "En Python, fractions.Fraction da eliminación exacta sobre ℚ; para (b) representa cada fila como un entero y usa XOR como suma de filas. Con SymPy, Matrix(...).det() y Matrix(...).rank() sirven para contrastar (a), pero rank() trabaja sobre ℚ, no sobre 𝔽₂. Para (c), pow(base, exp, mod) no sirve con matrices: escribe la exponenciación por cuadrados a mano."
  - "Axler, capítulos de aplicaciones lineales y matrices y de determinantes. Strang, capítulos de eliminación y de propiedades del determinante. Documentación de fractions: docs.python.org/3/library/fractions.html."
exercises:
  - id: dimension-de-un-subespacio
    tier: 1
    prompt: |
      ¿Qué dimensión tiene el subespacio de $\mathbb R^4$ formado por los vectores con $x_1 + x_2 + x_3 + x_4 = 0$ y $x_1 = x_2$? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: rango-de-una-matriz
    tier: 1
    prompt: |
      ¿Cuál es el rango de la matriz $\begin{pmatrix} 1 & 2 & 3 & 4 \\ 2 & 4 & 6 & 8 \\ 1 & 0 & 1 & 0 \end{pmatrix}$? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: coordenadas-en-una-base
    tier: 1
    prompt: |
      ¿Qué coordenadas tiene el vector $(3, 5)$ en la base $\{(1, 1),\ (1, -1)\}$ de $\mathbb R^2$? Respuesta: `a;b`.
    answers: ["sha256:333de8e8d2a2402d709f0a57fba0292d88af87e731f2a391e2df78e2538a9595"]
  - id: subespacios-de-matrices
    tier: 1
    prompt: |
      ¿Qué dimensión tiene el espacio de las matrices **simétricas** $3\times3$ reales, y cuál el de las **antisimétricas**? Respuesta: los dos enteros separados por `;`.
    answers: ["sha256:6b357b3c86c3903ece5ea3e82fd8966149e323f2ecf83e3571195b4bf3113154"]
  - id: dimension-del-nucleo
    tier: 2
    prompt: |
      Por el teorema del rango, ¿qué dimensión tiene el núcleo de la aplicación lineal $\mathbb R^4 \to \mathbb R^4$ dada por $\begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 3 \\ 3 & 6 & 1 & 4 \\ 0 & 0 & 1 & 1 \end{pmatrix}$? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: cambio-de-base
    tier: 2
    prompt: |
      Sea $T(x, y) = (2x + y,\ x + 2y)$. Escribe la matriz de $T$ en la base $\{(1, 1),\ (1, -1)\}$ (es decir, $P^{-1}AP$). Respuesta: sus cuatro entradas por filas, separadas por `;`.
    answers: ["sha256:3b1919204a5d5f03e26709e252209a6e7b2905512c34e39383a67a5f345fca52"]
  - id: determinante-4x4
    tier: 2
    prompt: |
      Calcula el determinante de $\begin{pmatrix} 2 & 0 & 1 & 3 \\ 1 & 1 & 0 & 2 \\ 0 & 3 & 1 & 1 \\ 4 & 1 & 2 & 0 \end{pmatrix}$. Respuesta: un entero.
    answers: ["sha256:368d8db27f0b80020fcc663cae685bc8f57b9c184189c26c0999392e8f13f6fc"]
  - id: regla-de-cramer
    tier: 2
    prompt: |
      Resuelve con la regla de Cramer el sistema $\begin{pmatrix} 2 & 1 & -1 \\ 1 & 3 & 2 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix}x\\y\\z\end{pmatrix} = \begin{pmatrix} 3 \\ 13 \\ 4 \end{pmatrix}$. Respuesta: `x;y;z` como fracciones irreducibles o enteros.
    answers: ["sha256:c43c03c62e4533bdbdfab1b9ef39ad94742aafa86ceacd5d74400841a4864b86"]
  - id: autovalores-con-multiplicidad
    tier: 2
    prompt: |
      Halla los autovalores de $\begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$, repetidos según su multiplicidad. Respuesta: de menor a mayor, separados por `;`.
    answers: ["sha256:f4291e2e7b9793f6a8bdab969303045d1f6fe9230bdb5b698ec25263efc349db"]
  - id: propiedades-del-determinante
    tier: 2
    prompt: |
      Sea $A$ una matriz real $3\times3$ con $\det A = 5$. ¿Cuánto valen $\det(2A)$, $\det(A^{-1})$ y $\det(A^{\mathsf T}A)$? Respuesta: los tres valores separados por `;` (fracción `a/b` si hace falta).
    answers: ["sha256:47012dc9fe0adb174f6ec5386c5c48328fe0651529878f09c2ba1f99a53202b3"]
  - id: rango-sobre-f2
    tier: 3
    prompt: |
      Sea $B$ la matriz $6\times6$ con $B_{ij} = 1$ si $\gcd(i, j) = 1$ y $B_{ij} = 0$ si no ($1 \le i, j \le 6$). ¿Cuál es su rango **sobre** $\mathbb F_2$ (aritmética módulo 2)? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: proyeccion-ortogonal
    tier: 3
    prompt: |
      Calcula la proyección ortogonal de $(1, 2, 3)$ sobre el plano de $\mathbb R^3$ generado por $(1, 1, 0)$ y $(1, 0, 1)$. Respuesta: sus tres coordenadas como fracciones irreducibles, separadas por `;`.
    answers: ["sha256:ac353049fe735ae8b8b657cd089d0084c47290e181b3a2a10df8f4493b0fae94"]
  - id: fibonacci-por-potencias-de-matrices
    tier: 3
    prompt: |
      Con $\begin{pmatrix}1 & 1\\ 1 & 0\end{pmatrix}^n = \begin{pmatrix}F_{n+1} & F_n\\ F_n & F_{n-1}\end{pmatrix}$, calcula $F_{50} \bmod 1000$. Respuesta: un entero.
    answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
  - id: inversa-modulo-7
    tier: 3
    prompt: |
      Halla la inversa de $\begin{pmatrix}2 & 3\\ 1 & 4\end{pmatrix}$ sobre el cuerpo $\mathbb Z/7\mathbb Z$. Respuesta: sus cuatro entradas por filas (entre $0$ y $6$), separadas por `;`.
    answers: ["sha256:0e686b3a4608930bd620d427ca37190a63154f9cac77a7b26169c95a207f2232"]
---

# Álgebra lineal II: espacios vectoriales abstractos, aplicaciones lineales, determinante, autovalores y producto interior

[[mat-algebra-lineal-1]] trabajó con vectores de $\mathbb R^n$ y matrices concretas. Este nodo da el salto a la **estructura**: un espacio
vectorial es cualquier conjunto en el que se pueda sumar y multiplicar por escalares con las reglas de siempre, y con esa abstracción los
polinomios, las funciones, las señales, las imágenes o las palabras de un código corrector de errores se tratan con las mismas herramientas.
Se demuestran los teoremas centrales (dimensión, rango, determinante, diagonalización, Cauchy-Schwarz, proyección ortogonal) y se
practican sobre cuerpos distintos de $\mathbb R$: los racionales exactos, $\mathbb F_2$ y $\mathbb Z/p\mathbb Z$, que son los de la
informática.

## Objetivos

Al terminar sabrás:

1. Reconocer espacios vectoriales sobre cualquier cuerpo, subespacios, bases y dimensión, y demostrar que la dimensión está bien definida.
2. Calcular núcleo, imagen y rango de una aplicación lineal, aplicar el **teorema del rango** y escribir su matriz en cualquier base.
3. Usar el determinante (definición axiomática, propiedades, cofactores, Cramer) y su significado geométrico.
4. Hallar autovalores, autovectores y multiplicidades, decidir si una matriz es diagonalizable y calcular potencias.
5. Ortonormalizar con Gram-Schmidt y proyectar ortogonalmente (mejor aproximación).
6. Hacer eliminación gaussiana sobre $\mathbb F_2$ y $\mathbb Z/p\mathbb Z$.

## Qué debes dominar antes

[[mat-algebra-lineal-1]] (sistemas, matrices, determinantes $2\times2$ y $3\times3$, autovalores de ejemplos) y [[mat-logica-demostraciones]]
(demostraciones, conjuntos y funciones). La aritmética modular de [[mat-matematica-discreta]].

> [!question] Test de entrada
> 1. ¿Son linealmente independientes $(1, 2)$ y $(2, 4)$?
> 2. Calcula $\det\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$.
> 3. ¿Cuál es el inverso de $3$ módulo $7$?
>
> Respuestas: no ($(2, 4) = 2(1, 2)$); $-2$; $5$ ($3\cdot5 = 15 \equiv 1$).

## 1. Para qué sirve

- **Física e ingeniería**: los estados de un sistema cuántico son vectores de un espacio abstracto ([[fis-mecanica-cuantica]]); las señales son
  vectores en espacios de funciones ([[ing-senales-sistemas]]).
- **Aprendizaje automático**: datos, pesos y activaciones son vectores y matrices; reducir la dimensión es proyectar ([[ia-aprendizaje-estadistico]]).
- **Informática**: los códigos correctores (en discos, QR, comunicaciones espaciales) son subespacios de $\mathbb F_2^n$; la criptografía y los
  gráficos por ordenador usan matrices sobre cuerpos finitos y transformaciones lineales.
- **Matemáticas**: el álgebra lineal es el lenguaje del análisis funcional, la geometría diferencial y las ecuaciones diferenciales.

## 2. Cuerpos y espacios vectoriales

Un **cuerpo** es un conjunto con suma y producto que cumplen las propiedades habituales (asociativas, conmutativas, distributiva, neutros e
inversos; todo elemento no nulo tiene inverso multiplicativo): $\mathbb Q$, $\mathbb R$, $\mathbb C$, y también $\mathbb F_2 = \{0, 1\}$ con
$1 + 1 = 0$, y $\mathbb Z/p\mathbb Z$ con $p$ primo ([[mat-matematica-discreta]]).

Un **espacio vectorial** sobre un cuerpo $\mathbb K$ es un conjunto $V$ con una suma y un producto por escalares que cumplen ocho axiomas
(asociatividad y conmutatividad de la suma, vector nulo, opuestos, y compatibilidad del producto por escalares con las sumas y con el $1$).
Ejemplos: $\mathbb K^n$; los polinomios de grado $\le n$, $\mathcal P_n$; las matrices $m\times n$; las funciones continuas en $[0, 1]$; las
sucesiones; las soluciones de una ecuación diferencial lineal homogénea.

Un **subespacio** es un subconjunto no vacío cerrado por sumas y por productos por escalares (contiene el $0$). Las soluciones de un sistema
**homogéneo** forman un subespacio; las de uno no homogéneo, no (no contienen el $0$).

Una **combinación lineal** de $v_1, \dots, v_k$ es $\sum a_iv_i$; su **envoltura** (*span*) es el conjunto de todas ellas, el menor subespacio que
los contiene. Son **linealmente independientes** si la única combinación nula es la trivial ($\sum a_iv_i = 0 \Rightarrow$ todos los $a_i = 0$).

## 3. Base y dimensión

Una **base** es una familia linealmente independiente que genera $V$. Todo vector se escribe **de forma única** como combinación de la base (si
hubiera dos escrituras, su diferencia sería una combinación nula no trivial): esos coeficientes son sus **coordenadas**.

**Lema de intercambio (Steinitz).** Si $u_1, \dots, u_m$ son independientes y $w_1, \dots, w_n$ generan $V$, entonces $m \le n$.

*Idea de la demostración.* Se sustituyen uno a uno los $w$ por los $u$: como $w_1, \dots, w_n$ generan, $u_1$ es combinación de ellos con algún
coeficiente no nulo en cierto $w_j$, que se puede despejar y quitar sin perder la generación. Se repite con $u_2, u_3, \dots$; la independencia de
los $u$ garantiza que siempre queda un $w$ por quitar. Si $m > n$, al acabarse los $w$ el siguiente $u$ sería combinación de los anteriores:
contradicción. $\blacksquare$

**Consecuencia.** Todas las bases de un espacio de generación finita tienen el mismo número de elementos: la **dimensión**. $\dim\mathbb K^n = n$,
$\dim\mathcal P_n = n + 1$ (base $1, x, \dots, x^n$), $\dim\mathbb K^{m\times n} = mn$; las matrices simétricas $n\times n$ forman un subespacio de
dimensión $\frac{n(n+1)}{2}$ y las antisimétricas, de $\frac{n(n-1)}{2}$. En un espacio de dimensión $n$, $n$ vectores independientes ya son base.

## 4. Aplicaciones lineales

$T: V \to W$ es **lineal** si $T(u + v) = T(u) + T(v)$ y $T(av) = aT(v)$. Su **núcleo** $\ker T = \{v : T(v) = 0\}$ y su **imagen**
$\operatorname{im}T$ son subespacios, y $T$ es inyectiva si y solo si $\ker T = \{0\}$ (pues $T(u) = T(v) \iff T(u - v) = 0$).

**Teorema del rango.** Si $V$ tiene dimensión finita, $\dim V = \dim\ker T + \dim\operatorname{im}T$.

*Demostración.* Sea $u_1, \dots, u_k$ una base de $\ker T$, ampliada a una base $u_1, \dots, u_k, v_1, \dots, v_r$ de $V$. Los $T(v_1), \dots, T(v_r)$ generan
la imagen (los $T(u_i)$ son nulos) y son independientes: si $\sum a_iT(v_i) = 0$, entonces $\sum a_iv_i \in \ker T$, es combinación de los $u$, y por
la independencia de la base ampliada todos los $a_i$ son $0$. Luego $\dim\operatorname{im}T = r$ y $\dim V = k + r$. $\blacksquare$

Consecuencias: un sistema $A\mathbf x = \mathbf b$ de $m$ ecuaciones y $n$ incógnitas con rango $r$ tiene, si es compatible, un espacio de soluciones
de dimensión $n - r$; una aplicación entre espacios de la **misma** dimensión es inyectiva si y solo si es sobreyectiva.

**Matriz de una aplicación.** Fijadas bases, la columna $j$ de la matriz de $T$ son las coordenadas de la imagen por $T$ del $j$-ésimo vector de la base.
Componer aplicaciones es multiplicar matrices (por eso el producto se define como se define). **Cambio de base**: si las columnas de $P$ son los
vectores de una nueva base, la matriz de $T$ en ella es $P^{-1}AP$. Matrices que representan la misma aplicación en bases distintas son
**semejantes**, y comparten traza, determinante y polinomio característico.

**Ejemplo resuelto 1.** $T(x, y) = (3x + y,\ x + 3y)$ en la base $\{(1, 1), (1, -1)\}$: $T(1, 1) = (4, 4) = 4(1, 1)$ y $T(1, -1) = (2, -2) = 2(1, -1)$, así que
la matriz es $\operatorname{diag}(4, 2)$: en esa base, $T$ solo estira cada eje.

## 5. Determinante

El **determinante** es la única función de las filas de una matriz $n\times n$ que es **lineal en cada fila**, **alternada** (cambia de signo al
intercambiar dos filas, y por tanto vale $0$ si dos filas son iguales) y vale $1$ en la identidad. De esos tres axiomas salen todas sus
propiedades:

- sumar a una fila un múltiplo de otra no lo cambia; intercambiar dos filas lo cambia de signo; multiplicar una fila por $c$ lo multiplica por $c$
  (así se calcula por eliminación: es el producto de los pivotes, con el signo de los intercambios);
- $\det A \ne 0 \iff A$ es invertible $\iff$ sus filas son independientes;
- $\det(AB) = \det A\,\det B$, $\det A^{\mathsf T} = \det A$, $\det A^{-1} = 1/\det A$, $\det(cA) = c^n\det A$ para $A$ de tamaño $n$;
- **desarrollo por cofactores**: $\det A = \sum_j (-1)^{i+j}a_{ij}\det A_{ij}$, y $A^{-1} = \frac{1}{\det A}\operatorname{adj}A$; **regla de Cramer**:
  $x_k = \det A_k/\det A$, con $A_k$ la matriz con la columna $k$ sustituida por $\mathbf b$ (útil en teoría y para sistemas pequeños; para sistemas
  grandes, eliminación).

**Significado geométrico.** $\lvert\det A\rvert$ es el factor por el que $A$ multiplica áreas (en $\mathbb R^2$) o volúmenes (en $\mathbb R^n$), y su
signo indica si conserva la orientación. Es el jacobiano del cambio de variables de [[mat-calculo-multivariable]].

## 6. Autovalores y diagonalización

$\lambda$ es **autovalor** de $A$ si existe $\mathbf v \ne 0$ con $A\mathbf v = \lambda\mathbf v$, es decir, si $\det(A - \lambda I) = 0$: las raíces del
**polinomio característico**. El conjunto de autovectores de $\lambda$ más el $0$ es el **autoespacio** $\ker(A - \lambda I)$.

- **Multiplicidad algebraica**: multiplicidad de $\lambda$ como raíz; **geométrica**: dimensión de su autoespacio. Siempre
  $1 \le \text{geométrica} \le \text{algebraica}$.
- **Teorema.** Autovectores de autovalores **distintos** son linealmente independientes. *(Inducción: si
  $\sum a_i\mathbf v_i = 0$, aplicando $A - \lambda_k I$ se elimina $\mathbf v_k$ y queda una combinación nula de menos vectores.)*
- $A$ ($n\times n$) es **diagonalizable** ($A = PDP^{-1}$, $D$ diagonal) si y solo si tiene $n$ autovectores independientes, es decir, si la suma
  de las multiplicidades geométricas es $n$. En particular, si tiene $n$ autovalores distintos.
- $\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$ **no** es diagonalizable: su único autovalor, $1$, tiene multiplicidad algebraica 2 y geométrica 1.

**Para qué.** Si $A = PDP^{-1}$, entonces $A^k = PD^kP^{-1}$: así se calculan potencias, recurrencias lineales (Fibonacci) y sistemas de
ecuaciones diferenciales ([[mat-ecuaciones-diferenciales]]). La traza es la suma de los autovalores y el determinante, su producto.

**Ejemplo resuelto 2.** $A = \begin{pmatrix}4 & 1\\ 2 & 3\end{pmatrix}$: $\lambda^2 - 7\lambda + 10 = 0$, $\lambda = 5, 2$. Autovectores: $(1, 1)$ para $5$ y $(1, -2)$
para $2$. Con $P = \begin{pmatrix}1 & 1\\ 1 & -2\end{pmatrix}$, $A^k = P\operatorname{diag}(5^k, 2^k)P^{-1}$, y para $k$ grande $A^k\mathbf x$ apunta casi en
la dirección de $(1, 1)$ (el autovalor dominante): es el **método de las potencias** con el que se calcula el PageRank.

## 7. Producto interior y ortogonalidad

Un **producto interior** en un espacio real es una operación $\langle u, v\rangle$ simétrica, lineal en cada argumento y definida positiva
($\langle v, v\rangle > 0$ si $v \ne 0$). Además del producto escalar de $\mathbb R^n$, $\langle f, g\rangle = \int_0^1 fg$ es un producto interior entre
funciones. Define la **norma** $\lVert v\rVert = \sqrt{\langle v, v\rangle}$ y el ángulo.

**Desigualdad de Cauchy-Schwarz.** $\lvert\langle u, v\rangle\rvert \le \lVert u\rVert\,\lVert v\rVert$.

*Demostración.* Para todo $t$ real, $0 \le \lVert u - tv\rVert^2 = \lVert u\rVert^2 - 2t\langle u, v\rangle + t^2\lVert v\rVert^2$. Un polinomio de grado 2 en $t$
que nunca es negativo tiene discriminante $\le 0$: $4\langle u, v\rangle^2 - 4\lVert u\rVert^2\lVert v\rVert^2 \le 0$. $\blacksquare$ De ella sale la
desigualdad triangular.

**Gram-Schmidt.** De una base cualquiera $v_1, v_2, \dots$ se obtiene una **ortonormal**: $w_1 = v_1$; $w_k = v_k - \sum_{j<k}\frac{\langle v_k, w_j\rangle}{\langle w_j, w_j\rangle}w_j$
(se resta a cada vector su componente sobre los anteriores) y se normaliza. Escrito con matrices, es la factorización $A = QR$.

**Proyección ortogonal y mejor aproximación.** Si $W$ es un subespacio con base ortonormal $e_1, \dots, e_k$, la proyección
$p = \sum\langle v, e_i\rangle e_i$ es el punto de $W$ **más cercano** a $v$ ($v - p$ es perpendicular a $W$ y Pitágoras hace el resto). Es la base de
los mínimos cuadrados ([[mat-analisis-numerico]]) y de las series de Fourier (proyectar una señal sobre senos y cosenos).

## 8. Otros cuerpos: $\mathbb F_2$ y $\mathbb Z/p\mathbb Z$

Todo lo anterior que no usa orden ni raíces cuadradas vale sobre cualquier cuerpo: eliminación gaussiana, rango, determinante, inversas. Sobre
$\mathbb F_2$, sumar filas es hacer **XOR** bit a bit, y una fila de $n$ bits cabe en un entero. Los **códigos lineales** son subespacios de
$\mathbb F_2^n$: el código de Hamming $[7, 4]$ codifica 4 bits en 7 (un subespacio de dimensión 4) y corrige cualquier error en un bit. Sobre
$\mathbb Z/p\mathbb Z$ se divide multiplicando por el inverso modular; así trabajan muchos algoritmos criptográficos y de cómputo exacto.

```python
from fractions import Fraction as F


def det(M):
    """Determinante exacto por eliminación sobre Q."""
    M = [[F(x) for x in fila] for fila in M]
    n, d = len(M), F(1)
    for c in range(n):
        p = next((i for i in range(c, n) if M[i][c] != 0), None)
        if p is None:
            return F(0)
        if p != c:
            M[c], M[p] = M[p], M[c]
            d = -d
        d *= M[c][c]
        for i in range(c + 1, n):
            f = M[i][c] / M[c][c]
            M[i] = [a - f * b for a, b in zip(M[i], M[c])]
    return d


def rango_f2(filas):
    """Rango sobre F2 con filas codificadas como enteros: la suma es XOR."""
    base = []
    for x in filas:
        for b in base:
            x = min(x, x ^ b)
        if x:
            base.append(x)
    return len(base)


assert det([[4, 1], [2, 3]]) == 10                       # producto de autovalores 5 · 2
assert det([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == 0       # filas dependientes
# Matriz generadora del código de Hamming [7,4]: sus 4 filas son independientes sobre F2.
G = [0b1000110, 0b0100101, 0b0010011, 0b0001111]
assert rango_f2(G) == 4
assert rango_f2([0b110, 0b011, 0b101]) == 2              # 110 ⊕ 011 = 101 sobre F2 (sobre Q tendría rango 3)
assert det([[1, 1, 0], [0, 1, 1], [1, 0, 1]]) == 2
```

## 9. Errores típicos

- Llamar subespacio a un conjunto que no contiene el $0$ (soluciones de un sistema no homogéneo, una recta que no pasa por el origen).
- Confundir «generan» con «son independientes»; olvidar que una base necesita las dos cosas.
- Aplicar el teorema del rango con la dimensión del espacio de **llegada** en lugar de la de **salida**.
- Calcular un determinante grande por cofactores ($n!$ operaciones) en vez de por eliminación ($n^3$).
- Concluir que una matriz es diagonalizable porque su polinomio característico tiene raíces (hace falta que las multiplicidades geométricas sumen $n$).
- Hacer Gram-Schmidt sin restar las proyecciones sobre **todos** los vectores anteriores, o proyectar sobre una base no ortogonal con la fórmula de las bases ortonormales.
- Calcular el rango sobre $\mathbb Q$ cuando el problema pide $\mathbb F_2$ (pueden diferir).

## 10. Resumen

- Espacio vectorial sobre un cuerpo; subespacio; envoltura; independencia; base; dimensión (Steinitz).
- Lineal: núcleo, imagen; $\dim V = \dim\ker + \dim\operatorname{im}$; matriz en una base; cambio de base $P^{-1}AP$.
- Determinante: multilineal, alternado, normalizado; producto de pivotes; $\det(AB) = \det A\det B$; volumen; Cramer.
- Autovalores: $\det(A - \lambda I) = 0$; multiplicidades; diagonalizable $\iff$ $n$ autovectores independientes; $A^k = PD^kP^{-1}$.
- Producto interior, Cauchy-Schwarz, Gram-Schmidt, proyección como mejor aproximación.
- Mismos algoritmos sobre $\mathbb F_2$ (XOR) y $\mathbb Z/p\mathbb Z$ (inverso modular).

## Reto

Calcula tres enteros.

- **a.** El determinante de la matriz $8 \times 8$ con entradas $M_{ij} = (i^j + j) \bmod 11$, para $1 \le i, j \le 8$.
- **b.** El rango **sobre $\mathbb{F}_2$** de la matriz $16 \times 16$ con $B_{ij} = 1$ si $\gcd(i, j) = 1$ y $B_{ij} = 0$ en otro caso, para
  $1 \le i, j \le 16$.
- **c.** $F_{10^{18}} \bmod (10^9 + 7)$. Valor de control: $F_{100} \bmod (10^9 + 7) = 687995182$.

Formato de la flag, con los tres valores en decimal separados por guiones bajos y el signo de **a** si es negativo: `EXODUS{a_b_c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Base = independiente + generadora; todas las bases tienen el mismo tamaño.
2. Teorema del rango: $n = \dim\ker + \operatorname{rango}$.
3. Las tres propiedades que definen el determinante y que $\det$ es el producto de los pivotes.
4. Diagonalizable si hay $n$ autovectores independientes; $A^k = PD^kP^{-1}$.
5. Gram-Schmidt y la proyección ortogonal como punto más cercano.

## Siguiente

`mat-algebra-lineal-avanzada` (teorema espectral, descomposición en valores singulares, forma de Jordan, exponencial de matrices),
[[mat-estructuras-algebraicas]] (grupos, anillos y cuerpos) y [[fis-mecanica-cuantica]].
