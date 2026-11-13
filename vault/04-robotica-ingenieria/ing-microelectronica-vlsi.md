---
id: ing-microelectronica-vlsi
title: "Microelectrónica y VLSI: el transistor MOS en el chip, inversor CMOS, esfuerzo lógico, interconexiones, memorias, potencia, escalado y fabricación"
area: ingenieria
trunk_level: 15
prerequisites: [ing-diseno-digital-hdl, fis-materia-condensada-1]
academic_sources:
  - "Weste, N. H. E.; Harris, D. M. CMOS VLSI Design: A Circuits and Systems Perspective, 4ª ed. Addison-Wesley (Pearson), 2011."
  - "Rabaey, J. M.; Chandrakasan, A.; Nikolić, B. Digital Integrated Circuits: A Design Perspective, 2ª ed. Prentice Hall, 2003."
exercises:
  - id: potencia-dinamica
    tier: 1
    prompt: |
      Un chip conmuta una capacidad total de 1 nF a 1 V y 1 GHz con factor de actividad 0,1. ¿Qué potencia dinámica consume, en mW? Respuesta: un número.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: escalado
    tier: 1
    prompt: |
      Con escalado de campo constante de factor $S = 1{,}4$ (una generación), ¿por cuánto se multiplica la densidad de transistores y por cuánto el retardo de puerta? Respuesta: `densidad;retardo`, el retardo con **4 decimales**.
    answers: ["sha256:f782c2f51090f21404fd5a539e951cfcef2ebde002f4a43baae9f259bdd23bdf"]
  - id: elmore
    tier: 1
    prompt: |
      Una escalera RC de 3 tramos tiene 1 k$\Omega$ en cada tramo y 1 pF en cada nodo. ¿Cuál es el retardo de Elmore hasta el último nodo, en ns? Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: rendimiento-de-fabricacion
    tier: 1
    prompt: |
      Con una densidad de defectos de $0{,}1$ cm⁻² y chips de 1 cm², ¿qué rendimiento predice el modelo de Poisson? Respuesta: con **4 decimales**.
    answers: ["sha256:3c04c08e3a9e83929498c78451c129040a03e020a638fb1219bfa77b9d0713a7"]
  - id: capacidad-de-puerta
    tier: 1
    prompt: |
      ¿Qué capacidad de puerta tiene un transistor con óxido de 1,2 nm ($\varepsilon_r = 3{,}9$), $W = 1\ \mu$m y $L = 50$ nm, en fF? Respuesta: con **2 decimales**.
    answers: ["sha256:12ae02d62ab8f3e3343b26b528fb96f3cf59b61e8547310411043dbc61d5e6b6"]
  - id: oscilador-en-anillo
    tier: 1
    prompt: |
      Un oscilador en anillo de 51 inversores con 10 ps de retardo cada uno, ¿a qué frecuencia oscila, en MHz? Respuesta: con **1 decimal**.
    answers: ["sha256:f077623ca78ce41f603c7eea8c7870e7b129dec2808403839b5a39301ef80ef1"]
  - id: fo4
    tier: 1
    prompt: |
      Con el modelo de esfuerzo lógico ($d = gh + p$, inversor con $g = p = 1$) y $\tau = 3$ ps, ¿cuánto vale el retardo FO4, en ps? Respuesta: un número.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: area-de-sram
    tier: 1
    prompt: |
      ¿Qué área ocupa la matriz de una SRAM de 1 Mbit ($2^{20}$ bits) con celdas 6T de $0{,}1\ \mu$m², sin periferia, en mm²? Respuesta: con **4 decimales**.
    answers: ["sha256:cded55f3bf56e36b0e5685a18f9d9cda632f5218f18c62a5246a0c1284b19cf2"]
  - id: numero-de-etapas
    tier: 2
    prompt: |
      Una cadena de inversores debe excitar una carga 1000 veces mayor que su entrada. ¿Cuántas etapas minimizan el retardo ($D = N F^{1/N} + Np_{inv}$, $p_{inv} = 1$)? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: corriente-de-fuga
    tier: 2
    prompt: |
      Con una pendiente subumbral de 90 mV/década, ¿por cuánto se multiplica la corriente de fuga si se baja $V_t$ 150 mV? Respuesta: con **2 decimales**.
    answers: ["sha256:5efeee7500bb119990bfd2c62158f6f779cdfc95813e396d5eb6172f9e25443f"]
  - id: umbral-del-inversor
    tier: 2
    prompt: |
      Un inversor CMOS con $V_{DD} = 1$ V, $V_{tn} = |V_{tp}| = 0{,}3$ V y $k_p/k_n = 0{,}5$ (modelo cuadrático), ¿a qué tensión de entrada conmuta ($V_{in} = V_{out}$)? Respuesta: con **4 decimales**.
    answers: ["sha256:f336f9b4d00992100a80488e47edf178fde68b5da6b68287df7a5761d1ca0de8"]
  - id: escalado-de-tension
    tier: 2
    prompt: |
      Si se baja la tensión de alimentación un 20 % y la frecuencia se reduce en la misma proporción, ¿qué fracción de la potencia dinámica queda? Respuesta: un número.
    answers: ["sha256:e4c0bd784e877cb3b7fdff3ffaad7addedb681f009f08b1d347b45df9dc2ab65"]
  - id: lectura-de-sram
    tier: 2
    prompt: |
      Una celda SRAM descarga una línea de bit de 100 fF con 20 $\mu$A. ¿Cuánto tarda en desarrollar los 100 mV que necesita el amplificador de lectura, en ns? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: electromigracion
    tier: 2
    prompt: |
      Una pista de 0,1 $\mu$m de ancho y 0,2 $\mu$m de espesor lleva 1 mA. ¿Qué densidad de corriente soporta, en MA/cm²? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: esfuerzo-logico
    tier: 3
    prompt: |
      Un camino inversor → NAND2 → NOR2 → inversor excita una carga 64 veces mayor que su entrada, sin ramificaciones. Con $g = 1, \frac43, \frac53, 1$ y $p = 1, 2, 2, 1$, ¿cuál es el retardo mínimo en unidades de $\tau$? Respuesta: con **2 decimales**.
    answers: ["sha256:bdfe75d5c4775348f4d63c6bd89400dd1bf0df3bf32445a193bd69f1fedcdd71"]
  - id: retardo-de-una-linea
    tier: 3
    prompt: |
      Una pista de 10 mm tiene 100 $\Omega$/mm y 0,2 pF/mm. Con la aproximación de línea RC distribuida ($t_{50} \approx 0{,}38RC$), ¿cuánto tarda la señal en llegar al 50 %, en ns? Respuesta: con **2 decimales**.
    answers: ["sha256:342a441fd887344f92f3a0721cf4823f08939d247af7a611798b73d3b53a58b3"]
