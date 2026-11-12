---
id: fis-mecanica-clasica
title: "Mecánica clásica"
area: fisica
trunk_level: 11
prerequisites: [fis-fuerzas-energia, mat-calculo-multivariable, mat-algebra-lineal]
academic_sources:
  - "Goldstein, H.; Poole, C.; Safko, J. Classical Mechanics, 3ª ed. Addison-Wesley, 2002."
  - "Landau, L. D.; Lifshitz, E. M. Mechanics (Course of Theoretical Physics, Vol. 1), 3ª ed. Butterworth-Heinemann, 1976."
  - "Taylor, J. R. Classical Mechanics. University Science Books, 2005."
  - "Arnold, V. I. Mathematical Methods of Classical Mechanics, 2ª ed. Springer, 1989."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, Vol. I. Addison-Wesley, 1963."
ctf_flag: "sha256:a7b948b4c2e124a6154c2e21d714878808074f387a59e9166794eb01deb0e354"
hints:
  - "(a) La conservación de la energía convierte el periodo en una integral; no uses la aproximación de ángulo pequeño, que es justo lo que el apartado mide. (b) La ecuación de Kepler es trascendente: se resuelve iterando, y con excentricidad alta la elección del punto inicial importa. (c) Linealiza las ecuaciones de Lagrange alrededor del equilibrio: obtienes un problema de autovalores 2×2."
  - "(a) La integral es una integral elíptica completa de primera especie: scipy.special.ellipk(m) con m = sin²(θ₀/2), o la media aritmético-geométrica, que converge cuadráticamente en media docena de pasos. (b) Newton-Raphson desde E₀ = π, o scipy.optimize.brentq sobre [0, π]. (c) numpy.linalg.eigvals o la fórmula de la ecuación de segundo grado. Trabaja con al menos 12 cifras."
  - "Landau & Lifshitz, §11 (periodo exacto del péndulo), §15 (problema de Kepler) y §23 (pequeñas oscilaciones con varios grados de libertad). Goldstein, §3.8 (ecuación de Kepler) y cap. 6. Documentación: docs.scipy.org, scipy.special.ellipk — atención a que su argumento es m = k², no k."
---

# Mecánica clásica

La mecánica clásica es el prototipo de toda teoría física: un estado, una ley de evolución y
unas cantidades conservadas. Su reformulación por Lagrange y Hamilton no añade física a Newton,
pero sí la estructura matemática sobre la que se construyen la mecánica cuántica, la teoría de
campos y el control de robots.

## 1. Newton

En un sistema de referencia inercial, una partícula de masa $m$ sometida a una fuerza
$\mathbf{F}$ cumple

$$
m\,\ddot{\mathbf{r}} = \mathbf{F}(\mathbf{r}, \dot{\mathbf{r}}, t).
$$

Es una ecuación diferencial de segundo orden: el estado es el par
$(\mathbf{r}, \dot{\mathbf{r}})$ y, dado en un instante, la trayectoria queda determinada.

Una fuerza es **conservativa** si $\mathbf{F} = -\nabla V$ para alguna energía potencial
$V(\mathbf{r})$.

**Teorema (conservación de la energía).** Bajo una fuerza conservativa, $E = \frac12 m
|\dot{\mathbf{r}}|^2 + V(\mathbf{r})$ es constante.

*Demostración.* $\dot E = m\,\dot{\mathbf{r}} \cdot \ddot{\mathbf{r}} + \nabla V \cdot
\dot{\mathbf{r}} = \dot{\mathbf{r}} \cdot (\mathbf{F} + \nabla V) = 0$. $\blacksquare$

## 2. El principio de mínima acción

Se describe la configuración del sistema con **coordenadas generalizadas** $q_1, \dots, q_n$,
tantas como grados de libertad, elegidas para que las ligaduras se cumplan automáticamente. El
**lagrangiano** es $L(q, \dot q, t) = T - V$ y la **acción** de una trayectoria,

$$
S[q] = \int_{t_1}^{t_2} L(q, \dot q, t)\, dt .
$$

