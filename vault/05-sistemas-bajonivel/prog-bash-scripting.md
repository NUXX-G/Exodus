---
id: prog-bash-scripting
title: "Bash y sh POSIX a fondo: cómo lee el shell una línea, comillas y expansiones, redirecciones, control de errores, funciones, procesos y scripts robustos"
area: bajo-nivel
trunk_level: 3
prerequisites: [prog-terminal-linux-git]
academic_sources:
  - "Free Software Foundation. GNU Bash Reference Manual (Bash 5.3), 2025. https://www.gnu.org/software/bash/manual/"
  - "IEEE; The Open Group. POSIX.1-2024 (IEEE Std 1003.1-2024, Base Specifications Issue 8), Shell Command Language, 2024."
  - "Robbins, A.; Beebe, N. H. F. Classic Shell Scripting. O'Reilly, 2005."
exercises:
  - id: division-en-palabras
    tier: 1
    prompt: |
      ¿Qué imprime este script en bash?

      ```bash
      a="uno  dos"
      set -- $a "$a"
      echo $#
      ```

      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: arroba-y-asterisco
    tier: 1
    prompt: |
      ¿Qué imprimen las tres llamadas?

      ```bash
      f() { echo $#; }
      set -- "a b" c
      f "$@"
      f "$*"
      f $*
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:512eedceb334d3564fbee5c298f79d495bb81e66920ea553a15cc922cbcee875"]
  - id: recortar-rutas
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```bash
      ruta=/var/log/nginx/access.log.2.gz
      echo "${ruta##*/}"
      echo "${ruta%%.*}"
      echo "${ruta#*.}"
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:3fabfd812a5a6649689bc0a05ac6dcdb4c00a68cdde72bfbdf2384fa8850b242"]
  - id: y-o-logicos
    tier: 1
    prompt: |
      ¿Qué imprime? (Recuerda que `&&` y `||` tienen la misma precedencia y se asocian por la izquierda.)

      ```bash
      false || echo A && echo B
      true && false || echo C
      echo $?
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:86fff2aef685125f7aa13597ef45c922cb9bad688304fc1228052c8a170b976a"]
  - id: aritmetica
    tier: 1
    prompt: |
      ¿Qué imprime la expansión aritmética?

      ```bash
      x=7 y=3
      echo $(( x / y )) $(( x % y )) $(( 2 * 2 * 2 )) $(( x > y ? x : y )) $(( -x / y ))
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:10ecff381c7ce45436f14bde202d13b1270efcd74b7778d253d5069a6d711866"]
  - id: orden-de-redirecciones
    tier: 1
    prompt: |
      Las redirecciones se aplican de izquierda a derecha. ¿Qué imprime cada `wc -l`?

      ```bash
      { echo out; echo err >&2; } 2>&1 >/dev/null | wc -l
      { echo out; echo err >&2; } >/dev/null 2>&1 | wc -l
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:8f42786de6c4830af682e9e652094033da177111ab13c8ec6bb20af2c9019249"]
  - id: tuberia-y-subshell
    tier: 1
    prompt: |
      ¿Qué imprime en bash (sin `shopt -s lastpipe`)?

      ```bash
      n=0
      printf 'a\nb\nc\n' | while read -r l; do n=$((n+1)); done
      echo $n
      n=0
      while read -r l; do n=$((n+1)); done < <(printf 'a\nb\nc\n')
      echo $n
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:29146eb203a325319fce1b33a3812e9fd3662bf8589143019f76c13a2901b0cf"]
  - id: arrays-asociativos
    tier: 2
    prompt: |
      ¿Qué dos líneas imprime?

      ```bash
      declare -A c
      for w in rojo azul rojo verde rojo azul; do c[$w]=$(( ${c[$w]:-0} + 1 )); done
      for k in "${!c[@]}"; do echo "$k ${c[$k]}"; done | sort -k2,2nr -k1,1 | head -n 2
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:2795bf9d051d26e4b12c4c0ca2a8234e7ab5b975a4b0b7b5de090b53c0889e9f"]
  - id: globs
    tier: 2
    prompt: |
      En un directorio nuevo con `a.txt`, `b.txt` y `c d.txt`, ¿qué imprime cada bucle?

      ```bash
      cd "$(mktemp -d)" || exit 1
      touch a.txt b.txt "c d.txt"
      for f in *.txt; do echo "[$f]"; done | wc -l
      for f in $(ls *.txt); do echo "[$f]"; done | wc -l
      for f in *.log; do echo "[$f]"; done
      shopt -s nullglob
      for f in *.log; do echo "[$f]"; done | wc -l
      ```

      Respuesta: las cuatro salidas separadas por `;`.
    answers: ["sha256:600dabd061d045223d7186d78d61a5d32308a484385358983075e4e16d4d27a0"]
  - id: set-e
    tier: 2
    prompt: |
      `set -e` tiene excepciones. ¿Qué imprime?

      ```bash
      set -e
      f() { false; echo "sigue"; }
      f || echo "fallo"
      echo "fin"
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:143680aa963068d9e47cbb4a70b0802f02e6074f842f68af3c8ff6e3f579cdf3"]
  - id: pipefail
    tier: 2
    prompt: |
      ¿Qué estados imprime?

      ```bash
      set -o pipefail
      false | true; echo $?
      true | false | true; echo $?
      set +o pipefail
      false | true; echo $?
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:5a3d93a0100f6a4edf01ac65b43baee70a0776ed25eab1da26dd1b19e5cfcc35"]
  - id: trap-en-subshell
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```bash
      ( trap 'echo adios' EXIT; echo uno; exit 3 )
      echo "estado $?"
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:246022c56ccc9b141892c2e59e0bde59fcb3c16c4dd6e07741830b9f7847f780"]
  - id: getopts
    tier: 2
    prompt: |
      ¿Qué imprimen las tres llamadas a `parse`?

      ```bash
      parse() {
        local OPTIND opt v=0 o=""
        while getopts ":vo:" opt; do
          case $opt in
            v) v=$((v+1)) ;;
            o) o=$OPTARG ;;
            :) echo "falta argumento para -$OPTARG"; return 2 ;;
            \?) echo "opción -$OPTARG desconocida"; return 2 ;;
          esac
        done
        shift $((OPTIND-1))
        echo "v=$v o=$o resto=$#"
      }
      parse -vv -o salida.txt a b
      parse -v -x
      parse -o
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:152393ab416e9ec015bf6ce67d083ae1effe80dff9f5deb1b586e0ae5f43a524"]
  - id: sustitucion-de-ordenes
    tier: 2
    prompt: |
      ¿Qué longitudes imprime?

      ```bash
      s=$(printf 'ab\n\n\n')
      echo ${#s}
      t=$(printf 'ab\n\n\nx')
      echo ${#t}
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:6355d91d8f5e1a96483239e451524953c412f4ca952c24cde3c78175c6cc3e32"]
  - id: registro-de-accesos
    tier: 3
    prompt: |
      Este es un fragmento de un registro de acceso de nginx (formato combinado simplificado: IP, fecha, petición, estado, bytes):

      ```text
      203.0.113.7 - - [13/Nov/2026:10:00:01 +0000] "GET /index.html HTTP/1.1" 200 5120
      198.51.100.23 - - [13/Nov/2026:10:00:02 +0000] "POST /api/login HTTP/1.1" 500 312
      203.0.113.7 - - [13/Nov/2026:10:00:03 +0000] "GET /api/items HTTP/1.1" 503 0
      192.0.2.44 - - [13/Nov/2026:10:00:04 +0000] "GET /logo.png HTTP/1.1" 200 20480
      198.51.100.23 - - [13/Nov/2026:10:00:05 +0000] "POST /api/login HTTP/1.1" 500 312
      192.0.2.44 - - [13/Nov/2026:10:00:06 +0000] "GET /missing HTTP/1.1" 404 153
      203.0.113.7 - - [13/Nov/2026:10:00:07 +0000] "GET /api/items HTTP/1.1" 502 0
      198.51.100.23 - - [13/Nov/2026:10:00:08 +0000] "POST /api/login HTTP/1.1" 500 312
      192.0.2.44 - - [13/Nov/2026:10:00:09 +0000] "GET /api/items HTTP/1.1" 200 2048
      203.0.113.7 - - [13/Nov/2026:10:00:10 +0000] "GET /api/items HTTP/1.1" 504 0
      198.51.100.23 - - [13/Nov/2026:10:00:11 +0000] "GET /index.html HTTP/1.1" 304 0
      203.0.113.7 - - [13/Nov/2026:10:00:12 +0000] "GET /api/items HTTP/1.1" 500 0
      192.0.2.44 - - [13/Nov/2026:10:00:13 +0000] "PUT /api/items/9 HTTP/1.1" 201 64
      ```

      Escribe una tubería (awk, sort, head…) que responda: ¿qué IP recibió más respuestas 5xx y cuántas, y cuántos bytes suman las respuestas 2xx?

      Respuesta: `ip;numero;bytes`.
    answers: ["sha256:f5403dc83ae2d644368030d0f0e49914a1932c6cc8879ce75983794a52846ae6"]
  - id: trabajos-en-paralelo
    tier: 3
    prompt: |
      Se lanzan cuatro trabajos en segundo plano y se recoge el estado de cada uno. ¿Qué imprime?

      ```bash
      pids=()
      for n in 1 2 3 4; do
        ( sleep "0.$n"; exit $(( n % 3 )) ) &
        pids+=("$!")
      done
      fallos=0 suma=0
      for p in "${pids[@]}"; do
        wait "$p"; st=$?
        suma=$(( suma + st ))
        if [ "$st" -ne 0 ]; then fallos=$(( fallos + 1 )); fi
      done
      echo "$fallos $suma"
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef"]
  - id: resumen-de-notas
    tier: 2
    type: codigo
    language: bash
    prompt: |
      **Ejercicio de código.** Escribe `solucion.sh`, que lee de la entrada estándar líneas con el formato `nombre nota`
      (separados por espacios o tabuladores; la nota es un número con punto decimal) y escribe:

      ```
      alumnos: <cuántos>
      media: <media con 2 decimales>
      mejor: <nombre> <nota tal como aparece en la entrada>
      ```

      - Ignora las líneas vacías (o solo con espacios) y las que empiezan por `#` (aunque tengan espacios delante).
      - Si hay empate en la mejor nota, gana **el primero** que aparece.
      - Si no hay ningún alumno, escribe `sin datos` y termina con **código de salida 1**.

      Pruébalo con `bash prueba.sh resumen-de-notas -- bash solucion.sh` y pega el código que imprime.
    template: |
      #!/usr/bin/env bash
      # Resumen de notas: lee líneas «nombre nota» de la entrada estándar.
      set -u

      # Tu código aquí (puedes usar un bucle while read o awk).
    cases: [{"name":"basico","stdin":"ana 7.5\nluis 6\nmarta 9.25\n"},{"name":"comentarios","stdin":"# lista de 1.º B\n\nana 5\n   # repetidor\npedro 8\n\n"},{"name":"empate","stdin":"ana 8\nbea 8\ncarlos 7\n"},{"name":"tabuladores","stdin":"ana\t10\nbea\t0\n"},{"name":"decimales","stdin":"x 3.333\ny 3.334\n"},{"name":"sin-salto-final","stdin":"ana 4\nbea 6"},{"name":"vacio","stdin":""},{"name":"solo-comentarios","stdin":"# nada\n\n   \n"}]
    answers: ["sha256:45b0f2c93db844963adfc2e631cc56374d2242cef6fe86535b638314afa8955d"]
---

El shell es el pegamento de todo sistema Unix: arranque de servicios, compilación, despliegues, CI, copias de seguridad, análisis
de registros, contenedores. Casi todo ingeniero escribe scripts de shell, y casi todos los escriben mal, porque el lenguaje tiene
reglas que no se parecen a las de ningún otro: las variables se trocean en palabras, los asteriscos se convierten en nombres de
archivo, un error no detiene el script y una tubería esconde los fallos. Este nodo explica **cómo funciona de verdad** el shell (el
orden de las expansiones, las comillas, las redirecciones, los procesos) para que escribas scripts que no fallan con un nombre de
archivo con espacios, que se detienen cuando algo va mal y que otra persona puede mantener. Se apoya en el uso básico de la terminal de
[[prog-terminal-linux-git]] y cubre bash (el shell de casi todos los Linux) y el sh **POSIX** (el que hay que usar cuando el script debe
funcionar en cualquier sistema).

## Objetivos

Al terminar sabrás:

1. Predecir qué hace el shell con una línea: análisis, expansiones en su orden, división en palabras, globs y eliminación de comillas.
2. Usar comillas, parámetros especiales y expansiones de parámetros (recortes, valores por defecto, sustituciones) sin sorpresas.
3. Dominar redirecciones, here-documents, sustitución de procesos y descriptores de archivo.
4. Controlar errores con estados de salida, `set -euo pipefail` (y sus límites), `trap` y códigos de salida coherentes.
5. Escribir funciones, procesar opciones con `getopts`, trabajar con arrays y leer archivos línea a línea correctamente.
6. Lanzar y coordinar procesos (segundo plano, `wait`, señales, paralelismo limitado).
7. Escribir scripts portables (POSIX) cuando haga falta, y revisarlos con ShellCheck y pruebas.

## Qué debes dominar antes

[[prog-terminal-linux-git]]: moverte por el sistema de archivos, permisos, tuberías básicas, variables de entorno y Git. Conviene haber visto
los procesos de [[sys-procesos-planificacion]] (fork, exec, estados de salida, señales), porque el shell es, sobre todo, un lanzador de procesos.

> [!question] Test de entrada
> 1. ¿Qué hace `ls | wc -l`?
> 2. ¿Qué diferencia hay entre `>` y `>>`?
> 3. ¿Qué significa que un programa termine con estado 0?
>
> Respuestas: cuenta las líneas que imprime `ls` (una por archivo cuando la salida no es una terminal); `>` trunca el archivo y `>>` añade al final;
> que terminó con éxito (cualquier otro valor es un fallo).

## 1. Para qué sirve

- **Automatizar**: tareas repetidas (copias, rotación de registros, limpieza, informes) que corren en `cron` o en temporizadores de systemd.
- **Integración y despliegue continuos**: los pasos de GitHub Actions, GitLab CI o un `Makefile` son órdenes de shell.
- **Contenedores e infraestructura**: `Dockerfile`, scripts de entrada de contenedores, provisión de máquinas.
- **Diagnóstico y análisis**: combinar `grep`, `awk`, `sort` y compañía sobre registros de gigabytes en segundos (`prog-unix-texto`).
- **Seguridad**: auditoría de sistemas y respuesta a incidentes se hacen en gran parte desde el shell; y los scripts mal escritos
  (sin comillas, con `eval`) son vulnerables a inyección de órdenes.

## 2. Cómo lee el shell una línea

Entender este orden es lo que separa a quien escribe scripts de quien los depura a ciegas. Para cada orden simple el shell:

1. **Separa en palabras y operadores** (tokens) respetando las comillas: `|`, `&&`, `;`, `>`… son operadores.
2. Reconoce **asignaciones** (`VAR=valor orden` solo afecta a esa orden) y **redirecciones**.
3. Aplica las **expansiones**, en este orden (manual de Bash, §3.5):
   1. de llaves `{a,b}` y `{1..5}` (solo bash);
   2. de tilde `~`, de **parámetros** `$x` y `${x}`, **aritmética** `$(( ))` y **sustitución de órdenes** `$( )`, de izquierda a derecha
      (también la sustitución de procesos `<( )`);
   3. **división en palabras**: el resultado de las expansiones **sin comillas** se trocea por los caracteres de `IFS` (espacio, tabulador y
      salto de línea por defecto);
   4. **expansión de nombres de archivo** (globs `*`, `?`, `[...]`) sobre las palabras **sin comillas**;
   5. **eliminación de comillas**.
4. Ejecuta: si la primera palabra es una función, una orden interna (`cd`, `read`, `echo`…) o un programa del `PATH`.

La consecuencia práctica: **lo que sale de una expansión sin comillas se vuelve a trocear y a interpretar como glob**. `rm $f` con
`f="mi archivo.txt"` intenta borrar `mi` y `archivo.txt`; con `f="*"`, borra todo. La regla de oro: **entrecomilla toda expansión**
(`"$f"`, `"$(orden)"`, `"${array[@]}"`) salvo que quieras explícitamente la división.

## 3. Comillas y parámetros especiales

- **Simples** `'...'`: todo literal, sin excepción (no se puede incluir una comilla simple dentro).
- **Dobles** `"..."`: literal salvo `$`, `` ` `` y `\`; impiden la división en palabras y los globs.
- **ANSI-C** `$'...'` (bash y POSIX 2024): interpreta escapes, `$'a\tb\n'`.
- **Barra** `\`: escapa el carácter siguiente fuera de comillas.

Parámetros especiales: `$0` (nombre del script), `$1…$9`, `${10}`, `$#` (número de argumentos), `$?` (estado de la última orden), `$$`
(PID del shell), `$!` (PID del último proceso en segundo plano), `$-` (opciones activas). Y los dos que más confunden:

- `"$@"` se expande a **un argumento por parámetro**, intactos. Es casi siempre lo que quieres para reenviar argumentos.
- `"$*"` une todos los parámetros en **una sola palabra** separada por el primer carácter de `IFS`.
- `$@` y `$*` sin comillas se dividen en palabras: pierdes los espacios internos.

## 4. Expansión de parámetros

Sin llamar a programas externos (y por tanto, mucho más rápido en bucles):

| Forma | Resultado |
|---|---|
| `${x:-def}` | `x` si está definida y no vacía; si no, `def` |
| `${x:=def}` | igual, y además asigna `def` a `x` |
| `${x:?mensaje}` | aborta con `mensaje` si `x` está vacía o sin definir |
| `${x:+alt}` | `alt` si `x` no está vacía; si no, nada |
| `${#x}` | longitud |
| `${x#patrón}`, `${x##patrón}` | quita el prefijo más corto o más largo que case con el glob |
| `${x%patrón}`, `${x%%patrón}` | quita el sufijo más corto o más largo |
| `${x/a/b}`, `${x//a/b}` | sustituye la primera o todas las apariciones (bash) |
| `${x:inicio:long}` | subcadena (bash) |
| `${x^^}`, `${x,,}` | mayúsculas, minúsculas (bash ≥ 4) |

`${ruta##*/}` es `basename`; `${ruta%/*}` es `dirname`; `${archivo%.*}` quita la última extensión. La **expansión aritmética** `$(( ))` trabaja con
enteros con signo de 64 bits, divide truncando hacia cero (`-7 / 3` es `-2`) y admite el operador ternario y los de bits.

**Arrays** (bash): indexados, `a=(uno dos "tres cuatro")`, `"${a[@]}"`, `${#a[@]}`, `a+=(cinco)`; y **asociativos** (bash ≥ 4), `declare -A m; m[clave]=valor`,
`"${!m[@]}"` para las claves (en orden no especificado). `mapfile -t lineas < archivo` lee un archivo en un array. El sh POSIX no tiene arrays:
solo `"$@"`, que se puede reconstruir con `set --`.

## 5. Estados de salida, condiciones y bucles

Cada orden termina con un **estado**: 0 es éxito, 1–125 fallos definidos por el programa, 126 "no ejecutable", 127 "no encontrado", y
128 + n "terminado por la señal n" (130 = Ctrl-C). `if`, `while`, `&&` y `||` deciden con ese estado, no con valores lógicos: `if grep -q error log;`
es la forma idiomática. `&&` y `||` tienen la **misma precedencia** y se agrupan por la izquierda: `a || b && c` es `(a || b) && c`.

Para comparar: `[ ... ]` (la orden `test`, POSIX) necesita comillas y espacios en todo (`[ "$x" = "si" ]`, `-eq`, `-lt` para números, `-f`, `-d`, `-z`, `-n`);
`[[ ... ]]` (bash) no divide palabras, admite `&&`, `||`, patrones (`[[ $f == *.txt ]]`) y expresiones regulares (`[[ $s =~ ^v([0-9]+)$ ]]`, con el grupo en
`BASH_REMATCH`); `(( ... ))` evalúa aritmética (`(( n > 3 ))`). `case` compara con globs y es la forma limpia de despachar opciones.

**Leer un archivo línea a línea** sin romper nada: `while IFS= read -r linea; do ...; done < archivo`. `IFS=` conserva los espacios de los extremos, `-r`
conserva las barras. Y atención: los elementos de una **tubería** corren en **subshells**, así que `cat f | while read ...; do n=$((n+1)); done`
pierde `n` al terminar; redirige el archivo al bucle, o usa sustitución de procesos `< <(orden)`.

## 6. Redirecciones, descriptores y here-documents

Los descriptores 0, 1 y 2 son entrada, salida y error estándar. Las redirecciones se aplican **de izquierda a derecha**, y `2>&1` significa
"haz que 2 apunte adonde apunta 1 **ahora**": `orden >f 2>&1` manda ambos a `f`, mientras que `orden 2>&1 >f` manda el error a donde iba la salida
(la terminal o la tubería) y la salida a `f`. Otras formas: `&>f` (bash, ambos), `2>/dev/null`, `<<'FIN'` (here-document literal; sin comillas en
`FIN` se expanden variables), `<<-` (quita tabuladores iniciales), `<<<` (here-string, bash), `exec 3>registro.txt` (abre un descriptor para todo el
script), `>|` (sobrescribe aunque `set -o noclobber`). La **sustitución de procesos** `diff <(sort a) <(sort b)` pasa la salida de una orden como si
fuera un archivo.

La **sustitución de órdenes** `$(orden)` captura la salida **quitando todos los saltos de línea finales** (no los intermedios). Bash 5.3 añade
`${ orden; }`, que la ejecuta en el shell actual sin crear un subproceso.

## 7. Funciones, ámbito y subshells

`nombre() { ...; }` define una función; recibe `$1…`, `$#`, `"$@"` propios y devuelve un estado con `return` (0–255). Las variables son
**globales** salvo que se declaren con `local` (bash y dash lo admiten, aunque POSIX no lo exige). Para devolver datos, se imprimen y se capturan
con `$( )`. `( ... )` ejecuta en un **subshell** (los cambios de variables, de directorio o los `exit` no salen de él); `{ ...; }` agrupa en el shell
actual. `exit` termina el script; dentro de `( )` solo el subshell.

`getopts` procesa opciones cortas al estilo POSIX (`-v -o archivo`, agrupadas `-vo archivo`), con `OPTARG` y `OPTIND`; un `:` inicial en la cadena de
opciones activa el modo silencioso para dar tus propios mensajes. Para opciones largas, un `case` sobre `"$1"` con `shift`.

## 8. Robustez: modo estricto, trap y código defensivo

Un script de producción empieza así:

```sh
#!/usr/bin/env bash
set -Eeuo pipefail
```

- `-e` (errexit): termina si una orden falla. **No es un seguro total**: se ignora en las condiciones de `if`/`while`, en todos los elementos de `&&`/`||`
  salvo el último, en las órdenes negadas con `!`, y **dentro de una función** llamada en uno de esos contextos (por eso `f || echo fallo` puede seguir
  ejecutando `f` tras un fallo interno). Tampoco lo dispara un fallo dentro de `$( )` en una asignación compuesta como `local x=$(...)`.
- `-u` (nounset): usar una variable sin definir es un error (atrapa erratas como `$archvo`).
- `-o pipefail`: el estado de una tubería es el del último elemento que falló, no el del último elemento (incorporado a POSIX en la edición de 2024;
  los shells mínimos lo van adoptando, así que en `#!/bin/sh` comprueba tu versión).
- `-E`: las funciones y subshells heredan el `trap ERR`.

`trap 'orden' EXIT` se ejecuta al terminar el script por cualquier camino: es el lugar para **limpiar** (borrar temporales creados con `mktemp`, liberar
bloqueos). `trap ... INT TERM` reacciona a señales. Otras costumbres de oficio: mensajes de error a la salida de error (`printf '...\n' >&2`), estados
de salida significativos, `printf` en vez de `echo` para datos (el comportamiento de `echo` con `-n` o barras varía entre shells), `--` antes de
argumentos que podrían empezar por `-` (`rm -- "$f"`), y nunca `eval` con datos externos.

**ShellCheck** detecta automáticamente la mayoría de estos errores (variables sin comillas, `for f in $(ls)`, `cd` sin comprobar…): úsalo siempre,
también en el editor y en la CI. Las pruebas automatizadas se escriben con **bats-core**.

## 9. Procesos y paralelismo

`orden &` la lanza en segundo plano y deja su PID en `$!`; `wait pid` espera y devuelve su estado; `wait` sin argumentos espera a todos (pero pierde
los estados); `wait -n` (bash ≥ 4.3) espera al primero que termine, lo que permite limitar la concurrencia: lanzar hasta $k$ trabajos y, cuando hay $k$,
esperar a uno antes de lanzar otro. `xargs -P k` hace lo mismo sobre una lista de argumentos. `kill -TERM pid` envía una señal; `timeout 10s orden` mata
la orden si se pasa de tiempo. Una tubería `a | b` lanza ambos procesos a la vez, conectados por un buffer del núcleo.

## 10. POSIX sh frente a bash

En Debian y Ubuntu `/bin/sh` es **dash**, que solo implementa POSIX (y es mucho más rápido arrancando); en Alpine es **BusyBox ash**; macOS trae un
bash 3.2 antiguo (sin arrays asociativos) y usa zsh por defecto. Si el script empieza por `#!/bin/sh`, no puede usar **bashismos**: `[[ ]]`, arrays,
`{1..5}`, `${x//a/b}`, `<( )`, `$'...'` (hasta POSIX 2024), `function`, `==` en `[ ]`, `source` (es `.`), `local` (en la práctica, sí está en dash). Si
necesitas bash, decláralo: `#!/usr/bin/env bash`. `checkbashisms` y ShellCheck con `-s sh` revisan la portabilidad.

**Cuándo no usar shell**: estructuras de datos complejas, aritmética con decimales, JSON (salvo con `jq`), más de unos pocos cientos de líneas o
lógica que necesite pruebas exhaustivas: Python, Go o Rust serán más claros y seguros.

> [!example] Ejemplo resuelto 1: el esqueleto de un script de producción
> Un script de copias que comprime un directorio en un destino y conserva solo las $n$ copias más recientes. Lo esencial: modo estricto, `usage` en la
> salida de error, opciones con `getopts`, validación de argumentos, temporal con `mktemp` y `trap` que lo borra, nombres de archivo con fecha
> ordenables (`AAAAmmdd-HHMMSS`) y rotación con un array ordenado en vez de `ls | tail`.
>
> ```sh
> #!/usr/bin/env bash
> set -Eeuo pipefail
> usage() { printf 'uso: %s [-n copias] origen destino\n' "${0##*/}" >&2; exit 2; }
> n=7
> while getopts ':n:' o; do case $o in n) n=$OPTARG ;; *) usage ;; esac; done
> shift $((OPTIND - 1)); [ $# -eq 2 ] || usage
> origen=$1 destino=$2
> [[ $n =~ ^[1-9][0-9]*$ ]] || { echo "n inválido: $n" >&2; exit 2; }
> tmp=$(mktemp) && trap 'rm -f "$tmp"' EXIT
> tar -czf "$tmp" -C "$(dirname "$origen")" "$(basename "$origen")"
> mv -- "$tmp" "$destino/copia-$(date +%Y%m%d-%H%M%S).tar.gz"
> mapfile -t copias < <(printf '%s\n' "$destino"/copia-*.tar.gz | sort)
> for (( i = 0; i < ${#copias[@]} - n; i++ )); do rm -- "${copias[i]}"; done
> ```
>
> Cada línea evita un error real: sin `pipefail`, un `tar` que falla en medio de una tubería pasaría desapercibido; sin comillas, un directorio con
> espacios rompería todo; sin `--`, un archivo llamado `-rf` sería una opción.

> [!example] Ejemplo resuelto 2: recorrer archivos con nombres hostiles
> Un nombre de archivo en Unix puede contener espacios, tabuladores, comodines y hasta saltos de línea; el único carácter prohibido es el byte nulo.
> Por eso la única forma totalmente segura de pasar listas de archivos es separarlas con `\0`: `find . -type f -name '*.log' -print0 | xargs -0 gzip`, o
> en un bucle, `while IFS= read -r -d '' f; do ...; done < <(find . -type f -print0)`. `for f in $(find ...)` o `for f in $(ls)` dividen por espacios e
> interpretan globs; `for f in ./*` (el glob directamente) sí es seguro, pero si no hay coincidencias deja el patrón literal salvo que actives
> `shopt -s nullglob`.

> [!example] Ejemplo resuelto 3: paralelismo con límite (con menos ayuda)
> Tienes 20 tareas (simuladas con `sleep`) y quieres ejecutarlas de 4 en 4, contando cuántas fallan. Escribe un bucle que lance cada tarea en segundo
> plano, y cuando haya 4 en marcha, espere a cualquiera con `wait -n` antes de lanzar la siguiente; al final, espera a las restantes. Comprueba en el
> programa de la sección siguiente que nunca hay más de 4 a la vez y que el recuento de fallos es correcto. ¿Por qué no basta con `wait` sin argumentos
> para contar fallos?

## 11. Comprobar con un programa

Este bloque se ejecuta tal cual en bash 5.3 y pasa ShellCheck: comprueba con aserciones la división en palabras, las expansiones del §4, el ejemplo
2 con un nombre de archivo que contiene un salto de línea, la rotación del ejemplo 1 y el paralelismo limitado del ejemplo 3.

```bash
#!/usr/bin/env bash
set -Eeuo pipefail

fallos=0
ok() { if [ "$1" = "$2" ]; then printf 'ok   %s\n' "$3"; else printf 'MAL  %s: «%s» frente a «%s»\n' "$3" "$1" "$2"; fallos=$((fallos + 1)); fi; }

# 1. División en palabras y "$@".
cuenta() { echo "$#"; }
v="a  b"
# shellcheck disable=SC2086  # aquí queremos la división para comprobarla
ok "$(cuenta $v)" 2 "sin comillas se divide"
ok "$(cuenta "$v")" 1 "con comillas no"
set -- "x y" z
ok "$(cuenta "$@")" 2 '"$@" conserva los argumentos'
ok "$(cuenta "$*")" 1 '"$*" los une'

# 2. Expansiones de parámetros (§4).
r=/srv/datos/informe.final.csv
ok "${r##*/}" informe.final.csv "basename"
ok "${r%/*}" /srv/datos "dirname"
ok "${r%.*}" /srv/datos/informe.final "quitar la última extensión"
ok "${r%%.*}" /srv/datos/informe "quitar todas las extensiones"
ok "$(( -7 / 3 ))" -2 "la división trunca hacia cero"
unset nada
ok "${nada:-por defecto}" "por defecto" "valor por defecto"

# 3. Ejemplo resuelto 2: nombres hostiles (espacio, comodín y salto de línea).
d=$(mktemp -d)
trap 'rm -rf "$d"' EXIT
touch "$d/uno.log" "$d/con espacio.log" "$d/estrella*.log" "$d/salto
de línea.log"
n=0
while IFS= read -r -d '' _; do n=$((n + 1)); done < <(find "$d" -type f -name '*.log' -print0)
ok "$n" 4 "find -print0 cuenta bien los 4 archivos"
m=0
# shellcheck disable=SC2044  # el antipatrón, a propósito
for _ in $(find "$d" -type f -name '*.log'); do m=$((m + 1)); done
# shellcheck disable=SC2016  # el texto describe la orden, no se expande
ok "$m" 7 'for f in $(find) ve 7 "archivos" (divide por espacios y saltos)'

# 4. Ejemplo resuelto 1: rotación conservando las 3 copias más recientes.
mkdir "$d/copias"
for t in 20261101-010000 20261102-010000 20261103-010000 20261104-010000 20261105-010000; do
  touch "$d/copias/copia-$t.tar.gz"
done
mapfile -t copias < <(printf '%s\n' "$d"/copias/copia-*.tar.gz | sort)
for (( i = 0; i < ${#copias[@]} - 3; i++ )); do rm -- "${copias[i]}"; done
quedan=$(find "$d/copias" -type f | sort | sed 's|.*/copia-||; s|-.*||' | tr '\n' ' ')
ok "$quedan" "20261103 20261104 20261105 " "rotación conserva las 3 más recientes"

# 5. Ejemplo resuelto 3: 20 tareas de 4 en 4 con wait -n; fallan las múltiplos de 5.
maximo=0 activos=0 fallidas=0
for t in $(seq 1 20); do
  if (( activos == 4 )); then
    wait -n || fallidas=$((fallidas + 1))
    activos=$((activos - 1))
  fi
  ( sleep "0.0$(( t % 7 ))"; (( t % 5 != 0 )) ) &
  activos=$((activos + 1))
  (( activos > maximo )) && maximo=$activos
done
while (( activos > 0 )); do
  wait -n || fallidas=$((fallidas + 1))
  activos=$((activos - 1))
done
ok "$maximo" 4 "nunca más de 4 a la vez"
ok "$fallidas" 4 "fallan las tareas 5, 10, 15 y 20"

echo "fallos: $fallos"
exit "$fallos"
```

## 12. Errores típicos

- Variables sin comillas (`rm $f`, `cd $dir`): división en palabras y globs inesperados. Entrecomilla siempre.
- `for f in $(ls)` o `$(find ...)` para recorrer archivos; usa el glob directamente o `find -print0`.
- `cat archivo | while read l` y esperar que las variables sobrevivan al bucle; y `read` sin `-r` ni `IFS=`.
- Confiar en `set -e` dentro de funciones llamadas en `if` o con `||`, o en `local x=$(orden_que_falla)`.
- `2>&1 >archivo` creyendo que manda los dos al archivo.
- `#!/bin/sh` con bashismos: funciona en tu Ubuntu interactivo y falla en el contenedor Alpine o en el `cron` de Debian (dash).
- Temporales con nombres fijos (`/tmp/datos.txt`): carreras y ataques por enlaces simbólicos; usa `mktemp` y `trap`.
- `eval` o `bash -c "$entrada"` con datos del usuario: inyección de órdenes.
- `echo` para datos arbitrarios; usa `printf '%s\n'`.

## 13. Resumen

- Orden: llaves → tilde, parámetros, aritmética, sustitución de órdenes (izquierda a derecha) → división en palabras → globs → comillas. Entrecomilla.
- `'…'` literal, `"…"` con `$`; `"$@"` un argumento por parámetro, `"$*"` uno solo.
- `${x:-}`, `${x:?}`, `${x#}`, `${x##}`, `${x%}`, `${x%%}`, `${x//a/b}`, `${#x}`; `$(( ))` entera y trunca hacia cero; arrays indexados y asociativos.
- Estados 0, 126, 127, 128 + n; `[ ]`, `[[ ]]`, `(( ))`, `case`; `while IFS= read -r`; tuberías en subshells.
- Redirecciones de izquierda a derecha; here-docs, here-strings, `<( )`; `$( )` quita los saltos finales.
- Funciones, `local`, `return`, `( )` frente a `{ }`; `getopts`.
- `set -Eeuo pipefail` con sus excepciones; `trap ... EXIT`; `mktemp`; `printf`; `--`; ShellCheck y bats.
- `&`, `$!`, `wait`, `wait -n`, `xargs -P`, `timeout`; POSIX frente a bash (dash, ash, macOS).

## Repaso: lo que debe quedarte dentro de un mes

1. Toda expansión sin comillas se trocea y se interpreta como glob.
2. `"$@"` es la forma de pasar argumentos intactos.
3. Las redirecciones se leen de izquierda a derecha.
4. `set -e` no salta dentro de condiciones, y una tubería sin `pipefail` esconde fallos.
5. Limpia con `trap ... EXIT` y revisa todo con ShellCheck.

## Siguiente

`prog-unix-texto` (grep, sed, awk, find, jq y expresiones regulares para procesar datos desde el shell) y `prog-powershell-batch` (el
equivalente en Windows). Los procesos y las señales que el shell maneja están en [[sys-procesos-planificacion]].
