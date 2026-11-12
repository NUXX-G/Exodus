---
id: mat-algebra-basica
title: "Álgebra básica: letras, ecuaciones y sistemas"
area: matematicas
trunk_level: 0
prerequisites: [mat-enteros-fracciones]
academic_sources:
  - "Gelfand, I. M.; Shen, A. Algebra. Birkhäuser, 1993."
  - "Euclides. Elementos, libro II, proposición 4 (el cuadrado de una suma, en forma geométrica). Edición de Heath; texto en línea: claymath.org/library/historical/euclid/files/elem.2.4.html"
  - "Pólya, G. How to Solve It. Princeton University Press, 1945 (traducir un problema a ecuaciones)."
hints:
  - "Concepto: una ecuación es una balanza; cualquier operación que hagas a un lado debes hacerla al otro y la solución no cambia, salvo que multipliques por cero. Para los problemas, define primero qué letra representa qué, traduce frase a frase y comprueba el resultado en el enunciado, no solo en la ecuación."
  - "Herramienta: `sympy` resuelve y simplifica simbólicamente (`from sympy import symbols, Eq, solve; x = symbols('x'); solve(Eq(5*x - 7, 3*x + 9), x)`), y sirve como segunda vía para comprobar tu álgebra a mano; también sustituir los valores hallados en el enunciado original."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/solvers.html (resolver ecuaciones) y docs.sympy.org/latest/tutorials/intro-tutorial/simplification.html; Gelfand y Shen, capítulos sobre ecuaciones lineales y sistemas."
