---
id: rob-cinematica
title: "Cinemática de robots: rotaciones, poses, cinemática directa e inversa, jacobiano y singularidades"
area: robotica
trunk_level: 12
prerequisites: [mat-algebra-lineal, fis-mecanica-clasica]
academic_sources:
  - "Lynch, K. M.; Park, F. C. Modern Robotics: Mechanics, Planning, and Control. Cambridge University Press, 2017."
  - "Siciliano, B.; Sciavicco, L.; Villani, L.; Oriolo, G. Robotics: Modelling, Planning and Control. Springer, 2009."
  - "Craig, J. J. Introduction to Robotics: Mechanics and Control, 4ª ed. Pearson, 2017."
  - "Murray, R. M.; Li, Z.; Sastry, S. S. A Mathematical Introduction to Robotic Manipulation. CRC Press, 1994."
  - "Yoshikawa, T. Manipulability of Robotic Mechanisms. International Journal of Robotics Research, 4, 3-9, 1985."
ctf_flag: "sha256:e0d5f366d26092900e89285a58d2a0d9e21a4bc54494c1b8d7ecb8178deb656f"
hints:
  - "(a) El ángulo de una rotación no depende del eje: sale de la traza. (b) Desacopla la orientación: resta el último eslabón al objetivo para obtener la posición de la muñeca, y resuelve un brazo de dos eslabones con la ley de los cosenos. (c) Deriva la posición del efector respecto a cada ángulo: el jacobiano de posición es 2×3."
  - "(a) Multiplica las tres matrices y usa θ = arccos((tr R − 1)/2); contrasta con el producto de los tres cuaterniones. (b) atan2 con dos argumentos para no perder el cuadrante; comprueba el resultado con la cinemática directa. (c) det(J Jᵀ), o la suma de los cuadrados de los tres menores 2×2 (Cauchy-Binet)."
  - "Lynch & Park, capítulo 3 (representación eje-ángulo y fórmula de Rodrigues), capítulo 4 (cinemática directa), capítulo 6 (cinemática inversa) y capítulo 5 (jacobiano y manipulabilidad). Yoshikawa (1985) define la medida de manipulabilidad. Documentación: docs.scipy.org, scipy.spatial.transform.Rotation."
