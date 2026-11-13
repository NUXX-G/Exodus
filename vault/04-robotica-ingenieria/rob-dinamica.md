---
id: rob-dinamica
title: "Dinámica de robots: Lagrange y Newton–Euler, matriz de inercia, Coriolis y gravedad, dinámica directa e inversa, identificación y control por par calculado"
area: ingenieria
trunk_level: 13
prerequisites: [rob-cinematica, rob-control, fis-mecanica-clasica]
academic_sources:
  - "Lynch, K. M.; Park, F. C. Modern Robotics: Mechanics, Planning, and Control. Cambridge University Press, 2017."
  - "Siciliano, B.; Sciavicco, L.; Villani, L.; Oriolo, G. Robotics: Modelling, Planning and Control. Springer, 2009."
exercises:
  - id: par-de-gravedad
    tier: 1
    prompt: |
      Una masa puntual de 2 kg cuelga de una articulación a 0,5 m. ¿Qué par de gravedad hay que compensar cuando el brazo forma 40° con la vertical descendente ($g = 9{,}81$ m/s²), en N·m? Respuesta: con **2 decimales**.
    answers: ["sha256:98cb354ef1fb7c33f0b9d987633b6f176bf172c15eb7046f2dc61c4076d0e9d2"]
  - id: inercia-de-una-barra
    tier: 1
    prompt: |
      ¿Cuál es el momento de inercia de una barra uniforme de 3 kg y 0,6 m respecto a un eje perpendicular por un extremo, en kg·m²? Respuesta: con **2 decimales**.
    answers: ["sha256:9c9e5b4a9207b3c014ac5ebe6b6ff68d0fcef40c4c92d575950cfa6d89e7a928"]
  - id: steiner
    tier: 1
    prompt: |
      Un disco uniforme de 2 kg y 0,1 m de radio gira alrededor de un eje perpendicular a su plano que pasa a 0,3 m de su centro. ¿Cuál es su momento de inercia, en kg·m²? Respuesta: con **2 decimales**.
    answers: ["sha256:38628535bbf6650110eedc5d2d3b0f44f87cf686244bba0eb4f6c42405076555"]
  - id: par-para-acelerar
    tier: 1
    prompt: |
      La barra de 3 kg y 0,6 m, articulada en un extremo, está horizontal y en reposo. ¿Qué par hay que aplicar en la articulación para darle 5 rad/s² hacia arriba ($g = 9{,}81$), en N·m? Respuesta: con **2 decimales**.
    answers: ["sha256:545766a6c8cada62c7a4fab30c03be8f43d373e469859fa93cf2764ceeaec50f"]
  - id: inercia-reflejada
    tier: 1
    prompt: |
      La barra (0,36 kg·m² respecto a la articulación) se mueve con un motor de rotor de $10^{-4}$ kg·m² a través de una reductora 100:1. ¿Qué inercia efectiva ve la articulación, en kg·m²? Respuesta: con **2 decimales**.
    answers: ["sha256:29554d4e1c721bcc1793dbc42934fae5a1adb23624f536279aa3fe35e1032231"]
  - id: periodo-del-pendulo-fisico
    tier: 1
    prompt: |
      ¿Cuál es el periodo de las pequeñas oscilaciones de la barra de 0,6 m colgada de un extremo ($g = 9{,}81$), en s? Respuesta: con **3 decimales**.
    answers: ["sha256:54f9975e92ddb0fec220d525f50c1771a251ea524789c69381e3a835ee1b0384"]
  - id: pares-estaticos
    tier: 1
    prompt: |
      Un brazo plano de dos eslabones (barras uniformes de 1 m; $m_1 = 1$ kg, $m_2 = 1{,}2$ kg) está extendido en horizontal y quieto. ¿Qué pares deben dar las articulaciones 1 y 2 para sostenerlo ($g = 9{,}81$), en N·m? Respuesta: `tau1;tau2` con **2 decimales**.
    answers: ["sha256:eddd5bb4a4b704c62b870fd6f411ce8087386a7ce0ab512649a587a45bf17c58"]
  - id: matriz-de-inercia
    tier: 2
    prompt: |
      Para ese brazo (barras con $I_i = m_il_i^2/12$ y centros en la mitad), ¿cuánto valen $M_{11}$ y $M_{12}$ de la matriz de inercia con $q_2 = 60°$, en kg·m²? Respuesta: `M11;M12` con **4 decimales**.
    answers: ["sha256:fc5f819b17ec695f589256215612b6be1c2de11d7bbf08870e85d1a4155bfed0", "sha256:472fbc05440a5657ff892ad9e581c3e69c8c21ccb1f3727f5718083fd15799b1"]
  - id: coriolis-y-centrifugos
    tier: 2
    prompt: |
      En el mismo brazo, con $q_2 = 60°$, $\dot q_1 = 1$ y $\dot q_2 = 2$ rad/s, ¿cuánto valen los pares de Coriolis y centrífugos $C(q,\dot q)\dot q$ en cada articulación, en N·m? Respuesta: `c1;c2` con **4 decimales**.
    answers: ["sha256:e468932c77d19f018f933f99cf4e5522dd179a0faf5a4154c9eeb6f9a9fbea2d"]
  - id: dinamica-inversa
    tier: 2
    prompt: |
      El brazo se mueve en un plano horizontal (sin gravedad). Con $q_2 = 60°$, $\dot q = (1, 2)$ rad/s, ¿qué pares hacen falta para conseguir $\ddot q = (1, -1)$ rad/s²? Respuesta: `tau1;tau2` con **4 decimales**.
    answers: ["sha256:d89793dac93d3d9488fead9e1349de7bf0f23738698f7e0e99cca274b571410e"]
  - id: dinamica-directa
    tier: 2
    prompt: |
      En el mismo estado ($q_2 = 60°$, $\dot q = (1, 2)$ rad/s, plano horizontal), si los motores no dan par, ¿qué aceleraciones articulares tiene el brazo, en rad/s²? Respuesta: `dd1;dd2` con **3 decimales**.
    answers: ["sha256:f6adf6a9c343fa4e658a3008b9257ce71b790902d2c78e76d958b537aa9d27c2"]
  - id: control-por-par-calculado
    tier: 2
    prompt: |
      Con control por par calculado, el error de una articulación sigue $\ddot e + K_d\dot e + K_pe = 0$. Se elige $\omega_n = 10$ rad/s con amortiguamiento crítico. Si el error inicial es 0,1 rad y su derivada 0, ¿cuánto vale el error a los 0,3 s, en rad? Respuesta: con **4 decimales**.
    answers: ["sha256:aebbe83f7258b9daba7076947a770b4fce3650d4daefad4e605f5b97f476dc8a"]
  - id: masa-efectiva
    tier: 2
    prompt: |
      Con el brazo en $q = (0, 90°)$, ¿qué masa efectiva siente un empujón en el extremo en la dirección $x$, $\left(u^T J M^{-1} J^T u\right)^{-1}$, en kg? Respuesta: con **4 decimales**.
    answers: ["sha256:f3e360d89952f40d3b79d0b07dd0b94f1cbf9017cba5d2a5f8128e4146d6e3c1"]
  - id: caida-de-la-barra
    tier: 2
    prompt: |
      La barra de 0,6 m, articulada en un extremo sin rozamiento, se suelta desde la horizontal. ¿Con qué velocidad angular pasa por la vertical ($g = 9{,}81$), en rad/s? Respuesta: con **4 decimales**.
    answers: ["sha256:39b0ec816a35cdf55106b02ba348e3e57ba832c6a9d01a8577935d908a0cd93a"]
  - id: identificacion-de-parametros
    tier: 3
    prompt: |
      Una articulación sigue $\tau = J\ddot q + b\dot q + K\sin q$. Se miden: $(q, \dot q, \ddot q, \tau) = (0{,}5;\ 1;\ 2;\ 3{,}8766)$, $(1;\ -0{,}5;\ 1;\ 5{,}3488)$ y $(0;\ 2;\ -3;\ -0{,}8)$ (rad, rad/s, rad/s², N·m). ¿Cuánto valen $J$, $b$ y $K$? Respuesta: `J;b;K` con **2 decimales**.
    answers: ["sha256:5575bbdcff6edc77d5815f8b957491f45b682e0f8551374d0ce98a3b7e81a9ce", "sha256:62f976850b9b0737496f02f65038645cfbc2a4229fead4f56624f48118f23597"]
  - id: pd-sin-compensacion
    tier: 3
    prompt: |
      La barra de 3 kg y 0,6 m (ángulo $q$ medido desde la vertical descendente) se controla con un PD, $\tau = K_p(q_d - q) - K_d\dot q$, $K_p = 60$ N·m/rad, sin compensar la gravedad, con consigna horizontal ($q_d = 90°$). ¿Qué error queda en régimen, en grados? Respuesta: con **2 decimales**.
    answers: ["sha256:678127cdb316e8978f9efa50f9dc8e78c40a4be76c5aebb72827f383edeac084"]
