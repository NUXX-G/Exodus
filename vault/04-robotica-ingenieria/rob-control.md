---
id: rob-control
title: "Teoría de control: realimentación, estabilidad, márgenes, PID, espacio de estados y LQR"
area: robotica
trunk_level: 12
prerequisites: [ing-senales-sistemas, mat-algebra-lineal]
academic_sources:
  - "Åström, K. J.; Murray, R. M. Feedback Systems: An Introduction for Scientists and Engineers, 2ª ed. Princeton University Press, 2021."
  - "Franklin, G. F.; Powell, J. D.; Emami-Naeini, A. Feedback Control of Dynamic Systems, 8ª ed. Pearson, 2019."
  - "Anderson, B. D. O.; Moore, J. B. Optimal Control: Linear Quadratic Methods. Prentice Hall, 1990."
  - "Ziegler, J. G.; Nichols, N. B. Optimum Settings for Automatic Controllers. Transactions of the ASME, 64, 759-768, 1942."
ctf_flag: "sha256:6cf4b603f954796e837f06c68bc2d688263e031fde4339bbb59bd5877f4a6e60"
hints:
  - "(a) Primero la frecuencia de cruce, donde |L(jω)| = 1; después la fase en ella. Elevando al cuadrado, la condición de cruce es un polinomio en ω². (b) El lazo cerrado es T = L/(1 + L). Su respuesta a escalón tiene un primer máximo donde la derivada se anula por primera vez. (c) Escribe P simétrica con tres incógnitas y desarrolla la ecuación de Riccati componente a componente."
  - "(a) Las raíces de la cúbica en u = ω² (bisección basta), o bisección sobre |L(jω)| − 1; la fase con atan2. (b) Simula T(s) con RK4 en forma canónica controlable y paso fino para localizar el pico, y refínalo con la expresión por residuos. (c) scipy.linalg.solve_continuous_are(A, B, Q, R) y K = R⁻¹BᵀP, o la iteración de Newton-Kleinman de la sección 7."
  - "Åström & Murray, capítulos de análisis en frecuencia (márgenes de estabilidad), de respuesta temporal y de realimentación de estado (regulador lineal cuadrático). Documentación: docs.scipy.org, scipy.signal y scipy.linalg.solve_continuous_are."
