---
id: mat-trigonometria
title: "Trigonometría: ángulos, ondas y triángulos"
area: matematicas
trunk_level: 1
prerequisites: [mat-geometria-basica, mat-algebra-secundaria]
academic_sources:
  - "Gelfand, I. M.; Saul, M. Trigonometry. Birkhäuser, 2001."
  - "Stewart, J.; Redlin, L.; Watson, S. Precalculus: Mathematics for Calculus, 7ª ed. Cengage Learning, 2016."
  - "Euclides. Elementos, libros I y III (triángulos y circunferencia). Edición en línea de D. E. Joyce, Clark University."
hints:
  - "Concepto: seno y coseno son las coordenadas de un punto de la circunferencia unidad; casi todas las identidades salen del teorema de Pitágoras (sen² + cos² = 1) y de la fórmula del coseno de una diferencia. Para triángulos que no son rectángulos, el teorema del seno relaciona lados con ángulos opuestos y el del coseno generaliza a Pitágoras."
  - "Herramienta: comprueba siempre que la calculadora (o Python) esté en el modo correcto: `math.sin` trabaja en **radianes**; usa `math.radians` y `math.degrees` para convertir. Para contar soluciones de una ecuación, dibuja las gráficas de ambos miembros o barre un intervalo buscando cambios de signo."
  - "Documentación oficial: docs.python.org/3/library/math.html (sin, cos, tan, asin, acos, atan2, radians, degrees, hypot); Gelfand y Saul, capítulos sobre el círculo unidad, identidades y resolución de triángulos."
