---
id: ia-aprendizaje-estadistico
title: "Aprendizaje estadístico: riesgo, mínimos cuadrados, sesgo y varianza, validación, clasificación y no supervisado"
area: ia-cuantica
trunk_level: 13
prerequisites: [mat-algebra-lineal, mat-estadistica-inferencia]
academic_sources:
  - "Hastie, T.; Tibshirani, R.; Friedman, J. The Elements of Statistical Learning, 2ª ed. Springer, 2009."
  - "Bishop, C. M. Pattern Recognition and Machine Learning. Springer, 2006."
  - "Shalev-Shwartz, S.; Ben-David, S. Understanding Machine Learning: From Theory to Algorithms. Cambridge University Press, 2014."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997."
ctf_flag: "sha256:6c51f3500f3b511aa9b2a326015de94d3d55e0f7b232207b766306bbc7ac9a47"
hints:
  - "(a) Es un problema de mínimos cuadrados lineal en los coeficientes, aunque el modelo sea un polinomio en x. (b) Para cada grado, ajusta 41 veces dejando fuera un punto, o usa el atajo de la matriz sombrero, que da exactamente lo mismo con un solo ajuste. (c) La log-verosimilitud logística es cóncava: el método de Newton converge desde β = 0 en pocas iteraciones."
  - "(a) numpy.linalg.lstsq(numpy.vander(x, 4, increasing=True), y) usa una factorización estable; evita invertir XᵀX. (b) Con Q de una factorización QR de X, la diagonal de H = QQᵀ es la suma por filas de Q². (c) sklearn.linear_model.LogisticRegression regulariza por defecto: pasa penalty=None, o escribe tú las diez líneas de Newton (IRLS). Construye los datos con aritmética entera exacta para el módulo y en coma flotante de doble precisión para el resto."
  - "Hastie et al., capítulo 3 (mínimos cuadrados y su geometría), capítulo 7 (validación cruzada y el atajo para LOOCV) y capítulo 4 (regresión logística y su algoritmo de Newton, IRLS). Bishop, capítulo 3 (sesgo-varianza) y capítulo 4. Trefethen & Bau, lección 11 (mínimos cuadrados por QR)."
