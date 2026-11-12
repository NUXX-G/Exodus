---
id: fis-medida-movimiento
title: "Medida y movimiento: unidades, error y cinemática"
area: fisica
trunk_level: 5
prerequisites: [mat-algebra-basica, mat-funciones-basicas]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I. Addison-Wesley, 1963 (edición en línea: feynmanlectures.caltech.edu)."
  - "Taylor, J. R. An Introduction to Error Analysis: The Study of Uncertainties in Physical Measurements, 2ª ed. University Science Books, 1997."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019 (bipm.org/measurement-units)."
  - "Unión Astronómica Internacional. Resolución B2 de 2012: redefinición de la unidad astronómica (149 597 870 700 m exactos)."
hints:
  - "Concepto: en todo problema de movimiento, define un sistema de referencia con sentido positivo, anota los datos con sus unidades en el SI y escribe qué magnitud te piden. Elige la ecuación que contiene lo que sabes y lo que buscas, y comprueba que las unidades del resultado son las esperadas. En el tiro parabólico, trata los dos ejes por separado: el horizontal sin aceleración y el vertical con la gravedad."
  - "Herramienta: conversiones con factores de conversión encadenados (km/h a m/s: multiplicar por 1000 y dividir por 3600); comprueba cada resultado con una simulación numérica sencilla en Python (un bucle con paso de tiempo pequeño que actualice posición y velocidad) y compáralo con la fórmula."
  - "Documentación oficial: bipm.org/measurement-units (definición de las unidades del SI y valores exactos de constantes); Halliday-Resnick-Walker, capítulos de medida, movimiento en línea recta y en dos y tres dimensiones; Feynman, vol. I, capítulos sobre el movimiento."
