---
id: proy-ing-filtros-dsp
title: "Proyecto: una cadena de procesado digital de señal (diseño FIR por ventana, filtrado y SNR, biquads IIR, coma fija Q15, diezmado polifásico y decodificador DTMF con Goertzel)"
area: ingenieria
trunk_level: 13
kind: proyecto
prerequisites: [ing-procesado-digital-senal, ing-senales-sistemas]
academic_sources:
  - "Oppenheim, A. V.; Schafer, R. W. Discrete-Time Signal Processing, 3ª ed. Pearson, 2010 (diseño por ventanas, estructuras, cuantificación)."
  - "Lyons, R. G. Understanding Digital Signal Processing, 3ª ed. Prentice Hall, 2010 (coma fija, Goertzel, polifásicos)."
  - "Bristow-Johnson, R. Cookbook formulae for audio EQ biquad filter coefficients (Audio EQ Cookbook), publicado por la W3C como nota del grupo de audio."
  - "ITU-T Recommendation Q.23 (frecuencias DTMF); Goertzel, G. An Algorithm for the Evaluation of Finite Trigonometric Series. American Mathematical Monthly 65(1), 1958."
attachments: [prueba.sh]
exercises:
  - id: hito-1-diseno-fir
    tier: 1
    prompt: |
      **Hito 1.** `dsp fir N fc VENTANA` diseña un filtro FIR paso bajo de N coeficientes (N impar) por el método de la ventana (`rect`, `hamming` o `blackman`), normalizado a ganancia 1 en continua, e imprime los coeficientes y la respuesta en dB en cinco frecuencias (§2). N par, fc fuera de (0, 0,5) o una ventana desconocida dan código 1.

      Comprueba con `bash prueba.sh ./dsp 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:28a0e5cab136e3b9ef77c34db1ff9f79c33690215e5401316e09d10250e1af15"]
  - id: hito-2-filtrado
    tier: 1
    prompt: |
      **Hito 2.** `dsp filtra N fc VENTANA SEMILLA` filtra por convolución directa una señal de prueba (tono útil, tono interferente y ruido, §3) y mide la relación señal-ruido antes y después, compensando el retardo de grupo del filtro de fase lineal.

      Comprueba con `bash prueba.sh ./dsp 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:1628401e8cccd4be0dacdb00e81fc0d70489454c23a57e52ed1accb43c50ccdc"]
  - id: hito-3-biquad
    tier: 2
    prompt: |
      **Hito 3.** `dsp biquad TIPO f0 Q` calcula los coeficientes de un filtro IIR de segundo orden (`pasabajos`, `pasaaltos` o `banda-eliminada`, fórmulas del §4), el módulo de sus polos, si es estable y su respuesta en dB en tres frecuencias.

      Comprueba con `bash prueba.sh ./dsp 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d26fdd5615913971916a9e0533c4a2711bbffb68839f027885e771364af7bff3"]
  - id: hito-4-coma-fija
    tier: 2
    prompt: |
      **Hito 4.** `dsp q15 N fc VENTANA SEMILLA` cuantifica el filtro a Q15 y la señal a Q13 y filtra con aritmética entera con acumulador ancho, redondeo y saturación exactos (§5): imprime la suma de los coeficientes, las primeras salidas, sumas de control y el error máximo frente al filtro en coma flotante.

      Comprueba con `bash prueba.sh ./dsp 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:1cd23e80bfaaff730a9a33537b81cf2ce35aa94e8d49fd0261de38c047637180"]
  - id: hito-5-diezmado-polifasico
    tier: 3
    prompt: |
      **Hito 5.** `dsp diezma M N fc VENTANA SEMILLA` reduce la frecuencia de muestreo por M calculando solo las salidas que se conservan (estructura polifásica) y comprueba que coinciden exactamente con filtrar y descartar, contando las multiplicaciones de cada forma (§6). Con fc > 0,5/M, código 1 (habría solapamiento).

      Comprueba con `bash prueba.sh ./dsp 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d744ae9af84f1a941a80278c4b91b28008f09e7dcd4d22b3b9a32d5065367d16"]
  - id: hito-6-dtmf
    tier: 3
    prompt: |
      **Hito 6.** `dsp dtmf DIGITOS SEMILLA` genera los tonos DTMF de una secuencia de teclas con ruido y los decodifica con el algoritmo de Goertzel por bloques de 205 muestras, con la regla de detección y de confirmación del §7.

      Comprueba con `bash prueba.sh ./dsp 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f69a7d121076e5622fb7d0ca7e09fac6d8d7a242c7de939002c071cb110981ac"]
---

