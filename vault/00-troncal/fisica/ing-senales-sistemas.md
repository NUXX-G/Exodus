---
id: ing-senales-sistemas
title: "Señales y sistemas: convolución, Fourier, Laplace, muestreo, DFT y filtros digitales"
area: ingenieria
trunk_level: 11
prerequisites: [mat-ecuaciones-diferenciales, mat-algebra-lineal, mat-trigonometria, mat-numeros-complejos]
academic_sources:
  - "Oppenheim, A. V.; Willsky, A. S.; Nawab, S. H. Signals and Systems, 2ª ed. Prentice Hall, 1997."
  - "Oppenheim, A. V.; Schafer, R. W. Discrete-Time Signal Processing, 3ª ed. Pearson, 2010."
  - "Shannon, C. E. Communication in the Presence of Noise. Proceedings of the IRE, 37(1), 10-21, 1949."
  - "Cooley, J. W.; Tukey, J. W. An Algorithm for the Machine Calculation of Complex Fourier Series. Mathematics of Computation, 19(90), 297-301, 1965."
  - "Smith, S. W. The Scientist and Engineer's Guide to Digital Signal Processing. California Technical Publishing, 1997."
ctf_flag: "sha256:d1ee7d87d37d729cdf5f3aa03359767f11115c4481cef475d2ea20a8f8fcff98"
hints:
  - "(a) Tras muestrear, dos frecuencias que difieren en un múltiplo de fs son indistinguibles, y una frecuencia f se confunde también con fs − f: reduce al intervalo [0, fs/2]. (b) La convolución de dos secuencias finitas de longitudes L y M tiene L + M − 1 muestras. (c) El coeficiente k de la DFT mide cuánto se parece la señal a una exponencial compleja de k ciclos en la ventana; busca el de mayor módulo."
  - "numpy.convolve(x, h) da la convolución completa; conviértela a enteros de Python antes de sumar cuadrados para no depender del tipo. numpy.fft.fft(x) devuelve los N coeficientes; numpy.abs y numpy.argmax sobre los índices 1 a N/2 localizan el pico. Sin numpy, la convolución y la DFT directas de la sección 9 bastan. Valida tu DFT con la relación de Parseval antes de fiarte del resultado."
  - "Oppenheim & Schafer, §2.3 (sistemas LTI y convolución), §4.1–4.2 (muestreo y solapamiento) y cap. 8 (DFT). Shannon (1949), teorema 1. Documentación: numpy.org/doc/stable/reference/routines.fft.html — fíjate en la convención de signo y en que no normaliza la transformada directa."
