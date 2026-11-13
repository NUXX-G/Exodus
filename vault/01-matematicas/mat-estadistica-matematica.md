---
id: mat-estadistica-matematica
title: "Estadística matemática: suficiencia, información de Fisher, eficiencia, teoría asintótica, tests óptimos, bootstrap y decisión"
area: matematicas
trunk_level: 13
prerequisites: [mat-estadistica-inferencia, mat-medida-integracion]
academic_sources:
  - "Casella, G.; Berger, R. L. Statistical Inference, 2ª ed. Duxbury, 2002."
  - "Wasserman, L. All of Statistics: A Concise Course in Statistical Inference. Springer, 2004."
exercises:
  - id: informacion-de-fisher
    tier: 1
    prompt: |
      ¿Cuánto vale la información de Fisher $I(p)$ de una observación Bernoulli con $p = 0{,}3$? Respuesta: con **4 decimales**.
    answers: ["sha256:eda62688fe07f22e0a1999e015ce3955f0f56d25967c2e5285bae31f69922849"]
  - id: cota-de-cramer-rao
    tier: 1
    prompt: |
      Con una muestra de tamaño 20 de una Poisson($\lambda$) y $\lambda = 4$, ¿cuánto vale la cota de Cramér-Rao para la varianza de un estimador insesgado de $\lambda$? Respuesta: un número.
    answers: ["sha256:44896b09365746b5f7167ee4d64988a38f7f4628803cbf86224e74eeb7c69e9d"]
  - id: emv-exponencial
    tier: 1
    prompt: |
      Con los datos $0{,}5;\ 1{,}2;\ 0{,}3;\ 1{,}8;\ 1{,}0$ de una exponencial de tasa $\lambda$, ¿cuál es el estimador de máxima verosimilitud de $\lambda$? Respuesta: con **4 decimales**.
    answers: ["sha256:cdd835cc8c13cd512109802c39098ae677a057735593436b508b4f1be24292d7"]
  - id: bayes-conjugado
    tier: 1
    prompt: |
      Con a priori $\operatorname{Beta}(2, 2)$ para $p$ y 7 éxitos en 10 ensayos, ¿cuál es la media a posteriori de $p$? Respuesta: con **4 decimales**.
    answers: ["sha256:904b78c50ef7c9918f2b7979ff108e846a024ccac3ceed4551b409cea2978700"]
  - id: momentos-y-verosimilitud
    tier: 1
    prompt: |
      Los datos $1{,}2;\ 5{,}9;\ 3{,}4;\ 2{,}1;\ 2{,}9$ vienen de una uniforme en $(0, \theta)$. ¿Cuánto valen el estimador por momentos y el de máxima verosimilitud de $\theta$? Respuesta: `momentos;emv`.
    answers: ["sha256:5d81279d2add0598b4fc6bc1f736d0b47fe39be83b42c39e2dad466c9dfa27a5"]
  - id: metodo-delta
    tier: 2
    prompt: |
      Se estima la tasa $\lambda = 0{,}5$ de una exponencial con $1/\bar X$ y $n = 100$. Por el método delta, ¿cuál es su desviación típica asintótica? Respuesta: un número.
    answers: ["sha256:0602d7c813c1f6e7351a5832730f29daf739674976caba8d9dd955be838d46ea"]
  - id: neyman-pearson
    tier: 2
    prompt: |
      Con 9 observaciones $N(\mu, 1)$, el test más potente de nivel $0{,}05$ de $H_0: \mu = 0$ frente a $H_1: \mu = 1$ rechaza si $\bar X > c$. ¿Cuál es su potencia? Respuesta: con **4 decimales**.
    answers: ["sha256:fcbc27710e5bd7205b6256d88fb76de32a25946783daff255c330947c883a53c"]
  - id: razon-de-verosimilitudes
    tier: 2
    prompt: |
      En 100 lanzamientos salen 60 caras. Calcula el estadístico $-2\log\Lambda$ de la razón de verosimilitudes para $H_0: p = 0{,}5$ (por Wilks, aproximadamente $\chi^2_1$). Respuesta: con **4 decimales**.
    answers: ["sha256:7773f41be8618114c3e3b001abe6cd64d300fb68148a1dc27f16a4f2cd53d7b3"]
  - id: muestras-bootstrap
    tier: 2
    prompt: |
      Con una muestra de 5 datos distintos, ¿cuántas muestras bootstrap distintas (como multiconjuntos) de tamaño 5 hay? Respuesta: un entero.
    answers: ["sha256:65a699905c02619370bcf9207f5a477c3d67130ca71ec6f750e07fe8d510b084"]
  - id: tamano-de-muestra
    tier: 2
    prompt: |
      ¿Qué tamaño de muestra hace falta para estimar una media con margen de error $0{,}5$ al 95 %, si $\sigma = 3$? Respuesta: un entero.
    answers: ["sha256:8d27ba37c5d810106b55f3fd6cdb35842007e88754184bfc0e6035f9bcede633"]
  - id: kolmogorov-smirnov
    tier: 2
    prompt: |
      Calcula el estadístico de Kolmogorov-Smirnov $D = \sup_t|F_n(t) - t|$ de la muestra $0{,}1;\ 0{,}4;\ 0{,}7$ frente a la uniforme en $[0, 1]$. Respuesta: un número.
    answers: ["sha256:221764976efe04132774d96b0253cc31434c5261737469324f222621baf34b20"]
  - id: intervalo-de-wald
    tier: 2
    prompt: |
      Con $n = 400$ y $\hat p = 0{,}3$, ¿cuánto mide la mitad del intervalo de Wald al 95 % para $p$? Respuesta: con **4 decimales**.
    answers: ["sha256:842c6e46f25374c7e9557e26ebdf50a3cb9ecadf89e1e5ebd9c14cff6a532e33"]
  - id: rao-blackwell
    tier: 3
    prompt: |
      En una muestra de 10 Poisson($\lambda$) con $T = \sum X_i = 15$, ¿cuánto vale el estimador insesgado de varianza mínima de $\Pr(X = 0) = e^{-\lambda}$ (obtenido por Rao-Blackwell a partir de $\mathbf 1_{\{X_1 = 0\}}$)? Respuesta: con **4 decimales**.
    answers: ["sha256:36fc277d7fd5284f35bc49f8a42ddf00e032f356e89b6e13ca23dc8e09b9c267"]
  - id: eficiencia-relativa
    tier: 3
    prompt: |
      Para una uniforme en $(0, 1)$ con $n = 5$, ¿cuántas veces es mayor el error cuadrático medio de $2\bar X$ que el de $\frac{n+1}{n}\max X_i$? Respuesta: con **4 decimales**.
    answers: ["sha256:b83f2dba16464237b7cdcf35c5d625fff31d46f6fe7f9f25deeecde84bcf056f"]
  - id: james-stein
    tier: 3
    prompt: |
      Se estima la media $\theta \in \mathbb R^{10}$ de $X \sim N(\theta, I)$. En $\theta = 0$, ¿cuál es el riesgo (error cuadrático esperado) del estimador $X$ y el del de James-Stein $\left(1 - \frac{8}{\|X\|^2}\right)X$? Respuesta: `riesgo_X;riesgo_JS`.
    answers: ["sha256:3ccee360e61de9cce694eb0fddea777df93acc93e405b69d6d34822df7c81b6a"]
  - id: intervalo-de-wilson
    tier: 3
    prompt: |
      Con 60 éxitos en 100 ensayos, ¿cuál es el extremo inferior del intervalo de Wilson (inversión del test de puntuación) al 95 %? Respuesta: con **4 decimales**.
    answers: ["sha256:1341f399c9a5fd6444e02f9ac8a9e6cb2cfe7990d28415228061f52f709441d5"]
