---
id: ing-electronica-potencia
title: "Electrónica de potencia: convertidores conmutados CC-CC, rectificadores, inversores, pérdidas, magnéticos, térmica y control"
area: ingenieria
trunk_level: 15
prerequisites: [ing-electronica-analogica, rob-control]
academic_sources:
  - "Erickson, R. W.; Maksimović, D. Fundamentals of Power Electronics, 3ª ed. Springer, 2020."
  - "Mohan, N.; Undeland, T. M.; Robbins, W. P. Power Electronics: Converters, Applications, and Design, 3ª ed. Wiley, 2003."
exercises:
  - id: convertidor-reductor
    tier: 1
    prompt: |
      Un convertidor reductor ideal en conducción continua tiene $V_{in} = 12$ V y ciclo de trabajo $D = 0{,}4$. ¿Qué tensión de salida da? Respuesta: en V.
    answers: ["sha256:9c7f38a9ac4f5de592be486948ac944aff688f914e3b74e6917c7fe4715a561e"]
  - id: convertidor-elevador
    tier: 1
    prompt: |
      Un elevador ideal con $V_{in} = 5$ V trabaja con $D = 0{,}6$. ¿Qué tensión de salida da? Respuesta: en V.
    answers: ["sha256:b902cc4550838229a710bfec4c38cbc7eb11082367a409df9135e7f007a96bda"]
  - id: reductor-elevador
    tier: 1
    prompt: |
      Un reductor-elevador inversor ideal con $V_{in} = 12$ V y $D = 0{,}6$, ¿qué tensión de salida da (con signo)? Respuesta: en V.
    answers: ["sha256:a30584d2420bfa43f4ae498d288fffab0f7ec60bdc05274198575aa0e2cd0e68"]
  - id: rectificador-de-onda-completa
    tier: 1
    prompt: |
      ¿Cuál es la tensión media de un rectificador de onda completa ideal alimentado con 325 V de pico (sin filtro)? Respuesta: en V con **1 decimal**.
    answers: ["sha256:ef00acc2735f117268bb29cafb64e00f6fb1b3f1e50197dd9772714a98856bd0"]
  - id: disipador
    tier: 1
    prompt: |
      Un transistor disipa 10 W con $\theta_{jc} = 0{,}5$, $\theta_{cs} = 0{,}2$ y $\theta_{sa} = 2{,}0$ K/W a 25 °C de ambiente. ¿A qué temperatura está la unión, en °C? Respuesta: un número.
    answers: ["sha256:41cfc0d1f2d127b04555b7246d84019b4d27710a3f3aff6e7764375b1e06e05d"]
  - id: rizado-de-corriente
    tier: 2
    prompt: |
      En el reductor de `convertidor-reductor` (salida 4,8 V) con $L = 22\ \mu$H y $f_s = 200$ kHz, ¿cuánto vale el rizado pico a pico de la corriente de bobina, en A? Respuesta: con **4 decimales**.
    answers: ["sha256:a380395d8b55465529f565ebdafceb5d3c5ccd10aeec638aacd361397f36dd16"]
  - id: rizado-de-tension
    tier: 2
    prompt: |
      Con un condensador de salida de 47 $\mu$F (sin ESR), ¿qué rizado pico a pico tiene la tensión de salida de ese reductor, en mV? Respuesta: con **2 decimales**.
    answers: ["sha256:8719c8b9d63c644df3a5b778698dbdaa3c3f1b746f3cbb41b28a5f79a8989229"]
  - id: frontera-de-conduccion
    tier: 2
    prompt: |
      ¿Por debajo de qué corriente de carga entra en conducción discontinua ese reductor, en A? Respuesta: con **4 decimales**.
    answers: ["sha256:6c64309950919b695024dc8ed4b3dfaf898cbd24cf28e0cc49263f5a2331c3eb"]
  - id: perdidas-del-interruptor
    tier: 2
    prompt: |
      El interruptor de un reductor de 12 V conduce 5 A con $D = 0{,}4$, $R_{ds,on} = 20$ m$\Omega$, $t_r = t_f = 20$ ns y $f_s = 200$ kHz. Con $P_{cond} = I^2R_{ds}D$ y $P_{sw} = \frac12VI(t_r + t_f)f_s$, ¿cuánto valen en W? Respuesta: `conduccion;conmutacion`.
    answers: ["sha256:ce8195ad28dfb7203c3ac816aca673bb8730165a8bdfaa60c7aeb0769e674f0b", "sha256:042d3c02983934f68f72bba6fb49f1c7e893b7567eeff68ecb10d0d8701190e9"]
  - id: condensador-de-filtro
    tier: 2
    prompt: |
      Un rectificador de onda completa a 50 Hz alimenta 1 A sobre un condensador de 4700 $\mu$F. ¿Qué rizado pico a pico aproximado tiene, en V ($\Delta V \approx I/(2fC)$)? Respuesta: con **3 decimales**.
    answers: ["sha256:9e85f2232afe0cc8352b5cb32038b9f522bb2297e3fea0a47c251bd041faa880"]
  - id: puente-trifasico
    tier: 2
    prompt: |
      ¿Cuál es la tensión media de un puente rectificador trifásico de diodos (6 pulsos) con 325 V de pico de fase? Respuesta: en V con **1 decimal**.
    answers: ["sha256:50b4f15d3a95285886f63e3985ded878c916f1b3e76a64802c4310cf7ef1ee0b"]
  - id: rectificador-controlado
    tier: 2
    prompt: |
      Un rectificador de onda completa con tiristores y conducción continua se dispara con $\alpha = 60°$ desde 325 V de pico. ¿Qué tensión media da? Respuesta: en V con **2 decimales**.
    answers: ["sha256:93e8ddd258faa7e5d813ac898dff53f32cb445029a654eb1f8f51f171a1b76ad"]
  - id: flyback
    tier: 2
    prompt: |
      Un flyback en conducción continua con $V_{in} = 24$ V, relación de espiras $N_s/N_p = 0{,}5$ y $D = 0{,}4$, ¿qué tensión de salida da? Respuesta: en V.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: bobina-con-entrehierro
    tier: 2
    prompt: |
      Una bobina de 20 espiras sobre un núcleo de alta permeabilidad con sección de 1 cm² y entrehierro de 1 mm (que domina la reluctancia), ¿qué inductancia tiene, en $\mu$H? Respuesta: con **2 decimales**.
    answers: ["sha256:009a47aedd474f1d0147adcad60b3df61ee21794783cc5fce823b6b4a19f6cb3"]
  - id: inversor-spwm
    tier: 3
    prompt: |
      Un inversor trifásico con modulación sinusoidal (SPWM) e índice $m = 0{,}8$ trabaja con $V_{dc} = 400$ V. ¿Cuál es la tensión eficaz de línea de la componente fundamental? Respuesta: en V con **2 decimales**.
    answers: ["sha256:573315a5d526e3d369a1fa69649c89d51512b0b4fef88da2867accb28e620760"]
  - id: resonancia-del-filtro
    tier: 3
    prompt: |
      ¿A qué frecuencia resuena el filtro de salida del reductor ($L = 22\ \mu$H, $C = 47\ \mu$F), que limita el ancho de banda del lazo de control? Respuesta: en Hz con **1 decimal**.
    answers: ["sha256:7ee71815960f32e637d0ec0d1a1d10b13d09f8591fa3b111ce70b355fa697707"]
