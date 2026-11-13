---
id: ing-procesado-digital-senal
title: "Procesado digital de señal: DFT y FFT, ventanas, filtros FIR e IIR, transformación bilineal, multitasa y aplicaciones"
area: ingenieria
trunk_level: 12
prerequisites: [ing-senales-sistemas, mat-analisis-numerico]
academic_sources:
  - "Oppenheim, A. V.; Schafer, R. W. Discrete-Time Signal Processing, 3ª ed. Pearson, 2010."
  - "Lyons, R. G. Understanding Digital Signal Processing, 3ª ed. Prentice Hall (Pearson), 2010."
exercises:
  - id: resolucion-de-la-dft
    tier: 1
    prompt: |
      ¿Qué separación en frecuencia hay entre los bins de una DFT de 1024 puntos de una señal muestreada a 48 kHz, en Hz? Respuesta: un número.
    answers: ["sha256:46004d9e78e94d7631e1e2da8b470fba08efe5251b1f77afa907ab1ab55faddc"]
  - id: bin-de-un-tono
    tier: 1
    prompt: |
      ¿En qué bin aparece un tono de 3 kHz en esa DFT? Respuesta: un entero.
    answers: ["sha256:a68b412c4282555f15546cf6e1fc42893b7e07f271557ceb021821098dd66c1b"]
  - id: convolucion
    tier: 1
    prompt: |
      ¿Cuánto vale $y[2]$ si $y = x * h$ con $x = [1, 2, 3]$ y $h = [1, 1]$ (índices desde 0)? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: diezmado
    tier: 1
    prompt: |
      Se quiere pasar una señal de 48 kHz a 8 kHz. ¿Por qué factor se diezma y a qué frecuencia (kHz) debe cortar el filtro antialiasing previo, como máximo? Respuesta: `factor;corte`.
    answers: ["sha256:b8d926d2a5e1288c9304e254320049407dba8ba5968965daad3641b96b4c4ccf"]
  - id: retardo-de-grupo
    tier: 1
    prompt: |
      ¿Cuántas muestras retrasa un FIR de fase lineal con 21 coeficientes? Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: respuesta-al-impulso
    tier: 1
    prompt: |
      Para $H(z) = \frac{1}{1 - 0{,}5z^{-1}}$, ¿cuánto valen $h[3]$ y la ganancia en continua $\sum_n h[n]$? Respuesta: `h3;ganancia`.
    answers: ["sha256:98dc3ccd4fd47aa08bfa7f69b64987aaf57893ee82065609050940d16d10b3a3"]
  - id: primer-nulo
    tier: 1
    prompt: |
      ¿A qué frecuencia tiene su primer cero una media móvil de 5 muestras con $f_s = 48$ kHz, en Hz? Respuesta: un entero.
    answers: ["sha256:cb4802988b933e8ff97a3e858151e41252e06a64e2e944ed6968ea5ed6018aa3"]
  - id: media-movil
    tier: 2
    prompt: |
      ¿Cuánto vale $|H|$ de una media móvil de 5 muestras en $f = f_s/10$? Respuesta: con **4 decimales**.
    answers: ["sha256:f123ba654da7cabb00db90f920b68b515d33f750dee4c93d2866c6bce3d701f9"]
  - id: filtro-de-un-polo
    tier: 2
    prompt: |
      El filtro $y[n] = 0{,}9y[n-1] + 0{,}1x[n]$ trabaja a $f_s = 1$ kHz. ¿A qué frecuencia cae 3 dB respecto a continua, en Hz? Respuesta: con **2 decimales**.
    answers: ["sha256:9beb0787fe5b0381d5bb2bfb2bf27b5ed49481a7d4d217c6354aca4f35c2e9bc"]
  - id: estabilidad
    tier: 2
    prompt: |
      ¿Qué módulo tienen los polos de $y[n] = 1{,}8y[n-1] - 0{,}9y[n-2] + x[n]$? (Si es menor que 1, el filtro es estable.) Respuesta: con **4 decimales**.
    answers: ["sha256:8273b288d40a215dc9763956f2bbcc35ce1d55ca5ba98971e9d270513df37d1d"]
  - id: transformacion-bilineal
    tier: 2
    prompt: |
      Se diseña un filtro digital con corte en 1 kHz y $f_s = 8$ kHz por la transformación bilineal. ¿A qué frecuencia hay que poner el corte del prototipo analógico (predistorsión), en Hz? Respuesta: con **1 decimal**.
    answers: ["sha256:f61fdca443480c211841276f5c09938ee642fa76d6148521f151c726c666a452"]
  - id: goertzel
    tier: 2
    prompt: |
      El algoritmo de Goertzel para el bin $k = 64$ de una DFT de $N = 1024$ usa la recurrencia $s[n] = x[n] + c\,s[n-1] - s[n-2]$. ¿Cuánto vale $c$? Respuesta: con **4 decimales**.
    answers: ["sha256:71c4097db75901e45a3c5e1e7887a3bf195d1ea0d686d2b5effbf22be5c29572"]
  - id: coste-de-la-fft
    tier: 2
    prompt: |
      ¿Cuántas multiplicaciones complejas hace una FFT radix-2 de 1024 puntos y cuántas veces menos son que las $N^2$ de la DFT directa? Respuesta: `multiplicaciones;factor`.
    answers: ["sha256:d6cd549c6ff7ed5ebba6336e4df1ca0e35552990172c6660c1cd901e2e518c91"]
  - id: promediado-coherente
    tier: 2
    prompt: |
      Promediando 16 repeticiones sincronizadas de una señal con ruido blanco independiente, ¿cuánto mejora la relación señal-ruido, en dB? Respuesta: con **2 decimales**.
    answers: ["sha256:0760f78c6f7cdbd029121b681b4feee59e595ade3b3ba5ccb74915c0e3de3ac3"]
  - id: lobulo-de-hann
    tier: 3
    prompt: |
      ¿A cuántos dB por debajo del lóbulo principal está el lóbulo lateral más alto de una ventana de Hann de 64 muestras (respuesta con signo)? Respuesta: con **2 decimales**.
    answers: ["sha256:a966e9004284e01e273534cc104a8ab76e73e48f4aed1d9869533ff4e24ddf9c"]
  - id: fir-por-ventana
    tier: 3
    prompt: |
      Se diseña un FIR paso bajo por ventana: sinc ideal con $f_c = 0{,}25$ (en ciclos/muestra), 21 coeficientes y ventana de Hamming. ¿Cuánto atenúa en $f = 0{,}35$ respecto a continua, en dB (respuesta con signo)? Respuesta: con **2 decimales**.
    answers: ["sha256:1393e172191ca350d23017de99c258b54927b9e53868fe6169008128a3039bc0"]
