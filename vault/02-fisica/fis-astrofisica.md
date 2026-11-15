---
id: fis-astrofisica
title: "Astrofísica: radiación y medidas, estructura y evolución estelar, objetos compactos, galaxias, lentes, exoplanetas y cosmología observacional"
area: fisica
trunk_level: 15
prerequisites: [fis-relatividad-general, fis-fisica-nuclear-particulas, fis-mecanica-estadistica-avanzada]
academic_sources:
  - "Carroll, B. W.; Ostlie, D. A. An Introduction to Modern Astrophysics, 2ª ed. Pearson Addison-Wesley, 2007."
  - "Ryden, B. Introduction to Cosmology, 2ª ed. Cambridge University Press, 2017."
exercises:
  - id: pico-de-wien
    tier: 1
    prompt: |
      ¿A qué longitud de onda (nm) tiene su máximo la emisión del Sol, tratado como cuerpo negro a 5772 K ($b = 2{,}8978\cdot10^{-3}$ m·K)? Respuesta: con **1 decimal**.
    answers: ["sha256:5344c4110f483793dc352c388e67776724c36b4bea3ffda6cab7c75b9c65aceb"]
  - id: luminosidad-del-sol
    tier: 1
    prompt: |
      Con $R_\odot = 6{,}957\cdot10^8$ m y $T = 5772$ K, ¿cuál es la luminosidad del Sol como cuerpo negro, en unidades de $10^{26}$ W? Respuesta: con **3 decimales**.
    answers: ["sha256:ba8a5deed4cd1b68fc9c77d569b5e129c4e6b1df27e7c67050aa2aa577be8d1a"]
  - id: modulo-de-distancia
    tier: 1
    prompt: |
      Una estrella de magnitud absoluta $M = 0$ se ve con magnitud aparente $m = 10$ (sin extinción). ¿A qué distancia está, en pc? Respuesta: un número.
    answers: ["sha256:40510175845988f13f6162ed8526f0b09f73384467fa855e1e79b44a56562a58"]
  - id: masa-de-una-estrella
    tier: 1
    prompt: |
      Un planeta gira en una órbita circular de 1 UA con periodo de medio año. ¿Cuál es la masa de su estrella, en masas solares (desprecia la masa del planeta)? Respuesta: con **2 decimales**.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: vida-en-la-secuencia-principal
    tier: 1
    prompt: |
      Si el Sol vive 10 Gyr en la secuencia principal y $t \propto M^{-2{,}5}$, ¿cuánto vive una estrella de 10 masas solares, en Myr? Respuesta: con **1 decimal**.
    answers: ["sha256:6b0a71387198950576ec45b43a1b44748ef24e2f1b42e746cac6ba8ab1b3d19e"]
  - id: escape-de-una-estrella-de-neutrones
    tier: 1
    prompt: |
      ¿Cuál es la velocidad de escape newtoniana de una estrella de neutrones de 1,4 masas solares y 12 km de radio, en unidades de $c$? Respuesta: con **3 decimales**.
    answers: ["sha256:b03c70b9037244bb5cf84c5c51303e5834c4f8940dd260f8961c5f78ff2384ef"]
  - id: ley-de-hubble
    tier: 1
    prompt: |
      Una galaxia tiene corrimiento al rojo $z = 0{,}05$. Con $v \approx cz$ y $H_0 = 70$ km/s/Mpc, ¿a qué distancia está, en Mpc? Respuesta: con **1 decimal**.
    answers: ["sha256:a3ca05256fab0f8c232f73b917ea69cbbf26d170fd491e203ed7974a940c0573"]
  - id: fondo-cosmico
    tier: 1
    prompt: |
      El fondo cósmico de microondas está hoy a 2,7255 K. ¿A qué temperatura estaba en la recombinación ($z = 1100$)? Respuesta: en K con **1 decimal**.
    answers: ["sha256:fc645e9d38f19eb78768533f9c4198ba2833a544fb69441de1ffaee3f9b48ab0"]
  - id: limite-de-eddington
    tier: 2
    prompt: |
      ¿Cuál es la luminosidad de Eddington de un objeto de una masa solar (hidrógeno ionizado, $\sigma_T = 6{,}652\cdot10^{-29}$ m²), en miles de luminosidades solares ($L_\odot = 3{,}828\cdot10^{26}$ W)? Respuesta: con **1 decimal**.
    answers: ["sha256:2a4628c61253abf6ad5ea703883e10452b1bdb3f6fe438d3d49898bdfc8206aa"]
  - id: presion-central
    tier: 2
    prompt: |
      Si el Sol tuviera densidad uniforme, ¿cuál sería su presión central por equilibrio hidrostático, en unidades de $10^{14}$ Pa? Respuesta: con **3 decimales**.
    answers: ["sha256:51e12d013c125d5f25f6af0ba482abf534c88417583fe0eb42d9f4ee67954292"]
  - id: masa-de-la-galaxia
    tier: 2
    prompt: |
      El Sol gira alrededor del centro galáctico a 230 km/s a 8,2 kpc. ¿Qué masa encierra su órbita, en unidades de $10^{10}$ masas solares? Respuesta: con **2 decimales**.
    answers: ["sha256:d1ba5d5981fe2afc9a7795a3d06beaa33864ea6831a72dc5e92c37f8e2e0f361"]
  - id: edad-en-z-2
    tier: 2
    prompt: |
      En un universo de Einstein-de Sitter (solo materia, plano) con $H_0 = 70$ km/s/Mpc, ¿qué edad tenía el universo en $z = 2$, en Gyr? Respuesta: con **2 decimales**.
    answers: ["sha256:8c5ded3c20deebb070ac14b0e8f892d6d357a19ee3a5d263c8e6579497cb636d"]
  - id: combustible-del-sol
    tier: 2
    prompt: |
      El Sol convierte hidrógeno en helio; en cada reacción neta se pierde la fracción $(4m_H - m_{He})/(4m_H)$ de la masa (masas atómicas 1,00782503 y 4,00260325 u). Si quema el 10 % de su masa con luminosidad constante $3{,}828\cdot10^{26}$ W, ¿cuánto dura, en Gyr? Respuesta: con **2 decimales**.
    answers: ["sha256:c7bec45b9cef867fad50891638d875a752d6eb5528811863a934b08ce02023f1"]
  - id: distancia-de-luminosidad
    tier: 3
    prompt: |
      En un universo de Einstein-de Sitter con $H_0 = 70$ km/s/Mpc, ¿cuál es la distancia de luminosidad a $z = 2$, en Mpc? Respuesta: redondeada a Mpc entero.
    answers: ["sha256:e399ad584daf025332e506028a6724d5f7176b4aa7e07e9c61738476b7b9e3dd"]
  - id: radio-de-einstein
    tier: 3
    prompt: |
      Una estrella de una masa solar a 4 kpc hace de lente sobre otra a 8 kpc. ¿Cuál es el radio de Einstein, en milisegundos de arco? Respuesta: con **3 decimales**.
    answers: ["sha256:c9c9865c111091b63057bbb236b6df154b63147e06a7ba7dae874a22e48b5d5f"]
  - id: velocidad-radial-de-jupiter
    tier: 3
    prompt: |
      ¿Con qué semiamplitud de velocidad radial se mueve el Sol por la atracción de Júpiter ($1{,}898\cdot10^{27}$ kg, periodo 11,862 años, órbita circular vista de canto), en m/s? Respuesta: con **2 decimales**.
    answers: ["sha256:6c95485c59a99bd91f507618a031c7ab722d541c22962a91c13f65f21c26de81"]
