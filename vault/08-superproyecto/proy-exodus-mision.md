---
id: proy-exodus-mision
title: "Superproyecto: la misión Exodus, un vehículo de exploración planetaria que integra física, matemáticas, ingeniería, robótica, sistemas, ciberseguridad, IA y cuántica"
area: troncal
trunk_level: 20
kind: proyecto
prerequisites: [proy-fis-nbody, proy-mat-numerico, proy-ing-filtros-dsp, proy-rob-robot-movil, proy-sys-kv-rust, proy-sec-cripto-verificada, proy-ia-autograd, proy-cua-simulador]
academic_sources:
  - "Siegwart, R.; Nourbakhsh, I. R.; Scaramuzza, D. Introduction to Autonomous Mobile Robots, 2ª ed. MIT Press, 2011; Wong, J. Y. Theory of Ground Vehicles, 4ª ed. Wiley, 2008 (resistencia a la rodadura y tracción)."
  - "Plett, G. L. Battery Management Systems, vol. I: Battery Modeling. Artech House, 2015 (modelo de tensión en vacío y resistencia interna)."
  - "Liu, C. L.; Layland, J. W. Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment. JACM 20(1), 1973; Joseph, M.; Pandya, P. Finding Response Times in a Real-Time System. The Computer Journal 29(5), 1986."
  - "Bennett, C. H.; Brassard, G. Quantum cryptography: Public key distribution and coin tossing. Proc. IEEE ICCSSP, 1984; Shor, P. W.; Preskill, J. Simple proof of security of the BB84 quantum key distribution protocol. PRL 85, 2000."
  - "Nir, Y.; Langley, A. RFC 8439 (ChaCha20-Poly1305), 2018; Krawczyk, H.; Eronen, P. RFC 5869 (HKDF), 2010; Hampel, F. R. The influence curve and its role in robust estimation. JASA 69, 1974 (mediana y MAD)."