exercises:
  - id: error-con-control-proporcional
    tier: 1
    prompt: |
      Una planta $G(s) = \frac{2}{s + 1}$ se controla con $C = K_p = 4$ y realimentación unitaria. ¿Qué error queda en régimen permanente ante un escalón unitario de referencia? Respuesta: con **4 decimales**.
    answers: ["sha256:4638cf105769572d93a39b531f084d6a8d3b271c62849d22a7061d8834a18b6c"]
  - id: sobreimpulso-de-un-lazo
    tier: 1
    prompt: |
      Con $G(s) = \frac{1}{s(s + 2)}$ y $C = 5$, el lazo cerrado es $\frac{5}{s^2 + 2s + 5}$. ¿Qué sobreimpulso tiene su respuesta a escalón, en %? Respuesta: con **2 decimales**.
    answers: ["sha256:2d201dafa331737555db33f74dbbb11d9de4b65528bf4f76e7cb06f3b87b83de"]
  - id: criterio-de-routh
    tier: 1
    prompt: |
      Para $L(s) = \frac{K}{s(s + 1)(s + 4)}$, ¿hasta qué $K$ es estable el lazo cerrado, y a qué frecuencia oscila justo en el límite? Respuesta: `Kmax;omega`.
    answers: ["sha256:bd0c81e282f9996e6ca4948dcb0ac8f6aea7b68a07708e15c119ca5f4bdf8d69"]
  - id: funcion-de-sensibilidad
    tier: 1
    prompt: |
      Con $L(s) = \frac{10}{s + 1}$, ¿cuánto vale $\lvert S(j\omega)\rvert = \lvert 1/(1 + L(j\omega))\rvert$ en $\omega = 1$ rad/s? (Es la fracción de una perturbación de esa frecuencia que sobrevive.) Respuesta: con **5 decimales**.
    answers: ["sha256:db2d922eb0f2bf979c003b9c58717b77cb49f2df78c88c0da64c2740f5ba342a"]
  - id: controlabilidad
    tier: 1
    prompt: |
      ¿Cuánto vale el determinante de la matriz de controlabilidad $[B,\ AB]$ para $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ y $B = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$? (Si no es cero, el sistema es controlable.) Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: margen-de-fase
    tier: 2
    prompt: |
      ¿Cuál es el margen de fase de $L(s) = \frac{4}{s(s + 2)}$? Respuesta: en grados, con **2 decimales**.
    answers: ["sha256:9b4be10615075cc79beaa836ccb38add55ffdb7eb6c2fa8e5e70061814ec8586"]
  - id: margen-de-ganancia
    tier: 2
    prompt: |
      ¿Cuál es el margen de ganancia (como factor, no en dB) de $L(s) = \frac{6}{(s + 1)(s + 2)(s + 3)}$? Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: error-ante-una-rampa
    tier: 2
    prompt: |
      Con $L(s) = \frac{4}{s(s + 1)}$ y realimentación unitaria, ¿qué error estacionario queda al seguir una rampa unitaria $r(t) = t$? Respuesta: un número.
    answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: retardo-admisible
    tier: 2
    prompt: |
      El lazo $L(s) = \frac{4}{s(s + 2)}$ se ejecuta con un retardo puro $e^{-s\tau}$ (cómputo y comunicación). ¿Qué retardo máximo admite antes de volverse inestable? Respuesta: en segundos, con **3 decimales**.
    answers: ["sha256:c4668f664649a1d42d34f29f270b4ca65d4e5ac3b78f624cfb42bd3e27cc16ec"]
  - id: asignacion-de-polos
    tier: 2
    prompt: |
      Para el doble integrador $\dot x = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}x + \begin{pmatrix} 0 \\ 1 \end{pmatrix}u$, ¿qué ganancia $K = (K_1, K_2)$ en $u = -Kx$ pone los polos del lazo cerrado en $-2 \pm 2j$? Respuesta: `K1;K2`.
    answers: ["sha256:44fe1f903e9b1585bcb3214f0a6ad3e3e737ff6a7d1b8c077cc5150c66d30175"]
  - id: ganancia-estatica
    tier: 2
    prompt: |
      ¿Cuál es la ganancia estática $G(0) = C(-A)^{-1}B$ del sistema con $A = \begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix}$, $B = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, $C = (1, 0)$? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: lqr-escalar
    tier: 2
    prompt: |
      Para $\dot x = x + u$ y el coste $\int (x^2 + u^2)\,dt$, ¿cuánto valen la ganancia LQR $K$ y el polo del lazo cerrado $1 - K$? Respuesta: `K;polo`, con **4 decimales**.
    answers: ["sha256:66d403381999df02c8b0ffc5338f1014ecda55bfe114f6842afdfa10844f5003"]
  - id: pico-de-un-tercer-orden
    tier: 3
    prompt: |
      ¿Cuál es el valor máximo de la respuesta a escalón unitario del lazo cerrado $T = L/(1 + L)$ con $L(s) = \frac{1}{s(s + 1)(s + 2)}$? Respuesta: con **4 decimales**.
    answers: ["sha256:330819ee60315c8ebf1ed651e63248097638708b8aa2ee26987b23fb9b72d6b1"]
  - id: lqr-del-doble-integrador
    tier: 3
    prompt: |
      Para el doble integrador con $Q = \operatorname{diag}(4, 1)$ y $R = 1$, ¿cuánto vale la segunda componente $K_2$ de la ganancia LQR? Respuesta: con **4 decimales**.
    answers: ["sha256:a46c4c8a339a7a158bb6b549bb09a1f97cd8c943b8adb5f0de551280e16242b3"]
  - id: control-discreto
    tier: 3
    prompt: |
      La planta $G(s) = \frac{1}{s + 1}$, discretizada con retenedor de orden cero y periodo $T = 0{,}1$ s, es $x_{k+1} = e^{-T}x_k + (1 - e^{-T})u_k$. Con $u_k = K(r - x_k)$, ¿hasta qué $K$ es estable? Respuesta: con **4 decimales**.
    answers: ["sha256:be0cdaa3bab48de54540adf02c1a91bd0775e12437ccf69b202468a2c31f81eb"]
  - id: ziegler-nichols
    tier: 3
    prompt: |
      Para $L(s) = \frac{K}{s(s + 1)(s + 2)}$, halla la ganancia última $K_u$ y el periodo de oscilación $T_u$, y da el PID de Ziegler-Nichols clásico: $K_p = 0{,}6K_u$, $T_i = T_u/2$, $T_d = T_u/8$. Respuesta: `Kp;Ti;Td`, los tiempos con **4 decimales**.
    answers: ["sha256:a6f1287f887d8d1cf95918effcbcd3d5b3f92ee0774ddf44c6407e7b7f8134a5"]
