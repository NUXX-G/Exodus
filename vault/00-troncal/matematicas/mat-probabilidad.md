---
id: mat-probabilidad
title: "Probabilidad: axiomas, condicionamiento, variables aleatorias, teoremas límite y cadenas de Markov"
area: matematicas
trunk_level: 11
prerequisites: [mat-combinatoria-probabilidad-basica, mat-calculo-multivariable]
academic_sources:
  - "Blitzstein, J. K.; Hwang, J. Introduction to Probability, 2ª ed. CRC Press, 2019 (versión en línea gratuita en probabilitybook.net; curso Stat 110 de Harvard)."
  - "Grimmett, G.; Stirzaker, D. Probability and Random Processes, 4ª ed. Oxford University Press, 2020."
  - "Feller, W. An Introduction to Probability Theory and Its Applications, Vol. 1, 3ª ed. Wiley, 1968."
  - "Norris, J. R. Markov Chains. Cambridge University Press, 1997."
ctf_flag: "sha256:245c59e7478edd222ffc5fa0232d4412134826a092d20fa27449cb93f74d4fc1"
hints:
  - "Los tres resultados son exactos: una simulación de Monte Carlo no los da. (a) La distribución de una suma de variables independientes es una convolución; añade los dados de uno en uno. (b) Define un estado por cada prefijo del patrón ya visto y escribe una ecuación lineal para la espera media desde cada estado; un fallo no siempre te devuelve al principio. (c) Calcula la probabilidad de que NO haya coincidencia como un producto."
  - "(a) Programación dinámica sobre la suma, con enteros: 10 pasadas sobre un array de 61 posiciones. (b) Resuelve el sistema con fractions.Fraction o sympy.linsolve, y contrástalo con el patrón HTH, cuya espera media es 10. (c) Usa enteros o fractions.Fraction para decidir la desigualdad sin error de redondeo; valida con N = 365, que da 23."
  - "Feller vol. 1: funciones generatrices para (a), tiempos de recurrencia de patrones para (b). Norris, capítulo 1 (probabilidades y tiempos medios de llegada). Blitzstein y Hwang, capítulos de esperanza y de cadenas de Markov. Documentación: docs.python.org/3/library/fractions.html."