---

La cinemática de [[rob-cinematica]] dice dónde está el robot; la **dinámica** dice qué pares hacen falta para moverlo así, o qué movimiento producen unos pares dados.
Es lo que separa un brazo que sigue trayectorias con precisión de uno que oscila, se queda corto con carga o se cae al apagar el control. Este nodo escribe
las ecuaciones del movimiento de un manipulador por **Lagrange** y por **Newton–Euler**, estudia sus propiedades (que son las que permiten demostrar la estabilidad
de los controladores) y las usa para simular, identificar parámetros y controlar con **par calculado**, continuando [[rob-control]] con la mecánica analítica de
[[fis-mecanica-clasica]].

## Objetivos

Al terminar sabrás:

1. Calcular inercias de eslabones (barras, discos, teorema de Steiner) y la inercia reflejada de los motores.
2. Obtener $M(q)\ddot q + C(q,\dot q)\dot q + g(q) = \tau$ por Lagrange para brazos sencillos.
3. Calcular la dinámica inversa con el algoritmo recursivo de Newton–Euler y la directa resolviendo para $\ddot q$.
4. Usar las propiedades estructurales: $M$ simétrica definida positiva, $\dot M - 2C$ antisimétrica, linealidad en los parámetros.
5. Identificar parámetros dinámicos por mínimos cuadrados.
6. Diseñar control PD con compensación de gravedad y por par calculado, y entender la inercia en el espacio de la tarea.

