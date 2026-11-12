---
id: mat-funciones-basicas
title: "Funciones, gráficas y estadística descriptiva"
area: matematicas
trunk_level: 4
prerequisites: [mat-algebra-basica, mat-geometria-basica]
academic_sources:
  - "Gelfand, I. M.; Glagoleva, E. G.; Shnol, E. E. Functions and Graphs. Dover Publications, 2002."
  - "Freedman, D.; Pisani, R.; Purves, R. Statistics, 4ª ed. W. W. Norton, 2007."
  - "Charig, C. R.; Webb, D. R.; Payne, S. R.; Wickham, J. E. Comparison of treatment of renal calculi by open surgery, percutaneous nephrolithotomy, and extracorporeal shockwave lithotripsy. British Medical Journal, 292, 1986 (datos del ejemplo de la paradoja de Simpson)."
hints:
  - "Concepto: una función asigna a cada entrada una sola salida. La lineal añade lo mismo cada vez (pendiente constante); la exponencial multiplica por lo mismo cada vez. Para comparar situaciones, escribe cada una como función y busca dónde se cortan (resolver un sistema). En estadística, la media se deja arrastrar por los valores extremos y la mediana no."
  - "Herramienta: en Python, `statistics.mean`, `statistics.median`, `statistics.pstdev` (desviación típica poblacional) y `statistics.stdev` (muestral); para dibujar, `matplotlib.pyplot.plot`. Comprueba cada respuesta numérica con un barrido de valores, no solo con la fórmula."
  - "Documentación oficial: docs.python.org/3/library/statistics.html y matplotlib.org/stable/tutorials; Freedman, Pisani y Purves, capítulos de estadística descriptiva (media, desviación típica, histogramas) y de correlación."
