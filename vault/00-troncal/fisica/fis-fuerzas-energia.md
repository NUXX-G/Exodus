---
id: fis-fuerzas-energia
title: "Fuerzas, energía y gravitación: las leyes de Newton"
area: fisica
trunk_level: 1
prerequisites: [fis-medida-movimiento]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I. Addison-Wesley, 1963 (edición en línea: feynmanlectures.caltech.edu)."
  - "Newton, I. Philosophiæ Naturalis Principia Mathematica, 1687 (leyes del movimiento y gravitación universal)."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019."
hints:
  - "Concepto: dibuja siempre el diagrama de cuerpo libre (solo las fuerzas que actúan sobre el cuerpo elegido), elige ejes (uno a lo largo del movimiento), aplica la segunda ley en cada eje y comprueba el signo. Si el problema habla de alturas y velocidades pero no de tiempos ni de fuerzas, prueba con la energía: es más corta."
  - "Herramienta: resuelve con la segunda ley y comprueba con la conservación de la energía (o al revés); y compara con una simulación numérica sencilla en Python (bucle con paso de tiempo pequeño: a partir de la fuerza calcula la aceleración, actualiza la velocidad y luego la posición)."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de fuerza y movimiento, energía cinética y trabajo, energía potencial, centro de masas y momento lineal, y gravitación; Feynman, vol. I, capítulos de las leyes de Newton y de la gravitación."
