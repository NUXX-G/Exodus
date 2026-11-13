---
id: rob-planificacion-movimiento
title: "Planificación de movimiento: espacio de configuraciones, búsqueda en grafos (Dijkstra, A*), métodos por muestreo (PRM, RRT, RRT*), campos de potencial y generación de trayectorias"
area: robotica
trunk_level: 18
prerequisites: [rob-percepcion-slam, rob-dinamica, prog-algoritmos]
academic_sources:
  - "LaValle, S. M. Planning Algorithms. Cambridge University Press, 2006."
  - "Lynch, K. M.; Park, F. C. Modern Robotics: Mechanics, Planning, and Control. Cambridge University Press, 2017."
  - "Karaman, S.; Frazzoli, E. Sampling-based algorithms for optimal motion planning. The International Journal of Robotics Research 30(7), 846–894, 2011."
exercises:
  - id: camino-minimo
    tier: 1
    prompt: |
      Un grafo no dirigido tiene las aristas A–B 4, A–C 2, B–C 1, B–D 5, C–D 8, C–E 10, D–E 2, D–F 6 y E–F 3. ¿Cuánto cuesta el camino más corto de A a F? Respuesta: un número.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: distancia-octil
    tier: 1
    prompt: |
      En una rejilla 8-conexa sin obstáculos (coste 1 en recto y $\sqrt2$ en diagonal), ¿cuánto cuesta ir de la celda $(0,0)$ a la $(7,3)$? Respuesta: con **4 decimales**.
    answers: ["sha256:dcffb15821c349cd74e72639db4b30f56081bc4e0c0e12060390487b50b843ec"]
  - id: trayectoria-cubica
    tier: 1
    prompt: |
      Una articulación va de 0 a 1 rad en 2 s con un polinomio cúbico y velocidades nulas al principio y al final. ¿Cuál es su velocidad máxima (rad/s) y su aceleración máxima en valor absoluto (rad/s²)? Respuesta: `v;a`.
    answers: ["sha256:c10fb1507e4176e395f108880ac2bb2a09b6c3f986836410420176d62248c6b7"]
  - id: perfil-trapezoidal
    tier: 1
    prompt: |
      ¿En cuánto tiempo mínimo recorre una articulación 2 rad, partiendo y llegando parada, con $v_{max} = 1$ rad/s y $a_{max} = 2$ rad/s²? Respuesta: en s.
    answers: ["sha256:b8736b999909049671d0ea075a42b308a5fbe2df1854899123fe09eb0ee9de61"]
  - id: espacio-de-configuraciones
    tier: 1
    prompt: |
      Un robot cuadrado de 0,4 m de lado se traslada sin girar entre obstáculos. ¿Qué área ocupa en su espacio de configuraciones (la posición de su centro) un obstáculo rectangular de 2 × 1 m alineado con él? Respuesta: en m² con **2 decimales**.
    answers: ["sha256:7f7222276af61e16f8d1c745cffbde2ec6c6c7450ce875272705cb68b4ea6737"]
  - id: paso-de-rrt
    tier: 1
    prompt: |
      Un RRT tiene los nodos $(0,0)$, $(2,1)$ y $(1,3)$. Sale la muestra $(4,4)$ y el paso máximo es 1. ¿Dónde se coloca el nuevo nodo? Respuesta: `x;y` con **4 decimales**.
    answers: ["sha256:2f48413e538fd4ab53b69e379302074fa06b94d55a35e0adbfdc0a78aad44f49"]
  - id: paso-estrecho
    tier: 1
    prompt: |
      Un paso estrecho ocupa el 0,2 % del espacio de configuraciones. ¿Qué probabilidad hay de que al menos una de 1000 muestras uniformes independientes caiga en él? Respuesta: con **4 decimales**.
    answers: ["sha256:3853f674d6c034b05b5c47a394a28000edbc4a18d6442de897d13b8d75664413"]
  - id: trayectoria-quintica
    tier: 2
    prompt: |
      La misma articulación (0 a 1 rad en 2 s) sigue un polinomio quíntico con velocidad y aceleración nulas en los extremos. ¿Cuál es la velocidad máxima y la aceleración máxima en valor absoluto? Respuesta: `v;a` con **4 decimales**.
    answers: ["sha256:73e360c75f8b155f3f11de5e5229c94830f5b1036b41d13709bf1f4590bc72ec"]
  - id: comprobacion-de-colision
    tier: 2
    prompt: |
      Un tramo recto va de $(0,0)$ a $(10,4)$, parametrizado por $s \in [0, 1]$. ¿En qué $s$ toca por primera vez el círculo de centro $(6,3)$ y radio 1,5? Respuesta: con **4 decimales**.
    answers: ["sha256:c0f0cc2382567151249ea98386ee06920c87d521235f1dc350fa66aba567d83b"]
  - id: movimiento-sincronizado
    tier: 2
    prompt: |
      Dos articulaciones deben moverse 1 y 2 rad en línea recta en el espacio articular (empezando y terminando a la vez, paradas), con límites de velocidad 1 y 1,5 rad/s y de aceleración 2 y 2 rad/s². ¿Cuál es el tiempo mínimo? Respuesta: en s con **4 decimales**.
    answers: ["sha256:7289722c69aba5eaad1507f235e2fe824770fae2e4aded2c714f761a0b63de5e"]
  - id: grafo-de-visibilidad
    tier: 2
    prompt: |
      Un robot puntual va de $(0,0)$ a $(10,0)$ y hay un obstáculo cuadrado $[4,6]\times[-1,1]$. ¿Cuánto mide el camino más corto que lo rodea? Respuesta: con **4 decimales**.
    answers: ["sha256:d7e3b4d15bb9be15db7f854fdedeec4bf682f7e80db3d41d4309f6cba3ebe01d"]
  - id: longitud-de-bezier
    tier: 2
    prompt: |
      Un camino suavizado es la curva de Bézier cúbica de puntos de control $(0,0)$, $(1,2)$, $(3,2)$, $(4,0)$. ¿Cuánto mide? Respuesta: con **4 decimales**.
    answers: ["sha256:72198400ef0872c99562109e8e9a5c7cd293bb71ec28f8c6573c992f83e20364"]
  - id: tiempo-hasta-colision
    tier: 2
    prompt: |
      Dos robots circulares de radios 0,3 y 0,4 m están en $(0,0)$ y $(5; 0{,}5)$ y se mueven con velocidades $(1,0)$ y $(-1,0)$ m/s. ¿Cuándo chocan, en s? Respuesta: con **3 decimales**.
    answers: ["sha256:76730fb9f8cf7260f3bf5abaed96e322c2dab08586a91eb8d803ad7a58f832d0"]
  - id: perfil-de-velocidad
    tier: 2
    prompt: |
      Un vehículo recorre 10 m rectos, un cuarto de circunferencia de radio 5 m y otros 10 m rectos, de parado a parado, con aceleración longitudinal $\le 1$ m/s², lateral $\le 2$ m/s² y velocidad $\le 5$ m/s. ¿Cuál es el tiempo mínimo? Respuesta: en s con **2 decimales**.
    answers: ["sha256:d6d9578c71dbdcefa74d93854609537822c22e23f25f5de4bbab460a13d84c51"]
  - id: minimo-local
    tier: 3
    prompt: |
      Un robot sobre el eje $x$ sigue el gradiente de un potencial con atracción $\frac{1}{2}(x - 10)^2$ y la repulsión $\frac{1}{2}\eta\left(\frac{1}{\rho} - \frac{1}{\rho_0}\right)^2$ ($\eta = 20$, $\rho_0 = 3$, $\rho = |x - 5|$, nula si $\rho \ge \rho_0$) de un obstáculo en $x = 5$. Partiendo de $x = 0$, ¿dónde se detiene? Respuesta: con **4 decimales**.
    answers: ["sha256:a211e06d508d6082f003367cc2b38decbe2e1687bb7b6ab24c3b346555174be5"]
  - id: a-estrella-con-muro
    tier: 3
    prompt: |
      En una rejilla de 10 × 10 celdas, 8-conexa (coste 1 y $\sqrt2$) y sin cortar esquinas de obstáculos, las celdas $(5, y)$ con $y = 0..8$ son muro. ¿Cuánto cuesta el camino más corto de $(0,0)$ a $(9,0)$? Respuesta: con **4 decimales**.
    answers: ["sha256:2329dfe65c53c17c5a2ced5621d9bab9f945f871083110ecf63449499f2da51c"]
