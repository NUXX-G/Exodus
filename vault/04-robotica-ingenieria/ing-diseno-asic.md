---
id: ing-diseno-asic
title: "Diseño de ASIC: del RTL al GDSII, síntesis, test (DFT), análisis estático de tiempos, diseño físico, potencia, verificación de firma y fabricación"
area: ingenieria
trunk_level: 16
prerequisites: [ing-microelectronica-vlsi, ing-diseno-digital-hdl]
academic_sources:
  - "Kahng, A. B.; Lienig, J.; Markov, I. L.; Hu, J. VLSI Physical Design: From Graph Partitioning to Timing Closure, 2ª ed. Springer, 2022."
  - "Bhasker, J.; Chadha, R. Static Timing Analysis for Nanometer Designs: A Practical Approach. Springer, 2009."
exercises:
  - id: holgura-de-setup
    tier: 1
    prompt: |
      Un camino entre dos biestables tiene $t_{cq} = 80$ ps, lógica de 650 ps (peor caso) y $t_{su} = 50$ ps. El reloj es de 1 GHz y llega al biestable de captura 30 ps más tarde que al de lanzamiento. ¿Cuál es la holgura de setup, en ps? Respuesta: un número.
    answers: ["sha256:1e472b39b105d349bcd069c4a711b44a2fffb8e274714bb07ecfff69a9a7f67b"]
  - id: holgura-de-hold
    tier: 1
    prompt: |
      En el mismo par de biestables, el camino más corto tiene $t_{cq} = 80$ ps y 20 ps de lógica, y $t_{hold} = 60$ ps. Con el reloj de captura 30 ps retrasado, ¿cuál es la holgura de hold, en ps? Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: frecuencia-maxima
    tier: 1
    prompt: |
      Sin sesgo de reloj, el camino crítico tiene $t_{cq} = 60$ ps, 820 ps de lógica y $t_{su} = 40$ ps. ¿Cuál es la frecuencia máxima, en MHz? Respuesta: con **2 decimales**.
    answers: ["sha256:10dbe50335e70c74d97c7174bce3a0d480717f14ab71f78054f656074743536e"]
  - id: potencia-dinamica
    tier: 1
    prompt: |
      Un bloque conmuta una capacidad total de 1,2 nF con factor de actividad 0,15, a 0,9 V y 800 MHz. ¿Qué potencia dinámica $\alpha C V^2 f$ consume, en mW? Respuesta: con **2 decimales**.
    answers: ["sha256:7aeaf91042061eda57a2c8556334763aa9a42d0b3d952cf29a320f15451b4cea"]
  - id: hpwl
    tier: 1
    prompt: |
      Una red conecta terminales en (2,3), (7,1), (5,8) y (1,6). ¿Cuál es su longitud de semiperímetro (HPWL)? Respuesta: un número.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: tiempo-de-scan
    tier: 1
    prompt: |
      Un chip tiene 200 000 biestables repartidos en 16 cadenas de scan iguales y se prueba con 3000 patrones a 100 MHz. Cada patrón se carga desplazando la cadena entera (la carga se solapa con la descarga del anterior), tiene un ciclo de captura, y al final hay que descargar el último. ¿Cuánto dura la prueba, en ms? Respuesta: con **3 decimales**.
    answers: ["sha256:18bf0ef0838dc3fe7c78f39680058a0a92b72bec1ced685d9ff274e02efe8865"]
  - id: arbol-de-steiner
    tier: 2
    prompt: |
      Una red tiene terminales en (0,0), (4,6) y (8,2). ¿Cuánto mide su árbol de expansión mínimo rectilíneo y su árbol de Steiner rectilíneo mínimo? Respuesta: `expansion;steiner`.
    answers: ["sha256:62c64a07974e88dd9437089c372cdb3dcdf0aa0f07bc534fd6178e8a4fd1d1ac"]
  - id: rendimiento-de-murphy
    tier: 2
    prompt: |
      Con densidad de defectos $D_0 = 0{,}5$ cm⁻² y un chip de 1,2 cm², ¿qué rendimiento da el modelo de Murphy $Y = \left(\frac{1 - e^{-D_0A}}{D_0A}\right)^2$? Respuesta: con **4 decimales**.
    answers: ["sha256:20bfe49d4cbfe859bd76616102f806b8ee9a320833744a40b93cbbcaa452735e"]
  - id: retardo-de-elmore
    tier: 2
    prompt: |
      Un excitador de 200 $\Omega$ ataca un hilo de 2 mm con 50 $\Omega$/mm y 0,2 pF/mm, que termina en una carga de 50 fF. ¿Cuál es el retardo de Elmore hasta la carga, en ps? Respuesta: un número entero.
    answers: ["sha256:28dae7c8bde2f3ca608f86d0e16a214dee74c74bee011cdfdd46bc04b655bc14"]
  - id: holgura-con-ocv
    tier: 2
    prompt: |
      Periodo de 1000 ps; el reloj de lanzamiento tarda 400 ps en llegar, el dato 700 ps más ($t_{cq}$ + lógica), el reloj de captura 380 ps, y $t_{su} = 40$ ps. Sin tramo de reloj común, se aplica un derating tardío de 1,08 al reloj de lanzamiento y al dato y uno temprano de 0,92 al reloj de captura. ¿Cuál es la holgura de setup, en ps? Respuesta: con **1 decimal**.
    answers: ["sha256:082519c4d972579f011dceb76cccba34f98f80f8bd4ba5b42c04783f5dbb5456"]
  - id: electromigracion
    tier: 2
    prompt: |
      Con la ecuación de Black $\text{MTTF} \propto J^{-2}e^{E_a/kT}$ y $E_a = 0{,}9$ eV, ¿por cuánto se multiplica la vida de una pista si la densidad de corriente sube un 50 % y la temperatura pasa de 85 °C a 105 °C? Respuesta: con **4 decimales**.
    answers: ["sha256:aa495b53eeb92ac5de1d5cdaa26b93e2f5b19ec4d0c9351cd308bc9307c81be4"]
  - id: cobertura-de-fallos
    tier: 2
    prompt: |
      El circuito $n_1 = a\cdot b$, $y = n_1 + c$ tiene 10 fallos stuck-at (0 y 1 en $a$, $b$, $c$, $n_1$, $y$). ¿Cuántos detectan los patrones $abc$ = 110, 011 y 000? Respuesta: un número.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: colocacion-cuadratica
    tier: 2
    prompt: |
      Dos celdas móviles $a$ y $b$ en una dimensión: $a$ está conectada a terminales fijos en $x = 0$ y $x = 6$ (peso 1), $a$ con $b$ con peso 2, y $b$ con un terminal fijo en $x = 12$ (peso 1). ¿Qué posiciones minimizan la longitud cuadrática $\sum w(x_i - x_j)^2$? Respuesta: `xa;xb`.
    answers: ["sha256:cc105db2785a4d6ac049e11c95dc9d4d919292023658d6f74b67922c0269d2cd", "sha256:f365a472be6d5ee02a9b13a4737cad68e7868e708f927a9b30df11712549d907"]
  - id: biseccion-minima
    tier: 3
    prompt: |
      Un grafo de 8 nodos tiene las aristas 0–1, 0–4, 1–5, 4–5, 2–3, 2–6, 3–7, 6–7, 0–2, 5–7, 1–4, 3–6. ¿Cuántas aristas corta la mejor partición en dos mitades de 4 nodos? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: insercion-de-repetidores
    tier: 3
    prompt: |
      Un hilo largo de 2 k$\Omega$ y 2 pF se parte en $k$ tramos iguales, cada uno excitado por un búfer de 1 k$\Omega$ y 10 fF de entrada. Con el modelo $D(k) = k\left[0{,}69R_b\left(\frac{C_w}{k} + C_b\right) + \frac{R_w}{k}\left(0{,}38\frac{C_w}{k} + 0{,}69C_b\right)\right]$, ¿qué $k$ entero minimiza el retardo y cuánto vale, en ps? Respuesta: `k;retardo` con el retardo con **1 decimal**.
    answers: ["sha256:efbd07f459296bf01d1f2af51e8e3e12c8767df6787e4a61cb216c18ea6b032a"]
  - id: caida-ir
    tier: 3
    prompt: |
      Una tira de alimentación tiene 10 tomas que consumen 10 mA cada una, separadas por tramos de 0,1 $\Omega$ (también 0,1 $\Omega$ desde la almohadilla a la primera toma). ¿Cuál es la peor caída de tensión, en mV, si se alimenta solo por un extremo, y si se alimenta por los dos (otra almohadilla a 0,1 $\Omega$ de la última toma)? Respuesta: `un_extremo;dos_extremos` con **1 decimal**.
    answers: ["sha256:dc7980930f228f5a275b19b8c5f0174b9183c2fa6fd5b7b2ad2475d5bc615e0a", "sha256:2e261966d0e1ac00f74509b72807fbf8d6149976397cc0e111ca3b29a0c84ccc"]
