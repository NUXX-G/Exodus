---
id: fis-mecanica-clasica
title: "Mecánica clásica: Lagrange, Hamilton, fuerzas centrales, sólido rígido, marcos en rotación y pequeñas oscilaciones"
area: fisica
trunk_level: 11
prerequisites: [fis-mecanica-newtoniana, mat-calculo-multivariable, mat-algebra-lineal]
academic_sources:
  - "Goldstein, H.; Poole, C.; Safko, J. Classical Mechanics, 3ª ed. Addison-Wesley, 2002."
  - "Landau, L. D.; Lifshitz, E. M. Mechanics (Course of Theoretical Physics, Vol. 1), 3ª ed. Pergamon, 1976 (reimpr. Butterworth-Heinemann)."
  - "Taylor, J. R. Classical Mechanics. University Science Books, 2005."
  - "Arnold, V. I. Mathematical Methods of Classical Mechanics, 2ª ed. Springer (Graduate Texts in Mathematics, 60), 1989."
ctf_flag: "sha256:a7b948b4c2e124a6154c2e21d714878808074f387a59e9166794eb01deb0e354"
hints:
  - "(a) La conservación de la energía convierte el periodo en una integral; no uses la aproximación de ángulo pequeño, que es justo lo que el apartado mide. (b) La ecuación de Kepler es trascendente: se resuelve iterando, y con excentricidad alta la elección del punto inicial importa. (c) Linealiza las ecuaciones de Lagrange alrededor del equilibrio: obtienes un problema de autovalores 2×2."
  - "(a) La integral es una integral elíptica completa de primera especie: scipy.special.ellipk(m) con m = sin²(θ₀/2), o la media aritmético-geométrica, que converge cuadráticamente en media docena de pasos. (b) Newton-Raphson desde E₀ = π, o bisección sobre [0, π]. (c) det(K − ω²M) = 0 es una ecuación de segundo grado en ω². Trabaja con al menos 12 cifras."
  - "Landau & Lifshitz, §11 (periodo exacto del péndulo), §15 (problema de Kepler) y §23 (pequeñas oscilaciones con varios grados de libertad). Goldstein, capítulo 3 (ecuación de Kepler) y capítulo 6. Documentación: docs.scipy.org, scipy.special.ellipk — atención a que su argumento es m = k², no k."
