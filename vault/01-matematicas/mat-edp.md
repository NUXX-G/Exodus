---
id: mat-edp
title: "Ecuaciones en derivadas parciales: transporte, calor, ondas y Laplace; Fourier, características y diferencias finitas"
area: matematicas
trunk_level: 12
prerequisites: [mat-ecuaciones-diferenciales, mat-calculo-multivariable, mat-analisis-numerico]
academic_sources:
  - "Strauss, W. A. Partial Differential Equations: An Introduction, 2ª ed. Wiley, 2008."
  - "Evans, L. C. Partial Differential Equations, 2ª ed. American Mathematical Society (Graduate Studies in Mathematics 19), 2010."
exercises:
  - id: clasificacion
    tier: 1
    prompt: |
      Clasifica la ecuación $u_{xx} + 4u_{xy} + 3u_{yy} = 0$ como elíptica, parabólica o hiperbólica. Respuesta: la palabra, sin tilde (`eliptica`, `parabolica` o `hiperbolica`).
    answers: ["sha256:0882c745e85865448a26430c7a0a0f5a3532d5d5a23dad33c1544f44087bc0e0"]
  - id: ecuacion-de-transporte
    tier: 1
    prompt: |
      Resuelve $u_t + 3u_x = 0$ con $u(x, 0) = e^{-x^2}$ por características. ¿Cuánto vale $u(1;\ 0{,}5)$? Respuesta: con **4 decimales**.
    answers: ["sha256:4cfdb2c5123ef1408b90cf156e10e81aadff00101b2d3b93c3048cc1fc1b04df"]
  - id: coeficiente-de-fourier
    tier: 1
    prompt: |
      Desarrolla $f(x) = x$ en serie de senos en $(0, \pi)$: $f = \sum b_n\sin nx$. ¿Cuánto vale $b_3$? Respuesta: con **4 decimales**.
    answers: ["sha256:65ad3edd485fdc2c37defabef70ce86aa634156a931f98a911a9f8c81e7ca38c"]
  - id: dalembert
    tier: 1
    prompt: |
      Resuelve $u_{tt} = 4u_{xx}$ en la recta con $u(x, 0) = \operatorname{sen} x$ y $u_t(x, 0) = 0$ usando la fórmula de d'Alembert. ¿Cuánto vale $u(\pi/2, \pi/3)$? Respuesta: un número.
    answers: ["sha256:1b07b0cffa0b3f596b5e048b0115168886cc5183dd518655b5515ee5dddac6d1"]
  - id: separacion-de-variables
    tier: 2
    prompt: |
      Resuelve $u_t = u_{xx}$ en $(0, \pi)$ con $u(0, t) = u(\pi, t) = 0$ y $u(x, 0) = \operatorname{sen} x + 0{,}5\operatorname{sen} 3x$. ¿Cuánto vale $u(\pi/2, 1)$? Respuesta: con **4 decimales**.
    answers: ["sha256:30577f6a8e236327c4df6f298107b9a73cc7ae12564b2f4e5f101f9749f9f825"]
  - id: estabilidad-explicita
    tier: 2
    prompt: |
      Discretizas $u_t = u_{xx}$ con el esquema explícito y $\Delta x = 0{,}1$. ¿Cuál es el mayor $\Delta t$ estable (análisis de von Neumann)? Respuesta: un número.
    answers: ["sha256:07e17407c7918077774d46219a18f93114e778efe79c5e70ffffcc9784c2e75e"]
  - id: valor-medio
    tier: 2
    prompt: |
      Comprueba que $u = x^2 - y^2 + 3x$ es armónica. ¿Cuál es la media de $u$ sobre la circunferencia de radio 2 centrada en $(1, 1)$? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: estado-estacionario
    tier: 1
    prompt: |
      Una varilla en $[0, 1]$ con los extremos a temperatura 0 y una fuente uniforme alcanza el equilibrio $-u'' = 2$. ¿Cuál es la temperatura máxima? Respuesta: un número.
    answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: extremos-aislados
    tier: 2
    prompt: |
      Resuelve $u_t = u_{xx}$ en $(0, 1)$ con extremos aislados ($u_x = 0$) y $u(x, 0) = x$. ¿Hacia qué temperatura tiende toda la varilla cuando $t \to \infty$? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: frecuencia-fundamental
    tier: 2
    prompt: |
      Una cuerda de $0{,}5$ m, tensión 100 N y densidad lineal $0{,}01$ kg/m está fija en los extremos. ¿Cuál es su frecuencia fundamental en Hz? Respuesta: un número.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: autovalor-mixto
    tier: 2
    prompt: |
      Halla el menor autovalor de $-u'' = \lambda u$ en $(0, 1)$ con $u(0) = 0$ y $u'(1) = 0$. Respuesta: con **4 decimales**.
    answers: ["sha256:6730667adc1330276b5ba07fc15909a17a119c424f9957d99af2324ebe66ad4e"]
  - id: parseval
    tier: 2
    prompt: |
      Aplica la identidad de Parseval a la serie de Fourier de $f(x) = x$ en $(-\pi, \pi)$ para calcular $\sum_{n\ge1} 1/n^2$. Respuesta: con **4 decimales**.
    answers: ["sha256:d5a60657b5a497c0beee0359ba67abdc6d259da0e74ba6e842429c853daa955b"]
  - id: laplace-en-un-cuadrado
    tier: 3
    prompt: |
      Resuelve $\Delta u = 0$ en $[0, \pi]^2$ con $u(x, \pi) = \operatorname{sen} x$ y $u = 0$ en los otros tres lados. ¿Cuánto vale $u(\pi/2, \pi/2)$? Respuesta: con **4 decimales**.
    answers: ["sha256:2527474e943901d4263f98ad9d1aba19737500a06bf261be0f21286f984c0318"]
  - id: nucleo-del-calor
    tier: 3
    prompt: |
      Resuelve $u_t = u_{xx}$ en toda la recta con $u(x, 0) = 1$ si $|x| < 1$ y $0$ fuera, convolucionando con el núcleo del calor. ¿Cuánto vale $u(0, 1)$? Respuesta: con **4 decimales**.
    answers: ["sha256:53d210f35199abe4178d56489278993ae6ddda84c5088ccc3e1cf6b0e46af063"]
  - id: energia-de-la-onda
    tier: 3
    prompt: |
      Para $u_{tt} = u_{xx}$ en $[0, \pi]$ con extremos fijos, $u(x, 0) = \operatorname{sen} x$ y $u_t(x, 0) = \operatorname{sen} 2x$, ¿cuánto vale la energía $E = \frac12\int_0^\pi (u_t^2 + u_x^2)\,dx$ (que se conserva)? Respuesta: con **4 decimales**.
    answers: ["sha256:52f67ab92235bbb0fc4da6e2e9eacc0ada687af43a98285e0967948796bb0836"]
  - id: rotura-de-burgers
    tier: 3
    prompt: |
      En la ecuación de Burgers sin viscosidad $u_t + uu_x = 0$ con $u(x, 0) = e^{-x^2}$, ¿en qué instante se cruzan por primera vez las características (se forma el choque)? Respuesta: con **4 decimales**.
    answers: ["sha256:5b7e2551cce7ab24685cf2362b922c82a529ba7bbd79c5ebb78cb0c2708636b3"]
