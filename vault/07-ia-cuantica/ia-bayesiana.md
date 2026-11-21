---
id: ia-bayesiana
title: "Aprendizaje bayesiano: teorema de Bayes y priores conjugados, distribuciones a posteriori y predictivas, comparación de modelos, regresión bayesiana y procesos gaussianos, MCMC (Metropolis-Hastings, Gibbs, HMC), inferencia variacional y calibración"
area: ia-cuantica
trunk_level: 14
prerequisites: [ia-aprendizaje-estadistico, mat-estadistica-matematica, mat-procesos-estocasticos, mat-estadistica-bidimensional]
academic_sources:
  - "Gelman, A. et al. Bayesian Data Analysis, 3ª ed. CRC Press, 2013 (stat.columbia.edu/~gelman/book); Bishop, C. M. Pattern Recognition and Machine Learning. Springer, 2006 (caps. 2, 3, 10 y 11)."
  - "Rasmussen, C. E.; Williams, C. K. I. Gaussian Processes for Machine Learning. MIT Press, 2006 (gaussianprocess.org/gpml); Murphy, K. P. Probabilistic Machine Learning: An Introduction. MIT Press, 2022."
  - "Blei, D.; Kucukelbir, A.; McAuliffe, J. Variational Inference: A Review for Statisticians. JASA 112(518), 2017; Hoffman, M.; Gelman, A. The No-U-Turn Sampler. JMLR 15, 2014; Kass, R.; Raftery, A. Bayes Factors. JASA 90(430), 1995."
  - "Guo, C. et al. On Calibration of Modern Neural Networks. ICML 2017; documentación de scipy.stats 1.14, consultada en noviembre de 2026."