exercises:
  - id: dos-dados
    tier: 1
    prompt: |
      Se lanzan dos dados equilibrados. ¿Cuál es la probabilidad de que la suma sea $7$ o $11$? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:185b24d9b65771b0c597f1cb146a9aa5f45091ef88b25cfe570676c6a62e52eb"]
  - id: esperanza-del-cuadrado
    tier: 1
    prompt: |
      Sea $X$ el resultado de un dado equilibrado. Calcula $E[X^2]$. Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:2ddf3480c4f9ebccb42122b005bc6dd035bd3d7a6f247515503a3748fa7d3e3c"]
  - id: probabilidad-binomial
    tier: 1
    prompt: |
      Se lanza $10$ veces una moneda equilibrada. ¿Cuál es la probabilidad de obtener **exactamente** $3$ caras? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:7faada0333b2a459d9fb20307610041b6114af4f07fa1992998f64924d7cc4a4"]
  - id: tres-dados-suman-diez
    tier: 1
    prompt: |
      ¿De cuántas formas (de los $6^3$ resultados ordenados) suman $10$ tres dados distinguibles? Respuesta: un entero.
    answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
  - id: teorema-de-bayes
    tier: 2
    prompt: |
      Una enfermedad afecta al $1\,\%$ de la población. Una prueba la detecta en el $99\,\%$ de los enfermos (sensibilidad) y da negativo en el $95\,\%$ de los sanos (especificidad). Si una persona al azar da **positivo**, ¿qué probabilidad tiene de estar enferma? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
  - id: distribucion-de-poisson
    tier: 2
    prompt: |
      A un servidor llegan de media $2$ peticiones por segundo, según una distribución de Poisson. ¿Cuál es la probabilidad de que en un segundo lleguen **al menos 2**? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:8f1478a74a43e5b4af1d6d5ec8b6ff050ff2c23e7ad71ea7c0492270f0cc1757"]
  - id: distribucion-geometrica
    tier: 2
    prompt: |
      Se lanza un dado hasta que sale el primer seis. Sea $N$ el número de lanzamientos. ¿Cuánto valen $E[N]$ y $\operatorname{Var}(N)$? Respuesta: los dos números separados por `;`.
    answers: ["sha256:d2901389d652c10fe389d238f931917b10a98fe71c49afa702c5166f91f92a02"]
  - id: falta-de-memoria
    tier: 2
    prompt: |
      La vida de una bombilla es exponencial con media $1000$ horas. Si ya ha durado $1000$ horas, ¿qué probabilidad tiene de durar **más de $1500$**? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:6f6135824f99cd0bdfbebfdcc331020c1e93aaa1aa4b4d28e0291911b501093e"]
  - id: normal-estandar
    tier: 2
    prompt: |
      Sea $Z \sim N(0, 1)$. Calcula $P(-1 \le Z \le 2)$. Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:7b659f7ef2d1a38aa839dee1a02dcc093fe612351c6c2c73eec866cac4222b0a"]
  - id: valores-distintos-en-seis-dados
    tier: 2
    prompt: |
      Se lanzan $6$ dados. ¿Cuál es el **número esperado de valores distintos** que aparecen? (Usa variables indicadoras y la linealidad de la esperanza.) Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:28f6b69387e40642b97c055933f524b7565c9e6fcc8472a4c979f8774e901bc6"]
  - id: covarianza
    tier: 2
    prompt: |
      Sea $X$ un dado equilibrado e $Y = 7 - X$ (la cara opuesta). Calcula $\operatorname{Cov}(X, Y)$. Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:daf5d6123216be162b1986de828379f496351415b2af72ff671bbed97b177af7"]
  - id: desigualdad-de-chebyshev
    tier: 2
    prompt: |
      Una variable tiene media $50$ y desviación típica $5$, sin más información sobre su distribución. ¿Qué cota superior da la desigualdad de Chebyshev para $P(\lvert X - 50\rvert \ge 20)$? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:ece2d97a690303566cb7ba329f7bf3e25baedb393c113372798d4230af8de720"]
  - id: binomial-exacta-y-normal
    tier: 3
    prompt: |
      Se lanza $100$ veces una moneda equilibrada. Calcula **exactamente** $P(X \ge 60)$, donde $X$ es el número de caras. (Compáralo después con la aproximación normal con corrección de continuidad.) Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:1a3cd8f81ce600272aec05324640d13d3b3bbc5a439685d14d705202f75a8863"]
  - id: tiempo-de-espera-de-un-patron
    tier: 3
    prompt: |
      Se lanza una moneda equilibrada hasta que aparece por primera vez la secuencia **HHTH** (H = cara, T = cruz). ¿Cuál es el número esperado de lanzamientos? Respuesta: un entero.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
  - id: ruina-del-jugador
    tier: 3
    prompt: |
      Un jugador empieza con $3$ €, apuesta $1$ € cada vez, gana con probabilidad $0{,}4$ y pierde con $0{,}6$, y se retira al llegar a $10$ € o a $0$ €. ¿Qué probabilidad tiene de llegar a $10$ €? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:083660f9c68660bf2f3f63839a26c41b07c79229210c4548562cf42d2054dea1"]
  - id: paradoja-del-cumpleanos
    tier: 3
    prompt: |
      En un grupo de $30$ personas (cumpleaños independientes y uniformes entre $365$ días), ¿cuál es la probabilidad de que **al menos dos** cumplan años el mismo día? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:2b614020fd083809612ff1f3e90c50a6beee50227caa16ff03b57607c7b8c37a"]
---

# Probabilidad: axiomas, condicionamiento, variables aleatorias, teoremas límite y cadenas de Markov

[[mat-combinatoria-probabilidad-basica]] contó casos igualmente probables. Este nodo construye la teoría completa: los axiomas de
Kolmogorov, la probabilidad condicionada y el teorema de Bayes, las variables aleatorias discretas y continuas con sus distribuciones
principales, la esperanza y la varianza, las desigualdades y los **teoremas límite** que justifican la estadística, y las cadenas de
Markov. Es el lenguaje de la estadística ([[mat-estadistica-inferencia]] la usa en cada línea), del aprendizaje automático, de la física
estadística, de la criptografía y de la teoría de colas.

