---
id: mat-proporcionalidad-porcentajes
title: "Proporcionalidad, porcentajes e interés"
area: matematicas
trunk_level: 2
prerequisites: [mat-enteros-fracciones]
academic_sources:
  - "Euclides. Elementos, libro V (teoría de la razón y la proporción, atribuida a Eudoxo). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/bookV/bookV.html"
  - "Kellison, S. G. The Theory of Interest, 3ª ed. McGraw-Hill/Irwin, 2009."
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991 (fracciones y razones como base aritmética)."
hints:
  - "Concepto: casi todos los problemas de porcentajes se resuelven con un único gesto, convertir cada porcentaje en un factor multiplicador (subir un 25 % es multiplicar por 1,25; bajar un 25 % es multiplicar por 0,75) y multiplicar los factores. Nunca sumes porcentajes sucesivos. En proporcionalidad compuesta, reduce a «una unidad» y vuelve a ampliar."
  - "Herramienta: en Python usa `fractions.Fraction` para trabajar sin errores de redondeo y `decimal.Decimal` para dinero; comprueba cada resultado con una segunda vía (por ejemplo, simular año a año el interés con un bucle y comparar con la fórmula)."
  - "Documentación oficial: docs.python.org/3/library/fractions.html y docs.python.org/3/library/decimal.html; Kellison, capítulos introductorios sobre la medida del interés (interés simple y compuesto) y la tasa efectiva; Euclides, Elementos V (definición V.5 de igualdad de razones)."
