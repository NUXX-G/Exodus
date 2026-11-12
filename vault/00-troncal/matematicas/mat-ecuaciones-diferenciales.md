---
id: mat-ecuaciones-diferenciales
title: "Ecuaciones diferenciales ordinarias: modelos, métodos exactos, sistemas, Laplace y métodos numéricos"
area: matematicas
trunk_level: 10
prerequisites: [mat-calculo-2, mat-algebra-lineal-1]
academic_sources:
  - "Boyce, W. E.; DiPrima, R. C.; Meade, D. B. Elementary Differential Equations and Boundary Value Problems, 11ª ed. Wiley, 2017."
  - "Strogatz, S. H. Nonlinear Dynamics and Chaos, 2ª ed. Westview Press, 2015 (reeditado por CRC Press)."
  - "MIT OpenCourseWare. 18.03 Differential Equations, primavera de 2010 (Mattuck y Miller): apuntes, problemas y vídeos gratuitos."
  - "Apostol, T. M. Calculus, Vol. II, 2ª ed. Wiley, 1969 (sistemas lineales de ecuaciones diferenciales)."
hints:
  - "Concepto: identifica primero el tipo. Si se pueden separar las variables, sepáralas; si es lineal de primer orden, usa el factor integrante e^(∫p); si es lineal de coeficientes constantes, prueba e^(rt) y resuelve la ecuación característica; si es un sistema x' = Ax, busca autovalores y autovectores. Las condiciones iniciales fijan las constantes al final."
  - "Herramienta: comprueba cualquier solución sustituyéndola en la ecuación, y cualquier valor numérico con un integrador Runge-Kutta 4 de pocas líneas en Python (o scipy.integrate.solve_ivp). Para clasificar un equilibrio, calcula traza y determinante de la matriz (o de la jacobiana en el punto)."
  - "Documentación: MIT OCW 18.03 (ocw.mit.edu), notas de Mattuck y Miller; Boyce y DiPrima, capítulos de primer orden, segundo orden lineal, transformada de Laplace, sistemas y métodos numéricos; Strogatz para el plano de fases; docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html."
