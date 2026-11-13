---
id: rob-ros2
title: "ROS 2: nodos, topics, servicios y acciones, DDS y QoS, ejecutores, tf2, ros2_control, Nav2 y el flujo de trabajo de un robot real"
area: robotica
trunk_level: 16
prerequisites: [rob-sensores-actuadores, rob-dinamica, prog-python-fundamentos]
academic_sources:
  - "Macenski, S.; Foote, T.; Gerkey, B.; Lalancette, C.; Woodall, W. Robot Operating System 2: Design, architecture, and uses in the wild. Science Robotics 7(66), eabm6074, 2022."
  - "Open Robotics. ROS 2 Documentation (Jazzy Jalisco y Lyrical Luth), docs.ros.org, consultada en noviembre de 2026."
exercises:
  - id: ancho-de-banda-del-lidar
    tier: 1
    prompt: |
      Un LiDAR publica nubes `PointCloud2` de 64 × 1024 puntos de 16 bytes a 10 Hz. ¿Qué ancho de banda ocupa el topic, en Mbit/s (sin cabeceras)? Respuesta: con **2 decimales**.
    answers: ["sha256:d6e8f0f5be03626cbe54d4a85366c87b8d4b036572869af0bdbcdf22adb4af75"]
  - id: ancho-de-banda-de-la-camara
    tier: 1
    prompt: |
      Una cámara publica imágenes `rgb8` de 1920 × 1080 sin comprimir a 30 Hz. ¿Cuántos Gbit/s ocupa el topic? Respuesta: con **2 decimales**.
    answers: ["sha256:4fc31a85ae03af9bddd2c908c4d9bdd4571270c4511599f539ed738c31c9318c"]
  - id: cola-keep-last
    tier: 1
    prompt: |
      Un suscriptor con QoS `KEEP_LAST` de profundidad 10 recibe a 100 Hz, pero su callback se bloquea 0,5 s. Si nada más se pierde en la red, ¿cuántos mensajes de ese intervalo se descartan? Respuesta: un número.
    answers: ["sha256:d59eced1ded07f84c145592f65bdf854358e009c5cd705f5215bf18697fed103"]
  - id: componer-transformadas
    tier: 1
    prompt: |
      `base_link` está en $(2, 1)$ de `map` con yaw de 90°, y `laser` en $(0{,}2;\ 0;\ 0{,}1)$ de `base_link` sin giro. ¿Qué coordenadas $x$ e $y$ tiene en `map` el punto $(1, 0, 0)$ del láser? Respuesta: `x;y`.
    answers: ["sha256:18c39bbe2b58b485d7eba853f30696b2a54b2e623161b99c769961cd4348a265"]
  - id: cuaternion-de-yaw
    tier: 1
    prompt: |
      ¿Qué componentes $z$ y $w$ tiene el cuaternión de un giro de 90° alrededor de $z$ (las otras son 0)? Respuesta: `z;w` con **4 decimales**.
    answers: ["sha256:199ab1aeb96684ab93bfb87d769b930c0644f08e2cdd1868746c7cd427b0492e"]
  - id: cmd-vel-a-ruedas
    tier: 1
    prompt: |
      Un robot diferencial con ruedas de 0,05 m de radio separadas 0,3 m recibe `cmd_vel` con $v = 0{,}5$ m/s y $\omega = 1$ rad/s. ¿A qué velocidad deben girar la rueda izquierda y la derecha, en rad/s? Respuesta: `izquierda;derecha`.
    answers: ["sha256:f768cd7638330fc3a3da12436b9962d1b216ecc12e750f634dc0530ec0cab802"]
  - id: tiempo-simulado
    tier: 1
    prompt: |
      Una simulación avanza 600 s de tiempo simulado en 800 s reales. ¿Cuál es su factor de tiempo real, y cuántas veces se ejecuta en 60 s reales un temporizador de 10 Hz de un nodo con `use_sim_time`? Respuesta: `factor;llamadas`.
    answers: ["sha256:7667eeb7c349b7abfbb3b4063cfaa0ad0c7bd8591341047e0e895faf1b74fc66"]
  - id: compatibilidad-de-qos
    tier: 2
    prompt: |
      Hay cuatro publicadores y cuatro suscriptores, uno de cada combinación de fiabilidad (`RELIABLE`, `BEST_EFFORT`) y durabilidad (`TRANSIENT_LOCAL`, `VOLATILE`), todos en el mismo topic. ¿Cuántos de los 16 pares publicador-suscriptor son compatibles? Respuesta: un número.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: interpolacion-de-tf
    tier: 2
    prompt: |
      tf2 tiene la transformada `odom` → `base_link` en $t = 1{,}0$ s ($x = 0$, yaw 0°) y en $t = 1{,}2$ s ($x = 0{,}4$ m, yaw 30°). ¿Qué $x$ y qué yaw (grados) devuelve al pedirla en $t = 1{,}05$ s? Respuesta: `x;yaw` con **1 decimal**.
    answers: ["sha256:f111872570d5489332951a3007f65ec90e2da39a62cb172c6c2420743abda2be"]
  - id: inflado-del-costmap
    tier: 2
    prompt: |
      La capa de inflado de Nav2 asigna a una celda a distancia $d$ del obstáculo el coste $\lfloor 252\,e^{-k(d - r)}\rfloor$ (fuera del radio inscrito $r$). Con $k = 3$ y $r = 0{,}2$ m, ¿qué coste tiene una celda a 0,5 m, y a partir de qué distancia el coste baja de 50, en m? Respuesta: `coste;distancia`, la distancia con **3 decimales**.
    answers: ["sha256:0eb949764fde3e088328a5c47d9825d5d979d5584af97668b1f6a5aa2bacab0b"]
  - id: tamano-cdr
    tier: 2
    prompt: |
      Un mensaje tiene los campos `uint8`, `float64`, `uint16`, `float32` y `uint8`, en ese orden. ¿Cuántos bytes ocupa serializado en CDR (cada tipo alineado a su tamaño desde el inicio de los datos), sin la cabecera de encapsulado? Respuesta: un número.
    answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
  - id: puertos-dds
    tier: 2
    prompt: |
      Con los parámetros por defecto de RTPS ($PB = 7400$, $DG = 250$, $PG = 2$, $d_0 = 0$, $d_1 = 10$, $d_3 = 11$), ¿qué puertos usa el participante 3 con `ROS_DOMAIN_ID=42`: el de descubrimiento multicast, el de descubrimiento unicast y el de datos unicast? Respuesta: `multicast;meta_unicast;datos_unicast`.
    answers: ["sha256:a87ed2860c327430f532d3c4feab086784e68e882a8c154143439f6b5c30fa30"]
  - id: producto-de-cuaterniones
    tier: 2
    prompt: |
      ¿Qué cuaternión resulta de componer un giro de 90° en $z$ seguido (en ejes móviles) de uno de 90° en $x$, $q = q_z \otimes q_x$? Respuesta: `x;y;z;w` con **2 decimales**.
    answers: ["sha256:dcb2758dbcaa5173a35328b6da7643d8b4116858664d208254f041f3cbb64849", "sha256:3cd4071c46212d09896bb1f02495b76fb269ddcd9bf893e3a952e14dad440147"]
  - id: deadline
    tier: 2
    prompt: |
      Un suscriptor tiene QoS de deadline de 20 ms y recibe muestras en $t = 0$, 15, 50, 55, 120 y 130 ms. Cada vez que pasan 20 ms sin muestra se dispara un evento (y vuelve a contar). ¿Cuántos eventos de deadline incumplido hay? Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: latencia-extremo-a-extremo
    tier: 3
    prompt: |
      Una imagen llega a un nodo de detección que tarda 25 ms. El planificador corre con un temporizador de 10 Hz, toma la última detección y tarda 15 ms; el controlador corre a 100 Hz, toma el último plan y tarda 1 ms. Sin otras demoras, ¿cuál es la latencia mínima y máxima desde que llega la imagen hasta la orden, en ms? Respuesta: `minima;maxima`.
    answers: ["sha256:6d0f3dc01109677bb4f3f6fc000b73c20fcf821b3c3884a1c2ee8128fb7c3b66"]
  - id: odometria-diferencial
    tier: 3
    prompt: |
      Un robot diferencial (ruedas de 0,05 m de radio, separadas 0,3 m, encoders de 1024 tics por vuelta) parte de $(0, 0, 0)$ y durante 100 periodos lee 20 tics en la rueda izquierda y 30 en la derecha en cada uno. ¿Cuál es su pose final $(x, y, \theta)$ en m y rad? Respuesta: `x;y;theta` con **3 decimales**.
    answers: ["sha256:d94156a1d9f984d1aa6782fca25b0698b9c09ac0bfefac416652f781da00d904", "sha256:20bf2a9957726c549035acf99818512dcddd69c156370bc9c6c12663e5b9f1b8"]
