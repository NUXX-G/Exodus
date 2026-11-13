---
id: rob-control-optimo-mpc
title: "Control óptimo y predictivo: programación dinámica, LQR y Riccati, principio del mínimo de Pontryagin, MPC lineal con restricciones, MPC no lineal y MPPI"
area: ingenieria
trunk_level: 19
prerequisites: [rob-planificacion-movimiento, rob-control, mat-optimizacion]
academic_sources:
  - "Rawlings, J. B.; Mayne, D. Q.; Diehl, M. M. Model Predictive Control: Theory, Computation, and Design, 2ª ed. Nob Hill Publishing, 2017."
  - "Borrelli, F.; Bemporad, A.; Morari, M. Predictive Control for Linear and Hybrid Systems. Cambridge University Press, 2017."
exercises:
  - id: lqr-de-horizonte-finito
    tier: 1
    prompt: |
      Para $x_{k+1} = x_k + u_k$ con coste $\sum_{k=0}^{1}(x_k^2 + u_k^2) + x_2^2$ y $x_0 = 1$, ¿cuál es la primera entrada óptima $u_0$ y el coste óptimo? Respuesta: `u0;coste` con **1 decimal**.
    answers: ["sha256:7e5e0648e9f39db38dc36c8804524e4221c256df4546161acc2d8e616d0a39a6"]
  - id: riccati-algebraica
    tier: 1
    prompt: |
      Para $x_{k+1} = x_k + u_k$ con $Q = R = 1$ en horizonte infinito, ¿cuánto valen la solución $P$ de la ecuación algebraica de Riccati y la ganancia $K$ ($u = -Kx$)? Respuesta: `P;K` con **3 decimales**.
    answers: ["sha256:298f76832e9fad16acbc97c0998c6b569cdbc90064e9162017b4f944456f6688"]
  - id: discretizacion-zoh
    tier: 1
    prompt: |
      Se discretiza el doble integrador $\ddot p = u$ con retenedor de orden cero y $\Delta t = 0{,}1$ s. ¿Cuáles son las componentes de la matriz $B_d$ (posición; velocidad)? Respuesta: `b1;b2`.
    answers: ["sha256:e2fcf86e0c14d2834e3b7efbdce15fe46f6a6e6c5d5a702e14465511dfb433ce"]
  - id: tamano-del-qp
    tier: 1
    prompt: |
      Un MPC lineal tiene horizonte 20, 2 entradas, 4 estados y límites superior e inferior en cada entrada y cada estado predicho. En la formulación condensada (solo entradas como variables), ¿cuántas variables y cuántas desigualdades tiene el QP? Respuesta: `variables;desigualdades`.
    answers: ["sha256:2bdf6cab5e13a652f65a73a96e2bbdbf745bb9ba25c00f7e9d1158a4bc54377b"]
  - id: tiempo-minimo
    tier: 1
    prompt: |
      Un doble integrador $\ddot x = u$, $|u| \le 2$, debe ir de reposo en $x = 0$ a reposo en $x = 4$. ¿Cuál es el tiempo mínimo, en s? Respuesta: con **4 decimales**.
    answers: ["sha256:fe7a4e79ee5c5db0ac347057efd375af8f17ee8f3f415e383ea9038d18556940"]
  - id: horizonte-deslizante
    tier: 1
    prompt: |
      Se aplica en horizonte deslizante el control del ejercicio de horizonte finito (en cada paso se resuelve el problema de horizonte 2 desde el estado actual y se aplica solo $u_0$). Partiendo de $x_0 = 1$, ¿cuánto vale $x_3$? Respuesta: con **3 decimales**.
    answers: ["sha256:093c8985d1ddada2f7083595c559c5819d17b5ed9e8981d77f3d80855f71c773"]
  - id: minima-energia
    tier: 1
    prompt: |
      ¿Cuál es el mínimo de $\int_0^4 u^2\,dt$ para llevar $\dot x = u$ de $x = 0$ a $x = 2$ en 4 s? Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: estabilizar-un-inestable
    tier: 2
    prompt: |
      Para $x_{k+1} = 1{,}2\,x_k + u_k$ con $Q = R = 1$, ¿cuánto valen $P$ (Riccati algebraica), la ganancia $K$ y el polo en lazo cerrado $1{,}2 - K$? Respuesta: `P;K;polo` con **4 decimales**.
    answers: ["sha256:979859f8032a4a8def794114320513dfdaf488c665397f3b3bed083a319a2b2d"]
  - id: mpc-con-saturacion
    tier: 2
    prompt: |
      El problema del ejercicio de horizonte finito ($x_0 = 1$, horizonte 2) se resuelve ahora con $|u_k| \le 0{,}5$. ¿Cuál es la primera entrada óptima y el coste óptimo? Respuesta: `u0;coste`, $u_0$ con **1 decimal** y el coste con **3**.
    answers: ["sha256:32b845c2ceb5b0eaf87953106bd61439af3e2a33dcf5148bc9277f9626e34b15"]
  - id: energia-del-doble-integrador
    tier: 2
    prompt: |
      ¿Cuál es el mínimo de $\int_0^1 u^2\,dt$ para llevar el doble integrador $\ddot x = u$ de reposo en $x = 0$ a reposo en $x = 1$ en 1 s? Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: hessiana-del-qp
    tier: 2
    prompt: |
      En el problema de horizonte 2 ($x_{k+1} = x_k + u_k$, coste $\sum_{k=0}^{1}(x_k^2 + u_k^2) + x_2^2$), el coste en función de $(u_0, u_1)$ es $\frac{1}{2}u^THu + f^Tu + c$. ¿Cuánto valen $H_{11}$, $H_{12}$ y $H_{22}$? Respuesta: `H11;H12;H22`.
    answers: ["sha256:333694149ed68adeddadf1326e29ba2675f30062e13fc96f0a5a0f8e805d724b"]
  - id: curva-de-conmutacion
    tier: 2
    prompt: |
      Un doble integrador con $|u| \le 1$ está en $x = 0$ con velocidad 1. ¿Cuánto tarda, como mínimo, en llegar al origen en reposo? Respuesta: en s con **4 decimales**.
    answers: ["sha256:f681be7fbcda6a24e9c00cb40cf589106fa022dc8bc385f04dbda76d92c0e5e7"]
  - id: pesos-de-mppi
    tier: 2
    prompt: |
      Un controlador MPPI simula cuatro secuencias con costes 10, 12, 15 y 11, cuyas primeras entradas son 1, 0, $-1$ y 0,5. Con temperatura $\lambda = 2$ y pesos $\propto e^{-S/\lambda}$, ¿qué entrada aplica? Respuesta: con **4 decimales**.
    answers: ["sha256:0b08c753b20b5bed8eec2c726cf6872134e25c4ed66cab0d8be929ee2ad59483"]
  - id: paso-de-rk4
    tier: 2
    prompt: |
      En un MPC no lineal se integra el modelo con Runge–Kutta 4. ¿Qué da un paso de RK4 de $\dot x = -x$ desde $x = 1$ con $h = 0{,}5$? Respuesta: con **5 decimales**.
    answers: ["sha256:ed62b74a4e26b5c2ad21403f1cba2d81912117fc6a64af58de18c8dd52387e02"]
  - id: lqr-del-doble-integrador
    tier: 3
    prompt: |
      El doble integrador discretizado con $\Delta t = 0{,}1$ ($A = \begin{pmatrix}1 & 0{,}1\\0 & 1\end{pmatrix}$, $B = (0{,}005;\ 0{,}1)$) se controla con LQR de horizonte infinito, $Q = I$, $R = 1$. ¿Cuáles son las dos ganancias de $K$? Respuesta: `k1;k2` con **4 decimales**.
    answers: ["sha256:ed262188d5ea222368db2bf94185b085ec4b3c4aefa9dc51205a0ca815e5cb8b"]
  - id: mpc-restringido
    tier: 3
    prompt: |
      Un MPC de horizonte 3 para $x_{k+1} = x_k + u_k$ desde $x_0 = 3$ minimiza $\sum_{k=1}^{3}x_k^2 + 0{,}1\sum_{k=0}^{2}u_k^2$ con $|u_k| \le 1$. ¿Cuál es la primera entrada óptima y el coste óptimo? Respuesta: `u0;coste`, $u_0$ con **2 decimales** y el coste con **3**.
    answers: ["sha256:ad352075c50e94506cc6d9e2de11dd167e3c63b8dfabdcc2ce5fee2641063258", "sha256:d06fe08d4badb5b4d15480892b8d6fe2ef9867539450f70dff95d215a17c90b0"]
