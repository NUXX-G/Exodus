---
id: fis-electricidad-magnetismo-1
title: "Electricidad y magnetismo I: campos, potencial, inducción"
area: fisica
trunk_level: 11
prerequisites: [fis-mecanica-newtoniana, ing-electricidad-basica, mat-calculo-2]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018 (capítulos de carga y campo eléctrico, ley de Gauss, potencial, capacidad, campos magnéticos, ley de Ampère e inducción)."
  - "Purcell, E. M.; Morin, D. J. Electricity and Magnetism, 3ª ed. Cambridge University Press, 2013."
  - "Griffiths, D. J. Introduction to Electrodynamics, 4ª ed. Cambridge University Press, 2017."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. II. Addison-Wesley, 1964 (edición en línea: feynmanlectures.caltech.edu)."
  - "Tiesinga, E.; Mohr, P. J.; Newell, D. B.; Taylor, B. N. CODATA recommended values of the fundamental physical constants: 2018. Rev. Mod. Phys. 93, 025010 (2021)."
hints:
  - "Concepto: la carga crea un campo; el campo ejerce fuerza sobre otras cargas. Con simetría (esfera, hilo, plano) usa la ley de Gauss; sin simetría, suma (integra) las contribuciones de cada elemento de carga o de corriente, recordando que el campo es un vector."
  - "Herramienta: comprueba cada resultado por un segundo camino: la fórmula cerrada frente a una suma o integral numérica (Simpson o suma de miles de elementos) y las unidades (N/C = V/m, T = N/(A·m))."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de campo eléctrico, ley de Gauss, potencial eléctrico, capacidad, campo magnético, ley de Ampère e inducción; Purcell-Morin, capítulos 1 a 7; Feynman vol. II, capítulos 1 a 17."
