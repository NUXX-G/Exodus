---
id: fis-mecanica-newtoniana
title: "Mecánica newtoniana con cálculo: oscilaciones, rotación y órbitas"
area: fisica
trunk_level: 10
prerequisites: [fis-fuerzas-energia, mat-calculo-2]
academic_sources:
  - "Kleppner, D.; Kolenkow, R. J. An Introduction to Mechanics, 2ª ed. Cambridge University Press, 2013."
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I. Addison-Wesley, 1963 (edición en línea: feynmanlectures.caltech.edu)."
  - "Taylor, J. R. Classical Mechanics. University Science Books, 2005."
hints:
  - "Concepto: la segunda ley es una ecuación diferencial, m·x'' = F. Si la fuerza depende de la posición, de la velocidad o del tiempo, se integra o se resuelve la ecuación; para fuerzas conservativas es más corto usar la energía. En oscilaciones, la fuerza restauradora proporcional a −x da siempre la misma ecuación x'' + ω²x = 0, sea un muelle, un péndulo o un circuito. En rotación, cada magnitud traslacional tiene su análoga: m ↔ I, F ↔ τ, p ↔ L."
  - "Herramienta: integra numéricamente la ecuación del movimiento con Runge-Kutta de orden 4 (unas diez líneas de Python) y compáralo con la solución analítica; así detectas errores de signo y de unidades. scipy.integrate.solve_ivp hace lo mismo con control del error."
  - "Documentación oficial: docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html; Kleppner y Kolenkow, capítulos sobre fuerzas y movimiento, energía, momento, rotación y fuerzas centrales; Halliday-Resnick-Walker, capítulos sobre oscilaciones, rotación y gravitación."