exercises:
  - id: frecuencia-de-pequenas-oscilaciones
    tier: 1
    prompt: |
      A partir del lagrangiano del péndulo simple, $L = \tfrac12 m\ell^2\dot\theta^2 + mg\ell\cos\theta$, obtén la frecuencia angular de las pequeñas oscilaciones para $\ell = 0{,}4$ m y $g = 9{,}81$ m/s$^2$. Respuesta: en rad/s con **4 decimales**.
    answers: ["sha256:ee2da699c9b347d74eff0189cef34820dce0befb51347b3872055c1f8a417c40"]
  - id: momento-generalizado
    tier: 1
    prompt: |
      Una partícula de masa $2$ kg se mueve en un plano con $L = \tfrac12 m(\dot r^2 + r^2\dot\theta^2) - V(r)$. ¿Cuánto vale su momento generalizado $p_\theta = \partial L/\partial\dot\theta$ cuando $r = 3$ m y $\dot\theta = 0{,}5$ rad/s? Respuesta: un número (en kg·m$^2$/s).
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: maquina-de-atwood
    tier: 1
    prompt: |
      En una máquina de Atwood ideal cuelgan masas de $3$ kg y $1$ kg ($g = 9{,}81$ m/s$^2$). Con la coordenada generalizada $x$ (lo que baja la masa grande), escribe el lagrangiano y halla la aceleración. Respuesta: en m/s$^2$.
    answers: ["sha256:a14230448df86a95cf7f4795ad953423144d8c106af46459ec3a82d79c8a0fd3"]
  - id: velocidad-de-escape
    tier: 1
    prompt: |
      Con $GM_\oplus = 3{,}986\cdot10^{14}$ m$^3$/s$^2$ y $R_\oplus = 6371$ km, ¿cuál es la velocidad de escape desde la superficie terrestre, en km/s? Respuesta: con **2 decimales**.
    answers: ["sha256:eb5f0294cb4101490fe9d6d6491fb2b2d5e144b7326cc387d3b74a4516fe5013"]
  - id: periodo-orbital
    tier: 1
    prompt: |
      ¿Cuál es el periodo de una órbita circular de $7000$ km de radio alrededor de la Tierra ($GM = 3{,}986\cdot10^{14}$ m$^3$/s$^2$), en minutos? Respuesta: con **2 decimales**.
    answers: ["sha256:b49a507c745f95052eb77e468a92a0ed0c5abe81f3adad85f55a4cd13014b022"]
  - id: energia-de-un-satelite
    tier: 1
    prompt: |
      ¿Qué energía mecánica total tiene un satélite de $1000$ kg en órbita circular de $7000$ km de radio ($GM = 3{,}986\cdot10^{14}$)? Recuerda que en una órbita circular $E = U/2$ (teorema del virial). Respuesta: en gigajulios, con **2 decimales**.
    answers: ["sha256:ab194961633414ba3780505a6bbe839a0396190bbb29686e9c7cbacc45bf7c7c"]
  - id: oscilador-hamiltoniano
    tier: 2
    prompt: |
      Un oscilador tiene $H = \frac{p^2}{2m} + \frac{kx^2}{2}$ con $m = 1$ y $k = 4$, y parte de $x = 1$, $p = 0$. Con las ecuaciones de Hamilton, ¿cuál es su periodo y el valor máximo de $\lvert p\rvert$? Respuesta: `periodo;pmax`, el periodo con **4 decimales**.
    answers: ["sha256:7c6d7d2f3cd877633d1506f06fb8b90d0563e79bd4ca86e88d3ed5971b0e2135"]
  - id: modos-normales
    tier: 2
    prompt: |
      Dos masas de $1$ kg están unidas a dos paredes por muelles de $k = 4$ N/m y entre sí por uno de $k' = 1$ N/m. ¿Cuáles son las frecuencias normales $\omega_1 < \omega_2$, en rad/s? Respuesta: `w1;w2`, la segunda con **4 decimales**.
    answers: ["sha256:2b2c80aea8941d9abb2a1df6bae8d097cb89ef7a3091dd84c331ec993c2b2584"]
  - id: momento-de-inercia
    tier: 2
    prompt: |
      ¿Cuál es el momento de inercia de una varilla delgada y uniforme de $2$ kg y $3$ m respecto a un eje perpendicular que pasa por uno de sus extremos, en kg·m$^2$? Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: rodadura-por-un-plano
    tier: 2
    prompt: |
      Una esfera maciza rueda sin deslizar por un plano inclinado $30^\circ$ ($g = 9{,}81$ m/s$^2$, $I = \tfrac25 mr^2$). ¿Cuál es la aceleración de su centro, en m/s$^2$? Respuesta: con **3 decimales**.
    answers: ["sha256:6f7e7d5d969c3abc7c7077d6ee68ec34355c8faf3440821df7324e06a682adb6"]
  - id: pendulo-de-foucault
    tier: 2
    prompt: |
      El plano de oscilación de un péndulo de Foucault gira con velocidad angular $\Omega\sin\varphi$, con $\Omega$ la rotación terrestre (un giro por día sidéreo, $23{,}9345$ h) y $\varphi$ la latitud. ¿Cuántas horas tarda en dar una vuelta completa en Madrid ($\varphi = 40{,}42^\circ$)? Respuesta: con **1 decimal**.
    answers: ["sha256:b4dbbe111c5752eedfe71bb4eb603837d4d8522fa90a14ff032714b45cc1f4cb"]
  - id: apogeo-de-una-orbita
    tier: 3
    prompt: |
      Un satélite está a $r_0 = 7000$ km del centro de la Tierra con velocidad $8{,}3$ km/s perpendicular al radio ($GM = 3{,}986\cdot10^{14}$ m$^3$/s$^2$). Ese punto es el perigeo. ¿A qué distancia del centro está el apogeo, en km? (Usa la excentricidad $e = \frac{r_0v_0^2}{GM} - 1$.) Respuesta: un entero (redondeado).
    answers: ["sha256:0cfe3f9259151e7a5fc2f987ebb8c413066a3ea4528d5b329a00503f7a7fb0b3"]
  - id: periodo-exacto-del-pendulo
    tier: 3
    prompt: |
      Para un péndulo soltado desde $60^\circ$, ¿cuánto vale el cociente entre su periodo exacto y el de pequeñas oscilaciones, $T/T_0 = \frac{2}{\pi}K(\sin 30^\circ)$? Respuesta: con **4 decimales**.
    answers: ["sha256:766a9ea50646cebd349d565726a6821bd5a173c79e667d56bad3e41f108c287c"]
  - id: aro-giratorio
    tier: 3
    prompt: |
      Una cuenta se desliza sin rozamiento por un aro de radio $R = 0{,}2$ m que gira con $\omega = 10$ rad/s alrededor de su diámetro vertical. Con el lagrangiano $L = \tfrac12 mR^2(\dot\theta^2 + \omega^2\sin^2\theta) + mgR\cos\theta$ ($\theta$ desde el punto más bajo), halla el ángulo del equilibrio estable fuera del fondo, en grados ($g = 9{,}81$). Respuesta: con **2 decimales**.
    answers: ["sha256:e626f46f84316fabe051ee37510e1e9ec1b64c86ba72600d5bc9ef293423c1a0"]
  - id: precesion-del-giroscopo
    tier: 3
    prompt: |
      Un giróscopo de $0{,}5$ kg, con su centro de masas a $5$ cm del punto de apoyo y eje horizontal, gira a $200$ rad/s con momento de inercia $10^{-3}$ kg·m$^2$ respecto a su eje. ¿Con qué velocidad angular precesiona, $\Omega = \frac{mgr}{I\omega}$, en rad/s ($g = 9{,}81$)? Respuesta: con **3 decimales**.
    answers: ["sha256:3094eaad950835eaee9a996f9229ca1153399d83d89c9673b5fbbf379dca4ea7"]
  - id: masa-reducida
    tier: 3
    prompt: |
      Dos bloques de $3$ kg y $1$ kg, libres sobre una mesa sin rozamiento, están unidos por un muelle de $12$ N/m. Su movimiento relativo es el de una sola masa, la masa reducida $\mu$. ¿Cuánto vale $\mu$ y el periodo de la oscilación, en segundos? Respuesta: `mu;periodo`, el periodo con **4 decimales**.
    answers: ["sha256:5495746abee3804b5d48c7c535a4ef18026fe13cddd82d6dac2fb5634fe5932f"]
  - id: verlet-oscilador
    tier: 3
    type: codigo
    language: cualquiera
    prompt: |
      **Ejercicio de código (física computacional).** Un oscilador armónico $m\ddot x = -kx$. Lee de la entrada estándar
      `m k x0 v0 dt N` e integra $N$ pasos con el método de **Verlet de velocidades**, exactamente en este orden:
      $$
      a_0 = -\tfrac{k}{m}x_0,\qquad x_{n+1} = x_n + v_n\,\Delta t + \tfrac12 a_n \Delta t^2,\qquad a_{n+1} = -\tfrac{k}{m}x_{n+1},\qquad v_{n+1} = v_n + \tfrac12(a_n + a_{n+1})\,\Delta t .
      $$
      Con $E = \tfrac12 m v^2 + \tfrac12 k x^2$, escribe (como `printf` de C o los f-strings de Python):

      ```
      x: <x_N con 6 decimales>
      v: <v_N con 6 decimales>
      deriva: <(E_N − E_0)/E_0 en notación científica con 3 decimales, p. ej. 1.234e-05>
      ```

      Usa el lenguaje que quieras (la plantilla es Python). Después, piensa: ¿por qué la deriva no crece sin límite aunque
      hagas $10^5$ pasos (caso `muchas-vueltas`), y qué pasa al dividir $\Delta t$ entre 2? (Verlet es simpléctico: el error
      de energía está acotado y es de orden $\Delta t^2$.)
    template: |
      import sys

      # Lee «m k x0 v0 dt N», integra con Verlet de velocidades y escribe x, v y la deriva relativa de la energía.
      m, k, x0, v0, dt, n = sys.stdin.read().split()
      ...
    cases: [{"name":"un-periodo","stdin":"1 1 1 0 0.01 628\n"},{"name":"rigido","stdin":"0.5 200 0.1 0 0.002 2500\n"},{"name":"con-velocidad","stdin":"2 8 0 3 0.01 1000\n"},{"name":"paso-grande","stdin":"1 1 1 0 0.5 40\n"},{"name":"muchas-vueltas","stdin":"1 4 0.5 1 0.005 100000\n"}]
    answers: ["sha256:1956f6c8d48555a8fb7a14ddbd1913da490c9d9efd3c4bdd64fa2cf1b99d8803"]
