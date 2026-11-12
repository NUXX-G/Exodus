---
id: mat-algebra-secundaria
title: "Álgebra de secundaria: polinomios, radicales y logaritmos"
area: matematicas
trunk_level: 5
prerequisites: [mat-algebra-basica, mat-funciones-basicas]
academic_sources:
  - "Stewart, J.; Redlin, L.; Watson, S. Precalculus: Mathematics for Calculus, 7ª ed. Cengage Learning, 2016."
  - "Gelfand, I. M.; Shen, A. Algebra. Birkhäuser, 1993."
  - "Euclides. Elementos, libro X (inconmensurables) y libro II (álgebra geométrica). Edición en línea de D. E. Joyce, Clark University."
hints:
  - "Concepto: casi todo se reduce a dos movimientos: factorizar (para ver las raíces) y usar la definición de logaritmo como inverso de la exponencial. Al elevar al cuadrado o multiplicar por una expresión con incógnita pueden aparecer soluciones falsas: comprueba **siempre** cada solución en la ecuación original y en el dominio."
  - "Herramienta: sympy (`factor`, `solve`, `Poly`, `div`) para comprobar a mano; la regla de Ruffini y el teorema del resto para evaluar y dividir; `math.log(x, base)`, `math.log10` y `math.log2` en Python para los logaritmos, y un barrido de enteros con un bucle para recuentos."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/ (simplificación, resolución de ecuaciones y polinomios); docs.python.org/3/library/math.html (log, log10, log2, sqrt); Stewart-Redlin-Watson, capítulos de funciones polinómicas y racionales, y de exponenciales y logaritmos."
exercises:
  - id: resto-ruffini
    tier: 1
    prompt: |
      ¿Cuál es el resto de dividir $x^3 - 2x^2 + 4x - 8$ entre $x - 2$? Respuesta: un número.
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: cuadratica-simple
    tier: 1
    prompt: |
      Resuelve $x^2 - 5x + 6 = 0$. Respuesta: las dos raíces de menor a mayor, separadas por punto y coma, por ejemplo «1;4».
    answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
  - id: logaritmo-base-2
    tier: 1
    prompt: |
      Calcula $\log_2 64$. Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: suma-cuadrados-raices
    tier: 2
    prompt: |
      Si $\alpha$ y $\beta$ son las raíces de $x^2 - 7x + 10 = 0$, calcula $\alpha^2 + \beta^2$. Respuesta: un número.
    answers: ["sha256:35135aaa6cc23891b40cb3f378c53a17a1127210ce60e125ccf03efcfdaec458"]
  - id: bicuadrada
    tier: 2
    prompt: |
      ¿Cuántas soluciones reales distintas tiene $x^4 - 5x^2 + 4 = 0$? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: ecuacion-con-raiz
    tier: 2
    prompt: |
      Resuelve $\sqrt{x + 7} = x + 1$. (Cuidado: al elevar al cuadrado pueden aparecer soluciones falsas; comprueba.) Respuesta: la solución válida.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: ecuacion-logaritmica
    tier: 2
    prompt: |
      Resuelve $\log_3 x + \log_3 (x - 2) = 1$. Respuesta: la solución válida (recuerda el dominio del logaritmo).
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: exponentes-racionales
    tier: 2
    prompt: |
      Calcula $8^{2/3}\cdot 27^{-1/3}$ como fracción irreducible «a/b».
    answers: ["sha256:88a09c48f589386b2d18d8be987cffe6a938c9e22314f3542082f7f6243efdb5"]
  - id: racionalizar
    tier: 2
    prompt: |
      Calcula el valor de $\dfrac{6}{\sqrt{5} - \sqrt{2}}$ (conviene racionalizar el denominador). Respuesta: la **parte entera** del resultado.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: inecuacion-cuadratica
    tier: 2
    prompt: |
      ¿Cuántos números **enteros** $x$ cumplen $x^2 - 3x - 10 < 0$? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: tiempo-de-duplicacion
    tier: 3
    prompt: |
      Se invierten $1000$ euros al $3{,}5\,\%$ de interés compuesto anual. ¿Cuál es el menor número **entero** de años tras el cual el capital es al menos de $2000$ euros?
      Respuesta: un entero.
    answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
  - id: ph
    tier: 3
    prompt: |
      El pH se define como $\mathrm{pH} = -\log_{10}[\mathrm{H}^+]$. Si $[\mathrm{H}^+] = 3{,}0\cdot 10^{-5}$ mol/L, ¿cuánto vale el pH? Respuesta: **dos decimales**.
    answers: ["sha256:2d3fb2226968379f38a8b75dd8f135d7834739c314d8c49f1395b397678c6cfd"]
  - id: energia-sismica
    tier: 3
    prompt: |
      La energía liberada por un terremoto crece como $E \propto 10^{1{,}5\,M}$, siendo $M$ la magnitud. ¿Cuántas veces más energía libera un terremoto de magnitud $7$ que uno de
      magnitud $5$? Respuesta: un número.
    answers: ["sha256:40510175845988f13f6162ed8526f0b09f73384467fa855e1e79b44a56562a58"]
  - id: parametro-teorema-del-resto
    tier: 3
    prompt: |
      El polinomio $p(x) = x^3 + a x^2 - 4x + 3$ deja resto $5$ al dividirlo entre $x - 1$. ¿Cuánto vale $a$? Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: raices-enteras
    tier: 3
    prompt: |
      ¿Cuántas raíces **enteras** tiene $2x^3 - 3x^2 - 11x + 6 = 0$? (Pista: prueba los divisores del término independiente y aplica la regla de Ruffini.) Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: identidad-de-cubos
    tier: 3
    prompt: |
      Si $\alpha$ y $\beta$ son las raíces de $x^2 - 6x + 4 = 0$, calcula $\alpha^3 + \beta^3$ (sin hallar las raíces: usa $\alpha + \beta$ y $\alpha\beta$). Respuesta: un número.
    answers: ["sha256:5ec1a0c99d428601ce42b407ae9c675e0836a8ba591c8ca6e2a2cf5563d97ff0"]
