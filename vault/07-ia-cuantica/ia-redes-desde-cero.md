---
id: ia-redes-desde-cero
title: "Redes neuronales desde cero: pasada hacia delante por lotes, retropropagación matricial, softmax y entropía cruzada estables, comprobación de gradientes, inicialización, normalización, optimizadores y presupuesto de cálculo"
area: ia-cuantica
trunk_level: 15
prerequisites: [ia-redes-profundas, ia-python-datos, mat-calculo-multivariable]
academic_sources:
  - "Goodfellow, I.; Bengio, Y.; Courville, A. Deep Learning. MIT Press, 2016 (caps. 6 y 8; deeplearningbook.org); Rumelhart, D.; Hinton, G.; Williams, R. Learning representations by back-propagating errors. Nature 323, 1986."
  - "Glorot, X.; Bengio, Y. Understanding the difficulty of training deep feedforward neural networks. AISTATS 2010; He, K. et al. Delving Deep into Rectifiers. ICCV 2015."
  - "Ioffe, S.; Szegedy, C. Batch Normalization. ICML 2015; Loshchilov, I.; Hutter, F. SGDR: Stochastic Gradient Descent with Warm Restarts. ICLR 2017; Kingma, D.; Ba, J. Adam. ICLR 2015."
  - "Nielsen, M. Neural Networks and Deep Learning. Determination Press, 2015 (neuralnetworksanddeeplearning.com)."
