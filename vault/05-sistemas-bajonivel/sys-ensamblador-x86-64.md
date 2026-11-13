---
id: sys-ensamblador-x86-64
title: "Ensamblador x86-64: registros, direccionamiento, instrucciones, pila, convención de llamada y lectura de código compilado"
area: bajo-nivel
trunk_level: 10
prerequisites: [sys-c-memoria, ing-arquitectura-computadores]
academic_sources:
  - "Intel Corporation. Intel 64 and IA-32 Architectures Software Developer's Manual, Vols. 1–2."
  - "Matz, M.; Hubička, J.; Jaeger, A.; Mitchell, M. System V Application Binary Interface: AMD64 Architecture Processor Supplement."
  - "Bryant, R. E.; O'Hallaron, D. R. Computer Systems: A Programmer's Perspective, 3ª ed. Pearson, 2016."
  - "Fog, A. Optimizing Subroutines in Assembly Language: An Optimization Guide for x86 Platforms. Technical University of Denmark."
ctf_flag: "sha256:70124727f3a048f2a8b7ceb64a45e7d86c712b9a03b7f0ca8a1d028a3cfdd4e8"
hints:
  - "(a) Traduce el bucle a C línea a línea: rdi es el puntero, rsi la longitud, rcx el índice y rax el acumulador. Todo es aritmética módulo 2⁶⁴. (b) Antes de ejecutar h(90), cuenta cuántas llamadas haría: escribe la recurrencia que implementa y calcúlala de forma iterativa."
  - "(a) Ensambla el listado tal cual con gcc -c reto.s (sintaxis Intel gracias a la directiva) y llámalo desde un main en C, o depura paso a paso con gdb: layout asm, stepi, info registers. objdump -d -M intel reto.o muestra la codificación. (b) En C, uint64_t hace la aritmética módulo 2⁶⁴ por ti; en Python, aplica & ((1 << 64) − 1) en cada paso."
  - "Intel SDM Vol. 2: entradas de IMUL (forma de dos operandos), ROL, LEA, MOVZX y MOVABS (MOV con inmediato de 64 bits). System V AMD64 ABI, sección de la convención de llamada (registros de argumentos, registros preservados por el llamado y alineación de la pila a 16 bytes). Bryant & O'Hallaron, capítulo 3 (procedimientos y recursión)."