---

# Álgebra de secundaria: polinomios, radicales y logaritmos

El álgebra básica resolvía ecuaciones de primer grado. Aquí se ensancha a todo lo que sostiene la matemática posterior: los **polinomios** (y por qué se pueden
factorizar), las ecuaciones de segundo grado y superiores, los **radicales** y las potencias con exponentes cualesquiera, y los **logaritmos**, que permiten
resolver para el exponente y manejar escalas enormes (terremotos, sonido, acidez, interés compuesto). Es el nodo donde se aprende a **comprobar** cada solución,
que es una de las lecciones más valiosas de la matemática.

## Objetivos

Al terminar sabrás:

1. Operar con polinomios, dividirlos, factorizarlos y usar los teoremas del resto y del factor.
2. Resolver ecuaciones de segundo grado, bicuadradas, racionales y con radicales, y detectar soluciones falsas.
3. Manejar potencias de exponente entero y racional, y radicales; racionalizar.
4. Definir y usar logaritmos; resolver ecuaciones exponenciales y logarítmicas.
5. Resolver inecuaciones polinómicas y racionales con una tabla de signos.
6. Aplicar logaritmos a interés, acidez, sonido y sismos.

> [!question] Test de entrada
> 1. Factoriza $x^2 - 9$. 2. ¿Cuánto vale $2^{-3}$? 3. Resuelve $x^2 = 16$.
>
> Respuestas: $(x - 3)(x + 3)$; $\frac{1}{8}$; $x = 4$ o $x = -4$.

## 1. Para qué sirve

- **Modelar**: casi toda relación con curvatura (trayectorias, áreas, costes) es un polinomio o una exponencial.
- **Resolver el exponente**: «¿cuánto tarda en doblarse mi dinero?» es una ecuación con logaritmos.
- **Escalas**: pH, decibelios, magnitud de terremotos y brillo de estrellas son logarítmicas.
- **Fundamento del cálculo y de la informática**: la complejidad de algoritmos ($\log n$, $n^2$) y la criptografía usan exactamente estas ideas.

## 2. Polinomios

