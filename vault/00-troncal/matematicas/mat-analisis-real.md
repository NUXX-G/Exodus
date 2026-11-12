---
id: mat-analisis-real
title: "Análisis real: completitud, sucesiones, series, continuidad, derivada, integral y convergencia uniforme"
area: matematicas
trunk_level: 10
prerequisites: [mat-logica-demostraciones, mat-calculo-2]
academic_sources:
  - "Abbott, S. Understanding Analysis, 2ª ed. Springer (Undergraduate Texts in Mathematics), 2015."
  - "Tao, T. Analysis I, 3ª ed. Hindustan Book Agency / Springer (Texts and Readings in Mathematics, 37), 2016."
  - "Spivak, M. Calculus, 4ª ed. Publish or Perish, 2008."
  - "Graham, R. L.; Knuth, D. E.; Patashnik, O. Concrete Mathematics, 2ª ed. Addison-Wesley, 1994 (fórmula de Euler-Maclaurin)."
ctf_flag: "sha256:1592b9e69ae0a589f87baf46b443cf53f1b61d2cb4d4d0826239164499fa0e18"
hints:
  - "Sumar términos hasta que «dejen de cambiar» no demuestra nada: el error de truncar una serie es su cola, y hay que acotarla. Para una f decreciente, la cola está atrapada entre dos integrales. En (a), ¿cuántos términos harían falta sumando a ciegas para 12 decimales? En (b), la suma parcial crece como un logaritmo."
  - "Para (a): suma los primeros N términos con aritmética exacta o de precisión arbitraria (fractions.Fraction, decimal con prec=40, o mpmath) y añade la estimación integral de la cola; mpmath.zeta(3) sirve para contrastar. Para (b): estima N con H_N ≈ ln N + γ y confirma el valor exacto alrededor de la estimación; un bucle con double y suma compensada (Kahan) también llega."
  - "Abbott, capítulos de sucesiones y series; Spivak, capítulo de series infinitas. Fórmula de Euler-Maclaurin en Concrete Mathematics (capítulo de asintótica). Documentación de mpmath: mpmath.org/doc/current/. Sucesión A002387 en la OEIS para contrastar el método de (b) en casos pequeños."