---

Con un mapa ([[rob-percepcion-slam]]) y un modelo del robot ([[rob-dinamica]]), queda la pregunta de **cómo ir** de aquí a allí sin chocar, respetando los límites del robot y,
si es posible, de la mejor forma. La planificación de movimiento separa dos problemas: encontrar un **camino** geométrico libre de colisiones en el espacio de
configuraciones, y convertirlo en una **trayectoria** (con tiempos, velocidades y aceleraciones) que el controlador pueda seguir. Este nodo recorre los métodos
completos sobre grafos, los probabilísticos por muestreo que dominan en alta dimensión, los reactivos y la parametrización temporal, con las
garantías que da cada uno.

## Objetivos

Al terminar sabrás:

1. Formular el problema en el espacio de configuraciones (C-espacio) y construir obstáculos en él.
2. Buscar caminos óptimos en grafos y rejillas con Dijkstra y A*, y elegir heurísticas admisibles.
3. Usar PRM, RRT y RRT*, y entender la completitud probabilística y la optimalidad asintótica.
4. Reconocer los mínimos locales de los campos de potencial.
5. Generar trayectorias (polinomios cúbicos y quínticos, perfiles trapezoidales, parametrización temporal con límites) y comprobar colisiones.

## Qué debes dominar antes

[[rob-percepcion-slam]] (mapas de ocupación), [[rob-dinamica]] (límites de par y aceleración), [[prog-algoritmos]] (grafos, colas de prioridad) y la cinemática de [[rob-cinematica]].