exercises:
  - id: formas-de-los-gradientes
    tier: 1
    prompt: |
      Un MLP procesa lotes de 32 ejemplos de 784 rasgos: H = ReLU(X·W₁) con W₁ de 784 × 128, y salidas Y = H·W₂ con W₂ de 128 × 10. ¿Qué forma tienen ∂L/∂W₂ y ∂L/∂H?

      Respuesta: `filas,columnas;filas,columnas`.
    answers: ["sha256:dbcfb06dcb556738b8eab4cfeb96174cf8cb384234fda3b40143d0231e0c806a"]
  - id: gradiente-de-softmax-con-entropia
    tier: 2
    prompt: |
      Para los logits z = (2, 1, 0) y la clase correcta 0, ¿cuál es el gradiente de la entropía cruzada de softmax respecto a cada logit?

      Respuesta: las tres componentes con 3 decimales, separadas por `;`.
    answers: ["sha256:4080df1c4ddcfd83139bee93977cc3515edbe6151e20ab7a31fbfe4c31edb02c"]
  - id: log-suma-exp
    tier: 2
    prompt: |
      Calcula log(e¹⁰⁰⁰ + e¹⁰⁰¹ + e¹⁰⁰²) sin desbordar (restando el máximo antes de exponenciar).

      Respuesta: con 4 decimales.
    answers: ["sha256:eefe2a259aaf9a4a604edd60e1d2e847b6a49803a338048d92d4f99d2d687e95"]
  - id: comprobacion-de-gradientes
    tier: 2
    prompt: |
      Para f(w) = w³ en w = 2 con h = 10⁻³, ¿qué dan la diferencia centrada (f(w + h) − f(w − h))/(2h) y la progresiva (f(w + h) − f(w))/h? (Compáralas con la derivada exacta, 12.)

      Respuesta: `centrada;progresiva` con 6 decimales.
    answers: ["sha256:d0665300d3580b43fb889ec4534a70c8a41e3cf6e08807ea67b94f71550d798e"]
  - id: xor-con-relu
    tier: 1
    prompt: |
      Una red con dos neuronas ocultas ReLU, h₁ = ReLU(x₁ + x₂) y h₂ = ReLU(x₁ + x₂ − 1), y salida h₁ − 2h₂, ¿qué devuelve para (0, 0), (0, 1), (1, 0) y (1, 1)?

      Respuesta: los cuatro valores separados por espacios.
    answers: ["sha256:a5c3dd48facf21ed5f916d0ae979091fead570e6aea6c1d8038d1f68b26fa51f"]
  - id: gradiente-que-se-desvanece
    tier: 2
    prompt: |
      La derivada de la sigmoide vale como mucho 1/4. Si el gradiente atraviesa 10 sigmoides en su punto más favorable (y pesos de valor 1), ¿por qué factor queda multiplicado? Da su log₁₀.

      Respuesta: con 2 decimales.
    answers: ["sha256:25bb5d028c89d2f8af6ec06039c247eb54157a4af1b9c2615d14c568930b5d01"]
  - id: inicializacion-de-he-y-de-glorot
    tier: 1
    prompt: |
      ¿Qué desviación típica da la inicialización de He (normal) para una capa con 512 entradas, y qué límite tiene la uniforme de Glorot (Xavier) para 512 entradas y 256 salidas?

      Respuesta: `he;glorot` con 4 decimales.
    answers: ["sha256:3ebf0fb733aa0f2123a39377c3110a838aea5cf71acdb906ed1608499472a0bd"]
  - id: pasos-de-entrenamiento
    tier: 1
    prompt: |
      Con 50 000 ejemplos, lotes de 128 (el último lote incompleto se usa) y 20 épocas, ¿cuántos pasos de optimización hay por época y en total?

      Respuesta: `por_epoca;total`.
    answers: ["sha256:0e3d91ebf8ea7fde624d61c45fd3b6ebe6f1641c1d876e7ef4162f93b295b473"]
  - id: retropropagacion-a-mano
    tier: 3
    prompt: |
      Red 2-2-1 con sigmoides en las dos capas y pérdida L = ½(salida − y)². Entrada x = (0.10, 0.20), objetivo y = 0.25, W₁ = [[0.15, 0.20], [0.25, 0.30]] (fila j = pesos de la neurona oculta j), b₁ = (0.35, 0.35), W₂ = (0.40, 0.45), b₂ = 0.60. ¿Cuánto valen ∂L/∂W₂[0] y ∂L/∂W₁[0][0]?

      Respuesta: `primero;segundo` con 6 decimales.
    answers: ["sha256:bb173f476d1db9cdd97dc3f70d0d0e22aec7331bfb99e5f209b2e00d3c85c1bc"]
  - id: decaimiento-coseno
    tier: 1
    prompt: |
      Con un ritmo inicial de 0,1 y decaimiento coseno sin calentamiento, lr(t) = 0,1 · ½(1 + cos(πt/T)), ¿qué ritmo hay en el paso 250 de T = 1000?

      Respuesta: con 4 decimales.
    answers: ["sha256:fa0d2ad5c9bd3a42058d81e133a36f7d4d5e9e3e9e0b756b5cd8d11878f16dcc"]
  - id: normalizacion-por-lotes
    tier: 2
    prompt: |
      La normalización por lotes resta la media del lote y divide entre √(varianza + ε) (varianza con n en el denominador, ε = 10⁻⁵). Con el lote (1, 2, 3, 4, 10), ¿qué valor normalizado recibe el 10?

      Respuesta: con 4 decimales.
    answers: ["sha256:e587e96a682e2f954d46dc47b65197764a959835a417e176dcb3efcb99dc3578"]
  - id: coste-de-una-capa-densa
    tier: 2
    prompt: |
      Una capa densa de 784 a 256 procesa un lote de 64. Contando una suma y una multiplicación como dos operaciones, ¿cuántas hace la pasada hacia delante del producto de matrices, y cuántas en total si la retropropagación cuesta el doble que la pasada hacia delante?

      Respuesta: `adelante;total`.
    answers: ["sha256:ce5972dfc0ee52ed68e596f16e1b5ebc96b361d4ebaecb08e5feb14f4be42b02"]
  - id: descenso-con-momento
    tier: 2
    prompt: |
      Minimiza f(w) = w² desde w = 1 con SGD con momento (v ← 0,9·v + f′(w); w ← w − 0,1·v; v empieza en 0). ¿Cuánto vale w tras 3 pasos?

      Respuesta: con 4 decimales.
    answers: ["sha256:d3d98d340645c95ce85f9b0b41b9a2fefa40408121bdecb64bf97afa52c934b4"]
  - id: gradiente-logistica
    tier: 3
    type: codigo
    language: python
    prompt: |
      **Ejercicio de código (regresión logística a mano).** Lee de la entrada estándar: una línea `n m`; después $n$ filas
      con $m$ características y la etiqueta $y \in \{0, 1\}$; y al final los pesos $w_1, \dots, w_m$ y el sesgo $b$. Con
      $z_i = w\cdot x_i + b$, calcula la **pérdida logística media**
      $$
      L = \frac1n\sum_{i=1}^n \bigl[\log\bigl(1 + e^{z_i}\bigr) - y_i z_i\bigr]
      $$
      y su gradiente $\partial L/\partial w_j = \frac1n\sum_i (\sigma(z_i) - y_i)\,x_{ij}$, $\partial L/\partial b = \frac1n\sum_i (\sigma(z_i) - y_i)$.
      Escribe, con 6 decimales:

      ```
      perdida: <L>
      grad_w: <g_1> <g_2> … <g_m>
      grad_b: <g_b>
      ```

      Hay casos con $\lvert z\rvert = 800$: si calculas $e^{800}$ directamente se desborda. Usa
      $\log(1 + e^{z}) = \max(z, 0) + \log\bigl(1 + e^{-\lvert z\rvert}\bigr)$ y una sigmoide estable. Antes de probar,
      comprueba tu gradiente con diferencias centrales en un caso pequeño (es lo que harías en un proyecto real).
    template: |
      import math
      import sys


      def main():
          datos = sys.stdin.read().split()
          # n ejemplos, m características; después n filas «x_1 … x_m y»; al final «w_1 … w_m b».
          # Calcula la pérdida logística media y su gradiente, de forma estable.
          ...


      main()
    cases: [{"name":"un-ejemplo","stdin":"1 1\n2 1\n0.5 0.1\n"},{"name":"lote","stdin":"4 2\n1 2 1\n-1 0.5 0\n0.3 -2 1\n2 2 0\n0.2 -0.4 0.05\n"},{"name":"pesos-cero","stdin":"3 3\n1 0 0 1\n0 1 0 0\n0 0 1 1\n0 0 0 0\n"},{"name":"muy-seguro-y-acierta","stdin":"1 1\n1 1\n800 0\n"},{"name":"muy-seguro-y-falla","stdin":"1 1\n1 0\n800 0\n"},{"name":"negativo-extremo","stdin":"2 1\n-1 1\n1 0\n700 0\n"}]
    answers: ["sha256:024a1e6b4889b25fa807359a67aba844b931744128fc24ca787fcb024dd0aae9"]
