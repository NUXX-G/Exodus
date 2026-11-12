---
id: ing-electricidad-basica
title: "Electricidad básica: corriente, tensión, Ohm y circuitos sencillos"
area: ingenieria
trunk_level: 1
prerequisites: [fis-fuerzas-energia, mat-algebra-basica]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018."
  - "Horowitz, P.; Hill, W. The Art of Electronics, 3ª ed. Cambridge University Press, 2015."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. II. Addison-Wesley, 1964 (edición en línea: feynmanlectures.caltech.edu)."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019 (el amperio y la carga elemental)."
hints:
  - "Concepto: en un circuito, la corriente es la misma en todos los elementos conectados en serie y la tensión es la misma en todos los conectados en paralelo. Reduce la red por partes (series y paralelos) hasta una resistencia equivalente, calcula la corriente total con la ley de Ohm y vuelve hacia atrás repartiendo tensiones y corrientes."
  - "Herramienta: comprueba con la conservación de la energía: la potencia que entrega la fuente debe ser igual a la suma de las potencias disipadas. Para redes con varios nodos, escribe la ley de corrientes de Kirchhoff en cada nodo y resuelve el sistema (en Python, numpy.linalg.solve). Un simulador gratuito como ngspice, LTspice o Falstad sirve para contrastar."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de corriente y resistencia, y de circuitos; Horowitz y Hill, capítulo 1 (fundamentos) y los apéndices sobre código de colores de resistencias y series E; Feynman, vol. II, capítulos de electrostática y circuitos."