exercises:
  - id: escritura-parcial
    tier: 1
    prompt: |
      Partiendo de `mov rax, -1`, ¿cuánto vale `rax` tras `mov eax, 5`? ¿Y si en su lugar se ejecuta `mov al, 5`? Respuesta: `valor1;valor2`, el segundo en hexadecimal con prefijo `0x` y minúsculas.
    answers: ["sha256:65aff7a32a638f1300203574981ba81197d9e179138bc4b7eb805922f442c84c"]
  - id: lea-como-aritmetica
    tier: 1
    prompt: |
      Con `rdi = 7`, ¿cuánto vale `rax` tras `lea rax, [rdi + rdi*4]` y `lea rax, [rax*2 + 3]`? Respuesta: un entero.
    answers: ["sha256:96061e92f58e4bdcdee73df36183fe3ac64747c81c26f6c83aada8d2aabb1864"]
  - id: saltos-con-y-sin-signo
    tier: 1
    prompt: |
      Esta función recibe `rdi = -1` y `rsi = 1`. ¿Qué devuelve?
      ```
          xor eax, eax
          cmp rdi, rsi
          jae 1f
          add eax, 2      ; solo si rdi < rsi sin signo
      1:  cmp rdi, rsi
          jge 2f
          add eax, 1      ; solo si rdi < rsi con signo
      2:  ret
      ```
      Respuesta: un entero.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: direccion-de-un-elemento
    tier: 1
    prompt: |
      Un array de `int32_t` empieza en `0x1000` (en `rdi`) y el índice está en `rsi = 5`. ¿Qué dirección calcula `lea rax, [rdi + rsi*4]`? Respuesta: en hexadecimal con prefijo `0x`.
    answers: ["sha256:6039b10de95cce928e39fff5207220507f46a632c6413f8d46a942b592cb7025"]
  - id: alineacion-de-la-pila
    tier: 1
    prompt: |
      Al entrar en una función, `rsp \equiv 8 \pmod{16}`. La función hace `push rbp`, `push rbx` y `sub rsp, 24`. ¿Cuántos bytes ha bajado `rsp` y queda alineada a 16 para hacer un `call`? Respuesta: `bytes;si` o `bytes;no`.
    answers: ["sha256:921bf076f70a5343988e0101197e3c22495eb87239766ff2681ad200653806ae"]
  - id: imul-modulo-2-64
    tier: 2
    prompt: |
      ¿Cuánto vale `rax` tras `imul rax, rsi` con `rax = 0x123456789abcdef0` y `rsi = 0x10` (forma de dos operandos, se quedan los 64 bits bajos)? Respuesta: en hexadecimal con prefijo `0x`.
    answers: ["sha256:a03dba1da1759cfdbc5dcbd1bd44ea352779f795804b8e21d71cf6ed0769637c"]
  - id: sar-frente-a-shr
    tier: 2
    prompt: |
      Con `rax = -64`, ¿cuánto vale tras `sar rax, 3`? ¿Y tras `shr rax, 3`? Respuesta: `sar;shr`, ambos en hexadecimal con prefijo `0x`.
    answers: ["sha256:22561dcc8f45dd97ef2db4420bf9c9cd6a96531003c23314c3e756eafdd1b7e9"]
  - id: division-por-constante
    tier: 2
    prompt: |
      El compilador divide entre 10 sin `div`: `mul` por `0xCCCCCCCCCCCCCCCD` (parte alta en `rdx`) y `shr rdx, 3`. ¿Qué devuelve para `x = 12345678901234567890`? Respuesta: un entero.
    answers: ["sha256:22085aa929bcd7af4b23d9d9c046a1d4fde8be51f79d91392efafef96574ab01"]
  - id: rotacion
    tier: 2
    prompt: |
      ¿Cuánto vale `rax` tras `rol rax, 13` con `rax = 0x0123456789abcdef`? Respuesta: en hexadecimal con prefijo `0x`.
    answers: ["sha256:8062be58623769e288d450e39e1867cb8a9c5adf7192e3402d69b194ef98787b"]
  - id: movimiento-condicional
    tier: 2
    prompt: |
      Con `rdi = -5` y `rsi = 3`, la secuencia `mov rax, rdi; cmp rdi, rsi; cmovl rax, rsi` calcula un máximo. ¿Qué devuelve? ¿Y si se usa `cmovb` en lugar de `cmovl`? Interpreta ambos resultados como enteros con signo. Respuesta: `cmovl;cmovb`.
    answers: ["sha256:75c58b29ecf6ca7045586ae703cd048f05c13b970012daf3318bfaa5ba8afcb3"]
  - id: contar-bits
    tier: 2
    prompt: |
      ¿Qué devuelve este bucle para `rdi = 0xF0F0F0F0F0F0F0F0`?
      ```
          xor eax, eax
          test rdi, rdi
          je fin
      bucle:
          lea rdx, [rdi - 1]
          and rdi, rdx
          inc rax
          test rdi, rdi
          jne bucle
      fin:
          ret
      ```
      Respuesta: un entero.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: funcion-del-reto
    tier: 3
    prompt: |
      Con la función `f` del reto (al final del nodo), calcula `f("Exodus", 6)`. Valor de control: `f("abc", 3) = 0x0b2db11974332391`. Respuesta: en hexadecimal con prefijo `0x`, sin ceros a la izquierda.
    answers: ["sha256:7bc2998819f36609a7d3c6683168dd01ef0671c2c9adaff902b52feb8e0109e5"]
  - id: recursion-en-ensamblador
    tier: 3
    prompt: |
      Con la función `h` del reto, ¿cuánto vale `h(20)`? Valor de control: `h(10) = 15216`. Respuesta: un entero.
    answers: ["sha256:5ca7260ea1c3b755556dd9cf72adc50ed3e09cc907bef3e82de01ef7268ee140"]
  - id: coste-de-la-recursion
    tier: 3
    prompt: |
      ¿Cuántas veces se llama a `h` (contando la llamada inicial) al calcular `h(20)`? Respuesta: un entero.
    answers: ["sha256:ca8760cb35d2a66f62fd642cdd708f7d4970d5e3c0512ce078bd60cf8f88d946"]
  - id: argumentos-en-la-pila
    tier: 3
    prompt: |
      En la ABI System V AMD64, los argumentos enteros 7.º y siguientes van en la pila. Tras el prólogo `push rbp; mov rbp, rsp`, el 7.º está en `[rbp + 16]`. ¿En qué desplazamiento respecto a `rbp` está el 8.º? Respuesta: un entero.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: division-entre-3
    tier: 3
    prompt: |
      La división sin signo entre 3 se compila como `mul` por `0xAAAAAAAAAAAAAAAB` y `shr rdx, 1`. ¿Qué devuelve para `x = 2^{64} - 1`? Respuesta: un entero.
    answers: ["sha256:9894d012e2ee60ec005b256c1dbea589184abdca50b22ff507850a287f69300c"]