exercises:
  - id: grados-a-radianes
    tier: 1
    prompt: |
      Expresa $150^\circ$ en radianes como un múltiplo de $\pi$: $150^\circ = k\pi$. Respuesta: $k$ como fracción irreducible «a/b».
    answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
  - id: valores-notables
    tier: 1
    prompt: |
      Calcula $\tan 45^\circ + \sin 30^\circ$. Respuesta: un número.
    answers: ["sha256:9f29a130438b81170b92a42650f9a94291ecad60bd47af2a3886e75f7f728725"]
  - id: hipotenusa-trig
    tier: 1
    prompt: |
      En un triángulo rectángulo, los catetos miden $5$ y $12$. ¿Cuánto mide la hipotenusa? Respuesta: un número.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: altura-edificio
    tier: 2
    prompt: |
      Desde un punto a $50$ m de la base de un edificio, el ángulo de elevación de su parte más alta es de $35^\circ$. ¿Qué altura tiene el edificio, en metros?
      Respuesta: **un decimal**.
    answers: ["sha256:9f14025af0065b30e47e23ebb3b491d39ae8ed17d33739e5ff3827ffb3634953"]
  - id: ley-del-seno
    tier: 2
    prompt: |
      En un triángulo $ABC$, el ángulo $A = 40^\circ$, el ángulo $B = 60^\circ$ y el lado $a = 10$ (opuesto a $A$). ¿Cuánto mide el lado $b$ (opuesto a $B$)?
      Respuesta: **dos decimales**.
    answers: ["sha256:65aca5e69e2739aa83c0c9dc3b31f64d2497872c31aedbf658f67ba349518ac6"]
  - id: ley-del-coseno
    tier: 2
    prompt: |
      Dos lados de un triángulo miden $7$ y $8$ y forman un ángulo de $60^\circ$. ¿Cuánto vale el **cuadrado** del tercer lado? Respuesta: un número.
    answers: ["sha256:c837649cce43f2729138e72cc315207057ac82599a59be72765a477f22d14a54"]
  - id: area-con-seno
    tier: 2
    prompt: |
      Un triángulo tiene dos lados de $10$ y $12$ que forman un ángulo de $30^\circ$. ¿Cuál es su área? Respuesta: un número.
    answers: ["sha256:624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"]
  - id: ecuacion-seno
    tier: 2
    prompt: |
      Resuelve $\sin x = \tfrac12$ para $0^\circ \le x < 360^\circ$. ¿Cuánto suman las soluciones, en grados? Respuesta: un número.
    answers: ["sha256:7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405"]
  - id: ecuacion-coseno
    tier: 2
    prompt: |
      Resuelve $\cos x = -\tfrac{\sqrt3}{2}$ para $0^\circ \le x \le 360^\circ$. ¿Cuál es la **mayor** solución, en grados? Respuesta: un número.
    answers: ["sha256:d29d53701d3c859e29e1b90028eec1ca8e2f29439198b6e036c60951fb458aa1"]
  - id: frecuencia-de-red
    tier: 2
    prompt: |
      Una tensión alterna es $v(t) = 325\sin(100\pi\,t)$ voltios, con $t$ en segundos. ¿Cuál es su frecuencia, en Hz? Respuesta: un número.
    answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: seno-de-una-suma
    tier: 3
    prompt: |
      Si $\sin a = \tfrac35$ y $\cos b = \tfrac{5}{13}$, con $a$ y $b$ en el primer cuadrante, calcula $\sin(a + b)$. Respuesta: fracción irreducible «a/b».
    answers: ["sha256:38dcd8d377759bf13f44c909fc415afcfd16a7aa2cdb859206225f1df2572a53"]
  - id: coseno-del-doble
    tier: 3
    prompt: |
      Si $\sin a = \tfrac35$, calcula $\cos 2a$. Respuesta: fracción irreducible «a/b».
    answers: ["sha256:16072344496c43f79e0280daa6b2bdeb2e76f7ce209551db03ca1a655eac714e"]
  - id: angulo-mayor
    tier: 3
    prompt: |
      Un triángulo tiene lados de $7$, $9$ y $12$. ¿Cuánto mide su ángulo **mayor**, en grados? Respuesta: **un decimal**.
    answers: ["sha256:9ea5bbaee04924060fc89a7a004e37cf44e046f7d5a8bd1d245b8a170f4fe86f"]
  - id: caso-ambiguo
    tier: 3
    prompt: |
      Un triángulo tiene un lado $a = 7$, otro lado $b = 10$ y el ángulo $A = 30^\circ$ opuesto a $a$. ¿Cuántos triángulos distintos cumplen estos datos? Respuesta: $0$, $1$ o $2$.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: rumbo-y-componentes
    tier: 3
    prompt: |
      Un barco navega $12$ km con rumbo «Norte $40^\circ$ Este» (a $40^\circ$ del norte hacia el este). ¿Cuántos kilómetros se ha desplazado hacia el **este**?
      Respuesta: **un decimal**.
    answers: ["sha256:0b0c075442625b5e2137cd38007a6036de0662cc491d10ad1d15f17d0e219d26"]
  - id: soluciones-en-dos-periodos
    tier: 3
    prompt: |
      ¿Cuántas soluciones tiene $\sin x = 0{,}3$ en el intervalo $0 \le x \le 4\pi$ (dos vueltas completas)? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
---

# Trigonometría: ángulos, ondas y triángulos

«Trigonometría» significa *medida de triángulos*, pero hoy es mucho más: es el lenguaje de todo lo que **gira y oscila**. El seno y el coseno describen ondas (sonido, luz, corriente
alterna), rotaciones (robótica, gráficos 3D, navegación) y la forma de cualquier señal periódica ([[ing-senales-sistemas]]). Y a la vez permiten resolver cualquier triángulo,
que es lo que usaron durante siglos topógrafos y navegantes para medir lo que no se puede alcanzar.

## Objetivos

Al terminar sabrás:

1. Medir ángulos en grados y radianes y convertir entre ambos.
2. Definir seno, coseno y tangente con triángulos rectángulos y con el círculo unidad, y conocer los valores notables.
3. Dibujar y usar las funciones trigonométricas (amplitud, periodo, fase) para modelar ondas.
4. Usar las identidades fundamentales y las fórmulas de la suma y del ángulo doble.
5. Resolver cualquier triángulo con los teoremas del seno y del coseno.
6. Resolver ecuaciones trigonométricas y aplicar todo a problemas de medida, navegación y rotaciones.

