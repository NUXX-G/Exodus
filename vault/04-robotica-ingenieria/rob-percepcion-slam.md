---
id: rob-percepcion-slam
title: "Percepción y SLAM: filtro de Bayes, Kalman y EKF, filtros de partículas, rejillas de ocupación, cámaras y estéreo, geometría epipolar, ICP y grafos de poses"
area: robotica
trunk_level: 17
prerequisites: [rob-ros2, mat-probabilidad, mat-algebra-lineal-avanzada]
academic_sources:
  - "Thrun, S.; Burgard, W.; Fox, D. Probabilistic Robotics. MIT Press, 2005."
  - "Hartley, R.; Zisserman, A. Multiple View Geometry in Computer Vision, 2ª ed. Cambridge University Press, 2004."
  - "Cadena, C. et al. Past, Present, and Future of Simultaneous Localization and Mapping: Toward the Robust-Perception Age. IEEE Transactions on Robotics 32(6), 1309–1332, 2016."
exercises:
  - id: proyeccion-pinhole
    tier: 1
    prompt: |
      Una cámara tiene $f_x = f_y = 500$ px y punto principal $(320, 240)$. ¿En qué píxel $(u, v)$ se proyecta el punto $(0{,}2;\ -0{,}1;\ 2)$ m del marco de la cámara? Respuesta: `u;v`.
    answers: ["sha256:f895a120c51b0ab2e48a6b73076598740544258de48c11fa6b844a6afa1782ee"]
  - id: profundidad-estereo
    tier: 1
    prompt: |
      Un par estéreo rectificado tiene $f = 700$ px y línea base de 0,12 m. ¿A qué profundidad está un punto con disparidad de 21 px, y uno con 20 px, en m? Respuesta: `Z21;Z20` con **1 decimal**.
    answers: ["sha256:e077c1202d4d1473de882a2f6ce8048aacd37c6c873b61547214e1913eba8fd3", "sha256:55db4681783f43e2ace7b21e0792ef71ec827b87cebeac1cc2800bdd8161f5d9"]
  - id: rejilla-de-ocupacion
    tier: 1
    prompt: |
      Una celda de una rejilla de ocupación parte de $p = 0{,}5$. El modelo inverso del sensor da $p = 0{,}7$ cuando un rayo termina en ella y $p = 0{,}4$ cuando la atraviesa. Tras tres impactos y una lectura que la atraviesa, ¿qué probabilidad de ocupación tiene (actualización en log-odds)? Respuesta: con **4 decimales**.
    answers: ["sha256:92cd8aad0349afb161f11ce40f4210a7c7b9e58d25705137ce7b77bf3dfffbb0"]
  - id: iteraciones-de-ransac
    tier: 1
    prompt: |
      Se estima una matriz fundamental con el algoritmo de ocho puntos dentro de RANSAC. Si la mitad de las correspondencias son buenas, ¿cuántas iteraciones hacen falta para tener un 99 % de probabilidad de sacar al menos una muestra limpia? Respuesta: un número entero.
    answers: ["sha256:66c2e6dd7fe34b78c205baeea6f8216733c173269b8db8f322869fe2079af258"]
  - id: actualizacion-de-kalman
    tier: 1
    prompt: |
      Una estimación $x = 10$ con varianza $P = 4$ recibe una medida directa $z = 12$ con varianza $R = 1$. ¿Cuál es la estimación y la varianza tras la actualización de Kalman? Respuesta: `x;P` con **1 decimal**.
    answers: ["sha256:865698151fba3c90b369ad14e662389cd7a8a2bee25c4f5d726fc8eb07956330"]
  - id: distancia-de-mahalanobis
    tier: 1
    prompt: |
      Una innovación $\nu = (1, 2)$ tiene covarianza $S = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$. ¿Cuánto vale $\nu^TS^{-1}\nu$? Respuesta: con **1 decimal**.
    answers: ["sha256:1a948f1b4374f4e3f02501c7feb43784021718a93c1ed5f9f19adf357bb2d20e"]
  - id: tamano-efectivo-de-muestra
    tier: 1
    prompt: |
      Un filtro de partículas tiene cuatro partículas con pesos normalizados 0,1, 0,2, 0,4 y 0,3. ¿Cuál es su tamaño efectivo de muestra $1/\sum w_i^2$? Respuesta: con **2 decimales**.
    answers: ["sha256:7403c697d5824516cd0787018deaa3f8a5379c1a05e412aa1d8eae707e99934a"]
  - id: distancia-y-rumbo
    tier: 2
    prompt: |
      Un robot está en $(1, 2)$ con orientación 30°. ¿Qué distancia y qué rumbo relativo (grados, positivo a la izquierda) espera medir a un hito en $(4, 6)$? Respuesta: `distancia;rumbo`, el rumbo con **2 decimales**.
    answers: ["sha256:872373159544820d845bc23cf2cf806194cbd6e11fa95c3374737a1a050d6146"]
  - id: remuestreo-sistematico
    tier: 2
    prompt: |
      Con esos pesos (0,1, 0,2, 0,4, 0,3), el remuestreo sistemático usa los punteros $u_k = 0{,}12 + k/4$, $k = 0..3$, y elige la primera partícula cuyo peso acumulado alcanza $u_k$. ¿Cuántas copias de cada partícula salen? Respuesta: `c1;c2;c3;c4`.
    answers: ["sha256:b2d8fadfb6dde117f1e5f06d3d09576fcaeacaeee9664338d2a539d111eecbcf"]
  - id: grafo-de-poses
    tier: 2
    prompt: |
      Un grafo de poses 1D tiene $x_0 = 0$ fijo, tres odometrías $x_{i+1} - x_i = 1{,}0$ con $\sigma = 1$ y un cierre de bucle $x_3 - x_0 = 2{,}7$ con $\sigma = 0{,}5$. ¿Qué valores de $x_1$ y $x_3$ minimizan el error cuadrático ponderado? Respuesta: `x1;x3` con **3 decimales**.
    answers: ["sha256:edb87e0566b7ec9ca29d5a09505aa4a82fab292dbaf271ea6f2a6d3d5bcbf028"]
  - id: recta-epipolar
    tier: 2
    prompt: |
      Dos cámaras calibradas cumplen $X_2 = X_1 + t$ con $t = (1;\ 0;\ 0{,}5)$ (sin rotación). Un punto se ve en la primera en coordenadas normalizadas $(0{,}1;\ 0{,}2)$. ¿Qué $y$ tiene su recta epipolar en la segunda imagen cuando $x = 0{,}4$? Respuesta: con **4 decimales**.
    answers: ["sha256:6a5da0add73fa5109851cbaaa970603740d6ce553491490451be354144c1e9a5"]
  - id: prediccion-del-ekf
    tier: 2
    prompt: |
      Un uniciclo $x' = x + v\Delta t\cos\theta$, $y' = y + v\Delta t\sin\theta$, $\theta' = \theta$ está en $\theta = 0$ con $P = \text{diag}(0{,}01;\ 0{,}01;\ 0{,}001)$. Con $v = 1$ m/s, $\Delta t = 1$ s y sin ruido de proceso, ¿cuánto valen $P_{yy}$ y $P_{y\theta}$ tras la predicción del EKF? Respuesta: `Pyy;Pytheta` con **3 decimales**.
    answers: ["sha256:d9451a22e62be1d5278d6d5688dcb3e4ab1cec7c0e7f187525832ef377fd252c"]
  - id: incertidumbre-estereo
    tier: 2
    prompt: |
      En el par estéreo de antes ($f = 700$ px, $B = 0{,}12$ m), ¿qué desviación de profundidad $\sigma_Z = Z^2\sigma_d/(fB)$ tiene un punto a 4 m si la disparidad tiene $\sigma_d = 0{,}25$ px, en mm? Respuesta: con **1 decimal**.
    answers: ["sha256:a4367ec7423625a19d0864f48e761d0eaa4b9141d2338514758d0ae420e837fa"]
  - id: distorsion-radial
    tier: 2
    prompt: |
      Una lente tiene distorsión radial $x_d = x(1 + k_1r^2)$ con $k_1 = -0{,}2$. ¿En qué píxel aparece el punto normalizado $(0{,}3;\ 0{,}2)$ con $f = 500$ px y centro $(320, 240)$? Respuesta: `u;v` con **1 decimal**.
    answers: ["sha256:4f2b03315b77eb0aeb4a258fc6702f186bd34740c3bba8956c54ca7a6d704304"]
  - id: trilateracion
    tier: 3
    prompt: |
      Un robot mide distancias 5, 7 y 8 m a balizas en $(0, 0)$, $(10, 0)$ y $(0, 10)$. ¿Qué posición minimiza la suma de los cuadrados de los residuos de distancia? Respuesta: `x;y` con **3 decimales**.
    answers: ["sha256:a19de41f5aba35f5dbfe207ff02890237a31b05236ccf186b2fd96ecefece7ac"]
  - id: icp-punto-a-punto
    tier: 3
    prompt: |
      Los puntos $(0,0)$, $(2,0)$, $(2,1)$, $(0,3)$ de un escaneo se corresponden con $(1{,}02;\ 1{,}97)$, $(2{,}75;\ 3{,}01)$, $(2{,}21;\ 3{,}85)$, $(-0{,}48;\ 4{,}6)$ del otro. ¿Qué rotación (grados) y traslación $(t_x, t_y)$ minimizan el error cuadrático $\sum\|Rp_i + t - q_i\|^2$? Respuesta: `angulo;tx;ty`, todo con **2 decimales**.
    answers: ["sha256:6f796284ab2c007be2de340682d2cd4e40edc7c522b3697b9f768fe9b7a2010a"]