---

# Ensamblador x86-64: registros, direccionamiento, instrucciones, pila, convención de llamada y lectura de código compilado

El ensamblador es el contrato real entre el software y el procesador. Leerlo con soltura es imprescindible para depurar código optimizado, analizar
binarios sin fuentes, entender el rendimiento y razonar sobre las vulnerabilidades de [[sec-explotacion-binaria]]. Este nodo cubre la arquitectura AMD64
tal como la ve un programa de usuario en Linux, con la sintaxis Intel (`instr destino, origen`) de los manuales y de `objdump -M intel`. La sintaxis AT&T
de GNU invierte el orden de los operandos y añade sufijos de tamaño y prefijos `%` y `$`.

## Objetivos

Al terminar sabrás:

1. Usar los registros de 64, 32, 16 y 8 bits, la regla de escritura parcial y los flags.
2. Calcular direcciones con base, índice, escala y desplazamiento, y usar `lea` como aritmética.
3. Reconocer las instrucciones habituales, distinguir operaciones con signo y sin signo, y razonar módulo $2^{64}$.
4. Manejar la pila, el marco y la convención de llamada System V AMD64 (argumentos, valor de retorno, registros preservados, alineación).
5. Traducir C a ensamblador y viceversa: bucles, divisiones por constante, movimientos condicionales y recursión.
6. Ensamblar, enlazar con C y depurar código propio.

## Qué debes dominar antes

[[sys-c-memoria]] (punteros, pila y montón, representación de enteros) e [[ing-arquitectura-computadores]] (registros, memoria, ciclo de instrucción).

> [!question] Test de entrada
> 1. ¿Cuánto vale `-1` como entero de 64 bits sin signo, en hexadecimal?
> 2. ¿Cuántos bytes ocupa un `int64_t`?
> 3. ¿En qué sentido crece la pila en x86?
>
> Respuestas: `0xffffffffffffffff`; 8; hacia direcciones bajas.

## 1. Para qué sirve

- **Depuración**: cuando un fallo solo aparece con optimizaciones, o en un núcleo sin símbolos, la verdad está en el desensamblado.
- **Rendimiento**: ver qué genera el compilador (vectorización, divisiones convertidas en multiplicaciones, saltos evitados).
- **Seguridad**: *reversing*, análisis de *malware*, auditoría de binarios y comprensión de los errores de memoria ([[sec-explotacion-binaria]]).
- **Sistemas**: arranque, cambios de contexto, llamadas al sistema y código de núcleo tienen partes que solo se escriben en ensamblador.

## 2. Registros y flags

| 64 bits | 32 | 16 | 8 | Papel en System V |
|---|---|---|---|---|
| `rax` | `eax` | `ax` | `al` | valor de retorno |
| `rdi`, `rsi`, `rdx`, `rcx`, `r8`, `r9` | `edi`… | `di`… | `dil`… | argumentos 1 a 6 |
| `rbx`, `rbp`, `r12`–`r15` | | | | preservados por el llamado |
| `r10`, `r11` | | | | temporales |
| `rsp` | | | | puntero de pila |
| `rip` | | | | contador de programa |