---

# Mecánica clásica: Lagrange, Hamilton, fuerzas centrales, sólido rígido, marcos en rotación y pequeñas oscilaciones

[[fis-mecanica-newtoniana]] resolvió problemas sumando fuerzas vectorialmente. Funciona, pero se complica en cuanto hay **ligaduras** (una cuenta
ensartada en un aro, un péndulo doble, un brazo robótico): hay que introducir fuerzas de reacción desconocidas y eliminarlas después. Lagrange y
Hamilton reformulan la misma física con **energías** en vez de fuerzas y con las coordenadas que mejor describen el sistema. No añaden física a
Newton, pero sí una estructura (acción, simetrías, espacio de fases) sobre la que se construyen la mecánica cuántica, la física estadística, la
teoría de campos y el control de robots.

## Objetivos

Al terminar sabrás:

1. Elegir coordenadas generalizadas, escribir el lagrangiano $L = T - V$ y obtener las ecuaciones de Euler-Lagrange.
2. Reconocer coordenadas cíclicas y usar el teorema de Noether para encontrar cantidades conservadas.
3. Pasar al hamiltoniano, escribir las ecuaciones de Hamilton y razonar en el espacio de fases.
4. Reducir el problema de dos cuerpos a uno (masa reducida), usar el potencial efectivo y calcular órbitas keplerianas, energías y periodos.
5. Calcular momentos de inercia, tratar la rodadura y la precesión de un giróscopo.
6. Trabajar en marcos que giran (fuerzas centrífuga y de Coriolis, péndulo de Foucault).
7. Linealizar alrededor de un equilibrio y hallar frecuencias y modos normales con $\det(K - \omega^2M) = 0$.

## Qué debes dominar antes

[[fis-mecanica-newtoniana]] (leyes de Newton, energía, momento angular, órbitas), [[mat-calculo-multivariable]] (derivadas parciales, gradiente,
regla de la cadena) y [[mat-algebra-lineal]] (autovalores y autovectores de matrices simétricas).

> [!question] Test de entrada
> 1. Deriva $\frac12 m\ell^2\dot\theta^2$ respecto a $\dot\theta$.
> 2. ¿Qué fuerza deriva del potencial $V(r) = -k/r$?
> 3. ¿Cuáles son los autovalores de $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$?
>
> Respuestas: $m\ell^2\dot\theta$; $\mathbf F = -\nabla V = -\frac{k}{r^2}\,\hat{\mathbf r}$ (atractiva); $1$ y $3$.

## 1. Para qué sirve

- **Robótica**: las ecuaciones dinámicas de un brazo de $n$ articulaciones, $M(q)\ddot q + C(q, \dot q)\dot q + g(q) = \tau$, salen directamente de un
  lagrangiano con los ángulos como coordenadas.
- **Astronáutica**: órbitas, maniobras de transferencia y posición de un satélite en función del tiempo (ecuación de Kepler).
- **Física moderna**: el hamiltoniano y el corchete de Poisson pasan casi intactos a [[fis-mecanica-cuantica]]; el espacio de fases y el teorema de
  Liouville son el punto de partida de [[fis-termo-estadistica]].
- **Ingeniería estructural y vibraciones**: los modos normales explican por qué un puente o un ala resuenan a ciertas frecuencias.
- **Cálculo numérico**: los integradores simplécticos, que respetan la estructura hamiltoniana, simulan órbitas durante millones de vueltas sin que
  la energía se dispare ([[mat-analisis-numerico]]).

## 2. Coordenadas generalizadas y el lagrangiano

Una **ligadura holónoma** es una relación entre coordenadas, como $x^2 + y^2 = \ell^2$ para un péndulo. Si un sistema de $N$ partículas tiene $k$
ligaduras holónomas, le bastan $n = 3N - k$ números para fijar su configuración: las **coordenadas generalizadas** $q_1, \dots, q_n$, elegidas para
que las ligaduras se cumplan solas (el ángulo $\theta$ del péndulo). $n$ es el número de **grados de libertad**.

Se escriben la energía cinética $T$ y la potencial $V$ en función de $q$ y $\dot q$, y el **lagrangiano** es

$$
L(q, \dot q, t) = T - V .
$$

La **acción** de una trayectoria es $S[q] = \int_{t_1}^{t_2} L\, dt$.

**Principio de Hamilton.** Entre dos configuraciones fijas en $t_1$ y $t_2$, la trayectoria real hace **estacionaria** la acción: $\delta S = 0$.
(Suele llamarse «de mínima acción», aunque solo se exige estacionaria.)

**Teorema (ecuaciones de Euler-Lagrange).** $S$ es estacionaria si y solo si

$$
\frac{d}{dt}\frac{\partial L}{\partial \dot q_i} - \frac{\partial L}{\partial q_i} = 0 \qquad (i = 1, \dots, n).
$$

