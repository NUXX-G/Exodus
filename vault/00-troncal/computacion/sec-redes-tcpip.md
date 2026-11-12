---
id: sec-redes-tcpip
title: "Redes y pila TCP/IP: Ethernet, IPv4 e IPv6, subredes, UDP, TCP y control de congestión"
area: ciberseguridad
trunk_level: 8
prerequisites: [sys-c-fundamentos, prog-estructuras-datos]
academic_sources:
  - "Fall, K. R.; Stevens, W. R. TCP/IP Illustrated, Vol. 1: The Protocols, 2ª ed. Addison-Wesley, 2011."
  - "Tanenbaum, A. S.; Feamster, N.; Wetherall, D. Computer Networks, 6ª ed. Pearson, 2021."
  - "RFC 791: Internet Protocol. IETF, 1981. RFC 1071: Computing the Internet Checksum. IETF, 1988. RFC 1122: Requirements for Internet Hosts. IETF, 1989."
  - "RFC 9293: Transmission Control Protocol (TCP). IETF, 2022. RFC 5681: TCP Congestion Control (Allman, Paxson, Blanton). IETF, 2009."
  - "RFC 8200: Internet Protocol, Version 6 (IPv6) Specification. IETF, 2017. RFC 5952: A Recommendation for IPv6 Address Text Representation. IETF, 2010."
  - "Python Software Foundation. ipaddress — IPv4/IPv6 manipulation library (docs.python.org/3/library/ipaddress.html)."
ctf_flag: "sha256:18b15ce644f3e0e0b55adfe5607352bcf3e7be289f25ea9236bf90266a572d29"
hints:
  - "Las dos sumas usan el mismo algoritmo pero no cubren lo mismo. La de IP cubre solo los 20 bytes de su cabecera. La de TCP cubre una pseudocabecera de 12 bytes que no viaja en la trama, más la cabecera TCP, más los datos; y aquí los datos tienen longitud impar."
  - "Convierte el volcado a binario con `xxd -r -p` y trocea por desplazamientos, o impórtalo en Wireshark con `text2pcap` y activa la validación de checksums de IPv4 y TCP en las preferencias de cada protocolo para contrastar tu resultado. Con Scapy: Ether(bytes.fromhex(...)).show2() recalcula ambos campos."
  - "RFC 1071 (algoritmo y código de ejemplo). RFC 791 (formato de la cabecera IPv4 y campo Header Checksum). RFC 9293 (formato del segmento, pseudocabecera y relleno con un octeto a cero cuando la longitud es impar)."
