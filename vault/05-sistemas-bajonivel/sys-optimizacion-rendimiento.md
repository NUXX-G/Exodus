---
id: sys-optimizacion-rendimiento
title: "Optimización del rendimiento: medir con método, jerarquía de memoria y cachés, TLB, predicción de saltos, vectorización, modelo roofline, perfiladores y estadística de benchmarks"
area: bajo-nivel
trunk_level: 12
prerequisites: [sys-concurrencia, ing-arquitectura-computadores, sys-c-profesional]
academic_sources:
  - "Hennessy, J. L.; Patterson, D. A. Computer Architecture: A Quantitative Approach, 6ª ed. Morgan Kaufmann, 2017 (jerarquía de memoria, predicción de saltos, paralelismo de datos)."
  - "Drepper, U. What Every Programmer Should Know About Memory. Red Hat, 2007; Fog, A. Optimizing software in C++ y The microarchitecture of Intel, AMD and VIA CPUs (agner.org), actualizados en 2025."
  - "Gregg, B. Systems Performance: Enterprise and the Cloud, 2ª ed. Addison-Wesley, 2020 (método USE, perf, gráficos de llamas)."
  - "Williams, S.; Waterman, A.; Patterson, D. Roofline: An Insightful Visual Performance Model for Multicore Architectures. CACM 52(4), 2009; Lam, M.; Rothberg, E.; Wolf, M. The cache performance and optimizations of blocked algorithms. ASPLOS 1991."