*Demostración.* Sea $q(t) + \varepsilon\,\eta(t)$ una variación con $\eta(t_1) = \eta(t_2) = 0$. Derivando bajo la integral,
$\frac{dS}{d\varepsilon}\big|_0 = \int \bigl(\frac{\partial L}{\partial q}\eta + \frac{\partial L}{\partial \dot q}\dot\eta\bigr)dt$. Integrando por
partes el segundo término, y como los términos de contorno se anulan, queda
$\int \bigl(\frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot q}\bigr)\eta\, dt = 0$ para toda $\eta$, lo que obliga a que el
paréntesis sea nulo (lema fundamental del cálculo de variaciones). $\blacksquare$

Las ecuaciones tienen **la misma forma en cualquier sistema de coordenadas** y las fuerzas de ligadura (la tensión del hilo, la normal del aro)
**no aparecen**: no hacen trabajo en los desplazamientos compatibles con la ligadura.

> [!example] Ejemplo resuelto 1: el péndulo simple
> Coordenada: $\theta$, ángulo con la vertical. La masa está en $(\ell\sin\theta, -\ell\cos\theta)$, luego $T = \frac12 m\ell^2\dot\theta^2$ y
> $V = -mg\ell\cos\theta$. Así $L = \frac12 m\ell^2\dot\theta^2 + mg\ell\cos\theta$.
>
> $\frac{\partial L}{\partial\dot\theta} = m\ell^2\dot\theta$, $\frac{d}{dt}(m\ell^2\dot\theta) = m\ell^2\ddot\theta$ y $\frac{\partial L}{\partial\theta} = -mg\ell\sin\theta$.
> Euler-Lagrange: $m\ell^2\ddot\theta + mg\ell\sin\theta = 0$, es decir, $\ddot\theta + \frac{g}{\ell}\sin\theta = 0$.
>
> Para ángulos pequeños, $\sin\theta \approx \theta$: un oscilador armónico con $\omega_0 = \sqrt{g/\ell}$ y $T_0 = 2\pi\sqrt{\ell/g}$. La tensión del hilo no
> ha aparecido en ningún momento.

> [!example] Ejemplo resuelto 2: la máquina de Atwood (completa tú el último paso)
> Dos masas $m_1 > m_2$ cuelgan de una polea ideal. Una sola coordenada: $x$, lo que baja $m_1$ (y sube $m_2$, porque el hilo no se estira).
> $T = \frac12(m_1 + m_2)\dot x^2$ y $V = -m_1gx + m_2gx$, luego $L = \frac12(m_1 + m_2)\dot x^2 + (m_1 - m_2)gx$.
>
> Euler-Lagrange da $(m_1 + m_2)\ddot x = (m_1 - m_2)g$. Despeja $\ddot x$ y comprueba que obtienes lo mismo que con Newton planteando una ecuación
> para cada masa con la tensión del hilo como incógnita (dos ecuaciones, dos incógnitas).

**Receta.** (1) Elige $q$; (2) escribe las posiciones en función de $q$ y deriva para obtener $T$; (3) escribe $V$; (4) $L = T - V$; (5) una ecuación
de Euler-Lagrange por coordenada.

## 3. Momentos generalizados, simetrías y leyes de conservación

El **momento generalizado** conjugado de $q_i$ es $p_i = \partial L/\partial \dot q_i$. No siempre es un momento lineal: para el ángulo polar de una
partícula en el plano, con $L = \frac12 m(\dot r^2 + r^2\dot\theta^2) - V(r)$, resulta $p_\theta = mr^2\dot\theta$, el **momento angular**.

Si $L$ no depende de una coordenada $q_i$ (coordenada **cíclica**), Euler-Lagrange se reduce a $\dot p_i = 0$: **$p_i$ se conserva**. En el ejemplo,
$V$ depende de $r$ pero no de $\theta$, luego el momento angular se conserva en toda fuerza central.

**Teorema (Noether).** A cada simetría continua del lagrangiano le corresponde una cantidad conservada.

| Simetría de $L$ | Cantidad conservada |
|---|---|
| Traslación en el espacio | Momento lineal |
| Rotación alrededor de un eje | Momento angular respecto a ese eje |
| Traslación en el tiempo ($L$ no depende de $t$) | Energía (función $h = \sum_i p_i\dot q_i - L$) |

Encontrar las coordenadas cíclicas es la forma más rápida de reducir un problema: cada una elimina un grado de libertad.

## 4. Hamilton y el espacio de fases

La **transformada de Legendre** cambia $\dot q$ por $p$ como variable: el **hamiltoniano** es

$$
H(q, p, t) = \sum_i p_i\dot q_i - L ,
$$

expresado en función de $q$ y $p$. Si las ligaduras no dependen del tiempo y $V$ no depende de $\dot q$, entonces $H = T + V$, la energía.
Las ecuaciones del movimiento pasan a ser $2n$ de **primer orden**:

$$
\dot q_i = \frac{\partial H}{\partial p_i}, \qquad \dot p_i = -\frac{\partial H}{\partial q_i} .
$$

> [!example] Ejemplo resuelto 3: el oscilador armónico
> $L = \frac12 m\dot x^2 - \frac12 kx^2$, $p = m\dot x$, $H = \frac{p^2}{2m} + \frac12 kx^2$. Hamilton: $\dot x = p/m$ y $\dot p = -kx$. Juntando,
> $m\ddot x = -kx$. En el plano $(x, p)$ las trayectorias son las elipses $H = E$: el estado gira por ellas con periodo $2\pi\sqrt{m/k}$, y
> $\lvert p\rvert$ es máximo al pasar por $x = 0$, donde toda la energía es cinética: $p_{\max} = \sqrt{2mE}$.

El estado es un punto del **espacio de fases** $(q, p)$ y la evolución, un flujo en él. Dos trayectorias no se cruzan nunca (el estado determina el
futuro).

**Teorema (Liouville).** El flujo hamiltoniano conserva el volumen del espacio de fases.

*Demostración.* La divergencia del campo $(\dot q, \dot p)$ es
$\sum_i \bigl(\frac{\partial^2 H}{\partial q_i \partial p_i} - \frac{\partial^2 H}{\partial p_i \partial q_i}\bigr) = 0$. $\blacksquare$

