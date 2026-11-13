---
id: sec-explotacion-binaria
title: "Reversing y seguridad de binarios: ELF, metodología de análisis, errores de memoria y mitigaciones"
area: ciberseguridad
trunk_level: 11
prerequisites: [sys-ensamblador-x86-64, sys-sistemas-operativos]
academic_sources:
  - "Aleph One. Smashing the Stack for Fun and Profit. Phrack, 7(49), 1996."
  - "Cowan, C. et al. StackGuard: Automatic Adaptive Detection and Prevention of Buffer-Overflow Attacks. 7th USENIX Security Symposium, 1998."
  - "Shacham, H.; Page, M.; Pfaff, B.; Goh, E.-J.; Modadugu, N.; Boneh, D. On the Effectiveness of Address-Space Randomization. ACM CCS, 298-307, 2004."
  - "Shacham, H. The Geometry of Innocent Flesh on the Bone: Return-into-libc without Function Calls (on the x86). ACM CCS, 552-561, 2007."
  - "Szekeres, L.; Payer, M.; Wei, T.; Song, D. SoK: Eternal War in Memory. IEEE Symposium on Security and Privacy, 2013."
  - "SEI CERT C Coding Standard. Software Engineering Institute, Carnegie Mellon University (reglas ARR, INT, STR, MEM)."
  - "MITRE. CWE-416: Use After Free. Common Weakness Enumeration."
  - "Tool Interface Standard (TIS) Executable and Linking Format (ELF) Specification, versión 1.2, 1995."
  - "Matz, M. et al. System V Application Binary Interface: AMD64 Architecture Processor Supplement."
ctf_flag: "sha256:79dfd119c9549fe244fbc1f01b590f94d509bc96c561d4e09165ebc9e64af09a"
attachments:
  - "auditoria.elf"
hints:
  - "(a–d) Todo está en las cabeceras del archivo: la cabecera ELF fija el punto de entrada y la ubicación de las tablas de segmentos y de secciones; cada entrada de la tabla de secciones indica nombre, tamaño y tamaño de entrada; cada entrada de la tabla de segmentos indica su tipo y su tamaño en el archivo. Lee los campos con la especificación ELF abierta. (e) Con la disposición fija entre intentos y sin repetir ninguno, la probabilidad tras k intentos es k dividido por el número de disposiciones posibles. (f) Multiplica en aritmética de 32 bits sin signo (módulo 2^32) y compara con el producto verdadero."
  - "readelf -h archivo (cabecera), readelf -S -W archivo (secciones), readelf -l -W archivo (segmentos), readelf --dyn-syms archivo (símbolos dinámicos); en Python, struct.unpack_from sobre los bytes del archivo, o la biblioteca pyelftools. Para (e) y (f) usa enteros de precisión arbitraria y comprueba el resultado con la aritmética módulo 2^32 de otro lenguaje."
  - "Especificación TIS ELF 1.2, partes 1-1 (cabecera) a 1-6 (tabla de secciones) y 2-2 (programa); man 5 elf; Szekeres et al. (2013) para el panorama de mitigaciones; SEI CERT C, regla INT30-C (evitar desbordamientos de enteros sin signo). Documentación: sourceware.org/binutils/docs/binutils/readelf.html"
