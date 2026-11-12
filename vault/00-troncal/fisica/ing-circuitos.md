---
id: ing-circuitos
title: "Análisis de circuitos y electrónica: transitorios, líneas, diodos, transistores y amplificadores operacionales"
area: ingenieria
trunk_level: 13
prerequisites: [ing-circuitos-dc-ac, fis-electromagnetismo]
academic_sources:
  - "Horowitz, P.; Hill, W. The Art of Electronics, 3ª ed. Cambridge University Press, 2015."
  - "Agarwal, A.; Lang, J. H. Foundations of Analog and Digital Electronic Circuits. Morgan Kaufmann, 2005."
  - "Sedra, A. S.; Smith, K. C. Microelectronic Circuits, 7ª ed. Oxford University Press, 2014."
  - "Razavi, B. Fundamentals of Microelectronics, 2ª ed. Wiley, 2014."
  - "Shockley, W. The Theory of p-n Junctions in Semiconductors and p-n Junction Transistors. Bell System Technical Journal, 28(3), 435-489, 1949."
  - "Ebers, J. J.; Moll, J. L. Large-Signal Behavior of Junction Transistors. Proceedings of the IRE, 42(12), 1761-1772, 1954."
  - "Sallen, R. P.; Key, E. L. A Practical Method of Designing RC Active Filters. IRE Transactions on Circuit Theory, 2(1), 74-85, 1955."
ctf_flag: "sha256:5de757676eb0659c0865584e7510003f3dac84299ea6cc2fa5b96a1b5e69db1f"
hints:
  - "(a) Escribe la ley de corrientes de Kirchhoff en cada nodo con las tensiones de nodo como incógnitas: queda un sistema lineal G·v = i, con G simétrica. Convierte la fuente de 12 V con su resistencia en serie en su equivalente Norton. (b) La ecuación del circuito es de segundo orden: calcula la frecuencia natural y el amortiguamiento, y el pico del escalón llega cuando la corriente se anula. (c) Con el amplificador ideal de ganancia unidad, la función de transferencia es un polinomio de segundo grado en s en el denominador; el punto de −3 dB es donde |H|² = 1/2. (d) La corriente del diodo debe satisfacer a la vez la ley de Shockley y la ley de Ohm de la resistencia: es una ecuación trascendente."
  - "Para (a) resuelve el sistema con fracciones exactas (fractions.Fraction en Python) y comprueba el resultado con la conservación de la potencia (teorema de Tellegen). Para (b) y (c) las fórmulas cerradas bastan, pero valida con tu propio RK4 o con una bisección sobre |H|. Para (d) usa bisección sobre la corriente, o Newton sobre la tensión del diodo; también se puede despejar con la función W de Lambert."
  - "Agarwal & Lang (capítulos sobre redes resistivas, teoremas de redes y respuesta de segundo orden); Sedra & Smith (diodos y la ecuación de Shockley; amplificadores operacionales; filtros activos y Sallen-Key). Documentación: docs.scipy.org/doc/scipy/reference/optimize.html (brentq) y scipy.special.lambertw."