---

# Ecuaciones en derivadas parciales: transporte, calor, ondas y Laplace; Fourier, características y diferencias finitas

Una **ecuación en derivadas parciales** (EDP) relaciona una función de varias variables con sus derivadas parciales. Son el lenguaje de casi toda la
física continua: el calor que se difunde por una pieza, la vibración de una cuerda o de un puente, el potencial eléctrico ([[fis-electromagnetismo]]), la
función de onda ([[fis-mecanica-cuantica]]), los fluidos, los precios de opciones. Este nodo cubre las cuatro ecuaciones modelo, que son la plantilla de
todas las demás, y los tres métodos que las resuelven: **características**, **separación de variables con series de Fourier** y **diferencias finitas**.

## Objetivos

Al terminar sabrás:

1. Clasificar una EDP lineal de segundo orden (elíptica, parabólica, hiperbólica) y saber qué datos necesita cada tipo.
2. Resolver ecuaciones de primer orden por el método de las características, y ver cuándo una no lineal forma un choque.
3. Resolver calor y ondas en un intervalo por separación de variables y series de Fourier, y la onda en la recta con d'Alembert.
4. Usar las propiedades de las funciones armónicas (valor medio, principio del máximo) y resolver Laplace en un rectángulo.
5. Escribir esquemas de diferencias finitas para calor, ondas y Laplace, y decidir su estabilidad (von Neumann, CFL).
6. Interpretar la energía, el núcleo del calor y los autovalores como herramientas de análisis.

