---
id: sec-seguridad-redes
title: "Seguridad de redes: modelo de atacante por capas, ARP, VLAN y 802.1X, Wi-Fi, IP y TCP, DNS y DNSSEC, BGP y RPKI, cortafuegos y segmentación, VPN, denegación de servicio y detección"
area: ciberseguridad
trunk_level: 15
prerequisites: [sec-redes-tcpip, sec-criptografia-aplicada, lab-sec-captura-red]
academic_sources:
  - "Rossow, C.; Jha, S. Network Security Knowledge Area, v2.0.0. CyBOK, 2021; Kurose, J. F.; Ross, K. W. Computer Networking: A Top-Down Approach, 8ª ed. Pearson, 2021 (cap. 8)."
  - "RFC 4033-4035 (DNSSEC), RFC 6811 (validación del origen BGP con RPKI), RFC 4987 (ataques de inundación SYN y defensas), RFC 2827/BCP 38 (filtrado de entrada); Donenfeld, J. A. WireGuard: Next Generation Kernel Network Tunnel. NDSS 2017."
  - "CISA, alerta TA14-017A (ataques de amplificación por UDP); documentación del núcleo Linux, ip-sysctl (tcp_synack_retries, tcp_syncookies); consultadas en noviembre de 2026."
  - "IEEE 802.1Q, 802.1X y 802.11 (WPA2, WPA3-SAE); Kaminsky, D. (2008) y Man, K. et al. DNS Cache Poisoning Attack Reloaded (SAD DNS). ACM CCS 2020."