---

# Estadística matemática: suficiencia, información de Fisher, eficiencia, teoría asintótica, tests óptimos, bootstrap y decisión

[[mat-estadistica-inferencia]] enseñó a **usar** estimadores, intervalos y contrastes. Este nodo responde a las preguntas de fondo: ¿qué parte de los datos
importa (**suficiencia**)? ¿Cuánta precisión es **posible** (**Cramér-Rao**)? ¿Por qué la máxima verosimilitud es tan buena con muestras grandes (**normalidad
asintótica**)? ¿Cuál es el **mejor** test (**Neyman-Pearson**)? ¿Qué hacer cuando no hay fórmula (**bootstrap**)? Y una sorpresa que cambió la estadística:
en dimensión 3 o más, el estimador "obvio" no es admisible (**James-Stein**), la idea detrás de toda regularización.

## Objetivos

Al terminar sabrás:

1. Identificar estadísticos suficientes (factorización) y familias exponenciales, y mejorar estimadores con Rao-Blackwell.
2. Calcular la información de Fisher y la cota de Cramér-Rao, y decidir si un estimador es eficiente.
3. Usar la teoría asintótica: consistencia, normalidad asintótica del EMV, método delta e intervalos de Wald.
4. Construir tests óptimos (Neyman-Pearson), tests de razón de verosimilitudes (Wilks) e intervalos por inversión de tests (Wilson).
5. Aplicar el bootstrap y tests no paramétricos (Kolmogorov-Smirnov).
6. Comparar estimadores por su riesgo (sesgo, varianza, ECM), con a prioris conjugadas, y entender minimax, admisibilidad y James-Stein.

