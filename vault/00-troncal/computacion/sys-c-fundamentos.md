---
id: sys-c-fundamentos
title: "C desde cero: tipos, representación de enteros y coma flotante, operadores, funciones y cadenas"
area: bajo-nivel
trunk_level: 3
prerequisites: [prog-python-fundamentos, prog-terminal-linux-git]
academic_sources:
  - "Kernighan, B. W.; Ritchie, D. M. The C Programming Language, 2ª ed. Prentice Hall, 1988."
  - "ISO/IEC 9899:2024 (C23), publicada el 31 de octubre de 2024; borrador público equivalente N3220. Para C17: ISO/IEC 9899:2018."
  - "Bastien, J. F.; Gustedt, J. N2412: Two's complement sign representation for C2x. ISO/IEC JTC1/SC22/WG14, 2019 (adoptada en C23)."
  - "Free Software Foundation. Using the GNU Compiler Collection: C Implementation-Defined Behavior, Integers implementation (gcc.gnu.org/onlinedocs/gcc)."
  - "Bryant, R. E.; O'Hallaron, D. R. Computer Systems: A Programmer's Perspective, 3ª ed. Pearson, 2016."
  - "Gustedt, J. Modern C, 3ª ed. Manning, 2025 (cubre C23; el manuscrito se distribuye con licencia CC BY-NC)."
hints:
  - "Concepto: C hace exactamente lo que dice el estándar y nada más. Para predecir una salida, sigue los tipos: promociones enteras (todo lo menor que int se convierte en int), conversiones aritméticas habituales (si se mezclan int y unsigned, gana unsigned), división que trunca hacia cero, aritmética sin signo módulo 2^n, y la tabla de precedencia (== va antes que &, + antes que <<)."
  - "Herramienta: compila con gcc -std=c17 -Wall -Wextra -g -fsanitize=address,undefined y ejecuta; los avisos de -Wall señalan casi todas las trampas de estos ejercicios (comparación con y sin signo, paréntesis, sizeof de un parámetro array). printf(\"%x\") y printf(\"%zu\", sizeof x) muestran la representación y los tamaños; gdb permite ver cada variable paso a paso."
  - "Documentación: Kernighan y Ritchie, capítulos 2 (tipos, operadores y expresiones), 3 (control de flujo) y 5 (punteros y arrays); cppreference.com/w/c (conversiones implícitas, precedencia de operadores, printf); página «Integers implementation» del manual de GCC; páginas de manual printf(3) y string(3)."