exercises:
  - id: hosts-de-una-subred
    tier: 1
    prompt: |
      ¿Cuántas direcciones de host **utilizables** tiene una subred IPv4 `/26` (sin contar la de red ni la de difusión)? Respuesta: un entero.
    answers: ["sha256:81b8a03f97e8787c53fe1a86bda042b6f0de9b0ec9c09357e107c99ba4d6948a"]
  - id: red-y-difusion
    tier: 1
    prompt: |
      La interfaz tiene la dirección `192.168.37.200/27`. ¿Cuál es la **dirección de red** y cuál la de **difusión**? Respuesta: las dos separadas por `;`.
    answers: ["sha256:31012997ad305f0301e941aa02dc89993b9964693d295f06cd90590e8cb24162"]
  - id: orden-de-red
    tier: 1
    prompt: |
      ¿Qué dos bytes viajan por la red, en orden, para el puerto TCP `8080`? Respuesta: los dos en hexadecimal (dos dígitos, minúsculas), separados por `;`.
    answers: ["sha256:e926db737901ace903602c198f0f4d8ff5c3a5c104149212b1e5c273a8f19871"]
  - id: carga-udp-maxima
    tier: 1
    prompt: |
      Con una MTU de Ethernet de 1500 bytes, IPv4 sin opciones y UDP, ¿cuántos bytes de datos caben como máximo en un datagrama sin que haya que fragmentarlo? Respuesta: un entero.
    answers: ["sha256:e56ae9ee21661d3febabe8d1e03ee82d02466a5d405e89f2acf449cd6a6240b8"]
  - id: subredes-ipv6
    tier: 1
    prompt: |
      A una organización se le asigna el prefijo IPv6 `2001:db8::/48`. ¿Cuántas subredes `/64` puede crear? Respuesta: un entero.
    answers: ["sha256:0f255ec16482c343fd099ba9668863778be40dc166a6856b1d470e0bc97cc6fd"]
  - id: leer-una-cabecera-ip
    tier: 2
    prompt: |
      Esta es una cabecera IPv4 completa (20 bytes, en hexadecimal):

      ```text
      45 00 00 3c 1c 46 40 00 40 06 b1 e6 ac 10 0a 63 ac 10 0a 0c
      ```

      ¿Cuánto valen el **TTL**, el **protocolo** y la **longitud total**? Respuesta: los tres en decimal, separados por `;`.
    answers: ["sha256:548fc39c0203a7ba72adbb2a121ecfa15e5befa2e1842d8e5d7ab09d36bf4514"]
  - id: calcular-la-suma-ip
    tier: 2
    prompt: |
      Calcula la suma de comprobación de esta cabecera IPv4 (el campo de suma está a cero):

      ```text
      45 00 00 28 ab cd 00 00 80 11 00 00 0a 00 00 05 0a 00 00 01
      ```

      Respuesta: 4 dígitos hexadecimales en minúsculas, sin `0x`.
    answers: ["sha256:aa700adf22f871e20ba0fa66b7973dc22392bbd8762ca2dc015f01daeee2a563"]
  - id: verificar-la-suma-ip
    tier: 2
    prompt: |
      Un receptor suma en complemento a uno (con acarreo circular) las 10 palabras de 16 bits de la cabecera IPv4

      ```text
      45 00 00 3c 1c 46 40 00 40 06 b1 e6 ac 10 0a 63 ac 10 0a 0c
      ```

      **incluido** el campo de suma (`b1e6`). ¿Qué resultado obtiene si la cabecera llegó intacta? Respuesta: 4 dígitos hexadecimales en minúsculas.
    answers: ["sha256:f29a448b780745bf2e10667f46c442b102e75e76a46a1fff969641866225ab56"]
  - id: prefijo-mas-largo
    tier: 2
    prompt: |
      Un encaminador tiene la tabla `0.0.0.0/0 → eth0`, `10.0.0.0/8 → eth1`, `10.20.0.0/16 → eth2`, `10.20.30.0/24 → eth3`, `10.20.30.128/25 → eth4`. ¿Por qué interfaz salen los paquetes con destino `10.20.30.200`, `10.20.31.5`, `10.99.1.1` y `8.8.8.8`? Respuesta: las cuatro interfaces en ese orden, separadas por `;`.
    answers: ["sha256:482c6e4dcd2a02baca26a4b24e9a4611bdd3f77bccbc7e813f6697fbabdab058"]
  - id: numeros-de-secuencia
    tier: 2
    prompt: |
      En el establecimiento de una conexión TCP, el cliente elige ISN $= 1000$ y el servidor ISN $= 5000$. Tras el saludo, el cliente envía $300$ bytes y el servidor responde con $120$ bytes. ¿Qué **número de secuencia** lleva el siguiente segmento de datos del cliente y qué **número de acuse** envía el cliente tras recibir los $120$ bytes? Respuesta: los dos números separados por `;`.
    answers: ["sha256:ca1404de5967137f66fadd4182ea1b71e796c992c5963cd4094a9614653ac882"]
  - id: ventana-y-retardo
    tier: 2
    prompt: |
      Una conexión TCP con ventana de recepción fija de $65\,535$ bytes y un RTT de $40$ ms puede tener como mucho una ventana de datos en vuelo por RTT. (a) ¿Cuál es su caudal máximo, en Mbit/s ($1$ Mbit $= 10^6$ bits)? (b) Para llenar un enlace de $100$ Mbit/s con ese RTT, ¿cuántos bytes deben estar en vuelo (producto ancho de banda por retardo)? Respuesta: (a) con **2 decimales** y (b) entero, separados por `;`.
    answers: ["sha256:4f1a25667c65ba222171e427339fccbe8437b5c3fcad6c99ec8e9f40ee27ee75"]
  - id: fragmentacion-ipv4
    tier: 2
    prompt: |
      Un datagrama IPv4 de $4000$ bytes (cabecera de $20$, sin opciones) debe atravesar un enlace con MTU de $1500$. Cada fragmento lleva su cabecera de $20$ bytes y la carga de todos menos el último ha de ser múltiplo de $8$. ¿Cuántos fragmentos se generan y cuánto vale el campo **desplazamiento** (en unidades de 8 bytes) del último? Respuesta: los dos números separados por `;`.
    answers: ["sha256:9ca1f2c34c82c57bd3ed92e5d8708f146cf2f4cbf5b429c2365200ad7f367cf7"]
  - id: arranque-lento
    tier: 3
    prompt: |
      Una conexión TCP empieza con ventana de congestión $\mathrm{cwnd} = 1$ MSS y umbral $\mathrm{ssthresh} = 16$ MSS. En cada RTT sin pérdidas, si $\mathrm{cwnd} < \mathrm{ssthresh}$ se duplica (sin pasar de $\mathrm{ssthresh}$); si no, aumenta en $1$ MSS. ¿Al cabo de cuántos RTT alcanza $\mathrm{cwnd} \ge 24$ MSS? Respuesta: un entero.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: subredes-de-longitud-variable
    tier: 3
    prompt: |
      Hay que repartir `10.0.0.0/24` en cuatro subredes para $100$, $50$, $20$ y $20$ hosts, asignando de mayor a menor necesidad, cada una con el prefijo **más largo** que le baste y a partir de la primera dirección libre. ¿Qué subredes salen? Respuesta: las cuatro en notación CIDR (`a.b.c.d/n`), en ese orden, separadas por `;`.
    answers: ["sha256:0c711ced539d61a336604fd8adbdd4ce6a88156db76439daa333daef5c18c773"]
  - id: comprimir-ipv6
    tier: 3
    prompt: |
      Escribe en forma canónica (RFC 5952: minúsculas, sin ceros a la izquierda en cada grupo y `::` sustituyendo la racha **más larga** de grupos nulos, la primera si hay empate) la dirección `2001:0db8:0000:0000:0001:0000:0000:0001`. Respuesta: la dirección.
    answers: ["sha256:681a95333309b0ad8da907dd6faab5d462291f650f2a452581eaf6a3bfccd17f"]
  - id: suma-udp-con-pseudocabecera
    tier: 3
    prompt: |
      Calcula la suma de comprobación UDP de un datagrama de `192.168.0.1` a `192.168.0.199`, puerto origen $12345$, puerto destino $53$, con los $3$ bytes de datos `hi!` (ASCII). La suma cubre la pseudocabecera (IP origen, IP destino, un byte a cero, protocolo $17$ y longitud UDP), la cabecera UDP de 8 bytes (con la suma a cero) y los datos, completados con un byte a cero porque su longitud es impar. Respuesta: 4 dígitos hexadecimales en minúsculas.
    answers: ["sha256:76ed5a1c273c346310d29ae664f84c27d3bc6db8d00a89622faec560a7a3226b"]
