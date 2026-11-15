---
id: ing-electronica-analogica
title: "Electrónica analógica: diodos, transistores en polarización y pequeña señal, amplificadores operacionales reales, filtros activos, osciladores, ruido y estabilidad"
area: ingenieria
trunk_level: 14
prerequisites: [ing-circuitos, ing-senales-sistemas]
academic_sources:
  - "Sedra, A. S.; Smith, K. C. Microelectronic Circuits, 7ª ed. Oxford University Press, 2014."
  - "Horowitz, P.; Hill, W. The Art of Electronics, 3ª ed. Cambridge University Press, 2015."
exercises:
  - id: punto-de-trabajo-del-diodo
    tier: 1
    prompt: |
      Un diodo ($I_s = 10^{-14}$ A, $n = 1$, $V_T = 25{,}852$ mV) en serie con 1 k$\Omega$ se conecta a 3 V. ¿Qué corriente circula, en mA? Respuesta: con **4 decimales**.
    answers: ["sha256:77f56999b868511c4cf30ea3a6a45932d481a4a72fb3c5791f515dd311593224"]
  - id: regulador-zener
    tier: 1
    prompt: |
      Un zéner de 5,1 V se alimenta desde 12 V a través de 470 $\Omega$ y alimenta una carga de 1 k$\Omega$. ¿Qué corriente circula por el zéner, en mA? Respuesta: con **2 decimales**.
    answers: ["sha256:b0e29c7e07b49a50867f0ba0617ccee3190b23a3f055f7f078a3c3f1804c7178"]
  - id: amplificadores-ideales
    tier: 1
    prompt: |
      Con $R_f = 100$ k$\Omega$ y $R_{in} = 10$ k$\Omega$, ¿qué ganancia tiene el amplificador inversor y cuál el no inversor (operacional ideal)? Respuesta: `inversor;no_inversor`.
    answers: ["sha256:4bedaf5934c89f958a620d8794341d0c6abffd32fb43b7052de06c4d17414b3c"]
  - id: filtro-rc
    tier: 1
    prompt: |
      ¿Cuál es la frecuencia de corte de un filtro RC paso bajo con $R = 10$ k$\Omega$ y $C = 10$ nF, en Hz? Respuesta: con **2 decimales**.
    answers: ["sha256:647b5ffe7942b6273e7ae238ba47fcc33ed5439a5b27ff2da60917a45b01a730"]
  - id: amplificador-de-instrumentacion
    tier: 1
    prompt: |
      Un amplificador de instrumentación de tres operacionales tiene $R = 25$ k$\Omega$ en cada rama y $R_g = 500\ \Omega$ (diferencial de salida unitario). ¿Cuál es su ganancia? Respuesta: un número.
    answers: ["sha256:16dc368a89b428b2485484313ba67a3912ca03f2b2b42429174a4f8b3dc84e44"]
  - id: mosfet-en-saturacion
    tier: 1
    prompt: |
      Un NMOS con $k_n = \mu_nC_{ox}W/L = 2$ mA/V² y $V_t = 1$ V está en saturación con $V_{GS} = 2{,}5$ V. ¿Cuánto valen $I_D$ (mA) y $g_m$ (mS)? Respuesta: `ID;gm`.
    answers: ["sha256:9dbc4861bdf3182584a4678c93e4e28c717d1397dbacb9f21e2b30af3b2e6e24"]
  - id: polarizacion-del-bjt
    tier: 2
    prompt: |
      Un BJT ($\beta = 120$, $V_{BE} = 0{,}7$ V) se polariza con un divisor de 56 k$\Omega$ y 12 k$\Omega$ desde 15 V, $R_E = 1{,}5$ k$\Omega$ y $R_C = 5{,}6$ k$\Omega$. ¿Cuánto vale $I_C$, en mA? Respuesta: con **4 decimales**.
    answers: ["sha256:e287b613a06425c93cc522de299c350ad5640138f0482052ee5595646dc4ed12"]
  - id: ganancia-del-emisor-comun
    tier: 2
    prompt: |
      Con ese punto de trabajo, $R_E$ desacoplado y una carga de 10 k$\Omega$, ¿cuál es la ganancia de tensión en pequeña señal (con $r_o$ infinita, $V_T = 25{,}852$ mV)? Respuesta: con **1 decimal**.
    answers: ["sha256:39b9830cfec0e0d53701aec74036d657529510255ada8d5ea62386790956ccf7"]
  - id: ganancia-finita
    tier: 2
    prompt: |
      Un no inversor de ganancia ideal 21 usa un operacional con ganancia en lazo abierto $A_0 = 10^5$. ¿Cuál es su ganancia real? Respuesta: con **4 decimales**.
    answers: ["sha256:91323625d208eb43867c955ad8ba67f0e06b41998c8559ca1275b3b36e423816"]
  - id: producto-ganancia-ancho-de-banda
    tier: 2
    prompt: |
      Un operacional con GBW = 1 MHz se usa como no inversor de ganancia 11. ¿Qué ancho de banda tiene, en kHz? Respuesta: con **2 decimales**.
    answers: ["sha256:1bc3e9833876421695b638ef32d406064c3e6ae41eaa570dd49063b5bb5d93fc"]
  - id: puente-de-wien
    tier: 2
    prompt: |
      Un oscilador de puente de Wien usa $R = 10$ k$\Omega$ y $C = 16$ nF. ¿A qué frecuencia oscila (Hz) y qué ganancia debe tener el amplificador? Respuesta: `frecuencia;ganancia`, la frecuencia con **1 decimal**.
    answers: ["sha256:99e94f9cf7ae580f6afff436a000861bf09d6e0d29a30006368bef3657d07097"]
  - id: ruido-termico
    tier: 2
    prompt: |
      ¿Cuál es la tensión eficaz de ruido térmico de una resistencia de 10 k$\Omega$ a 300 K en un ancho de banda de 10 kHz, en $\mu$V? Respuesta: con **3 decimales**.
    answers: ["sha256:535efae71d5ad9aff31c1e1a15a6e4a6702f81947d387e169ce4269ffc003e24"]
  - id: schmitt-trigger
    tier: 2
    prompt: |
      Un disparador de Schmitt no inversor con salidas de $\pm12$ V tiene $R_1 = 10$ k$\Omega$ (entrada) y $R_2 = 100$ k$\Omega$ (realimentación). ¿A qué tensión de entrada (positiva) conmuta hacia arriba? Respuesta: en V.
    answers: ["sha256:77ac319bfe1979e2d799d9e6987e65feb54f61511c03552ebae990826c208590"]
  - id: slew-rate
    tier: 2
    prompt: |
      Un operacional con slew rate de $0{,}5$ V/$\mu$s debe dar una senoide de 10 V de pico. ¿Hasta qué frecuencia puede hacerlo sin distorsión, en Hz? Respuesta: con **2 decimales**.
    answers: ["sha256:d9494091d9a018587d3b743c23171c88cb1a8f54750a0ae62619fe535f25cad2"]
  - id: sallen-key
    tier: 3
    prompt: |
      Un Sallen-Key paso bajo de ganancia unidad tiene $R_1 = R_2 = 10$ k$\Omega$, $C_1 = 22$ nF (realimentación) y $C_2 = 10$ nF (a masa). ¿Cuánto valen $f_0$ (Hz) y $Q$? Respuesta: `f0;Q`, $f_0$ redondeada a Hz entero y $Q$ con **4 decimales**.
    answers: ["sha256:4420c0a3ca3d82d02e463b0acd031db1e440b0b4ef40f3329dd11e4968180c2e"]
  - id: margen-de-fase
    tier: 3
    prompt: |
      Un operacional tiene $A(s) = \frac{10^5}{(1 + s/\omega_1)(1 + s/\omega_2)}$ con polos en 10 Hz y 2 MHz. Conectado como seguidor ($\beta = 1$), ¿qué margen de fase tiene, en grados? Respuesta: con **2 decimales**.
    answers: ["sha256:b008ee52a1632b637c39000ae73f8fa8c6fa85d4903c4355d0a54994aa34fb24"]