---

Un ASIC (circuito integrado de aplicación específica) es un chip hecho para una tarea: el procesador de un móvil, el controlador de un SSD, el acelerador de
una red neuronal, el chip de un sensor. Entre el Verilog de [[ing-diseno-digital-hdl]] y las máscaras que se envían a la fundición hay un flujo de
herramientas y comprobaciones en el que cada paso convierte una descripción en otra más física (puertas, celdas colocadas, pistas de metal, polígonos) y
verifica que no se ha roto nada. Este nodo recorre ese flujo, **RTL → GDSII**, con los algoritmos y los números que hay detrás, apoyándose en los transistores y
las interconexiones de [[ing-microelectronica-vlsi]].

## Objetivos

Al terminar sabrás:

1. Describir el flujo completo de un ASIC de celdas estándar y qué produce y comprueba cada etapa.
2. Explicar la síntesis lógica, las bibliotecas de celdas y las restricciones de tiempo.
3. Diseñar para el test: cadenas de scan, modelo stuck-at, cobertura y tiempo de prueba.
4. Hacer análisis estático de tiempos: holguras de setup y hold, sesgo, esquinas y variación en el chip (OCV).
5. Entender el diseño físico: partición, floorplan, colocación (HPWL, colocación cuadrática), árbol de reloj, enrutado (Steiner) y repetidores.
6. Estimar potencia, caída IR y electromigración, y el rendimiento y el coste por chip.
7. Conocer el flujo abierto actual (Yosys, OpenROAD, LibreLane) y los PDK abiertos.

