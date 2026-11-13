---
id: ing-comunicaciones
title: "Comunicaciones: modulación analógica y digital, ruido y probabilidad de error, filtro adaptado, Nyquist, balance de enlace, OFDM y espectro ensanchado"
area: ingenieria
trunk_level: 13
prerequisites: [ing-senales-sistemas, mat-teoria-informacion]
academic_sources:
  - "Proakis, J. G.; Salehi, M. Digital Communications, 5ª ed. McGraw-Hill, 2008."
  - "Haykin, S. Communication Systems, 4ª ed. Wiley, 2001."
exercises:
  - id: eficiencia-de-am
    tier: 1
    prompt: |
      ¿Qué fracción de la potencia de una señal AM con índice de modulación $m = 0{,}5$ va en las bandas laterales? Respuesta: con **4 decimales**.
    answers: ["sha256:4638cf105769572d93a39b531f084d6a8d3b271c62849d22a7061d8834a18b6c"]
  - id: regla-de-carson
    tier: 1
    prompt: |
      ¿Qué ancho de banda ocupa una FM con desviación de 75 kHz y moduladora de 15 kHz según la regla de Carson, en kHz? Respuesta: un número.
    answers: ["sha256:7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405"]
  - id: criterio-de-nyquist
    tier: 1
    prompt: |
      En un canal de banda base de 1 MHz, ¿cuál es la tasa máxima de símbolos sin interferencia entre símbolos (pulsos ideales) y cuál con coseno alzado de factor $\alpha = 0{,}25$, en Msímbolos/s? Respuesta: `ideal;coseno_alzado`.
    answers: ["sha256:2dc315d9096340b6ab7141f45192789efb41128486a5a6d84ef48b31590c1801"]
  - id: aliasing
    tier: 1
    prompt: |
      Un tono de 7 kHz se muestrea a 10 kHz sin filtro antialiasing. ¿En qué frecuencia aparece, en kHz? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: efecto-doppler
    tier: 1
    prompt: |
      Un móvil a 30 m/s se acerca a una estación que emite a 2 GHz. ¿Qué desplazamiento Doppler recibe, en Hz? Respuesta: con **2 decimales**.
    answers: ["sha256:f48ef5be3fd933be6bae3a974e8c3e710cd0a68b66ec51ea664c87b53bd2358d"]
  - id: ganancia-de-procesado
    tier: 1
    prompt: |
      Un sistema de espectro ensanchado usa 3,84 Mchip/s para transmitir 12,2 kbit/s. ¿Cuál es su ganancia de procesado, en dB? Respuesta: con **2 decimales**.
    answers: ["sha256:813feb128c4049e0a17f6bda2ae2d7661ccfeddf8732cdb478fc00c8352e3a1c"]
  - id: ber-de-bpsk
    tier: 2
    prompt: |
      ¿Cuál es la probabilidad de error de bit de BPSK con $E_b/N_0 = 6$ dB en ruido blanco gaussiano, en unidades de $10^{-3}$? Respuesta: con **3 decimales**.
    answers: ["sha256:fb95cefe24e2162f18f6e03e9d085495e816a09c4c4846ae495093a13a38b6a6"]
  - id: eb-n0-necesaria
    tier: 2
    prompt: |
      ¿Qué $E_b/N_0$ (dB) necesita BPSK para una probabilidad de error de bit de $10^{-5}$? Respuesta: con **2 decimales**.
    answers: ["sha256:a89995e85584b3049294f528bb0a1df943555c6efdf2b4611fb081a4ee5182f4"]
  - id: balance-de-enlace
    tier: 2
    prompt: |
      Un transmisor de 20 dBm con antena de 10 dBi enlaza a 1 km en espacio libre con un receptor de antena de 10 dBi a 2,4 GHz. ¿Qué potencia recibe, en dBm? Respuesta: con **2 decimales**.
    answers: ["sha256:2c7bfec5cc9865e19b1a03b3529ae1ef5b72786f4da27b00992680286c6beb8c"]
  - id: suelo-de-ruido
    tier: 2
    prompt: |
      ¿Cuál es la potencia de ruido de un receptor de 20 MHz de ancho de banda y figura de ruido 6 dB a 290 K, en dBm? Respuesta: con **1 decimal**.
    answers: ["sha256:d55e7d7056699b3c3257030f90934146d9a9021fb05c49d1bbfaa434d8c1fac4"]
  - id: simbolo-ofdm
    tier: 2
    prompt: |
      Una señal OFDM tiene subportadoras separadas 15 kHz. ¿Cuánto dura la parte útil de cada símbolo, en $\mu$s? Respuesta: con **2 decimales**.
    answers: ["sha256:006027070d8d93e122adc4f4565de2cd6d58a11400dd98963a3135ff80ee8122"]
  - id: filtro-adaptado
    tier: 2
    prompt: |
      Un pulso de energía $E = 10^{-9}$ J llega con ruido blanco de densidad $N_0 = 10^{-10}$ W/Hz. ¿Qué relación señal-ruido de pico da el filtro adaptado, en dB? Respuesta: con **2 decimales**.
    answers: ["sha256:ce3b6553b4cd6293d103d682882bbcb64cdc837bd36a9cc50a923733e307aced"]
  - id: ruido-de-cuantificacion
    tier: 2
    prompt: |
      ¿Qué relación señal-ruido de cuantificación tiene una senoide a plena escala digitalizada con 8 bits, en dB? Respuesta: con **2 decimales**.
    answers: ["sha256:f1510286f479f516925c3e11403caa6d18a922aa43a1254c98af7f474830ec9d"]
  - id: ganancia-de-una-parabola
    tier: 2
    prompt: |
      ¿Qué ganancia tiene una antena parabólica de 1 m de diámetro a 10 GHz con eficiencia 0,6, en dBi? Respuesta: con **2 decimales**.
    answers: ["sha256:ac1fb8a3d7b341e8b51bdf8706b6dad5d24b0d52d2b615268afe051054c7db3b"]
  - id: constelacion-16qam
    tier: 2
    prompt: |
      Una constelación 16-QAM usa los niveles $\pm1$ y $\pm3$ en cada eje. ¿Cuál es su energía media por símbolo y su distancia mínima? Respuesta: `energia;distancia`.
    answers: ["sha256:3ccee360e61de9cce694eb0fddea777df93acc93e405b69d6d34822df7c81b6a"]
  - id: capacidad-del-enlace
    tier: 3
    prompt: |
      Con la potencia recibida de `balance-de-enlace` y el ruido de `suelo-de-ruido`, ¿cuál es la capacidad de Shannon del enlace en 20 MHz, en Mbit/s? Respuesta: con **1 decimal**.
    answers: ["sha256:835d5e8314340ab852a2f979ab4cd53e994dbe38366afb6eed84fe4957b980c8"]