exercises:
  - id: ley-de-coulomb
    tier: 1
    prompt: |
      Dos cargas puntuales de $2\,\mu\text{C}$ y $3\,\mu\text{C}$ están a $0{,}3$ m. Con $k = 9\times10^9\ \text{N·m}^2/\text{C}^2$, ¿qué fuerza se ejercen, en newtons? Respuesta: un número.
    answers: ["sha256:b4af4e0d40391d3a00179d935c63b7e15ba8cd3dfa29f218dedc270bd3eb3e79"]
  - id: campo-de-una-carga
    tier: 1
    prompt: |
      ¿Qué módulo tiene el campo eléctrico, en N/C, a $0{,}5$ m de una carga puntual de $5$ nC? ($k = 9\times10^9$.) Respuesta: un número.
    answers: ["sha256:7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405"]
  - id: capacidad-de-placas
    tier: 1
    prompt: |
      Un condensador de placas paralelas tiene placas de $0{,}02$ m$^2$ separadas $1$ mm, con vacío entre ellas. Con $\varepsilon_0 = 8{,}85\times10^{-12}$ F/m, ¿cuál es su capacidad, en picofaradios? Respuesta: un número.
    answers: ["sha256:8cd2510271575d8430c05368315a87b9c4784c7389a47496080c1e615a2a00b6"]
  - id: energia-del-condensador
    tier: 1
    prompt: |
      Un condensador de $10\,\mu\text{F}$ se carga a $12$ V. ¿Qué energía almacena, en microjulios? Respuesta: un número.
    answers: ["sha256:d829857eb1366e70be857a69886d1555af0d32681beab068afb93492c2e2b843"]
  - id: condensadores-en-serie
    tier: 1
    prompt: |
      Dos condensadores de $6\,\mu\text{F}$ y $3\,\mu\text{F}$ se conectan en **serie**. ¿Cuál es la capacidad equivalente, en $\mu\text{F}$? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: potencial-en-el-centro
    tier: 2
    prompt: |
      En los cuatro vértices de un cuadrado de lado $1$ m hay cargas de $1$ nC. ¿Cuánto vale el potencial en el centro del cuadrado, en voltios ($V = 0$ en el infinito, $k = 9\times10^9$)? Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:b5de4f5e73760d44b21e1154f52b7bdc64a5f58f57dca7bc8f5da69d43825fb2"]
  - id: campo-de-un-hilo
    tier: 2
    prompt: |
      Un hilo recto muy largo tiene una densidad lineal de carga de $2$ nC/m. ¿Qué campo crea a $0{,}4$ m, en N/C? (Usa la ley de Gauss: $E = 2k\lambda/r$.) Respuesta: un número.
    answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
  - id: esfera-uniforme-interior
    tier: 2
    prompt: |
      Una esfera maciza de radio $0{,}2$ m tiene una carga de $8$ nC repartida **uniformemente en su volumen**. ¿Qué campo hay a $0{,}15$ m del centro, en N/C? ($k = 9\times10^9$.) Respuesta: un número.
    answers: ["sha256:cba8d3a39041d4164e60270c6281f81be92d29656bec527211d87de66571f403"]
  - id: radio-del-ciclotron
    tier: 2
    prompt: |
      Un protón ($m = 1{,}67\times10^{-27}$ kg, $q = 1{,}6\times10^{-19}$ C) entra a $10^6$ m/s perpendicular a un campo magnético uniforme de $0{,}5$ T. ¿Qué radio tiene su órbita circular, en milímetros? Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:f7a4c1e4a149646cdad0cdaa308727e0831f71bb39bbe363f6de950407f2264b"]
  - id: hilo-en-un-campo
    tier: 2
    prompt: |
      Por un hilo recto de $0{,}4$ m circula una corriente de $5$ A en un campo uniforme de $0{,}3$ T que forma $30^\circ$ con el hilo. ¿Qué fuerza magnética sufre, en newtons? Respuesta: un número.
    answers: ["sha256:221764976efe04132774d96b0253cc31434c5261737469324f222621baf34b20"]
  - id: campo-de-un-hilo-largo
    tier: 2
    prompt: |
      Un hilo recto muy largo lleva $10$ A. ¿Qué campo magnético crea a $5$ cm, en microteslas? ($\mu_0 = 4\pi\times10^{-7}$ T·m/A; ley de Ampère.) Respuesta: un número.
    answers: ["sha256:d59eced1ded07f84c145592f65bdf854358e009c5cd705f5215bf18697fed103"]
  - id: solenoide
    tier: 2
    prompt: |
      Un solenoide largo tiene $1000$ espiras por metro y por él circulan $2$ A. ¿Cuánto vale $B$ en su interior, en militeslas? ($\mu_0 = 4\pi\times10^{-7}$.) Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:a4daf61f8f0c49b57f137ca4f16255dca311ec2e3f55ccb80ddbf16ac6acf4f1"]
  - id: ley-de-faraday
    tier: 3
    prompt: |
      Una bobina de $100$ espiras de $0{,}01$ m$^2$ cada una está perpendicular a un campo que crece de $0$ a $0{,}5$ T en $0{,}2$ s. ¿Qué fuerza electromotriz media se induce, en voltios? Respuesta: un número.
    answers: ["sha256:b8736b999909049671d0ea075a42b308a5fbe2df1854899123fe09eb0ee9de61"]
  - id: fem-de-movimiento
    tier: 3
    prompt: |
      Una barra conductora de $0{,}5$ m se desplaza a $4$ m/s perpendicular a un campo de $0{,}8$ T (y a su propia longitud). ¿Qué fem aparece entre sus extremos, en voltios? Respuesta: un número.
    answers: ["sha256:ec6c168f4411ec8fa9ab8d47dd25954ce53728404fed0e7a9bc7f29dab38c30d"]
  - id: campo-en-el-eje-de-un-anillo
    tier: 3
    prompt: |
      Un anillo de radio $0{,}1$ m lleva una carga de $10$ nC repartida uniformemente. ¿Qué campo hay en el punto del eje a $0{,}2$ m del plano del anillo, en N/C? ($E = kQx/(R^2 + x^2)^{3/2}$, $k = 9\times10^9$.) Respuesta: un entero (redondeado).
    answers: ["sha256:31d8edb99534fd4800651db4d241d86e0380fa7376718b88590c2d772b41d5f4"]
  - id: fuerza-entre-hilos
    tier: 3
    prompt: |
      Dos hilos rectos largos y paralelos, a $0{,}15$ m, llevan $15$ A y $20$ A en el mismo sentido. ¿Qué fuerza por metro de longitud se ejercen, en $\mu$N/m? ($\mu_0 = 4\pi\times10^{-7}$.) Respuesta: un número.
    answers: ["sha256:26d228663f13a88592a12d16cf9587caab0388b262d6d9f126ed62f9333aca94"]
  - id: velocidad-de-la-luz
    tier: 3
    prompt: |
      Las ecuaciones de Maxwell predicen ondas con $c = 1/\sqrt{\mu_0\varepsilon_0}$. Con $\mu_0 = 4\pi\times10^{-7}$ T·m/A y $\varepsilon_0 = 8{,}854\times10^{-12}$ F/m, ¿cuánto vale $c$ en unidades de $10^8$ m/s? Respuesta: un número redondeado a **3 decimales**.
    answers: ["sha256:df13400dfae8fa6c536db0fdbd2f489a896c89b0b266fa55f15bd729afaed9c9"]
