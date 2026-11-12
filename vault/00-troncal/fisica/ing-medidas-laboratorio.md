---
id: ing-medidas-laboratorio
title: "Medidas de laboratorio: instrumentos, errores, sensores, muestreo y adquisición de datos"
area: ingenieria
trunk_level: 13
prerequisites: [ing-circuitos-dc-ac, tro-razonamiento-cientifico]
academic_sources:
  - "Horowitz, P.; Hill, W. The Art of Electronics, 3ª ed. Cambridge University Press, 2015."
  - "JCGM 100:2008. Evaluation of measurement data — Guide to the expression of uncertainty in measurement (GUM). BIPM, 2008."
  - "Tektronix. The XYZs of Oscilloscopes (manual introductorio en línea, tek.com): ancho de banda, tiempo de subida y sondas."
  - "Kester, W. MT-001: Taking the Mystery out of the Infamous Formula «SNR = 6.02N + 1.76 dB». Analog Devices, rev. A, 2008."
  - "IEC 60751: termómetros industriales de resistencia de platino (coeficientes de Callendar-Van Dusen A = 3,9083·10⁻³ y B = −5,775·10⁻⁷, consultados en las tablas de fabricantes que la reproducen)."
hints:
  - "Concepto: todo instrumento perturba lo que mide (carga del voltímetro, resistencia de las puntas, capacidad de la sonda) y tiene una exactitud, una resolución y un ancho de banda limitados. Antes de calcular, dibuja el circuito con el instrumento dentro (su resistencia o capacidad de entrada) y pregúntate qué parte del resultado es del instrumento y no de lo medido."
  - "Herramienta: la exactitud de un polímetro es ±(% de la lectura + cuentas); el escalón de un ADC es Vref/2^N; un muestreo a fs convierte una frecuencia f en |f − k·fs| (la más cercana entre 0 y fs/2); promediar N muestras independientes divide el ruido entre √N. Comprueba con una simulación corta en Python: una DFT, una suma de ruido gaussiano o un Euler del circuito."
  - "Documentación: The Art of Electronics (capítulos de precisión, ruido y medidas); GUM (JCGM 100:2008) para la incertidumbre; Tektronix, The XYZs of Oscilloscopes; Analog Devices MT-001 (ruido de cuantificación); la hoja de datos y el manual de tu polímetro y de tu osciloscopio (especificaciones de exactitud, impedancia de entrada, categorías de seguridad)."