exercises:
  - id: tension-de-un-diodo
    tier: 1
    prompt: |
      Un diodo de silicio con $I_s = 10$ fA ($10^{-14}$ A) y $n = 1$ conduce $1$ mA a $300$ K ($V_T = 25{,}852$ mV). ¿Qué tensión hay entre sus terminales? Respuesta: en voltios, con **3 decimales**.
    answers: ["sha256:954a08408650219db01bb09c7410bef54e07ec4d4dcf9a4fb145148cf4c8cf1a"]
  - id: amplificador-inversor
    tier: 1
    prompt: |
      Un amplificador inversor ideal tiene $R_1 = 4{,}7$ kΩ a la entrada y $R_2 = 47$ kΩ en la realimentación. ¿Qué tensión de salida da con $v_{in} = 0{,}3$ V? Respuesta: en voltios.
    answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
  - id: integrador
    tier: 1
    prompt: |
      Un integrador con amplificador ideal tiene $R = 10$ kΩ y $C = 100$ nF, con el condensador descargado al principio. Se aplica $v_{in} = 0{,}5$ V constante durante $2$ ms. ¿Qué tensión hay a la salida al final? Respuesta: en voltios.
    answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
  - id: reflexion-en-una-linea
    tier: 1
    prompt: |
      Una línea de transmisión de $50$ Ω termina en una carga de $75$ Ω. ¿Cuánto vale el coeficiente de reflexión $\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$ y la razón de onda estacionaria $\frac{1 + \lvert\Gamma\rvert}{1 - \lvert\Gamma\rvert}$? Respuesta: `gamma;roe`.
    answers: ["sha256:45157556b4b231274cea9196ba4059cd5135bf8dc7a69bd6334a2ae6761b67c4"]
  - id: transconductancia-bjt
    tier: 2
    prompt: |
      ¿Cuál es la transconductancia $g_m$ de un transistor bipolar polarizado con $I_C = 2$ mA a $300$ K ($V_T = 25{,}852$ mV)? Respuesta: en milisiemens, con **2 decimales**.
    answers: ["sha256:08c26b096e1e5d9ae4a04c8ac8f7ded798ab2570e3d03500fed9bf00095eadd8"]
  - id: emisor-comun
    tier: 2
    prompt: |
      Un amplificador en emisor común sin resistencia de emisor está polarizado con $I_C = 1$ mA y tiene $R_C = 4{,}7$ kΩ. Despreciando $r_o$, ¿cuál es su ganancia de tensión de pequeña señal ($V_T = 25{,}852$ mV)? Respuesta: con **1 decimal** (negativa).
    answers: ["sha256:67175ab64fea2d23d8762188b3b2342c6bc1ad2ec0bd02f892761c9555ad4700"]
  - id: mosfet-en-saturacion
    tier: 2
    prompt: |
      Un MOSFET de canal n con $k = \mu_nC_{ox}W/L = 2$ mA/V$^2$, $V_{th} = 0{,}7$ V y $\lambda = 0$ está en saturación con $V_{GS} = 1{,}5$ V. ¿Cuánto valen $I_D$ y $g_m$? Respuesta: `ID;gm`, en mA y en mS.
    answers: ["sha256:1f839cd8e1a4da3abfdc04e189a5f757ca45c8795172e0d5218219df1e8589c2"]
  - id: rebasamiento-rlc
    tier: 2
    prompt: |
      Un RLC serie con $L = 10$ mH, $C = 1$ μF y $R = 60$ Ω recibe un escalón. ¿Cuánto valen el amortiguamiento $\zeta$ y el rebasamiento de la tensión del condensador, en %? Respuesta: `zeta;rebasamiento`, el segundo con **2 decimales**.
    answers: ["sha256:e64a064aae41a8e636f7af69a1f5b52bee6ba2074e6e77ad85f80422e9e01b66"]
  - id: amortiguamiento-critico
    tier: 2
    prompt: |
      ¿Qué resistencia serie hace críticamente amortiguado un RLC con $L = 47$ mH y $C = 220$ nF? Respuesta: en ohmios, con **1 decimal**.
    answers: ["sha256:896dba6efdbce906867a884dc06965a0bdc39ae96ace0e363a8c92bf8be127bd"]
  - id: ganancia-por-ancho-de-banda
    tier: 2
    prompt: |
      Un amplificador operacional con producto ganancia × ancho de banda de $1$ MHz se monta como no inversor de ganancia $20$. ¿Cuál es el ancho de banda a $-3$ dB del montaje? Respuesta: en kHz.
    answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: descarga-de-una-bobina
    tier: 2
    prompt: |
      Una bobina de $0{,}1$ H por la que circulan $0{,}2$ A se descarga, en $t = 0$, a través de una resistencia de $50$ Ω. ¿Cuánto tarda la corriente en bajar a $1$ mA? Respuesta: en milisegundos, con **3 decimales**.
    answers: ["sha256:ef85149d686ec210d0d09b565a96cb8141ab666ae345091a795b042dc3666841"]
  - id: no-inversor-real
    tier: 3
    prompt: |
      Un no inversor con $R_1 = 1$ kΩ y $R_2 = 99$ kΩ (ganancia ideal $100$) usa un operacional cuya ganancia en lazo abierto es solo $A = 10^4$. Con $v_o = A(v_+ - v_-)$, ¿cuál es la ganancia real? Respuesta: con **2 decimales**.
    answers: ["sha256:0ac23da2e77566e3c14c8b69cb730f0f140c0ce9f90236e8bb5bd0efde4b4e91"]
  - id: fuente-comun
    tier: 3
    prompt: |
      Un amplificador en fuente común tiene $V_{DD} = 12$ V, $R_D = 10$ kΩ y un MOSFET con $k = 2$ mA/V$^2$, $V_{th} = 0{,}7$ V y $\lambda = 0{,}02$ V$^{-1}$, polarizado con $V_{GS} = 1{,}5$ V. En saturación, $I_D = \frac12k(V_{GS} - V_{th})^2(1 + \lambda V_{DS})$. Halla el punto de trabajo, deriva $g_m = \partial I_D/\partial V_{GS}$ y $1/r_o = \partial I_D/\partial V_{DS}$ en él, y da la ganancia $-g_m(R_D \parallel r_o)$. Respuesta: con **2 decimales** (negativa).
    answers: ["sha256:9c94530f0cad290356c559c262f32b837f7aee72d2d0cce053ece3f77e837818"]
  - id: ruido-termico
    tier: 3
    prompt: |
      ¿Qué tensión eficaz de ruido térmico, $\sqrt{4k_BTRB}$, genera una resistencia de $10$ kΩ a $300$ K en un ancho de banda de $20$ kHz (el del audio)? Usa $k_B = 1{,}380649\cdot10^{-23}$ J/K. Respuesta: en microvoltios, con **3 decimales**.
    answers: ["sha256:b1f9e939b899dd83c473ce5f7df3a127010638037672a99ebab9c5a883dbe6a2"]
  - id: sallen-key-butterworth
    tier: 3
    prompt: |
      Un Sallen-Key paso bajo de ganancia unidad tiene $R_1 = R_2 = 10$ kΩ, $C_1 = 20$ nF (realimentación) y $C_2 = 10$ nF (a tierra). Comprueba que $Q = 1/\sqrt2$ y da su frecuencia de corte a $-3$ dB. Respuesta: en Hz, con **1 decimal**.
    answers: ["sha256:8b75f12b1e352d0819b1a93589b1260a6b8703f7a9402ad1a901c132d2047fad"]
  - id: recta-de-carga
    tier: 3
    prompt: |
      Una fuente de $3$ V alimenta en serie una resistencia de $220$ Ω y un diodo con $I_s = 10$ fA, $n = 1$ y $V_T = 25{,}852$ mV. ¿Qué corriente circula? Respuesta: en miliamperios, con **3 decimales**.
    answers: ["sha256:6e70c44e0c8f044a033f5bcd70440fa20d46e1ba63b076df8dc4b2ee1e12aade"]
