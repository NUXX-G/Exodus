---
id: mat-probabilidad
title: "Probabilidad"
area: matematicas
trunk_level: 3
prerequisites: [mat-analisis-real]
academic_sources:
  - "Feller, W. An Introduction to Probability Theory and Its Applications, Vol. 1, 3ª ed. Wiley, 1968."
  - "Durrett, R. Probability: Theory and Examples, 5ª ed. Cambridge University Press, 2019."
  - "Grimmett, G.; Stirzaker, D. Probability and Random Processes, 4ª ed. Oxford University Press, 2020."
  - "Kolmogorov, A. N. Foundations of the Theory of Probability, 2ª ed. en inglés. Chelsea, 1956."
  - "Norris, J. R. Markov Chains. Cambridge University Press, 1997."
ctf_flag: "sha256:245c59e7478edd222ffc5fa0232d4412134826a092d20fa27449cb93f74d4fc1"
hints:
  - "Los tres resultados son exactos: una simulación de Monte Carlo no los da. (a) La distribución de una suma de variables independientes es una convolución; añade los dados de uno en uno. (b) Define un estado por cada prefijo del patrón ya visto y escribe una ecuación lineal para la espera media desde cada estado; un fallo no siempre te devuelve al principio. (c) Calcula la probabilidad de que NO haya coincidencia como un producto."
  - "(a) Programación dinámica sobre la suma, con enteros: 10 pasadas sobre un array de 61 posiciones. (b) Resuelve el sistema con fractions.Fraction o sympy.linsolve, y contrástalo con el patrón HTH, cuya espera media es 10. (c) Usa enteros o fractions.Fraction para decidir la desigualdad sin error de redondeo; valida con N = 365, que da 23."
  - "Feller vol. 1, cap. XI (funciones generatrices) para (a), cap. XIII §7–8 (tiempos de recurrencia de patrones) para (b) y cap. II §3 para (c). Norris, §1.3 (probabilidades y tiempos medios de llegada). Documentación: docs.python.org/3/library/fractions.html."
---

# Probabilidad

La probabilidad es la parte del análisis que mide conjuntos de resultados. Sus tres axiomas
bastan para deducir desde el recuento de dados hasta los teoremas límite que justifican la
estadística, el aprendizaje automático y la mecánica estadística.

## 1. Espacios de probabilidad

Un **espacio de probabilidad** es una terna $(\Omega, \mathcal{F}, P)$: un conjunto de resultados
$\Omega$, una familia $\mathcal{F}$ de subconjuntos (los *sucesos*) cerrada por complementarios y
uniones numerables, y una función $P : \mathcal{F} \to [0, 1]$ que cumple los **axiomas de
Kolmogorov**:

1. $P(A) \ge 0$.
2. $P(\Omega) = 1$.
3. Si $A_1, A_2, \dots$ son disjuntos dos a dos, $P\bigl(\bigcup_i A_i\bigr) = \sum_i P(A_i)$.

De ellos se deduce $P(A^c) = 1 - P(A)$, la monotonía y
$P(A \cup B) = P(A) + P(B) - P(A \cap B)$, que se generaliza al principio de
inclusión-exclusión de [[mat-logica-demostraciones]]. Si $\Omega$ es finito y todos los
resultados son equiprobables, $P(A) = |A| / |\Omega|$ y la probabilidad se reduce a contar.

## 2. Condicionamiento e independencia

Para $P(B) > 0$, la **probabilidad condicionada** es $P(A \mid B) = P(A \cap B) / P(B)$.

**Teorema (probabilidad total y Bayes).** Si $B_1, \dots, B_n$ es una partición de $\Omega$ con
$P(B_i) > 0$,

$$
P(A) = \sum_{i} P(A \mid B_i)\, P(B_i), \qquad
P(B_j \mid A) = \frac{P(A \mid B_j)\, P(B_j)}{\sum_i P(A \mid B_i)\, P(B_i)} .
$$

> [!warning] La falacia de la tasa base
> Una prueba con 99 % de sensibilidad y 99 % de especificidad, aplicada a una enfermedad con
> prevalencia del 0,1 %, da $P(\text{enfermo} \mid +) = \frac{0{,}99 \cdot 0{,}001}{0{,}99 \cdot
> 0{,}001 + 0{,}01 \cdot 0{,}999} \approx 9\,\%$. Ignorar $P(B_j)$ es el error más frecuente al
> interpretar un clasificador o una alerta de seguridad.

$A$ y $B$ son **independientes** si $P(A \cap B) = P(A)P(B)$. Para más de dos sucesos se exige
la factorización de toda subfamilia: la independencia dos a dos no basta.

## 3. Variables aleatorias y esperanza

Una **variable aleatoria** es una función medible $X : \Omega \to \mathbb{R}$. Su **esperanza**,
en el caso discreto, es $E[X] = \sum_x x\, P(X = x)$.

**Teorema (linealidad).** $E[aX + bY] = aE[X] + bE[Y]$, **sean o no independientes** $X$ e $Y$.

Es la herramienta más rentable de la probabilidad. *Ejemplo:* el número esperado de puntos fijos
de una permutación aleatoria de $n$ elementos es $\sum_{i=1}^n P(\sigma(i) = i) = n \cdot
\frac1n = 1$, sin calcular la distribución.

La **varianza** es $\operatorname{Var}(X) = E[(X - E[X])^2] = E[X^2] - E[X]^2$. Si $X$ e $Y$ son
independientes, $E[XY] = E[X]E[Y]$ y $\operatorname{Var}(X + Y) = \operatorname{Var}(X) +
\operatorname{Var}(Y)$.

