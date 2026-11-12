---
id: fis-termo-estadistica
title: "Termodinámica y física estadística: principios, entropía, colectividades, estadísticas cuánticas e Ising"
area: fisica
trunk_level: 12
prerequisites: [fis-mecanica-clasica, mat-probabilidad]
academic_sources:
  - "Schroeder, D. V. An Introduction to Thermal Physics. Addison-Wesley, 2000."
  - "Reif, F. Fundamentals of Statistical and Thermal Physics. McGraw-Hill, 1965."
  - "Kardar, M. Statistical Physics of Particles. Cambridge University Press, 2007."
  - "Callen, H. B. Thermodynamics and an Introduction to Thermostatistics, 2ª ed. Wiley, 1985."
  - "Onsager, L. Crystal Statistics. I. A Two-Dimensional Model with an Order-Disorder Transition. Physical Review 65, 117-149, 1944."
ctf_flag: "sha256:1cd5d8bcbacaed65a1bbddfea0420049700020a464325eaae6c392a39db11204"
hints:
  - "(a) Todos los microestados del sistema conjunto son equiprobables: la probabilidad de un reparto q_A es Ω_A(q_A)·Ω_B(q − q_A) dividido por el total. Necesitas aritmética exacta: los números tienen más de cien cifras. (b) Son solo 2¹⁶ configuraciones: recórrelas todas, contando cada enlace una sola vez. (c) Deriva el logaritmo de C(x) e iguala a cero."
  - "(a) math.comb de Python trabaja con enteros exactos; la división final, con fractions.Fraction o escalando por 10⁹ antes de dividir. (b) Representa cada configuración como un entero de 16 bits y extrae el espín (i, j) con (s >> (4i + j)) & 1; los vecinos periódicos, con (i + 1) % 4. (c) Bisección o Newton sobre x·tanh(x/2) − 2 en [1, 4]."
  - "Schroeder, §2.2–2.4 (sólido de Einstein, sistemas en contacto y el macroestado más probable), §3.3 (efecto Schottky) y §8.2 (modelo de Ising). Kardar, capítulo 4. Documentación: docs.python.org/3/library/math.html#math.comb."