---

El LQR de [[rob-control]] responde a "¿qué realimentación lineal minimiza un coste cuadrático?", pero no sabe nada de límites: ni de motores que saturan, ni de obstáculos,
ni de estados prohibidos. El **control óptimo** plantea el control como un problema de optimización sobre trayectorias, y el **control predictivo** (MPC) lo resuelve una y otra
vez en tiempo real, con el modelo, el estado medido y las **restricciones**, aplicando solo el primer paso. Es la técnica que mueve hoy robots cuadrúpedos, drones de
carreras, coches autónomos y plantas químicas. Este nodo va de la programación dinámica y la ecuación de Riccati al MPC lineal y no lineal y a los métodos por
muestreo, continuando la planificación de [[rob-planificacion-movimiento]] con la optimización de [[mat-optimizacion]].

## Objetivos

Al terminar sabrás:

1. Plantear problemas de control óptimo en tiempo discreto y continuo, y aplicar el principio de optimalidad de Bellman.
2. Derivar y resolver el LQR de horizonte finito e infinito (recursión y ecuación algebraica de Riccati).
3. Usar el principio del mínimo de Pontryagin en problemas de mínimo tiempo y mínima energía.
4. Formular un MPC lineal como un programa cuadrático (QP) con restricciones, y conocer las condiciones de estabilidad y factibilidad.
5. Entender el MPC no lineal (disparo múltiple, SQP, iteración en tiempo real) y el MPPI por muestreo.