> [!question] Test de entrada
> 1. ¿Qué estructura de datos necesita Dijkstra para ser eficiente?
> 2. ¿Cuántos grados de libertad tiene un brazo de 6 articulaciones? ¿Y un robot móvil en el plano?
> 3. ¿Qué es la suma de Minkowski de dos conjuntos?
>
> Respuestas: una cola de prioridad (montículo); 6 y 3 ($x, y, \theta$); el conjunto de todas las sumas $a + b$ con $a$ en uno y $b$ en el otro.

## 1. Para qué sirve

- **Robots móviles**: los planificadores globales de Nav2 (A*, Theta*, Smac con estados de Hybrid-A*) y los controladores locales que siguen el plan.
- **Brazos**: MoveIt 2 planifica con OMPL (RRT, RRT-Connect, PRM, RRT* y variantes) en espacios de 6 o 7 dimensiones.
- **Vehículos autónomos y drones**: retículas de estados, Hybrid-A* para aparcar, trayectorias de mínimo jerk o snap.
- **Videojuegos y animación**: navegación de personajes con A* sobre mallas de navegación.

## 2. El espacio de configuraciones

Una **configuración** $q$ fija la posición de todos los puntos del robot; el **C-espacio** es el conjunto de configuraciones (un plano $\mathbb{R}^2$ para un robot que se traslada, $\mathbb{R}^2\times S^1$ si
además gira, un toro $T^n$ para un brazo de $n$ articulaciones de revolución). Un obstáculo del mundo se convierte en un **C-obstáculo**: las configuraciones en las que el robot lo toca.
Para un robot que solo se traslada, es la **suma de Minkowski** del obstáculo con el robot reflejado: un robot cuadrado de lado $a$ "engorda" cada obstáculo $a/2$ por cada lado (por eso
los mapas de costes inflan los obstáculos con el radio del robot). En un brazo, los C-obstáculos tienen formas complicadas y no se construyen explícitamente: se pregunta a un
**comprobador de colisiones** si una $q$ concreta choca (con jerarquías de volúmenes envolventes, como en FCL).

El problema: encontrar un camino continuo $q(s)$, $s \in [0, 1]$, de $q_{inicio}$ a $q_{meta}$ dentro del C-espacio libre. Un algoritmo es **completo** si encuentra un camino cuando existe y dice que
no lo hay cuando no existe; en general el problema es PSPACE-difícil (Reif, 1979), lo que explica que en alta dimensión se renuncie a la completitud exacta.

## 3. Búsqueda en grafos: Dijkstra y A*

Discretizando (una rejilla, una retícula de estados, un grafo de visibilidad), planificar es buscar un camino mínimo. **Dijkstra** expande los nodos en orden de coste desde el
origen. **A*** ordena por $f(n) = g(n) + h(n)$, con $h$ una estimación del coste restante: si $h$ es **admisible** (nunca sobreestima) A* devuelve el óptimo, y si además es **consistente** ($h(n) \le c(n, n') + h(n')$)
no reabre nodos. Cuanto más informada, menos expande: en rejillas 4-conexas se usa la distancia Manhattan, en 8-conexas la **octil** $\max(\Delta x, \Delta y) + (\sqrt2 - 1)\min(\Delta x, \Delta y)$, y en el plano continuo
la euclídea. **A* ponderado** ($g + \varepsilon h$) encuentra antes un camino a costa de que sea hasta $\varepsilon$ veces peor; D* Lite replanifica de forma incremental cuando el mapa cambia.