exercises:
  - id: fraccion-a-porcentaje
    tier: 1
    prompt: |
      Expresa $\dfrac{3}{5}$ como porcentaje. Respuesta: un número (sin el símbolo %).
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: porcentaje-de
    tier: 1
    prompt: |
      Calcula el $18\,\%$ de $250$. Respuesta: un número.
    answers: ["sha256:811786ad1ae74adfdd20dd0372abaaebc6246e343aebd01da0bfc4c02bf0106c"]
  - id: obreros
    tier: 1
    prompt: |
      Doce obreros terminan una obra en $15$ días. Con el mismo ritmo, ¿en cuántos días la terminarían $18$ obreros?
      Respuesta: un número de días.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: sube-y-baja
    tier: 2
    prompt: |
      Un artículo cuesta $80$ euros. Sube un $25\,\%$ y, después, baja un $25\,\%$. ¿Cuánto cuesta al final?
      Respuesta: euros, un número.
    answers: ["sha256:f369cb89fc627e668987007d121ed1eacdc01db9e28f8bb26f358b7d8c4f08ac"]
  - id: iva
    tier: 2
    prompt: |
      Un producto cuesta $193{,}60$ euros con un IVA del $21\,\%$ incluido. ¿Cuál es su precio **sin** IVA? Respuesta: euros,
      un número.
    answers: ["sha256:a512db2741cd20693e4b16f19891e72b9ff12cead72761fc5e92d2aaf34740c1"]
  - id: descuentos-sucesivos
    tier: 2
    prompt: |
      Una tienda aplica un descuento del $20\,\%$ y, sobre el precio ya rebajado, otro del $15\,\%$. ¿A qué **descuento único**
      equivale (en %)? Respuesta: un número sin el símbolo %.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: escala
    tier: 2
    prompt: |
      En un mapa a escala $1 : 25\,000$ dos pueblos están a $7{,}2$ cm. ¿Cuántos kilómetros los separan en la realidad?
      Respuesta: kilómetros, con un decimal.
    answers: ["sha256:a97b042d7bd59d92a46e8ab17f7dff7326067c74b938e6f6daabf1768932330d"]
  - id: mezcla
    tier: 2
    prompt: |
      Se mezclan $3$ litros de zumo con un $20\,\%$ de fruta y $2$ litros con un $45\,\%$. ¿Qué porcentaje de fruta tiene la
      mezcla? Respuesta: un número sin el símbolo %.
    answers: ["sha256:624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"]
  - id: velocidad-media
    tier: 2
    prompt: |
      Un coche va de A a B a $60$ km/h y vuelve de B a A, por el mismo camino, a $40$ km/h. ¿Cuál es su velocidad media en
      todo el trayecto? Respuesta: km/h, un número. (No es $50$: piensa en el tiempo empleado en cada tramo.)
    answers: ["sha256:98010bd9270f9b100b6214a21754fd33bdc8d41b2bc9f9dd16ff54d3c34ffd71"]
  - id: interes-compuesto
    tier: 3
    prompt: |
      Se depositan $1000$ euros al $4\,\%$ de interés compuesto anual (los intereses se suman al capital cada año).
      ¿Cuánto dinero hay al cabo de $10$ años? Respuesta: euros con dos decimales, **truncando** (sin redondear).
    answers: ["sha256:5e47249fc50ae9c12208e5dbd7e2b44a2b58c1d5fbeb4b5954c99d8e8785bd63"]
  - id: duplicar-capital
    tier: 3
    prompt: |
      Con un interés compuesto anual del $5\,\%$, ¿cuál es el menor número **entero** de años tras el cual el capital se ha
      duplicado, al menos? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: variaciones-encadenadas
    tier: 3
    prompt: |
      Un precio sube un $10\,\%$, luego un $20\,\%$ y por último baja un $5\,\%$. ¿Cuál es la variación total, en %?
      Respuesta: un número con un decimal, sin el símbolo %.
    answers: ["sha256:a86d4cb8b7e06cf8dd9c9732f1271275054e8d20780a2ba613861642cc3643af"]
  - id: proporcionalidad-compuesta
    tier: 3
    prompt: |
      Ocho máquinas, trabajando $6$ horas al día durante $15$ días, fabrican $4800$ piezas. ¿Cuántas piezas fabricarán
      $12$ máquinas trabajando $8$ horas al día durante $10$ días, al mismo ritmo? Respuesta: un entero.
    answers: ["sha256:a7dccef9ce1ae31c49a4cfc484f8411dd52b11c914c1fe3d781633642d1e1327"]
  - id: reparto-proporcional
    tier: 3
    prompt: |
      Tres socios aportan $5000$, $8000$ y $12000$ euros a un negocio y reparten un beneficio de $7500$ euros en proporción a
      lo aportado. ¿Cuánto recibe el que más aportó? Respuesta: euros, un número.
    answers: ["sha256:8b34042b7a96b3ba94b27ad723ca8f57787eefbab2083b3098173c444aefbfdf"]
  - id: mas-y-menos-3
    tier: 3
    prompt: |
      Una población crece un $3\,\%$ un año y decrece un $3\,\%$ al siguiente. ¿Cuál es la variación total, en %?
      Respuesta: un número con dos decimales, con signo menos si es negativa, sin el símbolo %.
    answers: ["sha256:eeb2c33fd8999602a089b882b888d5895abf29555ea6dec4dc8dc56f25c1ec74"]
  - id: tae
    tier: 3
    prompt: |
      Una cuenta paga un $1\,\%$ de interés **cada mes** (compuesto). ¿Qué porcentaje de interés equivale a un año completo?
      Respuesta: un número con cuatro decimales, **truncando**, sin el símbolo %.
    answers: ["sha256:c4c94b07ddf8b88aed2e65b6d2032d348fa53dc5f34157fb411ef380e24cfdee"]
---

# Proporcionalidad, porcentajes e interés

Casi todo lo que se hace con números en la vida real es una **comparación**: cuánto sube un precio, qué parte
de un sueldo se va en alquiler, cuántos obreros hacen falta, qué interés cobra un banco. Este nodo convierte
esa intuición en un método único y sin errores, y desmonta los fallos más caros: sumar porcentajes que no se
suman, o creer que «subir y bajar lo mismo» no cambia nada.

## Objetivos

Al terminar sabrás:

1. Distinguir magnitudes directa e inversamente proporcionales y resolver una regla de tres sin memorizar
   recetas.
2. Calcular porcentajes en las tres situaciones típicas (parte, total, tanto por ciento) y encadenar subidas
   y bajadas con factores.