exercises:
  - id: ley-de-ohm
    tier: 1
    prompt: |
      Una resistencia de $48\ \Omega$ está conectada a una fuente de $12$ V. ¿Qué corriente circula, en amperios? Respuesta: un número.
    answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: potencia-i2r
    tier: 1
    prompt: |
      Por una resistencia de $10\ \Omega$ circula una corriente de $3$ A. ¿Qué potencia disipa, en vatios? Respuesta: un número.
    answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
  - id: factura-estufa
    tier: 1
    prompt: |
      Una estufa de $1{,}5$ kW funciona $4$ horas. Con la electricidad a $0{,}20$ euros por kWh, ¿cuánto cuesta, en euros? Respuesta: un número.
    answers: ["sha256:77ac319bfe1979e2d799d9e6987e65feb54f61511c03552ebae990826c208590"]
  - id: resistencias-serie
    tier: 2
    prompt: |
      Tres resistencias de $100\ \Omega$, $220\ \Omega$ y $330\ \Omega$ están en serie. ¿Cuál es la resistencia total, en ohmios? Respuesta: un número.
    answers: ["sha256:2099a9b5f777e242d1f9e19d27e232cc71e2fa7964fc988a319fce5671ca7f73"]
  - id: resistencias-paralelo
    tier: 2
    prompt: |
      Dos resistencias de $60\ \Omega$ y $30\ \Omega$ están en paralelo. ¿Cuál es la resistencia equivalente, en ohmios? Respuesta: un número.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: divisor-de-tension
    tier: 2
    prompt: |
      Se aplican $9$ V a dos resistencias en serie, de $2\ \text{k}\Omega$ y $1\ \text{k}\Omega$. ¿Qué tensión cae en la de $1\ \text{k}\Omega$, en voltios?
      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: resistencia-led
    tier: 2
    prompt: |
      Un LED necesita $10$ mA y tiene una caída de tensión de $2{,}0$ V. Se alimenta con $5$ V a través de una resistencia en serie. ¿Qué valor debe tener
      esa resistencia, en ohmios? Respuesta: un número.
    answers: ["sha256:983bd614bb5afece5ab3b6023f71147cd7b6bc2314f9d27af7422541c6558389"]
  - id: resistencia-del-cable
    tier: 2
    prompt: |
      Un cable de cobre ($\rho = 1{,}68\cdot 10^{-8}\ \Omega\cdot\text{m}$) mide $50$ m y tiene una sección de $2{,}5$ mm$^2$. ¿Cuál es su resistencia, en ohmios?
      Respuesta: un número.
    answers: ["sha256:8869e2d6f35d410fe590af7771b3aee12e10258177e4aabbc4c4be88a91e51c1"]
  - id: bateria-real
    tier: 2
    prompt: |
      Una batería de $12$ V con una resistencia interna de $0{,}5\ \Omega$ alimenta una carga de $5{,}5\ \Omega$. ¿Qué tensión hay en sus bornes, en voltios?
      Respuesta: un número.
    answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: valor-de-pico
    tier: 2
    prompt: |
      La red doméstica da $230$ V **eficaces** con onda senoidal. ¿Cuál es su tensión de **pico**, en voltios? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:9e11c362bc3d3572970b973d5cd86c073da358b6f9bceaa3be65d1a6487f8819"]
  - id: red-mixta
    tier: 3
    prompt: |
      Una fuente de $12$ V alimenta una resistencia de $4\ \Omega$ en serie con el conjunto formado por $6\ \Omega$ y $12\ \Omega$ en **paralelo**. ¿Qué corriente
      circula por la resistencia de $12\ \Omega$, en amperios? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: puente-wheatstone
    tier: 3
    prompt: |
      En un puente de Wheatstone, $R_1 = 100\ \Omega$ y $R_2 = 200\ \Omega$ forman una rama, y $R_3 = 150\ \Omega$ y $R_4$ la otra. El puente está **equilibrado**
      (la tensión entre los puntos medios es cero). ¿Cuánto vale $R_4$, en ohmios? Respuesta: un número.
    answers: ["sha256:983bd614bb5afece5ab3b6023f71147cd7b6bc2314f9d27af7422541c6558389"]
  - id: carga-rc
    tier: 3
    prompt: |
      Un condensador de $100\ \mu$F, descargado, se carga a través de una resistencia de $10\ \text{k}\Omega$ desde una fuente de $5$ V. ¿Qué tensión hay en el condensador
      al cabo de $2$ s? (Pista: $v_C = V(1 - e^{-t/RC})$.) Respuesta: voltios, **redondeado a dos decimales**.
    answers: ["sha256:5b3cd402d446621af0041c6b97738377713d6e89067047bacc6e02a8cb499f4a"]
  - id: energia-condensador
    tier: 3
    prompt: |
      ¿Cuánta energía almacena un condensador de $470\ \mu$F cargado a $16$ V, en milijulios? Respuesta: un número.
    answers: ["sha256:8659b593b1e0a4b53671faf8c327d97acbf83312fc7e6087e7043ec97c8b6823"]
  - id: potencia-en-divisor
    tier: 3
    prompt: |
      Se aplican $12$ V a dos resistencias en serie, de $1\ \text{k}\Omega$ y $2\ \text{k}\Omega$. ¿Qué potencia disipa la de $2\ \text{k}\Omega$, en milivatios?
      Respuesta: un número.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: carga-del-movil
    tier: 3
    prompt: |
      Un móvil tiene una batería de $4000$ mAh a $3{,}85$ V. Se carga con un cargador de $20$ W y un rendimiento global del $85\,\%$ (potencia entregada a la batería
      $= 0{,}85\cdot 20$ W). ¿Cuántos minutos se necesitan **como mínimo** para cargarla del todo desde $0$? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:2fca346db656187102ce806ac732e06a62df0dbb2829e511a770556d398e1a6e"]
---

# Electricidad básica: corriente, tensión, Ohm y circuitos sencillos

La electricidad mueve el mundo moderno: ilumina, calienta, comunica y computa. Entenderla bien, con las magnitudes, las leyes de Ohm y de Kirchhoff y
las reglas de seguridad, es imprescindible para quien quiera diseñar electrónica, programar microcontroladores ([[rob-microcontroladores]]), trabajar con hardware o simplemente
no electrocutarse en casa. Este nodo es la **entrada**; el análisis formal de circuitos está en [[ing-circuitos]].

