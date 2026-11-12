---
id: mat-algebra-lineal-1
title: "Álgebra lineal I: sistemas, matrices, determinantes y autovalores"
area: matematicas
trunk_level: 8
prerequisites: [mat-geometria-analitica, mat-algebra-secundaria]
academic_sources:
  - "Strang, G. Introduction to Linear Algebra, 5ª ed. Wellesley-Cambridge Press, 2016."
  - "Axler, S. Linear Algebra Done Right, 4ª ed. Springer, 2024."
  - "Gelfand, I. M. Lectures on Linear Algebra. Interscience / Dover (reedición)."
hints:
  - "Concepto: un sistema lineal es una pregunta («¿qué combinación de las columnas da el vector b?»), y la eliminación gaussiana la responde sin cambiar las soluciones. El determinante mide cómo una matriz escala áreas o volúmenes: es cero exactamente cuando aplasta el espacio, y entonces no hay inversa. Los autovectores son las direcciones que la matriz no gira, solo estira."
  - "Herramienta: numpy (`np.linalg.solve`, `det`, `inv`, `eig`, `matrix_power`) para comprobar; con fracciones exactas, sympy.Matrix (`rref`, `det`, `eigenvals`). Para resolver un sistema no inviertas la matriz: usa `solve`. Comprueba siempre sustituyendo la solución en las ecuaciones originales."
  - "Documentación oficial: numpy.org/doc/stable/reference/routines.linalg.html y docs.sympy.org/latest/modules/matrices/matrices.html; Strang, capítulos de ecuaciones lineales, determinantes y autovalores; Axler, capítulos de operadores lineales y autovalores."
exercises:
  - id: determinante-2x2
    tier: 1
    prompt: |
      Calcula el determinante de $\begin{pmatrix}3 & 1\\ 4 & 2\end{pmatrix}$. Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: producto-de-matrices
    tier: 1
    prompt: |
      Sean $A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$ y $B = \begin{pmatrix}5 & 6\\ 7 & 8\end{pmatrix}$. ¿Cuánto vale el elemento de la **fila 1, columna 2** de $AB$? Respuesta: un número.
    answers: ["sha256:785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09"]
  - id: sistema-2x2-matrices
    tier: 1
    prompt: |
      Resuelve $\begin{cases}2x + y = 5\\ x - y = 1\end{cases}$. Respuesta en la forma «x;y».
    answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
  - id: determinante-3x3
    tier: 2
    prompt: |
      Calcula el determinante de $\begin{pmatrix}2 & 1 & 3\\ 0 & 1 & 4\\ 1 & 0 & 6\end{pmatrix}$. Respuesta: un número.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: rango
    tier: 2
    prompt: |
      ¿Cuál es el **rango** de $\begin{pmatrix}1 & 2 & 3\\ 2 & 4 & 6\\ 1 & 0 & 1\end{pmatrix}$? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: sistema-3x3
    tier: 2
    prompt: |
      Resuelve $\begin{cases}2x + y - z = 1\\ x + 3y + 2z = 5\\ 3x - y + 4z = 7\end{cases}$ y da $x + y + z$. Respuesta: fracción irreducible «a/b» (o un entero).
    answers: ["sha256:eda8cddbfa856f450f67b945a14f5559a70044122edd1586dddb5af1ece49908"]
  - id: inversa-2x2
    tier: 2
    prompt: |
      La matriz $A = \begin{pmatrix}2 & 1\\ 5 & 3\end{pmatrix}$ es invertible. ¿Cuánto vale el elemento de la **fila 2, columna 1** de $A^{-1}$? Respuesta: un número.
    answers: ["sha256:37aa1ccf80e481832b2db282d4d4f895ee1e31219b7d0f6aee8dc8968828341b"]
  - id: autovalor-mayor
    tier: 2
    prompt: |
      Halla los autovalores de $\begin{pmatrix}4 & 1\\ 2 & 3\end{pmatrix}$ (raíces de $\det(A - \lambda I) = 0$). ¿Cuál es el **mayor**? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: area-del-paralelogramo
    tier: 2
    prompt: |
      Calcula el área del paralelogramo formado por $\vec u = (2, 1, 0)$ y $\vec v = (1, 3, 0)$ (módulo del producto vectorial). Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: producto-escalar-3d
    tier: 2
    prompt: |
      Calcula $\vec u\cdot\vec v$ para $\vec u = (1, 2, 2)$ y $\vec v = (2, 1, -2)$. Respuesta: un número.
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: fibonacci-con-matrices
    tier: 3
    prompt: |
      Se cumple $\begin{pmatrix}1 & 1\\ 1 & 0\end{pmatrix}^{n} = \begin{pmatrix}F_{n+1} & F_n\\ F_n & F_{n-1}\end{pmatrix}$. Usándolo (o iterando), calcula $F_{30}$ (con $F_1 = F_2 = 1$).
      Respuesta: un entero.
    answers: ["sha256:ee1848f1be80d6501f64bcef1e3b9c4a6aae617e4ca521e27ee9edcb22827337"]
  - id: vandermonde
    tier: 3
    prompt: |
      Calcula el determinante de la matriz de Vandermonde $\begin{pmatrix}1 & x_i & x_i^2 & x_i^3\end{pmatrix}$ con $x_i = 1, 2, 3, 4$ (una fila por valor). Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: matriz-singular
    tier: 3
    prompt: |
      ¿Para qué valor de $k$ es **singular** (determinante $0$) la matriz $\begin{pmatrix}1 & 2 & 3\\ 4 & 5 & 6\\ 7 & 8 & k\end{pmatrix}$? Respuesta: un número.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: traza-de-potencia
    tier: 3
    prompt: |
      Sea $D = \begin{pmatrix}2 & 0\\ 0 & 3\end{pmatrix}$. ¿Cuánto vale la traza (suma de la diagonal) de $D^{10}$? Respuesta: un entero.
    answers: ["sha256:4e69104b1d79e3943577df4af5b6f983b9b24904d3d0f54d0595eba87b63e12f"]
  - id: minimos-cuadrados
    tier: 3
    prompt: |
      Ajusta por mínimos cuadrados una recta $y = a + bx$ a los puntos $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 8)$ resolviendo las ecuaciones normales $A^\top A\,\mathbf{c} = A^\top\mathbf{y}$.
      ¿Cuánto vale la pendiente $b$? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:90dc537c512a8dc778aba8ee0c9c8076e1c9f15ce3c953a6f67b7c0719e3fbd1"]
  - id: cadena-de-markov
    tier: 3
    prompt: |
      Un sistema salta entre dos estados con la matriz de transición $P = \begin{pmatrix}0{,}9 & 0{,}1\\ 0{,}5 & 0{,}5\end{pmatrix}$ (filas: de dónde sale; la fila suma $1$). La distribución estacionaria
      $\pi = (\pi_1, \pi_2)$ cumple $\pi = \pi P$ y $\pi_1 + \pi_2 = 1$. ¿Cuánto vale $\pi_1$? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
