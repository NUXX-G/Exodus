---
id: fis-relatividad-especial
title: "Relatividad especial: Lorentz, espaciotiempo de Minkowski, cinemática y dinámica relativistas, colisiones y campos"
area: fisica
trunk_level: 13
prerequisites: [fis-mecanica-clasica, fis-electromagnetismo]
academic_sources:
  - "Taylor, E. F.; Wheeler, J. A. Spacetime Physics, 2ª ed. W. H. Freeman, 1992."
  - "Rindler, W. Relativity: Special, General, and Cosmological, 2ª ed. Oxford University Press, 2006."
exercises:
  - id: factor-de-lorentz
    tier: 1
    prompt: |
      ¿Cuánto vale el factor de Lorentz $\gamma$ para $v = 0{,}8c$? Respuesta: con **4 decimales**.
    answers: ["sha256:69a9b5f97e16b15f8cf0d08d0cfbd4c5ea3e97c91adc8ea41fd0d3ab1ae7c1ca"]
  - id: vida-del-muon
    tier: 1
    prompt: |
      Un muon (vida media propia $2{,}197\ \mu$s) viaja a $0{,}995c$. ¿Cuál es su vida media medida en el laboratorio, en $\mu$s? Respuesta: con **2 decimales**.
    answers: ["sha256:785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09"]
  - id: contraccion-de-longitudes
    tier: 1
    prompt: |
      Una nave de 100 m de longitud propia pasa a $0{,}6c$. ¿Cuánto mide en el sistema del observador? Respuesta: en metros.
    answers: ["sha256:48449a14a4ff7d79bb7a1b6f3d488eba397c36ef25634c111b49baf362511afc"]
  - id: composicion-de-velocidades
    tier: 1
    prompt: |
      Una nave se aleja de la Tierra a $0{,}6c$ y lanza hacia delante una sonda a $0{,}7c$ respecto a ella. ¿A qué velocidad (en unidades de $c$) se aleja la sonda de la Tierra? Respuesta: con **4 decimales**.
    answers: ["sha256:60ced2445e8a99d5919cefa1fc1cfc599744a50245b3e59447432972ca34c78b"]
  - id: intervalo-y-tiempo-propio
    tier: 1
    prompt: |
      Dos sucesos están separados por $\Delta t = 5$ s y $\Delta x = 3$ segundos-luz. ¿Cuál es el tiempo propio entre ellos (en s)? Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: energia-de-un-gramo
    tier: 1
    prompt: |
      ¿Cuánta energía equivale a 1 g de masa, en GWh? ($c = 299\,792\,458$ m/s.) Respuesta: con **4 decimales**.
    answers: ["sha256:390caeadc9f10cac635c395e9fdd15ca590641eb70c87ee4ae8061bd988aa791"]
  - id: momento-de-un-proton
    tier: 1
    prompt: |
      ¿Cuál es el momento, en MeV/$c$, de un protón ($mc^2 = 938{,}272$ MeV) con $\gamma = 2$? Respuesta: con **1 decimal**.
    answers: ["sha256:3078f1ef2a43fceda5a958f014f395c91585d7d70149bc304d55e4e0917a6fdc"]
  - id: relatividad-de-la-simultaneidad
    tier: 2
    prompt: |
      En el sistema $S$ ocurre un suceso en $t = 0$, $x = 600$ m (simultáneo con el origen). ¿En qué instante $t'$ ocurre, en $\mu$s, para un sistema que se mueve a $0{,}8c$ en $+x$? Respuesta: con **4 decimales**.
    answers: ["sha256:94440d4b2597adc3ae099e5afedb7115fb3c648753b90b1f6b33536642149dc0"]
  - id: momento-del-electron
    tier: 2
    prompt: |
      Un electrón ($mc^2 = 0{,}511$ MeV) tiene energía cinética 1 MeV. ¿Cuánto vale $pc$ en MeV? Respuesta: con **4 decimales**.
    answers: ["sha256:22aa49aceafce6294ce533f1f698c3868577f7b454f6cd6f7af166abc9e56a10"]
  - id: doppler-relativista
    tier: 2
    prompt: |
      Una fuente que emite a 500 nm se aleja a $0{,}6c$ en la línea de visión. ¿Qué longitud de onda se observa, en nm? Respuesta: un número.
    answers: ["sha256:40510175845988f13f6162ed8526f0b09f73384467fa855e1e79b44a56562a58"]
  - id: efecto-compton
    tier: 2
    prompt: |
      Un fotón de 1 MeV se dispersa a $90°$ sobre un electrón en reposo. ¿Qué energía tiene el fotón dispersado, en MeV? Respuesta: con **4 decimales**.
    answers: ["sha256:461ccf9569285db529810744f4374cd7be13cf79cce9c34333a24bd91bb6c098"]
  - id: paradoja-de-los-gemelos
    tier: 2
    prompt: |
      Una gemela viaja a $0{,}8c$ hasta una estrella a 4 años luz y vuelve. ¿Cuántos años pasan para su hermano en la Tierra y cuántos para ella? Respuesta: `tierra;viajera`.
    answers: ["sha256:f022656d6bbd370899eee53f0aa4ab3e5218736671acec9526ea960d4a39c1e9"]
  - id: aberracion
    tier: 2
    prompt: |
      Una estrella se ve a $90°$ de la dirección del movimiento para un observador en reposo. ¿A qué ángulo (en grados, desde la dirección del movimiento) la ve un observador que se mueve a $0{,}5c$? Respuesta: un número.
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: umbral-de-produccion
    tier: 3
    prompt: |
      ¿Cuál es la energía cinética umbral (MeV) de un protón que choca contra otro en reposo para la reacción $p + p \to p + p + \pi^0$? ($m_pc^2 = 938{,}272$ MeV, $m_{\pi^0}c^2 = 134{,}977$ MeV.) Respuesta: con **2 decimales**.
    answers: ["sha256:b8051bfd9cbbdf52335a501f984ee3049f3e1cbaa0c9b092c01a60e018113978"]
  - id: cohete-a-un-g
    tier: 3
    prompt: |
      Un cohete acelera con aceleración propia constante $g = 9{,}80665$ m/s² durante un año de su tiempo propio (año de 365,25 días). ¿Qué velocidad alcanza (en unidades de $c$) y cuántos años pasan en la Tierra? Respuesta: `v;t` con **4 decimales**.
    answers: ["sha256:699cd84ffcde2ad12af1c03d61198c24852250ea589d1c1209e455c57c391467"]
  - id: transformacion-de-campos
    tier: 3
    prompt: |
      En el laboratorio hay un campo magnético $B_z = 1$ T y ningún campo eléctrico. ¿Qué campo eléctrico $E'_y$ (en MV/m) mide un observador que se mueve a $0{,}6c$ en $+x$? Respuesta: con **4 decimales**.
    answers: ["sha256:e606b969e5ac66e11b3adb00e532845dac919d4ac024a7577b72ccfb83d34563"]