3. Resolver repartos y mezclas proporcionales.
4. Calcular interés simple y compuesto, la tasa equivalente anual y el tiempo de duplicación.
5. Trabajar con escalas y saber cómo cambian longitudes, áreas y volúmenes.
6. Detectar los errores de razonamiento más frecuentes en noticias, ofertas y contratos.

> [!question] Test de entrada
> 1. Una camiseta de $40$ € baja un $10\,\%$: ¿cuánto cuesta? 2. Si $3$ kilos de manzanas cuestan $4{,}50$ €,
> ¿cuánto cuestan $5$ kilos? 3. ¿Cuánto es el $50\,\%$ del $50\,\%$ de $200$?
>
> Respuestas: $36$ €; $7{,}50$ €; $50$.

## 1. Para qué sirve

- **Compras y ofertas**: descuentos encadenados, IVA, comparar precio por unidad.
- **Dinero a largo plazo**: hipotecas, préstamos, tarjetas, ahorro; el interés compuesto decide quién gana.
- **Noticias y salario**: inflación, subidas del $2\,\%$ sobre el $3\,\%$, «puntos porcentuales».
- **Ciencia y salud**: dosis por peso, concentraciones, dilución, estadísticas de riesgo.
- **Ingeniería y cocina**: escalar una receta o un plano.

## 2. Razón y proporción

Una **razón** compara dos cantidades de la misma clase: $a : b = \dfrac{a}{b}$. Una **proporción** es la igualdad
de dos razones:

$$
\frac{a}{b} = \frac{c}{d} \iff ad = bc .
$$

Es la propiedad que vimos para las fracciones equivalentes (ver [[mat-enteros-fracciones]]): el producto
de los extremos ($a\,d$) iguala al de los medios ($b\,c$). La teoría de la proporción es antiquísima:
Eudoxo la formalizó en el siglo IV a. C. (Euclides, *Elementos* V).

### Magnitudes directamente proporcionales

Dos magnitudes son **directamente proporcionales** si su cociente es constante: $y = kx$, con $k$ la
**constante de proporcionalidad**. Si una se duplica, la otra se duplica; si se triplica, se triplica. En una
gráfica es una recta que pasa por el origen.

**Ejemplo:** el precio de las manzanas: $3$ kg cuestan $4{,}50$ €, luego $k = 1{,}50$ €/kg y $5$ kg cuestan
$5 \cdot 1{,}50 = 7{,}50$ €.

### Magnitudes inversamente proporcionales

Son **inversamente proporcionales** si su **producto** es constante: $xy = k$. Si una se duplica, la otra se
reduce a la mitad. Ejemplo: obreros y días para una misma obra, con el mismo ritmo.

**Cómo decidir cuál es cuál.** Pregúntate: «si duplico la primera, ¿se duplica o se reduce a la mitad la
segunda?». **Ojo**: no todo es proporcional. La edad de un niño y su altura crecen juntas pero no son
proporcionales; el precio de un taxi con bajada de bandera tampoco.

### La regla de tres como método

No hay que memorizar «cruzado» o «recto»: se reduce a la **unidad** y se vuelve a ampliar.

- **Directa.** $4$ cuadernos cuestan $10$ €. ¿Cuánto cuestan $7$? Un cuaderno cuesta $\frac{10}{4} = 2{,}5$ €;
  siete cuestan $7\cdot 2{,}5 = 17{,}5$ €.
- **Inversa.** $6$ obreros tardan $20$ días. ¿Cuánto tardan $8$? Con $1$ obrero harían falta $6\cdot 20 = 120$ días
  (el producto es constante); con $8$, $\frac{120}{8} = 15$ días.

### Proporcionalidad compuesta

