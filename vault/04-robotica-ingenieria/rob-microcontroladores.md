---
id: rob-microcontroladores
title: "Microcontroladores y sistemas empotrados: memoria, interrupciones, temporizadores, ADC, buses serie y CRC"
area: robotica
trunk_level: 14
prerequisites: [ing-arquitectura-computadores, ing-circuitos]
academic_sources:
  - "Yiu, J. The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors, 3ª ed. Newnes, 2013."
  - "Arm Ltd. ARMv7-M Architecture Reference Manual (ARM DDI 0403)."
  - "STMicroelectronics. RM0090: Reference manual STM32F405/415, STM32F407/417, STM32F427/437 and STM32F429/439 advanced Arm-based 32-bit MCUs."
  - "NXP Semiconductors. UM10204: I²C-bus specification and user manual, rev. 7.0, 2021."
  - "Barr, M.; Massa, A. Programming Embedded Systems, 2ª ed. O'Reilly, 2006."
  - "Cook, G. Catalogue of parametrised CRC algorithms. reveng.sourceforge.io/crc-catalogue"
ctf_flag: "sha256:cad4106f290eb5a162cc4da2ec303cafe81927b7ea12d4877de4f5f64bee3b91"
hints:
  - "(a, b) Un temporizador cuenta de 0 a ARR a la frecuencia reloj/(PSC+1), así que la frecuencia de salida es reloj/((PSC+1)(ARR+1)); busca el menor prescaler que haga entero y alcanzable el cociente. (c, d) El divisor de la USART es reloj/(16·baudios) con una parte fraccionaria de 4 bits; el baudio real sale de redondear ese divisor a múltiplos de 1/16. (e) El vector de una interrupción externa vive a 4 bytes por entrada, tras las 16 primeras entradas del sistema. (f) El CRC de hardware de estos microcontroladores es CRC-32 con polinomio 0x04C11DB7, sin reflejar y con valor inicial 0xFFFFFFFF; valídalo antes con la cadena «123456789»."
  - "Calcula (a, b) con un bucle sobre PSC y divisores enteros, (c, d) comparando también con una búsqueda exhaustiva sobre todos los valores de 16 bits del registro, (e) con aritmética de enteros en hexadecimal, y (f) con una implementación bit a bit y otra por tabla de 256 entradas: deben coincidir. Comprueba el CRC con el valor 0x0376E6E7 de la cadena «123456789» (CRC-32/MPEG-2 del catálogo de Greg Cook)."
  - "Yiu, capítulos sobre el modelo de programación, el manejo de excepciones y la tabla de vectores; Arm DDI 0403, modelo de excepciones y registro VTOR; RM0090, capítulos del temporizador (PWM) y de la USART (registro BRR); catálogo de CRC: reveng.sourceforge.io/crc-catalogue/all.htm, entrada CRC-32/MPEG-2."