attachments: [prueba.sh, mision.txt]
exercises:
  - id: hito-1-fisica-de-la-travesia
    tier: 2
    prompt: |
      **Hito 1.** `rover fisica MISION dt` integra con RK4 la dinámica longitudinal del vehículo sobre el perfil del terreno (gravedad, rodadura, arrastre y motor limitado por fuerza y potencia, §2) hasta recorrer la longitud de la misión: tiempos y velocidades cada 10 m, energías del motor y perdida, y el balance energético. Un parámetro que falta o una pendiente imposible dan código 1.

      Comprueba con `bash prueba.sh ./rover 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:1ab95fa4f57833401a3f7fd7b916f845078032bc70e80bda1605176879255230"]
  - id: hito-2-estimacion
    tier: 2
    prompt: |
      **Hito 2.** `rover estima MISION λ` localiza 20 posiciones por trilateración con Gauss-Newton a partir de distancias ruidosas a las balizas, y suaviza la trayectoria resolviendo (I + λDᵀD)z = p (§3). Con menos de tres balizas, código 1.

      Comprueba con `bash prueba.sh ./rover 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4737a1a59bb1077c6dcd0938ad7ff91aea6627688863843f22f934a159355268"]
  - id: hito-3-energia
    tier: 2
    prompt: |
      **Hito 3.** `rover energia MISION dt` alimenta el perfil de potencia de la travesía desde una batería con curva de tensión en vacío y resistencia interna (§4) y calcula cuántas travesías completas permite antes de bajar del 20 % de carga.

      Comprueba con `bash prueba.sh ./rover 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f5ea8e82aa6a007588ecc4c01b6a966915589ad884a196055bba78e21482883e"]
  - id: hito-4-navegacion
    tier: 2
    prompt: |
      **Hito 4.** `rover navega MISION` genera el mapa de alturas de la zona, marca como impracticables las celdas con pendiente excesiva y planifica con A* con un coste que penaliza la pendiente (§5).

      Comprueba con `bash prueba.sh ./rover 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:0293b79694455b0c606726e6b4e2f364b58af4e758330f4af3653d3d2b698a17"]
  - id: hito-5-sistemas
    tier: 3
    prompt: |
      **Hito 5.** `rover telemetria MISION` empaqueta la telemetría en tramas con CRC-32, la pasa por un canal que pierde, corrompe, duplica y reordena, y la reconstruye; `rover planifica MISION` analiza las tareas del ordenador de a bordo con tiempos de respuesta en prioridad monótona en tasa y con EDF (§6).

      Comprueba con `bash prueba.sh ./rover 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:fa3a57853ed9eebe162172aa3ae8c92d6a3aa0152009d064eb178b26de8e8e36"]
  - id: hito-6-enlace-seguro
    tier: 3
    prompt: |
      **Hito 6.** `rover enlace MISION` deriva la clave con HKDF, cifra cada paquete con ChaCha20-Poly1305 usando el número de secuencia como nonce y como datos asociados, y rechaza las falsificaciones, las manipulaciones y las repeticiones de un atacante (§7).

      Comprueba con `bash prueba.sh ./rover 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:7dfb2590ff9406f4b544bf27d09ea4c60ad76500bf461163fc9791d2b49de4b8"]
  - id: hito-7-percepcion
    tier: 3
    prompt: |
      **Hito 7.** `rover terreno MISION epocas` clasifica el terreno (roca, arena, regolito) con regresión logística multinomial sobre rasgos normalizados y detecta anomalías en la corriente con la mediana y la desviación absoluta mediana (§8).

      Comprueba con `bash prueba.sh ./rover 7`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:930e7649ae190ae2ce3c03794cd88f61066d1c1ad6d75539caa4d16089e3c349"]
  - id: hito-8-clave-cuantica
    tier: 3
    prompt: |
      **Hito 8.** `rover bb84 MISION n espia ruido` simula la distribución cuántica de claves BB84 con o sin espía y con ruido: criba, estimación del QBER, aborto por encima del 11 % y amplificación de privacidad con una matriz de Toeplitz (§9).

      Comprueba con `bash prueba.sh ./rover 8`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:167fc3ce561c2511cb908e6f8b825a5272f585f88257800342d6a1c9c77926b8"]
  - id: hito-9-mision-completa
    tier: 3
    prompt: |
      **Hito 9.** `rover mision MISION` encadena todo: ruta, travesía por esa ruta, energía, telemetría, clave BB84, enlace cifrado con esa clave y percepción, y emite el informe con el código de misión (§10).

      Comprueba con `bash prueba.sh ./rover 9`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:93413282f58d42dece9d43844b8e0374c4e9f1532637f5b325aa8b6bfed79b18"]
---

Este es el proyecto final de Exodus: un vehículo autónomo de exploración en **Marte**, simulado de principio a fin, en el que cada rama aporta una pieza y las piezas se usan unas a otras. La física dice cuánto
tarda y cuánta energía gasta en la ruta que planifica la robótica; la ingeniería dice cuántas veces puede recorrerla con su batería; la telemetría viaja por un canal que falla y la reconstruyen los sistemas; la
protege una clave que se ha acordado con un protocolo cuántico; y la IA reconoce el terreno y avisa de las averías. Al final, un único programa ejecuta la misión entera y emite un informe con un **código de
misión** que solo sale si todo encaja. Es lo más parecido a un proyecto de ingeniería de sistemas real que se puede hacer a solas, y exige haber hecho antes el proyecto de cada rama.

> [!info] Cómo abordarlo
> Hazlo en orden: cada hito usa lo anterior y reutiliza código de tus proyectos de rama (Kepler y RK4 de [[proy-fis-nbody]], álgebra lineal de [[proy-mat-numerico]], A* de [[proy-rob-robot-movil]],
> ChaCha20-Poly1305 y HKDF de [[proy-sec-cripto-verificada]], el entrenamiento de [[proy-ia-autograd]] y la simulación de [[proy-cua-simulador]]). Organízalo como un sistema de verdad: un módulo por
> subsistema, un formato de datos común y pruebas por módulo antes de integrar.

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `rover` en el lenguaje que quieras, con una orden por hito. Todas leen el archivo de la misión (el adjunto **`mision.txt`**: parámetros del vehículo, del terreno, de la batería, de las balizas, del mapa y
de las tareas, con su significado comentado). El adjunto **`prueba.sh`** ejecuta tu programa con ese archivo y con variantes (otra semilla, un parámetro que falta, una pendiente imposible, una sobrecarga de
tareas, un mapa sin camino) y da un código por hito; con `-v` muestra las salidas.