exercises:
  - id: rendimiento-de-carnot
    tier: 1
    prompt: |
      ¿Cuál es el rendimiento máximo de una máquina térmica que trabaja entre un foco a $500$ K y otro a $300$ K? Respuesta: un número entre 0 y 1.
    answers: ["sha256:f3e360d89952f40d3b79d0b07dd0b94f1cbf9017cba5d2a5f8128e4146d6e3c1"]
  - id: trabajo-isotermo
    tier: 1
    prompt: |
      Un mol de gas ideal se expande de forma reversible e isoterma a $300$ K hasta duplicar su volumen. ¿Qué trabajo realiza? Usa $R = 8{,}314$ J/(mol·K). Respuesta: en julios, con **2 decimales**.
    answers: ["sha256:77770a5237e651e8886520bee5b6cb06044c75b2e1db234bd983dc3a53b6ebdd"]
  - id: entropia-al-calentar-agua
    tier: 1
    prompt: |
      ¿Cuánto aumenta la entropía de $1$ kg de agua ($c = 4186$ J/(kg·K)) al calentarla de $20\,°$C a $80\,°$C? Usa $T(\text{K}) = T(°\text{C}) + 273{,}15$. Respuesta: en J/K, con **1 decimal**.
    answers: ["sha256:fda324543bc524442c1eec6a542c7ff3bee0f8b66fd4c1e4ab4f5ea2e3bba269"]
  - id: multiplicidad-de-un-solido
    tier: 1
    prompt: |
      ¿De cuántas formas pueden repartirse $q = 5$ cuantos de energía entre $N = 4$ osciladores de un sólido de Einstein? Respuesta: un entero.
    answers: ["sha256:7688b6ef52555962d008fff894223582c484517cea7da49ee67800adc7fc8866"]
  - id: expansion-libre
    tier: 1
    prompt: |
      Un mol de gas ideal aislado se expande libremente (sin hacer trabajo) hasta el doble de volumen. ¿Cuánto aumenta su entropía? ($R = 8{,}314$.) Respuesta: en J/K, con **3 decimales**.
    answers: ["sha256:0fd860f47e0a01b7c708ca806ba6e3f4133f09ceebe040c140789b1f6677ec38"]
  - id: poblacion-relativa
    tier: 2
    prompt: |
      Dos niveles de energía están separados $0{,}1$ eV. A $300$ K, ¿cuál es el cociente entre la población del nivel superior y la del inferior? Usa $k_B = 8{,}617333\cdot10^{-5}$ eV/K. Respuesta: con **4 decimales**.
    answers: ["sha256:afcf1cdec2682bdd714a5a9dae26d53d94161ab776fbaf9c6b34690fcd10f793"]
  - id: paramagneto
    tier: 2
    prompt: |
      Un paramagneto ideal de espines $1/2$, cada uno con momento $\mu = 9{,}274\cdot10^{-24}$ J/T, está a $2$ K en un campo de $1$ T. ¿Cuánto vale la magnetización media por espín en unidades de $\mu$, $\tanh(\mu B/k_BT)$? Usa $k_B = 1{,}380649\cdot10^{-23}$ J/K. Respuesta: con **4 decimales**.
    answers: ["sha256:4a218ec99f380906025bd237161ceabb897d70dd973b22d099fd91dacac92bf7"]
  - id: reparto-entre-dos-solidos
    tier: 2
    prompt: |
      Dos sólidos de Einstein de $3$ osciladores cada uno comparten $6$ cuantos. Si todos los microestados del conjunto son equiprobables, ¿cuál es la probabilidad de que el primero tenga exactamente $2$ cuantos? Respuesta: con **4 decimales**.
    answers: ["sha256:82768717f5e5ba0bcf903c6950a08faf32337bbd9ecf91a79443df1b77297741"]
  - id: energia-de-un-oscilador
    tier: 2
    prompt: |
      Un oscilador armónico cuántico (niveles $(n + \frac12)\hbar\omega$) está en equilibrio a una temperatura con $k_BT = 2\hbar\omega$. ¿Cuánto vale su energía media en unidades de $\hbar\omega$? Respuesta: con **4 decimales**.
    answers: ["sha256:abf37d0d7692f747174512561ee506fcf3de81e2b405790f408d561a0483fa5c"]
  - id: capacidad-de-dos-niveles
    tier: 2
    prompt: |
      Un sistema de dos niveles separados $\Delta$ está a una temperatura con $\Delta/(k_BT) = 3$. ¿Cuánto vale su capacidad calorífica en unidades de $k_B$? Respuesta: con **4 decimales**.
    answers: ["sha256:f01fa8ecc2926527d5aa0e5c6b9220bfc344ec750465799a8320369069a76e1b"]
  - id: compresion-adiabatica
    tier: 2
    prompt: |
      Aire ($\gamma = 1{,}4$) a $300$ K se comprime de forma adiabática y reversible hasta $1/10$ de su volumen, como en un motor diésel. ¿A qué temperatura llega? Respuesta: en kelvin, con **1 decimal**.
    answers: ["sha256:482e1fae0cb9deba8995b2d06bf92cfc467863cbefb5247656fe13eb4fc03d01"]
  - id: velocidades-moleculares
    tier: 3
    prompt: |
      Para el nitrógeno ($m = 28$ u, con $1$ u $= 1{,}66054\cdot10^{-27}$ kg) a $300$ K, ¿cuánto valen la velocidad cuadrática media $\sqrt{\langle v^2\rangle}$ y la velocidad media $\langle v\rangle$ de la distribución de Maxwell? ($k_B = 1{,}380649\cdot10^{-23}$ J/K.) Respuesta: `vrms;vmedia`, en m/s redondeadas a enteros.
    answers: ["sha256:1ba17cbee722af57281f5fe5628aaeff1435dd38daa55c0a5ffdbba7bdf69918"]
  - id: ocupacion-de-fermi
    tier: 3
    prompt: |
      ¿Cuál es la ocupación media de un estado electrónico que está $0{,}05$ eV por encima del potencial químico a $300$ K? ($k_B = 8{,}617333\cdot10^{-5}$ eV/K.) Respuesta: con **4 decimales**.
    answers: ["sha256:a2426cd7f7c344f12abde1f1ad3937abfba58991127b4522a0eab898d0c2b06c"]
  - id: cadena-de-ising
    tier: 3
    prompt: |
      Una cadena de Ising cerrada en anillo tiene $N = 10$ espines, $E = -J\sum_i s_is_{i+1}$, y está a una temperatura con $\beta J = 0{,}5$. Con la matriz de transferencia, $Z = (2\cosh\beta J)^N + (2\sinh\beta J)^N$. ¿Cuánto vale la energía media por espín en unidades de $J$? Respuesta: con **4 decimales** (negativa).
    answers: ["sha256:412bc30f46f52f9bab54ad53ef07b86b13b9c727b51337b2bf10d5261ddba684"]
  - id: entropia-de-monedas
    tier: 3
    prompt: |
      Se lanzan $100$ monedas. ¿Cuánto vale $\ln\Omega$ para el macroestado «$60$ caras», es decir, $\ln\binom{100}{60}$? Calcúlalo exactamente, no con Stirling. Respuesta: con **2 decimales**.
    answers: ["sha256:6ad4ed999bb353dfa1a75a4211dac766c16397c269b1989c9046db4840289299"]
  - id: pico-de-wien
    tier: 3
    prompt: |
      ¿A qué longitud de onda emite con máxima intensidad (por unidad de longitud de onda) un cuerpo negro a $5772$ K, la temperatura efectiva del Sol? Usa la constante de Wien $b = 2{,}897771955\cdot10^{-3}$ m·K. Respuesta: en nanómetros, con **1 decimal**.
    answers: ["sha256:5344c4110f483793dc352c388e67776724c36b4bea3ffda6cab7c75b9c65aceb"]
