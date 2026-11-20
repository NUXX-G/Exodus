---
id: proy-sys-automatizacion
title: "Proyecto: un kit de operaciones en shell (copias con rotación y verificación, auditoría, registros, limpieza y bloqueo)"
area: bajo-nivel
trunk_level: 5
kind: proyecto
prerequisites: [prog-bash-scripting, prog-unix-texto, prog-powershell-batch]
academic_sources:
  - "Free Software Foundation. GNU Bash Reference Manual (Bash 5.3), 2025; y manuales de GNU coreutils, findutils y tar."
  - "Robbins, A.; Beebe, N. H. F. Classic Shell Scripting. O'Reilly, 2005."
  - "Beyer, B.; Jones, C.; Petoff, J.; Murphy, N. R. (eds.) Site Reliability Engineering. O'Reilly, 2016 (cap. 7, automatización)."
attachments: [prueba.sh]
exercises:
  - id: hito-1-respaldo
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `kitops respaldo ORIGEN DESTINO [-n N]` crea `DESTINO/respaldo-FECHA.tar.gz` (con `FECHA` tomada de la variable `KITOPS_FECHA` si existe, o `AAAAmmdd-HHMMSS` actual) que contiene el directorio `ORIGEN` con su nombre (y los archivos ocultos), escribe a su lado `respaldo-FECHA.tar.gz.sha256` en el formato de `sha256sum`, conserva solo las `N` copias más recientes por nombre (7 si no se indica) borrando las demás con su manifiesto, e imprime el nombre del archivo creado.

      Comprueba con `bash prueba.sh ./kitops 1` (en Linux).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:191de06572557748916bf64b44cd3855768a45ec58415f2de8e26a6610c8c6b1"]
  - id: hito-2-verificacion
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `kitops verifica DESTINO` comprueba cada `respaldo-*.tar.gz` (en orden de nombre) contra su `.sha256` e imprime `OK nombre`, `CORRUPTO nombre` o `SIN-MANIFIESTO nombre`. Termina con 0 si todo está bien y con 4 si no.

      Comprueba con `bash prueba.sh ./kitops 2` (en Linux).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:afd18927ad18be386a2fcd9ba11027a0d9c0ba909c1b4b3b92f2bbbf01e37f39"]
  - id: hito-3-auditoria
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `kitops audita DIR` recorre `DIR` e imprime `ESCRIBIBLE ruta` (archivos y directorios escribibles por otros), `SUID ruta` (archivos con el bit SUID) y `GRANDE ruta` (archivos de más de 1 MiB), con rutas relativas a `DIR`, agrupadas en ese orden y ordenadas por ruta (orden de bytes) dentro de cada grupo. Un archivo puede aparecer en varios grupos.

      Comprueba con `bash prueba.sh ./kitops 3` (en Linux).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:953291dd81137e82d2236dd5ab60052b104138980515c7fbd81134406bdb7834"]
  - id: hito-4-registros
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `kitops logs ARCHIVO` resume un registro de nginx en formato combinado con cuatro líneas: `peticiones N`, `ip_top IP N` (la IP con más peticiones; en empate, la menor como texto; `- 0` si no hay ninguna), `errores_5xx N` y `bytes N` (suma del campo de tamaño, ignorando `-`).

      Comprueba con `bash prueba.sh ./kitops 4` (en Linux).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:2b08aa394d9952682ad2a14f62fe4151dd6027185ea2239b819f5652e65f2b48"]
  - id: hito-5-limpieza
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** `kitops limpia DIR -d DIAS` borra, recursivamente, los archivos regulares modificados hace más de `DIAS` días (cualquier nombre, incluidos espacios) e imprime `borrados N`.

      Comprueba con `bash prueba.sh ./kitops 5` (en Linux).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:ce57c0217be09d0dc0508f798c6f90ad789358427172b86083fe234c5b485719"]
  - id: hito-6-robustez-y-bloqueo
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** Errores y concurrencia: sin argumentos o con una orden desconocida o un argumento inválido (por ejemplo `-n cero`), mensaje de uso por la salida de error y código 1; origen inexistente, código 2. `respaldo` toma un cerrojo exclusivo no bloqueante con `flock` sobre `DESTINO/.kitops.lock`: si otro proceso lo tiene, termina con código 3 sin hacer nada; al liberarse, funciona con normalidad.

      Comprueba con `bash prueba.sh ./kitops 6` (en Linux).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:ed9a52665cfc5a633ce25500fb0d76c61fce0e635590a1e5b1e563d04170df68"]
---

