---
id: lab-sys-rendimiento
title: "Laboratorio: encontrar el cuello de botella con perf y callgrind, modelarlo, estimar su coste y corregirlo midiendo con estadística"
area: bajo-nivel
trunk_level: 13
kind: laboratorio
prerequisites: [sys-optimizacion-rendimiento, prog-algoritmos]
academic_sources:
  - "Gregg, B. Systems Performance: Enterprise and the Cloud, 2ª ed. Addison-Wesley, 2020 (perf, perfiles por muestreo, gráficos de llamas, metodología)."
  - "Documentación de perf (perf-record(1), perf-report(1); desenrollado con puntero de marco, DWARF y LBR) en kernel.org, y de Valgrind/Callgrind (valgrind.org, manual de Callgrind y callgrind_annotate), consultadas en noviembre de 2026."
  - "Knuth, D. E. The Art of Computer Programming, vol. 3: Sorting and Searching, 2ª ed. Addison-Wesley, 1998 (§6.4, análisis del sondeo lineal)."
  - "Cormen, T. H.; Leiserson, C. E.; Rivest, R. L.; Stein, C. Introduction to Algorithms, 4ª ed. MIT Press, 2022 (cap. 11, tablas hash)."
attachments: [informe.c, genera_log.py, perf-report.txt, perf-report-fp.txt, callgrind.txt, escalado.txt, tiempos.json]
ctf_flag: "sha256:ed8c2621147c92d23b616196b7f8eea97fc34471f612f8e5f1b162e9064f33fe"
hints:
  - "Lee el perfil en este orden: qué símbolo tiene más muestras propias, desde dónde se le llama y qué porcentaje inclusivo tiene cada función tuya. El símbolo caliente casi nunca es el culpable (strcmp es rapidísimo); el culpable es quien lo llama demasiadas veces. Luego pregúntate cuántas veces debería llamarse y escribe esa cuenta como una fórmula en n."
  - "Para las llamadas exactas: en callgrind.txt, las líneas «=> función (Nx)» bajo una línea de código dan cuántas veces se llamó desde ahí. Para el escalado: k = log2(I(2n)/I(n)). Para la mediana de hyperfine: el campo median de cada resultado. Para corregir: una tabla hash (con direccionamiento abierto o con encadenamiento) para las IP y para las rutas, y un solo recorrido para pasar a minúsculas."
  - "Gregg, Systems Performance, capítulos 5 (aplicaciones) y 6 (CPU); el manual de Callgrind; y el capítulo 11 de Cormen et al. o el §6.4 de Knuth para el análisis de las tablas hash."
