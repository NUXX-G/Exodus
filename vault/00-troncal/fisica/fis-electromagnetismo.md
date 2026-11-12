---
id: fis-electromagnetismo
title: "Electromagnetismo: ecuaciones de Maxwell, potenciales, materiales, ondas y condiciones de contorno"
area: fisica
trunk_level: 12
prerequisites: [fis-mecanica-clasica, fis-electricidad-magnetismo-1]
academic_sources:
  - "Griffiths, D. J. Introduction to Electrodynamics, 4ª ed. Cambridge University Press, 2017."
  - "Purcell, E. M.; Morin, D. J. Electricity and Magnetism, 3ª ed. Cambridge University Press, 2013."
  - "Jackson, J. D. Classical Electrodynamics, 3ª ed. Wiley, 1999."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, Vol. II. Addison-Wesley, 1964."
  - "Born, M.; Wolf, E. Principles of Optics, 7ª ed. (ampliada). Cambridge University Press, 1999."
ctf_flag: "sha256:7246b92f2c6440c4c0f195225e5528d8f75e2dbf41096d1943992cf65fea8ad8"
hints:
  - "(a) El potencial es lineal en la carga: corta la placa por el punto en cuatro rectángulos que tienen a P en una esquina, y suma. (b) Cada lado es un hilo recto finito; por simetría solo sobrevive la componente z de cada contribución. (c) Impón la continuidad de las componentes tangenciales de E y de H en la interfaz para la onda incidente, la reflejada y la transmitida."
  - "(a) La integral ∫₀ᵘ∫₀ᵛ dx dy/√(x²+y²) tiene primitiva cerrada con asinh; contrástala con una cuadratura numérica en polares. (b) Integra Biot-Savart numéricamente lado a lado (troceando cada lado en miles de segmentos), o usa la fórmula del hilo finito proyectada sobre el eje. (c) La ley de Snell da el ángulo transmitido; el sistema 2×2 de condiciones de contorno se resuelve a mano o con Cramer."
  - "Griffiths, §2.3 (potencial de distribuciones continuas), §5.2 (ley de Biot-Savart y el hilo finito) y §9.3 (reflexión y transmisión con incidencia oblicua, ecuaciones de Fresnel). Born & Wolf, §1.5. Documentación: docs.scipy.org, scipy.integrate."
