---
id: fis-fisica-nuclear-particulas
title: "Física nuclear y de partículas: núcleos, desintegraciones, fisión y fusión, cinemática relativista, quarks, leptones e interacciones"
area: fisica
trunk_level: 14
prerequisites: [fis-mecanica-cuantica, fis-relatividad-especial]
academic_sources:
  - "Krane, K. S. Introductory Nuclear Physics. Wiley, 1988."
  - "Griffiths, D. Introduction to Elementary Particles, 2ª ed. revisada. Wiley-VCH, 2008."
exercises:
  - id: ligadura-del-carbono
    tier: 1
    prompt: |
      Con las masas atómicas $m(^1\mathrm H) = 1{,}007825032$ u, $m_n = 1{,}008664916$ u y $m(^{12}\mathrm C) = 12$ u exactas (1 u $= 931{,}494$ MeV), ¿cuál es la energía de ligadura del ¹²C en MeV? Respuesta: con **3 decimales**.
    answers: ["sha256:f63a2a0c1dbd09144f705b6861f230f35a40095d3d09a980a4283e3425f803c8"]
  - id: carbono-14
    tier: 1
    prompt: |
      ¿Qué fracción de ¹⁴C ($T_{1/2} = 5730$ años) queda al cabo de 10 000 años? Respuesta: con **4 decimales**.
    answers: ["sha256:e8e66eb8343cd236afa831e1ef9cdef511e953c521349403d44dbce7a13e0a65"]
  - id: energia-de-fision
    tier: 1
    prompt: |
      Si cada fisión de ²³⁵U libera 200 MeV, ¿cuánta energía da la fisión completa de 1 kg, en TJ? Respuesta: con **1 decimal**.
    answers: ["sha256:34451ebd844b85a3af3043b9cbd29cda316cf677884b1c4d4f7d512da3b21bb4"]
  - id: quarks
    tier: 1
    prompt: |
      ¿Cuál es la carga (en unidades de $e$) del $\Delta^{++}$ ($uuu$) y la extrañeza del $\Omega^-$ ($sss$)? Respuesta: `carga;extraneza`.
    answers: ["sha256:28bf16acee72a1c96175ab09bac6f9a3b521b5f3cb97b4d3bf3dffb6dcc9a14b"]
  - id: alcance-de-yukawa
    tier: 1
    prompt: |
      Si la fuerza nuclear la transmiten piones ($m_\pi c^2 = 139{,}570$ MeV), ¿cuál es su alcance $\hbar/(m_\pi c)$ en fm ($\hbar c = 197{,}327$ MeV·fm)? Respuesta: con **3 decimales**.
    answers: ["sha256:18c52269c5ca5001950d76d72d84d84f1985283dc4e19b8d659b57d2d27b157e"]
  - id: numero-de-sucesos
    tier: 1
    prompt: |
      Un proceso tiene sección eficaz de 50 pb y el detector acumula una luminosidad integrada de 140 fb⁻¹. ¿Cuántos sucesos se producen? Respuesta: un entero.
    answers: ["sha256:4efd4e347e50d8d3cb48e6436026593720f351971c11dccedc54789fb84062fd"]
  - id: isobaro-mas-estable
    tier: 2
    prompt: |
      Con la fórmula semiempírica ($a_V = 15{,}75$, $a_S = 17{,}8$, $a_C = 0{,}711$, $a_A = 23{,}7$, $a_P = 11{,}18$ MeV), ¿qué $Z$ tiene el isóbaro más estable de $A = 56$? Respuesta: un entero.
    answers: ["sha256:5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca"]
  - id: actividad-del-radio
    tier: 2
    prompt: |
      ¿Cuál es la actividad de 1 g de ²²⁶Ra ($T_{1/2} = 1600$ años, 226,025 g/mol, año de 365,25 días), en unidades de $10^{10}$ Bq? Respuesta: con **3 decimales**.
    answers: ["sha256:1d9ea4865a71c093c9b525f73fb4d858553f2376fac1925ec8a247ea8b0572ff"]
  - id: desintegracion-alfa
    tier: 2
    prompt: |
      En la desintegración $^{226}\mathrm{Ra} \to {}^{222}\mathrm{Rn} + \alpha$ (masas atómicas 226,0254098 u, 222,0175777 u y 4,002603254 u), ¿con qué energía cinética sale la partícula alfa, en MeV (no relativista)? Respuesta: con **3 decimales**.
    answers: ["sha256:81db95987a88974557df83b5c33ff7ee1b200dab0d5d977ab5545bade8bef213"]
  - id: fusion-dd
    tier: 2
    prompt: |
      En la fusión D + D → ³He + n (masas 2,014101778; 3,016029323 y 1,008664916 u), ¿qué energía cinética se lleva el neutrón, en MeV (cálculo no relativista, reactivos en reposo)? Respuesta: con **2 decimales**.
    answers: ["sha256:0be838584e0bb2d91b88cd607e07af75c480506ee612a8143233b6a13672ec6c"]
  - id: barrera-de-coulomb
    tier: 2
    prompt: |
      ¿Cuál es la altura de la barrera de Coulomb entre un deuterón y un tritón en contacto, con $R = 1{,}2A^{1/3}$ fm para cada uno y $e^2/(4\pi\varepsilon_0) = 1{,}44$ MeV·fm? Respuesta: en MeV con **3 decimales**.
    answers: ["sha256:3a46e5d357db844905778c70778aa369978aea35863c3c9ca012393ffb3f7f2c"]
  - id: desintegracion-del-pion
    tier: 2
    prompt: |
      Un $\pi^+$ ($139{,}570$ MeV) en reposo se desintegra en $\mu^+$ ($105{,}658$ MeV) y un neutrino sin masa. ¿Qué momento tiene el muon, en MeV/$c$? Respuesta: con **2 decimales**.
    answers: ["sha256:17866820ed08d557bdd5fbcde7308d043a0cc0b5288a1c55c5e2f614451e2ee9"]
  - id: masa-invariante
    tier: 2
    prompt: |
      Se detectan dos fotones de 80 y 50 GeV que forman un ángulo de $100°$. ¿Cuál es la masa invariante del par, en GeV? Respuesta: con **2 decimales**.
    answers: ["sha256:e6aa034b2b862a6bfcad7bccc7c7f58e76737589ddb04bd3efe6f99ab1fb1d25"]
  - id: leyes-de-conservacion
    tier: 2
    prompt: |
      ¿Cuántas de estas reacciones conservan carga, número bariónico y número leptónico de cada sabor? $n \to p + e^- + \bar\nu_e$; $p \to e^+ + \gamma$; $\mu^- \to e^- + \bar\nu_e + \nu_\mu$; $\pi^0 \to \gamma + \gamma$; $n \to p + e^-$. Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: anchura-del-muon
    tier: 3
    prompt: |
      ¿Cuál es la anchura de desintegración $\Gamma = \hbar/\tau$ del muon ($\tau = 2{,}1969811\ \mu$s, $\hbar = 6{,}582\,119\,569\cdot10^{-22}$ MeV·s), en unidades de $10^{-16}$ MeV? Respuesta: con **3 decimales**.
    answers: ["sha256:c99d88e3bb7aa6ca2bb7a588bc8e745cad12060b679b2a838931957ce0500b59"]
  - id: oscilacion-de-neutrinos
    tier: 3
    prompt: |
      Con dos sabores, $P(\nu_\mu \to \nu_e) = \operatorname{sen}^2 2\theta\,\operatorname{sen}^2\left(1{,}267\,\frac{\Delta m^2[\text{eV}^2]\,L[\text{km}]}{E[\text{GeV}]}\right)$. Con $\operatorname{sen}^2 2\theta = 0{,}1$, $\Delta m^2 = 2{,}5\cdot10^{-3}$ eV², $L = 810$ km y $E = 2$ GeV, ¿cuánto vale? Respuesta: con **4 decimales**.
    answers: ["sha256:ec608b994cc65253c54c15de7b7beed828ab7070899bea92a785f2bd20e47cbf"]
