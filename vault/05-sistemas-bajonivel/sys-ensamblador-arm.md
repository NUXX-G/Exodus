---
id: sys-ensamblador-arm
title: "Ensamblador ARM: AArch64 (registros, inmediatos, banderas y selección condicional, memoria, AAPCS64, modelo de memoria débil, atómicos, NEON y SVE, PAC y BTI) y Cortex-M con Thumb-2"
area: bajo-nivel
trunk_level: 11
prerequisites: [sys-ensamblador-x86-64, ing-arquitectura-computadores]
academic_sources:
  - "Arm Ltd. Arm Architecture Reference Manual for A-profile architecture (DDI 0487) y Procedure Call Standard for the Arm 64-bit Architecture (AAPCS64, IHI 0055, repositorio ARM-software/abi-aa). Consultados en noviembre de 2026."
  - "Smith, S. Programming with 64-Bit ARM Assembly Language. Apress, 2020."
  - "Harris, S. L.; Harris, D. M. Digital Design and Computer Architecture: ARM Edition. Morgan Kaufmann, 2015."
  - "Yiu, J. The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors, 3ª ed. Newnes, 2014; Arm Ltd. Armv7-M Architecture Reference Manual (DDI 0403)."
  - "Pulte, C.; Flur, S.; Deacon, W.; French, J.; Sarkar, S.; Sewell, P. Simplifying ARM Concurrency: Multicopy-Atomic Axiomatic and Operational Models for ARMv8. POPL 2018."