---

# Redes y pila TCP/IP: Ethernet, IPv4 e IPv6, subredes, UDP, TCP y control de congestión

Internet funciona porque cada capa resuelve un problema ignorando cómo lo resuelven las demás: Ethernet lleva tramas por un
cable o una radio, IP lleva paquetes de una máquina a otra a través de redes distintas, TCP convierte ese servicio sin garantías
en un flujo fiable entre dos programas. Este nodo recorre la pila con el detalle que exige diagnosticar una red o auditar su
seguridad: direcciones y subredes, encaminamiento, fragmentación, IPv6, la suma de comprobación, UDP y TCP con su ventana
deslizante y su control de congestión. Al terminar debes poder leer un volcado hexadecimal de un paquete sin herramientas.

## Objetivos

Al terminar sabrás:

1. Explicar la encapsulación por capas y el orden de bytes de red.
2. Calcular red, difusión y número de hosts de un prefijo CIDR, dividir una red en subredes de tamaño variable y aplicar la
   regla del **prefijo más largo**.
3. Leer una cabecera IPv4 byte a byte, fragmentar un datagrama y escribir direcciones IPv6 en forma canónica.
4. Calcular y verificar la **suma de comprobación de Internet**, incluida la pseudocabecera de UDP y TCP.
5. Seguir los números de secuencia y acuse de una conexión TCP y calcular su caudal máximo a partir de la ventana y el RTT.
6. Simular el arranque lento y la evitación de congestión de TCP, y explicar qué protege y qué no protege cada capa.