exercises:
  - id: simbolo-mas-caliente
    tier: 1
    prompt: |
      En `perf-report.txt`, ¿qué símbolo acumula más muestras propias?

      Respuesta: el nombre tal como aparece.
    answers: ["sha256:0100f5548d9cd7faacd3c8ec1ceaecb6c7ad519a8edf7ea31205be0bbb2b6800", "sha256:64205d6e1d5e61180067387d2e860273671148c5fecd6de350a16f31af2e58e3"]
  - id: quien-lo-llama
    tier: 1
    prompt: |
      En el mismo informe (pilas desenrolladas con DWARF), ¿desde qué función de `informe.c` se llega a ese símbolo la mayoría de las veces?

      Respuesta: el nombre de la función.
    answers: ["sha256:2951d4b15901a4d90e52c15d2e3cc664d1bd9e7044aa3aa0f2560cecf57be597"]
  - id: pilas-con-puntero-de-marco
    tier: 2
    prompt: |
      `perf-report-fp.txt` es el mismo programa muestreado desenrollando la pila con el puntero de marco (`--call-graph fp`). ¿Qué función aparece ahí como llamante directo del símbolo más caliente?

      Respuesta: el nombre de la función.
    answers: ["sha256:0d6e4079e36703ebd37c00722f5891d28b0e2811dc114b129215123adcce3605"]
  - id: coste-inclusivo
    tier: 1
    prompt: |
      En `callgrind.txt`, ¿qué porcentaje del total de instrucciones se ejecuta dentro de `busca_ip` (coste inclusivo)?

      Respuesta: un número entero (redondeado).
    answers: ["sha256:8b940be7fb78aaa6b6567dd7a3987996947460df1c668e698eb92ca77e425349"]
  - id: llamadas-a-strcmp
    tier: 2
    prompt: |
      Según `callgrind.txt`, ¿cuántas veces llama `busca_ip` a `strcmp` con 10 000 líneas? Compruébalo con un modelo: una búsqueda lineal que encuentra la IP en la posición j hace j + 1 comparaciones, y una IP nueva compara con todas las anteriores.

      Respuesta: un número entero sin separadores.
    answers: ["sha256:7b2e2e47ea5c7c7321db31a983c5918079b60385c1754b097271ee17ae57ad48"]
  - id: strlen-en-el-bucle
    tier: 2
    prompt: |
      `normaliza` llama a `strlen` en cada vuelta del bucle (un clásico O(L²)). Según `callgrind.txt`, ¿cuántas veces se llama a `strlen` con 10 000 líneas?

      Respuesta: un número entero sin separadores.
    answers: ["sha256:323fcad6d72260ce450f3aba0d329a4e2f331177794e801108c6cf02b5cdd3cf"]
  - id: amdahl-de-normaliza
    tier: 2
    prompt: |
      Si dejaras `normaliza` en coste cero sin tocar nada más, ¿cuál sería la aceleración máxima del programa según su coste inclusivo en `callgrind.txt`?

      Respuesta: con 2 decimales.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: exponente-de-escalado
    tier: 2
    prompt: |
      Con `escalado.txt` (instrucciones medidas con callgrind), ¿qué exponente k tiene el crecimiento instrucciones ∝ nᵏ entre 10 000 y 20 000 líneas?

      Respuesta: con 1 decimal.
    answers: ["sha256:eca06fdd26e513a7b8510c86602285041a916de5491de13373d94fe0d7e04737"]
  - id: comparaciones-del-dia
    tier: 3
    prompt: |
      El día real tuvo 2 000 000 de líneas (`python3 genera_log.py 2000000`). Con el modelo de la búsqueda lineal, ¿cuántas llamadas a `strcmp` haría `busca_ip`?

      Respuesta: un número entero sin separadores.
    answers: ["sha256:01363eb7cd52130c39d69078f83ef3c2d1006bf6ecfb7958a222758c056951f3"]
  - id: tiempo-estimado
    tier: 3
    prompt: |
      Con la mediana de `./informe` en `tiempos.json` (40 000 líneas) y suponiendo que el tiempo es proporcional a las comparaciones de `busca_ip` (calcula las de 40 000 líneas con el modelo), ¿cuántos minutos tardaría el programa original con el día completo?

      Respuesta: un número entero de minutos (redondeado).
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: aceleracion-medida
    tier: 2
    prompt: |
      En `tiempos.json`, ¿cuántas veces más rápida es `./informe_ok` (la versión con tabla hash) que `./informe`, comparando las medianas?

      Respuesta: un número entero (redondeado).
    answers: ["sha256:a46e37632fa6ca51a13fe39a567b3c23b28c2f47d8af6be9bd63e030e214ba38"]
  - id: sondeo-lineal
    tier: 2
    prompt: |
      Una tabla hash con sondeo lineal y factor de carga α = 0,5: según el análisis de Knuth, ¿cuántas comparaciones se esperan en una búsqueda con éxito, ½(1 + 1/(1 − α))?

      Respuesta: con 1 decimal.
    answers: ["sha256:9f29a130438b81170b92a42650f9a94291ecad60bd47af2a3886e75f7f728725"]
  - id: informe-del-dia
    tier: 3
    prompt: |
      Corrige `informe.c` (tablas hash para IP y rutas, normalización en una pasada) y ejecútalo con el día completo. ¿Cuántas IP distintas hay y cuántos bytes se sirvieron?

      Respuesta: `ips;bytes`.
    answers: ["sha256:5bcbda584c506edd567c146ccb04c5893bc6636449f03ec85e55a343900302f4"]
---

> [!info] Escenario
> El resumen diario del registro del servidor web (`informe`, en C) tardaba segundos hasta que un rastreador distribuido empezó a visitar la web desde 200 000 direcciones distintas; ahora el trabajo
> nocturno tarda minutos y cada día más. Tienes el fuente, el generador del registro de ese día (determinista) y lo que midió el equipo: un perfil de `perf` desenrollado con DWARF y otro con puntero de marco,
> un perfil exacto de `callgrind` con 10 000 líneas, las instrucciones con distintos tamaños y los tiempos de `hyperfine`. Encuentra el cuello de botella, demuéstralo con un modelo, estima lo que cuesta,
> corrígelo y mide la mejora.

Este laboratorio aplica el método de [[sys-optimizacion-rendimiento]] a un programa real: **medir, modelar, cambiar una cosa, volver a medir**. La lección más importante es que el código "feo" no siempre es el
lento: aquí hay un `strlen` dentro de la condición de un bucle, el error de libro de texto, y sin embargo no es el problema. Usa lo que viste en [[prog-algoritmos]] sobre búsqueda y tablas hash.

## 1. Cómo trabajar