---

# Álgebra lineal I: sistemas, matrices, determinantes y autovalores

El álgebra lineal es, junto con el cálculo, el idioma común de la ciencia y la ingeniería. Cualquier problema en que varias cantidades se relacionan **proporcionalmente** (circuitos, estructuras, economía, gráficos, redes
neuronales, cifrado, control) se escribe con **matrices**, y los ordenadores resuelven problemas con millones de incógnitas porque saben hacerlo. Este nodo desarrolla el núcleo práctico: resolver sistemas, calcular con matrices,
entender el determinante y los autovalores, con aplicaciones reales. El tratamiento abstracto (espacios vectoriales en general, formas canónicas) está en [[mat-algebra-lineal]].

## Objetivos

Al terminar sabrás:

1. Resolver sistemas lineales por **eliminación gaussiana** y decidir cuántas soluciones tienen (rango).
2. Operar con matrices (suma, producto, transpuesta, inversa) y entenderlas como **transformaciones**.
3. Calcular e interpretar **determinantes**.
4. Trabajar con vectores de $\mathbb{R}^n$: producto escalar, ortogonalidad, producto vectorial.
5. Entender independencia lineal, base, dimensión y rango.
6. Calcular **autovalores y autovectores** y usarlos (potencias de matrices, Fibonacci, cadenas de Markov).
7. Aplicar el álgebra lineal: mínimos cuadrados, circuitos, gráficos.

> [!question] Test de entrada
> 1. Resuelve $x + y = 5$, $x - y = 1$. 2. ¿Cuánto vale el área de un paralelogramo de lados $(3, 0)$ y $(1, 2)$? 3. ¿Cuánto es $\begin{pmatrix}1&2\end{pmatrix}\cdot\begin{pmatrix}3\\4\end{pmatrix}$?
>
> Respuestas: $x = 3,\ y = 2$; $6$; $11$.