## Objetivos

Al terminar sabrás:

1. Deducir propiedades de los axiomas y calcular probabilidades condicionadas con la regla del producto, la probabilidad total y **Bayes**.
2. Trabajar con las distribuciones Bernoulli, binomial, geométrica, Poisson, uniforme, exponencial y normal, conocer su media y su
   varianza y cuándo usar cada una.
3. Calcular esperanzas con la **linealidad** y variables indicadoras, varianzas, covarianzas y correlaciones.
4. Aplicar las desigualdades de Markov y Chebyshev, la ley de los grandes números y el teorema central del límite.
5. Calcular tiempos medios de llegada en cadenas de Markov resolviendo un sistema lineal.
6. Comprobar un resultado de probabilidad por enumeración exacta o por simulación.

## Qué debes dominar antes

[[mat-combinatoria-probabilidad-basica]] (combinatoria, probabilidad de Laplace) y [[mat-calculo-multivariable]] (integrales dobles; la
integral de Gauss $\int e^{-x^2}dx = \sqrt\pi$).

> [!question] Test de entrada
> 1. ¿De cuántas formas se eligen 3 elementos de 10?
> 2. Calcula $\sum_{k=0}^{\infty} \frac{2^k}{k!}$.
> 3. ¿Cuánto vale $\int_0^\infty \lambda e^{-\lambda t}\,dt$?
>
> Respuestas: $\binom{10}{3} = 120$; $e^2$; $1$.

## 1. Para qué sirve

- **Estadística y ciencia de datos**: todo intervalo de confianza o contraste se basa en el teorema central del límite.
- **Aprendizaje automático**: los modelos son distribuciones; entrenar es maximizar una verosimilitud ([[ia-aprendizaje-estadistico]]).
- **Medicina y decisiones**: interpretar una prueba diagnóstica es aplicar Bayes; olvidarlo lleva a errores graves (ejemplo 2).
- **Sistemas e ingeniería**: tiempos de llegada a un servidor (Poisson y exponencial), fiabilidad de componentes, cachés y colisiones
  de funciones hash (sección 9), cadenas de Markov en algoritmos de búsqueda y en la física estadística.

## 2. Espacios de probabilidad

Un **espacio de probabilidad** consta del conjunto $\Omega$ de resultados posibles, de una familia de **sucesos** (subconjuntos de $\Omega$)
y de una **probabilidad** $P$ que cumple los axiomas de Kolmogorov:

1. $P(A) \ge 0$ para todo suceso $A$;
2. $P(\Omega) = 1$;
3. si $A_1, A_2, \dots$ son disjuntos dos a dos, $P\bigl(\bigcup_i A_i\bigr) = \sum_i P(A_i)$.

Todo lo demás se **demuestra**: $P(A^c) = 1 - P(A)$ (pues $A$ y $A^c$ son disjuntos y su unión es $\Omega$); $P(\varnothing) = 0$;
si $A \subseteq B$, $P(A) \le P(B)$; $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, y en general la inclusión-exclusión de
[[mat-logica-demostraciones]]. Cuando $\Omega$ es finito y todos los resultados son igual de probables, $P(A) = \lvert A\rvert/\lvert\Omega\rvert$:
la regla de Laplace es un caso particular.

## 3. Probabilidad condicionada, independencia y Bayes

La probabilidad de $A$ **sabiendo** que ha ocurrido $B$ (con $P(B) > 0$) es

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} .
$$

De ahí la **regla del producto** $P(A \cap B) = P(B)\,P(A \mid B)$ y, si $B_1, \dots, B_n$ parten $\Omega$, la **probabilidad total**
$P(A) = \sum_i P(B_i)\,P(A \mid B_i)$. Combinándolas se obtiene el **teorema de Bayes**:

$$
P(B_j \mid A) = \frac{P(B_j)\,P(A \mid B_j)}{\sum_i P(B_i)\,P(A \mid B_i)} .
$$

