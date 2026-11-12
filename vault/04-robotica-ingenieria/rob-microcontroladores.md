---
id: rob-microcontroladores
title: "Microcontroladores y sistemas empotrados"
area: robotica
trunk_level: 14
prerequisites: [ing-arquitectura-computadores, ing-circuitos]
academic_sources:
  - "Yiu, J. The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors, 3ª ed. Newnes, 2013."
  - "Arm Ltd. ARMv7-M Architecture Reference Manual (ARM DDI 0403)."
  - "NXP Semiconductors. UM10204: I²C-bus specification and user manual, rev. 7.0, 2021."
  - "Barr, M.; Massa, A. Programming Embedded Systems, 2ª ed. O'Reilly, 2006."
  - "Cook, G. Catalogue of parametrised CRC algorithms. reveng.sourceforge.io/crc-catalogue"
  - "STMicroelectronics. RM0090: Reference manual STM32F405/415, STM32F407/417, STM32F427/437 and STM32F429/439 advanced Arm-based 32-bit MCUs."
ctf_flag: "sha256:cad4106f290eb5a162cc4da2ec303cafe81927b7ea12d4877de4f5f64bee3b91"
hints:
  - "(a) Un temporizador cuenta de 0 a ARR a la frecuencia reloj/(PSC+1), así que la frecuencia de salida es reloj/((PSC+1)(ARR+1)); busca el menor prescaler que haga entero y alcanzable el cociente. (b, c) El divisor de la USART es reloj/(16·baudios) con una parte fraccionaria de 4 bits; el baudio real sale de redondear ese divisor a múltiplos de 1/16. (d) El vector de una interrupción externa vive a 4 bytes por entrada, tras las 16 primeras entradas del sistema. (e) El CRC de hardware de estos microcontroladores es CRC-32 con polinomio 0x04C11DB7, sin reflejar y con valor inicial 0xFFFFFFFF; valídalo antes con la cadena «123456789»."
  - "Calcula (a) con un bucle sobre PSC y divisores enteros, (b, c) comparando también con una búsqueda exhaustiva sobre todos los valores de 16 bits del registro, (d) con aritmética de enteros en hexadecimal, y (e) con una implementación bit a bit y otra por tabla de 256 entradas: deben coincidir. Comprueba la implementación del CRC con el valor de comprobación 0x0376E6E7 de la cadena «123456789» (algoritmo CRC-32/MPEG-2 del catálogo de Greg Cook)."
  - "Yiu, capítulos sobre el modelo de programación, el manejo de excepciones y la tabla de vectores; Arm DDI 0403, secciones del modelo de excepciones y del registro VTOR; RM0090, capítulos del temporizador (fórmula de PWM) y de la USART (registro BRR); catálogo de CRC: reveng.sourceforge.io/crc-catalogue/all.htm, entrada CRC-32/MPEG-2."
---

# Microcontroladores y sistemas empotrados

Un **microcontrolador** (MCU) integra en un solo chip un procesador, memoria (Flash para el
programa, SRAM para los datos) y periféricos: puertos digitales, temporizadores, conversores
analógico-digitales, buses serie. Es lo que hay dentro de un robot, un electrodoméstico o un
coche, y es lo que el firmware controla. Programarlo "a pelo" (*bare-metal*) significa entender
exactamente qué escribe tu código en qué registro, sin biblioteca intermedia. La base
conceptual está en [[ing-arquitectura-computadores]] y la eléctrica en [[ing-circuitos]]; los
robots de [[rob-control]] y [[rob-cinematica]] ejecutan sus lazos aquí.

## 1. Modelo de memoria y arranque (Arm Cortex-M)

Un Cortex-M tiene un único espacio de direcciones de 32 bits con un reparto fijo por la
arquitectura (Arm DDI 0403):

