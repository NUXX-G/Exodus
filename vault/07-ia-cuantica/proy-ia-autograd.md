---
id: proy-ia-autograd
title: "Proyecto: diferenciación automática y redes neuronales desde cero (grafo de cómputo, modo inverso, perceptrón multicapa, entrenamiento, optimizadores y generalización)"
area: ia-cuantica
trunk_level: 15
kind: proyecto
prerequisites: [ia-redes-profundas, mat-calculo-multivariable]
academic_sources:
  - "Baydin, A. G.; Pearlmutter, B. A.; Radul, A. A.; Siskind, J. M. Automatic Differentiation in Machine Learning: a Survey. JMLR 18(153), 2018."
  - "Rumelhart, D. E.; Hinton, G. E.; Williams, R. J. Learning representations by back-propagating errors. Nature 323, 1986."
  - "Glorot, X.; Bengio, Y. Understanding the difficulty of training deep feedforward neural networks. AISTATS 2010; Kingma, D. P.; Ba, J. Adam: A Method for Stochastic Optimization. ICLR 2015."
  - "Prince, S. J. D. Understanding Deep Learning. MIT Press, 2023 (caps. 6 a 9); Goodfellow, I.; Bengio, Y.; Courville, A. Deep Learning. MIT Press, 2016 (cap. 6 y 7)."
attachments: [prueba.sh]
exercises:
  - id: hito-1-grafo-adelante
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `ag adelante GRAFO` lee un grafo de cómputo escalar (formato del §2) y imprime el valor de cada nodo en el orden en que se define. Una variable no definida, una redefinición, una operación desconocida, un error de dominio (log de un no positivo, raíz de un negativo, división por cero), la falta de `salida` o un exponente no constante en `pow` terminan con código 1.

      Comprueba con `bash prueba.sh ./ag 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:a655f2fbaee9d240df2e5be0e5c31b0f63fb413cebc8081bf241a643b8aa8b3c"]
  - id: hito-2-diferenciacion-inversa
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `ag atras GRAFO` calcula por diferenciación automática en modo inverso el gradiente de la salida respecto a cada entrada, acumulando las contribuciones de los nodos que se usan varias veces (§3).

      Comprueba con `bash prueba.sh ./ag 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:e686b7f0281c6b41f4e82f0274892abfa67168380a106e513ac2e5e722887995"]
  - id: hito-3-perceptron-multicapa
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `ag mlp RED DATOS` carga una red con sus pesos y un lote de datos (§4), calcula la entropía cruzada media con softmax e imprime la pérdida y los gradientes de todos los pesos y sesgos.

      Comprueba con `bash prueba.sh ./ag 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:8c6445890ebf0dddd80fd3c1caccec5dcee3f3986f603e74f7771ebc24e50eed"]
  - id: hito-4-entrenamiento
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `ag entrena PROBLEMA N ARQUITECTURA ACTIVACION SEMILLA EPOCAS LR sgd` genera los datos (§5), inicializa la red con Glorot y el generador de Exodus, entrena con descenso de gradiente por lotes completos e imprime la pérdida en cinco momentos y los aciertos finales; los entrenamientos largos se comprueban con umbrales.

      Comprueba con `bash prueba.sh ./ag 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c6e046d7990746409fa35443767fe0ad97c674585dd4c39e84e4fbbe5f7aa402"]
  - id: hito-5-optimizadores
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** Añade los optimizadores `momentum` y `adam` con las fórmulas exactas del §6 y compara su progreso con el descenso de gradiente simple en las espirales.

      Comprueba con `bash prueba.sh ./ag 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:b235f95644ce92f36c15aec6d7ef8101ca9f67ba9150bed85d28dc7efbbb8073"]
  - id: hito-6-generalizacion
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** `ag evalua … LAMBDA` separa entrenamiento y prueba (un punto de cada cinco a prueba), entrena con regularización L2 de intensidad LAMBDA e imprime la pérdida y los aciertos de entrenamiento, los aciertos de prueba y la matriz de confusión (§7).

      Comprueba con `bash prueba.sh ./ag 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:ea105d98911ad2805057c0fec77424441fe2035a3aa52b59b0b7cb1f0980c77c"]
---