**Formato.** 7 cifras (`%.6e`), 4 cifras (`%.3e`) y 2 cifras (`%.1e`) según el caso, siempre como el redondeo correcto de x·(1 + 10⁻¹²), y cero (en el formato correspondiente) si |x| < 10⁻¹². **Azar**: el generador
congruencial de 64 bits de Exodus, s ← (6364136223846793005·s + 1442695040888963407) mod 2⁶⁴, u = ⌊s/2¹¹⌋/2⁵³, con la semilla que indica cada hito (la `semilla` de la misión más un desplazamiento), y los números
pedidos exactamente en el orden descrito. **Redondeo a entero**: al más próximo, con la mitad alejándose de cero. Un archivo con una clave desconocida o un número de valores incorrecto da código 1.

## 2. Hito 1: física de la travesía (`fisica MISION dt`)

El vehículo avanza por un perfil h(s) = a₁ sen(k₁s) + a₂ sen(k₂s + φ₂) (línea `terreno a1 k1 a2 k2 f2`), donde **s es la distancia recorrida sobre el terreno**, así que sen θ = h′(s) (si |h′| ≥ 1, código 1). Con
la masa m, la gravedad g, los coeficientes de rodadura `crr` y de arrastre (`rho`, `cda`) y el motor limitado por fuerza y por potencia:

- F = min(fmax, pmax / max(v, vmin)); gravedad m·g·h′(s); pérdidas crr·m·g·√(1 − h′²)·signo(v) + ½·rho·cda·v·|v| (signo(v) = 1 si v ≥ 0).
- Estado (s, v, E_m, E_p) con ds/dt = v, m·dv/dt = F − gravedad − pérdidas, dE_m/dt = F·v (trabajo del motor) y dE_p/dt = pérdidas·v; RK4 de paso `dt` desde (0, v0, 0, 0).
- Cada vez que s cruza 10, 20, … ≤ L en un paso (s_antes < marca ≤ s_después), imprime `marca t v` interpolando linealmente t y v dentro del paso. Si tras un paso v ≤ 0, código 1 (no puede subir).
- En el paso en que s ≥ L, interpola linealmente el estado hasta s = L e imprime `tiempo`, `velocidad_final`, `energia_motor` y `energia_perdida`. Después, con el **estado al final de ese paso** (sin interpolar),
  `balance` = |ΔK + ΔU − (E_m − E_p)| / E_m, que mide el error de integración (con dt = 0,01 queda por debajo de 10⁻¹²; con dt = 0,5 se ve).

## 3. Hito 2: estimación (`estima MISION λ`)

- **Verdad**: 20 posiciones (6i, 2 sen(0,3i)), i = 0…19. **Medidas** (semilla + 0): para cada posición y cada `baliza` en el orden del archivo, la distancia más `ruido_distancia`·(2u − 1). Con menos de tres balizas, código 1.
- **Gauss-Newton** desde la estimación anterior (la primera, desde (0, 0)): filas del jacobiano ((x − b_x)/d, (y − b_y)/d), residuos r − d, paso Δ de (JᵀJ)Δ = Jᵀr; hasta 50 iteraciones, parando cuando |Δ| < 10⁻¹⁰.
  Imprime cada estimación y `iteraciones` (el total).