exercises:
  - id: segunda-ley
    tier: 1
    prompt: |
      Un coche de $1200$ kg acelera a $2{,}5$ m/s$^2$. ¿Qué fuerza neta actúa sobre él, en newtons? Respuesta: un número.
    answers: ["sha256:a176eeb31e601c3877c87c2843a2f584968975269e369d5c86788b4c2f92d2a2"]
  - id: peso-en-la-luna
    tier: 1
    prompt: |
      En la Luna $g = 1{,}62$ m/s$^2$. ¿Cuánto pesa, en newtons, un astronauta de $70$ kg de masa? Respuesta: un número.
    answers: ["sha256:f04f1b7e774711dd23768912bd7dffa27956b11cf9685958a139c6a0c147198e"]
  - id: trabajo-con-angulo
    tier: 1
    prompt: |
      Se arrastra una caja $12$ m tirando de una cuerda con una fuerza de $50$ N que forma $60^\circ$ con el suelo. ¿Qué trabajo realiza esa fuerza, en julios?
      Respuesta: un número.
    answers: ["sha256:983bd614bb5afece5ab3b6023f71147cd7b6bc2314f9d27af7422541c6558389"]
  - id: plano-inclinado
    tier: 2
    prompt: |
      Un bloque resbala por un plano inclinado $30^\circ$ sin rozamiento. Con $g = 10$ m/s$^2$, ¿cuánto vale su aceleración, en m/s$^2$? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: aceleracion-con-rozamiento
    tier: 2
    prompt: |
      Una caja de $20$ kg se empuja con una fuerza horizontal de $80$ N sobre un suelo con coeficiente de rozamiento cinético $\mu = 0{,}25$.
      Con $g = 10$ m/s$^2$, ¿cuál es su aceleración, en m/s$^2$? Respuesta: un número.
    answers: ["sha256:9f29a130438b81170b92a42650f9a94291ecad60bd47af2a3886e75f7f728725"]
  - id: ascensor
    tier: 2
    prompt: |
      Una persona de $80$ kg va en un ascensor que **sube** con aceleración de $2$ m/s$^2$. Con $g = 10$ m/s$^2$, ¿qué fuerza ejerce el suelo sobre ella
      (su «peso aparente»), en newtons? Respuesta: un número.
    answers: ["sha256:7f5642cd0c851c48e5dfbd492e1cdee9a93cba81b38677376437c6587b3af95e"]
  - id: maquina-de-atwood
    tier: 2
    prompt: |
      Dos masas de $3$ kg y $5$ kg cuelgan de los extremos de una cuerda ligera que pasa por una polea sin rozamiento. Con $g = 10$ m/s$^2$,
      ¿cuál es la tensión de la cuerda mientras se mueven, en newtons? Respuesta: un número.
    answers: ["sha256:a17d96c0774054d9ce702f1e5d17d886e8e95de0eca544dd5421d8f3ae821c09"]
  - id: energia-elastica
    tier: 2
    prompt: |
      Un muelle de constante $k = 200$ N/m se comprime $0{,}15$ m. ¿Cuánta energía elástica almacena, en julios? Respuesta: un número.
    answers: ["sha256:4cc23abdbdc20da8971c8095778646615d4de843efa5530776cd04f64e692aba"]
  - id: rampa-sin-rozamiento
    tier: 2
    prompt: |
      Un carrito parte del reposo en lo alto de una rampa a $5$ m de altura y baja sin rozamiento. Con $g = 10$ m/s$^2$, ¿con qué velocidad llega abajo,
      en m/s? Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: choque-inelastico
    tier: 2
    prompt: |
      Un coche de $1000$ kg a $20$ m/s choca contra un camión parado de $4000$ kg y quedan **unidos**. ¿A qué velocidad se mueven justo después, en m/s?
      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: potencia-ascensor
    tier: 3
    prompt: |
      Un montacargas sube una carga de $800$ kg a $30$ m de altura en $20$ s con velocidad constante. Con $g = 10$ m/s$^2$, ¿qué potencia útil desarrolla, en vatios?
      Respuesta: un número.
    answers: ["sha256:c5d1866aabc15dda07995e73b08c4ccb514947dcd3a621cea851af5fe366f11b"]
  - id: frenada-rozamiento
    tier: 3
    prompt: |
      Un coche a $30$ m/s frena a fondo y el rozamiento con el suelo (coeficiente $\mu = 0{,}6$) es la única fuerza horizontal. Con $g = 10$ m/s$^2$,
      ¿qué distancia recorre hasta detenerse, en metros? Respuesta: un número.
    answers: ["sha256:f369cb89fc627e668987007d121ed1eacdc01db9e28f8bb26f358b7d8c4f08ac"]
  - id: altura-gravedad-cuarta
    tier: 3
    prompt: |
      La gravedad disminuye con el cuadrado de la distancia al **centro** de la Tierra (radio $6371$ km). ¿A qué **altura sobre la superficie**, en kilómetros,
      la aceleración de la gravedad vale la cuarta parte que en la superficie? Respuesta: un número.
    answers: ["sha256:df805239a17c4c49d0851f3a0c6fc3225b76f6bbbe5b8bc7cb1f12bc9965f78c"]
  - id: velocidad-orbital
    tier: 3
    prompt: |
      Un satélite describe una órbita circular a $400$ km de altura sobre la Tierra (radio $6{,}371\cdot 10^6$ m; $GM = 3{,}986004418\cdot 10^{14}$ m$^3$/s$^2$).
      ¿Cuál es su velocidad orbital, en m/s? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:19b4bd774a67ed8b7593eac5069287b834f01f37f31ab1dadcd8b570dcc9b3ce"]
  - id: velocidad-de-escape
    tier: 3
    prompt: |
      Con $GM = 3{,}986004418\cdot 10^{14}$ m$^3$/s$^2$ y $R = 6{,}371\cdot 10^6$ m, ¿cuál es la velocidad de escape desde la superficie terrestre, en m/s?
      (Es la velocidad que da energía total cero.) Respuesta: la **parte entera** del resultado.
    answers: ["sha256:daa32eafde4b01291ed32a23b7402b951b7bdc7351514ef77eab0b79edd7dd8c"]
  - id: altura-con-aire
    tier: 3
    prompt: |
      Se lanza hacia arriba una piedra de $0{,}5$ kg a $20$ m/s. El aire ejerce una fuerza de rozamiento constante de $1$ N **opuesta al movimiento**. Con
      $g = 10$ m/s$^2$, ¿qué altura máxima alcanza, en metros? Respuesta: **redondeada a un decimal**.
    answers: ["sha256:9a80cbde0c0fd67d411980e9d12a6f2bbec7cc5f5bb2125ad7afad55edf570e3"]
---

# Fuerzas, energía y gravitación: las leyes de Newton