El **corchete de Poisson** $\{f, g\} = \sum_i \bigl(\frac{\partial f}{\partial q_i}\frac{\partial g}{\partial p_i} - \frac{\partial f}{\partial p_i}\frac{\partial g}{\partial q_i}\bigr)$
da la evolución de cualquier magnitud, $\dot f = \{f, H\} + \partial f/\partial t$; $f$ se conserva si su corchete con $H$ es nulo. En
[[fis-mecanica-cuantica]] el corchete se convierte en el conmutador.

**Consecuencia numérica.** Euler explícito aplicado al oscilador multiplica la energía por $(1 + h^2\omega^2)$ en cada paso: la órbita espiral hacia
fuera. El **Euler simpléctico** (actualizar primero $p$ con la $q$ vieja y luego $q$ con la $p$ nueva) conserva el área en el espacio de fases y su
energía solo oscila un poco alrededor del valor exacto, sin derivar.

## 5. Fuerzas centrales: dos cuerpos, potencial efectivo y Kepler

**Dos cuerpos.** Con el centro de masas $\mathbf R$ y la posición relativa $\mathbf r = \mathbf r_1 - \mathbf r_2$, el lagrangiano de dos cuerpos con
interacción $V(\lvert\mathbf r\rvert)$ se separa en

$$
L = \tfrac12(m_1 + m_2)\dot{\mathbf R}^2 + \tfrac12\mu\,\dot{\mathbf r}^2 - V(r), \qquad \mu = \frac{m_1m_2}{m_1 + m_2} .
$$

$\mathbf R$ es cíclica (el centro de masas se mueve con velocidad constante) y queda un problema de **un solo cuerpo de masa reducida $\mu$**. Si
$m_2 \gg m_1$, $\mu \approx m_1$ (un satélite y la Tierra). Para dos masas unidas por un muelle $k$, la oscilación relativa tiene periodo
$2\pi\sqrt{\mu/k}$.

**Potencial efectivo.** Con $\ell = \mu r^2\dot\theta$ conservado, la energía es $E = \frac12\mu\dot r^2 + V_{\text{ef}}(r)$ con

$$
V_{\text{ef}}(r) = V(r) + \frac{\ell^2}{2\mu r^2} .
$$

El movimiento radial es unidimensional: $r$ oscila entre los puntos donde $V_{\text{ef}} = E$.

**Kepler.** Para $V = -k/r$ (gravedad, $k = GMm$) las órbitas son cónicas con el centro de fuerzas en un foco,
$r(\theta) = \frac{p}{1 + e\cos\theta}$, con $p = \frac{\ell^2}{\mu k}$ y excentricidad $e$. Las ligadas ($E < 0$) son elipses de semieje mayor $a$, y

$$
E = -\frac{k}{2a}, \qquad T = 2\pi\sqrt{\frac{a^3}{GM}}, \qquad v^2 = GM\left(\frac2r - \frac1a\right) \quad\text{(ecuación vis-viva)}.
$$

Casos particulares: en una órbita circular la energía cinética es la mitad de $\lvert U\rvert$ y $E = U/2 = -\frac{GMm}{2r}$ (**teorema del virial**);
la **velocidad de escape** ($E = 0$) desde una distancia $R$ es $\sqrt{2GM/R}$.

> [!example] Ejemplo resuelto 4: del perigeo al apogeo
> En el perigeo $r_0$ la velocidad $v_0$ es perpendicular al radio, así que $\ell/m = r_0v_0$ y $p = \frac{r_0^2v_0^2}{GM}$. Como el perigeo es
> $\theta = 0$, $r_0 = \frac{p}{1 + e}$, de donde
> $e = \frac{r_0v_0^2}{GM} - 1$. El apogeo está en $\theta = \pi$: $r_a = \frac{p}{1 - e} = r_0\frac{1 + e}{1 - e}$.
>
> Comprobación: si $v_0^2 = GM/r_0$ (velocidad circular), $e = 0$ y $r_a = r_0$; si $v_0^2 = 2GM/r_0$ (escape), $e = 1$ y el apogeo se va al infinito.

> [!example] Ejemplo resuelto 5: transferencia de Hohmann (con menos ayuda)
> Para subir de una órbita circular de $r_1 = 6678$ km (300 km de altura) a la geoestacionaria ($r_2 = 42\,164$ km) se usa una elipse con perigeo
> $r_1$ y apogeo $r_2$, de semieje $a = (r_1 + r_2)/2$. La vis-viva en $r_1$ da la velocidad necesaria; restando la circular,
> $\Delta v_1 = \sqrt{GM/r_1}\,\bigl(\sqrt{2r_2/(r_1 + r_2)} - 1\bigr) \approx 2{,}43$ km/s. El viaje dura medio periodo de la elipse,
> $\pi\sqrt{a^3/GM} \approx 5{,}28$ h. Calcula tú, con la vis-viva, el segundo impulso en $r_2$.

**Posición en función del tiempo.** No tiene expresión elemental. Con la **anomalía media** $M = 2\pi t/T$ (un ángulo que crece uniformemente,
contando desde el perigeo) y la **anomalía excéntrica** $E$, se cumple la **ecuación de Kepler**

$$
M = E - e\sin E ,
$$

y la distancia es $r = a(1 - e\cos E)$. Como $f(E) = E - e\sin E - M$ es estrictamente creciente para $0 \le e < 1$, la solución es única; el método de
Newton, $E_{n+1} = E_n - \frac{f(E_n)}{1 - e\cos E_n}$, converge cuadráticamente cerca de ella. Con $e$ próxima a $1$, empezar en $E_0 = M$ puede dar
pasos enormes donde $1 - e\cos E \approx 0$; empezar en $E_0 = \pi$ es seguro. Valor de control: con $e = 0{,}5$ y $M = 1$, $E = 1{,}498701133\ldots$

## 6. El péndulo más allá del ángulo pequeño

Soltando desde $\theta_0$ en reposo, la energía da $\frac12\ell^2\dot\theta^2 = g\ell(\cos\theta - \cos\theta_0)$, y el periodo exacto es

