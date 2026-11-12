---
id: ing-logica-digital
title: "Lógica digital: álgebra de Boole, minimización, circuitos combinacionales y secuenciales, máquinas de estados"
area: ingenieria
trunk_level: 8
prerequisites: [mat-logica-demostraciones, sys-c-fundamentos]
academic_sources:
  - "Harris, S. L.; Harris, D. Digital Design and Computer Architecture: RISC-V Edition. Morgan Kaufmann, 2021."
  - "Shannon, C. E. A Symbolic Analysis of Relay and Switching Circuits. Transactions of the AIEE, 57(12), 713-723, 1938."
  - "Quine, W. V. The Problem of Simplifying Truth Functions. The American Mathematical Monthly, 59(8), 521-531, 1952."
  - "McCluskey, E. J. Minimization of Boolean Functions. Bell System Technical Journal, 35(6), 1417-1444, 1956."
ctf_flag: "sha256:22401219ec120f8ceffcb000c8c0ff7bd6d304f5300132fa28ff5510594b8cff"
hints:
  - "Un implicante es primo si no puedes quitarle ningún literal sin que cubra algún minterm con f = 0. Es esencial si es el único implicante primo que cubre algún minterm. Para el registro, no hace falta dar un millón de pasos: la sucesión de estados es periódica y el periodo de un LFSR de 16 bits con polinomio primitivo es 2¹⁶ − 1."
  - "Implementa Quine-McCluskey (agrupar por número de unos y combinar términos que difieren en un bit) o, con solo 5 variables, enumera los 3⁵ = 243 cubos posibles y filtra. Contrasta con sympy.logic.boolalg.SOPform o con `espresso`. El LFSR son tres líneas de C con desplazamientos y XOR; comprueba primero el valor de control de un paso."
  - "Harris y Harris, capítulos de diseño combinacional (mapas de Karnaugh) y secuencial. McCluskey (1956) y Quine (1952) para el método tabular. Para el registro: la nota de aplicación de Xilinx XAPP052, que tabula las tomas de los LFSR de longitud máxima."
