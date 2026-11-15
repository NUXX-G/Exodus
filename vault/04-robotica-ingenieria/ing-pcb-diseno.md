---
id: ing-pcb-diseno
title: "Diseño de PCB: del esquema a la placa, pistas y corriente, impedancia controlada, alimentación y desacoplo, masas, EMC, térmica y fabricación"
area: ingenieria
trunk_level: 15
prerequisites: [ing-electronica-analogica, fis-electromagnetismo]
academic_sources:
  - "Ott, H. W. Electromagnetic Compatibility Engineering. Wiley, 2009."
  - "Montrose, M. I. Printed Circuit Board Design Techniques for EMC Compliance: A Handbook for Designers, 2ª ed. Wiley-IEEE Press, 2000."
exercises:
  - id: resistencia-de-pista
    tier: 1
    prompt: |
      ¿Qué resistencia tiene una pista de cobre ($\rho = 1{,}72\cdot10^{-8}\ \Omega$·m) de 35 $\mu$m de espesor, 0,25 mm de ancho y 80 mm de largo, en m$\Omega$? Respuesta: con **1 decimal**.
    answers: ["sha256:c5876ea27b7c84f5db148e4b2fe0bb6de5f622943ac5bf9c8c46f9b7335454d2"]
  - id: impedancia-objetivo
    tier: 1
    prompt: |
      Un núcleo alimentado a 1,0 V admite un rizado del 5 % y tiene escalones de corriente de 2 A. ¿Qué impedancia objetivo debe tener la red de alimentación, en m$\Omega$? Respuesta: con **1 decimal**.
    answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
  - id: retardo-de-propagacion
    tier: 1
    prompt: |
      ¿Cuánto tarda una señal en recorrer 1 mm de una pista con constante dieléctrica efectiva 3,3, en ps? Respuesta: con **2 decimales**.
    answers: ["sha256:ef1e8f39f2997c6e27c2e33e47013dcacba5238412491512c70b4b2eccbd523e"]
  - id: reflexion
    tier: 1
    prompt: |
      Una línea de 50 $\Omega$ termina en una carga de 75 $\Omega$. ¿Cuánto valen el coeficiente de reflexión y la razón de onda estacionaria? Respuesta: `gamma;roe`.
    answers: ["sha256:45157556b4b231274cea9196ba4059cd5135bf8dc7a69bd6334a2ae6761b67c4"]
  - id: temperatura-de-union
    tier: 1
    prompt: |
      Un regulador lineal baja de 12 V a 5 V con 0,25 A. Con $\theta_{JA} = 50$ K/W y ambiente a 25 °C, ¿a qué temperatura está su unión, en °C? Respuesta: con **1 decimal**.
    answers: ["sha256:8098ef89dd2b330d8982223e19d2e7f17996f2cbfe87a45023127e739e807fb4"]
  - id: ancho-ipc-2221
    tier: 2
    prompt: |
      Con la correlación de IPC-2221 para capas externas, $I = 0{,}048\,\Delta T^{0{,}44}A^{0{,}725}$ ($A$ en mil²), ¿qué anchura de pista de 1 oz (1,378 mil de espesor) lleva 3 A con 20 °C de calentamiento, en mm? Respuesta: con **3 decimales**.
    answers: ["sha256:654b3ef65ce44fe1b946c1aae3ca6693683da2752e0c44457898a29a0849b1bb"]
  - id: impedancia-microstrip
    tier: 2
    prompt: |
      Con la fórmula de IPC-2141, $Z_0 = \frac{87}{\sqrt{\varepsilon_r + 1{,}41}}\ln\frac{5{,}98h}{0{,}8w + t}$, ¿qué impedancia tiene una microstrip con $h = 0{,}2$ mm, $w = 0{,}3$ mm, $t = 0{,}035$ mm y $\varepsilon_r = 4{,}3$, en $\Omega$? Respuesta: con **1 decimal**.
    answers: ["sha256:499d5c825c4a88b1bec3c80c51ace9a7ea6fbd8f833a292289187f3cf5482b86"]
  - id: resonancia-de-desacoplo
    tier: 2
    prompt: |
      ¿A qué frecuencia resuena un condensador de desacoplo de 100 nF con 1 nH de inductancia parásita, en MHz? Respuesta: con **2 decimales**.
    answers: ["sha256:d54c14fd43ae9b8d7001c4a2d97df417624d88f4bfd03526e0ff53dc9195ecca"]
  - id: via-termica
    tier: 2
    prompt: |
      ¿Qué resistencia térmica tiene una vía de 1,6 mm de longitud, taladro de 0,3 mm y metalizado de 25 $\mu$m de cobre ($k = 385$ W/m·K), contando solo la corona de cobre, en K/W? Respuesta: con **1 decimal**.
    answers: ["sha256:a45a1003cebcab9a01534eb5d940f8bb10580d1e72ad165ac0292dd245c1ebaf"]
  - id: resistencia-en-caliente
    tier: 2
    prompt: |
      La pista de `resistencia-de-pista` (medida a 20 °C) trabaja a 85 °C. Con $\alpha = 0{,}00393$ K⁻¹, ¿qué resistencia tiene, en m$\Omega$? Respuesta: con **1 decimal**.
    answers: ["sha256:f442351e576ded761b71cd552d4d78c33baba63d92a0765d158cd9f669dfa1fd"]
  - id: profundidad-pelicular
    tier: 2
    prompt: |
      ¿Cuál es la profundidad pelicular del cobre a 100 MHz, en $\mu$m? Respuesta: con **3 decimales**.
    answers: ["sha256:b41f1a146f1c284df9c6977fd941f09a441ed7bfdfb41bc9b95ff2fa96b96d3a"]
  - id: rebote-de-masa
    tier: 2
    prompt: |
      Seis salidas comparten una patilla de masa con 2,5 nH de inductancia y conmutan a la vez 30 mA cada una en 1 ns. ¿Cuánto rebota la masa interna, en V? Respuesta: un número.
    answers: ["sha256:bffb16d6fe1445f051b3cff3025340011b817b391ffc04dcd77d1452efa10c25"]
  - id: vias-en-paralelo
    tier: 2
    prompt: |
      ¿Cuántas vías como las de `via-termica` hay que poner en paralelo, como mínimo, para que la resistencia térmica baje de 20 K/W? Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: emision-de-un-bucle
    tier: 3
    prompt: |
      Según Ott, un bucle pequeño radia en modo diferencial $E = 263\cdot10^{-16}\,\frac{f^2AI}{r}$ (V/m, SI, sobre plano de masa). Para un bucle de 1 cm² con 10 mA a 100 MHz medido a 3 m, ¿cuánto vale $E$ en dB$\mu$V/m? Respuesta: con **2 decimales**.
    answers: ["sha256:0e4581689844b4c55e55e85a7f080a2bce1a8ef108828199bf4e44c0f59dff54"]
  - id: ancho-para-75-ohmios
    tier: 3
    prompt: |
      Con la fórmula de `impedancia-microstrip` y los mismos $h$, $t$ y $\varepsilon_r$, ¿qué anchura da exactamente 75 $\Omega$, en mm? Respuesta: con **3 decimales**.
    answers: ["sha256:24488d212116e21b76145add1f6c7f82598bb848f7a774ad6530b60bd63912a9"]
  - id: antirresonancia
    tier: 3
    prompt: |
      En paralelo hay un condensador de 100 nF con 1 nH de ESL y otro de 10 nF con 0,5 nH. ¿A qué frecuencia aparece el pico de antirresonancia de la impedancia, en MHz (desprecia las ESR)? Respuesta: con **2 decimales**.
    answers: ["sha256:cc56559823a0dc5d0f079cf00179dc32a8d0bbf40dec177b025e4abee92adf22"]