exercises:
  - id: frecuencia-de-un-temporizador
    tier: 1
    prompt: |
      Un temporizador con reloj de $84$ MHz tiene `PSC = 83` y `ARR = 999`. ¿A qué frecuencia se desborda, en Hz? Respuesta: un entero.
    answers: ["sha256:40510175845988f13f6162ed8526f0b09f73384467fa855e1e79b44a56562a58"]
  - id: ciclo-de-trabajo
    tier: 1
    prompt: |
      Un PWM tiene `ARR = 999` y `CCR = 250` (salida alta mientras el contador es menor que `CCR`). ¿Qué ciclo de trabajo tiene, en %? Respuesta: un entero.
    answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
  - id: resolucion-de-un-adc
    tier: 1
    prompt: |
      Un ADC de 12 bits con $V_{ref} = 3{,}3$ V. ¿Cuánto vale 1 LSB, en mV, y qué código da una entrada de $1{,}2$ V si el conversor trunca (código $= \lfloor V\cdot2^{12}/V_{ref}\rfloor$)? Respuesta: `lsb;codigo`, el LSB con **3 decimales**.
    answers: ["sha256:cdb21d4d26d51d88088957190a7d16b8c9ef8e09ef2b3da6c25dd9c72973c4d9"]
  - id: caudal-de-una-uart
    tier: 1
    prompt: |
      A $115\,200$ baudios, ¿cuántos bytes por segundo transmite una UART con tramas 8N1 (1 inicio, 8 datos, 1 parada) y con tramas 8E2 (con paridad y 2 bits de parada)? Respuesta: `8N1;8E2`.
    answers: ["sha256:702f526dfcc9eb530e33d1085a7b9f451fc1db312ec466fe453bff249650d327"]
  - id: tabla-de-vectores
    tier: 1
    prompt: |
      En un Cortex-M con `VTOR = 0x08000000`, ¿en qué dirección está el vector de la IRQ 37? Respuesta: en hexadecimal con 8 cifras, como `0x12345678`.
    answers: ["sha256:119483c4330389d84052b24caf56c179c60f2f6ad757ddcbf4329394dc588c24"]
  - id: temporizador-exacto
    tier: 2
    prompt: |
      Con reloj de $84$ MHz y registros de 16 bits, se quiere un desbordamiento de **exactamente** $1$ kHz con el menor prescaler posible (máxima resolución). ¿Qué valores se escriben en `PSC` y `ARR`? Respuesta: `PSC;ARR`.
    answers: ["sha256:04f0f368ed575847e1c8e4cc7077eeb7663dec049f1f4e577faa66b68119de55"]
  - id: registro-de-baudios
    tier: 2
    prompt: |
      Una USART con sobremuestreo ×16 y reloj de $16$ MHz debe ir a $115\,200$ baudios. Con $\text{USARTDIV} = f_{ck}/(16\cdot\text{baud})$, `BRR` $= 16\cdot\lfloor\text{USARTDIV}\rfloor + \operatorname{round}(16\cdot\operatorname{frac})$. ¿Qué valor tiene `BRR` (en decimal) y qué error tiene el baudio real, en ppm (redondeado)? Respuesta: `BRR;ppm`.
    answers: ["sha256:87d9a3a9af3e218495c8ad4d07dc0513bb5e4ace0be5c08b116722df02ccbdd7"]
  - id: tolerancia-de-reloj-uart
    tier: 2
    prompt: |
      Una trama con bit de inicio, 8 datos y paridad se muestrea a mitad de cada bit tras sincronizarse en el flanco de inicio, y el bit de parada se muestrea a $10{,}5$ bits del flanco. ¿Qué error relativo máximo de reloj (los dos extremos sumados) se tolera antes de leer un bit equivocado? Respuesta: con **4 decimales**.
    answers: ["sha256:16c234646f06d92975ac660146464c1ba9e4e534b7b5a33fcc253bcc9dd3610e"]
  - id: pull-up-de-i2c
    tier: 2
    prompt: |
      En I²C rápido (400 kHz) el tiempo de subida entre $0{,}3V_{DD}$ y $0{,}7V_{DD}$ no puede superar $300$ ns, y para una carga RC vale $t_r = \ln\frac73\,R_pC_b \approx 0{,}8473\,R_pC_b$. Con $C_b = 200$ pF, ¿cuál es la mayor resistencia de pull-up admisible, en ohmios? Respuesta: un entero (redondeado hacia abajo).
    answers: ["sha256:753f5d07dca28b828839860b6b691eab72f41a9cc3d9cb176ef35355207494a0"]
  - id: perro-guardian
    tier: 2
    prompt: |
      Un perro guardián cuenta hacia atrás con un reloj de $32$ kHz dividido por $64$, desde una recarga de $4095$, y reinicia el sistema al pasar de $0$: $t = 64\cdot(4095 + 1)/32\,000$. ¿Cada cuánto como máximo hay que refrescarlo, en segundos? Respuesta: un número.
    answers: ["sha256:cfa9b49347c5dc5d3b32d49169a7ed900d13d69862ff5913dba3fd03e0d5ec2c"]
  - id: resolucion-del-pwm
    tier: 2
    prompt: |
      Un PWM de motor a $20$ kHz con reloj de temporizador de $84$ MHz y `PSC = 0`: ¿qué `ARR` hace falta y cuántos bits de resolución tiene el ciclo de trabajo, $\log_2(\text{ARR} + 1)$? Respuesta: `ARR;bits`, los bits con **2 decimales**.
    answers: ["sha256:c59cc86f48548dbb318b0dbe893899dd6ea4a5e3b83335b5274af0b4ee11f467"]
  - id: aritmetica-q15
    tier: 2
    prompt: |
      En formato Q15 (enteros de 16 bits que representan $x\cdot2^{15}$), ¿qué entero resulta de multiplicar $0{,}75$ por $-0{,}5$ con `(a * b) >> 15`? Respuesta: un entero.
    answers: ["sha256:2d9caa216f7f0a33c916291fd3f050350d7e6a9a4df98284062d9b5dbaab3042"]
  - id: relacion-senal-ruido-de-un-adc
    tier: 3
    prompt: |
      ¿Cuál es la relación señal/ruido de cuantificación de un ADC ideal de 12 bits con una senoidal de fondo de escala, calculada exactamente como $10\log_{10}(1{,}5\cdot4^N)$ (no con la aproximación $6{,}02N + 1{,}76$)? Respuesta: en dB, con **2 decimales**.
    answers: ["sha256:6d838a59cb214e2ba708d77f6351b00c0d21eaf6fd3593976058bb49a18c5705"]
  - id: crc-de-una-cadena
    tier: 3
    prompt: |
      Calcula el CRC-32/MPEG-2 (polinomio `0x04C11DB7`, inicial `0xFFFFFFFF`, sin reflejar, sin XOR final) de la cadena ASCII `EXODUS`. Comprueba antes tu implementación con `123456789` → `0x0376E6E7`. Respuesta: en hexadecimal con 8 cifras.
    answers: ["sha256:5b49de9de28cd5e32064f4f1ac24e0e4997bb669f69a3b8029df31030377de54"]
  - id: crc-de-un-bloque
    tier: 3
    prompt: |
      Calcula el CRC-32/MPEG-2 de los 256 bytes $0, 1, 2, \dots, 255$. Respuesta: en hexadecimal con 8 cifras.
    answers: ["sha256:68d5d7bc9196e8451b656c6fef9f81fb649d334a654d58a267f8b5aa9660435a"]
  - id: baudios-altos
    tier: 3
    prompt: |
      Con sobremuestreo ×16 y reloj de $42$ MHz, ¿qué `BRR` (decimal) se programa para $921\,600$ baudios y qué error relativo tiene el baudio real, en %? ¿Es utilizable? Respuesta: `BRR;error`, el error con **2 decimales** (con signo).
    answers: ["sha256:b882e51397c5f9927866212d951b01b2535aa494adcebf4f8ef9903672795eb5"]