**Regla de escritura parcial.** Escribir un registro de 32 bits **pone a cero** los 32 bits altos del de 64 (`mov eax, 1` deja `rax = 1`); escribir uno de 8 o
16 bits deja intactos los demás. Por eso los compiladores emiten `xor ecx, ecx` en lugar de `xor rcx, rcx`: mismo efecto, codificación más corta.

**`rflags`.** Las instrucciones aritméticas actualizan, entre otros, `ZF` (resultado cero), `SF` (signo), `CF` (acarreo sin signo) y `OF` (desbordamiento con
signo). Los saltos condicionales los leen:

| Salto | Condición | Comparación tras `cmp a, b` |
|---|---|---|
| `je` / `jne` | `ZF = 1` / `ZF = 0` | $a = b$ / $a \ne b$ |
| `jb` / `jae` | `CF = 1` / `CF = 0` | $a < b$ / $a \ge b$ **sin signo** |
| `jl` / `jge` | `SF ≠ OF` / `SF = OF` | $a < b$ / $a \ge b$ **con signo** |
| `jle` / `jg` | `ZF = 1 o SF ≠ OF` / lo contrario | $a \le b$ / $a > b$ con signo |

`cmp a, b` calcula $a - b$ y descarta el resultado; `test a, b` calcula $a \mathbin{\&} b$. Confundir los saltos con signo y sin signo es una fuente clásica de
vulnerabilidades: un tamaño negativo comparado con signo pasa como pequeño y después se usa como enorme sin signo.

## 3. Direccionamiento

Un operando de memoria tiene la forma general

$$
[\,\text{base} + \text{índice}\times\text{escala} + \text{desplazamiento}\,], \qquad \text{escala} \in \{1, 2, 4, 8\},
$$

con el tamaño explícito cuando no se deduce de los operandos: `byte ptr`, `word ptr`, `dword ptr`, `qword ptr`. La escala existe para indexar arrays de
elementos de 1, 2, 4 y 8 bytes: `a[i]` con `int64_t *a` en `rdi` e `i` en `rsi` es `qword ptr [rdi + rsi*8]`.

**`lea`** (*load effective address*) calcula la dirección **sin acceder a memoria**. Los compiladores la usan como suma y multiplicación baratas que no tocan
los flags: `lea rax, [rdi + rdi*2]` es $3\cdot\text{rdi}$, y `lea rax, [rax + rcx*8 + 7]` es $\text{rax} + 8\,\text{rcx} + 7$.

> [!example] Ejemplo resuelto 1: multiplicar por 10 sin `imul`
> `lea rax, [rdi + rdi*4]` deja $5x$, y `add rax, rax` lo duplica: $10x$, en dos instrucciones rápidas que no tocan los flags. Con `rdi = 4`: $20$, luego $40$.
> Al leer código compilado, una cadena de `lea` con escalas 2, 4 y 8 casi siempre es una multiplicación por constante.

## 4. Instrucciones que hay que reconocer

- `mov`, `movzx` (extiende con ceros), `movsx` / `movsxd` (extiende con signo), `movabs` (carga un inmediato de 64 bits, el único caso en que se admite).
- `add`, `sub`, `inc`, `dec`, `neg`, `imul` (en la forma de dos operandos, `imul a, b` hace $a \leftarrow a\cdot b \bmod 2^{64}$, idéntico con y sin signo en los 64 bits
  bajos), `mul` y `div` (usan implícitamente `rdx:rax`).
- `and`, `or`, `xor`, `not`, `shl`, `shr` (lógico, entra un cero), `sar` (aritmético, replica el signo), `rol`, `ror`.
- `cmp`, `test`, `jcc`, `jmp`, `call`, `ret`, `push`, `pop`, `cmovcc` (mueve si se cumple la condición, sin saltar), `setcc`.