exercises:
  - id: error-cuadratico-medio
    tier: 1
    prompt: |
      El modelo $\hat y = 2x + 1$ se evalúa sobre los datos $(0;\ 1{,}5)$, $(1;\ 2{,}5)$, $(2;\ 5{,}5)$, $(3;\ 6)$, $(4;\ 9{,}5)$. ¿Cuál es su error cuadrático medio (riesgo empírico con pérdida cuadrática)? Respuesta: un número.
    answers: ["sha256:f3e360d89952f40d3b79d0b07dd0b94f1cbf9017cba5d2a5f8128e4146d6e3c1"]
  - id: recta-de-minimos-cuadrados
    tier: 1
    prompt: |
      Ajusta por mínimos cuadrados $\hat y = w_0 + w_1x$ a los puntos $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 8)$. Respuesta: `w0;w1`.
    answers: ["sha256:6284e7f2c4bc6d6e47f46c30080dcd162169beff57f8cc774393896640d8e87b"]
  - id: cota-de-hoeffding
    tier: 1
    prompt: |
      Con una clase finita de $\lvert\mathcal H\rvert = 1000$ hipótesis, pérdida en $[0, 1]$ y $\delta = 0{,}05$: ¿qué desviación uniforme $\varepsilon = \sqrt{\ln(2\lvert\mathcal H\rvert/\delta)/(2n)}$ garantiza la cota con $n = 10\,000$, y qué $n$ mínimo hace falta para $\varepsilon \le 0{,}01$? Respuesta: `epsilon;n`, $\varepsilon$ con **5 decimales**.
    answers: ["sha256:69a1f9bbc2667bbe8d093c7f9ff9c32c56e2390b512d47e3276b1acce20a851e"]
  - id: metricas-de-clasificacion
    tier: 1
    prompt: |
      Un clasificador da 40 verdaderos positivos, 10 falsos positivos, 20 falsos negativos y 130 verdaderos negativos. ¿Cuánto valen su precisión, su exhaustividad (*recall*) y su F1? Respuesta: `precision;recall;f1`, las dos últimas con **4 decimales**.
    answers: ["sha256:41a95ec6fe85c433ce8425eeb0c691067fd66f713cf598bb98495d01d2732144"]
  - id: entropia-cruzada
    tier: 1
    prompt: |
      Un modelo predice $\Pr[y = 1] = 0{,}9;\ 0{,}2;\ 0{,}7$ para tres ejemplos cuyas etiquetas reales son $1, 0, 0$. ¿Cuál es la entropía cruzada media (log-loss, logaritmo natural)? Respuesta: con **4 decimales**.
    answers: ["sha256:34882335f33585b6420663fb90b82a733be31459fde9ca4cce0deb7dbdb6a7ef"]
  - id: regresion-ridge
    tier: 2
    prompt: |
      Con un solo coeficiente y sin término independiente, ridge minimiza $\sum(y_i - wx_i)^2 + \lambda w^2$. Para $x = (1, 2, 3)$, $y = (2, 3, 5)$ y $\lambda = 1$, ¿cuánto vale $\hat w$? Respuesta: con **4 decimales**.
    answers: ["sha256:11fff8dab0171ac7fa5cbeef6b95cb4d62b121e9de76497e44517666a57d60e7"]
  - id: validacion-cruzada-pequena
    tier: 2
    prompt: |
      Calcula el error de validación cruzada dejando uno fuera (LOOCV) de la recta de mínimos cuadrados sobre $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 8)$, $(4, 9)$. Respuesta: con **4 decimales**.
    answers: ["sha256:54f28d26f5dc98861e078b07f5ad8e45167c17fb99b39feabef7ada3a0e53b6d"]
  - id: sesgo-y-varianza
    tier: 2
    prompt: |
      Para estimar una media $\mu = 1$ con $n = 10$ datos de varianza $\sigma^2 = 4$ se usa el estimador encogido $0{,}8\,\bar y$. ¿Cuál es su error cuadrático medio, sesgo$^2$ + varianza? Respuesta: un número.
    answers: ["sha256:baf37560592d1eb9e2254b1081652bc2c342b729fadf82a025968268f91b8f2b"]
  - id: convergencia-del-gradiente
    tier: 2
    prompt: |
      Se minimiza $f(w) = \frac12(w_1^2 + 10w_2^2)$ por descenso de gradiente con $\eta = 1/L = 0{,}1$ desde $w = (1, 1)$. La coordenada lenta se multiplica por $0{,}9$ en cada paso. ¿Cuántas iteraciones hacen falta para que $\lvert w_1\rvert \le 10^{-6}$? Respuesta: un entero.
    answers: ["sha256:dbb1ded63bc70732626c5dfe6c7f50ced3d560e970f30b15335ac290358748f6"]
  - id: apalancamiento
    tier: 2
    prompt: |
      En la regresión lineal simple con $x = (1, 2, 3, 4, 10)$, ¿cuánto vale el apalancamiento $h_{ii}$ (diagonal de la matriz sombrero) del punto $x = 10$? Usa $h_{ii} = \frac1n + \frac{(x_i - \bar x)^2}{\sum(x_j - \bar x)^2}$. Respuesta: un número.
    answers: ["sha256:0f06ac7db8e6851dd14cc47c4a331528b73aa262bb3e762571551095d8b0ad4e"]
  - id: componentes-principales
    tier: 2
    prompt: |
      Unos datos de dos variables tienen matriz de covarianzas $\begin{pmatrix} 4 & 2 \\ 2 & 3 \end{pmatrix}$. ¿Qué fracción de la varianza total explica la primera componente principal? Respuesta: con **4 decimales**.
    answers: ["sha256:2b247686f82ced06f9d932d4061a2d7bc87c42b55e87c91e640ea7d660e48c70"]
  - id: k-medias
    tier: 2
    prompt: |
      Aplica k-medias (Lloyd) con $k = 2$ a los datos $1, 2, 3, 10, 11, 12$ partiendo de los centros $1$ y $2$, hasta converger. ¿Qué centros salen y cuánto vale la inercia (suma de distancias al cuadrado a su centro)? Respuesta: `c1;c2;inercia`.
    answers: ["sha256:db372c1fce136dfd78dbc9842e03e4be56e6b5fa3e6c1829d71790eea4dc2733"]
  - id: regresion-logistica
    tier: 3
    prompt: |
      Ajusta sin regularización $\Pr[c = 1 \mid u] = \sigma(\beta_0 + \beta_1u)$ a los datos $u = (-2, -1, 0, 1, 2, 3)$, $c = (0, 0, 1, 0, 1, 1)$ (no separables). ¿Cuánto vale $\beta_1$? Respuesta: con **4 decimales**.
    answers: ["sha256:f9c72cd5b57958977316368deb2bb160be63ac6cba5dcc4348a3fe18d2841af1"]
  - id: validacion-cruzada-de-ridge
    tier: 3
    prompt: |
      Con los datos $(0, 1)$, $(1, 3)$, $(2, 4)$, $(3, 8)$, $(4, 9)$, ajusta $\hat y = w_0 + w_1x$ por ridge con $\lambda = 1$ penalizando solo $w_1$. Calcula su error LOOCV (el atajo $e_i/(1 - h_{ii})$ vale para cualquier suavizador lineal). Respuesta: con **4 decimales**.
    answers: ["sha256:aa87a7d4f63a48029f2a9f3ad76077e65c67b4ab171328c8be5a09cf33a299fa"]
  - id: complejidad-muestral
    tier: 3
    prompt: |
      En el caso realizable con una clase finita, basta $n \ge \frac{\ln\lvert\mathcal H\rvert + \ln(1/\delta)}{\varepsilon}$ datos para que, con probabilidad $1 - \delta$, toda hipótesis consistente tenga error $\le \varepsilon$. ¿Cuántos datos hacen falta con $\lvert\mathcal H\rvert = 2^{20}$, $\varepsilon = 0{,}05$ y $\delta = 0{,}01$? Respuesta: un entero.
    answers: ["sha256:f1607c19a0f910ca1b8dce18843bc34e46a533c87e3524ea75798949f7a352d5"]
  - id: area-bajo-la-curva-roc
    tier: 3
    prompt: |
      Un clasificador da las puntuaciones $0{,}9;\ 0{,}8;\ 0{,}75;\ 0{,}6;\ 0{,}55;\ 0{,}4;\ 0{,}35;\ 0{,}2$ a ocho ejemplos cuyas etiquetas son $1, 1, 0, 1, 0, 1, 0, 0$. ¿Cuál es el área bajo su curva ROC? Respuesta: un número.
    answers: ["sha256:ac76cf567cb80e9d5065e3ddc112a84cc0c5207138f26ce1959eb4391872b33e"]
