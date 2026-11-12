---
id: ing-arquitectura-computadores
title: "Arquitectura de computadores: rendimiento, repertorio RISC-V, segmentación, predicción y jerarquía de memoria"
area: ingenieria
trunk_level: 9
prerequisites: [ing-logica-digital, sys-c-memoria]
academic_sources:
  - "Patterson, D. A.; Hennessy, J. L. Computer Organization and Design: RISC-V Edition, 2ª ed. Morgan Kaufmann, 2020."
  - "Hennessy, J. L.; Patterson, D. A. Computer Architecture: A Quantitative Approach, 6ª ed. Morgan Kaufmann, 2017."
  - "Waterman, A.; Asanović, K. (eds.). The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA. RISC-V International."
  - "Amdahl, G. M. Validity of the single processor approach to achieving large scale computing capabilities. AFIPS Spring Joint Computer Conference, 483-485, 1967."
  - "Williams, S.; Waterman, A.; Patterson, D. Roofline: an insightful visual performance model for multicore architectures. Communications of the ACM, 52(4), 2009."
ctf_flag: "sha256:9b169f7d3befbce8b72e3a389927aedf5cf5788f8db44c73a8c562887393ccbe"
hints:
  - "Una caché no ve variables ni matrices, solo direcciones. De cada dirección importan dos cosas: en qué línea de 64 bytes cae (dirección ÷ 64) y a qué conjunto va esa línea (número de línea módulo el número de conjuntos). Recorrer una matriz por filas toca la misma línea 8 veces seguidas; por columnas salta 1024 bytes en cada acceso."
  - "Escribe un simulador: un array de conjuntos, cada uno una lista de etiquetas ordenada por uso reciente. Genera las direcciones con los mismos tres bucles del enunciado en lugar de instrumentar un programa real. Valida con el valor de control. Para contrastar con hardware: `valgrind --tool=cachegrind --I1=32768,8,64 --D1=32768,8,64 ./a.out` o `perf stat -e cache-misses`."
  - "Patterson y Hennessy, capítulo de jerarquía de memoria (fundamentos de cachés y medida de su rendimiento). CS:APP (Bryant y O'Hallaron), capítulo de la jerarquía de memoria, con los órdenes del producto de matrices. Manual de Cachegrind: valgrind.org/docs/manual/cg-manual.html."
