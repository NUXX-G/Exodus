---
id: fis-mecanica-estadistica-avanzada
title: "Mecánica estadística avanzada: gases cuánticos, sólidos, transiciones de fase, campo medio, renormalización, Monte Carlo y fluctuaciones"
area: fisica
trunk_level: 14
prerequisites: [fis-termo-estadistica, fis-mecanica-cuantica]
academic_sources:
  - "Pathria, R. K.; Beale, P. D. Statistical Mechanics, 3ª ed. Academic Press (Elsevier), 2011."
  - "Kardar, M. Statistical Physics of Particles. Cambridge University Press, 2007."
exercises:
  - id: energia-de-fermi
    tier: 1
    prompt: |
      El cobre tiene $8{,}47\cdot10^{28}$ electrones de conducción por m³. ¿Cuál es su energía de Fermi en eV (gas de electrones libres)? Respuesta: con **2 decimales**.
    answers: ["sha256:51691d9fdc512835fd2e5316dc52d1c0e4125d77a875e6a32c07996c14dfb924"]
  - id: metropolis
    tier: 1
    prompt: |
      En el algoritmo de Metropolis para el modelo de Ising con $\beta J = 0{,}5$, ¿con qué probabilidad se acepta un giro que sube la energía $\Delta E = 4J$? Respuesta: con **4 decimales**.
    answers: ["sha256:81a66bf490ca518ae32cb547d723bf15b506340bd7061ab99822d52550d9f043"]
  - id: langmuir
    tier: 1
    prompt: |
      Un sitio de adsorción vacío tiene energía 0 y ocupado $\varepsilon$, en contacto con un gas de potencial químico $\mu$, con $\beta(\varepsilon - \mu) = -1$. ¿Cuál es la probabilidad de que esté ocupado? Respuesta: con **4 decimales**.
    answers: ["sha256:8d7a4b8c1ddb01672ee0a7c7854081cfe46e7b3f58b29c7606e4da59f119d8c5"]
  - id: temperatura-de-condensacion
    tier: 2
    prompt: |
      ¿A qué temperatura condensa un gas ideal de átomos de ⁸⁷Rb (masa $86{,}909$ u) con densidad $10^{20}$ m⁻³? Respuesta: en nK con **1 decimal**.
    answers: ["sha256:f224d4a23021c2d0309a5fee2798356496e6342faad1da19e457dcc89a80e021"]
  - id: calor-especifico-electronico
    tier: 2
    prompt: |
      Con la expansión de Sommerfeld, ¿cuánto vale $C_{\text{el}}/(Nk_B)$ para los electrones del cobre a 300 K? Usa la energía de Fermi de `energia-de-fermi`. Respuesta: con **4 decimales**.
    answers: ["sha256:478cb61d8027362db8734f8a9917ab34767766450a21a4ad92da3e096aaef4ae"]
  - id: temperatura-de-onsager
    tier: 2
    prompt: |
      ¿Cuánto vale $k_BT_c/J$ del modelo de Ising en la red cuadrada (solución de Onsager)? Respuesta: con **4 decimales**.
    answers: ["sha256:0c056a679c72acd00272e0320f5366e1b9ba3a595772521c34574311f918d9ef"]
  - id: campo-medio
    tier: 2
    prompt: |
      ¿Qué temperatura crítica $k_BT_c/J$ predice la aproximación de campo medio para el Ising en la red cuadrada, y cuántas veces es mayor que la exacta? Respuesta: `Tc;cociente`, el cociente con **3 decimales**.
    answers: ["sha256:658b8df6e8ff34ba6923cb8627e99b9ce9287ce9808f2bbf500271988aacc96e"]
  - id: magnetizacion-de-campo-medio
    tier: 2
    prompt: |
      En campo medio, $m = \tanh(mT_c/T)$. ¿Cuál es la magnetización espontánea a $T = 0{,}99\,T_c$? Respuesta: con **4 decimales**.
    answers: ["sha256:96f01e76858a873f0e8116084480f9bb397c3ca076bad14716eca81ed98d0101"]
  - id: einstein-stokes
    tier: 2
    prompt: |
      ¿Cuál es el coeficiente de difusión de una esfera de radio $0{,}5\ \mu$m en agua ($\eta = 10^{-3}$ Pa·s) a 300 K, en $\mu$m²/s? Respuesta: con **4 decimales**.
    answers: ["sha256:8ef5b408fff914568a302730e30955ecb009272ed1d17fb4885ec551041c3c12"]
  - id: segundo-virial
    tier: 2
    prompt: |
      Con van der Waals ($a = 0{,}364$ Pa·m⁶/mol², $b = 4{,}267\cdot10^{-5}$ m³/mol para el CO₂), ¿cuánto vale el segundo coeficiente del virial $B_2 = b - a/(RT)$ a 300 K, en cm³/mol? Respuesta: con **2 decimales**.
    answers: ["sha256:26591a59b0191b95937ee2ef13e23ac86f68d2352a5bf258643a7ae91a925c42"]
  - id: fluctuaciones-de-energia
    tier: 2
    prompt: |
      En el colectivo canónico, ¿cuál es la fluctuación relativa $\sqrt{\langle\Delta E^2\rangle}/\langle E\rangle$ de la energía de $10^4$ átomos de un gas ideal monoatómico? Respuesta: con **6 decimales**.
    answers: ["sha256:2e2e1567adf800a2412c662fca65e8c3b296dd70cca0994eb4a8ee0527209948"]
  - id: radiacion-del-cuerpo-negro
    tier: 2
    prompt: |
      ¿Cuál es la densidad de energía de la radiación de cuerpo negro a 300 K, en $\mu$J/m³? Respuesta: con **4 decimales**.
    answers: ["sha256:4f319fcfc47fb3950be576ea15162d42aba6164aeeb86d33a93a2e603f51ecfd"]
  - id: fraccion-condensada
    tier: 2
    prompt: |
      ¿Qué fracción de los átomos de un gas ideal de Bose está en el condensado a $T = 0{,}7\,T_c$? Respuesta: con **4 decimales**.
    answers: ["sha256:39b8274b56ee7d67507ae1618860ad38dae1a732b3aa63e1297d39855bac504b"]
  - id: debye
    tier: 3
    prompt: |
      Con el modelo de Debye, ¿cuánto vale $C_V/(3Nk_B)$ a $T = \theta_D/5$ (con la integral completa, no la ley $T^3$)? Respuesta: con **4 decimales**.
    answers: ["sha256:24580b36c7d6e73b7a9c010a515d33bcc82a8c1518ac1d426021bad34aff1091"]
  - id: longitud-de-correlacion
    tier: 3
    prompt: |
      En el modelo de Ising unidimensional sin campo con $\beta J = 1$, ¿cuál es la longitud de correlación (en espaciados de red)? Respuesta: con **4 decimales**.
    answers: ["sha256:34aee01f1de1fd89f98c6c0759b457dd1ed0aa386fa6155a0b64d93e48650733"]
  - id: decimacion
    tier: 3
    prompt: |
      Al decimar uno de cada dos espines de una cadena de Ising con acoplamiento $K = \beta J = 0{,}8$, ¿qué acoplamiento efectivo $K'$ queda? Respuesta: con **4 decimales**.
    answers: ["sha256:7c46514e6dfd170e9bd5123ab3a46c5715721e7652fe880bf0c6680b3b33578e"]
