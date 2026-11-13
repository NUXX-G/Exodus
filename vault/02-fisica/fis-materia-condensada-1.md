---
id: fis-materia-condensada-1
title: "Materia condensada I: cristales, difracción, fonones, electrones en sólidos, bandas, semiconductores, magnetismo y superconductividad"
area: fisica
trunk_level: 14
prerequisites: [fis-mecanica-cuantica, fis-termo-estadistica, fis-electromagnetismo]
academic_sources:
  - "Kittel, C. Introduction to Solid State Physics, 8ª ed. Wiley, 2005."
  - "Ashcroft, N. W.; Mermin, N. D. Solid State Physics. Holt, Rinehart and Winston, 1976."
exercises:
  - id: bragg
    tier: 1
    prompt: |
      Con radiación Cu K$\alpha$ ($\lambda = 0{,}15406$ nm), ¿a qué ángulo $2\theta$ (grados) aparece la reflexión (111) del cobre (FCC, $a = 0{,}3615$ nm)? Respuesta: con **2 decimales**.
    answers: ["sha256:2c02b2d7aa3d2ea92d1523194e9973f1d1766abedb45b6d9e133751169a33a4f"]
  - id: atomos-por-celda
    tier: 1
    prompt: |
      ¿Cuántos átomos tiene la celda convencional cúbica de una red FCC? ¿Y la de una BCC? Respuesta: `fcc;bcc`.
    answers: ["sha256:72cf353cd903f805b7dbcb12dd8a4f02e164ac55033c5d28bedbffc119ff8c24"]
  - id: empaquetamiento
    tier: 1
    prompt: |
      ¿Qué fracción del volumen ocupan las esferas en contacto de una red FCC? Respuesta: con **4 decimales**.
    answers: ["sha256:2bfd1d79bf6ff1c699b40b293696f62658a82052ea7ce1d1a59e86b56766e4fd"]
  - id: efecto-hall
    tier: 1
    prompt: |
      El coeficiente Hall del cobre es $R_H = -7{,}4\cdot10^{-11}$ m³/C. ¿Qué densidad de portadores implica, en unidades de $10^{28}$ m⁻³? Respuesta: con **2 decimales**.
    answers: ["sha256:23c54048b3a860beba497c0b5160207aeaaeb16ba39985a64cb8425fd145eca5"]
  - id: drude
    tier: 1
    prompt: |
      Con el modelo de Drude, $n = 8{,}47\cdot10^{28}$ m⁻³ y $\tau = 2{,}5\cdot10^{-14}$ s, ¿cuál es la resistividad en n$\Omega$·m? Respuesta: con **2 decimales**.
    answers: ["sha256:96948f45aaa448f39d213c40b0ced01e936c38ec93eef37a0adbeab783e7e71f"]
  - id: red-reciproca
    tier: 1
    prompt: |
      ¿Cuál es el módulo de los vectores primitivos de la red recíproca de una red cúbica simple con $a = 0{,}5$ nm, en nm⁻¹? Respuesta: con **4 decimales**.
    answers: ["sha256:ea5eb55c95e53f75c0d834394bb4f6c8d33ce9551a6c5eb9e7ac76b7d92cffc2"]
  - id: cadena-monoatomica
    tier: 2
    prompt: |
      Una cadena de átomos de masa $10^{-26}$ kg unidos por muelles de $K = 10$ N/m tiene $\omega(k) = 2\sqrt{K/m}\,|\operatorname{sen}(ka/2)|$. ¿Cuál es la frecuencia máxima $f = \omega/2\pi$ en THz? Respuesta: con **3 decimales**.
    answers: ["sha256:2e4a5d86c58cecf3d55168e7c973683790393f440db263a7b9d9536ff4d315be"]
  - id: rama-optica
    tier: 2
    prompt: |
      En una cadena diatómica con masas $10^{-26}$ y $2\cdot10^{-26}$ kg y $K = 10$ N/m, ¿cuál es la frecuencia angular de la rama óptica en $k = 0$, en unidades de $10^{13}$ rad/s? Respuesta: con **4 decimales**.
    answers: ["sha256:a63bf78e39f236548b8fa3d873bdde7adfae1f1e4d567ee1dc0f52c78fa98c74"]
  - id: enlace-fuerte
    tier: 2
    prompt: |
      Una banda de enlace fuerte 1D es $E(k) = -2t\cos ka$ con $t = 1$ eV y $a = 0{,}3$ nm. ¿Cuál es su anchura en eV y la masa efectiva en el fondo de la banda, en unidades de $m_e$? Respuesta: `anchura;masa`, la masa con **4 decimales**.
    answers: ["sha256:69aa64c13b8ea7e39d2ed8c6130537f4e47c95c397b208094598669dbe9eea31"]
  - id: silicio-intrinseco
    tier: 2
    prompt: |
      Con $N_c = 2{,}8\cdot10^{19}$, $N_v = 1{,}04\cdot10^{19}$ cm⁻³ y $E_g = 1{,}12$ eV, ¿cuál es la densidad intrínseca de portadores del silicio a 300 K, en $10^9$ cm⁻³? Respuesta: con **2 decimales**.
    answers: ["sha256:f869efc25258df713da2c5e66f5b3c4130d60d2e4be9ad89167f5781312f6f61"]
  - id: nivel-de-fermi-dopado
    tier: 2
    prompt: |
      Ese silicio se dopa con $N_D = 10^{16}$ cm⁻³ donadores (todos ionizados). ¿Cuánto sube el nivel de Fermi respecto al intrínseco, en eV? Respuesta: con **4 decimales**.
    answers: ["sha256:e6a08ecf6777695ff1adf55d4fa72931590feb0fbb53a24de38f31ccffe5c351"]
  - id: plasmon
    tier: 2
    prompt: |
      ¿Cuál es la energía del plasmón $\hbar\omega_p$ de un gas de electrones libres con la densidad del cobre ($8{,}47\cdot10^{28}$ m⁻³), en eV? Respuesta: con **3 decimales**.
    answers: ["sha256:179559a247ba6d403f5fd65c135d21178711778b262b1dd4a9802e343ec298fb"]
  - id: curie-weiss
    tier: 2
    prompt: |
      Un paramagneto sigue $\chi = C/(T - \theta)$ y se mide $\chi = 10^{-3}$ a 300 K y $2\cdot10^{-3}$ a 200 K. ¿Cuánto valen $\theta$ (K) y $C$ (K)? Respuesta: `theta;C`.
    answers: ["sha256:44f61300d6b65fbc3d9c0f4bfc58b529516e3145ed111fb0a2e956f1b83e3a4e"]
  - id: gap-bcs
    tier: 2
    prompt: |
      Con la relación BCS $\Delta(0) = 1{,}764\,k_BT_c$, ¿cuál es el gap del niobio ($T_c = 9{,}25$ K), en meV? Respuesta: con **3 decimales**.
    answers: ["sha256:36ff38bb4e450a1348d96a97103f7d83e50e8e2db6915804ec1289c9e953afd6"]
  - id: longitud-de-london
    tier: 3
    prompt: |
      ¿Cuál es la profundidad de penetración de London para una densidad de electrones superconductores $n_s = 10^{28}$ m⁻³, en nm? Respuesta: con **2 decimales**.
    answers: ["sha256:02443b08766fce4b97a3dd80c3da9dea29140925367463cc29dfdffb7bc5ed40"]
  - id: densidad-de-estados-2d
    tier: 3
    prompt: |
      ¿Cuál es la densidad de estados (con espín) de un gas de electrones bidimensional en GaAs ($m^* = 0{,}067\,m_e$), en unidades de $10^{13}$ eV⁻¹cm⁻²? Respuesta: con **2 decimales**.
    answers: ["sha256:c020bad937ece011339d7447ee0ac9fa11686eea100845466c64863f161899f1"]
