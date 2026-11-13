---
id: ing-diseno-digital-hdl
title: "Diseño digital con HDL: Verilog sintetizable, máquinas de estados, temporización, aritmética, memorias y FPGA"
area: ingenieria
trunk_level: 10
prerequisites: [ing-logica-digital, ing-arquitectura-computadores]
academic_sources:
  - "Harris, D. M.; Harris, S. L. Digital Design and Computer Architecture, 2ª ed. Morgan Kaufmann, 2012."
  - "Mano, M. M.; Ciletti, M. D. Digital Design: With an Introduction to the Verilog HDL, 5ª ed. Pearson, 2012."
exercises:
  - id: mapa-de-karnaugh
    tier: 1
    prompt: |
      Simplifica $f(a, b, c, d) = \sum m(0, 2, 5, 7, 8, 10, 13, 15)$ como suma de productos mínima. ¿Cuántos términos y cuántos literales en total tiene? Respuesta: `terminos;literales`.
    answers: ["sha256:5c062f977e5d0e39b746d58304e9711596badda6c7fa054f415a197c006080d5"]
  - id: complemento-a-dos
    tier: 1
    prompt: |
      ¿Cómo se representa $-37$ en complemento a dos con 8 bits? Respuesta: en hexadecimal, sin prefijo (por ejemplo `a5`).
    answers: ["sha256:7bdc25d1694ef984782a16f6f1710c1c6bc83ba7a131b515baf532bea021d011"]
  - id: desbordamiento
    tier: 1
    prompt: |
      Un sumador de 8 bits con signo (complemento a dos) suma $100 + 50$. ¿Qué valor con signo aparece en la salida? Respuesta: un entero.
    answers: ["sha256:ee0997440d6d651dfc53f7246f4b5869a2490720482c3be3af2dccc3e6e646fa"]
  - id: contador-modulo-60
    tier: 1
    prompt: |
      ¿Cuántos biestables necesita un contador módulo 60 con codificación binaria? ¿Y con codificación one-hot? Respuesta: `binario;onehot`.
    answers: ["sha256:1fa1018515f32b71863dc9e01fb851ecd368449088a691dc6019e1326715036b"]
  - id: codigo-gray
    tier: 1
    prompt: |
      ¿Cuál es el código Gray (reflejado) de 4 bits del número 13? Respuesta: en binario, con 4 bits.
    answers: ["sha256:3dd9c0995d54c0abd51a90f1d57b1ce77bc885fc8a7cea52dcad3c2540dda5ee"]
  - id: funcion-mayoria
    tier: 1
    prompt: |
      ¿Cuántos mintérminos tiene la función mayoría de 5 entradas (vale 1 si al menos 3 entradas valen 1)? Respuesta: un entero.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: detector-de-secuencia
    tier: 2
    prompt: |
      Un detector de la secuencia `1011` con solapamiento (en `1011011` la detecta dos veces). ¿Cuántos estados tiene como mínimo una máquina de Mealy y cuántos una de Moore? Respuesta: `mealy;moore`.
    answers: ["sha256:37aa7858d15e526023c427fea4c89851844c80d860819a6f2f7b889d1539d0a2"]
  - id: frecuencia-maxima
    tier: 2
    prompt: |
      Entre dos registros hay un camino con $t_{cq} = 0{,}2$ ns, lógica de $3{,}0$ ns y $t_{setup} = 0{,}15$ ns, sin desfase de reloj. ¿Cuál es la frecuencia máxima, en MHz? Respuesta: con **2 decimales**.
    answers: ["sha256:2b6f565ae13b695607638e5cd1720276ab1cd3274858451aed356862d9b02bd1"]
  - id: holgura-de-hold
    tier: 2
    prompt: |
      En otro camino, $t_{cq,\min} = 0{,}1$ ns, la lógica más rápida tarda $0{,}05$ ns y el registro de destino exige $t_{hold} = 0{,}2$ ns. ¿Cuánto vale la holgura de hold, en ns (negativa si hay violación)? Respuesta: un número.
    answers: ["sha256:0fdeae7203be18cb225033a68d0850cb53c9d8b8299faead2e12e941a008e5d7"]
  - id: lfsr
    tier: 2
    prompt: |
      Un LFSR de 4 bits con polinomio de realimentación $x^4 + x^3 + 1$ arranca en un estado no nulo. ¿Cuál es el periodo de la secuencia? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: sumadores
    tier: 2
    prompt: |
      Un sumador de 32 bits en cascada (acarreo de 2 retardos de puerta por bit) tiene un retardo de peor caso de cuántos retardos de puerta? ¿Y cuántos niveles de combinación de acarreos necesita un sumador prefijo (Kogge-Stone)? Respuesta: `cascada;niveles`.
    answers: ["sha256:50d88a670e630d29acafc4c67484e3e94332dd715e9feb27c567d9099286cb42"]
  - id: punto-fijo
    tier: 2
    prompt: |
      ¿Cómo se representa $0{,}3$ en formato Q1.15 (16 bits con signo, 15 fraccionarios) redondeando al más cercano? Respuesta: en hexadecimal, sin prefijo.
    answers: ["sha256:679e7aaf2604ef1933a4495e05e21fada5e5f43b6242a8b3d532b68b170aa19e"]
  - id: campos-de-cache
    tier: 2
    prompt: |
      Una caché de 32 KiB, asociativa de 4 vías y con líneas de 64 bytes recibe direcciones de 32 bits (memoria direccionable por bytes). ¿Cuántos bits tienen la etiqueta, el índice y el desplazamiento? Respuesta: `tag;indice;desplazamiento`.
    answers: ["sha256:b63aea82fc749bf849c52b39d6b8c84af9f7583cd3b74acb9c14a13cddfc380c"]
  - id: segmentacion
    tier: 2
    prompt: |
      Una ruta de datos de 5 etapas con retardos de 2, 3, 4, 2 y 3 ns se segmenta con registros de 0,2 ns. ¿Cuál es el periodo de reloj (ns) y la latencia de una instrucción (ns)? Respuesta: `periodo;latencia`.
    answers: ["sha256:6820174a85ed4d377e96494e303528f298bc368287514d61d4d3df296b79fc83"]
  - id: funciones-autoduales
    tier: 3
    prompt: |
      ¿Cuántas funciones booleanas de 3 variables existen? ¿Cuántas de ellas son autoduales ($f(\bar x_1, \bar x_2, \bar x_3) = \overline{f(x_1, x_2, x_3)}$)? Respuesta: `total;autoduales`.
    answers: ["sha256:f8aa234dffab7b855d0c5a45497618e5fa11b88c24ffdf4359d8d6e7b341e51b"]
  - id: estado-del-lfsr
    tier: 3
    prompt: |
      El LFSR de `lfsr` se implementa con `q <= {q[2:0], q[3] ^ q[2]};` y arranca en `4'b0001`. ¿Qué valor tiene tras 10 flancos de reloj? Respuesta: los 4 bits `q[3:0]`.
    answers: ["sha256:5bedd317328c9ed79ecd3aecee74d37f97813cb4ce61ef3402eb388fb369fa86"]
