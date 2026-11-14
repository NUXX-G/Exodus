---
id: ia-llm-locales
title: "Modelos de lenguaje en local: hardware y memoria, formatos (safetensors, GGUF), cuantización, llama.cpp, Ollama y vLLM, prellenado frente a decodificación, servir a varios usuarios, RAG local, evaluación y seguridad"
area: ia-cuantica
trunk_level: 19
prerequisites: [ia-transformers-llm, sys-optimizacion-rendimiento]
academic_sources:
  - "Gerganov, G. et al. llama.cpp y la especificación GGUF (github.com/ggml-org/ggml, docs/gguf.md); biblioteca gguf de Python; documentación de Ollama (github.com/ollama/ollama, docs/api.md); consultados en noviembre de 2026."
  - "Kwon, W. et al. Efficient Memory Management for Large Language Model Serving with PagedAttention. SOSP 2023; documentación de vLLM (docs.vllm.ai)."
  - "Frantar, E. et al. GPTQ. ICLR 2023; Lin, J. et al. AWQ. MLSys 2024; Dettmers, T. et al. LLM.int8(). NeurIPS 2022; Leviathan, Y.; Kalman, M.; Matias, Y. Fast Inference from Transformers via Speculative Decoding. ICML 2023."
  - "Lewis, P. et al. Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. NeurIPS 2020."
