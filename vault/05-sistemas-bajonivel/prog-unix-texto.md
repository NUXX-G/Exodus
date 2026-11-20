---
id: prog-unix-texto
title: "Procesar texto y datos en Unix: expresiones regulares, grep, sed, awk, sort, find, xargs, jq y make"
area: bajo-nivel
trunk_level: 4
prerequisites: [prog-bash-scripting]
academic_sources:
  - "Aho, A. V.; Kernighan, B. W.; Weinberger, P. J. The AWK Programming Language, 2ª ed. Addison-Wesley, 2023."
  - "Friedl, J. E. F. Mastering Regular Expressions, 3ª ed. O'Reilly, 2006."
  - "IEEE; The Open Group. POSIX.1-2024 (IEEE Std 1003.1-2024), Shell and Utilities: grep, sed, awk, sort, find, xargs, make. 2024."
exercises:
  - id: grep-palabras
    tier: 1
    prompt: |
      Con este `servicio.log`:

      ```text
      2026-11-13 10:00:01 INFO arranque del servicio
      2026-11-13 10:00:05 ERROR conexión rechazada por 10.0.0.5
      2026-11-13 10:01:12 WARN reintento 1
      2026-11-13 10:01:13 error de lectura en disco
      2026-11-13 10:02:40 INFO errores acumulados: 2
      2026-11-13 10:03:02 ERROR conexión rechazada por 10.0.0.7
      2026-11-13 10:03:59 INFO terminado
      ```

      ¿Qué cuentan estas cuatro órdenes?

      ```sh
      grep -cw 'ERROR' servicio.log
      grep -ci 'error' servicio.log
      grep -cwi 'error' servicio.log
      grep -vc 'INFO' servicio.log
      ```

      Respuesta: los cuatro números separados por `;`.
    answers: ["sha256:5f0bdb2543addf7c676dc54488b4fe184e1b2180db2d5a0533eb588fa0a9f6b4"]
  - id: expresion-regular
    tier: 1
    prompt: |
      ¿Cuántas líneas de `cuentas.txt` casan con la expresión regular extendida?

      ```text
      ES91 2100 0418 4502 0005 1332
      ES79 2100 0813 6101 2345 6789
      es12 3456 7890 1234 5678 9012
      ES7621000418401234567891
      FR14 2004 1010 0505 0001 3M02 606
      ES66 0081 0200 2500 0123 4567
      ```

      ```sh
      grep -Ec '^[A-Z]{2}[0-9]{2}( [0-9]{4}){5}$' cuentas.txt
      ```

      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: sed-fechas
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```sh
      echo 'Entrega 2026-11-13, revisión 2027-01-05.' | sed -E 's/([0-9]{4})-([0-9]{2})-([0-9]{2})/\3\/\2\/\1/g'
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:d036dd971ea84c427b641510e5ed405349719689d283a0335059ea083282c47c"]
  - id: sed-direcciones
    tier: 1
    prompt: |
      ¿Qué líneas imprime?

      ```sh
      printf 'l1\nl2\nl3\nl4\nl5\nl6\n' | sed -n '2,4p;$p'
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:1224164c3888a0afb79789532670d2ea516f69578c06cfb7fdeef7a987bc3575"]
  - id: cut-sort-uniq
    tier: 1
    prompt: |
      Con este fragmento de `/etc/passwd` (`passwd.txt`):

      ```text
      root:x:0:0:root:/root:/bin/bash
      daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
      bin:x:2:2:bin:/bin:/usr/sbin/nologin
      ana:x:1000:1000:Ana:/home/ana:/bin/bash
      luis:x:1001:1001:Luis:/home/luis:/bin/zsh
      www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
      eva:x:1002:1002:Eva:/home/eva:/bin/bash
      sshd:x:105:65534::/run/sshd:/usr/sbin/nologin
      ```

      ¿Qué imprimen?

      ```sh
      cut -d: -f7 passwd.txt | sort | uniq -c | sort -rn | head -n 1
      awk -F: '$3 >= 1000 { print $1 }' passwd.txt | sort | tr '\n' ' '
      echo
      ```

      Respuesta: las dos líneas (sin espacios iniciales) separadas por `;`.
    answers: ["sha256:079c835c33e1184ed8d32b67ed1be8fd336c6befdbc8e176a323793b1d523dfa"]
  - id: awk-agrupar
    tier: 1
    prompt: |
      Con `ventas.csv`:

      ```text
      region,producto,importe
      norte,tornillos,120.50
      sur,tuercas,80.00
      norte,arandelas,35.25
      este,tornillos,210.00
      sur,tornillos,99.90
      norte,tuercas,64.25
      este,arandelas,15.10
      ```

      ¿Qué región vende más y cuánto?

      ```sh
      awk -F, 'NR > 1 { t[$1] += $3 } END { for (r in t) printf "%s %.2f\n", r, t[r] }' ventas.csv | sort -k2,2nr | head -n 1
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:abbd4000b51fabeec7f3086649d21786659c2176559f585634313ccea3a3cbde"]
  - id: find
    tier: 1
    prompt: |
      ¿Qué cuentan las tres órdenes `find`? (`tcp.c` ocupa 2048 bytes; el resto de archivos está vacío.)

      ```sh
      d=$(mktemp -d)
      mkdir -p "$d/src/net" "$d/src/util" "$d/build"
      for f in src/main.c src/net/tcp.c src/net/tcp.h src/util/str.c build/main.o build/tcp.o; do : > "$d/$f"; done
      head -c 2048 /dev/zero > "$d/src/net/tcp.c"
      find "$d" -type f -name '*.c' | wc -l
      find "$d" -type f -name '*.c' -size +1k | wc -l
      find "$d" -path "$d/build" -prune -o -type f -print | wc -l
      rm -rf "$d"
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:71e789c80da6ce193915dc259b6355fc487235d1c4c4614b1d3451271aaf938c"]
  - id: awk-media
    tier: 2
    prompt: |
      Con `notas.txt`:

      ```text
      alumno grupo nota
      marta A 7.5
      jon B 6
      irene A 9.25
      pablo B 4.75
      sara A 8
      ```

      ¿Qué imprimen?

      ```sh
      awk 'NR > 1 { s += $3; n++ } END { printf "%.2f\n", s / n }' notas.txt
      awk 'NR > 1 && $2 == "A" { s += $3; n++ } END { printf "%.2f %d\n", s / n, n }' notas.txt
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:f971116e1f4e03b7e10c1c25ff446d4c190d76706e123ba710863fe809c087c7"]
  - id: sort-claves
    tier: 2
    prompt: |
      ¿Qué imprime? (`-k2,2nr`: segundo campo, numérico, descendente; empate por el primero.)

      ```sh
      printf 'lucia,90\nadrian,85\nbea,90\ncarlos,100\ndaniel,85\n' | sort -t, -k2,2nr -k1,1 | head -n 3 | tr '\n' ' '
      echo
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:4a9c97b862a366bab33cbb4e86a1882179915341c4544032113e9014219e2cea"]
  - id: join
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```sh
      printf '1 ana\n2 luis\n3 eva\n5 sara\n' > a.tmp
      printf '1 madrid\n3 bilbao\n4 sevilla\n5 vigo\n' > b.tmp
      join a.tmp b.tmp
      join -v 2 a.tmp b.tmp
      rm -f a.tmp b.tmp
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:ab32e0454fa8eb4ccb57c6368a34760e02151a4daf799e40c60ca3040581c6af"]
  - id: xargs
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```sh
      printf '%s\n' a b c d e | xargs -n 2 echo
      printf '%s\n' uno dos | xargs -I{} echo "[{}]"
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:a9c3d6d2f197a6359b93c9681602e7f482bce724db9a1f14922899859f0e5f0f"]
  - id: jq
    tier: 2
    prompt: |
      Con `pedido.json`:

      ```json
      {"cliente": "ana", "items": [
        {"nombre": "teclado", "precio": 45.5, "unidades": 1},
        {"nombre": "cable", "precio": 6.25, "unidades": 4},
        {"nombre": "monitor", "precio": 189.0, "unidades": 2},
        {"nombre": "alfombrilla", "precio": 9.99, "unidades": 1}
      ]}
      ```

      ¿Qué imprimen?

      ```sh
      jq -r '.items[] | select(.precio > 10) | .nombre' pedido.json | tr '\n' ' '
      echo
      jq '[.items[] | .precio * .unidades] | add' pedido.json
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:ea4ec969766da1d26b1982d2721615157e0adba0283021a6449a8fd636ce869d"]
  - id: codicia
    tier: 2
    prompt: |
      Las expresiones regulares POSIX buscan la coincidencia más a la izquierda y, desde ahí, la más larga. ¿Qué imprime?

      ```sh
      echo '<a><b>' | sed 's/<.*>/X/'
      echo '<a><b>' | sed 's/<[^>]*>/X/'
      echo '<a><b>' | sed 's/<[^>]*>/X/g'
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:f9b0bfa7ee27bbbac123615a944571cfc02e6b8679f410e5f50145158fb77cc8"]
  - id: comm-tr
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```sh
      printf 'Rojo\nverde\nAzul\nnegro\n' | tr 'A-Z' 'a-z' | sort > x.tmp
      printf 'azul\nblanco\nrojo\n' | sort > y.tmp
      comm -12 x.tmp y.tmp | tr '\n' ' '
      echo
      comm -23 x.tmp y.tmp | wc -l
      rm -f x.tmp y.tmp
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:72897b277111b8b350f0dca9465ed8672b1f44fcd5fd7223e76a4d18a8313d0f"]
  - id: percentil
    tier: 3
    prompt: |
      `latencias.txt` tiene 20 tiempos de respuesta en ms:

      ```text
      120 85 340 95 110 1500 130 88 92 101 250 97 105 118 99 87 640 112 93 104
      ```

      (uno por línea en el archivo). Calcula con `sort` y `awk` el percentil 95 por el método del rango más próximo (el valor en la posición $\lceil 0{,}95\,n\rceil$ de la lista ordenada) y la mediana.

      Respuesta: `p95;mediana`.
    answers: ["sha256:0d46ecde3ccfefb53c06f5b84d7398be5f0217dc769af5c394e155507dfeb8b3"]
  - id: ini
    tier: 3
    prompt: |
      Escribe un programa de awk que lea este `config.ini` y devuelva el `puerto` de la sección `[db]` y el número de secciones:

      ```ini
      ; configuración de ejemplo
      [general]
      nombre = exodus
      puerto = 8080

      [db]
      host = 10.0.0.12
      puerto = 5432
      usuario = app

      [cache]
      puerto = 6379
      ```

      Respuesta: `puerto;secciones`.
    answers: ["sha256:fb186523d9aaeebca819024cc2fbbe9230369f7095edce471bbe1c9a4feb8268"]
---

Un registro de 5 GB, un CSV exportado de una base de datos, la salida de una API en JSON, un árbol de código con miles de archivos: buena
parte del trabajo de un ingeniero es **extraer, filtrar, transformar y resumir texto**. Las herramientas clásicas de Unix lo hacen en una
línea, en streaming (sin cargar todo en memoria) y más rápido de lo que se tarda en abrir un notebook. Este nodo enseña las
**expresiones regulares** (el lenguaje común de todas ellas) y las herramientas que todo profesional debe dominar: `grep` para buscar, `sed`
para editar flujos, **awk** (un lenguaje completo para datos en columnas), `sort`/`uniq`/`cut`/`join` para tablas, `find`/`xargs` para
archivos, `jq` para JSON y `make` para automatizar con dependencias. Continúa [[prog-bash-scripting]], que da el pegamento.

## Objetivos

Al terminar sabrás:

1. Escribir expresiones regulares BRE, ERE y PCRE, y conocer la diferencia entre la búsqueda POSIX (la más larga) y la de vuelta atrás.
2. Buscar con `grep` usando sus opciones clave y su estado de salida.
3. Editar flujos con `sed`: direcciones, sustituciones con grupos, edición en el sitio de forma portable.
4. Programar en awk: registros, campos, patrones, arrays asociativos, `printf`, funciones de cadena y el modismo de dos archivos.
5. Manipular tablas con `cut`, `sort` (claves, estabilidad, locale), `uniq`, `comm`, `join`, `tr`, `paste`.
6. Recorrer árboles con `find` (pruebas, `-prune`, `-exec ... +`) y paralelizar con `xargs`.
7. Consultar y transformar JSON con `jq`, y automatizar con `make`.

## Qué debes dominar antes

[[prog-bash-scripting]]: comillas, redirecciones, tuberías, `while read`. Algo de [[prog-estructuras-datos]] ayuda a entender por qué `sort | uniq -c` es
la versión de flujo de un histograma.

> [!question] Test de entrada
> 1. ¿Por qué hay que entrecomillar el patrón en `grep '*.txt'`?
> 2. ¿Qué hace `sort | uniq`?
> 3. ¿Qué es un campo en una línea `a:b:c` separada por `:`?
>
> Respuestas: para que el shell no lo expanda como glob antes de que lo vea `grep`; elimina las líneas repetidas (uniq solo compara líneas vecinas, por eso se ordena
> antes); cada trozo entre separadores: `a`, `b` y `c` son los campos 1, 2 y 3.

## 1. Para qué sirve

- **Operaciones y SRE**: buscar el error en registros, contar códigos de estado, encontrar la IP que satura un servicio.
- **Datos**: limpiar y resumir CSV antes de cargarlos; comprobar exportaciones; generar informes en una tubería de CI.
- **Código**: buscar usos de una función en un repositorio, renombrar en lote, comprobar estilos.
- **Seguridad y forense**: extraer indicadores de compromiso de registros y capturas, correlacionar eventos por tiempo (`sec-forense-logs`).

## 2. Filtros y flujos, y una trampa: el locale

Cada herramienta lee de su entrada estándar (o de los archivos que se le pasan), procesa **línea a línea** y escribe en su salida: es un **filtro**,
y las tuberías los encadenan. Como no cargan todo en memoria (salvo `sort`, que usa disco si hace falta), procesan archivos mayores que la RAM.

El **locale** cambia el comportamiento: el orden de `sort`, qué es una letra en `[a-z]` o `[[:alpha:]]`, el tratamiento de UTF-8 en `cut` y `tr`. Con
`LC_ALL=C` todo es **por bytes**: más rápido (a veces muchas veces más en `grep` y `sort`) y reproducible entre máquinas; con un locale como `es_ES.UTF-8`
el orden es el de la lengua (y `[a-z]` puede incluir mayúsculas en algunos sistemas). En scripts que comparan o ordenan, fija el locale.

## 3. Expresiones regulares

Una expresión regular describe un conjunto de cadenas. Hay tres dialectos que conviene distinguir:

- **BRE** (básicas, POSIX; `grep`, `sed` sin `-E`): `.`, `*`, `^`, `$`, `[...]`, y con barra `\( \)`, `\{m,n\}`, `\1`.
- **ERE** (extendidas, POSIX; `grep -E`, `sed -E`, awk): `+`, `?`, `|`, `( )` y `{m,n}` sin barras.
- **PCRE** y familia (Perl, Python, JavaScript, `grep -P`, ripgrep): añaden `\d`, `\w`, `\s`, cuantificadores **perezosos** (`*?`), anticipación (`(?=...)`),
  grupos con nombre.

Piezas: anclas `^` y `$`; clases `[abc]`, rangos `[0-9]`, negación `[^>]`, clases POSIX `[[:digit:]]`, `[[:space:]]`, `[[:alnum:]]` (respetan el locale); cuantificadores
`*` (0 o más), `+` (1 o más), `?` (0 o 1), `{m,n}`; alternativa `|`; grupos `( )` y **retroreferencias** `\1`. Para casar texto literal, escapa los metacaracteres o usa
`grep -F`.

**Qué coincidencia se elige.** POSIX exige la coincidencia **más a la izquierda y, desde ahí, la más larga**; por eso `s/<.*>/X/` sobre `<a><b>` se come todo. La
solución clásica es una clase negada, `<[^>]*>`. Los motores de vuelta atrás (PCRE, Python) eligen la primera alternativa que funciona, y admiten `<.*?>`
perezoso. Esos motores pueden tardar un tiempo **exponencial** con patrones como `(a+)+$` sobre una cadena de `a` sin final válido: es la base de los
ataques **ReDoS**. Los motores basados en autómatas (el de `grep` de GNU mientras no haya retroreferencias, RE2, el crate `regex` de Rust) garantizan tiempo lineal.

## 4. grep

`grep patrón archivos` imprime las líneas que casan. Opciones de oficio: `-E` (ERE), `-F` (texto literal, rapidísimo), `-i` (sin mayúsculas), `-w` (palabra
completa), `-x` (línea completa), `-v` (las que **no** casan), `-c` (cuenta líneas), `-l` (solo nombres de archivo), `-n` (número de línea), `-o` (solo la parte que
casa, una por línea), `-r` (recursivo), `-A/-B/-C n` (contexto), `-e` varias veces o `-f archivo` (varios patrones), `-q` (silencioso: solo el **estado de salida**,
0 si casa, 1 si no, 2 si hubo error; perfecto en `if`). Cuidado: `-c` cuenta **líneas**, no apariciones (para eso, `grep -o ... | wc -l`).

## 5. sed

`sed` aplica un guion a cada línea: la lee en el **espacio de patrón**, ejecuta los comandos cuyas **direcciones** casan y la imprime (salvo con `-n`). Direcciones:
número de línea, `$` (la última), `/regex/`, rangos `a,b` (de la primera que case `a` hasta la siguiente que case `b`). Comandos: `s/re/rep/flags` (sustituir; `g` todas,
un número para la enésima, `p` imprimir; en el reemplazo, `&` es toda la coincidencia y `\1`…`\9` los grupos), `d` (borrar), `p` (imprimir), `q` (salir), `y/abc/xyz/`
(transliterar), `a`, `i`, `c` (añadir, insertar, cambiar). Con `-E` se usan ERE. Cualquier carácter puede ser el delimitador: `s|/usr/local|/opt|`.

**Edición en el sitio**: GNU acepta `sed -i 's/a/b/' f`; BSD/macOS exige un sufijo (`sed -i '' ...`). La forma portable es escribir a un temporal y mover:
`sed 's/a/b/' f > f.tmp && mv f.tmp f`. Para ediciones de configuración, procura que sean **idempotentes** (que repetirlas no cambie nada).

## 6. awk

awk divide cada **registro** (línea) en **campos** `$1…$NF` (`$0` es la línea entera) y ejecuta `patrón { acción }` para cada registro cuyo patrón se cumple.
`BEGIN` y `END` se ejecutan antes y después. Variables: `NR` (registros leídos en total), `FNR` (en el archivo actual), `NF` (campos), `FS`/`OFS` (separadores de
entrada y salida; `-F,` en la línea de órdenes), `RS`/`ORS` (de registros). Es un lenguaje completo: aritmética de coma flotante, `if`, `for`, `while`, **arrays
asociativos** (`cuenta[$1]++`, `for (k in cuenta)`, en orden no especificado), `printf` como en C, funciones (`length`, `substr`, `index`, `split`, `sub`, `gsub`,
`match`, `tolower`, `sprintf`) y funciones propias. Las variables no inicializadas valen 0 o la cadena vacía.

Modismos que conviene tener en los dedos:

- `awk '{ s += $3 } END { print s / NR }'` (media de una columna);
- `awk '!visto[$0]++'` (quitar repetidos **conservando el orden**, sin ordenar);
- `awk -F, 'NR == FNR { precio[$1] = $2; next } { print $0, precio[$1] }' precios.csv pedidos.csv` (unir dos archivos sin ordenarlos: el primero se carga
  en un array mientras `NR == FNR`);
- `awk -v umbral="$u" '$5 > umbral'` (pasar variables del shell sin inyectarlas en el programa).

Implementaciones: **gawk** (GNU, con muchas extensiones), **mawk** (muy rápida; la de Debian por defecto), la de BusyBox y la "one true awk" de Kernighan
(macOS, BSD). Si usas extensiones de gawk, llama a `gawk` explícitamente.

## 7. Tablas: cut, sort, uniq, comm, join, tr, paste

- `cut -d: -f1,7` (campos por separador; no admite separadores de varios caracteres ni espacios repetidos: para eso, awk), `cut -c1-10` (caracteres).
- `sort`: `-n` numérico, `-h` con sufijos (2K, 1G), `-r` inverso, `-u` únicos, `-t` separador, y **claves** `-k2,2` (solo el campo 2; `-k2` sería desde el 2 hasta el
  final, un error clásico), con modificadores por clave (`-k3,3nr`); `-s` estable; `-o` salida (puede ser el mismo archivo).
- `uniq`: elimina repetidos **consecutivos**; `-c` cuenta, `-d` solo repetidos, `-u` solo únicos. Por eso va detrás de `sort`.
- `comm` compara dos archivos **ordenados**: columnas de solo el primero, solo el segundo, ambos (`-12` deja solo las comunes).
- `join` une por un campo común dos archivos **ordenados por ese campo** (`-v` los que no tienen pareja); si no están ordenados, el modismo de awk es más cómodo.
- `tr` traduce o borra caracteres (`tr -d '\r'` quita los retornos de carro de Windows; `tr -s ' '` comprime espacios), `paste` une líneas en columnas, `wc`,
  `head`, `tail -n +2` (desde la línea 2), `tail -f` (seguir un registro), `tee` (copiar el flujo a un archivo), `column -t` (alinear).

> [!example] Ejemplo resuelto 1: las IP que más piden
> Del registro de nginx, las 10 IP con más peticiones: `awk '{ print $1 }' access.log | sort | uniq -c | sort -rn | head`. El primer `sort` agrupa las
> repetidas para que `uniq -c` las cuente; el segundo ordena por la cuenta, de mayor a menor. Lo mismo en una sola pasada y sin ordenar el registro entero:
> `awk '{ n[$1]++ } END { for (ip in n) print n[ip], ip }' access.log | sort -rn | head`, que solo ordena tantas líneas como IP distintas hay. Para las peticiones
> fallidas, se añade el patrón `$9 >= 500` delante.

## 8. find y xargs

`find raíz pruebas acciones` recorre un árbol. Pruebas: `-name '*.c'` (glob, entrecomillado), `-iname`, `-path`, `-type f|d|l`, `-size +10M` (en el sufijo de la unidad;
sin sufijo cuenta bloques de 512 bytes), `-mtime -7` (modificado hace menos de 7 días), `-newer ref`, `-user`, `-perm`; se combinan con `-a` (implícito), `-o` y
`!`. **`-prune`** evita entrar en un directorio: `find . -path ./node_modules -prune -o -type f -print`. Acciones: `-print`, `-print0`, `-delete` (¡pon
siempre las pruebas antes!), `-exec orden {} \;` (una ejecución por archivo) o **`-exec orden {} +`** (agrupa muchos archivos por ejecución, como `xargs`).

`xargs` convierte líneas de su entrada en argumentos: `-0` (separados por el byte nulo, pareja de `-print0`; la única forma segura con nombres arbitrarios), `-n k`
(k argumentos por ejecución), `-I{}` (sustituir en una plantilla, una ejecución por línea), `-P k` (k procesos en paralelo).

## 9. jq

`jq` es awk para JSON. Un programa es un **filtro**: `.` (la entrada), `.campo`, `.[0]`, `.[]` (cada elemento), `|` (encadenar), `select(cond)`, `map(f)`, `keys`,
`length`, `add`, `group_by(.k)`, `sort_by(.k)`, `to_entries`, `reduce`, construcción de objetos `{nombre: .n}` y arrays `[ ... ]`. `-r` imprime cadenas sin comillas;
`--arg nombre valor` pasa variables del shell de forma segura; `-c` compacta. Ejemplo: `jq -r '.items[] | select(.precio > 10) | .nombre'`.

## 10. make: automatizar con dependencias

`make` decide **qué rehacer** comparando fechas de modificación: un **objetivo** se reconstruye si no existe o si alguno de sus **prerrequisitos** es más
reciente. Las recetas van **indentadas con tabulador** (no espacios). Variables (`CC ?= cc`, `:=` inmediata), automáticas (`$@` objetivo, `$<` primer
prerrequisito, `$^` todos), reglas de patrón (`%.o: %.c`), `.PHONY` para objetivos que no son archivos (`clean`, `test`) y `-j` para paralelizar. Este
Makefile (probado con GNU make) recompila solo lo necesario: tocar `util.c` rehace `util.o` y el enlazado; tocar `util.h` rehace los dos objetos.

```make
CC ?= cc
CFLAGS ?= -O2 -Wall
OBJS := main.o util.o