---

# Análisis de circuitos y electrónica: transitorios, líneas, diodos, transistores y amplificadores operacionales

[[ing-circuitos-dc-ac]] enseñó a analizar redes lineales: Kirchhoff, nodal, Thévenin, fasores y filtros de primer orden. Este nodo da los dos
pasos que convierten el análisis en **electrónica**: los dispositivos **no lineales** (diodos y transistores, que amplifican y conmutan) y los
**amplificadores operacionales**, que con realimentación permiten fabricar casi cualquier función analógica. Por el camino aparece el límite
de la propia abstracción de circuito, las líneas de transmisión, y el criterio práctico que separa una cuenta correcta de un diseño que
funciona, desde una fuente de alimentación hasta la entrada de un conversor analógico-digital o la etapa de potencia de un robot
([[rob-microcontroladores]]).

## Objetivos

Al terminar sabrás:

1. Decidir cuándo vale la hipótesis de elementos concentrados y tratar una línea de transmisión con su coeficiente de reflexión.
2. Plantear el análisis nodal en forma matricial y comprobarlo con el teorema de Tellegen.
3. Resolver transitorios de segundo orden (RLC): frecuencia natural, amortiguamiento, rebasamiento y amortiguamiento crítico.
4. Resolver circuitos con diodos (ley de Shockley y recta de carga) por Newton o bisección.
5. Polarizar un BJT y un MOSFET y calcular sus parámetros de pequeña señal y la ganancia de un amplificador de una etapa.
6. Analizar montajes con amplificadores operacionales ideales y reales (ganancia finita, producto ganancia × ancho de banda).
7. Diseñar un filtro activo de segundo orden (Sallen-Key) y estimar el ruido térmico.

## Qué debes dominar antes

[[ing-circuitos-dc-ac]] (análisis nodal, Thévenin, fasores, filtros RC), [[fis-electromagnetismo]] (campos, inducción, ondas) y, a través de ellos,
[[mat-ecuaciones-diferenciales]]. Ayuda tener presente [[ing-senales-sistemas]] (función de transferencia y polos).

> [!question] Test de entrada
> 1. ¿Cuál es la constante de tiempo de un RC con $R = 10$ kΩ y $C = 100$ nF?
> 2. ¿Cuál es la impedancia de una bobina de $1$ mH a $\omega = 1000$ rad/s?
> 3. ¿Cuánto vale $\frac{d}{dV}\bigl(I_se^{V/V_T}\bigr)$?
>
> Respuestas: $1$ ms; $j\,1$ Ω; $\frac{I_s}{V_T}e^{V/V_T}$, es decir, la propia corriente dividida por $V_T$.

## 1. Para qué sirve

- **Diseño de hardware**: fuentes de alimentación, acondicionamiento de sensores, etapas de potencia para motores, protección de entradas.
- **Instrumentación**: amplificar señales de microvoltios sin añadir ruido ni distorsión, filtrar antes de digitalizar ([[ing-senales-sistemas]]).
- **Electrónica digital**: un MOSFET es un interruptor, y dos de ellos forman el inversor CMOS de [[ing-logica-digital]].
- **Alta velocidad**: integridad de señal en placas, cables y buses (líneas de transmisión, adaptación de impedancias).
- **Simulación**: SPICE resuelve exactamente el sistema nodal de la sección 3 con los modelos no lineales de las secciones 5 a 7.

## 2. Elementos concentrados y su límite

Se llaman **elementos concentrados** los componentes cuyo tamaño es mucho menor que la longitud de onda de las señales que manejan
($\ell \ll \lambda = c/f$). Bajo esa hipótesis, las ecuaciones de [[fis-electromagnetismo]] se reducen a dos leyes de conservación sobre el grafo:

- **KCL** (corrientes): la suma de corrientes que salen de un nodo es cero. Es la conservación de la carga cuando no se acumula carga en los nodos.
- **KVL** (tensiones): la suma de tensiones a lo largo de cualquier lazo cerrado es cero. Es $\oint\mathbf E\cdot d\boldsymbol\ell = 0$, válida cuando el flujo
  magnético variable queda confinado dentro de los elementos (inductores) y no atraviesa el lazo.

Con $1$ GHz, $\lambda \approx 30$ cm en el vacío y unos $15$ cm en una placa FR-4: una pista de $10$ cm ya no es un nodo, es una **línea de
transmisión**, caracterizada por su impedancia característica $Z_0 = \sqrt{L'/C'}$ (el cable coaxial de [[fis-electromagnetismo]]). Una onda que llega a
una carga $Z_L$ se refleja con el **coeficiente de reflexión**

$$
\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0} ,
$$

