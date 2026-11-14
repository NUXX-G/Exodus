---
id: proy-ing-cpu-riscv
title: "Proyecto: una CPU RISC-V RV32I en Verilog (decodificador, ruta de datos uniciclo, memoria, saltos, excepciones precisas y cauce de 5 etapas con anticipación)"
area: ingenieria
trunk_level: 11
kind: proyecto
prerequisites: [ing-arquitectura-computadores, ing-diseno-digital-hdl]
academic_sources:
  - "Waterman, A.; Asanović, K. (eds.). The RISC-V Instruction Set Manual, Volume I: Unprivileged Architecture. RISC-V International (cap. 2: RV32I; formatos, codificación de inmediatos, FENCE)."
  - "Waterman, A.; Asanović, K.; Hauser, J. (eds.). The RISC-V Instruction Set Manual, Volume II: Privileged Architecture. RISC-V International (códigos de causa de mcause y prioridad de las excepciones)."
  - "Harris, S. L.; Harris, D. M. Digital Design and Computer Architecture, RISC-V Edition. Morgan Kaufmann, 2021 (cap. 7: procesadores uniciclo y segmentado, unidad de riesgos, anticipación)."
  - "Patterson, D. A.; Hennessy, J. L. Computer Organization and Design RISC-V Edition, 2ª ed. Morgan Kaufmann, 2020 (cap. 4: ruta de datos y segmentación); Patterson, D.; Waterman, A. The RISC-V Reader. Strawberry Canyon, 2017."
