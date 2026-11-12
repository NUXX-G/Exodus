---
id: ia-redes-profundas
title: "Redes neuronales profundas: capas, retropropagación, optimización, convoluciones, atención y práctica"
area: ia-cuantica
trunk_level: 14
prerequisites: [ia-aprendizaje-estadistico]
academic_sources:
  - "Goodfellow, I.; Bengio, Y.; Courville, A. Deep Learning. MIT Press, 2016."
  - "Rumelhart, D. E.; Hinton, G. E.; Williams, R. J. Learning representations by back-propagating errors. Nature, 323, 533-536, 1986."
  - "Baydin, A. G.; Pearlmutter, B. A.; Radul, A. A.; Siskind, J. M. Automatic Differentiation in Machine Learning: a Survey. Journal of Machine Learning Research, 18(153), 1-43, 2018."
  - "Cybenko, G. Approximation by superpositions of a sigmoidal function. Mathematics of Control, Signals and Systems, 2(4), 303-314, 1989."
  - "Kingma, D. P.; Ba, J. Adam: A Method for Stochastic Optimization. ICLR, 2015 (arXiv:1412.6980)."
  - "Glorot, X.; Bengio, Y. Understanding the difficulty of training deep feedforward neural networks. AISTATS, PMLR 9, 249-256, 2010."
  - "He, K.; Zhang, X.; Ren, S.; Sun, J. Delving Deep into Rectifiers: Surpassing Human-Level Performance on ImageNet Classification. ICCV, 2015."
  - "He, K.; Zhang, X.; Ren, S.; Sun, J. Deep Residual Learning for Image Recognition. CVPR, 2016."
  - "LeCun, Y.; Bottou, L.; Bengio, Y.; Haffner, P. Gradient-based learning applied to document recognition. Proceedings of the IEEE, 86(11), 2278-2324, 1998."
  - "Srivastava, N.; Hinton, G.; Krizhevsky, A.; Sutskever, I.; Salakhutdinov, R. Dropout: A Simple Way to Prevent Neural Networks from Overfitting. Journal of Machine Learning Research, 15, 1929-1958, 2014."
  - "Ba, J. L.; Kiros, J. R.; Hinton, G. E. Layer Normalization. arXiv:1607.06450, 2016."
  - "Vaswani, A. et al. Attention Is All You Need. NeurIPS, 2017."
ctf_flag: "sha256:1b8e42f2f2f8c345b2cdb77ad34718e5cbb6acd7aba56614e86f23e6fb3407b1"
hints:
  - "(a, b) Una derivada parcial de la pérdida es un producto de derivadas locales a lo largo del camino que va del peso a la salida (regla de la cadena); la derivada de la ReLU es 1 donde la preactivación es positiva y 0 donde no. Comprueba qué neuronas están activas antes de derivar. (c) Adam mantiene dos medias móviles, una del gradiente y otra de su cuadrado, y las corrige por el sesgo de inicio. (d) Las puntuaciones son productos punto escalados por 1/√d_k; el softmax actúa por filas. (e) Cuenta tensor a tensor: una matriz de entrada×salida más su vector de sesgo, y un tensor de pesos compartido solo se cuenta una vez."
  - "Para (a, b) usa fractions.Fraction y compara con la derivada numérica por diferencias centrales; el valor a entregar es el valor absoluto del numerador y el denominador de la fracción irreducible. Para (c) escribe el bucle tal como el algoritmo 1 del artículo; para (d), resta el máximo de cada fila antes de exponenciar; para (e), en PyTorch, sum(p.numel() for p in model.parameters()) cuenta cada parámetro compartido una sola vez."
  - "Goodfellow et al., capítulo 6 (retropropagación) y capítulo 8 (algoritmos de tasa adaptativa, incluido Adam); Vaswani et al., atención de producto punto escalado; Kingma & Ba (2015), algoritmo 1. Documentación: pytorch.org/docs/stable/generated/torch.nn.Module.html#torch.nn.Module.parameters"