---

# Teoría de control: realimentación, estabilidad, márgenes, PID, espacio de estados y LQR

La realimentación consiste en medir lo que pasa, compararlo con lo que se quiere y actuar sobre la diferencia. Hace robusto un sistema impreciso,
estabiliza uno inestable (un dron, un péndulo invertido, un robot que se equilibra) y lo vuelve rápido, pero también puede desestabilizar uno
estable. Este nodo da las herramientas para predecir cuál de esas cosas ocurrirá: primero en frecuencia, con la transformada de Laplace de
[[ing-senales-sistemas]]; después en el espacio de estados, con el álgebra lineal, hasta el control óptimo.

## Objetivos

Al terminar sabrás:

1. Escribir las funciones del lazo ($L$, $S$, $T$) y calcular errores en régimen permanente ante escalones y rampas.
2. Decidir la estabilidad con los polos, el criterio de Routh-Hurwitz y el de Nyquist, y calcular márgenes de fase y de ganancia y el retardo admisible.
3. Relacionar polos con respuesta temporal (sobreimpulso, tiempo de pico) y calcular la respuesta de sistemas de orden mayor por residuos.
4. Ajustar e implementar un PID (Ziegler-Nichols, antiwindup, derivada filtrada) y discretizarlo.
5. Usar el espacio de estados: controlabilidad, asignación de polos, ganancia estática.
6. Diseñar un regulador lineal cuadrático (LQR) resolviendo la ecuación de Riccati.

## Qué debes dominar antes

[[ing-senales-sistemas]] (función de transferencia, polos, Laplace, respuesta en frecuencia, segundo orden) y [[mat-algebra-lineal]]
(autovalores, rango, sistemas lineales).

> [!question] Test de entrada
> 1. ¿Es estable un sistema con polos en $-1$ y $+0{,}1$?
> 2. ¿Cuánto vale $\lvert 1/(1 + j)\rvert$?
> 3. ¿Cuáles son los polos de $\frac{1}{s^2 + 2s + 5}$?
>
> Respuestas: no (el polo en $+0{,}1$ crece); $1/\sqrt2$; $-1 \pm 2j$.

## 1. Para qué sirve

- **Robótica**: control de articulaciones (PID de posición y velocidad), equilibrio de robots con ruedas o patas, seguimiento de trayectorias.
- **Drones y vehículos**: estabilización de actitud, piloto automático, control de crucero.
- **Electrónica**: reguladores de tensión, PLL, control de motores ([[rob-microcontroladores]]).
- **Procesos**: temperatura, caudal, presión; la mayoría de los lazos industriales son PID.
- **Más allá**: la misma matemática describe la regulación biológica, la economía y los algoritmos de control de congestión de las redes.

## 2. El lazo de realimentación

Una planta $G(s)$ y un controlador $C(s)$ en lazo cerrado con realimentación unitaria. Con $L = CG$, la **ganancia de lazo**, la salida responde a la
referencia $r$ y a una perturbación $d$ a la salida según

$$
Y = \underbrace{\frac{L}{1 + L}}_{T}\,R + \underbrace{\frac{1}{1 + L}}_{S}\,D, \qquad S + T = 1 .
$$

Donde $\lvert L\rvert \gg 1$, $T \approx 1$ (seguimiento) y $S \approx 0$ (rechazo de perturbaciones), y además $T$ apenas depende de los errores de modelado de
$G$: la **sensibilidad** de $T$ a $G$ es $\frac{dT/T}{dG/G} = S$. Esa es la razón de ser de la realimentación. El precio es que el lazo puede volverse inestable.

**Error en régimen permanente.** Por el teorema del valor final, el error ante un escalón es $\frac{1}{1 + L(0)}$: con un controlador proporcional sobre
una planta sin integrador queda un error finito. Si $L$ tiene un integrador ($\frac1s$), el error ante escalón es cero y ante una rampa vale $1/K_v$, con
$K_v = \lim_{s\to0}sL(s)$ (**tipo** del sistema).

