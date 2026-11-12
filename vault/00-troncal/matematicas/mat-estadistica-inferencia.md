---
id: mat-estadistica-inferencia
title: "Estadística e inferencia: estimación, intervalos de confianza, contrastes, regresión e inferencia bayesiana"
area: matematicas
trunk_level: 12
prerequisites: [mat-probabilidad]
academic_sources:
  - "Wasserman, L. All of Statistics: A Concise Course in Statistical Inference. Springer, 2004."
  - "Casella, G.; Berger, R. L. Statistical Inference, 2ª ed. Duxbury (Wadsworth), 2002."
  - "NIST/SEMATECH. e-Handbook of Statistical Methods (NIST Handbook 151), itl.nist.gov/div898/handbook."
  - "Wasserstein, R. L.; Lazar, N. A. The ASA Statement on p-Values: Context, Process, and Purpose. The American Statistician, 70(2), 129-133, 2016."
  - "Python Software Foundation. statistics — Mathematical statistics functions (NormalDist, linear_regression), docs.python.org/3/library/statistics.html."
hints:
  - "Concepto: un estadístico es una variable aleatoria: si repitieras el muestreo, cambiaría. Toda la inferencia se apoya en su distribución muestral; en la media, normal con desviación σ/√n (teorema central del límite) o t de Student si σ se estima. Un intervalo es «estimación ± cuantil × error estándar»; un p-valor es la probabilidad, si H0 fuera cierta, de algo al menos tan extremo como lo observado."
  - "Herramienta: en Python, statistics.mean, variance (n−1), pvariance (n), NormalDist().inv_cdf(0.975) para cuantiles normales y statistics.linear_regression; para la t y la χ² sin SciPy, integra la densidad con Simpson y busca el cuantil por bisección. Comprueba cualquier intervalo o contraste con una simulación: repite el muestreo miles de veces con random y cuenta."
  - "Documentación: NIST e-Handbook, capítulos 1.3 (análisis exploratorio) y 7 (comparación de productos y procesos); Wasserman, capítulos de estimación, intervalos, contrastes, regresión y bayesiana; declaración de la ASA sobre los p-valores (2016); docs.python.org/3/library/statistics.html."