exercises:
  - id: firma-elf
    tier: 1
    prompt: |
      ¿Cuáles son los cuatro primeros bytes de cualquier archivo ELF? Respuesta: en hexadecimal, 8 cifras seguidas (por ejemplo `deadbeef`).
    answers: ["sha256:8f328025f36e3709031daf47458e790a90af6c3a75e7b3b9883b7192ed56d987"]
  - id: tipo-de-ejecutable
    tier: 1
    prompt: |
      Lee el campo `e_type` de la cabecera del adjunto `auditoria.elf` (con `readelf -h` o leyendo el byte 16). ¿Cuánto vale? (2 = `ET_EXEC`, 3 = `ET_DYN`.) Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: suma-que-da-la-vuelta
    tier: 1
    prompt: |
      En C, ¿cuánto vale `(uint32_t)3000000000u + 2000000000u`? Respuesta: un entero.
    answers: ["sha256:1fe30e13fb1f639085382197d790fb84a1baf70d9fe8673065107bb822e406f3"]
  - id: entropia-del-canario
    tier: 1
    prompt: |
      Un canario de pila de 64 bits tiene siempre el byte menos significativo a cero (para frenar errores con cadenas). ¿Cuántos bits de entropía le quedan? Respuesta: un entero.
    answers: ["sha256:7688b6ef52555962d008fff894223582c484517cea7da49ee67800adc7fc8866"]
  - id: segmentos-y-secciones
    tier: 1
    prompt: |
      ¿Cuántas entradas tienen la tabla de segmentos (`e_phnum`) y la tabla de secciones (`e_shnum`) del adjunto? Respuesta: `segmentos;secciones`.
    answers: ["sha256:3c2c6350ed848dda4a5c434511c681db22c2155347231e2b8b3e43f76f137125"]
  - id: mitigaciones-del-binario
    tier: 2
    prompt: |
      Audita las defensas del adjunto: ¿es PIE?, ¿tiene la pila no ejecutable (NX)?, ¿usa canario (`__stack_chk_fail`)?, ¿y qué RELRO tiene (`no`, `parcial` o `completo`, según haya `PT_GNU_RELRO` y `BIND_NOW`)? Respuesta: `pie;nx;canario;relro` con `si`/`no` en los tres primeros.
    answers: ["sha256:61b1c04345cbd3a828d21e7338ae0f6461513962d865256bd7e49ac6f83e9abf"]
  - id: funciones-importadas
    tier: 2
    prompt: |
      ¿Cuántas funciones de biblioteca importa el adjunto (símbolos de tipo `FUNC` sin definir en `.dynsym`)? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: fortify-source
    tier: 2
    prompt: |
      ¿Está compilado el adjunto con `_FORTIFY_SOURCE`? (Se reconoce por símbolos como `__memcpy_chk` o `__strcpy_chk`; `__stack_chk_fail` es del canario, no cuenta.) Respuesta: `si` o `no`.
    answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: fuerza-bruta-contra-aslr
    tier: 2
    prompt: |
      Con 28 bits de entropía de ASLR, ¿cuántos intentos hacen falta en media si la disposición se re-aleatoriza en cada intento, y cuántos si es fija y el atacante no repite posiciones? Respuesta: `aleatoria;fija`.
    answers: ["sha256:7be68052b0d9c07fdb9d825097060d6863211f62156f8e5acd694c5be3a73001"]
  - id: producto-de-16-bits
    tier: 2
    prompt: |
      Con enteros de 16 bits sin signo, `n = 0x4001` y `sz = 4`: ¿cuánto vale `n * sz` tras dar la vuelta, y cuántos bytes más que la reserva escribiría un bucle que recorre los `n` elementos de 4 bytes? Respuesta: `envuelto;diferencia`.
    answers: ["sha256:7b6db344506c7a373e093514092a614249d7a176a09fc92c738e2636725871ac"]
  - id: escritura-o-ejecucion
    tier: 2
    prompt: |
      Los permisos de un segmento son `p_flags` con R = 4, W = 2, X = 1. De los segmentos con `p_flags` 5, 6, 7, 4 y 3, ¿cuántos violan $W \oplus X$ (escribibles y ejecutables a la vez)? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: tabla-got
    tier: 2
    prompt: |
      ¿Cuántas entradas de 8 bytes tiene la sección `.got` del adjunto? (Con RELRO completo queda de solo lectura tras el arranque.) Respuesta: un entero.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: memoria-de-sombra
    tier: 3
    prompt: |
      AddressSanitizer en Linux x86-64 guarda el estado de cada 8 bytes en la «memoria de sombra» de dirección `(addr >> 3) + 0x7fff8000`. ¿Qué dirección de sombra corresponde a `0x602000000010`? Respuesta: en hexadecimal con prefijo `0x`.
    answers: ["sha256:e66b063f68c64c712f0af7ec37ac435a0480a5a79e365ce5f5b3a2934ce7dd22"]
  - id: adivinar-un-canario
    tier: 3
    prompt: |
      Un atacante pudiera probar valores de un canario de 56 bits a razón de $10^6$ por segundo sin repetir y sin que el proceso se reinicie. ¿Cuántos años tardaría en tener un $50\,\%$ de probabilidad ($2^{55}$ intentos), con años de $365{,}25$ días? Respuesta: un entero (redondeado).
    answers: ["sha256:73401dfc9377b9ed6ea5a996cbde303cc34651192c67fba770bdb8745d3303e0"]
  - id: strncpy-sin-terminador
    tier: 3
    prompt: |
      El adjunto importa `strncpy` y `strlen`. Con `strncpy(dst, src, 8)` y un `src` de 12 caracteres, ¿cuántos bytes se copian y queda `dst` terminada en `\0`? Respuesta: `bytes;si` o `bytes;no`.
    answers: ["sha256:dfe6c56a5431081ab9b6bdc58553da208d567da123c6ab5e4713dd9f1194528e"]
  - id: clasificar-un-fallo
    tier: 3
    prompt: |
      Un informe de AddressSanitizer dice `heap-use-after-free`. ¿Qué número tiene esa clase de error en el catálogo CWE (*Use After Free*)? Respuesta: un entero.
    answers: ["sha256:67e0bdb7b6c549d4fa834d0f6848ce6a3a12e07de9cea949ad41932bd5881bc4"]