exercises:
  - id: potencial-de-una-carga
    tier: 1
    prompt: |
      ¿Qué potencial crea una carga puntual de $2$ nC a $0{,}5$ m de distancia, tomando $V = 0$ en el infinito? Usa $k = 1/(4\pi\varepsilon_0) = 8{,}9876\cdot10^9$ N·m$^2$/C$^2$. Respuesta: en voltios, con **2 decimales**.
    answers: ["sha256:b4f16cf58f21b5fb359324f5a80d48835b17c519f514d809129b5bcc7f4301aa"]
  - id: campo-dentro-de-una-esfera
    tier: 1
    prompt: |
      Una esfera de radio $0{,}1$ m tiene una carga de $10$ nC repartida uniformemente en su volumen. Con la ley de Gauss, ¿cuánto vale el campo eléctrico a $0{,}05$ m del centro? ($k = 8{,}9876\cdot10^9$.) Respuesta: en V/m, con **1 decimal**.
    answers: ["sha256:87b97e3fea11d1ec41f20b58f7f5c80668710164252e44cf86e2ea7efb0ef8c1"]
  - id: condensador-plano
    tier: 1
    prompt: |
      ¿Cuál es la capacidad de un condensador de placas paralelas de $100$ cm$^2$ separadas $1$ mm por aire ($\varepsilon_0 = 8{,}8542\cdot10^{-12}$ F/m), despreciando los bordes? Respuesta: en picofaradios, con **2 decimales**.
    answers: ["sha256:c8d72af991d81d131307c8e90cece4005d94a1884d9cc16bdb1d568d0bd0effd"]
  - id: campo-de-un-hilo
    tier: 1
    prompt: |
      ¿Qué campo magnético crea un hilo recto muy largo con $10$ A a $2$ cm de distancia ($\mu_0 = 4\pi\cdot10^{-7}$ T·m/A)? Respuesta: en microteslas, un entero.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: campo-de-un-solenoide
    tier: 2
    prompt: |
      Un solenoide largo tiene $1000$ espiras por metro y lleva $2$ A. ¿Cuánto vale el campo en su interior, lejos de los extremos ($\mu_0 = 4\pi\cdot10^{-7}$)? Respuesta: en militeslas, con **3 decimales**.
    answers: ["sha256:1ebcc747f52fd7b8fbdc51f1b50e3c7304c6e00007e74e8af1a0425445d94133"]
  - id: inductancia-de-un-solenoide
    tier: 2
    prompt: |
      ¿Cuál es la autoinducción de un solenoide de $0{,}5$ m de longitud, $1$ cm de radio y $1000$ espiras por metro, en la aproximación de solenoide largo ($\mu_0 = 4\pi\cdot10^{-7}$)? Respuesta: en milihenrios, con **4 decimales**.
    answers: ["sha256:14b4c802830b2ddcd2023a74c38407d3104c2ac3f58026b03c615ee00d6cfc40"]
  - id: fem-inducida
    tier: 2
    prompt: |
      Una espira fija de $0{,}02$ m$^2$ está en un campo uniforme perpendicular a ella, $B(t) = 0{,}5\sin(100\pi t)$ T. ¿Cuál es el valor máximo de la fuerza electromotriz inducida? Respuesta: en voltios, con **4 decimales**.
    answers: ["sha256:23741492d396d4d556f0982fbcc97870d7b0e61859d7d7619d8418f875a42602"]
  - id: intensidad-de-una-onda
    tier: 2
    prompt: |
      Una onda plana en el vacío tiene un campo eléctrico de amplitud $E_0 = 100$ V/m. ¿Cuál es su intensidad (promedio temporal del vector de Poynting)? Usa $c = 2{,}9979\cdot10^8$ m/s y $\varepsilon_0 = 8{,}8542\cdot10^{-12}$ F/m. Respuesta: en W/m$^2$, con **2 decimales**.
    answers: ["sha256:eeb50536bc03ad7083d981775b635911f9faccddda98468913447c87545bdbf5"]
  - id: angulo-critico
    tier: 2
    prompt: |
      ¿A partir de qué ángulo de incidencia hay reflexión total interna para la luz que va de un vidrio de índice $1{,}5$ al aire? Respuesta: en grados, con **2 decimales**.
    answers: ["sha256:107f6e82fdb794613294f91f390554d22adf5e119c6098d2cae0bc93c9a7c65f"]
  - id: angulo-de-brewster
    tier: 2
    prompt: |
      ¿Con qué ángulo de incidencia la luz reflejada en la superficie del agua ($n = 1{,}333$), llegando desde el aire, sale totalmente polarizada? Respuesta: en grados, con **2 decimales**.
    answers: ["sha256:8060e00644b9375d837f11ee3b3c941dec4c55f93f431dc4588410034ac443bc"]
  - id: reflectancia-del-diamante
    tier: 2
    prompt: |
      ¿Qué fracción de la intensidad se refleja cuando la luz incide perpendicularmente desde el aire sobre un diamante de índice $2{,}42$? Respuesta: con **4 decimales**.
    answers: ["sha256:072b9ba3bcbd3f1286fdc943c766708b21c662149160f872576b68dd28aa7f37"]
  - id: profundidad-de-penetracion
    tier: 3
    prompt: |
      ¿Cuál es la profundidad de penetración (efecto pelicular) $\delta = \sqrt{2\rho/(\omega\mu_0)}$ de una corriente de $50$ Hz en cobre ($\rho = 1{,}68\cdot10^{-8}$ Ω·m, $\mu_0 = 4\pi\cdot10^{-7}$)? Respuesta: en milímetros, con **2 decimales**.
    answers: ["sha256:6dc3c62af057c166f3bf4084fa2e725bcaa8ec48d7742c03a0baafa69624c2d4"]
  - id: metodo-de-las-imagenes
    tier: 3
    prompt: |
      Una carga de $1$ μC está a $10$ cm de un plano conductor infinito conectado a tierra. ¿Con qué fuerza la atrae el plano? ($k = 8{,}9876\cdot10^9$.) Respuesta: en newtons, con **4 decimales**.
    answers: ["sha256:beecf420b1e5d029b23422270f7e8afccecec5220a4e031c1cc4dd73be048ba2"]
  - id: frecuencia-ciclotron
    tier: 3
    prompt: |
      ¿Con qué frecuencia gira un protón ($q = 1{,}6022\cdot10^{-19}$ C, $m = 1{,}6726\cdot10^{-27}$ kg) en un campo magnético uniforme de $1$ T, perpendicular a su velocidad (régimen no relativista)? Respuesta: en MHz, con **3 decimales**.
    answers: ["sha256:1818f4909e5212c506979ab620cd78fe50e63d935bb66768f947e4aa88070f46"]
  - id: cable-coaxial
    tier: 3
    prompt: |
      Un cable coaxial tiene conductor interior de radio $0{,}5$ mm, exterior de radio $1{,}75$ mm y un dieléctrico con $\varepsilon_r = 2{,}25$ (no magnético). ¿Cuál es su capacidad por unidad de longitud y su impedancia característica $Z_0 = \sqrt{L'/C'}$? Usa $\varepsilon_0 = 8{,}8542\cdot10^{-12}$ F/m y $\mu_0 = 4\pi\cdot10^{-7}$ H/m. Respuesta: `C;Z0`, $C$ en pF/m con **2 decimales** y $Z_0$ en ohmios con **1 decimal**.
    answers: ["sha256:e4425623ba7e4dd625cc8bcd3876e95c254543c2530a330f56b9753dbadfcf54"]
  - id: campo-en-el-eje-de-una-espira
    tier: 3
    prompt: |
      Una espira circular de radio $0{,}1$ m lleva $5$ A. ¿Cuánto vale el campo magnético en un punto de su eje a $0{,}1$ m del centro ($\mu_0 = 4\pi\cdot10^{-7}$)? Respuesta: en microteslas, con **2 decimales**.
    answers: ["sha256:8f0eb1f92756aa3b0e221f60515dfa829d96d873962636416c9041634aab2acc"]
---

# Electromagnetismo: ecuaciones de Maxwell, potenciales, materiales, ondas y condiciones de contorno

