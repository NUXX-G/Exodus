---
id: ia-python-datos
title: "Python para datos: NumPy (arrays, tipos, difusión, vistas y memoria, vectorización), pandas (índices, alineación, limpieza, agrupar, unir, series temporales) y análisis exploratorio reproducible"
area: ia-cuantica
trunk_level: 13
prerequisites: [prog-python-fundamentos, mat-estadistica-inferencia, mat-algebra-lineal]
academic_sources:
  - "Harris, C. R. et al. Array programming with NumPy. Nature 585, 2020, pp. 357-362; documentación de NumPy 2.1 (numpy.org/doc), consultada en noviembre de 2026."
  - "McKinney, W. Python for Data Analysis, 3ª ed. O'Reilly, 2022 (wesmckinney.com/book); documentación de pandas 2.2 (pandas.pydata.org), consultada en noviembre de 2026."
  - "VanderPlas, J. Python Data Science Handbook, 2ª ed. O'Reilly, 2023; Wickham, H. Tidy Data. Journal of Statistical Software 59(10), 2014."
  - "Hyndman, R. J.; Fan, Y. Sample Quantiles in Statistical Packages. The American Statistician 50(4), 1996 (los nueve métodos de cuantiles)."
exercises:
  - id: difusion
    tier: 1
    prompt: |
      ¿Qué forma tiene el resultado de sumar en NumPy un array de forma (3, 1, 4) y otro de forma (5, 4)? ¿Y uno de (2, 3) con uno de (3, 2)?

      Respuesta: `forma;forma` con las dimensiones separadas por comas, o `error`.
    answers: ["sha256:31a656b3901de96a4a43f3cf2bdbad359a9fd4e63451ff2431df28e1ae79455a"]
  - id: pasos-en-memoria
    tier: 2
    prompt: |
      Un array `float64` de forma (4, 5) en orden C, ¿qué `strides` tiene? ¿Y su traspuesta `.T` (sin copiar)?

      Respuesta: `filas,columnas;filas,columnas` en bytes.
    answers: ["sha256:6d9feb5a119a118c6f4bc8cd76ae46a1f11507313b0aab7f623395285607eb61"]
  - id: vistas-y-copias
    tier: 2
    prompt: |
      `a = np.arange(10)`; `b = a[2:7:2]`; `b[0] = 99`; `c = a[[1, 3]]`; `c[0] = -1`. ¿Cuánto valen después `a[2]` y `a[1]`?

      Respuesta: `a[2];a[1]`.
    answers: ["sha256:161db7f03737a8e20c1c27aab6229dd0bb4d77b000dcc77b9513dd16fd9a99fa"]
  - id: precision-de-float32
    tier: 1
    prompt: |
      ¿Qué valor guarda `np.float32(16777217)`?

      Respuesta: un número entero.
    answers: ["sha256:9641f70524a01757c47c6b10fe7f1c97c36f877ec9b8f7c73e010416540183da"]
  - id: valores-ausentes
    tier: 1
    prompt: |
      ¿Qué devuelven `pd.Series([1, np.nan, 3]).mean()` y `np.mean(np.array([1, np.nan, 3]))`?

      Respuesta: `pandas;numpy` (por ejemplo `2;nan`).
    answers: ["sha256:71596acf848cfdbd97b3f11e0bcfcb868ee2a7dfeedb0021eb09be1efe8e8d8f"]
  - id: agrupar
    tier: 1
    prompt: |
      Con las ventas Madrid 120, Sevilla 80, Madrid 100, Bilbao 150, Sevilla 140, Bilbao 90, Madrid 95, ¿qué ciudad tiene la mayor media y cuál es?

      Respuesta: `ciudad;media` con 2 decimales.
    answers: ["sha256:56aa4b04e7fa261ba541483dd58af02084d516ab8189c5775a26f5e85e6cd4d4"]
  - id: uniones
    tier: 2
    prompt: |
      La tabla izquierda tiene las claves a, b, b, c y la derecha b, b, c, d (con repeticiones). ¿Cuántas filas dan `merge` con `how="inner"`, `"left"` y `"outer"` sobre esa clave?

      Respuesta: `inner;left;outer`.
    answers: ["sha256:06185cba1f58c286d010a8fef8c11e752646a2f832c357acb4a714045bd74e87"]
  - id: alineacion-por-indice
    tier: 2
    prompt: |
      `pd.Series([1, 2, 3], index=['a', 'b', 'c']) + pd.Series([10, 20], index=['b', 'd'])`: ¿cuánto vale la entrada `b` y cuántos NaN tiene el resultado?

      Respuesta: `valor;nan`.
    answers: ["sha256:21b598c9d693a412f2fc32c44934e9725a21d937be66e22e56b7179b8907f8bf"]
  - id: einsum
    tier: 2
    prompt: |
      Con A = [[1, 2], [3, 4]] y B = [[5, 6], [7, 8]], ¿qué dan `np.einsum('ii->', A)` y `np.einsum('ij,ij->', A, B)`?

      Respuesta: `primero;segundo`.
    answers: ["sha256:07b55aeb29f019c29164ec664d13c5c43e1505cd23be7bdbefff226896223aee"]
  - id: ddof
    tier: 2
    prompt: |
      Tipifica el último valor de [2, 4, 4, 4, 5, 5, 7, 9] con `(x - x.mean()) / x.std()` en NumPy y con el mismo código sobre una `pd.Series`. ¿Qué dan? (Los valores por defecto de `ddof` no coinciden.)

      Respuesta: `numpy;pandas` con 3 decimales.
    answers: ["sha256:badb02e17a9282a03063d7dd29414cc2de1262c3724023dae93987252922a343"]
  - id: memoria-de-un-array
    tier: 1
    prompt: |
      ¿Cuántos bytes ocupan los datos de un array de un millón de enteros `int64`, y de uno de `int8`?

      Respuesta: `int64;int8`.
    answers: ["sha256:f9413aca5100e98724f9184e9005356c99d724d806f372a23481649f09a1e32d"]
  - id: promocion-de-tipos
    tier: 1
    prompt: |
      ¿Qué `dtype` tiene `np.array([1, 2.5, True])`?

      Respuesta: el nombre del tipo.
    answers: ["sha256:6bd2a66c4467bc379fd21e11d74bfa2b0f8205baf39eefc20b2c4fecb198dd48"]
  - id: percentiles
    tier: 2
    prompt: |
      Con el método por defecto de NumPy (interpolación lineal), ¿qué dan `np.percentile([1, 2, 3, 4], 25)` y `np.percentile([7, 1, 3, 9, 5], 90)`?

      Respuesta: `primero;segundo`.
    answers: ["sha256:c163b004893af97709aae0646fa27b65b6dc029c3668e34c48f299e9826a60ce"]
  - id: duplicados
    tier: 1
    prompt: |
      Una tabla (nombre, edad) tiene las filas (ana, 30), (luis, 25), (ana, 30), (ana, 31), (luis, 25), (eva, 40). ¿Cuántas filas quedan tras `drop_duplicates()` y cuántos nombres distintos hay?

      Respuesta: `filas;nombres`.
    answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