Un **polinomio** en $x$ es $p(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ con $a_n \ne 0$; $n$ es su **grado**. Se suman, restan y multiplican término a término.
El grado de un producto es la **suma** de grados: $(x^2 + 1)(x^3 - x)$ tiene grado $5$.

**División de polinomios.** Como con los enteros (ver [[mat-numeros-naturales]]): dados $A$ y $B \ne 0$ existen un **cociente** $Q$ y un **resto** $R$ únicos con
$A = B\,Q + R$ y $\text{grado}(R) < \text{grado}(B)$.

**Teorema del resto.** El resto de dividir $p(x)$ entre $x - a$ es $p(a)$.
*Demostración.* Como $x - a$ tiene grado $1$, el resto es una constante $r$: $p(x) = (x - a)Q(x) + r$. Sustituyendo $x = a$: $p(a) = r$. $\blacksquare$

**Teorema del factor.** $x - a$ divide a $p(x)$ si y solo si $p(a) = 0$; es decir, **$a$ es una raíz si y solo si $x - a$ es un factor.**

**Regla de Ruffini** (división entre $x - a$ con solo los coeficientes). **Ejemplo resuelto:** $x^3 - 7x + 6$ entre $x - 2$; coeficientes $1, 0, -7, 6$ y $a = 2$:

| | $1$ | $0$ | $-7$ | $6$ |
|---|:---:|:---:|:---:|:---:|
| $2$ | | $2$ | $4$ | $-6$ |
| | $1$ | $2$ | $-3$ | $0$ |

Se baja el primero; cada resultado se multiplica por $2$ y se suma al siguiente coeficiente. Cociente $x^2 + 2x - 3$ y **resto $0$**: $2$ es raíz. Entonces
$x^3 - 7x + 6 = (x - 2)(x^2 + 2x - 3) = (x - 2)(x + 3)(x - 1)$, con raíces $2, -3, 1$.

**Raíces racionales.** Si $p$ tiene coeficientes **enteros** y $\frac{r}{s}$ (irreducible) es raíz, entonces $r$ divide al término independiente $a_0$ y $s$ divide al coeficiente principal $a_n$.
*Demostración.* Sustituyendo y multiplicando por $s^n$: $a_n r^n + a_{n-1} r^{n-1}s + \cdots + a_0 s^n = 0$. Todos los términos salvo el primero son múltiplos de $s$, luego $s \mid a_n r^n$;
como $\gcd(r, s) = 1$, $s \mid a_n$. Análogamente $r \mid a_0$. $\blacksquare$ Con ello se acota la búsqueda: para $2x^3 + 3x^2 - 8x + 3$ las candidatas son
$\pm1, \pm3, \pm\frac12, \pm\frac32$. Probando $x = 1$: $2 + 3 - 8 + 3 = 0$. Ruffini da $2x^3 + 3x^2 - 8x + 3 = (x - 1)(2x^2 + 5x - 3) = (x - 1)(2x - 1)(x + 3)$.

**Teorema fundamental del álgebra** (Gauss; enunciado, la demostración requiere análisis): todo polinomio de grado $n \ge 1$ tiene exactamente $n$ raíces **complejas** contadas con multiplicidad
(se verán los complejos en un nodo posterior). Un polinomio **real** de grado impar tiene **al menos una raíz real**.

## 3. Ecuaciones de segundo grado y más

Para $ax^2 + bx + c = 0$ ($a \ne 0$), completando el cuadrado:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} .
$$

El **discriminante** $\Delta = b^2 - 4ac$ decide: $\Delta > 0$, dos raíces reales; $\Delta = 0$, una doble; $\Delta < 0$, ninguna real.

**Relaciones de Cardano-Vieta.** Si $\alpha, \beta$ son las raíces, $x^2 + \frac{b}{a}x + \frac{c}{a} = (x - \alpha)(x - \beta) = x^2 - (\alpha + \beta)x + \alpha\beta$, de donde

$$
\alpha + \beta = -\frac{b}{a}, \qquad \alpha\beta = \frac{c}{a} .
$$

Permiten calcular expresiones **sin hallar las raíces**: $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ y $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$. Para
$x^2 - 5x + 2 = 0$: $\alpha^2 + \beta^2 = 25 - 4 = 21$.

**Ecuaciones bicuadradas** ($ax^4 + bx^2 + c = 0$): se hace $t = x^2$ y se resuelve la cuadrática en $t$, descartando $t < 0$.

**Ecuaciones racionales.** Se multiplica por el denominador común y **se excluyen los valores que lo anulan**. **Ejemplo resuelto:** $\dfrac{1}{x - 1} + \dfrac{2}{x + 1} = 1$ ($x \ne \pm1$):
$(x + 1) + 2(x - 1) = x^2 - 1 \Rightarrow x^2 - 3x = 0 \Rightarrow x = 0$ o $x = 3$. Comprobación: $x = 0$: $-1 + 2 = 1$ $\checkmark$; $x = 3$: $\frac12 + \frac24 = 1$ $\checkmark$.