exercises:
  - id: tiempo-de-cpu
    tier: 1
    prompt: |
      Un programa ejecuta $2\cdot10^9$ instrucciones con un CPI medio de $1{,}5$ en un procesador de $3$ GHz. ¿Cuántos segundos tarda? Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: ley-de-amdahl
    tier: 1
    prompt: |
      El $80\,\%$ del tiempo de un programa es perfectamente paralelizable. ¿Qué aceleración máxima se obtiene con $8$ núcleos (ley de Amdahl)? Respuesta: un número con **2 decimales**.
    answers: ["sha256:7403c697d5824516cd0787018deaa3f8a5379c1a05e412aa1d8eae707e99934a"]
  - id: campos-de-una-direccion
    tier: 1
    prompt: |
      Una caché de $32$ KiB, asociativa de $8$ vías, con líneas de $64$ bytes, recibe direcciones de $32$ bits. ¿Cuántos bits tienen la etiqueta, el índice de conjunto y el desplazamiento? Respuesta: `etiqueta;índice;desplazamiento`.
    answers: ["sha256:48160805e763dfdb3239736e5a3b0f27c9c1b5c5e57cf672934b98380b1cb3a2"]
  - id: codificar-una-instruccion-risc-v
    tier: 1
    prompt: |
      Codifica la instrucción RISC-V `addi x5, x0, 42` (formato I: inmediato[31:20], rs1[19:15], funct3[14:12] = 000, rd[11:7], código de operación[6:0] = `0010011`). Respuesta: la palabra de 32 bits en hexadecimal (8 dígitos, minúsculas, sin `0x`).
    answers: ["sha256:135004a699c0f45fd73536ce07c9aa076aa986a382bb34a6c84508d99bf8f724"]
  - id: tiempo-medio-de-acceso
    tier: 2
    prompt: |
      Una L1 acierta en $1$ ns y falla el $5\,\%$ de las veces; la L2 tarda $10$ ns y falla el $20\,\%$ de los accesos que le llegan; la memoria principal tarda $100$ ns. ¿Cuál es el tiempo medio de acceso a memoria, en ns? Respuesta: un número.
    answers: ["sha256:b8736b999909049671d0ea075a42b308a5fbe2df1854899123fe09eb0ee9de61"]
  - id: ciclos-en-una-segmentacion
    tier: 2
    prompt: |
      Un procesador segmentado en $5$ etapas ejecuta $1000$ instrucciones sin ningún riesgo ni parada. ¿Cuántos ciclos tarda desde que entra la primera hasta que sale la última? Respuesta: un entero.
    answers: ["sha256:75992a5ac67ff644d3063976c2effd10bdd93fcc109798e3d5c1acf2e530d01a"]
  - id: riesgos-de-carga-y-uso
    tier: 2
    prompt: |
      En un procesador de $5$ etapas con anticipación (*forwarding*), una instrucción que usa el resultado de una carga (`lw`) inmediatamente anterior se para $1$ ciclo; ningún otro caso se para. ¿Cuántos ciclos tarda esta secuencia?

      ```text
      lw   x1, 0(x2)
      add  x3, x1, x4
      sub  x5, x3, x6
      lw   x7, 0(x5)
      or   x8, x7, x7
      and  x9, x8, x1
      ```

      Respuesta: un entero.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: predictor-de-dos-bits
    tier: 2
    prompt: |
      Un predictor de saltos con contador saturado de 2 bits (estados $0$ y $1$ predicen «no salta», $2$ y $3$ «salta»; sube con cada salto tomado y baja con cada no tomado) empieza en el estado $1$. El salto de un bucle se toma $9$ veces y después no se toma, y el bucle completo se ejecuta $3$ veces seguidas ($30$ ejecuciones del salto). ¿Cuántas predicciones falla? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: aciertos-en-mapeo-directo
    tier: 2
    prompt: |
      Una caché de mapeo directo tiene $4$ líneas de $16$ bytes y empieza vacía. ¿Cuántos aciertos hay con la secuencia de direcciones (en hexadecimal) `0x00`, `0x10`, `0x40`, `0x04`, `0x80`, `0x14`, `0x00`, `0x44`, `0x40`, `0x10`? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: flotante-de-simple-precision
    tier: 2
    prompt: |
      ¿Cuál es la representación IEEE 754 de **simple** precisión (32 bits) de $0{,}15625$? Respuesta: 8 dígitos hexadecimales en minúsculas.
    answers: ["sha256:120913db429037e0ca68f1e3434eeb4f670ec8f6e4a296746252883658198aea"]
  - id: cpi-con-paradas
    tier: 3
    prompt: |
      Un procesador tiene CPI base $1$. El $20\,\%$ de las instrucciones son cargas, y el $30\,\%$ de ellas provoca una parada de $1$ ciclo; el $15\,\%$ son saltos, y el $10\,\%$ de ellos se predice mal con una penalización de $3$ ciclos. ¿Cuál es el CPI efectivo? Respuesta: un número.
    answers: ["sha256:926575b8d6821f373fed710f3c561e413d91a68e7505042ffcb3777f5c334d4d"]
  - id: recorrido-por-filas-y-por-columnas
    tier: 3
    prompt: |
      Una matriz de $64\times64$ `double` (por filas, alineada a 64 bytes) se recorre entera una vez con una caché vacía de $4$ KiB, mapeo directo y líneas de $64$ bytes. ¿Cuántos fallos hay recorriéndola por **filas** y cuántos por **columnas**? Respuesta: los dos números separados por `;`.
    answers: ["sha256:fff98269c83457bd990381ef8eeda53094b00b2aad9d73e38941a28fbe32ee4f"]
  - id: alcance-del-tlb
    tier: 3
    prompt: |
      Un TLB tiene $64$ entradas. ¿Cuánta memoria cubre (alcance) con páginas de $4$ KiB, en KiB, y con páginas de $2$ MiB, en MiB? Respuesta: los dos números separados por `;`.
    answers: ["sha256:9ff600a9c9b9ca9b6602e1641594a70b223ba765655a8dec76417a308b66e1dc"]
  - id: modelo-roofline
    tier: 3
    prompt: |
      La operación `y[i] = a*x[i] + y[i]` en `double` hace $2$ operaciones de coma flotante y mueve $24$ bytes por elemento (leer `x[i]` e `y[i]`, escribir `y[i]`). En una máquina de $100$ GFLOP/s de pico y $20$ GB/s de ancho de banda de memoria, ¿qué rendimiento máximo alcanza según el modelo *roofline*, en GFLOP/s? Respuesta: un número con **2 decimales**.
    answers: ["sha256:ec7437ac721da5306664df58b2f7feb0bfdd20efe45e809bce4b8a3c3e135026"]
  - id: conflictos-y-asociatividad
    tier: 3
    prompt: |
      Un programa accede alternativamente a las direcciones `0x0000` y `0x1000`, $10$ veces cada una ($20$ accesos). ¿Cuántos fallos hay con una caché de $4$ KiB y líneas de $64$ bytes de **mapeo directo**, y cuántos con una de **2 vías** del mismo tamaño? Respuesta: los dos números separados por `;`.
    answers: ["sha256:bd0c81e282f9996e6ca4948dcb0ac8f6aea7b68a07708e15c119ca5f4bdf8d69"]