---

# Física nuclear y de partículas: núcleos, desintegraciones, fisión y fusión, cinemática relativista, quarks, leptones e interacciones

Toda la materia ordinaria está hecha de tres partículas (quarks $u$, $d$ y electrones) unidas por cuatro interacciones. La física nuclear explica por qué
brillan las estrellas, cómo funcionan los reactores, la datación por carbono y la medicina nuclear; la física de partículas, qué hay más abajo: el
**modelo estándar**, con sus quarks, leptones y bosones, verificado hasta el descubrimiento del bosón de Higgs en 2012. Este nodo combina la cuántica de
[[fis-mecanica-cuantica]] con la cinemática de [[fis-relatividad-especial]], y termina en los neutrinos que cambian de sabor.

## Objetivos

Al terminar sabrás:

1. Calcular energías de ligadura y usar la fórmula semiempírica de masas (estabilidad, isóbaros).
2. Aplicar la ley de desintegración, actividades y datación; calcular valores Q y repartos de energía en desintegraciones α y β.
3. Explicar fisión y fusión (barrera de Coulomb, efecto túnel) y estimar las energías liberadas.
4. Hacer cinemática relativista de desintegraciones y colisiones (masa invariante, sucesos y luminosidad).
5. Describir el modelo estándar: quarks, leptones, bosones, números cuánticos y leyes de conservación.
6. Calcular alcances de interacciones (Yukawa), anchuras y oscilaciones de neutrinos.