---

# Relatividad especial: Lorentz, espaciotiempo de Minkowski, cinemática y dinámica relativistas, colisiones y campos

Dos postulados —las leyes de la física son las mismas en todos los sistemas inerciales y la luz va a la misma velocidad $c$ para todos— bastan para
derribar la idea de un tiempo universal. Lo que queda es más simple y más bello: un **espaciotiempo** de cuatro dimensiones con una "distancia" que todos
miden igual. De ahí salen la dilatación del tiempo que sufren los muones y los relojes del GPS, $E = mc^2$, el diseño de los aceleradores de partículas
y la explicación de que el magnetismo sea electricidad vista desde otro sistema ([[fis-electromagnetismo]]). Es requisito para la física de partículas,
la teoría cuántica de campos y la relatividad general.

## Objetivos

Al terminar sabrás:

1. Deducir y aplicar las transformaciones de Lorentz, la dilatación del tiempo, la contracción de longitudes y la relatividad de la simultaneidad.
2. Usar el intervalo invariante, el tiempo propio y los diagramas de Minkowski (conos de luz, causalidad).
3. Componer velocidades con la fórmula relativista y con rapideces.
4. Trabajar con cuadrivectores: cuadrimomento, $E^2 = (pc)^2 + (mc^2)^2$, masa invariante, umbrales de reacción y efecto Compton.
5. Calcular efecto Doppler relativista, aberración y movimiento con aceleración propia constante.
6. Transformar campos eléctricos y magnéticos y reconocer sus invariantes.