---

# Termodinámica y física estadística: principios, entropía, colectividades, estadísticas cuánticas e Ising

La termodinámica relaciona cantidades macroscópicas, como temperatura, presión y entropía, sin preguntarse de qué está hecha la materia, y
pone límites que ninguna máquina puede superar. La física estadística las **deduce** de la mecánica de $10^{23}$ partículas con un único postulado
probabilístico. Este nodo recorre ese puente: de los principios y los motores a contar microestados, y de ahí a la función de partición, que es
la herramienta de cálculo de toda la física de la materia, de los semiconductores y de los modelos de energía de [[ia-aprendizaje-estadistico]].

## Objetivos

Al terminar sabrás:

1. Aplicar el primer principio a procesos de un gas ideal (isotermos, adiabáticos) y calcular trabajo y calor.
2. Usar el segundo principio: entropía, rendimiento de Carnot, procesos irreversibles.
3. Contar microestados, calcular la entropía de Boltzmann y explicar el equilibrio térmico como el macroestado más probable.
4. Usar la distribución de Boltzmann y la función de partición para obtener energía, capacidad calorífica y fluctuaciones.
5. Aplicar equipartición, la distribución de velocidades de Maxwell y el oscilador cuántico.
6. Usar las estadísticas de Fermi-Dirac y Bose-Einstein y la ley de Planck del cuerpo negro.
7. Plantear el modelo de Ising y resolverlo en una dimensión con la matriz de transferencia.

## Qué debes dominar antes

[[fis-ondas-calor-fluidos]] (temperatura, calor, gas ideal), [[mat-probabilidad]] (distribuciones, esperanza, varianza, combinatoria) y
[[fis-mecanica-clasica]] (hamiltoniano, espacio de fases).

> [!question] Test de entrada
> 1. ¿Cuántos subconjuntos de $3$ elementos tiene un conjunto de $8$?
> 2. ¿Qué presión ejerce $1$ mol de gas ideal a $300$ K en $0{,}0249$ m$^3$ ($R = 8{,}314$)?
> 3. Si $X$ vale $0$ o $1$ con probabilidad $\frac12$, ¿cuál es su varianza?
>
> Respuestas: $\binom83 = 56$; $PV = nRT$ da unos $10^5$ Pa ($1$ bar); $\frac14$.

## 1. Para qué sirve

- **Ingeniería energética**: motores, turbinas, frigoríficos y bombas de calor están limitados por el rendimiento de Carnot.
- **Química y materiales**: equilibrio químico, cambios de fase, capacidades caloríficas, imanes.
- **Electrónica**: la estadística de Fermi-Dirac gobierna los electrones en los semiconductores (diodos, transistores) y el ruido térmico.
- **Astrofísica y clima**: la radiación de cuerpo negro da la temperatura de las estrellas y el balance energético de la Tierra.
- **Computación e IA**: la distribución de Boltzmann es la *softmax*; el recocido simulado, las máquinas de Boltzmann y los modelos basados en
  energía vienen directamente de este nodo, y la entropía de Shannon es la de Boltzmann con otra constante.

## 2. Primer principio y procesos del gas ideal

Un sistema en equilibrio queda descrito por pocas variables de estado: $P$, $V$, $T$, $N$. El **gas ideal** cumple $PV = nRT = Nk_BT$, con
$R = 8{,}314$ J/(mol·K) y $k_B = R/N_A = 1{,}380649\cdot10^{-23}$ J/K. Su energía interna solo depende de $T$: $U = \frac f2 nRT$, con $f = 3$ grados de
libertad para un gas monoatómico y $f = 5$ para uno diatómico a temperatura ambiente.

**Primer principio.** $dU = \delta Q - \delta W$, con $\delta W = P\,dV$ el trabajo que hace el sistema. El calor y el trabajo dependen del camino; $U$ no.

