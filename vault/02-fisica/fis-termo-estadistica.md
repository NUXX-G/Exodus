---
id: fis-termo-estadistica
title: "Termodinámica y física estadística"
area: fisica
trunk_level: 12
prerequisites: [fis-mecanica-clasica, mat-probabilidad]
academic_sources:
  - "Reif, F. Fundamentals of Statistical and Thermal Physics. McGraw-Hill, 1965."
  - "Kardar, M. Statistical Physics of Particles. Cambridge University Press, 2007."
  - "Schroeder, D. V. An Introduction to Thermal Physics. Addison-Wesley, 2000."
  - "Callen, H. B. Thermodynamics and an Introduction to Thermostatistics, 2ª ed. Wiley, 1985."
  - "Onsager, L. Crystal Statistics. I. A Two-Dimensional Model with an Order-Disorder Transition. Physical Review 65, 1944."
ctf_flag: "sha256:1cd5d8bcbacaed65a1bbddfea0420049700020a464325eaae6c392a39db11204"
hints:
  - "(a) Todos los microestados del sistema conjunto son equiprobables: la probabilidad de un reparto q_A es Ω_A(q_A)·Ω_B(q − q_A) dividido por el total. Necesitas aritmética exacta: los números tienen más de cien cifras. (b) Son solo 2¹⁶ configuraciones: recórrelas todas, contando cada enlace una sola vez. (c) Deriva el logaritmo de C(x) e iguala a cero."
  - "(a) math.comb de Python trabaja con enteros exactos; la división final, con fractions.Fraction o escalando por 10⁹ antes de dividir. (b) Representa cada configuración como un entero de 16 bits y extrae el espín (i, j) con (s >> (4i + j)) & 1; los vecinos periódicos, con (i + 1) % 4. (c) scipy.optimize.brentq sobre x·tanh(x/2) − 2 en [1, 4]."
  - "Schroeder, §2.2–2.4 (sólido de Einstein, sistemas en contacto y el macroestado más probable), §3.3 (efecto Schottky, problema 3.23) y §8.2 (modelo de Ising). Kardar, §4.3. Documentación: docs.python.org/3/library/math.html#math.comb."
---

# Termodinámica y física estadística

La termodinámica relaciona cantidades macroscópicas, como temperatura, presión y entropía, sin
preguntarse de qué está hecha la materia. La física estadística las deduce de la mecánica de
$10^{23}$ partículas con un único postulado probabilístico. Este nodo recorre ese puente: de contar
microestados a la función de partición, que es la herramienta de cálculo de toda la física de la
materia, y también de los modelos de energía de [[ia-aprendizaje-estadistico]].

## 1. Los principios de la termodinámica

- **Principio cero.** El equilibrio térmico es transitivo, y eso permite definir la temperatura.
- **Primer principio.** $dU = \delta Q - \delta W$: la energía se conserva, y el calor es una
  forma de transferirla.
- **Segundo principio.** Existe una función de estado, la **entropía** $S$, con
  $dS \ge \delta Q / T$ e igualdad en los procesos reversibles. En un sistema aislado, $S$ no
  decrece.
- **Tercer principio.** $S \to S_0$ (una constante, cero en los sistemas sin degeneración) cuando
  $T \to 0$.

Para un sistema simple, $dU = T\,dS - P\,dV + \mu\,dN$, y en consecuencia
$\frac{1}{T} = \bigl(\frac{\partial S}{\partial U}\bigr)_{V,N}$.

**Teorema (Carnot).** Ninguna máquina térmica que opere entre focos a temperaturas $T_c > T_f$
tiene un rendimiento mayor que $\eta = 1 - T_f/T_c$.

*Demostración.* En un ciclo, $\Delta U = 0$ y la entropía total no decrece:
$-Q_c/T_c + Q_f/T_f \ge 0$, luego $Q_f/Q_c \ge T_f/T_c$ y
$\eta = 1 - Q_f/Q_c \le 1 - T_f/T_c$. $\blacksquare$

## 2. Microestados y el postulado fundamental