---

Un robot real tiene decenas de procesos: drivers de sensores, estimación, planificación, control, interfaz. **ROS 2** (Robot Operating System 2) no es un sistema
operativo, sino un middleware y un ecosistema: define cómo se comunican esos procesos (topics, servicios, acciones), con qué garantías (QoS sobre DDS), cómo se
organizan los sistemas de coordenadas (tf2), cómo se controla el hardware (ros2_control) y cómo se navega o se manipula (Nav2, MoveIt 2). Es el estándar de facto en
investigación y cada vez más en industria. Este nodo explica su arquitectura y las cuentas que hay detrás (anchos de banda, compatibilidad de QoS, latencias,
transformadas, odometría), integrando los sensores y actuadores de [[rob-sensores-actuadores]] y los modelos de [[rob-dinamica]].

## Objetivos

Al terminar sabrás:

1. Describir el grafo de ROS 2: nodos, topics, servicios, acciones y parámetros, y la capa DDS/RTPS con su descubrimiento.
2. Elegir políticas de QoS y diagnosticar incompatibilidades.
3. Organizar la ejecución con ejecutores, grupos de callbacks, nodos con ciclo de vida y composición.
4. Usar tf2 (árbol de transformadas, cuaterniones, interpolación) con las convenciones REP 103 y REP 105.
5. Conocer el flujo de trabajo (colcon, launch, rosbag2) y los pilares del ecosistema: ros2_control, Nav2, MoveIt 2.
6. Estimar anchos de banda y latencias de extremo a extremo de un sistema distribuido.

