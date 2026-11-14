---
id: proy-mat-numerico
title: "Proyecto: una biblioteca numérica validada (raíces, interpolación y cuadratura, ecuaciones diferenciales, sistemas lineales y mínimos cuadrados, autovalores, FFT y aritmética de coma flotante)"
area: matematicas
trunk_level: 12
kind: proyecto
prerequisites: [mat-analisis-numerico, mat-algebra-lineal]
academic_sources:
  - "Burden, R. L.; Faires, J. D.; Burden, A. M. Numerical Analysis, 10ª ed. Cengage, 2016."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997; Trefethen, L. N. Approximation Theory and Approximation Practice. SIAM, 2013 (fenómeno de Runge y nodos de Chebyshev)."
  - "Higham, N. J. Accuracy and Stability of Numerical Algorithms, 2ª ed. SIAM, 2002 (suma compensada, cancelación, condicionamiento)."
  - "Cooley, J. W.; Tukey, J. W. An algorithm for the machine calculation of complex Fourier series. Mathematics of Computation 19, 1965; Hairer, E.; Wanner, G. Solving Ordinary Differential Equations II: Stiff Problems. Springer, 1996."
attachments: [prueba.sh]
exercises:
  - id: hito-1-raices
    tier: 1
    prompt: |
      **Hito 1.** `numlib raiz METODO FUNCION a b tol` encuentra un cero de una función del catálogo (§2) con `biseccion`, `newton` (desde `a`) o `secante` (desde `a` y `b`) con los criterios de parada exactos del §3, e imprime la raíz y el número de iteraciones. Un intervalo sin cambio de signo, un método o una función desconocidos terminan con código 1.

      Comprueba con `bash prueba.sh ./numlib 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:8b6c075521c0949e3fac6fa8481c805287add079e4f0d6c991959af4442df9b8"]
  - id: hito-2-interpolacion-y-cuadratura
    tier: 1
    prompt: |
      **Hito 2.** `numlib runge n equi|cheb` interpola 1/(1 + 25x²) en n + 1 nodos y mide el error máximo en 2001 puntos; `numlib integra REGLA INTEGRANDO n` calcula una integral del catálogo con `trapecio`, `simpson` (n par) o `gauss` (Gauss-Legendre de n puntos) e imprime el valor y el error frente al exacto (§4).

      Comprueba con `bash prueba.sh ./numlib 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:b700209fb1dfd74c1a3bfabafbead670071e952065e3bdb8ff0810be12a25300"]
  - id: hito-3-ecuaciones-diferenciales
    tier: 2
    prompt: |
      **Hito 3.** `numlib edo METODO PROBLEMA h T` integra un problema de valor inicial del catálogo con `euler`, `rk4` o `euler-implicito` (con Newton en cada paso) e imprime y(T) y el error, incluido un problema rígido (§5).

      Comprueba con `bash prueba.sh ./numlib 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:3d6d169bcd41cd5b1dc3228cd6d47e210a3f742a6aa8057e474dbc2ab7fe7340"]
  - id: hito-4-sistemas-y-ajuste
    tier: 2
    prompt: |
      **Hito 4.** `numlib resuelve ARCHIVO` resuelve Ax = b por eliminación gaussiana con pivoteo parcial e imprime x y det(A); `numlib cond-hilbert n` calcula κ∞ de la matriz de Hilbert; `numlib ajuste ARCHIVO grado` ajusta un polinomio por mínimos cuadrados con una factorización QR (§6).

      Comprueba con `bash prueba.sh ./numlib 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4f9200a0b26e30cedacd11e0f17a8e578090125a03c4e4c68733cf95206a6f62"]
  - id: hito-5-autovalores
    tier: 2
    prompt: |
      **Hito 5.** `numlib autovalores ARCHIVO` calcula todos los autovalores de una matriz simétrica (en orden creciente) y `numlib potencia ARCHIVO tol` el dominante por el método de la potencia, con el número de iteraciones (§7).

      Comprueba con `bash prueba.sh ./numlib 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d4686cbb72f13c634e00dca5cc30aa4e970977b970d58e29e7fb5740b74888b5"]
  - id: hito-6-fft
    tier: 3
    prompt: |
      **Hito 6.** `numlib multiplica A B` multiplica dos enteros no negativos de hasta decenas de miles de cifras con la transformada rápida de Fourier, de forma exacta, en menos de un minuto (§8).

      Comprueba con `bash prueba.sh ./numlib 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d759dcfc7896570115822925af5e62b35154e1422e73e37d7f2957d998f9bee8"]
  - id: hito-7-coma-flotante
    tier: 3
    prompt: |
      **Hito 7.** `numlib suma N` suma 1/k² de k = 1 a N hacia delante, hacia atrás y con Kahan, y `numlib cuadratica a b c` calcula las raíces con la fórmula ingenua y con la estable, con 17 cifras significativas (§9).

      Comprueba con `bash prueba.sh ./numlib 7`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:5a526cdf8741ad5206827624b1cb62061c524bbfa5ea0ba92621712dacfc13b4"]
