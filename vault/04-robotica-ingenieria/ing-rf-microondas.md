---
id: ing-rf-microondas
title: "RF y microondas: líneas de transmisión, carta de Smith, adaptación de impedancias, parámetros S, ruido, amplificadores, mezcladores y antenas"
area: ingenieria
trunk_level: 16
prerequisites: [ing-comunicaciones, ing-pcb-diseno]
academic_sources:
  - "Pozar, D. M. Microwave Engineering, 4ª ed. Wiley, 2012."
  - "Ludwig, R.; Bogdanov, G. RF Circuit Design: Theory and Applications, 2ª ed. Pearson Prentice Hall, 2009."
exercises:
  - id: longitud-de-onda
    tier: 1
    prompt: |
      ¿Cuánto mide la longitud de onda de 2,4 GHz en el vacío y en un coaxial con dieléctrico de $\varepsilon_r = 2{,}25$, en cm? Respuesta: `vacio;coaxial` con **2 decimales**.
    answers: ["sha256:8995de485a560b3929c4426a6d935631a7ee12e3ca120676f93b31790b21cd30"]
  - id: transformador-cuarto-de-onda
    tier: 1
    prompt: |
      Una línea de 50 $\Omega$ de un cuarto de onda termina en 100 $\Omega$. ¿Qué impedancia se ve a la entrada, en $\Omega$? Respuesta: un número.
    answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
  - id: atenuador
    tier: 1
    prompt: |
      ¿Cuánto vale $|S_{21}|$ de un atenuador adaptado de 3 dB? Respuesta: con **4 decimales**.
    answers: ["sha256:372081fb24a95daeeffebb2af0221934d9d4efe82d23d0a46c9a56501162dc66"]
  - id: dipolo
    tier: 1
    prompt: |
      ¿Qué longitud tiene un dipolo de media onda ideal para 868 MHz, en cm? Respuesta: con **2 decimales**.
    answers: ["sha256:550f27bc1f0b4b0f920614b229e6ae6837aab299470d713bc6e1f363852a19dc"]
  - id: admitancia
    tier: 1
    prompt: |
      ¿Cuál es la admitancia normalizada correspondiente a la impedancia normalizada $z = 1 + j$? Respuesta: `real;imaginaria`.
    answers: ["sha256:fc826c045eb574122fea62a8a5c701301bcb39771f18e86950e6b932790857c7"]
  - id: frecuencia-imagen
    tier: 1
    prompt: |
      Un receptor mezcla RF de 2,4 GHz con un oscilador local de 2,2 GHz para obtener 200 MHz de FI. ¿En qué otra frecuencia (GHz) hay una señal que también cae en esa FI? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: perdidas-en-el-cable
    tier: 1
    prompt: |
      Un coaxial atenúa 0,2 dB/m. ¿Qué fracción de la potencia sale al final de 15 m? Respuesta: con **4 decimales**.
    answers: ["sha256:1edd26ab7b283250ce30dc5c9df90638d886946f4efa6354eb3eeb1e9a8c7b47"]
  - id: adaptacion-cuarto-de-onda
    tier: 2
    prompt: |
      ¿Qué impedancia característica debe tener un transformador de un cuarto de onda para adaptar una carga de 100 $\Omega$ a 50 $\Omega$? Respuesta: con **2 decimales**.
    answers: ["sha256:a0dcd519bda7ade41a7ca95aa7344d9eacae2fa0a2015f2086d839c38f82dc68"]
  - id: perdidas-de-retorno
    tier: 2
    prompt: |
      Una carga tiene $|\Gamma| = 0{,}2$. ¿Cuánto valen las pérdidas de retorno y las de desadaptación, en dB? Respuesta: `retorno;desadaptacion` con **2 decimales**.
    answers: ["sha256:7db6e164492bcb6a042726af0e3e38cad080b84420725f3a208fdd9c45bfea88"]
  - id: stub
    tier: 2
    prompt: |
      Un stub de 50 $\Omega$ terminado en cortocircuito mide $\lambda/8$. ¿Qué reactancia presenta a la entrada, en $\Omega$? Respuesta: un número.
    answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: razon-de-onda-estacionaria
    tier: 2
    prompt: |
      ¿Qué ROE produce una carga de $75 + j25\ \Omega$ en una línea de 50 $\Omega$? Respuesta: con **4 decimales**.
    answers: ["sha256:7b2e278980d55660f666fbc5389810c7228b9743452cd1116f9a5e4d46cfbec9"]
  - id: figura-de-ruido
    tier: 2
    prompt: |
      Un receptor encadena un LNA (15 dB, NF 1,5 dB), un mezclador (−6 dB, NF 6 dB) y un amplificador de FI (25 dB, NF 4 dB). ¿Cuál es la figura de ruido total, en dB? Respuesta: con **2 decimales**.
    answers: ["sha256:8771a6c04174b7f719ebdeca5db87304a72a118a5629a5e2ce9ef7d62158b728"]
  - id: permitividad-efectiva
    tier: 2
    prompt: |
      Con la fórmula de Hammerstad, $\varepsilon_{\text{eff}} = \frac{\varepsilon_r + 1}{2} + \frac{\varepsilon_r - 1}{2}\left(1 + \frac{12h}{w}\right)^{-1/2}$, ¿cuánto vale para $\varepsilon_r = 4{,}3$ y $w/h = 2$? Respuesta: con **4 decimales**.
    answers: ["sha256:c951219a9db389a86781b5c1cab571fb2801ab9b2e0d8fb59615f2fb31d162c6"]
  - id: red-en-l
    tier: 3
    prompt: |
      Se adapta una fuente de 20 $\Omega$ a una carga de 50 $\Omega$ a 2 GHz con una red L (bobina en serie del lado de 20 $\Omega$, condensador en paralelo con la carga). ¿Qué inductancia hace falta, en nH? Respuesta: con **2 decimales**.
    answers: ["sha256:312115dbd13c05f6d2f2bca8d9492f4fbd589ac17ae156bb701a2710afac7e45"]
  - id: estabilidad-de-un-transistor
    tier: 3
    prompt: |
      Un transistor tiene $S_{11} = 0{,}5\angle{-60°}$, $S_{12} = 0{,}05\angle 40°$, $S_{21} = 4\angle 100°$ y $S_{22} = 0{,}4\angle{-45°}$. ¿Cuánto valen el factor de Rollett $K$ y $|\Delta|$? Respuesta: `K;delta` con **4 decimales**.
    answers: ["sha256:ea1593e7ca73b9b5a2ca0b180742d8972c46391ed8213b58aec96d5554bc11de"]
  - id: ganancia-maxima
    tier: 3
    prompt: |
      Para ese transistor (incondicionalmente estable), ¿cuál es la ganancia máxima disponible, en dB? Respuesta: con **2 decimales**.
    answers: ["sha256:0353353ca244a246035056ffdb846dad9968a84a4a5f6643ceacd265b8230a50"]