$A$ y $B$ son **independientes** si $P(A \cap B) = P(A)P(B)$ (saber uno no cambia la probabilidad del otro). Para más de dos sucesos
hay que exigirlo para **todas** las subfamilias: tres sucesos pueden ser independientes dos a dos sin serlo los tres juntos.

**Ejemplo resuelto 1.** Dos dados. $A$ = «la suma es 8», $B$ = «el primero es par». $P(A) = 5/36$; $P(A \mid B)$: con el primero par
($18$ casos), suman 8 los pares $(2,6), (4,4), (6,2)$: $3/18 = 1/6 \ne 5/36$. No son independientes.

**Ejemplo resuelto 2 (la falacia del fiscal).** Una prueba de una enfermedad rara (prevalencia del $0{,}1\,\%$) acierta el $99\,\%$
de las veces en enfermos y en sanos. Si alguien da positivo,
$P(E \mid +) = \frac{0{,}001\cdot0{,}99}{0{,}001\cdot0{,}99 + 0{,}999\cdot0{,}01} \approx 0{,}09$: **solo un 9 %**. De cada 100 000 personas, 100 están
enfermas (99 positivos verdaderos) y 99 900 sanas (999 positivos falsos). Confundir $P(+ \mid E)$ con $P(E \mid +)$ es un error común en
medicina, en tribunales y en seguridad (alertas de un sistema de detección de intrusiones).

## 4. Variables aleatorias discretas

Una **variable aleatoria** $X$ asigna un número a cada resultado. Si toma valores aislados, su **función de masa** es $p(x) = P(X = x)$.
La **esperanza** es la media ponderada, $E[X] = \sum_x x\,p(x)$, y la **varianza** mide la dispersión:

$$
\operatorname{Var}(X) = E\bigl[(X - E[X])^2\bigr] = E[X^2] - E[X]^2, \qquad \sigma = \sqrt{\operatorname{Var}(X)} .
$$

**Linealidad de la esperanza.** $E[aX + bY] = aE[X] + bE[Y]$ **siempre**, aunque $X$ e $Y$ dependan una de otra. Combinada con
variables **indicadoras** ($I_A = 1$ si ocurre $A$, $0$ si no, y $E[I_A] = P(A)$) resuelve problemas que parecen difíciles.

**Ejemplo resuelto 3.** $n$ cartas con su nombre se reparten al azar entre $n$ personas. ¿Cuántas reciben la suya, de media? Sea $I_k$ la
indicadora de que la persona $k$ recibe la suya: $P = 1/n$. Entonces $E[\text{aciertos}] = \sum_k E[I_k] = n\cdot\frac1n = 1$, para cualquier $n$.
Sin linealidad habría que conocer la distribución completa (los desarreglos de [[mat-matematica-discreta]]).

**Distribuciones discretas principales:**

| Distribución | Modelo | $P(X = k)$ | $E[X]$ | $\operatorname{Var}(X)$ |
|---|---|---|:---:|:---:|
| Bernoulli$(p)$ | un ensayo con éxito $p$ | $p$ si $k=1$; $1-p$ si $k=0$ | $p$ | $p(1-p)$ |
| Binomial$(n, p)$ | éxitos en $n$ ensayos independientes | $\binom nk p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| Geométrica$(p)$ | ensayos hasta el primer éxito | $(1-p)^{k-1}p$, $k \ge 1$ | $1/p$ | $(1-p)/p^2$ |
| Poisson$(\lambda)$ | sucesos raros en un intervalo | $e^{-\lambda}\lambda^k/k!$ | $\lambda$ | $\lambda$ |

La Poisson es el límite de la binomial cuando $n \to \infty$ y $p \to 0$ con $np = \lambda$: llamadas a una centralita, errores en un disco,
desintegraciones en un segundo.

## 5. Variables aleatorias continuas

Una variable **continua** tiene una **densidad** $f \ge 0$ con $\int f = 1$, y $P(a \le X \le b) = \int_a^b f(x)\,dx$ (la probabilidad de un
valor concreto es 0). La **función de distribución** es $F(x) = P(X \le x)$, y $F' = f$. Esperanza: $E[X] = \int x f(x)\,dx$; y
$E[g(X)] = \int g(x)f(x)\,dx$.