## Qué debes dominar antes

[[rob-sensores-actuadores]] (encoders, IMU, motores), [[rob-dinamica]] (modelos que se usan en control) y [[prog-python-fundamentos]]. Algo de redes ([[sys-redes-sockets]]: UDP, multicast,
puertos) y las rotaciones de [[rob-cinematica]].

> [!question] Test de entrada
> 1. ¿Qué diferencia hay entre TCP y UDP?
> 2. ¿Qué es un patrón publicador/suscriptor?
> 3. ¿Cómo se compone una rotación de 30° con otra de 60° en el plano?
>
> Respuestas: TCP es fiable y orientado a conexión, UDP envía datagramas sin garantías; los productores publican en un canal con nombre y cualquiera puede suscribirse sin
> conocerlos; da una de 90° (en el plano las rotaciones conmutan).

## 1. Para qué sirve

- **Integrar un robot**: cada driver, algoritmo o interfaz es un nodo intercambiable; se puede sustituir un LiDAR o un planificador sin tocar lo demás.
- **Reutilizar**: miles de paquetes (drivers, SLAM, navegación, manipulación, simulación) usan las mismas interfaces de mensajes.
- **Grabar y reproducir**: rosbag2 permite depurar con datos reales sin el robot.
- **Industria y espacio**: ROS 2 se ha usado en robots móviles industriales, drones, robots cuadrúpedos y en prototipos de rovers de la NASA (casos analizados en Macenski y col., 2022).

