---
id: ing-circuitos
title: "Análisis de circuitos y electrónica"
area: ingenieria
trunk_level: 13
prerequisites: [ing-circuitos-dc-ac, fis-electromagnetismo]
academic_sources:
  - "Horowitz, P.; Hill, W. The Art of Electronics, 3ª ed. Cambridge University Press, 2015."
  - "Agarwal, A.; Lang, J. H. Foundations of Analog and Digital Electronic Circuits. Morgan Kaufmann, 2005."
  - "Sedra, A. S.; Smith, K. C. Microelectronic Circuits, 7ª ed. Oxford University Press, 2014."
  - "Razavi, B. Fundamentals of Microelectronic Circuits. Wiley (varias ediciones)."
  - "Shockley, W. The Theory of p-n Junctions in Semiconductors and p-n Junction Transistors. Bell System Technical Journal, 28(3), 1949."
  - "Ebers, J. J.; Moll, J. L. Large-Signal Behavior of Junction Transistors. Proceedings of the IRE, 42(12), 1954."
  - "Sallen, R. P.; Key, E. L. A Practical Method of Designing RC Active Filters. IRE Transactions on Circuit Theory, 2(1), 1955."
ctf_flag: "sha256:5de757676eb0659c0865584e7510003f3dac84299ea6cc2fa5b96a1b5e69db1f"
hints:
  - "(a) Escribe la ley de corrientes de Kirchhoff en cada nodo con las tensiones de nodo como incógnitas: queda un sistema lineal G·v = i, con G simétrica. Convierte la fuente de 12 V con su resistencia en serie en su equivalente Norton. (b) La ecuación del circuito es de segundo orden: calcula la frecuencia natural y el amortiguamiento, y el pico del escalón llega cuando la corriente se anula. (c) Con el amplificador ideal de ganancia unidad, la función de transferencia es un polinomio de segundo grado en s en el denominador; el punto de −3 dB es donde |H|² = 1/2. (d) La corriente del diodo debe satisfacer a la vez la ley de Shockley y la ley de Ohm de la resistencia: es una ecuación trascendente."
  - "Para (a) resuelve el sistema con fracciones exactas (fractions.Fraction en Python, o sympy.Rational) y comprueba el resultado con la conservación de la potencia (teorema de Tellegen). Para (b) y (c) las fórmulas cerradas bastan, pero valida con scipy.integrate.solve_ivp o con tu propio RK4. Para (d) usa scipy.optimize.brentq sobre la corriente, o Newton sobre la tensión del diodo; también se puede despejar con la función W de Lambert (scipy.special.lambertw)."
  - "Agarwal & Lang (capítulos sobre redes resistivas, teoremas de redes y respuesta de segundo orden); Sedra & Smith, cap. 4 (diodos, ecuación de Shockley) y cap. 2 (amplificadores operacionales, filtro de Sallen-Key en el cap. 17 de la 7ª ed.). Documentación: docs.scipy.org/doc/scipy/reference/optimize.html (brentq) y /generated/scipy.special.lambertw.html."
---

# Análisis de circuitos y electrónica

Un circuito es una **abstracción**: sustituye un problema de campos (Maxwell, tres dimensiones)
por un grafo con dos variables por rama, una tensión y una corriente. Dominar esta abstracción
—y saber cuándo deja de valer— es lo que separa a quien sabe hacer cuentas de quien diseña
hardware que funciona, desde una fuente de alimentación hasta la entrada de un conversor
analógico-digital o la etapa de potencia de un robot ([[rob-microcontroladores]]).

## 1. La hipótesis de elementos concentrados

Se llaman **elementos concentrados** los componentes cuyo tamaño es mucho menor que la longitud
de onda de las señales que manejan ($\ell \ll \lambda = c/f$). Bajo esa hipótesis, las
ecuaciones de [[fis-electromagnetismo]] se reducen a dos leyes de conservación sobre el grafo:

- **KCL** (corrientes): la suma de corrientes que salen de un nodo es cero. Es la conservación
  de la carga cuando no se acumula carga en los nodos: $\nabla\cdot \vec J = 0$.
- **KVL** (tensiones): la suma de tensiones a lo largo de cualquier lazo cerrado es cero. Es
  $\oint \vec E\cdot d\vec\ell = 0$, válida cuando el flujo magnético variable queda confinado
  *dentro* de los elementos (inductores) y no atraviesa el lazo.

