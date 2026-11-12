---
id: ia-redes-profundas
title: "Redes neuronales profundas"
area: ia-cuantica
trunk_level: 5
prerequisites: [ia-aprendizaje-estadistico]
academic_sources:
  - "Goodfellow, I.; Bengio, Y.; Courville, A. Deep Learning. MIT Press, 2016."
  - "Vaswani, A. et al. Attention Is All You Need. NeurIPS, 2017."
  - "Rumelhart, D. E.; Hinton, G. E.; Williams, R. J. Learning representations by back-propagating errors. Nature, 323, 1986."
  - "Baydin, A. G.; Pearlmutter, B. A.; Radul, A. A.; Siskind, J. M. Automatic Differentiation in Machine Learning: a Survey. Journal of Machine Learning Research, 18(153), 2018."
  - "Kingma, D. P.; Ba, J. Adam: A Method for Stochastic Optimization. ICLR, 2015."
  - "Glorot, X.; Bengio, Y. Understanding the difficulty of training deep feedforward neural networks. AISTATS, 2010."
  - "He, K.; Zhang, X.; Ren, S.; Sun, J. Deep Residual Learning for Image Recognition. CVPR, 2016."
  - "Cybenko, G. Approximation by superpositions of a sigmoidal function. Mathematics of Control, Signals and Systems, 2(4), 1989."
  - "LeCun, Y.; Bottou, L.; Bengio, Y.; Haffner, P. Gradient-based learning applied to document recognition. Proceedings of the IEEE, 86(11), 1998."
  - "Hornik, K. Approximation capabilities of multilayer feedforward networks. Neural Networks, 4(2), 1991."
  - "He, K.; Zhang, X.; Ren, S.; Sun, J. Delving Deep into Rectifiers: Surpassing Human-Level Performance on ImageNet Classification. ICCV, 2015."
  - "Srivastava, N. et al. Dropout: A Simple Way to Prevent Neural Networks from Overfitting. Journal of Machine Learning Research, 15, 2014."
  - "Ba, J. L.; Kiros, J. R.; Hinton, G. E. Layer Normalization. arXiv:1607.06450, 2016."
ctf_flag: "sha256:1b8e42f2f2f8c345b2cdb77ad34718e5cbb6acd7aba56614e86f23e6fb3407b1"
hints:
  - "(a) Una derivada parcial de la pérdida es un producto de derivadas locales a lo largo del camino que va del peso a la salida (regla de la cadena); la derivada de la ReLU es 1 donde la preactivación es positiva y 0 donde no. Comprueba qué neuronas están activas antes de derivar. (b) Adam mantiene dos medias móviles, una del gradiente y otra de su cuadrado, y las corrige por el sesgo de inicio. (c) Las puntuaciones son productos punto escalados por 1/√d_k; el softmax actúa por filas. (d) Cuenta tensor a tensor: una matriz de entrada×salida más su vector de sesgo, y un tensor de pesos compartido solo se cuenta una vez."
  - "Para (a) usa fractions.Fraction (o sympy.Rational) y compara con la derivada numérica por diferencias centrales; el valor a entregar es el valor absoluto del numerador y el denominador de la fracción irreducible. Para (b) escribe el bucle con numpy; para (c), numpy con restar el máximo de cada fila antes de exponenciar; para (d), en PyTorch, sum(p.numel() for p in model.parameters()) cuenta cada parámetro compartido una sola vez."
  - "Goodfellow et al., §6.5 (retropropagación), §8.5 (algoritmos de tasa adaptativa, incluido Adam) / Vaswani et al. §3.2 (atención de producto punto escalado, ecuación 1). Kingma & Ba (2015), algoritmo 1. Documentación: pytorch.org/docs/stable/generated/torch.nn.Module.html#torch.nn.Module.parameters"
---

# Redes neuronales profundas

Una red neuronal es una función paramétrica $f_\theta$ construida como composición de capas
simples, y entrenarla es minimizar una pérdida sobre los datos ([[ia-aprendizaje-estadistico]]).
Tres ideas lo hacen funcionar a gran escala: la **composición** (profundidad), el cálculo
eficiente del gradiente (**retropropagación**) y la optimización estocástica con minilotes. Todo
lo demás son variantes de esas tres.

## 1. Neuronas, capas y capacidad

Una capa densa calcula $\mathbf h = \sigma(W\mathbf x + \mathbf b)$ con $\sigma$ no lineal
aplicada componente a componente. Si $\sigma$ fuese lineal, cualquier composición sería otra
transformación lineal y la profundidad no aportaría nada. Elecciones habituales:

$$
\operatorname{ReLU}(z) = \max(0, z), \qquad
\sigma(z) = \frac{1}{1 + e^{-z}}, \qquad
\tanh z, \qquad
\operatorname{softmax}(\mathbf z)_i = \frac{e^{z_i}}{\sum_j e^{z_j}} .
$$

**Teorema de aproximación universal** (Cybenko, 1989; Hornik, 1991). Una red de una capa oculta
con suficientes neuronas y activación sigmoidal puede aproximar con error arbitrariamente pequeño
cualquier función continua sobre un compacto. Es un teorema de *existencia*: no dice cuántas
neuronas hacen falta, ni que el descenso del gradiente las encuentre, ni que generalicen. La
profundidad importa porque ciertas funciones requieren un número exponencialmente mayor de
neuronas si la red es poco profunda.

## 2. Retropropagación

Sea $L(\theta)$ la pérdida de una red con capas $\mathbf z^{(l)} = W^{(l)}\mathbf h^{(l-1)} +
\mathbf b^{(l)}$, $\mathbf h^{(l)} = \sigma(\mathbf z^{(l)})$. Para cada capa se define el error
$\boldsymbol\delta^{(l)} = \partial L / \partial \mathbf z^{(l)}$.

**Teorema (retropropagación).**

$$
\boldsymbol\delta^{(l)} = \bigl(W^{(l+1)\top}\boldsymbol\delta^{(l+1)}\bigr) \odot \sigma'(\mathbf z^{(l)}),
\qquad
\frac{\partial L}{\partial W^{(l)}} = \boldsymbol\delta^{(l)}\,\mathbf h^{(l-1)\top},
\qquad
\frac{\partial L}{\partial \mathbf b^{(l)}} = \boldsymbol\delta^{(l)} .
$$

*Demostración.* $L$ depende de $\mathbf z^{(l)}$ solo a través de $\mathbf z^{(l+1)} =
W^{(l+1)}\sigma(\mathbf z^{(l)}) + \mathbf b^{(l+1)}$. Por la regla de la cadena,
$\partial L/\partial z^{(l)}_i = \sum_k \delta^{(l+1)}_k\, W^{(l+1)}_{ki}\, \sigma'(z^{(l)}_i)$,
que es la primera fórmula. Como $z^{(l)}_i = \sum_j W^{(l)}_{ij}h^{(l-1)}_j + b^{(l)}_i$,
$\partial z^{(l)}_i/\partial W^{(l)}_{ij} = h^{(l-1)}_j$ y $\partial z^{(l)}_i/\partial b^{(l)}_i
= 1$; se multiplica por $\delta^{(l)}_i$. $\blacksquare$

El coste de calcular **todo** el gradiente es del mismo orden que una pasada hacia delante
(unas dos o tres veces más), no proporcional al número de parámetros. Es la razón de que se
puedan entrenar miles de millones de ellos. Se paga con memoria, porque hay que guardar las
activaciones de la pasada hacia delante.

Esto es un caso de **diferenciación automática en modo inverso** (Baydin et al., 2018): el
grafo de cálculo se recorre al revés aplicando la regla de la cadena a cada operación
elemental. El **modo directo** propaga derivadas junto a los valores (números duales) y cuesta
una pasada *por parámetro*; es mejor cuando hay pocas entradas y muchas salidas, y el modo
inverso cuando hay una salida escalar (la pérdida) y muchos parámetros. Las bibliotecas
(PyTorch, JAX) implementan el modo inverso.

```python
import numpy as np

def mlp_paso(W1, b1, W2, b2, x, y):
    """Pérdida ½(ŷ−y)² y gradientes de un MLP con una capa oculta ReLU, a mano."""
    z1 = W1 @ x + b1
    h = np.maximum(z1, 0.0)
    yhat = float(W2 @ h + b2)
    e = yhat - y
    dz1 = (e * W2) * (z1 > 0)          # δ de la capa oculta
    return 0.5 * e * e, np.outer(dz1, x), dz1, e * h, e   # L, dW1, db1, dW2, db2
```

**Verificación obligatoria**: compara siempre tu gradiente con diferencias centrales,
$[L(\theta + \varepsilon e_i) - L(\theta - \varepsilon e_i)]/(2\varepsilon)$ con
$\varepsilon \approx 10^{-6}$ en doble precisión (*gradient check*). Casi todos los errores de
implementación de una capa nueva se detectan así.

## 3. Optimización