---

Un robot no sabe dónde está: tiene encoders que derivan, una IMU que se desvía, un LiDAR y unas cámaras que ven el mundo con ruido y ambigüedad. La **percepción
probabilística** convierte esas medidas en una creencia (una distribución de probabilidad) sobre el estado del robot y del entorno. **SLAM** (localización y mapeo
simultáneos) resuelve a la vez dónde está el robot y cómo es el mapa, sin conocer ninguno de los dos de antemano. Este nodo construye las herramientas desde
el filtro de Bayes hasta la optimización de grafos de poses, que es la formulación estándar actual, y la geometría de cámaras que alimenta el SLAM visual.
Se apoya en [[mat-probabilidad]], en el álgebra de [[mat-algebra-lineal-avanzada]] y en los marcos de [[rob-ros2]].

## Objetivos

Al terminar sabrás:

1. Formular la estimación de estado como un filtro de Bayes con modelos de movimiento y de medida.
2. Aplicar Kalman, EKF y filtros de partículas (localización Monte Carlo), con asociación de datos por distancia de Mahalanobis.
3. Construir rejillas de ocupación en log-odds.
4. Modelar cámaras (pinhole, distorsión), estéreo y geometría epipolar, y estimar con RANSAC.
5. Alinear escaneos con ICP.
6. Plantear SLAM como optimización de un grafo de poses y entender los cierres de bucle.

