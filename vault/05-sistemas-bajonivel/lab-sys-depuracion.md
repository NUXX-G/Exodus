---
id: lab-sys-depuracion
title: "Laboratorio: diagnosticar una caída en producción a partir del volcado de memoria y los registros (gdb, ASan, FORTIFY, LeakSanitizer)"
area: bajo-nivel
trunk_level: 11
kind: laboratorio
prerequisites: [sys-c-profesional, sys-ensamblador-x86-64]
academic_sources:
  - "Stallman, R.; Pesch, R.; Shebs, S. et al. Debugging with GDB (manual oficial; capítulos sobre volcados, marcos de pila y examinar memoria). sourceware.org/gdb, consultada en noviembre de 2026."
  - "Serebryany, K.; Bruening, D.; Potapenko, A.; Vyukov, D. AddressSanitizer: A Fast Address Sanity Checker. USENIX ATC 2012; documentación de AddressSanitizer y LeakSanitizer (github.com/google/sanitizers)."
  - "Agans, D. J. Debugging: The 9 Indispensable Rules for Finding Even the Most Elusive Software and Hardware Problems. AMACOM, 2002."
  - "MITRE CWE-120 (copia de búfer sin comprobar el tamaño) y CWE-401 (fuga de memoria); manual de glibc, _FORTIFY_SOURCE (feature_test_macros(7))."
attachments: [sensores, vuelco.core.gz, sensores.c, ordenes.txt, sensores.log]
ctf_flag: "sha256:cb52e16f466e6b98bf6f78c910a2c40a4778c80c816b012773d01c6cdc6edf1e"
hints:
  - "Un volcado es una foto de la memoria y los registros en el momento de la señal. El fallo se ve en el marco 0, pero la causa suele estar antes y en otro sitio: cuando un puntero tiene un valor absurdo, pregúntate quién lo escribió. Mira el valor como bytes; a veces se lee como texto."
  - "gunzip vuelco.core.gz; gdb ./sensores vuelco.core; dentro: bt, frame 0, p *s, p/x s->muestras, x/s s->nombre, ptype/o struct sensor, frame 1, p numlinea, info locals. Para ASan: gcc -O0 -g -fsanitize=address; para FORTIFY: gcc -O2 -D_FORTIFY_SOURCE=2. Con ASan, la salida estándar de un programa redirigido a un archivo puede perderse si LeakSanitizer termina el proceso: usa ASAN_OPTIONS=detect_leaks=0 para el resumen."
  - "Debugging with GDB (los capítulos de la pila, de examinar datos y de archivos de volcado), el artículo de AddressSanitizer (qué detecta y qué no: los desbordamientos dentro de una misma estructura no los ve) y la página feature_test_macros(7) sobre _FORTIFY_SOURCE."