## Qué debes dominar antes

[[fis-mecanica-cuantica]] (pozos, efecto túnel, espín, momento angular) y [[fis-relatividad-especial]] (energía, momento y masa invariante). La
estadística de [[mat-procesos-estocasticos]] (Poisson) aparece en desintegraciones y conteos.

> [!question] Test de entrada
> 1. ¿Cuál es la relación entre energía, momento y masa de una partícula?
> 2. ¿Qué es el efecto túnel?
> 3. ¿Cuántos protones y neutrones tiene el ²³⁸U (Z = 92)?
>
> Respuestas: $E^2 = (pc)^2 + (mc^2)^2$; atravesar una barrera de potencial más alta que la energía, con probabilidad que decae exponencialmente con la anchura; 92 y 146.

## 1. Para qué sirve

- **Energía**: reactores de fisión, investigación en fusión (ITER, NIF), generadores de radioisótopos de sondas espaciales.
- **Medicina**: PET (positrones), radioterapia con protones e iones, gammagrafía con ⁹⁹ᵐTc.
- **Datación y trazadores**: carbono 14, potasio-argón, uranio-plomo; trazadores en geología e industria.
- **Física fundamental**: aceleradores (LHC), detectores de neutrinos, astrofísica nuclear (cómo se forman los elementos).
- **Seguridad**: detección de material nuclear, protección radiológica.

## 2. Núcleos y energía de ligadura

Un núcleo tiene $Z$ protones y $N$ neutrones ($A = Z + N$), radio $R \approx 1{,}2A^{1/3}$ fm (densidad casi constante). Su masa es menor que la de sus componentes: la
**energía de ligadura** es $B = [Zm(^1\mathrm H) + Nm_n - m(\text{átomo})]c^2$ (con masas atómicas, los electrones se cancelan). La curva de $B/A$ crece hasta un máximo de
$\approx 8{,}8$ MeV cerca del hierro y del níquel y baja después: por eso **fusionar** núcleos ligeros y **fisionar** pesados libera energía.

**Fórmula semiempírica** (modelo de la gota líquida):

$$
B = a_VA - a_SA^{2/3} - a_C\frac{Z(Z - 1)}{A^{1/3}} - a_A\frac{(A - 2Z)^2}{A} + \delta,
$$

con términos de volumen, superficie, repulsión de Coulomb, asimetría (el principio de Pauli favorece $N \approx Z$) y apareamiento ($\delta > 0$ par-par, $< 0$ impar-impar).
Minimizando la masa a $A$ fijo se obtiene el **valle de estabilidad**: para $A = 56$, el isóbaro más estable es $Z = 26$, el hierro. Los núcleos con números
"mágicos" (2, 8, 20, 28, 50, 82, 126) son especialmente estables: el **modelo de capas** los explica con un potencial y fuerte interacción espín-órbita.

> [!example] Ejemplo resuelto 1: el ⁴He
> $B = (2\cdot1{,}007825 + 2\cdot1{,}008665 - 4{,}002603)\cdot931{,}494$ MeV $\approx 28{,}3$ MeV, unos 7,1 MeV por nucleón, mucho más que el deuterón (1,1 MeV por nucleón). Ese salto es lo
> que libera la fusión en el Sol y lo que hace que los núcleos pesados emitan partículas α en lugar de protones sueltos.

## 3. Desintegraciones