exercises:
  - id: media-y-varianza-muestral
    tier: 1
    prompt: |
      Para la muestra $4, 8, 6, 5, 7$, calcula la media muestral $\bar x$ y la varianza muestral $s^2$ (con denominador $n - 1$). Respuesta: los dos números separados por `;`.
    answers: ["sha256:2621d5852e0bdbe52b67851a7b3344985c7d7835575001ff4f911bdab98f9bf7"]
  - id: error-estandar-de-una-proporcion
    tier: 1
    prompt: |
      En una encuesta a $600$ personas, el $40\,\%$ dice que sí. ¿Cuánto vale el error estándar estimado de la proporción, $\sqrt{\hat p(1 - \hat p)/n}$? Respuesta: un número decimal exacto.
    answers: ["sha256:a7e46abf169710b34fe8898b950d57ec0863c3a4190e4b38c56b1f9f257d50e7"]
  - id: varianza-de-maxima-verosimilitud
    tier: 1
    prompt: |
      Con la muestra $4, 8, 6, 5, 7$ de una normal, ¿cuál es el estimador de **máxima verosimilitud** de la varianza $\sigma^2$ (denominador $n$)? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: varias-pruebas-a-la-vez
    tier: 1
    prompt: |
      Se hacen $20$ contrastes independientes, todos con hipótesis nula cierta y nivel $\alpha = 0{,}05$. ¿Qué probabilidad hay de obtener **al menos un** resultado «significativo» por puro azar? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:dd8cca86911b312eafba8f3a32f08b3d04c1baab669d0352e245336b90bc231f"]
  - id: intervalo-con-sigma-conocida
    tier: 2
    prompt: |
      Una muestra de $n = 25$ de una población normal con $\sigma = 10$ conocida tiene media $\bar x = 50$. Da el intervalo de confianza al $95\,\%$ para $\mu$ (usa el cuantil $z_{0{,}975}$ de la normal estándar). Respuesta: los dos extremos con **2 decimales**, separados por `;`.
    answers: ["sha256:4dc7900067d858164d4a93d3538578b53feeae59e949b030845a4d295a7d3548"]
  - id: intervalo-t-de-student
    tier: 2
    prompt: |
      Se miden $8$ piezas (en mm): $12{,}1$, $11{,}8$, $12{,}4$, $12$, $11{,}7$, $12{,}3$, $12{,}2$, $12{,}3$. Suponiendo normalidad con $\sigma$ desconocida, da el intervalo de confianza al $95\,\%$ para la media (con la $t$ de Student de $7$ grados de libertad). Respuesta: los dos extremos con **2 decimales**, separados por `;`.
    answers: ["sha256:f18c3a4e20c47212e27114f53447a27a5703d1a7a1c02b85f8cd1cdf8cac5b57"]
  - id: maxima-verosimilitud-exponencial
    tier: 2
    prompt: |
      Los tiempos entre fallos de una máquina (en días) son $2, 3, 1, 4, 5$ y se suponen exponenciales de parámetro $\lambda$. ¿Cuál es el estimador de máxima verosimilitud $\hat\lambda$? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:0d7f0e336166042f8cc9e4c20ae427ba367c279d6e3dfd1bd7247b0fbce61d50"]
  - id: contraste-de-una-moneda
    tier: 2
    prompt: |
      En $100$ lanzamientos salen $60$ caras. Con la aproximación normal **sin** corrección de continuidad, contrasta $H_0: p = 0{,}5$ frente a $H_1: p \ne 0{,}5$. ¿Cuánto vale el **p-valor**? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:7b96f14e7b56386cc700d9652f55845dd0724d806bbcc2552603d64e806ee5af"]
  - id: tamano-de-muestra
    tier: 2
    prompt: |
      ¿Cuántas personas hay que encuestar, como mínimo, para estimar una proporción con un margen de error de $\pm 3$ puntos al $95\,\%$ de confianza en el peor caso ($p = 0{,}5$)? Respuesta: un entero.
    answers: ["sha256:0f0b82fae280ae9fec1905f029b6ee9a9c85bb6cc5151da6dafe38a7902a4a53"]
  - id: potencia-de-un-contraste
    tier: 2
    prompt: |
      Se contrasta $H_0: \mu = 100$ frente a $H_1: \mu > 100$ con $\sigma = 10$ conocida, $n = 25$ y $\alpha = 0{,}05$ (contraste $z$ unilateral). Si en realidad $\mu = 105$, ¿cuál es la **potencia** del contraste? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:56363e1c8d0911d3e9285c436ad0f0ad04627294fad28e6649cca3b96a512f71"]
  - id: paradoja-de-simpson
    tier: 2
    prompt: |
      Un tratamiento $A$ cura $9$ de $10$ casos leves y $30$ de $60$ graves; un tratamiento $B$ cura $64$ de $80$ leves y $4$ de $10$ graves. $A$ es mejor en cada grupo. ¿Cuáles son las proporciones **globales** de curación de $A$ y de $B$? Respuesta: las dos fracciones irreducibles separadas por `;`.
    answers: ["sha256:ee77876b4d4171912979351f8351940a0fb87ff4c536e4d795744898c2abd753"]
  - id: bondad-de-ajuste
    tier: 3
    prompt: |
      Un dado se lanza $120$ veces y cada cara sale $25, 17, 15, 23, 24$ y $16$ veces. Calcula el estadístico $\chi^2 = \sum \frac{(O - E)^2}{E}$ para la hipótesis de dado equilibrado y su p-valor con $5$ grados de libertad. Respuesta: `chi2;p` con el p-valor redondeado a **4 decimales**.
    answers: ["sha256:520219ee8eaf1e046bc262f99f8f109a391b4f8486ab29c806073b26bb5d8227", "sha256:274dd08bef48b99bbd4c74db276a5bafe2133796b859b3900808029c12f941aa"]
  - id: t-de-dos-muestras
    tier: 3
    prompt: |
      Dos grupos de 5 medidas: $A$ = $5{,}1$, $4{,}9$, $5{,}6$, $5{,}8$, $6$ y $B$ = $6{,}2$, $6{,}5$, $5{,}9$, $6{,}8$, $6{,}4$. Calcula el estadístico $t$ de dos muestras con **varianza combinada**, $t = \frac{\bar x_B - \bar x_A}{s_p\sqrt{1/n_A + 1/n_B}}$. Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:541fbab32b192714d5883a66a1f264f500149ad7711911616360a9d98bc7c5fb"]
  - id: regresion-lineal-y-r2
    tier: 3
    prompt: |
      Ajusta por mínimos cuadrados la recta $y = mx + b$ a los puntos $(1, 2)$, $(2, 4)$, $(3, 5)$, $(4, 4)$, $(5, 5)$ y calcula su coeficiente de determinación $R^2$. Respuesta: `m;b;R2` con $R^2$ redondeado a **3 decimales**.
    answers: ["sha256:d0478b56500475f81960c96b83b2eaf22095d5130cef1c7c98ac3991a33d484b", "sha256:03d98c338c36d0d4e0cef3cf239d6d2001c6786965f4798a08d46b91c80e200f"]
  - id: inferencia-bayesiana
    tier: 3
    prompt: |
      La probabilidad $p$ de éxito de un proceso tiene distribución a priori $\mathrm{Beta}(2, 2)$. Se observan $7$ éxitos en $10$ ensayos. ¿Cuál es la **media a posteriori** de $p$? Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:d75ad8a3d75abddc564e54a5f4bcd6f6dd445284af6ac2fe7a8973c2937bdc5a"]