.PHONY: all clean
all: app

app: $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^

%.o: %.c util.h
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	rm -f app $(OBJS)
```

Más allá de C, `make` sirve como menú de tareas de un proyecto (`make test`, `make deploy`), aunque para dependencias complejas se usan herramientas
específicas (CMake y Ninja en C/C++, cargo en Rust).

> [!example] Ejemplo resuelto 2: editar una configuración de forma idempotente
> Se quiere que `config.ini` tenga `puerto = 9090` en `[general]`, exista o no la clave. Con awk, en una pasada: se recuerda la sección actual; si la clave aparece
> en `[general]`, se reescribe y se marca como hecha; al salir de la sección (o al final del archivo) sin haberla visto, se añade. El resultado va a un temporal y
> se mueve encima. Ejecutarlo dos veces deja el archivo igual que una: eso es idempotencia, lo que permite usarlo en provisión automática.

> [!example] Ejemplo resuelto 3: unir datos sin ordenar (con menos ayuda)
> `precios.csv` (producto, precio) y `pedidos.csv` (cliente, producto, unidades) no están ordenados. Calcula el importe de cada cliente con el modismo de dos
> archivos de awk (`NR == FNR`), compáralo con la versión `sort` + `join` y mide cuál necesita ordenar más datos. En el programa siguiente, el importe del cliente
> `ana` debe salir 98,75.

## 11. Comprobar con un programa

Este bloque se ejecuta en bash 5.3 con las herramientas de BusyBox (Alpine) y pasa ShellCheck: el ejemplo 1 por las dos vías, el ejemplo 2 aplicado dos
veces y el ejemplo 3, además de la codicia de las expresiones regulares y `find -print0`.

```bash
#!/usr/bin/env bash
set -Eeuo pipefail
export LC_ALL=C
fallos=0
ok() { if [ "$1" = "$2" ]; then printf 'ok   %s\n' "$3"; else printf 'MAL  %s: «%s» frente a «%s»\n' "$3" "$1" "$2"; fallos=$((fallos + 1)); fi; }
d=$(mktemp -d)
trap 'rm -rf "$d"' EXIT

