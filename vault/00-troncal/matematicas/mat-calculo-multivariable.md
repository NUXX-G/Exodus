---
id: mat-calculo-multivariable
title: "Cálculo multivariable: derivadas parciales, optimización, integrales múltiples y cálculo vectorial"
area: matematicas
trunk_level: 10
prerequisites: [mat-calculo-2, mat-algebra-lineal-1]
academic_sources:
  - "Marsden, J. E.; Tromba, A. J. Vector Calculus, 6ª ed. W. H. Freeman, 2012."
  - "Apostol, T. M. Calculus, Vol. II: Multi-Variable Calculus and Linear Algebra, with Applications to Differential Equations and Probability, 2ª ed. Wiley, 1969."
  - "MIT OpenCourseWare. 18.02 Multivariable Calculus, otoño de 2007 (Auroux): apuntes, problemas y vídeos gratuitos."
  - "Stewart, J. Calculus: Early Transcendentals. Cengage Learning (varias ediciones), capítulos de cálculo multivariable."
hints:
  - "Concepto: una derivada parcial es una derivada ordinaria con las demás variables congeladas; el gradiente reúne todas y apunta hacia donde la función crece más deprisa; en una integral múltiple, elige las coordenadas en que la región es un rectángulo y no olvides el jacobiano (r en polares, ρ² sen φ en esféricas). En cálculo vectorial, antes de parametrizar mira si el campo es conservativo o si un teorema (Green, divergencia) convierte el problema en otro más fácil."
  - "Herramienta: comprueba cada derivada con una diferencia centrada (f(x+h) − f(x−h))/2h con h ≈ 1e-5, cada integral con una suma de Simpson en Python, y los extremos evaluando la función en una rejilla alrededor del punto. sympy (diff, integrate, hessian) hace el cálculo simbólico para contrastar."
  - "Documentación: MIT OCW 18.02 (ocw.mit.edu), con apuntes de cada lección; Marsden y Tromba, capítulos de diferenciación, extremos, integrales múltiples, cambio de variables e integrales de línea y de superficie; docs.sympy.org (calculus) y docs.scipy.org (integrate.dblquad, tplquad)."