---

[[ia-redes-profundas]] explica qué es una red neuronal y por qué funciona; este nodo la **construye** con las propias manos, sin bibliotecas que oculten nada: matrices, derivadas y bucles. Quien ha
escrito una vez la retropropagación de un perceptrón multicapa entiende de verdad qué hace `loss.backward()`, por qué un entrenamiento diverge, por qué una pérdida da NaN o por qué la red no aprende, y
puede depurar cualquier marco de trabajo. Es el puente entre la teoría y [[proy-ia-autograd]], y usa el cálculo de [[mat-calculo-multivariable]] y los arrays de [[ia-python-datos]].

## Objetivos

Al terminar sabrás:

1. Escribir la pasada hacia delante de un MLP para un lote entero con productos de matrices, y razonar con las formas.
2. Derivar y programar la retropropagación en forma matricial, incluida la combinación softmax + entropía cruzada.
3. Hacer los cálculos numéricamente estables (log-suma-exp) y comprobar los gradientes con diferencias finitas.
4. Elegir inicialización, normalización, optimizador y calendario de ritmo de aprendizaje con criterio.
5. Estimar el coste en operaciones y memoria de entrenar una red.

## Qué debes dominar antes

[[ia-redes-profundas]] (capas, retropropagación conceptual), [[ia-python-datos]] (NumPy) y [[mat-calculo-multivariable]] (regla de la cadena, gradientes, jacobianos).