---

# Diseño de PCB: del esquema a la placa, pistas y corriente, impedancia controlada, alimentación y desacoplo, masas, EMC, térmica y fabricación

Un esquema correcto no garantiza una placa que funcione. En la placa de circuito impreso (PCB), cada pista es una resistencia, una inductancia y, a alta
frecuencia, una línea de transmisión; cada bucle de corriente es una antena; cada vía, un camino térmico. La mayoría de los fallos de un prototipo
—resets aleatorios, ruido en el ADC, emisiones que suspenden la certificación, componentes que se calientan— nacen en el trazado, no en el esquema. Este nodo
da las reglas cuantitativas detrás de las "buenas prácticas": cuánta corriente lleva una pista, cómo se controla la impedancia, cómo se desacopla la
alimentación, por qué importan los planos de masa y cómo se estima la temperatura, con [[ing-electronica-analogica]] y [[fis-electromagnetismo]] como base.

## Objetivos

Al terminar sabrás:

1. Calcular resistencia, calentamiento y anchura de pistas (IPC-2221) y su variación con la temperatura.
2. Diseñar pistas de impedancia controlada (microstrip) y entender reflexiones y retardos.
3. Diseñar la red de alimentación: impedancia objetivo, condensadores de desacoplo, resonancias y antirresonancias.
4. Organizar masas y caminos de retorno, y estimar el rebote de masa.
5. Estimar emisiones de bucles y aplicar las reglas de compatibilidad electromagnética.
6. Calcular temperaturas de unión y vías térmicas, y preparar la placa para fabricar (capas, reglas, archivos).