exercises:
  - id: complemento-a-dos-en-hexadecimal
    tier: 1
    prompt: |
      ¿Cómo se escribe $-37$ en complemento a dos de $8$ bits, en hexadecimal? Respuesta: dos dígitos hexadecimales en minúsculas.
    answers: ["sha256:7bdc25d1694ef984782a16f6f1710c1c6bc83ba7a131b515baf532bea021d011"]
  - id: filas-a-uno
    tier: 1
    prompt: |
      ¿En cuántas de las $8$ filas de su tabla de verdad vale $1$ la función $f(a, b, c) = ab + \bar c$? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: codigo-gray
    tier: 1
    prompt: |
      ¿Cuál es el código Gray ($g = n \oplus (n \gg 1)$) del número $13$? Respuesta: los 4 bits.
    answers: ["sha256:3dd9c0995d54c0abd51a90f1d57b1ce77bc885fc8a7cea52dcad3c2540dda5ee"]
  - id: complemento-a-dos-en-producto
    tier: 1
    prompt: |
      Un circuito multiplica en complemento a dos de $8$ bits y conserva solo los $8$ bits bajos del resultado. ¿Qué valor (con signo) da para $-100 \times 3$? Respuesta: un entero.
    answers: ["sha256:192fd5c1f4d0980f802142ac95186d3fb540d5a90fa2cedcf3a690caf779ad15"]
  - id: minimizar-con-karnaugh
    tier: 2
    prompt: |
      Minimiza en suma de productos la función de 4 variables $f(a, b, c, d) = \sum m(0, 1, 2, 5, 8, 9, 10)$. ¿Cuántos términos y cuántos literales en total tiene la expresión mínima? Respuesta: `términos;literales`.
    answers: ["sha256:caaabb8be65085cf2b08b76f8dd7e9c85cd21ef9be7f0c7ac781f31e2c23bd70"]
  - id: suma-de-ocho-bits
    tier: 2
    prompt: |
      Un sumador de $8$ bits suma `0xB7` y `0x6C`. ¿Qué resultado de $8$ bits da (en hexadecimal), qué acarreo de salida y hay desbordamiento interpretando los operandos con signo ($1$ sí, $0$ no)? Respuesta: `hex;acarreo;desbordamiento`.
    answers: ["sha256:884267c52087c88bc87e912ee7931e6c91d993b57a678c690d49323ec7780bd2"]
  - id: acarreo-en-cascada
    tier: 2
    prompt: |
      En un sumador de acarreo en cascada de $64$ bits, cada etapa añade $0{,}2$ ns al camino del acarreo. ¿Cuál es el retardo del peor caso, en ns, y la frecuencia máxima de reloj si ese es el camino crítico, en MHz? Respuesta: `ns;MHz`, el segundo con **1 decimal**.
    answers: ["sha256:e19801166f915de98f7939b205c8f5491b0ef9397365c022f5ff06cc05f94b2a"]
  - id: funcion-con-multiplexor
    tier: 2
    prompt: |
      Se implementa $f(a, b, c) = \sum m(1, 2, 6, 7)$ con un multiplexor $4:1$ cuyas entradas de selección son $a$ (bit alto) y $b$. ¿Qué hay que conectar en las entradas $D_0, D_1, D_2, D_3$? Cada una es `0`, `1`, `c` o `c'` (negado). Respuesta: las cuatro separadas por `;`.
    answers: ["sha256:51df742ada5ed9725b2e3c9d269fe7126493257aed6a858f9e7997dfb1fbc5a5"]
  - id: registro-de-desplazamiento
    tier: 2
    prompt: |
      Un registro de desplazamiento de $4$ bits empieza a `0000`; en cada flanco de reloj desplaza a la izquierda y el bit de entrada entra por la derecha. Tras entrar, en orden, los bits $1, 0, 1, 1, 0, 0, 1$, ¿qué contiene? Respuesta: los 4 bits.
    answers: ["sha256:fe675fe7aaee830b6fed09b64e034f84dcbdaeb429d9cccd4ebb90e15af8dd71"]
  - id: detector-de-secuencia
    tier: 2
    prompt: |
      Una máquina de estados de Mealy detecta la secuencia `1011` **con solapamiento** (su salida vale 1 en el ciclo en que llega el último bit). ¿Cuántas veces se activa con la entrada `1011011010111011`? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: frecuencia-maxima-de-reloj
    tier: 3
    prompt: |
      Entre dos biestables, el retardo reloj-salida es $50$ ps, la lógica combinacional tarda como mucho $300$ ps y el tiempo de preparación (*setup*) es $30$ ps. ¿Cuál es la frecuencia máxima de reloj, en GHz? Respuesta: un número con **2 decimales**.
    answers: ["sha256:9f6d37d45e91fb276dea8be7c8cf34b462f9190baf824673b8438df79e5d5c27"]
  - id: implicantes-primos-ciclicos
    tier: 3
    prompt: |
      Para $f(a, b, c) = \sum m(0, 1, 2, 5, 6, 7)$, ¿cuántos implicantes primos hay y cuántos son esenciales? Respuesta: los dos números separados por `;`.
    answers: ["sha256:440e2c4601a73b740eb137b483231bb463d043962664021f1082e2128bb50040"]
  - id: periodo-de-un-lfsr
    tier: 3
    prompt: |
      Un LFSR de $4$ bits desplaza a la izquierda e introduce por la derecha el XOR de sus bits $3$ y $2$ (polinomio $x^4 + x^3 + 1$). Partiendo del estado `0001`, ¿cuántos pasos tarda en volver a él? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: crc-8
    tier: 3
    prompt: |
      Calcula el CRC-8 con polinomio `0x07` (valor inicial $0$, sin reflexión ni XOR final) de los $6$ bytes ASCII de `Exodus`. Respuesta: dos dígitos hexadecimales en minúsculas.
    answers: ["sha256:59e19706d51d39f66711c2653cd7eb1291c94d9b55eb14bda74ce4dc636d015a"]
  - id: binario-a-bcd
    tier: 3
    prompt: |
      Convierte $243$ a BCD (cada cifra decimal en 4 bits), por ejemplo con el algoritmo de desplazar y sumar 3 (*double dabble*). Respuesta: los 12 bits.
    answers: ["sha256:21f39d40226c515c5c0120ceabb61c901436d4dc1c5d4b6ee9910a6fb480a9b7"]
---

# Lógica digital: álgebra de Boole, minimización, circuitos combinacionales y secuenciales, máquinas de estados