exercises:
  - id: energia-de-una-senal
    tier: 1
    prompt: |
      ¿Cuál es la energía $E = \sum_n \lvert x[n]\rvert^2$ de la señal $x = (1, -2, 3, 0, 2)$ (cero fuera de esas cinco muestras)? Respuesta: un entero.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
  - id: periodo-discreto
    tier: 1
    prompt: |
      ¿Cuál es el periodo fundamental (el menor $N > 0$ con $x[n + N] = x[n]$ para todo $n$) de $x[n] = \cos\!\left(\frac{3\pi n}{8}\right)$? Respuesta: un entero.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: convolucion-a-mano
    tier: 1
    prompt: |
      Calcula $y = x * h$ para $x = (1, 2, 3)$ y $h = (1, -1, 2)$, ambas empezando en $n = 0$. Respuesta: las muestras de $y$ desde $n = 0$, separadas por `;`.
    answers: ["sha256:917bd6b4fe75222cdea49f195d8377ee08cfcc70fe65cd09f9616a625674ab15"]
  - id: alias-de-un-tono
    tier: 1
    prompt: |
      Un tono de $7$ kHz se muestrea a $f_s = 10$ kHz sin filtro antisolapamiento. ¿A qué frecuencia de $[0, f_s/2]$ aparece, en Hz? Respuesta: un entero.
    answers: ["sha256:a176eeb31e601c3877c87c2843a2f584968975269e369d5c86788b4c2f92d2a2"]
  - id: ganancia-en-continua
    tier: 1
    prompt: |
      El filtro $y[n] = 0{,}5\,x[n] + 0{,}3\,y[n-1]$ recibe un escalón unidad. ¿Hacia qué valor tiende la salida, es decir, cuánto vale $H(z)$ en $z = 1$? Respuesta: con **4 decimales**.
    answers: ["sha256:1484d38679cc293339c5fe4c51a30ca74a3b712edc197bb182b30d7dc82c9cf1"]
  - id: armonico-de-la-cuadrada
    tier: 2
    prompt: |
      La onda cuadrada de periodo $T$ que vale $+1$ en la primera mitad del periodo y $-1$ en la segunda tiene serie de Fourier $\sum b_k\sin(2\pi kt/T)$. ¿Cuánto vale $b_3$? Respuesta: con **4 decimales**.
    answers: ["sha256:e48d213e13e3900f04ed6e17797a14838dcb82e52951ef68dcb929c017722850"]
  - id: potencia-en-el-fundamental
    tier: 2
    prompt: |
      Para la misma onda cuadrada $\pm1$ (potencia media $1$), ¿qué fracción de la potencia lleva el armónico fundamental, $b_1^2/2$? Respuesta: con **4 decimales**.
    answers: ["sha256:6cc9dd5fdf014539d9b92cdb75636d54d9978e3d8c6292f988525c3743d76479"]
  - id: frecuencia-de-corte-rc
    tier: 2
    prompt: |
      Un filtro paso bajo RC tiene $R = 1$ kΩ y $C = 100$ nF. ¿Cuál es su frecuencia de corte ($-3$ dB), en Hz? Respuesta: con **2 decimales**.
    answers: ["sha256:647b5ffe7942b6273e7ae238ba47fcc33ed5439a5b27ff2da60917a45b01a730"]
  - id: atenuacion-en-db
    tier: 2
    prompt: |
      ¿Cuál es la ganancia, en dB, de un paso bajo de primer orden $H(f) = \frac{1}{1 + jf/f_c}$ a la frecuencia $f = 10f_c$? Respuesta: con **2 decimales** (negativa).
    answers: ["sha256:12721e732b8a54990ba08fa70674d77a788d10b6a3a813b04595ae9ee5c1e0a0"]
  - id: segundo-orden
    tier: 2
    prompt: |
      Un sistema tiene función de transferencia $H(s) = \frac{25}{s^2 + 4s + 25}$. Ante un escalón unidad, ¿cuál es su sobreoscilación (en %) y el instante del primer pico (en s)? Respuesta: `sobreoscilacion;tpico`, con **2** y **3 decimales**.
    answers: ["sha256:2db32d679ca3509794ceaef8ea01183494da487327cf75d7f34e519dc688bdb3"]
  - id: polos-y-estabilidad
    tier: 3
    prompt: |
      El filtro $y[n] = x[n] + 1{,}5\,y[n-1] - 0{,}7\,y[n-2]$ tiene $H(z) = \frac{1}{1 - 1{,}5z^{-1} + 0{,}7z^{-2}}$. ¿Cuál es el módulo de sus polos? (Si es menor que $1$, es estable.) Respuesta: con **4 decimales**.
    answers: ["sha256:813d4dcd37a8b672f5e185fa95e7525ecc6b5a42604bc5297c754e62c33a4042"]
  - id: picos-de-la-dft
    tier: 3
    prompt: |
      Sea $x[n] = \cos\!\left(\frac{2\pi\cdot5n}{64}\right) + 0{,}5\sin\!\left(\frac{2\pi\cdot12n}{64}\right)$ para $0 \le n < 64$, y $X[k]$ su DFT de 64 puntos. ¿Cuánto valen $\lvert X[5]\rvert$ y $\lvert X[12]\rvert$? Respuesta: `X5;X12`.
    answers: ["sha256:4306d8b239d5027f4c4a600f51ac7ed3f34569f8d50c699187df88472ec65907"]
  - id: resolucion-de-la-dft
    tier: 3
    prompt: |
      Se toma una DFT de $N = 1024$ muestras de un audio a $f_s = 48$ kHz. ¿Cuál es la separación entre frecuencias de la DFT, en Hz, y en qué índice $k$ aparece un tono de $1500$ Hz? Respuesta: `df;k`.
    answers: ["sha256:327bbda0e46807c686bfb70eb3ca5572ebebb25040001cbc0a8590f2f5f33ac3"]
  - id: media-movil
    tier: 3
    prompt: |
      El filtro de media móvil $y[n] = \frac14\bigl(x[n] + x[n-1] + x[n-2] + x[n-3]\bigr)$ trabaja a $f_s = 8000$ Hz. ¿Cuál es la menor frecuencia positiva que anula por completo, en Hz, y su ganancia $\lvert H\rvert$ a $1000$ Hz? Respuesta: `fcero;ganancia`, la ganancia con **4 decimales**.
    answers: ["sha256:322f614f6b3167347fa76ba60ece0dee3cc74272695a8910f72ae787581cfdb3"]
  - id: pulso-por-un-rc
    tier: 3
    prompt: |
      Un RC con $\tau = RC$, inicialmente descargado, recibe un pulso de $1$ V que dura de $t = 0$ a $t = \tau$. Con $h(t) = \frac1\tau e^{-t/\tau}$ para $t \ge 0$, ¿cuánto vale la salida en $t = \tau$ y en $t = 2\tau$, en voltios? Respuesta: `y1;y2`, ambas con **4 decimales**.
    answers: ["sha256:a898f74114a86a1c7bd741af7375dbb19a67b35c03614c973a44d928c66734a4"]
  - id: tiempo-de-establecimiento
    tier: 3
    prompt: |
      El filtro $y[n] = x[n] + 0{,}9\,y[n-1]$, en reposo, recibe un escalón unidad desde $n = 0$, y su salida tiende a $10$. ¿Cuál es el primer índice $n$ con $y[n] \ge 9{,}5$? Respuesta: un entero.
    answers: ["sha256:59e19706d51d39f66711c2653cd7eb1291c94d9b55eb14bda74ce4dc636d015a"]
---

# Señales y sistemas: convolución, Fourier, Laplace, muestreo, DFT y filtros digitales