exercises:
  - id: derivada-parcial
    tier: 1
    prompt: |
      Sea $f(x, y) = x^2 y + 3xy^3$. Calcula $\dfrac{\partial f}{\partial x}(1, 2)$. Respuesta: un número.
    answers: ["sha256:59e19706d51d39f66711c2653cd7eb1291c94d9b55eb14bda74ce4dc636d015a"]
  - id: modulo-del-gradiente
    tier: 1
    prompt: |
      Sea $f(x, y, z) = x^2 + y^2 + z^2$. ¿Cuánto vale $\lVert \nabla f(1, 2, 2) \rVert$? Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: derivada-direccional
    tier: 1
    prompt: |
      Sea $f(x, y) = x^2 y$. Calcula la derivada direccional de $f$ en $(1, 3)$ en la dirección del vector $(3, 4)$ (normalízalo). Respuesta: un número.
    answers: ["sha256:9e6dccf291cf48fa7e7688b7529a724d6010362ea92dd8e852530f7c23830a20"]
  - id: integral-doble-en-rectangulo
    tier: 1
    prompt: |
      Calcula $\displaystyle\int_0^1\!\!\int_0^2 (x + y^2)\,dy\,dx$. Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:21c926feec30f7bab1f796f9f40952656a513d529d6a05c7f85d642bf2be23af"]
  - id: plano-tangente
    tier: 2
    prompt: |
      Sea $f(x, y) = x^2 + xy$. Usa el plano tangente a la gráfica en $(1, 2)$ para aproximar $f(1{,}1;\ 1{,}9)$. Respuesta: un número.
    answers: ["sha256:8c92bebd740430af1b95f3b0deb80df3b03cc6f9d8417b1dffb75d5c37c707b5"]
  - id: regla-de-la-cadena
    tier: 2
    prompt: |
      Sea $z = x^2 y$ con $x = \cos t$, $y = \sin t$. Calcula $\dfrac{dz}{dt}$ en $t = \pi/3$. Respuesta: un número (decimal exacto).
    answers: ["sha256:aa8a3248bd8f863146902786d8bef307af7576a3cd409fb519f41f815d30d79b"]
  - id: clasificar-puntos-criticos
    tier: 2
    prompt: |
      Sea $f(x, y) = x^3 - 3x + y^2$. Halla sus puntos críticos y clasifícalos con el criterio del hessiano. ¿Cuánto vale $f$ en su **mínimo local** y cuántos **puntos de silla** tiene? Respuesta: los dos números separados por `;`.
    answers: ["sha256:3cb7b0b08aed44f0f57bec2249989d5f85f71d1425e448de63bef9a593fd1afc"]
  - id: multiplicadores-de-lagrange
    tier: 2
    prompt: |
      Halla el valor **máximo** de $f(x, y) = xy$ sobre la recta $x + 2y = 10$ (con $x, y > 0$), usando multiplicadores de Lagrange. Respuesta: un número.
    answers: ["sha256:b902cc4550838229a710bfec4c38cbc7eb11082367a409df9135e7f007a96bda"]
  - id: integral-en-polares
    tier: 2
    prompt: |
      Calcula $\displaystyle\iint_{x^2 + y^2 \le 4} e^{-(x^2 + y^2)}\,dA$ pasando a coordenadas polares. Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:0e7b34cbf8c370ca04b8f608d87da8e5341da2cc68169b3d4f014c6f7e9c4ba0"]
  - id: cambio-de-variables-lineal
    tier: 2
    prompt: |
      Sea $R$ la región $0 \le x + y \le 2$, $0 \le x - y \le 2$. Calcula $\displaystyle\iint_R (x + y)\,dA$ con el cambio $u = (x + y)/2$, $v = (x - y)/2$ (calcula el jacobiano). Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: aproximacion-de-segundo-orden
    tier: 2
    prompt: |
      Escribe el polinomio de Taylor de **segundo orden** de $f(x, y) = e^x \cos y$ en $(0, 0)$ y úsalo para aproximar $f(0{,}1;\ 0{,}2)$. Respuesta: un número (decimal exacto).
    answers: ["sha256:098c161e60ca5bcc94fd81349b533fad446b0132f7270cc8cba663dfea1cdc8b"]
  - id: volumen-en-esfericas
    tier: 3
    prompt: |
      Calcula el volumen del sólido que está dentro de la esfera $x^2 + y^2 + z^2 \le 4$ y por encima del cono $z = \sqrt{x^2 + y^2}$ (en esféricas, $\rho \le 2$ y $\varphi \le \pi/4$). Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:25449e0b7923faee60ebeef6a4fc921b5bfe3aababec651cfaa0a979d7cdc4a7"]
  - id: integral-de-linea
    tier: 3
    prompt: |
      Calcula $\displaystyle\int_C \mathbf F \cdot d\mathbf r$ para $\mathbf F(x, y) = (y, x^2)$ a lo largo de la parábola $y = x^2$ desde $(0, 0)$ hasta $(1, 1)$. Respuesta: una fracción irreducible `a/b`.
    answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
  - id: campo-conservativo
    tier: 3
    prompt: |
      Comprueba que $\mathbf F = (2xy + z,\ x^2,\ x)$ es conservativo, halla un potencial y calcula el trabajo $\int_C \mathbf F\cdot d\mathbf r$ a lo largo de **cualquier** camino de $(0, 0, 0)$ a $(1, 2, 3)$. Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: teorema-de-green
    tier: 3
    prompt: |
      Usa el teorema de Green para calcular $\displaystyle\oint_C (-y^3\,dx + x^3\,dy)$, donde $C$ es la circunferencia unidad recorrida en sentido antihorario. Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:b03b1920974a55e75af90a47861a52760c18134567404cf27d81cac8a371e990"]
  - id: teorema-de-la-divergencia
    tier: 3
    prompt: |
      Calcula el flujo del campo $\mathbf F = (x, y, z)$ hacia fuera de la esfera $x^2 + y^2 + z^2 = 4$ con el teorema de la divergencia. Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:9e969855c43cd48fe0ac6611cbbc3f91e2e52f048ded9022371170e7decf4e62"]
