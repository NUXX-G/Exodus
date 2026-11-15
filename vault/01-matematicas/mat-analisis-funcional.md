---
id: mat-analisis-funcional
title: "Análisis funcional: espacios de Banach y Hilbert, operadores, dualidad, teorema espectral compacto y espacios de Sobolev"
area: matematicas
trunk_level: 13
prerequisites: [mat-topologia, mat-medida-integracion, mat-algebra-lineal-avanzada]
academic_sources:
  - "Kreyszig, E. Introductory Functional Analysis with Applications. Wiley, 1978."
  - "Brezis, H. Functional Analysis, Sobolev Spaces and Partial Differential Equations. Springer (Universitext), 2011."
exercises:
  - id: normas-de-sucesiones
    tier: 1
    prompt: |
      Para la sucesión $x_n = 2^{-n}$ ($n \ge 1$), calcula $\|x\|_1$ y $\|x\|_2$. Respuesta: `norma1;norma2`, la segunda con **5 decimales**.
    answers: ["sha256:766629a96e1f5b83d0aa52b3faf4a39326e385632d3b717c4b07b81e1ca41c3e"]
  - id: norma-de-operador
    tier: 1
    prompt: |
      ¿Cuál es la norma de $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ como operador de $(\mathbb R^2, \|\cdot\|_2)$ en sí mismo? Respuesta: con **4 decimales**.
    answers: ["sha256:f681be7fbcda6a24e9c00cb40cf589106fa022dc8bc385f04dbda76d92c0e5e7"]
  - id: normas-inducidas
    tier: 1
    prompt: |
      Para la misma matriz, ¿cuánto valen las normas inducidas por $\|\cdot\|_\infty$ y por $\|\cdot\|_1$? Respuesta: `norma_inf;norma_1`.
    answers: ["sha256:3408e9fd6e48e92d05663967f874a5cd74807dbafa56ee764edcddeddc948c0b"]
  - id: proyeccion-ortogonal
    tier: 2
    prompt: |
      En $L^2[-1, 1]$, proyecta $f(x) = x^5$ sobre el subespacio $\operatorname{span}\{1, x\}$. La proyección es $a + bx$: ¿cuánto vale $b$? Respuesta: una fracción irreducible `p/q` o un decimal con **4 decimales**.
    answers: ["sha256:d016d339874fc1562fe41bdd5dc2606fdff3c9b627dc0351985a0cae3b4ea4e6", "sha256:6880413a56fd44c2495976d1d4a81a901d9dc1ba8f165671d3ddc4fc9e58ab55"]
  - id: error-de-aproximacion
    tier: 2
    prompt: |
      ¿Cuál es la distancia en $L^2[-1, 1]$ de $x^3$ al subespacio $\operatorname{span}\{1, x\}$? Respuesta: con **4 decimales**.
    answers: ["sha256:8ceab61392e341736cda61b38b1b4cefb457684fba0bb039a0eab41842d76cbd"]
  - id: gram-schmidt
    tier: 2
    prompt: |
      Ortogonaliza $1, x, x^2$ en $L^2[-1, 1]$ por Gram-Schmidt (sin normalizar). El tercer vector es $x^2 + c$: ¿cuánto vale $c$? Respuesta: con **4 decimales**.
    answers: ["sha256:faf3e273b6454517c8e594a8296cf872321e9b566aaecc706861181fe3da2b1e"]
  - id: energia-del-primer-armonico
    tier: 2
    prompt: |
      La onda cuadrada $f = \operatorname{sign}(x)$ en $(-\pi, \pi)$ tiene serie $\frac4\pi\sum_{k\text{ impar}}\frac{\operatorname{sen} kx}{k}$. Por Parseval, ¿qué fracción de $\frac1\pi\int f^2$ se lleva el primer armónico? Respuesta: con **4 decimales**.
    answers: ["sha256:6cc9dd5fdf014539d9b92cdb75636d54d9978e3d8c6292f988525c3743d76479"]
  - id: ecuacion-integral
    tier: 2
    prompt: |
      Resuelve $f(x) = 1 + \frac13\int_0^1 x\,t\,f(t)\,dt$ (el operador es una contracción). ¿Cuánto vale $f(1)$? Respuesta: un número.
    answers: ["sha256:be6b2fb06a46dafd73630b693355fc0995f79344cc7e01ba0582b6c9ab9e6c59"]
  - id: representante-de-riesz
    tier: 2
    prompt: |
      ¿Cuál es la norma del funcional $\varphi(f) = \int_0^1 x^2f(x)\,dx$ en $L^2[0, 1]$? (Usa el teorema de representación de Riesz.) Respuesta: con **4 decimales**.
    answers: ["sha256:1fc7eeb4f64887b94ecd359d9eacba5d5e8fde84894a271e04954c7f7ad6a5ca"]
  - id: funcional-en-continuas
    tier: 2
    prompt: |
      ¿Cuál es la norma del funcional $f \mapsto f(0) - f(1)$ sobre $C[0, 1]$ con la norma del supremo? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: norma-sobolev
    tier: 2
    prompt: |
      ¿Cuánto vale la norma $H^1$, $\left(\|u\|_2^2 + \|u'\|_2^2\right)^{1/2}$, de $u(x) = |x|$ en $(-1, 1)$, usando su derivada débil? Respuesta: con **4 decimales**.
    answers: ["sha256:f5511b7689d683f2a5e032d0633efd35ef2db58d2516b5144a9208610a47ff5b"]
  - id: operador-de-volterra
    tier: 3
    prompt: |
      ¿Cuál es la norma en $L^2[0, 1]$ del operador de Volterra $(Vf)(x) = \int_0^x f(t)\,dt$? Respuesta: con **4 decimales**.
    answers: ["sha256:e16f4c1fc71f72a91c373935ed94228fa45ab872d397590827107f9826b770b5"]
  - id: autovalor-de-un-nucleo
    tier: 3
    prompt: |
      El operador integral $(Kf)(x) = \int_0^1\min(x, y)f(y)\,dy$ es compacto y autoadjunto en $L^2[0, 1]$. ¿Cuál es su mayor autovalor? Respuesta: con **4 decimales**.
    answers: ["sha256:8c9436d4a750684e6ba1d05af46de7e8515e4fa56378a8c85ef1727255e694d7"]
  - id: constante-de-poincare
    tier: 3
    prompt: |
      ¿Cuál es la menor constante $C$ tal que $\|u\|_2 \le C\|u'\|_2$ para toda $u \in H^1_0(0, 1)$? Respuesta: con **4 decimales**.
    answers: ["sha256:27600c6494d31670210ca6d982029bccacbf8c80fe95ca7c1a21646148e9dd5e"]
  - id: constante-de-lebesgue
    tier: 3
    prompt: |
      La constante de Lebesgue $L_n = \frac{1}{2\pi}\int_{-\pi}^{\pi}|D_n(t)|\,dt$, con $D_n(t) = \frac{\operatorname{sen}((n + \frac12)t)}{\operatorname{sen}(t/2)}$, es la norma de la suma parcial de Fourier como operador en $C$. ¿Cuánto vale $L_5$? Respuesta: con **4 decimales**.
    answers: ["sha256:d0a8f7e080e2abbf1702f8a815ee289dadcfde7f0b664dd70e92733b182dea16"]
  - id: operador-de-multiplicacion
    tier: 3
    prompt: |
      Sea $(Mf)(x) = x f(x)$ en $L^2[0, 2]$. ¿Cuál es su norma y cuántos autovalores tiene? (Su espectro es $[0, 2]$.) Respuesta: `norma;autovalores`.
    answers: ["sha256:fed72a7858bfce28d12a8e53f92f0b10be7eb2f55a663356fd26e1a0d51695f1"]
---

# Análisis funcional: espacios de Banach y Hilbert, operadores, dualidad, teorema espectral compacto y espacios de Sobolev

El análisis funcional es **álgebra lineal en dimensión infinita**: los "vectores" son funciones o sucesiones y las "matrices", operadores (derivar,
integrar, convolucionar, resolver una EDP). Muchas ideas pasan tal cual —normas, proyecciones, autovalores—, pero aparecen fenómenos nuevos: la bola
unidad deja de ser compacta, no todo operador lineal es continuo y hay operadores sin autovalores. Es el marco de la mecánica cuántica
([[fis-mecanica-cuantica]]: estados en un Hilbert, observables autoadjuntos), de los elementos finitos y las EDP ([[mat-edp]]), del procesado de señal
y de los métodos de núcleo en aprendizaje automático.

## Objetivos

Al terminar sabrás:

1. Trabajar con espacios normados, de Banach ($\ell^p$, $L^p$, $C[a, b]$) y de Hilbert ($\ell^2$, $L^2$), y con sus bases ortonormales.
2. Calcular proyecciones ortogonales y mejores aproximaciones; usar Gram-Schmidt, Bessel y Parseval.
3. Calcular normas de operadores (matrices, integrales, Volterra) y de funcionales; aplicar el teorema de representación de Riesz.
4. Conocer los cuatro grandes teoremas (Hahn-Banach, acotación uniforme, aplicación abierta, gráfica cerrada) y su uso.
5. Aplicar el teorema espectral para operadores compactos autoadjuntos y resolver ecuaciones integrales.
6. Usar derivadas débiles, espacios de Sobolev y la desigualdad de Poincaré, base de la formulación débil de las EDP.

## Qué debes dominar antes

[[mat-topologia]] (completitud, compacidad, punto fijo de Banach), [[mat-medida-integracion]] ($L^p$, convergencia dominada) y
[[mat-algebra-lineal-avanzada]] (producto interior, autovalores, teorema espectral en dimensión finita, valores singulares).

> [!question] Test de entrada
> 1. ¿Cuál es la proyección ortogonal de $(1, 2, 3)$ sobre la recta generada por $(1, 1, 1)$?
> 2. ¿Qué son los valores singulares de una matriz $A$?
> 3. ¿Converge $\sum 1/n^2$? ¿Y $\sum 1/n$?
>
> Respuestas: $(2, 2, 2)$; las raíces de los autovalores de $A^{\mathsf T}A$; sí ($\pi^2/6$); no.

## 1. Para qué sirve

- **EDP y simulación**: la formulación débil en espacios de Sobolev y el lema de Lax-Milgram dan existencia de soluciones y justifican los elementos finitos.
- **Mecánica cuántica**: espacio de Hilbert de estados, observables como operadores autoadjuntos, espectro como valores medibles.
- **Señales e imágenes**: bases ortonormales (Fourier, ondículas), compresión por truncamiento, filtros como operadores.
- **Aprendizaje automático**: espacios de Hilbert con núcleo reproductor (SVM, procesos gaussianos), análisis de componentes principales como
  teorema espectral, condicionamiento de problemas inversos.

## 2. Espacios normados y de Banach

Una **norma** cumple $\|x\| = 0 \Leftrightarrow x = 0$, $\|\alpha x\| = |\alpha|\|x\|$ y la desigualdad triangular. Un espacio normado completo es de **Banach**.

- $\ell^p$ ($1 \le p < \infty$): sucesiones con $\|x\|_p = \left(\sum|x_n|^p\right)^{1/p} < \infty$; $\ell^\infty$, acotadas, con el supremo.
- $L^p(\Omega)$ (del nodo de medida) y $C[a, b]$ con $\|f\|_\infty = \max|f|$ son de Banach.
- En dimensión finita todas las normas son equivalentes y la bola unidad cerrada es compacta. **Teorema de Riesz**: la bola unidad cerrada de un normado
  es compacta **si y solo si** la dimensión es finita. En $\ell^2$, los vectores $e_n$ tienen norma 1 y $\|e_n - e_m\| = \sqrt2$: no hay subsucesión convergente.

## 3. Espacios de Hilbert

Un **Hilbert** es un Banach cuya norma viene de un producto interior: $\|x\|^2 = \langle x, x\rangle$. Ejemplos: $\ell^2$, $L^2$ con $\langle f, g\rangle = \int f\bar g$.

- **Cauchy-Schwarz** $|\langle x, y\rangle| \le \|x\|\|y\|$ y **ley del paralelogramo** (caracteriza a las normas que vienen de un producto interior).
- **Teorema de la proyección**: si $M$ es un subespacio cerrado, todo $x$ se escribe de forma única como $x = m + m^\perp$, y $m$ es el punto de $M$ más cercano a $x$.
  Se calcula resolviendo las **ecuaciones normales** $\sum_j\langle e_j, e_i\rangle c_j = \langle x, e_i\rangle$ (matriz de Gram).
- **Bases ortonormales** $\{e_n\}$: $x = \sum\langle x, e_n\rangle e_n$. **Bessel**: $\sum|\langle x, e_n\rangle|^2 \le \|x\|^2$, con igualdad (**Parseval**) si la base es completa. Gram-Schmidt
  construye bases ortonormales; aplicado a $1, x, x^2, \ldots$ en $L^2[-1, 1]$ da los **polinomios de Legendre** ($1$, $x$, $x^2 - \frac13$, …), y Fourier es la base
  $\{e^{inx}\}$ de $L^2(-\pi, \pi)$.

> [!example] Ejemplo resuelto 1: aproximar $x^3$ por una recta en media cuadrática
> En $L^2[-1, 1]$, la mejor recta $a + bx$ para $x^3$ cumple $\langle x^3 - a - bx, 1\rangle = 0$ y $\langle x^3 - a - bx, x\rangle = 0$. Por paridad, $\langle x^3, 1\rangle = 0$ y $\langle 1, x\rangle = 0$, así que
> $a = 0$ y $b = \frac{\langle x^3, x\rangle}{\langle x, x\rangle} = \frac{2/5}{2/3} = \frac35$. El error es $\|x^3 - \frac35x\| = \sqrt{\frac27 - \frac{12}{25} + \frac{6}{25}} \approx 0{,}214$. No coincide con Taylor
> (que daría la recta $0$ en torno a $0$) porque se minimiza el error **total**, no el local.

## 4. Operadores y funcionales

Un operador lineal $T: X \to Y$ es **acotado** si $\|T\| = \sup_{\|x\| \le 1}\|Tx\| < \infty$, y eso equivale a ser **continuo**. En dimensión infinita hay operadores lineales no
acotados (derivar en $C[0, 1]$: $\|(\operatorname{sen} nx)'\| = n$).

- **Matrices**: con $\|\cdot\|_2$, $\|A\|$ es el mayor valor singular; con $\|\cdot\|_\infty$, la mayor suma de filas; con $\|\cdot\|_1$, la mayor suma de columnas.
- **Operadores integrales** $(Kf)(x) = \int k(x, y)f(y)\,dy$: si $k \in L^2$, $\|K\| \le \|k\|_{L^2}$ (Hilbert-Schmidt). El de **Volterra** $(Vf)(x) = \int_0^x f$ tiene norma $2/\pi$ en
  $L^2[0, 1]$ y **ningún autovalor** (su espectro es $\{0\}$).
- **Serie de Neumann**: si $\|K\| < 1$, $I - K$ es invertible y $(I - K)^{-1} = \sum K^n$. Así se resuelven ecuaciones integrales de Fredholm $f = g + Kf$.
- El **dual** $X^*$ son los funcionales lineales continuos. $(\ell^p)^* = \ell^q$ y $(L^p)^* = L^q$ con $\frac1p + \frac1q = 1$ ($1 < p < \infty$).

**Teorema de representación de Riesz.** En un Hilbert, todo funcional continuo es $\varphi(x) = \langle x, y\rangle$ para un único $y$, y $\|\varphi\| = \|y\|$. Es lo que permite
identificar un Hilbert con su dual y la base de Lax-Milgram.

**Los cuatro grandes teoremas.** **Hahn-Banach**: los funcionales en un subespacio se extienden sin aumentar la norma (hay suficientes funcionales para
separar puntos y convexos: base de la dualidad en optimización). **Acotación uniforme** (Banach-Steinhaus): una familia de operadores puntualmente
acotada está uniformemente acotada; como las constantes de Lebesgue de las sumas de Fourier crecen como $\frac{4}{\pi^2}\ln n$, **existe una función continua cuya
serie de Fourier diverge en un punto**. **Aplicación abierta**: una biyección lineal continua entre Banach tiene inversa continua (los problemas lineales bien
planteados son estables). **Gráfica cerrada**: un operador entre Banach con gráfica cerrada es acotado.

## 5. Operadores compactos y teorema espectral

$K$ es **compacto** si lleva acotados en conjuntos de clausura compacta (es límite de operadores de rango finito). Los operadores integrales con núcleo en
$L^2$ son compactos; la identidad en dimensión infinita no lo es.

**Teorema espectral (compactos autoadjuntos).** Si $K$ es compacto y autoadjunto en un Hilbert, existe una base ortonormal de autovectores (del cierre de su
imagen) con autovalores reales $\lambda_n \to 0$, y $Kx = \sum\lambda_n\langle x, e_n\rangle e_n$. Es la versión infinita de diagonalizar una matriz simétrica, y la base del
análisis de componentes principales de funciones y de la descomposición de Karhunen-Loève.

> [!example] Ejemplo resuelto 2: el núcleo $\min(x, y)$
> $(Kf)(x) = \int_0^1\min(x, y)f(y)\,dy$ es la inversa de $-\frac{d^2}{dx^2}$ con $f(0) = 0$, $f'(1) = 0$: si $Kf = \lambda f$, derivando dos veces, $-f = \lambda f''$. Las soluciones con esas condiciones son
> $\operatorname{sen}((n - \frac12)\pi x)$ con $\lambda_n = \frac{1}{(n - \frac12)^2\pi^2}$: el mayor es $4/\pi^2 \approx 0{,}405$. Es la covarianza del movimiento browniano, así que sus autofunciones dan la
> expansión de Karhunen-Loève del browniano ([[mat-procesos-estocasticos]]).

**Alternativa de Fredholm**: para $K$ compacto, $f - Kf = g$ tiene solución única para todo $g$ si y solo si $f - Kf = 0$ solo tiene la solución nula.

**Espectro** de un operador acotado: los $\lambda$ con $T - \lambda I$ no invertible. Puede no haber autovalores: la multiplicación por $x$ en $L^2[0, 2]$ tiene espectro $[0, 2]$,
norma 2 y ningún autovalor (sería $(x - \lambda)f = 0$, que obliga a $f = 0$ casi en todas partes). En mecánica cuántica, el operador posición es así: espectro
continuo.

## 6. Derivadas débiles y espacios de Sobolev

$g$ es la **derivada débil** de $u$ si $\int u\varphi' = -\int g\varphi$ para toda $\varphi$ suave con soporte compacto (la integración por partes sin términos de borde). La de
$|x|$ es $\operatorname{sign}(x)$; la de la función escalón no existe como función (es una delta).

$H^1(\Omega)$ son las $u \in L^2$ con derivada débil en $L^2$, con $\|u\|_{H^1}^2 = \|u\|_2^2 + \|u'\|_2^2$; es un Hilbert. $H^1_0$ son las que se anulan en el borde.

- **Desigualdad de Poincaré**: en $H^1_0(0, L)$, $\|u\|_2 \le \frac L\pi\|u'\|_2$; la constante óptima es $1/\sqrt{\lambda_1}$ con $\lambda_1 = (\pi/L)^2$ el primer autovalor de $-u''$.
- **Lax-Milgram**: si $a(u, v)$ es bilineal, continua y coerciva ($a(u, u) \ge \alpha\|u\|^2$) en un Hilbert $H$, para todo funcional $\ell$ existe un único $u$ con $a(u, v) = \ell(v)$ para
  todo $v$. Para $-u'' = f$ con $u(0) = u(1) = 0$: $a(u, v) = \int u'v'$ es coerciva en $H^1_0$ gracias a Poincaré, y la solución débil existe y es única. Los
  **elementos finitos** resuelven esta misma ecuación en un subespacio de dimensión finita (método de Galerkin): la solución discreta es la proyección
  de la exacta en la norma de energía.

> [!example] Ejemplo resuelto 3: una ecuación integral por punto fijo (con menos ayuda)
> Resuelve $f(x) = 1 + \frac12\int_0^1xt\,f(t)\,dt$. El operador tiene norma $\le\frac12\|xt\|_{L^2} = \frac16 < 1$, así que la iteración converge. Prueba $f = 1 + cx$, sustituye para obtener
> $c = \frac12\left(\frac12 + \frac c3\right)$ y despeja: $c = 0{,}3$. Comprueba en el programa que la iteración de Picard desde $f_0 = 1$ llega a $f(1) = 1{,}3$.

## 7. Comprobar con un programa

Proyección por la matriz de Gram, la norma de Volterra y el mayor autovalor del núcleo $\min(x, y)$ por discretización, la ecuación integral por
Picard y la constante de Poincaré.

```python
import math

def simpson(f, a, b, n=4000):
    h = (b - a) / n
    return (f(a) + f(b) + sum(f(a + i * h) * (4 if i % 2 else 2) for i in range(1, n))) * h / 3

def potencia(mat, it=200):
    v = [1.0] * len(mat)
    lam = 0.0
    for _ in range(it):
        w = [sum(a * x for a, x in zip(fila, v)) for fila in mat]
        lam = math.sqrt(sum(x * x for x in w)) / math.sqrt(sum(x * x for x in v))
        v = w
    return lam

# 1. Ejemplo resuelto 1: proyección de x³ sobre {1, x} en L²[−1,1] y su error.
ip = lambda f, g: simpson(lambda x: f(x) * g(x), -1, 1)
b = ip(lambda x: x**3, lambda x: x) / ip(lambda x: x, lambda x: x)
err = math.sqrt(ip(lambda x: x**3 - b * x, lambda x: x**3 - b * x))
assert abs(b - 0.6) < 1e-12 and abs(err - math.sqrt(2 / 7 - 12 / 25 + 6 / 25)) < 1e-10

# 2. Volterra: ‖V‖ = 2/π (valor singular mayor de la discretización) y núcleo min(x, y): 4/π².
N = 200
h = 1 / N
V = [[h if j < i else (h / 2 if j == i else 0.0) for j in range(N)] for i in range(N)]
VtV = [[sum(V[k][i] * V[k][j] for k in range(N)) for j in range(N)] for i in range(N)]
assert abs(math.sqrt(potencia(VtV)) - 2 / math.pi) < 1e-3
K = [[min((i + 0.5) * h, (j + 0.5) * h) * h for j in range(N)] for i in range(N)]
assert abs(potencia(K) - 4 / math.pi**2) < 1e-3

# 3. Ejemplo resuelto 3: iteración de Picard para f = 1 + ½∫ x t f(t) dt.
malla = [i / 400 for i in range(401)]
f = [1.0] * len(malla)
for _ in range(60):
    I = simpson(lambda t: t * f[round(t * 400)], 0, 1, 400)
    f = [1 + 0.5 * x * I for x in malla]
assert abs(f[-1] - 1.3) < 1e-12

# 4. Poincaré en H¹₀(0,1): la constante óptima 1/π sale del primer autovalor del laplaciano discreto.
n = 500
lam1 = (2 * n * math.sin(math.pi / (2 * n))) ** 2
assert abs(1 / math.sqrt(lam1) - 1 / math.pi) < 1e-5
print("‖V‖ ≈", round(math.sqrt(potencia(VtV)), 4), "| λ₁(min) ≈", round(potencia(K), 4), "| f(1) =", round(f[-1], 10))
```

## 8. Errores típicos

- Suponer que la bola unidad cerrada es compacta en dimensión infinita.
- Tratar un operador no acotado (derivar) como si fuera continuo.
- Confundir "no tiene autovalores" con "tiene espectro vacío" (Volterra, multiplicación).
- Proyectar sobre un subespacio no cerrado: el punto más cercano puede no existir.
- Usar Parseval con un sistema ortonormal que no es completo (solo vale Bessel).
- Olvidar que las derivadas débiles solo existen si no hay saltos (un escalón no está en $H^1$).

## 9. Resumen

- Banach = normado completo ($\ell^p$, $L^p$, $C$); Riesz: bola compacta ⇔ dimensión finita.
- Hilbert: Cauchy-Schwarz, proyección, Gram, bases ortonormales, Bessel y Parseval, Legendre y Fourier.
- Acotado ⇔ continuo; normas de matrices (singular, filas, columnas), integrales, Volterra $2/\pi$; serie de Neumann; dual y Riesz.
- Hahn-Banach, Banach-Steinhaus (series de Fourier divergentes), aplicación abierta, gráfica cerrada.
- Compactos autoadjuntos: base de autovectores, $\lambda_n \to 0$; Fredholm; espectro sin autovalores.
- Derivada débil, $H^1$, Poincaré $L/\pi$, Lax-Milgram y Galerkin.

## Repaso: lo que debe quedarte dentro de un mes

1. En un Hilbert, aproximar es proyectar: ecuaciones normales.
2. Continuidad de un operador lineal = acotación; la norma mide cuánto amplifica.
3. Los compactos autoadjuntos se diagonalizan como matrices simétricas.
4. En dimensión infinita puede haber espectro sin autovalores.
5. Las EDP se resuelven en espacios de Sobolev: forma débil + Lax-Milgram.

## Siguiente

`mat-geometria-diferencial`, `fis-teoria-cuantica-campos` (operadores en Hilbert) y `ia-bayesiana` (procesos gaussianos y núcleos). La aplicación
inmediata está en [[mat-edp]].