exercises:
  - id: movz-movk
    tier: 1
    prompt: |
      Con `MOVZ` y `MOVK` (16 bits cada una), ¿cuántas instrucciones hacen falta como mínimo para cargar `0x0000FFFF00001234` en `x0`?

      Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: registros-w
    tier: 1
    prompt: |
      ¿Qué valor tiene `x0` (en decimal, con signo) después de `mov x0, #-1` seguido de `mov w0, #5`?

      Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: banderas
    tier: 1
    prompt: |
      Con `x0 = -1` y `x1 = 1`, tras `cmp x0, x1`, ¿qué valen `cset x2, lt` (con signo) y `cset x3, lo` (sin signo)?

      Respuesta: `x2;x3`.
    answers: ["sha256:8f42786de6c4830af682e9e652094033da177111ab13c8ec6bb20af2c9019249"]
  - id: modos-de-direccionamiento
    tier: 1
    prompt: |
      `x0` apunta a un array de `long` `{10, 20, 30, 40}`. Tras `ldr x1, [x0], #8`, `ldr x2, [x0, #8]!` y `ldr x3, [x0, #8]`, ¿qué valen `x1`, `x2` y `x3`?

      Respuesta: `x1;x2;x3`.
    answers: ["sha256:95cca8d3764a61ba2ffd364eb89a466039389263b5a8bf4ed360dec13c03d621"]
  - id: inmediatos-logicos
    tier: 1
    prompt: |
      ¿Cuáles de estos valores se pueden codificar como inmediato de `and x0, x0, #imm`? a) `0xFF`, b) `0x1234`, c) `0x5555555555555555`, d) `0xFFFF0000FFFF0000`, e) `0`.

      Respuesta: las letras en orden, separadas por espacios.
    answers: ["sha256:b647eb1fbb0e2e29c14dbe1d3ed6d706eb5ae292e01eab9f1c52e003a9e08a02"]
  - id: convencion-de-llamada
    tier: 1
    prompt: |
      Según la AAPCS64, en `long f(long a, int b, double c, long d, float e)`, ¿en qué registros llegan `d` y `e`?

      Respuesta: los dos registros separados por un espacio (por ejemplo `x5 d7`).
    answers: ["sha256:88ff50262a9fc8fb889afd8f8fc03229fe57ae285732396b2e53d04fe9384e4d"]
  - id: bucle-suma-de-cuadrados
    tier: 2
    prompt: |
      Escribe en ensamblador AArch64 `long suma_cuadrados(long n)`, que devuelve 1² + 2² + … + n² con un bucle (usa `madd`), y llámala desde C. ¿Qué devuelve para `n = 1000`?

      Respuesta: un número.
    answers: ["sha256:7d3b76755ebdd5f475683ec9023d671822416d50db69b2f45b3eb995e1acab4b"]
  - id: seleccion-condicional
    tier: 2
    prompt: |
      ¿Qué deja en `x2` la secuencia `mov x0, #4`, `mov x1, #9`, `cmp x0, x1`, `csinc x2, x0, x1, gt`?

      Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: orden-de-memoria
    tier: 2
    prompt: |
      Prueba de paso de mensajes: el hilo 1 hace `datos = 1; listo = 1;` y el hilo 2 lee `r1 = listo; r2 = datos;` (todo inicialmente 0, accesos normales). ¿Puede observarse `r1 = 1, r2 = 0` (a) en x86-64, (b) en AArch64 con `str`/`ldr` sin barreras, (c) en AArch64 con `stlr` para `listo` y `ldar` para leerlo?

      Respuesta: `si` o `no` para cada caso, separados por espacios.
    answers: ["sha256:1ebb48941b098b3fe4013f4dc3fc8495f1f75b288dd4ca85d5f9025c57d416c4"]
  - id: atomicos-lse
    tier: 2
    prompt: |
      Al compilar `atomic_fetch_add(p, 1)` (orden secuencialmente consistente) con `gcc -O2 -march=armv8.1-a` para AArch64, ¿qué instrucción atómica única genera?

      Respuesta: el mnemónico.
    answers: ["sha256:635872b3746a8c19c71a3ca1662cb27d9d75ca4f6a2f2f0d6593cb17ec78af38"]
  - id: neon-reduccion
    tier: 2
    prompt: |
      ¿Qué valor devuelve `movi v0.16b, #7`, `movi v1.16b, #5`, `mul v2.16b, v0.16b, v1.16b`, `addv b3, v2.16b`, `umov w0, v3.b[0]`?

      Respuesta: un número.
    answers: ["sha256:98010bd9270f9b100b6214a21754fd33bdc8d41b2bc9f9dd16ff54d3c34ffd71"]
  - id: multiplicar-por-9
    tier: 2
    prompt: |
      GCC -O2 compila `int f(int x) { return x * 9; }` para AArch64 en una sola instrucción `add w0, w0, w0, lsl #k`. ¿Cuánto vale `k`?

      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: division-entera
    tier: 2
    prompt: |
      ¿Qué deja `sdiv x0, x1, x2` con `x1 = 7`, `x2 = 0`? ¿Y con `x1 = -2⁶³`, `x2 = -1`?

      Respuesta: `primero;segundo` en decimal con signo.
    answers: ["sha256:0ea29162efe0cd9c4e4b382edaf3513f6177da30eaa77340835ed82b59c2e133"]
  - id: collatz-en-ensamblador
    tier: 3
    prompt: |
      Escribe en AArch64 `long collatz_max(long n)`, que devuelve el máximo número de pasos de Collatz (`n → n/2` si es par, `3n+1` si es impar, hasta llegar a 1) entre los valores iniciales de 1 a `n`, sin saltos en el cuerpo del paso (usa `csel`). ¿Qué devuelve para `n = 10000`?

      Respuesta: un número.
    answers: ["sha256:e888a676e1926d0c08b5f11fb9116df58b62604b05846f39f8d6fc4dd0ba31f1"]
  - id: marco-de-excepcion-cortex-m
    tier: 3
    prompt: |
      Al entrar en una excepción, ¿cuántos bytes apila automáticamente el hardware de un Cortex-M4 sin contexto de coma flotante activo, y cuántos con él (marco extendido)?

      Respuesta: `sin;con`.
    answers: ["sha256:d34d2f485e8ee664784f9a66de7a5b9c4702ae0620d9125a75cd56037a6f6e5a"]
  - id: adrp
    tier: 3
    prompt: |
      Una instrucción `adrp x0, simbolo` está en la dirección `0x400000` y `simbolo` en `0x412345`. ¿Qué desplazamiento de página codifica `adrp` y qué valor suma luego `add x0, x0, :lo12:simbolo`?

      Respuesta: `paginas;desplazamiento` en decimal.
    answers: ["sha256:492f7deeb03ece2bff4f5d0f6347f19ba507f985c585591193eca99dfe2752e9"]
---

ARM es la arquitectura de procesador más fabricada del mundo: todos los móviles, los Mac con Apple Silicon, los servidores Graviton de AWS y Ampere, la Raspberry Pi y la inmensa mayoría de los
microcontroladores de un robot (los Cortex-M de STM32, nRF, RP2040/RP2350). Tras [[sys-ensamblador-x86-64]], este nodo enseña la otra gran familia, que es además la que mejor muestra la filosofía
**RISC**: instrucciones de tamaño fijo, carga y almacenamiento separados del cálculo, muchos registros y un modelo de memoria **débil** que obliga a entender de verdad la concurrencia. Se estudian dos
perfiles: **AArch64** (Armv8-A y Armv9-A, el de los ordenadores y servidores) con detalle profesional, y **Cortex-M** con Thumb-2 (el de los sistemas embebidos), en lo que necesita quien programa firmware.

## Objetivos

Al terminar sabrás:

1. Distinguir los perfiles A, R y M, y los estados AArch64 y AArch32.
2. Usar los registros de AArch64 (`x0`–`x30`, `w`, `sp`, `xzr`, NZCV, `v0`–`v31`) y saber qué hace escribir en un registro `w`.
3. Cargar constantes con `movz`/`movk`, y saber qué inmediatos admiten las instrucciones aritméticas y las lógicas.
4. Usar las banderas, los códigos de condición y la selección condicional (`csel`, `csinc`, `cset`) para escribir código sin saltos.
5. Acceder a memoria con todos los modos de direccionamiento, `ldp`/`stp`, y direcciones independientes de la posición con `adrp`.
6. Escribir funciones que cumplan la AAPCS64 y leer el código que generan GCC y Clang.
7. Razonar sobre el modelo de memoria débil de ARM y usar `ldar`/`stlr`, barreras, exclusivos y atómicos LSE.
8. Vectorizar con NEON, conocer SVE, y saber qué hacen PAC, BTI y MTE.
9. Explicar el modelo de excepciones de Cortex-M y escribir Thumb-2 que siga la AAPCS de 32 bits.

## Qué debes dominar antes

[[sys-ensamblador-x86-64]] (pila, convención de llamada, lectura de ensamblador) e [[ing-arquitectura-computadores]] (segmentación, cachés, RISC frente a CISC).

> [!question] Test de entrada
> 1. En x86-64, ¿qué hace `mov eax, 5` con los 32 bits altos de `rax`?
> 2. ¿Qué significa que un procesador sea *load/store*?
> 3. ¿Qué garantiza el modelo TSO de x86 sobre el orden de dos escrituras de un mismo hilo?
>
> Respuestas: los pone a cero; que solo las instrucciones de carga y almacenamiento tocan memoria, y el resto opera entre registros; que otros hilos las ven en el orden del programa.

## 1. Para qué sirve

- **Rendimiento**: optimizar un bucle crítico en un servidor Graviton o en un Mac exige leer el código AArch64 que genera el compilador y entender NEON.
- **Sistemas**: el arranque, los controladores, el núcleo de Linux para ARM y los hipervisores tienen partes en ensamblador.
- **Embebidos y robótica**: los manejadores de interrupción, el arranque de un microcontrolador y la depuración de un *hard fault* se hacen leyendo Thumb-2 ([[rob-sensores-actuadores]]).
- **Seguridad**: el análisis de binarios de Android, iOS y de firmware de dispositivos es análisis de ARM ([[sec-explotacion-binaria]]).

## 2. Perfiles, estados y versiones

- **Perfil A** (*Application*): procesadores con MMU para sistemas operativos completos (Cortex-A, Neoverse, Apple M). **Perfil R** (*Real-time*): tiempo real con protección de memoria (Cortex-R, en
  controladores de discos y automoción). **Perfil M** (*Microcontroller*): Cortex-M, sin MMU, con interrupciones de baja latencia.
- **AArch64** es el estado de ejecución de 64 bits, con el repertorio **A64**; **AArch32** es el de 32 bits, con los repertorios A32 (el ARM clásico) y T32 (**Thumb-2**). Los Cortex-M solo ejecutan T32.
- **Versiones**: Armv8.0-A (2011) introdujo AArch64; las extensiones posteriores añaden atómicos LSE (8.1), autenticación de punteros (8.3), BTI y MTE (8.5); **Armv9-A** añade SVE2 como base y nuevas
  funciones de seguridad. El código se compila para una versión mínima con `-march=armv8.2-a` o similar.

## 3. Registros

| Registro | Uso |
|---|---|
| `x0`–`x30` (64 bits) y `w0`–`w30` (sus 32 bits bajos) | propósito general |
| `x29` (`fp`) y `x30` (`lr`) | puntero de marco y **registro de enlace** (dirección de retorno que deja `bl`) |
| `sp` | puntero de pila; debe estar alineado a **16 bytes** cuando se usa para acceder a memoria |
| `xzr` / `wzr` | registro **cero**: lee 0 y descarta lo que se escribe (comparte código con `sp` según la instrucción) |
| `pc` | contador de programa; **no** es un registro de propósito general (no se puede escribir con `mov`) |
| NZCV (en PSTATE) | banderas: negativo, cero, acarreo y desbordamiento |
| `v0`–`v31` (128 bits) | coma flotante y SIMD; vistos como `b`, `h`, `s`, `d`, `q` según el tamaño |

**Escribir un registro `w` pone a cero los 32 bits altos** del `x` correspondiente (igual que `mov eax` en x86-64): tras `mov x0, #-1` y `mov w0, #5`, `x0` vale 5.

## 4. Instrucciones: formato e inmediatos

Todas las instrucciones A64 ocupan **32 bits**. Esto simplifica la decodificación y el *pipeline*, pero obliga a codificar los inmediatos en pocos bits:

- **Aritméticos** (`add`, `sub`, `cmp`): 12 bits sin signo, opcionalmente desplazados 12 posiciones (`add x0, x1, #0x5000` es válido; `#0x5001` no).
- **Lógicos** (`and`, `orr`, `eor`, `tst`): un **patrón de bits**: una racha de unos, rotada, dentro de un elemento de 2, 4, 8, 16, 32 o 64 bits que se repite hasta llenar el registro. Son 5334 valores para 64
  bits: `0xFF`, `0x5555555555555555` y `0xFFFF0000FFFF0000` lo son; `0x1234` (varias rachas), `0` y todo unos, no.
- **Constantes de 64 bits**: `movz` pone 16 bits en una de las cuatro posiciones (0, 16, 32, 48) y a cero el resto; `movk` cambia 16 bits conservando los demás; `movn` pone el complemento. Cualquier
  constante se carga en como mucho 4 instrucciones, y las que tienen trozos a cero en menos: `0x0000FFFF00001234` son `movz x0, #0x1234` y `movk x0, #0xffff, lsl #32`. El ensamblador acepta `mov x0, #imm`
  y elige la codificación, o `ldr x0, =imm` para usar una tabla de literales.
- **Segundo operando desplazado o extendido**: `add x0, x1, x2, lsl #3` suma `x2 · 8` sin instrucción aparte; `add x0, x1, w2, sxtw` extiende el signo de `w2`. GCC compila `x * 9` como
  `add w0, w0, w0, lsl 3`.

> [!example] Ejemplo resuelto 1: un máximo y un valor absoluto sin saltos
> `cmp x0, x1` resta y fija las banderas; `csel x2, x0, x1, gt` copia `x0` si fue mayor (con signo) y `x1` si no. El valor absoluto: `cmp x0, #0` y `cneg x0, x0, lt`. Sin saltos no hay predicción
> que fallar: en datos aleatorios, un salto condicional mal predicho cuesta unos 10–20 ciclos y `csel`, uno. Es lo que hacen los compiladores con `?:` cuando las dos ramas son baratas.

## 5. Aritmética, banderas y condiciones

- Solo las variantes con **`s`** (`adds`, `subs`, `ands`) y las comparaciones (`cmp`, `cmn`, `tst`) cambian las banderas; un `add` normal no las toca. Así se pueden intercalar cálculos entre la comparación y
  el salto.
- **Condiciones** (sufijo de `b.cond`, `csel`, `cset`): `eq`/`ne` (Z), `lt`/`ge`/`gt`/`le` (**con signo**: N, V y Z), `lo`/`hs`/`hi`/`ls` (**sin signo**: C y Z), `mi`/`pl` (N), `vs`/`vc` (V). Tras
  `cmp x0, x1` con `x0 = -1` y `x1 = 1`, `lt` es cierta (−1 < 1) y `lo` falsa (como sin signo, `x0` es 2⁶⁴ − 1). Ojo: en ARM, tras una resta, **C = 1 significa que no hubo préstamo** (al revés que en x86).
- **Selección condicional**: `csel` (uno u otro), `csinc` (el primero o el segundo más uno), `csinv`, `csneg`, y los alias `cset`, `cinc`, `cneg`. `csinc x2, x0, x1, gt` con `x0 = 4` y `x1 = 9` deja 10.
- **Multiplicación y división**: `mul`, `madd` (`a·b + c`), `msub`, `smulh`/`umulh` (64 bits altos del producto de 128), `sdiv`/`udiv`. **La división entera no produce excepción**: dividir entre cero da
  0, y `−2⁶³ / −1` da `−2⁶³`. El resto se calcula con `msub`: `r = a − (a/b)·b`.
- **Campos de bits**: `ubfx`/`sbfx` (extraer), `bfi` (insertar), `clz`, `rbit`, `rev` (cambio de orden de bytes).

## 6. Memoria

- Carga y almacenamiento por tamaños: `ldr`/`str` (64 o 32 bits según el registro), `ldrb`, `ldrh`, `ldrsb`, `ldrsh`, `ldrsw` (con extensión de signo), `strb`, `strh`.
- **Modos de direccionamiento**: desplazamiento `[x0, #8]`; registro escalado `[x0, x1, lsl #3]`; **preíndice** `[x0, #8]!` (actualiza `x0` y luego accede); **postíndice** `[x0], #8` (accede y luego
  actualiza). Con `x0` apuntando a `{10, 20, 30, 40}`: `ldr x1, [x0], #8` lee 10 y avanza; `ldr x2, [x0, #8]!` avanza otra vez y lee 30; `ldr x3, [x0, #8]` lee 40.