1. **Reproduce**: compila (`gcc -O2 -g -fno-inline -fno-omit-frame-pointer -o informe informe.c`; sin `-fno-inline` las funciones pequeñas se integran en `main` y el perfil se lee peor) y genera registros
   de distintos tamaños con `python3 genera_log.py N > m.log`.
2. **Perfil por muestreo**: `perf record -e cpu-clock:u -F 999 --call-graph dwarf ./informe < m.log` y `perf report --no-children`. Compara con `--call-graph fp`: las funciones de la biblioteca de C que no
   montan marco de pila (muchas rutinas de cadenas escritas a mano en ensamblador) hacen que el desenrollado por puntero de marco **se salte a su llamante**, y el perfil atribuye la llamada a la función de más arriba. Es un error real que confunde
   a mucha gente; DWARF (o LBR en Intel) lo evita a cambio de más datos.
3. **Perfil exacto**: `valgrind --tool=callgrind ./informe < m.log` y `callgrind_annotate --inclusive=yes --tree=caller`. Callgrind cuenta **instrucciones** (no tiempo) y **llamadas**, sin ruido: dos
   ejecuciones dan lo mismo, lo que permite comparar con un modelo exacto. Observa también que Valgrind y la máquina real pueden elegir variantes distintas de una misma función de la biblioteca (`ifunc` según las extensiones del procesador).
4. **Modelo**: escribe cuántas comparaciones hace la búsqueda lineal en función de n y del número de claves distintas, y comprueba que coincide **exactamente** con las llamadas medidas.
5. **Escalado y estimación**: con `escalado.txt`, el exponente k de I ∝ nᵏ; con el modelo y la mediana medida, el tiempo del día completo.
6. **Corrige** y mide con `hyperfine -N --warmup 2 --runs 10 --input m.log ./informe ./informe_ok`: mediana, no media.
7. **La flag** es `EXODUS{ips;bytes;peticiones}` con el número de IP distintas, los bytes servidos y las peticiones de la ruta más pedida del día completo (`python3 genera_log.py 2000000 | ./informe_ok`).

## 2. Qué aprenderás a reconocer

- **Símbolo caliente frente a culpable**: una función de biblioteca muy rápida puede acumular casi todas las muestras; el problema no es ella, sino **cuántas veces** la llama tu código. El coste
  inclusivo de las funciones propias dice dónde actuar.
- **Un algoritmo cuadrático escondido**: la búsqueda lineal hace O(n·k) comparaciones (n líneas, k claves distintas). Con pocas IP distintas no se nota; con un rastreador que trae 200 000, domina todo.
  El exponente medido no es exactamente 2 porque parte del coste es lineal (lectura y análisis de cada línea) y porque k no crece igual que n cuando se repiten IP.
- **Lo que no importa**: `strlen` en la condición del bucle hace O(L²) por ruta, pero L ≤ 30 y su coste inclusivo es una fracción mínima; por Amdahl, arreglarlo solo no acelera nada. Arréglalo igual, pero
  después del cuello de botella.
- **Modelo frente a medida**: cuando un modelo predice exactamente las llamadas medidas, ya entiendes el programa; cuando no, te falta algo.
- **Estadística**: diez ejecuciones, calentamiento, mediana; la diferencia entre versiones debe ser mucho mayor que la dispersión de cada una.

## 3. Lo que debería concluir el informe

El tiempo de `informe` crece con el número de líneas por el número de claves distintas porque cada búsqueda recorre todas las claves ya vistas; con el tráfico del rastreador eso son del orden
de 10¹¹ comparaciones al día. La solución es una estructura de búsqueda con coste esperado O(1) (una tabla hash con factor de carga acotado) para IP y rutas, que deja el programa limitado por la lectura y el
análisis de las líneas. Hay que añadir una **prueba de rendimiento** a la integración continua con un registro de tamaño realista, para que una regresión de complejidad se detecte antes de producción, y una
alarma si la duración del trabajo nocturno crece. Y documentar la limitación que queda: una tabla hash con una función de dispersión conocida puede atacarse enviando claves que colisionan (ataques de
complejidad algorítmica, Crosby y Wallach, USENIX Security 2003); si las claves vienen de fuera, se usa una función con semilla aleatoria como SipHash.

## 4. Para ir más allá

Genera un gráfico de llamas (`perf script | stackcollapse-perf.pl | flamegraph.pl > llamas.svg`, del repositorio FlameGraph de Gregg) y compáralo con el informe de texto; mide con `perf stat -e
cycles,instructions,cache-misses,branch-misses` las dos versiones y explica la diferencia de IPC; sustituye `sscanf` por un análisis a mano y comprueba con el perfil si ahora es él el cuello de botella; y
prueba el mismo programa en Rust con `HashMap` (que usa SipHash por defecto) frente a `FxHashMap`. Continúa con los proyectos de la rama.
