---
id: mat-geometria-basica
title: "Geometría básica: figuras, Pitágoras y semejanza"
area: matematicas
trunk_level: 0
prerequisites: [mat-algebra-basica]
academic_sources:
  - "Kiselev, A. P. Kiselev's Geometry, Book I: Planimetry (trad. de A. Givental). Sumizdat, 2006."
  - "Euclides. Elementos, libro I (rectas paralelas, suma de ángulos de un triángulo, teorema de Pitágoras) y libro VI (semejanza y teorema de Tales). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/"
  - "Gelfand, I. M.; Shen, A. Algebra. Birkhäuser, 1993 (uso del álgebra para demostrar propiedades geométricas)."
hints:
  - "Concepto: casi todo se reduce a tres herramientas: la suma de los ángulos de un triángulo (180°), el teorema de Pitágoras y la semejanza (razones de lados iguales). Para contar o medir, divide la figura en triángulos y rectángulos, o completa la figura hasta una más simple y resta."
  - "Herramienta: dibuja siempre la figura y escribe los datos en ella; comprueba cada resultado con una segunda vía (otra fórmula, una descomposición distinta, o coordenadas). En Python, `math.hypot(dx, dy)` da la distancia y `math.pi` el número pi."
  - "Documentación oficial: docs.python.org/3/library/math.html (hypot, sqrt, pi); Kiselev, capítulos sobre triángulos, polígonos y semejanza; Euclides, Elementos I y VI."
exercises:
  - id: angulos-triangulo
    tier: 1
    prompt: |
      En un triángulo, dos ángulos miden $47^\circ$ y $68^\circ$. ¿Cuánto mide el tercero, en grados? Respuesta: un número.
    answers: ["sha256:108c995b953c8a35561103e2014cf828eb654a99e310f87fab94c2f4b7d2a04f"]
  - id: hipotenusa
    tier: 1
    prompt: |
      Un triángulo rectángulo tiene catetos de $9$ y $12$ cm. ¿Cuánto mide la hipotenusa, en cm? Respuesta: un número.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: area-trapecio
    tier: 1
    prompt: |
      Un trapecio tiene bases de $8$ y $14$ cm y altura $5$ cm. ¿Cuál es su área, en cm$^2$? Respuesta: un número.
    answers: ["sha256:02d20bbd7e394ad5999a4cebabac9619732c343a4cac99470c03e23ba2bdc2bc"]
  - id: lados-por-angulos
    tier: 2
    prompt: |
      La suma de los ángulos interiores de un polígono convexo es $1980^\circ$. ¿Cuántos lados tiene? Respuesta: un entero.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: diagonales
    tier: 2
    prompt: |
      ¿Cuántas diagonales tiene un polígono convexo de $20$ lados? Respuesta: un entero.
    answers: ["sha256:734d0759cdb4e0d0a35e4fd73749aee287e4fdcc8648b71a8d6ed591b7d4cb3f"]
  - id: altura-arbol
    tier: 2
    prompt: |
      Una persona de $1{,}8$ m proyecta una sombra de $2{,}4$ m en el mismo momento en que un árbol proyecta una sombra de $12$ m.
      ¿Qué altura tiene el árbol, en metros? Respuesta: un número.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: volumen-cilindro
    tier: 2
    prompt: |
      Un cilindro tiene radio $5$ cm y altura $12$ cm. Su volumen es $V = k\pi$ cm$^3$. ¿Cuánto vale $k$? Respuesta: un entero.
    answers: ["sha256:983bd614bb5afece5ab3b6023f71147cd7b6bc2314f9d27af7422541c6558389"]
  - id: distancia-puntos
    tier: 2
    prompt: |
      ¿Cuál es la distancia entre los puntos $(-3, 2)$ y $(5, -4)$? Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: area-heron
    tier: 2
    prompt: |
      Un triángulo tiene lados de $13$, $14$ y $15$ cm. ¿Cuál es su área, en cm$^2$? Respuesta: un número.
    answers: ["sha256:44c8031cb036a7350d8b9b8603af662a4b9cdbd2f96e8d5de5af435c9c35da69"]
  - id: volumen-semejantes
    tier: 2
    prompt: |
      Dos conos son semejantes con razón de semejanza $3 : 5$. El menor tiene un volumen de $54$ cm$^3$. ¿Cuál es el volumen del mayor,
      en cm$^3$? Respuesta: un número.
    answers: ["sha256:1e472b39b105d349bcd069c4a711b44a2fffb8e274714bb07ecfff69a9a7f67b"]
  - id: vueltas-rueda
    tier: 3
    prompt: |
      Una rueda de bicicleta tiene un radio de $0{,}35$ m. ¿Cuántas vueltas **completas** da al recorrer $1$ km sin deslizar?
      Respuesta: un entero.
    answers: ["sha256:48f89b630677c2cbb70e2ba05bf7a3633294e368a45bdc2c7df9d832f9e0c941"]
  - id: ternas-pitagoricas
    tier: 3
    prompt: |
      ¿Cuántos triángulos rectángulos con **todos sus lados enteros** tienen catetos $a < b \le 50$? (Cada par $(a, b)$ cuenta una vez.)
      Respuesta: un entero.
    answers: ["sha256:5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca"]
  - id: escalera
    tier: 3
    prompt: |
      Una escalera de $6{,}5$ m de largo se apoya en una pared vertical con el pie a $2{,}5$ m de ella. ¿A qué altura de la pared llega su extremo
      superior, en metros? Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: diagonal-ortoedro
    tier: 3
    prompt: |
      Un ortoedro (caja) mide $2 \times 3 \times 6$ cm. ¿Cuánto mide su diagonal espacial (de una esquina a la opuesta), en cm?
      Respuesta: un número.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: area-hexagono
    tier: 3
    prompt: |
      El área de un hexágono regular de lado $4$ cm es $k\sqrt{3}$ cm$^2$. ¿Cuánto vale $k$? Respuesta: un entero.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: poligono-regular
    tier: 3
    prompt: |
      Cada ángulo interior de un polígono regular mide $156^\circ$. ¿Cuántos lados tiene? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