# 1. Ejemplo resuelto 1: la IP que más pide, por las dos vías.
for i in $(seq 1 30); do
  printf '10.0.0.%d - - [x] "GET / HTTP/1.1" %d 100\n' $(( i % 3 == 0 ? 9 : i % 4 )) $(( i % 7 == 0 ? 500 : 200 ))
done > "$d/access.log"
a=$(awk '{ print $1 }' "$d/access.log" | sort | uniq -c | sort -rn | head -n 1 | awk '{ print $2, $1 }')
b=$(awk '{ n[$1]++ } END { for (ip in n) print n[ip], ip }' "$d/access.log" | sort -k1,1nr -k2,2 | head -n 1 | awk '{ print $2, $1 }')
ok "$a" "$b" "sort | uniq -c y el array asociativo coinciden"
ok "$a" "10.0.0.9 10" "la IP más activa"
ok "$(awk '$8 >= 500' "$d/access.log" | wc -l | tr -d ' ')" 4 "cuatro respuestas 5xx"

# 2. Ejemplo resuelto 2: edición idempotente de un INI.
printf '[general]\nnombre = x\n\n[db]\npuerto = 5432\n' > "$d/config.ini"
poner() {
  awk -v sec="$2" -v k="$3" -v v="$4" '
    function cerrar() { if (s == sec && !hecho) { print k " = " v; hecho = 1 } }
    /^\[/ { cerrar(); s = substr($0, 2, length($0) - 2) }
    s == sec && $1 == k { print k " = " v; hecho = 1; next }
    { print }
    END { cerrar() }' "$1" > "$1.tmp" && mv "$1.tmp" "$1"
}
poner "$d/config.ini" general puerto 9090
primera=$(cat "$d/config.ini")
poner "$d/config.ini" general puerto 9090
ok "$(cat "$d/config.ini")" "$primera" "repetir la edición no cambia nada"
ok "$(awk '/^\[general\]/ { s = 1 } /^\[db\]/ { s = 0 } s && $1 == "puerto" { print $3 }' "$d/config.ini")" 9090 "la clave quedó en [general]"
ok "$(grep -c '^puerto' "$d/config.ini")" 2 "la de [db] sigue intacta"

# 3. Ejemplo resuelto 3: importe por cliente sin ordenar (NR == FNR).
printf 'tornillo,0.25\ntuerca,0.10\nllave,12.50\n' > "$d/precios.csv"
printf 'ana,llave,7\nluis,tuerca,30\nana,tornillo,45\nluis,llave,1\n' > "$d/pedidos.csv"
imp=$(awk -F, 'NR == FNR { p[$1] = $2; next } { t[$1] += p[$2] * $3 } END { printf "%.2f", t["ana"] }' "$d/precios.csv" "$d/pedidos.csv")
ok "$imp" 98.75 "importe de ana"

# 4. Codicia POSIX y find -print0.
ok "$(echo '<a><b>' | sed 's/<.*>/X/')" X "la coincidencia más larga"
ok "$(echo '<a><b>' | sed 's/<[^>]*>/X/g')" XX "clase negada"
touch "$d/con espacio.c" "$d/normal.c"
ok "$(find "$d" -name '*.c' -print0 | xargs -0 -n 1 echo | wc -l | tr -d ' ')" 2 "find -print0 | xargs -0"

echo "fallos: $fallos"
exit "$fallos"
```

## 12. Errores típicos

- Patrones sin comillas (`grep *.txt`): los expande el shell.
- `uniq` sin `sort` antes; `sort -k2` creyendo que ordena solo por el campo 2.
- Ordenar o comparar sin fijar el locale y obtener resultados distintos en otra máquina.
- `sed -i` con la sintaxis de GNU en macOS (o al revés).
- Usar `cut` con datos separados por espacios variables (usa awk).
- `.*` codicioso donde hacía falta `[^>]*`; patrones con vuelta atrás exponencial en servicios expuestos (ReDoS).
- `find ... -delete` con la prueba después de `-delete`, o `-exec ... \;` sobre miles de archivos (lento: usa `+`).
- Construir JSON concatenando cadenas en vez de con `jq --arg`.
- Espacios en vez de tabuladores en las recetas de un Makefile.

## 13. Resumen

- Filtros y tuberías en streaming; `LC_ALL=C` para velocidad y reproducibilidad.
- BRE, ERE, PCRE; POSIX = más a la izquierda y más larga; perezosos y ReDoS en motores con vuelta atrás.
- grep: `-E -F -i -w -x -v -c -l -n -o -r -q`; estado 0/1/2.
- sed: espacio de patrón, direcciones, `s///` con `&` y `\1`, `-n`, `-E`, edición portable.
- awk: campos, `NR`/`FNR`/`NF`, `BEGIN`/`END`, arrays asociativos, `printf`, `!visto[$0]++`, `NR == FNR`, `-v`.
- cut, sort (`-k2,2nr`, `-s`), uniq, comm, join, tr, paste, tail, tee.
- find (`-prune`, `-exec +`, `-print0`), xargs (`-0`, `-n`, `-I`, `-P`); jq (`select`, `map`, `add`, `-r`, `--arg`); make (fechas, `$@ $< $^`, `%.o: %.c`, `.PHONY`).

## Repaso: lo que debe quedarte dentro de un mes

1. `sort | uniq -c | sort -rn | head` es el histograma de bolsillo.
2. awk es un lenguaje: campos, arrays asociativos y `END`.
3. Las expresiones POSIX eligen la coincidencia más larga.
4. Para nombres de archivo arbitrarios: `-print0` y `xargs -0`.
5. `make` rehace solo lo que es más antiguo que sus prerrequisitos.

## Siguiente

`prog-powershell-batch` (el mismo trabajo en Windows, con objetos en lugar de texto), `sec-forense-logs` (análisis de registros en un incidente) y el
proyecto `proy-sys-automatizacion`.