- **Pares**: `ldp`/`stp` mueven dos registros; son la base de los prólogos (`stp x29, x30, [sp, #-16]!`).
- **Direcciones independientes de la posición**: `adr` alcanza ±1 MiB; `adrp x0, simbolo` calcula la **página de 4 KiB** del símbolo relativa a la del PC (±4 GiB), y `add x0, x0, :lo12:simbolo` suma los
  12 bits bajos. Si la instrucción está en `0x400000` y el símbolo en `0x412345`, `adrp` codifica 18 páginas y `add` suma `0x345` = 837.
- AArch64 en Linux es **little-endian**; los accesos sin alinear están permitidos en memoria normal (más lentos si cruzan una línea de caché), pero no los atómicos ni los exclusivos.

## 7. Saltos y llamadas

`b etiqueta` (±128 MiB), `b.cond` (±1 MiB), `cbz`/`cbnz` (comparar con cero y saltar), `tbz`/`tbnz` (probar un bit y saltar), `bl` (llamada: guarda la vuelta en `x30`), `br`/`blr` (a una dirección en
registro) y `ret` (salta a `x30`). Como `bl` no usa la pila, una función **hoja** (que no llama a nadie) no necesita marco; una que llama debe guardar `x30` antes.

## 8. La convención de llamada AAPCS64

| Registros | Papel |
|---|---|
| `x0`–`x7` | argumentos enteros y punteros, y resultado (`x0`, o `x0`–`x1` para 128 bits) |
| `x8` | dirección del resultado cuando una función devuelve una estructura grande |
| `x9`–`x15` | temporales: los puede destruir quien es llamado |
| `x16`, `x17` | temporales intraprocedimiento (los usan las *veneers* del enlazador y la PLT) |
| `x18` | registro de plataforma: no tocarlo (Windows y macOS lo reservan) |
| `x19`–`x28` | los **conserva** quien es llamado |
| `x29`, `x30` | puntero de marco y registro de enlace |
| `v0`–`v7` | argumentos y resultado de coma flotante y SIMD |
| `v8`–`v15` | se conservan solo sus **64 bits bajos** |

Los argumentos enteros y los de coma flotante se reparten **por separado**: en `long f(long a, int b, double c, long d, float e)`, `a` va en `x0`, `b` en `w1`, `c` en `d0`, `d` en `x2` y `e` en `s1`. A partir del
noveno entero (o del noveno real) van a la pila. Linux no garantiza zona roja: no uses memoria por debajo de `sp`.

> [!example] Ejemplo resuelto 2: el marco de una función que llama a otras
> ```text
> aplica_dos_veces:              // long aplica_dos_veces(long (*f)(long), long x) { return f(f(x)); }
>     stp  x29, x30, [sp, #-32]!  // reserva 32 bytes (múltiplo de 16) y guarda fp y lr
>     mov  x29, sp                // nuevo puntero de marco: los depuradores recorren la cadena x29
>     str  x19, [sp, #16]         // x19 es del llamado: hay que conservarlo si lo usamos
>     mov  x19, x0                // f sobrevive a las llamadas en un registro conservado
>     mov  x0, x1
>     blr  x19                    // f(x)
>     blr  x19                    // f(f(x)): el resultado ya está en x0
>     ldr  x19, [sp, #16]
>     ldp  x29, x30, [sp], #32    // restaura y libera
>     ret
> ```
> Es el patrón que verás en cualquier `gcc -O2 -S`: `stp` con preíndice al entrar, `ldp` con postíndice al salir.

## 9. El modelo de memoria débil, exclusivos y atómicos

x86 usa **TSO**: cada hilo ve las escrituras de los demás en el orden en que se hicieron (solo una carga puede adelantar a una escritura anterior). **ARM es más débil**: el procesador puede reordenar
cargas y escrituras a direcciones distintas si no hay una dependencia o una barrera. Desde Armv8 el modelo es **multicopia-atómico** (Pulte et al., 2018): cuando una escritura es visible para otro núcleo,
lo es para todos.

- **Paso de mensajes** (el hilo 1 escribe `datos` y luego `listo`; el hilo 2 lee `listo` y luego `datos`): en x86 no se puede ver `listo = 1` con `datos = 0`; en ARM con `str`/`ldr` simples **sí**. Se arregla
  con **liberar** al escribir la bandera (`stlr`) y **adquirir** al leerla (`ldar`): todo lo anterior al `stlr` es visible para quien ve la bandera con `ldar`. Es exactamente lo que generan `memory_order_release`
  y `memory_order_acquire` de C11, C++ y Rust ([[prog-rust-concurrencia-async]]).