| Región | Dirección | Contenido |
|---|---|---|
| Código | `0x0000_0000` | Flash (o su alias de arranque) |
| SRAM | `0x2000_0000` | Datos, pila, montón |
| Periféricos | `0x4000_0000` | Registros de los periféricos |
| Bus privado | `0xE000_0000` | NVIC, SysTick, SCB (control del núcleo) |

Los **periféricos están proyectados en memoria** (*memory-mapped I/O*): configurar un
temporizador es escribir en una dirección. En C, un registro se declara con `volatile` para que
el compilador no elimine ni reordene los accesos:

```c
#define REG32(a) (*(volatile uint32_t *)(a))
#define GPIOA_ODR REG32(0x40020014u)       // dirección según el manual del dispositivo
GPIOA_ODR ^= (1u << 5);                    // invertir el pin 5 (lectura-modificación-escritura)
```

**Arranque.** Al salir del reset, el núcleo lee dos palabras de la **tabla de vectores**, que
empieza en la dirección 0 (o en la que indique el registro `VTOR`):

1. Palabra 0: el valor inicial del puntero de pila `SP`.
2. Palabra 1: la dirección del manejador de reset. Su bit 0 es 1 (modo Thumb) y no se usa como
   dirección.

La **tabla de vectores** continúa con las 15 entradas de excepciones del sistema (NMI,
HardFault, SVCall, PendSV, SysTick...) y, desde la entrada 16, una entrada de 4 bytes por cada
interrupción externa. La dirección del vector de la IRQ $n$ es

$$
\text{VTOR} + 4\,(16 + n) .
$$

El código de arranque (en ensamblador o C) debe, antes de `main`: copiar la sección `.data`
inicializada desde la Flash a la SRAM, poner a cero `.bss`, y llamar a `main`. El *linker script*
define esos símbolos. Un fallo común es olvidar uno de los dos pasos: las variables globales
aparecen con basura.

## 2. Interrupciones y excepciones

El **NVIC** gestiona hasta cientos de interrupciones con prioridad programable (menor valor =
mayor prioridad). Al aceptar una excepción, el hardware apila automáticamente ocho palabras (32
bytes) en la pila activa: `R0–R3, R12, LR, PC` y `xPSR`. La entrada tarda 12 ciclos en
un Cortex-M3/M4 sin esperas. Por eso un manejador de interrupción puede ser una función C
ordinaria: la convención de llamada (AAPCS) ya ordena que `R0–R3` y `R12` los guarde quien llama.
Al retornar, un valor especial en `LR` (`EXC_RETURN`) dispara el desapilado.

Reglas de oro:

- **Manejadores cortos**: marcar una bandera o encolar un dato y salir. El trabajo largo va en el
  bucle principal.
- **Variables compartidas** entre un manejador y `main` deben ser `volatile`, y un acceso que
  tarda más de una instrucción (una variable de 64 bits en un procesador de 32) no es atómico:
  hay que proteger la lectura con una sección crítica (deshabilitar interrupciones un instante).
- **Limpiar la bandera del periférico** dentro del manejador, o la interrupción se dispara sin
  fin.
- La inversión de prioridades y las condiciones de carrera son los fallos más difíciles de
  reproducir. Diseña pensando en ellos desde el principio.

## 3. GPIO, temporizadores y PWM

Un pin **GPIO** se configura como entrada (con o sin resistencia pull-up/pull-down), salida
*push-pull* (empuja a 0 y a 1) o *open-drain* (solo tira a 0; la resistencia externa lo sube,
imprescindible en buses compartidos como I²C). Al leer pulsadores, un **rebote** mecánico
produce decenas de milisegundos de transiciones espurias; se filtra por software (esperar a que
el valor sea estable) o con un RC.

Un **temporizador** es un contador que se incrementa a la frecuencia $f_{clk}/(\mathrm{PSC}+1)$
y vuelve a 0 al llegar a $\mathrm{ARR}$. Su frecuencia de desbordamiento es

$$
f = \frac{f_{clk}}{(\mathrm{PSC} + 1)(\mathrm{ARR} + 1)} .
$$