## Qué debes dominar antes

[[mat-estadistica-inferencia]] (estimadores, EMV, intervalos, contrastes, Bayes) y [[mat-medida-integracion]] (esperanza como integral, modos de
convergencia, derivación bajo la integral).

> [!question] Test de entrada
> 1. Si $X_1, \ldots, X_n$ son independientes con varianza $\sigma^2$, ¿cuál es la varianza de $\bar X$?
> 2. ¿Qué dice el teorema central del límite sobre $\sqrt n(\bar X - \mu)$?
> 3. ¿Cuál es el EMV de $p$ en una binomial con $x$ éxitos en $n$ ensayos?
>
> Respuestas: $\sigma^2/n$; converge en distribución a $N(0, \sigma^2)$; $x/n$.

## 1. Para qué sirve

- **Ciencia experimental**: diseñar experimentos con potencia suficiente y saber cuánta precisión se puede esperar.
- **Aprendizaje automático**: la entropía cruzada es log-verosimilitud; la información de Fisher aparece en el gradiente natural y en la aproximación de
  Laplace; James-Stein explica por qué regularizar mejora ([[ia-aprendizaje-estadistico]]).
- **Ingeniería y control**: los filtros de Kalman son estimadores óptimos; Cramér-Rao da el límite de precisión de un sensor o de un sistema de
  localización (`rob-percepcion-slam`).
- **Auditoría y seguridad**: contrastes para detectar fraude, anomalías o sesgos en generadores aleatorios.

## 2. Suficiencia y familias exponenciales

Un estadístico $T(X)$ es **suficiente** para $\theta$ si la distribución de los datos dada $T$ no depende de $\theta$: todo lo que la muestra dice sobre $\theta$ está en
$T$. **Teorema de factorización**: $T$ es suficiente si y solo si $f(x\mid\theta) = g(T(x), \theta)\,h(x)$.

- Bernoulli: $\prod p^{x_i}(1 - p)^{1 - x_i} = p^{\sum x_i}(1 - p)^{n - \sum x_i}$ ⇒ $T = \sum X_i$.
- Normal con $\sigma$ conocida: $T = \bar X$; con ambas desconocidas, $(\bar X, S^2)$.
- Uniforme en $(0, \theta)$: $f = \theta^{-n}\mathbf 1\{\max x_i \le \theta\}$ ⇒ $T = \max X_i$.

Una **familia exponencial** tiene densidad $h(x)\exp(\eta(\theta)T(x) - A(\theta))$: Bernoulli, binomial, Poisson, normal, exponencial, gamma, beta. En ellas $\sum T(X_i)$ es
suficiente, el EMV iguala momentos ($E[T] = \bar T$) y existen a prioris conjugadas.

**Rao-Blackwell.** Si $\hat\theta$ es insesgado y $T$ suficiente, $\tilde\theta = E[\hat\theta\mid T]$ es insesgado y $\operatorname{Var}\tilde\theta \le \operatorname{Var}\hat\theta$ (por la ley de la varianza total). Si además
$T$ es **completo**, $\tilde\theta$ es el único insesgado de varianza mínima (**Lehmann-Scheffé**, UMVUE).

> [!example] Ejemplo resuelto 1: estimar $\Pr(X = 0)$ en una Poisson
> Queremos $e^{-\lambda}$ con $X_1, \ldots, X_n \sim \operatorname{Poisson}(\lambda)$. Un estimador insesgado tonto es $\mathbf 1\{X_1 = 0\}$. Dado $T = \sum X_i = t$, $X_1 \sim \operatorname{Bin}(t, 1/n)$, así que
> $E[\mathbf 1\{X_1 = 0\}\mid T] = (1 - 1/n)^T$: el UMVUE. Con $n = 10$ y $T = 15$, vale $0{,}9^{15} \approx 0{,}206$, frente al "natural" $e^{-\bar X} = e^{-1{,}5} \approx 0{,}223$, que está sesgado.