exercises:
  - id: kmh-a-ms
    tier: 1
    prompt: |
      Expresa $72$ km/h en m/s. Respuesta: un número.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: densidad-unidades
    tier: 1
    prompt: |
      Una sustancia tiene una densidad de $5$ g/cm$^3$. Exprésala en kg/m$^3$. Respuesta: un número.
    answers: ["sha256:0f8eb4b72b6e0c9e88b388eb967b49e067ef1004bf07bffc22c3acb13b43580a"]
  - id: aceleracion-media
    tier: 1
    prompt: |
      Un coche pasa de $0$ a $27$ m/s en $9$ s con aceleración constante. ¿Cuál es su aceleración, en m/s$^2$? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: persecucion
    tier: 2
    prompt: |
      Un coche A sale a las $8{:}00$ a $60$ km/h por una carretera recta. Una hora después sale un coche B por el mismo camino y en el mismo sentido, a
      $90$ km/h. ¿A qué hora alcanza B a A? Respuesta en formato «H:MM» (por ejemplo «9:30»).
    answers: ["sha256:17ea4724806c9a840104754d08730e3edd9fcd70f0f625fc6bc894f5ed433a42"]
  - id: distancia-de-frenada
    tier: 2
    prompt: |
      Un coche circula a $25$ m/s y frena con aceleración constante de $-5$ m/s$^2$. ¿Qué distancia recorre hasta detenerse, en metros?
      Respuesta: un número.
    answers: ["sha256:bff1c57ce1058197ad064590893a945a6729b9a15769d826f422128eabb6438d"]
  - id: caida-libre
    tier: 2
    prompt: |
      Se suelta un objeto desde $80$ m de altura. Desprecia el rozamiento y usa $g = 10$ m/s$^2$. ¿Con qué velocidad llega al suelo, en m/s?
      Respuesta: un número.
    answers: ["sha256:d59eced1ded07f84c145592f65bdf854358e009c5cd705f5215bf18697fed103"]
  - id: lanzamiento-vertical
    tier: 2
    prompt: |
      Se lanza una piedra hacia arriba a $30$ m/s. Con $g = 10$ m/s$^2$ y sin rozamiento, ¿qué altura máxima alcanza, en metros? Respuesta: un número.
    answers: ["sha256:811786ad1ae74adfdd20dd0372abaaebc6246e343aebd01da0bfc4c02bf0106c"]
  - id: area-grafica-vt
    tier: 2
    prompt: |
      Un tren acelera uniformemente de $0$ a $20$ m/s en $10$ s, mantiene $20$ m/s durante $15$ s y frena uniformemente hasta detenerse en $5$ s.
      ¿Qué distancia recorre en total, en metros? (Pista: el desplazamiento es el **área** bajo la gráfica $v$-$t$.) Respuesta: un número.
    answers: ["sha256:83151157c10d85af7c84657c71c3e3603d955160f0526fce672481da83a2e090"]
  - id: tiro-horizontal
    tier: 2
    prompt: |
      Una pelota sale horizontalmente a $12$ m/s desde el borde de una azotea de $20$ m de altura. Con $g = 10$ m/s$^2$, ¿a qué distancia horizontal
      del edificio toca el suelo, en metros? Respuesta: un número.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: aceleracion-centripeta
    tier: 2
    prompt: |
      Una rueda de $0{,}3$ m de radio gira a $600$ revoluciones por minuto. ¿Cuál es la aceleración centrípeta de un punto de su borde, en m/s$^2$?
      Respuesta: el **entero más próximo**.
    answers: ["sha256:d40535ac09aac0ef32f8a23b8bb8e04bc2e8f9d6b0981fa98a16d0382f558d83"]
  - id: alcance-proyectil
    tier: 3
    prompt: |
      Un proyectil sale del suelo a $40$ m/s con un ángulo de $30^\circ$ sobre la horizontal. Sin rozamiento y con $g = 10$ m/s$^2$, ¿cuál es su alcance
      horizontal en metros? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:d6a4031733610bb080d0bfa794fcc9dbdcff74834aeaab7c6b927e21e9754037"]
  - id: dos-pelotas
    tier: 3
    prompt: |
      Desde una altura de $45$ m se suelta una pelota (sin velocidad inicial) y, **en el mismo instante**, se lanza otra hacia abajo con velocidad inicial $v_0$.
      La segunda llega al suelo $1$ s antes que la primera. Con $g = 10$ m/s$^2$, ¿cuánto vale $v_0$, en m/s? Respuesta: un número.
    answers: ["sha256:b902cc4550838229a710bfec4c38cbc7eb11082367a409df9135e7f007a96bda"]
  - id: distancia-seguridad
    tier: 3
    prompt: |
      Un conductor que va a $108$ km/h tarda $0{,}75$ s en reaccionar (durante ese tiempo no frena) y después frena con una aceleración constante de
      $-6$ m/s$^2$ hasta detenerse. ¿Cuál es la distancia total recorrida desde que ve el obstáculo, en metros? Respuesta: un número.
    answers: ["sha256:74fd4905d88b958e628bd91f9ec27a773b9b25b870b031232de24a5cb2c504ad"]
  - id: barco-y-corriente
    tier: 3
    prompt: |
      Un barco apunta perpendicularmente a la orilla de un río y avanza a $5$ m/s respecto al agua; la corriente arrastra a $3$ m/s. El **cuadrado** de
      su rapidez respecto a tierra, en (m/s)$^2$, es: respuesta, un número.
    answers: ["sha256:86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef"]
  - id: luz-del-sol
    tier: 3
    prompt: |
      Una unidad astronómica (distancia media Tierra-Sol) vale **exactamente** $149\,597\,870\,700$ m y la velocidad de la luz **exactamente**
      $299\,792\,458$ m/s. ¿Cuántos segundos tarda la luz del Sol en llegar a la Tierra? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:db3defda18fafc0c197740438051c690d98b551a7e449d66390d38fa2db09b77"]
  - id: distancia-con-aceleracion
    tier: 3
    prompt: |
      Un coche pasa de $36$ km/h a $108$ km/h en $8$ s con aceleración constante. ¿Qué distancia recorre en esos $8$ s, en metros? Respuesta: un número.
    answers: ["sha256:a512db2741cd20693e4b16f19891e72b9ff12cead72761fc5e92d2aaf34740c1"]