---

# Geometría básica: figuras, Pitágoras y semejanza

La geometría es la ciencia de la forma y del espacio. Es donde nació la **demostración** (Euclides, hacia el
300 a. C.) y sigue siendo el lugar donde mejor se aprende a razonar: cada afirmación se apoya en otras ya
probadas. Aquí se conserva esa tradición, y a la vez se usa el álgebra del nodo anterior para
calcular longitudes, ángulos, áreas y volúmenes que sirven a quien diseña, construye, programa gráficos o
simplemente quiere saber cuánta pintura comprar.

## Objetivos

Al terminar sabrás:

1. Calcular y demostrar relaciones entre ángulos (triángulos, paralelas, polígonos).
2. Usar el teorema de Pitágoras y su recíproco, y calcular distancias en el plano.
3. Reconocer la semejanza y aplicar el teorema de Tales para medir lo inaccesible.
4. Calcular áreas y perímetros de triángulos, cuadriláteros, polígonos regulares y círculos.
5. Calcular volúmenes y áreas de prismas, cilindros, pirámides, conos y esferas.
6. Controlar cómo cambian longitudes, áreas y volúmenes al escalar, y elegir bien las unidades.

> [!question] Test de entrada
> 1. ¿Cuánto vale el área de un rectángulo de $6 \times 4$? 2. ¿Cuántos grados suman los ángulos de un triángulo?
> 3. ¿Cuánto mide la hipotenusa de un triángulo rectángulo con catetos $3$ y $4$?
>
> Respuestas: $24$; $180^\circ$; $5$.

## 1. Para qué sirve