> [!question] Test de entrada
> 1. Si y = A·x con A de 3 × 4, ¿qué forma tiene ∂y/∂x?
> 2. ¿Por qué no se inicializan todos los pesos a cero?
> 3. ¿Qué es una época?
>
> Respuestas: 3 × 4 (es la propia A); porque todas las neuronas de una capa calcularían lo mismo y recibirían el mismo gradiente: la simetría nunca se rompe; una pasada completa por todos los ejemplos de
> entrenamiento.

## 1. Pasada hacia delante por lotes

Con un lote X de B ejemplos (forma B × d) y capas Hₗ = σ(Hₗ₋₁·Wₗ + bₗ), cada capa es **un producto de matrices** de (B × dₗ₋₁) por (dₗ₋₁ × dₗ) más un sesgo que se difunde por filas. Trabajar por lotes
es lo que hace rápidas a las redes: el producto de matrices aprovecha la caché y las unidades vectoriales ([[sys-optimizacion-rendimiento]]). Hay que **guardar** las activaciones de cada capa: la
retropropagación las necesita, y son la mayor parte de la memoria de entrenamiento.

Regla de oro para no perderse: **el gradiente de algo tiene la misma forma que ese algo**. ∂L/∂W tiene la forma de W; ∂L/∂H, la de H.

## 2. Retropropagación matricial

Para una capa Z = H·W + b con H de B × m y W de m × n, conocido G = ∂L/∂Z (B × n):

```
∂L/∂W = Hᵀ · G          (m × B)·(B × n) = m × n
∂L/∂b = suma de G por filas   (n)
∂L/∂H = G · Wᵀ          (B × n)·(n × m) = B × m
```

y la activación elemento a elemento multiplica: ∂L/∂Z = ∂L/∂A ⊙ σ′(Z) (para ReLU, 1 donde Z > 0 y 0 donde no). Cada fórmula se puede **deducir de las formas**: solo hay una manera de combinar las matrices
que dé la forma correcta. La salida softmax con entropía cruzada tiene una derivada especialmente simple: si p = softmax(z) y la clase correcta es y (en codificación *one-hot*), ∂L/∂z = p − y, dividido
entre B si la pérdida es la media del lote. Por eso se implementan **juntas**: más rápido y más estable.

## 3. Estabilidad numérica

- **log-suma-exp**: log Σ eᶻⁱ desborda para z grandes; se calcula como m + log Σ e^(zᵢ − m) con m = máx zᵢ. Softmax igual: restar el máximo antes de exponenciar no cambia el resultado y evita infinitos.
- **Entropía cruzada** desde los logits (`log_softmax` + NLL), nunca `log(softmax(z))` en dos pasos: si una probabilidad sale exactamente 0, el logaritmo es −∞.
- **Sigmoide** con la entropía cruzada binaria fusionadas por la misma razón (`BCEWithLogits`).
- **NaN**: casi siempre un ritmo de aprendizaje demasiado alto, una división entre una varianza nula o un logaritmo de cero. Detéctalo pronto (comprobar `isfinite` en la pérdida) y busca la primera capa
  donde aparece.

## 4. Comprobación de gradientes

Antes de confiar en una retropropagación escrita a mano se compara con **diferencias finitas**: (f(w + h) − f(w − h))/(2h). La diferencia **centrada** tiene error O(h²); la progresiva, O(h). Con h del
orden de 10⁻⁵ en doble precisión y el **error relativo** |a − n| / máx(|a|, |n|), un valor por debajo de 10⁻⁷ indica que está bien y uno por encima de 10⁻³, que algo falla. Se comprueba en una red
pequeña, en doble precisión, sin dropout (que es aleatorio) y lejos de los puntos donde la función no es derivable (el 0 de ReLU).