exercises:
  - id: rotar-un-punto
    tier: 1
    prompt: |
      ¿Dónde queda el punto $(2, 0, 0)$ al aplicarle $R_z(30°)$? Respuesta: `x;y;z`, la $x$ con **3 decimales**.
    answers: ["sha256:69048e4c77a7cb8d5e7cdb5651046c28f1c13e73b90c816cb823e2c8973bde5c"]
  - id: inversa-homogenea
    tier: 1
    prompt: |
      Una pose tiene $R = R_z(90°)$ y $p = (1, 2, 0)$. ¿Qué punto se obtiene al aplicar $T^{-1}$ al origen (es decir, dónde está el origen fijo visto desde el cuerpo)? Respuesta: `x;y;z`.
    answers: ["sha256:5af9a0573baa1457d28d50886835cde2a0a42aad9a038e9d1eb149140139e15f"]
  - id: angulo-de-una-rotacion
    tier: 1
    prompt: |
      ¿Cuál es el ángulo $\theta \in [0°, 180°]$ de la rotación $R = R_z(60°)\,R_x(60°)$? Respuesta: en grados, con **2 decimales**.
    answers: ["sha256:668c1db32c902ceb33736f3f0094869006d008c31463bb102d2eb8745e090435"]
  - id: directa-de-un-2r
    tier: 1
    prompt: |
      Un brazo plano 2R tiene $\ell_1 = 1$ y $\ell_2 = 0{,}7$, con $\theta_1 = 30°$ y $\theta_2 = 50°$ (relativo). ¿Dónde está el extremo? Respuesta: `x;y`, con **4 decimales**.
    answers: ["sha256:908749142a690034b4224f19d7000d81c48d5e660abd7fab5e819b7b734b7e1e"]
  - id: inversa-de-un-2r
    tier: 2
    prompt: |
      Un brazo 2R con $\ell_1 = 1$ y $\ell_2 = 0{,}8$ debe alcanzar $(1{,}2;\ 0{,}6)$. En la solución con $\theta_2 > 0$, ¿cuánto valen $\theta_1$ y $\theta_2$? Respuesta: `theta1;theta2`, en grados con **2 decimales**.
    answers: ["sha256:6ca97c974a486993aca31b324d71b9d2083affcff5602bcc470d13aa9b39d941"]
  - id: espacio-de-trabajo
    tier: 2
    prompt: |
      ¿Qué área tiene el espacio de trabajo (puntos alcanzables) de un brazo plano 2R con $\ell_1 = 1$ y $\ell_2 = 0{,}6$ y articulaciones sin límites? Respuesta: con **4 decimales**.
    answers: ["sha256:fb6b3d4820245c76ffd0b89f5f30a2e5be972d279f31ad6f99e0987088b8a050"]
  - id: determinante-del-jacobiano
    tier: 2
    prompt: |
      ¿Cuánto vale $\det J$ del brazo 2R con $\ell_1 = 1$, $\ell_2 = 0{,}8$ y $\theta_2 = 60°$? Respuesta: con **4 decimales**.
    answers: ["sha256:47f7f964d794af50a1264447e2e3f8223e3e9b9b46e65f3b0b200e41c9294f6a"]
  - id: pares-por-el-jacobiano
    tier: 2
    prompt: |
      El brazo 2R con $\ell_1 = 1$ y $\ell_2 = 0{,}8$ está en $\theta = (0°, 90°)$ y su extremo empuja con una fuerza $F = (5, -10)$ N. ¿Qué pares articulares $\tau = J^{\mathsf T}F$ equilibran esa fuerza? Respuesta: `tau1;tau2`, en N·m.
    answers: ["sha256:0a0813db9e0d8228786489aed91c1f2bf4bf9830f27a9ed5eda1b1c771f55c50"]
  - id: angulo-de-otra-rotacion
    tier: 2
    prompt: |
      ¿Cuál es el ángulo de la rotación $R_z(45°)\,R_y(45°)$? Respuesta: en grados, con **2 decimales**.
    answers: ["sha256:7244f9d59682bb9f6648e0bdafeefeb70f25b93463ec55b72daa0ae95dee6353"]
  - id: angulos-de-euler
    tier: 2
    prompt: |
      Una IMU entrega la matriz $R = R_z(\psi)R_y(\theta)R_x(\phi)$ correspondiente a $\psi = 10°$, $\theta = -25°$, $\phi = 70°$. Recupera los tres ángulos de la matriz con $\psi = \operatorname{atan2}(R_{21}, R_{11})$, $\theta = -\arcsin R_{31}$, $\phi = \operatorname{atan2}(R_{32}, R_{33})$. Respuesta: `psi;theta;phi`, en grados.
    answers: ["sha256:de3b4dce7ccc3f77b6a9787eaf032f78848bd4e043ce15ff957b40cda746df10"]
  - id: composicion-de-poses
    tier: 2
    prompt: |
      La pose de $b$ vista desde $a$ es $(R_z(90°), (2, 1, 0))$ y la de $c$ vista desde $b$ es $(R_x(90°), (1, 2, 0))$. ¿Qué coordenadas tiene en $a$ el punto $(0, 0, 1)$ de $c$? Respuesta: `x;y;z`.
    answers: ["sha256:7d6060d7f9d6bee8c50ce43090bf831cad4bf00e9273567c897fd9460299440c"]
  - id: manipulabilidad
    tier: 3
    prompt: |
      Un brazo 3R plano con $\ell = (1;\ 0{,}8;\ 0{,}5)$ está en $\theta = (20°, 40°, -30°)$. ¿Cuánto vale su manipulabilidad $w = \sqrt{\det(J_pJ_p^{\mathsf T})}$ con el jacobiano de posición $2\times3$? Respuesta: con **4 decimales**.
    answers: ["sha256:46fc39bdb3023e1695a19e5b6a25cb8d293dde2bc84ddf60cfa9c4c3009cd38a"]
  - id: inversa-con-orientacion
    tier: 3
    prompt: |
      El brazo 3R con $\ell = (1;\ 0{,}8;\ 0{,}5)$ debe llevar el extremo a $(1{,}0;\ 1{,}1)$ con orientación $\varphi = 90°$. En la solución con $\theta_2 < 0$, ¿cuánto vale $\theta_1$? Respuesta: en grados, con **2 decimales**.
    answers: ["sha256:3e4ba16adc5e477e843cc3cdd01fa1d10a85aa57697bd4119fee19955022857d"]
  - id: cerca-de-una-singularidad
    tier: 3
    prompt: |
      El brazo 2R con $\ell_1 = 1$, $\ell_2 = 0{,}8$ está casi estirado, con $\theta_2 = 10°$. ¿Cuánto vale el menor valor singular de su jacobiano (la peor relación entre velocidad del extremo y velocidad articular)? Respuesta: con **4 decimales**.
    answers: ["sha256:87c35e9ddd9e66b8c84e5346d192f20242f959767dac5ba24cb8ebb5f4556c9c"]
  - id: velocidad-del-efector
    tier: 3
    prompt: |
      El brazo 3R con $\ell = (1;\ 0{,}8;\ 0{,}5)$ pasa por $\theta = (20°, 40°, -30°)$ con $\dot\theta = (0{,}5;\ -0{,}3;\ 0{,}25)$ rad/s. ¿Qué velocidad lleva el extremo? Respuesta: `vx;vy`, en m/s con **4 decimales**.
    answers: ["sha256:f3f43a854ecd433d5621303a4185d79c90793d902b8ce0636d9282141cab9124"]
  - id: distancia-entre-orientaciones
    tier: 3
    prompt: |
      ¿Qué ángulo hay que girar para pasar de la orientación $R_1 = R_x(30°)$ a $R_2 = R_y(40°)$, es decir, cuál es el ángulo de $R_1^{\mathsf T}R_2$? Respuesta: en grados, con **2 decimales**.
    answers: ["sha256:51a5300c1cc15c054b2227070f1c02b5a1ff76ef8cece0b9e608b37274af2760"]