$$
T = 4\sqrt{\frac{\ell}{2g}} \int_0^{\theta_0} \frac{d\theta}{\sqrt{\cos\theta - \cos\theta_0}} = 4\sqrt{\frac{\ell}{g}}\; K(k), \qquad k = \sin\frac{\theta_0}{2},
$$

donde, tras el cambio $\sin(\theta/2) = k\sin\varphi$, aparece la **integral elíptica completa de primera especie**
$K(k) = \int_0^{\pi/2} \frac{d\varphi}{\sqrt{1 - k^2\sin^2\varphi}}$. Por tanto $\frac{T}{T_0} = \frac2\pi K\!\left(\sin\frac{\theta_0}{2}\right)$, que vale $1$ en el
límite $\theta_0 \to 0$ y crece sin cota cuando $\theta_0 \to 180°$.

**Teorema (Gauss).** $K(k) = \dfrac{\pi}{2\, \operatorname{AGM}\!\bigl(1, \sqrt{1 - k^2}\bigr)}$, donde $\operatorname{AGM}(a, b)$ es el límite común de
$a_{n+1} = \frac{a_n + b_n}{2}$, $b_{n+1} = \sqrt{a_nb_n}$ (media aritmético-geométrica). En consecuencia,

$$
\frac{T}{T_0} = \frac{1}{\operatorname{AGM}\bigl(1, \cos(\theta_0/2)\bigr)} .
$$

La AGM duplica las cifras correctas en cada paso: cinco o seis iteraciones bastan para la precisión de un `double`. Valor de control: para
$\theta_0 = 90°$, $T/T_0 = 1{,}180340599\ldots$

## 7. Sólido rígido

Un sólido tiene $6$ grados de libertad: la posición del centro de masas y la orientación. Su energía cinética es la del centro de masas más la de
rotación, $T = \frac12 Mv_{\text{cm}}^2 + \frac12 I\omega^2$ si gira alrededor de un eje fijo de dirección.

**Momento de inercia** respecto a un eje: $I = \sum m_ir_i^2 = \int r^2\, dm$, con $r$ la distancia al eje. Valores básicos (masa $M$):

| Cuerpo | Eje | $I$ |
|---|---|---|
| Varilla de longitud $L$ | perpendicular, por el centro | $\frac{1}{12}ML^2$ |
| Aro de radio $R$ | su eje | $MR^2$ |
| Disco o cilindro macizo | su eje | $\frac12 MR^2$ |
| Esfera maciza | un diámetro | $\frac25 MR^2$ |

**Teorema de Steiner (ejes paralelos).** $I = I_{\text{cm}} + Md^2$, con $d$ la distancia entre el eje y el paralelo por el centro de masas.

**Rodadura sin deslizar.** La ligadura $v = \omega R$ deja una coordenada: $x$, la distancia recorrida por un plano inclinado un ángulo $\alpha$.
$T = \frac12\bigl(M + I/R^2\bigr)\dot x^2$ y $V = -Mgx\sin\alpha$, y Euler-Lagrange da

$$
a = \frac{g\sin\alpha}{1 + I/(MR^2)} .
$$

Un aro ($I/(MR^2) = 1$) baja con $a = \frac12 g\sin\alpha$ y un cilindro macizo con $\frac23 g\sin\alpha$: en una carrera ganan los cuerpos con la masa
más concentrada cerca del eje, y el resultado no depende ni de $M$ ni de $R$.

**Giróscopo.** Un rotor que gira deprisa con momento angular $L = I\omega$ alrededor de un eje horizontal, apoyado en un punto a distancia $r$ de su
centro de masas, sufre el par $\tau = mgr$ del peso, perpendicular a $\mathbf L$. Como $\dot{\mathbf L} = \boldsymbol\tau$ solo cambia la **dirección** de
$\mathbf L$, el eje gira en horizontal (**precesión**) con

$$
\Omega = \frac{mgr}{I\omega} ,
$$

aproximación válida cuando el giro propio es mucho más rápido que la precesión. Ejemplo: una rueda de bicicleta de $2$ kg con $I = 0{,}08$ kg·m$^2$, a
$15$ cm del apoyo y girando a $40$ rad/s, precesiona a $\frac{2 \cdot 9{,}81 \cdot 0{,}15}{0{,}08 \cdot 40} \approx 0{,}920$ rad/s. Cuanto más rápido gira,
más despacio precesiona.

## 8. Marcos que giran

En un marco que gira con velocidad angular constante $\boldsymbol\omega$, la segunda ley necesita dos **fuerzas ficticias**:

$$
m\,\mathbf a_{\text{rel}} = \mathbf F - m\,\boldsymbol\omega \times (\boldsymbol\omega \times \mathbf r) - 2m\,\boldsymbol\omega \times \mathbf v_{\text{rel}} ,
$$

la **centrífuga** (hacia fuera del eje, de módulo $m\omega^2\rho$ con $\rho$ la distancia al eje) y la de **Coriolis** (perpendicular a la velocidad
relativa). Con Lagrange no hace falta introducirlas: basta escribir $T$ en un marco inercial usando coordenadas que giran.

> [!example] Ejemplo resuelto 6: cuenta en un aro que gira
> Un aro de radio $R$ gira con $\omega$ constante alrededor de su diámetro vertical; $\theta$ es el ángulo de la cuenta desde el punto más bajo. La
> cuenta tiene velocidad $R\dot\theta$ a lo largo del aro y $\omega R\sin\theta$ por el giro, perpendiculares entre sí:
> $L = \frac12 mR^2(\dot\theta^2 + \omega^2\sin^2\theta) + mgR\cos\theta$.
>
> $\theta$ no es cíclica, pero $L$ no depende de $t$: se conserva $h = \frac12 mR^2\dot\theta^2 + U_{\text{ef}}(\theta)$ con
> $U_{\text{ef}} = -mgR\cos\theta - \frac12 mR^2\omega^2\sin^2\theta$. Los equilibrios anulan
> $U_{\text{ef}}' = mR\sin\theta\,(g - R\omega^2\cos\theta)$: $\theta = 0$ y, si $\omega^2 > g/R$, $\cos\theta = \frac{g}{\omega^2R}$. Por encima de esa
> velocidad crítica el fondo se vuelve inestable y la cuenta sube hasta el nuevo mínimo de $U_{\text{ef}}$.