[[fis-electricidad-magnetismo-1]] presentó los campos con leyes integrales y casos con mucha simetría. Este nodo da el paso siguiente: escribe
el electromagnetismo como **cuatro ecuaciones diferenciales** para $\mathbf E$ y $\mathbf B$, las resuelve en situaciones sin simetría, muestra
que predicen la luz y termina en las **condiciones de contorno**, que es donde el electromagnetismo se vuelve ingeniería: líneas de transmisión,
antenas, fibra óptica, apantallamiento y [[ing-circuitos]].

Se usan unidades del SI. Desde 2019, $\mu_0$ ya no vale exactamente $4\pi\times10^{-7}$ N/A$^2$, aunque coincide con ese valor en sus nueve primeras
cifras significativas; $\varepsilon_0 = 1/(\mu_0c^2)$ y $k = 1/(4\pi\varepsilon_0) \approx 8{,}9876\cdot10^9$ N·m$^2$/C$^2$.

## Objetivos

Al terminar sabrás:

1. Usar divergencia, rotacional y los teoremas de Gauss y Stokes para pasar de leyes integrales a diferenciales y viceversa.
2. Calcular campos y potenciales de distribuciones continuas, y resolver problemas con conductores (unicidad, método de las imágenes).
3. Tratar dieléctricos ($\mathbf D$, $\varepsilon_r$) y calcular capacidades, inductancias y la impedancia de un cable coaxial.
4. Calcular campos magnéticos con Biot-Savart y Ampère sin simetría completa (hilo finito, espira, solenoide).
5. Aplicar Faraday e inductancia, y escribir las cuatro ecuaciones de Maxwell explicando la corriente de desplazamiento.
6. Deducir la ecuación de ondas, describir la onda plana y calcular su intensidad con el vector de Poynting.
7. Deducir Snell y Fresnel de las condiciones de contorno; usar Brewster, la reflexión total interna y la profundidad de penetración.

## Qué debes dominar antes

[[fis-electricidad-magnetismo-1]] (Coulomb, Gauss, potencial, Biot-Savart, Ampère y Faraday en forma integral) y, a través de
[[fis-mecanica-clasica]], [[mat-calculo-multivariable]] (gradiente, integrales de línea, de superficie y de volumen).

> [!question] Test de entrada
> 1. ¿Cuánto vale el flujo de $\mathbf E$ a través de una superficie cerrada que encierra $3$ nC?
> 2. ¿Cuánto vale $\nabla\cdot\mathbf r$ para $\mathbf r = (x, y, z)$?
> 3. ¿Qué dice la ley de Lenz?
>
> Respuestas: $Q/\varepsilon_0 \approx 339$ V·m; $3$; la corriente inducida se opone a la variación del flujo que la produce.

## 1. Para qué sirve

- **Electrónica de alta frecuencia y comunicaciones**: líneas de transmisión, impedancia característica ($50$ Ω), antenas y guías de onda.
- **Óptica y fotónica**: recubrimientos antirreflejo, polarizadores, fibra óptica (reflexión total interna).
- **Energía**: transformadores, motores, efecto pelicular en los conductores de alterna.
- **Compatibilidad electromagnética**: apantallamientos y acoplamientos entre pistas de una placa.
- **Física moderna**: la invariancia de $c$ en las ecuaciones de Maxwell llevó a la relatividad especial; el campo cuantizado es el fotón
  ([[fis-mecanica-cuantica]]).

## 2. El cálculo vectorial que hace falta

- **Divergencia** $\nabla\cdot\mathbf F$: flujo neto por unidad de volumen que sale de un punto (fuentes y sumideros).
- **Rotacional** $\nabla\times\mathbf F$: circulación por unidad de área alrededor de un punto (remolinos).
- **Teorema de la divergencia (Gauss)**: $\oint_{\partial\Omega}\mathbf F\cdot d\mathbf A = \int_\Omega \nabla\cdot\mathbf F\, dV$.
- **Teorema de Stokes**: $\oint_{\partial S}\mathbf F\cdot d\boldsymbol\ell = \int_S (\nabla\times\mathbf F)\cdot d\mathbf A$.
- Identidades: $\nabla\times(\nabla f) = 0$, $\nabla\cdot(\nabla\times\mathbf F) = 0$ y $\nabla\times(\nabla\times\mathbf F) = \nabla(\nabla\cdot\mathbf F) - \nabla^2\mathbf F$.

Las dos primeras identidades explican los potenciales: si un campo tiene rotacional nulo es un gradiente, y si tiene divergencia nula es un
rotacional.

## 3. Electrostática

**Ley de Coulomb y superposición.** El campo de una distribución de carga $\rho$ es