- **Uniforme** en $[a, b]$: $f = \frac{1}{b - a}$; media $\frac{a + b}{2}$, varianza $\frac{(b - a)^2}{12}$.
- **Exponencial**$(\lambda)$: $f(t) = \lambda e^{-\lambda t}$ para $t \ge 0$; $P(T > t) = e^{-\lambda t}$; media $1/\lambda$. Es la única continua **sin
  memoria**: $P(T > s + t \mid T > s) = P(T > t)$. Modela tiempos entre llegadas de un proceso de Poisson y vidas de componentes que no
  envejecen.
- **Normal** $N(\mu, \sigma^2)$: $f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-(x - \mu)^2/(2\sigma^2)}$ (la constante sale de la integral de Gauss). Si
  $X \sim N(\mu, \sigma^2)$, $Z = (X - \mu)/\sigma \sim N(0, 1)$ (**tipificar**), y $P(X \le x) = \Phi\bigl(\frac{x - \mu}{\sigma}\bigr)$, con $\Phi$ la
  distribución de la normal estándar. Dentro de $\mu \pm \sigma$, $\mu \pm 2\sigma$ y $\mu \pm 3\sigma$ cae aproximadamente el $68\,\%$, el
  $95\,\%$ y el $99{,}7\,\%$.

## 6. Varias variables

La distribución **conjunta** de $(X, Y)$ da $P(X = x, Y = y)$ (o una densidad $f(x, y)$); las **marginales** se obtienen sumando o
integrando la otra variable. $X$ e $Y$ son independientes si la conjunta es el producto de las marginales; entonces
$E[XY] = E[X]E[Y]$.

La **covarianza** $\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y]$ mide la relación lineal, y la **correlación**
$\rho = \frac{\operatorname{Cov}(X, Y)}{\sigma_X\sigma_Y} \in [-1, 1]$ la normaliza. Independencia implica covarianza nula, pero **no al revés**
($X$ uniforme en $\{-1, 0, 1\}$ e $Y = X^2$ tienen covarianza $0$ y dependen totalmente). Para la suma,

$$
\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y),
$$

y si son independientes las varianzas **se suman**: la desviación típica de la suma de $n$ variables independientes iguales crece como
$\sqrt n$, no como $n$ (la diversificación de una cartera de inversión).

## 7. Desigualdades y teoremas límite

**Markov.** Si $X \ge 0$, $P(X \ge a) \le \frac{E[X]}{a}$. *Demostración.* $a\,I_{X \ge a} \le X$; tomando esperanzas, $a\,P(X \ge a) \le E[X]$. $\blacksquare$

**Chebyshev.** $P(\lvert X - \mu\rvert \ge a) \le \frac{\sigma^2}{a^2}$. *Demostración.* Markov aplicada a $(X - \mu)^2 \ge a^2$. $\blacksquare$ Vale para
**cualquier** distribución: a $3\sigma$ de la media queda como mucho $1/9$ de la probabilidad (para la normal, solo un $0{,}3\,\%$).

**Ley (débil) de los grandes números.** Si $X_1, X_2, \dots$ son independientes con media $\mu$ y varianza $\sigma^2$, la media muestral
$\bar X_n = \frac1n\sum X_i$ cumple, para todo $\varepsilon > 0$,

$$
P\bigl(\lvert\bar X_n - \mu\rvert \ge \varepsilon\bigr) \le \frac{\sigma^2}{n\varepsilon^2} \xrightarrow[n\to\infty]{} 0 .
$$

*Demostración.* $E[\bar X_n] = \mu$ y $\operatorname{Var}(\bar X_n) = \sigma^2/n$ (varianzas de independientes); se aplica Chebyshev. $\blacksquare$ Es lo
que hace funcionar los seguros, los casinos y las simulaciones de Monte Carlo.

**Teorema central del límite.** Con las mismas hipótesis, la media tipificada tiende a una normal estándar:

$$
\frac{\bar X_n - \mu}{\sigma/\sqrt n} \xrightarrow{\ d\ } N(0, 1) ,
$$

es decir, $P\bigl(\frac{\bar X_n - \mu}{\sigma/\sqrt n} \le z\bigr) \to \Phi(z)$, **sea cual sea** la distribución de partida. Por eso la normal está
en todas partes: los errores de medida, las alturas o las notas son sumas de muchas causas pequeñas. Como aproximación de una
binomial$(n, p)$ (suma de Bernoulli) se usa $N(np, np(1-p))$ con **corrección de continuidad**: $P(X \ge k) \approx 1 - \Phi\bigl(\frac{k - 0{,}5 - np}{\sqrt{np(1-p)}}\bigr)$.

## 8. Cadenas de Markov y tiempos de espera

Una **cadena de Markov** es una sucesión $X_0, X_1, \dots$ en la que el futuro depende del pasado solo a través del presente:
$P(X_{n+1} = j \mid X_n = i, \dots) = p_{ij}$. Las probabilidades de transición forman una matriz estocástica $P$ (filas que suman 1); la
distribución tras $n$ pasos es $\pi_0P^n$, y una distribución **estacionaria** cumple $\pi P = \pi$ (el PageRank de Google es la estacionaria
de un paseo aleatorio por la web).

**Teorema (tiempo medio de llegada).** Sea $h_i$ el número esperado de pasos hasta alcanzar por primera vez un conjunto de estados $A$
partiendo de $i$. Entonces $h_i = 0$ para $i \in A$ y

$$
h_i = 1 + \sum_{j} p_{ij}\, h_j \qquad (i \notin A).
$$

*Demostración.* Se condiciona sobre el primer paso y se usa la propiedad de Markov. $\blacksquare$ Es un sistema lineal, resoluble con la
eliminación exacta de [[mat-algebra-lineal-1]].

**Ejemplo resuelto 4: esperar el patrón HTH al lanzar una moneda.** Los estados son el prefijo más largo del patrón que coincide con el
final de lo lanzado: $\varnothing$, H, HT, HTH. Desde HT, una cruz devuelve a $\varnothing$, pero desde H una cara **mantiene** el estado H.
Las ecuaciones $h_\varnothing = 1 + \tfrac12 h_H + \tfrac12 h_\varnothing$, $h_H = 1 + \tfrac12 h_H + \tfrac12 h_{HT}$, $h_{HT} = 1 + \tfrac12\cdot0 + \tfrac12 h_\varnothing$
dan $h_\varnothing = 10$, mientras que para HHH es $14$ y para HTT es $8$: patrones igual de probables tienen esperas distintas, porque se
solapan consigo mismos de forma diferente.

**Ruina del jugador.** Quien juega con probabilidad $p$ de ganar cada euro, empieza con $i$ y para en $0$ o en $N$, llega a $N$ con
probabilidad $\frac{r^i - 1}{r^N - 1}$, $r = (1 - p)/p$ (si $p = \tfrac12$, $i/N$). Con $p < \tfrac12$ y $N$ grande la ruina es casi segura:
la desventaja de un casino es pequeña, pero se aplica muchas veces.

## 9. Coincidencias

Se eligen $n$ valores independientes y uniformes entre $N$ posibles. La probabilidad de que sean todos distintos es

$$
P(\text{sin coincidencia}) = \prod_{k=0}^{n-1} \left(1 - \frac{k}{N}\right) \approx \exp\!\left(-\frac{n(n-1)}{2N}\right),
$$

usando $1 - x \approx e^{-x}$. La coincidencia se vuelve probable cuando $n \approx \sqrt{2N \ln 2} \approx 1{,}18\sqrt{N}$: es la **paradoja del
cumpleaños** ($N = 365$ da $n = 23$). Por eso una función hash de $b$ bits ofrece solo $b/2$ bits de resistencia a colisiones
([[sec-criptografia]]).

## 10. Comprobar: enumeración exacta y simulación

