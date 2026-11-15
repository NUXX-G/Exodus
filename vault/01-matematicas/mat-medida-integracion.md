---
id: mat-medida-integracion
title: "Medida e integración de Lebesgue: σ-álgebras, medida de Lebesgue, teoremas de convergencia, Fubini, Lp y probabilidad"
area: matematicas
trunk_level: 12
prerequisites: [mat-topologia, mat-probabilidad]
academic_sources:
  - "Folland, G. B. Real Analysis: Modern Techniques and Their Applications, 2ª ed. Wiley, 1999."
  - "Tao, T. An Introduction to Measure Theory. American Mathematical Society (Graduate Studies in Mathematics 126), 2011."
exercises:
  - id: medida-del-cantor
    tier: 1
    prompt: |
      El conjunto de Cantor se obtiene quitando de $[0, 1]$ el tercio central abierto y repitiendo en cada pieza. Suma las longitudes quitadas. ¿Cuál es la medida de Lebesgue del conjunto de Cantor? Respuesta: un número.
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: integral-de-una-simple
    tier: 1
    prompt: |
      Calcula $\int\varphi\,d\lambda$ para la función simple $\varphi = 2\cdot\mathbf 1_{[0,1)} + 5\cdot\mathbf 1_{[1,3)} - \mathbf 1_{[3,4)}$. Respuesta: un número.
    answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: funcion-de-dirichlet
    tier: 1
    prompt: |
      Sea $f = \mathbf 1_{\mathbb Q\cap[0,1]}$. ¿Cuánto vale su integral de Lebesgue en $[0, 1]$? ¿Y la diferencia entre sus integrales superior e inferior de Darboux (que muestra que no es integrable Riemann)? Respuesta: `lebesgue;diferencia`.
    answers: ["sha256:c339ed9e47b6b2640c714057eaf0902da6b31e55b805599aed8d7110a6539280"]
  - id: norma-lp
    tier: 1
    prompt: |
      ¿Cuánto vale la norma $\|f\|_3 = \left(\int_0^1|f|^3\right)^{1/3}$ de $f(x) = x$ en $L^3[0, 1]$? Respuesta: con **4 decimales**.
    answers: ["sha256:4dc5cc4e7c4289f7d78f16794118c2114d0c202080acb5b9922476ec9efa0e4d"]
  - id: cantor-gordo
    tier: 2
    prompt: |
      Construye un "Cantor gordo": en el paso $n$ quita de la mitad de cada uno de los $2^{n-1}$ intervalos que quedan un intervalo abierto de longitud $8^{-n}$. ¿Qué medida tiene el conjunto resultante (cerrado, sin interior)? Respuesta: una fracción irreducible `p/q` o un decimal con **4 decimales**.
    answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652", "sha256:4cbc34b71acf4b66192144d49c4abae2fcc1cdaff3802cb604b0c3408aa861f7"]
  - id: convergencia-monotona
    tier: 2
    prompt: |
      Calcula $\int_0^1\min(x^{-1/2}, n)\,dx$ y usa el teorema de convergencia monótona para hallar $\int_0^1 x^{-1/2}\,dx$. Respuesta: el valor de esta última.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: convergencia-dominada
    tier: 2
    prompt: |
      Sea $I_n = \int_0^\infty(1 + x/n)^{-n}\,dx$. ¿Cuánto vale $I_{10}$ y cuál es $\lim I_n$ (justifícalo con convergencia dominada)? Respuesta: `I10;limite`, $I_{10}$ con **4 decimales**.
    answers: ["sha256:6a3508eb7ba6e375a84895347669badc9aff0545458d0b401aee6a95e2b0fd70"]
  - id: fatou-estricto
    tier: 2
    prompt: |
      Sea $f_n = n\cdot\mathbf 1_{(0, 1/n)}$. ¿Cuánto vale $\int f_n$ para cada $n$ y cuánto vale $\int\lim f_n$? Respuesta: `integral;integral_del_limite`.
    answers: ["sha256:8f42786de6c4830af682e9e652094033da177111ab13c8ec6bb20af2c9019249"]
  - id: fubini
    tier: 2
    prompt: |
      Calcula $\iint_{[0,1]^2}xy\,e^{x^2 + y^2}\,dx\,dy$ separando las variables con Fubini. Respuesta: con **4 decimales**.
    answers: ["sha256:04ff24321f906eabc205fd9e350fb9448025262c1718952683cb23fd2a89ef01"]
  - id: capas
    tier: 2
    prompt: |
      Si $X \sim \operatorname{Exp}(2)$, calcula $E[X]$ con la fórmula de las capas $E[X] = \int_0^\infty\Pr(X > t)\,dt$. Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: medida-de-un-conjunto
    tier: 2
    prompt: |
      ¿Cuál es la medida de Lebesgue de $\{x \in [0, 1] : x^2 < 0{,}3\}\cup\{x \in [0, 1] : \operatorname{sen}\pi x > 0{,}9\}$? Respuesta: con **4 decimales**.
    answers: ["sha256:5c8a1d1752eacd0bb9df7d87a6b8396142f889ba100a62245ed8ef8ce233f611"]
  - id: fubini-falla
    tier: 3
    prompt: |
      Calcula $\int_0^1\left(\int_0^1\frac{x^2 - y^2}{(x^2 + y^2)^2}\,dy\right)dx$ y la integral en el orden contrario. (La función no es integrable en el cuadrado.) Respuesta: `primer_orden;segundo_orden` con **4 decimales**.
    answers: ["sha256:64e40e41f5544dbab5f658b7f44ef44bf268aa987b33fb8c3223b2e225aa28f4"]
  - id: radon-nikodym
    tier: 3
    prompt: |
      Si $U$ es uniforme en $[0, 1]$, la ley de $X = U^2$ es absolutamente continua respecto a Lebesgue. ¿Cuánto vale su densidad (derivada de Radon-Nikodym) en $x = 0{,}25$? Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: borel-cantelli
    tier: 3
    prompt: |
      Los sucesos $A_n$ tienen $\Pr(A_n) = 1/n^2$. ¿Con qué probabilidad ocurren infinitos de ellos? Y si en cambio son independientes con $\Pr(A_n) = 1/n$? Respuesta: `primero;segundo`.
    answers: ["sha256:c339ed9e47b6b2640c714057eaf0902da6b31e55b805599aed8d7110a6539280"]
  - id: distribucion-de-cantor
    tier: 3
    prompt: |
      La función de Cantor es la función de distribución de $X = \sum_k 2\xi_k/3^k$ con $\xi_k$ independientes que valen 0 o 1 con probabilidad $\frac12$. ¿Cuánto valen $E[X]$ y $\operatorname{Var}X$? Respuesta: `media;varianza`.
    answers: ["sha256:8f47e3dbc8c40a9c8f859fc07f608454db982183d71abd043e9f4ea61a0cb17d"]
  - id: maquina-de-escribir
    tier: 3
    prompt: |
      La sucesión "máquina de escribir" recorre, para $k = 0, 1, 2, \ldots$ y $j = 0, \ldots, 2^k - 1$, los indicadores de $[j/2^k, (j+1)/2^k]$, numerados desde $f_1 = \mathbf 1_{[0,1]}$. Converge a 0 en medida pero en ningún punto. ¿Cuánto vale $\lambda(\{f_{100} \ne 0\})$? Respuesta: un número.
    answers: ["sha256:f09bf4b8419865350710e0c5a1a083d37037ec565f95b4b826270645ecc953ba"]