exercises:
  - id: supremo-e-infimo
    tier: 1
    prompt: |
      Sea $A = \{1 - \tfrac1n : n \ge 1 \text{ entero}\}$. ¿Cuánto valen $\inf A$ y $\sup A$? Respuesta: `inf;sup`.
    answers: ["sha256:c339ed9e47b6b2640c714057eaf0902da6b31e55b805599aed8d7110a6539280"]
  - id: epsilon-n
    tier: 1
    prompt: |
      Para $a_n = 1/n^2$ y $\varepsilon = 10^{-3}$, ¿cuál es el menor $N$ tal que $\lvert a_n\rvert < \varepsilon$ para todo $n \ge N$? Respuesta: un entero.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: limite-con-raices
    tier: 1
    prompt: |
      Calcula $\displaystyle\lim_{n\to\infty} n\left(\sqrt{n^2 + 1} - n\right)$ (multiplica y divide por el conjugado). Respuesta: una fracción `a/b`.
    answers: ["sha256:d939926f05444b0f4495fb9629ecbfa80d99a8ec1a20d06800ca5a3d5f4fd276"]
  - id: serie-geometrica
    tier: 1
    prompt: |
      Calcula $\displaystyle\sum_{n=0}^{\infty}\left(\tfrac23\right)^n$. Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: criterio-del-cociente
    tier: 2
    prompt: |
      La serie $\sum_{n\ge1} n^2/2^n$ converge por el criterio del cociente. Calcula su suma (usa $\sum n^2x^n = \frac{x(1 + x)}{(1 - x)^3}$ para $\lvert x\rvert < 1$). Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: error-de-una-serie-alternada
    tier: 2
    prompt: |
      Para la serie alternada $\sum_{n\ge1}(-1)^{n+1}/n^2$, el error al truncar tras $N$ términos es menor que el primer término omitido, $1/(N + 1)^2$. ¿Cuál es el menor $N$ que garantiza así un error menor que $10^{-4}$? Respuesta: un entero.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: serie-telescopica
    tier: 2
    prompt: |
      Calcula $\displaystyle\sum_{n=1}^{99}\frac{1}{n(n + 1)}$. Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:adda290c53eda62a0d8f44a131302a84651364227fcc02f7ed70159e8fc5f6ba"]
  - id: limites-superior-e-inferior
    tier: 2
    prompt: |
      Para $a_n = (-1)^n\left(1 + \tfrac1n\right)$, ¿cuánto valen $\liminf a_n$ y $\limsup a_n$? Respuesta: `liminf;limsup`.
    answers: ["sha256:0fb6cfb21a559369b7285fab68096966b9835b190c99b3918a5b808aca6f04b7"]
  - id: punto-fijo-contractivo
    tier: 2
    prompt: |
      La iteración $x_{n+1} = \cos x_n$ en $[0, 1]$ es contractiva con constante $L = \sin 1$. Con $x_0 = 1$ y la cota a priori $\lvert x_n - x^*\rvert \le \frac{L^n}{1 - L}\lvert x_1 - x_0\rvert$, ¿cuál es el menor $n$ que garantiza un error menor que $10^{-6}$? Respuesta: un entero.
    answers: ["sha256:bdd2d3af3a5a1213497d4f1f7bfcda898274fe9cb5401bbc0190885664708fc2"]
  - id: continuidad-uniforme
    tier: 2
    prompt: |
      Para $f(x) = x^2$ en $[0, 2]$ y $\varepsilon = 0{,}01$, usando $\lvert x^2 - y^2\rvert \le 4\lvert x - y\rvert$, ¿qué $\delta$ (el mayor que da ese argumento) garantiza $\lvert f(x) - f(y)\rvert < \varepsilon$ si $\lvert x - y\rvert < \delta$? Respuesta: un número.
    answers: ["sha256:03631d4380d280e3793f9f1b51e5757798c9cc28c719f151ecc4fce19a67559e"]
  - id: resto-de-taylor
    tier: 3
    prompt: |
      Se aproxima $e$ con el polinomio de Taylor de $e^x$ en $0$ de grado $n$. El resto de Lagrange cumple $\lvert R_n\rvert \le \frac{3}{(n + 1)!}$ (pues $e < 3$). ¿Cuál es el menor $n$ con esa cota por debajo de $10^{-10}$? Respuesta: un entero.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: sumas-superiores-e-inferiores
    tier: 3
    prompt: |
      Para $f(x) = x^2$ en $[0, 1]$ con una partición en $n$ subintervalos iguales, la suma superior menos la inferior vale exactamente $\frac{f(1) - f(0)}{n}$ ($f$ es creciente). ¿Cuál es el menor $n$ con diferencia menor que $10^{-3}$? Respuesta: un entero.
    answers: ["sha256:fe675fe7aaee830b6fed09b64e034f84dcbdaeb429d9cccd4ebb90e15af8dd71"]
  - id: acotar-la-cola-con-integrales
    tier: 3
    prompt: |
      Con $S_{100} = \sum_{n=1}^{100}\frac1{n^2}$ y el criterio de la integral, $S_{100} + \frac1{101} < \zeta(2) < S_{100} + \frac1{100}$. Calcula $\lfloor 10^4(S_{100} + \tfrac1{101})\rfloor$ y $\lfloor 10^4(S_{100} + \tfrac1{100})\rfloor$. (Si coincidieran, tendrías 4 decimales de $\zeta(2)$ garantizados; si no, hace falta una cota más fina, como la de Euler-Maclaurin.) Respuesta: los dos enteros separados por `;`.
    answers: ["sha256:f0e979a7a2d506a476c327d14ca4ef3a422bdc766d87f2c8513893f49adfbe46"]
  - id: convergencia-uniforme
    tier: 3
    prompt: |
      Las funciones $f_n(x) = x^n$ convergen uniformemente a $0$ en $[0, \tfrac12]$ (no en $[0, 1)$). ¿Cuál es el menor $n$ con $\sup_{[0, 1/2]}\lvert f_n\rvert < 10^{-3}$? Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: radio-de-convergencia
    tier: 3
    prompt: |
      ¿Cuál es el radio de convergencia de $\sum_{n\ge1}\frac{n!}{n^n}x^n$? Respuesta: un número con **3 decimales**.
    answers: ["sha256:48587d28518aa9e93fcf1d78f0baa69fa5de133b6907146f4c2dba39ed97b568"]
  - id: raiz-por-bolzano
    tier: 3
    prompt: |
      $f(x) = x^3 - 2x - 5$ cambia de signo en $[2, 3]$, así que (Bolzano) tiene una raíz ahí. Calcúlala. Respuesta: con **5 decimales**.
    answers: ["sha256:cf4a6cc1de6b5e8782a2e5cded9eb58f986c1683370db70b2bbf4eb560b40115"]