---

# Aprendizaje estadístico: riesgo, mínimos cuadrados, sesgo y varianza, validación, clasificación y no supervisado

Aprender es elegir, a partir de datos finitos, una función que funcione bien con datos que todavía no se han visto. La distancia entre esas dos
cosas, el error en los datos de entrenamiento y el error de verdad, es el objeto de este nodo. Todo lo que viene después en [[ia-redes-profundas]]
son variaciones sobre los mismos tres ingredientes: un **modelo**, una **función de pérdida** y un **método para minimizarla**, más una disciplina
para medir honestamente lo que se ha conseguido.

## Objetivos

Al terminar sabrás:

1. Plantear el aprendizaje como minimización del riesgo empírico y acotar la generalización de una clase finita.
2. Ajustar modelos lineales por mínimos cuadrados con QR, interpretar la matriz sombrero y el apalancamiento, y regularizar con ridge.
3. Descomponer el error en sesgo y varianza y elegir la complejidad con validación cruzada (y su atajo exacto).
4. Ajustar una regresión logística por Newton (IRLS) y evaluar clasificadores con precisión, exhaustividad, F1, log-loss y AUC.
5. Usar descenso de gradiente y conocer su velocidad de convergencia.
6. Reducir dimensión con componentes principales y agrupar con k-medias.

## Qué debes dominar antes

[[mat-algebra-lineal]] (proyecciones, QR, autovalores), [[mat-estadistica-inferencia]] (verosimilitud, estimadores, sesgo) y
[[mat-calculo-multivariable]] (gradiente, hessiana).

> [!question] Test de entrada
> 1. ¿Cuál es el gradiente de $\lVert y - Xw\rVert^2$ respecto a $w$?
> 2. ¿Qué es el sesgo de un estimador?
> 3. ¿Cuánto vale $\sigma(0)$ para $\sigma(z) = 1/(1 + e^{-z})$?
>
> Respuestas: $-2X^{\mathsf T}(y - Xw)$; la diferencia entre su esperanza y el valor verdadero; $\frac12$.

## 1. Para qué sirve

- **Predicción**: precios, demanda, consumo, tiempos de llegada; casi todo modelo predictivo en producción es un modelo lineal o un árbol bien validado.
- **Clasificación**: detección de fraude, filtrado de spam, diagnóstico asistido; aquí importan las métricas adecuadas, no solo la exactitud.
- **Ciencia de datos**: reducir dimensión (ACP), agrupar (k-medias), detectar datos influyentes (apalancamiento).
- **Fundamento de las redes neuronales**: la regresión logística es una neurona; la entropía cruzada y el descenso de gradiente son los mismos.
- **Seguridad**: detección de anomalías e intrusiones; también los ataques a modelos (envenenamiento, evasión) se entienden con estas herramientas.