---

# Reversing y seguridad de binarios: ELF, metodología de análisis, errores de memoria y mitigaciones

El software en C y C++ ([[sys-c-memoria]]) confía al programador la gestión de la memoria, y cuando se equivoca, el error cambia el *significado* del
programa: datos que debían ser inertes pasan a ser control. Entender cómo y por qué ocurre, y cómo lo mitigan el compilador, el enlazador y el sistema
operativo, es la base del trabajo de auditoría e investigación autorizada y, sobre todo, de la defensa: escribir código robusto y endurecer binarios. Este
nodo cubre lo que todo profesional necesita primero: **leer un binario, reconocer sus defensas, clasificar los errores y razonar con rigor sobre ellos**.
No enseña a construir *exploits*: enseña a entender el riesgo para eliminarlo.

## Objetivos

Al terminar sabrás:

1. Leer la anatomía de un ELF de 64 bits: cabecera, segmentos, secciones, símbolos dinámicos, PLT y GOT.
2. Seguir una metodología de análisis estático y dinámico, en un entorno aislado y documentado.
3. Clasificar los errores de memoria (desbordamientos, uso tras liberación, cadena de formato, enteros, *off-by-one*) con su CWE.
4. Reconocer en un binario sus mitigaciones (NX, canario, ASLR/PIE, RELRO, FORTIFY, CFI) y razonar sobre su fuerza.
5. Corregir los patrones de código vulnerables y compilar con endurecimiento y *sanitizers*.
6. Situar el trabajo en su marco ético y legal: autorización, divulgación coordinada, CVE y CVSS.

## Qué debes dominar antes

[[sys-ensamblador-x86-64]] (registros, pila, convención de llamada), [[sys-sistemas-operativos]] (memoria virtual, procesos) y [[sys-c-memoria]]
(punteros, montón, vida de los objetos).

> [!question] Test de entrada
> 1. ¿Qué registro guarda el primer argumento de una función en x86-64 con la ABI de System V?
> 2. ¿Qué devuelve `malloc` y quién libera esa memoria?
> 3. ¿Cuánto vale `0xFF + 1` en un `uint8_t`?
>
> Respuestas: `rdi`; un puntero a un bloque del montón, que debe liberar el programa con `free`; `0`.

## 1. Para qué sirve

- **Defensa y desarrollo seguro**: saber qué patrones de C producen vulnerabilidades y cómo detectarlos con *sanitizers* y *fuzzing* antes de publicar.
- **Auditoría de binarios**: verificar que el software que se despliega (propio o de terceros) tiene las mitigaciones activas.
- **Respuesta a incidentes y análisis de *malware***: entender qué hace un binario sin ejecutarlo a ciegas ([[sec-fundamentos]]).
- **Investigación autorizada**: CTF, *bug bounty* y divulgación coordinada, que mejoran la seguridad de todos.

## 2. Anatomía de un ejecutable ELF

ELF (*Executable and Linking Format*) es el formato de ejecutables y bibliotecas de Linux y muchos otros sistemas. Un archivo ELF de 64 bits tiene:

- **Cabecera ELF** (64 bytes): firma `0x7F 'E' 'L' 'F'`, clase, endianidad, tipo (`ET_EXEC` = 2 ejecutable fijo; `ET_DYN` = 3 objeto compartido o ejecutable
  independiente de posición, PIE), arquitectura, **punto de entrada**, y desplazamientos y tamaños de las dos tablas siguientes.
- **Tabla de segmentos** (*program headers*): lo que el cargador necesita para ejecutar. Cada entrada describe un trozo del archivo y cómo proyectarlo en
  memoria (dirección, tamaños, permisos R/W/X en `p_flags`, con R = 4, W = 2, X = 1). `PT_LOAD` se cargan; `PT_INTERP` nombra el enlazador dinámico;
  `PT_GNU_STACK` declara los permisos de la pila; `PT_GNU_RELRO` marca una zona que pasa a solo lectura tras el enlazado.
- **Tabla de secciones** (*section headers*): la vista del enlazador y de las herramientas de análisis. `.text` (código), `.rodata` (constantes), `.data`,
  `.bss` (sin espacio en el archivo), `.dynsym`/`.dynstr` (símbolos dinámicos), `.got`/`.plt` (resolución de funciones externas). Un ejecutable puede
  **no** tener tabla de secciones y seguir funcionando, porque el cargador solo usa los segmentos.

La distinción es la clave: *los segmentos son para ejecutar, las secciones son para enlazar y analizar*.

**Enlazado dinámico.** Las llamadas a funciones de bibliotecas compartidas pasan por la **PLT** (tabla de saltos) y la **GOT** (tabla de direcciones).
Con *lazy binding* la dirección real se resuelve en la primera llamada, lo que obliga a que la GOT sea escribible toda la ejecución. Con `BIND_NOW` (`-z
now`), todo se resuelve al arrancar y, junto con `PT_GNU_RELRO`, la GOT queda de solo lectura: es el **RELRO completo**.

> [!example] Ejemplo resuelto 1: leer las defensas del adjunto
> `readelf -h auditoria.elf` dice `Type: DYN (Position-Independent Executable)`: es PIE. `readelf -l -W` muestra `GNU_STACK ... RW` (sin `E`): pila no
> ejecutable. `readelf --dyn-syms` lista `__stack_chk_fail`: tiene canario. Y `readelf -d` muestra `FLAGS BIND_NOW` junto a un segmento `GNU_RELRO`: RELRO
> completo. No aparece ningún `__*_chk` de `FORTIFY_SOURCE`. Ese resumen es lo que una herramienta como `checksec` automatiza; hacerlo a mano enseña
> de dónde sale cada conclusión.

## 3. Metodología de análisis

Ante un binario desconocido, el orden es de lo barato a lo caro, y siempre en un **entorno aislado** (máquina virtual sin red, instantáneas) si no se
confía en él:

1. **Identificación**: `file`, hash SHA-256 (para identificarlo y citarlo), tamaño, y `strings` para el texto incrustado.
2. **Estructura**: `readelf -h -l -S`, `readelf --dyn-syms` (qué funciones importa). `ldd` ejecuta el cargador: solo en un entorno de confianza.
3. **Análisis estático**: desensamblar (`objdump -d -M intel`, Ghidra, radare2) y reconstruir funciones, flujo de control y estructuras, leyendo el
   ensamblador como en [[sys-ensamblador-x86-64]]. La ABI de System V indica dónde van los argumentos (`rdi, rsi, rdx, rcx, r8, r9`).
4. **Análisis dinámico**: `gdb` (puntos de interrupción, pila, registros), `strace`/`ltrace` (llamadas al sistema y a bibliotecas), `valgrind` y los
   *sanitizers*.
5. **Hipótesis y prueba**: formular qué hace cada función y confirmarlo con una ejecución controlada. Documentarlo todo.

## 4. Clases de errores de memoria

Todas nacen de lo mismo: C no comprueba límites ni vida útil de los objetos. Cada clase tiene su entrada en el catálogo **CWE** de MITRE, el vocabulario
común de los informes.