---

# Medida y movimiento: unidades, error y cinemática

La física empieza con dos preguntas: **¿cómo se mide?** y **¿cómo se mueve?** Una buena parte de la ciencia y la ingeniería consiste en
medir bien, con las unidades correctas y sabiendo cuánto fiarse del número, y en describir con precisión cómo cambian las cosas en el
tiempo. Este nodo lo hace desde cero y deja listas las herramientas para las fuerzas y la energía.

## Objetivos

Al terminar sabrás:

1. Usar el Sistema Internacional de unidades, hacer conversiones y comprobar fórmulas con el análisis dimensional.
2. Expresar una medida con su **incertidumbre** y las cifras significativas correctas, y estimar órdenes de magnitud.
3. Distinguir escalares y vectores, y sumar vectores.
4. Describir y resolver movimientos rectilíneos (uniforme y uniformemente acelerado) y la caída libre.
5. Resolver el tiro parabólico y el movimiento circular uniforme.
6. Pasar de un sistema de referencia a otro (movimiento relativo).

> [!question] Test de entrada
> 1. ¿Cuántos metros son $5$ km? 2. Un coche va a $60$ km/h durante $2$ h: ¿qué distancia recorre? 3. Si dos magnitudes son
> directamente proporcionales y una se duplica, ¿qué pasa con la otra?
>
> Respuestas: $5000$ m; $120$ km; se duplica.

## 1. Para qué sirve

- **Seguridad vial**: la distancia de frenado crece con el **cuadrado** de la velocidad; por eso a $120$ km/h no se frena «un poco más» que a $60$.
- **Deporte y videojuegos**: trayectorias de balones, saltos, proyectiles.
- **Ingeniería**: dimensionar un freno, el recorrido de una cinta, el tiempo de reacción de un sistema.
- **Ciencia**: toda teoría se contrasta con medidas; sin entender el error no se sabe si una teoría falla o si se midió mal.

## 2. La física y el método científico

La física construye **modelos** (descripciones simplificadas) y los contrasta con **experimentos**. Un buen modelo hace **predicciones
cuantitativas** que pueden resultar falsas; si no puede equivocarse, no es ciencia. Todo modelo tiene un **rango de validez**: despreciar el
rozamiento del aire funciona para una piedra y falla para una pluma. Saber **cuándo** un modelo es aceptable es parte de saber física.

## 3. Magnitudes, unidades y el Sistema Internacional

Una **magnitud** es algo que se puede medir (longitud, tiempo, masa); una **unidad** es el patrón con que se compara. Una medida es
siempre un **número y una unidad**: «$3$» no es una distancia; «$3$ m» sí.

El **Sistema Internacional (SI)** tiene siete **unidades básicas**:

| Magnitud | Unidad | Símbolo |
|---|---|:---:|
| longitud | metro | m |
| masa | kilogramo | kg |
| tiempo | segundo | s |
| corriente eléctrica | amperio | A |
| temperatura | kelvin | K |
| cantidad de sustancia | mol | mol |
| intensidad luminosa | candela | cd |

Desde 2019 las siete se definen fijando el valor **exacto** de constantes de la naturaleza (BIPM): la velocidad de la luz es
exactamente $299\,792\,458$ m/s y de ahí sale la definición del metro. Las demás unidades son **derivadas**: m/s (velocidad), m/s$^2$
(aceleración), newton ($\text{N} = \text{kg}\cdot\text{m/s}^2$), julio ($\text{J} = \text{N}\cdot\text{m}$), vatio ($\text{W} = \text{J/s}$).