---

# Electrónica de potencia: convertidores conmutados CC-CC, rectificadores, inversores, pérdidas, magnéticos, térmica y control

Casi toda la energía eléctrica pasa por un convertidor antes de usarse: el cargador del móvil, la fuente del ordenador, el inversor de un coche
eléctrico o de una placa solar, el variador de un motor de un robot. La idea central es **conmutar**: en lugar de disipar el sobrante en una resistencia
(como un regulador lineal), un transistor abre y cierra cientos de miles de veces por segundo y unas bobinas y condensadores promedian el resultado. Así se
alcanzan rendimientos del 90–99 %. Este nodo deduce los convertidores básicos con dos principios (balance de voltios-segundo y de carga), calcula rizados y
pérdidas, y da las bases de magnéticos, térmica y control, apoyándose en [[ing-electronica-analogica]] y [[rob-control]].

## Objetivos

Al terminar sabrás:

1. Deducir la relación de conversión de los convertidores reductor, elevador, reductor-elevador y flyback con el balance de voltios-segundo.
2. Calcular rizados de corriente y tensión, y la frontera entre conducción continua y discontinua.
3. Estimar pérdidas de conducción y de conmutación, y el rendimiento.
4. Analizar rectificadores monofásicos y trifásicos (con diodos y controlados) y su filtrado.
5. Entender los inversores con modulación PWM sinusoidal y su tensión fundamental.
6. Dimensionar una bobina con entrehierro, un disipador y la planta LC que ve el lazo de control.