> [!example] Ejemplo resuelto 1: control proporcional de un motor
> Un motor de continua, de la tensión a la velocidad, se modela como $G(s) = \frac{3}{0{,}5s + 1}$. Con $C = K_p = 2$, $L(0) = 6$ y el error ante un escalón es
> $\frac{1}{7} \approx 14\,\%$. Subir $K_p$ lo reduce pero no lo anula; un integrador ($C = K_p + K_i/s$) lo anula. El lazo cerrado,
> $T = \frac{6}{0{,}5s + 7}$, tiene su polo en $-14$: la realimentación también lo ha hecho $7$ veces más rápido que la planta (polo en $-2$).

## 3. Estabilidad

Un sistema lineal con función de transferencia racional es **BIBO-estable** si y solo si todos sus polos tienen parte real negativa. Los polos del lazo
cerrado son las raíces de $1 + L(s) = 0$.

**Criterio de Routh-Hurwitz.** Decide cuántas raíces de un polinomio real tiene el semiplano derecho sin calcularlas: es el número de cambios de
signo en la primera columna de la tabla de Routh. Para una cúbica $s^3 + a_2s^2 + a_1s + a_0$, todas las raíces están en el semiplano izquierdo si y solo
si $a_2, a_1, a_0 > 0$ y $a_2a_1 > a_0$. En el límite $a_2a_1 = a_0$ hay un par de raíces en $\pm j\sqrt{a_1}$: el lazo oscila.

Valor de control: con $L = K/(s(s + 1)(s + 2))$, el polinomio $s^3 + 3s^2 + 2s + K$ es estable para $0 < K < 6$, y en $K = 6$ el lazo oscila a $\omega = \sqrt2$.

**Criterio de Nyquist.** Si $L$ no tiene polos en el semiplano derecho, el lazo cerrado es estable si y solo si la curva $L(j\omega)$, para $\omega \in \mathbb R$, no rodea
el punto $-1$. Es una consecuencia del principio del argumento: cada cero de $1 + L$ en el semiplano derecho añade una vuelta alrededor de $-1$.

**Márgenes.** La distancia al punto $-1$ mide la robustez.

- **Margen de fase.** En la frecuencia de cruce $\omega_c$, donde $\lvert L(j\omega_c)\rvert = 1$, $\mathrm{PM} = 180° + \angle L(j\omega_c)$.
- **Margen de ganancia.** En la frecuencia $\omega_{180}$, donde $\angle L = -180°$, $\mathrm{GM} = 1/\lvert L(j\omega_{180})\rvert$.

Un margen de fase de entre $45°$ y $60°$ es un objetivo de diseño habitual. Un retardo puro $e^{-s\tau}$ resta $\omega_c\tau$ radianes de fase sin cambiar el
módulo, de modo que el retardo máximo admisible es $\tau_{\max} = \mathrm{PM}_{\text{rad}}/\omega_c$: por eso los retardos de comunicación y de cómputo
limitan el ancho de banda alcanzable.

> [!example] Ejemplo resuelto 2: márgenes de un lazo de posición
> $L = \frac{10}{s(s + 5)}$. Cruce: $\omega^2(\omega^2 + 25) = 100$, $\omega^2 = \frac{-25 + \sqrt{625 + 400}}{2} \approx 3{,}508$, $\omega_c \approx 1{,}873$ rad/s. Fase:
> $-90° - \arctan(1{,}873/5) \approx -110{,}5°$, luego $\mathrm{PM} \approx 69{,}5°$. La fase nunca llega a $-180°$: el margen de ganancia es infinito. El retardo
> admisible es $1{,}213\text{ rad}/1{,}873 \approx 0{,}65$ s.

## 4. Respuesta temporal

Un segundo orden $\frac{\omega_n^2}{s^2 + 2\zeta\omega_ns + \omega_n^2}$ con $0 < \zeta < 1$ responde a un escalón con un **sobreimpulso** $M_p = e^{-\pi\zeta/\sqrt{1 - \zeta^2}}$ en el
instante $t_p = \pi/(\omega_n\sqrt{1 - \zeta^2})$. En un sistema de orden mayor no hay fórmula cerrada, pero el método es el mismo: la respuesta a escalón es
la transformada inversa de $T(s)/s$, que por **residuos** vale