---

# RF y microondas: líneas de transmisión, carta de Smith, adaptación de impedancias, parámetros S, ruido, amplificadores, mezcladores y antenas

Por encima de unos cientos de MHz los circuitos dejan de comportarse como en la teoría de circuitos: las longitudes son comparables a la longitud de onda, las
pistas son líneas de transmisión, las tensiones y corrientes dependen de dónde se miden y lo que importa son **ondas** incidentes y reflejadas. Es el mundo del
Wi-Fi, el 5G, el radar, el GPS y los enlaces por satélite. Este nodo da las herramientas del ingeniero de RF: líneas e impedancia de entrada, la **carta de
Smith**, la **adaptación**, los **parámetros S**, el ruido en cascada, la estabilidad y la ganancia de un amplificador, y las antenas, continuando
[[ing-comunicaciones]] (el sistema) e [[ing-pcb-diseno]] (la placa).

## Objetivos

Al terminar sabrás:

1. Calcular longitudes de onda, impedancias de entrada de líneas, transformadores de cuarto de onda y stubs.
2. Usar el coeficiente de reflexión, la ROE, las pérdidas de retorno y la carta de Smith.
3. Diseñar redes de adaptación L y de cuarto de onda.
4. Describir redes con parámetros S y analizar la estabilidad (factor de Rollett) y la ganancia máxima de un transistor.
5. Calcular la figura de ruido de una cadena (Friis) y la frecuencia imagen de un receptor superheterodino.
6. Dimensionar antenas sencillas y la atenuación de cables y microstrips.