---

# Análisis real: completitud, sucesiones, series, continuidad, derivada, integral y convergencia uniforme

El cálculo funciona porque los números reales no tienen huecos. [[mat-calculo-1]] y [[mat-calculo-2]] usaron límites, derivadas e integrales
con la intuición por delante; el **análisis real** los define con precisión ($\varepsilon$ y $\delta$) y **demuestra** por qué funcionan. Eso no es
un lujo: es lo que permite saber cuándo se puede intercambiar un límite con una integral, por qué un algoritmo numérico converge y, sobre todo,
dar **cotas de error** que convierten un cálculo aproximado en una afirmación demostrada. Es la puerta de entrada a la matemática de grado
superior (topología, medida, análisis funcional) y el lenguaje riguroso de la física y de la teoría del aprendizaje.

## Objetivos

Al terminar sabrás:

1. Usar el axioma de completitud (supremo e ínfimo), la propiedad arquimediana y la densidad de los racionales.
2. Demostrar convergencias con la definición $\varepsilon$-$N$, y usar la convergencia monótona, Bolzano-Weierstrass, Cauchy y límites superior e inferior.
3. Decidir la convergencia de series (comparación, cociente, raíz, integral, Leibniz) y **acotar el error** de truncarlas.
4. Trabajar con continuidad ($\varepsilon$-$\delta$), continuidad uniforme, y los teoremas de Bolzano y de Weierstrass.
5. Enunciar y aplicar el teorema del valor medio, el de Taylor con resto y la integral de Riemann (sumas superiores e inferiores).
6. Distinguir convergencia puntual y uniforme, y saber qué se conserva con la uniforme; calcular radios de convergencia.

## Qué debes dominar antes

[[mat-logica-demostraciones]] (cuantificadores, demostraciones, inducción) y [[mat-calculo-2]] (series, Taylor, integrales).

> [!question] Test de entrada
> 1. Niega «$\forall\varepsilon > 0\ \exists N\ \forall n \ge N:\ \lvert a_n - L\rvert < \varepsilon$».
> 2. ¿Converge $\sum 1/n$? ¿Y $\sum 1/n^2$?
> 3. ¿Cuánto vale $\lim_{x\to0}\frac{\sin x}{x}$?
>
> Respuestas: $\exists\varepsilon > 0\ \forall N\ \exists n \ge N:\ \lvert a_n - L\rvert \ge \varepsilon$; la primera diverge y la segunda converge (a
> $\pi^2/6$); $1$.

## 1. Para qué sirve

- **Matemática avanzada**: topología, teoría de la medida, análisis funcional, ecuaciones en derivadas parciales y probabilidad rigurosa se
  construyen sobre este nodo.
- **Computación científica**: garantizar que un método converge y acotar su error ([[mat-analisis-numerico]]); saber cuántos términos de una serie
  bastan para $12$ decimales correctos.
- **Aprendizaje automático y optimización**: convergencia de algoritmos iterativos, continuidad de Lipschitz, contracciones y puntos fijos.
- **Física**: intercambiar límites, derivadas e integrales sin justificarlo produce resultados falsos; la convergencia uniforme dice cuándo se puede.

