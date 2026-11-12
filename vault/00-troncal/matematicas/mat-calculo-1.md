---
id: mat-calculo-1
title: "Cálculo I: límites, derivadas y optimización"
area: matematicas
trunk_level: 2
prerequisites: [mat-algebra-secundaria, mat-trigonometria, mat-geometria-analitica]
academic_sources:
  - "Spivak, M. Calculus, 4ª ed. Publish or Perish, 2008."
  - "Apostol, T. M. Calculus, vol. 1, 2ª ed. Wiley, 1967."
  - "Stewart, J. Calculus: Early Transcendentals. Cengage Learning (varias ediciones)."
  - "Courant, R.; John, F. Introduction to Calculus and Analysis, vol. 1. Springer (reedición de Classics in Mathematics)."
hints:
  - "Concepto: la derivada es la tasa de cambio instantánea, el límite de la pendiente de rectas secantes; en los problemas de optimización se deriva, se iguala a cero y se comprueba si es máximo o mínimo (y se miran los extremos del intervalo). Con límites indeterminados 0/0, factoriza, usa límites notables o L'Hôpital."
  - "Herramienta: comprueba cada derivada con diferencias finitas, (f(x+h) − f(x−h)) / (2h) con h pequeño (por ejemplo 1e-5) en Python; para optimización, un barrido numérico con un bucle confirma el extremo; sympy (`diff`, `limit`, `solve`) sirve para contrastar a mano."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html (derivadas y límites); Spivak, capítulos sobre límites, continuidad, derivadas y aplicaciones; Apostol, vol. 1, capítulos de derivación y de aplicaciones."