## Qué debes dominar antes

[[ing-comunicaciones]] (balance de enlace, ruido térmico, figura de ruido) e [[ing-pcb-diseno]] (líneas de transmisión, impedancia controlada). El
electromagnetismo de [[fis-electromagnetismo]] (ondas, impedancia del medio) y los números complejos se usan constantemente.

> [!question] Test de entrada
> 1. ¿Qué es la impedancia característica de una línea?
> 2. ¿Cuánto vale el coeficiente de reflexión de una línea de 50 $\Omega$ terminada en un cortocircuito? ¿Y en un circuito abierto?
> 3. ¿Cuántos dB son la mitad de potencia?
>
> Respuestas: el cociente $V/I$ de una onda viajera, $\sqrt{L'/C'}$ por unidad de longitud; $-1$ y $+1$; $-3$ dB.

## 1. Para qué sirve

- **Comunicaciones inalámbricas**: front-ends de móviles, Wi-Fi, Bluetooth, satélite; filtros, amplificadores de bajo ruido y de potencia, mezcladores.
- **Radar y sensores**: radar de automoción a 77 GHz, sensores de presencia, imagen de microondas.
- **Robótica y drones**: radioenlaces, GNSS, antenas en estructuras metálicas.
- **Instrumentación y seguridad**: analizadores de redes y de espectro, compatibilidad, análisis de señales de radio y ataques de RF.

## 2. Líneas de transmisión

Una línea de impedancia característica $Z_0$ terminada en $Z_L$ tiene **coeficiente de reflexión** $\Gamma = \frac{Z_L - Z_0}{Z_L + Z_0}$, y a una distancia $l$ de la carga presenta

$$
Z_{in} = Z_0\frac{Z_L + jZ_0\tan\beta l}{Z_0 + jZ_L\tan\beta l}, \qquad \beta = \frac{2\pi}{\lambda}, \quad \lambda = \frac{c}{f\sqrt{\varepsilon_{\text{eff}}}} .
$$

Casos clave: **cuarto de onda** ($\beta l = \pi/2$): $Z_{in} = Z_0^2/Z_L$, un transformador de impedancias; **media onda**: repite la carga; **stubs** en cortocircuito o abierto: reactancias puras
($jZ_0\tan\beta l$ y $-jZ_0\cot\beta l$), usados como bobinas y condensadores. La **ROE** $\frac{1 + |\Gamma|}{1 - |\Gamma|}$ es el cociente entre máximo y mínimo de la onda estacionaria; las **pérdidas de
retorno** $-20\log|\Gamma|$ miden cuánto se refleja, y las de **desadaptación** $-10\log(1 - |\Gamma|^2)$ cuánto se pierde de la potencia que podría entregarse. Las líneas reales
atenúan (dB/m), y el dieléctrico ralentiza la onda: en un coaxial con $\varepsilon_r = 2{,}25$ la longitud de onda es 2/3 de la del vacío.

## 3. La carta de Smith