y la superposición de ida y vuelta forma una onda estacionaria de **razón** $\frac{1 + \lvert\Gamma\rvert}{1 - \lvert\Gamma\rvert}$ (ROE, o VSWR). Si $Z_L = Z_0$ la línea
está **adaptada** y no hay reflexión: por eso las entradas de radiofrecuencia son de $50$ Ω y los buses rápidos llevan resistencias de terminación.

> [!example] Ejemplo resuelto 1: desadaptación
> Un cable de $50$ Ω termina en $100$ Ω: $\Gamma = \frac{100 - 50}{150} = \frac13$, ROE $= \frac{4/3}{2/3} = 2$, y se refleja $\Gamma^2 = \frac19$ de la potencia.
> En cortocircuito $\Gamma = -1$ y en abierto $\Gamma = +1$: toda la onda vuelve, con o sin cambio de signo.

## 3. Análisis nodal en forma matricial

Con un nodo de referencia y las tensiones $v_1, \dots, v_n$ de los demás, KCL en cada nodo da el sistema $G\,\mathbf v = \mathbf i$, con
$G_{kk} = \sum 1/R$ de las ramas que tocan el nodo $k$, $G_{kl} = -\sum 1/R$ de las ramas entre $k$ y $l$, y $\mathbf i$ las corrientes que inyectan
las fuentes (una fuente de tensión $V_s$ con resistencia serie $R_s$ equivale a inyectar $V_s/R_s$ con $R_s$ en paralelo: el **equivalente Norton**).

**Teorema.** Si la red resistiva es conexa y tiene un nodo de referencia, $G$ es simétrica definida positiva y el sistema tiene solución única.

*Demostración.* La simetría es evidente por construcción. Para cualquier $\mathbf v$, $\mathbf v^{\mathsf T}G\,\mathbf v = \sum_{\text{ramas}}(v_a - v_b)^2/R \ge 0$. Si
fuese cero, todas las ramas tendrían la misma tensión en sus extremos; por conexión, todos los nodos valdrían lo mismo que la referencia, es decir,
$\mathbf v = 0$. $\blacksquare$

La simetría es la **reciprocidad** de las redes pasivas, y que $G$ sea definida positiva garantiza que se puede resolver por Cholesky
([[mat-algebra-lineal]]). Un simulador SPICE amplía el sistema con una incógnita de corriente por cada fuente de tensión ideal (**análisis nodal
modificado**) y, con elementos no lineales, lo resuelve por Newton en cada paso de tiempo.

**Teorema de Tellegen.** Para cualquier red de elementos concentrados, la potencia absorbida sumada sobre todas las ramas es cero:
$\sum_k v_ki_k = 0$. Es una comprobación exacta que todo resultado numérico debe cumplir, y la mejor defensa contra errores de signo.

## 4. Transitorios de segundo orden

Con un escalón $V_s$ aplicado a $R$, $L$ y $C$ en serie, y $v_C$ la tensión del condensador, KVL da

$$
LC\,\ddot v_C + RC\,\dot v_C + v_C = V_s \;\Longleftrightarrow\; \ddot v_C + 2\zeta\omega_0\,\dot v_C + \omega_0^2\,v_C = \omega_0^2V_s, \qquad
\omega_0 = \frac{1}{\sqrt{LC}}, \quad \zeta = \frac R2\sqrt{\frac CL} .
$$

Las raíces de $s^2 + 2\zeta\omega_0s + \omega_0^2$ son $-\zeta\omega_0 \pm \omega_0\sqrt{\zeta^2 - 1}$. Según $\zeta$:

- $\zeta > 1$: **sobreamortiguado**, dos exponenciales reales; no hay oscilación.
- $\zeta = 1$: **crítico**, la respuesta más rápida sin rebasamiento; ocurre con $R = 2\sqrt{L/C}$.
- $\zeta < 1$: **subamortiguado**, con $\omega_d = \omega_0\sqrt{1 - \zeta^2}$ y

$$
v_C(t) = V_s\Bigl[1 - e^{-\zeta\omega_0t}\Bigl(\cos\omega_dt + \frac{\zeta\omega_0}{\omega_d}\sin\omega_dt\Bigr)\Bigr].
$$

Derivando, $\dot v_C = V_s\frac{\omega_0^2}{\omega_d}e^{-\zeta\omega_0t}\sin\omega_dt$, que se anula por primera vez en

$$
t_p = \frac{\pi}{\omega_d}, \qquad \text{rebasamiento} = e^{-\pi\zeta/\sqrt{1 - \zeta^2}} .
$$

Como $i = C\,\dot v_C$, el pico de tensión del condensador coincide con el cruce por cero de la corriente. El mismo polinomio caracteriza un muelle
con amortiguador ([[fis-mecanica-clasica]]) y un lazo de control de segundo orden ([[rob-control]]).

> [!example] Ejemplo resuelto 2: un RLC concreto
> $L = 1$ mH, $C = 10$ nF y $R = 200$ Ω: $\omega_0 = 1/\sqrt{10^{-11}} \approx 316\,228$ rad/s y $\zeta = 100\sqrt{10^{-8}/10^{-3}} \approx 0{,}316$. El rebasamiento es
> $e^{-\pi\cdot0{,}316/0{,}949} \approx 0{,}351$: el condensador sube un $35\,\%$ por encima de $V_s$ antes de asentarse. Para eliminarlo hace falta
> $R \ge 2\sqrt{L/C} \approx 632$ Ω. Una bobina que se descarga por una resistencia es el caso de primer orden: $i(t) = I_0e^{-tR/L}$.