- **Barreras**: `dmb ish` (orden de accesos a memoria en el dominio compartido), `dsb` (espera a que terminen), `isb` (vacía el *pipeline*, tras cambiar código o registros de sistema).
- **Exclusivos**: `ldxr`/`stxr` (con variantes `ldaxr`/`stlxr`) implementan operaciones atómicas por reintento: `stxr` falla (devuelve 1) si otro núcleo tocó la línea entre medias.
- **LSE** (Armv8.1): instrucciones atómicas únicas, `ldadd`, `ldclr`, `ldset`, `swp`, `cas`, con sufijos `a` (adquirir), `l` (liberar) y `al` (ambos). `atomic_fetch_add` secuencialmente consistente es
  `ldaddal`. Escalan mucho mejor que los exclusivos con muchos núcleos; GCC usa por defecto **atómicos de línea externa** (`-moutline-atomics`) que eligen en tiempo de ejecución.

> [!example] Ejemplo resuelto 3: incremento atómico con exclusivos
> ```text
> 1:  ldaxr x1, [x0]       // lee y abre el monitor exclusivo
>     add   x1, x1, #1
>     stlxr w2, x1, [x0]   // escribe solo si nadie tocó la línea; w2 = 0 si lo consiguió
>     cbnz  w2, 1b         // si falló, reintenta
>     ret
> ```
> Cuatro hilos que llaman 100 000 veces cada uno dejan exactamente 400 000; con `ldr`, `add` y `str` se pierden incrementos. Entre `ldaxr` y `stlxr` no debe haber otros accesos a memoria ni llamadas.

## 10. NEON y SVE

**NEON** (Advanced SIMD) opera sobre los registros `v` de 128 bits con una **disposición**: `v0.16b` (16 bytes), `v0.8h`, `v0.4s`, `v0.2d`. Instrucciones típicas: `ld1 {v0.4s}, [x0], #16`, `add`, `mul`, `fmla`
(multiplica y acumula), `cnt` (bits a uno por byte), `addv` (suma horizontal), `umov` (extraer un elemento). La aritmética entera **da la vuelta** en el tamaño del elemento: 16 productos `7 · 5 = 35` suman
560, pero `addv b3, v2.16b` deja un byte, 560 mod 256 = 48.

**SVE/SVE2** usa vectores de longitud **desconocida en compilación** (128 a 2048 bits, según el procesador) y **predicados**: el bucle `whilelo p0.s, x1, x2` crea la máscara de los elementos que quedan,
y el mismo binario funciona y escala en cualquier implementación, sin bucle de resto. Los compiladores vectorizan para ambos con `-O3`; los intrínsecos (`arm_neon.h`, `arm_sve.h`) dan control fino.

## 11. Seguridad en la arquitectura

- **PAC** (*Pointer Authentication*, 8.3): `paciasp` firma la dirección de retorno de `x30` con una clave secreta y el `sp` como modificador, y guarda la firma en los bits altos no usados del puntero; `autiasp` la comprueba antes de `ret`. Una dirección de retorno
  sobrescrita produce un fallo, lo que mitiga la programación orientada al retorno.
- **BTI** (*Branch Target Identification*, 8.5): los saltos indirectos solo pueden caer en instrucciones `bti`; mitiga la reutilización de código por saltos indirectos.
- **MTE** (*Memory Tagging*, 8.5): una etiqueta de 4 bits en el puntero y en cada bloque de 16 bytes de memoria; un acceso con etiqueta distinta (desbordamiento, uso tras liberar) se detecta en el hardware.
- Se activan con `-mbranch-protection=standard` y, para MTE, con el soporte del núcleo y del asignador de memoria.

## 12. Excepciones y llamadas al sistema

Los **niveles de excepción**: EL0 (aplicaciones), EL1 (núcleo), EL2 (hipervisor), EL3 (monitor seguro). Una llamada al sistema en Linux pone el número en `x8`, los argumentos en `x0`–`x5`, y ejecuta
`svc #0`: `write` es la 64 y `exit` la 93. El vector de excepciones del núcleo está en la dirección de `VBAR_EL1`.

## 13. Cortex-M y Thumb-2

- **Registros**: `r0`–`r12`, `sp` (`r13`, con dos pilas: MSP para el núcleo e interrupciones y PSP para tareas), `lr` (`r14`), `pc` (`r15`) y `xPSR`. Thumb-2 mezcla instrucciones de **16 y 32 bits** para
  un código compacto; muchas operaciones tienen una forma corta si usan `r0`–`r7`.
