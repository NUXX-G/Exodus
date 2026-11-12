---
id: mat-analisis-numerico
title: "Análisis numérico: coma flotante, ecuaciones, interpolación, integración y sistemas lineales"
area: matematicas
trunk_level: 11
prerequisites: [mat-ecuaciones-diferenciales, prog-python-fundamentos]
academic_sources:
  - "Burden, R. L.; Faires, J. D.; Burden, A. M. Numerical Analysis, 10ª ed. Cengage Learning, 2016."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997."
  - "Higham, N. J. Accuracy and Stability of Numerical Algorithms, 2ª ed. SIAM, 2002."
  - "Goldberg, D. What Every Computer Scientist Should Know About Floating-Point Arithmetic. ACM Computing Surveys, 23(1), 5-48, 1991."
hints:
  - "Concepto: separa siempre dos fuentes de error. El de truncamiento (aproximar una derivada, una integral o una serie) baja al afinar el método: h, h², h⁴. El de redondeo (cada operación en coma flotante tiene un error relativo de hasta 2⁻⁵³) sube al restar números parecidos o al usar pasos diminutos. Un buen algoritmo es estable; un mal problema está mal condicionado, y ningún algoritmo lo arregla."
  - "Herramienta: en Python, fractions.Fraction hace aritmética exacta para comprobar un cálculo, decimal da precisión arbitraria, y math.ulp, sys.float_info y float.hex muestran la representación. Repite cada cálculo con el doble de subintervalos o la mitad de paso: el cociente de errores revela el orden del método (2, 4, 16...)."
  - "Documentación: Burden y Faires, capítulos de errores, ecuaciones de una variable, interpolación, derivación e integración numéricas y métodos directos e iterativos; Goldberg (1991) para la coma flotante; docs.python.org/3/library/fractions.html y decimal.html; numpy.linalg.cond y scipy.integrate en la documentación de NumPy y SciPy."