exercises:
  - id: subred
    tier: 1
    prompt: |
      Para la dirección 10.20.30.40/27, ¿cuál es la dirección de red, la de difusión y cuántos equipos caben?

      Respuesta: `red;difusion;equipos`.
    answers: ["sha256:1eadbbc14d9703d6e0e6ec89a7bd30f61e47c300311609dffa87b6901479c502"]
  - id: reglas-de-cortafuegos
    tier: 2
    prompt: |
      Un cortafuegos con política DROP aplica en orden (primera coincidencia): 1) aceptar lo establecido o relacionado; 2) TCP al 22 desde 192.0.2.0/24; 3) TCP al 80 o al 443 desde cualquier sitio; 4) UDP al 53 desde 10.0.0.0/8. ¿Qué conexiones **nuevas** pasan? a) TCP 198.51.100.7 → 22; b) TCP 192.0.2.50 → 22; c) UDP 10.1.2.3 → 53; d) TCP 203.0.113.9 → 8080; e) TCP 203.0.113.9 → 443; f) UDP 198.51.100.7 → 53.

      Respuesta: las letras en orden, separadas por espacios.
    answers: ["sha256:3f5319c51e359ee04fabcbf3a1f8dcd9c9ed613ac5b89e389fc1f7708274b550"]
  - id: envenenamiento-dns
    tier: 3
    prompt: |
      Un atacante a ciegas envía 100 respuestas falsas en cada carrera contra un resolutor. ¿Cuántas carreras necesita para tener al menos un 50 % de éxito si solo debe acertar el identificador de 16 bits, y cuántas si además el resolutor elige al azar el puerto de origen (unos 16 bits más, 2³² combinaciones)?

      Respuesta: `solo_id;con_puerto`.
    answers: ["sha256:aaf3186140103ba0ff1ef6db41d2d991d1ed0a4ae78668d512b65e1079f3bc30"]
  - id: amplificacion
    tier: 2
    prompt: |
      Según la alerta TA14-017A de CISA, ¿qué factor de amplificación de ancho de banda tiene NTP con la orden `monlist`, y cuántos Gbit/s recibe la víctima si el atacante envía 100 Mbit/s de peticiones con la dirección falsificada?

      Respuesta: `factor;Gbit/s` (el factor como lo da CISA y los Gbit/s con 2 decimales).
    answers: ["sha256:ff4413893d4ae9a5ddff18633381bc3734bf52bf2ce5ad435dd5718bde5d0f99"]
  - id: cola-de-syn
    tier: 2
    prompt: |
      En Linux, con `tcp_synack_retries = 5` y un RTO inicial de 1 s que se duplica, ¿cuántos segundos ocupa una conexión a medio abrir la cola de SYN antes de descartarse?

      Respuesta: un número.
    answers: ["sha256:da4ea2a5506f2693eae190d9360a1f31793c98a1adade51d93533a6f520ace1c"]
  - id: suplantacion-arp
    tier: 1
    prompt: |
      La tabla ARP de un equipo antes: 192.168.1.1 → 00:11:22:33:44:01, 192.168.1.23 → 3c:22:fb:10:aa:23, 192.168.1.40 → 3c:22:fb:10:aa:40. Después: 192.168.1.1 → 3c:22:fb:10:aa:40, 192.168.1.23 → 3c:22:fb:10:aa:23, 192.168.1.40 → 3c:22:fb:10:aa:40. ¿Qué entrada ha cambiado y qué equipo se está haciendo pasar por ella?

      Respuesta: `ip_suplantada;ip_atacante`.
    answers: ["sha256:cd9e2205ce096baa5d22d177b344213dab00083767d39a0e76267a539a2bf36a"]
  - id: wpa2-psk
    tier: 3
    prompt: |
      En WPA2-Personal, la clave maestra (PMK) es PBKDF2-HMAC-SHA1(frase, SSID, 4096 iteraciones, 32 bytes). Por eso quien captura el saludo de 4 vías puede probar frases sin conexión. Con SSID `Exodus-Lab` y frase `correcto caballo bateria grapa`, ¿cuáles son los primeros 8 bytes de la PMK? (Compruébalo con `wpa_passphrase`.)

      Respuesta: 16 cifras hexadecimales.
    answers: ["sha256:8058d09d980afa3b4d24b2918428d652c142e16a44478af5af398c4ac551ae8f"]
  - id: patron-noise-de-wireguard
    tier: 1
    prompt: |
      WireGuard usa el marco Noise. ¿Qué patrón de saludo (el nombre corto, como `XX` o `NK`) y con qué modificador de clave precompartida?

      Respuesta: el patrón con el modificador, todo junto (por ejemplo `XXpsk3`).
    answers: ["sha256:b2739bc9e49a38094e13d5070d83fc1ab6596925469abd88f83c272872e71b31"]
  - id: dnssec-ds
    tier: 3
    prompt: |
      Con el registro `exodus.test. IN DNSKEY 257 3 13 4ifrIuhy8QIkCnt3kgkJvGD3fiktqTr2qpPBgR50FQdH+UkpJ/FeCZ9j xg6fWxZ1/NRMq3V0a2nYx0xrlqmmMA==`, ¿qué etiqueta de clave (RFC 4034, apéndice B) tiene, y cuáles son las primeras 16 cifras hexadecimales de su registro DS con SHA-256 (resumen del nombre del propietario en formato de cable seguido del RDATA del DNSKEY)?

      Respuesta: `etiqueta;cifras`.
    answers: ["sha256:d32567ed51a775593bbf0b1a42bdaa727822ee67415567482423a196053da302"]
  - id: validacion-de-origen-rpki
    tier: 2
    prompt: |
      ROA publicados: 203.0.112.0/22 con longitud máxima 23 para el AS64500, y 198.51.100.0/24 (máximo 24) para el AS64501. ¿Qué estado (RFC 6811) tienen estos anuncios? a) 203.0.112.0/23 desde AS64500; b) 203.0.113.0/24 desde AS64500; c) 203.0.113.128/25 desde AS64666; d) 192.0.2.0/24 desde AS64500.

      Respuesta: `valid`, `invalid` o `notfound` para cada uno, separados por espacios.
    answers: ["sha256:485b761503ffb90b1ea6775d71b15696eb3e1a79773c66bf5f533e6147816913"]
  - id: eui-64
    tier: 2
    prompt: |
      Un equipo forma su dirección IPv6 con SLAAC y EUI-64 a partir de la MAC 00:1a:2b:3c:4d:5e. ¿Qué identificador de interfaz (los 64 bits bajos) obtiene? Por eso existen las direcciones temporales de privacidad.

      Respuesta: cuatro grupos de 4 cifras hexadecimales separados por `:`.
    answers: ["sha256:7c5f898d3dfc0e363d77a669580ddd13caa2b984bc8463fe8e2b8ea0be7a2e6d"]
  - id: vlan-802-1q
    tier: 1
    prompt: |
      La etiqueta 802.1Q lleva un identificador de VLAN de 12 bits, con dos valores reservados. ¿Cuántas VLAN se pueden usar?

      Respuesta: un número.
    answers: ["sha256:f766456ab1966f4b9c028e70359665b449d0fdaf55da737d43f2b2315bd277ec"]
  - id: deteccion-de-escaneos
    tier: 2
    prompt: |
      Conexiones (segundo, origen, puerto): 0 198.51.100.20 443; 0.4 203.0.113.66 21; 0.9 203.0.113.66 22; 1.3 198.51.100.20 443; 2 203.0.113.66 23; 2.2 192.0.2.14 80; 3.1 203.0.113.66 25; 4 192.0.2.14 81; 5.5 192.0.2.14 82; 8 192.0.2.14 83; 9.9 203.0.113.66 80; 12.5 192.0.2.14 84; 14 198.51.100.20 8443. La regla es «5 o más puertos distintos desde la misma IP en una ventana de 10 s». ¿Qué IP detecta?

      Respuesta: las IP en orden, separadas por espacios.
    answers: ["sha256:a6353bfbe92ae34a8544b367820743d0175595f96dcad8b904c39583f24c3eec"]
  - id: secuestro-bgp
    tier: 2
    prompt: |
      El AS64500 anuncia 203.0.112.0/22 y un atacante (AS64666) anuncia 203.0.113.0/24. Sin validación de origen, ¿a qué AS llega el tráfico hacia 203.0.113.77 y hacia 203.0.114.5?

      Respuesta: `primero;segundo` (solo los números de AS).
    answers: ["sha256:0bde91f17ff299260d2c8770ef64a302a4ac1fe5a2d8edcf8970c7c5b58445c5"]
  - id: algoritmos-dnssec
    tier: 1
    prompt: |
      En los registros de IANA, ¿qué número de algoritmo DNSSEC corresponde a ECDSA P-256 con SHA-256 y qué tipo de resumen DS a SHA-256?

      Respuesta: `algoritmo;resumen`.
    answers: ["sha256:13c87f0d495a3ecf147ee27c8816304b160b5c399b2b5ed2c061832ec66fe361"]