exercises:
  - id: beta-binomial
    tier: 1
    prompt: |
      Con un prior Beta(2, 2) sobre la probabilidad de éxito y 7 éxitos en 10 intentos, ¿cuál es la media a posteriori y el máximo a posteriori (MAP)?

      Respuesta: `media;map` con 4 decimales.
    answers: ["sha256:4af034df419650526b8532f42fdcc97de8f665acf6bdfec1074697355d8f034b"]
  - id: intervalo-creible
    tier: 2
    prompt: |
      ¿Cuál es el intervalo creíble del 95 % de colas iguales de esa distribución a posteriori?

      Respuesta: `inferior;superior` con 4 decimales.
    answers: ["sha256:0ce7cbfdf913b44d1ecd5b429f12d03a2329e4a07e7bd187f980ed2a5d380d21"]
  - id: gamma-poisson
    tier: 1
    prompt: |
      Con un prior Gamma(α = 2, β = 1) (forma y tasa) sobre la tasa de un proceso de Poisson y los recuentos 3, 5 y 4, ¿qué parámetros tiene la distribución a posteriori y cuál es su media?

      Respuesta: `alfa;beta;media` (la media con 4 decimales).
    answers: ["sha256:6456894b3bd4cdbc80d3951fe9fb42fa17b0fc69b78fe6734c57c0f9b9d340b6"]
  - id: normal-normal
    tier: 2
    prompt: |
      Con varianza conocida σ² = 1, prior N(0, 10²) sobre la media y 5 observaciones de media 2,0, ¿qué media y qué varianza tiene la distribución a posteriori?

      Respuesta: `media;varianza` con 4 decimales.
    answers: ["sha256:f53b7966de066bda45003ccf5ad13f580754756c8425a82bada071f00dcea433"]
  - id: predictiva-a-posteriori
    tier: 2
    prompt: |
      Con la distribución a posteriori Beta(9, 5) del primer ejercicio, ¿qué probabilidad hay de que los dos próximos intentos sean ambos éxitos?

      Respuesta: con 4 decimales.
    answers: ["sha256:6880413a56fd44c2495976d1d4a81a901d9dc1ba8f165671d3ddc4fc9e58ab55"]
  - id: factor-de-bayes
    tier: 3
    prompt: |
      Para una moneda con 7 caras en 10 tiradas, compara H₀: p = 0,5 con H₁: p ~ Uniforme(0, 1). ¿Cuánto vale el factor de Bayes BF₀₁ = p(datos | H₀) / p(datos | H₁)?

      Respuesta: con 4 decimales.
    answers: ["sha256:13be1b5effa4f8a1a1709433867c5f4b5d524db626b1e85ba2ce126cc12f8838"]
  - id: metropolis
    tier: 1
    prompt: |
      En un Metropolis con propuesta simétrica para muestrear una N(0, 1), estando en x = 1 se propone x′ = 2. ¿Con qué probabilidad se acepta?

      Respuesta: con 4 decimales.
    answers: ["sha256:09184c69b2341ec7c142b6595d52974290849734e58429e6b3be3ca3c9107e9c"]
  - id: gibbs
    tier: 2
    prompt: |
      Para muestrear con Gibbs una normal bivariante de medias 0, varianzas 1 y correlación 0,8, ¿qué media y qué varianza tiene la condicional de x dado y = 1?

      Respuesta: `media;varianza` con 4 decimales.
    answers: ["sha256:b27e1b7cf51c42e33e932772c221188b06889c49a2645ac760732b4605e945a3"]
  - id: proceso-gaussiano
    tier: 3
    prompt: |
      Un proceso gaussiano con núcleo RBF k(x, x′) = exp(−(x − x′)²/2) y ruido de varianza 0,01 observa y = 1 en x = 0 e y = −1 en x = 1. ¿Qué media y qué varianza (de la función latente) predice en x = 0,25?

      Respuesta: `media;varianza` con 4 decimales.
    answers: ["sha256:33919407298c9a159f7812f4a869c48fef2a91f65a7051d0e56191884392ba85"]
  - id: regresion-lineal-bayesiana
    tier: 3
    prompt: |
      Regresión y = w₀ + w₁x con prior w ~ N(0, I) y ruido de precisión β = 25 (varianza 0,04). Con los datos (0; 0,1), (1; 1,1), (2; 1,9), ¿cuál es la media a posteriori de (w₀, w₁)?

      Respuesta: `w0;w1` con 4 decimales.
    answers: ["sha256:8efcd9c2e8fbc2b68a52057974b558b6a603880ca8ba139811fa46d5a488832d"]
  - id: aproximacion-de-laplace
    tier: 2
    prompt: |
      La aproximación de Laplace de la Beta(9, 5) es una normal centrada en la moda con varianza −1/(segunda derivada del logaritmo de la densidad en la moda). ¿Qué desviación típica da, y cuál es la verdadera de la Beta(9, 5)?

      Respuesta: `laplace;exacta` con 4 decimales.
    answers: ["sha256:d7a957938d407516570213f92d6732493ccd11faae36646dfbdcbde8f11965f7"]
  - id: calibracion
    tier: 2
    prompt: |
      Un clasificador agrupa 400 predicciones en tres grupos: 100 con confianza media 0,95 y acierto 0,9; 200 con confianza 0,75 y acierto 0,7; 100 con confianza 0,55 y acierto 0,6. ¿Cuál es su error de calibración esperado (ECE)?

      Respuesta: con 4 decimales.
    answers: ["sha256:0602d7c813c1f6e7351a5832730f29daf739674976caba8d9dd955be838d46ea"]
  - id: error-de-monte-carlo
    tier: 1
    prompt: |
      Estimas una probabilidad de 0,3 promediando 10 000 muestras independientes de Bernoulli. ¿Cuál es el error estándar de la estimación?

      Respuesta: con 4 decimales.
    answers: ["sha256:b0a6e658a4167ae64ac41461b1466797883bd44cbc98a6744d954a444a17c329"]
---

El enfoque bayesiano trata lo que no sabes (los parámetros de un modelo, una función desconocida) como una variable aleatoria, y el aprendizaje como **actualizar creencias** con los datos mediante el teorema de
Bayes. A cambio de especificar un prior, se obtiene algo que los métodos de punto no dan: una **distribución** sobre las posibles respuestas, con su incertidumbre, que se propaga a las predicciones y permite
decidir con criterio cuando hay poco dato o mucho en juego (medicina, finanzas, robótica, experimentos caros). Este nodo recorre la inferencia exacta con priores conjugados, los procesos gaussianos y los dos
grandes métodos aproximados: muestreo (MCMC) e inferencia variacional. Continúa [[ia-aprendizaje-estadistico]] y usa [[mat-estadistica-matematica]] y [[mat-procesos-estocasticos]].

