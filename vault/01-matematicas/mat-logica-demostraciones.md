---
id: mat-logica-demostraciones
title: "Lógica, conjuntos y demostración"
area: matematicas
trunk_level: 1
prerequisites: []
academic_sources:
  - "Velleman, D. J. How to Prove It: A Structured Approach, 3ª ed. Cambridge University Press, 2019."
  - "Halmos, P. R. Naive Set Theory. Van Nostrand, 1960."
  - "Enderton, H. B. A Mathematical Introduction to Logic, 2ª ed. Academic Press, 2001."
  - "Graham, R. L.; Knuth, D. E.; Patashnik, O. Concrete Mathematics, 2ª ed. Addison-Wesley, 1994."
ctf_flag: "sha256:5074242c1f1877b75304a40239bca5283b6a205f92bbdc70dced9f833b2d6683"
hints:
  - "Ninguno de los tres apartados exige enumerar a mano. (a) Clasifica las asignaciones válidas según el valor de la última variable y busca una recurrencia. (b) Cuenta lo contrario: funciones que NO alcanzan algún elemento, con inclusión-exclusión. (c) Una relación de equivalencia y una partición son el mismo objeto."
  - "Verifica cada fórmula con fuerza bruta en un caso pequeño antes de fiarte: en Python, itertools.product([0, 1], repeat=n) recorre asignaciones e itertools.product(range(4), repeat=k) recorre funciones. Para (c), la recurrencia B(n+1) = Σ C(n, k)·B(k) se programa en cinco líneas con math.comb."
  - "Velleman, §6.1–6.4 (inducción y recursión) y §4.5–4.6 (relaciones de equivalencia y particiones). Concrete Mathematics, §6.1 (números de Stirling de segunda clase) para (b) y (c). Documentación de itertools: docs.python.org/3/library/itertools.html."
---

# Lógica, conjuntos y demostración

Una demostración es una cadena finita de afirmaciones en la que cada una es un axioma, una
hipótesis o consecuencia lógica de las anteriores. Este nodo fija el lenguaje en el que se
escribe toda la matemática posterior y las técnicas con las que se construyen esas cadenas.

## 1. Lógica proposicional

Una **proposición** es una afirmación con valor de verdad definido. Los conectivos se definen por
su tabla de verdad; el único que suele dar problemas es la implicación:

| $P$ | $Q$ | $P \land Q$ | $P \lor Q$ | $P \Rightarrow Q$ | $P \Leftrightarrow Q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | V | V |
| V | F | F | V | F | F |
| F | V | F | V | V | F |
| F | F | F | F | V | V |

$P \Rightarrow Q$ solo es falsa cuando $P$ es verdadera y $Q$ falsa: de una hipótesis falsa se
sigue cualquier cosa (*verdad vacua*). Dos fórmulas son **equivalentes** ($\equiv$) si coinciden
en todas las filas. Las equivalencias que se usan a diario:

$$
\begin{aligned}
P \Rightarrow Q &\equiv \lnot P \lor Q &&\text{(implicación material)}\\
P \Rightarrow Q &\equiv \lnot Q \Rightarrow \lnot P &&\text{(contrarrecíproco)}\\
\lnot (P \land Q) &\equiv \lnot P \lor \lnot Q, \quad \lnot (P \lor Q) \equiv \lnot P \land \lnot Q &&\text{(De Morgan)}\\
\lnot (P \Rightarrow Q) &\equiv P \land \lnot Q
\end{aligned}
$$

> [!warning] El recíproco no es el contrarrecíproco
> $Q \Rightarrow P$ (recíproco) **no** equivale a $P \Rightarrow Q$. Confundirlos es el error
> lógico más frecuente: «si llueve, el suelo está mojado» no implica «si el suelo está mojado, llueve».

Con $n$ variables hay $2^n$ asignaciones y, por tanto, $2^{2^n}$ funciones booleanas distintas.

## 2. Predicados y cuantificadores

Un **predicado** $P(x)$ se convierte en proposición al fijar $x$ o al cuantificarlo:
$\forall x\, P(x)$ («para todo») y $\exists x\, P(x)$ («existe»). Negar intercambia los
cuantificadores:

$$
\lnot\,\forall x\, P(x) \equiv \exists x\, \lnot P(x), \qquad
\lnot\,\exists x\, P(x) \equiv \forall x\, \lnot P(x).
$$

El orden importa. En $\mathbb{R}$, $\forall x\, \exists y\, (y > x)$ es verdadera (dado $x$,
tómese $y = x + 1$), mientras que $\exists y\, \forall x\, (y > x)$ es falsa (no hay un real
mayor que todos). La definición de límite es un ejercicio de cuantificadores anidados:

$$
\lim_{x \to a} f(x) = L \iff \forall \varepsilon > 0\;\, \exists \delta > 0\;\, \forall x\;
\bigl(0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon\bigr).
$$

## 3. Técnicas de demostración

**Directa.** Para probar $P \Rightarrow Q$ se supone $P$ y se deduce $Q$.

**Contrarrecíproco.** Se prueba $\lnot Q \Rightarrow \lnot P$. *Ejemplo:* si $n^2$ es par,
entonces $n$ es par. Supóngase $n$ impar, $n = 2k + 1$; entonces
$n^2 = 2(2k^2 + 2k) + 1$ es impar. $\blacksquare$

**Reducción al absurdo.** Se supone $\lnot P$ y se llega a una contradicción.