---

# Diseño digital con HDL: Verilog sintetizable, máquinas de estados, temporización, aritmética, memorias y FPGA

Los circuitos digitales modernos no se dibujan: se **describen** en un lenguaje de descripción de hardware (HDL) y una herramienta los **sintetiza** a
puertas, biestables y bloques de una FPGA o de un chip. Escribir Verilog parece programar, pero no lo es: cada línea es hardware que funciona **en
paralelo**, y un circuito correcto en simulación puede fallar en silicio si no cumple la **temporización**. Este nodo convierte la lógica de
[[ing-logica-digital]] y la arquitectura de [[ing-arquitectura-computadores]] en diseños reales: Verilog sintetizable, máquinas de estados, análisis de
tiempos, aritmética en hardware, memorias y el flujo de FPGA, con bancos de prueba que se simulan de verdad.

## Objetivos

Al terminar sabrás:

1. Escribir Verilog sintetizable: lógica combinacional (`assign`, `always @*`) y secuencial (`always @(posedge clk)`), con asignaciones bloqueantes y no bloqueantes bien usadas.
2. Diseñar máquinas de estados (Mealy y Moore), codificarlas y minimizarlas.
3. Analizar temporización estática: setup, hold, frecuencia máxima, desfase de reloj y metaestabilidad.
4. Implementar aritmética: complemento a dos, desbordamiento, sumadores rápidos, punto fijo, LFSR.
5. Dimensionar memorias y cachés (campos de dirección) y segmentar una ruta de datos.
6. Verificar con bancos de prueba autocomprobados y conocer el flujo de FPGA (síntesis, emplazamiento, rutado, LUT).