exercises:
  - id: exactitud-del-polimetro
    tier: 1
    prompt: |
      Un polímetro en la escala de $20$ V (resolución $0{,}01$ V) tiene una exactitud de $\pm(0{,}5\,\% \text{ de la lectura} + 2 \text{ cuentas})$. Si marca $12{,}34$ V, ¿cuál es el error máximo garantizado, en voltios? Respuesta: un número con **2 decimales**.
    answers: ["sha256:36819111cffb9e1e90eb1fb7c0c29b56a1bc148d41478af66a3de0e5486bb688"]
  - id: resolucion-de-un-adc
    tier: 1
    prompt: |
      ¿Cuánto vale el escalón (LSB) de un convertidor analógico-digital de $12$ bits con referencia de $3{,}3$ V, en milivoltios ($3{,}3/2^{12}$)? Respuesta: un número con **3 decimales**.
    answers: ["sha256:1b9883b7341f2d431b037dba862b24a4a5a5cea5d644006be5b1bcac194cf0e1"]
  - id: ancho-de-banda-y-subida
    tier: 1
    prompt: |
      Un osciloscopio de $100$ MHz de ancho de banda (por debajo de 1 GHz, con la regla $t_r \approx 0{,}35/\text{BW}$), ¿qué tiempo de subida propio tiene, en nanosegundos? Respuesta: un número.
    answers: ["sha256:8a199b120cf400d69c300e1dd6eacdc8b0002353e3044bbab21e0125b32c9fd6"]
  - id: alias-de-muestreo
    tier: 1
    prompt: |
      Una señal senoidal de $900$ Hz se muestrea a $1000$ muestras por segundo sin filtro previo. ¿A qué frecuencia aparece en los datos (entre $0$ y $f_s/2$)? Respuesta: un entero, en Hz.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: efecto-de-carga-del-voltimetro
    tier: 2
    prompt: |
      Un divisor de dos resistencias de $1$ M$\Omega$ alimentado con $10$ V debería dar $5$ V en su punto medio. Si se mide con un voltímetro de $10$ M$\Omega$ de resistencia de entrada, ¿qué lee? Respuesta: un número con **3 decimales**, en voltios.
    answers: ["sha256:b7c820372c141c03ab27bd57aa382f4175a83d3381b49779c30d96654025188d"]
  - id: medida-a-dos-hilos
    tier: 2
    prompt: |
      Se mide una resistencia de derivación de $0{,}100\ \Omega$ con un óhmetro de **dos hilos** cuyas puntas tienen $0{,}05\ \Omega$ cada una. ¿Qué valor lee, en ohmios? (Con cuatro hilos, el error desaparece.) Respuesta: un número.
    answers: ["sha256:44896b09365746b5f7167ee4d64988a38f7f4628803cbf86224e74eeb7c69e9d"]
  - id: promediado-de-ruido
    tier: 2
    prompt: |
      Cada muestra de un sensor tiene ruido independiente de desviación típica $2$ mV. Si se promedian $100$ muestras, ¿qué desviación típica tiene la media, en mV? Respuesta: un número con **1 decimal**.
    answers: ["sha256:44896b09365746b5f7167ee4d64988a38f7f4628803cbf86224e74eeb7c69e9d"]
  - id: sonda-pt100
    tier: 2
    prompt: |
      Una Pt100 sigue la ecuación de IEC 60751 para $T \ge 0\ ^\circ$C: $R(T) = 100\,(1 + AT + BT^2)$ con $A = 3{,}9083\times10^{-3}$ y $B = -5{,}775\times10^{-7}$. Si mide $108{,}5\ \Omega$, ¿a qué temperatura está, en °C? Respuesta: un número con **2 decimales**.
    answers: ["sha256:3208a87298ba165622a43008e981e7c09f6d5adadeaf3da2b5c353b9b5dbaa1e"]
  - id: termistor-ntc
    tier: 2
    prompt: |
      Un termistor NTC tiene $R_{25} = 10$ k$\Omega$ a $25\ ^\circ$C y $\beta = 3950$ K, con $\frac{1}{T} = \frac{1}{T_{25}} + \frac{1}{\beta}\ln\frac{R}{R_{25}}$ ($T$ en kelvin, $T_{25} = 298{,}15$ K). Si mide $5$ k$\Omega$, ¿a qué temperatura está, en °C? Respuesta: un número con **1 decimal**.
    answers: ["sha256:717cb9fead9e3abb57d63d3e32398888a8c4736621ae3048c90231491ceb86c3"]
  - id: puente-de-wheatstone
    tier: 2
    prompt: |
      Un puente de Wheatstone alimentado a $5$ V tiene tres brazos de $1000\ \Omega$ y una galga de $1010\ \Omega$; la salida es la diferencia entre el punto medio de la rama de la galga ($1000\ \Omega$ arriba, galga abajo) y el de la rama de referencia ($1000\ \Omega$ y $1000\ \Omega$). ¿Cuánto vale, en milivoltios? Respuesta: un número con **2 decimales**.
    answers: ["sha256:56ef1c78d22e634395c8c0160ef6346ba217cd6670f0fe4b8551e9e8a76952fe"]
  - id: compensacion-de-la-sonda
    tier: 2
    prompt: |
      Una sonda $\times10$ tiene $9$ M$\Omega$ en serie con la entrada del osciloscopio ($1$ M$\Omega$ en paralelo con $15$ pF). Para que la atenuación no dependa de la frecuencia, la capacidad $C$ en paralelo con los $9$ M$\Omega$ debe cumplir $9\ \text{M}\Omega\cdot C = 1\ \text{M}\Omega\cdot 15$ pF. ¿Cuánto vale $C$, en pF? Respuesta: un número con **2 decimales**.
    answers: ["sha256:ec7437ac721da5306664df58b2f7feb0bfdd20efe45e809bce4b8a3c3e135026"]
  - id: relacion-senal-ruido-de-cuantificacion
    tier: 3
    prompt: |
      ¿Cuál es la relación señal-ruido teórica de un ADC ideal de $12$ bits con una senoide de fondo de escala, $\text{SNR} = 6{,}02N + 1{,}76$ dB? Respuesta: un número con **1 decimal**.
    answers: ["sha256:eb624dbe56eb6620ae62080c10a273cab73ae8eca98ab17b731446a31c79393a"]
  - id: recta-de-calibracion
    tier: 3
    prompt: |
      Un sensor da las lecturas $0{,}12$, $1{,}31$, $2{,}48$, $3{,}71$, $4{,}86$ V para temperaturas de referencia $0$, $25$, $50$, $75$, $100$ °C. Ajusta por mínimos cuadrados la recta lectura $= m\,T + b$. Respuesta: `m;b` con $m$ redondeada a **4 decimales** y $b$ a **3**.
    answers: ["sha256:69498a7eab669d276dc86f315a8a70aacbb3cc25e8459adce1b09de0be2052db", "sha256:213938db5a9d06c35f64f29616907589c1aac53fae9cdfccd4a4afade36c0ee7"]
  - id: resolucion-del-frecuencimetro
    tier: 3
    prompt: |
      Un frecuencímetro cuenta ciclos durante una ventana de $0{,}1$ s, con un error de $\pm1$ cuenta. Al medir una señal de $50$ kHz, ¿cuál es el error relativo máximo, en %? Respuesta: un número.
    answers: ["sha256:a7e46abf169710b34fe8898b950d57ec0863c3a4190e4b38c56b1f9f257d50e7"]
  - id: verdadero-valor-eficaz
    tier: 3
    prompt: |
      Una senoide de $5$ V de pico: (a) ¿cuál es su valor eficaz verdadero? (b) Un polímetro «de valor medio» mide la media del valor absoluto y la multiplica por $\frac{\pi}{2\sqrt2} \approx 1{,}111$ (calibrado para senoides). ¿Qué marcaría ante una onda **cuadrada** de $\pm5$ V, cuyo eficaz verdadero es $5$ V? Respuesta: (a) y (b) en voltios con **3 decimales**, separados por `;`.
    answers: ["sha256:a78a5d93ab46fe1f78639a620f2d060eaf4108c9744078b250b4e3f234dd24f1"]
  - id: tiempo-de-subida-de-un-rc
    tier: 3
    prompt: |
      En la pantalla de un osciloscopio, la carga de un circuito RC sube del $10\,\%$ al $90\,\%$ de su valor final en un tiempo $t_r = RC\ln 9$. Si $RC = 2{,}00\ \mu$s, ¿cuánto vale $t_r$, en microsegundos? Respuesta: un número con **2 decimales**.
    answers: ["sha256:ffa5bdc5121172e343897645a3a9c737ee2bdefeb14383c7bf3b4f4293bcabf0"]