---

# Astrofísica: radiación y medidas, estructura y evolución estelar, objetos compactos, galaxias, lentes, exoplanetas y cosmología observacional

La astrofísica aplica toda la física a laboratorios que no se pueden tocar: casi todo lo que sabemos del universo llega en forma de luz (y, desde hace
poco, de neutrinos y ondas gravitacionales). Con la radiación del cuerpo negro se mide la temperatura y el tamaño de una estrella; con la gravedad, su masa;
con la física nuclear, cuánto vive y qué elementos fabrica; con la relatividad general, qué queda cuando muere y cómo se expande el universo. Este nodo es
la síntesis de la rama de física: usa [[fis-relatividad-general]], [[fis-fisica-nuclear-particulas]] y [[fis-mecanica-estadistica-avanzada]].

## Objetivos

Al terminar sabrás:

1. Usar Wien, Stefan-Boltzmann, magnitudes y módulos de distancia para extraer temperaturas, luminosidades y distancias.
2. Medir masas con las leyes de Kepler (estrellas, planetas, la Vía Láctea) y velocidades radiales.
3. Plantear el equilibrio hidrostático de una estrella, el límite de Eddington y la escala de vida en la secuencia principal.
4. Describir la evolución estelar hasta enanas blancas, estrellas de neutrones y agujeros negros.
5. Calcular radios de Einstein de lentes gravitacionales y amplitudes de velocidad radial de exoplanetas.
6. Usar la ley de Hubble, el fondo cósmico, edades y distancias cosmológicas.