attachments: [prueba.sh, programas.s]
exercises:
  - id: hito-1-decodificador
    tier: 1
    prompt: |
      **Hito 1.** `cpu decodifica W1 W2 …` (palabras de 8 cifras hexadecimales) imprime una línea por palabra con la instrucción RV32I en el formato del §2: `add x1, x2, x3`, `addi x1, x2, -5` (inmediatos en decimal; los desplazamientos de `slli`, `srli` y `srai`, también), `lw x1, -4(x2)`, `sw x3, 8(x2)`, `jalr x1, 4(x2)`, `beq x1, x2, -16` y `jal x1, 2048` (desplazamiento relativo en decimal), `lui x3, 0x12345` y `auipc` (los 20 bits superiores en hexadecimal, sin ceros a la izquierda), `fence` (toda codificación con opcode MISC-MEM y funct3 = 0), `ecall` y `ebreak` (solo sus codificaciones exactas). Cualquier otra palabra (extensiones, instrucciones CSR, codificaciones reservadas) imprime `ilegal`. Sin palabras o con una que no tenga 8 cifras hexadecimales, código 1.

      Comprueba con `bash prueba.sh ./cpu 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:fefd74cb495e1780f59f4a832fa79b13bf8b5163a360303aabc7b6607933986a"]
  - id: hito-2-alu
    tier: 1
    prompt: |
      **Hito 2.** `cpu ejecuta PROG.hex [MAX]` carga el programa (una palabra hexadecimal por línea, como mucho 1024) desde la dirección 0 en una memoria de 64 KiB a cero, con extremo pequeño, pone los registros y el pc a 0 y ejecuta hasta `ecall`, `ebreak`, una excepción o MAX instrucciones completadas (100000 por defecto). En este hito, las instrucciones de la ALU: OP, OP-IMM, LUI y AUIPC. Imprime `fin MOTIVO` (`ecall`, `ebreak`, `limite` o `excepcion CAUSA`), `pc` (8 cifras hexadecimales en minúscula), `instrucciones` (las completadas, sin contar el ecall o ebreak final ni la que provoca la excepción), una línea `xN valor` por cada registro distinto de cero en orden (valor con 8 cifras hexadecimales) y una línea `m dirección valor` por cada palabra alineada distinta de cero desde 0x1000 hasta el final de la memoria. Un fichero que no existe, una línea que no sea una palabra de 8 cifras hexadecimales, más de 1024 palabras o un MAX que no sea un entero positivo terminan con código 1.

      Comprueba con `bash prueba.sh ./cpu 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:9ec5c8df3f3000af43b1680eb6e4dceeddc312a341010037bd96aef1f0fa8b68"]
  - id: hito-3-memoria
    tier: 2
    prompt: |
      **Hito 3.** Añade a `cpu ejecuta` las cargas y los almacenamientos de 8, 16 y 32 bits (LB, LH, LW con extensión de signo; LBU, LHU con ceros; SB, SH, SW), con extremo pequeño. Misma salida que el hito 2.

      Comprueba con `bash prueba.sh ./cpu 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:cb3279e71d8a61633358d52ce6607f055186798bdd06d5e3b0d0d480eba4a5b5"]
  - id: hito-4-saltos
    tier: 2
    prompt: |
      **Hito 4.** Añade a `cpu ejecuta` los saltos condicionales (BEQ, BNE, BLT, BGE con signo; BLTU, BGEU sin signo) y los incondicionales JAL y JALR (que pone a 0 el bit 0 del destino y guarda pc + 4 en rd). Misma salida que el hito 2.

      Comprueba con `bash prueba.sh ./cpu 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:63f541122d52c9c4f641db17b3fe5bf718e2bd3fd419a00c3628abf353c5b6e0"]
  - id: hito-5-excepciones
    tier: 3
    prompt: |
      **Hito 5.** Las excepciones son **precisas**: la instrucción que la provoca no cambia nada, se para y `pc` es su dirección. Causas (las del manual privilegiado): 0, destino de un salto tomado no múltiplo de 4 (la excepción es del salto); 1, búsqueda fuera de la memoria (pc ≥ 0x10000; aquí `pc` es esa dirección); 2, instrucción ilegal (las del hito 1); 4 y 6, carga o almacenamiento desalineado (media palabra en dirección impar, palabra en dirección no múltiplo de 4); 5 y 7, carga o almacenamiento fuera de la memoria (algún byte por encima de 0xFFFF; la dirección es de 32 bits sin signo). Si se dan dos, la desalineación va antes. Con `limite`, `pc` es la dirección de la siguiente instrucción. FENCE no hace nada. Misma salida que el hito 2.

      Comprueba con `bash prueba.sh ./cpu 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:0d34c69209573e8e791c9e5d7e30651d8ce0851a7c138a27ed797510a5309057"]
  - id: hito-6-cauce
    tier: 3
    prompt: |
      **Hito 6.** `cpu ciclos PROG.hex [MAX]` ejecuta el programa en el cauce clásico de 5 etapas del §6 (IF, ID, EX, MEM, WB; anticipación desde EX/MEM y MEM/WB hasta EX; el banco de registros escribe en la primera mitad del ciclo y lee en la segunda; una burbuja cuando la instrucción en ID lee, como rs1 o rs2, el registro destino distinto de x0 de una carga que está en EX; saltos y JAL/JALR resueltos en EX con predicción de no tomado, de modo que un salto tomado vacía las dos instrucciones que lo siguen). La primera instrucción está en IF en el ciclo 1. Imprime `ciclos` (el ciclo en el que el ecall llega a WB), `paradas` (burbujas por cargas), `vaciadas` (instrucciones vaciadas) y después lo mismo que `ejecuta`. Qué instrucciones leen rs1: JALR, saltos condicionales, cargas, almacenamientos, OP-IMM y OP; rs2: saltos condicionales, almacenamientos y OP. Si el programa no termina en ecall dentro de MAX instrucciones, código 1.

      Comprueba con `bash prueba.sh ./cpu 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:af944af2e82f3be139f5ec60cc00f769751e4b7eca67cc03ae332c72fc41a92e"]
---