---

# Medidas de laboratorio: instrumentos, errores, sensores, muestreo y adquisición de datos

Un circuito, un robot o un experimento solo se conocen por lo que se **mide** de ellos, y cada medida pasa por un instrumento que tiene
límites y que perturba lo medido. Este nodo enseña a usar con criterio los instrumentos del banco de trabajo (polímetro, osciloscopio,
generador, fuente), a interpretar sus especificaciones de exactitud y ancho de banda, a evitar los errores sistemáticos típicos (efecto de
carga, resistencia de las puntas, sondas mal compensadas, bucles de masa), a convertir magnitudes físicas en eléctricas con sensores, y a
digitalizar señales sin engañarse (resolución, ruido de cuantificación, aliasing, promediado). Es el puente entre la teoría de
[[ing-circuitos-dc-ac]] y el hardware real de [[rob-microcontroladores]].

## Objetivos

Al terminar sabrás:

1. Leer la especificación de exactitud de un polímetro y calcular el error máximo de una lectura.
2. Corregir o evitar el **efecto de carga** del voltímetro y el error de las puntas (medida a cuatro hilos).
3. Elegir el ancho de banda de un osciloscopio, compensar una sonda $\times10$ y medir tiempos de subida.
4. Convertir temperatura y deformación en tensión con Pt100, termistores y puentes de Wheatstone.
5. Calcular la resolución y la relación señal-ruido ideal de un ADC, prever el **aliasing** y reducir ruido promediando.
6. Calibrar un sensor con una recta de mínimos cuadrados y trabajar con seguridad (categorías de medida).