---

# Procesado digital de señal: DFT y FFT, ventanas, filtros FIR e IIR, transformación bilineal, multitasa y aplicaciones

En cuanto una señal entra en un convertidor analógico-digital, todo lo demás es aritmética: filtrar ruido, separar frecuencias, comprimir audio, detectar
un tono, estimar la velocidad de un motor, quitar el eco de una llamada. [[ing-senales-sistemas]] dio la teoría (Fourier, transformada Z, muestreo); este nodo
la convierte en herramientas de ingeniería que se programan en un microcontrolador, una FPGA o Python: la **FFT** y cómo interpretar su espectro, las
**ventanas**, el diseño de filtros **FIR** e **IIR** con sus compromisos, el paso de diseños analógicos a digitales y el cambio de frecuencia de muestreo.

## Objetivos

Al terminar sabrás:

1. Calcular e interpretar la DFT: resolución, bins, fuga espectral y ventanas; implementar la FFT y el algoritmo de Goertzel.
2. Calcular respuestas en frecuencia de filtros a partir de sus coeficientes y decidir la estabilidad por los polos.
3. Diseñar filtros FIR por ventana (fase lineal, retardo de grupo) y entender su atenuación y anchura de transición.
4. Diseñar filtros IIR con la transformación bilineal y la predistorsión.
5. Cambiar la frecuencia de muestreo (diezmado e interpolación) sin aliasing.
6. Aplicar promediado, convolución rápida y detección de tonos.

## Qué debes dominar antes

[[ing-senales-sistemas]] (convolución, DTFT, transformada Z, muestreo) y [[mat-analisis-numerico]] (coma flotante, errores). Los números complejos y la
trigonometría se usan constantemente.

> [!question] Test de entrada
> 1. ¿Cuál es la transformada Z de $a^nu[n]$?
> 2. ¿Dónde deben estar los polos de un sistema causal y estable?
> 3. Si se muestrea a 48 kHz, ¿cuál es la mayor frecuencia representable sin ambigüedad?
>
> Respuestas: $\frac{1}{1 - az^{-1}}$ para $|z| > |a|$; dentro del círculo unidad; 24 kHz.

## 1. Para qué sirve

