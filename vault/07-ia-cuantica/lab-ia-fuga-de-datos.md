---
id: lab-ia-fuga-de-datos
title: "Laboratorio: encontrar las fugas que inflan las métricas de un modelo (información del futuro, pacientes repetidos y deriva temporal)"
area: ia-cuantica
trunk_level: 14
kind: laboratorio
prerequisites: [ia-aprendizaje-estadistico, ia-python-datos]
academic_sources:
  - "Kaufman, S.; Rosset, S.; Perlich, C.; Stitelman, O. Leakage in Data Mining: Formulation, Detection, and Avoidance. ACM Transactions on Knowledge Discovery from Data 6(4), 2012."
  - "Kapoor, S.; Narayanan, A. Leakage and the reproducibility crisis in machine-learning-based science. Patterns 4(9), 2023."
  - "Roberts, D. R. et al. Cross-validation strategies for data with temporal, spatial, hierarchical, or phylogenetic structure. Ecography 40(8), 2017; Hastie, T.; Tibshirani, R.; Friedman, J. The Elements of Statistical Learning, 2ª ed. Springer, 2009 (§7.10.2: la forma correcta e incorrecta de validar)."
  - "Fawcett, T. An introduction to ROC analysis. Pattern Recognition Letters 27(8), 2006; Moreno-Torres, J. G. et al. A unifying view on dataset shift in classification. Pattern Recognition 45(1), 2012."
attachments: [ingresos.csv, entrena_companero.py]
ctf_flag: "sha256:82bfe4313bd12776831bf2c571c757f5118dadbf9b5b2cddb9b53377da7dbd83"
exercises:
  - id: columna-con-fuga
    tier: 1
    prompt: |
      Usa cada columna numérica, ella sola, como puntuación (su valor tal cual) y calcula su AUC para predecir `reingreso_30d` sobre todos los ingresos. ¿Cuál tiene el AUC más alto? ¿Por qué no se puede usar para predecir en el momento del alta?

      Respuesta: el nombre de la columna.
    answers: ["sha256:6145dc4344194dfdf79c3439b5be236ce2569e4eb36b5ab0926b53ac3a917a6c"]
  - id: auc-de-esa-columna
    tier: 2
    prompt: |
      ¿Qué AUC tiene esa columna sola (con los empates contados como medio acierto)?

      Respuesta: con **3 decimales**.
    answers: ["sha256:e2819fbe22224ae04f453ed6e908e2f66e42d761b045db7c5f8b213411e68f9f"]
  - id: auc-del-companero
    tier: 1
    prompt: |
      Ejecuta `entrena_companero.py`. ¿Qué AUC presume?

      Respuesta: con **3 decimales**.
    answers: ["sha256:f44ad78eb70d417a74de4daecb0392b3b1730e933eb8752920e7056be6c5b412"]
  - id: auc-sin-la-fuga
    tier: 2
    prompt: |
      Repite exactamente lo mismo (k = 25, estandarización con todos los datos, la partición de la columna `particion`) pero sin la columna con fuga. ¿Qué AUC queda?

      Respuesta: con **3 decimales**.
    answers: ["sha256:27d76f035d90d8a8eec298d08066d90576f863c8a111945ba05c27a89b287343"]
  - id: pacientes-a-los-dos-lados
    tier: 2
    prompt: |
      La partición se hizo por filas. ¿Cuántos pacientes distintos tienen ingresos tanto en entrenamiento como en prueba? ¿Qué variables permiten al modelo «reconocerlos»?

      Respuesta: un número.
    answers: ["sha256:8952115444bab6de66aab97501f75fee64be3448203a91b47818e5e8943e0dfb"]
  - id: deriva-temporal
    tier: 3
    prompt: |
      ¿Cuál es la tasa de reingreso de los ingresos de 2021 y 2022 juntos, y la de 2023? ¿Qué le pasaría a un modelo entrenado con los años anteriores?

      Respuesta: `tasa_2021_2022;tasa_2023`, las dos con **3 decimales**.
    answers: ["sha256:89420b5d6a26d4efb18233755b9e6ed8bcf5e39c9dbcbb0963318420d09e660f"]
