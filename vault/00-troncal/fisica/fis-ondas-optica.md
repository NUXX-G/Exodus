---
id: fis-ondas-optica
title: "Ondas y óptica: ecuación de ondas, interferencia, difracción, polarización y óptica geométrica"
area: fisica
trunk_level: 12
prerequisites: [fis-ondas-calor-fluidos, fis-electricidad-magnetismo-1, mat-ecuaciones-diferenciales]
academic_sources:
  - "Hecht, E. Optics, 5ª ed. Pearson, 2017."
  - "MIT OpenCourseWare. 8.03SC Physics III: Vibrations and Waves, otoño de 2016 (Yen-Jie Lee); texto de referencia: Georgi, H. The Physics of Waves (PDF gratuito)."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I, capítulo 26 («Optics: The Principle of Least Time») y siguientes (edición en línea: feynmanlectures.caltech.edu)."
  - "Bureau International des Poids et Mesures. The International System of Units (SI), 9ª ed., 2019 (c exacta por definición)."
hints:
  - "Concepto: casi todo en ondas se reduce a sumar ondas con su fase. Dos caminos que difieren en un número entero de longitudes de onda refuerzan; en medio número entero, se anulan. Para una rendija, una red o una capa delgada, calcula la diferencia de camino (y los saltos de fase de media onda al reflejarse en un medio de mayor índice) e iguálala a mλ o a (m + ½)λ. En óptica geométrica, Snell y la ecuación de las lentes; con varias lentes, la imagen de una es el objeto de la siguiente."
  - "Herramienta: comprueba una figura de interferencia sumando numéricamente los fasores e^(iφ) de cada fuente y buscando máximos y ceros; una lente o un sistema óptico, con matrices de transferencia de rayos (ABCD) 2×2; un ángulo de refracción, minimizando el tiempo de recorrido (Fermat) con una búsqueda numérica."
  - "Documentación: Hecht, Optics (capítulos de ondas, propagación de la luz, óptica geométrica, polarización, interferencia y difracción); MIT OCW 8.03SC (Georgi, The Physics of Waves); Feynman Lectures vol. I, cap. 26 a 30 (feynmanlectures.caltech.edu)."