## 2. El marco: minimización del riesgo empírico

Hay una distribución desconocida $\mathcal D$ sobre pares $(x, y)$ y una **pérdida** $\ell(\hat y, y)$. El **riesgo** de una hipótesis $h$ es
$R(h) = \mathbb E_{(x,y)\sim\mathcal D}\,\ell(h(x), y)$, y lo que se puede calcular es el **riesgo empírico** sobre una muestra de tamaño $n$,

$$
\hat R_n(h) = \frac1n\sum_{i=1}^n\ell(h(x_i), y_i).
$$

La **minimización del riesgo empírico** (ERM) elige $\hat h = \arg\min_{h\in\mathcal H}\hat R_n(h)$ dentro de una clase de hipótesis $\mathcal H$.

**Teorema (clase finita).** Si $\mathcal H$ es finita y $\ell \in [0, 1]$, con probabilidad al menos $1 - \delta$ se cumple, para toda $h \in \mathcal H$ a la vez,

$$
\lvert R(h) - \hat R_n(h)\rvert \le \sqrt{\frac{\ln(2\lvert\mathcal H\rvert/\delta)}{2n}} .
$$

*Demostración.* Para una $h$ fija, $\hat R_n(h)$ es una media de $n$ variables independientes en $[0, 1]$ con esperanza $R(h)$, y la desigualdad de Hoeffding da
$\Pr[\lvert R(h) - \hat R_n(h)\rvert > \varepsilon] \le 2e^{-2n\varepsilon^2}$. La cota de la unión sobre las $\lvert\mathcal H\rvert$ hipótesis multiplica por $\lvert\mathcal H\rvert$; se iguala a $\delta$ y
se despeja $\varepsilon$. $\blacksquare$

En el caso **realizable** (alguna $h$ tiene error nulo) la cota mejora: basta $n \ge \frac{\ln\lvert\mathcal H\rvert + \ln(1/\delta)}{\varepsilon}$ para que toda hipótesis consistente con
los datos tenga error $\le\varepsilon$ (Shalev-Shwartz y Ben-David). Dos lecciones: la generalización depende de la **capacidad** de la clase
($\ln\lvert\mathcal H\rvert$, o su dimensión de Vapnik-Chervonenkis en clases infinitas) frente a $n$; y ninguna cota se aplica a una $h$ elegida mirando los
datos de prueba. Por eso existen la validación y el conjunto de test separado.

## 3. Regresión lineal y máxima verosimilitud

Modelo $y = x^{\mathsf T}w + \varepsilon$ con $\varepsilon \sim \mathcal N(0, \sigma^2)$ independiente. Con la matriz de diseño $X \in \mathbb R^{n\times p}$ (una fila por dato), la
log-verosimilitud es $-\frac{1}{2\sigma^2}\lVert y - Xw\rVert^2 - \frac n2\log(2\pi\sigma^2)$, de modo que **maximizar la verosimilitud gaussiana equivale a minimizar el error
cuadrático**.

**Teorema.** Si $X$ tiene rango $p$, el minimizador es único y cumple las **ecuaciones normales** $X^{\mathsf T}X\,\hat w = X^{\mathsf T}y$.

*Demostración.* $\lVert y - Xw\rVert^2$ es una cuadrática con hessiana $2X^{\mathsf T}X \succ 0$; su gradiente $-2X^{\mathsf T}(y - Xw)$ se anula en un único punto. $\blacksquare$

Geométricamente, $X\hat w$ es la **proyección ortogonal** de $y$ sobre el espacio columna de $X$, y la matriz que proyecta es la **matriz sombrero**
$H = X(X^{\mathsf T}X)^{-1}X^{\mathsf T}$, con $\hat y = Hy$. Su diagonal $h_{ii}$, el **apalancamiento**, mide cuánto tira cada dato de su propia predicción; en la regresión
simple, $h_{ii} = \frac1n + \frac{(x_i - \bar x)^2}{\sum_j(x_j - \bar x)^2}$: un punto lejos del resto de las $x$ domina el ajuste.

**No hay que resolver las ecuaciones normales.** El número de condición de $X^{\mathsf T}X$ es el **cuadrado** del de $X$. Con una factorización $X = QR$ el problema se
reduce a $R\hat w = Q^{\mathsf T}y$, sin elevar nada al cuadrado, y además $H = QQ^{\mathsf T}$ (Trefethen y Bau, lección 11).