Un micrófono, un sensor de un robot, la tensión de un circuito o la luz que llega a una cámara son **señales**: magnitudes que varían con el
tiempo (o con el espacio). Un amplificador, un filtro, un canal de radio o un algoritmo que suaviza datos son **sistemas**: transforman una señal
en otra. Casi todo sistema útil se comporta, en algún régimen, de forma **lineal e invariante en el tiempo**, y para esa clase existe una teoría
completa: el sistema queda descrito por una única función, y las sinusoides lo atraviesan sin deformarse. De ahí nace el análisis en
frecuencia, que es el lenguaje común de la electrónica, las comunicaciones, el audio, el control y el procesado de imagen.

## Objetivos

Al terminar sabrás:

1. Clasificar señales (continuas y discretas, periódicas, de energía y de potencia) y sistemas (lineales, invariantes, causales, estables).
2. Calcular la salida de un sistema LTI como convolución con su respuesta al impulso, a mano y con un programa.
3. Descomponer una señal periódica en serie de Fourier y usar la transformada de Fourier y sus propiedades.
4. Leer una respuesta en frecuencia: ganancia, fase, decibelios, frecuencia de corte y diagrama de Bode de un filtro de primer orden.
5. Usar la función de transferencia de Laplace: polos, estabilidad y respuesta al escalón de sistemas de primer y segundo orden.
6. Aplicar el teorema de muestreo y predecir el solapamiento (*aliasing*).
7. Calcular e interpretar la DFT (resolución, simetría, Parseval) y entender por qué la FFT es $O(N\log N)$.
8. Analizar filtros digitales FIR e IIR con la transformada Z.

## Qué debes dominar antes

[[mat-trigonometria]] (seno, coseno, radianes, identidades), [[mat-ecuaciones-diferenciales]] (EDO lineales, transformada de Laplace) y
[[mat-algebra-lineal]] (bases, producto escalar, ortogonalidad). Los números complejos en forma exponencial, $e^{j\theta} = \cos\theta + j\sin\theta$
(en ingeniería se escribe $j$ para no confundir con la corriente $i$).

> [!question] Test de entrada
> 1. ¿Cuánto vale $\lvert e^{j\theta}\rvert$? ¿Y $e^{j\pi}$?
> 2. ¿Cuál es el periodo de $\sin(2\pi\cdot 50\,t)$?
> 3. ¿Qué es la transformada de Laplace de $y'(t)$ si $y(0) = 0$?
>
> Respuestas: $1$ y $-1$; $1/50 = 0{,}02$ s; $sY(s)$.

## 1. Para qué sirve

- **Electrónica y comunicaciones**: filtros, modulación, ecualización, wifi y telefonía móvil (OFDM es una FFT); [[ing-circuitos]] diseña los
  filtros analógicos que este nodo analiza.
- **Audio, imagen y vídeo**: compresión (MP3, JPEG usan transformadas de la familia de Fourier), ecualizadores, eliminación de ruido.
- **Control y robótica**: la función de transferencia y sus polos dicen si un brazo robótico oscilará o se estabilizará ([[rob-control]]).
- **Instrumentación**: elegir la frecuencia de muestreo de un sensor y el filtro previo sin perder información.
- **Aprendizaje automático**: las redes convolucionales aplican convoluciones discretas, exactamente las de la sección 3.
- **Física**: las ondas de [[fis-ondas-optica]] se descomponen en armónicos con la serie de Fourier.

## 2. Señales y sistemas

Una **señal continua** es una función $x(t)$; una **discreta** es una sucesión $x[n]$ con $n$ entero (por ejemplo, las muestras de un sensor).
Señales básicas: el **impulso unidad** $\delta[n]$ ($1$ en $n = 0$, $0$ en el resto), el **escalón** $u[n]$ ($1$ si $n \ge 0$), las sinusoides y las
exponenciales complejas $e^{j\omega n}$.

- **Energía**: $E = \sum_n \lvert x[n]\rvert^2$ (o $\int\lvert x(t)\rvert^2dt$). **Potencia media**: el promedio de $\lvert x\rvert^2$ por unidad de tiempo; una
  sinusoide de amplitud $A$ tiene potencia $A^2/2$ y energía infinita.
- **Periodicidad discreta**: $x[n] = \cos(\omega_0n)$ es periódica solo si $\omega_0/(2\pi)$ es racional, $= k/N$ en fracción irreducible, y
  entonces su periodo fundamental es $N$. Así, $\cos(n)$ **no es periódica** como sucesión, aunque $\cos t$ lo sea.

Un **sistema** $\mathcal T$ transforma $x$ en $y = \mathcal T\{x\}$. Es:

- **lineal** si $\mathcal T\{ax_1 + bx_2\} = a\,\mathcal T\{x_1\} + b\,\mathcal T\{x_2\}$ (superposición);
- **invariante en el tiempo** si retrasar la entrada retrasa la salida lo mismo;
- **causal** si la salida en $n$ solo depende de entradas en instantes $\le n$ (todo sistema en tiempo real);
- **estable** (BIBO) si toda entrada acotada produce una salida acotada.