- **Construcción y diseño**: planos, escaleras, tejados, cuántos azulejos o cuánta pintura hacen falta.
- **Medir sin alcanzar**: la altura de un edificio por su sombra, el ancho de un río, la distancia a una isla.
- **Informática**: gráficos 2D y 3D, videojuegos, mapas, detección de colisiones: todo es geometría con coordenadas.
- **Naturaleza y ciencia**: la forma de una gota, el tamaño de un planeta, la ley del cuadrado-cubo en biología.

## 2. Puntos, rectas y ángulos

Un **punto** no tiene tamaño; una **recta** se extiende sin fin en dos sentidos; un **segmento** es la parte entre dos
puntos y tiene **longitud**. Dos rectas son **paralelas** si no se cortan nunca, y **perpendiculares** si forman un
ángulo recto.

Un **ángulo** mide la abertura entre dos semirrectas con el mismo origen. Se mide en **grados**: una vuelta completa
son $360^\circ$, un ángulo **llano** $180^\circ$, uno **recto** $90^\circ$. Es **agudo** si es menor que $90^\circ$ y
**obtuso** si es mayor. Dos ángulos son **complementarios** si suman $90^\circ$ y **suplementarios** si suman $180^\circ$.

**Teorema (ángulos opuestos por el vértice).** Si dos rectas se cortan, los ángulos opuestos son iguales.
*Demostración.* Si $\alpha$ y $\beta$ son ángulos contiguos, $\alpha + \beta = 180^\circ$; el opuesto de $\alpha$, $\alpha'$,
también cumple $\alpha' + \beta = 180^\circ$. Restando, $\alpha = \alpha'$. $\blacksquare$

**Rectas paralelas cortadas por una transversal.** Los ángulos **correspondientes** son iguales, y también los
**alternos internos**. Esta propiedad es equivalente al **postulado de las paralelas** de Euclides, la base de
toda la geometría de este nodo.

## 3. Triángulos

**Teorema (suma de los ángulos).** Los ángulos de un triángulo suman $180^\circ$.

*Demostración.* Por un vértice se traza la paralela al lado opuesto. Los dos ángulos que se forman a ambos lados
son alternos internos con los otros dos ángulos del triángulo, y junto al tercero llenan un ángulo llano.
$\blacksquare$

**Ejemplo resuelto:** los ángulos de un triángulo miden $38^\circ$, $2x$ y $x + 22^\circ$. Entonces
$38 + 2x + x + 22 = 180$, $3x = 120$, $x = 40^\circ$: los ángulos son $38^\circ$, $80^\circ$ y $62^\circ$.
Comprobación: $38 + 80 + 62 = 180$. $\checkmark$

**Desigualdad triangular:** cada lado es menor que la suma de los otros dos (el camino recto es el más corto).
Por eso no existe un triángulo de lados $2$, $3$ y $7$.

**Clasificación:** por lados (equilátero, isósceles, escaleno) y por ángulos (acutángulo, rectángulo, obtusángulo).

**Congruencia.** Dos triángulos son iguales (congruentes) si tienen iguales **tres lados** (LLL), **dos lados y el ángulo
que forman** (LAL) o **un lado y los dos ángulos adyacentes** (ALA).

**Área.** $A = \dfrac{b\,h}{2}$, con $h$ la altura sobre la base $b$.
*Justificación.* Un paralelogramo de base $b$ y altura $h$ tiene área $bh$ (se corta un triángulo de un extremo y se
pega en el otro para formar un rectángulo), y una diagonal lo parte en dos triángulos iguales. $\blacksquare$

### El teorema de Pitágoras

**Teorema.** En un triángulo rectángulo de catetos $a, b$ e hipotenusa $c$: $a^2 + b^2 = c^2$.

*Demostración.* Se construye un cuadrado de lado $a + b$ con cuatro copias del triángulo colocadas en las esquinas;
en el centro queda un cuadrado inclinado de lado $c$. Calculando el área total de dos maneras:

$$
(a + b)^2 = c^2 + 4\cdot\frac{ab}{2} \;\Longrightarrow\; a^2 + 2ab + b^2 = c^2 + 2ab \;\Longrightarrow\; a^2 + b^2 = c^2 . \;\blacksquare
$$

**Recíproco.** Si $a^2 + b^2 = c^2$, el triángulo es rectángulo. Es lo que usan los albañiles con la terna $3, 4, 5$
(o $6, 8, 10$) para comprobar una esquina a escuadra.

**Ejemplo resuelto (pantallas).** Un televisor 16:9 de $55$ pulgadas tiene $55$ pulgadas de **diagonal**. Si el ancho
es $16k$ y el alto $9k$, entonces $(16k)^2 + (9k)^2 = 55^2$, $337k^2 = 3025$, $k \approx 2{,}996$. Ancho $\approx 47{,}9$
pulgadas, alto $\approx 27{,}0$ pulgadas. Comprobación: $47{,}9^2 + 27{,}0^2 \approx 2294 + 729 = 3023 \approx 55^2$. $\checkmark$

**Ternas pitagóricas.** Hay infinitos triángulos rectángulos con lados enteros. Por la fórmula de Euclides, para
$m > n > 0$: $(m^2 - n^2,\ 2mn,\ m^2 + n^2)$ (con $m, n$ coprimos y de distinta paridad se obtienen todas las
**primitivas**; el resto son múltiplos): $m = 2, n = 1$ da $3, 4, 5$; $m = 3, n = 2$ da $5, 12, 13$.

**Herón.** Si el triángulo tiene lados $a, b, c$ y semiperímetro $s = \frac{a + b + c}{2}$, su área es
$\sqrt{s(s - a)(s - b)(s - c)}$. Para $13, 14, 15$: $s = 21$ y $\sqrt{21\cdot 8\cdot 7\cdot 6} = \sqrt{7056} = 84$.
Comprobación con la altura sobre el lado $14$: $h = 12$ (por Pitágoras, $13^2 - 5^2 = 144$) y
$\frac{14\cdot 12}{2} = 84$. $\checkmark$

## 4. Semejanza y teorema de Tales

Dos figuras son **semejantes** si tienen la misma forma y distinto tamaño: ángulos iguales y lados proporcionales,
con una **razón de semejanza** $k$. Dos triángulos son semejantes si tienen **dos ángulos iguales** (criterio AA).

**Teorema de Tales.** Si una paralela a $BC$ corta a los lados $AB$ y $AC$ de un triángulo en $D$ y $E$, entonces
$\dfrac{AD}{DB} = \dfrac{AE}{EC}$.

*Demostración con áreas.* Los triángulos $ADE$ y $BDE$ comparten la altura desde $E$, luego
$\frac{[ADE]}{[BDE]} = \frac{AD}{DB}$; análogamente $\frac{[ADE]}{[CDE]} = \frac{AE}{EC}$. Pero $[BDE] = [CDE]$ (misma
base $DE$ y misma altura, por ser $DE \parallel BC$). Igualando los cocientes se obtiene el resultado. $\blacksquare$

**Ejemplo resuelto.** Con $AD = 3$, $DB = 2$ y $AE = 4{,}5$: $\frac{3}{2} = \frac{4{,}5}{EC}$ y $EC = 3$.

**Medir lo inaccesible.** Una persona de $1{,}6$ m proyecta una sombra de $2$ m cuando una torre proyecta $25$ m.
Los triángulos (sol, objeto, sombra) son semejantes porque los rayos son paralelos y los ángulos con el suelo
coinciden: $\frac{h}{25} = \frac{1{,}6}{2}$, $h = 20$ m.

### Cómo escalan longitudes, áreas y volúmenes

Si la razón de semejanza es $k$: las **longitudes** se multiplican por $k$, las **áreas** por $k^2$ y los
**volúmenes** por $k^3$ (visto en el nodo de proporcionalidad). Dos conos semejantes con $k = 2$: la superficie es
$4$ veces mayor, el volumen $8$ veces. Por eso un insecto puede cargar muchas veces su peso y un elefante no: el
peso crece con $k^3$ y la sección de los músculos solo con $k^2$.