---

# Estadística e inferencia: estimación, intervalos de confianza, contrastes, regresión e inferencia bayesiana

La probabilidad ([[mat-probabilidad]]) parte de un modelo conocido y predice los datos. La **estadística** hace el camino inverso:
parte de los datos y aprende sobre el modelo, **cuantificando la incertidumbre**. ¿Funciona el fármaco? ¿Es el nuevo proceso más
rápido? ¿Cuántos votos tendrá un partido? Este nodo enseña los estimadores y sus propiedades, la máxima verosimilitud, los intervalos de
confianza, los contrastes de hipótesis con su interpretación correcta (y sus abusos), la regresión lineal y la inferencia bayesiana. Es
la base del método científico cuantitativo, de la ciencia de datos y del aprendizaje automático.

## Objetivos

Al terminar sabrás:

1. Distinguir población, muestra, parámetro y estadístico, y evaluar un estimador por su sesgo, su varianza y su error cuadrático medio.
2. Obtener estimadores por **máxima verosimilitud** y por el método de los momentos.
3. Construir e interpretar intervalos de confianza para medias y proporciones (normal y $t$ de Student) y calcular tamaños de muestra.
4. Plantear contrastes de hipótesis, calcular **p-valores**, distinguir errores de tipo I y II y calcular la **potencia**.
5. Aplicar los contrastes $z$, $t$ (una y dos muestras) y $\chi^2$, y corregir por comparaciones múltiples.
6. Ajustar e interpretar una regresión lineal ($R^2$), hacer inferencia bayesiana con distribuciones conjugadas y reconocer la paradoja de
   Simpson y la diferencia entre correlación y causalidad.

## Qué debes dominar antes

[[mat-probabilidad]] (esperanza, varianza, normal, ley de los grandes números, teorema central del límite) y la estadística descriptiva de
[[mat-funciones-basicas]] (media, mediana, desviación típica, gráficos). Los mínimos cuadrados de [[mat-analisis-numerico]] ayudan.

> [!question] Test de entrada
> 1. Si $X_1, \dots, X_n$ son independientes con varianza $\sigma^2$, ¿cuál es la varianza de su media?
> 2. Si $Z \sim N(0, 1)$, ¿qué valor $z$ cumple $P(-z \le Z \le z) = 0{,}95$?
> 3. ¿Qué dice el teorema central del límite?
>
> Respuestas: $\sigma^2/n$; $z \approx 1{,}96$; que la media de muchas variables independientes, tipificada, se distribuye aproximadamente
> como una normal estándar, sea cual sea la distribución de partida.

## 1. Para qué sirve

