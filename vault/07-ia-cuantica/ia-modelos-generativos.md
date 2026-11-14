---
id: ia-modelos-generativos
title: "Modelos generativos profundos: verosimilitud y variables latentes, autoencoders variacionales (ELBO), redes generativas antagónicas, flujos normalizadores, modelos de difusión y de puntuación, guía y evaluación (FID)"
area: ia-cuantica
trunk_level: 17
prerequisites: [ia-pytorch, mat-probabilidad, mat-teoria-informacion]
academic_sources:
  - "Kingma, D. P.; Welling, M. Auto-Encoding Variational Bayes. ICLR 2014; Goodfellow, I. et al. Generative Adversarial Nets. NeurIPS 2014; Rezende, D.; Mohamed, S. Variational Inference with Normalizing Flows. ICML 2015; Dinh, L. et al. Density estimation using Real NVP. ICLR 2017."
  - "Ho, J.; Jain, A.; Abbeel, P. Denoising Diffusion Probabilistic Models. NeurIPS 2020; Song, Y. et al. Score-Based Generative Modeling through Stochastic Differential Equations. ICLR 2021; Ho, J.; Salimans, T. Classifier-Free Diffusion Guidance. arXiv:2207.12598, 2022."
  - "Heusel, M. et al. GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium (FID). NeurIPS 2017."
  - "Prince, S. J. D. Understanding Deep Learning. MIT Press, 2023 (caps. 14-18); Murphy, K. P. Probabilistic Machine Learning: Advanced Topics. MIT Press, 2023."
exercises:
  - id: kl-del-vae
    tier: 2
    prompt: |
      En un VAE, el codificador da para un dato q(z|x) = N(1; 0,5²) en una dimensión y el prior es N(0, 1). ¿Cuánto vale el término KL(q ‖ p) de la ELBO?

      Respuesta: con 4 decimales.
    answers: ["sha256:1948422b9cdf2f8ff4e22e299a31337c6b0238d73bac1afb44fbca06b7f6e8c9"]
  - id: reparametrizacion
    tier: 1
    prompt: |
      Con el truco de reparametrización, z = μ + σ·ε. Si μ = 1, σ = 0,5 y se muestrea ε = −1,2, ¿qué z sale?

      Respuesta: con 4 decimales.
    answers: ["sha256:f3e360d89952f40d3b79d0b07dd0b94f1cbf9017cba5d2a5f8128e4146d6e3c1"]
  - id: discriminador-optimo
    tier: 2
    prompt: |
      Si los datos siguen N(0, 1) y el generador produce N(1, 1), el discriminador óptimo de una GAN es D*(x) = p_datos(x) / (p_datos(x) + p_gen(x)). ¿Cuánto vale en x = 0,5 y en x = 0?

      Respuesta: `primero;segundo` con 4 decimales.
    answers: ["sha256:e1f21de0b5dcf259d3b66c12d4d83c9d66914a07b1b83309e3e09ca74e86c9b8"]
  - id: divergencia-de-jensen-shannon
    tier: 2
    prompt: |
      ¿Cuánto vale la divergencia de Jensen-Shannon, en bits, entre (0,5; 0,5) y (0,9; 0,1)?

      Respuesta: con 4 decimales.
    answers: ["sha256:a96d02b6d5f0296a550030bf21ea282311b6524480a3da7d33fbcff80010d2e0"]
  - id: cambio-de-variable
    tier: 2
    prompt: |
      Un flujo normalizador transforma z ~ N(0, 1) en x = 2z + 1. Por el cambio de variable, ¿cuánto vale log p(x) en x = 2 (logaritmo natural)?

      Respuesta: con 4 decimales.
    answers: ["sha256:b5398c2f15ca9210851e6b118e228fb4805a01c0ffa69b86f4eeae24bf8bbde6"]
  - id: proceso-de-difusion
    tier: 3
    prompt: |
      Un DDPM usa T = 1000 pasos con β creciendo linealmente de 10⁻⁴ a 0,02 (β₁ = 10⁻⁴, β₁₀₀₀ = 0,02) y ᾱₜ = Π(1 − βₛ). ¿Cuánto vale ᾱ₅₀₀, y qué xₜ da x_t = √ᾱ·x₀ + √(1 − ᾱ)·ε con x₀ = 1 y ε = 0,5 en t = 500?

      Respuesta: `alfa;x` (alfa en notación científica con 4 decimales, como `1.2345e-01`; x con 4 decimales).
    answers: ["sha256:517aea1b9d664422f7474ffb53bccadbd48baa19404b40567521a072d69df1e0"]
  - id: fid
    tier: 3
    prompt: |
      La FID entre dos gaussianas es ‖μ₁ − μ₂‖² + tr(Σ₁ + Σ₂ − 2(Σ₁Σ₂)^½). ¿Cuánto vale con μ₁ = (0, 0), Σ₁ = [[1; 0,5], [0,5; 2]], μ₂ = (1, 1) y Σ₂ = [[2, 0], [0, 1]]?

      Respuesta: con 4 decimales.
    answers: ["sha256:2bad8b1220f6bdbfc48ceb71620b991f65baa9ef4bea5e6b42c306b625fc31a6"]
  - id: bits-por-dimension
    tier: 1
    prompt: |
      Un modelo autorregresivo asigna a una imagen de 32 × 32 × 3 una log-verosimilitud negativa de 3000 nats. ¿Cuántos bits por dimensión son?

      Respuesta: con 4 decimales.
    answers: ["sha256:bb15229ece67a15ba594b0a759aaceaeb237fab9d5cc26725dd5cefb96b86cc1"]
  - id: funcion-de-puntuacion
    tier: 2
    prompt: |
      ¿Cuánto vale la puntuación (*score*) ∇ₓ log p(x) de una N(0, 2²) en x = 2?

      Respuesta: con 4 decimales.
    answers: ["sha256:1b07b0cffa0b3f596b5e048b0115168886cc5183dd518655b5515ee5dddac6d1"]
  - id: guia-sin-clasificador
    tier: 2
    prompt: |
      Con guía sin clasificador, ε̃ = (1 + w)·ε_condicionado − w·ε_incondicionado. Con w = 2, ε_condicionado = 0,3 y ε_incondicionado = 0,1, ¿qué ε̃ se usa?

      Respuesta: con 4 decimales.
    answers: ["sha256:973b372a514f91db8219fef585cdf81b09196afd7948f5fb1e29c2016dd995a0"]
  - id: verosimilitud-de-un-flujo
    tier: 3
    prompt: |
      Un flujo de una capa lleva x a z = f(x) con log|det ∂f/∂x| = 2·0,1 en ese punto, y la base es N(0, 1). Si z = 1,5, ¿cuánto vale log p(x) = log N(z) + log|det|?

      Respuesta: con 4 decimales.
    answers: ["sha256:204c87e63fe7b6db405184e620e513444a220bf199d22344c101a5b1f9f76966"]
