---
id: mat-optimizacion
title: "Optimización: condiciones de optimalidad, convexidad, Lagrange y KKT, programación lineal, dualidad y algoritmos"
area: matematicas
trunk_level: 13
prerequisites: [mat-calculo-multivariable, mat-algebra-lineal-avanzada, mat-analisis-numerico]
academic_sources:
  - "Boyd, S.; Vandenberghe, L. Convex Optimization. Cambridge University Press, 2004."
  - "Nocedal, J.; Wright, S. J. Numerical Optimization, 2ª ed. Springer, 2006."
exercises:
  - id: punto-critico
    tier: 1
    prompt: |
      Halla el punto crítico de $f(x, y) = x^2 + xy + y^2 - 3x$, comprueba con la hessiana que es un mínimo y da el valor mínimo. Respuesta: `x;y;f`.
    answers: ["sha256:69048d3afe3fd8bcd7c647fd84c26aed2fefdd92da04da689d46f4a82ed64e0e"]
  - id: multiplicador-de-lagrange
    tier: 1
    prompt: |
      Maximiza $xy$ sujeto a $x + y = 10$ con un multiplicador de Lagrange ($\nabla(xy) = \lambda\nabla(x + y)$). ¿Cuál es el máximo y cuánto vale $\lambda$? Respuesta: `maximo;lambda`.
    answers: ["sha256:70257570e4cc2a27ffe49bfbfece99d48c71a4aafe192ce190049e7eeb62db62"]
  - id: minimo-en-una-variable
    tier: 1
    prompt: |
      ¿Dónde alcanza su mínimo $f(x) = x^2 - \ln x$ en $x > 0$? Respuesta: con **4 decimales**.
    answers: ["sha256:e1f45dd1266ea9ea1641d5117c8bcb57a092c44ae11d51fefb3e264b94227350"]
  - id: programacion-lineal
    tier: 1
    prompt: |
      Maximiza $3x + 2y$ sujeto a $x + y \le 4$, $x + 3y \le 6$, $x, y \ge 0$. Respuesta: el valor óptimo.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: velocidad-del-gradiente
    tier: 2
    prompt: |
      Se minimiza $f = \frac12(x^2 + 25y^2)$ por descenso de gradiente con paso $1/L = 0{,}04$. La componente lenta se multiplica por $1 - \mu/L = 0{,}96$ en cada paso. ¿Cuántas iteraciones hacen falta para reducirla de $1$ a $10^{-6}$ o menos? Respuesta: un entero.
    answers: ["sha256:fc95ce176603e9e1d1ffee39023b31dd856e00ad030526902604ed2a68a12c4b"]
  - id: newton-en-una-cuadratica
    tier: 2
    prompt: |
      Un paso de Newton desde $(0, 0)$ sobre $f = x^2 + 3y^2 + xy - x$ llega al mínimo exacto. ¿Dónde está? Respuesta: `x;y` con **4 decimales**.
    answers: ["sha256:192f7dd01c6ef51c28550992c0ad8ee177406d40a412331057e1abe3ab2c52d5"]
  - id: condiciones-kkt
    tier: 2
    prompt: |
      Minimiza $x^2 + y^2$ sujeto a $x + 2y \ge 4$. ¿Cuál es el valor mínimo y el multiplicador KKT de la restricción (con $\nabla f = \lambda\nabla g$)? Respuesta: `valor;lambda`.
    answers: ["sha256:5b89c2077f4ee59ffbcd0893f27595aff720bd100017facbc8f9146fa7f8190a"]
  - id: proyeccion-sobre-el-simplex
    tier: 2
    prompt: |
      Proyecta el punto $(0{,}8;\ 0{,}6;\ -0{,}2)$ sobre el símplex $\{x \ge 0,\ x_1 + x_2 + x_3 = 1\}$ (el punto del símplex más cercano en distancia euclídea). Respuesta: `x1;x2;x3`.
    answers: ["sha256:742daa0741ae4f0ef1a1f0eb4058db085170c957f316af76c0243bacdcf40569"]
  - id: dualidad-lineal
    tier: 2
    prompt: |
      Escribe el dual del problema de `programacion-lineal` ($\min 4u + 6v$ con $u + v \ge 3$, $u + 3v \ge 2$, $u, v \ge 0$) y resuélvelo. Respuesta: `valor;u;v`.
    answers: ["sha256:20773bee7bb0d4943e8981b3141148a3b0456c8526dbb33fe0ea7c05ca7b7ac4"]
  - id: seccion-aurea
    tier: 2
    prompt: |
      La búsqueda por sección áurea multiplica la longitud del intervalo por $0{,}618\ldots$ en cada iteración. ¿Cuántas hacen falta para pasar de longitud $1$ a $10^{-6}$ o menos? Respuesta: un entero.
    answers: ["sha256:35135aaa6cc23891b40cb3f378c53a17a1127210ce60e125ccf03efcfdaec458"]
  - id: caja-en-una-esfera
    tier: 2
    prompt: |
      ¿Cuál es el volumen máximo de una caja rectangular inscrita en la esfera unidad? Respuesta: con **4 decimales**.
    answers: ["sha256:0f6878c2e4932edcb0a3401005e739c1e5eecf76204cd6af494c729e85d2f5a4"]
  - id: metodo-simplex
    tier: 3
    prompt: |
      Resuelve con el método símplex: maximiza $5x + 4y + 3z$ sujeto a $2x + 3y + z \le 5$, $4x + y + 2z \le 11$, $3x + 4y + 2z \le 8$, $x, y, z \ge 0$. Respuesta: `valor;x;y;z`.
    answers: ["sha256:df4cd3f132727b222066b01ccab0153b5c52db185bab666bff24483751a7ea40"]
  - id: convergencia-de-newton
    tier: 3
    prompt: |
      Aplica Newton a $f(x) = e^x - 2x$ (es decir, a $f'(x) = e^x - 2 = 0$) desde $x_0 = 0$. ¿Cuántas iteraciones hacen falta para que $\lvert x_k - \ln 2\rvert < 10^{-12}$? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: metodo-de-barrera
    tier: 3
    prompt: |
      Para $\min x$ sujeto a $x \ge 1$, el método de barrera minimiza $t\,x - \ln(x - 1)$. Con $t = 10$, ¿dónde está el mínimo $x^*(t)$ y cuánto vale la brecha de dualidad $x^*(t) - 1$? Respuesta: `x;brecha`.
    answers: ["sha256:c6cdb454586c2ce90a43ca673892ba53ffc8cfe0aac65d199c5e8d28cb5b8fb2"]
  - id: problema-de-la-mochila
    tier: 3
    prompt: |
      Mochila 0/1 con capacidad $26$ y objetos de pesos $(12, 7, 11, 8, 9)$ y valores $(24, 13, 23, 15, 16)$. ¿Cuál es el valor máximo? Usa programación dinámica. Respuesta: un entero.
    answers: ["sha256:031b4af5197ec30a926f48cf40e11a7dbc470048a21e4003b7a3c07c5dab1baa"]
  - id: llenado-de-agua
    tier: 3
    prompt: |
      Se reparte una potencia total $1$ entre tres canales con ruidos $n = (0{,}1;\ 0{,}5;\ 1)$ para maximizar $\sum\log_2(1 + x_i/n_i)$. La solución KKT es $x_i = \max(0, \nu - n_i)$. ¿Cuánto vale el nivel $\nu$ y la capacidad total? Respuesta: `nu;capacidad`, la capacidad con **4 decimales**.
    answers: ["sha256:f7911547b645ef7b540c0d7dd17dd8b673b9853cc78ec57523486d99c181bf62"]
---

# Optimización: condiciones de optimalidad, convexidad, Lagrange y KKT, programación lineal, dualidad y algoritmos

Casi toda la ingeniería y la ciencia de datos se reduce a **elegir lo mejor bajo restricciones**: entrenar un modelo es minimizar una pérdida
([[ia-aprendizaje-estadistico]]), diseñar un controlador es minimizar un coste ([[rob-control]]), repartir recursos es un programa lineal. Este nodo da
las tres piezas: **cuándo** un punto es óptimo (condiciones de primer y segundo orden, Lagrange, KKT), **por qué** los problemas convexos son los buenos
(todo mínimo local es global y la dualidad da certificados), y **cómo** se calculan (gradiente, Newton, símplex, barrera, programación dinámica).

## Objetivos

Al terminar sabrás:

1. Aplicar las condiciones de optimalidad sin restricciones (gradiente nulo, hessiana) y reconocer funciones y conjuntos convexos.
2. Resolver problemas con igualdades (multiplicadores de Lagrange) y con desigualdades (condiciones KKT).
3. Plantear y resolver programas lineales con el método símplex, y escribir y usar su dual.
4. Analizar la convergencia del descenso de gradiente y de Newton, y elegir el paso.
5. Usar métodos de barrera y penalización, y proyecciones sobre conjuntos simples.
6. Resolver problemas discretos pequeños con programación dinámica.

## Qué debes dominar antes

[[mat-calculo-multivariable]] (gradiente, hessiana, regla de la cadena), [[mat-algebra-lineal-avanzada]] (matrices definidas positivas, autovalores) y
[[mat-analisis-numerico]] (Newton, condicionamiento).

> [!question] Test de entrada
> 1. ¿Cuál es el gradiente de $x^2 + 3xy$?
> 2. ¿Es definida positiva $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$?
> 3. ¿Qué devuelve una iteración de Newton para $f(x) = 0$?
>
> Respuestas: $(2x + 3y, 3x)$; sí (autovalores 1 y 3); $x - f(x)/f'(x)$.

## 1. Para qué sirve

- **Aprendizaje automático**: entrenar es minimizar el riesgo empírico; regularizar y las máquinas de vectores soporte son problemas convexos con dual.
- **Control y robótica**: LQR y control predictivo (MPC) resuelven una optimización en cada instante; planificación de trayectorias.
- **Investigación operativa**: producción, transporte, horarios y redes son programas lineales o enteros.
- **Comunicaciones y finanzas**: reparto de potencia (llenado de agua), carteras de Markowitz.

## 2. Sin restricciones: condiciones de optimalidad y convexidad

**Primer orden.** Si $x^*$ es un mínimo local de $f$ diferenciable, $\nabla f(x^*) = 0$. **Segundo orden.** Si además $\nabla^2f(x^*) \succ 0$ (definida positiva), $x^*$ es un mínimo
local estricto; si la hessiana tiene autovalores de signos distintos, es un punto de silla.

Un conjunto es **convexo** si contiene el segmento entre dos de sus puntos; una función es **convexa** si $f(\theta x + (1 - \theta)y) \le \theta f(x) + (1 - \theta)f(y)$. Para $f$ dos
veces diferenciable, equivale a $\nabla^2f \succeq 0$ en todo punto.

**Teorema.** Si $f$ es convexa, todo mínimo local es global, y el conjunto de mínimos es convexo.

*Demostración.* Si $x$ fuera mínimo local y $f(y) < f(x)$, los puntos $x + \theta(y - x)$ con $\theta$ pequeño cumplirían $f \le (1 - \theta)f(x) + \theta f(y) < f(x)$, contradiciendo la
minimalidad local. $\blacksquare$

> [!example] Ejemplo resuelto 1: un mínimo cuadrático
> $f(x, y) = x^2 + xy + y^2 - 3x$: $\nabla f = (2x + y - 3, x + 2y) = 0$ da $(2, -1)$, y la hessiana $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ es definida positiva: mínimo global
> (la función es convexa), con valor $4 - 2 + 1 - 6 = -3$. Una cuadrática $\frac12x^{\mathsf T}Hx - b^{\mathsf T}x$ con $H \succ 0$ se minimiza resolviendo $Hx = b$.

## 3. Restricciones de igualdad: multiplicadores de Lagrange

Para $\min f(x)$ sujeto a $h(x) = 0$, en un óptimo regular $\nabla f(x^*) = \lambda\nabla h(x^*)$: los gradientes son paralelos, porque moverse por la restricción no puede
mejorar $f$ en primer orden. Se resuelve el sistema $\nabla_x\mathcal L = 0$, $h = 0$ con el **lagrangiano** $\mathcal L(x, \lambda) = f(x) - \lambda h(x)$. El multiplicador mide la
**sensibilidad**: $\lambda = \frac{\partial f^*}{\partial c}$ si la restricción es $h = c$. Por ejemplo, el máximo de $xy$ con $x + y = 10$ es $25$ con $\lambda = 5$: si el presupuesto
sube a $10{,}1$, el máximo crece aproximadamente $0{,}5$.

## 4. Desigualdades: condiciones KKT

Para $\min f(x)$ sujeto a $g_i(x) \le 0$, las **condiciones de Karush-Kuhn-Tucker** en un óptimo (con una cualificación de restricciones, como la de Slater) son:

$$
\nabla f(x^*) + \sum_i\mu_i\nabla g_i(x^*) = 0, \qquad g_i(x^*) \le 0, \qquad \mu_i \ge 0, \qquad \mu_ig_i(x^*) = 0 .
$$

La última, la **holgura complementaria**, dice que una restricción inactiva tiene multiplicador cero. En un problema convexo, las KKT son **suficientes**:
cualquier punto que las cumpla es óptimo.

> [!example] Ejemplo resuelto 2: la proyección sobre un semiplano (con menos ayuda)
> $\min x^2 + y^2$ con $x + 2y \ge 4$: el origen no es factible, así que la restricción está activa y $(2x, 2y) = \mu(1, 2)$, es decir, $(x, y) = \frac\mu2(1, 2)$. Sustituye en
> $x + 2y = 4$ para obtener $\mu$ y comprueba que $\mu \ge 0$ y que el punto es $(4/5, 8/5)$, la proyección del origen sobre la recta.

**Proyecciones.** Muchos algoritmos alternan un paso de gradiente con una proyección sobre el conjunto factible. Sobre el **símplex de probabilidad** la proyección
se calcula ordenando: se resta un umbral común y se trunca en cero.

## 5. Programación lineal y dualidad

Un **programa lineal** es $\max c^{\mathsf T}x$ sujeto a $Ax \le b$, $x \ge 0$. El conjunto factible es un poliedro y, si hay óptimo, se alcanza en un **vértice**. El **método
símplex** (Dantzig) recorre vértices adyacentes mejorando el objetivo: en cada paso entra la variable con coste reducido más favorable y sale la que marca la
**razón mínima**. En la práctica es muy rápido, aunque hay ejemplos exponenciales; los métodos de punto interior son polinómicos.

**Dualidad.** El **dual** de $\max\{c^{\mathsf T}x : Ax \le b, x \ge 0\}$ es $\min\{b^{\mathsf T}y : A^{\mathsf T}y \ge c, y \ge 0\}$.

- **Dualidad débil**: para cualesquiera factibles, $c^{\mathsf T}x \le b^{\mathsf T}y$. *Demostración*: $c^{\mathsf T}x \le (A^{\mathsf T}y)^{\mathsf T}x = y^{\mathsf T}Ax \le y^{\mathsf T}b$. $\blacksquare$
- **Dualidad fuerte**: si uno tiene óptimo, el otro también y los valores coinciden. Un par primal-dual con el mismo valor es un **certificado** de optimalidad.

Las variables duales son los **precios sombra** de los recursos: cuánto mejora el objetivo por unidad extra de cada $b_i$.

## 6. Algoritmos

**Descenso de gradiente.** $x_{k+1} = x_k - \eta\nabla f(x_k)$. Si $f$ es $\mu$-fuertemente convexa con gradiente $L$-lipschitziano y $\eta = 1/L$, el error decrece como
$(1 - \mu/L)^k$: el **número de condición** $L/\mu$ fija la velocidad. Con $\eta > 2/L$ diverge.

**Newton.** $x_{k+1} = x_k - [\nabla^2f(x_k)]^{-1}\nabla f(x_k)$. Cerca de un mínimo con hessiana definida positiva converge **cuadráticamente** (el número de cifras correctas se
duplica en cada paso), y en una cuadrática llega en un solo paso. Cada paso cuesta resolver un sistema lineal; para problemas grandes se usan quasi-Newton
(BFGS, L-BFGS) o gradiente conjugado.

**Búsqueda en una variable.** La **sección áurea** reduce un intervalo con un mínimo por el factor $0{,}618$ en cada evaluación, sin derivadas.

**Barrera y penalización.** Para restricciones $g_i \le 0$, el método de **barrera** minimiza $t\,f(x) - \sum\ln(-g_i(x))$ para $t$ creciente; el mínimo $x^*(t)$ recorre la
**trayectoria central** y la brecha de dualidad es $m/t$ (con $m$ restricciones): es la base de los métodos de punto interior. La **penalización** añade
$\frac\mu2\sum\max(0, g_i)^2$ y resuelve problemas sin restricciones cada vez más penalizados.

**Problemas discretos.** Si las variables son enteras (mochila, rutas), el problema es en general NP-difícil. Con estructura de subproblemas solapados, la
**programación dinámica** lo resuelve exactamente: la mochila 0/1 en $O(nC)$ para capacidad $C$ entera.

## 7. Comprobar con un programa

Cada algoritmo contra otro camino: gradiente frente a Newton, KKT frente a penalización, la mochila por programación dinámica frente a todas las
combinaciones, y el llenado de agua por bisección.

```python
import itertools
import math

# 1. Ejemplo resuelto 1: Newton (un paso) y descenso de gradiente llegan a (2, −1).
H, b = [[2.0, 1.0], [1.0, 2.0]], [3.0, 0.0]
det = H[0][0] * H[1][1] - H[0][1] * H[1][0]
newton = [(b[0] * H[1][1] - H[0][1] * b[1]) / det, (H[0][0] * b[1] - H[1][0] * b[0]) / det]
x = [0.0, 0.0]
for _ in range(500):
    g = [2 * x[0] + x[1] - 3, x[0] + 2 * x[1]]
    x = [x[0] - 0.3 * g[0], x[1] - 0.3 * g[1]]
assert max(abs(p - q) for p, q in zip(x, newton)) < 1e-12 and newton == [2.0, -1.0]

# 2. Ejemplo resuelto 2: KKT da (4/5, 8/5); la penalización cuadrática se acerca al aumentar μ.
mu_kkt = 8 / 5
assert abs(mu_kkt / 2 * 1 - 0.8) < 1e-15 and abs(mu_kkt / 2 * 2 - 1.6) < 1e-15
x = [0.0, 0.0]
for mu in (1, 10, 100, 1000, 10000):
    for _ in range(20000):
        v = max(0.0, 4 - x[0] - 2 * x[1])
        g = [2 * x[0] - 2 * mu * v, 2 * x[1] - 4 * mu * v]
        paso = 0.5 / (2 + 10 * mu)
        x = [x[0] - paso * g[0], x[1] - paso * g[1]]
assert abs(x[0] - 0.8) < 1e-3 and abs(x[1] - 1.6) < 1e-3

# 3. Mochila 0/1: programación dinámica frente a las 2^n combinaciones.
pesos, valores, C = [5, 4, 6, 3], [10, 40, 30, 50], 10
dp = [0] * (C + 1)
for w, v in zip(pesos, valores):
    for c in range(C, w - 1, -1):
        dp[c] = max(dp[c], dp[c - w] + v)
bruto = max(sum(v for v, s in zip(valores, sel) if s)
            for sel in itertools.product((0, 1), repeat=4)
            if sum(w for w, s in zip(pesos, sel) if s) <= C)
assert dp[C] == bruto == 90

# 4. Llenado de agua: bisección sobre el nivel ν con Σ max(0, ν − n_i) = P.
ruidos, P = [0.2, 0.4, 1.5], 1.0
lo, hi = 0.0, 3.0
for _ in range(200):
    nu = (lo + hi) / 2
    lo, hi = (nu, hi) if sum(max(0.0, nu - n) for n in ruidos) < P else (lo, nu)
reparto = [max(0.0, nu - n) for n in ruidos]
assert abs(sum(reparto) - P) < 1e-12 and reparto[2] == 0.0
print("Nivel de agua:", round(nu, 6), "reparto:", [round(r, 6) for r in reparto])
```

## 8. Errores típicos

- Declarar mínimo un punto con gradiente nulo sin mirar la hessiana (puede ser un máximo o una silla).
- Usar Lagrange con desigualdades sin comprobar el signo del multiplicador ni la holgura complementaria.
- Olvidar que fuera de la convexidad las KKT son necesarias pero no suficientes.
- Elegir el paso del gradiente sin relación con la curvatura ($\eta < 2/L$).
- Confundir un programa lineal entero con su relajación continua: redondear la solución puede ser infactible o malo.
- No comprobar con el dual: es el certificado gratuito de que el óptimo es correcto.

## 9. Resumen

- $\nabla f = 0$ y hessiana definida positiva; convexidad ⇒ mínimo local = global.
- Lagrange: $\nabla f = \lambda\nabla h$, $\lambda$ = sensibilidad. KKT: estacionariedad, factibilidad, $\mu \ge 0$, holgura complementaria.
- Programación lineal: vértices, símplex, dual, dualidad débil y fuerte, precios sombra.
- Gradiente: factor $1 - \mu/L$; Newton: convergencia cuadrática; sección áurea; barrera ($m/t$) y penalización; programación dinámica.

## Repaso: lo que debe quedarte dentro de un mes

1. En un problema convexo, lo local es global y las KKT bastan.
2. Un multiplicador es un precio: cuánto vale aflojar la restricción.
3. Un óptimo lineal está en un vértice, y el dual lo certifica.
4. Gradiente barato y lento según la condición; Newton caro y cuadrático.
5. Lo discreto se resuelve por enumeración inteligente: programación dinámica o ramificación y poda.

## Siguiente

En las ramas, `rob-control-optimo-mpc` (optimizar en tiempo real), `ia-aprendizaje-refuerzo` (optimizar decisiones secuenciales) y `mat-analisis-funcional`
(optimización en espacios de funciones). La base estadística está en [[ia-aprendizaje-estadistico]].