---

# Cinemática de robots: rotaciones, poses, cinemática directa e inversa, jacobiano y singularidades

La cinemática estudia la geometría del movimiento sin preguntarse por las fuerzas que lo producen. Para un manipulador responde a dos
preguntas: dónde está la herramienta dados los ángulos de las articulaciones (**cinemática directa**) y qué ángulos llevan la herramienta a un
punto dado (**cinemática inversa**). La matriz que relaciona sus velocidades, el **jacobiano**, es la misma que usa [[rob-control]], la que traduce
fuerzas en pares y la que delata las configuraciones peligrosas. Las mismas herramientas (rotaciones, poses, cuaterniones) describen un dron,
una cámara o un vehículo.

## Objetivos

Al terminar sabrás:

1. Representar orientaciones con matrices de rotación, eje-ángulo (Rodrigues), ángulos de Euler y cuaterniones, y pasar de unas a otras.
2. Componer e invertir poses con transformaciones homogéneas de $SE(3)$.
3. Escribir la cinemática directa de brazos serie (geometría y producto de exponenciales).
4. Resolver la cinemática inversa analítica (2R, 3R con orientación, desacoplo) y numérica (Newton-Raphson).
5. Calcular el jacobiano, usarlo para velocidades y fuerzas ($\tau = J^{\mathsf T}F$), y detectar singularidades con valores singulares y manipulabilidad.

## Qué debes dominar antes

[[mat-algebra-lineal]] (matrices, determinantes, autovalores, valores singulares), [[mat-trigonometria]] (atan2, ley de los cosenos) y
[[fis-mecanica-clasica]] (sólido rígido, trabajos virtuales).

> [!question] Test de entrada
> 1. ¿Qué matriz gira $90°$ el plano?
> 2. ¿Cuánto vale $\operatorname{atan2}(1, -1)$?
> 3. Si $A^{\mathsf T}A = I$, ¿cuánto vale $A^{-1}$?
>
> Respuestas: $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$; $135°$ ($3\pi/4$), no $-45°$ como daría $\arctan(-1)$; $A^{\mathsf T}$.

