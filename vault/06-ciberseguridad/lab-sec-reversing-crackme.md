---
id: lab-sec-reversing-crackme
title: "Laboratorio: ingeniería inversa de un comprobador de licencias (ELF x86-64, análisis estático y dinámico)"
area: ciberseguridad
trunk_level: 11
kind: laboratorio
prerequisites: [sys-ensamblador-x86-64, sys-c-profesional]
academic_sources:
  - "Eagle, C.; Nance, K. The Ghidra Book: The Definitive Guide. No Starch Press, 2020."
  - "Andriesse, D. Practical Binary Analysis. No Starch Press, 2018."
  - "Documentación de GNU Binutils (objdump, readelf, strings) y de GDB. sourceware.org, consultada en noviembre de 2026."
attachments: [licencia.elf]
ctf_flag: "sha256:42401490a2cdf31c6f694eb4aab6b05313302a8cce4d7edc6bbc77fb9d7d3efe"
hints:
  - "Un comprobador de licencias suele hacer tres cosas: verificar el formato (longitud, separadores), transformar cada carácter y compararlo con datos guardados en el binario, y a veces una suma de control. Si la transformación es reversible (XOR lo es: x ^ k ^ k = x), basta con aplicarla a los datos guardados."
  - "objdump -d --no-show-raw-insn licencia.elf | less y busca <comprueba_licencia>; mira las constantes inmediatas (cmp $0xe, xor $0x..). La tabla está en .rodata: objdump -s -j .rodata licencia.elf. En Ghidra, el descompilador muestra la función casi como C."
  - "The Ghidra Book (capítulos de descompilación y de análisis de datos), Practical Binary Analysis (capítulos 1 a 5) y la convención de llamada System V AMD64 que viste en sys-ensamblador-x86-64."
exercises:
  - id: arquitectura
    tier: 1
    prompt: |
      ¿Para qué arquitectura está compilado `licencia.elf`? (`file` o `readelf -h`.)

      Respuesta: la arquitectura, tal como la nombra `file` (por ejemplo `ARM aarch64`).
    answers: ["sha256:1bd58d43d7dbf4ade8c88564940841e3d31f1e248aa43af028e67f9904a49e74", "sha256:7520b5a1b312efde4fd7e2793ef4bc0cf8f1c235f778d203ab7216a0e31b3880"]
  - id: funcion-de-validacion
    tier: 1
    prompt: |
      El binario no está despojado de símbolos. ¿Cómo se llama la función que decide si la licencia es válida?

      Respuesta: el nombre.
    answers: ["sha256:4f222ff2da0258bbbf56a2687b87bced7359eaa540834c491b5a7ed3f2188738"]
  - id: longitud-de-la-clave
    tier: 1
    prompt: |
      ¿Cuántos caracteres debe tener la clave?

      Respuesta: un número.
    answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
  - id: separadores
    tier: 2
    prompt: |
      ¿En qué posiciones (contando desde 0) deben ir los guiones?

      Respuesta: las dos posiciones separadas por `;`.
    answers: ["sha256:6fb73a3356b452f5575eeb852cf8242645f055592fa9ebbfb747165bdec5de1e"]
  - id: constante-xor
    tier: 2
    prompt: |
      Cada carácter que no es un guion se combina con una constante mediante XOR y se compara con una tabla. ¿Qué constante es, en decimal?

      Respuesta: un número.
    answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
  - id: suma-de-control
    tier: 3
    prompt: |
      Además, una suma de control de los caracteres (sin guiones) debe valer una constante. ¿Cuál, en hexadecimal?

      Respuesta: el valor en hexadecimal.
    answers: ["sha256:96455a707b711ca5d0ee93a079826dde1cb0fcea597db8950bdbc446a3d613e7", "sha256:a2ef3d781f6b20189b35ba8b31f0166f0b402ddf8d71ce7f344258043c82710b"]
  - id: clave
    tier: 3
    prompt: |
      ¿Cuál es la clave de licencia válida? (Compruébala ejecutando el binario en un contenedor o una máquina virtual.)

      Respuesta: la clave.
    answers: ["sha256:e829430e5a534ae11ffc6cbb0689f5e826d0f7714454a3d20c929abf6c1a1eab"]