exercises:
  - id: limite-factorizando
    tier: 1
    prompt: |
      Calcula $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3}$. (Factoriza el numerador antes de sustituir.) Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: derivada-polinomio
    tier: 1
    prompt: |
      Sea $f(x) = 3x^4 - 2x^2 + 7$. Calcula $f'(2)$. Respuesta: un número.
    answers: ["sha256:8b940be7fb78aaa6b6567dd7a3987996947460df1c668e698eb92ca77e425349"]
  - id: pendiente-de-la-tangente
    tier: 1
    prompt: |
      ¿Cuál es la pendiente de la recta tangente a $y = x^3$ en el punto de abscisa $x = 2$? Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: limite-notable
    tier: 2
    prompt: |
      Calcula $\displaystyle\lim_{x \to 0}\frac{\sin 5x}{x}$ (usa $\lim_{u\to0}\frac{\sin u}{u} = 1$). Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: derivada-del-producto
    tier: 2
    prompt: |
      Sea $f(x) = x^2 e^x$. Calcula $f'(1)$. Respuesta: **cuatro decimales**.
    answers: ["sha256:2e25f1847165cad406d73ee95dfeb021ff05f333d701ba3e00e65a84705fcb66"]
  - id: derivada-de-ln
    tier: 2
    prompt: |
      Sea $f(x) = \ln(x^2 + 1)$. Calcula $f'(1)$. Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: regla-de-la-cadena
    tier: 2
    prompt: |
      Sea $f(x) = \sin(x^2)$ (con $x$ en radianes). Calcula $f'(1)$. Respuesta: **cuatro decimales**.
    answers: ["sha256:e6e5b8113c7a712315b5e9c5da6ba3db0728f3c14bf933205bcf8cb3253026ef"]
  - id: maximo-de-parabola
    tier: 2
    prompt: |
      ¿Cuál es el valor **máximo** de $f(x) = -x^2 + 6x + 1$? Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: caja-de-volumen-maximo
    tier: 2
    prompt: |
      De una lámina cuadrada de cartón de $12$ cm de lado se recortan cuadrados de lado $x$ en las cuatro esquinas y se doblan los lados para formar una caja **sin tapa**.
      ¿Cuál es el volumen máximo de la caja, en cm$^3$? Respuesta: un número.
    answers: ["sha256:2747b7c718564ba5f066f0523b03e17f6a496b06851333d2d59ab6d863225848"]
  - id: velocidad-cero
    tier: 2
    prompt: |
      La posición de una partícula es $s(t) = t^3 - 6t^2 + 9t$ metros, con $t$ en segundos. ¿En qué instante $t > 0$ se anula su velocidad **por segunda vez**?
      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: limite-con-lhopital
    tier: 3
    prompt: |
      Calcula $\displaystyle\lim_{x \to 0}\frac{e^x - 1 - x}{x^2}$ (aplica la regla de L'Hôpital las veces necesarias). Respuesta: fracción «a/b».
    answers: ["sha256:d939926f05444b0f4495fb9629ecbfa80d99a8ec1a20d06800ca5a3d5f4fd276"]
  - id: metodo-de-newton
    tier: 3
    prompt: |
      El método de Newton para resolver $x^2 - 2 = 0$ itera $x_{n+1} = x_n - \dfrac{x_n^2 - 2}{2x_n}$. Partiendo de $x_0 = 1$, calcula $x_3$.
      Respuesta: **ocho decimales, truncando** (sin redondear).
    answers: ["sha256:d93d75b55c459a18e110f89866da81090b8d425da3b9afee49fa508850552a9d"]
  - id: razones-relacionadas
    tier: 3
    prompt: |
      Se infla un globo esférico y su radio crece a $2$ cm/s. En el instante en que el radio es $10$ cm, el volumen crece a $k\pi$ cm$^3$/s. ¿Cuánto vale $k$? ($V = \frac43\pi r^3$.)
      Respuesta: un número.
    answers: ["sha256:1a1cf797fabe7f95836fabeca626907c77b3e6c9aff7c2290b396a238c69362e"]
  - id: maximo-local-cubica
    tier: 3
    prompt: |
      La función $f(x) = x^3 - 12x$ tiene un máximo local. ¿Cuál es el valor de $f$ en ese máximo? Respuesta: un número.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: aproximacion-lineal
    tier: 3
    prompt: |
      Usa la recta tangente a $y = \sqrt{x}$ en $x = 4$ para aproximar $\sqrt{4{,}2}$. Respuesta: **dos decimales**.
    answers: ["sha256:797897e9ae3e1831c46fe0859265d8fc37bf113ff3b60c7d37a1f9782b0b24d3"]
  - id: biseccion
    tier: 3
    prompt: |
      El método de bisección parte de un intervalo $[1, 2]$ donde $f(x) = x^3 - x - 1$ cambia de signo (teorema del valor intermedio) y lo divide por la mitad en cada paso.
      ¿Cuántas bisecciones hacen falta, como mínimo, para que el intervalo final mida **menos de $10^{-6}$**? Respuesta: un entero.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
---

# Cálculo I: límites, derivadas y optimización

El **cálculo** es el estudio matemático del **cambio**. Newton y Leibniz lo inventaron, cada uno por su cuenta, a finales del siglo XVII para describir el movimiento de los planetas, y desde entonces es el idioma de la física, la
ingeniería, la economía y el aprendizaje automático (entrenar una red neuronal consiste en seguir derivadas: ver [[ia-redes-profundas]]). Este nodo cubre la mitad **diferencial**: cómo se mide
**qué tan deprisa cambia** una cantidad, y cómo se usa eso para optimizar y aproximar. La otra mitad, la acumulación, es `mat-calculo-2`.

## Objetivos

Al terminar sabrás:

1. Entender y calcular límites, y reconocer continuidad.
2. Definir la derivada, calcularla con las reglas (producto, cociente, cadena) y conocer las derivadas de las funciones elementales.
3. Interpretarla: pendiente de la tangente, velocidad, tasa de variación.
4. Usar derivadas para estudiar el crecimiento, los extremos, la concavidad y para resolver **problemas de optimización**.
5. Aplicar L'Hôpital, la aproximación lineal, el método de Newton y la bisección.
6. Resolver problemas de razones relacionadas.

> [!question] Test de entrada
> 1. ¿Cuál es la pendiente de la recta por $(1, 1)$ y $(3, 9)$? 2. Si $f(x) = x^2$, ¿cuánto vale $f(3) - f(2)$? 3. ¿Para qué valor de $x$ alcanza su mínimo $y = (x - 4)^2 + 1$?
>
> Respuestas: $4$; $5$; $x = 4$.

## 1. Para qué sirve

- **Física**: velocidad es la derivada de la posición; aceleración, la de la velocidad ([[fis-medida-movimiento]]).
- **Optimizar**: el mínimo coste, la máxima área, el menor tiempo, el mayor beneficio: siempre un máximo o un mínimo.
- **Aproximar**: sustituir una función complicada por una recta cercana (linealización), base de la mayoría de los métodos numéricos.
- **Aprendizaje automático**: entrenar un modelo es minimizar una función de error siguiendo su derivada (descenso del gradiente).
- **Economía y biología**: crecimiento, costes marginales, tasas.

## 2. Límites

La idea: $\displaystyle\lim_{x\to a} f(x) = L$ significa que $f(x)$ se acerca a $L$ **tanto como queramos** al acercar $x$ a $a$ (sin que importe lo que ocurra **en** $a$). Formalmente (Weierstrass):
para cada $\varepsilon > 0$ existe $\delta > 0$ tal que $0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon$.

**Ejemplo (la definición en acción).** $\displaystyle\lim_{x\to 2}(3x - 1) = 5$: dado $\varepsilon$, basta $\delta = \varepsilon/3$, porque $|(3x - 1) - 5| = 3|x - 2| < 3\delta = \varepsilon$.

**Propiedades.** Si existen $\lim f$ y $\lim g$: el límite de una suma, producto y cociente (con denominador no nulo) es la suma, producto y cociente de los límites. Para polinomios y funciones elementales en su dominio, el límite en $a$ es $f(a)$
(**continuidad**).

**Formas indeterminadas $\frac00$.** Se resuelven simplificando. $\displaystyle\lim_{x\to 3}\frac{x^2 - 9}{x - 3} = \lim_{x\to3}(x + 3) = 6$ (la función no está definida en $3$, pero el límite existe). Con radicales,
se multiplica por el conjugado: $\displaystyle\lim_{x\to4}\frac{\sqrt x - 2}{x - 4} = \lim\frac{1}{\sqrt x + 2} = \frac14$.

**Límites laterales.** $\lim_{x\to a^-}$ y $\lim_{x\to a^+}$; el límite existe si y solo si ambos existen y coinciden. Y **límites en el infinito**: $\displaystyle\lim_{x\to\infty}\frac{3x^2 + 1}{x^2 - 5} = 3$
(se divide por la mayor potencia).

**Límites notables.**

$$
\lim_{x\to0}\frac{\sin x}{x} = 1, \qquad \lim_{n\to\infty}\Bigl(1 + \frac1n\Bigr)^n = e, \qquad \lim_{h\to0}\frac{e^h - 1}{h} = 1 .
$$

*Demostración del primero.* En el círculo unidad, para $0 < x < \frac\pi2$, el área del triángulo $\frac12\sin x$ es menor que la del sector $\frac12 x$, que es menor que la del triángulo mayor $\frac12\tan x$. Dividiendo por $\frac12\sin x$:
$1 < \frac{x}{\sin x} < \frac{1}{\cos x}$, es decir $\cos x < \frac{\sin x}{x} < 1$. Como $\cos x \to 1$, por el **teorema del sándwich** $\frac{\sin x}{x} \to 1$. $\blacksquare$
Con él: $\displaystyle\lim_{x\to0}\frac{\sin 5x}{x} = 5\lim\frac{\sin 5x}{5x} = 5$.

### Continuidad y dos teoremas fundamentales

$f$ es **continua** en $a$ si $\lim_{x\to a}f(x) = f(a)$: su gráfica no se rompe. Para funciones continuas en un intervalo **cerrado** $[a, b]$:

- **Teorema del valor intermedio**: si $f(a)$ y $f(b)$ tienen signos opuestos, **existe** $c\in(a,b)$ con $f(c) = 0$.
- **Teorema de Weierstrass**: $f$ alcanza un **máximo y un mínimo absolutos** en $[a, b]$.

El primero da un **algoritmo**: el método de **bisección**. Se parte un intervalo $[a, b]$ con cambio de signo; se toma el punto medio, y nos quedamos con la mitad donde sigue habiendo cambio de signo. Cada paso divide la longitud por $2$:
para llegar a una precisión $\varepsilon$ desde un intervalo de longitud $L$ hacen falta $\lceil\log_2(L/\varepsilon)\rceil$ pasos. Para $x^3 - x - 1$ en $[1, 2]$ con $10^{-6}$: $20$ pasos (la raíz es $\approx 1{,}3247$).

## 3. La derivada

La **derivada** de $f$ en $a$ es el límite de la pendiente de la recta secante cuando el segundo punto se acerca al primero:

$$
f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h} .
$$