exercises:
  - id: pasada-hacia-delante
    tier: 1
    prompt: |
      Una red tiene $W^{(1)} = \begin{pmatrix} 1 & -1 \\ 0{,}5 & 0{,}5 \end{pmatrix}$, $b^{(1)} = (0, -1)$, ReLU, $w^{(2)} = (2, 1)$ y $b^{(2)} = 0{,}5$ con salida lineal. ¿Qué devuelve para $x = (1, 2)$? Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: softmax
    tier: 1
    prompt: |
      ¿Cuánto vale la tercera componente de $\operatorname{softmax}(1, 2, 3)$? Respuesta: con **4 decimales**.
    answers: ["sha256:088a1972209a54e03ffb2b767bf79a0779fe428afaf538357d5aa771a39eb644"]
  - id: parametros-de-un-mlp
    tier: 1
    prompt: |
      ¿Cuántos parámetros entrenables tiene un perceptrón multicapa $784 \to 128 \to 10$ con sesgos en las dos capas? Respuesta: un entero.
    answers: ["sha256:1e4867d185308d5c2463661ab8d577bfce0f17fe53834ebd214575f92813cb8b"]
  - id: capa-convolucional
    tier: 1
    prompt: |
      Una convolución 1D con núcleo $k = 5$, relleno $p = 2$ y paso $s = 2$ sobre una entrada de longitud $32$: ¿cuántas salidas produce? Y una capa convolucional 2D de 3 a 16 canales con núcleo $3\times3$ y sesgo, ¿cuántos parámetros tiene? Respuesta: `salidas;parametros`.
    answers: ["sha256:5ce078642a27cbf496ecdec0148c0e28d54ce574dd8a0e76e104f08f97c66206"]
  - id: gradiente-de-la-sigmoide
    tier: 2
    prompt: |
      Una neurona con salida $p = \sigma(z)$ y pérdida $L = -[y\log p + (1 - y)\log(1 - p)]$ tiene $z = 0{,}5$ e $y = 1$. ¿Cuánto vale $\partial L/\partial z$? Respuesta: con **4 decimales**.
    answers: ["sha256:d5634d125d00dd0945d7c063e34f42566a9092dcd5f0a9063555402f9824359a"]
  - id: regla-de-la-cadena
    tier: 2
    prompt: |
      Con $L = \frac12(\tanh(wx) - y)^2$, $x = 2$, $w = 0{,}3$ e $y = 0{,}5$, ¿cuánto vale $\partial L/\partial w$? Respuesta: con **4 decimales**.
    answers: ["sha256:15010663990cdb01952c7738bc53816bff769d5792900ee03b47675f0c8b716c"]
  - id: estabilidad-del-descenso
    tier: 2
    prompt: |
      Se minimiza $f(w) = 5w^2$ (curvatura $L = 10$) con descenso de gradiente de paso $\eta = 0{,}15$ desde $w = 1$. ¿Cuánto vale $w$ tras 5 pasos, y cuál es el mayor paso $\eta$ con el que no diverge? Respuesta: `w5;etamax`.
    answers: ["sha256:f0f5bd39ec3d088f89281cf451193e0df9011538367489fe0bfa0eb2f367aa5f"]
  - id: primer-paso-de-adam
    tier: 2
    prompt: |
      Adam con $\eta = 0{,}05$, $\beta_1 = 0{,}9$, $\beta_2 = 0{,}999$ y corrección de sesgo minimiza $f = w_1^2 + w_2^2$ desde $w = (3;\ -0{,}01)$. ¿Dónde está $w$ tras el primer paso? Respuesta: `w1;w2`.
    answers: ["sha256:b5b487931818a472da0da557929240f8e532046713d132f1f18deb0218d69f51"]
  - id: inicializacion
    tier: 2
    prompt: |
      ¿Qué desviación típica da la inicialización de He para una capa ReLU con $n_{in} = 512$, $\sqrt{2/n_{in}}$, y qué límite $\sqrt{6/(n_{in} + n_{out})}$ da la uniforme de Glorot para una capa $512 \to 256$? Respuesta: `he;glorot`, el segundo con **4 decimales**.
    answers: ["sha256:3ebf0fb733aa0f2123a39377c3110a838aea5cf71acdb906ed1608499472a0bd"]
  - id: pesos-de-atencion
    tier: 2
    prompt: |
      Una consulta $q = (1, 1)$ atiende a dos claves $k_1 = (1, 0)$ y $k_2 = (0, 2)$ con producto punto escalado ($d_k = 2$). ¿Qué peso recibe la segunda clave? Respuesta: con **4 decimales**.
    answers: ["sha256:df9091c8a6fbef7cdb951478d6b18c05cf65ec8e737ccc781925fd71cced18b8"]
  - id: entropia-cruzada-multiclase
    tier: 2
    prompt: |
      Un clasificador de 3 clases produce los logits $(2, 1, -1)$ y la clase correcta es la primera. ¿Cuánto vale la entropía cruzada $-\log\operatorname{softmax}(z)_1$? Respuesta: con **4 decimales**.
    answers: ["sha256:7fe71cf99084bfdcdcb66495721121643b63ed85eafd7fee499f06b6dff3129a"]
  - id: retropropagacion-exacta
    tier: 3
    prompt: |
      Red 2-2-1 con ReLU y salida lineal, $L = \frac12(\hat y - y)^2$: $W^{(1)} = \begin{pmatrix} 1/2 & 1/4 \\ -1/3 & 1 \end{pmatrix}$, $b^{(1)} = (0, -1/2)$, $w^{(2)} = (3/2, -2/3)$, $b^{(2)} = 1/5$, entrada $x = (1, 2)$, objetivo $y = 1/3$. ¿Cuánto vale $\partial L/\partial W^{(1)}_{11}$ como fracción irreducible? Respuesta: `p/q`.
    answers: ["sha256:42ba833b06c1ef538a79215b0fb72c442eeb0b1b27a298a33c1b1d4600aed7b2"]
  - id: tres-pasos-de-adam
    tier: 3
    prompt: |
      Adam con $\eta = 0{,}1$ y los parámetros por defecto ($\beta_1 = 0{,}9$, $\beta_2 = 0{,}999$, $\varepsilon = 10^{-8}$, con corrección de sesgo) minimiza $f(w) = w^2$ desde $w = 1$. ¿Dónde está $w$ tras 3 pasos? Respuesta: con **4 decimales**.
    answers: ["sha256:9406ef5de236f6c39d38d26ba189683fefeb1223f0788551a868de01b41b1399"]
  - id: campo-receptivo
    tier: 3
    prompt: |
      ¿Cuántos píxeles de entrada (en una dimensión) ve una salida tras tres convoluciones $3\times3$ de paso 1 apiladas? ¿Y si la primera tiene paso 2? Respuesta: `paso1;conpaso2`.
    answers: ["sha256:3e303caa78ee040d45ed75f2f5cc5de35ede8276cecbcc969fdc5a2cce484a4d"]
  - id: parametros-de-un-transformer
    tier: 3
    prompt: |
      Un decodificador tiene vocabulario $500$, $d = 32$, $d_{ff} = 128$ y una sola capa. La capa tiene dos normalizaciones ($\gamma$ y $\beta$), $W_q, W_k, W_v, W_o$ de $d\times d$ con sesgo, y una red densa $d \to d_{ff} \to d$ con sesgos; hay una normalización final, el embedding está atado a la salida y la posición es sinusoidal. ¿Cuántos parámetros entrenables tiene? Respuesta: un entero.
    answers: ["sha256:30c781c71e7fae0c3daa6a94197d1cf18b37037780a69c283918f5145cce95e2"]
  - id: dropout-invertido
    tier: 3
    prompt: |
      Con *dropout* invertido de probabilidad de descarte $0{,}2$, cada activación se multiplica por $0$ o por un factor de escala que conserva la esperanza. ¿Cuánto vale ese factor y qué varianza tiene la salida cuando la entrada vale $1$? Respuesta: `escala;varianza`.
    answers: ["sha256:584c80e6e2cd897a86e9f0df98bb9c843d060ed1f666bafc1329dde59d1eb84a"]
