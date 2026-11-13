---
id: mat-topologia
title: "Topología: espacios métricos y topológicos, continuidad, conexión, compacidad, completitud y primeras invariantes"
area: matematicas
trunk_level: 11
prerequisites: [mat-analisis-real, mat-estructuras-algebraicas]
academic_sources:
  - "Munkres, J. R. Topology, 2ª ed. Prentice Hall, 2000."
  - "Hatcher, A. Algebraic Topology. Cambridge University Press, 2002."
exercises:
  - id: tres-distancias
    tier: 1
    prompt: |
      Calcula la distancia entre $(1, 5)$ y $(4, 1)$ con las métricas $d_1$ (suma), $d_2$ (euclídea) y $d_\infty$ (máximo). Respuesta: `d1;d2;dinf`.
    answers: ["sha256:35335f452e36885233e7f83a877203079ec74a1a264221ba1690bd1f9316a910"]
  - id: es-una-metrica
    tier: 1
    prompt: |
      ¿Es $d(x, y) = (x - y)^2$ una métrica en $\mathbb R$? Respuesta: `si` o `no`.
    answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: letras-y-cortes
    tier: 1
    prompt: |
      Si quitas el punto de cruce de la letra X (dos segmentos que se cortan), ¿cuántas componentes conexas quedan? (Este número distingue a la X de la T: por eso no son homeomorfas.) Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: componentes-conexas
    tier: 1
    prompt: |
      ¿Cuántas componentes conexas tiene $[0, 1] \cup (1, 2) \cup [3, 4] \cup \{5\}$ con la topología usual? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: topologias-en-tres-puntos
    tier: 2
    prompt: |
      ¿Cuántas topologías distintas hay en un conjunto de 3 puntos (contando como distintas las que difieren por un cambio de nombre)? Respuesta: un entero.
    answers: ["sha256:35135aaa6cc23891b40cb3f378c53a17a1127210ce60e125ccf03efcfdaec458"]
  - id: punto-fijo-de-banach
    tier: 2
    prompt: |
      $\cos$ es una contracción de $[0, 1]$ en sí mismo. ¿Cuál es su punto fijo? Respuesta: con **4 decimales**.
    answers: ["sha256:b6bf458370db4ea7b1dcbda79cd2572c15d85f29a3325eef8642cb220d4a6c11"]
  - id: cota-a-priori
    tier: 2
    prompt: |
      Con $x_0 = 0$, $x_{n+1} = \cos x_n$ y constante de contracción $q = \operatorname{sen} 1$, la cota a priori de Banach es $|x_n - x^*| \le \frac{q^n}{1 - q}|x_1 - x_0|$. ¿Cuál es el menor $n$ que garantiza un error menor que $10^{-6}$? Respuesta: un entero.
    answers: ["sha256:1da51b8d8ff98f6a48f80ae79fe3ca6c26e1abb7b7d125259255d6d2b875ea08"]
  - id: caracteristica-del-toro
    tier: 2
    prompt: |
      El toro admite una triangulación con 7 vértices $\{0, \ldots, 6\}$ y los 14 triángulos $\{i, i+1, i+3\}$ y $\{i, i+2, i+3\}$ (módulo 7). Cuenta las aristas y calcula $V - E + F$. Respuesta: un entero.
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: genero-de-una-superficie
    tier: 2
    prompt: |
      Una superficie cerrada orientable tiene una triangulación con 10 vértices y 24 triángulos. ¿Cuál es su género? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: proyeccion-estereografica
    tier: 2
    prompt: |
      Proyecta desde el polo norte $(0, 0, 1)$ el punto $(0{,}6;\ 0;\ 0{,}8)$ de la esfera unidad sobre el plano $z = 0$. Respuesta: `X;Y`.
    answers: ["sha256:1b7e2800905196e47689a52a858bf56d29ec93260d62dc5eeecef2a67fe34ed3"]
  - id: cuales-son-compactos
    tier: 2
    prompt: |
      ¿Cuántos de estos subconjuntos de $\mathbb R$ son compactos? $[0, 1]$; $(0, 1]$; $\mathbb Z\cap[0, 10]$; $\{1/n : n \ge 1\}\cup\{0\}$; $[0, \infty)$; el conjunto de Cantor. Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: numeros-de-betti
    tier: 3
    prompt: |
      Con la triangulación del toro de `caracteristica-del-toro`, calcula los números de Betti $b_0, b_1, b_2$ (dimensiones de la homología simplicial con coeficientes racionales). Respuesta: `b0;b1;b2`.
    answers: ["sha256:7c523ab4ba0312f09543c3017115d09214d320dc70877695393a4324f5af5d42"]
  - id: dimension-del-cantor
    tier: 3
    prompt: |
      ¿Cuál es la dimensión de semejanza (y de Hausdorff) del conjunto de Cantor? Respuesta: con **4 decimales**.
    answers: ["sha256:f84b4483429110a1604c5aea5c80aeb92499b2eb85cba4881528834f37b371a5"]
  - id: numero-de-lebesgue
    tier: 3
    prompt: |
      $[0, 1]$ está cubierto por $(-0{,}1;\ 0{,}4)$, $(0{,}3;\ 0{,}8)$ y $(0{,}7;\ 1{,}1)$. ¿Cuál es el número de Lebesgue del recubrimiento (el supremo de los $\delta$ tales que todo subconjunto de diámetro menor que $\delta$ cabe en uno de los abiertos)? Respuesta: un número.
    answers: ["sha256:14be4b45f18e0d8c67b4f719b5144eee88497e413709d11d85b096d8e2346310"]
  - id: indice-de-una-curva
    tier: 3
    prompt: |
      ¿Cuántas vueltas da alrededor del origen la curva $z(t) = e^{2it} + 0{,}5e^{-it}$, $t \in [0, 2\pi]$ (su índice o número de vueltas)? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: plano-proyectivo
    tier: 3
    prompt: |
      El plano proyectivo real tiene una triangulación con 6 vértices, 15 aristas y 10 triángulos. ¿Cuál es su característica de Euler? Respuesta: un entero.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