**Ley de desintegración**: $N(t) = N_0e^{-\lambda t}$, con vida media $\tau = 1/\lambda$ y periodo $T_{1/2} = \ln2/\lambda$; la **actividad** es $A = \lambda N$ (becquerelios). Un gramo de ²²⁶Ra da $\approx 3{,}66\cdot10^{10}$ Bq
(la definición histórica del curio). Cada desintegración es un proceso de Poisson: el número contado en un intervalo fluctúa como $\sqrt N$.

- **α**: $^A_ZX \to {}^{A-4}_{Z-2}Y + \alpha$. El valor $Q = [m_X - m_Y - m_\alpha]c^2$ se reparte por conservación del momento: el α se lleva $Q\frac{m_Y}{m_Y + m_\alpha}$. La teoría de Gamow (efecto
  túnel a través de la barrera de Coulomb) explica por qué los periodos van de microsegundos a miles de millones de años con cambios pequeños de $Q$
  (ley de Geiger-Nuttall).
- **β**: $n \to p + e^- + \bar\nu_e$ (o $p \to n + e^+ + \nu_e$ dentro de núcleos). El espectro continuo del electrón llevó a Pauli a proponer el neutrino.
- **γ**: un núcleo excitado emite un fotón; los niveles nucleares están en la escala de keV a MeV.

**Datación**: con el ¹⁴C ($T_{1/2} = 5730$ años), tras 10 000 años queda $2^{-10000/5730} \approx 0{,}298$ del original.

## 4. Fisión y fusión

**Fisión**: un neutrón lento hace oscilar al ²³⁵U, que se parte en dos fragmentos, 2–3 neutrones y unos 200 MeV (1 kg equivale a unos 82 TJ, la energía de
20 000 toneladas de TNT). Si en promedio más de un neutrón provoca otra fisión, hay **reacción en cadena**; los reactores la mantienen crítica ($k = 1$) con moderadores
y barras de control, y dependen de los **neutrones retardados** para ser controlables.

**Fusión**: en D + T → ⁴He + n se liberan 17,6 MeV, y el neutrón se lleva unos 14,1 MeV (el más ligero se lleva la mayor parte, por conservación del momento). Para
acercarse, los núcleos deben vencer la **barrera de Coulomb** (unos 0,44 MeV para D-T en contacto), pero gracias al **efecto túnel** basta con temperaturas de unos
$10^8$ K, donde la energía térmica media es solo de ~10 keV. En el Sol, la cadena protón-protón convierte hidrógeno en helio a 15 millones de K con una
reacción débil lentísima, que por eso dura miles de millones de años.

## 5. Cinemática de partículas

Todo se reduce a cuadrimomentos. En una desintegración a dos cuerpos en reposo, las energías están fijadas: en $\pi^+ \to \mu^+\nu_\mu$, $p_\mu = \frac{m_\pi^2 - m_\mu^2}{2m_\pi} \approx 29{,}8$ MeV/c.
La **masa invariante** de los productos, $M^2 = (\sum E)^2 - |\sum\vec p|^2$, reconstruye la partícula que se desintegró: dos fotones con $E_1$, $E_2$ y ángulo $\theta$ dan
$M = \sqrt{2E_1E_2(1 - \cos\theta)}$; un pico en $M \approx 125$ GeV fue la señal del Higgs. En un colisionador, el número de sucesos es $N = \sigma\int L\,dt$: con 140 fb⁻¹ y 50 pb,
siete millones de sucesos.

> [!example] Ejemplo resuelto 2: la desintegración del pion
> En reposo, $m_\pi = E_\mu + E_\nu$ con $|\vec p_\mu| = |\vec p_\nu| = p$ y $E_\nu = p$. Entonces $m_\pi - p = \sqrt{p^2 + m_\mu^2}$; elevando al cuadrado, $p = \frac{m_\pi^2 - m_\mu^2}{2m_\pi}$. Con $139{,}57$ y $105{,}66$ MeV,
> $p \approx 29{,}79$ MeV/c y el muon tiene solo 4,1 MeV de energía cinética: sale lento, y por eso deja una traza corta y característica en las emulsiones donde se
> descubrió (1947).

## 6. El modelo estándar