## Qué debes dominar antes

[[ing-electronica-analogica]] (diodos, MOSFET, condensadores reales) y [[rob-control]] (funciones de transferencia, realimentación, márgenes). Las
series de Fourier de [[ing-senales-sistemas]] aparecen en rectificadores e inversores.

> [!question] Test de entrada
> 1. ¿Cuál es la relación entre tensión y corriente en una bobina?
> 2. ¿Cuánto vale la media de $|\operatorname{sen} t|$?
> 3. Un regulador lineal baja de 12 a 5 V con 2 A. ¿Qué rendimiento tiene?
>
> Respuestas: $v = L\,di/dt$; $2/\pi$; $5/12 \approx 42\,\%$: el resto se disipa en calor.

## 1. Para qué sirve

- **Robótica y vehículos**: drivers de motores (puentes H, inversores trifásicos), cargadores y gestión de baterías.
- **Fuentes de alimentación**: de la red a tensiones bajas (AC-DC) y entre tensiones continuas (DC-DC) en cada placa.
- **Energías renovables**: inversores solares con seguimiento del punto de máxima potencia, convertidores eólicos.
- **Industria**: variadores de frecuencia, soldadura, calentamiento por inducción.

## 2. Convertidores CC-CC: voltios-segundo y carga

En régimen permanente, la corriente de una bobina vuelve cada periodo a su valor inicial, así que la **media de su tensión es cero** (balance de voltios-segundo);
igualmente, la **media de la corriente de un condensador es cero** (balance de carga). Con eso, y suponiendo conducción continua y rizado pequeño:

| Convertidor | Durante $DT$ (interruptor cerrado) | Durante $(1-D)T$ | Relación |
| --- | --- | --- | --- |
| Reductor (buck) | $v_L = V_{in} - V_o$ | $v_L = -V_o$ | $V_o = DV_{in}$ |
| Elevador (boost) | $v_L = V_{in}$ | $v_L = V_{in} - V_o$ | $V_o = \frac{V_{in}}{1 - D}$ |
| Reductor-elevador | $v_L = V_{in}$ | $v_L = V_o$ ($< 0$) | $V_o = -\frac{D}{1 - D}V_{in}$ |
| Flyback (relación $n = N_s/N_p$) | magnetiza con $V_{in}$ | desmagnetiza con $V_o/n$ | $V_o = nV_{in}\frac{D}{1 - D}$ |

Por ejemplo, con 12 V y $D = 0{,}4$ el reductor da 4,8 V; con 5 V y $D = 0{,}6$ el elevador da 12,5 V. El flyback añade aislamiento galvánico con un transformador que
almacena energía (es la topología de casi todos los cargadores pequeños).

**Rizados**: la corriente de bobina sube y baja en rampas; en el reductor, $\Delta i_L = \frac{(V_{in} - V_o)D}{Lf_s}$. El condensador absorbe esa componente triangular y su tensión ondula
$\Delta v = \frac{\Delta i_L}{8f_sC}$ (sin ESR; en la práctica la ESR suele dominar). Si la carga baja tanto que la corriente media es menor que $\Delta i_L/2$, la corriente de
bobina llega a cero dentro del ciclo: **conducción discontinua**, donde la relación de conversión pasa a depender de la carga.

