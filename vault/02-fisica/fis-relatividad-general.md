---
id: fis-relatividad-general
title: "Relatividad general: equivalencia, métrica y geodésicas, Schwarzschild, pruebas clásicas, agujeros negros, ondas gravitacionales y cosmología"
area: fisica
trunk_level: 14
prerequisites: [fis-relatividad-especial, mat-geometria-diferencial]
academic_sources:
  - "Hartle, J. B. Gravity: An Introduction to Einstein's General Relativity. Addison-Wesley, 2003."
  - "Carroll, S. M. Spacetime and Geometry: An Introduction to General Relativity. Addison-Wesley, 2004."
exercises:
  - id: radio-de-schwarzschild
    tier: 1
    prompt: |
      ¿Cuál es el radio de Schwarzschild del Sol ($M = 1{,}98847\cdot10^{30}$ kg, $G = 6{,}6743\cdot10^{-11}$), en km? Respuesta: con **3 decimales**.
    answers: ["sha256:29c8fdf9ff1e4f4504a0a5f303151c3f07146f23e15b3b7c8f0681705c593103"]
  - id: tiempo-de-hubble
    tier: 1
    prompt: |
      ¿Cuánto vale el tiempo de Hubble $1/H_0$ para $H_0 = 70$ km/s/Mpc, en Gyr (1 Gyr $= 3{,}15576\cdot10^{16}$ s)? Respuesta: con **2 decimales**.
    answers: ["sha256:0353353ca244a246035056ffdb846dad9968a84a4a5f6643ceacd265b8230a50"]
  - id: densidad-critica
    tier: 1
    prompt: |
      ¿Cuál es la densidad crítica $3H_0^2/(8\pi G)$ para $H_0 = 70$ km/s/Mpc, en unidades de $10^{-27}$ kg/m³? Respuesta: con **2 decimales**.
    answers: ["sha256:cbcc2089e2e9234a1b3800dd05d06511d356404e85a23a4a8b4bec2fc3d65a38"]
  - id: ascensor-de-einstein
    tier: 1
    prompt: |
      En un ascensor que acelera a $g = 9{,}81$ m/s² lejos de toda masa, un rayo de luz cruza horizontalmente 3 m. ¿Cuánto "cae" respecto al ascensor, en unidades de $10^{-16}$ m? Respuesta: con **2 decimales**.
    answers: ["sha256:25449e0b7923faee60ebeef6a4fc921b5bfe3aababec651cfaa0a979d7cdc4a7"]
  - id: pound-rebka
    tier: 1
    prompt: |
      En el experimento de Pound y Rebka, los fotones subían 22,5 m en una torre. ¿Qué corrimiento relativo de frecuencia $gh/c^2$ sufrían, en unidades de $10^{-15}$ (usa $g = GM_\oplus/R_\oplus^2$ con $GM_\oplus = 3{,}986\cdot10^{14}$ y $R_\oplus = 6371$ km)? Respuesta: con **2 decimales**.
    answers: ["sha256:caac385a527f880b943e9887f6a6d43fb7988f0a876dddb3a4ed8dea55edeb48"]
  - id: relojes-del-gps
    tier: 2
    prompt: |
      Un satélite GPS orbita a $r = 26\,560$ km. Sumando el efecto gravitatorio (adelanta) y el de la velocidad orbital (atrasa), ¿cuántos $\mu$s por día adelanta su reloj respecto a uno en la superficie (ignora la rotación de la Tierra)? Respuesta: con **1 decimal**.
    answers: ["sha256:22605208e31e64f34e196cdb3de2f6229af2898f8e2491a1d6b05c50ab6e91bb"]
  - id: desviacion-de-la-luz
    tier: 2
    prompt: |
      ¿Cuánto se desvía un rayo de luz que pasa rozando el Sol ($R = 6{,}957\cdot10^8$ m), en segundos de arco? Respuesta: con **3 decimales**.
    answers: ["sha256:94e7983906f92816b405eb27f5786192314d1f823d3194340f4347e1bfa7debe"]
  - id: estrella-de-neutrones
    tier: 2
    prompt: |
      ¿Cuál es el corrimiento al rojo gravitatorio $z$ de la luz que escapa de la superficie de una estrella de neutrones de $1{,}4\,M_\odot$ y 12 km de radio? Respuesta: con **4 decimales**.
    answers: ["sha256:6740d535bb75e141004d84e2d856291716c7e181c876391acac053ef9b20a13a"]
  - id: esfera-de-fotones
    tier: 2
    prompt: |
      ¿A qué radio, en unidades del radio de Schwarzschild, está la órbita circular (inestable) de los fotones? Respuesta: un número.
    answers: ["sha256:9f29a130438b81170b92a42650f9a94291ecad60bd47af2a3886e75f7f728725"]
  - id: temperatura-de-hawking
    tier: 2
    prompt: |
      ¿Cuál es la temperatura de Hawking de un agujero negro de una masa solar, en nK? Respuesta: con **2 decimales**.
    answers: ["sha256:72a1cb1e3c0b7a3be0750fc7009ace9dfd397ed5c1067d1515476b95d71ba5ba"]
  - id: masa-de-chirp
    tier: 2
    prompt: |
      GW150914 fue la fusión de dos agujeros negros de 36 y 29 masas solares. ¿Cuál es su masa de chirp, en masas solares? Respuesta: con **2 decimales**.
    answers: ["sha256:2753b14605ff6faf33aba5a133b359dc1b07b067d86935e3a1003e3e59188b88"]
  - id: velocidad-en-la-isco
    tier: 2
    prompt: |
      ¿A qué velocidad (en unidades de $c$) se mueve una partícula en la órbita circular estable más interna de Schwarzschild, medida por un observador estático allí? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: perihelio-de-mercurio
    tier: 3
    prompt: |
      Con $a = 5{,}7909\cdot10^{10}$ m, $e = 0{,}20563$ y periodo de 87,969 días, ¿cuánto avanza el perihelio de Mercurio por efecto relativista en un siglo (36 525 días), en segundos de arco? Respuesta: con **2 decimales**.
    answers: ["sha256:96a45d14baaea25f3d3ce3123cfe14960dca3e367e3c8d927055310d8570595b"]
  - id: isco
    tier: 3
    prompt: |
      ¿A qué radio (en km) está la órbita circular estable más interna (ISCO) de un agujero negro de Schwarzschild de 10 masas solares? Respuesta: con **2 decimales**.
    answers: ["sha256:f00bc3ba221504468a0f59aa081ff5efed4b13759de524a251e79c63cc578983"]
  - id: edad-del-universo
    tier: 3
    prompt: |
      ¿Qué edad tiene un universo plano con $\Omega_m = 0{,}3$, $\Omega_\Lambda = 0{,}7$ y $H_0 = 70$ km/s/Mpc, en Gyr? Respuesta: con **2 decimales**.
    answers: ["sha256:65aca5e69e2739aa83c0c9dc3b31f64d2497872c31aedbf658f67ba349518ac6"]
  - id: caida-a-la-singularidad
    tier: 3
    prompt: |
      Un observador parte del reposo justo en el horizonte de un agujero negro de 10 masas solares. ¿Cuánto tiempo propio tarda en llegar a la singularidad, en ms? Respuesta: con **4 decimales**.
    answers: ["sha256:3f326b09dbbce260373a0212e1738ad77a1b8a962e936094753a2da9f7512f3e"]