## Qué debes dominar antes

[[rob-ros2]] (tf2, marcos `map`, `odom`, `base_link`), [[mat-probabilidad]] (Bayes, gaussianas multivariantes) y [[mat-algebra-lineal-avanzada]] (mínimos cuadrados, descomposiciones). Las
rotaciones de [[rob-cinematica]] y los sensores de [[rob-sensores-actuadores]].

> [!question] Test de entrada
> 1. ¿Qué dice el teorema de Bayes?
> 2. ¿Qué distribución tiene la suma de dos gaussianas independientes?
> 3. ¿Cómo se resuelve un sistema sobredeterminado $Ax \approx b$ por mínimos cuadrados?
>
> Respuestas: $p(x \mid z) = p(z \mid x)p(x)/p(z)$; gaussiana con medias y varianzas sumadas; $x = (A^TA)^{-1}A^Tb$ (ecuaciones normales).

## 1. Para qué sirve

- **Navegación autónoma**: robots de almacén, aspiradoras, vehículos y drones se localizan en un mapa (AMCL en Nav2) o lo construyen (slam_toolbox, Cartographer).
- **Realidad aumentada y móviles**: odometría visual-inercial para anclar objetos virtuales.
- **Inspección y cartografía**: escáneres LiDAR móviles, robots en minas, túneles o el espacio.
- **Seguridad**: entender cómo se fusionan sensores ayuda a evaluar ataques de suplantación (GPS, LiDAR) y la robustez de un sistema autónomo.