Vas a diseñar en Verilog un procesador **RISC-V RV32I** completo: el repertorio base de enteros de 32 bits, el mismo que ejecutan miles de microcontroladores reales y que puedes compilar con GCC o Clang. Primero
una versión **uniciclo** (una instrucción por ciclo de reloj) con excepciones precisas, y después la versión **segmentada** de 5 etapas que usan los libros de texto, con anticipación, paradas y vaciados. Al
acabar habrás hecho, a pequeña escala, el trabajo de un equipo de diseño de CPU: especificación, ruta de datos, control, verificación contra un modelo de referencia y medida de rendimiento. Aplica
[[ing-arquitectura-computadores]] y [[ing-diseno-digital-hdl]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `cpu` con tres órdenes: `decodifica` (hito 1), `ejecuta` (hitos 2 a 5) y `ciclos` (hito 6), con el contrato exacto de los ejercicios. Lo natural es que `cpu` sea un guion corto que
valida los argumentos y lanza la simulación de tu diseño: con **Icarus Verilog** (`iverilog -o cpu.vvp tb.v cpu.v` y `vvp -n cpu.vvp +prog=FICHERO +max=N`) o con **Verilator**, que traduce el Verilog a C++
y es mucho más rápido. El banco de pruebas carga el programa con `$readmemh`, lee los parámetros con `$value$plusargs`, da relojes hasta que el núcleo se para y vuelca el estado con `$display`. El decodificador
del hito 1 puedes escribirlo en Verilog o, si prefieres, como un programa aparte: es la misma lógica de decodificación que necesitará tu núcleo.

El adjunto **`prueba.sh`** ejecuta tu `cpu` sobre 30 programas y da un código por hito si todo coincide; con `-v` muestra cada salida. Los programas fuente están en **`programas.s`**: léelos cuando un
caso falle. Se ensamblan con GNU binutils (`riscv64-unknown-elf-as -march=rv32i -mabi=ilp32`, enlazados en la dirección 0); si instalas esas herramientas, también puedes escribir tus propios programas y
desensamblar con `riscv64-unknown-elf-objdump -M numeric,no-aliases`.

## 2. El repertorio RV32I y su codificación

Treinta y siete instrucciones útiles (más FENCE, ECALL y EBREAK), 32 registros de 32 bits con **x0 cableado a cero** (escribir en él no tiene efecto), y seis formatos de instrucción:

| Formato | Campos (del bit 31 al 0) | Instrucciones |
|---|---|---|
| R | funct7 · rs2 · rs1 · funct3 · rd · opcode | ADD, SUB, SLL, SLT, SLTU, XOR, SRL, SRA, OR, AND |
| I | imm[11:0] · rs1 · funct3 · rd · opcode | ADDI y compañía, cargas, JALR |
| S | imm[11:5] · rs2 · rs1 · funct3 · imm[4:0] · opcode | SB, SH, SW |
| B | imm[12, 10:5] · rs2 · rs1 · funct3 · imm[4:1, 11] · opcode | BEQ, BNE, BLT, BGE, BLTU, BGEU |
| U | imm[31:12] · rd · opcode | LUI, AUIPC |
| J | imm[20, 10:1, 11, 19:12] · rd · opcode | JAL |

La aparente maraña de bits de B y J es deliberada: rs1, rs2 y rd están **siempre en el mismo sitio**, y el bit de signo de todo inmediato es **siempre el bit 31**, de modo que el hardware puede leer los
registros y empezar la extensión de signo antes de saber qué instrucción es. Los inmediatos de B y J codifican desplazamientos **en múltiplos de 2 bytes** (el bit 0 no se guarda), y son relativos al pc de la
propia instrucción. Detalles que se olvidan: los desplazamientos con inmediato (SLLI, SRLI, SRAI) usan solo 5 bits y distinguen SRLI de SRAI por el bit 30; SLTIU compara sin signo, pero con el inmediato
**extendido en signo**; y en RV32I el bit 25 de un desplazamiento con inmediato a 1 es una codificación reservada (en RV64I sería el sexto bit de la cantidad). Para FENCE, el manual pide que una implementación
básica ejecute como FENCE normal cualquier codificación con funct3 = 0, aunque los campos rd, rs1 o fm tengan valores reservados.

## 3. La ruta de datos uniciclo

Los bloques: el **pc**, la **memoria** (aquí una sola de 64 KiB para código y datos, por bytes), el **banco de registros** (dos lecturas combinacionales y una escritura en el flanco), el **generador de
inmediatos** (un multiplexor según el formato), la **ALU** (suma, resta, desplazamientos, comparaciones, lógica) y la unidad de **control**, que traduce opcode, funct3 y funct7 en las señales de los
multiplexores. En cada ciclo: se busca la instrucción en pc, se decodifica, se leen rs1 y rs2, opera la ALU, se accede a memoria si toca y, en el flanco, se escriben rd, la memoria y el nuevo pc. Esa
sencillez tiene un precio: el periodo de reloj es el del camino más largo, el de una carga (memoria de instrucciones, registros, ALU, memoria de datos, registros).

## 4. Memoria: anchos, extremo pequeño y extensión

RISC-V es de **extremo pequeño** (little endian): la palabra 0x8091a2b3 guardada en 0x1000 deja b3 en 0x1000 y 80 en 0x1003. LB y LH extienden el signo del byte o la media palabra; LBU y LHU rellenan con
ceros; SB y SH escriben solo los bytes bajos de rs2. La dirección es rs1 + inmediato con aritmética de 32 bits (puede dar la vuelta). Un truco útil en Verilog: guarda la memoria como bytes
(`reg [7:0] mem [0:65535]`) y compón las palabras concatenando cuatro bytes.

## 5. Saltos y llamadas

Los condicionales comparan rs1 con rs2 (con signo BLT y BGE, sin signo BLTU y BGEU) y suman su desplazamiento al pc. JAL salta a pc + desplazamiento y guarda pc + 4 en rd (con rd = x1 es una llamada; con rd = x0, un
salto simple); JALR salta a (rs1 + inmediato) con el bit 0 a cero y también guarda pc + 4, y con él se hacen los retornos (`ret` es `jalr x0, 0(x1)`), los punteros a función y las tablas de saltos. Cuidado
con JALR cuando rd = rs1: el destino se calcula con el valor **antiguo** de rs1.

## 6. Excepciones precisas

Una excepción es **precisa** si todo lo anterior a la instrucción que falla se ha completado, nada de ella ni de lo posterior ha cambiado el estado, y se sabe su dirección. Un procesador real saltaría
entonces al manejador de `mtvec` con la causa en `mcause`; aquí el núcleo se para y el banco de pruebas informa de la causa, con los códigos del manual privilegiado: 0, dirección de instrucción desalineada (en
RV32I sin la extensión C, un destino de salto no múltiplo de 4; la excepción la lanza el salto); 1, fallo de acceso al buscar la instrucción; 2, instrucción ilegal; 4 y 6, carga y almacenamiento
desalineados; 5 y 7, fallo de acceso en carga y almacenamiento. Las instrucciones ilegales importan más de lo que parece: un programa que olvida el ecall sigue ejecutando la memoria a cero, y la palabra
0x00000000 está definida como ilegal precisamente para que eso se detecte en el acto.

## 7. El cauce de 5 etapas

Segmentar es partir la ruta de datos en etapas separadas por registros: **IF** (búsqueda), **ID** (decodificación y lectura de registros), **EX** (ALU y decisión de los saltos), **MEM** (memoria de datos) y
**WB** (escritura en registros). Con cinco instrucciones en vuelo, el reloj puede ser casi cinco veces más rápido, pero aparecen los **riesgos**:

- **De datos**: una instrucción necesita un resultado que aún no está en el banco de registros. La **anticipación** (forwarding) lo lleva directamente desde los registros EX/MEM o MEM/WB a la entrada de
  la ALU; si los dos tienen un valor para el mismo registro, manda el más reciente (EX/MEM). Y el banco escribe en la primera mitad del ciclo y lee en la segunda, así que lo que está en WB llega a ID sin
  más.
- **De carga**: el dato de una carga no existe hasta el final de MEM, demasiado tarde para la instrucción siguiente, que ya está en EX. La **unidad de riesgos** la detecta en ID y la retiene un ciclo
  (congela pc e IF/ID e inserta una burbuja en EX); después, la anticipación desde MEM/WB hace el resto. Un compilador listo reordena el código para evitarlo: el programa `h6_bucle_cargas` lo muestra.
- **De control**: hasta EX no se sabe si un salto se toma. Con predicción de **no tomado** se siguen buscando las instrucciones siguientes; si el salto se toma, las dos que entraron detrás (en IF e ID) se
  **vacían** (pasan a ser burbujas) y la búsqueda sigue en el destino.

Es el mismo diseño que el procesador segmentado de Harris y Harris. Mide su rendimiento con los ciclos por instrucción (CPI): uno ideal, más las paradas y los vaciados repartidos entre las instrucciones.
Una instrucción vaciada es del camino equivocado: aunque sea basura (o una palabra ilegal), no debe tener ningún efecto.

## 8. Verilog sin sorpresas

- **Signo**: `$signed(a) >>> n` es un desplazamiento aritmético, pero dentro de una expresión con algún operando sin signo, como `c ? $signed(a) >>> n : a >> n`, **toda** la expresión se evalúa sin signo y el
  `>>>` se vuelve lógico. Calcula el resultado con signo en su propio cable. Lo mismo con las comparaciones: usa `$signed` en los dos operandos.
- **Asignaciones**: `<=` en los bloques con reloj y `=` en los combinacionales (`always @(*)`); mezclarlas crea carreras entre bloques.
- **Valores x**: una memoria o un registro sin inicializar vale x y lo contamina todo; inicialízalos en el banco de pruebas.
- **Latches**: en un `always @(*)` asigna todas las salidas en todos los caminos (con un `default` en cada `case`).

## 9. Cómo verificarlo

La técnica profesional es la **cosimulación**: un simulador del repertorio escrito en software (en Python o C, una o dos horas de trabajo con lo que has leído) ejecuta el mismo programa y se compara el
estado instrucción a instrucción con el del Verilog. Añade generación de **programas aleatorios** (instrucciones válidas al azar con saltos hacia delante): encuentran en minutos los errores que tus pruebas
no buscaban. Compara tu decodificador con `objdump`. Y cuando todo pase, prueba la batería oficial **riscv-tests** (rv32ui) y, para el cauce, verifica que da exactamente los mismos resultados que el uniciclo
en todos los programas: solo deben cambiar los ciclos.

## 10. Ampliaciones

La extensión M (multiplicación y división; prueba un multiplicador de varios ciclos), Zicsr y el manejo real de excepciones e interrupciones con `mtvec`, `mepc` y `mcause`; memorias caché de instrucciones y
datos; un predictor de saltos (contadores de 2 bits y un BTB) y su efecto en los ciclos; síntesis en una FPGA con un UART para imprimir; ejecutar programas en C compilados con `gcc -march=rv32i`; y la
verificación formal con riscv-formal.

## 11. Recursos

El manual de RISC-V (vol. I, cap. 2, y vol. II, tabla de mcause), gratuito en riscv.org; Harris y Harris (cap. 7, con el código del procesador en SystemVerilog) y Patterson y Hennessy (cap. 4). The
RISC-V Reader es una guía corta del repertorio. Herramientas libres: Icarus Verilog, Verilator, GTKWave para ver las formas de onda, y GNU binutils para RISC-V. La teoría de la ruta de datos y de la
segmentación, en [[ing-arquitectura-computadores]]; el lenguaje, en [[ing-diseno-digital-hdl]].
