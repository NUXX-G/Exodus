---
id: proy-sys-compilador
title: "Proyecto: un compilador de Mini a x86-64 (léxico, sintáctico, semántico, intérprete, generación de código con la ABI System V y plegado de constantes)"
area: bajo-nivel
trunk_level: 12
kind: proyecto
prerequisites: [sys-compiladores, sys-ensamblador-x86-64]
academic_sources:
  - "Aho, A. V.; Lam, M. S.; Sethi, R.; Ullman, J. D. Compilers: Principles, Techniques, and Tools, 2ª ed. Pearson, 2006."
  - "Nystrom, R. Crafting Interpreters. Genever Benning, 2021; Ghuloum, A. An Incremental Approach to Compiler Construction. Scheme Workshop, 2006."
  - "Matz, M.; Hubička, J.; Jaeger, A.; Mitchell, M. (eds.) System V Application Binary Interface, AMD64 Architecture Processor Supplement; y el manual de GNU as."
attachments: [prueba.sh, runtime.c]
exercises:
  - id: hito-1-lexico
    tier: 1
    prompt: |
      **Hito 1.** `mini lex ARCHIVO` imprime un token por línea con el formato `línea:columna TIPO lexema` (`NUM`, `ID`, `KW` u `OP`, según el §2) y al final `línea:columna EOF` con la posición justo después del último carácter. Comentarios `//` y espacios se descartan; un carácter que no pertenece al lenguaje o un número mayor que 9223372036854775807 es un error léxico: mensaje por la salida de error y código 1.

      Comprueba con `bash prueba.sh ./mini 1` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:27a5db49eecef0f45b1024d6ea4432e97c1ab0c223edb3119824968ea73069be"]
  - id: hito-2-sintactico
    tier: 1
    prompt: |
      **Hito 2.** `mini ast ARCHIVO` analiza el programa con la gramática del §2 e imprime cada función en una línea como expresión S, con el formato exacto del §3. Un error sintáctico (o léxico) termina con mensaje por la salida de error y código 1.

      Comprueba con `bash prueba.sh ./mini 2` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d9a61668912821e5bf77bf8bb1bd4433510db579cdb4a742447c9d731d493eff"]
  - id: hito-3-semantico
    tier: 2
    prompt: |
      **Hito 3.** `mini check ARCHIVO` aplica las reglas de ámbito y de funciones del §4 e imprime cada error como `línea:columna código nombre`, ordenados por posición, con código de salida 1; si no hay ninguno imprime `ok` y termina con 0.

      Comprueba con `bash prueba.sh ./mini 3` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d73c9ac3abf05b6cddf14fd4b0794f947ab19052cd2a822baa2fcbe63552a9d9"]
  - id: hito-4-interprete
    tier: 2
    prompt: |
      **Hito 4.** `mini run ARCHIVO` ejecuta el programa con la semántica del §5 (enteros de 64 bits en complemento a dos, división truncada, cortocircuito, evaluación de izquierda a derecha): `print` escribe el número y un salto de línea, el código de salida es el valor de `main` módulo 256, y una división por cero escribe un mensaje por la salida de error y termina con 3.

      Comprueba con `bash prueba.sh ./mini 4` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:eaefad3722f58ad7540c345180323eb92314570ddfc96f279f27f771a4f2cae7"]
  - id: hito-5-codigo-de-main
    tier: 2
    prompt: |
      **Hito 5.** `mini asm ARCHIVO` genera ensamblador x86-64 (GNU as, sintaxis AT&T o Intel) que, enlazado con `runtime.c`, se comporta igual que el intérprete. En este hito los programas solo tienen `main`: variables en el marco, expresiones, `if`, `while`, bloques con sombreado, cortocircuito y división por cero mediante `mini_div0`.

      Comprueba con `bash prueba.sh ./mini 5` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c9299ae319e7acf51aa12509facd755850ea7ef3744290a3b28bc412e3549078"]
  - id: hito-6-funciones
    tier: 3
    prompt: |
      **Hito 6.** Funciones con hasta 6 parámetros según la ABI System V (argumentos en `rdi`, `rsi`, `rdx`, `rcx`, `r8`, `r9`; resultado en `rax`), recursión (también mutua y de 50 000 niveles) y llamadas dentro de expresiones, con la pila alineada a 16 bytes en cada `call`.

      Comprueba con `bash prueba.sh ./mini 6` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:52861e73d28aed0f471a82e97b1719cfd76ca3995bcd558cd3bcdc209d647fff"]
  - id: hito-7-robustez-y-rendimiento
    tier: 3
    prompt: |
      **Hito 7.** Programas exigentes compilados: cuenta de primos por división hasta 200 000 en menos de 10 segundos, Ackermann, expresiones anidadas profundamente, aritmética en los límites de 64 bits y división por cero dentro de una llamada. Además, `mini asm` rechaza con código 1 los programas con errores sintácticos o semánticos.

      Comprueba con `bash prueba.sh ./mini 7` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:8f7da038130e46e8c4da08c745d551894fd38a559fa20f5be7da5a0d2cff775a"]
  - id: hito-8-plegado
    tier: 3
    prompt: |
      **Hito 8.** `mini fold ARCHIVO` imprime el AST (formato del §3) tras aplicar exactamente las reglas de plegado de constantes y eliminación de código muerto del §6.

      Comprueba con `bash prueba.sh ./mini 8` (en Linux x86-64 con gcc; `runtime.c` junto a `prueba.sh`).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4717cc1a283721e2f26b83247005a8cb1d1f5f416455e80d4b74bb04966a3127"]