---

Un modelo **discriminativo** aprende a decidir (¿es un gato?); uno **generativo** aprende la distribución de los datos y puede **producir** ejemplos nuevos: imágenes, sonido, moléculas, texto. Las familias
modernas atacan el mismo problema, aprender p(x) en espacios de miles o millones de dimensiones, con compromisos distintos entre calidad de las muestras, velocidad, estabilidad del entrenamiento y posibilidad de
evaluar la verosimilitud. Este nodo explica las cuatro grandes (VAE, GAN, flujos y difusión) desde sus fundamentos probabilísticos, cómo se condicionan y cómo se evalúan. Usa [[mat-probabilidad]],
[[mat-teoria-informacion]] e [[ia-pytorch]]; los modelos autorregresivos de texto están en `ia-transformers-llm`.

## Objetivos

Al terminar sabrás:

1. Plantear el aprendizaje generativo como máxima verosimilitud y explicar el papel de las variables latentes.
2. Derivar la ELBO de un VAE, su término KL y el truco de reparametrización.
3. Explicar el juego de una GAN, su discriminador óptimo y sus dificultades.
4. Usar el cambio de variable de los flujos normalizadores.
5. Describir los modelos de difusión (proceso directo, objetivo, muestreo, puntuación, guía) y evaluar con FID y bits por dimensión.

## Qué debes dominar antes

[[mat-probabilidad]] (densidades, cambio de variable), [[mat-teoria-informacion]] (entropía, divergencia KL) e [[ia-pytorch]].

> [!question] Test de entrada
> 1. ¿Qué mide la divergencia KL entre dos distribuciones?
> 2. Si X ~ N(0, 1), ¿qué distribución sigue 3X + 2?
> 3. ¿Qué es la máxima verosimilitud?
>
> Respuestas: cuánto se pierde (en nats o bits) al usar q para describir datos de p; no es simétrica y es 0 solo si son iguales; N(2, 9); elegir los parámetros que hacen más probables los datos observados,
> equivalente a minimizar la KL entre la distribución de los datos y la del modelo.

## 1. Verosimilitud y variables latentes

Entrenar un modelo generativo por **máxima verosimilitud** es minimizar KL(p_datos ‖ p_θ). Los **modelos autorregresivos** factorizan p(x) = Π p(xᵢ | x<ᵢ) y dan la verosimilitud exacta (se mide en **bits por
dimensión**: −log₂ p(x) dividido entre el número de componentes), pero generan en serie. Los modelos con **variables latentes** suponen que cada dato sale de un código oculto z: p(x) = ∫ p(x|z) p(z) dz, una
integral intratable en general.

