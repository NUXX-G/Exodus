---
id: rob-sensores-actuadores
title: "Sensores y actuadores: encoders, IMU y fusión, distancia y fuerza, motores de continua, sin escobillas y paso a paso, puentes H, reductoras y dimensionado"
area: ingenieria
trunk_level: 15
prerequisites: [rob-microcontroladores, rob-control]
academic_sources:
  - "Siciliano, B.; Khatib, O. (eds.) Springer Handbook of Robotics, 2ª ed. Springer, 2016."
  - "Siegwart, R.; Nourbakhsh, I. R.; Scaramuzza, D. Introduction to Autonomous Mobile Robots, 2ª ed. MIT Press, 2011."
exercises:
  - id: resolucion-del-encoder
    tier: 1
    prompt: |
      Un motor lleva un encoder incremental de 500 líneas leído en cuadratura (×4) y una reductora 50:1. ¿Qué resolución angular hay en el eje de salida, en grados? Respuesta: con **4 decimales**.
    answers: ["sha256:b92edaa5c0d8acc30067d35b5f98d08083d962f62c05026468b3ccad9b49285a"]
  - id: codigo-gray
    tier: 1
    prompt: |
      Un encoder absoluto de 4 bits en código Gray reflejado marca 1101. ¿Qué posición (de 0 a 15) es? Respuesta: un número.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: curva-del-motor
    tier: 1
    prompt: |
      Un motor de continua con $R = 2\ \Omega$ y $K_t = K_e = 0{,}05$ (N·m/A y V·s/rad) se alimenta a 12 V. ¿Cuál es su par de bloqueo (N·m) y su velocidad en vacío (rpm), sin rozamiento? Respuesta: `par;rpm`, el par con **1 decimal** y las rpm con **2 decimales**.
    answers: ["sha256:7aa570c7bb3b0c727d6434ab93310502b410b28ea316d2617918259c83eca4ca"]
  - id: ultrasonidos
    tier: 1
    prompt: |
      Un sensor de ultrasonidos recibe el eco 7,2 ms después de emitir. Con $c = 343$ m/s, ¿a qué distancia está el obstáculo, en m? Respuesta: con **3 decimales**.
    answers: ["sha256:f11427732119aee8610ccca2ab6469f5a77fd03ff64aac29c4a41da608050849"]
  - id: micropasos
    tier: 1
    prompt: |
      Un motor paso a paso de 1,8° por paso se maneja con 16 micropasos por paso. ¿Cuántos micropasos tiene una vuelta, y a cuántas rpm gira con 8000 micropasos/s? Respuesta: `micropasos;rpm`.
    answers: ["sha256:8ceb072e9ffcea9fd4bfc81bf1e588dd37b602c839abeaf450a405e23b015b8c"]
  - id: puente-de-galga
    tier: 1
    prompt: |
      Una galga de factor 2 en un puente de Wheatstone de cuarto (las otras tres resistencias iguales a la de la galga en reposo), alimentado a 5 V, sufre una deformación de 500 µε. ¿Qué tensión exacta da el puente, en mV? Respuesta: con **4 decimales**.
    answers: ["sha256:97c85b43844d9503c9b7e5a6cf206c91fe63dafe99c942f7bf0853de20615842"]
  - id: servo-de-modelismo
    tier: 1
    prompt: |
      Un servo de modelismo va de 0° con pulsos de 1 ms a 180° con 2 ms, a 50 Hz. ¿Qué ángulo da un pulso de 1,35 ms y qué ciclo de trabajo es, en %? Respuesta: `angulo;ciclo`, el ciclo con **2 decimales**.
    answers: ["sha256:c364c54b6a587b407d9ef97a3f8d07d237c2705c1cc55ee2e4064e6e267a4115"]
  - id: reductora-optima
    tier: 2
    prompt: |
      Un motor de inercia $2\cdot10^{-5}$ kg·m² mueve una carga de 0,05 kg·m² a través de una reductora ideal. ¿Qué relación de reducción da la máxima aceleración de la carga con un par motor dado? Respuesta: un número entero.
    answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: motor-con-carga
    tier: 2
    prompt: |
      El motor del ejercicio de la curva (12 V, $R = 2\ \Omega$, $K = 0{,}05$) mueve una carga de 0,1 N·m. En régimen, ¿qué corriente consume (A), a qué velocidad gira (rad/s) y con qué rendimiento (%)? Respuesta: `corriente;velocidad;rendimiento`, con 1, 1 y **2 decimales**.
    answers: ["sha256:5878cd8d341b3ce010bc035a0b59f0b314f72de1c6757a99b4ce5642e9783f3b", "sha256:63e252ae853e6c04e2d6c63a06d29258306d5b26aa3aa203e64fddd0005efee9"]
  - id: par-eficaz
    tier: 2
    prompt: |
      Un ciclo de 3 s pide 2 N·m durante 0,5 s, 0,5 N·m durante 1 s, $-1{,}5$ N·m durante 0,5 s y nada durante 1 s. ¿Cuál es el par eficaz (RMS) que debe soportar el motor térmicamente, en N·m? Respuesta: con **4 decimales**.
    answers: ["sha256:46a8a99b5ea595fdf0e42d6e3f04a2b47eeda4535615c04e40ebfe51a1d3c51f"]
  - id: filtro-complementario
    tier: 2
    prompt: |
      Un filtro complementario $\theta_{k+1} = 0{,}98(\theta_k + \omega\,\Delta t) + 0{,}02\,\theta_{acc}$ con $\Delta t = 10$ ms recibe un giróscopo con sesgo constante de 0,5 °/s, con el sensor quieto y el acelerómetro marcando 0°. ¿Qué error angular queda en régimen, en grados? Respuesta: con **3 decimales**.
    answers: ["sha256:f1ced6d8a7d437fd3748f56bb2358f9ac9c6b8e6e5c716d605d8d22faeeda47c"]
  - id: resolucion-de-velocidad
    tier: 2
    prompt: |
      Un encoder da 2000 cuentas por vuelta. ¿Qué resolución de velocidad (rad/s) tiene el método M (contar cuentas cada 1 ms), y cuál el método T (medir con un reloj de 10 MHz el tiempo de una cuenta) cerca de 100 rad/s, como diferencia entre las velocidades que corresponden a 314 y 315 tics? Respuesta: `M;T` con **4 decimales**.
    answers: ["sha256:faf84266319799dcadd441e3ab5921c0991c9bcf135be6b2fbf18f5b8f730954"]
  - id: rizado-del-puente-h
    tier: 2
    prompt: |
      Un puente H con PWM bipolar ($\pm 24$ V) a 20 kHz y ciclo $D = 0{,}75$ alimenta un motor de 1 mH de inductancia (resistencia despreciable) cuya fuerza contraelectromotriz es la tensión media $(2D - 1)\cdot 24$ V. ¿Cuál es el rizado de corriente pico a pico, en A? Respuesta: con **2 decimales**.
    answers: ["sha256:bffb16d6fe1445f051b3cff3025340011b817b391ffc04dcd77d1452efa10c25"]
  - id: lidar
    tier: 2
    prompt: |
      ¿Qué resolución en distancia (mm) da un LiDAR de pulsos que mide tiempos con 50 ps de resolución, y qué alcance sin ambigüedad (m) tiene uno de desfase con modulación de 10 MHz? Respuesta: `resolucion;alcance` con **2 decimales**.
    answers: ["sha256:f1101eea9b9f0fbb9504f4ef7960060dacbddc428dd956e640727964399845b0"]
  - id: ganancia-de-kalman
    tier: 3
    prompt: |
      Se estima un ángulo que sigue un paseo aleatorio $x_{k+1} = x_k + w_k$, $\text{var}(w) = 0{,}01$, medido como $z_k = x_k + v_k$, $\text{var}(v) = 1$. ¿A qué ganancia de Kalman converge el filtro? Respuesta: con **4 decimales**.
    answers: ["sha256:aa495b53eeb92ac5de1d5cdaa26b93e2f5b19ec4d0c9351cd308bc9307c81be4"]
  - id: dimensionado-del-motor
    tier: 3
    prompt: |
      Un eje directo con 0,02 kg·m² debe girar 90° en 0,3 s con un perfil trapezoidal de tres tercios iguales (acelerar, velocidad constante, frenar). ¿Qué par de pico y qué par eficaz durante el movimiento hacen falta, en N·m? Respuesta: `pico;eficaz` con **4 decimales**.
    answers: ["sha256:0adc693882ccd48e3024048f3e62f34bf37491bcf6e1ec9f3ac160b3737f35eb"]
