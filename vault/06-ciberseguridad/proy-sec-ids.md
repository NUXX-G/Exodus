---
id: proy-sec-ids
title: "Proyecto: un detector de intrusiones (decodificación de capturas pcap, flujos TCP, firmas al estilo Snort, escaneos de puertos, fuerza bruta en SSH y ataques en registros web)"
area: ciberseguridad
trunk_level: 16
kind: proyecto
prerequisites: [sec-seguridad-redes, sec-forense-logs, sec-redes-tcpip]
academic_sources:
  - "Roesch, M. Snort: Lightweight Intrusion Detection for Networks. USENIX LISA 1999; Paxson, V. Bro: A System for Detecting Network Intruders in Real-Time. Computer Networks 31(23-24), 1999 (el actual Zeek, y sus estados de conexión de conn.log)."
  - "Ptacek, T. H.; Newsham, T. N. Insertion, Evasion, and Denial of Service: Eluding Network Intrusion Detection. Secure Networks, 1998."
  - "Bejtlich, R. The Practice of Network Security Monitoring. No Starch Press, 2013; documentación de reglas de Suricata y de Snort 3 (cabecera, content, nocase, flags, dsize)."
  - "IETF: borrador draft-ietf-opsawg-pcap (formato pcap); RFC 791 (IPv4), RFC 8200 (IPv6), RFC 9293 (TCP), RFC 768 (UDP), RFC 5952 (texto de direcciones IPv6), RFC 3986 (codificación porcentual), RFC 3164 (syslog BSD)."