## 1. Para qué sirve

- **Resolver redes de relaciones**: el análisis nodal de un circuito es un sistema $G\mathbf v = \mathbf i$ ([[ing-electricidad-basica]], [[ing-circuitos]]).
- **Gráficos y robótica**: rotar, escalar y proyectar es multiplicar por matrices ([[rob-cinematica]]).
- **Datos y aprendizaje automático**: ajustar un modelo por mínimos cuadrados; cada capa de una red neuronal es una matriz ([[ia-redes-profundas]]).
- **Internet**: el algoritmo original de **PageRank** de Google es un autovector.
- **Criptografía y códigos**: cifrados por bloques, códigos correctores, aritmética sobre cuerpos finitos.

## 2. Sistemas de ecuaciones lineales

Un **sistema lineal** de $m$ ecuaciones con $n$ incógnitas se escribe $A\mathbf{x} = \mathbf{b}$, con $A$ la **matriz de coeficientes** ($m\times n$), $\mathbf x$ el vector de incógnitas y $\mathbf b$ el de términos independientes.
Con $2$ incógnitas, cada ecuación es una **recta** y resolver es hallar su punto de corte ([[mat-algebra-basica]]); con $3$, cada una es un **plano**.

**Eliminación gaussiana.** Se transforma el sistema, sin cambiar sus soluciones, mediante tres **operaciones elementales**: intercambiar dos ecuaciones, multiplicar una por un número $\ne 0$, y sumar a una un múltiplo de otra. Se llega a una forma
**escalonada** (triangular) que se resuelve de abajo arriba. (Cada operación es reversible, por eso las soluciones no cambian.)

**Ejemplo resuelto.** $\begin{cases}x + y + z = 6\\ 2x - y + z = 3\\ x + 2y - z = 2\end{cases}$. Se elimina $x$: $E_2 - 2E_1$: $-3y - z = -9$; $E_3 - E_1$: $y - 2z = -4$. Se elimina $y$ de la tercera con $E_3 + \frac13 E_2$ (sobre las ya reducidas):
$-\frac73 z = -7$, luego $z = 3$; de $-3y - 3 = -9$, $y = 2$; de $x + 2 + 3 = 6$, $x = 1$. **Comprobación:** $(1, 2, 3)$ da $6$, $2 - 2 + 3 = 3$, $1 + 4 - 3 = 2$. $\checkmark$

**¿Cuántas soluciones?** El **rango** de $A$ es el número de filas no nulas en la forma escalonada (**pivotes**). Teorema (Rouché-Frobenius): el sistema tiene solución si y solo si $\operatorname{rango}A = \operatorname{rango}[A\mid\mathbf b]$; y es **única** si
además el rango es $n$; si es menor, hay **infinitas**. Ejemplo: $x + y = 2$, $2x + 2y = 5$: el rango de $A$ es $1$ y el de $[A\mid\mathbf b]$ es $2$: **sin solución**; con $2x + 2y = 4$, hay infinitas (una recta).

**Coste.** Eliminar es $O(n^3)$ operaciones, y es cómo trabajan todos los programas.

```python
import numpy as np
A = np.array([[1, 1, 1], [2, -1, 1], [1, 2, -1]], dtype=float)
b = np.array([6, 3, 2], dtype=float)
x = np.linalg.solve(A, b)         # array([1., 2., 3.])  (usa eliminación; NO calcula la inversa)
```

## 3. Matrices y transformaciones

Una **matriz** $m\times n$ es una tabla de números. Se suman y se multiplican por un escalar elemento a elemento. El **producto** $AB$ ($A$ de $m\times p$ y $B$ de $p\times n$) tiene como elemento $(i, j)$ el producto escalar de la fila $i$ de $A$ por la columna $j$ de $B$:

$$
(AB)_{ij} = \sum_{k} A_{ik}B_{kj} .
$$

Propiedades: **asociativo** $(AB)C = A(BC)$, **distributivo**, pero **no conmutativo**: en general $AB \ne BA$. $\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}5&6\\7&8\end{pmatrix} = \begin{pmatrix}19&22\\43&50\end{pmatrix}$ y en el orden inverso sale otra matriz.
La **identidad** $I$ cumple $AI = IA = A$. La **transpuesta** $A^\top$ intercambia filas y columnas; $(AB)^\top = B^\top A^\top$.