---

Un robot es un lazo: **sensores** que miden el mundo y el propio cuerpo, un controlador que decide y **actuadores** que mueven. El controlador de [[rob-control]] y el
microcontrolador de [[rob-microcontroladores]] no sirven de nada si el encoder pierde cuentas, el giróscopo deriva o el motor no tiene par para acelerar la carga.
Este nodo recorre los sensores y actuadores de la robótica real con sus modelos, sus errores y las cuentas para elegirlos: resolución, ruido, sesgo, curvas
par-velocidad, inercias reflejadas, par eficaz.

## Objetivos

Al terminar sabrás:

1. Leer encoders incrementales (cuadratura) y absolutos (Gray), y estimar velocidad con los métodos M y T.
2. Modelar giróscopos y acelerómetros (sesgo, ruido, deriva) y fusionarlos con un filtro complementario o de Kalman.
3. Usar sensores de distancia (ultrasonidos, LiDAR, tiempo de vuelo) y de fuerza (galgas en puente, células de carga).
4. Modelar un motor de continua (ecuaciones eléctrica y mecánica, curva par-velocidad, rendimiento) y conocer los motores sin escobillas y paso a paso.
5. Manejar motores con puentes H y PWM, y estimar el rizado de corriente.
6. Elegir la reductora y dimensionar un motor por par de pico, par eficaz y velocidad.