---

# Cálculo multivariable: derivadas parciales, optimización, integrales múltiples y cálculo vectorial

El mundo rara vez depende de una sola variable: la temperatura depende de la posición y del tiempo, el beneficio de una empresa
de varios precios, el error de una red neuronal de millones de pesos. Este nodo extiende el cálculo de [[mat-calculo-1]] y
[[mat-calculo-2]] a funciones de varias variables: cómo cambian (derivadas parciales, gradiente, jacobiano), dónde alcanzan sus
extremos (hessiano, multiplicadores de Lagrange), cómo se acumulan sobre regiones del plano y del espacio (integrales múltiples y
cambio de variables) y cómo se comportan los campos vectoriales (trabajo, flujo, teoremas de Green, Stokes y Gauss). Es el
lenguaje de la física de campos, de la ingeniería y del aprendizaje automático.

## Objetivos

Al terminar sabrás:

1. Calcular derivadas parciales, gradientes, derivadas direccionales y jacobianos, y aplicar la regla de la cadena en forma matricial.
2. Escribir el plano tangente y el polinomio de Taylor de segundo orden de una función de dos variables.
3. Encontrar y clasificar extremos con el hessiano, y resolver problemas con restricciones mediante multiplicadores de Lagrange.
4. Calcular integrales dobles y triples con Fubini y cambiar a coordenadas polares, cilíndricas y esféricas con el jacobiano.
5. Calcular integrales de línea, reconocer campos conservativos y hallar su potencial.
6. Aplicar los teoremas de Green, de la divergencia y de Stokes.

## Qué debes dominar antes

[[mat-calculo-2]] (integrales, sustitución, series de Taylor), [[mat-algebra-lineal-1]] (vectores, matrices, determinantes) y
[[mat-geometria-analitica]] (rectas, planos, producto escalar y vectorial).

> [!question] Test de entrada
> 1. Deriva $g(t) = e^{3t}\sin t$.
> 2. ¿Cuánto vale el determinante de $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$?
> 3. Calcula $\int_0^1 x e^{x^2}\,dx$.
>
> Respuestas: $e^{3t}(3\sin t + \cos t)$; $3$; $\tfrac{e - 1}{2}$.

## 1. Para qué sirve

- **Aprendizaje automático**: entrenar un modelo es minimizar una función de muchas variables siguiendo el **gradiente** en sentido
  contrario ([[ia-aprendizaje-estadistico]], [[ia-redes-profundas]]).
- **Física e ingeniería**: el campo eléctrico es menos el gradiente del potencial; la ley de Gauss y la de Ampère de
  [[fis-electricidad-magnetismo-1]] son los teoremas de la divergencia y de Stokes; la masa, el centro de masas y los momentos de
  inercia son integrales múltiples.
- **Economía y logística**: maximizar beneficio o minimizar coste con un presupuesto o una capacidad fijos es un problema de Lagrange.
- **Probabilidad**: la densidad conjunta de varias variables se integra sobre regiones; la integral de Gauss
  $\int e^{-x^2}dx = \sqrt\pi$ se demuestra con polares (sección 6).

## 2. Funciones de varias variables

Una función $f: \mathbb R^n \to \mathbb R$ asigna un número a cada punto $(x_1, \dots, x_n)$. Para $n = 2$ se visualiza con su gráfica
$z = f(x, y)$ (una superficie) o con sus **curvas de nivel** $f(x, y) = c$ (como las isobaras de un mapa del tiempo). Una función
$\mathbf F: \mathbb R^n \to \mathbb R^m$ (varias salidas) es un **campo vectorial** si $m = n$.

**Límites.** $\lim_{(x,y)\to(a,b)} f = L$ significa que $f$ se acerca a $L$ por **cualquier** camino. Para probar que un límite no
existe basta con dos caminos que den valores distintos: $f(x, y) = \frac{xy}{x^2 + y^2}$ vale $0$ sobre los ejes y $\tfrac12$ sobre la
recta $y = x$, así que no tiene límite en el origen (aunque sus restricciones a cada eje sean continuas).

## 3. Derivadas parciales, gradiente y derivada direccional