## Objetivos

Al terminar sabrás:

1. Definir carga, corriente, tensión, resistencia y potencia, con sus unidades.
2. Aplicar la **ley de Ohm** y la fórmula de la potencia, y calcular energía y coste.
3. Reducir circuitos con resistencias en **serie** y en **paralelo**; usar divisores de tensión y de corriente.
4. Aplicar las leyes de **Kirchhoff** y medir con un polímetro sin dañarlo.
5. Entender corriente alterna, valor eficaz, condensadores y la carga RC.
6. Dimensionar la resistencia de un LED y conocer las bases de la seguridad eléctrica.

> [!question] Test de entrada
> 1. ¿Cuál es la potencia de una bombilla de $230$ V por la que pasa $0{,}1$ A? 2. Si tienes $12$ V y $4\ \Omega$, ¿qué corriente circula (ley de Ohm)?
> 3. ¿Qué pasa con la corriente en una cadena de bombillas en serie si una se funde?
>
> Respuestas: $23$ W; $3$ A; **se interrumpe en todas** (circuito abierto).

## 1. Para qué sirve

- **Casa y trabajo**: calcular qué cable y qué fusible necesita un aparato, cuánto cuesta usarlo, por qué salta el diferencial.
- **Electrónica y datos**: todo dato en un ordenador es tensión; los sensores dan tensiones; los robots mueven motores con corriente.
- **Energía**: baterías, cargadores, paneles solares y vehículos eléctricos se dimensionan con estas mismas fórmulas.
- **Seguridad**: saber qué es peligroso y qué no.

## 2. Carga, corriente, tensión

La materia tiene **carga eléctrica**, positiva o negativa; las cargas del mismo signo se repelen y las de signo contrario se atraen. La unidad es el **culombio**
(C). La carga elemental, la del electrón con signo negativo, vale **exactamente** $e = 1{,}602\,176\,634\cdot 10^{-19}$ C desde 2019.

**Corriente eléctrica** $I$: cantidad de carga que atraviesa una sección del conductor por unidad de tiempo, $I = \dfrac{Q}{t}$. Su unidad es el **amperio** ($1\ \text{A} = 1\ \text{C/s}$,
unos $6{,}24\cdot 10^{18}$ electrones por segundo). Por convenio histórico, el **sentido convencional** es el de las cargas **positivas**: del positivo al negativo de la fuente
(los electrones reales van al revés; para el cálculo da igual si se es coherente).

**Tensión** (o diferencia de potencial) $V$ entre dos puntos: la energía que gana o pierde cada culombio al pasar de uno a otro, $V = \dfrac{W}{Q}$. Su unidad es el **voltio**
($1\ \text{V} = 1\ \text{J/C}$). La tensión es la «presión eléctrica» que empuja la corriente; **se mide siempre entre dos puntos**, no «en» un punto.

*Analogía hidráulica (útil, con límites):* tensión $\leftrightarrow$ presión del agua, corriente $\leftrightarrow$ caudal, resistencia $\leftrightarrow$ estrechamiento de una tubería.

**Fuentes.** Una **pila o batería** mantiene una tensión (1,5 V una pila AA; 3,7 V una celda de ion-litio; 12 V una batería de coche). La **red doméstica** es corriente alterna a 230 V en Europa
(120 V en América).

## 3. Resistencia y ley de Ohm

La **resistencia** $R$ mide cuánto se opone un elemento al paso de la corriente. Se mide en **ohmios** ($\Omega$). La **ley de Ohm** relaciona los tres:

$$
V = I\,R \quad\Longleftrightarrow\quad I = \frac{V}{R} \quad\Longleftrightarrow\quad R = \frac{V}{I} .
$$

No es una ley universal, sino una propiedad de los materiales **óhmicos** (casi todos los metales a temperatura constante): una bombilla de filamento o un diodo **no** la cumplen
(su resistencia cambia con la temperatura o con la tensión).

