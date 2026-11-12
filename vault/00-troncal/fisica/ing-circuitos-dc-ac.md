---
id: ing-circuitos-dc-ac
title: "Circuitos en continua y en alterna: análisis nodal, Thévenin, transitorios y fasores"
area: ingenieria
trunk_level: 12
prerequisites: [fis-electricidad-magnetismo-1, mat-algebra-lineal-1]
academic_sources:
  - "Alexander, C. K.; Sadiku, M. N. O. Fundamentals of Electric Circuits, 7ª ed. McGraw-Hill, 2021."
  - "Agarwal, A.; Lang, J. H. Foundations of Analog and Digital Electronic Circuits. Morgan Kaufmann (Elsevier), 2005."
  - "MIT OpenCourseWare. 6.002 Circuits and Electronics, primavera de 2007 (Agarwal): apuntes, problemas y vídeos gratuitos."
  - "Horowitz, P.; Hill, W. The Art of Electronics, 3ª ed. Cambridge University Press, 2015."
hints:
  - "Concepto: todo circuito lineal se resuelve con KCL en cada nodo y las leyes de cada elemento. En continua, los condensadores son circuitos abiertos y las bobinas, cortocircuitos; en alterna senoidal, cada elemento es una impedancia compleja (R, jωL, 1/(jωC)) y se resuelve como si fuera un circuito de resistencias. Un transitorio de primer orden siempre es x(t) = x∞ + (x0 − x∞)·e^(−t/τ)."
  - "Herramienta: escribe el sistema G·v = i y resuélvelo (a mano por sustitución, o con fractions/numpy); Python trabaja con complejos de forma nativa (3+4j, abs(), cmath.phase()). Comprueba un transitorio integrando la EDO con pasos pequeños (Euler) y una respuesta en alterna simulando varios periodos. Cualquier resultado se comprueba también con un simulador SPICE (ngspice, LTspice)."
  - "Documentación: MIT OCW 6.002 (ocw.mit.edu, Circuits and Electronics), con apuntes y problemas resueltos; docs.python.org/3/library/cmath.html para los complejos; Alexander y Sadiku, capítulos de métodos de análisis, teoremas de circuitos, circuitos de primer orden, análisis senoidal en régimen permanente, potencia en alterna y respuesta en frecuencia."