- **Desbordamiento de búfer** (CWE-787 escritura, CWE-125 lectura): escribir o leer más allá del final de un array, en la pila o en el montón.
- **Uso tras liberación** (CWE-416) y **doble liberación** (CWE-415): usar o liberar de nuevo un bloque ya devuelto al asignador.
- **Cadena de formato** (CWE-134): pasar datos del usuario como formato a `printf` y similares; la corrección es `printf("%s", dato)`.
- **Desbordamiento de enteros** (CWE-190): una aritmética que da la vuelta, normalmente al calcular un tamaño.
- **Error por uno** (CWE-193): un límite mal calculado en un solo elemento (`<=` en lugar de `<`).

**Tamaño que da la vuelta.** En C, la aritmética de enteros sin signo es módulo $2^w$. Con `n` y `sz` de 32 bits, `malloc(n * sz)` con `n = 0x40000001` y
`sz = 4` reserva $2^{32} + 4 \equiv 4$ bytes, mientras el bucle que recorre los `n` elementos escribe unos 4 GiB: la reserva y el uso difieren en exactamente
$2^{32}$ bytes (regla CERT INT30-C). La defensa es comprobar antes de multiplicar:

```c
size_t total;
if (__builtin_mul_overflow(n, sz, &total)) abortar();   // detecta el desbordamiento
```

**`strncpy` no termina la cadena.** Si el origen es más largo que el límite, `strncpy(dst, src, n)` copia $n$ bytes **sin** poner el `\0` final, y el
siguiente `strlen(dst)` lee fuera del búfer. Se corrige forzando `dst[n-1] = '\0'` o usando una función que sí termine la cadena. El adjunto del reto
importa precisamente `strncpy` y `strlen`: es la combinación que hay que revisar en su código.

## 5. Mitigaciones

Un binario moderno se defiende con **defensa en profundidad**:

| Mitigación | Idea | Cómo reconocerla en un ELF |
|---|---|---|
| **NX / DEP** ($W \oplus X$) | Ninguna página es a la vez escribible y ejecutable | `PT_GNU_STACK` sin `E`; ningún `PT_LOAD` con W y X |
| **Canario de pila** (Cowan et al., 1998) | Valor aleatorio entre las variables locales y los datos de control, comprobado al retornar | Símbolo `__stack_chk_fail` |
| **ASLR / PIE** | El sistema coloca pila, montón, bibliotecas y (con PIE) el ejecutable en direcciones aleatorias | `ET_DYN` |
| **RELRO** | La GOT queda de solo lectura tras el enlazado | `PT_GNU_RELRO` y `BIND_NOW` (completo) |
| **FORTIFY_SOURCE** | Versiones con comprobación de límites de `memcpy`, `strcpy`... | Símbolos `__memcpy_chk`, `__strcpy_chk`... |
| **CFI / pila de sombra** | Restringe el flujo de control a destinos válidos | Instrucciones `endbr64`, soporte CET |

Los canarios de 64 bits suelen tener el byte menos significativo a cero (para frenar errores con cadenas): 56 bits de entropía efectiva. La **entropía de
ASLR** depende de la plataforma: en Linux x86-64 la aleatorización de proyecciones usa por defecto 28 bits, y en los sistemas de 32 bits que estudiaron
Shacham et al. (2004) era de unos 16 bits, lo que permitía forzarla contra un servidor que se reinicia con la misma disposición. Por eso importan
re-aleatorizar en cada arranque y **vigilar los cuelgues repetidos**.

Dos matices. **Ninguna mitigación es absoluta**: NX por sí sola no impide reutilizar código ya presente (Shacham, 2007), lo que empujó a ASLR, CFI y las
pilas de sombra; es una carrera continua (Szekeres et al., 2013). Y **un fallo de memoria es una vulnerabilidad aunque hoy no se sepa explotar**: se
parchea siempre.

**Compilar endurecido** con GCC o Clang:

```
gcc -O2 -fstack-protector-strong -D_FORTIFY_SOURCE=2 \
    -fPIE -pie -Wl,-z,relro,-z,now -Wl,-z,noexecstack \
    -fcf-protection=full -Wall -Wextra -Werror programa.c
```

Y probar con `-fsanitize=address,undefined`: AddressSanitizer guarda el estado de cada 8 bytes de memoria en una **memoria de sombra** (en Linux x86-64,
en la dirección `(addr >> 3) + 0x7fff8000`) y aborta con un informe al primer acceso inválido.