## 5. El diodo

En una unión p-n, Shockley (1949) obtuvo para la corriente

$$
I = I_s\bigl(e^{V/(nV_T)} - 1\bigr), \qquad V_T = \frac{k_BT}{q} \approx 25{,}85\ \text{mV a } 300\ \text{K}.
$$

$I_s$ (femtoamperios a picoamperios en silicio) crece mucho con la temperatura, y por eso $V$ a corriente fija baja unos $2$ mV/K. Como la
exponencial es muy abrupta (multiplicar la corriente por $10$ solo añade $nV_T\ln10 \approx 60$ mV), un diodo conduciendo está casi siempre entre
$0{,}55$ y $0{,}75$ V: de ahí el modelo práctico de $0{,}6$–$0{,}7$ V.

**Recta de carga.** Con una fuente $V_{cc}$ y una resistencia $R$ en serie, $I$ debe cumplir a la vez Shockley y $V_{cc} = RI + V$. Esa ecuación
trascendente se resuelve con **Newton** sobre la tensión (la función es monótona y convexa) o con **bisección** sobre la corriente; también con la
función $W$ de Lambert: $I = \frac{nV_T}{R}\,W\!\bigl(\frac{I_sR}{nV_T}\,e^{(V_{cc} + I_sR)/(nV_T)}\bigr) - I_s$.

> [!example] Ejemplo resuelto 3: Newton sobre la tensión del diodo
> $V_{cc} = 5$ V, $R = 1$ kΩ, $I_s = 10$ fA, $nV_T = 25{,}852$ mV. Se busca la raíz de $g(V) = I_s(e^{V/nV_T} - 1) - (5 - V)/R$, con
> $g'(V) = \frac{I_s}{nV_T}e^{V/nV_T} + \frac1R$. Desde $V_0 = 0{,}7$ V las iteraciones dan $0{,}6935$, $0{,}69256$, $0{,}692544$, $0{,}692544$ V: convergencia
> cuadrática. La corriente es $(5 - 0{,}6925)/1000 \approx 4{,}31$ mA. El modelo de $0{,}7$ V habría dado $4{,}30$ mA: para esta red sobra, para un
> sensor de temperatura no.

**Aplicaciones.** Rectificar (convertir alterna en continua, con un condensador que mantiene la tensión entre picos), proteger entradas
(diodos a las alimentaciones que limitan las sobretensiones), regular (el diodo **Zener** conduce en inversa a una tensión casi fija) y medir
temperatura (la tensión a corriente constante varía unos $-2$ mV/K).

## 6. El transistor bipolar

En zona activa, el modelo de Ebers y Moll (1954) da $I_C \approx I_Se^{V_{BE}/V_T}$ e $I_B = I_C/\beta$, con $\beta$ del orden de $100$. La
**transconductancia**

$$
g_m = \frac{dI_C}{dV_{BE}} = \frac{I_C}{V_T}
$$

depende solo de la corriente de polarización, no del dispositivo: a $1$ mA, $g_m \approx 39$ mS.

**Modelo de pequeña señal.** Linealizar en torno al punto de polarización (derivar la curva $I$–$V$) da un circuito lineal al que se aplican las
secciones 3 y 4. El amplificador en **emisor común**, con resistencia de colector $R_C$ y emisor a masa en alterna, tiene ganancia
$A_v = -g_mR_C$ (despreciando la resistencia de salida $r_o$ del transistor). La polarización fija el punto de trabajo; la señal solo lo perturba.

> [!example] Ejemplo resuelto 4: emisor común
> Con $I_C = 0{,}5$ mA, $g_m = 0{,}5/25{,}852 \approx 19{,}34$ mS. Con $R_C = 10$ kΩ, $A_v \approx -193{,}4$: una señal de $1$ mV en la base sale invertida
> con $193$ mV en el colector. La ganancia depende de $I_C$, que depende exponencialmente de $V_{BE}$ y de la temperatura: por eso los
> amplificadores reales llevan resistencia de emisor o realimentación, que cambian ganancia por estabilidad.

## 7. El MOSFET

Para un MOSFET de canal n, con $k = \mu_nC_{ox}W/L$ y tensión de sobreexcitación $V_{ov} = V_{GS} - V_{th}$:

$$
I_D = \begin{cases}
0 & V_{ov} \le 0 \quad\text{(corte)}\\[2pt]
k\bigl(V_{ov}V_{DS} - \tfrac12V_{DS}^2\bigr) & V_{DS} < V_{ov} \quad\text{(triodo: resistencia controlada)}\\[2pt]
\tfrac12k\,V_{ov}^2\,(1 + \lambda V_{DS}) & V_{DS} \ge V_{ov} \quad\text{(saturación: fuente de corriente)}
\end{cases}
$$

En saturación, $g_m = \partial I_D/\partial V_{GS} = kV_{ov}(1 + \lambda V_{DS})$, que sin modulación de canal ($\lambda = 0$) es $kV_{ov} = 2I_D/V_{ov}$, y la
resistencia de salida es $r_o = (\partial I_D/\partial V_{DS})^{-1} \approx 1/(\lambda I_D)$. El amplificador en **fuente común** con carga $R_D$ tiene
$A_v = -g_m(R_D \parallel r_o)$.