## 2. Arquitectura: el grafo y DDS

Un **nodo** es una unidad de cómputo (normalmente una clase en C++ con `rclcpp` o Python con `rclpy`). Los nodos se comunican por:

- **Topics**: publicador/suscriptor, muchos a muchos, para flujos continuos (sensores, estados, órdenes de velocidad).
- **Servicios**: petición/respuesta, para operaciones cortas.
- **Acciones**: tareas largas con objetivo, realimentación periódica, resultado y cancelación (navegar a un punto, mover un brazo).
- **Parámetros**: configuración de cada nodo, modificable en ejecución.

Los tipos se definen en ficheros `.msg`, `.srv` y `.action` y se serializan en **CDR**, con cada campo alineado a su tamaño. Por debajo, la capa **rmw** abstrae el middleware: por
defecto, implementaciones de **DDS** (Fast DDS; también Cyclone DDS), que hablan el protocolo **RTPS** sobre UDP; desde Kilted Kaiju (2025), **Zenoh** (`rmw_zenoh`) es también un
middleware de nivel 1. DDS no tiene servidor central: los participantes se **descubren** por multicast y luego se comunican por unicast. El `ROS_DOMAIN_ID` separa redes
lógicas: con los parámetros de RTPS, el puerto de descubrimiento multicast es $7400 + 250\cdot\text{dominio}$ y los unicast suman $10 + 2p$ (descubrimiento) y $11 + 2p$ (datos) para el
participante $p$; por eso, en Linux, el dominio debe estar entre 0 y 101 para no chocar con los puertos efímeros (hasta 232 si se ajustan). Dentro de un proceso, la
**comunicación intraproceso** evita serializar y copiar.

## 3. Calidad de servicio (QoS)

Cada publicador y suscriptor declara políticas:

- **Fiabilidad**: `RELIABLE` (reintenta hasta entregar) o `BEST_EFFORT` (puede perder, menor latencia; típico en sensores).
- **Durabilidad**: `VOLATILE` o `TRANSIENT_LOCAL` (el publicador guarda los últimos mensajes para suscriptores que lleguen tarde: mapas, descripción del robot).
- **Historia**: `KEEP_LAST` con profundidad $n$ (si no se consumen a tiempo se pierden los más antiguos) o `KEEP_ALL`.
- **Deadline**, **lifespan** y **liveliness**: periodo máximo entre mensajes, caducidad de los datos y detección de publicadores muertos.

La compatibilidad es de tipo **ofrecido ≥ pedido**: un publicador `BEST_EFFORT` no sirve a un suscriptor `RELIABLE`, y uno `VOLATILE` no sirve a un suscriptor `TRANSIENT_LOCAL`. Si
no son compatibles **no hay conexión** y no llegan datos (con un aviso de QoS incompatible): es la causa más común de "no me llegan los mensajes". `ros2 topic info -v`
muestra las QoS de cada extremo, y los perfiles predefinidos (datos de sensor, servicios, parámetros) son el punto de partida.

> [!example] Ejemplo resuelto 1: cuatro cámaras en una red
> Cuatro cámaras `rgb8` de 1280 × 720 a 30 Hz producen $4\cdot1280\cdot720\cdot3\cdot30 = 331{,}8$ MB/s, unos **2,65 Gbit/s**: no caben en Ethernet de 1 Gbit/s. Opciones: comprimir (JPEG o H.264 con `image_transport`), reducir
> resolución o frecuencia, procesar en el mismo proceso (composición e intraproceso, sin red) o usar memoria compartida. Y con `BEST_EFFORT` y profundidad 1 para el
> visor: si se queda atrás, que pierda imágenes en vez de acumular retraso.

## 4. Ejecución: ejecutores, callbacks y ciclo de vida