Es la **pendiente de la tangente** a la gráfica en $(a, f(a))$ y la **tasa de variación instantánea**. En física, si $s(t)$ es la posición, $s'(t)$ es la velocidad. Se escribe también $\frac{df}{dx}$ (Leibniz).

**Ejemplo (desde la definición).** $f(x) = x^2$: $\dfrac{(a + h)^2 - a^2}{h} = \dfrac{2ah + h^2}{h} = 2a + h \to 2a$. Luego $(x^2)' = 2x$. Con $f(x) = \sqrt x$: multiplicando por el conjugado,
$\dfrac{\sqrt{a + h} - \sqrt a}{h} = \dfrac{1}{\sqrt{a + h} + \sqrt a} \to \dfrac{1}{2\sqrt a}$.

**Derivable implica continua**, pero no al revés: $|x|$ es continua en $0$ y no tiene derivada (una esquina).

### Reglas de derivación

| Función | Derivada |
|---|---|
| $c$ (constante) | $0$ |
| $x^n$ | $n\,x^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\dfrac1x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\dfrac{1}{\cos^2 x}$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ |

Para combinarlas:

$$
(f + g)' = f' + g',\quad (cf)' = cf',\quad (fg)' = f'g + fg',\quad \Bigl(\frac fg\Bigr)' = \frac{f'g - fg'}{g^2},\quad (f\circ g)'(x) = f'(g(x))\,g'(x) .
$$