---

# Microcontroladores y sistemas empotrados: memoria, interrupciones, temporizadores, ADC, buses serie y CRC

Un **microcontrolador** (MCU) integra en un solo chip un procesador, memoria (Flash para el programa, SRAM para los datos) y periféricos: puertos
digitales, temporizadores, conversores analógico-digitales, buses serie. Es lo que hay dentro de un robot, un electrodoméstico o un coche, y es lo que
el firmware controla. Programarlo *bare-metal* significa entender exactamente qué escribe tu código en qué registro, sin biblioteca intermedia. La
base conceptual está en [[ing-arquitectura-computadores]] y la eléctrica en [[ing-circuitos]]; los lazos de [[rob-control]] y la cinemática de
[[rob-cinematica]] se ejecutan aquí. Los ejemplos usan la familia Arm Cortex-M (STM32F4), la más extendida, pero las ideas valen para cualquier MCU.

## Objetivos

Al terminar sabrás:

1. Describir el mapa de memoria de un Cortex-M, el arranque desde la tabla de vectores y el acceso a periféricos con `volatile`.
2. Escribir manejadores de interrupción correctos (cortos, con variables compartidas protegidas) y calcular direcciones de vectores.
3. Configurar temporizadores y PWM (prescaler, `ARR`, `CCR`, resolución) y un perro guardián.
4. Usar un ADC: LSB, códigos, relación señal/ruido, sobremuestreo.
5. Configurar UART (registro de baudios, error, tolerancia), SPI e I²C (dimensionado de pull-ups).
6. Calcular y verificar CRC, y usar aritmética de coma fija (Q15).

