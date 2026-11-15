---
id: fis-teoria-cuantica-campos
title: "Teoría cuántica de campos: campos libres, cuantización, simetrías, Feynman, QED, renormalización y el modelo estándar"
area: fisica
trunk_level: 15
prerequisites: [fis-fisica-nuclear-particulas, fis-mecanica-estadistica-avanzada]
academic_sources:
  - "Peskin, M. E.; Schroeder, D. V. An Introduction to Quantum Field Theory. Addison-Wesley, 1995."
  - "Schwartz, M. D. Quantum Field Theory and the Standard Model. Cambridge University Press, 2014."
exercises:
  - id: velocidad-de-grupo
    tier: 1
    prompt: |
      Una onda del campo de Klein-Gordon de masa $m = 1$ (unidades naturales) tiene $\omega^2 = k^2 + m^2$. ¿Cuál es su velocidad de grupo para $k = \sqrt3$? Respuesta: con **4 decimales**.
    answers: ["sha256:0776806ddf098e817c8db32df57335b6a6f7e2914c7a8eb4fe36cc278965c241"]
  - id: longitud-de-compton
    tier: 1
    prompt: |
      ¿Cuánto vale la longitud de onda de Compton reducida $\hbar/(m_ec)$ del electrón, en fm? Respuesta: con **2 decimales**.
    answers: ["sha256:e364e739afebcb30b7d7356cb0e57abb837bbbb7ed6d91e60402dc33723a7c69"]
  - id: constante-de-estructura-fina
    tier: 1
    prompt: |
      Calcula $1/\alpha = 4\pi\varepsilon_0\hbar c/e^2$ con los valores SI de las constantes. Respuesta: con **3 decimales**.
    answers: ["sha256:14a7e39973c76cc5c7896345f25b01ce8b47f9ec6a33c0af44b9fc0a7bd1c41a"]
  - id: operadores-de-escalera
    tier: 1
    prompt: |
      Para un modo del campo (oscilador armónico) en el estado $|3\rangle$, ¿cuánto vale $\langle 3|(a + a^\dagger)^2|3\rangle$? Respuesta: un entero.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: mandelstam
    tier: 1
    prompt: |
      En un choque $2 \to 2$ de partículas sin masa, $s = 100$ GeV² y $t = -30$ GeV². ¿Cuánto vale $u$? Respuesta: en GeV².
    answers: ["sha256:bf454938bb8ed10beb63464346dc60cd93f73edbce0a4d5a13f4c0789106dfe7"]
  - id: bosones-gauge
    tier: 1
    prompt: |
      ¿Cuántos bosones gauge tiene una teoría con grupo SU(3) (gluones)? ¿Y una con SU(2)×U(1) (electrodébil, antes de la ruptura)? Respuesta: `su3;electrodebil`.
    answers: ["sha256:44fe1f903e9b1585bcb3214f0a6ad3e3e737ff6a7d1b8c077cc5150c66d30175"]
  - id: efecto-casimir
    tier: 2
    prompt: |
      ¿Qué presión atractiva de Casimir, $\pi^2\hbar c/(240d^4)$, hay entre dos placas conductoras separadas $1\ \mu$m, en mPa? Respuesta: con **3 decimales**.
    answers: ["sha256:9c193c604ad7de942961af97b39ff541f2e611fdf0b93a3044e16dfbd808f41b"]
  - id: potencial-de-yukawa
    tier: 2
    prompt: |
      El intercambio de una partícula de masa $m$ da $V(r) \propto -e^{-mr}/r$. ¿Cuánto vale $V(2/m)/V(1/m)$? Respuesta: con **4 decimales**.
    answers: ["sha256:bc87ba8f0b6cf4c0b694bdef3f6a08224cdb3ba5005e11799b6967abfb4959be"]
  - id: seccion-eficaz-de-muones
    tier: 2
    prompt: |
      En QED a orden más bajo, $\sigma(e^+e^- \to \mu^+\mu^-) = \frac{4\pi\alpha^2}{3s}$. ¿Cuánto vale a $\sqrt s = 10$ GeV, en nb ($(\hbar c)^2 = 0{,}3894$ GeV²·mb)? Respuesta: con **4 decimales**.
    answers: ["sha256:c9ac94b906076405abfc999d6df11492c33d290aee6a4609a49618adaa045cf8"]
  - id: vida-del-z
    tier: 2
    prompt: |
      La anchura del bosón $Z$ es $\Gamma = 2{,}4952$ GeV. ¿Cuál es su vida media, en unidades de $10^{-25}$ s ($\hbar = 6{,}582\cdot10^{-25}$ GeV·s)? Respuesta: con **3 decimales**.
    answers: ["sha256:5b25f33ec72a168843b9b3a79683da1be4ee9df3aa9fbe870cfe4c320fbfd71f"]
  - id: traza-de-dirac
    tier: 2
    prompt: |
      Con $g^{\mu\nu} = \operatorname{diag}(1, -1, -1, -1)$ y $\{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}$, ¿cuánto vale $\operatorname{Tr}(\gamma^0\gamma^0\gamma^1\gamma^1)$? Respuesta: un entero.
    answers: ["sha256:e5e0093f285a4fb94c3fcc2ad7fd04edd10d429ccda87a9aa5e4718efadf182e"]
  - id: rutherford
    tier: 2
    prompt: |
      ¿Cuántas veces es mayor la sección eficaz diferencial de Rutherford a $60°$ que a $90°$? Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: teorema-de-wick
    tier: 2
    prompt: |
      Para una variable gaussiana de media 0 y varianza 1, ¿cuánto vale $\langle x^6\rangle$ (número de emparejamientos de Wick)? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: carrera-de-alfa
    tier: 3
    prompt: |
      Incluyendo solo el lazo del electrón, $1/\alpha(Q) = 1/\alpha - \frac{2}{3\pi}\ln\frac{Q}{m_e}$. ¿Cuánto vale $1/\alpha$ en $Q = 10$ GeV? Respuesta: con **2 decimales**.
    answers: ["sha256:bbb29a58ba8991a4a156d7f1e25db39f3ebbf05553ac135fa792f93fb2a92f77"]
  - id: libertad-asintotica
    tier: 3
    prompt: |
      A un lazo, $\alpha_s(Q) = \frac{\alpha_s(M_Z)}{1 + \alpha_s(M_Z)\,b_0\ln(Q^2/M_Z^2)}$ con $b_0 = \frac{33 - 2n_f}{12\pi}$. Con $\alpha_s(M_Z) = 0{,}118$ y $n_f = 5$, ¿cuánto vale $\alpha_s(10\text{ GeV})$? Respuesta: con **4 decimales**.
    answers: ["sha256:b01ff71057099aaa1b588a4d69954ae5588f2862eb796e163b7fd9b6ad88f004"]
  - id: teoria-de-perturbaciones
    tier: 3
    prompt: |
      En la "teoría de campos de dimensión cero" $Z(\lambda) = \int e^{-x^2/2 - \lambda x^4}dx$, ¿cuánto vale exactamente $Z(0{,}01)/Z(0)$? (A primer orden sería $1 - 3\lambda$.) Respuesta: con **5 decimales**.
    answers: ["sha256:f2c526c663ae03c269008cdc0ca66df49c0515f686a9196dbe3fb823939cc26f"]