$$
\mathbf E(\mathbf r) = \frac{1}{4\pi\varepsilon_0} \int \rho(\mathbf r')\, \frac{\mathbf r - \mathbf r'}{\lvert\mathbf r - \mathbf r'\rvert^3}\, d^3r' .
$$

Como $\nabla\times\mathbf E = 0$, existe un **potencial** con $\mathbf E = -\nabla V$:

$$
V(\mathbf r) = \frac{1}{4\pi\varepsilon_0} \int \frac{\rho(\mathbf r')}{\lvert\mathbf r - \mathbf r'\rvert}\, d^3r' .
$$

El potencial es un escalar y es **lineal** en la carga: el de una distribución troceada es la suma de los de los trozos.

**Teorema (Gauss).** $\oint_{\partial\Omega} \mathbf E \cdot d\mathbf A = \frac{Q_{\text{int}}}{\varepsilon_0}$; en forma diferencial, $\nabla\cdot\mathbf E = \rho/\varepsilon_0$.

*Demostración.* Para una carga puntual en el origen, $\nabla\cdot(\hat{\mathbf r}/r^2) = 4\pi\,\delta^3(\mathbf r)$: es nula fuera del origen, y el flujo a
través de cualquier esfera centrada vale $4\pi$. Por superposición se extiende a cualquier $\rho$, y por el teorema de la divergencia, a la forma
integral. $\blacksquare$

> [!example] Ejemplo resuelto 1: Gauss dentro de una distribución
> Una esfera de radio $R$ con carga $Q$ uniforme. Por simetría $\mathbf E = E(r)\hat{\mathbf r}$. Una superficie gaussiana esférica de radio $r < R$
> encierra $Q r^3/R^3$, así que $4\pi r^2E = \frac{Qr^3}{\varepsilon_0R^3}$ y $E = \frac{kQr}{R^3}$: crece linealmente desde el centro. Fuera, $E = kQ/r^2$,
> como si toda la carga estuviera en el centro. Con la forma diferencial se llega a lo mismo: $\frac{1}{r^2}\frac{d}{dr}(r^2E) = \rho/\varepsilon_0$.

Combinando $\nabla\cdot\mathbf E = \rho/\varepsilon_0$ con $\mathbf E = -\nabla V$ resulta la **ecuación de Poisson**, $\nabla^2V = -\rho/\varepsilon_0$, que sin
cargas es la **ecuación de Laplace**, $\nabla^2V = 0$. Sus soluciones con condiciones de contorno dadas son **únicas** (si dos soluciones difieren
en $W$, entonces $\nabla^2W = 0$ con $W = 0$ en el contorno, y por el principio del máximo $W \equiv 0$). Las soluciones de Laplace no tienen
máximos ni mínimos interiores: el valor en un punto es la media de los valores en cualquier esfera centrada en él.

**Método de las imágenes.** La unicidad permite «adivinar» la solución: si una configuración ficticia de cargas reproduce las condiciones de
contorno, da el campo correcto en la región de interés.

> [!example] Ejemplo resuelto 2: carga frente a un plano conductor
> Una carga $q$ está a distancia $d$ de un plano conductor a tierra ($V = 0$). Una carga imagen $-q$ a distancia $d$ al otro lado hace que el plano
> sea equipotencial nulo; por unicidad, el campo en el semiespacio real es el de las dos cargas. La carga sufre la atracción de su imagen,
> $F = \frac{kq^2}{(2d)^2}$, y en el plano se induce una densidad $\sigma(\rho) = -\frac{qd}{2\pi(\rho^2 + d^2)^{3/2}}$ cuya integral es exactamente $-q$.

*Placa rectangular.* Una placa $[0, u]\times[0, v]$ con densidad superficial uniforme $\sigma$ crea en su esquina el potencial

$$
V = \frac{\sigma}{4\pi\varepsilon_0} \int_0^u\!\!\int_0^v \frac{dx\,dy}{\sqrt{x^2 + y^2}} = \frac{\sigma}{4\pi\varepsilon_0} \Bigl[\,u \operatorname{asinh}\frac{v}{u} + v \operatorname{asinh}\frac{u}{v}\Bigr].
$$

La integral se hace en polares partiendo el rectángulo por su diagonal: en cada triángulo, $\int dA/r = \int R(\theta)\, d\theta$, con $R(\theta)$ la
distancia de la esquina al borde. Valor de control: en una esquina de un cuadrado de lado $a$, $V\varepsilon_0/(\sigma a) = \ln(1 + \sqrt2)/(2\pi) = 0{,}140274963\ldots$

**Energía.** El trabajo necesario para montar una distribución es $W = \frac{\varepsilon_0}{2}\int \lvert\mathbf E\rvert^2\, d^3r$: la energía reside en el campo.

## 4. Conductores, capacidad y dieléctricos

En equilibrio, dentro de un conductor $\mathbf E = 0$: el conductor es un volumen **equipotencial**, la carga neta se va a la superficie y el
campo justo fuera es perpendicular a ella, de módulo $\sigma/\varepsilon_0$. Dos conductores con cargas $\pm Q$ y diferencia de potencial $V$ forman un
condensador de **capacidad** $C = Q/V$, que depende solo de la geometría.

En un **dieléctrico** las moléculas se polarizan: aparece una polarización $\mathbf P$ (momento dipolar por unidad de volumen) que reduce el
campo. Se define el **desplazamiento** $\mathbf D = \varepsilon_0\mathbf E + \mathbf P$, que cumple $\nabla\cdot\mathbf D = \rho_{\text{libre}}$. En un medio
lineal, $\mathbf D = \varepsilon\mathbf E$ con $\varepsilon = \varepsilon_r\varepsilon_0$: basta cambiar $\varepsilon_0$ por $\varepsilon$ en las fórmulas, y la capacidad se
multiplica por $\varepsilon_r$.

> [!example] Ejemplo resuelto 3: el cable coaxial (con menos ayuda)
> Conductor interior de radio $a$ con carga $\lambda$ por unidad de longitud, exterior de radio $b$, dieléctrico $\varepsilon$. Gauss con un cilindro:
> $E = \frac{\lambda}{2\pi\varepsilon r}$, luego $V = \int_a^b E\,dr = \frac{\lambda}{2\pi\varepsilon}\ln\frac ba$ y la capacidad por unidad de longitud es
> $C' = \frac{2\pi\varepsilon}{\ln(b/a)}$. Con corriente $I$ por el interior y de vuelta por el exterior, Ampère da $B = \frac{\mu_0I}{2\pi r}$ entre ambos;
> calcula tú la energía magnética por unidad de longitud y deduce $L' = \frac{\mu_0}{2\pi}\ln\frac ba$. La **impedancia característica** de la línea
> es $Z_0 = \sqrt{L'/C'} = \frac{\ln(b/a)}{2\pi}\sqrt{\mu_0/\varepsilon}$: la geometría y el dieléctrico la fijan, y los cables se fabrican para el valor
> estándar en radiofrecuencia, $50$ Ω (o $75$ Ω en televisión).

## 5. Magnetostática

Una corriente estacionaria crea, según la **ley de Biot-Savart**,

$$
\mathbf B(\mathbf r) = \frac{\mu_0 I}{4\pi} \int \frac{d\boldsymbol\ell' \times (\mathbf r - \mathbf r')}{\lvert\mathbf r - \mathbf r'\rvert^3} ,
$$

y cumple $\nabla\cdot\mathbf B = 0$ (no hay cargas magnéticas) y la **ley de Ampère**, $\nabla\times\mathbf B = \mu_0\mathbf J$. Como su divergencia es nula,
$\mathbf B = \nabla\times\mathbf A$ para un **potencial vector** $\mathbf A$. Sobre una carga en movimiento actúa la **fuerza de Lorentz**
$\mathbf F = q(\mathbf E + \mathbf v\times\mathbf B)$; la parte magnética es perpendicular a $\mathbf v$ y no hace trabajo. En un campo uniforme, una
carga gira con la **frecuencia ciclotrón** $f = \frac{qB}{2\pi m}$, independiente de su velocidad (mientras no sea relativista): es el principio del
ciclotrón y del espectrómetro de masas.

*Hilo recto finito.* Para un punto a distancia $\rho$ de la recta del hilo, si los extremos se ven bajo los ángulos $\theta_1$ y $\theta_2$ medidos
desde la perpendicular,

$$
\lvert\mathbf B\rvert = \frac{\mu_0 I}{4\pi\rho}\,(\sin\theta_2 - \sin\theta_1),
$$

con la dirección dada por la regla de la mano derecha alrededor del hilo. Con $\theta_{1,2} \to \mp\pi/2$ se recupera el hilo infinito,
$\mu_0I/(2\pi\rho)$.

*Espira poligonal.* En el centro de un hexágono regular de lado $L$, cada lado está a la distancia del apotema, $d = L\sqrt3/2$, y se ve bajo
$\pm30°$. Sumando los seis, $B = \frac{\sqrt3}{\pi}\frac{\mu_0I}{L} = 0{,}551328895\ldots\frac{\mu_0I}{L}$. Fuera del plano de la espira, cada contribución
forma un ángulo con el eje y solo sobrevive la componente axial: las componentes radiales de lados opuestos se cancelan.

> [!example] Ejemplo resuelto 4: espira circular en su eje
> Espira de radio $R$ y punto del eje a altura $z$. Cada elemento $d\boldsymbol\ell$ está a distancia $\sqrt{R^2 + z^2}$ y es perpendicular al vector que lo
> une al punto, así que $\lvert d\mathbf B\rvert = \frac{\mu_0I\,d\ell}{4\pi(R^2 + z^2)}$. Las componentes radiales se anulan por simetría y la axial lleva el
> factor $\frac{R}{\sqrt{R^2 + z^2}}$. Integrando $d\ell$ sobre $2\pi R$:
> $B_z = \frac{\mu_0IR^2}{2(R^2 + z^2)^{3/2}}$. En el centro, $\mu_0I/(2R)$; lejos, decae como $1/z^3$, el campo de un **dipolo magnético** de momento
> $m = I\pi R^2$.

**Solenoide.** Apilando espiras con $n$ vueltas por unidad de longitud e integrando el ejemplo anterior a lo largo de un solenoide muy largo se
obtiene, dentro, $B = \mu_0nI$, uniforme; Ampère con un rectángulo que cruza el devanado da el mismo resultado en dos líneas.

## 6. Inducción e inductancia

**Ley de Faraday.** Un flujo magnético variable induce una fuerza electromotriz, $\mathcal E = -\,d\Phi_B/dt$, o $\nabla\times\mathbf E = -\partial_t\mathbf B$. El
signo es la **ley de Lenz**: la corriente inducida se opone al cambio. Ejemplo: una varilla de $0{,}5$ m que se desliza a $3$ m/s sobre dos raíles en
un campo de $0{,}2$ T barre área a razón de $\ell v$ y genera $\mathcal E = B\ell v = 0{,}3$ V.

Un circuito con corriente $I$ crea un flujo propio $\Phi = LI$; $L$ es la **autoinducción**. Para un solenoide de longitud $l$, sección $A$ y $n$
vueltas por unidad de longitud, el flujo por las $nl$ espiras da $L = \mu_0n^2Al$. La energía almacenada es $\frac12LI^2 = \frac{1}{2\mu_0}\int B^2\, dV$:
como en el caso eléctrico, la energía está en el campo.

## 7. Las ecuaciones de Maxwell

Maxwell observó que la ley de Ampère es inconsistente con la conservación de la carga: tomando la divergencia de $\nabla\times\mathbf B = \mu_0\mathbf J$
queda $\nabla\cdot\mathbf J = 0$, falso cuando la carga se acumula (al cargar un condensador). La ecuación de continuidad,
$\nabla\cdot\mathbf J = -\partial_t\rho$, exige añadir la **corriente de desplazamiento** $\varepsilon_0\partial_t\mathbf E$. El resultado, en el vacío con fuentes:

$$
\nabla\cdot\mathbf E = \frac{\rho}{\varepsilon_0}, \quad \nabla\cdot\mathbf B = 0, \quad \nabla\times\mathbf E = -\frac{\partial\mathbf B}{\partial t}, \quad
\nabla\times\mathbf B = \mu_0\mathbf J + \mu_0\varepsilon_0\frac{\partial\mathbf E}{\partial t} .
$$

Junto con la fuerza de Lorentz contienen todo el electromagnetismo clásico. En un medio material se escriben con $\mathbf D$ y
$\mathbf H = \mathbf B/\mu_0 - \mathbf M$ y con las cargas y corrientes **libres**.

## 8. Ondas electromagnéticas

**Teorema.** Sin fuentes, cada componente de $\mathbf E$ y de $\mathbf B$ cumple la ecuación de ondas con velocidad $c = 1/\sqrt{\mu_0\varepsilon_0}$.

*Demostración.* $\nabla\times(\nabla\times\mathbf E) = \nabla(\nabla\cdot\mathbf E) - \nabla^2\mathbf E = -\nabla^2\mathbf E$. Por otro lado,
$\nabla\times(\nabla\times\mathbf E) = -\partial_t(\nabla\times\mathbf B) = -\mu_0\varepsilon_0\,\partial_t^2\mathbf E$. Igualando,
$\nabla^2\mathbf E = \mu_0\varepsilon_0\,\partial_t^2\mathbf E$. Lo mismo para $\mathbf B$. $\blacksquare$

Que $1/\sqrt{\mu_0\varepsilon_0}$, calculado con constantes medidas en experimentos de electricidad y magnetismo, coincidiera con la velocidad de la luz
fue la prueba de que la luz es una onda electromagnética.

Para una onda plana $\mathbf E = \mathbf E_0\cos(\mathbf k\cdot\mathbf r - \omega t)$ con $\omega = c\lvert\mathbf k\rvert$, las ecuaciones de Maxwell imponen
$\mathbf k\cdot\mathbf E_0 = 0$ y $\mathbf B = \frac1\omega\mathbf k\times\mathbf E$: la onda es **transversal**, $\mathbf E \perp \mathbf B$ y $\lvert\mathbf B\rvert = \lvert\mathbf E\rvert/c$.

**Energía y teorema de Poynting.** La densidad de energía es $u = \frac{\varepsilon_0}{2}\lvert\mathbf E\rvert^2 + \frac{1}{2\mu_0}\lvert\mathbf B\rvert^2$, y el flujo de
energía, el **vector de Poynting** $\mathbf S = \frac{1}{\mu_0}\mathbf E\times\mathbf B$, cumple $\partial_tu + \nabla\cdot\mathbf S = -\mathbf J\cdot\mathbf E$. La
**intensidad** es el promedio temporal de $\lvert\mathbf S\rvert$; para la onda plana, como el promedio de $\cos^2$ es $\frac12$,
$I = \frac12c\varepsilon_0E_0^2$. La luz solar en la superficie terrestre (del orden de $1$ kW/m$^2$) corresponde a $E_0$ de unos $870$ V/m.

## 9. Medios materiales y condiciones de contorno

En un medio lineal, isótropo y no magnético, $\varepsilon_0 \to \varepsilon = \varepsilon_r\varepsilon_0$ y la velocidad de la luz pasa a $c/n$ con **índice de refracción**
$n = \sqrt{\varepsilon_r}$ (a la frecuencia de la onda).

**Condiciones de contorno.** Integrando las ecuaciones de Maxwell sobre una caja y un circuito infinitesimales que atraviesan la interfaz, sin
cargas ni corrientes libres en ella, son **continuas** las componentes tangenciales de $\mathbf E$ y de $\mathbf H$ y las normales de $\mathbf D$ y de
$\mathbf B$.

**Reflexión y refracción.** Una onda incide desde un medio $n_1$ con ángulo $\theta_i$. Para que las condiciones se cumplan en todos los puntos de la
interfaz, las tres ondas deben tener la misma componente tangencial de $\mathbf k$: de ahí $\theta_r = \theta_i$ y la **ley de Snell**,
$n_1\sin\theta_i = n_2\sin\theta_t$.

Para la **polarización s** ($\mathbf E$ perpendicular al plano de incidencia), con amplitudes $1$, $r$ y $t$, la continuidad de $E_\parallel$ da $1 + r = t$, y la
de $H_\parallel$, $n_1\cos\theta_i(1 - r) = n_2\cos\theta_t\, t$. Resolviendo:

$$
r_s = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}, \qquad R_s = \lvert r_s\rvert^2 .
$$

La polarización p da $r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}$. Con incidencia normal ambas coinciden y
$R = \bigl(\frac{n_1 - n_2}{n_1 + n_2}\bigr)^2$: de aire a vidrio de $n = 1{,}5$, $R = 0{,}04$ (un $4\,\%$ por cara, la razón de los recubrimientos
antirreflejo). La energía se conserva: $R + T = 1$ con $T = \frac{n_2\cos\theta_t}{n_1\cos\theta_i}\lvert t\rvert^2$.