## Qué debes dominar antes

[[ing-arquitectura-computadores]] (registros, memoria, buses, interrupciones), [[ing-circuitos]] (RC, transistores como interruptor) y
[[sys-c-fundamentos]] (C, operadores de bits, punteros).

> [!question] Test de entrada
> 1. ¿Cuánto vale `0x40 | (1u << 3)`?
> 2. ¿Cuántos valores distintos caben en 12 bits?
> 3. ¿Qué tiempo tarda un RC de 1 kΩ y 100 nF en llegar al 63 % de la tensión final?
>
> Respuestas: `0x48`; $4096$; $\tau = RC = 100$ μs.

## 1. Para qué sirve

- **Robótica**: lazos de control de motores (PWM y encoders), lectura de sensores (ADC, I²C, SPI), comunicación con el ordenador de a bordo.
- **Productos**: electrodomésticos, wearables, automoción, dispositivos médicos; casi todo lo que tiene un botón tiene un MCU.
- **Tiempo real**: respuesta garantizada en microsegundos, que un sistema operativo de propósito general no asegura.
- **Seguridad y fiabilidad**: perros guardianes, CRC, arranques verificados.

## 2. Memoria y arranque (Arm Cortex-M)

Un Cortex-M tiene un único espacio de direcciones de 32 bits con un reparto fijo por la arquitectura (Arm DDI 0403):

| Región | Dirección | Contenido |
|---|---|---|
| Código | `0x0000_0000` | Flash (o su alias de arranque) |
| SRAM | `0x2000_0000` | Datos, pila, montón |
| Periféricos | `0x4000_0000` | Registros de los periféricos |
| Bus privado | `0xE000_0000` | NVIC, SysTick, SCB (control del núcleo) |

Los **periféricos están proyectados en memoria**: configurar un temporizador es escribir en una dirección. En C, un registro se declara con
`volatile` para que el compilador no elimine ni reordene los accesos:

```c
#define REG32(a) (*(volatile uint32_t *)(a))
#define GPIOA_ODR REG32(0x40020014u)       // dirección según el manual del dispositivo
GPIOA_ODR ^= (1u << 5);                    // invertir el pin 5 (lectura-modificación-escritura)
```

**Arranque.** Al salir del reset, el núcleo lee dos palabras de la **tabla de vectores**, que empieza en la dirección 0 (o en la que indique `VTOR`):
la palabra 0 es el valor inicial del puntero de pila y la palabra 1, la dirección del manejador de reset (con el bit 0 a 1: modo Thumb). La tabla
continúa con las excepciones del sistema (NMI, HardFault, SVCall, PendSV, SysTick...) hasta la entrada 15 y, desde la entrada 16, una entrada de 4
bytes por cada interrupción externa:

$$
\text{dirección del vector de la IRQ } n = \text{VTOR} + 4\,(16 + n) .
$$

El código de arranque debe, antes de `main`, copiar la sección `.data` inicializada desde la Flash a la SRAM y poner a cero `.bss`; el *linker script*
define esos símbolos. Olvidar uno de los dos pasos hace que las variables globales aparezcan con basura.

## 3. Interrupciones

El **NVIC** gestiona las interrupciones con prioridad programable (menor valor = mayor prioridad). Al aceptar una excepción, el hardware apila ocho
palabras (32 bytes) en la pila activa: `R0–R3, R12, LR, PC` y `xPSR`. Por eso un manejador puede ser una función C ordinaria: la convención de llamada
(AAPCS) ya obliga a quien llama a guardar `R0–R3` y `R12`. Al retornar, un valor especial en `LR` (`EXC_RETURN`) dispara el desapilado.

Reglas de oro:

- **Manejadores cortos**: marcar una bandera o encolar un dato y salir; el trabajo largo va en el bucle principal.
- **Variables compartidas** entre un manejador y `main` deben ser `volatile`, y un acceso que tarda más de una instrucción (una variable de 64 bits en un
  procesador de 32) no es atómico: hay que leerla en una sección crítica (deshabilitar interrupciones un instante).