## Qué debes dominar antes

[[ing-electronica-analogica]] (componentes reales, desacoplo, ruido) y [[fis-electromagnetismo]] (inductancia, líneas de transmisión, ondas, efecto pelicular).
Las líneas de transmisión de [[ing-circuitos]] reaparecen aquí.

> [!question] Test de entrada
> 1. ¿Qué resistencia tiene un hilo de longitud $L$, sección $A$ y resistividad $\rho$?
> 2. ¿A qué frecuencia resuena un circuito $LC$ serie?
> 3. ¿Qué impedancia ve una línea de 50 $\Omega$ terminada en 50 $\Omega$?
>
> Respuestas: $\rho L/A$; $1/(2\pi\sqrt{LC})$; 50 $\Omega$, sin reflexiones.

## 1. Para qué sirve

- **Producto**: casi todo dispositivo electrónico es una PCB; su trazado decide coste, fiabilidad y certificación (marcado CE, FCC).
- **Señales rápidas**: USB, PCIe, DDR, Ethernet exigen impedancia controlada y longitudes igualadas (`ing-integridad-senal`).
- **Electrónica de potencia y robótica**: pistas de varios amperios, disipación, separación de alta tensión, ruido de los motores
  (`ing-electronica-potencia`, [[rob-microcontroladores]]).
- **Medida de precisión**: masas y retornos bien hechos separan microvoltios de ruido digital.

## 2. Pistas: resistencia y corriente

El cobre de una PCB se especifica en onzas por pie cuadrado: 1 oz ≈ 35 $\mu$m. La resistencia de una pista es $R = \frac{\rho L}{wt}$, o, más cómodo, **resistencia por cuadro** $\rho/t$
(0,49 m$\Omega$ con 1 oz) por el número de cuadros $L/w$: 50 mm de pista de 0,3 mm son 167 cuadros, unos 82 m$\Omega$. Con $\alpha = 0{,}00393$ K⁻¹, a 85 °C es un 26 % más.

**Corriente admisible**: la pista se calienta hasta que disipa lo que genera. La norma IPC-2221 da la correlación empírica $I = k\,\Delta T^{0{,}44}A^{0{,}725}$ (A en mil², $k = 0{,}048$ en capas
externas y $0{,}024$ en internas, que disipan peor): para 2 A con 10 °C de calentamiento en 1 oz hacen falta unos 0,78 mm. La norma más reciente IPC-2152 tiene en
cuenta planos cercanos y suele permitir más corriente. Las caídas de tensión (no solo el calentamiento) limitan las pistas de alimentación largas.

## 3. Impedancia controlada y líneas de transmisión

Cuando el tiempo de subida de una señal es comparable al retardo de la pista ($\sqrt{\varepsilon_{\text{eff}}}/c$, unos 6 ps/mm en FR-4), la pista es una **línea de transmisión**: si su
impedancia no coincide con la de la carga, parte de la señal se refleja, $\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$ (de 50 a 75 $\Omega$, $\Gamma = 0{,}2$ y ROE 1,5). Regla práctica: si la pista mide más de
una sexta parte de la "longitud" del flanco ($t_r$ dividido por el retardo por unidad de longitud), hay que tratarla como línea y terminarla.

La impedancia de una **microstrip** (pista sobre un plano) depende de la anchura $w$, el espesor $t$, la altura $h$ al plano y la permitividad $\varepsilon_r$. Una aproximación
clásica (IPC-2141) es