Si intervienen más de dos magnitudes se razona por factores. **Ejemplo resuelto:** $5$ máquinas, $8$ horas al día
durante $12$ días producen $2400$ piezas. ¿Cuántas producen $7$ máquinas, $6$ horas al día, durante $10$ días?
La producción es proporcional a cada factor: $2400\cdot\dfrac{7}{5}\cdot\dfrac{6}{8}\cdot\dfrac{10}{12} =
2100$ piezas. Comprobación por la unidad: $\frac{2400}{5\cdot 8\cdot 12} = 5$ piezas por máquina-hora;
$7\cdot 6\cdot 10 = 420$ máquinas-hora; $420\cdot 5 = 2100$. $\checkmark$

### Reparto proporcional

Repartir una cantidad $T$ en proporción a $a_1, \dots, a_n$ da a cada uno $T\,\dfrac{a_i}{a_1 + \cdots + a_n}$.
**Ejemplo:** $900$ € entre quienes aportaron $2$, $3$ y $4$ partes: $900\cdot\frac{2}{9} = 200$, $300$, $400$ €.
Si el reparto es **inversamente** proporcional a $b_i$ se usa $\frac{1}{b_i}$ como peso.

## 3. Porcentajes

El **tanto por ciento** es una fracción de denominador $100$: $p\,\% = \dfrac{p}{100}$. Por tanto,
«el $18\,\%$ de $250$» es $\frac{18}{100}\cdot 250 = 45$, y $\frac{3}{5} = \frac{60}{100} = 60\,\%$.

Las tres preguntas típicas, con la misma relación $\text{parte} = \dfrac{p}{100}\cdot \text{total}$:

| Se pide | Se despeja | Ejemplo |
|---|---|---|
| la parte | $\text{parte} = \frac{p}{100}\cdot\text{total}$ | $15\,\%$ de $80$ es $12$ |
| el total | $\text{total} = \text{parte}\cdot\frac{100}{p}$ | $12$ es el $15\,\%$ de $80$ |
| el porcentaje | $p = 100\cdot\frac{\text{parte}}{\text{total}}$ | $12$ de $80$ es el $15\,\%$ |

**Atajo para propinas y estimaciones:** el $10\,\%$ se obtiene corriendo la coma; el $5\,\%$ es la mitad del
$10\,\%$; el $15\,\%$ es $10\,\% + 5\,\%$.

### Aumentos y disminuciones: el factor multiplicador

Subir un $p\,\%$ es multiplicar por $1 + \frac{p}{100}$; bajar un $p\,\%$, por $1 - \frac{p}{100}$:

$$
x \xrightarrow{+\,25\,\%} 1{,}25\,x, \qquad x \xrightarrow{-\,25\,\%} 0{,}75\,x .
$$

**Para volver al valor inicial se divide por el factor**, no se resta el porcentaje. **Ejemplo resuelto
(IVA):** un producto cuesta $121$ € con un IVA del $21\,\%$ incluido. El precio sin IVA $P$ cumple
$1{,}21\,P = 121$, luego $P = 100$ €. Error típico: restar el $21\,\%$ de $121$ (daría $95{,}59$).

### Porcentajes encadenados: se multiplican, no se suman

Una subida del $p\,\%$ seguida de otra del $q\,\%$ multiplica por $\bigl(1 + \frac{p}{100}\bigr)\bigl(1 + \frac{q}{100}\bigr)$.
Desarrollando:

$$
\Bigl(1 + \tfrac{p}{100}\Bigr)\Bigl(1 + \tfrac{q}{100}\Bigr) = 1 + \frac{p + q}{100} + \frac{pq}{10\,000} ,
$$

que **no** es $1 + \frac{p+q}{100}$ salvo que $pq = 0$: el término $\frac{pq}{10\,000}$ es el «efecto sobre lo ya
subido». **Consecuencias:**

- Subir un $10\,\%$ y luego un $20\,\%$ es subir un $32\,\%$, no un $30\,\%$.
- **Subir y bajar el mismo porcentaje no devuelve al inicio.** $(1 + r)(1 - r) = 1 - r^2 < 1$: tras subir un
  $20\,\%$ y bajar un $20\,\%$ se acaba un $4\,\%$ por debajo. Perder el $50\,\%$ exige ganar el $100\,\%$ para
  recuperarse.