> [!example] Ejemplo resuelto 2: corregir un patrón vulnerable (con menos ayuda)
> `char nombre[16]; strncpy(nombre, entrada, sizeof nombre); printf(nombre);` tiene dos fallos: si la entrada mide 16 o más, `nombre` no queda
> terminada (CWE-170), y `printf(nombre)` usa un dato como formato (CWE-134). La corrección: `nombre[sizeof nombre - 1] = '\0';` tras la copia, y
> `printf("%s", nombre);`. Compílalo tú con `-Wall -Wformat-security` y comprueba que el compilador ya avisaba del segundo.

## 6. Descubrimiento de errores y práctica profesional

- **Fuzzing**: alimentar al programa con entradas generadas y mutadas de forma automática, con ASan activado, y vigilar cuelgues (AFL++, libFuzzer). Es la
  técnica más productiva para encontrar errores de memoria en analizadores de formatos.
- **Triaje**: reproducir de forma determinista, minimizar la entrada, clasificar la causa raíz (qué invariante se rompió, qué CWE) y estimar el impacto.
- **Marco ético y legal**: probar solo sistemas propios o con autorización escrita; divulgar de forma **coordinada** (avisar al fabricante, dar un plazo
  razonable, solicitar un CVE y puntuar con CVSS). Las competiciones CTF y los laboratorios existen para practicar en un entorno legal.
- **Lenguajes seguros en memoria**: Rust, Go y los lenguajes con recolector eliminan por construcción clases enteras de estos errores; en código nuevo
  son la mejor mitigación.

## 7. Comprobar con un programa

Un programa en C que aplica las defensas del nodo (detectar el desbordamiento del tamaño, terminar las cadenas, no usar datos como formato) y se compila
con ASan y UBSan, que no deben quejarse; y un analizador de cabeceras ELF en Python que audita cualquier ejecutable del sistema.

```c
#include <assert.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Reserva n elementos de sz bytes o devuelve NULL si el tamaño da la vuelta (CERT INT30-C). */
static void *reservar(size_t n, size_t sz) {
    size_t total;
    if (__builtin_mul_overflow(n, sz, &total)) return NULL;
    return malloc(total);
}

int main(void) {
    /* 1. En 32 bits, 0x40000001 * 4 da la vuelta a 4; con size_t y la comprobación no hay sorpresa. */
    uint32_t n32 = 0x40000001u, sz32 = 4u;
    assert((uint32_t)(n32 * sz32) == 4u);
    assert(reservar(SIZE_MAX / 2 + 1, 4) == NULL);
    void *p = reservar(1000, 4);
    assert(p != NULL);
    free(p);

    /* 2. strncpy no termina la cadena si el origen es largo: se fuerza el terminador. */
    char dst[8];
    strncpy(dst, "abcdefghijkl", sizeof dst);
    dst[sizeof dst - 1] = '\0';
    assert(strlen(dst) == 7);

    /* 3. Un dato del usuario nunca es la cadena de formato. */
    const char *entrada = "%x %x %n";
    char salida[32];
    snprintf(salida, sizeof salida, "%s", entrada);
    assert(strcmp(salida, entrada) == 0);
    printf("Defensas aplicadas: tamaño comprobado, cadena terminada (%zu), formato fijo\n", strlen(dst));
    return 0;
}
```

```python
import struct

def auditar(ruta):
    """Lee la cabecera y los segmentos de un ELF64 y deduce PIE, NX y RELRO."""
    with open(ruta, "rb") as f:
        b = f.read()
    assert b[:4] == b"\x7fELF" and b[4] == 2                       # firma y clase de 64 bits
    e_type, = struct.unpack_from("<H", b, 16)
    e_phoff, = struct.unpack_from("<Q", b, 32)
    e_phentsize, e_phnum = struct.unpack_from("<HH", b, 54)
    PT_GNU_STACK, PT_GNU_RELRO = 0x6474E551, 0x6474E552
    pila_ejecutable, relro = False, False
    for i in range(e_phnum):
        p_type, p_flags = struct.unpack_from("<II", b, e_phoff + i * e_phentsize)
        if p_type == PT_GNU_STACK:
            pila_ejecutable = bool(p_flags & 1)
        if p_type == PT_GNU_RELRO:
            relro = True
        if p_type == 1:                                              # PT_LOAD: nunca W y X a la vez
            assert not (p_flags & 2 and p_flags & 1), "segmento W+X"
    return {"PIE": e_type == 3, "NX": not pila_ejecutable, "RELRO": relro, "segmentos": e_phnum}

informe = auditar("/usr/local/bin/python3")
assert informe["NX"] and informe["segmentos"] > 0
print("Auditoría de python3:", informe)
```