---

# Topología: espacios métricos y topológicos, continuidad, conexión, compacidad, completitud y primeras invariantes

La topología estudia las propiedades que no cambian al **deformar sin romper**: una taza y un donut son "lo mismo" porque ambos tienen un agujero.
Detrás de esa imagen hay algo muy práctico: el lenguaje de **abiertos, continuidad, compacidad y completitud** que usa todo el análisis moderno
(espacios de funciones, [[mat-analisis-complejo]], análisis funcional), la optimización (existencia de mínimos), la robótica (el espacio de
configuraciones de un brazo es un toro) y el análisis topológico de datos. Este nodo da la topología general imprescindible y una primera mirada a
las invariantes algebraicas: característica de Euler, número de vueltas y homología.

## Objetivos

Al terminar sabrás:

1. Trabajar con espacios métricos (bolas, abiertos, cerrados, convergencia) y con espacios topológicos generales, bases, subespacios, productos y cocientes.
2. Usar la definición topológica de continuidad y reconocer homeomorfismos e invariantes topológicas.
3. Probar y usar conexión (y conexión por caminos), compacidad (Heine-Borel, Bolzano-Weierstrass, número de Lebesgue) y completitud.
4. Aplicar el teorema del punto fijo de Banach con su cota de error.
5. Calcular la característica de Euler de una superficie triangulada, su género, y números de vueltas de curvas planas.
6. Calcular números de Betti de un complejo simplicial pequeño con álgebra lineal.

## Qué debes dominar antes

[[mat-analisis-real]] (supremo, sucesiones de Cauchy, $\varepsilon$-$\delta$, Bolzano-Weierstrass en $\mathbb R$) y [[mat-estructuras-algebraicas]] (grupos, cocientes,
rango de una matriz). Las demostraciones son el formato habitual: [[mat-logica-demostraciones]].

> [!question] Test de entrada
> 1. Niega "para todo $\varepsilon > 0$ existe $\delta > 0$ tal que $|x - a| < \delta \Rightarrow |f(x) - f(a)| < \varepsilon$".
> 2. ¿Converge toda sucesión de Cauchy de racionales a un racional?
> 3. ¿Es $(0, 1)$ cerrado en $\mathbb R$? ¿Es abierto?
>
> Respuestas: existe $\varepsilon > 0$ tal que para todo $\delta > 0$ hay un $x$ con $|x - a| < \delta$ y $|f(x) - f(a)| \ge \varepsilon$; no (las aproximaciones de $\sqrt2$); abierto sí, cerrado no.