- **Limpiar la bandera del periférico** dentro del manejador, o la interrupción se dispara sin fin.
- La inversión de prioridades y las condiciones de carrera son los fallos más difíciles de reproducir: diséñalo pensando en ellos.

## 4. GPIO, temporizadores y PWM

Un pin **GPIO** se configura como entrada (con o sin pull-up/pull-down), salida *push-pull* (empuja a 0 y a 1) u *open-drain* (solo tira a 0; una
resistencia externa lo sube, imprescindible en buses compartidos como I²C). Un pulsador produce **rebotes** de milisegundos que se filtran por
software (esperar a que el valor sea estable) o con un RC.

Un **temporizador** es un contador que se incrementa a $f_{clk}/(\mathrm{PSC} + 1)$ y vuelve a 0 al pasar de $\mathrm{ARR}$:

$$
f = \frac{f_{clk}}{(\mathrm{PSC} + 1)(\mathrm{ARR} + 1)} .
$$

En modo **PWM**, la salida está en alto mientras el contador es menor que $\mathrm{CCR}$: ciclo de trabajo $D = \mathrm{CCR}/(\mathrm{ARR} + 1)$, con $\mathrm{ARR} + 1$ niveles posibles
($\log_2(\mathrm{ARR} + 1)$ bits de resolución). Un motor o un LED filtran la parte rápida y ven el valor medio $D\,V_{cc}$. Un servo de aeromodelismo espera
un pulso de 1–2 ms cada 20 ms (50 Hz). Con registros de 16 bits, el prescaler debe elegirse para que $\mathrm{ARR}$ quepa, y cuanto menor sea el prescaler,
mayor la resolución.

> [!example] Ejemplo resuelto 1: un PWM para un servo
> Reloj de $84$ MHz, $50$ Hz exactos: $(\mathrm{PSC} + 1)(\mathrm{ARR} + 1) = 1\,680\,000$. Con $\mathrm{PSC} = 0$ haría falta $\mathrm{ARR} + 1 = 1\,680\,000 > 65\,536$. El menor $\mathrm{PSC} + 1$ que
> divide a $1\,680\,000$ y deja $\mathrm{ARR} + 1 \le 65\,536$ es el primer divisor mayor o igual que $25{,}6$. Encuéntralo tú: es el apartado (a, b) del reto. Con
> $\mathrm{PSC} = 83$ (contador a $1$ MHz) y $\mathrm{ARR} = 19\,999$ también salen $50$ Hz, y entonces $\mathrm{CCR}$ en microsegundos es directamente el ancho del pulso: $1500$ para el centro.

**Perro guardián (*watchdog*).** Un temporizador independiente que reinicia el sistema si el firmware no lo refresca a tiempo; su periodo es
$\text{divisor}\cdot(\text{recarga} + 1)/f_{\text{osc}}$. Es obligatorio en cualquier sistema desatendido.

## 5. Conversor analógico-digital

Un ADC de $N$ bits con referencia $V_{ref}$ mapea $[0, V_{ref}]$ en $2^N$ códigos. Un código vale $\mathrm{LSB} = V_{ref}/2^N$ ($0{,}806$ mV para 12 bits y $3{,}3$ V) y el
error de cuantificación de un conversor ideal es como mucho medio LSB. Con una senoidal de fondo de escala, la relación señal/ruido de
cuantificación es exactamente $10\log_{10}(1{,}5\cdot4^N)$ dB, la conocida $6{,}02N + 1{,}76$ dB. En la práctica el ruido y la no linealidad dejan unos 10–11
bits efectivos en un ADC de 12 bits. Dos técnicas útiles:

- **Promediado y sobremuestreo**: con ruido blanco suficiente, promediar $4^k$ muestras gana $k$ bits de resolución efectiva, a costa de dividir por $4^k$
  la frecuencia de salida.
- **Impedancia de la fuente**: el condensador de muestreo se carga a través de ella; si es alta, la lectura sale baja. La hoja de datos fija el máximo.