exercises:
  - id: cuantizacion-q4-0
    tier: 3
    prompt: |
      En Q4_0 de llama.cpp, cada bloque de 32 pesos guarda una escala d en float16 y 32 enteros de 4 bits: m es el peso de mayor valor absoluto (con su signo), d = m / −8, q = min(15, ⌊x/d + 8,5⌋) y el peso se reconstruye como d·(q − 8) (con d ya redondeada a float16). Para el bloque [0.739, 2.273, -1.325, -1.932, 1.822, 1.462, -2.199, -0.896, 2.43, 0.269, -2.499, 0.375, 2.403, -0.994, -2.147, 1.547, 1.748, -1.998, -1.233, 2.315, 0.637, -2.479, 0.002, 2.479, -0.641, -2.314, 1.237, 1.995, -1.751, -1.544, 2.149, 0.99], ¿qué d (en float16) se guarda, qué q recibe el primer peso y cuál es el máximo error absoluto de la reconstrucción?

      Respuesta: `d;q;error` (d en decimal exacto, error con 4 decimales).
    answers: ["sha256:7dcbb2d4ae573d1f21fb10c92e41e5a8a7a0643048335960490cb3cb3d188990"]
  - id: tamano-en-disco
    tier: 1
    prompt: |
      Q4_0 guarda 32 pesos en 18 bytes y Q8_0 en 34. ¿Cuántos GB (10⁹ bytes) ocupan los pesos de un modelo de 8·10⁹ parámetros en cada formato?

      Respuesta: `q4_0;q8_0`.
    answers: ["sha256:7379d5343ce80f5d87437e4d37e33c0ca7cc24a5715a30ba757076c356d84732"]
  - id: limite-de-la-decodificacion
    tier: 2
    prompt: |
      Al generar de uno en uno, cada *token* exige leer todos los pesos de la memoria. Con un modelo de 4,5 GB y un ancho de banda de 100 GB/s, ¿cuántos *tokens* por segundo se pueden generar como mucho?

      Respuesta: con 1 decimal.
    answers: ["sha256:32e91c1240d5f0df215a3d318b26dfb6755680982d5f6722a6aed0dae644c0b3"]
  - id: prellenado
    tier: 2
    prompt: |
      Procesar un mensaje de 1000 *tokens* (prellenado) cuesta unas 2·P operaciones por *token*. Con P = 8·10⁹ y una GPU que sostiene 50·10¹² operaciones por segundo, ¿cuántos segundos tarda?

      Respuesta: con 2 decimales.
    answers: ["sha256:60bb8f6c52a2aca85b1a3ae08e71f97dd3fa8603b55abefb09ebb0edfe5294d1"]
  - id: cache-kv-de-un-modelo-8b
    tier: 2
    prompt: |
      Un modelo con 32 capas, 8 cabezas de clave y valor (GQA) de dimensión 128 y un contexto de 8192 *tokens* en 16 bits, ¿cuántos GiB de caché KV necesita por secuencia?

      Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: pagedattention
    tier: 2
    prompt: |
      PagedAttention guarda la caché KV en bloques de 16 *tokens* (el valor del artículo original). Una secuencia de 1000 *tokens*, ¿cuántos bloques ocupa y cuántas posiciones quedan sin usar en el último?

      Respuesta: `bloques;sobrantes`.
    answers: ["sha256:c2d0813715883df5707999ffb5703d73c4205df1f4100154d5521630d02e458d"]
  - id: decodificacion-especulativa
    tier: 2
    prompt: |
      Un modelo de borrador propone γ = 4 *tokens* y el grande acepta cada uno con probabilidad α = 0,8 (independiente). Según Leviathan et al. (2023), ¿cuántos *tokens* se obtienen de media por cada pasada del modelo grande?

      Respuesta: con 4 decimales.
    answers: ["sha256:0006e99bf51a6ede48a9c28f6709728092880bdc24a1917340045656bf1a7281"]
  - id: cabecera-gguf
    tier: 1
    prompt: |
      ¿Con qué cuatro bytes (en ASCII) empieza un archivo GGUF y qué número de versión escribe la biblioteca `gguf` actual a continuación?

      Respuesta: `magia;version`.
    answers: ["sha256:a9cf7d8936bc217e71f6b06c9ad70ab6f98dd5f3b5844cff6151ec4ae2081f7d"]
  - id: puerto-de-ollama
    tier: 1
    prompt: |
      ¿En qué puerto escucha por defecto el servidor de Ollama?

      Respuesta: un número.
    answers: ["sha256:6c370f5d4c81f6890cb7ed824f7dd2f95ba213642a532d2c080ad1fe6ba9c936"]
  - id: api-compatible
    tier: 1
    prompt: |
      llama.cpp (`llama-server`), vLLM y Ollama ofrecen una API compatible con la de OpenAI. ¿En qué ruta está el punto de conversación?

      Respuesta: la ruta, empezando por `/`.
    answers: ["sha256:2e3b96fc129d494b171c50c85551ee22c27344965d3231728851ed232d91c898"]
  - id: coste-de-cuantizar
    tier: 2
    prompt: |
      La pérdida media de un modelo en un texto de prueba es 2,10 nats por *token* en 16 bits y 2,16 cuantizado a 4 bits. ¿En qué porcentaje sube la perplejidad?

      Respuesta: con 2 decimales.
    answers: ["sha256:39eecf1242a56852da470a726e64752320f15c0cf3493a073e6853fd6257a334"]
---

Ejecutar un modelo de lenguaje en tu propio equipo o servidor tiene ventajas claras: los datos no salen de casa, no hay coste por *token*, funciona sin conexión y controlas la versión exacta. El precio es
que hay que entender el hardware: un modelo de 8000 millones de parámetros pesa 16 GB en 16 bits, y la velocidad depende más del ancho de banda de la memoria que de la potencia de cálculo. Este nodo enseña a
dimensionar, elegir formato y cuantización, ejecutar con las herramientas de referencia (llama.cpp, Ollama, vLLM), servir a varios usuarios y construir encima aplicaciones útiles, con criterio de calidad y de
seguridad. Continúa [[ia-transformers-llm]] y usa el razonamiento de rendimiento de [[sys-optimizacion-rendimiento]].

## Objetivos

Al terminar sabrás:

1. Calcular cuánta memoria necesitan los pesos, la caché KV y las activaciones, y si un modelo cabe en tu equipo.
2. Explicar los formatos (safetensors, GGUF) y los métodos de cuantización (por bloques, k-quants, GPTQ, AWQ) y medir su coste en calidad.
3. Ejecutar y servir modelos con llama.cpp, Ollama y vLLM, y elegir entre ellos.
4. Razonar sobre el rendimiento: prellenado limitado por cálculo, decodificación limitada por memoria, lotes, PagedAttention, decodificación especulativa.
5. Montar un RAG local y evaluarlo, cuidando licencias, archivos de modelo y exposición de la API.