**Prefijos** (múltiplos de $10$): kilo $10^3$, mega $10^6$, giga $10^9$, tera $10^{12}$; mili $10^{-3}$, micro $10^{-6}$, nano $10^{-9}$.
**Notación científica**: $a\cdot 10^n$ con $1 \le a < 10$; por ejemplo, $0{,}000\,45 = 4{,}5\cdot 10^{-4}$.

### Conversión de unidades

Se multiplica por **factores de conversión**, fracciones que valen $1$, de modo que las unidades no deseadas se cancelen.
**Ejemplo resuelto:** $90$ km/h a m/s:

$$
90\,\frac{\text{km}}{\text{h}}\cdot\frac{1000\ \text{m}}{1\ \text{km}}\cdot\frac{1\ \text{h}}{3600\ \text{s}} = 25\,\frac{\text{m}}{\text{s}} .
$$

Regla práctica: **para pasar de km/h a m/s se divide entre $3{,}6$**. Con áreas y volúmenes los factores también se elevan:
$1\ \text{m}^2 = (100\ \text{cm})^2 = 10^4\ \text{cm}^2$; $1\ \text{g/cm}^3 = 1000\ \text{kg/m}^3$.

### Análisis dimensional

Las dos partes de una igualdad deben tener las **mismas dimensiones**. Sirve para **detectar errores**. Si alguien propone
$d = \tfrac{1}{2} a t$ para la distancia, las dimensiones de $a t$ son $\text{m/s}^2\cdot\text{s} = \text{m/s}$ (una velocidad, no una longitud):
la fórmula es falsa. La correcta, $d = \tfrac{1}{2} a t^2$, da $\text{m/s}^2\cdot\text{s}^2 = \text{m}$. $\checkmark$ El análisis dimensional no prueba que
una fórmula sea cierta, pero descarta muchas falsas en segundos.

## 4. Medida, error y cifras significativas

**Toda medida tiene incertidumbre.** Se escribe $x = (x_0 \pm \Delta x)$ unidad, donde $\Delta x$ es la **incertidumbre absoluta**; el cociente
$\Delta x / x_0$ es la **relativa** (suele darse en %). Una regla de $1$ mm de apreciación da, al medir una barra, algo como
$12{,}3 \pm 0{,}1$ cm.

**Exactitud y precisión no son lo mismo.** Una medida es **precisa** si repetirla da valores muy próximos; es **exacta** si está cerca
del valor verdadero. Una balanza mal tarada da medidas muy precisas pero inexactas (error sistemático).

**Repetir mejora.** Si se mide varias veces, la mejor estimación es la **media** y su dispersión se resume con la desviación típica (ver el
nodo de funciones y estadística). Con $N$ medidas, la incertidumbre de la **media** baja como $1/\sqrt{N}$ (Taylor, 1997).

**Propagación (reglas básicas).**

- **Suma o resta**: se suman las incertidumbres **absolutas**.
- **Producto o cociente**: se suman las incertidumbres **relativas**.

**Ejemplo resuelto:** un rectángulo mide $12{,}3 \pm 0{,}1$ cm por $4{,}5 \pm 0{,}1$ cm. Área central: $12{,}3\cdot 4{,}5 = 55{,}35$ cm$^2$. Errores
relativos: $\frac{0{,}1}{12{,}3} \approx 0{,}8\,\%$ y $\frac{0{,}1}{4{,}5} \approx 2{,}2\,\%$; suman $3{,}0\,\%$ y $3{,}0\,\%$ de $55{,}35$ son $1{,}7$. Resultado:
$(55 \pm 2)$ cm$^2$. **No tiene sentido dar $55{,}35$** si el error ya afecta a las unidades.

**Cifras significativas.** Son las que aportan información. Reglas: los ceros a la izquierda **no** cuentan ($0{,}00230$ tiene $3$:
$2, 3, 0$); los ceros finales tras la coma **sí**. En un **producto** el resultado tiene tantas cifras como el dato con menos; en una **suma**,
tantos decimales como el que menos tenga. Para una medida con incertidumbre, **la última cifra escrita es la dudosa**.