---

# Electricidad y magnetismo I: campos, potencial, inducción

[[ing-electricidad-basica]] trataba la electricidad como **circuitos**: tensión, corriente, resistencia. Detrás de cada circuito hay **campos**: las cargas crean un campo eléctrico, las corrientes crean un campo magnético, y la variación de uno genera el otro. Este nodo construye esa teoría con cálculo, de la ley de Coulomb a la ley de Faraday, y es la puerta a [[fis-electromagnetismo]] (las ecuaciones de Maxwell completas y la luz) y a [[ing-circuitos]].

## Objetivos

Al terminar sabrás:

1. Calcular fuerzas y campos de cargas puntuales y de distribuciones continuas (superposición e integrales).
2. Aplicar la **ley de Gauss** con simetría (esfera, hilo, plano).
3. Relacionar campo, **potencial** y energía; calcular la capacidad y la energía de condensadores.
4. Calcular la fuerza magnética sobre cargas y corrientes y el campo de corrientes (**Biot-Savart**, **Ampère**).
5. Aplicar la **ley de Faraday** y la ley de Lenz, y entender por qué la luz es una onda electromagnética.

> [!question] Test de entrada
> 1. ¿Cuánto vale $\int_0^1 \dfrac{dx}{(1+x^2)^{3/2}}$? 2. ¿Qué potencia disipa una resistencia de $10\ \Omega$ con $2$ A? 3. ¿Cuál es el producto vectorial $\hat x \times \hat y$?
>
> Respuestas: $1/\sqrt2 \approx 0{,}707$; $40$ W; $\hat z$.

## 1. Para qué sirve

- **Electrónica y energía**: condensadores, bobinas, transformadores, motores y generadores son aplicaciones directas de este nodo.
- **Comunicaciones**: antenas y líneas de transmisión ([[ing-circuitos]]).
- **Instrumentación**: sensores capacitivos (pantallas táctiles), efecto Hall, espectrómetros de masas, aceleradores.
- **Base de la física moderna**: Maxwell condujo a la relatividad y a la cuántica ([[fis-electromagnetismo]]).

## 2. Carga, ley de Coulomb y campo eléctrico

La carga eléctrica $q$ (unidad: culombio, C) se **conserva** y está cuantizada en múltiplos de la carga elemental $e = 1{,}602\,176\,634\times10^{-19}$ C (valor **exacto** en el SI desde 2019). La **ley de Coulomb** da la fuerza entre dos cargas puntuales:

$$
F = k\,\frac{|q_1q_2|}{r^2}, \qquad k = \frac{1}{4\pi\varepsilon_0} \approx 8{,}988\times10^{9}\ \text{N·m}^2/\text{C}^2,
$$

repulsiva si las cargas tienen el mismo signo y atractiva si son opuestas. En los ejercicios se usa $k = 9\times10^9$ y $\varepsilon_0 = 8{,}85\times10^{-12}$ F/m, valores redondeados; el valor recomendado de $\varepsilon_0$ es $8{,}854\,187\,8128\times10^{-12}$ F/m (CODATA 2018). **Ejemplo:** dos cargas de $1\ \mu$C a $1$ m: $F = 9\times10^9\cdot10^{-12} = 9\times10^{-3}$ N.

El **campo eléctrico** es la fuerza por unidad de carga de prueba: $\vec E = \vec F/q$ (N/C = V/m). Una carga puntual $Q$ crea $E = kQ/r^2$ radial. **Superposición:** el campo de varias cargas es la suma **vectorial** de los campos. Para una distribución continua se divide en elementos $dq$ y se integra, $\vec E = \int \dfrac{k\,dq}{r^2}\,\hat r$.

**Ejemplo (anillo cargado, punto del eje).** Un anillo de radio $R$ y carga $Q$; un punto a distancia $x$ del plano sobre el eje. Por simetría las componentes perpendiculares al eje se anulan y solo queda la axial: cada $dq$ aporta $k\,dq\,\dfrac{x}{(R^2+x^2)^{3/2}}$, y

$$
E_x = \frac{kQx}{(R^2+x^2)^{3/2}} .
$$

Con $Q = 10$ nC, $R = x = 0{,}1$ m: $E = 9\times10^9\cdot10^{-8}\cdot0{,}1\big/0{,}02^{3/2} \approx 3182$ N/C. (Comprobación límite: para $x \gg R$ da $kQ/x^2$, el campo de una carga puntual.)