> [!example] Ejemplo resuelto 5: fuente común (con menos ayuda)
> $k = 1$ mA/V$^2$, $V_{th} = 0{,}5$ V, $V_{GS} = 1$ V y $\lambda = 0$: $V_{ov} = 0{,}5$ V, $I_D = \frac12\cdot1\cdot0{,}25 = 0{,}125$ mA y $g_m = 0{,}5$ mS. Con
> $R_D = 20$ kΩ, $A_v = -10$. Comprueba tú que, con $V_{DD} = 5$ V, $V_{DS} = 5 - 20\,000\cdot0{,}125\cdot10^{-3} = 2{,}5$ V $\ge V_{ov}$: el transistor está de
> verdad en saturación. Esa comprobación es obligatoria; si falla, el modelo usado no vale.

Un MOSFET también es, simplemente, un **interruptor**: en corte no conduce; en triodo con $V_{ov}$ grande es una resistencia pequeña ($R_{DS(on)}$).
Es la base de la lógica CMOS y de los puentes en H que mueven motores.

## 8. Amplificadores operacionales

Un amplificador operacional es un amplificador diferencial de ganancia enorme: $v_o = A(v_+ - v_-)$ con $A \sim 10^5$–$10^7$ en continua. Con
**realimentación negativa** (salida conectada a la entrada inversora), $v_+ - v_- = v_o/A \to 0$. De ahí las dos reglas del amplificador ideal:

1. $v_+ = v_-$ (**cortocircuito virtual**) mientras la salida no sature.
2. Las entradas no consumen corriente.

- *Inversor*: por KCL en el nodo inversor, $\frac{v_{in}}{R_1} + \frac{v_o}{R_2} = 0$, es decir, $v_o = -\frac{R_2}{R_1}v_{in}$.
- *No inversor*: $v_o = \bigl(1 + \frac{R_2}{R_1}\bigr)v_{in}$.
- *Integrador*: con $C$ en la realimentación, $v_o = -\frac{1}{RC}\int v_{in}\,dt$.

**Ganancia finita.** Sin la regla 1, para el no inversor con ganancia ideal $G = 1 + R_2/R_1$ se obtiene $\frac{v_o}{v_{in}} = \frac{G}{1 + G/A}$: con
$G = 10$ y $A = 10^5$, $9{,}999$. El error relativo es $G/A$, la razón por la que se pide tanta ganancia en lazo abierto.

**Producto ganancia × ancho de banda.** Un amplificador compensado se comporta como $A(s) = \omega_t/s$ con $\omega_t = 2\pi\,\mathrm{GBW}$. Con una
red de realimentación de factor $\beta = 1/G$,

$$
H(s) = \frac{A}{1 + \beta A} = \frac{1/\beta}{1 + s/(\beta\omega_t)} ,
$$

así que el ancho de banda a $-3$ dB es $\beta\cdot\mathrm{GBW}$: una ganancia de $100$ con un operacional de $1$ MHz deja solo $10$ kHz. Otros límites:
tensión de *offset*, corriente de polarización, *slew rate* (derivada máxima de la salida) y ruido. Todos aparecen en la hoja de datos.

**Filtro de Sallen-Key** (Sallen y Key, 1955). Un seguidor de ganancia unidad con dos resistencias $R_1, R_2$ en serie hacia la entrada no
inversora, un condensador $C_2$ de esa entrada a tierra y otro $C_1$ del nodo intermedio a la salida, da el paso bajo de segundo orden

$$
H(s) = \frac{1}{1 + s\,C_2(R_1 + R_2) + s^2R_1R_2C_1C_2}, \qquad \omega_0 = \frac{1}{\sqrt{R_1R_2C_1C_2}}, \qquad Q = \frac{\sqrt{R_1R_2C_1C_2}}{C_2(R_1 + R_2)} .
$$

La frecuencia de $-3$ dB **no es** $\omega_0$ salvo si $Q = 1/\sqrt2$ (respuesta de **Butterworth**, la más plana sin rebasamiento en frecuencia): en
general se calcula resolviendo $\lvert H(j\omega)\rvert^2 = \frac12$, que es una ecuación cuadrática en $\omega^2$. Con $R_1 = R_2$, Butterworth exige
$C_1 = 2C_2$.

## 9. Ruido y criterio de ingeniería

- **Ruido térmico**: una resistencia $R$ a temperatura $T$ genera una tensión de ruido de valor eficaz $\sqrt{4k_BTRB}$ en un ancho de banda $B$;
  $1$ kΩ a $300$ K da unos $4$ nV/√Hz. Filtrado por un condensador, el ruido total es $\sqrt{k_BT/C}$, independiente de $R$: el «ruido $kT/C$» que
  limita los conversores de condensadores conmutados. Es el suelo de cualquier medida ([[fis-termo-estadistica]]).
- **Verifica siempre dos veces**: con Tellegen, con un caso límite ($R \to \infty$, $C \to 0$) o con una simulación (ngspice, LTspice).
- **Tolerancias**: resistencias del $1\,\%$, condensadores cerámicos del $10$–$20\,\%$ y dependientes de la tensión. El diseño debe funcionar en el peor
  caso, no en el nominal.
- **Desacoplo**: un condensador de $100$ nF junto a cada pin de alimentación de un circuito integrado digital aporta la corriente de los flancos
  rápidos, que la inductancia de la pista no puede suministrar. Sin esto, un microcontrolador se reinicia al azar.