---

# Redes neuronales profundas: capas, retropropagación, optimización, convoluciones, atención y práctica

Una red neuronal es una función paramétrica $f_\theta$ construida como composición de capas simples, y entrenarla es minimizar una pérdida sobre los datos
([[ia-aprendizaje-estadistico]]). Tres ideas lo hacen funcionar a gran escala: la **composición** (profundidad), el cálculo eficiente del gradiente
(**retropropagación**) y la **optimización estocástica** con minilotes. Todo lo demás (convoluciones, residuos, atención, Transformers) son formas de
estructurar esas tres para que entrenen bien y generalicen.

## Objetivos

Al terminar sabrás:

1. Calcular la pasada hacia delante de una red densa, contar sus parámetros y elegir activaciones y pérdidas (softmax, entropía cruzada).
2. Deducir y aplicar la retropropagación, y comprobar gradientes con diferencias centrales.
3. Usar SGD, momento y Adam, entender la estabilidad del paso y la importancia de la inicialización.
4. Calcular salidas, parámetros y campos receptivos de capas convolucionales, y explicar las conexiones residuales y la normalización.
5. Calcular una atención de producto punto escalado y contar los parámetros de un Transformer.
6. Aplicar la práctica numérica: log-softmax estable, dropout, recorte de gradiente, precisión mixta.

## Qué debes dominar antes

[[ia-aprendizaje-estadistico]] (riesgo, regresión logística, descenso de gradiente, validación) y, a través de él, [[mat-calculo-multivariable]] (regla
de la cadena) y [[mat-algebra-lineal]] (productos de matrices).