**Ecuaciones con radicales.** Elevar al cuadrado **no es reversible**: de $a = b$ se pasa a $a^2 = b^2$, pero $a^2 = b^2$ admite también $a = -b$. Por eso aparecen **soluciones falsas**.
**Ejemplo resuelto:** $\sqrt{2x + 3} = x$: elevando, $2x + 3 = x^2$, $x^2 - 2x - 3 = 0$, $x = 3$ o $x = -1$. Comprobación: $x = 3$: $\sqrt{9} = 3$ $\checkmark$; $x = -1$: $\sqrt{1} = 1 \ne -1$
**falsa**. Solución: $x = 3$.

## 4. Potencias y radicales

Para $a > 0$ y exponentes enteros: $a^m a^n = a^{m+n}$, $(a^m)^n = a^{mn}$, $a^0 = 1$ y $a^{-n} = \dfrac{1}{a^n}$. Para que las leyes sigan valiendo con exponentes fraccionarios se **define**

$$
a^{1/n} = \sqrt[n]{a}, \qquad a^{m/n} = \bigl(\sqrt[n]{a}\bigr)^m .
$$

Entonces $8^{2/3} = (\sqrt[3]{8})^2 = 4$ y $27^{-1/3} = \frac{1}{3}$. **Cuidado:** $\sqrt{a^2} = |a|$ (no $a$), y $\sqrt{a}\,\sqrt{b} = \sqrt{ab}$ solo si $a, b \ge 0$.

**Racionalizar** es quitar radicales del denominador usando el conjugado: $\dfrac{6}{\sqrt{5} - \sqrt{2}} = \dfrac{6(\sqrt{5} + \sqrt{2})}{(\sqrt5)^2 - (\sqrt2)^2} = \dfrac{6(\sqrt5 + \sqrt2)}{3} = 2(\sqrt5 + \sqrt2)$.

**Teorema.** $\sqrt{2}$ es **irracional**.
*Demostración (por reducción al absurdo).* Supongamos $\sqrt2 = \frac{p}{q}$ con $\frac{p}{q}$ irreducible. Entonces $p^2 = 2q^2$, luego $p^2$ es par y, por tanto, $p$ es par: $p = 2k$. Sustituyendo,
$4k^2 = 2q^2$, es decir $q^2 = 2k^2$ y $q$ también es par. Pero entonces $\frac{p}{q}$ no era irreducible: contradicción. $\blacksquare$ (Fue de los primeros resultados que mostraron que los números
racionales **no bastan** para medir; se atribuye a los pitagóricos.)

## 5. Logaritmos

Si $a > 0$, $a \ne 1$ y $x > 0$, el **logaritmo en base $a$** de $x$ es el exponente al que hay que elevar $a$ para obtener $x$:

$$
\log_a x = y \iff a^y = x .
$$

Por tanto $\log_2 64 = 6$ ($2^6 = 64$), $\log_{10}1000 = 3$ y $\log_a 1 = 0$. El logaritmo es la **función inversa** de la exponencial (sus gráficas son simétricas respecto de la recta $y = x$). Solo existe para
$x > 0$. Hay dos bases habituales: $\log_{10}$ y el **logaritmo neperiano** $\ln = \log_e$, con $e \approx 2{,}71828$.

**Propiedades** (con $x, y > 0$):

$$
\log_a(xy) = \log_a x + \log_a y,\quad \log_a\frac{x}{y} = \log_a x - \log_a y,\quad \log_a x^k = k\log_a x,\quad \log_b x = \frac{\log_a x}{\log_a b} .
$$

*Demostración del producto.* Sean $u = \log_a x$ y $v = \log_a y$, es decir $x = a^u$ e $y = a^v$. Entonces $xy = a^u a^v = a^{u + v}$, luego $\log_a(xy) = u + v$. $\blacksquare$ Las demás
siguen igual de las leyes de las potencias. El **cambio de base** permite calcular cualquier logaritmo con la calculadora: $\log_5 20 = \frac{\ln 20}{\ln 5} \approx 1{,}861$.

**Ecuaciones exponenciales.** $3^{2x - 1} = 81 \Rightarrow 2x - 1 = 4 \Rightarrow x = \frac52$. Si no se pueden igualar las bases, se toman logaritmos: $5^x = 20 \Rightarrow x = \log_5 20 \approx 1{,}861$.

**Ecuaciones logarítmicas.** Se agrupan los logaritmos, se pasa a forma exponencial y **se comprueba el dominio**. **Ejemplo resuelto:** $\log_2 x + \log_2(x + 2) = 3$. Entonces $\log_2[x(x + 2)] = 3$,
$x(x + 2) = 8$, $x^2 + 2x - 8 = 0$, $x = 2$ o $x = -4$. Como $\log_2(-4)$ no existe, **solo vale $x = 2$** ($\log_2 2 + \log_2 4 = 1 + 2 = 3$ $\checkmark$).