---

# Relatividad general: equivalencia, métrica y geodésicas, Schwarzschild, pruebas clásicas, agujeros negros, ondas gravitacionales y cosmología

Einstein reinterpretó la gravedad: no es una fuerza, sino la **curvatura del espaciotiempo**; los cuerpos en caída libre siguen las líneas "más rectas"
posibles (geodésicas) de un espaciotiempo que la materia curva. "La materia le dice al espaciotiempo cómo curvarse; el espaciotiempo le dice a la materia
cómo moverse" (Wheeler). La teoría predijo y explicó la desviación de la luz, el avance del perihelio de Mercurio, los agujeros negros, las ondas
gravitacionales detectadas en 2015 y la expansión del universo; y es una corrección de ingeniería imprescindible en el GPS. Este nodo usa la geometría de
[[mat-geometria-diferencial]] y la relatividad de [[fis-relatividad-especial]].

## Objetivos

Al terminar sabrás:

1. Usar el principio de equivalencia para predecir la desviación de la luz y el corrimiento al rojo gravitatorio.
2. Leer una métrica, calcular tiempos propios y escribir y resolver geodésicas con potenciales efectivos.
3. Aplicar la solución de Schwarzschild: horizonte, órbitas, ISCO, esfera de fotones y las pruebas clásicas.
4. Calcular magnitudes de agujeros negros (radio, caída al centro, temperatura de Hawking) y de ondas gravitacionales (masa de chirp).
5. Entender la ecuación de Einstein y su límite newtoniano.
6. Usar las ecuaciones de Friedmann para la edad y la densidad crítica del universo.