---

# Medida e integración de Lebesgue: σ-álgebras, medida de Lebesgue, teoremas de convergencia, Fubini, Lp y probabilidad

La integral de Riemann corta el **eje $x$** en trozos; la de Lebesgue corta el **eje $y$**: agrupa los puntos donde la función toma valores parecidos y
**mide** cuánto ocupan. Ese cambio de punto de vista da una integral que se lleva bien con los límites ($\lim\int = \int\lim$ bajo hipótesis claras), que
integra funciones que Riemann no puede y que es exactamente el lenguaje de la probabilidad moderna: una probabilidad *es* una medida y una esperanza
*es* una integral. Es la base de [[mat-procesos-estocasticos]] riguroso, del análisis funcional, de la mecánica cuántica (espacios $L^2$) y de la teoría
del aprendizaje.

## Objetivos

Al terminar sabrás:

1. Definir σ-álgebras y medidas, y explicar por qué no se puede medir "todo" subconjunto de $\mathbb R$.
2. Construir la medida de Lebesgue y calcular medidas de conjuntos (numerables, Cantor y "Cantor gordo").
3. Definir la integral de Lebesgue desde las funciones simples y compararla con la de Riemann.
4. Aplicar convergencia monótona, Fatou y convergencia dominada, y reconocer cuándo falla el intercambio de límite e integral.
5. Usar Fubini-Tonelli y detectar cuándo no se puede cambiar el orden de integración.
6. Trabajar con espacios $L^p$, los modos de convergencia, Radon-Nikodym y el lenguaje de la probabilidad (esperanza, Borel-Cantelli).