exercises:
  - id: reducir-expresion
    tier: 1
    prompt: |
      Simplifica $3(2x - 4) - 2(x - 5)$ hasta la forma $ax + b$. Respuesta: escribe la expresión, por ejemplo «5x+3».
    answers: ["sha256:589f53afed7bad14538676b86b6714076191e978bc81c2d67803671eba1d4a48", "sha256:2c97bd63ecb8e62d9561a04e6fb4d6136e327b57c3731f9abf016975c70c6ff2"]
  - id: ecuacion-lineal
    tier: 1
    prompt: |
      Resuelve $5x - 7 = 3x + 9$. Respuesta: el valor de $x$.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: diferencia-cuadrados-expr
    tier: 1
    prompt: |
      Desarrolla y simplifica $(x + 4)^2 - (x - 4)^2$. Respuesta: una expresión de la forma «kx», con $k$ entero.
    answers: ["sha256:97d3b806d6b0cd6a8455fe9885ccd1594efdeceb52b3badc48bc1d97176192d9", "sha256:c119fe732bd6593aa4b8a078eedf88ea97ddbfc3e0471c75cb3c81c8f7d66df6"]
  - id: ecuacion-con-fracciones
    tier: 2
    prompt: |
      Resuelve $\dfrac{2x - 1}{3} + \dfrac{x + 2}{4} = \dfrac{5}{2}$. Respuesta: $x$ como fracción irreducible «a/b».
    answers: ["sha256:af654e40f03223887d1add4419d191094c0a405b5bb2ab425b88f4d78ce2758f"]
  - id: despejar-formula
    tier: 2
    prompt: |
      La conversión de grados Celsius a Fahrenheit es $F = \dfrac{9}{5}C + 32$. Una temperatura corporal es de $98{,}6\,^\circ$F.
      ¿Cuántos grados Celsius son? Respuesta: un número.
    answers: ["sha256:7a61b53701befdae0eeeffaecc73f14e20b537bb0f8b91ad7c2936dc63562b25"]
  - id: tres-consecutivos
    tier: 2
    prompt: |
      La suma de tres números enteros consecutivos es $1203$. ¿Cuál es el mayor? Respuesta: un entero.
    answers: ["sha256:b7c7470e59e2a2df1bfd0a4705488ee6fe0c5c125de15cccdfab0e00d6c03dc0"]
  - id: sistema-2x2
    tier: 2
    prompt: |
      Resuelve el sistema $\begin{cases} 3x + 2y = 16 \\ x - y = 2 \end{cases}$. Respuesta en la forma «x;y».
    answers: ["sha256:72cf353cd903f805b7dbcb12dd8a4f02e164ac55033c5d28bedbffc119ff8c24"]
  - id: sistema-incompatible
    tier: 2
    prompt: |
      ¿Cuántas soluciones tiene el sistema $\begin{cases} 2x + 3y = 7 \\ 4x + 6y = 15 \end{cases}$? Responde «0», «1» o «infinitas».
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: trenes
    tier: 2
    prompt: |
      Dos trenes parten a la vez de dos estaciones separadas $300$ km y van uno hacia el otro, a $80$ km/h y $70$ km/h. ¿Cuántas horas
      tardan en cruzarse? Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: edades
    tier: 2
    prompt: |
      Hace $5$ años la edad de un padre era el triple de la de su hijo. Dentro de $5$ años será el doble. ¿Qué edad tiene
      ahora el hijo? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: inecuacion-doble
    tier: 3
    prompt: |
      ¿Cuántos números **enteros** $x$ cumplen $-3 < \dfrac{5 - 2x}{3} \le 4$? Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: identidad-notable
    tier: 3
    prompt: |
      Si $a + b = 10$ y $ab = 21$, calcula $a^2 + b^2$ **sin** hallar $a$ y $b$. Respuesta: un entero.
    answers: ["sha256:6208ef0f7750c111548cf90b6ea1d0d0a66f6bff40dbef07cb45ec436263c7d6"]
  - id: cuadrados-2026
    tier: 3
    prompt: |
      Calcula $2026^2 - 2025^2$ sin usar calculadora, con un truco algebraico. Respuesta: un entero.
    answers: ["sha256:880c2fc00805b3104264d490baf0090788b267e456c6d9f50aeca7e330b427b0"]
  - id: parametro
    tier: 3
    prompt: |
      ¿Para qué valor de $k$ tiene el sistema $\begin{cases} kx + 2y = 4 \\ 3x + 6y = 12 \end{cases}$ **infinitas** soluciones?
      Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: dilucion
    tier: 3
    prompt: |
      Se tienen $30$ litros de una disolución al $40\,\%$ de alcohol. ¿Cuántos litros de agua hay que añadir para que
      quede al $25\,\%$? Respuesta: litros, un número.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
  - id: dos-cifras
    tier: 3
    prompt: |
      Un número de dos cifras es igual a $4$ veces la suma de sus cifras, y al intercambiar las cifras el número aumenta en $18$.
      ¿Cuál es el número? Respuesta: dos cifras.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
---

# Álgebra básica: letras, ecuaciones y sistemas

El álgebra es la aritmética **con letras**: en lugar de calcular con un número concreto, se razona con uno
cualquiera, y lo que se demuestra vale para todos a la vez. Esa idea, simple, es la herramienta con la que se
escriben las fórmulas de la física, las hojas de cálculo, los programas y casi todo el resto de las
matemáticas. Este nodo enseña a **manejar** expresiones, a **resolver** ecuaciones y a **traducir** problemas
reales al lenguaje algebraico.

## Objetivos

Al terminar sabrás:

1. Traducir frases a expresiones y ecuaciones, y viceversa.
2. Simplificar expresiones con las propiedades de las operaciones, y usar las identidades notables.
3. Resolver ecuaciones de primer grado (con fracciones y paréntesis) y despejar fórmulas.
4. Plantear y resolver problemas (edades, móviles, mezclas, cifras, repartos).
5. Resolver sistemas de dos ecuaciones con dos incógnitas por tres métodos y reconocer cuándo no tienen
   solución o tienen infinitas.
6. Resolver inecuaciones lineales sin cometer el error del cambio de sentido.