exercises:
  - id: senal
    tier: 1
    prompt: |
      Abre el volcado con `gdb ./sensores vuelco.core` (descomprímelo antes con `gunzip`). ¿Qué señal terminó el proceso?

      Respuesta: el nombre de la señal (por ejemplo `SIGABRT`).
    answers: ["sha256:df2e2388b8dd82c3a4420a1321ee7036ab5bc8e9e6770557c4f59149376041fa", "sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: donde-fallo
    tier: 1
    prompt: |
      Con `bt`, ¿en qué función y en qué línea de `sensores.c` se produjo el fallo?

      Respuesta: `funcion:linea`.
    answers: ["sha256:08c6da593563d9f20a5010d163d82562e8b4a62f8328ab06e4f76d7069ad96c3"]
  - id: avisos-del-registro
    tier: 1
    prompt: |
      En `sensores.log`, ¿cuántos avisos de «sensor desconocido» hay antes del fallo?

      Respuesta: un número.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: orden-culpable
    tier: 1
    prompt: |
      El registro no anota los `DATO`, así que su última línea no es la que falló. Sube al marco de `main` (`frame 1`) e imprime el contador de líneas. ¿Qué línea de `ordenes.txt` se estaba procesando?

      Respuesta: un número.
    answers: ["sha256:7ac25d5d84cae3dcc037c52a93dfe320fe83b2a6abe787451b4fc15aeba2c9e7"]
  - id: direccion-del-fallo
    tier: 2
    prompt: |
      ¿Qué dirección intentó escribir el programa? (`p $_siginfo._sifields._sigfault.si_addr` o `p s->muestras`.)

      Respuesta: en hexadecimal con `0x`, sin ceros a la izquierda.
    answers: ["sha256:98b7962d578de8d57fba3a6bddde0ee1fc03756da0756bcc0ba88f34aaf42eaf"]
  - id: texto-en-el-puntero
    tier: 2
    prompt: |
      Esa dirección no parece de memoria dinámica. Lee sus 4 bytes en el orden en que están en memoria (x86-64 es *little-endian*) e interprétalos como ASCII. ¿Qué texto es?

      Respuesta: el texto.
    answers: ["sha256:a6864eb339b0e1f6e00d75293a8840abf069a2c0fe82e6e53af6ac099793c1d5"]
  - id: sensor-culpable
    tier: 2
    prompt: |
      ¿Qué sensor estaba procesando? (`x/s s->nombre`.) Compáralo con la especificación del formato que hay al principio de `sensores.c`.

      Respuesta: el nombre completo.
    answers: ["sha256:9af96e3d00b188fc2926a7677d5e3402e189446f32f011280b1f759b449cecd4"]
  - id: causa-raiz
    tier: 2
    prompt: |
      ¿Qué función de la biblioteca copió el nombre sin comprobar su tamaño, y en qué línea de `sensores.c`?

      Respuesta: `funcion;linea`.
    answers: ["sha256:e6ac09edd121eae3a8262702dfa8eec8e379a8a5cd0090675c4fad0c8ccad196"]
  - id: longitud-minima
    tier: 2
    prompt: |
      En `struct sensor`, `muestras` va justo detrás de `nombre[16]` (compruébalo con `ptype/o struct sensor`). ¿Cuál es la longitud mínima de un nombre para que `strcpy` ya escriba en `muestras`?

      Respuesta: un número.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: contador-incrementado
    tier: 2
    prompt: |
      En el volcado, `s->n` no vale 0 aunque el sensor no tenía ninguna medida guardada. ¿Cuánto vale? (Pista: mira el orden de las instrucciones con `disassemble /s`.)

      Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: estado-al-fallar
    tier: 2
    prompt: |
      Desde el marco de `main`, ¿cuántos datos se habían aceptado y cuántos sensores había en la tabla al fallar?

      Respuesta: `datos;sensores`.
    answers: ["sha256:adc7fc6b2be2dca219ff66f9705767112e5930f6644f55dfa0a6418c644e3bd9"]
  - id: asan-frente-a-fortify
    tier: 3
    prompt: |
      Compila `sensores.c` con `-fsanitize=address` y, aparte, con `-O2 -D_FORTIFY_SOURCE=2`, y ejecuta ambos con `ordenes.txt`. ¿Qué tipo de error informa ASan (por ejemplo `heap-buffer-overflow` o `SEGV`), y en qué línea de `ordenes.txt` se detiene la versión con FORTIFY?

      Respuesta: `tipo;linea`.
    answers: ["sha256:9d44af9c33a643092dcf48ebf4108041d93c4883b10d1a9f491c3180d1c1b80f"]
  - id: fuga-de-memoria
    tier: 3
    prompt: |
      Corrige el programa según la especificación (rechazar el alta de nombres inválidos) y ejecútalo con ASan. LeakSanitizer encuentra otra fuga. ¿Cuántos bytes en cuántas reservas?

      Respuesta: `bytes;reservas`.
    answers: ["sha256:93cf3c4228d3760c3b80b4997ff84030be88e33896510bfa877a67f08437fd1b"]
  - id: salida-corregida
    tier: 3
    prompt: |
      Con el programa corregido, ¿qué dice la línea `TOTAL` del resumen?

      Respuesta: `datos;media`, con la media tal como la imprime el programa.
    answers: ["sha256:2aba8716d1f9e4a54028be15fb52721483959fdbbc59a4e05cd588eca822760e"]
---

> [!info] Escenario
> El agregador de telemetría del invernadero (`sensores`, en C) se cayó anoche procesando el lote de órdenes del día. El equipo de guardia guardó el binario de producción (compilado con `-O0 -g -static`), el
> **volcado de memoria** del proceso, el archivo de órdenes, el registro que escribe el programa y su código fuente. Tienes que encontrar la causa raíz, demostrarla con pruebas, corregirla y obtener el resumen
> que el programa debió imprimir. No se puede volver a ejecutar en producción.

Este laboratorio es el trabajo diario de quien mantiene software de sistemas: un servicio cae, no se puede reproducir a voluntad en la máquina de producción y lo único que hay es lo que quedó escrito.
Usa lo que viste en [[sys-c-profesional]] (memoria dinámica, comportamiento indefinido, herramientas) y [[sys-ensamblador-x86-64]] (marcos de pila, *little-endian*, desensamblado).

> [!warning] Seguridad y entorno
> Trabaja en un contenedor: `docker run --rm -it --cap-add=SYS_PTRACE --security-opt seccomp=unconfined -v "$PWD":/w -w /w gcc:latest bash`, y dentro `apt-get update && apt-get install -y gdb`.
> El binario es estático para que el volcado se pueda analizar en cualquier máquina sin las mismas bibliotecas.

## 1. Cómo trabajar

Sigue las reglas de Agans: **entiende el sistema, haz que falle, mira en vez de suponer, divide y vencerás, cambia una cosa cada vez, lleva un registro**.

1. **Lee la especificación** al principio de `sensores.c` y el registro `sensores.log`. ¿Qué dice el registro de las últimas órdenes? ¿Los avisos explican la caída o son ruido?
2. **Abre el volcado**: `gunzip vuelco.core.gz` y `gdb ./sensores vuelco.core`. gdb dice qué señal terminó el proceso; `bt` da la pila de llamadas; `frame N` cambia de marco; `info locals` y `p` muestran
   variables; `x/8xb dirección` y `x/s dirección` examinan memoria; `ptype/o struct sensor` muestra la disposición de una estructura con sus desplazamientos; `p $_siginfo` da la dirección que provocó el fallo.
3. **Del síntoma a la causa**: el marco 0 dice **dónde** falló, no **por qué**. Si un puntero tiene un valor absurdo, averigua de dónde salen sus bytes y qué código pudo escribirlos. Una dirección que se lee
   como texto ASCII es casi siempre un desbordamiento de una cadena vecina.
4. **Confirma con herramientas**: recompila el fuente con AddressSanitizer y con `_FORTIFY_SOURCE=2`, y compara qué detecta cada uno y **dónde**. Una herramienta que se para en el síntoma y otra que se para en
   la causa dicen cosas distintas.
5. **Corrige según la especificación** (no con un parche que solo evite este caso), vuelve a pasar el programa con ASan y LeakSanitizer, y busca si queda otro fallo.
6. **La flag** es `EXODUS{datos;media}` con los valores de la línea `TOTAL` que imprime el programa corregido, tal cual (por ejemplo `EXODUS{1000;12.345}`).

## 2. Qué aprenderás a reconocer

- La diferencia entre **síntoma** (una escritura en una dirección no mapeada) y **causa** (una copia sin límite muchas líneas de órdenes antes).
- Cómo un desbordamiento **dentro de una estructura** corrompe el campo siguiente, y por qué la dirección corrupta conserva bytes del puntero original.
- Por qué el código con `-O0` puede haber hecho parte de una sentencia antes de fallar (el `n++` ya guardado), y cómo comprobarlo con `disassemble /s`.
- Lo que **no** detecta AddressSanitizer: sus zonas rojas están entre bloques, no entre los campos de un mismo bloque. FORTIFY sí lo detecta aquí porque conoce el tamaño del campo de destino en tiempo de
  compilación (`__builtin_object_size` con modo 1).
- Que corregir un fallo puede destapar otro (la fuga de memoria), y que las herramientas de memoria deben pasar limpias antes de dar el trabajo por terminado.
- Que un registro que no anota todas las operaciones engaña sobre dónde estaba el programa: el volcado manda.

## 3. Lo que debería concluir el informe

Un buen informe de incidente tiene: **resumen** (qué pasó y su impacto), **cronología** (qué orden lo provocó y qué orden lo hizo visible), **causa raíz** demostrada con pruebas del volcado, **corrección**
(validar la entrada según la especificación, nunca `strcpy` sobre un búfer de tamaño fijo con datos externos; `snprintf` o comprobar la longitud), **acciones para que no vuelva a ocurrir** (compilar con
`-D_FORTIFY_SOURCE=2` o 3 y `-Wall -Wextra`, pruebas con entradas fuera de especificación y *fuzzing*, ejecutar las pruebas con ASan y UBSan en integración continua) y la **segunda falta** encontrada
(`baja()` libera la estructura pero no sus muestras). En un entorno real, además, se configura la recogida de volcados (`systemd-coredump` y `coredumpctl`, o `core_pattern`) y se guardan los símbolos de
depuración de cada versión publicada (`objcopy --only-keep-debug`), porque sin ellos el volcado de un binario sin símbolos es casi ilegible.

## 4. Para ir más allá

Repite el análisis con el binario compilado con `-O2 -s` y sus símbolos aparte para ver qué se pierde; usa `rr` (grabación y reproducción) para ir **hacia atrás** desde la caída hasta la escritura culpable
con `watch -l` y `reverse-continue`; pasa el programa por Valgrind (`memcheck`) y compara su informe con el de ASan; y escribe un *fuzzer* sencillo con libFuzzer que encuentre el fallo solo. Continúa con
`lab-sys-rendimiento`.