**Comprueba tu idea.** ¿Puede el campo de un dipolo ($+q$ y $-q$) anularse en algún punto de la recta que une las cargas? No: entre ellas los dos campos apuntan en el mismo sentido y se **suman**; fuera, el de la carga más cercana es siempre mayor en módulo y no se compensan.

## 3. Ley de Gauss

El **flujo** del campo a través de una superficie es $\Phi = \oint \vec E\cdot d\vec A$. La **ley de Gauss** dice que, para cualquier superficie cerrada,

$$
\oint \vec E\cdot d\vec A = \frac{Q_{\text{enc}}}{\varepsilon_0}.
$$

Es equivalente a la ley de Coulomb (con la dependencia $1/r^2$) y es **siempre** cierta, pero **solo sirve para calcular** $E$ cuando la simetría permite sacar $E$ de la integral. Los tres casos clásicos:

| Distribución | Superficie gaussiana | Resultado |
|---|---|---|
| Esfera (carga puntual o corteza) | esfera concéntrica | $E = \dfrac{kQ_{\text{enc}}}{r^2}$ |
| Hilo infinito, $\lambda$ | cilindro coaxial | $E = \dfrac{2k\lambda}{r}$ |
| Plano infinito, $\sigma$ | cilindro que lo atraviesa | $E = \dfrac{\sigma}{2\varepsilon_0}$ |

**Esfera maciza uniforme** (radio $R$, carga $Q$). Fuera: $E = kQ/r^2$. Dentro, la carga encerrada es proporcional al volumen: $Q_{\text{enc}} = Q\,(r/R)^3$, de modo que $E = kQr/R^3$, **lineal** en $r$. Con $Q = 8$ nC, $R = 0{,}2$ m, $r = 0{,}1$ m: $E = 900$ N/C.
**Conductores en equilibrio:** el campo es **cero dentro** del conductor, la carga se queda en la superficie y el campo exterior es perpendicular a ella.

## 4. Potencial y energía

El campo electrostático es **conservativo**, así que existe el **potencial** $V$ (unidad: voltio, V = J/C) con $\vec E = -\nabla V$; en una dimensión, $E = -dV/dx$ y $\Delta V = -\int \vec E\cdot d\vec r$. Para una carga puntual, $V = kQ/r$ (con $V = 0$ en el infinito), y los potenciales se **suman como escalares**: mucho más fácil que sumar campos vectoriales.
**Ejemplo (cuadrado):** cuatro cargas de $1$ nC en los vértices de un cuadrado de lado $1$ m; la distancia de cada una al centro es $\sqrt2/2$ m, así que $V = 4k q/(\sqrt2/2) = 50{,}9$ V. El campo en el centro es **cero** (se anula por simetría), pero el potencial **no**: potencial nulo y campo nulo son cosas distintas.

La energía de una carga en un potencial es $U = qV$; la que ganan $e$ o un protón al pasar por $1$ V define el **electronvoltio**, $1\ \text{eV} = 1{,}602\times10^{-19}$ J.

## 5. Condensadores

Un **condensador** guarda carga y energía. Su **capacidad** $C = Q/V$ (faradio, F). Para placas paralelas de área $A$ y separación $d$ con vacío:

$$
C = \frac{\varepsilon_0 A}{d}, \qquad U = \tfrac12CV^2 = \tfrac12QV = \frac{Q^2}{2C}.
$$

**Asociaciones.** En **paralelo** las capacidades se suman, $C = C_1 + C_2$; en **serie** se suman los inversos, $\dfrac1C = \dfrac1{C_1} + \dfrac1{C_2}$ (comparado con las resistencias, al revés). **Ejemplo:** $6\ \mu$F y $3\ \mu$F en serie: $C = 2\ \mu$F. Un **dieléctrico** de constante $\kappa$ multiplica la capacidad por $\kappa$.
La energía está **en el campo**: la densidad de energía es $u = \tfrac12\varepsilon_0E^2$.

## 6. Campo magnético y fuerza magnética

Las cargas **en movimiento** (corrientes) crean y sienten el **campo magnético** $\vec B$ (tesla, T). La fuerza de **Lorentz** sobre una carga $q$ con velocidad $\vec v$ es

$$
\vec F = q(\vec E + \vec v\times\vec B).
$$

La parte magnética es **perpendicular a la velocidad**: **no realiza trabajo**, solo curva la trayectoria. Una partícula que entra perpendicular a un $B$ uniforme describe un círculo; igualando $qvB = mv^2/r$:

$$
r = \frac{mv}{qB}, \qquad \omega = \frac{qB}{m}\ \ (\text{frecuencia de ciclotrón; no depende de } v).
$$