- Dos descuentos del $20\,\%$ y del $30\,\%$ equivalen a $1 - 0{,}8\cdot 0{,}7 = 0{,}44$: un descuento del
  $44\,\%$, no del $50\,\%$.

### Puntos porcentuales frente a porcentaje

Si un tipo de interés pasa del $2\,\%$ al $3\,\%$, ha subido **un punto porcentual**, pero un
**$50\,\%$** en términos relativos. Un titular que mezcla las dos cosas puede alarmar o tranquilizar sin motivo.

### Mezclas y medias ponderadas

La concentración de una mezcla es la **media ponderada** por cantidades: $c = \dfrac{\sum c_i v_i}{\sum v_i}$. Al
mezclar $2$ L al $10\,\%$ con $3$ L al $20\,\%$ queda $\frac{0{,}2 + 0{,}6}{5} = 16\,\%$. Nunca se promedian los
porcentajes sin pesar: «$15\,\%$» no es la media de $10\,\%$ y $20\,\%$ si los volúmenes difieren.

## 4. La velocidad media: un caso donde el promedio engaña

Si se recorre el mismo camino de ida a $v_1$ y de vuelta a $v_2$, la velocidad media **no** es
$\frac{v_1 + v_2}{2}$. Con distancia $d$ cada tramo, la distancia total es $2d$ y el tiempo total
$\frac{d}{v_1} + \frac{d}{v_2}$, de modo que

$$
v_{\text{media}} = \frac{2d}{\dfrac{d}{v_1} + \dfrac{d}{v_2}} = \frac{2 v_1 v_2}{v_1 + v_2} \quad(\text{media armónica}).
$$

**Ejemplo:** $30$ km/h y $90$ km/h dan $\frac{2\cdot 30\cdot 90}{120} = 45$ km/h, no $60$. Se tarda más en
el tramo lento, y por eso pesa más. Regla general: **las velocidades se promedian con el tiempo, no con el
camino.**

## 5. Interés simple e interés compuesto

El **interés** es el precio del dinero a lo largo del tiempo. Con un capital inicial $C$ y una tasa $r$ por
periodo (por ejemplo $r = 0{,}04$ por año):

- **Simple**: los intereses se calculan siempre sobre el capital inicial, $C_n = C(1 + nr)$. Crece **linealmente**.
- **Compuesto**: los intereses se suman al capital y generan intereses, $C_n = C(1 + r)^n$. Crece
  **exponencialmente**.

*Justificación del compuesto.* Cada periodo multiplica el capital por $(1 + r)$; tras $n$ periodos se han
multiplicado $n$ factores iguales. $\blacksquare$

**Ejemplo resuelto:** $2000$ € al $3\,\%$ anual durante $5$ años. Simple: $2000(1 + 5\cdot 0{,}03) = 2300$ €.
Compuesto: $2000\cdot 1{,}03^5 = 2000\cdot 1{,}159274\ldots = 2318{,}54$ €. La diferencia ($18{,}54$ €) parece
pequeña, pero a $30$ años el compuesto da $2000\cdot 1{,}03^{30} \approx 4854$ € frente a $3800$ € el simple.

**Tasa equivalente (TAE).** Un $1\,\%$ mensual compuesto **no** equivale a un $12\,\%$ anual: equivale a
$(1{,}01)^{12} - 1 = 12{,}68\,\%$. En general, si se capitaliza $m$ veces al año con tasa $i$ por periodo, el
interés anual efectivo es $(1 + i)^m - 1$. Por eso se compara siempre con la **tasa anual equivalente**.

**Tiempo de duplicación.** Se busca $n$ con $(1 + r)^n = 2$. Con logaritmos (que se estudiarán más adelante),
$n = \ln 2 / \ln(1 + r)$. Como $\ln(1 + r) \approx r$ para $r$ pequeño y $\ln 2 \approx 0{,}693$, resulta la
**regla del $72$** (aproximada): $n \approx \dfrac{72}{r\,[\%]}$. Al $6\,\%$, unos $12$ años (el valor exacto es
$11{,}9$). Es una estimación mental, no una fórmula exacta.