*Demostración de la regla de la potencia ($n$ natural).* $(a + h)^n = a^n + n a^{n-1}h + \binom n2 a^{n-2}h^2 + \cdots$ (binomio de Newton); restando $a^n$ y dividiendo por $h$ queda $n a^{n-1} + h(\cdots) \to n a^{n-1}$. $\blacksquare$
*Demostración del producto.* $\dfrac{f(x + h)g(x + h) - f(x)g(x)}{h} = \dfrac{f(x + h) - f(x)}{h}g(x + h) + f(x)\dfrac{g(x + h) - g(x)}{h}$, y al hacer $h\to0$ (usando que $g$ es continua) sale $f'g + fg'$. $\blacksquare$
*La derivada de $\sin$:* $\dfrac{\sin(x + h) - \sin x}{h} = \sin x\,\dfrac{\cos h - 1}{h} + \cos x\,\dfrac{\sin h}{h} \to \cos x$, porque $\frac{\sin h}{h}\to1$ y $\frac{\cos h - 1}{h}\to0$. $\blacksquare$

**Ejemplos resueltos.**

- $\bigl(x^3\sin x\bigr)' = 3x^2\sin x + x^3\cos x$.
- $\left(\dfrac{x}{x^2 + 1}\right)' = \dfrac{1\cdot(x^2 + 1) - x\cdot2x}{(x^2 + 1)^2} = \dfrac{1 - x^2}{(x^2 + 1)^2}$.
- *Cadena:* $\bigl(e^{3x^2}\bigr)' = e^{3x^2}\cdot6x$; $\bigl(\ln(\cos x)\bigr)' = \dfrac{-\sin x}{\cos x} = -\tan x$.