Con datos $\{(x_i, y_i)\}$ se minimiza $L(\theta) = \frac1N \sum_i \ell_i(\theta)$. El gradiente
de un **minilote** de tamaño $B$ es un estimador insesgado del gradiente completo con varianza
$\propto 1/B$. Algoritmos:

- **SGD**: $\theta \leftarrow \theta - \eta\,g$. Con paso fijo oscila en las direcciones de alta curvatura.
- **Momento**: $v \leftarrow \mu v + g$, $\theta \leftarrow \theta - \eta v$. Acumula la
  dirección persistente del gradiente y amortigua las oscilaciones.
- **Adam** (Kingma y Ba, 2015): medias móviles del gradiente y de su cuadrado,

$$
m_t = \beta_1 m_{t-1} + (1-\beta_1) g_t, \quad
v_t = \beta_2 v_{t-1} + (1-\beta_2) g_t^2,
$$
$$
\hat m_t = \frac{m_t}{1 - \beta_1^t}, \quad
\hat v_t = \frac{v_t}{1 - \beta_2^t}, \quad
\theta_t = \theta_{t-1} - \eta\,\frac{\hat m_t}{\sqrt{\hat v_t} + \varepsilon},
$$

con $\beta_1 = 0{,}9$, $\beta_2 = 0{,}999$, $\varepsilon = 10^{-8}$. La corrección de sesgo
compensa que $m_0 = v_0 = 0$: sin ella los primeros pasos serían demasiado pequeños. En el primer
paso, $\hat m_1/\sqrt{\hat v_1} = \operatorname{sign}(g_1)$, de modo que cada parámetro se mueve
exactamente $\eta$. Cada coordenada se reescala por su propia magnitud de gradiente, lo que
hace al método robusto frente a una mala escala. La regularización por **decaimiento de pesos**
debe aplicarse separada del gradiente (AdamW) para que no la reescale el denominador.

**Inicialización.** Con pesos de media cero y varianza $\sigma_w^2$, la varianza de la
preactivación de una capa con $n_{in}$ entradas es $n_{in}\sigma_w^2\,\mathrm{Var}(h)$. Para que
la señal no se desvanezca ni explote al apilar capas hay que elegir $\sigma_w^2 \approx
1/n_{in}$ (Glorot y Bengio, 2010, con la media armónica $2/(n_{in}+n_{out})$ para activaciones
simétricas) o $2/n_{in}$ para ReLU (He et al., 2015), porque la ReLU anula la mitad de las
activaciones. Sin una inicialización cuidada, una red profunda no entrena.

## 4. Arquitecturas

**Convolucional** (LeCun et al., 1998). Una capa convolucional aplica el mismo filtro en cada
posición: un núcleo $k \times k$ con $C_{in}$ canales de entrada y $C_{out}$ de salida tiene
$C_{out}(k^2C_{in} + 1)$ parámetros, independiente del tamaño de la imagen. Esto incorpora la
**equivarianza a traslaciones**. El tamaño de salida de una dimensión es
$\lfloor (n + 2p - k)/s \rfloor + 1$ con relleno $p$ y paso $s$.

**Residual** (He et al., 2016). Un bloque calcula $\mathbf h + F(\mathbf h)$ en lugar de
$F(\mathbf h)$. El gradiente a través de la suma tiene un camino de identidad, así que no se
desvanece con la profundidad. Es la razón de que existan redes de cientos de capas.

**Normalización por capas** (Ba et al., 2016): normaliza cada vector de activaciones a media
cero y varianza uno, y aprende escala $\gamma$ y desplazamiento $\beta$ por componente. A
diferencia de la normalización por lotes, no depende del tamaño del minilote.

**Atención** (Vaswani et al., 2017). Dadas matrices de consultas $Q$, claves $K$ y valores
$V$, con $d_k$ la dimensión de las claves,

$$
\operatorname{Atención}(Q,K,V) = \operatorname{softmax}\!\Bigl(\frac{Q K^\top}{\sqrt{d_k}}\Bigr) V .
$$

Cada fila de salida es una media ponderada de los valores, con pesos que dependen del parecido
consulta-clave. La escala $1/\sqrt{d_k}$ existe porque, si las componentes de $q$ y $k$ son
independientes de media 0 y varianza 1, $q\cdot k$ tiene varianza $d_k$: sin escalar, el
softmax se satura y su gradiente se anula. Una **cabeza múltiple** ejecuta $h$ atenciones en
paralelo sobre proyecciones de dimensión $d_k = d/h$ y las concatena. Un bloque de Transformer
combina atención, una red densa de dos capas aplicada por posición, conexiones residuales y
normalización. Como la atención es invariante a permutaciones, la posición debe inyectarse
aparte (codificación sinusoidal o aprendida). El coste en tiempo y memoria de la atención es
cuadrático en la longitud de la secuencia: es el límite práctico del contexto.