---

# Comunicaciones: modulación analógica y digital, ruido y probabilidad de error, filtro adaptado, Nyquist, balance de enlace, OFDM y espectro ensanchado

Wi-Fi, 4G/5G, Bluetooth, GPS, la radio de un dron o la telemetría de un robot hacen lo mismo: subir bits a una portadora, atravesar un canal con
pérdidas, ruido y ecos, y recuperarlos con la menor probabilidad de error posible. [[mat-teoria-informacion]] fijó el límite (la capacidad de Shannon);
este nodo enseña cómo se acercan a él los sistemas reales: qué es una modulación, cómo se calcula la probabilidad de error en ruido gaussiano, por qué el
filtro adaptado es óptimo, cuánto ancho de banda hace falta (Nyquist), cuánta potencia llega a 1 km (balance de enlace) y cómo OFDM y el espectro ensanchado
combaten los ecos y las interferencias. Usa [[ing-senales-sistemas]] en cada línea.

## Objetivos

Al terminar sabrás:

1. Describir AM y FM (eficiencia, ancho de banda de Carson) y el muestreo con su aliasing.
2. Representar modulaciones digitales (BPSK, QPSK, QAM) como constelaciones y calcular su energía y distancia mínima.
3. Calcular la probabilidad de error de BPSK en ruido blanco gaussiano y la $E_b/N_0$ necesaria.
4. Explicar el filtro adaptado y el criterio de Nyquist (coseno alzado).
5. Hacer un balance de enlace: pérdidas en espacio libre, ganancias de antena, ruido térmico y figura de ruido, capacidad.
6. Entender OFDM, el efecto Doppler, el espectro ensanchado y la cuantificación.

## Qué debes dominar antes

[[ing-senales-sistemas]] (Fourier, convolución, filtros, muestreo) y [[mat-teoria-informacion]] (capacidad, Shannon-Hartley). Las probabilidades gaussianas
de [[mat-probabilidad]] aparecen en las tasas de error.

> [!question] Test de entrada
> 1. ¿Qué espectro tiene $\cos(2\pi f_ct)\cos(2\pi f_mt)$?
> 2. ¿A qué frecuencia mínima hay que muestrear una señal de banda limitada a 4 kHz?
> 3. ¿Cuántos dB son un factor 100 de potencia? ¿Y 0,5?
>
> Respuestas: dos líneas en $f_c \pm f_m$; 8 kHz (Nyquist); 20 dB y −3 dB.