## 5. Inicializar, normalizar y que el gradiente llegue

Si la varianza de las activaciones crece o decrece en cada capa, en una red profunda explota o se desvanece. La derivada de la sigmoide vale como mucho 1/4, así que muchas sigmoides seguidas encogen el
gradiente exponencialmente; ReLU no tiene ese problema en su parte positiva.

- **Glorot/Xavier** (2010) para tanh y sigmoides: varianza 2/(fan_in + fan_out); en versión uniforme, límite √(6/(fan_in + fan_out)).
- **He** (2015) para ReLU: varianza 2/fan_in (ReLU anula la mitad de las entradas, y el factor 2 lo compensa).
- **Normalización por lotes** (Ioffe y Szegedy, 2015): en entrenamiento, resta la media del lote y divide entre √(varianza + ε), y luego escala y desplaza con parámetros aprendidos (γ, β); en inferencia
  usa medias móviles guardadas. **LayerNorm** normaliza por ejemplo en vez de por lote (la de los transformers). **Conexiones residuales** (x + F(x)) dan un camino directo al gradiente.

## 6. Optimizadores y ritmo de aprendizaje

- **SGD** con **momento**: v ← β·v + g; w ← w − η·v. Acumula la dirección consistente y amortigua las oscilaciones.
- **Adam** (Kingma y Ba): medias móviles del gradiente y de su cuadrado, con corrección del sesgo inicial; **AdamW** separa el decaimiento de pesos del gradiente.
- **Calendarios**: calentamiento lineal los primeros pasos y después decaimiento **coseno** (Loshchilov y Hutter), η(t) = η₀·½(1 + cos(πt/T)), o escalonado. El ritmo es el hiperparámetro más
  importante: búscalo en escala logarítmica.
- **Pasos**: con N ejemplos y lotes de B, una época son ⌈N/B⌉ pasos (o ⌊N/B⌋ si se descarta el último lote incompleto).

## 7. Presupuesto de cálculo

Un producto de matrices de (B × m) por (m × n) cuesta unas 2·B·m·n operaciones (una multiplicación y una suma por término). La retropropagación necesita dos productos de ese tamaño por capa (para ∂L/∂W
y ∂L/∂H), así que un paso de entrenamiento cuesta unas **tres veces** la pasada hacia delante. Para un modelo con P parámetros entrenado con D ejemplos (o *tokens*), el coste total aproximado es
**6·P·D** operaciones, la estimación que se usa para planificar entrenamientos grandes. La memoria la dominan los parámetros, sus gradientes, el estado del optimizador (Adam guarda dos números más por
parámetro) y las activaciones guardadas.

## 8. Comprobar con un programa

Un MLP 2-4-1 escrito sin bibliotecas, con retropropagación a mano, comprobación de gradientes y entrenamiento sobre XOR (pesos iniciales del generador congruencial de Exodus):

