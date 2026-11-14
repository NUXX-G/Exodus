---
id: ia-nlp
title: "Procesamiento del lenguaje natural: texto y Unicode, tokenización (BPE), modelos de n-gramas y perplejidad, representaciones (tf-idf, word2vec), clasificación, redes recurrentes, secuencia a secuencia con atención y evaluación (BLEU, ROUGE, F1)"
area: ia-cuantica
trunk_level: 17
prerequisites: [ia-pytorch, mat-teoria-informacion]
academic_sources:
  - "Jurafsky, D.; Martin, J. H. Speech and Language Processing, 3ª ed. (borrador en línea, web.stanford.edu/~jurafsky/slp3), consultado en noviembre de 2026; Manning, C.; Schütze, H. Foundations of Statistical Natural Language Processing. MIT Press, 1999."
  - "Sennrich, R.; Haddow, B.; Birch, A. Neural Machine Translation of Rare Words with Subword Units. ACL 2016; Mikolov, T. et al. Distributed Representations of Words and Phrases and their Compositionality. NeurIPS 2013."
  - "Hochreiter, S.; Schmidhuber, J. Long Short-Term Memory. Neural Computation 9(8), 1997; Bahdanau, D.; Cho, K.; Bengio, Y. Neural Machine Translation by Jointly Learning to Align and Translate. ICLR 2015."
  - "Papineni, K. et al. BLEU. ACL 2002; Lin, C.-Y. ROUGE. ACL Workshop 2004; Post, M. A Call for Clarity in Reporting BLEU Scores (sacreBLEU). WMT 2018; Unicode Standard Annex #15 (formas de normalización)."