**Ejemplo:** protón a $10^6$ m/s en $0{,}5$ T: $r = 1{,}67\times10^{-27}\cdot10^6\big/(1{,}6\times10^{-19}\cdot0{,}5) \approx 2{,}09$ cm. Es el principio del espectrómetro de masas y del ciclotrón.
**Sobre un hilo** con corriente $I$ y longitud $L$ en un campo uniforme: $\vec F = I\,\vec L\times\vec B$, de módulo $F = ILB\sin\theta$.

## 7. Fuentes del campo magnético: Biot-Savart y Ampère

La **ley de Biot-Savart** da el campo de un elemento de corriente: $d\vec B = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec l\times\hat r}{r^2}$, con $\mu_0 = 4\pi\times10^{-7}$ T·m/A (valor numérico muy cercano al recomendado actual, $1{,}256\,637\,0621\times10^{-6}$ T·m/A, CODATA 2018).
La **ley de Ampère** (válida siempre en régimen estacionario, útil con simetría): $\oint \vec B\cdot d\vec l = \mu_0 I_{\text{enc}}$. Dos resultados que conviene saber de memoria:

- **Hilo recto largo:** $B = \dfrac{\mu_0 I}{2\pi r}$. Con $10$ A a $5$ cm: $B = 40\ \mu$T. (Integrando Biot-Savart sobre un hilo finito muy largo se obtiene lo mismo.)
- **Solenoide largo** (con $n$ espiras por metro): $B = \mu_0 nI$ dentro y casi cero fuera. Con $n = 1000$ m$^{-1}$ y $2$ A: $B = 2{,}51$ mT.

**Fuerza entre hilos paralelos:** el campo de uno actúa sobre el otro. Con corrientes iguales en el mismo sentido se **atraen**, con fuerza por unidad de longitud $F/L = \dfrac{\mu_0I_1I_2}{2\pi d}$. Con $10$ A y $10$ A a $0{,}1$ m: $200\ \mu$N/m. (Hasta 2019 esta fuerza **definía** el amperio; hoy el amperio se define fijando el valor de $e$.)

## 8. Inducción electromagnética: la ley de Faraday

El **flujo magnético** a través de una espira es $\Phi_B = \int \vec B\cdot d\vec A$ (weber, Wb = T·m$^2$). **Ley de Faraday:** una variación del flujo induce una fuerza electromotriz

$$
\mathcal E = -N\,\frac{d\Phi_B}{dt}.
$$

El signo menos es la **ley de Lenz**: la corriente inducida se opone a la variación que la causa (consecuencia de la conservación de la energía).
**Ejemplos:** una bobina de $N = 100$ espiras de $0{,}01$ m$^2$ con $B$ pasando de $0$ a $0{,}5$ T en $0{,}2$ s da $\mathcal E = 100\cdot0{,}01\cdot0{,}5/0{,}2 = 2{,}5$ V. Una barra de longitud $\ell$ que se mueve a $v$ perpendicular a $B$ da la **fem de movimiento** $\mathcal E = B\ell v$ (con $0{,}8$ T, $0{,}5$ m y $4$ m/s: $1{,}6$ V). Los generadores y los transformadores funcionan así.

## 9. Hacia Maxwell y la luz

Las leyes anteriores, con la corrección de Maxwell (una corriente de desplazamiento en la ley de Ampère), forman las cuatro **ecuaciones de Maxwell**. Predicen **ondas electromagnéticas** con velocidad

$$
c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 2{,}998\times10^{8}\ \text{m/s},
$$

que coincide con la velocidad medida de la luz: **la luz es una onda electromagnética**. Este paso, que se estudia a fondo en [[fis-electromagnetismo]], unió electricidad, magnetismo y óptica.

## Errores frecuentes

- Sumar **módulos** de campos en vez de vectores (hay cancelaciones por simetría).
- Usar la ley de Gauss sin simetría: es cierta, pero no permite despejar $E$.
- Confundir potencial y campo: $V = 0$ en un punto no implica $E = 0$.
- Olvidar que la fuerza magnética no cambia la **rapidez** de la partícula, solo su dirección.
- Poner mal las unidades: $\mu$, n, p, y $\mu_0$ en T·m/A.

## Resumen

Coulomb y superposición dan el campo; Gauss lo resuelve con simetría; el potencial lo convierte en escalar y da energía y condensadores. Las corrientes crean $B$ (Biot-Savart, Ampère), $B$ curva cargas y empuja hilos (Lorentz), y un $B$ variable induce una fem (Faraday). Maxwell los une y predice la luz.

## Ejercicios

Resuelve los ejercicios de abajo. El nodo se completa con el $80\,\%$ de aciertos.