Un **microestado** es una especificación completa del sistema (las posiciones y momentos de todas
las partículas, o todos sus números cuánticos). Un **macroestado** fija solo unas pocas variables,
como $U$, $V$ y $N$. La **multiplicidad** $\Omega$ de un macroestado es el número de microestados
compatibles con él.

**Postulado fundamental.** En un sistema aislado en equilibrio, todos los microestados accesibles
son igualmente probables.

**Entropía de Boltzmann.** $S = k_B \ln \Omega$. Es aditiva porque las multiplicidades de
subsistemas independientes se multiplican.

*Ejemplo: sólido de Einstein.* $N$ osciladores armónicos cuánticos con $q$ cuantos de energía en
total. Un microestado es una forma de repartir $q$ objetos indistinguibles en $N$ cajas, y por el
argumento de bolas y barras,

$$
\Omega(N, q) = \binom{q + N - 1}{q} .
$$

Valor de control: $\Omega(6, 6) = \binom{11}{6} = 462$.

## 3. Equilibrio térmico como máximo de probabilidad

Dos sólidos $A$ y $B$, en contacto térmico pero aislados del exterior, comparten $q$ cuantos. El
sistema conjunto tiene $\Omega_A(q_A)\,\Omega_B(q - q_A)$ microestados con $q_A$ cuantos en $A$,
y la identidad de Vandermonde garantiza que

$$
\sum_{q_A = 0}^{q} \Omega_A(q_A)\,\Omega_B(q - q_A) = \Omega(N_A + N_B,\, q),
$$

como debe ser: es el número total de formas de repartir los $q$ cuantos entre los
$N_A + N_B$ osciladores. La probabilidad de cada reparto es su número de microestados dividido
por ese total.

**Teorema.** En el reparto más probable,
$\frac{\partial \ln\Omega_A}{\partial U_A} = \frac{\partial \ln\Omega_B}{\partial U_B}$, es decir,
$T_A = T_B$.

*Demostración.* Se maximiza $\ln\Omega_A(U_A) + \ln\Omega_B(U - U_A)$ y se iguala la derivada a
cero. $\blacksquare$

Este es el contenido microscópico del segundo principio: la distribución de probabilidad de $q_A$
tiene una anchura relativa del orden de $1/\sqrt N$. Con $N \sim 10^{23}$ el sistema está, a
efectos prácticos, siempre en el reparto más probable, y la evolución hacia él es irreversible
solo porque la vuelta atrás es inconcebiblemente improbable.

## 4. La colectividad canónica

Un sistema pequeño en contacto con un baño a temperatura $T$ intercambia energía. La probabilidad
de un microestado $s$ de energía $E_s$ es proporcional al número de microestados del baño con
energía $U_{\text{tot}} - E_s$:

$$
P(s) \propto e^{S_{\text{baño}}(U_{\text{tot}} - E_s)/k_B} \approx
e^{S_{\text{baño}}(U_{\text{tot}})/k_B}\, e^{-E_s/k_B T},
$$

desarrollando $S_{\text{baño}}$ a primer orden y usando $\partial S/\partial U = 1/T$. Con
$\beta = 1/(k_B T)$ resulta la **distribución de Boltzmann**:

$$
P(s) = \frac{e^{-\beta E_s}}{Z}, \qquad Z = \sum_s e^{-\beta E_s}.
$$

La **función de partición** $Z$ lo contiene todo:

$$
\langle E\rangle = -\frac{\partial \ln Z}{\partial \beta}, \qquad
F = -k_B T \ln Z, \qquad
C = \frac{\partial \langle E\rangle}{\partial T} = \frac{\operatorname{Var}(E)}{k_B T^2}.
$$

La última igualdad es un **teorema de fluctuación-disipación** en miniatura: la respuesta
(capacidad calorífica) es proporcional a las fluctuaciones de equilibrio. En particular $C \ge 0$.

*Demostración de la última.* $\partial_\beta \ln Z = -\langle E\rangle$ y
$\partial_\beta^2 \ln Z = \langle E^2\rangle - \langle E\rangle^2$. Como
$\partial_T = -k_B\beta^2\partial_\beta$, $C = -k_B\beta^2\,\partial_\beta\langle E\rangle =
k_B\beta^2 \operatorname{Var}(E)$. $\blacksquare$