exercises:
  - id: pendiente
    tier: 1
    prompt: |
      Calcula la pendiente de la recta que pasa por $(1, 3)$ y $(5, 11)$. Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: evaluar-funcion
    tier: 1
    prompt: |
      Sea $f(x) = 3x^2 - 2x + 1$. Calcula $f(-2)$. Respuesta: un número.
    answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
  - id: media
    tier: 1
    prompt: |
      Calcula la media de los datos $4,\ 8,\ 15,\ 16,\ 23,\ 42$. Respuesta: un número.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
  - id: recta-dos-puntos
    tier: 2
    prompt: |
      Halla la ecuación de la recta que pasa por $(2, 5)$ y $(6, 13)$ en la forma $y = mx + n$. Respuesta: la expresión de $y$, por ejemplo «3x-4».
    answers: ["sha256:8b78c05e92c50c3a0030bc9b5ba687bdae0eed81b4a1d973f727a9e8996d4a29", "sha256:02a574bdf4b89ae4d086af62fb955d405f14809abcf515d2e576e873489f485a", "sha256:04c0cd41aa25c2a5ba1cd774a50dc41090a64c9013a93e0724fc91926639e285", "sha256:80d0f9d66074aad7017278a4b51f8382721590225bcfd6f3c58120fa6a62f82c"]
  - id: interseccion-rectas
    tier: 2
    prompt: |
      ¿En qué punto se cortan las rectas $y = 2x + 3$ e $y = -x + 9$? Respuesta en la forma «x;y».
    answers: ["sha256:b02d52c90ad05f4ecd1b45485318789bda353f2975ae2cf879dc9a99228f2a85"]
  - id: mediana
    tier: 2
    prompt: |
      Calcula la mediana de $3,\ 9,\ 4,\ 12,\ 7,\ 5,\ 10,\ 8$. Respuesta: un número.
    answers: ["sha256:c4495da75095c64bf4e0587e45d7426f496ca4fc9fe72111715005361cfe0041"]
  - id: vertice
    tier: 2
    prompt: |
      Halla el vértice de la parábola $y = x^2 - 6x + 5$. Respuesta en la forma «x;y».
    answers: ["sha256:3431d68f996e170dc06832cca7d5e14ff61784b4a6ebed852deb0b0a59bb15cf"]
  - id: cortes-eje-x
    tier: 2
    prompt: |
      ¿Cuántos puntos de corte con el eje $x$ tiene la parábola $y = x^2 - 4x + 5$? Respuesta: $0$, $1$ o $2$.
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: tarifas
    tier: 2
    prompt: |
      La tarifa A cuesta $20$ € fijos más $0{,}05$ €/min. La tarifa B cuesta $0{,}15$ €/min sin cuota. ¿Cuál es el **menor número entero de
      minutos** al mes a partir del cual A es estrictamente más barata que B? Respuesta: un entero.
    answers: ["sha256:43974ed74066b207c30ffd0fed5146762e6c60745ac977004bc14507c7c42b50"]
  - id: bacterias
    tier: 2
    prompt: |
      Un cultivo empieza con $500$ bacterias, que se **duplican cada $3$ horas**. ¿Cuántas habrá tras $24$ horas? Respuesta: un entero.
    answers: ["sha256:8eda794b86cb709202a0023fd5273e3de6d24117b7e36b9bdb53c0238dac4785"]
  - id: dominio
    tier: 3
    prompt: |
      Sea $f(x) = \dfrac{\sqrt{x - 3}}{x - 5}$. ¿Cuántos números **enteros** $x$ con $0 \le x \le 20$ pertenecen al dominio de $f$?
      Respuesta: un entero.
    answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
  - id: desviacion-tipica
    tier: 3
    prompt: |
      Calcula la desviación típica poblacional ($\sigma = \sqrt{\frac{1}{n}\sum (x_i - \mu)^2}$) de los datos
      $2,\ 4,\ 4,\ 4,\ 5,\ 5,\ 7,\ 9$. Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: valor-absoluto
    tier: 3
    prompt: |
      ¿Cuántos números **enteros** $x$ cumplen $|x - 3| \le 4{,}5$? Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: punto-equilibrio
    tier: 3
    prompt: |
      Fabricar un producto cuesta $1200$ € fijos más $7$ € por unidad, y se vende a $12$ € la unidad. ¿Cuál es el **menor número entero de
      unidades** que hay que vender para obtener beneficio estrictamente positivo? Respuesta: un entero.
    answers: ["sha256:749fc650cacb0f06547520d53c31505c8156e0a3be07073eddb2ef3ad9e383ba"]
  - id: decaimiento
    tier: 3
    prompt: |
      Una sustancia pierde el $20\,\%$ de su cantidad cada hora. ¿Tras cuántas horas **enteras** queda menos del $10\,\%$ de la cantidad
      inicial? Respuesta: un entero (el menor posible).
    answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: media-global
    tier: 3
    prompt: |
      Una clase A de $6$ alumnos tiene nota media $7$ y una clase B de $4$ alumnos tiene nota media $8{,}5$. ¿Cuál es la nota media de
      los $10$ alumnos juntos? Respuesta: un número.
    answers: ["sha256:3bc77bf96558e8143dfbcb9517ea04028c72390646f4d6aa92dd883adb3e4666"]
---

# Funciones, gráficas y estadística descriptiva

Una **función** es la idea de que una cantidad **depende** de otra: el coste depende de los minutos, la altura de un
balón depende del tiempo, la población depende de los años. Dibujar esa dependencia en una gráfica convierte
una tabla opaca en algo que se **ve**. Este nodo enseña a leer, construir y comparar funciones, y añade la otra
mitad de «trabajar con datos»: resumirlos con números (estadística descriptiva) sin que te engañen.

## Objetivos

Al terminar sabrás:

1. Definir una función, su dominio y su recorrido, y evaluarla.
2. Dibujar y usar rectas: pendiente, ecuación, intersecciones y comparación de tarifas.
3. Reconocer parábolas: vértice, cortes con los ejes y máximos y mínimos.
4. Distinguir crecimiento lineal y exponencial, y modelar duplicaciones y decaimientos.
5. Calcular media, mediana, moda y desviación típica, y elegir la medida adecuada.
6. Detectar gráficos engañosos, sesgos y la paradoja de Simpson.

> [!question] Test de entrada
> 1. Si $y = 2x + 1$, ¿cuánto vale $y$ cuando $x = 3$? 2. ¿Cuál es la media de $2, 4, 9$? 3. ¿Qué crece más deprisa
> a la larga, sumar $10$ cada día o duplicar cada día?
>
> Respuestas: $7$; $5$; duplicar. (Lo comprobarás con números en este nodo.)

