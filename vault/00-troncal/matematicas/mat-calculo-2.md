---
id: mat-calculo-2
title: "Cálculo II: integrales, series y polinomios de Taylor"
area: matematicas
trunk_level: 9
prerequisites: [mat-calculo-1, mat-numeros-complejos]
academic_sources:
  - "Spivak, M. Calculus, 4ª ed. Publish or Perish, 2008."
  - "Apostol, T. M. Calculus, vol. 1, 2ª ed. Wiley, 1967."
  - "Stewart, J. Calculus: Early Transcendentals. Cengage Learning (varias ediciones)."
  - "Courant, R.; John, F. Introduction to Calculus and Analysis, vol. 1. Springer (Classics in Mathematics)."
hints:
  - "Concepto: la integral definida es el límite de sumas de áreas de rectángulos y, por el teorema fundamental, se calcula con una primitiva: F(b) − F(a). Para encontrar primitivas, piensa «¿qué derivada produce esto?»; si hay una función compuesta, sustitución; si hay un producto de dos tipos distintos (polinomio por exponencial, logaritmo), partes. Una serie converge si los términos decrecen lo bastante deprisa (compara con la geométrica o con 1/n^p)."
  - "Herramienta: comprueba cualquier integral con una cuadratura numérica (regla de Simpson con muchos subintervalos en Python) y cualquier suma con una suma parcial de muchos términos; sympy (`integrate`, `summation`, `series`) sirve para contrastar a mano."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html (integrales y series); docs.scipy.org/doc/scipy/reference/integrate.html (quad, simpson); Spivak, capítulos sobre integrales, series infinitas y series de Taylor."
exercises:
  - id: integral-de-x2
    tier: 1
    prompt: |
      Calcula $\displaystyle\int_0^3 x^2\,dx$. Respuesta: un número.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: integral-de-polinomio
    tier: 1
    prompt: |
      Calcula $\displaystyle\int_0^2 (3x^2 - 2x + 1)\,dx$. Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: area-bajo-el-seno
    tier: 1
    prompt: |
      Calcula el área bajo $y = \sin x$ entre $x = 0$ y $x = \pi$. Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: sustitucion
    tier: 2
    prompt: |
      Calcula $\displaystyle\int_0^1 x\,e^{x^2}\,dx$ (haz $u = x^2$). Respuesta: **cuatro decimales**.
    answers: ["sha256:6cb1864ae8baf9c75e2c1eafd842c00c4b5b15ce7f446a8561cff02558e0e5ad"]
  - id: integral-de-ln
    tier: 2
    prompt: |
      Calcula $\displaystyle\int_1^e \ln x\,dx$ (por partes). Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: por-partes
    tier: 2
    prompt: |
      Calcula $\displaystyle\int_0^{\pi/2} x\cos x\,dx$ (por partes). Respuesta: **cuatro decimales**.
    answers: ["sha256:2ba583ca3acc0919c2908943522249e7d4059163b227799017fd7e73babea5bb"]
  - id: area-entre-curvas
    tier: 2
    prompt: |
      Calcula el área de la región encerrada entre $y = x$ e $y = x^2$. Respuesta: fracción «a/b».
    answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
  - id: volumen-de-revolucion
    tier: 2
    prompt: |
      Se hace girar alrededor del eje $x$ la región bajo $y = \sqrt{x}$ entre $x = 0$ y $x = 4$. El volumen del sólido es $k\pi$. ¿Cuánto vale $k$? (Pista: $V = \pi\int y^2\,dx$.)
      Respuesta: un número.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: integral-impropia
    tier: 2
    prompt: |
      Calcula $\displaystyle\int_0^{\infty} e^{-2x}\,dx$. Respuesta: fracción «a/b».
    answers: ["sha256:d939926f05444b0f4495fb9629ecbfa80d99a8ec1a20d06800ca5a3d5f4fd276"]
  - id: serie-geometrica
    tier: 2
    prompt: |
      Calcula $\displaystyle\sum_{n=0}^{\infty}\left(\tfrac{2}{3}\right)^n$. Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: serie-telescopica
    tier: 3
    prompt: |
      Calcula $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+1)}$ (pista: $\frac{1}{n(n+1)} = \frac1n - \frac1{n+1}$). Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: valor-medio
    tier: 3
    prompt: |
      Calcula el **valor medio** de $f(x) = x^2$ en el intervalo $[0, 3]$, es decir $\frac{1}{3 - 0}\int_0^3 f(x)\,dx$. Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: serie-de-taylor-de-e
    tier: 3
    prompt: |
      Aproxima $e$ con los seis primeros términos de su serie de Taylor, $\sum_{k=0}^{5}\frac{1}{k!}$. Respuesta: **cuatro decimales**.
    answers: ["sha256:0c6403750a651dcf5896b5deff7f36f7f16cc90cf425d03395ca044e0de537f2"]
  - id: regla-de-simpson
    tier: 3
    prompt: |
      Aplica la regla de Simpson con $n = 4$ subintervalos a $\displaystyle\int_0^1\frac{4}{1 + x^2}\,dx$ (cuyo valor exacto es $\pi$).
      $\left(\int_a^b f \approx \frac h3[f_0 + 4f_1 + 2f_2 + 4f_3 + f_4],\ h = \frac{b-a}{4}\right)$. Respuesta: **cuatro decimales**.
    answers: ["sha256:23741492d396d4d556f0982fbcc97870d7b0e61859d7d7619d8418f875a42602"]
  - id: radio-de-convergencia
    tier: 3
    prompt: |
      ¿Cuál es el radio de convergencia de la serie de potencias $\displaystyle\sum_{n=1}^{\infty}\frac{(x-1)^n}{n\,3^n}$? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: integral-de-polinomio-2
    tier: 3
    prompt: |
      Calcula $\displaystyle\int_0^1 x^2(1 - x)\,dx$. Respuesta: fracción «a/b».
    answers: ["sha256:47ba35745effadff9e578cbc46df1652bbf082998fb90393de64b5c1f5bd1fa6"]