- **Comprueba la región de trabajo** de cada transistor tras calcular el punto de polarización.

## 10. Comprobar con un programa

El análisis nodal con fracciones exactas se contrasta con Tellegen; la fórmula del RLC, con una integración RK4; Newton sobre el diodo, con
bisección; la frecuencia de corte del Sallen-Key, con una bisección sobre $\lvert H\rvert$; y la ganancia de pequeña señal del MOSFET, con la derivada
numérica de su característica de gran señal.

```python
import math
from fractions import Fraction as Fr

def nodal(ramas, inyecciones, n):
    """ramas: (a, b, R) con 0 = tierra. Construye G y resuelve G v = i con fracciones exactas (Gauss-Jordan)."""
    G = [[Fr(0)] * n for _ in range(n)]
    for a, b, R in ramas:
        g = Fr(1, R)
        for x in (a, b):
            if x:
                G[x - 1][x - 1] += g
        if a and b:
            G[a - 1][b - 1] -= g
            G[b - 1][a - 1] -= g
    M = [G[r] + [Fr(inyecciones[r])] for r in range(n)]
    for c in range(n):
        p = next(r for r in range(c, n) if M[r][c] != 0)
        M[c], M[p] = M[p], M[c]
        for r in range(n):
            if r != c and M[r][c] != 0:
                f = M[r][c] / M[c][c]
                M[r] = [x - f * y for x, y in zip(M[r], M[c])]
    return [M[r][n] / M[r][r] for r in range(n)]

# 1. Valor de control del reto: 10 V con 1 kΩ hacia el nodo 1, 6 kΩ de 1 a tierra, 2 kΩ entre 1 y 2, 3 kΩ de 2 a tierra.
ramas = [(1, 0, 1000), (1, 0, 6000), (1, 2, 2000), (2, 0, 3000)]
v1, v2 = nodal(ramas, [Fr(10, 1000), 0], 2)
assert (v1, v2) == (Fr(300, 41), Fr(180, 41))
# Tellegen: la potencia disipada en las resistencias es la que entrega la fuente Norton (10/1000 A inyectados en el nodo 1).
tension = lambda x: {0: 0, 1: v1, 2: v2}[x]
assert sum((tension(a) - tension(b)) ** 2 / R for a, b, R in ramas) == v1 * Fr(10, 1000)

# 2. RLC del ejemplo resuelto 2: el máximo de vC por RK4 frente al rebasamiento e^(−πζ/√(1−ζ²)).
L, C, R, Vs = 1e-3, 10e-9, 200.0, 1.0
zeta = R / 2 * math.sqrt(C / L)
f = lambda v, i: (i / C, (Vs - R * i - v) / L)
v, i, h, vmax = 0.0, 0.0, 1e-9, 0.0
for _ in range(60_000):
    k1 = f(v, i); k2 = f(v + h / 2 * k1[0], i + h / 2 * k1[1])
    k3 = f(v + h / 2 * k2[0], i + h / 2 * k2[1]); k4 = f(v + h * k3[0], i + h * k3[1])
    v += h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]); i += h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
    vmax = max(vmax, v)
assert abs((vmax - 1) - math.exp(-math.pi * zeta / math.sqrt(1 - zeta ** 2))) < 1e-6

# 3. Diodo del ejemplo resuelto 3: Newton sobre V frente a bisección sobre I.
Is, nVT = 1e-14, 0.025852
V = 0.7
for _ in range(50):
    V -= (Is * (math.exp(V / nVT) - 1) - (5 - V) / 1000) / (Is / nVT * math.exp(V / nVT) + 1 / 1000)
lo, hi = 1e-9, 5e-3
for _ in range(200):
    mid = (lo + hi) / 2
    if 5 - 1000 * mid - nVT * math.log(mid / Is + 1) > 0:
        lo = mid
    else:
        hi = mid
assert abs((5 - V) / 1000 - lo) < 1e-12 and abs(V - 0.692544) < 1e-6

# 4. Sallen-Key Butterworth (R1 = R2 = 10 kΩ, C1 = 20 nF, C2 = 10 nF): −3 dB por bisección = f0.
a, b = 1e4 * 1e4 * 20e-9 * 10e-9, 10e-9 * 2e4
H2 = lambda fr: 1 / ((1 - (2 * math.pi * fr) ** 2 * a) ** 2 + (2 * math.pi * fr * b) ** 2)
lo, hi = 10.0, 1e5
for _ in range(200):
    mid = (lo + hi) / 2
    lo, hi = (mid, hi) if H2(mid) > 0.5 else (lo, mid)
assert abs(lo - 1 / (2 * math.pi * math.sqrt(a))) < 1e-6

# 5. Fuente común del ejemplo resuelto 5 (λ = 0): la derivada numérica de vout(vGS) es −gm·RD = −10.
def vout(vgs, k=1e-3, vth=0.5, rd=2e4, vdd=5.0):
    return vdd - rd * 0.5 * k * (vgs - vth) ** 2
assert abs((vout(1.0 + 1e-6) - vout(1.0 - 1e-6)) / 2e-6 + 10) < 1e-6
print("Todas las comprobaciones pasan")
```

## 11. Errores típicos

