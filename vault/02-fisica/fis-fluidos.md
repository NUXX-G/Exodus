---
id: fis-fluidos
title: "Mecánica de fluidos: hidrostática, Bernoulli, Navier-Stokes, viscosidad, tuberías, flujo potencial, capa límite, ondas y compresibilidad"
area: fisica
trunk_level: 12
prerequisites: [fis-mecanica-clasica, mat-calculo-multivariable]
academic_sources:
  - "Kundu, P. K.; Cohen, I. M.; Dowling, D. R. Fluid Mechanics, 6ª ed. Academic Press, 2015."
  - "Acheson, D. J. Elementary Fluid Dynamics. Clarendon Press (Oxford), 1990."
exercises:
  - id: presion-hidrostatica
    tier: 1
    prompt: |
      ¿Cuál es la presión manométrica a 10 m de profundidad en agua ($\rho = 1000$ kg/m³, $g = 9{,}81$ m/s²), en kPa? Respuesta: un número.
    answers: ["sha256:e65b03996fa1e6c63c369603116793c8e07c4b55bd70efede8359ba7f7257f02"]
  - id: torricelli
    tier: 1
    prompt: |
      Un depósito abierto vacía por un orificio situado 5 m por debajo de la superficie libre. ¿A qué velocidad sale el chorro ($g = 9{,}81$)? Respuesta: en m/s con **4 decimales**.
    answers: ["sha256:d3e66e9c8cb65cc726bd2754726909cf222ee469556ad2cb0ed64147cc4632c8"]
  - id: continuidad
    tier: 1
    prompt: |
      Por un tubo de 10 cm de diámetro circula agua a 2 m/s. ¿A qué velocidad va en un estrechamiento de 5 cm? Respuesta: en m/s.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: numero-de-reynolds
    tier: 1
    prompt: |
      Agua ($\nu = 10^{-6}$ m²/s) circula a 2 m/s por un tubo de 5 cm. ¿Cuánto vale el número de Reynolds? Respuesta: un entero.
    answers: ["sha256:3bb78535cc9555ff19fe3556aaa41c78a0a45c64d49ba2bc564507648a8e77a1"]
  - id: flotacion
    tier: 1
    prompt: |
      ¿Qué fracción del volumen de un iceberg ($\rho = 917$ kg/m³) queda sumergida en agua de mar ($\rho = 1025$ kg/m³)? Respuesta: con **4 decimales**.
    answers: ["sha256:6166dbf3e3d9b8a9c104232cc916b0d3d8443deb7f7977519cdf24f0968a8a97"]
  - id: poiseuille
    tier: 2
    prompt: |
      Agua ($\mu = 10^{-3}$ Pa·s) fluye en régimen laminar por un tubo de radio 1 mm y 1 m de largo con una caída de presión de 1000 Pa. ¿Cuál es el caudal en mL/s? Respuesta: con **4 decimales**.
    answers: ["sha256:26b3d8bf873c227af402e5c6fe4a2609477d92a37b7e3a401ec5bcebaf68c279"]
  - id: velocidad-terminal-de-stokes
    tier: 2
    prompt: |
      Una esfera de vidrio ($\rho_s = 2500$ kg/m³) de radio $0{,}05$ mm cae en agua ($\rho = 1000$, $\mu = 10^{-3}$). ¿Cuál es su velocidad terminal en mm/s (ley de Stokes, $g = 9{,}81$)? Respuesta: con **3 decimales**.
    answers: ["sha256:84c167694b17b77e16a96549dcc7bf2791ebe8dd969d32eda975de8feb340538"]
  - id: venturimetro
    tier: 2
    prompt: |
      Un venturímetro pasa de 10 cm a 5 cm de diámetro y mide una diferencia de presión de 5 kPa con agua. ¿Cuál es el caudal en L/s (sin pérdidas)? Respuesta: con **3 decimales**.
    answers: ["sha256:727e3edd9bc95e71a45ec391c675e6fec37bc0afa5b40833ac964a1111390539"]
  - id: cilindro-potencial
    tier: 2
    prompt: |
      En el flujo potencial uniforme $U = 3$ m/s alrededor de un cilindro, ¿cuál es la velocidad máxima sobre la superficie del cilindro? Respuesta: en m/s.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: rotacion-rigida
    tier: 2
    prompt: |
      Un fluido gira como un sólido rígido con velocidad angular $\Omega = 3$ rad/s. ¿Cuánto vale su vorticidad? Respuesta: en s$^{-1}$.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: chorro-contra-una-placa
    tier: 2
    prompt: |
      Un chorro de agua de 2 cm de diámetro a 10 m/s choca perpendicularmente contra una placa fija y se desvía a los lados. ¿Qué fuerza ejerce sobre la placa, en N? Respuesta: con **4 decimales**.
    answers: ["sha256:9f58e258cbd532fbf976aa5eaa2faf81974326ad8c250e48bfa1914c3e8b2321"]
  - id: temperatura-de-remanso
    tier: 2
    prompt: |
      Aire ($\gamma = 1{,}4$) a 250 K vuela a Mach 2. ¿Cuál es su temperatura de remanso, en K? Respuesta: un número.
    answers: ["sha256:83151157c10d85af7c84657c71c3e3603d955160f0526fce672481da83a2e090"]
  - id: perdida-de-carga
    tier: 3
    prompt: |
      Agua a 2 m/s recorre 100 m de tubo liso de 5 cm de diámetro con $Re = 10^5$. Con el factor de fricción de Blasius $f = 0{,}316\,Re^{-1/4}$ y Darcy-Weisbach, ¿cuál es la pérdida de carga en metros? Respuesta: con **3 decimales**.
    answers: ["sha256:fc2170164f122fc57ebf23abc00b5937d7beaf1a0996da89a1c29d2b6e5fea17"]
  - id: kutta-joukowski
    tier: 3
    prompt: |
      Un cilindro con circulación $\Gamma = 20$ m²/s está en una corriente de aire ($\rho = 1{,}2$) a 50 m/s. ¿Qué sustentación por unidad de longitud recibe, en N/m? Respuesta: un número.
    answers: ["sha256:15197cf7214b58e67cae565e573ffd9aa44bcb81f8ee5d7185dfe8da0a16ef43"]
  - id: capa-limite-de-blasius
    tier: 3
    prompt: |
      Aire ($\nu = 1{,}5\cdot10^{-5}$ m²/s) a 10 m/s sobre una placa plana. Con la solución de Blasius ($\delta_{99} \approx 4{,}91\sqrt{\nu x/U}$), ¿qué espesor tiene la capa límite a 1 m del borde, en mm? Respuesta: con **2 decimales**.
    answers: ["sha256:c0b3a9bedef69f237ec89ae28cdedba7ea93ec181ad3b405acffd15dae95c079"]
  - id: ondas-en-aguas-intermedias
    tier: 3
    prompt: |
      Con la relación de dispersión $\omega^2 = gk\tanh(kh)$, ¿a qué velocidad de fase viaja una ola de 100 m de longitud de onda en 4 m de profundidad ($g = 9{,}81$)? Respuesta: en m/s con **4 decimales**.
    answers: ["sha256:f3f4da4a49fa2ee60f4f57de277a5acb038687556e40f230da9fca5d0f7d196d"]