Como en [[ing-senales-sistemas]], antes de un ADC hace falta un filtro paso bajo para que no haya solapamiento.

## 6. Comunicación serie

**UART** (asíncrona, sin reloj compartido). Una trama típica 8N1 es: 1 bit de inicio (0), 8 de datos (el menos significativo primero) y 1 de parada (1),
10 bits por byte: a $115\,200$ baudios, $11\,520$ bytes/s. El receptor se sincroniza en el flanco de bajada del inicio y muestrea a mitad de cada bit, de
modo que el error acumulado hasta el último muestreo (a $9{,}5$ bits en 8N1) debe quedar por debajo de medio bit: tolerancia teórica
$0{,}5/9{,}5 \approx 5{,}3\,\%$ entre ambos extremos; en la práctica se exige 2–3 %.

El generador de baudios de una USART con sobremuestreo ×16 divide el reloj del periférico (RM0090):

$$
\text{USARTDIV} = \frac{f_{ck}}{16\cdot\text{baud}}, \qquad \mathrm{BRR} = 16\cdot\lfloor\text{USARTDIV}\rfloor + \operatorname{round}\bigl(16\cdot\operatorname{frac}(\text{USARTDIV})\bigr),
$$

y el baudio real es $f_{ck}/\mathrm{BRR}$ (la fracción solo tiene 4 bits, luego difiere del pedido). Unas centenas de ppm son aceptables; un error del orden del
1 % ya come buena parte del margen.

> [!example] Ejemplo resuelto 2: 9600 baudios con 16 MHz
> $\text{USARTDIV} = 16\cdot10^6/(16\cdot9600) = 104{,}1667$: mantisa $104$, fracción $\operatorname{round}(16\cdot0{,}1667) = 3$, $\mathrm{BRR} = 104\cdot16 + 3 = 1667 = $ `0x683`. El baudio
> real es $16\cdot10^6/1667 = 9598{,}08$: un error de $-200$ ppm. Calcula tú el caso de $115\,200$ baudios con el mismo reloj.

**SPI**: bus síncrono de cuatro hilos (reloj, MOSI, MISO y selección de esclavo) a varios megahercios, *full-duplex*. Los cuatro **modos** combinan la
polaridad del reloj en reposo (CPOL) y la fase de muestreo (CPHA); maestro y esclavo deben coincidir.

**I²C** (NXP UM10204): dos hilos (SDA, SCL) *open-drain* con resistencias de pull-up, direcciones de 7 bits, cada byte seguido de un bit de ACK; 100 kHz
(estándar) y 400 kHz (rápido). Las pull-ups forman con la capacidad $C_b$ del bus un RC. El tiempo de subida se mide entre los umbrales $0{,}3V_{DD}$ y
$0{,}7V_{DD}$, de modo que $t_r = R_pC_b\ln\frac{1 - 0{,}3}{1 - 0{,}7} = \ln\frac73\,R_pC_b \approx 0{,}8473\,R_pC_b$, y no puede pasar de $1000$ ns (estándar) ni de $300$ ns (rápido): eso fija la
resistencia máxima. Un bus con muchos dispositivos o cables largos necesita pull-ups más pequeñas (y la corriente de salida fija la mínima).

## 7. Integridad de datos: CRC

Un **CRC** de $n$ bits es el resto de dividir el mensaje, como polinomio sobre $\mathbb F_2$ ([[mat-estructuras-algebraicas]]), por un polinomio generador de
grado $n$. Detecta todos los errores en ráfaga de longitud $\le n$ y es lineal sobre $\mathbb F_2$: $\mathrm{crc}(a)\oplus\mathrm{crc}(b)\oplus\mathrm{crc}(0) = \mathrm{crc}(a\oplus b)$ para mensajes
del mismo largo. Por eso detecta errores accidentales pero **no** protege contra un atacante: para eso hace falta una MAC ([[sec-criptografia]]).