---

Antes de entrenar un modelo hay que **tener** los datos: leerlos, entenderlos, limpiarlos, combinarlos y transformarlos sin equivocarse, y hacerlo deprisa con millones de filas. En Python eso se hace
con **NumPy** (arrays numéricos homogéneos y operaciones vectorizadas en C) y **pandas** (tablas con índices y tipos por columna). Son herramientas engañosamente fáciles: casi todo funciona a la primera,
y casi todos los errores son silenciosos (una alineación por índice que mete NaN, una vista que modifica el original, una desviación típica con otro denominador). Este nodo enseña su modelo mental para
que no te pasen. Parte de [[prog-python-fundamentos]] y prepara [[ia-aprendizaje-estadistico]].

## Objetivos

Al terminar sabrás:

1. Explicar cómo guarda NumPy un array (búfer, `dtype`, forma, pasos) y predecir cuándo una operación crea una vista o una copia.
2. Aplicar las reglas de difusión y vectorizar cálculos que en Python puro necesitarían bucles.
3. Manejar tipos y precisión (enteros que desbordan, `float32` frente a `float64`, promoción).
4. Usar pandas con conciencia de los índices: alineación, valores ausentes, agrupar, unir y remodelar.
5. Hacer un análisis exploratorio reproducible y eficiente.

