---
id: mat-algebra-lineal-avanzada
title: "Álgebra lineal avanzada: teorema espectral, valores singulares, formas cuadráticas, Jordan y exponencial de matrices"
area: matematicas
trunk_level: 12
prerequisites: [mat-algebra-lineal, mat-ecuaciones-diferenciales, mat-analisis-numerico]
academic_sources:
  - "Axler, S. Linear Algebra Done Right, 4ª ed. Springer, 2024 (acceso abierto; operadores en espacios con producto interior, teorema espectral, descomposición en valores singulares)."
  - "Strang, G. Introduction to Linear Algebra, 6ª ed. Wellesley-Cambridge Press, 2023."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997."
  - "Eckart, C.; Young, G. The approximation of one matrix by another of lower rank. Psychometrika, 1(3), 211-218, 1936."
hints:
  - "Concepto: una matriz simétrica es, en la base adecuada (ortonormal), una diagonal: el teorema espectral. Una matriz cualquiera también lo es si se permiten dos bases distintas: la descomposición en valores singulares. Casi todo se reduce a pasar a esa base, operar con números (autovalores o valores singulares) y volver. Si una matriz no es diagonalizable, su forma de Jordan la parte en λI + N con N nilpotente."
  - "Herramienta: comprueba autovalores con la traza (suma) y el determinante (producto); valores singulares, con los autovalores de AᵀA; una exponencial de matriz, sumando su serie en Python hasta que los términos sean despreciables; una distribución estacionaria, iterando πP muchas veces. numpy.linalg.eigh, svd, cholesky y scipy.linalg.expm hacen lo mismo con rigor numérico."
  - "Documentación: Axler, capítulos de operadores en espacios con producto interior y de la descomposición en valores singulares; Strang, capítulos de matrices simétricas, definidas positivas y SVD; Trefethen y Bau, primeras lecciones (SVD) y lecciones de autovalores; docs de numpy.linalg y scipy.linalg."