- **Ciencia y medicina**: un ensayo clínico decide si un tratamiento funciona con un contraste; un intervalo dice **cuánto** funciona.
- **Ingeniería y calidad**: control estadístico de procesos, tolerancias, comparación de proveedores (el NIST e-Handbook nació para eso).
- **Tecnología y empresa**: pruebas A/B (¿convierte más la versión B de una web?), estimación de métricas con muestras, detección de anomalías.
- **Aprendizaje automático**: entrenar un modelo es estimar parámetros (a menudo por máxima verosimilitud); validar es estimar su error
  con incertidumbre ([[ia-aprendizaje-estadistico]]).
- **Ciudadanía**: leer encuestas («margen de error de $\pm 3$ puntos») y estudios científicos con criterio.

## 2. Muestras, estimadores y sus propiedades

Una **población** se describe con **parámetros** desconocidos ($\mu$, $\sigma^2$, $p$). Una **muestra aleatoria simple** son observaciones
$X_1, \dots, X_n$ independientes con la distribución de la población. Un **estadístico** es una función de la muestra; usado para aproximar
un parámetro, se llama **estimador** ($\hat\theta$). Es una **variable aleatoria**: otra muestra daría otro valor.

- **Sesgo**: $E[\hat\theta] - \theta$. Insesgado si es 0.
- **Error cuadrático medio**: $E[(\hat\theta - \theta)^2] = \operatorname{Var}(\hat\theta) + \text{sesgo}^2$.
- **Consistente** si $\hat\theta \to \theta$ cuando $n \to \infty$.

**Media muestral** $\bar X = \frac1n\sum X_i$: insesgada para $\mu$, con varianza $\sigma^2/n$ y **error estándar** $\sigma/\sqrt n$.

**Varianza muestral.** $s^2 = \frac{1}{n - 1}\sum (X_i - \bar X)^2$ es insesgada para $\sigma^2$.

*Demostración.* $\sum (X_i - \bar X)^2 = \sum X_i^2 - n\bar X^2$. Como $E[X_i^2] = \sigma^2 + \mu^2$ y $E[\bar X^2] = \operatorname{Var}(\bar X) + \mu^2 = \frac{\sigma^2}{n} + \mu^2$,
$E\bigl[\sum(X_i - \bar X)^2\bigr] = n(\sigma^2 + \mu^2) - n\bigl(\frac{\sigma^2}{n} + \mu^2\bigr) = (n - 1)\sigma^2$. $\blacksquare$ Dividir entre $n$
subestima: las desviaciones respecto a $\bar X$ son menores que respecto a la $\mu$ verdadera (porque $\bar X$ se ajusta a la muestra).

## 3. Máxima verosimilitud

Dada una muestra $x_1, \dots, x_n$ de un modelo con densidad (o masa) $f(x; \theta)$, la **verosimilitud** es
$L(\theta) = \prod_i f(x_i; \theta)$: cómo de probables son los datos observados según cada valor del parámetro. El **estimador de máxima
verosimilitud** (EMV) es el $\theta$ que la maximiza; en la práctica se maximiza $\ell = \ln L$, que convierte el producto en suma.

**Ejemplo resuelto 1 (Bernoulli).** $k$ éxitos en $n$ ensayos: $\ell(p) = k\ln p + (n - k)\ln(1 - p)$; $\ell'(p) = \frac kp - \frac{n - k}{1 - p} = 0$ da
$\hat p = k/n$, la proporción observada.

**Ejemplo resuelto 2 (exponencial).** $\ell(\lambda) = n\ln\lambda - \lambda\sum x_i$; $\ell' = \frac n\lambda - \sum x_i = 0$ da $\hat\lambda = 1/\bar x$.

**Normal.** El EMV de $\mu$ es $\bar x$ y el de $\sigma^2$ es $\frac1n\sum(x_i - \bar x)^2$ (sesgado, aunque consistente). Bajo condiciones de
regularidad, el EMV es consistente y, para $n$ grande, aproximadamente normal con la menor varianza posible: por eso es el método por
defecto. El **método de los momentos** iguala momentos muestrales y teóricos ($\bar x = E[X]$, ...) y da estimadores sencillos.

## 4. Intervalos de confianza

