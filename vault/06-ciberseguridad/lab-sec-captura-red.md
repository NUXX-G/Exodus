---
id: lab-sec-captura-red
title: "Laboratorio: análisis de una captura de red (baliza de mando y control, credenciales en claro y exfiltración por túnel DNS)"
area: ciberseguridad
trunk_level: 9
kind: laboratorio
prerequisites: [sec-redes-tcpip, prog-unix-texto]
academic_sources:
  - "Sanders, C. Practical Packet Analysis: Using Wireshark to Solve Real-World Network Problems, 3ª ed. No Starch Press, 2017."
  - "Wireshark Foundation. Wireshark User's Guide y manual de tshark (filtros de visualización). wireshark.org, consultado en noviembre de 2026."
  - "MITRE ATT&CK, técnicas T1071.001 (Web Protocols), T1071.004 (DNS), T1048 (Exfiltration Over Alternative Protocol) y T1552 (Unsecured Credentials). attack.mitre.org."
attachments: [captura.pcap]
ctf_flag: "sha256:09752eb167d1595fa3fc58cfc9de1a4fd5a145c980b6a8f3e61568d5306c3955"
hints:
  - "Empieza por la estadística antes que por los paquetes: qué equipos hablan con quién, con qué protocolos y cada cuánto. Una conexión que se repite a intervalos exactos es una baliza; un DNS con nombres larguísimos e irrepetibles no es navegación normal."
  - "Con tshark: -Y 'http.request' -T fields -e ip.src -e ip.dst -e frame.time_epoch para la baliza; -Y 'ftp.request' para el FTP; -Y 'dns.qry.type == 16' -T fields -e dns.qry.name para el túnel. Ordena los trozos por su número, únelos, pásalos a mayúsculas, añade '=' hasta un múltiplo de 8 y decodifica con base32 -d."
  - "La guía de Wireshark (Statistics > Conversations y la referencia de filtros de visualización) y las fichas de MITRE ATT&CK T1071.004 y T1048 explican estas técnicas y cómo detectarlas."
exercises:
  - id: paquetes
    tier: 1
    prompt: |
      ¿Cuántos paquetes contiene la captura?

      Respuesta: un número.
    answers: ["sha256:284de502c9847342318c17d474733ef468fbdbe252cddf6e4b4be0676706d9d0"]
  - id: equipo-infectado
    tier: 1
    prompt: |
      Hay tráfico HTTP periódico hacia una IP externa. ¿Qué equipo de la red interna lo genera?

      Respuesta: la IP del equipo.
    answers: ["sha256:a762ec8eef0f0be0ab1448f10dc3533f975e4211ab8611f10603009504694c5e"]
  - id: servidor-de-mando
    tier: 1
    prompt: |
      ¿A qué IP externa se conecta ese tráfico (el servidor de mando y control)?

      Respuesta: la IP.
    answers: ["sha256:37650fa10135f01f6b6e564fc8b65c04f9afa3e519f61f0ef95b243a09f2b826"]
  - id: intervalo-de-baliza
    tier: 2
    prompt: |
      ¿Cada cuántos segundos envía el equipo infectado su petición al servidor de mando?

      Respuesta: un número.
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: numero-de-balizas
    tier: 2
    prompt: |
      ¿Cuántas peticiones HTTP hace a ese servidor en toda la captura?

      Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: credenciales-en-claro
    tier: 2
    prompt: |
      Uno de los protocolos de la captura no cifra nada. ¿Qué usuario y contraseña se enviaron en claro?

      Respuesta: `usuario:contraseña`.
    answers: ["sha256:cc193d8972fe79378dca9b196d4c9f00cbdda6d379d0815494e1a573c0f47b52"]
  - id: dominio-de-exfiltracion
    tier: 2
    prompt: |
      Hay consultas DNS de tipo TXT con subdominios larguísimos y aleatorios. ¿A qué dominio (los dos últimos niveles) van dirigidas?

      Respuesta: el dominio.
    answers: ["sha256:6ad0165acfeef9a253a2b2859967c68f12c618205f7fad30a50cf570ea4b12c4"]
  - id: consultas-de-exfiltracion
    tier: 2
    prompt: |
      ¿Cuántas consultas (sin contar respuestas) se hicieron a ese dominio?

      Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: datos-robados
    tier: 3
    prompt: |
      Los subdominios llevan un archivo codificado en base32 (minúsculas, sin relleno), troceado y numerado en el segundo nivel. Reconstrúyelo. ¿Cuántas cuentas bancarias (IBAN) contiene?

      Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