```python
# MLP 2-4-1 (tanh y sigmoide) con retropropagación a mano, comprobación de gradientes y entrenamiento en XOR
import math

estado = 12345
def u():
    global estado
    estado = (6364136223846793005 * estado + 1442695040888963407) % 2**64
    return (estado >> 11) / 2**53

H = 4
W1 = [[(u() * 2 - 1) for _ in range(2)] for _ in range(H)]
b1 = [0.0] * H
W2 = [(u() * 2 - 1) for _ in range(H)]
b2 = 0.0
datos = [((0, 0), 0), ((0, 1), 1), ((1, 0), 1), ((1, 1), 0)]
sig = lambda z: 1 / (1 + math.exp(-z))

def adelante(x):
    h = [math.tanh(W1[j][0] * x[0] + W1[j][1] * x[1] + b1[j]) for j in range(H)]
    p = sig(sum(W2[j] * h[j] for j in range(H)) + b2)
    return h, p

def perdida():
    total = 0.0
    for x, y in datos:
        _, p = adelante(x)
        total -= y * math.log(p) + (1 - y) * math.log(1 - p)
    return total / len(datos)

def gradientes():
    gW1 = [[0.0, 0.0] for _ in range(H)]; gb1 = [0.0] * H; gW2 = [0.0] * H; gb2 = 0.0
    for x, y in datos:
        h, p = adelante(x)
        dz = (p - y) / len(datos)                 # sigmoide + entropía cruzada binaria: p − y
        for j in range(H):
            gW2[j] += dz * h[j]
            dh = dz * W2[j] * (1 - h[j] ** 2)     # derivada de tanh
            gW1[j][0] += dh * x[0]; gW1[j][1] += dh * x[1]; gb1[j] += dh
        gb2 += dz
    return gW1, gb1, gW2, gb2

# comprobación de gradientes en un peso
gW1, _, _, _ = gradientes()
h = 1e-5
W1[2][1] += h; mas = perdida(); W1[2][1] -= 2 * h; menos = perdida(); W1[2][1] += h
numerico = (mas - menos) / (2 * h)
print("error relativo del gradiente: %.1e" % (abs(numerico - gW1[2][1]) / max(abs(numerico), abs(gW1[2][1]))))

eta = 0.5
for paso in range(1, 3001):
    gW1, gb1, gW2, gb2 = gradientes()
    for j in range(H):
        W1[j][0] -= eta * gW1[j][0]; W1[j][1] -= eta * gW1[j][1]; b1[j] -= eta * gb1[j]; W2[j] -= eta * gW2[j]
    b2 -= eta * gb2
    if paso in (1, 300, 3000):
        print("paso %4d  pérdida %.4f" % (paso, perdida()))
print("predicciones:", [round(adelante(x)[1], 3) for x, _ in datos])
```

Salida:

```
error relativo del gradiente: 5.1e-12
paso    1  pérdida 0.7515
paso  300  pérdida 0.0307
paso 3000  pérdida 0.0010
predicciones: [0.001, 0.999, 0.999, 0.001]
```

## 9. Errores típicos

- Confundir filas y columnas (ejemplos y rasgos); olvidar dividir entre el tamaño del lote.
- `log(softmax(z))` en dos pasos; exponenciar sin restar el máximo.
- No comprobar los gradientes; comprobarlos en `float32` o con dropout activo.
- Inicializar a cero, o con una escala que no corresponde a la activación.
- Confundir el modo de entrenamiento y el de inferencia de BatchNorm y dropout.
- Ritmo de aprendizaje mal elegido (y no mirar la curva de pérdida).

## 10. Resumen

- Por lotes: cada capa es un producto de matrices; el gradiente tiene la forma de lo derivado.
- ∂W = Hᵀ·G, ∂H = G·Wᵀ, ∂b = suma; softmax + entropía cruzada: p − y.
- log-suma-exp; pérdidas desde los logits; diferencias centradas y error relativo.
- Glorot para tanh/sigmoide, He para ReLU; BatchNorm, LayerNorm, residuales.
- Momento, Adam/AdamW, calentamiento y coseno; ⌈N/B⌉ pasos por época.
- Paso de entrenamiento ≈ 3 × pasada hacia delante; entrenamiento ≈ 6·P·D operaciones.

## Repaso: lo que debe quedarte dentro de un mes

1. Las formas deciden las fórmulas.
2. p − y: el gradiente de softmax con entropía cruzada.
3. Resta el máximo antes de exponenciar.
4. Comprueba los gradientes con diferencias centradas antes de entrenar.
5. Un paso de entrenamiento cuesta unas tres pasadas hacia delante.

## Siguiente

[[proy-ia-autograd]] (generalizarlo a un motor de diferenciación automática) e `ia-pytorch` (hacer lo mismo con una biblioteca profesional).