## 3. Información de Fisher y Cramér-Rao

La **puntuación** (score) es $s(\theta) = \partial_\theta\log f(X\mid\theta)$; bajo regularidad, $E[s] = 0$. La **información de Fisher** es

$$
I(\theta) = E[s(\theta)^2] = -E\left[\partial_\theta^2\log f(X\mid\theta)\right],
$$

y para $n$ observaciones independientes se multiplica por $n$. Bernoulli: $I(p) = \frac{1}{p(1 - p)}$; Poisson: $I(\lambda) = 1/\lambda$; normal (media): $1/\sigma^2$.

**Cota de Cramér-Rao.** Todo estimador insesgado de $\theta$ cumple $\operatorname{Var}\hat\theta \ge \frac{1}{nI(\theta)}$.

*Demostración.* $E[\hat\theta\,s] = \partial_\theta E[\hat\theta] = 1$ (derivando bajo la integral) y $E[s] = 0$, así que $\operatorname{Cov}(\hat\theta, s) = 1$. Por Cauchy-Schwarz,
$1 \le \operatorname{Var}\hat\theta\cdot\operatorname{Var}s = \operatorname{Var}\hat\theta\cdot nI(\theta)$. $\blacksquare$

Un estimador que la alcanza es **eficiente**: $\bar X$ lo es para la media de una Poisson ($\lambda/n$) o de una normal. En la uniforme $(0, \theta)$ el soporte depende
de $\theta$, no hay regularidad y el estimador basado en el máximo tiene varianza de orden $1/n^2$, mejor que "$1/n$".

## 4. Teoría asintótica

- **Consistencia**: $\hat\theta_n \to \theta$ en probabilidad. El EMV es consistente bajo condiciones de regularidad.
- **Normalidad asintótica del EMV**: $\sqrt n(\hat\theta_n - \theta) \to N(0, 1/I(\theta))$. Con muestras grandes, el EMV es aproximadamente insesgado, normal y eficiente.
  *Idea*: desarrollando la ecuación de verosimilitud, $0 = s_n(\hat\theta) \approx s_n(\theta) + (\hat\theta - \theta)s_n'(\theta)$; el TCL da $s_n(\theta)/\sqrt n \to N(0, I)$ y la ley de los grandes
  números $-s_n'(\theta)/n \to I$.
- **Método delta**: si $\sqrt n(\hat\theta - \theta) \to N(0, \sigma^2)$ y $g$ es derivable con $g'(\theta) \ne 0$, entonces $\sqrt n(g(\hat\theta) - g(\theta)) \to N(0, g'(\theta)^2\sigma^2)$.
- **Intervalo de Wald**: $\hat\theta \pm z_{1-\alpha/2}/\sqrt{nI(\hat\theta)}$. Para una proporción, $\hat p \pm z\sqrt{\hat p(1 - \hat p)/n}$.

> [!example] Ejemplo resuelto 2: la tasa de una exponencial
> Con media $\mu = 1/\lambda$, el EMV de $\lambda$ es $1/\bar X$. Como $\operatorname{Var}\bar X = \mu^2/n$ y $g(\mu) = 1/\mu$ tiene $g'(\mu) = -1/\mu^2$, el método delta da una desviación típica
> $\frac{1}{\mu^2}\cdot\frac{\mu}{\sqrt n} = \frac{\lambda}{\sqrt n}$, que coincide con $1/\sqrt{nI(\lambda)}$ porque $I(\lambda) = 1/\lambda^2$. Con $\lambda = 0{,}5$ y $n = 100$: $0{,}05$. La varianza exacta (pues
> $n\bar X \sim \operatorname{Gamma}(n, \lambda)$) da $0{,}0510$: la aproximación ya es buena.

## 5. Tests óptimos

Un test de nivel $\alpha$ tiene probabilidad de error de tipo I $\le\alpha$; su **potencia** es la probabilidad de rechazar cuando $H_1$ es cierta.

**Lema de Neyman-Pearson.** Para $H_0: \theta = \theta_0$ frente a $H_1: \theta = \theta_1$ (simples), el test más potente de nivel $\alpha$ rechaza cuando la razón de
verosimilitudes $\frac{f(x\mid\theta_1)}{f(x\mid\theta_0)}$ supera un umbral. En la normal con $\theta_1 > \theta_0$, eso es rechazar si $\bar X > c$, y como $c$ no depende de $\theta_1$, el test
es **uniformemente más potente** para $H_1: \theta > \theta_0$.