## Qué debes dominar antes

[[ing-logica-digital]] (álgebra de Boole, Karnaugh, biestables, máquinas de estados) y [[ing-arquitectura-computadores]] (ruta de datos, segmentación,
jerarquía de memoria).

> [!question] Test de entrada
> 1. ¿Cuántas filas tiene la tabla de verdad de una función de 4 variables?
> 2. ¿Qué diferencia hay entre un latch y un biestable activado por flanco?
> 3. ¿Cuánto vale $0110_2 + 0111_2$ en 4 bits sin signo?
>
> Respuestas: 16; el latch es transparente mientras el control está activo, el biestable solo captura en el flanco; $1101_2 = 13$ (sin desbordamiento sin signo).

## 1. Para qué sirve

- **FPGA**: prototipos de chips, aceleradores (procesado de señal, redes neuronales, criptografía), control de alta velocidad en robótica e instrumentación.
- **ASIC**: todo procesador, controlador o SoC empieza como RTL en Verilog o VHDL (`ing-microelectronica-vlsi` y `ing-diseno-asic`).
- **Sistemas embebidos**: periféricos a medida, interfaces de sensores (SPI, I²C, UART) implementadas en lógica.
- **Seguridad**: análisis de hardware, troyanos y canales laterales empiezan por entender el RTL (`sec-seguridad-hardware`).

## 2. Verilog sintetizable

Un módulo tiene puertos y describe hardware concurrente:

- **Combinacional**: `assign y = a & b;` o `always @* begin ... end` con asignaciones **bloqueantes** (`=`). Todas las salidas deben asignarse en todos los caminos; si no,
  la síntesis infiere un **latch** no deseado.
- **Secuencial**: `always @(posedge clk) q <= d;` con asignaciones **no bloqueantes** (`<=`): todas las derechas se evalúan con los valores *anteriores* al flanco, como
  en el hardware real. Mezclar `=` en lógica secuencial provoca diferencias entre simulación y síntesis.
- **Reset**: síncrono (dentro del `always` con el reloj) o asíncrono (`always @(posedge clk or posedge rst)`).
- Lo que **no** se sintetiza: retardos `#`, `initial` (salvo en FPGA para valores iniciales), bucles con número de iteraciones no constante, `$display`. Eso es para
  los **bancos de prueba**.

Un **banco de prueba** genera estímulos y comprueba las salidas automáticamente; un buen diseño se entrega con su banco autocomprobado.

## 3. Máquinas de estados

Una FSM tiene un registro de estado, lógica de estado siguiente y lógica de salida. En **Moore** la salida depende solo del estado; en **Mealy**, del estado y la
entrada (reacciona un ciclo antes y suele necesitar menos estados). Para detectar `1011` con solapamiento hacen falta 4 estados Mealy (prefijos vistos: ninguno,
`1`, `10`, `101`) y 5 Moore (más el estado "detectado"). Tras detectar, se vuelve al mayor sufijo que sigue siendo prefijo (`1`), no al inicio: eso es el
solapamiento.