---

# Mecánica estadística avanzada: gases cuánticos, sólidos, transiciones de fase, campo medio, renormalización, Monte Carlo y fluctuaciones

[[fis-termo-estadistica]] presentó las colectividades, las estadísticas cuánticas y el modelo de Ising. Este nodo los convierte en herramientas para la
física de verdad: por qué los electrones de un metal apenas contribuyen al calor específico, cómo se condensa un gas de Bose a millonésimas de grado, por
qué los sólidos siguen la ley $T^3$, qué ocurre en un punto crítico y por qué sistemas muy distintos tienen los mismos exponentes críticos
(**universalidad**), cómo se simula todo esto (**Monte Carlo**) y cómo las fluctuaciones en equilibrio fijan la respuesta fuera de él (**fluctuación-disipación**).

## Objetivos

Al terminar sabrás:

1. Usar la colectividad gran canónica y las funciones de Bose y Fermi para gases cuánticos ideales.
2. Calcular energías de Fermi, el calor específico electrónico (Sommerfeld) y la temperatura y fracción de condensación de Bose-Einstein.
3. Aplicar los modelos de Einstein y Debye al calor específico de los sólidos, y la ley de Planck.
4. Analizar transiciones de fase con campo medio y teoría de Landau, y conocer la solución exacta de Onsager.
5. Hacer una transformación de renormalización sencilla y entender universalidad y exponentes críticos.
6. Usar Monte Carlo (Metropolis), las fluctuaciones de energía y la relación de Einstein (fluctuación-disipación).