- **AAPCS de 32 bits**: argumentos en `r0`–`r3`, resultado en `r0` (y `r1`), `r4`–`r11` los conserva el llamado, `sp` alineado a 8 bytes en las llamadas públicas.
- **Excepciones**: la tabla de vectores empieza con el valor inicial de `sp` y la dirección de `Reset_Handler`. Al entrar en una interrupción, el **hardware apila 8 palabras** (`r0`–`r3`, `r12`, `lr`, `pc`,
  `xPSR`): 32 bytes. Con la unidad de coma flotante en uso, el **marco extendido** añade `s0`–`s15`, `FPSCR` y una palabra reservada: 26 palabras, 104 bytes (con apilado perezoso, el espacio se reserva y los
  registros solo se guardan si el manejador usa la FPU). Gracias a eso un manejador puede ser una **función C normal**. `lr` recibe un valor `EXC_RETURN` (`0xFFFFFFF9`, `0xFFFFFFFD`…) que indica a qué pila y
  modo volver.
- **NVIC**: prioridades configurables, anidamiento y *tail-chaining* (encadenar interrupciones sin desapilar y volver a apilar). Las regiones críticas cortas se protegen con `cpsid i`/`cpsie i` o
  con `BASEPRI`; las variables compartidas con una interrupción deben ser `volatile` o atómicas.

> [!example] Ejemplo resuelto 4: diagnosticar un *hard fault*
> Un Cortex-M4 cae en `HardFault_Handler`. El manejador mira el bit 2 de `lr` para saber si la pila era MSP o PSP, lee el marco apilado y obtiene el `pc` en el que falló (séptima palabra del marco: `r0`, `r1`, `r2`, `r3`, `r12`, `lr`, `pc`, `xPSR`). Con ese `pc`
> y `arm-none-eabi-addr2line -e firmware.elf 0x08001a3c` se llega a la línea de C. Los registros `CFSR` y `HFSR` del SCB dicen la causa (acceso no alineado, división entre cero si está activada su
> detección, acceso a memoria inválida en `MMFAR`/`BFAR`).

## 14. Herramientas y método

- Compilar en cruzado con `aarch64-linux-gnu-gcc` o `clang --target=aarch64-linux-gnu`, y ejecutar con `qemu-aarch64` (o un contenedor `--platform linux/arm64`); para Cortex-M, `arm-none-eabi-gcc` y
  `qemu-system-arm` o una placa real con OpenOCD.
- Ver el código: `objdump -d`, `gcc -O2 -S`, **Compiler Explorer**. Depurar con `gdb-multiarch` (`layout asm`, `info registers`, `x/4gx $sp`).
- Comprobar el mismo programa en x86-64 y en AArch64: las diferencias suelen ser comportamiento indefinido o suposiciones sobre el orden de memoria.

## 15. Comprobar con un programa

Compila con GCC en AArch64 (`-std=c23 -Wall -Wextra -Wpedantic -Werror`) y se ejecuta en un contenedor `arm64`: un bucle con `madd`, un mínimo con `csel`, la cuenta de bits a uno con NEON (`cnt` y
`addv`), una función no hoja que conserva `x19` y llama a un puntero a función, y el incremento con exclusivos; todo se compara con el mismo cálculo en C.

```c
#include <stdint.h>
#include <stdio.h>

long suma_cuadrados(long n);
long minimo(long a, long b);
uint64_t bits_a_uno(const uint8_t *p, uint64_t n); // n múltiplo de 16
long aplica_dos_veces(long (*f)(long), long x);   // no hoja: llama dos veces a f
void incrementa(long *p);                         // ldaxr/stlxr

__asm__(".text\n"
        ".globl suma_cuadrados\n"
        "suma_cuadrados:\n"
        "    mov  x1, #0\n"
        "    mov  x2, #1\n"
        "1:  cmp  x2, x0\n"
        "    b.gt 2f\n"
        "    madd x1, x2, x2, x1\n"
        "    add  x2, x2, #1\n"
        "    b    1b\n"
        "2:  mov  x0, x1\n"
        "    ret\n"
        ".globl minimo\n"
        "minimo:\n"
        "    cmp  x0, x1\n"
        "    csel x0, x0, x1, lt\n"
        "    ret\n"
        ".globl bits_a_uno\n"
        "bits_a_uno:\n"
        "    mov  x2, #0\n"
        "1:  cbz  x1, 2f\n"
        "    ld1  {v0.16b}, [x0], #16\n"
        "    cnt  v0.16b, v0.16b\n"
        "    addv b0, v0.16b\n" // como mucho 16 * 8 = 128: cabe en un byte
        "    umov w3, v0.b[0]\n"
        "    add  x2, x2, x3\n"
        "    sub  x1, x1, #16\n"
        "    b    1b\n"
        "2:  mov  x0, x2\n"
        "    ret\n"
        ".globl aplica_dos_veces\n"
        "aplica_dos_veces:\n"
        "    stp  x29, x30, [sp, #-32]!\n"
        "    mov  x29, sp\n"
        "    str  x19, [sp, #16]\n"
        "    mov  x19, x0\n"
        "    mov  x0, x1\n"
        "    blr  x19\n"
        "    blr  x19\n"
        "    ldr  x19, [sp, #16]\n"
        "    ldp  x29, x30, [sp], #32\n"
        "    ret\n"
        ".globl incrementa\n"
        "incrementa:\n"
        "1:  ldaxr x1, [x0]\n"
        "    add   x1, x1, #1\n"
        "    stlxr w2, x1, [x0]\n"
        "    cbnz  w2, 1b\n"
        "    ret\n");

static long siguiente(long x) { return 3 * x + 1; }

int main(void) {
    int fallos = 0;
    long s = 0;
    for (long i = 1; i <= 1000; i++) s += i * i;
    fallos += suma_cuadrados(1000) != s;
    fallos += minimo(-5, 3) != -5 || minimo(7, 2) != 2;

    uint8_t buf[64];
    uint64_t esperado = 0;
    for (int i = 0; i < 64; i++) {
        buf[i] = (uint8_t)(i * 37 + 11);
        esperado += (uint64_t)__builtin_popcount(buf[i]);
    }
    fallos += bits_a_uno(buf, 64) != esperado;
    fallos += aplica_dos_veces(siguiente, 2) != 22; // 2 → 7 → 22

    long c = 0;
    for (int i = 0; i < 1000; i++) incrementa(&c);
    fallos += c != 1000;

    printf("suma=%ld minimo=%ld bits=%llu dos_veces=%ld contador=%ld fallos=%d\n", suma_cuadrados(1000), minimo(-5, 3),
           (unsigned long long)bits_a_uno(buf, 64), aplica_dos_veces(siguiente, 2), c, fallos);
    return fallos != 0;
}
```