## Qué debes dominar antes

[[sys-c-fundamentos]] (binario, hexadecimal, operaciones de bits, orden de bytes) y [[prog-estructuras-datos]] (colas, árboles).
Las potencias de dos de [[mat-numeros-naturales]].

> [!question] Test de entrada
> 1. ¿Cuánto es `0xC0` en decimal? ¿Y $2^{8}$?
> 2. ¿Qué bytes forman el número de 16 bits `0x1F90`, del más significativo al menos?
> 3. ¿Cuál es el resultado de `0b1101_0110 & 0b1111_0000`?
>
> Respuestas: $192$ y $256$; `1F` y `90`; `0b1101_0000`.

## 1. Para qué sirve

- **Administrar y diagnosticar**: «no hay conexión» se convierte en preguntas precisas (¿hay ruta?, ¿responde ARP?, ¿llega el
  SYN?, ¿se pierden paquetes?) que se contestan con `ip`, `ping`, `traceroute`, `ss` y `tcpdump`.
- **Diseñar redes**: repartir un bloque de direcciones entre departamentos, elegir prefijos, entender NAT e IPv6.
- **Rendimiento**: el caudal de una conexión TCP depende de su ventana y de su RTT; por eso una transferencia intercontinental va
  lenta aunque el enlace sea rápido.
- **Seguridad**: casi todos los ataques de red (suplantación ARP, inundación SYN, secuestro de sesiones) explotan lo que una capa
  **no** garantiza. Entenderlo es la base de la seguridad de redes ([[sec-web]], [[sec-criptografia]]).

## 2. Capas y encapsulación

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

Todos los campos de varios bytes viajan en **orden de red (big-endian)**: el byte más significativo primero, al revés que la
memoria de un x86 ([[sys-c-memoria]]). En C se convierten con `htons`/`htonl` y `ntohs`/`ntohl`.

## 3. Enlace: Ethernet y ARP

La trama Ethernet II empieza con MAC destino (6 bytes), MAC origen (6) y **EtherType** (2), que indica el protocolo encapsulado:
`0x0800` IPv4, `0x0806` ARP, `0x86DD` IPv6. La MTU estándar (carga máxima de una trama) es de 1500 bytes. Un **conmutador**
(*switch*) aprende en qué puerto está cada MAC y reenvía solo por él.

Ethernet solo entrega dentro de un mismo segmento. Para averiguar la MAC que corresponde a una IP vecina se usa **ARP**: se
pregunta por difusión «¿quién tiene 192.168.1.1?» y se guarda la respuesta en una caché. ARP **no autentica** las respuestas:
cualquier máquina del segmento puede anunciar que es la puerta de enlace y desviar el tráfico (*suplantación ARP*). Las defensas
son de la propia red (inspección ARP dinámica en los conmutadores, segmentación) y, sobre todo, cifrar extremo a extremo (TLS).

## 4. Red: IPv4

IP ofrece entrega de paquetes **sin conexión y sin garantías**: pueden perderse, duplicarse o llegar desordenados. La cabecera
mínima ocupa 20 bytes (RFC 791):

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

**Direcciones y prefijos.** Una dirección IPv4 son 32 bits, escritos como cuatro bytes en decimal. Un prefijo `a.b.c.d/n` fija los
$n$ bits altos (la **red**) y deja libres los $32 - n$ bajos (el **host**): la red contiene $2^{32-n}$ direcciones. La primera es la
**dirección de red** (bits de host a 0) y la última, la de **difusión** (bits de host a 1); el resto, $2^{32-n} - 2$, se asignan a
hosts. La **máscara** es el número con los $n$ bits altos a 1: `/24` es `255.255.255.0`. La dirección de red se obtiene con un
`AND` bit a bit entre la dirección y la máscara.

**Ejemplo resuelto 1.** `172.16.45.130/26`. El bloque es de $2^{6} = 64$ direcciones, así que las redes empiezan en múltiplos de 64
en el último byte: $130 = 2\cdot64 + 2$, luego la red es `172.16.45.128`, la difusión `172.16.45.191` y hay $62$ hosts
(`.129` a `.190`).