```python
import itertools
import math
import random
from fractions import Fraction

# Ejemplo resuelto 1, por enumeración exacta.
caras = range(1, 7)
pares = list(itertools.product(caras, caras))
p_a = Fraction(sum(1 for a, b in pares if a + b == 8), 36)
p_a_dado_b = Fraction(sum(1 for a, b in pares if a + b == 8 and a % 2 == 0), sum(1 for a, _ in pares if a % 2 == 0))
assert (p_a, p_a_dado_b) == (Fraction(5, 36), Fraction(1, 6))

# Ejemplo resuelto 3: puntos fijos de una permutación aleatoria, media exacta 1 (n = 6, todas las permutaciones).
perms = list(itertools.permutations(range(6)))
assert Fraction(sum(sum(p[i] == i for i in range(6)) for p in perms), len(perms)) == 1

# Ley de los grandes números con una simulación reproducible (semilla fija).
rng = random.Random(2026)
n = 200_000
media = sum(rng.randint(1, 6) for _ in range(n)) / n
assert abs(media - 3.5) < 4 * math.sqrt(35 / 12 / n)   # dentro de 4 desviaciones típicas de la media muestral

# Paradoja del cumpleaños: el menor n con probabilidad de coincidencia > 1/2 es 23.
p, n = Fraction(1), 0
while 1 - p <= Fraction(1, 2):
    p *= Fraction(365 - n, 365)
    n += 1
assert n == 23
```

## 11. Errores típicos

- Confundir $P(A \mid B)$ con $P(B \mid A)$ (falacia del fiscal) o ignorar la probabilidad a priori.
- Suponer independencia sin justificarla; confundir sucesos **independientes** con **incompatibles** (dos sucesos incompatibles con
  probabilidad positiva nunca son independientes).
- Creer que covarianza nula implica independencia.
- Sumar desviaciones típicas en lugar de varianzas.
- Pensar que la ley de los grandes números «compensa» rachas (la falacia del jugador: la moneda no tiene memoria).
- Aplicar la aproximación normal a una binomial con $np$ pequeño (usar Poisson) u olvidar la corrección de continuidad.
- Dar por buena una simulación sin estimar su error ($\sim\sigma/\sqrt n$).

## 12. Resumen

- Axiomas de Kolmogorov; complementario, unión e inclusión-exclusión como teoremas.
- $P(A \mid B) = P(A \cap B)/P(B)$; producto, probabilidad total, Bayes; independencia.
- $E$ lineal siempre; indicadoras; $\operatorname{Var} = E[X^2] - E[X]^2$; covarianza y correlación.
- Bernoulli, binomial, geométrica, Poisson; uniforme, exponencial (sin memoria), normal (tipificar).
- Markov, Chebyshev, ley de los grandes números ($\sigma^2/n$), teorema central del límite.
- Cadenas de Markov: $h_i = 1 + \sum p_{ij}h_j$; ruina del jugador; paradoja del cumpleaños $\approx 1{,}18\sqrt N$.

## Reto

Calcula tres enteros exactos.

- **a.** El número de resultados, de los $6^{10}$ posibles al lanzar 10 dados distinguibles, cuya suma es exactamente 35.
- **b.** El número esperado de lanzamientos de una moneda equilibrada hasta que aparece por primera vez el patrón `HTHHTHTHHTHH`
  (es un entero).
- **c.** El menor $n$ tal que, eligiendo $n$ valores independientes y uniformes entre $N = 10^6$ posibles, la probabilidad de que al
  menos dos coincidan supera $\frac12$.

Formato de la flag, en decimal: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Bayes: la probabilidad a priori importa; $P(E \mid +) \ne P(+ \mid E)$.
2. Linealidad de la esperanza con indicadoras, aunque haya dependencia.
3. Medias y varianzas de binomial, geométrica, Poisson, exponencial y normal.
4. Chebyshev y la ley de los grandes números; el TCL y la desviación típica $\sigma/\sqrt n$ de la media.
5. Tiempos medios en cadenas de Markov como sistema lineal.

## Siguiente

[[mat-estadistica-inferencia]] (de la probabilidad a los datos), [[fis-termo-estadistica]], [[ia-aprendizaje-estadistico]] y
[[sec-criptografia]].