**Codificación**: binaria ($\lceil\log_2 n\rceil$ biestables), Gray (un bit cambia por transición: menos glitches y consumo) o **one-hot** ($n$ biestables, lógica de transición
mínima: favorita en FPGA, donde los biestables sobran). **Minimización**: estados equivalentes (misma salida y transiciones a estados equivalentes) se
fusionan por refinamiento de particiones.

## 4. Temporización

En un camino entre dos registros, el dato sale $t_{cq}$ después del flanco, atraviesa la lógica y debe llegar $t_{setup}$ antes del flanco siguiente:

$$
T_{clk} \ge t_{cq} + t_{\text{lógica,max}} + t_{setup} + t_{skew}, \qquad t_{cq,\min} + t_{\text{lógica,min}} \ge t_{hold} + t_{skew}.
$$

La primera (**setup**) fija la frecuencia máxima y se arregla bajando el reloj o segmentando; la segunda (**hold**) no depende del reloj y, si falla, el chip no
funciona a ninguna frecuencia: se arregla añadiendo retardo al camino corto. Las herramientas de **análisis estático de tiempos** (STA) comprueban todos los
caminos. Las señales que vienen de otro dominio de reloj pueden dejar un biestable **metaestable**; se sincronizan con dos biestables en cadena (la probabilidad
de fallo cae exponencialmente con el tiempo de resolución), y los buses entre dominios cruzan con FIFOs asíncronas y punteros en código Gray.

> [!example] Ejemplo resuelto 1: setup y hold
> Con $t_{cq} = 0{,}2$ ns, lógica de $3{,}0$ ns y $t_{setup} = 0{,}15$ ns, el periodo mínimo es $3{,}35$ ns: $f_{\max} \approx 298{,}5$ MHz. Si se parte la lógica en dos etapas de $1{,}5$ ns con un registro
> en medio, el periodo baja a $1{,}85$ ns (540 MHz) a cambio de un ciclo de latencia. En otro camino, con $t_{cq,\min} = 0{,}1$, lógica mínima de $0{,}05$ y $t_{hold} = 0{,}2$ ns, la holgura de
> hold es $-0{,}05$ ns: violación, hay que insertar un buffer de al menos 50 ps en ese camino.

## 5. Aritmética en hardware

- **Complemento a dos**: $-x = \bar x + 1$; con $n$ bits, de $-2^{n-1}$ a $2^{n-1} - 1$. Hay **desbordamiento** si dos sumandos del mismo signo dan un resultado de signo opuesto
  ($100 + 50$ en 8 bits da $-106$).
- **Sumadores**: en cascada (ripple) el acarreo atraviesa los $n$ bits; los de **anticipación de acarreo** y los **prefijos** (Kogge-Stone, Brent-Kung) calculan las señales
  generar/propagar en árbol: $\log_2 n$ niveles en lugar de $n$.
- **Multiplicadores**: matrices de sumadores, árboles de Wallace, codificación de Booth; en FPGA, bloques DSP dedicados.
- **Punto fijo** Q$m.n$: un entero escalado por $2^{-n}$; en Q1.15, $0{,}3 \approx 9830/32768$ (0x2666). Más barato que coma flotante, a cambio de vigilar el rango y el redondeo.
- **LFSR**: un registro desplazado con realimentación XOR según un polinomio; si es primitivo, recorre los $2^n - 1$ estados no nulos (pseudoaleatoriedad, CRC,
  aleatorización de datos, autotest).

## 6. Memorias y segmentación

En una caché de $C$ bytes, líneas de $B$ bytes y $A$ vías, hay $C/(BA)$ conjuntos: la dirección se divide en **desplazamiento** ($\log_2 B$ bits), **índice** ($\log_2$ conjuntos) y
**etiqueta** (el resto). En FPGA, las memorias se infieren con un patrón de código (lectura síncrona) para que la herramienta use bloques RAM en lugar de
biestables.