## Qué debes dominar antes

[[ing-microelectronica-vlsi]] (inversor CMOS, retardo RC, esfuerzo lógico, potencia, interconexiones) e [[ing-diseno-digital-hdl]] (RTL, biestables, máquinas de estados,
restricciones de tiempo de un camino). Grafos y algoritmos básicos de [[prog-algoritmos]].

> [!question] Test de entrada
> 1. ¿Qué condición de tiempo debe cumplir un dato entre dos biestables para que el de captura lo lea bien en el siguiente flanco?
> 2. ¿Cómo depende la potencia dinámica de la tensión de alimentación?
> 3. ¿Qué es un árbol de expansión mínimo?
>
> Respuestas: llegar antes de $T - t_{su}$ (setup) y no cambiar antes de $t_{hold}$ tras el flanco (hold); con $V^2$; el subconjunto de aristas que conecta todos los nodos con peso total mínimo.

## 1. Para qué sirve

- **Producto**: cuando el volumen justifica el coste fijo, un ASIC gana a una FPGA en consumo (un orden de magnitud), área y velocidad.
- **Aceleradores**: inferencia de IA, criptografía, procesado de vídeo y de radio, controladores de motores en robótica.
- **Investigación y docencia**: con PDK abiertos y lanzaderas compartidas, un estudiante puede fabricar un diseño pequeño.
- **Seguridad**: entender el flujo es la base para auditar troyanos de hardware, canales laterales y la cadena de suministro de chips.

## 2. El flujo de celdas estándar