---

> [!info] Escenario
> Una aplicación interna antigua, `licencia.elf`, pide una clave al arrancar. El proveedor desapareció y nadie la conserva. Tienes autorización para analizar el binario y recuperar la clave
> válida (un caso real de mantenimiento de software heredado). El binario no está despojado de símbolos.

Un laboratorio de **ingeniería inversa** sobre un binario propio del curso: se analiza para entender qué hace, sin explotar ninguna vulnerabilidad. Es la base del análisis de *malware*, de la
auditoría de software sin código fuente y de la interoperabilidad. Usa lo que viste en [[sys-ensamblador-x86-64]] (registros, llamadas, convención System V) y en [[sys-c-profesional]] (cómo se ve
el C compilado).

> [!warning] Seguridad
> Ejecuta binarios descargados solo en una máquina virtual o un contenedor desechable (`docker run --rm -it -v "$PWD":/w gcc:latest bash`). Este es inofensivo, pero el hábito es el que te protegerá
> el día que no lo sea. Comprueba antes el SHA-256 que aparece junto al enlace de descarga.

## 1. Cómo trabajar

1. **Reconocimiento**: `file`, `readelf -h -S`, `strings -n 6`. ¿Qué formato, arquitectura, bibliotecas y símbolos tiene?
2. **Análisis estático**: `objdump -d` (o Ghidra, de la NSA y libre, o Cutter/rizin). Localiza `main` y la función de validación; reconstruye en pseudocódigo qué comprueba y en qué orden.
3. **Datos**: las tablas y cadenas viven en `.rodata` (`objdump -s -j .rodata`).
4. **Análisis dinámico** para confirmar: `gdb ./licencia.elf`, un punto de ruptura en la función, `run CLAVE`, y sigue las comparaciones con `ni` e `info registers`.
5. **La flag** es `EXODUS{CLAVE}`, con la clave válida tal cual (con sus guiones).

## 2. Qué aprenderás a reconocer

- El **prólogo y epílogo** de las funciones, el paso de argumentos en `rdi`, `rsi` y el valor de retorno en `eax`.
- Un **bucle** en ensamblador: un contador, una comparación y un salto hacia atrás.
- Comprobaciones tempranas que salen con `return 0` (aquí, la longitud y los separadores), muy útiles para descartar ramas.
- Una **transformación reversible** (XOR con una constante) frente a una que no lo es (una suma de control): la primera se invierte; la segunda se comprueba.
- La diferencia entre el código optimizado (`-O1`) y el que escribiría una persona: variables en registros, comparaciones reordenadas.

## 3. Lo que debería concluir el informe

Ocultar un secreto dentro de un binario **no es protegerlo**: todo lo que el programa necesita para comprobar la clave está en el propio archivo, así que se puede extraer. Una licencia robusta
se verifica con **criptografía de clave pública** (el proveedor firma los datos de la licencia con su clave privada y el programa solo lleva la pública, como en las licencias firmadas con Ed25519), o en un
servidor. Lo mismo vale para contraseñas, claves de API y tokens incrustados en aplicaciones móviles y de escritorio.

## 4. Para ir más allá

Recompila tú un comprobador parecido con `-O2` y con `-s` (sin símbolos) y repite el análisis para ver cómo cambia la dificultad; prueba el descompilador de Ghidra y compáralo con tu pseudocódigo; y
escribe la versión con firma Ed25519 (con libsodium o con el crate `ed25519-dalek`) para ver por qué ya no basta con leer el binario. Continúa con `sec-reversing-malware`.