Todo ordenador está hecho de un único tipo de pieza: interruptores que dejan pasar o no la corriente. En 1938 Shannon mostró que los
circuitos de interruptores obedecen el álgebra de Boole, y desde entonces diseñar hardware digital es hacer lógica con rigor. Este nodo
recorre ese camino: la abstracción digital y las puertas CMOS, el álgebra de Boole y sus formas canónicas, la minimización (Karnaugh y
Quine-McCluskey), los bloques combinacionales (multiplexores, decodificadores, sumadores, ALU), la aritmética binaria, la lógica secuencial
(biestables, temporización, registros, contadores) y las **máquinas de estados**, con las que se construye cualquier sistema digital, desde
un semáforo hasta un procesador ([[ing-arquitectura-computadores]]).

## Objetivos

Al terminar sabrás:

1. Explicar la abstracción digital (márgenes de ruido) y construir puertas con transistores CMOS.
2. Manipular expresiones con el álgebra de Boole, escribir formas canónicas y usar la expansión de Shannon.
3. Minimizar funciones con mapas de Karnaugh y con Quine-McCluskey (implicantes primos y esenciales).
4. Diseñar bloques combinacionales: multiplexores, decodificadores, sumadores, comparadores; y operar en complemento a dos, Gray y BCD.
5. Analizar la temporización de circuitos secuenciales (setup, hold, frecuencia máxima) y diseñar registros, contadores y LFSR.
6. Diseñar máquinas de estados de Moore y de Mealy, por ejemplo un detector de secuencias.

## Qué debes dominar antes

[[mat-logica-demostraciones]] (conectivos, tablas de verdad, equivalencias) y [[sys-c-fundamentos]] (binario, hexadecimal, complemento a dos,
operadores de bits).

> [!question] Test de entrada
> 1. ¿Qué vale $\lnot(p \land q)$ según De Morgan?
> 2. ¿Cuánto es `0b1011` en decimal y en hexadecimal?
> 3. ¿Cuántas filas tiene la tabla de verdad de una función de 5 variables?
>
> Respuestas: $\lnot p \lor \lnot q$; $11$ y `0xB`; $32$.

## 1. Para qué sirve

- **Arquitectura de computadores**: procesadores, memorias y buses son circuitos digitales ([[ing-arquitectura-computadores]]).
- **FPGA y diseño de chips**: se describe el hardware con un lenguaje (Verilog, VHDL) y se sintetiza a puertas; entender lo que se sintetiza
  evita circuitos lentos o incorrectos.
- **Sistemas embebidos y robótica**: los periféricos de un microcontrolador (temporizadores, UART, SPI) son máquinas de estados ([[rob-microcontroladores]]).
- **Comunicaciones y seguridad**: CRC, códigos de línea, generadores pseudoaleatorios (LFSR) y el hardware criptográfico son lógica digital;
  los ataques por canal lateral explotan su comportamiento eléctrico.

## 2. La abstracción digital y las puertas CMOS

Una señal eléctrica es continua; el diseño digital la **discretiza**: por debajo de $V_{IL}$ se lee 0 y por encima de $V_{IH}$, 1. Las salidas se
garantizan por debajo de $V_{OL}$ o por encima de $V_{OH}$, y la diferencia ($V_{IL} - V_{OL}$ y $V_{OH} - V_{IH}$) es el **margen de ruido**: el
ruido que puede sumarse a una señal sin cambiar su valor lógico. Esa robustez es lo que permite encadenar miles de millones de puertas.

Una puerta CMOS combina transistores **nMOS** (conducen con la puerta a 1, tiran de la salida hacia 0) y **pMOS** (conducen con 0, tiran hacia 1).
Un inversor es un pMOS arriba y un nMOS abajo. Una **NAND** de dos entradas tiene dos nMOS en **serie** (la salida baja solo si las dos entradas
son 1) y dos pMOS en **paralelo**. En cada estado solo conduce una de las dos redes: en reposo no hay corriente y el consumo es casi solo dinámico
(cargar y descargar capacidades al conmutar), proporcional a $CV^2f$. NAND y NOR son **universales**: con NAND se construye cualquier función
(un inversor es una NAND con las entradas unidas; un XOR, cuatro NAND).

## 3. Álgebra de Boole

Con $+$ (OR), $\cdot$ (AND) y $\bar x$ (NOT), además de las propiedades conmutativa, asociativa y distributiva (también la de la suma sobre el
producto, $x + yz = (x + y)(x + z)$), se cumplen: $x + x = x$, $x\cdot\bar x = 0$, $x + \bar x = 1$, **absorción** $x + xy = x$, **De Morgan**
$\overline{x + y} = \bar x\,\bar y$ y $\overline{xy} = \bar x + \bar y$, y el **consenso** $xy + \bar xz + yz = xy + \bar xz$. Toda identidad tiene una **dual**
(intercambiando $+$ con $\cdot$ y $0$ con $1$).