**Razón de verosimilitudes general.** $\Lambda = \frac{\sup_{\Theta_0}L}{\sup_\Theta L}$ y, por el **teorema de Wilks**, $-2\log\Lambda \to \chi^2_k$ bajo $H_0$, con $k$ el número de restricciones.
Con 60 caras en 100 lanzamientos y $H_0: p = \frac12$: $-2\log\Lambda = 2\left[60\ln\frac{0{,}6}{0{,}5} + 40\ln\frac{0{,}4}{0{,}5}\right] \approx 4{,}03 > 3{,}84$: se rechaza al 5 %.

**Dualidad tests-intervalos.** Un intervalo de confianza es el conjunto de valores de $\theta_0$ que un test no rechaza. Invertir el test de puntuación de una
proporción da el **intervalo de Wilson**, mucho mejor que el de Wald cuando $\hat p$ está cerca de 0 o 1 o $n$ es pequeño.

> [!example] Ejemplo resuelto 3: potencia y tamaño de muestra (con menos ayuda)
> Con 9 observaciones $N(\mu, 1)$ y nivel $0{,}05$ para $H_0: \mu = 0$ frente a $\mu = 1$, escribe la región de rechazo $\bar X > z_{0,95}/3$ y calcula la potencia como $\Phi(3 - 1{,}645)$.
> Comprueba que sale $\approx 0{,}91$. Después halla el menor $n$ con potencia al menos $0{,}99$ despejando $\sqrt n \ge z_{0,95} + z_{0,99}$ (resultado: $n = 16$).

## 6. Bootstrap y métodos no paramétricos

**Bootstrap** (Efron): para aproximar la distribución de un estadístico, se remuestrean los datos con reemplazamiento muchas veces y se recalcula. La
distribución empírica hace de población. Da errores típicos e intervalos (percentil, BCa) para medianas, cocientes o modelos complejos sin fórmulas.
Con $n$ datos distintos hay $\binom{2n - 1}{n}$ remuestras distintas.

**Kolmogorov-Smirnov**: $D_n = \sup_t|F_n(t) - F_0(t)|$, la mayor distancia vertical entre la función de distribución empírica y la teórica; su ley bajo $H_0$ no
depende de $F_0$ (si es continua). **Glivenko-Cantelli**: $D_n \to 0$ casi seguro.

## 7. Teoría de la decisión

El **riesgo** de un estimador es $R(\theta, \hat\theta) = E[\text{pérdida}]$; con pérdida cuadrática, $\text{ECM} = \text{sesgo}^2 + \text{varianza}$. Un estimador es **admisible** si ninguno lo
mejora para todo $\theta$; es **minimax** si minimiza el peor riesgo; es **de Bayes** si minimiza el riesgo promedio con una a priori (la media a posteriori, con
pérdida cuadrática). Las a prioris **conjugadas** dan posteriores cerradas: Beta-binomial, Gamma-Poisson, Normal-Normal.

**Comparar por ECM**: en la uniforme $(0, \theta)$, $2\bar X$ tiene ECM $\theta^2/(3n)$ y $\frac{n+1}{n}\max X_i$ tiene $\theta^2/(n(n+2))$: el segundo gana por un factor que crece con $n$.

**James-Stein (1961).** Si $X \sim N(\theta, I_p)$ con $p \ge 3$, el estimador $\left(1 - \frac{p - 2}{\|X\|^2}\right)X$ tiene riesgo **menor** que $X$ para **todo** $\theta$: $X$ no es admisible.
En $\theta = 0$, su riesgo es $p - (p - 2)^2E[1/\chi^2_p] = 2$ frente a $p$. Encoger hacia un punto común reduce la varianza más de lo que aumenta el sesgo: es la
idea de la regularización (ridge), de los modelos jerárquicos y del "préstamo de fuerza" entre grupos.

## 8. Comprobar con un programa

Rao-Blackwell (insesgadez exacta), Cramér-Rao, potencia de Neyman-Pearson por simulación, bootstrap del error típico de la mediana y James-Stein por
simulación, con semilla fija.

