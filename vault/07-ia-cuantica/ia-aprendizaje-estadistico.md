---
id: ia-aprendizaje-estadistico
title: "Aprendizaje estadístico"
area: ia-cuantica
trunk_level: 13
prerequisites: [mat-algebra-lineal, mat-estadistica-inferencia]
academic_sources:
  - "Bishop, C. M. Pattern Recognition and Machine Learning. Springer, 2006."
  - "Hastie, T.; Tibshirani, R.; Friedman, J. The Elements of Statistical Learning, 2ª ed. Springer, 2009."
  - "Shalev-Shwartz, S.; Ben-David, S. Understanding Machine Learning: From Theory to Algorithms. Cambridge University Press, 2014."
  - "Boyd, S.; Vandenberghe, L. Convex Optimization. Cambridge University Press, 2004."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997."
ctf_flag: "sha256:6c51f3500f3b511aa9b2a326015de94d3d55e0f7b232207b766306bbc7ac9a47"
hints:
  - "(a) Es un problema de mínimos cuadrados lineal en los coeficientes, aunque el modelo sea un polinomio en x. (b) Para cada grado, ajusta 41 veces dejando fuera un punto, o usa el atajo de la matriz sombrero, que da exactamente lo mismo con un solo ajuste. (c) La log-verosimilitud logística es cóncava: el método de Newton converge desde β = 0 en pocas iteraciones."
  - "(a) numpy.linalg.lstsq(numpy.vander(x, 4, increasing=True), y) usa una factorización estable; evita invertir XᵀX. (b) Con Q de numpy.linalg.qr(X), la diagonal de H = QQᵀ es (Q**2).sum(axis=1). (c) sklearn.linear_model.LogisticRegression regulariza por defecto: pasa penalty=None, o escribe tú las diez líneas de Newton (IRLS). Construye los datos con aritmética entera exacta para el módulo y en coma flotante de doble precisión para el resto."
  - "Hastie et al., §3.2 (mínimos cuadrados y su geometría), §7.10 (validación cruzada; ecuación 7.52, el atajo para LOOCV) y §4.4 (regresión logística y su algoritmo de Newton, IRLS). Bishop, §3.2 (sesgo-varianza) y §4.3.3. Trefethen & Bau, lección 11 (mínimos cuadrados por QR). Documentación: numpy.org/doc/stable/reference/generated/numpy.linalg.lstsq.html."
---

# Aprendizaje estadístico

Aprender es elegir, a partir de datos finitos, una función que funcione bien con datos que todavía
no se han visto. La distancia entre esas dos cosas, el error en los datos de entrenamiento y el
error de verdad, es el objeto de este nodo. Todo lo que viene después en [[ia-redes-profundas]]
son variaciones sobre los mismos tres ingredientes: un modelo, una función de pérdida y un método
para minimizarla.

## 1. El marco: minimización del riesgo empírico

Hay una distribución desconocida $\mathcal D$ sobre pares $(x, y)$ y una **pérdida**
$\ell(\hat y, y)$. El **riesgo** de una hipótesis $h$ es
$R(h) = \mathbb E_{(x,y)\sim\mathcal D}\,\ell(h(x), y)$, y lo que se puede calcular es el
**riesgo empírico** sobre una muestra de tamaño $n$,

$$
\hat R_n(h) = \frac1n \sum_{i=1}^n \ell(h(x_i), y_i).
$$

La **minimización del riesgo empírico** (ERM) elige $\hat h = \arg\min_{h\in\mathcal H}\hat R_n(h)$
dentro de una clase de hipótesis $\mathcal H$.

**Teorema (clase finita).** Si $\mathcal H$ es finita y $\ell \in [0, 1]$, con probabilidad al
menos $1 - \delta$ se cumple, para toda $h \in \mathcal H$ a la vez,

$$
|R(h) - \hat R_n(h)| \le \sqrt{\frac{\ln(2|\mathcal H|/\delta)}{2n}} .
$$

*Demostración.* Para una $h$ fija, $\hat R_n(h)$ es una media de $n$ variables independientes en
$[0, 1]$ con esperanza $R(h)$, y la desigualdad de Hoeffding da
$\Pr\bigl[|R(h) - \hat R_n(h)| > \varepsilon\bigr] \le 2e^{-2n\varepsilon^2}$. La cota de la unión
sobre las $|\mathcal H|$ hipótesis multiplica por $|\mathcal H|$; se iguala a $\delta$ y se
despeja $\varepsilon$. $\blacksquare$

Dos lecciones. La generalización depende de la **capacidad** de la clase ($\ln|\mathcal H|$, o su
dimensión de Vapnik-Chervonenkis en clases infinitas) frente a $n$. Y ninguna cota se aplica a una
$h$ que se haya elegido mirando los datos de prueba: por eso existen la validación y el conjunto
de test separados.