**Resistencia de un conductor.** $R = \rho\,\dfrac{L}{A}$, con $\rho$ la **resistividad** del material, $L$ la longitud y $A$ la sección. El cobre tiene $\rho \approx 1{,}68\cdot 10^{-8}\ \Omega\cdot\text{m}$.
**Ejemplo resuelto (caída de tensión en un cable):** un cable de cobre de $2{,}5$ mm$^2$ y $30$ m: $R = \frac{1{,}68\cdot 10^{-8}\cdot 30}{2{,}5\cdot 10^{-6}} = 0{,}20\ \Omega$. Como la corriente
va y vuelve (ida y vuelta, $60$ m), $R_{\text{total}} = 0{,}40\ \Omega$ y con $10$ A la caída es $4$ V ($1{,}7\,\%$ de $230$ V): aceptable. A mayor longitud o menor sección, la
caída y el **calentamiento** crecen; por eso se dimensiona la sección según la corriente.

### Potencia y energía

La **potencia** eléctrica es la energía por segundo, $P = V\,I$ (vatios). Con la ley de Ohm: $P = I^2 R = \dfrac{V^2}{R}$. En una resistencia, **toda** la potencia se convierte en **calor** (efecto Joule).

**Ejemplo resuelto:** un hervidor de $2$ kW a $230$ V: $I = \frac{2000}{230} \approx 8{,}7$ A y $R = \frac{230^2}{2000} \approx 26{,}5\ \Omega$. Por eso un enchufe de $10$ A está al límite con él.

La **energía** consumida es $E = P\,t$. La factura usa el **kilovatio-hora**: $1\ \text{kWh} = 3{,}6\cdot 10^6$ J. Un hervidor de $2$ kW durante $3$ minutos ($0{,}05$ h) consume
$0{,}1$ kWh; con la luz a $0{,}20$ €/kWh, cuesta $0{,}02$ €.

**Baterías:** su capacidad se da en **mAh** o **Ah** (carga) y la energía es $E = V\cdot Q$ en **Wh**. Una batería de $10\,000$ mAh a $3{,}7$ V almacena $37$ Wh. Un móvil de $4000$ mAh a $3{,}85$ V,
$15{,}4$ Wh; cargarlo con $85\,\%$ de rendimiento a $20$ W lleva unos $54$ min.

## 4. Circuitos en serie y en paralelo

**Serie** (un solo camino): **la misma corriente** por todos; **las tensiones se suman**. Por tanto, las resistencias se **suman**:

$$
R_{\text{eq}} = R_1 + R_2 + \cdots + R_n .
$$

**Paralelo** (varios caminos entre los mismos dos puntos): **la misma tensión** en todos; **las corrientes se suman**. Entonces las **conductancias** $G = 1/R$ se suman:

$$
\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots, \qquad\text{para dos: } R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2} .
$$

*Demostración (paralelo).* Con tensión $V$ común, cada rama lleva $I_k = V/R_k$ y la total es $I = V\sum 1/R_k$; como $I = V/R_{\text{eq}}$, se obtiene el resultado. $\blacksquare$
La resistencia en paralelo es **siempre menor** que la menor de las ramas (añadir caminos facilita el paso). **Las bombillas de una casa están en paralelo** (cada una a $230$ V y
una fundida no apaga las demás); las antiguas luces de árbol de Navidad, en serie.

**Ejemplo resuelto:** $R_1 = 10\ \Omega$ en serie con ($20\ \Omega \parallel 30\ \Omega$), a $24$ V. El paralelo vale $\frac{20\cdot 30}{50} = 12\ \Omega$; total $22\ \Omega$; $I = \frac{24}{22} \approx 1{,}09$ A.
Tensión en el paralelo: $1{,}09\cdot 12 \approx 13{,}1$ V. **Comprobación:** $24 - 1{,}09\cdot 10 = 13{,}1$ V. $\checkmark$

### Divisor de tensión y de corriente