> [!question] Test de entrada
> 1. ¿Cuánto vale $2x + 3$ si $x = 4$? 2. Simplifica $3a + 2a$. 3. Si $x + 5 = 12$, ¿cuánto vale $x$?
>
> Respuestas: $11$; $5a$; $7$.

## 1. Para qué sirve

- **Fórmulas**: $F = \frac{9}{5}C + 32$, $\text{distancia} = \text{velocidad}\cdot\text{tiempo}$, el área de un círculo.
- **Programar y hojas de cálculo**: toda variable de un programa es una letra del álgebra.
- **Decidir con números**: ¿qué tarifa de móvil conviene?, ¿cuántas unidades hay que vender para
  cubrir costes?, ¿cuánto tiempo falta para alcanzar a otro tren?
- **Ciencia e ingeniería**: nada se calcula sin despejar una incógnita.

## 2. Expresiones algebraicas

Una **variable** es una letra que representa un número cualquiera. Una **expresión algebraica** combina
números y variables con las operaciones: $3x + 5$, $\frac{a + b}{2}$, $x^2 - 4x$. El **valor numérico** se obtiene
sustituyendo: $3x + 5$ para $x = 4$ vale $17$.

### Traducir del español al álgebra

| Frase | Expresión |
|---|---|
| un número aumentado en $7$ | $x + 7$ |
| el triple de un número, menos $2$ | $3x - 2$ |
| la mitad de la suma de dos números | $\dfrac{a + b}{2}$ |
| tres enteros consecutivos | $n,\ n+1,\ n+2$ |
| un número de dos cifras (decenas $a$, unidades $b$) | $10a + b$ |
| el $15\,\%$ de $x$ | $0{,}15\,x$ |
| $A$ es $5$ más que $B$ | $A = B + 5$ |

Es la parte más difícil y la más importante: un error de traducción no lo corrige ningún cálculo posterior.

### Las reglas son las de siempre

Las propiedades de los números (conmutativa, asociativa y, sobre todo, **distributiva**) siguen valiendo con
letras:

$$
a(b + c) = ab + ac, \qquad -(a - b) = -a + b .
$$

Un **término** es un sumando; dos términos son **semejantes** si tienen las mismas letras con los mismos
exponentes ($5x^2$ y $-3x^2$ lo son; $5x^2$ y $5x$ no). Solo se suman y restan términos semejantes.

**Ejemplo resuelto:** $2(3x + 1) - (x - 4) = 6x + 2 - x + 4 = 5x + 6$. Fíjate en que el signo menos delante del
paréntesis cambia **todos** los signos de dentro.

**Factor común** es la distributiva leída al revés: $6x + 9 = 3(2x + 3)$.

**Potencias.** $x\cdot x = x^2$, $x^2\cdot x^3 = x^5$, $(xy)^2 = x^2y^2$, pero $(x + y)^2 \ne x^2 + y^2$: este es el
error más frecuente del álgebra, y la siguiente sección lo corrige.

## 3. Identidades notables

Una **identidad** es una igualdad que se cumple para **todos** los valores de las letras. Tres son tan útiles
que conviene saberlas de memoria:

$$
(a + b)^2 = a^2 + 2ab + b^2,\qquad (a - b)^2 = a^2 - 2ab + b^2,\qquad (a + b)(a - b) = a^2 - b^2 .
$$

*Demostración algebraica.* $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$, y la tercera:
$(a + b)(a - b) = a^2 - ab + ba - b^2 = a^2 - b^2$.
*Demostración geométrica* (ya la conocía Euclides, *Elementos* II.4): un cuadrado de lado $a + b$ se parte en un
cuadrado de área $a^2$, otro de área $b^2$ y dos rectángulos de área $ab$ cada uno. $\blacksquare$

**Para qué sirven en la práctica:**

- Cálculo mental: $99^2 = (100 - 1)^2 = 10\,000 - 200 + 1 = 9801$; $51\cdot 49 = (50 + 1)(50 - 1) = 2500 - 1 = 2499$.
- Simplificar: $(x + 3)^2 - 9 = x^2 + 6x$.
- Más adelante, para resolver ecuaciones de segundo grado y en el cálculo de límites.