## Qué debes dominar antes

[[fis-termo-estadistica]] (función de partición, colectividades micro, canónica y gran canónica, Bose-Einstein y Fermi-Dirac, Ising) y
[[fis-mecanica-cuantica]] (partícula en una caja, espín, indistinguibilidad).

> [!question] Test de entrada
> 1. ¿Cuál es la ocupación media de un nivel de energía $\varepsilon$ para fermiones a temperatura $T$ y potencial químico $\mu$?
> 2. ¿Cómo se obtiene la energía media a partir de $Z$ en la colectividad canónica?
> 3. ¿Qué es la longitud de onda térmica de de Broglie?
>
> Respuestas: $\frac{1}{e^{(\varepsilon - \mu)/k_BT} + 1}$; $\langle E\rangle = -\partial_\beta\ln Z$; $\lambda = h/\sqrt{2\pi mk_BT}$, el tamaño cuántico de una partícula térmica.

## 1. Para qué sirve

- **Física de materiales**: electrones en metales y semiconductores, fonones, magnetismo, superconductividad.
- **Átomos fríos y tecnologías cuánticas**: condensados de Bose-Einstein, relojes atómicos, simuladores cuánticos.
- **Astrofísica**: enanas blancas y estrellas de neutrones se sostienen por presión de degeneración de Fermi.
- **Ciencia de datos e IA**: los modelos de energía (máquinas de Boltzmann), el muestreo MCMC y el recocido simulado son mecánica estadística; los modelos
  de difusión usan la ecuación de Langevin.

## 2. Gases cuánticos ideales

En la gran canónica, cada estado de una partícula se ocupa independientemente con $\langle n\rangle = \frac{1}{e^{\beta(\varepsilon - \mu)} \mp 1}$ ($-$ bosones, $+$ fermiones). Con la densidad de
estados en 3D, $g(\varepsilon) \propto \sqrt\varepsilon$, todo se expresa con las **funciones de Bose y Fermi** $g_\nu(z)$, $f_\nu(z)$ de la fugacidad $z = e^{\beta\mu}$, y la escala la marca la
**degeneración** $n\lambda^3$: si es pequeña, el gas es clásico; si es de orden 1 o mayor, la cuántica manda.

**Fermiones a $T = 0$**: se llenan todos los estados hasta la **energía de Fermi** $E_F = \frac{\hbar^2}{2m}(3\pi^2n)^{2/3}$ (con espín $\frac12$). Para los electrones del cobre, $E_F \approx 7$ eV, que
equivale a $T_F \approx 80\,000$ K: a temperatura ambiente el gas está profundamente degenerado.

**Sommerfeld.** A $T \ll T_F$ solo se excitan los electrones a menos de $k_BT$ de la superficie de Fermi, una fracción $\sim T/T_F$. El resultado es
$C_{\text{el}} = \frac{\pi^2}{2}Nk_B\frac{T}{T_F}$: a 300 K en el cobre, $\approx 0{,}018\,Nk_B$, frente a los $\frac32Nk_B$ que predice el gas clásico. Ese factor resolvió la paradoja de Drude.

**Condensación de Bose-Einstein.** Para bosones, $\mu \le 0$ y el número de partículas en estados excitados no puede pasar de $\zeta(3/2)/\lambda^3$. Por debajo de

$$
T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}, \qquad \zeta(3/2) \approx 2{,}612,
$$

el exceso cae en el estado fundamental: una fracción $1 - (T/T_c)^{3/2}$ forma el **condensado**, una onda de materia macroscópica.

> [!example] Ejemplo resuelto 1: un condensado de rubidio
> Con $n = 10^{20}$ m⁻³ de ⁸⁷Rb ($m = 86{,}9$ u), la fórmula da $T_c \approx 400$ nK: por eso hizo falta enfriamiento láser y evaporativo (Cornell y Wieman, 1995). A $T = 0{,}6\,T_c$, la fracción
> condensada es $1 - 0{,}6^{3/2} \approx 0{,}535$. Comprueba la escala: a $T_c$, $n\lambda^3 = \zeta(3/2) \approx 2{,}6$, es decir, las funciones de onda térmicas se solapan.