exercises:
  - id: roofline
    tier: 1
    prompt: |
      Un procesador da como mucho 100 GFLOP/s y su memoria 25 GB/s. ¿Qué rendimiento máximo puede alcanzar un núcleo de cálculo con intensidad aritmética 0,25 flop/byte, y a partir de qué intensidad (el punto de cresta) deja de estar limitado por la memoria?

      Respuesta: `GFLOP/s;flop_por_byte`.
    answers: ["sha256:de2979db1f7adc2598802a40de2f9bb7fe143e54193b403db6b15212aa067764"]
  - id: fallos-secuenciales
    tier: 1
    prompt: |
      Con la caché vacía y líneas de 64 bytes, ¿cuántos fallos produce leer secuencialmente un array de 1 MiB de enteros de 32 bits?

      Respuesta: un número.
    answers: ["sha256:ca902d4a8acbdea132ada81a004081f51c5c9279d409cee414de5a39a139fab6"]
  - id: conflictos-directa
    tier: 1
    prompt: |
      Una caché de correspondencia directa de 4 KiB con líneas de 64 B. Un bucle de 1024 iteraciones lee a[i] y luego b[i] (float), con b situado exactamente 4096 bytes después de a. ¿Cuántos fallos hay?

      Respuesta: un número.
    answers: ["sha256:bfa0ec8bdf2946547879d50a68687ea32e2fa628db187357415858b633d194d9"]
  - id: amdahl-de-una-funcion
    tier: 1
    prompt: |
      Una función ocupa el 40 % del tiempo de un programa y la aceleras 4 veces. ¿Cuánto se acelera el programa entero?

      Respuesta: con 2 decimales.
    answers: ["sha256:a204b7e5d2aa36ca47dc59d5944882ecbd996452c4cc35be9607da8e63bc4045"]
  - id: predictor-de-dos-bits
    tier: 1
    prompt: |
      Un salto sigue el patrón tomado, tomado, tomado, no tomado, repetido 25 veces (100 ejecuciones). Con un contador saturante de 2 bits que empieza en «débilmente no tomado», ¿cuántas predicciones falla?

      Respuesta: un número.
    answers: ["sha256:5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca"]
  - id: aos-frente-a-soa
    tier: 1
    prompt: |
      Sumas el campo `x` (un double) de un millón de registros de 64 bytes guardados uno tras otro (array de estructuras) o de un array con solo los `x` (estructura de arrays). ¿Cuántas líneas de caché de 64 B se cargan en cada caso?

      Respuesta: `aos;soa`.
    answers: ["sha256:84ff9fcdd8d4be5bd2cefad02b7888feedf07f2df69ef0474c077932c0d15601"]
  - id: trasposicion-por-bloques
    tier: 2
    prompt: |
      Simula una L1 de 32 KiB, 8 vías y líneas de 64 B con reemplazo LRU. ¿Cuántos fallos produce trasponer B = Aᵀ (matrices 512 × 512 de double, una detrás de otra en memoria, leyendo A por filas) de forma ingenua, y cuántos por bloques de 8 × 8?

      Respuesta: `ingenua;bloques`.
    answers: ["sha256:11d5dd4a026d8336a0a25fdf43babb41aee3af313e3ad31a29cf9b5a110c5fe5"]
  - id: filas-o-columnas-en-cachegrind
    tier: 2
    prompt: |
      Suma los elementos de una matriz de 1024 × 1024 int (reservada con `calloc`) por filas y por columnas y mide los fallos de la caché de datos L1 con `valgrind --tool=cachegrind --cache-sim=yes --D1=32768,8,64`. ¿Cuántas veces más fallos hay por columnas (redondeado al entero)?

      Respuesta: un número.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: vectorizacion
    tier: 2
    prompt: |
      Con `gcc -O3 -fopt-info-vec-optimized`, ¿se vectoriza `for (i) a[i] = b[i] + c[i];` (con punteros `restrict`)? ¿Y `for (i = 1; i < n; i++) a[i] = a[i-1] + b[i];`?

      Respuesta: `si` o `no` para cada uno, separados por un espacio.
    answers: ["sha256:b56435fbd6b2d8c2f1fec8fbc2b9a12c4e4e322e04f3faefa4418177e4f69759"]
  - id: saltos-con-datos-ordenados
    tier: 2
    prompt: |
      Con el predictor de 2 bits del ejercicio 5, ¿cuántos fallos produce `if (x >= 128)` sobre 2000 bytes pseudoaleatorios (el generador de Exodus con semilla 7, tomando el byte más alto de cada estado) tal como salen, y cuántos con los mismos datos ordenados?

      Respuesta: `desordenados;ordenados`.
    answers: ["sha256:dc91bde8caeddfb27d77250099129129faf390aad939347016ef6e9fe6d567de"]
  - id: cota-de-ancho-de-banda
    tier: 2
    prompt: |
      ¿Cuánto tarda como mínimo leer 1 GiB de memoria con un ancho de banda de 20 GB/s?

      Respuesta: en milisegundos, con 1 decimal.
    answers: ["sha256:b8d035b0ac92e8e044ff0c842c3f310762906f2a84e2ee73f0204ab807490e0a"]
  - id: estadistica-del-muestreo
    tier: 2
    prompt: |
      Un perfilador toma 1000 muestras de un programa en el que una función ocupa el 23 % del tiempo. ¿Cuántas muestras se esperan en esa función y cuál es su error típico (binomial)?

      Respuesta: `esperadas;error_tipico`, el error redondeado al entero.
    answers: ["sha256:539f1d592627a0fba53bd928ef8e027bb38a8f66847e641dae45268130be7e5e"]
  - id: estadistica-de-benchmarks
    tier: 2
    prompt: |
      Diez ejecuciones tardan 12,1 11,8 12,4 30,2 11,9 12,0 12,2 11,7 12,3 12,0 ms. ¿Cuál es la mediana y el rango intercuartílico (diferencia entre las medianas de la mitad superior y la inferior)? ¿Por qué no usar la media?

      Respuesta: `mediana;rango` con 2 decimales.
    answers: ["sha256:3efa04ddaddc3a3ae067f24115aff35d4a310afba7ec7b9957463fe4fdfb03bd"]
  - id: orden-de-bucles-en-matmul
    tier: 3
    prompt: |
      Simula una L1 de 8 KiB, 2 vías y líneas de 64 B (LRU) y cuenta los fallos del producto C = A·B de matrices 64 × 64 de double (A, B y C seguidas en memoria) con el orden ijk (el producto escalar en el bucle k, escribiendo C[i][j] al final) y con el orden ikj (A[i][k] fuera del bucle j).

      Respuesta: `ijk;ikj`.
    answers: ["sha256:ec1759887de3abaef1d4ec1e71eb378c4aeed1f5bb8dc7f4633c145f1684684b"]
  - id: fallos-de-tlb
    tier: 3
    prompt: |
      Una TLB totalmente asociativa de 64 entradas con LRU y páginas de 4 KiB. ¿Cuántos fallos produce recorrer una matriz 1024 × 1024 de int32 por filas y cuántos por columnas?

      Respuesta: `filas;columnas`.
    answers: ["sha256:a7499b81dec629fc0e6c42564efb1b248c960aac91ff09e89ebfb1f3ecb91c09"]
  - id: intensidad-de-dgemm
    tier: 3
    prompt: |
      En dgemm por bloques b × b que caben en caché, cada bloque hace 2b³ operaciones y carga 2b² doubles. ¿Qué intensidad aritmética (flop/byte) tiene con b = 64 y queda por encima de la cresta del ejercicio 1?

      Respuesta: `intensidad;si` o `intensidad;no`.
    answers: ["sha256:6cd5783eaaae7b31effa46e996a99ac76c85fe228689ab3b4aa5fff9c3bdb107"]