> [!question] Test de entrada
> 1. En un triángulo rectángulo con catetos $3$ y $4$, ¿cuánto mide la hipotenusa? 2. ¿Cuántos grados tiene una vuelta completa? 3. Si dos triángulos tienen los mismos ángulos, ¿qué
> relación hay entre sus lados?
>
> Respuestas: $5$; $360^\circ$; **son proporcionales** (triángulos semejantes).

## 1. Para qué sirve

- **Medir lo inaccesible**: la altura de un edificio, la anchura de un río, la distancia a un barco (topografía, geodesia, astronomía).
- **Ondas y señales**: sonido, radio, corriente alterna ($v = 325\sin(100\pi t)$), todo es suma de senos.
- **Rotaciones**: girar un objeto en un videojuego, el brazo de un robot ([[rob-cinematica]]), la orientación de un móvil.
- **Ingeniería**: descomponer fuerzas en componentes, estructuras triangulares, antenas, óptica.

## 2. Ángulos: grados y radianes

Un ángulo se mide en **grados** ($360^\circ$ una vuelta) o en **radianes**. Un **radián** es el ángulo que abarca un arco **de longitud igual al radio**. Como la circunferencia mide $2\pi r$,
una vuelta completa son $2\pi$ rad:

$$
180^\circ = \pi\ \text{rad}, \qquad \theta_{\text{rad}} = \theta_{\text{grados}}\cdot\frac{\pi}{180} .
$$

Así, $90^\circ = \frac{\pi}{2}$, $60^\circ = \frac{\pi}{3}$, $45^\circ = \frac{\pi}{4}$, $30^\circ = \frac{\pi}{6}$ y $150^\circ = \frac{5\pi}{6}$. **Por qué radianes:** con ellos, la longitud de un arco es simplemente $s = r\theta$ y el área de un
sector, $\frac12 r^2\theta$, y las fórmulas del cálculo no llevan factores $\frac{\pi}{180}$. Programación y ciencia usan **siempre radianes**.

## 3. Razones trigonométricas

En un triángulo rectángulo con ángulo agudo $\theta$:

$$
\sin\theta = \frac{\text{cateto opuesto}}{\text{hipotenusa}},\quad
\cos\theta = \frac{\text{cateto adyacente}}{\text{hipotenusa}},\quad
\tan\theta = \frac{\text{opuesto}}{\text{adyacente}} = \frac{\sin\theta}{\cos\theta} .
$$

(Regla nemotécnica «SOH-CAH-TOA».) Dependen **solo del ángulo**, no del tamaño del triángulo, porque triángulos con los mismos ángulos son semejantes (ver [[mat-geometria-basica]]).

**Ejemplo:** el triángulo $3$-$4$-$5$ (cateto opuesto $3$): $\sin\theta = 0{,}6$, $\cos\theta = 0{,}8$, $\tan\theta = 0{,}75$ y $\theta = \arcsin 0{,}6 \approx 36{,}87^\circ$.

**Identidad fundamental.** Por Pitágoras, $\text{op}^2 + \text{ady}^2 = \text{hip}^2$; dividiendo por $\text{hip}^2$:

$$
\sin^2\theta + \cos^2\theta = 1 .
$$

**Valores notables** (de dos triángulos conocidos). Un triángulo rectángulo **isósceles** de catetos $1$ tiene hipotenusa $\sqrt2$, luego $\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}$.
Un triángulo **equilátero** de lado $2$ partido por su altura da un triángulo de lados $1$, $\sqrt3$, $2$ con ángulos $30^\circ$, $60^\circ$:

| $\theta$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $\sin\theta$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ |
| $\tan\theta$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | — |

**Ejemplo resuelto (una escalera).** Una escalera de $5$ m se apoya en una pared formando $70^\circ$ con el suelo. Altura que alcanza: $5\sin 70^\circ \approx 4{,}70$ m; distancia del pie a la pared:
$5\cos 70^\circ \approx 1{,}71$ m. Comprobación: $4{,}70^2 + 1{,}71^2 \approx 25$. $\checkmark$

**Ángulos de elevación.** Desde $40$ m de la base de una torre, el ángulo de elevación de su cima es $48^\circ$: altura $= 40\tan 48^\circ \approx 44{,}4$ m.

## 4. El círculo unidad: cualquier ángulo

En una circunferencia de **radio $1$** centrada en el origen, el punto $P$ que se obtiene girando $\theta$ desde el eje $x$ positivo (sentido antihorario) tiene coordenadas

$$
P = (\cos\theta,\ \sin\theta) .
$$

Así se definen seno y coseno para **cualquier** ángulo (incluso negativos o mayores de $360^\circ$). La identidad fundamental es ahora la ecuación de la circunferencia $x^2 + y^2 = 1$.

- **Signos por cuadrantes:** I: $\sin > 0,\ \cos > 0$; II: $\sin > 0,\ \cos < 0$; III: ambos negativos; IV: $\sin < 0,\ \cos > 0$.
- **Periodicidad:** $\sin(\theta + 2\pi) = \sin\theta$, $\cos(\theta + 2\pi) = \cos\theta$ (periodo $2\pi$); $\tan$ tiene periodo $\pi$.
- **Simetrías:** $\sin(-\theta) = -\sin\theta$ (impar); $\cos(-\theta) = \cos\theta$ (par); $\sin(\pi - \theta) = \sin\theta$; $\sin(\tfrac\pi2 - \theta) = \cos\theta$.

**Ejemplo:** $\sin 150^\circ = \sin(180^\circ - 30^\circ) = \sin 30^\circ = \frac12$ y $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt3}{2}$. Para cualquier ángulo se calcula su **ángulo de referencia** (el agudo equivalente) y se asigna el signo del cuadrante.

## 5. Funciones trigonométricas y ondas

Las gráficas de $y = \sin x$ y $y = \cos x$ son **ondas** de periodo $2\pi$ y amplitud $1$ ($\cos x$ es $\sin x$ desplazada $\frac\pi2$). La forma general es

$$
y = A\sin(Bx + C) + D :
$$

**amplitud** $|A|$, **periodo** $\dfrac{2\pi}{B}$, **desfase** $-\dfrac{C}{B}$ (desplazamiento horizontal) y **línea media** $D$. En física, una onda o una oscilación es
$y(t) = A\sin(2\pi f t + \varphi)$ con $f$ la frecuencia: la tensión de la red $v(t) = 325\sin(100\pi t)$ tiene $f = \frac{100\pi}{2\pi} = 50$ Hz. Y $\tan$ tiene asíntotas verticales en $\frac\pi2 + k\pi$.

**Funciones inversas.** $\arcsin$, $\arccos$ y $\arctan$ devuelven un ángulo a partir del valor: $\arcsin: [-1, 1] \to [-\frac\pi2, \frac\pi2]$, $\arccos: [-1, 1] \to [0, \pi]$, $\arctan: \mathbb{R} \to (-\frac\pi2, \frac\pi2)$.
Cada una devuelve **un** ángulo, pero las ecuaciones trigonométricas tienen **varias** soluciones (sección 8).

## 6. Identidades

