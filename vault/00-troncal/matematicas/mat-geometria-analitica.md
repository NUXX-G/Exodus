---
id: mat-geometria-analitica
title: "Geometría analítica: rectas, vectores, circunferencias y cónicas"
area: matematicas
trunk_level: 7
prerequisites: [mat-geometria-basica, mat-algebra-secundaria, mat-trigonometria]
academic_sources:
  - "Gelfand, I. M.; Glagoleva, E. G.; Kirillov, A. A. The Method of Coordinates. Birkhäuser, 1990."
  - "Stewart, J.; Redlin, L.; Watson, S. Precalculus: Mathematics for Calculus, 7ª ed. Cengage Learning, 2016."
  - "Apolonio de Pérgamo. Cónicas (siglo III a. C.): origen de la parábola, la elipse y la hipérbola como secciones de un cono."
hints:
  - "Concepto: la geometría analítica traduce figuras en ecuaciones y propiedades geométricas en cálculos. Distancia entre puntos = Pitágoras; perpendicular = producto de pendientes −1 o producto escalar cero; que una recta corte, sea tangente o no corte a una circunferencia se decide con la distancia del centro a la recta (o con el discriminante)."
  - "Herramienta: comprueba cada resultado por una segunda vía (sustituir el punto en la ecuación, minimizar numéricamente una distancia, o dibujarlo con matplotlib). Para recuentos de puntos de la red, un doble bucle en Python."
  - "Documentación oficial: docs.python.org/3/library/math.html (hypot, atan2, acos); matplotlib.org (dibujo de rectas, circunferencias y cónicas); Gelfand-Glagoleva-Kirillov, capítulos sobre coordenadas en el plano y ecuaciones de curvas."
exercises:
  - id: distancia-punto-recta
    tier: 1
    prompt: |
      Calcula la distancia del punto $(1, 2)$ a la recta $3x + 4y - 10 = 0$. Respuesta: un número.
    answers: ["sha256:44896b09365746b5f7167ee4d64988a38f7f4628803cbf86224e74eeb7c69e9d"]
  - id: radio-de-circunferencia
    tier: 1
    prompt: |
      ¿Cuál es el radio de la circunferencia $x^2 + y^2 - 6x + 4y - 12 = 0$? (Completa cuadrados.) Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: recta-perpendicular
    tier: 1
    prompt: |
      ¿Cuál es la pendiente de una recta **perpendicular** a $y = -\frac{2}{3}x + 1$? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
  - id: angulo-entre-vectores
    tier: 2
    prompt: |
      Calcula el ángulo entre los vectores $\vec u = (1, 2)$ y $\vec v = (3, 1)$, con el producto escalar. Respuesta: grados, un número.
    answers: ["sha256:811786ad1ae74adfdd20dd0372abaaebc6246e343aebd01da0bfc4c02bf0106c"]
  - id: interseccion-de-rectas
    tier: 2
    prompt: |
      Halla el punto de corte de las rectas $2x + 3y = 12$ y $x - y = 1$. Respuesta en la forma «x;y».
    answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
  - id: distancia-entre-paralelas
    tier: 2
    prompt: |
      Calcula la distancia entre las rectas paralelas $3x - 4y + 5 = 0$ y $3x - 4y - 10 = 0$. Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: circunferencia-por-tres-puntos
    tier: 2
    prompt: |
      La circunferencia que pasa por $(0, 0)$, $(4, 0)$ y $(0, 2)$ tiene radio $r$. ¿Cuánto vale $r^2$? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: tangente
    tier: 2
    prompt: |
      La recta tangente a la circunferencia $x^2 + y^2 = 25$ en el punto $(3, 4)$ corta al eje $y$ en un punto. ¿Cuál es su ordenada? (Pista: la tangente es perpendicular al radio.)
      Respuesta: un número.
    answers: ["sha256:114662d43e5a7e5a16f8ea2bac33f6f3feb7daa27a7ef26629ed5d29a75ea2c0"]
  - id: recta-y-circunferencia
    tier: 2
    prompt: |
      La recta $y = x + 1$ corta a la circunferencia $x^2 + y^2 = 13$ en dos puntos. ¿Cuánto suman sus coordenadas $y$? Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: foco-de-la-parabola
    tier: 2
    prompt: |
      La parábola $x^2 = 12y$ tiene su foco en $(0, p)$. ¿Cuánto vale $p$? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: distancia-focal
    tier: 3
    prompt: |
      La elipse $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$ tiene dos focos. ¿Cuál es la distancia entre ellos? Respuesta: un número.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: area-de-la-elipse
    tier: 3
    prompt: |
      El área de la elipse $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$ es $k\pi$. ¿Cuánto vale $k$? Respuesta: un número.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: hiperbola
    tier: 3
    prompt: |
      En la hipérbola $\dfrac{x^2}{9} - \dfrac{y^2}{16} = 1$, la distancia $c$ del centro a cada foco cumple $c^2 = a^2 + b^2$. ¿Cuánto vale $c$? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: trilateracion
    tier: 3
    prompt: |
      Tres balizas en $(0, 0)$, $(10, 0)$ y $(0, 10)$ miden las distancias a un receptor: los cuadrados de las distancias son $25$, $65$ y $45$ respectivamente. ¿Dónde está el receptor
      (primer cuadrante)? Respuesta en la forma «x;y».
    answers: ["sha256:2b2ae0ddb1ad07ad30f68dbf8869395377eb9bc264d7da773d28f5934f0f5e59"]
  - id: area-con-determinante
    tier: 3
    prompt: |
      Calcula el área del triángulo de vértices $(1, 1)$, $(7, 2)$ y $(4, 8)$. Respuesta: un número.
    answers: ["sha256:553beed538e6504062d16e13f2a3cd449b8a58d17c36c1bde1f043bd3c205606"]
  - id: puntos-de-la-red
    tier: 3
    prompt: |
      ¿Cuántos puntos de **coordenadas enteras** $(x, y)$ cumplen $x^2 + y^2 \le 100$ (dentro o sobre la circunferencia de radio $10$)? Respuesta: un entero.
    answers: ["sha256:8d1ede4f889e0ed6f0823d8c1821905b9de37a0f851dc270df0dbf72b3c93641"]