---

Vas a escribir un compilador completo para **Mini**, un lenguaje pequeño pero de verdad (enteros de 64 bits, variables con ámbito de bloque, `if`, `while`, funciones recursivas), que produce
ensamblador x86-64 que se enlaza con GCC y se ejecuta. Es el proyecto que convierte [[sys-compiladores]] en una habilidad: cada fase que allí era teoría aquí tiene que funcionar con casos difíciles, y el
código que generas tiene que cumplir la ABI de [[sys-ensamblador-x86-64]] al bit o el programa se cae. La estrategia es la de Ghuloum (2006): un compilador que funciona de principio a fin desde el
primer día y que crece hito a hito, siempre comprobado.

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `mini` (en el lenguaje que quieras: Rust, C, C++, Python, OCaml…; el contrato es lo que importa) con seis órdenes:

| Orden | Hace | Hito |
|---|---|---|
| `mini lex ARCHIVO` | imprime los tokens | 1 |
| `mini ast ARCHIVO` | imprime el árbol de sintaxis | 2 |
| `mini check ARCHIVO` | comprueba ámbitos y funciones | 3 |
| `mini run ARCHIVO` | interpreta el programa | 4 |
| `mini asm ARCHIVO` | escribe ensamblador x86-64 por la salida estándar | 5, 6 y 7 |
| `mini fold ARCHIVO` | imprime el árbol tras plegar constantes | 8 |

El adjunto **`prueba.sh`** ejecuta tu compilador sobre programas preparados (y, desde el hito 5, ensambla tu salida con `gcc -o prog prog.s runtime.c` y ejecuta el binario) y da un código por hito si todo es
correcto; con `-v` muestra cada salida. El adjunto **`runtime.c`** es el entorno de ejecución: define `main` (que llama a tu `mini_main` y devuelve su valor módulo 256), `mini_imprime(long)` para `print`
y `mini_div0()` para la división por cero. Necesitas Linux x86-64 con gcc: por ejemplo `docker run --rm -it -v "$PWD":/w -w /w gcc:latest bash`.

Salvo que se diga otra cosa, los mensajes de error van por la **salida de error** y la prueba solo mira la salida estándar y el **código de salida**.

## 2. Léxico y gramática de Mini

**Tokens**:

- `NUM`: `[0-9]+`, valor de 0 a 9223372036854775807 (si es mayor, error léxico). Los ceros a la izquierda se admiten (`007`).
- `ID`: `[A-Za-z_][A-Za-z0-9_]*` que no sea palabra clave.
- `KW`: `func var if else while return print`.
- `OP`: `== != <= >= && ||` (se reconocen antes que los de un carácter) y `( ) { } , ; = < > + - * / % !`.
- Se descartan espacios, tabuladores, retornos de carro, saltos de línea y comentarios `//` hasta el final de la línea. Cualquier otro carácter (incluidos `&` y `|` sueltos o cualquier carácter no ASCII
  fuera de un comentario) es un **error léxico**.
- Las posiciones son `línea:columna`, ambas desde 1, contando caracteres (un tabulador cuenta como una columna). `12abc` son dos tokens: `NUM 12` e `ID abc`.

`mini lex` imprime un token por línea, `línea:columna TIPO lexema` (el lexema tal como está escrito), y termina con `línea:columna EOF`, con la posición justo después del último carácter del archivo (en un
archivo vacío, `1:1 EOF`).

**Gramática** (las llaves de los bloques son obligatorias):

```text
programa   → funcion*
funcion    → "func" ID "(" [ ID ("," ID)* ] ")" bloque
bloque     → "{" sentencia* "}"
sentencia  → "var" ID "=" expr ";"
           | ID "=" expr ";"
           | "if" "(" expr ")" bloque [ "else" ( bloque | sentencia_if ) ]
           | "while" "(" expr ")" bloque
           | "return" [ expr ] ";"
           | "print" "(" expr ")" ";"
           | bloque
           | expr ";"
expr       → y ( "||" y )*
y          → igualdad ( "&&" igualdad )*
igualdad   → relacion ( ( "==" | "!=" ) relacion )*
relacion   → suma ( ( "<" | "<=" | ">" | ">=" ) suma )*
suma       → producto ( ( "+" | "-" ) producto )*
producto   → unario ( ( "*" | "/" | "%" ) unario )*
unario     → ( "-" | "!" ) unario | primario
primario   → NUM | ID | ID "(" [ expr ( "," expr )* ] ")" | "(" expr ")"
```

Todos los operadores binarios asocian **por la izquierda**. Una sentencia que empieza por `ID` seguido de `=` es una asignación (hace falta mirar dos tokens). `1 = 2;` es un error sintáctico.

## 3. Formato del árbol (`mini ast` y `mini fold`)

Una línea por función, en el orden del archivo, como expresión S con un espacio entre elementos:

- Función: `(func nombre (p1 p2) BLOQUE)`; sin parámetros, `(func main () BLOQUE)`.
- Sentencias: `(block s1 s2 …)` (vacío: `(block)`), `(var x E)`, `(set x E)`, `(if E BLOQUE)`, `(if E BLOQUE OTRO)` (donde `OTRO` es un bloque o, para `else if`, otra sentencia `if`), `(while E BLOQUE)`,
  `(return E)`, `(return)`, `(print E)`, `(expr E)`.
- Expresiones: el número en decimal (`007` se imprime `7`), el nombre de la variable, `(op A B)` con el operador tal cual (`(+ a b)`, `(<= a b)`, `(&& a b)`), `(neg A)` para el menos unario,
  `(not A)` para `!` y `(call f A B)` para una llamada (sin argumentos, `(call f)`). Los paréntesis del código fuente no generan nodos.

Ejemplo: `func main() { var a = -(1 + 2) * 3; if (a < 0) { print(a); } }` da `(func main () (block (var a (* (neg (+ 1 2)) 3)) (if (< a 0) (block (print a)))))`.

## 4. Reglas semánticas (`mini check`)

- Las **funciones** forman un espacio de nombres global, separado del de las variables; se pueden llamar antes de su definición.
- Las **variables** tienen ámbito de **bloque**. Los parámetros y las declaraciones del bloque principal de la función comparten ámbito; un bloque interior puede **sombrear** una variable exterior.
- En `var x = E`, `E` se resuelve **antes** de declarar `x` (así, `var x = x;` usa la `x` exterior, si existe).