**Coseno de una diferencia.** $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$.
*Demostración.* Sean $P = (\cos\alpha, \sin\alpha)$ y $Q = (\cos\beta, \sin\beta)$ en el círculo unidad. La distancia al cuadrado entre ellos es, por coordenadas,
$(\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2 = 2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$. Pero $|PQ|$ solo depende del ángulo $\alpha - \beta$ entre ellos (giremos
ambos hasta que $Q$ caiga sobre el eje $x$): vale, por las mismas cuentas con $Q = (1, 0)$, $2 - 2\cos(\alpha - \beta)$. Igualando se obtiene la fórmula. $\blacksquare$

De ella salen las demás (sustituyendo $\beta \to -\beta$ y usando $\sin\theta = \cos(\frac\pi2 - \theta)$):

$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta,\qquad
\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta .
$$

**Ángulo doble** (tomando $\beta = \alpha$): $\sin 2\alpha = 2\sin\alpha\cos\alpha$ y $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1$.

**Ejemplo resuelto:** $\sin 75^\circ = \sin(45^\circ + 30^\circ) = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659$. $\checkmark$
**Otro:** si $\sin a = \frac{4}{5}$ ($a$ en el primer cuadrante), $\cos a = \frac35$ y $\sin 2a = 2\cdot\frac45\cdot\frac35 = \frac{24}{25}$.

**Importante:** $\sin(\alpha + \beta) \ne \sin\alpha + \sin\beta$. Para comprobarlo, $\alpha = \beta = 90^\circ$: $\sin 180^\circ = 0$, no $2$.

## 7. Resolver cualquier triángulo

En un triángulo $ABC$ con lados $a, b, c$ opuestos a $A, B, C$:

**Teorema del coseno** (generaliza a Pitágoras):

$$
a^2 = b^2 + c^2 - 2bc\cos A .
$$

*Demostración.* Se coloca $A$ en el origen y $B = (c, 0)$; entonces $C = (b\cos A,\ b\sin A)$ y $a^2 = |BC|^2 = (b\cos A - c)^2 + (b\sin A)^2 = b^2 - 2bc\cos A + c^2$. $\blacksquare$
Si $A = 90^\circ$ se recupera Pitágoras.

**Teorema del seno:**

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} \;(= 2R,\ \text{con } R \text{ el radio de la circunferencia circunscrita}) .
$$

*Demostración.* El área vale $\frac12 bc\sin A = \frac12 ac\sin B$; simplificando, $\frac{b}{\sin B} = \frac{a}{\sin A}$; igual con el tercer par. $\blacksquare$ De aquí además: **área** $= \frac12 ab\sin C$.

**Qué teorema usar:**

| Datos | Método |
|---|---|
| dos ángulos y un lado (AAL, ALA) | el tercer ángulo es $180^\circ - A - B$; después, **seno** |
| dos lados y el ángulo que forman (LAL) | **coseno** para el tercer lado; después **seno** (o coseno) |
| tres lados (LLL) | **coseno** para cada ángulo: $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$ |
| dos lados y un ángulo **no** comprendido (LLA) | **caso ambiguo** |

**Ejemplos resueltos.** *Seno:* $a = 9$, $A = 35^\circ$, $B = 70^\circ$: $b = \frac{9\sin 70^\circ}{\sin 35^\circ} \approx 14{,}75$; $C = 75^\circ$ y $c = \frac{9\sin 75^\circ}{\sin 35^\circ} \approx 15{,}16$.
*Coseno:* lados $5$ y $6$ con ángulo $50^\circ$ entre ellos: $c^2 = 25 + 36 - 60\cos 50^\circ \approx 22{,}43$, $c \approx 4{,}74$.

**El caso ambiguo (LLA).** Con $a$, $b$ y $A$ conocidos, $\sin B = \frac{b\sin A}{a}$. Casos: si $a < b\sin A$, **ningún** triángulo ($\sin B > 1$); si $a = b\sin A$, **uno** (rectángulo);
si $b\sin A < a < b$, **dos** triángulos ($B$ y $180^\circ - B$); si $a \ge b$, **uno**. Ejemplo: $a = 5$, $b = 8$, $A = 30^\circ$: $b\sin A = 4 < 5 < 8$; $\sin B = 0{,}8$ da $B = 53{,}13^\circ$ **o** $126{,}87^\circ$, y ambos valen.

## 8. Ecuaciones trigonométricas

