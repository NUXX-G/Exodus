---
id: ing-senales-sistemas
title: "Señales y sistemas"
area: ingenieria
trunk_level: 10
prerequisites: [mat-calculo-2, mat-algebra-lineal, mat-trigonometria]
academic_sources:
  - "Oppenheim, A. V.; Willsky, A. S.; Nawab, S. H. Signals and Systems, 2ª ed. Prentice Hall, 1997."
  - "Oppenheim, A. V.; Schafer, R. W. Discrete-Time Signal Processing, 3ª ed. Pearson, 2010."
  - "Shannon, C. E. Communication in the Presence of Noise. Proceedings of the IRE, 37(1), 1949."
  - "Cooley, J. W.; Tukey, J. W. An Algorithm for the Machine Calculation of Complex Fourier Series. Mathematics of Computation, 19(90), 1965."
  - "Smith, S. W. The Scientist and Engineer's Guide to Digital Signal Processing. California Technical Publishing, 1997."
ctf_flag: "sha256:d1ee7d87d37d729cdf5f3aa03359767f11115c4481cef475d2ea20a8f8fcff98"
hints:
  - "(a) Tras muestrear, dos frecuencias que difieren en un múltiplo de fs son indistinguibles, y una frecuencia f se confunde también con fs − f: reduce al intervalo [0, fs/2]. (b) La convolución de dos secuencias finitas de longitudes L y M tiene L + M − 1 muestras. (c) El coeficiente k de la DFT mide cuánto se parece la señal a una exponencial compleja de k ciclos en la ventana; busca el de mayor módulo."
  - "numpy.convolve(x, h) da la convolución completa; conviértela a enteros de Python antes de sumar cuadrados para no depender del tipo. numpy.fft.fft(x) devuelve los N coeficientes; numpy.abs y numpy.argmax sobre los índices 1 a N/2 localizan el pico. Valida tu DFT con la relación de Parseval antes de fiarte del resultado."
  - "Oppenheim & Schafer, §2.3 (sistemas LTI y convolución), §4.1–4.2 (muestreo y solapamiento) y cap. 8 (DFT). Shannon (1949), teorema 1. Documentación: numpy.org/doc/stable/reference/routines.fft.html — fíjate en la convención de signo y en que no normaliza la transformada directa."
---

# Señales y sistemas

Casi todo sistema físico útil se comporta, en algún régimen, de forma **lineal e invariante en
el tiempo**. Para esa clase existe una teoría completa: el sistema queda descrito por una única
función, y las exponenciales complejas lo atraviesan sin deformarse. De ahí nace el análisis en
frecuencia, que es el lenguaje de la electrónica, las comunicaciones y el control.

## 1. Sistemas lineales e invariantes

Una **señal** en tiempo discreto es una sucesión $x[n]$. Un **sistema** $\mathcal{T}$ transforma
una señal en otra. Es:

- **lineal** si $\mathcal{T}\{a x_1 + b x_2\} = a\,\mathcal{T}\{x_1\} + b\,\mathcal{T}\{x_2\}$;
- **invariante en el tiempo** si retrasar la entrada retrasa la salida lo mismo.

Sea $\delta[n]$ el impulso unidad (1 en $n = 0$, 0 en el resto) y $h = \mathcal{T}\{\delta\}$ la
**respuesta al impulso**.

**Teorema.** Un sistema lineal e invariante (LTI) queda determinado por $h$, y su salida es la
**convolución**

$$
y[n] = (x * h)[n] = \sum_{k=-\infty}^{\infty} x[k]\, h[n - k] .
$$

*Demostración.* Toda señal es combinación de impulsos desplazados:
$x[n] = \sum_k x[k]\,\delta[n - k]$. Por invariancia, la respuesta a $\delta[n - k]$ es
$h[n - k]$; por linealidad, la respuesta a la suma es la suma de las respuestas. $\blacksquare$