---

# Microelectrónica y VLSI: el transistor MOS en el chip, inversor CMOS, esfuerzo lógico, interconexiones, memorias, potencia, escalado y fabricación

Un procesador moderno tiene decenas de miles de millones de transistores en unos centímetros cuadrados, y cada uno conmuta miles de millones de veces por
segundo. Diseñar a esa escala (VLSI, *very large scale integration*) exige razonar con modelos simples y cuantitativos: cuánto tarda una puerta según su carga
(**esfuerzo lógico**), cuánto retrasan los cables, cuánta energía se gasta al conmutar y cuánta se escapa por fugas, qué cambia al pasar a la siguiente
generación de tecnología y cuántos chips salen bien de una oblea. Este nodo baja del RTL de [[ing-diseno-digital-hdl]] al silicio, con la física del
transistor de [[fis-materia-condensada-1]] como base.

## Objetivos

Al terminar sabrás:

1. Usar el modelo del transistor MOS (cuadrático, subumbral, capacidades) para el diseño digital.
2. Analizar el inversor CMOS: umbral de conmutación, márgenes de ruido, retardo y dimensionado.
3. Optimizar caminos de puertas con el método del esfuerzo lógico y elegir el número de etapas.
4. Estimar retardos de interconexiones (Elmore, líneas RC distribuidas) y cuándo repetir una línea.
5. Calcular la potencia dinámica y de fugas, y el efecto del escalado de tensión y de tecnología.
6. Entender memorias SRAM/DRAM, fiabilidad (electromigración) y el rendimiento de fabricación.

## Qué debes dominar antes

[[ing-diseno-digital-hdl]] (lógica secuencial, temporización, FPGA) y [[fis-materia-condensada-1]] (semiconductores, dopaje). Del [[ing-electronica-analogica]],
el MOSFET en saturación.

> [!question] Test de entrada
> 1. ¿Qué corriente da un NMOS en saturación en el modelo cuadrático?
> 2. ¿Cuánta energía se toma de la fuente al cargar un condensador $C$ a $V$? ¿Cuánta queda almacenada?
> 3. ¿Cuánto vale la constante de tiempo de una resistencia $R$ que carga un condensador $C$?
>
> Respuestas: $I_D = \frac{k}{2}(V_{GS} - V_t)^2$; $CV^2$ de la fuente y $\frac12CV^2$ en el condensador (la otra mitad se disipa); $RC$.

