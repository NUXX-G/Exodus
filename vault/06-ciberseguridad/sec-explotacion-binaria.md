---
id: sec-explotacion-binaria
title: "Reversing y explotación binaria"
area: ciberseguridad
trunk_level: 10
prerequisites: [sys-ensamblador-x86-64, sys-sistemas-operativos]
academic_sources:
  - "Erickson, J. Hacking: The Art of Exploitation, 2ª ed. No Starch Press, 2008."
  - "Aleph One. Smashing the Stack for Fun and Profit. Phrack 49, 1996."
  - "Shacham, H. The Geometry of Innocent Flesh on the Bone: Return-into-libc without Function Calls (on the x86). ACM CCS, 2007."
  - "Szekeres, L.; Payer, M.; Wei, T.; Song, D. SoK: Eternal War in Memory. IEEE Symposium on Security and Privacy, 2013."
  - "Cowan, C. et al. StackGuard: Automatic Adaptive Detection and Prevention of Buffer-Overflow Attacks. USENIX Security, 1998."
  - "Shacham, H.; Page, M.; Pfaff, B.; Goh, E.-J.; Modadugu, N.; Boneh, D. On the Effectiveness of Address-Space Randomization. ACM CCS, 2004."
  - "SEI CERT C Coding Standard. Software Engineering Institute, Carnegie Mellon University (reglas ARR, INT, STR, MEM)."
  - "Tool Interface Standard (TIS) Executable and Linking Format (ELF) Specification, versión 1.2, 1995."
  - "Matz, M. et al. System V Application Binary Interface: AMD64 Architecture Processor Supplement."
ctf_flag: "sha256:79dfd119c9549fe244fbc1f01b590f94d509bc96c561d4e09165ebc9e64af09a"
attachments:
  - "auditoria.elf"
hints:
  - "(a–d) Todo está en las cabeceras del archivo: la cabecera ELF fija el punto de entrada y la ubicación de las tablas de segmentos y de secciones; cada entrada de la tabla de secciones indica nombre, tamaño y tamaño de entrada; cada entrada de la tabla de segmentos indica su tipo y su tamaño en el archivo. Lee los campos con la especificación ELF abierta. (e) Con la disposición fija entre intentos y sin repetir ninguno, la probabilidad tras k intentos es k dividido por el número de disposiciones posibles. (f) Multiplica en aritmética de 32 bits sin signo (módulo 2^32) y compara con el producto verdadero."
  - "readelf -h archivo (cabecera), readelf -S -W archivo (secciones), readelf -l -W archivo (segmentos), readelf --dyn-syms archivo (símbolos dinámicos); en Python, struct.unpack_from('<HHIQQQ...') sobre los bytes del archivo, o la biblioteca pyelftools. Para (e) y (f) usa enteros de precisión arbitraria y comprueba el resultado con la aritmética módulo 2^32 de otro lenguaje."
  - "Especificación TIS ELF 1.2, partes 1-1 (cabecera) a 1-6 (tabla de secciones) y 2-2 (programa); man 5 elf; Szekeres et al. (2013) para el panorama de mitigaciones; SEI CERT C, regla INT30-C (evitar desbordamientos de enteros sin signo). Documentación: sourceware.org/binutils/docs/binutils/readelf.html"
---

# Reversing y explotación binaria

El software en C y C++ ([[sys-c-memoria]]) confía al programador la gestión de la memoria, y
cuando se equivoca, el error cambia el *significado* del programa: datos que debían ser
inertes pasan a ser control. Entender cómo y por qué se produce, y cómo lo mitigan el
compilador, el enlazador y el sistema operativo, es la base tanto del trabajo ofensivo
autorizado (auditoría, *pentesting*, investigación de vulnerabilidades) como de la defensa
(escribir código robusto y endurecer binarios). Este nodo cubre lo que todo profesional necesita
primero: **leer un binario, reconocer sus defensas y razonar con rigor sobre ellas**. Se apoya en
[[sys-ensamblador-x86-64]] y [[sys-sistemas-operativos]].

## 1. Anatomía de un ejecutable ELF

ELF (*Executable and Linking Format*) es el formato de ejecutables y bibliotecas de Linux y
muchos otros sistemas. Un archivo ELF de 64 bits tiene:

- **Cabecera ELF** (64 bytes): firma `0x7F 'E' 'L' 'F'`, clase (64 bits), endianidad, tipo
  (`ET_EXEC` = 2 ejecutable fijo, `ET_DYN` = 3 objeto compartido o ejecutable independiente de
  posición, PIE), arquitectura, **punto de entrada**, y los desplazamientos y tamaños de las dos
  tablas siguientes.
- **Tabla de segmentos** (*program headers*): lo que el cargador del sistema operativo necesita
  para ejecutar el programa. Cada entrada describe un trozo del archivo y cómo proyectarlo en
  memoria (dirección, tamaños, permisos R/W/X). `PT_LOAD` son los trozos que se cargan;
  `PT_INTERP` nombra el enlazador dinámico; `PT_GNU_STACK` declara los permisos de la pila;
  `PT_GNU_RELRO` marca una zona que se vuelve de solo lectura tras el enlazado.
