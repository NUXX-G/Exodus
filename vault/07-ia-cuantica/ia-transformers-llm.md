---
id: ia-transformers-llm
title: "Transformers y grandes modelos de lenguaje: atención, arquitectura, posiciones (sinusoidal, RoPE), preentrenamiento y leyes de escala, ajuste por instrucciones y preferencias, generación, caché KV, eficiencia y limitaciones"
area: ia-cuantica
trunk_level: 18
prerequisites: [ia-nlp, ia-pytorch, ia-redes-desde-cero]
academic_sources:
  - "Vaswani, A. et al. Attention Is All You Need. NeurIPS 2017; Radford, A. et al. Language Models are Unsupervised Multitask Learners (GPT-2). OpenAI, 2019; Brown, T. et al. Language Models are Few-Shot Learners. NeurIPS 2020; Devlin, J. et al. BERT. NAACL 2019."
  - "Kaplan, J. et al. Scaling Laws for Neural Language Models. arXiv:2001.08361, 2020; Hoffmann, J. et al. Training Compute-Optimal Large Language Models (Chinchilla). NeurIPS 2022; Su, J. et al. RoFormer. Neurocomputing 568, 2024."
  - "Ainslie, J. et al. GQA. EMNLP 2023; Dao, T. et al. FlashAttention. NeurIPS 2022; Hu, E. et al. LoRA. ICLR 2022; Holtzman, A. et al. The Curious Case of Neural Text Degeneration. ICLR 2020."
  - "Ouyang, L. et al. Training language models to follow instructions with human feedback. NeurIPS 2022; Rafailov, R. et al. Direct Preference Optimization. NeurIPS 2023; Prince, S. J. D. Understanding Deep Learning. MIT Press, 2023 (cap. 12)."