## 1. Para qué sirve

- **Redes inalámbricas y móviles**: Wi-Fi y LTE/5G usan OFDM con QAM adaptativa; Bluetooth, GFSK; GPS, espectro ensanchado.
- **Robótica y drones**: radioenlaces de control y telemetría, alcance y fiabilidad bajo interferencias.
- **Sensores e IoT**: LoRa (espectro ensanchado de chirp) llega a kilómetros con milivatios.
- **Seguridad**: interferencias intencionadas (jamming), escucha, análisis de protocolos de radio (`sec-seguridad-redes`).

## 2. Modulación analógica y muestreo

**AM**: $s(t) = A_c[1 + m\cos(2\pi f_mt)]\cos(2\pi f_ct)$. La portadora no lleva información y se lleva la mayor parte de la potencia: la fracción en las bandas laterales es $\frac{m^2}{2 + m^2}$
(11 % con $m = 0{,}5$). **FM**: la frecuencia instantánea sigue al mensaje con desviación $\Delta f$; su ancho de banda es, por la **regla de Carson**, $B \approx 2(\Delta f + f_m) = 2(\beta + 1)f_m$ (180 kHz
para la radio FM). FM cambia ancho de banda por inmunidad al ruido.

**Muestreo**: una señal limitada a $B$ se recupera si se muestrea a más de $2B$; si no, las frecuencias por encima de $f_s/2$ se **pliegan** (7 kHz muestreado a 10 kHz aparece en 3
kHz). Un filtro antialiasing antes del convertidor es obligatorio. Cada bit de un convertidor añade unos 6 dB de relación señal-ruido de cuantificación:
$\text{SNR} = 6{,}02N + 1{,}76$ dB para una senoide a plena escala.

## 3. Modulación digital y constelaciones

Un símbolo es un punto de una **constelación** en el plano $(I, Q)$ (componentes en fase y cuadratura de la portadora):

- **BPSK**: $\pm\sqrt{E_b}$, 1 bit por símbolo.
- **QPSK**: 4 puntos en las diagonales, 2 bits; misma probabilidad de error por bit que BPSK en el doble de bits por hercio.
- **M-QAM**: rejilla de $M$ puntos; 16-QAM con niveles $\pm1$, $\pm3$ tiene energía media 10 y distancia mínima 2. Más puntos dan más bits por símbolo pero, a igual potencia, más
  juntos: hace falta más SNR (≈ 6 dB más por cada duplicación de bits por eje).

La **codificación Gray** asigna etiquetas que difieren en un bit a puntos vecinos: el error más probable (al vecino) cuesta un solo bit.

## 4. Ruido, filtro adaptado y probabilidad de error

En un canal de ruido blanco gaussiano de densidad $N_0/2$, el receptor óptimo correlaciona la señal recibida con la forma de onda esperada: el **filtro adaptado**,
de respuesta $h(t) = s(T - t)$, que maximiza la relación señal-ruido en el instante de decisión hasta $\text{SNR} = \frac{2E}{N_0}$, sin importar la forma del pulso. Para BPSK,

$$
P_b = Q\left(\sqrt{\frac{2E_b}{N_0}}\right), \qquad Q(x) = \int_x^\infty\frac{e^{-u^2/2}}{\sqrt{2\pi}}\,du .
$$

Con $E_b/N_0 = 6$ dB, $P_b \approx 2{,}4\cdot10^{-3}$; para $10^{-5}$ hacen falta 9,6 dB. El límite de Shannon para tasas bajas está en $-1{,}6$ dB: la diferencia es lo que recuperan los
**códigos correctores** (turbo, LDPC y polares quedan a menos de 1 dB del límite).

## 5. Ancho de banda e interferencia entre símbolos

Enviar $R_s$ símbolos por segundo sin que se interfieran exige pulsos cuyas muestras se anulen en los instantes de los demás símbolos (**criterio de Nyquist**). El pulso
ideal (sinc) ocupa exactamente $R_s/2$ de banda base: la tasa máxima en un ancho $B$ es $2B$. Los pulsos reales de **coseno alzado** con factor $\alpha$ ocupan $\frac{R_s(1 + \alpha)}{2}$, a
cambio de colas más cortas y tolerancia a errores de sincronismo; se reparten entre transmisor y receptor como raíz de coseno alzado (que además es el filtro
adaptado). En canales con ecos se añade un **ecualizador**.

## 6. Balance de enlace

La potencia recibida en espacio libre (fórmula de **Friis**) es