## 1. Para qué sirve

- **Decidir**: ¿qué tarifa, qué hipoteca, qué plan conviene? Cada opción es una función del tiempo o del consumo.
- **Predecir**: modelos de crecimiento de una epidemia, de una inversión, de una población.
- **Entender noticias y estudios**: gráficos, medias, «la mayoría», «el riesgo aumentó».
- **Base de todo lo posterior**: el cálculo, la física, la economía y el aprendizaje automático son estudio de
  funciones y de datos.

## 2. Qué es una función

Una **función** $f$ asigna a cada valor de entrada $x$ de un conjunto (el **dominio**) **un único** valor de salida
$f(x)$. Se escribe $y = f(x)$. El conjunto de salidas posibles es el **recorrido**.

La palabra clave es **único**: la misma entrada no puede dar dos salidas. La relación «$x$ es un número, $y$ es una
raíz cuadrada de $x$» (con $y = \pm\sqrt{x}$) **no** es función; $y = \sqrt{x}$ (solo la positiva) sí lo es. En una
gráfica, una curva es función si **toda recta vertical la corta como mucho una vez**.

Una función se puede dar de cuatro maneras equivalentes: con una **fórmula** ($f(x) = 3x - 2$), una **tabla**, una **gráfica**
o un **texto** («el coste es $5$ € por cada kilo»). Aprender a pasar de una a otra es la habilidad central.

**Dominio.** Si no se indica otra cosa, es el conjunto de $x$ para los que la fórmula tiene sentido. Dos restricciones
básicas: **no se divide entre cero** y **no se toma raíz cuadrada de un negativo** (en los reales). Por ejemplo,
$f(x) = \dfrac{\sqrt{x + 2}}{x - 1}$ exige $x + 2 \ge 0$ y $x \ne 1$: dominio $[-2, \infty)$ salvo el punto $1$.

**Evaluar** es sustituir: si $f(x) = x^2 - 3x$, entonces $f(4) = 16 - 12 = 4$ y $f(-1) = 1 + 3 = 4$.

## 3. La función lineal

Una función **lineal** es $y = mx + n$. Su gráfica es una **recta**.

- $m$ es la **pendiente**: cuánto sube $y$ por cada unidad que avanza $x$, $m = \dfrac{\Delta y}{\Delta x} = \dfrac{y_2 - y_1}{x_2 - x_1}$.
- $n$ es la **ordenada en el origen**: el valor de $y$ cuando $x = 0$ (donde la recta corta al eje vertical).

**¿Por qué la pendiente es la misma en cualquier tramo?** Porque los triángulos rectángulos que se forman al
subir y avanzar entre dos puntos cualesquiera de la recta son **semejantes** (ángulos iguales por paralelismo), y en
triángulos semejantes los cocientes de lados coinciden. Es el teorema de Tales del nodo de geometría.

**Interpretación.** La pendiente es una **tasa de cambio**: $5$ €/kg, $80$ km/h, $0{,}05$ €/min. Si $n = 0$ la función
es de **proporcionalidad directa** (el caso del nodo de proporcionalidad). Rectas con la **misma pendiente** son
paralelas; si los productos de pendientes valen $-1$ ($m_1 m_2 = -1$), son perpendiculares.

**Ecuación de la recta que pasa por dos puntos.** **Ejemplo resuelto:** por $(1, 4)$ y $(3, 10)$: pendiente
$m = \frac{10 - 4}{3 - 1} = 3$. Como pasa por $(1, 4)$: $4 = 3\cdot 1 + n$, luego $n = 1$ y $y = 3x + 1$.
Comprobación con el otro punto: $3\cdot 3 + 1 = 10$. $\checkmark$

**Comparar dos situaciones lineales = resolver un sistema.** Una tarifa cuesta $15 + 0{,}10\,m$ y otra $0{,}25\,m$ (euros,
$m$ minutos). Igualando, $15 + 0{,}10m = 0{,}25m$, $m = 100$. Con menos de $100$ minutos sale mejor la segunda, y con más,
la primera. **Punto de equilibrio** en un negocio: ingresos $=$ costes; a la derecha del corte hay beneficio.

