---
id: fis-electromagnetismo
title: "Electromagnetismo"
area: fisica
trunk_level: 4
prerequisites: [fis-mecanica-clasica]
academic_sources:
  - "Griffiths, D. J. Introduction to Electrodynamics, 4ª ed. Cambridge University Press, 2017."
  - "Purcell, E. M.; Morin, D. J. Electricity and Magnetism, 3ª ed. Cambridge University Press, 2013."
  - "Jackson, J. D. Classical Electrodynamics, 3ª ed. Wiley, 1999."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, Vol. II. Addison-Wesley, 1964."
  - "Born, M.; Wolf, E. Principles of Optics, 7ª ed. Cambridge University Press, 1999."
ctf_flag: "sha256:7246b92f2c6440c4c0f195225e5528d8f75e2dbf41096d1943992cf65fea8ad8"
hints:
  - "(a) El potencial es lineal en la carga: corta la placa por el punto en cuatro rectángulos que tienen a P en una esquina, y suma. (b) Cada lado es un hilo recto finito; por simetría solo sobrevive la componente z de cada contribución. (c) Impón la continuidad de las componentes tangenciales de E y de H en la interfaz para la onda incidente, la reflejada y la transmitida."
  - "(a) La integral ∫₀ᵘ∫₀ᵛ dx dy/√(x²+y²) tiene primitiva cerrada con asinh; contrástala con scipy.integrate.dblquad. (b) Integra Biot-Savart numéricamente lado a lado con scipy.integrate.quad, o usa la fórmula del hilo finito proyectada sobre el eje. (c) La ley de Snell da el ángulo transmitido; numpy.linalg.solve resuelve el sistema 2×2 de condiciones de contorno."
  - "Griffiths, §2.3 (potencial de distribuciones continuas), §5.2 (ley de Biot-Savart y el hilo finito, ejemplo 5.5) y §9.3 (reflexión y transmisión con incidencia oblicua, ecuaciones de Fresnel). Born & Wolf, §1.5.2. Documentación: docs.scipy.org, scipy.integrate."
---

# Electromagnetismo

Cuatro ecuaciones describen todos los fenómenos eléctricos, magnéticos y ópticos clásicos. Este
nodo las construye desde la ley de Coulomb, muestra cómo predicen la luz y termina en las
condiciones de contorno, que es donde el electromagnetismo se vuelve ingeniería: líneas de
transmisión, antenas, fibra óptica y [[ing-circuitos]].

Se usan unidades del SI. Desde 2019, $\mu_0$ ya no vale exactamente $4\pi \times 10^{-7}$ N/A²,
aunque coincide con ese valor en sus nueve primeras cifras significativas; $\varepsilon_0 = 1/(\mu_0 c^2)$.

## 1. Electrostática

**Ley de Coulomb y superposición.** El campo creado por una distribución de carga $\rho$ es