---

"La optimización prematura es la raíz de todos los males" (Knuth, 1974), pero la frase sigue: "y sin embargo no debemos dejar pasar nuestras oportunidades en ese crítico 3 %". Este nodo enseña a encontrar
ese 3 % y a hacerlo rápido de verdad. Lo que separa a quien optimiza bien de quien lo intenta es el **método**: medir antes de cambiar nada, entender **por qué** algo es lento con un modelo de la máquina (la memoria,
no la aritmética, es casi siempre el cuello de botella), cambiar una cosa cada vez y comprobar el efecto con estadística. Con los programas de [[sys-c-profesional]], [[prog-cpp-profesional]] y
[[prog-rust-profesional]], y la arquitectura de [[ing-arquitectura-computadores]].

## Objetivos

Al terminar sabrás:

1. Medir con método (USE, perfiladores, contadores de hardware) y analizar benchmarks con estadística robusta.
2. Explicar la jerarquía de memoria (líneas, asociatividad, LRU, fallos obligatorios, de capacidad y de conflicto), la TLB y el preanuncio, y calcular fallos para un patrón de acceso.
3. Reorganizar datos y bucles para la localidad: orden de los bucles, bloques (*tiling*), AoS frente a SoA, alineación.
4. Entender la predicción de saltos y escribir código sin saltos cuando conviene.
5. Conseguir que el compilador vectorice, y saber cuándo no puede.
6. Usar el modelo roofline para saber si un cálculo está limitado por la memoria o por el cálculo.

## Qué debes dominar antes

[[ing-arquitectura-computadores]] (segmentación, cachés), [[sys-c-profesional]] (C y su modelo de memoria) y [[sys-concurrencia]] (falso compartir).

> [!question] Test de entrada
> 1. ¿Qué es una línea de caché y cuánto suele medir?
> 2. ¿Por qué un bucle que recorre una matriz por columnas en C es más lento que por filas?
> 3. ¿Qué dice la ley de Amdahl?
>
> Respuestas: la unidad que se trae de memoria a la caché, normalmente 64 bytes; porque C guarda las matrices por filas y, por columnas, cada acceso cae en una línea distinta; que la aceleración total está
> limitada por la fracción que no se mejora.

## 1. El método

1. **Define el objetivo** (latencia del percentil 99, rendimiento por segundo, consumo) y una carga representativa.
2. **Mide sin tocar nada**: perfilador de muestreo (`perf record -g`, gráficos de llamas de Gregg), contadores de hardware (`perf stat -e cycles,instructions,cache-misses,branch-misses`), y el **método USE** para cada
   recurso: utilización, saturación y errores.
3. **Forma una hipótesis con un modelo**: ¿limitado por memoria (IPC bajo, muchos fallos de caché), por saltos (muchos fallos de predicción), por cálculo (IPC alto)? ¿O por esperas (E/S, cerrojos)?
4. **Cambia una cosa**, mide otra vez y compara con estadística.
5. **Para** cuando se alcance el objetivo: el código optimizado es más difícil de mantener.