**La colectividad macrocanónica** permite también el intercambio de partículas, con
$P(s) \propto e^{-\beta(E_s - \mu N_s)}$ y la gran función de partición
$\mathcal Z = \sum_s e^{-\beta(E_s - \mu N_s)}$. De ella salen las estadísticas cuánticas de
Fermi-Dirac y Bose-Einstein, $\langle n\rangle = 1/(e^{\beta(\varepsilon - \mu)} \pm 1)$.

## 5. Sistema de dos niveles: la anomalía de Schottky

Un sistema con dos estados de energías $0$ y $\Delta$ tiene $Z = 1 + e^{-\beta\Delta}$ y
$\langle E\rangle = \Delta/(e^{\beta\Delta} + 1)$. Con $x = \Delta/(k_B T)$,

$$
\frac{C}{k_B} = \frac{x^2 e^x}{(1 + e^x)^2} .
$$

A diferencia de un oscilador armónico, cuya capacidad crece hasta el valor clásico $k_B$, la de
un sistema de dos niveles presenta un **máximo** y vuelve a cero: a temperatura alta, ambos
niveles están igualmente poblados y no admiten más energía. Ese pico en $C(T)$ se observa en
sales paramagnéticas y delata la existencia de niveles discretos.

Valor de control: en el máximo, $C/k_B = 0{,}439228839\ldots$

## 6. El modelo de Ising

Espines $s_i \in \{-1, +1\}$ en los nudos de una red, con energía

$$
E = -J \sum_{\langle i, j\rangle} s_i s_j ,
$$

donde la suma recorre cada par de vecinos una sola vez. Con $J > 0$ los espines alineados son
favorables. En una red cuadrada de $L \times L$ con condiciones periódicas hay $2L^2$ enlaces, y
la energía va de $-2L^2 J$ (todos alineados) a $+2L^2 J$ (el tablero de ajedrez, posible si $L$
es par).

En una dimensión no hay transición de fase. En dos, Onsager (1944) calculó exactamente $Z$ en el
límite termodinámico y halló una transición a $k_B T_c / J = 2/\ln(1 + \sqrt 2) \approx 2{,}269$:
por debajo, la red se magnetiza de forma espontánea.

**Matriz de transferencia.** Para una red de $L$ filas, $Z = \operatorname{Tr}(T^L)$, con
$T_{\sigma\sigma'} = e^{-\beta E(\sigma, \sigma')}$ indexada por las $2^L$ configuraciones de una
fila. Transforma una suma sobre $2^{L^2}$ estados en $L$ productos de matrices de $2^L \times 2^L$,
y es la idea que llevó a la solución de Onsager.

Para redes diminutas, la enumeración directa da las degeneraciones exactas $g(E)$ de cada nivel,
y con ellas $Z(\beta) = \sum_E g(E) e^{-\beta E}$ para todo $\beta$ a la vez.

Valor de control: en la red de $4 \times 4$ periódica, el nivel $E = -24J$ tiene $32$
configuraciones (las que tienen un único espín invertido respecto a un estado fundamental).

## Reto

Cuatro números, todos exactos salvo el último.

- **a.** Dos sólidos de Einstein con $N_A = 300$ y $N_B = 200$ osciladores comparten $q = 100$
  cuantos. Halla el número de cuantos $q_A^*$ en $A$ del reparto más probable, y la probabilidad
  $P^*$ de ese reparto.
- **b.** En la red de Ising de $4 \times 4$ con condiciones de contorno periódicas, el número de
  configuraciones con energía $E = 0$.
- **c.** El valor $x^* = \Delta/(k_B T)$ en el que la capacidad calorífica del sistema de dos
  niveles es máxima.

Formato de la flag: `EXODUS{qA-P-g-x}`, con $q_A^*$ y $g$ como enteros, $P =
\lfloor 10^9 P^* \rfloor$ y $x = \lfloor 10^9 x^* \rfloor$.
