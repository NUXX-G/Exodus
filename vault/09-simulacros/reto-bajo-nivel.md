---
id: reto-bajo-nivel
title: "Reto final: sistemas y bajo nivel"
area: bajo-nivel
trunk_level: 12
kind: examen
prerequisites: ["prog-bash-scripting","sys-c-memoria","sys-ensamblador-x86-64","sys-sistemas-operativos","sys-concurrencia","lab-sys-depuracion"]
academic_sources:
  - "Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."
exam: {"items":[{"ref":"prog-bash-scripting/registro-de-accesos","puntos":1},{"ref":"sys-c-memoria/buffer-static-compartido","puntos":1},{"ref":"sys-ensamblador-x86-64/argumentos-en-la-pila","puntos":1},{"ref":"sys-sistemas-operativos/algoritmo-del-banquero","puntos":1},{"ref":"sys-concurrencia/linealizabilidad","puntos":1},{"ref":"lab-sys-depuracion/asan-frente-a-fortify","puntos":1},{"ref":"prog-bash-scripting/resumen-de-notas","puntos":1}],"chained":true,"pass":1}
---
# Reto final: sistemas y bajo nivel

Del shell al kernel: scripts, memoria en C, ensamblador x86-64, sistemas operativos, concurrencia y depuración,
terminando con un programa tuyo que tiene que pasar las pruebas.

## Cómo funciona

Cada paso es un problema de un tema distinto de la rama, de dificultad creciente. El siguiente no se abre hasta que
resuelves el actual: no hay límite de tiempo ni de intentos, pero hay que llegar al final. Si un paso se te atasca, vuelve
al nodo de ese tema (enlazado en el resultado) y a sus pistas. Los pasos de código se prueban con el script de pruebas
del nodo de origen, en tu ordenador.