---

# Mecánica de fluidos: hidrostática, Bernoulli, Navier-Stokes, viscosidad, tuberías, flujo potencial, capa límite, ondas y compresibilidad

Aire y agua mueven aviones, barcos, turbinas, corazones y el clima. La mecánica de fluidos aplica las leyes de Newton a un medio continuo que se deforma
sin límite, y el resultado —las ecuaciones de Navier-Stokes— es a la vez la base de toda la ingeniería hidráulica y aeronáutica y uno de los problemas
abiertos de las matemáticas. Este nodo va de lo que se calcula a mano (presión, Bernoulli, Poiseuille, pérdidas en tuberías, sustentación) a las ideas
que explican por qué los flujos reales son como son: viscosidad, número de Reynolds, capa límite, turbulencia y ondas.

## Objetivos

Al terminar sabrás:

1. Resolver problemas de hidrostática y flotación.
2. Aplicar conservación de masa (continuidad), Bernoulli y el balance de cantidad de movimiento a volúmenes de control.
3. Escribir las ecuaciones de Navier-Stokes, reconocer sus soluciones exactas (Couette, Poiseuille) y usar el número de Reynolds.
4. Calcular pérdidas de carga en tuberías y velocidades terminales.
5. Usar el flujo potencial (cilindro, circulación, Kutta-Joukowski) y la capa límite de Blasius.
6. Calcular ondas de superficie con su relación de dispersión y magnitudes de flujo compresible (Mach, remanso).

## Qué debes dominar antes