---

# Geometría analítica: rectas, vectores, circunferencias y cónicas

En 1637 Descartes y Fermat tuvieron la misma idea: **poner números a los puntos**. Con coordenadas, una curva se convierte en una ecuación y un problema geométrico en un problema de
álgebra. Esa traducción es la base del cálculo, de los gráficos por ordenador, de la robótica ([[rob-cinematica]]), del GPS y de casi toda la ingeniería. Este nodo la desarrolla
para el plano (con una mirada al espacio) y estudia las curvas que más aparecen: la recta, la circunferencia y las **cónicas**.

## Objetivos

Al terminar sabrás:

1. Calcular distancias, puntos medios, pendientes y ángulos con coordenadas.
2. Escribir la ecuación de una recta de varias formas, y estudiar posiciones relativas, intersecciones y distancias punto-recta.
3. Operar con **vectores** del plano y usar el **producto escalar**.
4. Escribir y analizar circunferencias, y estudiar recta y circunferencia (secante, tangente, exterior).
5. Reconocer, a partir de su definición geométrica y de su ecuación, la parábola, la elipse y la hipérbola.
6. Aplicar estas ideas a trilateración, órbitas y problemas de diseño.

> [!question] Test de entrada
> 1. ¿Cuál es la distancia entre $(0, 0)$ y $(3, 4)$? 2. ¿Cuál es la pendiente de la recta por $(1, 2)$ y $(3, 6)$? 3. ¿Qué punto está en medio entre $(2, 4)$ y $(6, 8)$?
>
> Respuestas: $5$; $2$; $(4, 6)$.

## 1. Para qué sirve

- **GPS y localización**: la posición se obtiene intersectando circunferencias (esferas en 3D) centradas en satélites o balizas.
- **Gráficos y videojuegos**: detectar colisiones, calcular qué se ve y qué no.
- **Robótica y visión**: ángulos, distancias y proyecciones de un brazo o de una cámara.
- **Astronomía e ingeniería**: órbitas elípticas, antenas parabólicas, arcos y puentes.

## 2. Distancia, punto medio y pendiente

En el plano con ejes, un punto es $(x, y)$. La **distancia** entre $P_1 = (x_1, y_1)$ y $P_2 = (x_2, y_2)$ es Pitágoras sobre $\Delta x$ y $\Delta y$ (ver [[mat-geometria-basica]]):

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$