---

# Materia condensada I: cristales, difracción, fonones, electrones en sólidos, bandas, semiconductores, magnetismo y superconductividad

Todos los chips, imanes, láseres de diodo, paneles solares y baterías se entienden con la física del estado sólido: la mecánica cuántica de
$10^{23}$ átomos ordenados. Su resultado central es la **teoría de bandas**, que explica por qué el cobre conduce, el diamante aísla y el silicio está justo
en medio y se puede controlar con impurezas. Este nodo recorre la estructura de los cristales y cómo se mide (difracción), sus vibraciones (fonones), los
electrones libres y en bandas, los semiconductores, el magnetismo y la superconductividad. Es la base física de la electrónica de
[[ing-circuitos]] y de los nodos de microelectrónica.

## Objetivos

Al terminar sabrás:

1. Describir redes de Bravais, celdas, red recíproca y zonas de Brillouin, e interpretar la difracción (Bragg, Laue).
2. Calcular relaciones de dispersión de fonones en cadenas mono y diatómicas.
3. Aplicar los modelos de Drude y de electrones libres (Fermi) a la conducción, el efecto Hall y los plasmones.
4. Explicar el origen de las bandas (enlace fuerte, teorema de Bloch) y usar la masa efectiva.
5. Calcular portadores en semiconductores intrínsecos y dopados y la posición del nivel de Fermi.
6. Describir el magnetismo (dia-, para-, ferro-; Curie-Weiss) y la superconductividad (London, BCS).