**Principio de Hamilton.** La trayectoria real entre dos configuraciones fijas hace estacionaria
la acción: $\delta S = 0$.

**Teorema (ecuaciones de Euler-Lagrange).** $S$ es estacionaria si y solo si

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot q_i} - \frac{\partial L}{\partial q_i} = 0
\qquad (i = 1, \dots, n).
$$

*Demostración.* Sea $q(t) + \varepsilon\,\eta(t)$ una variación con $\eta(t_1) = \eta(t_2) = 0$.
Derivando bajo la integral,
$\frac{dS}{d\varepsilon}\big|_0 = \int \bigl(\frac{\partial L}{\partial q}\eta + \frac{\partial
L}{\partial \dot q}\dot\eta\bigr)dt$. Integrando por partes el segundo término, y como los
términos de contorno se anulan,
$\int \bigl(\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot
q}\bigr)\eta\, dt = 0$ para toda $\eta$, lo que obliga a que el paréntesis sea nulo (lema
fundamental del cálculo de variaciones). $\blacksquare$

Para una partícula con $L = \frac12 m \dot x^2 - V(x)$ se recupera $m\ddot x = -V'(x)$. La
ventaja es que las ecuaciones tienen **la misma forma en cualquier sistema de coordenadas** y
las fuerzas de ligadura no aparecen.

## 3. Simetrías y leyes de conservación

Si $L$ no depende de una coordenada $q_i$ (coordenada **cíclica**), su momento conjugado
$p_i = \partial L / \partial \dot q_i$ se conserva: es inmediato de Euler-Lagrange.

**Teorema (Noether).** A cada simetría continua del lagrangiano le corresponde una cantidad
conservada.

| Simetría | Cantidad conservada |
|---|---|
| Traslación en el espacio | Momento lineal |
| Rotación | Momento angular |
| Traslación en el tiempo | Energía |

## 4. El péndulo: más allá del ángulo pequeño

Para un péndulo de longitud $\ell$, con $\theta$ el ángulo respecto a la vertical,
$L = \frac12 m \ell^2 \dot\theta^2 + m g \ell \cos\theta$ y

$$
\ddot\theta + \frac{g}{\ell} \sin\theta = 0 .
$$

Con $\sin\theta \approx \theta$ resulta un oscilador armónico de periodo
$T_0 = 2\pi\sqrt{\ell/g}$, independiente de la amplitud. El resultado exacto sale de la
conservación de la energía. Soltando desde $\theta_0$ en reposo,
$\frac12 \ell^2 \dot\theta^2 = g\ell(\cos\theta - \cos\theta_0)$, y por tanto

$$
T = 4\sqrt{\frac{\ell}{2g}} \int_0^{\theta_0} \frac{d\theta}{\sqrt{\cos\theta - \cos\theta_0}}
= 4\sqrt{\frac{\ell}{g}}\; K(k), \qquad k = \sin\frac{\theta_0}{2},
$$

donde, tras el cambio $\sin(\theta/2) = k \sin\varphi$, aparece la **integral elíptica completa
de primera especie**

$$
K(k) = \int_0^{\pi/2} \frac{d\varphi}{\sqrt{1 - k^2 \sin^2\varphi}} .
$$

**Teorema (Gauss).** $K(k) = \dfrac{\pi}{2\, \operatorname{AGM}\!\bigl(1, \sqrt{1 - k^2}\bigr)}$,
donde $\operatorname{AGM}(a, b)$ es el límite común de $a_{n+1} = \frac{a_n + b_n}{2}$,
$b_{n+1} = \sqrt{a_n b_n}$.

En consecuencia,

$$
\frac{T}{T_0} = \frac{1}{\operatorname{AGM}\bigl(1, \cos(\theta_0/2)\bigr)} .
$$

Valor de control: para $\theta_0 = 90°$, $T / T_0 = 1{,}180340599\ldots$

## 5. Fuerzas centrales y el problema de Kepler

Bajo una fuerza central se conserva el momento angular $\ell = m r^2 \dot\varphi$, el movimiento
es plano y el problema radial equivale a uno unidimensional con **potencial efectivo**
$V_{\text{ef}}(r) = V(r) + \frac{\ell^2}{2 m r^2}$.