**Estadística de benchmarks**: los tiempos tienen colas largas (interrupciones, otros procesos, frecuencia variable), así que se resumen con la **mediana** y el **rango intercuartílico**, no con la media; se repite
muchas veces, se calienta antes (cachés, predictores, JIT) y se fija la frecuencia si se puede. Con 8,4 8,1 8,6 8,2 25,0 8,3 8,0 8,5 8,2 8,3 ms, la mediana es 8,3; la media (9,96) la
estropea un solo valor. Herramientas: Criterion (Rust), Google Benchmark (C++), `hyperfine`. Un perfilador por **muestreo** es estadístico: con 400 muestras, una función con el 10 % del tiempo recibe unas 40, con una desviación típica de √(400 · 0,1 · 0,9) = 6.

## 2. La jerarquía de memoria

| Nivel | Tamaño típico | Latencia aproximada |
|---|---|---|
| Registros | — | 0 ciclos |
| L1 (datos) | 32–64 KiB por núcleo | ~4 ciclos |
| L2 | 0,5–2 MiB por núcleo | ~12–15 ciclos |
| L3 (compartida) | 8–128 MiB | ~40–60 ciclos |
| DRAM | GiB | ~80–120 ns (cientos de ciclos) |

- La memoria se trae en **líneas** (64 B). Leer 1 MiB secuencialmente en frío produce 1 MiB/64 B = 16 384 fallos, y el **preanuncio** (*prefetch*) del hardware los oculta casi todos porque detecta el patrón.
- **Asociatividad**: cada línea solo puede ir a un conjunto; si hay más líneas activas que vías en un conjunto, se expulsan entre sí (**fallos de conflicto**). Dos arrays separados exactamente un múltiplo del tamaño de
  la caché en una caché de correspondencia directa fallan en **todos** los accesos.
- Las **tres C**: obligatorios (primer acceso), de capacidad (no cabe el conjunto de trabajo) y de conflicto (asociatividad).
- La **TLB** guarda traducciones de páginas: recorrer una matriz de int32 de 1024 × 1024 por columnas toca una página distinta en cada acceso (cada fila mide 4 KiB) y, con 64 entradas, falla en el millón de accesos;
  por filas, solo 1024 veces. Las **páginas enormes** (2 MiB) lo alivian.

## 3. Localidad: datos y bucles

- **Orden de los bucles**: en C (por filas) el índice más interno debe recorrer la última dimensión. En el producto de matrices, ikj en lugar de ijk convierte el recorrido de B por columnas en uno por filas: en una L1
  pequeña simulada, 34 744 fallos frente a 271 168.
- **Bloques** (*tiling*, Lam, Rothberg y Wolf, 1991): trabajar sobre submatrices que caben en caché. Trasponer 512 × 512 doubles por bloques de 8 × 8 reduce los fallos de 294 912 a 69 120 (el recorrido por columnas de
  la versión ingenua falla en cada elemento).
- **Disposición de los datos**: **AoS** (array de estructuras) frente a **SoA** (estructura de arrays). Si solo se usa un campo de 8 bytes de registros de 64, SoA trae 8 veces menos líneas. Es la base de los sistemas de
  entidades de los motores de juegos y de los formatos columnares (Apache Arrow, Parquet).
- **Alineación y relleno**: estructuras alineadas a la línea para no partirlas; separar en líneas distintas los datos que escriben hilos distintos (**falso compartir**, [[sys-concurrencia]]).
- **Indirección**: las listas enlazadas y los árboles de punteros saltan por la memoria; los arrays contiguos, las tablas hash con direccionamiento abierto y los árboles B son mucho más amables con la caché.

## 4. Predicción de saltos