**Una matriz es una transformación.** Multiplicar un vector por una matriz lo transforma de forma **lineal**. El **producto** de matrices es la **composición** de transformaciones (primero la de la derecha), y por eso no es conmutativo: girar y luego estirar no es lo mismo que estirar y luego girar.
Ejemplos en el plano:

- **Escalado:** $\begin{pmatrix}2&0\\0&3\end{pmatrix}$ estira $\times2$ en $x$ y $\times3$ en $y$.
- **Rotación** un ángulo $\theta$ (ver [[mat-trigonometria]]): $R(\theta) = \begin{pmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{pmatrix}$. Se cumple $R(\alpha)R(\beta) = R(\alpha + \beta)$: al multiplicar, los elementos son
  justamente las fórmulas del seno y del coseno de una suma.
- **Reflexión** respecto al eje $x$: $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

## 4. La matriz inversa

La **inversa** de una matriz cuadrada $A$ es la que cumple $AA^{-1} = A^{-1}A = I$ (deshace la transformación). No toda matriz la tiene. Para $2\times2$:

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\quad(ad - bc\ne0) .
$$

**Ejemplo:** $A = \begin{pmatrix}2&1\\5&3\end{pmatrix}$: $ad - bc = 1$ y $A^{-1} = \begin{pmatrix}3&-1\\-5&2\end{pmatrix}$; se comprueba que $AA^{-1} = I$. En general se calcula con **Gauss-Jordan**: se reduce $[A\mid I]$ a $[I\mid A^{-1}]$.
Además $(AB)^{-1} = B^{-1}A^{-1}$ (el orden se invierte, como al deshacer ponerse calcetines y zapatos).

**Teorema** (equivalencias para $A$ cuadrada $n\times n$): $A$ es invertible $\iff$ $\det A \ne 0$ $\iff$ $\operatorname{rango}A = n$ $\iff$ $A\mathbf x = \mathbf 0$ solo tiene la solución $\mathbf x = \mathbf 0$ $\iff$ $A\mathbf x = \mathbf b$ tiene solución única para todo $\mathbf b$.

**Advertencia práctica:** para resolver $A\mathbf x = \mathbf b$ **no se calcula** $A^{-1}$: es más lento y menos preciso que eliminar. Se usa `solve`.

## 5. El determinante

El **determinante** de una matriz cuadrada es un número que resume si la transformación aplasta el espacio. Para $2\times 2$, $\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc$. Para $3\times3$ se desarrolla por una fila (cofactores):

$$
\det\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg) .
$$

**Ejemplo resuelto:** $\det\begin{pmatrix}2&1&3\\0&1&4\\1&0&6\end{pmatrix} = 2(6 - 0) - 1(0 - 4) + 3(0 - 1) = 12 + 4 - 3 = 13$.

**Significado geométrico.** $|\det A|$ es el **factor por el que $A$ multiplica áreas** (en $\mathbb R^2$) **o volúmenes** (en $\mathbb R^3$); el signo indica si invierte la orientación. Los vectores columna $(a, c)$ y $(b, d)$ forman un paralelogramo de área $|ad - bc|$.
Una rotación tiene $\det = 1$ (conserva áreas); $\operatorname{diag}(2, 3)$ tiene $\det = 6$; una matriz singular ($\det = 0$) **colapsa** el plano en una recta.

**Propiedades:** $\det(AB) = \det A\,\det B$; $\det A^\top = \det A$; intercambiar dos filas cambia el signo; sumar a una fila un múltiplo de otra **no** lo cambia; si una fila es combinación de otras, $\det = 0$; y el determinante de una matriz **triangular** es el producto de su diagonal.
De ahí se calcula **eficientemente** (por eliminación, $O(n^3)$) en lugar de por la definición, que suma $n!$ productos. Un caso notable es la **matriz de Vandermonde**: $\det\begin{pmatrix}1&x_i&x_i^2&x_i^3\end{pmatrix}= \prod_{i<j}(x_j - x_i)$.

**Regla de Cramer:** si $\det A\ne0$, $x_j = \frac{\det A_j}{\det A}$ con $A_j$ la matriz con la columna $j$ cambiada por $\mathbf b$. Es elegante pero **muy lenta** para $n$ grande: sirve para entender, no para calcular.

## 6. Vectores en $\mathbb R^n$