---

# Arquitectura de computadores: rendimiento, repertorio RISC-V, segmentación, predicción y jerarquía de memoria

[[ing-logica-digital]] construyó sumadores, registros y máquinas de estados. Este nodo los organiza en un **procesador** y explica por qué
un programa es rápido o lento: cómo se mide el rendimiento (y sus leyes: Amdahl, *roofline*), qué es un repertorio de instrucciones (con
RISC-V, abierto y limpio, como ejemplo), cómo se ejecutan las instrucciones en un camino de datos **segmentado** con sus riesgos y la
predicción de saltos, y cómo la **jerarquía de memoria** (cachés, TLB) esconde que la memoria es cien veces más lenta que el procesador. Es
lo que hay debajo de [[sys-c-memoria]] y de [[sys-sistemas-operativos]], y lo que hay que saber para escribir código rápido.

## Objetivos

Al terminar sabrás:

1. Calcular el tiempo de CPU (instrucciones, CPI, frecuencia), aplicar la ley de Amdahl y el modelo *roofline*.
2. Leer y codificar instrucciones RISC-V y explicar los principios de diseño de un repertorio.
3. Contar ciclos en un procesador segmentado de 5 etapas con anticipación y paradas, y simular un predictor de saltos de 2 bits.
4. Descomponer una dirección en etiqueta, índice y desplazamiento, simular cachés (directas y asociativas) y calcular el tiempo medio de acceso.
5. Explicar por qué el orden de los bucles cambia el rendimiento y escribir código que respete la localidad.
6. Relacionar TLB, memoria virtual y alcance del TLB.

## Qué debes dominar antes

[[ing-logica-digital]] (sumadores, registros, temporización, máquinas de estados) y [[sys-c-memoria]] (punteros, arrays, disposición en memoria).

> [!question] Test de entrada
> 1. ¿Cuántos bits hacen falta para numerar 64 cosas?
> 2. ¿Qué periodo de reloj corresponde a 2 GHz?
> 3. En `int a[100]`, ¿cuántos bytes separan `a[0]` de `a[16]`?
>
> Respuestas: 6; $0{,}5$ ns; $64$.

## 1. Para qué sirve

- **Rendimiento**: el mismo algoritmo puede ir diez veces más rápido según cómo recorra la memoria; los compiladores, las bases de datos y
  las bibliotecas numéricas se diseñan pensando en la caché.
- **Sistemas y seguridad**: memoria virtual, privilegios, interrupciones y ataques de ejecución especulativa (Spectre, Meltdown) son
  arquitectura ([[sec-explotacion-binaria]]).
- **Sistemas embebidos y diseño de hardware**: elegir un microcontrolador o diseñar un núcleo en una FPGA exige entender segmentación y memoria.
- **Aprendizaje automático**: GPU y aceleradores son arquitecturas especializadas; el modelo *roofline* dice si un modelo está limitado por
  cálculo o por memoria.

## 2. Rendimiento

El tiempo de ejecución de un programa es

$$
T = \text{instrucciones}\times\text{CPI}\times T_{\text{ciclo}} = \frac{\text{instrucciones}\times\text{CPI}}{f},
$$