Vas a escribir `kitops`, una herramienta de línea de órdenes para tareas de operaciones que todo servidor necesita: copias de seguridad con rotación y verificación de integridad, auditoría de
permisos, resumen de registros y limpieza de temporales, con errores claros y un cerrojo para que dos ejecuciones no se pisen. Es lo que separa un guion que "funciona en mi máquina" de uno que se
puede dejar en el `cron` de producción: entradas hostiles, códigos de salida coherentes y comportamiento predecible. Aplica [[prog-bash-scripting]] y [[prog-unix-texto]], y como ampliación, la misma
herramienta en PowerShell ([[prog-powershell-batch]]).

## 1. Qué vas a construir y cómo se evalúa

Un único ejecutable `kitops` (un guion de bash; puedes usar Python o Rust si quieres, el contrato es lo que importa) con cinco órdenes. El trabajo se divide en **6 hitos** con su contrato exacto en los
ejercicios. El adjunto **`prueba.sh`** ejecuta tu herramienta en un directorio temporal con casos preparados (nombres con espacios, archivos ocultos, permisos especiales, fechas antiguas, un cerrojo ocupado) y
da un código por hito si todo es correcto. Con `-v` muestra la salida de cada caso. Las pruebas usan `LC_ALL=C` y herramientas de GNU: ejecútalas en Linux (por ejemplo, en un contenedor `debian` o
`python:3.12-slim`).

## 2. Contrato común

- **Salida estándar** solo para resultados; mensajes de error y de uso por la **salida de error**.
- **Códigos de salida**: 0 correcto; 1 uso incorrecto; 2 ruta inexistente; 3 cerrojo ocupado; 4 verificación fallida.
- Funciona con **cualquier nombre de archivo** (espacios, comillas, saltos de línea): sin `for f in $(ls)`, con `find -print0` y comillas en todas las expansiones.
- Sin efectos a medias: el archivo de copia se escribe en un **temporal** del mismo directorio y se **renombra** al final, así que nunca queda una copia truncada con nombre definitivo.

## 3. Arquitectura recomendada

Un despachador con `case "$1"` que llama a una función por orden; funciones pequeñas (`uso`, `error`, `comprueba_dir`, `cerrojo`); `set -Eeuo pipefail` con las precauciones de
[[prog-bash-scripting]]; `trap` para borrar temporales; y **ShellCheck sin avisos**. Para la orden `audita`, `find` con `-perm` y `-printf` hace casi todo el trabajo; para `logs`, un solo `awk`.

## 4. Lo que tienes que resolver

- **Rotación** correcta aunque haya otros archivos en el destino, y sin dejar manifiestos huérfanos.
- **Integridad**: el manifiesto debe poder comprobarse también con `sha256sum -c` a mano.
- **Fechas**: la fecha del nombre ordena las copias; por eso `AAAAmmdd-HHMMSS`, que se ordena igual como texto que como fecha.
- **Concurrencia**: `flock -n` sobre un archivo del destino; piensa por qué el cerrojo debe tomarse **antes** de crear nada y por qué el sistema lo libera solo si el proceso muere.
- **Limpieza segura**: borrar solo archivos regulares y solo dentro del directorio indicado (cuidado con enlaces simbólicos que salen de él).

## 5. Calidad exigida

- ShellCheck sin avisos; `bash -n` limpio; ayuda con `kitops -h`.
- Pruebas propias con **bats-core** además de `prueba.sh` (por ejemplo, que `respaldo` no deja temporales si `tar` falla).
- Un `README` con la instalación (en `/usr/local/bin`), ejemplos de uso con `cron` y con un temporizador de systemd (`.service` y `.timer`), y la política de retención recomendada.

## 6. Ampliaciones

La misma herramienta en **PowerShell 7** como módulo (`Invoke-KitRespaldo`, con `-WhatIf`), que pase un `prueba.ps1` equivalente que escribas tú; copias incrementales con `tar --listed-incremental`; cifrado de
las copias con `age` o `gpg`; envío a almacenamiento remoto con `rsync` o `rclone` y verificación tras la subida; salida JSON (`--json`) para integrarla con otras herramientas; y métricas para Prometheus
(duración y tamaño de la última copia).

## 7. Recursos

El manual de GNU Bash (expansiones, `set`, `trap`), las páginas de `find(1)`, `tar(1)`, `flock(1)` y `sha256sum(1)`, *Classic Shell Scripting* (capítulos de herramientas de texto y de portabilidad) y el
capítulo de automatización de *Site Reliability Engineering*, sobre por qué la automatización necesita ser predecible y observable.