$$
Z_0 \approx \frac{87}{\sqrt{\varepsilon_r + 1{,}41}}\ln\frac{5{,}98h}{0{,}8w + t},
$$

válida para $0{,}1 < w/h < 2$; los fabricantes usan resolvedores de campo para cifras finales. Para 50 $\Omega$ sobre 0,2 mm de FR-4 ($\varepsilon_r = 4{,}3$), $w \approx 0{,}34$ mm. Los pares
diferenciales (USB, LVDS) se diseñan por impedancia diferencial (90–100 $\Omega$) y se rutan juntos y con igual longitud.

## 4. Alimentación y desacoplo

Un circuito digital pide picos de corriente en cada flanco. La red de alimentación (PDN) debe mantener la tensión dentro del rizado permitido: su impedancia
vista desde el chip debe quedar por debajo de la **impedancia objetivo** $Z_t = \frac{V\cdot\text{rizado}}{\Delta I}$ (1,0 V, 5 %, 2 A: 25 m$\Omega$) en toda la banda de frecuencias de la
corriente. Ningún componente lo consigue solo:

- El regulador cubre las bajas frecuencias (hasta decenas de kHz).
- Los condensadores grandes (electrolíticos, cerámicos de μF), las medias.
- Los cerámicos pequeños junto a cada patilla, las altas: un condensador real es $C$ en serie con su **ESL** (1 nH típico con su montaje) y su ESR, y por encima de
  su resonancia $\frac{1}{2\pi\sqrt{LC}}$ (16 MHz para 100 nF y 1 nH) se comporta como una **inductancia**. Por eso cuenta más la inductancia del montaje (vías cortas, condensador
  pegado a la patilla) que el valor.
- Los planos de alimentación y masa enfrentados forman un condensador distribuido para los cientos de MHz.

Al combinar condensadores distintos aparecen **antirresonancias**: entre la resonancia de uno y la del otro, uno ya es inductivo y el otro aún capacitivo, y el
paralelo de una $L$ y una $C$ da un pico de impedancia. Se doman con varios valores repartidos, ESR no demasiado baja o planos con buena capacidad.

> [!example] Ejemplo resuelto 1: una antirresonancia
> 100 nF con 1 nH (resuena a 15,9 MHz) en paralelo con 10 nF con 0,5 nH (71,2 MHz). En medio, la rama de 100 nF es inductiva y la de 10 nF capacitiva; el pico está donde
> sus reactancias se anulan: $\omega^2 = \frac{1/C_1 + 1/C_2}{L_1 + L_2}$, es decir 43,1 MHz. Si un reloj o su armónico cae ahí, el ruido de alimentación se dispara: o se mueve el pico
> (otro valor, más capacidad de planos) o se amortigua (ESR).

## 5. Masas y caminos de retorno

Toda corriente vuelve a su fuente. A baja frecuencia vuelve por el camino de menor **resistencia**; por encima de unos kHz, por el de menor **inductancia**: justo
**debajo** de la pista, en el plano de referencia. Un plano de masa continuo mantiene el bucle mínimo; una ranura bajo una pista obliga al retorno a rodearla,
crea un bucle grande (inductancia, emisiones, diafonía) y es uno de los errores más comunes.

- Plano de masa único y continuo, en la capa adyacente a las señales rápidas; separar zonas (analógica, digital, potencia) por **ubicación**, no partiendo el plano.
- Cada cambio de capa de una señal rápida necesita una vía de masa cerca para su retorno.
- **Rebote de masa**: la inductancia de las patillas y vías hace que muchas salidas conmutando a la vez muevan la "masa" interna del chip: $V = L\frac{di}{dt}$ (2 nH, 8 salidas de
  20 mA en 1 ns: 0,32 V, suficiente para falsear una entrada). Remedio: varias patillas de masa, desacoplo cercano y flancos no más rápidos de lo necesario.

## 6. Compatibilidad electromagnética

