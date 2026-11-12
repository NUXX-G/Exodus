---
id: ing-arquitectura-computadores
title: "Arquitectura de computadores"
area: ingenieria
trunk_level: 8
prerequisites: [ing-logica-digital]
academic_sources:
  - "Patterson, D. A.; Hennessy, J. L. Computer Organization and Design: RISC-V Edition, 2ª ed. Morgan Kaufmann, 2020."
  - "Hennessy, J. L.; Patterson, D. A. Computer Architecture: A Quantitative Approach, 6ª ed. Morgan Kaufmann, 2017."
  - "Waterman, A.; Asanović, K. (eds.). The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA. RISC-V International, 2019."
  - "Drepper, U. What Every Programmer Should Know About Memory. Red Hat, 2007."
  - "Bryant, R. E.; O'Hallaron, D. R. Computer Systems: A Programmer's Perspective, 3ª ed. Pearson, 2016. Cap. 6."
ctf_flag: "sha256:9b169f7d3befbce8b72e3a389927aedf5cf5788f8db44c73a8c562887393ccbe"
hints:
  - "Una caché no ve variables ni matrices, solo direcciones. De cada dirección importan dos cosas: en qué línea de 64 bytes cae (dirección ÷ 64) y a qué conjunto va esa línea (número de línea módulo el número de conjuntos). Recorrer una matriz por filas toca la misma línea 8 veces seguidas; por columnas salta 1024 bytes en cada acceso."
  - "Escribe un simulador: un array de conjuntos, cada uno una lista de etiquetas ordenada por uso reciente. Genera las direcciones con los mismos tres bucles del enunciado en lugar de instrumentar un programa real. Valida con el valor de control. Para contrastar con hardware: `valgrind --tool=cachegrind --I1=32768,8,64 --D1=32768,8,64 ./a.out` o `perf stat -e cache-misses`."
  - "Patterson & Hennessy, §5.3–5.4 (fundamentos de cachés y medida del rendimiento). CS:APP, §6.4–6.6, con el estudio de los seis órdenes del producto de matrices. Drepper, §3.3 y §6.2. Manual de Cachegrind: valgrind.org/docs/manual/cg-manual.html."
---

# Arquitectura de computadores

La arquitectura es el contrato entre el software y el hardware: qué instrucciones existen y qué
hacen. La organización es cómo se cumple ese contrato deprisa. Este nodo recorre ambos lados y
termina donde hoy se decide el rendimiento real: la jerarquía de memoria.

## 1. Rendimiento

El tiempo de ejecución de un programa se descompone en tres factores:

$$
T = \underbrace{N_{\text{instr}}}_{\text{programa, compilador, ISA}} \times
\underbrace{\text{CPI}}_{\text{organización}} \times
\underbrace{T_{\text{ciclo}}}_{\text{circuito, tecnología}} .
$$

Ninguna mejora de uno solo es gratuita: una instrucción más potente reduce $N_{\text{instr}}$
pero suele encarecer los otros dos.

**Ley de Amdahl.** Si una fracción $f$ del tiempo se acelera en un factor $s$, la aceleración
global es

$$
S = \frac{1}{(1 - f) + f/s} \;\le\; \frac{1}{1 - f} .
$$

Acelerar infinitamente el 90 % de un programa lo hace, como mucho, 10 veces más rápido. De ahí
la regla de diseño: **optimiza el caso frecuente**.

## 2. El repertorio de instrucciones

Un repertorio (ISA) define registros, instrucciones, modos de direccionamiento y codificación.
RISC-V, en su base de 32 bits RV32I, tiene 32 registros de propósito general (`x0` vale siempre
cero), instrucciones de longitud fija de 32 bits y acceso a memoria solo mediante cargas y
almacenamientos:

```asm
# suma los n elementos de un array de enteros: a0 = puntero, a1 = n; resultado en a0
        li    t0, 0             # acumulador
bucle:  beqz  a1, fin
        lw    t1, 0(a0)         # cargar el elemento
        add   t0, t0, t1
        addi  a0, a0, 4         # avanzar el puntero
        addi  a1, a1, -1
        j     bucle
fin:    mv    a0, t0
        ret
```

La regularidad no es estética: campos en posiciones fijas permiten leer los registros a la vez
que se decodifica, que es lo que hace posible la segmentación.

## 3. Camino de datos y segmentación

Ejecutar una instrucción requiere cinco pasos: búsqueda (IF), decodificación y lectura de
registros (ID), ejecución en la ALU (EX), acceso a memoria (MEM) y escritura del resultado (WB).
Un procesador **segmentado** coloca registros entre etapas y las ejecuta en paralelo sobre
instrucciones consecutivas, como una cadena de montaje. El tiempo por instrucción no baja; el
**caudal** se multiplica idealmente por el número de etapas, porque
$T_{\text{ciclo}}$ pasa a ser el de la etapa más lenta, según la restricción temporal de
[[ing-logica-digital]].

Lo que impide alcanzar ese ideal son los **riesgos**:

- **De datos**: una instrucción necesita un resultado que aún no se ha escrito. Se resuelve con
  *anticipación* (llevar el resultado directamente de la salida de la ALU a su entrada); una
  carga seguida de un uso inmediato cuesta aun así un ciclo de espera.