Comprueba siempre una identidad **sustituyendo un número**: $(x + 3)^2$ con $x = 1$ da $16$ y $x^2 + 6x + 9 = 16$.

## 4. Ecuaciones de primer grado

Una **ecuación** es una igualdad que se cumple solo para ciertos valores de la incógnita. Resolverla es
encontrarlos. La imagen clave es una **balanza en equilibrio**: lo que se haga a un platillo se hace al otro.

**Principio de equivalencia.** Sumar o restar la misma cantidad a los dos lados, o multiplicar o dividir
ambos por un número **distinto de cero**, da una ecuación con las mismas soluciones. (Multiplicar por cero
destruye la información: de $x = 3$ se obtiene $0 = 0$, que se cumple siempre.)

**Ejemplo resuelto:** $4(x - 2) = 2x + 6$.

$$
4x - 8 = 2x + 6 \;\Rightarrow\; 2x = 14 \;\Rightarrow\; x = 7 .
$$

**Comprobación (siempre):** $4(7 - 2) = 20$ y $2\cdot 7 + 6 = 20$. $\checkmark$

**Con fracciones:** se multiplica por el mcm de los denominadores. $\dfrac{x}{2} + \dfrac{x}{3} = 10$:
multiplicando por $6$, $3x + 2x = 60$, luego $x = 12$.

### Cuántas soluciones puede tener

- **Una** (lo habitual): $2x + 1 = 7$.
- **Ninguna**: $2(x + 1) = 2x + 5$ lleva a $2 = 5$, imposible: la ecuación es **incompatible**.
- **Infinitas**: $3(x + 2) = 3x + 6$ lleva a $6 = 6$: es una identidad, se cumple para todo $x$.

### Despejar una fórmula

Es resolver una ecuación en la que otras letras hacen de números. De $v = \frac{d}{t}$ se obtiene $t = \frac{d}{v}$.
De $A = \frac{b\,h}{2}$, $h = \frac{2A}{b}$. De $F = \frac{9}{5}C + 32$: $C = \frac{5}{9}(F - 32)$. Se aplican los mismos
pasos, en orden inverso al de las operaciones.

## 5. Plantear y resolver problemas

Pólya (1945) propone cuatro fases; en problemas de álgebra se concretan así:

1. **Entender**: ¿qué se pide? ¿qué datos hay? ¿en qué unidades?
2. **Plan**: elegir la incógnita (una letra con significado claro, «sea $x$ la edad del hijo») y traducir cada frase.
3. **Resolver** la ecuación.
4. **Comprobar en el enunciado**: ¿el resultado tiene sentido (no hay edades negativas)? ¿cumple todas las condiciones?

**Ejemplo resuelto.** *Un rectángulo mide $5$ m más de largo que de ancho y su perímetro es $50$ m.* Sea $w$ el ancho;
el largo es $w + 5$. Perímetro: $2\bigl(w + (w + 5)\bigr) = 50$, es decir $2w + 5 = 25$, $w = 10$. Mide $10 \times 15$.
Comprobación: $2(10 + 15) = 50$. $\checkmark$

**Esquemas típicos:**

- **Movimiento**: $d = v\,t$. Si dos móviles se acercan, las velocidades se **suman**; si uno alcanza a otro, se
  **restan**.
- **Mezclas**: la cantidad de sustancia pura se conserva: $\text{volumen}\cdot\text{concentración}$ antes $=$ después.
- **Edades**: la diferencia de edades no cambia con el tiempo; todos suman lo mismo cada año.
- **Cifras**: un número de dos cifras es $10a + b$ y, al invertirlo, $10b + a$.

## 6. Sistemas de dos ecuaciones con dos incógnitas