exercises:
  - id: autovalores-de-una-simetrica
    tier: 1
    prompt: |
      Halla los autovalores de la matriz simétrica $\begin{pmatrix}2 & 1\\ 1 & 2\end{pmatrix}$. Respuesta: de menor a mayor, separados por `;`.
    answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
  - id: criterio-de-sylvester
    tier: 1
    prompt: |
      Calcula los tres menores principales dominantes de $\begin{pmatrix}2 & -1 & 0\\ -1 & 2 & -1\\ 0 & -1 & 2\end{pmatrix}$ (determinantes de las submatrices superiores izquierdas $1\times1$, $2\times2$ y $3\times3$). ¿Es definida positiva? Respuesta: los tres menores separados por `;`.
    answers: ["sha256:7d95c5e25f80e6bcd9228d2d2ff948effa4b020bbb2d8cacec769ca2c84395d6"]
  - id: valores-singulares
    tier: 1
    prompt: |
      Calcula los valores singulares de $A = \begin{pmatrix}3 & 0\\ 4 & 5\end{pmatrix}$ (raíces cuadradas de los autovalores de $A^{\mathsf T}A$). Respuesta: de mayor a menor, con **3 decimales**, separados por `;`.
    answers: ["sha256:d4a8b44ed633c09b55103d5e74c5795e8692a9e1c642d007eb9c4c630cff4f0c"]
  - id: numero-de-condicion-espectral
    tier: 1
    prompt: |
      ¿Cuánto vale el número de condición $\kappa_2(A) = \sigma_{\max}/\sigma_{\min}$ de $A = \begin{pmatrix}3 & 0\\ 4 & 5\end{pmatrix}$? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: cayley-hamilton
    tier: 2
    prompt: |
      Para $A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$, el teorema de Cayley-Hamilton da $A^2 = 5A + 2I$. Úsalo para calcular $A^5$. Respuesta: sus entradas por filas, separadas por `;`.
    answers: ["sha256:1634732c3f2e3be7e128e411ef65d07a66b73de93a5f46ebcbae85860ea71a5e"]
  - id: exponencial-de-una-rotacion
    tier: 2
    prompt: |
      Calcula $e^{A}$ para $A = \begin{pmatrix}0 & 1\\ -1 & 0\end{pmatrix}$ (es la solución en $t = 1$ de $\mathbf x' = A\mathbf x$). Respuesta: sus entradas por filas con **4 decimales**, separadas por `;`.
    answers: ["sha256:3ff78f86e23a41499fc747e9d7c4921223818145407087fbc39e7a1360af9a03"]
  - id: exponencial-de-un-bloque-de-jordan
    tier: 2
    prompt: |
      Para el bloque de Jordan $J = \begin{pmatrix}2 & 1\\ 0 & 2\end{pmatrix} = 2I + N$ con $N^2 = 0$, calcula la entrada $(1, 2)$ de $e^{J}$. Respuesta: un número con **3 decimales**.
    answers: ["sha256:5e2584ba45cf757530b9a404be69e6608a557e00f2ef10eade3cf121d6ba02fc"]
  - id: factorizacion-de-cholesky
    tier: 2
    prompt: |
      Halla la factorización de Cholesky $A = LL^{\mathsf T}$ ($L$ triangular inferior con diagonal positiva) de $A = \begin{pmatrix}4 & 2\\ 2 & 5\end{pmatrix}$. Respuesta: las entradas de $L$ por filas, separadas por `;`.
    answers: ["sha256:cb9c760cf9e2fb813036cbe3ff3c497843d06b344a9a3c2852d49f415010b58a"]
  - id: forma-cuadratica
    tier: 2
    prompt: |
      Escribe la matriz simétrica de la forma cuadrática $q(x, y) = x^2 + 4xy + y^2$ y halla sus autovalores. (¿Es definida, semidefinida o indefinida?) Respuesta: los autovalores de menor a mayor, separados por `;`.
    answers: ["sha256:6ab65dfa80b0287b56d70e892af9056c0c336aa1c51f9423752f47163d72db7d"]
  - id: metodo-de-las-potencias
    tier: 2
    prompt: |
      En el método de las potencias con $A = \begin{pmatrix}4 & 1\\ 2 & 3\end{pmatrix}$, el error respecto al autovector dominante se multiplica en cada paso aproximadamente por $\lvert\lambda_2/\lambda_1\rvert$. ¿Cuánto vale ese factor? Respuesta: un número con **3 decimales**.
    answers: ["sha256:f3e360d89952f40d3b79d0b07dd0b94f1cbf9017cba5d2a5f8128e4146d6e3c1"]
  - id: determinante-de-la-exponencial
    tier: 2
    prompt: |
      Sin calcular $e^{A}$, halla $\det(e^{A})$ para $A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$, usando $\det(e^A) = e^{\operatorname{tr}A}$. Respuesta: un número con **2 decimales**.
    answers: ["sha256:7153b2e4cdfebe9d83ec4b685e129341e43ceaac7668096ade90ad2482bb63f5"]
  - id: mejor-aproximacion-de-rango-uno
    tier: 3
    prompt: |
      Según el teorema de Eckart-Young, ¿cuál es el error, en norma de Frobenius, de la mejor aproximación de rango $1$ de $A = \begin{pmatrix}3 & 0\\ 4 & 5\end{pmatrix}$? Respuesta: un número con **3 decimales**.
    answers: ["sha256:fedb836f28bd6bf0ea13ea4bbae094484f42a5166ed11e3265cd837cef1d286d"]
  - id: seudoinversa
    tier: 3
    prompt: |
      El sistema $\begin{pmatrix}1 & 1\\ 1 & 1\end{pmatrix}\mathbf x = \begin{pmatrix}2\\ 0\end{pmatrix}$ no tiene solución. ¿Cuál es la solución de mínimos cuadrados **de norma mínima**, $\mathbf x = A^{+}\mathbf b$? Respuesta: sus dos componentes como fracciones irreducibles, separadas por `;`.
    answers: ["sha256:0e26d9b221464a3deac51717dfbffc5b384116605c9b5aeb50eee802ec41f5d0"]
  - id: analisis-de-componentes-principales
    tier: 3
    prompt: |
      Los puntos $(2, 0)$, $(0, 2)$, $(-2, 0)$, $(0, -2)$, $(1, 1)$, $(-1, -1)$ tienen media $(0, 0)$. Con su matriz de covarianza (dividiendo entre $6$), ¿qué fracción de la varianza total explica la **primera componente principal**? Respuesta: un número decimal exacto.
    answers: ["sha256:b4af4e0d40391d3a00179d935c63b7e15ba8cd3dfa29f218dedc270bd3eb3e79"]
  - id: distribucion-estacionaria
    tier: 3
    prompt: |
      Una cadena de Markov con dos estados tiene matriz de transición $P = \begin{pmatrix}0{,}9 & 0{,}1\\ 0{,}5 & 0{,}5\end{pmatrix}$ (filas: estado de origen). ¿Cuál es su distribución estacionaria $\pi$ ($\pi P = \pi$, autovector por la izquierda de autovalor $1$)? Respuesta: las dos probabilidades como fracciones irreducibles, separadas por `;`.
    answers: ["sha256:9407e203fc6a31c7c527b6d0c5d39968807168c948e9676cd213793857d5f88a"]
  - id: forma-de-jordan
    tier: 3
    prompt: |
      Para $A = \begin{pmatrix}2 & 1 & 0\\ 0 & 2 & 1\\ 0 & 0 & 2\end{pmatrix}$, ¿qué dimensión tiene el autoespacio de $\lambda = 2$ y cuál es el menor $k$ con $(A - 2I)^k = 0$ (el tamaño del mayor bloque de Jordan)? Respuesta: los dos enteros separados por `;`.
    answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
---

# Álgebra lineal avanzada: teorema espectral, valores singulares, formas cuadráticas, Jordan y exponencial de matrices

[[mat-algebra-lineal]] construyó la teoría general: espacios, aplicaciones, determinante y diagonalización. Este nodo trata las
descomposiciones que hacen útil esa teoría en ciencia e ingeniería: el **teorema espectral** de las matrices simétricas, las **formas
cuadráticas** y las matrices definidas positivas, la **descomposición en valores singulares** (SVD), la más importante del álgebra lineal
aplicada, con la mejor aproximación de rango bajo, la seudoinversa y el análisis de componentes principales; la **forma de Jordan** para las
matrices que no se diagonalizan; la **exponencial de una matriz**, que resuelve los sistemas lineales de ecuaciones diferenciales; y el
comportamiento a largo plazo de las potencias (método de las potencias, cadenas de Markov).

## Objetivos

Al terminar sabrás:

1. Enunciar y aplicar el teorema espectral y diagonalizar ortogonalmente una matriz simétrica.
2. Clasificar formas cuadráticas, decidir si una matriz es definida positiva (autovalores, criterio de Sylvester) y calcular su factorización de Cholesky.
3. Calcular e interpretar la SVD: rango, normas, número de condición, mejor aproximación de rango $k$, seudoinversa y PCA.
4. Calcular la forma de Jordan de matrices pequeñas y usar el teorema de Cayley-Hamilton.
5. Calcular $e^{tA}$ y resolver con ella $\mathbf x' = A\mathbf x$.
6. Analizar el método de las potencias y la distribución estacionaria de una cadena de Markov.

## Qué debes dominar antes

[[mat-algebra-lineal]] (autovalores, diagonalización, producto interior, Gram-Schmidt), [[mat-ecuaciones-diferenciales]] (sistemas lineales) y
[[mat-analisis-numerico]] (número de condición, mínimos cuadrados).

> [!question] Test de entrada
> 1. ¿Qué cumple una matriz ortogonal $Q$?
> 2. Si $A\mathbf v = 3\mathbf v$, ¿cuánto vale $A^2\mathbf v$?
> 3. ¿Cuál es la serie de Taylor de $e^x$?
>
> Respuestas: $Q^{\mathsf T}Q = I$ (sus columnas son ortonormales); $9\mathbf v$; $\sum_{k\ge0} x^k/k!$.

## 1. Para qué sirve

- **Ciencia de datos y aprendizaje automático**: PCA, compresión, recomendadores, regularización y el análisis de redes neuronales usan la SVD
  ([[ia-aprendizaje-estadistico]]).
- **Mecánica y estructuras**: los modos de vibración de un puente o de una molécula son los autovectores de una matriz simétrica; los ejes
  principales de inercia de un sólido, también ([[fis-mecanica-clasica]]).
- **Optimización**: un punto crítico es un mínimo si el hessiano es definido positivo ([[mat-calculo-multivariable]]).
- **Control y sistemas**: la estabilidad de $\mathbf x' = A\mathbf x$ depende de los autovalores de $A$; $e^{tA}$ es la respuesta del sistema
  ([[rob-control]]).
- **Física cuántica**: los observables son operadores simétricos (hermíticos) y sus autovalores, los valores que se pueden medir
  ([[fis-mecanica-cuantica]]).

## 2. El teorema espectral

**Teorema espectral (caso real).** Si $A$ es una matriz real **simétrica** ($A^{\mathsf T} = A$), entonces todos sus autovalores son reales y existe
una base **ortonormal** de autovectores: $A = Q\Lambda Q^{\mathsf T}$ con $Q$ ortogonal y $\Lambda$ diagonal.

*Ideas de la demostración.* (1) Si $A\mathbf v = \lambda\mathbf v$ con $\mathbf v$ complejo, $\bar{\mathbf v}^{\mathsf T}A\mathbf v$ es real (porque $A$ es real y
simétrica) e igual a $\lambda\lVert\mathbf v\rVert^2$, luego $\lambda$ es real. (2) Autovectores de autovalores distintos son ortogonales: si
$A\mathbf u = \lambda\mathbf u$ y $A\mathbf v = \mu\mathbf v$, entonces $\lambda\,\mathbf u\cdot\mathbf v = (A\mathbf u)\cdot\mathbf v = \mathbf u\cdot(A\mathbf v) = \mu\,\mathbf u\cdot\mathbf v$,
y si $\lambda \ne \mu$ el producto es $0$. (3) Por inducción: tomado un autovector unitario $\mathbf q_1$, su complemento ortogonal es invariante por $A$
y la restricción sigue siendo simétrica. $\blacksquare$

Equivalentemente, $A = \sum_i\lambda_i\mathbf q_i\mathbf q_i^{\mathsf T}$: suma de proyecciones sobre direcciones perpendiculares, cada una estirada por su
autovalor. En el caso complejo, lo mismo vale para matrices **hermíticas** ($A^* = A$) con matrices unitarias, y, más en general, para las **normales**.

**Cociente de Rayleigh.** Para $A$ simétrica, $\max_{\mathbf x\ne0}\frac{\mathbf x^{\mathsf T}A\mathbf x}{\mathbf x^{\mathsf T}\mathbf x} = \lambda_{\max}$ (y el mínimo, $\lambda_{\min}$): en la base de
autovectores el cociente es una media ponderada de los autovalores.

## 3. Formas cuadráticas y matrices definidas positivas

Una **forma cuadrática** es $q(\mathbf x) = \mathbf x^{\mathsf T}A\mathbf x$ con $A$ simétrica: $x^2 + 4xy + y^2$ corresponde a $A = \begin{pmatrix}1 & 2\\ 2 & 1\end{pmatrix}$ (el
coeficiente del término cruzado se reparte por mitades). En la base de autovectores, $q = \sum\lambda_iy_i^2$: los **ejes principales**. $A$ es:

- **definida positiva** si $q(\mathbf x) > 0$ para todo $\mathbf x \ne 0$ $\iff$ todos los autovalores son positivos $\iff$ (criterio de **Sylvester**) todos los
  menores principales dominantes son positivos $\iff$ $A = LL^{\mathsf T}$ con $L$ triangular inferior invertible (**Cholesky**);
- semidefinida positiva si $q \ge 0$ (autovalores $\ge 0$); **indefinida** si toma valores de los dos signos (hay autovalores de los dos signos).

Las matrices de covarianza y las de Gram ($A^{\mathsf T}A$) son semidefinidas positivas. Cholesky cuesta la mitad que LU y es la forma estable de resolver
sistemas con matrices definidas positivas (mínimos cuadrados, simulación de variables normales correladas).

**Ejemplo resuelto 1.** $A = \begin{pmatrix}9 & 3\\ 3 & 5\end{pmatrix}$: menores $9 > 0$ y $45 - 9 = 36 > 0$: definida positiva. Cholesky: $\ell_{11} = 3$,
$\ell_{21} = 3/3 = 1$, $\ell_{22} = \sqrt{5 - 1} = 2$: $L = \begin{pmatrix}3 & 0\\ 1 & 2\end{pmatrix}$, y en efecto $LL^{\mathsf T} = A$.

## 4. Descomposición en valores singulares (SVD)

**Teorema.** Toda matriz real $A$ de tamaño $m\times n$ se escribe $A = U\Sigma V^{\mathsf T}$ con $U$ ($m\times m$) y $V$ ($n\times n$) ortogonales y $\Sigma$
«diagonal» con entradas $\sigma_1 \ge \sigma_2 \ge \cdots \ge 0$, los **valores singulares**.

*Construcción.* $A^{\mathsf T}A$ es simétrica y semidefinida positiva; por el teorema espectral, $A^{\mathsf T}A = V\Lambda V^{\mathsf T}$ con autovalores
$\lambda_i \ge 0$. Se toma $\sigma_i = \sqrt{\lambda_i}$ y, para $\sigma_i > 0$, $\mathbf u_i = A\mathbf v_i/\sigma_i$, que resultan ortonormales; se completan las bases. $\blacksquare$

Geométricamente: **toda** aplicación lineal es un giro ($V^{\mathsf T}$), un estiramiento de los ejes ($\Sigma$) y otro giro ($U$); transforma la esfera
unidad en un elipsoide de semiejes $\sigma_i$. Consecuencias inmediatas:

- el **rango** es el número de valores singulares no nulos (y numéricamente, el de los que no son despreciables);
- $\lVert A\rVert_2 = \sigma_1$ (lo máximo que $A$ estira un vector) y $\kappa_2(A) = \sigma_1/\sigma_n$ ([[mat-analisis-numerico]]);
- $A = \sum_i\sigma_i\mathbf u_i\mathbf v_i^{\mathsf T}$: suma de matrices de rango 1 ordenadas por importancia.

**Teorema de Eckart-Young (1936).** La mejor aproximación de rango $k$ de $A$ (en norma 2 y en norma de Frobenius) se obtiene truncando la SVD,
$A_k = \sum_{i\le k}\sigma_i\mathbf u_i\mathbf v_i^{\mathsf T}$, con error $\lVert A - A_k\rVert_2 = \sigma_{k+1}$ y
$\lVert A - A_k\rVert_F = \sqrt{\sigma_{k+1}^2 + \cdots}$. Es la base de la compresión de imágenes y de la reducción de ruido.

**Seudoinversa.** $A^+ = V\Sigma^+U^{\mathsf T}$, con $\Sigma^+$ invirtiendo los valores singulares no nulos. $\mathbf x = A^+\mathbf b$ es, de todas las soluciones de
mínimos cuadrados de $A\mathbf x \approx \mathbf b$, la de **norma mínima**; funciona aunque $A$ no tenga rango completo, donde las ecuaciones normales fallan.

**Análisis de componentes principales (PCA).** Con datos centrados en las filas de una matriz $X$ ($n$ muestras), la matriz de covarianza es
$C = X^{\mathsf T}X/n$. Sus autovectores (los vectores singulares derechos de $X$) son las **direcciones principales** y sus autovalores, la varianza a lo
largo de cada una. Proyectar sobre las $k$ primeras conserva la mayor fracción posible de la varianza:
$\frac{\lambda_1 + \cdots + \lambda_k}{\sum\lambda_i}$.

**Ejemplo resuelto 2.** $A = \begin{pmatrix}2 & 0\\ 0 & -1\end{pmatrix}$: $A^{\mathsf T}A = \operatorname{diag}(4, 1)$, valores singulares $2$ y $1$ (los valores singulares son
siempre $\ge 0$: el signo del $-1$ va a $U$). $\kappa_2 = 2$; su mejor aproximación de rango 1 es $\operatorname{diag}(2, 0)$, con error $1$.

## 5. Forma de Jordan y Cayley-Hamilton

Una matriz no diagonalizable tiene autovalores con menos autovectores que su multiplicidad. Sobre $\mathbb C$, toda matriz es semejante a una **forma de
Jordan**: diagonal por bloques, con bloques $J_k(\lambda) = \lambda I + N$, donde $N$ tiene unos encima de la diagonal y es **nilpotente** ($N^k = 0$).
Para cada autovalor, el número de bloques es la multiplicidad geométrica y el tamaño del mayor bloque es el menor $k$ con
$\ker(A - \lambda I)^k$ estabilizado; las dimensiones de $\ker(A - \lambda I)^j$ determinan todos los tamaños. La forma de Jordan es importante en
teoría; numéricamente es **inestable** (una perturbación mínima la cambia), y en cálculo se usan la forma de Schur o la SVD.

**Teorema de Cayley-Hamilton.** Toda matriz anula su polinomio característico: si $p(\lambda) = \det(\lambda I - A)$, entonces $p(A) = 0$. Para
$A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$, $p(\lambda) = \lambda^2 - 5\lambda - 2$, luego $A^2 = 5A + 2I$: toda potencia de $A$ (y toda serie, como la exponencial)
se reduce a una combinación de $A$ e $I$.

## 6. La exponencial de una matriz

Se define con la misma serie que la exponencial real:

$$
e^{A} = \sum_{k=0}^{\infty}\frac{A^k}{k!} = I + A + \frac{A^2}{2} + \cdots ,
$$

que converge para toda matriz. Propiedades: $\frac{d}{dt}e^{tA} = Ae^{tA}$, así que **$\mathbf x(t) = e^{tA}\mathbf x_0$ resuelve $\mathbf x' = A\mathbf x$** con
$\mathbf x(0) = \mathbf x_0$ ([[mat-ecuaciones-diferenciales]]); $e^{A + B} = e^Ae^B$ **solo si** $AB = BA$; $\det e^{A} = e^{\operatorname{tr}A}$.

- Si $A = PDP^{-1}$, $e^{tA} = Pe^{tD}P^{-1}$, con $e^{tD}$ la diagonal de las $e^{t\lambda_i}$.
- Para un bloque de Jordan $\lambda I + N$ (que conmutan), $e^{t(\lambda I + N)} = e^{\lambda t}(I + tN + \tfrac{t^2}{2}N^2 + \cdots)$, una suma **finita**: aparecen los
  términos $te^{\lambda t}$ de las raíces dobles.
- Para $A = \begin{pmatrix}0 & 1\\ -1 & 0\end{pmatrix}$, $e^{tA} = \begin{pmatrix}\cos t & \sin t\\ -\sin t & \cos t\end{pmatrix}$: un giro. Es el oscilador armónico $x'' = -x$.

## 7. Potencias a largo plazo

Si $A$ tiene un autovalor $\lambda_1$ de módulo estrictamente mayor que los demás, $A^k\mathbf x$ se alinea con su autovector: en la base de autovectores,
$A^k\mathbf x = \sum c_i\lambda_i^k\mathbf v_i$ y los demás términos se hacen despreciables a ritmo $\lvert\lambda_2/\lambda_1\rvert^k$. El **método de las potencias**
($\mathbf x \leftarrow A\mathbf x/\lVert A\mathbf x\rVert$) aproxima así el autovector dominante; con el cociente de Rayleigh, su autovalor.

**Cadenas de Markov.** Una matriz estocástica $P$ (filas no negativas que suman 1) tiene el autovalor $1$, y ninguno de módulo mayor. Si además todas sus
entradas son positivas (teorema de **Perron-Frobenius**), el autovalor $1$ es simple y dominante, y la distribución $\pi_0P^k$ converge, desde cualquier
inicio, a la **distribución estacionaria** $\pi$ ($\pi P = \pi$, un autovector por la izquierda). Así se calcula el PageRank y el comportamiento a largo
plazo de cualquier proceso de Markov ([[mat-probabilidad]]).

## 8. Comprobar con un programa

```python
import math


def matmul(X, Y):
    return [[sum(X[i][k] * Y[k][j] for k in range(len(Y))) for j in range(len(Y[0]))] for i in range(len(X))]


def expm(A, terminos=40):
    """Exponencial de una matriz por su serie de Taylor."""
    n = len(A)
    R = [[float(i == j) for j in range(n)] for i in range(n)]
    P = [fila[:] for fila in R]
    for k in range(1, terminos):
        P = [[x / k for x in fila] for fila in matmul(P, A)]
        R = [[R[i][j] + P[i][j] for j in range(n)] for i in range(n)]
    return R


# e^{tA} para el oscilador: un giro de ángulo t.
t = 0.7
E = expm([[0.0, t], [-t, 0.0]])
assert abs(E[0][0] - math.cos(t)) < 1e-12 and abs(E[0][1] - math.sin(t)) < 1e-12

# det(e^A) = e^{tr A}.
A = [[0.2, 0.5], [-0.3, 0.1]]
EA = expm(A)
assert abs(EA[0][0] * EA[1][1] - EA[0][1] * EA[1][0] - math.exp(0.3)) < 1e-12

# Ejemplo resuelto 1: Cholesky de [[9,3],[3,5]].
L = [[3.0, 0.0], [1.0, 2.0]]
assert matmul(L, [[3.0, 1.0], [0.0, 2.0]]) == [[9.0, 3.0], [3.0, 5.0]]

# Método de las potencias sobre una matriz simétrica: autovalor dominante 3 de [[2,1],[1,2]].
x = [1.0, 0.0]
for _ in range(60):
    y = [2 * x[0] + x[1], x[0] + 2 * x[1]]
    n = math.hypot(*y)
    x = [y[0] / n, y[1] / n]
rayleigh = (2 * x[0] ** 2 + 2 * x[0] * x[1] + 2 * x[1] ** 2) / (x[0] ** 2 + x[1] ** 2)
assert abs(rayleigh - 3) < 1e-12
```

## 9. Errores típicos

- Aplicar el teorema espectral a una matriz no simétrica (puede no tener autovalores reales ni autovectores ortogonales).
- Olvidar repartir el coeficiente del término cruzado al escribir la matriz de una forma cuadrática.
- Creer que los valores singulares son los valores absolutos de los autovalores (solo es así para matrices simétricas o normales).
- Calcular la SVD a partir de $A^{\mathsf T}A$ en problemas mal condicionados (se eleva al cuadrado el número de condición); en la práctica, algoritmos directos.
- Escribir $e^{A + B} = e^Ae^B$ sin comprobar que $A$ y $B$ conmutan.
- Usar la forma de Jordan en cálculos numéricos.
- Esperar convergencia del método de las potencias cuando hay dos autovalores dominantes del mismo módulo.

## 10. Resumen

- Espectral: simétrica $\Rightarrow$ $A = Q\Lambda Q^{\mathsf T}$, autovalores reales, autovectores ortogonales; cociente de Rayleigh.
- Formas cuadráticas: ejes principales; definida positiva $\iff$ autovalores $> 0$ $\iff$ Sylvester $\iff$ Cholesky.
- SVD $A = U\Sigma V^{\mathsf T}$: rango, $\lVert A\rVert_2 = \sigma_1$, $\kappa_2 = \sigma_1/\sigma_n$, Eckart-Young, seudoinversa, PCA.
- Jordan $\lambda I + N$; Cayley-Hamilton $p(A) = 0$.
- $e^{tA}$: serie, diagonalización, bloques de Jordan; $\mathbf x = e^{tA}\mathbf x_0$; $\det e^A = e^{\operatorname{tr}A}$.
- Potencias: convergencia a ritmo $\lvert\lambda_2/\lambda_1\rvert$; Perron-Frobenius y distribución estacionaria.

## Repaso: lo que debe quedarte dentro de un mes

1. Toda matriz simétrica se diagonaliza en una base ortonormal.
2. Definida positiva: autovalores positivos o menores principales positivos.
3. La SVD: giro, estiramiento, giro; truncarla da la mejor aproximación de rango bajo.
4. $\mathbf x(t) = e^{tA}\mathbf x_0$ y cómo calcular $e^{tA}$.
5. El autovalor dominante manda a largo plazo.

## Siguiente

En las ramas: análisis funcional (operadores en dimensión infinita), aprendizaje automático (SVD y PCA en la práctica), mecánica cuántica y control.