## Qué debes dominar antes

[[fis-relatividad-general]] (Schwarzschild, desviación de la luz, Friedmann), [[fis-fisica-nuclear-particulas]] (fusión, cadenas nucleares) y
[[fis-mecanica-estadistica-avanzada]] (Planck, gases degenerados).

> [!question] Test de entrada
> 1. ¿Cómo depende del radio y la temperatura la potencia que radia un cuerpo negro esférico?
> 2. ¿Cuál es la tercera ley de Kepler?
> 3. ¿Cuánta energía libera la conversión de 4 protones en un núcleo de helio, aproximadamente?
>
> Respuestas: $L = 4\pi R^2\sigma T^4$; $T^2 = \frac{4\pi^2a^3}{G(M + m)}$; unos 26,7 MeV, el 0,7 % de la masa.

## 1. Para qué sirve

- **Física fundamental**: las estrellas de neutrones son laboratorios de materia ultradensa; la cosmología mide la materia y la energía oscuras.
- **Exoplanetas**: detectar y caracterizar mundos alrededor de otras estrellas (velocidad radial, tránsitos, lentes).
- **Instrumentación e ingeniería**: telescopios, detectores, óptica adaptativa, tratamiento de señales e imágenes, misiones espaciales.
- **Ciencia de datos**: los catálogos astronómicos (Gaia, SDSS) son de los mayores conjuntos de datos científicos.

## 2. Radiación y medidas

Una estrella radia aproximadamente como un cuerpo negro: el máximo está en $\lambda_{\max} = b/T$ (**Wien**, $b = 2{,}898\cdot10^{-3}$ m·K) y la luminosidad es $L = 4\pi R^2\sigma T^4$
(**Stefan-Boltzmann**). El Sol, a 5772 K, tiene su máximo en ~502 nm y radia $3{,}83\cdot10^{26}$ W. Midiendo $T$ (color o espectro) y $L$ se obtiene el radio.

**Magnitudes**: escala logarítmica invertida, $m_1 - m_2 = -2{,}5\log_{10}(F_1/F_2)$; la magnitud absoluta $M$ es la aparente a 10 pc, y el **módulo de distancia** $m - M = 5\log_{10}(d/10\text{ pc})$
da la distancia si se conoce $M$ (velas estándar: cefeidas, supernovas Ia). Distancias cercanas, por **paralaje**: $d[\text{pc}] = 1/p[\text{″}]$.

**Diagrama de Hertzsprung-Russell**: luminosidad frente a temperatura. La mayoría de las estrellas están en la **secuencia principal** (quemando hidrógeno), con
$L \propto M^{3,5}$ aproximadamente; las gigantes, supergigantes y enanas blancas ocupan otras regiones.

## 3. Gravedad: masas y órbitas

La **tercera ley de Kepler** $T^2 = \frac{4\pi^2a^3}{G(M + m)}$ es la báscula del universo: un planeta a 1 UA con periodo de medio año orbita una estrella de 4 masas solares; el Sol, a
230 km/s y 8,2 kpc del centro galáctico, encierra unos $10^{11}$ masas solares. Las **curvas de rotación** de las galaxias siguen planas lejos del centro, donde casi
no hay luz: la primera prueba de la **materia oscura**. En el **teorema del virial**, $2\langle K\rangle + \langle U\rangle = 0$ para sistemas gravitatorios estables, que da masas de cúmulos (Zwicky).

