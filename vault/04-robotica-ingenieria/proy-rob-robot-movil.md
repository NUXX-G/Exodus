---
id: proy-rob-robot-movil
title: "Proyecto: navegación de un robot móvil diferencial (odometría, localización con EKF, planificación con A* y seguimiento de trayectorias)"
area: robotica
trunk_level: 19
kind: proyecto
prerequisites: [rob-planificacion-movimiento, rob-percepcion-slam]
academic_sources:
  - "Siegwart, R.; Nourbakhsh, I. R.; Scaramuzza, D. Introduction to Autonomous Mobile Robots, 2ª ed. MIT Press, 2011 (cinemática diferencial y odometría)."
  - "Thrun, S.; Burgard, W.; Fox, D. Probabilistic Robotics. MIT Press, 2005 (cap. 7: localización con EKF y marcas conocidas)."
  - "Hart, P. E.; Nilsson, N. J.; Raphael, B. A Formal Basis for the Heuristic Determination of Minimum Cost Paths. IEEE Trans. SSC 4(2), 1968; LaValle, S. M. Planning Algorithms. Cambridge University Press, 2006."
  - "Coulter, R. C. Implementation of the Pure Pursuit Path Tracking Algorithm. Informe CMU-RI-TR-92-01, Carnegie Mellon University, 1992."