[[fis-mecanica-clasica]] (leyes de Newton, energía, sistemas de referencia) y [[mat-calculo-multivariable]] (gradiente, divergencia, rotacional, teoremas
integrales). Las EDO y EDP de [[mat-ecuaciones-diferenciales]] y [[mat-edp]] aparecen en las soluciones.

> [!question] Test de entrada
> 1. ¿Cuánto vale la divergencia de $\vec v = (x, -y, 0)$?
> 2. Un objeto de 2 kg cae desde 5 m. ¿Con qué velocidad llega al suelo (sin rozamiento, $g = 9{,}81$)?
> 3. ¿Qué dice el teorema de la divergencia?
>
> Respuestas: 0; $\sqrt{2gh} \approx 9{,}9$ m/s; el flujo de un campo a través de una superficie cerrada es la integral de su divergencia en el volumen.

## 1. Para qué sirve

- **Ingeniería civil y de procesos**: redes de tuberías, bombas, presas, depósitos, ventilación.
- **Aeronáutica y automoción**: sustentación, resistencia, capa límite, flujo supersónico.
- **Energía y clima**: turbinas eólicas e hidráulicas, refrigeración de equipos, meteorología y oceanografía.
- **Biología y medicina**: flujo sanguíneo (Poiseuille), microfluidos, respiración.
- **Simulación (CFD)**: resolver Navier-Stokes numéricamente es una de las aplicaciones de cálculo más intensivas.

## 2. Hidrostática

En reposo, la presión solo cambia con la profundidad: $\frac{dp}{dz} = -\rho g$, así que $p = p_0 + \rho gh$ a profundidad $h$. A 10 m de agua, la presión aumenta
$\approx 98$ kPa, casi una atmósfera. **Pascal**: un aumento de presión se transmite a todo el fluido (prensa hidráulica). **Arquímedes**: un cuerpo sumergido
recibe un empuje igual al peso del fluido desalojado; un cuerpo flotante sumerge la fracción $\rho_{\text{cuerpo}}/\rho_{\text{fluido}}$ de su volumen (un iceberg, $917/1025 \approx 0{,}89$).

## 3. Cinemática y conservación

Se describe el flujo con el campo de velocidades $\vec v(\vec x, t)$ (descripción euleriana). La **derivada material** $\frac{D}{Dt} = \partial_t + \vec v\cdot\nabla$ da el cambio siguiendo a
una partícula. **Continuidad** (conservación de la masa): $\partial_t\rho + \nabla\cdot(\rho\vec v) = 0$; para un fluido incompresible, $\nabla\cdot\vec v = 0$ y, en un tubo, el caudal
$Q = Av$ es el mismo en todas las secciones. La **vorticidad** $\vec\omega = \nabla\times\vec v$ mide el giro local: un remolino que gira como un sólido con $\Omega$ tiene $\omega = 2\Omega$.

**Balance de cantidad de movimiento en un volumen de control**: la fuerza neta es el flujo neto de cantidad de movimiento que sale más su variación.
Un chorro de caudal $Q$ y velocidad $v$ que se desvía $90°$ contra una placa la empuja con $F = \rho Qv = \rho Av^2$.

## 4. Bernoulli

Para flujo estacionario, incompresible y sin viscosidad, a lo largo de una línea de corriente

$$
p + \tfrac12\rho v^2 + \rho gz = \text{constante}.
$$

Es la conservación de la energía por unidad de volumen. Aplicaciones: **Torricelli** (salida de un depósito, $v = \sqrt{2gh}$), **Venturi** (un estrechamiento acelera
el fluido y baja la presión: midiendo $\Delta p$ se obtiene el caudal), tubo de **Pitot** (velocidad de un avión). No vale a través de bombas o turbinas (añaden o
quitan energía) ni donde la viscosidad importa.

> [!example] Ejemplo resuelto 1: un venturímetro
> Agua pasa de $D_1 = 10$ cm a $D_2 = 5$ cm y se mide $\Delta p = 5$ kPa. Continuidad: $v_1 = v_2A_2/A_1 = v_2/4$. Bernoulli: $\Delta p = \frac12\rho(v_2^2 - v_1^2) = \frac12\rho v_2^2\left(1 - \frac1{16}\right)$, de donde
> $v_2 = \sqrt{\frac{2\cdot5000}{1000\cdot15/16}} \approx 3{,}27$ m/s y $Q = A_2v_2 \approx 6{,}41$ L/s. En la práctica se multiplica por un coeficiente de descarga $\approx 0{,}98$ por las pérdidas.