## Qué debes dominar antes

[[rob-cinematica]] (cinemática directa, jacobiano), [[rob-control]] (PD, estabilidad, Lyapunov) y [[fis-mecanica-clasica]] (lagrangiano, ecuaciones de Euler–Lagrange). Matrices
y sistemas lineales de [[mat-algebra-lineal]].

> [!question] Test de entrada
> 1. ¿Cuál es el lagrangiano de un péndulo simple de masa $m$ y longitud $l$?
> 2. ¿Qué dice el teorema de Steiner?
> 3. ¿Qué relación hay entre velocidades articulares y la velocidad del extremo?
>
> Respuestas: $L = \frac{1}{2}ml^2\dot\theta^2 + mgl\cos\theta$; $I = I_{cm} + md^2$; $\dot x = J(q)\dot q$.

## 1. Para qué sirve

- **Control de alto rendimiento**: el par calculado y el control por realimentación de la dinámica permiten seguir trayectorias rápidas que un PID solo no sigue.
- **Robots colaborativos**: detectar colisiones comparando el par medido con el que predice el modelo, y controlar la impedancia del contacto.
- **Simulación**: motores de física (MuJoCo, Drake, Gazebo) integran estas ecuaciones para probar controladores y entrenar políticas ([[rob-cinematica]], `rob-aprendizaje-robots`).
- **Diseño**: dimensionar motores y reductoras (`rob-sensores-actuadores`) a partir de los pares que piden las trayectorias.

## 2. Inercias