Un **sistema** es un conjunto de ecuaciones que deben cumplirse a la vez, por ejemplo
$\begin{cases} x + y = 10 \\ x - y = 4 \end{cases}$. Hay tres métodos, equivalentes entre sí:

**Reducción** (sumar o restar las ecuaciones para eliminar una incógnita): sumando, $2x = 14$, $x = 7$, y de la
primera $y = 3$.

**Sustitución** (despejar una incógnita y llevarla a la otra ecuación): en
$\begin{cases} y = 2x - 1 \\ 3x + y = 9 \end{cases}$ se sustituye: $3x + 2x - 1 = 9$, $x = 2$, $y = 3$.

**Igualación** (despejar la misma incógnita en las dos y igualar): $y = 10 - x$ y $y = x - 4$ dan
$10 - x = x - 4$, $x = 7$.

**Interpretación geométrica.** Cada ecuación $ax + by = c$ es una **recta** del plano, y resolver el sistema es
encontrar su punto de corte. Por eso hay tres casos:

| Rectas | Soluciones | Señal |
|---|---|---|
| se cortan en un punto | **una** | las pendientes difieren |
| paralelas distintas | **ninguna** | mismos coeficientes de $x, y$ pero distinto término independiente |
| coincidentes | **infinitas** | una ecuación es múltiplo de la otra |

Para $\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$ el sistema tiene **solución única** si y solo si
$a_1b_2 - a_2b_1 \ne 0$. Ejemplo: $\begin{cases} 2x + 3y = 7 \\ 4x + 6y = 8 \end{cases}$ tiene $2\cdot 6 - 4\cdot 3 = 0$, y como
$2\cdot 8 \ne 4\cdot 7$, es incompatible.

## 7. Inecuaciones lineales

Una **inecuación** usa $<, \le, >, \ge$ y su solución suele ser un conjunto infinito de valores (un intervalo).
Se resuelve como una ecuación **con una excepción esencial**: al multiplicar o dividir por un número
**negativo**, el sentido de la desigualdad **se invierte**.

**Ejemplo resuelto:** $-2x + 3 > 11 \Rightarrow -2x > 8 \Rightarrow x < -4$ (se dividió entre $-2$ y se invirtió el signo).
Comprobación con $x = -5$: $-2(-5) + 3 = 13 > 11$. $\checkmark$ Con $x = 0$: $3 > 11$ es falso, y $0 \not< -4$. $\checkmark$

Una doble desigualdad se resuelve de una vez: $1 \le 2x - 3 < 9 \Rightarrow 4 \le 2x < 12 \Rightarrow 2 \le x < 6$.

## 8. Errores típicos

- $(a + b)^2 = a^2 + b^2$ (**falso**; falta $2ab$).
- Olvidar cambiar **todos** los signos al quitar un paréntesis precedido de un menos.
- «Pasar términos al otro lado» sin entender que se está sumando o restando a ambos lados.
- Multiplicar por una expresión que puede valer cero (pierde o crea soluciones).
- No invertir el sentido de la desigualdad al dividir por un negativo.
- Dar la solución sin **comprobarla** en el enunciado original.
- Mezclar unidades (minutos con horas) al plantear problemas de movimiento.

## Repaso: lo que debe quedarte dentro de un mes

1. $a(b + c) = ab + ac$, y los signos de un paréntesis precedido de menos.
2. $(a \pm b)^2 = a^2 \pm 2ab + b^2$; $(a + b)(a - b) = a^2 - b^2$.
3. Ecuación = balanza; comprobar siempre; puede tener una, ninguna o infinitas soluciones.
4. Sistema $2\times 2$: reducción, sustitución, igualación; rectas que se cortan, paralelas o coincidentes.
5. Dividir por un negativo invierte la desigualdad.

## Siguiente

Con el álgebra básica, el nodo de funciones básicas representa estas relaciones en un plano con coordenadas, y el de
geometría básica trabaja con figuras, áreas y el teorema de Pitágoras.