Un nodo no hace nada hasta que un **ejecutor** atiende sus callbacks (temporizadores, suscripciones, servicios). El ejecutor de un hilo los serializa: un callback lento
retrasa a todos. El multihilo los reparte, y los **grupos de callbacks** controlan qué puede ejecutarse a la vez (*mutuamente excluyentes* o *reentrantes*). Los nodos con
**ciclo de vida** (managed nodes) pasan por estados `unconfigured` → `inactive` → `active` → `finalized` con transiciones explícitas (configurar, activar…), lo que permite arrancar un
sistema de forma ordenada y determinista. La **composición** carga varios nodos como componentes en un mismo proceso.

El tiempo puede ser el del sistema o el **simulado** (`use_sim_time`, publicado en `/clock`): los temporizadores y las marcas de tiempo siguen al simulador aunque vaya más
rápido o más lento que el tiempo real.

```py
# Nodo mínimo en rclpy (ROS 2 Jazzy): publica, se suscribe a sí mismo y usa un parámetro.
import rclpy
from rclpy.node import Node
from rclpy.qos import QoSProfile, ReliabilityPolicy
from std_msgs.msg import Float64


class Eco(Node):
    def __init__(self):
        super().__init__("eco")
        qos = QoSProfile(depth=10, reliability=ReliabilityPolicy.RELIABLE)
        self.declare_parameter("ganancia", 2.0)
        self.pub = self.create_publisher(Float64, "medida", qos)
        self.sub = self.create_subscription(Float64, "medida", self.recibir, qos)
        self.timer = self.create_timer(0.01, self.publicar)
        self.k, self.recibidos = 0, []

    def publicar(self):
        self.k += 1
        self.pub.publish(Float64(data=float(self.k)))

    def recibir(self, msg):
        g = self.get_parameter("ganancia").value
        self.recibidos.append(g * msg.data)


def main():
    rclpy.init()
    nodo = Eco()
    while len(nodo.recibidos) < 20:
        rclpy.spin_once(nodo, timeout_sec=0.1)
    print(nodo.recibidos[:3])  # [2.0, 4.0, 6.0]
    nodo.destroy_node()
    rclpy.shutdown()


if __name__ == "__main__":
    main()
```

## 5. tf2: sistemas de coordenadas

Un robot tiene muchos sistemas de referencia: el mapa, la odometría, la base, cada sensor, cada eslabón. **tf2** mantiene un **árbol** de transformadas con marca de tiempo,
publicadas por distintos nodos (estáticas en `/tf_static`, dinámicas en `/tf`), y responde a "¿dónde estaba este punto del láser en el mapa en el instante $t$?" componiendo
el camino del árbol e **interpolando** entre muestras (lineal en traslación, SLERP en rotación). Las rotaciones se guardan como **cuaterniones** $(x, y, z, w)$: un giro $\theta$ alrededor
del eje unitario $u$ es $(u\sin\frac{\theta}{2}, \cos\frac{\theta}{2})$, y componer giros es multiplicar cuaterniones.

Convenciones: **REP 103** (SI, ejes $x$ adelante, $y$ izquierda, $z$ arriba, ángulos en radianes) y **REP 105** (`map` → `odom` → `base_link`). La odometría (`odom` → `base_link`) es continua pero
deriva; la localización publica `map` → `odom` y corrige a saltos sin romper la continuidad de `odom`. La geometría del robot se describe en **URDF** (con xacro), y
`robot_state_publisher` publica las transformadas de los eslabones a partir de los estados articulares.

> [!example] Ejemplo resuelto 2: componer `map` → `odom` → `base_link`
> La localización publica `map` → `odom` como $(0{,}5;\ -0{,}2)$ con yaw de 10°, y la odometría `odom` → `base_link` como $(3, 1)$ con yaw de 80°. La base en el mapa: se gira $(3, 1)$ 10°, $(2{,}781;\ 1{,}506)$,
> y se suma $(0{,}5;\ -0{,}2)$: **(3,281; 1,306)**, con yaw de **90°**. Si la localización corrige y `map` → `odom` cambia, la pose en el mapa salta, pero la odometría sigue suave: por eso los
> controladores locales trabajan en `odom`.