- **Tabla de secciones** (*section headers*): la vista del *enlazador* y de las herramientas de
  análisis. `.text` (código), `.rodata` (constantes), `.data` (globales inicializadas), `.bss`
  (globales a cero, sin espacio en el archivo), `.dynsym`/`.dynstr` (símbolos dinámicos),
  `.got`/`.plt` (resolución de funciones externas). Un ejecutable puede **no** tener la tabla de
  secciones y seguir funcionando, porque el cargador solo usa los segmentos.

La distinción segmentos/secciones confunde al principio y es la clave: *los segmentos son para
ejecutar, las secciones son para enlazar y analizar*.

**Enlazado dinámico.** Las llamadas a funciones de bibliotecas compartidas pasan por la
**PLT** (tabla de saltos) y la **GOT** (tabla de direcciones). Con *lazy binding*, la
dirección real se resuelve en la primera llamada, lo que obliga a que la GOT sea escribible
durante toda la ejecución. Con `BIND_NOW` (opción `-z now`), el enlazador resuelve todo al
arrancar y, junto con `PT_GNU_RELRO`, la GOT queda de solo lectura: es el **RELRO completo**.

## 2. Metodología de análisis

Ante un binario desconocido, el orden es de lo barato a lo caro, y siempre en un entorno aislado
(máquina virtual sin red) si no se confía en él:

1. **Identificación**: `file`, hash SHA-256 (para citarlo e identificarlo), tamaño, y `strings`
   para ver texto incrustado.
2. **Estructura**: `readelf -h -l -S`, `nm`/`readelf --dyn-syms` (qué funciones importa),
   `ldd` (solo en un entorno de confianza: ejecuta el cargador).
3. **Análisis estático**: desensamblar (`objdump -d -M intel`, y con más comodidad Ghidra,
   radare2 o IDA) y reconstruir las funciones, el flujo de control y las estructuras de datos,
   leyendo el ensamblador como en [[sys-ensamblador-x86-64]]. Las convenciones de llamada del
   *System V ABI* indican qué registros contienen los argumentos (`rdi, rsi, rdx, rcx, r8, r9`).
4. **Análisis dinámico**: ejecutar bajo `gdb` (puntos de interrupción, inspeccionar pila y
   registros), `strace`/`ltrace` (llamadas al sistema y a bibliotecas) y `valgrind` o los
   *sanitizers*, que detectan accesos inválidos a memoria.
5. **Hipótesis y prueba**: formular qué hace cada función, y confirmarlo con una ejecución
   controlada. Documenta todo: lo que no se anota, se olvida.

## 3. Clases de errores de memoria

Todas nacen de lo mismo: C no comprueba límites ni vida útil de los objetos.

- **Desbordamiento de búfer** (*buffer overflow*): escribir más allá del final de un array, en
  la pila o en el montón. En la pila puede pisar variables vecinas y datos de control del marco
  de la función ([[sys-sistemas-operativos]] describe su disposición).
- **Uso tras liberación** (*use-after-free*) y **doble liberación**: usar o liberar de nuevo un
  bloque ya devuelto al asignador, que puede haberlo reutilizado para otro objeto.
- **Cadena de formato**: pasar datos del usuario como cadena de formato a `printf` y similares.
- **Desbordamiento de enteros**: una aritmética que da la vuelta, normalmente al calcular un
  tamaño; es la causa de muchos desbordamientos de búfer.
- **Error por uno** (*off-by-one*): un límite mal calculado en un solo elemento.

**Ejemplo: tamaño que da la vuelta.** En C, la aritmética de enteros sin signo es módulo $2^w$.
Si `n` y `sz` son de 32 bits,

```c
uint32_t n  = 0x40000001;      // 1 073 741 825 elementos
uint32_t sz = 4;
void *p = malloc(n * sz);      // n*sz = 2^32 + 4  ->  se reduce a 4 (mod 2^32)
for (uint32_t i = 0; i < n; i++) copiar(p, i);   // escribe ~4 GiB sobre una reserva de 4 bytes
```

Lo que se reserva (4 bytes) y lo que el bucle cree que tiene (4 GiB) difieren en exactamente
$2^{32}$ bytes. Es la regla CERT INT30-C. La defensa es comprobar antes de multiplicar o usar
las funciones del compilador:

```c
size_t total;
if (__builtin_mul_overflow(n, sz, &total)) abortar();   // detecta el desbordamiento
```

**Otro ejemplo clásico: `strncpy` no termina la cadena.** Si el origen es más largo que el
límite, `strncpy(dst, src, n)` copia $n$ bytes **sin** poner el `\0` final, y el siguiente
`strlen(dst)` lee fuera del búfer. Se corrige forzando `dst[n-1] = '\0'`, o usando una función de
longitud acotada que sí termine la cadena.

## 4. Mitigaciones

Un binario moderno no se defiende con una sola técnica sino con **defensa en profundidad**:

| Mitigación | Idea | Cómo reconocerla en un ELF |
|---|---|---|
| **NX / DEP** ($W \oplus X$) | Ninguna página es a la vez escribible y ejecutable | `PT_GNU_STACK` sin la bandera `E` |
| **Canario de pila** (Cowan et al., 1998) | Valor aleatorio entre las variables locales y los datos de control, comprobado al retornar; si cambió, se aborta | Símbolo `__stack_chk_fail` en `.dynsym` |
| **ASLR** | El sistema operativo coloca pila, montón y bibliotecas en direcciones aleatorias | `ET_DYN` (PIE) para aleatorizar también el ejecutable |
| **RELRO** | La GOT queda de solo lectura tras el enlazado | `PT_GNU_RELRO` y `BIND_NOW` (completo) |
| **FORTIFY_SOURCE** | Versiones con comprobación de límites de `memcpy`, `strcpy`... cuando el tamaño es conocido | Símbolos `__memcpy_chk`, `__strcpy_chk`... |
| **CFI / pila de sombra** | Restringe el flujo de control a destinos válidos y protege las direcciones de retorno | Instrucciones `endbr64`, soporte CET |

Los **canarios** de 64 bits suelen tener el byte menos significativo a cero (para frenar
errores con cadenas), de modo que su entropía efectiva es de 56 bits. La **entropía de ASLR**
depende de la plataforma: en Linux sobre x86-64 la aleatorización de proyecciones de memoria
usa por defecto 28 bits, y era de solo unos 16 bits en los sistemas de 32 bits que estudiaron, lo que
Shacham et al. (2004) mostraron que permite un ataque por fuerza bruta contra un servidor
que se reinicia con la misma disposición. Por eso aleatorizar *en cada reinicio* y vigilar los
cuelgues repetidos importa.

Dos matices importantes. Primero, **ninguna mitigación es absoluta**: NX por sí sola no
impide reutilizar código ya existente (Shacham, 2007, mostró que es suficiente para ejecutar
cómputo arbitrario), y eso empujó a ASLR, CFI y las pilas de sombra; es una carrera continua
(Szekeres et al., 2013). Segundo, **un fallo de memoria es una vulnerabilidad aunque hoy no se
sepa explotar**: se parchea siempre.

**Fortificar al compilar** con GCC o Clang:

```
gcc -O2 -fstack-protector-strong -D_FORTIFY_SOURCE=2 \
    -fPIE -pie -Wl,-z,relro,-z,now -Wl,-z,noexecstack \
    -fcf-protection=full -Wall -Wextra -Werror programa.c
```

Y probar con herramientas dinámicas: `-fsanitize=address,undefined` (ASan y UBSan) detectan
desbordamientos, uso tras liberación y comportamiento indefinido en tiempo de ejecución con poco
coste en pruebas.

## 5. Descubrimiento de vulnerabilidades y práctica profesional

- **Fuzzing**: alimentar al programa con entradas generadas y mutadas de forma automática y
  vigilar cuelgues (AFL++, libFuzzer, con ASan activado). Es hoy la técnica más productiva
  para encontrar errores de memoria en analizadores de formatos.
- **Triage de un fallo**: reproducir de forma determinista, minimizar la entrada, clasificar la
  causa raíz (qué invariante se rompió) y estimar el impacto; no todo fallo es explotable, pero
  todos son errores.
- **Marco ético y legal**: probar solo sistemas propios o con autorización escrita; divulgar de
  forma **coordinada** (avisar al fabricante, dar un plazo razonable, solicitar un CVE y
  puntuar con CVSS). Las competiciones CTF y los laboratorios como los de [[sec-web]] existen
  precisamente para practicar en un entorno legal.
- **Lenguajes seguros en memoria**: Rust, Go y los lenguajes con recolector eliminan por
  construcción clases enteras de estos errores. En código nuevo, son la mejor mitigación.

## Reto

Auditoría de un binario. Descarga el adjunto `auditoria.elf` (un ejecutable ELF de 64 bits,
inofensivo, compilado con GCC 14 con opciones de endurecimiento; la página del nodo muestra su
tamaño y su SHA-256). **No hace falta ejecutarlo**: es análisis estático de sus cabeceras.
Calcula seis enteros.

- **a.** Dirección del punto de entrada, en decimal. Valor de control: el campo `e_type` de un
  ejecutable PIE vale 3.
- **b.** Tamaño en bytes de la sección `.text`.
- **c.** Tamaño en el archivo (`p_filesz`) del segmento `PT_GNU_RELRO`.
- **d.** Número de entradas de la tabla `.dynsym`, **incluida** la entrada nula del principio.
- **e.** Con 28 bits de entropía de ASLR, una disposición que no cambia entre intentos y un
  atacante que prueba $k = 100\,000$ posiciones distintas sin repetir, la probabilidad de acertar
  es $k/2^{28}$. Entrega $\lfloor 10^9\,P\rfloor$. Valor de control: con 16 bits y 1000
  intentos, $\lfloor 10^9 P\rfloor = 15\,258\,789$.
- **f.** El ejemplo de la sección 3, con `n = 1073741825` y `sz = 4`: cuántos bytes más de los
  reservados escribiría el bucle (producto verdadero menos el producto envuelto). Valor de
  control: en 32 bits sin signo, `0xFFFFFFFF + 1` vale 0.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e-f}`