## Qué debes dominar antes

[[ia-transformers-llm]] (arquitectura, caché KV, GQA, cuantización a grandes rasgos) y [[sys-optimizacion-rendimiento]] (roofline: limitado por memoria o por cálculo).

> [!question] Test de entrada
> 1. ¿Cuántos bytes ocupa un número en float16?
> 2. ¿Qué es el ancho de banda de memoria?
> 3. ¿Qué guarda la caché KV de un transformer?
>
> Respuestas: 2; cuántos bytes por segundo se pueden leer o escribir en la memoria (una GPU de gama alta, del orden de 1-3 TB/s; un portátil, decenas a cientos de GB/s); las claves y los valores de los
> *tokens* ya procesados, para no recalcularlos al generar cada *token* nuevo.

## 1. Memoria

- **Pesos**: parámetros × bytes por parámetro: 2 en 16 bits, 1 en 8 bits, unos 0,5 en 4 bits (más las escalas de cada bloque).
- **Caché KV**: 2 · capas · cabezas de KV · dimensión de cabeza · longitud del contexto · bytes, **por secuencia**. Con GQA es varias veces menor que con atención multicabeza clásica, pero con contextos largos
  y muchos usuarios supera a los pesos.
- **Activaciones y sobrecarga**: búferes de cálculo, el propio programa, el sistema; deja margen.

Si no cabe en la GPU, llama.cpp puede repartir capas entre GPU y CPU (`-ngl`, número de capas en la GPU), a costa de velocidad. En equipos con memoria unificada (Apple Silicon) la RAM entera sirve, con un
ancho de banda intermedio.

## 2. Formatos y cuantización

- **safetensors**: el formato estándar de Hugging Face para pesos sin cuantizar; solo tensores, sin código (a diferencia de los `.bin`/`.pt` de *pickle*, que pueden ejecutar código al cargarse).
- **GGUF**: el formato de llama.cpp. Un único archivo con una cabecera (la magia `GGUF` y una versión), metadatos clave-valor (arquitectura, hiperparámetros, el tokenizador entero, la plantilla de chat) y los
  tensores, cada uno con su tipo de cuantización, alineados para poder mapearlos en memoria directamente.
- **Cuantización por bloques** (la de GGUF): los pesos se agrupan en bloques (32 en los tipos básicos) con una escala común en float16; cada peso se guarda como un entero pequeño. En **Q8_0**, 32 pesos de
  8 bits más la escala: 34 bytes (8,5 bits por peso). En **Q4_0**, 4 bits por peso con desplazamiento 8: la escala es el peso de mayor valor absoluto dividido entre −8, y el error máximo de un bloque es del
  orden de la propia escala. Los **k-quants** (Q4_K_M, Q5_K_M…) usan superbloques con escalas cuantizadas y dan mejor calidad por bit; los **i-quants** van por debajo de 4 bits con libros de códigos.
- **GPTQ** (Frantar et al.) y **AWQ** (Lin et al.) cuantizan usando datos de calibración: GPTQ corrige el error de cada columna con información de segundo orden; AWQ protege los canales de pesos cuyas
  activaciones son grandes. LLM.int8() (Dettmers et al.) trata aparte los valores atípicos de las activaciones.
- **Medir la calidad**: la perplejidad sobre un texto de referencia y la divergencia KL entre las distribuciones del modelo original y el cuantizado (`llama-perplexity` lo hace). Regla práctica: 8 bits es casi
  indistinguible; 5-6 bits, pérdida pequeña; 4 bits, aceptable para la mayoría de los usos en modelos medianos; por debajo, degradación rápida, sobre todo en modelos pequeños.

## 3. Las herramientas