---

Vas a escribir **`numlib`**, una biblioteca de métodos numéricos con su programa de línea de órdenes, y a **validarla**: cada método se compara con un valor exacto, se mide su orden o su error, y se
buscan a propósito los casos en que falla (una raíz múltiple, el fenómeno de Runge, un problema rígido, una matriz mal condicionada, una cancelación catastrófica). Es lo que distingue a quien "sabe la
fórmula" de quien puede confiar en un resultado numérico, y es la base de todo el cálculo científico de Exodus (física, robótica, IA). Aplica [[mat-analisis-numerico]] y [[mat-algebra-lineal]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `numlib` en el lenguaje que quieras, sin bibliotecas numéricas (ni NumPy ni Eigen: el objetivo es escribir los algoritmos), con las órdenes de los 7 hitos. El adjunto **`prueba.sh`** ejecuta
tu programa con casos preparados y da un código por hito si todo coincide; con `-v` muestra cada salida.

**Formato numérico.** Los resultados se escriben con **11 cifras significativas** (`%.10e`, como el redondeo de x·(1 + 10⁻¹²), y `0.0000000000e+00` en lugar del cero negativo) y los errores con **2 cifras**
(`%.1e`; por debajo de 10⁻¹⁴, `0.0e+00`, porque ahí solo hay ruido de redondeo). Un valor no finito se escribe `diverge`. En el hito 7, los valores se escriben con **17 cifras** (`%.16e`), que bastan para
identificar exactamente cualquier número de doble precisión.

## 2. Catálogo de funciones

- **Raíces**: `f1` = x³ − 2x − 5 (el ejemplo de Wallis que usó Newton), `f2` = cos x − x, `f3` = e^{−x} − x², `f4` = x¹⁰ − 1 y `f5` = (x − 1)³ (calculada como (x − 1)(x − 1)(x − 1)), con sus derivadas.
- **Integrales**: `g1` = eˣ en [0, 1] (exacto e − 1), `g2` = sen x en [0, π] (2), `g3` = √x en [0, 1] (2/3) y `g4` = 1/(1 + x²) en [0, 1] (π/4).
- **Ecuaciones diferenciales** (y(0) dado, solución exacta conocida): `p1` y' = −2ty, y(0) = 1 (y = e^{−t²}); `p2` y' = y − t² + 1, y(0) = 0,5 (y = (t + 1)² − 0,5eᵗ, el ejemplo de Burden y Faires); `p3`
  y' = −1000(y − cos t) − sen t, y(0) = 1 (y = cos t), un problema **rígido**.

## 3. Raíces (`raiz METODO FUNCION a b tol`)

- `biseccion`: exige f(a)·f(b) < 0. Mientras (b − a)/2 > tol: m = (a + b)/2, cuenta una iteración, si f(m) = 0 devuelve m, y sustituye el extremo con el mismo signo que f(m). Devuelve (a + b)/2.
- `newton`: x₀ = a; x₁ = x₀ − f(x₀)/f'(x₀) (una iteración); para cuando |x₁ − x₀| < tol; como mucho 100 iteraciones (si no, código 1).
- `secante`: x₀ = a, x₁ = b; x₂ = x₁ − f(x₁)(x₁ − x₀)/(f(x₁) − f(x₀)); misma parada.
- Imprime `raiz r` e `iteraciones n`. Observa: Newton converge en 5 iteraciones con `f1`, pero en más de 50 con la raíz **triple** de `f5` (convergencia lineal); y con `f4` desde 0 y 1,3 la secante "converge" a
  0,18, que **no es una raíz**: el criterio |Δx| < tol se cumple en una zona plana. Comprueba siempre |f(x)|.

## 4. Interpolación y cuadratura

- `runge n equi|cheb`: interpola f(x) = 1/(1 + 25x²) en n + 1 nodos, equiespaciados (x_i = −1 + 2i/n) o de Chebyshev (x_i = cos((2i + 1)π/(2n + 2))), y calcula el máximo de |p(x) − f(x)| en los 2001 puntos
  x = −1 + 2k/2000. Imprime `error e`. Con nodos equiespaciados el error **crece** con n (fenómeno de Runge); con Chebyshev decrece. Usa la forma de Newton o la baricéntrica, no la de Lagrange sin más.