## 5. Viscosidad y Navier-Stokes

En un fluido newtoniano el esfuerzo cortante es proporcional al gradiente de velocidad, $\tau = \mu\frac{du}{dy}$. Con eso, la segunda ley de Newton para un fluido
incompresible es la ecuación de **Navier-Stokes**:

$$
\rho\left(\partial_t\vec v + (\vec v\cdot\nabla)\vec v\right) = -\nabla p + \mu\nabla^2\vec v + \rho\vec g, \qquad \nabla\cdot\vec v = 0 .
$$

El término $(\vec v\cdot\nabla)\vec v$ es **no lineal**: de él salen la turbulencia y la dificultad matemática (la existencia de soluciones suaves en 3D es uno de los
problemas del milenio). El **número de Reynolds** $Re = \frac{\rho vL}{\mu} = \frac{vL}{\nu}$ compara inercia y viscosidad: con $Re \ll 1$ dominan las fuerzas viscosas (microorganismos,
sedimentación), y por encima de $\sim2300$ el flujo en tuberías se vuelve turbulento. Dos flujos geométricamente semejantes con el mismo $Re$ son iguales en
forma adimensional: la base de los ensayos en túnel de viento.

**Soluciones exactas.** Entre dos placas, una fija y otra a velocidad $U$ (**Couette**), el perfil es lineal. En un tubo circular con gradiente de presión
(**Hagen-Poiseuille**), el perfil es parabólico, $u(r) = \frac{\Delta p}{4\mu L}(R^2 - r^2)$, y el caudal

$$
Q = \frac{\pi R^4\Delta p}{8\mu L}:
$$

la cuarta potencia del radio explica por qué un pequeño estrechamiento de una arteria reduce mucho el flujo.

**Esfera lenta (Stokes)**: con $Re \ll 1$, la resistencia es $F = 6\pi\mu rv$; igualando con peso menos empuje, la velocidad terminal es $v_t = \frac29\frac{(\rho_s - \rho)gr^2}{\mu}$ (sedimentación,
gotas de niebla, experimento de Millikan).

## 6. Tuberías reales

La pérdida de carga en un tramo recto es (**Darcy-Weisbach**) $h_f = f\frac LD\frac{v^2}{2g}$. En régimen laminar, $f = 64/Re$ (es Poiseuille); en turbulento, $f$ depende de $Re$
y de la rugosidad (ecuación de Colebrook, diagrama de Moody); para tubos lisos con $Re \lesssim 10^5$, la correlación de **Blasius** $f = 0{,}316\,Re^{-1/4}$. Las válvulas y
codos añaden pérdidas locales $K\frac{v^2}{2g}$. Una bomba debe aportar la diferencia de alturas más todas las pérdidas.

> [!example] Ejemplo resuelto 2: la pérdida en un tubo liso
> Agua a 2 m/s por 100 m de tubo de 5 cm: $Re = \frac{2\cdot0{,}05}{10^{-6}} = 10^5$, turbulento. Blasius: $f = 0{,}316\cdot10^{-5/4} \approx 0{,}0178$. Entonces $h_f = 0{,}0178\cdot2000\cdot\frac{4}{19{,}62} \approx 7{,}25$ m: la bomba
> debe compensar más de 7 m de altura solo por rozamiento ($\Delta p \approx 71$ kPa). Si el flujo fuera laminar con el mismo caudal, $f$ sería $0{,}00064$: la turbulencia multiplica la pérdida.

## 7. Flujo potencial, circulación y sustentación