- **llama.cpp**: C/C++ sin dependencias, CPU (con SIMD) y GPU (CUDA, Metal, Vulkan, HIP). `llama-cli` para probar, `llama-server` para servir con API compatible con OpenAI, utilidades para convertir de
  Hugging Face a GGUF y cuantizar. La base de muchas otras herramientas.
- **Ollama**: un envoltorio cómodo sobre llama.cpp con gestor de modelos (`ollama pull`, `ollama run`), un `Modelfile` para fijar parámetros y plantilla, y una API REST en el puerto 11434 (más la ruta
  compatible con OpenAI). Ideal para un equipo personal o un servidor pequeño.
- **vLLM**: un servidor de alto rendimiento para GPU, con **PagedAttention** (Kwon et al., 2023: la caché KV en bloques de tamaño fijo, como páginas de memoria virtual, sin fragmentación ni reservas para el
  máximo contexto), **lotes continuos** (las peticiones entran y salen del lote en cada paso en vez de esperar a que acabe el más largo), cuantizaciones de GPU y API compatible con OpenAI. Para servir a muchos
  usuarios.

## 4. Rendimiento

Una petición tiene dos fases muy distintas:

- **Prellenado**: se procesan todos los *tokens* del mensaje a la vez (unas 2·P operaciones por *token*): son productos de matrices grandes, **limitados por el cálculo**. Determina el tiempo hasta el primer
  *token*.
- **Decodificación**: se genera de uno en uno, y para cada *token* hay que leer **todos** los pesos (y la caché KV): **limitada por el ancho de banda**. Cota superior: *tokens*/s ≈ ancho de banda / tamaño del
  modelo. Por eso cuantizar acelera la generación casi en proporción a lo que encoge el modelo, y por eso servir a varios usuarios a la vez (lotes) aprovecha cada lectura de los pesos para varias secuencias y
  multiplica el rendimiento total.
- **Decodificación especulativa** (Leviathan et al., 2023): un modelo pequeño propone γ *tokens* y el grande los verifica en una sola pasada; si cada uno se acepta con probabilidad α, se obtienen
  (1 − α^(γ+1))/(1 − α) *tokens* por pasada del grande, con exactamente la misma distribución de salida.

## 5. Aplicaciones: RAG local

La **generación aumentada con recuperación** (Lewis et al., 2020) da al modelo información que no tiene (documentos propios, actualizados) y reduce las alucinaciones: se trocean los documentos, se calcula un
vector (*embedding*) de cada trozo con un modelo de *embeddings* local, se guardan en un índice vectorial (o en SQLite con una extensión), y para cada pregunta se recuperan los trozos más parecidos (coseno,
a menudo combinado con BM25 y un reordenador) y se meten en el mensaje con instrucciones de citar las fuentes. Se evalúa por separado la **recuperación** (¿aparece el trozo correcto entre los k primeros?) y la
**respuesta** (¿es fiel a los trozos?, ¿responde a la pregunta?), con un conjunto de preguntas propio.

## 6. Seguridad y legalidad

- **Archivos**: descargar modelos solo de fuentes fiables, preferir safetensors o GGUF, y no cargar *pickles* ajenos.
- **API**: Ollama y `llama-server` no tienen autenticación por defecto; no los expongas a Internet (escuchan en local por defecto; cambiarlo a `0.0.0.0` sin un proxy con autenticación abre tu máquina a
  cualquiera).
- **Inyección de instrucciones**: los documentos recuperados o las páginas web pueden contener órdenes; nunca des al modelo herramientas con más permisos de los que darías al autor de esos textos.
- **Licencias**: cada modelo tiene la suya (Apache-2.0, MIT, licencias comunitarias con restricciones de uso o de número de usuarios); léela antes de usarlo en un producto.

En Exodus no se usa ningún modelo durante el estudio: sirven para construir herramientas, no para que piensen por ti.

## 7. Comprobar con un programa