## 4. La función cuadrática y la parábola

Una función **cuadrática** es $y = ax^2 + bx + c$ con $a \ne 0$. Su gráfica es una **parábola**: abre hacia arriba si
$a > 0$ (tiene un **mínimo**) y hacia abajo si $a < 0$ (tiene un **máximo**).

**Vértice.** Completando el cuadrado:

$$
ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a} .
$$

El cuadrado vale $\ge 0$ y es $0$ solo cuando $x = -\frac{b}{2a}$: ahí está el **vértice**, el punto extremo. **Ejemplo
resuelto:** $y = x^2 - 4x + 7$: $x_v = \frac{4}{2} = 2$, $y_v = 4 - 8 + 7 = 3$; el mínimo es $3$ y la parábola no corta al
eje $x$ (el mínimo es positivo).

**Cortes con el eje $x$.** Resolver $ax^2 + bx + c = 0$. Igualando a cero la expresión de arriba y despejando se obtiene

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} .
$$

El **discriminante** $\Delta = b^2 - 4ac$ decide: $\Delta > 0$, dos cortes; $\Delta = 0$, uno (el vértice); $\Delta < 0$, ninguno.

**Aplicación (optimizar).** Con $40$ m de valla se quiere cercar un rectángulo del área máxima. Si un lado mide $x$, el
otro mide $20 - x$ y el área es $A(x) = x(20 - x) = -x^2 + 20x$, con vértice en $x = 10$: **el cuadrado** ($10 \times 10$,
área $100$ m$^2$) es la mejor opción. **Tiro parabólico:** la altura de un balón es una cuadrática del tiempo
(en la física se verá por qué).

## 5. La función exponencial

Una función **exponencial** es $y = a\cdot b^x$ con $a > 0$ y $b > 0$, $b \ne 1$. Si $b > 1$ **crece**; si $0 < b < 1$ **decrece**.
La diferencia con la lineal es esencial:

| | Lineal | Exponencial |
|---|---|---|
| Cada paso de $x$ | **suma** una constante | **multiplica** por una constante |
| Tabla | $3, 5, 7, 9, \dots$ | $3, 6, 12, 24, \dots$ |
| A la larga | crece despacio | **supera a cualquier lineal** |

**Duplicación.** Si algo se duplica cada $T$ unidades de tiempo: $N(t) = N_0\cdot 2^{t/T}$. **Ejemplo resuelto:** $100$
bacterias que se duplican cada $2$ h: tras $10$ h hay $100\cdot 2^5 = 3200$. Tras $48$ h, $100\cdot 2^{24} \approx 1{,}7\cdot 10^9$.
**Decaimiento (semivida):** si una sustancia pierde la mitad cada $T$, $N(t) = N_0\cdot 2^{-t/T}$.

**Aviso sobre el crecimiento exponencial:** el nuestro es un cerebro «lineal»; subestimamos sistemáticamente lo
exponencial (epidemias, deudas con interés, memoria de un ordenador que se duplica...). Si el valor se duplica cada día,
tarda $30$ días en llegar a algo que ya a los $29$ era la mitad.

## 6. Leer una gráfica

Lo que hay que mirar, por este orden:

1. **Ejes y escalas**: qué magnitud y en qué unidades; si el eje vertical **empieza en cero**.
2. **Cortes con los ejes**: valor inicial ($x = 0$) y los ceros ($y = 0$).
3. **Crecimiento y decrecimiento**: dónde sube y dónde baja.
4. **Máximos y mínimos**: los puntos extremos.
5. **Tendencia** a largo plazo.

**Gráficos engañosos.** Un eje vertical **truncado** (que empieza en $98$ en lugar de en $0$) hace que una diferencia del
$1\,\%$ parezca enorme. Una escala distinta entre ejes puede disimular o exagerar una pendiente. Mira siempre los
números de los ejes.

## 7. Estadística descriptiva

La **estadística descriptiva** resume un conjunto de datos con pocos números. Con datos $x_1, \dots, x_n$:

- **Media** $\bar{x} = \dfrac{x_1 + \cdots + x_n}{n}$: el punto de equilibrio de los datos.
- **Mediana**: el valor central tras ordenar (la media de los dos centrales si $n$ es par). La mitad de los datos queda por
  debajo.
