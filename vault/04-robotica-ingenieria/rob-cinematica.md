---
id: rob-cinematica
title: "Cinemática de robots"
area: robotica
trunk_level: 11
prerequisites: [mat-algebra-lineal, fis-mecanica-clasica]
academic_sources:
  - "Lynch, K. M.; Park, F. C. Modern Robotics: Mechanics, Planning, and Control. Cambridge University Press, 2017."
  - "Siciliano, B.; Sciavicco, L.; Villani, L.; Oriolo, G. Robotics: Modelling, Planning and Control. Springer, 2009."
  - "Craig, J. J. Introduction to Robotics: Mechanics and Control, 4ª ed. Pearson, 2017."
  - "Murray, R. M.; Li, Z.; Sastry, S. S. A Mathematical Introduction to Robotic Manipulation. CRC Press, 1994."
  - "Yoshikawa, T. Manipulability of Robotic Mechanisms. International Journal of Robotics Research 4(2), 1985."
ctf_flag: "sha256:e0d5f366d26092900e89285a58d2a0d9e21a4bc54494c1b8d7ecb8178deb656f"
hints:
  - "(a) El ángulo de una rotación no depende del eje: sale de la traza. (b) Desacopla la orientación: resta el último eslabón al objetivo para obtener la posición de la muñeca, y resuelve un brazo de dos eslabones con la ley de los cosenos. (c) Deriva la posición del efector respecto a cada ángulo: el jacobiano de posición es 2×3."
  - "(a) Multiplica las tres matrices con numpy y usa θ = arccos((tr R − 1)/2); contrasta con scipy.spatial.transform.Rotation.from_euler('ZYX', ...).magnitude(), con cuidado con el orden y el convenio intrínseco o extrínseco. (b) numpy.arctan2 con dos argumentos para no perder el cuadrante; comprueba el resultado con la cinemática directa. (c) numpy.linalg.det(J @ J.T) o el producto de los valores singulares de numpy.linalg.svd(J)."
  - "Lynch & Park, §3.2.3 (representación eje-ángulo y fórmula de Rodrigues), §4.1 (cinemática directa), §6.1 (inversa analítica del brazo plano) y §5.4 (manipulabilidad). Siciliano et al., §2.5 y §3.9. Yoshikawa (1985) define la medida de manipulabilidad. Documentación: docs.scipy.org, scipy.spatial.transform.Rotation."
---

# Cinemática de robots

La cinemática estudia la geometría del movimiento sin preguntarse por las fuerzas que lo
producen. Para un manipulador responde a dos preguntas: dónde está la herramienta dados los
ángulos de las articulaciones (cinemática directa) y qué ángulos llevan la herramienta a un
punto dado (cinemática inversa). La matriz que relaciona sus velocidades, el jacobiano, es la
misma que usa [[rob-control]] y la que delata las configuraciones peligrosas.

## 1. Rotaciones: el grupo SO(3)

La orientación de un sólido respecto a una referencia fija es una matriz cuyas columnas son los
ejes del cuerpo expresados en la referencia:

$$
SO(3) = \{R \in \mathbb R^{3\times3} : R^{\mathsf T} R = I,\ \det R = 1\} .
$$

Es un grupo: el producto de rotaciones es otra rotación, y $R^{-1} = R^{\mathsf T}$. No es
conmutativo, y por eso el orden en que se aplican las rotaciones importa.

Las rotaciones elementales son

$$
R_x(\alpha) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\alpha & -\sin\alpha \\ 0 & \sin\alpha &
\cos\alpha \end{pmatrix}, \quad
R_z(\gamma) = \begin{pmatrix} \cos\gamma & -\sin\gamma & 0 \\ \sin\gamma & \cos\gamma & 0 \\
0 & 0 & 1 \end{pmatrix},
$$

y $R_y(\beta)$ análoga, con los signos del seno intercambiados. Una composición como
$R = R_z(\gamma)R_y(\beta)R_x(\alpha)$ admite dos lecturas equivalentes: rotar primero en $x$,
después en $y$ y después en $z$ respecto a los ejes **fijos**; o rotar en $z$, después en el
nuevo $y$ y después en el nuevo $x$ (ejes **móviles**). Son los ángulos de guiñada, cabeceo y
alabeo.

**Teorema (Euler).** Toda $R \in SO(3)$ es una rotación de un ángulo $\theta \in [0, \pi]$
alrededor de un eje unitario $\hat\omega$.