**Exoplanetas por velocidad radial**: el planeta y la estrella giran alrededor del centro de masas, $m_pv_p = M_\star v_\star$. Júpiter mueve al Sol con unos 12,5 m/s; una Tierra,
con 9 cm/s: el reto de los espectrógrafos actuales. El método de **tránsitos** mide el radio del planeta por la caída de brillo $(R_p/R_\star)^2$.

## 4. Estructura y evolución estelar

Una estrella es una bola de gas en **equilibrio hidrostático**, $\frac{dP}{dr} = -\frac{Gm(r)\rho}{r^2}$, que pierde energía por la superficie y la repone con fusión en el núcleo. Con
densidad uniforme, $P_c = \frac{3GM^2}{8\pi R^4}$ ($1{,}3\cdot10^{14}$ Pa para el Sol; el valor real es ~$2\cdot10^{16}$ Pa porque la densidad central es mucho mayor). La energía viaja por
radiación (difusión de fotones durante ~$10^5$ años) o convección.

- **Combustible y vida**: fusionar hidrógeno en helio convierte en energía el 0,7 % de la masa; quemar el 10 % de la masa del Sol a su luminosidad actual da unos
  10 Gyr. Como $L \propto M^{3,5}$, la vida escala como $t \propto M/L \propto M^{-2,5}$: una estrella de 10 masas solares vive ~30 Myr.
- **Límite de Eddington**: la presión de radiación sobre los electrones (sección eficaz de Thomson) equilibra la gravedad cuando $L_{\text{Edd}} = \frac{4\pi GMm_pc}{\sigma_T} \approx 3{,}3\cdot10^4\,L_\odot$ por
  masa solar: limita la masa de las estrellas y el brillo de los cuásares.
- **Después**: al agotar el hidrógeno del núcleo, la estrella se expande a gigante roja y quema helio (proceso triple alfa → carbono). Las de menos de ~8 $M_\odot$
  expulsan su envoltura (nebulosa planetaria) y dejan una **enana blanca** sostenida por la presión de degeneración de los electrones, con masa menor que el
  límite de Chandrasekhar ($\approx 1{,}4\,M_\odot$). Las más masivas fusionan hasta el hierro y su núcleo colapsa en una **supernova**, dejando una **estrella de neutrones**
  (sostenida por neutrones degenerados y la fuerza nuclear, radio ~12 km, velocidad de escape ~0,6c) o un **agujero negro**. Los elementos más pesados que el hierro
  se forman por captura de neutrones (procesos s y r), parte en fusiones de estrellas de neutrones (GW170817, 2017).

> [!example] Ejemplo resuelto 1: cuánto vive el Sol
> Cada reacción neta $4\,{}^1\mathrm H \to {}^4\mathrm{He}$ convierte la fracción $\frac{4\cdot1{,}007825 - 4{,}002603}{4\cdot1{,}007825} \approx 0{,}0071$ de la masa en energía. Si el Sol quema el 10 % de su masa ($2\cdot10^{29}$ kg),
> la energía es $0{,}1\cdot M_\odot\cdot0{,}0071\cdot c^2 \approx 1{,}27\cdot10^{44}$ J; a $3{,}83\cdot10^{26}$ W dura $3{,}3\cdot10^{17}$ s $\approx 10{,}5$ Gyr. Lleva 4,6: está a mitad de su vida en la secuencia principal.

## 5. Lentes gravitacionales

Una masa desvía la luz $\frac{4GM}{c^2b}$ ([[fis-relatividad-general]]). Si fuente, lente y observador están alineados, la imagen es un anillo de **radio de Einstein**

$$
\theta_E = \sqrt{\frac{4GM}{c^2}\frac{D_{ls}}{D_lD_s}} .
$$

Para una estrella de una masa solar a 4 kpc delante de otra a 8 kpc, $\theta_E \approx 1$ mas: no se resuelve, pero al pasar la lente el brillo aumenta de forma característica
(**microlente**), lo que permite detectar planetas e incluso agujeros negros aislados. Las lentes fuertes de cúmulos de galaxias producen arcos y miden la masa
total, oscura incluida.