## Qué debes dominar antes

[[fis-mecanica-clasica]] (sistemas inerciales, conservación de energía y momento, transformaciones de Galileo) y [[fis-electromagnetismo]] (ecuaciones de
Maxwell, ondas electromagnéticas que viajan a $c$, fuerza de Lorentz).

> [!question] Test de entrada
> 1. En mecánica de Galileo, si un tren va a 30 m/s y lanzas una pelota hacia delante a 10 m/s, ¿a qué velocidad va respecto al andén?
> 2. ¿Qué velocidad predicen las ecuaciones de Maxwell para la luz en el vacío y respecto a qué?
> 3. ¿Cuál es la energía cinética clásica de una masa $m$ a velocidad $v$?
>
> Respuestas: 40 m/s; $c = 1/\sqrt{\mu_0\varepsilon_0}$, sin mencionar ningún sistema de referencia (de ahí el conflicto); $\frac12mv^2$.

## 1. Para qué sirve

- **GPS**: los relojes de los satélites van 7 μs/día más lentos por su velocidad (especial) y 45 μs/día más rápidos por estar más arriba (general); sin
  corregirlo, el error de posición crecería unos 10 km al día.
- **Aceleradores y física de partículas**: energías umbral, masas invariantes reconstruidas a partir de productos de desintegración (así se descubrió el
  bosón de Higgs), vidas medias dilatadas de partículas inestables.
- **Electromagnetismo y electrónica**: el campo magnético de una corriente es la consecuencia relativista de la fuerza eléctrica entre cargas en movimiento.
- **Astrofísica**: chorros relativistas, corrimiento al rojo, radiación sincrotrón.

## 2. Los postulados y las transformaciones de Lorentz

Con $\beta = v/c$ y $\gamma = \frac{1}{\sqrt{1 - \beta^2}}$, el cambio a un sistema $S'$ que se mueve a velocidad $v$ en $+x$ respecto a $S$ es

$$
t' = \gamma\left(t - \frac{vx}{c^2}\right), \qquad x' = \gamma(x - vt), \qquad y' = y, \qquad z' = z .
$$

Se deducen exigiendo linealidad, que un pulso de luz $x = ct$ siga siendo $x' = ct'$ y simetría entre $S$ y $S'$. Para $v \ll c$, $\gamma \approx 1 + \frac{\beta^2}{2}$ y se recupera
Galileo.

**Consecuencias.**

- **Relatividad de la simultaneidad**: dos sucesos simultáneos en $S$ ($\Delta t = 0$) separados $\Delta x$ no lo son en $S'$: $\Delta t' = -\gamma v\Delta x/c^2$.
- **Dilatación del tiempo**: un reloj en reposo en $S'$ marca $\Delta\tau$ entre dos tics; en $S$ pasan $\Delta t = \gamma\Delta\tau$.
- **Contracción de longitudes**: un objeto de longitud propia $L_0$ (medida en su sistema de reposo) mide $L = L_0/\gamma$ en la dirección del movimiento.

> [!example] Ejemplo resuelto 1: los muones de la atmósfera
> Los muones se crean a unos 15 km de altura y viven $\tau = 2{,}197\ \mu$s en su sistema. A $v = 0{,}995c$, sin relatividad recorrerían $v\tau \approx 0{,}66$ km. Con $\gamma \approx 10{,}0$, en el
> sistema de la Tierra viven $\gamma\tau \approx 22{,}0\ \mu$s y recorren $\approx 6{,}6$ km: una fracción apreciable llega al suelo, como se mide. En el sistema del muon, su vida es la
> normal, pero la atmósfera está **contraída** por el mismo $\gamma$: las dos descripciones dan el mismo número de muones en el suelo.