- **Suavizado**: con D la matriz de segundas diferencias (filas i = 1…18: 1, −2, 1), resuelve (I + λDᵀD)z = p para las x y para las y; imprime `suavizado i x y` para i = 0, 5, 10, 15 y 19, y `rms_estimado` y
  `rms_suavizado` (raíz del error cuadrático medio de posición frente a la verdad). Verás el compromiso sesgo-varianza: λ = 0 no cambia nada, un λ moderado reduce el error y uno grande aplana la curva real y lo
  aumenta.

## 4. Hito 3: energía (`energia MISION dt`)

El perfil de potencia es F·v al **principio de cada paso** de la integración del hito 1 con el mismo dt. En cada paso: P = max(F·v, 0) + `carga`; V₀ = tensión en vacío interpolada linealmente en la tabla `ocv`
(constante fuera de ella); con la resistencia interna R, la corriente es I = (V₀ − √(V₀² − 4RP))/(2R) (si el discriminante es negativo, código 1: la batería no puede dar esa potencia); la tensión, V = V₀ − IR;
la energía extraída aumenta en V·I·dt y el estado de carga baja I·dt/(3600·Q). El vehículo repite la travesía. Tras la primera, imprime `soc_tras_un_recorrido` y `tension_minima_un_recorrido`; cuando el estado de
carga baja de 0,2 (se comprueba tras cada paso), imprime `recorridos_completos`, `pasos` (todos los pasos simulados), `tension_minima` y `energia_extraida`.

## 5. Hito 4: navegación (`navega MISION`)

- **Mapa** (`mapa filas columnas celda`; semilla + 1): seis colinas gaussianas con, en este orden, c_x = u·columnas·celda, c_y = u·filas·celda, altura 1 + 3u y anchura σ = 2 + 4u; la altura de la celda (f, c) es
  Σ a·exp(−((c·celda − c_x)² + (f·celda − c_y)²)/(2σ²)).
- **Pendiente**: el módulo del gradiente con diferencias centradas (de un solo lado en los bordes). Una celda es practicable si su pendiente ≤ `pendiente_max`; su penalización es ⌊10·pendiente/pendiente_max⌋.
- **A*** de la casilla (0, 0) a la (filas − 1, columnas − 1) (si alguna es impracticable, código 1), con 8 vecinos, sin cortar esquinas, la heurística octil 10/14 y la cola ordenada por (f, h, fila, columna) como en
  [[proy-rob-robot-movil]]; el coste de un movimiento es 10 (recto) o 14 (diagonal) multiplicado por (1 + penalización de la casilla de destino).
- Imprime `libres k de n`, y `coste` y `expandidos` (o `coste -` si no hay camino), `pasos`, `longitud` (celda por cada movimiento recto, celda·√2 por cada diagonal), `desnivel_positivo` (la suma de las subidas) y
  `pendiente_maxima_en_ruta`.

## 6. Hito 5: sistemas (`telemetria MISION` y `planifica MISION`)

- **Registros**: se integra el hito 1 con dt = 0,1 desde el principio mientras s < L; en los pasos 0, 10, 20… (antes de integrarlos) se guarda (secuencia mód 2¹⁶, t·1000, s·1000, v·1000, F·v·1000), redondeados.
  **Trama**: `AA 55`, longitud (18), la carga en *big-endian* (u16, u32, i32, i32, i32) y el CRC-32 de la carga (el de zlib) en *big-endian*.
- **Canal** (semilla + 5), para cada trama en orden: si u < 0,05 se pierde (y no se piden más números para ella); si no, si u < 0,05 se invierte el bit b = ⌊u·8·25⌋ (la trama tiene 25 bytes) (el bit b mód 8, contando desde el menos
  significativo, del byte ⌊b/8⌋); se envía; y si u < 0,03 se envía otra vez. Después, con i = 0: mientras i + 1 < número de tramas, si u < 0,05 se intercambian la i y la i + 1 y i aumenta en 2; si no, en 1.