Un vector de $\mathbb R^n$ es una lista de $n$ números. El **producto escalar** es $\mathbf u\cdot\mathbf v = \sum u_iv_i = |\mathbf u||\mathbf v|\cos\theta$ (ver [[mat-geometria-analitica]]). La **norma** es $|\mathbf u| = \sqrt{\mathbf u\cdot\mathbf u}$; $\mathbf u\perp\mathbf v \iff \mathbf u\cdot\mathbf v = 0$.
**Desigualdad de Cauchy-Schwarz:** $|\mathbf u\cdot\mathbf v| \le |\mathbf u||\mathbf v|$ (consecuencia de que $|\cos\theta|\le1$). **Ejemplo:** $(1, 2, 2)\cdot(2, 1, -2) = 2 + 2 - 4 = 0$: son perpendiculares.

**Producto vectorial en $\mathbb R^3$:** $\mathbf u\times\mathbf v = (u_2v_3 - u_3v_2,\ u_3v_1 - u_1v_3,\ u_1v_2 - u_2v_1)$. Es **perpendicular** a ambos, y su módulo $|\mathbf u||\mathbf v|\sin\theta$ es el **área del paralelogramo** que forman:
$(2, 1, 0)\times(1, 3, 0) = (0, 0, 5)$, de módulo $5$. Aparece en física (fuerza magnética, momento de una fuerza, [[fis-electromagnetismo]]).

## 7. Independencia, base, dimensión y rango

Los vectores $\mathbf v_1, \dots, \mathbf v_k$ son **linealmente independientes** si la única combinación $c_1\mathbf v_1 + \cdots + c_k\mathbf v_k = \mathbf 0$ es la trivial ($c_i = 0$); si no, alguno es combinación de los otros (redundante).
Una **base** de $\mathbb R^n$ es un conjunto de $n$ vectores independientes: cualquier vector se escribe **de una única manera** como combinación suya. $n$ es la **dimensión**. El **rango** de una matriz es la dimensión de su espacio de columnas
(el número de columnas independientes, igual al de filas independientes).

**Teorema de rango y nulidad:** para $A$ de $m\times n$, $\operatorname{rango}A + \operatorname{nulidad}A = n$, con la nulidad la dimensión del conjunto de soluciones de $A\mathbf x = \mathbf 0$. (Cada columna sin pivote es una dirección libre.)
**Ejemplo:** $\begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$ tiene la fila $2$ igual al doble de la $1$: rango $2$ y nulidad $1$.

## 8. Autovalores y autovectores

Muchas matrices tienen direcciones especiales que **no giran**, solo se estiran: $A\mathbf v = \lambda\mathbf v$ con $\mathbf v\ne\mathbf 0$. $\lambda$ es un **autovalor** y $\mathbf v$ un **autovector**. Para hallarlos: $(A - \lambda I)\mathbf v = \mathbf 0$ tiene solución no nula
$\iff \det(A - \lambda I) = 0$, el **polinomio característico**. Para $2\times2$: $\lambda^2 - (\operatorname{tr}A)\lambda + \det A = 0$ (la **traza** es la suma de la diagonal): la suma de autovalores es la traza y su producto es el determinante.

**Ejemplo resuelto:** $A = \begin{pmatrix}4&1\\2&3\end{pmatrix}$: $\lambda^2 - 7\lambda + 10 = 0$, $\lambda = 5$ o $\lambda = 2$. Para $\lambda = 5$: $(A - 5I)\mathbf v = 0$ da $-v_1 + v_2 = 0$, $\mathbf v = (1, 1)$; comprobación: $A(1, 1) = (5, 5)$. $\checkmark$
Para $\lambda = 2$: $\mathbf v = (1, -2)$: $A(1, -2) = (2, -4) = 2(1, -2)$. $\checkmark$

**Diagonalización y potencias.** Si $A$ tiene $n$ autovectores independientes, $A = PDP^{-1}$ con $D$ diagonal (los autovalores) y $P$ con los autovectores en las columnas. Entonces

$$
A^k = PD^kP^{-1},
$$

y elevar $D$ es elevar cada autovalor. Calcular $A^{100}$ pasa de $100$ productos de matrices a elevar números.