- **Audio y voz**: ecualizadores, cancelación de eco y ruido, compresión (MP3, Opus), detección de DTMF.
- **Comunicaciones**: filtros de canal, OFDM con FFT, sincronización ([[ing-comunicaciones]]).
- **Robótica y control**: filtrar encoders e IMU, estimar velocidades, detectar vibraciones en motores, control digital ([[rob-control]]).
- **Instrumentación y biomedicina**: ECG, EEG, análisis de vibraciones, espectroscopía.

## 2. La DFT y la FFT

La DFT de $N$ muestras, $X[k] = \sum_{n=0}^{N-1}x[n]e^{-2\pi ikn/N}$, mide la señal en $N$ frecuencias separadas $f_s/N$ (la **resolución**: 46,9 Hz con 1024 puntos a 48 kHz). Un tono de frecuencia
$f$ cae en el bin $k = fN/f_s$. Si no coincide exactamente con un bin, su energía se reparte por todo el espectro: **fuga espectral**, porque la DFT supone que el
trozo se repite periódicamente y aparece un salto en los bordes.

La **FFT** (Cooley-Tukey) calcula lo mismo dividiendo recursivamente en muestras pares e impares: $\frac N2\log_2N$ multiplicaciones complejas en lugar de $N^2$ (5120 frente a un
millón con 1024 puntos, 205 veces menos). Para medir **una sola** frecuencia, el **algoritmo de Goertzel** usa la recurrencia $s[n] = x[n] + 2\cos(2\pi k/N)s[n-1] - s[n-2]$, mucho más
barata (detectores de tonos DTMF).

## 3. Ventanas

Multiplicar el bloque por una **ventana** que vaya suavemente a cero en los bordes reduce la fuga, a cambio de ensanchar el lóbulo principal (peor resolución):

| Ventana | Lóbulo lateral más alto | Anchura del lóbulo principal |
| --- | --- | --- |
| Rectangular | −13 dB | $4\pi/N$ |
| Hann | −31,5 dB | $8\pi/N$ |
| Hamming | −43 dB | $8\pi/N$ |
| Blackman | −58 dB | $12\pi/N$ |

Elegir ventana es elegir entre separar dos tonos cercanos (lóbulo estrecho) y ver un tono débil junto a uno fuerte (lóbulos laterales bajos). Rellenar con ceros
interpola el espectro pero **no** mejora la resolución.

## 4. Filtros: respuesta en frecuencia y estabilidad

Un filtro digital es una ecuación en diferencias $y[n] = \sum b_kx[n-k] - \sum_{k\ge1}a_ky[n-k]$ con función de transferencia $H(z) = \frac{\sum b_kz^{-k}}{\sum a_kz^{-k}}$ y respuesta en frecuencia
$H(e^{i\omega})$. **FIR** (solo $b$): siempre estable, puede tener fase exactamente lineal. **IIR** (con $a$): pocos coeficientes para filtros abruptos, pero puede ser inestable
(polos fuera del círculo unidad) y no tiene fase lineal.

- **Media móvil** de $M$ muestras: $|H| = \left|\frac{\operatorname{sen}(M\omega/2)}{M\operatorname{sen}(\omega/2)}\right|$, con ceros en múltiplos de $f_s/M$ (9,6 kHz para $M = 5$ a 48 kHz).
- **Un polo**, $y[n] = \alpha y[n-1] + (1 - \alpha)x[n]$: el filtro paso bajo más usado en sensores; con $\alpha = 0{,}9$ a 1 kHz, corte en ~16,8 Hz y constante de tiempo de unas 10 muestras.
- **Dos polos** $z^2 - a_1z - a_2$: polos complejos de módulo $\sqrt{-a_2}$ y ángulo que fija la frecuencia de resonancia; la respuesta al impulso decae como $|z|^n$.

> [!example] Ejemplo resuelto 1: un filtro de un polo
> $H(z) = \frac{0{,}1}{1 - 0{,}9z^{-1}}$. En continua, $H(1) = 1$. Imponiendo $|H(e^{i\omega})|^2 = \frac12$: $\frac{0{,}01}{1 - 1{,}8\cos\omega + 0{,}81} = \frac12$, de donde $\cos\omega = 1 - \frac{0{,}01}{1{,}8}$ y $\omega \approx 0{,}1054$ rad/muestra:
> a $f_s = 1$ kHz, $16{,}78$ Hz. Bajar $\alpha$ a 0,8 dobla aproximadamente el corte. Es el filtro paso bajo de un sensor ruidoso por excelencia: una multiplicación y una suma por muestra.

## 5. Diseño de FIR por ventana