## Qué debes dominar antes

[[rob-control]] (espacio de estados, LQR, estabilidad), [[mat-optimizacion]] (convexidad, KKT, programación cuadrática), [[rob-planificacion-movimiento]] (trayectorias) y los modelos de
[[rob-dinamica]].

> [!question] Test de entrada
> 1. ¿Qué condiciones cumple el mínimo de un problema convexo con restricciones?
> 2. ¿Qué es una matriz definida positiva?
> 3. ¿Cómo se discretiza $\dot x = Ax + Bu$ con un retenedor de orden cero?
>
> Respuestas: las de Karush–Kuhn–Tucker (gradiente del lagrangiano nulo, factibilidad, holgura complementaria); $x^TMx > 0$ para todo $x \ne 0$; $A_d = e^{A\Delta t}$, $B_d = \int_0^{\Delta t}e^{As}B\,ds$.

## 1. Para qué sirve

- **Robots con patas**: el MPC convexo sobre un modelo simplificado decide las fuerzas en los pies cada pocos milisegundos.
- **Drones y vehículos**: seguimiento de trayectorias en el límite de adherencia o de empuje, con restricciones de seguridad.
- **Brazos**: trayectorias óptimas en tiempo o energía respetando límites de par.
- **Industria y energía**: el MPC nació en el control de procesos químicos y hoy gestiona edificios, baterías y redes eléctricas.

## 2. Programación dinámica

Un problema de control óptimo discreto busca $u_0, \dots, u_{N-1}$ que minimicen $\sum_{k=0}^{N-1}\ell(x_k, u_k) + V_f(x_N)$ con $x_{k+1} = f(x_k, u_k)$. El **principio de optimalidad** de Bellman dice que la cola de una política
óptima es óptima para el subproblema que empieza donde ella: la **función de valor** se calcula hacia atrás,

$$
V_N(x) = V_f(x), \qquad V_k(x) = \min_u\left[\ell(x, u) + V_{k+1}(f(x, u))\right],
$$