En modo **PWM**, la salida está en alto mientras el contador es menor que $\mathrm{CCR}$:
ciclo de trabajo $D = \mathrm{CCR}/(\mathrm{ARR} + 1)$. El valor medio de la salida es
$D\,V_{cc}$, y un motor o un LED filtran la parte rápida. Un servo de aeromodelismo espera un
pulso de 1–2 ms cada 20 ms (50 Hz). Con registros de 16 bits ($\mathrm{ARR} \le 65535$), el
prescaler debe elegirse para que $\mathrm{ARR}$ quepa, y cuanto mayor sea $\mathrm{ARR}$, mayor es
la resolución del ciclo de trabajo.

## 4. Conversor analógico-digital

Un ADC de $N$ bits con referencia $V_{ref}$ mapea $[0, V_{ref}]$ en $2^N$ códigos. Un código
vale $\mathrm{LSB} = V_{ref}/2^N$ (1 LSB = 0,806 mV para 12 bits y 3,3 V) y el error de
cuantificación es $\pm\tfrac12$ LSB. La relación señal/ruido ideal para una senoidal de fondo de
escala es $6{,}02\,N + 1{,}76$ dB. En la práctica el ruido y la no linealidad dejan unos 10–11
bits efectivos en un ADC de 12 bits. Dos técnicas útiles:

- **Promediado y sobremuestreo**: con ruido blanco no correlado, promediar $4^k$ muestras gana $k$
  bits de resolución efectiva (la desviación del ruido baja como $1/\sqrt{4^k}$).
- **Adaptación de impedancia**: el condensador de muestreo se carga a través de la impedancia de
  la fuente; si esa impedancia es alta, la lectura sale baja. La hoja de datos fija el máximo.

Y, como en [[ing-senales-sistemas]], antes de un ADC hace falta un filtro paso bajo para que
no haya aliasing.

## 5. Comunicación serie

**UART** (asíncrona, sin reloj compartido). Una trama típica es: 1 bit de inicio (0), 8 bits de
datos (el menos significativo primero), 1 bit de parada (1) = 10 bits por byte. A
115 200 baudios se transmiten 11 520 bytes/s. El receptor sincroniza en el flanco de
bajada del bit de inicio y muestrea a mitad de cada bit, de modo que el error acumulado en
9,5 bits debe quedar por debajo de medio bit: la tolerancia teórica entre ambos extremos es
$0{,}5/9{,}5 \approx 5{,}3\,\%$, y en la práctica se exige 2–3 %.

El generador de baudios de una USART con sobremuestreo ×16 divide el reloj del periférico:

$$
\text{USARTDIV} = \frac{f_{ck}}{16\cdot\text{baud}}, \qquad
\mathrm{BRR} = 16\cdot\operatorname{mant}(\text{USARTDIV}) + \operatorname{round}(16\cdot\operatorname{frac}(\text{USARTDIV})),
$$

y el baudio real es $f_{ck}/\bigl(16 \cdot \mathrm{BRR}/16\bigr)$: la fracción solo tiene 4 bits,
luego el baudio real difiere del pedido. Un error de unas centenas de ppm es muy aceptable;
decenas de miles de ppm no.

**SPI**: bus síncrono de cuatro hilos (reloj, MOSI, MISO y selección de esclavo) a varios
megahercios, full-duplex. Los cuatro **modos** combinan la polaridad del reloj en reposo
(CPOL) y la fase de muestreo (CPHA); maestro y esclavo deben coincidir.

**I²C** (NXP UM10204): dos hilos (SDA, SCL) *open-drain* con resistencias de pull-up, dirección de
7 bits, cada byte seguido de un bit de ACK. Velocidades de 100 kHz (estándar) y 400 kHz
(rápido). Las pull-ups forman con la capacitancia $C_b$ del bus un RC; el tiempo de subida del
10 % al 90 % es $t_r = 0{,}8473\,R_pC_b$ y no puede exceder 1000 ns (estándar) ni 300 ns
(rápido): eso fija la resistencia máxima. Un bus con demasiados dispositivos o cables largos
necesita pull-ups más pequeñas.