Un procesador moderno ejecuta especulativamente siguiendo la predicción de cada salto; un fallo cuesta **15–20 ciclos** (vaciar el *pipeline*). Los predictores reales (TAGE, perceptrones) aprenden patrones largos,
pero los datos aleatorios no tienen patrón: `if (x >= 128)` sobre bytes aleatorios falla en torno al 50 % con un predictor de 2 bits (487 de 1000 en la simulación de abajo) y casi nunca con los mismos datos **ordenados** (2).
Soluciones: ordenar o agrupar los datos, código **sin saltos** (`cmov`, `csel`, máscaras: `s += (x >= 128) * x`), y tablas en lugar de cadenas de `if`. Hay que medir: si el salto es predecible, la versión con salto
suele ganar.

## 5. Vectorización (SIMD)

Las instrucciones SIMD (SSE/AVX/AVX-512 en x86, NEON/SVE en ARM, [[sys-ensamblador-arm]]) operan sobre 4, 8 o 16 elementos a la vez. Los compiladores **autovectorizan** bucles sencillos con `-O3` (y
`-march=native` para usar las instrucciones del procesador), y lo informan con `-fopt-info-vec` (GCC) o `-Rpass=loop-vectorize` (Clang). No pueden cuando:

- hay **dependencias entre iteraciones** (`a[i] = a[i-1] + b[i]`, una suma de prefijos, que exige algoritmos específicos);
- puede haber **alias** entre punteros (por eso `restrict` en C, y por qué Rust vectoriza más a menudo: el comprobador de préstamos garantiza que no lo hay);
- hay llamadas a funciones no expandidas, saltos complicados o accesos no contiguos (se usan *gather*, más lentos);
- en coma flotante, reordenar una suma cambia el resultado: sin `-ffast-math` (o `-fassociative-math`) el compilador no vectoriza reducciones de `float`.

Si el compilador no basta: intrínsecos (`<immintrin.h>`, `std::simd`, `std::arch`) o bibliotecas (Eigen, BLAS, Highway).

## 6. El modelo roofline

Para un núcleo de cálculo, la **intensidad aritmética** I es operaciones por byte movido de memoria. El rendimiento alcanzable es **min(pico de cálculo, I × ancho de banda)** (Williams, Waterman y Patterson, 2009).
Con 100 GFLOP/s y 25 GB/s, la **cresta** está en I = 4: por debajo, el cálculo está **limitado por la memoria** (y optimizar la aritmética no sirve de nada); por encima, por el cálculo. Sumar dos vectores tiene
I ≈ 1/12 (una suma por cada 12 bytes en float); un producto de matrices por bloques de b × b tiene I ≈ b/8 en double, y con b = 64, 8 flop/byte: limitado por el cálculo, que es por qué BLAS alcanza casi el pico.

## 7. Otras fuentes de lentitud

- **Asignación de memoria** en bucles calientes (reutilizar búferes, arenas, `reserve`), copias innecesarias (moverlas en C++ y Rust), y conversiones de cadenas.
- **E/S**: llamadas al sistema pequeñas (usar búferes), E/S síncrona en servidores (asíncrona o `io_uring`), y el disco frente a la caché de páginas ([[sys-kernel-linux]]).
- **Concurrencia**: contención de cerrojos, falso compartir, demasiados hilos (cambios de contexto), y NUMA.
- **Algoritmos**: ninguna microoptimización compensa un O(n²) donde cabe un O(n log n). Primero el algoritmo, luego la memoria, luego lo demás.

## 8. Comprobar con un programa

En Python (ejecutado en `python:3.12-slim`): un simulador de caché asociativa por conjuntos con LRU que reproduce los fallos de la trasposición ingenua y por bloques, y un predictor de 2 bits sobre datos
aleatorios y ordenados. Las mismas cifras se han obtenido con un segundo simulador independiente, y la proporción de 16 entre recorrer por columnas y por filas, con `valgrind --tool=cachegrind` sobre C real.