## Qué debes dominar antes

[[mat-topologia]] (abiertos, compactos, completitud), [[mat-analisis-real]] (supremos, series, integral de Riemann, convergencia uniforme) y
[[mat-probabilidad]] (variables aleatorias, esperanza).

> [!question] Test de entrada
> 1. ¿Es numerable $\mathbb Q$? ¿Y $[0, 1]$?
> 2. Si $f_n \to f$ uniformemente en $[0, 1]$ y son continuas, ¿converge $\int_0^1 f_n$ a $\int_0^1 f$?
> 3. ¿Qué es una cota superior de una suma $\sum_{n\ge1} 2^{-n}\varepsilon$?
>
> Respuestas: sí; no (Cantor, diagonal); sí, $|\int(f_n - f)| \le \sup|f_n - f| \to 0$; $\varepsilon$.

## 1. Para qué sirve

- **Probabilidad y estadística**: espacios de probabilidad $(\Omega, \mathcal F, \Pr)$, esperanza condicionada, leyes de los grandes números, martingalas.
- **Análisis de Fourier y señales**: $L^2$ es un espacio de Hilbert; la transformada de Fourier es una isometría de $L^2$ (Plancherel).
- **Física**: los estados cuánticos viven en $L^2$; la mecánica estadística usa medidas en el espacio de fases.
- **Aprendizaje automático**: riesgo esperado como integral, convergencia de estimadores, intercambiar gradiente y esperanza (convergencia dominada).

## 2. Por qué hace falta: lo que la integral de Riemann no sabe hacer

- La función de Dirichlet $\mathbf 1_{\mathbb Q\cap[0,1]}$ no es integrable Riemann: en cada partición, la suma superior es 1 y la inferior 0. Pero $\mathbb Q$ es numerable y
  debería "ocupar" 0.
- Los límites de funciones integrables Riemann (incluso acotadas) no tienen por qué serlo: enumerando los racionales $q_1, q_2, \ldots$, las funciones
  $\mathbf 1_{\{q_1, \ldots, q_n\}}$ son integrables con integral 0 y su límite es la de Dirichlet.
- Los espacios de funciones integrables Riemann no son completos: no sirven para el análisis funcional.

## 3. σ-álgebras y medidas

Una **σ-álgebra** en $X$ es una familia $\mathcal M$ de subconjuntos que contiene $X$ y es cerrada por complementos y **uniones numerables**. Una **medida** es
$\mu: \mathcal M \to [0, \infty]$ con $\mu(\varnothing) = 0$ y **σ-aditividad**: $\mu\left(\bigcup A_n\right) = \sum\mu(A_n)$ para $A_n$ disjuntos.