attachments: [prueba.sh]
exercises:
  - id: hito-1-odometria
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `robot odometria ARCHIVO` lee el radio de las ruedas, la distancia entre ellas, los pulsos por vuelta y los incrementos de pulsos de cada paso, integra la pose de un robot diferencial con arcos exactos (§2) e imprime la pose cada 10 pasos y al final, y la distancia recorrida. Si falta un parámetro, código 1.

      Comprueba con `bash prueba.sh ./robot 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c3116c5cb39e3b4d71d95dc59481609dc8df9caa57445a008cab0047ae013cfa"]
  - id: hito-2-ekf
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `robot ekf ARCHIVO` localiza el robot con un filtro de Kalman extendido: predicción con el modelo de movimiento y corrección con medidas de distancia y rumbo a marcas conocidas, con los ángulos normalizados (§3). Imprime la pose, las varianzas y el número de observaciones; una marca desconocida da código 1.

      Comprueba con `bash prueba.sh ./robot 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:b355b132f2539caa927772289b768208fafd56807d236097c592c07ad98b7120"]
  - id: hito-3-a-estrella
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `robot astar MAPA astar|dijkstra` busca el camino más barato en una rejilla con 8 vecinos (coste 10 y 14, sin cortar esquinas) con la heurística octil o sin ella, con el desempate exacto del §4, e imprime el coste, los nodos expandidos, los pasos y el mapa con el camino.

      Comprueba con `bash prueba.sh ./robot 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:9bbdb63e279200b1ce97317ed8d69fc65e7e54f59cb3d503e47b7c0fa42a086e"]
  - id: hito-4-persecucion-pura
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `robot sigue ARCHIVO` sigue una ruta poligonal con el controlador de persecución pura (§5) e imprime si llega, en cuántos pasos, el error lateral máximo y la pose final.

      Comprueba con `bash prueba.sh ./robot 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:128aa0ab0383ae5bc7a2246488c72b0b818c533ed70e9130952419fd8fd38659"]
  - id: hito-5-mision
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** `robot mision MAPA CELDA v Ld` planifica con A*, simplifica el camino a sus vértices, lo convierte a metros y lo sigue con persecución pura (§6).

      Comprueba con `bash prueba.sh ./robot 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4ef2cc6cc3ce2a6f5b6c0f80a66871ee07f9c31f577fef1bb91c5d71ddeacc69"]
---

Vas a escribir **`robot`**, la pila de navegación de un robot móvil de dos ruedas, la misma que tiene cualquier robot de reparto o aspiradora (y que ROS 2 Nav2 implementa a escala industrial,
[[rob-ros2]]): estimar dónde está con la **odometría**, corregir la deriva con un **filtro de Kalman extendido** usando marcas conocidas, **planificar** un camino en un mapa con A* y **seguirlo** con un
controlador. Cada pieza aplica un nodo: [[rob-percepcion-slam]], [[rob-planificacion-movimiento]] y [[rob-control]]; juntas, son una misión completa.

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `robot` en el lenguaje que quieras con cinco órdenes (`odometria`, `ekf`, `astar`, `sigue` y `mision`). El adjunto **`prueba.sh`** las ejecuta sobre registros, mapas y rutas preparados y da un
código por hito; con `-v` muestra las salidas. Formato numérico: 7 cifras (`%.6e`) para poses y varianzas, 4 cifras (`%.3e`) para el resultado de un seguimiento, y 2 (`%.1e`, con `0.0e+00` por debajo de
10⁻¹²) para errores, siempre como el redondeo de x·(1 + 10⁻¹²). Los ángulos se normalizan a (−π, π] con atan2(sen θ, cos θ).

## 2. Odometría (`odometria ARCHIVO`)

Líneas `radio r`, `base L` y `ticks N` (los tres obligatorios y positivos; si no, código 1) y después un paso por línea con los incrementos de pulsos de la rueda izquierda y la derecha. Para cada paso:
d_i = 2πr·Δ_i/N (para cada rueda), d = (d_izq + d_der)/2 y Δθ = (d_der − d_izq)/L; la pose avanza por el **arco exacto**: si |Δθ| < 10⁻¹², en línea recta; si no, con R = d/Δθ,
x += R(sen(θ + Δθ) − sen θ), y −= R(cos(θ + Δθ) − cos θ), θ ← θ + Δθ (normalizado). Desde (0, 0, 0), imprime `paso x y θ` cada 10 pasos y en el último, y al final `distancia` (la suma de |d|). Piensa por qué
la odometría **deriva** sin límite y por qué el error de orientación es el más dañino.

## 3. Localización con EKF (`ekf ARCHIVO`)

Líneas: `marca j x y` (marcas conocidas), `inicio x y θ σx σy σθ` (media y desviaciones iniciales; covarianza diagonal), `q σx σy σθ` (ruido de proceso, sumado en el espacio de estado), `r σr σφ` (ruido de
medida) y, en orden, `mov v ω dt` y `obs j r φ`.

- **Predicción**: x' = x + v·dt·cos θ, y' = y + v·dt·sen θ, θ' = θ + ω·dt; G = ∂(x', y', θ')/∂(x, y, θ); P ← GPGᵀ + Q.
- **Corrección** con la marca j en (m_x, m_y): Δ = (m_x − x, m_y − y), q = |Δ|², ẑ = (√q, atan2(Δ_y, Δ_x) − θ); H = [[−Δ_x/√q, −Δ_y/√q, 0], [Δ_y/q, −Δ_x/q, −1]]; S = HPHᵀ + R; K = PHᵀS⁻¹; la
  **innovación** ν = (r − ẑ₁, φ − ẑ₂) con la componente angular **normalizada** (sin esto, un rumbo cerca de ±π da una corrección de casi 2π); x ← x + Kν; P ← (I − KH)P (o la forma de Joseph, que da lo mismo
  salvo redondeo y conserva mejor la simetría).
- Imprime `pose`, `varianzas` (la diagonal de P) y `observaciones`. Una marca desconocida da código 1.

## 4. A* en una rejilla (`astar MAPA astar|dijkstra`)

El mapa es un rectángulo de `.` (libre), `#` (obstáculo), `S` (salida) y `G` (meta). Vecinos en 8 direcciones con coste 10 (rectos) y 14 (diagonales, una aproximación entera de 10√2 que hace la búsqueda exacta y
reproducible); una diagonal **no puede cortar esquinas** (exige que las dos casillas rectas que la flanquean estén libres). Heurística **octil** h = 14·min(Δf, Δc) + 10·(max − min), que es admisible y consistente
(en `dijkstra`, h = 0).