exercises:
  - id: atencion-escalada
    tier: 3
    prompt: |
      Con Q = [[1, 0], [0, 1], [1, 1]], K = [[1, 0], [0, 1], [1, −1]] y V = [[1, 2], [3, 4], [5, 6]] (d = 2), calcula softmax(QKᵀ/√d)·V. ¿Qué salida da la tercera consulta sin máscara, y la segunda con máscara causal?

      Respuesta: `x,y;x,y` con 4 decimales.
    answers: ["sha256:90efff8bdeb0c2f72f0a3873a6034bcc6a5de3c87bf4e930351947a9e53b2415"]
  - id: mascara-causal
    tier: 1
    prompt: |
      En una secuencia de 5 *tokens* con máscara causal, ¿cuántos pesos de atención no son cero (contando la atención de cada posición a sí misma)?

      Respuesta: un número.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: parametros-de-un-bloque
    tier: 2
    prompt: |
      ¿Cuántos parámetros tiene `nn.TransformerEncoderLayer(768, 12, 3072)` de PyTorch (atención con proyecciones Q, K, V y de salida con sesgo, red de dos capas con sesgo y dos LayerNorm)?

      Respuesta: un número.
    answers: ["sha256:c089ae38a7a2b769af85ab7ab7d960ccc1a5dc6e7313f49299b538337bf872fb"]
  - id: cache-kv
    tier: 2
    prompt: |
      Un modelo de 32 capas con 32 cabezas de dimensión 128 guarda en la caché KV las claves y los valores de 4096 *tokens* en 16 bits. ¿Cuántos GiB ocupa para una secuencia? ¿Y si usa atención con consultas agrupadas (GQA) con 8 cabezas de clave y valor?

      Respuesta: `mha;gqa` en GiB.
    answers: ["sha256:3a796a3748e1a2c77a1fd6bd652e886f1ef2deabac2da18d05eb3e6e84465d84"]
  - id: posicion-sinusoidal
    tier: 2
    prompt: |
      Con la codificación de posición sinusoidal del transformer original y d = 4 (PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(pos/10000^(2i/d))), ¿cuánto valen PE(2, 1) y PE(3, 2)?

      Respuesta: `primero;segundo` con 4 decimales.
    answers: ["sha256:a5339802b34dbe1ed47e969cafab99f3332db5e8369d5f0563da4d26ee7fb7c0"]
  - id: rope
    tier: 3
    prompt: |
      Con RoPE en dos dimensiones y θ = 0,5, el vector q = (1, 2) se rota un ángulo m·θ en su posición m y k = (3, −1) un ángulo n·θ en la suya. ¿Qué producto escalar dan q en la posición 5 y k en la 3? (Comprueba que coincide con las posiciones 2 y 0: solo importa la diferencia.)

      Respuesta: con 4 decimales.
    answers: ["sha256:d06e176dcf9b14103d098b6635c7901ac76b822a41617720d9343aa4887db38c"]
  - id: presupuesto-de-entrenamiento
    tier: 2
    prompt: |
      Con la aproximación de 6·P·D operaciones, ¿cuántas cuesta entrenar un modelo de 7·10⁹ parámetros con 2·10¹² *tokens*? ¿Y cuántos *tokens* serían los óptimos según la regla de Chinchilla de unos 20 por parámetro?

      Respuesta: `operaciones;tokens` en notación científica con 1 decimal (por ejemplo `1.2e+21;3.4e+10`).
    answers: ["sha256:5a9b15d24bbc148e777e79a21c5dd23d773a48e02c10d5620020a2351a193c3f"]
  - id: perplejidad-desde-la-perdida
    tier: 1
    prompt: |
      Un modelo de lenguaje tiene una pérdida de entropía cruzada media de 2,0 nats por *token*. ¿Qué perplejidad es?

      Respuesta: con 4 decimales.
    answers: ["sha256:c0ccd5230bf8f1879e9d69d92cec606911cb1270011f5955fd66fc5dc8f1f215"]
  - id: muestreo-de-nucleo
    tier: 2
    prompt: |
      Con las probabilidades ordenadas 0,5; 0,2; 0,15; 0,1; 0,05 y muestreo de núcleo con p = 0,8 (se toman los *tokens* más probables hasta acumular al menos 0,8), ¿cuántos *tokens* quedan y qué probabilidad tiene el primero tras renormalizar?

      Respuesta: `tokens;probabilidad` con 4 decimales.
    answers: ["sha256:501bb2f590ed360cc09f6b8a3807b0fdc8bd9ad5df70b81bc87adf77ac18a88c"]
  - id: lora
    tier: 2
    prompt: |
      LoRA de rango 8 sobre una matriz de 4096 × 4096 añade dos matrices, A (8 × 4096) y B (4096 × 8). ¿Cuántos parámetros entrenables añade y qué fracción son de los de la matriz?

      Respuesta: `parametros;fraccion` con 4 decimales.
    answers: ["sha256:f9f3d52932ac0748d90a90b77da1040bc6359bb5ee101de1867edc82c79e4fc7"]
  - id: memoria-de-los-pesos
    tier: 1
    prompt: |
      ¿Cuántos GB (10⁹ bytes) ocupan los pesos de un modelo de 7·10⁹ parámetros en 16 bits, y cuántos cuantizados a 4 bits (sin contar escalas)?

      Respuesta: `16bits;4bits`.
    answers: ["sha256:a170497690c9a4eaec320f1c3f8008fa4779e40ce9a384d2ae5b23d55bffc181"]
  - id: vocabulario-de-gpt2
    tier: 1
    prompt: |
      ¿Cuántos *tokens* tiene el vocabulario de BPE de bytes de GPT-2 (Radford et al., 2019)?

      Respuesta: un número.
    answers: ["sha256:e561018ed69a4b13e632bf7ef2d474125ccb5efd8eed44ac079b321c481e8e55"]
---

Un gran modelo de lenguaje es, en el fondo, una red que predice el siguiente *token* de un texto, entrenada con una fracción enorme de lo escrito por la humanidad. De esa tarea tan simple, con suficiente
escala, salen capacidades sorprendentes: traducir, resumir, programar, razonar paso a paso. La arquitectura que lo hizo posible es el **transformer** (2017), que sustituyó la recurrencia por **atención**:
cada posición mira directamente a todas las demás, y el cálculo se paraleliza por completo. Este nodo explica el transformer pieza a pieza, cómo se entrena y se adapta un modelo de lenguaje, cómo genera texto,
cuánto cuesta y dónde falla. Continúa [[ia-nlp]] y usa [[ia-pytorch]] y [[ia-redes-desde-cero]].

## Objetivos

Al terminar sabrás:

1. Calcular la atención con producto escalar escalado, con máscaras, y la atención multicabeza.
2. Describir un bloque transformer completo, contar sus parámetros y explicar las variantes (solo codificador, solo decodificador).
3. Explicar la información de posición (sinusoidal, aprendida, RoPE).
4. Razonar sobre el preentrenamiento, las leyes de escala, el ajuste por instrucciones y por preferencias.
5. Generar texto (voraz, muestreo, núcleo) y estimar memoria y coste (caché KV, GQA, cuantización, LoRA).

## Qué debes dominar antes