Consecuencias inmediatas: monotonía, subaditividad numerable $\mu(\bigcup A_n) \le \sum\mu(A_n)$ y **continuidad**: si $A_n \uparrow A$, $\mu(A_n) \to \mu(A)$; si $A_n \downarrow A$ y
$\mu(A_1) < \infty$, también.

La **σ-álgebra de Borel** es la generada por los abiertos. La **medida de Lebesgue** $\lambda$ en $\mathbb R$ asigna a cada intervalo su longitud; se construye con la
**medida exterior** $\lambda^*(E) = \inf\{\sum\ell(I_n) : E \subset \bigcup I_n\}$ y el criterio de Carathéodory, y es invariante por traslaciones.

**No todo es medible.** El conjunto de Vitali (un representante de cada clase de $\mathbb R/\mathbb Q$ en $[0, 1]$, elegidos con el axioma de elección) no puede tener
medida: sus trasladados por los racionales de $[-1, 1]$ son disjuntos, están en $[-1, 2]$ y cubren $[0, 1]$, así que su medida debería cumplir
$1 \le \sum m \le 3$, imposible tanto si $m = 0$ como si $m > 0$. Por eso se trabaja con σ-álgebras y no con todos los subconjuntos.

> [!example] Ejemplo resuelto 1: tres conjuntos "pequeños"
> - **Todo conjunto numerable tiene medida 0**: se cubre el punto $q_n$ con un intervalo de longitud $\varepsilon 2^{-n}$, total $\le\varepsilon$ para todo $\varepsilon$.
> - **El conjunto de Cantor** tiene medida 0 aunque no es numerable: se quitan $1/3 + 2/9 + 4/27 + \cdots = \sum 2^{n-1}/3^n = 1$.
> - **Un "Cantor gordo"** (en el paso $n$ se quitan $2^{n-1}$ intervalos de longitud $4^{-n}$) quita $\sum 2^{n-1}/4^n = \frac12$ y conserva medida $\frac12$, aunque es cerrado
>   y no contiene ningún intervalo. "Pequeño" topológicamente (sin interior) y "pequeño" en medida son cosas distintas.

## 4. La integral de Lebesgue

1. **Funciones medibles**: $f$ es medible si $\{f > a\}$ es medible para todo $a$. Sumas, productos, supremos, ínfimos y límites puntuales de medibles son medibles.
2. **Funciones simples**: $\varphi = \sum_{k} c_k\mathbf 1_{A_k}$ con finitos valores; $\int\varphi\,d\mu = \sum c_k\mu(A_k)$.
3. **Funciones no negativas**: $\int f = \sup\{\int\varphi : 0 \le \varphi \le f,\ \varphi \text{ simple}\}$. Siempre existe (puede ser $\infty$).
4. **Integrables**: $f = f^+ - f^-$ con $\int|f| < \infty$, y $\int f = \int f^+ - \int f^-$.

**"Casi en todas partes"** (c.t.p.): una propiedad vale salvo en un conjunto de medida 0. Funciones iguales c.t.p. tienen la misma integral; la de
Dirichlet es 0 c.t.p. y su integral de Lebesgue es 0.

**Relación con Riemann**: si $f$ es integrable Riemann en $[a, b]$, también lo es Lebesgue y las integrales coinciden. **Teorema de Lebesgue**: una $f$ acotada es
integrable Riemann si y solo si es continua c.t.p.

**Fórmula de las capas**: para $f \ge 0$, $\int f\,d\mu = \int_0^\infty\mu(\{f > t\})\,dt$. En probabilidad: $E[X] = \int_0^\infty\Pr(X > t)\,dt$ para $X \ge 0$.

## 5. Los teoremas de convergencia