exercises:
  - id: bpe
    tier: 3
    prompt: |
      Entrena BPE sobre el corpus «casa» × 6, «casas» × 3, «caserio» × 2, «cosa» × 4, «cosas» × 2: cada palabra empieza dividida en caracteres más un símbolo final `</w>`, y en cada paso se fusiona el par adyacente más frecuente (contando las repeticiones de las palabras; si hay empate, el par que va antes en orden alfabético, comparando «a b» como texto). Tras 4 fusiones, ¿qué símbolos se han creado (en orden) y cómo queda segmentada «casas»?

      Respuesta: `fusiones;segmentación`, cada parte con sus símbolos separados por espacios.
    answers: ["sha256:0d05708573c9cc9c10b1cf35275702859256646c1ac0877ed58cda977624531c"]
  - id: perplejidad
    tier: 2
    prompt: |
      Un modelo de bigramas con suavizado de Laplace (suma 1; V = número de tipos distintos de las frases de entrenamiento sin contar `<s>`) se entrena con «<s> el gato come </s>», «<s> el perro come </s>» y «<s> el gato duerme </s>». ¿Qué perplejidad da a «<s> el perro duerme </s>» (media sobre las 4 transiciones)?

      Respuesta: con 4 decimales.
    answers: ["sha256:906875540f3d0cede6ee40a398df62c36bd9484e6302dc85cb6173954637512a"]
  - id: tf-idf
    tier: 1
    prompt: |
      Con los documentos «el gato come pescado», «el perro come carne», «el gato duerme» y «un pez nada», tf = frecuencia relativa en el documento e idf = ln(N/df), ¿qué tf-idf tienen «gato» y «el» en el primer documento?

      Respuesta: `gato;el` con 4 decimales.
    answers: ["sha256:73b2901c78df021edb24f600a33a5c3c615e6f1bb064a4ee8786010d5058e033"]
  - id: vectores-de-palabras
    tier: 2
    prompt: |
      Con los vectores rey = (0.9, 0.8, 0.1); reina = (0.9, 0.1, 0.8); hombre = (0.1, 0.9, 0.1); mujer = (0.1, 0.2, 0.8); fruta = (0.2, 0.1, 0.1), ¿qué similitud del coseno tienen «rey» y «reina», y qué palabra (sin contar rey, hombre ni mujer) está más cerca de rey − hombre + mujer?

      Respuesta: `coseno;palabra` (el coseno con 4 decimales).
    answers: ["sha256:24e1cd52417178a44e6708281fbf88b3b23be5e0776075fd6af2c2ec9c085941"]
  - id: distancia-de-edicion
    tier: 1
    prompt: |
      ¿Qué distancia de Levenshtein (inserción, borrado y sustitución con coste 1) hay entre «inteligencia» y «diligencia», y entre «ejecucion» e «intencion»?

      Respuesta: `primera;segunda`.
    answers: ["sha256:37aa7858d15e526023c427fea4c89851844c80d860819a6f2f7b889d1539d0a2"]
  - id: bleu
    tier: 3
    prompt: |
      ¿Qué BLEU (4-gramas, media geométrica de las precisiones recortadas, penalización por brevedad, en porcentaje) obtiene la traducción «the quick brown fox jumps over the lazy cat» frente a la referencia «the quick brown fox jumped over the lazy dog»? (Compruébalo con sacreBLEU.)

      Respuesta: con 2 decimales.
    answers: ["sha256:98f5cc751c7ae71b0ad57494b914ccc2b3ea973934313d7fcec2e1c0f44b0052"]
  - id: rouge-1
    tier: 2
    prompt: |
      Con las mismas frases (resumen candidato y referencia), ¿qué F1 de ROUGE-1 (unigramas recortados) obtienen?

      Respuesta: con 4 decimales.
    answers: ["sha256:2190b1b19f61267bc66b072ec87f63e2393eb94e2f0e1de5f447a4fe3cfdf110"]
  - id: f1-de-entidades
    tier: 2
    prompt: |
      Entidades de referencia (inicio, fin, tipo): (0, 2, PER), (5, 6, LOC), (8, 10, ORG), (12, 13, LOC). Predichas: (0, 2, PER), (5, 6, ORG), (8, 10, ORG), (14, 15, PER). Con coincidencia exacta de tramo y tipo, ¿qué precisión, exhaustividad y F1 hay?

      Respuesta: `p;r;f1` con 4 decimales.
    answers: ["sha256:b1703693075f788b4fe2522d216a46eb99e5177c88f72defd57015f8ff709667"]
  - id: parametros-de-un-lstm
    tier: 2
    prompt: |
      ¿Cuántos parámetros tiene `nn.LSTM(100, 256)` en PyTorch (una capa, unidireccional)? Ten en cuenta que PyTorch usa dos vectores de sesgo por puerta.

      Respuesta: un número.
    answers: ["sha256:21fd0dc364645d85a89b473b562a689331361a109e148dd30e3092449f983753"]
  - id: normalizacion-unicode
    tier: 1
    prompt: |
      ¿Qué longitud (en puntos de código) tiene «e» + U+0301 (acento combinable) tras NFC, qué longitud tiene «é» (U+00E9) tras NFD, y en qué se convierte la ligadura «ﬁ» (U+FB01) con NFKC?

      Respuesta: `nfc;nfd;texto`.
    answers: ["sha256:9136bf5d1c1609568c101169f39465dd8280a5548a101563e08eea73c9b5be1a"]
  - id: muestreo-negativo
    tier: 2
    prompt: |
      word2vec toma las palabras negativas con probabilidad proporcional a la frecuencia elevada a 0,75. Con frecuencias 100, 10 y 1, ¿qué probabilidad recibe la primera, y cuál recibiría con la frecuencia sin elevar?

      Respuesta: `con;sin` con 4 decimales.
    answers: ["sha256:2ac09f3f1f8bfc9318a9e278b1aa52026d1c542275a8dfbf4c080af356736869"]
  - id: temperatura
    tier: 1
    prompt: |
      Para los logits (2, 1, 0), ¿qué probabilidad da softmax al primero con temperatura 0,5 y con temperatura 2?

      Respuesta: `T=0,5;T=2` con 4 decimales.
    answers: ["sha256:be95fe2a7dfbaa66535d3dec99e2f7cb10113711665bd820c6ea79fc181b6da1"]
  - id: bayes-ingenuo
    tier: 2
    prompt: |
      Un clasificador de Bayes ingenuo multinomial (Laplace, vocabulario de 3 palabras, priores iguales) tiene los recuentos positivos {"bueno":8,"malo":1,"peli":6} y negativos {"bueno":2,"malo":9,"peli":5}. Para la reseña «bueno peli malo malo», ¿qué clase predice y cuánto vale la diferencia de log-probabilidades a posteriori (pos − neg)?

      Respuesta: `clase;diferencia` con 4 decimales.
    answers: ["sha256:5f2fca82a0bda26a1b7af2d49cc175ea01f4514c4c1fd0b6934320dc5800e0e0"]
---