Un ASIC digital se construye con una **biblioteca de celdas estándar**: puertas, biestables y búferes de altura fija, ya dibujados y caracterizados por la fundición o
un proveedor, que se colocan en filas. El **PDK** (process design kit) de la fundición contiene las reglas de diseño, los modelos de transistor, las capas y
las bibliotecas. El flujo:

1. **RTL y verificación funcional**: Verilog/VHDL/SystemVerilog, simulación, verificación formal de propiedades.
2. **Síntesis**: RTL → netlist de celdas de la biblioteca, optimizada contra las restricciones (SDC: relojes, retardos de entrada y salida).
3. **DFT**: inserción de cadenas de scan, compresión y autotest de memorias (MBIST).
4. **Floorplan**: tamaño del chip, macros (memorias, PLL), anillos y red de alimentación, entradas y salidas.
5. **Colocación** de las celdas y optimización de tiempos.
6. **Síntesis del árbol de reloj** (CTS).
7. **Enrutado** global y detallado.
8. **Firma** (signoff): extracción de parásitos, análisis estático de tiempos en todas las esquinas, caída IR y electromigración, **DRC** (reglas geométricas), **LVS**
   (el dibujo es el circuito del netlist), equivalencia lógica entre netlists.
9. **Tapeout**: el GDSII u OASIS final va a la fundición, que hace las máscaras.

Entre pasos se repite la equivalencia formal (el netlist sigue siendo el RTL) y el análisis de tiempos, y los cambios de última hora se hacen como
**ECO** sobre el netlist ya colocado, sin rehacer todo.

## 3. Síntesis y diseño para el test

La síntesis traduce el RTL a lógica genérica, la optimiza (minimización booleana, extracción de factores comunes, retemporización) y la **mapea** a celdas
eligiendo tamaños que cumplan los tiempos con el menor área y consumo. Las bibliotecas describen cada celda en formato Liberty: retardo y pendiente de
salida en tablas según la pendiente de entrada y la carga, potencia y área, en varias **esquinas** (proceso lento/típico/rápido, tensión, temperatura).

Un chip fabricado puede tener defectos aunque el diseño sea correcto. El **modelo stuck-at** supone que un nodo queda pegado a 0 o a 1; un patrón lo detecta si
**activa** el fallo (pone el nodo al valor contrario) y **propaga** la diferencia hasta una salida. Para hacer accesibles los biestables, la DFT los sustituye por
biestables de **scan**, encadenados en registros de desplazamiento: se carga un estado, se aplica un ciclo de captura y se descarga el resultado mientras se carga el
siguiente patrón. Un generador automático (ATPG) busca patrones hasta coberturas del 99 % o más. Con $P$ patrones y cadenas de longitud $L$, la prueba dura
unos $(P + 1)L + P$ ciclos: por eso se usan muchas cadenas cortas y compresión.

## 4. Análisis estático de tiempos

El STA comprueba **todos** los caminos sin simular vectores. Para un camino entre dos biestables con periodo $T$, sesgo $s$ (el reloj de captura llega $s$ más tarde):

$$
\text{setup:}\; T + s - (t_{cq} + t_{\text{comb,max}} + t_{su}) \ge 0, \qquad \text{hold:}\; t_{cq} + t_{\text{comb,min}} - (t_{hold} + s) \ge 0 .
$$

La diferencia es la **holgura** (slack). El sesgo positivo ayuda al setup y perjudica al hold; una violación de setup se arregla bajando la frecuencia, una de
hold **no**: hay que añadir retardo al camino corto. Por eso el hold se cierra en la esquina rápida y el setup en la lenta.

La variación dentro del propio chip (**OCV**) hace que dos copias de la misma celda no tarden lo mismo. El análisis pesimista aplica un *derating*: los caminos de
lanzamiento y de datos se alargan (tardío) y el reloj de captura se acorta (temprano) en el setup, al revés en el hold. El tramo de reloj común a ambos no
puede ser rápido y lento a la vez, y se le devuelve el pesimismo (CRPR). Los métodos modernos (AOCV, POCV/LVF) usan derates que dependen de la profundidad
del camino o una desviación estadística por celda.

