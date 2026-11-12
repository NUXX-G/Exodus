---
id: mat-enteros-fracciones
title: "Enteros, fracciones y decimales"
area: matematicas
trunk_level: 1
prerequisites: [mat-numeros-naturales]
academic_sources:
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
  - "Hardy, G. H.; Wright, E. M. An Introduction to the Theory of Numbers, 6ª ed. (rev. Heath-Brown y Silverman). Oxford University Press, 2008."
  - "Euclides. Elementos, libro VII (proporciones entre números y mcd). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/bookVII/bookVII.html"
hints:
  - "Concepto: casi todo se reduce a trabajar con fracciones irreducibles y con el mcd. Un decimal es finito solo si el denominador irreducible no tiene más primos que 2 y 5; el periodo de 1/n es el menor k con 10^k ≡ 1 (mod n) cuando n es coprimo con 10."
  - "Herramienta: en Python, el módulo `fractions` (`Fraction(3, 4) + Fraction(5, 6)`) hace aritmética exacta y devuelve siempre la fracción irreducible; `pow(10, k, n)` calcula 10^k módulo n. Para comprobar un recuento, escribe el bucle más simple posible y compáralo con tu fórmula."
  - "Documentación oficial: docs.python.org/3/library/fractions.html (clase Fraction) y docs.python.org/3/library/functions.html#pow. Niven et al., capítulo 1 (divisibilidad) y los capítulos sobre fracciones de Farey y fracciones continuas (para hallar la fracción de menor denominador dentro de un intervalo)."
exercises:
  - id: enteros-signos
    tier: 1
    prompt: |
      Calcula $-7 - (-12) + 3 \times (-4)$. Respuesta: un número entero (con signo menos si es negativo).
    answers: ["sha256:a770d3270c9dcdedf12ed9fd70444f7c8a95c26cae3cae9bd867499090a2f14b"]
  - id: suma-fracciones
    tier: 1
    prompt: |
      Calcula $\dfrac{3}{4} + \dfrac{5}{6} - \dfrac{1}{3}$ y da el resultado como fracción irreducible «a/b».
    answers: ["sha256:ff060f43ada244fcedb7073528f9137c7a181b5ad54fffa2c749988cc3f423b2"]
  - id: division-fracciones
    tier: 1
    prompt: |
      Calcula $\dfrac{2}{3} \div \dfrac{4}{9}$ como fracción irreducible «a/b».
    answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
  - id: simplificar
    tier: 2
    prompt: |
      Simplifica $\dfrac{462}{1071}$ hasta la fracción irreducible «a/b». (Pista de método: ya conoces un algoritmo que da el mcd sin factorizar.)
    answers: ["sha256:c3b2c6a979d3ba926c7967c9ef61734714e001ac7d8b793bfa5e2cc1c5f5ebbc"]
  - id: comparar
    tier: 2
    prompt: |
      ¿Cuál es mayor, $\dfrac{7}{11}$ o $\dfrac{9}{14}$? Responde con la fracción mayor, escrita «a/b». Hazlo sin pasar a decimales: con productos cruzados.
    answers: ["sha256:d75ad8a3d75abddc564e54a5f4bcd6f6dd445284af6ac2fe7a8973c2937bdc5a"]
  - id: periodico-a-fraccion
    tier: 2
    prompt: |
      Expresa $0{,}58333\ldots$ (el $3$ se repite siempre) como fracción irreducible «a/b».
    answers: ["sha256:2d0ba250dbdb3e61c40f6500fcb6cd35f793a14e94bacab7197ab693092f3521"]
  - id: digito-2026
    tier: 2
    prompt: |
      En el desarrollo decimal de $\dfrac{1}{7}$, ¿qué cifra ocupa el lugar $2026$ después de la coma? Respuesta: una cifra.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: decimales-finitos
    tier: 2
    prompt: |
      ¿Para cuántos valores de $n$ con $1 \le n \le 100$ el número $\dfrac{1}{n}$ tiene un desarrollo decimal **finito**
      (termina)? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: periodo-97
    tier: 3
    prompt: |
      ¿Cuántas cifras tiene el periodo del desarrollo decimal de $\dfrac{1}{97}$? Respuesta: un entero.
    answers: ["sha256:7b1a278f5abe8e9da907fc9c29dfd432d60dc76e17b0fabab659d2a508bc65c4"]
  - id: telescopica
    tier: 3
    prompt: |
      Calcula $\dfrac{1}{1\cdot 2} + \dfrac{1}{2\cdot 3} + \dfrac{1}{3\cdot 4} + \cdots + \dfrac{1}{99\cdot 100}$ como fracción irreducible «a/b». (Pista: $\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$.)
    answers: ["sha256:adda290c53eda62a0d8f44a131302a84651364227fcc02f7ed70159e8fc5f6ba"]
  - id: irreducibles-50
    tier: 3
    prompt: |
      ¿Cuántas fracciones irreducibles $\dfrac{a}{b}$ cumplen $0 < \dfrac{a}{b} < 1$ con denominador $b \le 50$?
      Respuesta: un entero.
    answers: ["sha256:d15e7843961ed4bfa3e08a80b882c74670e9e9347ea55325cbc1be93c7f54edc"]
  - id: entre-dos-fracciones
    tier: 3
    prompt: |
      Entre $\dfrac{17}{39}$ y $\dfrac{18}{41}$ (estrictamente) hay infinitas fracciones. ¿Cuál es la de **menor denominador**?
      Respuesta como fracción «a/b».
    answers: ["sha256:248fbc03282617ae5b1700d532ce64429efb261fd51b29c9d0f3dc483157d8cb"]
  - id: grifos
    tier: 3
    prompt: |
      Un depósito se llena con un grifo en $6$ horas y con otro, solo, en $9$ horas. ¿Cuánto tarda en llenarse con los dos
      abiertos a la vez? Respuesta en horas, como fracción irreducible «a/b».
    answers: ["sha256:3f99d85316926a1a4c4574865f131f4c83105ccb7ef2f3ac73fe2e3033166d08"]
  - id: sueldo
    tier: 3
    prompt: |
      Ana gasta $\frac{1}{3}$ de su sueldo en el alquiler y $\frac{1}{4}$ **de lo que le queda** en comida. Después le sobran
      $600$ euros. ¿Cuál es su sueldo, en euros? Respuesta: un entero.
    answers: ["sha256:15197cf7214b58e67cae565e573ffd9aa44bcb81f8ee5d7185dfe8da0a16ef43"]
  - id: armonica
    tier: 3
    prompt: |
      Sea $x = \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \cdots + \dfrac{1}{10}$. Calcula $\lfloor 1000x \rfloor$ (la parte entera de
      $1000x$). Respuesta: un entero.
    answers: ["sha256:aef662afc24b5edde66ab972975340f6a9963eb766261e6bf43ffdb56b6d2a3f"]
  - id: menores-que-medio
    tier: 3
    prompt: |
      Considera los números racionales distintos que se pueden escribir como $\dfrac{a}{b}$ con $1 \le a < b \le 12$. ¿Cuántos
      de ellos son menores que $\dfrac{1}{2}$? Respuesta: un entero.
    answers: ["sha256:785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09"]