La convolución es conmutativa y asociativa. Multiplicar polinomios es convolucionar sus
coeficientes, y la suma de variables aleatorias independientes convoluciona sus distribuciones
([[mat-probabilidad]]).

```python
def convolucion(x, h):
    """Convolución completa de dos secuencias finitas: len(x) + len(h) - 1 muestras."""
    y = [0] * (len(x) + len(h) - 1)
    for i, xi in enumerate(x):
        for j, hj in enumerate(h):
            y[i + j] += xi * hj
    return y
```

Un sistema LTI es **causal** si $h[n] = 0$ para $n < 0$, y **estable** (entrada acotada implica
salida acotada) si y solo si $\sum_n |h[n]| < \infty$.

## 2. Autofunciones y respuesta en frecuencia

**Teorema.** Las exponenciales complejas son autofunciones de todo sistema LTI: si
$x[n] = e^{j\omega n}$, entonces $y[n] = H(e^{j\omega})\, e^{j\omega n}$ con

$$
H(e^{j\omega}) = \sum_{k} h[k]\, e^{-j\omega k} .
$$

*Demostración.* $y[n] = \sum_k h[k]\, e^{j\omega(n - k)} = e^{j\omega n} \sum_k h[k]\,
e^{-j\omega k}$. $\blacksquare$

$H$ es la **respuesta en frecuencia**. Una sinusoide entra y sale como sinusoide de la misma
frecuencia, con la amplitud multiplicada por $|H|$ y la fase desplazada $\arg H$. Si toda señal
se descompone en exponenciales, el efecto del sistema se reduce a multiplicar cada componente
por un número: en frecuencia, **la convolución se convierte en producto**.

## 3. Transformada de Fourier

Para señales de tiempo continuo de energía finita,

$$
X(f) = \int_{-\infty}^{\infty} x(t)\, e^{-j 2\pi f t}\, dt, \qquad
x(t) = \int_{-\infty}^{\infty} X(f)\, e^{j 2\pi f t}\, df .
$$

Propiedades que se usan a diario:

| Tiempo | Frecuencia |
|---|---|
| $x * h$ | $X \cdot H$ |
| $x(t - t_0)$ | $e^{-j 2\pi f t_0} X(f)$ |
| $x'(t)$ | $j 2\pi f\, X(f)$ |
| $\int \lvert x \rvert^2\, dt$ | $\int \lvert X \rvert^2\, df$ (Parseval) |

La tercera convierte ecuaciones diferenciales lineales en ecuaciones algebraicas, que es la
razón de ser de la transformada de Laplace en circuitos y control ([[rob-control]]).

## 4. Muestreo

Muestrear $x(t)$ cada $T_s = 1/f_s$ segundos da $x[n] = x(n T_s)$. En frecuencia, el espectro de
la señal muestreada es la **suma de réplicas** del original desplazadas en múltiplos de $f_s$:

$$
X_s(f) = f_s \sum_{k=-\infty}^{\infty} X(f - k f_s) .
$$

**Teorema del muestreo (Nyquist-Shannon).** Si $X(f) = 0$ para $|f| \ge B$ y $f_s > 2B$,
entonces $x(t)$ se recupera exactamente de sus muestras:

$$
x(t) = \sum_{n=-\infty}^{\infty} x[n]\, \operatorname{sinc}\!\left(\frac{t - n T_s}{T_s}\right),
\qquad \operatorname{sinc}(u) = \frac{\sin \pi u}{\pi u} .
$$

*Idea de la demostración.* Si $f_s > 2B$ las réplicas no se solapan, y un filtro paso bajo ideal
de ancho $f_s/2$ aísla la réplica central; su respuesta al impulso es la función sinc.
$\blacksquare$

Si $f_s \le 2B$ las réplicas se solapan y la información se pierde: es el **solapamiento**
(*aliasing*). Una sinusoide de frecuencia $f$ produce las mismas muestras que una de frecuencia

