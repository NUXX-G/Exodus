---
id: mat-algebra-lineal
title: "Álgebra lineal"
area: matematicas
trunk_level: 8
prerequisites: [mat-logica-demostraciones, mat-geometria-analitica]
academic_sources:
  - "Axler, S. Linear Algebra Done Right, 4ª ed. Springer, 2024."
  - "Strang, G. Introduction to Linear Algebra, 5ª ed. Wellesley-Cambridge Press, 2016."
  - "Hoffman, K.; Kunze, R. Linear Algebra, 2ª ed. Prentice Hall, 1971."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997."
ctf_flag: "sha256:f06fe0752519c4a4624d895e64d4a175d13a9848457ba38a7c3fc13b1be70407"
hints:
  - "Los tres apartados son eliminación gaussiana o producto de matrices sobre un cuerpo distinto: ℚ en (a), 𝔽₂ en (b) y ℤ/pℤ en (c). En (a) la coma flotante puede darte un determinante casi entero: trabaja con aritmética exacta. En (c) no se itera 10¹⁸ veces: se eleva una matriz 2×2 al cuadrado repetidamente."
  - "En Python, fractions.Fraction da eliminación exacta sobre ℚ; para (b) representa cada fila como un entero y usa XOR como suma de filas. Con SymPy, Matrix(...).det() y Matrix(...).rank() sirven para contrastar (a), pero rank() trabaja sobre ℚ, no sobre 𝔽₂. Para (c), pow(base, exp, mod) solo admite escalares: escribe tú el producto 2×2 módulo p."
  - "Axler, cap. 3 (aplicaciones lineales y matrices) y cap. 9 (determinantes, 4ª ed.). Strang, §2.2–2.3 (eliminación) y §5.1 (propiedades del determinante). Documentación de fractions: docs.python.org/3/library/fractions.html."
---

# Álgebra lineal

El álgebra lineal estudia los espacios donde se puede sumar y escalar, y las aplicaciones que
respetan esas dos operaciones. Casi todo problema tratable de la ciencia y la ingeniería se
resuelve reduciéndolo a uno lineal; por eso este nodo es prerequisito de la mitad del árbol.

## 1. Espacios vectoriales

Sea $K$ un cuerpo ($\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ o un cuerpo finito como
$\mathbb{F}_2 = \mathbb{Z}/2\mathbb{Z}$). Un **espacio vectorial** sobre $K$ es un conjunto $V$
con una suma $V \times V \to V$ y un producto por escalares $K \times V \to V$ tales que
$(V, +)$ es un grupo abeliano y, para $a, b \in K$ y $u, v \in V$:

$$
a(u + v) = au + av, \qquad (a + b)v = av + bv, \qquad (ab)v = a(bv), \qquad 1v = v.
$$

Ejemplos: $K^n$; los polinomios de grado menor que $n$; las funciones continuas
$[0,1] \to \mathbb{R}$; las soluciones de una ecuación diferencial lineal homogénea.

Una familia $v_1, \dots, v_k$ es **linealmente independiente** si
$\sum a_i v_i = 0 \Rightarrow a_1 = \dots = a_k = 0$, y **genera** $V$ si todo vector es
combinación lineal de ella. Una **base** es una familia independiente que genera.

**Lema (de intercambio de Steinitz).** Si $u_1, \dots, u_m$ es independiente y
$w_1, \dots, w_n$ genera $V$, entonces $m \le n$.

*Demostración.* Como los $w_j$ generan, $u_1 = \sum a_j w_j$ con algún $a_j \neq 0$; reordenando,
$a_1 \neq 0$ y $w_1$ se despeja en función de $u_1, w_2, \dots, w_n$, que por tanto generan $V$.
Repitiendo con $u_2$: se escribe en función de $u_1, w_2, \dots, w_n$, y algún coeficiente de un
$w_j$ es no nulo (si no, $u_2$ sería múltiplo de $u_1$, contra la independencia); se intercambia.
Si fuese $m > n$, tras $n$ pasos $u_1, \dots, u_n$ generarían $V$ y $u_{n+1}$ sería combinación
de ellos: contradicción. $\blacksquare$

**Corolario.** Todas las bases de $V$ tienen el mismo número de elementos: la **dimensión** de $V$.

## 2. Aplicaciones lineales y matrices

$T : V \to W$ es **lineal** si $T(au + bv) = aT(u) + bT(v)$. Su **núcleo**
$\ker T = \{v : T(v) = 0\}$ y su **imagen** $\operatorname{im} T$ son subespacios.

**Teorema (rango-nulidad).** Si $V$ tiene dimensión finita,

$$
\dim V = \dim \ker T + \dim \operatorname{im} T .
$$

*Demostración.* Sea $u_1, \dots, u_k$ una base de $\ker T$, ampliada con $v_1, \dots, v_r$ a una
base de $V$. Los $T(v_i)$ generan la imagen, porque $T$ anula los $u_j$. Son independientes: si
$\sum c_i T(v_i) = 0$, entonces $\sum c_i v_i \in \ker T$ es combinación de los $u_j$, y la
independencia de la base completa fuerza $c_i = 0$. Luego $\dim \operatorname{im} T = r$.
$\blacksquare$

Fijadas bases, $T$ queda descrita por una matriz $A$ cuya columna $j$ contiene las coordenadas de
$T(e_j)$. La composición de aplicaciones corresponde al producto de matrices,
$(AB)_{ij} = \sum_k A_{ik} B_{kj}$, y por eso el producto es asociativo pero no conmutativo. El
**rango** de $A$ es $\dim \operatorname{im} T$; coincide con el número de filas independientes y
con el de columnas independientes.