exercises:
  - id: fuente-real
    tier: 1
    prompt: |
      Una pila de $9$ V tiene una resistencia interna de $1\ \Omega$ y alimenta una carga de $8\ \Omega$. ¿Qué potencia recibe la carga, en vatios? Respuesta: un número.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: modulo-de-impedancia
    tier: 1
    prompt: |
      Una carga tiene impedancia $Z = 30 + j40\ \Omega$. ¿Cuánto vale $\lvert Z\rvert$ en ohmios? Respuesta: un número.
    answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: reactancia-capacitiva
    tier: 1
    prompt: |
      ¿Qué reactancia $X_C = 1/(\omega C)$ presenta un condensador de $10\ \mu\text{F}$ a $50$ Hz, en ohmios? Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:8dd5222ed4ae424bc88aeccb8dac06e0e0ba6b67ce6811a3a4e58dc44faa8bbd"]
  - id: energia-en-la-bobina
    tier: 1
    prompt: |
      Una bobina de $50$ mH en serie con $100\ \Omega$ se conecta a $10$ V de continua. Cuando la corriente se ha estabilizado, ¿qué energía almacena la bobina, en milijulios? Respuesta: un número.
    answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: analisis-nodal
    tier: 2
    prompt: |
      Una fuente de $12$ V (borne positivo en el nodo $S$, negativo a masa) alimenta este circuito: $R_1 = 2\ \Omega$ entre $S$ y $A$; $R_2 = 6\ \Omega$ entre $A$ y masa; $R_3 = 3\ \Omega$ entre $A$ y $B$; $R_4 = 6\ \Omega$ entre $B$ y masa; y una fuente de corriente de $1$ A que **inyecta** corriente en $B$ desde masa. Halla las tensiones de nodo $V_A$ y $V_B$ respecto a masa. Respuesta: `VA;VB` en voltios, cada una redondeada a **2 decimales**.
    answers: ["sha256:21f50bd0c31ac940acf52f9f2db54b053d3c6ae309d4d2265e237404087a2da5"]
  - id: analisis-de-mallas
    tier: 2
    prompt: |
      Dos fuentes comparten una resistencia. Rama izquierda: fuente de $10$ V (positivo arriba) en serie con $2\ \Omega$; rama central: $4\ \Omega$; rama derecha: fuente de $5$ V (positivo arriba) en serie con $3\ \Omega$. Las tres ramas unen el mismo nodo superior con masa. ¿Qué corriente baja por la resistencia de $4\ \Omega$, en amperios? Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:b2eadbf293c40242cc87c9482fd733a7717774108719d917a645b597a976a6ea"]
  - id: equivalente-de-thevenin
    tier: 2
    prompt: |
      Una fuente de $24$ V alimenta, a través de $6\ \Omega$, un nodo $X$ que tiene $3\ \Omega$ a masa; de $X$ sale una resistencia de $2\ \Omega$ hasta el terminal de salida $T$. Halla el equivalente de Thévenin visto entre $T$ y masa. Respuesta: `Vth;Rth` (voltios; ohmios).
    answers: ["sha256:44fe1f903e9b1585bcb3214f0a6ad3e3e737ff6a7d1b8c077cc5150c66d30175"]
  - id: maxima-transferencia
    tier: 2
    prompt: |
      Con el circuito del ejercicio anterior, se conecta entre $T$ y masa la resistencia de carga que recibe la **máxima** potencia posible. ¿Qué potencia recibe, en vatios? Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: carga-rc
    tier: 2
    prompt: |
      Un condensador de $47\ \mu\text{F}$ descargado se conecta a $12$ V a través de $10\ \text{k}\Omega$. ¿Cuánto tarda en alcanzar $5$ V, en milisegundos? Respuesta: un entero (redondeado).
    answers: ["sha256:e7866fdc6672f827c76f6124ca3eeaff44aff8b7caf4ee1469b2ab887e7e7875"]
  - id: corriente-rl
    tier: 2
    prompt: |
      Una bobina de $50$ mH en serie con $100\ \Omega$ se conecta en $t = 0$ a $10$ V (corriente inicial nula). ¿Qué corriente circula en $t = 1$ ms, en miliamperios? Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:f6abf482e2768df3edc622696c265e3f5bfca37db63a7214153d7206a688cb74"]
  - id: rc-en-alterna
    tier: 2
    prompt: |
      Una tensión $v(t) = 10\sin(2\pi\cdot 1000\, t)$ V se aplica a una resistencia de $1\ \text{k}\Omega$ en serie con un condensador de $100$ nF. En régimen permanente, ¿qué **amplitud** (valor de pico) tiene la tensión del condensador, en voltios? Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:c07552d1181073e2749db3ac49bc47aee5cd1a7664916c69a5be9068741505ea"]
  - id: desfase-rl
    tier: 2
    prompt: |
      Un circuito RL serie ($R = 100\ \Omega$, $L = 50$ mH) se alimenta con una tensión senoidal de $500$ Hz. ¿Cuántos **grados** se retrasa la corriente respecto a la tensión? Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:eb7ab55927c03e70b5083eebbbb7b50a6ed193a0494af9cb2e975b200ad4347e"]
  - id: potencia-activa
    tier: 3
    prompt: |
      Una carga de impedancia $Z = 40 + j30\ \Omega$ se conecta a $230$ V eficaces. ¿Qué potencia **activa** (media) consume, en vatios? Respuesta: un número.
    answers: ["sha256:f7f92ee58b188a41ce10d31fa53c861a395e733fd8cf4b42c8902cea04d4a129"]
  - id: correccion-factor-de-potencia
    tier: 3
    prompt: |
      Un motor consume $2$ kW con factor de potencia $0{,}7$ inductivo, a $230$ V eficaces y $50$ Hz. ¿Qué condensador en paralelo sube el factor de potencia a $0{,}95$ (inductivo)? Respuesta: la capacidad en microfaradios, redondeada a **1 decimal**.
    answers: ["sha256:5ce29cb6bb24d53e7a1cd21dc1c8dab4ad1bd7a4614a77f8aa18d30ee8bebd91"]
  - id: filtro-paso-bajo
    tier: 3
    prompt: |
      Un filtro RC paso bajo ($R = 1{,}6\ \text{k}\Omega$, $C = 100$ nF, salida en el condensador, sin carga) recibe una señal de $10$ kHz. ¿Cuál es su ganancia $20\log_{10}\lvert V_{\text{sal}}/V_{\text{ent}}\rvert$, en decibelios? Respuesta: un número (negativo) redondeado a **2 decimales**.
    answers: ["sha256:2b09e8565890e7ea6a4d82d610d69ac3002c41709b331ac90b5d1f70f49bee50"]
  - id: frecuencia-de-resonancia
    tier: 3
    prompt: |
      Un circuito RLC serie tiene $R = 10\ \Omega$, $L = 10$ mH y $C = 100$ nF. ¿A qué frecuencia es máxima la corriente, en hercios? Respuesta: un entero (redondeado).
    answers: ["sha256:822fb7b543bfa03e8eedad42c8edcd6db8f61ba8c01c52496b738156a3809c7c"]
  - id: factor-de-calidad
    tier: 3
    prompt: |
      Para el circuito RLC serie del ejercicio anterior, ¿cuánto vale el factor de calidad $Q = f_0/\Delta f$, donde $\Delta f$ es el ancho de banda entre las frecuencias de media potencia? Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:3ae59a12ee18db3fbb9000f3a4b7a24f4bc3101f47821639ea26fbf830ccd829"]