*Ejemplos.* $y[n] = 2x[n] + x[n-1]$ es lineal, invariante y causal. $y[n] = x[n]^2$ no es lineal. $y[n] = n\,x[n]$ no es invariante.
$y[n] = x[n+1]$ no es causal. Un acumulador $y[n] = \sum_{k\le n}x[k]$ no es estable: ante un escalón crece sin límite.

## 3. Sistemas LTI y convolución

Sea $h = \mathcal T\{\delta\}$ la **respuesta al impulso**.

**Teorema.** Un sistema lineal e invariante (LTI) queda determinado por $h$, y su salida es la **convolución**

$$
y[n] = (x * h)[n] = \sum_{k=-\infty}^{\infty} x[k]\, h[n - k] .
$$

*Demostración.* Toda señal es combinación de impulsos desplazados: $x[n] = \sum_k x[k]\,\delta[n - k]$. Por invariancia, la respuesta a
$\delta[n - k]$ es $h[n - k]$; por linealidad, la respuesta a la suma es la suma de las respuestas. $\blacksquare$

En tiempo continuo, $y(t) = \int x(\tau)\,h(t - \tau)\,d\tau$. La convolución es conmutativa y asociativa. Multiplicar polinomios es convolucionar
sus coeficientes, y la suma de variables aleatorias independientes convoluciona sus distribuciones ([[mat-probabilidad]]). Dos secuencias finitas
de longitudes $L$ y $M$ dan una convolución de $L + M - 1$ muestras.

> [!example] Ejemplo resuelto 1: convolución a mano
> $x = (2, 1)$ y $h = (1, 3, -1)$, empezando en $n = 0$. Por la fórmula, o como producto de polinomios $(2 + z)(1 + 3z - z^2)$:
> $y[0] = 2\cdot1 = 2$; $y[1] = 2\cdot3 + 1\cdot1 = 7$; $y[2] = 2\cdot(-1) + 1\cdot3 = 1$; $y[3] = 1\cdot(-1) = -1$. Resultado: $y = (2, 7, 1, -1)$,
> con $2 + 3 - 1 = 4$ muestras.

**Causalidad y estabilidad desde $h$.** Un sistema LTI es causal si y solo si $h[n] = 0$ para $n < 0$, y estable si y solo si
$\sum_n \lvert h[n]\rvert < \infty$. Por ejemplo, $h[n] = a^n u[n]$ es estable exactamente cuando $\lvert a\rvert < 1$.

*Un caso continuo.* El circuito RC con la tensión del condensador como salida cumple $\tau y'(t) + y(t) = x(t)$ con $\tau = RC$; su respuesta al
impulso es $h(t) = \frac1\tau e^{-t/\tau}$ para $t \ge 0$. Ante un escalón, $y(t) = 1 - e^{-t/\tau}$: tras $5\tau$ la salida está a menos del $1\,\%$
del valor final.

## 4. Series de Fourier

Una señal periódica de periodo $T$ (frecuencia fundamental $f_0 = 1/T$) razonablemente regular se escribe como suma de armónicos:

$$
x(t) = \frac{a_0}{2} + \sum_{k=1}^{\infty}\bigl(a_k\cos(2\pi kf_0t) + b_k\sin(2\pi kf_0t)\bigr), \quad
a_k = \frac2T\int_0^T x(t)\cos(2\pi kf_0t)\,dt, \quad b_k = \frac2T\int_0^T x(t)\sin(2\pi kf_0t)\,dt .
$$

Los coeficientes salen de la **ortogonalidad**: la integral de un periodo de $\sin(2\pi kf_0t)\sin(2\pi lf_0t)$ es $0$ si $k \ne l$ y $T/2$ si $k = l$. Es
la misma idea que hallar las coordenadas de un vector en una base ortogonal ([[mat-algebra-lineal]]), con las funciones como vectores.

> [!example] Ejemplo resuelto 2: la onda en diente de sierra
> $x(t) = t$ en $(-\pi, \pi)$, extendida con periodo $2\pi$. Es impar, así que $a_k = 0$. Integrando por partes,
> $b_k = \frac1\pi\int_{-\pi}^{\pi}t\sin(kt)\,dt = \frac{2(-1)^{k+1}}{k}$. Por tanto $x(t) = 2\bigl(\sin t - \frac{\sin 2t}{2} + \frac{\sin 3t}{3} - \cdots\bigr)$.
> Los coeficientes decaen como $1/k$, lentamente, porque la señal tiene saltos.

**Simetrías que ahorran cálculo.** Si $x$ es par solo hay cosenos; si es impar, solo senos; si $x(t + T/2) = -x(t)$ (simetría de media onda), solo
armónicos impares. La onda cuadrada $\pm1$ cumple las dos últimas: solo tiene $b_k$ con $k$ impar.

**Parseval.** La potencia media es la suma de las potencias de los armónicos:
$\frac1T\int_0^T x^2\,dt = \frac{a_0^2}{4} + \sum_k \frac{a_k^2 + b_k^2}{2}$.

**Fenómeno de Gibbs.** Cerca de un salto, la suma parcial de la serie sobrepasa el valor de la señal en torno a un $9\,\%$ del salto, por muchos
términos que se sumen: el pico se estrecha pero no baja. Es un ejemplo de convergencia no uniforme ([[mat-analisis-real]]).