Se toma la respuesta al impulso ideal (un sinc para un paso bajo con corte $f_c$: $h[n] = 2f_c\operatorname{sinc}(2f_c(n - M))$), se trunca a $N = 2M + 1$ coeficientes y se multiplica por una ventana.
Es **simétrico**, así que la fase es lineal y el retardo de grupo es constante, $(N - 1)/2$ muestras: todas las frecuencias se retrasan lo mismo y la forma de onda no se deforma.
La ventana fija la atenuación (Hamming, ~53 dB) y la longitud fija la anchura de la transición (~$3{,}3/N$ en ciclos/muestra con Hamming). Métodos óptimos como
Parks-McClellan (equirrizado) dan la misma especificación con menos coeficientes.

## 6. IIR por transformación bilineal

Para aprovechar los diseños analógicos clásicos (Butterworth, Chebyshev, elíptico), la **transformación bilineal** $s = \frac{2}{T}\frac{1 - z^{-1}}{1 + z^{-1}}$ lleva el eje imaginario al círculo unidad
y conserva la estabilidad, pero **comprime** las frecuencias: $\Omega = \frac2T\tan\frac\omega2$. Por eso hay que **predistorsionar**: para un corte digital de 1 kHz a $f_s = 8$ kHz, el prototipo
analógico se diseña con corte $\frac{f_s}{\pi}\tan\frac{\pi f}{f_s} \approx 1054{,}8$ Hz. Los IIR de orden alto se implementan como **secciones de segundo orden en cascada** para evitar problemas
numéricos con coeficientes cuantificados.

> [!example] Ejemplo resuelto 2: estabilidad de un resonador
> $y[n] = 1{,}8y[n-1] - 0{,}9y[n-2] + x[n]$: el denominador $z^2 - 1{,}8z + 0{,}9$ tiene polos $0{,}9 \pm 0{,}3i$, de módulo $\sqrt{0{,}9} \approx 0{,}949$ y ángulo $\arctan(1/3) \approx 0{,}32$ rad. Es estable, resuena cerca
> de $0{,}32f_s/(2\pi) \approx 0{,}05f_s$ y su respuesta al impulso decae un 5 % por muestra. Si el coeficiente 0,9 se redondeara a 1,0 (por ejemplo, en punto fijo), los polos irían al
> círculo unidad: un oscilador.

## 7. Multitasa y otras técnicas

- **Diezmado** por $M$: filtrar a $f_s/(2M)$ y quedarse con una de cada $M$ muestras; **interpolación** por $L$: insertar ceros y filtrar. Los filtros **polifásicos** evitan calcular las
  muestras que se descartan.
- **Convolución rápida**: con FFT (solapar-sumar), la convolución de bloques largos cuesta $O(N\log N)$.
- **Promediado coherente**: sumar $M$ repeticiones sincronizadas mejora la SNR en $10\log_{10}M$ dB (la señal suma en amplitud y el ruido en potencia): base de la medida de
  potenciales evocados o de la instrumentación con señales repetitivas.
- **Aritmética finita**: en punto fijo hay que escalar para no desbordar y vigilar el ruido de redondeo y los ciclos límite de los IIR.

> [!example] Ejemplo resuelto 3: un FIR paso bajo (con menos ayuda)
> Con $f_c = 0{,}25$ ciclos/muestra y 21 coeficientes de Hamming, escribe $h[n]$, comprueba que es simétrico (retardo de 10 muestras) y evalúa $|H|$ en continua y en $f = 0{,}35$.
> Comprueba con el programa que la atenuación ronda los 55 dB, y que con 11 coeficientes la transición se ensancha tanto que en 0,35 apenas atenúa unos 22 dB.

## 8. Comprobar con un programa

Una FFT recursiva frente a la DFT directa, Goertzel, el filtro de un polo y el FIR por ventana evaluados en frecuencia, y la estabilidad por simulación.