**Convergencia monótona (Beppo Levi).** Si $0 \le f_1 \le f_2 \le \cdots$ y $f_n \to f$ c.t.p., entonces $\int f_n \to \int f$.

**Lema de Fatou.** Si $f_n \ge 0$, $\int\liminf f_n \le \liminf\int f_n$.

**Convergencia dominada.** Si $f_n \to f$ c.t.p. y $|f_n| \le g$ con $g$ integrable, entonces $f$ es integrable y $\int f_n \to \int f$.

*Demostración de la dominada a partir de Fatou.* Las funciones $g + f_n$ y $g - f_n$ son no negativas. Fatou da $\int(g + f) \le \liminf\int(g + f_n)$, es decir
$\int f \le \liminf\int f_n$, y $\int(g - f) \le \liminf\int(g - f_n)$, es decir $\int f \ge \limsup\int f_n$. Juntas: $\lim\int f_n = \int f$. $\blacksquare$

> [!example] Ejemplo resuelto 2: cuándo se puede y cuándo no
> - $f_n = n\mathbf 1_{(0, 1/n)}$: $f_n \to 0$ en cada punto pero $\int f_n = 1$ siempre. No hay dominante integrable ($\sup f_n \approx 1/x$) y la desigualdad de Fatou es estricta:
>   $0 < 1$. La masa "se escapa" hacia un punto.
> - $\int_0^1 x^{-1/2}dx$: los truncamientos $\min(x^{-1/2}, n)$ crecen, con integral $2 - 1/n$; convergencia monótona da $\int_0^1 x^{-1/2} = 2$ sin hablar de integrales impropias.
> - $\lim_n\int_0^\infty(1 + x/n)^{-n}dx$: para $n \ge 2$, $(1 + x/n)^{-n} \le (1 + x/2)^{-2}$, integrable. Dominada: el límite es $\int_0^\infty e^{-x}dx = 1$. (Cada $I_n$ vale exactamente
>   $\frac{n}{n-1}$.)

**Derivar bajo la integral.** Si $\partial_t f(x, t)$ existe y está dominada por una integrable independiente de $t$, $\frac{d}{dt}\int f(x, t)\,dx = \int\partial_t f(x, t)\,dx$. Es lo que
justifica intercambiar gradiente y esperanza al entrenar modelos.

## 6. Medida producto y Fubini-Tonelli

En $X \times Y$ la medida producto cumple $(\mu\times\nu)(A\times B) = \mu(A)\nu(B)$.

- **Tonelli**: si $f \ge 0$ es medible, $\iint f\,d(\mu\times\nu) = \int\left(\int f\,d\nu\right)d\mu = \int\left(\int f\,d\mu\right)d\nu$ (todo puede ser $\infty$).
- **Fubini**: lo mismo si $\iint|f| < \infty$.

La hipótesis importa: $f(x, y) = \frac{x^2 - y^2}{(x^2 + y^2)^2}$ en $[0, 1]^2$ da $\frac\pi4$ integrando primero en $y$ y $-\frac\pi4$ en el otro orden, porque $\iint|f| = \infty$. Antes
de cambiar el orden, comprueba Tonelli sobre $|f|$.

## 7. Espacios $L^p$ y modos de convergencia

$L^p(\mu)$ son las funciones (módulo igualdad c.t.p.) con $\|f\|_p = \left(\int|f|^p\right)^{1/p} < \infty$; $\|f\|_\infty$ es el supremo esencial.

- **Hölder**: $\int|fg| \le \|f\|_p\|g\|_q$ con $\frac1p + \frac1q = 1$ ($p = q = 2$: Cauchy-Schwarz). **Minkowski**: desigualdad triangular de $\|\cdot\|_p$.
- **Riesz-Fischer**: $L^p$ es completo (un espacio de Banach); $L^2$ es de Hilbert con $\langle f, g\rangle = \int f\bar g$.
- En un espacio de medida finita, $L^q \subset L^p$ si $p < q$ (en $[0, 1]$, $\|f\|_p \le \|f\|_q$); en $\mathbb R$ no hay inclusiones.