## Qué debes dominar antes

[[rob-microcontroladores]] (temporizadores, captura, PWM, ADC, buses serie) y [[rob-control]] (lazos de realimentación, PID, espacio de estados). La mecánica de rotación
($\tau = J\alpha$, energía cinética) de [[fis-mecanica-clasica]] y los circuitos RL de [[ing-circuitos]].

> [!question] Test de entrada
> 1. Un engranaje 10:1 reduce la velocidad diez veces. ¿Qué hace con el par (ideal)?
> 2. ¿Qué potencia mecánica da un eje que gira a 100 rad/s con 0,5 N·m?
> 3. ¿Qué es el valor eficaz de una señal?
>
> Respuestas: lo multiplica por diez; 50 W; la raíz de la media de su cuadrado (la constante que disiparía la misma potencia).

## 1. Para qué sirve

- **Brazos y cobots**: encoders de alta resolución en cada articulación, sensores de par para colaborar con personas, motores sin escobillas con reductoras armónicas.
- **Robots móviles y drones**: odometría con encoders, IMU para orientación, LiDAR y cámaras para el entorno, ESC y motores sin escobillas.
- **Impresoras 3D y CNC**: motores paso a paso en lazo abierto y finales de carrera.
- **Diagnóstico**: casi todos los fallos de un robot real empiezan en un sensor mal leído o un actuador mal dimensionado.

## 2. Encoders

Un **encoder incremental** óptico o magnético da dos canales A y B desfasados 90° (**cuadratura**). Contando los flancos de ambos se obtienen **4 cuentas por línea**, y el
orden de los flancos indica el sentido: el decodificador es una máquina de 4 estados (00 → 01 → 11 → 10 en un sentido, al revés en el otro). Una tercera señal, el
índice, marca una posición por vuelta. Tras una reductora $N:1$, la resolución en la salida se multiplica por $N$. Los microcontroladores tienen temporizadores con modo
encoder que cuentan por hardware: contar por interrupciones pierde cuentas a alta velocidad.

Un **encoder absoluto** da la posición sin necesidad de referenciar al arrancar. Usa **código Gray**, en el que posiciones vecinas difieren en un solo bit: así, una
lectura en plena transición nunca da un valor lejano. Se convierte a binario con $b_{n-1} = g_{n-1}$, $b_i = b_{i+1} \oplus g_i$.

La velocidad se estima de dos formas. **Método M**: contar cuentas en un periodo fijo $T_s$; resolución $\frac{2\pi}{N_cT_s}$, buena a alta velocidad. **Método T**: medir con un reloj rápido el tiempo
entre cuentas; resolución que empeora con $\omega^2$, buena a baja velocidad. Los controladores combinan ambos (método M/T).

## 3. Sensores inerciales y fusión

Una **IMU** MEMS combina un acelerómetro (aceleración específica: la gravedad más la aceleración del cuerpo), un giróscopo (velocidad angular) y, a veces, un
magnetómetro. Sus errores: **sesgo** (un desplazamiento lento y dependiente de la temperatura), ruido blanco (que integrado da un **paseo aleatorio angular**, ARW, en
°/√h), factor de escala y desalineación. La **varianza de Allan**, calculada sobre largas grabaciones en reposo, separa estos términos.

Integrar el giróscopo da un ángulo preciso a corto plazo que **deriva**; el acelerómetro da la inclinación respecto a la gravedad sin deriva, pero ruidosa y falseada
por las aceleraciones. El **filtro complementario** se queda con lo mejor de cada uno:

$$
\theta_{k+1} = \alpha(\theta_k + \omega_k\Delta t) + (1 - \alpha)\,\theta_{acc,k}, \qquad \tau = \frac{\alpha\Delta t}{1 - \alpha} ,
$$

paso alto del giróscopo y paso bajo del acelerómetro con la misma constante de tiempo $\tau$. Un sesgo $b$ del giróscopo deja un error permanente $b\tau$. El **filtro de Kalman** hace lo
mismo con ganancias óptimas calculadas a partir de las varianzas de los ruidos; en régimen su ganancia es constante y equivale a un filtro complementario
con una $\alpha$ elegida por las varianzas en vez de a ojo.

## 4. Distancia y fuerza

- **Ultrasonidos**: $d = ct/2$ con $c \approx 331{,}3 + 0{,}606\,T$ (°C) m/s; haz ancho, fallos con superficies inclinadas o blandas.
- **LiDAR y tiempo de vuelo** (ToF): por pulsos ($d = ct/2$, 1 mm exige unos 6,7 ps) o por desfase de una señal modulada, que solo es inequívoco hasta $c/(2f_{mod})$. Los LiDAR
  giratorios y de estado sólido dan nubes de puntos; las cámaras de profundidad usan ToF o luz estructurada.
- **Galgas extensométricas**: su resistencia cambia $\Delta R/R = GF\cdot\varepsilon$ ($GF \approx 2$ en metálicas). En un **puente de Wheatstone** de cuarto, la salida es $V\frac{GF\varepsilon/4}{1 + GF\varepsilon/2}$, unos
  pocos mV: hace falta un amplificador de instrumentación y un ADC de alta resolución. Medio puente o puente completo duplican o cuadruplican la señal y
  compensan la temperatura. Las **células de carga** y los sensores de fuerza-par de seis ejes son galgas sobre una estructura elástica.
- **Corriente del motor**: resistencia shunt o sensor de efecto Hall; es una medida indirecta del par ($\tau = K_ti$).

## 5. Motores

**Motor de continua con escobillas.** Eléctrica y mecánicamente,

$$
V = Ri + L\frac{di}{dt} + K_e\omega, \qquad J\frac{d\omega}{dt} = K_ti - b\omega - \tau_L ,
$$

con $K_t = K_e$ en unidades SI. En régimen, la **curva par-velocidad** es una recta: par de bloqueo $K_tV/R$ a velocidad cero, velocidad en vacío $V/K_e$ a par cero, potencia máxima a
media velocidad ($V^2/4R$). Las constantes de tiempo eléctrica $L/R$ y mecánica $RJ/(K_tK_e)$ suelen estar separadas un orden de magnitud o más, lo que permite un lazo de
corriente rápido dentro de uno de velocidad o posición.

**Motores sin escobillas (BLDC/PMSM).** El imán gira y los devanados son fijos: la conmutación es electrónica, a partir de sensores Hall, de un encoder o sin sensor
(fcem). Con conmutación trapezoidal son sencillos; con **control vectorial** (FOC: transformadas de Clarke y Park, corriente en eje $q$ para el par y $d = 0$) dan par suave
y son el estándar de drones, cobots y vehículos.

**Paso a paso.** Avanzan un ángulo fijo (1,8° en los híbridos comunes) por pulso; el **micropaso** divide el paso con corrientes senoidales. Funcionan en lazo abierto si el par
de carga no supera el disponible, que cae con la velocidad; si lo supera, **pierden pasos** sin que nadie lo note. Los **servos de modelismo** integran motor, reductora,
potenciómetro y control, y reciben la posición como un pulso de 1–2 ms cada 20 ms.

**Puente H y PWM.** Cuatro interruptores permiten aplicar $+V$, $-V$ o cortocircuitar el motor (frenado). Con PWM a frecuencia muy por encima de $1/\tau_e$, la inductancia
filtra y la corriente sigue la media, con un **rizado** que, con fcem $E$, vale $\Delta I = (V - E)\,DT/L$ en la fase de conducción. PWM **bipolar** ($\pm V$) frente a **unipolar** ($+V$/0): el
segundo tiene bastante menos rizado a igual frecuencia (la frecuencia efectiva se dobla y el salto de tensión se reduce a la mitad). Hay que dejar tiempos muertos entre interruptores de una rama para no cortocircuitar la alimentación.