## Qué debes dominar antes

[[ing-circuitos-dc-ac]] (divisores, Thévenin, RC, alterna y eficaz) y [[tro-razonamiento-cientifico]] (incertidumbre de medida, propagación).
Los mínimos cuadrados de [[mat-analisis-numerico]] ayudan en la calibración.

> [!question] Test de entrada
> 1. ¿Cuánto vale $1\ \text{M}\Omega \parallel 10\ \text{M}\Omega$?
> 2. ¿Cuál es el valor eficaz de una senoide de $10$ V de pico?
> 3. ¿Cuánto es $2^{12}$?
>
> Respuestas: $0{,}909\ \text{M}\Omega$; $7{,}07$ V; $4096$.

## 1. Para qué sirve

- **Depurar hardware**: casi todo «el circuito no funciona» se resuelve midiendo bien (y casi todo «las medidas no cuadran» es un
  instrumento mal usado).
- **Robótica e IoT**: cada sensor de un robot es una cadena sensor $\to$ acondicionamiento $\to$ ADC $\to$ software, y cada eslabón
  añade error ([[rob-control]]).
- **Calidad e ingeniería**: decidir si una pieza cumple una tolerancia exige conocer la incertidumbre del instrumento.
- **Seguridad**: medir en la red eléctrica con un instrumento inadecuado puede matar.

## 2. Polímetro: exactitud, resolución y efecto de carga

La **resolución** es el menor cambio que el instrumento muestra (un «dígito» o **cuenta**: $0{,}01$ V en la escala de 20 V de un polímetro de
2000 cuentas). La **exactitud** es cuánto puede diferir la lectura del valor verdadero, y el fabricante la da como
$\pm(\text{porcentaje de la lectura} + \text{número de cuentas})$, para cada escala y en unas condiciones (temperatura, tiempo desde la
calibración). Una lectura con muchos dígitos no es necesariamente exacta.

**Ejemplo resuelto 1.** Escala de $2$ V (resolución $0{,}001$ V), exactitud $\pm(0{,}8\,\% + 3)$, lectura $1{,}500$ V: error máximo
$0{,}008\cdot1{,}5 + 3\cdot0{,}001 = 0{,}015$ V. Como incertidumbre típica (distribución rectangular, GUM tipo B) se usaría $0{,}015/\sqrt3 \approx 0{,}009$ V.

**Efecto de carga.** Un voltímetro se conecta en paralelo y tiene una resistencia de entrada finita (típicamente $10$ M$\Omega$). En un circuito de
alta impedancia, esa resistencia forma un divisor con la de Thévenin del punto medido ([[ing-circuitos-dc-ac]]) y la lectura baja:
$V_{\text{leída}} = V_{\text{th}}\frac{R_{\text{in}}}{R_{\text{th}} + R_{\text{in}}}$. Con $R_{\text{th}} = 1$ k$\Omega$ el error es despreciable; con $R_{\text{th}} = 1$ M$\Omega$, del $9\,\%$.
El amperímetro, en serie, tiene una pequeña resistencia (la **tensión de carga**) que también altera el circuito.

**Medida de resistencias a cuatro hilos (Kelvin).** Con dos hilos, el óhmetro mide también las puntas y los contactos (décimas de ohmio).
Para resistencias pequeñas (derivaciones, bobinados, pistas) se usan cuatro hilos: dos llevan la corriente y otros dos, por los que casi no
circula corriente, miden la tensión directamente en los extremos de la resistencia.

## 3. Osciloscopio, sondas y generador

El osciloscopio muestra la tensión en función del tiempo. Sus parámetros clave:

- **Ancho de banda**: la frecuencia a la que una senoide se atenúa $3$ dB. Limita el **tiempo de subida** que puede mostrar: para
  osciloscopios de menos de $1$ GHz, $t_r \approx 0{,}35/\text{BW}$ (Tektronix). Regla práctica: un ancho de banda unas cinco veces mayor que la
  frecuencia más alta de interés. El tiempo de subida que se ve es aproximadamente $\sqrt{t_{r,\text{señal}}^2 + t_{r,\text{osc}}^2}$.
- **Frecuencia de muestreo**: los osciloscopios digitales muestrean; deben hacerlo varias veces más rápido que el ancho de banda.
- **Disparo** (*trigger*): fija el instante que se muestra en el centro; un disparo bien puesto estabiliza la imagen.

**Sondas.** La entrada del osciloscopio es $1$ M$\Omega$ en paralelo con unos pocos pF. Una sonda $\times10$ añade $9$ M$\Omega$ en serie, de modo que
la carga es $10$ M$\Omega$ y la capacidad efectiva mucho menor, a cambio de dividir la señal entre 10. Para que la división sea la misma a
todas las frecuencias, la sonda lleva un condensador ajustable en paralelo con los $9$ M$\Omega$ que se **compensa** hasta que
$R_1C_1 = R_2C_2$ (se ajusta mirando la onda cuadrada de calibración del propio osciloscopio hasta que sus esquinas sean rectas). Una sonda
descompensada deforma toda medida de alta frecuencia. El cable de masa largo de la sonda forma una bobina que produce oscilaciones
falsas: para señales rápidas, masa corta.

**Medir un tiempo de subida.** Para un RC, $v(t) = V(1 - e^{-t/RC})$ cruza el $10\,\%$ en $t_{10} = RC\ln\frac{10}{9}$ y el $90\,\%$ en $t_{90} = RC\ln 10$,
luego $t_{10\text{-}90} = RC\ln 9 \approx 2{,}2\,RC$: midiendo el tiempo de subida en la pantalla se obtiene la constante de tiempo.

**Generador y fuente.** El generador de funciones tiene una resistencia de salida (habitualmente $50\ \Omega$): con carga de alta impedancia da
el **doble** de la tensión que indica si está configurado para $50\ \Omega$. La fuente de alimentación de laboratorio debe usarse con
**límite de corriente**: protege el circuito en la primera prueba.

## 4. Sensores y acondicionamiento

Un **sensor** convierte una magnitud física en una eléctrica. Tres ejemplos que aparecen en casi todos los proyectos:

- **RTD de platino (Pt100)**: su resistencia crece casi linealmente con la temperatura. Para $T \ge 0$ °C, IEC 60751 da
  $R(T) = R_0(1 + AT + BT^2)$ con $R_0 = 100\ \Omega$, $A = 3{,}9083\cdot10^{-3}$ y $B = -5{,}775\cdot10^{-7}$ (unos $138{,}5\ \Omega$ a $100$ °C).
  Exacta y estable; poca sensibilidad ($0{,}39\ \Omega$/°C), así que se mide a tres o cuatro hilos.
- **Termistor NTC**: su resistencia baja mucho con la temperatura. El modelo $\beta$, $\frac1T = \frac1{T_0} + \frac1\beta\ln\frac{R}{R_0}$ ($T$ en kelvin), da
  una buena aproximación en rangos moderados. Muy sensible, no lineal, barato.
- **Galga extensiométrica**: su resistencia cambia unas milésimas con la deformación. Esos cambios diminutos se miden con un **puente de
  Wheatstone**: dos divisores cuya diferencia es cero en equilibrio, de modo que la salida es solo el desequilibrio, que se amplifica.

**Ejemplo resuelto 2.** Puente a $10$ V con tres brazos de $350\ \Omega$ y una galga de $350{,}7\ \Omega$ ($+0{,}2\,\%$): la salida es
$10\left(\frac{350{,}7}{700{,}7} - \frac12\right) \approx 5{,}0$ mV. Para una variación relativa pequeña $\delta$, la salida es aproximadamente $V\delta/4$:
con $\delta = 0{,}002$, $5$ mV. Hace falta un amplificador de instrumentación para llevarla al rango de un ADC.