exercises:
  - id: decaimiento-exponencial
    tier: 1
    prompt: |
      Resuelve $y' = -0{,}2\,y$ con $y(0) = 50$ y calcula $y(5)$. Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:bf24b0ef74e3e36736bbd06e8ed552576dfbb374106ded87dd038fd801656ff5"]
  - id: datacion-por-carbono
    tier: 1
    prompt: |
      El carbono 14 decae según $N' = -kN$ con un periodo de semidesintegración de $5730$ años. ¿Qué **porcentaje** del carbono 14 inicial queda al cabo de $10\,000$ años? Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:5f50492f8864893b6bbbc3af3fff4e27030122fd3b5acea097199d17c9b5a614"]
  - id: ecuacion-separable
    tier: 1
    prompt: |
      Resuelve $y' = x\,y^2$ con $y(0) = 1$ (separa variables) y calcula $y(1)$. Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: enfriamiento-de-newton
    tier: 1
    prompt: |
      Un café a $90\,^\circ\text{C}$ se enfría en una habitación a $20\,^\circ\text{C}$ según $T' = -k(T - 20)$. A los $10$ minutos está a $60\,^\circ\text{C}$. ¿A los cuántos minutos (desde el principio) llega a $30\,^\circ\text{C}$? Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:7031a53b4500beb6f5bed5ca6087dcbb3940264c8ab9d4ad97f57b76053d95aa"]
  - id: factor-integrante
    tier: 2
    prompt: |
      Resuelve $y' + 2y = e^{-x}$ con $y(0) = 0$ mediante un factor integrante y calcula $y(1)$. Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:1eed934749bcf744c84e17160caff21b0ba076ceb60a9f724d4f0fdb5481f2c4"]
  - id: crecimiento-logistico
    tier: 2
    prompt: |
      Una población sigue $P' = 0{,}5\,P\,(1 - P/1000)$ con $P(0) = 100$ ($t$ en años). ¿Cuánto vale $P(4)$? Respuesta: un entero (redondeado).
    answers: ["sha256:caa1aedb2a6ce96b39b9fde1a49e1ebcb431b6da4586da0aef56df9b78221d60"]
  - id: coeficientes-constantes
    tier: 2
    prompt: |
      Resuelve $y'' - 3y' + 2y = 0$ con $y(0) = 1$, $y'(0) = 0$ y calcula $y(1)$. Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:184262ba70a8b2d4ea1d251d4e8b6a9da92243bfda3dea80ec221145152f6ad3"]
  - id: oscilador-amortiguado
    tier: 2
    prompt: |
      El oscilador $y'' + 2y' + 4y = 0$ está subamortiguado. ¿Cuál es el **periodo** de sus oscilaciones (el tiempo entre dos pasos por cero en el mismo sentido)? Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:9d00b5fbe134031886a5703e3e10462d884f1716e7c7eb374e27f492f7bea108"]
  - id: coeficientes-indeterminados
    tier: 2
    prompt: |
      Resuelve $y'' + y = 3\cos 2x$ con $y(0) = 0$, $y'(0) = 0$ (busca una solución particular $A\cos 2x$) y calcula $y(\pi)$. Respuesta: un entero.
    answers: ["sha256:cf3bae39dd692048a8bf961182e6a34dfd323eeb0748e162eaf055107f1cb873"]
  - id: metodo-de-euler
    tier: 2
    prompt: |
      Aplica el método de **Euler** a $y' = y$, $y(0) = 1$, con paso $h = 0{,}1$, durante $10$ pasos. ¿Qué valor aproximado obtienes para $y(1)$? (El exacto es $e \approx 2{,}71828$.) Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:c7a202535e2e2089a1bf4fac83a5b2dbebf21506d8479efa59b20b45b4b334c8"]
  - id: transformada-de-laplace
    tier: 2
    prompt: |
      Calcula la transformada de Laplace $F(s) = \int_0^\infty t\,e^{2t}e^{-st}\,dt$ en $s = 4$. Respuesta: un número.
    answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: un-paso-de-runge-kutta
    tier: 3
    prompt: |
      Da **un** paso del método de Runge-Kutta clásico de orden 4 para $y' = y$, $y(0) = 1$, con $h = 0{,}5$. ¿Qué valor obtienes para $y(0{,}5)$? (Sale un decimal exacto.) Respuesta: un número.
    answers: ["sha256:1e6fc06e500474bb63b297436a2f92571e58c064cf12f1a0d57a07d0d0a6fa34"]
  - id: sistema-lineal
    tier: 3
    prompt: |
      Resuelve el sistema $x' = y$, $y' = -2x - 3y$ con $x(0) = 1$, $y(0) = 0$ (autovalores de la matriz) y calcula $x(1)$. Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:3bb6218c31fd1112a180572d8fbffe4491001171261da8379560be45dcf8a900"]
  - id: plano-de-fases
    tier: 3
    prompt: |
      ¿Qué tipo de punto de equilibrio tiene el origen para $\mathbf x' = A\mathbf x$ con $A = \begin{pmatrix} 1 & -5 \\ 1 & -3 \end{pmatrix}$?

      (a) nodo estable · (b) nodo inestable · (c) punto de silla · (d) espiral estable · (e) espiral inestable · (f) centro

      Respuesta: una letra.
    answers: ["sha256:18ac3e7343f016890c510e93f935261169d9e3f565436429830faf0934f4f8e4"]
  - id: resonancia
    tier: 3
    prompt: |
      Resuelve $y'' + 4y = \cos 2t$ con $y(0) = y'(0) = 0$ (la fuerza tiene la frecuencia natural: resonancia) y calcula $y(10)$. Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:e9289c798d6ca96df863b1ca1411c9935a858b38d25623d80457b8146ca7104d"]
  - id: pendulo-no-lineal
    tier: 3
    prompt: |
      Un péndulo simple de longitud $1$ m ($g = 9{,}81$ m/s$^2$) se suelta desde $60^\circ$. Sin aproximar $\sin\theta \approx \theta$, su periodo es $T = 4\sqrt{L/g}\,K(k)$ con $k = \sin(\theta_0/2)$ y $K(k) = \int_0^{\pi/2} \frac{d\phi}{\sqrt{1 - k^2\sin^2\phi}}$. ¿Cuánto vale $T$, en segundos? (Compáralo con el de oscilaciones pequeñas, $2\pi\sqrt{L/g}$.) Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:00e2b0a09a4d4494fcbe78e9ec54b0ec982c64dfc527799b8d09b7082de180e3"]