## Qué debes dominar antes

[[mat-ecuaciones-diferenciales]] (EDO lineales, problemas de contorno sencillos), [[mat-calculo-multivariable]] (derivadas parciales, regla de la cadena,
laplaciano) y [[mat-analisis-numerico]] (errores de truncamiento, sistemas lineales, estabilidad). La transformada de Fourier aparece en
[[ing-senales-sistemas]].

> [!question] Test de entrada
> 1. ¿Cuál es la solución de $y'' + 4y = 0$ con $y(0) = 0$?
> 2. Si $u(x, t) = f(x - 3t)$, ¿cuánto vale $u_t + 3u_x$?
> 3. ¿Cuánto vale $\int_0^\pi \operatorname{sen} mx\operatorname{sen} nx\,dx$ si $m \ne n$ son enteros positivos?
>
> Respuestas: $y = C\operatorname{sen} 2x$; $-3f' + 3f' = 0$; $0$ (los senos son ortogonales).

## 1. Para qué sirve

- **Ingeniería térmica y de materiales**: la ecuación del calor da tiempos de enfriamiento, gradientes y tensiones térmicas.
- **Estructuras, acústica y comunicaciones**: la ecuación de ondas da modos de vibración, frecuencias propias y propagación de señales.
- **Electrostática, gravitación y flujo potencial**: la ecuación de Laplace/Poisson.
- **Simulación**: diferencias finitas, elementos finitos y volúmenes finitos son métodos para EDP; sin entender estabilidad, una simulación explota.
- **Finanzas y aprendizaje automático**: Black-Scholes es una ecuación del calor disfrazada; los modelos de difusión generativos invierten un proceso de
  calor estocástico ([[mat-procesos-estocasticos]]).

## 2. Clasificación y problemas bien planteados

Una EDP lineal de segundo orden en dos variables $Au_{xx} + 2Bu_{xy} + Cu_{yy} + \text{(orden inferior)} = 0$ se clasifica por el signo de
$B^2 - AC$ (equivalentemente, por los signos de los autovalores de $\begin{pmatrix} A & B \\ B & C \end{pmatrix}$):

| Tipo | Condición | Modelo | Datos que necesita |
| --- | --- | --- | --- |
| Elíptica | $B^2 - AC < 0$ | Laplace $u_{xx} + u_{yy} = 0$ | Valores (o flujo) en todo el borde |
| Parabólica | $B^2 - AC = 0$ | Calor $u_t = \alpha u_{xx}$ | Estado inicial y condiciones de contorno |
| Hiperbólica | $B^2 - AC > 0$ | Ondas $u_{tt} = c^2u_{xx}$ | Posición y velocidad iniciales, y contorno |

(Si se escribe con $4AC$ y coeficiente $B$ sin el 2, la condición es $B^2 - 4AC$.) Un problema está **bien planteado** (Hadamard) si tiene solución,
es única y depende continuamente de los datos. Dar datos de un tipo a una ecuación de otro lo rompe: Laplace con "datos iniciales" en una recta es
inestable (ejemplo de Hadamard: el dato $u_y(x, 0) = \operatorname{sen}(nx)/n$, cada vez más pequeño, produce $u = \operatorname{sen}(nx)\operatorname{senh}(ny)/n^2$, que crece como $e^{ny}/n^2$).

Las condiciones de contorno típicas son **Dirichlet** (se fija $u$), **Neumann** (se fija la derivada normal: flujo, aislamiento si es cero) y
**Robin** (combinación: convección).