El momento de inercia respecto a un eje es $I = \int r^2\,dm$: $mL^2/12$ para una barra por su centro, $mL^2/3$ por un extremo, $mr^2/2$ para un disco por su eje. El teorema de **Steiner**
traslada el eje: $I = I_{cm} + md^2$. En 3D cada eslabón tiene un **tensor de inercia** $3\times3$ y la energía cinética de rotación es $\frac{1}{2}\omega^T\mathcal{I}\omega$. Un motor con rotor $J_m$ tras una reductora
$N$ añade $N^2J_m$ a la inercia de su articulación: con reductoras grandes, esa inercia **domina** y desacopla las articulaciones, lo que explica que los robots
industriales clásicos funcionen bien con un PID por eje.

## 3. Lagrange

Con energía cinética $T(q,\dot q) = \frac{1}{2}\dot q^TM(q)\dot q$ y potencial $V(q)$, las ecuaciones de Euler–Lagrange $\frac{d}{dt}\frac{\partial L}{\partial\dot q} - \frac{\partial L}{\partial q} = \tau$ dan

$$
M(q)\ddot q + C(q,\dot q)\dot q + g(q) = \tau, \qquad g = \frac{\partial V}{\partial q}, \qquad C_{ij} = \sum_k \frac{1}{2}\left(\frac{\partial M_{ij}}{\partial q_k} + \frac{\partial M_{ik}}{\partial q_j} - \frac{\partial M_{jk}}{\partial q_i}\right)\dot q_k .
$$

El término $C\dot q$ contiene los pares **centrífugos** ($\dot q_j^2$) y de **Coriolis** ($\dot q_j\dot q_k$). Para un brazo plano de dos eslabones con masas $m_i$, longitudes $l_i$, centros a $l_{ci}$ e inercias propias
$I_i$, con $q_2$ relativo:

$$
M = \begin{pmatrix} I_1 + I_2 + m_1l_{c1}^2 + m_2(l_1^2 + l_{c2}^2 + 2l_1l_{c2}\cos q_2) & I_2 + m_2(l_{c2}^2 + l_1l_{c2}\cos q_2) \\ \cdot & I_2 + m_2l_{c2}^2 \end{pmatrix},
$$

$$
C\dot q = \begin{pmatrix} h(2\dot q_1\dot q_2 + \dot q_2^2) \\ -h\dot q_1^2 \end{pmatrix}, \quad h = -m_2l_1l_{c2}\sin q_2, \qquad g = \begin{pmatrix} (m_1l_{c1} + m_2l_1)g\cos q_1 + m_2l_{c2}g\cos(q_1 + q_2) \\ m_2l_{c2}g\cos(q_1 + q_2) \end{pmatrix} .
$$

**Propiedades** (en las que se apoyan las demostraciones de estabilidad): $M(q)$ es simétrica y definida positiva (la energía cinética es positiva), acotada; con la $C$ de
Christoffel, $\dot M - 2C$ es **antisimétrica**, es decir, las fuerzas de Coriolis no hacen trabajo; y la dinámica es **lineal en los parámetros** (masas, primeros momentos, inercias):
$\tau = Y(q,\dot q,\ddot q)\,\pi$, lo que permite identificarlos y adaptarlos.

> [!example] Ejemplo resuelto 1: un eslabón con carga
> Una barra de 2 kg y 0,8 m articulada en un extremo lleva 0,5 kg en la punta; $q$ se mide desde la vertical descendente. $T = \frac{1}{2}\left(\frac{2\cdot0{,}64}{3} + 0{,}5\cdot0{,}64\right)\dot q^2 = \frac{1}{2}0{,}7467\,\dot q^2$, y
> $V = -(2\cdot0{,}4 + 0{,}5\cdot0{,}8)g\cos q = -11{,}77\cos q$. Lagrange: $0{,}7467\,\ddot q + 11{,}77\sin q = \tau$. Sostenerla en horizontal pide 11,77 N·m; acelerarla a 10 rad/s² desde ahí, 7,47 N·m más.