---

Los protocolos de Internet se diseñaron entre máquinas que confiaban unas en otras: ARP cree cualquier respuesta, IP no comprueba el origen, DNS aceptaba la primera respuesta que acertara un número de 16
bits y BGP anuncia rutas sin demostrar que son suyas. Casi toda la seguridad de redes consiste en **añadir después** lo que faltaba (autenticación, filtrado, cifrado, detección) sin romper lo que funciona.
Este nodo recorre las capas desde el punto de vista de quien defiende una red: qué puede hacer un atacante en cada posición, qué mecanismo lo impide y cómo se ve en una captura. Se apoya en [[sec-redes-tcpip]],
en [[sec-criptografia-aplicada]] (TLS, claves) y en lo que analizaste en [[lab-sec-captura-red]].

## Objetivos

Al terminar sabrás:

1. Situar al atacante (en la misma red local, en el camino, fuera del camino) y deducir qué puede hacer en cada caso.
2. Proteger el enlace: ARP, VLAN, 802.1X, Wi-Fi (WPA2 frente a WPA3).
3. Entender los fallos de IP, TCP, DNS y BGP y sus defensas: filtrado de entrada, SYN cookies, aleatorizar puertos, DNSSEC, RPKI.
4. Diseñar y auditar cortafuegos, segmentación y VPN.
5. Dimensionar y mitigar la denegación de servicio, y detectar actividad maliciosa en el tráfico.

## Qué debes dominar antes

[[sec-redes-tcpip]] (capas, direccionamiento, TCP, DNS, enrutamiento), [[sec-criptografia-aplicada]] (TLS 1.3, Noise, firmas) y [[lab-sec-captura-red]] (leer una captura).

> [!question] Test de entrada
> 1. ¿Qué hace ARP?
> 2. ¿Por qué una respuesta UDP se puede falsificar más fácilmente que un segmento de una conexión TCP ya abierta?
> 3. ¿Qué diferencia a un ataque de alguien "en el camino" de uno "fuera del camino"?
>
> Respuestas: traduce direcciones IP de la red local a direcciones MAC preguntando por difusión; porque UDP no tiene estado ni números de secuencia que adivinar: basta acertar puertos (y, en DNS, el
> identificador); el primero ve y puede modificar los paquetes (un router comprometido, una Wi-Fi abierta), el segundo solo puede inyectar paquetes a ciegas con direcciones falsas.

## 1. Modelos de atacante

- **En la red local** (mismo segmento o Wi-Fi): suplanta ARP o DHCP, escucha, se pone en medio.
- **En el camino** (un proveedor, un router comprometido, un Estado): ve y modifica todo lo que no vaya cifrado y autenticado de extremo a extremo. Solo la criptografía protege aquí.
- **Fuera del camino**: solo inyecta paquetes con origen falso y debe **adivinar** lo que no ve (números de secuencia, puertos, identificadores). Las defensas añaden entropía que adivinar o
  comprobaciones de origen.
