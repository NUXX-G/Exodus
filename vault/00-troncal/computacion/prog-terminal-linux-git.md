---
id: prog-terminal-linux-git
title: "Terminal de Linux y Git: el taller del programador"
area: bajo-nivel
trunk_level: 1
prerequisites: [prog-pensamiento-computacional]
academic_sources:
  - "Shotts, W. The Linux Command Line, 2ª ed. No Starch Press, 2019 (la 5.ª edición de Internet es gratuita en linuxcommand.org)."
  - "Chacon, S.; Straub, B. Pro Git, 2ª ed. Apress, 2014 (gratuito en git-scm.com/book)."
  - "The Open Group. POSIX.1-2017 (IEEE Std 1003.1): Shell & Utilities."
  - "GNU Project. GNU Coreutils manual y Bash Reference Manual (gnu.org/software)."
hints:
  - "Concepto: en Unix cada herramienta hace una cosa y se combinan con tuberías (la salida de una es la entrada de la siguiente). Para predecir una tubería, ejecútala a mano paso a paso, mirando la salida de cada etapa. Los permisos son tres bits (r=4, w=2, x=1) para dueño, grupo y otros; el umask quita bits a 666 (archivos) o a 777 (directorios)."
  - "Herramienta: `man comando` y `comando --help` dan la documentación; prueba siempre en un directorio desechable (mkdir /tmp/prueba) y, para comandos peligrosos como rm, usa antes `ls` o `echo` con el mismo patrón. En Git, `git log --oneline --graph --all` dibuja el historial y `git reflog` es la red de seguridad cuando algo sale mal."
  - "Documentación oficial: man bash (secciones de redirecciones y expansión), man 7 regex, man chmod, man find; git-scm.com/docs (referencia de cada comando) y git-scm.com/book (Pro Git: capítulos 1 a 3, ramas y fusión)."