**Modelos no lineales en $x$, lineales en $w$.** Un polinomio de grado $d$ es una regresión lineal con las características $(1, x, x^2, \dots, x^d)$: la matriz
de diseño es de **Vandermonde**.

> [!example] Ejemplo resuelto 1: una recta a mano
> Datos $(1, 2)$, $(2, 2)$, $(3, 4)$, $(4, 4)$. Con $\bar x = 2{,}5$ y $\bar y = 3$: $S_{xy} = \sum(x - \bar x)(y - \bar y) = 1{,}5 + 0{,}5 + 0{,}5 + 1{,}5 = 4$ y $S_{xx} = 5$, así que
> $\hat w_1 = 0{,}8$ y $\hat w_0 = 3 - 0{,}8\cdot2{,}5 = 1$. Los residuos son $0{,}2;\ -0{,}6;\ 0{,}6;\ -0{,}2$, que suman cero (ortogonales a la columna de unos) y cuya suma
> ponderada por $x$ también es cero (ortogonales a la columna de $x$): eso es la proyección.

Valor de control: con los datos del apartado (a) del reto, la recta de mínimos cuadrados es $\hat y = -0{,}0904497 - 0{,}6503371\,x$.

## 4. Sesgo, varianza y regularización

Si $y = f(x) + \varepsilon$ con $\operatorname{Var}\varepsilon = \sigma^2$, y $\hat f$ se ajusta con una muestra aleatoria, en un punto fijo $x$:

**Teorema (descomposición sesgo-varianza).**

$$
\mathbb E\bigl[(y - \hat f(x))^2\bigr] = \sigma^2 + \bigl(f(x) - \mathbb E\hat f(x)\bigr)^2 + \operatorname{Var}\hat f(x) .
$$

*Demostración.* Se suma y se resta $\mathbb E\hat f(x)$; los términos cruzados se anulan porque $\varepsilon$ es independiente de $\hat f$ y tiene media cero, y porque
$\hat f - \mathbb E\hat f$ tiene media cero. $\blacksquare$

El ruido $\sigma^2$ es irreducible. Un modelo más flexible reduce el sesgo y aumenta la varianza; con pocos datos domina la varianza y el ajuste reproduce el
ruido: el **sobreajuste**. Un estimador sesgado puede ganar: encoger la media muestral, $c\,\bar y$ con $c < 1$, cambia varianza por sesgo y puede reducir el
error cuadrático medio.

**Ridge.** Minimizar $\lVert y - Xw\rVert^2 + \lambda\lVert w\rVert^2$ da $\hat w = (X^{\mathsf T}X + \lambda I)^{-1}X^{\mathsf T}y$: una matriz siempre invertible y coeficientes encogidos hacia cero. Es
la estimación MAP con una prior gaussiana sobre $w$; el término independiente no se suele penalizar. Con penalización $\lambda\lVert w\rVert_1$ (**lasso**), muchos
coeficientes se anulan exactamente: selección de variables.

## 5. Validación cruzada

Para elegir el grado $d$ o el $\lambda$ hace falta estimar el riesgo de cada modelo con datos que no se hayan usado para ajustarlo. La **validación cruzada
dejando uno fuera** (LOOCV) ajusta $n$ veces, cada una sin el punto $i$, y promedia el error en el punto excluido:
$\mathrm{CV} = \frac1n\sum_i(y_i - \hat f^{(-i)}(x_i))^2$. La de $k$ bloques ($k$-fold, típicamente $k = 5$ o $10$) hace lo mismo con bloques y es más barata.

**Teorema (atajo para mínimos cuadrados).** Con $h_{ii}$ la diagonal de la matriz sombrero del ajuste con todos los datos y $e_i = y_i - \hat y_i$ sus residuos,

$$
y_i - \hat f^{(-i)}(x_i) = \frac{e_i}{1 - h_{ii}} .
$$

*Demostración.* Quitar la fila $x_i$ cambia $X^{\mathsf T}X$ a $A - x_ix_i^{\mathsf T}$, con $A = X^{\mathsf T}X$. Por la fórmula de Sherman-Morrison,
$(A - x_ix_i^{\mathsf T})^{-1} = A^{-1} + \frac{A^{-1}x_ix_i^{\mathsf T}A^{-1}}{1 - h_{ii}}$, con $h_{ii} = x_i^{\mathsf T}A^{-1}x_i$. Multiplicando por $X^{\mathsf T}y - x_iy_i$ y simplificando,
$x_i^{\mathsf T}\hat w^{(-i)} = \frac{\hat y_i - h_{ii}y_i}{1 - h_{ii}}$, y restando de $y_i$ se obtiene el resultado. $\blacksquare$