## 1. Para qué sirve

- **Diseño de chips**: procesadores, aceleradores de IA, SoC de móviles, microcontroladores; las bibliotecas de celdas y las memorias se diseñan con estos modelos.
- **Arquitectura y rendimiento**: entender por qué la frecuencia dejó de subir (muro de potencia) y por qué los cables dominan el retardo.
- **Sistemas de bajo consumo**: IoT, wearables, implantes; DVFS y apagado de bloques.
- **Seguridad hardware**: canales laterales de potencia y temporización, fallos inducidos (`sec-seguridad-hardware`).

## 2. El transistor MOS para el diseñador digital

En saturación, $I_D = \frac{k}{2}(V_{GS} - V_t)^2$ (en tecnologías nanométricas la saturación de velocidad la hace casi lineal en $V_{GS} - V_t$). Por debajo del umbral no se apaga del
todo: la corriente **subumbral** cae exponencialmente, una década cada $S \approx 60$–100 mV (la **pendiente subumbral**). Bajar $V_t$ para ganar velocidad multiplica la fuga:
150 mV menos con $S = 90$ mV/década son $10^{150/90} \approx 46$ veces más fuga. Las capacidades de puerta, $C = \varepsilon_{ox}WL/t_{ox}$ (1,44 fF para $1\ \mu\text{m}\times50$ nm con 1,2 nm de óxido), y
de difusión son las cargas que cada puerta debe mover.

## 3. El inversor CMOS

Un PMOS arriba y un NMOS abajo: en reposo, uno de los dos está cortado y no hay corriente (de ahí el bajo consumo estático de CMOS). La **característica de
transferencia** es muy abrupta; el **umbral de conmutación** $V_M$, donde $V_{in} = V_{out}$, se obtiene igualando las corrientes de ambos en saturación:

$$
V_M = \frac{V_{tn} + r(V_{DD} - |V_{tp}|)}{1 + r}, \qquad r = \sqrt{k_p/k_n}.
$$

Como los huecos son unas dos o tres veces menos móviles, el PMOS se hace más ancho para centrar $V_M$ y equilibrar los tiempos de subida y bajada. El retardo es
el de cargar la capacidad de salida a través de la resistencia equivalente del transistor que conduce: $t_p \approx 0{,}69R_{eq}C_L$.

## 4. Esfuerzo lógico

El retardo de una puerta, en unidades de $\tau$ (el de un inversor ideal sin parásitos), es $d = gh + p$: $g$ es el **esfuerzo lógico** (cuánto peor que un inversor entrega
corriente por unidad de capacidad de entrada: NAND2 $\frac43$, NOR2 $\frac53$), $h = C_{out}/C_{in}$ el **esfuerzo eléctrico** y $p$ el retardo parásito. Para un camino de $N$ etapas con
esfuerzo total $F = GBH$ (producto de esfuerzos lógicos, ramificaciones y relación de capacidades extremos), el retardo es mínimo cuando **todas las etapas
tienen el mismo esfuerzo** $\hat f = F^{1/N}$:

$$
D_{\min} = N F^{1/N} + \sum p_i ,
$$

y el número óptimo de etapas cumple $\hat f \approx 4$: para una carga 1000 veces la entrada, 5 inversores. El **FO4** (un inversor que excita cuatro iguales, $d = 5\tau$) es la
unidad práctica de retardo de cada tecnología.

> [!example] Ejemplo resuelto 1: un camino de cuatro puertas
> Inversor → NAND2 → NOR2 → inversor con $H = 64$: $G = 1\cdot\frac43\cdot\frac53\cdot1 = \frac{20}{9}$, $F = GH \approx 142{,}2$, $\hat f = F^{1/4} \approx 3{,}45$ y $D = 4\cdot3{,}45 + (1 + 2 + 2 + 1) \approx 19{,}8\,\tau$. Los tamaños se calculan hacia
> atrás desde la carga: cada entrada es $C_{in} = g\,C_{out}/\hat f$. Con $\tau = 3$ ps, unos 59 ps. Si se añadieran dos inversores, $\hat f$ bajaría a 2,3 pero los parásitos subirían: el
> retardo empeoraría.

## 5. Interconexiones