## 3. Espaciotiempo de Minkowski

El **intervalo** $s^2 = (c\Delta t)^2 - \Delta x^2 - \Delta y^2 - \Delta z^2$ es **invariante**: todos los inerciales lo miden igual. Si $s^2 > 0$ (tipo tiempo) existe un sistema en que
ambos sucesos ocurren en el mismo lugar y el **tiempo propio** es $\Delta\tau = s/c$; si $s^2 < 0$ (tipo espacio), ningún sistema los ve en el mismo lugar y su orden
temporal depende del observador, así que **no pueden estar causalmente conectados**; si $s^2 = 0$, los une un rayo de luz. Los **conos de luz** separan pasado,
futuro y "otro lugar".

Para una trayectoria cualquiera, el tiempo propio es $\tau = \int\sqrt{1 - v(t)^2/c^2}\,dt$: **el reloj que más tiempo marca entre dos sucesos es el que va en línea recta**
(inercial). Esa es la "paradoja" de los gemelos: el que viaja y vuelve tiene una trayectoria quebrada y envejece menos; no es simétrica porque solo uno
cambia de sistema inercial.

**Rapidez.** Con $\beta = \tanh\varphi$, se tiene $\gamma = \cosh\varphi$, $\gamma\beta = \operatorname{senh}\varphi$, y un boost es una "rotación hiperbólica". Las rapideces **se suman**: componer $v_1$ y $v_2$
en la misma dirección da

$$
\varphi = \varphi_1 + \varphi_2 \quad\Longleftrightarrow\quad v = \frac{v_1 + v_2}{1 + v_1v_2/c^2},
$$

que nunca supera $c$.

## 4. Cuadrivectores y dinámica

El **cuadrimomento** de una partícula de masa $m$ es $p^\mu = (E/c, \vec p)$ con $E = \gamma mc^2$ y $\vec p = \gamma m\vec v$; su "norma" es invariante:

$$
E^2 = (pc)^2 + (mc^2)^2 .
$$

En reposo, $E = mc^2$; la energía cinética es $K = (\gamma - 1)mc^2$. Los fotones tienen $m = 0$ y $E = pc$. En un sistema aislado se conserva el cuadrimomento total, y la
**masa invariante** $M^2c^4 = \left(\sum E\right)^2 - \left(\sum\vec pc\right)^2$ es la misma en todos los sistemas: la energía disponible para crear partículas es $Mc^2$, no la energía
total del laboratorio.

> [!example] Ejemplo resuelto 2: el umbral de producción de un pion
> En $p + p \to p + p + \pi^0$ con un protón en reposo, en el umbral las partículas finales salen en reposo en el sistema centro de masas, así que $M = 2m_p + m_\pi$. Con
> $E = K + m_p$ (unidades $c = 1$), $M^2 = (E + m_p)^2 - p^2 = 2m_p^2 + 2Em_p$. Igualando: $K = \frac{m_\pi(4m_p + m_\pi)}{2m_p} \approx 279{,}7$ MeV, más del doble de la masa del pion: buena
> parte de la energía se va en mover el centro de masas. Por eso los grandes aceleradores son **colisionadores**, donde el centro de masas está en reposo.