Toda la aritmética entera trabaja **módulo $2^{64}$**: es la del tipo `uint64_t` de C, y también la de `int64_t` en complemento a dos, donde el desbordamiento es
comportamiento indefinido para el compilador pero no para el procesador.

## 5. La pila y la convención de llamada

La pila crece hacia direcciones bajas. `push x` es `sub rsp, 8` seguido de `mov [rsp], x`; `call f` apila la dirección de retorno y salta; `ret` la desapila en
`rip`.

**System V AMD64, lo esencial.**

1. Los seis primeros argumentos enteros van en `rdi, rsi, rdx, rcx, r8, r9`; el resto, en la pila, de derecha a izquierda. El resultado vuelve en `rax`.
2. El llamado debe preservar `rbx, rbp, r12–r15` (y `rsp`); el resto puede destruirlo.
3. Justo antes de un `call`, `rsp` debe ser múltiplo de 16. Al entrar en una función, por tanto, $\text{rsp} \equiv 8 \pmod{16}$, por la dirección de retorno.
4. Hay una **zona roja** de 128 bytes bajo `rsp` que las funciones hoja pueden usar sin mover `rsp`.

**Marco de pila típico.**

```
f:
    push    rbp            ; guarda el marco del llamador
    mov     rbp, rsp       ; rbp apunta a la base del marco
    sub     rsp, 32        ; reserva variables locales en [rbp-8], [rbp-16]...
    ...
    leave                  ; equivale a mov rsp, rbp ; pop rbp
    ret
```

Con `rbp` como base, la dirección de retorno está en `[rbp+8]`, el séptimo argumento en `[rbp+16]`, el octavo en `[rbp+24]` y las variables locales debajo de
`rbp`. Que la dirección de retorno viva justo encima de los búferes locales es el origen del desbordamiento de pila.

**Teorema (alineación).** Si una función hace $k$ `push` tras entrar y después un `call` sin otro ajuste de `rsp`, la pila está alineada en la llamada si y solo
si $k$ es impar.

*Demostración.* Al entrar, $\text{rsp} \equiv 8 \pmod{16}$; tras $k$ `push`, $\text{rsp} \equiv 8 - 8k \equiv 8 + 8k \pmod{16}$, que es $0$ exactamente cuando $k$ es impar. $\blacksquare$

> [!example] Ejemplo resuelto 2: leer una función recursiva (con menos ayuda)
> En la función `h` del reto, `rbx` guarda `n` y `r12` guarda $3\,h(n-1)$ a través de la segunda llamada: por eso se apilan (son preservados por el llamado
> y la función los usa después de un `call`). Con `push rbp`, `push rbx` y `push r12`, $k = 3$ es impar: la pila queda alineada para los `call`. Escribe tú
> la recurrencia en C: $h(n) = 3h(n-1) - h(n-2) + (n \bmod 4)$ para $n > 1$, y $h(n) = n$ si $n \le 1$, y calcula $h(10)$ de forma iterativa ($15\,216$).

## 6. De C a ensamblador

Compila con `gcc -O1 -S -masm=intel` y compara. Tres patrones aparecen en todo binario.

**Bucle `for`.** El compilador suele rotarlo para que la comprobación quede al final:

```c
uint64_t suma(const uint64_t *a, uint64_t n) {
    uint64_t s = 0;
    for (uint64_t i = 0; i < n; i++) s += a[i];
    return s;
}
```

```
suma:
    xor     eax, eax
    test    rsi, rsi
    je      .Lfin
    xor     ecx, ecx
.Lbucle:
    add     rax, qword ptr [rdi + rcx*8]
    inc     rcx
    cmp     rcx, rsi
    jne     .Lbucle
.Lfin:
    ret
```

**División por constante.** `x / 10` sin signo no usa `div` (decenas de ciclos): se multiplica por $\lceil 2^{67}/10\rceil = $ `0xCCCCCCCCCCCCCCCD` con `mul`, que deja la
parte alta en `rdx`, y se desplaza 3 bits a la derecha. Para `x / 3`, la constante es `0xAAAAAAAAAAAAAAAB` con desplazamiento 1. Reconocer estas
constantes mágicas ahorra horas de *reversing*.