[[ia-nlp]] (tokenización, modelos de lenguaje, perplejidad, atención en secuencia a secuencia), [[ia-pytorch]] y [[ia-redes-desde-cero]] (normalización, residuales, coste 6·P·D).

> [!question] Test de entrada
> 1. ¿Qué es la perplejidad de un modelo de lenguaje?
> 2. ¿Por qué una red recurrente no se puede paralelizar a lo largo de la secuencia durante el entrenamiento?
> 3. ¿Qué hace una conexión residual?
>
> Respuestas: la exponencial de la entropía cruzada media por *token*: cuántas opciones equiprobables «tiene» el modelo en cada paso; porque el estado de cada paso depende del anterior; suma la entrada de
> una capa a su salida (x + F(x)), dando al gradiente un camino directo y permitiendo redes muy profundas.

## 1. Atención

Cada posición produce una **consulta** q, una **clave** k y un **valor** v (proyecciones lineales de su vector). La salida de la posición i es una media de los valores ponderada por lo bien que su consulta
casa con cada clave:

```
Atención(Q, K, V) = softmax(Q·Kᵀ / √d_k) · V
```

El factor 1/√d_k evita que los productos escalares crezcan con la dimensión y saturen el softmax (gradientes casi nulos). Una **máscara causal** pone −∞ en las posiciones futuras antes del softmax: así un modelo
de lenguaje no «ve» los *tokens* que debe predecir, y una secuencia de n posiciones solo tiene n(n + 1)/2 pesos no nulos. La **atención multicabeza** reparte d_modelo en h cabezas de dimensión d/h que atienden
a cosas distintas (sintaxis, correferencia, posición) y concatena sus salidas con una proyección final. El coste es cuadrático en la longitud: la matriz de pesos es n × n por cabeza.

## 2. El bloque transformer

Un bloque (versión moderna, con normalización **previa**):

```
x = x + AtenciónMulticabeza(Norm(x))
x = x + RedDensa(Norm(x))        # dos capas: d → 4d → d, con GELU o SwiGLU
```

Parámetros por bloque con sesgos: 4·(d² + d) en la atención (Q, K, V y salida), d·f + f + f·d + d en la red densa (f suele ser 4d), y 2·d por cada LayerNorm. Variantes: **solo codificador** (BERT:
atención bidireccional, entrenado rellenando palabras enmascaradas; para clasificar y extraer), **solo decodificador** (GPT, LLaMA: atención causal, entrenado prediciendo el siguiente *token*; el modelo de
todos los LLM actuales) y **codificador-decodificador** (el original, T5; traducción). Mejoras habituales: RMSNorm, SwiGLU, sin sesgos, pesos de entrada y salida compartidos.

## 3. Posición

La atención es invariante a permutaciones: sin información de posición, «el perro mordió al hombre» y «el hombre mordió al perro» serían iguales. Opciones:

- **Sinusoidal** (Vaswani et al.): PE(pos, 2i) = sin(pos/10000^(2i/d)), PE(pos, 2i+1) = cos(pos/10000^(2i/d)), sumada a la entrada; cada par de dimensiones es un reloj de distinta frecuencia.
- **Aprendida** (GPT-2): un vector por posición, sin extrapolar más allá de la longitud de entrenamiento.
- **RoPE** (Su et al.): rota cada par de dimensiones de q y k un ángulo proporcional a la posición. Como girar q un ángulo mθ y k uno nθ y hacer el producto escalar equivale a girar por (m − n)θ, la atención
  depende solo de la **posición relativa**. Es la de LLaMA y casi todos los modelos abiertos; con ajustes de frecuencias (interpolación, YaRN) se amplía el contexto.

## 4. Preentrenamiento y escala

Se entrena minimizando la entropía cruzada del siguiente *token* sobre billones de *tokens* (texto web filtrado y deduplicado, libros, código, artículos). El coste es de unas 6·P·D operaciones. Las **leyes de
escala** (Kaplan et al., 2020) muestran que la pérdida baja como una ley de potencias con los parámetros, los datos y el cálculo; **Chinchilla** (Hoffmann et al., 2022) corrigió el reparto óptimo: para un
presupuesto fijo, los parámetros y los *tokens* deben crecer a la par, con unos 20 *tokens* por parámetro (hoy se entrena mucho más allá de ese punto para que el modelo sea barato de usar). La pérdida se
traduce en perplejidad como e^pérdida. Capacidades como el **aprendizaje en contexto** (resolver una tarea a partir de ejemplos en el propio mensaje, GPT-3) aparecen con la escala.