---

# Electrónica analógica: diodos, transistores en polarización y pequeña señal, amplificadores operacionales reales, filtros activos, osciladores, ruido y estabilidad

Todo sensor entrega una señal analógica, débil y ruidosa, y todo actuador necesita una analógica potente: entre medias hay amplificadores, filtros,
referencias y convertidores. [[ing-circuitos]] presentó los dispositivos; este nodo enseña a **diseñar** con ellos: fijar un punto de trabajo estable,
calcular ganancias en pequeña señal, saber cuándo un operacional deja de ser ideal (ganancia finita, ancho de banda, slew rate), diseñar filtros activos y
osciladores, estimar el ruido y comprobar la estabilidad con el margen de fase. Es la base de la instrumentación de [[rob-microcontroladores]], de la
electrónica de potencia y de la radiofrecuencia.

## Objetivos

Al terminar sabrás:

1. Resolver circuitos con diodos (modelo exponencial con Newton) y reguladores zéner.
2. Polarizar transistores bipolares y MOSFET y calcular su modelo de pequeña señal ($g_m$, $r_\pi$, $r_o$) y la ganancia de las etapas básicas.
3. Analizar amplificadores operacionales con ganancia finita, producto ganancia-ancho de banda, slew rate y offset.
4. Diseñar filtros activos (RC, Sallen-Key) y osciladores (puente de Wien), y comparadores con histéresis.
5. Calcular ruido térmico y estimar la resolución de una cadena de medida.
6. Comprobar la estabilidad de un amplificador realimentado con el margen de fase.