## Qué debes dominar antes

[[fis-relatividad-especial]] (intervalo, tiempo propio, cuadrivectores) y [[mat-geometria-diferencial]] (métricas, símbolos de Christoffel, geodésicas,
curvatura, transporte paralelo). La gravitación newtoniana y las órbitas de [[fis-mecanica-clasica]].

> [!question] Test de entrada
> 1. ¿Cuál es el tiempo propio de un reloj en reposo en la métrica de Minkowski entre $t = 0$ y $t = T$?
> 2. ¿Qué es una geodésica de la esfera?
> 3. ¿Cuál es la velocidad de escape newtoniana desde una masa $M$ a distancia $r$?
>
> Respuestas: $T$; un arco de círculo máximo; $\sqrt{2GM/r}$ (que vale $c$ justo en $r = 2GM/c^2$).

## 1. Para qué sirve

- **Navegación por satélite**: el GPS corrige unos 38 μs/día de diferencia de ritmo entre los relojes en órbita y en tierra.
- **Astrofísica**: agujeros negros (los de rayos X, el de M87 y Sgr A*, fotografiados), estrellas de neutrones, lentes gravitacionales que pesan cúmulos de
  galaxias y materia oscura.
- **Ondas gravitacionales**: LIGO y Virgo miden deformaciones de $10^{-21}$; la masa de chirp de la señal da las masas de los objetos que se funden.
- **Cosmología**: edad, expansión acelerada y composición del universo.

## 2. Principio de equivalencia

Localmente, un campo gravitatorio es indistinguible de un sistema acelerado: en caída libre no se siente gravedad (los astronautas "flotan" porque caen).
Consecuencias inmediatas:

- **La luz cae**: en un ascensor acelerado a $g$, un rayo que cruza una distancia $L$ se desvía $\frac12g(L/c)^2$ respecto al ascensor; por equivalencia, también en un campo
  gravitatorio.
- **Corrimiento al rojo gravitatorio**: un fotón que sube una altura $h$ pierde frecuencia $\frac{\Delta\nu}{\nu} = \frac{gh}{c^2}$ (Pound-Rebka, 1960: $2{,}5\cdot10^{-15}$ en 22,5 m). Equivalentemente, **los
  relojes más abajo en el potencial van más despacio**: $d\tau = \left(1 + \frac{\Phi}{c^2}\right)dt$.

> [!example] Ejemplo resuelto 1: los relojes del GPS
> A $r = 26\,560$ km, el reloj del satélite adelanta por estar más arriba $\frac{GM}{c^2}\left(\frac1{R_\oplus} - \frac1r\right)\approx 5{,}3\cdot10^{-10}$, unos 45,7 μs/día, y atrasa por su velocidad orbital $\frac{v^2}{2c^2} = \frac{GM}{2rc^2}$,
> unos 7,2 μs/día. El neto es $\approx 38{,}5$ μs/día. Multiplicado por $c$, son 11 km de error diario en la distancia: por eso los relojes de los satélites se fabrican
> ligeramente "lentos" a propósito.

## 3. Métrica, geodésicas y la ecuación de Einstein

La geometría del espaciotiempo es una **métrica** $ds^2 = g_{\mu\nu}dx^\mu dx^\nu$ (signatura $-+++$ en este nodo); el tiempo propio de una trayectoria es $\int\sqrt{-g_{\mu\nu}\dot x^\mu\dot x^\nu}\,d\lambda$, y
las partículas libres siguen **geodésicas** $\ddot x^\mu + \Gamma^\mu_{\alpha\beta}\dot x^\alpha\dot x^\beta = 0$, que extreman el tiempo propio. En el **límite newtoniano** (campos débiles, velocidades
pequeñas), $g_{00} \approx -(1 + 2\Phi/c^2)$ y la ecuación de la geodésica se reduce a $\ddot{\vec x} = -\nabla\Phi$.