## Qué debes dominar antes

[[fis-mecanica-cuantica]] (pozo, oscilador, espín, perturbaciones), [[fis-termo-estadistica]] (Fermi-Dirac, Bose-Einstein) y
[[fis-electromagnetismo]] (conductividad, campos en materiales). La mecánica estadística de [[fis-mecanica-estadistica-avanzada]] (Sommerfeld, Debye)
se usa aquí.

> [!question] Test de entrada
> 1. ¿Qué energías tiene una partícula en una caja 1D de longitud $L$?
> 2. ¿Qué dice la distribución de Fermi-Dirac a $T = 0$?
> 3. ¿Cuál es la ley de Bragg?
>
> Respuestas: $E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}$; todos los estados por debajo de $E_F$ están llenos y los de encima vacíos; $2d\operatorname{sen}\theta = n\lambda$.

## 1. Para qué sirve

- **Electrónica**: transistores, diodos, LED y láseres, células solares: todo es ingeniería de bandas y dopaje.
- **Materiales**: identificar fases y estructuras por difracción de rayos X, diseñar aleaciones, cerámicas y semiconductores.
- **Magnetismo**: discos duros, motores, sensores (efecto Hall en los móviles), memorias MRAM.
- **Superconductividad**: resonancia magnética, aceleradores, cables sin pérdidas y cúbits superconductores ([[cua-computacion-cuantica]]).

## 2. Cristales y difracción

Un cristal es una **red de Bravais** (puntos $\vec R = n_1\vec a_1 + n_2\vec a_2 + n_3\vec a_3$) más una **base** de átomos. Redes cúbicas: simple, **BCC** (2 átomos por celda convencional: 8
vértices a $\frac18$ más uno central) y **FCC** (4: 8 vértices a $\frac18$ más 6 caras a $\frac12$). La FCC y la hexagonal compacta llenan el $\frac{\pi}{3\sqrt2} \approx 74\,\%$ del volumen, el
máximo posible para esferas iguales. Los planos se nombran con **índices de Miller** $(hkl)$; en cúbico, su separación es $d = a/\sqrt{h^2 + k^2 + l^2}$.

La **red recíproca** tiene vectores $\vec b_1 = 2\pi\frac{\vec a_2\times\vec a_3}{\vec a_1\cdot(\vec a_2\times\vec a_3)}$, etc., con $\vec a_i\cdot\vec b_j = 2\pi\delta_{ij}$. Cada familia de planos corresponde a un vector recíproco
$\vec G$ de módulo $2\pi/d$. La **condición de Laue** $\vec k' - \vec k = \vec G$ equivale a la **ley de Bragg** $2d\operatorname{sen}\theta = \lambda$. La celda de Wigner-Seitz de la red recíproca es la **primera zona
de Brillouin**: allí viven todos los vectores de onda distintos de fonones y electrones. La recíproca de una FCC es una BCC y viceversa.