### Aplicaciones

- **Interés compuesto** (ver [[mat-proporcionalidad-porcentajes]]): $C(1 + r)^n = 2C$ da $n = \dfrac{\ln 2}{\ln(1 + r)}$. Al $4\,\%$: $\frac{0{,}6931}{0{,}03922} = 17{,}67$ años (la regla del $72$ da $18$).
- **Acidez:** $\text{pH} = -\log_{10}[\text{H}^+]$. Un zumo de limón con $[\text{H}^+] \approx 10^{-2}$ mol/L tiene pH $2$; el agua pura, $10^{-7}$ (pH $7$). **Un punto de pH es un factor $10$ de concentración.**
- **Sonido:** $\beta = 10\log_{10}(I/I_0)$ dB (ver [[fis-ondas-calor-fluidos]]).
- **Terremotos:** la energía crece como $10^{1{,}5M}$: **un punto de magnitud multiplica la energía por $10^{1{,}5} \approx 32$**; $2$ puntos, por $1000$.
- **Desintegración radiactiva:** $N = N_0\,2^{-t/T}$; el tiempo para llegar a una fracción $f$ es $t = T\log_2(1/f)$.
- **Informática:** $\log_2 n$ es el número de bits de $n$ y el de pasos de una búsqueda binaria.

## 6. Inecuaciones polinómicas y racionales

Se pasa todo a un lado, se **factoriza** y se estudia el **signo de cada factor** en una recta numérica dividida por las raíces.
**Ejemplo resuelto:** $x^2 - 2x - 3 > 0$. Raíces: $x = -1$ y $x = 3$; $(x + 1)(x - 3) > 0$. Signos: en $(-\infty, -1)$ ambos factores son negativos, producto $+$; en $(-1, 3)$, producto $-$; en
$(3, \infty)$, $+$. Solución: $x < -1$ o $x > 3$.
**Racional:** $\dfrac{x - 1}{x + 2} \ge 0$: numerador se anula en $1$, denominador en $-2$ (**excluido**). Signos: $x < -2$: $(-)/(-) = +$; $-2 < x < 1$: $-$; $x > 1$: $+$. Solución: $x < -2$ o $x \ge 1$.
**No** se multiplica por la expresión del denominador sin conocer su signo.

## 7. Funciones compuestas e inversas

La **composición** $(g \circ f)(x) = g(f(x))$ aplica primero $f$ y luego $g$. Una función **inversa** $f^{-1}$ deshace a $f$: $f^{-1}(f(x)) = x$. Para hallarla: se escribe $y = f(x)$,
se **despeja $x$** y se intercambian los nombres. Si $f(x) = 2x - 3$: $y = 2x - 3 \Rightarrow x = \frac{y + 3}{2}$, luego $f^{-1}(x) = \frac{x + 3}{2}$. Exponencial y logaritmo son inversas entre sí.

## 8. Errores típicos

- $(a + b)^2 = a^2 + b^2$ y $\sqrt{a^2 + b^2} = a + b$ (**ambas falsas**).
- No comprobar las soluciones tras elevar al cuadrado, multiplicar por una expresión con $x$, o tomar logaritmos.
- $\log(a + b) = \log a + \log b$ (**falso**; el logaritmo convierte **productos** en sumas).
- Olvidar que el argumento de un logaritmo debe ser positivo.
- Simplificar una fracción «tachando» sumandos en lugar de factores.
- En una inecuación, multiplicar por un negativo sin invertir el sentido.

## Repaso: lo que debe quedarte dentro de un mes

1. Teorema del resto: $p(a)$ es el resto de dividir entre $x - a$; raíz $\iff$ factor.
2. Fórmula cuadrática; Vieta: $\alpha + \beta = -b/a$, $\alpha\beta = c/a$.
3. Elevar al cuadrado puede crear soluciones falsas: **comprobar**.
4. $\log_a x = y \iff a^y = x$; $\log(xy) = \log x + \log y$; cambio de base.
5. Inecuaciones: factorizar y tabla de signos; excluir los ceros del denominador.

## Siguiente

La **trigonometría** (`mat-trigonometria`) amplía las funciones al estudio de ángulos y ondas, y la **geometría analítica** (`mat-geometria-analitica`) une el álgebra con las figuras.