## 8. Errores típicos

- Confundir secciones con segmentos, o fiarse de la tabla de secciones de un binario hostil (puede faltar o mentir).
- Ejecutar un binario desconocido (o `ldd` sobre él) fuera de un entorno aislado.
- Calcular tamaños con aritmética que puede dar la vuelta, o comparar un `size_t` con un `int` con signo.
- Usar `strncpy` sin forzar el terminador, o `printf(dato)`.
- Creer que una mitigación (NX, canario) basta por sí sola, o que un fallo «no explotable» no hay que corregirlo.
- Publicar un hallazgo sin autorización ni divulgación coordinada.

## 9. Resumen

- ELF: cabecera (tipo, entrada), segmentos (para ejecutar: `PT_LOAD`, `PT_GNU_STACK`, `PT_GNU_RELRO`), secciones (para enlazar: `.text`, `.got`, `.dynsym`).
- Metodología: identificar, estructura, estático, dinámico, hipótesis; siempre aislado y documentado.
- Errores: desbordamiento (CWE-787/125), uso tras liberación (CWE-416), formato (CWE-134), enteros (CWE-190), *off-by-one* (CWE-193).
- Mitigaciones: NX, canario (56 bits), ASLR/PIE (28 bits en x86-64), RELRO completo, FORTIFY, CFI; defensa en profundidad.
- Compilar endurecido y probar con ASan/UBSan y *fuzzing*; divulgar de forma coordinada.

## Reto

Auditoría de un binario. Descarga el adjunto `auditoria.elf` (un ejecutable ELF de 64 bits, inofensivo, compilado con GCC 14 con opciones de
endurecimiento; la página del nodo muestra su tamaño y su SHA-256). **No hace falta ejecutarlo**: es análisis estático de sus cabeceras. Calcula seis
enteros.

- **a.** Dirección del punto de entrada, en decimal. Valor de control: el campo `e_type` de un ejecutable PIE vale 3.
- **b.** Tamaño en bytes de la sección `.text`.
- **c.** Tamaño en el archivo (`p_filesz`) del segmento `PT_GNU_RELRO`.
- **d.** Número de entradas de la tabla `.dynsym`, **incluida** la entrada nula del principio.
- **e.** Con 28 bits de entropía de ASLR, una disposición que no cambia entre intentos y un atacante que prueba $k = 100\,000$ posiciones distintas sin
  repetir, la probabilidad de acertar es $k/2^{28}$. Entrega $\lfloor 10^9\,P\rfloor$. Valor de control: con 16 bits y 1000 intentos, $\lfloor 10^9 P\rfloor = 15\,258\,789$.
- **f.** El ejemplo de la sección 4, con `n = 1073741825` y `sz = 4`: cuántos bytes más de los reservados escribiría el bucle (producto verdadero menos el
  producto envuelto). Valor de control: en 32 bits sin signo, `0xFFFFFFFF + 1` vale 0.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e-f}`

## Repaso: lo que debe quedarte dentro de un mes

1. Segmentos para ejecutar, secciones para enlazar y analizar.
2. Los errores de memoria tienen nombre (CWE) y causa: límites, vida útil, formato, enteros.
3. Las mitigaciones se leen en el propio ELF: PIE, NX, canario, RELRO, FORTIFY.
4. Comprueba antes de multiplicar tamaños y termina siempre las cadenas.
5. Solo con autorización, y divulgación coordinada.

## Siguiente

En las ramas: `sec-reversing-malware` (análisis de *malware* en laboratorio), `sec-seguridad-so` (mitigaciones del núcleo), `sec-forense-logs` y, para el
mismo problema visto desde los lenguajes, `prog-rust`.