## 1. Para qué sirve

- **Manipuladores industriales y colaborativos**: llevar una herramienta a una pose, planificar trayectorias en el espacio cartesiano.
- **Drones, vehículos y realidad aumentada**: estimación de orientación con IMU (cuaterniones), poses de cámara.
- **Visión por computador**: calibración de cámaras y relación entre el sistema de la cámara y el del robot (transformaciones homogéneas).
- **Control**: el jacobiano aparece en el control cartesiano, en la compensación de gravedad y en la detección de singularidades.
- **Animación y videojuegos**: esqueletos articulados con cinemática inversa.

## 2. Rotaciones: el grupo SO(3)

La orientación de un sólido respecto a una referencia fija es una matriz cuyas columnas son los ejes del cuerpo expresados en la referencia:

$$
SO(3) = \{R \in \mathbb R^{3\times3} : R^{\mathsf T}R = I,\ \det R = 1\} .
$$

Es un grupo: el producto de rotaciones es otra rotación, y $R^{-1} = R^{\mathsf T}$. No es conmutativo, y por eso el orden importa. Las rotaciones
elementales son

$$
R_x(\alpha) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha & \cos\alpha \end{pmatrix}, \quad
R_y(\beta) = \begin{pmatrix} \cos\beta & 0 & \sin\beta \\ 0 & 1 & 0 \\ -\sin\beta & 0 & \cos\beta \end{pmatrix}, \quad
R_z(\gamma) = \begin{pmatrix} \cos\gamma & -\sin\gamma & 0 \\ \sin\gamma & \cos\gamma & 0 \\ 0 & 0 & 1 \end{pmatrix}.
$$

**Ángulos de Euler.** $R = R_z(\psi)R_y(\theta)R_x(\phi)$ (guiñada, cabeceo, alabeo) admite dos lecturas equivalentes: rotar en $x$, luego en $y$ y luego en
$z$ respecto a los ejes **fijos**; o rotar en $z$, luego en el nuevo $y$ y luego en el nuevo $x$ (ejes **móviles**). Se recuperan de la matriz con
$\psi = \operatorname{atan2}(R_{21}, R_{11})$, $\theta = -\arcsin R_{31}$, $\phi = \operatorname{atan2}(R_{32}, R_{33})$, salvo cuando $\theta = \pm90°$: ahí $\psi$ y $\phi$ dejan de estar
determinados por separado (**bloqueo de cardán**).

**Teorema (Euler).** Toda $R \in SO(3)$ es una rotación de un ángulo $\theta \in [0, \pi]$ alrededor de un eje unitario $\hat\omega$.

*Demostración.* Los autovalores de $R$ tienen módulo $1$, su producto es $\det R = 1$ y los no reales van en pares conjugados de producto $1$; por tanto $1$
es autovalor. Su autovector es el eje y, en el plano ortogonal, $R$ actúa como una rotación plana. $\blacksquare$

**Fórmula de Rodrigues.** Con $[\hat\omega]$ la matriz antisimétrica tal que $[\hat\omega]v = \hat\omega\times v$,

$$
R = e^{[\hat\omega]\theta} = I + \sin\theta\,[\hat\omega] + (1 - \cos\theta)\,[\hat\omega]^2 .
$$

Tomando la traza, $\operatorname{tr}R = 1 + 2\cos\theta$: el **ángulo de una rotación no depende del eje**, $\theta = \arccos\frac{\operatorname{tr}R - 1}{2}$. La «distancia» entre
dos orientaciones $R_1$ y $R_2$ es el ángulo de $R_1^{\mathsf T}R_2$.

**Cuaterniones unitarios.** La rotación $(\hat\omega, \theta)$ corresponde a $q = \bigl(\cos\frac\theta2,\ \hat\omega\sin\frac\theta2\bigr)$, y componer rotaciones es multiplicar
cuaterniones. Son compactos, no sufren bloqueo de cardán y se interpolan bien (*slerp*). Pero $q$ y $-q$ representan la misma rotación: el ángulo es
$2\arccos\lvert q_0\rvert$, y el ángulo entre dos orientaciones, $2\arccos\lvert q_1\cdot q_2\rvert$.