**Péndulo de Foucault.** La Tierra gira con $\Omega = 2\pi/(\text{día sidéreo})$, y el día sidéreo dura $23{,}9345$ h, no $24$. Coriolis hace girar el
plano de oscilación de un péndulo con velocidad angular $\Omega\sin\varphi$, con $\varphi$ la latitud: una vuelta por día sidéreo en el polo,
ninguna en el ecuador; en París ($\varphi = 48{,}85°$) la vuelta tarda unas $31{,}8$ h. Foucault lo mostró en París en 1851: la rotación de
la Tierra, medida sin mirar al cielo.

## 9. Pequeñas oscilaciones y modos normales

Cerca de un equilibrio estable $q^*$ se aproxima el lagrangiano a segundo orden en $\mathbf q - \mathbf q^*$ (que se sigue llamando $\mathbf q$):

$$
L \approx \tfrac12\, \dot{\mathbf q}^{\mathsf T} M\, \dot{\mathbf q} - \tfrac12\, \mathbf q^{\mathsf T} K\, \mathbf q ,
$$

con $M$ (masas) y $K$ (rigideces, la hessiana de $V$) simétricas y $M$ definida positiva. Euler-Lagrange da $M\ddot{\mathbf q} = -K\mathbf q$, y
probando $\mathbf q = \mathbf a\cos\omega t$ resulta el **problema generalizado de autovalores**

$$
(K - \omega^2M)\,\mathbf a = 0, \qquad \det\bigl(K - \omega^2M\bigr) = 0 .
$$

Sus soluciones son las **frecuencias normales**, y los autovectores, los **modos normales**: patrones en los que todas las partes oscilan a la misma
frecuencia. El movimiento general es superposición de modos; es el teorema espectral de [[mat-algebra-lineal]] aplicado a la física.

> [!example] Ejemplo resuelto 7: dos masas y tres muelles
> Dos masas $m$ entre dos paredes, unidas a ellas por muelles $k$ y entre sí por uno $k'$. Con los desplazamientos $x_1, x_2$,
> $V = \frac12 kx_1^2 + \frac12 k'(x_2 - x_1)^2 + \frac12 kx_2^2$, así que
> $K = \begin{pmatrix} k + k' & -k' \\ -k' & k + k' \end{pmatrix}$ y $M = mI$.
>
> $\det(K - \omega^2 m I) = (k + k' - m\omega^2)^2 - k'^2 = 0$ da $\omega^2 = \frac{k}{m}$ (modo $\mathbf a = (1, 1)$: las masas van juntas y el muelle central
> no trabaja) y $\omega^2 = \frac{k + 2k'}{m}$ (modo $(1, -1)$: van en oposición y el muelle central se estira por los dos lados).

*Péndulo doble* con dos masas iguales $m$ y dos varillas iguales $\ell$, ángulos $\theta_1, \theta_2$ medidos desde la vertical. Linealizando,

$$
M = m\ell^2 \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}, \qquad K = mg\ell \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}.
$$

Aquí $M$ no es diagonal (la velocidad de la segunda masa depende de los dos ángulos), y por eso hace falta el problema **generalizado**; equivale a
hallar los autovalores de $M^{-1}K$.

## 10. Comprobar con un programa

Cada fórmula de este nodo se puede contrastar con una simulación independiente. El bloque reproduce los valores de control: el periodo exacto
frente a una integración RK4, Kepler por Newton frente a bisección, la deriva de energía de Euler explícito frente a Euler simpléctico, la
transferencia de Hohmann por dos fórmulas y un modo normal simulado.

```python
import math

# 1. Péndulo con g/ℓ = 1 (T0 = 2π): media aritmético-geométrica frente a RK4.
def agm(a, b):
    for _ in range(40):
        a, b = (a + b) / 2, math.sqrt(a * b)
    return a

def periodo_rk4(theta0, h=1e-4):
    f = lambda q, p: (p, -math.sin(q))
    q, p, t = theta0, 0.0, 0.0
    while True:
        k1 = f(q, p)
        k2 = f(q + h / 2 * k1[0], p + h / 2 * k1[1])
        k3 = f(q + h / 2 * k2[0], p + h / 2 * k2[1])
        k4 = f(q + h * k3[0], p + h * k3[1])
        nq = q + h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0])
        npp = p + h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1])
        if nq <= 0:  # primer paso por la vertical: un cuarto de periodo
            return 4 * (t + h * q / (q - nq))
        q, p, t = nq, npp, t + h

cociente = 1 / agm(1, math.cos(math.pi / 4))
assert abs(cociente - 1.180340599) < 1e-9
assert abs(periodo_rk4(math.pi / 2) / (2 * math.pi) - cociente) < 1e-7

# 2. Ecuación de Kepler: Newton desde E0 = π frente a bisección.
def kepler_newton(M, e):
    E = math.pi
    for _ in range(50):
        E -= (E - e * math.sin(E) - M) / (1 - e * math.cos(E))
    return E

def kepler_biseccion(M, e):
    lo, hi = 0.0, math.pi
    for _ in range(200):
        mid = (lo + hi) / 2
        if mid - e * math.sin(mid) - M < 0:
            lo = mid
        else:
            hi = mid
    return lo

E = kepler_newton(1, 0.5)
assert abs(E - 1.498701133) < 1e-9
assert abs(E - kepler_biseccion(1, 0.5)) < 1e-12

# 3. H = (p² + x²)/2: Euler explícito multiplica la energía por (1 + h²) en cada paso; el simpléctico no deriva.
def energia_final(simplectico, h=0.01, pasos=100_000):
    x, p = 1.0, 0.0
    for _ in range(pasos):
        if simplectico:
            p -= h * x
            x += h * p
        else:
            x, p = x + h * p, p - h * x
    return (p * p + x * x) / 2

crecimiento = (1 + 0.01 ** 2) ** 100_000
assert abs(energia_final(False) / 0.5 - crecimiento) < 1e-6 * crecimiento
assert abs(energia_final(True) - 0.5) < 0.01

# 4. Hohmann de 6678 km a 42 164 km: fórmula cerrada frente a vis-viva.
GM = 3.986e14
r1, r2 = 6.678e6, 4.2164e7
a = (r1 + r2) / 2
dv1 = math.sqrt(GM / r1) * (math.sqrt(2 * r2 / (r1 + r2)) - 1)
assert abs(dv1 - (math.sqrt(GM * (2 / r1 - 1 / a)) - math.sqrt(GM / r1))) < 1e-6
print(f"Δv1 = {dv1 / 1000:.2f} km/s; viaje = {math.pi * math.sqrt(a ** 3 / GM) / 3600:.2f} h")

# 5. Dos masas y tres muelles (m = 1, k = 3, k' = 2): lanzando el modo en fase, x1(t) = x2(t) = cos(√3 t).
def acel(x1, x2, k=3.0, kp=2.0):
    return -k * x1 - kp * (x1 - x2), -k * x2 - kp * (x2 - x1)

x1, x2, v1, v2, h = 1.0, 1.0, 0.0, 0.0, 1e-4
for _ in range(20_000):  # Verlet de velocidades hasta t = 2
    a1, a2 = acel(x1, x2)
    x1 += h * v1 + h * h / 2 * a1
    x2 += h * v2 + h * h / 2 * a2
    b1, b2 = acel(x1, x2)
    v1 += h / 2 * (a1 + b1)
    v2 += h / 2 * (a2 + b2)
assert abs(x1 - math.cos(math.sqrt(3) * 2)) < 1e-6 and abs(x1 - x2) < 1e-12

# 6. Foucault en París: una vuelta cada día sidéreo / sen φ.
print(f"Foucault en París: {23.9345 / math.sin(math.radians(48.85)):.1f} h")
```