> [!example] Ejemplo resuelto 2: la inercia cambia con la postura
> En el brazo de dos eslabones del apartado ($m_1 = 1$, $m_2 = 1{,}2$ kg, barras de 1 m), $M_{11}$ vale $3{,}13$ kg·m² con el brazo estirado ($q_2 = 0$) y $0{,}73$ con el brazo plegado ($q_2 = 180°$): el
> mismo motor acelera el hombro **4,3 veces más** con el brazo recogido. Un PID con ganancias fijas está bien ajustado en una postura y mal en la otra; el par calculado
> compensa exactamente esa variación.

## 4. Newton–Euler recursivo

Lagrange da expresiones cerradas, pero crecen muy deprisa con el número de articulaciones. El algoritmo **recursivo de Newton–Euler** (RNEA) calcula la dinámica inversa en
$O(n)$:

1. **Hacia fuera**, de la base al extremo: velocidades y aceleraciones angulares y lineales de cada eslabón a partir de las del anterior y de $q_i$, $\dot q_i$, $\ddot q_i$. La gravedad se
   introduce como una aceleración de la base hacia arriba.
2. **Hacia dentro**, del extremo a la base: la fuerza y el momento que cada eslabón necesita ($F = ma_c$, $N = \mathcal{I}\alpha + \omega\times\mathcal{I}\omega$) más lo que transmite al siguiente; el par de la
   articulación es la componente del momento según su eje.

La **dinámica directa** (qué aceleración producen unos pares) resuelve $M\ddot q = \tau - C\dot q - g$; $M$ se puede construir llamando $n$ veces al RNEA, o se usa el algoritmo
de cuerpos articulados de Featherstone, también $O(n)$. Los simuladores integran después con pasos pequeños y métodos que conservan bien la energía.

## 5. Identificación

Los parámetros de CAD no incluyen cables, reductoras ni rozamientos. Como $\tau = Y\pi$ es lineal en $\pi$, se mueve el robot por trayectorias **excitantes** (que hagan $Y$
bien condicionada), se miden pares (corrientes) y estados, y se resuelve por **mínimos cuadrados**, añadiendo términos de rozamiento viscoso y de Coulomb
($b\dot q + f_c\,\text{sign}(\dot q)$). Solo se identifican los **parámetros base**, combinaciones que sí afectan al movimiento.

## 6. Control basado en el modelo

- **PD con compensación de gravedad**: $\tau = K_p(q_d - q) - K_d\dot q + g(q)$. Con $V = \frac{1}{2}\dot q^TM\dot q + \frac{1}{2}e^TK_pe$ y la antisimetría de $\dot M - 2C$, $\dot V = -\dot q^TK_d\dot q \le 0$, y por LaSalle el robot llega a la
  consigna para cualquier $K_p, K_d > 0$. Sin el término $g(q)$, queda un error en régimen de orden $g/K_p$.
- **Par calculado** (linealización por realimentación): $\tau = M(q)\left(\ddot q_d + K_d\dot e + K_pe\right) + C\dot q + g$. Con el modelo exacto, cada articulación queda como $\ddot e + K_d\dot e + K_pe = 0$,
  lineal y desacoplada; se elige $K_p = \omega_n^2$, $K_d = 2\zeta\omega_n$. Con errores de modelo hace falta robustez o adaptación.
- **Espacio de la tarea**: la dinámica vista desde el extremo tiene inercia $\Lambda = (JM^{-1}J^T)^{-1}$ (formulación de espacio operacional de Khatib); la masa que nota una fuerza en la
  dirección $u$ es $(u^TJM^{-1}J^Tu)^{-1}$. Es la base del control de impedancia, en el que el extremo se comporta como un muelle-amortiguador ante el contacto.

> [!example] Ejemplo resuelto 3: compensar la gravedad (con menos ayuda)
> Para el eslabón del ejemplo 1 con consigna horizontal y un PD con $K_p = 100$ N·m/rad sin compensar la gravedad, plantea el equilibrio $100(\pi/2 - q) = 11{,}77\sin q$ y resuélvelo
> (error ≈ 6,7°). Añade $g(q)$ al control y comprueba en el programa que el error desaparece. ¿Qué $K_p$ haría falta sin compensación para bajar de 1°?