## 5. Orden de magnitud y estimación

Un **orden de magnitud** es la potencia de $10$ más próxima a un valor. Estimar con órdenes de magnitud (**problemas de Fermi**) permite
comprobar si un resultado es razonable y razonar sobre cosas que no se pueden medir directamente.

**Ejemplo (Fermi):** ¿cuántas veces respira una persona al año? Unas $15$ respiraciones por minuto: $15\cdot 60\cdot 24\cdot 365 \approx 7{,}9\cdot 10^6$,
es decir, **del orden de $10^7$**. Un resultado de $10^3$ o de $10^{10}$ delataría un error. Estima siempre **antes** de calcular.

## 6. Escalares y vectores

Una magnitud **escalar** queda definida por un número y una unidad (masa, tiempo, temperatura, rapidez). Una **vectorial** necesita
además **dirección y sentido** (desplazamiento, velocidad, aceleración, fuerza). Se representa con una flecha, y se descompone en **componentes**:
un vector de módulo $v$ y ángulo $\theta$ sobre el eje $x$ tiene $v_x = v\cos\theta$ y $v_y = v\sin\theta$. Recíprocamente, $v = \sqrt{v_x^2 + v_y^2}$.

**Suma de vectores**: se suman **componente a componente**. **Ejemplo:** $3$ N hacia el este más $4$ N hacia el norte dan una fuerza de módulo
$\sqrt{3^2 + 4^2} = 5$ N, con ángulo $\arctan\frac{4}{3} \approx 53{,}1^\circ$ al norte del este.

**Distancia no es desplazamiento.** La distancia recorrida es un escalar (lo que marca el cuentakilómetros); el **desplazamiento** es el vector
que une el punto inicial con el final. Si das una vuelta completa a una pista, la distancia es $400$ m y el desplazamiento es **cero**. Análogamente,
**rapidez** (escalar) frente a **velocidad** (vector).

## 7. Cinemática en una dimensión

La **cinemática** describe el movimiento **sin** preguntarse por su causa. Se elige un eje con un sentido positivo y un origen. La **posición** $x(t)$ es
una función del tiempo (ver [[mat-funciones-basicas]]).

- **Velocidad media**: $\bar v = \dfrac{\Delta x}{\Delta t}$.
- **Velocidad instantánea**: la media sobre un intervalo que se hace tan pequeño como se quiera; es la **pendiente** de la gráfica $x$-$t$ en
  ese instante (el cálculo diferencial formaliza esta idea).
- **Aceleración media**: $\bar a = \dfrac{\Delta v}{\Delta t}$, la pendiente de la gráfica $v$-$t$.

### Movimiento rectilíneo uniforme (MRU)

Velocidad constante: $x(t) = x_0 + v\,t$. La gráfica $x$-$t$ es una recta. **Ejemplo:** un coche A va a $100$ km/h y otro B, $5$ km por detrás, va a
$120$ km/h. La velocidad **relativa** de acercamiento es $20$ km/h, así que lo alcanza en $\frac{5}{20} = 0{,}25$ h $= 15$ min.

### Movimiento rectilíneo uniformemente acelerado (MRUA)

Aceleración constante $a$. De la definición, $a = \frac{v - v_0}{t}$, se obtiene

$$
v = v_0 + a\,t .
$$

El **desplazamiento** es el **área bajo la gráfica $v$-$t$**. Con la velocidad variando linealmente, esa área es un trapecio:
$\Delta x = \frac{v_0 + v}{2}\,t$. Sustituyendo $v$:

$$
x = x_0 + v_0\,t + \tfrac{1}{2}\,a\,t^2 .
$$

Eliminando el tiempo entre las dos primeras relaciones (despejar $t = \frac{v - v_0}{a}$ y sustituir) se obtiene la tercera ecuación, muy útil
cuando no interesa el tiempo:

$$
v^2 = v_0^2 + 2\,a\,\Delta x .
$$