## Qué debes dominar antes

[[prog-python-fundamentos]] (listas, diccionarios, funciones), [[mat-estadistica-inferencia]] (media, varianza, cuantiles) y [[mat-algebra-lineal]] (matrices).

> [!question] Test de entrada
> 1. ¿Por qué un bucle de Python sobre un millón de números es lento?
> 2. ¿Qué diferencia hay entre la varianza muestral y la poblacional?
> 3. ¿Qué es un join en SQL?
>
> Respuestas: porque cada número es un objeto en el montón y cada operación pasa por el intérprete (comprobar tipos, despachar el método); dividir la suma de cuadrados entre n − 1 (estimador insesgado de
> una muestra) o entre n (la de una población completa); combinar filas de dos tablas que comparten el valor de una clave.

## 1. El array de NumPy

Un `ndarray` es un **búfer contiguo** de bytes más metadatos: el `dtype` (cómo interpretar cada elemento: `int64`, `float32`, `bool`…), la **forma** (`shape`) y los **pasos** (`strides`: cuántos bytes
saltar para avanzar uno en cada eje). Un `float32` de forma (3, 4) en orden C (por filas) tiene pasos (16, 4); su traspuesta no copia nada: solo intercambia forma y pasos, (4, 16). Por eso:

- Un **corte básico** (`a[1:5]`, `a[::2]`, `a[:, 0]`) es una **vista**: comparte el búfer, y modificarla modifica el original. `np.shares_memory` y `.base` lo delatan.
- La **indexación avanzada** (con una lista de índices o una máscara booleana) devuelve siempre una **copia**.
- `reshape` da vista si los pasos lo permiten; `ravel` también si puede; `flatten` siempre copia.

**Tipos**: los enteros de NumPy **desbordan** sin avisar (`np.int8(127) + np.int8(1)` es −128); `float32` tiene 24 bits de mantisa, así que por encima de 2²⁴ no representa todos los enteros y acumula
más error de redondeo; al mezclar tipos en un array, NumPy **promociona** al tipo más general capaz de representarlos todos (con una cadena entre números, todo pasa a texto). La memoria es simplemente
número de elementos por bytes por elemento (`a.nbytes`): elegir `float32` o `int16` cuando basta reduce a la mitad o a la cuarta parte el uso de memoria y el tráfico con la caché.

## 2. Difusión y vectorización

La **difusión** (*broadcasting*) permite operar arrays de formas distintas sin copiarlos: se alinean las formas **por la derecha**, y cada par de dimensiones debe ser igual o una de ellas 1 (que se
"estira"); si falta una dimensión, cuenta como 1. (2, 1) con (3,) da (2, 3); (4, 3) con (4,) falla porque 3 y 4 no son compatibles. Con ella se escriben sin bucles operaciones como restar a cada fila su
media (`X - X.mean(axis=0)`) o calcular todas las distancias entre dos conjuntos de puntos (`((A[:, None, :] - B[None, :, :])**2).sum(-1)`).

**Vectorizar** es expresar el cálculo como operaciones sobre arrays enteros: el bucle pasa a C y usa instrucciones SIMD, y es decenas o cientos de veces más rápido. `np.einsum` expresa contracciones de
índices con notación de Einstein (`'ij,jk->ik'` es el producto de matrices, `'ii->'` la traza, `'ij,ij->'` la suma de los productos elemento a elemento) y sirve para leer y escribir fórmulas tensoriales
sin perderse en los ejes. Generadores aleatorios: `rng = np.random.default_rng(semilla)` (PCG64) y pasarlo explícitamente; nada de estado global.

## 3. pandas: índices y alineación