Un **intervalo de confianza al $95\,\%$** es un procedimiento que, aplicado a muchas muestras, contiene al parámetro verdadero en el $95\,\%$
de ellas. **No** significa que el parámetro tenga un $95\,\%$ de probabilidad de estar en *este* intervalo concreto (el parámetro es fijo; lo
aleatorio es el intervalo).

**Media con $\sigma$ conocida.** Por el teorema central del límite, $\frac{\bar X - \mu}{\sigma/\sqrt n} \approx N(0, 1)$, luego

$$
\bar x \pm z_{1-\alpha/2}\,\frac{\sigma}{\sqrt n}, \qquad z_{0{,}975} \approx 1{,}96 .
$$

**Media con $\sigma$ desconocida.** Se sustituye $\sigma$ por $s$ y, si la población es normal, $\frac{\bar X - \mu}{s/\sqrt n}$ sigue una **$t$ de Student**
con $n - 1$ grados de libertad (más colas que la normal, porque $s$ también varía); el intervalo es $\bar x \pm t_{n-1,\,1-\alpha/2}\,\frac{s}{\sqrt n}$. Con
$n = 8$, $t_{7;\,0{,}975} \approx 2{,}365$ en lugar de $1{,}96$.

**Proporción.** $\hat p \pm z\sqrt{\hat p(1 - \hat p)/n}$ (intervalo de Wald; para $n$ pequeño o $\hat p$ cerca de 0 o 1 es mejor el de Wilson).
El margen de error es máximo con $\hat p = 0{,}5$; para un margen $E$ al $95\,\%$ hace falta $n \ge \left(\frac{1{,}96}{E}\right)^2\cdot0{,}25$. Para
$\pm 3$ puntos, unas mil personas, **sea cual sea el tamaño de la población**: lo que importa es $n$, no la fracción encuestada.

**Ejemplo resuelto 3.** 36 medidas con $\bar x = 20{,}4$ y $s = 1{,}8$: error estándar $1{,}8/6 = 0{,}3$; con $t_{35;\,0{,}975} \approx 2{,}03$ el intervalo es
$20{,}4 \pm 0{,}61$, es decir $[19{,}79;\ 21{,}01]$. Para la mitad de anchura harían falta cuatro veces más datos ($\sqrt n$).

## 5. Contrastes de hipótesis

Un contraste compara una **hipótesis nula** $H_0$ (no hay efecto: $\mu = \mu_0$) con una **alternativa** $H_1$. Se calcula un **estadístico de
contraste** cuya distribución se conoce si $H_0$ es cierta, y el **p-valor**: la probabilidad, **suponiendo $H_0$ cierta**, de obtener un
resultado al menos tan extremo como el observado. Si el p-valor es menor que el **nivel de significación** $\alpha$ (habitualmente $0{,}05$), se
rechaza $H_0$.

| | $H_0$ cierta | $H_0$ falsa |
|---|---|---|
| se rechaza $H_0$ | **error de tipo I** (probabilidad $\alpha$) | acierto (**potencia** $1 - \beta$) |
| no se rechaza | acierto | **error de tipo II** (probabilidad $\beta$) |

**Ejemplo resuelto 4.** ¿Está trucado un dado que da $25$ seises en $90$ tiradas? $H_0: p = 1/6$. Esperados $15$, desviación típica
$\sqrt{90\cdot\frac16\cdot\frac56} = 3{,}54$; $z = \frac{25 - 15}{3{,}54} = 2{,}83$; p-valor bilateral $2(1 - \Phi(2{,}83)) \approx 0{,}005$: se rechaza $H_0$ al
$5\,\%$ y al $1\,\%$.

**Contrastes habituales.**

- $z$ para una media con $\sigma$ conocida o una proporción con $n$ grande.
- $t$ de **una muestra** ($\frac{\bar x - \mu_0}{s/\sqrt n}$, $n - 1$ grados de libertad); $t$ de **dos muestras** independientes con varianza combinada
  $s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$ y estadístico $\frac{\bar x_1 - \bar x_2}{s_p\sqrt{1/n_1 + 1/n_2}}$ (con varianzas distintas, el de
  Welch); $t$ **pareado** para medidas antes/después en los mismos sujetos.