## Qué debes dominar antes

[[ing-circuitos]] (Kirchhoff, Thévenin, transitorios, fasores, diodos, transistores y operacionales ideales) y [[ing-senales-sistemas]] (función de
transferencia, Bode, polos y ceros).

> [!question] Test de entrada
> 1. ¿Cuál es el equivalente de Thévenin de un divisor de 47 k$\Omega$ y 10 k$\Omega$ alimentado a 12 V, visto desde el punto medio?
> 2. ¿Cuánta ganancia tiene un no inversor ideal con $R_f = 100$ k y $R_g = 10$ k?
> 3. ¿Cuántos dB cae un polo simple una década por encima de su frecuencia?
>
> Respuestas: 2,105 V con 8,25 k$\Omega$; 11; 20 dB.

## 1. Para qué sirve

- **Instrumentación**: acondicionar termopares, galgas, fotodiodos y micrófonos antes del convertidor analógico-digital.
- **Audio y comunicaciones**: preamplificadores de bajo ruido, filtros antialiasing, osciladores, mezcladores.
- **Alimentación**: referencias de tensión, reguladores lineales, lazos de control de convertidores conmutados.
- **Robótica y control**: drivers de motores, lectura de encoders analógicos, lazos de corriente.

## 2. Diodos

El diodo sigue $I = I_s\left(e^{V/nV_T} - 1\right)$ con $V_T = kT/q \approx 25{,}85$ mV a 300 K. Con una resistencia, la ecuación $I_s(e^{V/V_T} - 1) = (V_s - V)/R$ no tiene solución cerrada:
se resuelve por **Newton** (lo que hace cualquier simulador SPICE) o se aproxima con $V_D \approx 0{,}6$–$0{,}7$ V. Cada década de corriente sube la tensión $V_T\ln 10 \approx 60$ mV, y $V_D$
baja unos 2 mV/°C (sensor de temperatura). **Zéner**: en inversa mantiene $V_Z$ casi constante; un regulador simple es $R$ en serie más zéner en paralelo con la carga,
y $I_Z = \frac{V_{in} - V_Z}{R} - I_L$ debe quedar por encima de un mínimo para todas las cargas.

## 3. Transistores: polarización y pequeña señal

**Polarización**: fijar un punto de trabajo estable frente a la dispersión de $\beta$ y la temperatura. El divisor con resistencia de emisor lo consigue: con el
Thévenin del divisor, $I_B = \frac{V_{Th} - V_{BE}}{R_{Th} + (\beta + 1)R_E}$, y si $(\beta + 1)R_E \gg R_{Th}$, $I_C \approx \frac{V_{Th} - V_{BE}}{R_E}$, casi independiente de $\beta$ (realimentación negativa local).

**Pequeña señal**: alrededor del punto de trabajo el transistor es lineal con transconductancia $g_m = I_C/V_T$ (40 mS por mA, independiente del transistor), $r_\pi = \beta/g_m$ y
resistencia de salida $r_o = V_A/I_C$ (efecto Early). Etapas básicas:

| Etapa | Ganancia de tensión | Resistencia de entrada | Uso |
| --- | --- | --- | --- |
| Emisor común ($R_E$ desacoplada) | $-g_m(R_C\|R_L\|r_o)$ | $r_\pi$ | Ganancia |
| Emisor común con $R_E$ | $\approx -\frac{R_C\|R_L}{R_E}$ | $\approx \beta R_E$ | Ganancia estable y lineal |
| Colector común (seguidor) | $\approx 1$ | alta | Adaptar impedancias |
| Base común | $+g_m R_C$ | $1/g_m$ | Alta frecuencia, cascodo |