---

> [!info] Escenario
> El sistema de detección de intrusiones de la red de oficina saltó por una alerta genérica de "dominio de baja reputación". El equipo de redes ha guardado unos minutos de tráfico del
> segmento `10.0.5.0/24` en `captura.pcap`. Tu tarea: decidir si hay un equipo comprometido, qué hace, y si ha salido información, cuál.

Es un laboratorio de **análisis defensivo** sobre una captura sintética: no se ataca nada. Practica lo que viste en [[sec-redes-tcpip]] (IP, TCP, UDP, DNS, HTTP) con las herramientas que usa un analista:
**Wireshark** (interfaz gráfica) o **tshark** (su versión de línea de órdenes, que combina con lo de [[prog-unix-texto]]).

## 1. Cómo trabajar

1. Comprueba el hash del archivo descargado y ábrelo en Wireshark o con `tshark -r captura.pcap`.
2. Haz primero la **estadística**: conversaciones (Statistics > Conversations, o `tshark -q -z conv,ip`), jerarquía de protocolos (`-z io,phs`) y extremos. Señala lo que no encaja con una oficina normal.
3. Investiga cada anomalía con **filtros de visualización** (`http.request`, `ftp`, `dns.qry.type == 16`, `ip.addr == ...`) y sigue los flujos TCP (Follow > TCP Stream).
4. Responde a los ejercicios en orden y anota en tu [Libreta](/libreta) la línea temporal.
5. **La flag** está dentro de los datos robados: cuando reconstruyas el archivo exfiltrado, la encontrarás en su última línea.

## 2. Qué buscar

- **Balizas** (*beaconing*): un programa malicioso consulta periódicamente a su servidor de mando y control. Rasgos: mismo destino, mismo tamaño, intervalo casi constante, *user agent* anticuado o raro,
  y una respuesta corta (`wait`, `sleep`) que significa "nada que hacer".
- **Credenciales en claro**: FTP, Telnet, HTTP sin TLS, POP3/IMAP sin cifrar. Cualquiera en el camino las lee.
- **Túnel DNS**: el DNS casi nunca se bloquea hacia fuera, así que se usa para sacar datos codificados en los subdominios (`<datos>.<n>.dominio`) y recibir órdenes en las respuestas TXT. Rasgos:
  subdominios largos con alta entropía, muchos nombres únicos para un mismo dominio, consultas TXT, y volumen desproporcionado.

## 3. Después del análisis: contención y detección

- **Contener**: aislar `10.0.5.23`, bloquear el servidor de mando y el dominio en el cortafuegos y en el DNS, y conservar evidencias (memoria y disco) antes de limpiar.
- **Credenciales**: la cuenta FTP está comprometida: rotarla y sustituir FTP por SFTP o FTPS.
- **Datos**: los IBAN exfiltrados son datos personales: el incidente puede requerir notificación según el RGPD (72 horas a la autoridad de control).
- **Detección**: obligar a que todo el DNS salga por los resolutores corporativos y vigilar la longitud y entropía de los nombres consultados; detectar balizas por regularidad temporal (análisis de
  intervalos en los registros del proxy o de NetFlow); y alertar de protocolos en claro.

## 4. Para ir más allá

Escribe un pequeño programa (Python con `scapy` o Rust con `pcap-parser`) que detecte balizas midiendo la dispersión de los intervalos entre conexiones a cada destino, y otro que marque nombres DNS
con entropía de Shannon alta. Pruébalos con esta captura y con una tuya de navegación normal (la de tu propio equipo) para medir falsos positivos. Continúa con `sec-seguridad-redes`.