> [!example] Ejemplo resuelto 1: dos giros de 90°
> $R_z(90°)R_x(90°) = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$, de traza $0$: $\cos\theta = -\frac12$, $\theta = 120°$. El eje es el autovector de autovalor $1$,
> $\frac{1}{\sqrt3}(1, 1, 1)$: la matriz permuta cíclicamente los ejes. Con cuaterniones,
> $q = (\frac{\sqrt2}{2}, 0, 0, \frac{\sqrt2}{2})(\frac{\sqrt2}{2}, \frac{\sqrt2}{2}, 0, 0) = (\frac12, \frac12, \frac12, \frac12)$, y $2\arccos\frac12 = 120°$.

## 3. Movimientos rígidos: SE(3)

Una pose (posición y orientación) es una **transformación homogénea**

$$
T = \begin{pmatrix} R & p \\ 0 & 1 \end{pmatrix} \in SE(3), \qquad T^{-1} = \begin{pmatrix} R^{\mathsf T} & -R^{\mathsf T}p \\ 0 & 1 \end{pmatrix},
$$

que actúa sobre puntos en coordenadas homogéneas $(x, y, z, 1)$. Si $T_{ab}$ es la pose de $b$ vista desde $a$, entonces $T_{ac} = T_{ab}T_{bc}$: las cadenas
cinemáticas se componen multiplicando, y un punto $p_c$ del sistema $c$ tiene en $a$ las coordenadas $T_{ab}T_{bc}\,p_c$. Invertir **no** es cambiar el
signo de $p$: la traslación inversa es $-R^{\mathsf T}p$.

## 4. Cinemática directa

Un brazo serie de $n$ articulaciones de revolución tiene como **espacio de configuración** el toro $T^n$, coordenado por los ángulos
$\theta_1, \dots, \theta_n$. La cinemática directa es la aplicación $\theta \mapsto T(\theta)$.

**Producto de exponenciales (Brockett).** Con el robot en su posición cero $M$ y los ejes de las articulaciones descritos por *twists* $\mathcal S_i$ en la
referencia fija, $T(\theta) = e^{[\mathcal S_1]\theta_1}e^{[\mathcal S_2]\theta_2}\cdots e^{[\mathcal S_n]\theta_n}M$. Es la alternativa moderna a los parámetros de
Denavit-Hartenberg: no requiere colocar un sistema de referencia en cada eslabón según reglas especiales.

*Brazo plano 3R.* Con longitudes $\ell_1, \ell_2, \ell_3$, ángulos relativos $\theta_i$ y ángulos absolutos $\theta_{12} = \theta_1 + \theta_2$, $\theta_{123} = \theta_1 + \theta_2 + \theta_3$,

$$
x = \ell_1\cos\theta_1 + \ell_2\cos\theta_{12} + \ell_3\cos\theta_{123}, \quad y = \ell_1\sin\theta_1 + \ell_2\sin\theta_{12} + \ell_3\sin\theta_{123}, \quad \varphi = \theta_{123} .
$$

Equivale a multiplicar transformaciones planas «girar $\theta_i$ y avanzar $\ell_i$». El **espacio de trabajo** de un 2R sin límites es la corona
$\lvert\ell_1 - \ell_2\rvert \le r \le \ell_1 + \ell_2$, de área $4\pi\ell_1\ell_2$.

## 5. Cinemática inversa

La inversa no es una función: puede tener ninguna, varias o infinitas soluciones, y la que se quiere depende de la tarea.

**Brazo 2R.** Para alcanzar $(x, y)$, la ley de los cosenos da $\cos\theta_2 = \frac{x^2 + y^2 - \ell_1^2 - \ell_2^2}{2\ell_1\ell_2}$, con solución si y solo si el punto está en la
corona. Hay dos soluciones, $\theta_2 = \pm\arccos(\cdot)$ (codo arriba y codo abajo), y para cada una

$$
\theta_1 = \operatorname{atan2}(y, x) - \operatorname{atan2}(\ell_2\sin\theta_2,\ \ell_1 + \ell_2\cos\theta_2) .
$$