## 5. Cuadriláteros y polígonos

**Áreas** (con $b$ base y $h$ altura):

| Figura | Área |
|---|---|
| rectángulo | $b\,h$ |
| paralelogramo | $b\,h$ |
| triángulo | $\frac{b\,h}{2}$ |
| rombo | $\frac{D\,d}{2}$ (diagonales) |
| trapecio (bases $B$, $b$) | $\frac{(B + b)\,h}{2}$ |

El **trapecio** se justifica partiéndolo en un rectángulo y dos triángulos, o duplicándolo para formar un
paralelogramo de base $B + b$.

**Polígonos.** Un polígono de $n$ lados:

- **Suma de ángulos interiores** $= (n - 2)\cdot 180^\circ$. *Demostración (convexo).* Desde un vértice se trazan
  $n - 3$ diagonales, que lo dividen en $n - 2$ triángulos. $\blacksquare$
- **Suma de ángulos exteriores** $= 360^\circ$: cada par interior-exterior suma $180^\circ$, luego la suma exterior
  es $180n - (n - 2)180 = 360$.
- **Diagonales** $= \dfrac{n(n - 3)}{2}$: cada vértice lanza $n - 3$ y cada diagonal se cuenta dos veces.
- Si es **regular** (lados y ángulos iguales), cada ángulo interior mide $\dfrac{(n - 2)180^\circ}{n}$; el hexágono tiene
  $120^\circ$, el octógono $135^\circ$.
- **Área de un polígono regular** $= \dfrac{P\cdot a}{2}$, con $P$ el perímetro y $a$ la **apotema** (distancia del centro a un
  lado). Un hexágono regular de lado $\ell$ se divide en $6$ triángulos equiláteros: área $= 6\cdot\frac{\sqrt{3}}{4}\ell^2$.

## 6. La circunferencia y el círculo

La **circunferencia** es el conjunto de puntos a distancia $r$ (el **radio**) de un centro; el **círculo** es la región
que encierra. El número $\pi$ se **define** como el cociente entre la longitud de la circunferencia y su diámetro, el
mismo para todas las circunferencias (todas son semejantes):

$$
L = 2\pi r, \qquad A = \pi r^2, \qquad \pi \approx 3{,}14159\ldots
$$

Arquímedes demostró $3\tfrac{10}{71} < \pi < 3\tfrac{1}{7}$ con polígonos inscritos y circunscritos de hasta $96$ lados;
$\pi$ es **irracional**: no es una fracción y su desarrollo decimal no es periódico.

*Por qué el área es $\pi r^2$.* Si se corta el círculo en muchos sectores iguales y se reordenan alternados, la
figura se parece a un rectángulo de base $\frac{L}{2} = \pi r$ y altura $r$; su área es $\pi r\cdot r$.

Un **sector** de ángulo central $\theta$ ocupa la fracción $\frac{\theta}{360^\circ}$ del círculo: área
$\frac{\theta}{360}\pi r^2$ y longitud de arco $\frac{\theta}{360}\cdot 2\pi r$.

**Ejemplo (pizzas).** Una pizza de $30$ cm de diámetro tiene $\pi\cdot 15^2 \approx 707$ cm$^2$; **dos** pizzas de
$20$ cm suman $2\pi\cdot 10^2 \approx 628$ cm$^2$. Una grande es más pizza que dos medianas: el área escala con el
cuadrado del diámetro.

## 7. Cuerpos geométricos

| Cuerpo | Volumen | Área |
|---|---|---|
| prisma / cilindro | $A_{\text{base}}\cdot h$ | lateral + $2A_{\text{base}}$ |
| pirámide / cono | $\frac{1}{3}A_{\text{base}}\cdot h$ | lateral + $A_{\text{base}}$ |
| esfera | $\frac{4}{3}\pi r^3$ | $4\pi r^2$ |