Vas a escribir **`dsp`**, la cadena de procesado de señal que hay dentro de cualquier sistema embebido que escucha el mundo: un receptor de radio definido por software, el teclado de un teléfono, el
filtro anti-solapamiento de un sensor de un robot o el ecualizador de unos auriculares. Diseñarás filtros y los **medirás**; pasarás de la coma flotante a la **coma fija** que ejecuta un microcontrolador sin
FPU, con todas sus trampas (redondeo, saturación, desbordamiento del acumulador); reducirás la frecuencia de muestreo con la estructura que lo hace M veces más barato; y acabarás con un decodificador DTMF
completo. Aplica [[ing-procesado-digital-senal]] y [[ing-senales-sistemas]], y prepara el terreno para [[rob-microcontroladores]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `dsp` en el lenguaje que quieras (C o Rust son la elección natural si piensas llevarlo a un microcontrolador), con seis órdenes. El adjunto **`prueba.sh`** las ejecuta con casos preparados y da un
código por hito; con `-v` muestra las salidas. Formatos: coeficientes con 7 cifras (`%.6e`), respuestas y SNR en dB con 2 decimales (`%.2f`), errores con 2 cifras (`%.1e`), siempre como el redondeo de
x·(1 + 10⁻¹²) (o x ± 10⁻¹² para `%.2f`). Dos suelos, porque por debajo solo hay redondeo y no es reproducible entre implementaciones: un valor con |x| < 10⁻¹² se escribe como cero (por ejemplo, un coeficiente en
un cruce por cero del seno cardinal), y una respuesta por debajo de **−200 dB** se escribe −200.00 (el cero exacto de un filtro de banda eliminada).

## 2. Diseño FIR por ventana (`fir N fc VENTANA`)

Con M = (N − 1)/2 y la frecuencia de corte fc en ciclos por muestra (0 < fc < 0,5): h[n] = 2fc·sinc(2fc(n − M))·w[n], con sinc(x) = sen(πx)/(πx) y sinc(0) = 1, y la ventana `rect` (w = 1), `hamming`
(0,54 − 0,46 cos(2πn/(N − 1))) o `blackman` (0,42 − 0,5 cos(2πn/(N − 1)) + 0,08 cos(4πn/(N − 1))). Después se divide por Σh para que la ganancia en continua sea exactamente 1. Imprime un coeficiente por línea y
`respuesta f dB` en f = 0, fc/2, fc, min(0,49; 1,5fc) y 0,45, con 20·log₁₀|H(e^{j2πf})|. Compara: la ventana rectangular tiene la transición más estrecha pero lóbulos laterales de −21 dB; Hamming baja a unos
−53 dB y Blackman a unos −74, a cambio de una transición más ancha.

## 3. Filtrado y SNR (`filtra N fc VENTANA SEMILLA`)

La señal de prueba, para n = 0…999: x[n] = sen(2π·0,02·n) (el tono útil) + 0,5·sen(2π·0,3·n) (una interferencia) + 0,2(2u − 1) (ruido, con el generador congruencial de Exodus y s = SEMILLA). Se filtra por
convolución directa con condiciones iniciales nulas. Un FIR simétrico tiene **fase lineal**: retrasa todas las frecuencias M muestras, así que la salida se compara con el tono útil retrasado M muestras. Imprime
`snr_entrada` (frente al tono útil, desde n = N), `snr_salida` (frente al tono retrasado, desde n = N) y `retardo` M, con SNR = 10·log₁₀(Σ ref² / Σ (y − ref)²).

## 4. Biquads IIR (`biquad TIPO f0 Q`)

Con ω₀ = 2πf₀, c = cos ω₀ y α = sen ω₀/(2Q) (las fórmulas del *Audio EQ Cookbook* de Bristow-Johnson): `pasabajos` b = ((1 − c)/2, 1 − c, (1 − c)/2); `pasaaltos` b = ((1 + c)/2, −(1 + c), (1 + c)/2);
`banda-eliminada` b = (1, −2c, 1); y en los tres a = (1 + α, −2c, 1 − α). Normaliza dividiendo todo por a₀. Imprime `b` (b₀ b₁ b₂), `a` (a₁ a₂), `radio_polos` (el mayor módulo de las raíces de z² + a₁z + a₂,
reales o complejas), `estable` (si el radio es menor que 1) y la respuesta en f₀/2, f₀ y min(0,49; 2f₀). Con Q = 0,707 el paso bajos es un Butterworth: −3 dB en f₀. Implementado en coma fija, un biquad con polos
cerca de la unidad (Q alto, f₀ baja) es muy sensible a la cuantificación de a₁ y a₂: por eso se encadenan biquads en lugar de un IIR de orden alto.

## 5. Coma fija Q15 (`q15 N fc VENTANA SEMILLA`)

- **Coeficientes en Q15**: c = sat(red(h·32768)); **señal en Q13**: x_q = sat(red(x·8192)), donde red redondea al entero más próximo con la mitad **alejándose de cero** y sat satura a [−32768, 32767].
- **Filtrado entero**: acc = Σ c[i]·x_q[k − i] en un acumulador **ancho** (64 bits: con 63 coeficientes, 32 bits no bastan); y[k] = sat(⌊(acc + 2¹⁴)/2¹⁵⌋) (redondeo y vuelta a Q13). Cuidado: en JavaScript el
  operador `>>` trabaja con 32 bits; en C, el desplazamiento a la derecha de un negativo depende de la implementación (usa división con suelo o tipos sin signo con cuidado).
- Imprime `suma_coeficientes` (debería rondar 32768), `primeros` (las 10 primeras salidas), `suma`, `suma_cuadrados` y `error_max` (máx |y_q/8192 − y_flotante|). Estas salidas son **enteras y exactas**: dos
  implementaciones correctas deben dar exactamente lo mismo.

## 6. Diezmado polifásico (`diezma M N fc VENTANA SEMILLA`)

Reducir la frecuencia de muestreo por M exige filtrar antes (fc ≤ 0,5/M; si no, código 1) y quedarse con una muestra de cada M. Calcular las M − 1 salidas que se descartan es tirar trabajo: la **estructura
polifásica** divide el filtro en M fases (c[p], c[p + M], …) y calcula solo las salidas que se conservan. Con la señal y los coeficientes Q15 del hito 4, imprime `muestras`, `iguales` (si coinciden exactamente
con filtrar y descartar), `multiplicaciones` (las de filtrar todo y las de la forma polifásica), `suma` y `primeros`. La relación de multiplicaciones es ≈ M.

## 7. Decodificador DTMF (`dtmf DIGITOS SEMILLA`)

- **Generación** a fs = 8000 Hz: para cada tecla (`0`–`9`, `*`, `#`, `A`–`D`), 800 muestras de 0,5·sen(2πf_fila·n/fs) + 0,5·sen(2πf_col·n/fs) + 0,1(2u − 1) y después 600 muestras de solo ruido 0,1(2u − 1), con
  las filas 697, 770, 852 y 941 Hz, las columnas 1209, 1336, 1477 y 1633 Hz, y el teclado `123A / 456B / 789C / *0#D`. Un carácter fuera del teclado da código 1.
- **Detección** por bloques consecutivos de N = 205 muestras desde el principio (los que caben enteros): para cada frecuencia, k = round(N·f/fs) y la potencia de **Goertzel** |X(k)|² (s₀ = x + 2cos(2πk/N)s₁ − s₂,
  y al final s₁² + s₂² − 2cos(2πk/N)s₁s₂); la fila y la columna con más potencia (empate: la primera); el bloque detecta esa tecla si P_fila + P_col ≥ 0,5·E·N/2, con E = Σx² del bloque (más de la mitad de la
  energía está en los dos tonos).
- **Confirmación**: una tecla se emite cuando dos bloques **seguidos** la detectan y el anterior a ellos no; así un bloque a caballo entre tono y silencio no duplica ni pierde teclas, y dos teclas iguales seguidas se
  separan por el silencio. Imprime `bloques` y `digitos`.
- Goertzel calcula una sola componente de la DFT con una multiplicación real por muestra: con ocho frecuencias es más barato que una FFT de 256 puntos, y por eso lo usa todo decodificador DTMF embebido.

## 8. Arquitectura y calidad

Separa el diseño (coeficientes en coma flotante), la cuantificación y el filtrado (con versiones flotante y entera que se comparan); escribe pruebas de propiedades: la respuesta a un impulso de un FIR son sus
coeficientes, la ganancia en continua es 1, la forma polifásica coincide bit a bit con la directa, y un tono puro de cada tecla se detecta con cualquier fase inicial. Mide el coste por muestra.

## 9. Ampliaciones

Diseño óptimo de Parks-McClellan (Remez) frente a ventanas; filtros CIC para diezmados grandes; interpolación polifásica y conversión racional de frecuencia; IIR en forma de secciones de segundo orden con escalado
y análisis de ciclos límite; un receptor FM o AM a partir de una grabación IQ (el laboratorio `lab-ing-iq-demodulacion`); y llevar el filtro Q15 a un STM32 o un RP2040 y medir el tiempo por muestra con el
contador de ciclos.

## 10. Recursos

Oppenheim y Schafer, Lyons, el *Audio EQ Cookbook*, el artículo original de Goertzel y la recomendación Q.23 de la UIT. Más en la [página de recursos de ingeniería](/recursos/ingenieria) (la guía de Smith y el
canal Phil's Lab, que lleva estos filtros a hardware).