La **ecuación de Einstein** relaciona curvatura y materia:

$$
G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu},
$$

con $G_{\mu\nu} = R_{\mu\nu} - \frac12Rg_{\mu\nu}$ el tensor de Einstein, construido con el tensor de Riemann (la curvatura que mide la holonomía de lazos infinitesimales). Son
10 ecuaciones no lineales; en el límite débil y estático dan la ecuación de Poisson $\nabla^2\Phi = 4\pi G\rho$. La constante cosmológica $\Lambda$ actúa como una energía del vacío.

## 4. Schwarzschild y las pruebas clásicas

Fuera de una masa esférica sin rotación, la única solución es la de **Schwarzschild** (teorema de Birkhoff):

$$
ds^2 = -\left(1 - \frac{r_s}{r}\right)c^2dt^2 + \frac{dr^2}{1 - r_s/r} + r^2d\Omega^2, \qquad r_s = \frac{2GM}{c^2}.
$$

El Sol tiene $r_s \approx 2{,}95$ km; la Tierra, 9 mm. Usando las cantidades conservadas (energía y momento angular por unidad de masa, por las simetrías en $t$ y $\varphi$), el
movimiento radial queda como una partícula en un **potencial efectivo**. Con $u = 1/r$ y $M = GM/c^2$, las órbitas cumplen

$$
u'' + u = \frac{M}{h^2} + 3Mu^2 \quad\text{(materia)}, \qquad u'' + u = 3Mu^2 \quad\text{(luz)}.
$$

El término $3Mu^2$ es la corrección relativista. De ahí:

- **Desviación de la luz**: $\delta = \frac{4GM}{c^2b}$, el doble que el cálculo "newtoniano" de un corpúsculo de luz; rozando el Sol, $1{,}75''$ (Eddington, 1919).
- **Avance del perihelio**: $\Delta\varphi = \frac{6\pi GM}{c^2a(1 - e^2)}$ por órbita; para Mercurio, $43''$ por siglo, la discrepancia que la gravedad de Newton no explicaba.
- **Retraso de Shapiro** de las señales de radar que pasan cerca del Sol (unos 200 μs).

> [!example] Ejemplo resuelto 2: el perihelio de Mercurio
> Con $a = 5{,}79\cdot10^{10}$ m y $e = 0{,}2056$, $\Delta\varphi = \frac{6\pi\cdot1477\text{ m}}{5{,}79\cdot10^{10}\cdot0{,}9577} \approx 5{,}02\cdot10^{-7}$ rad por órbita. En un siglo hay $36\,525/87{,}97 \approx 415$ órbitas: $2{,}08\cdot10^{-4}$ rad $\approx 42{,}98''$.
> Los planetas producen otros $532''$ por siglo de precesión newtoniana; Le Verrier ya había notado en 1859 que sobraban unos $43''$.

## 5. Agujeros negros

En $r = r_s$ hay un **horizonte de sucesos**: nada que lo cruce puede volver. No es una singularidad física (la curvatura es finita allí; la singularidad de la
métrica es un mal sistema de coordenadas), pero en $r = 0$ sí hay una singularidad de curvatura. Un observador que cae libremente lo cruza sin notar nada local
y llega a $r = 0$ en un tiempo propio finito: desde el reposo en el horizonte, $\tau = \pi GM/c^3$ (0,15 ms para 10 masas solares), mientras que para un observador lejano
nunca llega a cruzarlo.

**Órbitas**: las circulares estables existen solo para $r \ge 6GM/c^2$ (la **ISCO**, donde el disco de acreción termina); a $3GM/c^2$ está la **esfera de fotones** (órbitas
circulares inestables de la luz), que fija el tamaño de la "sombra" fotografiada por el Event Horizon Telescope. En la ISCO, un observador estático ve pasar la
materia a $c/2$.

**Termodinámica**: Hawking (1974) mostró que los efectos cuánticos hacen radiar al agujero como un cuerpo negro a $T = \frac{\hbar c^3}{8\pi GMk_B}$, unos 62 nK para una masa solar:
mucho más frío que el fondo cósmico, así que hoy los agujeros astrofísicos absorben más de lo que emiten. Su entropía es proporcional al **área** del
horizonte (Bekenstein-Hawking). Los agujeros con rotación (Kerr) y carga tienen más estructura (ergosfera).