## 5. Ajuste: instrucciones y preferencias

Un modelo preentrenado continúa textos; no sigue instrucciones. Se ajusta en dos fases:

1. **Ajuste supervisado** (SFT) con pares instrucción-respuesta de calidad.
2. **Alineamiento con preferencias**: con comparaciones humanas (o de modelos) entre respuestas. RLHF (Ouyang et al., 2022) entrena un modelo de recompensa y optimiza la política con PPO sin alejarse demasiado
   del modelo de partida (penalización KL); **DPO** (Rafailov et al., 2023) consigue el mismo objetivo con una pérdida de clasificación directa sobre los pares, sin aprendizaje por refuerzo explícito.

El **ajuste eficiente** evita tocar todos los pesos: **LoRA** (Hu et al., 2022) congela W y aprende una corrección de rango bajo W + B·A, con A de r × d y B de d × r; con r pequeño se entrena una fracción
mínima de parámetros y se pueden guardar muchos adaptadores para un mismo modelo base.

## 6. Generar

El modelo da una distribución sobre el vocabulario; cómo se elige el siguiente *token* importa mucho:

- **Voraz** (el más probable): determinista, tiende a repetirse. **Búsqueda en haz**: buena para traducción, mala para texto abierto.
- **Muestreo con temperatura** (dividir los logits entre T), **top-k** (solo los k más probables) y **núcleo** o top-p (Holtzman et al., 2020: los más probables hasta acumular p, renormalizados): el estándar
  para texto abierto.
- **Caché KV**: al generar, las claves y valores de los *tokens* ya procesados no cambian, así que se guardan y cada *token* nuevo solo calcula su propia fila. Ocupa 2 · capas · cabezas_kv · d_cabeza · longitud ·
  bytes por secuencia, y es lo que limita cuántos usuarios y cuánto contexto caben en una GPU. **MQA** y **GQA** (Ainslie et al., 2023) comparten las cabezas de clave y valor entre varias de consulta y la
  reducen en proporción.

## 7. Eficiencia

**FlashAttention** (Dao et al., 2022) calcula la atención exacta por bloques sin escribir la matriz n × n en la memoria lenta, con mucho menos tráfico de memoria. **Cuantización**: pesos en 8 o 4 bits
(con escalas por grupo, GPTQ, AWQ) para que el modelo quepa y vaya más rápido; un modelo de P parámetros ocupa unos 2·P bytes en 16 bits y P/2 en 4 bits. **Decodificación especulativa**: un modelo pequeño
propone varios *tokens* y el grande los verifica de una vez. **Mezcla de expertos** (MoE): cada *token* activa solo algunos de los bloques densos, con muchos parámetros totales y pocos activos.

## 8. Límites

Los LLM **alucinan** (generan con aplomo datos falsos: optimizan verosimilitud, no verdad), tienen un corte de conocimiento, son sensibles a la redacción, heredan sesgos de los datos, y se les puede manipular con
**inyección de instrucciones** (texto que el modelo trata como órdenes). Por eso se combinan con recuperación de documentos (RAG), herramientas y verificación, y se evalúan con cuidado (contaminación de los
conjuntos de prueba con los datos de entrenamiento, *benchmarks* saturados). En Exodus no se usan durante el estudio: la idea es que tú aprendas, no que un modelo responda por ti.

## 9. Comprobar con un programa

Atención multicabeza causal escrita a mano y comparada con PyTorch, y un GPT de caracteres diminuto que aprende a continuar un texto (PyTorch 2.5.1 en CPU; datos distintos de los ejercicios):