## 1. Para qué sirve

- **Análisis**: existencia de soluciones (de EDO por punto fijo, de mínimos por compacidad), convergencia en espacios de funciones.
- **Robótica**: el espacio de configuraciones de un brazo de dos articulaciones de rotación es un toro $S^1 \times S^1$; los obstáculos y la conexión de
  ese espacio deciden si existe una trayectoria ([[rob-cinematica]]).
- **Física**: defectos topológicos, fases topológicas de la materia, el efecto Aharonov-Bohm (un número de vueltas).
- **Datos**: la homología persistente detecta agujeros y componentes en nubes de puntos; los fractales tienen dimensión no entera.

## 2. Espacios métricos

Una **métrica** en $X$ es $d: X\times X \to [0, \infty)$ con $d(x, y) = 0 \Leftrightarrow x = y$, simetría y **desigualdad triangular** $d(x, z) \le d(x, y) + d(y, z)$.
En $\mathbb R^n$: $d_1 = \sum|x_i - y_i|$, $d_2 = \sqrt{\sum(x_i - y_i)^2}$, $d_\infty = \max|x_i - y_i|$; las tres cumplen $d_\infty \le d_2 \le d_1 \le n\,d_\infty$, así que definen los mismos
abiertos. En cambio $(x - y)^2$ no es métrica: $d(0, 2) = 4 > d(0, 1) + d(1, 2) = 2$.

Un conjunto $U$ es **abierto** si alrededor de cada punto contiene una bola $B(x, r) = \{y : d(x, y) < r\}$; es **cerrado** si su complementario es abierto,
o, equivalentemente, si contiene los límites de sus sucesiones convergentes. "Abierto" y "cerrado" no son opuestos: $\mathbb R$ y $\varnothing$ son ambas cosas, y
$[0, 1)$ no es ninguna.

## 3. Espacios topológicos y continuidad

Una **topología** en $X$ es una familia $\tau$ de subconjuntos ("abiertos") que contiene $\varnothing$ y $X$ y es cerrada por **uniones arbitrarias** e
**intersecciones finitas**. Toda métrica da una topología, pero no al revés. En un conjunto de 3 puntos hay 29 topologías: de la indiscreta
$\{\varnothing, X\}$ a la discreta (todos los subconjuntos).

- **Base**: familia de abiertos tal que todo abierto es unión de miembros de ella (las bolas en un espacio métrico).
- **Interior** (mayor abierto contenido), **clausura** (menor cerrado que contiene), **frontera** = clausura menos interior.
- **Subespacio**: los abiertos de $A \subset X$ son las intersecciones $U \cap A$. Así, $[0, 1)$ es abierto en $[0, 2]$ aunque no en $\mathbb R$.
- **Producto**: base de "rectángulos" $U \times V$. **Cociente**: se identifican puntos (pegar los lados de un cuadrado da un toro, una botella de Klein
  o el plano proyectivo según cómo se peguen).
- **Hausdorff**: dos puntos distintos tienen entornos disjuntos. Garantiza que los límites son únicos; los espacios métricos lo son.

**Continuidad.** $f: X \to Y$ es continua si la **preimagen de todo abierto es abierta**. En espacios métricos equivale a la definición $\varepsilon$-$\delta$ y a
conservar límites de sucesiones. Un **homeomorfismo** es una biyección continua con inversa continua; las propiedades que conservan se llaman
**invariantes topológicas** (conexión, compacidad, número de componentes, característica de Euler, grupo fundamental…).

> [!example] Ejemplo resuelto 1: por qué la X y la T no son homeomorfas
> Si $h: X \to T$ fuera un homeomorfismo, quitar un punto $p$ a la X y su imagen $h(p)$ a la T daría espacios homeomorfos, con el mismo número de
> componentes conexas. En la X hay un punto (el cruce) cuya eliminación deja 4 componentes; en la T, quitar cualquier punto deja como mucho 3. Luego
> no existe $h$. Con el mismo argumento, una recta no es homeomorfa a un plano: quitar un punto desconecta la recta y no el plano.

## 4. Conexión

$X$ es **conexo** si no se puede partir en dos abiertos disjuntos no vacíos. Es **conexo por caminos** si dos puntos cualesquiera se unen con una
curva continua; esto implica conexo (lo contrario falla: la "curva del seno del topólogo" es conexa sin serlo por caminos).