## 16. Errores típicos

- Olvidar que escribir `w` borra la mitad alta de `x`, o usar `w` donde hacía falta `x` (punteros truncados).
- Esperar que `add` cambie las banderas (es `adds`), o confundir las condiciones con signo (`lt`) y sin signo (`lo`); olvidar que C tras una resta es "sin préstamo".
- Intentar `add x0, x0, #0x12345` o un `and` con un inmediato no codificable; dejarle al ensamblador la elección con `mov` y revisar el error.
- No guardar `x30` en una función que llama a otra, o desalinear `sp` (debe ser múltiplo de 16).
- Usar `x18` o no conservar `x19`–`x28`, o los 64 bits bajos de `v8`–`v15`.
- Suponer el orden de memoria de x86: código con banderas `volatile` que funciona en un PC y falla en un servidor ARM.
- Poner accesos a memoria o llamadas entre `ldxr` y `stxr`; olvidar `isb` tras escribir código en memoria.
- En Cortex-M: compartir variables con una interrupción sin `volatile` ni secciones críticas, o hacer trabajo largo en un manejador.

## 17. Resumen

- Perfiles A, R, M; AArch64 (A64) y AArch32 (A32 y T32); Armv8.x y Armv9.
- 31 registros de 64 bits, `w` pone a cero la mitad alta, `xzr`, `sp` alineado a 16, `lr`; `v0`–`v31`.
- Instrucciones de 32 bits; inmediatos de 12 bits, patrones lógicos, `movz`/`movk`; operandos desplazados.
- Banderas solo con `s`; condiciones con y sin signo; `csel` y familia; `sdiv` no produce excepción.
- `ldr`/`str` con preíndice y postíndice, `ldp`/`stp`, `adrp` + `:lo12:`.
- AAPCS64: `x0`–`x7` y `v0`–`v7` por separado, `x19`–`x28` conservados, `x8`, `x16`–`x18`.
- Memoria débil y multicopia-atómica; `ldar`/`stlr`, `dmb`, exclusivos, LSE (`ldaddal`).
- NEON con disposiciones, SVE con predicados y longitud variable; PAC, BTI, MTE.
- Cortex-M: Thumb-2, AAPCS de 32 bits, marco de excepción de 32 o 104 bytes, `EXC_RETURN`, NVIC.

## Repaso: lo que debe quedarte dentro de un mes

1. Escribir en `w0` pone a cero los 32 bits altos de `x0`.
2. `lt` es con signo y `lo` sin signo; solo las instrucciones con `s` cambian las banderas.
3. Argumentos en `x0`–`x7` y `v0`–`v7`, por separado; `x19`–`x28` se conservan; `sp` múltiplo de 16.
4. ARM reordena: publica con `stlr` y consume con `ldar` (o con los órdenes de C11).
5. Un Cortex-M apila 8 palabras al entrar en una interrupción, y por eso el manejador puede ser una función C.

## Siguiente

`sys-concurrencia` (modelos de memoria y algoritmos concurrentes en profundidad), `sys-kernel-linux` y, para el lado embebido, los nodos de robótica sobre microcontroladores y [[rob-sensores-actuadores]].