## 5. Transformada de Fourier y respuesta en frecuencia

Para señales no periódicas de energía finita, la suma de armónicos pasa a ser una integral:

$$
X(f) = \int_{-\infty}^{\infty} x(t)\, e^{-j2\pi ft}\, dt, \qquad x(t) = \int_{-\infty}^{\infty} X(f)\, e^{j2\pi ft}\, df .
$$

| Tiempo | Frecuencia |
|---|---|
| $x * h$ | $X \cdot H$ |
| $x(t - t_0)$ | $e^{-j2\pi ft_0}X(f)$ |
| $x'(t)$ | $j2\pi f\,X(f)$ |
| $x(at)$ | $\frac{1}{\lvert a\rvert}X(f/a)$ |
| $\int \lvert x \rvert^2\, dt$ | $\int \lvert X \rvert^2\, df$ (Parseval) |

El pulso rectangular de anchura $\Delta$ tiene transformada $\Delta\,\operatorname{sinc}(f\Delta)$, con $\operatorname{sinc}(u) = \frac{\sin\pi u}{\pi u}$: cuanto más corto
el pulso, más ancho su espectro. Esa relación inversa entre duración y ancho de banda es general (principio de incertidumbre de Fourier).

**Las exponenciales son autofunciones.** Si $x(t) = e^{j2\pi ft}$ entra en un sistema LTI, sale $H(f)\,e^{j2\pi ft}$, con $H$ la transformada de $h$:
la **respuesta en frecuencia**. Una sinusoide sale con la misma frecuencia, amplitud multiplicada por $\lvert H(f)\rvert$ y fase desplazada $\arg H(f)$.
En frecuencia, **la convolución se convierte en producto**.

**Decibelios.** La ganancia en dB es $20\log_{10}\lvert H\rvert$: $-3$ dB es un factor $1/\sqrt2$ en amplitud (la mitad de potencia), $-20$ dB un factor
$1/10$.

> [!example] Ejemplo resuelto 3: el paso bajo RC
> De $\tau y' + y = x$, con $x = e^{j2\pi ft}$ y $y = He^{j2\pi ft}$: $(j2\pi f\tau + 1)H = 1$, es decir,
> $H(f) = \frac{1}{1 + jf/f_c}$ con $f_c = \frac{1}{2\pi RC}$. Entonces $\lvert H\rvert = \frac{1}{\sqrt{1 + (f/f_c)^2}}$: vale $1$ a baja frecuencia,
> $1/\sqrt2$ ($-3$ dB) en la **frecuencia de corte** $f_c$, y por encima cae como $f_c/f$: $-20$ dB por década. La fase va de $0$ a $-90°$ y vale $-45°$
> en $f_c$. El **diagrama de Bode** dibuja ganancia en dB y fase frente a $\log f$; para este filtro son dos rectas que se cortan en $f_c$.
>
> Con $R = 10$ kΩ y $C = 10$ nF, $f_c = \frac{1}{2\pi\cdot10^{-4}} \approx 1592$ Hz.

## 6. Laplace: función de transferencia, polos y respuesta temporal

La transformada de Laplace (de [[mat-ecuaciones-diferenciales]]) convierte una EDO lineal con condiciones iniciales nulas en una ecuación
algebraica. Para $a_2y'' + a_1y' + a_0y = b_0x$, la **función de transferencia** es $H(s) = \frac{Y(s)}{X(s)} = \frac{b_0}{a_2s^2 + a_1s + a_0}$, y la
respuesta en frecuencia es $H(j2\pi f)$.

Los **polos** son las raíces del denominador. Cada polo $p$ aporta a la respuesta un término $e^{pt}$. Por tanto:

**Teorema.** Un sistema causal con $H(s)$ racional es estable si y solo si todos sus polos tienen parte real negativa.

**Primer orden**, $H = \frac{1}{\tau s + 1}$: polo en $-1/\tau$, respuesta al escalón $1 - e^{-t/\tau}$ sin oscilación.

**Segundo orden**, $H(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_ns + \omega_n^2}$, con **frecuencia natural** $\omega_n$ y **amortiguamiento** $\zeta$. Si $0 < \zeta < 1$
los polos son complejos, $-\zeta\omega_n \pm j\omega_n\sqrt{1 - \zeta^2}$, y la respuesta al escalón oscila antes de asentarse:

$$
\text{sobreoscilación} = e^{-\pi\zeta/\sqrt{1 - \zeta^2}}, \qquad t_{\text{pico}} = \frac{\pi}{\omega_n\sqrt{1 - \zeta^2}} .
$$

> [!example] Ejemplo resuelto 4: leer un segundo orden (con menos ayuda)
> $H(s) = \frac{16}{s^2 + 4s + 16}$: identificando, $\omega_n^2 = 16$ y $2\zeta\omega_n = 4$, luego $\omega_n = 4$ y $\zeta = 0{,}5$. La sobreoscilación es
> $e^{-\pi\cdot0{,}5/\sqrt{0{,}75}} \approx 0{,}163$, un $16{,}3\,\%$. Calcula tú el instante del pico y comprueba que es $\approx 0{,}907$ s.