```python
# Atención multicabeza causal a mano frente a PyTorch, y un GPT de caracteres diminuto
import math

import torch
import torch.nn as nn
import torch.nn.functional as F

torch.manual_seed(0)
B, T, D, H = 2, 6, 16, 4
x = torch.randn(B, T, D)
mha = nn.MultiheadAttention(D, H, batch_first=True)
mascara = torch.triu(torch.ones(T, T, dtype=torch.bool), 1)          # True = no puede mirar
ref, _ = mha(x, x, x, attn_mask=mascara)

Wq, Wk, Wv = mha.in_proj_weight.chunk(3); bq, bk, bv = mha.in_proj_bias.chunk(3)
def cabezas(t):
    return t.view(B, T, H, D // H).transpose(1, 2)
q, k, v = cabezas(x @ Wq.T + bq), cabezas(x @ Wk.T + bk), cabezas(x @ Wv.T + bv)
pesos = (q @ k.transpose(-2, -1) / math.sqrt(D // H)).masked_fill(mascara, float("-inf")).softmax(-1)
mia = (pesos @ v).transpose(1, 2).reshape(B, T, D) @ mha.out_proj.weight.T + mha.out_proj.bias
print("a mano = nn.MultiheadAttention:", torch.allclose(mia, ref, atol=1e-6))

texto = "la luna alumbra la laguna y la lluvia lava la loma. " * 20
voc = sorted(set(texto)); ix = {c: i for i, c in enumerate(voc)}
datos = torch.tensor([ix[c] for c in texto])

class MiniGPT(nn.Module):
    def __init__(self, V, d=32, ctx=16):
        super().__init__()
        self.emb, self.pos = nn.Embedding(V, d), nn.Embedding(ctx, d)
        capa = nn.TransformerEncoderLayer(d, 4, 4 * d, dropout=0.0, batch_first=True, norm_first=True)
        self.bloques = nn.TransformerEncoder(capa, 2, enable_nested_tensor=False)
        self.salida = nn.Linear(d, V)
    def forward(self, idx):
        T = idx.shape[1]
        h = self.emb(idx) + self.pos(torch.arange(T))
        h = self.bloques(h, mask=nn.Transformer.generate_square_subsequent_mask(T), is_causal=True)
        return self.salida(h)

modelo = MiniGPT(len(voc)); opt = torch.optim.AdamW(modelo.parameters(), lr=3e-3)
for paso in range(301):
    i = torch.randint(0, len(datos) - 17, (32,))
    xb = torch.stack([datos[j:j + 16] for j in i]); yb = torch.stack([datos[j + 1:j + 17] for j in i])
    perdida = F.cross_entropy(modelo(xb).reshape(-1, len(voc)), yb.reshape(-1))
    opt.zero_grad(); perdida.backward(); opt.step()
    if paso in (0, 300):
        print("paso %3d  pérdida %.3f  perplejidad %.2f" % (paso, perdida.item(), math.exp(perdida.item())))

modelo.eval(); idx = torch.tensor([[ix[c] for c in "la lu"]])
with torch.no_grad():
    for _ in range(20):
        idx = torch.cat([idx, modelo(idx[:, -16:])[:, -1].argmax(-1, keepdim=True)], 1)
print("continuación voraz:", "".join(voc[i] for i in idx[0]))
```

Salida:

```
a mano = nn.MultiheadAttention: True
paso   0  pérdida 3.256  perplejidad 25.95
paso 300  pérdida 0.120  perplejidad 1.13
continuación voraz: la luna alumbra la laguna
```

## 10. Errores típicos

- Olvidar el factor 1/√d_k o la máscara causal (el modelo «hace trampa» al entrenar y falla al generar).
- Confundir parámetros con memoria de inferencia: la caché KV y las activaciones pueden superar a los pesos con contextos largos y muchos usuarios.
- Comparar perplejidades con tokenizadores distintos.
- Fiarse de una respuesta fluida: fluidez no es veracidad.
- Evaluar con *benchmarks* que pueden estar en los datos de entrenamiento.

## 11. Resumen

- Atención = softmax(QKᵀ/√d)·V; máscara causal; multicabeza; coste cuadrático.
- Bloque: atención + red densa, residuales y normalización previa; 4(d² + d) + 2df + f + d + 4d parámetros con LayerNorm; codificador, decodificador o ambos.
- Posición: sinusoidal, aprendida, RoPE (relativa por rotación).
- Preentrenamiento (siguiente *token*, 6·P·D), leyes de escala, Chinchilla (~20 *tokens* por parámetro), aprendizaje en contexto.
- SFT, RLHF/DPO; LoRA. Generación: voraz, haz, temperatura, top-k, núcleo; caché KV, MQA/GQA.
- Eficiencia: FlashAttention, cuantización, decodificación especulativa, MoE. Límites: alucinaciones, inyección de instrucciones, contaminación.

## Repaso: lo que debe quedarte dentro de un mes

1. softmax(QKᵀ/√d)·V con máscara causal.
2. RoPE hace que la atención dependa de la posición relativa.
3. ~20 *tokens* por parámetro para un entrenamiento óptimo en cálculo.
4. La caché KV crece con capas, cabezas de KV, longitud y usuarios.
5. Un LLM optimiza verosimilitud, no verdad.

## Siguiente

`ia-llm-locales` (ejecutar estos modelos en tu máquina) y el proyecto `proy-ia-mini-gpt`.