**Teorema.** Los conexos de $\mathbb R$ son exactamente los intervalos. **La imagen continua de un conexo es conexa**, y de ahí el **teorema de Bolzano**
(valores intermedios): una función continua en $[a, b]$ que cambia de signo se anula.

Las **componentes conexas** son los conexos maximales; en $[0, 1]\cup(1, 2)\cup[3, 4]\cup\{5\}$ son $[0, 2)$, $[3, 4]$ y $\{5\}$.

## 5. Compacidad

$K$ es **compacto** si todo recubrimiento por abiertos tiene un subrecubrimiento finito. Es la propiedad que convierte lo infinito en finito.

- **Heine-Borel**: en $\mathbb R^n$, compacto ⇔ cerrado y acotado. (En espacios métricos generales, compacto ⇔ completo y totalmente acotado.)
- **Bolzano-Weierstrass**: en un espacio métrico, compacto ⇔ toda sucesión tiene una subsucesión convergente **dentro** del conjunto.
- **La imagen continua de un compacto es compacta** ⇒ **Weierstrass**: una función continua en un compacto alcanza máximo y mínimo. Es el teorema de
  existencia de óptimos de [[mat-optimizacion]].
- Una función continua en un compacto es **uniformemente continua**, y todo recubrimiento abierto de un compacto métrico tiene un **número de
  Lebesgue** $\delta > 0$: todo subconjunto de diámetro menor que $\delta$ cabe en un solo abierto.
- **Tychonoff**: el producto de compactos es compacto (el toro, $[0, 1]^n$).

*Demostración de "la imagen continua de un compacto es compacta".* Sea $\{V_i\}$ un recubrimiento abierto de $f(K)$. Las preimágenes $f^{-1}(V_i)$ son
abiertas (continuidad) y recubren $K$; por compacidad bastan finitas, $f^{-1}(V_{i_1}), \ldots, f^{-1}(V_{i_m})$, y entonces $V_{i_1}, \ldots, V_{i_m}$ recubren $f(K)$. $\blacksquare$

El **conjunto de Cantor** (quitar repetidamente el tercio central de $[0, 1]$) es compacto, no numerable, de longitud total 0 y de dimensión
$\ln 2/\ln 3 \approx 0{,}63$: en cada paso hay el doble de piezas, cada una a escala $1/3$.

## 6. Completitud y el teorema del punto fijo de Banach

Un espacio métrico es **completo** si toda sucesión de Cauchy converge en él ($\mathbb R$ sí, $\mathbb Q$ no; los cerrados de un completo son completos).

**Teorema de Banach.** Si $(X, d)$ es completo y $T: X \to X$ es una **contracción**, $d(Tx, Ty) \le q\,d(x, y)$ con $q < 1$, entonces $T$ tiene un único punto fijo
$x^*$, y la iteración $x_{n+1} = Tx_n$ converge a él desde cualquier $x_0$ con

$$
d(x_n, x^*) \le \frac{q^n}{1 - q}\,d(x_1, x_0) \quad\text{(a priori)}, \qquad d(x_n, x^*) \le \frac{q}{1 - q}\,d(x_n, x_{n-1}) \quad\text{(a posteriori)}.
$$

*Demostración.* $d(x_{n+1}, x_n) \le q^n d(x_1, x_0)$, y sumando la serie geométrica, $d(x_{n+p}, x_n) \le \frac{q^n}{1 - q}d(x_1, x_0)$: la sucesión es de Cauchy, converge
por completitud, y el límite es fijo por continuidad de $T$. Si hubiera dos fijos, $d(x^*, y^*) = d(Tx^*, Ty^*) \le q\,d(x^*, y^*)$ obliga a $d = 0$. $\blacksquare$

Es el motor de la existencia y unicidad de soluciones de EDO (Picard-Lindelöf), de muchos métodos iterativos y de la convergencia de la iteración de
valores en [[ia-aprendizaje-estadistico]] y el aprendizaje por refuerzo.