> [!question] Test de entrada
> 1. ¿Cuál es la derivada de $\sigma(z) = 1/(1 + e^{-z})$?
> 2. ¿Cuál es la derivada de $f(g(x))$?
> 3. ¿Cuántos números tiene una matriz $128\times784$?
>
> Respuestas: $\sigma(z)(1 - \sigma(z))$; $f'(g(x))\,g'(x)$; $100\,352$.

## 1. Para qué sirve

- **Visión**: clasificación, detección y segmentación de imágenes, conducción, inspección industrial, imagen médica.
- **Lenguaje**: traducción, búsqueda, asistentes y modelos de lenguaje (Transformers).
- **Señal y control**: voz, series temporales, control de robots aprendido.
- **Ciencia**: plegamiento de proteínas, materiales, aproximación de simulaciones caras.
- **Seguridad**: detección de malware y anomalías, y también los riesgos propios de los modelos (ejemplos adversarios, envenenamiento, fuga de datos).

## 2. Neuronas, capas y capacidad

Una capa densa calcula $\mathbf h = \sigma(W\mathbf x + \mathbf b)$ con $\sigma$ no lineal componente a componente; $W$ de $n_{out}\times n_{in}$ y $\mathbf b$ de $n_{out}$ dan
$n_{out}(n_{in} + 1)$ parámetros. Si $\sigma$ fuese lineal, cualquier composición sería otra transformación lineal y la profundidad no aportaría nada.
Activaciones habituales:

$$
\operatorname{ReLU}(z) = \max(0, z), \qquad \sigma(z) = \frac{1}{1 + e^{-z}}, \qquad \tanh z, \qquad \operatorname{softmax}(\mathbf z)_i = \frac{e^{z_i}}{\sum_je^{z_j}} .
$$

Para clasificar en $K$ clases, la última capa da $K$ **logits** y la pérdida es la **entropía cruzada** $-\log\operatorname{softmax}(\mathbf z)_y = \operatorname{logsumexp}(\mathbf z) - z_y$: la
generalización multiclase de la regresión logística. Su gradiente respecto a los logits es $\operatorname{softmax}(\mathbf z) - \mathbf e_y$.

**Teorema de aproximación universal** (Cybenko, 1989). Una red de una capa oculta con suficientes neuronas y activación sigmoidal puede aproximar con error
arbitrariamente pequeño cualquier función continua sobre un compacto. Es un teorema de *existencia*: no dice cuántas neuronas hacen falta, ni que el descenso
de gradiente las encuentre, ni que generalicen. La profundidad importa porque ciertas funciones requieren muchísimas más neuronas si la red es poco profunda.

## 3. Retropropagación

Sea $L(\theta)$ la pérdida de una red con capas $\mathbf z^{(l)} = W^{(l)}\mathbf h^{(l-1)} + \mathbf b^{(l)}$, $\mathbf h^{(l)} = \sigma(\mathbf z^{(l)})$. Para cada capa se define el error
$\boldsymbol\delta^{(l)} = \partial L/\partial\mathbf z^{(l)}$.

**Teorema (retropropagación).**

$$
\boldsymbol\delta^{(l)} = \bigl(W^{(l+1)\top}\boldsymbol\delta^{(l+1)}\bigr)\odot\sigma'(\mathbf z^{(l)}), \qquad \frac{\partial L}{\partial W^{(l)}} = \boldsymbol\delta^{(l)}\mathbf h^{(l-1)\top}, \qquad \frac{\partial L}{\partial\mathbf b^{(l)}} = \boldsymbol\delta^{(l)} .
$$

*Demostración.* $L$ depende de $\mathbf z^{(l)}$ solo a través de $\mathbf z^{(l+1)} = W^{(l+1)}\sigma(\mathbf z^{(l)}) + \mathbf b^{(l+1)}$. Por la regla de la cadena,
$\partial L/\partial z^{(l)}_i = \sum_k\delta^{(l+1)}_kW^{(l+1)}_{ki}\sigma'(z^{(l)}_i)$, que es la primera fórmula. Como $z^{(l)}_i = \sum_jW^{(l)}_{ij}h^{(l-1)}_j + b^{(l)}_i$,
$\partial z^{(l)}_i/\partial W^{(l)}_{ij} = h^{(l-1)}_j$ y $\partial z^{(l)}_i/\partial b^{(l)}_i = 1$; se multiplica por $\delta^{(l)}_i$. $\blacksquare$