## 2. El filtro de Bayes

El estado $x_t$ evoluciona con un **modelo de movimiento** $p(x_t \mid x_{t-1}, u_t)$ y se observa con un **modelo de medida** $p(z_t \mid x_t)$. La creencia $bel(x_t) = p(x_t \mid z_{1:t}, u_{1:t})$ se actualiza en
dos pasos, gracias a la hipótesis de Markov:

$$
\overline{bel}(x_t) = \int p(x_t \mid x_{t-1}, u_t)\,bel(x_{t-1})\,dx_{t-1}, \qquad bel(x_t) = \eta\,p(z_t \mid x_t)\,\overline{bel}(x_t) .
$$

La predicción **ensancha** la creencia (el movimiento añade incertidumbre); la corrección la **estrecha**. Todo lo demás son formas de representar $bel$: una tabla (filtro de
histograma), una gaussiana (Kalman) o un conjunto de muestras (partículas).

> [!example] Ejemplo resuelto 1: localización en un pasillo
> Un pasillo circular de 10 celdas tiene puertas en 0, 3 y 7. El sensor dice "puerta" con probabilidad 0,6 frente a una puerta y 0,2 frente a pared. Partiendo de creencia uniforme, el robot ve
> puerta, avanza 3 celdas, ve puerta, avanza 4 y ve puerta. Tras la primera medida las tres puertas tienen 0,1875; tras las tres, la celda 7 tiene **0,482**: la única secuencia de puertas
> compatible es 0 → 3 → 7. Una sola medida no basta; la secuencia, sí. Es la idea de la localización global.

## 3. Kalman, EKF y asociación de datos

Con modelos lineales y ruido gaussiano, el filtro de Bayes es exacto y cerrado: el **filtro de Kalman**. Predicción $\bar x = Fx + Bu$, $\bar P = FPF^T + Q$; corrección con la innovación
$\nu = z - H\bar x$, su covarianza $S = H\bar PH^T + R$ y la ganancia $K = \bar PH^TS^{-1}$: $x = \bar x + K\nu$, $P = (I - KH)\bar P$. En una dimensión, el resultado es la media ponderada por las precisiones.

Los robots no son lineales (el uniciclo tiene $\cos\theta$; un sensor de distancia y rumbo, $\sqrt{\cdot}$ y $\text{atan2}$). El **EKF** linealiza con los jacobianos en la estimación actual; el **UKF**
propaga puntos sigma sin derivar. El EKF-SLAM clásico mete en el estado el robot y todos los hitos, con coste cuadrático en su número.

Antes de corregir hay que decidir **qué** hito ha producido cada medida (asociación de datos). La **distancia de Mahalanobis** $\nu^TS^{-1}\nu$ sigue una $\chi^2$ con tantos grados de
libertad como la medida: se acepta la asociación si queda por debajo de un umbral (5,99 para 2 grados al 95 %). Una asociación errónea es de los fallos más graves: el filtro
la cree y diverge.

## 4. Filtros de partículas y localización Monte Carlo

Cuando la creencia es multimodal (al principio de la localización global, o en entornos simétricos), una gaussiana no sirve. El **filtro de partículas** la representa con
$N$ muestras: cada una se mueve con el modelo de movimiento (con ruido), se pondera con la verosimilitud de la medida y se **remuestrea** en proporción a los pesos. El
remuestreo **sistemático** (de baja varianza) usa un solo número aleatorio y punteros equiespaciados; se remuestrea solo cuando el **tamaño efectivo** $1/\sum w_i^2$ cae demasiado, para
no perder diversidad. La localización Monte Carlo (MCL; AMCL, con número de partículas adaptativo, en Nav2) es el estándar en mapas 2D, y FastSLAM combina partículas para
la trayectoria con filtros de Kalman por hito.

## 5. Mapas: rejillas de ocupación