con CPI los ciclos medios por instrucción. Mejorar uno de los tres factores puede empeorar otro (un repertorio más potente reduce
instrucciones pero puede subir el CPI o bajar la frecuencia): solo el tiempo total cuenta. Las comparaciones honestas usan programas reales
(SPEC) y medias geométricas de las aceleraciones.

**Ley de Amdahl (1967).** Si una mejora acelera $s$ veces una fracción $p$ del tiempo, la aceleración total es

$$
\text{aceleración} = \frac{1}{(1 - p) + p/s} \le \frac{1}{1 - p} .
$$

Con un $90\,\%$ paralelizable, ni infinitos núcleos pasan de $10\times$: la parte secuencial manda. **Optimiza el caso común**, y mide antes
(con un perfilador) cuál es.

**Modelo *roofline*** (Williams, Waterman y Patterson, 2009). La **intensidad aritmética** $I$ de un núcleo de cálculo son sus operaciones por byte
movido desde memoria. El rendimiento alcanzable es $\min(\text{pico de cálculo},\ I\times\text{ancho de banda})$: los núcleos de baja intensidad
(sumar vectores) están limitados por la memoria, y los de alta (producto de matrices bien organizado), por el cálculo.

## 3. El repertorio de instrucciones: RISC-V

El **repertorio** (ISA) es el contrato entre el software y el hardware. RISC-V es una ISA abierta, de tipo **carga-almacenamiento**: las
operaciones aritméticas trabajan solo con registros (32 registros enteros `x0`-`x31`, con `x0` siempre a cero), y solo `lw`/`sw` (y sus
variantes) acceden a memoria. Las instrucciones base miden 32 bits con pocos **formatos** y los campos en posiciones fijas, lo que simplifica la
decodificación:

- **R** (registro-registro): `add rd, rs1, rs2` — campos funct7, rs2, rs1, funct3, rd, código de operación.
- **I** (inmediato y cargas): `addi rd, rs1, imm`, `lw rd, imm(rs1)` — inmediato de 12 bits con signo en los bits 31-20.
- **S** (almacenamiento), **B** (saltos condicionales relativos al PC), **U** (inmediatos altos), **J** (saltos con enlace, `jal`).

**Ejemplo resuelto 1.** `add x3, x1, x2`: funct7 $= 0$, rs2 $= 2$, rs1 $= 1$, funct3 $= 0$, rd $= 3$, código `0110011`:
$(2 \ll 20) | (1 \ll 15) | (3 \ll 7) | \texttt{0x33} = \texttt{0x002081b3}$.

Principios de diseño que ilustra: la regularidad simplifica (formatos fijos), lo pequeño es rápido (32 registros), y un buen diseño exige
compromisos (inmediatos de 12 bits más `lui` para los grandes). Las ISA CISC como x86-64 tienen instrucciones de longitud variable y operandos
en memoria; internamente, los procesadores x86 las traducen a micro-operaciones parecidas a RISC ([[sys-ensamblador-x86-64]]).

## 4. Segmentación

Un procesador **monociclo** ejecuta cada instrucción entera en un ciclo largo. Uno **segmentado** la divide en etapas (en el clásico de 5:
búsqueda IF, decodificación ID, ejecución EX, memoria MEM, escritura WB) con registros entre ellas, y empieza una instrucción nueva cada ciclo,
como una cadena de montaje. Con $n$ instrucciones y $k$ etapas sin paradas tarda $n + k - 1$ ciclos: el rendimiento se acerca a una instrucción
por ciclo con un ciclo $k$ veces más corto.

**Riesgos** (*hazards*):

- **De datos**: una instrucción necesita un resultado que la anterior aún no ha escrito. La **anticipación** (*forwarding*) lleva el resultado
  desde la salida de la ALU directamente a la entrada de la siguiente; solo queda un caso sin resolver: usar el dato de una **carga** justo en la
  instrucción siguiente (el dato llega de memoria un ciclo tarde): **1 ciclo de parada**. El compilador reordena instrucciones para evitarlo.
- **De control**: tras un salto condicional no se sabe qué instrucción buscar. Se **predice** y, si se falla, se descartan las instrucciones
  buscadas por error (penalización de varios ciclos, de 10 a 20 en procesadores profundos).
- **Estructurales**: dos instrucciones necesitan el mismo recurso (se evitan con memorias separadas de instrucciones y datos).

