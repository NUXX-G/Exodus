---
id: fis-ondas-calor-fluidos
title: "Ondas, luz, calor y fluidos"
area: fisica
trunk_level: 7
prerequisites: [fis-fuerzas-energia]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I (ondas, óptica, calor). Addison-Wesley, 1963 (edición en línea: feynmanlectures.caltech.edu)."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019 (constantes de definición: c, h, k_B)."
  - "Arquímedes. Sobre los cuerpos flotantes (principio de flotación)."
hints:
  - "Concepto: una onda transporta energía sin transportar materia; v = λ f vale para todas. Para calor, escribe un balance: lo que pierde un cuerpo lo gana el otro (Q ganado = Q perdido). Para fluidos, la presión solo depende de la profundidad, y el empuje es el peso del fluido desalojado."
  - "Herramienta: comprueba los resultados por otra vía (por ejemplo, calcular el calor por dos caminos, o integrar numéricamente la presión con la profundidad) y recuerda convertir las unidades al SI (cm a m, °C a K cuando haga falta, kJ a J)."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de ondas, sonido, temperatura y calor, primera ley de la termodinámica, fluidos y óptica; bipm.org (constantes exactas de c, h y k que fijan σ, la constante de Stefan-Boltzmann)."
exercises:
  - id: longitud-de-onda-fm
    tier: 1
    prompt: |
      Una emisora de radio FM emite a $100$ MHz. Las ondas de radio viajan a la velocidad de la luz ($299\,792\,458$ m/s). ¿Cuál es su longitud de onda, en metros?
      Respuesta: un número **con tres decimales**.
    answers: ["sha256:df13400dfae8fa6c536db0fdbd2f489a896c89b0b266fa55f15bd729afaed9c9"]
  - id: decibelios-x100
    tier: 1
    prompt: |
      El nivel de intensidad sonora es $\beta = 10\log_{10}(I/I_0)$ decibelios. Si la intensidad de un sonido se multiplica por $100$, ¿cuántos decibelios **aumenta** el nivel?
      Respuesta: un número.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: calor-agua
    tier: 1
    prompt: |
      ¿Cuánto calor hace falta para calentar $2$ kg de agua de $20\ ^\circ$C a $70\ ^\circ$C? Usa $c = 4186$ J/(kg·K). Respuesta: julios, un número.
    answers: ["sha256:9003d0a68139e0780e6de3b1ee9ac5fb29eedfa9dd7e310a237ed8db3af9e5f5"]
  - id: ley-de-snell
    tier: 2
    prompt: |
      Un rayo de luz pasa del aire ($n = 1{,}00$) al agua ($n = 1{,}33$) con un ángulo de incidencia de $40^\circ$ (respecto a la normal). ¿Cuál es el ángulo de refracción?
      Respuesta: grados, **con un decimal**.
    answers: ["sha256:e4d64548895eb00ffb1c8d16a9228bd60e21924c028a95ccb01d0852f5cb117e"]
  - id: angulo-critico
    tier: 2
    prompt: |
      Para el vidrio ($n = 1{,}5$) frente al aire ($n = 1$), ¿cuál es el ángulo crítico a partir del cual hay reflexión total interna (la base de la fibra óptica)?
      Respuesta: grados, **con un decimal**.
    answers: ["sha256:f451060a1354e5ed4687653a9515fc372b8df71ef2a565fd755755f2cc81639d"]
  - id: eco
    tier: 2
    prompt: |
      Gritas frente a un muro y oyes el eco $2{,}4$ s después. Con la velocidad del sonido a $343$ m/s, ¿a qué distancia está el muro, en metros? Respuesta: un número.
    answers: ["sha256:90b579091e0c5c51b9b3f5dbd4aa1286f3797a6898aa9dd042e74ed6518f7478"]
  - id: cuerda-fija
    tier: 2
    prompt: |
      Una cuerda de $0{,}65$ m, fija por los dos extremos, transmite ondas a $300$ m/s. ¿Cuál es la frecuencia de su modo fundamental ($f_1 = v/2L$), en Hz?
      Respuesta: la **parte entera** del resultado.
    answers: ["sha256:a0eaec5a55dc2f5b2ba523018adc485ff620b9d83509b9f37186a7716e438d21"]
  - id: fusion-de-hielo
    tier: 2
    prompt: |
      ¿Cuánto calor se necesita para fundir $0{,}5$ kg de hielo a $0\ ^\circ$C? El calor latente de fusión del hielo es $334$ kJ/kg. Respuesta: julios, un número.
    answers: ["sha256:cb9cf41485a80e07d6c1950c4f50f9a4ea92b1585bfffe575663b418a0362a45"]
  - id: presion-bajo-el-agua
    tier: 2
    prompt: |
      ¿Cuál es la presión **absoluta** a $30$ m de profundidad en agua dulce ($\rho = 1000$ kg/m$^3$)? Usa $g = 10$ m/s$^2$ y una presión atmosférica de $100$ kPa.
      Respuesta: kilopascales, un número.
    answers: ["sha256:26d228663f13a88592a12d16cf9587caab0388b262d6d9f126ed62f9333aca94"]
  - id: flotacion-madera
    tier: 2
    prompt: |
      Un bloque de madera de densidad $800$ kg/m$^3$ flota en agua ($1000$ kg/m$^3$). ¿Qué porcentaje de su volumen queda sumergido? Respuesta: un número sin el símbolo %.
    answers: ["sha256:48449a14a4ff7d79bb7a1b6f3d488eba397c36ef25634c111b49baf362511afc"]
  - id: nivel-sonoro
    tier: 3
    prompt: |
      Una fuente sonora puntual emite $0{,}5$ W de forma uniforme en todas las direcciones. ¿Cuál es el nivel de intensidad a $10$ m, en decibelios? Usa $I_0 = 10^{-12}$ W/m$^2$.
      Respuesta: el **entero más próximo**.
    answers: ["sha256:434c9b5ae514646bbd91b50032ca579efec8f22bf0b4aac12e65997c418e0dd6"]
  - id: efecto-doppler
    tier: 3
    prompt: |
      Una ambulancia que emite un tono de $1000$ Hz se **acerca** a un observador en reposo a $20$ m/s. Con el sonido a $343$ m/s, ¿qué frecuencia oye el observador, en Hz?
      (Fórmula: $f' = f\,\dfrac{v}{v - v_s}$.) Respuesta: la **parte entera** del resultado.
    answers: ["sha256:5d9e09b09389f1e4c8268e5464bfce4c9ea6a516f9c84b2f49e313427421ef3d"]
  - id: potencia-del-sol
    tier: 3
    prompt: |
      El Sol tiene un radio de $6{,}957\cdot 10^8$ m y una temperatura superficial de $5772$ K. Tratándolo como cuerpo negro ($P = 4\pi R^2\,\sigma T^4$, con
      $\sigma = 5{,}670374419\cdot 10^{-8}$ W/(m$^2$K$^4$)), ¿cuál es su potencia, en unidades de $10^{26}$ W? Respuesta: **dos decimales**.
    answers: ["sha256:414621743bed518776a17b3cb760a5075d12b44d4fd9f996e2b2b64f20d5416f"]
  - id: conduccion-pared
    tier: 3
    prompt: |
      Una pared de ladrillo de $0{,}2$ m de espesor y $10$ m$^2$ de área (conductividad $k = 0{,}8$ W/(m·K)) separa un interior a $20$ K más caliente que el exterior.
      ¿Cuánto calor pasa por segundo (potencia, en vatios) por conducción, $P = kA\,\Delta T/L$? Respuesta: un número.
    answers: ["sha256:1a1cf797fabe7f95836fabeca626907c77b3e6c9aff7c2290b396a238c69362e"]
  - id: rendimiento-de-carnot
    tier: 3
    prompt: |
      ¿Cuál es el rendimiento máximo (de Carnot, $1 - T_f/T_c$) de una máquina térmica que opera entre una fuente caliente a $600$ K y una fría a $300$ K? Respuesta: un número en %,
      sin el símbolo.
    answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: mezcla-de-aguas
    tier: 3
    prompt: |
      Se mezclan $200$ g de agua a $80\ ^\circ$C con $300$ g de agua a $20\ ^\circ$C (sin pérdidas al exterior). ¿Cuál es la temperatura final de equilibrio, en $^\circ$C?
      Respuesta: un número.
    answers: ["sha256:71ee45a3c0db9a9865f7313dd3372cf60dca6479d46261f3542eb9346e4a04d6"]
---

# Ondas, luz, calor y fluidos

Las **ondas** transportan información y energía: el sonido, la luz, la radio, el wifi, los terremotos. El **calor** y la **temperatura** explican desde por qué se enfría el café hasta
el clima de un planeta. Los **fluidos** (aire y agua) explican por qué flotan los barcos y vuelan los aviones. Este nodo reúne las ideas centrales de cada uno, con las demostraciones
sencillas y las cuentas que usan los ingenieros.

## Objetivos

Al terminar sabrás:

1. Describir una onda con amplitud, longitud de onda, periodo y frecuencia, y aplicar $v = \lambda f$.
2. Entender el sonido (decibelios, eco, Doppler) y la luz (espectro, reflexión, refracción, fibra óptica, lentes).
3. Distinguir temperatura y calor; calcular calor sensible y latente y hacer balances térmicos.
4. Conocer los mecanismos de transferencia de calor y la idea de rendimiento (Carnot).
5. Calcular presiones hidrostáticas y empujes (Arquímedes), y entender continuidad y Bernoulli.

> [!question] Test de entrada
> 1. Si el sonido recorre $343$ m en $1$ s, ¿qué distancia recorre en $3$ s? 2. ¿A cuántos grados Celsius hierve el agua a nivel del mar? 3. ¿Por qué flota un barco de
> acero si el acero se hunde?
>
> Respuestas: $1029$ m; $100\ ^\circ$C; porque su **forma** desaloja mucha agua y la densidad **media** del barco es menor que la del agua.

## 1. Para qué sirve

- **Comunicaciones**: radio, wifi, fibra óptica, radar, ecografías.
- **Energía y clima**: aislamiento de edificios, paneles solares, el balance de energía de la Tierra.
- **Ingeniería**: refrigeración, motores, calderas, presas, submarinos, tuberías.
- **Salud**: ruido y audición, termometría, imagen médica.

## 2. Ondas

Una **onda** es una perturbación que se propaga y transporta **energía y cantidad de movimiento sin transportar materia** (las partículas del medio oscilan en torno a su posición).

- **Transversal**: la oscilación es perpendicular a la propagación (ondas en una cuerda, luz).
- **Longitudinal**: la oscilación es paralela (sonido: compresiones y rarefacciones del aire).

Una onda periódica se describe con: **amplitud** $A$ (elongación máxima), **longitud de onda** $\lambda$ (distancia entre dos puntos iguales consecutivos), **periodo** $T$, **frecuencia**
$f = 1/T$ (Hz). En un periodo la onda avanza una longitud de onda, luego

$$
v = \lambda f .
$$

Esta relación vale para **todas** las ondas. La velocidad depende **del medio**, no de la fuente: la frecuencia la fija la fuente y al cambiar de medio cambia $\lambda$, no $f$.

**Superposición e interferencia.** Dos ondas que coinciden en un punto se **suman**. Si están en fase hay **interferencia constructiva** (amplitud suma); en oposición de fase,
**destructiva** (se anulan). Los auriculares con cancelación de ruido usan la interferencia destructiva: emiten una onda de signo opuesto al ruido.

**Ondas estacionarias.** En una cuerda de longitud $L$ fija por ambos extremos solo caben ondas con un número entero de semilongitudes: $L = n\frac{\lambda}{2}$, es decir, frecuencias
$f_n = n\,\dfrac{v}{2L}$ ($n = 1, 2, 3, \dots$): el **fundamental** y los **armónicos**. Así funcionan las cuerdas de una guitarra: al acortar la cuerda con un dedo ($L$ menor) sube la frecuencia.

**Reflexión, refracción y difracción.** Una onda se **refleja** en una superficie, cambia de dirección al pasar a otro medio (**refracción**) y **rodea** obstáculos y aberturas de tamaño comparable a su
longitud de onda (**difracción**): por eso oyes tras una esquina, pero no ves.

## 3. Sonido

El sonido necesita un **medio material** (no se propaga en el vacío). En el aire, a $20\ ^\circ$C, $v \approx 343$ m/s; depende de la temperatura ($v \approx 331 + 0{,}6\,T_{^\circ\text{C}}$ m/s)
y es mayor en líquidos ($\approx 1480$ m/s en el agua) y sólidos. El oído humano percibe aproximadamente de $20$ Hz a $20\,000$ Hz.

**Eco y distancias.** El eco tarda $t = \frac{2d}{v}$ (ida y vuelta): con $t = 1{,}2$ s, $d = \frac{343\cdot 1{,}2}{2} \approx 206$ m. Así funcionan el **sonar** y la ecografía. La **tormenta**:
cuenta los segundos entre el relámpago y el trueno y multiplica por $343$ m/s.

**Intensidad y decibelios.** La intensidad $I$ (W/m$^2$) es la potencia por unidad de área. El oído percibe en escala **logarítmica**, y por eso se usa el **nivel de intensidad**

$$
\beta = 10\log_{10}\frac{I}{I_0}\ \text{dB}, \qquad I_0 = 10^{-12}\ \text{W/m}^2\ \text{(umbral de audición)} .
$$

**Cada $+10$ dB multiplica la intensidad por $10$; $+3$ dB, aproximadamente por $2$.** Dos fuentes iguales suman $3$ dB, no el doble. Una fuente puntual que emite $P$ en todas direcciones
da $I = \dfrac{P}{4\pi r^2}$: la intensidad cae con el **cuadrado de la distancia** (al duplicar la distancia, $-6$ dB). Como orientación: $\approx 60$ dB es una conversación, $\approx 85$ dB
exposición prolongada ya daña el oído, $\approx 120$ dB está cerca del umbral de dolor.

**Efecto Doppler.** Si la fuente se **acerca** a un observador con velocidad $v_s$, la frecuencia percibida **aumenta**: $f' = f\,\dfrac{v}{v - v_s}$; si se **aleja**, $f' = f\,\dfrac{v}{v + v_s}$. Es el
cambio de tono de una ambulancia que pasa, y el principio del radar de velocidad y de la medida del movimiento de las galaxias (el corrimiento al rojo).

## 4. La luz y el espectro electromagnético

La luz es una **onda electromagnética** (campos eléctrico y magnético que oscilan, tema de [[fis-electromagnetismo]]) que **no necesita medio** y viaja en el vacío a
$c = 299\,792\,458$ m/s (valor exacto por definición). Se cumple $c = \lambda f$. El **espectro** ordena las ondas electromagnéticas por frecuencia:

| Región | Longitud de onda (orden de magnitud) | Uso |
|---|---|---|
| Radio | $> 10$ cm | emisoras, wifi ($2{,}4$ GHz $\to \lambda = 12{,}5$ cm), TV |
| Microondas | cm | hornos, radar, telefonía |
| Infrarrojo | $\mu$m – mm | mandos, cámaras térmicas, calor |
| **Visible** | **$\approx 400$ – $700$ nm** | visión (violeta → rojo) |
| Ultravioleta | $10$ – $400$ nm | esterilización, bronceado |
| Rayos X | $< 10$ nm | radiografías |
| Rayos gamma | $\ll 1$ nm | medicina nuclear, astrofísica |

Cuanto menor es $\lambda$ (mayor $f$), **más energía por fotón**: los rayos UV, X y $\gamma$ son ionizantes; la radio, no. El wifi y el móvil emiten microondas **no ionizantes** de potencia
baja.

## 5. Óptica geométrica

Cuando los objetos son mucho mayores que $\lambda$, la luz se describe con **rayos** que van en línea recta.

- **Reflexión**: el ángulo de incidencia es igual al de reflexión (medidos respecto a la **normal**).
- **Refracción**: al pasar de un medio a otro, la luz cambia de dirección según la **ley de Snell**

$$
n_1 \sin\theta_1 = n_2 \sin\theta_2, \qquad n = \frac{c}{v}\ \text{(índice de refracción)} .
$$

Índices típicos: aire $\approx 1{,}000$; agua $1{,}33$; vidrio $\approx 1{,}5$; diamante $2{,}42$. **Ejemplo resuelto:** de aire a vidrio con $\theta_1 = 30^\circ$: $\sin\theta_2 = \frac{\sin 30^\circ}{1{,}5} = 0{,}333$,
$\theta_2 \approx 19{,}5^\circ$: el rayo se **acerca a la normal** al entrar en un medio más denso.

- **Reflexión total interna**: al pasar a un medio **menos** denso ($n_1 > n_2$) el rayo se aleja de la normal; a partir del **ángulo crítico** $\sin\theta_c = \frac{n_2}{n_1}$ no sale y se refleja del todo. Para
  vidrio a aire, $\theta_c = \arcsin\frac{1}{1{,}5} \approx 41{,}8^\circ$. Es la base de la **fibra óptica**: la luz queda atrapada en el núcleo y recorre kilómetros con pérdidas mínimas, llevando la mayor parte de internet.
- **Lentes delgadas**: $\dfrac{1}{f} = \dfrac{1}{d_o} + \dfrac{1}{d_i}$, con $f$ la distancia focal, $d_o$ la del objeto y $d_i$ la de la imagen. Una lupa ($f = 10$ cm) con un objeto a $5$ cm da $\frac{1}{d_i} = \frac{1}{10} - \frac{1}{5} = -\frac{1}{10}$,
  $d_i = -10$ cm (imagen **virtual**, derecha y ampliada $\times 2$). Los ojos, las cámaras, los microscopios y los telescopios son sistemas de lentes.

## 6. Temperatura y calor

La **temperatura** mide la energía cinética media de las partículas de un cuerpo; el **calor** $Q$ es la **energía que se transfiere** entre cuerpos por una diferencia de temperatura. Un
vaso de agua caliente no «contiene calor»: tiene energía interna; el calor es la transferencia.

**Escalas.** Celsius ($0\ ^\circ$C fusión del hielo, $100\ ^\circ$C ebullición del agua a nivel del mar), Fahrenheit y **Kelvin**, la escala absoluta: $T_K = T_C + 273{,}15$. El **cero absoluto** ($0$ K $= -273{,}15\ ^\circ$C) es el límite inferior.

**Calor sensible.** Para cambiar la temperatura de una masa $m$: $Q = m\,c\,\Delta T$, con $c$ el **calor específico**: el agua tiene $c = 4186$ J/(kg·K), valor alto: por eso el mar modera el clima y
el agua se usa para refrigerar. **Ejemplo resuelto:** calentar $1{,}5$ L de agua ($1{,}5$ kg) de $15$ a $100\ ^\circ$C: $Q = 1{,}5\cdot 4186\cdot 85 = 533\,715$ J. Con un hervidor de $2$ kW: $\frac{533\,715}{2000} \approx 267$ s
$\approx 4{,}4$ min (sin pérdidas).

**Calor latente.** En un **cambio de fase** la temperatura no cambia mientras se absorbe energía: $Q = m\,L$. Fusión del hielo: $L_f = 334$ kJ/kg; vaporización del agua: $L_v = 2260$ kJ/kg (vaporizar
cuesta **casi siete veces** más que fundir). Por eso un golpe de vapor quema mucho más que agua a $100\ ^\circ$C.

**Balance térmico (calorimetría).** Si dos cuerpos aislados intercambian calor, lo que pierde el caliente lo gana el frío: $\sum Q = 0$. **Ejemplo:** $0{,}1$ kg de agua a $90\ ^\circ$C con $0{,}4$ kg a $10\ ^\circ$C:
$0{,}1(90 - T) = 0{,}4(T - 10)$, luego $T = \frac{9 + 4}{0{,}5} = 26\ ^\circ$C.

**Dilatación.** Casi todo se dilata al calentarse ($\Delta L = \alpha L\,\Delta T$): por eso los puentes y las vías llevan juntas.

## 7. Transferencia de calor

- **Conducción**: por contacto, sin movimiento de materia. $P = \dfrac{k\,A\,\Delta T}{L}$, con $k$ la **conductividad** del material ($k \approx 0{,}8$ W/(m·K) el ladrillo; $0{,}04$ la lana de roca;
  $400$ el cobre). Una pared de $10$ m$^2$ y $20$ cm de ladrillo con $\Delta T = 20$ K pierde $\frac{0{,}8\cdot 10\cdot 20}{0{,}2} = 800$ W: el **aislamiento** reduce $k$ o aumenta $L$.
- **Convección**: por movimiento de un fluido (el aire caliente sube; las corrientes del océano; los radiadores).
- **Radiación**: ondas electromagnéticas, **sin medio**. Todo cuerpo emite con potencia (**ley de Stefan-Boltzmann**, cuerpo negro) $P = \sigma A T^4$, con $\sigma = 5{,}670374419\cdot 10^{-8}$ W/(m$^2$K$^4$), una
  constante que sale **exactamente** de $h$, $k_B$ y $c$ ($\sigma = \frac{2\pi^5 k_B^4}{15\,h^3c^2}$). La potencia crece con la **cuarta potencia** de la temperatura absoluta.

**Ejemplo resuelto (el Sol y la Tierra).** El Sol ($R = 6{,}957\cdot 10^8$ m, $T = 5772$ K) emite $4\pi R^2\sigma T^4 \approx 3{,}83\cdot 10^{26}$ W. A la distancia de la Tierra ($1{,}496\cdot 10^{11}$ m),
la intensidad es $\frac{3{,}83\cdot 10^{26}}{4\pi(1{,}496\cdot 10^{11})^2} \approx 1361$ W/m$^2$ (la «constante solar»). Una Tierra **sin atmósfera**, que refleja el $30\,\%$ y reemite como cuerpo negro, estaría en equilibrio cuando
$\frac{S(1-a)}{4} = \sigma T^4$: $T = \left(\frac{1361\cdot 0{,}7}{4\sigma}\right)^{1/4} \approx 255$ K ($-18\ ^\circ$C). La temperatura media real es $\approx 288$ K ($+15\ ^\circ$C): los
**$\approx 33$ K de diferencia** son el **efecto invernadero** de la atmósfera, que retiene parte de la radiación infrarroja. Con unas pocas fórmulas se entiende por qué el planeta es habitable.

## 8. Primera idea de termodinámica

**Primer principio:** la energía se conserva. $\Delta U = Q - W$: la variación de energía interna es el calor **recibido** menos el trabajo **realizado** por el sistema. **Segundo principio** (versión
de Clausius): el calor fluye **espontáneamente** del cuerpo caliente al frío, nunca al revés sin gastar trabajo. De él sale un **límite** al rendimiento de cualquier máquina térmica que opere entre
$T_c$ (caliente) y $T_f$ (fría), el **rendimiento de Carnot**:

$$
\eta_{\max} = 1 - \frac{T_f}{T_c} .
$$

Una central o un motor entre $600$ K y $300$ K no puede pasar del $50\,\%$, por buena que sea la ingeniería. Un frigorífico hace lo contrario: gasta trabajo para llevar calor de frío a caliente. La
**entropía** (a estudiar en [[fis-termo-estadistica]]) cuantifica esta irreversibilidad.

## 9. Fluidos

Un **fluido** (líquido o gas) no mantiene forma propia. La **presión** es la fuerza por unidad de área perpendicular: $P = \dfrac{F}{A}$ (pascal, $1\ \text{Pa} = 1\ \text{N/m}^2$). La presión atmosférica a nivel del mar
es $\approx 101\,325$ Pa.

**Presión hidrostática.** En un fluido en reposo, a profundidad $h$:

$$
P = P_0 + \rho\,g\,h .
$$

*Demostración.* Una columna de fluido de área $A$ y altura $h$ pesa $\rho A h g$; ese peso añade $\rho g h$ de presión sobre su base. $\blacksquare$ Solo depende de la **profundidad**, no de la forma del recipiente (la
«paradoja hidrostática»). Cada $10$ m de agua añaden $\approx 1$ atmósfera. A $30$ m, $\approx 4$ atm absolutas: por eso la presión daña los oídos al bucear.

**Principio de Pascal:** un cambio de presión en un fluido encerrado se transmite **íntegro**; la **prensa hidráulica** multiplica fuerzas: $\frac{F_1}{A_1} = \frac{F_2}{A_2}$.

**Principio de Arquímedes:** un cuerpo sumergido recibe un **empuje vertical hacia arriba igual al peso del fluido que desaloja**: $E = \rho_{\text{fluido}}\,V_{\text{sum}}\,g$.
*Demostración (un cubo de lado $\ell$).* La presión en la cara inferior ($h_2$) supera a la de la superior ($h_1$) en $\rho g (h_2 - h_1)$; la fuerza neta hacia arriba es $\rho g(h_2 - h_1)\ell^2 = \rho g \ell^3 = \rho g V$. $\blacksquare$

**Flotación:** un objeto flota si su **densidad media** es menor que la del fluido, y la fracción sumergida es $\rho_{\text{objeto}}/\rho_{\text{fluido}}$: el hielo ($917$ kg/m$^3$) flota en agua con $\approx 92\,\%$ sumergido
(por eso «la punta del iceberg»); el acero de un barco flota porque el casco hueco baja su densidad media.

**Fluidos en movimiento.** **Ecuación de continuidad** (conservación de la masa, fluido incompresible): $A_1 v_1 = A_2 v_2$: en un estrechamiento, el fluido **acelera**. **Ecuación de Bernoulli** (conservación
de la energía, sin viscosidad): $P + \tfrac12\rho v^2 + \rho g h = \text{constante}$: **donde la velocidad es mayor, la presión es menor**. Explica parte de la sustentación de un ala y el funcionamiento de un
pulverizador. Las condiciones de validez (flujo estacionario, sin rozamiento) importan.

## 10. Errores típicos

- Confundir **temperatura** y **calor**, o decir que un cuerpo «tiene calor».
- Olvidar convertir a **kelvin** en las fórmulas de radiación y de Carnot.
- Usar $Q = mc\Delta T$ durante un cambio de fase (ahí la temperatura no cambia: $Q = mL$).
- Suponer que $3$ dB es el triple (es el **doble**), o sumar decibelios como cantidades lineales.
- Creer que el sonido se propaga en el vacío, o que la luz necesita medio.
- Confundir presión con fuerza; olvidar $P_0$ al hablar de presión **absoluta**.
- Pensar que el empuje depende del peso del objeto (depende del volumen **sumergido**).

## Repaso: lo que debe quedarte dentro de un mes

1. $v = \lambda f$; sonido $\approx 343$ m/s; luz $c = 299\,792\,458$ m/s; $\beta = 10\log_{10}(I/I_0)$.
2. Snell $n_1\sin\theta_1 = n_2\sin\theta_2$; reflexión total interna a partir de $\sin\theta_c = n_2/n_1$.
3. $Q = mc\Delta T$; $Q = mL$ en los cambios de fase; balance: lo que pierde uno lo gana el otro.
4. Conducción $kA\Delta T/L$; radiación $\sigma A T^4$; Carnot $1 - T_f/T_c$.
5. $P = P_0 + \rho g h$; empuje $= \rho_f V g$; $A_1v_1 = A_2v_2$.

## Siguiente

Con la física N1, el siguiente escalón retoma el movimiento y las fuerzas con **cálculo** (`fis-mecanica-newtoniana`) y la electricidad con campos (`fis-electricidad-magnetismo-1`).