y la política óptima es el argumento del mínimo en cada etapa. Es exacta pero sufre la **maldición de la dimensionalidad**: tabular $V$ en una rejilla de $n$ estados con $m$ puntos por eje cuesta
$m^n$. Por eso se usa en forma analítica (LQR), aproximada (aprendizaje por refuerzo, `ia-aprendizaje-refuerzo`) o local alrededor de una trayectoria (iLQR, DDP).

## 3. LQR y la ecuación de Riccati

Con dinámica lineal $x^+ = Ax + Bu$ y coste cuadrático $\ell = x^TQx + u^TRu$, $V_f = x^TP_Nx$, la función de valor sigue siendo cuadrática, $V_k = x^TP_kx$, y la recursión de Bellman se convierte en la **recursión de Riccati**:

$$
P_k = Q + A^TP_{k+1}A - A^TP_{k+1}B(R + B^TP_{k+1}B)^{-1}B^TP_{k+1}A, \qquad u_k = -K_kx_k, \quad K_k = (R + B^TP_{k+1}B)^{-1}B^TP_{k+1}A .
$$

Las ganancias cambian a lo largo del horizonte; con $N \to \infty$ (y $(A, B)$ estabilizable, $(A, Q^{1/2})$ detectable) convergen a la solución de la **ecuación algebraica de Riccati** (DARE) y el lazo
cerrado $A - BK$ es estable. En una dimensión con $A = B = Q = R = 1$, $P = \varphi = 1{,}618$, el número áureo.

> [!example] Ejemplo resuelto 1: Riccati hacia atrás
> $x^+ = x + u$, coste $\sum_{k=0}^{2}(x_k^2 + 2u_k^2)$, sin coste terminal ($P_3 = 0$). Hacia atrás: $K_2 = 0$ (en el último paso no compensa actuar) y $P_2 = 1$; $K_1 = \frac{1}{2 + 1} = 0{,}333$ y
> $P_1 = 1 + 1 - \frac{1}{3} = 1{,}667$; $K_0 = \frac{1{,}667}{3{,}667} = 0{,}455$ y $P_0 = 1{,}909$. Con horizonte infinito, la DARE queda $P^2 - P - 2 = 0$: $P = 2$ y $K = 0{,}5$. Las ganancias del horizonte finito se acercan a
> ese valor al alejarse del final.

## 4. El principio del mínimo de Pontryagin

En tiempo continuo, con $\dot x = f(x, u)$ y coste $\int_0^T\ell\,dt$, se define el **hamiltoniano** $H = \ell + \lambda^Tf$ con el **coestado** $\lambda$. Una trayectoria óptima cumple $\dot x = \partial H/\partial\lambda$,
$\dot\lambda = -\partial H/\partial x$ y $u^*(t) = \arg\min_u H$ en cada instante. Dos casos clásicos:

- **Mínima energía** ($\ell = u^2$) para el doble integrador $\ddot x = u$: $\lambda$ es lineal en el tiempo y el control también; de reposo a reposo recorriendo $d$ en $T$, $u(t) = \frac{6d}{T^2}\left(1 - \frac{2t}{T}\right)$ y el
  coste es $12d^2/T^3$.
- **Mínimo tiempo** con $|u| \le u_{max}$: $H$ es lineal en $u$, así que el óptimo está en los extremos (**bang-bang**). Para el doble integrador hay como mucho una conmutación, sobre la **curva de
  conmutación** $x = -v|v|/(2u_{max})$: se acelera a tope hasta cortarla y se frena a tope por ella hasta el origen.

## 5. MPC lineal

El **control predictivo** resuelve en cada instante, desde el estado medido, un problema de horizonte finito $N$ con el modelo y las **restricciones** ($u_{min} \le u \le u_{max}$, límites de estado, zonas
prohibidas linealizadas), aplica solo $u_0$ y repite en el siguiente paso (**horizonte deslizante**). Con modelo lineal, coste cuadrático y restricciones lineales es un **programa cuadrático**:

- **Condensado**: se eliminan los estados ($x_k$ en función de $x_0$ y las entradas) y quedan $Nm$ variables con una hessiana densa $H = 2(\bar B^T\bar Q\bar B + \bar R)$.
- **Disperso**: se conservan estados y entradas como variables, con las dinámicas como igualdades; más variables pero estructura en bandas que los resolvedores aprovechan.

Se resuelve con métodos de conjunto activo (qpOASES), punto interior o ADMM (OSQP), en micro o milisegundos para tamaños típicos. El **MPC explícito** precalcula la ley de control,
que resulta ser afín a trozos sobre una partición poliédrica del estado.

**Estabilidad y factibilidad.** Un horizonte deslizante no es automáticamente estable. La receta de Rawlings y Mayne: un **coste terminal** $V_f$ (por ejemplo, la $P$ del LQR) y un **conjunto
terminal** invariante donde el LQR cumple las restricciones; con ellos, el valor óptimo es una función de Lyapunov y la factibilidad recursiva está garantizada. En la práctica también
se usan horizontes largos y **restricciones blandas** (con variables de holgura penalizadas) para que el problema nunca sea infactible por ruido. Las perturbaciones se tratan con MPC
robusto (por tubos) o estocástico, y la integral del error con modelos aumentados.

> [!example] Ejemplo resuelto 2: mínima energía de reposo a reposo
> Para $\ddot x = u$ de $(0, 0)$ a $(1, 0)$ en $T = 1$ con $\int u^2$: $H = u^2 + \lambda_1v + \lambda_2u$; $\dot\lambda_1 = 0$, $\dot\lambda_2 = -\lambda_1$, así que $\lambda_2$ es lineal y $u = -\lambda_2/2$ también: $u = a + bt$. Las condiciones $v(1) = a + b/2 = 0$ y
> $x(1) = a/2 + b/6 = 1$ dan $a = 6$, $b = -12$: acelerar y luego frenar linealmente, con coste $\int_0^1(6 - 12t)^2dt = 12$. Un perfil bang-bang con el mismo tiempo pediría $|u| = 4$ y costaría 16.

## 6. MPC no lineal y por muestreo

Con modelos no lineales (un cuadricóptero, un coche en derrape, un brazo completo) el problema deja de ser convexo. Se **transcribe** a un programa no lineal: **disparo múltiple** (cada tramo
se integra con RK4 desde su propio estado inicial y la continuidad se impone como igualdad) o **colocación**; se resuelve con **SQP** (una secuencia de QP) o punto interior (IPOPT). La
**iteración en tiempo real** (RTI) hace un solo paso de SQP por periodo, aprovechando que la solución anterior desplazada es un excelente punto inicial. Herramientas: acados,
CasADi, Crocoddyl (DDP para robots).

El **MPPI** (model predictive path integral) evita derivadas: simula miles de secuencias de control perturbadas (en paralelo en GPU), pondera cada una por $e^{-S/\lambda}$ según su coste $S$ y promedia.
Admite costes no diferenciables (colisiones) y es uno de los controladores de Nav2.

> [!example] Ejemplo resuelto 3: MPC con saturación (con menos ayuda)
> Un doble integrador discretizado con $\Delta t = 0{,}1$ s parte de posición 5 y velocidad 0, con $|u| \le 1$. Plantea un MPC condensado de horizonte 20 con $Q = \text{diag}(1;\ 0{,}1)$, $R = 0{,}01$, resuelve el QP con
> descenso por gradiente proyectado y simula 10 s en lazo cerrado. Comprueba en el programa que la entrada nunca sale de $[-1, 1]$, que el robot llega cerca del origen y que el LQR
> recortado (saturar el LQR sin restricciones) da un coste mayor.

## 7. Comprobar con un programa

La recursión de Riccati del ejemplo 1 frente al óptimo exacto de la cuadrática, el control de mínima energía del ejemplo 2 integrado, y el MPC del ejemplo 3 con un QP resuelto
por gradiente proyectado.