**CPI efectivo.** CPI $= 1 + \sum$(frecuencia de cada evento $\times$ ciclos de parada). Con 25 % de cargas, la mitad seguidas de uso, y 20 % de
saltos con 10 % de fallos y 2 ciclos de penalización: $1 + 0{,}125 + 0{,}04 = 1{,}165$.

**Predicción de saltos.** Un **contador saturado de 2 bits** por salto (estados 0-1 predicen «no salta», 2-3 «salta») cambia de predicción solo tras
dos fallos seguidos: en un bucle, falla una vez por ejecución completa (a la salida) y no dos. Los procesadores modernos combinan historias
globales y locales y aciertan más del 95 % de las veces. Ejecutar especulativamente lo predicho es imprescindible para el rendimiento y es,
también, la raíz de ataques como Spectre (la especulación deja huellas en la caché).

Más allá: los procesadores **superescalares** emiten varias instrucciones por ciclo y las ejecutan **fuera de orden** cuando sus operandos están
listos, deshaciendo la ilusión de orden al final (reordenación y renombrado de registros).

## 5. Jerarquía de memoria

La memoria principal tarda unos 100 ns; un ciclo de reloj, menos de 1 ns. La solución es una **jerarquía**: registros, cachés L1 (unos 32 KiB,
1 ns), L2, L3 (decenas de MiB) y memoria principal, cada nivel mayor y más lento. Funciona por la **localidad**: **temporal** (lo usado se volverá
a usar pronto) y **espacial** (se usará lo que está al lado).

**Organización de una caché.** Se guarda por **líneas** (típicamente 64 bytes). Una dirección se divide en **desplazamiento** ($\log_2$ del tamaño de
línea), **índice** del conjunto ($\log_2$ del número de conjuntos) y **etiqueta** (el resto). En una caché de **mapeo directo** cada línea solo puede ir
a un sitio; en una **asociativa de $n$ vías**, a cualquiera de las $n$ de su conjunto (con reemplazo LRU o aproximado); en una **totalmente
asociativa**, a cualquiera.

**Ejemplo resuelto 2.** Caché de $64$ KiB, 4 vías, líneas de 64 B, direcciones de 48 bits: $64\cdot1024/64 = 1024$ líneas, $256$ conjuntos; desplazamiento
6 bits, índice 8 bits, etiqueta $48 - 14 = 34$ bits.

**Tipos de fallo (las 3 C).** **Obligatorios** (primer acceso a una línea), de **capacidad** (los datos no caben) y de **conflicto** (caben, pero
compiten por el mismo conjunto: desaparecen con más asociatividad).

**Tiempo medio de acceso.** $\text{AMAT} = t_{\text{acierto}} + \text{tasa de fallos}\times\text{penalización}$, y con varios niveles la penalización
de uno es el AMAT del siguiente.

**Escrituras.** *Write-through* (se escribe también en el nivel inferior) o *write-back* (solo al expulsar la línea, con un bit de sucio). En
multinúcleo, un **protocolo de coherencia** (MESI) mantiene coherentes las copias de cada núcleo; dos hilos que escriben variables distintas de la
misma línea se estorban (**compartición falsa**).

## 6. El orden de los bucles importa

El producto de matrices $C = A \cdot B$ admite seis ordenaciones de sus tres bucles. Todas ejecutan las mismas operaciones aritméticas, pero
recorren la memoria de forma distinta:

```c
#include <assert.h>

#define N 64
static double A[N][N], B[N][N], C1[N][N], C2[N][N];

int main(void) {
    for (int i = 0; i < N; i++)
        for (int j = 0; j < N; j++) {
            A[i][j] = (i + 2 * j) % 7;
            B[i][j] = (3 * i + j) % 5;
        }
    /* ijk: el bucle interior recorre A por filas y B por COLUMNAS */
    for (int i = 0; i < N; i++)
        for (int j = 0; j < N; j++) {
            double s = 0;
            for (int k = 0; k < N; k++)
                s += A[i][k] * B[k][j];
            C1[i][j] = s;
        }
    /* ikj: el bucle interior recorre B y C por filas */
    for (int i = 0; i < N; i++)
        for (int k = 0; k < N; k++) {
            double a = A[i][k];
            for (int j = 0; j < N; j++)
                C2[i][j] += a * B[k][j];
        }
    for (int i = 0; i < N; i++)
        for (int j = 0; j < N; j++)
            assert(C1[i][j] == C2[i][j]);  /* mismos resultados (enteros pequeños: sumas exactas) */
    return 0;
}
```