> [!example] Ejemplo resuelto 2: resolver $x = \cos x$
> En $[0, 1]$, $\cos$ lleva el intervalo en $[\cos 1, 1] \subset [0, 1]$ y $|\cos'(x)| = |\operatorname{sen} x| \le \operatorname{sen} 1 \approx 0{,}841 = q$: es una contracción de un completo. Desde
> $x_0 = 0$, $x_1 = 1$, la cota a priori pide $\frac{0{,}841^n}{0{,}159} < 10^{-6}$, es decir $n \ge 91$. En la práctica la cota a posteriori corta mucho antes. El punto fijo es
> $x^* \approx 0{,}739085$ (y Newton lo encuentra en 4 pasos, a cambio de no tener garantía global).

## 7. Primeras invariantes algebraicas

**Característica de Euler.** Para una superficie triangulada, $\chi = V - E + F$ no depende de la triangulación: es una invariante. Esfera 2, toro 0, plano
proyectivo 1, botella de Klein 0. **Clasificación de superficies cerradas**: toda superficie cerrada orientable es una esfera con $g$ asas, con
$\chi = 2 - 2g$; una no orientable es una esfera con $k$ "gorros cruzados", con $\chi = 2 - k$. En una triangulación de una superficie cerrada cada arista está
en dos triángulos, así que $3F = 2E$.

> [!example] Ejemplo resuelto 3: el toro de 7 vértices (con menos ayuda)
> Los 14 triángulos $\{i, i+1, i+3\}$ y $\{i, i+2, i+3\}$ módulo 7 triangulan el toro. Usa $3F = 2E$ para obtener $E$ sin contar, calcula $\chi$ y comprueba con $2 - 2g$
> que el género es 1. Después comprueba en el programa que cada una de las aristas está en exactamente dos triángulos.

**Número de vueltas.** Para una curva cerrada $\gamma$ que no pasa por el origen, el **índice** $\frac{1}{2\pi}\oint d\arg\gamma$ es un entero que no cambia al deformar la curva
sin cruzar el origen. Es la base del principio del argumento de [[mat-analisis-complejo]], del criterio de Nyquist de [[rob-control]] y de una prueba
del teorema fundamental del álgebra. Para contarlo a mano: cruces con signo de una semirrecta desde el origen.

**Grupo fundamental y homología.** El **grupo fundamental** $\pi_1(X)$ son los lazos desde un punto módulo deformación: $\pi_1(S^1) = \mathbb Z$ (el número de
vueltas), $\pi_1(\text{toro}) = \mathbb Z^2$, $\pi_1(\mathbb R^n) = 0$. La **homología simplicial** lo hace computable con álgebra lineal: con las matrices de borde
$\partial_k$ de un complejo, $b_k = \dim\ker\partial_k - \operatorname{rango}\partial_{k+1}$ cuenta los "agujeros de dimensión $k$" ($b_0$ componentes, $b_1$ agujeros como lazos, $b_2$
cavidades). Para el toro, $(b_0, b_1, b_2) = (1, 2, 1)$, y $\chi = b_0 - b_1 + b_2$ (fórmula de Euler-Poincaré). La clave es $\partial_{k}\circ\partial_{k+1} = 0$: un borde no tiene
borde.

## 8. Comprobar con un programa

Topologías en 3 puntos por fuerza bruta, la cota de Banach, la característica de Euler y los números de Betti del toro de 7 vértices, y un número de
vueltas.