- **Volumétrico**: no necesita entrar en ningún sitio, solo saturar.

## 2. El enlace: ARP, VLAN, 802.1X y Wi-Fi

**ARP** acepta respuestas no pedidas: un equipo anuncia "la IP del router está en mi MAC" y recibe todo el tráfico de salida (envenenamiento ARP; herramientas como `arpspoof` o Bettercap). Se ve en la
tabla ARP cuando una IP cambia de MAC y esa MAC ya pertenecía a otro equipo. Defensas: **inspección dinámica de ARP** en el conmutador (compara con la tabla de *DHCP snooping*), entradas estáticas para
el router en equipos críticos, y cifrado de extremo a extremo para que ponerse en medio no sirva. DHCP tiene el mismo problema (un servidor DHCP falso da su propia puerta de enlace y su DNS): *DHCP
snooping* solo deja responder a los puertos de confianza.

**VLAN** (802.1Q): una etiqueta de 4 bytes con un identificador de 12 bits separa redes lógicas en el mismo conmutador. No es una frontera fuerte si se configura mal (puertos troncales negociados
automáticamente con DTP, doble etiquetado con la VLAN nativa): los puertos de acceso se fijan, la VLAN nativa no se usa para nada. **802.1X** autentica cada puerto (o cada equipo Wi-Fi) contra un
servidor RADIUS antes de darle red, con EAP-TLS (certificados) como opción robusta.

**Wi-Fi**: en **WPA2-Personal** la clave maestra es PBKDF2-HMAC-SHA1(frase, SSID, 4096 iteraciones): quien captura el saludo de 4 vías (o un PMKID) puede probar frases **sin conexión** a la velocidad de
su GPU, así que una frase débil cae. **WPA3-Personal** usa SAE (*Dragonfly*), un intercambio autenticado por contraseña en el que cada intento exige interactuar con la red: el ataque de diccionario sin
conexión desaparece (las primeras implementaciones tuvieron canales laterales, Dragonblood, 2019, corregidos después). Las redes de empresa usan WPA2/3-Enterprise con 802.1X. Las tramas de gestión
protegidas (802.11w) evitan las desautenticaciones falsas.

## 3. IP y TCP

- **Suplantación de origen**: IP no verifica la dirección de origen. **BCP 38** (RFC 2827): cada red filtra a la salida los paquetes cuyo origen no le pertenece. Si todos lo aplicaran, la amplificación
  desaparecería; muchas redes no lo hacen. En el borde se usa uRPF.
- **Inundación SYN** (RFC 4987): el atacante envía SYN con orígenes falsos y el servidor reserva estado para cada conexión a medio abrir. En Linux, con `tcp_synack_retries` reintentos y un RTO inicial de
  1 s que se duplica, cada entrada ocupa la cola hasta el último reintento más una última espera. **SYN cookies** (`tcp_syncookies`): el servidor no guarda nada; codifica lo necesario en su número de
  secuencia inicial (un MAC del cuarteto de la conexión y de un contador de tiempo) y solo crea el estado cuando vuelve un ACK válido.
- **Inyección y cierre de conexiones**: un atacante fuera del camino debe acertar el número de secuencia dentro de la ventana; RFC 5961 reduce la ventana aceptable para RST y SYN. Los números de secuencia
  iniciales se aleatorizan (RFC 6528).
- **IPv6**: SLAAC con EUI-64 mete la MAC en la dirección (el bit 7 del primer byte se invierte y se inserta `ff:fe` en medio), lo que permite seguir a un equipo entre redes: por eso existen las
  direcciones temporales (RFC 8981) y las estables opacas (RFC 7217). Los anuncios de router falsos son el equivalente del DHCP falso (RA Guard).

## 4. DNS y DNSSEC

Un resolutor acepta la primera respuesta que coincide en pregunta, identificador de 16 bits y puertos. Un atacante fuera del camino envía muchas respuestas falsas mientras llega la buena: si cada carrera
le deja k intentos sobre N combinaciones, gana una carrera con probabilidad k/N, y tras n carreras con 1 − (1 − k/N)ⁿ. **Kaminsky** (2008) mostró que se podían forzar carreras sin límite preguntando por
nombres inexistentes (`aleatorio123.banco.example`) e inyectando en la respuesta falsa un registro de autoridad para todo el dominio. La defensa inmediata fue **aleatorizar el puerto de origen**
(unos 16 bits más); SAD DNS (2020) recuperó el puerto con un canal lateral de ICMP, y las defensas siguieron (0x20, cookies DNS).