Una **rejilla de ocupación** divide el espacio en celdas con probabilidad de estar ocupadas, supuestas independientes. Cada rayo del LiDAR atraviesa celdas libres y
termina en una ocupada; el **modelo inverso del sensor** da $p(m_i \mid z)$ y se acumula en **log-odds**, $l = \log\frac{p}{1 - p}$, que convierte el producto de Bayes en sumas:
$l_i \leftarrow l_i + \log\frac{p(m_i \mid z)}{1 - p(m_i \mid z)} - l_0$. Se limita $l$ para que el mapa pueda cambiar. En 3D se usan octrees (OctoMap), campos de distancia (TSDF, ESDF) y, cada vez más, representaciones
aprendidas.

## 6. Cámaras y geometría de varias vistas

El **modelo pinhole** proyecta un punto $X = (X, Y, Z)$ del marco de la cámara en el píxel $u = f_xX/Z + c_x$, $v = f_yY/Z + c_y$, es decir, $\lambda(u, v, 1)^T = KX$ con la matriz de **intrínsecos** $K$. Las
lentes reales añaden **distorsión** radial ($x(1 + k_1r^2 + k_2r^4 + \cdots)$) y tangencial; la calibración (con un patrón de tablero) estima $K$ y la distorsión.

Un par **estéreo** rectificado mide la profundidad por la **disparidad**: $Z = fB/d$. El error crece con el cuadrado de la distancia: $\sigma_Z = Z^2\sigma_d/(fB)$, por eso el estéreo es preciso de cerca
y pobre de lejos. Con dos vistas cualesquiera, la **geometría epipolar** liga los puntos correspondientes: en coordenadas normalizadas, $x_2^TEx_1 = 0$ con la **matriz esencial**
$E = [t]_\times R$; un punto de una imagen restringe su pareja a una **recta epipolar** de la otra. $E$ (o la fundamental $F$, en píxeles) se estima con correspondencias de
características (ORB, SIFT) dentro de **RANSAC**: muestras mínimas al azar, modelo, recuento de inliers; para tener probabilidad $p$ de una muestra limpia con fracción de inliers $w$ y
muestras de $s$ puntos hacen falta $N = \frac{\log(1 - p)}{\log(1 - w^s)}$ iteraciones.

> [!example] Ejemplo resuelto 2: un punto en estéreo
> Con $f = 700$ px, $B = 0{,}12$ m, centro $(320, 240)$, un punto en $(420, 200)$ con disparidad de 35 px está a $Z = 84/35 = 2{,}4$ m, en $X = (420 - 320)\cdot2{,}4/700 = 0{,}343$ m e $Y = -0{,}137$ m. Con
> $\sigma_d = 0{,}25$ px, $\sigma_Z = 2{,}4^2\cdot0{,}25/84 = 1{,}7$ cm; a 10 m serían 30 cm.

## 7. Alinear escaneos: ICP

El **ICP** (iterative closest point) alinea dos nubes de puntos: empareja cada punto con el más cercano de la otra, calcula la transformación rígida que minimiza
$\sum\|Rp_i + t - q_i\|^2$ y repite. Con correspondencias fijas el problema tiene **solución cerrada**: se restan los centroides, la rotación sale de la SVD de la matriz de covarianza
cruzada (en 2D, $\theta = \text{atan2}(\sum p_i\times q_i, \sum p_i\cdot q_i)$ con los puntos centrados) y la traslación alinea los centroides. Necesita una buena estimación inicial (la odometría) y
variantes robustas: punto a plano, rechazo de pares lejanos, NDT (distribuciones normales). Es el corazón de la odometría por LiDAR.

## 8. SLAM como optimización de un grafo

El SLAM moderno separa un **front-end** (odometría, emparejado de características o escaneos, detección de **cierres de bucle** al volver a un lugar conocido) y un **back-end**
que resuelve un **grafo de factores**: los nodos son poses (y quizá hitos) y cada arista es una restricción relativa con su covarianza. Se busca

$$
x^* = \arg\min_x \sum_{ij}\left\|z_{ij} - h(x_i, x_j)\right\|^2_{\Sigma_{ij}}
$$