## 2. Los reales: un cuerpo ordenado completo

$\mathbb Q$ es un cuerpo ordenado, pero tiene **huecos**: el conjunto $\{q \in \mathbb Q : q^2 < 2\}$ está acotado superiormente y no tiene supremo
racional. Lo que distingue a $\mathbb R$ es un único axioma adicional.

**Axioma de completitud.** Todo subconjunto no vacío de $\mathbb R$ acotado superiormente tiene **supremo** (mínima cota superior).

El supremo puede no pertenecer al conjunto ($\sup\{1 - 1/n\} = 1$) o sí (y entonces es el máximo). Simétricamente existe el **ínfimo** de todo conjunto
acotado inferiormente. Una caracterización útil: $s = \sup A$ si $s$ es cota superior y, para todo $\varepsilon > 0$, hay un $a \in A$ con $a > s - \varepsilon$.

**Teorema (propiedad arquimediana).** Para todo $x \in \mathbb R$ existe $n \in \mathbb N$ con $n > x$.

*Demostración.* Si no, $\mathbb N$ estaría acotado y tendría supremo $s$. Entonces $s - 1$ no es cota superior: existe $n$ con $n > s - 1$, luego
$n + 1 > s$, contradicción. $\blacksquare$

Consecuencias: para todo $\varepsilon > 0$ hay un $n$ con $1/n < \varepsilon$; y entre dos reales cualesquiera hay un racional (**densidad**).

## 3. Sucesiones

$(a_n)$ **converge** a $L$ si

$$
\forall \varepsilon > 0 \;\, \exists N \;\, \forall n \ge N : \; \lvert a_n - L\rvert < \varepsilon .
$$

**Ejemplo resuelto 1.** $a_n = \frac{n}{n + 1} \to 1$: $\lvert a_n - 1\rvert = \frac{1}{n + 1} < \varepsilon$ si $n > 1/\varepsilon - 1$; basta tomar $N > 1/\varepsilon$
(existe por la propiedad arquimediana). Una demostración $\varepsilon$-$N$ consiste en **encontrar $N$ en función de $\varepsilon$**.

El límite es único; las sucesiones convergentes están acotadas; los límites respetan sumas, productos, cocientes (con denominador no nulo) y
desigualdades no estrictas.

**Teorema (convergencia monótona).** Toda sucesión creciente y acotada superiormente converge a su supremo.

*Demostración.* Sea $s = \sup\{a_n\}$. Dado $\varepsilon > 0$, $s - \varepsilon$ no es cota superior, luego existe $N$ con $a_N > s - \varepsilon$; para $n \ge N$,
$s - \varepsilon < a_N \le a_n \le s$. $\blacksquare$ Así se prueba que existe $e = \lim(1 + 1/n)^n$ sin conocerlo de antemano.

**Teorema (Bolzano-Weierstrass).** Toda sucesión acotada tiene una subsucesión convergente.

**Límites superior e inferior.** $\limsup a_n$ es el mayor límite de subsucesiones (y $\liminf$, el menor); existen siempre en $[-\infty, \infty]$, y
$a_n$ converge si y solo si coinciden. Para $(-1)^n(1 + 1/n)$: $\liminf = -1$ y $\limsup = 1$.

**Sucesiones de Cauchy.** $(a_n)$ es de Cauchy si sus términos se acercan entre sí:
$\forall \varepsilon\, \exists N\, \forall m, n \ge N : \lvert a_m - a_n\rvert < \varepsilon$. En $\mathbb R$, **ser de Cauchy equivale a converger**: es otra forma
de la completitud, y la que permite probar convergencia sin conocer el límite.

