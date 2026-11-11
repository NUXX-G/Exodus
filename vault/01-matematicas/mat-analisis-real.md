---
id: mat-analisis-real
title: "Análisis real"
area: matematicas
trunk_level: 2
prerequisites: [mat-logica-demostraciones]
academic_sources:
  - "Rudin, W. Principles of Mathematical Analysis, 3ª ed. McGraw-Hill, 1976."
  - "Spivak, M. Calculus, 4ª ed. Publish or Perish, 2008."
  - "Abbott, S. Understanding Analysis, 2ª ed. Springer, 2015."
  - "Graham, R. L.; Knuth, D. E.; Patashnik, O. Concrete Mathematics, 2ª ed. Addison-Wesley, 1994. Cap. 9."
ctf_flag: "sha256:1592b9e69ae0a589f87baf46b443cf53f1b61d2cb4d4d0826239164499fa0e18"
hints:
  - "Sumar términos hasta que «dejen de cambiar» no demuestra nada: el error de truncar una serie es su cola, y hay que acotarla. Para una f decreciente, la cola está atrapada entre dos integrales. En (a), ¿cuántos términos harían falta sumando a ciegas para 12 decimales? En (b), la suma parcial crece como un logaritmo."
  - "Para (a): suma los primeros N términos con aritmética exacta o de precisión arbitraria (fractions.Fraction, decimal con prec=40, o mpmath) y añade la estimación integral de la cola; mpmath.zeta(3) sirve para contrastar. Para (b): estima N con H_N ≈ ln N + γ y confirma el valor exacto alrededor de la estimación; un bucle en C con double y suma compensada también llega."
  - "Rudin, teoremas 3.25–3.29 (criterios de convergencia) y Spivak, cap. 23. Fórmula de Euler-Maclaurin en Concrete Mathematics, §9.5–9.6. Documentación de mpmath: mpmath.org/doc/current/. Sucesión A002387 en la OEIS para contrastar el método de (b) en casos pequeños."
---

# Análisis real

El cálculo funciona porque los números reales no tienen huecos. Este nodo hace precisa esa idea
y deriva de ella los teoremas que justifican límites, derivadas, integrales y, sobre todo, las
**cotas de error** que convierten un cálculo numérico en una afirmación demostrada.

## 1. Los reales: cuerpo ordenado completo

$\mathbb{Q}$ es un cuerpo ordenado, pero el conjunto $\{q \in \mathbb{Q} : q^2 < 2\}$ está
acotado superiormente y no tiene supremo racional. Lo que distingue a $\mathbb{R}$ es un único
axioma adicional.

**Axioma de completitud.** Todo subconjunto no vacío de $\mathbb{R}$ acotado superiormente tiene
supremo (mínima cota superior).

**Teorema (propiedad arquimediana).** Para todo $x \in \mathbb{R}$ existe $n \in \mathbb{N}$ con
$n > x$.

*Demostración.* Si no, $\mathbb{N}$ estaría acotado y tendría supremo $s$. Entonces $s - 1$ no
es cota superior: existe $n$ con $n > s - 1$, luego $n + 1 > s$, contradicción. $\blacksquare$

## 2. Sucesiones

$(a_n)$ **converge** a $L$ si

$$
\forall \varepsilon > 0 \;\, \exists N \;\, \forall n \ge N : \; |a_n - L| < \varepsilon .
$$

**Teorema (convergencia monótona).** Toda sucesión creciente y acotada superiormente converge a
su supremo.

*Demostración.* Sea $s = \sup\{a_n\}$. Dado $\varepsilon > 0$, $s - \varepsilon$ no es cota
superior, luego existe $N$ con $a_N > s - \varepsilon$; para $n \ge N$,
$s - \varepsilon < a_N \le a_n \le s$. $\blacksquare$

**Teorema (Bolzano-Weierstrass).** Toda sucesión acotada tiene una subsucesión convergente.

Una sucesión es **de Cauchy** si sus términos se acercan entre sí:
$\forall \varepsilon\, \exists N\, \forall m, n \ge N : |a_m - a_n| < \varepsilon$. En
$\mathbb{R}$, *ser de Cauchy equivale a converger*: es otra forma de enunciar la completitud, y
la que permite probar convergencia sin conocer el límite.

## 3. Series

$\sum a_n$ converge si lo hace la sucesión de sumas parciales $S_N = \sum_{n=1}^{N} a_n$.
Condición necesaria: $a_n \to 0$. No es suficiente:

**Teorema.** La serie armónica $\sum \frac{1}{n}$ diverge.

*Demostración (Oresme).* Agrupando en bloques de longitud $2^k$,
$\frac{1}{2^k + 1} + \dots + \frac{1}{2^{k+1}} > 2^k \cdot \frac{1}{2^{k+1}} = \frac12$, de modo
que $S_{2^m} > 1 + \frac{m}{2}$. $\blacksquare$

**Teorema (criterio integral con cota de error).** Sea $f : [1, \infty) \to \mathbb{R}$ positiva
y decreciente. Entonces $\sum f(n)$ converge si y solo si $\int_1^\infty f$ converge y, en ese
caso, la cola $R_N = \sum_{n > N} f(n)$ cumple