```python
import itertools
import math

# 1. Las 29 topologías de un conjunto de 3 puntos (subconjuntos como máscaras de bits).
todos = range(8)
cuenta = 0
for familia in itertools.product((0, 1), repeat=8):
    T = [s for s in todos if familia[s]]
    if 0 in T and 7 in T and all((a | b) in T and (a & b) in T for a in T for b in T):
        cuenta += 1
assert cuenta == 29

# 2. Ejemplo resuelto 2: la cota a priori pide n = 91; la iteración real converge antes.
q = math.sin(1)
n_cota = math.ceil(math.log(1e-6 * (1 - q)) / math.log(q))
x, n_real = 0.0, 0
while abs(x - 0.7390851332151607) >= 1e-6:
    x, n_real = math.cos(x), n_real + 1
assert n_cota == 91 and n_real < n_cota
print("Banach: cota a priori", n_cota, "iteraciones; bastaron", n_real)

# 3. Ejemplo resuelto 3: el toro de 7 vértices (χ = 0) y sus números de Betti sobre GF(2).
caras = [tuple(sorted((i, (i + a) % 7, (i + b) % 7))) for i in range(7) for a, b in ((1, 3), (2, 3))]
aristas = sorted({tuple(sorted(p)) for c in caras for p in itertools.combinations(c, 2)})
assert all(sum(set(a) <= set(c) for c in caras) == 2 for a in aristas)
assert 7 - len(aristas) + len(caras) == 0

def rango_gf2(filas):
    filas, r = [f for f in filas], 0
    for bit in range(max(f.bit_length() for f in filas)):
        piv = next((i for i in range(r, len(filas)) if filas[i] >> bit & 1), None)
        if piv is None:
            continue
        filas[r], filas[piv] = filas[piv], filas[r]
        for i in range(len(filas)):
            if i != r and filas[i] >> bit & 1:
                filas[i] ^= filas[r]
        r += 1
    return r

d1 = [(1 << a) | (1 << b) for a, b in aristas]                                   # borde de cada arista
d2 = [sum(1 << aristas.index(p) for p in itertools.combinations(c, 2)) for c in caras]  # borde de cada cara
r1, r2 = rango_gf2(d1), rango_gf2(d2)
betti = (7 - r1, len(aristas) - r1 - r2, len(caras) - r2)
assert betti == (1, 2, 1)

# 4. Número de vueltas de e^{2it} + 0,5 e^{-it}: sumar los incrementos del argumento.
N, total = 20000, 0.0
punto = lambda t: complex(math.cos(2 * t) + 0.5 * math.cos(t), math.sin(2 * t) - 0.5 * math.sin(t))
for k in range(N):
    d = math.atan2(*((punto(2 * math.pi * (k + 1) / N) / punto(2 * math.pi * k / N)).imag,
                     (punto(2 * math.pi * (k + 1) / N) / punto(2 * math.pi * k / N)).real))
    total += d
assert round(total / (2 * math.pi)) == 2
print("Betti del toro:", betti)
```

## 9. Errores típicos

- Creer que "no abierto" significa "cerrado".
- Olvidar en qué espacio ambiente se dice "abierto": $[0, 1)$ es abierto en $[0, 2]$ y no en $\mathbb R$.
- Aplicar Heine-Borel fuera de $\mathbb R^n$: en un espacio de funciones, la bola unidad cerrada es cerrada y acotada pero no compacta.
- Usar el punto fijo de Banach sin comprobar que $T$ lleva el espacio en sí mismo o que el espacio es completo.
- Contar aristas a mano en una triangulación grande en lugar de usar $3F = 2E$.
- Confundir "conexo" con "conexo por caminos" (coinciden en abiertos de $\mathbb R^n$, no en general).

## 10. Resumen

- Métrica → bolas → abiertos; topología = uniones arbitrarias e intersecciones finitas; continuidad = preimagen de abierto es abierta.
- Subespacio, producto, cociente, Hausdorff; homeomorfismo e invariantes.
- Conexos de $\mathbb R$ = intervalos; imagen continua de conexo es conexa (Bolzano).
- Compacto: Heine-Borel, Bolzano-Weierstrass, Weierstrass, continuidad uniforme, número de Lebesgue, Tychonoff.
- Completitud y Banach: único punto fijo, cota $\frac{q^n}{1-q}d(x_1, x_0)$.
- $\chi = V - E + F = 2 - 2g$; número de vueltas; $\pi_1$; Betti $b_k = \dim\ker\partial_k - \operatorname{rango}\partial_{k+1}$, $\chi = \sum(-1)^kb_k$.

## Repaso: lo que debe quedarte dentro de un mes

1. La continuidad se dice con abiertos; todo lo demás se deduce.
2. Compacto convierte "infinitos" en "finitos": por eso existen máximos.
3. Completo + contracción = punto fijo único y un algoritmo para encontrarlo.
4. Para probar que dos espacios no son homeomorfos, busca una invariante que los distinga.
5. Los agujeros se cuentan con álgebra lineal: rangos de matrices de borde.

## Siguiente

`mat-analisis-funcional` (topología en espacios de funciones), `mat-medida-integracion`, `mat-geometria-diferencial` (variedades) y
`rob-planificacion-movimiento` (espacios de configuraciones). La aplicación más inmediata está en [[mat-analisis-complejo]].