El lenguaje es el dato más abundante y más difícil: ambiguo, dependiente del contexto, con vocabulario abierto y en miles de idiomas y alfabetos. El procesamiento del lenguaje natural (PLN) lo convierte
en números con los que se puede calcular, y ha pasado por tres épocas: reglas, estadística (n-gramas, modelos lineales) y redes neuronales, que culminan en los transformers y los grandes modelos de lenguaje
de `ia-transformers-llm`. Este nodo recorre los fundamentos que siguen debajo de todo eso: cómo se trocea y normaliza el texto, qué es un modelo de lenguaje y cómo se mide, cómo se representan palabras y
documentos, y cómo se evalúan los sistemas. Usa la entropía de [[mat-teoria-informacion]] y las herramientas de [[ia-pytorch]].

## Objetivos

Al terminar sabrás:

1. Normalizar texto con Unicode y tokenizarlo, incluido el entrenamiento de BPE.
2. Construir y evaluar un modelo de lenguaje de n-gramas (suavizado, perplejidad).
3. Representar documentos y palabras (bolsa de palabras, tf-idf, word2vec) y clasificarlos.
4. Explicar las redes recurrentes y la atención en modelos de secuencia a secuencia.
5. Evaluar con las métricas adecuadas (exactitud, F1 de entidades, BLEU, ROUGE) y conocer sus límites.

## Qué debes dominar antes

[[ia-pytorch]] (módulos y entrenamiento) y [[mat-teoria-informacion]] (entropía, entropía cruzada).

> [!question] Test de entrada
> 1. ¿Cuántos bytes ocupa la letra «ñ» en UTF-8?
> 2. ¿Qué es la entropía cruzada entre dos distribuciones?
> 3. ¿Por qué no basta con partir el texto por los espacios?
>
> Respuestas: 2; el número medio de bits que se gastan al codificar datos de la distribución p con un código óptimo para q, H(p, q) = −Σ p log q; porque la puntuación se pega a las palabras, hay idiomas
> sin espacios (chino, japonés), palabras compuestas y contracciones, y el vocabulario de palabras enteras es abierto: siempre aparecen palabras nuevas.

## 1. Texto y Unicode

