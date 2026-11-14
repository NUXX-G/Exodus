---
id: lab-sec-forense-servidor
title: "Laboratorio: análisis forense de un servidor web comprometido (SSH, nginx, historial y persistencia)"
area: ciberseguridad
trunk_level: 9
kind: laboratorio
prerequisites: [prog-unix-texto, sec-redes-tcpip]
academic_sources:
  - "NIST SP 800-61 Rev. 3, Incident Response Recommendations and Considerations for Cybersecurity Risk Management (2025)."
  - "MITRE ATT&CK, técnicas T1110 (Brute Force), T1078 (Valid Accounts), T1548.003 (Sudo), T1053.003 (Cron) y T1048 (Exfiltration Over Alternative Protocol). attack.mitre.org, consultado en noviembre de 2026."
  - "Robbins, A.; Beebe, N. H. F. Classic Shell Scripting. O'Reilly, 2005 (procesado de registros con las herramientas de Unix)."
attachments: [auth.log, access.log, historial-root.txt, crontab-root.txt]
ctf_flag: "sha256:c2bb7f26e25c6930c6f6296631e39543594da402d28ac10c72a57e46c588df25"
hints:
  - "Un incidente se reconstruye como una línea temporal: primero quién y desde dónde (los intentos fallidos agrupados por origen), después cuándo entró y con qué cuenta, y por último qué hizo dentro (privilegios, descargas, persistencia, salida de datos)."
  - "Con las herramientas de prog-unix-texto basta: grep 'Failed password' auth.log | grep -oE 'from [0-9.]+' | sort | uniq -c | sort -rn para el origen; grep 'Accepted' para el acceso; grep -E '^(wget|curl)' en el historial; y el primer campo de la línea de cron para la periodicidad."
  - "NIST SP 800-61 (fases de detección y análisis) y las fichas de MITRE ATT&CK T1110, T1078, T1548.003, T1053.003 y T1048 describen exactamente estas técnicas y qué rastro dejan."
exercises:
  - id: ip-atacante
    tier: 1
    prompt: |
      En `auth.log`, ¿desde qué dirección IP se lanzó el ataque de fuerza bruta contra SSH (la que acumula más intentos fallidos)?

      Respuesta: la IP.
    answers: ["sha256:eb4b2dd34d5ba9aff5f39480c21f10aff75f58d1bfe56c0d153cb60b63533992"]
  - id: intentos-fallidos
    tier: 1
    prompt: |
      ¿Cuántos intentos de contraseña fallidos (`Failed password`) hay desde esa IP?

      Respuesta: un número.
    answers: ["sha256:01d54579da446ae1e75cda808cd188438834fa6249b151269db0f9123c9ddc61"]
  - id: usuarios-probados
    tier: 1
    prompt: |
      ¿Cuántos nombres de usuario distintos probó el atacante (existan o no en el sistema)?

      Respuesta: un número.
    answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
  - id: cuenta-comprometida
    tier: 1
    prompt: |
      ¿Con qué cuenta consiguió entrar el atacante?

      Respuesta: el nombre de usuario.
    answers: ["sha256:b7bd55c11b781b0ccc43aa6e57f9dadf0660e9d1d4e27e0979ee43a407d454ae"]
  - id: hora-del-acceso
    tier: 2
    prompt: |
      ¿A qué hora exacta (del registro) inició sesión con éxito?

      Respuesta: `HH:MM:SS`.
    answers: ["sha256:ebfa4b13bb2b2c3f889359293cc4218b139aaad0151f114cc623ea7054ef539c"]
  - id: escalada
    tier: 2
    prompt: |
      ¿A qué hora obtuvo una shell de root, y con qué mecanismo? Busca en `auth.log`.

      Respuesta: la hora `HH:MM:SS` de la orden que lo hizo.
    answers: ["sha256:de9eb04fce3f469fd225ccce0c9831ec0aa67729a367dee622223a0dec302734"]
  - id: reconocimiento-web
    tier: 2
    prompt: |
      Antes del ataque SSH, la misma IP sondeó la web. Según `access.log`, ¿qué ruta respondió con 200 y por qué es grave?

      Respuesta: la ruta.
    answers: ["sha256:3ec26e4f0817b37785cd5e68fed888921651a676eedf690d4d3bbe893b42f111"]
  - id: descarga
    tier: 2
    prompt: |
      En el historial de root, ¿desde qué URL descargó el atacante su programa?

      Respuesta: la URL completa.
    answers: ["sha256:0172e223df7e5bd80d0b2acf6bf3b50a68749af13b3089224f73e1ccb5560c60"]
  - id: persistencia
    tier: 2
    prompt: |
      ¿Cada cuántos minutos ejecuta el sistema el programa del atacante? (Mira `crontab-root.txt` y el historial.)

      Respuesta: un número.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: exfiltracion
    tier: 3
    prompt: |
      ¿A qué servidor (nombre de host, sin protocolo ni ruta) envió los datos robados?

      Respuesta: el nombre de host.
    answers: ["sha256:bb18e4490b50222b1251895a8553a9c8bc27c2ef80c693cf2d9964591d8fbdd3"]