exercises:
  - id: division-entera-con-signo
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          printf("%d %d %d %d\n", -7 / 2, -7 % 2, 7 / -2, 7 % -2);
          return 0;
      }
      ```

      Respuesta: los cuatro números en orden, separados por `;`.
    answers: ["sha256:282b607afd27183c3f14bb6f23e85da07735cc0d8b94e879a808740a0c4f383d"]
  - id: tamanos-lp64
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          size_t total = sizeof(char) + sizeof(short) + sizeof(int) + sizeof(long)
                       + sizeof(double) + sizeof(void *);
          printf("%zu\n", total);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:eb1e33e8a81b697b75855af6bfcdbcbf7cbbde9f94962ceaec1ed8af21f5a50f"]
  - id: unsigned-char-modular
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          unsigned char c = 250;
          c += 10;
          printf("%u\n", c);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: comparacion-con-y-sin-signo
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux? (Compila sin errores; GCC avisa con `-Wextra`.)

      ```c
      #include <stdio.h>

      int main(void) {
          int a = -1;
          unsigned b = 1;
          printf("%d %d\n", a < b, a < (int)b);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:c339ed9e47b6b2640c714057eaf0902da6b31e55b805599aed8d7110a6539280"]
  - id: conversion-a-signed-char
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux? (La conversión a un tipo con signo de un valor fuera de rango está definida por la implementación; GCC la documenta como reducción módulo $2^N$.)

      ```c
      #include <stdio.h>

      int main(void) {
          int x = 200, y = -200;
          printf("%d %d\n", (signed char)x, (signed char)y);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:63e14d87a5ced285842e34c6fdd6c253db6a0e315a9d0207b6056daabeeab0d8"]
  - id: trucos-de-bits
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          unsigned x = 0xB6, n = 0;
          for (unsigned y = x; y != 0; y &= y - 1)
              n++;
          printf("%u %u %u\n", n, x & (x - 1), x ^ (x >> 1));
          return 0;
      }
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:c1cbdea07488e6ae30f8ae74c34811bd231770a40e1dd600a0b587f4035cbc85"]
  - id: sizeof-frente-a-strlen
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>
      #include <string.h>

      int main(void) {
          char s[] = "hola\0mundo";
          printf("%zu %zu\n", sizeof s, strlen(s));
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:58856c95c159ef2d43904e61eee4e57e3faf948c3794be4dbd1d0a50f7c21867"]
  - id: bucle-con-break-y-continue
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          int s = 0, i;
          for (i = 1; i <= 100; i++) {
              if (i % 3 == 0)
                  continue;
              s += i;
              if (s > 1000)
                  break;
          }
          printf("%d %d\n", i, s);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:52151e7954259e0748014110bf0fbffd7a3fcd08534d1fb5989a0c4dfc3af57e"]
  - id: switch-sin-break
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int f(int x) {
          int r = 0;
          switch (x) {
          case 1:
              r += 1;
          case 2:
              r += 10;
              break;
          case 3:
              r += 100;
          default:
              r += 1000;
          }
          return r;
      }

      int main(void) {
          printf("%d\n", f(1) + f(2) + f(3) + f(4));
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:b8dc2c143be8994682b08461f46487e05874e59dd9ab65cf973e3a3c67a763aa"]
  - id: precedencia-de-operadores
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux? (GCC avisa con `-Wall`: lee el aviso.)

      ```c
      #include <stdio.h>

      int main(void) {
          int pares = 0;
          for (int i = 0; i < 10; i++)
              if (i & 1 == 0)
                  pares++;
          printf("%d %d %d\n", pares, 2 + 3 << 1, 1 << 2 + 1);
          return 0;
      }
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:c536e4e511b477feb7f894a1cab60820834962153da86346e9979cca9eeab397"]
  - id: suma-en-coma-flotante
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          float f = 0.0f;
          for (int i = 0; i < 10; i++)
              f += 0.1f;
          printf("%d %.9g\n", f == 1.0f, f);
          return 0;
      }
      ```

      Respuesta: lo impreso, con los dos valores separados por `;`.
    answers: ["sha256:6fdc5eecda9ed265bd5fd2fa2c4da2b9a624f81cfafa538b73c6d47769da12ba"]
  - id: llamadas-recursivas
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      static long llamadas = 0;

      long fib(int n) {
          llamadas++;
          return n < 2 ? n : fib(n - 1) + fib(n - 2);
      }

      int main(void) {
          long v = fib(20);
          printf("%ld %ld\n", v, llamadas);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:0d5c220f0c145a46e4227bc54a688746ce811a2131368ec967cf9cef0cdc2546"]
  - id: potencia-modulo-2-32
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdint.h>
      #include <stdio.h>

      int main(void) {
          uint32_t p = 1;
          for (int k = 0; k < 40; k++)
              p *= 3;
          printf("%u\n", (unsigned)p);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:02bd2a876c9f5604f7453c04f8f61a1bc235118369f8bcdf44e7232eedd12207"]
  - id: array-como-parametro
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      void f(int v[10]) {
          printf("%zu\n", sizeof v);
      }

      int main(void) {
          int a[10] = {0};
          printf("%zu ", sizeof a);
          f(a);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:269bd38f84f6f8ba653115652b231525b98519ab5c991a8532a3f73ac8239c4d"]
  - id: cifrado-cesar
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          char s[] = "Exodus, 2026!";
          for (char *p = s; *p != '\0'; p++) {
              if (*p >= 'a' && *p <= 'z')
                  *p = 'a' + (*p - 'a' + 3) % 26;
              else if (*p >= 'A' && *p <= 'Z')
                  *p = 'A' + (*p - 'A' + 3) % 26;
          }
          puts(s);
          return 0;
      }
      ```

      Respuesta: la línea impresa, tal cual.
    answers: ["sha256:1e7daf4b2671e73ebee0d4e95028c67ea3b2a6a3e4b8200e8eb3018d472df577"]
  - id: variable-static-local
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux? (El orden en que se evalúan los dos operandos de `*` no está especificado: ¿afecta al resultado?)

      ```c
      #include <stdio.h>

      int siguiente(void) {
          static int n = 0;
          return ++n;
      }

      int main(void) {
          int s = 0;
          for (int i = 0; i < 5; i++)
              s += siguiente() * siguiente();
          printf("%d\n", s);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:2397346b45823e070f6fc72ac94c0a999d234c472479f0e26b30cdf5942db854"]
  - id: valor-de-retorno-de-printf
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux? Solo interesa la **segunda** línea: `printf` devuelve el número de caracteres que ha escrito.

      ```c
      #include <stdio.h>

      int main(void) {
          int n = printf("[%5.2f|%-4d|%04x]\n", 3.14159, 42, 255);
          printf("%d\n", n);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
---

# C desde cero: tipos, representación de enteros y coma flotante, operadores, funciones y cadenas

Python esconde la máquina: sus enteros crecen sin límite y sus listas se redimensionan solas. C la muestra. Un `int` ocupa 4
bytes y desborda; una cadena es un array de bytes terminado en cero; un array no sabe su longitud. Por eso C sigue siendo el
lenguaje de los núcleos de sistema operativo, los microcontroladores, los intérpretes (el propio Python está escrito en C) y
las bibliotecas criptográficas, y por eso conocerlo es imprescindible para entender cómo funciona un ordenador y dónde nacen
la mayoría de las vulnerabilidades. Este nodo enseña el lenguaje base con precisión: qué valores puede tener cada tipo, cómo
se representan en bits y qué reglas exactas sigue cada operación. El siguiente, [[sys-c-memoria]], se ocupa de punteros y
memoria.

## Objetivos

Al terminar sabrás:

1. Compilar y ejecutar programas C con GCC, con avisos y desinfectantes (*sanitizers*) activados.
2. Dar el rango de cada tipo entero en x86-64 Linux y convertir entre decimal, binario, hexadecimal y **complemento a dos**.
3. Aplicar las **promociones enteras** y las **conversiones aritméticas habituales**, y predecir el resultado de mezclar
   tipos con y sin signo.
4. Explicar por qué `0.1f` sumado diez veces no da `1.0f` y comparar números en coma flotante correctamente.
5. Usar operadores de bits (máscaras, desplazamientos) y conocer la tabla de precedencia y sus trampas.
6. Escribir funciones, bucles, `switch`, arrays y cadenas de caracteres, y formatear salida con `printf`.

## Qué debes dominar antes

[[prog-python-fundamentos]] (variables, bucles, funciones) y [[prog-terminal-linux-git]] (compilar y ejecutar desde la
terminal). Las bases de numeración están en [[mat-numeros-naturales]] y la aritmética modular, en [[mat-matematica-discreta]].

> [!question] Test de entrada
> 1. Escribe $45$ en binario y en hexadecimal.
> 2. ¿Cuánto vale $2^{10}$? ¿Y $2^{32}$, aproximadamente?
> 3. ¿Cuál es el resto de $260$ entre $256$?
>
> Respuestas: $101101_2 = \texttt{0x2D}$; $1024$ y unos $4{,}29\cdot10^9$; $4$.

## 1. Para qué sirve

- **Sistemas**: Linux, los controladores, las bases de datos (SQLite, PostgreSQL) y los intérpretes están escritos en C.
- **Hardware**: el firmware de un microcontrolador se escribe en C, manipulando bits de registros ([[rob-microcontroladores]]).
- **Seguridad**: desbordamientos de búfer, errores de conversión con y sin signo y lecturas fuera de límites son la causa de
  buena parte de las vulnerabilidades graves; para auditarlas hay que conocer las reglas exactas de C ([[sec-fundamentos]]).
- **Rendimiento**: las partes rápidas de NumPy o de PyTorch son C (o C++); C es la «lengua franca» con la que hablan entre sí
  los demás lenguajes.

## 2. Compilar y ejecutar

```c
#include <stdio.h>

int main(void) {
    printf("Hola, %s: %d + %d = %d\n", "mundo", 2, 3, 2 + 3);
    return 0;
}
```

```text
$ gcc -std=c17 -Wall -Wextra -g -o hola hola.c
$ ./hola
Hola, mundo: 2 + 3 = 5
```

- `#include <stdio.h>` inserta las **declaraciones** de la biblioteca de entrada y salida. El programa empieza en `main`; su
  valor de retorno es el **código de salida** (`0` = éxito; en la terminal, `echo $?`).
- `-Wall -Wextra` activan avisos: **trátalos como errores**. `-g` añade información de depuración para `gdb`.
- Durante el desarrollo, añade `-fsanitize=address,undefined`: el programa se detiene con un informe en cuanto lee fuera de
  un array o comete un comportamiento indefinido. Para producción, `-O2` (optimiza).

C es **compilado** y de **tipado estático**: cada variable tiene un tipo fijo, declarado, que determina cuántos bytes ocupa y
qué significan.

## 3. Enteros y su representación

En x86-64 Linux (modelo **LP64**: `long` y punteros de 64 bits):

| Tipo | Bytes | Rango con signo | Rango sin signo |
|---|:---:|---|---|
| `char` / `signed char` / `unsigned char` | 1 | $-128 \dots 127$ | $0 \dots 255$ |
| `short` | 2 | $-32\,768 \dots 32\,767$ | $0 \dots 65\,535$ |
| `int` | 4 | $-2^{31} \dots 2^{31} - 1$ | $0 \dots 2^{32} - 1$ |
| `long`, `long long` | 8 | $-2^{63} \dots 2^{63} - 1$ | $0 \dots 2^{64} - 1$ |

El estándar solo fija mínimos (por ejemplo, `int` de al menos 16 bits); cuando el tamaño importa se usan los tipos de
`<stdint.h>`: `int8_t`, `uint32_t`, `int64_t`… El tamaño de un tipo lo da `sizeof`, de tipo `size_t` (se imprime con `%zu`).
Si `char` tiene signo o no depende de la plataforma (en x86-64 Linux, sí): para bytes, usa `unsigned char` o `uint8_t`.

**Sin signo.** Un `unsigned` de $n$ bits $b_{n-1}\dots b_0$ vale $\sum_i b_i 2^i$, y su aritmética es **módulo $2^n$**, definida
por el estándar: `UINT_MAX + 1 == 0`.

**Complemento a dos.** Un entero con signo de $n$ bits vale

$$
x = -b_{n-1}\,2^{n-1} + \sum_{i=0}^{n-2} b_i\,2^i ,
$$

es decir, el bit más alto «pesa» $-2^{n-1}$. Así el rango es $-2^{n-1}\dots 2^{n-1} - 1$, hay un único cero y **sumar es la
misma operación de bits con y sin signo** (por eso el hardware la usa). Para negar: invertir todos los bits y sumar $1$
($-x = \lnot x + 1$). GCC solo admite complemento a dos, y C23 lo exige a todos los compiladores (propuesta N2412).

**Ejemplo resuelto 1.** $-56$ en 8 bits: $56 = 0011\,1000_2$; invertir: $1100\,0111$; sumar 1: $1100\,1000_2 = \texttt{0xC8}$.
Leído sin signo, $\texttt{0xC8} = 200$, y en efecto $200 = -56 + 256$: **el mismo patrón de bits vale $x$ con signo y
$x + 2^n$ sin signo**. Comprobación con la fórmula: $-128 + 64 + 8 = -56$. $\checkmark$

**Desbordamiento.** Si una operación con signo da un resultado fuera del rango, el comportamiento es **indefinido** (sección 8):
el compilador puede suponer que nunca ocurre. Con `unsigned`, en cambio, el resultado da la vuelta módulo $2^n$. Por eso los
contadores y las sumas de control se hacen con tipos sin signo.

## 4. Conversiones implícitas: la fuente de muchos errores

Al evaluar una expresión, C convierte los operandos según dos reglas:

1. **Promociones enteras**: todo tipo menor que `int` (`char`, `short`, `_Bool`) se convierte en `int` antes de operar. Por eso
   `unsigned char c = 250; c += 10;` calcula $260$ como `int` y, al guardar en `c`, lo reduce módulo $256$: $4$.
2. **Conversiones aritméticas habituales**: si los operandos tienen tipos distintos, se pasan a un tipo común. Con enteros del
   mismo tamaño, **gana el sin signo**: en `-1 < 1u`, el $-1$ se convierte en `unsigned` y vale $2^{32} - 1$, así que la
   comparación es **falsa**. GCC avisa con `-Wextra` (`-Wsign-compare`).

Convertir un valor a un tipo **sin signo** siempre está definido (módulo $2^n$). Convertir a un tipo **con signo** un valor que
no cabe está **definido por la implementación**: GCC documenta que lo reduce módulo $2^n$, de modo que `(signed char)200` vale
$-56$. Convertir de coma flotante a entero **trunca** hacia cero, y si el valor no cabe es indefinido.

**División entera.** Desde C99, `/` **trunca hacia cero** y `%` cumple `a == (a / b) * b + a % b`, así que el resto tiene el
signo del dividendo: `-7 / 2 == -3`, `-7 % 2 == -1`. (En Python, `-7 // 2 == -4` y `-7 % 2 == 1`: cuidado al traducir.)
Dividir entre cero es indefinido.

## 5. Coma flotante

`float` y `double` siguen el estándar **IEEE 754**: un número se guarda como signo, exponente y mantisa (binary32: 24 bits de
precisión; binary64: 53). Solo se representan exactamente los números de la forma $m\cdot 2^e$. **$0{,}1$ no lo es**: en binario
es periódico, $0{,}0\overline{0011}_2$, y se guarda redondeado. Cada suma redondea otra vez, así que sumar diez veces
`0.1f` da `1.00000012` y no `1`.

- `FLT_DIG` vale 6 y `DBL_DIG` 15 (`<float.h>`): son las cifras decimales que sobreviven garantizadas a un viaje de ida y vuelta.
  Usa `double` salvo que la memoria mande.
- **Nunca compares con `==`** el resultado de un cálculo: usa una tolerancia, `fabs(a - b) <= 1e-9 * fmax(fabs(a), fabs(b))`.
- Hay valores especiales: `inf` (desbordamiento, `1.0/0.0`) y `nan` («no es un número», `0.0/0.0`), que no es igual ni a sí
  mismo.
- Para dinero se usan **enteros** de céntimos, no coma flotante.

## 6. Operadores

Aritméticos (`+ - * / %`), relacionales (`== != < <= > >=`, dan `int` 0 o 1), lógicos (`&& || !`, con **cortocircuito**: en
`p != 0 && *p > 3` la segunda parte no se evalúa si la primera es falsa), de asignación compuesta (`+=`, `<<=`…), incremento
(`++`, `--`) y **de bits**:

| Operación | Expresión | Uso |
|---|---|---|
| leer el bit $k$ | `(x >> k) & 1` | consultar un indicador |
| poner a 1 el bit $k$ | `x \| (1u << k)` | activar una opción |
| poner a 0 el bit $k$ | `x & ~(1u << k)` | desactivarla |
| invertir el bit $k$ | `x ^ (1u << k)` | conmutar |
| quitar el 1 más bajo | `x & (x - 1)` | contar bits a 1; ver si `x` es potencia de 2 |
| aislar el 1 más bajo | `x & -x` | árboles de Fenwick |

Desplazar a la izquierda $k$ posiciones multiplica por $2^k$; a la derecha, en `unsigned`, divide entre $2^k$ truncando.
Desplazar un número de posiciones **mayor o igual que el ancho** del tipo, o desplazar a la izquierda un valor negativo, es
indefinido.

**Precedencia.** De mayor a menor (lo esencial): postfijos `() [] ++ --`; unarios `! ~ - * & sizeof` y conversiones;
`* / %`; `+ -`; `<< >>`; `< <= > >=`; `== !=`; `&`; `^`; `|`; `&&`; `||`; `?:`; asignaciones; coma. Dos trampas célebres:

- `x & 1 == 0` es `x & (1 == 0)`, es decir `x & 0`: **siempre 0**. Se escribe `(x & 1) == 0`.
- `1 << 2 + 1` es `1 << 3 = 8`, porque `+` va antes que `<<`.

Ante la duda, **paréntesis**. Y nunca modifiques una variable dos veces en la misma expresión (`i = i++ + 1` es indefinido).

**Ejemplo resuelto 2: potencias de dos y bits.**

```c
#include <assert.h>
#include <stdint.h>

static int bits_a_uno(uint32_t x) {
    int n = 0;
    for (; x != 0; x &= x - 1)  /* cada vuelta borra el 1 más bajo */
        n++;
    return n;
}

static int es_potencia_de_2(uint32_t x) {
    return x != 0 && (x & (x - 1)) == 0;
}

int main(void) {
    assert(bits_a_uno(0xB6) == 5);          /* 1011 0110 */
    assert(bits_a_uno(0xFFFFFFFFu) == 32);
    assert(es_potencia_de_2(1024) && !es_potencia_de_2(1023) && !es_potencia_de_2(0));
    uint8_t permisos = 0;
    permisos |= 1u << 2;                     /* activa el bit 2 */
    permisos |= 1u << 0;
    permisos &= (uint8_t)~(1u << 0);         /* lo desactiva */
    assert(permisos == 4);
    return 0;
}
```

## 7. Control de flujo y funciones

`if`/`else`, `while`, `do { } while`, `for (inicio; condición; paso)`, `break` (sale del bucle) y `continue` (pasa a la
siguiente vuelta) funcionan como en Python, con llaves en lugar de sangría. En C una condición es **cualquier valor**: cero es
falso y todo lo demás, verdadero.

`switch` salta a la etiqueta `case` que coincide y **sigue ejecutando** las siguientes hasta un `break` (*fall-through*).
Olvidar un `break` es un error clásico; cuando se hace a propósito, se indica con un comentario o con `[[fallthrough]];` (C23).

**Funciones.** Se declaran con su tipo de retorno y el de cada parámetro. Los argumentos se pasan **por valor**: la función
recibe una copia, y modificarla no cambia la variable de quien llama (para eso hacen falta punteros, en [[sys-c-memoria]]).
Una función debe estar **declarada antes de usarse**: el prototipo (`int suma(int a, int b);`) suele ir en un archivo de
cabecera `.h`, y la definición en un `.c`. El enlazador une los distintos `.c` compilados por separado.

- Una variable **local** existe solo mientras se ejecuta su bloque y su valor inicial es **indeterminado** si no se inicializa.
- Una variable `static` dentro de una función se inicializa **una vez** y conserva su valor entre llamadas.
- Una función o variable global `static` solo es visible en su archivo (encapsulación a nivel de módulo).

**Ejemplo resuelto 3: el algoritmo de Luhn.** Los números de tarjeta y muchos identificadores llevan un dígito de control: desde
la derecha, se duplica uno de cada dos dígitos (restando 9 si pasa de 9) y la suma total debe ser múltiplo de 10. Detecta todo
error en un solo dígito y casi todas las transposiciones de dos dígitos contiguos.

```c
#include <assert.h>
#include <string.h>

static int luhn_valido(const char *s) {
    int suma = 0, doblar = 0;
    for (size_t i = strlen(s); i-- > 0;) {   /* de derecha a izquierda; i es size_t */
        if (s[i] < '0' || s[i] > '9')
            return 0;
        int d = s[i] - '0';                   /* carácter a dígito */
        if (doblar && (d *= 2) > 9)
            d -= 9;
        suma += d;
        doblar = !doblar;
    }
    return suma % 10 == 0;
}

int main(void) {
    assert(luhn_valido("79927398713"));
    assert(!luhn_valido("79927398710"));
    assert(!luhn_valido("79927398731"));     /* transposición de dos dígitos: detectada */
    return 0;
}
```

Fíjate en el bucle `for (size_t i = n; i-- > 0;)`: como `size_t` no tiene signo, el habitual `for (i = n - 1; i >= 0; i--)`
**no termina nunca** (`i >= 0` siempre es cierto y `0 - 1` da la vuelta a $2^{64} - 1$).

## 8. Comportamiento indefinido (primera visita)

El estándar llama **comportamiento indefinido** (UB) a las situaciones para las que no impone ningún requisito: el programa
puede hacer cualquier cosa, y el optimizador **supone que nunca ocurren**. Las más frecuentes en este nodo: desbordar un entero
con signo, dividir entre cero, desplazar demasiados bits, leer una variable local sin inicializar, salirse de un array y
modificar dos veces una variable en una expresión. Distínguelo de lo **definido por la implementación** (documentado por el
compilador, como el tamaño de `int` o la conversión a `signed char`) y de lo **no especificado** (varias opciones válidas, como
el orden en que se evalúan los operandos de `f() * g()`). [[sys-c-memoria]] lo estudia a fondo.

## 9. Arrays y cadenas

Un array es una secuencia **contigua** de elementos del mismo tipo, de tamaño fijo: `int v[10];` reserva $10\cdot 4 = 40$ bytes.
Los índices van de $0$ a $9$ y **C no comprueba los límites**: `v[10]` es comportamiento indefinido (y una vulnerabilidad si
se escribe). `sizeof v` da $40$, pero al pasar `v` a una función se pasa solo la **dirección de su primer elemento** (el array
*decae* a puntero) y dentro `sizeof` da el tamaño de un puntero, $8$: **toda función que recibe un array necesita también su
longitud**.

Una **cadena** es un array de `char` terminado en el byte nulo `'\0'`. `"hola"` ocupa **5** bytes. `strlen` cuenta caracteres
hasta el primer `'\0'` (sin incluirlo); `sizeof` de un array de caracteres cuenta todos sus bytes. Un `char` es un entero
pequeño: `'a' + 1 == 'b'` y `c - '0'` convierte un dígito en su valor.

`<string.h>` ofrece `strlen`, `strcmp` (compara: 0 si son iguales), `memcpy`, `memset`… Las funciones que copian sin saber el
tamaño del destino (`strcpy`, `strcat`, `gets`, este último eliminado del estándar) son la causa histórica de los
desbordamientos de búfer: usa `snprintf(destino, sizeof destino, "%s", origen)`, que nunca escribe más de lo que cabe. En el
ejemplo siguiente GCC incluso avisa al compilar (`-Wformat-truncation`) de que la cadena no cabe.

```c
#include <assert.h>
#include <stdio.h>
#include <string.h>

int main(void) {
    char nombre[8];
    int n = snprintf(nombre, sizeof nombre, "%s", "Bartolome");   /* 9 caracteres: no caben */
    assert(n == 9);                       /* devuelve lo que habría escrito */
    assert(strcmp(nombre, "Bartolo") == 0);  /* 7 caracteres + '\0': truncado, sin desbordar */
    assert(strlen(nombre) == 7 && sizeof nombre == 8);
    return 0;
}
```

## 10. Entrada y salida con formato

`printf` interpreta su primera cadena: `%d` (`int`), `%u` (`unsigned`), `%ld` (`long`), `%zu` (`size_t`), `%x` (hexadecimal),
`%c` (carácter), `%s` (cadena), `%f`, `%e`, `%g` (coma flotante), `%p` (puntero), `%%` (el signo `%`). Entre `%` y la letra
van el **ancho** y la **precisión**: `%5.2f` usa al menos 5 caracteres con 2 decimales; `%-4d` alinea a la izquierda; `%04x`
rellena con ceros. **El tipo del argumento debe coincidir con el especificador** (si no, es indefinido; `-Wall` lo detecta).
`printf` devuelve el número de caracteres escritos.

Para leer, `scanf("%d", &x)` devuelve **cuántos valores leyó**: compruébalo siempre (`if (scanf("%d", &x) != 1) ...`). Para
líneas completas, `fgets(buf, sizeof buf, stdin)`.

## 11. Errores típicos

- Comparar con y sin signo (`-1 < 1u` es falso) y bucles descendentes con `size_t`.
- Suponer que `/` y `%` redondean como en Python con negativos.
- Olvidar el `'\0'` al dimensionar una cadena, o usar `strcpy` sin comprobar el tamaño.
- Usar `sizeof` sobre un parámetro array esperando su longitud.
- Comparar coma flotante con `==`; usar `float` para dinero.
- Olvidar `break` en un `switch`; escribir `x & 1 == 0`.
- Desbordar un `int` (indefinido) al multiplicar valores grandes: usa `int64_t` o `unsigned`.
- Ignorar los avisos del compilador y no probar con `-fsanitize=address,undefined`.

## 12. Resumen

- LP64: `int` 4 bytes, `long` y punteros 8; tipos exactos en `<stdint.h>`; `sizeof` en `size_t`.
- Complemento a dos: el bit alto pesa $-2^{n-1}$; `-x = ~x + 1`; con signo y sin signo difieren en $2^n$.
- Sin signo: módulo $2^n$ (definido). Con signo: el desbordamiento es indefinido.
- Promociones a `int`; mezcla con y sin signo del mismo tamaño $\Rightarrow$ sin signo.
- División truncada hacia cero; el resto lleva el signo del dividendo.
- IEEE 754: $0{,}1$ no es exacto; tolerancias, nunca `==`.
- Precedencia: `==` antes que `&`; `+` antes que `<<`. Paréntesis.
- Cadenas terminadas en `'\0'`; los arrays decaen a puntero y no conocen su longitud.

## Repaso: lo que debe quedarte dentro de un mes

1. El patrón `0xC8` vale $200$ sin signo y $-56$ con signo: difieren en $2^8$.
2. `-1 < 1u` es falso por las conversiones aritméticas habituales.
3. `-7 / 2 == -3` y `-7 % 2 == -1` en C.
4. `x & (x - 1)` borra el 1 más bajo; `x & 1 == 0` está mal escrito.
5. `"hola"` ocupa 5 bytes; `sizeof` de un parámetro array es el de un puntero.

## Siguiente

[[sys-c-memoria]]: punteros, estructuras y su disposición en memoria, memoria dinámica y comportamiento indefinido a fondo.