**Radiación de cuerpo negro.** Fotones con $\mu = 0$: integrando la ley de Planck, $u = aT^4$ con $a = \frac{8\pi^5k_B^4}{15h^3c^3}$ (a 300 K, unos $6\ \mu$J/m³), y la potencia emitida
$\sigma T^4$ (Stefan-Boltzmann).

## 3. Sólidos: fonones

**Einstein** trata cada átomo como un oscilador cuántico de frecuencia $\omega_E$: explica que $C_V \to 0$ a baja $T$ (tercer principio) pero lo hace exponencialmente,
demasiado deprisa. **Debye** usa ondas sonoras con $g(\omega) \propto \omega^2$ hasta una frecuencia de corte $\omega_D = k_B\theta_D/\hbar$:

$$
\frac{C_V}{3Nk_B} = 3\left(\frac{T}{\theta_D}\right)^3\int_0^{\theta_D/T}\frac{x^4e^x}{(e^x - 1)^2}\,dx ,
$$

que tiende a 1 (Dulong-Petit) a alta $T$ y a $\frac{4\pi^4}{5}\left(\frac{T}{\theta_D}\right)^3$ a baja $T$: la **ley $T^3$**, que se cumple bien por debajo de $\theta_D/50$; a $\theta_D/10$ ya hay un 3 % de diferencia
(0,0758 frente a 0,0779). En metales, a muy baja $T$ domina el término electrónico lineal: $C = \gamma T + AT^3$.

## 4. Transiciones de fase y campo medio

En una transición continua, un **parámetro de orden** (la magnetización $m$) pasa de 0 a no nulo en $T_c$, y cerca de ahí las magnitudes siguen leyes de potencias:
$m \sim (T_c - T)^\beta$, $\chi \sim |T - T_c|^{-\gamma}$, $C \sim |T - T_c|^{-\alpha}$, longitud de correlación $\xi \sim |T - T_c|^{-\nu}$.

**Campo medio** (Weiss): cada espín siente el valor medio de sus $z$ vecinos, $m = \tanh(\beta zJm)$. La solución no nula aparece cuando la pendiente de la tangente en
el origen supera 1: $k_BT_c = zJ$ (4 en la red cuadrada). Cerca de $T_c$, $m \approx \sqrt{3(1 - T/T_c)}$: exponente $\beta = \frac12$.

**Teoría de Landau.** Se desarrolla la energía libre en potencias del parámetro de orden: $F = F_0 + a(T - T_c)m^2 + bm^4 - hm$. Minimizando salen los exponentes de
campo medio ($\beta = \frac12$, $\gamma = 1$, $\delta = 3$, $\alpha = 0$ con salto). Si el término cúbico no se anula por simetría, la transición es de **primer orden**.

**La realidad: Onsager (1944).** El Ising 2D se resuelve exactamente: $\sinh(2J/k_BT_c) = 1$, es decir $k_BT_c/J = \frac{2}{\ln(1 + \sqrt2)} \approx 2{,}269$, un 43 % por debajo del campo medio,
con $\beta = \frac18$ y $\nu = 1$. El campo medio sobreestima el orden porque ignora las fluctuaciones, que son decisivas en dimensiones bajas: en 1D no hay transición
a $T > 0$ (Peierls), y en 2D con simetría continua tampoco (Mermin-Wagner). Por encima de 4 dimensiones, el campo medio es exacto.

> [!example] Ejemplo resuelto 2: la cadena de Ising por matriz de transferencia
> En 1D, $Z = \operatorname{tr}T^N$ con $T = \begin{pmatrix} e^{K} & e^{-K} \\ e^{-K} & e^{K} \end{pmatrix}$ ($K = \beta J$, sin campo), de autovalores $\lambda_\pm = 2\cosh K$ y $2\operatorname{senh}K$. La correlación entre espines a distancia $r$
> es $(\lambda_-/\lambda_+)^r = \tanh^rK = e^{-r/\xi}$, con $\xi = -1/\ln\tanh K$. Con $K = 1$, $\xi \approx 3{,}67$ espaciados; $\xi$ diverge solo cuando $T \to 0$: no hay transición a temperatura finita.

## 5. Renormalización y universalidad