```python
import math

# 1. Ejemplo resuelto 1: Riccati hacia atrás frente al mínimo exacto (gradiente nulo).
P, Ks = 0.0, []
for _ in range(3):
    K = P / (2 + P)
    P = 1 + P - P * P / (2 + P)
    Ks.append(K)
Ks.reverse()
print("ganancias:", [round(k, 4) for k in Ks], "P0 =", round(P, 4))
assert abs(Ks[0] - 5 / 11) < 1e-12 and abs(Ks[1] - 1 / 3) < 1e-12 and Ks[2] == 0 and abs(P - 21 / 11) < 1e-12
def coste(x0, u):
    x, c = x0, 0.0
    for uk in u:
        c += x * x + 2 * uk * uk
        x += uk
    return c
# Gradiente nulo: sistema lineal 3×3 resuelto por eliminación.
A = [[0.0] * 3 for _ in range(3)]
b = [0.0] * 3
h = 1e-4
for i in range(3):
    for j in range(3):
        e = [[0, 0, 0] for _ in range(4)]
        e[0][i] += h; e[0][j] += h
        e[1][i] += h; e[1][j] -= h
        e[2][i] -= h; e[2][j] += h
        e[3][i] -= h; e[3][j] -= h
        A[i][j] = (coste(1, e[0]) - coste(1, e[1]) - coste(1, e[2]) + coste(1, e[3])) / (4 * h * h)
    ep, em = [0, 0, 0], [0, 0, 0]
    ep[i], em[i] = h, -h
    b[i] = -(coste(1, ep) - coste(1, em)) / (2 * h)
for c in range(3):
    for r in range(3):
        if r != c:
            f = A[r][c] / A[c][c]
            A[r] = [a - f * ac for a, ac in zip(A[r], A[c])]
            b[r] -= f * b[c]
u = [b[k] / A[k][k] for k in range(3)]
assert abs(u[0] + Ks[0]) < 1e-6 and abs(coste(1, u) - P) < 1e-6

# 2. Ejemplo resuelto 2: u = 6 − 12t lleva de (0,0) a (1,0) con coste 12.
N = 100000
x = v = c = 0.0
for k in range(N):
    t = (k + 0.5) / N
    uu = 6 - 12 * t
    x += v / N + uu / (2 * N * N)
    v += uu / N
    c += uu * uu / N
assert abs(x - 1) < 1e-6 and abs(v) < 1e-9 and abs(c - 12) < 1e-6

# 3. Ejemplo resuelto 3: MPC condensado con |u| ≤ 1 frente a LQR recortado.
dt, H = 0.1, 20
Ad = [[1, dt], [0, 1]]
Bd = [dt * dt / 2, dt]
Qd, R = (1.0, 0.1), 0.01
def predecir(x0, us):
    xs, x = [], list(x0)
    for uk in us:
        x = [x[0] + dt * x[1] + Bd[0] * uk, x[1] + Bd[1] * uk]
        xs.append(x)
    return xs
def J(x0, us):
    return sum(Qd[0] * x[0] ** 2 + Qd[1] * x[1] ** 2 for x in predecir(x0, us)) + R * sum(uk * uk for uk in us)
def mpc(x0, us):
    for _ in range(300):
        xs = predecir(x0, us)
        lam = [0.0, 0.0]
        g = [0.0] * H
        for k in range(H - 1, -1, -1):  # gradiente exacto por el método adjunto
            lam = [lam[0] + 2 * Qd[0] * xs[k][0], lam[1] + 2 * Qd[1] * xs[k][1]]
            g[k] = 2 * R * us[k] + lam[0] * Bd[0] + lam[1] * Bd[1]
            lam = [lam[0], dt * lam[0] + lam[1]]
        us = [max(-1.0, min(1.0, uk - 0.05 * gk)) for uk, gk in zip(us, g)]
    return us
def lazo(controlador):
    x, us, total = [5.0, 0.0], [0.0] * H, 0.0
    for _ in range(100):
        u0, us = controlador(x, us)
        assert -1 - 1e-12 <= u0 <= 1 + 1e-12
        total += Qd[0] * x[0] ** 2 + Qd[1] * x[1] ** 2 + R * u0 * u0
        x = [x[0] + dt * x[1] + Bd[0] * u0, x[1] + Bd[1] * u0]
    return x, total
def con_mpc(x, us):
    us = mpc(x, us[1:] + [0.0])
    return us[0], us
P = [[1.0, 0.0], [0.0, 1.0]]
for _ in range(3000):  # Riccati del LQR sin restricciones
    PB = [P[0][0] * Bd[0] + P[0][1] * Bd[1], P[1][0] * Bd[0] + P[1][1] * Bd[1]]
    s = R + Bd[0] * PB[0] + Bd[1] * PB[1]
    AtPB = [PB[0], dt * PB[0] + PB[1]]
    AtPA = [[P[0][0], dt * P[0][0] + P[0][1]], [dt * P[0][0] + P[1][0], dt * dt * P[0][0] + dt * (P[0][1] + P[1][0]) + P[1][1]]]
    P = [[Qd[0] + AtPA[0][0] - AtPB[0] ** 2 / s, AtPA[0][1] - AtPB[0] * AtPB[1] / s],
         [AtPA[1][0] - AtPB[1] * AtPB[0] / s, Qd[1] + AtPA[1][1] - AtPB[1] ** 2 / s]]
PB = [P[0][0] * Bd[0] + P[0][1] * Bd[1], P[1][0] * Bd[0] + P[1][1] * Bd[1]]
s = R + Bd[0] * PB[0] + Bd[1] * PB[1]
K = [PB[0] / s, (dt * PB[0] + PB[1]) / s]
def lqr_recortado(x, us):
    return max(-1.0, min(1.0, -(K[0] * x[0] + K[1] * x[1]))), us
xm, cm = lazo(con_mpc)
xl, cl = lazo(lqr_recortado)
print("MPC: final", [round(a, 3) for a in xm], "coste", round(cm, 2), "| LQR recortado: coste", round(cl, 2))
assert abs(xm[0]) < 0.05 and cm < cl
```

