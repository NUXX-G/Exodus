---
id: lab-ing-iq-demodulacion
title: "Laboratorio: de una grabación IQ al mensaje (FM de banda estrecha, AFSK a 1200 baudios, NRZI, HDLC, AX.25 y APRS)"
area: ingenieria
trunk_level: 14
kind: laboratorio
prerequisites: [ing-comunicaciones, ing-procesado-digital-senal]
academic_sources:
  - "Beech, W. A.; Nielsen, D. E.; Taylor, J. AX.25 Link Access Protocol for Amateur Packet Radio, versión 2.2. TAPR, 1998 (tramas, direcciones, campo de control y FCS); APRS Working Group. APRS Protocol Reference 1.0.1, 2000."
  - "ISO/IEC 13239:2002, procedimientos HDLC (banderas, relleno de bits y FCS de 16 bits); GNU Radio Foundation. SigMF: Signal Metadata Format Specification, versión 1.0.0."
  - "Lyons, R. G. Understanding Digital Signal Processing, 3ª ed. Prentice Hall, 2010 (señales en cuadratura y demodulación FM); Proakis, J. G.; Salehi, M. Digital Communications, 5ª ed. McGraw-Hill, 2008 (FSK no coherente)."
  - "Stewart, R. W.; Barlee, K. W.; Atkinson, D. S. W.; Crockett, L. H. Software Defined Radio using MATLAB & Simulink and the RTL-SDR. Strathclyde Academic Media, 2015."
attachments: [captura.sigmf-data, captura.sigmf-meta]
ctf_flag: "sha256:15b43316c0dfe01bfe0efce789a61d3adf2b8b6038de909b5e9b71f29bfac813"
exercises:
  - id: duracion
    tier: 1
    prompt: |
      Con los metadatos de `captura.sigmf-meta` (tipo de dato y frecuencia de muestreo) y el tamaño de `captura.sigmf-data`, ¿cuánto dura la grabación?

      Respuesta: en segundos, con **2 decimales**.
    answers: ["sha256:a9a7afe59559ffd0e4f9aa834581d5a4b1141d00a60d7dbf6daeabaeb5f5ee08"]
  - id: desplazamiento-de-la-portadora
    tier: 2
    prompt: |
      La emisora no está en el centro de la banda grabada. Estima su desplazamiento como la media de la frecuencia instantánea, (fs/2π)·arg(xₙ·x̄ₙ₋₁), en las muestras donde hay señal (no en los silencios, donde solo hay ruido).

      Respuesta: en kHz, con **1 decimal** (con signo si es negativo).
    answers: ["sha256:9dab82380f617a2f79d677356ead11ffa1b3e81d6c33a5e449d6e64059bcae1c"]
  - id: numero-de-tramas
    tier: 2
    prompt: |
      Demodula FM, separa los tonos de 1200 y 2200 Hz, recupera los bits a 1200 baudios, deshaz el NRZI y busca las tramas HDLC entre banderas `01111110` (quitando el bit de relleno). ¿Cuántas tramas AX.25 hay (con al menos 18 bytes, tengan o no la FCS correcta)?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: trama-corrupta
    tier: 3
    prompt: |
      Calcula la FCS (CRC-16 de X.25: polinomio reflejado 0x8408, valor inicial 0xFFFF, complemento final; se transmite el byte bajo primero) de cada trama. ¿Cuál no cuadra? Un receptor real la descarta en silencio.

      Respuesta: el número de trama, contando desde 1.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: bits-de-relleno
    tier: 3
    prompt: |
      ¿Cuántos bits de relleno (ceros insertados tras cinco unos seguidos) había entre las banderas de la última trama, contando también los de su FCS?

      Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: indicativo-de-origen
    tier: 2
    prompt: |
      ¿Qué indicativo (con su SSID) envía la segunda trama?

      Respuesta: como `INDICATIVO-SSID`.
    answers: ["sha256:96f0e2f98320f910adb28e37238bff60e87bffcc5b3e6f7b38fb550736d8f3a8"]
  - id: latitud
    tier: 2
    prompt: |
      La primera trama es un informe de posición APRS (`!DDMM.mmN/DDDMM.mmW…`). ¿Cuál es su latitud en grados decimales?

      Respuesta: con **4 decimales** (negativa si es sur).
    answers: ["sha256:d1ca3793dc8b4a4ad8877d887af2fffd1049f45acfe077e937b504a1910de8f1"]
hints:
  - "Las muestras IQ son la señal en banda base compleja: x = I + jQ. En FM la información está en la frecuencia instantánea, que es la derivada de la fase: f = (fs/2π)·arg(xₙ·x̄ₙ₋₁). Esa frecuencia es la portadora (el desplazamiento) más el audio, y el audio aquí son dos tonos, 1200 Hz para el 1 lógico de la línea y 2200 Hz para el 0, que cambian 1200 veces por segundo. En NRZI, un 0 es un cambio de tono y un 1 es seguir igual."
  - "En Python: np.fromfile(…, np.int8) y luego I = a[0::2], Q = a[1::2]; np.angle(x[1:] * np.conj(x[:-1])); un paso bajo; dos correladores |Σ audio·e^(−j2πft)| sobre ventanas de un bit para decidir el tono; y un reloj que se reajusta en cada cambio de tono y muestrea a mitad de bit. Las banderas HDLC son 01111110; tras cinco 1 seguidos, el transmisor inserta un 0 que hay que quitar. Los bytes van con el bit menos significativo primero. Para comprobar, remuestrea el audio a 22050 Hz y pásaselo a multimon-ng -t raw -a AFSK1200."
  - "La especificación AX.25 2.2 (capítulos 3 y 4: formato de trama, direcciones desplazadas un bit, NRZI y relleno de bits), la referencia del protocolo APRS (capítulos 5 y 8: posiciones), y Lyons para la demodulación FM con muestras en cuadratura."