- $\chi^2$ de **bondad de ajuste**: $\sum\frac{(O - E)^2}{E}$ con $k - 1$ grados de libertad ($k$ categorías); de **independencia** en una tabla de
  contingencia, con $(f - 1)(c - 1)$ grados de libertad.

**Potencia y tamaño de muestra.** La potencia es la probabilidad de detectar un efecto que existe. Crece con el tamaño del efecto, con $n$ y con
$\alpha$. Un estudio con poca potencia casi nunca encuentra nada, y cuando lo encuentra suele exagerar el efecto.

**Lo que un p-valor no es** (declaración de la American Statistical Association, 2016): no es la probabilidad de que $H_0$ sea cierta ni de que
los datos se deban al azar; un p-valor pequeño no mide el **tamaño** ni la importancia del efecto; y las conclusiones no deben depender solo de
si $p$ cruza $0{,}05$. Hay que informar del tamaño del efecto con su intervalo de confianza.

**Comparaciones múltiples.** Con 20 contrastes independientes de hipótesis nulas ciertas al $5\,\%$, la probabilidad de algún falso positivo es
$1 - 0{,}95^{20} \approx 64\,\%$. La corrección de **Bonferroni** usa $\alpha/m$ en cada uno de los $m$ contrastes. Probar muchas cosas y publicar
solo lo significativo (*p-hacking*) produce resultados que no se replican.

## 6. Regresión lineal

El modelo $y = \beta_0 + \beta_1x + \varepsilon$ se ajusta por **mínimos cuadrados** ([[mat-analisis-numerico]]):

$$
\hat\beta_1 = \frac{\sum(x_i - \bar x)(y_i - \bar y)}{\sum(x_i - \bar x)^2}, \qquad \hat\beta_0 = \bar y - \hat\beta_1\bar x .
$$

El **coeficiente de determinación** $R^2 = 1 - \frac{\sum(y_i - \hat y_i)^2}{\sum(y_i - \bar y)^2}$ es la fracción de la varianza de $y$ explicada por la recta; en
regresión simple coincide con el cuadrado de la correlación $r$. Con errores normales independientes de varianza constante, se pueden dar
intervalos y contrastes para $\beta_1$ con la $t$ de $n - 2$ grados de libertad. Mira siempre los **residuos**: un patrón en ellos indica que la
recta no es el modelo adecuado.

**Correlación no es causalidad.** Que dos variables se muevan juntas puede deberse a una tercera (la venta de helados y los ahogamientos crecen
en verano). Solo un **experimento aleatorizado** (o un diseño causal cuidadoso) permite concluir causalidad.

**Paradoja de Simpson.** Una relación que se cumple en cada grupo puede invertirse al juntar los grupos, si los grupos tienen tamaños y
composiciones distintas (un tratamiento mejor en casos leves y en graves puede parecer peor en total si se aplicó sobre todo a los graves).
Hay que estratificar por las variables que influyen a la vez en el tratamiento y en el resultado.

## 7. Inferencia bayesiana

En el enfoque **bayesiano** el parámetro es incierto y se describe con una distribución **a priori**; los datos la actualizan con Bayes:

$$
\pi(\theta \mid \text{datos}) \propto L(\theta)\,\pi(\theta) .
$$

**Conjugación Beta-binomial.** Si la a priori de una proporción es $\mathrm{Beta}(a, b)$ (densidad $\propto p^{a-1}(1 - p)^{b-1}$, media $\frac{a}{a + b}$) y se
observan $k$ éxitos en $n$ ensayos, la a posteriori es $\mathrm{Beta}(a + k,\ b + n - k)$: basta sumar éxitos y fracasos. Con $\mathrm{Beta}(1, 1)$
(uniforme) y $3$ éxitos en $4$, la a posteriori es $\mathrm{Beta}(4, 2)$, de media $2/3$ (frente al EMV $3/4$: la a priori «tira» hacia el centro,
y su peso se diluye al crecer $n$). Un **intervalo de credibilidad** sí admite la lectura «el parámetro está aquí con probabilidad $95\,\%$».

## 8. Comprobar con un programa