exercises:
  - id: epsilon-de-maquina
    tier: 1
    prompt: |
      En doble precisión IEEE 754, el **épsilon de máquina** (la distancia de $1$ al siguiente número representable) es $2^k$. ¿Cuánto vale $k$? Respuesta: un entero.
    answers: ["sha256:10ef6788bc4a48549d3bde552228102813adfcfa40a1fd7adad20cb55c1787fe"]
  - id: cero-coma-uno-mas-cero-coma-dos
    tier: 1
    prompt: |
      En doble precisión, `0.1 + 0.2 - 0.3` no da $0$, sino exactamente $2^k$. ¿Cuánto vale $k$? Respuesta: un entero.
    answers: ["sha256:81ed9a3031aa1ab056d07b9e41e23b290f92c892326ca3b289369595fadef816"]
  - id: iteraciones-de-biseccion
    tier: 1
    prompt: |
      Se busca la raíz de $x^2 - 2$ por **bisección** partiendo de $[1, 2]$. ¿Cuántas bisecciones hacen falta para que la anchura del intervalo sea menor que $10^{-6}$? Respuesta: un entero.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: newton-para-raiz-de-dos
    tier: 2
    prompt: |
      Aplica el método de **Newton** a $f(x) = x^2 - 2$ desde $x_0 = 1$, con aritmética exacta de fracciones. ¿Cuánto vale $x_3$? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:eb98c0fc3890d1ce25a0c4aae7851e01329d402fedf376e0292389603613b20e"]
  - id: constante-de-convergencia-cuadratica
    tier: 2
    prompt: |
      En la iteración de Newton para $x^2 - 2$, los errores cumplen $e_{n+1} \approx C\,e_n^2$ con $C = \frac{f''(r)}{2f'(r)}$ en la raíz $r = \sqrt 2$. ¿Cuánto vale $C$? Respuesta: un número redondeado a **5 decimales**.
    answers: ["sha256:149b1ff2bd62e98a811ba91b9a00c879b07a3b478ab84ff5349290dac27710e0"]
  - id: cancelacion-catastrofica
    tier: 2
    prompt: |
      En doble precisión y con $x = 10^{-8}$, ¿qué devuelve `(1 - cos(x)) / x**2` y qué devuelve la fórmula equivalente `2 * sin(x/2)**2 / x**2`? (El valor exacto del límite es $\tfrac12$.) Respuesta: los dos resultados separados por `;`.
    answers: ["sha256:d869bc3de30f1d118580e4c157239954c99b1d409dd28957c848d000aed9913f"]
  - id: interpolacion-de-lagrange
    tier: 2
    prompt: |
      Sea $P$ el polinomio de grado $\le 3$ que pasa por $(0, 1)$, $(1, 3)$, $(2, 2)$ y $(3, 5)$. Calcula $P(3/2)$. Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:cc7cb5b1dbea53e513d5c16f88d44de7f76efdb8cc1faccdf1b997182e286dbe"]
  - id: regla-del-trapecio
    tier: 2
    prompt: |
      Aproxima $\int_0^1 e^x\,dx$ con la regla del **trapecio compuesta** con $n = 4$ subintervalos. Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:72632b3fafcc9803ac6cac6edbcd356f3db9570fd9c0162e947c3cf96f44ba2c"]
  - id: regla-de-simpson
    tier: 2
    prompt: |
      Aproxima $\int_0^1 e^x\,dx$ con la regla de **Simpson compuesta** con $n = 4$ subintervalos. Respuesta: un número redondeado a **6 decimales**.
    answers: ["sha256:0abd708c09419847d4296316965143197c610751ed06b233d90a7cf3bb0615f6"]
  - id: eliminacion-gaussiana
    tier: 2
    prompt: |
      Resuelve por eliminación gaussiana con pivoteo parcial el sistema $2x + y - z = 8$, $-3x - y + 2z = -11$, $-2x + y + 2z = -3$. Respuesta: `x;y;z`.
    answers: ["sha256:cf963587012fa975cd56a98ced210da372e5d8dbf2a20e3c81a0ef686d44adbc"]
  - id: recta-de-minimos-cuadrados
    tier: 2
    prompt: |
      Ajusta por **mínimos cuadrados** una recta $y = mx + b$ a los puntos $(0, 1)$, $(1, 2)$, $(2, 2)$, $(3, 4)$. Respuesta: `m;b` como fracciones irreducibles (o enteros).
    answers: ["sha256:232a410bb33faefd58897c4bdce8e5566de9b2064cde00783e53f2cf9c4fdfa9"]
  - id: extrapolacion-de-richardson
    tier: 3
    prompt: |
      Con $T_4$ y $T_8$ las aproximaciones del trapecio de $\int_0^1 e^x\,dx$ con $4$ y $8$ subintervalos, calcula la extrapolación de Richardson $\frac{4T_8 - T_4}{3}$. Respuesta: un número redondeado a **6 decimales**.
    answers: ["sha256:d8166c86e5aefbd72bfe7bbd753ceb725c3037e07987403a633a4cf2c989f3e6"]
  - id: cuadratura-de-gauss
    tier: 3
    prompt: |
      La cuadratura de **Gauss-Legendre de 2 puntos** aproxima $\int_{-1}^1 f \approx f(-1/\sqrt3) + f(1/\sqrt3)$ y es exacta para polinomios de grado $\le 3$. ¿Qué valor da para $\int_{-1}^1 x^4\,dx$ (cuyo valor exacto es $2/5$)? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:185b24d9b65771b0c597f1cb146a9aa5f45091ef88b25cfe570676c6a62e52eb"]
  - id: paso-optimo-de-derivacion
    tier: 3
    prompt: |
      Se aproxima $f'(0)$ para $f(x) = e^x$ con la diferencia centrada $\frac{f(h) - f(-h)}{2h}$ en doble precisión, probando $h = 10^{-k}$ para $k = 1, 2, \dots, 12$. ¿Con qué $k$ es **menor** el error? (El error de truncamiento baja como $h^2$; el de redondeo sube como $\varepsilon/h$.) Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: numero-de-condicion
    tier: 3
    prompt: |
      Calcula el número de condición $\kappa_\infty(A) = \lVert A\rVert_\infty\,\lVert A^{-1}\rVert_\infty$ de $A = \begin{pmatrix} 1 & 1 \\ 1 & 1{,}0001 \end{pmatrix}$ (norma infinito: máxima suma de valores absolutos por filas). Respuesta: un entero (redondeado).
    answers: ["sha256:c8ffd9e7200fe83422673a8129884b5add4798ab4c99a4c2fd50b569c5d5f20c"]
  - id: jacobi-frente-a-gauss-seidel
    tier: 3
    prompt: |
      Para el sistema $4x - y = 15$, $-x + 4y - z = 10$, $-y + 4z = 10$, partiendo de $(0, 0, 0)$, ¿cuántas iteraciones necesitan **Jacobi** y **Gauss-Seidel** para que el error máximo respecto a la solución exacta sea menor que $10^{-6}$? Respuesta: los dos números separados por `;`.
    answers: ["sha256:1afa487273b2b732842079f7e804b8ab2961ea59fe594fef7f42ad21a6b4f586"]
---

# Análisis numérico: coma flotante, ecuaciones, interpolación, integración y sistemas lineales

Un ordenador no hace matemáticas exactas: trabaja con un número finito de bits y sustituye límites por pasos finitos. El
**análisis numérico** estudia cómo calcular aproximaciones fiables y, sobre todo, **cuánto se equivocan**. Este nodo explica la
aritmética en coma flotante y sus trampas (cancelación, condicionamiento), y los métodos básicos con los que se resuelven las
ecuaciones de la ciencia y la ingeniería: raíces (bisección, Newton), interpolación, derivación e integración numéricas, sistemas
lineales y mínimos cuadrados, cada uno con su análisis de error. Es la base de toda simulación, de la estadística computacional y del
aprendizaje automático.

## Objetivos

Al terminar sabrás:

1. Explicar la representación IEEE 754, el épsilon de máquina y el modelo de error de redondeo, y detectar la **cancelación catastrófica**.
2. Distinguir el **condicionamiento** de un problema de la **estabilidad** de un algoritmo.
3. Hallar raíces con bisección, Newton y secante, conociendo su orden de convergencia.
4. Construir polinomios de interpolación (Lagrange, Newton) y estimar su error; evitar el fenómeno de Runge.
5. Derivar e integrar numéricamente (diferencias, trapecio, Simpson, Richardson, Gauss) con el orden de error de cada método.
6. Resolver sistemas lineales con eliminación gaussiana con pivoteo y métodos iterativos, usar el número de condición y ajustar por
   mínimos cuadrados.

## Qué debes dominar antes

[[mat-ecuaciones-diferenciales]] (Euler y RK4, la idea de orden de un método), [[mat-calculo-2]] (Taylor con resto),
[[mat-algebra-lineal-1]] (sistemas, matrices, determinantes) y [[prog-python-fundamentos]]. La representación binaria de
[[sys-c-fundamentos]].

> [!question] Test de entrada
> 1. Escribe el polinomio de Taylor de grado 2 de $e^x$ en $0$ y el término de error.
> 2. ¿Cuántas veces hay que dividir $1$ entre $2$ para bajar de $10^{-3}$?
> 3. ¿Qué devuelve Python para `0.1 + 0.2 == 0.3`?
>
> Respuestas: $1 + x + \frac{x^2}{2}$, con error $\frac{e^{\xi}x^3}{6}$ para algún $\xi$ entre $0$ y $x$; $10$ ($2^{-10} \approx 0{,}00098$); `False`.

## 1. Para qué sirve

- **Toda simulación** (clima, estructuras, circuitos, órbitas) es análisis numérico; saber cuánto se equivoca decide si el resultado vale.
- **Aprendizaje automático**: el descenso de gradiente, la estabilidad del entrenamiento (desbordamientos, `softmax` estable) y la
  precisión reducida (16 bits) son problemas numéricos ([[ia-aprendizaje-estadistico]]).
- **Finanzas y ciencia de datos**: los mínimos cuadrados son la regresión lineal; un sistema mal condicionado da coeficientes absurdos.
- **Seguridad y fiabilidad**: errores de coma flotante han causado fallos reales; comparar con `==` o acumular redondeos en un bucle largo
  son defectos que se auditan.

## 2. Coma flotante y errores

Un número en **doble precisión** (IEEE 754, binary64) ocupa 64 bits: signo, 11 bits de exponente y 52 de mantisa, y representa
$\pm(1{,}b_1b_2\dots b_{52})_2 \cdot 2^{e}$. Entre $1$ y $2$ los números representables están separados por $2^{-52}$: es el
**épsilon de máquina** $\varepsilon \approx 2{,}2\cdot10^{-16}$. Redondear al más cercano comete un error relativo de como mucho
$u = 2^{-53}$ (la **unidad de redondeo**), así que el resultado de cada operación cumple

$$
\operatorname{fl}(x \circ y) = (x \circ y)(1 + \delta), \qquad \lvert\delta\rvert \le u .
$$

Unas 16 cifras decimales significativas. Los números como $0{,}1$ no son representables (en binario son periódicos) y se guardan
redondeados ([[sys-c-fundamentos]]).

**Error absoluto y relativo.** Si $\hat x$ aproxima a $x$: error absoluto $\lvert\hat x - x\rvert$, relativo $\lvert\hat x - x\rvert/\lvert x\rvert$.
El relativo es el que cuenta cifras correctas.

**Cancelación catastrófica.** Restar dos números casi iguales no comete error nuevo, pero **expone** los errores que ya traían: si
ambos tienen error relativo $10^{-16}$ y coinciden en sus 12 primeras cifras, la diferencia solo conserva unas 4 correctas.

**Ejemplo resuelto 1.** Raíces de $x^2 - 10^8x + 1 = 0$. La fórmula $x = \frac{b \pm\sqrt{b^2 - 4c}}{2}$ (aquí $b = 10^8$, $c = 1$) da la raíz
grande sin problema, pero la pequeña, $\frac{b - \sqrt{b^2 - 4}}{2}$, resta dos números casi iguales y sale con un error del 25 %. Como
el producto de las raíces es $c = 1$, la pequeña se calcula sin restas como $1/x_{\text{grande}} \approx 10^{-8}$. **Reformular para
evitar la resta** es la técnica básica: $1 - \cos x = 2\sin^2(x/2)$, $\sqrt{x + 1} - \sqrt x = \frac{1}{\sqrt{x + 1} + \sqrt x}$.

**Condicionamiento y estabilidad.** Un **problema** está mal condicionado si pequeños cambios en los datos producen grandes cambios en
la solución; el **número de condición** lo mide (para una función, $\kappa = \lvert x f'(x)/f(x)\rvert$, el factor por el que se
multiplica el error relativo). Un **algoritmo** es estable si no añade más error del que el condicionamiento obliga. La fórmula ingenua
de la raíz pequeña es un algoritmo **inestable** para un problema **bien condicionado**; invertir una matriz casi singular es un problema
mal condicionado, y ningún algoritmo lo salva.

## 3. Ecuaciones no lineales

**Bisección.** Si $f$ es continua y $f(a)f(b) < 0$, hay una raíz en $[a, b]$ (teorema de Bolzano). Se evalúa el punto medio y se
conserva la mitad con cambio de signo. Tras $n$ pasos la anchura es $(b - a)/2^n$: para una tolerancia $\tau$ bastan
$n \ge \log_2\frac{b - a}{\tau}$ pasos. Convergencia **lineal** (una cifra binaria por paso), lenta pero **segura**.

**Newton.** Se sustituye $f$ por su tangente en $x_n$ y se toma su corte con el eje:

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} .
$$