$$
P_r[\text{dBm}] = P_t + G_t + G_r - 20\log_{10}\frac{4\pi d}{\lambda} .
$$

A 2,4 GHz y 1 km, las pérdidas son 100 dB: con 20 dBm y antenas de 10 dBi llegan $-60$ dBm. Las antenas directivas ganan $G = \eta\left(\frac{\pi D}{\lambda}\right)^2$ (una parábola de 1 m a 10 GHz,
38 dBi). El **ruido** del receptor es $kTB$ (−174 dBm/Hz a 290 K) más su **figura de ruido**: con 20 MHz y 6 dB, unos −95 dBm. La diferencia es la SNR (35 dB), y Shannon da
el techo de capacidad, $B\log_2(1 + \text{SNR})$ ≈ 232 Mbit/s. En la práctica se añaden márgenes por desvanecimiento, obstáculos y pérdidas en cables.

> [!example] Ejemplo resuelto 1: un enlace Wi-Fi de 1 km
> Con $\lambda = c/2{,}4\text{ GHz} = 12{,}5$ cm, $20\log_{10}(4\pi\cdot1000/0{,}125) \approx 100{,}05$ dB. $P_r = 20 + 10 + 10 - 100{,}05 = -60{,}05$ dBm. El suelo de ruido en 20 MHz con NF de 6 dB es $-174 + 73 + 6 \approx -95$ dBm,
> así que la SNR es de unos 35 dB: suficiente para 64-QAM con códigos de tasa alta (que piden unos 25 dB). Cada vez que se dobla la distancia se pierden 6 dB: a 8 km la SNR
> bajaría a 17 dB y habría que pasar a QPSK o 16-QAM.

## 7. Canales reales: Doppler, ecos y OFDM

Un emisor que se mueve a $v$ desplaza la frecuencia $f_D = vf/c$ (200 Hz a 30 m/s y 2 GHz): el canal varía en el tiempo. Los **ecos** (multitrayecto) llegan con retardos
distintos: si la dispersión de retardos es comparable al símbolo, aparece interferencia entre símbolos.

**OFDM** reparte los datos en muchas subportadoras ortogonales separadas $\Delta f$, cada una con símbolos largos $T = 1/\Delta f$ (66,7 $\mu$s con 15 kHz, como en LTE) y un **prefijo cíclico**
más largo que los ecos. Así, un canal selectivo en frecuencia se convierte en muchos canales planos que se ecualizan con una multiplicación cada uno, y la
modulación se implementa con una FFT. Sus pegas: sensibilidad al Doppler y al desfase de frecuencia, y picos de potencia altos.

**Espectro ensanchado**: multiplicar los datos por una secuencia rápida (chips) ensancha la señal; el receptor la vuelve a estrechar y la interferencia se
ensancha y se diluye. La **ganancia de procesado** es $10\log_{10}(R_c/R_b)$ (25 dB con 3,84 Mchip/s y 12,2 kbit/s, como en UMTS). Permite compartir banda (CDMA), resistir
interferencias y medir distancias con precisión (GPS).

> [!example] Ejemplo resuelto 2: BER de BPSK
> Con $E_b/N_0 = 6$ dB $= 3{,}98$, el argumento es $\sqrt{2\cdot3{,}98} = 2{,}82$ y $Q(2{,}82) \approx 2{,}4\cdot10^{-3}$: uno de cada 400 bits sale mal. Para $10^{-5}$ hay que subir a 9,6 dB, es decir, multiplicar
> la potencia por 2,3. La simulación del programa con un millón de bits, ruido gaussiano y semilla fija reproduce la cifra.

> [!example] Ejemplo resuelto 3: un filtro adaptado (con menos ayuda)
> Un pulso rectangular de energía $10^{-9}$ J llega con $N_0 = 10^{-10}$ W/Hz. Escribe la salida del correlador (señal $E$, varianza del ruido $\frac{N_0}{2}E$) y comprueba que la SNR es
> $2E/N_0 = 20$ (13 dB). ¿Cambia el resultado si el pulso es una semisenoide de la misma energía?

## 8. Comprobar con un programa

BER de BPSK por simulación frente a $Q(\cdot)$, el balance de enlace del ejemplo 1, el aliasing de un tono y una OFDM mínima que atraviesa un canal con eco
y se ecualiza con una división por subportadora.