## 6. Ondas gravitacionales

Linealizando alrededor de Minkowski, las perturbaciones de la métrica obedecen una ecuación de ondas: viajan a $c$ con dos polarizaciones y estiran y
comprimen distancias transversales en una fracción $h$. Un sistema binario emite energía y se cierra; la evolución de la frecuencia depende sobre todo de la
**masa de chirp** $\mathcal M = \frac{(m_1m_2)^{3/5}}{(m_1 + m_2)^{1/5}}$. En GW150914 ($36 + 29\,M_\odot$), $\mathcal M \approx 28\,M_\odot$ y se radiaron unas 3 masas solares en forma de ondas en una fracción de segundo.

## 7. Cosmología

Un universo homogéneo e isótropo tiene métrica de **Friedmann-Lemaître-Robertson-Walker** $ds^2 = -c^2dt^2 + a(t)^2d\vec x^2$ (caso plano), y la ecuación de Einstein da

$$
H^2 = \left(\frac{\dot a}{a}\right)^2 = \frac{8\pi G}{3}\rho - \frac{kc^2}{a^2} + \frac\Lambda3 .
$$

La **densidad crítica** $\rho_c = \frac{3H_0^2}{8\pi G}$ (unos $9\cdot10^{-27}$ kg/m³, cinco protones por metro cúbico) separa los universos abiertos de los cerrados; las observaciones dan
un universo casi plano con $\Omega_m \approx 0{,}3$ (materia, mayormente oscura) y $\Omega_\Lambda \approx 0{,}7$ (energía oscura). La **edad** es $t_0 = \int_0^1\frac{da}{aH(a)}$: $\frac{2}{3H_0}$ si solo hubiera materia
(9,3 Gyr con $H_0 = 70$), y unos 13,5 Gyr con la constante cosmológica, que acelera la expansión. La **ley de Hubble** $v = H_0d$ y el **corrimiento al rojo cosmológico**
$1 + z = 1/a$ son las observaciones básicas.

> [!example] Ejemplo resuelto 3: la edad del universo (con menos ayuda)
> Con $\Omega_m = 0{,}3$, $\Omega_\Lambda = 0{,}7$ y $H_0 = 70$ km/s/Mpc, escribe $H(a) = H_0\sqrt{\Omega_m/a^3 + \Omega_\Lambda}$ y calcula $t_0 = \int_0^1\frac{da}{aH}$. Comprueba con la fórmula cerrada
> $t_0 = \frac{2}{3H_0\sqrt{\Omega_\Lambda}}\operatorname{asinh}\sqrt{\Omega_\Lambda/\Omega_m}$ que sale $\approx 13{,}47$ Gyr, y compara con el tiempo de Hubble $1/H_0 \approx 13{,}97$ Gyr.

## 8. Comprobar con un programa

La desviación de la luz y el perihelio integrando las ecuaciones de órbita relativistas, la ISCO por el potencial efectivo y la edad del universo
integrando Friedmann.