**Calibración.** La relación entre lo que da el sensor y la magnitud real se determina midiendo patrones conocidos y ajustando un modelo,
normalmente una recta por mínimos cuadrados ([[mat-analisis-numerico]]), y se invierte en el software. La **trazabilidad** exige que los patrones
estén a su vez calibrados frente a referencias de mayor nivel.

## 5. Digitalizar: ADC, muestreo y ruido

**Resolución de un ADC.** Un convertidor de $N$ bits con referencia $V_{\text{ref}}$ divide el rango en $2^N$ escalones de $\text{LSB} = V_{\text{ref}}/2^N$:
con $10$ bits y $5$ V, $4{,}9$ mV. El error de redondear al escalón (**cuantificación**) se comporta, para señales activas, como un ruido
uniforme de desviación $\text{LSB}/\sqrt{12}$, y la relación señal-ruido máxima con una senoide de fondo de escala es
$\text{SNR} = 6{,}02N + 1{,}76$ dB (cada bit, unos 6 dB). Un ADC real da menos (no linealidades, ruido): sus **bits efectivos** son
$\text{ENOB} = (\text{SINAD} - 1{,}76)/6{,}02$.

**Teorema de muestreo y aliasing.** Muestreando a $f_s$, una senoide de frecuencia $f$ es **indistinguible** de las de frecuencia
$\lvert f - kf_s\rvert$: tras muestrear, toda frecuencia por encima de $f_s/2$ (la **frecuencia de Nyquist**) aparece «doblada» por debajo. Para
reconstruir una señal hay que muestrear a más del doble de su frecuencia máxima y, sobre todo, **filtrar antes** (filtro *anti-aliasing*): una
vez muestreada, la frecuencia falsa no se distingue de una verdadera. Es la causa de que las ruedas de los coches parezcan girar al revés en
el cine.

**Promediado.** Si cada muestra tiene ruido independiente de desviación $\sigma$, la media de $N$ muestras tiene desviación $\sigma/\sqrt N$
([[mat-probabilidad]]): promediar 100 lecturas divide el ruido entre 10 (y no reduce los errores sistemáticos). El sobremuestreo con
promediado es, de hecho, una manera de ganar resolución efectiva.

**Valor eficaz verdadero.** Los polímetros baratos miden el valor medio del valor absoluto y lo multiplican por $\frac{\pi}{2\sqrt2} \approx 1{,}111$,
lo que es correcto solo para senoides puras. Con formas de onda distorsionadas (fuentes conmutadas, variadores de motor) solo un instrumento
de **verdadero valor eficaz** (*true RMS*) da la lectura correcta.

**Frecuencímetros.** Contar ciclos durante una ventana $T_g$ tiene un error de $\pm1$ cuenta: un error relativo de $1/(fT_g)$, grande a baja
frecuencia; para frecuencias bajas es mejor medir el **periodo**.

## 6. Errores sistemáticos frecuentes y seguridad

- **Bucles de masa**: si el circuito y el osciloscopio están conectados a tierra por dos caminos, circula corriente por la masa y aparecen
  zumbidos de 50 Hz en la medida. Y **nunca** se conecta la pinza de masa de un osciloscopio con toma de tierra a un punto que no esté a tierra
  (por ejemplo, en un circuito conectado a la red sin transformador de aislamiento): se crea un cortocircuito.
- **Termopares parásitos**: la unión de metales distintos genera microvoltios que cambian con la temperatura; importan al medir tensiones muy
  pequeñas.
- **Autocalentamiento**: la corriente de medida calienta una RTD o un termistor; se usan corrientes pequeñas.
- **Categorías de medida** (CAT II, CAT III, CAT IV): indican qué transitorios soporta un instrumento según dónde se mida (enchufes, cuadro
  eléctrico, acometida). Usa un instrumento y unas puntas con la categoría y la tensión adecuadas; mide la red solo con formación y nunca solo.
- **Cuaderno de laboratorio**: anota el instrumento, la escala, las condiciones y la incertidumbre de cada medida; sin eso, una medida no se
  puede repetir ni defender.

## 7. Comprobar con un programa