El nodo anterior describía **cómo** se mueven las cosas. Este pregunta **por qué**. En 1687 Newton reunió en tres leyes y una ley de
gravitación lo que explica desde una pelota hasta la órbita de la Luna. Con la **energía** y la **cantidad de movimiento**, que se
conservan, se resuelven problemas que con fuerzas serían muy largos. Es la base de toda la mecánica, de la ingeniería mecánica y de
buena parte de la robótica ([[rob-control]]).

## Objetivos

Al terminar sabrás:

1. Enunciar y aplicar las tres leyes de Newton, y distinguir masa de peso.
2. Resolver problemas con **diagramas de cuerpo libre**: planos inclinados, rozamiento, poleas, muelles, ascensores.
3. Calcular trabajo, energía cinética y potencial, y aplicar la conservación de la energía.
4. Usar la cantidad de movimiento en choques.
5. Aplicar la ley de gravitación a pesos, órbitas y velocidad de escape.
6. Detectar errores conceptuales típicos (la fuerza no «mantiene» el movimiento).

> [!question] Test de entrada
> 1. Si empujas un carrito con más fuerza, ¿qué le pasa a su aceleración? 2. ¿Cuánto pesa en la Tierra una masa de $10$ kg (con $g = 10$ m/s$^2$)?
> 3. Un objeto se mueve con velocidad constante: ¿actúa una fuerza neta sobre él?
>
> Respuestas: aumenta; $100$ N; **no** (fuerza neta cero).

## 1. Para qué sirve

- **Ingeniería**: dimensionar estructuras, frenos, motores, cables, ascensores.
- **Seguridad**: por qué importan el cinturón y el airbag (alargan el tiempo de frenado y reducen la fuerza).
- **Energía y consumo**: cuánto cuesta subir un peso, qué potencia necesita un motor, por qué un coche gasta mucho más a alta velocidad.
- **Espacio**: órbitas de satélites, velocidad de escape, trayectoria de sondas.

## 2. Fuerza y leyes de Newton

Una **fuerza** es la interacción que cambia el estado de movimiento de un cuerpo. Es un **vector** y se mide en **newtons**
($1\ \text{N} = 1\ \text{kg}\cdot\text{m/s}^2$): la fuerza que da $1$ m/s$^2$ a una masa de $1$ kg. Cuando actúan varias, lo que importa es la **fuerza
neta** $\vec F_{\text{neta}} = \sum \vec F$ (suma vectorial).

**Primera ley (inercia).** Si la fuerza neta es **cero**, el cuerpo sigue en **reposo** o en **movimiento rectilíneo uniforme**. Un cuerpo no necesita
fuerza para **mantener** su velocidad; la necesita para **cambiarla**. (Aristóteles creía lo contrario, porque en la Tierra el rozamiento
detiene casi todo.)

**Segunda ley.**

$$
\sum \vec F = m\,\vec a .
$$

La aceleración es proporcional a la fuerza neta y **inversamente proporcional a la masa**: la masa es la **resistencia al cambio** de movimiento (inercia). Es una
igualdad vectorial: se aplica en cada eje por separado.

**Tercera ley (acción y reacción).** Si el cuerpo A ejerce una fuerza sobre el B, B ejerce sobre A una fuerza **igual y opuesta**. **Actúan sobre cuerpos distintos**, y por eso
**no se cancelan** (la confusión más típica). Un cohete avanza porque empuja los gases hacia atrás y los gases lo empujan a él hacia delante; un nadador empuja el agua.

### Masa, peso y fuerza normal

La **masa** $m$ (kg) mide la cantidad de materia y la inercia; **no cambia** con el lugar. El **peso** es la fuerza con que la gravedad atrae al cuerpo:
$P = m g$ (N), con $g \approx 9{,}81$ m/s$^2$ en la Tierra y $1{,}62$ en la Luna. Un astronauta de $70$ kg pesa $\approx 687$ N en la Tierra y $113$ N en la Luna, pero su masa sigue siendo $70$ kg.

La **fuerza normal** $N$ es la que una superficie ejerce **perpendicular** a ella. Sobre un suelo horizontal, sin otras fuerzas verticales, $N = mg$, pero **no siempre**:

**Ejemplo (ascensor).** Una persona de $70$ kg ($g = 10$) en un ascensor que sube con $a = 1{,}5$ m/s$^2$: $N - mg = ma$, luego
$N = m(g + a) = 70\cdot 11{,}5 = 805$ N: **se siente más pesada**. Si baja con $a = 2$: $N = 70\cdot 8 = 560$ N, más ligera. En caída libre
$N = 0$: **ingravidez** aparente (los astronautas en órbita están en caída libre, no «sin gravedad»).

## 3. El método del diagrama de cuerpo libre

1. **Elige el cuerpo** y aíslalo.
2. Dibuja **solo las fuerzas que actúan sobre él** (peso, normal, tensión, rozamiento, fuerzas aplicadas), no las que él ejerce sobre otros.
3. Elige **ejes**: uno en la dirección del movimiento (en un plano inclinado, a lo largo del plano).
4. **Descompón** las fuerzas en componentes y aplica $\sum F = m a$ en cada eje.
5. Resuelve y **comprueba** (signo, unidades, límites razonables).

**Plano inclinado sin rozamiento.** Un bloque en un plano de ángulo $\theta$: el peso $mg$ se descompone en $mg\sin\theta$ (a lo largo, hacia abajo) y $mg\cos\theta$
(perpendicular, compensada por $N$). Entonces $a = g\sin\theta$. La masa **no** aparece. Para $\theta = 90^\circ$ da $g$ (caída libre) y para $0^\circ$, $0$.

### Rozamiento

Entre superficies en contacto aparece una fuerza **paralela** a ellas que se opone al deslizamiento. El modelo empírico de Amontons-Coulomb:

- **Estático** (sin deslizar): $f_s \le \mu_s N$ (se ajusta hasta ese máximo).
- **Cinético** (deslizando): $f_k = \mu_k N$, con $\mu_k$ algo menor que $\mu_s$ y **independiente del área de contacto** y de la velocidad (en primera aproximación).

**Plano inclinado con rozamiento:** $a = g(\sin\theta - \mu\cos\theta)$. El bloque empieza a deslizar cuando $\tan\theta > \mu_s$: así se mide $\mu_s$ inclinando
el plano hasta que se mueve. Con $\mu = 0{,}5$ ese **ángulo crítico** es $\arctan 0{,}5 \approx 26{,}6^\circ$. Con $\mu = 0{,}3$ y $30^\circ$: $a = 10(0{,}5 - 0{,}3\cdot 0{,}866) \approx 2{,}4$ m/s$^2$.

**Frenada de un coche.** Si la única fuerza horizontal es el rozamiento máximo, $a = \mu g$ y la distancia de frenado es $\dfrac{v^2}{2\mu g}$: la que vimos en
cinemática, ahora con la causa. Con hielo ($\mu \approx 0{,}1$) es **seis veces** mayor que con asfalto seco ($\mu \approx 0{,}6$–$0{,}8$). El **ABS** evita que la rueda se bloquee,
porque el rozamiento estático (máximo mayor) frena más que el cinético.

### Tensión y poleas: la máquina de Atwood

Dos masas $m_1 < m_2$ cuelgan de una cuerda ligera sobre una polea sin rozamiento. La cuerda ejerce la misma tensión $T$ en ambas. Para $m_2$ (baja): $m_2 g - T = m_2 a$;
para $m_1$ (sube): $T - m_1 g = m_1 a$. Sumando, $(m_2 - m_1)g = (m_1 + m_2)\,a$:

$$
a = \frac{(m_2 - m_1)\,g}{m_1 + m_2}, \qquad T = \frac{2\,m_1 m_2\,g}{m_1 + m_2} .
$$

Comprobación en un caso límite: si $m_1 = m_2$, $a = 0$ y $T = mg$. $\checkmark$

### Muelles: ley de Hooke

Un muelle ejerce una fuerza **proporcional a su deformación** $x$ y opuesta a ella: $F = -k x$, con $k$ (N/m) la **constante del muelle** (válida mientras no se deforme
de forma permanente). Un cuerpo de masa $m$ colgado de un muelle oscila con periodo $T = 2\pi\sqrt{m/k}$ (se justifica con el cálculo, en otro nodo).

## 4. Trabajo y energía