exercises:
  - id: peticiones-404
    tier: 1
    prompt: |
      El archivo `acceso.log` (columnas: IP, método, ruta, código de respuesta, bytes) contiene:

      ```
      192.168.1.20 GET /p0.html 200 699
      192.168.1.20 GET /p1.html 200 824
      10.0.0.7 GET /p2.html 200 953
      192.168.1.21 GET /p3.html 200 159
      10.0.0.9 GET /p4.html 301 543
      10.0.0.5 GET /p5.html 301 322
      10.0.0.5 GET /p6.html 301 840
      192.168.1.20 GET /p0.html 404 669
      192.168.1.20 GET /p1.html 200 663
      192.168.1.20 GET /p2.html 404 717
      192.168.1.20 GET /p3.html 500 797
      10.0.0.7 GET /p4.html 500 319
      10.0.0.9 GET /p5.html 404 423
      192.168.1.21 GET /p6.html 200 840
      10.0.0.5 GET /p0.html 200 788
      192.168.1.20 GET /p1.html 301 265
      192.168.1.20 GET /p2.html 200 165
      192.168.1.20 GET /p3.html 301 554
      10.0.0.7 GET /p4.html 200 111
      192.168.1.20 GET /p5.html 200 487
      192.168.1.20 GET /p6.html 404 689
      192.168.1.20 GET /p0.html 500 141
      10.0.0.5 GET /p1.html 404 805
      10.0.0.5 GET /p2.html 200 612
      192.168.1.21 GET /p3.html 200 582
      192.168.1.20 GET /p4.html 404 693
      192.168.1.21 GET /p5.html 301 659
      192.168.1.20 GET /p6.html 200 757
      10.0.0.9 GET /p0.html 200 874
      192.168.1.21 GET /p1.html 200 499
      ```

      ¿Qué número imprime `grep -c ' 404 ' acceso.log`? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: permisos-754
    tier: 1
    prompt: |
      Tras ejecutar `chmod 754 fichero`, ¿cuáles son los **nueve caracteres de permisos** que muestra `ls -l` (sin el primer carácter del tipo de archivo)? Respuesta: nueve caracteres, por ejemplo «rw-r--r--».
    answers: ["sha256:bdd1a99b663059a99dddf842f63874fdfb85256c0b33f6ca03e4f1cc68e17bf0"]
  - id: aritmetica-en-bash
    tier: 1
    prompt: |
      ¿Qué imprime `echo $((2**10 % 1000 + 7))` en bash? Respuesta: un entero.
    answers: ["sha256:eb1e33e8a81b697b75855af6bfcdbcbf7cbbde9f94962ceaec1ed8af21f5a50f"]
  - id: ips-distintas
    tier: 2
    prompt: |
      Con el mismo `acceso.log` de la primera pregunta, ¿qué número imprime `cut -d' ' -f1 acceso.log | sort -u | wc -l`? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: ip-mas-frecuente
    tier: 2
    prompt: |
      Con el mismo `acceso.log`, la tubería `cut -d' ' -f1 acceso.log | sort | uniq -c | sort -rn | head -1` muestra la IP con más peticiones y su número. Respuesta en la forma «IP;número».
    answers: ["sha256:4b38869428cf908de928d44b727a493d082ecf0821b8bf32754a0390e4933310"]
  - id: suma-de-bytes
    tier: 2
    prompt: |
      Con el mismo `acceso.log`, ¿qué imprime `awk '{s+=$5} END{print s}' acceso.log` (suma de la quinta columna)? Respuesta: un entero.
    answers: ["sha256:f474efa5c31a50501da2f6d20ddf0f24abedfec26b32de3855ef4ff64d527c71"]
  - id: umask-027
    tier: 2
    prompt: |
      Con `umask 027`, ¿qué permisos en octal tendrán un **archivo nuevo** creado con `touch` y un **directorio nuevo** creado con `mkdir`? Respuesta en la forma «archivo;directorio».
    answers: ["sha256:75f5d32a2f0fb1e57ca7dabbeb2eaf01be7ba7dfd51b95cfcdb02567284e371e"]
  - id: codigos-de-salida
    tier: 2
    prompt: |
      En bash, tras cada uno de estos comandos se imprime `$?`: `true`, `false`, `ls /noexiste` (directorio inexistente; GNU `ls`) y una orden que no existe. ¿Qué cuatro códigos salen, en orden?
      Respuesta separada por punto y coma.
    answers: ["sha256:6bffc15bc2fa0c9c60d13d880347dccf7055e9a31dc5fc13e55e58975bb2518f"]
  - id: multiplos-de-15
    tier: 2
    prompt: |
      ¿Qué número imprime `seq 1 100 | awk '$1%15==0' | wc -l`? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: entradas-de-find
    tier: 2
    prompt: |
      Se ejecuta: `mkdir -p a/b/c; touch a/x.txt a/b/y.txt a/b/c/z.txt a/b/w.log`. ¿Qué número imprime `find a | wc -l`? (Cuenta directorios y archivos.) Respuesta: un entero.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: redirecciones
    tier: 2
    prompt: |
      ¿Qué número imprime este bloque? `echo uno > f; echo dos >> f; echo tres > f; wc -l < f` Respuesta: un entero.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: palabra-mas-repetida
    tier: 2
    prompt: |
      ¿Qué imprime `printf 'b\na\nc\na\nb\na\n' | sort | uniq -c | sort -rn | head -1 | awk '{print $2}'`? Respuesta: el texto impreso.
    answers: ["sha256:ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"]
  - id: quitar-vocales
    tier: 3
    prompt: |
      ¿Qué imprime `echo "exodus platform" | tr -d 'aeiou'`? Respuesta: el texto impreso.
    answers: ["sha256:7543f5f41c6b6bcddcc44f62198f49c21fd9d8edf4cc015d2beb148726e6a12e"]
  - id: tail-y-head
    tier: 3
    prompt: |
      ¿Qué número imprime `seq 1 20 | tail -n 5 | head -n 1`? Respuesta: un entero.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: git-fusion
    tier: 3
    prompt: |
      Se ejecuta esta secuencia en un repositorio nuevo (rama `main`):

      ~~~bash
      echo a > a; git add a; git commit -m A
      git checkout -b feat
      echo b > b; git add b; git commit -m B
      git checkout main
      echo c > c; git add c; git commit -m C
      git merge --no-edit feat
      ~~~

      ¿Cuántos commits hay en el historial de `HEAD` (`git rev-list --count HEAD`)? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: git-reset
    tier: 3
    prompt: |
      Se hacen cinco commits seguidos en `main` y después se ejecuta `git reset --hard HEAD~2`. ¿Cuántos commits tiene el historial de `HEAD` ahora (`git rev-list --count HEAD`)? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
---

# Terminal de Linux y Git: el taller del programador

La interfaz de línea de comandos es la herramienta más potente y más duradera de un profesional técnico: administradores, desarrolladores, analistas de seguridad e ingenieros de datos viven en ella.
Permite **automatizar**, combinar programas y trabajar en servidores sin pantalla. **Git** guarda la historia de un proyecto y permite colaborar sin pisarse. Juntos son la base de casi todo el trabajo técnico
moderno, y para ciberseguridad (el nodo de fundamentos de seguridad) son imprescindibles.