**Derivadas de orden superior:** $f''$ es la derivada de $f'$; en física, aceleración.

## 4. Qué dice la derivada sobre la función

**Teorema del valor medio.** Si $f$ es continua en $[a, b]$ y derivable en $(a, b)$, existe $c$ con $f'(c) = \dfrac{f(b) - f(a)}{b - a}$ (en algún instante la tasa instantánea es igual a la media).
*Ejemplo:* un coche recorre $150$ km en $1{,}5$ h (media $100$ km/h): en algún instante marcó **exactamente** $100$ km/h. *Consecuencia:* si $f' > 0$ en un intervalo, $f$ es **creciente**; si $f' < 0$, **decreciente**.

**Extremos.** Un máximo o mínimo local en un punto interior cumple $f'(c) = 0$ (**punto crítico**). Para decidir cuál:

- **Primera derivada**: si $f'$ pasa de $+$ a $-$, máximo; de $-$ a $+$, mínimo.
- **Segunda derivada**: $f''(c) > 0$, mínimo; $f''(c) < 0$, máximo. (La **concavidad**: $f'' > 0$ la gráfica «sonríe»; los puntos donde cambia son de **inflexión**.)

**Ejemplo resuelto: $f(x) = x^3 - 3x$.** $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$: puntos críticos $\pm1$. $f''(x) = 6x$: en $x = -1$, $f'' < 0$, **máximo** de valor $f(-1) = 2$; en $x = 1$, **mínimo** de valor $-2$; inflexión en $x = 0$.
Para un máximo o mínimo **absoluto** en un intervalo cerrado hay que comparar los puntos críticos **y los extremos** del intervalo.

### Optimización

Se sigue siempre el mismo método: **1)** dibujar y definir variables; **2)** escribir la magnitud a optimizar como función de **una** variable; **3)** derivar, igualar a cero y resolver; **4)** comprobar que es el extremo buscado (y los extremos del dominio); **5)** contestar con unidades.

**Ejemplo resuelto.** De una lámina cuadrada de $30$ cm se recortan cuadrados de lado $x$ en las esquinas para hacer una caja sin tapa. $V(x) = x(30 - 2x)^2$ con $0 < x < 15$.
$V'(x) = (30 - 2x)^2 - 4x(30 - 2x) = (30 - 2x)(30 - 6x)$; se anula en $x = 5$ (y en $15$, que no da caja). $V(5) = 5\cdot400 = 2000$ cm$^3$: el máximo, porque $V(0) = V(15) = 0$.

**Otro ejemplo (la luz toma el camino más rápido).** Fermat (1662) propuso que la luz sigue el camino de **tiempo mínimo**. Minimizando el tiempo total entre dos puntos de medios con velocidades $v_1$ y $v_2$ se obtiene
$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$: la **ley de Snell** (ver [[fis-ondas-calor-fluidos]]). Una ley física sale de un problema de optimización.

## 5. Razones relacionadas

Cuando varias magnitudes cambian con el tiempo y están ligadas por una ecuación, se **deriva respecto al tiempo** (regla de la cadena). **Ejemplo resuelto.** Una escalera de $5$ m resbala por una pared: $x^2 + y^2 = 25$. Si el pie se aleja a $0{,}3$ m/s,
cuando $x = 3$ ($y = 4$): $2x\dot x + 2y\dot y = 0 \Rightarrow \dot y = -\frac{x}{y}\dot x = -\frac34\cdot0{,}3 = -0{,}225$ m/s: la parte alta baja a $0{,}225$ m/s.