Un único ajuste da los $n$ errores dejando uno fuera. El mismo atajo vale para ridge y, en general, para cualquier suavizador lineal $\hat y = Hy$. Valor de
control: con los datos del apartado (a), el error LOOCV de la recta ($d = 1$) es $0{,}941973231\ldots$

## 6. Clasificación: regresión logística y métricas

Para $y \in \{0, 1\}$ se modela $\Pr[y = 1 \mid x] = \sigma(x^{\mathsf T}\beta)$. La log-verosimilitud es
$\ell(\beta) = \sum_i[y_i\log p_i + (1 - y_i)\log(1 - p_i)]$ con $p_i = \sigma(x_i^{\mathsf T}\beta)$, y como $\sigma' = \sigma(1 - \sigma)$,

$$
\nabla\ell = X^{\mathsf T}(y - p), \qquad \nabla^2\ell = -X^{\mathsf T}WX, \qquad W = \operatorname{diag}\bigl(p_i(1 - p_i)\bigr).
$$

La hessiana es semidefinida negativa: $\ell$ es **cóncava** y todo máximo local es global. **Newton = IRLS**: $\beta \leftarrow \beta + (X^{\mathsf T}WX)^{-1}X^{\mathsf T}(y - p)$ resuelve en
cada paso un problema de mínimos cuadrados ponderados. **Advertencia**: si las clases son **separables**, el máximo no existe ($\lVert\beta\rVert \to \infty$) y Newton
diverge; por eso las bibliotecas regularizan por defecto. Antes de comparar con una, hay que saber qué problema resuelve.

**Métricas.** Con la matriz de confusión (VP, FP, FN, VN):

- **Precisión** $\frac{VP}{VP + FP}$ (de lo que digo positivo, cuánto lo es), **exhaustividad** $\frac{VP}{VP + FN}$ (de lo positivo, cuánto encuentro) y
  $F_1 = \frac{2PR}{P + R}$. Con clases desequilibradas, la exactitud engaña: un detector que siempre dice «no fraude» acierta el 99,9 %.
- **Log-loss** (entropía cruzada media): $-\frac1n\sum[y_i\log p_i + (1 - y_i)\log(1 - p_i)]$; castiga la confianza equivocada.
- **AUC**: el área bajo la curva ROC (tasa de verdaderos positivos frente a falsos positivos al mover el umbral). Es la probabilidad de que un positivo al azar
  reciba más puntuación que un negativo al azar (estadístico de Mann-Whitney), y no depende del umbral.

> [!example] Ejemplo resuelto 2: precisión frente a exhaustividad (con menos ayuda)
> Un filtro marca 30 correos como spam, de los cuales 24 lo son, y deja pasar 16 spams. Precisión $24/30 = 0{,}8$; exhaustividad $24/40 = 0{,}6$;
> $F_1 = 2\cdot0{,}8\cdot0{,}6/1{,}4 \approx 0{,}686$. Bajar el umbral sube la exhaustividad y baja la precisión: calcula tú qué pasa si al marcar 10 correos más
> se capturan 6 spams más.

## 7. Descenso de gradiente

Para minimizar una $f$ convexa y diferenciable cuyo gradiente es $L$-lipschitziano, se itera $w_{k+1} = w_k - \eta\nabla f(w_k)$.

**Teorema.** Con $\eta = 1/L$, $f(w_k) - f^* \le \frac{L\lVert w_0 - w^*\rVert^2}{2k}$.

Si $f$ es además $\mu$-fuertemente convexa, el error cae geométricamente con factor $1 - \mu/L$: el **número de condición** $L/\mu$ fija la velocidad, y una
cuadrática mal escalada avanza despacio en la dirección plana. Por eso se normalizan las variables antes de entrenar. Cada paso cuesta $O(np)$, frente
a $O(np^2 + p^3)$ de Newton; con millones de parámetros, el descenso de gradiente estocástico, que estima $\nabla f$ con unos pocos datos, es lo único viable.

## 8. Aprendizaje no supervisado: ACP y k-medias

**Análisis de componentes principales.** Con los datos centrados y su matriz de covarianzas $S$, las direcciones de máxima varianza son los
autovectores de $S$ ordenados por autovalor; la fracción de varianza que explica la componente $k$ es $\lambda_k/\sum_j\lambda_j$. Proyectar sobre las primeras
componentes es la mejor aproximación de rango bajo en norma de Frobenius (teorema de Eckart-Young, vía la SVD). Sirve para visualizar, comprimir y
eliminar ruido.