- **Ángulo de Brewster.** $r_p = 0$ cuando $\tan\theta_B = n_2/n_1$: la luz reflejada en ese ángulo sale totalmente polarizada en s (para el vidrio
  desde el aire, $\theta_B \approx 56{,}31°$). Por eso las gafas polarizadas eliminan los reflejos del agua y del asfalto.
- **Reflexión total interna.** Si $n_1 > n_2$ y $\sin\theta_i > n_2/n_1$, no hay ángulo transmitido real: $\cos\theta_t$ es imaginario, $\lvert r_s\rvert = 1$ y
  toda la energía se refleja. Al otro lado queda una onda evanescente que decae en una fracción de longitud de onda. Es el principio de la
  fibra óptica.
- **Conductores.** En un conductor de resistividad $\rho$ la onda se atenúa en una **profundidad de penetración** $\delta = \sqrt{2\rho/(\omega\mu_0)}$
  (para frecuencias en las que domina la corriente de conducción). A frecuencias altas la corriente circula solo por la piel del conductor:
  por eso los cables de radiofrecuencia se platean y los de alta tensión usan conductores trenzados o huecos.

## 10. Comprobar con un programa

Las fórmulas cerradas se contrastan con cálculos directos de las leyes: Biot-Savart sumado segmento a segmento, la carga inducida integrada,
la conservación de la energía en Fresnel y la ecuación de Laplace resuelta por relajación en una malla.