A partir de unos 100 nm, los cables, y no los transistores, dominan el retardo. Para una red RC en árbol, el **retardo de Elmore** suma, para cada condensador, su
capacidad por la resistencia del camino que comparte con la salida: en una escalera de tres tramos iguales, $RC(1 + 2 + 3) = 6RC$. Un cable distribuido de resistencia y
capacidad totales $R$, $C$ tarda $\approx 0{,}38RC$ en llegar al 50 %, y ese retardo crece con el **cuadrado** de la longitud: para cables largos se insertan **repetidores** que lo
vuelven lineal. La diafonía capacitiva entre cables vecinos y la inductancia en las redes de reloj y alimentación completan el problema.

## 6. Potencia

- **Dinámica**: $P = \alpha CV^2f$, con $\alpha$ el factor de actividad. Cada carga y descarga toma $CV^2$ de la fuente.
- **De cortocircuito**: durante la transición conducen ambos transistores; pequeña si los flancos son rápidos.
- **De fugas**: subumbral, de puerta y de unión; en reposo es toda la potencia, y crece exponencialmente con la temperatura y al bajar $V_t$.

**DVFS**: como $f \propto V$ aproximadamente, bajar la tensión un 20 % con la frecuencia deja $0{,}8^3 \approx 51\,\%$ de la potencia dinámica: la palanca más eficaz. **Apagado**
(*power gating*) de bloques inactivos ataca las fugas; *clock gating* reduce $\alpha$.

**Escalado**: con escalado de campo constante (Dennard) de factor $S$, las dimensiones y la tensión se dividen por $S$; la densidad sube $S^2$, el retardo baja $1/S$ y la
**densidad de potencia** se mantiene. Desde ~2005 la tensión ya no baja (por las fugas), la densidad de potencia sube y la frecuencia se estancó: el "muro de potencia"
que llevó a los multinúcleo y a los aceleradores especializados.

## 7. Memorias, fiabilidad y fabricación

- **SRAM 6T**: dos inversores cruzados y dos transistores de acceso; rápida y sin refresco, pero grande (~0,03–0,1 $\mu$m² por bit). La lectura descarga una línea de bit lentamente y
  un amplificador detecta unos 100 mV: $t = C\Delta V/I$.
- **DRAM 1T1C**: un condensador por bit; densa pero destructiva al leer y necesita refresco. **Flash**: carga atrapada en una puerta flotante; no volátil.
- **Fiabilidad**: la **electromigración** desplaza átomos del metal con densidades de corriente de MA/cm² y acaba abriendo pistas; también el envejecimiento por portadores
  calientes y por inestabilidad de polarización y temperatura (BTI).
- **Fabricación**: litografía, implantación, depósito y grabado, decenas de capas de metal. El **rendimiento** con defectos aleatorios sigue aproximadamente $Y = e^{-DA}$: un chip
  de 1 cm² con 0,1 defectos/cm² sale bien el 90 % de las veces; uno de 5 cm², el 61 %. Por eso los chips grandes se trocean en **chiplets**.

> [!example] Ejemplo resuelto 2: el umbral de un inversor
> Con $V_{DD} = 1$ V, $V_t = 0{,}3$ V y un PMOS de la mitad de fuerza ($k_p/k_n = 0{,}5$), $r = 0{,}707$ y $V_M = \frac{0{,}3 + 0{,}707\cdot0{,}7}{1{,}707} \approx 0{,}466$ V: un poco por debajo de la mitad, porque el NMOS es más
> fuerte. Duplicar la anchura del PMOS ($k_p = k_n$) centra el umbral en 0,5 V.

> [!example] Ejemplo resuelto 3: un cable largo (con menos ayuda)
> Un cable de 10 mm con 100 $\Omega$/mm y 0,2 pF/mm tiene $RC = 2$ ns y tarda unos $0{,}76$ ns al 50 %. Parte el cable en dos con un repetidor ideal en medio: cada mitad tarda
> $0{,}38\cdot(RC/4)$. Comprueba que el total (sin contar el retardo del repetidor) baja a la mitad, y deduce por qué se repiten los cables largos de un chip.

## 8. Comprobar con un programa

Esfuerzo lógico optimizado numéricamente, una línea RC simulada frente a la regla de 0,38RC, el umbral del inversor por bisección y el rendimiento por
simulación de defectos.