---

# Cálculo II: integrales, series y polinomios de Taylor

El cálculo diferencial mide cómo cambia una cantidad. La **integral** hace lo inverso: reúne **infinitos** cambios o contribuciones pequeñas en un total: el área bajo una curva, la distancia recorrida a partir de la velocidad, el
trabajo de una fuerza variable, la probabilidad en una distribución continua. El **teorema fundamental** une ambas mitades, y las **series** permiten expresar casi cualquier función como un «polinomio infinito», que es como las calculadoras y
los ordenadores evalúan $\sin$, $\exp$ o $\ln$.

## Objetivos

Al terminar sabrás:

1. Definir la integral de Riemann y enunciar y aplicar el **teorema fundamental del cálculo**.
2. Calcular integrales por sustitución, por partes y por tablas.
3. Aplicar la integral a áreas, volúmenes, valores medios, trabajo y distancias.
4. Tratar integrales impropias y estimar integrales con métodos numéricos.
5. Decidir si una **serie** converge y sumar series geométricas y telescópicas.
6. Construir y usar **polinomios y series de Taylor**.

> [!question] Test de entrada
> 1. ¿Cuál es la derivada de $x^3$? 2. ¿Cuánto vale el área de un rectángulo de base $4$ y altura $2{,}5$? 3. ¿Cuánto vale $1 + \frac12 + \frac14 + \frac18 + \cdots$ si sigue indefinidamente?
>
> Respuestas: $3x^2$; $10$; **$2$** (lo demostrarás en este nodo).

## 1. Para qué sirve

- **Física**: distancia recorrida $=\int v\,dt$; trabajo $=\int F\,dx$; carga $=\int I\,dt$; energía consumida $=\int P\,dt$ (kWh).
- **Geometría**: áreas, volúmenes y longitudes de curvas y sólidos que no son figuras simples.
- **Probabilidad y estadística**: la probabilidad en una variable continua es una integral de la densidad.
- **Ingeniería y computación**: señales, filtros, transformadas; evaluación de funciones por series.

## 2. La integral definida

Se quiere el **área bajo** $y = f(x) \ge 0$ entre $a$ y $b$. Se divide $[a, b]$ en $n$ trozos de ancho $\Delta x = \frac{b - a}{n}$ y se suman las áreas de los rectángulos:
$\sum_{i=1}^n f(x_i)\,\Delta x$. Al hacer $n\to\infty$, si el límite existe (lo hace para toda función **continua**) se llama **integral definida**:

$$
\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^{n} f(x_i)\,\Delta x .
$$

Si $f$ toma valores negativos, esos trozos restan: es un **área neta** (con signo).

**Ejemplo (calculado con la definición).** $\int_0^1 x^2\,dx$ con $x_i = \frac in$: $\sum\frac{i^2}{n^2}\cdot\frac1n = \frac{1}{n^3}\sum i^2 = \frac{1}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} \to \frac{2}{6} = \frac13$.