## 7. Comprobar con un programa

El brazo de dos eslabones por Lagrange frente a Newton–Euler recursivo, la conservación de la energía en una simulación sin pares ni rozamiento, y el PD
con y sin compensación de gravedad del ejemplo 3.

```python
import math

m1, m2, l1, lc1, lc2 = 1.0, 1.2, 1.0, 0.5, 0.5
I1, I2, G = m1 / 12, m2 / 12, 9.81

def M(q2):
    c = math.cos(q2)
    a = I1 + I2 + m1 * lc1**2 + m2 * (l1**2 + lc2**2 + 2 * l1 * lc2 * c)
    b = I2 + m2 * (lc2**2 + l1 * lc2 * c)
    return a, b, I2 + m2 * lc2**2

def tau_lagrange(q, dq, ddq, g=G):
    a, b, d = M(q[1])
    h = -m2 * l1 * lc2 * math.sin(q[1])
    g1 = (m1 * lc1 + m2 * l1) * g * math.cos(q[0]) + m2 * lc2 * g * math.cos(q[0] + q[1])
    g2 = m2 * lc2 * g * math.cos(q[0] + q[1])
    return (a * ddq[0] + b * ddq[1] + h * (2 * dq[0] * dq[1] + dq[1] ** 2) + g1,
            b * ddq[0] + d * ddq[1] - h * dq[0] ** 2 + g2)

def tau_rnea(q, dq, ddq, g=G):
    cross = lambda u, v: u[0] * v[1] - u[1] * v[0]
    def acc(ao, al, w, r):
        return (ao[0] - al * r[1] - w * w * r[0], ao[1] + al * r[0] - w * w * r[1])
    u1 = (math.cos(q[0]), math.sin(q[0]))
    u2 = (math.cos(q[0] + q[1]), math.sin(q[0] + q[1]))
    w1, a1, w2, a2 = dq[0], ddq[0], dq[0] + dq[1], ddq[0] + ddq[1]
    rc1, r1, rc2 = (lc1 * u1[0], lc1 * u1[1]), (l1 * u1[0], l1 * u1[1]), (lc2 * u2[0], lc2 * u2[1])
    ao1 = (0.0, g)
    ac1, ao2 = acc(ao1, a1, w1, rc1), acc(ao1, a1, w1, r1)
    ac2 = acc(ao2, a2, w2, rc2)
    f2 = (m2 * ac2[0], m2 * ac2[1])
    t2 = I2 * a2 + cross(rc2, f2)
    t1 = I1 * a1 + cross(rc1, (m1 * ac1[0], m1 * ac1[1])) + t2 + cross(r1, f2)
    return t1, t2

# 1. Lagrange = Newton–Euler en estados al azar (generador fijo, sin librerías).
x = 12345
def rnd():
    global x
    x = (1103515245 * x + 12345) % 2**31
    return x / 2**31 * 4 - 2
for _ in range(200):
    q, dq, ddq = (rnd(), rnd()), (rnd(), rnd()), (rnd(), rnd())
    assert all(abs(a - b) < 1e-12 for a, b in zip(tau_lagrange(q, dq, ddq), tau_rnea(q, dq, ddq)))
assert abs(M(0)[0] - 3.1333) < 1e-4 and abs(M(math.pi)[0] - 0.7333) < 1e-4

# 2. Simulación sin pares (con gravedad): la energía se conserva con RK4.
def ddq_of(q, dq):
    a, b, d = M(q[1])
    t = tau_lagrange(q, dq, (0, 0))
    det = a * d - b * b
    return ((-t[0] * d + t[1] * b) / det, (-t[1] * a + t[0] * b) / det)
def energia(q, dq):
    a, b, d = M(q[1])
    T = 0.5 * (a * dq[0] ** 2 + 2 * b * dq[0] * dq[1] + d * dq[1] ** 2)
    V = (m1 * lc1 + m2 * l1) * G * math.sin(q[0]) + m2 * lc2 * G * math.sin(q[0] + q[1])
    return T + V
s = [0.3, 0.5, 0.0, 0.0]
f = lambda s: [s[2], s[3], *ddq_of(s[:2], s[2:])]
E0, h = energia(s[:2], s[2:]), 1e-4
for _ in range(20000):
    k1 = f(s); k2 = f([a + h / 2 * b for a, b in zip(s, k1)])
    k3 = f([a + h / 2 * b for a, b in zip(s, k2)]); k4 = f([a + h * b for a, b in zip(s, k3)])
    s = [a + h / 6 * (b1 + 2 * b2 + 2 * b3 + b4) for a, b1, b2, b3, b4 in zip(s, k1, k2, k3, k4)]
print("deriva de energía en 2 s:", abs(energia(s[:2], s[2:]) - E0))
assert abs(energia(s[:2], s[2:]) - E0) < 1e-8

# 3. Ejemplo resuelto 3: PD con y sin compensación de gravedad en el eslabón con carga.
J, K = 2 * 0.64 / 3 + 0.5 * 0.64, (2 * 0.4 + 0.5 * 0.8) * G
def final(compensa, Kp=100.0, Kd=20.0):
    q = w = 0.0
    for _ in range(400000):
        tau = Kp * (math.pi / 2 - q) - Kd * w + (K * math.sin(q) if compensa else 0.0)
        w += (tau - K * math.sin(q)) / J * 1e-5
        q += w * 1e-5
    return math.degrees(math.pi / 2 - q)
print("error sin compensar:", round(final(False), 3), "° | compensando:", round(final(True), 6), "°")
assert abs(final(False) - 6.70) < 0.01 and abs(final(True)) < 1e-6
```