---

# Circuitos en continua y en alterna: análisis nodal, Thévenin, transitorios y fasores

En [[ing-electricidad-basica]] resolviste circuitos de una o dos mallas a ojo. Este nodo da el **método sistemático** con el
que se analiza cualquier circuito lineal, por grande que sea: análisis nodal y de mallas, los teoremas que permiten
simplificar (superposición, Thévenin, Norton), el comportamiento en el tiempo de condensadores y bobinas, y la herramienta que
convierte la corriente alterna en álgebra: los **fasores**. Con ella entenderás la red eléctrica (potencia activa y reactiva,
factor de potencia), los filtros y la resonancia, base de toda la electrónica posterior.

## Objetivos

Al terminar sabrás:

1. Plantear y resolver el **análisis nodal** y de **mallas** de un circuito con fuentes de tensión y de corriente.
2. Aplicar **superposición** y calcular equivalentes de **Thévenin** y **Norton**; demostrar la condición de **máxima
   transferencia de potencia**.
3. Calcular **transitorios** de primer orden (RC y RL) a partir de la EDO y con la fórmula general.
4. Operar con **números complejos** y usar **fasores e impedancias** para resolver circuitos en régimen senoidal.
5. Calcular potencia **activa, reactiva y aparente**, el **factor de potencia** y el condensador que lo corrige.
6. Obtener la **respuesta en frecuencia** de un filtro RC y la **resonancia** y el factor de calidad de un RLC.

## Qué debes dominar antes

[[ing-electricidad-basica]] (Ohm, Kirchhoff, serie y paralelo, valor eficaz), [[fis-electricidad-magnetismo-1]] (capacidad,
inducción de Faraday), [[mat-calculo-1]] (derivadas, exponencial), [[mat-trigonometria]] y [[mat-algebra-lineal-1]]
(sistemas de ecuaciones lineales).

> [!question] Test de entrada
> 1. ¿Cuánto vale la resistencia equivalente de $6\ \Omega$ en paralelo con $3\ \Omega$?
> 2. Resuelve $2x - y = 3$, $-x + 2y = 0$.
> 3. Deriva $v(t) = 5\sin(100t)$.
>
> Respuestas: $2\ \Omega$; $x = 2$, $y = 1$; $v'(t) = 500\cos(100t)$.

## 1. Para qué sirve

- **Cualquier placa electrónica**: alimentación, divisores de polarización, filtros de entrada de un sensor, desacoplo de
  un microcontrolador ([[rob-microcontroladores]]). Thévenin dice cuánto «se cae» una fuente al cargarla.
- **La red eléctrica**: el contador de una industria mide energía reactiva y la compañía la penaliza; un banco de
  condensadores corrige el factor de potencia y ahorra pérdidas en los cables.
- **Comunicaciones y audio**: un sintonizador de radio es un RLC resonante; un ecualizador es un conjunto de filtros.
- **Seguridad de componentes**: al cortar la corriente de una bobina (un relé, un motor) aparece un pico de tensión que
  destruye el transistor que la controla si no se pone un diodo de libre circulación.

## 2. El modelo: elementos concentrados, signos y fuentes

Un circuito se modela con **elementos concentrados** unidos por cables ideales. Vale cuando las dimensiones del circuito
son mucho menores que la longitud de onda de las señales ($\lambda = c/f$: a $50$ Hz son $6000$ km; a $1$ GHz, $30$ cm), de
modo que la corriente que entra por un terminal de un elemento sale por el otro en el mismo instante.

