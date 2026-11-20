---
id: reto-ciberseguridad
title: "Reto final: redes y ciberseguridad"
area: ciberseguridad
trunk_level: 16
kind: examen
prerequisites: ["sec-redes-tcpip","lab-sec-captura-red","sec-criptografia","lab-sec-cripto-mal-usada","sec-forense-logs","sec-reversing-malware","lab-sec-reversing-crackme"]
academic_sources:
  - "Exodus: ejercicios de los nodos enlazados (cada uno cita su bibliografía)."
exam: {"items":[{"ref":"sec-redes-tcpip/arranque-lento","puntos":1},{"ref":"lab-sec-captura-red/datos-robados","puntos":1},{"ref":"sec-criptografia/contar-puntos","puntos":1},{"ref":"lab-sec-cripto-mal-usada/bloques-distintos","puntos":1},{"ref":"sec-forense-logs/cadena-de-hashes","puntos":1},{"ref":"sec-reversing-malware/imphash","puntos":1},{"ref":"lab-sec-reversing-crackme/clave","puntos":1}],"chained":true,"pass":1}
---
# Reto final: redes y ciberseguridad

Una cadena de análisis **defensivo**: tráfico de red, criptografía mal usada, registros de un incidente e ingeniería
inversa de malware. Todo con los artefactos de los laboratorios (nada contra sistemas reales).

## Cómo funciona

Cada paso es un problema de un tema distinto de la rama, de dificultad creciente. El siguiente no se abre hasta que
resuelves el actual: no hay límite de tiempo ni de intentos, pero hay que llegar al final. Si un paso se te atasca, vuelve
al nodo de ese tema (enlazado en el resultado) y a sus pistas. Los pasos de código se prueban con el script de pruebas
del nodo de origen, en tu ordenador.