Cerca de $T_c$, $\xi$ diverge y el sistema se parece a sí mismo a todas las escalas. El **grupo de renormalización** (Kadanoff, Wilson) agrupa grados de libertad y
reescala: los acoplamientos fluyen, $K \to K' = R(K)$, y los puntos críticos son **puntos fijos** inestables. En la cadena de Ising, sumar uno de cada dos espines
(decimación) da exactamente $\tanh K' = \tanh^2K$, o $K' = \frac12\ln\cosh 2K$: $K$ siempre disminuye, el flujo va al punto fijo trivial $K = 0$ (desorden), y por eso no hay
transición. Los exponentes críticos dependen solo de la dimensión y de la simetría del parámetro de orden, no de los detalles: el agua en su punto crítico y
un imán uniaxial tienen los mismos exponentes (**clase de universalidad** de Ising 3D).

## 6. Simulación: Monte Carlo

Para muestrear configuraciones con probabilidad $e^{-\beta E}/Z$ sin calcular $Z$, el **algoritmo de Metropolis** construye una cadena de Markov
([[mat-procesos-estocasticos]]): se propone un cambio con energía $\Delta E$ y se acepta con probabilidad $\min(1, e^{-\beta\Delta E})$. Cumple **balance detallado**, así que la
distribución estacionaria es la de Boltzmann. Cerca de $T_c$ se ralentiza (correlaciones largas): algoritmos de clúster (Wolff, Swendsen-Wang) lo evitan.

## 7. Fluctuaciones y respuesta

En la canónica, la energía fluctúa con $\langle\Delta E^2\rangle = k_BT^2C_V$: para un gas ideal, la fluctuación relativa es $\sqrt{2/(3N)}$, despreciable para $N \sim 10^{23}$ pero medible en
sistemas pequeños. Análogamente $\langle\Delta M^2\rangle = k_BT\chi$: la respuesta a un campo la fijan las fluctuaciones espontáneas.

**Movimiento browniano.** La **ecuación de Langevin** $m\dot v = -\gamma v + \xi(t)$, con ruido blanco de intensidad $2\gamma k_BT$, da $\langle v^2\rangle = k_BT/m$ (equipartición) y un coeficiente
de difusión $D = k_BT/\gamma$: la **relación de Einstein**, el ejemplo más simple del **teorema de fluctuación-disipación** (el mismo rozamiento que frena a la partícula fija el
ruido que la agita). Con Stokes, $\gamma = 6\pi\eta r$ y $D = \frac{k_BT}{6\pi\eta r}$; midiendo $D$, Perrin determinó el número de Avogadro (1908). La fórmula de **Green-Kubo**
$D = \int_0^\infty\langle v(0)v(t)\rangle\,dt$ generaliza la idea a todos los coeficientes de transporte. La densidad de probabilidad evoluciona según la ecuación de
**Fokker-Planck**.

> [!example] Ejemplo resuelto 3: el segundo coeficiente del virial (con menos ayuda)
> Desarrolla la ecuación de van der Waals $p = \frac{RT}{V - b} - \frac{a}{V^2}$ en potencias de $1/V$ para obtener $\frac{pV}{RT} = 1 + \frac{B_2}{V} + \cdots$ con $B_2 = b - \frac{a}{RT}$. Con los valores del CO₂
> ($a = 0{,}364$, $b = 4{,}27\cdot10^{-5}$ en SI), comprueba que a 300 K $B_2 \approx -103$ cm³/mol: domina la atracción. ¿A qué temperatura (de **Boyle**) se anula?

## 8. Comprobar con un programa

$\zeta(3/2)$ y la fracción condensada, el calor específico de Debye, la magnetización de campo medio y una simulación de Metropolis del Ising 2D que
muestra el orden por debajo de la temperatura de Onsager.