**Modos de convergencia**: uniforme ⇒ c.t.p. (y en $L^p$ si la medida es finita); en $L^p$ ⇒ **en medida** ⇒ una subsucesión converge c.t.p. Pero en medida no
implica c.t.p.: la sucesión **máquina de escribir** (indicadores de $[j/2^k, (j+1)/2^k]$ recorriendo $j$ y luego $k$) tiene $\lambda(\{f_n \ne 0\}) = 2^{-k} \to 0$ y no converge en
ningún punto, porque cada punto vuelve a estar cubierto en cada "pasada". El **teorema de Egorov** dice que en medida finita la convergencia c.t.p. es
uniforme fuera de un conjunto de medida tan pequeña como se quiera.

## 8. Densidades y probabilidad

**Radon-Nikodym.** Si $\nu$ es absolutamente continua respecto a $\mu$ ($\mu(A) = 0 \Rightarrow \nu(A) = 0$) y ambas son σ-finitas, existe $h \ge 0$ con $\nu(A) = \int_A h\,d\mu$; se
escribe $h = d\nu/d\mu$. Una **densidad de probabilidad** es exactamente la derivada de Radon-Nikodym de la ley respecto a Lebesgue. La función de Cantor es el
contraejemplo: es continua, su ley no tiene átomos, pero vive en un conjunto de medida 0 y **no tiene densidad** (es singular).

**Diccionario**: espacio de probabilidad = espacio de medida con $\Pr(\Omega) = 1$; variable aleatoria = función medible; esperanza = integral; "casi seguro" =
c.t.p. **Borel-Cantelli**: si $\sum\Pr(A_n) < \infty$, casi seguro ocurren solo finitos $A_n$; si son independientes y $\sum\Pr(A_n) = \infty$, ocurren infinitos casi seguro.

> [!example] Ejemplo resuelto 3: la ley de $U^2$ (con menos ayuda)
> Si $U$ es uniforme en $[0, 1]$ y $X = U^2$, calcula $\Pr(X \le x)$ para $x \in [0, 1]$, deriva para obtener la densidad $d\Pr_X/d\lambda$ y comprueba con la fórmula de las capas que
> $E[X] = \int_0^1(1 - \sqrt t)\,dt = \frac13$, igual que $E[U^2] = \int_0^1u^2\,du$.

## 9. Comprobar con un programa

Las medidas de los Cantores por construcción, la masa que se escapa en $f_n = n\mathbf 1_{(0,1/n)}$, Fubini fallando y la media y varianza de la
distribución de Cantor.