## Objetivos

Al terminar sabrás:

1. Aplicar el teorema de Bayes con priores conjugados y obtener distribuciones a posteriori, intervalos creíbles y predictivas.
2. Comparar modelos con la verosimilitud marginal y el factor de Bayes, conociendo su sensibilidad al prior.
3. Hacer regresión bayesiana y predecir con procesos gaussianos (media e incertidumbre).
4. Muestrear distribuciones a posteriori con MCMC y diagnosticar las cadenas.
5. Aproximar con inferencia variacional y la aproximación de Laplace, y medir la calibración de un modelo.

## Qué debes dominar antes

[[ia-aprendizaje-estadistico]] (máxima verosimilitud, regularización), [[mat-estadistica-matematica]] (distribuciones, estimadores) y [[mat-procesos-estocasticos]] (cadenas de Markov, distribución estacionaria).

> [!question] Test de entrada
> 1. Escribe el teorema de Bayes.
> 2. ¿Qué es una distribución conjugada?
> 3. ¿Qué garantiza una cadena de Markov ergódica?
>
> Respuestas: p(θ | D) = p(D | θ)·p(θ) / p(D); un prior tal que la distribución a posteriori es de la misma familia (Beta con datos binomiales, por ejemplo); que, empiece donde empiece, converge a una única
> distribución estacionaria y los promedios a lo largo de la cadena convergen a las esperanzas bajo ella.

## 1. Bayes y priores conjugados

p(θ | D) ∝ p(D | θ)·p(θ): **a posteriori ∝ verosimilitud × prior**. El denominador, la **verosimilitud marginal** p(D) = ∫ p(D | θ) p(θ) dθ, normaliza y sirve para comparar modelos. Con priores conjugados todo
es cerrado:

| Datos | Prior | A posteriori |
|---|---|---|
| k éxitos en n (binomial) | Beta(a, b) | Beta(a + k, b + n − k) |
| recuentos de Poisson x₁…xₙ | Gamma(α, β) | Gamma(α + Σxᵢ, β + n) |
| n normales con σ² conocida, media x̄ | N(μ₀, τ²) | precisión 1/τ² + n/σ²; media = (μ₀/τ² + n·x̄/σ²) / precisión |

La a posteriori es un compromiso entre el prior y los datos, que **dominan** cuando hay muchos (los parámetros del prior actúan como «pseudodatos»). Resúmenes: media, **MAP** (la moda: con prior plano, el
estimador de máxima verosimilitud; con un prior gaussiano sobre los pesos, la regresión con penalización L2), e **intervalos creíbles** (el 95 % de la probabilidad a posteriori; a diferencia del intervalo de
confianza, admite la lectura intuitiva «el parámetro está ahí con probabilidad 0,95»).

**Predictiva a posteriori**: p(x_nuevo | D) = ∫ p(x_nuevo | θ) p(θ | D) dθ. Integra la incertidumbre del parámetro, y por eso es más ancha que «enchufar» la mejor estimación. Con Beta(a, b), la probabilidad de un
éxito más es a/(a + b) y la de dos seguidos a(a + 1)/((a + b)(a + b + 1)).

## 2. Comparar modelos

El **factor de Bayes** BF₁₀ = p(D | M₁) / p(D | M₀) compara cuánto predice cada modelo los datos observados, promediando sobre sus parámetros (Kass y Raftery, 1995). Penaliza automáticamente la complejidad (la
navaja de Occam bayesiana: un modelo flexible reparte su probabilidad entre muchos conjuntos de datos posibles). Para una moneda con p uniforme, la marginal de k caras en n tiradas es 1/(n + 1) para cualquier k.
Ojo: los factores de Bayes son muy sensibles a la anchura de los priores, a diferencia de la a posteriori; en la práctica también se usan la validación cruzada aproximada (PSIS-LOO) y el WAIC.

## 3. Regresión bayesiana y procesos gaussianos

En regresión lineal con prior w ~ N(0, α⁻¹I) y ruido de precisión β, la a posteriori es gaussiana con S = (αI + βΦᵀΦ)⁻¹ y media m = βSΦᵀt (Bishop, cap. 3), y la predictiva tiene varianza 1/β + φ(x)ᵀSφ(x):
la incertidumbre crece lejos de los datos.