*Demostración.* Los autovalores de $R$ tienen módulo 1, su producto es $\det R = 1$ y los no
reales van en pares conjugados de producto 1; por tanto $1$ es autovalor. Su autovector es el eje
y, en el plano ortogonal, $R$ actúa como una rotación plana. $\blacksquare$

**Fórmula de Rodrigues.** Con $[\hat\omega]$ la matriz antisimétrica tal que
$[\hat\omega]v = \hat\omega \times v$,

$$
R = e^{[\hat\omega]\theta} = I + \sin\theta\,[\hat\omega] + (1 - \cos\theta)\,[\hat\omega]^2 .
$$

Tomando la traza, $\operatorname{tr}R = 1 + 2\cos\theta$: el **ángulo de una rotación no depende
del eje**, y se obtiene con $\theta = \arccos\frac{\operatorname{tr}R - 1}{2}$.

**Cuaterniones unitarios.** La rotación $(\hat\omega, \theta)$ corresponde a
$q = \bigl(\cos\frac\theta2,\ \hat\omega\sin\frac\theta2\bigr)$, y la composición de rotaciones,
al producto de cuaterniones. Son más compactos que las matrices, no sufren el bloqueo de cardán
de los ángulos de Euler y se interpolan bien, con *slerp*. Pero $q$ y $-q$ representan la misma
rotación: hay que tomar $|q_0|$ al recuperar el ángulo.

Valor de control: $R_z(90°)\,R_x(90°)$ es una rotación de $120°$ alrededor de
$\frac{1}{\sqrt3}(1, 1, 1)$.

## 2. Movimientos rígidos: SE(3)

Una pose (posición y orientación) es una **transformación homogénea**

$$
T = \begin{pmatrix} R & p \\ 0 & 1 \end{pmatrix} \in SE(3), \qquad
T^{-1} = \begin{pmatrix} R^{\mathsf T} & -R^{\mathsf T}p \\ 0 & 1 \end{pmatrix},
$$

que actúa sobre puntos en coordenadas homogéneas $(x, y, z, 1)$. Si $T_{ab}$ es la pose de $b$ vista
desde $a$, entonces $T_{ac} = T_{ab}T_{bc}$: las cadenas cinemáticas se componen multiplicando.

## 3. Cinemática directa

Un brazo serie de $n$ articulaciones de revolución tiene como **espacio de configuración** el
toro $T^n$, coordenado por los ángulos $\theta_1, \dots, \theta_n$. La cinemática directa es la
aplicación $\theta \mapsto T(\theta)$.

**Producto de exponenciales (Brockett).** Con el robot en su posición cero $M$ y los ejes de las
articulaciones descritos por *twists* $\mathcal S_i$ en la referencia fija,

$$
T(\theta) = e^{[\mathcal S_1]\theta_1}\, e^{[\mathcal S_2]\theta_2} \cdots
e^{[\mathcal S_n]\theta_n}\, M .
$$

Es la alternativa moderna a los parámetros de Denavit-Hartenberg: no requiere colocar un sistema
de referencia en cada eslabón según reglas especiales.

*Ejemplo: brazo plano 3R.* Con longitudes $\ell_1, \ell_2, \ell_3$ y ángulos relativos
$\theta_1, \theta_2, \theta_3$, si se abrevian los ángulos absolutos como
$\theta_{12} = \theta_1 + \theta_2$ y $\theta_{123} = \theta_1 + \theta_2 + \theta_3$,

$$
\begin{aligned}
x &= \ell_1\cos\theta_1 + \ell_2\cos\theta_{12} + \ell_3\cos\theta_{123}, \\
y &= \ell_1\sin\theta_1 + \ell_2\sin\theta_{12} + \ell_3\sin\theta_{123}, \\
\varphi &= \theta_{123} .
\end{aligned}
$$

## 4. Cinemática inversa

La inversa no es una función: puede tener ninguna, varias o infinitas soluciones, y la que se
quiere depende de la tarea.

**Brazo 2R.** Para alcanzar $(x, y)$ con eslabones $\ell_1, \ell_2$, la ley de los cosenos da

$$
\cos\theta_2 = \frac{x^2 + y^2 - \ell_1^2 - \ell_2^2}{2\ell_1\ell_2},
$$

que tiene solución si y solo si $|\ell_1 - \ell_2| \le \sqrt{x^2 + y^2} \le \ell_1 + \ell_2$. Hay
dos soluciones, $\theta_2 = \pm\arccos(\cdot)$ (codo arriba y codo abajo), y para cada una