```python
import math

MU0 = 4 * math.pi * 1e-7
K = 8.9876e9

# 1. Biot-Savart numérico: espira cuadrada de lado L con corriente I, campo en el centro = 2√2·μ0·I/(π·L).
def biot_poligono(vertices, punto, trozos=2000, I=1.0):
    B = [0.0, 0.0, 0.0]
    for i, A in enumerate(vertices):
        C = vertices[(i + 1) % len(vertices)]
        for j in range(trozos):
            m = [A[k] + (j + 0.5) / trozos * (C[k] - A[k]) for k in range(3)]
            dl = [(C[k] - A[k]) / trozos for k in range(3)]
            r = [punto[k] - m[k] for k in range(3)]
            R3 = math.hypot(*r) ** 3
            cruz = [dl[1] * r[2] - dl[2] * r[1], dl[2] * r[0] - dl[0] * r[2], dl[0] * r[1] - dl[1] * r[0]]
            B = [B[k] + MU0 * I / (4 * math.pi) * cruz[k] / R3 for k in range(3)]
    return B

L, I = 0.2, 3.0
cuadrado = [(-L / 2, -L / 2, 0), (L / 2, -L / 2, 0), (L / 2, L / 2, 0), (-L / 2, L / 2, 0)]
Bz = biot_poligono(cuadrado, (0, 0, 0), I=I)[2]
assert abs(Bz - 2 * math.sqrt(2) * MU0 * I / (math.pi * L)) < 1e-6 * Bz

# 2. Imagen: la carga inducida en el plano suma −q y atrae a q con kq²/(2d)² (integral en ρ con el cambio ρ = t/(1−t)).
def integra(f, a, b, n=200_000):
    h = (b - a) / n
    return h * sum(f(a + (i + 0.5) * h) for i in range(n))

q, d = 2e-9, 0.05
sigma = lambda r: -q * d / (2 * math.pi * (r * r + d * d) ** 1.5)
anillo = lambda f: (lambda t: f(t / (1 - t)) * 2 * math.pi * (t / (1 - t)) / (1 - t) ** 2)
total = integra(anillo(sigma), 0, 1)
fuerza = integra(anillo(lambda r: K * q * -sigma(r) * d / (r * r + d * d) ** 1.5), 0, 1)
assert abs(total + q) < 1e-6 * q
assert abs(fuerza - K * q * q / (2 * d) ** 2) < 1e-6 * fuerza

# 3. Fresnel: R + T = 1 en las dos polarizaciones, y r_p = 0 en el ángulo de Brewster.
n1, n2 = 1.0, 1.5
for grados in range(0, 90, 5):
    ti = math.radians(grados)
    tt = math.asin(n1 * math.sin(ti) / n2)
    ci, ct = math.cos(ti), math.cos(tt)
    rs, ts = (n1 * ci - n2 * ct) / (n1 * ci + n2 * ct), 2 * n1 * ci / (n1 * ci + n2 * ct)
    rp, tp = (n2 * ci - n1 * ct) / (n2 * ci + n1 * ct), 2 * n1 * ci / (n2 * ci + n1 * ct)
    factor = n2 * ct / (n1 * ci)
    assert abs(rs * rs + factor * ts * ts - 1) < 1e-12 and abs(rp * rp + factor * tp * tp - 1) < 1e-12
tb = math.atan(n2 / n1)
assert abs(n2 * math.cos(tb) - n1 * math.cos(math.asin(math.sin(tb) / n2))) < 1e-12
print(f"Brewster aire-vidrio: {math.degrees(tb):.2f}°")

# 4. Laplace en un cuadrado con un lado a V0 = 1 y los otros a 0: por superposición de las cuatro rotaciones, V(centro) = 1/4.
N = 41
V = [[0.0] * N for _ in range(N)]
for j in range(1, N - 1):
    V[0][j] = 1.0
for _ in range(3000):  # sobrerrelajación sucesiva (SOR)
    for i in range(1, N - 1):
        for j in range(1, N - 1):
            V[i][j] += 1.9 * ((V[i + 1][j] + V[i - 1][j] + V[i][j + 1] + V[i][j - 1]) / 4 - V[i][j])
assert abs(V[N // 2][N // 2] - 0.25) < 1e-9
```