> [!example] Ejemplo resuelto 1: el pico (111) del cobre
> El cobre es FCC con $a = 0{,}3615$ nm: $d_{111} = a/\sqrt3 = 0{,}2087$ nm. Con Cu K$\alpha$ ($\lambda = 0{,}15406$ nm), $\operatorname{sen}\theta = \lambda/(2d) = 0{,}369$, $\theta = 21{,}66°$ y el pico aparece en $2\theta = 43{,}32°$,
> el más intenso del difractograma del cobre. En FCC solo aparecen los $(hkl)$ todos pares o todos impares (el factor de estructura anula el resto): (111), (200),
> (220)…, nunca (100) ni (110). Esas **ausencias sistemáticas** permiten identificar la red.

## 3. Vibraciones: fonones

En una **cadena monoatómica** de masas $m$ y muelles $K$, las ondas $u_n \propto e^{i(kna - \omega t)}$ cumplen $\omega(k) = 2\sqrt{K/m}\,|\operatorname{sen}(ka/2)|$: lineal a $k$ pequeño (sonido, velocidad
$a\sqrt{K/m}$) y saturada en el borde de zona $k = \pi/a$. Con dos masas distintas por celda (**cadena diatómica**) aparecen dos ramas: la **acústica** (átomos en fase) y la
**óptica** (en oposición), con $\omega_{\text{opt}}(0) = \sqrt{2K\left(\frac1{m_1} + \frac1{m_2}\right)}$ y un hueco de frecuencias en el borde de zona entre $\sqrt{2K/m_2}$ y $\sqrt{2K/m_1}$. Las ramas ópticas de
los cristales iónicos absorben en el infrarrojo. Cuantizadas, las vibraciones son **fonones** (bosones con $\mu = 0$): dan el calor específico de Debye y la
conductividad térmica de aislantes, y su interacción con los electrones produce la resistividad y la superconductividad convencional.

## 4. Electrones libres: Drude y Sommerfeld

**Drude** (1900): electrones clásicos que chocan cada $\tau$: $\sigma = \frac{ne^2\tau}{m}$, movilidad $\mu = e\tau/m$, $\sigma = ne\mu$. Para el cobre ($n = 8{,}47\cdot10^{28}$ m⁻³, $\tau \approx 2{,}5\cdot10^{-14}$ s),
$\rho \approx 17$ nΩ·m, como se mide. **Efecto Hall**: en un campo $B$, la carga se acumula en un lado hasta que $E_H = v_dB$; el coeficiente $R_H = \frac{1}{nq}$ da la densidad **y el signo**
de los portadores (algunos metales y los semiconductores tipo p tienen $R_H > 0$: "huecos"). **Plasmones**: oscilación colectiva de los electrones con
$\omega_p = \sqrt{\frac{ne^2}{\varepsilon_0m}}$; por debajo de $\omega_p$ el metal refleja la luz (brillo metálico), por encima es transparente (los metales alcalinos en el ultravioleta).

**Sommerfeld** sustituye la estadística clásica por Fermi-Dirac: $E_F$ de unos eV, calor específico electrónico pequeño ($\propto T/T_F$) y ley de Wiedemann-Franz
$\kappa/(\sigma T) = \frac{\pi^2}{3}(k_B/e)^2$.

## 5. Bandas

**Teorema de Bloch**: en un potencial periódico, las funciones de onda son $\psi_k(\vec r) = e^{i\vec k\cdot\vec r}u_k(\vec r)$ con $u_k$ periódica; la energía $E_n(\vec k)$ es periódica en la red
recíproca y forma **bandas** separadas por **huecos** (gaps). Dos caminos para entenderlas:

- **Electrones casi libres**: un potencial débil abre huecos de tamaño $2|V_G|$ en los bordes de zona, donde la condición de Bragg mezcla $k$ y $k - G$.
- **Enlace fuerte**: orbitales atómicos que saltan a sus vecinos con amplitud $t$; en 1D, $E(k) = \varepsilon_0 - 2t\cos ka$, una banda de anchura $4t$.