---

> [!info] Escenario
> Eres la persona de guardia del equipo de respuesta a incidentes de una pequeña tienda en línea. La madrugada del 13 de noviembre, el sistema de facturación detectó tráfico saliente
> anómalo desde `web01`, el servidor que aloja la web y la base de datos. El equipo de sistemas ha aislado la máquina y te entrega cuatro artefactos: el registro de autenticación (`auth.log`),
> el de accesos de nginx (`access.log`), el historial de órdenes de root recuperado de la memoria (`historial-root.txt`) y la tabla de cron de root (`crontab-root.txt`). Tu tarea es reconstruir
> qué pasó, con pruebas, para decidir la contención y el informe.

Este laboratorio es de **análisis defensivo** sobre datos sintéticos: no se ataca nada, se investiga lo que dejó un ataque. Es la habilidad central de un analista de un SOC o de respuesta a
incidentes, y se practica con las herramientas de [[prog-unix-texto]] sobre registros como los que conociste en [[sec-redes-tcpip]].

## 1. Cómo trabajar

1. **No modifiques la evidencia**: trabaja sobre copias y anota el hash de cada archivo (`sha256sum *`). Los hashes de los adjuntos aparecen junto a cada enlace de descarga.
2. **Construye una línea temporal** en un archivo de notas (la [Libreta](/libreta) sirve): hora, fuente, evento, interpretación. Todos los registros están en UTC.
3. **Responde a las preguntas** de los ejercicios en orden: van de la detección (quién y cómo) a la actuación del atacante dentro del sistema (qué y para qué).
4. **La flag** se forma al final con tres de tus respuestas: `EXODUS{IP_usuario_host}`, donde `IP` es la del atacante, `usuario` la cuenta comprometida y `host` el servidor de exfiltración. Por ejemplo,
   `EXODUS{192.0.2.1_ana_ejemplo.org}`.

Las pistas (tres niveles) se desbloquean de una en una: úsalas solo cuando lleves un rato atascado.

## 2. Qué buscar en cada artefacto

- **`auth.log`** (sshd, sudo, PAM): `Failed password` (con `invalid user` si la cuenta no existe), `Accepted password` o `Accepted publickey`, apertura de sesiones y órdenes de `sudo` con su
  `COMMAND=`. Distingue el tráfico legítimo (claves públicas desde la red interna en horario laboral) del anómalo.
- **`access.log`** (formato combinado de nginx): IP, fecha, petición, código de estado, tamaño, *user agent*. Un escáner deja muchas peticiones a rutas sensibles conocidas con códigos 404, y alguna con
  200 que no debería existir.
- **`historial-root.txt`**: lo que el atacante tecleó con privilegios. Típico: reconocimiento (`id`, `uname`), descarga de herramientas, persistencia, recolección de datos, exfiltración y borrado de
  huellas.
- **`crontab-root.txt`**: tareas periódicas; compara con lo que se espera en el servidor.

## 3. Después del análisis: el informe y la defensa

Un incidente no termina con la flag. Redacta, en una página, el informe con: resumen ejecutivo, línea temporal, técnicas observadas (con sus identificadores de MITRE ATT&CK), alcance (qué datos salieron),
y recomendaciones. Para este caso, como mínimo:

- **Acceso**: desactivar la autenticación por contraseña en SSH (`PasswordAuthentication no`), solo claves y, mejor, MFA; limitar el origen con cortafuegos o VPN; `fail2ban` o `sshd` con `MaxAuthTries`
  y bloqueos por tasa.
- **Exposición web**: nunca publicar el directorio `.git` (bloquearlo en nginx y revisar qué secretos contenía, y rotarlos).
- **Privilegios**: la cuenta de despliegue no debe tener `sudo` sin restricciones; mínimo privilegio y órdenes concretas en `sudoers`.
- **Detección**: centralizar registros fuera del servidor (el atacante borró su historial: `history -c`), alertas por fuerza bruta y por accesos con contraseña desde fuera, `auditd` para órdenes de root,
  y control del tráfico saliente.
- **Erradicación**: eliminar la tarea de cron y el binario, revisar `authorized_keys`, reinstalar desde una imagen limpia y rotar todas las credenciales (incluidas las de la base de datos copiada).

## 4. Para ir más allá

Repite el análisis creando una línea temporal unificada con `awk` (convirtiendo las dos notaciones de fecha a una sola) y ordenándola; escribe una regla de detección (por ejemplo, en Sigma) para la
fuerza bruta seguida de éxito desde la misma IP; y continúa con `sec-forense-logs`, que trata la forense de registros a escala (SIEM, correlación, cadena de custodia).