Hay que usar $\operatorname{atan2}$ con dos argumentos: $\arctan(y/x)$ pierde el cuadrante.

> [!example] Ejemplo resuelto 2: un 2R simétrico
> $\ell_1 = \ell_2 = 1$ y objetivo $(1, 1)$: $\cos\theta_2 = \frac{2 - 2}{2} = 0$, $\theta_2 = \pm90°$. Con $\theta_2 = +90°$:
> $\theta_1 = 45° - \operatorname{atan2}(1, 1) = 0$. Comprobación directa: $(\cos0 + \cos90°,\ \sin0 + \sin90°) = (1, 1)$. La otra solución es $\theta_1 = 90°$,
> $\theta_2 = -90°$.

**Brazo 3R con orientación (desacoplo).** Si además se impone $\varphi$, la posición de la **muñeca** $(x - \ell_3\cos\varphi,\ y - \ell_3\sin\varphi)$ queda fijada; se resuelve
el 2R hasta ella y $\theta_3 = \varphi - \theta_1 - \theta_2$. Este **desacoplo cinemático** es el que permite resolver analíticamente los brazos industriales de
seis ejes con muñeca esférica.

**Método numérico.** Sin solución cerrada, se aplica Newton-Raphson a $f(\theta) = x_d$: $\theta_{k+1} = \theta_k + J(\theta_k)^{+}(x_d - f(\theta_k))$, con $J^+$ la
pseudoinversa. Converge cuadráticamente cerca de una solución regular, pero la solución a la que llega depende del punto de partida, y cerca de
una singularidad los pasos se disparan (por eso se usa la variante amortiguada, $J^{\mathsf T}(JJ^{\mathsf T} + \lambda^2I)^{-1}$).

## 6. El jacobiano

El **jacobiano** relaciona las velocidades articulares con las del efector, $\dot x = J(\theta)\,\dot\theta$, con $J_{ij} = \partial x_i/\partial\theta_j$. Para el brazo 3R,
la parte de posición es

$$
J_p = \begin{pmatrix}
-\ell_1s_1 - \ell_2s_{12} - \ell_3s_{123} & -\ell_2s_{12} - \ell_3s_{123} & -\ell_3s_{123} \\
\ell_1c_1 + \ell_2c_{12} + \ell_3c_{123} & \ell_2c_{12} + \ell_3c_{123} & \ell_3c_{123}
\end{pmatrix},
$$

con $s_{12} = \sin\theta_{12}$, etc. Por el **principio de los trabajos virtuales**, los pares articulares que equilibran una fuerza $F$ en el efector son
$\tau = J^{\mathsf T}F$: el mismo jacobiano, traspuesto, gobierna la estática.

> [!example] Ejemplo resuelto 3: sostener un peso (con menos ayuda)
> 2R con $\ell_1 = 1$, $\ell_2 = 0{,}8$ en $\theta = (0, 90°)$: el codo está en $(1, 0)$ y el extremo en $(1;\ 0{,}8)$. Entonces
> $J = \begin{pmatrix} -0{,}8 & -0{,}8 \\ 1 & 0 \end{pmatrix}$. Para sostener un peso, $F = (0, -10)$ N: $\tau = J^{\mathsf T}F = (-10, 0)$ N·m. El segundo motor no hace nada porque la
> fuerza pasa por su eje. Calcula tú los pares si además el extremo empuja horizontalmente.

**Singularidades.** En una configuración donde $J$ pierde rango, hay direcciones del efector que ninguna velocidad articular produce y, cerca de
ellas, velocidades pequeñas del efector exigen velocidades articulares enormes. En el 2R, $\det J = \ell_1\ell_2\sin\theta_2$: el brazo estirado o plegado es
singular. Los **valores singulares** $\sigma_i$ de $J$ miden la ganancia en cada dirección: el menor dice cuánto cuesta moverse en la peor.

**Manipulabilidad (Yoshikawa).** Para un jacobiano de $m\times n$ con $m \le n$,

$$
w(\theta) = \sqrt{\det(JJ^{\mathsf T})} = \sigma_1\sigma_2\cdots\sigma_m ,
$$