En el plano, el camino más corto entre obstáculos poligonales pasa por sus **vértices**: el **grafo de visibilidad** (vértices que se ven entre sí) más Dijkstra lo encuentra exactamente. Los caminos
de rejilla tienen giros artificiales de 45°; Theta* y el suavizado posterior los corrigen.

> [!example] Ejemplo resuelto 1: A* frente a Dijkstra
> En una rejilla 4-conexa de 6 × 5 con un muro en $x = 3$ para $y = 0..3$, ir de $(0,0)$ a $(5,0)$ obliga a subir hasta $y = 4$: $4 + 5 + 4 = 13$ pasos. Dijkstra y A* (Manhattan) devuelven ese coste; A* expande
> menos celdas porque no explora las que se alejan de la meta. Si la heurística sobreestimara (por ejemplo, el doble de Manhattan), A* podría devolver un camino peor.

## 4. Métodos por muestreo

En 6 o 7 dimensiones una rejilla es inviable ($100^7$ celdas). Los métodos por muestreo solo necesitan el comprobador de colisiones:

- **PRM** (*probabilistic roadmap*): muestrea configuraciones libres, conecta cada una con sus vecinas cercanas si el segmento está libre, y busca en el grafo resultante. Se construye una vez y
  sirve para muchas consultas en el mismo entorno.
- **RRT** (*rapidly-exploring random tree*): desde el inicio, muestrea un punto, busca el nodo más cercano del árbol y avanza hacia él un paso máximo si está libre. Crece hacia las zonas inexploradas
  (sesgo de Voronoi) y es ideal para consultas únicas; RRT-Connect hace crecer dos árboles, desde el inicio y la meta.

Ambos son **probabilísticamente completos**: la probabilidad de fallar si hay solución tiende a cero con el número de muestras. Pero los **pasos estrechos** son difíciles: si ocupan una
fracción $p$ del espacio, $N$ muestras los aciertan con probabilidad $1 - (1 - p)^N$. RRT y PRM devuelven caminos de coste arbitrario; **RRT*** y **PRM*** (Karaman y Frazzoli, 2011) reconectan los
vecinos dentro de un radio que decrece como $(\log n/n)^{1/d}$ y son **asintóticamente óptimos**, con coste computacional del mismo orden. Variantes como BIT* combinan búsqueda informada y muestreo.

## 5. Campos de potencial y planificación reactiva

Un **campo de potencial** suma una atracción hacia la meta y repulsiones de los obstáculos, y el robot sigue el gradiente negativo. Es rápido y reactivo, pero tiene **mínimos locales**: un obstáculo
entre el robot y la meta crea un punto donde las fuerzas se equilibran y el robot se para. Las **funciones de navegación** (Rimon y Koditschek) evitan los mínimos locales en entornos
concretos; en la práctica, los campos se usan como capa local bajo un planificador global. Los controladores locales de robots móviles (DWA, TEB, MPPI en Nav2) evalúan velocidades
admisibles a corto plazo frente a un coste que combina seguir el plan y evitar obstáculos, y los métodos de obstáculos de velocidad (VO, ORCA) predicen colisiones con otros
agentes calculando el **tiempo hasta la colisión**.

## 6. De camino a trayectoria

Un camino geométrico no dice cuándo. La **generación de trayectorias** le da tiempos:

- **Polinomios**: una **cúbica** $q(s) = q_0 + \Delta q(3s^2 - 2s^3)$, $s = t/T$, empieza y acaba con velocidad nula ($v_{max} = 1{,}5\,\Delta q/T$) pero con saltos de aceleración; la **quíntica** $10s^3 - 15s^4 + 6s^5$ anula
  también la aceleración en los extremos ($v_{max} = 1{,}875\,\Delta q/T$, $a_{max} = \frac{10}{\sqrt3}\Delta q/T^2$), con jerk finito y menos vibraciones.