En `ijk`, cada iteración interior lee `B[k][j]` con `k` creciente: salta una fila entera, $8N$ bytes, y cae en una línea distinta cada vez. En `ikj`
los dos accesos interiores avanzan 8 bytes: ocho accesos consecutivos comparten línea. En hardware real la diferencia de tiempo para matrices
grandes es de un orden de magnitud, sin cambiar una sola operación aritmética. Las bibliotecas numéricas van más allá y dividen las matrices en
**bloques** que caben en la caché.

## 7. Memoria virtual y TLB

La traducción de direcciones virtuales a físicas ([[sys-sistemas-operativos]]) consultaría la tabla de páginas en cada acceso; el **TLB** es una
caché pequeña (decenas a miles de entradas) de traducciones recientes. Su **alcance** es $\text{entradas}\times\text{tamaño de página}$: con 64
entradas y páginas de 4 KiB, solo 256 KiB; con páginas grandes de 2 MiB, 128 MiB. Programas con mucha memoria y acceso disperso (bases de datos,
máquinas virtuales) ganan mucho con páginas grandes.

## 8. Errores típicos

- Comparar procesadores por su frecuencia o por su CPI por separado, en lugar de por el tiempo total.
- Olvidar la parte secuencial al estimar la aceleración paralela (Amdahl).
- Contar $n\cdot k$ ciclos en una segmentación en lugar de $n + k - 1$.
- Suponer que la anticipación elimina todas las paradas (queda la carga seguida de uso).
- Calcular el índice de una caché con el número de líneas en lugar del de conjuntos.
- Recorrer matrices en el orden que desaprovecha la caché; repartir datos de hilos distintos en la misma línea.

## 9. Resumen

- $T = \text{instrucciones}\times\text{CPI}/f$; Amdahl $1/((1 - p) + p/s)$; *roofline* $\min(\text{pico}, I\times\text{BW})$.
- RISC-V: carga-almacenamiento, 32 registros, formatos R, I, S, B, U, J de 32 bits.
- Segmentación de 5 etapas: $n + k - 1$ ciclos; anticipación; parada por carga-uso; predicción de 2 bits; especulación.
- Caché: etiqueta, índice, desplazamiento; directa y asociativa; LRU; 3 C; AMAT; coherencia y compartición falsa.
- Localidad: el orden de los bucles y los bloques. TLB y su alcance.

## Reto

Simula la caché de datos durante el producto de dos matrices de `double` de $128 \times 128$. Las tres matrices son contiguas en memoria: `A`
empieza en `0x10000000`, `B` inmediatamente después y `C` a continuación de `B`. El elemento `[i][j]` de una matriz está en
`base + 8 * (128 * i + j)`. Las variables escalares viven en registros y no acceden a memoria.

La secuencia de accesos es exactamente esta:

- Orden **ijk**: para cada `i`, para cada `j`: para cada `k`, un acceso a `A[i][k]` y después uno a `B[k][j]`; al terminar el bucle de `k`, un
  acceso a `C[i][j]`.
- Orden **ikj**: para cada `i`, para cada `k`: un acceso a `A[i][k]`; después, para cada `j`, un acceso a `B[k][j]` y otro a `C[i][j]`.

Las cachés empiezan vacías, usan líneas de 64 bytes y reemplazo LRU. Calcula el número de fallos:

- **a.** Orden ijk, caché de 32 KiB y 8 vías.
- **b.** Orden ikj, la misma caché.
- **c.** Orden ijk, caché de 32 KiB de mapeo directo.

Valor de control: orden ikj con una caché de 4 KiB y 2 vías, $281\,536$ fallos.

Formato de la flag, en decimal: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Tiempo $=$ instrucciones $\times$ CPI $/$ frecuencia; la parte secuencial limita (Amdahl).
2. Segmentación: $n + k - 1$ ciclos y la parada por carga-uso.
3. Etiqueta, índice y desplazamiento de una dirección en una caché.
4. AMAT $=$ acierto $+$ fallos $\times$ penalización.
5. Recorre la memoria en el orden en que está guardada.

## Siguiente

[[sys-ensamblador-x86-64]] (programar la máquina directamente) y, en las ramas, concurrencia y optimización del rendimiento.
