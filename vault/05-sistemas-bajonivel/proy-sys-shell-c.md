---
id: proy-sys-shell-c
title: "Proyecto: una shell de Unix en C (procesos, tuberías, redirecciones, comillas, operadores y segundo plano)"
area: bajo-nivel
trunk_level: 10
kind: proyecto
prerequisites: [sys-c-profesional, sys-procesos-planificacion, prog-bash-scripting]
academic_sources:
  - "Stevens, W. R.; Rago, S. A. Advanced Programming in the UNIX Environment, 3ª ed. Addison-Wesley, 2013."
  - "Kerrisk, M. The Linux Programming Interface. No Starch Press, 2010."
  - "IEEE; The Open Group. POSIX.1-2024, Shell Command Language (sintaxis y semántica que siguen las pruebas)."
attachments: [prueba.sh]
exercises:
  - id: hito-1-ejecutar-ordenes
    tier: 1
    type: codigo
    language: c
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** Tu shell lee órdenes línea a línea de la entrada estándar, las parte en palabras separadas por espacios y ejecuta cada una con `fork`, `execvp` y `waitpid`. Si la orden no existe, el estado es 127. `exit [n]` termina la shell con el código `n` (o el de la última orden). Las líneas vacías no hacen nada. Al acabar la entrada, la shell termina con el estado de la última orden.

      Comprueba con `bash prueba.sh ./mishell 1` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:fd42292ec88a4e0f0ea5bf6ae6ce90f242b9ed959dca48f4e2fb8ceabd2baf41"]
  - id: hito-2-variables-y-estado
    tier: 1
    type: codigo
    language: c
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** Expande `$NOMBRE`, `${NOMBRE}` (las inexistentes, a cadena vacía) y `$?` (estado de la última orden). Una palabra `NOMBRE=valor` sola es una asignación. Implementa como órdenes internas `cd [dir]` (en el propio proceso de la shell), `pwd` y `export NOMBRE=valor` (la variable debe llegar al entorno de los hijos).

      Comprueba con `bash prueba.sh ./mishell 2` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:fe7c808515474fdcfd84f75a9a64535bfe39dfb307159ee23c2905ad6945fd70"]
  - id: hito-3-redirecciones
    tier: 1
    type: codigo
    language: c
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** Implementa las redirecciones `< archivo`, `> archivo` (crea o trunca), `>> archivo` (añade) y `2> archivo`, aplicadas en el hijo con `open` y `dup2` antes de `execvp`.

      Comprueba con `bash prueba.sh ./mishell 3` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:1cd45e35c964d39cfa53a128e67040cfa915a2fed58fd9c498c9e903d813acff"]
  - id: hito-4-tuberias
    tier: 2
    type: codigo
    language: c
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** Implementa tuberías de cualquier longitud (`a | b | c`) con `pipe` y `dup2`, cerrando en cada proceso todos los extremos que no usa. El estado de una tubería es el de su última orden. Las redirecciones deben seguir funcionando dentro de una tubería.

      Comprueba con `bash prueba.sh ./mishell 4` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:64b5e0ca7a759ea8b8aa12ddac8130235ea50e12b6cb57f900806ffd955b4ea4"]
  - id: hito-5-comillas
    tier: 2
    type: codigo
    language: c
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** Implementa las comillas simples (todo literal) y dobles (literal salvo `$`; dentro, la barra solo escapa `\"`, `\$` y `\`), y la barra invertida fuera de comillas. Las partes entrecomilladas y sin comillas pegadas forman una sola palabra (`'a'"b"c` es `abc`).

      Comprueba con `bash prueba.sh ./mishell 5` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4945f39fe04850bef9f60354d9e2d3b230d058e93ee73aeaa180702f15d5248e"]
  - id: hito-6-operadores
    tier: 2
    type: codigo
    language: c
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** Implementa `;`, `&&` y `||` con la semántica de POSIX: misma precedencia, de izquierda a derecha, y una orden saltada no cambia `$?`.

      Comprueba con `bash prueba.sh ./mishell 6` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:1377286c7dadb26202f0fe41bf31e2f5073859f09c7848225450eceb47703258"]
  - id: hito-7-segundo-plano
    tier: 3
    type: codigo
    language: c
    harness: prueba.sh
    stage: 7
    prompt: |
      **Hito 7.** Implementa `orden &` (la shell no espera y sigue con la siguiente) y la orden interna `wait`, que espera a todos los procesos en segundo plano. Ningún proceso debe quedar zombi.

      Comprueba con `bash prueba.sh ./mishell 7` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:08ca81d1c4a74cadb190b316b87fdcf7ebaf37490b85fc1ca1514c0bc2718613"]
  - id: hito-8-guiones-completos
    tier: 3
    type: codigo
    language: c
    harness: prueba.sh
    stage: 8
    prompt: |
      **Hito 8.** Admite comentarios (`#` al principio de una palabra hasta el final de la línea; `a#b` es una palabra) y espacios al principio y al final, y ejecuta guiones completos que mezclan todo lo anterior.

      Comprueba con `bash prueba.sh ./mishell 8` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:5a41afc8f7b0fd62108759a9103458b5212d7de4481d3483055362c008e7259a"]
---

Vas a escribir **tu propia shell** en C: un programa que lee órdenes, las analiza y crea procesos para ejecutarlas, conectados por tuberías y redirecciones, como
`sh` o `bash`. Es el proyecto clásico de los cursos de sistemas operativos porque obliga a entender de verdad lo que en [[prog-bash-scripting]] usabas desde
fuera: qué hace `fork`, por qué `cd` no puede ser un programa externo, cómo un `|` conecta dos procesos, quién cierra cada descriptor y por qué aparecen procesos
zombis. Al terminar tendrás unas 600–1000 líneas de C de calidad profesional ([[sys-c-profesional]]), probadas automáticamente, y una comprensión del modelo de
procesos de Unix ([[sys-procesos-planificacion]]) que no da ningún libro por sí solo.

## 1. Qué vas a construir y cómo se evalúa

La shell lee órdenes de la **entrada estándar** (sin mostrar ningún indicador si la entrada no es una terminal: compruébalo con `isatty(0)`) y las ejecuta una por línea. El trabajo
se divide en **8 hitos**, cada uno con su contrato en la sección de ejercicios. El archivo adjunto **`prueba.sh`** ejecuta tu shell con una batería de casos de cada hito y muestra el
estado de cada caso y un **código**; si todos los casos son correctos, ese código es la respuesta del hito. Los casos siguen la semántica POSIX, así que tu shell debe comportarse como
`sh` en ellos.

> [!warning] Sobre el código de cada hito
> Ejecutar la prueba con `/bin/sh` en lugar de tu shell también da el código: hacerlo es hacerse trampas a uno mismo. El objetivo es que **tu** programa pase las pruebas; el código solo lo
> registra. Usa `-v` (`bash prueba.sh ./mishell 3 -v`) para ver qué imprime tu shell en cada caso y compararlo con lo que harías a mano.

## 2. Entorno

Las pruebas usan herramientas de GNU (`seq`, `sort`, `wc`, `sha256sum`, `timeout`), así que deben ejecutarse en **Linux**. En cualquier sistema con Docker:

```sh
docker run --rm -v "$PWD":/w -w /w gcc:latest bash -c 'make && bash prueba.sh ./mishell 1'
```

Compila siempre con `-std=c17 -Wall -Wextra -Wpedantic -Werror -g -fsanitize=address,undefined` mientras desarrollas: un error de memoria en una shell se manifiesta como fallos aleatorios
varias órdenes después.

## 3. Arquitectura recomendada

Separa el trabajo en tres capas, cada una con sus pruebas:

1. **Análisis léxico**: convierte una línea en una lista de *tokens* (palabras y operadores: `|`, `||`, `&&`, `;`, `&`, `<`, `>`, `>>`, `2>`). Aquí se resuelven las comillas, la barra invertida, los
   comentarios y la expansión de variables (porque `"$A"` y `'$A'` se expanden distinto). Es una máquina de estados: fuera de comillas, dentro de simples, dentro de dobles.
2. **Análisis sintáctico**: agrupa los *tokens* en una lista de **tuberías** separadas por `;`, `&&`, `||` o `&`; cada tubería es una lista de **órdenes simples**, y cada orden tiene sus argumentos
   y sus redirecciones. Una estructura posible: `struct Orden { char **argv; char *entrada, *salida, *error; bool anade; }` y `struct Tuberia { struct Orden *ordenes; size_t n; }`.
3. **Ejecución**: para cada tubería, crea los `pipe`, haz un `fork` por orden, en cada hijo conecta descriptores con `dup2`, aplica redirecciones y llama a `execvp`; en el padre cierra extremos
   y espera con `waitpid`. Las **órdenes internas** (`cd`, `exit`, `export`, `wait`, asignaciones) se ejecutan en el propio proceso de la shell, porque deben cambiar **su** estado.

```c
// sin-ejecutar (esqueleto orientativo: el bucle principal y la firma de cada capa)
int main(void) {
    char *linea = NULL;
    size_t cap = 0;
    int ultimo = 0;                         // el valor de $?
    while (getline(&linea, &cap, stdin) > 0) {
        Tokens t = analiza_lexico(linea, ultimo);   // comillas, $VAR, comentarios
        Programa p = analiza_sintaxis(&t);          // tuberías unidas por ; && || &
        ultimo = ejecuta(&p, ultimo);               // fork, pipe, dup2, execvp, waitpid
        libera(&p, &t);
    }
    free(linea);
    return ultimo;
}
```

## 4. Lo que tienes que entender (y donde suele fallar)

- **`fork` duplica el proceso**: después, padre e hijo ejecutan el mismo código; `fork` devuelve 0 en el hijo y el PID del hijo en el padre. Vacía `stdout` (`fflush`) antes de `fork`, o el texto
  pendiente en el búfer se imprimirá dos veces.
- **`execvp` reemplaza el programa** del proceso y solo vuelve si falla: en ese caso el hijo debe terminar con `_exit(127)` (orden no encontrada) o `_exit(126)`, nunca volver al bucle de la shell (tendrías
  dos shells leyendo la misma entrada).
- **Estado de salida**: `waitpid(pid, &st, 0)` y luego `WIFEXITED(st) ? WEXITSTATUS(st) : 128 + WTERMSIG(st)`.
- **Tuberías**: en una tubería de $n$ órdenes hay $n - 1$ `pipe`. Cada proceso debe **cerrar todos los extremos que no usa**; si un extremo de escritura queda abierto en cualquier proceso (incluida la
  shell), el lector nunca recibe fin de archivo y la tubería se cuelga. Es el error número uno de este proyecto.
- **Redirecciones** en el hijo, después de conectar la tubería y antes de `execvp`: `open` con `O_WRONLY | O_CREAT | O_TRUNC` (o `O_APPEND`) y permisos `0644`, `dup2`, `close`.
- **`cd`, `exit` y `export`** no pueden ser programas externos: un hijo que cambia de directorio no cambia el de la shell.
- **Zombis**: todo hijo terminado debe recogerse con `wait`/`waitpid`. En segundo plano, la shell no espera al lanzarlo, pero sí debe recogerlo después (`wait`, o un `waitpid(-1, ..., WNOHANG)` en cada vuelta).
- **Señales** (para la versión interactiva): la shell ignora `SIGINT` para que Ctrl-C no la mate, y los hijos restauran la acción por defecto antes de `execvp`.

## 5. Hitos

1. **Ejecutar órdenes**: dividir por espacios, `fork`/`execvp`/`waitpid`, 127, `exit`.
2. **Variables y estado**: `$NOMBRE`, `${NOMBRE}`, `$?`, asignaciones, `cd`, `pwd`, `export`.
3. **Redirecciones**: `<`, `>`, `>>`, `2>`.
4. **Tuberías** de cualquier longitud, combinadas con redirecciones.
5. **Comillas** simples, dobles y barra invertida.
6. **Operadores** `;`, `&&`, `||`.
7. **Segundo plano** con `&` y `wait`.
8. **Guiones completos** con comentarios.

Cada hito se apoya en los anteriores: las pruebas del hito 8 mezclan todo. Ejecuta todas las pruebas anteriores tras cada cambio (es tu batería de regresión).

## 6. Calidad exigida

Para considerar el proyecto terminado, además de los 8 códigos:

- Compila sin avisos con `-Wall -Wextra -Wpedantic` en GCC y Clang, y las 8 pruebas pasan con ASan y UBSan activados (sin fugas: ASan informa de ellas al terminar).
- `valgrind --track-fds=yes ./mishell < guion` no informa de descriptores abiertos al final.
- El código está dividido en módulos (`lexico.c`, `sintaxis.c`, `ejecucion.c`, `internas.c`) con cabeceras, y se construye con un `Makefile` con objetivos `all`, `test` y `clean`.
- Las funciones que pueden fallar devuelven un código de error que se comprueba, y la memoria de cada línea se libera.

## 7. Ampliaciones (para ir más allá)

Control de trabajos (`jobs`, `fg`, `bg`, grupos de procesos y `tcsetpgrp`), expansión de comodines (`glob`), subshells `( ... )` y agrupaciones `{ ...; }`, *here-documents* (`<<`), `2>&1`, historial y edición
de línea con `readline`, `$$` y `$!`, y una orden `source`. Cada una es un pequeño proyecto; las tres primeras son las que más enseñan.

## 8. Recursos

APUE (Stevens y Rago), capítulos 8 (procesos), 9 (relaciones entre procesos), 10 (señales) y 15 (comunicación entre procesos); *The Linux Programming Interface* (Kerrisk), capítulos 24 a 28 y 44;
el capítulo *Shell Command Language* de POSIX.1-2024 para la semántica exacta; y las páginas de manual `fork(2)`, `execvp(3)`, `pipe(2)`, `dup2(2)`, `waitpid(2)` y `open(2)`.