## 11. Errores típicos

- Escribir $T$ con las velocidades **relativas** a un marco que gira o acelera: $T$ se calcula siempre en un marco inercial (aunque se exprese en
  coordenadas que giran).
- Elegir más coordenadas que grados de libertad y olvidar la ligadura, o menos y perder un movimiento.
- Equivocar el signo de $V$: con $\theta$ desde la vertical hacia abajo, la altura es $-\ell\cos\theta$ y $V = -mg\ell\cos\theta$.
- Confundir $\partial L/\partial\dot q$ (derivada parcial, con $q$ fija) con $dL/dt$.
- Suponer que $H$ es siempre la energía: no lo es si las ligaduras dependen del tiempo (el aro que gira es un ejemplo: $h$ se conserva pero no es $T + V$).
- Usar la masa de un cuerpo en vez de la masa reducida en un problema de dos cuerpos de masas comparables.
- Olvidar el término de rotación en la rodadura, o usar el momento de inercia respecto al eje equivocado (Steiner).
- Usar $T_0 = 2\pi\sqrt{\ell/g}$ para amplitudes grandes: a $60°$ el error ya es del $7\,\%$.
- Resolver la ecuación de Kepler con Newton desde $E_0 = M$ con excentricidad alta sin vigilar la convergencia.
- Buscar los modos normales como autovalores de $K$ cuando $M$ no es múltiplo de la identidad.

## 12. Resumen

- $L = T - V$ en coordenadas generalizadas; Euler-Lagrange $\frac{d}{dt}\frac{\partial L}{\partial\dot q} = \frac{\partial L}{\partial q}$; las fuerzas de ligadura desaparecen.
- $p_i = \partial L/\partial\dot q_i$; coordenada cíclica ⇒ $p_i$ conservado; Noether: simetría ⇔ conservación.
- $H = \sum p\dot q - L$; $\dot q = \partial H/\partial p$, $\dot p = -\partial H/\partial q$; Liouville; integradores simplécticos.
- Dos cuerpos ⇒ masa reducida; $V_{\text{ef}} = V + \ell^2/(2\mu r^2)$; Kepler: $E = -k/2a$, $T^2 \propto a^3$, vis-viva, $M = E - e\sin E$.
- Sólido: $I = \int r^2dm$, Steiner, rodadura $a = g\sin\alpha/(1 + I/MR^2)$, precesión $\Omega = mgr/(I\omega)$.
- Marcos que giran: centrífuga y Coriolis; Foucault $\Omega\sin\varphi$.
- Pequeñas oscilaciones: $\det(K - \omega^2M) = 0$, modos normales.

## Reto

Calcula tres enteros. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** $T / T_0$ para un péndulo que se suelta en reposo desde $\theta_0 = 120°$.
- **b.** La anomalía excéntrica $E$, en radianes, de un cuerpo con excentricidad $e = 0{,}967$ (la del cometa Halley) cuando su anomalía media es
  $M = 1$ rad.
- **c.** El cociente $\omega_2 / \omega_1$ entre la frecuencia normal alta y la baja del péndulo doble de la sección 9.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9 \cdot T/T_0 \rfloor$, y análogamente $b$ y $c$.

## Repaso: lo que debe quedarte dentro de un mes

1. La receta: coordenadas, $T$, $V$, $L = T - V$, una ecuación de Euler-Lagrange por coordenada.
2. Coordenada cíclica ⇒ momento conservado; tiempo ausente ⇒ energía conservada.
3. Dos cuerpos se reducen a uno con $\mu = m_1m_2/(m_1 + m_2)$ y un potencial efectivo.
4. $E = -GMm/2a$ y $v^2 = GM(2/r - 1/a)$ resuelven casi toda la mecánica orbital.
5. Las pequeñas oscilaciones son un problema de autovalores: $\det(K - \omega^2M) = 0$.

## Siguiente

[[fis-electromagnetismo]] usa el mismo lenguaje de campos, potenciales y energía; [[fis-termo-estadistica]]
parte del espacio de fases y de Liouville; [[fis-mecanica-cuantica]] cuantiza el hamiltoniano. En robótica, [[rob-cinematica]] y la dinámica de
manipuladores aplican Lagrange a cadenas de sólidos.