## 8. Errores típicos

- Olvidar la inercia propia del eslabón ($I_i$) y tratarlo como una masa puntual.
- Medir $q_2$ absoluto en unas ecuaciones y relativo en otras.
- Confundir $\Lambda_{xx}$ con la masa efectiva en $x$: es $1/(\Lambda^{-1})_{xx}$.
- Integrar la simulación con Euler explícito y paso grande: la energía crece y el robot "se dispara" sin motivo físico.
- Identificar parámetros con trayectorias poco excitantes (mal condicionadas) y obtener masas negativas.
- Confiar en el par calculado con un modelo malo: amplifica los errores de modelo con ganancias altas.

## 9. Resumen

- Inercias: $\int r^2dm$, Steiner, tensor; inercia reflejada $N^2J_m$.
- $M\ddot q + C\dot q + g = \tau$; $M$ simétrica definida positiva, $\dot M - 2C$ antisimétrica, $\tau = Y\pi$.
- Brazo de dos eslabones: $M$, $h = -m_2l_1l_{c2}\sin q_2$, $g(q)$.
- RNEA $O(n)$ hacia fuera y hacia dentro; dinámica directa $M\ddot q = \tau - C\dot q - g$, Featherstone.
- Identificación por mínimos cuadrados con trayectorias excitantes y rozamiento.
- PD + $g(q)$ (Lyapunov + LaSalle); par calculado $\ddot e + K_d\dot e + K_pe = 0$; $\Lambda = (JM^{-1}J^T)^{-1}$, impedancia.

## Repaso: lo que debe quedarte dentro de un mes

1. Toda la dinámica de un brazo cabe en $M\ddot q + C\dot q + g = \tau$.
2. La inercia vista por un motor cambia con la postura.
3. Newton–Euler recursivo calcula los pares en tiempo lineal.
4. Los parámetros entran linealmente: se identifican por mínimos cuadrados.
5. Compensar la gravedad elimina el error en régimen; el par calculado linealiza todo el brazo.

## Siguiente

`rob-ros2` (llevar el modelo y el control a un robot real), `rob-control-optimo-mpc` (control óptimo con el modelo dinámico) y `rob-planificacion-movimiento`
(trayectorias que respeten los límites de par).