El **punto medio** es $\bigl(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\bigr)$. La **pendiente** del segmento es $m = \frac{y_2 - y_1}{x_2 - x_1}$ (si $x_1 \ne x_2$). Con coordenadas se **demuestra** con álgebra lo que
parecía solo geométrico: por ejemplo, un triángulo con vértices $A, B, C$ es rectángulo en $A$ si y solo si $|AB|^2 + |AC|^2 = |BC|^2$.

## 3. La recta

Formas equivalentes de la ecuación de una recta:

- **Explícita**: $y = mx + n$ (pendiente $m$, ordenada en el origen $n$).
- **Punto-pendiente**: $y - y_0 = m(x - x_0)$.
- **General**: $Ax + By + C = 0$. El vector $(A, B)$ es **normal** (perpendicular) a la recta y la pendiente es $-\frac{A}{B}$.
- **Paramétrica**: $(x, y) = (x_0, y_0) + t\,(v_1, v_2)$, con $\vec v$ un vector **director**; $t$ recorre la recta.

**Ejemplo resuelto:** la recta por $(1, 2)$ y $(4, 8)$ tiene $m = \frac{6}{3} = 2$ y ecuación $y - 2 = 2(x - 1)$, es decir $y = 2x$. La perpendicular a ella por $(0, 5)$ tiene pendiente $-\frac{1}{2}$:
$y = -\frac{x}{2} + 5$.

**Posiciones relativas.** Dos rectas son **paralelas** si tienen la misma pendiente (o coeficientes $A, B$ proporcionales), **perpendiculares** si $m_1 m_2 = -1$ (equivale a $A_1A_2 + B_1B_2 = 0$) y, si no, **se cortan** en un punto que se halla
resolviendo el **sistema** de sus dos ecuaciones (ver [[mat-algebra-basica]]). El **ángulo** $\theta$ entre dos rectas cumple $\tan\theta = \left|\dfrac{m_1 - m_2}{1 + m_1 m_2}\right|$: con pendientes $1$ y $3$, $\tan\theta = \frac{2}{4} = 0{,}5$ y $\theta \approx 26{,}57^\circ$.

### Distancia de un punto a una recta

$$
d(P_0, r) = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}} .
$$

*Idea de la demostración.* Si $Q = (x_1, y_1)$ es un punto cualquiera de la recta, la distancia es la longitud de la **proyección** de $\overrightarrow{QP_0}$ sobre el vector normal $(A, B)$:
$\frac{|(x_0 - x_1)A + (y_0 - y_1)B|}{\sqrt{A^2 + B^2}}$, y como $A x_1 + B y_1 = -C$ se obtiene la fórmula. $\blacksquare$
**Ejemplo:** distancia de $(4, -1)$ a $2x - y + 3 = 0$: $\frac{|8 + 1 + 3|}{\sqrt5} = \frac{12}{\sqrt5} \approx 5{,}37$. La **distancia entre dos paralelas** se calcula con un punto de una de ellas.

## 4. Vectores en el plano

Un **vector** $\vec u = (u_1, u_2)$ tiene módulo $|\vec u| = \sqrt{u_1^2 + u_2^2}$, dirección y sentido. Se suman por componentes y se multiplican por un escalar: $\vec u + \vec v = (u_1 + v_1,\, u_2 + v_2)$,
$k\vec u = (ku_1, ku_2)$. El vector de $P$ a $Q$ es $\overrightarrow{PQ} = Q - P$.

**Producto escalar:**

$$
\vec u\cdot\vec v = u_1 v_1 + u_2 v_2 = |\vec u|\,|\vec v|\cos\theta ,
$$

con $\theta$ el ángulo entre ellos.
*Demostración de la igualdad.* Por el teorema del coseno (ver [[mat-trigonometria]]) aplicado al triángulo de lados $\vec u$, $\vec v$ y $\vec u - \vec v$: $|\vec u - \vec v|^2 = |\vec u|^2 + |\vec v|^2 - 2|\vec u||\vec v|\cos\theta$.
Desarrollando el primer miembro en coordenadas, $|\vec u|^2 + |\vec v|^2 - 2(u_1v_1 + u_2v_2)$; igualando, sale el resultado. $\blacksquare$