Una `Series` es un array con un **índice** (etiquetas); un `DataFrame`, un diccionario de `Series` que comparten índice, con un `dtype` por columna. La regla central: **las operaciones se alinean por
etiqueta, no por posición**. Sumar dos `Series` con índices distintos produce la unión de los índices y NaN donde falta un lado. Es potente (combina datos de fuentes distintas sin ordenarlos) y peligroso
(un índice desordenado o duplicado produce NaN o filas multiplicadas sin error).

- Acceso: `.loc` por etiqueta y `.iloc` por posición; nunca la indexación encadenada para asignar (`df[df.x > 0]["y"] = 1` puede escribir en una copia); usa `df.loc[df.x > 0, "y"] = 1`.
- **Ausentes**: `NaN` (y `pd.NA` en los tipos que lo admiten). pandas los **salta** por defecto en las agregaciones (`skipna=True`); NumPy los **propaga** (`np.mean` da nan; `np.nanmean` los salta). Antes de
  rellenar o borrar, entiende **por qué** faltan: un dato ausente puede ser información.
- **Desviación típica**: `np.std` usa `ddof=0` (poblacional) y `Series.std` `ddof=1` (muestral). Con 8 valores la diferencia es de un 7 %; en conjuntos pequeños cambia las conclusiones.
- **Cuantiles**: hay al menos nueve definiciones (Hyndman y Fan, 1996); NumPy y pandas usan por defecto la interpolación lineal entre los valores ordenados, en la posición (n − 1)·q.

## 4. Limpiar, agrupar, unir y remodelar

- **Datos ordenados** (*tidy*, Wickham): una variable por columna, una observación por fila. `melt` pasa de ancho a largo y `pivot`/`pivot_table` al revés.
- **Limpieza**: tipos correctos al leer (`dtype`, `parse_dates`), texto normalizado (`.str.strip().str.lower()`), categorías (`astype("category")` ahorra memoria y fija el orden), duplicados
  (`duplicated`, `drop_duplicates`, con `subset` para decidir qué columnas definen un duplicado), valores imposibles detectados con reglas explícitas.
- **Agrupar** (dividir, aplicar, combinar): `df.groupby("ciudad")["importe"].agg(["count", "mean", "median"])`; `transform` devuelve un resultado con la forma original (para tipificar dentro de cada grupo).
- **Unir**: `merge(…, how="inner" | "left" | "right" | "outer", on=…)`. Con claves repetidas en los dos lados, cada combinación genera una fila: el resultado puede crecer mucho. `validate="one_to_one"`
  o `"many_to_one"` convierte esa sorpresa en un error, e `indicator=True` dice de qué tabla viene cada fila.
- **Series temporales**: un índice de fechas permite `resample("W").sum()`, ventanas móviles (`rolling(7).mean()`) y desplazamientos (`shift`); cuidado con las zonas horarias y con los cambios de hora.

## 5. Análisis exploratorio reproducible

Un análisis exploratorio (EDA) responde, antes de modelar: cuántas filas y columnas, qué tipos, cuántos ausentes y dónde, qué distribución tiene cada variable (resúmenes **y** gráficos: histogramas,
diagramas de caja, dispersión), qué relaciones hay, qué valores son imposibles. Reglas: guarda los datos originales intactos y transforma con código (no a mano en una hoja de cálculo); fija las semillas;
registra las versiones de las bibliotecas; separa pronto un conjunto de prueba y no lo mires (si lo exploras, contaminas la evaluación: se verá en `lab-ia-fuga-de-datos`). Para datos grandes, formatos
columnares (Parquet) en vez de CSV: guardan tipos, comprimen y permiten leer solo las columnas necesarias.

## 6. Comprobar con un programa

Pasos y vistas, difusión, una tipificación por grupos, una unión validada y la diferencia de velocidad entre un bucle y la versión vectorizada (con datos distintos de los ejercicios):