hints:
  - "Una fuga es cualquier camino por el que la evaluación ve información que el modelo no tendrá cuando se use de verdad. Tres preguntas para cada columna y cada partición: ¿se conoce este dato en el momento de predecir? ¿Hay unidades (pacientes, clientes, máquinas) con filas a los dos lados de la partición? ¿El conjunto de prueba se parece al futuro o al pasado?"
  - "El AUC de una puntuación es la probabilidad de que un positivo al azar puntúe más que un negativo al azar (los empates cuentan medio): con rangos, (suma de rangos de los positivos − n₊(n₊ + 1)/2)/(n₊·n₋). Para pacientes a los dos lados: el conjunto de id_paciente de cada partición y su intersección. Para la partición correcta, agrupa por paciente (aquí, los pacientes con id múltiplo de 4 van a prueba) y ajusta la estandarización solo con el entrenamiento."
  - "Kaufman et al. (2012) clasifican las fugas y cómo detectarlas; Kapoor y Narayanan (2023) documentan cientos de artículos científicos afectados; Roberts et al. (2017) explican la validación por grupos y por bloques de tiempo; Hastie et al. (§7.10.2), el error clásico de preprocesar con todos los datos."
---

> Un compañero del hospital ha entrenado un modelo que predice, en el momento del alta, si un paciente volverá a ingresar en los 30 días siguientes, para ofrecer seguimiento a los de más riesgo. Su script
> da un AUC de casi 0,9 y quiere desplegarlo ya. Te pasan los datos y el script para que des el visto bueno. Tu trabajo es averiguar cuánto vale de verdad.

Pocas cosas son tan frecuentes ni tan caras en aprendizaje automático como una evaluación que mide otra cosa de la que se cree. Este laboratorio aplica [[ia-aprendizaje-estadistico]] y las herramientas de
[[ia-python-datos]] a un caso con tres de las fugas más comunes. Los datos son sintéticos (ningún paciente es real), generados con un modelo de riesgo plausible.

## 1. Los artefactos

- **`ingresos.csv`**: unos 3200 ingresos de 1200 pacientes entre 2021 y 2023: identificadores, día y año, variables del paciente, del ingreso y de su evolución, la partición que usó el compañero
  (`entrenamiento`/`prueba`, aleatoria por filas) y la etiqueta `reingreso_30d`.
- **`entrena_companero.py`**: su modelo, k vecinos más cercanos (k = 25) sobre las variables estandarizadas, con la puntuación igual a la fracción de vecinos que reingresaron y desempates por orden de fila.
  Solo usa la biblioteca estándar de Python: léelo entero.

La **flag** es `EXODUS{auc_X.XXX}` con el AUC honesto: el mismo modelo sin la columna con fuga, con la partición por pacientes (los de `id_paciente` múltiplo de 4 a prueba) y la estandarización ajustada
solo con el entrenamiento.

## 2. Qué deberías concluir

- **Información del futuro.** Una columna que solo existe **después** de lo que se quiere predecir (algo que se registra en las semanas posteriores al alta) tiene un poder predictivo enorme y
  completamente inútil: en el momento del alta todavía no se conoce. Es la fuga más común y la más fácil de detectar con una pregunta: ¿cuándo se conoce este dato? Una columna que, ella sola, predice casi
  tan bien como el modelo entero es siempre sospechosa.
- **Unidades a los dos lados.** Con una partición por filas, la mayoría de los pacientes de prueba tienen otros ingresos en el entrenamiento, y variables que no predicen nada por sí mismas (altura, peso,
  sexo) permiten al modelo **reconocerlos** y copiar su historia. El AUC mide entonces lo bien que el modelo recuerda pacientes, no lo bien que predice a uno nuevo. La partición tiene que reproducir el
  uso real: aquí, por pacientes (validación por grupos).
- **El futuro no se parece al pasado.** En 2023 empezó un programa de seguimiento y la tasa de reingreso bajó. Una partición aleatoria mezcla los años y oculta el cambio; un modelo entrenado con 2021–2022 y
  desplegado en 2023 sobrestimará el riesgo. La evaluación honesta para un sistema que se va a usar en el futuro es temporal: entrenar con el pasado y evaluar con lo más reciente, y vigilar la deriva
  después de desplegar.
- **Preprocesar con todos los datos** (aquí, la media y la desviación de la estandarización) también deja pasar información de la prueba; su efecto suele ser pequeño, pero la regla es sencilla: todo lo que
  se ajusta, se ajusta solo con el entrenamiento.

## 3. Para el informe

Las cifras del compañero y las honestas, una frase por fuga con su corrección, y una recomendación: si el AUC honesto no basta para la decisión clínica, se dice. Un modelo mediocre bien evaluado es más
útil que uno espectacular mal evaluado, porque se sabe lo que se puede esperar de él.

## 4. Para ir más allá

Evalúa con partición temporal y por pacientes a la vez; compara k vecinos con una regresión logística (que no puede «reconocer» pacientes igual de bien: ¿cambia el tamaño de la fuga?); calcula intervalos de
confianza del AUC por *bootstrap* agrupado por paciente; y lee la lista de fugas de Kapoor y Narayanan para ver cuántas encuentras en artículos publicados.