**k-medias.** Busca $k$ centros que minimicen la **inercia**, la suma de distancias al cuadrado de cada punto a su centro. El algoritmo de Lloyd alterna
asignar cada punto al centro más cercano y mover cada centro a la media de sus puntos; cada paso no aumenta la inercia, así que converge, pero a un
mínimo local que depende de la inicialización (por eso se reinicia varias veces o se usa k-medias++).

## 9. Comprobar con un programa

Los tres apartados del reto tienen un segundo método que no comparte código con el primero: mínimos cuadrados por QR frente a ecuaciones normales, el
atajo de LOOCV frente a $n$ reajustes, y Newton frente a ascenso de gradiente. El bloque los aplica a datos pequeños de este nodo.

```python
import math

def qr(X):
    """Gram-Schmidt modificado: X (n×p) = Q R."""
    n, p = len(X), len(X[0])
    Q = [fila[:] for fila in X]
    R = [[0.0] * p for _ in range(p)]
    for j in range(p):
        for k in range(j):
            R[k][j] = sum(Q[i][k] * Q[i][j] for i in range(n))
            for i in range(n):
                Q[i][j] -= R[k][j] * Q[i][k]
        R[j][j] = math.sqrt(sum(Q[i][j] ** 2 for i in range(n)))
        for i in range(n):
            Q[i][j] /= R[j][j]
    return Q, R

def minimos_cuadrados(X, y):
    Q, R = qr(X)
    p = len(R)
    qy = [sum(Q[i][j] * y[i] for i in range(len(y))) for j in range(p)]
    w = [0.0] * p
    for j in reversed(range(p)):
        w[j] = (qy[j] - sum(R[j][k] * w[k] for k in range(j + 1, p))) / R[j][j]
    return w, Q

# 1. Ejemplo resuelto 1 y el atajo de LOOCV frente a reajustar n veces.
x, y = [1, 2, 3, 4], [2, 2, 4, 4]
X = [[1.0, v] for v in x]
w, Q = minimos_cuadrados(X, y)
assert abs(w[0] - 1) < 1e-12 and abs(w[1] - 0.8) < 1e-12
atajo = 0.0
for i in range(len(x)):
    e = y[i] - (w[0] + w[1] * x[i])
    h = sum(q * q for q in Q[i])
    atajo += (e / (1 - h)) ** 2
bruto = 0.0
for i in range(len(x)):
    Xi = [X[k] for k in range(len(x)) if k != i]
    yi = [y[k] for k in range(len(x)) if k != i]
    wi, _ = minimos_cuadrados(Xi, yi)
    bruto += (y[i] - (wi[0] + wi[1] * x[i])) ** 2
assert abs(atajo - bruto) < 1e-12
print(f"LOOCV del ejemplo 1: {atajo / len(x):.6f}")

# 2. Regresión logística: Newton (IRLS) frente a ascenso de gradiente, sobre datos no separables.
u, c = [-2, -1, 0, 1, 2, 3], [0, 0, 1, 0, 1, 1]
sig = lambda z: 1 / (1 + math.exp(-z))
b0 = b1 = 0.0
for _ in range(50):
    p = [sig(b0 + b1 * ui) for ui in u]
    g0, g1 = sum(ci - pi for ci, pi in zip(c, p)), sum((ci - pi) * ui for ci, pi, ui in zip(c, p, u))
    h00 = sum(pi * (1 - pi) for pi in p)
    h01 = sum(pi * (1 - pi) * ui for pi, ui in zip(p, u))
    h11 = sum(pi * (1 - pi) * ui * ui for pi, ui in zip(p, u))
    det = h00 * h11 - h01 * h01
    b0, b1 = b0 + (h11 * g0 - h01 * g1) / det, b1 + (-h01 * g0 + h00 * g1) / det
a0 = a1 = 0.0
for _ in range(100_000):
    p = [sig(a0 + a1 * ui) for ui in u]
    a0 += 0.05 * sum(ci - pi for ci, pi in zip(c, p))
    a1 += 0.05 * sum((ci - pi) * ui for ci, pi, ui in zip(c, p, u))
assert abs(a1 - b1) < 1e-6

# 3. AUC: pares de Mann-Whitney frente a trapecios bajo la curva ROC.
s = [0.95, 0.85, 0.7, 0.65, 0.5, 0.3]
l = [1, 0, 1, 1, 0, 0]
pos = [si for si, li in zip(s, l) if li]
neg = [si for si, li in zip(s, l) if not li]
auc = sum((p > q) + 0.5 * (p == q) for p in pos for q in neg) / (len(pos) * len(neg))
tp = fp = 0
area = tpr0 = fpr0 = 0.0
for si, li in sorted(zip(s, l), reverse=True):
    tp, fp = tp + li, fp + (1 - li)
    tpr, fpr = tp / len(pos), fp / len(neg)
    area += (fpr - fpr0) * (tpr + tpr0) / 2
    tpr0, fpr0 = tpr, fpr
assert abs(area - auc) < 1e-12
```