exercises:
  - id: ondas-en-una-cuerda
    tier: 1
    prompt: |
      Una cuerda de guitarra de $0{,}5$ m, fija por los extremos, tiene una tensión de $100$ N y una densidad lineal de $0{,}01$ kg/m. ¿Con qué velocidad se propagan las ondas ($v = \sqrt{T/\mu}$) y cuál es la frecuencia fundamental, en Hz? Respuesta: `v;f`.
    answers: ["sha256:274219a7c382cb6bc2d0b762ea5f39bfc4dc62dd675cb074c9b922b3cf43a5f8"]
  - id: onda-armonica
    tier: 1
    prompt: |
      Una onda en una cuerda es $y(x, t) = 0{,}02\sin(4x - 20t)$ (SI). ¿Cuál es su velocidad de propagación y su frecuencia en Hz? Respuesta: `v;f` con $f$ redondeada a **3 decimales**.
    answers: ["sha256:51104bf9e9593a53e4d3fcc4bf2d607601efc16d2bd5b446a0e289f0705083c5"]
  - id: batidos
    tier: 1
    prompt: |
      Dos diapasones de $440$ Hz y $444$ Hz suenan a la vez. ¿Cuántos batidos (subidas de volumen) por segundo se oyen? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: tres-polarizadores
    tier: 1
    prompt: |
      Luz **no polarizada** de $100$ W/m$^2$ atraviesa tres polarizadores ideales con ejes a $0^\circ$, $45^\circ$ y $90^\circ$. ¿Qué intensidad sale, en W/m$^2$? (Sin el del medio, saldría $0$.) Respuesta: un número.
    answers: ["sha256:b902cc4550838229a710bfec4c38cbc7eb11082367a409df9135e7f007a96bda"]
  - id: angulo-de-brewster
    tier: 2
    prompt: |
      ¿Con qué ángulo de incidencia (desde el aire) la luz reflejada en un vidrio de $n = 1{,}5$ sale totalmente polarizada (ángulo de Brewster, $\tan\theta_B = n_2/n_1$)? Respuesta: grados con **2 decimales**.
    answers: ["sha256:eaf90d778f979802a63ce972733ecccf3b0306d46787ca42372cf5a87267f9cb"]
  - id: doble-rendija
    tier: 2
    prompt: |
      En un experimento de Young, luz de $600$ nm pasa por dos rendijas separadas $0{,}2$ mm y llega a una pantalla a $2$ m. ¿Qué separación hay entre franjas brillantes consecutivas, en mm? Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: difraccion-por-una-rendija
    tier: 2
    prompt: |
      Luz de $500$ nm atraviesa una rendija de $0{,}1$ mm y llega a una pantalla a $1$ m. ¿Qué anchura tiene el máximo central (entre los dos primeros mínimos), en mm? Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: red-de-difraccion
    tier: 2
    prompt: |
      Una red de difracción de $600$ líneas/mm se ilumina perpendicularmente con la luz amarilla del sodio ($589$ nm). ¿Con qué ángulo sale el **primer orden** y cuál es el **orden más alto** que se puede ver? Respuesta: `grados;orden`, el ángulo con **2 decimales**.
    answers: ["sha256:5afc9e72497516bee447a0ae8358236a02ffd5ff095a56a1fc51d113c654711e", "sha256:b1ffa7d129dba360335f4b392864d34441246e3d6ba60b7bd1cb1ebaa5d715f6"]
  - id: capa-antirreflejante
    tier: 2
    prompt: |
      Una lente de vidrio ($n = 1{,}52$) se recubre con fluoruro de magnesio ($n = 1{,}38$). ¿Qué espesor mínimo debe tener la capa para anular la reflexión de la luz de $550$ nm a incidencia normal? Respuesta: en nm, con **1 decimal**.
    answers: ["sha256:d105f4f09e3cd4d134bca1acd8ead10b5b405650e177b4aa5433b41cf4bc7847"]
  - id: criterio-de-rayleigh
    tier: 2
    prompt: |
      ¿Cuál es la resolución angular límite (criterio de Rayleigh, $\theta \approx 1{,}22\lambda/D$) de un telescopio de $10$ cm de abertura con luz de $550$ nm, en **segundos de arco**? Respuesta: un número con **2 decimales**.
    answers: ["sha256:6c3f9363fae05325503032409f78e086bb93d575e289ec4b370e99abd316c9be"]
  - id: doppler-con-ambos-en-movimiento
    tier: 3
    prompt: |
      Una sirena de $500$ Hz se acerca a $30$ m/s a un ciclista que va hacia ella a $10$ m/s ($v_{\text{sonido}} = 343$ m/s, aire en reposo). ¿Qué frecuencia oye el ciclista? Respuesta: en Hz, con **1 decimal**.
    answers: ["sha256:76a6bb5d66a8e5bad2011cec67d4518cca4edcbc3573af8e1c495b5deadffdfa"]
  - id: intensidad-de-una-onda-electromagnetica
    tier: 3
    prompt: |
      Una onda electromagnética plana tiene un campo eléctrico de amplitud $E_0 = 100$ V/m. ¿Qué intensidad media transporta, $I = \tfrac12 c\,\varepsilon_0 E_0^2$, en W/m$^2$? (Usa $c = 299\,792\,458$ m/s y $\varepsilon_0 = 8{,}854\,187\,8\cdot10^{-12}$ F/m.) Respuesta: un número con **2 decimales**.
    answers: ["sha256:eeb50536bc03ad7083d981775b635911f9faccddda98468913447c87545bdbf5"]
  - id: ecuacion-del-fabricante-de-lentes
    tier: 3
    prompt: |
      Una lente biconvexa delgada de vidrio ($n = 1{,}5$) tiene radios $R_1 = 20$ cm y $R_2 = -20$ cm. Un objeto está a $30$ cm de ella. ¿A qué distancia se forma la imagen y cuál es el aumento lateral? Respuesta: `cm;aumento`.
    answers: ["sha256:0c8ce75d4a49ee62d7a8e26ce6ff4e2bccbec4b06f0cc959c3720daf1f975ce9"]
  - id: sistema-de-dos-lentes
    tier: 3
    prompt: |
      Dos lentes delgadas convergentes de focales $10$ cm y $20$ cm están separadas $40$ cm. Un objeto está a $30$ cm delante de la primera. ¿A qué distancia **detrás de la segunda** se forma la imagen final y cuál es el aumento lateral total? Respuesta: `cm;aumento`.
    answers: ["sha256:96f40401623c7b32728754bdee3aadcb69f08df83826c2011a52f3a5afefcd18"]
  - id: fibra-optica
    tier: 3
    prompt: |
      Una fibra óptica tiene núcleo de índice $1{,}48$ y revestimiento de $1{,}46$. ¿Cuál es el semiángulo máximo, en el aire, con que puede entrar la luz y quedar guiada por reflexión total ($\sin\theta_{\max} = \sqrt{n_1^2 - n_2^2}$)? Respuesta: grados con **2 decimales**.
    answers: ["sha256:68642c66c7fbeaf2cd05e4c70c715b6d321573c1c8f7dca879de3ac1d9ed7c35"]
  - id: principio-de-fermat
    tier: 3
    prompt: |
      La luz va de $A = (0, 1)$, en el aire ($y > 0$), a $B = (2, -1)$, en el agua ($n = 1{,}33$, $y < 0$), atravesando la superficie $y = 0$. Según el principio de Fermat sigue el camino de **tiempo mínimo**. ¿En qué punto $(x, 0)$ cruza la superficie? Respuesta: $x$ con **3 decimales**.
    answers: ["sha256:ae7f531fd29e322e585112e434e3a7ea78ec126c83c804f0de10cf3696e6533d"]