---

# Teoría cuántica de campos: campos libres, cuantización, simetrías, Feynman, QED, renormalización y el modelo estándar

La mecánica cuántica de partículas no admite que se creen ni se destruyan, y la relatividad exige que lo hagan: con suficiente energía, $E = mc^2$ fabrica
pares. La solución es tratar como objeto fundamental un **campo** que llena el espacio, cuyas excitaciones cuantizadas son las partículas. La teoría
cuántica de campos (TCC) es el lenguaje del modelo estándar, la teoría física más precisa jamás comprobada (el momento magnético del electrón coincide en
doce cifras), y también el de la materia condensada (fonones, magnones, superconductividad) y la física estadística de puntos críticos. Este nodo da
las ideas y los cálculos clave sin perderse en el formalismo completo.

## Objetivos

Al terminar sabrás:

1. Explicar por qué la cuántica relativista necesita campos, y cuantizar un campo escalar libre como una colección de osciladores.
2. Interpretar el vacío, la energía del punto cero y el efecto Casimir.
3. Relacionar simetrías y cantidades conservadas (Noether) y las simetrías gauge con las fuerzas.
4. Leer diagramas de Feynman, usar variables de Mandelstam y calcular una sección eficaz de QED a orden más bajo.
5. Entender la renormalización y la carrera de las constantes de acoplamiento (QED y libertad asintótica en QCD).
6. Describir el modelo estándar como teoría gauge SU(3)×SU(2)×U(1) con el mecanismo de Higgs.