**Teorema del punto fijo (contracciones).** Si $g$ lleva un intervalo cerrado $I$ en sí mismo y $\lvert g(x) - g(y)\rvert \le L\lvert x - y\rvert$ con $L < 1$,
la iteración $x_{n+1} = g(x_n)$ converge a un único punto fijo $x^*$, con
$\lvert x_n - x^*\rvert \le \frac{L^n}{1 - L}\lvert x_1 - x_0\rvert$. (Las iteraciones forman una sucesión de Cauchy: sus distancias decrecen como una serie
geométrica.) Es la base de muchos algoritmos numéricos y del teorema de existencia de soluciones de las EDO.

## 4. Series

$\sum a_n$ converge si lo hace la sucesión de sumas parciales $S_N = \sum_{n=1}^{N} a_n$. Condición necesaria: $a_n \to 0$. No es suficiente:

**Teorema.** La serie armónica $\sum \frac{1}{n}$ diverge.

*Demostración (Oresme).* Agrupando en bloques de longitud $2^k$, $\frac{1}{2^k + 1} + \dots + \frac{1}{2^{k+1}} > 2^k \cdot \frac{1}{2^{k+1}} = \frac12$, de modo que
$S_{2^m} > 1 + \frac{m}{2}$. $\blacksquare$ (Diverge muy despacio: $H_N \approx \ln N + \gamma$, con $\gamma \approx 0{,}5772$.)

**Criterios** para series de términos positivos: **comparación** (si $0 \le a_n \le b_n$ y $\sum b_n$ converge, $\sum a_n$ también); **cociente**
($\lim a_{n+1}/a_n < 1$ converge, $> 1$ diverge); **raíz** ($\lim\sqrt[n]{a_n}$); **integral** (abajo). La serie geométrica $\sum r^n$ converge a $\frac{1}{1 - r}$ si
$\lvert r\rvert < 1$; $\sum 1/n^p$ converge si y solo si $p > 1$.

**Teorema (criterio integral con cota de error).** Sea $f : [1, \infty) \to \mathbb R$ positiva y decreciente. Entonces $\sum f(n)$ converge si y solo si
$\int_1^\infty f$ converge y, en ese caso, la cola $R_N = \sum_{n > N} f(n)$ cumple

$$
\int_{N+1}^{\infty} f(x)\,dx \;\le\; R_N \;\le\; \int_{N}^{\infty} f(x)\,dx .
$$

*Demostración.* Para $n - 1 \le x \le n$, $f(n) \le f(x) \le f(n - 1)$; integrando en cada intervalo y sumando se atrapa cada término entre dos
integrales. $\blacksquare$ Así, $\zeta(2) = \sum 1/n^2$ está entre $S_{100} + \frac1{101}$ y $S_{100} + \frac1{100}$: un intervalo de anchura $10^{-4}$ con solo cien
términos. La fórmula de **Euler-Maclaurin** refina la cola con más términos y da docenas de decimales con pocos sumandos.

**Series alternadas (Leibniz).** Si $b_n$ decrece a $0$, $\sum(-1)^{n+1}b_n$ converge y el error de truncar tras $N$ términos es menor que $b_{N+1}$.

**Convergencia absoluta.** Si $\sum\lvert a_n\rvert$ converge, $\sum a_n$ también, y se puede reordenar sin cambiar la suma. Si converge solo
**condicionalmente** (como $\sum(-1)^{n+1}/n = \ln 2$), el teorema de Riemann dice que reordenándola se puede obtener **cualquier** suma: el orden importa.

## 5. Continuidad

$f$ es **continua** en $a$ si
$\forall\varepsilon > 0\ \exists\delta > 0\ \forall x:\ \lvert x - a\rvert < \delta \Rightarrow \lvert f(x) - f(a)\rvert < \varepsilon$ (equivalentemente, si $x_n \to a$ implica
$f(x_n) \to f(a)$).

**Teorema de Bolzano (valor intermedio).** Si $f$ es continua en $[a, b]$ y $f(a) < 0 < f(b)$, existe $c$ en $(a, b)$ con $f(c) = 0$. *(Se toma
$c = \sup\{x : f < 0 \text{ en } [a, x]\}$; la continuidad impide que $f(c)$ sea positiva o negativa.)* Es la garantía del método de bisección.