> [!example] Ejemplo resuelto 1: curva de un motor de 24 V
> $R = 1\ \Omega$, $K = 0{,}1$. Par de bloqueo $0{,}1\cdot 24/1 = 2{,}4$ N·m con 24 A; velocidad en vacío 240 rad/s (2292 rpm); potencia máxima $24^2/4 = 144$ W a 120 rad/s. Con 0,5 N·m de carga:
> $i = 5$ A, $\omega = (24 - 5)/0{,}1 = 190$ rad/s, potencia útil 95 W de 120 W consumidos, **79,2 %** de rendimiento. El rendimiento máximo está cerca de la velocidad en vacío, y la potencia
> máxima a media velocidad: no coinciden.

## 6. Reductoras y dimensionado

Una reductora $N:1$ multiplica el par y divide la velocidad, y la carga se ve desde el motor con inercia **reflejada** $J_L/N^2$. La aceleración de la carga con par motor $\tau_m$ es
$\frac{N\tau_m}{J_mN^2 + J_L}$, máxima con la **adaptación de inercias** $N = \sqrt{J_L/J_m}$. Tipos: engranajes rectos y planetarios (rendimiento alto, juego), tornillo sin fin (irreversible,
rendimiento bajo), **armónicas** (sin juego, relaciones de 50–160:1, típicas en brazos) y cicloidales.

Dimensionar un motor:

1. Del perfil de movimiento (trapezoidal, en S) sale la aceleración y la velocidad máximas.
2. **Par de pico** $= J_{total}\alpha + $ rozamiento + gravedad: debe estar dentro del par intermitente del motor.
3. **Par eficaz** $\sqrt{\frac{1}{T}\int\tau^2\,dt}$ sobre el ciclo completo: debe estar por debajo del par continuo, porque el calentamiento va con $i^2R$.
4. Velocidad máxima por debajo de la nominal, con margen de tensión para la fcem.

> [!example] Ejemplo resuelto 2: el filtro complementario de una IMU
> Con $\alpha = 0{,}99$ y $\Delta t = 5$ ms, $\tau = 0{,}99\cdot0{,}005/0{,}01 = 0{,}495$ s: el filtro sigue al giróscopo por debajo de medio segundo y al acelerómetro por encima (corte en $1/(2\pi\tau) \approx 0{,}32$ Hz). Un sesgo de
> 2 °/s deja un error de $2\cdot0{,}495 = 0{,}99°$. Bajar $\alpha$ reduce el error por sesgo pero deja pasar más ruido y más aceleraciones del acelerómetro: es un compromiso, y el
> Kalman lo resuelve con las varianzas medidas.

> [!example] Ejemplo resuelto 3: la reductora de un brazo (con menos ayuda)
> Un brazo de 0,5 kg·m² en su eje lo mueve un motor de $10^{-4}$ kg·m². Calcula la reducción que adapta inercias (≈ 70,7; toma 70), el par motor para acelerar el brazo a 10 rad/s²
> ($\frac{J_mN^2 + J_L}{N}\alpha \approx 0{,}141$ N·m, sin gravedad ni rozamiento) y la velocidad del motor cuando el brazo gira a 2 rad/s (140 rad/s, unas 1337 rpm). Comprueba en el programa que 70 da
> casi la misma aceleración que el óptimo y que 30 o 150 dan bastante menos.

## 7. Comprobar con un programa

El decodificador de cuadratura contando en los dos sentidos, el motor del ejemplo 1 integrando sus ecuaciones, el filtro del ejemplo 2 simulado, y la
reductora del ejemplo 3 por barrido.