Un bucle de corriente de área $A$ radia en **modo diferencial** como $E \approx 263\cdot10^{-16}\frac{f^2AI}{r}$ V/m (Ott, a $r$ metros, con reflexión en el suelo): crece con el **cuadrado de la
frecuencia** y con el área. Un bucle de 1 cm² con 10 mA a 100 MHz ya da ~39 dB$\mu$V/m a 3 m, cerca de los límites de la clase B (40 dB$\mu$V/m en esa banda). El **modo común**
(corrientes por cables que actúan de antena) suele ser peor y se ataca con buen retorno, filtros y ferritas en las entradas de cables. Reglas: bucles mínimos,
flancos lentos donde se pueda, relojes cortos y en capas internas, apantallamiento con planos, filtrado en los conectores. A frecuencias altas la corriente se
concentra en una capa de espesor la **profundidad pelicular** ($6{,}6\ \mu$m en cobre a 100 MHz), lo que aumenta la resistencia y hace eficaces los blindajes delgados.

## 7. Térmica

Un componente que disipa $P$ llega a $T_j = T_a + P\,\theta_{JA}$ (un regulador lineal de 5 a 3,3 V con 0,5 A disipa 0,85 W; con $\theta_{JA} = 50$ K/W, 67,5 °C). $\theta_{JA}$ depende mucho de la placa:
el cobre es el disipador. Las **vías térmicas** bajo una almohadilla conducen el calor a otras capas: una vía de 0,3 mm con 25 $\mu$m de metalizado en 1,6 mm de placa tiene
unos 190 K/W, así que se ponen matrices de 10 o más en paralelo. Planos de cobre amplios, separación de componentes calientes y flujo de aire completan el diseño.

> [!example] Ejemplo resuelto 2: una pista de alimentación
> Una pista externa de 1 oz debe llevar 2 A con no más de 10 °C de calentamiento. Con IPC-2221, $A = \left(\frac{2}{0{,}048\cdot10^{0{,}44}}\right)^{1/0{,}725} \approx 42$ mil², y con 1,378 mil de espesor, $w \approx 31$ mil
> $\approx 0{,}78$ mm. Si mide 50 mm, su resistencia es ~31 m$\Omega$: 63 mV de caída y 126 mW disipados. Para un motor de 10 A, mejor un polígono de cobre o 2 oz.

## 8. Fabricación

- **Apilado de capas**: 2 capas para lo sencillo; 4 (señal, masa, alimentación, señal) en cuanto hay señales rápidas; 6 o más para buses de memoria.
- **Reglas de diseño** del fabricante: anchura y separación mínimas (típicamente 0,1–0,15 mm), anillo de vías, máscara de soldadura, distancia al borde,
  separaciones de seguridad para tensiones altas.
- **DFM/DFA**: huellas según IPC-7351, marcas fiduciales, puntos de prueba, orientación coherente de componentes polarizados.
- **Salidas**: Gerber o ODB++, taladros (Excellon), lista de materiales y archivo de posiciones (pick-and-place). Revisar los Gerber con un visor antes de pedir.

> [!example] Ejemplo resuelto 3: una microstrip de 50 Ω (con menos ayuda)
> Con $h = 0{,}2$ mm, $t = 0{,}035$ mm y $\varepsilon_r = 4{,}3$, despeja $w$ de la fórmula de IPC-2141 para $Z_0 = 50\ \Omega$ (sale $\approx 0{,}335$ mm) y comprueba que con $w = 0{,}35$ mm la impedancia
> baja a $\approx 48{,}6\ \Omega$: más ancho, más capacidad, menos impedancia. ¿Cuánto cambia $Z_0$ si el fabricante entrega el dieléctrico con $\varepsilon_r = 4{,}6$?

## 9. Comprobar con un programa

La resistencia y la anchura IPC de una pista, la anchura de 50 $\Omega$ por bisección, la impedancia de una red de desacoplo barrida en frecuencia y una vía
térmica.