**Teorema de Weierstrass.** Una función continua en un intervalo **cerrado y acotado** alcanza su máximo y su mínimo. *(Bolzano-Weierstrass aplicado a
una sucesión que se acerca al supremo.)* En un intervalo abierto puede fallar ($1/x$ en $(0, 1)$).

**Continuidad uniforme.** $f$ es **uniformemente continua** si el $\delta$ sirve para todos los puntos a la vez:
$\forall\varepsilon\ \exists\delta\ \forall x, y:\ \lvert x - y\rvert < \delta \Rightarrow \lvert f(x) - f(y)\rvert < \varepsilon$. $x^2$ lo es en $[0, 2]$ (con
$\delta = \varepsilon/4$, porque $\lvert x^2 - y^2\rvert = \lvert x + y\rvert\lvert x - y\rvert \le 4\lvert x - y\rvert$) pero no en todo $\mathbb R$. **Teorema de Heine**: toda
función continua en un intervalo cerrado y acotado es uniformemente continua.

## 6. Derivada e integral

**Teorema del valor medio.** Si $f$ es continua en $[a, b]$ y derivable en $(a, b)$, existe $c$ con $f'(c) = \frac{f(b) - f(a)}{b - a}$. (De Rolle, que sale de
Weierstrass.) Consecuencias: derivada nula implica constante; derivada positiva implica creciente; y $\lvert f(x) - f(y)\rvert \le M\lvert x - y\rvert$ si
$\lvert f'\rvert \le M$.

**Teorema de Taylor con resto de Lagrange.** Si $f$ tiene $n + 1$ derivadas,
$f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x - a)^k + \frac{f^{(n+1)}(\xi)}{(n + 1)!}(x - a)^{n+1}$ para algún $\xi$ entre $a$ y $x$. Da la cota de error de toda
aproximación polinómica: para $e = e^1$, el resto de grado $n$ es menor que $\frac{3}{(n + 1)!}$.

**Integral de Riemann.** Para una partición $P$ de $[a, b]$, la **suma superior** $U(f, P)$ usa el supremo de $f$ en cada subintervalo y la **inferior**
$L(f, P)$, el ínfimo. $f$ es **integrable** si $\inf_P U = \sup_P L$, y ese valor es $\int_a^b f$. Toda función continua es integrable (por la continuidad
uniforme, $U - L$ se hace tan pequeño como se quiera), y también toda monótona: para $f$ creciente con $n$ subintervalos iguales,
$U - L = \frac{(f(b) - f(a))(b - a)}{n}$. El **teorema fundamental del cálculo** une derivada e integral.

## 7. Sucesiones y series de funciones

$f_n \to f$ **puntualmente** si $f_n(x) \to f(x)$ para cada $x$, y **uniformemente** si $\sup_x\lvert f_n(x) - f(x)\rvert \to 0$. La diferencia importa: $f_n(x) = x^n$
converge puntualmente en $[0, 1]$ a una función **discontinua** (vale $0$ en $[0, 1)$ y $1$ en $1$), pero uniformemente en $[0, \tfrac12]$ (el supremo es
$2^{-n}$).

**Teorema.** El límite uniforme de funciones continuas es continuo, y se puede integrar término a término: $\int f_n \to \int f$. (Para derivar término a
término hace falta convergencia uniforme de las derivadas.)

**Criterio M de Weierstrass.** Si $\lvert f_n(x)\rvert \le M_n$ para todo $x$ y $\sum M_n$ converge, $\sum f_n$ converge uniformemente.

**Series de potencias.** $\sum c_nx^n$ converge absolutamente si $\lvert x\rvert < R$ y diverge si $\lvert x\rvert > R$, con **radio de convergencia**
$R = 1/\limsup\sqrt[n]{\lvert c_n\rvert}$ (o $\lim\lvert c_n/c_{n+1}\rvert$ si existe); dentro de $[-r, r]$ con $r < R$ la convergencia es uniforme, así que la
suma es continua, derivable e integrable término a término. Por eso las funciones definidas por series de Taylor se comportan bien en su disco de convergencia.