```python
import cmath
import math
import random

random.seed(11)
Q = lambda x: 0.5 * math.erfc(x / math.sqrt(2))

# 1. Ejemplo resuelto 2: BPSK con Eb/N0 = 6 dB, simulación frente a la fórmula.
g = 10 ** 0.6
sigma = math.sqrt(1 / (2 * g))
N = 1_000_000
errores = 0
for _ in range(N):
    b = 1 if random.random() < 0.5 else -1
    if (b + random.gauss(0, sigma)) * b < 0:
        errores += 1
assert abs(errores / N - Q(math.sqrt(2 * g))) < 2.5e-4

# 2. Ejemplo resuelto 1: balance del enlace Wi-Fi de 1 km.
lam = 299792458 / 2.4e9
Pr = 20 + 10 + 10 - 20 * math.log10(4 * math.pi * 1000 / lam)
ruido = 10 * math.log10(1.380649e-23 * 290 * 20e6 / 1e-3) + 6
C = 20e6 * math.log2(1 + 10 ** ((Pr - ruido) / 10))
assert abs(Pr + 60.05) < 0.01 and abs(ruido + 94.96) < 0.01

# 3. Aliasing: un tono de 7 kHz muestreado a 10 kHz es indistinguible de uno de 3 kHz.
assert all(abs(math.cos(2 * math.pi * 7e3 * n / 1e4) - math.cos(2 * math.pi * 3e3 * n / 1e4)) < 1e-9 for n in range(100))

# 4. OFDM mínima: 64 subportadoras QPSK, prefijo cíclico de 8, canal con eco h = [1, 0.5j] y ecualización por subportadora.
def dft(x, inv=False):
    n = len(x)
    s = 1 if inv else -1
    return [sum(x[k] * cmath.exp(s * 2j * math.pi * k * m / n) for k in range(n)) / (n if inv else 1) for m in range(n)]

Nsc, cp, h = 64, 8, [1, 0.5j]
datos = [complex(random.choice((-1, 1)), random.choice((-1, 1))) for _ in range(Nsc)]
t = dft(datos, inv=True)
tx = t[-cp:] + t
rx = [sum(h[k] * tx[n - k] for k in range(len(h)) if n - k >= 0) for n in range(len(tx))]
R = dft(rx[cp:])
H = dft(h + [0] * (Nsc - len(h)))
eq = [r / hh for r, hh in zip(R, H)]
assert max(abs(a - b) for a, b in zip(eq, datos)) < 1e-9
print("BER simulada", errores / N, "teórica", round(Q(math.sqrt(2 * g)), 6), "| Pr =", round(Pr, 2), "dBm, C =", round(C / 1e6, 1), "Mbit/s | OFDM: ecualización exacta")
```

## 9. Errores típicos

- Confundir $E_b/N_0$ con la SNR (dependen del ancho de banda y de los bits por símbolo).
- Sumar dB de potencia con dB de tensión, o dBm con dBi sin pensar qué es cada uno.
- Olvidar el filtro antialiasing o elegirlo con poca atenuación en $f_s/2$.
- Diseñar un enlace sin margen de desvanecimiento.
- Usar un prefijo cíclico más corto que los ecos del canal.
- Creer que más potencia lo arregla todo: a partir de cierto punto manda la interferencia, no el ruido.

## 10. Resumen

- AM: eficiencia $m^2/(2 + m^2)$; FM: Carson $2(\Delta f + f_m)$; muestreo $f_s > 2B$, aliasing; SNR de cuantificación $6{,}02N + 1{,}76$ dB.
- Constelaciones BPSK, QPSK, QAM; energía media y distancia mínima; Gray.
- Filtro adaptado: SNR $2E/N_0$; BPSK $P_b = Q(\sqrt{2E_b/N_0})$; códigos cerca del límite de Shannon.
- Nyquist $2B$; coseno alzado $R_s(1 + \alpha)/2$; ecualización.
- Friis, pérdidas $20\log(4\pi d/\lambda)$, $G = \eta(\pi D/\lambda)^2$, ruido $-174$ dBm/Hz + NF, Shannon.
- Doppler $vf/c$, OFDM ($T = 1/\Delta f$, prefijo cíclico, FFT), espectro ensanchado ($10\log R_c/R_b$).

## Repaso: lo que debe quedarte dentro de un mes

1. Un símbolo es un punto en el plano I/Q; más puntos, más bits y más SNR necesaria.
2. El filtro adaptado da la mejor SNR posible: $2E/N_0$.
3. La BER de BPSK es una cola gaussiana.
4. Balance de enlace: potencia, ganancias, pérdidas y ruido, todo en dB.
5. OFDM convierte un canal con ecos en muchos canales planos.

## Siguiente

`ing-procesado-digital-senal` (filtros y FFT en la práctica), `ing-rf-microondas` (el hardware de radio) y `sec-seguridad-redes`. El límite teórico está en
[[mat-teoria-informacion]].