El factor $\frac{1}{3}$ de pirámides y conos (frente al prisma o cilindro de la misma base y altura) es
sorprendente y se demuestra con el **principio de Cavalieri** (dos cuerpos con la misma sección a cada altura tienen el
mismo volumen) o, después, con el cálculo integral.

**Ejemplo (una lata).** $r = 3{,}3$ cm y $h = 11{,}5$ cm: $V = \pi\cdot 3{,}3^2\cdot 11{,}5 \approx 393$ cm$^3 \approx
0{,}39$ L. **Ejemplo (la Tierra).** Con $r = 6371$ km: área $4\pi r^2 \approx 5{,}10\cdot 10^8$ km$^2$; volumen
$\frac{4}{3}\pi r^3 \approx 1{,}08\cdot 10^{12}$ km$^3$.

**Poliedros y la fórmula de Euler.** Para un poliedro convexo con $V$ vértices, $E$ aristas y $F$ caras,
$V - E + F = 2$. Cubo: $8 - 12 + 6 = 2$; tetraedro: $4 - 6 + 4 = 2$. Hay solo **cinco poliedros regulares** (tetraedro,
cubo, octaedro, dodecaedro e icosaedro).

**Diagonal espacial de un ortoedro** $a \times b \times c$: dos aplicaciones de Pitágoras dan
$\sqrt{a^2 + b^2 + c^2}$.

## 8. Geometría con coordenadas

En el plano con ejes, un punto es un par $(x, y)$. La **distancia** entre $(x_1, y_1)$ y $(x_2, y_2)$ es Pitágoras
sobre el triángulo rectángulo de catetos $\Delta x$ y $\Delta y$:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$

El **punto medio** es $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$. Entre $(1, 2)$ y $(4, 6)$: $d = 5$ y
punto medio $(2{,}5;\ 4)$. Las coordenadas permiten **demostrar con álgebra** lo que Euclides demostraba con
dibujos, y son la base de toda la geometría en ordenadores.

## 9. Medir bien

- **Unidades de área y volumen**: $1\ \text{m}^2 = 10\,000\ \text{cm}^2$ (no $100$) y $1\ \text{m}^3 = 10^6\ \text{cm}^3$; $1$ litro
  $= 1\ \text{dm}^3 = 1000\ \text{cm}^3$.
- **Cifras significativas**: no des más decimales de los que tienen los datos.
- **Perímetro no es área**: el perímetro se mide en unidades de longitud; el área, en unidades al cuadrado.
- **Estima antes**: un resultado de $2000$ cm$^2$ para una hoja de papel ($21 \times 29{,}7$ cm) debe hacerte dudar.

## 10. Errores típicos

- Olvidar que la hipotenusa es el lado **opuesto al ángulo recto** y el **mayor**.
- Aplicar Pitágoras a un triángulo que no es rectángulo.
- Confundir el radio con el diámetro en $\pi r^2$.
- Multiplicar por $k$ el área al escalar por $k$ (es $k^2$).
- Medir la altura sobre un lado inclinado, en lugar de perpendicular a la base.
- Mezclar unidades (metros con centímetros) en una fórmula.

## Repaso: lo que debe quedarte dentro de un mes

1. Los ángulos de un triángulo suman $180^\circ$; de un polígono de $n$ lados, $(n - 2)180^\circ$.
2. $a^2 + b^2 = c^2$ en triángulos rectángulos, y recíproco.
3. Semejanza: lados proporcionales; Tales; áreas $\times k^2$, volúmenes $\times k^3$.
4. $L = 2\pi r$, $A = \pi r^2$; $V_{\text{esfera}} = \frac{4}{3}\pi r^3$; pirámide $= \frac{1}{3}$ del prisma.
5. Distancia: Pitágoras con coordenadas.

## Siguiente

El nodo de funciones básicas lleva todo esto a las **gráficas**: relaciones entre magnitudes dibujadas en el plano de
coordenadas.