Cerca de un mínimo, $E \approx E_0 + \frac{\hbar^2k^2}{2m^*}$ con **masa efectiva** $m^* = \hbar^2/(d^2E/dk^2)$: el electrón responde a fuerzas como una partícula libre de masa $m^*$. Bandas
estrechas (orbitales poco solapados) dan masas grandes; en el borde superior de una banda, $m^* < 0$: es más cómodo hablar de **huecos** de masa positiva.

**Metales, aislantes, semiconductores.** Cada banda admite 2 electrones por celda primitiva (por el espín). Si el número de electrones llena bandas enteras y el
siguiente hueco es grande, el sólido es **aislante** (diamante, 5,5 eV); si es pequeño (≲ 3 eV), **semiconductor** (Si 1,12 eV, GaAs 1,42 eV); si una banda queda a
medias, **metal** (Cu, con un electrón $s$ por átomo).

> [!example] Ejemplo resuelto 2: masa efectiva en una banda de enlace fuerte
> Con $t = 1$ eV y $a = 0{,}3$ nm, $E(k) = -2t\cos ka$: la banda mide $4t = 4$ eV. En $k = 0$, $\frac{d^2E}{dk^2} = 2ta^2$, así que $m^* = \frac{\hbar^2}{2ta^2} \approx 0{,}42\,m_e$: un electrón más "ligero" que el libre
> porque salta con facilidad. Si $t$ fuera 0,1 eV, $m^*$ sería diez veces mayor: las bandas planas de algunos materiales (grafeno bicapa girado) tienen masas enormes y
> física de electrones fuertemente correlacionados.

## 6. Semiconductores

En un semiconductor **intrínseco**, $n = p = n_i = \sqrt{N_cN_v}\,e^{-E_g/(2k_BT)}$, con $N_c$, $N_v$ las densidades efectivas de estados (para el Si a 300 K, $n_i \approx 7\cdot10^9$ cm⁻³, un
electrón libre por cada $10^{13}$ átomos). La **ley de acción de masas** $np = n_i^2$ vale también con dopaje. **Dopaje**: un átomo de fósforo (5 electrones) en silicio cede un
electrón casi libre (donador, tipo n); uno de boro (3), un hueco (aceptor, tipo p). Con $N_D \gg n_i$, $n \approx N_D$, $p = n_i^2/N_D$, y el nivel de Fermi sube
$E_F - E_i = k_BT\ln(N_D/n_i)$ sobre el intrínseco. La **unión p-n** crea una zona de agotamiento con un campo interno: es el diodo, la célula solar y, con dos uniones,
el transistor bipolar; el MOSFET controla con un campo la carga de un canal.

**Gap directo e indirecto**: en GaAs el mínimo de la banda de conducción y el máximo de la de valencia están en el mismo $k$ y la recombinación emite luz (LED,
láseres); en Si no, y hace falta un fonón: por eso el silicio no emite bien.

**Sistemas de baja dimensión**: en pozos cuánticos (2D) la densidad de estados es constante, $g = \frac{m^*}{\pi\hbar^2}$ por unidad de área (con espín); en GaAs,
$\approx 2{,}8\cdot10^{13}$ eV⁻¹cm⁻². Es la base de los transistores HEMT y del efecto Hall cuántico.

## 7. Magnetismo

- **Diamagnetismo**: respuesta débil y negativa de todos los materiales (y perfecta en los superconductores).
- **Paramagnetismo**: momentos independientes que se alinean con el campo contra la agitación térmica: **ley de Curie** $\chi = C/T$. En metales, el
  paramagnetismo de Pauli de los electrones de conducción es pequeño e independiente de $T$.
- **Ferromagnetismo**: la interacción de **canje** (cuántica, por el principio de Pauli y la repulsión coulombiana, no magnética) alinea los espines por debajo
  de $T_C$. Por encima, $\chi = \frac{C}{T - \theta}$ (**Curie-Weiss**, $\theta > 0$); el modelo de Ising y el campo medio de [[fis-mecanica-estadistica-avanzada]] lo describen. Con
  $\theta < 0$, el orden es **antiferromagnético**. Los **dominios** y la histéresis explican los imanes permanentes.

