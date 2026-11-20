---
id: proy-rob-brazo
title: "Proyecto: un brazo robótico de 3 GDL (Denavit-Hartenberg, cinemática inversa, jacobiano y singularidades, trayectorias quínticas, dinámica de Lagrange y control por par calculado)"
area: robotica
trunk_level: 14
kind: proyecto
prerequisites: [rob-cinematica, rob-dinamica, rob-control]
academic_sources:
  - "Spong, M. W.; Hutchinson, S.; Vidyasagar, M. Robot Modeling and Control, 2ª ed. Wiley, 2020 (convención DH, inversa del brazo de codo, jacobiano, ecuaciones de Euler-Lagrange, control por dinámica inversa y par calculado)."
  - "Siciliano, B.; Sciavicco, L.; Villani, L.; Oriolo, G. Robotics: Modelling, Planning and Control. Springer, 2009 (cap. 3: jacobiano y singularidades; cap. 4: planificación de trayectorias; cap. 8: control centralizado)."
  - "Lynch, K. M.; Park, F. C. Modern Robotics: Mechanics, Planning, and Control. Cambridge University Press, 2017 (cap. 9: escalado temporal quíntico; cap. 11: control por par calculado)."
  - "Denavit, J.; Hartenberg, R. S. A Kinematic Notation for Lower-Pair Mechanisms Based on Matrices. Journal of Applied Mechanics 22(2), 215-221, 1955; Yoshikawa, T. Manipulability of Robotic Mechanisms. International Journal of Robotics Research 4(2), 1985."