```python
# NumPy y pandas: pasos, vistas, difusión, transform por grupos, merge validado y vectorización
import time

import numpy as np
import pandas as pd

a = np.zeros((3, 4), dtype=np.float32)
print("pasos:", a.strides, "traspuesta:", a.T.strides, "comparte memoria:", np.shares_memory(a, a.T))

x = np.arange(12)
v = x[::3]
v[:] = -1
print("tras modificar la vista:", x[:7])
print("(2,1)+(3,) →", (np.zeros((2, 1)) + np.zeros(3)).shape)

rng = np.random.default_rng(2026)
df = pd.DataFrame({"tienda": rng.choice(["norte", "sur", "este"], 12), "importe": rng.integers(10, 100, 12)})
df["z"] = df.groupby("tienda")["importe"].transform(lambda s: (s - s.mean()) / s.std(ddof=0))
print(df.groupby("tienda")["z"].agg(media="mean", desv=lambda s: s.std(ddof=0)).round(6).abs())

clientes = pd.DataFrame({"id": [1, 2, 3], "pais": ["ES", "FR", "ES"]})
pedidos = pd.DataFrame({"id": [1, 1, 3, 4], "total": [20, 35, 15, 50]})
unido = pedidos.merge(clientes, on="id", how="left", validate="many_to_one", indicator=True)
print(unido[["id", "pais", "_merge"]].to_string(index=False))

n = 1_000_000
datos = rng.random(n)
np.dot(datos, datos)  # calentar la biblioteca BLAS
def mejor_tiempo(f, veces=3):
    ts = []
    for _ in range(veces):
        t0 = time.perf_counter(); r = f(); ts.append(time.perf_counter() - t0)
    return min(ts), r
t_bucle, s1 = mejor_tiempo(lambda: sum(d * d for d in datos.tolist()))
t_vect, s2 = mejor_tiempo(lambda: float(np.dot(datos, datos)))
print("misma suma:", abs(s1 - s2) < 1e-6 * s2, " vectorizado más de 10 veces más rápido:", t_bucle > 10 * t_vect)
```

Salida (las tiendas y los importes salen de la semilla; lo importante es que las medias por grupo son 0 y las desviaciones 1):

```
pasos: (16, 4) traspuesta: (4, 16) comparte memoria: True
tras modificar la vista: [-1  1  2 -1  4  5 -1]
(2,1)+(3,) → (2, 3)
        media  desv
tienda
este      0.0   1.0
norte     0.0   1.0
sur       0.0   1.0
 id pais    _merge
  1   ES      both
  1   ES      both
  3   ES      both
  4  NaN left_only
misma suma: True  vectorizado más de 10 veces más rápido: True
```

## 7. Errores típicos

- Modificar una vista creyendo que es una copia (o al revés); la indexación encadenada para asignar.
- Sumar `Series` desalineadas y no ver los NaN; uniones con claves duplicadas que multiplican filas.
- Comparar desviaciones típicas calculadas con `ddof` distinto; usar `float32` donde importa la precisión de una suma larga.
- Rellenar ausentes con la media de **todo** el conjunto antes de separar entrenamiento y prueba (fuga de información).
- Bucles de Python sobre filas (`iterrows`) para lo que es una operación vectorizada.
- Análisis que no se pueden repetir: datos editados a mano, semillas sin fijar, versiones sin registrar.

## 8. Resumen

- `ndarray` = búfer + `dtype` + forma + pasos; cortes = vistas; indexación avanzada = copias.
- Difusión alineada por la derecha (igual o 1); vectorizar y `einsum`; `default_rng`.
- Tipos: desbordamiento de enteros, 24 bits de `float32`, promoción, `nbytes`.
- pandas alinea por índice; `.loc`/`.iloc`; NaN que pandas salta y NumPy propaga; `ddof`; cuantiles lineales.
- Datos ordenados; limpiar, agrupar (`agg`, `transform`), unir (`validate`, `indicator`), remodelar; series temporales; Parquet.
- EDA reproducible y sin mirar el conjunto de prueba.

## Repaso: lo que debe quedarte dentro de un mes

1. ¿Vista o copia? Corte básico, vista; lista o máscara, copia.
2. Difusión: por la derecha, igual o 1.
3. pandas suma por etiqueta, no por posición.
4. `np.std` divide entre n; `Series.std`, entre n − 1.
5. Si una unión cambia el número de filas sin que lo esperes, para y averigua por qué.

## Siguiente

[[ia-aprendizaje-estadistico]] y `ia-redes-desde-cero`.