> [!example] Ejemplo resuelto 1: setup y hold con sesgo negativo
> Periodo de 2 ns; $t_{cq} = 100$ ps; lógica entre 50 ps (mínima) y 1500 ps (máxima); $t_{su} = 80$ ps, $t_{hold} = 40$ ps; el reloj de captura llega 60 ps **antes** ($s = -60$).
> Setup: $2000 - 60 - (100 + 1500 + 80) = 260$ ps. Hold: $100 + 50 - (40 - 60) = 170$ ps. Si el árbol de reloj se rehace y el sesgo pasa a $+60$, el setup gana 120 ps y el hold
> los pierde (50 ps): el sesgo solo traslada margen de un lado a otro.

## 5. Diseño físico

**Partición.** Los diseños grandes se dividen en bloques minimizando las conexiones entre ellos. El problema de bisección mínima es NP-difícil; los algoritmos
de **Kernighan–Lin** y **Fiduccia–Mattheyses** mejoran una partición intercambiando o moviendo nodos y conservando la mejor secuencia, y los particionadores
multinivel (hMETIS) los aplican sobre versiones del grafo cada vez más agrupadas.

**Colocación.** Se estima la longitud de cada red por su **semiperímetro** (HPWL), el del menor rectángulo que contiene sus terminales: exacto para 2 y 3 terminales
en el árbol de Steiner rectilíneo. Los colocadores **analíticos** minimizan una función suave de la longitud: la **cuadrática** $\sum w_{ij}(x_i - x_j)^2$ lleva a un sistema
lineal (cada celda en la media ponderada de sus vecinas), y los modernos (como RePlAce en OpenROAD) añaden un término de densidad, como un potencial
electrostático, para repartir las celdas; después se **legalizan** en filas y se refinan.

**Árbol de reloj.** El reloj llega a decenas de miles de biestables con sesgo pequeño. La CTS construye un árbol de búferes equilibrado (H-tree, algoritmos de
sesgo cero) usando el **retardo de Elmore**: para una red RC en árbol, $\sum_k R_{\text{común},k}C_k$, la resistencia compartida entre la fuente y el camino al nodo por cada capacidad. Para un
excitador $R_d$ y un hilo distribuido $R_w$, $C_w$ con carga $C_L$: $R_d(C_w + C_L) + R_w(C_w/2 + C_L)$.

**Enrutado.** El enrutado global reparte las redes por regiones respetando la capacidad de pistas; el detallado traza cada segmento en las capas de metal.
La base es la búsqueda de caminos (**algoritmo de Lee**, BFS en la rejilla; A*), y las redes de muchos terminales se aproximan con árboles de **Steiner rectilíneos**,
cuyos puntos de Steiner óptimos están en la rejilla de Hanan (las rectas horizontales y verticales que pasan por los terminales). Un hilo largo tiene retardo
cuadrático en su longitud; partirlo con **repetidores** lo hace lineal: con el modelo de Bakoglu el número óptimo es $k \approx \sqrt{0{,}38R_wC_w/(0{,}69R_bC_b)}$.

> [!example] Ejemplo resuelto 2: longitud de una red y colocación
> Una red con terminales (1,1), (6,4), (3,7), (8,8) tiene HPWL $= 7 + 7 = 14$. Una celda libre en 1D conectada a terminales en 0, 4 y 10 queda en la **media**, 14/3 ≈ 4,67, si se
> minimiza la longitud cuadrática, y en la **mediana**, 4, si se minimiza la lineal $\sum|x - x_j|$ (suma 10, frente a 10,67 en la media). La cuadrática se resuelve con un
> sistema lineal pero castiga demasiado las redes largas: por eso los colocadores la reponderan en cada iteración.

## 6. Potencia, alimentación y fiabilidad

La potencia dinámica $\alpha CV^2f$ se recorta con **clock gating** (no conmutar los biestables que no cambian, la mayor parte de la red de reloj), varias tensiones y frecuencias
(DVFS), y **power gating** (apagar bloques con interruptores de cabecera, con retención de estado), descritos en un formato de intención de potencia (UPF). La
fuga se controla con celdas de varias tensiones umbral: rápidas (LVT) solo en caminos críticos.