El coste de calcular **todo** el gradiente es del mismo orden que una pasada hacia delante (unas dos o tres veces más), no proporcional al número de
parámetros: por eso se pueden entrenar miles de millones de ellos (Rumelhart, Hinton y Williams, 1986). Se paga con memoria, porque hay que guardar las
activaciones. Es un caso de **diferenciación automática en modo inverso** (Baydin et al., 2018); el **modo directo** propaga derivadas junto a los valores y
cuesta una pasada por parámetro, mejor cuando hay pocas entradas y muchas salidas.

> [!example] Ejemplo resuelto 1: una retropropagación a mano
> Red con una neurona oculta ReLU: $z = 2x - 1$, $h = \operatorname{ReLU}(z)$, $\hat y = 3h + 0{,}5$, $L = \frac12(\hat y - y)^2$, con $x = 1$ e $y = 2$. Hacia delante: $z = 1$, $h = 1$,
> $\hat y = 3{,}5$, $L = 1{,}125$. Hacia atrás: $\partial L/\partial\hat y = 1{,}5$; $\partial L/\partial h = 1{,}5\cdot3 = 4{,}5$; $\partial L/\partial z = 4{,}5\cdot1$ (la ReLU está activa); el peso de la
> primera capa recibe $\partial L/\partial w = 4{,}5\cdot x = 4{,}5$ y el de la segunda, $1{,}5\cdot h = 1{,}5$. Si $z$ hubiera sido negativo, todo lo que pasa por esa neurona
> tendría gradiente cero: una ReLU «muerta».

**Verificación obligatoria**: compara siempre tu gradiente con diferencias centrales, $[L(\theta + \varepsilon e_i) - L(\theta - \varepsilon e_i)]/(2\varepsilon)$ con $\varepsilon \approx 10^{-6}$
en doble precisión (*gradient check*). Casi todos los errores de implementación de una capa nueva se detectan así.

## 4. Optimización

Con datos $\{(x_i, y_i)\}$ se minimiza $L(\theta) = \frac1N\sum_i\ell_i(\theta)$. El gradiente de un **minilote** de tamaño $B$ es un estimador insesgado del gradiente
completo con varianza $\propto 1/B$.

- **SGD**: $\theta \leftarrow \theta - \eta g$. En una dirección de curvatura $\lambda$ el paso multiplica el error por $1 - \eta\lambda$: diverge si $\eta > 2/\lambda$, así que la
  dirección más curvada fija el paso máximo y la más plana, la lentitud.
- **Momento**: $v \leftarrow \mu v + g$, $\theta \leftarrow \theta - \eta v$. Acumula la dirección persistente y amortigua las oscilaciones.
- **Adam** (Kingma y Ba, 2015): medias móviles del gradiente y de su cuadrado,

$$
m_t = \beta_1m_{t-1} + (1 - \beta_1)g_t, \quad v_t = \beta_2v_{t-1} + (1 - \beta_2)g_t^2, \quad
\hat m_t = \frac{m_t}{1 - \beta_1^t}, \quad \hat v_t = \frac{v_t}{1 - \beta_2^t}, \quad \theta_t = \theta_{t-1} - \eta\frac{\hat m_t}{\sqrt{\hat v_t} + \varepsilon},
$$

con $\beta_1 = 0{,}9$, $\beta_2 = 0{,}999$, $\varepsilon = 10^{-8}$. La corrección de sesgo compensa que $m_0 = v_0 = 0$. En el primer paso, $\hat m_1/\sqrt{\hat v_1} = \operatorname{sign}(g_1)$: cada
parámetro se mueve exactamente $\eta$, sea cual sea la escala de su gradiente. El decaimiento de pesos debe aplicarse separado del gradiente (AdamW).

**Inicialización.** Con pesos de media cero y varianza $\sigma_w^2$, la varianza de la preactivación es $n_{in}\sigma_w^2\operatorname{Var}(h)$. Para que la señal no se desvanezca
ni explote al apilar capas, $\sigma_w^2 \approx 2/(n_{in} + n_{out})$ (Glorot y Bengio, 2010; con una uniforme, límite $\sqrt{6/(n_{in} + n_{out})}$) para activaciones
simétricas, o $2/n_{in}$ para ReLU (He et al., 2015), porque la ReLU anula la mitad de las activaciones.

## 5. Arquitecturas

**Convolucional** (LeCun et al., 1998). Una capa convolucional aplica el mismo filtro en cada posición: un núcleo $k\times k$ con $C_{in}$ canales de entrada y
$C_{out}$ de salida tiene $C_{out}(k^2C_{in} + 1)$ parámetros, independiente del tamaño de la imagen, e incorpora la **equivarianza a traslaciones**. Una dimensión de
salida mide $\lfloor(n + 2p - k)/s\rfloor + 1$ con relleno $p$ y paso $s$. El **campo receptivo** (cuántas entradas ve una salida) crece con la profundidad:
$r \leftarrow r + (k - 1)\,j$, $j \leftarrow j\,s$ capa a capa, empezando en $r = j = 1$.