**Aplicación 1: Fibonacci.** $\begin{pmatrix}F_{n+1}\\F_n\end{pmatrix} = \begin{pmatrix}1&1\\1&0\end{pmatrix}^{n}\begin{pmatrix}1\\0\end{pmatrix}$; los autovalores son $\varphi = \frac{1 + \sqrt5}{2}$ y $1 - \varphi$, y de ahí sale la **fórmula de Binet**
$F_n = \frac{\varphi^n - (1 - \varphi)^n}{\sqrt5}$ ($F_{10} = 55$). Con potencias por cuadrados sucesivos, $F_{30} = 832\,040$ se calcula con $5$ productos de matrices $2\times2$.

**Aplicación 2: cadenas de Markov.** Si $P$ es la matriz de transición de un sistema (cada fila suma $1$), la distribución a largo plazo es el **autovector con $\lambda = 1$** (por filas, $\pi = \pi P$). Con $P = \begin{pmatrix}0{,}9&0{,}1\\0{,}5&0{,}5\end{pmatrix}$:
$-0{,}1\pi_1 + 0{,}5\pi_2 = 0$ y $\pi_1 + \pi_2 = 1$ dan $\pi = \left(\frac56, \frac16\right)$. **PageRank** es exactamente esto con la matriz de enlaces de la web.

## 9. Mínimos cuadrados

Si hay más ecuaciones que incógnitas (datos con ruido), $A\mathbf x = \mathbf b$ no tiene solución exacta. Se busca la **mejor aproximación** que minimiza $|A\mathbf x - \mathbf b|^2$: la solución de las **ecuaciones normales** $A^\top A\,\mathbf x = A^\top\mathbf b$.
**Ejemplo:** ajustar $y = a + bx$ a $(0, 1), (1, 3), (2, 4), (3, 8)$. Con $A$ de filas $(1, x_i)$: $A^\top A = \begin{pmatrix}4&6\\6&14\end{pmatrix}$, $A^\top\mathbf y = \begin{pmatrix}16\\35\end{pmatrix}$; resolviendo, $a = \frac7{10}$ y $b = \frac{11}{5}$: $y = 0{,}7 + 2{,}2x$.
Es la base de la regresión lineal y del ajuste de modelos ([[ia-aprendizaje-estadistico]]).

## 10. En la práctica: precisión numérica

Los ordenadores trabajan con flotantes, y algunas matrices son **mal condicionadas**: un cambio minúsculo en los datos produce uno enorme en la solución (la matriz de Hilbert es el ejemplo clásico). El **número de condición** `np.linalg.cond(A)` lo mide; si es del orden de
$10^{k}$, se pierden unas $k$ cifras decimales. Por eso se **resuelve** en vez de invertir, se evita restar números casi iguales y se comprueba el **residuo** $|A\mathbf x - \mathbf b|$.

## 11. Errores típicos

- Suponer $AB = BA$.
- Calcular $A^{-1}$ para resolver un sistema.
- Cambiar el orden en $(AB)^{-1} = B^{-1}A^{-1}$ o en $(AB)^\top = B^\top A^\top$.
- Olvidar que $\det(A + B)\ne\det A + \det B$ (el determinante **no** es lineal en la matriz entera).
- Dividir una fila por un pivote cero (hay que intercambiar filas).
- Confundir independencia lineal (sin redundancia) con ortogonalidad (perpendicular).
- Tomar un vector nulo como autovector.

## Repaso: lo que debe quedarte dentro de un mes

1. Eliminación gaussiana; rango y número de soluciones ($\operatorname{rango}A = \operatorname{rango}[A\mid\mathbf b]$).
2. $AB \ne BA$; producto = composición; rotación $R(\theta)$ y $R(\alpha)R(\beta) = R(\alpha + \beta)$.
3. Invertible $\iff \det\ne0 \iff$ rango completo; $\det(AB) = \det A\det B$; $|\det|$ escala áreas.
4. $\mathbf u\cdot\mathbf v = |\mathbf u||\mathbf v|\cos\theta$; $|\mathbf u\times\mathbf v|$ es el área del paralelogramo.
5. $A\mathbf v = \lambda\mathbf v$, $\det(A - \lambda I) = 0$; $A^k = PD^kP^{-1}$; ecuaciones normales $A^\top A\mathbf x = A^\top\mathbf b$.

## Siguiente

[[mat-algebra-lineal]] generaliza todo esto a **espacios vectoriales abstractos** (con demostraciones), y `mat-calculo-multivariable` combina el cálculo con el álgebra lineal para funciones de varias variables.