attachments: [prueba.sh]
exercises:
  - id: hito-1-cinematica-directa
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `brazo directa q1 q2 q3` (radianes) multiplica las matrices de Denavit-Hartenberg (convención estándar, §2) de la tabla (θ, d, a, α) = (q1, 0.4, 0, π/2), (q2, 0, 0.5, 0), (q3, 0, 0.4, 0) e imprime la posición del extremo `p x y z` y la orientación R₀³ en tres líneas `R r_i1 r_i2 r_i3`. Cada número se imprime con `%.6e` como el redondeo de x·(1 + 10⁻¹²), y `0.000000e+00` si |x| < 10⁻¹². Un número de argumentos incorrecto o un argumento no numérico terminan con código 1.

      Comprueba con `bash prueba.sh ./brazo 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:eb37e38a4ef04e8b88cc8bd27a4c29b9023d01caad1ff49b5bfa22015f6df5ad"]
  - id: hito-2-cinematica-inversa
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `brazo inversa x y z` imprime las dos soluciones de la inversa geométrica del §3 con q1 = atan2(y, x): `codo-arriba q1 q2 q3` (q3 = −arccos D) y `codo-abajo q1 q2 q3` (q3 = +arccos D), con D = (r² + s² − a₂² − a₃²)/(2a₂a₃), r = √(x² + y²), s = z − d₁, y q2 en (−π, π]. Si r < 10⁻⁹ imprime solo `singular` y si |D| > 1, solo `inalcanzable`. Cada número se imprime con `%.6e` como el redondeo de x·(1 + 10⁻¹²), y `0.000000e+00` si |x| < 10⁻¹². Un número de argumentos incorrecto o un argumento no numérico terminan con código 1.

      Comprueba con `bash prueba.sh ./brazo 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:ca631142e7339b17f0ac4402159b59f52cd6ffb5dd60dcf07c2c3de2d8c451ed"]
  - id: hito-3-jacobiano
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `brazo jacobiano q1 q2 q3` imprime el jacobiano lineal J_v = ∂p/∂q (3 × 3) en tres líneas `J`, su determinante `det` y la `manipulabilidad` de Yoshikawa √det(J_v·J_vᵀ). Cada número se imprime con `%.6e` como el redondeo de x·(1 + 10⁻¹²), y `0.000000e+00` si |x| < 10⁻¹². Un número de argumentos incorrecto o un argumento no numérico terminan con código 1.

      Comprueba con `bash prueba.sh ./brazo 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:662f168f91ff136d37ef051a32f8ab8122c13b10086e8079115a179552b51d71"]
  - id: hito-4-trayectoria-quintica
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `brazo trayectoria q0 qf T t1 t2 …` imprime, para cada instante, una línea `t q dq ddq` con la posición, velocidad y aceleración de la quíntica de reposo a reposo q(t) = q0 + (qf − q0)·(10τ³ − 15τ⁴ + 6τ⁵), τ = t/T. Fuera de [0, T] la articulación está parada en q0 (antes) o qf (después), con velocidad y aceleración nulas. T ≤ 0 o ningún instante, código 1. Cada número se imprime con `%.6e` como el redondeo de x·(1 + 10⁻¹²), y `0.000000e+00` si |x| < 10⁻¹². Un número de argumentos incorrecto o un argumento no numérico terminan con código 1.

      Comprueba con `bash prueba.sh ./brazo 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:928df69bf7b3bea71941ab3cdb20d8ba53bf5d44d3042ab352b19dc5a817e9bb"]
  - id: hito-5-dinamica
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** `brazo dinamica q2 q3 dq2 dq3 tau2 tau3` usa el modelo del §5: el brazo en su plano vertical (q1 fijo) como dos varillas uniformes de longitudes a₂ = 0.5 y a₃ = 0.4 m y masas m₂ = 2 y m₃ = 1.5 kg (centro de masas en la mitad, momento de inercia m·a²/12 respecto a él), g = 9.81 m/s² y q2 medido desde la horizontal. Imprime `M M11 M12 M22` (matriz de inercia), `C` (el vector C(q, q̇)·q̇), `g` (el vector de gravedad) y `ddq` (las aceleraciones que da M·q̈ + C·q̇ + g = τ). Cada número se imprime con `%.6e` como el redondeo de x·(1 + 10⁻¹²), y `0.000000e+00` si |x| < 10⁻¹². Un número de argumentos incorrecto o un argumento no numérico terminan con código 1.

      Comprueba con `bash prueba.sh ./brazo 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:1444ab46ce75c0870ed442c80e52e68c1ee59e8515ba9629a36f50e9f4e66d7e"]
  - id: hito-6-par-calculado
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** `brazo control a2 a3 b2 b3 T kp kd m2e m3e`: la referencia de cada articulación es la quíntica del hito 4 de (a2, a3) a (b2, b3) en T segundos. El brazo real (el modelo del hito 5) parte del reposo en (a2 + 0.1, a3 − 0.05) y lo mueve el control por par calculado τ = M̂(q)·(q̈d + kd·(q̇d − q̇) + kp·(qd − q)) + Ĉ(q, q̇)·q̇ + ĝ(q), cuyo modelo usa las masas estimadas m2e y m3e. Integra con RK4 de paso 0.001 s durante round(1000·(T + 1)) pasos, recalculando τ en cada etapa con el estado y el tiempo de esa etapa. Imprime `error_max_tras_0.5s` (el máximo de ‖qd − q‖ al final de los pasos que terminan en t ≥ 0.5), `error_final` (‖qd − q‖ en t = T + 1), `par_max` (el máximo de |τ2| y |τ3| calculados con el estado al principio de cada paso) y `q_final q2 q3`. Si T, kp, kd, m2e o m3e no son positivos, código 1. Cada número se imprime con `%.6e` como el redondeo de x·(1 + 10⁻¹²), y `0.000000e+00` si |x| < 10⁻¹². Un número de argumentos incorrecto o un argumento no numérico terminan con código 1.

      Comprueba con `bash prueba.sh ./brazo 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:df5b9b285bfc39fe53a91ec86a1c4bc3c1f3545618e915967bad729a3a7da405"]
---