> [!example] Ejemplo resuelto 2: dimensiones de una CNN (con menos ayuda)
> Imagen $28\times28\times1$. Capa 1: 8 filtros $5\times5$, $p = 0$, $s = 1$ → $24\times24\times8$ y $8(25 + 1) = 208$ parámetros. Agrupación $2\times2$ → $12\times12\times8$ (sin
> parámetros). Capa 2: 16 filtros $3\times3$, $p = 1$ → calcula tú el tamaño ($12\times12\times16$) y los parámetros ($16(9\cdot8 + 1)$). Una capa densa equivalente sobre
> la imagen entera necesitaría cientos de miles de pesos.

**Residual** (He et al., 2016). Un bloque calcula $\mathbf h + F(\mathbf h)$: el gradiente a través de la suma tiene un camino de identidad y no se desvanece con la
profundidad. Por eso existen redes de cientos de capas.

**Normalización por capas** (Ba et al., 2016): normaliza cada vector de activaciones a media cero y varianza uno y aprende escala $\gamma$ y desplazamiento $\beta$
por componente; no depende del minilote.

**Atención** (Vaswani et al., 2017). Con consultas $Q$, claves $K$ y valores $V$, y $d_k$ la dimensión de las claves,

$$
\operatorname{Atención}(Q, K, V) = \operatorname{softmax}\Bigl(\frac{QK^\top}{\sqrt{d_k}}\Bigr)V .
$$

Cada fila de salida es una media ponderada de los valores, con pesos que dependen del parecido consulta-clave. La escala $1/\sqrt{d_k}$ existe porque, si las
componentes de $q$ y $k$ son independientes de media 0 y varianza 1, $q\cdot k$ tiene varianza $d_k$: sin escalar, el softmax se satura. Una **cabeza múltiple**
ejecuta $h$ atenciones en paralelo sobre proyecciones de dimensión $d/h$ y las concatena (los parámetros de $W_q, W_k, W_v, W_o$ no dependen de $h$). Un bloque
de Transformer combina atención, una red densa de dos capas por posición, conexiones residuales y normalización; la posición se inyecta aparte (codificación
sinusoidal, sin parámetros, o aprendida). El coste de la atención es cuadrático en la longitud de la secuencia: es el límite práctico del contexto.

## 6. Estabilidad numérica y práctica

- **Softmax y log**: calcula $\log\operatorname{softmax}$ como $z_i - \max z - \log\sum_je^{z_j - \max z}$. Un $e^z$ con $z = 100$ ya desborda en `float32`.
- **Sobreajuste**: conjunto de validación separado; más datos, parada temprana, decaimiento de pesos y **dropout** (Srivastava et al., 2014): en entrenamiento
  cada activación se anula con probabilidad $p$ y las supervivientes se multiplican por $1/(1 - p)$ (dropout invertido), de modo que la esperanza no cambia
  y en inferencia no hay que hacer nada.
- **Gradientes que explotan**: recorte por norma, $g \leftarrow g\cdot\min(1, c/\lVert g\rVert)$.
- **Reproducibilidad**: fija semillas y registra la configuración; el no determinismo de las GPU hace que dos ejecuciones «iguales» difieran en los últimos dígitos.
- **Precisión mixta**: `bfloat16` con acumulación en `float32` reduce memoria y coste, a cambio de vigilar desbordamientos y gradientes pequeños.

## 7. Comprobar con un programa

Sin bibliotecas: una red pequeña con su retropropagación, comprobada contra diferencias centrales; Adam en la forma directa y en la forma eficiente del
artículo, que deben coincidir; y la atención con softmax estable frente a la versión con logsumexp.