## 2. Regresión lineal y máxima verosimilitud

Modelo $y = x^{\mathsf T}w + \varepsilon$ con $\varepsilon \sim \mathcal N(0, \sigma^2)$
independiente. Con la matriz de diseño $X \in \mathbb R^{n\times p}$ (una fila por dato), la
log-verosimilitud es

$$
\log p(y \mid X, w) = -\frac{1}{2\sigma^2}\|y - Xw\|^2 - \frac n2\log(2\pi\sigma^2),
$$

de modo que **maximizar la verosimilitud gaussiana equivale a minimizar el error cuadrático**.

**Teorema.** Si $X$ tiene rango $p$, el minimizador es único y cumple las **ecuaciones normales**
$X^{\mathsf T}X\,\hat w = X^{\mathsf T}y$.

*Demostración.* $\|y - Xw\|^2$ es una cuadrática con hessiana $2X^{\mathsf T}X \succ 0$; su
gradiente $-2X^{\mathsf T}(y - Xw)$ se anula en un único punto. $\blacksquare$

Geométricamente, $X\hat w$ es la **proyección ortogonal** de $y$ sobre el espacio columna de $X$,
y la matriz que proyecta es la **matriz sombrero** $H = X(X^{\mathsf T}X)^{-1}X^{\mathsf T}$, con
$\hat y = Hy$.

**No hay que resolver las ecuaciones normales.** El número de condición de $X^{\mathsf T}X$ es el
**cuadrado** del de $X$. Con una factorización $X = QR$ ($Q$ con columnas ortonormales, $R$
triangular superior) el problema se reduce a $R\hat w = Q^{\mathsf T}y$, sin elevar nada al
cuadrado, y además $H = QQ^{\mathsf T}$.

**Modelos no lineales en $x$, lineales en $w$.** Un polinomio de grado $d$ es una regresión lineal
con las características $(1, x, x^2, \dots, x^d)$: la matriz de diseño es una matriz de
**Vandermonde**. Todo lo anterior se aplica sin cambios.

Valor de control: con los datos del apartado (a) del reto, la recta de mínimos cuadrados es
$\hat y = -0{,}0904497 - 0{,}6503371\,x$.

## 3. Sesgo, varianza y regularización

Si $y = f(x) + \varepsilon$ con $\operatorname{Var}\varepsilon = \sigma^2$, y $\hat f$ se ajusta
con una muestra aleatoria, en un punto fijo $x$:

**Teorema (descomposición sesgo-varianza).**

$$
\mathbb E\bigl[(y - \hat f(x))^2\bigr] = \sigma^2 + \bigl(f(x) - \mathbb E\hat f(x)\bigr)^2 +
\operatorname{Var}\hat f(x) .
$$

*Demostración.* Se suma y se resta $\mathbb E\hat f(x)$; los términos cruzados se anulan porque
$\varepsilon$ es independiente de $\hat f$ y tiene media cero, y porque
$\hat f - \mathbb E\hat f$ tiene media cero. $\blacksquare$

El ruido $\sigma^2$ es irreducible. Un modelo más flexible (un grado mayor) reduce el sesgo y
aumenta la varianza. Con pocos datos, la varianza domina y el ajuste reproduce el ruido: es el
**sobreajuste**.

**Ridge.** Minimizar $\|y - Xw\|^2 + \lambda\|w\|^2$ da $\hat w = (X^{\mathsf T}X +
\lambda I)^{-1}X^{\mathsf T}y$: una matriz siempre invertible, y coeficientes encogidos hacia cero.
Es la estimación MAP con una prior gaussiana sobre $w$. Con penalización $\lambda\|w\|_1$
(lasso), muchos coeficientes se anulan exactamente.

## 4. Validación cruzada

Para elegir el grado $d$ o el $\lambda$ hace falta estimar el riesgo de cada modelo con datos que
no se hayan usado para ajustarlo. La **validación cruzada dejando uno fuera** (LOOCV) ajusta $n$
veces, cada una sin el punto $i$, y promedia el error en el punto excluido:

$$
\mathrm{CV} = \frac1n\sum_{i=1}^n \bigl(y_i - \hat f^{(-i)}(x_i)\bigr)^2 .
$$

**Teorema (atajo para mínimos cuadrados).** Con $h_{ii}$ la diagonal de la matriz sombrero del
ajuste con todos los datos y $e_i = y_i - \hat y_i$ sus residuos,

$$
y_i - \hat f^{(-i)}(x_i) = \frac{e_i}{1 - h_{ii}} .
$$