**Efecto Compton.** Un fotón dispersado por un electrón en reposo un ángulo $\theta$ pierde energía: $\frac{1}{E'} - \frac1E = \frac{1 - \cos\theta}{m_ec^2}$, o en longitudes de onda
$\lambda' - \lambda = \frac{h}{m_ec}(1 - \cos\theta)$. Fue la prueba de que la luz transporta momento en cuantos.

## 5. Luz en movimiento: Doppler y aberración

**Doppler longitudinal**: una fuente que se aleja con $\beta$ se observa con $\lambda_{\text{obs}} = \lambda\sqrt{\frac{1 + \beta}{1 - \beta}}$ (al acercarse, $\beta \to -\beta$). A diferencia del sonido, solo
importa la velocidad relativa. Hay además Doppler **transversal** ($\lambda_{\text{obs}} = \gamma\lambda$ a $90°$ en el sistema del observador): es la dilatación del tiempo pura.

**Aberración**: un observador que se mueve con $\beta$ ve las direcciones de la luz desplazadas hacia delante: $\cos\theta' = \frac{\cos\theta + \beta}{1 + \beta\cos\theta}$. A $0{,}5c$, una estrella a
$90°$ se ve a $60°$; a velocidades muy altas, todo el cielo se concentra delante (el "efecto faro" de los chorros relativistas).

## 6. Aceleración propia constante

Un cohete que siente siempre la misma aceleración $a$ en su propio sistema tiene rapidez $\varphi = a\tau/c$, así que

$$
v = c\tanh\frac{a\tau}{c}, \qquad t = \frac ca\operatorname{senh}\frac{a\tau}{c}, \qquad x = \frac{c^2}{a}\left(\cosh\frac{a\tau}{c} - 1\right).
$$

Con $a = g$, $c/g \approx 0{,}97$ años: tras un año de nave va a $0{,}77c$; tras 10 años de nave ha recorrido unos 15 000 años luz. La trayectoria es una hipérbola en el
diagrama de Minkowski.

## 7. Campos electromagnéticos en movimiento

$\vec E$ y $\vec B$ no son vectores independientes: forman el tensor de campo $F^{\mu\nu}$. Para un boost en $x$:

$$
E'_x = E_x, \quad E'_y = \gamma(E_y - vB_z), \quad E'_z = \gamma(E_z + vB_y), \quad B'_x = B_x, \quad B'_y = \gamma\left(B_y + \tfrac{v}{c^2}E_z\right), \quad B'_z = \gamma\left(B_z - \tfrac{v}{c^2}E_y\right).
$$

Son invariantes $E^2 - c^2B^2$ y $\vec E\cdot\vec B$. Un campo puramente magnético se ve, desde un sistema en movimiento, con una componente eléctrica: así, la fuerza
"magnética" sobre una carga que se mueve junto a un cable con corriente es, en el sistema de la carga, la fuerza eléctrica de un cable que ha dejado de ser
neutro por la contracción de longitudes distinta de electrones e iones.

> [!example] Ejemplo resuelto 3: el gemelo viajero (con menos ayuda)
> Una gemela viaja a $0{,}8c$ hasta una estrella a 4 años luz y vuelve. Calcula el tiempo en la Tierra ($2\cdot4/0{,}8$) y su tiempo propio dividiendo entre $\gamma = 5/3$. Después
> dibuja el diagrama de Minkowski: comprueba que en el giro la línea de simultaneidad de la viajera "salta" y que eso explica los 4 años que no ve pasar
> en la Tierra mientras da la vuelta.

## 8. Comprobar con un programa

Transformaciones de Lorentz con matrices (invariancia del intervalo y composición = suma de rapideces), el umbral del pion por bisección en la masa
invariante y el cohete a un g por integración.

```python
import math

def boost(beta):
    g = 1 / math.sqrt(1 - beta * beta)
    return [[g, -g * beta], [-g * beta, g]]

def aplicar(m, v):
    return [m[0][0] * v[0] + m[0][1] * v[1], m[1][0] * v[0] + m[1][1] * v[1]]

# 1. El intervalo es invariante y dos boosts seguidos son un boost con rapidez suma.
suceso = [5.0, 3.0]   # (ct, x)
for b in (0.3, 0.6, -0.9):
    t, x = aplicar(boost(b), suceso)
    assert abs((t * t - x * x) - (25 - 9)) < 1e-12
compuesto = aplicar(boost(0.7), aplicar(boost(0.6), suceso))
directo = aplicar(boost(math.tanh(math.atanh(0.6) + math.atanh(0.7))), suceso)
assert all(abs(a - b) < 1e-12 for a, b in zip(compuesto, directo))
assert abs(math.tanh(math.atanh(0.6) + math.atanh(0.7)) - 1.3 / 1.42) < 1e-15

# 2. Ejemplo resuelto 2: umbral de p + p → p + p + π⁰ por bisección en la masa invariante.
mp, mpi = 938.272, 134.977
M = lambda K: math.sqrt((K + 2 * mp) ** 2 - ((K + mp) ** 2 - mp**2))
lo, hi = 0.0, 2000.0
for _ in range(100):
    mid = (lo + hi) / 2
    lo, hi = (mid, hi) if M(mid) < 2 * mp + mpi else (lo, mid)
assert abs(lo - mpi * (4 * mp + mpi) / (2 * mp)) < 1e-9

# 3. Cohete a 1 g durante un año propio: integrar dt = cosh(gτ/c) dτ.
g, c, anio = 9.80665, 299792458.0, 365.25 * 86400
N = 200000
t = sum(math.cosh(g * (i + 0.5) * anio / N / c) for i in range(N)) * anio / N
v = math.tanh(g * anio / c)
assert abs(t / anio - (c / g) * math.sinh(g * anio / c) / anio) < 1e-9
print("umbral del pion:", round(lo, 2), "MeV | cohete: v =", round(v, 4), "c, t Tierra =", round(t / anio, 4), "años")

# 4. Ejemplo resuelto 3: gemelos.
assert abs(2 * 4 / 0.8 - 10) < 1e-12 and abs(10 * math.sqrt(1 - 0.64) - 6) < 1e-12
```

## 9. Errores típicos

- Aplicar $\Delta t = \gamma\Delta\tau$ sin comprobar que $\Delta\tau$ se mide en un solo reloj, en reposo en un sistema.
- Olvidar la relatividad de la simultaneidad (es la clave de casi todas las "paradojas").
- Sumar velocidades a la manera de Galileo, o sumar energías de laboratorio para calcular la energía disponible en una colisión.
- Usar $p = mv$ o $K = \frac12mv^2$ a velocidades relativistas.
- Creer que la masa "aumenta con la velocidad": la masa es invariante; lo que crece es $\gamma$.
- Pensar que nada puede ir más rápido que $c$ en ningún sentido: lo que no puede es la información o la energía (una mancha de luz en una pared lejana sí).

## 10. Resumen

- Lorentz: $t' = \gamma(t - vx/c^2)$, $x' = \gamma(x - vt)$; simultaneidad relativa, $\Delta t = \gamma\Delta\tau$, $L = L_0/\gamma$.
- Intervalo invariante, tiempo propio, conos de luz, causalidad; la recta maximiza el tiempo propio.
- Rapidez: $\beta = \tanh\varphi$; las rapideces se suman; $v = \frac{v_1 + v_2}{1 + v_1v_2/c^2}$.
- $E = \gamma mc^2$, $\vec p = \gamma m\vec v$, $E^2 = (pc)^2 + (mc^2)^2$, masa invariante, umbrales, Compton.
- Doppler $\sqrt{(1 + \beta)/(1 - \beta)}$, aberración, aceleración propia constante ($\tanh$, $\operatorname{senh}$).
- Campos: $E'_y = \gamma(E_y - vB_z)$, etc.; invariantes $E^2 - c^2B^2$ y $\vec E\cdot\vec B$.

## Repaso: lo que debe quedarte dentro de un mes

1. No hay tiempo absoluto: hay un espaciotiempo con un intervalo absoluto.
2. Los relojes en movimiento atrasan y las reglas en movimiento encogen, siempre según el sistema que mide.
3. $E^2 = (pc)^2 + (mc^2)^2$ resuelve casi todas las colisiones; usa la masa invariante.
4. Las rapideces se suman; las velocidades no.
5. Electricidad y magnetismo son dos caras del mismo campo.

## Siguiente

`fis-relatividad-general` (gravedad como curvatura del espaciotiempo), `fis-fisica-nuclear-particulas` (cinemática de colisiones y desintegraciones) y
`fis-teoria-cuantica-campos` (invariancia de Lorentz en la cuántica). La cuántica no relativista está en [[fis-mecanica-cuantica]].
