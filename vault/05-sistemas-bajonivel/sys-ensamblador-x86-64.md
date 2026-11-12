---
id: sys-ensamblador-x86-64
title: "Ensamblador x86-64"
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
  - "Intel SDM Vol. 2: entradas de IMUL (forma de dos operandos), ROL, LEA, MOVZX y MOVABS (MOV con inmediato de 64 bits). System V AMD64 ABI, §3.2 (registros de argumentos, registros preservados por el llamado y alineación de la pila a 16 bytes). Bryant & O'Hallaron, cap. 3, §3.7 (procedimientos y recursión)."
---

# Ensamblador x86-64

El ensamblador es el contrato real entre el software y el procesador. Leerlo con soltura es
imprescindible para depurar código optimizado, analizar binarios sin fuentes y entender las
vulnerabilidades de [[sec-explotacion-binaria]]. Este nodo cubre la arquitectura AMD64 tal como
la ve un programa de usuario en Linux.

Se usa la **sintaxis Intel** (`instr destino, origen`), la de los manuales de Intel y la de
`objdump -M intel`. La sintaxis AT&T de GNU invierte el orden de los operandos y añade sufijos
de tamaño y prefijos `%` y `$`.

## 1. Registros

| 64 bits | 32 | 16 | 8 | Papel en System V |
|---|---|---|---|---|
| `rax` | `eax` | `ax` | `al` | valor de retorno |
| `rdi`, `rsi`, `rdx`, `rcx`, `r8`, `r9` | `edi`… | `di`… | `dil`… | argumentos 1 a 6 |
| `rbx`, `rbp`, `r12`–`r15` | | | | preservados por el llamado |
| `r10`, `r11` | | | | temporales |
| `rsp` | | | | puntero de pila |
| `rip` | | | | contador de programa |

**Regla de escritura parcial.** Escribir un registro de 32 bits **pone a cero** los 32 bits altos
del de 64 (`mov eax, 1` deja `rax = 1`); escribir uno de 8 o 16 bits deja intactos los demás.
Por eso los compiladores emiten `xor ecx, ecx` en lugar de `xor rcx, rcx`: tiene el mismo efecto
y una codificación más corta.

**`rflags`.** Las instrucciones aritméticas actualizan, entre otros, `ZF` (resultado cero), `SF`
(signo), `CF` (acarreo sin signo) y `OF` (desbordamiento con signo). Los saltos condicionales los
leen:

| Salto | Condición | Comparación tras `cmp a, b` |
|---|---|---|
| `je` / `jne` | `ZF = 1` / `ZF = 0` | $a = b$ / $a \ne b$ |
| `jb` / `jae` | `CF = 1` / `CF = 0` | $a < b$ / $a \ge b$ **sin signo** |
| `jl` / `jge` | `SF ≠ OF` / `SF = OF` | $a < b$ / $a \ge b$ **con signo** |
| `jle` / `jg` | `ZF = 1 o SF ≠ OF` / lo contrario | $a \le b$ / $a > b$ con signo |

`cmp a, b` calcula $a - b$ y descarta el resultado; `test a, b` calcula $a \mathbin{\&} b$.
Confundir los saltos con signo y sin signo es una fuente clásica de vulnerabilidades: un tamaño
negativo comparado con signo pasa como pequeño y después se usa como enorme sin signo.

## 2. Direccionamiento

Un operando de memoria tiene la forma general

$$
[\,\text{base} + \text{índice} \times \text{escala} + \text{desplazamiento}\,], \qquad
\text{escala} \in \{1, 2, 4, 8\},
$$

con el tamaño explícito cuando no se deduce de los operandos: `byte ptr`, `word ptr`,
`dword ptr`, `qword ptr`. La escala existe para indexar arrays de elementos de 1, 2, 4 y 8 bytes:
`a[i]` con `int64_t *a` en `rdi` e `i` en `rsi` es `qword ptr [rdi + rsi*8]`.

**`lea`** (*load effective address*) calcula la dirección **sin acceder a memoria**. Los
compiladores la usan como suma y multiplicación baratas que no tocan los flags:
`lea rax, [rdi + rdi*2]` es $3 \cdot \text{rdi}$, y `lea rax, [rax + rcx*8 + 7]` es
$\text{rax} + 8\,\text{rcx} + 7$.

## 3. Instrucciones que hay que reconocer

- `mov`, `movzx` (extiende con ceros), `movsx` / `movsxd` (extiende con signo), `movabs` (carga un
  inmediato de 64 bits, el único caso en que se admite).