**Consecuencias:** $\vec u \perp \vec v \iff \vec u\cdot\vec v = 0$; el ángulo es $\theta = \arccos\frac{\vec u\cdot\vec v}{|\vec u||\vec v|}$; la **proyección** de $\vec u$ sobre $\vec v$ vale $\frac{\vec u\cdot\vec v}{|\vec v|}$.
**Ejemplo:** $\vec u = (1, 2)$ y $\vec v = (3, 1)$ dan $\vec u\cdot\vec v = 5$, $|\vec u||\vec v| = \sqrt5\sqrt{10} = \sqrt{50}$ y $\cos\theta = \frac{5}{\sqrt{50}} = \frac{\sqrt2}{2}$: $\theta = 45^\circ$ (comprobación con
las pendientes: $\arctan 2 - \arctan\frac13 = 63{,}43^\circ - 18{,}43^\circ = 45^\circ$).

**Área de un triángulo** de vértices $A, B, C$: $\dfrac{1}{2}\left|(B - A)_x(C - A)_y - (C - A)_x(B - A)_y\right|$ (la mitad del valor absoluto de un determinante). Es la «fórmula del cordón de zapato» (*shoelace*) y se usa para calcular
el área de un terreno a partir de las coordenadas de sus esquinas.

## 5. La circunferencia

Es el conjunto de puntos a distancia $r$ de un centro $(a, b)$: $(x - a)^2 + (y - b)^2 = r^2$. Desarrollada, $x^2 + y^2 + Dx + Ey + F = 0$, que representa una circunferencia con centro $\left(-\frac D2, -\frac E2\right)$
y $r^2 = \frac{D^2 + E^2}{4} - F$ siempre que esto sea positivo (**completando cuadrados**).

**Ejemplo resuelto:** $x^2 + y^2 - 4x + 6y - 12 = 0$: $(x - 2)^2 + (y + 3)^2 = 12 + 4 + 9 = 25$; centro $(2, -3)$, radio $5$.

**Por tres puntos** no alineados pasa **una única** circunferencia: se sustituyen los puntos en $x^2 + y^2 + Dx + Ey + F = 0$ y se resuelve el sistema de tres ecuaciones.

### Recta y circunferencia

Se compara la distancia $d$ del centro a la recta con el radio: $d < r$, **secante** (dos puntos); $d = r$, **tangente** (uno); $d > r$, **exterior** (ninguno). Equivale al signo del discriminante al sustituir $y$ de la recta en la ecuación de la circunferencia.
La **tangente en un punto** es **perpendicular al radio** en ese punto. **Ejemplo:** la tangente a $x^2 + y^2 = 25$ en $(3, 4)$ es perpendicular al vector $(3, 4)$: $3x + 4y = 25$.
Una recta $y = x + k$ es tangente a $x^2 + y^2 = 8$ si $\frac{|k|}{\sqrt2} = 2\sqrt2$, es decir, $|k| = 4$.

## 6. Las cónicas

Al cortar un cono con un plano se obtienen la **elipse**, la **parábola** y la **hipérbola** (Apolonio, siglo III a. C.). Cada una tiene una definición como **lugar geométrico**, de la que sale su ecuación.

### Parábola

Puntos que equidistan de un punto (**foco**) y de una recta (**directriz**). Con foco $(0, p)$ y directriz $y = -p$: $\sqrt{x^2 + (y - p)^2} = y + p$, y elevando al cuadrado, $x^2 = 4py$.
La gráfica $y = ax^2$ del nodo de funciones es una parábola con $p = \frac{1}{4a}$. **Propiedad reflectora:** los rayos paralelos al eje se reflejan **todos hacia el foco**; por eso las antenas parabólicas, los
telescopios y los faros usan esta forma.

### Elipse

Puntos cuya **suma** de distancias a dos focos $F_1, F_2$ es constante, $2a$. Con focos en $(\pm c, 0)$ y $b^2 = a^2 - c^2$:

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 .
$$

Tiene semiejes $a$ (mayor) y $b$, **área** $\pi a b$, y **excentricidad** $e = \frac{c}{a} < 1$ (una circunferencia es $e = 0$). **Ejemplo:** $a = 13$, $b = 12$: $c = 5$, $e = \frac{5}{13}$. **Kepler:** los planetas describen
**elipses con el Sol en un foco**; la de la Tierra tiene $e \approx 0{,}017$ (casi una circunferencia) y la del cometa Halley $e \approx 0{,}97$ (muy alargada).