- **De control**: tras un salto no se sabe qué instrucción sigue. Se **predice** y, si se
  falla, se descartan las instrucciones buscadas por error. Un predictor de dos bits por salto
  acierta más del 90 %; los actuales, basados en historia global, superan el 99 %.

Con una fracción $b$ de saltos, tasa de fallos $m$ y penalización de $p$ ciclos,
$\text{CPI} = 1 + b \cdot m \cdot p$.

## 4. Jerarquía de memoria

La memoria rápida es pequeña y cara; la grande es lenta. Un acceso a DRAM cuesta del orden de
100 ciclos de procesador. La jerarquía funciona porque los programas exhiben **localidad**:

- **temporal**: lo accedido hace poco se volverá a acceder pronto;
- **espacial**: se accede pronto a direcciones cercanas a las recientes.

Una **caché** guarda copias de **líneas** (bloques) de memoria, típicamente de 64 bytes. Con $S$
conjuntos, $E$ vías por conjunto y líneas de $B$ bytes, la capacidad es $S \cdot E \cdot B$ y
una dirección se descompone en

$$
\text{dirección} = \underbrace{\text{etiqueta}}_{\text{resto}} \;\Vert\;
\underbrace{\text{índice}}_{\log_2 S \text{ bits}} \;\Vert\;
\underbrace{\text{desplazamiento}}_{\log_2 B \text{ bits}} .
$$

El índice elige el conjunto; la etiqueta se compara con las de sus $E$ vías. Si coincide alguna
hay **acierto**; si no, **fallo**: se trae la línea de memoria y, si el conjunto está lleno, se
expulsa una, habitualmente la menos recientemente usada (LRU).

- $E = 1$: **mapeo directo**. Rápida y barata, pero dos líneas con el mismo índice se expulsan
  mutuamente aunque el resto de la caché esté vacía.
- $S = 1$: **totalmente asociativa**. Sin conflictos, pero hay que comparar todas las etiquetas.
- Lo habitual es un punto intermedio: una L1 de 32 KiB y 8 vías tiene
  $32768 / (8 \cdot 64) = 64$ conjuntos.

Los fallos se clasifican en **obligatorios** (primer acceso a la línea), **de capacidad** (no
cabe todo lo que se usa) y **de conflicto** (demasiadas líneas activas en un mismo conjunto). El
tiempo medio de acceso es

$$
T_{\text{medio}} = T_{\text{acierto}} + \text{tasa de fallos} \times \text{penalización}.
$$

## 5. El orden de los bucles importa

El producto de matrices $C = A \cdot B$ admite seis ordenaciones de sus tres bucles. Todas
ejecutan las mismas operaciones aritméticas, pero recorren la memoria de forma distinta:

```c
/* ijk: el bucle interior recorre A por filas y B por COLUMNAS */
for (i = 0; i < N; i++)
    for (j = 0; j < N; j++) {
        double s = 0;
        for (k = 0; k < N; k++)
            s += A[i][k] * B[k][j];
        C[i][j] = s;
    }

/* ikj: el bucle interior recorre B y C por filas */
for (i = 0; i < N; i++)
    for (k = 0; k < N; k++) {
        double a = A[i][k];
        for (j = 0; j < N; j++)
            C[i][j] += a * B[k][j];
    }
```

En `ijk`, cada iteración interior lee `B[k][j]` con `k` creciente: salta una fila entera,
$8N$ bytes, y cae en una línea distinta cada vez. En `ikj` los dos accesos interiores avanzan 8
bytes: ocho accesos consecutivos comparten línea. En hardware real la diferencia de tiempo para
matrices grandes es de un orden de magnitud, sin cambiar una sola operación aritmética.

## 6. Memoria virtual

La traducción de direcciones virtuales a físicas vista en [[sys-sistemas-operativos]] ocurre en
cada acceso, así que el procesador la cachea en la **TLB**. Para que la consulta a la caché L1 no
tenga que esperar a la traducción, su índice se toma de los bits del desplazamiento de página,
que son iguales en la dirección virtual y en la física. Con páginas de 4 KiB, eso limita cada vía
a 4 KiB: por eso una L1 de 32 KiB tiene 8 vías.

## Reto

Simula la caché de datos durante el producto de dos matrices de `double` de $128 \times 128$.
Las tres matrices son contiguas en memoria: `A` empieza en `0x10000000`, `B` inmediatamente
después y `C` a continuación de `B`. El elemento `[i][j]` de una matriz está en
`base + 8 * (128 * i + j)`. Las variables escalares viven en registros y no acceden a memoria.

La secuencia de accesos es exactamente esta:

- Orden **ijk**: para cada `i`, para cada `j`: para cada `k`, un acceso a `A[i][k]` y después
  uno a `B[k][j]`; al terminar el bucle de `k`, un acceso a `C[i][j]`.
- Orden **ikj**: para cada `i`, para cada `k`: un acceso a `A[i][k]`; después, para cada `j`,
  un acceso a `B[k][j]` y otro a `C[i][j]`.

Las cachés empiezan vacías, usan líneas de 64 bytes y reemplazo LRU. Calcula el número de fallos:

- **a.** Orden ijk, caché de 32 KiB y 8 vías.
- **b.** Orden ikj, la misma caché.
- **c.** Orden ijk, caché de 32 KiB de mapeo directo.

Valor de control: orden ikj con una caché de 4 KiB y 2 vías, $281\,536$ fallos.

Formato de la flag, en decimal: `EXODUS{a-b-c}`