## 8. Superconductividad

Por debajo de $T_c$ algunos materiales tienen resistencia **cero** y expulsan el campo magnético (**efecto Meissner**). La teoría de **London** da $\nabla^2\vec B = \vec B/\lambda_L^2$ con
$\lambda_L = \sqrt{\frac{m}{\mu_0n_se^2}}$: el campo decae en unas decenas de nm. La teoría **BCS** (1957) explica el mecanismo: la interacción con los fonones produce una
atracción efectiva que forma **pares de Cooper**, bosones que se condensan en un estado coherente separado de las excitaciones por un **gap** $\Delta(0) = 1{,}764\,k_BT_c$
(la constante es $\pi e^{-\gamma_E}$). El flujo magnético a través de un anillo superconductor está cuantizado en $h/2e$, prueba de los pares. Los cupratos (1986) y
otros superconductores de alta $T_c$ no se explican con BCS convencional.

> [!example] Ejemplo resuelto 3: silicio dopado (con menos ayuda)
> Con $N_c = 2{,}8\cdot10^{19}$, $N_v = 1{,}04\cdot10^{19}$ cm⁻³ y $E_g = 1{,}12$ eV, calcula $n_i$ a 300 K ($k_BT = 0{,}02585$ eV): sale $\approx 6{,}7\cdot10^9$ cm⁻³. Dopa con $N_D = 10^{16}$: obtén $p = n_i^2/N_D$
> (unos 4500 huecos por cm³) y el desplazamiento del nivel de Fermi $k_BT\ln(N_D/n_i) \approx 0{,}37$ eV. Comprueba en el programa que resolviendo la neutralidad $n = p + N_D$ por
> bisección sale lo mismo.

## 9. Comprobar con un programa

Bragg con la red recíproca, la cadena diatómica diagonalizando su matriz dinámica, la masa efectiva por derivación numérica y el semiconductor dopado por
neutralidad de carga.

```python
import math

kB, e, hbar, me = 1.380649e-23, 1.602176634e-19, 1.054571817e-34, 9.1093837015e-31

# 1. Ejemplo resuelto 1: Bragg (111) del cobre y ausencias de la FCC.
a, lam = 0.3615, 0.15406
d = a / math.sqrt(3)
dos_theta = 2 * math.degrees(math.asin(lam / (2 * d)))
assert abs(dos_theta - 43.32) < 0.01
fcc = lambda h, k, l: abs(sum(complex(math.cos(math.pi * (h * x + k * y + l * z)), 0).real for x, y, z in ((0, 0, 0), (1, 1, 0), (1, 0, 1), (0, 1, 1))))
assert fcc(1, 1, 1) == 4 and fcc(1, 0, 0) == 0 and fcc(1, 1, 0) == 0 and fcc(2, 0, 0) == 4

# 2. Cadena diatómica: autovalores de la matriz dinámica 2×2 para k de 0 a π/a.
K, m1, m2 = 10.0, 1e-26, 2e-26
def ramas(ka):
    a11, a22 = 2 * K / m1, 2 * K / m2
    a12 = -K * abs(1 + complex(math.cos(ka), -math.sin(ka))) / math.sqrt(m1 * m2)
    tr, det = a11 + a22, a11 * a22 - a12 * a12
    disc = math.sqrt(tr * tr / 4 - det)
    return math.sqrt(max(tr / 2 - disc, 0)), math.sqrt(tr / 2 + disc)
ac0, op0 = ramas(0)
acB, opB = ramas(math.pi)
assert ac0 < 1e-3 and abs(op0 - math.sqrt(2 * K * (1 / m1 + 1 / m2))) < 1
assert abs(acB - math.sqrt(2 * K / m2)) < 1 and abs(opB - math.sqrt(2 * K / m1)) < 1   # hueco en el borde de zona

# 3. Ejemplo resuelto 2: masa efectiva por la curvatura de E(k) = −2t cos ka.
t, aa = 1.0 * e, 0.3e-9
E = lambda k: -2 * t * math.cos(k * aa)
dk = 1e6
mstar = hbar**2 / ((E(dk) - 2 * E(0) + E(-dk)) / dk**2) / me
assert abs(mstar - 0.4233) < 1e-3

# 4. Ejemplo resuelto 3: silicio dopado, neutralidad n = p + N_D por bisección.
kT = kB * 300 / e
Nc, Nv, Eg, ND = 2.8e19, 1.04e19, 1.12, 1e16
ni = math.sqrt(Nc * Nv) * math.exp(-Eg / (2 * kT))
lo, hi = 0.0, Eg
for _ in range(200):
    EF = (lo + hi) / 2
    n, p = Nc * math.exp(-(Eg - EF) / kT), Nv * math.exp(-EF / kT)
    lo, hi = (EF, hi) if n < p + ND else (lo, EF)
Ei = Eg / 2 + kT / 2 * math.log(Nv / Nc)
print("2θ(111) =", round(dos_theta, 2), "° | m* =", round(mstar, 4), "m_e | n_i =", f"{ni:.3e}", "cm⁻³ | E_F − E_i =", round(lo - Ei, 4), "eV")
assert abs((lo - Ei) - kT * math.log(ND / ni)) < 1e-6
```