### Hipérbola

Puntos cuya **diferencia** (en valor absoluto) de distancias a dos focos es constante, $2a$:

$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 + b^2, \qquad \text{asíntotas: } y = \pm\frac{b}{a}x .
$$

Para $\frac{x^2}{9} - \frac{y^2}{16} = 1$: $c = 5$ y asíntotas $y = \pm\frac43 x$. Se usa para localizar una fuente por **diferencias de tiempo** de llegada (navegación hiperbólica, localización de sonidos).

**Clasificación por la excentricidad:** $e = 0$ circunferencia, $0 < e < 1$ elipse, $e = 1$ parábola, $e > 1$ hipérbola.

## 7. Trilateración: cómo funciona el GPS

Un receptor conoce la **distancia** a varios emisores en posiciones conocidas. En el plano, la posición está en la intersección de circunferencias. **Ejemplo resuelto:** balizas en $(0, 0)$, $(10, 0)$ y $(0, 10)$ con
distancias al cuadrado $25$, $65$ y $45$. Las ecuaciones son $x^2 + y^2 = 25$; $(x - 10)^2 + y^2 = 65$; $x^2 + (y - 10)^2 = 45$. **Restando** la primera de las otras se eliminan los cuadrados y quedan ecuaciones **lineales**:
$-20x + 100 = 40$, luego $x = 3$; $-20y + 100 = 20$, luego $y = 4$. Comprobación: $9 + 16 = 25$. $\checkmark$

En el espacio, las esferas intersectan en un punto con **tres** satélites; en la práctica el GPS necesita **cuatro** porque también hay que calcular el **error del reloj** del receptor.

## 8. Una mirada al espacio

Un punto del espacio es $(x, y, z)$; la distancia entre dos puntos es $\sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$ (Pitágoras dos veces); una **esfera** es $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$; un **plano** es
$Ax + By + Cz = D$. El producto escalar y los vectores se extienden con una componente más (ver el nodo de álgebra lineal).

**Puntos de la red.** Contar los puntos de coordenadas enteras dentro de una circunferencia de radio $r$ (el problema del círculo de Gauss) da aproximadamente $\pi r^2$: para $r = 10$ hay $317$ puntos frente a
$\pi\cdot 100 \approx 314{,}2$.

## 9. Errores típicos

- Aplicar $m_1 m_2 = -1$ cuando alguna recta es vertical (la pendiente no existe; la perpendicular a una vertical es horizontal).
- Olvidar el **valor absoluto** en la distancia punto-recta, o no normalizar con $\sqrt{A^2 + B^2}$.
- Escribir la ecuación de la circunferencia con el signo del centro cambiado: $(x - a)^2$, no $(x + a)^2$.
- Confundir la elipse ($c^2 = a^2 - b^2$) con la hipérbola ($c^2 = a^2 + b^2$).
- Dar el resultado de un sistema sin **sustituir** para comprobar.
- Olvidar que dos ecuaciones lineales pueden no tener solución (rectas paralelas) o tener infinitas (coincidentes).

## Repaso: lo que debe quedarte dentro de un mes

1. $d = \sqrt{\Delta x^2 + \Delta y^2}$; rectas: $y = mx + n$, $Ax + By + C = 0$; $d(P, r) = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$.
2. $\vec u\cdot\vec v = u_1v_1 + u_2v_2 = |\vec u||\vec v|\cos\theta$; perpendicular $\iff \vec u\cdot\vec v = 0$.
3. Circunferencia $(x - a)^2 + (y - b)^2 = r^2$; completar cuadrados; tangente $\perp$ radio.
4. Parábola $x^2 = 4py$; elipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ con $c^2 = a^2 - b^2$; hipérbola con $c^2 = a^2 + b^2$.
5. Trilateración: restar ecuaciones de circunferencias da ecuaciones lineales.

## Siguiente

Con el álgebra, la trigonometría y la geometría analítica listas, el troncal pasa al **cálculo** (`mat-calculo-1`): qué ocurre cuando las cantidades **cambian** de forma continua.