por **Gauss–Newton** o Levenberg–Marquardt, explotando que el sistema es disperso; iSAM2 lo resuelve de forma incremental. Un cierre de bucle reparte el error acumulado de la
odometría por toda la trayectoria. Ejemplos: ORB-SLAM3 (visual e inercial), Cartographer y slam_toolbox (LiDAR 2D, en ROS 2), LIO-SAM (LiDAR + IMU), con bibliotecas como GTSAM o
g2o. Un cierre falso es catastrófico, por eso se usan funciones de coste robustas y verificación. Las líneas abiertas actuales incluyen SLAM semántico, mapas a largo plazo
y representaciones neuronales (Cadena y col., 2016).

> [!example] Ejemplo resuelto 3: un cierre de bucle (con menos ayuda)
> Cuatro odometrías de 1,0 m con $\sigma = 0{,}1$ y un cierre que mide $x_4 - x_0 = 3{,}6$ m con $\sigma = 0{,}1$. Plantea las ecuaciones normales y comprueba que $x_4 = 3{,}68$: la cadena de odometrías tiene varianza
> $4\cdot0{,}01$ y el cierre $0{,}01$, así que el cierre pesa cuatro veces más. Los 0,4 m de discrepancia se reparten a partes iguales: cada paso queda en 0,92 m. Repite con $\sigma = 1$ en el cierre.

## 9. Comprobar con un programa

El filtro de histograma del ejemplo 1, la retroproyección estéreo del ejemplo 2, el grafo del ejemplo 3 por ecuaciones normales y por fusión de varianzas, y ICP
con solución cerrada recuperando una transformación conocida.

```python
import math

# 1. Ejemplo resuelto 1: filtro de histograma en el pasillo.
puertas = {0, 3, 7}
def medir(b, puerta):
    n = [p * ((0.6 if puerta else 0.4) if i in puertas else (0.2 if puerta else 0.8)) for i, p in enumerate(b)]
    s = sum(n)
    return [x / s for x in n]
def mover(b, k):
    return [b[(i - k) % 10] for i in range(10)]
b = medir([0.1] * 10, True)
assert abs(b[0] - 0.1875) < 1e-12
b = medir(mover(medir(mover(b, 3), True), 4), True)
print("creencia final:", [round(x, 4) for x in b])
assert max(range(10), key=lambda i: b[i]) == 7 and abs(b[7] - 0.4821) < 1e-4

# 2. Ejemplo resuelto 2: retroproyección y su incertidumbre.
f, B, cx, cy = 700, 0.12, 320, 240
Z = f * B / 35
X, Y = (420 - cx) * Z / f, (200 - cy) * Z / f
assert abs(Z - 2.4) < 1e-12 and abs(X - 0.3429) < 1e-4 and abs(Y + 0.1371) < 1e-4
assert abs((f * B / (35 - 0.25) - f * B / (35 + 0.25)) / 2 - Z**2 * 0.25 / (f * B)) < 1e-4

# 3. Ejemplo resuelto 3: grafo de poses 1D por ecuaciones normales (eliminación de Gauss).
def grafo(sigma_cierre):
    w_o, w_c = 1 / 0.1**2, 1 / sigma_cierre**2
    n = 4
    A = [[0.0] * n for _ in range(n)]
    b = [0.0] * n
    for i in range(4):  # odometría x_{i+1} - x_i = 1 (x_0 = 0 fijo)
        for (p, s) in ((i, 1), (i - 1, -1)):
            if p < 0:
                continue
            b[p] += w_o * 1.0 * s
            for (q, t) in ((i, 1), (i - 1, -1)):
                if q >= 0:
                    A[p][q] += w_o * s * t
    A[3][3] += w_c
    b[3] += w_c * 3.6
    for c in range(n):
        for r in range(n):
            if r != c:
                fct = A[r][c] / A[c][c]
                A[r] = [a - fct * ac for a, ac in zip(A[r], A[c])]
                b[r] -= fct * b[c]
    return [b[k] / A[k][k] for k in range(n)]
x = grafo(0.1)
fusion = (4 / (4 * 0.01) + 3.6 / 0.01) / (1 / (4 * 0.01) + 1 / 0.01)
print("poses:", [round(v, 4) for v in x], "| con σ = 1 en el cierre:", round(grafo(1.0)[3], 4))
assert abs(x[3] - 3.68) < 1e-12 and abs(x[3] - fusion) < 1e-12 and all(abs(x[i] - 0.92 * (i + 1)) < 1e-12 for i in range(4))

# 4. ICP con correspondencias conocidas: recupera 25° y (0,7; −0,3).
th, t = math.radians(25), (0.7, -0.3)
P = [(0, 0), (1, 0), (1, 2), (-1, 1), (3, 1)]
Q = [(math.cos(th) * x - math.sin(th) * y + t[0], math.sin(th) * x + math.cos(th) * y + t[1]) for x, y in P]
mp = [sum(c) / len(P) for c in zip(*P)]
mq = [sum(c) / len(Q) for c in zip(*Q)]
sxx = sum((p[0] - mp[0]) * (q[0] - mq[0]) + (p[1] - mp[1]) * (q[1] - mq[1]) for p, q in zip(P, Q))
sxy = sum((p[0] - mp[0]) * (q[1] - mq[1]) - (p[1] - mp[1]) * (q[0] - mq[0]) for p, q in zip(P, Q))
ang = math.atan2(sxy, sxx)
tt = (mq[0] - (math.cos(ang) * mp[0] - math.sin(ang) * mp[1]), mq[1] - (math.sin(ang) * mp[0] + math.cos(ang) * mp[1]))
assert abs(ang - th) < 1e-12 and abs(tt[0] - 0.7) < 1e-12 and abs(tt[1] + 0.3) < 1e-12
```