Dos resistencias en serie reparten la tensión **en proporción a su valor**:

$$
V_2 = V\,\frac{R_2}{R_1 + R_2} .
$$

Es la base de los potenciómetros y de muchos sensores: con $5$ V sobre $R_1 = 10\ \text{k}\Omega$ y $R_2 = 5\ \text{k}\Omega$, $V_2 = 5\cdot\frac{5}{15} = 1{,}67$ V. En paralelo, la corriente se reparte
**inversamente** a la resistencia: la rama de menor resistencia lleva más.

**Aviso:** el divisor solo es exacto **sin carga**. Si conectas algo con resistencia comparable a $R_2$, cambia el resultado (**efecto de carga**).

### Las leyes de Kirchhoff

- **Ley de nodos (KCL):** la suma de las corrientes que entran a un nodo es igual a la suma de las que salen (la carga no se acumula).
- **Ley de mallas (KVL):** la suma de las tensiones a lo largo de un lazo cerrado es **cero** (la energía se conserva).

Con ellas se resuelve **cualquier** circuito de resistencias y fuentes; su aplicación sistemática (análisis nodal) está en [[ing-circuitos]].

**Puente de Wheatstone.** Cuatro resistencias en forma de rombo con una diferencia de tensión entre sus puntos medios: el puente está **equilibrado** (tensión cero) si
$\frac{R_1}{R_2} = \frac{R_3}{R_4}$; sirve para medir una resistencia desconocida con mucha precisión.

## 5. Medir con un polímetro

- **Voltímetro**: se conecta **en paralelo** con el elemento; tiene una resistencia interna **muy alta** para no alterar el circuito.
- **Amperímetro**: se conecta **en serie** (hay que abrir el circuito); tiene una resistencia **muy baja**.
- **Ohmímetro**: se usa con el elemento **sin alimentar** y desconectado del resto.

**Error grave y frecuente:** poner un amperímetro **en paralelo** (como si fuese un voltímetro) hace un **cortocircuito** y puede dañar el aparato, quemar el fusible o provocar un accidente.

**Código de colores de resistencias:** bandas de color que dan dos o tres cifras, un multiplicador y una tolerancia. Los valores comerciales siguen **series** (E12: $10, 12, 15, 18, 22, 27, 33,
39, 47, 56, 68, 82$ y sus múltiplos de $10$) con $5\,\%$ o $1\,\%$ de tolerancia: el valor calculado se redondea al más próximo.

## 6. Corriente alterna

En **corriente continua** (CC) la tensión es constante; en **alterna** (CA) varía senoidalmente, $v(t) = V_p\sin(2\pi f t)$, con $f = 50$ Hz en Europa. Para comparar su efecto calorífico con el
de la CC se define el **valor eficaz**: el de una CC que disiparía la misma potencia en una resistencia. Como el valor medio de $\sin^2$ es $\tfrac12$,

$$
V_{\text{ef}} = \frac{V_p}{\sqrt{2}} .
$$

Los $230$ V de la red son **eficaces**: el pico es $230\sqrt2 \approx 325$ V. Los transformadores permiten elevar o reducir una tensión alterna con pocas pérdidas, y por eso la red
transporta a alta tensión (menos corriente, menos pérdidas $I^2R$) y se reduce cerca del consumidor.

## 7. Condensadores y carga RC

Un **condensador** almacena carga: $Q = C\,V$ (la capacidad $C$ se mide en **faradios**, F; lo habitual son $\mu$F, nF y pF). Almacena energía $E = \tfrac12 C V^2$. Cargado a través de
una resistencia $R$ desde una fuente $V$, su tensión crece según

$$
v_C(t) = V\,\bigl(1 - e^{-t/RC}\bigr),
$$

con **constante de tiempo** $\tau = RC$: al cabo de $\tau$ alcanza el $63{,}2\,\%$ de $V$; tras $5\tau$, más del $99\,\%$. Con $R = 10\ \text{k}\Omega$ y $C = 100\ \mu\text{F}$,
$\tau = 1$ s. Se usan como temporizadores, filtros y para **desacoplar** la alimentación de circuitos digitales. Un condensador grande cargado puede dar una descarga peligrosa:
**descárgalo** antes de manipular una fuente.