## Qué debes dominar antes

[[fis-mecanica-cuantica]] (oscilador armónico con operadores de escalera, espín, teoría de perturbaciones), [[fis-relatividad-especial]], 
[[fis-fisica-nuclear-particulas]] (partículas, interacciones, cinemática) y [[fis-mecanica-estadistica-avanzada]] (renormalización en física estadística,
integrales gaussianas).

> [!question] Test de entrada
> 1. ¿Cuáles son los niveles de energía del oscilador armónico cuántico y qué hace $a^\dagger$?
> 2. ¿Qué es la masa invariante de un sistema de partículas?
> 3. ¿Cuánto vale $\int_{-\infty}^\infty e^{-x^2/2}dx$?
>
> Respuestas: $E_n = \hbar\omega(n + \frac12)$, y $a^\dagger$ sube un nivel; $M^2c^4 = (\sum E)^2 - (\sum\vec pc)^2$; $\sqrt{2\pi}$.

## 1. Para qué sirve

- **Física de partículas**: todas las predicciones de los aceleradores (secciones eficaces, anchuras, desintegraciones) se calculan con TCC.
- **Materia condensada**: cuasipartículas, teoría BCS, efecto Hall cuántico y transiciones de fase usan el mismo formalismo.
- **Cosmología**: inflación, fluctuaciones primordiales, materia oscura candidata.
- **Tecnología cuántica**: la electrodinámica cuántica de circuitos y de cavidades describe los cúbits superconductores y fotónicos.

## 2. De partículas a campos