## 6. El flujo de trabajo y el ecosistema

- **Paquetes y compilación**: `package.xml` (dependencias), `ament_cmake` o `ament_python`, compilados con **colcon** en un espacio de trabajo y activados con `source install/setup.bash`.
- **Launch**: ficheros en Python, XML o YAML que arrancan nodos con parámetros, remapeos y espacios de nombres.
- **Herramientas**: `ros2 topic|node|service|param|bag`, **rviz2** para visualizar, **rosbag2** para grabar (con MCAP como formato por defecto en las distribuciones actuales),
  simuladores como Gazebo conectados con `ros_gz`.
- **ros2_control**: un gestor de controladores que, en un bucle periódico, lee el hardware, actualiza controladores (de trayectoria articular, diferencial…) y escribe
  órdenes, con interfaces de hardware intercambiables entre el robot real y el simulado.
- **Nav2**: navegación de robots móviles con mapas de costes (capas de obstáculos e **inflado** exponencial alrededor de ellos), planificadores globales, controladores locales
  y árboles de comportamiento que los orquestan.
- **MoveIt 2**: planificación de movimiento para brazos, cinemática, colisiones y ejecución de trayectorias (`rob-planificacion-movimiento`).
- **Seguridad**: SROS2 añade autenticación, cifrado y control de acceso con DDS-Security.

**Distribuciones**: ROS 2 publica una distribución cada mayo. Las LTS duran unos cinco años: **Jazzy Jalisco** (2024, hasta mayo de 2029) y **Lyrical Luth** (mayo de 2026). Las intermedias
duran año y medio (**Kilted Kaiju**, 2025, hasta noviembre de 2026). **Rolling** es la rama de desarrollo continuo. Para un robot que debe durar, se elige una LTS.

**Tiempo real**: ROS 2 permite bucles deterministas si se cuida el sistema: núcleo `PREEMPT_RT`, sin reservas de memoria en el bucle, prioridades y CPU dedicadas; ros2_control
está pensado para ello.

> [!example] Ejemplo resuelto 3: odometría de un diferencial (con menos ayuda)
> Ruedas de 0,04 m, separación 0,25 m, 2048 tics por vuelta; en cada periodo se leen 40 tics a la izquierda y 50 a la derecha, durante 200 periodos. Calcula el avance y el giro por
> periodo, el radio de la circunferencia (≈ 1,125 m) y la pose final. Compara en el programa la integración exacta por arcos con Euler (avanzar en línea recta con el ángulo
> del principio de cada periodo) y mide el error.

## 7. Comprobar con un programa

El ancho de banda del ejemplo 1, la composición de transformadas del ejemplo 2 con matrices homogéneas y con cuaterniones, y la odometría del ejemplo 3
por arcos y por Euler.