## 8. Diodos, LED y la resistencia limitadora

Un **diodo** deja pasar la corriente en un solo sentido. Un **LED** es un diodo que emite luz y exige **limitar la corriente** con una resistencia en serie (si no, se quema). Si la
fuente es $V_s$, el LED cae $V_f$ (de $\approx 1{,}8$ V para un LED rojo a $\approx 3{,}2$ V para uno azul o blanco) y se desea una corriente $I$ (típicamente $5$–$20$ mA):

$$
R = \frac{V_s - V_f}{I} .
$$

**Ejemplo resuelto:** LED rojo ($V_f = 1{,}8$ V) a $10$ mA con $5$ V: $R = \frac{3{,}2}{0{,}01} = 320\ \Omega$; se usa el valor E12 más próximo por **encima**, $330\ \Omega$ (corriente $\approx 9{,}7$ mA).
Potencia disipada en la resistencia: $0{,}0097^2\cdot 330 \approx 31$ mW, muy por debajo de un cuarto de vatio.

## 9. Seguridad eléctrica

> [!warning] La corriente puede matar
> Los efectos dependen de la corriente que atraviesa el cuerpo y del camino que sigue. Del orden de **1 mA** ya se percibe; de **decenas de mA** puede provocar contracción muscular
> sin poder soltar y fibrilación cardiaca. Una instalación doméstica da **mucha más** corriente de la necesaria para causar daño.

Normas básicas:

- **No manipules la instalación de red ni aparatos conectados** sin formación; desconecta y comprueba la **ausencia de tensión**.
- Los **fusibles** y los **interruptores magnetotérmicos** protegen contra sobrecorriente (cables que se calientan); los **diferenciales** ($30$ mA en protección de personas) cortan si detectan una fuga
  a tierra, es decir, una corriente que no vuelve por el conductor neutro.
- **Nunca** puentees un fusible ni uses uno de mayor calibre del indicado.
- Humedad y piel mojada **reducen** la resistencia del cuerpo y aumentan el peligro.
- En electrónica de bajo voltaje (pilas, USB, $\le 12$ V) el riesgo directo es bajo, pero las baterías de litio pueden **incendiarse** si se cortocircuitan o se cargan mal.
- Para trabajar con **más de $50$ V** de alterna o $120$ V de continua (tensiones de seguridad habituales), se necesita **formación y normativa específica**.

## 10. Errores típicos

- Medir corriente con el polímetro en paralelo.
- Sumar resistencias en paralelo como si estuvieran en serie.
- Olvidar la **resistencia interna** de las baterías y de las fuentes cuando la corriente es grande.
- Usar un LED **sin** resistencia limitadora.
- Confundir potencia ($\text{W}$) con energía ($\text{Wh}$).
- Mezclar valores de pico y eficaces en alterna.
- Suponer que la ley de Ohm vale para cualquier elemento.

## Repaso: lo que debe quedarte dentro de un mes

1. $V = IR$; $P = VI = I^2R = V^2/R$; energía $= Pt$ (kWh).
2. Serie: misma corriente, $R$ se suman. Paralelo: misma tensión, conductancias se suman.
3. Divisor de tensión: $V_2 = V\frac{R_2}{R_1+R_2}$.
4. Kirchhoff: corrientes en un nodo suman cero; tensiones en un lazo suman cero.
5. $V_{\text{ef}} = V_p/\sqrt2$; RC: $\tau = RC$, $63\,\%$ en un $\tau$; LED: $R = (V_s - V_f)/I$.

## Siguiente

El nodo `ing-circuitos-dc-ac` formaliza el análisis (nodos, mallas, Thévenin y régimen transitorio) y prepara el análisis de circuitos de grado, con transistores y operacionales.