La ecuación de **Klein-Gordon** $(\partial_t^2 - \nabla^2 + m^2)\phi = 0$ (unidades naturales $\hbar = c = 1$) es $E^2 = p^2 + m^2$ aplicada a una onda. Como ecuación para una función de onda
falla (densidades de probabilidad negativas); como ecuación de un **campo** funciona. Cada modo de Fourier $e^{i(\vec k\cdot\vec x - \omega t)}$ con $\omega = \sqrt{k^2 + m^2}$ es un oscilador
armónico. Cuantizarlo da operadores $a_{\vec k}$, $a^\dagger_{\vec k}$ con $[a_{\vec k}, a^\dagger_{\vec k'}] = (2\pi)^3\delta^3(\vec k - \vec k')$:

$$
\phi(\vec x) = \int\frac{d^3k}{(2\pi)^3}\frac{1}{\sqrt{2\omega_k}}\left(a_{\vec k}e^{i\vec k\cdot\vec x} + a^\dagger_{\vec k}e^{-i\vec k\cdot\vec x}\right), \qquad H = \int\frac{d^3k}{(2\pi)^3}\,\omega_k\left(a^\dagger_{\vec k}a_{\vec k} + \tfrac12[\ldots]\right).
$$

$a^\dagger_{\vec k}$ **crea una partícula** de momento $\vec k$ y energía $\omega_k$; el estado con $n$ excitaciones de un modo es un estado de $n$ partículas idénticas (bosones, automáticamente
simétricos). Las partículas viajan con velocidad de grupo $d\omega/dk = k/\omega < 1$. Para fermiones, los operadores **anticonmutan** y sale el principio de Pauli; el
**teorema espín-estadística** liga espín entero a bosones y semientero a fermiones.

**El vacío** es el estado sin excitaciones, pero cada modo conserva su energía de punto cero $\frac12\omega$. La suma es infinita, pero sus **diferencias** son físicas:
entre dos placas conductoras se eliminan modos y aparece una atracción, el **efecto Casimir**, $\frac{F}{A} = \frac{\pi^2\hbar c}{240d^4}$ (1,3 mPa a 1 μm), medido con precisión en 1997.

## 3. Simetrías, Noether y gauge

**Teorema de Noether**: cada simetría continua de la acción da una cantidad conservada (traslaciones → energía y momento; rotaciones → momento angular; una
fase global $\phi \to e^{i\alpha}\phi$ → carga). Si se exige que la fase pueda cambiar de punto a punto (**simetría gauge local**), hay que introducir un campo
compensador que se transforma adecuadamente: con U(1) aparece el **fotón** y la electrodinámica; con SU(3), los **8 gluones** de la cromodinámica ($N^2 - 1$ para SU(N)); con
SU(2)×U(1), los **4 bosones** electrodébiles. La interacción es consecuencia de la simetría.

Los campos de espín $\frac12$ obedecen la **ecuación de Dirac** $(i\gamma^\mu\partial_\mu - m)\psi = 0$, con matrices $4\times4$ que cumplen $\{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}$; predice el espín, el
momento magnético $g = 2$ y la **antimateria** (el positrón, descubierto en 1932). En los cálculos aparecen trazas de productos de matrices gamma que se evalúan
solo con esa relación: $\operatorname{Tr}(\gamma^\mu\gamma^\nu) = 4g^{\mu\nu}$.

## 4. Interacciones y diagramas de Feynman

Con interacción, las amplitudes se calculan como serie en el acoplamiento. Cada término es un **diagrama de Feynman**: líneas externas (partículas
entrantes y salientes), vértices (un factor del acoplamiento, $\sqrt{4\pi\alpha} = e$ en QED) y líneas internas (**propagadores**, $\frac{1}{q^2 - m^2}$ para un bosón). Un propagador de
masa $m$ intercambiado entre dos partículas da en el límite estático el potencial de **Yukawa** $V(r) \propto -\frac{e^{-mr}}{r}$: alcance $1/m$; con fotón ($m = 0$), Coulomb.

En la versión de **integral de camino**, todo se reduce a integrales gaussianas y sus momentos: el **teorema de Wick** dice que $\langle x^{2n}\rangle$ es el número de
emparejamientos $(2n - 1)!!$ ($\langle x^4\rangle = 3$, $\langle x^6\rangle = 15$), y cada emparejamiento es un diagrama. Incluso en "dimensión cero", $Z(\lambda) = \int e^{-x^2/2 - \lambda x^4}$, la serie
$1 - 3\lambda + \frac{105}{2}\lambda^2 - \cdots$ es **asintótica**: los coeficientes crecen factorialmente, fenómeno que también tienen las series de QED.

**Cinemática**: para $1 + 2 \to 3 + 4$ se usan las invariantes de **Mandelstam** $s = (p_1 + p_2)^2$, $t = (p_1 - p_3)^2$, $u = (p_1 - p_4)^2$, con $s + t + u = \sum m_i^2$.

> [!example] Ejemplo resuelto 1: $e^+e^- \to \mu^+\mu^-$
> A orden más bajo hay un solo diagrama: el par se aniquila en un fotón virtual que crea los muones. Sumando sobre espines (con trazas de matrices gamma),
> para energías muy por encima de las masas, $\frac{d\sigma}{d\Omega} = \frac{\alpha^2}{4s}(1 + \cos^2\theta)$ e integrando, $\sigma = \frac{4\pi\alpha^2}{3s}$. A $\sqrt s = 10$ GeV, multiplicando por $(\hbar c)^2 = 0{,}3894$ GeV²·mb,
> $\sigma \approx 0{,}87$ nb. Es la "unidad" con la que se miden otras secciones eficaces en colisionadores $e^+e^-$: su cociente con la de producir hadrones mide el número de
> colores de los quarks (3).

## 5. Renormalización y constantes que corren

Los diagramas con lazos dan integrales divergentes. La **renormalización** absorbe esas divergencias en los parámetros medidos (masa y carga físicas), y las
predicciones quedan finitas. La lección profunda (Wilson) es que las constantes dependen de la **escala** a la que se miden:

- **QED**: los pares virtuales apantallan la carga, así que $\alpha$ **crece** con la energía: $\frac{1}{\alpha(Q)} = \frac1\alpha - \frac{2}{3\pi}\sum_f Q_f^2\ln\frac{Q}{m_f}$. Con solo el electrón, $1/\alpha(M_Z) \approx 134{,}5$;
  con todos los fermiones, 128,9, como se mide en el LEP.
- **QCD**: los gluones se autointeraccionan y producen **antiapantallamiento**: $\alpha_s$ **disminuye** con la energía (**libertad asintótica**, Nobel 2004), $\alpha_s(Q) = \frac{\alpha_s(\mu)}{1 + \alpha_s(\mu)b_0\ln(Q^2/\mu^2)}$
  con $b_0 = \frac{33 - 2n_f}{12\pi}$. A altas energías los quarks casi no interaccionan (por eso se ven como partículas casi libres dentro del protón); a bajas, $\alpha_s$
  crece y los confina.

> [!example] Ejemplo resuelto 2: $\alpha_s$ a 10 GeV
> Con $\alpha_s(M_Z) = 0{,}118$ y 5 sabores, $b_0 = \frac{23}{12\pi} \approx 0{,}610$. Como $\ln(10^2/91{,}19^2) \approx -4{,}42$, el denominador es $1 - 0{,}118\cdot0{,}610\cdot4{,}42 \approx 0{,}682$ y $\alpha_s(10\text{ GeV}) \approx 0{,}173$: a una décima
> de la energía, la fuerza fuerte es un 47 % más intensa. Integrando la ecuación diferencial $\frac{d\alpha_s}{d\ln Q^2} = -b_0\alpha_s^2$ con RK4 sale lo mismo.

## 6. El modelo estándar

Es una teoría gauge SU(3)$_c$ × SU(2)$_L$ × U(1)$_Y$ con tres familias de quarks y leptones. Las partículas izquierdas y derechas se transforman distinto (la
interacción débil viola la paridad). El **mecanismo de Higgs** da masa a $W^\pm$ y $Z$ sin romper la simetría de las ecuaciones: un campo escalar adquiere un valor de
vacío $v \approx 246$ GeV, tres de sus cuatro grados de libertad se convierten en la polarización longitudinal de los bosones masivos y el cuarto es el **bosón de
Higgs** (125 GeV, 2012); los fermiones obtienen masa por su acoplamiento con él. Las partículas inestables se ven como resonancias de **Breit-Wigner**, con anchura
$\Gamma = \hbar/\tau$: la del $Z$, 2,4952 GeV, mide el número de familias de neutrinos ligeros (3).

Lo que el modelo estándar no explica: la masa de los neutrinos (añadible), la materia oscura, la asimetría materia-antimateria, la energía oscura y la gravedad
cuántica.

> [!example] Ejemplo resuelto 3: el momento de los muones en el centro de masas (con menos ayuda)
> En $e^+e^- \to \mu^+\mu^-$ sin masas con $s = 100$ GeV² y $t = -30$ GeV², usa $s + t + u = 0$ para obtener $u$. Después escribe los cuadrimomentos en el centro de masas
> ($E = \sqrt s/2$ para cada partícula) y relaciona $t = -\frac s2(1 - \cos\theta)$ con el ángulo de dispersión: comprueba que $\cos\theta = 0{,}4$ y calcula $u$ con los cuadrivectores.

## 7. Comprobar con un programa

Un modo del campo como oscilador truncado, la sección eficaz integrando la distribución angular, las constantes que corren integrando sus ecuaciones y
la serie asintótica de la teoría de dimensión cero.

```python
import math

# 1. Un modo del campo: (a + a†)² en |3⟩ con matrices truncadas.
N = 12
a = [[math.sqrt(j) if j == i + 1 else 0.0 for j in range(N)] for i in range(N)]
X = [[a[i][j] + a[j][i] for j in range(N)] for i in range(N)]
X2 = [[sum(X[i][k] * X[k][j] for k in range(N)) for j in range(N)] for i in range(N)]
assert abs(X2[3][3] - 7) < 1e-12

# 2. Ejemplo resuelto 1: σ(e⁺e⁻ → μ⁺μ⁻) integrando (α²/4s)(1 + cos²θ) sobre el ángulo sólido.
alpha, s = 1 / 137.035999084, 100.0
M = 20000
sigma = 2 * math.pi * sum(alpha**2 / (4 * s) * (1 + c * c) for c in ((-1 + (i + 0.5) * 2 / M) for i in range(M))) * 2 / M
assert abs(sigma - 4 * math.pi * alpha**2 / (3 * s)) / sigma < 1e-8
print("σ(√s = 10 GeV) =", round(sigma * 0.3893793721e6, 4), "nb")

# 3. Ejemplo resuelto 2 y carrera de α: integrar las ecuaciones del grupo de renormalización con RK4.
def rk4(f, y, x0, x1, n=20000):
    h = (x1 - x0) / n
    for i in range(n):
        x = x0 + i * h
        k1 = f(x, y)
        k2 = f(x + h / 2, y + h / 2 * k1)
        k3 = f(x + h / 2, y + h / 2 * k2)
        k4 = f(x + h, y + h * k3)
        y += h / 6 * (k1 + 2 * k2 + 2 * k3 + k4)
    return y

b0, MZ = 23 / (12 * math.pi), 91.1876
as10 = rk4(lambda x, g: -b0 * g * g, 0.118, math.log(MZ**2), math.log(100.0))
assert abs(as10 - 0.118 / (1 + 0.118 * b0 * math.log(100 / MZ**2))) < 1e-10
inv_alpha_MZ = 1 / rk4(lambda x, g: 2 * g * g / (3 * math.pi), alpha, 0.0, math.log(MZ / 0.00051099895))
assert abs(inv_alpha_MZ - 134.47) < 0.01

# 4. Serie asintótica: Z(λ)/Z(0) exacto frente a las sumas parciales 1 − 3λ + 105/2 λ² − 3465/2 λ³ ...
lam = 0.01
Z = lambda l: sum(math.exp(-x * x / 2 - l * x**4) for x in (-12 + (i + 0.5) * 24 / 100000 for i in range(100000))) * 24 / 100000
exacto = Z(lam) / Z(0)
coef = [(-1) ** k * math.prod(range(1, 4 * k, 2)) / math.factorial(k) for k in range(6)]   # (4k − 1)!!/k!
parciales = [sum(c * lam**k for k, c in enumerate(coef[: n + 1])) for n in range(6)]
print("exacto", round(exacto, 6), "| sumas parciales", [round(p, 6) for p in parciales])
assert abs(parciales[2] - exacto) < abs(parciales[1] - exacto)   # al principio mejora...
```

## 8. Errores típicos

- Pensar que las partículas virtuales son partículas "reales pero breves": son términos de una serie de perturbaciones y no cumplen $E^2 = p^2 + m^2$.
- Tomar la energía del vacío infinita como una predicción física: solo sus diferencias (Casimir) lo son.
- Usar la constante $\alpha = 1/137$ a cualquier energía: corre.
- Olvidar las sumas sobre espines y colores al calcular secciones eficaces.
- Confundir el mecanismo de Higgs con "lo que da masa a todo": la mayor parte de la masa del protón viene de la energía de QCD, no del Higgs.
- Esperar que una serie perturbativa converja: suele ser asintótica, útil solo hasta cierto orden.

## 9. Resumen

- Campos = osciladores por modo; $a^\dagger$ crea partículas; bosones y fermiones (espín-estadística); Klein-Gordon y Dirac.
- Vacío y punto cero; Casimir $\pi^2\hbar c/(240d^4)$.
- Noether: simetría → conservación; gauge local → fuerzas (U(1): fotón; SU(3): 8 gluones; SU(2)×U(1): 4).
- Feynman: vértices, propagadores, Yukawa $e^{-mr}/r$; Wick $(2n-1)!!$; Mandelstam $s + t + u = \sum m^2$; $\sigma(ee\to\mu\mu) = 4\pi\alpha^2/(3s)$.
- Renormalización: $\alpha$ crece (apantallamiento), $\alpha_s$ decrece (libertad asintótica, $b_0 = (33 - 2n_f)/12\pi$).
- Modelo estándar SU(3)×SU(2)×U(1), Higgs ($v = 246$ GeV), Breit-Wigner $\Gamma = \hbar/\tau$; lo que falta.

## Repaso: lo que debe quedarte dentro de un mes

1. Las partículas son excitaciones cuantizadas de campos.
2. Las simetrías gauge locales fijan las interacciones.
3. Los diagramas de Feynman son términos de una serie en el acoplamiento.
4. Las constantes "constantes" dependen de la escala de energía.
5. El modelo estándar describe casi todo lo medido, pero no la gravedad ni la materia oscura.

## Siguiente

Con este nodo se completa la rama de física. Conecta con `cua-algoritmos-correccion-errores` (información cuántica avanzada) y con la base
matemática de [[mat-analisis-funcional]] y [[mat-geometria-diferencial]].