**Convención de signos pasiva.** Para cada elemento se elige una polaridad de la tensión $v$ y la corriente $i$ se toma
**entrando por el terminal $+$**. Entonces $p = vi$ es la potencia que **absorbe** el elemento: positiva en una resistencia,
negativa en una fuente que entrega energía. En todo circuito, $\sum p = 0$ (conservación de la energía: teorema de
Tellegen).

**Fuentes.** Una **fuente de tensión ideal** mantiene $v$ fija sea cual sea la corriente; una **de corriente ideal** mantiene
$i$ fija sea cual sea la tensión. Una fuente **real** (una pila) se modela como una ideal $V_0$ en serie con una resistencia
interna $r$: con una carga $R$, $I = V_0/(r + R)$ y la tensión en bornes cae a $V_0 - rI$.

## 3. Análisis nodal

Es el método general: las incógnitas son las **tensiones de nodo** respecto a un nodo de referencia (masa).

1. Elige masa (normalmente el nodo con más conexiones) y nombra $V_1, \dots, V_n$ los demás nodos.
2. En cada nodo de tensión desconocida escribe **KCL**: suma de corrientes que **salen** por resistencias
   $= $ corriente inyectada por fuentes de corriente. La corriente que sale de $j$ hacia $k$ por $R$ es $(V_j - V_k)/R$.
3. Resuelve el sistema lineal.

El resultado tiene forma matricial $G\,\mathbf v = \mathbf i$: en la diagonal, la suma de conductancias $1/R$ que tocan cada
nodo; fuera de la diagonal, menos la conductancia entre los dos nodos. $G$ es **simétrica**, y con al menos un camino a masa
desde cada nodo es invertible ([[mat-algebra-lineal-1]]).

**Ejemplo resuelto 1.** Una fuente de $10$ V alimenta, a través de $1\ \text{k}\Omega$, el nodo $A$; de $A$ a masa hay
$2\ \text{k}\Omega$; de $A$ al nodo $B$, $1\ \text{k}\Omega$; de $B$ a masa, $1\ \text{k}\Omega$. Trabajando en kΩ y mA
(así $V/R$ sale en mA):

$$
\begin{aligned}
\text{nodo }A:&\quad \frac{V_A - 10}{1} + \frac{V_A}{2} + \frac{V_A - V_B}{1} = 0 &&\Longrightarrow\quad 2{,}5\,V_A - V_B = 10\\
\text{nodo }B:&\quad \frac{V_B - V_A}{1} + \frac{V_B}{1} = 0 &&\Longrightarrow\quad -V_A + 2V_B = 0
\end{aligned}
$$

De la segunda, $V_B = V_A/2$; en la primera, $2V_A = 10$: $V_A = 5$ V y $V_B = 2{,}5$ V. **Comprobación por reducción:**
desde $A$, la rama $1 + 1 = 2\ \text{k}\Omega$ en paralelo con $2\ \text{k}\Omega$ da $1\ \text{k}\Omega$; el divisor con
$1\ \text{k}\Omega$ da $V_A = 10/2 = 5$ V. $\checkmark$

**Fuentes de tensión entre dos nodos sin masa** (supernodo): la ecuación de KCL se escribe para la superficie que encierra
ambos nodos, y se añade la ecuación $V_j - V_k = V_{\text{fuente}}$.

**Análisis de mallas.** Es el dual: incógnitas, las corrientes de malla (una por lazo independiente), y en cada malla
**KVL**: suma de caídas $= $ suma de fuentes. Conviene cuando hay menos mallas que nodos, o muchas fuentes de tensión.
La corriente en una rama compartida es la diferencia de las dos corrientes de malla.

## 4. Superposición, Thévenin y Norton

**Linealidad.** Un circuito de resistencias y fuentes independientes es **lineal**: cada tensión y corriente es una
combinación lineal de los valores de las fuentes (son la solución de $G\mathbf v = \mathbf i$, lineal en $\mathbf i$). De ahí:

**Superposición.** La respuesta con todas las fuentes es la suma de las respuestas con cada fuente actuando sola, con las
demás **apagadas**: una fuente de tensión apagada es un **cortocircuito** ($v = 0$); una de corriente, un **circuito
abierto** ($i = 0$). Atención: la **potencia no** se superpone (es cuadrática).

**Teorema de Thévenin.** Visto desde dos terminales, cualquier circuito lineal equivale a una fuente $V_{\text{th}}$ en serie
con una resistencia $R_{\text{th}}$, donde

- $V_{\text{th}}$ es la tensión **en vacío** entre los terminales;
- $R_{\text{th}}$ es la resistencia vista con las fuentes independientes apagadas, o bien $V_{\text{th}}/I_{\text{cc}}$, con
  $I_{\text{cc}}$ la corriente de **cortocircuito**.