El **MOSFET** en saturación sigue $I_D = \frac{k_n}{2}(V_{GS} - V_t)^2$ con $g_m = k_n(V_{GS} - V_t) = \frac{2I_D}{V_{GS} - V_t}$: a igual corriente da menos $g_m$ que el bipolar, pero no consume corriente de
puerta. Los **espejos de corriente** y los **pares diferenciales** son los bloques de todo circuito integrado analógico.

> [!example] Ejemplo resuelto 1: una etapa en emisor común
> Divisor de 47 k y 10 k desde 12 V, $R_E = 1$ k (desacoplada en alterna), $R_C = 4{,}7$ k, $\beta = 100$. Thévenin: $V_{Th} = 2{,}105$ V, $R_{Th} = 8{,}25$ k. $I_B = \frac{1{,}405}{8{,}25 + 101}$ μA $\approx 12{,}9$ μA y
> $I_C \approx 1{,}286$ mA ($V_{CE} \approx 4{,}66$ V: activa). Pequeña señal: $g_m = 1{,}286/25{,}85 \approx 49{,}8$ mS; con carga de 10 k, $A_v = -g_m(4{,}7\|10) \approx -159$. Si $\beta$ fuera 200, $I_C$ solo subiría a 1,34 mA:
> la polarización es robusta.

## 4. El amplificador operacional real

| Limitación | Efecto | Fórmula |
| --- | --- | --- |
| Ganancia finita $A_0$ | Error de ganancia | $G = \frac{A_0}{1 + \beta A_0} \approx \frac1\beta\left(1 - \frac{1}{\beta A_0}\right)$ |
| Producto ganancia-ancho de banda | Menos banda cuanto más ganancia | $f_{-3\,\text{dB}} = \frac{\text{GBW}}{1/\beta}$ |
| Slew rate (SR) | Distorsión en señales grandes rápidas | $f_{\max} = \frac{\text{SR}}{2\pi V_p}$ |
| Offset y corrientes de polarización | Error en continua amplificado | $V_{\text{out}} = V_{os}/\beta$ |
| Salida y alimentación | Recorte, carril a carril | — |

Con $\beta = 1/11$ y $A_0 = 10^5$, la ganancia es 10,9988: un error del 0,01 %. Con GBW = 1 MHz, esa etapa tiene 90,9 kHz de banda: para más ganancia y más banda, se
reparte la ganancia en varias etapas. El **amplificador de instrumentación** (tres operacionales) da ganancia $1 + 2R/R_g$ ajustable con una sola resistencia y
alto rechazo al modo común: es el estándar para puentes de galgas y sensores diferenciales.

## 5. Filtros activos, osciladores y comparadores

**Filtros**: un RC da un polo en $f_c = \frac{1}{2\pi RC}$ (−20 dB/década). Para dos polos con $Q$ controlado sin inductores, el **Sallen-Key** de ganancia unidad tiene

$$
f_0 = \frac{1}{2\pi\sqrt{R_1R_2C_1C_2}}, \qquad Q = \frac{\sqrt{R_1R_2C_1C_2}}{C_2(R_1 + R_2)},
$$

y Butterworth ($Q = 1/\sqrt2$, respuesta máximamente plana) se consigue con $C_1 = 2C_2$ si $R_1 = R_2$. Bessel (fase lineal) y Chebyshev (corte más abrupto con rizado)
cambian los $Q$ de cada sección. Los filtros antialiasing antes de un ADC son casi siempre de este tipo.

**Osciladores**: según el **criterio de Barkhausen**, un lazo oscila a la frecuencia donde la ganancia de lazo vale exactamente 1 con fase 0. El **puente de Wien**
(red RC serie-paralelo) tiene fase nula en $f = \frac{1}{2\pi RC}$ con atenuación $\frac13$: el amplificador debe dar ganancia 3, y en la práctica se estabiliza con una
no linealidad suave (lámpara, JFET, diodos) para que la amplitud no crezca ni se apague.