## 11. Errores típicos

- Sumar módulos de campos en vez de vectores; olvidar que solo sobrevive la componente que la simetría permite.
- Aplicar Gauss o Ampère sin simetría suficiente: la ley siempre es cierta, pero solo sirve para despejar el campo si es constante sobre la
  superficie o el camino.
- Confundir $\varepsilon_0$ con $\varepsilon$ en un dieléctrico, o $\mathbf B$ con $\mathbf H$ en las condiciones de contorno.
- Olvidar que la carga imagen solo vale en la región real, no detrás del conductor.
- Usar la energía $\frac12CV^2$ cuando el condensador está desconectado y cambia la geometría (entonces se conserva $Q$, no $V$).
- Olvidar el factor $\frac12$ del promedio temporal al pasar de amplitud a intensidad.
- Aplicar Snell con ángulos medidos desde la superficie en vez de desde la normal.
- Calcular reflectancias en amplitud ($r$) cuando se piden en intensidad ($R = \lvert r\rvert^2$).

## 12. Resumen

- Maxwell: $\nabla\cdot\mathbf E = \rho/\varepsilon_0$, $\nabla\cdot\mathbf B = 0$, $\nabla\times\mathbf E = -\partial_t\mathbf B$, $\nabla\times\mathbf B = \mu_0\mathbf J + \mu_0\varepsilon_0\partial_t\mathbf E$.
- Electrostática: $\mathbf E = -\nabla V$, Poisson y Laplace, unicidad, imágenes; energía $\frac{\varepsilon_0}{2}\int E^2$.
- Conductores equipotenciales; $C = Q/V$; dieléctricos con $\mathbf D = \varepsilon\mathbf E$; coaxial $C' = 2\pi\varepsilon/\ln(b/a)$, $Z_0 = \sqrt{L'/C'}$.
- Magnetostática: Biot-Savart, Ampère, hilo finito, espira ($\mu_0IR^2/2(R^2 + z^2)^{3/2}$), solenoide ($\mu_0nI$), ciclotrón $qB/(2\pi m)$.
- Inducción: $\mathcal E = -d\Phi/dt$, Lenz, $L = \mu_0n^2Al$, energía $\frac{1}{2\mu_0}\int B^2$.
- Ondas: $c = 1/\sqrt{\mu_0\varepsilon_0}$, transversales, $B = E/c$, $I = \frac12c\varepsilon_0E_0^2$.
- Interfaces: Snell, Fresnel, Brewster $\tan\theta_B = n_2/n_1$, reflexión total interna, profundidad de penetración.