El CRC-32/MPEG-2 (polinomio `0x04C11DB7`, inicial `0xFFFFFFFF`, sin reflejar, sin XOR final) es el que calculan las unidades de hardware de muchos STM32.
Con la cadena ASCII `123456789` da `0x0376E6E7`, el valor de comprobación del catálogo de Greg Cook. La versión por tabla procesa un byte por paso
con una tabla de 256 entradas precalculada: ocho veces menos iteraciones a cambio de 1 KiB de Flash.

**Coma fija.** Muchos MCU no tienen unidad de coma flotante, o se evita en los manejadores. En formato **Q15** un entero de 16 bits $a$ representa
$a/2^{15} \in [-1, 1)$; el producto de dos Q15 es `(a * b) >> 15` (con el producto en 32 bits) y hay que vigilar la saturación de $-1\cdot-1$.

## 8. Comprobar con un programa

Este programa C contrasta las fórmulas con búsquedas exhaustivas y dos implementaciones independientes. Se compila y ejecuta igual en el PC
(`gcc -std=c17 -Wall`) que, sin el `printf`, en el MCU.

```c
#include <assert.h>
#include <stdint.h>
#include <stdio.h>

static uint32_t crc_bits(const uint8_t *p, int n) {
    uint32_t c = 0xFFFFFFFFu;
    while (n--) {
        c ^= (uint32_t)*p++ << 24;
        for (int k = 0; k < 8; k++)
            c = (c & 0x80000000u) ? (c << 1) ^ 0x04C11DB7u : (c << 1);
    }
    return c;
}

static uint32_t tabla[256];
static void crc_init(void) {
    for (uint32_t i = 0; i < 256; i++) {
        uint32_t c = i << 24;
        for (int k = 0; k < 8; k++)
            c = (c & 0x80000000u) ? (c << 1) ^ 0x04C11DB7u : (c << 1);
        tabla[i] = c;
    }
}
static uint32_t crc_tabla(const uint8_t *p, int n) {
    uint32_t c = 0xFFFFFFFFu;
    while (n--) c = (c << 8) ^ tabla[((c >> 24) ^ *p++) & 0xFFu];
    return c;
}

static uint32_t brr(double fck, double baud) {
    double div = fck / (16.0 * baud);
    uint32_t m = (uint32_t)div, f = (uint32_t)(16.0 * (div - m) + 0.5);
    if (f == 16) { m++; f = 0; }
    return 16 * m + f;
}

int main(void) {
    /* CRC: valor de comprobación del catálogo y coincidencia bit a bit / tabla. */
    const uint8_t prueba[] = "123456789";
    crc_init();
    assert(crc_bits(prueba, 9) == 0x0376E6E7u && crc_tabla(prueba, 9) == 0x0376E6E7u);
    uint8_t bloque[256];
    for (int i = 0; i < 256; i++) bloque[i] = (uint8_t)(i * 13 + 7);
    assert(crc_bits(bloque, 256) == crc_tabla(bloque, 256));

    /* BRR: fórmula frente a búsqueda exhaustiva del registro de menor error (16 MHz, 9600 baudios). */
    uint32_t b = brr(16e6, 9600), mejor = 16;
    for (uint32_t v = 16; v < 65536; v++) {
        double e1 = 16e6 / v - 9600, e2 = 16e6 / mejor - 9600;
        if ((e1 < 0 ? -e1 : e1) < (e2 < 0 ? -e2 : e2)) mejor = v;
    }
    assert(b == 0x683 && mejor == b);

    /* Temporizador: 50 Hz con PSC = 83 y ARR = 19999, contando ciclos. */
    unsigned long ciclos = 0;
    for (unsigned psc = 0, cnt = 0, des = 0; des < 1; ciclos++)
        if (++psc > 83) { psc = 0; if (++cnt > 19999) { cnt = 0; des++; } }
    assert(84000000UL / ciclos == 50);

    /* Vector de la IRQ 7 con VTOR = 0x08010000 y Q15: 0,5 · 0,5 = 0,25. */
    uint32_t vtor = 0x08010000u;
    assert(vtor + 4u * (16u + 7u) == 0x0801005Cu);
    int16_t a = 16384, c = 16384;
    assert((int16_t)(((int32_t)a * c) >> 15) == 8192);
    printf("CRC-32/MPEG-2(\"123456789\") = 0x%08X, BRR(9600 @ 16 MHz) = 0x%X\n",
           (unsigned)crc_tabla(prueba, 9), (unsigned)b);
    return 0;
}
```