**Comparadores con histéresis** (**Schmitt**): la realimentación positiva crea dos umbrales y evita conmutaciones múltiples con señales ruidosas; con salida
$\pm V_{\text{sat}}$ y resistencias $R_1$ (entrada) y $R_2$ (realimentación), los umbrales son $\pm V_{\text{sat}}R_1/R_2$.

## 6. Ruido

Toda resistencia genera **ruido térmico** (Johnson-Nyquist) con densidad $4kTR$ V²/Hz: en un ancho de banda $B$, $v_n = \sqrt{4kTRB}$ (1,29 μV para 10 k$\Omega$ en 10 kHz). Los
transistores añaden ruido de disparo $\sqrt{2qIB}$ y ruido $1/f$ a baja frecuencia. Las fuentes independientes se suman en **potencia** (raíz de la suma de
cuadrados), así que domina la mayor: en una cadena, la **primera etapa** fija el ruido (fórmula de Friis), y por eso los preamplificadores de bajo ruido
van lo más cerca posible del sensor. Reducir el ancho de banda al estrictamente necesario es la forma más barata de bajar el ruido.

## 7. Realimentación y estabilidad

La realimentación negativa cambia ganancia por precisión, linealidad y ancho de banda, pero si el desfase del lazo llega a $-180°$ con ganancia de lazo mayor que 1,
el circuito **oscila**. El **margen de fase** (180° más la fase de $A\beta$ donde $|A\beta| = 1$) mide cuánto falta: por debajo de unos 45° aparecen sobreoscilación y
picos en la respuesta. Por eso los operacionales se **compensan** con un polo dominante a baja frecuencia (10 Hz, con GBW de 1 MHz): con un segundo polo en
1 MHz y $\beta = 1$, el margen es de unos 52°. Las cargas capacitivas añaden polos y son la causa más típica de oscilaciones en seguidores.

> [!example] Ejemplo resuelto 2: el margen de fase de un seguidor
> $A(s) = \frac{10^5}{(1 + s/\omega_1)(1 + s/\omega_2)}$ con polos en 10 Hz y 1 MHz. La ganancia de lazo cruza 1 hacia $f_c \approx 786$ kHz (sin el segundo polo sería 1 MHz). La fase allí es
> $-\arctan(f_c/10) - \arctan(f_c/10^6) \approx -90° - 38{,}2°$, así que el margen es $\approx 51{,}8°$: estable, con algo de sobreoscilación. Si el segundo polo bajara a 300 kHz, el margen caería a
> unos 30°: habría que compensar más (bajar el GBW).

> [!example] Ejemplo resuelto 3: un filtro Sallen-Key (con menos ayuda)
> Con $R_1 = R_2 = 10$ k, $C_1 = 22$ nF y $C_2 = 10$ nF, calcula $f_0$ y $Q$ con las fórmulas. Después escribe $H(s) = \frac{1}{1 + sC_2(R_1 + R_2) + s^2R_1R_2C_1C_2}$, evalúa $|H|$ en $f_0$ y
> comprueba que vale exactamente $Q$ ($\approx 0{,}742$, un poco por encima de Butterworth).

## 8. Comprobar con un programa

Newton para el diodo, la polarización resuelta como sistema lineal, un operacional con ganancia finita y polo dominante, el Sallen-Key en frecuencia y el
margen de fase.