**Propiedades:** $\int_a^b(f + g) = \int f + \int g$; $\int_a^b cf = c\int_a^b f$; $\int_a^b f + \int_b^c f = \int_a^c f$; $\int_b^a f = -\int_a^b f$; si $f \le g$, $\int f \le \int g$.

## 3. El teorema fundamental del cálculo

Tiene dos partes que dicen que derivar e integrar son **operaciones inversas**.

**Parte 1.** Si $f$ es continua y $F(x) = \displaystyle\int_a^x f(t)\,dt$, entonces $F'(x) = f(x)$.
*Demostración.* $\dfrac{F(x + h) - F(x)}{h} = \dfrac1h\displaystyle\int_x^{x+h}f(t)\,dt$, que es el valor medio de $f$ en $[x, x + h]$. Como $f$ es continua, ese valor tiende a $f(x)$ al hacer $h\to0$. $\blacksquare$

**Parte 2.** Si $G$ es **cualquier primitiva** de $f$ ($G' = f$), entonces $\displaystyle\int_a^b f(x)\,dx = G(b) - G(a)$.
*Demostración.* $F(x) = \int_a^x f$ y $G$ son primitivas de $f$, luego difieren en una constante: $F = G + C$. Como $F(a) = 0$, $C = -G(a)$ y $\int_a^b f = F(b) = G(b) - G(a)$. $\blacksquare$

Esto **evita calcular límites de sumas**: para integrar, basta encontrar una primitiva. **Ejemplos:** $\int_0^3 x^2\,dx = \left[\frac{x^3}{3}\right]_0^3 = 9$; $\int_0^\pi\sin x\,dx = [-\cos x]_0^\pi = 1 + 1 = 2$.

## 4. Primitivas y técnicas de integración

La **integral indefinida** $\int f\,dx = G(x) + C$ es la familia de primitivas. Tabla básica:

| $f$ | $\int f\,dx$ |
|---|---|
| $x^n\ (n\ne-1)$ | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac1x$ | $\ln\lvert x\rvert$ |
| $e^x$ | $e^x$ |
| $\sin x$ / $\cos x$ | $-\cos x$ / $\sin x$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x$ |

### Sustitución

Es la regla de la cadena al revés: $\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$ con $u = g(x)$. **Ejemplo resuelto:** $\int_0^1 x e^{x^2}dx$: con $u = x^2$, $du = 2x\,dx$ y los límites pasan de $[0,1]$ a $[0,1]$:
$\frac12\int_0^1 e^u\,du = \frac{e - 1}{2} \approx 0{,}859$.

### Integración por partes

Es la regla del producto al revés: $\displaystyle\int u\,dv = uv - \int v\,du$. (De $(uv)' = u'v + uv'$ se integra y se despeja.) Se elige $u$ como lo que se simplifica al derivar y $dv$ como lo que se sabe integrar.
**Ejemplos resueltos:** $\int x e^x dx$ con $u = x$, $dv = e^x dx$: $x e^x - \int e^x dx = (x - 1)e^x$. $\int\ln x\,dx$ con $u = \ln x$, $dv = dx$: $x\ln x - \int1\,dx = x\ln x - x$.

### Fracciones simples

Para $\frac{P(x)}{Q(x)}$ se descompone en fracciones más sencillas: $\dfrac{1}{x^2 - 1} = \dfrac12\left(\dfrac{1}{x - 1} - \dfrac{1}{x + 1}\right)$, cuya integral es $\frac12\ln\left|\frac{x - 1}{x + 1}\right|$.

**Observación importante.** Derivar es **mecánico**; integrar **no**: hay funciones muy simples sin primitiva elemental, como $e^{-x^2}$ o $\frac{\sin x}{x}$. Para ellas se usan integrales numéricas o series.

## 5. Aplicaciones geométricas y físicas

- **Área entre curvas** ($f \ge g$ en $[a, b]$): $\int_a^b (f - g)\,dx$. Entre $y = x$ e $y = x^2$: $\int_0^1(x - x^2)dx = \frac12 - \frac13 = \frac16$.
- **Volumen de un sólido de revolución** (discos): girando $y = f(x)$ alrededor del eje $x$, $V = \pi\int_a^b f(x)^2\,dx$. La región bajo $y = \sqrt x$ en $[0, 9]$ da $\pi\int_0^9 x\,dx = \frac{81\pi}{2}$. *Comprobación con un cono*
  ($f = \frac rh x$): $V = \pi\frac{r^2}{h^2}\frac{h^3}{3} = \frac13\pi r^2h$, la fórmula conocida.
- **Valor medio** de $f$ en $[a, b]$: $\bar f = \dfrac{1}{b - a}\displaystyle\int_a^b f(x)\,dx$. La tensión eficaz de la red ([[ing-electricidad-basica]]) es la raíz del valor medio de $v^2$.
- **Trabajo** de una fuerza variable: $W = \int F\,dx$. Un muelle: $\int_0^x kx'\,dx' = \frac12kx^2$, la energía elástica de [[fis-fuerzas-energia]].
- **Distancia**: $s = \int v\,dt$; con $v(t) = 3t^2$ m/s, en $[0, 2]$ s recorre $8$ m.
- **Longitud de una curva** $y = f(x)$: $\int_a^b\sqrt{1 + f'(x)^2}\,dx$.

## 6. Integrales impropias

Cuando el intervalo es infinito o la función se dispara, se define con un límite. $\displaystyle\int_0^\infty e^{-2x}dx = \lim_{M\to\infty}\left[-\tfrac12e^{-2x}\right]_0^M = \tfrac12$.
**Un resultado clave:** $\displaystyle\int_1^\infty\frac{dx}{x^p}$ converge (a $\frac{1}{p-1}$) **si y solo si $p > 1$**: para $p = 1$ da $\lim\ln M = \infty$ (diverge) y para $p = 2$ vale $1$. Otro, sin primitiva elemental:
$\int_{-\infty}^{\infty}e^{-x^2}dx = \sqrt\pi$ (la campana de Gauss).

## 7. Integración numérica

Si no se encuentra la primitiva, se aproxima. La **regla del trapecio** une los puntos con segmentos; la **regla de Simpson** ($n$ par, $h = \frac{b-a}{n}$) ajusta parábolas:

$$
\int_a^b f \approx \frac h3\bigl[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + 4f_{n-1} + f_n\bigr] .
$$

**Ejemplo:** $\int_0^1\frac{4}{1 + x^2}dx = \pi$; con $n = 4$, Simpson da $3{,}1416$ (error $\approx 2\cdot10^{-5}$). Su error es proporcional a $h^4$, frente a $h^2$ del trapecio.

```python
def simpson(f, a, b, n=1000):          # n par
    h = (b - a) / n
    s = f(a) + f(b)
    for i in range(1, n):
        s += f(a + i * h) * (4 if i % 2 else 2)
    return s * h / 3

import math
print(simpson(lambda x: 4 / (1 + x * x), 0, 1, 4))     # 3.1415686...
print(simpson(math.sin, 0, math.pi, 1000))             # 2.0000000...
```

## 8. Sucesiones y series

Una **serie** es la suma de los infinitos términos de una sucesión: $\sum_{n=1}^\infty a_n = \lim_{N\to\infty}S_N$ con $S_N = a_1 + \cdots + a_N$ (suma parcial). **Converge** si ese límite existe y es finito; si no, **diverge**.

**Serie geométrica.** $\displaystyle\sum_{n=0}^\infty ar^n = \dfrac{a}{1 - r}$ si $|r| < 1$ (y diverge si $|r| \ge 1$).
*Demostración.* $S_N = a(1 + r + \cdots + r^{N-1})$ y $(1 - r)S_N = a(1 - r^N)$, luego $S_N = a\frac{1 - r^N}{1 - r}\to\frac{a}{1 - r}$. $\blacksquare$
**Ejemplos:** $1 + \frac12 + \frac14 + \cdots = 2$; $\sum(\frac23)^n = 3$. **Aplicación:** una renta perpetua de $P$ euros al año con interés $r$ vale $\frac{P}{r}$ hoy; $0{,}\overline{9} = \frac{9}{10}\cdot\frac{1}{1 - 1/10} = 1$.

**Serie telescópica.** $\sum\frac{1}{n(n+1)} = \sum\left(\frac1n - \frac1{n+1}\right) = 1$ (los términos intermedios se cancelan).

**Condición necesaria:** si $\sum a_n$ converge, entonces $a_n\to0$. **No es suficiente**: la **serie armónica** $\sum\frac1n$ **diverge**.
*Demostración (Oresme).* Agrupando: $1 + \frac12 + (\frac13 + \frac14) + (\frac15 + \cdots + \frac18) + \cdots$; cada paréntesis suma al menos $\frac12$, y hay infinitos. $\blacksquare$
(Aun así crece muy lentamente: hacen falta unos $10^{43}$ términos para pasar de $100$.)

**Criterios de convergencia** (series de términos positivos): **comparación** (menor que una convergente converge; mayor que una divergente diverge); **de la integral** ($\sum\frac{1}{n^p}$ converge $\iff p > 1$, por la integral
impropia anterior); **del cociente** de d'Alembert: si $\frac{a_{n+1}}{a_n}\to L$, converge si $L < 1$ y diverge si $L > 1$. Una serie alternada con términos decrecientes a cero **converge** (Leibniz):
$1 - \frac12 + \frac13 - \cdots = \ln 2$.

## 9. Series de potencias y polinomios de Taylor

Una **serie de potencias** $\sum a_n(x - a)^n$ converge en un intervalo $|x - a| < R$ (**radio de convergencia**), que se halla con el cociente: $R = \lim\left|\frac{a_n}{a_{n+1}}\right|$. Para $\sum\frac{(x - 1)^n}{n\,3^n}$: $R = 3$.

Si $f$ tiene derivadas de todos los órdenes, su **serie de Taylor** en $a$ es

$$
f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x - a)^n = f(a) + f'(a)(x - a) + \frac{f''(a)}{2}(x - a)^2 + \cdots .
$$

Los primeros términos son la recta tangente (aproximación lineal), la parábola osculatriz, etc. Series fundamentales (en $a = 0$):

$$
e^x = \sum\frac{x^n}{n!},\qquad \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots,\qquad \cos x = 1 - \frac{x^2}{2!} + \cdots,\qquad \frac{1}{1 - x} = \sum x^n\ (|x| < 1) .
$$

**Ejemplos.** $e \approx \sum_{k=0}^{5}\frac{1}{k!} = 2{,}71667$ (el valor real es $2{,}71828$; el error es menor que $\frac{1}{5!\cdot5}\approx0{,}0017$). $\sin 0{,}1 \approx 0{,}1 - \frac{0{,}001}{6} = 0{,}099833$ (real: $0{,}0998334$): con tan pocos términos se
obtienen seis cifras. **Así calculan las funciones los ordenadores.**
Derivando término a término $e^x$ se obtiene $e^x$, y de $\sin$ sale $\cos$: las series reproducen todas las propiedades. Además, sustituyendo $x \to ix$ en $e^x$ aparece la **fórmula de Euler**
$e^{ix} = \cos x + i\sin x$ (ver el nodo de números complejos).

**Error:** el resto de Taylor de orden $n$ es $R_n = \frac{f^{(n+1)}(c)}{(n + 1)!}(x - a)^{n+1}$ para algún $c$ entre $a$ y $x$ (resto de Lagrange): permite acotar cuántos términos hacen falta.

## 10. Errores típicos

- Olvidar la constante $+C$ en una integral indefinida; o ignorarla en una definida (se cancela).
- Cambiar de variable en una integral definida **sin cambiar los límites**.
- Pensar que $\sum a_n$ converge porque $a_n\to0$ (la armónica diverge).
- Usar la fórmula de la serie geométrica con $|r| \ge 1$.
- Aplicar «la integral del producto es el producto de las integrales».
- Confundir **área** (siempre positiva) con la integral definida (área **neta**, con signo).
- Una serie de Taylor puede no converger en todo punto: hay que respetar el radio de convergencia.

## Repaso: lo que debe quedarte dentro de un mes

1. $\int_a^b f = \lim\sum f(x_i)\Delta x$; teorema fundamental: $\int_a^b f = G(b) - G(a)$ con $G' = f$.
2. Sustitución (regla de la cadena al revés); partes ($\int u\,dv = uv - \int v\,du$).
3. Área entre curvas; volumen $\pi\int f^2$; valor medio; trabajo $\int F\,dx$.
4. $\sum ar^n = \frac{a}{1 - r}$ ($|r| < 1$); $\sum\frac1{n^p}$ converge $\iff p > 1$; criterio del cociente.
5. Taylor: $\sum\frac{f^{(n)}(a)}{n!}(x - a)^n$; $e^x$, $\sin$, $\cos$, $\frac{1}{1 - x}$.

## Siguiente

El nodo `mat-algebra-lineal` pasa de una variable a **muchas**: vectores, matrices y sistemas; y más adelante `mat-calculo-multivariable` y `mat-ecuaciones-diferenciales` aplican todo esto a varias variables y a la dinámica.