```python
import math

# 1. Ejemplo resuelto 1.
bps = 4 * 1280 * 720 * 3 * 30 * 8
assert abs(bps / 1e9 - 2.654) < 1e-3

# 2. Ejemplo resuelto 2: matrices homogéneas 3×3 en el plano y cuaterniones.
def T(x, y, yaw):
    c, s = math.cos(yaw), math.sin(yaw)
    return [[c, -s, x], [s, c, y], [0, 0, 1]]
def mul(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(3)) for j in range(3)] for i in range(3)]
M = mul(T(0.5, -0.2, math.radians(10)), T(3, 1, math.radians(80)))
yaw = math.degrees(math.atan2(M[1][0], M[0][0]))
print("base en map:", round(M[0][2], 3), round(M[1][2], 3), round(yaw, 3))
assert abs(M[0][2] - 3.281) < 1e-3 and abs(M[1][2] - 1.306) < 1e-3 and abs(yaw - 90) < 1e-9
def qz(a):
    return (0.0, 0.0, math.sin(a / 2), math.cos(a / 2))
def qmul(p, q):
    x1, y1, z1, w1 = p
    x2, y2, z2, w2 = q
    return (w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2, w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2,
            w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2, w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2)
q = qmul(qz(math.radians(10)), qz(math.radians(80)))
assert abs(2 * math.degrees(math.atan2(q[2], q[3])) - 90) < 1e-9

# 3. Ejemplo resuelto 3: arcos exactos frente a Euler.
r, b, N = 0.04, 0.25, 2048
dl, dr = 40 / N * 2 * math.pi * r, 50 / N * 2 * math.pi * r
ds, dth = (dl + dr) / 2, (dr - dl) / b
R = ds / dth
xa = ya = tha = 0.0
xe = ye = the = 0.0
for _ in range(200):
    xa += R * (math.sin(tha + dth) - math.sin(tha))
    ya -= R * (math.cos(tha + dth) - math.cos(tha))
    tha += dth
    xe += ds * math.cos(the)
    ye += ds * math.sin(the)
    the += dth
cerrada = (R * math.sin(tha), R * (1 - math.cos(tha)))
err = math.hypot(xe - xa, ye - ya)
print("R =", round(R, 4), "| pose", round(xa, 4), round(ya, 4), round(tha, 4), "| error de Euler", round(1000 * err, 2), "mm")
assert abs(R - 1.125) < 1e-12 and abs(xa - cerrada[0]) < 1e-12 and abs(ya - cerrada[1]) < 1e-12
assert 1e-3 < err < 1e-2
```

## 8. Errores típicos

- QoS incompatibles entre publicador y suscriptor (fiabilidad o durabilidad): no hay conexión y no sale ningún error evidente.
- Usar `RELIABLE` con historia larga para sensores rápidos por una red lenta: la latencia crece sin límite.
- Bloquear un callback (esperar un servicio dentro de otro callback con un ejecutor de un hilo) y congelar el nodo.
- Publicar transformadas con marcas de tiempo inconsistentes o dos padres para el mismo marco: tf2 no encuentra el camino o extrapola.
- Mezclar `use_sim_time` en unos nodos sí y en otros no.
- Dos robots en la misma red con el mismo `ROS_DOMAIN_ID` y los mismos nombres: se mezclan sus topics.
- Ignorar el ancho de banda de imágenes y nubes de puntos sin comprimir.

## 9. Resumen

- Nodos; topics, servicios, acciones, parámetros; `.msg/.srv/.action`, CDR; rmw: DDS (RTPS, descubrimiento multicast), Zenoh; dominios y puertos $7400 + 250d$; intraproceso.
- QoS: fiabilidad, durabilidad, historia, deadline, lifespan, liveliness; compatibilidad ofrecido ≥ pedido.
- Ejecutores de uno o varios hilos, grupos de callbacks, ciclo de vida, composición, tiempo simulado.
- tf2: árbol con tiempo, interpolación, cuaterniones; REP 103 y 105; URDF y `robot_state_publisher`.
- colcon, launch, rosbag2 (MCAP), rviz2, Gazebo; ros2_control, Nav2 (inflado exponencial), MoveIt 2, SROS2.
- Distribuciones LTS (Jazzy 2024, Lyrical 2026) frente a intermedias y Rolling; tiempo real con `PREEMPT_RT`.

## Repaso: lo que debe quedarte dentro de un mes

1. ROS 2 es un grafo de nodos que se descubren solos sobre DDS o Zenoh.
2. Si no llegan mensajes, mira primero las QoS.
3. Todo dato espacial lleva un marco y una marca de tiempo; tf2 los relaciona.
4. `map` → `odom` corrige a saltos; `odom` → `base_link` es suave y deriva.
5. Un robot que debe durar se construye sobre una distribución LTS.

## Siguiente

`rob-percepcion-slam` (de los sensores al mapa y la localización que publica `map` → `odom`), `rob-planificacion-movimiento` (lo que hay dentro de Nav2 y MoveIt) y
`rob-control-optimo-mpc`.
