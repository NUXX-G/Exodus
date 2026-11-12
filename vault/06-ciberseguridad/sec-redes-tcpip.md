---
id: sec-redes-tcpip
title: "Redes y pila TCP/IP"
area: ciberseguridad
trunk_level: 8
prerequisites: [prog-terminal-linux-git, prog-estructuras-datos]
academic_sources:
  - "Fall, K. R.; Stevens, W. R. TCP/IP Illustrated, Vol. 1: The Protocols, 2ª ed. Addison-Wesley, 2011."
  - "Tanenbaum, A. S.; Feamster, N.; Wetherall, D. Computer Networks, 6ª ed. Pearson, 2021."
  - "RFC 791: Internet Protocol. IETF, 1981."
  - "RFC 9293: Transmission Control Protocol (TCP). IETF, 2022."
  - "RFC 1071: Computing the Internet Checksum. IETF, 1988."
  - "RFC 1122: Requirements for Internet Hosts — Communication Layers. IETF, 1989."
ctf_flag: "sha256:18b15ce644f3e0e0b55adfe5607352bcf3e7be289f25ea9236bf90266a572d29"
hints:
  - "Las dos sumas usan el mismo algoritmo pero no cubren lo mismo. La de IP cubre solo los 20 bytes de su cabecera. La de TCP cubre una pseudocabecera de 12 bytes que no viaja en la trama, más la cabecera TCP, más los datos; y aquí los datos tienen longitud impar."
  - "Convierte el volcado a binario con `xxd -r -p` y trocea por desplazamientos, o impórtalo en Wireshark con `text2pcap` y activa la validación de checksums de IPv4 y TCP en las preferencias de cada protocolo para contrastar tu resultado. Con Scapy: Ether(bytes.fromhex(...)).show2() recalcula ambos campos."
  - "RFC 1071 §1 y §4 (algoritmo y código de ejemplo). RFC 791 §3.1 (formato de cabecera y campo Header Checksum). RFC 9293 §3.1 (formato del segmento, pseudocabecera y relleno con un octeto a cero cuando la longitud es impar)."
---

# Redes y pila TCP/IP

Internet funciona porque cada capa resuelve un problema ignorando cómo lo resuelven las demás.
Este nodo recorre un paquete real byte a byte: al terminar debes poder leer un volcado
hexadecimal sin herramientas.

## 1. Capas y encapsulación

| Capa | Unidad | Identifica | Ejemplos |
|---|---|---|---|
| Aplicación | Mensaje | Recurso | HTTP, DNS, TLS |
| Transporte | Segmento / datagrama | Proceso (puerto) | TCP, UDP |
| Red | Paquete | Máquina (dirección IP) | IPv4, IPv6, ICMP |
| Enlace | Trama | Interfaz (dirección MAC) | Ethernet, 802.11 |

Cada capa trata lo que recibe de la superior como datos opacos y le antepone su propia cabecera:

```text
┌──────────────┬────────────┬────────────┬──────────────────────┐
│ Ethernet (14)│  IPv4 (20) │  TCP (20)  │  datos de aplicación │
└──────────────┴────────────┴────────────┴──────────────────────┘
```

Todos los campos de varios bytes viajan en **orden de red (big-endian)**: el byte más
significativo primero, al revés que la memoria de un x86 (ver [[sys-c-memoria]]).

## 2. Enlace: Ethernet

La trama Ethernet II empieza con MAC destino (6 bytes), MAC origen (6) y **EtherType** (2), que
indica el protocolo encapsulado: `0x0800` IPv4, `0x0806` ARP, `0x86DD` IPv6. Ethernet solo
entrega dentro de un mismo segmento; para averiguar la MAC que corresponde a una IP vecina se usa
ARP, que pregunta por difusión y cachea la respuesta sin autenticarla.

## 3. Red: IPv4

IP ofrece entrega de paquetes **sin conexión y sin garantías**: pueden perderse, duplicarse o
llegar desordenados. La cabecera mínima ocupa 20 bytes (RFC 791 §3.1):

| Bytes | Campo | Notas |
|:---:|---|---|
| 0 | Versión (4 bits) + IHL (4 bits) | IHL en palabras de 32 bits; `0x45` = IPv4, 20 bytes |
| 1 | DSCP / ECN | |
| 2–3 | Longitud total | Cabecera + datos, en bytes |
| 4–5 | Identificación | Para reensamblar fragmentos |
| 6–7 | Flags (3 bits) + desplazamiento de fragmento (13) | `0x4000` = no fragmentar |
| 8 | TTL | Se decrementa en cada salto; a 0 se descarta |
| 9 | Protocolo | 1 ICMP, 6 TCP, 17 UDP |
| 10–11 | Suma de comprobación de la cabecera | |
| 12–15 | Dirección origen | |
| 16–19 | Dirección destino | |

Un prefijo `a.b.c.d/n` fija los $n$ bits altos de la dirección; la red contiene $2^{32-n}$
direcciones. Un encaminador elige, entre las rutas cuyo prefijo coincide con el destino, la de
**prefijo más largo**.

## 4. La suma de comprobación de Internet

IP, TCP, UDP e ICMP comparten algoritmo (RFC 1071). Se interpreta el bloque como una sucesión de
palabras de 16 bits $w_1, \dots, w_k$ (si la longitud es impar, se añade un byte a cero al final)
y se calcula el complemento a uno de su suma en complemento a uno:

$$
C = \lnot \Bigl( w_1 +' w_2 +' \cdots +' w_k \Bigr), \qquad
a +' b = \begin{cases} a + b & \text{si } a + b < 2^{16} \\ a + b - 2^{16} + 1 & \text{en otro caso.} \end{cases}
$$

La operación $+'$ suma con *acarreo circular*: el acarreo que sale del bit 15 vuelve a entrar por
el bit 0. Es la suma módulo $2^{16} - 1$ (con dos representaciones del cero), frente a la suma
módulo $2^{16}$ del sumador ordinario de los enteros de ancho fijo ([[prog-pensamiento-computacional]]). El emisor calcula $C$ con el campo de
suma puesto a cero y lo escribe en él.

**Proposición.** El receptor acepta el bloque si y solo si la suma $+'$ de todas sus palabras,
incluido el campo de suma, es `0xFFFF`.

*Demostración.* Sea $S$ la suma de las palabras con el campo a cero. El campo recibido vale
$\lnot S = \mathtt{0xFFFF} - S$, y $S +' (\mathtt{0xFFFF} - S) = \mathtt{0xFFFF}$ sin acarreo.
$\blacksquare$

```c
#include <stddef.h>
#include <stdint.h>

/* Suma de comprobación de Internet sobre n bytes en orden de red. */
uint16_t inet_checksum(const uint8_t *p, size_t n) {
    uint32_t sum = 0;
    for (; n > 1; p += 2, n -= 2)
        sum += (uint32_t)p[0] << 8 | p[1];
    if (n == 1)
        sum += (uint32_t)p[0] << 8;        /* byte suelto: se completa con un cero */
    while (sum >> 16)
        sum = (sum & 0xFFFF) + (sum >> 16); /* acarreo circular */
    return (uint16_t)~sum;
}
```

Valor de control: la cabecera `45 00 00 73 00 00 40 00 40 11 00 00 c0 a8 00 01 c0 a8 00 c7`
tiene suma `b861`.

> [!warning] Detecta errores, no manipulaciones
> La suma es lineal y no lleva clave: quien modifica un paquete puede recalcularla. Tampoco
> detecta el intercambio de dos palabras de 16 bits. La integridad frente a un adversario exige
> un MAC criptográfico ([[sec-criptografia]]).

## 5. Transporte: TCP

TCP construye sobre IP un **flujo de bytes fiable, ordenado y bidireccional** entre dos procesos.
Una conexión se identifica por la 4-tupla (IP origen, puerto origen, IP destino, puerto destino).
Cabecera mínima de 20 bytes (RFC 9293 §3.1):

| Bytes | Campo | Notas |
|:---:|---|---|
| 0–1 | Puerto origen | |
| 2–3 | Puerto destino | |
| 4–7 | Número de secuencia | Posición del primer byte de datos en el flujo |
| 8–11 | Número de acuse | Siguiente byte que se espera recibir |
| 12 | Longitud de cabecera (4 bits altos) | En palabras de 32 bits |
| 13 | Flags | `0x01` FIN, `0x02` SYN, `0x04` RST, `0x08` PSH, `0x10` ACK |
| 14–15 | Ventana | Bytes que el receptor acepta (control de flujo) |
| 16–17 | Suma de comprobación | |
| 18–19 | Puntero urgente | |

La suma de TCP cubre una **pseudocabecera** que no se transmite, seguida del segmento completo:

```text
┌────────────────────┬────────────────────┬──────┬───────────┬──────────────────────┐
│ IP origen (4)      │ IP destino (4)     │ 0x00 │ proto (1) │ longitud TCP (2)     │
└────────────────────┴────────────────────┴──────┴───────────┴──────────────────────┘
```

donde la longitud TCP es la de cabecera más datos. Así un segmento entregado a la máquina
equivocada se descarta aunque sus bytes estén intactos.

**Establecimiento en tres pasos.** Cada extremo elige un número de secuencia inicial (ISN)
impredecible; SYN y FIN consumen un número de secuencia cada uno.

```text
Cliente                                   Servidor
   │ ── SYN        seq=x              ──▶ │
   │ ◀─ SYN+ACK    seq=y  ack=x+1     ─── │
   │ ── ACK        seq=x+1  ack=y+1   ──▶ │
```

La fiabilidad se obtiene con acuses acumulativos y retransmisión por temporizador; el control de
congestión ajusta la tasa de envío a partir de las pérdidas observadas. UDP, en cambio, añade a
IP solo puertos y suma: sin conexión, sin orden y sin retransmisión.

## Reto

Esta trama Ethernet se capturó con los dos campos de suma de comprobación puestos a cero.

```text
0000  52 54 00 12 34 56 02 42 ac 11 00 02 08 00 45 00
0010  00 53 1c 46 40 00 40 06 00 00 0a 0d 25 02 0a 0d
0020  25 01 c0 00 00 50 1a 2b 3c 4d 5e 6f 70 81 50 18
0030  fa f0 00 00 00 00 47 45 54 20 2f 74 72 6f 6e 63
0040  61 6c 20 48 54 54 50 2f 31 2e 31 0d 0a 48 6f 73
0050  74 3a 20 65 78 6f 64 75 73 2e 6c 61 6e 0d 0a 0d
0060  0a
```

Disecciónala a mano: localiza cada cabecera, identifica direcciones, puertos, flags y la petición
que transporta. Después calcula los dos valores que faltan:

- **ip**: la suma de comprobación de la cabecera IPv4.
- **tcp**: la suma de comprobación del segmento TCP.

Formato de la flag, cada suma en hexadecimal, minúsculas y 4 dígitos: `EXODUS{ip-tcp}`