```python
import math
import random
import statistics as st

# Varianza muestral: insesgada con n - 1 (simulación con semilla fija).
rng = random.Random(7)
n, reps = 5, 40_000
con_n1 = st.mean(st.variance([rng.gauss(0, 2) for _ in range(n)]) for _ in range(reps))
assert abs(con_n1 - 4) < 0.15                      # σ² = 4

# Cobertura de un intervalo al 95 % con σ conocida: alrededor del 95 % de los intervalos contiene a μ.
z = st.NormalDist().inv_cdf(0.975)
aciertos = 0
for _ in range(20_000):
    muestra = [rng.gauss(10, 3) for _ in range(16)]
    m = st.mean(muestra)
    aciertos += abs(m - 10) <= z * 3 / 4
assert abs(aciertos / 20_000 - 0.95) < 0.01

# Ejemplo resuelto 4: dado con 25 seises en 90 tiradas.
zc = (25 - 15) / math.sqrt(90 * (1 / 6) * (5 / 6))
p = 2 * (1 - st.NormalDist().cdf(zc))
assert round(zc, 2) == 2.83 and 0.004 < p < 0.006

# Regresión: R² = r² en regresión simple.
xs, ys = [1, 2, 3, 4, 6], [3, 5, 6, 9, 12]
reg = st.linear_regression(xs, ys)
residuos = sum((y - (reg.slope * x + reg.intercept)) ** 2 for x, y in zip(xs, ys))
r2 = 1 - residuos / sum((y - st.mean(ys)) ** 2 for y in ys)
assert abs(r2 - st.correlation(xs, ys) ** 2) < 1e-12
```

## 9. Errores típicos

- Interpretar un intervalo del $95\,\%$ como «95 % de probabilidad de que el parámetro esté aquí» (en el enfoque frecuentista).
- Leer el p-valor como la probabilidad de que $H_0$ sea cierta, o «no rechazar» como «demostrar» $H_0$.
- Confundir significación estadística con importancia práctica (con $n$ enorme, diferencias diminutas son «significativas»).
- Usar la normal en lugar de la $t$ con muestras pequeñas y $\sigma$ estimada.
- Hacer muchos contrastes sin corregir; elegir el análisis después de ver los datos.
- Dividir entre $n$ al estimar la varianza cuando se quiere un estimador insesgado.
- Concluir causalidad de una correlación; agregar grupos heterogéneos (Simpson).
- Extrapolar una regresión fuera del rango de los datos.

## 10. Resumen

- Estimadores: sesgo, varianza, ECM; $\bar X$ con error estándar $\sigma/\sqrt n$; $s^2$ con $n - 1$ es insesgada.
- Máxima verosimilitud: $\hat p = k/n$, $\hat\lambda = 1/\bar x$, $\hat\sigma^2$ con $n$.
- Intervalos: $\bar x \pm z\sigma/\sqrt n$, $\bar x \pm t\,s/\sqrt n$, $\hat p \pm z\sqrt{\hat p(1 - \hat p)/n}$; $n \approx 1068$ para $\pm 3$ puntos.
- Contrastes: p-valor, $\alpha$, errores I y II, potencia; $z$, $t$ (una, dos muestras, pareado), $\chi^2$; Bonferroni.
- Regresión: $\hat\beta_1$, $\hat\beta_0$, $R^2 = r^2$, residuos; correlación no es causalidad; Simpson.
- Bayes: a posteriori $\propto$ verosimilitud $\times$ a priori; Beta-binomial suma éxitos y fracasos.

## Repaso: lo que debe quedarte dentro de un mes

1. El error estándar de la media es $\sigma/\sqrt n$: cuadruplicar $n$ divide el error entre 2.
2. Qué significa (y qué no) un intervalo de confianza y un p-valor.
3. Cuándo usar $z$, $t$ o $\chi^2$.
4. Máxima verosimilitud: derivar el logaritmo de la verosimilitud e igualar a cero.
5. Correlación no es causalidad; cuidado con las comparaciones múltiples y con Simpson.

## Siguiente

[[ia-aprendizaje-estadistico]] (aprendizaje automático como inferencia), [[fis-termo-estadistica]] y, en las ramas, estadística matemática,
procesos estocásticos e inferencia bayesiana.