$$
\theta_1 = \operatorname{atan2}(y, x) - \operatorname{atan2}(\ell_2\sin\theta_2,\
\ell_1 + \ell_2\cos\theta_2) .
$$

Hay que usar $\operatorname{atan2}$ con dos argumentos: $\arctan(y/x)$ pierde el cuadrante.

**Brazo 3R con orientación.** Si además se impone $\varphi$, la posición de la **muñeca**
$(x - \ell_3\cos\varphi,\ y - \ell_3\sin\varphi)$ queda fijada; se resuelve el 2R hasta ella y
$\theta_3 = \varphi - \theta_1 - \theta_2$. Este **desacoplo cinemático** es el que permite
resolver analíticamente los brazos industriales de seis ejes con muñeca esférica.

**Método numérico.** Sin solución cerrada, se aplica Newton-Raphson a $f(\theta) = x_d$:
$\theta_{k+1} = \theta_k + J(\theta_k)^{+}\bigl(x_d - f(\theta_k)\bigr)$, con $J^+$ la
pseudoinversa. Converge cuadráticamente cerca de una solución regular, pero la solución a la que
converge depende del punto de partida.

Valor de control: un brazo 2R con $\ell_1 = \ell_2 = 1$ alcanza $(1, 1)$ con $\theta_2 = 90°$ y
$\theta_1 = 0$ en la solución con $\theta_2 > 0$.

## 5. El jacobiano

El **jacobiano** relaciona las velocidades articulares con las del efector,
$\dot x = J(\theta)\,\dot\theta$, con $J_{ij} = \partial x_i / \partial\theta_j$. Para el brazo
3R, la parte de posición es

$$
J_p = \begin{pmatrix}
-\ell_1 s_1 - \ell_2 s_{12} - \ell_3 s_{123} & -\ell_2 s_{12} - \ell_3 s_{123} & -\ell_3 s_{123}
\\
\ell_1 c_1 + \ell_2 c_{12} + \ell_3 c_{123} & \ell_2 c_{12} + \ell_3 c_{123} & \ell_3 c_{123}
\end{pmatrix},
$$

con $s_{12} = \sin\theta_{12}$, etc. Por el **principio de los trabajos virtuales**, los pares
articulares que equilibran una fuerza $F$ en el efector son $\tau = J^{\mathsf T}F$: el mismo
jacobiano, traspuesto, gobierna la estática.

**Singularidades.** En una configuración donde $J$ pierde rango, hay direcciones del efector que
ninguna velocidad articular produce y, cerca de ellas, velocidades pequeñas del efector exigen
velocidades articulares enormes. En el 2R ocurren con el brazo estirado o plegado, porque
$\det J = \ell_1\ell_2\sin\theta_2$.

**Manipulabilidad (Yoshikawa).** Para un jacobiano de $m \times n$ con $m \le n$,

$$
w(\theta) = \sqrt{\det\bigl(J J^{\mathsf T}\bigr)} = \sigma_1\sigma_2\cdots\sigma_m ,
$$

el producto de los valores singulares: es proporcional al volumen del **elipsoide de
manipulabilidad**, imagen de la bola unidad de velocidades articulares. Se anula exactamente en
las singularidades.

**Teorema (Cauchy-Binet).** Para $J$ de $m \times n$, $\det(JJ^{\mathsf T})$ es la suma de los
cuadrados de los menores $m \times m$ de $J$.

En el caso $2 \times 3$, $w^2$ es la suma de los cuadrados de los tres menores $2\times2$, lo que
da una segunda forma de calcularla.

## Reto

Calcula tres números. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** El ángulo $\theta \in [0, \pi]$, en radianes, de la rotación
  $R = R_z(30°)\,R_y(45°)\,R_x(60°)$.
- **b.** Un brazo plano 3R con $\ell_1 = 1$, $\ell_2 = 0{,}8$ y $\ell_3 = 0{,}5$ debe llevar el
  extremo a $(x, y) = (1{,}2;\ 0{,}9)$ con orientación $\varphi = 60°$. De las dos soluciones,
  toma la que tiene $\theta_2 > 0$ y da $\theta_1$ en radianes, reducido al intervalo
  $[0, 2\pi)$.
- **c.** La manipulabilidad $w = \sqrt{\det(J_p J_p^{\mathsf T})}$ del jacobiano de posición
  $2 \times 3$ en esa configuración.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9\,\theta\rfloor$, y análogamente $b$ y
$c$.