$$
\int_{N+1}^{\infty} f(x)\,dx \;\le\; R_N \;\le\; \int_{N}^{\infty} f(x)\,dx .
$$

*Demostración.* Por ser $f$ decreciente, $f(n+1) \le \int_n^{n+1} f \le f(n)$. Sumando sobre
$n \ge N$ y sobre $n \ge N + 1$ se obtienen las dos desigualdades. $\blacksquare$

Para $f(x) = x^{-s}$ con $s > 1$: $\frac{(N+1)^{1-s}}{s-1} \le R_N \le \frac{N^{1-s}}{s-1}$. La
suma parcial de $\sum 1/n^2$ con $N = 1000$ tiene un error cercano a $10^{-3}$; pero **el punto
medio de las dos cotas** estima la cola con un error mucho menor que cualquiera de ellas. Acotar
la cola y sumarla es lo que se llama *acelerar la convergencia*.

La misma comparación aplicada a $f(x) = 1/x$ da el crecimiento de la serie armónica:

$$
H_N = \sum_{n=1}^{N} \frac1n = \ln N + \gamma + \frac{1}{2N} - \frac{1}{12N^2} + O\!\left(N^{-4}\right),
\qquad \gamma = 0{,}5772156649\ldots
$$

donde $\gamma$ es la constante de Euler-Mascheroni y los términos correctores provienen de la
fórmula de Euler-Maclaurin.

## 4. Continuidad

$f$ es continua en $a$ si $\forall \varepsilon > 0\; \exists \delta > 0 : |x - a| < \delta
\Rightarrow |f(x) - f(a)| < \varepsilon$.

**Teorema (valores intermedios).** Si $f$ es continua en $[a, b]$ y $f(a) < 0 < f(b)$, existe
$c \in (a, b)$ con $f(c) = 0$.

*Demostración.* Sea $c = \sup\{x \in [a,b] : f(x) < 0\}$, que existe por completitud. Si
$f(c) < 0$, por continuidad $f < 0$ en un entorno a la derecha de $c$, y $c$ no sería cota
superior. Si $f(c) > 0$, $f > 0$ en un entorno a la izquierda, y $c$ no sería la *mínima* cota.
Luego $f(c) = 0$. $\blacksquare$

La demostración es el algoritmo de **bisección**: cada paso divide a la mitad el intervalo que
contiene la raíz, y tras $k$ pasos el error es a lo sumo $(b - a)/2^k$.

**Teorema (Weierstrass).** Una función continua en un intervalo cerrado y acotado alcanza su
máximo y su mínimo.

## 5. Derivada e integral

$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$.

**Teorema del valor medio.** Si $f$ es continua en $[a, b]$ y derivable en $(a, b)$, existe
$c \in (a, b)$ con $f(b) - f(a) = f'(c)(b - a)$.

**Teorema de Taylor (resto de Lagrange).** Si $f$ tiene $n + 1$ derivadas en un intervalo que
contiene a $a$ y $x$, existe $\xi$ entre ambos tal que

$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x - a)^k + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - a)^{n+1}.
$$

El último término es una **cota de error explícita**, la herramienta central del análisis
numérico.

**Teorema fundamental del cálculo.** Si $f$ es continua en $[a, b]$ y
$F(x) = \int_a^x f$, entonces $F' = f$; y si $G' = f$, entonces $\int_a^b f = G(b) - G(a)$.

## 6. Convergencia uniforme

$f_n \to f$ **uniformemente** en $D$ si $\sup_{x \in D} |f_n(x) - f(x)| \to 0$. Es estrictamente
más fuerte que la convergencia punto a punto: $f_n(x) = x^n$ converge en $[0, 1]$ a una función
discontinua, y cada $f_n$ es continua.

**Teorema.** El límite uniforme de funciones continuas es continuo, y bajo convergencia uniforme
en $[a, b]$ se puede intercambiar límite e integral.

Es lo que legitima derivar e integrar término a término las series de potencias dentro de su
radio de convergencia.

## Ejercicios de demostración

1. Demuestra que el límite de una sucesión convergente es único.
2. Demuestra que toda sucesión convergente es de Cauchy.
3. Demuestra que $\sum 1/n^p$ converge si y solo si $p > 1$.
4. Demuestra, con $\varepsilon$ y $\delta$, que $f(x) = x^2$ es continua en todo $a \in \mathbb{R}$.

## Reto

Calcula dos enteros. En ambos, un resultado sin cota de error demostrada no es un resultado.

- **a.** $\left\lfloor 10^{12} \cdot \zeta(3) \right\rfloor$, donde
  $\zeta(3) = \sum_{n=1}^{\infty} \frac{1}{n^3}$. Valor de control:
  $\lfloor 10^{6} \cdot \zeta(3) \rfloor = 1202056$.
- **b.** El menor entero $N$ tal que $H_N = \sum_{n=1}^{N} \frac1n > 20$. Valor de control: el
  menor $N$ con $H_N > 10$ es $12367$.

Formato de la flag, en decimal: `EXODUS{a-b}`