$\sin x = k$ tiene soluciones si $|k| \le 1$: $x = \arcsin k + 2\pi n$ **y** $x = \pi - \arcsin k + 2\pi n$ ($n$ entero). $\cos x = k$: $x = \pm\arccos k + 2\pi n$. $\tan x = k$: $x = \arctan k + \pi n$.
**Ejemplo:** $\sin x = 0{,}3$ en $[0, 4\pi]$: $\arcsin 0{,}3 \approx 0{,}305$ y $\pi - 0{,}305 \approx 2{,}837$ más sus copias $+2\pi$: **4 soluciones**. Cuando la ecuación mezcla seno y coseno, se
usa $\sin^2 + \cos^2 = 1$ para dejar una sola función y se **factoriza**. Siempre se **comprueban** las soluciones, sobre todo si se elevó al cuadrado.

## 9. Aplicaciones

**Navegación y descomposición de vectores.** Un desplazamiento de $d$ con rumbo (ángulo desde el norte) $\theta$ hacia el este tiene componentes: este $= d\sin\theta$, norte $= d\cos\theta$. 12 km a «N $40^\circ$ E»:
$7{,}7$ km al este y $9{,}2$ km al norte. Con un ángulo $\theta$ medido desde el eje $x$ las fórmulas son $(d\cos\theta,\ d\sin\theta)$.

**Rotaciones en el plano.** Girar el punto $(x, y)$ un ángulo $\theta$ alrededor del origen da

$$
x' = x\cos\theta - y\sin\theta,\qquad y' = x\sin\theta + y\cos\theta .
$$

(Es la fórmula de la suma aplicada al ángulo del punto.) Girar $(1, 0)$ $90^\circ$ da $(0, 1)$; girar $(3, 4)$ $30^\circ$ da $(0{,}598;\ 4{,}964)$, sin cambiar la distancia al origen ($5$). Esta fórmula es la base de los
gráficos 2D y de las matrices de rotación de la robótica.

**Ondas y Fourier.** Cualquier señal periódica razonable se puede escribir como **suma de senos y cosenos** (series de Fourier); es la base del audio digital, la compresión y las telecomunicaciones.

## 10. Errores típicos

- Calculadora o programa en el **modo equivocado** (grados frente a radianes): $\sin 30$ da $0{,}5$ en grados pero $-0{,}988$ en radianes.
- $\sin(\alpha + \beta) = \sin\alpha + \sin\beta$ (falso); $\sin^2\theta$ significa $(\sin\theta)^2$, no $\sin(\theta^2)$.
- Olvidar la **segunda solución** de $\sin x = k$ ($\pi - x$) o los múltiplos de $2\pi$.
- Aplicar $\arcsin$ a un valor fuera de $[-1, 1]$.
- Usar el teorema del seno con un ángulo y olvidar el **caso ambiguo**.
- Confundir cateto opuesto y adyacente (depende del ángulo elegido).

## Repaso: lo que debe quedarte dentro de un mes

1. $180^\circ = \pi$ rad; arco $s = r\theta$; $\sin^2 + \cos^2 = 1$; $(\cos\theta, \sin\theta)$ es un punto del círculo unidad.
2. Valores notables de $30^\circ, 45^\circ, 60^\circ$; signos por cuadrantes; $y = A\sin(Bx + C)$: periodo $2\pi/B$.
3. $\sin(\alpha\pm\beta)$, $\cos(\alpha\pm\beta)$, ángulo doble.
4. Seno: $\frac{a}{\sin A} = \frac{b}{\sin B}$; coseno: $a^2 = b^2 + c^2 - 2bc\cos A$; área $\frac12 ab\sin C$.
5. Ecuaciones: dos soluciones por vuelta; comprobar; rotaciones $(x\cos\theta - y\sin\theta,\ x\sin\theta + y\cos\theta)$.

## Siguiente

`mat-geometria-analitica` une el álgebra con la geometría: rectas, circunferencias y cónicas con coordenadas.