## 6. Integridad de datos: CRC

Un **CRC** de $n$ bits es el resto de dividir el mensaje, como polinomio sobre $\mathbb{F}_2$
([[mat-estructuras-algebraicas]]), por un polinomio generador de grado $n$. Detecta todos los
errores en ráfaga de longitud $\le n$ y es lineal sobre $\mathbb{F}_2$:
$\mathrm{crc}(a)\oplus\mathrm{crc}(b)\oplus\mathrm{crc}(0) = \mathrm{crc}(a\oplus b)$ para mensajes del
mismo largo. Los CRC detectan errores accidentales; **no** protegen contra un atacante (al ser
lineales, un adversario recalcula el CRC trivialmente: para eso hace falta una MAC,
[[sec-criptografia]]).

El CRC-32/MPEG-2 (polinomio $\texttt{0x04C11DB7}$, valor inicial `0xFFFFFFFF`, entrada y salida sin
reflejar, sin XOR final) es el que calculan las unidades de hardware de muchos STM32. Con la
cadena ASCII `123456789` da `0x0376E6E7`, valor de comprobación del catálogo de Greg Cook.

```c
uint32_t crc32_mpeg2(const uint8_t *p, size_t n) {
    uint32_t c = 0xFFFFFFFFu;
    while (n--) {
        c ^= (uint32_t)*p++ << 24;
        for (int k = 0; k < 8; k++)
            c = (c & 0x80000000u) ? (c << 1) ^ 0x04C11DB7u : (c << 1);
    }
    return c;
}
```

## 7. Criterio de ingeniería

- **Lee la errata y la hoja de datos**: el manual de referencia es la fuente de verdad, no un
  tutorial. Cada periférico tiene condiciones de reloj y orden de configuración.
- **Perro guardián (*watchdog*)**: un temporizador independiente que reinicia el sistema si el
  firmware no lo "acaricia" a tiempo. Es obligatorio en cualquier sistema desatendido.
- **Alimentación y desacoplo**: un condensador de 100 nF por pin de alimentación
  ([[ing-circuitos]]). La mitad de los reinicios "misteriosos" son de alimentación.
- **Depura con instrumentos**: un analizador lógico y un osciloscopio dicen la verdad de los
  buses; el depurador por SWD detiene el núcleo y deja inspeccionar registros.
- **Sin biblioteca no es mejor por sí mismo**: conocer los registros sirve para entender y
  depurar lo que hace una capa de abstracción (HAL), no para evitarla siempre.

## Reto

Calcula seis enteros, todos para un Cortex-M de la familia STM32F4.

- **a, b.** Un temporizador con reloj de 84 MHz y registros de 16 bits debe generar una señal de
  **exactamente** 50 Hz. Entre las soluciones exactas, elige la de menor prescaler (mayor
  resolución). Entrega el valor de `PSC` (a) y el de `ARR` (b) que se escriben en los registros
  (recuerda el $+1$ en ambas fórmulas).
- **c.** Una USART con sobremuestreo ×16 y reloj de periférico de 42 MHz debe funcionar a 57 600
  baudios. Valor del registro `BRR` (mantisa en los bits 15:4 y fracción en 3:0), en decimal.
  Valor de control: con 16 MHz y 9600 baudios, `BRR = 0x683`.
- **d.** Baudio **real** de esa USART con el `BRR` anterior, en milibaudios (parte entera).
- **e.** Dirección en decimal del vector de la IRQ 41 con `VTOR = 0x08010000`.
- **f.** CRC-32/MPEG-2 (el de la unidad de hardware) en decimal de los 1000 bytes
  $b_i = (37 i + 11) \bmod 256$, $i = 0,\dots,999$. Valor de control: `123456789` en ASCII da
  `0x0376E6E7`.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e-f}`