## Objetivos

Al terminar sabrás:

1. Moverte por el sistema de archivos, manejar archivos y entender los **permisos**.
2. Combinar programas con **redirecciones y tuberías**, y usar las herramientas de texto esenciales.
3. Escribir **scripts** de bash sencillos, usando variables, condiciones, bucles y códigos de salida.
4. Gestionar procesos y señales.
5. Usar **Git** con soltura: commits, ramas, fusiones, remotos, deshacer cambios y no filtrar secretos.
6. Trabajar con seguridad: mínimo privilegio, cuidado con `rm` y con ejecutar código ajeno.

> [!question] Test de entrada
> 1. ¿Qué crees que hace el comando `ls`? 2. ¿Qué significa que un archivo tenga permisos `rwx------`? 3. ¿Para qué sirve un sistema de control de versiones?
>
> Respuestas: **lista** el contenido de un directorio; el dueño puede leer, escribir y ejecutar y nadie más; guarda la **historia** de los cambios y permite volver atrás y trabajar en equipo.

## 1. Para qué sirve

- **Automatizar**: renombrar miles de archivos, procesar registros, desplegar un servidor con un script.
- **Servidores y la nube**: casi todos funcionan con Linux y se administran por terminal (SSH).
- **Análisis**: filtrar un registro de millones de líneas con `grep`, `sort` y `awk` en segundos.
- **Colaboración**: Git es el estándar para el código y, cada vez más, para documentos y configuración.
- **Seguridad**: investigar un incidente, auditar permisos, analizar malware: todo empieza en la terminal.

## 2. El sistema de archivos y el intérprete de órdenes

Un **intérprete** (*shell*, normalmente `bash`) lee una línea, la interpreta y ejecuta programas. Linux organiza los archivos en **un único árbol** que empieza en la raíz `/`:

| Directorio | Contenido |
|---|---|
| `/home` | carpetas de los usuarios (`~` es la tuya) |
| `/etc` | configuración del sistema |
| `/var` | datos que cambian: registros (`/var/log`), colas |
| `/usr`, `/bin` | programas y bibliotecas |
| `/tmp` | archivos temporales |
| `/dev`, `/proc` | dispositivos y procesos, expuestos **como archivos** |

Idea central de Unix: **todo es un archivo** (o se trata como uno). Una **ruta absoluta** empieza en `/` (`/etc/passwd`); una **relativa** parte del directorio actual (`../docs/a.txt`); `.` es el directorio actual, `..` el padre.

```bash
pwd                      # dónde estoy
ls -la                   # lista con detalle (incluye ocultos, que empiezan por .)
cd /var/log              # ir a una ruta;  cd ~  (a casa);  cd -  (al anterior)
mkdir -p proy/src        # crear directorios (con los intermedios)
touch notas.txt          # crear un archivo vacío (o actualizar su fecha)
cp a.txt copia.txt       # copiar;  cp -r  para directorios
mv a.txt b.txt           # mover o renombrar
rm notas.txt             # BORRAR (no hay papelera)
cat a.txt                # mostrar;  less a.txt  para paginar;  head -n 5, tail -n 5, tail -f (seguir)
man ls                   # manual de un comando
```

> [!warning] Peligro: `rm` no tiene papelera
> `rm -rf` borra recursivamente **sin preguntar** y sin posibilidad de deshacer. Antes de ejecutarlo con comodín, ejecuta `ls` con el **mismo patrón**. Nunca copies a ciegas comandos con `sudo rm -rf`.

## 3. Permisos

Cada archivo tiene un **dueño**, un **grupo** y tres conjuntos de permisos: para el dueño (`u`), el grupo (`g`) y los demás (`o`). Cada conjunto tiene tres bits:
**r** lectura ($4$), **w** escritura ($2$), **x** ejecución ($1$). `ls -l` muestra, por ejemplo, `-rwxr-xr-- 1 ana dev 120 ... script.sh`:
el primer carácter es el tipo (`-` archivo, `d` directorio) y los nueve siguientes los permisos.

La suma de los bits de cada conjunto da una cifra **octal**: $\texttt{rwx} = 7$, $\texttt{r-x} = 5$, $\texttt{r--} = 4$. Así `rwxr-xr--` es **754**. Se cambian con `chmod`:

```bash
chmod 754 script.sh      # numérico: rwxr-xr--
chmod u+x script.sh      # simbólico: añadir ejecución al dueño
chmod go-rwx secreto     # quitar todo a grupo y otros
chown ana:dev archivo    # cambiar dueño y grupo (requiere privilegios)
```

En un **directorio**, `r` permite **listar**, `w` permite **crear y borrar** entradas y `x` permite **entrar** (atravesarlo). Un directorio sin `x` no se puede cruzar aunque se pueda listar.

**umask.** Los archivos nuevos no nacen con todos los permisos: el sistema parte de $666$ (archivos) o $777$ (directorios) y **quita** los bits de la máscara. Con `umask 022`: archivos $666 - 022 = 644$ (`rw-r--r--`),
directorios $755$. Con `umask 027`: $640$ y $750$ (el grupo no escribe y los demás **nada**). Es una de las decisiones de seguridad más sencillas y más descuidadas.

**Seguridad.** Principio de **mínimo privilegio**: da solo los permisos necesarios. Una clave privada SSH debe ser `600` (si es legible por otros, SSH se niega a usarla). Un archivo con contraseñas nunca debe ser `777`. El
usuario **root** (administrador) puede todo: trabaja como usuario normal y usa `sudo` solo para lo concreto.

## 4. Entrada, salida y tuberías

Todo programa tiene tres **flujos**: **entrada estándar** (descriptor $0$, el teclado), **salida estándar** ($1$) y **error estándar** ($2$, para los mensajes de error). Se redirigen:

```bash
programa > salida.txt      # la salida a un archivo (SOBRESCRIBE)
programa >> salida.txt     # añade al final
programa < entrada.txt     # lee de un archivo
programa 2> errores.txt    # solo los errores
programa > todo.txt 2>&1   # salida y errores al mismo sitio
programa 2> /dev/null      # tirar los errores a la papelera de Unix
```

Una **tubería** `|` conecta la salida de un programa con la entrada del siguiente. Es la idea más productiva de Unix: **programas pequeños que hacen una sola cosa, combinados**.

**Códigos de salida.** Al terminar, todo programa devuelve un número a su padre: **$0$ significa éxito**, cualquier otro valor, error. En bash, `$?` guarda el del último comando: `true` $\to 0$; `false` $\to 1$; `ls /noexiste` $\to 2$
(en GNU `ls`); una orden que no existe $\to 127$. Los scripts se apoyan en esto para decidir.

## 5. Herramientas de texto

Casi todo en Unix es texto, y estas herramientas lo procesan por líneas:

| Comando | Para qué |
|---|---|
| `grep patrón` | filtrar líneas que cumplen un patrón (`-v` las que no, `-c` contar, `-i` ignorar mayúsculas, `-r` recursivo) |
| `cut -d' ' -f1` | extraer una columna por delimitador |
| `sort` / `sort -rn` | ordenar (alfabético / numérico inverso) |
| `uniq -c` | agrupar líneas **consecutivas** iguales y contarlas (por eso va tras `sort`) |
| `wc -l` | contar líneas (`-w` palabras, `-c` bytes) |
| `tr 'a-z' 'A-Z'` / `tr -d 'aeiou'` | traducir o borrar caracteres |
| `sed 's/viejo/nuevo/g'` | sustituir texto |
| `awk '{s+=$3} END{print s}'` | procesar columnas: sumar, filtrar, formatear |
| `head`, `tail` | primeras y últimas líneas |
| `find . -name '*.log'` | buscar archivos por nombre, tipo, fecha, tamaño |
| `xargs` | convertir líneas de entrada en argumentos de un comando |

**Ejemplo resuelto.** Dado un registro de accesos con la IP en la primera columna, ¿qué IP aparece más?

```bash
cut -d' ' -f1 acceso.log | sort | uniq -c | sort -rn | head -1
```

Paso a paso: `cut` saca las IP; `sort` las agrupa (para que las iguales sean consecutivas); `uniq -c` cuenta cada grupo; `sort -rn` ordena por el contador de mayor a menor; `head -1` se queda con la primera.
Es el tipo de tubería que se escribe a diario para analizar registros de un servidor o un ataque.

**Expresiones regulares básicas** (en `grep`, `sed`): `.` cualquier carácter, `*` repetición, `^` inicio, `$` fin, `[abc]` uno de los caracteres, `\d` no existe en la sintaxis básica (usa `[0-9]`).
`grep '^ERROR' log` filtra las líneas que **empiezan** por ERROR.