La defensa de fondo es **DNSSEC** (RFC 4033-4035): cada zona firma sus registros (RRSIG) con su clave (DNSKEY), y la zona padre publica un **DS** (un resumen de la clave del hijo) firmado a su vez,
formando una cadena de confianza desde la raíz. Algoritmos habituales: 8 (RSA/SHA-256), 13 (ECDSA P-256), 15 (Ed25519). DNSSEC da **autenticidad**, no confidencialidad: para eso están **DoT** y **DoH**
(DNS sobre TLS o HTTPS), que protegen el tramo hasta el resolutor.

## 5. BGP

Los sistemas autónomos se anuncian prefijos y cada router prefiere el **más específico**: quien anuncia un /24 dentro del /22 de otro se lleva ese tráfico (secuestro de prefijo; Pakistan Telecom y
YouTube en 2008, robos de criptomonedas con rutas secuestradas en 2018). **RPKI** permite a cada titular firmar ROA ("este prefijo, hasta esta longitud máxima, lo origina este AS"), y la **validación de
origen** (RFC 6811) clasifica cada anuncio: *valid* si algún ROA lo cubre con el mismo AS y una longitud permitida, *invalid* si lo cubre algún ROA pero ninguno coincide, *notfound* si ningún ROA lo
cubre. Descartar los inválidos frena los secuestros de origen, no los que falsifican el camino (para eso, BGPsec o ASPA).

## 6. Cortafuegos, segmentación y VPN

- **Cortafuegos con estado** (nftables, pf): política por defecto de denegar, aceptar lo establecido o relacionado, y después solo lo necesario, por origen, destino y puerto. Las reglas se evalúan en orden
  y gana la primera que coincide: una regla amplia antes que una estrecha anula a la segunda. Se auditan con la lista de lo que **debe** y **no debe** pasar.
- **Segmentación**: redes separadas para usuarios, servidores, gestión y dispositivos IoT, con el tráfico entre ellas filtrado; un atacante que entra en un portátil no debe ver las bases de datos.
  **Confianza cero** (NIST SP 800-207): ninguna red es de confianza; cada acceso se autentica y autoriza según la identidad y el estado del dispositivo.
- **VPN**: **IPsec** (IKEv2, ESP; complejo pero universal), **OpenVPN** (sobre TLS) y **WireGuard** (Donenfeld, 2017): un único saludo basado en Noise IK con clave precompartida opcional, claves
  públicas como identidades, Curve25519, ChaCha20-Poly1305 y BLAKE2s, en unas 4000 líneas de código del núcleo. Menos opciones, menos errores de configuración.

## 7. Denegación de servicio

- **Volumétrica con amplificación**: el atacante envía peticiones UDP pequeñas con el origen falsificado (la víctima) a servidores que responden mucho más. CISA (TA14-017A) mide el factor por protocolo:
  DNS de 28 a 54, SSDP 30,8, NTP con `monlist` 556,9, memcached de 10 000 a 51 000. Un atacante con 10 Mbit/s y un factor 50 dirige 500 Mbit/s. Se mitiga con BCP 38, cerrando servidores abiertos,
  limitando respuestas (RRL en DNS) y con limpieza del tráfico en el proveedor o en una CDN.
- **De protocolo** (SYN, conexiones lentas como Slowloris) y **de aplicación** (peticiones caras): límites por cliente, colas, SYN cookies, cachés, y diseñar las operaciones caras para que no se puedan
  pedir sin autenticarse.

## 8. Detección en la red

- **IDS/IPS** (Suricata, Snort, Zeek): firmas sobre paquetes y flujos, y registros estructurados de cada conexión, DNS, TLS (SNI, JA3/JA4) y HTTP.
- **Reglas de comportamiento**: muchos puertos distintos desde un origen en poco tiempo (escaneo), muchas conexiones fallidas (fuerza bruta), balizas regulares, volumen de DNS anómalo (túneles), consultas a
  dominios recién registrados o con alta entropía.
- **NetFlow/IPFIX**: quién habló con quién, cuánto y cuándo, sin el contenido; suficiente para muchas investigaciones y mucho más barato de guardar. Se amplía en `proy-sec-ids`.

## 9. Comprobar con un programa