Vas a escribir **`brazo`**, el núcleo de software de un brazo robótico de tres articulaciones de rotación con la geometría de un brazo industrial de codo (base que gira, hombro y codo): dónde está la
herramienta para unos ángulos dados, qué ángulos llevan la herramienta a un punto, qué configuraciones son peligrosas, cómo moverse suavemente y qué pares deben dar los motores para seguir una trayectoria aunque
el modelo de masas no sea exacto. Es la cadena completa que hay dentro del controlador de cualquier robot manipulador. Aplica [[rob-cinematica]], [[rob-dinamica]] y [[rob-control]]; el proyecto hermano,
[[proy-rob-robot-movil]], hace lo mismo con un robot con ruedas.

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `brazo` en el lenguaje que quieras, con seis órdenes (`directa`, `inversa`, `jacobiano`, `trayectoria`, `dinamica` y `control`), una por hito, con el contrato exacto de los ejercicios. El
adjunto **`prueba.sh`** ejecuta tu programa en casos preparados y da un código por hito si todo coincide; con `-v` muestra cada salida.

Los números se escriben con `%.6e` de C (`-4.296393e+00`) como el redondeo correcto de **x·(1 + 10⁻¹²)**, que resuelve los empates igual en cualquier lenguaje, y como `0.000000e+00` cuando |x| < 10⁻¹². Esa
última regla importa: en coma flotante sen(π) no es 0 sino 1.2·10⁻¹⁶, y los ceros estructurales (una fila del jacobiano en una singularidad, un par de gravedad con el brazo vertical) deben salir como cero.

El brazo: d₁ = 0.4 m (altura del hombro sobre la base), a₂ = 0.5 m (brazo) y a₃ = 0.4 m (antebrazo).

## 2. Cinemática directa con Denavit-Hartenberg

La convención de **Denavit y Hartenberg** (1955), en la forma estándar que usa Spong, describe cada eslabón con cuatro números: el marco i se obtiene del i − 1 girando θᵢ alrededor de zᵢ₋₁, avanzando dᵢ por
zᵢ₋₁, avanzando aᵢ por el nuevo xᵢ y girando αᵢ alrededor de xᵢ:

Aᵢ = Rot_z(θᵢ)·Trans_z(dᵢ)·Trans_x(aᵢ)·Rot_x(αᵢ) =
[[cθ, −sθ·cα, sθ·sα, a·cθ], [sθ, cθ·cα, −cθ·sα, a·sθ], [0, sα, cα, d], [0, 0, 0, 1]].

En una articulación de rotación θᵢ es la variable qᵢ y los otros tres son constantes del diseño. Para este brazo la tabla es (q₁, d₁, 0, π/2), (q₂, 0, a₂, 0), (q₃, 0, a₃, 0): la base gira alrededor de la
vertical, y el α₁ = π/2 tumba el marco para que el hombro y el codo giren alrededor de ejes horizontales. La pose del extremo es T₀³ = A₁·A₂·A₃; su última columna es la posición y el bloque 3 × 3 superior la
orientación. Antes de programar, deduce a mano la forma cerrada de p (es corta) y úsala como prueba: deben coincidir.

## 3. Cinemática inversa geométrica

Dado un punto (x, y, z), la base debe apuntar hacia él: q₁ = atan2(y, x). Mirado en el plano vertical que contiene al brazo, el problema queda en un brazo plano de dos eslabones con el objetivo a distancia
horizontal r = √(x² + y²) y altura s = z − d₁. El teorema del coseno da el ángulo del codo,

cos q₃ = D = (r² + s² − a₂² − a₃²)/(2a₂a₃),

con dos soluciones, q₃ = ±arccos D (**codo arriba** y **codo abajo**), y la del hombro sale de restar al ángulo del objetivo el ángulo que el antebrazo forma con el brazo:
q₂ = atan2(s, r) − atan2(a₃ sen q₃, a₂ + a₃ cos q₃). Usa siempre `atan2`, nunca `atan`: distingue los cuadrantes.