> [!example] Ejemplo resuelto 2: la oscilación del Sol por Júpiter
> Con $P = 11{,}86$ años y $a$ de la tercera ley ($\approx 5{,}2$ UA), Júpiter va a $v_J = 2\pi a/P \approx 13{,}1$ km/s respecto al Sol. Por conservación del momento,
> $v_\odot = v_J\frac{m_J}{M_\odot + m_J} \approx 12{,}5$ m/s. Un observador lejano que viera el sistema de canto mediría esa semiamplitud con un periodo de 12 años: así se descubrieron los
> primeros exoplanetas (51 Pegasi b, 1995, con $K \approx 56$ m/s y un periodo de 4 días).

## 6. Cosmología observacional

- **Ley de Hubble**: $v = H_0d$; para $z \ll 1$, $v \approx cz$. Con $H_0 = 70$ km/s/Mpc, una galaxia a $z = 0{,}05$ está a ~214 Mpc. (Hay una **tensión** sin resolver entre los valores locales
  de $H_0 \approx 73$ y los del fondo cósmico, $\approx 67$.)
- **Fondo cósmico de microondas**: radiación de cuerpo negro casi perfecta a 2,7255 K, emitida en la **recombinación** ($z \approx 1100$, cuando el universo tenía ~3000 K y los
  electrones se unieron a los núcleos) y estirada por la expansión ($T \propto 1 + z$). Sus anisotropías ($10^{-5}$) miden la geometría y el contenido del universo.
- **Nucleosíntesis primordial**: en los primeros minutos se formaron hidrógeno, ~25 % de helio en masa y trazas de deuterio y litio; las abundancias miden la densidad
  de bariones.