- **Receptor** sobre el flujo de bytes: en cada posición, si no hay `AA 55`, o la longitud no es 18, o no cabe la trama, avanza un byte; si el CRC no coincide, cuenta un error y avanza un byte; si coincide, la trama
  es válida y salta tras ella. Imprime `registros`, `bytes`, `tramas_validas`, `crc_erroneos`, `duplicadas` (secuencia ya vista), `desordenadas` (secuencia menor que la mayor vista, entre las nuevas), `perdidas`
  (registros cuya secuencia nunca llegó) y `suma_velocidades` (de las únicas, en mm/s).
- **Planificación** (líneas `tarea nombre C T`, enteros en milisegundos; sin tareas, código 1): prioridad **monótona en tasa** (menor periodo, más prioridad; empate por nombre). Imprime `utilizacion` U = ΣC/T y la
  cota de Liu y Layland n(2^{1/n} − 1); para cada tarea, el tiempo de respuesta por la iteración R = C_i + Σ_{j de más prioridad} ⌈R/T_j⌉·C_j (desde C_i + ΣC_j, hasta que no cambie o supere T_i): `nombre R T` (o
  `-` si supera el periodo); y `planificable_rm` y `planificable_edf` (U ≤ 1). La prueba incluye un conjunto con U = 0,97, por encima de la cota, que **sí** es planificable: la cota es suficiente, no necesaria.

## 7. Hito 6: enlace seguro (`enlace MISION`)

- Los 40 primeros registros del hito 5. Material de clave: 32 bytes ⌊256u⌋ (semilla + 6), o en el hito 9 la clave de BB84. Clave = HKDF-SHA-256(sal `exodus`, material, info `telemetria`, 32 bytes).
- Cada carga se sella con ChaCha20-Poly1305 con nonce = 4 bytes a cero ‖ secuencia en 64 bits *little-endian* y datos asociados `EXODUS` ‖ secuencia en 16 bits *big-endian*.
- **Atacante** (semilla + 7): después de enviar el paquete i (desde 0): si i ∈ {10, 20, 30}, repite el paquete legítimo ⌊u·i⌋; si i ∈ {15, 25}, envía (secuencia_i + 1, 34 bytes ⌊256u⌋); si i = 35, reenvía el
  paquete i con el byte ⌊18u⌋ alterado en su bit menos significativo.
- **Receptor**: si la etiqueta no es válida, `rechazados_autenticacion`; si lo es pero la secuencia no es mayor que la última aceptada, `rechazados_repeticion`; si no, lo acepta. Imprime `clave` (8 primeros bytes en
  hexadecimal), `paquetes`, `aceptados`, los dos rechazos y `resumen` (8 primeros bytes del SHA-256 de las cargas aceptadas concatenadas). Observa que la autenticación sola no impide la repetición: hace falta el número de
  secuencia autenticado.

## 8. Hito 7: percepción (`terreno MISION epocas`)

- **Datos** (semilla + 9): 300 ejemplos, clase i mód 3 (roca, arena, regolito), tres rasgos (deslizamiento, vibración, corriente) = media + desviación·g, con g = (suma de 12 u) − 6 (una normal aproximada) y las medias
  (0,05; 0,8; 4,0), (0,30; 0,3; 6,5), (0,15; 0,5; 5,0) y desviaciones (0,03; 0,15; 0,6), (0,08; 0,10; 0,8), (0,05; 0,12; 0,7), en este orden. Prueba: i mód 5 = 4.
- **Modelo**: rasgos normalizados con la media y la desviación típica (poblacional) del entrenamiento; regresión logística multinomial (pesos 3 × 4 a cero, con sesgo); descenso de gradiente por lotes completos con tasa
  0,5 sobre el gradiente medio. Imprime `epoca e perdida L` para e = 0, ⌊E/2⌋ y E; `aciertos_entrenamiento`, `aciertos_prueba` (clase de mayor probabilidad; empate, la menor) y `confusion` (3 × 3 por filas:
  verdadera, predicha). Al ser un problema convexo, el entrenamiento largo también es reproducible.