```python
import cmath
import math

VT = 0.025852

# 1. Diodo con 1 kΩ a 5 V: Newton frente a la aproximación de 0,7 V.
Is = 1e-14
f = lambda v: Is * math.expm1(v / VT) - (5 - v) / 1000
df = lambda v: Is / VT * math.exp(v / VT) + 1 / 1000
v = 0.6
for _ in range(50):
    v -= f(v) / df(v)
I = (5 - v) / 1000
assert abs(I * 1000 - 4.3075) < 1e-4 and abs(I - 4.3e-3) < 2e-5

# 2. Ejemplo resuelto 1: polarización con el Thévenin del divisor y robustez frente a β.
def ic(beta, R1=47e3, R2=10e3, RE=1e3, VCC=12.0, VBE=0.7):
    Vth, Rth = VCC * R2 / (R1 + R2), R1 * R2 / (R1 + R2)
    return beta * (Vth - VBE) / (Rth + (beta + 1) * RE)
assert abs(ic(100) * 1000 - 1.2863) < 1e-4 and ic(200) / ic(100) < 1.05
gm = ic(100) / VT
assert abs(-gm * (4.7e3 * 10e3 / 14.7e3) + 159.1) < 0.1

# 3. Operacional real: no inversor de ganancia 11 con A(s) = A0/(1 + s/ωp), A0 = 1e5, GBW = 1 MHz.
A0, fp, beta = 1e5, 10.0, 1 / 11
G = lambda fr: abs((A := A0 / (1 + 1j * fr / fp)) / (1 + beta * A))
lo, hi = 1e3, 1e6
for _ in range(100):
    m = math.sqrt(lo * hi)
    lo, hi = (m, hi) if G(m) > G(0) / math.sqrt(2) else (lo, m)
assert abs(G(0) - 10.9988) < 1e-4 and abs(lo - 1e6 / 11) / lo < 1e-3

# 4. Ejemplo resuelto 3 y 2: Sallen-Key (|H(f0)| = Q) y margen de fase del seguidor.
R, C1, C2 = 10e3, 22e-9, 10e-9
f0 = 1 / (2 * math.pi * math.sqrt(R * R * C1 * C2))
Q = math.sqrt(R * R * C1 * C2) / (C2 * 2 * R)
H = lambda fr: 1 / (1 + (s := 2j * math.pi * fr) * C2 * 2 * R + s * s * R * R * C1 * C2)
assert abs(abs(H(f0)) - Q) < 1e-12
A = lambda fr: 1e5 / ((1 + 1j * fr / 10) * (1 + 1j * fr / 1e6))
lo, hi = 1e3, 1e8
for _ in range(200):
    m = math.sqrt(lo * hi)
    lo, hi = (m, hi) if abs(A(m)) > 1 else (lo, m)
margen = 180 + math.degrees(cmath.phase(A(lo)))
print("Sallen-Key: f0 =", round(f0, 1), "Hz, Q =", round(Q, 4), "| cruce", round(lo / 1e3, 1), "kHz, margen de fase", round(margen, 2), "°")
assert abs(margen - 51.83) < 0.01
```

## 9. Errores típicos

- Polarizar sin $R_E$ (o con $R_{Th}$ demasiado grande): el punto de trabajo depende de $\beta$ y de la temperatura.
- Usar la ganancia de pequeña señal con señales tan grandes que el transistor sale de la zona lineal.
- Diseñar con el operacional ideal y descubrir que la ganancia pedida no cabe en su GBW, o que el slew rate recorta la señal.
- Olvidar las corrientes de polarización con resistencias de fuente grandes (errores de continua).
- Poner un condensador grande en la salida de un operacional sin comprobar la estabilidad.
- Sumar tensiones de ruido directamente en lugar de sumar sus cuadrados.

## 10. Resumen

- Diodo exponencial ($V_T \approx 25{,}85$ mV, 60 mV/década, −2 mV/°C); Newton; zéner $I_Z = (V_{in} - V_Z)/R - I_L$.
- Polarización con divisor y $R_E$; $g_m = I_C/V_T$, $r_\pi = \beta/g_m$, $r_o = V_A/I_C$; etapas EC, CC, BC; MOSFET $g_m = 2I_D/V_{ov}$.
- Operacional real: $A_0/(1 + \beta A_0)$, GBW, SR $f_{\max} = \text{SR}/(2\pi V_p)$, offset; amplificador de instrumentación $1 + 2R/R_g$.
- Filtros RC y Sallen-Key ($f_0$, $Q$); Barkhausen y Wien (ganancia 3); Schmitt $\pm V_{\text{sat}}R_1/R_2$.
- Ruido $\sqrt{4kTRB}$, suma cuadrática, Friis.
- Margen de fase; polo dominante; cargas capacitivas.

## Repaso: lo que debe quedarte dentro de un mes

1. Primero el punto de trabajo, luego la pequeña señal.
2. $g_m = I_C/V_T$: la ganancia la fija la corriente.
3. Un operacional real tiene un presupuesto de ganancia × ancho de banda.
4. El ruido se suma en potencia y lo decide la primera etapa.
5. Toda realimentación puede oscilar: mira el margen de fase.

## Siguiente

`ing-electronica-potencia` (conmutación y conversión de energía), `ing-pcb-diseno` (llevarlo a una placa), `ing-rf-microondas` y `ing-microelectronica-vlsi`.
La base física de los dispositivos está en [[fis-materia-condensada-1]].