Cuantizar a Q8_0 y Q4_0 con la biblioteca oficial `gguf` de llama.cpp, medir el tamaño y el error, y escribir y releer la cabecera de un GGUF de verdad (numpy y gguf 0.17.1; datos distintos de los
ejercicios):

```python
# Cuantización por bloques con la biblioteca gguf de llama.cpp: tamaño, error y cabecera del archivo
import numpy as np
import gguf
from gguf.quants import dequantize, quantize

rng = np.random.default_rng(3)
pesos = (rng.standard_normal((256, 256)) * 0.02).astype(np.float32)   # una matriz con la escala típica de una capa
for tipo in (gguf.GGMLQuantizationType.Q8_0, gguf.GGMLQuantizationType.Q4_0):
    crudo = quantize(pesos, tipo)
    rec = dequantize(crudo, tipo)
    bloque, bytes_bloque = gguf.GGML_QUANT_SIZES[tipo]
    error = np.sqrt(np.mean((pesos - rec) ** 2)) / np.sqrt(np.mean(pesos ** 2))
    print("%-5s %.2f bits/peso  %6d bytes (de %d)  error relativo %.4f" % (tipo.name, 8 * bytes_bloque / bloque, crudo.nbytes, pesos.nbytes, error))

w = gguf.GGUFWriter("/tmp/demo.gguf", "llama")
w.add_context_length(4096)
w.add_tensor("capa.peso", quantize(pesos, gguf.GGMLQuantizationType.Q8_0), raw_dtype=gguf.GGMLQuantizationType.Q8_0)
w.write_header_to_file(); w.write_kv_data_to_file(); w.write_tensors_to_file(); w.close()
lector = gguf.GGUFReader("/tmp/demo.gguf")
print("tensores:", [(t.name, t.tensor_type.name) for t in lector.tensors],
      " contexto:", int(lector.fields["llama.context_length"].parts[-1][0]))
```

Salida:

```
Q8_0  8.50 bits/peso   69632 bytes (de 262144)  error relativo 0.0053
Q4_0  4.50 bits/peso   36864 bytes (de 262144)  error relativo 0.0856
tensores: [('capa.peso', 'Q8_0')]  contexto: 4096
```

## 8. Errores típicos

- Calcular la memoria solo con los pesos y olvidar la caché KV del contexto que se va a usar.
- Comparar velocidades sin distinguir prellenado y decodificación, o sin decir la cuantización y el contexto.
- Cuantizar demasiado un modelo pequeño y atribuir sus errores al modelo.
- Exponer el servidor sin autenticación; cargar archivos de modelo de origen dudoso.
- Usar una plantilla de chat distinta de la del entrenamiento del modelo (respuestas extrañas).
- Construir un RAG sin evaluar la recuperación por separado.

## 9. Resumen

- Memoria = pesos (2, 1 o ~0,5 bytes por parámetro) + caché KV (2·capas·cabezas_kv·d·contexto·bytes por secuencia) + margen; reparto GPU/CPU.
- safetensors y GGUF (magia, versión, metadatos, tensores alineados); cuantización por bloques (Q8_0, Q4_0, k-quants, i-quants), GPTQ, AWQ; medir con perplejidad y KL.
- llama.cpp (base, CPU/GPU), Ollama (gestor y API en 11434), vLLM (PagedAttention, lotes continuos); API compatible con OpenAI.
- Prellenado limitado por cálculo; decodificación limitada por memoria (ancho de banda / tamaño); lotes; decodificación especulativa.
- RAG local evaluado por partes; seguridad de archivos, API, inyección de instrucciones y licencias.

## Repaso: lo que debe quedarte dentro de un mes

1. *Tokens*/s al generar ≤ ancho de banda / tamaño del modelo.
2. 4 bits ≈ medio byte por parámetro, más las escalas.
3. La caché KV crece con el contexto y con los usuarios.
4. Nunca expongas la API sin autenticación.
5. Mide la calidad tras cuantizar; no la supongas.

## Siguiente

`ia-aprendizaje-refuerzo`, `ia-modelos-generativos` y el proyecto `proy-ia-mini-gpt`.