---

# Enteros, fracciones y decimales

Los naturales no bastan: no se puede restar $3 - 5$ ni repartir $1$ entre $3$. Este nodo amplía los números
en dos direcciones, hacia los negativos (**enteros**) y hacia los repartos (**fracciones** y **decimales**), y
fija las reglas con las que se calcula sin equivocarse. Es la base de todo el álgebra
y el idioma de cualquier medida: dinero, tiempo, dosis, escalas.

## Objetivos

Al terminar sabrás:

1. Operar con enteros y justificar la regla de los signos, sin memorizarla.
2. Definir una fracción, reconocer fracciones equivalentes y llegar siempre a la forma irreducible.
3. Sumar, restar, multiplicar, dividir y comparar fracciones, y saber por qué cada procedimiento es correcto.
4. Convertir fracciones en decimales y decimales (incluso periódicos) en fracciones, y predecir si el
   desarrollo termina y cuánto mide su periodo.
5. Resolver problemas de «partes de un todo» y de tareas conjuntas.

> [!question] Test de entrada
> 1. ¿Cuánto es $-3 + 8$? 2. ¿Es $\frac{2}{6}$ igual a $\frac{1}{3}$? 3. ¿Cuál es mayor, $0{,}7$ o $0{,}65$?
>
> Respuestas: $5$; sí; $0{,}7$. Si dudas en alguna, este nodo te da el porqué, no solo la regla.

## 1. Para qué sirve

- **Dinero y temperaturas**: saldos negativos, descubiertos, temperaturas bajo cero.
- **Cocina y construcción**: $\frac{3}{4}$ de taza, tablas de $\frac{5}{8}$ de pulgada.
- **Salud**: dosis por peso, concentraciones, porcentajes.
- **Mapas y planos**: escalas $1:25000$.
- **Informática**: los números decimales del ordenador no son exactos (se ve al final de este nodo):
  saber por qué evita errores graves, por ejemplo al programar dinero.