## 10. Errores típicos

- Confundir la celda primitiva con la convencional al contar átomos o electrones por celda.
- Olvidar que la red recíproca lleva el factor $2\pi$ (o usar convenciones mezcladas).
- Aplicar la ley de Bragg a reflexiones prohibidas por el factor de estructura.
- Tratar la masa efectiva como la masa real del electrón, o como una constante en toda la banda.
- Usar $n = N_D$ cuando el dopaje no es mucho mayor que $n_i$ (a alta temperatura) o cuando los donadores no están ionizados (a baja).
- Atribuir el ferromagnetismo a la interacción entre dipolos magnéticos: es mil veces demasiado débil; el responsable es el canje.

## 11. Resumen

- Redes de Bravais, FCC (4, 74 %), BCC (2); Miller, $d = a/\sqrt{h^2 + k^2 + l^2}$; red recíproca; Laue ⇔ Bragg; zona de Brillouin; factor de estructura.
- Fonones: $\omega = 2\sqrt{K/m}|\operatorname{sen}(ka/2)|$; ramas acústica y óptica, hueco.
- Drude $\sigma = ne^2\tau/m$, Hall $R_H = 1/(nq)$, plasma $\omega_p$; Sommerfeld; Wiedemann-Franz.
- Bloch, bandas y huecos, enlace fuerte $4t$, masa efectiva $\hbar^2/E''$, huecos; metal, semiconductor, aislante.
- $n_i = \sqrt{N_cN_v}e^{-E_g/2kT}$, $np = n_i^2$, dopaje, $E_F - E_i = kT\ln(N_D/n_i)$, unión p-n, gap directo/indirecto, 2D: $m^*/\pi\hbar^2$.
- Magnetismo: Curie, Curie-Weiss, canje, dominios. Superconductividad: Meissner, London $\lambda_L$, BCS $\Delta = 1{,}764k_BT_c$, flujo $h/2e$.

## Repaso: lo que debe quedarte dentro de un mes

1. La periodicidad del cristal convierte los niveles atómicos en bandas.
2. Banda llena no conduce; banda a medias, sí; el tamaño del hueco decide el resto.
3. Unas pocas impurezas controlan la conductividad de un semiconductor.
4. La difracción mide la red recíproca, y con ella la estructura.
5. Superconductividad = pares de Cooper condensados con un gap.

## Siguiente

`ing-electronica-analogica` e `ing-microelectronica-vlsi` (dispositivos), `sec-seguridad-hardware` (canales laterales físicos) y `fis-teoria-cuantica-campos`
(cuasipartículas). La base estadística está en [[fis-mecanica-estadistica-avanzada]].