```python
import math
import random

random.seed(3)

# 1. ζ(3/2) por suma con corrección de cola, y fracción condensada a 0,6 Tc.
zeta = sum(k ** -1.5 for k in range(1, 200000)) + 2 / math.sqrt(200000 - 0.5)
assert abs(zeta - 2.612375) < 1e-5
assert abs((1 - 0.6**1.5) - 0.5352) < 1e-4

# 2. Debye a T = θ/10 frente a la ley T³.
def simpson(f, a, b, n=20000):
    h = (b - a) / n
    return (f(a) + f(b) + sum(f(a + i * h) * (4 if i % 2 else 2) for i in range(1, n))) * h / 3

integrando = lambda x: x**4 * math.exp(x) / math.expm1(x) ** 2 if x > 0 else 0.0
debye = 3 / 10**3 * simpson(integrando, 0, 10)
ley_t3 = 4 * math.pi**4 / 5 * 0.1**3
assert abs(debye - 0.0758) < 1e-4 and abs(ley_t3 - 0.0779) < 1e-4

# 3. Campo medio: m = tanh(m Tc/T) a 0,99 Tc, frente a la aproximación √(3(1 − T/Tc)).
m = 0.5
for _ in range(20000):
    m = math.tanh(m / 0.99)
assert abs(m - math.sqrt(3 * 0.01)) < 2e-3

# 4. Metropolis en una red 16×16: ordenado a T = 1,5 (|m| alto) y desordenado a T = 3,5.
def magnetizacion(T, L=16, barridos=1500):
    s = [[1] * L for _ in range(L)]
    acum, n = 0.0, 0
    for barrido in range(barridos):
        for _ in range(L * L):
            i, j = random.randrange(L), random.randrange(L)
            dE = 2 * s[i][j] * (s[(i + 1) % L][j] + s[i - 1][j] + s[i][(j + 1) % L] + s[i][j - 1])
            if dE <= 0 or random.random() < math.exp(-dE / T):
                s[i][j] = -s[i][j]
        if barrido >= 500:
            acum += abs(sum(map(sum, s))) / (L * L)
            n += 1
    return acum / n

frio, caliente = magnetizacion(1.5), magnetizacion(3.5)
print("|m| a T = 1,5:", round(frio, 3), "| a T = 3,5:", round(caliente, 3), "| Tc de Onsager:", round(2 / math.log(1 + math.sqrt(2)), 4))
assert frio > 0.9 and caliente < 0.3
```

## 9. Errores típicos

- Usar Maxwell-Boltzmann cuando $n\lambda^3$ no es pequeño (electrones en metales, átomos ultrafríos).
- Olvidar la degeneración de espín (factor 2) en la energía de Fermi.
- Confiar en la ley $T^3$ a temperaturas que no son mucho menores que $\theta_D$.
- Tomar los exponentes de campo medio como exactos en 2D o 3D.
- En Monte Carlo, medir antes de equilibrar o ignorar la autocorrelación entre muestras.
- Confundir el coeficiente de rozamiento $\gamma$ con el de difusión: $D = k_BT/\gamma$.

## 10. Resumen

- Gases cuánticos: $\langle n\rangle = 1/(e^{\beta(\varepsilon-\mu)} \mp 1)$, degeneración $n\lambda^3$; $E_F = \frac{\hbar^2}{2m}(3\pi^2n)^{2/3}$; Sommerfeld $C = \frac{\pi^2}{2}Nk_BT/T_F$.
- Bose-Einstein: $T_c \propto (n/\zeta(3/2))^{2/3}$, fracción $1 - (T/T_c)^{3/2}$; Planck $u = aT^4$.
- Sólidos: Einstein, Debye, ley $T^3$, Dulong-Petit, $\gamma T + AT^3$.
- Transiciones: exponentes, campo medio $k_BT_c = zJ$, Landau, Onsager $2/\ln(1 + \sqrt2)$, Peierls y Mermin-Wagner.
- Renormalización: decimación $\tanh K' = \tanh^2K$, puntos fijos, universalidad.
- Metropolis y balance detallado; $\langle\Delta E^2\rangle = k_BT^2C$; Langevin, Einstein $D = k_BT/\gamma$, Green-Kubo, Fokker-Planck.

## Repaso: lo que debe quedarte dentro de un mes

1. $n\lambda^3$ decide si un gas es clásico o cuántico.
2. Solo los electrones cerca de la superficie de Fermi participan en lo térmico.
3. El campo medio da la forma de una transición; las fluctuaciones dan los números exactos.
4. Universalidad: cerca de un punto crítico, los detalles microscópicos no importan.
5. Las fluctuaciones en equilibrio fijan la respuesta: Einstein, Green-Kubo, fluctuación-disipación.

## Siguiente

`fis-materia-condensada-1` (bandas, fonones y magnetismo en sólidos reales), `fis-teoria-cuantica-campos` (la renormalización en física de partículas)
e `ia-modelos-generativos` (modelos de energía y difusión).
