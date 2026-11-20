---
id: proy-ia-mini-gpt
title: "Proyecto: un mini-GPT desde cero (tokenización BPE, transformer causal, retropropagación, AdamW, generación y evaluación de lo que aprende)"
area: ia-cuantica
trunk_level: 19
kind: proyecto
prerequisites: [ia-transformers-llm, proy-ia-autograd, ia-pytorch]
academic_sources:
  - "Vaswani, A. et al. Attention Is All You Need. NeurIPS 2017; Radford, A. et al. Language Models are Unsupervised Multitask Learners (GPT-2). OpenAI, 2019."
  - "Brown, T. et al. Language Models are Few-Shot Learners (GPT-3). NeurIPS 2020 (apéndice B: AdamW con β₂ = 0,95, recorte de la norma a 1, calentamiento y caída coseno hasta el 10 %, decaimiento de pesos 0,1)."
  - "Sennrich, R.; Haddow, B.; Birch, A. Neural Machine Translation of Rare Words with Subword Units. ACL 2016 (BPE); Loshchilov, I.; Hutter, F. Decoupled Weight Decay Regularization. ICLR 2019 (AdamW)."
  - "Ba, J. L.; Kiros, J. R.; Hinton, G. E. Layer Normalization, 2016; Hendrycks, D.; Gimpel, K. Gaussian Error Linear Units (GELUs), 2016; Press, O.; Wolf, L. Using the Output Embedding to Improve Language Models. EACL 2017; Raschka, S. Build a Large Language Model (From Scratch). Manning, 2024."