Con $\zeta \ge 1$ no hay sobreoscilación; $\zeta = 1/\sqrt2 \approx 0{,}707$ es un compromiso habitual en control (respuesta rápida con menos del
$5\,\%$ de sobreoscilación).

## 7. Muestreo

Muestrear $x(t)$ cada $T_s = 1/f_s$ segundos da $x[n] = x(nT_s)$. En frecuencia, el espectro de la señal muestreada es la **suma de réplicas** del
original desplazadas en múltiplos de $f_s$:

$$
X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - kf_s) .
$$

**Teorema del muestreo (Nyquist-Shannon).** Si $X(f) = 0$ para $\lvert f\rvert \ge B$ y $f_s > 2B$, entonces $x(t)$ se recupera exactamente de sus muestras:

$$
x(t) = \sum_{n=-\infty}^{\infty} x[n]\, \operatorname{sinc}\!\left(\frac{t - nT_s}{T_s}\right) .
$$

*Idea de la demostración.* Si $f_s > 2B$ las réplicas no se solapan, y un filtro paso bajo ideal de ancho $f_s/2$ aísla la réplica central; su
respuesta al impulso es la función sinc. $\blacksquare$

Si $f_s \le 2B$ las réplicas se solapan y la información se pierde: es el **solapamiento** (*aliasing*). Una sinusoide de frecuencia $f$ produce las
mismas muestras que una de frecuencia

$$
f_a = \bigl\lvert f - f_s \cdot \operatorname{round}(f / f_s) \bigr\rvert \;\in\; [0,\, f_s/2] .
$$

> [!example] Ejemplo resuelto 5: el alias
> Un tono de $11$ kHz muestreado a $f_s = 8$ kHz: $11/8 = 1{,}375$ redondea a $1$, y $f_a = \lvert 11 - 8\rvert = 3$ kHz. Las muestras de
> $\cos(2\pi\cdot11000\,n/8000)$ y de $\cos(2\pi\cdot3000\,n/8000)$ son idénticas: $11000n/8000 = 3000n/8000 + n$, y un número entero de vueltas no cambia
> el coseno. Ese tono aparecería en la grabación como uno de $3$ kHz.

Por eso todo conversor analógico-digital va precedido de un filtro paso bajo analógico (*antialiasing*): una vez muestreada, la señal espuria es
indistinguible de una legítima. El audio de CD usa $44{,}1$ kHz para cubrir el oído humano (hasta unos $20$ kHz) con margen para ese filtro.

## 8. La transformada discreta de Fourier

Para una secuencia finita $x[0], \dots, x[N-1]$, la **DFT** es

$$
X[k] = \sum_{n=0}^{N-1} x[n]\, e^{-j2\pi kn/N}, \qquad x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k]\, e^{j2\pi kn/N} .
$$

Es un cambio de base en $\mathbb C^N$: los vectores $e_k[n] = e^{j2\pi kn/N}$ son ortogonales, $\sum_n e_k[n]\,\overline{e_l[n]} = N\delta_{kl}$, de donde salen
la fórmula inversa y la relación de **Parseval** $\sum_n \lvert x[n]\rvert^2 = \frac1N \sum_k \lvert X[k]\rvert^2$.

- **Frecuencias**: el índice $k$ corresponde a $kf_s/N$; la **resolución** es $\Delta f = f_s/N$. Para distinguir dos tonos cercanos hay que observar
  durante más tiempo ($N$ mayor), no muestrear más deprisa.
- **Simetría**: para señales reales, $X[N - k] = \overline{X[k]}$; solo $0 \le k \le N/2$ llevan información.
- **Amplitudes**: una sinusoide de amplitud $A$ que completa exactamente $k_0$ ciclos en la ventana da $\lvert X[k_0]\rvert = \lvert X[N - k_0]\rvert = AN/2$ y
  ceros en el resto.
- **Fugas**: si el número de ciclos no es entero, la energía se reparte entre índices vecinos. Multiplicar por una **ventana** (Hann, Hamming)
  antes de la DFT reduce esas fugas a costa de ensanchar el pico.

**FFT.** Calcular la DFT por la definición cuesta $O(N^2)$. La transformada rápida de Cooley y Tukey separa las muestras pares e impares,

$$
X[k] = E[k] + e^{-j2\pi k/N}\, O[k], \qquad X[k + N/2] = E[k] - e^{-j2\pi k/N}\, O[k],
$$

con $E$ y $O$ las DFT de tamaño $N/2$ de cada mitad. La recurrencia $T(N) = 2T(N/2) + O(N)$ da $O(N\log N)$: para $N = 2^{20}$, unas $50\,000$
veces menos operaciones. Con ella, la convolución larga se hace más rápido en frecuencia (rellenando con ceros hasta $L + M - 1$ para que la
convolución circular de la DFT coincida con la lineal).

## 9. Transformada Z y filtros digitales

