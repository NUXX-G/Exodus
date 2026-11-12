---
id: rob-control
title: "Teoría de control"
area: robotica
trunk_level: 11
prerequisites: [ing-senales-sistemas]
academic_sources:
  - "Åström, K. J.; Murray, R. M. Feedback Systems: An Introduction for Scientists and Engineers, 2ª ed. Princeton University Press, 2021."
  - "Ogata, K. Modern Control Engineering, 5ª ed. Prentice Hall, 2010."
  - "Franklin, G. F.; Powell, J. D.; Emami-Naeini, A. Feedback Control of Dynamic Systems, 8ª ed. Pearson, 2019."
  - "Anderson, B. D. O.; Moore, J. B. Optimal Control: Linear Quadratic Methods. Prentice Hall, 1990."
  - "Kleinman, D. L. On an Iterative Technique for Riccati Equation Computations. IEEE Transactions on Automatic Control 13(1), 1968."
ctf_flag: "sha256:6cf4b603f954796e837f06c68bc2d688263e031fde4339bbb59bd5877f4a6e60"
hints:
  - "(a) Primero la frecuencia de cruce, donde |L(jω)| = 1; después la fase en ella. Elevando al cuadrado, la condición de cruce es un polinomio en ω². (b) El lazo cerrado es T = L/(1 + L). Su respuesta a escalón tiene un primer máximo donde la derivada se anula por primera vez. (c) Escribe P simétrica con tres incógnitas y desarrolla la ecuación de Riccati componente a componente."
  - "(a) numpy.roots para la cúbica en u = ω², o scipy.optimize.brentq sobre |L(jω)| − 1; numpy.angle para la fase. (b) scipy.signal.step con una malla fina para localizar el pico, y después refina con la expresión analítica obtenida por residuos (scipy.signal.residue). (c) scipy.linalg.solve_continuous_are(A, B, Q, R) y K = R⁻¹BᵀP."
  - "Åström & Murray, §10.3 (márgenes de estabilidad), §5.3 (respuesta a escalón) y §7.5 (regulador lineal cuadrático). Ogata, §5.6 (criterio de Routh) y §7.6. Documentación: docs.scipy.org, scipy.signal y scipy.linalg.solve_continuous_are."
---

# Teoría de control

La realimentación consiste en medir lo que pasa, compararlo con lo que se quiere y actuar sobre
la diferencia. Hace robusto un sistema impreciso, estabiliza uno inestable y lo vuelve rápido,
pero también puede desestabilizar uno estable. Este nodo da las herramientas para predecir cuál
de esas cosas ocurrirá, primero en frecuencia, con la transformada de Laplace de
[[ing-senales-sistemas]], y después en el espacio de estados.

## 1. El lazo de realimentación

Una planta $G(s)$ y un controlador $C(s)$ en lazo cerrado con realimentación unitaria. Con
$L = CG$, la **ganancia de lazo**, la salida responde a la referencia $r$ y a una perturbación $d$
a la salida según

$$
Y = \underbrace{\frac{L}{1 + L}}_{T}\,R + \underbrace{\frac{1}{1 + L}}_{S}\,D, \qquad S + T = 1 .
$$

Donde $|L| \gg 1$, $T \approx 1$ (seguimiento) y $S \approx 0$ (rechazo de perturbaciones), y además
$T$ apenas depende de los errores de modelado de $G$: la **sensibilidad** de $T$ a $G$ es
$\frac{dT/T}{dG/G} = S$. Esa es la razón de ser de la realimentación. El precio es que el lazo
puede volverse inestable.

## 2. Estabilidad

Un sistema lineal con función de transferencia racional es **BIBO-estable** (entrada acotada,
salida acotada) si y solo si todos sus polos tienen parte real negativa. Los polos del lazo
cerrado son las raíces del polinomio característico $1 + L(s) = 0$.

**Criterio de Routh-Hurwitz.** Decide cuántas raíces de un polinomio real tiene el semiplano
derecho sin calcularlas: es el número de cambios de signo en la primera columna de la tabla de
Routh. Para una cúbica $s^3 + a_2 s^2 + a_1 s + a_0$, todas las raíces están en el semiplano
izquierdo si y solo si $a_2, a_1, a_0 > 0$ y $a_2 a_1 > a_0$.

Valor de control: con $L = K/(s(s+1)(s+2))$, el polinomio $s^3 + 3s^2 + 2s + K$ es estable para
$0 < K < 6$, y en $K = 6$ el lazo oscila a $\omega = \sqrt2$.

**Criterio de Nyquist.** Si $L$ no tiene polos en el semiplano derecho, el lazo cerrado es estable
si y solo si la curva $L(j\omega)$, para $\omega \in \mathbb R$, no rodea el punto $-1$. Es una
consecuencia del principio del argumento: cada cero de $1 + L$ en el semiplano derecho añade una
vuelta alrededor de $-1$.

**Márgenes.** La distancia al punto $-1$ mide la robustez.

- **Margen de fase.** En la frecuencia de cruce $\omega_c$, donde $|L(j\omega_c)| = 1$,
  $\mathrm{PM} = 180° + \angle L(j\omega_c)$. Es el retraso de fase adicional que el lazo admite
  antes de volverse inestable.
- **Margen de ganancia.** En la frecuencia $\omega_{180}$, donde $\angle L = -180°$,
  $\mathrm{GM} = 1/|L(j\omega_{180})|$.

Un margen de fase de entre $45°$ y $60°$ es un objetivo de diseño habitual. Un retardo puro
$e^{-s\tau}$ resta $\omega_c\tau$ radianes de fase sin cambiar el módulo: por eso los retardos de
comunicación y de cómputo limitan el ancho de banda alcanzable.