- **Isotermo** ($T$ constante): $\Delta U = 0$, $W = Q = nRT\ln\frac{V_2}{V_1}$.
- **Adiabático** ($Q = 0$) y reversible: $PV^\gamma$ y $TV^{\gamma-1}$ constantes, con $\gamma = C_P/C_V = \frac{f + 2}{f}$ ($\frac53$ monoatómico, $1{,}4$ diatómico).
  Comprimir calienta: así se enciende el combustible en un motor diésel, sin bujía.

> [!example] Ejemplo resuelto 1: isoterma frente a adiabática
> Dos moles de gas monoatómico a $400$ K se expanden de $10$ L a $30$ L. Si es isoterma, $W = nRT\ln3 = 2\cdot8{,}314\cdot400\cdot1{,}0986 \approx 7308$ J, y
> entra exactamente ese calor. Si es adiabática, $T_2 = 400\cdot(10/30)^{2/3} \approx 192$ K: el gas hace trabajo a costa de su energía interna,
> $W = -\Delta U = \frac32nR(400 - 192) \approx 5180$ J, menos que en la isoterma porque la presión cae más deprisa.

## 3. Segundo principio y entropía

**Segundo principio.** Existe una función de estado, la **entropía** $S$, con $dS \ge \delta Q/T$ e igualdad en los procesos reversibles. En un
sistema aislado, $S$ no decrece. Para calcular $\Delta S$ entre dos estados se elige **cualquier camino reversible** que los una, aunque el proceso real
no lo sea.

**Teorema (Carnot).** Ninguna máquina térmica que opere entre focos a temperaturas $T_c > T_f$ tiene un rendimiento mayor que $\eta = 1 - T_f/T_c$.

*Demostración.* En un ciclo, $\Delta U = 0$ y la entropía total (máquina más focos) no decrece: $-Q_c/T_c + Q_f/T_f \ge 0$, luego $Q_f/Q_c \ge T_f/T_c$ y
$\eta = 1 - Q_f/Q_c \le 1 - T_f/T_c$. $\blacksquare$

El ciclo de Carnot (dos isotermas y dos adiabáticas reversibles) alcanza ese límite. Un frigorífico es la máquina al revés; su eficiencia
máxima es $\frac{T_f}{T_c - T_f}$: entre $0\,°$C y $30\,°$C, unos $9$ julios de calor extraídos por cada julio de trabajo.

> [!example] Ejemplo resuelto 2: entropía de procesos reales
> **Fusión.** Fundir $1$ kg de hielo a $0\,°$C ($L = 334$ kJ/kg) es reversible a temperatura constante: $\Delta S = Q/T = 334\,000/273{,}15 \approx 1223$ J/K.
> **Calentamiento.** Calentar una masa $m$ de calor específico $c$ de $T_1$ a $T_2$: por el camino reversible, $dS = mc\,dT/T$, así que
> $\Delta S = mc\ln(T_2/T_1)$; la temperatura va siempre en kelvin.
> **Expansión libre.** Un gas que se expande al vacío no intercambia calor ni trabajo, y $T$ no cambia; pero la entropía sí aumenta. Calcúlala tú
> con el camino reversible isotermo entre los mismos estados: $\Delta S = nR\ln(V_2/V_1)$.

**Potenciales termodinámicos.** De $dU = T\,dS - P\,dV + \mu\,dN$ salen la **energía libre de Helmholtz** $F = U - TS$ (mínima en equilibrio a $T$ y
$V$ fijos) y la de **Gibbs** $G = U - TS + PV$ (mínima a $T$ y $P$ fijos, la que usa la química). La temperatura es
$\frac1T = \bigl(\frac{\partial S}{\partial U}\bigr)_{V,N}$.

## 4. Microestados y entropía de Boltzmann

Un **microestado** es una especificación completa del sistema (las posiciones y momentos de todas las partículas, o todos sus números
cuánticos). Un **macroestado** fija solo unas pocas variables, como $U$, $V$ y $N$. La **multiplicidad** $\Omega$ de un macroestado es el número de
microestados compatibles con él.

**Postulado fundamental.** En un sistema aislado en equilibrio, todos los microestados accesibles son igualmente probables.

**Entropía de Boltzmann.** $S = k_B\ln\Omega$. Es aditiva porque las multiplicidades de subsistemas independientes se multiplican.

*Monedas.* Para $N$ monedas, el macroestado «$k$ caras» tiene $\Omega = \binom Nk$. Con la **aproximación de Stirling**,
$\ln N! \approx N\ln N - N$, resulta $\ln\binom Nk \approx N\,H(k/N)$ con $H(p) = -p\ln p - (1 - p)\ln(1 - p)$: la entropía de Shannon. Para
$N = 100$ el error relativo de esa aproximación es todavía de algunos por ciento; para $N = 10^{23}$ es irrelevante.