*Por qué.* Si se conecta una fuente de corriente $I$ a los terminales, por superposición la tensión es (contribución de las
fuentes internas) $+$ (contribución de $I$) $= V_{\text{th}} - R_{\text{th}}\,I$ (con $I$ saliendo del terminal $+$): es
exactamente la característica de una fuente con resistencia en serie. El **equivalente de Norton** es una fuente de
corriente $I_{\text{cc}} = V_{\text{th}}/R_{\text{th}}$ en paralelo con $R_{\text{th}}$.

**Ejemplo resuelto 2.** $12$ V en serie con $4\ \text{k}\Omega$ hasta el nodo $X$, que tiene $4\ \text{k}\Omega$ a masa;
los terminales son $X$ y masa. En vacío, divisor: $V_{\text{th}} = 6$ V. Con la fuente en cortocircuito,
$R_{\text{th}} = 4 \parallel 4 = 2\ \text{k}\Omega$. Con una carga de $1\ \text{k}\Omega$: $I = 6/(2 + 1) = 2$ mA y
$V_L = 2$ V. **Comprobación nodal:** $(V_X - 12)/4 + V_X/4 + V_X/1 = 0 \Rightarrow 1{,}5\,V_X = 3 \Rightarrow V_X = 2$ V.
$\checkmark$

**Máxima transferencia de potencia.** Con una carga $R_L$ sobre un Thévenin,

$$
P(R_L) = \frac{V_{\text{th}}^2\,R_L}{(R_{\text{th}} + R_L)^2}, \qquad
P'(R_L) = V_{\text{th}}^2\,\frac{R_{\text{th}} - R_L}{(R_{\text{th}} + R_L)^3},
$$

que se anula solo en $R_L = R_{\text{th}}$ (positiva antes, negativa después: máximo). Entonces
$P_{\max} = V_{\text{th}}^2/(4R_{\text{th}})$, y el **rendimiento es del 50 %**: la mitad se disipa en $R_{\text{th}}$.
Se busca en antenas y en etapas de señal débil; **no** en la red eléctrica, donde se quiere rendimiento máximo
($R_L \gg R_{\text{th}}$).

## 5. Condensadores, bobinas y transitorios

**Condensador:** $q = Cv$, luego $i = C\,\dfrac{dv}{dt}$. Energía $\tfrac12 Cv^2$. Su tensión **no puede saltar** (haría
falta corriente infinita). En continua estacionaria, $dv/dt = 0$: es un **circuito abierto**.

**Bobina:** por la ley de Faraday ([[fis-electricidad-magnetismo-1]]), $v = L\,\dfrac{di}{dt}$, con $L$ en henrios.
Energía $\tfrac12 Li^2$. Su corriente **no puede saltar**. En continua estacionaria es un **cortocircuito**.

**Circuito RC.** Una fuente $V$ carga un condensador a través de $R$. KVL: $V = Ri + v = RC\,\dfrac{dv}{dt} + v$. Es una EDO
lineal de primer orden con solución

$$
v(t) = V + \bigl(v(0) - V\bigr)\,e^{-t/\tau}, \qquad \tau = RC .
$$