---

# Ecuaciones diferenciales ordinarias: modelos, métodos exactos, sistemas, Laplace y métodos numéricos

Las leyes de la naturaleza casi nunca dicen cuánto vale una magnitud, sino **cómo cambia**: la segunda ley de Newton relaciona la
aceleración con la fuerza, la desintegración radiactiva dice que el ritmo de decaimiento es proporcional a lo que queda, la corriente
de un condensador es proporcional a la derivada de su tensión. Una **ecuación diferencial** es una ecuación cuya incógnita es una
función y en la que aparecen sus derivadas. Este nodo enseña a plantearlas a partir de un modelo, a resolver las familias que tienen
solución exacta (separables, lineales, de coeficientes constantes, sistemas lineales, con la transformada de Laplace), a entender
cualitativamente su comportamiento (equilibrios y plano de fases) y a resolverlas numéricamente cuando no hay fórmula.

## Objetivos

Al terminar sabrás:

1. Plantear ecuaciones diferenciales a partir de un modelo (desintegración, enfriamiento, mezclas, población, circuitos, osciladores).
2. Resolver ecuaciones separables y lineales de primer orden, y enunciar el teorema de existencia y unicidad.
3. Resolver ecuaciones lineales de segundo orden de coeficientes constantes, homogéneas y con fuerza, y reconocer la **resonancia**.
4. Resolver sistemas $\mathbf x' = A\mathbf x$ con autovalores y clasificar equilibrios por la traza y el determinante.
5. Usar la transformada de Laplace para resolver problemas de valor inicial.
6. Aplicar los métodos de Euler y Runge-Kutta 4 y conocer su orden de error.

## Qué debes dominar antes

[[mat-calculo-2]] (integrales, exponencial, series de Taylor), [[mat-algebra-lineal-1]] (autovalores y autovectores) y los
números complejos de [[ing-circuitos-dc-ac]] (forma polar, $e^{i\theta} = \cos\theta + i\sin\theta$).

> [!question] Test de entrada
> 1. Calcula $\int \frac{dy}{y}$ y $\int e^{2x}\,dx$.
> 2. ¿Qué raíces tiene $r^2 + 2r + 5 = 0$?
> 3. Halla los autovalores de $\begin{pmatrix} 0 & 1 \\ -2 & -3 \end{pmatrix}$.
>
> Respuestas: $\ln\lvert y\rvert + C$ y $\tfrac12 e^{2x} + C$; $r = -1 \pm 2i$; $-1$ y $-2$.

## 1. Para qué sirve

- **Física e ingeniería**: el movimiento ([[fis-mecanica-newtoniana]]), los circuitos ([[ing-circuitos-dc-ac]]), la transmisión del calor,
  las vibraciones de un puente o la suspensión de un coche son ecuaciones diferenciales.
- **Control y robótica**: un sistema de control se diseña sobre el modelo diferencial de la planta ([[rob-control]]).
- **Biología, medicina y economía**: crecimiento de poblaciones, epidemias, farmacocinética (cuánto fármaco queda en sangre),
  intereses continuos.
- **Computación científica**: casi todas las simulaciones (clima, órbitas, videojuegos con física) integran ecuaciones diferenciales
  numéricamente.

## 2. Qué es una ecuación diferencial