## 6. Variables, entorno y comillas

```bash
nombre="Ana"             # sin espacios alrededor del =
echo "Hola, $nombre"     # comillas dobles: se expande $nombre
echo 'Hola, $nombre'     # comillas simples: literal, no se expande
hoy=$(date +%F)          # sustitución de comandos: guarda la salida
echo $((7 * 6 + 1))      # aritmética entera: 43
echo $PATH               # lista de directorios donde se buscan los programas
```

El `PATH` explica por qué escribir `ls` funciona (`/bin/ls` está en el `PATH`) y por qué para ejecutar un script del directorio actual hay que escribir `./script.sh`. Las **variables de entorno** se heredan a los programas
que lanzas (`export VAR=valor`); **nunca** pongas contraseñas en la línea de órdenes (quedan en el historial y en la lista de procesos).

## 7. Scripts de bash

Un script es un archivo de texto con órdenes. La primera línea, el **shebang**, indica quién lo interpreta. Hay que darle permiso de ejecución.

```bash
#!/usr/bin/env bash
# cuenta_errores.sh: cuenta las líneas con ERROR de cada archivo recibido
set -euo pipefail            # parar ante errores, variables sin definir y fallos en tuberías

if [ $# -eq 0 ]; then
    echo "Uso: $0 archivo..." >&2
    exit 1
fi

for f in "$@"; do
    n=$(grep -c 'ERROR' "$f" || true)     # grep devuelve 1 si no hay coincidencias; || true lo tolera
    echo "$f: $n"
done
```

Conceptos clave: `$1, $2...` argumentos, `$#` cuántos, `"$@"` todos, `$0` el nombre del script; `if [ condición ]; then ... fi`; `for x in lista; do ... done`; `while`; funciones; `exit N` fija el código de salida.
**Las comillas alrededor de `"$f"` importan:** sin ellas, un nombre de archivo con espacios se rompería en varios argumentos (fuente típica de errores y de **vulnerabilidades de inyección**). Herramienta recomendada: `shellcheck`, un
analizador que detecta errores típicos.

## 8. Procesos y señales

Cada programa en ejecución es un **proceso** con un identificador (PID). `ps aux` los lista, `top` los muestra en vivo, `kill PID` envía una **señal**: `SIGTERM` (15, pide terminar con educación, por defecto) o `SIGKILL` (9, **mata**
sin dejarle limpiar). `programa &` lo lanza en segundo plano; `Ctrl+C` interrumpe el primer plano (`SIGINT`); `Ctrl+Z` lo suspende. `nohup` hace que sobreviva al cierre de la terminal. Los servicios del sistema los gestiona
**systemd** (`systemctl status nombre`).

## 9. Git: el control de versiones

**El modelo mental.** Git no guarda «diferencias»: guarda **instantáneas** (*snapshots*) del proyecto, llamadas **commits**. Cada commit lleva un identificador que es el **resumen criptográfico** (hash) de su contenido, de su autor, mensaje y del
**commit padre**; por eso el historial es una **cadena a prueba de manipulaciones** (cambiar un commit antiguo cambia todos los hashes posteriores). Los commits forman un **grafo** (con ramas y fusiones). Hay tres zonas:

> directorio de trabajo $\xrightarrow{\text{git add}}$ **índice** (*staging*) $\xrightarrow{\text{git commit}}$ **repositorio**

```bash
git init                     # crear un repositorio
git status                   # qué ha cambiado
git add archivo              # preparar cambios (git add -p: elegir trozos)
git commit -m "mensaje"      # guardar la instantánea
git log --oneline --graph --all   # ver la historia
git diff                     # cambios sin preparar;  git diff --staged  los preparados
```

**Buen mensaje de commit:** una línea corta en imperativo («Corrige el cálculo del IVA») y, si hace falta, un párrafo con el **porqué**. Commits pequeños y con una sola idea.

### Ramas y fusiones

Una **rama** es un puntero movible a un commit. Crear una rama es casi gratis, así que se trabaja **cada tarea en su rama**:

```bash
git switch -c mejora         # crear y cambiar a una rama (antes: git checkout -b)
git switch main              # volver a main
git merge mejora             # fusionar mejora en la rama actual
```