## Reto

Calcula tres números adimensionales. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** Una placa plana delgada ocupa el rectángulo $[0, a]\times[0, 2a]$ con densidad superficial de carga uniforme $\sigma$. Halla
  $V\varepsilon_0/(\sigma a)$ en el punto $(0{,}3\,a,\; 0{,}5\,a)$ de la propia placa, con el potencial nulo en el infinito.
- **b.** Una espira con forma de hexágono regular de lado $L$ lleva una corriente $I$. Halla $BL/(\mu_0I)$ en un punto del eje de la espira (la
  recta perpendicular a su plano por el centro) situado a una distancia $L$ del plano.
- **c.** La reflectancia $R_s$ para una onda plana con polarización s que incide desde el aire ($n_1 = 1$) sobre un vidrio con $n_2 = 1{,}5$, con un
  ángulo de incidencia de $60°$.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9 \cdot V\varepsilon_0/(\sigma a) \rfloor$, y análogamente $b$ y $c$.

## Repaso: lo que debe quedarte dentro de un mes

1. Las cuatro ecuaciones de Maxwell y qué ley experimental resume cada una.
2. El potencial es lineal y escalar: trocea, suma y luego deriva.
3. La unicidad justifica las imágenes: si se cumplen las condiciones de contorno, la solución es la buena.
4. La energía está en el campo: $\frac{\varepsilon_0}{2}E^2 + \frac{1}{2\mu_0}B^2$, y fluye según el vector de Poynting.
5. Snell, Fresnel, Brewster y la reflexión total salen solo de imponer la continuidad tangencial de $\mathbf E$ y $\mathbf H$.

## Siguiente

[[ing-circuitos]] aplica estos resultados a componentes, líneas y filtros; [[fis-mecanica-cuantica]] cuantiza la interacción de la materia con el
campo; en las ramas, electrodinámica (potenciales retardados, radiación de antenas), relatividad especial, óptica y guías de onda.