## 3. Primer orden: el método de las características

La ecuación de **transporte** $u_t + cu_x = 0$ dice que la derivada de $u$ en la dirección $(1, c)$ es cero: $u$ es constante sobre las rectas
$x - ct = \text{cte}$, las **características**. Por tanto $u(x, t) = f(x - ct)$: el perfil inicial se traslada a velocidad $c$ sin deformarse.

En general, para $a(x, t)u_t + b(x, t)u_x = g$, se resuelve el sistema de EDO $\frac{dt}{ds} = a$, $\frac{dx}{ds} = b$, $\frac{du}{ds} = g$: la EDP se convierte en EDO a lo
largo de curvas.

**No linealidad y choques.** En la ecuación de **Burgers** $u_t + uu_x = 0$, cada punto viaja a su propia velocidad $u_0(x_0)$:
$x = x_0 + u_0(x_0)t$. Donde $u_0$ decrece, los puntos de atrás alcanzan a los de delante y dos características se cruzan en
$t^* = -1/\min u_0'$: la solución deja de ser única y se forma un **choque** (así se forman las ondas de choque en gases y los atascos de tráfico).

## 4. La ecuación del calor

$u_t = \alpha u_{xx}$ modela la difusión: el flujo de calor es $-k u_x$ (ley de Fourier) y la conservación de la energía da la ecuación.