**Subredes de longitud variable (VLSM).** Para repartir un bloque entre redes de tamaños distintos se asigna de **mayor a menor**,
cada una con el prefijo más largo que le basta (el menor bloque con $2^{k} - 2 \ge$ hosts) y alineada a su tamaño: así no quedan
huecos. Los rangos **privados** `10.0.0.0/8`, `172.16.0.0/12` y `192.168.0.0/16` no se encaminan en Internet; las redes domésticas
los usan detrás de un **NAT**, que reescribe la dirección y el puerto de origen para compartir una única IP pública.

**Encaminamiento.** Cada encaminador tiene una tabla de prefijos con su siguiente salto. Para un destino, entre todas las entradas
cuyo prefijo coincide elige la de **prefijo más largo** (la más específica); `0.0.0.0/0` es la **ruta por defecto**, que coincide
con todo.

**Ejemplo resuelto 2.** Tabla: `0.0.0.0/0 → A`, `192.168.0.0/16 → B`, `192.168.4.0/22 → C`. Destino `192.168.5.9`: coinciden las tres
(`5` está en el bloque `4`–`7` del `/22`), gana `C`. Destino `192.168.9.1`: coinciden `/0` y `/16`, gana `B`.

**Fragmentación y MTU.** Si un datagrama no cabe en la MTU del siguiente enlace, IPv4 puede **fragmentarlo**: cada fragmento lleva
una copia de la cabecera, la misma identificación, el bit «más fragmentos» y un **desplazamiento** medido en unidades de 8 bytes
(por eso la carga de cada fragmento, salvo el último, es múltiplo de 8). Solo el destino reensambla. Fragmentar es caro y frágil (si
se pierde un fragmento se pierde todo), así que los sistemas marcan «no fragmentar» y descubren la MTU del camino.

**ICMP** transporta mensajes de control: `ping` usa *echo request/reply*; `traceroute` envía paquetes con TTL $1, 2, 3, \dots$ y cada
encaminador que descarta uno por TTL agotado responde con un ICMP *time exceeded*, revelando su dirección.

## 5. IPv6

Los $2^{32} \approx 4{,}3\cdot10^9$ direcciones de IPv4 se agotaron. IPv6 (RFC 8200) usa direcciones de **128 bits**, escritas como
ocho grupos de 16 bits en hexadecimal: `2001:0db8:0000:0000:0000:ff00:0042:8329`. La forma canónica (RFC 5952) usa minúsculas,
quita los ceros a la izquierda de cada grupo y sustituye **una** racha de grupos nulos consecutivos (la más larga; la primera si hay
empate; nunca un único grupo) por `::`: `2001:db8::ff00:42:8329`.

- Una red de área local usa un prefijo `/64`: los 64 bits bajos identifican la interfaz. Un sitio suele recibir un `/48`.
- La cabecera es fija de 40 bytes, sin suma de comprobación (la delegan en el enlace y el transporte); las opciones van en
  cabeceras de extensión. Los **encaminadores no fragmentan**: lo hace, si acaso, el origen.
- ARP se sustituye por el protocolo de descubrimiento de vecinos (sobre ICMPv6).

```python
import ipaddress

red = ipaddress.ip_network("172.16.45.130/26", strict=False)
assert str(red) == "172.16.45.128/26" and str(red.broadcast_address) == "172.16.45.191"
assert red.num_addresses - 2 == 62

assert ipaddress.ip_address("192.168.5.9") in ipaddress.ip_network("192.168.4.0/22")
assert ipaddress.ip_address("192.168.9.1") not in ipaddress.ip_network("192.168.4.0/22")

v6 = ipaddress.ip_address("2001:0db8:0000:0000:0000:ff00:0042:8329")
assert v6.compressed == "2001:db8::ff00:42:8329"
assert ipaddress.ip_address("fe80:0:0:0:1:0:0:0").compressed == "fe80::1:0:0:0"   # empate de rachas: gana la primera
```

(En el último ejemplo las rachas nulas son de 3 grupos y de 3 grupos: gana la **primera**.)

## 6. La suma de comprobación de Internet

IP, TCP, UDP e ICMP comparten algoritmo (RFC 1071). Se interpreta el bloque como una sucesión de palabras de 16 bits
$w_1, \dots, w_k$ (si la longitud es impar, se añade un byte a cero al final) y se calcula el complemento a uno de su suma en
complemento a uno:

$$
C = \lnot \Bigl( w_1 +' w_2 +' \cdots +' w_k \Bigr), \qquad
a +' b = \begin{cases} a + b & \text{si } a + b < 2^{16} \\ a + b - 2^{16} + 1 & \text{en otro caso.} \end{cases}
$$

La operación $+'$ suma con *acarreo circular*: el acarreo que sale del bit 15 vuelve a entrar por el bit 0. Es la suma módulo
$2^{16} - 1$ (con dos representaciones del cero), frente a la suma módulo $2^{16}$ de los enteros de ancho fijo
([[sys-c-fundamentos]]). El emisor calcula $C$ con el campo de suma puesto a cero y lo escribe en él.

**Proposición.** El receptor acepta el bloque si y solo si la suma $+'$ de todas sus palabras, incluido el campo de suma, es
`0xFFFF`.

*Demostración.* Sea $S$ la suma de las palabras con el campo a cero. El campo recibido vale $\lnot S = \mathtt{0xFFFF} - S$, y
$S +' (\mathtt{0xFFFF} - S) = \mathtt{0xFFFF}$ sin acarreo. $\blacksquare$

```c
#include <assert.h>
#include <stddef.h>
#include <stdint.h>

/* Suma de comprobación de Internet sobre n bytes en orden de red. */
static uint16_t inet_checksum(const uint8_t *p, size_t n) {
    uint32_t sum = 0;
    for (; n > 1; p += 2, n -= 2)
        sum += (uint32_t)p[0] << 8 | p[1];
    if (n == 1)
        sum += (uint32_t)p[0] << 8;          /* byte suelto: se completa con un cero */
    while (sum >> 16)
        sum = (sum & 0xFFFF) + (sum >> 16);  /* acarreo circular */
    return (uint16_t)~sum;
}

int main(void) {
    uint8_t h[20] = {0x45, 0x00, 0x00, 0x73, 0x00, 0x00, 0x40, 0x00, 0x40, 0x11,
                     0x00, 0x00, 0xc0, 0xa8, 0x00, 0x01, 0xc0, 0xa8, 0x00, 0xc7};
    uint16_t c = inet_checksum(h, sizeof h);
    assert(c == 0xb861);                     /* valor de control */
    h[10] = c >> 8;
    h[11] = c & 0xff;
    assert(inet_checksum(h, sizeof h) == 0); /* con el campo relleno, la suma da 0xFFFF y su complemento, 0 */
    return 0;
}
```

UDP y TCP calculan la suma sobre una **pseudocabecera** que no se transmite, seguida del segmento completo:

```text
┌────────────────────┬────────────────────┬──────┬───────────┬──────────────────────┐
│ IP origen (4)      │ IP destino (4)     │ 0x00 │ proto (1) │ longitud (2)         │
└────────────────────┴────────────────────┴──────┴───────────┴──────────────────────┘
```

donde la longitud es la de cabecera más datos del segmento. Así un segmento entregado a la máquina equivocada se descarta aunque
sus bytes estén intactos.

> [!warning] Detecta errores, no manipulaciones
> La suma es lineal y no lleva clave: quien modifica un paquete puede recalcularla. Tampoco detecta el intercambio de dos palabras
> de 16 bits. La integridad frente a un adversario exige un MAC criptográfico ([[sec-criptografia]]), como hace TLS.

## 7. Transporte: UDP

UDP (8 bytes de cabecera: puerto origen, puerto destino, longitud, suma) añade a IP solo **puertos** y suma: sin conexión, sin orden,
sin retransmisión. Cada `send` es un datagrama completo. Se usa cuando la latencia importa más que la fiabilidad o cuando la
aplicación gestiona la fiabilidad: DNS, voz y vídeo en directo, juegos, y QUIC (la base de HTTP/3), que reimplementa sobre UDP un
transporte fiable y cifrado.

## 8. Transporte: TCP

TCP construye sobre IP un **flujo de bytes fiable, ordenado y bidireccional** entre dos procesos. Una conexión se identifica por la
4-tupla (IP origen, puerto origen, IP destino, puerto destino). Cabecera mínima de 20 bytes (RFC 9293):

| Bytes | Campo | Notas |
|:---:|---|---|
| 0–1 | Puerto origen | |
| 2–3 | Puerto destino | |
| 4–7 | Número de secuencia | Posición del primer byte de datos en el flujo |
| 8–11 | Número de acuse | Siguiente byte que se espera recibir |
| 12 | Longitud de cabecera (4 bits altos) | En palabras de 32 bits |
| 13 | Flags | `0x01` FIN, `0x02` SYN, `0x04` RST, `0x08` PSH, `0x10` ACK |
| 14–15 | Ventana | Bytes que el receptor acepta (control de flujo) |
| 16–17 | Suma de comprobación | Con pseudocabecera |
| 18–19 | Puntero urgente | |

**Establecimiento en tres pasos.** Cada extremo elige un número de secuencia inicial (ISN) **impredecible** (si se pudiera adivinar,
un atacante podría inyectar segmentos en una conexión ajena). **SYN y FIN consumen un número de secuencia cada uno**; los datos,
uno por byte.

```text
Cliente                                   Servidor
   │ ── SYN        seq=x              ──▶ │
   │ ◀─ SYN+ACK    seq=y  ack=x+1     ─── │
   │ ── ACK        seq=x+1  ack=y+1   ──▶ │
```

**Ejemplo resuelto 3.** ISN del cliente $x = 200$, del servidor $y = 900$. Tras el saludo, el cliente envía 50 bytes con
`seq=201`; el servidor los confirma con `ack=251`. Si el servidor responde 30 bytes con `seq=901`, el cliente los confirma con
`ack=931`. El acuse dice «he recibido todo hasta aquí; espero este byte» (**acuse acumulativo**).

**Fiabilidad.** El emisor guarda cada segmento hasta que se confirma; si no llega el acuse en un tiempo de retransmisión (RTO,
estimado a partir del RTT medido y su variación) lo reenvía. Tres acuses duplicados seguidos indican que un segmento se perdió
pero los siguientes llegan: se retransmite sin esperar al temporizador (**retransmisión rápida**).

**Ventana deslizante y control de flujo.** El emisor puede tener en vuelo, sin confirmar, como mucho
$\min(\text{ventana anunciada por el receptor}, \text{ventana de congestión})$ bytes. Como solo se puede enviar una ventana por
RTT, el **caudal máximo** de una conexión es

$$
\text{caudal} \le \frac{\text{ventana}}{\text{RTT}} .
$$

Para aprovechar un enlace de capacidad $B$ hace falta una ventana de al menos $B\cdot\text{RTT}$, el **producto ancho de banda por
retardo**: con $1$ Gbit/s y $100$ ms son $12{,}5$ MB en vuelo. Por eso la ventana de 16 bits se amplía con la opción de **escala de
ventana**.

**Control de congestión** (RFC 5681). El emisor no conoce la capacidad de la red y la sondea con una **ventana de congestión**
$\text{cwnd}$:

- **Arranque lento**: empieza con unos pocos segmentos y, mientras $\text{cwnd} < \text{ssthresh}$, aumenta un segmento por cada
  acuse, lo que **duplica** la ventana en cada RTT (crecimiento exponencial).
- **Evitación de congestión**: por encima de $\text{ssthresh}$ crece **un segmento por RTT** (lineal).
- Ante una pérdida detectada por acuses duplicados, $\text{ssthresh} \leftarrow \text{cwnd}/2$ y la ventana se reduce a la mitad
  (**aumento aditivo, disminución multiplicativa**, AIMD); ante un vencimiento del temporizador, la ventana vuelve a empezar desde
  abajo.

AIMD hace que varias conexiones que comparten un enlace converjan a repartirlo de forma equitativa. Linux usa por defecto CUBIC,
que cambia la forma del crecimiento, y existen otros algoritmos (BBR) que estiman el ancho de banda en lugar de reaccionar a pérdidas.

**Cierre y estados.** Cada sentido se cierra con un FIN que el otro confirma. El extremo que cierra primero pasa por `TIME_WAIT`
(dos veces la vida máxima de un segmento) para que los duplicados retrasados de la conexión vieja no se confundan con una nueva.
`ss -tan` muestra el estado de cada conexión (`LISTEN`, `SYN-SENT`, `ESTAB`, `FIN-WAIT`, `TIME-WAIT`…).

## 9. Por encima: DNS

Las personas usan nombres; IP usa direcciones. **DNS** es una base de datos distribuida y jerárquica: un resolutor pregunta a los
servidores raíz por `.com`, a los de `.com` por `ejemplo.com`, y a los de `ejemplo.com` por el registro que busca (`A` para IPv4,
`AAAA` para IPv6, `MX` para correo, `CNAME` para alias). Cada respuesta lleva un **TTL** y se guarda en caché. Normalmente viaja
sobre UDP, puerto 53. Como las respuestas clásicas no van firmadas, existen DNSSEC y DNS sobre TLS o HTTPS.

## 10. Lo que cada capa no protege

| Capa | No garantiza | Ataque típico | Defensa |
|---|---|---|---|
| Enlace | autenticidad de ARP | suplantación ARP | inspección ARP, segmentación, TLS |
| Red | dirección de origen | suplantación IP, ataques reflejados | filtrado de origen en los proveedores |
| Transporte | que el SYN sea legítimo | inundación SYN (agota la cola de conexiones a medias) | *SYN cookies*, límites |
| Transporte | integridad frente a un adversario | inyección en conexiones sin cifrar | TLS (cifrado + MAC) |
| Aplicación | autenticidad de DNS | envenenamiento de caché | puertos e ID aleatorios, DNSSEC |

## 11. Herramientas

`ip addr` y `ip route` (direcciones y tabla de rutas), `ping` y `traceroute` (alcance y camino), `ss -tulpn` (conexiones y puertos a
la escucha), `dig` (consultas DNS), `tcpdump -i eth0 -nn port 80` y Wireshark (captura y disección de paquetes). Capturar tráfico
ajeno sin autorización es ilegal en la mayoría de los países: practica en tu red o en un laboratorio.

## 12. Errores típicos

- Olvidar que la dirección de red y la de difusión no son asignables (por eso $2^{h} - 2$ hosts).
- Elegir la ruta «primera» o la más general en lugar de la de **prefijo más largo**.
- Medir el desplazamiento de fragmento en bytes (va en unidades de 8).
- Olvidar que SYN y FIN consumen un número de secuencia.
- Comprimir con `::` dos rachas a la vez, o un único grupo nulo.
- Calcular la suma TCP/UDP sin pseudocabecera o sin el byte de relleno cuando la longitud es impar.
- Esperar más caudal de un enlace más rápido sin aumentar la ventana (el límite es ventana/RTT).
- Confiar en la suma de comprobación como protección de integridad.

## 13. Resumen

- Encapsulación: Ethernet (14) + IPv4 (20) + TCP (20) + datos; orden de red big-endian.
- `/n`: $2^{32-n}$ direcciones, $2^{32-n} - 2$ hosts; red = dirección AND máscara; VLSM de mayor a menor; prefijo más largo.
- Fragmentos con desplazamiento en unidades de 8 bytes; ICMP, `traceroute` por TTL; NAT; IPv6 de 128 bits y `::`.
- Suma de Internet en complemento a uno; el receptor obtiene `0xFFFF`; pseudocabecera en UDP y TCP.
- TCP: saludo en tres pasos, acuses acumulativos, caudal $\le$ ventana/RTT, producto ancho de banda por retardo, arranque lento y AIMD.

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

Disecciónala a mano: localiza cada cabecera, identifica direcciones, puertos, flags y la petición que transporta. Después calcula
los dos valores que faltan:

- **ip**: la suma de comprobación de la cabecera IPv4.
- **tcp**: la suma de comprobación del segmento TCP.

Formato de la flag, cada suma en hexadecimal, minúsculas y 4 dígitos: `EXODUS{ip-tcp}`

## Repaso: lo que debe quedarte dentro de un mes

1. Red y difusión de `a.b.c.d/n` con la máscara; $2^{32-n} - 2$ hosts; prefijo más largo.
2. La cabecera IPv4 de 20 bytes: TTL en el byte 8, protocolo en el 9 (6 TCP, 17 UDP).
3. Suma de Internet: complemento a uno con acarreo circular; pseudocabecera en UDP/TCP.
4. SYN y FIN cuentan como un byte; el acuse es «el siguiente byte que espero».
5. Caudal $\le$ ventana/RTT; arranque lento exponencial y AIMD.

## Siguiente

`sys-redes-sockets` (programar clientes y servidores sobre esta pila) y [[sec-web]] (HTTP y la seguridad de las aplicaciones web).