La red de alimentación es una malla de tiras de metal; cada celda que consume corriente produce una **caída IR** a lo largo de la malla, que retrasa las celdas y
se comprueba con análisis estático y dinámico. Las corrientes también desgastan el metal: la **electromigración** mueve átomos con el flujo de electrones y abre o
cortocircuita pistas. La ecuación de **Black**,

$$
\text{MTTF} = A\,J^{-n}e^{E_a/kT}, \quad n \approx 2 ,
$$

dice que la vida baja con el cuadrado de la densidad de corriente y exponencialmente con la temperatura; las reglas de la fundición fijan la $J$ máxima por capa.

## 7. Fabricación, rendimiento y coste

Tras el tapeout, la fundición fabrica obleas; cada una contiene unos

$$
\text{DPW} \approx \frac{\pi(d/2)^2}{A} - \frac{\pi d}{\sqrt{2A}}
$$

chips (el segundo término descuenta los del borde). No todos funcionan: con densidad de defectos $D_0$, Poisson da $Y = e^{-D_0A}$, y el modelo de **Murphy**, que promedia
Poisson sobre una densidad de defectos variable (triangular), $Y = \left(\frac{1 - e^{-D_0A}}{D_0A}\right)^2$, más realista para chips grandes. El coste por chip bueno crece más que
linealmente con el área, por eso los diseños grandes se parten en **chiplets**. A esto se suma el coste fijo (NRE): máscaras, licencias, ingeniería, que en los
nodos más avanzados se cuenta en decenas de millones. Las **lanzaderas** (MPW) comparten una oblea entre muchos diseños para abaratar prototipos.

> [!example] Ejemplo resuelto 3: coste por chip bueno (con menos ayuda)
> Supón obleas de 300 mm a 10 000 € y $D_0 = 0{,}2$ cm⁻². Para un chip de 1 cm² calcula los chips por oblea (≈ 640), el rendimiento de Murphy (≈ 0,821) y el coste por chip bueno
> (≈ 19 €). Repite para 2 cm² (≈ 306 chips, $Y \approx 0{,}679$, ≈ 48 €) y comprueba que duplicar el área multiplica el coste por 2,5. ¿Qué pasaría si se partiera en dos chiplets de 1 cm²?

## 8. El flujo abierto

Desde 2020 existen **PDK abiertos** fabricables: SkyWater **SKY130** (130 nm, publicado con Google), GlobalFoundries **GF180MCU** (180 nm) e IHP **SG13G2** (130 nm BiCMOS). Las
herramientas abiertas cubren el flujo: **Yosys** (síntesis), **OpenROAD** (floorplan, colocación, CTS, enrutado, con OpenSTA para tiempos), **Magic** y **KLayout** (dibujo y
DRC), **Netgen** (LVS). Los integra **LibreLane**, continuación de OpenLane 2 bajo la FOSSi Foundation (2025). Proyectos como **Tiny Tapeout** fabrican diseños pequeños
de muchos participantes en un mismo chip. El ecosistema cambia deprisa: consulta los repositorios de cada PDK y del flujo para saber qué está soportado.

## 9. Comprobar con un programa

El ejemplo 1 con la definición de holgura frente a una búsqueda del periodo mínimo, el ejemplo 2 barriendo la posición, y el ejemplo 3 con Murphy
comparado con su definición como promedio de Poisson.