> [!example] Ejemplo resuelto 1: un reductor de 12 a 4,8 V
> Con $L = 22\ \mu$H y $f_s = 200$ kHz: $\Delta i_L = \frac{7{,}2\cdot0{,}4}{22\cdot10^{-6}\cdot2\cdot10^5} \approx 0{,}65$ A pico a pico. Con 47 $\mu$F, $\Delta v = \frac{0{,}65}{8\cdot2\cdot10^5\cdot47\cdot10^{-6}} \approx 8{,}7$ mV. Por debajo de $0{,}33$ A de carga entra en
> discontinua. Duplicar $f_s$ divide por dos ambos rizados (y permite bobinas más pequeñas), a cambio de duplicar las pérdidas de conmutación.

## 3. Pérdidas y rendimiento

- **Conducción**: $P = I_{rms}^2R_{ds,on}$; en el interruptor de un reductor, $I_{rms}^2 \approx I_o^2D$. Los diodos pierden $V_FI$; por eso a baja tensión se sustituyen por MOSFET
  (rectificación síncrona).
- **Conmutación**: durante cada transición, tensión y corriente coexisten. Con carga inductiva enclavada, $E \approx \frac12VIt$ por transición y $P_{sw} = \frac12VI(t_r + t_f)f_s$. Crece con $f_s$:
  es el compromiso central entre tamaño (alta $f_s$) y rendimiento.
- Otras: carga de puerta ($Q_gV_gf_s$), capacidades parásitas ($\frac12CV^2f_s$), recuperación inversa de diodos, pérdidas del núcleo y del cobre de las bobinas.

Los semiconductores de banda ancha (**SiC**, **GaN**) conmutan más rápido y a más tensión con menos pérdidas: permiten cargadores mucho más pequeños.

## 4. Rectificadores

- **Monofásico de onda completa**: con diodos, media $\frac{2V_m}{\pi}$ (206,9 V con 325 V de pico, la red de 230 V). Con un condensador de filtro, la tensión se mantiene cerca de $V_m$ y
  cae entre picos $\Delta V \approx \frac{I}{2fC}$; el precio es una corriente de red a picos (mal factor de potencia), que se corrige con una etapa PFC (un elevador controlado).
- **Trifásico de 6 pulsos**: la salida es la mayor tensión de línea en cada instante, con media $\frac{3\sqrt3V_m}{\pi}$ (537,5 V con 325 V de pico de fase) y rizado pequeño de 300 Hz.
- **Controlado** (tiristores): retrasando el disparo un ángulo $\alpha$, la media es $\frac{2V_m}{\pi}\cos\alpha$; con $\alpha > 90°$ la media es negativa y el puente devuelve energía a la red
  (frenado regenerativo).

## 5. Inversores

Un **puente H** (o trifásico de 6 interruptores) produce una tensión alterna conmutando el bus de continua. Con **PWM sinusoidal** (comparar una sinusoide de
referencia con una portadora triangular), la componente fundamental de la tensión de fase es proporcional al índice de modulación $m$: en un inversor trifásico,
la tensión de línea fundamental tiene valor eficaz $\frac{\sqrt3}{2\sqrt2}mV_{dc}$ (196 V con $m = 0{,}8$ y 400 V). Los armónicos quedan alrededor de la frecuencia de conmutación y la
inductancia del motor los filtra. La modulación vectorial (SVM) aprovecha un 15 % más el bus. El **tiempo muerto** entre los dos interruptores de una rama evita
cortocircuitos y añade distorsión que hay que compensar.

## 6. Magnéticos, térmica y control

**Bobinas**: con un núcleo de alta permeabilidad y un entrehierro $g$ que domina la reluctancia, $L = \frac{\mu_0N^2A}{g}$ (20 espiras, 1 cm², 1 mm: 50 $\mu$H). El entrehierro almacena la
energía y evita la saturación: el núcleo debe soportar $B = \frac{LI_{pico}}{NA}$ por debajo de su $B_{sat}$ (≈ 0,3 T en ferritas).