```python
import math
import random
import statistics

random.seed(7)
Phi = lambda x: 0.5 * (1 + math.erf(x / math.sqrt(2)))

# 1. Ejemplo resuelto 1: (1 − 1/n)^T es insesgado para e^{−λ} (suma exacta sobre T ~ Poisson(nλ)).
n, lam = 10, 1.5
E = sum(math.exp(-n * lam + t * math.log(n * lam) - math.lgamma(t + 1)) * (1 - 1 / n) ** t for t in range(200))
assert abs(E - math.exp(-lam)) < 1e-12 and abs(0.9**15 - 0.2059) < 1e-4

# 2. Ejemplo resuelto 2: desviación de 1/X̄ (λ = 0,5, n = 100) por simulación frente a λ/√n.
est = [1 / statistics.fmean(random.expovariate(0.5) for _ in range(100)) for _ in range(4000)]
assert abs(statistics.stdev(est) - 0.05) < 0.004

# 3. Ejemplo resuelto 3: potencia Φ(3 − 1,645) y su comprobación por simulación; n para potencia 0,99.
z95, z99 = 1.6448536, 2.3263479
potencia = Phi(3 - z95)
rechazos = sum(statistics.fmean(random.gauss(1, 1) for _ in range(9)) > z95 / 3 for _ in range(20000))
assert abs(rechazos / 20000 - potencia) < 0.01 and abs(potencia - 0.9123) < 1e-4
assert math.ceil((z95 + z99) ** 2) == 16

# 4. Bootstrap del error típico de la mediana y James-Stein (p = 10, θ = 0).
datos = [random.gauss(0, 1) for _ in range(51)]
medianas = [statistics.median(random.choices(datos, k=51)) for _ in range(3000)]
et_boot = statistics.stdev(medianas)
assert 0.1 < et_boot < 0.3   # teoría: sqrt(π/2)/sqrt(51) ≈ 0,176
p = 10
riesgo_js = statistics.fmean(
    sum((1 - (p - 2) / sum(v * v for v in x)) ** 2 * v * v for v in x)
    for x in ([random.gauss(0, 1) for _ in range(p)] for _ in range(20000))
)
assert abs(riesgo_js - 2) < 0.1
print("potencia", round(potencia, 4), "| error típico bootstrap de la mediana", round(et_boot, 3), "| riesgo JS", round(riesgo_js, 2))
```

## 9. Errores típicos

- Confundir "insesgado" con "bueno": un estimador sesgado puede tener mucho menor ECM (James-Stein, $\frac{n+1}{n}\max$ frente a $2\bar X$).
- Aplicar Cramér-Rao cuando el soporte depende del parámetro.
- Usar el intervalo de Wald con $\hat p$ cerca de 0 o 1 (puede salirse de $[0, 1]$ o tener cobertura muy baja): usa Wilson.
- Leer el valor p como la probabilidad de que $H_0$ sea cierta.
- Olvidar que Wilks y la normalidad del EMV son resultados asintóticos.
- Hacer bootstrap con datos dependientes (series temporales) remuestreando observaciones sueltas: hay que remuestrear bloques.

## 10. Resumen

- Suficiencia (factorización), familias exponenciales, Rao-Blackwell y Lehmann-Scheffé.
- $I(\theta) = E[s^2] = -E[\partial^2\log f]$; Cramér-Rao $\operatorname{Var} \ge 1/(nI)$; eficiencia.
- EMV: consistente y $\sqrt n(\hat\theta - \theta) \to N(0, 1/I)$; método delta; Wald.
- Neyman-Pearson (razón de verosimilitudes), UMP en familias monótonas, Wilks $-2\log\Lambda \to \chi^2$, intervalos por inversión (Wilson).
- Bootstrap; Kolmogorov-Smirnov y Glivenko-Cantelli.
- Riesgo, admisibilidad, minimax, Bayes conjugado; James-Stein en $p \ge 3$.

## Repaso: lo que debe quedarte dentro de un mes

1. Un estadístico suficiente resume sin perder nada; condicionar en él solo mejora.
2. La información de Fisher fija el mejor error típico posible, $1/\sqrt{nI}$.
3. Con muchos datos, el EMV es casi normal, insesgado y óptimo.
4. El test óptimo compara verosimilitudes.
5. Encoger estimaciones hacia un punto común suele reducir el error total.

## Siguiente

`ia-bayesiana` (inferencia bayesiana computacional), `mat-teoria-informacion` (información de Fisher y KL) y `ia-aprendizaje-refuerzo`. La práctica de
modelos está en [[ia-aprendizaje-estadistico]].