proporcional al volumen del **elipsoide de manipulabilidad**, imagen de la bola unidad de velocidades articulares. Se anula exactamente en las
singularidades.

**Teorema (Cauchy-Binet).** Para $J$ de $m\times n$, $\det(JJ^{\mathsf T})$ es la suma de los cuadrados de los menores $m\times m$ de $J$. En el caso $2\times3$, $w^2$ es
la suma de los cuadrados de los tres menores $2\times2$.

## 7. Comprobar con un programa

Cada fórmula se contrasta con otro camino: el ángulo por la traza frente a los cuaterniones, la inversa analítica frente a Newton-Raphson y a la
directa, y el jacobiano analítico frente a diferencias finitas de la directa.

```python
import math

def mat(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(len(B))) for j in range(len(B[0]))] for i in range(len(A))]

def Rx(a): return [[1, 0, 0], [0, math.cos(a), -math.sin(a)], [0, math.sin(a), math.cos(a)]]
def Rz(a): return [[math.cos(a), -math.sin(a), 0], [math.sin(a), math.cos(a), 0], [0, 0, 1]]

def angulo(R):
    return math.acos(max(-1.0, min(1.0, (R[0][0] + R[1][1] + R[2][2] - 1) / 2)))

def quat(eje, a):
    return [math.cos(a / 2)] + [v * math.sin(a / 2) for v in eje]

def qmul(p, q):
    w1, x1, y1, z1 = p
    w2, x2, y2, z2 = q
    return [w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2, w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2,
            w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2, w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2]

# 1. Ejemplo resuelto 1: Rz(90°)·Rx(90°) es un giro de 120°, por la traza y por cuaterniones.
g = math.radians
R = mat(Rz(g(90)), Rx(g(90)))
q = qmul(quat([0, 0, 1], g(90)), quat([1, 0, 0], g(90)))
assert abs(math.degrees(angulo(R)) - 120) < 1e-9 and abs(math.degrees(2 * math.acos(abs(q[0]))) - 120) < 1e-9

# 2. Brazo plano: directa, inversa analítica (codo arriba) y Newton-Raphson desde otro punto.
def directa(L, th):
    x = y = a = 0.0
    for l, t in zip(L, th):
        a += t
        x, y = x + l * math.cos(a), y + l * math.sin(a)
    return x, y

def jacobiano(L, th):
    J = [[0.0] * len(th), [0.0] * len(th)]
    for j in range(len(th)):
        a = 0.0
        for i, (l, t) in enumerate(zip(L, th)):
            a += t
            if i >= j:
                J[0][j] -= l * math.sin(a)
                J[1][j] += l * math.cos(a)
    return J

def inversa_2r(l1, l2, x, y):
    t2 = math.acos((x * x + y * y - l1 * l1 - l2 * l2) / (2 * l1 * l2))
    return math.atan2(y, x) - math.atan2(l2 * math.sin(t2), l1 + l2 * math.cos(t2)), t2

L, objetivo = (1.0, 0.8), (1.2, 0.6)
th = inversa_2r(*L, *objetivo)
assert max(abs(a - b) for a, b in zip(directa(L, th), objetivo)) < 1e-12
nw = [0.0, 1.0]
for _ in range(50):
    x, y = directa(L, nw)
    J = jacobiano(L, nw)
    det = J[0][0] * J[1][1] - J[0][1] * J[1][0]
    ex, ey = objetivo[0] - x, objetivo[1] - y
    nw = [nw[0] + (J[1][1] * ex - J[0][1] * ey) / det, nw[1] + (-J[1][0] * ex + J[0][0] * ey) / det]
assert max(abs(a - b) for a, b in zip(nw, th)) < 1e-10

# 3. Jacobiano analítico frente a diferencias finitas, y manipulabilidad por det(JJᵀ) y por Cauchy-Binet (3R).
L3, th3 = (1.0, 0.8, 0.5), [g(20), g(40), g(-30)]
J = jacobiano(L3, th3)
h = 1e-6
for j in range(3):
    mas, menos = th3[:], th3[:]
    mas[j] += h
    menos[j] -= h
    (xa, ya), (xb, yb) = directa(L3, mas), directa(L3, menos)
    assert abs((xa - xb) / (2 * h) - J[0][j]) < 1e-8 and abs((ya - yb) / (2 * h) - J[1][j]) < 1e-8
JJ = [[sum(J[i][k] * J[j][k] for k in range(3)) for j in range(2)] for i in range(2)]
w = math.sqrt(JJ[0][0] * JJ[1][1] - JJ[0][1] ** 2)
menores = [J[0][a] * J[1][b] - J[0][b] * J[1][a] for a, b in ((0, 1), (0, 2), (1, 2))]
assert abs(w - math.sqrt(sum(m * m for m in menores))) < 1e-12
print(f"Manipulabilidad del 3R en (20°, 40°, −30°): {w:.4f}")
```