```python
import math

def adelante(W1, b1, w2, b2, x):
    z = [sum(w * xi for w, xi in zip(fila, x)) + b for fila, b in zip(W1, b1)]
    h = [max(0.0, zi) for zi in z]
    return sum(wi * hi for wi, hi in zip(w2, h)) + b2, z, h

def gradiente_W1(W1, b1, w2, b2, x, y):
    yhat, z, _ = adelante(W1, b1, w2, b2, x)
    e = yhat - y
    return [[e * w2[i] * (z[i] > 0) * x[j] for j in range(len(x))] for i in range(len(W1))]

# 1. Retropropagación frente a diferencias centrales en una red 2-3-1.
W1 = [[0.2, -0.4], [0.7, 0.1], [-0.3, 0.5]]
b1, w2, b2 = [0.1, -0.2, 0.05], [1.5, -0.8, 0.6], 0.2
x, y = [1.0, -2.0], 0.3
G = gradiente_W1(W1, b1, w2, b2, x, y)
h = 1e-6
for i in range(3):
    for j in range(2):
        mas = [fila[:] for fila in W1]; menos = [fila[:] for fila in W1]
        mas[i][j] += h; menos[i][j] -= h
        Lm = 0.5 * (adelante(mas, b1, w2, b2, x)[0] - y) ** 2
        Ln = 0.5 * (adelante(menos, b1, w2, b2, x)[0] - y) ** 2
        assert abs((Lm - Ln) / (2 * h) - G[i][j]) < 1e-8

# 2. Adam: forma directa frente a la forma eficiente (paso corregido y ε reescalado); deben coincidir.
def adam(grad, w, eta, pasos, eficiente, b1=0.9, b2=0.999, eps=1e-8):
    m = [0.0] * len(w); v = [0.0] * len(w)
    for t in range(1, pasos + 1):
        g = grad(w)
        m = [b1 * mi + (1 - b1) * gi for mi, gi in zip(m, g)]
        v = [b2 * vi + (1 - b2) * gi * gi for vi, gi in zip(v, g)]
        if eficiente:
            at = eta * math.sqrt(1 - b2 ** t) / (1 - b1 ** t)
            e2 = eps * math.sqrt(1 - b2 ** t)
            w = [wi - at * mi / (math.sqrt(vi) + e2) for wi, mi, vi in zip(w, m, v)]
        else:
            w = [wi - eta * (mi / (1 - b1 ** t)) / (math.sqrt(vi / (1 - b2 ** t)) + eps) for wi, mi, vi in zip(w, m, v)]
    return w

grad = lambda w: [4 * w[0], 2 * w[1]]          # f = 2w1² + w2²
a, b = adam(grad, [2.0, -1.0], 0.05, 30, False), adam(grad, [2.0, -1.0], 0.05, 30, True)
assert max(abs(p - q) for p, q in zip(a, b)) < 1e-9
primero = adam(grad, [2.0, -1.0], 0.05, 1, False)          # primer paso: cada coordenada se mueve η
assert max(abs(p - q) for p, q in zip(primero, [1.95, -0.95])) < 1e-9

# 3. Atención con softmax estable frente a logsumexp, y filas de pesos que suman 1.
def atencion(Q, K, V, lse=False):
    dk = len(K[0]); salida = []
    for q in Q:
        s = [sum(qi * ki for qi, ki in zip(q, k)) / math.sqrt(dk) for k in K]
        m = max(s)
        if lse:
            L = m + math.log(sum(math.exp(si - m) for si in s))
            p = [math.exp(si - L) for si in s]
        else:
            e = [math.exp(si - m) for si in s]; p = [ei / sum(e) for ei in e]
        assert abs(sum(p) - 1) < 1e-12
        salida.append([sum(pi * fila[c] for pi, fila in zip(p, V)) for c in range(len(V[0]))])
    return salida

Q = [[0.5, 1.0], [-1.0, 2.0]]; K = [[1.0, 0.0], [0.0, 1.0], [1.0, 1.0]]; V = [[1.0, 2.0], [3.0, -1.0], [0.0, 4.0]]
A, B = atencion(Q, K, V), atencion(Q, K, V, lse=True)
assert max(abs(A[i][j] - B[i][j]) for i in range(2) for j in range(2)) < 1e-12
print("Atención:", [[round(v, 4) for v in fila] for fila in A])
```

## 8. Errores típicos

- Calcular la entropía cruzada con `log(softmax(z))` en dos pasos en vez de con logsumexp.
- Olvidar que la ReLU anula el gradiente de las neuronas inactivas, o confundir la derivada de la sigmoide con la de la tangente hiperbólica.
- No comprobar el gradiente de una capa nueva con diferencias centrales.
- Usar un paso demasiado grande (la pérdida sube o da `NaN`) o inicializar todos los pesos iguales (todas las neuronas aprenden lo mismo).
- Aplicar dropout en inferencia o, con dropout no invertido, olvidar reescalar.
- Contar dos veces un tensor compartido (embedding atado) o olvidar los sesgos y las normalizaciones al contar parámetros.
- Evaluar con datos que se han usado para elegir hiperparámetros.

## 9. Resumen