**Ejemplo resuelto (frenada).** Un coche va a $20$ m/s y frena con $a = -4$ m/s$^2$. Se detiene cuando $v = 0$: $t = \frac{0 - 20}{-4} = 5$ s, y la
distancia es $\Delta x = \frac{0 - 20^2}{2\cdot(-4)} = 50$ m. **Observa**: la distancia de frenado es $\Delta x = \frac{v_0^2}{2|a|}$, **proporcional al
cuadrado de la velocidad**: al doblar $v_0$, se **cuadruplica**.

**Tiempo de reacción.** Antes de frenar, el conductor recorre $v_0\,t_r$ (con $t_r \approx 0{,}7$–$1$ s). A $30$ m/s, con $t_r = 1$ s, son $30$ m
antes de pisar el freno. La distancia de seguridad es **reacción más frenado**.

### Caída libre

Despreciando el aire, todos los cuerpos caen con la **misma** aceleración, $g \approx 9{,}81$ m/s$^2$ (valor normal convencional: $9{,}80665$; varía algo con la
latitud y la altitud) dirigida hacia el suelo. Es un MRUA con $a = g$. En los ejemplos y ejercicios se indica el valor de $g$ que se debe usar
($10$ m/s$^2$ si se quiere un cálculo limpio).

**Ejemplo resuelto:** se suelta una piedra desde $20$ m ($g = 10$): $20 = \tfrac12\cdot 10\cdot t^2$, $t = 2$ s; velocidad al llegar: $v = g t = 20$ m/s.
**Lanzamiento vertical:** subiendo con $v_0$, la velocidad se anula en $t = v_0/g$ y la altura máxima es $\frac{v_0^2}{2g}$; el tiempo total de vuelo
hasta volver al punto de partida es $\frac{2v_0}{g}$ (simétrico).

## 8. Movimiento en dos dimensiones: el tiro parabólico

Un proyectil lanzado con velocidad $v_0$ y ángulo $\theta$ se mueve a la vez horizontal y verticalmente, y **los dos movimientos son
independientes** (Galileo): horizontalmente, sin aceleración (MRU); verticalmente, con $g$ (MRUA).

$$
x(t) = v_0\cos\theta\,t, \qquad y(t) = v_0\sin\theta\,t - \tfrac12 g t^2 .
$$

*Alcance.* El proyectil vuelve al suelo cuando $y = 0$, es decir en $t = \dfrac{2v_0\sin\theta}{g}$. Entonces

$$
R = v_0\cos\theta\cdot\frac{2v_0\sin\theta}{g} = \frac{v_0^2\sin 2\theta}{g}
$$

(usando $2\sin\theta\cos\theta = \sin 2\theta$). $R$ es **máximo para $\theta = 45^\circ$** y, a igual velocidad, los ángulos $\theta$ y $90^\circ - \theta$
dan el mismo alcance. La **altura máxima** es $H = \dfrac{(v_0\sin\theta)^2}{2g}$.

**Ejemplo resuelto:** $v_0 = 20$ m/s a $45^\circ$, $g = 10$: $R = \frac{400\cdot 1}{10} = 40$ m; $v_0\sin\theta \approx 14{,}14$ m/s,
$H = \frac{14{,}14^2}{20} = 10$ m; tiempo de vuelo $\frac{2\cdot 14{,}14}{10} \approx 2{,}83$ s.

**Límite del modelo:** con aire, el alcance es menor y la trayectoria deja de ser una parábola exacta; el rozamiento importa para pelotas rápidas o
proyectiles reales.

**Tiro horizontal.** Si se lanza horizontalmente desde una altura $h$, el tiempo de caída es $t = \sqrt{2h/g}$ (**no depende de la velocidad horizontal**) y el alcance
es $v_0\,t$.

## 9. Movimiento circular uniforme

Un objeto recorre una circunferencia de radio $r$ con **rapidez constante**. Se definen:

- **Periodo** $T$: tiempo de una vuelta. **Frecuencia** $f = \frac{1}{T}$ (en hercios, Hz).
- **Velocidad angular** $\omega = \dfrac{2\pi}{T} = 2\pi f$ (rad/s). $1$ revolución $= 2\pi$ rad; $\text{rpm} \times \frac{2\pi}{60} = $ rad/s.
- **Rapidez** $v = \omega r$.

Aunque la rapidez es constante, la **velocidad** (vector) cambia de dirección: hay **aceleración**, dirigida **hacia el centro**:

$$
a_c = \frac{v^2}{r} = \omega^2 r .
$$

*Justificación.* En un pequeño intervalo $\Delta t$ la velocidad gira un ángulo $\Delta\theta = \omega\Delta t$ sin cambiar de módulo, así que
$|\Delta\vec v| \approx v\,\Delta\theta$ y $a = \frac{|\Delta\vec v|}{\Delta t} = v\,\omega = \frac{v^2}{r}$. $\blacksquare$

**Ejemplo resuelto (la Luna).** La Luna da una vuelta en $T = 27{,}3$ días $= 2{,}36\cdot 10^6$ s a un radio de $3{,}84\cdot 10^8$ m. Su rapidez es
$v = \frac{2\pi r}{T} \approx 1023$ m/s y su aceleración hacia la Tierra, $a_c = \frac{v^2}{r} \approx 2{,}7\cdot 10^{-3}$ m/s$^2$. Comparada con $g = 9{,}81$:
$\frac{9{,}81}{2{,}73\cdot 10^{-3}} \approx 3600 = 60^2$, y la Luna está a unos $60$ radios terrestres: es la prueba que usó Newton para
sostener que la gravedad **disminuye con el cuadrado de la distancia**.

## 10. Movimiento relativo

La velocidad depende del **sistema de referencia**. En la física de Galileo (velocidades mucho menores que la de la luz), las velocidades se suman como
vectores: $\vec v_{A/C} = \vec v_{A/B} + \vec v_{B/C}$.

**Ejemplo (río).** Un barco avanza a $4$ m/s respecto al agua, perpendicular a la orilla, y el agua se mueve a $3$ m/s respecto a tierra. Respecto a tierra,
su velocidad tiene componentes $(3, 4)$ y módulo $\sqrt{9 + 16} = 5$ m/s, con una trayectoria inclinada: la corriente lo arrastra **río abajo** mientras cruza.

A velocidades cercanas a la de la luz esta suma falla, y hace falta la relatividad (otro nodo posterior).

## 11. Errores típicos

- Escribir una medida sin **unidad**, o mezclar unidades (km con m, h con s) en una fórmula.
- Usar las fórmulas de MRUA cuando la aceleración **no** es constante.
- Olvidar el **signo**: una aceleración que frena es negativa respecto al sentido de avance.
- Confundir distancia con desplazamiento, o rapidez con velocidad.
- Creer que un cuerpo más pesado cae más rápido (en el vacío, no).
- En el tiro parabólico, mezclar las componentes: el tiempo de caída solo depende del movimiento vertical.
- Dar un resultado con más cifras significativas de las que justifican los datos.

## Repaso: lo que debe quedarte dentro de un mes

1. Unidades SI; convertir con factores; análisis dimensional para detectar errores.
2. Toda medida lleva incertidumbre; suma: errores absolutos; producto: relativos.
3. $v = v_0 + at$; $x = x_0 + v_0t + \tfrac12 at^2$; $v^2 = v_0^2 + 2a\Delta x$; la distancia de frenado crece con $v^2$.
4. Tiro parabólico: ejes independientes; $R = \frac{v_0^2\sin 2\theta}{g}$.
5. Circular uniforme: $a_c = \frac{v^2}{r} = \omega^2 r$ hacia el centro.

## Siguiente

Con el movimiento descrito, el nodo `fis-fuerzas-energia` pregunta **por qué** se mueven las cosas: las leyes de Newton, el trabajo y la energía.