El **trabajo** de una fuerza constante $F$ sobre un desplazamiento $d$ es

$$
W = F\,d\cos\theta ,
$$

con $\theta$ el ángulo entre la fuerza y el desplazamiento. Se mide en **julios** ($1\ \text{J} = 1\ \text{N}\cdot\text{m}$). Si $\theta = 90^\circ$ (como la fuerza normal o la
tensión de un péndulo), el trabajo es **cero**. Llevar una mochila horizontalmente a velocidad constante no realiza trabajo (físico) sobre ella.

**Energía cinética:** $E_c = \tfrac12 m v^2$.

**Teorema trabajo-energía.** El trabajo **neto** sobre un cuerpo es igual a la variación de su energía cinética: $W_{\text{neto}} = \Delta E_c$.
*Demostración (aceleración constante).* De $v^2 = v_0^2 + 2a\Delta x$, multiplicando por $\tfrac{m}{2}$:
$\tfrac12 m v^2 - \tfrac12 m v_0^2 = m a\,\Delta x = F\,\Delta x$. $\blacksquare$

**Energía potencial:** gravitatoria cerca de la Tierra, $E_p = m g h$ (respecto a un nivel de referencia); elástica de un muelle, $E_p = \tfrac12 k x^2$.

### Conservación de la energía

Si solo actúan fuerzas **conservativas** (peso, muelle), la **energía mecánica** $E_c + E_p$ se conserva. **Ejemplo:** un objeto que cae desde una altura $h$ sin rozamiento:
$mgh = \tfrac12 mv^2$, luego $v = \sqrt{2gh}$, **sin necesidad de tiempo ni de la masa**. Con rozamiento, parte de la energía mecánica se transforma en **calor**; la energía
**total** se conserva siempre, pero la mecánica no. **Ejemplo:** una montaña rusa que parte de $40$ m de altura llega abajo con $\sqrt{2\cdot 9{,}81\cdot 40} \approx 28$ m/s ($100$ km/h) si no hubiera rozamiento.

**Cuándo usar fuerzas y cuándo energía.** Si te piden aceleraciones o tensiones, fuerzas. Si te piden velocidades finales a partir de alturas o deformaciones, energía, que evita
integrar un movimiento complicado.

### Potencia y rendimiento

La **potencia** es el trabajo por unidad de tiempo: $P = \dfrac{W}{t} = F\,v$ (para fuerza paralela a la velocidad). Se mide en **vatios** ($1\ \text{W} = 1\ \text{J/s}$; $1$ CV $\approx 735$ W).
**Ejemplo:** subir a velocidad constante una carga de $500$ kg a $12$ m en $30$ s requiere (con $g = 10$) $P = \frac{500\cdot 10\cdot 12}{30} = 2000$ W de potencia **útil**; si el motor tiene un
**rendimiento** $\eta = 0{,}8$ consume $\frac{2000}{0{,}8} = 2500$ W. La energía eléctrica se factura en **kWh**: $1\ \text{kWh} = 3{,}6\cdot 10^6$ J.

## 5. Cantidad de movimiento y choques

La **cantidad de movimiento** (o momento lineal) es $\vec p = m\vec v$. La segunda ley se escribe también $\vec F = \dfrac{\Delta \vec p}{\Delta t}$: el **impulso**
$\vec F\,\Delta t$ es el cambio de $\vec p$. Por eso un airbag **alarga** el tiempo de frenado: el mismo $\Delta p$ con mayor $\Delta t$ implica menor fuerza.

**Conservación.** Si sobre un sistema **no actúan fuerzas externas**, su $\vec p$ total se conserva (consecuencia de la tercera ley: las fuerzas internas son iguales y opuestas, y su suma es cero).

**Choque perfectamente inelástico** (se quedan unidos): $m_1 v_1 + m_2 v_2 = (m_1 + m_2)\,v'$. **Ejemplo:** una vagoneta de $2000$ kg a $6$ m/s choca con otra de $1000$ kg parada y quedan
acopladas: $v' = \frac{2000\cdot 6}{3000} = 4$ m/s. Energía antes: $\tfrac12\cdot 2000\cdot 36 = 36\,000$ J; después: $\tfrac12\cdot 3000\cdot 16 = 24\,000$ J. Se **pierden $12\,000$ J** (en deformación y calor):
**la cantidad de movimiento se conserva siempre en un choque; la energía cinética, solo en los elásticos.**