```python
import cmath
import math

# 1. FFT recursiva frente a DFT directa, y Goertzel en el bin 64.
def fft(x):
    n = len(x)
    if n == 1:
        return x
    par, impar = fft(x[0::2]), fft(x[1::2])
    t = [cmath.exp(-2j * math.pi * k / n) * impar[k] for k in range(n // 2)]
    return [par[k] + t[k] for k in range(n // 2)] + [par[k] - t[k] for k in range(n // 2)]

fs, N = 48000, 1024
x = [math.cos(2 * math.pi * 3000 * n / fs) + 0.3 * math.sin(n) for n in range(N)]
X = fft(x)
directa = sum(x[n] * cmath.exp(-2j * math.pi * 64 * n / N) for n in range(N))
assert abs(X[64] - directa) < 1e-8 and max(range(N // 2), key=lambda k: abs(X[k])) == 64
c = 2 * math.cos(2 * math.pi * 64 / N)
s1 = s2 = 0.0
for v in x:
    s1, s2 = v + c * s1 - s2, s1
assert abs(math.sqrt(s1 * s1 + s2 * s2 - c * s1 * s2) - abs(directa)) < 1e-8

# 2. Respuesta en frecuencia de un filtro b/a.
def H(b, a, w):
    num = sum(bk * cmath.exp(-1j * w * k) for k, bk in enumerate(b))
    den = sum(ak * cmath.exp(-1j * w * k) for k, ak in enumerate(a))
    return abs(num / den)

# Ejemplo resuelto 1: corte del filtro de un polo por bisección.
lo, hi = 0.0, math.pi
for _ in range(100):
    m = (lo + hi) / 2
    lo, hi = (m, hi) if H([0.1], [1, -0.9], m) > 1 / math.sqrt(2) else (lo, m)
assert abs(lo * 1000 / (2 * math.pi) - 16.78) < 0.01

# 3. Ejemplo resuelto 3: FIR por ventana de Hamming (21 y 11 coeficientes).
def fir(n_coef, fc=0.25):
    M = (n_coef - 1) // 2
    return [(2 * fc if n == M else math.sin(2 * math.pi * fc * (n - M)) / (math.pi * (n - M)))
            * (0.54 - 0.46 * math.cos(2 * math.pi * n / (n_coef - 1))) for n in range(n_coef)]
for n_coef, esperado in ((21, -55.21), (11, None)):
    h = fir(n_coef)
    at = 20 * math.log10(H(h, [1], 2 * math.pi * 0.35) / H(h, [1], 0))
    if esperado is not None:
        assert abs(at - esperado) < 0.01
    print(n_coef, "coeficientes: atenuación en 0,35 =", round(at, 2), "dB")

# 4. Ejemplo resuelto 2: la respuesta al impulso del resonador decae como 0,949^n.
y1 = y2 = 0.0
h = []
for n in range(400):
    y = 1.8 * y1 - 0.9 * y2 + (1 if n == 0 else 0)
    h.append(y)
    y2, y1 = y1, y
assert abs(h[300]) < 0.9487**300 * 5
print("polos:", [round(abs(p), 4) for p in (0.9 + 0.3j, 0.9 - 0.3j)])
```

## 9. Errores típicos

- Interpretar picos de fuga como componentes reales, o comparar amplitudes sin corregir la ganancia de la ventana.
- Creer que rellenar con ceros mejora la resolución.
- Diseñar un IIR por bilineal sin predistorsionar el corte.
- Implementar un IIR de orden alto en forma directa con coeficientes cuantificados (se vuelve inestable): usar secciones de segundo orden.
- Diezmar sin filtrar antes (aliasing).
- Olvidar el retardo de grupo de un FIR largo en un lazo de control.

## 10. Resumen

- DFT: bins $f_s/N$, $k = fN/f_s$, fuga; FFT $\frac N2\log_2N$; Goertzel $2\cos(2\pi k/N)$.
- Ventanas: rectangular −13, Hann −31,5, Hamming −43, Blackman −58 dB; resolución frente a rango dinámico.
- Filtros $H(z) = B/A$; FIR estable y de fase lineal; IIR eficiente, polos dentro del círculo.
- Media móvil (ceros en $f_s/M$), un polo (corte por $\cos\omega$), resonador ($|z| = \sqrt{-a_2}$).
- FIR por ventana: retardo $(N - 1)/2$, atenuación según la ventana, transición $\propto 1/N$.
- Bilineal con predistorsión $\frac{f_s}{\pi}\tan\frac{\pi f}{f_s}$; secciones de segundo orden; multitasa; promediado $10\log M$.

## Repaso: lo que debe quedarte dentro de un mes

1. La resolución de una DFT es $f_s/N$, y solo se mejora con más tiempo de señal.
2. Ventanear es cambiar resolución por rango dinámico.
3. FIR: estable y lineal en fase; IIR: barato pero con polos que vigilar.
4. La bilineal deforma las frecuencias: predistorsiona.
5. Antes de diezmar, filtra.

## Siguiente

`ia-vision` (procesado 2D: convoluciones e imágenes), `rob-percepcion-slam` (filtrado de sensores), `ing-rf-microondas` y `ing-diseno-asic` (filtros en
hardware). La teoría está en [[ing-senales-sistemas]].