## 6. Linealización, L'Hôpital y Newton

**Aproximación lineal.** Cerca de $a$, $f(x) \approx f(a) + f'(a)(x - a)$ (la recta tangente). **Ejemplo:** $\sqrt{9{,}3}$: $f(9) = 3$, $f'(9) = \frac16$; $\sqrt{9{,}3} \approx 3 + \frac{0{,}3}{6} = 3{,}05$ (valor real $3{,}0496$). Es la base de casi
todos los métodos numéricos y de la física en «pequeñas oscilaciones».

**Regla de L'Hôpital.** Si $\frac{f}{g}$ da $\frac00$ o $\frac\infty\infty$ en $a$ y $\frac{f'}{g'}$ tiene límite, entonces $\lim\frac fg = \lim\frac{f'}{g'}$.
**Ejemplo:** $\displaystyle\lim_{x\to0}\frac{1 - \cos x}{x^2} = \lim\frac{\sin x}{2x} = \frac12$. (Hay que comprobar que es indeterminación antes de aplicarla.)

**Método de Newton.** Para resolver $f(x) = 0$, se sustituye la curva por su tangente: desde $x_n$, la tangente corta el eje en

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} .
$$

Para $\sqrt2$ ($f = x^2 - 2$): $x_{n+1} = \frac12\bigl(x_n + \frac{2}{x_n}\bigr)$. Desde $x_0 = 1$: $1,\ 1{,}5,\ 1{,}41\overline{6},\ 1{,}41421569,\ 1{,}41421356\ldots$: **el número de cifras correctas se duplica** en cada paso
(convergencia **cuadrática**), muy superior a los $20$ pasos de la bisección. Pero requiere $f'$ y un valor inicial razonable; si no, puede divergir.

```python
def newton(f, df, x0, pasos=6):
    x = x0
    for _ in range(pasos):
        x = x - f(x) / df(x)
    return x

print(newton(lambda x: x * x - 2, lambda x: 2 * x, 1.0))   # 1.4142135623730951
```

## 7. Cómo estudiar una función

1. **Dominio** y puntos de discontinuidad; **cortes** con los ejes.
2. **Asíntotas**: verticales (donde el límite es $\pm\infty$), horizontales y oblicuas (límites en $\pm\infty$).
3. **Primera derivada**: crecimiento y extremos.
4. **Segunda derivada**: concavidad e inflexiones.
5. **Dibujo** y comprobación con un valor concreto.

## 8. Errores típicos

- Aplicar L'Hôpital sin comprobar que es una indeterminación $\frac00$ o $\frac\infty\infty$.
- Derivar un producto como producto de derivadas, o olvidar la derivada interior en la cadena.
- Suponer que $f'(c) = 0$ implica extremo (contraejemplo: $x^3$ en $0$).
- Olvidar los **extremos del intervalo** al optimizar en $[a, b]$.
- En razones relacionadas, sustituir los valores numéricos **antes** de derivar.
- Confundir que el límite exista con que la función esté definida en el punto.
- Usar el método de Newton con $f'(x_n) = 0$ o desde un punto lejano.

## Repaso: lo que debe quedarte dentro de un mes

1. $f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h}$: pendiente de la tangente y tasa instantánea.
2. $(x^n)' = nx^{n-1}$; producto, cociente, cadena; $(\sin x)' = \cos x$, $(e^x)' = e^x$, $(\ln x)' = 1/x$.
3. Extremos: $f' = 0$ y signo de $f''$; comparar con los extremos del intervalo.
4. Optimización en cinco pasos; Fermat $\Rightarrow$ Snell.
5. Newton $x_{n+1} = x_n - f/f'$ (cuadrático); bisección $\lceil\log_2(L/\varepsilon)\rceil$ pasos.

## Siguiente

`mat-calculo-2` estudia la operación inversa: la **integral**, el área bajo una curva y el **teorema fundamental** que une ambas mitades.