**Segmentación**: registros entre etapas; el periodo lo fija la etapa más lenta más el registro, y la latencia es el número de etapas por el periodo. Equilibrar
etapas es clave: con etapas de 2, 3, 4, 2 y 3 ns y registros de 0,2 ns, el periodo es 4,2 ns aunque la media sea 2,8.

## 7. FPGA y flujo de diseño

Una FPGA tiene **LUT** (tablas de verdad de 4–6 entradas que implementan cualquier función de esas entradas), biestables, bloques RAM, DSP y una red de
interconexión configurable. El flujo: RTL → **síntesis** (a LUT y biestables) → **emplazamiento y rutado** → análisis de tiempos → bitstream. Los informes de
utilización y de tiempos son la realimentación del diseñador: un camino crítico que no cumple se ataca segmentando o reestructurando la lógica.

> [!example] Ejemplo resuelto 2: un detector de secuencia en Verilog
> El detector Moore de `1011` tiene estados `S0`…`S4`; en `S4` la salida vale 1 y, con entrada 1, se pasa a `S1` (solapamiento) y con 0 a `S2` (`10`). El banco de prueba del
> programa envía `1011011` y comprueba que la salida sube dos veces, en los ciclos siguientes a cada `1011` completo.

> [!example] Ejemplo resuelto 3: un LFSR (con menos ayuda)
> Con `q <= {q[2:0], q[3] ^ q[2]};` y arranque en `0001`, calcula a mano los primeros estados (`0010`, `0100`, `1001`, …) y comprueba que tras 15 flancos vuelve a `0001`
> (polinomio primitivo $x^4 + x^3 + 1$). Después deduce el estado tras 10 flancos y compáralo con la simulación del programa.

## 8. Comprobar con simulación

Bancos de prueba autocomprobados que se simulan con Icarus Verilog: el detector de secuencia, el LFSR y un sumador comparado exhaustivamente con
la suma de enteros.

```verilog
// Ejemplo resuelto 2: detector Moore de 1011 con solapamiento.
module detector(input clk, input rst, input x, output y);
  localparam S0 = 3'd0, S1 = 3'd1, S2 = 3'd2, S3 = 3'd3, S4 = 3'd4;
  reg [2:0] s;
  always @(posedge clk)
    if (rst) s <= S0;
    else case (s)
      S0: s <= x ? S1 : S0;
      S1: s <= x ? S1 : S2;     // "1"  -> "11" sigue siendo "1"; "10"
      S2: s <= x ? S3 : S0;     // "101" ; "100" no es prefijo
      S3: s <= x ? S4 : S2;     // "1011" detectado ; "1010" -> "10"
      S4: s <= x ? S1 : S2;     // solapamiento: queda "1" o "10"
      default: s <= S0;
    endcase
  assign y = (s == S4);
endmodule

module tb;
  reg clk = 0, rst = 1, x = 0;
  wire y;
  detector dut(clk, rst, x, y);
  always #5 clk = ~clk;
  reg [6:0] seq = 7'b1011011;       // se envía de izquierda a derecha
  integer i, detecciones = 0;
  initial begin
    @(negedge clk) rst = 0;
    for (i = 6; i >= 0; i = i - 1) begin
      x = seq[i];
      @(negedge clk) if (y) detecciones = detecciones + 1;
    end
    if (detecciones != 2) $fatal(1, "detecciones = %0d, se esperaban 2", detecciones);
    $display("detector: %0d detecciones en 1011011 (correcto)", detecciones);
    $finish;
  end
endmodule
```