La **derivada parcial** $\frac{\partial f}{\partial x}$ (o $f_x$) es la derivada respecto a $x$ tratando las demás variables como
constantes. El **gradiente** las reúne en un vector:

$$
\nabla f = \left(\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n}\right).
$$

La **derivada direccional** en la dirección del vector **unitario** $\mathbf u$ mide el ritmo de cambio al moverse según $\mathbf u$:
$D_{\mathbf u} f(\mathbf a) = \lim_{t\to0} \frac{f(\mathbf a + t\mathbf u) - f(\mathbf a)}{t}$.

**Teorema.** Si $f$ es diferenciable en $\mathbf a$, entonces $D_{\mathbf u} f(\mathbf a) = \nabla f(\mathbf a)\cdot\mathbf u$.

*Demostración.* $g(t) = f(\mathbf a + t\mathbf u)$ es la composición de $f$ con la recta $t \mapsto \mathbf a + t\mathbf u$; por la regla de
la cadena (sección 4), $g'(0) = \nabla f(\mathbf a)\cdot\mathbf u$, y $g'(0)$ es justamente la derivada direccional. $\blacksquare$

Consecuencias, por la desigualdad de Cauchy-Schwarz ($\nabla f\cdot\mathbf u \le \lVert\nabla f\rVert$, con igualdad si $\mathbf u$
apunta como $\nabla f$):

- el gradiente apunta en la dirección de **máximo crecimiento**, y su módulo es esa tasa máxima;
- el gradiente es **perpendicular a las curvas de nivel** (a lo largo de ellas $f$ no cambia: $D_{\mathbf u}f = 0$).

**Ejemplo resuelto 1.** $f(x, y) = x^2 + 3y^2$ en $(1, 1)$: $\nabla f = (2x, 6y) = (2, 6)$. La tasa máxima de crecimiento es
$\lVert(2, 6)\rVert = \sqrt{40} = 2\sqrt{10}$, hacia $(2, 6)/\sqrt{40}$. En la dirección $\mathbf u = (1, 0)$ la derivada es $2$; en la
dirección $(3, -1)/\sqrt{10}$, tangente a la elipse de nivel, es $(6 - 6)/\sqrt{10} = 0$.

## 4. Diferenciabilidad, plano tangente y regla de la cadena

$f$ es **diferenciable** en $\mathbf a$ si se aproxima bien por una función lineal:

$$
f(\mathbf a + \mathbf h) = f(\mathbf a) + \nabla f(\mathbf a)\cdot\mathbf h + o(\lVert\mathbf h\rVert).
$$

(Si las parciales existen y son continuas cerca de $\mathbf a$, $f$ es diferenciable; la mera existencia de las parciales no basta: el
ejemplo $xy/(x^2 + y^2)$ las tiene en el origen y ni siquiera es continua.) La gráfica tiene entonces **plano tangente**

$$
z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b),
$$

y esa misma fórmula es la **linealización**, que aproxima $f$ cerca de $(a, b)$.

Para $\mathbf F: \mathbb R^n \to \mathbb R^m$ la derivada es la **matriz jacobiana** $J_{\mathbf F}$ ($m \times n$, con
$\partial F_i/\partial x_j$ en la fila $i$ y la columna $j$). **Regla de la cadena:** la derivada de una composición es el
**producto** de las jacobianas,

$$
J_{\mathbf G\circ\mathbf F}(\mathbf a) = J_{\mathbf G}(\mathbf F(\mathbf a))\,J_{\mathbf F}(\mathbf a).
$$

En el caso más usado, si $z = f(x, y)$ con $x = x(t)$, $y = y(t)$: $\dfrac{dz}{dt} = f_x\,x'(t) + f_y\,y'(t)$.

**Ejemplo resuelto 2.** $z = x^2y$, $x = e^t$, $y = t^2$: $\frac{dz}{dt} = 2xy\cdot e^t + x^2\cdot 2t = 2e^{2t}t^2 + 2te^{2t}$. Comprobación
directa: $z = e^{2t}t^2$ y $z' = 2e^{2t}t^2 + 2te^{2t}$. $\checkmark$ Esta regla, aplicada capa tras capa, es la **retropropagación** con la
que se entrenan las redes neuronales.