Un **proceso gaussiano** (Rasmussen y Williams) es un prior directamente sobre **funciones**: cualquier conjunto finito de valores f(x₁), …, f(xₙ) es gaussiano, con covarianzas dadas por un **núcleo** k(x, x′)
(el RBF exp(−(x − x′)²/2ℓ²) da funciones suaves con escala ℓ). Con observaciones ruidosas (varianza σₙ²), la predicción en x* es

```
media    = k*ᵀ (K + σₙ²I)⁻¹ y
varianza = k(x*, x*) − k*ᵀ (K + σₙ²I)⁻¹ k*
```

Es exacta y da incertidumbre bien calibrada, pero cuesta O(n³); para miles de puntos se usan aproximaciones (puntos inductores). Los hiperparámetros (ℓ, σ_f, σₙ) se ajustan maximizando la verosimilitud marginal.
Es la base de la **optimización bayesiana** de funciones caras (por ejemplo, hiperparámetros).

## 4. MCMC

Cuando la a posteriori no tiene forma cerrada, se construye una **cadena de Markov** cuya distribución estacionaria es ella, y se promedia sobre sus estados.

- **Metropolis-Hastings** (1953, 1970): desde x, proponer x′ ~ q(x′ | x) y aceptar con probabilidad mín(1, p(x′)q(x | x′) / (p(x)q(x′ | x))); solo hace falta p salvo la constante. Con propuesta simétrica, el cociente
  de q desaparece.
- **Gibbs**: muestrear cada variable de su **condicional** dadas las demás (en una normal bivariante de correlación ρ, x | y ~ N(ρy, 1 − ρ²)). Lento cuando las variables están muy correlacionadas.
- **Monte Carlo hamiltoniano** y **NUTS** (Hoffman y Gelman, 2014): usan el gradiente de log p para moverse lejos con alta aceptación; el estándar en Stan y PyMC.
- **Diagnóstico**: descartar el calentamiento, varias cadenas desde puntos distintos, R̂ ≈ 1, **tamaño efectivo de muestra** (las muestras están correlacionadas: el error estándar de Monte Carlo √(var/n) solo vale
  con muestras independientes), y mirar las trazas.

## 5. Inferencia variacional y Laplace

La **inferencia variacional** (Blei et al., 2017) convierte la integración en optimización: se elige una familia q_λ(θ) (por ejemplo, gaussianas independientes, campo medio) y se maximiza la **ELBO**, que
equivale a minimizar KL(q ‖ p(θ | D)). Es rápida y escala a millones de datos (con gradientes estocásticos), pero tiende a **subestimar la varianza** (la KL en ese sentido evita poner masa donde p no tiene). Es lo
que hace un VAE ([[ia-modelos-generativos]]) con un codificador que amortiza la optimización.

La **aproximación de Laplace** pone una gaussiana en la moda con la curvatura del logaritmo de la a posteriori: varianza = −1/(d² log p/dθ²). Buena cuando la a posteriori es aproximadamente gaussiana (muchos
datos); en distribuciones asimétricas o acotadas, como una Beta con pocos datos, se equivoca de forma visible.

## 6. Incertidumbre en el aprendizaje profundo y calibración

Una red neuronal da probabilidades, pero no necesariamente **calibradas**: Guo et al. (2017) mostraron que las redes modernas suelen ser **demasiado confiadas**. El **error de calibración esperado** (ECE)
agrupa las predicciones por confianza y promedia, pesando por el tamaño de cada grupo, la diferencia entre confianza media y acierto. Remedios: escalado de temperatura (un solo parámetro ajustado en validación),
conjuntos de modelos (*deep ensembles*), dropout en inferencia (MC dropout) y redes bayesianas aproximadas. Las decisiones (diagnósticos, alertas) deben usar probabilidades calibradas.

## 7. Comprobar con un programa

Metropolis para una distribución a posteriori Beta y Gibbs para una normal bivariante, comparados con los valores exactos (datos distintos de los ejercicios; generador congruencial de Exodus para que la
salida sea reproducible):