**Térmica**: $T_j = T_a + P(\theta_{jc} + \theta_{cs} + \theta_{sa})$: con 10 W y $0{,}5 + 0{,}2 + 2{,}0$ K/W, 52 °C. El disipador se elige por el $\theta_{sa}$ que deja $T_j$ por debajo del máximo con margen.

**Control**: la etapa de potencia vista desde el ciclo de trabajo es una planta con un filtro $LC$ que resuena en $\frac{1}{2\pi\sqrt{LC}}$ (unos 4,9 kHz con 22 $\mu$H y 47 $\mu$F): dos
polos y $-180°$ de fase. Un lazo de tensión con compensador de tipo II o III (o un lazo interno de corriente, **control en modo corriente**) da estabilidad con buen margen
de fase; el ancho de banda suele limitarse a una fracción de $f_s$. Es [[rob-control]] aplicado.

> [!example] Ejemplo resuelto 2: pérdidas del interruptor
> Reductor de 12 V con 5 A, $D = 0{,}4$, $R_{ds,on} = 20$ m$\Omega$, transiciones de 20 ns y 200 kHz. Conducción: $25\cdot0{,}4\cdot0{,}02 = 0{,}2$ W. Conmutación: $\frac12\cdot12\cdot5\cdot40\cdot10^{-9}\cdot2\cdot10^5 = 0{,}24$ W. Con
> 24 W de salida, el interruptor se lleva un 1,8 %. A 1 MHz, la conmutación subiría a 1,2 W: por eso los convertidores muy rápidos usan GaN o conmutación suave.

> [!example] Ejemplo resuelto 3: un flyback (con menos ayuda)
> Con $V_{in} = 24$ V, $N_s/N_p = 0{,}5$ y $D = 0{,}4$, escribe el balance de voltios-segundo en la inductancia magnetizante: $24\cdot0{,}4 = \frac{V_o}{0{,}5}\cdot0{,}6$. Despeja $V_o$ (8 V) y calcula la
> tensión que soporta el interruptor cuando está abierto ($V_{in} + V_o/n$ = 40 V, sin contar el pico de la inductancia de dispersión).

## 7. Comprobar con un programa

Un reductor simulado conmutando (media, rizado y frontera de discontinua), rectificadores por integración y la fundamental de un inversor SPWM por Fourier.