Es el plano de $\Gamma$ con las curvas de resistencia y reactancia normalizadas ($z = Z/Z_0$) dibujadas encima. Moverse por una línea sin pérdidas es **girar** alrededor del centro
(media vuelta por cada cuarto de onda); añadir una reactancia en serie es moverse por un círculo de resistencia constante; una en paralelo, por uno de
conductancia constante (la admitancia es el punto diametralmente opuesto: $z = 1 + j$ tiene $y = 0{,}5 - j0{,}5$). Toda adaptación es un camino desde la carga hasta el centro.

## 4. Adaptación de impedancias

Adaptar maximiza la potencia transferida y evita reflexiones. Tres técnicas:

- **Transformador de cuarto de onda**: $Z_0 = \sqrt{Z_{in}Z_L}$ (70,7 $\Omega$ para 100 a 50 $\Omega$); estrecho en frecuencia.
- **Red L** de dos reactancias: para pasar de $R_s$ a $R_p > R_s$, $Q = \sqrt{R_p/R_s - 1}$, reactancia serie $QR_s$ y paralela $R_p/Q$. De 10 a 50 $\Omega$, $Q = 2$: 20 $\Omega$ en serie (3,18 nH a 1 GHz) y 25 $\Omega$ en paralelo
  (6,37 pF). El $Q$ fija el ancho de banda (~$f/Q$).
- **Stubs** simples o dobles en microstrip, sin componentes discretos.

> [!example] Ejemplo resuelto 1: una carga de 75 + j25 Ω
> En una línea de 50 $\Omega$: $\Gamma = \frac{25 + j25}{125 + j25}$, $|\Gamma| \approx 0{,}277$, ROE $\approx 1{,}77$ y pérdidas de retorno de 11,1 dB (se refleja el 7,7 % de la potencia). Para adaptarla, en la carta de Smith se
> gira hacia el generador hasta cortar el círculo $g = 1$ y se cancela la susceptancia que queda con un stub en paralelo en ese punto.

## 5. Parámetros S, estabilidad y ganancia

A alta frecuencia no se pueden medir tensiones en circuito abierto o cortocircuito; se mide cómo se reparten las **ondas**: $b_1 = S_{11}a_1 + S_{12}a_2$, $b_2 = S_{21}a_1 + S_{22}a_2$. $|S_{11}|$ es la reflexión de
entrada, $|S_{21}|$ la ganancia (o pérdida: un atenuador de 3 dB tiene $|S_{21}| = 0{,}708$), $S_{12}$ el aislamiento inverso. Un analizador vectorial de redes mide los cuatro en
módulo y fase.

Un transistor puede **oscilar** si alguna combinación de cargas pasivas da $|\Gamma_{in}| > 1$ o $|\Gamma_{out}| > 1$. Es **incondicionalmente estable** si

$$
K = \frac{1 - |S_{11}|^2 - |S_{22}|^2 + |\Delta|^2}{2|S_{12}S_{21}|} > 1 \quad\text{y}\quad |\Delta| < 1, \qquad \Delta = S_{11}S_{22} - S_{12}S_{21} .
$$

Entonces se puede adaptar a la vez entrada y salida (adaptación conjugada simultánea) y obtener la **ganancia máxima disponible** $\text{MAG} = \left|\frac{S_{21}}{S_{12}}\right|\left(K - \sqrt{K^2 - 1}\right)$. Si $K < 1$, hay que
evitar las regiones inestables de la carta (círculos de estabilidad) o estabilizar con resistencias.

## 6. Ruido y arquitectura del receptor

En una cadena, la **fórmula de Friis** $F = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1G_2} + \cdots$ dice que la primera etapa manda: un LNA de 20 dB con NF de 1 dB delante de un mezclador con 7 dB de NF y
pérdidas deja la cadena en ~1,3 dB. Por eso el LNA va lo más cerca posible de la antena y cualquier pérdida antes (cables, filtros) suma directamente a la NF.