## 3. Eliminación gaussiana

Tres operaciones elementales sobre filas conservan el conjunto de soluciones de $Ax = b$:
intercambiar dos filas, multiplicar una fila por un escalar no nulo y sumar a una fila un
múltiplo de otra. Aplicadas sistemáticamente llevan $A$ a forma escalonada en $O(n^3)$
operaciones del cuerpo; el número de pivotes es el rango.

```python
from fractions import Fraction

def rango(A):
    """Rango de una matriz de enteros, con aritmética exacta sobre Q."""
    M = [[Fraction(x) for x in fila] for fila in A]
    r = 0
    for c in range(len(M[0])):
        pivote = next((i for i in range(r, len(M)) if M[i][c] != 0), None)
        if pivote is None:
            continue
        M[r], M[pivote] = M[pivote], M[r]
        for i in range(r + 1, len(M)):
            f = M[i][c] / M[r][c]
            M[i] = [a - f * b for a, b in zip(M[i], M[r])]
        r += 1
    return r
```

El algoritmo solo usa suma, producto y división por elementos no nulos: funciona sobre
**cualquier cuerpo**. Sobre $\mathbb{F}_2$ la suma de filas es un XOR bit a bit.

> [!warning] Coma flotante
> Con `float`, restar cantidades casi iguales destruye cifras significativas y un pivote que
> debería ser cero aparece como $10^{-17}$. El rango y el determinante calculados así pueden ser
> falsos. Con enteros o racionales el resultado es exacto.

## 4. Determinante

El determinante es la única función $\det : M_n(K) \to K$ que es lineal en cada fila, alternada
(vale 0 si dos filas coinciden) y cumple $\det I = 1$. Explícitamente (fórmula de Leibniz):

$$
\det A = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma) \prod_{i=1}^{n} A_{i,\sigma(i)} .
$$

De la definición se sigue su comportamiento bajo operaciones elementales: intercambiar filas
cambia el signo, multiplicar una fila por $c$ multiplica el determinante por $c$, y sumar a una
fila un múltiplo de otra no lo altera. Por tanto $\det A$ es $(-1)^s$ por el producto de los
pivotes, con $s$ el número de intercambios, y se calcula en $O(n^3)$ en lugar de los $n!$
sumandos de Leibniz.

**Teorema.** $A$ es invertible $\iff \det A \neq 0 \iff \operatorname{rango} A = n$. Además
$\det(AB) = \det A \cdot \det B$.

Valor de control: la matriz $3 \times 3$ con $M_{ij} = (i^j + j) \bmod 11$ para
$1 \le i, j \le 3$ tiene determinante $-72$.

## 5. Autovalores y diagonalización

$\lambda \in K$ es **autovalor** de $A$ si existe $v \neq 0$ con $Av = \lambda v$; equivale a
$\det(A - \lambda I) = 0$. Si $A$ tiene $n$ autovectores independientes, colocados como columnas
de $P$,

$$
A = P D P^{-1} \quad\Longrightarrow\quad A^k = P D^k P^{-1},
$$

con $D$ diagonal. Las potencias de una matriz gobiernan toda recurrencia lineal. Para Fibonacci,
$F_0 = 0$, $F_1 = 1$, $F_{n+1} = F_n + F_{n-1}$:

$$
\begin{pmatrix} F_{n+1} & F_n \\ F_n & F_{n-1} \end{pmatrix}
= \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}^{n} .
$$

Los autovalores de esa matriz son $\varphi = \frac{1 + \sqrt 5}{2}$ y $1 - \varphi$, de donde
sale la fórmula de Binet. Para calcular $F_n$ exacto o módulo $p$ no hace falta diagonalizar:
basta elevar la matriz con el método de cuadrados sucesivos (exponenciación rápida: elevar al cuadrado y multiplicar según los bits del exponente), en
$O(\log n)$ productos.

**Teorema espectral (caso real).** Toda matriz simétrica real es diagonalizable por una matriz
ortogonal: $A = Q D Q^{\mathsf T}$ con $Q^{\mathsf T} Q = I$ y autovalores reales.

Es la base de la descomposición en valores singulares, del análisis de componentes principales
([[ia-aprendizaje-estadistico]]) y de los observables de [[fis-mecanica-cuantica]].

## Ejercicios de demostración

1. Demuestra que la intersección de dos subespacios es un subespacio, y que la unión solo lo es si uno contiene al otro.
2. Demuestra que una aplicación lineal entre espacios de la misma dimensión finita es inyectiva si y solo si es sobreyectiva.
3. Demuestra que autovectores asociados a autovalores distintos son linealmente independientes.
4. Demuestra que los autovalores de una matriz simétrica real son reales.

## Reto

Calcula tres enteros.

- **a.** El determinante de la matriz $8 \times 8$ con entradas
  $M_{ij} = (i^j + j) \bmod 11$, para $1 \le i, j \le 8$.
- **b.** El rango **sobre $\mathbb{F}_2$** de la matriz $16 \times 16$ con $B_{ij} = 1$ si
  $\gcd(i, j) = 1$ y $B_{ij} = 0$ en otro caso, para $1 \le i, j \le 16$.
- **c.** $F_{10^{18}} \bmod (10^9 + 7)$. Valor de control: $F_{100} \bmod (10^9 + 7) = 687995182$.

Formato de la flag, con los tres valores en decimal separados por guiones bajos y el signo de
**a** si es negativo: `EXODUS{a_b_c}`