**Suma de independientes.** Si $X$ e $Y$ son independientes con valores enteros,

$$
P(X + Y = s) = \sum_{k} P(X = k)\, P(Y = s - k),
$$

la **convolución** de sus distribuciones. Equivale a multiplicar funciones generatrices
$G_X(z) = E[z^X]$: para un dado, $G(z) = \frac16(z + z^2 + \dots + z^6)$, y la suma de $n$ dados
tiene función generatriz $G(z)^n$. Valor de control: con 2 dados hay 6 resultados de suma 7.

## 4. Desigualdades y teoremas límite

**Teorema (Markov).** Si $X \ge 0$ y $a > 0$, $P(X \ge a) \le E[X]/a$.

*Demostración.* $E[X] \ge E[X \cdot \mathbf{1}_{X \ge a}] \ge a\, P(X \ge a)$. $\blacksquare$

**Corolario (Chebyshev).** $P(|X - \mu| \ge k) \le \operatorname{Var}(X) / k^2$, aplicando
Markov a $(X - \mu)^2$.

**Teorema (ley débil de los grandes números).** Si $X_1, X_2, \dots$ son independientes, con la
misma distribución, media $\mu$ y varianza $\sigma^2 < \infty$, entonces para todo
$\varepsilon > 0$

$$
P\!\left( \left| \frac{X_1 + \dots + X_n}{n} - \mu \right| \ge \varepsilon \right)
\le \frac{\sigma^2}{n \varepsilon^2} \xrightarrow[n \to \infty]{} 0 .
$$

*Demostración.* La media muestral tiene esperanza $\mu$ y varianza $\sigma^2/n$; se aplica
Chebyshev. $\blacksquare$

**Teorema central del límite.** En las mismas hipótesis,

$$
\frac{X_1 + \dots + X_n - n\mu}{\sigma \sqrt{n}} \;\xrightarrow{\;d\;}\; \mathcal{N}(0, 1).
$$

La ley de los grandes números dice que el promedio converge; el teorema central dice **a qué
velocidad**: el error es del orden de $\sigma / \sqrt{n}$. Por eso un método de Monte Carlo
necesita 100 veces más muestras para ganar una cifra decimal, y por eso no sirve para el reto de
este nodo.

## 5. Cadenas de Markov y tiempos de espera

Una **cadena de Markov** es una sucesión $X_0, X_1, \dots$ en la que el futuro depende del pasado
solo a través del presente:
$P(X_{n+1} = j \mid X_n = i, \dots) = p_{ij}$.

**Teorema (tiempo medio de llegada).** Sea $h_i$ el número esperado de pasos hasta alcanzar por
primera vez un conjunto de estados $A$ partiendo de $i$. Entonces $h_i = 0$ para $i \in A$ y

$$
h_i = 1 + \sum_{j} p_{ij}\, h_j \qquad (i \notin A).
$$

*Demostración.* Se condiciona sobre el primer paso y se usa la propiedad de Markov.
$\blacksquare$

Es un sistema lineal, resoluble con la eliminación exacta de [[mat-algebra-lineal]].

*Ejemplo: esperar el patrón HTH al lanzar una moneda.* Los estados son el prefijo más largo del
patrón que coincide con el final de lo lanzado: $\varnothing$, H, HT, HTH. Desde HT, una cruz
devuelve a $\varnothing$, pero desde H una cara **mantiene** el estado H. Resolviendo,
$h_\varnothing = 10$, mientras que para HHH es $14$ y para HTT es $8$: patrones igual de
probables tienen esperas distintas, porque se solapan consigo mismos de forma diferente.

## 6. Coincidencias

Se eligen $n$ valores independientes y uniformes entre $N$ posibles. La probabilidad de que sean
todos distintos es

$$
P(\text{sin coincidencia}) = \prod_{k=0}^{n-1} \left(1 - \frac{k}{N}\right)
\approx \exp\!\left(-\frac{n(n-1)}{2N}\right),
$$

usando $1 - x \approx e^{-x}$. La coincidencia se vuelve probable cuando
$n \approx \sqrt{2N \ln 2} \approx 1{,}18\sqrt{N}$: es la **paradoja del cumpleaños** ($N = 365$
da $n = 23$). Por eso una función hash de $b$ bits ofrece solo $b/2$ bits de resistencia a
colisiones ([[sec-criptografia]]).

## Ejercicios de demostración

1. Demuestra que si $A$ y $B$ son independientes, también lo son $A$ y $B^c$.
2. Da tres sucesos independientes dos a dos que no sean mutuamente independientes.
3. Demuestra que $\operatorname{Var}(X) = E[X^2] - E[X]^2$ y que $\operatorname{Var}(aX + b) = a^2 \operatorname{Var}(X)$.
4. Demuestra que una variable geométrica de parámetro $p$ tiene esperanza $1/p$.

## Reto

Calcula tres enteros exactos.

- **a.** El número de resultados, de los $6^{10}$ posibles al lanzar 10 dados distinguibles, cuya
  suma es exactamente 35.
- **b.** El número esperado de lanzamientos de una moneda equilibrada hasta que aparece por
  primera vez el patrón `HTHHTHTHHTHH` (es un entero).
- **c.** El menor $n$ tal que, eligiendo $n$ valores independientes y uniformes entre
  $N = 10^6$ posibles, la probabilidad de que al menos dos coincidan supera $\frac12$.

Formato de la flag, en decimal: `EXODUS{a-b-c}`