**Teorema.** Si $f$ es de clase $C^2$, $r$ es una raíz con $f'(r) \ne 0$ y $x_0$ está suficientemente cerca, Newton converge y
$e_{n+1} \approx \frac{f''(r)}{2f'(r)}\,e_n^2$: convergencia **cuadrática** (el número de cifras correctas se duplica en cada paso).

*Idea.* Taylor en $x_n$: $0 = f(r) = f(x_n) + f'(x_n)(r - x_n) + \tfrac12 f''(\xi)(r - x_n)^2$; dividiendo por $f'(x_n)$ y usando la
definición de $x_{n+1}$ se obtiene $r - x_{n+1} = -\frac{f''(\xi)}{2f'(x_n)}(r - x_n)^2$. $\blacksquare$

**Ejemplo resuelto 2.** $\sqrt2$ como raíz de $x^2 - 2$: $x_{n+1} = \frac{x_n}{2} + \frac{1}{x_n}$ (el método babilónico). Desde $x_0 = 1$:
$1{,}5$; $1{,}41\overline{6}$; $1{,}4142157$; $1{,}41421356237469$. Los errores son $0{,}086$, $0{,}0025$, $2{,}1\cdot10^{-6}$, $1{,}6\cdot10^{-12}$:
cada uno es aproximadamente $0{,}354$ veces el cuadrado del anterior.

Newton puede fallar: si $f'(x_n) \approx 0$ salta lejos; si la raíz es múltiple converge solo linealmente; desde un mal punto puede
oscilar. En la práctica se combina con bisección (método híbrido). El método de la **secante** sustituye $f'$ por la pendiente entre
los dos últimos puntos: no necesita derivadas y su orden es $\frac{1 + \sqrt5}{2} \approx 1{,}618$.

## 4. Interpolación

Por $n + 1$ puntos con abscisas distintas pasa **un único** polinomio de grado $\le n$ (dos polinomios así diferirían en un polinomio de
grado $\le n$ con $n + 1$ raíces, que solo puede ser el nulo). Se puede escribir en la **forma de Lagrange**

$$
P(x) = \sum_{i=0}^{n} y_i\,L_i(x), \qquad L_i(x) = \prod_{j \ne i}\frac{x - x_j}{x_i - x_j},
$$

o en la **forma de Newton** con diferencias divididas, que permite añadir un punto sin recalcular todo. Si $f$ es suficientemente
derivable, el **error** es

$$
f(x) - P(x) = \frac{f^{(n+1)}(\xi)}{(n + 1)!}\prod_{i=0}^{n}(x - x_i) .
$$

**Fenómeno de Runge.** Con nodos **equiespaciados**, aumentar el grado puede empeorar la aproximación cerca de los extremos: para
$f(x) = 1/(1 + 25x^2)$ en $[-1, 1]$ el error crece sin límite. Se evita con los **nodos de Chebyshev** $x_k = \cos\frac{(2k + 1)\pi}{2(n + 1)}$,
que se agrupan hacia los extremos, o usando polinomios a trozos (**splines** cúbicos).

## 5. Derivación numérica

De Taylor: la diferencia **hacia delante** $\frac{f(x + h) - f(x)}{h}$ tiene error $O(h)$; la **centrada** $\frac{f(x + h) - f(x - h)}{2h}$,
$O(h^2)$ (los términos pares se cancelan). Pero un $h$ diminuto resta números casi iguales: el error de redondeo crece como
$\varepsilon/h$. El error total $\approx C_1h^2 + C_2\,\varepsilon/h$ es mínimo hacia $h \sim \varepsilon^{1/3} \approx 10^{-5}$ para la
centrada: **más pequeño no es mejor**. (Por eso el aprendizaje automático usa diferenciación **automática**, que es exacta salvo redondeo.)

## 6. Integración numérica

Se aproxima $\int_a^b f$ integrando un interpolante en cada subintervalo de anchura $h = (b - a)/n$:

- **Trapecio compuesto**: $T_n = h\left[\frac{f(a) + f(b)}{2} + \sum_{i=1}^{n-1} f(a + ih)\right]$, con error $-\frac{(b - a)h^2}{12}f''(\xi)$: **orden 2**.
- **Simpson compuesto** ($n$ par): $S_n = \frac h3\left[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + 4f_{n-1} + f_n\right]$, con error proporcional a $h^4 f^{(4)}$:
  **orden 4**, exacto para cúbicas.

**Extrapolación de Richardson.** Si un método tiene error $Ch^p + O(h^{p+2})$, combinando dos resultados con pasos $h$ y $h/2$ se elimina
el término principal: $\frac{2^pA(h/2) - A(h)}{2^p - 1}$. Para el trapecio ($p = 2$), $\frac{4T_{2n} - T_n}{3}$ es exactamente Simpson
$S_{2n}$; repitiéndolo se obtiene el método de **Romberg**.

**Cuadratura de Gauss.** Eligiendo también la **posición** de los nodos (las raíces de los polinomios de Legendre), $n$ puntos integran
exactamente polinomios de grado $2n - 1$: con dos puntos, $\int_{-1}^1 f \approx f(-1/\sqrt3) + f(1/\sqrt3)$ es exacta hasta grado 3.

**Ejemplo resuelto 3.** $\int_0^1 e^x\,dx = e - 1 \approx 1{,}718282$. Con $n = 4$: trapecio $\approx 1{,}727222$ (error $8{,}9\cdot10^{-3}$);
con $n = 8$: $\approx 1{,}720519$ (error $2{,}2\cdot10^{-3}$, la cuarta parte: orden 2). Simpson con $n = 4$: error $3{,}7\cdot10^{-5}$.

## 7. Sistemas lineales

**Eliminación gaussiana.** Se anulan los elementos bajo la diagonal fila a fila y se resuelve por sustitución regresiva; equivale a
factorizar $A = LU$ (triangular inferior por superior), cuesta unas $\frac23n^3$ operaciones, y una vez factorizada $A$ cada nuevo
término independiente cuesta solo $O(n^2)$.

**Pivoteo.** Si el pivote es pequeño, los multiplicadores son enormes y el redondeo destruye la solución. Con
$A = \begin{pmatrix} 10^{-20} & 1 \\ 1 & 1\end{pmatrix}$ y $\mathbf b = (1, 2)$, la solución es casi $(1, 1)$, pero sin pivoteo se obtiene
$x_1 = 0$. El **pivoteo parcial** (intercambiar filas para usar como pivote el mayor en valor absoluto de la columna) lo evita y hace la
eliminación estable en la práctica.

**Número de condición.** $\kappa(A) = \lVert A\rVert\,\lVert A^{-1}\rVert \ge 1$ acota la amplificación de errores:

$$
\frac{\lVert\delta\mathbf x\rVert}{\lVert\mathbf x\rVert} \le \kappa(A)\,\frac{\lVert\delta\mathbf b\rVert}{\lVert\mathbf b\rVert} .
$$

Con $\kappa \approx 10^k$ se pierden unas $k$ cifras. Una matriz casi singular tiene $\kappa$ enorme.

**Métodos iterativos.** Para sistemas grandes y dispersos (millones de incógnitas, casi todos los coeficientes nulos) no se factoriza:
se itera. **Jacobi** despeja cada incógnita de su ecuación usando los valores de la iteración anterior; **Gauss-Seidel** usa en cuanto
puede los ya actualizados, y suele converger el doble de rápido. Ambos convergen si la matriz es **estrictamente diagonal dominante**
($\lvert a_{ii}\rvert > \sum_{j\ne i}\lvert a_{ij}\rvert$).

**Mínimos cuadrados.** Si hay más ecuaciones que incógnitas ($A\mathbf x \approx \mathbf b$ sin solución exacta), se minimiza
$\lVert A\mathbf x - \mathbf b\rVert^2$; el mínimo cumple las **ecuaciones normales** $A^{\mathsf T}A\,\mathbf x = A^{\mathsf T}\mathbf b$. Para una
recta $y = mx + b$ por $n$ puntos dan $m = \frac{n\sum xy - \sum x\sum y}{n\sum x^2 - (\sum x)^2}$. Como $\kappa(A^{\mathsf T}A) = \kappa(A)^2$, en
problemas delicados se usa la factorización $QR$, que trabaja con $\kappa(A)$.

## 8. Comprobar con un programa

```python
import math
from fractions import Fraction

# Cancelación: raíz pequeña de x² - 1e8 x + 1 = 0.
b = 1e8
ingenua = (b - math.sqrt(b * b - 4)) / 2
estable = 1 / ((b + math.sqrt(b * b - 4)) / 2)         # producto de raíces = 1
referencia = 1e-8 + 1e-24                             # x ≈ 1/b + 1/b³
assert abs(ingenua - referencia) / referencia > 0.1     # más de un 10 % de error
assert abs(estable - referencia) / referencia < 1e-15

# Pivoteo: sin él, la solución sale destruida.
def gauss_sin_pivoteo(a11, a12, a21, a22, b1, b2):
    m = a21 / a11
    x2 = (b2 - m * b1) / (a22 - m * a12)
    return (b1 - a12 * x2) / a11, x2

x1, x2 = gauss_sin_pivoteo(1e-20, 1.0, 1.0, 1.0, 1.0, 2.0)
assert x1 == 0.0 and x2 == 1.0                        # x1 debería ser casi 1
x1p, x2p = gauss_sin_pivoteo(1.0, 1.0, 1e-20, 1.0, 2.0, 1.0)   # filas intercambiadas
assert abs(x1p - 1) < 1e-15 and abs(x2p - 1) < 1e-15

# Orden de los métodos de integración sobre ∫_0^1 e^x.
def trapecio(f, a, b, n):
    h = (b - a) / n
    return h * ((f(a) + f(b)) / 2 + sum(f(a + i * h) for i in range(1, n)))

err = lambda n: abs(trapecio(math.exp, 0, 1, n) - (math.e - 1))
assert 3.9 < err(16) / err(32) < 4.1                 # orden 2: el error se divide entre 4

# Newton para √2 con fracciones exactas: convergencia cuadrática.
x = Fraction(1)
for _ in range(5):
    x = x / 2 + 1 / x
assert abs(float(x) - math.sqrt(2)) < 1e-15
```

(La referencia sale de desarrollar en serie la raíz pequeña: $x = 2/(b + sqrt{b^2 - 4}) = 1/b + 1/b^3 + cdots$.)

## 9. Errores típicos

- Comparar números en coma flotante con `==`; usar una tolerancia relativa.
- Restar cantidades casi iguales sin reformular la expresión.
- Elegir $h$ «lo más pequeño posible» al derivar numéricamente.
- Aplicar Newton sin comprobar $f'(x_n) \ne 0$ ni limitar el número de iteraciones.
- Interpolar con un polinomio de grado alto en nodos equiespaciados (Runge).
- Eliminar sin pivoteo; invertir una matriz para resolver un sistema (más caro y menos preciso que factorizar).
- Confiar en la solución de un sistema sin mirar su número de condición; resolver mínimos cuadrados mal condicionados con las ecuaciones normales.

## 10. Resumen

- IEEE 754: $\varepsilon = 2^{-52}$, $u = 2^{-53}$, $\operatorname{fl}(x \circ y) = (x\circ y)(1 + \delta)$; cancelación; condicionamiento frente a estabilidad.
- Bisección: $\log_2((b - a)/\tau)$ pasos; Newton cuadrático con $C = f''/2f'$; secante, orden $1{,}618$.
- Interpolación única; error con $f^{(n+1)}$; Runge y nodos de Chebyshev.
- Diferencias: hacia delante $O(h)$, centrada $O(h^2)$, $h$ óptimo $\sim\varepsilon^{1/3}$.
- Trapecio $O(h^2)$, Simpson $O(h^4)$, Richardson y Romberg, Gauss exacta hasta grado $2n - 1$.
- Gauss con pivoteo ($\tfrac23n^3$), $\kappa(A)$, Jacobi y Gauss-Seidel, mínimos cuadrados y $QR$.

## Repaso: lo que debe quedarte dentro de un mes

1. Unas 16 cifras en doble precisión; restar números parecidos las destruye.
2. Problema mal condicionado frente a algoritmo inestable.
3. Newton duplica las cifras correctas en cada paso cerca de una raíz simple.
4. El orden de un método se mide dividiendo el paso entre 2 (errores $\div 2$, $\div 4$, $\div 16$).
5. Pivotear siempre; $\kappa \approx 10^k$ cuesta unas $k$ cifras.

## Siguiente

[[mat-algebra-lineal]] (álgebra lineal abstracta) y, en las ramas, optimización numérica, ecuaciones en derivadas parciales y
aprendizaje automático, que se apoyan en estos métodos.