- Aplicar el modelo de elementos concentrados a pistas o cables comparables a la longitud de onda.
- Usar el modelo de pequeña señal sin comprobar antes la región de trabajo (activa, saturación) del transistor.
- Tomar $0{,}7$ V como verdad exacta del diodo cuando importan los milivoltios (sensores, referencias).
- Olvidar que $g_m$ depende de la polarización: cambiar $I_C$ o $I_D$ cambia la ganancia.
- Aplicar el cortocircuito virtual a un operacional sin realimentación negativa (comparador) o saturado.
- Confundir la frecuencia de $-3$ dB de un segundo orden con $\omega_0$, o $\omega$ (rad/s) con $f$ (Hz).
- Diseñar con valores nominales sin mirar tolerancias ni el peor caso.
- Errores de signo de corriente: comprueba con Tellegen.

## 12. Resumen

- Elementos concentrados si $\ell \ll \lambda$; si no, línea de transmisión: $\Gamma = (Z_L - Z_0)/(Z_L + Z_0)$, ROE, adaptación.
- Nodal: $G\mathbf v = \mathbf i$, $G$ simétrica definida positiva; Tellegen como comprobación.
- RLC: $\omega_0 = 1/\sqrt{LC}$, $\zeta = \frac R2\sqrt{C/L}$, crítico en $R = 2\sqrt{L/C}$, $t_p = \pi/\omega_d$, rebasamiento $e^{-\pi\zeta/\sqrt{1 - \zeta^2}}$.
- Diodo: Shockley, recta de carga, Newton o bisección.
- BJT: $g_m = I_C/V_T$, emisor común $-g_mR_C$. MOSFET: corte, triodo, saturación; $g_m = kV_{ov}$; fuente común $-g_m(R_D \parallel r_o)$.
- Operacional: cortocircuito virtual, inversor, no inversor, integrador; ganancia finita $G/(1 + G/A)$; ancho de banda $\mathrm{GBW}/G$.
- Sallen-Key: $\omega_0$, $Q$; Butterworth con $Q = 1/\sqrt2$. Ruido $\sqrt{4k_BTRB}$ y $kT/C$.

## Reto

Calcula cuatro enteros.

- **a.** Red resistiva con cuatro nodos y la tierra (0). Una fuente de 12 V en serie con 330 Ω une la tierra con el nodo 1 (equivale a una
  resistencia de 330 Ω entre el nodo 1 y la tierra, más 12/330 A entrando en el nodo 1). Una fuente de corriente de 2 mA entra en el nodo 3.
  Resistencias en ohmios: 1–2: 1000; 1–3: 2200; 2–3: 4700; 2–4: 3300; 3–4: 1500; 2–0: 6800; 4–0: 2700; 3–0: 10000. Calcula $V_3$ **exacta** y da su
  parte entera en **nanovoltios** ($\lfloor 10^9\,V_3\rfloor$). Valor de control: con una fuente de 10 V y 1 kΩ en serie hacia el nodo 1, 6 kΩ del nodo 1
  a tierra, 2 kΩ entre los nodos 1 y 2 y 3 kΩ del nodo 2 a tierra, salen $V_1 = 300/41$ V y $V_2 = 180/41$ V.
- **b.** Un RLC serie con $L = 10$ mH, $C = 1$ μF y $R = 40$ Ω recibe un escalón de 10 V. ¿En qué instante ocurre el primer máximo de la tensión del
  condensador? Da su parte entera en **nanosegundos**. Valor de control: con $R = 0$ el pico llega en $\pi\sqrt{LC} \approx 314159$ ns.
- **c.** Filtro de Sallen-Key de ganancia unidad con $R_1 = 4{,}7$ kΩ, $R_2 = 10$ kΩ, $C_1 = 22$ nF (realimentación) y $C_2 = 10$ nF (a tierra). Frecuencia
  de corte a $-3$ dB, en **milihercios** (parte entera). Valor de control: $f_0 \approx 1565{,}164$ Hz y $Q \approx 0{,}6917$.
- **d.** Una fuente de 5 V alimenta, en serie, una resistencia de 1 kΩ y un diodo con $I_s = 1$ pA, $n = 1$ y $nV_T = 25{,}852$ mV. Corriente del diodo
  en **nanoamperios** (parte entera). Valor de control: la tensión del diodo queda entre 0,57 y 0,58 V.

Formato de la flag, en decimal: `EXODUS{a-b-c-d}`

## Repaso: lo que debe quedarte dentro de un mes

1. Un circuito es una abstracción que vale mientras el tamaño sea mucho menor que la longitud de onda.
2. $\zeta$ decide si un segundo orden oscila; el crítico está en $R = 2\sqrt{L/C}$.
3. Diodos y transistores son exponenciales o cuadráticos: se polarizan con el modelo de gran señal y se amplifican con el de pequeña señal.
4. Con realimentación negativa, $v_+ = v_-$; el precio es el ancho de banda: ganancia × ancho de banda es constante.
5. Verifica siempre por dos caminos (Tellegen, casos límite, simulación).

## Siguiente

[[rob-microcontroladores]] conecta esta electrónica con el software (entradas, salidas, conversores, potencia); [[rob-control]] usa los mismos
polinomios de segundo orden para estabilizar sistemas; en las ramas, diseño de PCB, electrónica de potencia, radiofrecuencia y diseño analógico
integrado.