- `add`, `sub`, `inc`, `dec`, `neg`, `imul` (en la forma de dos operandos, `imul a, b` hace
  $a \leftarrow a \cdot b \bmod 2^{64}$, idéntico con y sin signo en los 64 bits bajos), `mul` y
  `div` (usan implícitamente `rdx:rax`).
- `and`, `or`, `xor`, `not`, `shl`, `shr` (lógico), `sar` (aritmético, replica el signo), `rol`,
  `ror`.
- `cmp`, `test`, `jcc`, `jmp`, `call`, `ret`, `push`, `pop`, `cmovcc`, `setcc`.

Toda la aritmética entera trabaja **módulo $2^{64}$**: es la del tipo `uint64_t` de C, y también
la de `int64_t` en complemento a dos, donde el desbordamiento es comportamiento indefinido para
el compilador pero no para el procesador.

## 4. La pila y la convención de llamada

La pila crece hacia direcciones bajas. `push x` es `sub rsp, 8` seguido de
`mov [rsp], x`; `call f` apila la dirección de retorno y salta; `ret` la desapila en `rip`.

**System V AMD64, lo esencial.**

1. Los seis primeros argumentos enteros van en `rdi, rsi, rdx, rcx, r8, r9`; el resto, en la
   pila. El resultado vuelve en `rax`.
2. El llamado debe preservar `rbx, rbp, r12–r15` (y `rsp`); el resto puede destruirlo.
3. Justo antes de un `call`, `rsp` debe ser múltiplo de 16. Al entrar en una función, por tanto,
   $\text{rsp} \equiv 8 \pmod{16}$, por la dirección de retorno.
4. Hay una **zona roja** de 128 bytes bajo `rsp` que las funciones hoja pueden usar sin mover
   `rsp`.

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

Con `rbp` como base, la dirección de retorno está en `[rbp+8]`, el séptimo argumento en
`[rbp+16]` y las variables locales debajo de `rbp`. Que la dirección de retorno viva justo encima
de los buffers locales es el origen del desbordamiento de pila.

**Teorema (alineación).** Si una función hace $k$ `push` tras entrar y después un `call` sin otro
ajuste de `rsp`, la pila está alineada en la llamada si y solo si $k$ es impar.

*Demostración.* Al entrar, $\text{rsp} \equiv 8 \pmod{16}$; tras $k$ `push`,
$\text{rsp} \equiv 8 + 8k \pmod{16}$ (la pila baja, pero el signo no importa módulo 16), que es
$0$ exactamente cuando $k$ es impar. $\blacksquare$

## 5. De C a ensamblador

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

**División por constante.** `x / 10` sin signo no usa `div`: se multiplica por el inverso
$\lceil 2^{67}/10 \rceil = $ `0xCCCCCCCCCCCCCCCD` con `mul`, que deja la parte alta en `rdx`, y
se desplaza 3 bits a la derecha. Reconocer estas constantes mágicas ahorra horas de reversing.

**Recursión.** Una función recursiva guarda en registros preservados (`rbx`, `r12`…) los valores
que necesita después de la llamada, y los restaura antes de `ret`. Leerla exige identificar qué
sobrevive a cada `call`.

## 6. Leer desensamblado

Procedimiento con un binario desconocido:

1. `file`, `checksec` y `readelf -h` para la arquitectura, el formato y las mitigaciones.
2. `objdump -d -M intel` o Ghidra para el código; `nm` y `readelf -s` para los símbolos.
3. Localizar el prólogo y el epílogo, y anotar qué registros son argumentos y cuáles locales.
4. Reescribir cada bloque básico en pseudo-C y comprobar la hipótesis ejecutando con `gdb`
   (`break`, `stepi`, `x/8gx $rsp`, `info registers`).

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

Valores de control: `f("abc", 3)` devuelve `0x0b2db11974332391`, `h(10)` devuelve `15216` y
`h(30)` devuelve `0x0000032ac6ea1e22`.

- **a.** El valor de `f` aplicada a los 14 bytes de la cadena ASCII `System V AMD64` (sin el
  terminador nulo).
- **b.** El valor de `h(90)`, visto como entero de 64 bits sin signo. Ejecutarla tal cual no
  termina en un tiempo razonable.

Formato de la flag: `EXODUS{a-b}`, con cada valor en hexadecimal en minúsculas, sin `0x` y
rellenado con ceros a 16 dígitos. Por ejemplo, `EXODUS{0123456789abcdef-00000000000000ff}`.