```python
import math

GM_SOL, c = 1.32712440018e20, 299792458.0
M = GM_SOL / c**2   # masa del Sol en metros

def integra(u, up, f, paso, parar):
    phi = 0.0
    while True:
        k1u, k1p = up, f(u)
        k2u, k2p = up + paso / 2 * k1p, f(u + paso / 2 * k1u)
        k3u, k3p = up + paso / 2 * k2p, f(u + paso / 2 * k2u)
        k4u, k4p = up + paso * k3p, f(u + paso * k3u)
        nu = u + paso / 6 * (k1u + 2 * k2u + 2 * k3u + k4u)
        nup = up + paso / 6 * (k1p + 2 * k2p + 2 * k3p + k4p)
        phi += paso
        if parar(u, nu, up, nup, phi):
            return phi, u, nu, up, nup
        u, up = nu, nup

# 1. Luz rasante al Sol: u'' + u = 3Mu²; el rayo sale cuando u = 0. Desviación = 2φ − π.
R = 6.957e8
phi, u0, u1, *_ = integra(1 / R, 0.0, lambda u: -u + 3 * M * u * u, 1e-5, lambda u, nu, up, nup, p: nu <= 0)
phi -= 1e-5 * (-u1) / (u0 - u1)   # interpolar el cruce
desv = (2 * phi - math.pi) * 180 / math.pi * 3600
assert abs(desv - 4 * M / R * 180 / math.pi * 3600) < 2e-3

# 2. Ejemplo resuelto 2: avance del perihelio de Mercurio por órbita, integrando la órbita.
a, e = 5.7909050e10, 0.205630
p = a * (1 - e * e)
f = lambda u: 1 / p - u + 3 * M * u * u
phi, _, _, up, nup = integra((1 + e) / p, 0.0, f, 2e-4, lambda u, nu, up, nup, ph: ph > 6 and up > 0 >= nup)
phi -= 2e-4 * (-nup) / (up - nup)
avance = phi - 2 * math.pi
assert abs(avance - 6 * math.pi * M / p) / avance < 3e-3
print("desviación de la luz:", round(desv, 3), "″ | perihelio:", round(avance * 36525 / 87.9691 * 180 / math.pi * 3600, 2), "″/siglo")

# 3. ISCO: las circulares cumplen L² = M r²/(r − 3M); la estabilidad se pierde donde L² es mínimo, en r = 6M.
L2 = lambda r: r * r / (r - 3)
rs = [3.2 + 0.001 * k for k in range(20000)]
assert abs(min(rs, key=L2) - 6) < 1e-3

# 4. Ejemplo resuelto 3: edad del universo integrando Friedmann (cambio a = s² para suavizar).
H0 = 70e3 / 3.0856775814913673e22
N = 100000
edad = sum(2 * s / (s * s * H0 * math.sqrt(0.3 / s**6 + 0.7)) for s in ((i + 0.5) / N for i in range(N))) / N
assert abs(edad / 3.15576e16 - 13.47) < 0.01
```

## 9. Errores típicos

- Pensar que en el horizonte "pasa algo" local para quien cae: no hay nada especial allí salvo la imposibilidad de volver.
- Confundir el tiempo coordenado $t$ (de un observador lejano) con el tiempo propio de quien cae.
- Usar la desviación newtoniana de la luz (la mitad del valor real).
- Olvidar en el GPS uno de los dos efectos (gravitatorio y cinemático) o su signo.
- Tratar la expansión del universo como un movimiento de galaxias "a través" del espacio: es el factor de escala el que crece (por eso pueden alejarse a más de $c$).
- Mezclar signaturas ($-+++$ y $+---$) en las mismas cuentas.

## 10. Resumen

- Equivalencia: la luz cae, $\Delta\nu/\nu = gh/c^2$, relojes más lentos abajo; GPS 38 μs/día.
- Métrica, tiempo propio, geodésicas; límite newtoniano $g_{00} = -(1 + 2\Phi/c^2)$; Einstein $G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi GT_{\mu\nu}/c^4$.
- Schwarzschild $r_s = 2GM/c^2$; órbitas $u'' + u = M/h^2 + 3Mu^2$; luz $4GM/(c^2b)$; perihelio $6\pi GM/(c^2a(1 - e^2))$; Shapiro.
- Agujeros negros: horizonte, ISCO $6GM/c^2$, fotones $3GM/c^2$, caída $\pi GM/c^3$, Hawking $\hbar c^3/(8\pi GMk_B)$.
- Ondas gravitacionales, masa de chirp.
- FLRW, Friedmann, $\rho_c = 3H_0^2/(8\pi G)$, edad $\int da/(aH)$, $\Lambda$CDM ≈ 13,5 Gyr.

## Repaso: lo que debe quedarte dentro de un mes

1. Gravedad = curvatura; caída libre = geodésica.
2. Los relojes en un potencial más bajo van más despacio: se nota en el GPS.
3. El término $3Mu^2$ explica la luz desviada y Mercurio.
4. Un agujero negro es una región de la que ni la luz sale; la ISCO y la esfera de fotones fijan lo que se observa.
5. La expansión del universo sale de la ecuación de Einstein con materia y $\Lambda$.

## Siguiente

`fis-astrofisica` (estrellas, objetos compactos y cosmología observacional) y `fis-teoria-cuantica-campos` (y el problema de cuantizar la gravedad). La
geometría de base está en [[mat-geometria-diferencial]].