**Formas canónicas.** Un **minterm** es un producto con todas las variables (en forma directa o negada) y vale 1 en una sola fila; toda función
es la suma de los minterms de sus filas a 1 (**suma de productos canónica**, $\sum m$). Dualmente, el producto de **maxterms** de sus filas a 0.

**Expansión de Shannon.** $f(x, \dots) = \bar x\,f(0, \dots) + x\,f(1, \dots)$: una función se parte según una variable. Es la base de los multiplexores y
de los diagramas de decisión binarios (BDD) con que las herramientas verifican circuitos.

## 4. Minimización

Una suma de productos con menos términos y literales usa menos puertas. Un **implicante** de $f$ es un producto que solo vale 1 donde $f$ vale 1;
es **primo** si al quitarle cualquier literal deja de ser implicante; es **esencial** si es el único primo que cubre algún minterm. La expresión
mínima está formada por implicantes primos: todos los esenciales y, si no bastan, una elección mínima de los demás.

**Mapas de Karnaugh.** Se colocan las filas en una cuadrícula ordenada en **código Gray** (celdas vecinas difieren en una variable, y los bordes son
vecinos entre sí); los implicantes son rectángulos de $1, 2, 4, 8\dots$ celdas a 1. Útiles hasta 4 o 5 variables. Las combinaciones que no pueden
ocurrir (**indiferencias**, *don't care*) se pueden usar como 1 o como 0, lo que convenga.

**Ejemplo resuelto 1.** $f(a, b, c, d) = \sum m(0, 2, 8, 10, 5, 7)$: las cuatro esquinas ($b = 0$, $d = 0$) forman el implicante $\bar b\bar d$, y los
minterms 5 y 7 ($a = 0$, $b = 1$, $d = 1$), el implicante $\bar abd$. Ambos son esenciales: $f = \bar b\bar d + \bar abd$ (dos términos, cinco literales,
frente a seis minterms de cuatro literales).

**Quine-McCluskey** (Quine, 1952; McCluskey, 1956) es la versión tabular, programable: se agrupan los minterms por número de unos, se combinan
pares que difieren en un bit (el bit pasa a «$-$»), se repite hasta que no hay combinaciones, y los términos que nunca se combinaron son los
implicantes primos; después se elige un recubrimiento mínimo. El problema exacto es computacionalmente difícil en general, y las herramientas
industriales (como *espresso*) usan heurísticas.

**Riesgos (*hazards*).** Aunque sea lógicamente correcta, una expresión mínima puede producir un **pico** transitorio cuando cambia una entrada y
los caminos tienen retardos distintos; añadir el término de consenso lo elimina. En lógica síncrona no suele importar (se muestrea tras estabilizarse).

## 5. Aritmética y bloques combinacionales

**Representaciones.** Sin signo; **complemento a dos** ([[sys-c-fundamentos]]), donde sumar con y sin signo es el mismo circuito: hay
**acarreo** si el resultado sin signo no cabe y **desbordamiento** con signo si dos operandos del mismo signo dan un resultado del signo contrario.
**Gray**: valores consecutivos difieren en un bit ($g = n \oplus (n \gg 1)$), útil en codificadores de posición y en contadores entre dominios de reloj.
**BCD**: cada cifra decimal en 4 bits (relojes, calculadoras, displays).

**Sumadores.** El **semisumador** da $s = a \oplus b$ y $c = ab$; el **sumador completo** añade el acarreo de entrada:
$s = a \oplus b \oplus c_{in}$, $c_{out} = ab + c_{in}(a \oplus b)$. Encadenando $n$ se obtiene el sumador de **acarreo en cascada**, cuyo retardo crece
linealmente con $n$. El de **anticipación de acarreo** calcula para cada bit «genera» $g_i = a_ib_i$ y «propaga» $p_i = a_i \oplus b_i$ y obtiene todos los
acarreos en paralelo ($c_{i+1} = g_i + p_ic_i$, desarrollado), con retardo logarítmico. Restar es sumar el complemento a dos ($a + \bar b + 1$).

**Otros bloques.** El **multiplexor** $2^k:1$ elige una de $2^k$ entradas según $k$ bits de selección; con la expansión de Shannon implementa cualquier
función de $k + 1$ variables (las entradas de datos son $0$, $1$, la variable restante o su negación). El **decodificador** $k$ a $2^k$ activa una salida
por cada combinación (selección de memoria); el **codificador de prioridad** hace lo contrario. La **ALU** combina sumador, operaciones lógicas y un
multiplexor que elige el resultado, más las banderas (cero, negativo, acarreo, desbordamiento).

## 6. Lógica secuencial

Un circuito **secuencial** tiene memoria: su salida depende de la historia. El **biestable D** (*flip-flop*) copia su entrada $D$ a la salida $Q$ en el
**flanco** de subida del reloj y la mantiene hasta el siguiente. Con biestables se forman **registros**; los registros y la lógica combinacional
entre ellos forman cualquier sistema **síncrono**.

**Temporización.** Para que un biestable capture bien, $D$ debe estar estable un tiempo de **preparación** $t_{setup}$ antes del flanco y uno de
**mantenimiento** $t_{hold}$ después. Entre dos registros, el periodo de reloj debe cubrir el camino más lento:

$$
T_c \ge t_{pcq} + t_{pd} + t_{setup},
$$

con $t_{pcq}$ el retardo reloj-salida y $t_{pd}$ el de la lógica (el **camino crítico**). La frecuencia máxima es $1/T_c$; para subirla se acorta la
lógica entre registros (**segmentación**, base de los procesadores modernos). Si se viola $t_{hold}$ el circuito falla a cualquier frecuencia. Una
señal asíncrona que llega a un biestable puede dejarlo **metaestable**; se sincroniza con dos biestables en cascada.

**Registros de desplazamiento y contadores.** Un registro de desplazamiento mueve sus bits una posición por flanco (conversión serie-paralelo). Un
contador suma 1 en cada flanco; un contador módulo $m$ vuelve a 0 al llegar a $m$.

## 7. Máquinas de estados

Una **máquina de estados finitos** (FSM) tiene un registro de estado, una lógica de **estado siguiente** y una lógica de **salida**. En una máquina de
**Moore** la salida depende solo del estado; en una de **Mealy**, del estado y de la entrada (responde un ciclo antes y suele necesitar menos
estados). Pasos de diseño: diagrama de estados, tabla de transiciones, codificación de los estados (binaria, *one-hot*), ecuaciones de estado
siguiente y de salida, y minimización.

**Ejemplo resuelto 2: detector de `101` con solapamiento (Mealy).** Estados según el prefijo reconocido: $S_0$ (nada), $S_1$ («1»), $S_2$ («10»).
Transiciones: $S_0$ con 1 $\to S_1$, con 0 $\to S_0$; $S_1$ con 0 $\to S_2$, con 1 $\to S_1$; $S_2$ con 1 $\to S_1$ **y salida 1** (el último 1 puede empezar
otro patrón), con 0 $\to S_0$. Con la entrada `10101` la salida se activa dos veces (en el tercer y quinto bit). Es el mismo autómata que el de los
tiempos de espera de patrones de [[mat-probabilidad]] y el de las expresiones regulares.

## 8. Registros de desplazamiento con realimentación lineal

Un **LFSR** es un registro de desplazamiento cuyo bit entrante es el XOR de algunas posiciones, las *tomas*. Es una máquina de estados lineal sobre
$\mathbb{F}_2$: el siguiente estado es $s' = As$ para una matriz $A$ fija ([[mat-algebra-lineal]]). Sus tomas definen un polinomio de
realimentación; si este es **primitivo** sobre $\mathbb{F}_2$, el registro recorre los $2^n - 1$ estados no nulos antes de repetirse (longitud
máxima). El estado nulo es un punto fijo.

```c
#include <stdint.h>

/* LFSR de Fibonacci de 16 bits, polinomio x^16 + x^14 + x^13 + x^11 + 1. */
uint16_t lfsr_paso(uint16_t s) {
    uint16_t bit = ((s >> 0) ^ (s >> 2) ^ (s >> 3) ^ (s >> 5)) & 1u;
    return (uint16_t)((s >> 1) | (bit << 15));
}
```

Con 16 biestables y 3 puertas XOR se obtiene una secuencia de periodo 65535: se usa en contadores rápidos, en aleatorización de enlaces serie y en
pruebas de autodiagnóstico. El **CRC** que protege las tramas Ethernet es la misma estructura usada para dividir un polinomio de datos entre uno
generador. Por ser lineal, un LFSR **no sirve como generador criptográfico**: $2n$ bits consecutivos de salida bastan para recuperar el polinomio y el
estado (algoritmo de Berlekamp-Massey).

## 9. Comprobar con un programa

```python
import itertools


def implicantes_primos(n, unos):
    """Quine-McCluskey: términos como (valor, máscara de bits indiferentes)."""
    terminos, primos = {(m, 0) for m in unos}, set()
    while terminos:
        nuevos, usados = set(), set()
        for (a, ma), (b, mb) in itertools.combinations(sorted(terminos), 2):
            if ma == mb and bin(a ^ b).count("1") == 1:
                nuevos.add((a & b, ma | (a ^ b)))
                usados |= {(a, ma), (b, mb)}
        primos |= terminos - usados
        terminos = nuevos
    return primos


# Ejemplo resuelto 1: dos implicantes primos, b'd' y a'bd.
assert implicantes_primos(4, [0, 2, 8, 10, 5, 7]) == {(0b0000, 0b1010), (0b0101, 0b0010)}

# Sumador completo frente a la suma de enteros, para todas las entradas.
for a, b, c in itertools.product((0, 1), repeat=3):
    s = a ^ b ^ c
    cout = (a & b) | (c & (a ^ b))
    assert 2 * cout + s == a + b + c

# Detector de 101 con solapamiento (ejemplo resuelto 2).
transicion = {(0, 1): (1, 0), (0, 0): (0, 0), (1, 0): (2, 0), (1, 1): (1, 0), (2, 1): (1, 1), (2, 0): (0, 0)}
estado, salidas = 0, []
for bit in [1, 0, 1, 0, 1]:
    estado, y = transicion[(estado, bit)]
    salidas.append(y)
assert salidas == [0, 0, 1, 0, 1]

# Frecuencia máxima: t_pcq + t_pd + t_setup.
assert round(1 / (40e-12 + 210e-12 + 25e-12) / 1e9, 2) == 3.64
```

## 10. Errores típicos

- Ordenar un mapa de Karnaugh en binario y no en código Gray; olvidar que los bordes son vecinos.
- Agrupar celdas en rectángulos que no son potencia de 2, o no usar las indiferencias.
- Confundir acarreo (sin signo) con desbordamiento (con signo).
- Olvidar el tiempo de preparación o el retardo reloj-salida al calcular la frecuencia máxima; ignorar las violaciones de mantenimiento.
- Llevar señales asíncronas a la lógica síncrona sin sincronizar.
- En una FSM con solapamiento, volver al estado inicial tras detectar el patrón en lugar de al estado del sufijo reconocido.
- Usar un LFSR o un CRC como si fueran funciones criptográficas.

## 11. Resumen

- Abstracción digital y márgenes de ruido; CMOS: nMOS abajo, pMOS arriba; NAND universal.
- Álgebra de Boole, De Morgan, consenso; minterms y $\sum m$; expansión de Shannon.
- Implicantes primos y esenciales; Karnaugh en Gray; Quine-McCluskey; indiferencias; riesgos.
- Complemento a dos, acarreo y desbordamiento, Gray, BCD; sumadores en cascada y con anticipación; multiplexor, decodificador, ALU.
- Biestable D, $T_c \ge t_{pcq} + t_{pd} + t_{setup}$, mantenimiento, metaestabilidad; registros y contadores.
- FSM de Moore y Mealy; LFSR de longitud máxima y CRC.

## Reto

Sea $f(x_4, x_3, x_2, x_1, x_0)$ la función de cinco variables que vale 1 exactamente cuando el entero $n = 16x_4 + 8x_3 + 4x_2 + 2x_1 + x_0$ es un
número primo ($0 \le n \le 31$). Calcula:

- **a.** El número de implicantes primos de $f$.
- **b.** Cuántos de ellos son esenciales.
- **c.** El estado del LFSR de la sección 8, partiendo de `0xACE1`, tras aplicar `lfsr_paso` exactamente $1\,000\,000$ de veces. Valor de control:
  tras un paso el estado es `0x5670`.

Formato de la flag, con **a** y **b** en decimal y **c** en hexadecimal de 4 dígitos en minúsculas: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. De Morgan y la suma canónica de minterms.
2. Implicante primo y esencial; Karnaugh en código Gray.
3. Sumador completo: $s = a \oplus b \oplus c$, $c_{out} = ab + c(a \oplus b)$; acarreo frente a desbordamiento.
4. $T_c \ge t_{pcq} + t_{pd} + t_{setup}$.
5. Moore frente a Mealy; un LFSR con polinomio primitivo recorre $2^n - 1$ estados.

## Siguiente

[[ing-arquitectura-computadores]] (del sumador al procesador) y [[sys-ensamblador-x86-64]].