## 5. Extremos

**Derivadas segundas.** Si las parciales segundas son continuas, el orden no importa (**teorema de Schwarz**): $f_{xy} = f_{yx}$.
La **matriz hessiana** $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy}\end{pmatrix}$ da el **polinomio de Taylor de segundo orden**:

$$
f(\mathbf a + \mathbf h) \approx f(\mathbf a) + \nabla f(\mathbf a)\cdot\mathbf h + \tfrac12\,\mathbf h^{\mathsf T} H(\mathbf a)\,\mathbf h .
$$

**Puntos críticos.** En un extremo local interior, $\nabla f = \mathbf 0$ (si no, moverse según $\pm\nabla f$ subiría o bajaría). En un
punto crítico, el término cuadrático decide (**criterio del hessiano** en dos variables, con $D = f_{xx}f_{yy} - f_{xy}^2$):

- $D > 0$ y $f_{xx} > 0$: **mínimo** local; $D > 0$ y $f_{xx} < 0$: **máximo** local;
- $D < 0$: **punto de silla** (sube en unas direcciones y baja en otras);
- $D = 0$: el criterio no decide.

(En general, mínimo si $H$ es definida positiva, es decir, si todos sus autovalores son positivos: [[mat-algebra-lineal-1]].)

**Ejemplo resuelto 3.** $f(x, y) = x^2 + xy + y^2 - 3x$. $\nabla f = (2x + y - 3,\ x + 2y) = \mathbf 0$ da $x = 2$, $y = -1$. $H$ es constante,
con $D = 2\cdot2 - 1 = 3 > 0$ y $f_{xx} = 2 > 0$: mínimo, de valor $f(2, -1) = 4 - 2 + 1 - 6 = -3$. En un dominio cerrado y acotado, los
extremos **absolutos** se buscan entre los puntos críticos interiores y los de la frontera.

**Multiplicadores de Lagrange.** Para optimizar $f$ sujeta a $g(x, y) = c$: en el óptimo, la curva de nivel de $f$ es tangente a la
restricción, así que sus normales son paralelas,

$$
\nabla f = \lambda\,\nabla g, \qquad g = c .
$$

El multiplicador $\lambda$ mide cuánto cambia el óptimo si se relaja la restricción (el «precio sombra» en economía).

**Ejemplo resuelto 4.** Punto de la recta $x + y = 2$ más cercano al origen: se minimiza $f = x^2 + y^2$ con $g = x + y$.
$(2x, 2y) = \lambda(1, 1)$ da $x = y$, y la restricción $x = y = 1$: distancia $\sqrt2$ (la de la fórmula punto-recta
$\lvert 0 + 0 - 2\rvert/\sqrt2$). $\checkmark$

## 6. Integrales múltiples

La **integral doble** $\iint_R f\,dA$ es el límite de sumas de $f(\text{punto})\cdot\text{área}$ sobre una partición de $R$ en
rectángulos; si $f \ge 0$ es el volumen bajo la gráfica. Se calcula como **integrales iteradas** (teorema de **Fubini**, válido para $f$
continua en una región acotada razonable):

$$
\iint_{[a,b]\times[c,d]} f\,dA = \int_a^b\!\!\int_c^d f(x, y)\,dy\,dx = \int_c^d\!\!\int_a^b f(x, y)\,dx\,dy .
$$

Si la región no es un rectángulo, los límites interiores dependen de la variable exterior: para $D = \{0 \le x \le 1,\ x^2 \le y \le x\}$,
$\iint_D f = \int_0^1\int_{x^2}^{x} f\,dy\,dx$. A veces conviene **cambiar el orden** de integración para que la integral interior se pueda
calcular.

**Cambio de variables.** Si $(x, y) = T(u, v)$ es una transformación biyectiva y diferenciable de una región $S$ en $R$,

$$
\iint_R f(x, y)\,dx\,dy = \iint_S f(T(u, v))\,\bigl\lvert\det J_T(u, v)\bigr\rvert\,du\,dv ,
$$