---

> Un radioaficionado del club te pasa una grabación hecha con un receptor SDR barato cerca de los 144,8 MHz. Se oyen ráfagas de «pitidos» y quiere saber qué dicen. Tienes las muestras en bruto y sus
> metadatos en el formato estándar SigMF. Tu objetivo es recorrer toda la cadena de recepción, de las muestras al texto, sin más ayuda que lo que sabes de señales y protocolos.

Un receptor de radio definido por software (SDR) no demodula nada: digitaliza una banda alrededor de una frecuencia y entrega **muestras IQ** (la señal en banda base compleja). Todo lo demás es
procesamiento digital ([[ing-procesado-digital-senal]]) y conocimiento de los protocolos ([[ing-comunicaciones]]). Esta grabación contiene **APRS**, el sistema de mensajes y posiciones de los
radioaficionados: tramas **AX.25** (una variante de HDLC) moduladas en **AFSK** (dos tonos de audio, el estándar Bell 202) que a su vez modulan en **FM** de banda estrecha. Los indicativos son
ficticios (N0CALL es el indicativo de relleno habitual) y la grabación es sintética, con ruido y un error de sintonía como los de un receptor real.

## 1. Los artefactos

- **`captura.sigmf-meta`**: los metadatos en JSON. `core:datatype` = `ci8` significa enteros de 8 bits con signo, I y Q intercalados; `core:sample_rate` es la frecuencia de muestreo; `core:frequency`, la
  frecuencia a la que estaba sintonizado el receptor.
- **`captura.sigmf-data`**: las muestras.

La **flag** está en el texto de la última trama, un mensaje APRS.

## 2. La cadena de recepción

1. **Leer** las muestras y normalizarlas (dividir por 128).
2. **Encontrar la señal**: en los silencios solo hay ruido; la potencia media en ventanas cortas separa las ráfagas.
3. **Demodular FM**: la frecuencia instantánea es (fs/2π)·arg(xₙ·x̄ₙ₋₁). Su media durante las ráfagas es el **desplazamiento** de la portadora respecto al centro (el error de sintonía); restándolo y filtrando
   con un paso bajo de unos 4 kHz queda el **audio**.
4. **Demodular AFSK**: dos correladores no coherentes por los tonos de 1200 y 2200 Hz, sobre ventanas de un bit (80 muestras), dicen qué tono suena en cada instante.
5. **Recuperar el reloj**: el receptor no sabe dónde empieza cada bit; se reajusta en cada cambio de tono y toma la decisión a mitad de bit.
6. **NRZI**: un cambio de tono es un 0 y la ausencia de cambio, un 1 (así la polaridad da igual).
7. **HDLC**: las tramas van entre **banderas** `01111110`; para que esa secuencia no aparezca dentro, el emisor inserta un 0 tras cada cinco 1 seguidos (**relleno de bits**), que hay que quitar. Los
   bytes se transmiten empezando por el bit menos significativo.
8. **AX.25**: destino y origen (7 bytes cada uno: seis caracteres desplazados un bit a la izquierda y un byte con el SSID), control 0x03 (trama UI), PID 0xF0 (sin capa 3), la información y la **FCS**, un CRC-16
   que detecta los errores de transmisión.
9. **APRS**: el campo de información empieza con un identificador de tipo: `!` posición, `>` estado, `:` mensaje.

## 3. Qué deberías concluir

- Cada capa resuelve un problema concreto: la FM resiste el ruido de amplitud, el AFSK permite usar una radio de voz, el NRZI hace que la polaridad no importe, el relleno de bits garantiza transiciones (para el
  reloj) y banderas únicas, y la FCS detecta los errores. Si quitas una, el sistema falla de una forma que sabrás reconocer.
- La FCS **detecta** pero no corrige: el receptor tira las tramas malas y el emisor no se entera (en APRS no hay acuses de recibo de las posiciones). Un decodificador real, como multimon-ng, solo enseña las
  buenas; el tuyo, si lo haces bien, ve también la que llegó estropeada.
- APRS no está cifrado (en las bandas de radioaficionado está prohibido ocultar el contenido): cualquiera puede leerlo. Es un buen recordatorio de que la radio es un medio compartido.

## 4. Para ir más allá

Sustituye los correladores por un filtro y un discriminador de cruces por cero y compara la tasa de error con más ruido; añade la desacentuación (*de-emphasis*) que usan las radios reales; implementa un PLL
para el reloj; decodifica una grabación real hecha con un RTL-SDR en 144,800 MHz (los datos son públicos en aprs.fi para comprobar lo que lees); y sigue con otras modulaciones: POCSAG, ADS-B (Modo S a 1090
MHz) o los satélites meteorológicos NOAA.