**Saltos evitados.** `max(a, b)` con signo se compila sin salto: `mov rax, rdi; cmp rdi, rsi; cmovl rax, rsi`. Con `cmovb` sería el máximo sin signo, y
$-5$ «gana» a $3$ porque como entero sin signo es enorme.

**Recursión.** Una función recursiva guarda en registros preservados (`rbx`, `r12`…) los valores que necesita después de la llamada, y los restaura antes de
`ret`. Leerla exige identificar qué sobrevive a cada `call`; su coste, contar las llamadas: con dos llamadas recursivas el número crece como Fibonacci.

## 7. Leer desensamblado

1. `file`, `readelf -h` y los símbolos (`nm`, `readelf -s`) para la arquitectura, el formato y las funciones.
2. `objdump -d -M intel` o Ghidra para el código.
3. Localizar el prólogo y el epílogo, y anotar qué registros son argumentos y cuáles locales.
4. Reescribir cada bloque básico en pseudo-C y comprobar la hipótesis ejecutando con `gdb` (`break`, `stepi`, `x/8gx $rsp`, `info registers`).

## 8. Comprobar con un programa

Un programa en C que incluye funciones en ensamblador (sintaxis Intel, en un bloque `__asm__` de nivel superior), las llama y contrasta sus resultados con
la misma cuenta hecha en C: la regla de escritura parcial, `sar` frente a `shr`, la división por constante y un máximo con `cmov`.

```c
#include <assert.h>
#include <stdint.h>
#include <stdio.h>

__asm__(
    ".intel_syntax noprefix\n"
    ".text\n"
    ".globl parcial32, parcial8, aritmetico, logico, entre10, maximo, por10\n"
    "parcial32: mov rax, -1\n mov eax, 5\n ret\n"
    "parcial8:  mov rax, -1\n mov al, 5\n ret\n"
    "aritmetico: mov rax, rdi\n sar rax, 3\n ret\n"
    "logico:     mov rax, rdi\n shr rax, 3\n ret\n"
    "entre10: mov rax, rdi\n movabs rdx, 0xCCCCCCCCCCCCCCCD\n mul rdx\n mov rax, rdx\n shr rax, 3\n ret\n"
    "maximo:  mov rax, rdi\n cmp rdi, rsi\n cmovl rax, rsi\n ret\n"
    "por10:   lea rax, [rdi + rdi*4]\n add rax, rax\n ret\n"
    ".att_syntax prefix\n");

uint64_t parcial32(void), parcial8(void), aritmetico(uint64_t), logico(uint64_t), entre10(uint64_t), por10(uint64_t);
int64_t maximo(int64_t, int64_t);

int main(void) {
    assert(parcial32() == 5);                                   /* 32 bits: pone a cero la parte alta */
    assert(parcial8() == 0xffffffffffffff05ULL);                /* 8 bits: el resto queda intacto */
    assert((int64_t)aritmetico((uint64_t)-64) == -8);           /* sar replica el signo */
    assert(logico((uint64_t)-64) == ((uint64_t)-64) >> 3);      /* shr mete ceros */
    for (uint64_t x = 0; x < 1000000; x += 7) assert(entre10(x) == x / 10);
    assert(entre10(UINT64_MAX) == UINT64_MAX / 10);
    assert(maximo(-5, 3) == 3 && maximo(8, -2) == 8);
    assert(por10(4) == 40);
    printf("Ensamblador y C coinciden: %llu / 10 = %llu\n",
           (unsigned long long)UINT64_MAX, (unsigned long long)entre10(UINT64_MAX));
    return 0;
}
```

## 9. Errores típicos

- Confundir el orden de operandos de la sintaxis Intel (`destino, origen`) con la AT&T (`origen, destino`).
- Escribir `eax` creyendo que conserva la parte alta de `rax`, o escribir `al` creyendo que la borra.
- Usar `jl`/`jg` donde la comparación es sin signo (`jb`/`ja`), o al revés.
- Olvidar que `mul`/`div` usan `rdx:rax` implícitamente (y que `div` falla si el cociente no cabe).
- Desalinear la pila antes de un `call` (las funciones con SSE pueden fallar), o no restaurar `rbx`, `rbp`, `r12`–`r15`.
- Confundir `lea` (calcula una dirección) con `mov` (lee la memoria).