Con 1 GHz, $\lambda \approx 30$ cm en el vacío (menos en una placa FR-4): una pista de 10 cm ya no
es un nodo, es una **línea de transmisión**. Ese es el límite de la abstracción.

Convención de signos **pasiva**: la corriente entra por el terminal positivo; entonces
$p = v\,i > 0$ significa que el elemento *absorbe* potencia. Los elementos básicos:

| Elemento | Relación | Energía |
|---|---|---|
| Resistencia | $v = R\,i$ | disipa $p = v^2/R$ |
| Condensador | $i = C\,\dot v$ | almacena $\tfrac12 C v^2$ |
| Inductor | $v = L\,\dot i$ | almacena $\tfrac12 L i^2$ |
| Fuente de tensión / corriente | impone $v$ / impone $i$ | entrega o absorbe |

## 2. Análisis nodal

Elige un nodo de **referencia** (tierra) y llama $v_1, \dots, v_n$ a las tensiones de los demás
respecto a él. La corriente por una resistencia entre dos nodos es $(v_a - v_b)/R$; aplicar KCL
en cada nodo da un sistema lineal

$$
G\,\mathbf v = \mathbf i, \qquad
G_{kk} = \sum_{\text{ramas en } k} \frac1R, \quad
G_{kl} = -\sum_{\text{ramas entre } k \text{ y } l} \frac1R,
$$

donde $\mathbf i$ recoge las corrientes que las fuentes inyectan en cada nodo (una fuente de
tensión $V_s$ con resistencia serie $R_s$ equivale a inyectar $V_s/R_s$ con $R_s$ en paralelo:
el **equivalente Norton**).

**Teorema.** Si la red resistiva es conexa y tiene un nodo de referencia, $G$ es simétrica
definida positiva y el sistema tiene solución única.

*Demostración.* La simetría es evidente por construcción. Para cualquier $\mathbf v$,
$\mathbf v^\top G\,\mathbf v = \sum_{\text{ramas}} (v_a - v_b)^2 / R \ge 0$. Si fuese cero, todas
las ramas tendrían la misma tensión en sus extremos; por conexión, todos los nodos valdrían lo
mismo que la referencia, es decir, $\mathbf v = 0$. $\blacksquare$

La simetría ($G = G^\top$) es la **reciprocidad** de las redes pasivas, y que $G$ sea definida
positiva garantiza que se puede resolver por Cholesky ([[mat-algebra-lineal]]). Un simulador
SPICE no hace otra cosa, ampliando el sistema con las fuentes de tensión (*modified nodal
analysis*).

**Teorema de Tellegen.** Para cualquier red de elementos concentrados, la potencia absorbida
sumada sobre todas las ramas es cero: $\sum_k v_k i_k = 0$. Es una comprobación exacta que todo
resultado numérico debe cumplir, y la mejor defensa contra errores de signo.

**Superposición** (solo en redes lineales): la respuesta a varias fuentes es la suma de las
respuestas a cada una con las demás anuladas (tensión → cortocircuito, corriente → abierto).
**Thévenin/Norton**: desde dos terminales cualesquiera, una red lineal equivale a una fuente
$V_{th}$ con resistencia serie $R_{th}$ ($V_{th}$ = tensión en abierto; $R_{th}$ = resistencia
con las fuentes anuladas). La **máxima potencia** sobre una carga se da en $R_L = R_{th}$ y vale
$V_{th}^2/(4R_{th})$ (derivar $p = V_{th}^2 R_L/(R_{th}+R_L)^2$ respecto a $R_L$).

```python
from fractions import Fraction as Fr

def nodal(G, i):
    """Resuelve G v = i con fracciones exactas (eliminación de Gauss-Jordan)."""
    n = len(i)
    M = [[Fr(x) for x in G[r]] + [Fr(i[r])] for r in range(n)]
    for c in range(n):
        p = next(r for r in range(c, n) if M[r][c] != 0)
        M[c], M[p] = M[p], M[c]
        for r in range(n):
            if r != c and M[r][c] != 0:
                f = M[r][c] / M[c][c]
                M[r] = [a - f * b for a, b in zip(M[r], M[c])]
    return [M[r][n] / M[r][r] for r in range(n)]
```

## 3. Régimen transitorio

**Primer orden.** Un condensador $C$ cargado a través de $R$ desde una fuente $V_\infty$
cumple $RC\,\dot v + v = V_\infty$. Su solución, con $v(0) = v_0$, es