attachments: [prueba.sh, texto.txt]
exercises:
  - id: hito-1-tokenizador-bpe
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `gpt bpe FICHERO K [FRASE…]` entrena un BPE a nivel de bytes sobre el fichero con las reglas del §2 (como mucho K fusiones; par más frecuente, con empate el menor; nuevo token 256 + k; se para si ningún par aparece dos veces) e imprime una línea `fusion id a b texto frecuencia` por fusión (el texto del token con los bytes fuera de 0x21–0x7e y la barra invertida como `\xHH`), después `tokens N de M` (longitud final frente a bytes originales) y, para cada frase, `codifica` y sus tokens tras aplicar las fusiones en orden. Un fichero que no existe o un K que no sea un entero no negativo terminan con código 1.

      Comprueba con `bash prueba.sh ./gpt 1` (con texto.txt en la misma carpeta).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:0b29bade73621a9d78c4a60629591362577c19d160d0b59f0fc15534b007188a"]
  - id: hito-2-transformer
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `gpt adelante D-H-L SEMILLA SECUENCIA` inicializa el modelo del §3 (vocabulario de 13 caracteres, contexto 9, pre-LN, atención causal multicabeza, MLP con GELU, pesos atados, inicialización con el generador de Exodus en el orden exacto del §3), lo aplica a los n − 1 primeros caracteres de la secuencia (de 2 a 10 caracteres del vocabulario) e imprime `perdida` (la entropía cruzada media de predecir los n − 1 siguientes), `logits` (los 13 de la última posición) y una línea `atencion l h` por bloque y cabeza con los pesos de atención de la última posición. Valores con `%.6e`, como el redondeo de x·(1 + 10⁻¹²). Una configuración en la que H no divide a D, un carácter fuera del vocabulario o una longitud fuera de 2–10 terminan con código 1.

      Comprueba con `bash prueba.sh ./gpt 2` (con texto.txt en la misma carpeta).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:6d43b3289f6660e098a28b0d9c66e8ee2bf5c74c31f7926ad63f5e128aa91771"]
  - id: hito-3-retropropagacion
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `gpt gradiente D-H-L SEMILLA S1 S2 …` (secuencias de exactamente 10 caracteres) calcula sobre el lote la pérdida de las posiciones de la respuesta (§3: las de índice 5 a 8) y su gradiente respecto a todos los parámetros, e imprime `perdida`, una línea `nombre norma` por parámetro en el orden del §3 (norma de Frobenius de su gradiente) y `total` (la norma global). Valores con `%.6e`, como el redondeo de x·(1 + 10⁻¹²).

      Comprueba con `bash prueba.sh ./gpt 3` (con texto.txt en la misma carpeta).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c3288cf63ce5826dd3188b6f246525f9e140e40082b3b50046a0f6c4030caaba"]
  - id: hito-4-entrenamiento
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `gpt entrena D-H-L SEMILLA PASOS LR LOTE` entrena con los datos, la partición aleatoria y el AdamW del §5 (recorte de la norma, calentamiento y caída coseno, decaimiento solo en las matrices de los bloques) e imprime `paso t perdida L norma N lr X` en los pasos 1, ⌊P/4⌋, ⌊P/2⌋, ⌊3P/4⌋ y P, y al final `prueba perdida L aciertos k de n` sobre las sumas de prueba (con `%.3e`). LR y LOTE deben ser positivos; si no, código 1.

      Comprueba con `bash prueba.sh ./gpt 4` (con texto.txt en la misma carpeta).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d787422a176e4b03f203d37f727d7a2c14916ed74f3e584c7454cc168779b59c"]
  - id: hito-5-generacion
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** `gpt genera D-H-L SEMILLA PASOS LR LOTE TEMPERATURA aa+bb= …` entrena como el hito 4 y, para cada prompt, genera como mucho 4 caracteres (§6): con temperatura 0, el de mayor logit; si no, muestrea de softmax(logits/τ) con el mismo generador, que continúa tras el entrenamiento. Imprime `prompt continuación`, con el salto de línea escrito como `\n`. Un prompt que no tenga la forma `aa+bb=` o una temperatura negativa terminan con código 1.

      Comprueba con `bash prueba.sh ./gpt 5` (con texto.txt en la misma carpeta).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f8dde8b071edbb32660f6fdae3bc9e08e340ad6b18afa6114a23cb08a4dc7c02"]
  - id: hito-6-generalizacion
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** `gpt evalua D-H-L SEMILLA PASOS LR LOTE PARTICION` entrena con la partición `aleatoria` (§5) o `unidades` (prueba: las sumas con 7a + 3b múltiplo de 10) e imprime `entrenamiento perdida L aciertos k de n`, `prueba perdida L aciertos k de n` y `acarreos c aciertos k de n` para c = 0, 1 y 2 (sobre la prueba). Los entrenamientos largos se comprueban por tramos de aciertos; una partición desconocida termina con código 1.

      Comprueba con `bash prueba.sh ./gpt 6` (con texto.txt en la misma carpeta).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:bb4191feb0eac5a795e8db1210a925bec653549d95b170324c28eb60ce8ab290"]
---