$$
y(t) = T(0) + \sum_k\frac{N(p_k)}{p_k\,D'(p_k)}\,e^{p_kt},
$$

para $T = N/D$ con polos simples $p_k$. El pico es el primer cero positivo de $\dot y$. Los polos complejos dominantes, los más cercanos al eje
imaginario, fijan la forma de la respuesta, y el margen de fase se relaciona aproximadamente con el amortiguamiento por $\zeta \approx \mathrm{PM}/100$
(con el margen en grados).

## 5. PID

$$
u(t) = K_p\,e(t) + K_i\int_0^te\,d\tau + K_d\,\dot e(t) .
$$

- La acción **proporcional** reduce el error, pero no lo anula frente a una perturbación constante.
- La **integral** anula el error en régimen permanente frente a escalones: si el lazo es estable y $u$ converge, la integral solo converge si $e \to 0$.
- La **derivativa** añade amortiguamiento, porque anticipa el error. En la práctica se filtra, $K_ds/(1 + sT_f)$, para no amplificar el ruido.

**Ajuste de Ziegler-Nichols** (1942). Con control solo proporcional se sube la ganancia hasta la oscilación sostenida: ganancia última $K_u$ y periodo
$T_u$. El PID clásico es $K_p = 0{,}6K_u$, $T_i = T_u/2$, $T_d = T_u/8$ (con $K_i = K_p/T_i$, $K_d = K_pT_d$). Es un punto de partida agresivo, no un diseño final.

**Implementación.** Dos detalles separan un PID de libro de uno que funciona: la protección **antiwindup** (congelar la integral cuando el actuador
se satura, o descargarla) y derivar la medida en lugar del error, para que un salto de referencia no produzca un pico de mando.

**Control discreto.** Un microcontrolador ejecuta el lazo cada $T$ segundos. La planta $\frac{1}{s + a}$ con retenedor de orden cero se vuelve
$x_{k+1} = e^{-aT}x_k + \frac{1 - e^{-aT}}{a}u_k$, y la estabilidad pasa a exigir polos dentro del círculo unidad ($\lvert z\rvert < 1$): un muestreo lento reduce la
ganancia admisible.

## 6. Espacio de estados

$$
\dot x = Ax + Bu, \qquad y = Cx .
$$

Los polos son los autovalores de $A$, la función de transferencia es $G(s) = C(sI - A)^{-1}B$ y la ganancia estática (si $A$ es invertible) es
$G(0) = -CA^{-1}B$.

**Controlabilidad.** El par $(A, B)$ es controlable si y solo si la matriz $\mathcal C = [B,\ AB,\ \dots,\ A^{n-1}B]$ tiene rango $n$.

**Teorema (asignación de polos).** Si $(A, B)$ es controlable, para cualquier conjunto de $n$ números complejos cerrado por conjugación existe $K$ tal que
los autovalores de $A - BK$ son exactamente esos.

> [!example] Ejemplo resuelto 3: el doble integrador (con menos ayuda)
> Un carro sin rozamiento: $\dot x_1 = x_2$, $\dot x_2 = u$. Con $u = -K_1x_1 - K_2x_2$, el polinomio característico es $s^2 + K_2s + K_1$. Para polos en $-1 \pm j$ se
> necesita $s^2 + 2s + 2$: $K = (2, 2)$. Comprueba tú que $[B, AB] = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ tiene rango $2$, y halla $K$ para polos en $-3$ (doble).

Con $u = -Kx$ se pueden poner los polos donde se quiera, pero no se sabe dónde conviene ponerlos: polos muy rápidos exigen mandos enormes. El
control óptimo responde a esa pregunta.

## 7. El regulador lineal cuadrático

Se busca el $u$ que minimiza

$$
J = \int_0^\infty\bigl(x^{\mathsf T}Qx + u^{\mathsf T}Ru\bigr)\,dt, \qquad Q \succeq 0,\ R \succ 0 .
$$

**Teorema.** Si $(A, B)$ es controlable y $(A, Q^{1/2})$ es observable, el óptimo es $u = -Kx$ con $K = R^{-1}B^{\mathsf T}P$, donde $P \succ 0$ es la solución
estabilizante de la **ecuación algebraica de Riccati**

$$
A^{\mathsf T}P + PA - PBR^{-1}B^{\mathsf T}P + Q = 0 .
$$

*Esbozo.* Con $V(x) = x^{\mathsf T}Px$ y la ecuación de Riccati, se comprueba que $\frac{d}{dt}V + x^{\mathsf T}Qx + u^{\mathsf T}Ru = (u + Kx)^{\mathsf T}R(u + Kx) \ge 0$. Integrando de $0$ a
$\infty$ con $x(\infty) = 0$, $J \ge x_0^{\mathsf T}Px_0$, con igualdad si y solo si $u = -Kx$. $\blacksquare$

$Q$ y $R$ son los mandos del diseño: más peso en $Q$ da un lazo más rápido y agresivo; más peso en $R$ ahorra actuador. Con una sola entrada, el LQR
garantiza un margen de fase de al menos $60°$ y un margen de ganancia infinito: el diseño óptimo es, además, robusto.

**Newton-Kleinman.** Partiendo de una $K_0$ que estabilice $A - BK_0$, se resuelve la ecuación de Lyapunov
$(A - BK_k)^{\mathsf T}P_k + P_k(A - BK_k) + Q + K_k^{\mathsf T}RK_k = 0$ (lineal en $P_k$) y se toma $K_{k+1} = R^{-1}B^{\mathsf T}P_k$. Es el método de Newton aplicado a la ecuación de
Riccati y converge cuadráticamente.

Valor de control: para el doble integrador con $Q = I$ y $R = 1$, $K = (1, \sqrt3)$. En general, para el doble integrador con $Q = \operatorname{diag}(q_1, q_2)$ y $R = 1$,
$K = \bigl(\sqrt{q_1},\ \sqrt{q_2 + 2\sqrt{q_1}}\bigr)$.

## 8. Comprobar con un programa

Se contrastan las fórmulas con simulaciones: el error del control P frente al PI, el límite de Routh frente a la divergencia simulada, el efecto del
antiwindup y el LQR por Newton-Kleinman frente a la fórmula cerrada.

```python
import math

def simula(planta, control, T=20.0, h=1e-3, umax=None):
    """Planta de primer orden dx/dt = planta(x, u), control(e, dt) → u; Euler con paso fino. Devuelve (x final, máximo)."""
    x, xmax = 0.0, 0.0
    for _ in range(int(T / h)):
        u = control(1.0 - x, h)
        if umax is not None:
            u = max(-umax, min(umax, u))
        x += h * planta(x, u)
        xmax = max(xmax, x)
    return x, xmax

motor = lambda x, u: (3 * u - x) / 0.5     # G = 3/(0,5 s + 1)

# 1. Proporcional: queda el error 1/(1 + 6); PI: el error se anula.
x_p, _ = simula(motor, lambda e, dt: 2 * e)
assert abs((1 - x_p) - 1 / 7) < 1e-6
integral = [0.0]
def pi(e, dt):
    integral[0] += e * dt
    return 2 * e + 4 * integral[0]
x_pi, _ = simula(motor, pi)
assert abs(1 - x_pi) < 1e-4

# 2. Antiwindup: con el actuador saturado, congelar la integral reduce el sobreimpulso.
def pi_saturado(antiwindup):
    estado = {"i": 0.0}
    def c(e, dt):
        u = 0.5 * e + 5 * estado["i"]
        if not (antiwindup and abs(u) >= 0.4 and u * e > 0):
            estado["i"] += e * dt
        return u
    return c
_, pico_sin = simula(motor, pi_saturado(False), T=30, umax=0.4)
_, pico_con = simula(motor, pi_saturado(True), T=30, umax=0.4)
assert pico_con < pico_sin
print(f"Sobreimpulso con saturación: sin antiwindup {pico_sin - 1:.3f}, con antiwindup {pico_con - 1:.3f}")

# 3. Routh: s³ + 3s² + 2s + K es estable si y solo si K < 6. Se comprueba simulando el lazo cerrado en forma canónica.
def diverge(K, T=60.0, h=1e-3):
    x = [0.0, 0.0, 0.0]
    for _ in range(int(T / h)):
        d = [x[1], x[2], K * (1.0 - x[0]) - 2 * x[1] - 3 * x[2]]
        x = [a + h * b for a, b in zip(x, d)]
    return abs(x[0]) > 10
assert not diverge(5) and diverge(8)

# 4. LQR del doble integrador con Q = diag(4, 1), R = 1: Newton-Kleinman frente a K = (√q1, √(q2 + 2√q1)).
def lyapunov_2x2(Ac, M):
    (a, b), (c, d) = Ac
    S = [[2 * a, 2 * c, 0.0], [b, a + d, c], [0.0, 2 * b, 2 * d]]
    r = [-M[0][0], -M[0][1], -M[1][1]]
    A = [fila + [ri] for fila, ri in zip(S, r)]
    for k in range(3):
        p = max(range(k, 3), key=lambda i: abs(A[i][k]))
        A[k], A[p] = A[p], A[k]
        for i in range(3):
            if i != k:
                f = A[i][k] / A[k][k]
                A[i] = [x - f * y for x, y in zip(A[i], A[k])]
    p11, p12, p22 = (A[i][3] / A[i][i] for i in range(3))
    return [[p11, p12], [p12, p22]]

K = [1.0, 2.0]                                    # estabilizante inicial
for _ in range(40):
    Ac = [[0.0, 1.0], [-K[0], -K[1]]]             # A − BK
    M = [[4 + K[0] ** 2, K[0] * K[1]], [K[0] * K[1], 1 + K[1] ** 2]]   # Q + KᵀRK
    P = lyapunov_2x2(Ac, M)
    K = [P[1][0], P[1][1]]                        # K = R⁻¹BᵀP con B = (0, 1)
assert abs(K[0] - 2) < 1e-12 and abs(K[1] - math.sqrt(5)) < 1e-12
```

## 9. Errores típicos

- Confundir la ganancia de lazo $L$ con el lazo cerrado $T$, o calcular márgenes sobre $T$.
- Leer la fase sin tener en cuenta el cuadrante (usar $\arctan$ de un cociente en lugar de $\operatorname{atan2}$) o en radianes cuando se pide en grados.
- Creer que más ganancia siempre mejora: reduce el error pero se come el margen de fase.
- Olvidar el retardo del cómputo y la comunicación en el margen de fase.
- Implementar un PID sin antiwindup ni filtro en la derivada.
- Asignar polos muy rápidos sin mirar el esfuerzo de control ni la saturación.
- Tomar cualquier solución de la ecuación de Riccati: hay que quedarse con la estabilizante ($P \succ 0$).
- Discretizar con un periodo demasiado largo para la dinámica del lazo.

## 10. Resumen

- $T = L/(1 + L)$, $S = 1/(1 + L)$, $S + T = 1$; error ante escalón $1/(1 + L(0))$, ante rampa $1/K_v$.
- Estabilidad: polos del lazo cerrado; Routh-Hurwitz; Nyquist; márgenes de fase y de ganancia; $\tau_{\max} = \mathrm{PM}/\omega_c$.
- Respuesta: segundo orden ($M_p$, $t_p$), residuos para orden mayor; $\zeta \approx \mathrm{PM}/100$.
- PID: P, I (error nulo), D (amortiguamiento); Ziegler-Nichols; antiwindup; versión discreta.
- Estado: polos = autovalores de $A$; controlabilidad $[B, AB, \dots]$; asignación de polos; $G(0) = -CA^{-1}B$.
- LQR: $K = R^{-1}B^{\mathsf T}P$ con Riccati; Newton-Kleinman; margen de fase $\ge 60°$.

## Reto

Calcula tres números. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** El margen de fase, **en grados**, de $L(s) = \dfrac{2}{s(s + 1)(s + 3)}$.
- **b.** El valor máximo de la respuesta a un escalón unitario del lazo cerrado $T = L/(1 + L)$ con la misma $L$, partiendo del reposo. Es el primer
  pico, que sobrepasa el valor final $1$.
- **c.** Para el péndulo invertido linealizado $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$, con $Q = \operatorname{diag}(10, 1)$ y $R = 1$, la segunda
  componente $K_2$ de la ganancia LQR $K = (K_1, K_2)$.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9\cdot\mathrm{PM}\rfloor$, y análogamente $b$ y $c$.

## Repaso: lo que debe quedarte dentro de un mes

1. La realimentación compra precisión y robustez con riesgo de inestabilidad.
2. Estabilidad = polos del lazo cerrado en el semiplano izquierdo; los márgenes dicen cuánto falta para perderla.
3. El integrador anula el error ante escalones; la derivada amortigua; el antiwindup es obligatorio.
4. En espacio de estados, si es controlable puedes poner los polos donde quieras.
5. El LQR elige dónde ponerlos equilibrando error y esfuerzo, y sale robusto.

## Siguiente

En las ramas, `rob-dinamica` (modelos de Lagrange de brazos sobre los que se cierra el lazo), control óptimo y predictivo (`rob-control-optimo-mpc`),
estimación (filtro de Kalman, el dual del LQR) y [[rob-cinematica]] para el control cartesiano.