$$
v(t) = V_\infty + (v_0 - V_\infty)\,e^{-t/\tau}, \qquad \tau = RC .
$$

*Demostración.* $w = v - V_\infty$ obedece $\dot w = -w/\tau$, cuya solución es $w_0 e^{-t/\tau}$.
$\blacksquare$

Tras $\tau$ queda el 36,8 % del salto; tras $5\tau$, menos del 1 %. Lo mismo vale para $L/R$
con $\tau = L/R$. Esa cifra de $5\tau$ es el **tiempo de asentamiento** que se usa para decidir
cuánto esperar antes de leer un ADC tras un cambio.

**Segundo orden (RLC serie).** Con un escalón $V_s$ aplicado a $R$, $L$ y $C$ en serie, y
$v_C$ la tensión del condensador, KVL da

$$
LC\,\ddot v_C + RC\,\dot v_C + v_C = V_s
\;\Longleftrightarrow\;
\ddot v_C + 2\zeta\omega_0\,\dot v_C + \omega_0^2\, v_C = \omega_0^2 V_s,
$$

$$
\omega_0 = \frac{1}{\sqrt{LC}}, \qquad \zeta = \frac R2\sqrt{\frac CL}, \qquad Q = \frac{1}{2\zeta}.
$$

Las raíces de $s^2 + 2\zeta\omega_0 s + \omega_0^2$ son $-\zeta\omega_0 \pm
\omega_0\sqrt{\zeta^2 - 1}$. Según $\zeta$:

- $\zeta > 1$: **sobreamortiguado**, dos exponenciales reales; no hay oscilación.
- $\zeta = 1$: **crítico**, la respuesta más rápida sin rebasamiento.
- $\zeta < 1$: **subamortiguado**, con $\omega_d = \omega_0\sqrt{1 - \zeta^2}$ y

$$
v_C(t) = V_s\Bigl[1 - e^{-\zeta\omega_0 t}\Bigl(\cos\omega_d t + \frac{\zeta\omega_0}{\omega_d}\sin\omega_d t\Bigr)\Bigr].
$$

Derivando, $\dot v_C = V_s \dfrac{\omega_0^2}{\omega_d}\,e^{-\zeta\omega_0 t}\sin\omega_d t$, que se
anula por primera vez en

$$
t_p = \frac{\pi}{\omega_d}, \qquad
\text{rebasamiento} = e^{-\pi\zeta/\sqrt{1-\zeta^2}} .
$$

Como $i = C\,\dot v_C$, el pico de tensión del condensador coincide con el cruce por cero de la
corriente. El mismo polinomio caracteriza un muelle con amortiguador ([[fis-mecanica-clasica]])
y un lazo de control de segundo orden ([[rob-control]]): es la ecuación más reutilizada de la
ingeniería.

## 4. Régimen sinusoidal y respuesta en frecuencia

Para una entrada $\operatorname{Re}\{V e^{j\omega t}\}$ en un circuito lineal, todas las
variables son sinusoides de la misma frecuencia (los exponenciales son autofunciones, como se
demuestra en [[ing-senales-sistemas]]). Representarlas con **fasores** $\hat V$ convierte las
ecuaciones diferenciales en algebraicas, con **impedancias**

$$
Z_R = R, \qquad Z_L = j\omega L, \qquad Z_C = \frac{1}{j\omega C},
$$

y todo lo de las secciones 2 vale tal cual con $Z$ en lugar de $R$ (la matriz $G$ pasa a ser
una **admitancia** compleja $Y(j\omega)$).

El filtro RC paso bajo, con salida en el condensador, tiene
$H(j\omega) = \dfrac{1}{1 + j\omega RC}$, módulo $1/\sqrt{1 + (\omega RC)^2}$ y frecuencia de
corte (−3 dB, potencia mitad) $f_c = 1/(2\pi RC)$. Por encima de $f_c$ cae 20 dB por década. Un
RLC serie con salida en el condensador resuena cerca de $\omega_0$ con ganancia $\approx Q$.

La **potencia media** con valores eficaces es $P = V_{rms}I_{rms}\cos\varphi$; $\cos\varphi$ es
el factor de potencia. Un condensador o un inductor ideal tienen $P = 0$: intercambian energía,
no la disipan.

## 5. Dispositivos semiconductores

**Diodo.** En una unión p-n, Shockley (1949) obtuvo para la corriente