## 8. Comprobar con un programa: cotas, no «parece que converge»

```python
from fractions import Fraction
import math

# ζ(2) con 100 términos y la cota integral: un intervalo garantizado.
s = sum(Fraction(1, n * n) for n in range(1, 101))
inferior, superior = s + Fraction(1, 101), s + Fraction(1, 100)
assert inferior < Fraction(math.pi ** 2 / 6) < superior
assert superior - inferior < Fraction(1, 10_000)

# Serie alternada: el error es menor que el primer término omitido.
ln2 = math.log(2)
for N in (10, 100, 1000):
    SN = sum((-1) ** (n + 1) / n for n in range(1, N + 1))
    assert abs(SN - ln2) < 1 / (N + 1)

# Punto fijo de cos: la cota a priori se cumple en cada paso.
L, x0 = math.sin(1), 1.0
x1 = math.cos(x0)
xstar = 0.7390851332151607
x = x0
for n in range(1, 60):
    x = math.cos(x)
    assert abs(x - xstar) <= L ** n / (1 - L) * abs(x1 - x0) + 1e-15

# La serie armónica supera 10 por primera vez en N = 12367 (valor de control del reto).
h, n = 0.0, 0
while h <= 10:
    n += 1
    h += 1 / n
assert n == 12367
```

## 9. Errores típicos

- Escribir un $N$ que depende de $n$, o un $\delta$ que depende de $x$ cuando se pide continuidad uniforme.
- Concluir convergencia de una serie porque $a_n \to 0$ (la armónica).
- Dar por bueno un valor numérico porque las sumas parciales «se estabilizan», sin acotar la cola.
- Reordenar una serie condicionalmente convergente.
- Aplicar Weierstrass o Heine en intervalos abiertos o no acotados.
- Intercambiar límite e integral (o derivada) con convergencia solo puntual.
- Confundir supremo con máximo.

## 10. Resumen

- Completitud: todo conjunto no vacío acotado tiene supremo; arquimediana; densidad de $\mathbb Q$.
- Sucesiones: $\varepsilon$-$N$, monótona y acotada converge, Bolzano-Weierstrass, Cauchy, $\limsup$ y $\liminf$, contracciones.
- Series: comparación, cociente, raíz, integral (con cota de la cola), Leibniz (error $< b_{N+1}$), absoluta frente a condicional.
- Continuidad: Bolzano, Weierstrass, continuidad uniforme y Heine.
- Valor medio, Taylor con resto, Riemann con sumas superiores e inferiores.
- Convergencia uniforme: conserva continuidad e integrales; criterio M; radio de convergencia.

## Reto

Calcula dos enteros. En ambos, un resultado sin cota de error demostrada no es un resultado.

- **a.** $\left\lfloor 10^{12} \cdot \zeta(3) \right\rfloor$, donde $\zeta(3) = \sum_{n=1}^{\infty} \frac{1}{n^3}$. Valor de control: $\lfloor 10^{6} \cdot \zeta(3) \rfloor = 1202056$.
- **b.** El menor entero $N$ tal que $H_N = \sum_{n=1}^{N} \frac1n > 20$. Valor de control: el menor $N$ con $H_N > 10$ es $12367$.

Formato de la flag, en decimal: `EXODUS{a-b}`

## Repaso: lo que debe quedarte dentro de un mes

1. El axioma del supremo y la propiedad arquimediana.
2. Cómo se escribe una demostración $\varepsilon$-$N$ y una $\varepsilon$-$\delta$.
3. La cola de una serie decreciente está entre dos integrales.
4. Bolzano, Weierstrass y Heine exigen un intervalo cerrado y acotado.
5. Solo la convergencia uniforme conserva la continuidad y permite integrar término a término.

## Siguiente

En las ramas: topología, teoría de la medida e integración, análisis complejo y análisis funcional; en el troncal, [[mat-calculo-multivariable]]
y [[mat-ecuaciones-diferenciales]] ganan con este rigor.