$$
\mathbf E(\mathbf r) = \frac{1}{4\pi\varepsilon_0} \int \rho(\mathbf r')\,
\frac{\mathbf r - \mathbf r'}{|\mathbf r - \mathbf r'|^3}\, d^3 r' .
$$

Como $\nabla \times \mathbf E = 0$, existe un **potencial** con $\mathbf E = -\nabla V$:

$$
V(\mathbf r) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\mathbf r')}{|\mathbf r -
\mathbf r'|}\, d^3 r' .
$$

El potencial es un escalar y es **lineal** en la carga: el de una distribución troceada es la suma
de los de los trozos. Es la herramienta más potente para calcularlo.

**Teorema (Gauss).** $\displaystyle\oint_{\partial\Omega} \mathbf E \cdot d\mathbf A =
\frac{Q_{\text{int}}}{\varepsilon_0}$; en forma diferencial, $\nabla \cdot \mathbf E =
\rho/\varepsilon_0$.

*Demostración.* Para una carga puntual en el origen,
$\nabla \cdot (\hat{\mathbf r}/r^2) = 4\pi\,\delta^3(\mathbf r)$: es nula fuera del origen, y el
flujo a través de cualquier esfera centrada vale $4\pi$. Por superposición se extiende a
cualquier $\rho$, y por el teorema de la divergencia, a la forma integral. $\blacksquare$

Combinando ambas ecuaciones resulta la **ecuación de Poisson**, $\nabla^2 V = -\rho/\varepsilon_0$.
Sus soluciones con condiciones de contorno dadas son únicas (si dos soluciones difieren en $W$,
entonces $\nabla^2 W = 0$ con $W = 0$ en el contorno, y por el principio del máximo $W \equiv 0$).
Esa unicidad es la que justifica el método de las imágenes.

*Ejemplo: placa rectangular.* Una placa $[0, u] \times [0, v]$ con densidad superficial uniforme
$\sigma$ crea en su esquina el potencial

$$
V = \frac{\sigma}{4\pi\varepsilon_0} \int_0^u\!\!\int_0^v \frac{dx\,dy}{\sqrt{x^2 + y^2}} =
\frac{\sigma}{4\pi\varepsilon_0} \Bigl[\,u \operatorname{asinh}\frac{v}{u} + v
\operatorname{asinh}\frac{u}{v}\Bigr].
$$

La integral se hace en polares partiendo el rectángulo por su diagonal: en cada triángulo,
$\int dA/r = \int R(\theta)\, d\theta$, con $R(\theta)$ la distancia de la esquina al borde.

Valor de control: en una esquina de un cuadrado de lado $a$, $V \varepsilon_0/(\sigma a) =
\ln(1 + \sqrt 2)/(2\pi) = 0{,}140274963\ldots$

**Energía.** El trabajo necesario para montar una distribución es
$W = \frac{\varepsilon_0}{2}\int |\mathbf E|^2\, d^3 r$: la energía reside en el campo.

## 2. Magnetostática

Una corriente estacionaria $I$ por un hilo crea, según la **ley de Biot-Savart**,

$$
\mathbf B(\mathbf r) = \frac{\mu_0 I}{4\pi} \int \frac{d\boldsymbol\ell' \times (\mathbf r -
\mathbf r')}{|\mathbf r - \mathbf r'|^3} .
$$

Se cumplen $\nabla \cdot \mathbf B = 0$ (no hay cargas magnéticas) y la **ley de Ampère**,
$\nabla \times \mathbf B = \mu_0 \mathbf J$.

*Ejemplo: hilo recto finito.* Para un punto a distancia $\rho$ de la recta del hilo, si los
extremos se ven bajo los ángulos $\theta_1$ y $\theta_2$ medidos desde la perpendicular,

$$
|\mathbf B| = \frac{\mu_0 I}{4\pi\rho}\,(\sin\theta_2 - \sin\theta_1),
$$

con la dirección dada por la regla de la mano derecha alrededor del hilo. Con $\theta_{1,2}
\to \mp\pi/2$ se recupera el hilo infinito, $\mu_0 I / (2\pi\rho)$.

*Ejemplo: espira poligonal.* En el centro de un hexágono regular de lado $L$, cada lado está a la
distancia del apotema, $d = L\sqrt3/2$, y se ve bajo $\pm 30°$. Sumando los seis,
$B = \frac{\sqrt 3}{\pi}\frac{\mu_0 I}{L} = 0{,}551328895\ldots \frac{\mu_0 I}{L}$. Fuera del
plano de la espira, cada contribución forma un ángulo con el eje y solo sobrevive la componente
axial: las componentes radiales de lados opuestos se cancelan.

## 3. Inducción y las ecuaciones de Maxwell

**Ley de Faraday.** Un flujo magnético variable induce una fuerza electromotriz,
$\mathcal E = -\,d\Phi_B/dt$, o $\nabla \times \mathbf E = -\partial_t \mathbf B$.

Maxwell observó que la ley de Ampère es inconsistente con la conservación de la carga: tomando la
divergencia de $\nabla \times \mathbf B = \mu_0 \mathbf J$ queda $\nabla \cdot \mathbf J = 0$, falso
cuando la carga se acumula. La continuidad, $\nabla \cdot \mathbf J = -\partial_t\rho$, exige
añadir la **corriente de desplazamiento** $\varepsilon_0 \partial_t \mathbf E$.

**Ecuaciones de Maxwell** (en el vacío con fuentes):

$$
\nabla \cdot \mathbf E = \frac{\rho}{\varepsilon_0}, \quad
\nabla \cdot \mathbf B = 0, \quad
\nabla \times \mathbf E = -\frac{\partial \mathbf B}{\partial t}, \quad
\nabla \times \mathbf B = \mu_0 \mathbf J + \mu_0\varepsilon_0 \frac{\partial \mathbf E}
{\partial t} .
$$

Junto con la **fuerza de Lorentz**, $\mathbf F = q(\mathbf E + \mathbf v \times \mathbf B)$,
contienen todo el electromagnetismo clásico.

## 4. Ondas electromagnéticas

**Teorema.** Sin fuentes, cada componente de $\mathbf E$ y de $\mathbf B$ cumple la ecuación de
ondas con velocidad $c = 1/\sqrt{\mu_0\varepsilon_0}$.

*Demostración.* $\nabla \times (\nabla \times \mathbf E) = \nabla(\nabla \cdot \mathbf E) -
\nabla^2 \mathbf E = -\nabla^2\mathbf E$. Por otro lado,
$\nabla \times (\nabla \times \mathbf E) = -\partial_t(\nabla \times \mathbf B) =
-\mu_0\varepsilon_0\, \partial_t^2 \mathbf E$. Igualando,
$\nabla^2 \mathbf E = \mu_0\varepsilon_0\, \partial_t^2\mathbf E$. Lo mismo para
$\mathbf B$. $\blacksquare$

Que $1/\sqrt{\mu_0\varepsilon_0}$, calculado con constantes medidas en experimentos de
electricidad y magnetismo, coincidiera con la velocidad de la luz fue la prueba de que la luz es
una onda electromagnética.

Para una onda plana $\mathbf E = \mathbf E_0 e^{i(\mathbf k \cdot \mathbf r - \omega t)}$ con
$\omega = c|\mathbf k|$, las ecuaciones de Maxwell imponen $\mathbf k \cdot \mathbf E_0 = 0$ y
$\mathbf B = \frac{1}{\omega}\mathbf k \times \mathbf E$: la onda es transversal y
$|\mathbf B| = |\mathbf E|/c$.

**Energía y teorema de Poynting.** La densidad de energía es
$u = \frac{\varepsilon_0}{2}|\mathbf E|^2 + \frac{1}{2\mu_0}|\mathbf B|^2$, y el flujo de energía,
el **vector de Poynting** $\mathbf S = \frac{1}{\mu_0}\mathbf E \times \mathbf B$, cumple
$\partial_t u + \nabla \cdot \mathbf S = -\mathbf J \cdot \mathbf E$. La intensidad es el promedio
temporal de $|\mathbf S|$.

## 5. Medios materiales y condiciones de contorno

En un medio lineal, isótropo y no magnético, $\varepsilon_0 \to \varepsilon = \varepsilon_r
\varepsilon_0$ y la velocidad de la luz pasa a $c/n$ con **índice de refracción**
$n = \sqrt{\varepsilon_r}$.

**Condiciones de contorno.** Integrando las ecuaciones de Maxwell sobre una caja y un circuito
infinitesimales que atraviesan la interfaz, sin cargas ni corrientes libres en ella, se obtiene
que son **continuas** las componentes tangenciales de $\mathbf E$ y de $\mathbf H =
\mathbf B/\mu_0$ y las normales de $\mathbf D = \varepsilon\mathbf E$ y de $\mathbf B$.

**Reflexión y refracción.** Una onda incide desde un medio $n_1$ con ángulo $\theta_i$. Para que
las condiciones se cumplan en todos los puntos de la interfaz, las tres ondas deben tener la
misma componente tangencial de $\mathbf k$: de ahí $\theta_r = \theta_i$ y la **ley de Snell**,
$n_1 \sin\theta_i = n_2 \sin\theta_t$.

Para la **polarización s** ($\mathbf E$ perpendicular al plano de incidencia), con amplitudes
$1$, $r$ y $t$, la continuidad de $E_\parallel$ da $1 + r = t$, y la de $H_\parallel$,
$n_1\cos\theta_i(1 - r) = n_2\cos\theta_t\, t$. Resolviendo:

$$
r_s = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}, \qquad
R_s = |r_s|^2 .
$$