- **Quarks** (espín $\frac12$, carga fraccionaria, tres "colores"): $u$, $c$, $t$ (carga $+\frac23$) y $d$, $s$, $b$ ($-\frac13$). Se agrupan en **bariones** ($qqq$: protón $uud$, neutrón $udd$,
  $\Delta^{++}$ $uuu$, $\Omega^-$ $sss$) y **mesones** ($q\bar q$: piones, kaones). Nunca aparecen sueltos (**confinamiento**).
- **Leptones**: $e$, $\mu$, $\tau$ y sus neutrinos.
- **Interacciones** y bosones: fuerte (gluones, cromodinámica cuántica), electromagnética (fotón), débil ($W^\pm$, $Z$, masas de 80 y 91 GeV) y el **bosón de Higgs**, que da
  masa a $W$, $Z$ y a los fermiones.

**Leyes de conservación**: siempre carga, energía-momento, número bariónico $B$ y (en el modelo estándar sin masas de neutrinos) número leptónico de cada sabor.
La fuerte conserva extrañeza y demás sabores; la débil no (por eso las partículas extrañas viven $10^{-10}$ s en lugar de $10^{-23}$ s). $p \to e^+\gamma$ violaría $B$: el
protón es estable (vida media $> 10^{34}$ años); $n \to p + e^-$ violaría el número leptónico.

**Alcance y masa** (Yukawa): una interacción transmitida por una partícula de masa $m$ tiene alcance $\sim\hbar/(mc)$: piones, 1,4 fm (el tamaño del núcleo); $W$, $2\cdot10^{-3}$ fm
(por eso la débil es "débil" a bajas energías). Las partículas inestables tienen una **anchura** $\Gamma = \hbar/\tau$; la del muon la predice la teoría de Fermi,
$\Gamma = \frac{G_F^2m_\mu^5}{192\pi^3}$ (en unidades naturales), con un 0,5 % de diferencia debida a correcciones radiativas.

## 7. Neutrinos que cambian de sabor

Los neutrinos de sabor definido son mezclas de estados de masa definida. Al propagarse, las fases de esos estados avanzan a ritmos distintos y el sabor
**oscila**: con dos sabores,

$$
P(\nu_\alpha \to \nu_\beta) = \operatorname{sen}^2 2\theta\,\operatorname{sen}^2\left(1{,}267\,\frac{\Delta m^2[\text{eV}^2]\,L[\text{km}]}{E[\text{GeV}]}\right).
$$

Que oscilen prueba que **tienen masa** (Nobel 2015), lo primero que el modelo estándar original no explicaba. Los experimentos colocan detectores a la distancia
$L$ donde la fase es $\approx\pi/2$ para la energía del haz.

> [!example] Ejemplo resuelto 3: un experimento de oscilación (con menos ayuda)
> Con $\Delta m^2 = 2{,}5\cdot10^{-3}$ eV², $E = 2$ GeV y $L = 810$ km, calcula la fase $1{,}267\,\Delta m^2L/E \approx 1{,}28$ rad y la probabilidad con $\operatorname{sen}^2 2\theta = 0{,}1$. Comprueba que sale $\approx 0{,}092$, cerca del máximo
> posible $0{,}1$, y busca a qué distancia exacta sería máximo ($\approx 992$ km).

## 8. Comprobar con un programa

La energía de ligadura y el valle de estabilidad con la fórmula semiempírica, la desintegración α y la fusión D-T repartiendo el momento, y la masa
invariante con cuadrivectores.