```python
def atencion(Q, K, V):
    """Atención de producto punto escalado; softmax estable restando el máximo por fila."""
    s = Q @ K.T / np.sqrt(K.shape[1])
    s = s - s.max(axis=1, keepdims=True)
    p = np.exp(s)
    p /= p.sum(axis=1, keepdims=True)
    return p @ V
```

## 5. Estabilidad numérica y práctica

- **Softmax y log**: calcula siempre $\log\operatorname{softmax}$ con la identidad
  $z_i - \max z - \log\sum_j e^{z_j - \max z}$. Un $e^{z}$ con $z = 100$ ya desborda en `float32`.
- **Sobreajuste**: se vigila con un conjunto de validación separado. Se combate con más datos,
  parada temprana, decaimiento de pesos y *dropout* (Srivastava et al., 2014).
- **Gradientes que explotan**: recorte por norma, $g \leftarrow g\cdot\min(1, c/\|g\|)$.
- **Reproducibilidad**: fija las semillas y registra la configuración; el no determinismo de
  las GPU hace que dos ejecuciones "iguales" difieran en los últimos dígitos.
- **Aritmética**: entrenar en precisión mixta (`bfloat16` con acumulación en `float32`) reduce
  memoria y coste, a cambio de vigilar el desbordamiento y los gradientes pequeños.

## Reto

Calcula cinco enteros.

- **a, b.** Red de 2 entradas, 3 neuronas ocultas con ReLU y 1 salida lineal, con pérdida
  $L = \tfrac12(\hat y - y)^2$. Entrada $x = (2, -1)$, objetivo $y = 1/2$.
  $W^{(1)} = \begin{pmatrix} 1/2 & -1/3 \\ -3/4 & 2/5 \\ 1/3 & 1/2 \end{pmatrix}$,
  $b^{(1)} = (1/5,\,-1/2,\,1/10)$, $w^{(2)} = (2/3,\,-1/4,\,3/2)$, $b^{(2)} = 1/7$.
  Calcula en **fracciones exactas** $\partial L / \partial W^{(1)}_{12}$ (fila 1, columna 2).
  Entrega el valor absoluto de su **numerador** (a) y su **denominador** (b) en la fracción
  irreducible. Valor de control: $\hat y \approx 1{,}565079$ y la neurona 2 queda inactiva.
- **c.** Adam sobre $f(w) = w_1^2 + 3w_2^2$ desde $w_0 = (1, -2)$ con $\eta = 0{,}1$,
  $\beta_1 = 0{,}9$, $\beta_2 = 0{,}999$, $\varepsilon = 10^{-8}$ y 20 pasos exactos (con corrección
  de sesgo, $t$ desde 1). Entrega $\lfloor 10^9\,|w_1|\rfloor$ tras los 20 pasos. Valor de
  control: tras el primer paso, $w = (0{,}9,\,-1{,}9)$.
- **d.** Atención de producto punto escalado con $d_k = 2$ y
  $Q = \begin{pmatrix}1&0\\2&-1\\0&3\end{pmatrix}$,
  $K = \begin{pmatrix}1&1\\-1&2\\3&0\end{pmatrix}$,
  $V = \begin{pmatrix}2&1\\0&-3\\4&5\end{pmatrix}$. Entrega $\lfloor 10^9\,o_{21}\rfloor$, siendo
  $o_{21}$ el elemento de la fila 2, columna 1 de la salida. Valor de control: cada fila de
  pesos de atención suma 1.
- **e.** Número de parámetros entrenables de un decodificador con vocabulario de 1000, $d = 64$,
  4 cabezas, $d_{ff} = 256$ y 2 capas. Cada capa tiene dos normalizaciones ($\gamma$ y $\beta$),
  proyecciones $W_q, W_k, W_v, W_o$ de $d \times d$ **con sesgo**, y una red densa
  $d \to d_{ff} \to d$ con sesgos. Hay una normalización final, la matriz de embedding
  está atada a la capa de salida (se cuenta una vez) y la codificación de posición es sinusoidal
  (sin parámetros). Valor de control: una capa lineal $10 \to 5$ con sesgo tiene 55.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e}`