El receptor **superheterodino** mezcla la señal con un oscilador local para bajarla a una frecuencia intermedia fija, donde es fácil filtrar y amplificar. El
mezclador responde igual a $f_{LO} + f_{FI}$ y a $f_{LO} - f_{FI}$: la **frecuencia imagen** debe eliminarse con un filtro antes del mezclador. Los receptores modernos usan
conversión directa (FI cero) con mezcla en cuadratura, o muestreo directo de RF con conversores muy rápidos.

> [!example] Ejemplo resuelto 2: la figura de ruido de una cadena
> LNA: $G = 100$, $F = 1{,}26$; mezclador: $G = 0{,}2$, $F = 5{,}01$; FI: $F = 2$. Friis: $F = 1{,}26 + \frac{4{,}01}{100} + \frac{1}{100\cdot0{,}2} = 1{,}26 + 0{,}040 + 0{,}05 = 1{,}35$, es decir 1,30 dB. Sin LNA, la cadena tendría
> $5{,}01 + 1/0{,}2 = 10$: 10 dB. El LNA "compra" casi 9 dB de sensibilidad.

## 7. Antenas

Una antena convierte ondas guiadas en radiadas. El **dipolo de media onda** (longitud $\approx\lambda/2$, 17,3 cm a 868 MHz) tiene unos 73 $\Omega$ de resistencia de radiación y 2,15 dBi de
ganancia; el **monopolo** de cuarto de onda sobre un plano de masa es la mitad de un dipolo. Las antenas directivas concentran la potencia: una parabólica tiene
$G = \eta(\pi D/\lambda)^2$; los **arrays** combinan elementos con fases ajustables para dirigir el haz electrónicamente (5G, radar). Las antenas impresas en microstrip
(parches) usan la $\varepsilon_{\text{eff}}$ del sustrato para dimensionarse.

> [!example] Ejemplo resuelto 3: estabilidad de un transistor (con menos ayuda)
> Con $S_{11} = 0{,}5\angle{-60°}$, $S_{12} = 0{,}05\angle 40°$, $S_{21} = 4\angle 100°$, $S_{22} = 0{,}4\angle{-45°}$, calcula $\Delta$ (complejo), $|\Delta|$ y $K$; comprueba que $K \approx 1{,}76 > 1$ y $|\Delta| < 1$, y que la ganancia
> máxima es de unos 14 dB. Verifica en el programa que ninguna carga pasiva hace $|\Gamma_{in}| \ge 1$.

## 8. Comprobar con un programa

Impedancias de entrada con la fórmula general, ROE muestreando la onda estacionaria, la red L, la estabilidad barriendo cargas pasivas y la ganancia
máxima por adaptación conjugada iterativa.