```python
import math

rho, alpha = 1.72e-8, 0.00393
mil = 25.4e-6

# 1. Pista de 0,3 mm × 50 mm en 1 oz: resistencia a 20 °C y 85 °C.
R = rho * 0.05 / (0.3e-3 * 35e-6)
assert abs(R * 1000 - 81.9) < 0.05 and abs(R * (1 + alpha * 65) * 1000 - 102.8) < 0.05

# 2. Ejemplo resuelto 2: anchura IPC-2221 para 2 A y 10 °C en capa externa de 1 oz.
A = (2 / (0.048 * 10**0.44)) ** (1 / 0.725)       # mil²
w = A / 1.378 * mil * 1000                       # mm
assert abs(w - 0.781) < 1e-3

# 3. Ejemplo resuelto 3: anchura para 50 Ω por bisección sobre la fórmula de IPC-2141.
Z0 = lambda w, h=0.2, t=0.035, er=4.3: 87 / math.sqrt(er + 1.41) * math.log(5.98 * h / (0.8 * w + t))
lo, hi = 0.05, 1.0
for _ in range(100):
    m = (lo + hi) / 2
    lo, hi = (m, hi) if Z0(m) > 50 else (lo, m)
assert abs(lo - 0.335) < 1e-3 and abs(Z0(0.35) - 48.6) < 0.05

# 4. Ejemplo resuelto 1: impedancia de 100 nF/1 nH ∥ 10 nF/0,5 nH; el máximo está en la antirresonancia.
def Zc(f, C, L, R=0.005):
    return complex(R, 2 * math.pi * f * L - 1 / (2 * math.pi * f * C))
freqs = [10 ** (6 + 3 * k / 3000) for k in range(3001)]          # 1 MHz … 1 GHz
Zp = [abs(1 / (1 / Zc(f, 1e-7, 1e-9) + 1 / Zc(f, 1e-8, 0.5e-9))) for f in freqs]
f_pico = freqs[max(range(len(Zp)), key=Zp.__getitem__)]
analitica = math.sqrt((1 / 1e-7 + 1 / 1e-8) / 1.5e-9) / (2 * math.pi)
assert abs(f_pico - analitica) / analitica < 0.01

# 5. Vía térmica: corona de cobre de 25 μm en un taladro de 0,3 mm y 1,6 mm de largo.
theta = 1.6e-3 / (385 * math.pi * (0.15e-3**2 - 0.125e-3**2))
print("R pista", round(R * 1000, 1), "mΩ | w IPC", round(w, 3), "mm | w(50 Ω)", round(lo, 3), "mm | antirresonancia", round(analitica / 1e6, 2), "MHz | vía", round(theta, 1), "K/W")
assert math.ceil(theta / 20) == 10
```

## 10. Errores típicos

- Partir el plano de masa bajo pistas rápidas o dejar retornos sin vías al cambiar de capa.
- Poner los condensadores de desacoplo lejos de las patillas o con vías largas: su inductancia los anula.
- Dimensionar pistas solo por corriente sin mirar la caída de tensión.
- Ignorar la impedancia en pistas rápidas "porque son cortas" sin comparar con el tiempo de subida.
- Confiar en $\theta_{JA}$ de la hoja de datos sin la placa de referencia con la que se midió.
- Enviar a fabricar sin revisar los Gerber ni las reglas del fabricante.

## 11. Resumen

- $R = \rho L/(wt)$, resistencia por cuadro; $\alpha = 0{,}00393$ K⁻¹; IPC-2221 $I = k\Delta T^{0{,}44}A^{0{,}725}$.
- Línea de transmisión si la pista es larga frente al flanco; $\Gamma = (Z_L - Z_0)/(Z_L + Z_0)$; microstrip IPC-2141; pares diferenciales.
- PDN: $Z_t = V\cdot r/\Delta I$; condensadores con ESL (resonancia $1/2\pi\sqrt{LC}$); antirresonancias $\omega^2 = (1/C_1 + 1/C_2)/(L_1 + L_2)$; planos.
- Retorno bajo la pista; planos continuos; rebote $L\,di/dt$.
- EMC: $E \propto f^2AI/r$; modo común; profundidad pelicular.
- Térmica: $T_j = T_a + P\theta_{JA}$; vías térmicas en paralelo; fabricación: apilado, reglas, DFM, Gerber.

## Repaso: lo que debe quedarte dentro de un mes

1. Toda corriente vuelve, y a alta frecuencia lo hace justo debajo de la pista.
2. Un condensador de desacoplo vale lo que la inductancia de su montaje.
3. Por encima de cierta longitud, una pista es una línea de transmisión.
4. La emisión crece con $f^2$ y con el área del bucle.
5. El cobre de la placa es el disipador.

## Siguiente

`ing-integridad-senal` (líneas, diafonía y ojos en detalle), `ing-electronica-potencia` y `ing-rf-microondas`. La base de circuitos está en
[[ing-electronica-analogica]].