## 2. Los números enteros

Los **enteros** $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ añaden a los naturales sus **opuestos**: el opuesto
de $a$ es el número $-a$ con $a + (-a) = 0$. Se representan en una **recta** con el $0$ en el centro; sumar
$b$ es desplazarse $b$ unidades (a la derecha si $b > 0$, a la izquierda si $b < 0$). El **valor absoluto**
$|a|$ es la distancia al $0$: $|-5| = |5| = 5$. Un número es menor que otro si queda a su izquierda.

**Restar es sumar el opuesto**: $a - b = a + (-b)$. Por eso $7 - (-12) = 7 + 12 = 19$.

### Por qué «menos por menos es más»

No es una convención arbitraria: es **obligada** si queremos que se siga cumpliendo la propiedad
distributiva. Partimos de $0 = (-1)\cdot 0 = (-1)\bigl(1 + (-1)\bigr) = (-1)\cdot 1 + (-1)(-1) = -1 + (-1)(-1)$.
Luego $(-1)(-1)$ debe ser el número que sumado a $-1$ da $0$, es decir, $1$. En general:

$$
(+)(+) = +,\qquad (+)(-) = -,\qquad (-)(+) = -,\qquad (-)(-) = + .
$$

La división sigue los mismos signos. Cuidado con las potencias: $(-2)^3 = -8$, pero $-2^3 = -(2^3) = -8$ y
$(-2)^2 = 4$ mientras que $-2^2 = -4$. El paréntesis cambia el resultado.

**Ejemplo resuelto:** $5 - 2\cdot(-3) + (-4)^2 \div (-8)$.
Potencia: $(-4)^2 = 16$. Productos y cocientes de izquierda a derecha: $2\cdot(-3) = -6$, $16 \div (-8) = -2$.
Queda $5 - (-6) + (-2) = 5 + 6 - 2 = 9$.

## 3. Fracciones

Una **fracción** $\dfrac{a}{b}$ ($a$ entero, $b$ entero **distinto de cero**) es el número que, multiplicado por
$b$, da $a$. Tiene varias lecturas que conviene dominar:

- **parte de un todo**: $\frac{3}{4}$ son tres de las cuatro partes iguales de una unidad;
- **cociente**: $\frac{3}{4} = 3 \div 4$ (repartir $3$ entre $4$);
- **razón**: $3$ de cada $4$.

### Fracciones equivalentes y forma irreducible

Dos fracciones son **equivalentes** (representan el mismo número) si

$$
\frac{a}{b} = \frac{c}{d} \iff ad = bc .
$$

*Justificación.* Multiplicando ambos lados por $bd$ (distinto de cero) se obtiene $ad = bc$, y el paso es
reversible. En particular, **multiplicar o dividir numerador y denominador por un mismo número no nulo no
cambia la fracción**: $\frac{a}{b} = \frac{ka}{kb}$, porque $a(kb) = b(ka)$.

Una fracción es **irreducible** si $\operatorname{mcd}(a, b) = 1$. Toda fracción tiene una única forma
irreducible con denominador positivo, que se obtiene dividiendo numerador y denominador por su mcd
(ver [[mat-numeros-naturales]]). Es la forma en que se dan los resultados.

**Ejemplo resuelto:** $\dfrac{252}{198}$. Ya sabemos que $\operatorname{mcd}(252, 198) = 18$; luego
$\dfrac{252}{198} = \dfrac{14}{11}$.

### Comparar

Con denominadores positivos, $\dfrac{a}{b} < \dfrac{c}{d} \iff ad < bc$ (se multiplica ambos lados por $bd > 0$).
Es el método de los **productos cruzados**: $\frac{5}{8}$ frente a $\frac{3}{5}$: $5\cdot 5 = 25 > 3\cdot 8 = 24$, así que
$\frac{5}{8} > \frac{3}{5}$.

### Suma y resta

Para sumar hay que expresar los sumandos en **partes del mismo tamaño**, es decir, con el mismo denominador:

$$
\frac{a}{b} + \frac{c}{d} = \frac{ad}{bd} + \frac{cb}{bd} = \frac{ad + bc}{bd} .
$$

Para evitar números grandes se usa el **mínimo común múltiplo** de los denominadores:
$\frac{5}{12} + \frac{7}{18}$: $\operatorname{mcm}(12, 18) = 36$, luego $\frac{15}{36} + \frac{14}{36} = \frac{29}{36}$.