La **transformada Z**, $X(z) = \sum_n x[n]\, z^{-n}$, es a las señales discretas lo que Laplace a las continuas; en el círculo unidad, $z = e^{j\omega}$,
da la respuesta en frecuencia, con $\omega = 2\pi f/f_s$. Un retardo de una muestra es una multiplicación por $z^{-1}$, así que un filtro definido
por una ecuación en diferencias

$$
y[n] = \sum_{k=0}^{M} b_k\, x[n - k] - \sum_{k=1}^{N} a_k\, y[n - k]
$$

tiene función de transferencia racional $H(z) = \frac{\sum b_k z^{-k}}{1 + \sum a_k z^{-k}}$. La ganancia en continua es $H(1)$.

**Teorema.** Un sistema causal con $H(z)$ racional es estable si y solo si todos sus polos están dentro del círculo unidad, $\lvert z\rvert < 1$.

- Un filtro **FIR** ($a_k = 0$, sin realimentación) tiene respuesta al impulso finita y es siempre estable. La **media móvil** de $M$ muestras,
  $H(e^{j\omega}) = \frac1M\sum_{k=0}^{M-1}e^{-j\omega k}$, tiene ganancia $\left\lvert\frac{\sin(M\omega/2)}{M\sin(\omega/2)}\right\rvert$ y anula las frecuencias
  $f = mf_s/M$ ($m = 1, 2, \dots$).
- Un filtro **IIR** (con realimentación) logra la misma selectividad con muchos menos coeficientes, a costa de poder ser inestable. El más
  simple, $y[n] = (1 - \alpha)x[n] + \alpha y[n-1]$ con $0 < \alpha < 1$, es el **suavizado exponencial**: polo en $z = \alpha$, ganancia en continua $1$.

> [!example] Ejemplo resuelto 6: estabilidad de un IIR de segundo orden
> $y[n] = x[n] + y[n-1] - 0{,}5\,y[n-2]$ da $H(z) = \frac{1}{1 - z^{-1} + 0{,}5z^{-2}}$. Los polos son las raíces de $z^2 - z + 0{,}5 = 0$:
> $z = \frac{1 \pm j}{2}$, de módulo $\sqrt{0{,}5} \approx 0{,}707 < 1$. Es estable, y como los polos son complejos su respuesta al impulso oscila
> amortiguándose como $0{,}707^n$. En general, para $z^2 + a_1z + a_2$ con polos complejos el producto de las raíces es $a_2 = \lvert z\rvert^2$.

## 10. Comprobar con un programa

La convolución directa se contrasta con el producto en frecuencia; la DFT directa, con la FFT y con Parseval; el alias, comparando muestras; y un
filtro IIR, simulando su ecuación en diferencias frente a la fórmula de la respuesta al escalón.

```python
import cmath
import math

def convolucion(x, h):
    """Convolución completa de dos secuencias finitas: len(x) + len(h) - 1 muestras."""
    y = [0] * (len(x) + len(h) - 1)
    for i, xi in enumerate(x):
        for j, hj in enumerate(h):
            y[i + j] += xi * hj
    return y

def dft(x):
    N = len(x)
    return [sum(x[n] * cmath.exp(-2j * math.pi * k * n / N) for n in range(N)) for k in range(N)]

def fft(x):
    """Cooley-Tukey radix 2: len(x) debe ser potencia de 2."""
    N = len(x)
    if N == 1:
        return [complex(x[0])]
    E, O = fft(x[0::2]), fft(x[1::2])
    t = [cmath.exp(-2j * math.pi * k / N) * O[k] for k in range(N // 2)]
    return [E[k] + t[k] for k in range(N // 2)] + [E[k] - t[k] for k in range(N // 2)]

def ifft(X):
    N = len(X)
    return [v.conjugate() / N for v in fft([v.conjugate() for v in X])]

# 1. Ejemplo resuelto 1, por la definición y por la FFT con relleno de ceros hasta 8 muestras.
x, h = [2, 1], [1, 3, -1]
assert convolucion(x, h) == [2, 7, 1, -1]
X, H = fft(x + [0] * 6), fft(h + [0] * 5)
assert [round(v.real) for v in ifft([a * b for a, b in zip(X, H)])][:4] == [2, 7, 1, -1]

# 2. DFT directa frente a FFT, Parseval y el pico de una sinusoide con 3 ciclos exactos (|X[3]| = A·N/2).
N = 32
s = [0.8 * math.cos(2 * math.pi * 3 * n / N) + (n % 5) / 10 for n in range(N)]
A, B = dft(s), fft(s)
assert max(abs(a - b) for a, b in zip(A, B)) < 1e-9
assert abs(sum(v * v for v in s) - sum(abs(v) ** 2 for v in A) / N) < 1e-9
assert abs(A[N - 5] - A[5].conjugate()) < 1e-9  # simetría de una señal real
pura = fft([0.8 * math.cos(2 * math.pi * 3 * n / N) for n in range(N)])
assert abs(abs(pura[3]) - 0.8 * N / 2) < 1e-9 and abs(pura[4]) < 1e-9

# 3. Alias: 11 kHz muestreado a 8 kHz da las mismas muestras que 3 kHz.
fs = 8000
assert abs(11000 - fs * round(11000 / fs)) == 3000
assert all(abs(math.cos(2 * math.pi * 11000 * n / fs) - math.cos(2 * math.pi * 3000 * n / fs)) < 1e-9 for n in range(100))

# 4. Suavizado exponencial con α = 0,8 ante un escalón: y[n] = 1 − α^(n+1).
alfa, y = 0.8, 0.0
for n in range(50):
    y = (1 - alfa) * 1 + alfa * y
    assert abs(y - (1 - alfa ** (n + 1))) < 1e-12

# 5. Polos del ejemplo resuelto 6: módulo √0,5 y respuesta al impulso acotada por n·0,707^n.
p = (1 + cmath.sqrt(1 - 2)) / 2
assert abs(abs(p) - math.sqrt(0.5)) < 1e-12
h1, h2 = 0.0, 0.0
for n in range(200):
    yn = (1.0 if n == 0 else 0.0) + h1 - 0.5 * h2
    assert abs(yn) <= (n + 1) * math.sqrt(0.5) ** n + 1e-12
    h1, h2 = yn, h1
print("Todas las comprobaciones pasan")
```