- `integra trapecio|simpson|gauss INTEGRANDO n`: trapecio y Simpson compuestos con n subintervalos (Simpson exige n par); Gauss-Legendre con n nodos (raíces del polinomio de Legendre Pₙ calculadas con Newton,
  pesos wᵢ = 2/((1 − xᵢ²)Pₙ'(xᵢ)²)). Imprime `valor` y `error`. Fíjate en `g3`: la derivada no está acotada en 0 y todos los métodos pierden su orden.

## 5. Ecuaciones diferenciales (`edo METODO PROBLEMA h T`)

N = round(T/h) pasos desde t = 0: `euler` (explícito), `rk4` (clásico) y `euler-implicito`, que en cada paso resuelve y_{n+1} = y_n + h·f(t_{n+1}, y_{n+1}) con Newton (empezando en y_n; para cuando
|Δ| ≤ 10⁻¹⁵·max(1, |y|), como mucho 50 iteraciones). Imprime `y` (el valor en T = Nh) y `error`. Con `p3`, Euler explícito es estable solo si h < 2/1000 y RK4 si h ≲ 2,8/1000; el implícito es estable con
cualquier h: esa es la definición práctica de **rigidez**.

## 6. Sistemas lineales y mínimos cuadrados

- `resuelve ARCHIVO`: el archivo tiene n filas de n + 1 números (A y b). Eliminación gaussiana con **pivoteo parcial** (en cada columna, la fila de mayor valor absoluto; con empate, la primera), sustitución
  regresiva; imprime `x` y `det` (con el signo de las permutaciones). Una matriz singular (pivote nulo) termina con código 1. El sistema de 4 × 4 de la prueba tiene un pivote de 10⁻¹⁷: sin pivotar, el resultado
  sería basura.
- `cond-hilbert n`: κ∞(Hₙ) = ‖Hₙ‖∞·‖Hₙ⁻¹‖∞ con Hᵢⱼ = 1/(i + j + 1), calculando la inversa columna a columna. Crece como e^{3,5n}: con n = 8 ya es 3,4·10¹⁰, y se pierden diez cifras.
- `ajuste ARCHIVO grado`: ajusta un polinomio de grado `grado` a los puntos (x, y) del archivo por mínimos cuadrados **con QR** (Householder o Givens), no con las ecuaciones normales, que elevan al cuadrado el
  número de condición. Imprime `coef` (de grado 0 al mayor) y `residuo` ‖Ax − b‖₂.

## 7. Autovalores

- `autovalores ARCHIVO`: todos los autovalores de una matriz **simétrica** (si no lo es, código 1), en orden creciente, con el método que quieras (Jacobi o QR con desplazamiento), hasta precisión de máquina.
- `potencia ARCHIVO tol`: v₀ = (1, …, 1); en cada iteración w = Av, λ = vᵀw/vᵀv, v = w/‖w‖₂; para cuando |λ − λ_anterior| < tol·|λ| (con λ_anterior = 0 al empezar). Imprime `lambda` e `iteraciones`. Converge
  como (λ₂/λ₁)^k: comprueba que el número de iteraciones lo confirma.

## 8. FFT (`multiplica A B`)

Multiplicar dos enteros es convolucionar sus cifras. Implementa la FFT de Cooley-Tukey de base 2 (recursiva o iterativa), multiplica las transformadas, aplica la inversa, redondea cada coeficiente al entero
más próximo y propaga los acarreos. Con dos números de 10 000 cifras, el producto (exacto, sin ceros a la izquierda) debe salir en menos de un minuto: el método escolar, O(n²), no llega. Piensa por qué el
redondeo es seguro con cifras en base 10 y hasta qué tamaño lo sería en base 10⁴.

## 9. Coma flotante (`suma N` y `cuadratica a b c`)

- `suma N`: Σ_{k=1}^{N} 1/k² de tres formas, todas con 1/(k·k) en doble precisión: `adelante` (k creciente), `atras` (k decreciente) y `kahan` (adelante, con suma compensada de Kahan). Sumar de menor a
  mayor pierde menos precisión, y Kahan consigue casi lo mismo en orden creciente.
- `cuadratica a b c` (con b² ≥ 4ac): `ingenua` con (−b ± √(b² − 4ac))/(2a) y `estable` con q = −(b + signo(b)·√(b² − 4ac))/2, x₁ = q/a y x₂ = c/q; cada línea con las dos raíces en orden creciente. Con
  x² − 10⁸x + 1 la fórmula ingenua da la raíz pequeña con solo una cifra correcta.
- Como solo intervienen operaciones con redondeo correcto en IEEE 754 (+, −, ×, ÷, √), estos resultados son **exactamente** reproducibles en cualquier lenguaje si se respeta el orden de las operaciones.

## 10. Arquitectura y calidad

Separa la biblioteca (funciones puras y probadas) del programa de línea de órdenes. Pruebas propias: cada método contra un caso con solución exacta, el orden medido al dividir el paso, y propiedades
(PLU = A, QᵀQ = I, la suma de autovalores igual a la traza). Mide tiempos: la FFT frente al producto escolar, Jacobi frente a QR.

## 11. Ampliaciones

Brent para raíces; RK45 de Dormand-Prince con control de paso; BDF de orden 2 para problemas rígidos; Cholesky y gradiente conjugado para sistemas grandes y dispersos; SVD por Golub-Kahan; la FFT de
Bluestein para cualquier longitud y la transformada teórico-numérica (NTT) para multiplicar sin redondeo; y aritmética de intervalos para acotar el error de redondeo de forma rigurosa.

## 12. Recursos

Burden y Faires para los métodos clásicos; Trefethen y Bau para el álgebra lineal numérica; Higham para la estabilidad; el artículo de Cooley y Tukey. Más en la [página de recursos de matemáticas](/recursos/matematicas).