- **Edades y distancias**: con $H(z)$ de Friedmann se integran la edad $t(z) = \int_z^\infty\frac{dz'}{(1 + z')H}$ y la distancia comóvil $\int_0^z\frac{c\,dz'}{H}$; la **distancia de luminosidad** es
  $d_L = (1 + z)\times$ comóvil (en un universo plano). Las supernovas Ia, más débiles de lo esperado para un universo de solo materia, revelaron en 1998 la **expansión
  acelerada** (energía oscura).

> [!example] Ejemplo resuelto 3: un universo de solo materia (con menos ayuda)
> En Einstein-de Sitter, $H(z) = H_0(1 + z)^{3/2}$. Integra para obtener $t(z) = \frac{2}{3H_0}(1 + z)^{-3/2}$ y $d_L = \frac{2c}{H_0}\left(1 + z - \sqrt{1 + z}\right)$. Con $H_0 = 70$, comprueba que en $z = 1$ el universo
> tenía 3,29 Gyr y que $d_L \approx 5018$ Mpc. Compara con el universo con $\Lambda$ ($d_L$ mayor: las supernovas se ven más débiles).

## 7. Comprobar con un programa

El pico de Wien maximizando la ley de Planck, una órbita kepleriana integrada para medir una masa, el equilibrio hidrostático y las integrales
cosmológicas.

```python
import math

h, c, kB = 6.62607015e-34, 299792458.0, 1.380649e-23
G, Msol, UA, anio = 6.6743e-11, 1.98847e30, 1.495978707e11, 3.15576e7

# 1. Wien: máximo de B_λ(T = 5772 K) por sección áurea.
T = 5772.0
B = lambda l: 1 / (l**5 * math.expm1(h * c / (l * kB * T)))
a, b = 100e-9, 2000e-9
g = (math.sqrt(5) - 1) / 2
for _ in range(100):
    x1, x2 = b - g * (b - a), a + g * (b - a)
    a, b = (a, x2) if B(x1) > B(x2) else (x1, b)
assert abs(a * 1e9 - 2.897771955e-3 / T * 1e9) < 1e-3

# 2. Masa estelar: integrar una órbita circular de 1 UA alrededor de 4 M☉ y medir su periodo (debe ser medio año).
M = 4 * Msol
x, y, vx, vy = UA, 0.0, 0.0, math.sqrt(G * M / UA)
t, dt, prev = 0.0, 1800.0, 0.0
while True:
    r3 = math.hypot(x, y) ** 3
    vx -= G * M * x / r3 * dt
    vy -= G * M * y / r3 * dt
    x += vx * dt
    y += vy * dt
    t += dt
    if prev < 0 <= y:
        break
    prev = y
assert abs(t / anio - 0.5) < 2e-3

# 3. Equilibrio hidrostático con densidad uniforme: integrar dP/dr hasta el centro.
R = 6.957e8
rho = Msol / (4 / 3 * math.pi * R**3)
N = 100000
P = sum(G * (4 / 3 * math.pi * r**3 * rho) * rho / r**2 for r in ((i + 0.5) * R / N for i in range(N))) * R / N
assert abs(P - 3 * G * Msol**2 / (8 * math.pi * R**4)) / P < 1e-8

# 4. Ejemplo resuelto 3: edad en z = 1 y distancia de luminosidad en Einstein-de Sitter, integrando.
H0 = 70e3 / 3.0856775814913673e22
Gyr, Mpc = 1e9 * anio, 3.0856775814913673e22
pasos = 200000
edad = sum(1 / ((1 + z) * H0 * (1 + z) ** 1.5) / s**2 for s in ((i + 0.5) * 0.5 / pasos for i in range(pasos)) for z in [1 / s - 1]) * 0.5 / pasos
dL = 2 * sum(c / (H0 * (1 + z) ** 1.5) for z in ((i + 0.5) / pasos for i in range(pasos))) / pasos
print("λmax =", round(a * 1e9, 1), "nm | P_c =", f"{P:.3e}", "Pa | t(z=1) =", round(edad / Gyr, 2), "Gyr | d_L =", round(dL / Mpc), "Mpc")
assert abs(edad / Gyr - 3.29) < 0.01 and abs(dL / Mpc - 5018) < 1
```

## 8. Errores típicos

- Olvidar que las magnitudes crecen al disminuir el brillo, o mezclar magnitudes aparentes y absolutas.
- Aplicar Kepler con la masa del planeta despreciada cuando no es despreciable (binarias).
- Confundir la temperatura efectiva (superficie) con la central (millones de K).
- Usar $d = cz/H_0$ a $z$ grande: hay que integrar $H(z)$, y hay varias distancias (comóvil, de luminosidad, angular).
- Pensar que el fondo cósmico viene de un punto: llega de todas direcciones, desde la superficie de último esparcimiento.
- Tomar la velocidad de escape newtoniana de una estrella de neutrones como exacta (allí la relatividad general ya es importante).

## 9. Resumen

- Wien $\lambda_{\max} = b/T$, Stefan-Boltzmann $L = 4\pi R^2\sigma T^4$; magnitudes, $m - M = 5\log(d/10\text{ pc})$; paralaje; diagrama H-R.
- Kepler $T^2 = 4\pi^2a^3/(G(M + m))$, curvas de rotación, virial, materia oscura; velocidad radial $m_pv_p = M_\star v_\star$; tránsitos.
- Hidrostática $dP/dr = -Gm\rho/r^2$; 0,7 % de la masa; $t \propto M^{-2,5}$; Eddington; gigantes, enanas blancas (Chandrasekhar), supernovas, estrellas de neutrones, agujeros negros; procesos s y r.
- Lentes: $\theta_E = \sqrt{(4GM/c^2)D_{ls}/(D_lD_s)}$, microlentes.
- Hubble $v = H_0d$, fondo cósmico $T \propto 1 + z$, nucleosíntesis, edades y distancias integrando $H(z)$, aceleración.

## Repaso: lo que debe quedarte dentro de un mes

1. Color = temperatura; brillo + distancia = luminosidad; luminosidad + temperatura = radio.
2. Kepler pesa todo, incluso lo que no brilla.
3. Las estrellas son reactores en equilibrio hidrostático; las masivas viven poco.
4. Lo que queda de una estrella depende de su masa: enana blanca, estrella de neutrones o agujero negro.
5. La luz que llega de lejos viene del pasado y estirada por la expansión.

## Siguiente

La rama de física se completa con `fis-teoria-cuantica-campos`. En otras ramas, se usan a diario en astronomía el procesado de imágenes (`ia-vision`) y de señales
(`ing-procesado-digital-senal`).