exercises:
  - id: periodo-masa-muelle
    tier: 1
    prompt: |
      Una masa de $0{,}5$ kg unida a un muelle de constante $k = 200$ N/m oscila sin rozamiento. ¿Cuál es su periodo $T = 2\pi\sqrt{m/k}$, en segundos? Respuesta: **tres decimales**.
    answers: ["sha256:30a26d2c97bdcae5a4e1fca120abe18165875b907161f19e73e441b2383fcd28"]
  - id: velocidad-terminal
    tier: 1
    prompt: |
      Un paracaidista de $70$ kg cae con una fuerza de rozamiento $F = bv$ con $b = 14$ kg/s. Con $g = 10$ m/s$^2$, ¿cuál es su **velocidad terminal** (cuando el peso iguala al rozamiento), en m/s? Respuesta: un número.
    answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: centro-de-masas
    tier: 1
    prompt: |
      Una masa de $2$ kg está en $x = 0$ y otra de $3$ kg en $x = 5$ m. ¿Dónde está el centro de masas, en metros? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: periodo-del-pendulo
    tier: 2
    prompt: |
      Un péndulo simple de $1$ m de longitud oscila con amplitud pequeña ($g = 9{,}81$ m/s$^2$). ¿Cuál es su periodo $T = 2\pi\sqrt{L/g}$, en segundos? Respuesta: **tres decimales**.
    answers: ["sha256:585d8cf71ced55927b54233b9edbf041673cafba01e46285e7b2efad66f5264c"]
  - id: choque-elastico
    tier: 2
    prompt: |
      Una bola de $2$ kg a $6$ m/s choca **elásticamente** de frente con otra de $4$ kg en reposo. ¿Con qué velocidad sale la bola de $4$ kg, en m/s? (Conservan momento y energía.) Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: inercia-de-un-disco
    tier: 2
    prompt: |
      ¿Cuál es el momento de inercia de un disco homogéneo de $4$ kg y $0{,}5$ m de radio respecto a su eje, $I = \tfrac12 MR^2$, en kg·m$^2$? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: momento-angular
    tier: 2
    prompt: |
      Una patinadora gira a $2$ rad/s con momento de inercia $3$ kg·m$^2$. Al encoger los brazos baja a $1{,}2$ kg·m$^2$. Por la conservación del momento angular, ¿a cuántos rad/s gira? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: trabajo-fuerza-variable
    tier: 2
    prompt: |
      Una fuerza $F(x) = 3x^2$ newtons actúa a lo largo del eje $x$. ¿Qué trabajo realiza entre $x = 0$ y $x = 2$ m, en julios? Respuesta: un número.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: velocidad-con-arrastre
    tier: 2
    prompt: |
      El mismo paracaidista ($m = 70$ kg, $b = 14$ kg/s, $g = 10$) parte del reposo. Su velocidad es $v(t) = v_t(1 - e^{-t/\tau})$ con $\tau = m/b$. ¿Cuánto vale a los $10$ s, en m/s? Respuesta: **dos decimales**.
    answers: ["sha256:278898e09156016275266ad691b5f38dbb5e1e9ab799a6b24a42a2e588f772c5"]
  - id: equilibrios-estables
    tier: 2
    prompt: |
      Una partícula tiene energía potencial $U(x) = \frac{x^4}{4} - \frac{x^2}{2}$. ¿Cuántas posiciones de **equilibrio estable** (donde $U' = 0$ y $U'' > 0$) tiene? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: periodo-geoestacionario
    tier: 3
    prompt: |
      Un satélite orbita a $r = 42\,164$ km del centro de la Tierra ($GM = 3{,}986004418\cdot10^{14}$ m$^3$/s$^2$). Su periodo es $T = 2\pi\sqrt{r^3/GM}$. ¿Cuántos **segundos** son? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:ccb56c08c28ac69064783245a46e80525448ff88a80c1cd57db981a4723eba18"]
  - id: tercera-ley-de-kepler
    tier: 3
    prompt: |
      Ceres, el mayor asteroide del cinturón, tiene un semieje mayor de $2{,}77$ UA. Por la tercera ley de Kepler, $T^2 = a^3$ ($T$ en años, $a$ en UA). ¿Cuál es su periodo, en años? Respuesta: **dos decimales**.
    answers: ["sha256:1975fb2efd35d5321501894a562d1fca60dfd954fdec53b9288eccb80849f6a2"]
  - id: esfera-rodando
    tier: 3
    prompt: |
      Una esfera maciza ($I = \frac25mR^2$) rueda **sin deslizar** desde el reposo por una pendiente y desciende una altura $h = 1{,}4$ m. Con $g = 10$ m/s$^2$ y conservación de la energía ($mgh = \frac12mv^2 + \frac12I\omega^2$, $\omega = v/R$),
      ¿cuánto vale $v^2$, en m$^2$/s$^2$? Respuesta: un número.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: velocidad-maxima-oscilador
    tier: 3
    prompt: |
      Un oscilador de masa $1$ kg y $k = 100$ N/m se suelta del reposo desde $x = 0{,}1$ m. ¿Cuál es su velocidad **máxima**, en m/s? (Pista: $v_{\max} = \omega A$.) Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: masa-reducida
    tier: 3
    prompt: |
      Dos masas de $3$ kg y $6$ kg interactúan solo entre sí. Su movimiento relativo se describe como el de **una** masa reducida $\mu = \frac{m_1m_2}{m_1 + m_2}$. ¿Cuánto vale $\mu$, en kg? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: inercia-de-una-barra
    tier: 3
    prompt: |
      Una barra homogénea de $3$ kg y $1$ m gira alrededor de **uno de sus extremos**. Su momento de inercia respecto al centro es $\frac{1}{12}ML^2$. Con el **teorema de Steiner** ($I = I_{cm} + Md^2$), ¿cuánto vale respecto al extremo, en kg·m$^2$? Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
---

# Mecánica newtoniana con cálculo: oscilaciones, rotación y órbitas

[[fis-fuerzas-energia]] resolvía problemas con fuerzas constantes. La mayoría de las fuerzas reales **varían**: un muelle tira más cuanto más se estira, el aire frena más cuanto más deprisa vas, la gravedad cambia con la distancia. Con el **cálculo** la mecánica de Newton se convierte en una
herramienta general: **ecuaciones diferenciales** para el movimiento, integrales para el trabajo, y las ideas de oscilación, rotación y órbita que sostienen buena parte de la física y la ingeniería (relojes, puentes, motores, satélites, robots).

## Objetivos

Al terminar sabrás:

1. Describir el movimiento con derivadas e integrales, y resolver $m\ddot x = F$ para fuerzas variables sencillas (rozamiento viscoso).
2. Calcular el trabajo con integrales y usar la energía potencial, $F = -dU/dx$, y los diagramas de energía.
3. Resolver el **oscilador armónico**, el péndulo y entender amortiguamiento y resonancia.
4. Usar el centro de masas, el momento lineal y los choques.
5. Describir la **rotación**: torque, momento de inercia, momento angular, rodadura.
6. Aplicar las leyes de Kepler y la gravitación a órbitas.

> [!question] Test de entrada
> 1. Si $x(t) = 5t^2$, ¿cuánto vale la velocidad $v = dx/dt$ en $t = 2$? 2. ¿Cuánto vale $\int_0^2 3x^2\,dx$? 3. ¿Qué energía almacena un muelle de $k = 100$ N/m estirado $0{,}1$ m?
>
> Respuestas: $20$ m/s; $8$; $0{,}5$ J.

## 1. Para qué sirve

- **Ingeniería mecánica**: vibraciones de máquinas y edificios, amortiguadores, motores, ejes y volantes de inercia.
- **Robótica**: dinámica de brazos y vehículos ([[rob-control]], [[rob-cinematica]]).
- **Astronáutica**: órbitas, transferencias, propulsión.
- **Base de la física avanzada**: la mecánica lagrangiana y hamiltoniana y la cuántica parten de estas ideas ([[fis-mecanica-clasica]]).

## 2. Cinemática con cálculo

La velocidad es la derivada de la posición y la aceleración, la de la velocidad: $v = \dfrac{dx}{dt}$, $a = \dfrac{dv}{dt} = \dfrac{d^2x}{dt^2}$. Al revés, se **integra**: $v(t) = v_0 + \int_0^t a\,dt'$ y $x(t) = x_0 + \int_0^t v\,dt'$.
**Ejemplo:** $a(t) = 6t$ m/s$^2$ con $v_0 = 0$, $x_0 = 0$: $v = 3t^2$ y $x = t^3$. (Las ecuaciones de aceleración constante de [[fis-medida-movimiento]] son el caso $a = $ cte.)

En el plano o el espacio, los vectores se derivan componente a componente. **Movimiento circular uniforme:** $\vec r = (R\cos\omega t,\ R\sin\omega t)$ da $\vec v = \omega R(-\sin\omega t,\ \cos\omega t)$ (de módulo $\omega R$) y $\vec a = -\omega^2\vec r$: la aceleración apunta **hacia el centro** y vale $\omega^2R = v^2/R$, como se justificó geométricamente.

## 3. La segunda ley como ecuación diferencial: el rozamiento viscoso

$m\,\ddot x = F$ determina el movimiento a partir de la fuerza y de las condiciones iniciales. Si $F$ depende de la velocidad, hay que **resolver** la ecuación. **Ejemplo (caída con rozamiento lineal $F_r = -bv$):**

$$
m\frac{dv}{dt} = mg - bv .
$$

Es de **variables separables**: $\dfrac{dv}{mg - bv} = \dfrac{dt}{m}$; integrando, $-\dfrac1b\ln|mg - bv| = \dfrac{t}{m} + C$, y con $v(0) = 0$:

$$
v(t) = v_t\bigl(1 - e^{-t/\tau}\bigr), \qquad v_t = \frac{mg}{b},\quad \tau = \frac{m}{b} .
$$

La velocidad **tiende** a la **velocidad terminal** $v_t$ (cuando el peso iguala al rozamiento, $a = 0$) con **constante de tiempo** $\tau$: tras $\tau$ alcanza el $63\,\%$. Con $m = 70$ kg, $b = 14$ kg/s, $g = 10$: $v_t = 50$ m/s, $\tau = 5$ s, y $v(10\ \text{s}) = 50(1 - e^{-2}) = 43{,}2$ m/s.
(Es la misma ecuación que la carga de un condensador a través de una resistencia: [[ing-electricidad-basica]].) A velocidades altas el rozamiento del aire es **cuadrático** ($\propto v^2$) y la velocidad terminal es $\sqrt{mg/k}$; un paracaidista en caída abierta ronda los $55$ m/s.

**Cuando no hay solución analítica**, se integra numéricamente. El método de Runge-Kutta de orden $4$ avanza en pasos de tiempo con un error que baja como $h^4$:

```python
def rk4(f, y, t0, t1, h):
    """Integra y' = f(t, y) de t0 a t1 con paso h; y es una lista."""
    t = t0
    while t < t1 - 1e-12:
        h_ = min(h, t1 - t)
        k1 = f(t, y)
        k2 = f(t + h_ / 2, [a + h_ / 2 * b for a, b in zip(y, k1)])
        k3 = f(t + h_ / 2, [a + h_ / 2 * b for a, b in zip(y, k2)])
        k4 = f(t + h_, [a + h_ * b for a, b in zip(y, k3)])
        y = [a + h_ / 6 * (b + 2 * c + 2 * d + e) for a, b, c, d, e in zip(y, k1, k2, k3, k4)]
        t += h_
    return y

# caída con rozamiento: y = [x, v]; v(10) debe ser 50(1 - e^-2) = 43.23...
y = rk4(lambda t, y: [y[1], 10 - (14 / 70) * y[1]], [0.0, 0.0], 0, 10, 0.001)
assert abs(y[1] - 50 * (1 - 2.718281828459045 ** -2)) < 1e-9
```

## 4. Trabajo y energía con integrales

El **trabajo** de una fuerza variable es $W = \int F\,dx$ (en 3D, $\int\vec F\cdot d\vec r$). **Ejemplo:** $F(x) = 3x^2$ entre $0$ y $2$: $W = [x^3]_0^2 = 8$ J.
**Teorema trabajo-energía (general).** Multiplicando $F = m\,\dfrac{dv}{dt}$ por $v = \dfrac{dx}{dt}$: $F\,dx = m v\,dv$, e integrando, $\int F\,dx = \tfrac12mv_2^2 - \tfrac12mv_1^2$. $\blacksquare$

**Fuerzas conservativas y energía potencial.** Una fuerza es **conservativa** si su trabajo no depende del camino (peso, muelle, gravitación). Entonces existe una **energía potencial** $U(x)$ con

$$
F = -\frac{dU}{dx},
$$

y la energía mecánica $E = \tfrac12mv^2 + U$ se conserva. Ejemplos: peso, $U = mgh$; muelle, $U = \tfrac12kx^2$ (de $F = -kx$); gravitación, $U = -\dfrac{GMm}{r}$.

**Diagramas de energía.** La gráfica de $U(x)$ lo dice casi todo: los **equilibrios** están donde $U' = 0$; son **estables** si $U'' > 0$ (mínimo: una perturbación devuelve la partícula) e **inestables** si $U'' < 0$. La partícula solo puede estar donde $E \ge U$ (los puntos con $E = U$ son los **de retorno**).
**Ejemplo:** $U = \frac{x^4}{4} - \frac{x^2}{2}$: $U' = x^3 - x = 0$ en $x = 0, \pm1$; $U'' = 3x^2 - 1$ es negativa en $0$ (inestable) y positiva en $\pm1$ (**dos** equilibrios estables, un «doble pozo»).

**Potencia:** $P = \dfrac{dW}{dt} = \vec F\cdot\vec v$.

## 5. Oscilaciones

**Oscilador armónico.** Una masa $m$ con una fuerza restauradora $F = -kx$ cumple $m\ddot x = -kx$, es decir

$$
\ddot x + \omega^2x = 0, \qquad \omega = \sqrt{\frac km} .
$$

La solución general es $x(t) = A\cos(\omega t + \varphi)$ (se comprueba derivando dos veces: $\ddot x = -\omega^2x$), con $A$ y $\varphi$ fijadas por $x(0)$ y $v(0)$. **Periodo** $T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{\dfrac mk}$, **frecuencia** $f = 1/T$.
Propiedades notables: el periodo **no depende de la amplitud**; la **velocidad máxima** es $\omega A$; la energía $E = \tfrac12kA^2$ **oscila** entre cinética y potencial sin perderse. Para $m = 0{,}5$ kg y $k = 200$ N/m: $\omega = 20$ rad/s y $T = 0{,}314$ s.

**El péndulo simple.** Para un ángulo $\theta$, la componente tangencial del peso da $mL\ddot\theta = -mg\sin\theta$. Para ángulos **pequeños**, $\sin\theta\approx\theta$ (el primer término del desarrollo de Taylor, [[mat-calculo-2]]), y queda la ecuación del oscilador con $\omega = \sqrt{g/L}$: $T = 2\pi\sqrt{L/g}$,
independiente de la masa. Un péndulo de $1$ m tiene $T = 2{,}006$ s (el «péndulo de segundos»: $\approx 1$ s por oscilación en cada sentido). Para amplitudes grandes el periodo crece (ver [[fis-mecanica-clasica]]).

**Amortiguamiento.** Con un rozamiento $-b\dot x$, $m\ddot x + b\dot x + kx = 0$: según $b$, la respuesta es **subamortiguada** (oscila con amplitud que decae como $e^{-bt/2m}$), **críticamente amortiguada** (vuelve al reposo sin oscilar lo más deprisa posible) o **sobreamortiguada**. **Es exactamente la ecuación del circuito RLC** de [[ing-circuitos]]:
masa $\leftrightarrow$ inductancia, rozamiento $\leftrightarrow$ resistencia, constante del muelle $\leftrightarrow$ $1/C$. Los amortiguadores de un coche buscan amortiguamiento cercano al crítico.

**Resonancia.** Si se aplica una fuerza periódica de frecuencia $\Omega$, la amplitud de la respuesta es máxima cerca de la frecuencia natural $\omega$ y **crece cuando el amortiguamiento es pequeño**. Es la razón de que un columpio se empuje al ritmo adecuado y de que sea crítico evitar excitar las frecuencias propias de puentes y estructuras.
(El colapso del puente de Tacoma Narrows, 1940, suele citarse como resonancia, pero fue en realidad un fenómeno aeroelástico, el *flameo*; la lección sobre vibraciones sigue valiendo.)

## 6. Momento lineal, centro de masas y choques

El **centro de masas** de un sistema es $\vec r_{cm} = \dfrac{\sum m_i\vec r_i}{M}$ (con $M = \sum m_i$): dos masas de $2$ y $3$ kg en $x = 0$ y $x = 5$ lo tienen en $x = 3$. Las fuerzas **internas** se cancelan por la tercera ley, y

$$
\vec F_{\text{ext}} = M\,\vec a_{cm}, \qquad \vec p = M\vec v_{cm} :
$$

el centro de masas se mueve como si toda la masa estuviera en él y solo actuaran las fuerzas externas (por eso un fragmento de una explosión en vuelo deja al centro de masas siguiendo la misma parábola). Si $\vec F_{\text{ext}} = 0$, el momento $\vec p$ **se conserva**.

**Choque elástico unidimensional** (se conservan momento y energía cinética): una masa $m_1$ con velocidad $v$ choca contra $m_2$ en reposo:

$$
v_1' = \frac{m_1 - m_2}{m_1 + m_2}v,\qquad v_2' = \frac{2m_1}{m_1 + m_2}v .
$$

Con $m_1 = 2$, $m_2 = 4$, $v = 6$: $v_1' = -2$ m/s (rebota) y $v_2' = 4$ m/s. Casos límite: $m_1 = m_2$ intercambian velocidades (bolas de billar); $m_1\ll m_2$ rebota con $-v$ (una pelota contra un muro). En un choque **inelástico** solo se conserva el momento.

**Propulsión de un cohete.** Al expulsar gas con velocidad relativa $v_e$, la conservación del momento da la **ecuación de Tsiolkovsky**: $\Delta v = v_e\ln\dfrac{m_0}{m_f}$. Con $v_e = 3$ km/s y una relación de masas de $10$: $\Delta v = 3\ln 10\approx6{,}9$ km/s. Por eso los cohetes son casi todo combustible y se usan **etapas**.

**Problema de dos cuerpos.** Dos masas que interactúan solo entre sí se reducen a una sola partícula de **masa reducida** $\mu = \dfrac{m_1m_2}{m_1 + m_2}$ moviéndose bajo la fuerza entre ellas ($3$ y $6$ kg: $\mu = 2$ kg). Es la base del átomo de hidrógeno y de los sistemas binarios.

## 7. Rotación

Un cuerpo rígido que gira alrededor de un eje fijo tiene **velocidad angular** $\omega = d\theta/dt$ y **aceleración angular** $\alpha = d\omega/dt$; un punto a distancia $r$ del eje tiene velocidad $v = \omega r$. Las magnitudes de la traslación tienen análogas:

| Traslación | Rotación |
|---|---|
| posición $x$, velocidad $v$ | ángulo $\theta$, velocidad angular $\omega$ |
| masa $m$ | **momento de inercia** $I = \sum m_ir_i^2 = \int r^2\,dm$ |
| fuerza $F$ | **torque** $\tau = rF\sin\theta$ ($\vec\tau = \vec r\times\vec F$) |
| $F = ma$ | $\tau = I\alpha$ |
| energía cinética $\tfrac12mv^2$ | $\tfrac12I\omega^2$ |
| momento $p = mv$ | **momento angular** $L = I\omega$ |

El momento de inercia mide cuánto cuesta cambiar la rotación y **depende de cómo se reparte la masa respecto al eje**. Valores clásicos: disco o cilindro macizo $\tfrac12MR^2$; aro $MR^2$; esfera maciza $\tfrac25MR^2$; barra respecto a su centro $\tfrac1{12}ML^2$.
**Teorema de Steiner (ejes paralelos):** $I = I_{cm} + Md^2$; una barra respecto a un extremo: $\tfrac1{12}ML^2 + M(L/2)^2 = \tfrac13ML^2$ ($3$ kg y $1$ m: $1$ kg·m$^2$). Un disco de $4$ kg y $0{,}5$ m: $I = \tfrac12\cdot4\cdot0{,}25 = 0{,}5$ kg·m$^2$ (se comprueba integrando $\int r^2\,dm$ con $dm = \frac{M}{\pi R^2}2\pi r\,dr$).

**Conservación del momento angular.** Sin torque externo, $L = I\omega$ es constante. **La patinadora** que encoge los brazos reduce $I$ y por tanto **aumenta $\omega$**: con $I$ de $3$ a $1{,}2$ kg·m$^2$ y $\omega = 2$ rad/s, pasa a $5$ rad/s. Es lo que mantiene estable una bicicleta, un giroscopio y un planeta.

**Rodadura sin deslizar** ($v = \omega R$): la energía cinética total es $\tfrac12mv^2 + \tfrac12I\omega^2 = \tfrac12mv^2\bigl(1 + \frac{I}{mR^2}\bigr)$. Al bajar por una pendiente una altura $h$, $v^2 = \dfrac{2gh}{1 + I/(mR^2)}$: una esfera maciza ($\tfrac25$) da $\tfrac{10gh}{7}$, un disco ($\tfrac12$)
$\tfrac{4gh}{3}$ y un aro ($1$) $gh$. **Una esfera siempre gana a un disco y este a un aro**, sin importar masa ni radio.

## 8. Gravitación, leyes de Kepler y órbitas

Para una fuerza **central** $\vec F\parallel\vec r$ el torque es cero, luego **el momento angular se conserva**: el movimiento queda en un plano y el radio vector barre **áreas iguales en tiempos iguales** (**segunda ley de Kepler**; es simplemente conservación de $L$). Con $F = -GMm/r^2$ las órbitas son **cónicas**; las ligadas son
**elipses con el Sol en un foco** (**primera ley**, ver [[mat-geometria-analitica]]). Para una órbita circular, $\dfrac{mv^2}{r} = \dfrac{GMm}{r^2}$ da $T = 2\pi\sqrt{\dfrac{r^3}{GM}}$, y en general (**tercera ley**):

$$
T^2 = \frac{4\pi^2}{GM}\,a^3 \quad(a = \text{semieje mayor}),
$$

es decir, $T^2\propto a^3$. En unidades de años y UA, $T^2 = a^3$ (con la masa del Sol): Ceres, con $a = 2{,}77$ UA, tarda $2{,}77^{3/2} = 4{,}61$ años. Un satélite geoestacionario ($T$ = un día sidéreo, $86\,164$ s) orbita a $r\approx42\,164$ km del centro de la Tierra;
con $GM = 3{,}986\cdot10^{14}$ m$^3$/s$^2$ se obtiene $T\approx86\,163$ s. **Energía de una órbita circular:** $E = \tfrac12mv^2 - \dfrac{GMm}{r} = -\dfrac{GMm}{2r}$ (negativa: ligada); **de escape**, $E = 0$.

## 9. Marcos de referencia no inerciales

Las leyes de Newton valen en **marcos inerciales**. En un marco que acelera o gira aparecen **fuerzas ficticias**: la **centrífuga** ($m\omega^2r$ hacia fuera) y la de **Coriolis** ($-2m\vec\omega\times\vec v$). La de Coriolis explica por qué los ciclones giran en sentidos opuestos en cada hemisferio y desvía las trayectorias de proyectiles de largo alcance;
a la escala de una bañera o un lavabo es despreciable (el sentido en que se vacía depende de la forma y de las corrientes). Son «reales» para quien está en el marco giratorio, pero no tienen un cuerpo que las produzca.

## 10. Errores típicos

- Aplicar fórmulas de aceleración constante cuando la fuerza **varía** con la posición o la velocidad.
- Olvidar el signo en $F = -dU/dx$, o confundir equilibrio estable e inestable.
- Usar $T = 2\pi\sqrt{L/g}$ con amplitudes grandes (solo vale para ángulos pequeños).
- Creer que el periodo del péndulo depende de la masa.
- En choques, suponer que la energía cinética se conserva siempre (solo en los elásticos); el momento se conserva en todos.
- Medir $I$ respecto al eje equivocado (usar Steiner).
- Mezclar traslación y rotación en la energía de un cuerpo que rueda.
- Tratar la fuerza centrífuga como una fuerza real en un marco inercial.

## Repaso: lo que debe quedarte dentro de un mes

1. $v = \dot x$, $a = \ddot x$; $m\ddot x = F$; rozamiento viscoso: $v = v_t(1 - e^{-t/\tau})$, $\tau = m/b$.
2. $W = \int F\,dx$; $F = -dU/dx$; equilibrio estable $\iff U'' > 0$.
3. $\ddot x + \omega^2x = 0$, $\omega = \sqrt{k/m}$, $T = 2\pi\sqrt{m/k}$; péndulo $2\pi\sqrt{L/g}$; resonancia.
4. $\vec p$ se conserva siempre; choque elástico 1D; $\Delta v = v_e\ln(m_0/m_f)$.
5. $\tau = I\alpha$, $L = I\omega$ se conserva; $T^2 = \frac{4\pi^2}{GM}a^3$.

## Siguiente

`fis-electricidad-magnetismo-1` lleva la misma estructura (campos, potencial, energía) a las cargas, y [[fis-mecanica-clasica]] reformula todo con el formalismo de Lagrange y Hamilton.