**Separación de variables.** En $(0, L)$ con $u(0, t) = u(L, t) = 0$, se buscan soluciones $u = X(x)T(t)$. Sustituyendo, $\frac{T'}{\alpha T} = \frac{X''}{X} = -\lambda$, una
constante (cada lado depende de una variable distinta). El problema de contorno $-X'' = \lambda X$, $X(0) = X(L) = 0$ solo tiene solución no nula para
$\lambda_n = (n\pi/L)^2$, con $X_n = \operatorname{sen}(n\pi x/L)$; entonces $T_n = e^{-\alpha\lambda_n t}$ y, por superposición,

$$
u(x, t) = \sum_{n\ge1} b_n e^{-\alpha(n\pi/L)^2t}\operatorname{sen}\frac{n\pi x}{L}, \qquad b_n = \frac2L\int_0^L f(x)\operatorname{sen}\frac{n\pi x}{L}\,dx .
$$

Los coeficientes salen de la **ortogonalidad** de los senos. Cada modo decae con su propio ritmo: los de alta frecuencia mueren enseguida, por eso
el calor **suaviza** (una esquina del dato inicial desaparece en cuanto $t > 0$).

> [!example] Ejemplo resuelto 1: un dato con dos modos
> $u_t = u_{xx}$ en $(0, \pi)$, extremos a 0, $u(x, 0) = 2\operatorname{sen} x - \operatorname{sen} 2x$. El dato ya es una suma de modos, así que no hace falta integrar:
> $b_1 = 2$, $b_2 = -1$ y $u = 2e^{-t}\operatorname{sen} x - e^{-4t}\operatorname{sen} 2x$. En $x = \pi/4$, $t = 0{,}5$: $2e^{-0{,}5}\frac{\sqrt2}{2} - e^{-2}\cdot1 = 0{,}8578 - 0{,}1353 = 0{,}7224$. A
> partir de $t \approx 1$ solo importa el primer modo: el perfil es un seno que se apaga como $e^{-t}$.

**Extremos aislados** ($u_x = 0$): los modos son cosenos, $\lambda_0 = 0$ incluido, y $u \to$ la media del dato inicial: el calor total se conserva.

**En toda la recta**, la solución es la convolución con el **núcleo del calor**:

$$
u(x, t) = \int_{-\infty}^{\infty}\frac{1}{\sqrt{4\pi\alpha t}}e^{-(x-y)^2/(4\alpha t)}f(y)\,dy ,
$$

una media gaussiana del dato de anchura $\sqrt{2\alpha t}$: la difusión avanza como la **raíz** del tiempo. Para $f = \mathbf 1_{(-1,1)}$ y $\alpha = 1$ sale
$u = \frac12\left[\operatorname{erf}\frac{x+1}{2\sqrt t} - \operatorname{erf}\frac{x-1}{2\sqrt t}\right]$.

**Principio del máximo.** El máximo de una solución del calor en $[0, L]\times[0, T]$ se alcanza en $t = 0$ o en los extremos: el calor no crea puntos
más calientes. Da unicidad (la diferencia de dos soluciones con los mismos datos tiene máximo y mínimo 0) y estabilidad.

## 5. La ecuación de ondas

**En la recta: d'Alembert.** Factorizando $\partial_t^2 - c^2\partial_x^2 = (\partial_t - c\partial_x)(\partial_t + c\partial_x)$, la solución general es $F(x + ct) + G(x - ct)$:
dos ondas que viajan en sentidos opuestos. Con $u(x, 0) = f$ y $u_t(x, 0) = g$,

$$
u(x, t) = \frac{f(x + ct) + f(x - ct)}{2} + \frac{1}{2c}\int_{x-ct}^{x+ct}g(s)\,ds .
$$

Consecuencia: **velocidad finita de propagación** (el valor en $(x, t)$ solo depende de los datos en $[x - ct, x + ct]$, su dominio de dependencia), al
contrario que el calor, que propaga a velocidad infinita.

> [!example] Ejemplo resuelto 2: una pulsación que se divide
> $u_{tt} = u_{xx}$ con $f(x) = e^{-x^2}$ y $g = 0$: $u = \frac12\left(e^{-(x+t)^2} + e^{-(x-t)^2}\right)$. El pulso se parte en dos mitades de altura $\frac12$ que se alejan a
> velocidad 1; en $t = 3$, $u(0, 3) = e^{-9} \approx 1{,}2\cdot10^{-4}$: el origen ya está casi en reposo. Con $f = 0$ y $g = \cos x$, el término integral da
> $u = \frac12[\operatorname{sen}(x + t) - \operatorname{sen}(x - t)] = \cos x\operatorname{sen} t$.

**En un intervalo** con extremos fijos, separación de variables da modos $\operatorname{sen}(n\pi x/L)$ que oscilan con frecuencias angulares $\omega_n = cn\pi/L$:
la **frecuencia fundamental** de una cuerda es $f_1 = \frac{c}{2L}$ con $c = \sqrt{T/\mu}$, y los armónicos son múltiplos enteros (de ahí que una cuerda
suene afinada).

**Energía.** $E(t) = \frac12\int_0^L(u_t^2 + c^2u_x^2)\,dx$ es constante: derivando, integrando por partes y usando las condiciones de contorno,
$E' = \int(u_tu_{tt} + c^2u_xu_{xt}) = \int u_t(u_{tt} - c^2u_{xx}) = 0$. Da unicidad, igual que el principio del máximo para el calor.

## 6. La ecuación de Laplace

Las soluciones de $\Delta u = 0$ son las **funciones armónicas**: estados de equilibrio (temperatura estacionaria, potencial electrostático sin cargas).

- **Propiedad del valor medio**: $u$ en un punto es la media de $u$ sobre cualquier circunferencia (o disco) centrada en él y contenida en el dominio.
- **Principio del máximo**: una armónica no constante alcanza máximo y mínimo solo en el borde. De ahí unicidad para el problema de Dirichlet.
- **Poisson** $-\Delta u = f$ añade fuentes; en una dimensión, $-u'' = 2$ con extremos a 0 da la parábola $u = x(1 - x)$.

**En un rectángulo** se separan variables: con $u = 0$ en tres lados y $u(x, b) = h(x)$ en el cuarto, $u = \sum c_n\operatorname{sen}\frac{n\pi x}{a}\operatorname{senh}\frac{n\pi y}{a}$, y los $c_n$
salen del desarrollo en senos de $h$ dividido entre $\operatorname{senh}(n\pi b/a)$.

> [!example] Ejemplo resuelto 3: una placa calentada por arriba (con menos ayuda)
> En $[0, \pi]^2$ con $u(x, \pi) = \operatorname{sen} 2x$ y 0 en los demás lados, prueba $u = c\operatorname{sen} 2x\operatorname{senh} 2y$, impón el lado superior para hallar $c$ y evalúa en el
> centro. Comprueba que $u(\pi/4, \pi/2) = \operatorname{senh}\pi/\operatorname{senh} 2\pi \approx 0{,}0431$ y que es menor que el máximo del borde, como exige el principio del máximo.

## 7. Diferencias finitas y estabilidad

Se sustituyen las derivadas por cocientes: $u_{xx} \approx \frac{u_{i+1} - 2u_i + u_{i-1}}{\Delta x^2}$ (error $O(\Delta x^2)$).

- **Calor, esquema explícito** (FTCS): $u_i^{n+1} = u_i^n + r(u_{i+1}^n - 2u_i^n + u_{i-1}^n)$ con $r = \alpha\Delta t/\Delta x^2$. **Análisis de von Neumann**: un modo $e^{\mathrm{i}kj\Delta x}$
  se multiplica por $1 - 4r\operatorname{sen}^2(k\Delta x/2)$; para que ningún modo crezca hace falta $r \le \frac12$, es decir $\Delta t \le \Delta x^2/(2\alpha)$. Reducir $\Delta x$ a la
  mitad obliga a dividir $\Delta t$ entre cuatro.
- **Calor, esquemas implícitos** (Euler implícito, Crank-Nicolson): estables para todo $r$; cada paso resuelve un sistema tridiagonal ($O(N)$ con el
  algoritmo de Thomas). Crank-Nicolson es de orden 2 en tiempo.
- **Ondas, salto de rana**: $u_i^{n+1} = 2u_i^n - u_i^{n-1} + \sigma^2(u_{i+1}^n - 2u_i^n + u_{i-1}^n)$ con $\sigma = c\Delta t/\Delta x$; estable si $\sigma \le 1$ (**condición CFL**: el
  dominio de dependencia numérico debe contener al real).
- **Laplace**: el esquema de cinco puntos da un sistema lineal grande y disperso; se resuelve con Gauss-Seidel/SOR, gradiente conjugado o multimalla.

**Teorema de Lax**: para un esquema consistente de un problema lineal bien planteado, **estabilidad ⇔ convergencia**. La consistencia sola no basta.

## 8. Comprobar con un programa

Cada ejemplo resuelto por la fórmula y por diferencias finitas; además, la inestabilidad del esquema explícito cuando se viola $r \le \frac12$.

```python
import math

# 1. Ejemplo resuelto 1: separación de variables frente al esquema explícito.
N = 100
dx = math.pi / N
r = 0.4
pasos = math.ceil(0.5 / (r * dx * dx))
dt = 0.5 / pasos
u = [2 * math.sin(i * dx) - math.sin(2 * i * dx) for i in range(N + 1)]
for _ in range(pasos):
    u = [0.0] + [u[i] + dt / dx**2 * (u[i + 1] - 2 * u[i] + u[i - 1]) for i in range(1, N)] + [0.0]
exacta = 2 * math.exp(-0.5) * math.sin(math.pi / 4) - math.exp(-2) * math.sin(math.pi / 2)
assert abs(u[N // 4] - exacta) < 1e-3 and abs(exacta - 0.7224) < 1e-4

# 2. Con r = 0,6 > 1/2 el mismo esquema explota.
u = [math.sin(i * dx) + 1e-12 * (-1) ** i for i in range(N + 1)]
for _ in range(400):
    u = [0.0] + [u[i] + 0.6 * (u[i + 1] - 2 * u[i] + u[i - 1]) for i in range(1, N)] + [0.0]
assert max(abs(v) for v in u) > 1e3

# 3. Ejemplo resuelto 2: d'Alembert frente al salto de rana (c = 1, σ = 0,5, dominio grande).
L, M = 20.0, 2000
h = 2 * L / M
dt = 0.5 * h
x = [-L + i * h for i in range(M + 1)]
prev = [math.exp(-v * v) for v in x]
cur = [prev[0]] + [prev[i] + 0.5 * 0.25 * (prev[i + 1] - 2 * prev[i] + prev[i - 1]) for i in range(1, M)] + [prev[M]]
pasos = round(3 / dt)
for _ in range(pasos - 1):
    cur, prev = [0.0] + [2 * cur[i] - prev[i] + 0.25 * (cur[i + 1] - 2 * cur[i] + cur[i - 1]) for i in range(1, M)] + [0.0], cur
t = pasos * dt
for xi in (-3.0, 0.0, 2.0):
    i = round((xi + L) / h)
    assert abs(cur[i] - 0.5 * (math.exp(-(xi + t) ** 2) + math.exp(-(xi - t) ** 2))) < 2e-3

# 4. Ejemplo resuelto 3: Laplace por SOR frente a la fórmula senh(2y)/senh(2π)·sen(2x).
n = 48
h = math.pi / n
U = [[0.0] * (n + 1) for _ in range(n + 1)]
for i in range(n + 1):
    U[i][n] = math.sin(2 * i * h)
w = 2 / (1 + math.sin(math.pi / n))
for _ in range(3000):
    for i in range(1, n):
        for j in range(1, n):
            U[i][j] += w * ((U[i + 1][j] + U[i - 1][j] + U[i][j + 1] + U[i][j - 1]) / 4 - U[i][j])
formula = math.sinh(math.pi) / math.sinh(2 * math.pi)
assert abs(U[n // 4][n // 2] - formula) < 2e-3 and abs(formula - 0.0431) < 1e-4
print("Laplace en (π/4, π/2): SOR", round(U[n // 4][n // 2], 5), "fórmula", round(formula, 5))
```

## 9. Errores típicos

- Separar variables con condiciones de contorno no homogéneas: primero hay que restar una solución estacionaria que las absorba.
- Olvidar el modo $\lambda = 0$ con condiciones de Neumann (es la media, la que sobrevive).
- Usar la fórmula de d'Alembert en un intervalo sin reflejar los datos (extensión impar para extremos fijos).
- Elegir $\Delta t$ "pequeño" sin comprobar $r \le \frac12$ o la CFL: el resultado parece razonable unos pasos y luego explota.
- Confundir consistencia con convergencia: un esquema puede aproximar bien la ecuación y no converger (Lax).
- Pedir a la ecuación equivocada los datos equivocados (problema mal planteado).

## 10. Resumen

- Tipos: elíptica (Laplace, datos de borde), parabólica (calor, inicial + borde), hiperbólica (ondas, posición y velocidad + borde).
- Características: $u_t + cu_x = 0 \Rightarrow u = f(x - ct)$; Burgers rompe en $t^* = -1/\min u_0'$.
- Calor: modos $e^{-\alpha(n\pi/L)^2t}\operatorname{sen}(n\pi x/L)$, núcleo gaussiano, principio del máximo, suaviza, propagación infinita, anchura $\sqrt{t}$.
- Ondas: d'Alembert, dominio de dependencia, $f_1 = c/(2L)$, energía conservada.
- Laplace: valor medio, principio del máximo, separación en rectángulos con $\operatorname{senh}$.
- Diferencias finitas: $r \le \frac12$ (explícito), implícitos incondicionalmente estables, CFL $\sigma \le 1$, Lax: estable + consistente ⇔ convergente.

## Repaso: lo que debe quedarte dentro de un mes

1. El tipo de la ecuación decide qué datos pide y cómo se comporta la solución.
2. Separar variables convierte una EDP en una familia de EDO más una serie de Fourier.
3. El calor olvida y suaviza; las ondas recuerdan y viajan a velocidad finita; Laplace promedia.
4. El principio del máximo y la energía dan unicidad casi gratis.
5. En simulación, la estabilidad no es opcional: compruébala antes de fiarte de un número.

## Siguiente

`mat-analisis-funcional` (espacios de Sobolev y soluciones débiles, la base de los elementos finitos), `fis-fluidos` (Navier-Stokes) y
`ing-procesado-digital-senal` (Fourier discreto). La física de estas ecuaciones está en [[fis-electromagnetismo]] y [[fis-mecanica-cuantica]].