```python
import math

# 1. Ejemplo resuelto 1: holguras y periodo mínimo buscado por bisección.
tcq, cmin, cmax, tsu, th = 100, 50, 1500, 80, 40
setup = lambda T, s: T + s - (tcq + cmax + tsu)
hold = lambda s: tcq + cmin - (th + s)
assert setup(2000, -60) == 260 and hold(-60) == 170
assert setup(2000, 60) - setup(2000, -60) == 120 and hold(-60) - hold(60) == 120
lo, hi = 0.0, 5000.0
for _ in range(100):
    m = (lo + hi) / 2
    lo, hi = (lo, m) if setup(m, -60) >= 0 else (m, hi)
assert abs(hi - 1740) < 1e-9

# 2. Ejemplo resuelto 2: HPWL, y media frente a mediana barriendo la posición.
pins = [(1, 1), (6, 4), (3, 7), (8, 8)]
hpwl = max(p[0] for p in pins) - min(p[0] for p in pins) + max(p[1] for p in pins) - min(p[1] for p in pins)
xs = [i / 1000 for i in range(10001)]
cuad = min(xs, key=lambda x: sum((x - a) ** 2 for a in (0, 4, 10)))
lin = min(xs, key=lambda x: sum(abs(x - a) for a in (0, 4, 10)))
assert hpwl == 14 and abs(cuad - 14 / 3) < 1e-3 and lin == 4

# 3. Ejemplo resuelto 3: Murphy frente a Poisson promediado sobre una densidad triangular, y coste.
def murphy(D, A):
    return ((1 - math.exp(-D * A)) / (D * A)) ** 2

def murphy_integral(D, A, n=100000):
    s = 0.0
    for i in range(n):
        x = (i + 0.5) * 2 * D / n
        f = x / D**2 if x <= D else (2 * D - x) / D**2
        s += f * math.exp(-x * A) * 2 * D / n
    return s

costes = []
for A in (1, 2):
    dpw = math.pi * 150**2 / (A * 100) - math.pi * 300 / math.sqrt(2 * A * 100)
    Y = murphy(0.2, A)
    assert abs(Y - murphy_integral(0.2, A)) < 1e-8
    costes.append(10000 / (dpw * Y))
    print(f"{A} cm²: {dpw:.1f} chips, Y = {Y:.4f}, {costes[-1]:.2f} € por chip bueno")
assert abs(costes[1] / costes[0] - 2.53) < 0.01
```

## 10. Errores típicos

- Intentar arreglar una violación de hold bajando la frecuencia: el hold no depende del periodo.
- Cerrar tiempos en una sola esquina, o sin OCV, y descubrir fallos en silicio.
- Olvidar las restricciones de entrada, salida y caminos falsos o multiciclo: el STA analiza lo que se le dice.
- Tratar el HPWL como la longitud real de una red de muchos terminales (la subestima).
- Dimensionar la red de alimentación al final, cuando ya no cabe más metal.
- Dejar el DFT para el final: un diseño que no se puede probar no se puede vender.
- Calcular el coste por chip con el área y no con el rendimiento, que cae rápido con el tamaño.

## 11. Resumen

- Flujo: RTL → síntesis → DFT → floorplan → colocación → CTS → enrutado → firma (STA, IR, EM, DRC, LVS) → GDSII; equivalencia y ECO.
- Liberty, esquinas, SDC; stuck-at, scan, ATPG, $(P + 1)L + P$ ciclos.
- Setup $T + s - (t_{cq} + t_{max} + t_{su})$, hold $t_{cq} + t_{min} - (t_{hold} + s)$; OCV y CRPR.
- KL/FM, HPWL, colocación cuadrática y por densidad; Elmore; Lee, Steiner y Hanan; repetidores.
- $\alpha CV^2f$, clock y power gating, multi-$V_t$; caída IR; Black $J^{-n}e^{E_a/kT}$.
- DPW, Poisson y Murphy, coste por chip bueno, NRE, MPW; PDK y flujo abiertos.

## Repaso: lo que debe quedarte dentro de un mes

1. Cada paso del flujo transforma el diseño y otra herramienta comprueba que no se ha roto.
2. Setup depende del periodo; hold no.
3. La longitud de las redes manda en la colocación, y el retardo de los hilos en los tiempos.
4. La alimentación y el reloj se diseñan antes, no después.
5. El coste de un chip lo decide el rendimiento, y el rendimiento lo decide el área.

## Siguiente

`sec-seguridad-hardware` (troyanos, canales laterales y la cadena de suministro de chips) y `sys-verificacion-formal`. La integridad de señal fuera del chip está en
[[ing-integridad-senal]].