## 10. Errores típicos

- Olvidar el ruido de proceso $Q$: el filtro se vuelve demasiado confiado y deja de escuchar a los sensores.
- Asociar medidas al hito más cercano en distancia euclídea en vez de Mahalanobis, o sin umbral.
- Remuestrear en cada paso aunque los pesos sean casi uniformes: se pierde diversidad (empobrecimiento de partículas).
- Calibrar mal la cámara o la transformada cámara-robot: todo el SLAM visual hereda el error.
- Confiar en la profundidad estéreo lejana: el error crece con $Z^2$.
- Aceptar cierres de bucle sin verificación: un cierre falso deforma todo el mapa.
- Mezclar marcos: poses en `odom` con hitos en `map`.

## 11. Resumen

- Bayes: predicción $\int p(x_t \mid x_{t-1}, u)\,bel$ y corrección $\eta\,p(z \mid x)\,\overline{bel}$.
- Kalman ($K = \bar PH^TS^{-1}$), EKF (jacobianos), UKF; Mahalanobis y $\chi^2$.
- Partículas: mover, ponderar, remuestreo sistemático; $N_{\text{eff}} = 1/\sum w^2$; MCL/AMCL, FastSLAM.
- Ocupación en log-odds.
- Pinhole $\lambda\tilde u = KX$, distorsión, estéreo $Z = fB/d$, $\sigma_Z = Z^2\sigma_d/fB$; $x_2^TEx_1 = 0$, $E = [t]_\times R$; RANSAC $N = \log(1 - p)/\log(1 - w^s)$.
- ICP con solución cerrada por centroides y SVD.
- Grafo de factores, Gauss–Newton disperso, cierres de bucle, iSAM2; ORB-SLAM3, Cartographer, slam_toolbox.

## Repaso: lo que debe quedarte dentro de un mes

1. Predecir ensancha la creencia y medir la estrecha.
2. Kalman es Bayes con gaussianas; las partículas, Bayes con muestras.
3. La profundidad estéreo empeora con el cuadrado de la distancia.
4. RANSAC sobrevive a los datos malos probando muestras mínimas.
5. Un cierre de bucle reparte el error acumulado por todo el grafo.

## Siguiente

`rob-planificacion-movimiento` (moverse en el mapa construido), `rob-control-optimo-mpc` y `ia-vision` (percepción con redes neuronales). La estimación lineal está en
[[rob-control]] (el filtro de Kalman como dual del LQR).