Vas a construir **`gpt`**, un modelo de lenguaje con la misma arquitectura que GPT-2 (en miniatura: unas decenas de miles de parámetros en lugar de 1500 millones), y a enseñarle a **sumar** números de dos
cifras leyendo ejemplos como `12+34=046`. Escribirás el tokenizador, el transformer, su retropropagación, el optimizador, la generación de texto y la evaluación, y acabarás respondiendo con datos a la pregunta
que importa en cualquier modelo de lenguaje: ¿ha aprendido la regla o se ha memorizado los ejemplos? Aplica [[ia-transformers-llm]] y continúa [[proy-ia-autograd]]; para el cálculo con tensores, apóyate en
[[ia-pytorch]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `gpt` con seis órdenes (`bpe`, `adelante`, `gradiente`, `entrena`, `genera` y `evalua`), una por hito, con el contrato exacto de los ejercicios. Puedes usar NumPy, PyTorch o tu propio motor de
[[proy-ia-autograd]], pero calcula en **coma flotante de doble precisión** (float64): las comprobaciones exactas dependen de ello. El adjunto **`prueba.sh`** ejecuta tu programa y da un código por hito si todo
coincide (con `-v` muestra las salidas); necesita `texto.txt` en su misma carpeta. Los valores se imprimen con `%.6e` y las pérdidas y tasas de entrenamiento con `%.3e`, como el redondeo de x·(1 + 10⁻¹²).

Como en [[proy-ia-autograd]], los cálculos cortos se comprueban exactamente y los **entrenamientos largos por tramos** («acierta al menos el 95 % de la prueba»): dos implementaciones correctas que suman en distinto
orden se separan en la última cifra, y en miles de pasos esa diferencia cambia la trayectoria, aunque no lo que el modelo aprende. Un entrenamiento completo dura alrededor de un minuto con NumPy.

## 2. Tokenización BPE (hito 1)

Un modelo de lenguaje no ve letras sino **tokens**. GPT-2 usa **BPE a nivel de bytes** (Sennrich et al., 2016, adaptado por Radford et al.): se empieza con los 256 bytes y se repite K veces «fusionar el par
de tokens contiguos más frecuente en uno nuevo». Las reglas de este proyecto: el texto son sus bytes (UTF-8, así que `ñ` son dos bytes que el BPE acabará fusionando); en cada paso se cuentan los pares
contiguos (con solapamiento: en `aaa` el par `aa` aparece dos veces), se elige el más frecuente y, con empate, el menor (comparando primero el primer token); el nuevo token es 256 + k; se sustituyen sus
apariciones de izquierda a derecha sin solapar; y se para antes si ningún par aparece al menos dos veces. Para **codificar** un texto nuevo se aplican las fusiones aprendidas en su orden. Así nacen
tokens como `de\x20`, `farera\x20` o `\xc3\xb1` (la ñ): la compresión del texto es la medida de lo que el tokenizador ha aprendido de él.

Para las sumas, el resto del proyecto usa un vocabulario mínimo de 13 caracteres: `0`–`9` (tokens 0 a 9), `+` (10), `=` (11) y el salto de línea (12).

## 3. La arquitectura (hito 2)

Con D (dimensión), H (cabezas, que dividen a D) y L (bloques), y un contexto de T = 9 posiciones, el modelo, para una secuencia de índices x₀…xₙ₋₁:

1. **Incrustaciones**: h = wte[xᵢ] + wpe[i] (tablas de 13 × D y 9 × D).
2. **L bloques** con la normalización **antes** (pre-LN, como GPT-2): h ← h + Atención(LN₁(h)); h ← h + MLP(LN₂(h)).
   - LN(x) = g·(x − μ)/√(σ² + 10⁻⁵) + b, con la media y la varianza (dividida por D) de cada vector.
   - **Atención**: [q | k | v] = x·W_qkv + b_qkv (W_qkv es D × 3D: las columnas 0…D−1 dan q, las D…2D−1 k y las 2D…3D−1 v); cada cabeza j usa el trozo de columnas j·D/H … (j+1)·D/H − 1;
     pesos A = softmax(q·kᵀ/√(D/H)) con la **máscara causal** (la posición i solo mira las posiciones ≤ i); salida concat(A·v)·W_proj + b_proj.
   - **MLP**: GELU(x·W_fc + b_fc)·W_fc2 + b_fc2, con 4D neuronas ocultas y la GELU de GPT-2, ½x(1 + tanh(√(2/π)(x + 0,044715x³))).
3. **Salida**: logits = LN_f(h)·wteᵀ: la misma tabla wte sirve para entrar y para salir (**pesos atados**, Press y Wolf).

Las matrices multiplican por la derecha (y = x·W, con W de entradas × salidas). **Inicialización**, con el generador de Exodus (s ← (6364136223846793005·s + 1442695040888963407) mód 2⁶⁴, u = ⌊s/2¹¹⌋/2⁵³)
empezando en la semilla: los pesos aleatorios son a·(2u − 1), con a = 0,02·√3 (desviación típica 0,02), extraídos fila a fila en este orden: wte, wpe, y en cada bloque W_qkv, W_proj, W_fc y W_fc2. W_proj y
W_fc2, las proyecciones que suman al flujo residual, se escalan por 1/√(2L) (como en GPT-2, para que la varianza no crezca con la profundidad). Las ganancias de LN valen 1 y todos los sesgos, 0. Nombres y
orden de los parámetros: `wte`, `wpe`, y por bloque l `bl.ln1.g`, `bl.ln1.b`, `bl.qkv.W`, `bl.qkv.b`, `bl.proj.W`, `bl.proj.b`, `bl.ln2.g`, `bl.ln2.b`, `bl.fc.W`, `bl.fc.b`, `bl.fc2.W`, `bl.fc2.b`, y al
final `lnf.g`, `lnf.b`.

La **pérdida** es la entropía cruzada de predecir cada carácter siguiente. Para las sumas solo importa la respuesta: con la secuencia `aa+bb=ccc⏎`, la entrada son sus 9 primeros caracteres y se promedia la
pérdida de las 4 posiciones que predicen `ccc⏎` (las de índice 5 a 8). Las cifras de los sumandos son aleatorias: no tiene sentido castigar al modelo por no adivinarlas.

## 4. Retropropagación (hito 3)

Con PyTorch, autograd lo hace por ti; con NumPy, escribirás las derivadas a mano, y es el mejor ejercicio posible para entender el transformer. Las tres que más cuestan:

- **softmax**: si A = softmax(s) por filas, ∂s = A ⊙ (∂A − Σⱼ ∂Aⱼ·Aⱼ). La máscara no necesita nada más: las posiciones enmascaradas tienen A = 0.
- **LayerNorm**: con x̂ normalizado y r = 1/√(σ² + ε), ∂x = r·(∂x̂ − media(∂x̂) − x̂·media(∂x̂ ⊙ x̂)), donde ∂x̂ = g ⊙ ∂y.
- **pesos atados**: wte recibe gradiente de dos sitios, la entrada (sumando en cada fila usada) y la salida; hay que acumular los dos.

Compruébalo siempre con diferencias finitas centradas sobre unos pocos pesos, y si usas PyTorch, compara tus gradientes de NumPy con los suyos: las dos referencias de este proyecto coinciden en todas las cifras.

## 5. Entrenamiento (hito 4)

**Datos**: las 10 000 sumas a + b con a, b de 00 a 99, en el orden a·100 + b. **Partición** aleatoria: con el generador empezando en s = 2024 se extrae un u por suma, en ese orden, y es de **prueba** si
u < 0,1 (975 sumas); las demás son de entrenamiento.

**Optimización**, con los ajustes del entrenamiento de GPT-3: un generador empieza en la semilla, inicializa el modelo y, después, elige cada lote: LOTE índices ⌊u·n⌋ entre las n sumas de entrenamiento. En el paso
t (desde 1): se calcula la pérdida del lote y su gradiente; se **recorta** la norma global: g ← g·min(1, 1/(‖g‖ + 10⁻⁶)); la tasa sube linealmente durante los W = ⌊PASOS/10⌋ primeros pasos, lr·t/W, y luego
baja con un coseno hasta el 10 %: lr·(0,1 + 0,45·(1 + cos(π(t − W)/(PASOS − W)))); y se aplica **AdamW**: m ← 0,9m + 0,1g, v ← 0,95v + 0,05g², m̂ = m/(1 − 0,9ᵗ), v̂ = v/(1 − 0,95ᵗ),
w ← w − lrₜ·(m̂/(√v̂ + 10⁻⁸) + λw), con el decaimiento de pesos λ = 0,1 solo para las cuatro matrices de cada bloque (ni incrustaciones, ni sesgos, ni LN). El decaimiento **desacoplado** (fuera del cociente
de Adam) es la aportación de Loshchilov y Hutter.

`entrena` informa en los pasos 1, ⌊P/4⌋, ⌊P/2⌋, ⌊3P/4⌋ y P de la pérdida del lote (antes de actualizar), la norma del gradiente (antes de recortar) y la tasa de ese paso, y al final de la pérdida y los
aciertos sobre las sumas de prueba. Un **acierto** es que la generación codiciosa desde `aa+bb=` produzca exactamente los 4 caracteres `ccc⏎`.

## 6. Generación (hito 5)

Un modelo de lenguaje genera **un token cada vez**: calcula los logits de la última posición, elige un token, lo añade y repite. **Codiciosa** (temperatura 0): el de mayor logit (con empate, el primero).
**Con temperatura** τ: probabilidades softmax(logits/τ), y con un u del generador (el mismo que entrenó, que sigue donde se quedó) se elige el primer token i con u < p₀ + … + pᵢ. Temperaturas bajas concentran
la probabilidad y altas la reparten: con τ = 2 el modelo «inventa» sumas. Se generan como mucho 4 caracteres, parando en el salto de línea. Un sistema real no recalcula toda la secuencia en cada paso: guarda
las k y v de las posiciones anteriores (la **caché KV**), una optimización que no cambia el resultado.

## 7. Evaluación: ¿regla o memoria? (hito 6)

`evalua` entrena y mide la pérdida y los aciertos en entrenamiento y en prueba, y los de prueba según el número de **acarreos** de la suma (0, 1 o 2). Las preguntas que responde:

- ¿El modelo **generaliza**? Con la partición aleatoria, un modelo de 2 bloques acierta casi todas las sumas que nunca ha visto. Uno demasiado pequeño no aprende ni las de entrenamiento: le falta capacidad.
- ¿Qué pasa con una **partición mal hecha**? Con `unidades`, la prueba son las sumas con 7a + 3b múltiplo de 10. Parece una elección «aleatoria», pero 7a + 3b mód 10 solo depende de las **cifras de las
  unidades**: las combinaciones de unidades de la prueba no aparecen nunca en el entrenamiento. El modelo acierta el 100 % del entrenamiento y falla buena parte de la prueba: no ha aprendido la regla de la suma
  como la aprendemos nosotros, sino una tabla de combinaciones de cifras, y fuera de ella no sabe qué hacer. Es la diferencia entre generalizar **dentro de la distribución** y **fuera de ella**, y la razón por
  la que el diseño de los conjuntos de evaluación es la mitad del trabajo en aprendizaje automático (lo verás otra vez en `lab-ia-fuga-de-datos`).

## 8. Arquitectura recomendada

- Un diccionario de parámetros con nombres, una función `adelante(parámetros, lote) → logits (y caché)` y otra `atrás`; el optimizador recorre los parámetros por nombre.
- Pruebas propias: con pesos pequeños la pérdida inicial es casi log 13 ≈ 2,56; los pesos de atención de cada fila suman 1 y son 0 por encima de la diagonal; el gradiente coincide con diferencias finitas;
  un lote de 4 sumas repetido se aprende de memoria en unas decenas de pasos; y la generación con caché KV da lo mismo que sin ella.
- Vectoriza por lotes: un bucle de Python por ejemplo hace el entrenamiento cien veces más lento.

## 9. Ampliaciones

Entrenar a nivel de carácter sobre `texto.txt` (o sobre un libro de dominio público) y ver cómo pasa de letras al azar a palabras; usar los tokens BPE del hito 1 como vocabulario; abandono (dropout);
incrustaciones de posición rotatorias (RoPE); la caché KV; sumas de 3 o más cifras y la **generalización en longitud** (entrenar con 2 cifras y probar con 3, donde los transformers suelen fallar); escribir la
respuesta al revés (las unidades primero, como en la demostración de suma de minGPT); y visualizar los mapas de atención para descubrir qué posiciones mira el modelo al calcular cada cifra.

## 10. Recursos

Los artículos de Vaswani et al., GPT-2 y GPT-3; minGPT, nanoGPT y minbpe de Andrej Karpathy (con sus vídeos «Let's build GPT» y «Let's build the GPT Tokenizer»); el libro de Raschka; y The Illustrated
Transformer de Jay Alammar. La teoría, en [[ia-transformers-llm]].