porque un rectángulo diminuto $du\,dv$ se transforma en un paralelogramo de área $\lvert\det J_T\rvert\,du\,dv$ (el determinante mide
cómo una aplicación lineal escala las áreas).

- **Polares** $x = r\cos\theta$, $y = r\sin\theta$: $dA = r\,dr\,d\theta$.
- **Cilíndricas** (polares más $z$): $dV = r\,dr\,d\theta\,dz$.
- **Esféricas** $x = \rho\sin\varphi\cos\theta$, $y = \rho\sin\varphi\sin\theta$, $z = \rho\cos\varphi$ ($\varphi$ medido desde el eje $z$):
  $dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$.

**Ejemplo resuelto 5: la integral de Gauss.** Sea $I = \int_{-\infty}^{\infty} e^{-x^2}dx$. Entonces

$$
I^2 = \iint_{\mathbb R^2} e^{-(x^2 + y^2)}\,dA = \int_0^{2\pi}\!\!\int_0^\infty e^{-r^2}\,r\,dr\,d\theta = 2\pi\cdot\tfrac12 = \pi ,
$$

luego $I = \sqrt\pi$. Ninguna primitiva elemental de $e^{-x^2}$ existe; el cambio a polares, gracias al factor $r$, hace la integral
inmediata. Es la constante de normalización de la distribución normal ([[mat-probabilidad]]).

**Ejemplo resuelto 6: centro de masas.** Semidisco $x^2 + y^2 \le R^2$, $y \ge 0$, de densidad uniforme. Por simetría $\bar x = 0$, y
$\bar y = \frac{1}{\text{área}}\iint y\,dA = \frac{2}{\pi R^2}\int_0^\pi\int_0^R r\sin\theta\cdot r\,dr\,d\theta = \frac{2}{\pi R^2}\cdot\frac{R^3}{3}\cdot2 = \frac{4R}{3\pi}$.

## 7. Cálculo vectorial

**Integral de línea.** El **trabajo** de un campo $\mathbf F$ a lo largo de una curva $C$ parametrizada por $\mathbf r(t)$, $a \le t \le b$, es

$$
\int_C \mathbf F\cdot d\mathbf r = \int_a^b \mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt ,
$$

y no depende de la parametrización elegida (sí del sentido de recorrido: invertirlo cambia el signo).

**Campos conservativos.** $\mathbf F$ es **conservativo** si $\mathbf F = \nabla\varphi$ para un **potencial** $\varphi$. Entonces, por la
regla de la cadena y el teorema fundamental del cálculo,

$$
\int_C \nabla\varphi\cdot d\mathbf r = \varphi(\mathbf r(b)) - \varphi(\mathbf r(a)),
$$

que solo depende de los extremos (el trabajo de la gravedad o de un campo electrostático), y es nulo sobre curvas cerradas. En una región
sin agujeros, $\mathbf F = (P, Q)$ es conservativo si y solo si $P_y = Q_x$ (en tres dimensiones, si su **rotacional** es nulo). El potencial
se halla integrando: de $\varphi_x = P$ se obtiene $\varphi$ salvo una función de las demás variables, que se ajusta con las otras componentes.

**Divergencia y rotacional.** Para $\mathbf F = (P, Q, R)$: $\operatorname{div}\mathbf F = \nabla\cdot\mathbf F = P_x + Q_y + R_z$ (cuánto
«brota» el campo de cada punto) y $\operatorname{rot}\mathbf F = \nabla\times\mathbf F$ (cuánto «gira»).

**Teorema de Green.** Si $C$ es la frontera de una región $D$ del plano, recorrida en sentido antihorario,

$$
\oint_C P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA .
$$

Con $P = -y/2$, $Q = x/2$ el integrando vale $1$: el área de $D$ es $\frac12\oint_C x\,dy - y\,dx$ (así mide áreas un planímetro).

**Teorema de la divergencia (Gauss).** Para una región sólida $V$ con superficie frontera $S$ orientada hacia fuera,
$\displaystyle\iint_S \mathbf F\cdot\mathbf n\,dS = \iiint_V \operatorname{div}\mathbf F\,dV$: el flujo que sale es lo que brota dentro.