**Error más común:** $\frac{1}{2} + \frac{1}{3} \ne \frac{2}{5}$. Sumar numeradores y denominadores no tiene sentido
(mezcla «mitades» y «tercios»). La suma correcta es $\frac{5}{6}$.

### Producto y división

$$
\frac{a}{b}\cdot\frac{c}{d} = \frac{ac}{bd}, \qquad
\frac{a}{b} \div \frac{c}{d} = \frac{a}{b}\cdot\frac{d}{c}\quad (c \ne 0).
$$

El producto es «una fracción **de** una fracción»: $\frac{2}{3}$ de $\frac{3}{4}$ es $\frac{6}{12} = \frac{1}{2}$. Para la
división: $x = \frac{a}{b} \div \frac{c}{d}$ es el número que cumple $x\cdot\frac{c}{d} = \frac{a}{b}$; multiplicando ambos
lados por $\frac{d}{c}$ se obtiene $x = \frac{a}{b}\cdot\frac{d}{c}$. **Dividir entre una fracción es multiplicar por su
inversa.** Y, como es lógico, **no se divide entre una fracción de numerador cero**.

### Número mixto

$2\frac{3}{5}$ significa $2 + \frac{3}{5} = \frac{13}{5}$. Se usa para leer, no para operar: antes de calcular conviene
pasar a fracción impropia.

### Fracciones de lo que queda

Un tipo de problema frecuente: «gasta $\frac{1}{3}$ y después $\frac{1}{4}$ **de lo que le queda**». Hay que
ir **paso a paso**, actualizando el total. **Ejemplo resuelto:** un depósito de $60$ L pierde $\frac{1}{5}$ y luego
$\frac{1}{3}$ del resto. Tras la primera pérdida quedan $\frac{4}{5}\cdot 60 = 48$ L; después
$\frac{2}{3}\cdot 48 = 32$ L. Atajo: $60\cdot\frac{4}{5}\cdot\frac{2}{3} = 32$. *Cuidado*: **no** es
$60\bigl(1 - \frac{1}{5} - \frac{1}{3}\bigr) = 28$, porque el segundo $\frac{1}{3}$ es del resto, no del total.

### Tareas conjuntas

Si un grifo llena el depósito en $a$ horas, en una hora llena $\frac{1}{a}$ del depósito. Con dos grifos, en
una hora llenan $\frac{1}{a} + \frac{1}{b}$, y el tiempo total es el inverso. **Ejemplo resuelto:** dos obreros
tardan $4$ h y $12$ h por separado. Juntos hacen $\frac{1}{4} + \frac{1}{12} = \frac{4}{12} = \frac{1}{3}$ de
la obra por hora: tardan **$3$ horas**. (Menos que el más rápido, como debe ser: un resultado mayor de $4$
h delataría un error.)

## 4. Entre dos fracciones siempre hay otra

Para los naturales existe el «siguiente» de cada número; para las fracciones **no**. Si
$\frac{a}{b} < \frac{c}{d}$ (con $b, d > 0$), la **mediante** $\frac{a+c}{b+d}$ queda estrictamente en medio:

$$
(a + c)\,b - a\,(b + d) = cb - ad > 0, \qquad c\,(b + d) - (a + c)\,d = cb - ad > 0 .
$$

Repitiendo, entre dos fracciones hay **infinitas**. De aquí sale la idea de que los racionales llenan la
recta de forma «densa» (aunque no la llenan del todo: faltan números como $\sqrt{2}$, que se verán más
adelante). Una consecuencia práctica: para comparar dos fracciones muy próximas, los productos cruzados
son más fiables que los decimales redondeados.

## 5. Decimales

Un número decimal usa la notación posicional con **décimas, centésimas, milésimas**:
$3{,}14 = 3 + \frac{1}{10} + \frac{4}{100}$. Para pasar de fracción a decimal se **divide**: $\frac{3}{8} = 0{,}375$.

**Teorema (decimales finitos).** Sea $\frac{a}{b}$ irreducible ($b > 0$). Su desarrollo decimal **termina** si y solo
si $b = 2^m 5^n$ para ciertos $m, n \ge 0$.

*Demostración.* Si $b = 2^m 5^n$, multiplicamos numerador y denominador por $2^{n-m}$ o $5^{m-n}$ (el que
iguale los exponentes) y queda una fracción de denominador $10^{k}$, con $k = \max(m, n)$: un decimal con a lo
sumo $k$ cifras. Recíprocamente, si $\frac{a}{b} = \frac{N}{10^k}$ entonces $a\cdot 10^k = N b$; como $a$ y $b$ son
coprimos, $b$ divide a $10^k = 2^k 5^k$ y no puede tener otros primos. $\blacksquare$