Tres casos especiales: |D| > 1 significa que el punto está fuera del espacio de trabajo (demasiado lejos, más allá de a₂ + a₃, o demasiado cerca, a menos de a₂ − a₃ del hombro); r = 0 (el punto sobre el eje
de la base) es una **singularidad**: cualquier q₁ vale, hay infinitas soluciones. Y para cada punto alcanzable con r > 0 hay en realidad cuatro soluciones: las dos que pide el contrato y otras dos con la base
girada π (q₁ + π) y el hombro "por detrás"; el contrato se queda con las de q₁ = atan2(y, x).

## 4. Jacobiano, singularidades y manipulabilidad

La velocidad del extremo depende linealmente de las velocidades articulares, ṗ = J_v(q)·q̇, con J_v = ∂p/∂q. Hay dos maneras de calcularlo, y conviene programar las dos para compararlas:

- derivando a mano la forma cerrada de p;
- con la fórmula **geométrica**: la columna k de una articulación de rotación es z_{k−1} × (pₑ − p_{k−1}), donde z_{k−1} y p_{k−1} son el eje y el origen del marco k − 1 (columnas 3 y 4 de T₀^{k−1}).

Como aquí J_v es cuadrada, el brazo pierde movilidad exactamente donde det J_v = 0. Factorizando el determinante salen dos familias de singularidades, con significado físico claro: el **codo** estirado o plegado
(sen q₃ = 0: el extremo no puede moverse en la dirección del brazo) y el **hombro** con la muñeca sobre el eje de la base (a₂ cos q₂ + a₃ cos(q₂ + q₃) = 0, la r = 0 del §3). Cerca de ellas, pequeñas
velocidades del extremo exigen velocidades articulares enormes. La **manipulabilidad** de Yoshikawa, √det(J·Jᵀ), mide lo lejos que se está de una singularidad (con J cuadrada es |det J|).

## 5. Trayectorias quínticas

Saltar de una posición a otra exige aceleraciones infinitas. El escalado temporal **quíntico** s(τ) = 10τ³ − 15τ⁴ + 6τ⁵, τ = t/T, es el polinomio de menor grado con s(0) = 0, s(1) = 1 y velocidad y aceleración
nulas en los dos extremos (seis condiciones, seis coeficientes): q(t) = q₀ + (q_f − q₀)·s(t/T). Deriva s dos veces para obtener la velocidad y la aceleración (recuerda el factor 1/T por cada derivada). Que la
aceleración empiece y acabe en cero hace que el par de los motores no tenga saltos.

## 6. Dinámica de Euler-Lagrange

Para la dinámica se fija la base (q₁ constante) y se estudia el brazo en su plano vertical: dos varillas uniformes, de masas m₂ = 2 kg y m₃ = 1.5 kg, con el centro de masas en la mitad (ℓᵢ = aᵢ/2) y
momento de inercia mᵢaᵢ²/12 respecto a él; q₂ se mide desde la horizontal y g = 9.81 m/s². Las ecuaciones de **Euler-Lagrange** con L = K − P dan

M(q)·q̈ + C(q, q̇)·q̇ + g(q) = τ.

- **Inercia**: K = ½ q̇ᵀM(q)q̇ con M = Σᵢ (mᵢ J_{vᵢ}ᵀ J_{vᵢ} + J_{ωᵢ}ᵀ Iᵢ J_{ωᵢ}), donde J_{vᵢ} es el jacobiano de la velocidad del **centro de masas** i (no del extremo) y J_{ωᵢ} el de su velocidad angular (en el
  plano, la fila (1, 0) para el brazo y (1, 1) para el antebrazo). M es simétrica y definida positiva, y aquí solo depende de q₃.