```python
# Metropolis sobre una Beta a posteriori y Gibbs sobre una normal bivariante, frente a los valores exactos
import math

estado = 2024
def u():
    global estado
    estado = (6364136223846793005 * estado + 1442695040888963407) % 2**64
    return (estado >> 11) / 2**53

def normal():                                     # Box-Muller
    return math.sqrt(-2 * math.log(1 - u())) * math.cos(2 * math.pi * u())

# prior Beta(1, 1) y 12 éxitos en 20 → a posteriori Beta(13, 9)
def log_post(p):
    return -math.inf if not 0 < p < 1 else 12 * math.log(p) + 8 * math.log(1 - p)

p, muestras, aceptadas = 0.5, [], 0
for i in range(60000):
    propuesta = p + 0.1 * normal()
    if math.log(u()) < log_post(propuesta) - log_post(p):
        p, aceptadas = propuesta, aceptadas + 1
    if i >= 10000:                                # descartar el calentamiento
        muestras.append(p)
media = sum(muestras) / len(muestras)
desv = math.sqrt(sum((m - media) ** 2 for m in muestras) / len(muestras))
a, b = 13, 9
print("Metropolis: media %.3f (exacta %.3f), desv. típica %.3f (exacta %.3f), aceptación %.2f"
      % (media, a / (a + b), desv, math.sqrt(a * b / ((a + b) ** 2 * (a + b + 1))), aceptadas / 60000))

rho, x, y, xs, ys = 0.6, 0.0, 0.0, [], []
for i in range(40000):
    x = rho * y + math.sqrt(1 - rho ** 2) * normal()
    y = rho * x + math.sqrt(1 - rho ** 2) * normal()
    if i >= 1000:
        xs.append(x); ys.append(y)
n = len(xs)
mx, my = sum(xs) / n, sum(ys) / n
cov = sum((xi - mx) * (yi - my) for xi, yi in zip(xs, ys)) / n
vx, vy = sum((xi - mx) ** 2 for xi in xs) / n, sum((yi - my) ** 2 for yi in ys) / n
print("Gibbs: correlación estimada %.3f (exacta %.3f)" % (cov / math.sqrt(vx * vy), rho))
```

Salida:

```
Metropolis: media 0.590 (exacta 0.591), desv. típica 0.102 (exacta 0.103), aceptación 0.72
Gibbs: correlación estimada 0.602 (exacta 0.600)
```

## 8. Errores típicos

- Priores «no informativos» que en realidad informan mucho (una uniforme en una escala no lo es en otra).
- Leer un intervalo de confianza como si fuera creíble, o al revés.
- Factores de Bayes con priores vagos arbitrarios (cambian el resultado a voluntad).
- Usar las muestras de MCMC sin descartar el calentamiento ni comprobar la convergencia; calcular errores como si fueran independientes.
- Fiarse de la varianza de la inferencia variacional de campo medio.
- Tomar las probabilidades de una red como calibradas sin medirlo.

## 9. Resumen

- A posteriori ∝ verosimilitud × prior; conjugados Beta-binomial, Gamma-Poisson, normal-normal; media, MAP, intervalos creíbles; predictiva a posteriori.
- Verosimilitud marginal y factor de Bayes (Occam automático, sensible al prior); LOO y WAIC.
- Regresión bayesiana (S = (αI + βΦᵀΦ)⁻¹, m = βSΦᵀt); procesos gaussianos (media y varianza con el núcleo), optimización bayesiana.
- MCMC: Metropolis-Hastings, Gibbs, HMC/NUTS; diagnóstico (calentamiento, R̂, tamaño efectivo).
- Inferencia variacional (ELBO, subestima la varianza) y Laplace (curvatura en la moda).
- Calibración: ECE, escalado de temperatura, conjuntos de modelos.

## Repaso: lo que debe quedarte dentro de un mes

1. Beta(a, b) + k de n = Beta(a + k, b + n − k).
2. La predictiva integra la incertidumbre del parámetro.
3. Un proceso gaussiano es una distribución sobre funciones definida por su núcleo.
4. Metropolis solo necesita p salvo constante.
5. Una probabilidad que no está calibrada no sirve para decidir.

## Siguiente

`cua-algoritmos-correccion-errores` y los proyectos de la rama (`proy-ia-mini-gpt`, `proy-ia-aprendizaje-refuerzo`).