```python
import cmath
import math

def zin(Z0, ZL, bl):
    t = math.tan(bl)
    return Z0 * (ZL + 1j * Z0 * t) / (Z0 + 1j * ZL * t)

# 1. Cuarto de onda: 100 Ω → 25 Ω con 50 Ω; adaptación 100 → 50 con √5000 Ω.
assert abs(zin(50, 100, math.pi / 2 - 1e-9) - 25) < 1e-5
assert abs(zin(math.sqrt(5000), 100, math.pi / 2 - 1e-9) - 50) < 1e-5

# 2. Ejemplo resuelto 1: ROE de 75 + j25 Ω muestreando |V| = |1 + Γe^{-2jβl}| a lo largo de media onda.
G = (75 + 25j - 50) / (75 + 25j + 50)
mags = [abs(1 + G * cmath.exp(-2j * math.pi * k / 2000)) for k in range(2000)]
roe = max(mags) / min(mags)
assert abs(roe - (1 + abs(G)) / (1 - abs(G))) < 1e-6

# 3. Red L de 10 a 50 Ω a 1 GHz: bobina serie de 20 Ω y condensador paralelo de 25 Ω.
w = 2 * math.pi * 1e9
L, C = 20 / w, 1 / (w * 25)
Zp = 1 / (1 / 50 + 1j * w * C)
assert abs((Zp + 1j * w * L) - 10) < 1e-9

# 4. Ejemplo resuelto 3: estabilidad y ganancia máxima del transistor.
pol = lambda r, d: r * cmath.exp(1j * math.radians(d))
S11, S12, S21, S22 = pol(0.5, -60), pol(0.05, 40), pol(4, 100), pol(0.4, -45)
D = S11 * S22 - S12 * S21
K = (1 - abs(S11) ** 2 - abs(S22) ** 2 + abs(D) ** 2) / (2 * abs(S12 * S21))
gin = lambda GL: S11 + S12 * S21 * GL / (1 - S22 * GL)
peor = max(abs(gin(pol(r / 50, a))) for r in range(51) for a in range(0, 360, 3))
assert K > 1 and abs(D) < 1 and peor < 1
GS = GL = 0
for _ in range(200):
    GS = gin(GL).conjugate()
    GL = (S22 + S12 * S21 * GS / (1 - S11 * GS)).conjugate()
GT = (1 - abs(GS) ** 2) * abs(S21) ** 2 * (1 - abs(GL) ** 2) / (abs(1 - gin(GL) * GS) ** 2 * abs(1 - S22 * GL) ** 2)
MAG = abs(S21 / S12) * (K - math.sqrt(K * K - 1))
print("ROE", round(roe, 4), "| K =", round(K, 4), "|Δ| =", round(abs(D), 4), "| MAG =", round(10 * math.log10(MAG), 2), "dB")
assert abs(10 * math.log10(GT) - 10 * math.log10(MAG)) < 1e-6
```

## 9. Errores típicos

- Usar la longitud de onda del vacío en una línea con dieléctrico.
- Adaptar en una sola frecuencia y olvidar el ancho de banda (el $Q$ de la red).
- Diseñar un amplificador sin comprobar la estabilidad en toda la banda, incluidas frecuencias fuera de la de trabajo.
- Poner pérdidas (cables, conmutadores, filtros) delante del LNA y esperar la NF del LNA.
- Olvidar la frecuencia imagen en un superheterodino.
- Confundir dBi y dBd, o ganancia de antena con potencia añadida (una antena solo redistribuye).

## 10. Resumen

- $\Gamma = (Z_L - Z_0)/(Z_L + Z_0)$; $Z_{in}$ general; $\lambda/4$: $Z_0^2/Z_L$; stubs; ROE, pérdidas de retorno y de desadaptación; $\lambda = c/(f\sqrt{\varepsilon})$.
- Carta de Smith: girar = moverse por la línea; serie y paralelo por círculos; admitancia opuesta.
- Adaptación: $\lambda/4$ con $\sqrt{Z_1Z_2}$, red L con $Q = \sqrt{R_p/R_s - 1}$, stubs.
- Parámetros S; $K > 1$ y $|\Delta| < 1$; MAG $= |S_{21}/S_{12}|(K - \sqrt{K^2 - 1})$.
- Friis del ruido; superheterodino, frecuencia imagen.
- Dipolo $\lambda/2$ (2,15 dBi), monopolo, parabólica $\eta(\pi D/\lambda)^2$, arrays; $\varepsilon_{\text{eff}}$ de Hammerstad.

## Repaso: lo que debe quedarte dentro de un mes

1. A alta frecuencia todo cable es una línea y toda carga refleja.
2. Un cuarto de onda transforma impedancias como $Z_0^2/Z_L$.
3. En la carta de Smith, adaptar es caminar hasta el centro.
4. Antes de diseñar un amplificador, comprueba $K$ y $|\Delta|$.
5. La primera etapa decide el ruido del receptor.

## Siguiente

`ing-integridad-senal` (las mismas líneas en señales digitales rápidas) e `ing-diseno-asic`. El sistema de comunicaciones está en [[ing-comunicaciones]].