Errores (posición: la del identificador implicado; los globales, `0:0`):

| Código | Cuándo |
|---|---|
| `no-declarada x` | se usa o asigna una variable que no está en ningún ámbito visible |
| `redeclarada x` | se declara (variable o parámetro) un nombre que ya existe en el **mismo** ámbito |
| `funcion-desconocida f` | se llama a una función que no existe (los argumentos se comprueban igualmente) |
| `aridad f` | se llama con un número de argumentos distinto del de su **primera** definición |
| `funcion-duplicada f` | segunda o posterior definición de `f` |
| `demasiados-parametros f` | la función tiene más de 6 parámetros |
| `sin-main main` | no hay función `main` (posición `0:0`) |
| `main-con-parametros main` | `main` tiene parámetros |

Salida: cada error como `línea:columna código nombre`, ordenados por línea, columna y código; código de salida 1. Sin errores, `ok` y 0. Un error léxico o sintáctico termina con código 1.

## 5. Semántica de ejecución (`mini run` y el código generado)

- Todos los valores son **enteros de 64 bits con signo**; `+`, `-`, `*` y el menos unario **dan la vuelta** en complemento a dos (`9223372036854775807 + 1` vale `-9223372036854775808`).
- `/` **trunca hacia cero** y `%` tiene el signo del dividendo, como en C: `-7 / 2 = -3`, `-7 % 2 = -1`. Una división o resto por cero escribe un mensaje por la salida de error y termina con código **3**
  (el código generado llama a `mini_div0`). `-9223372036854775808 / -1` no se prueba.
- Las comparaciones y `!` valen 1 o 0. `&&` y `||` evalúan **en cortocircuito** y valen 1 o 0. Una condición es verdadera si es distinta de 0.
- Los operandos y los argumentos se evalúan **de izquierda a derecha**.
- `print(E)` escribe el valor en decimal y un salto de línea. Una función que termina sin `return`, o con `return;`, devuelve 0.
- El código de salida del programa es el valor que devuelve `main` **módulo 256** (`return -1;` da 255).
- `mini run` y `mini asm` rechazan con código 1, sin ejecutar ni generar nada, los programas con errores léxicos, sintácticos o semánticos.

## 6. Plegado de constantes y código muerto (`mini fold`)

`mini fold` no comprueba la semántica: pliega el árbol de abajo arriba con **exactamente** estas reglas, y lo imprime con el formato del §3 (un literal negativo se imprime con su signo, `-5`):

1. Un operador unario o binario aritmético o de comparación con **todos** sus operandos literales se sustituye por su valor (con la semántica del §5), salvo `/` y `%` con divisor 0, que se dejan.
2. `0 && E` vale `0` y `L || E` con `L` literal distinto de 0 vale `1`, aunque `E` no sea literal; si los dos operandos de `&&` o `||` son literales, se pliega a 0 o 1. Ninguna otra forma se simplifica
   (`x * 0`, `0 + x` y `1 && f(x)` se quedan como están).
3. Una llamada nunca se pliega, pero sí sus argumentos.
4. Un `if` con condición literal se sustituye por su bloque `then` (si es distinta de 0) o por su rama `else` (bloque o `if`, ya plegado); si no hay `else`, la sentencia **desaparece**. Si la rama `else` de un
   `if` desaparece al plegarse, queda un `if` sin `else`.
5. Un `while` con condición literal 0 desaparece.
6. En cada bloque, las sentencias que siguen a un `return` **de ese mismo bloque** se eliminan (un `return` dentro de un bloque anidado no corta el bloque exterior).

## 7. Generación de código: cómo empezar y qué tienes que respetar

La forma más sencilla que funciona es un **generador de pila**: cada expresión deja su valor en `rax`; para `A op B`, genera `A`, apila `rax`, genera `B`, mueve `rax` a `rcx`, desapila en `rax` y opera.