attachments: [prueba.sh, trafico.pcap, escaneo.pcap, raro.pcap, grande.pcap, reglas.txt, reglas-malas.txt, auth.log, access.log]
exercises:
  - id: hito-1-decodificar-capturas
    tier: 1
    prompt: |
      **Hito 1.** `ids paquetes CAPTURA.pcap` lee el formato pcap clásico (marcas de tiempo en micro o nanosegundos, en cualquier extremo; solo enlace Ethernet, tipo 1) e imprime una línea por paquete: `número tiempo longitud descripción`, con el tiempo relativo al primer paquete en segundos y 9 decimales, la longitud original de la trama y la descripción del §2: `arp peticion IP de IP`, `arp respuesta IP en MAC` o `arp op=N`; `tcp ORIGEN > DESTINO [BANDERAS] datos=N` (banderas en el orden S F R P A U; N = longitud IP menos cabeceras, sin el relleno Ethernet); `udp ORIGEN > DESTINO datos=N` (N = longitud UDP − 8); `icmp` o `icmp6 IP > IP tipo=T codigo=C`; `fragmento IP > IP proto=P desplazamiento=BYTES` (fragmentos IPv4 con desplazamiento > 0); `ip IP > IP proto=P` (otro protocolo); `ethertype=0xHHHH` (otro tipo Ethernet); y `truncado` si los bytes capturados no alcanzan para las cabeceras necesarias. ORIGEN y DESTINO son `IP:puerto`, o `[IPv6]:puerto` con la IPv6 en la forma canónica del RFC 5952. Con etiqueta 802.1Q, la descripción empieza por `vlan=ID `; una suma de comprobación de cabecera IPv4 errónea añade ` !suma` al final. Un fichero inexistente, que no sea pcap o con otro tipo de enlace termina con código 1.

      Comprueba con `bash prueba.sh ./ids 1` (con los adjuntos en la misma carpeta que prueba.sh).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:b2afc8f0778534793bb048f0a5cd5df3fe9bc318f6c01c657c9509da382b9902"]
  - id: hito-2-flujos
    tier: 1
    prompt: |
      **Hito 2.** `ids flujos CAPTURA.pcap` agrupa los paquetes TCP y UDP (sin los truncados ni los fragmentos sin cabecera de transporte) en flujos por protocolo y par de extremos (en cualquier sentido); el iniciador es el origen del primer paquete. Imprime, en el orden del primer paquete de cada flujo, `proto INICIADOR > RESPONDEDOR paquetes=a/b datos=x/y duracion=D estado=E` (a, x del iniciador; b, y del respondedor; D, del primer al último paquete, con 9 decimales) con el estado TCP del §3: OTH si el primer paquete no es un SYN sin ACK; si no, REJ si el respondedor manda un RST antes de su SYN+ACK; S0 si no hay SYN+ACK; RST si hay algún RST desde el SYN+ACK; SF si ambos mandaron FIN; FIN1 si solo uno; S1 en otro caso. En UDP, `estado=-`.

      Comprueba con `bash prueba.sh ./ids 2` (con los adjuntos en la misma carpeta que prueba.sh).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:88e0c4c308f9319fb6b37c3b3669ec6329985fc70dc59959db6e0a89f32bd788"]
  - id: hito-3-firmas
    tier: 2
    prompt: |
      **Hito 3.** `ids firmas CAPTURA.pcap REGLAS` aplica a cada paquete TCP o UDP (sin truncados) las reglas del §4, un subconjunto de Snort y Suricata: `alert tcp|udp|any ORIGEN PUERTO -> DESTINO PUERTO (opciones;)` con direcciones `any`, IP o red CIDR (IPv4 o IPv6; una dirección de una familia nunca está en una red de la otra), puertos `any`, `N` o rango `N:M` (extremos opcionales), `!` para negar, y las opciones `msg`, `content` (con bytes `|hex|` y escapes con barra invertida), `nocase` (afecta al content anterior), `flags` (exactamente esas entre S F R P A U, o con `+`: al menos esas), `dsize` (`N`, `<N` o `>N`, sobre los bytes de carga del paquete según sus cabeceras) y `sid` (obligatorio). Todos los content deben aparecer en la carga capturada. Imprime `alerta sid=S paquete=K ORIGEN > DESTINO "msg"` por cada coincidencia, por paquete y, dentro de él, en el orden de las reglas. Una regla mal formada o con una opción desconocida termina con código 1 sin imprimir nada.

      Comprueba con `bash prueba.sh ./ids 3` (con los adjuntos en la misma carpeta que prueba.sh).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:5137d5d37bc889cfc21aeb5895831d15ba671b97dd7acc37a14ae89a21f0d0c5"]
  - id: hito-4-escaneos
    tier: 2
    prompt: |
      **Hito 4.** `ids escaneos CAPTURA.pcap N T` busca escaneos entre los intentos fallidos: flujos TCP en estado S0 o REJ, o RST sin datos en ningún sentido (el SYN medio abierto). Imprime `vertical ORIGEN > DESTINO puertos=K primero=t ultimo=t` si algún intervalo [t, t + T] contiene intentos de ORIGEN a DESTINO hacia N o más puertos distintos (K: todos los puertos distintos; t, los tiempos del primer y el último intento), y `horizontal ORIGEN puerto=P destinos=K primero=t ultimo=t` si los hay hacia N o más destinos distintos en un mismo puerto. Primero las verticales y luego las horizontales, cada grupo por su primer intento. N es un entero positivo y T, segundos (con decimales); si no, código 1.

      Comprueba con `bash prueba.sh ./ids 4` (con los adjuntos en la misma carpeta que prueba.sh).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:543ae017eda3f8a3fdf9cb3d6c751858d1c053156fb381d8fe02db98d57f8447"]
  - id: hito-5-fuerza-bruta-ssh
    tier: 3
    prompt: |
      **Hito 5.** `ids ssh auth.log N W` analiza los mensajes de `sshd` de un auth.log (fechas sin año: son de 2024, en orden). Cuenta como fallos las líneas `Failed password|publickey|keyboard-interactive/pam for [invalid user ]USUARIO from IP port P ssh2`, toma la IP del **último** `from IP port P` (el nombre de usuario lo elige el atacante) y cuenta R veces las de `message repeated R times: [ …]`. Imprime `fuerza-bruta IP fallos=F usuarios=U inexistentes=I primera=FECHA ultima=FECHA` (fechas ISO 8601 sin zona) para cada IP con N o más fallos en algún intervalo de W segundos, en el orden de su primer fallo, y después `compromiso IP usuario=X fecha=FECHA` por cada `Accepted … for X from IP port P ssh2` de una IP que ya había alcanzado ese umbral.

      Comprueba con `bash prueba.sh ./ids 5` (con los adjuntos en la misma carpeta que prueba.sh).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:a94e9c591c5244da3b0377585be70a6b641be10fc0126a39c1e57a0aa591aaef"]
  - id: hito-6-ataques-web
    tier: 3
    prompt: |
      **Hito 6.** `ids web access.log N W` lee un registro en formato combinado (Combined Log Format). Normaliza el objetivo de cada petición como en el §6 (en la consulta, `+` es un espacio; después, decodificación porcentual repetida hasta 3 veces mientras cambie) y, sobre él en minúsculas, con cada `/**/` cambiado por un espacio y los espacios en blanco seguidos reducidos a uno, busca las categorías `recorrido`, `sqli`, `xss` y `cmd` con los patrones del §6; añade `crlf` si el objetivo decodificado contiene CR o LF, y `escaner` si el agente de usuario nombra una herramienta de la lista. Imprime `línea IP categorías objetivo` (categorías separadas por comas en ese orden; el objetivo decodificado, con los bytes fuera de 0x21–0x7e y la barra invertida como `\xHH`), después `sondeo IP 404=K primera=FECHAZ ultima=FECHAZ` (UTC) para cada IP con N o más respuestas 404 en algún intervalo de W segundos, en el orden de su primera aparición, y al final `lineas=L malformadas=M`.

      Comprueba con `bash prueba.sh ./ids 6` (con los adjuntos en la misma carpeta que prueba.sh).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f236b49150d7492b6788a0f854082983d6febd7dcea07b726de04d50af3dae52"]