*Sólido de Einstein.* $N$ osciladores armónicos cuánticos con $q$ cuantos de energía en total. Un microestado es una forma de repartir $q$ objetos
indistinguibles en $N$ cajas, y por el argumento de bolas y barras,

$$
\Omega(N, q) = \binom{q + N - 1}{q} .
$$

> [!example] Ejemplo resuelto 3: contar a mano
> $N = 3$ osciladores, $q = 3$ cuantos. Los repartos son $(3,0,0)$ y sus permutaciones ($3$), $(2,1,0)$ y sus permutaciones ($6$) y $(1,1,1)$ ($1$):
> en total $10 = \binom53$. Valor de control más grande: $\Omega(6, 6) = \binom{11}{6} = 462$.

## 5. Equilibrio térmico como máximo de probabilidad

Dos sólidos $A$ y $B$, en contacto térmico pero aislados del exterior, comparten $q$ cuantos. El sistema conjunto tiene
$\Omega_A(q_A)\,\Omega_B(q - q_A)$ microestados con $q_A$ cuantos en $A$, y la identidad de Vandermonde garantiza que

$$
\sum_{q_A = 0}^{q} \Omega_A(q_A)\,\Omega_B(q - q_A) = \Omega(N_A + N_B,\, q),
$$

como debe ser: es el número total de formas de repartir los $q$ cuantos entre los $N_A + N_B$ osciladores. La probabilidad de cada reparto es
su número de microestados dividido por ese total.

> [!example] Ejemplo resuelto 4: dos sólidos diminutos (con menos ayuda)
> $N_A = N_B = 3$ y $q = 4$: el total es $\Omega(6, 4) = \binom94 = 126$. El reparto $q_A = 2$ tiene $\Omega(3,2)^2 = 6^2 = 36$ microestados, con probabilidad
> $36/126 \approx 0{,}286$. Calcula tú los demás repartos y comprueba que suman $126$ y que el más probable es el equitativo.

**Teorema.** En el reparto más probable, $\frac{\partial\ln\Omega_A}{\partial U_A} = \frac{\partial\ln\Omega_B}{\partial U_B}$, es decir, $T_A = T_B$.

*Demostración.* Se maximiza $\ln\Omega_A(U_A) + \ln\Omega_B(U - U_A)$ y se iguala la derivada a cero. $\blacksquare$

Este es el contenido microscópico del segundo principio: la distribución de $q_A$ tiene una anchura relativa del orden de $1/\sqrt N$. Con
$N \sim 10^{23}$ el sistema está, a efectos prácticos, siempre en el reparto más probable, y la evolución hacia él es irreversible solo porque la
vuelta atrás es inconcebiblemente improbable.

## 6. La colectividad canónica

Un sistema pequeño en contacto con un baño a temperatura $T$ intercambia energía. La probabilidad de un microestado $s$ de energía $E_s$ es
proporcional al número de microestados del baño con energía $U_{\text{tot}} - E_s$:

$$
P(s) \propto e^{S_{\text{baño}}(U_{\text{tot}} - E_s)/k_B} \approx e^{S_{\text{baño}}(U_{\text{tot}})/k_B}\, e^{-E_s/k_BT},
$$

desarrollando $S_{\text{baño}}$ a primer orden y usando $\partial S/\partial U = 1/T$. Con $\beta = 1/(k_BT)$ resulta la **distribución de Boltzmann**:

$$
P(s) = \frac{e^{-\beta E_s}}{Z}, \qquad Z = \sum_s e^{-\beta E_s}.
$$

La **función de partición** $Z$ lo contiene todo:

$$
\langle E\rangle = -\frac{\partial\ln Z}{\partial\beta}, \qquad F = -k_BT\ln Z, \qquad C = \frac{\partial\langle E\rangle}{\partial T} = \frac{\operatorname{Var}(E)}{k_BT^2}.
$$

La última igualdad es un **teorema de fluctuación-disipación** en miniatura: la respuesta (capacidad calorífica) es proporcional a las
fluctuaciones de equilibrio. En particular $C \ge 0$.

*Demostración de la última.* $\partial_\beta\ln Z = -\langle E\rangle$ y $\partial_\beta^2\ln Z = \langle E^2\rangle - \langle E\rangle^2$. Como $\partial_T = -k_B\beta^2\partial_\beta$,
$C = -k_B\beta^2\,\partial_\beta\langle E\rangle = k_B\beta^2\operatorname{Var}(E)$. $\blacksquare$

**Dos niveles y la anomalía de Schottky.** Con energías $0$ y $\Delta$, $Z = 1 + e^{-\beta\Delta}$, la población relativa es
$\frac{P_1}{P_0} = e^{-\Delta/k_BT}$ y, con $x = \Delta/(k_BT)$,