Así, $\frac{1}{8} = 0{,}125$ y $\frac{7}{20} = 0{,}35$ terminan; $\frac{1}{3}$, $\frac{1}{6}$ y $\frac{1}{7}$ no.

**Teorema (periodicidad).** Si no termina, el desarrollo es **periódico**: a partir de cierta cifra se repite
un bloque indefinidamente.

*Demostración.* En la división larga de $a$ entre $b$ cada paso produce un resto entre $0$ y $b - 1$ y la
siguiente cifra depende **solo** de ese resto. Si algún resto fuera $0$, terminaría. Si no, tras como mucho
$b$ pasos un resto ya visto se repite, y desde ahí todo se repite. $\blacksquare$

La longitud del periodo de $\frac{1}{b}$, para $b$ coprimo con $10$, es el menor $k \ge 1$ con
$10^k \equiv 1 \pmod b$ (el **orden** de $10$ módulo $b$): $\frac{1}{7} = 0{,}\overline{142857}$ (periodo $6$),
$\frac{1}{11} = 0{,}\overline{09}$ (periodo $2$), $\frac{1}{13} = 0{,}\overline{076923}$ (periodo $6$). Esto permite
decir, sin dividir, la cifra que ocupa cualquier lugar: la cifra $n$-ésima de $\frac{1}{7}$ es la cifra
$(n - 1) \bmod 6 + 1$ del bloque $142857$.

### De decimal periódico a fracción

Si $x = 0{,}\overline{36}$: $100x = 36{,}\overline{36}$; restando, $99x = 36$, luego $x = \frac{36}{99} = \frac{4}{11}$.
Para un periodo de $k$ cifras se multiplica por $10^k$ y se resta. Con parte decimal no periódica, se
alinean los periodos antes de restar.

**Ejemplo resuelto: $x = 1{,}2\overline{45} = 1{,}2454545\ldots$.** Con $10x = 12{,}4545\ldots$ y
$1000x = 1245{,}4545\ldots$, resta: $990x = 1233$, así que $x = \frac{1233}{990} = \frac{137}{110}$ (dividiendo por
$9$). Comprobación: $137 \div 110 = 1{,}24545\ldots$ $\checkmark$

**¿Es $0{,}\overline{9}$ igual a $1$?** Sí. $x = 0{,}\overline{9}$ cumple $10x - x = 9$, luego $x = 1$. No es
un «casi uno»: son dos escrituras del mismo número, como $\frac{1}{2}$ y $\frac{2}{4}$.

### Aviso para programadores

En un ordenador los decimales se guardan en **binario**, y una fracción solo termina en base $2$ si su
denominador es potencia de $2$. Por eso $0{,}1$ (que es $\frac{1}{10}$) **no** se puede representar
exactamente:

```python
>>> 0.1 + 0.2
0.30000000000000004
>>> from fractions import Fraction
>>> Fraction(1, 10) + Fraction(2, 10)
Fraction(3, 10)
```

Para dinero se usan enteros (céntimos) o tipos decimales exactos; para cálculo exacto, racionales.

## 6. Errores típicos

- Sumar numeradores y denominadores: $\frac{1}{2} + \frac{1}{3} = \frac{2}{5}$ (**falso**).
- «Cancelar» sumandos: $\frac{2 + 3}{2 + 5} = \frac{3}{5}$ (**falso**); solo se simplifican **factores** comunes
  a todo el numerador y a todo el denominador.
- Olvidar que $-3^2 = -9$ pero $(-3)^2 = 9$.
- Comparar decimales por longitud: $0{,}7 > 0{,}65$ aunque $65 > 7$.
- Dar un resultado sin simplificar o con denominador negativo.
- No comprobar el orden de magnitud: dos grifos juntos no pueden tardar más que el más rápido solo.

## Repaso: lo que debe quedarte dentro de un mes

1. $(-)(-) = +$ porque lo exige la distributiva.
2. $\frac{a}{b} = \frac{c}{d} \iff ad = bc$; el resultado se da irreducible.
3. Suma con denominador común; dividir es multiplicar por el inverso; comparar con productos cruzados.
4. $\frac{a}{b}$ irreducible termina $\iff b = 2^m 5^n$; si no, es periódico.
5. Entre dos fracciones siempre hay otra: la mediante.

## Siguiente

El nodo de razones, proporciones y porcentajes usa estas fracciones para modelar situaciones reales, y el
de álgebra básica sustituye los números por letras.