- **Coriolis y centrífugos**: con los **símbolos de Christoffel** cᵢⱼₖ = ½(∂M_kj/∂qᵢ + ∂M_ki/∂qⱼ − ∂M_ij/∂q_k), el término k es Σᵢⱼ cᵢⱼₖ q̇ᵢq̇ⱼ. La propiedad Ṁ − 2C antisimétrica es la base de muchas
  demostraciones de estabilidad.
- **Gravedad**: g(q) = ∂P/∂q, con P = Σᵢ mᵢ g·(altura del centro de masas i).

Resolver la ecuación para q̈ (un sistema 2 × 2) da la **dinámica directa** (qué hace el brazo con unos pares); despejar τ para un q̈ deseado, la **inversa** (qué pares hacen falta). Una comprobación
inmediata: con el brazo quieto, τ = g(q) lo mantiene en equilibrio.

## 7. Control por par calculado

El **par calculado** (dinámica inversa) aplica τ = M̂(q)·v + Ĉ(q, q̇)·q̇ + ĝ(q) con v = q̈_d + K_d(q̇_d − q̇) + K_p(q_d − q). Si el modelo es exacto (M̂ = M, etc.), la dinámica no lineal se cancela y el error
e = q_d − q de cada articulación cumple la ecuación lineal desacoplada ë + K_d ė + K_p e = 0: con K_p = ω² y K_d = 2ω (amortiguamiento crítico) el error cae como (e₀ + (ωe₀ + ė₀)t)·e^(−ωt). Esa fórmula es una
prueba excelente de tu simulador en el caso del modelo exacto.

Si las masas estimadas no son las reales, la cancelación deja de ser exacta: aparece un error permanente que es mayor cuanto menores son las ganancias, y subir las ganancias lo reduce a costa de pares más
grandes. Los casos del hito 6 recorren esos regímenes. Para simular, el estado es (q₂, q₃, q̇₂, q̇₃) y su derivada se obtiene con la dinámica directa del §6 aplicada al par del controlador; **Runge-Kutta 4**
con paso de 1 ms es más que suficiente.

## 8. Arquitectura recomendada

- Separa el modelo (cinemática, M, C, g) del controlador y del integrador: el controlador debe recibir su **propio** modelo (con las masas estimadas) y el simulador el real.
- Pruebas propias: directa(inversa(p)) = p para las dos soluciones; el jacobiano numérico (diferencias centradas de directa, h ≈ 10⁻⁶) coincide con el analítico; M simétrica y definida positiva; la energía
  K + P se conserva al simular sin par y sin gravedad, o solo con gravedad; con el modelo exacto, el error del control sigue la fórmula del §7.
- Errores típicos: mezclar grados y radianes, usar el jacobiano del extremo en vez del del centro de masas en M, olvidar el factor 1/T en las derivadas de la quíntica, y calcular el par del controlador una sola vez
  por paso en vez de en cada etapa de RK4 (el contrato lo recalcula en cada etapa).

## 9. Ampliaciones

Una muñeca esférica (3 GDL más) con el desacoplo cinemático de Pieper; cinemática inversa numérica con el método de Levenberg-Marquardt (mínimos cuadrados amortiguados), que se comporta bien cerca de las
singularidades; la dinámica de Newton-Euler recursiva, que escala como O(n); control adaptativo (Slotine-Li), que estima las masas mientras sigue la trayectoria; límites de par y saturación de los motores;
fricción; y un visor en el navegador que dibuje el brazo moviéndose.

## 10. Recursos

Spong, Hutchinson y Vidyasagar (capítulos 3 a 9), Siciliano et al. (capítulos 2 a 4 y 8) y Lynch y Park (capítulos 4, 6, 8, 9 y 11; el libro y sus vídeos son de acceso libre en la web de los autores, y en
el curso «Modern Robotics» de Northwestern en Coursera). En vídeo, las clases de robótica de Peter Corke (QUT Robot Academy) cubren DH, jacobianos y dinámica con animaciones. La teoría, en [[rob-cinematica]]
y [[rob-dinamica]].