## 2. Autoencoders variacionales

El VAE (Kingma y Welling, 2014) aproxima la a posteriori con un **codificador** q_φ(z|x) (normalmente gaussiano con media y varianza que da una red) y maximiza una cota inferior de la log-verosimilitud, la
**ELBO**:

```
log p(x) ≥ E_q[log p_θ(x|z)] − KL(q_φ(z|x) ‖ p(z))
```

El primer término es la reconstrucción; el segundo empuja los códigos hacia el prior N(0, I), y para gaussianas tiene forma cerrada: KL(N(μ, σ²) ‖ N(0, 1)) = ½(μ² + σ² − 1 − ln σ²) por dimensión. Para
retropropagar a través del muestreo se usa el **truco de reparametrización**: z = μ + σ·ε con ε ~ N(0, 1), de modo que la aleatoriedad queda fuera de los parámetros. Los VAE entrenan de forma estable y dan un
espacio latente útil, pero sus muestras de imagen suelen ser borrosas; hoy son sobre todo el **compresor** que usan los modelos de difusión latente.

## 3. Redes generativas antagónicas

Una GAN (Goodfellow et al., 2014) enfrenta un **generador** G(z) y un **discriminador** D(x) que distingue datos reales de generados, en un juego mín-máx. Para un generador fijo, el discriminador óptimo es
D*(x) = p_datos(x) / (p_datos(x) + p_G(x)), y con él el objetivo del generador equivale (salvo constantes) a la **divergencia de Jensen-Shannon** entre datos y modelo. En la práctica el entrenamiento es frágil:
**colapso de modos** (el generador produce poca variedad), oscilaciones, gradientes que se anulan cuando D gana demasiado. Remedios: la pérdida no saturante, Wasserstein con penalización del gradiente,
normalización espectral, y arquitecturas como StyleGAN, con muestras de calidad excelente y muy rápidas de generar (una sola pasada). No dan verosimilitud.

## 4. Flujos normalizadores

Un flujo transforma una base sencilla z ~ N(0, I) en x = f(z) con una f **invertible** y derivable, y calcula la densidad exacta por el **cambio de variable**:

```
log p(x) = log p_Z(f⁻¹(x)) + log |det ∂f⁻¹/∂x|
```

El arte está en diseñar f expresivas con jacobianos de determinante barato: capas de **acoplamiento** (RealNVP, Glow: la mitad de las coordenadas transforma afinmente a la otra mitad, con jacobiano
triangular), flujos autorregresivos, flujos continuos (ecuaciones diferenciales). Dan verosimilitud exacta y muestreo en una pasada, a costa de arquitecturas restringidas; las ideas reaparecen en el
*flow matching* actual.

## 5. Modelos de difusión

Un **proceso directo** fijo añade ruido gaussiano en T pasos con un calendario βₜ, de modo que q(xₜ | x₀) = N(√ᾱₜ·x₀, (1 − ᾱₜ)I) con ᾱₜ = Π(1 − βₛ): se puede saltar directamente a cualquier t. El modelo
aprende el **proceso inverso**: una red ε_θ(xₜ, t) predice el ruido que se añadió, y el objetivo simplificado de DDPM (Ho et al., 2020) es ‖ε − ε_θ(√ᾱₜx₀ + √(1 − ᾱₜ)ε, t)‖² con t al azar. Para generar se
parte de ruido puro y se quita poco a poco. Visión equivalente (Song et al., 2021): predecir el ruido es estimar la **puntuación** ∇ₓ log pₜ(x) (para una gaussiana N(μ, σ²), −(x − μ)/σ²), y el muestreo
resuelve una ecuación diferencial estocástica u ordinaria hacia atrás en el tiempo; DDIM y los resolvedores de alto orden reducen los pasos de cientos a decenas.

- **Condicionar**: con el texto, la clase o una imagen como entrada adicional. La **guía sin clasificador** (Ho y Salimans) entrena el mismo modelo con y sin condición y extrapola:
  ε̃ = (1 + w)·ε(x, c) − w·ε(x); un w mayor da muestras más fieles a la condición y menos variadas.
- **Difusión latente** (Stable Diffusion): el proceso ocurre en el espacio latente de un autoencoder, mucho más barato que en píxeles.
- Hoy dominan en imagen, vídeo y audio, por su estabilidad y calidad; su punto débil es el coste del muestreo.

## 6. Evaluar