$$
I = I_s\bigl(e^{V/(nV_T)} - 1\bigr), \qquad V_T = \frac{kT}{q} \approx 25{,}85\ \text{mV a } 300\ \text{K}.
$$

$I_s$ (picoamperios en silicio) crece con la temperatura, y por eso $V$ a corriente fija baja
unos $-2$ mV/K. Como la exponencial es muy abrupta, un diodo conduciendo está casi siempre
entre 0,55 y 0,75 V: de ahí el modelo práctico de 0,6–0,7 V. En un circuito con una fuente $V_{cc}$ y una resistencia $R$, $I$ debe
cumplir a la vez Shockley y $V_{cc} = RI + V$. Esa ecuación trascendente se resuelve con
Newton (la función es monótona y convexa) o con la función $W$ de Lambert:
$I = \frac{nV_T}{R}\,W\!\bigl(\tfrac{I_s R}{nV_T}\,e^{(V_{cc}+I_sR)/(nV_T)}\bigr) - I_s$.

**BJT.** En zona activa, Ebers y Moll (1954) dan $I_C \approx I_S\,e^{V_{BE}/V_T}$ e
$I_B = I_C/\beta$. La transconductancia $g_m = dI_C/dV_{BE} = I_C/V_T$ depende solo de la
corriente de polarización, no del dispositivo: a 1 mA, $g_m \approx 39$ mS.

**MOSFET** (canal n), con $k = \mu_n C_{ox} W/L$ y tensión de sobreexcitación
$V_{ov} = V_{GS} - V_{th}$:

$$
I_D = \begin{cases}
0 & V_{ov} \le 0 \quad\text{(corte)}\\[2pt]
k\bigl(V_{ov}V_{DS} - \tfrac12 V_{DS}^2\bigr) & V_{DS} < V_{ov} \quad\text{(triodo: resistencia controlada)}\\[2pt]
\tfrac12 k\,V_{ov}^2\,(1 + \lambda V_{DS}) & V_{DS} \ge V_{ov} \quad\text{(saturación: fuente de corriente)}
\end{cases}
$$

En saturación, $g_m = k V_{ov} = 2 I_D/V_{ov}$ y $r_o \approx 1/(\lambda I_D)$.

**Modelo de pequeña señal.** Linealizar en torno al punto de polarización (derivar la curva
$I$–$V$) da un circuito lineal al que se aplican las secciones 2–4. Para el amplificador en
fuente común con carga $R_D$: $A_v = -g_m\,(R_D \parallel r_o)$. La polarización fija el punto
de trabajo; la señal solo lo perturba. Un MOSFET también es, simplemente, un interruptor:
saturado en fuente de corriente, en triodo con $V_{ov}$ grande como resistencia pequeña; es la
base de la lógica CMOS ([[ing-logica-digital]]).

## 6. Amplificadores operacionales

Un amplificador operacional es un amplificador diferencial de ganancia enorme:
$v_o = A\,(v_+ - v_-)$ con $A \sim 10^5$–$10^7$ en continua. Con **realimentación negativa**
(salida conectada a la entrada inversora), $v_+ - v_- = v_o/A \to 0$. De ahí las dos reglas del
amplificador ideal:

1. $v_+ = v_-$ (**cortocircuito virtual**) mientras la salida no sature.
2. Las entradas no consumen corriente.

*Inversor*: por KCL en el nodo inversor, $\dfrac{v_{in}}{R_1} + \dfrac{v_o}{R_2} = 0$, es decir
$v_o = -\dfrac{R_2}{R_1}\,v_{in}$. *No inversor*: $v_o = \bigl(1 + \tfrac{R_2}{R_1}\bigr) v_{in}$.
*Integrador*: con $C$ en la realimentación, $v_o = -\tfrac{1}{RC}\int v_{in}\,dt$.

**Límite real: ancho de banda.** Un amplificador compensado se comporta como $A(s) = \omega_t/s$
con $\omega_t = 2\pi\,\mathrm{GBW}$. Con una red de realimentación de factor $\beta$ (fracción de
la salida devuelta a la entrada inversora),

$$
H(s) = \frac{A}{1 + \beta A} = \frac{1/\beta}{1 + s/(\beta\omega_t)} ,
$$

de modo que el producto **ganancia × ancho de banda** es constante, $\mathrm{GBW}$: una
ganancia de 100 con un operacional de 1 MHz deja solo 10 kHz de ancho de banda. Otros límites:
tensión de offset, corriente de polarización, *slew rate* (derivada máxima de la salida) y ruido.
Todos aparecen en la hoja de datos, que hay que saber leer.