## 10. Resumen

- Registros de 64/32/16/8 bits; escribir 32 bits pone a cero la parte alta; flags `ZF`, `SF`, `CF`, `OF` y saltos con o sin signo.
- Direccionamiento `[base + índice·escala + desp]`; `lea` como aritmética.
- Aritmética módulo $2^{64}$; `sar` frente a `shr`; `imul` de dos operandos; `mul`/`div` con `rdx:rax`.
- System V: `rdi, rsi, rdx, rcx, r8, r9` → `rax`; preservar `rbx, rbp, r12–r15`; pila alineada a 16 en cada `call`; 7.º y 8.º argumento en `[rbp+16]`, `[rbp+24]`.
- Patrones: bucles rotados, divisiones por constantes mágicas, `cmov`, recursión con registros preservados.

## Reto

El siguiente listado ensambla con `gcc -c` (GNU `as`) y sigue la ABI System V AMD64:

```
    .intel_syntax noprefix
    .text
    .globl  f
    .globl  h

# uint64_t f(const uint8_t *s, uint64_t n)
f:
    movabs  rax, 0x9e3779b97f4a7c15
    movabs  r8, 0x100000001b3
    xor     ecx, ecx
.Lf_loop:
    cmp     rcx, rsi
    jae     .Lf_done
    movzx   edx, byte ptr [rdi + rcx]
    xor     rax, rdx
    imul    rax, r8
    rol     rax, 13
    lea     rax, [rax + rcx*8 + 7]
    inc     rcx
    jmp     .Lf_loop
.Lf_done:
    mov     rdx, rax
    shr     rdx, 29
    xor     rax, rdx
    ret

# int64_t h(int64_t n)
h:
    push    rbp
    mov     rbp, rsp
    push    rbx
    push    r12
    mov     rbx, rdi
    mov     rax, rdi
    cmp     rdi, 1
    jle     .Lh_ret
    lea     rdi, [rbx - 1]
    call    h
    lea     r12, [rax + rax*2]
    lea     rdi, [rbx - 2]
    call    h
    sub     r12, rax
    mov     rax, rbx
    and     eax, 3
    add     rax, r12
.Lh_ret:
    pop     r12
    pop     rbx
    pop     rbp
    ret
```

Valores de control: `f("abc", 3)` devuelve `0x0b2db11974332391`, `h(10)` devuelve `15216` y `h(30)` devuelve `0x0000032ac6ea1e22`.

- **a.** El valor de `f` aplicada a los 14 bytes de la cadena ASCII `System V AMD64` (sin el terminador nulo).
- **b.** El valor de `h(90)`, visto como entero de 64 bits sin signo. Ejecutarla tal cual no termina en un tiempo razonable.

Formato de la flag: `EXODUS{a-b}`, con cada valor en hexadecimal en minúsculas, sin `0x` y rellenado con ceros a 16 dígitos. Por ejemplo,
`EXODUS{0123456789abcdef-00000000000000ff}`.

## Repaso: lo que debe quedarte dentro de un mes

1. `destino, origen` en Intel; escribir 32 bits limpia la parte alta.
2. Saltos con signo (`jl`, `jg`) frente a sin signo (`jb`, `ja`).
3. `rdi, rsi, rdx, rcx, r8, r9` → `rax`; preservar `rbx, rbp, r12–r15`; pila alineada a 16.
4. `lea` calcula, `mov` lee; las constantes mágicas son divisiones.
5. Para entender una recursión, mira qué sobrevive a cada `call`.

## Siguiente

[[sec-explotacion-binaria]] usa esta lectura para auditar binarios; en las ramas, `sys-ensamblador-arm` (la otra arquitectura dominante),
`sys-compiladores` (de dónde sale este código) y `sys-optimizacion-rendimiento`.