---

Vas a escribir **`ids`**, un pequeño sistema de detección de intrusiones que hace a escala reducida lo mismo que Snort, Suricata, Zeek y fail2ban: leer capturas de tráfico byte a byte, reconstruir las
conexiones, aplicar firmas, detectar escaneos de puertos y encontrar ataques en los registros de un servidor SSH y de un servidor web. Es trabajo **defensivo**: las capturas y los registros adjuntos
contienen ataques ya ocurridos (recorrido de directorios, inyección SQL, escaneos, fuerza bruta), y tu programa los tiene que ver. Aplica [[sec-seguridad-redes]], [[sec-forense-logs]] y
[[sec-redes-tcpip]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `ids` en el lenguaje que quieras, con seis órdenes (`paquetes`, `flujos`, `firmas`, `escaneos`, `ssh` y `web`), una por hito, con el contrato exacto de los ejercicios. Descarga todos los
adjuntos en una carpeta: **`prueba.sh`** ejecuta tu programa sobre ellos y da un código por hito si todo coincide; con `-v` muestra cada salida. Para aprender, decodifica las capturas **tú mismo**, sin
libpcap ni scapy; abre los mismos ficheros en Wireshark o con `tshark -r` para comparar lo que ves con lo que dice tu programa.

Adjuntos: `trafico.pcap` (una red pequeña con ARP, DNS, HTTP, ICMP, IPv6, una VLAN, fragmentos, un paquete con la suma de comprobación mal y LLDP), `escaneo.pcap` (escaneos de puertos rápidos, horizontales y
lentos entre tráfico legítimo), `raro.pcap` (marcas de tiempo en nanosegundos, tramas recortadas y con relleno), `grande.pcap` (extremo grande), `reglas.txt` y `reglas-malas.txt`, `auth.log` y
`access.log`.

## 2. Leer una captura pcap

El formato pcap (el de tcpdump y libpcap, descrito en el borrador draft-ietf-opsawg-pcap) es una **cabecera global** de 24 bytes (número mágico, versión, `snaplen` y tipo de enlace) seguida de
**registros**: 16 bytes de cabecera (segundos, fracción, longitud capturada y longitud original) y los bytes capturados. El número mágico dice dos cosas: el orden de bytes (0xA1B2C3D4 leído al revés indica el
otro extremo) y la resolución (0xA1B23C4D, nanosegundos). La longitud capturada puede ser menor que la original si la captura se hizo con un `snaplen` pequeño: entonces faltan bytes y hay que
comprobar la longitud **antes** de cada lectura.

Las capas, de fuera adentro:

- **Ethernet**: destino, origen y tipo (0x0800 IPv4, 0x86DD IPv6, 0x0806 ARP). Si el tipo es 0x8100 hay una **etiqueta 802.1Q** de 4 bytes (los 12 bits bajos son la VLAN) y el tipo real va detrás. Las
  tramas de menos de 60 bytes llevan **relleno**: por eso la longitud de los datos se calcula con las cabeceras IP, nunca con lo que queda de trama.
- **IPv4**: IHL (longitud de la cabecera en palabras de 4 bytes: puede haber opciones), longitud total, protocolo y el desplazamiento de fragmento, en **unidades de 8 bytes**. Solo el primer fragmento lleva
  la cabecera de transporte. La suma de comprobación es el complemento a uno de la suma en complemento a uno de las palabras de 16 bits de la cabecera: sumando toda la cabecera (incluida la suma) debe salir
  0xFFFF.
- **IPv6**: cabecera fija de 40 bytes, con la longitud de la carga y la siguiente cabecera (aquí no hay cabeceras de extensión). Para escribir las direcciones, la forma canónica del RFC 5952: minúsculas,
  sin ceros a la izquierda y `::` para la racha de ceros más larga (la primera si empatan, y nunca para un solo grupo).
- **TCP** (el desplazamiento de datos da la longitud de su cabecera; las banderas, en el byte 13), **UDP** (8 bytes y su propia longitud) e **ICMP** (tipo y código).

## 3. Flujos y estados de conexión

Un **flujo** agrupa los paquetes de una conversación: mismo protocolo y mismos extremos (IP y puerto) en cualquier sentido. Contar paquetes y bytes por sentido y clasificar cómo acabó cada conexión TCP es
exactamente lo que hace el `conn.log` de **Zeek**, cuyos estados inspiran los de este proyecto: S0 (un SYN sin respuesta), REJ (rechazado con RST), S1 (establecida y sin cerrar), SF (cierre normal), OTH
(se vio a mitad, sin SYN)... Una tabla de flujos es la base de casi toda la detección: los escaneos son flujos que no llegan a nada, las exfiltraciones son flujos con muchos bytes hacia fuera, las balizas de
un malware son flujos periódicos.

## 4. Firmas

Una **firma** describe un ataque conocido. La sintaxis de **Snort** (1999), heredada por Suricata, tiene una cabecera (acción, protocolo, origen, puerto, `->`, destino, puerto) y opciones entre paréntesis. El
subconjunto de este proyecto:

```text
alert tcp !10.0.0.0/8 any -> 10.0.0.0/24 80:89 (msg:"texto"; content:"GET"; content:"|0d 0a|"; nocase; flags:S+; dsize:>100; sid:1000001;)
```

`content` busca bytes en la carga (con `|..|` en hexadecimal), `nocase` hace que el content anterior ignore mayúsculas y minúsculas ASCII, `flags` compara las banderas TCP, `dsize` el tamaño de la carga, y
`sid` identifica la regla. Dos límites que debes entender, porque son el centro del debate sobre los IDS de red: este IDS compara **paquete a paquete**, así que un atacante que parta `../../etc/passwd` en
dos segmentos TCP lo esquiva (Ptacek y Newsham describieron en 1998 toda una familia de evasiones de este tipo: los IDS reales **reensamblan** el flujo como lo haría el destino); y las firmas sobre texto
dan **falsos positivos**: una regla que busque una comilla invertida salta con un nombre de fichero inocente. Para miles de patrones a la vez, los IDS usan el autómata de **Aho-Corasick** (1975), que
busca todos en una sola pasada.

## 5. Escaneos de puertos

En un **escaneo SYN** (el de nmap por defecto) el atacante manda un SYN a cada puerto: si está abierto recibe un SYN+ACK y responde con un RST sin completar la conexión (por eso se llama «medio abierto»), si
está cerrado recibe un RST, y si un cortafuegos lo filtra no recibe nada. En la tabla de flujos, esos tres casos son RST sin datos, REJ y S0: **intentos fallidos**. Un escaneo **vertical** prueba muchos
puertos de un equipo; uno **horizontal**, el mismo puerto (445, 22, 3389) en muchos equipos, típico de los gusanos. La detección por umbral (N intentos en T segundos) tiene un compromiso inevitable: un
umbral bajo da falsos positivos y uno alto deja pasar los **escaneos lentos**, que es exactamente lo que hacen los atacantes cuidadosos (la captura incluye uno).

## 6. Registros: SSH y web

**SSH.** Cada intento fallido deja una línea de `sshd` en auth.log; contar fallos por IP en una ventana de tiempo es lo que hace **fail2ban** (`maxretry` en `findtime`). Tres trampas reales, todas en el
adjunto: las fechas del syslog clásico (RFC 3164) **no tienen año** (y 2024 tuvo un 29 de febrero); rsyslog resume las líneas repetidas como `message repeated N times: [ …]`, que valen por N; y el nombre de
usuario lo escribe el atacante, que puede meter en él un texto como `root from 10.0.0.99 port 22` para inculpar a otra IP (**inyección en registros**): la IP buena es la del **último** `from … port … ssh2`.
Lo más grave es un `Accepted` desde una IP que antes ha fallado muchas veces: probablemente adivinó la contraseña.

**Web.** El formato combinado de Apache y nginx guarda IP, fecha con zona horaria, línea de petición, estado, bytes, referer y agente de usuario. Los ataques llegan **codificados** para esquivar filtros:
`%2e%2e%2f` es `../` (RFC 3986), `%252e` es `%2e` codificado otra vez (**doble codificación**), en la consulta `+` es un espacio, y `/**/` sirve de espacio en SQL. Por eso hay que normalizar antes de buscar.
Los patrones del contrato, sobre el objetivo normalizado en minúsculas:

| Categoría | Patrones |
|---|---|
| recorrido | `../`, `..\` |
| sqli | `union select`, `' or `, `" or `, ` or 1=1`, `sleep(`, `benchmark(`, `information_schema`, `; drop ` |
| xss | `<script`, `javascript:`, `onerror=`, `onload=` |
| cmd | `;cat `, `\|cat `, `$(`, la comilla invertida, `/bin/sh`, `cmd.exe` |
| escaner (agente de usuario) | `sqlmap`, `nikto`, `nmap`, `masscan`, `zgrab`, `gobuster` |

Muchas respuestas 404 seguidas desde una IP delatan un **sondeo** con un diccionario de rutas (gobuster, dirb); las fechas llevan zona horaria, así que conviértelas a UTC antes de comparar.

## 7. Arquitectura recomendada

- Un decodificador que devuelva una estructura por paquete (o «truncado»), y encima de él la tabla de flujos; las firmas y los escaneos trabajan sobre esas estructuras, no sobre bytes.
- Comprueba cada longitud antes de leer: un IDS procesa datos que controla el atacante, y un desbordamiento en su decodificador es una vulnerabilidad del propio IDS (ha pasado en Snort, Wireshark y tcpdump).
- Pruebas propias: compara tu salida con `tshark -r captura.pcap -T fields -e …`; construye capturas pequeñas con scapy para cada caso raro; y para los registros, escribe líneas a mano con cada trampa.

## 8. Ampliaciones

Reensamblado de flujos TCP (con solapamientos y retransmisiones: ¿qué versión cree el destino?), el autómata de Aho-Corasick para miles de content, más opciones de reglas (`offset`, `depth`, `distance`,
`within`, `pcre`), análisis de HTTP y DNS (túneles DNS por la entropía de los nombres), detección de balizas por la regularidad de los intervalos, captura en vivo con libpcap, salida en JSON como el EVE de
Suricata, reglas Sigma para registros, y comparar tus alertas con las de Suricata y Zeek sobre las mismas capturas.

## 9. Recursos

Bejtlich, The Practice of Network Security Monitoring; los artículos de Roesch (Snort), Paxson (Bro/Zeek) y Ptacek y Newsham; la documentación de reglas de Suricata y la de `conn.log` de Zeek; los RFC de
cada protocolo; y Wireshark (con su guía de usuario) como herramienta de referencia. La teoría, en [[sec-seguridad-redes]] y [[sec-forense-logs]].