- Capa densa $\sigma(W\mathbf x + \mathbf b)$ con $n_{out}(n_{in} + 1)$ parámetros; softmax y entropía cruzada (logsumexp $-\,z_y$); aproximación universal.
- Retropropagación: $\boldsymbol\delta^{(l)} = (W^{(l+1)\top}\boldsymbol\delta^{(l+1)})\odot\sigma'$, $\partial L/\partial W = \boldsymbol\delta\,\mathbf h^\top$; coste de una pasada; *gradient check*.
- SGD (estable si $\eta < 2/\lambda_{\max}$), momento, Adam (primer paso de tamaño $\eta$); inicialización de Glorot y de He.
- Convolución: $C_{out}(k^2C_{in} + 1)$ parámetros, $\lfloor(n + 2p - k)/s\rfloor + 1$, campo receptivo; residuos; normalización por capas.
- Atención $\operatorname{softmax}(QK^\top/\sqrt{d_k})V$; Transformer; coste cuadrático en la longitud.
- Log-softmax estable, dropout invertido, recorte de gradiente, precisión mixta.

## Reto

Calcula cinco enteros.

- **a, b.** Red de 2 entradas, 3 neuronas ocultas con ReLU y 1 salida lineal, con pérdida $L = \frac12(\hat y - y)^2$. Entrada $x = (2, -1)$, objetivo $y = 1/2$.
  $W^{(1)} = \begin{pmatrix} 1/2 & -1/3 \\ -3/4 & 2/5 \\ 1/3 & 1/2 \end{pmatrix}$, $b^{(1)} = (1/5,\,-1/2,\,1/10)$, $w^{(2)} = (2/3,\,-1/4,\,3/2)$, $b^{(2)} = 1/7$. Calcula en **fracciones exactas**
  $\partial L/\partial W^{(1)}_{12}$ (fila 1, columna 2). Entrega el valor absoluto de su **numerador** (a) y su **denominador** (b) en la fracción irreducible. Valor de
  control: $\hat y \approx 1{,}565079$ y la neurona 2 queda inactiva.
- **c.** Adam sobre $f(w) = w_1^2 + 3w_2^2$ desde $w_0 = (1, -2)$ con $\eta = 0{,}1$, $\beta_1 = 0{,}9$, $\beta_2 = 0{,}999$, $\varepsilon = 10^{-8}$ y 20 pasos exactos (con corrección de
  sesgo, $t$ desde 1). Entrega $\lfloor 10^9\,\lvert w_1\rvert\rfloor$ tras los 20 pasos. Valor de control: tras el primer paso, $w = (0{,}9,\,-1{,}9)$.
- **d.** Atención de producto punto escalado con $d_k = 2$ y $Q = \begin{pmatrix}1&0\\2&-1\\0&3\end{pmatrix}$, $K = \begin{pmatrix}1&1\\-1&2\\3&0\end{pmatrix}$, $V = \begin{pmatrix}2&1\\0&-3\\4&5\end{pmatrix}$.
  Entrega $\lfloor 10^9\,o_{21}\rfloor$, siendo $o_{21}$ el elemento de la fila 2, columna 1 de la salida. Valor de control: cada fila de pesos de atención suma 1.
- **e.** Número de parámetros entrenables de un decodificador con vocabulario de 1000, $d = 64$, 4 cabezas, $d_{ff} = 256$ y 2 capas. Cada capa tiene dos
  normalizaciones ($\gamma$ y $\beta$), proyecciones $W_q, W_k, W_v, W_o$ de $d\times d$ **con sesgo**, y una red densa $d \to d_{ff} \to d$ con sesgos. Hay una normalización
  final, la matriz de embedding está atada a la capa de salida (se cuenta una vez) y la codificación de posición es sinusoidal (sin parámetros). Valor de
  control: una capa lineal $10 \to 5$ con sesgo tiene 55.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e}`

## Repaso: lo que debe quedarte dentro de un mes

1. Una red es una composición de capas no lineales; sin no linealidad, la profundidad no sirve.
2. La retropropagación es la regla de la cadena hacia atrás y cuesta lo que una pasada; compruébala con diferencias centrales.
3. El paso máximo lo fija la curvatura; Adam reescala cada coordenada.
4. Convoluciones (pesos compartidos), residuos (gradiente que no se desvanece) y atención (medias ponderadas por parecido).
5. Log-softmax estable y validación honesta, siempre.

## Siguiente

En las ramas: `ia-redes-desde-cero` y `ia-pytorch` (implementación), `ia-vision`, `ia-nlp`, `ia-transformers-llm` y `ia-llm-locales`; para los fundamentos
probabilísticos, `ia-bayesiana` y `ia-modelos-generativos`.