## 3. Respuesta temporal

Un sistema de segundo orden $\frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}$ con
$0 < \zeta < 1$ responde a un escalón con un **sobreimpulso**

$$
M_p = \exp\!\Bigl(-\frac{\pi\zeta}{\sqrt{1 - \zeta^2}}\Bigr)
$$

en el instante $t_p = \pi/(\omega_n\sqrt{1 - \zeta^2})$. En un sistema de orden mayor no hay
fórmula cerrada, pero el método es el mismo: la respuesta a escalón es la transformada inversa de
$T(s)/s$, que por **residuos** vale

$$
y(t) = T(0) + \sum_k \frac{N(p_k)}{p_k\,D'(p_k)}\,e^{p_k t},
$$

para $T = N/D$ con polos simples $p_k$. El pico es el primer cero positivo de $\dot y$. Los polos
complejos dominantes, los más cercanos al eje imaginario, fijan la forma de la respuesta, y el
margen de fase se relaciona aproximadamente con el amortiguamiento por
$\zeta \approx \mathrm{PM}/100$ (con el margen en grados).

## 4. PID

$$
u(t) = K_p\, e(t) + K_i \int_0^t e\,d\tau + K_d\,\dot e(t) .
$$

- La acción **proporcional** reduce el error, pero no lo anula frente a una perturbación
  constante.
- La **integral** anula el error en régimen permanente frente a escalones: si el lazo es estable
  y $u$ converge, la integral solo converge si $e \to 0$.
- La **derivativa** añade amortiguamiento, porque anticipa el error. En la práctica se filtra,
  $K_d s/(1 + s T_f)$, para no amplificar el ruido.

Dos detalles de implementación separan un PID de libro de uno que funciona: la protección
**antiwindup** (congelar la integral cuando el actuador se satura) y derivar la medida en lugar
del error, para que un salto de referencia no produzca un pico de mando.

## 5. Espacio de estados

$$
\dot x = A x + B u, \qquad y = C x .
$$

Los polos son los autovalores de $A$, y la función de transferencia es
$G(s) = C(sI - A)^{-1}B$.

**Controlabilidad.** El par $(A, B)$ es controlable si y solo si la matriz
$\mathcal C = [B,\ AB,\ \dots,\ A^{n-1}B]$ tiene rango $n$.

**Teorema (asignación de polos).** Si $(A, B)$ es controlable, para cualquier conjunto de $n$
números complejos cerrado por conjugación existe $K$ tal que los autovalores de $A - BK$ son
exactamente esos.

Con la realimentación $u = -Kx$ se pueden poner los polos donde se quiera, pero no se sabe dónde
conviene ponerlos. El control óptimo responde a esa pregunta.

## 6. El regulador lineal cuadrático

Se busca el $u$ que minimiza

$$
J = \int_0^\infty \bigl(x^{\mathsf T}Q\,x + u^{\mathsf T}R\,u\bigr)\,dt, \qquad Q \succeq 0,\
R \succ 0 .
$$

**Teorema.** Si $(A, B)$ es controlable y $(A, Q^{1/2})$ es observable, el óptimo es
$u = -Kx$ con $K = R^{-1}B^{\mathsf T}P$, donde $P \succ 0$ es la solución estabilizante de la
**ecuación algebraica de Riccati**

$$
A^{\mathsf T}P + PA - PBR^{-1}B^{\mathsf T}P + Q = 0 .
$$

*Esbozo.* Con $V(x) = x^{\mathsf T}Px$ y la ecuación de Riccati, se comprueba que
$\frac{d}{dt}V + x^{\mathsf T}Qx + u^{\mathsf T}Ru = (u + Kx)^{\mathsf T}R(u + Kx) \ge 0$.
Integrando de $0$ a $\infty$ con $x(\infty) = 0$, $J \ge x_0^{\mathsf T}Px_0$, con igualdad si y
solo si $u = -Kx$. $\blacksquare$

El LQR garantiza, con una sola entrada, un margen de fase de al menos $60°$ y un margen de ganancia
infinito: el diseño óptimo es, además, robusto.

**Newton-Kleinman.** Partiendo de una $K_0$ que estabilice $A - BK_0$, se resuelve la ecuación de
Lyapunov $(A - BK_k)^{\mathsf T}P_k + P_k(A - BK_k) + Q + K_k^{\mathsf T}RK_k = 0$ y se toma
$K_{k+1} = R^{-1}B^{\mathsf T}P_k$. Es el método de Newton aplicado a la ecuación de Riccati y
converge cuadráticamente.

Valor de control: para el doble integrador $A = \begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$,
$B = \begin{pmatrix} 0 \\ 1\end{pmatrix}$, con $Q = I$ y $R = 1$, $K = (1,\ \sqrt3)$.

## Reto

Calcula tres números. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** El margen de fase, **en grados**, de $L(s) = \dfrac{2}{s(s+1)(s+3)}$.
- **b.** El valor máximo de la respuesta a un escalón unitario del lazo cerrado
  $T = L/(1 + L)$ con la misma $L$, partiendo del reposo. Es el primer pico, que sobrepasa el
  valor final $1$.
- **c.** Para el péndulo invertido linealizado $A = \begin{pmatrix} 0 & 1 \\ 1 & 0
  \end{pmatrix}$, $B = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, con $Q =
  \operatorname{diag}(10, 1)$ y $R = 1$, la segunda componente $K_2$ de la ganancia LQR
  $K = (K_1, K_2)$.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9 \cdot \mathrm{PM}\rfloor$, y
análogamente $b$ y $c$.