Si el flujo es irrotacional ($\nabla\times\vec v = 0$), $\vec v = \nabla\varphi$ y la incompresibilidad da $\nabla^2\varphi = 0$: Laplace ([[mat-edp]]), y se pueden superponer soluciones. Una
corriente uniforme más un dipolo da el flujo alrededor de un **cilindro**, $\varphi = U\left(r + \frac{a^2}{r}\right)\cos\theta$, con velocidad $2U$ en los costados y nula en los puntos de
remanso. Añadiendo un vórtice de **circulación** $\Gamma$ el flujo se vuelve asimétrico y aparece una fuerza perpendicular a la corriente: **Kutta-Joukowski**, $L' = \rho U\Gamma$
por unidad de envergadura. En un ala, la condición de Kutta (el flujo abandona suavemente el borde de salida) fija $\Gamma$. Sin viscosidad la resistencia sale
cero (paradoja de d'Alembert): la resistencia real nace en la capa límite.

## 8. Capa límite y turbulencia

Prandtl (1904): a $Re$ alto, la viscosidad solo importa en una **capa límite** delgada junto a las paredes, donde la velocidad pasa de 0 al valor exterior.
Sobre una placa plana, la solución de **Blasius** reduce las ecuaciones a la EDO $f''' + \frac12ff'' = 0$ con $f(0) = f'(0) = 0$, $f'(\infty) = 1$; numéricamente, $f''(0) \approx 0{,}332$ y el
espesor $\delta_{99} \approx 4{,}91\sqrt{\nu x/U}$ crece como la raíz de la distancia. Con gradientes de presión adversos la capa se **desprende** (pérdida de sustentación de un ala,
estela detrás de un coche). Por encima de $Re_x \sim 5\cdot10^5$ se vuelve turbulenta: más mezcla, más rozamiento, pero más resistente al desprendimiento (por eso
las pelotas de golf tienen hoyuelos). La turbulencia transfiere energía de los remolinos grandes a los pequeños (cascada de Kolmogorov, espectro $k^{-5/3}$)
hasta que la viscosidad la disipa.

## 9. Ondas de superficie y flujo compresible

**Ondas de gravedad**: $\omega^2 = gk\tanh(kh)$ con $k = 2\pi/\lambda$ y $h$ la profundidad. En aguas profundas ($kh \gg 1$), $c = \sqrt{g/k}$ y las ondas largas van más rápido
(dispersión); en aguas someras ($kh \ll 1$), $c = \sqrt{gh}$, igual para todas: por eso los tsunamis, con $\lambda$ de cientos de km, viajan a $\sqrt{gh} \approx 200$ m/s en 4 km de
océano y se amontonan al llegar a la costa.

**Compresibilidad.** El número de **Mach** $M = v/a$ con $a = \sqrt{\gamma RT}$ la velocidad del sonido. Para $M \lesssim 0{,}3$ el flujo se trata como incompresible. Al frenar un gas
hasta el reposo, la energía cinética se convierte en entalpía: $T_0 = T\left(1 + \frac{\gamma - 1}{2}M^2\right)$, la **temperatura de remanso** (por eso los aviones supersónicos se
calientan). Por encima de $M = 1$ aparecen ondas de choque y las toberas deben ser convergentes-divergentes para acelerar el gas (cohetes).

> [!example] Ejemplo resuelto 3: una ola de 100 m en una costa de 4 m (con menos ayuda)
> Calcula $k = 2\pi/100$ y $kh \approx 0{,}25$: ni profunda ni somera. Usa $c = \sqrt{\frac gk\tanh(kh)}$ y compara con las dos aproximaciones ($\sqrt{g/k} \approx 12{,}5$ m/s y $\sqrt{gh} \approx 6{,}26$ m/s):
> comprueba que el valor exacto, $\approx 6{,}20$ m/s, está muy cerca del de aguas someras.

## 10. Comprobar con un programa

Poiseuille integrando el perfil, la ecuación de Blasius por disparo, la sustentación integrando la presión de Bernoulli alrededor de un cilindro
con circulación y la relación de dispersión por bisección.

```python
import math

def rk4(f, y, t0, t1, n):
    h = (t1 - t0) / n
    t = t0
    for _ in range(n):
        k1 = f(t, y)
        k2 = f(t + h / 2, [a + h / 2 * b for a, b in zip(y, k1)])
        k3 = f(t + h / 2, [a + h / 2 * b for a, b in zip(y, k2)])
        k4 = f(t + h, [a + h * b for a, b in zip(y, k3)])
        y = [a + h / 6 * (b + 2 * c + 2 * d + e) for a, b, c, d, e in zip(y, k1, k2, k3, k4)]
        t += h
    return y

# 1. Poiseuille: integrar 2π u(r) r dr reproduce πR⁴Δp/(8μL).
R, dp, mu, L = 1e-3, 1000.0, 1e-3, 1.0
u = lambda r: dp / (4 * mu * L) * (R * R - r * r)
N = 10000
Q = sum(2 * math.pi * u((i + 0.5) * R / N) * (i + 0.5) * R / N for i in range(N)) * R / N
assert abs(Q - math.pi * R**4 * dp / (8 * mu * L)) / Q < 1e-8

# 2. Blasius: disparo sobre f''(0) para que f'(∞) = 1; luego η donde f' = 0,99.
blasius = lambda t, y: [y[1], y[2], -0.5 * y[0] * y[2]]
lo, hi = 0.1, 1.0
for _ in range(50):
    s = (lo + hi) / 2
    lo, hi = (s, hi) if rk4(blasius, [0, 0, s], 0, 10, 4000)[1] < 1 else (lo, s)
a, b = 0.0, 10.0
for _ in range(40):
    m = (a + b) / 2
    a, b = (m, b) if rk4(blasius, [0, 0, lo], 0, m, 2000)[1] < 0.99 else (a, m)
assert abs(lo - 0.3321) < 1e-4 and abs(a - 4.91) < 0.01

# 3. Kutta-Joukowski: integrar la presión sobre un cilindro con circulación da ρUΓ.
rho, U, G, radio = 1.2, 50.0, 20.0, 1.0
vt = lambda th: -2 * U * math.sin(th) + G / (2 * math.pi * radio)
M = 20000
Fy = -sum(-0.5 * rho * vt(2 * math.pi * k / M) ** 2 * math.sin(2 * math.pi * k / M) for k in range(M)) * radio * 2 * math.pi / M
assert abs(abs(Fy) - rho * U * G) < 1e-6

# 4. Ejemplo resuelto 3: velocidad de fase por bisección en ω de ω² = g k tanh(kh).
g, k, h = 9.81, 2 * math.pi / 100, 4.0
lo_w, hi_w = 0.0, 10.0
for _ in range(100):
    w = (lo_w + hi_w) / 2
    lo_w, hi_w = (w, hi_w) if w * w < g * k * math.tanh(k * h) else (lo_w, w)
print("f''(0) =", round(lo, 4), "| η99 =", round(a, 3), "| sustentación =", round(abs(Fy), 3), "N/m | c =", round(lo_w / k, 4), "m/s")
assert abs(lo_w / k - math.sqrt(g / k * math.tanh(k * h))) < 1e-9
```

## 11. Errores típicos

- Usar Bernoulli entre puntos de líneas de corriente distintas en un flujo rotacional, o a través de una bomba.
- Olvidar la presión atmosférica (o mezclar presión absoluta y manométrica).
- Aplicar Poiseuille o Stokes fuera de su régimen ($Re$ alto).
- Tomar $f = 64/Re$ en flujo turbulento.
- Pensar que la sustentación de un ala se explica porque "el aire de arriba tiene que llegar a la vez" (falso): la explica la circulación.
- Usar $c = \sqrt{gh}$ para olas cuya longitud no es mucho mayor que la profundidad.

## 12. Resumen

- Hidrostática $p = p_0 + \rho gh$; Pascal; Arquímedes.
- Continuidad $\nabla\cdot\vec v = 0$, $Q = Av$; vorticidad; volumen de control $F = \rho Qv$.
- Bernoulli $p + \frac12\rho v^2 + \rho gz$; Torricelli, Venturi, Pitot.
- Navier-Stokes; $Re = vL/\nu$; Couette, Poiseuille $Q = \pi R^4\Delta p/(8\mu L)$; Stokes $6\pi\mu rv$.
- Darcy-Weisbach $h_f = f\frac LD\frac{v^2}{2g}$; $64/Re$ y Blasius.
- Potencial: cilindro, $2U$, Kutta-Joukowski $\rho U\Gamma$; capa límite de Blasius $4{,}91\sqrt{\nu x/U}$, desprendimiento, turbulencia.
- Ondas $\omega^2 = gk\tanh kh$; Mach y $T_0 = T(1 + \frac{\gamma-1}2M^2)$.

## Repaso: lo que debe quedarte dentro de un mes

1. Masa, cantidad de movimiento y energía: los tres balances resuelven casi todo.
2. El número de Reynolds decide qué física manda.
3. La viscosidad actúa en capas delgadas, pero de ella nacen la resistencia y la sustentación.
4. En tuberías, el radio a la cuarta (laminar) y la turbulencia (pérdidas) dominan el diseño.
5. Las olas largas en aguas someras van a $\sqrt{gh}$.

## Siguiente

`fis-mecanica-estadistica-avanzada` (de las moléculas a las ecuaciones continuas), `fis-astrofisica` (fluidos autogravitantes) y
`ing-electronica-potencia` y `rob-dinamica` para aplicaciones de ingeniería. La matemática de fondo está en [[mat-edp]].