## 9. Errores típicos

- Olvidar el $+1$ de `PSC` o de `ARR`, o elegir un prescaler que desperdicia resolución.
- Acceder a registros sin `volatile`, o compartir variables con un manejador sin `volatile` ni sección crítica.
- No limpiar la bandera de la interrupción, o hacer trabajo largo (o `printf`) dentro del manejador.
- Olvidar copiar `.data` o poner a cero `.bss` en el arranque propio.
- Calcular `BRR` con el reloj equivocado (cada bus tiene el suyo) o ignorar el error del baudio real.
- Dimensionar las pull-ups de I²C sin mirar la capacidad del bus.
- Usar un CRC como protección contra manipulaciones.
- Multiplicar en Q15 sin pasar a 32 bits o sin saturar.

## 10. Resumen

- Cortex-M: mapa de memoria fijo, periféricos proyectados en memoria, tabla de vectores ($\text{VTOR} + 4(16 + n)$), arranque con `.data` y `.bss`.
- Interrupciones: apilado automático de 8 palabras; manejadores cortos; `volatile`; secciones críticas.
- Temporizador $f = f_{clk}/((\mathrm{PSC} + 1)(\mathrm{ARR} + 1))$; PWM $D = \mathrm{CCR}/(\mathrm{ARR} + 1)$; perro guardián.
- ADC: LSB $= V_{ref}/2^N$; SNR $= 10\log_{10}(1{,}5\cdot4^N)$; sobremuestreo $4^k$ por $k$ bits.
- UART: tramas, `BRR`, error y tolerancia; SPI y sus modos; I²C con $t_r = \ln\frac73\,R_pC_b$.
- CRC-32/MPEG-2 bit a bit y por tabla, lineal; Q15 con `(a * b) >> 15`.

## Reto

Calcula seis enteros, todos para un Cortex-M de la familia STM32F4.

- **a, b.** Un temporizador con reloj de 84 MHz y registros de 16 bits debe generar una señal de **exactamente** 50 Hz. Entre las soluciones exactas,
  elige la de menor prescaler (mayor resolución). Entrega el valor de `PSC` (a) y el de `ARR` (b) que se escriben en los registros (recuerda el $+1$ en
  ambas fórmulas).
- **c.** Una USART con sobremuestreo ×16 y reloj de periférico de 42 MHz debe funcionar a 57 600 baudios. Valor del registro `BRR` (mantisa en los bits
  15:4 y fracción en 3:0), en decimal. Valor de control: con 16 MHz y 9600 baudios, `BRR = 0x683`.
- **d.** Baudio **real** de esa USART con el `BRR` anterior, en milibaudios (parte entera).
- **e.** Dirección en decimal del vector de la IRQ 41 con `VTOR = 0x08010000`.
- **f.** CRC-32/MPEG-2 (el de la unidad de hardware) en decimal de los 1000 bytes $b_i = (37i + 11) \bmod 256$, $i = 0, \dots, 999$. Valor de control: `123456789`
  en ASCII da `0x0376E6E7`.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e-f}`

## Repaso: lo que debe quedarte dentro de un mes

1. Un periférico es una dirección de memoria: `volatile` y el manual de referencia.
2. Manejadores cortos, banderas limpias y datos compartidos protegidos.
3. Frecuencia del temporizador: reloj entre $(\mathrm{PSC} + 1)(\mathrm{ARR} + 1)$.
4. El baudio real no es el pedido: calcula el error.
5. Un CRC detecta accidentes, no ataques; compruébalo siempre con su valor de control.

## Siguiente

En las ramas: `rob-sensores-actuadores` (encoders, IMU, drivers de motor), `sys-ensamblador-arm` (el mismo núcleo desde el ensamblador),
sistemas operativos de tiempo real y `ing-pcb-diseno` para llevar el circuito a una placa.