```python
import math

# 1. Decodificador de cuadratura: tabla (estado anterior, estado nuevo) → +1/−1.
orden = [0b00, 0b01, 0b11, 0b10]
paso = {(orden[i], orden[(i + 1) % 4]): +1 for i in range(4)}
paso.update({(orden[(i + 1) % 4], orden[i]): -1 for i in range(4)})
def cuenta(secuencia):
    c = 0
    for a, b in zip(secuencia, secuencia[1:]):
        c += paso.get((a, b), 0)
    return c
adelante = [orden[k % 4] for k in range(4 * 500 + 1)]
assert cuenta(adelante) == 2000 and cuenta(adelante[::-1]) == -2000

# 2. Ejemplo resuelto 1: motor de 24 V, R = 1 Ω, K = 0,1, con 0,5 N·m de carga.
R, K, L, J, V, tl = 1.0, 0.1, 1e-3, 1e-4, 24.0, 0.5
i = w = 0.0
dt = 1e-6
for _ in range(1_000_000):
    di = (V - R * i - K * w) / L
    dw = (K * i - tl) / J
    i, w = i + di * dt, w + dw * dt
eta = tl * w / (V * i)
print("i =", round(i, 3), "A, ω =", round(w, 2), "rad/s, η =", round(100 * eta, 1), "%")
assert abs(i - 5) < 1e-3 and abs(w - 190) < 1e-2 and abs(eta - 95 / 120) < 1e-4
assert max(range(0, 241), key=lambda x: (V - K * x) / R * K * x) == 120

# 3. Ejemplo resuelto 2: filtro complementario, error por sesgo y constante de tiempo.
a, h, sesgo = 0.99, 0.005, 2.0
th = 0.0
for _ in range(20000):
    th = a * (th + sesgo * h) + (1 - a) * 0.0
tau = a * h / (1 - a)
assert abs(th - sesgo * tau) < 1e-9 and abs(tau - 0.495) < 1e-12
# Escalón real de 10° con giróscopo perfecto (ω = 0 tras el escalón): la estimación sube al 63 % en ≈ τ.
th, n = 0.0, 0
while th < 10 * (1 - math.exp(-1)):
    th = a * th + (1 - a) * 10
    n += 1
assert abs(n * h - tau) < 0.01

# 4. Ejemplo resuelto 3: aceleración de la carga frente a la reducción.
Jm, JL = 1e-4, 0.5
acel = lambda N: N / (Jm * N * N + JL)
mejor = max((n / 10 for n in range(10, 3000)), key=acel)
print("óptimo", mejor, "| 70:", round(acel(70) / acel(mejor), 4), "| 30:", round(acel(30) / acel(mejor), 3), "| 150:", round(acel(150) / acel(mejor), 3))
assert abs(mejor - math.sqrt(JL / Jm)) < 0.1 and acel(70) / acel(mejor) > 0.999
assert acel(30) / acel(mejor) < 0.75 and acel(150) / acel(mejor) < 0.8
par = (Jm * 70**2 + JL) / 70 * 10
assert abs(par - 0.1414) < 1e-4 and round(140 * 60 / (2 * math.pi)) == 1337
```

## 8. Errores típicos

- Contar el encoder por interrupciones en software y perder cuentas a alta velocidad.
- Integrar el giróscopo sin corregir el sesgo y creer que la deriva es un fallo del código.
- Tomar el ángulo del acelerómetro mientras el robot acelera.
- Dimensionar el motor solo por el par de pico y quemarlo por el eficaz, o solo por el eficaz y que no acelere.
- Olvidar la inercia del propio motor y de la reductora al calcular aceleraciones.
- Usar un paso a paso cerca de su límite de par: pierde pasos sin aviso.
- Encender a la vez los dos interruptores de una rama del puente H (sin tiempo muerto).

## 9. Resumen

- Cuadratura ×4, índice, reductora; Gray $b_i = b_{i+1}\oplus g_i$; velocidad por M ($2\pi/N_cT_s$) y por T.
- IMU: sesgo, ARW, Allan; complementario con $\tau = \alpha\Delta t/(1 - \alpha)$ y error $b\tau$; Kalman.
- Ultrasonidos y ToF $d = ct/2$, alcance por desfase $c/2f$; galga en puente $V\frac{GF\varepsilon/4}{1 + GF\varepsilon/2}$.
- Motor CC: $V = Ri + L\,di/dt + K\omega$, $J\dot\omega = Ki - \tau_L$; bloqueo $KV/R$, vacío $V/K$; BLDC y FOC; paso a paso y micropaso; servos.
- Puente H, PWM, rizado $(V - E)DT/L$, tiempos muertos.
- Inercia reflejada $J_L/N^2$, $N = \sqrt{J_L/J_m}$; par de pico, eficaz y velocidad.

## Repaso: lo que debe quedarte dentro de un mes

1. Cuadratura: cuatro cuentas por línea y el sentido en el orden de los flancos.
2. El giróscopo deriva y el acelerómetro miente al acelerar: se fusionan.
3. La curva de un motor de continua es una recta entre bloqueo y vacío.
4. La carga se ve dividida por $N^2$ a través de la reductora.
5. El pico decide si acelera; el eficaz, si se quema.

## Siguiente

`rob-dinamica` (los pares que piden las articulaciones de un brazo), `rob-ros2` (cómo se integran sensores y actuadores en software) y `rob-percepcion-slam`
(el entorno a partir de LiDAR y cámaras).