Vas a escribir **`ag`**, el corazón de PyTorch o JAX en pequeño: un motor de **diferenciación automática en modo inverso** que calcula gradientes exactos de cualquier composición de operaciones, y con él
una red neuronal que aprende de verdad, sin bibliotecas. Es el proyecto que convierte [[ia-redes-profundas]] en algo que entiendes por dentro: cuando hayas escrito la retropropagación, la regla de la cadena
de [[mat-calculo-multivariable]] y el entrenamiento de un modelo dejarán de ser cajas negras. Es el mismo camino que sigue Andrej Karpathy en *Neural Networks: Zero to Hero*.

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `ag` en el lenguaje que quieras (sin NumPy para el motor, sin PyTorch ni TensorFlow), con las órdenes `adelante`, `atras`, `mlp`, `entrena` y `evalua`. El adjunto **`prueba.sh`** las ejecuta con
casos preparados y da un código por hito si todo coincide; con `-v` muestra las salidas. Los valores se imprimen con 7 cifras (`%.6e`) y las pérdidas de entrenamiento con 4 (`%.3e`), como el redondeo de
x·(1 + 10⁻¹²).

**Por qué hay comprobaciones exactas y comprobaciones con umbral.** Dos implementaciones correctas que suman en distinto orden difieren en el último bit de cada operación. En un entrenamiento corto esa
diferencia no se ve, pero en uno largo (sobre todo con Adam cerca del mínimo, donde g/√v amplifica el ruido) crece hasta cambiar la tercera cifra de la pérdida. Por eso los entrenamientos de 100 épocas se
comprueban exactamente y los de miles con **umbrales** ("pérdida menor que…, aciertos al menos…"). No es una limitación de la prueba: es la reproducibilidad real del aprendizaje profundo.

## 2. Grafos escalares (hito 1)

Una instrucción por línea (`#` comenta): `entrada NOMBRE VALOR`; `NOMBRE = OP ARG` con OP en `neg exp log sin cos tanh sigmoid relu sqrt`; `NOMBRE = OP ARG1 ARG2` con OP en `add sub mul div pow`
(en `pow`, el exponente es una constante); y una última línea `salida NOMBRE`. Los argumentos son nombres ya definidos o constantes numéricas. sigmoid(x) = 1/(1 + e^{−x}); relu(x) = max(0, x).

`adelante` imprime `nombre valor` para cada entrada y cada nodo, en orden.

## 3. Modo inverso (hito 2)

Cada nodo guarda su valor y un gradiente ∂salida/∂nodo, que empieza en 0 (y en 1 para la salida). Recorriendo los nodos **en orden inverso**, cada uno suma a sus argumentos su gradiente por la derivada
local: para `mul`, ∂(xy)/∂x = y; para `tanh`, 1 − tanh²; para `relu`, 1 si x > 0 y 0 si no (también en x = 0); etc. Un nodo que se usa varias veces **acumula** gradiente de todos sus usos: es la regla
de la cadena multivariable. `atras` imprime `salida v` y `dNOMBRE g` para cada entrada, en orden. Comprueba tus gradientes con diferencias finitas centradas (con h ≈ 10⁻⁶, el error relativo debe ser del orden
de 10⁻⁸ a 10⁻¹⁰): es la prueba que usan todos los marcos de aprendizaje.

## 4. El perceptrón multicapa (hito 3)

- **Red**: bloques `capa ENTRADAS SALIDAS ACTIVACION` (activación `tanh`, `relu`, `sigmoid` o `lineal`), seguidos de `W` con SALIDAS × ENTRADAS números (fila a fila: W[o][i]) y `b` con SALIDAS números. Cada capa
  calcula a' = act(W·a + b).
- **Datos**: una línea por ejemplo con las entradas y la etiqueta entera (de 0 al número de salidas − 1; si no, código 1).
- **Pérdida**: la entropía cruzada media L = −(1/n) Σ log softmax(z)_y sobre las salidas z de la última capa, calculada de forma estable (restando el máximo). Su gradiente respecto a z es (softmax(z) − y)/n.
- `mlp RED DATOS` imprime `perdida`, y para cada capa k, `dWk` (en el mismo orden que W) y `dbk`. Puedes escribirlo con retropropagación explícita por capas o con un motor general de tensores; la prueba no lo
  distingue.

## 5. Entrenamiento (hito 4)

`entrena PROBLEMA N ARQUITECTURA ACTIVACION SEMILLA EPOCAS LR OPTIMIZADOR`:

- **Problemas** (con el generador congruencial de 64 bits de Exodus, s ← (6364136223846793005·s + 1442695040888963407) mod 2⁶⁴, u = ⌊s/2¹¹⌋/2⁵³, con s = 12345 para los datos):
  - `xor`: los cuatro puntos de la puerta XOR (N se ignora).
  - `espirales`: para i = 0…N−1, clase c = i mód 2, k = ⌊i/2⌋, t = k/(N/2), r = 0,1 + 0,9t, θ = 3πt + cπ; x = r cos θ + 0,03(2u − 1) e y = r sen θ + 0,03(2u − 1) (dos números seguidos).
  - `anillos`: c = i mód 2, θ = 2πu, r = 0,5 (c = 0) o 1 (c = 1) más 0,1(2u − 1); x = r cos θ, y = r sen θ.
- **Arquitectura** como `2-16-16-2` (entra 2, sale 2); la activación indicada en las capas ocultas y `lineal` en la última.
- **Inicialización de Glorot** con s = SEMILLA: capa a capa, W[o][i] = √(6/(entradas + salidas))·(2u − 1) fila a fila, y sesgos a cero.
- **Lote completo**: en cada época, la pérdida y el gradiente sobre todos los datos y una actualización (`sgd`: w ← w − lr·g). Imprime `epoca e perdida L` para e = 0, ⌊E/4⌋, ⌊E/2⌋, ⌊3E/4⌋ y E (la pérdida
  con los parámetros tras e actualizaciones), y al final `aciertos k de n` (la clase predicha es la de mayor salida; con empate, la 0).

## 6. Optimizadores (hito 5)

Para cada parámetro, con g su gradiente: `momentum`: v ← 0,9v − lr·g, w ← w + v. `adam`: m ← 0,9m + 0,1g, v ← 0,999v + 0,001g², m̂ = m/(1 − 0,9ᵗ), v̂ = v/(1 − 0,999ᵗ), w ← w − lr·m̂/(√v̂ + 10⁻⁸), con t
el número de actualización (desde 1) y m y v a cero al empezar. Verás que con el mismo número de épocas Adam resuelve las espirales y el descenso de gradiente simple se queda atascado en una meseta.

## 7. Generalización (hito 6)

`evalua PROBLEMA N ARQUITECTURA ACTIVACION SEMILLA EPOCAS LR OPTIMIZADOR LAMBDA`: los puntos con i mód 5 = 4 son de **prueba** y los demás de **entrenamiento** (en su orden). Entrena solo con los de
entrenamiento minimizando L + (λ/2)·Σ W² (los sesgos no se regularizan; el gradiente añade λW). Imprime `perdida_entrenamiento` (con la penalización), `aciertos_entrenamiento`, `aciertos_prueba` y
`confusion a b c d` (verdaderos 0 predichos 0, verdaderos 0 predichos 1, verdaderos 1 predichos 0, verdaderos 1 predichos 1).

Dos lecciones que la prueba pone a la vista: si el conjunto de prueba se toma como "el último 20 %" de unos datos **ordenados** (en las espirales, por radio), no mides generalización sino extrapolación a una zona
que la red no ha visto; y una regularización excesiva (λ = 0,001 aquí) produce **subajuste**: la penalización domina y la red ni siquiera aprende el conjunto de entrenamiento.

## 8. Arquitectura recomendada

Un tipo `Valor` (o `Tensor`) con su dato, su gradiente, sus padres y una función que propaga el gradiente a los padres; la retropropagación como un recorrido en **orden topológico inverso**. Para la red,
empieza con escalares (lento pero clarísimo) y pasa a matrices cuando funcione. Pruebas: gradientes contra diferencias finitas en cada operación, la pérdida inicial ≈ log 2 = 0,693 con dos clases y pesos
pequeños, y sobreajustar a propósito un lote de 4 ejemplos hasta pérdida casi nula.

## 9. Ampliaciones

Minilotes con barajado (Fisher-Yates con el generador), normalización por lotes, abandono (*dropout*), la tasa de aprendizaje con calentamiento y caída coseno, una capa convolucional y MNIST, el modo directo
con números duales para comparar costes, y un motor con gradientes de orden superior. El siguiente proyecto, `proy-ia-mini-gpt`, construye un *transformer* sobre este mismo motor.

## 10. Recursos

La revisión de Baydin et al. sobre diferenciación automática; el artículo original de la retropropagación; Glorot y Bengio (inicialización); Kingma y Ba (Adam); Prince y Goodfellow et al. Más en la
[página de recursos de IA](/recursos/ia-cuantica).