(Se comprueba sustituyendo: $RC\,v' = -(v(0) - V)e^{-t/\tau} = V - v$.) **Todo** circuito de primer orden sigue la misma
forma:

$$
x(t) = x_\infty + (x_0 - x_\infty)\,e^{-t/\tau},
$$

con $x_0$ el valor inicial, $x_\infty$ el final (el de continua estacionaria) y $\tau = RC$ o $\tau = L/R$, donde $R$ es la
resistencia de Thévenin vista por el condensador o la bobina. Para despejar el **tiempo** hasta un valor $x_1$:
$t = \tau\ln\dfrac{x_0 - x_\infty}{x_1 - x_\infty}$.

**Ejemplo resuelto 3.** $R = 2\ \text{k}\Omega$, $C = 1\ \mu\text{F}$ ($\tau = 2$ ms), descargado, a $5$ V. En
$t = \tau$: $v = 5(1 - e^{-1}) \approx 3{,}16$ V. Para llegar a $4{,}5$ V: $t = 2\ln\dfrac{0 - 5}{4{,}5 - 5} = 2\ln 10 \approx 4{,}61$ ms.

**Circuito RL y el pico al desconectar.** Con $V$, $R$ y $L$ en serie, $i(t) = \frac VR\bigl(1 - e^{-tR/L}\bigr)$. Si un
interruptor abre el circuito bruscamente, $di/dt$ se hace enorme y $v = L\,di/dt$ produce un pico de cientos de voltios (así
funciona la bobina de encendido de un motor de gasolina). Por eso los relés y motores llevan un **diodo de libre
circulación** en antiparalelo: da a la corriente un camino por el que decaer con $\tau = L/R$.

Los circuitos con un condensador **y** una bobina son de **segundo orden** (oscilan); se tratan en régimen senoidal en la
sección 8 y en el tiempo en [[ing-circuitos]].

## 6. Números complejos (lo imprescindible)

En electricidad la unidad imaginaria se escribe $j$ ($j^2 = -1$), porque $i$ es la corriente. Un complejo es $z = a + jb$
(forma **binómica**) o $z = r\,e^{j\theta} = r(\cos\theta + j\sin\theta)$ (forma **polar**), con

$$
r = \lvert z\rvert = \sqrt{a^2 + b^2}, \qquad \theta = \arg z \;(\text{el ángulo del punto }(a, b)), \qquad
a = r\cos\theta,\; b = r\sin\theta .
$$

La igualdad $e^{j\theta} = \cos\theta + j\sin\theta$ es la **fórmula de Euler** (se justifica comparando las series de Taylor
de [[mat-calculo-2]]). Se suman en binómica y se multiplican mejor en polar: **los módulos se multiplican y los ángulos se
suman**. Se escribe también $r\angle\theta$.

*Ejemplo:* $(3 + 4j)(1 - j) = 3 - 3j + 4j - 4j^2 = 7 + j$. Dividir: se multiplica arriba y abajo por el **conjugado**
$\bar z = a - jb$ (y $z\bar z = \lvert z\rvert^2$): $\dfrac{7 + j}{1 - j} = \dfrac{(7 + j)(1 + j)}{2} = \dfrac{6 + 8j}{2} = 3 + 4j$.
$\checkmark$ Además $\lvert 3 + 4j\rvert = 5$ y $\arg(3 + 4j) = \arctan(4/3) \approx 53{,}13^\circ$.

## 7. Fasores e impedancia

En un circuito lineal alimentado por una senoide de frecuencia angular $\omega = 2\pi f$, **en régimen permanente** todas las
tensiones y corrientes son senoides de la misma $\omega$; solo cambian la amplitud y la fase. Se representa
$v(t) = V_m\cos(\omega t + \varphi)$ por su **fasor** $\mathbf V = V_m e^{j\varphi}$, porque
$v(t) = \operatorname{Re}\{\mathbf V e^{j\omega t}\}$. Derivar respecto a $t$ multiplica $e^{j\omega t}$ por $j\omega$, así que
las leyes de los elementos se vuelven **algebraicas**:

$$
\mathbf V = R\,\mathbf I, \qquad \mathbf V = j\omega L\,\mathbf I, \qquad \mathbf V = \frac{1}{j\omega C}\,\mathbf I .
$$

El cociente $Z = \mathbf V/\mathbf I$ es la **impedancia**: $Z_R = R$, $Z_L = j\omega L$, $Z_C = \dfrac{1}{j\omega C} = -\dfrac{j}{\omega C}$.
Su parte imaginaria es la **reactancia** $X$ ($X_L = \omega L$, $X_C = -1/(\omega C)$). KCL y KVL valen para los fasores,
así que **todo lo de las secciones 3 y 4 (nodal, Thévenin, divisores) vale tal cual con impedancias complejas**.

- En una **bobina** la corriente se **retrasa** $90^\circ$ respecto a la tensión; en un **condensador** se **adelanta** $90^\circ$.
- A frecuencia $0$ (continua) $Z_C \to \infty$ (abierto) y $Z_L = 0$ (corto), como en la sección 5; a frecuencia muy alta,
  al revés.

**Ejemplo resuelto 4.** RL serie con $R = 3\ \Omega$ y $\omega L = 4\ \Omega$ alimentado por $v(t) = 10\cos\omega t$ V.
$Z = 3 + 4j = 5\angle 53{,}13^\circ$, así que $\mathbf I = 10/Z = 2\angle{-53{,}13^\circ}$:
$i(t) = 2\cos(\omega t - 53{,}13^\circ)$ A. Las amplitudes de $v_R$ y $v_L$ son $6$ V y $8$ V. **No suman $10$**: suman
como vectores, $\sqrt{6^2 + 8^2} = 10$. $\checkmark$

## 8. Potencia en alterna

Con $v$ e $i$ senoidales, desfasadas un ángulo $\varphi$ (el argumento de $Z$), la potencia instantánea oscila al doble de
frecuencia. Su **media** es la **potencia activa**

$$
P = V_{\text{ef}}\,I_{\text{ef}}\cos\varphi \quad [\text{W}],
$$

la que se convierte en calor o trabajo. Además se definen la **reactiva** $Q = V_{\text{ef}}I_{\text{ef}}\sin\varphi$ [var],
energía que va y vuelve entre la fuente y los campos de bobinas y condensadores sin consumirse, y la **aparente**
$S = V_{\text{ef}}I_{\text{ef}}$ [VA], que dimensiona cables y transformadores. Se cumple $S^2 = P^2 + Q^2$ (el **triángulo
de potencias**), y el **factor de potencia** es $\text{fp} = \cos\varphi = P/S$. Como solo la resistencia disipa,
$P = I_{\text{ef}}^2 R$.

**Ejemplo resuelto 5.** Una carga $Z = 18{,}4 + 13{,}8j\ \Omega$ a $230$ V eficaces: $\lvert Z\rvert = 23\ \Omega$,
$I_{\text{ef}} = 10$ A, $P = 10^2\cdot18{,}4 = 1840$ W, $Q = 10^2\cdot13{,}8 = 1380$ var, $S = 2300$ VA, fp $= 0{,}8$
(inductivo: la corriente se retrasa).

**Corrección del factor de potencia.** Un motor es inductivo. Un condensador en paralelo aporta reactiva **negativa**
$Q_C = -\omega C V_{\text{ef}}^2$ sin cambiar $P$. Para pasar de $\varphi_1$ a $\varphi_2$:

$$
\omega C V_{\text{ef}}^2 = P\,(\tan\varphi_1 - \tan\varphi_2) .
$$

En el ejemplo 5, para fp $= 1$ a $50$ Hz: $C = \dfrac{1380}{2\pi\cdot50\cdot230^2} \approx 83{,}0\ \mu\text{F}$. La corriente
de línea baja de $10$ A a $1840/230 = 8$ A, y las pérdidas $I^2R$ en los cables, un $36\,\%$.

## 9. Respuesta en frecuencia: filtros y resonancia

**Filtro RC paso bajo.** Salida en el condensador de un RC serie. Por el divisor de impedancias,

$$
H(j\omega) = \frac{\mathbf V_{\text{sal}}}{\mathbf V_{\text{ent}}} = \frac{1/(j\omega C)}{R + 1/(j\omega C)} = \frac{1}{1 + j\omega RC},
\qquad \lvert H\rvert = \frac{1}{\sqrt{1 + (f/f_c)^2}}, \quad f_c = \frac{1}{2\pi RC} .
$$

En la **frecuencia de corte** $f_c$, $\lvert H\rvert = 1/\sqrt2$ (la potencia cae a la mitad), es decir $-3{,}01$ dB, con un
desfase de $-45^\circ$. Muy por encima de $f_c$, $\lvert H\rvert \approx f_c/f$: cae **20 dB por década**. La ganancia en
decibelios es $20\log_{10}\lvert H\rvert$. *Ejemplo:* $R = 10\ \text{k}\Omega$, $C = 10$ nF dan $f_c \approx 1592$ Hz; a
$15{,}9$ kHz la ganancia es $\approx -20$ dB. Intercambiando $R$ y $C$ se obtiene un **paso alto**.

**Resonancia RLC serie.** $Z = R + j\bigl(\omega L - \frac{1}{\omega C}\bigr)$. La reactancia se anula en

$$
\omega_0 = \frac{1}{\sqrt{LC}}, \qquad f_0 = \frac{1}{2\pi\sqrt{LC}},
$$

donde $\lvert Z\rvert = R$ es mínima y la corriente máxima. El **factor de calidad**
$Q = \dfrac{\omega_0 L}{R} = \dfrac1R\sqrt{\dfrac LC}$ mide lo afilado del pico: el ancho de banda entre las frecuencias de
media potencia es $\Delta\omega = R/L$, así que $Q = f_0/\Delta f$. En resonancia la tensión en la bobina es $Q$ veces la de
la fuente. *Ejemplo:* $L = 1$ mH, $C = 10$ nF, $R = 20\ \Omega$: $f_0 \approx 50{,}3$ kHz y $Q \approx 15{,}8$. Así sintoniza
una radio: el circuito deja pasar la emisora de $f_0$ y atenúa las vecinas.

## 10. Comprobar con un programa

```python
from fractions import Fraction as F
import cmath, math

def resolver(A, b):
    """Gauss-Jordan exacto con fracciones: resuelve A x = b."""
    n = len(b)
    M = [fila[:] + [bi] for fila, bi in zip(A, b)]
    for c in range(n):
        p = next(r for r in range(c, n) if M[r][c] != 0)
        M[c], M[p] = M[p], M[c]
        for r in range(n):
            if r != c:
                f = M[r][c] / M[c][c]
                M[r] = [x - f * y for x, y in zip(M[r], M[c])]
    return [M[i][n] / M[i][i] for i in range(n)]

# Ejemplo resuelto 1 (kΩ y mA): G v = i
G = [[F(1) + F(1, 2) + F(1), F(-1)],
     [F(-1), F(1) + F(1)]]
assert resolver(G, [F(10), F(0)]) == [5, F(5, 2)]

# Ejemplo resuelto 4: fasores con complejos nativos de Python
I = 10 / (3 + 4j)
assert abs(abs(I) - 2) < 1e-12
assert abs(math.degrees(cmath.phase(I)) + 53.130102354) < 1e-6

# Ejemplo resuelto 5: corrección del factor de potencia a fp = 1
C = 1380 / (2 * math.pi * 50 * 230 ** 2)
assert round(C * 1e6, 1) == 83.0
```

## 11. Errores típicos

- Sumar **amplitudes** de tensiones en alterna como números: se suman los **fasores** (ejemplo 4).
- Mezclar **valores de pico y eficaces**: la potencia media con valores de pico lleva un factor $\tfrac12$
  ($P = \tfrac12 V_m I_m\cos\varphi$).
- Olvidar convertir $f$ en $\omega = 2\pi f$ al calcular $X_L$ o $X_C$.
- Apagar mal las fuentes en superposición o en $R_{\text{th}}$ (la de tensión es un **corto**, la de corriente un **abierto**),
  o apagar las fuentes **dependientes** (no se apagan).
- Superponer **potencias**.
- Signos en el análisis nodal: decidir si cada corriente «sale» o «entra» y mantenerlo en todas las ecuaciones.
- En un transitorio, usar como $R$ la resistencia de una rama y no la **de Thévenin** vista por el condensador o la bobina.
- Suponer que la tensión de un condensador o la corriente de una bobina saltan en una conmutación.

## 12. Resumen

- Nodal: KCL en cada nodo, $G\mathbf v = \mathbf i$. Mallas: KVL en cada lazo.
- Lineal $\Rightarrow$ superposición; Thévenin ($V_{\text{oc}}$, $R_{\text{th}} = V_{\text{oc}}/I_{\text{cc}}$); máxima potencia en $R_L = R_{\text{th}}$, $P = V_{\text{th}}^2/4R_{\text{th}}$.
- $i = C\,dv/dt$, $v = L\,di/dt$; primer orden: $x_\infty + (x_0 - x_\infty)e^{-t/\tau}$, $\tau = RC$ o $L/R$.
- Fasores: $Z_R = R$, $Z_L = j\omega L$, $Z_C = 1/(j\omega C)$; todo el análisis de continua vale con complejos.
- $P = V_{\text{ef}}I_{\text{ef}}\cos\varphi$, $Q$, $S$, $S^2 = P^2 + Q^2$; corrección con $\omega CV^2 = P(\tan\varphi_1 - \tan\varphi_2)$.
- Paso bajo: $f_c = 1/(2\pi RC)$, $-3$ dB, $-20$ dB/década; RLC: $f_0 = 1/(2\pi\sqrt{LC})$, $Q = \frac1R\sqrt{L/C} = f_0/\Delta f$.

## Repaso: lo que debe quedarte dentro de un mes

1. Análisis nodal paso a paso y por qué la matriz $G$ es simétrica.
2. Thévenin: tensión en vacío y resistencia con las fuentes apagadas; máxima potencia con rendimiento del $50\,\%$.
3. La forma universal del transitorio de primer orden y que $v_C$ e $i_L$ son continuas.
4. Impedancias y fasores: la bobina retrasa la corriente, el condensador la adelanta.
5. Potencia activa, reactiva y factor de potencia; filtro RC y resonancia.

## Siguiente

[[ing-circuitos]] lleva estas herramientas a los transitorios de segundo orden, los semiconductores y los amplificadores
operacionales; [[ing-senales-sistemas]] generaliza la respuesta en frecuencia con las transformadas de Fourier y Laplace.