```python
from collections import OrderedDict


class Cache:
    def __init__(self, tam, vias, linea):
        self.vias, self.linea = vias, linea
        self.conjuntos = [OrderedDict() for _ in range(tam // (vias * linea))]
        self.fallos = self.accesos = 0

    def acceso(self, direccion):
        self.accesos += 1
        l = direccion // self.linea
        c = self.conjuntos[l % len(self.conjuntos)]
        if l in c:
            c.move_to_end(l)  # LRU: lo más reciente al final
        else:
            self.fallos += 1
            c[l] = True
            if len(c) > self.vias:
                c.popitem(last=False)


def traspone(N, bloque, cache):
    A, B = 0, N * N * 8
    for ii in range(0, N, bloque):
        for jj in range(0, N, bloque):
            for i in range(ii, ii + bloque):
                for j in range(jj, jj + bloque):
                    cache.acceso(A + (i * N + j) * 8)  # leer A[i][j]
                    cache.acceso(B + (j * N + i) * 8)  # escribir B[j][i]
    return cache.fallos


ingenua = traspone(384, 384, Cache(32768, 8, 64))
bloques = traspone(384, 8, Cache(32768, 8, 64))
print(f"trasposición 384×384: ingenua {ingenua} fallos, por bloques de 8 {bloques}")
assert (ingenua, bloques) == (165888, 36864)


def predictor_2bits(saltos):
    estado, fallos = 1, 0  # 0 y 1 predicen «no tomado»; 2 y 3, «tomado»
    for tomado in saltos:
        fallos += (estado >= 2) != tomado
        estado = min(3, estado + 1) if tomado else max(0, estado - 1)
    return fallos


s, datos = 11, []
for _ in range(1000):  # el generador congruencial de Exodus; el byte más alto de cada estado
    s = (s * 6364136223846793005 + 1442695040888963407) % 2**64
    datos.append(s >> 56)
desordenados = predictor_2bits([x >= 128 for x in datos])
ordenados = predictor_2bits([x >= 128 for x in sorted(datos)])
print(f"if (x >= 128): {desordenados} fallos desordenados, {ordenados} ordenados")
assert (desordenados, ordenados) == (487, 2)
assert predictor_2bits([i % 3 != 2 for i in range(99)]) == 34  # tomado, tomado, no tomado
```

## 9. Errores típicos

- Optimizar sin medir, o medir en modo de depuración (`-O0`), o con una carga que no es la real.
- Comparar una sola ejecución de cada versión; usar la media con colas largas; no calentar.
- Microbenchmarks que el compilador elimina (el resultado no se usa): hay que "consumirlo" (`black_box`, `benchmark::DoNotOptimize`).
- Optimizar la aritmética de un cálculo limitado por la memoria.
- Romper la corrección por velocidad (`-ffast-math` cambia resultados; la vectorización manual se equivoca en los bordes): mantener la versión sencilla como referencia y comparar.
- Olvidar que la máquina de producción no es el portátil (otra caché, otro procesador, NUMA, contención).

## 10. Resumen

- Método: objetivo, medir (perf, USE, gráficos de llamas), hipótesis con un modelo, un cambio cada vez, estadística (mediana, IQR).
- Jerarquía: líneas de 64 B, asociatividad, LRU, tres C; TLB y páginas enormes; preanuncio.
- Localidad: orden de bucles, bloques, SoA, alineación, evitar punteros; falso compartir.
- Saltos: fallos de 15–20 ciclos; datos aleatorios frente a ordenados; código sin saltos cuando el salto no es predecible.
- SIMD: autovectorización, dependencias, alias (`restrict`), coma flotante; intrínsecos.
- Roofline: min(pico, I·ancho de banda); cresta; limitado por memoria o por cálculo.

## Repaso: lo que debe quedarte dentro de un mes

1. Primero se mide; después se entiende con un modelo; después se cambia.
2. La memoria manda: acceso contiguo, conjuntos de trabajo que quepan en caché, datos que se usan juntos guardados juntos.
3. Un salto impredecible cuesta caro; uno predecible casi nada.
4. El compilador vectoriza si no hay dependencias ni alias; compruébalo con su informe.
5. Por debajo de la cresta del roofline, optimizar la aritmética no sirve.

## Siguiente

El laboratorio `lab-sys-rendimiento` (encontrar el cuello de botella en un perfil real) y `sys-lenguajes-programacion`.