## 8. Errores típicos

- Multiplicar las rotaciones en el orden equivocado (fijos frente a móviles), o mezclar grados y radianes.
- Usar $\arctan(y/x)$ en vez de $\operatorname{atan2}(y, x)$.
- Invertir una pose cambiando solo el signo de la traslación.
- Olvidar que $q$ y $-q$ son la misma rotación al calcular ángulos o interpolar.
- Dar una sola solución de la inversa sin decir cuál (codo arriba o abajo), o no comprobar que el punto es alcanzable.
- Aplicar Newton sin vigilar la cercanía de una singularidad.
- Usar $J$ donde va $J^{\mathsf T}$ al pasar de fuerzas a pares.
- Extraer ángulos de Euler cerca de $\theta = \pm90°$ sin tratar el bloqueo de cardán.

## 9. Resumen

- $SO(3)$: $R^{\mathsf T}R = I$, $\det R = 1$; Euler: eje y ángulo; Rodrigues; $\theta = \arccos\frac{\operatorname{tr}R - 1}{2}$; cuaterniones.
- $SE(3)$: $T = (R, p)$, $T^{-1} = (R^{\mathsf T}, -R^{\mathsf T}p)$, $T_{ac} = T_{ab}T_{bc}$.
- Directa: producto de transformaciones (o de exponenciales); espacio de trabajo.
- Inversa: 2R por la ley de los cosenos y atan2 (dos soluciones); desacoplo de la muñeca; Newton con la pseudoinversa.
- Jacobiano: $\dot x = J\dot\theta$, $\tau = J^{\mathsf T}F$; singularidades donde cae el rango; $w = \sqrt{\det JJ^{\mathsf T}} = \prod\sigma_i$; Cauchy-Binet.

## Reto

Calcula tres números. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** El ángulo $\theta \in [0, \pi]$, en radianes, de la rotación $R = R_z(30°)\,R_y(45°)\,R_x(60°)$.
- **b.** Un brazo plano 3R con $\ell_1 = 1$, $\ell_2 = 0{,}8$ y $\ell_3 = 0{,}5$ debe llevar el extremo a $(x, y) = (1{,}2;\ 0{,}9)$ con orientación $\varphi = 60°$. De las
  dos soluciones, toma la que tiene $\theta_2 > 0$ y da $\theta_1$ en radianes, reducido al intervalo $[0, 2\pi)$.
- **c.** La manipulabilidad $w = \sqrt{\det(J_pJ_p^{\mathsf T})}$ del jacobiano de posición $2\times3$ en esa configuración.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9\,\theta\rfloor$, y análogamente $b$ y $c$.

## Repaso: lo que debe quedarte dentro de un mes

1. Una rotación es un eje y un ángulo, y el ángulo sale de la traza.
2. Las poses se componen multiplicando matrices homogéneas; la inversa usa $R^{\mathsf T}$.
3. La inversa de un brazo tiene varias soluciones: atan2, ley de los cosenos y desacoplo de la muñeca.
4. $\dot x = J\dot\theta$ y $\tau = J^{\mathsf T}F$.
5. Donde el jacobiano pierde rango el robot pierde direcciones: valores singulares y manipulabilidad lo miden.

## Siguiente

[[rob-control]] cierra el lazo sobre estas coordenadas; en las ramas, dinámica de robots (`rob-dinamica`, ecuaciones de Lagrange del brazo),
planificación de movimientos y ROS 2.