**Filtro de Sallen-Key** (Sallen y Key, 1955). Un seguidor de ganancia unidad con dos
resistencias $R_1, R_2$ en serie hacia la entrada no inversora, un condensador $C_2$ de esa
entrada a tierra y otro $C_1$ del nodo intermedio a la salida, da el paso bajo de segundo orden

$$
H(s) = \frac{1}{1 + s\,C_2(R_1 + R_2) + s^2 R_1R_2C_1C_2},
\quad
\omega_0 = \frac{1}{\sqrt{R_1R_2C_1C_2}}, \quad
Q = \frac{\sqrt{R_1R_2C_1C_2}}{C_2(R_1 + R_2)} .
$$

La frecuencia de −3 dB **no es** $\omega_0$ salvo si $Q = 1/\sqrt2$ (respuesta de Butterworth):
se calcula resolviendo $|H(j\omega)|^2 = \tfrac12$, que es una ecuación cuadrática en $\omega^2$.

## 7. Criterio de ingeniería

- **Verifica siempre dos veces**: con Tellegen, con un caso límite (R→∞, C→0) o con una
  simulación (ngspice, LTspice). Un error de signo pasa desapercibido en una sola vía.
- **Los componentes reales tienen tolerancia** (resistencias 1 %, condensadores cerámicos 10–20 %
  y dependientes de la tensión). El diseño debe funcionar en el peor caso, no en el nominal.
- **Desacopla**: un condensador de 100 nF junto a cada pin de alimentación de un circuito
  integrado digital aporta la corriente de los flancos rápidos, que la inductancia de la pista
  no puede suministrar. Sin esto, un microcontrolador se reinicia al azar.
- **Ruido térmico**: una resistencia $R$ genera $v_n^2 = 4k_BTRB$ en un ancho de banda $B$;
  1 kΩ a 300 K da unos 4 nV/√Hz. Es el suelo de cualquier medida.

## Reto

Calcula cuatro enteros.

- **a.** Red resistiva con cuatro nodos y la tierra (0). Una fuente de 12 V en serie con 330 Ω
  une la tierra con el nodo 1 (equivale a una resistencia de 330 Ω entre el nodo 1 y la tierra,
  más 12/330 A entrando en el nodo 1). Una fuente de corriente de 2 mA entra en el nodo 3.
  Resistencias en ohmios: 1–2: 1000; 1–3: 2200; 2–3: 4700; 2–4: 3300; 3–4: 1500; 2–0: 6800;
  4–0: 2700; 3–0: 10000. Calcula $V_3$ **exacta** y da su parte entera en **nanovoltios**
  ($\lfloor 10^9\,V_3\rfloor$). Valor de control: con una fuente de 10 V y 1 kΩ en serie hacia
  el nodo 1, 6 kΩ del nodo 1 a tierra, 2 kΩ entre los nodos 1 y 2 y 3 kΩ del nodo 2 a tierra,
  salen $V_1 = 300/41$ V y $V_2 = 180/41$ V.
- **b.** Un RLC serie con $L = 10$ mH, $C = 1\ \mu$F y $R = 40\ \Omega$ recibe un escalón de 10 V.
  ¿En qué instante ocurre el primer máximo de la tensión del condensador? Da su parte entera
  en **nanosegundos**. Valor de control: con $R = 0$ el pico llega en $\pi\sqrt{LC}$
  $\approx 314159$ ns.
- **c.** Filtro de Sallen-Key de ganancia unidad con $R_1 = 4{,}7$ kΩ, $R_2 = 10$ kΩ,
  $C_1 = 22$ nF (realimentación) y $C_2 = 10$ nF (a tierra). Frecuencia de corte a −3 dB, en
  **milihercios** (parte entera). Valor de control: $f_0 \approx 1565{,}164$ Hz y
  $Q \approx 0{,}6917$.
- **d.** Una fuente de 5 V alimenta, en serie, una resistencia de 1 kΩ y un diodo con
  $I_s = 1$ pA, $n = 1$ y $nV_T = 25{,}852$ mV. Corriente del diodo en **nanoamperios** (parte
  entera). Valor de control: la tensión del diodo queda entre 0,57 y 0,58 V.

Formato de la flag, en decimal: `EXODUS{a-b-c-d}`