```python
import math

# 1. Ejemplo resuelto 1: reductor 12 V, D = 0,4, L = 22 μH, C = 47 μF, f_s = 200 kHz, carga de 2 Ω.
def reductor(R, ciclos=3000, pasos=400, Vin=12.0, D=0.4, L=22e-6, C=47e-6, fs=2e5):
    iL = vC = 0.0
    h = 1 / fs / pasos
    vs, imin, imax = [], 1e9, -1e9
    for k in range(ciclos):
        for j in range(pasos):
            vsw = Vin if j < D * pasos else 0.0
            iL = max(iL + (vsw - vC) / L * h, 0.0)
            vC += (iL - vC / R) / C * h
            if k >= ciclos - 50:
                vs.append(vC)
                imin, imax = min(imin, iL), max(imax, iL)
    return sum(vs) / len(vs), max(vs) - min(vs), imin, imax - imin

Vo, dv, imin, di = reductor(2.0)
assert abs(Vo - 4.8) < 0.03 and abs(di - 0.6545) < 0.01 and abs(dv * 1000 - 8.70) < 0.3
Icrit = 0.6545 / 2
assert reductor(4.8 / Icrit * 0.9)[2] > 0 and reductor(4.8 / Icrit * 1.1)[2] == 0   # frontera de discontinua

# 2. Rectificadores: medias de onda completa, trifásico y controlado (α = 60°).
N = 100000
media = lambda f, a, b: sum(f(a + (i + 0.5) * (b - a) / N) for i in range(N)) / N
Vm = 325.0
assert abs(media(lambda t: abs(Vm * math.sin(t)), 0, 2 * math.pi) - 2 * Vm / math.pi) < 1e-6
linea = lambda t: max(Vm * math.sin(t - k * 2 * math.pi / 3) for k in range(3)) - min(Vm * math.sin(t - k * 2 * math.pi / 3) for k in range(3))
assert abs(media(linea, 0, 2 * math.pi) - 3 * math.sqrt(3) * Vm / math.pi) < 1e-6
assert abs(media(lambda t: Vm * math.sin(t), math.pi / 3, math.pi / 3 + math.pi) - 2 * Vm / math.pi * 0.5) < 1e-6

# 3. Inversor trifásico SPWM (m = 0,8, V_dc = 400 V): fundamental de la tensión de línea por Fourier.
f1, fc, M = 50, 50 * 201, 400000
a = b = 0.0
for i in range(M):
    t = (i + 0.5) / (M * f1)
    tri = 2 / math.pi * math.asin(math.sin(2 * math.pi * fc * t))
    va = 200 if 0.8 * math.sin(2 * math.pi * f1 * t) > tri else -200
    vb = 200 if 0.8 * math.sin(2 * math.pi * f1 * t - 2 * math.pi / 3) > tri else -200
    a += (va - vb) * math.cos(2 * math.pi * f1 * t)
    b += (va - vb) * math.sin(2 * math.pi * f1 * t)
fundamental = 2 / M * math.hypot(a, b) / math.sqrt(2)
print("reductor:", round(Vo, 3), "V, rizado", round(di, 4), "A /", round(dv * 1000, 2), "mV | SPWM: fundamental de línea", round(fundamental, 1), "V eficaces")
assert abs(fundamental - math.sqrt(3) / (2 * math.sqrt(2)) * 0.8 * 400) < 1.5
```

## 8. Errores típicos

- Aplicar $V_o = DV_{in}$ en conducción discontinua.
- Ignorar la ESR del condensador al calcular el rizado de salida (a menudo domina).
- Calcular solo pérdidas de conducción y olvidar las de conmutación a frecuencias altas.
- Dimensionar una bobina por inductancia sin comprobar la saturación con la corriente de pico.
- Olvidar el tiempo muerto en un puente (cortocircuito del bus) o la inductancia de dispersión en un flyback (picos que destruyen el interruptor).
- Cerrar un lazo de control sin tener en cuenta la resonancia $LC$ de la planta.

## 9. Resumen

- Voltios-segundo y carga: buck $D$, boost $1/(1-D)$, buck-boost $-D/(1-D)$, flyback $nD/(1-D)$.
- Rizados $\Delta i = (V_{in} - V_o)D/(Lf_s)$, $\Delta v = \Delta i/(8f_sC)$; discontinua si $I < \Delta i/2$.
- Pérdidas: $I_{rms}^2R$, $\frac12VI(t_r + t_f)f_s$, puerta, capacidades; SiC y GaN.
- Rectificadores: $2V_m/\pi$, $3\sqrt3V_m/\pi$, $\frac{2V_m}{\pi}\cos\alpha$, filtro $I/(2fC)$, PFC.
- Inversores: SPWM, fundamental $\frac{\sqrt3}{2\sqrt2}mV_{dc}$, SVM, tiempo muerto.
- Magnéticos $L = \mu_0N^2A/g$, saturación; térmica en serie; planta $LC$ y modo corriente.

## Repaso: lo que debe quedarte dentro de un mes

1. Conmutar y filtrar es mucho más eficiente que disipar.
2. Media de la tensión de una bobina = 0: de ahí salen todos los convertidores.
3. Más frecuencia, componentes más pequeños pero más pérdidas de conmutación.
4. Un rectificador con condensador tira de la red a picos.
5. La planta de un convertidor es un filtro LC: el control debe respetar su resonancia.

## Siguiente

`rob-sensores-actuadores` (motores y sus drivers), `ing-pcb-diseno` aplicado a potencia (bucles de conmutación mínimos) y `ing-rf-microondas`. El control
está en [[rob-control]].