```python
import math

# 1. Ejemplo resuelto 1: Cantor (medida → 0) y Cantor gordo (medida → 1/2) por construcción.
def construir(quitar, pasos):
    trozos = [(0.0, 1.0)]
    for n in range(1, pasos + 1):
        nuevo = []
        for a, b in trozos:
            l = quitar(n, b - a)
            m = (a + b) / 2
            nuevo += [(a, m - l / 2), (m + l / 2, b)]
        trozos = nuevo
    return sum(b - a for a, b in trozos)

cantor = construir(lambda n, longitud: longitud / 3, 20)
gordo = construir(lambda n, longitud: 4.0 ** -n, 20)
assert abs(cantor - (2 / 3) ** 20) < 1e-9 and abs(gordo - (0.5 + 2.0 ** -21)) < 1e-9  # 2^20 trozos: error de redondeo acumulado

# 2. Ejemplo resuelto 2: ∫ n·1(0,1/n) = 1 para todo n, aunque en cada punto x > 0 la sucesión acaba siendo 0.
def integral(f, a, b, N=200000):
    h = (b - a) / N
    return sum(f(a + (i + 0.5) * h) for i in range(N)) * h

for n in (10, 100, 1000):
    assert abs(integral(lambda x: n if x < 1 / n else 0.0, 0, 1) - 1) < 1e-9
assert all(n * (0.01 < 1 / n) == 0 for n in range(101, 200))
# Y la dominada: I_n = n/(n − 1) → 1.
assert abs(integral(lambda x: (1 + x / 10) ** -10, 0, 200, 400000) - 10 / 9) < 1e-6

# 3. Fubini falla: la integral interior en y vale 1/(1 + x²), y la exterior π/4 (el otro orden da −π/4 por simetría).
interior = lambda x: integral(lambda y: (x * x - y * y) / (x * x + y * y) ** 2, 0, 1, 20000)
for x in (0.3, 0.7):
    assert abs(interior(x) - 1 / (1 + x * x)) < 1e-6
assert abs(integral(lambda x: 1 / (1 + x * x), 0, 1) - math.pi / 4) < 1e-9

# 4. Ejemplo resuelto 3 y distribución de Cantor: E[U²] = 1/3 por capas; la de Cantor tiene media 1/2 y varianza 1/8.
assert abs(integral(lambda t: 1 - math.sqrt(t), 0, 1) - 1 / 3) < 1e-6
k = 16
puntos = [sum(2 / 3 ** (b + 1) for b in range(k) if m >> b & 1) for m in range(2 ** k)]
media = sum(puntos) / len(puntos)
varianza = sum((p - media) ** 2 for p in puntos) / len(puntos)
print("Cantor: media", round(media, 6), "varianza", round(varianza, 6))
# En el nivel k la media es (1 − 3^{−k})/2 y la varianza (1 − 9^{−k})/8: tienden a 1/2 y 1/8.
assert abs(media - (1 - 3.0 ** -k) / 2) < 1e-12 and abs(varianza - (1 - 9.0 ** -k) / 8) < 1e-12
```

## 10. Errores típicos

- Intercambiar límite e integral sin una dominante integrable (o sin monotonía).
- Cambiar el orden de integración sin comprobar Tonelli sobre $|f|$.
- Pensar que medida 0 significa "numerable" o "sin interior" (el Cantor es no numerable; el Cantor gordo no tiene interior y mide $\frac12$).
- Confundir convergencia en medida con convergencia en casi todo punto.
- Suponer que toda distribución continua tiene densidad (la de Cantor no).
- Olvidar que en $L^p$ los elementos son clases c.t.p.: "$f(0)$" no tiene sentido para $f \in L^2$.

## 11. Resumen

- σ-álgebra, medida σ-aditiva, continuidad; Borel y Lebesgue; existen conjuntos no medibles (Vitali).
- Integral: simples → no negativas (supremo) → integrables; c.t.p.; capas $\int f = \int_0^\infty\mu(f > t)\,dt$; Riemann ⊂ Lebesgue.
- Monótona, Fatou, dominada; derivación bajo la integral.
- Tonelli ($f \ge 0$) y Fubini ($\iint|f| < \infty$).
- $L^p$: Hölder, Minkowski, completitud; modos de convergencia y Egorov.
- Radon-Nikodym = densidad; probabilidad como medida; Borel-Cantelli.

## Repaso: lo que debe quedarte dentro de un mes

1. Lebesgue mide cuánto ocupa cada valor; por eso tolera funciones salvajes.
2. Para intercambiar límite e integral: monotonía o una dominante integrable.
3. Para cambiar el orden de integración: integrabilidad absoluta (o $f \ge 0$).
4. Una densidad es una derivada de Radon-Nikodym; no siempre existe.
5. Probabilidad = teoría de la medida con masa total 1.

## Siguiente

`mat-analisis-funcional` ($L^p$, Hilbert y operadores), `mat-estadistica-matematica` (consistencia y leyes de los grandes números rigurosas) y
`mat-teoria-informacion` (entropía de distribuciones). La aplicación probabilística directa está en [[mat-procesos-estocasticos]].