**Teorema.** $\sqrt{2}$ es irracional.

*Demostración.* Supóngase $\sqrt 2 = p/q$ con $p, q$ enteros sin factores comunes. Entonces
$p^2 = 2q^2$, luego $p^2$ es par y, por el ejemplo anterior, $p = 2r$. Sustituyendo,
$q^2 = 2r^2$, así que $q$ también es par: contradicción con que no tuvieran factores comunes.
$\blacksquare$

**Inducción.** Para probar $\forall n \ge n_0\; P(n)$ basta probar el caso base $P(n_0)$ y el
paso $P(n) \Rightarrow P(n+1)$. Su validez equivale al *principio de buena ordenación*: todo
subconjunto no vacío de $\mathbb{N}$ tiene mínimo. (Si $P$ fallara, habría un mínimo
contraejemplo $m > n_0$; pero $P(m-1)$ es cierta y el paso inductivo da $P(m)$.)

*Ejemplo.* $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$. Base $n = 1$: $1 = 1$. Paso:
$\sum_{k=1}^{n+1} k = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2}$. $\blacksquare$

En la **inducción fuerte** la hipótesis es $P(k)$ para todo $n_0 \le k \le n$. Es la forma
natural cuando el caso $n + 1$ depende de varios casos anteriores, como en las recurrencias.

## 4. Conjuntos, relaciones y funciones

Un conjunto queda determinado por sus elementos (*extensionalidad*): $A = B$ si y solo si
$A \subseteq B$ y $B \subseteq A$. Así se demuestra toda igualdad de conjuntos. El conjunto de
partes $\mathcal{P}(A)$ tiene $2^{|A|}$ elementos cuando $A$ es finito.

Una **relación** en $A$ es un subconjunto $R \subseteq A \times A$. Es de **equivalencia** si es
reflexiva, simétrica y transitiva. La clase de $a$ es $[a] = \{x \in A : x \mathrel{R} a\}$.

**Teorema.** Las clases de una relación de equivalencia en $A$ forman una partición de $A$, y
toda partición de $A$ proviene de exactamente una relación de equivalencia.

*Demostración.* Cada $a$ está en $[a]$ por reflexividad, luego las clases cubren $A$. Si
$[a] \cap [b] \neq \varnothing$, tómese $c$ en ambas: $a \mathrel{R} c$ y $c \mathrel{R} b$ dan
$a \mathrel{R} b$ por simetría y transitividad, y de ahí $[a] = [b]$. Recíprocamente, dada una
partición, «estar en el mismo bloque» es reflexiva, simétrica y transitiva, y sus clases son los
bloques. $\blacksquare$

Este es el mecanismo con el que se construyeron los enteros módulo $m$ en [[nodo-ejemplo]].

Una **función** $f : A \to B$ es **inyectiva** si $f(x) = f(y) \Rightarrow x = y$,
**sobreyectiva** si todo $b \in B$ es imagen de algún $a$, y **biyectiva** si es ambas. Dos
conjuntos tienen el mismo **cardinal** si existe una biyección entre ellos.

**Teorema (Cantor).** Para todo conjunto $A$ no existe ninguna sobreyección $f : A \to \mathcal{P}(A)$.

*Demostración.* Dada $f$, sea $D = \{a \in A : a \notin f(a)\}$. Si $D = f(d)$ para algún $d$,
entonces $d \in D \iff d \notin f(d) = D$: contradicción. Luego $D$ no está en la imagen.
$\blacksquare$

Consecuencia: hay infinitos de distintos tamaños, y $\mathbb{R}$ (que biyecta con
$\mathcal{P}(\mathbb{N})$) no es numerable.

## 5. Contar es demostrar

Para conjuntos finitos $A_1, \dots, A_n$, el **principio de inclusión-exclusión** afirma

$$
\Bigl|\bigcup_{i=1}^{n} A_i\Bigr| = \sum_{\varnothing \neq S \subseteq \{1,\dots,n\}} (-1)^{|S|+1}\, \Bigl|\bigcap_{i \in S} A_i\Bigr| .
$$

*Demostración.* Un elemento que pertenece a exactamente $m \ge 1$ de los conjuntos se cuenta
$\sum_{j=1}^{m} (-1)^{j+1}\binom{m}{j} = 1 - (1 - 1)^m = 1$ vez. $\blacksquare$

## Ejercicios de demostración

Sin flag: escríbelos completos y contrástalos con la bibliografía.

1. Demuestra por inducción que $\sum_{k=1}^{n} k^3 = \bigl(\frac{n(n+1)}{2}\bigr)^2$.
2. Demuestra que hay infinitos números primos (absurdo).
3. Demuestra que la composición de dos inyecciones es inyectiva y la de dos sobreyecciones, sobreyectiva.
4. Demuestra que $\mathbb{Q}$ es numerable construyendo una sobreyección $\mathbb{N} \to \mathbb{Q}$.

## Reto

Calcula tres enteros. Cada uno se obtiene razonando; programar solo sirve para comprobar.

- **a.** Número de asignaciones de verdad de $x_1, \dots, x_{12}$ que satisfacen
  $$\varphi = \bigwedge_{i=1}^{11} (x_i \lor x_{i+1}).$$
- **b.** Número de funciones sobreyectivas de un conjunto de 10 elementos en uno de 4.
- **c.** Número de relaciones de equivalencia distintas en un conjunto de 9 elementos.

Formato de la flag, en decimal y sin separadores de millares: `EXODUS{a-b-c}`