## 8. Errores típicos

- Esperar que el LQR respete límites: saturar su salida no es óptimo y puede desestabilizar sistemas inestables.
- Usar un horizonte corto sin coste ni conjunto terminal y obtener un lazo inestable o problemas infactibles.
- Restricciones de estado duras con ruido de medida: el QP se vuelve infactible justo cuando más falta hace; usar restricciones blandas.
- Olvidar que el MPC necesita el estado completo: hace falta un estimador (`rob-percepcion-slam`).
- En MPC no lineal, arrancar el resolvedor desde cero en cada periodo en vez de desplazar la solución anterior.
- Confundir el horizonte de predicción con el periodo de muestreo: un horizonte en segundos demasiado corto no ve venir los obstáculos.

## 9. Resumen

- Bellman: $V_k(x) = \min_u[\ell + V_{k+1}(f)]$, maldición de la dimensionalidad.
- LQR: recursión de Riccati, $K_k = (R + B^TP_{k+1}B)^{-1}B^TP_{k+1}A$, DARE y estabilidad.
- Pontryagin: $H = \ell + \lambda^Tf$, mínima energía (control lineal, $12d^2/T^3$), mínimo tiempo bang-bang y curva de conmutación.
- MPC lineal = QP (condensado o disperso), conjunto activo, punto interior, ADMM; MPC explícito; coste y conjunto terminales; restricciones blandas; robusto.
- MPC no lineal: disparo múltiple, colocación, SQP, RTI; MPPI con pesos $e^{-S/\lambda}$.

## Repaso: lo que debe quedarte dentro de un mes

1. Programación dinámica: se resuelve hacia atrás desde el final.
2. El LQR es Bellman con modelo lineal y coste cuadrático: Riccati.
3. Con límites en la entrada, el mínimo tiempo es bang-bang.
4. MPC = optimizar con restricciones, aplicar el primer paso, medir y repetir.
5. La estabilidad del MPC sale del coste y el conjunto terminales.

## Siguiente

`rob-aprendizaje-robots` (políticas aprendidas cuando el modelo es difícil) e `ia-aprendizaje-refuerzo` (programación dinámica aproximada). La optimización convexa está en
[[mat-optimizacion]].