Un texto es una secuencia de **puntos de código** Unicode codificada en bytes (UTF-8 casi siempre). El mismo carácter visible puede tener varias representaciones: «é» como un punto de código (U+00E9) o
como «e» más un acento combinable (U+0301). La **normalización** (UAX #15) las unifica: **NFC** compone, **NFD** descompone, y las formas de **compatibilidad** (NFKC, NFKD) además sustituyen variantes
tipográficas (ligaduras, superíndices, anchuras) por sus equivalentes básicos. Sin normalizar, dos cadenas iguales a la vista no son iguales para el programa. Además: minúsculas solo si el problema lo permite
(«Apple» y «apple» no son lo mismo), cuidado con las tildes en español («sí» y «si») y con los emojis (varios puntos de código para un solo símbolo).

## 2. Tokenización

Partir en palabras deja un vocabulario abierto (siempre hay palabras desconocidas); partir en caracteres hace las secuencias muy largas. La solución actual son las **subpalabras**:

- **BPE** (Sennrich et al., 2016, adaptado de un algoritmo de compresión): se empieza con caracteres (más un símbolo de fin de palabra) y se fusiona repetidamente el par adyacente **más frecuente** del
  corpus, hasta alcanzar el tamaño de vocabulario deseado. Las palabras frecuentes acaban en un solo símbolo y las raras se descomponen en trozos conocidos. GPT usa BPE sobre **bytes**: así cualquier texto
  se puede representar, en cualquier alfabeto.
- **WordPiece** (BERT) elige la fusión que más aumenta la verosimilitud; **Unigram** (SentencePiece) parte de un vocabulario grande y elimina los símbolos que menos aportan.
- Consecuencias prácticas: los modelos «cuentan» en *tokens*, no en palabras; los idiomas menos representados en el corpus de entrenamiento necesitan más *tokens* por palabra (son más caros y tienen menos
  contexto); y los números y el código se trocean de forma poco natural, lo que explica parte de los errores aritméticos de los modelos.

## 3. Modelos de lenguaje de n-gramas

Un **modelo de lenguaje** asigna probabilidad a una secuencia: P(w₁…wₙ) = Π P(wᵢ | w₁…wᵢ₋₁). Los de **n-gramas** suponen que solo importan las n − 1 palabras anteriores (Markov) y estiman con recuentos:
P(wᵢ | wᵢ₋₁) = c(wᵢ₋₁ wᵢ) / c(wᵢ₋₁). Un bigrama nunca visto daría probabilidad 0, así que se **suaviza**: Laplace (sumar 1 a todos los recuentos y V al denominador; simple pero quita demasiada masa a lo
visto), Kneser-Ney (la mejor clásica: usa en cuántos contextos distintos aparece una palabra), o interpolación entre órdenes.

La **perplejidad** mide un modelo sobre un texto de prueba: PP = exp(−(1/N) Σ log P(wᵢ | contexto)), el número medio de opciones entre las que el modelo «duda» en cada paso. Es la exponencial de la entropía
cruzada; menor es mejor, y solo se comparan perplejidades con el mismo vocabulario y la misma tokenización.

## 4. Representar documentos y palabras

- **Bolsa de palabras** y **tf-idf**: un documento es un vector de recuentos; tf-idf pondera cada término por su frecuencia en el documento (tf) y por lo raro que es en la colección, idf = log(N/df). Las
  palabras que salen en todos los documentos («el») pesan cero. Sigue siendo una base excelente para búsqueda (BM25 es su refinamiento) y clasificación.
- **Vectores de palabras** (word2vec, Mikolov et al., 2013): una red de una capa aprende a predecir el contexto de cada palabra (*skip-gram*) con **muestreo negativo** (distinguir contextos reales de palabras
  tomadas al azar con probabilidad proporcional a la frecuencia elevada a 0,75, que da más oportunidades a las palabras raras). Las palabras con contextos parecidos quedan cerca (similitud del **coseno**),
  y aparecen regularidades como rey − hombre + mujer ≈ reina, aunque menos limpias de lo que sugieren los ejemplos famosos. Un vector por palabra no distingue sentidos («banco»); los modelos contextuales
  (ELMo, BERT) dan un vector por aparición. También heredan **sesgos** del corpus, que hay que medir.
- **Distancia de edición** (Levenshtein): el mínimo de inserciones, borrados y sustituciones para pasar de una cadena a otra, por programación dinámica; base de correctores y de la búsqueda aproximada.

## 5. Clasificación de textos

Análisis de sentimiento, detección de spam, temas, intención. Modelos lineales sobre tf-idf (regresión logística) y **Bayes ingenuo** (supone independencia de las palabras dada la clase; con suavizado de
Laplace y logaritmos para no desbordar) son rápidos e interpretables y a menudo difíciles de batir con pocos datos. Con más datos, se ajusta un modelo preentrenado. La **temperatura** de un softmax (dividir
los logits entre T) controla lo afilada que es la distribución: T < 1 concentra, T > 1 aplana.

## 6. Redes recurrentes y atención

Una **red recurrente** procesa la secuencia paso a paso con un estado oculto hₜ = f(W·xₜ + U·hₜ₋₁ + b). Entrenada con retropropagación en el tiempo, sufre gradientes que se desvanecen o explotan en
secuencias largas. **LSTM** (Hochreiter y Schmidhuber, 1997) añade una celda de memoria con tres puertas (olvido, entrada, salida) y un candidato: cuatro bloques de pesos, por eso tiene 4·(h·(d + h) + h)
parámetros (más un segundo vector de sesgos en PyTorch); **GRU** simplifica a dos puertas. Para traducir, un **codificador** resume la frase de origen y un **decodificador** genera la de destino; comprimirlo
todo en un vector fijo fallaba con frases largas, y la **atención** (Bahdanau et al., 2015) permitió al decodificador mirar en cada paso una combinación ponderada de todos los estados del codificador. Quitar
la recurrencia y quedarse solo con la atención es el transformer.

## 7. Evaluación

- **Clasificación**: exactitud, y con clases desequilibradas precisión, exhaustividad y F1 por clase (y sus medias macro o micro).
- **Reconocimiento de entidades**: F1 a nivel de **entidad** con coincidencia exacta de tramo y tipo (una entidad con el tipo equivocado es a la vez un falso positivo y un falso negativo).
- **Traducción**: **BLEU** (Papineni et al., 2002) = penalización por brevedad × media geométrica de las precisiones recortadas de 1 a 4-gramas, en porcentaje. Depende mucho de la tokenización y del número de
  referencias: hay que dar las cifras con **sacreBLEU** y su firma (Post, 2018). Correlaciona mal con el juicio humano en frases sueltas; métricas aprendidas (COMET) lo hacen mejor.
- **Resumen**: **ROUGE** (Lin, 2004), centrada en la exhaustividad de n-gramas (ROUGE-1, ROUGE-2) o en la subsecuencia común más larga (ROUGE-L).
- Para los modelos generativos actuales, cada vez más evaluación humana o con modelos jueces, con sus propios sesgos.

## 8. Comprobar con un programa

BPE, un modelo de bigramas con perplejidad y la distancia de edición, en Python puro y con datos distintos de los ejercicios:

```python
# BPE, bigramas con Laplace y perplejidad, y distancia de Levenshtein
import collections
import math

def entrenar_bpe(corpus, fusiones):
    palabras = {tuple(w) + ("</w>",): c for w, c in corpus.items()}
    hechas = []
    for _ in range(fusiones):
        pares = collections.Counter()
        for s, c in palabras.items():
            for a, b in zip(s, s[1:]):
                pares[(a, b)] += c
        mejor = min(pares, key=lambda p: (-pares[p], p))
        hechas.append("".join(mejor))
        nuevas = {}
        for s, c in palabras.items():
            t, i = [], 0
            while i < len(s):
                if i + 1 < len(s) and (s[i], s[i + 1]) == mejor:
                    t.append(s[i] + s[i + 1]); i += 2
                else:
                    t.append(s[i]); i += 1
            nuevas[tuple(t)] = c
        palabras = nuevas
    return hechas, palabras

fus, seg = entrenar_bpe({"bajo": 5, "bajos": 2, "abajo": 3, "rojo": 4}, 3)
print("fusiones:", fus, " «bajos» →", next(s for s in seg if "".join(s).startswith("bajos")))

frases = [s.split() for s in ["<s> yo leo libros </s>", "<s> tu lees libros </s>", "<s> yo leo revistas </s>"]]
V = len({w for s in frases for w in s} - {"<s>"})
uni = collections.Counter(w for s in frases for w in s[:-1])
bi = collections.Counter(p for s in frases for p in zip(s, s[1:]))
def perplejidad(frase):
    s = frase.split()
    lp = sum(math.log((bi[(a, b)] + 1) / (uni[a] + V)) for a, b in zip(s, s[1:]))
    return math.exp(-lp / (len(s) - 1))
print("PP vista: %.3f  PP nueva: %.3f" % (perplejidad("<s> yo leo libros </s>"), perplejidad("<s> tu lees revistas </s>")))

def levenshtein(a, b):
    prev = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        cur = [i]
        for j, cb in enumerate(b, 1):
            cur.append(min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (ca != cb)))
        prev = cur
    return prev[-1]
print("gato → pato:", levenshtein("gato", "pato"), " sábado → sabado:", levenshtein("sábado", "sabado"))
```

Salida:

```
fusiones: ['jo', 'jo</w>', 'ba']  «bajos» → ('ba', 'jo', 's', '</w>')
PP vista: 3.409  PP nueva: 5.030
gato → pato: 1  sábado → sabado: 1
```

## 9. Errores típicos

- No normalizar Unicode; quitar tildes o pasar a minúsculas sin pensar si cambian el significado.
- Comparar perplejidades con tokenizaciones distintas; dar BLEU sin decir cómo se calculó.
- Tf-idf o vocabulario ajustados con todo el corpus antes de separar la prueba (fuga).
- Evaluar entidades por *token* en vez de por entidad completa.
- Olvidar que un tokenizador y un modelo van juntos: el modelo solo entiende los *tokens* con que se entrenó.

## 10. Resumen

- Unicode: NFC/NFD/NFKC; UTF-8. Tokenización por subpalabras: BPE (fusionar el par más frecuente), WordPiece, Unigram; BPE de bytes.
- n-gramas, suavizado (Laplace, Kneser-Ney), perplejidad = exp(entropía cruzada).
- Bolsa de palabras, tf-idf (idf = log N/df), BM25; word2vec (*skip-gram*, muestreo negativo con ^0,75), coseno, analogías y sesgos; Levenshtein.
- Bayes ingenuo y modelos lineales; temperatura.
- RNN, LSTM (cuatro bloques), GRU; secuencia a secuencia y atención.
- Métricas: F1 de entidades, BLEU con sacreBLEU, ROUGE, y sus límites.

## Repaso: lo que debe quedarte dentro de un mes

1. Normaliza Unicode antes de comparar texto.
2. BPE fusiona el par más frecuente, una y otra vez.
3. Perplejidad = exp de la entropía cruzada media.
4. idf = log(N/df): lo que sale en todas partes no informa.
5. BLEU sin sacreBLEU y su firma no se puede comparar.

## Siguiente

`ia-transformers-llm` (la arquitectura que sustituyó a las recurrentes) y `ia-llm-locales`.
