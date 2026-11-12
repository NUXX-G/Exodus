---
id: ing-logica-digital
title: "Lógica digital"
area: ingenieria
trunk_level: 8
prerequisites: [mat-logica-demostraciones, prog-pensamiento-computacional]
academic_sources:
  - "Harris, S. L.; Harris, D. Digital Design and Computer Architecture: RISC-V Edition. Morgan Kaufmann, 2021. Caps. 1–5."
  - "Mano, M. M.; Ciletti, M. D. Digital Design, 6ª ed. Pearson, 2018."
  - "Shannon, C. E. A Symbolic Analysis of Relay and Switching Circuits. Transactions of the AIEE, 57(12), 1938."
  - "McCluskey, E. J. Minimization of Boolean Functions. Bell System Technical Journal, 35(6), 1956."
  - "Golomb, S. W. Shift Register Sequences, 3ª ed. revisada. World Scientific, 2017."
ctf_flag: "sha256:22401219ec120f8ceffcb000c8c0ff7bd6d304f5300132fa28ff5510594b8cff"
hints:
  - "Un implicante es primo si no puedes quitarle ningún literal sin que cubra algún minterm con f = 0. Es esencial si es el único implicante primo que cubre algún minterm. Para el registro, no hace falta dar un millón de pasos: la sucesión de estados es periódica y el periodo de un LFSR de 16 bits con polinomio primitivo es 2¹⁶ − 1."
  - "Implementa Quine-McCluskey (agrupar por número de unos y combinar términos que difieren en un bit) o, con solo 5 variables, enumera los 3⁵ = 243 cubos posibles y filtra. Contrasta con sympy.logic.boolalg.SOPform o con `espresso`. El LFSR son tres líneas de C con desplazamientos y XOR; comprueba primero el valor de control de un paso."
  - "Harris & Harris, §2.7 (mapas de Karnaugh) y §3.4–3.5 (lógica secuencial). McCluskey (1956) para el método tabular. Para el registro: Golomb, cap. 3, y la nota de aplicación de Xilinx XAPP052, que tabula las tomas de los LFSR de longitud máxima."
---

# Lógica digital

Un computador es una función booleana gigantesca con memoria. Este nodo construye esa
afirmación: de transistores a puertas, de puertas a funciones arbitrarias, y de funciones con
realimentación a máquinas con estado.

## 1. Abstracción digital y puertas

Un circuito digital restringe cada señal a dos rangos de tensión, interpretados como 0 y 1, con
una banda prohibida entre ambos. El **margen de ruido** es lo que una señal puede degradarse sin
cambiar de interpretación; como cada puerta *regenera* la señal, el ruido no se acumula, que es
la ventaja decisiva frente a lo analógico.

En CMOS, una puerta combina una red de transistores pMOS que conecta la salida a la alimentación
con una red nMOS complementaria que la conecta a masa. Una NAND de dos entradas usa 4
transistores y un inversor 2; AND y OR necesitan un inversor adicional. Por eso las primitivas
reales son NAND y NOR.

**Teorema.** $\{\text{NAND}\}$ es funcionalmente completo: toda función booleana se expresa solo
con puertas NAND.

*Demostración.* $\lnot a = \text{NAND}(a, a)$; $a \land b = \lnot\,\text{NAND}(a, b)$; por De
Morgan, $a \lor b = \text{NAND}(\lnot a, \lnot b)$. Y $\{\lnot, \land, \lor\}$ basta por la
forma canónica de la sección siguiente. $\blacksquare$

## 2. Álgebra de Boole y formas canónicas

Con $+$ para OR, yuxtaposición para AND y barra para NOT, los axiomas son los de
[[mat-logica-demostraciones]]. Identidades de uso constante:

$$
x + xy = x, \qquad x + \bar{x}y = x + y, \qquad xy + \bar{x}z + yz = xy + \bar{x}z \;\;\text{(consenso)}.
$$

Un **minterm** es un producto en el que aparece cada variable, negada o no; vale 1 en una única
fila de la tabla de verdad. Numerando las filas en binario, $m_i$ es el minterm de la fila $i$.

**Teorema (forma canónica).** Toda función booleana es la suma de los minterms de las filas en
las que vale 1: $f = \sum_{i \,:\, f(i) = 1} m_i$.

*Demostración.* Ambos lados valen 1 exactamente en las mismas filas. $\blacksquare$

Es la **expansión de Shannon** aplicada a todas las variables:
$f = x \cdot f|_{x=1} + \bar{x} \cdot f|_{x=0}$. Un multiplexor implementa directamente esa
identidad, y una tabla de consulta (LUT) de una FPGA es un multiplexor cuyas entradas de datos
son la tabla de verdad.

## 3. Minimización

La forma canónica es correcta pero cara. Un **implicante** de $f$ es un producto de literales $P$
tal que $P = 1 \Rightarrow f = 1$; geométricamente es un subcubo del hipercubo $\{0,1\}^n$
contenido en el conjunto donde $f$ vale 1. Con $n$ variables hay $3^n$ productos posibles: cada
variable aparece afirmada, negada o no aparece.

- Un implicante es **primo** si al eliminar cualquiera de sus literales deja de ser implicante.
- Un implicante primo es **esencial** si cubre algún minterm que ningún otro implicante primo cubre.