- **Perfil trapezoidal**: aceleración máxima, crucero a velocidad máxima y frenada; tiempo $d/v + v/a$ si da tiempo a llegar a $v$ ($d \ge v^2/a$) y $2\sqrt{d/a}$ (triangular) si no. Con varias articulaciones
  **sincronizadas**, la más lenta fija el tiempo y las demás se escalan. Los perfiles en S limitan además el jerk.
- **Parametrización temporal óptima** a lo largo de un camino dado: con límites de velocidad y aceleración (y lateral en vehículos, $v \le \sqrt{a_{lat}R}$ en curvas), el algoritmo de **dos pasadas** (hacia delante
  acelerando al máximo y hacia atrás frenando al máximo, quedándose con el mínimo) da el perfil más rápido; TOPP-RA lo generaliza a límites de par.
- **Suavizado**: atajos entre puntos del camino y curvas (Bézier, B-splines) con continuidad de curvatura.

Toda trayectoria debe comprobarse **de forma continua**: muestrear el segmento con un paso tal que ningún punto del robot se mueva más que el margen de seguridad entre comprobaciones,
o usar comprobaciones de barrido.

> [!example] Ejemplo resuelto 2: un perfil trapezoidal
> Mover 3 rad con $v_{max} = 2$ rad/s y $a_{max} = 4$ rad/s²: acelerar hasta 2 rad/s lleva 0,5 s y 0,5 rad, frenar lo mismo, y quedan 2 rad de crucero en 1 s: **2,0 s**. Para solo 0,5 rad no da tiempo a llegar a 2 rad/s
> ($v^2/a = 1 > 0{,}5$): perfil triangular de $2\sqrt{0{,}5/4} = 0{,}707$ s con pico de 1,41 rad/s. Una cúbica de 3 rad en 2 s pediría 2,25 rad/s de pico: excedería el límite.

> [!example] Ejemplo resuelto 3: un RRT en el plano (con menos ayuda)
> En el cuadrado $[0, 10]^2$ con un obstáculo circular de radio 2 en $(5, 5)$, haz crecer un RRT desde $(1, 1)$ hasta la meta $(9, 9)$ con paso 0,5, sesgo del 10 % hacia la meta y comprobación del
> segmento por muestreo. Comprueba en el programa que el camino no toca el círculo y que mide más que la línea recta (11,3 m) pero menos del doble. ¿Qué cambiaría RRT*?

## 7. Comprobar con un programa

A* frente a Dijkstra en el ejemplo 1, los perfiles del ejemplo 2 frente a una simulación, y el RRT del ejemplo 3 con un generador pseudoaleatorio fijo.