La polarización p da $r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i +
n_1\cos\theta_t}$, que se anula en el **ángulo de Brewster**, $\tan\theta_B = n_2/n_1$: la luz
reflejada en ese ángulo sale totalmente polarizada en s. Si $n_1 > n_2$ y
$\sin\theta_i > n_2/n_1$, no hay ángulo transmitido real y se produce **reflexión total
interna**, el principio de la fibra óptica.

Valor de control: con incidencia normal de aire a vidrio de $n = 1{,}5$,
$R = \bigl(\frac{n_1 - n_2}{n_1 + n_2}\bigr)^2 = 0{,}04$.

## Reto

Calcula tres números adimensionales. En cada caso, multiplica el valor por $10^9$ y toma la parte
entera.

- **a.** Una placa plana delgada ocupa el rectángulo $[0, a] \times [0, 2a]$ con densidad
  superficial de carga uniforme $\sigma$. Halla $V \varepsilon_0/(\sigma a)$ en el punto
  $(0{,}3\,a,\; 0{,}5\,a)$ de la propia placa, con el potencial nulo en el infinito.
- **b.** Una espira con forma de hexágono regular de lado $L$ lleva una corriente $I$. Halla
  $B L/(\mu_0 I)$ en un punto del eje de la espira (la recta perpendicular a su plano por el
  centro) situado a una distancia $L$ del plano.
- **c.** La reflectancia $R_s$ para una onda plana con polarización s que incide desde el aire
  ($n_1 = 1$) sobre un vidrio con $n_2 = 1{,}5$, con un ángulo de incidencia de $60°$.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9 \cdot V\varepsilon_0/(\sigma a)
\rfloor$, y análogamente $b$ y $c$.