## 6. Gravitación universal

Newton propuso que la fuerza que mantiene la Luna en su órbita es **la misma** que hace caer una manzana. Dos masas $m_1$ y $m_2$ a distancia $r$ (entre centros) se atraen con

$$
F = G\,\frac{m_1 m_2}{r^2}, \qquad G \approx 6{,}674\cdot 10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2 .
$$

En la superficie de un planeta de masa $M$ y radio $R$, $m g = G\frac{M m}{R^2}$, luego $g = \dfrac{GM}{R^2}$: para la Tierra, con $GM = 3{,}986\cdot 10^{14}$ m$^3$/s$^2$ y
$R = 6371$ km, $g \approx 9{,}82$ m/s$^2$. A una distancia $r$ del centro, $g(r) = g_0\,\frac{R^2}{r^2}$: **a una altura igual al radio** ($r = 2R$) **vale la cuarta parte**.

**Órbita circular.** La gravedad actúa de fuerza centrípeta: $\frac{m v^2}{r} = \frac{GMm}{r^2}$, luego

$$
v = \sqrt{\frac{GM}{r}}, \qquad T = 2\pi\sqrt{\frac{r^3}{GM}} .
$$

La segunda es la **tercera ley de Kepler** ($T^2 \propto r^3$). **Ejemplo (Estación Espacial):** a $400$ km de altura, $r = 6771$ km: $v \approx 7673$ m/s ($\approx 27\,600$ km/h) y
$T \approx 92{,}4$ min, es decir, unas $15{,}6$ vueltas al día. **Satélite geoestacionario:** el que tarda lo que la Tierra en girar ($86\,164$ s) tiene $r \approx 42\,164$ km, es decir, a
$\approx 35\,800$ km de altura, y parece quieto en el cielo.

**Velocidad de escape.** Para alejarse sin volver, la energía total debe ser $\ge 0$: $\tfrac12 m v^2 - \frac{GMm}{R} = 0$, luego $v_{\text{esc}} = \sqrt{\frac{2GM}{R}} = \sqrt{2}\,v_{\text{orb}}$.
Para la Tierra, $\approx 11{,}2$ km/s. (La energía potencial gravitatoria $-\frac{GMm}{r}$ generaliza $mgh$ para alturas grandes.)

## 7. Errores típicos

- «**Una fuerza mantiene el movimiento**»: falso; sin fuerza neta, la velocidad se mantiene.
- Creer que acción y reacción se cancelan: actúan sobre **cuerpos distintos**.
- Confundir **masa** (kg) con **peso** (N).
- Dibujar en el diagrama fuerzas que **el cuerpo ejerce** sobre otros, o la fuerza «de movimiento».
- Suponer $N = mg$ siempre (no en ascensores, planos inclinados o con fuerzas verticales extra).
- Olvidar el **signo** de la aceleración o usar $g$ con el signo equivocado.
- Aplicar la conservación de la energía mecánica con rozamiento sin contar el calor.
- Mezclar unidades (km/h con m/s).

## Repaso: lo que debe quedarte dentro de un mes

1. $\sum \vec F = m\vec a$; sin fuerza neta, velocidad constante; acción y reacción en cuerpos distintos.
2. Método: diagrama de cuerpo libre, ejes, $\sum F = ma$ en cada eje.
3. $W = Fd\cos\theta$; $E_c = \tfrac12 mv^2$; $W_{\text{neto}} = \Delta E_c$; $E_p = mgh$; conservación sin rozamiento.
4. Cantidad de movimiento $p = mv$ se conserva en todo choque; la energía cinética solo en los elásticos.
5. $F = G\frac{m_1m_2}{r^2}$; órbita circular $v = \sqrt{GM/r}$; escape $\sqrt{2GM/R}$.

## Siguiente

El nodo `fis-ondas-calor-carga` extiende la física a ondas, calor y carga eléctrica, y `fis-mecanica-newtoniana` retoma todo esto con el cálculo.