- **Verosimilitud** (bits por dimensión) para autorregresivos y flujos; los VAE dan una cota; GAN y difusión, no directamente (la difusión, por la ELBO).
- **FID** (Heusel et al., 2017): se pasan muestras reales y generadas por una red Inception, se ajusta una gaussiana a cada conjunto de rasgos y se calcula la distancia de Fréchet,
  ‖μ₁ − μ₂‖² + tr(Σ₁ + Σ₂ − 2(Σ₁Σ₂)^½). Menor es mejor; depende del número de muestras y de la implementación, así que solo se comparan cifras calculadas igual. Complementos: precisión y exhaustividad de
  distribuciones (calidad frente a variedad), CLIPScore para la fidelidad al texto, y evaluación humana.
- **Memorización**: un modelo generativo puede reproducir ejemplos de entrenamiento casi exactos; hay que comprobarlo (vecinos más cercanos) por privacidad y por derechos de autor.

## 7. Comprobar con un programa

Un DDPM diminuto que aprende una mezcla de dos gaussianas en una dimensión (PyTorch 2.5.1 en CPU; datos distintos de los ejercicios):

```python
# DDPM en 1D: aprender una mezcla de dos gaussianas y generar muestras nuevas
import torch
import torch.nn as nn

torch.manual_seed(0)
T = 100
beta = torch.linspace(1e-4, 0.2, T)
alfa = 1 - beta
abar = torch.cumprod(alfa, 0)

def datos(n):
    lado = torch.randint(0, 2, (n, 1)).float() * 2 - 1           # −1 o +1
    return 2 * lado + 0.3 * torch.randn(n, 1)                       # modos en −2 y +2

red = nn.Sequential(nn.Linear(2, 64), nn.SiLU(), nn.Linear(64, 64), nn.SiLU(), nn.Linear(64, 1))
opt = torch.optim.Adam(red.parameters(), lr=2e-3)
for paso in range(3000):
    x0 = datos(256)
    t = torch.randint(0, T, (256, 1))
    eps = torch.randn_like(x0)
    xt = abar[t].sqrt() * x0 + (1 - abar[t]).sqrt() * eps
    perdida = ((red(torch.cat([xt, t / T], 1)) - eps) ** 2).mean()
    opt.zero_grad(); perdida.backward(); opt.step()

with torch.no_grad():
    x = torch.randn(4000, 1)
    for t in reversed(range(T)):
        eps = red(torch.cat([x, torch.full_like(x, t / T)], 1))
        x = (x - beta[t] / (1 - abar[t]).sqrt() * eps) / alfa[t].sqrt()
        if t > 0:
            x = x + beta[t].sqrt() * torch.randn_like(x)

cerca = lambda c: ((x - c).abs() < 0.9).float().mean().item()
print("pérdida final: %.3f" % perdida.item())
print("fracción cerca de −2: %.2f  cerca de +2: %.2f  entre medias: %.2f" % (cerca(-2), cerca(2), (x.abs() < 1).float().mean().item()))
```

Salida (las muestras se reparten entre los dos modos y casi ninguna cae entre ellos):

```
pérdida final: 0.240
fracción cerca de −2: 0.52  cerca de +2: 0.47  entre medias: 0.00
```

## 8. Errores típicos

- Confundir la ELBO con la verosimilitud; olvidar el término KL o pesarlo sin decirlo (β-VAE).
- Entrenar GAN sin vigilar el colapso de modos (mirar la variedad, no solo una muestra bonita).
- Calcular FID con pocas muestras o con otra implementación y compararla con cifras publicadas.
- Olvidar el término del jacobiano en un flujo.
- En difusión, desajustar el calendario de ruido entre entrenamiento y muestreo.
- No comprobar si el modelo memoriza ejemplos del entrenamiento.

## 9. Resumen

- Máxima verosimilitud = mínima KL; autorregresivos (exactos, en serie) y latentes.
- VAE: ELBO = reconstrucción − KL; KL gaussiana en forma cerrada; reparametrización.
- GAN: juego mín-máx, D* = p_datos/(p_datos + p_G), Jensen-Shannon; colapso de modos; muestras rápidas sin verosimilitud.
- Flujos: cambio de variable con log|det|; acoplamientos.
- Difusión: q(xₜ|x₀) = N(√ᾱₜx₀, (1 − ᾱₜ)I), predecir el ruido, puntuación, guía sin clasificador, difusión latente.
- Evaluación: bits por dimensión, FID (Fréchet entre gaussianas de rasgos), memorización.

## Repaso: lo que debe quedarte dentro de un mes

1. ELBO = reconstrucción − KL al prior.
2. z = μ + σε para poder derivar.
3. El discriminador óptimo es un cociente de densidades.
4. Un flujo paga su densidad con un determinante.
5. Difundir es fácil; lo aprendido es quitar el ruido.

## Siguiente

`ia-bayesiana` (la inferencia variacional en general) y el proyecto `proy-ia-mini-gpt`.