**Inflación.** Con una inflación del $3\,\%$ anual el poder adquisitivo de un euro baja a
$\frac{1}{1{,}03^{10}} \approx 0{,}74$ al cabo de diez años: un euro guardado compra un $26\,\%$ menos.

```python
from fractions import Fraction

def capital_compuesto(capital, tasa, anios):
    """Capital tras `anios` años, exacto (sin errores de coma flotante)."""
    return capital * (1 + tasa) ** anios

c = capital_compuesto(Fraction(2000), Fraction(3, 100), 5)
print(float(c))            # 2318.5481...
print(int(c * 100) / 100)  # truncado a céntimos: 2318.54
```

**Aviso sobre las tarjetas de crédito y los préstamos rápidos:** una tasa del $2\,\%$ **mensual** parece pequeña,
pero equivale a $1{,}02^{12} - 1 = 26{,}8\,\%$ al año, y los intereses se aplican sobre una deuda que, si no se
paga, **crece de forma exponencial**. Lee siempre la TAE.

## 6. Escalas, unidades y cómo cambian las áreas

Una escala $1 : k$ significa que $1$ cm del plano son $k$ cm de la realidad. En un mapa a $1 : 25\,000$,
$7$ cm son $175\,000$ cm $= 1{,}75$ km. **Lo que casi todo el mundo olvida:** si todas las **longitudes** se
multiplican por $k$, las **áreas** se multiplican por $k^2$ y los **volúmenes** por $k^3$. *Prueba para un
rectángulo:* lados $a, b$ pasan a $ka, kb$ y el área $ab$ pasa a $k^2 ab$; para un prisma, por el mismo
razonamiento, $k^3$. Si una maqueta está a $1 : 100$, necesita $\frac{1}{10\,000}$ de pintura por cada pared y
pesa $\frac{1}{1\,000\,000}$ de lo que pesaría el edificio de materiales iguales.

Los **prefijos del Sistema Internacional** (kilo $10^3$, mega $10^6$, giga $10^9$; mili $10^{-3}$, micro
$10^{-6}$, nano $10^{-9}$) y el **análisis dimensional** (comprobar que las unidades del resultado son las
esperadas) son la segunda red de seguridad: $\text{km/h} = \frac{1000}{3600}\,\text{m/s}$, por tanto $36$ km/h
son $10$ m/s.

## 7. Errores típicos

- Sumar porcentajes sucesivos ($+10\,\%$ y $+20\,\%$ no es $+30\,\%$).
- Creer que subir y bajar lo mismo vuelve al inicio.
- Restar el porcentaje en lugar de dividir por el factor para recuperar el precio sin IVA.
- Promediar velocidades en lugar de tiempos; promediar porcentajes sin pesar.
- Confundir puntos porcentuales con porcentaje.
- Pasar de interés mensual a anual multiplicando por $12$ en lugar de componer.
- Aplicar proporcionalidad directa cuando es inversa (obreros y días) o cuando no hay proporcionalidad.
- Olvidar que áreas y volúmenes escalan con $k^2$ y $k^3$.

## Repaso: lo que debe quedarte dentro de un mes

1. Directa: $y = kx$. Inversa: $xy = k$. Se resuelve reduciendo a la unidad.
2. Subir/bajar $p\,\%$ es multiplicar por $1 \pm \frac{p}{100}$; se encadena multiplicando; se invierte dividiendo.
3. $(1 + r)(1 - r) = 1 - r^2$: subir y bajar lo mismo no devuelve al inicio.
4. $C_n = C(1 + r)^n$; la TAE de $m$ capitalizaciones es $(1 + i)^m - 1$.
5. Escala $k$: longitudes $\times k$, áreas $\times k^2$, volúmenes $\times k^3$.

## Siguiente

Con los números dominados, el nodo de álgebra básica sustituye las cantidades concretas por letras y estudia las
ecuaciones, y el de funciones básicas representa las relaciones de proporcionalidad y otras en gráficas.