$$
f_a = \bigl| f - f_s \cdot \operatorname{round}(f / f_s) \bigr| \;\in\; [0,\, f_s/2] .
$$

Por eso todo conversor analógico-digital va precedido de un filtro paso bajo analógico
(*antialiasing*): una vez muestreada, la señal espuria es indistinguible de una legítima.

## 5. La transformada discreta de Fourier

Para una secuencia finita $x[0], \dots, x[N-1]$, la **DFT** es

$$
X[k] = \sum_{n=0}^{N-1} x[n]\, e^{-j 2\pi k n / N}, \qquad
x[n] = \frac{1}{N} \sum_{k=0}^{N-1} X[k]\, e^{j 2\pi k n / N} .
$$

Es un cambio de base en $\mathbb{C}^N$: los vectores $e_k[n] = e^{j 2\pi k n/N}$ son ortogonales,
$\sum_n e_k[n]\,\overline{e_l[n]} = N \delta_{kl}$, de donde salen la fórmula inversa y la
relación de Parseval $\sum_n |x[n]|^2 = \frac1N \sum_k |X[k]|^2$.

El coeficiente $k$ corresponde a la frecuencia $k f_s / N$. Para señales reales,
$X[N - k] = \overline{X[k]}$: solo los índices $0 \le k \le N/2$ llevan información.

Calcular la DFT por la definición cuesta $O(N^2)$. La **transformada rápida (FFT)** de
Cooley y Tukey separa las muestras pares e impares,

$$
X[k] = E[k] + e^{-j 2\pi k / N}\, O[k], \qquad X[k + N/2] = E[k] - e^{-j 2\pi k / N}\, O[k],
$$

con $E$ y $O$ las DFT de tamaño $N/2$ de cada mitad. La recurrencia
$T(N) = 2T(N/2) + O(N)$ da $O(N \log N)$. Sin ese algoritmo no existirían ni el audio digital
ni las comunicaciones OFDM (wifi, 4G y 5G).

## 6. Transformada Z y filtros digitales

La **transformada Z**, $X(z) = \sum_n x[n]\, z^{-n}$, generaliza la respuesta en frecuencia
(que es su valor en $|z| = 1$). Un filtro definido por una ecuación en diferencias

$$
y[n] = \sum_{k=0}^{M} b_k\, x[n - k] - \sum_{k=1}^{N} a_k\, y[n - k]
$$

tiene función de transferencia racional $H(z) = \frac{\sum b_k z^{-k}}{1 + \sum a_k z^{-k}}$.

**Teorema.** Un sistema causal con $H(z)$ racional es estable si y solo si todos sus polos
están dentro del círculo unidad, $|z| < 1$.

Un filtro **FIR** ($a_k = 0$) no tiene realimentación y es siempre estable; un **IIR** logra la
misma selectividad con muchos menos coeficientes a costa de poder ser inestable.

## Reto

Calcula cuatro enteros.

- **a.** Un tono puro de $37\,300$ Hz se muestrea a $f_s = 8000$ Hz sin filtro previo. ¿A qué
  frecuencia, en Hz, aparece en la señal muestreada?
- **b.** Sean $x[n] = n \bmod 7$ para $0 \le n < 1000$ y $h[n] = (3n + 1) \bmod 5$ para
  $0 \le n < 100$, y sea $y = x * h$. Calcula la energía $\sum_n y[n]^2$. Valor de control:
  $y[500] = 605$.
- **c.** Sea $s[n] = (n^2 \bmod 31) - 15$ para $0 \le n < 256$ y $S[k]$ su DFT de 256 puntos.
  Encuentra el índice $k$, con $1 \le k \le 128$, que maximiza $|S[k]|$.
- **d.** $\lfloor |S[k]| \rfloor$ para ese índice.

Formato de la flag, en decimal: `EXODUS{a-b-c-d}`