- **Anomalías** (semilla + 10): 500 lecturas de corriente 5 + 0,3g; se suman 4 A en las posiciones 50, 120, 333 y 401 y se restan 3,5 A en la 250. Con la mediana (media de los valores 250.º y 251.º ordenados) y la
  desviación absoluta mediana MAD, una lectura es anómala si |x − mediana|/(1,4826·MAD) > 3,5. Imprime `anomalias` con sus posiciones. Media y desviación típica no servirían: las propias anomalías las contaminan.

## 9. Hito 8: clave cuántica (`bb84 MISION n espia ruido`)

- (semilla + 11) Para cada fotón, en este orden: bit y base de Alicia (u < 0,5); si hay espía: su base y, si no coincide con la del fotón, un bit al azar; el fotón pasa a llevar el bit y la base del espía; la base
  de Bob y, si no coincide con la del fotón, un bit al azar; y con probabilidad `ruido` el bit de Bob se invierte.
- **Criba**: las posiciones donde coinciden las bases de Alicia y de Bob. **Prueba**: los cribados de índice j mód 4 = 0; `errores` y QBER q = errores/prueba. Si q > 0,11, `estado abortada`. La clave son los demás
  cribados.
- **Amplificación de privacidad**: con h la entropía binaria, m = ⌊k(1 − 2h(q))⌋ bits; una matriz de Toeplitz con k + m − 1 bits (u < 0,5, siguiendo el mismo generador), T[i][j] = r[i − j + k − 1], y la clave final
  bit_i = ⊕_j T[i][j]·clave_j. Imprime `enviados`, `cribados`, `prueba`, `errores`, `qber`, `estado`, `longitud_final`, `clave` (16 primeros bytes en hexadecimal, bits de mayor a menor peso y el último byte rellenado con
  ceros) y `coinciden` (si las claves finales de Alicia y Bob son iguales). Con espía, el QBER ronda el 25 % y se aborta; con un 3 % de ruido se acepta, pero las claves **no coinciden**: falta la reconciliación de
  errores (Cascade o códigos LDPC), que es la primera ampliación.

## 10. Hito 9: la misión completa (`mision MISION`)

Ejecuta, capturando la salida de cada etapa: la **ruta** (hito 4; si no hay camino, imprime `mision abortada: no hay ruta` y termina); la **travesía** de esa ruta (hito 1 con L = la `longitud` impresa por la ruta,
leída del texto con 7 cifras, y dt = 0,01); la **energía** (hito 3, dt = 0,05); la **telemetría** (hito 5); la **clave** (hito 8 con n = 2000, sin espía ni ruido); el **enlace** (hito 6 con esa clave como material); y la
**percepción** (hito 7 con 200 épocas). Imprime una línea por etapa, `[etapa] ` seguido de sus líneas unidas con ` | `, y `codigo_mision` con los 12 primeros caracteres hexadecimales del SHA-256 de esas líneas unidas
con saltos de línea.

## 11. Arquitectura y calidad

Un módulo por subsistema con interfaces explícitas (el perfil de potencia, la ruta, los registros, la clave), un lector de la misión con validación, y un orquestador que solo encadena. Pruebas por módulo con casos
analíticos: el balance de energía, una sola baliza a distancia conocida, la batería a potencia constante (descarga lineal), un mapa plano (la ruta es la diagonal), una trama sin errores, la criba sin espía. Mide el
tiempo de cada etapa. Si lo haces en Rust o C++, es un buen momento para paralelizar etapas independientes.

## 12. Ampliaciones

Reconciliación de errores en BB84 (Cascade) y su coste en bits filtrados; el intercambio de claves clásico X25519 como respaldo; seguir la ruta con persecución pura y la dinámica del hito 1 a la vez; un EKF que
fusione la odometría con las balizas; fallos inyectados (un sensor degradado, la pérdida del enlace durante un tramo) y un plan de contingencia; un panel web con la telemetría; y llevar el ordenador de a bordo a un
microcontrolador real con un sistema operativo de tiempo real.

## 13. Recursos

Los proyectos de cada rama, las normas y artículos citados, y las páginas de [recursos](/recursos) de todas las ramas.