Para $V = -k/r$ las órbitas ligadas son elipses con el centro de fuerzas en un foco (primera ley
de Kepler); el área barrida por unidad de tiempo es constante (segunda, que es la conservación
de $\ell$); y $T^2 \propto a^3$ (tercera).

La posición en función del tiempo no tiene expresión elemental. Con $e$ la excentricidad, $M$ la
**anomalía media** (un ángulo que crece uniformemente con el tiempo, $M = 2\pi t / T$) y $E$ la
**anomalía excéntrica**, se cumple la **ecuación de Kepler**

$$
M = E - e \sin E ,
$$

y la posición es $r = a(1 - e\cos E)$. Hay que despejar $E$ numéricamente. Como
$f(E) = E - e\sin E - M$ es estrictamente creciente para $0 \le e < 1$, la solución es única, y
el método de Newton, $E_{n+1} = E_n - f(E_n)/f'(E_n)$, converge cuadráticamente cerca de ella.

Valor de control: con $e = 0{,}5$ y $M = 1$, $E = 1{,}498701133\ldots$

## 6. Pequeñas oscilaciones

Cerca de un equilibrio estable, el lagrangiano se aproxima a segundo orden:

$$
L \approx \tfrac12\, \dot{\mathbf{q}}^{\mathsf T} M\, \dot{\mathbf{q}} - \tfrac12\, \mathbf{q}^{\mathsf T} K\, \mathbf{q},
$$

con $M$ y $K$ simétricas y $M$ definida positiva. Probando $\mathbf{q} = \mathbf{a}\,
e^{i\omega t}$ resulta el **problema generalizado de autovalores**

$$
\det\bigl(K - \omega^2 M\bigr) = 0 .
$$

Sus soluciones son las **frecuencias normales**, y los autovectores, los **modos normales**, en
los que todas las partes oscilan a la misma frecuencia. El movimiento general es superposición
de modos: el teorema espectral de [[mat-algebra-lineal]] aplicado a la física.

*Ejemplo: péndulo doble* con dos masas iguales $m$ y dos varillas iguales $\ell$. Linealizando,

$$
M = m\ell^2 \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \qquad
K = m g \ell \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}.
$$

## 7. Hamilton

Con los momentos $p_i = \partial L / \partial \dot q_i$ y el **hamiltoniano**
$H(q, p, t) = \sum_i p_i \dot q_i - L$, las ecuaciones del movimiento pasan a ser $2n$ de primer
orden:

$$
\dot q_i = \frac{\partial H}{\partial p_i}, \qquad \dot p_i = -\frac{\partial H}{\partial q_i} .
$$

El estado es un punto del **espacio de fases** $(q, p)$ y la evolución, un flujo en él.

**Teorema (Liouville).** El flujo hamiltoniano conserva el volumen del espacio de fases.

*Demostración.* La divergencia del campo $(\dot q, \dot p)$ es
$\sum_i \bigl(\frac{\partial^2 H}{\partial q_i \partial p_i} - \frac{\partial^2 H}{\partial p_i
\partial q_i}\bigr) = 0$. $\blacksquare$

Es el punto de partida de [[fis-termo-estadistica]], y el corchete de Poisson
$\{f, g\} = \sum_i \bigl(\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} -
\frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}\bigr)$ se convierte en el
conmutador de [[fis-mecanica-cuantica]].

## Reto

Calcula tres enteros. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** $T / T_0$ para un péndulo que se suelta en reposo desde $\theta_0 = 120°$.
- **b.** La anomalía excéntrica $E$, en radianes, de un cuerpo con excentricidad $e = 0{,}967$
  (la del cometa Halley) cuando su anomalía media es $M = 1$ rad.
- **c.** El cociente $\omega_2 / \omega_1$ entre la frecuencia normal alta y la baja del péndulo
  doble de la sección 6.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9 \cdot T/T_0 \rfloor$, y análogamente
$b$ y $c$.