$$
\frac{C}{k_B} = \frac{x^2e^x}{(1 + e^x)^2} .
$$

A diferencia de un oscilador, la capacidad presenta un **máximo** y vuelve a cero: a temperatura alta ambos niveles están igualmente poblados y no
admiten más energía. Ese pico delata niveles discretos (sales paramagnéticas). Valor de control: en el máximo, $C/k_B = 0{,}439228839\ldots$

> [!example] Ejemplo resuelto 5: el paramagneto ideal
> Un espín $\frac12$ con momento $\mu$ en un campo $B$ tiene dos estados, $\mp\mu B$. $Z = e^{\beta\mu B} + e^{-\beta\mu B} = 2\cosh(\beta\mu B)$ y el momento
> medio es $\langle m\rangle = \mu\tanh(\beta\mu B)$. A temperatura alta, $\tanh x \approx x$ y $\langle m\rangle \approx \mu^2B/(k_BT)$: la **ley de Curie**
> (la susceptibilidad cae como $1/T$). A temperatura baja todos los espines se alinean y la magnetización se satura.

## 7. Equipartición, Maxwell y el oscilador cuántico

**Teorema de equipartición.** En equilibrio clásico, cada término cuadrático del hamiltoniano ($\frac{p^2}{2m}$, $\frac12kx^2$) aporta $\frac12k_BT$ a la
energía media. Un gas monoatómico tiene $\frac32k_BT$ por partícula; un sólido clásico, $3k_BT$ por átomo (ley de Dulong-Petit).

**Distribución de Maxwell.** La de velocidades de un gas ideal es

$$
f(v) = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 e^{-mv^2/(2k_BT)},
$$

con velocidad más probable $\sqrt{2k_BT/m}$, media $\sqrt{8k_BT/(\pi m)}$ y cuadrática media $\sqrt{3k_BT/m}$ (por equipartición). Las moléculas del aire
van a cientos de metros por segundo, del orden de la velocidad del sonido.

**Oscilador cuántico.** Con niveles $(n + \frac12)\hbar\omega$, la suma geométrica da
$\langle E\rangle = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}$. Si $k_BT \gg \hbar\omega$, $\langle E\rangle \approx k_BT$ (equipartición); si
$k_BT \ll \hbar\omega$, el oscilador se **congela** en su estado fundamental. Por eso las vibraciones de las moléculas diatómicas no cuentan a
temperatura ambiente ($f = 5$, no $7$), y la capacidad de los sólidos cae a baja temperatura: el problema que resolvió Einstein en 1907.

## 8. Estadísticas cuánticas y cuerpo negro

**La colectividad macrocanónica** permite intercambiar partículas con un baño de potencial químico $\mu$: $P(s) \propto e^{-\beta(E_s - \mu N_s)}$. Para
un único estado de energía $\varepsilon$ que puede ocuparse por partículas idénticas, la ocupación media es

$$
\langle n\rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1}\ \ \text{(Fermi-Dirac)}, \qquad \langle n\rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} - 1}\ \ \text{(Bose-Einstein)} .
$$

Los **fermiones** (electrones) no pueden compartir estado: la ocupación es $\frac12$ en $\varepsilon = \mu$ y pasa de $1$ a $0$ en una franja de unos
pocos $k_BT$ ($k_BT \approx 0{,}0259$ eV a $300$ K). Eso explica los metales y los semiconductores. Los **bosones** (fotones, fonones) pueden
acumularse; con fotones, $\mu = 0$.

**Cuerpo negro.** Contando los modos del campo electromagnético en una caja y ocupándolos con Bose-Einstein se obtiene la ley de Planck,
$B_\lambda(T) = \frac{2hc^2}{\lambda^5}\frac{1}{e^{hc/(\lambda k_BT)} - 1}$. De ella salen la **ley de Wien**, $\lambda_{\max}T = b = 2{,}897771955\cdot10^{-3}$ m·K, y la
de **Stefan-Boltzmann**, potencia emitida por unidad de área $\sigma T^4$ con $\sigma \approx 5{,}670\cdot10^{-8}$ W/(m$^2$·K$^4$). El cuerpo humano
($310$ K) emite con máximo hacia $9{,}3$ μm, en el infrarrojo: lo que ven las cámaras térmicas.

## 9. El modelo de Ising

Espines $s_i \in \{-1, +1\}$ en los nudos de una red, con energía

$$
E = -J\sum_{\langle i, j\rangle} s_is_j ,
$$