## 10. Errores típicos

- Evaluar con los mismos datos con los que se ajustó (o elegir hiperparámetros mirando el test).
- Resolver las ecuaciones normales invirtiendo $X^{\mathsf T}X$ con datos mal condicionados (polinomios de grado alto).
- Confundir «máxima verosimilitud» con lo que hace una biblioteca que regulariza por defecto.
- Usar la exactitud con clases desequilibradas.
- Penalizar el término independiente en ridge, o no estandarizar las variables antes de regularizar o de usar descenso de gradiente.
- Ajustar la ACP o la normalización con todos los datos antes de separar el test (fuga de información).
- Fiarse de un único arranque de k-medias.

## 11. Resumen

- ERM; generalización $\sqrt{\ln(2\lvert\mathcal H\rvert/\delta)/(2n)}$; caso realizable $(\ln\lvert\mathcal H\rvert + \ln\frac1\delta)/\varepsilon$.
- Mínimos cuadrados = MV gaussiana; ecuaciones normales; proyección; $H = QQ^{\mathsf T}$; apalancamiento; QR antes que $X^{\mathsf T}X$.
- Sesgo$^2$ + varianza + ruido; ridge y lasso.
- LOOCV con el atajo $e_i/(1 - h_{ii})$; validación por bloques.
- Logística: cóncava, Newton = IRLS, cuidado con la separabilidad; precisión, exhaustividad, F1, log-loss, AUC.
- Descenso de gradiente $O(1/k)$, geométrico con factor $1 - \mu/L$; ACP; k-medias.

## Reto

**Datos de regresión.** Para $i = 0, 1, \dots, 40$:

$$
x_i = -1 + \frac{i}{20}, \qquad y_i = e^{x_i}\cos(3x_i) + \frac{(7i \bmod 13) - 6}{40} .
$$

**Datos de clasificación.** Para $i = 0, 1, \dots, 40$:

$$
u_i = i/10 - 2, \qquad c_i = \begin{cases} 1 & \text{si } \dfrac{29\,i \bmod 41}{41} < \sigma(2u_i - 1) \\[1mm] 0 & \text{en otro caso.} \end{cases}
$$

Deberías obtener 17 datos con $c_i = 1$, y las clases no son separables.

- **a.** Ajusta por mínimos cuadrados un polinomio de grado 3 a los datos de regresión y toma el **valor absoluto** del coeficiente de $x^3$.
- **b.** Para cada grado $d = 0, 1, \dots, 10$, calcula el error LOOCV del ajuste polinómico de grado $d$ por mínimos cuadrados. Da el grado $d^*$ con menor
  error y ese error $\mathrm{CV}(d^*)$.
- **c.** Ajusta por máxima verosimilitud, sin regularización, el modelo $\Pr[c = 1 \mid u] = \sigma(\beta_0 + \beta_1u)$ y da la pendiente $\beta_1$.

Formato de la flag: `EXODUS{a-d-cv-b}`, con $a = \lfloor 10^9\,\lvert w_3\rvert\rfloor$, $d = d^*$, $cv = \lfloor 10^9\cdot\mathrm{CV}(d^*)\rfloor$ y $b = \lfloor 10^9\,\beta_1\rfloor$.

## Repaso: lo que debe quedarte dentro de un mes

1. Lo que importa es el error con datos nuevos; el de entrenamiento siempre miente a favor.
2. Mínimos cuadrados es una proyección; se resuelve con QR.
3. Más flexibilidad, menos sesgo y más varianza: la validación cruzada decide.
4. La logística es cóncava y se ajusta con Newton, salvo que los datos sean separables.
5. Elige la métrica según el coste de cada error, no por costumbre.

## Siguiente

[[ia-redes-profundas]] sustituye el modelo lineal por composiciones de capas y el ajuste exacto por descenso de gradiente estocástico; en las
ramas, estadística bayesiana (`ia-bayesiana`), Python para datos y aprendizaje por refuerzo.