## 11. Errores típicos

- Confundir frecuencia en Hz ($f$) con frecuencia angular ($\omega = 2\pi f$) o con la frecuencia discreta normalizada ($\omega = 2\pi f/f_s$).
- Olvidar que la convolución de longitudes $L$ y $M$ tiene $L + M - 1$ muestras, o usar la DFT (convolución **circular**) sin rellenar con ceros.
- Creer que muestrear a exactamente $2B$ basta: el teorema exige $f_s > 2B$, y en la práctica se necesita margen para el filtro antisolapamiento.
- Leer índices de la DFT por encima de $N/2$ como frecuencias altas: para señales reales son las negativas, espejo de las bajas.
- Pensar que más muestras por segundo dan más resolución en frecuencia: la resolución es $f_s/N = 1/(\text{duración})$.
- Usar $20\log_{10}$ para potencias (es $10\log_{10}$) o $10\log_{10}$ para amplitudes.
- Declarar estable un IIR mirando solo los coeficientes: hay que mirar los **polos**.
- Comparar amplitudes de la DFT sin normalizar: la DFT de numpy no divide por $N$.

## 12. Resumen

- LTI ⇒ $y = x * h$; causal si $h[n<0] = 0$; estable si $\sum\lvert h\rvert < \infty$.
- Serie de Fourier por ortogonalidad; simetrías; Parseval; Gibbs.
- Transformada de Fourier: convolución ↔ producto, retardo ↔ fase, derivada ↔ $j2\pi f$; las exponenciales son autofunciones, $H(f)$.
- Paso bajo RC: $f_c = 1/(2\pi RC)$, $-3$ dB en $f_c$, $-20$ dB/década.
- Laplace: polos en el semiplano izquierdo ⇔ estable; segundo orden con $\omega_n$, $\zeta$, sobreoscilación y tiempo de pico.
- Muestreo: $f_s > 2B$; alias $f_a = \lvert f - f_s\operatorname{round}(f/f_s)\rvert$.
- DFT: $\Delta f = f_s/N$, simetría, Parseval, fugas y ventanas; FFT $O(N\log N)$.
- Transformada Z: polos dentro del círculo unidad ⇔ estable; FIR siempre estable, IIR más eficiente.

## Reto

Calcula cuatro enteros.

- **a.** Un tono puro de $37\,300$ Hz se muestrea a $f_s = 8000$ Hz sin filtro previo. ¿A qué frecuencia, en Hz, aparece en la señal muestreada?
- **b.** Sean $x[n] = n \bmod 7$ para $0 \le n < 1000$ y $h[n] = (3n + 1) \bmod 5$ para $0 \le n < 100$, y sea $y = x * h$. Calcula la energía
  $\sum_n y[n]^2$. Valor de control: $y[500] = 605$.
- **c.** Sea $s[n] = (n^2 \bmod 31) - 15$ para $0 \le n < 256$ y $S[k]$ su DFT de 256 puntos. Encuentra el índice $k$, con $1 \le k \le 128$, que
  maximiza $\lvert S[k]\rvert$.
- **d.** $\lfloor \lvert S[k]\rvert \rfloor$ para ese índice.

Formato de la flag, en decimal: `EXODUS{a-b-c-d}`

## Repaso: lo que debe quedarte dentro de un mes

1. Un sistema LTI es su respuesta al impulso, y su salida es una convolución.
2. Las sinusoides atraviesan un LTI sin deformarse: solo cambian amplitud y fase, según $H(f)$.
3. En frecuencia, la convolución es un producto.
4. Muestrear exige $f_s > 2B$ y un filtro antes; lo que se solapa no se recupera.
5. Estabilidad: polos en el semiplano izquierdo (Laplace) o dentro del círculo unidad (Z).

## Siguiente

[[rob-control]] usa la función de transferencia y los polos para diseñar controladores; [[ing-circuitos]] construye los filtros analógicos
(activos, con amplificadores operacionales); en las ramas, procesado digital de señal, comunicaciones digitales y procesado de imagen. Las
convoluciones reaparecen en las redes convolucionales de [[ia-redes-profundas]].