Una **ecuación diferencial ordinaria** (EDO) relaciona una función $y(t)$ con sus derivadas. Su **orden** es el de la derivada más alta.
Una **solución** es una función que la satisface en un intervalo. La solución general contiene constantes (tantas como el orden); un
**problema de valor inicial** las fija dando $y(t_0)$ (y, si el orden es 2, también $y'(t_0)$).

Geométricamente, $y' = f(t, y)$ asigna a cada punto del plano una **pendiente**: el **campo de direcciones**. Las soluciones son las
curvas tangentes en cada punto a esas pendientes.

**Teorema de existencia y unicidad (Picard-Lindelöf).** Si $f$ y $\partial f/\partial y$ son continuas en un rectángulo que contiene a
$(t_0, y_0)$, el problema $y' = f(t, y)$, $y(t_0) = y_0$ tiene **una única** solución en algún intervalo alrededor de $t_0$.

Sin la hipótesis puede fallar la unicidad: $y' = 3y^{2/3}$, $y(0) = 0$ tiene las soluciones $y = 0$ y $y = t^3$ (aquí
$\partial f/\partial y = 2y^{-1/3}$ no es continua en $y = 0$). La unicidad es lo que permite a un simulador decir «desde este estado,
el sistema hará exactamente esto».

## 3. Ecuaciones de primer orden

**Separables.** $y' = g(t)\,h(y)$: se separa $\frac{dy}{h(y)} = g(t)\,dt$ y se integra cada lado.

**Ejemplo resuelto 1 (desintegración).** $N' = -kN$: $\int\frac{dN}{N} = -\int k\,dt$, $\ln N = -kt + C$, $N = N_0 e^{-kt}$. El **periodo de
semidesintegración** cumple $e^{-kT} = \tfrac12$: $T = \ln 2/k$. La ley de **enfriamiento de Newton**, $T' = -k(T - T_{\text{amb}})$, es la
misma ecuación para $T - T_{\text{amb}}$.

**Ejemplo resuelto 2 (logística).** Una población con recursos limitados crece según $P' = rP(1 - P/K)$: casi exponencial cuando es
pequeña y frenada al acercarse a la **capacidad** $K$. Separando y descomponiendo en fracciones simples,
$\frac{K\,dP}{P(K - P)} = \left(\frac1P + \frac1{K - P}\right)dP = r\,dt$, de donde

$$
P(t) = \frac{K}{1 + \dfrac{K - P_0}{P_0}\,e^{-rt}} .
$$

Sus equilibrios son $P = 0$ (inestable) y $P = K$ (estable).

**Lineales de primer orden.** $y' + p(t)\,y = q(t)$. Multiplicando por el **factor integrante** $\mu = e^{\int p\,dt}$ el lado izquierdo es
la derivada de un producto, $(\mu y)' = \mu q$, y basta integrar: $y = \frac{1}{\mu}\left(\int \mu q\,dt + C\right)$.

**Ejemplo resuelto 3 (mezclas).** Un depósito con $100$ L de agua y $10$ kg de sal recibe agua pura a $5$ L/min y pierde mezcla a $5$
L/min. La sal $x(t)$ cumple $x' = -\frac{5}{100}x$ (sale a la concentración $x/100$): $x = 10e^{-t/20}$, y a los 20 minutos quedan
$10/e \approx 3{,}68$ kg. Si entrara salmuera con $0{,}2$ kg/L, sería $x' + x/20 = 1$, lineal: $\mu = e^{t/20}$, $x = 20 - 10e^{-t/20}$, que
tiende a los $20$ kg del equilibrio.

## 4. Ecuaciones lineales de segundo orden

$a\,y'' + b\,y' + c\,y = 0$ con coeficientes constantes. Por ser **lineal**, cualquier combinación de soluciones es solución
(**superposición**), y la solución general es $C_1 y_1 + C_2 y_2$ con dos soluciones independientes. Probando $y = e^{rt}$ se obtiene la
**ecuación característica** $ar^2 + br + c = 0$:

| Raíces | Solución general |
|---|---|
| reales distintas $r_1 \ne r_2$ | $C_1e^{r_1t} + C_2e^{r_2t}$ |
| real doble $r$ | $(C_1 + C_2t)\,e^{rt}$ |
| complejas $\alpha \pm i\beta$ | $e^{\alpha t}(C_1\cos\beta t + C_2\sin\beta t)$ |

(El tercer caso sale de $e^{(\alpha + i\beta)t} = e^{\alpha t}(\cos\beta t + i\sin\beta t)$: sus partes real e imaginaria son soluciones reales.)

**El oscilador.** Una masa $m$ en un muelle de constante $k$ con rozamiento viscoso $c$ cumple $my'' + cy' + ky = 0$. Con $\omega_0 = \sqrt{k/m}$:

- **subamortiguado** ($c^2 < 4mk$): oscila con amplitud decreciente y frecuencia $\omega_d = \sqrt{\omega_0^2 - (c/2m)^2}$;
- **críticamente amortiguado** ($c^2 = 4mk$): vuelve al reposo lo más rápido posible sin oscilar (así se diseñan los amortiguadores y la
  aguja de un instrumento);
- **sobreamortiguado** ($c^2 > 4mk$): vuelve sin oscilar, más despacio.

**Ejemplo resuelto 4.** $y'' + 2y' + 5y = 0$, $y(0) = 1$, $y'(0) = 0$: $r = -1 \pm 2i$, $y = e^{-t}(C_1\cos 2t + C_2\sin 2t)$; $y(0) = 1$ da
$C_1 = 1$, y $y'(0) = -C_1 + 2C_2 = 0$ da $C_2 = \tfrac12$. Oscila con periodo $\pi$ y amplitud que se divide por $e$ cada unidad de tiempo.
El circuito RLC serie de [[ing-circuitos-dc-ac]] es exactamente esta ecuación con $L$, $R$ y $1/C$ en lugar de $m$, $c$ y $k$.

## 5. Ecuaciones no homogéneas y resonancia

Para $ay'' + by' + cy = g(t)$, la solución general es la de la homogénea más **una** solución particular $y_p$. Si $g$ es un polinomio,
una exponencial, un seno o un coseno, $y_p$ tiene la misma forma con coeficientes por determinar (**coeficientes indeterminados**); si esa
forma ya es solución de la homogénea, se multiplica por $t$.

**Ejemplo resuelto 5.** $y'' + y = 2\cos 3t$: se prueba $y_p = A\cos 3t$, que da $-9A + A = 2$, $A = -\tfrac14$. Con $y(0) = y'(0) = 0$:
$y = \tfrac14\cos t - \tfrac14\cos 3t$.

**Resonancia.** Si la fuerza tiene **la frecuencia natural** del sistema sin rozamiento, $y'' + \omega^2y = \cos\omega t$, la forma
$A\cos\omega t$ ya es solución homogénea y hay que probar $t(A\cos\omega t + B\sin\omega t)$: sale $y_p = \frac{t}{2\omega}\sin\omega t$, cuya
amplitud **crece sin límite**. Con rozamiento la amplitud se queda acotada, pero es máxima cerca de $\omega_0$. Es la razón por la que la
tropa rompe el paso al cruzar un puente, y el principio de la sintonía de una radio.

## 6. Sistemas lineales y plano de fases

Toda ecuación de orden $n$ equivale a un sistema de primer orden: $y'' = -2y - 3y'$ es $x_1 = y$, $x_2 = y'$, $x_1' = x_2$,
$x_2' = -2x_1 - 3x_2$. Para $\mathbf x' = A\mathbf x$ se prueban soluciones $\mathbf x = e^{\lambda t}\mathbf v$: sustituyendo, $A\mathbf v = \lambda\mathbf v$.
Así, si $A$ tiene autovalores distintos $\lambda_1, \lambda_2$ con autovectores $\mathbf v_1, \mathbf v_2$,