donde la suma recorre cada par de vecinos una sola vez. Con $J > 0$ los espines alineados son favorables. En una red cuadrada de $L\times L$ con
condiciones periódicas hay $2L^2$ enlaces, y la energía va de $-2L^2J$ (todos alineados) a $+2L^2J$ (el tablero de ajedrez, posible si $L$ es par).

**Matriz de transferencia en una dimensión.** Para un anillo de $N$ espines, $Z = \sum_{s}\prod_i e^{\beta Js_is_{i+1}} = \operatorname{Tr}(T^N)$ con
$T = \begin{pmatrix} e^{\beta J} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J} \end{pmatrix}$, cuyos autovalores son $2\cosh\beta J$ y $2\sinh\beta J$. Así
$Z = (2\cosh\beta J)^N + (2\sinh\beta J)^N$, y para $N \to \infty$ la energía por espín es $-J\tanh\beta J$: una función suave de $T$. **En una dimensión no
hay transición de fase.**

En dos, Onsager (1944) calculó exactamente $Z$ en el límite termodinámico y halló una transición a $k_BT_c/J = 2/\ln(1 + \sqrt2) \approx 2{,}269$: por
debajo, la red se magnetiza de forma espontánea. Su método generaliza la matriz de transferencia: para una red de $L$ filas,
$Z = \operatorname{Tr}(T^L)$ con $T$ indexada por las $2^L$ configuraciones de una fila. Para redes diminutas, la enumeración directa da las
degeneraciones exactas $g(E)$ de cada nivel, y con ellas $Z(\beta) = \sum_E g(E)e^{-\beta E}$ para todo $\beta$ a la vez. Valor de control: en la red de
$4\times4$ periódica, el nivel $E = -24J$ tiene $32$ configuraciones (las que tienen un único espín invertido respecto a un estado fundamental).

## 10. Comprobar con un programa

Cada idea del nodo se puede contrastar contando: la anchura del reparto entre dos sólidos cae como $1/\sqrt N$; un oscilador en contacto con un
sólido grande sigue la distribución de Boltzmann; la matriz de transferencia coincide con la suma sobre todas las configuraciones; y la ley de
Wien sale de maximizar Planck.

```python
import math

def omega(N, q):
    return math.comb(q + N - 1, q)

# 1. Dos sólidos iguales con q = N: la anchura relativa de q_A cae como 1/√N (multiplicar N por 10 la divide por ≈ √10).
def anchura_relativa(N):
    q = N
    pesos = [omega(N, qa) * omega(N, q - qa) for qa in range(q + 1)]
    total = sum(pesos)
    assert total == omega(2 * N, q)  # Vandermonde
    probs = [w / total for w in pesos]  # int / int da un float bien redondeado aunque los enteros sean enormes
    media = sum(qa * p for qa, p in enumerate(probs))
    var = sum((qa - media) ** 2 * p for qa, p in enumerate(probs))
    return math.sqrt(var) / media

r10, r100, r1000 = anchura_relativa(10), anchura_relativa(100), anchura_relativa(1000)
assert 2.8 < r10 / r100 < 3.6 and 2.8 < r100 / r1000 < 3.6

# 2. Boltzmann desde la cuenta: un oscilador en contacto con un sólido de 2000 osciladores que comparten 1000 cuantos.
N, q = 2000, 1000
P = [omega(N, q - n) for n in range(6)]  # microestados del baño si el oscilador tiene n cuantos
cocientes = [P[n + 1] / P[n] for n in range(5)]
beta_eps = math.log((q + N) / q)  # 1/kT del sólido grande: d ln Ω / dq ≈ ln((q + N)/q)
assert all(abs(c - math.exp(-beta_eps)) < 0.01 for c in cocientes)
print("P(n+1)/P(n):", [round(c, 4) for c in cocientes], "≈ e^(−βε) =", round(math.exp(-beta_eps), 4))

# 3. Ising en un anillo de 8 espines con βJ = 0,3: matriz de transferencia frente a las 2⁸ configuraciones.
Nr, bJ = 8, 0.3
Z_tm = (2 * math.cosh(bJ)) ** Nr + (2 * math.sinh(bJ)) ** Nr
Z_bf = 0.0
for s in range(1 << Nr):
    espines = [1 if (s >> i) & 1 else -1 for i in range(Nr)]
    E = -sum(espines[i] * espines[(i + 1) % Nr] for i in range(Nr))
    Z_bf += math.exp(-bJ * E)
assert abs(Z_tm - Z_bf) < 1e-9 * Z_bf

# 4. Stirling: el error relativo de N ln N − N frente a ln N! decrece con N.
for n, tope in ((10, 0.15), (100, 0.01), (1000, 0.001)):
    exacto = math.lgamma(n + 1)
    assert abs((n * math.log(n) - n) - exacto) / exacto < tope

# 5. Wien: el máximo de Planck a 310 K, buscado numéricamente, está en b/T.
h, c, k = 6.62607015e-34, 299792458, 1.380649e-23
planck = lambda lam, T: 1 / (lam ** 5 * (math.exp(h * c / (lam * k * T)) - 1))
lams = [i * 1e-9 for i in range(2000, 30000)]
pico = max(lams, key=lambda lam: planck(lam, 310))
assert abs(pico - 2.897771955e-3 / 310) < 1e-9
print(f"Pico a 310 K: {pico * 1e6:.2f} μm")
```