```python
import heapq
import math

# 1. Ejemplo resuelto 1: rejilla 6 × 5, muro en x = 3 para y = 0..3.
libre = lambda x, y: 0 <= x < 6 and 0 <= y < 5 and not (x == 3 and y <= 3)
def buscar(h):
    abiertos, g, expandidos = [(h((0, 0)), (0, 0))], {(0, 0): 0}, 0
    cerrados = set()
    while abiertos:
        _, n = heapq.heappop(abiertos)
        if n in cerrados:
            continue
        if n == (5, 0):
            return g[n], expandidos
        cerrados.add(n)
        expandidos += 1
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            m = (n[0] + dx, n[1] + dy)
            if libre(*m) and g[n] + 1 < g.get(m, math.inf):
                g[m] = g[n] + 1
                heapq.heappush(abiertos, (g[m] + h(m), m))
manhattan = lambda m: abs(5 - m[0]) + abs(m[1])
cd, ed = buscar(lambda m: 0)
ca, ea = buscar(manhattan)
print("Dijkstra:", cd, "coste,", ed, "expansiones | A*:", ca, "coste,", ea, "expansiones")
assert cd == ca == 13 and ea < ed

# 2. Ejemplo resuelto 2: fórmula del trapecio frente a simulación con frenada a tiempo.
def t_trap(d, v, a):
    return d / v + v / a if d >= v * v / a else 2 * math.sqrt(d / a)
def simular(d, v, a, dt=1e-5):
    x = vel = t = 0.0
    while x < d - 1e-9 and t < 10:
        frena = vel * vel / (2 * a) >= d - x
        # al frenar, la deceleración justa para parar en d (≈ a; evita el error de discretizar el instante de frenada)
        acc = -vel * vel / (2 * max(d - x, 1e-12)) if frena else (a if vel < v else 0.0)
        vel = min(v, max(0.0, vel + acc * dt))
        x += vel * dt
        t += dt
        if frena and vel < 1e-9:
            break
    return t
for d in (3.0, 0.5):
    assert abs(simular(d, 2, 4) - t_trap(d, 2, 4)) < 2e-3
assert abs(t_trap(3, 2, 4) - 2.0) < 1e-12 and abs(t_trap(0.5, 2, 4) - math.sqrt(0.5)) < 1e-12

# 3. Ejemplo resuelto 3: RRT con generador lineal congruente fijo.
semilla = 2026
def rnd():
    global semilla
    semilla = (1103515245 * semilla + 12345) % 2**31
    return semilla / 2**31
choca = lambda p: math.hypot(p[0] - 5, p[1] - 5) <= 2
def segmento_libre(a, b):
    n = max(2, int(math.dist(a, b) / 0.02))
    return not any(choca((a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n)) for k in range(n + 1))
nodos, padre = [(1.0, 1.0)], {0: None}
meta = (9.0, 9.0)
while True:
    s = meta if rnd() < 0.1 else (10 * rnd(), 10 * rnd())
    i = min(range(len(nodos)), key=lambda k: math.dist(nodos[k], s))
    d = math.dist(nodos[i], s)
    if d == 0:
        continue
    paso = min(0.5, d)
    nuevo = (nodos[i][0] + (s[0] - nodos[i][0]) * paso / d, nodos[i][1] + (s[1] - nodos[i][1]) * paso / d)
    if segmento_libre(nodos[i], nuevo):
        nodos.append(nuevo)
        padre[len(nodos) - 1] = i
        if math.dist(nuevo, meta) < 0.5 and segmento_libre(nuevo, meta):
            break
camino, k = [meta], len(nodos) - 1
while k is not None:
    camino.append(nodos[k])
    k = padre[k]
largo = sum(math.dist(a, b) for a, b in zip(camino, camino[1:]))
print("RRT:", len(nodos), "nodos, camino de", round(largo, 2), "m")
assert all(segmento_libre(a, b) for a, b in zip(camino, camino[1:]))
assert math.dist((1, 1), meta) < largo < 2 * math.dist((1, 1), meta)
```

## 8. Errores típicos

- Planificar con el robot como un punto sin inflar los obstáculos (o inflarlos solo con el radio inscrito en un robot alargado).
- Usar una heurística que sobreestima y creer que A* sigue siendo óptimo.
- Comprobar colisiones solo en los nodos y no en los segmentos entre ellos.
- Esperar caminos cortos de un RRT básico sin suavizar ni usar RRT*.
- Confundir camino con trayectoria: enviar al controlador puntos sin tiempos ni límites.
- Usar cúbicas en movimientos rápidos de brazos: los saltos de aceleración excitan vibraciones.
- Sincronizar articulaciones escalando la rápida en vez de la lenta.

## 9. Resumen

- C-espacio, C-obstáculos (Minkowski), comprobadores de colisión; completitud y PSPACE-dificultad.
- Dijkstra, A* (admisible → óptimo; consistente → sin reaperturas), Manhattan, octil, A* ponderado, D* Lite, grafo de visibilidad.
- PRM (multiconsulta), RRT (consulta única), completitud probabilística, pasos estrechos $1 - (1 - p)^N$, RRT*/PRM* asintóticamente óptimos.
- Potenciales y mínimos locales; DWA, TEB, MPPI; tiempo hasta la colisión.
- Cúbica ($1{,}5\Delta q/T$), quíntica ($1{,}875\Delta q/T$, $\frac{10}{\sqrt3}\Delta q/T^2$), trapecio ($d/v + v/a$ o $2\sqrt{d/a}$), sincronización, dos pasadas, $v \le \sqrt{a_{lat}R}$.

## Repaso: lo que debe quedarte dentro de un mes

1. Se planifica en el espacio de configuraciones, no en el del mundo.
2. A* con heurística admisible es óptimo y expande menos que Dijkstra.
3. En alta dimensión se muestrea: RRT para una consulta, PRM para muchas, RRT* si importa el coste.
4. Los campos de potencial se atascan en mínimos locales.
5. Un camino necesita tiempos y límites para ser una trayectoria.

## Siguiente

`rob-control-optimo-mpc` (trayectorias como problemas de optimización con el modelo dinámico) y `rob-aprendizaje-robots` (políticas aprendidas). La búsqueda en grafos general
está en [[prog-algoritmos]].