Subredes, evaluación ordenada de reglas, carreras de DNS, validación de origen y EUI-64, con datos distintos de los ejercicios:

```python
# Subredes, cortafuegos con primera coincidencia, carreras de DNS a ciegas, RPKI (RFC 6811) y EUI-64
import ipaddress
import math

red = ipaddress.ip_network("172.16.5.130/26", strict=False)
print("red", red.network_address, "difusión", red.broadcast_address, "equipos", red.num_addresses - 2)

reglas = [("tcp", {25}, ipaddress.ip_network("203.0.113.0/24")), ("tcp", {993}, None)]  # política: DROP
def acepta(proto, origen, puerto):
    return any(p == proto and puerto in ps and (r is None or ipaddress.ip_address(origen) in r) for p, ps, r in reglas)
print("correo desde fuera:", acepta("tcp", "198.51.100.1", 25), " IMAPS desde fuera:", acepta("tcp", "198.51.100.1", 993))

def carreras(k, espacio, objetivo=0.5):
    return math.ceil(math.log(1 - objetivo) / math.log1p(-k / espacio))
print("50 respuestas por carrera, 90 % de éxito:", carreras(50, 2**16, 0.9), "carreras (solo identificador)")

roas = [(ipaddress.ip_network("198.51.100.0/24"), 24, 64511)]
def rov(prefijo, asn):
    p = ipaddress.ip_network(prefijo)
    cubren = [r for r in roas if p.subnet_of(r[0])]
    if not cubren:
        return "notfound"
    return "valid" if any(asn == a and p.prefixlen <= m for _, m, a in cubren) else "invalid"
print([rov(p, a) for p, a in (("198.51.100.0/24", 64511), ("198.51.100.0/25", 64511), ("203.0.113.0/24", 64511))])

mac = [int(x, 16) for x in "02:42:ac:11:00:02".split(":")]
mac[0] ^= 0x02  # se invierte el bit universal/local
v = mac[:3] + [0xFF, 0xFE] + mac[3:]
print("EUI-64:", ":".join("%02x%02x" % (v[i], v[i + 1]) for i in range(0, 8, 2)))
```

Salida:

```
red 172.16.5.128 difusión 172.16.5.191 equipos 62
correo desde fuera: False  IMAPS desde fuera: True
50 respuestas por carrera, 90 % de éxito: 3017 carreras (solo identificador)
['valid', 'invalid', 'notfound']
EUI-64: 0042:acff:fe11:0002
```

## 10. Errores típicos

- Confiar en la red interna ("está detrás del cortafuegos"); no segmentar.
- Reglas permisivas antes que las restrictivas; política por defecto ACCEPT; reglas que nadie sabe por qué existen.
- Wi-Fi WPA2-Personal con una frase corta; la misma red para invitados y para la empresa.
- Resolutores DNS abiertos a Internet; servidores NTP o memcached expuestos (amplificadores).
- Publicar prefijos sin ROA, o no filtrar los anuncios inválidos.
- Creer que una VPN o DNSSEC cifran todo lo que no cifran.

## 11. Resumen

- Atacante local, en el camino o fuera del camino: cada uno pide defensas distintas (filtrado, cifrado, entropía).
- Enlace: ARP y DHCP con inspección en el conmutador; VLAN bien configuradas; 802.1X; WPA3-SAE frente al diccionario sin conexión de WPA2.
- IP/TCP: BCP 38, SYN cookies, números de secuencia aleatorios; IPv6 y la privacidad de EUI-64.
- DNS: carreras, Kaminsky, puerto aleatorio, DNSSEC (DNSKEY, RRSIG, DS) y DoT/DoH.
- BGP: el prefijo más específico gana; RPKI y validación de origen.
- Cortafuegos con estado y orden de reglas, segmentación, confianza cero, VPN (IPsec, WireGuard); DDoS por amplificación; IDS, flujos y reglas de comportamiento.

## Repaso: lo que debe quedarte dentro de un mes

1. Lo que el atacante no ve, tiene que adivinarlo: añade entropía y comprueba orígenes.
2. En el camino, solo la criptografía de extremo a extremo protege.
3. DNSSEC autentica, DoH cifra; son complementarios.
4. En BGP gana el más específico: firma tus prefijos y filtra los inválidos.
5. Denegar por defecto y segmentar.

## Siguiente

`sec-metodologia-pentest` (cómo se evalúa todo esto de forma ordenada y autorizada), `sec-cloud-contenedores` y `proy-sec-ids`.