---

# Ondas y óptica: ecuación de ondas, interferencia, difracción, polarización y óptica geométrica

[[fis-ondas-calor-fluidos]] presentó las ondas y la luz de forma cualitativa. Este nodo las trata con el nivel de un curso universitario:
la **ecuación de ondas** y sus soluciones, la energía que transportan, la superposición (batidos, ondas estacionarias), el efecto Doppler
general, la luz como onda electromagnética que sale de las ecuaciones de Maxwell ([[fis-electricidad-magnetismo-1]]), y los fenómenos que
solo explica la naturaleza ondulatoria: **interferencia**, **difracción** y **polarización**. Termina con la óptica geométrica de los
instrumentos (lentes gruesas y delgadas, sistemas de varias lentes, fibras) y el principio de Fermat, que lo unifica todo.

## Objetivos

Al terminar sabrás:

1. Deducir la ecuación de ondas de una cuerda, escribir sus soluciones armónicas y calcular velocidad, frecuencia, energía y modos normales.
2. Calcular batidos y el efecto Doppler con fuente y observador en movimiento.
3. Relacionar $\mathbf E$, $\mathbf B$ e intensidad en una onda electromagnética.
4. Calcular figuras de interferencia (doble rendija, capas delgadas) y de difracción (rendija, abertura circular y criterio de Rayleigh, redes).
5. Aplicar la ley de Malus y el ángulo de Brewster.
6. Resolver sistemas ópticos con la ecuación de las lentes, la del fabricante de lentes y matrices de rayos, y deducir la ley de Snell del principio de Fermat.

## Qué debes dominar antes

[[fis-ondas-calor-fluidos]] ($v = \lambda f$, sonido, decibelios, Snell, lentes delgadas), [[fis-electricidad-magnetismo-1]] (campos y la idea de
Maxwell), [[mat-ecuaciones-diferenciales]] (oscilador armónico, derivadas parciales en ecuaciones) y [[mat-trigonometria]] (identidades
de suma).

> [!question] Test de entrada
> 1. Escribe $\cos A + \cos B$ como un producto.
> 2. ¿Cuál es la longitud de onda de una luz de $5\cdot10^{14}$ Hz en el vacío?
> 3. Con $n_1\sin\theta_1 = n_2\sin\theta_2$, ¿hacia dónde se desvía un rayo que pasa del agua al aire?
>
> Respuestas: $2\cos\frac{A + B}{2}\cos\frac{A - B}{2}$; $600$ nm; se aleja de la normal.

## 1. Para qué sirve