## 11. Errores típicos

- Usar grados Celsius en $\ln(T_2/T_1)$, en $\eta = 1 - T_f/T_c$ o en $e^{-E/k_BT}$: siempre kelvin.
- Confundir el signo del trabajo: aquí $W$ es el que hace el sistema ($dU = \delta Q - \delta W$); muchos textos de química usan el convenio contrario.
- Calcular $\Delta S$ de un proceso irreversible con $\int\delta Q/T$ del proceso real (en la expansión libre $Q = 0$, pero $\Delta S > 0$): hay que usar
  un camino reversible entre los mismos estados.
- Contar como distintos los cuantos de energía (son indistinguibles) o los osciladores como indistinguibles (están localizados: son distintos).
- Aplicar Stirling con $N$ pequeño, o usar coma flotante donde los números tienen cientos de cifras.
- Contar dos veces cada enlace en Ising, o olvidar los enlaces periódicos.
- Aplicar equipartición a grados de libertad congelados ($k_BT \ll \hbar\omega$).
- Confundir $k_B$ en J/K con $k_B$ en eV/K ($8{,}617\cdot10^{-5}$).

## 12. Resumen

- Primer principio $dU = \delta Q - \delta W$; isoterma $W = nRT\ln(V_2/V_1)$; adiabática $TV^{\gamma-1}$ constante.
- Segundo principio: $dS \ge \delta Q/T$; Carnot $\eta \le 1 - T_f/T_c$; $\Delta S$ por un camino reversible.
- $S = k_B\ln\Omega$; sólido de Einstein $\Omega = \binom{q + N - 1}{q}$; equilibrio = macroestado más probable, anchura $\sim 1/\sqrt N$.
- Canónica: $P = e^{-\beta E}/Z$; $\langle E\rangle = -\partial_\beta\ln Z$; $C = \operatorname{Var}(E)/(k_BT^2)$; dos niveles y Schottky; paramagneto $\tanh$.
- Equipartición $\frac12k_BT$ por término cuadrático; Maxwell; oscilador cuántico y congelación.
- Fermi-Dirac $1/(e^{\beta(\varepsilon-\mu)} + 1)$, Bose-Einstein $1/(e^{\beta(\varepsilon-\mu)} - 1)$; Planck, Wien, Stefan-Boltzmann.
- Ising: matriz de transferencia, sin transición en 1D; Onsager en 2D.

## Reto

Cuatro números, todos exactos salvo el último.

- **a.** Dos sólidos de Einstein con $N_A = 300$ y $N_B = 200$ osciladores comparten $q = 100$ cuantos. Halla el número de cuantos $q_A^*$ en $A$ del
  reparto más probable, y la probabilidad $P^*$ de ese reparto.
- **b.** En la red de Ising de $4\times4$ con condiciones de contorno periódicas, el número de configuraciones con energía $E = 0$.
- **c.** El valor $x^* = \Delta/(k_BT)$ en el que la capacidad calorífica del sistema de dos niveles es máxima.

Formato de la flag: `EXODUS{qA-P-g-x}`, con $q_A^*$ y $g$ como enteros, $P = \lfloor 10^9P^*\rfloor$ y $x = \lfloor 10^9x^*\rfloor$.

## Repaso: lo que debe quedarte dentro de un mes

1. El calor y el trabajo dependen del camino; $U$ y $S$ no.
2. Ninguna máquina supera $1 - T_f/T_c$, y la temperatura va en kelvin.
3. $S = k_B\ln\Omega$: la entropía cuenta microestados, y el equilibrio es el macroestado con más.
4. $P \propto e^{-E/k_BT}$, y todo sale de $Z$.
5. Fermiones: como mucho uno por estado; bosones: sin límite. De ahí metales, semiconductores y el cuerpo negro.

## Siguiente

[[fis-mecanica-cuantica]] da los niveles de energía que aquí se ocupan; [[ia-aprendizaje-estadistico]] usa Boltzmann, la entropía y la energía libre
en modelos probabilísticos; en las ramas, física del estado sólido, transiciones de fase y grupo de renormalización, simulación de Monte Carlo y
termodinámica técnica.