*Demostración.* Quitar la fila $x_i$ cambia $X^{\mathsf T}X$ a $A - x_ix_i^{\mathsf T}$, con
$A = X^{\mathsf T}X$. Por la fórmula de Sherman-Morrison,
$(A - x_ix_i^{\mathsf T})^{-1} = A^{-1} + \frac{A^{-1}x_ix_i^{\mathsf T}A^{-1}}{1 - h_{ii}}$, con
$h_{ii} = x_i^{\mathsf T}A^{-1}x_i$. Multiplicando por $X^{\mathsf T}y - x_iy_i$ y simplificando,
$x_i^{\mathsf T}\hat w^{(-i)} = \frac{\hat y_i - h_{ii}y_i}{1 - h_{ii}}$, y restando de $y_i$ se
obtiene el resultado. $\blacksquare$

Un único ajuste da los $n$ errores dejando uno fuera. El mismo atajo vale para ridge y, en
general, para cualquier suavizador lineal $\hat y = Hy$.

Valor de control: con los datos del apartado (a), el error LOOCV de la recta ($d = 1$) es
$0{,}941973231\ldots$

## 5. Clasificación: regresión logística

Para $y \in \{0, 1\}$ se modela $\Pr[y = 1 \mid x] = \sigma(x^{\mathsf T}\beta)$, con la función
logística $\sigma(z) = 1/(1 + e^{-z})$. La log-verosimilitud es

$$
\ell(\beta) = \sum_{i=1}^n \Bigl[y_i\log\sigma(x_i^{\mathsf T}\beta) + (1 - y_i)\log\bigl(1 -
\sigma(x_i^{\mathsf T}\beta)\bigr)\Bigr],
$$

y como $\sigma' = \sigma(1 - \sigma)$,

$$
\nabla\ell = X^{\mathsf T}(y - p), \qquad \nabla^2\ell = -X^{\mathsf T}WX, \qquad
W = \operatorname{diag}\bigl(p_i(1 - p_i)\bigr),
$$

con $p_i = \sigma(x_i^{\mathsf T}\beta)$. La hessiana es semidefinida negativa: $\ell$ es
**cóncava** y todo máximo local es global.

**Newton = IRLS.** La iteración $\beta \leftarrow \beta + (X^{\mathsf T}WX)^{-1}X^{\mathsf T}(y -
p)$ equivale a resolver en cada paso un problema de mínimos cuadrados ponderados con pesos $W$;
de ahí su nombre, *iteratively reweighted least squares*.

**Advertencia.** Si las clases son **separables** por un hiperplano, el máximo no existe: $\|\beta\|
\to \infty$ y Newton diverge. Por eso las bibliotecas regularizan por defecto. Antes de comparar
con una, hay que saber qué problema resuelve.

## 6. Descenso de gradiente

Para minimizar una $f$ convexa y diferenciable cuyo gradiente es $L$-lipschitziano, se itera
$w_{k+1} = w_k - \eta\nabla f(w_k)$.

**Teorema.** Con $\eta = 1/L$, $f(w_k) - f^* \le \frac{L\|w_0 - w^*\|^2}{2k}$.

La convergencia es solo $O(1/k)$, frente a la cuadrática de Newton, pero cada paso cuesta $O(np)$
en vez de $O(np^2 + p^3)$. Con millones de parámetros, Newton es impracticable y el descenso de
gradiente estocástico, que estima $\nabla f$ con unos pocos datos, es lo único viable.

## Reto

**Datos de regresión.** Para $i = 0, 1, \dots, 40$:

$$
x_i = -1 + \frac{i}{20}, \qquad
y_i = e^{x_i}\cos(3x_i) + \frac{(7i \bmod 13) - 6}{40} .
$$

**Datos de clasificación.** Para $i = 0, 1, \dots, 40$:

$$
u_i = i/10 - 2, \qquad
c_i = \begin{cases} 1 & \text{si } \dfrac{29\,i \bmod 41}{41} < \sigma(2u_i - 1) \\[1mm]
0 & \text{en otro caso.} \end{cases}
$$

Deberías obtener 17 datos con $c_i = 1$, y las clases no son separables.

- **a.** Ajusta por mínimos cuadrados un polinomio de grado 3 a los datos de regresión y toma el
  **valor absoluto** del coeficiente de $x^3$.
- **b.** Para cada grado $d = 0, 1, \dots, 10$, calcula el error LOOCV del ajuste polinómico de
  grado $d$ por mínimos cuadrados. Da el grado $d^*$ con menor error y ese error
  $\mathrm{CV}(d^*)$.
- **c.** Ajusta por máxima verosimilitud, sin regularización, el modelo
  $\Pr[c = 1 \mid u] = \sigma(\beta_0 + \beta_1 u)$ y da la pendiente $\beta_1$.

Formato de la flag: `EXODUS{a-d-cv-b}`, con $a = \lfloor 10^9\,|w_3|\rfloor$, $d = d^*$,
$cv = \lfloor 10^9 \cdot \mathrm{CV}(d^*)\rfloor$ y $b = \lfloor 10^9\,\beta_1\rfloor$.