- **Comunicaciones**: fibra óptica, antenas, wifi y 5G son ondas guiadas o radiadas; la interferencia y la difracción deciden su alcance.
- **Instrumentos**: cámaras, microscopios, telescopios y sensores; el límite de difracción decide el detalle que pueden ver.
- **Tecnología cotidiana**: capas antirreflejantes de las gafas, pantallas LCD (polarización), lectores de código de barras, espectrómetros (redes).
- **Ingeniería y física**: vibraciones de estructuras, acústica, sismología, y la base de la mecánica cuántica (la función de onda interfiere).

## 2. La ecuación de ondas

En una cuerda de tensión $T$ y densidad lineal $\mu$, un trozo de longitud $dx$ desplazado $y(x, t)$ recibe una fuerza vertical neta
$T\,\frac{\partial^2 y}{\partial x^2}\,dx$ (diferencia de las componentes verticales de la tensión en sus extremos, para pendientes pequeñas). La
segunda ley de Newton da

$$
\frac{\partial^2 y}{\partial t^2} = v^2\,\frac{\partial^2 y}{\partial x^2}, \qquad v = \sqrt{\frac{T}{\mu}} .
$$

Cualquier función $y = f(x - vt) + g(x + vt)$ es solución (dos perfiles que viajan sin deformarse en sentidos opuestos: **solución de
d'Alembert**). Las **ondas armónicas** $y = A\sin(kx - \omega t + \varphi)$ tienen **número de onda** $k = 2\pi/\lambda$ y **frecuencia angular**
$\omega = 2\pi f$, con $v = \omega/k$. Una onda armónica en una cuerda transporta una potencia media $\tfrac12\mu v\omega^2A^2$: proporcional al
**cuadrado** de la amplitud y de la frecuencia, como toda onda.

**Modos normales.** Con los extremos fijos en $x = 0$ y $x = L$, las soluciones estacionarias son $y = A\sin(k_nx)\cos(\omega_nt)$ con $k_nL = n\pi$:

$$
f_n = \frac{n\,v}{2L} = \frac{n}{2L}\sqrt{\frac{T}{\mu}} .
$$

Tensar la cuerda sube la nota; una cuerda más gruesa (mayor $\mu$) la baja. Cualquier vibración de la cuerda es una suma de modos normales
(una **serie de Fourier**, [[ing-senales-sistemas]]). En un tubo abierto por los dos extremos caben $n$ medias longitudes de onda
($f_n = nv/2L$); cerrado por uno, solo armónicos impares ($f_n = nv/4L$, $n$ impar): por eso un clarinete y una flauta suenan distinto.

## 3. Superposición: batidos y Doppler

**Batidos.** Dos ondas de frecuencias cercanas $f_1$ y $f_2$ suman

$$
\cos(2\pi f_1t) + \cos(2\pi f_2t) = 2\cos\!\left(2\pi\frac{f_1 - f_2}{2}t\right)\cos\!\left(2\pi\frac{f_1 + f_2}{2}t\right):
$$

un tono de la frecuencia media cuya amplitud sube y baja $\lvert f_1 - f_2\rvert$ veces por segundo. Los afinadores de instrumentos ajustan hasta que los
batidos desaparecen.

**Doppler general.** Con el medio en reposo, una fuente que se acerca a $v_s$ y un observador que se acerca a $v_o$:

$$
f' = f\,\frac{v + v_o}{v - v_s}
$$

(cambia el signo de cada velocidad si se aleja). El observador que se mueve recibe más frentes por segundo; la fuente que se mueve los emite más
juntos. Para la luz (sin medio) la fórmula relativista depende solo de la velocidad relativa; para velocidades pequeñas,
$\Delta f/f \approx v/c$: así miden los radares la velocidad y los astrónomos el alejamiento de las galaxias.

## 4. La luz como onda electromagnética

Las ecuaciones de Maxwell en el vacío implican que $\mathbf E$ y $\mathbf B$ cumplen la ecuación de ondas con velocidad
$c = 1/\sqrt{\mu_0\varepsilon_0}$ (desde 1983, $c = 299\,792\,458$ m/s exactamente, por definición del metro). En una onda plana, $\mathbf E$ y $\mathbf B$ son
perpendiculares entre sí y a la dirección de propagación, están en fase y $E = cB$. El flujo de energía lo da el vector de Poynting
$\mathbf S = \frac{1}{\mu_0}\mathbf E\times\mathbf B$, cuya media es la **intensidad**

$$
I = \tfrac12\,c\,\varepsilon_0E_0^2 .
$$

La luz solar en la Tierra trae unos $1{,}4$ kW/m$^2$. En un medio de índice $n$ la luz va a $c/n$, su longitud de onda se divide por $n$ y su
frecuencia no cambia; como $n$ depende algo de la frecuencia (**dispersión**), un prisma separa los colores.

## 5. Interferencia

Dos ondas **coherentes** (con diferencia de fase constante) que llegan a un punto por caminos de longitudes $r_1$ y $r_2$ tienen una diferencia de
fase $\delta = 2\pi(r_2 - r_1)/\lambda$ (más los saltos de fase que haya). La intensidad resultante es $I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\delta$: máxima
si la diferencia de camino es $m\lambda$, mínima si es $(m + \tfrac12)\lambda$.

**Doble rendija (Young).** Rendijas separadas $d$, pantalla a distancia $L \gg d$: la diferencia de camino es $d\sin\theta$, hay máximos en
$d\sin\theta = m\lambda$ y, para ángulos pequeños, franjas brillantes separadas

$$
\Delta y = \frac{\lambda L}{d} .
$$

Fue la prueba (1801) de que la luz es una onda, y repetida con electrones de uno en uno, la de que la materia también interfiere.

**Capas delgadas.** En una película de espesor $t$ e índice $n$, la luz reflejada en sus dos caras recorre una diferencia de camino $2nt$ (a
incidencia normal). Además, la reflexión en un medio de **mayor** índice añade medio periodo de fase. Una **capa antirreflejante** de índice
intermedio entre el aire y el vidrio sufre ese salto en las dos caras, que se compensan, así que anula la reflexión si $2nt = \lambda/2$:
$t = \lambda/(4n)$. Las burbujas de jabón y las manchas de aceite muestran colores porque cada espesor refuerza una longitud de onda distinta. El
**interferómetro de Michelson** usa el mismo principio para medir distancias con precisión de fracciones de longitud de onda (y detecta ondas
gravitacionales en LIGO).

**Ejemplo resuelto 1.** Una mancha de aceite ($n = 1{,}45$) de $400$ nm sobre agua ($n = 1{,}33$), vista en vertical. Solo la reflexión en la cara
superior (aire-aceite) tiene salto de fase; la condición de refuerzo es $2nt = (m + \tfrac12)\lambda$, es decir $\lambda = \frac{2\cdot1{,}45\cdot400}{m + 1/2}$:
$2320$, $773$, $464$, $331$ nm… La única visible es $464$ nm: la mancha se ve azul.

## 6. Difracción

Cada punto de un frente de onda actúa como fuente de ondas secundarias (principio de Huygens-Fresnel); tras una abertura, la suma de todas
ellas produce la **difracción**.

**Una rendija** de anchura $a$: los mínimos están en $a\sin\theta = m\lambda$ ($m = \pm1, \pm2, \dots$). El máximo central, entre $\theta = \pm\lambda/a$, mide
en una pantalla a distancia $L$ unos $2\lambda L/a$: cuanto más estrecha la rendija, más se abre la luz.

**Abertura circular** de diámetro $D$: el primer mínimo está en $\sin\theta = 1{,}22\,\lambda/D$ (el $1{,}22$ es el primer cero de la función de Bessel $J_1$,
$3{,}832$, dividido entre $\pi$). Dos estrellas se distinguen si sus imágenes están separadas al menos ese ángulo (**criterio de Rayleigh**): el detalle
que ve un telescopio, una cámara o el ojo está limitado por la difracción. Por eso los telescopios son grandes y los microscopios ópticos no ven
detalles mucho menores que media longitud de onda.

**Redes de difracción.** Con $N$ rendijas separadas $d$, los máximos principales están en $d\sin\theta = m\lambda$, como en la doble rendija, pero mucho
más **estrechos** (su anchura disminuye como $1/N$). Así una red separa longitudes de onda muy cercanas: es el corazón de los espectrómetros. El
orden máximo visible es el mayor $m$ con $m\lambda < d$.

## 7. Polarización

En una onda transversal, la dirección de oscilación de $\mathbf E$ es su **polarización**. La luz del Sol o de una bombilla es **no polarizada**
(direcciones al azar). Un polarizador ideal deja pasar la componente paralela a su eje: la luz no polarizada sale con la mitad de intensidad, y
una luz ya polarizada que forma un ángulo $\theta$ con el eje sale con

$$
I = I_0\cos^2\theta \qquad\text{(ley de Malus).}
$$

Dos polarizadores cruzados no dejan pasar nada; uno intermedio a $45^\circ$ entre ellos deja pasar $I_0/8$ de la luz no polarizada inicial.

La reflexión también polariza: con el **ángulo de Brewster** $\tan\theta_B = n_2/n_1$, la luz reflejada sale totalmente polarizada paralela a la
superficie (y el rayo reflejado y el refractado forman $90^\circ$). Las gafas de sol polarizadas eliminan los reflejos del agua y del asfalto; las
pantallas LCD controlan el brillo de cada píxel girando la polarización entre dos polarizadores.

## 8. Óptica geométrica avanzada

**Principio de Fermat.** La luz sigue entre dos puntos un camino de **tiempo estacionario** (normalmente mínimo). Para ir de un punto del aire a
uno del agua, el tiempo $\frac{\sqrt{x^2 + a^2}}{c} + \frac{n\sqrt{(d - x)^2 + b^2}}{c}$ es mínimo cuando su derivada respecto a $x$ se anula:
$\frac{x}{\sqrt{x^2 + a^2}} = n\frac{d - x}{\sqrt{(d - x)^2 + b^2}}$, que es exactamente $\sin\theta_1 = n\sin\theta_2$: **la ley de Snell sale de Fermat**. La reflexión
(ángulos iguales) sale igual. Feynman explica en sus lecciones por qué la luz «elige» ese camino: los caminos vecinos tardan casi lo mismo y sus
contribuciones se suman en fase.

**Lentes.** Una lente delgada de índice $n$ con radios $R_1$ y $R_2$ (positivos si el centro de curvatura está del lado de salida) tiene focal
(**ecuación del fabricante de lentes**)

$$
\frac1f = (n - 1)\left(\frac1{R_1} - \frac1{R_2}\right),
$$

y forma imágenes según $\frac1{d_o} + \frac1{d_i} = \frac1f$, con aumento lateral $m = -d_i/d_o$ (negativo: imagen invertida). Con **varias lentes**, la imagen
de la primera es el objeto de la segunda, y los aumentos se multiplican.

**Matrices de rayos.** En aproximación paraxial, un rayo se describe por su altura $y$ y su ángulo $\alpha$, y cada elemento óptico es una matriz
$2\times2$: propagarse una distancia $d$ es $\begin{pmatrix}1 & d\\ 0 & 1\end{pmatrix}$ y atravesar una lente delgada,
$\begin{pmatrix}1 & 0\\ -1/f & 1\end{pmatrix}$. El sistema completo es el producto de las matrices en orden; la imagen está donde el elemento $B$ de la
matriz total se anula, y entonces $A$ es el aumento. Así se diseñan los objetivos de las cámaras.

**Instrumentos.** Un telescopio con objetivo de focal $f_o$ y ocular $f_e$ tiene aumento angular $f_o/f_e$; un microscopio multiplica el aumento del
objetivo por el del ocular. **Fibras ópticas**: un núcleo de índice $n_1$ rodeado de un revestimiento $n_2 < n_1$ guía por reflexión total la luz que
entra con un ángulo menor que $\theta_{\max}$, con $\sin\theta_{\max} = \sqrt{n_1^2 - n_2^2}$ (la **apertura numérica**).

**Ejemplo resuelto 2.** Una lupa de $f = 5$ cm con el objeto a $4$ cm: $\frac1{d_i} = \frac15 - \frac14 = -\frac1{20}$, $d_i = -20$ cm (imagen virtual del mismo lado),
$m = -(-20)/4 = 5$: derecha y cinco veces mayor.

## 9. Comprobar con un programa

```python
import cmath
import math

# Doble rendija por suma de fasores: separación de franjas λL/d.
lam, d, L = 500e-9, 0.25e-3, 1.5
def intensidad(y):
    r1 = math.hypot(L, y - d / 2)
    r2 = math.hypot(L, y + d / 2)
    return abs(cmath.exp(2j * math.pi * r1 / lam) + cmath.exp(2j * math.pi * r2 / lam)) ** 2

ys = [i * 1e-6 for i in range(0, 10000)]
maximos = [y for a, y, b in zip(ys, ys[1:], ys[2:]) if intensidad(y) > intensidad(a) and intensidad(y) >= intensidad(b)]
assert abs((maximos[1] - maximos[0]) - lam * L / d) < 2e-6

# Ley de Malus con tres polarizadores: I0/8.
def sale(angulo_luz, ejes):
    ex, ey = math.cos(angulo_luz), math.sin(angulo_luz)
    for eje in ejes:
        ux, uy = math.cos(eje), math.sin(eje)
        p = ex * ux + ey * uy
        ex, ey = p * ux, p * uy
    return ex * ex + ey * ey

n = 10_000
media = sum(sale(math.pi * k / n, [0, math.pi / 4, math.pi / 2]) for k in range(n)) / n
assert abs(media - 1 / 8) < 1e-9

# Ejemplo resuelto 2 con matrices de rayos: lupa de f = 5 cm, objeto a 4 cm.
def mult(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(2)) for j in range(2)] for i in range(2)]

lente = [[1, 0], [-1 / 5, 1]]
tramo = lambda dist: [[1, dist], [0, 1]]
M = mult(lente, tramo(4))                     # primero el tramo, luego la lente
di = -M[0][1] / M[1][1]                       # distancia a la que B se anula tras la lente
assert abs(di - (-20)) < 1e-12
```

## 10. Errores típicos

- Usar $v = \lambda f$ con la frecuencia «del medio»: la frecuencia la fija la fuente y no cambia al cambiar de medio; cambian $v$ y $\lambda$.
- Olvidar el salto de fase de media onda en la reflexión sobre un medio de mayor índice (capas delgadas).
- Confundir la condición de **mínimos** de una rendija ($a\sin\theta = m\lambda$) con la de **máximos** de una red ($d\sin\theta = m\lambda$).
- Aplicar la ley de Malus a luz no polarizada (el primer polarizador la reduce a la mitad).
- Signos en lentes: $d_i < 0$ es una imagen virtual; el aumento negativo, una imagen invertida.
- Usar la aproximación de ángulos pequeños cuando el ángulo no es pequeño (redes de difracción).
- Sumar intensidades de ondas coherentes (se suman amplitudes) o amplitudes de ondas incoherentes (se suman intensidades).

## 11. Resumen

- Ecuación de ondas $y_{tt} = v^2y_{xx}$, $v = \sqrt{T/\mu}$; d'Alembert; modos $f_n = nv/2L$; potencia $\propto \omega^2A^2$.
- Batidos a $\lvert f_1 - f_2\rvert$; Doppler $f' = f\frac{v + v_o}{v - v_s}$.
- Onda EM: $E = cB$, $I = \tfrac12c\varepsilon_0E_0^2$; dispersión.
- Interferencia: diferencia de camino $m\lambda$; Young $\Delta y = \lambda L/d$; capa antirreflejante $t = \lambda/4n$.
- Difracción: rendija $a\sin\theta = m\lambda$; Rayleigh $1{,}22\lambda/D$; redes $d\sin\theta = m\lambda$.
- Malus $I_0\cos^2\theta$; Brewster $\tan\theta_B = n_2/n_1$.
- Fermat $\Rightarrow$ Snell; fabricante de lentes; matrices ABCD; apertura numérica $\sqrt{n_1^2 - n_2^2}$.

## Repaso: lo que debe quedarte dentro de un mes

1. $v = \sqrt{T/\mu}$ y los modos normales de una cuerda.
2. Interferencia: diferencia de camino y saltos de fase.
3. Rayleigh: el detalle mínimo de un instrumento es $1{,}22\lambda/D$.
4. Malus y Brewster.
5. Snell sale del principio de Fermat; con varias lentes, la imagen de una es el objeto de la siguiente.

## Siguiente

[[fis-electromagnetismo]] (las ecuaciones de Maxwell completas y la radiación), [[fis-mecanica-cuantica]] (la función de onda) e
[[ing-senales-sistemas]] (Fourier: toda señal como suma de ondas).