$$
\mathbf x(t) = C_1 e^{\lambda_1 t}\mathbf v_1 + C_2 e^{\lambda_2 t}\mathbf v_2 .
$$

El comportamiento cerca del equilibrio $\mathbf 0$ depende de los autovalores, que en $2\times2$ se leen en la **traza** $\tau$ y el
**determinante** $\Delta$ ($\lambda^2 - \tau\lambda + \Delta = 0$):

| Condición | Tipo de equilibrio |
|---|---|
| $\Delta < 0$ | punto de silla (inestable) |
| $\Delta > 0$, $\tau^2 > 4\Delta$ | nodo: estable si $\tau < 0$, inestable si $\tau > 0$ |
| $\Delta > 0$, $\tau^2 < 4\Delta$ | espiral: estable si $\tau < 0$, inestable si $\tau > 0$ |
| $\Delta > 0$, $\tau = 0$ | centro (órbitas cerradas) |

**Sistemas no lineales.** Cerca de un equilibrio $\mathbf x^*$ de $\mathbf x' = \mathbf F(\mathbf x)$, el sistema se comporta (salvo en los casos
frontera, como el centro) como su **linealización** $\mathbf u' = J_{\mathbf F}(\mathbf x^*)\,\mathbf u$ ([[mat-calculo-multivariable]]). Para el
péndulo $\theta'' = -\frac gL\sin\theta$, el equilibrio hacia abajo es un centro (oscila) y el de arriba un punto de silla (inestable).

## 7. La transformada de Laplace

$\mathcal L\{f\}(s) = \int_0^\infty e^{-st}f(t)\,dt$ convierte derivadas en multiplicaciones:

$$
\mathcal L\{y'\} = sY - y(0), \qquad \mathcal L\{y''\} = s^2Y - s\,y(0) - y'(0),
$$

(se prueba integrando por partes), así que un problema de valor inicial lineal se convierte en una ecuación **algebraica** para $Y(s)$,
con las condiciones iniciales ya incluidas. Tabla mínima: $\mathcal L\{1\} = \frac1s$, $\mathcal L\{e^{at}\} = \frac1{s - a}$,
$\mathcal L\{t\,e^{at}\} = \frac{1}{(s - a)^2}$, $\mathcal L\{\sin\omega t\} = \frac{\omega}{s^2 + \omega^2}$, $\mathcal L\{\cos\omega t\} = \frac{s}{s^2 + \omega^2}$.

**Ejemplo resuelto 6.** $y'' + y = 0$, $y(0) = 0$, $y'(0) = 1$: $s^2Y - 1 + Y = 0$, $Y = \frac{1}{s^2 + 1}$, luego $y = \sin t$. En control e
ingeniería se trabaja directamente con $Y(s)$: la **función de transferencia** ([[ing-senales-sistemas]]).

## 8. Métodos numéricos

Casi ninguna ecuación de la práctica tiene solución exacta. Para $y' = f(t, y)$ con paso $h$:

- **Euler**: $y_{n+1} = y_n + h\,f(t_n, y_n)$ (sigue la tangente). Error global proporcional a $h$: **orden 1**. Dividir el paso entre 2 divide
  el error entre 2.
- **Runge-Kutta 4 (RK4)**: combina cuatro pendientes,
  $k_1 = f(t_n, y_n)$, $k_2 = f(t_n + \tfrac h2, y_n + \tfrac h2k_1)$, $k_3 = f(t_n + \tfrac h2, y_n + \tfrac h2k_2)$, $k_4 = f(t_n + h, y_n + hk_3)$,
  $y_{n+1} = y_n + \tfrac h6(k_1 + 2k_2 + 2k_3 + k_4)$. **Orden 4**: dividir el paso entre 2 divide el error entre unos 16. Para $y' = y$, un paso de
  RK4 multiplica por $1 + h + \frac{h^2}{2} + \frac{h^3}{6} + \frac{h^4}{24}$, el polinomio de Taylor de $e^h$ de grado 4.

Las ecuaciones **rígidas** (con escalas de tiempo muy distintas, como una reacción química rápida dentro de una lenta) obligan a pasos
diminutos con métodos explícitos; se usan métodos implícitos. En Python, `scipy.integrate.solve_ivp` elige el método y el paso
automáticamente.

```python
import math


def euler(f, y, t0, t1, n):
    h = (t1 - t0) / n
    t = t0
    for _ in range(n):
        y = y + h * f(t, y)
        t += h
    return y


def rk4(f, y, t0, t1, n):
    h = (t1 - t0) / n
    t = t0
    for _ in range(n):
        k1 = f(t, y)
        k2 = f(t + h / 2, y + h / 2 * k1)
        k3 = f(t + h / 2, y + h / 2 * k2)
        k4 = f(t + h, y + h * k3)
        y += h / 6 * (k1 + 2 * k2 + 2 * k3 + k4)
        t += h
    return y


f = lambda t, y: y                      # y' = y, y(0) = 1, solución e^t
err = lambda metodo, n: abs(metodo(f, 1.0, 0.0, 1.0, n) - math.e)
assert 1.9 < err(euler, 100) / err(euler, 200) < 2.1     # orden 1
assert 15 < err(rk4, 10) / err(rk4, 20) < 17             # orden 4
assert err(rk4, 10) < 3e-6 < err(euler, 1000)            # RK4 con 10 pasos gana a Euler con 1000

# Mezclas (ejemplo resuelto 3): x' = 1 - x/20, x(0) = 10  →  x = 20 - 10 e^{-t/20}
x20 = rk4(lambda t, x: 1 - x / 20, 10.0, 0.0, 20.0, 200)
assert abs(x20 - (20 - 10 / math.e)) < 1e-9
```

## 9. Errores típicos

- Olvidar la constante de integración, o fijarla antes de despejar.
- Perder soluciones al dividir: al separar $y' = y^2$ se divide por $y^2$ y se pierde $y = 0$.
- Calcular el factor integrante sin poner antes la ecuación en la forma $y' + p\,y = q$.
- En raíces complejas, escribir $e^{(\alpha + i\beta)t}$ en lugar de la combinación real con $\cos$ y $\sin$.
- En coeficientes indeterminados, no multiplicar por $t$ cuando la forma probada ya resuelve la homogénea (resonancia).
- Confundir estabilidad (autovalores con parte real negativa) con ausencia de oscilación.
- Confiar en un resultado numérico sin repetirlo con la mitad de paso.

## 10. Resumen

- Orden, solución general y problema de valor inicial; existencia y unicidad si $f$ y $f_y$ son continuas.
- Separables; lineales con $\mu = e^{\int p}$; desintegración, Newton, logística, mezclas.
- $ay'' + by' + cy = 0$: ecuación característica, tres casos; oscilador sub-, crítica y sobreamortiguado.
- Solución particular por coeficientes indeterminados; resonancia $\frac{t}{2\omega}\sin\omega t$.
- $\mathbf x' = A\mathbf x$: autovalores; clasificación por traza y determinante; linealización.
- Laplace: derivadas $\to$ multiplicación por $s$; Euler orden 1, RK4 orden 4.

## Repaso: lo que debe quedarte dentro de un mes

1. $N = N_0e^{-kt}$ y $T_{1/2} = \ln2/k$; la logística y sus dos equilibrios.
2. Factor integrante $e^{\int p}$.
3. Ecuación característica y sus tres casos; amortiguamiento crítico $c^2 = 4mk$.
4. Traza y determinante clasifican el equilibrio de un sistema $2\times2$.
5. Euler pierde precisión con orden 1; RK4, con orden 4: comprueba siempre con la mitad de paso.

## Siguiente

[[fis-mecanica-clasica]] (las ecuaciones del movimiento como EDO), [[ing-senales-sistemas]] y [[rob-control]] (Laplace y estabilidad),
`mat-analisis-numerico` (los métodos numéricos con su análisis de error) y, en las ramas, ecuaciones en derivadas parciales.