```python
import math

u = 931.49410242
mH, mn = 1.00782503207, 1.00866491595

# 1. Ejemplo resuelto 1 y valle de estabilidad: el isóbaro más estable de A = 56 es Z = 26 (hierro).
aV, aS, aC, aA, aP = 15.75, 17.8, 0.711, 23.7, 11.18
def ligadura(Z, A):
    N = A - Z
    d = aP / math.sqrt(A) if Z % 2 == 0 and N % 2 == 0 else (-aP / math.sqrt(A) if Z % 2 and N % 2 else 0)
    return aV * A - aS * A ** (2 / 3) - aC * Z * (Z - 1) / A ** (1 / 3) - aA * (A - 2 * Z) ** 2 / A + d
masa = lambda Z, A: Z * mH * u + (A - Z) * mn * u - ligadura(Z, A)
assert min(range(1, 56), key=lambda Z: masa(Z, 56)) == 26
assert abs((2 * mH + 2 * mn - 4.00260325413) * u - 28.296) < 1e-3
por_nucleon = {A: ligadura(min(range(1, A), key=lambda Z: masa(Z, A)), A) / A for A in range(20, 240)}
assert 50 < max(por_nucleon, key=por_nucleon.get) < 70     # máximo de B/A cerca del hierro

# 2. Reparto de energía: α del ²³⁸U y neutrón de la fusión D-T (momento compartido).
def reparto(Q, ma, mb):
    return Q * mb / (ma + mb)       # energía del cuerpo de masa ma
Qa = (238.0507884 - 234.0436014 - 4.00260325413) * u
Qf = (2.01410177812 + 3.0160492779 - 4.00260325413 - mn) * u
assert abs(reparto(Qa, 4.0026, 234.0436) - 4.198) < 2e-3 and abs(Qf - 17.589) < 2e-3
assert abs(reparto(Qf, mn, 4.0026) - 14.05) < 0.01

# 3. Ejemplo resuelto 2 y masa invariante de dos fotones.
mpi, mmu = 139.57039, 105.6583755
p = (mpi**2 - mmu**2) / (2 * mpi)
assert abs(math.sqrt(p * p + mmu * mmu) + p - mpi) < 1e-9
th = math.radians(100)
p1, p2 = (80, 80, 0), (50, 50 * math.cos(th), 50 * math.sin(th))
s = [a + b for a, b in zip(p1, p2)]
M = math.sqrt(s[0] ** 2 - s[1] ** 2 - s[2] ** 2)
print("p_μ =", round(p, 2), "MeV/c | M(γγ) =", round(M, 2), "GeV | B/A máxima en A =", max(por_nucleon, key=por_nucleon.get))
assert abs(M - math.sqrt(2 * 80 * 50 * (1 - math.cos(th)))) < 1e-9
```

## 9. Errores típicos

- Mezclar masas atómicas y nucleares en un mismo balance (los electrones no se cancelan; en β⁺ hay que restar $2m_ec^2$).
- Dar toda la energía $Q$ a la partícula ligera sin repartir el momento con el núcleo de retroceso.
- Confundir vida media $\tau$ y periodo de semidesintegración $T_{1/2} = \tau\ln 2$.
- Calcular la energía disponible en una colisión de blanco fijo sumando energías de laboratorio en lugar de usar la masa invariante.
- Olvidar el factor de color o las cargas fraccionarias al sumar números cuánticos de los quarks.
- Pensar que la oscilación de neutrinos depende de $L$ o $E$ por separado: depende de $L/E$.

## 10. Resumen

- $R \approx 1{,}2A^{1/3}$ fm; $B = [Zm_H + Nm_n - m]c^2$; $B/A$ máximo cerca del hierro; fórmula semiempírica; valle de estabilidad; números mágicos.
- $N = N_0e^{-\lambda t}$, $A = \lambda N$, $T_{1/2} = \ln2/\lambda$; α (Gamow, reparto de $Q$), β (neutrino), γ; datación.
- Fisión (200 MeV, reacción en cadena, retardados), fusión (17,6 MeV en D-T, barrera de Coulomb y túnel).
- Cinemática: dos cuerpos, masa invariante, $N = \sigma\int L$.
- Modelo estándar: 6 quarks, 6 leptones, gluones, fotón, $W$, $Z$, Higgs; conservación de $B$ y $L$; Yukawa $\hbar/(mc)$; $\Gamma = \hbar/\tau$; teoría de Fermi.
- Oscilaciones: $\operatorname{sen}^22\theta\operatorname{sen}^2(1{,}267\Delta m^2L/E)$ ⇒ los neutrinos tienen masa.

## Repaso: lo que debe quedarte dentro de un mes

1. La energía nuclear es masa: la curva de $B/A$ explica fisión y fusión.
2. Repartir $Q$ exige conservar el momento.
3. La masa invariante es la herramienta universal de la física de partículas.
4. Lo que se conserva (carga, $B$, $L$) dice qué puede pasar; la masa del mediador, a qué distancia.
5. Los neutrinos oscilan, luego tienen masa.

## Siguiente

`fis-teoria-cuantica-campos` (el lenguaje del modelo estándar) y `fis-astrofisica` (nucleosíntesis estelar y objetos compactos). La cinemática está en
[[fis-relatividad-especial]].