**Teorema de Stokes.** Para una superficie $S$ con borde $C$ (orientados de forma compatible),
$\displaystyle\oint_C \mathbf F\cdot d\mathbf r = \iint_S (\nabla\times\mathbf F)\cdot\mathbf n\,dS$.

Los tres son la misma idea que el teorema fundamental del cálculo: integrar una derivada sobre una región equivale a evaluar en su
frontera. Aplicados a los campos eléctrico y magnético dan las formas integrales de las ecuaciones de Maxwell.

## 8. Comprobar con un programa

```python
import math


def simpson(f, a, b, n=2000):
    h = (b - a) / n
    return h / 3 * (f(a) + f(b) + sum(f(a + i * h) * (4 if i % 2 else 2) for i in range(1, n)))


# Integral de Gauss: ∫ e^(-x²) en [-8, 8] ≈ √π (las colas fuera son despreciables).
assert abs(simpson(lambda x: math.exp(-x * x), -8, 8) - math.sqrt(math.pi)) < 1e-9

# Centro de masas del semidisco de radio 1: ȳ = 4/(3π), con integrales iteradas en cartesianas.
area = simpson(lambda x: math.sqrt(1 - x * x), -1, 1, 20000)
momento = simpson(lambda x: (1 - x * x) / 2, -1, 1)          # ∫ (∫_0^√(1-x²) y dy) dx
assert abs(area - math.pi / 2) < 1e-5 and abs(momento / area - 4 / (3 * math.pi)) < 1e-5

# Gradiente numérico frente al analítico de f = x² + 3y² en (1, 1).
f = lambda x, y: x * x + 3 * y * y
h = 1e-6
grad = ((f(1 + h, 1) - f(1 - h, 1)) / (2 * h), (f(1, 1 + h) - f(1, 1 - h)) / (2 * h))
assert abs(grad[0] - 2) < 1e-6 and abs(grad[1] - 6) < 1e-6
```

## 9. Errores típicos

- Usar un vector **no unitario** en la derivada direccional.
- Concluir que una función es diferenciable porque existen sus parciales.
- Olvidar el **jacobiano** al cambiar de variables (el $r$ de las polares, el $\rho^2\sin\varphi$ de las esféricas).
- Poner límites constantes en una región que no es un rectángulo, o confundir el orden de los límites al cambiar el orden de integración.
- Aplicar el criterio del hessiano sin comprobar antes que el gradiente se anula, o darlo por concluyente cuando $D = 0$.
- Olvidar la frontera al buscar extremos absolutos en un dominio cerrado.
- Recorrer la curva de Green en sentido horario (cambia el signo) o aplicar «rotacional nulo $\Rightarrow$ conservativo» en una región con agujeros.

## 10. Resumen

- $\nabla f$: dirección de máximo crecimiento, perpendicular a las curvas de nivel; $D_{\mathbf u} f = \nabla f\cdot\mathbf u$.
- Diferenciable: plano tangente; jacobiana; regla de la cadena = producto de jacobianas.
- Extremos: $\nabla f = 0$ y hessiano ($D > 0$, signo de $f_{xx}$; $D < 0$ silla); Lagrange: $\nabla f = \lambda\nabla g$.
- Fubini; cambio de variables con $\lvert\det J\rvert$: $r$, $r$, $\rho^2\sin\varphi$; $\int e^{-x^2} = \sqrt\pi$.
- Integral de línea; conservativo $\Leftrightarrow$ potencial $\Leftrightarrow$ independencia del camino; Green, Gauss y Stokes.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se calcula y qué significa el gradiente; derivada direccional con vector unitario.
2. Criterio del hessiano en dos variables y multiplicadores de Lagrange.
3. $dA = r\,dr\,d\theta$ y $dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$.
4. Campo conservativo: el trabajo es la diferencia de potencial.
5. Green, divergencia y Stokes: la integral de una derivada sobre una región es una integral sobre su frontera.

## Siguiente

[[mat-analisis-real]] (las demostraciones rigurosas de límites y diferenciabilidad), `mat-ecuaciones-diferenciales` y, en física,
[[fis-mecanica-clasica]] y [[fis-electromagnetismo]], que usan este lenguaje en cada página.