```verilog
// Ejemplo resuelto 3: LFSR x^4 + x^3 + 1 (periodo 15) y estado tras 10 flancos.
module lfsr(input clk, input rst, output reg [3:0] q);
  always @(posedge clk)
    if (rst) q <= 4'b0001;
    else     q <= {q[2:0], q[3] ^ q[2]};
endmodule

module tb;
  reg clk = 0, rst = 1;
  wire [3:0] q;
  lfsr dut(clk, rst, q);
  always #5 clk = ~clk;
  integer n;
  initial begin
    @(negedge clk) rst = 0;
    for (n = 1; n <= 10; n = n + 1) @(negedge clk);
    if (q !== 4'b0111) $fatal(1, "tras 10 flancos q = %b", q);
    for (n = 11; n <= 15; n = n + 1) @(negedge clk);
    if (q !== 4'b0001) $fatal(1, "el periodo no es 15");
    $display("lfsr: q(10) = 0111 y periodo 15 (correcto)");
    $finish;
  end
endmodule
```

```verilog
// Sumador de 8 bits con señal de desbordamiento con signo, comparado con la aritmética entera para las 65536 entradas.
module sum8(input [7:0] a, input [7:0] b, output [7:0] s, output ovf);
  assign s = a + b;
  assign ovf = (a[7] == b[7]) && (s[7] != a[7]);
endmodule

module tb;
  reg [7:0] a, b;
  wire [7:0] s;
  wire ovf;
  integer i, j, errores = 0, verdad;
  sum8 dut(a, b, s, ovf);
  initial begin
    for (i = -128; i < 128; i = i + 1)
      for (j = -128; j < 128; j = j + 1) begin
        a = i; b = j; #1;
        verdad = i + j;
        if (ovf !== (verdad > 127 || verdad < -128)) errores = errores + 1;
        if (!ovf && $signed(s) !== verdad) errores = errores + 1;
      end
    a = 100; b = 50; #1;
    if (errores != 0 || $signed(s) != -106 || !ovf) $fatal(1, "errores = %0d", errores);
    $display("sum8: 65536 casos sin errores; 100 + 50 = %0d con desbordamiento", $signed(s));
    $finish;
  end
endmodule
```

## 9. Errores típicos

- Usar `=` en bloques secuenciales o `<=` en combinacionales (y mezclar ambos en el mismo bloque).
- Dejar una salida sin asignar en algún camino de un `always @*`: se infiere un latch.
- Escribir código que simula bien pero no es sintetizable (retardos, `initial` para lógica).
- Ignorar las violaciones de hold porque "a menor frecuencia se arreglará".
- Pasar señales entre dominios de reloj sin sincronizar.
- Confiar en un diseño sin banco de prueba autocomprobado y sin cobertura de casos límite (desbordamientos, reset, secuencias solapadas).

## 10. Resumen

- Verilog: `assign`/`always @*` con `=`; `always @(posedge clk)` con `<=`; reset síncrono o asíncrono; bancos de prueba.
- FSM Mealy y Moore, codificación binaria, Gray, one-hot; minimización por particiones; solapamiento.
- Setup $T \ge t_{cq} + t_{lóg} + t_{su} + t_{skew}$; hold $t_{cq,\min} + t_{lóg,\min} \ge t_h + t_{skew}$; metaestabilidad y sincronizadores.
- Complemento a dos y desbordamiento; ripple frente a prefijo ($\log_2 n$); punto fijo Q$m.n$; LFSR primitivos.
- Cachés: tag/índice/desplazamiento; segmentación: periodo de la etapa más lenta.
- FPGA: LUT, biestables, BRAM, DSP; síntesis, emplazamiento, rutado, STA.

## Repaso: lo que debe quedarte dentro de un mes

1. En HDL describes hardware concurrente, no un programa secuencial.
2. Secuencial con `<=`, combinacional con `=` y todas las salidas asignadas.
3. Setup se arregla con el reloj o segmentando; hold, solo con retardo.
4. Una FSM bien pensada empieza por los estados como "qué he visto hasta ahora".
5. Sin banco de prueba autocomprobado no hay diseño.

## Siguiente

`ing-microelectronica-vlsi` y `ing-diseno-asic` (del RTL al silicio), `ing-procesado-digital-senal` (filtros en hardware) y `sec-seguridad-hardware`.
La base lógica está en [[ing-logica-digital]].