- Una cola de prioridad ordenada por (f, h, fila, columna) **lexicográficamente**; al sacar un nodo ya cerrado se ignora; si no, se cierra (cuenta como **expandido**) y, si es la meta, se acaba. Un vecino se
  actualiza (g y padre) solo si mejora **estrictamente** su g, y se mete otra vez en la cola.
- Imprime `coste`, `expandidos`, `pasos` (número de movimientos) y el mapa con el camino marcado con `*` (sin tocar S y G); sin camino, `coste -` y `expandidos`.
- Compara: con la heurística, A* expande muchos menos nodos que Dijkstra en espacio abierto, y casi los mismos en un laberinto de pasillos.

## 5. Persecución pura (`sigue ARCHIVO`)

Líneas `v`, `ld` (distancia de anticipación), `wmax`, `dt`, `maxpasos`, `tol`, `inicio x y θ`, y los vértices de la ruta (al menos dos). La ruta se **remuestrea** a una separación de 0,05: cada segmento se
divide en ⌈longitud/0,05⌉ partes iguales (con un margen de 10⁻⁹). En cada paso:

1. **Progreso**: el índice del punto remuestreado más cercano al robot entre el progreso actual y 50 puntos más adelante (el primero si hay empate).
2. **Objetivo**: el primer punto, desde el progreso, a distancia ≥ ld; si no hay ninguno, el último.
3. **Control**: α = ángulo al objetivo en el marco del robot (normalizado); ω = v·2 sen α / ld, limitada a ±wmax.
4. **Movimiento**: un arco exacto de longitud v·dt y giro ω·dt.
5. **Error lateral**: la distancia del robot a la ruta poligonal original; se guarda el máximo.
6. Termina con éxito si la distancia al último punto es menor que `tol`.

Imprime `alcanzado si|no`, `pasos`, `error_max` y `final x y θ`. Experimenta: una anticipación pequeña sigue mejor la ruta pero oscila; una grande corta las curvas.

## 6. La misión (`mision MAPA CELDA v Ld`)

Planifica con A*; simplifica el camino a sus **vértices** (la salida, las casillas donde cambia la dirección y la meta); convierte cada casilla (fila f, columna c) a metros como ((c + 0,5)·CELDA, −(f + 0,5)·CELDA);
y la sigue con persecución pura desde el primer vértice, orientado hacia el segundo, con wmax = 2, dt = 0,05, 4000 pasos como máximo y tol = 0,1. Imprime `coste`, `vertices`, `alcanzado`, `pasos`,
`error_max` y `final x y` (o solo `alcanzado no` si no hay camino).

## 7. Arquitectura recomendada

Módulos separados (modelo cinemático, estimador, planificador, controlador) que se comunican con tipos claros (pose, ruta, mapa), como los nodos de ROS 2. Pruebas propias: girar en el sitio no cambia la posición;
el EKF sin observaciones solo hace crecer la covarianza; A* y Dijkstra dan siempre el mismo coste; y la persecución pura sobre una recta desde la propia recta tiene error lateral nulo.

## 8. Ampliaciones

Odometría con deslizamiento y calibración (UMBmark); localización por partículas (AMCL) y SLAM con EKF o por grafos; planificación con RRT* o retículas de estados que respeten la curvatura; control con MPC
([[rob-control-optimo-mpc]]) frente a persecución pura; evitación dinámica con la ventana dinámica (DWA); y llevarlo a ROS 2 con Gazebo y Nav2. El laboratorio `lab-rob-fusion-sensores` reconstruye una
trayectoria real a partir de registros de una IMU y de los codificadores.

## 9. Recursos

Siegwart, Nourbakhsh y Scaramuzza para la cinemática y la odometría; Thrun, Burgard y Fox para el EKF; el artículo de Hart, Nilsson y Raphael y el libro de LaValle para la planificación; el informe de Coulter sobre
la persecución pura. Más en la [página de recursos de robótica](/recursos/robotica).