**Teorema (Quine).** Toda expresión mínima en suma de productos está formada solo por
implicantes primos, y contiene todos los esenciales.

*Demostración.* Si un término no fuese primo, quitarle un literal daría otra expresión válida más
barata. Y el minterm que solo cubre un implicante esencial no quedaría cubierto sin él.
$\blacksquare$

El **método de Quine-McCluskey** obtiene todos los implicantes primos combinando repetidamente
pares de términos que difieren en una sola variable ($xy + x\bar{y} = x$), y después elige un
subconjunto mínimo que cubra todos los minterms. Esa segunda fase es un problema de
recubrimiento de conjuntos, NP-difícil en general; por eso las herramientas reales usan
heurísticas como Espresso. El mapa de Karnaugh es el mismo procedimiento hecho a ojo para hasta
4 o 5 variables.

Ejemplo: $f(a, b, c) = \sum m(0, 1, 2, 5, 6, 7)$ tiene seis implicantes primos
($\bar a \bar b$, $\bar a \bar c$, $\bar b c$, $b \bar c$, $a c$, $a b$), ninguno esencial, y
dos soluciones mínimas de tres términos.

## 4. Aritmética combinacional

Un **sumador completo** suma tres bits y produce suma y acarreo:

$$
s = a \oplus b \oplus c_{\text{in}}, \qquad c_{\text{out}} = ab + c_{\text{in}}(a \oplus b).
$$

Encadenando $n$ se obtiene el sumador con propagación de acarreo, que calcula
$(a + b) \bmod 2^n$ con retardo $O(n)$. Definiendo $g_i = a_i b_i$ (genera) y
$p_i = a_i \oplus b_i$ (propaga), $c_{i+1} = g_i + p_i c_i$ se desarrolla en una expresión que
depende solo de las entradas, y un árbol de prefijos la evalúa en profundidad $O(\log n)$: es el
sumador con anticipación de acarreo.

## 5. Lógica secuencial

Dos inversores realimentados tienen dos estados estables: almacenan un bit. Un **biestable D**
disparado por flanco copia su entrada $D$ a la salida $Q$ en cada flanco de subida del reloj y la
mantiene el resto del ciclo.

En un circuito **síncrono** todos los biestables comparten reloj, y entre dos flancos solo hay
lógica combinacional. Para que funcione, el periodo de reloj debe cumplir

$$
T_{\text{clk}} \;\ge\; t_{\text{pcq}} + t_{\text{pd}} + t_{\text{setup}},
$$

donde $t_{\text{pcq}}$ es el retardo del biestable, $t_{\text{pd}}$ el del camino combinacional
más largo (el **camino crítico**) y $t_{\text{setup}}$ el tiempo que el dato debe estar estable
antes del flanco. Esa desigualdad fija la frecuencia máxima de cualquier procesador.

Una **máquina de estados finitos** es un registro de estado más dos funciones combinacionales:
siguiente estado $\delta(s, x)$ y salida. Con $k$ biestables hay a lo sumo $2^k$ estados.

## 6. Registros de desplazamiento con realimentación lineal

Un **LFSR** es un registro de desplazamiento cuyo bit entrante es el XOR de algunas posiciones,
las *tomas*. Es una máquina de estados lineal sobre $\mathbb{F}_2$: el siguiente estado es
$s' = As$ para una matriz $A$ fija. Sus tomas definen un polinomio de realimentación; si este es
**primitivo** sobre $\mathbb{F}_2$, el registro recorre los $2^n - 1$ estados no nulos antes de
repetirse (longitud máxima). El estado nulo es un punto fijo.

```c
#include <stdint.h>

/* LFSR de Fibonacci de 16 bits, polinomio x^16 + x^14 + x^13 + x^11 + 1. */
uint16_t lfsr_paso(uint16_t s) {
    uint16_t bit = ((s >> 0) ^ (s >> 2) ^ (s >> 3) ^ (s >> 5)) & 1u;
    return (uint16_t)((s >> 1) | (bit << 15));
}
```

Con 16 biestables y 3 puertas XOR se obtiene una secuencia de periodo 65535: se usa en
contadores rápidos, en el CRC de las tramas Ethernet, en aleatorización de enlaces serie y en
pruebas de autodiagnóstico. Por ser lineal **no sirve como generador criptográfico**: $2n$ bits
consecutivos de salida bastan para recuperar el polinomio y el estado (algoritmo de
Berlekamp-Massey).

## Reto

Sea $f(x_4, x_3, x_2, x_1, x_0)$ la función de cinco variables que vale 1 exactamente cuando el
entero $n = 16x_4 + 8x_3 + 4x_2 + 2x_1 + x_0$ es un número primo ($0 \le n \le 31$). Calcula:

- **a.** El número de implicantes primos de $f$.
- **b.** Cuántos de ellos son esenciales.
- **c.** El estado del LFSR de la sección 6, partiendo de `0xACE1`, tras aplicar `lfsr_paso`
  exactamente $1\,000\,000$ de veces. Valor de control: tras un paso el estado es `0x5670`.

Formato de la flag, con **a** y **b** en decimal y **c** en hexadecimal de 4 dígitos en
minúsculas: `EXODUS{a-b-c}`