```python
import math
import random
import statistics as st

# Aliasing: 1200 Hz muestreados a 1000 Hz son indistinguibles de 200 Hz en los instantes de muestreo.
fs = 1000
a = [math.cos(2 * math.pi * 1200 * k / fs) for k in range(50)]
b = [math.cos(2 * math.pi * 200 * k / fs) for k in range(50)]
assert max(abs(x - y) for x, y in zip(a, b)) < 1e-9

# Promediado: la media de N muestras con ruido σ tiene desviación σ/√N.
rng = random.Random(1)
medias = [st.mean(rng.gauss(0, 3) for _ in range(36)) for _ in range(20_000)]
assert abs(st.pstdev(medias) - 3 / 6) < 0.02

# Ruido de cuantificación: desviación LSB/√12 para una señal que recorre muchos escalones.
lsb = 5 / 2 ** 10
errores = [round(v / lsb) * lsb - v for v in (rng.uniform(0, 5) for _ in range(200_000))]
assert abs(st.pstdev(errores) - lsb / math.sqrt(12)) < 0.02 * lsb

# Ejemplo resuelto 2: puente de Wheatstone con una galga de 350,7 Ω.
salida = 10 * (350.7 / 700.7 - 0.5)
assert abs(salida * 1000 - 4.995) < 0.01      # ≈ 5 mV

# Pt100 según IEC 60751 a 100 °C: unos 138,5 Ω.
A, B = 3.9083e-3, -5.775e-7
assert abs(100 * (1 + A * 100 + B * 100 ** 2) - 138.5) < 0.01
```

## 8. Errores típicos

- Confundir resolución con exactitud; dar más cifras que la exactitud del instrumento.
- Medir tensiones en circuitos de alta impedancia sin considerar la carga del voltímetro.
- Medir resistencias pequeñas a dos hilos.
- Usar un osciloscopio de ancho de banda insuficiente o una sonda descompensada, o un cable de masa largo en señales rápidas.
- Muestrear sin filtro *anti-aliasing*; creer que una frecuencia vista tras muestrear es la real.
- Esperar que el promediado elimine errores sistemáticos.
- Medir formas de onda no senoidales con un polímetro que no es de verdadero valor eficaz.
- Conectar la masa del osciloscopio a un punto activo de la red; usar instrumentos sin la categoría adecuada.

## 9. Resumen

- Exactitud $\pm(\% + \text{cuentas})$; resolución $\ne$ exactitud; tipo B $= a/\sqrt3$ para límites rectangulares.
- Efecto de carga: divisor con la resistencia de entrada; cuatro hilos para resistencias pequeñas.
- Osciloscopio: $t_r \approx 0{,}35/\text{BW}$ (por debajo de 1 GHz); sonda $\times10$ compensada ($R_1C_1 = R_2C_2$); $t_{10\text{-}90} = RC\ln9$.
- Sensores: Pt100 (IEC 60751), NTC (modelo $\beta$), galgas en puente de Wheatstone ($\approx V\delta/4$); calibración y trazabilidad.
- ADC: $\text{LSB} = V_{\text{ref}}/2^N$, ruido $\text{LSB}/\sqrt{12}$, $\text{SNR} = 6{,}02N + 1{,}76$ dB; alias $\lvert f - kf_s\rvert$; promediado $\sigma/\sqrt N$.
- Bucles de masa, categorías de medida, cuaderno de laboratorio.

## Repaso: lo que debe quedarte dentro de un mes

1. Todo instrumento perturba: dibuja su resistencia o capacidad de entrada en el circuito.
2. El error máximo de un polímetro se calcula con su especificación, no con sus dígitos.
3. Ancho de banda y tiempo de subida: $t_r \approx 0{,}35/\text{BW}$.
4. Filtra antes de muestrear: el aliasing no se puede deshacer.
5. Promediar $N$ muestras divide el ruido aleatorio entre $\sqrt N$.

## Siguiente

[[ing-circuitos]] (amplificadores y filtros para acondicionar señales), [[ing-senales-sistemas]] (muestreo y transformadas) y
[[rob-microcontroladores]] (ADC, temporizadores y sensores en la práctica).