- **Moda**: el valor más frecuente.
- **Rango**: máximo menos mínimo.
- **Desviación típica** (poblacional) $\sigma = \sqrt{\dfrac{1}{n}\sum (x_i - \bar{x})^2}$: la distancia «típica» a la media. Su cuadrado,
  $\sigma^2$, es la **varianza**.

**Ejemplo resuelto:** datos $1, 3, 5, 7, 9$: media $5$, desviaciones $-4, -2, 0, 2, 4$, cuadrados $16, 4, 0, 4, 16$ (suma $40$),
varianza $8$, $\sigma = \sqrt{8} \approx 2{,}83$.

**Media o mediana.** La media se deja arrastrar por los valores extremos; la mediana no. En una empresa de cinco empleados
que ganan $1500, 1600, 1700, 1800$ y $12\,000$, la media es $3720$, pero **nadie** (salvo el jefe) gana eso; la mediana,
$1700$, describe mejor al empleado típico. Por eso los salarios, los precios de las casas y la riqueza se dan con **medianas**.

**Media ponderada.** Si cada dato tiene un peso $w_i$: $\bar{x} = \dfrac{\sum w_i x_i}{\sum w_i}$. Es lo que usa la nota final de un
curso (examen $60\,\%$, trabajos $40\,\%$) y la mezcla de concentraciones.

**Cuartiles y diagramas de caja.** Los cuartiles $Q_1$, mediana y $Q_3$ dividen los datos ordenados en cuatro partes; el
rango intercuartílico $Q_3 - Q_1$ mide la dispersión sin dejarse engañar por los extremos.

### Correlación no es causalidad

Dos magnitudes pueden crecer juntas sin que una cause la otra: las ventas de helados y los ahogamientos suben en verano
(la causa común es el calor). Para afirmar causalidad se necesitan **experimentos controlados**, no solo gráficas.

### La paradoja de Simpson

Un resultado puede **invertirse** al combinar grupos. En un estudio real sobre cálculos renales (Charig et al., 1986), la
cirugía abierta tuvo éxito en $273$ de $350$ pacientes ($78\,\%$) y la nefrolitotomía percutánea en $289$ de $350$
($83\,\%$): parece mejor la segunda. Pero **por tamaño del cálculo**:

| | cirugía abierta | percutánea |
|---|---|---|
| piedras pequeñas | $81/87 = 93\,\%$ | $234/270 = 87\,\%$ |
| piedras grandes | $192/263 = 73\,\%$ | $55/80 = 69\,\%$ |
| **total** | $273/350 = 78\,\%$ | $289/350 = 83\,\%$ |

La cirugía abierta es mejor en **cada** subgrupo, y peor en el total, porque se reservaba para los casos más difíciles (las
piedras grandes). La lección: **un dato agregado puede ocultar una variable de confusión**; hay que preguntar siempre cómo se
formaron los grupos.

## 8. Errores típicos

- Confundir **función** con «relación»: una entrada, **una** salida.
- Olvidar las restricciones del dominio (dividir entre cero, raíz de un negativo).
- Creer que el crecimiento exponencial «es solo un poco más rápido».
- Usar la media donde la mediana es lo apropiado (salarios, precios).
- Mezclar medias de grupos de distinto tamaño sin ponderar.
- Fiarse de un gráfico sin mirar los ejes.
- Concluir causalidad de una correlación.

## Repaso: lo que debe quedarte dentro de un mes

1. Función: a cada entrada, una salida; dominio y recorrido.
2. Recta: pendiente $=\frac{\Delta y}{\Delta x}$; dos rectas se cortan donde sus fórmulas son iguales.
3. Parábola: vértice en $x = -\frac{b}{2a}$; discriminante $b^2 - 4ac$.
4. Lineal suma, exponencial multiplica.
5. Media (sensible a extremos), mediana (robusta), desviación típica; la paradoja de Simpson.

## Siguiente

Con el troncal N0 de matemáticas hecho, el siguiente escalón es el álgebra de secundaria (polinomios, factorización,
logaritmos), la trigonometría y el razonamiento lógico.