Si `main` no ha avanzado, la fusión es un **avance rápido** (*fast-forward*: solo se mueve el puntero). Si ambas ramas avanzaron, Git crea un **commit de fusión** con dos padres. Si las dos modificaron las **mismas líneas**, hay un **conflicto**:
Git marca el archivo con `<<<<<<<`, `=======`, `>>>>>>>`; se edita a mano, se hace `git add` y `git commit`. **Ejemplo:** un historial con $A$ en `main`, $B$ en `feat` y $C$ en `main`, tras `git merge feat` tiene $4$ commits ($A, B, C$ y el de fusión).

### Remotos y colaboración

```bash
git clone URL                # copiar un repositorio remoto
git remote -v                # ver remotos (normalmente «origin»)
git pull                     # traer y fusionar cambios
git push -u origin mejora    # subir una rama
```

El flujo habitual en equipo: rama por tarea $\to$ *pull request* $\to$ revisión $\to$ fusión. Un archivo `.gitignore` lista lo que **no** debe versionarse (binarios generados, `node_modules`, claves).

### Deshacer cambios sin perder nada importante

| Situación | Comando |
|---|---|
| Descartar cambios de un archivo (no guardados) | `git restore archivo` |
| Sacar del índice lo que añadí con `git add` | `git restore --staged archivo` |
| Corregir el **último** mensaje o añadir algo olvidado | `git commit --amend` (solo si **no** se ha publicado) |
| Deshacer un commit **ya publicado** con otro que lo revierte | `git revert COMMIT` |
| Mover la rama a otro commit descartando lo posterior | `git reset --hard HEAD~2` ($\,\Rightarrow\,$ **destructivo** en el árbol de trabajo) |
| «Se me ha perdido un commit» | `git reflog` (historial de dónde ha estado `HEAD`; casi todo se recupera) |

**Ejemplo:** tras $5$ commits, `git reset --hard HEAD~2` deja la rama con $3$; los otros dos siguen un tiempo en el `reflog` y se pueden recuperar. (Ojo: `HEAD~2` sigue siempre el **primer padre**, así que tras una fusión no equivale a «los dos últimos commits».)

> [!warning] Los secretos no deben llegar al repositorio
> Una contraseña, clave de API o clave privada **commiteada** queda en la historia aunque la borres después, y si se publicó hay que **considerarla comprometida** y cambiarla. Usa `.gitignore`, variables de entorno o un gestor de secretos.
> Antes de publicar, revisa con `git diff --staged`.

## 10. Seguridad en la terminal

- **Mínimo privilegio**: usa `sudo` solo cuando haga falta; no trabajes como root.
- **No ejecutes lo que no entiendes**: el patrón `curl URL | sh` ejecuta código remoto sin que lo hayas leído; descarga, lee y después ejecuta.
- **Cuidado con los espacios y el comodín** en `rm`, y con las variables vacías: `rm -rf "$DIR/"` con `$DIR` vacío borra desde la raíz (`set -u` lo evita).
- **Claves SSH**: la privada con permisos `600`, protegida con contraseña, y **nunca** subida a un repositorio.
- **Registros**: `/var/log` es la primera fuente al investigar un incidente; aprende a filtrarlo.

## 11. Errores típicos

- Esperar que `uniq` cuente repeticiones **no consecutivas** (hay que ordenar antes).
- Sobrescribir un archivo con `>` en lugar de añadir con `>>`.
- Escribir `x = 5` en bash (con espacios) en vez de `x=5`.
- Olvidar las comillas en `"$variable"` y romper con nombres con espacios.
- Confundir `git reset --hard` (destructivo) con `git revert` (seguro para historial publicado).
- Hacer `git add .` sin mirar y subir archivos que no debían (secretos, binarios grandes).
- Cambiar el historial publicado (`--amend`, `rebase`) en una rama que otros usan.

## Repaso: lo que debe quedarte dentro de un mes

1. Permisos: $r=4$, $w=2$, $x=1$; `chmod 754` $=$ `rwxr-xr--`; umask resta a $666$ / $777$.
2. `>` sobrescribe, `>>` añade, `|` conecta; salida $=1$, error $=2$; `$?` $=0$ es éxito.
3. `sort | uniq -c | sort -rn | head` para frecuencias; `grep`, `cut`, `awk`, `find`.
4. Git: directorio de trabajo $\to$ índice $\to$ repositorio; rama = puntero; fusión; `reflog` salva.
5. Mínimo privilegio y nada de secretos en el repositorio.

## Siguiente

`prog-estructuras-datos` formaliza cómo se organizan los datos en memoria (listas, pilas, árboles, grafos, tablas hash), y el nodo de fundamentos de seguridad usa estas herramientas para la seguridad práctica.