- **Marco**: `push rbp; mov rbp, rsp; sub rsp, N` con un hueco de 8 bytes por **declaración** de variable o parámetro (`[rbp-8]`, `[rbp-16]`…) y `N` múltiplo de 16; al salir, `leave; ret`. Los parámetros
  llegan en `rdi`, `rsi`, `rdx`, `rcx`, `r8` y `r9` y se copian a su hueco al entrar.
- **Llamadas**: evalúa los argumentos de izquierda a derecha guardándolos (en la pila o en temporales del marco), cárgalos en los registros y llama a `mini_nombre`. Todas tus funciones se llaman
  `mini_` + su nombre (así `main` no choca con el `main` de C ni `exit` con la biblioteca).
- **Alineación**: la ABI exige `rsp` múltiplo de 16 justo antes de cada `call`; `printf` (dentro de `mini_imprime`) puede caerse si no lo está. Si apilas temporales, lleva la cuenta de cuántos hay y
  corrige con `sub rsp, 8` cuando sean impares; la alternativa es no usar `push` y guardar los temporales en huecos del marco.
- **División**: `cqo` (o `cqto` en AT&T) extiende el signo de `rax` a `rdx` antes de `idiv`; el cociente queda en `rax` y el resto en `rdx`. Comprueba antes el divisor y salta a un trozo que alinee
  la pila (`and rsp, -16`) y llame a `mini_div0`.
- **Comparaciones**: `cmp` y `setl`/`setle`/`sete`… sobre `al`, y `movzx` a todo el registro. **Cortocircuito** con saltos, como en un `if`.
- **Constantes**: `movabs` admite los 64 bits; `mov` con inmediato solo 32 con signo.
- Añade al final `.section .note.GNU-stack,"",@progbits` para que el enlazador no avise de pila ejecutable.

## 8. Arquitectura recomendada

Un módulo por fase con tipos propios: tokens con posición; un AST como tipo suma (un `enum` en Rust, `std::variant` en C++, uniones etiquetadas en C); una tabla de símbolos como pila de tablas hash; y un
generador que recorre el AST. Escribe el **intérprete antes que el generador**: es tu oráculo, y con él puedes comparar cualquier programa (las pruebas del hito 5 en adelante son exactamente eso).
Mantén una carpeta `pruebas/` con programas `.mini` y su salida esperada y un guion que los pase todos por `run` y por `asm`.

## 9. Calidad exigida

- Mensajes de error con `línea:columna` y una explicación útil; el analizador no debe entrar en bucle ni caerse con ninguna entrada (pásale un *fuzzer*, por ejemplo con `cargo fuzz` o con AFL++, durante unos
  minutos: cualquier pánico o violación de segmento es un fallo).
- Sin avisos del compilador del lenguaje que uses, y con sanitizadores si es C o C++.
- Pruebas propias: unitarias por fase y de extremo a extremo comparando el intérprete con el código nativo en programas generados al azar (*differential testing*, la técnica de Csmith).

## 10. Ampliaciones

Asignación de registros por **barrido lineal** sobre una RI de tres direcciones, y comparar el tiempo del hito 7 con el del generador de pila; **SSA** y propagación de constantes condicional; arrays y
punteros; cadenas; un `for`; **mensajes de error con el fragmento de código subrayado**; un segundo trasero para **AArch64** (y ejecutarlo con `qemu-aarch64`); o emitir **LLVM IR** textual y dejar
que `clang` haga el resto, para comparar tu código con el de `-O2`.

## 11. Recursos

El libro del dragón (capítulos 2, 6 y 8), *Crafting Interpreters* (la segunda parte, la máquina virtual en C), el artículo de Ghuloum sobre construcción incremental de compiladores, la ABI System V para
AMD64 (paso de parámetros y alineación) y `gcc -S -O0` sobre un programa en C equivalente para ver cómo lo resuelve GCC.