```python
import math
import random

random.seed(5)

# 1. Ejemplo resuelto 1: tamaños óptimos del camino (descenso de gradiente en log C) frente a N·F^(1/N) + P.
g, p, H = [1, 4 / 3, 5 / 3, 1], [1, 2, 2, 1], 64

def retardo(logc):
    c = [1.0] + [math.exp(v) for v in logc] + [H]
    return sum(g[i] * c[i + 1] / c[i] + p[i] for i in range(4))

x = [1.0, 2.0, 3.0]
for _ in range(20000):
    grad = [(retardo([v + (1e-6 if k == i else 0) for k, v in enumerate(x)]) - retardo([v - (1e-6 if k == i else 0) for k, v in enumerate(x)])) / 2e-6 for i in range(3)]
    x = [v - 0.05 * d for v, d in zip(x, grad)]
F = math.prod(g) * H
assert abs(retardo(x) - (4 * F**0.25 + sum(p))) < 1e-6

# 2. Ejemplo resuelto 3: cable RC distribuido de 10 mm simulado con 50 tramos; 50 % hacia 0,38RC.
def t50(Rtot, Ctot, n=50):
    R, C = Rtot / n, Ctot / n
    dt = R * C / 10          # Euler explícito: paso muy por debajo de RC de un tramo
    v = [0.0] * n
    t = 0.0
    while v[-1] < 0.5:
        nuevo = v[:]
        for i in range(n):
            izq = 1.0 if i == 0 else v[i - 1]
            sale = (v[i] - v[i + 1]) / R if i < n - 1 else 0.0
            nuevo[i] = v[i] + ((izq - v[i]) / R - sale) / C * dt
        v = nuevo
        t += dt
    return t
largo = t50(1000, 2e-12)
mitad = t50(500, 1e-12)
assert abs(largo - 0.38 * 2e-9) / largo < 0.02 and abs(2 * mitad / largo - 0.5) < 0.02

# 3. Ejemplo resuelto 2: umbral del inversor por bisección de I_n = I_p (modelo cuadrático).
lo, hi = 0.3, 0.7
for _ in range(100):
    v = (lo + hi) / 2
    lo, hi = (v, hi) if (v - 0.3) ** 2 < 0.5 * (0.7 - v) ** 2 else (lo, v)
assert abs(lo - 0.4657) < 1e-4

# 4. Rendimiento: defectos de Poisson (D = 0,1 cm⁻²) en chips de 1 y 5 cm².
def rendimiento(area, chips=100000):
    buenos = 0
    for _ in range(chips):
        n, t = 0, random.expovariate(0.1 * area)
        while t < 1:
            n += 1
            t += random.expovariate(0.1 * area)
        buenos += n == 0
    return buenos / chips
y1, y5 = rendimiento(1), rendimiento(5)
print("D_min =", round(retardo(x), 2), "τ | cable: 0,38RC =", round(largo * 1e9, 3), "ns, con repetidor", round(2 * mitad * 1e9, 3), "ns | rendimiento", round(y1, 3), round(y5, 3))
assert abs(y1 - math.exp(-0.1)) < 0.005 and abs(y5 - math.exp(-0.5)) < 0.005
```

## 9. Errores típicos

- Dimensionar cada puerta por separado en lugar de repartir el esfuerzo del camino.
- Ignorar el retardo de los cables largos o tratarlo como lineal en la longitud.
- Bajar $V_t$ por velocidad sin mirar la fuga, sobre todo en caliente.
- Medir la potencia sin el factor de actividad real.
- Olvidar la electromigración en las redes de alimentación.
- Suponer que un chip el doble de grande cuesta el doble: el rendimiento cae exponencialmente.

## 10. Resumen

- MOS: cuadrático y saturación de velocidad; subumbral $10^{\Delta V/S}$; $C_g = \varepsilon_{ox}WL/t_{ox}$.
- Inversor: $V_M = \frac{V_{tn} + r(V_{DD} - |V_{tp}|)}{1 + r}$; $t_p \approx 0{,}69R_{eq}C_L$.
- Esfuerzo lógico: $d = gh + p$; $D = NF^{1/N} + P$; $\hat f \approx 4$; FO4 $= 5\tau$.
- Cables: Elmore; distribuido $0{,}38RC$, cuadrático en la longitud; repetidores.
- Potencia $\alpha CV^2f$ + fugas; DVFS ($V^3$); Dennard y el muro de potencia.
- SRAM, DRAM, Flash; electromigración; rendimiento $e^{-DA}$ y chiplets.

## Repaso: lo que debe quedarte dentro de un mes

1. El retardo de una puerta es su esfuerzo por la carga más su parásito.
2. Reparte el esfuerzo: todas las etapas iguales, unas 4 por etapa.
3. Los cables largos son cuadráticos: repítelos.
4. La potencia dinámica va con $V^2$, y la tensión ya no baja.
5. Un chip grande sale mal con probabilidad exponencial en su área.

## Siguiente

`ing-diseno-asic` (flujo completo de RTL a GDS), `ing-integridad-senal` y `sec-seguridad-hardware`. La lógica de partida está en [[ing-diseno-digital-hdl]].
