---
id: sec-forense-logs
title: "Análisis forense digital y de registros: proceso y cadena de custodia, orden de volatilidad, líneas de tiempo, sistemas de archivos, memoria, registros de Linux y Windows, detección y su integridad"
area: ciberseguridad
trunk_level: 14
prerequisites: [sec-seguridad-so, lab-sec-forense-servidor, sys-sistemas-operativos]
academic_sources:
  - "Roussev, V. Forensics Knowledge Area, v1.0.1. CyBOK, 2021; Kent, K.; Chevalier, S.; Grance, T.; Dang, H. NIST SP 800-86, Guide to Integrating Forensic Techniques into Incident Response, 2006."
  - "Carrier, B. File System Forensic Analysis. Addison-Wesley, 2005; Ligh, M. H.; Case, A.; Levy, J.; Walters, A. The Art of Memory Forensics. Wiley, 2014."
  - "RFC 3227 (Brezinski y Killalea, 2002: recogida y archivo de evidencias) y RFC 5424 (Gerhards, 2009: protocolo syslog)."
  - "Microsoft Learn, referencia de eventos de auditoría de seguridad (4624, 4625, 4688, 4720, 1102); MITRE ATT&CK Enterprise (attack.mitre.org), consultados en noviembre de 2026; Bianco, D. The Pyramid of Pain, 2013."
exercises:
  - id: prioridad-syslog
    tier: 1
    prompt: |
      En syslog (RFC 5424), ¿qué valor PRI lleva un mensaje de la instalación `auth` (4) con gravedad `warning` (4)?

      Respuesta: un número.
    answers: ["sha256:76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"]
  - id: decodificar-pri
    tier: 1
    prompt: |
      Un mensaje empieza por `<86>`. ¿Qué instalación y qué gravedad tiene?

      Respuesta: `instalacion;gravedad` en números.
    answers: ["sha256:f022656d6bbd370899eee53f0aa4ab3e5218736671acec9526ea960d4a39c1e9"]
  - id: orden-de-volatilidad
    tier: 1
    prompt: |
      Según el RFC 3227, ¿en qué orden se recogen a) la memoria, b) el disco, c) los sistemas de archivos temporales, d) los registros remotos de monitorización?

      Respuesta: las letras de más a menos volátil, separadas por espacios.
    answers: ["sha256:c0df9f5a4e67a62df3f5033d3cb6fc5bb56f3f21f3ae02ac3a1f8801e0acf048"]
  - id: marcas-de-tiempo
    tier: 2
    prompt: |
      En Linux, ¿qué marcas de tiempo de un archivo cambian con a) `mv` dentro del mismo sistema de archivos, b) `chmod`, c) `echo x >> archivo`? (Usa `stat` para comprobarlo.)

      Respuesta: para cada caso, las marcas (`atime`, `mtime`, `ctime`) separadas por espacios; los casos separados por `;`.
    answers: ["sha256:6a120f330257af97fa2dfee1d8041d3cf918c78a852a2512e9660e4bc87cc05e"]
  - id: zonas-horarias
    tier: 1
    prompt: |
      Un registro de Apache dice `14/Nov/2026:03:15:00 +0100` y uno de un cortafuegos `2026-11-14T02:20:00Z`. ¿Cuántos minutos pasaron entre el primero y el segundo?

      Respuesta: un número (negativo si el segundo es anterior).
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: linea-de-tiempo
    tier: 2
    prompt: |
      Ordena cronológicamente: a) 2026-11-14T03:00:00+02:00; b) 2026-11-14T00:30:00Z; c) 2026-11-13T21:10:00-05:00; d) 2026-11-14T01:05:00+01:00; e) 2026-11-14T09:45:00+09:00. Si dos coinciden, por orden alfabético.

      Respuesta: las letras separadas por espacios.
    answers: ["sha256:8fc20d3e65894ea4da8bf4aa9edd6b8a5548a9d51cc6edb2441cce61cb148c5d"]
  - id: regla-de-fuerza-bruta
    tier: 2
    prompt: |
      Con este `auth.log`, la regla «5 o más fallos de contraseña de la misma IP con no más de 60 segundos entre el primero y el quinto», ¿qué IP detecta?

      ```
      Nov 14 03:10:01 web sshd[1201]: Failed password for root from 203.0.113.7 port 50122 ssh2
      Nov 14 03:10:09 web sshd[1203]: Failed password for root from 203.0.113.7 port 50130 ssh2
      Nov 14 03:10:12 web sshd[1204]: Failed password for invalid user admin from 198.51.100.23 port 40211 ssh2
      Nov 14 03:10:20 web sshd[1206]: Failed password for root from 203.0.113.7 port 50141 ssh2
      Nov 14 03:10:31 web sshd[1208]: Failed password for root from 203.0.113.7 port 50155 ssh2
      Nov 14 03:10:44 web sshd[1210]: Accepted publickey for alice from 192.0.2.10 port 51515 ssh2: ED25519 SHA256:3p0Qe
      Nov 14 03:10:58 web sshd[1212]: Failed password for invalid user admin from 198.51.100.23 port 40233 ssh2
      Nov 14 03:11:02 web sshd[1214]: Failed password for root from 203.0.113.7 port 50170 ssh2
      Nov 14 03:11:05 web sshd[1215]: Failed password for invalid user backup from 198.51.100.23 port 40240 ssh2
      Nov 14 03:11:15 web sshd[1217]: Failed password for invalid user oracle from 198.51.100.23 port 40252 ssh2
      Nov 14 03:11:20 web sshd[1218]: Failed password for invalid user test from 198.51.100.23 port 40260 ssh2
      Nov 14 03:11:41 web sshd[1220]: Failed password for invalid user ubuntu from 198.51.100.23 port 40277 ssh2
      Nov 14 03:11:50 web sshd[1222]: Failed password for root from 203.0.113.7 port 50199 ssh2
      Nov 14 03:12:30 web sshd[1225]: Accepted password for deploy from 198.51.100.23 port 40301 ssh2
      Nov 14 03:12:31 web sshd[1225]: pam_unix(sshd:session): session opened for user deploy(uid=1003) by (uid=0)
      Nov 14 03:13:00 web sshd[1228]: Failed password for root from 203.0.113.7 port 50230 ssh2
      ```

      Respuesta: las IP en orden, separadas por espacios.
    answers: ["sha256:bfeb4c6192985efa05e7fa0740ac45708a515e569e7edaec7fc060ff72b44a0c"]
  - id: acceso-tras-fallos
    tier: 2
    prompt: |
      En el mismo registro, ¿qué cuenta inició sesión con éxito desde la IP detectada?

      Respuesta: `usuario;ip`.
    answers: ["sha256:ec8e4b8a031459d872a5b5a997bfc2d565c493b119785c95f92daa4118686328"]
  - id: eventos-de-windows
    tier: 1
    prompt: |
      Relaciona los identificadores del registro de Seguridad de Windows 4625, 4688, 4720 y 1102 con: a) se creó una cuenta de usuario; b) falló un inicio de sesión; c) se borró el registro de auditoría; d) se creó un proceso.

      Respuesta: las letras en el orden de los identificadores, separadas por espacios.
    answers: ["sha256:91bfee6a40dee841a5eda374e842599479e26eb8e3191c28fa9417f65d697e32"]
  - id: tipo-de-inicio-de-sesion
    tier: 1
    prompt: |
      En los eventos 4624/4625, ¿qué tipo de inicio de sesión (Logon Type) corresponde a Escritorio remoto?

      Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: tecnica-att-and-ck
    tier: 1
    prompt: |
      ¿Qué identificador tiene en MITRE ATT&CK la técnica de fuerza bruta contra credenciales?

      Respuesta: el identificador (por ejemplo `T1234`).
    answers: ["sha256:503a5c003d884cceaf06e123690c0379db7e95a50a2afa6e6e35be3f6903e4cc"]
  - id: cadena-de-hashes
    tier: 3
    prompt: |
      Para que un registro no se pueda alterar sin que se note, se encadena: h₀ = 32 bytes a cero, hᵢ = SHA-256(hᵢ₋₁ ‖ líneaᵢ) con la línea en UTF-8 sin salto de línea. Con las líneas «03:10:44 Accepted publickey for alice», «03:12:30 Accepted password for deploy» y «03:12:31 session opened for user deploy», ¿cuáles son las primeras 16 cifras hexadecimales de h₃?

      Respuesta: 16 cifras hexadecimales en minúsculas.
    answers: ["sha256:13eee4c1f86ed3123261c3f675f9c316ba97023157f2ab0b726e6522b1af7b57"]
  - id: alteracion-detectada
    tier: 2
    prompt: |
      Si alguien cambia «deploy» por «backup» en la segunda línea, ¿qué hᵢ cambian?

      Respuesta: los índices separados por espacios.
    answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
  - id: entropia-de-dominios
    tier: 2
    prompt: |
      Los dominios generados por algoritmo (DGA) tienen más entropía por carácter. ¿Cuánta entropía de Shannon (bits por carácter) tienen `xk2j9qz8w1` y `wikipedia`?

      Respuesta: `primero;segundo` con 2 decimales.
    answers: ["sha256:93b6744054d4a015074280782e002b7b5bf105a3ff8f96e05be6c7cba50e7c36"]
  - id: traduccion-de-direcciones
    tier: 3
    prompt: |
      En el análisis de memoria (como hace Volatility), la dirección virtual x86-64 0x00007f3a1c2b3d4e se traduce con 4 niveles de tablas de 512 entradas y páginas de 4 KiB. ¿Qué índices usa en PML4, PDPT, PD y PT, y qué desplazamiento dentro de la página?

      Respuesta: `pml4;pdpt;pd;pt;desplazamiento` en decimal.
    answers: ["sha256:786b81de2d9de6aa35cef904b8be8849577d5e526e65a4f517b8d2cf8dd2d450"]
  - id: piramide-del-dolor
    tier: 1
    prompt: |
      En la pirámide del dolor de Bianco, ordena de más fácil a más difícil de cambiar para el atacante: a) valores hash; b) tácticas, técnicas y procedimientos (TTP); c) nombres de dominio; d) herramientas.

      Respuesta: las letras separadas por espacios.
    answers: ["sha256:77c954e4b7fa6fba8fe563c9d8d5b42ea1c13e039629a0d41bfe167a1836df0b"]
---

Cuando un sistema ha sido comprometido, alguien tiene que responder con pruebas a qué pasó, cuándo, por dónde entró el atacante, qué hizo y qué se llevó. Eso es el análisis forense digital, y casi
siempre empieza por los **registros**: lo que el sistema anotó mientras ocurría. Este nodo da el método (cómo recoger sin destruir, cómo razonar sin inventar), las fuentes (sistemas de archivos, memoria,
registros de Linux y Windows) y las técnicas (líneas de tiempo, correlación, reglas de detección), y termina en el problema inverso: cómo conseguir que los registros sean fiables. La práctica está en
[[lab-sec-forense-servidor]] y [[lab-sec-captura-red]].

## Objetivos

Al terminar sabrás:

1. Seguir un proceso forense defendible: recogida en orden de volatilidad, hashes, cadena de custodia, trabajo sobre copias, informe reproducible.
2. Construir una línea de tiempo normalizando zonas horarias y entendiendo qué significa cada marca de tiempo.
3. Analizar registros de Linux (syslog, journald, auditd, `auth.log`) y de Windows (registro de Seguridad, Sysmon), y escribir reglas de detección con sus falsos positivos y negativos.
4. Explicar qué queda en un sistema de archivos y en la memoria, y cómo se recupera.
5. Diseñar registros difíciles de alterar (envío remoto, encadenamiento de hashes) y relacionar lo encontrado con ATT&CK.

## Qué debes dominar antes

[[sec-seguridad-so]] (usuarios, permisos, auditoría), [[sys-sistemas-operativos]] (procesos, memoria virtual, sistemas de archivos) y el laboratorio [[lab-sec-forense-servidor]].

> [!question] Test de entrada
> 1. ¿Qué es un hash criptográfico y por qué sirve para demostrar que un archivo no ha cambiado?
> 2. ¿Qué diferencia hay entre la hora local y UTC?
> 3. ¿Qué guarda un inodo?
>
> Respuestas: una función que resume cualquier entrada en un valor fijo, de modo que es inviable encontrar otra entrada con el mismo valor; si el hash coincide con el calculado al recoger la evidencia, no
> ha cambiado. La hora local es UTC más un desplazamiento (que cambia con el horario de verano); un registro sin zona es ambiguo. Los metadatos de un archivo (propietario, permisos, tamaño, marcas de
> tiempo, punteros a los bloques), no su nombre.

## 1. El proceso

NIST SP 800-86 lo divide en **recogida, examen, análisis e informe**. Las reglas que lo hacen defendible:

- **Orden de volatilidad** (RFC 3227): registros y caché del procesador; tablas de rutas, caché ARP, tabla de procesos, estadísticas del núcleo y memoria; sistemas de archivos temporales; disco;
  registros remotos y monitorización; configuración física y topología; soportes de archivo. Apagar la máquina "para que no siga el atacante" destruye la memoria, que puede contener las claves, las
  conexiones y el código que nunca tocó el disco.
- **No alterar**: se trabaja sobre **copias** (imagen bit a bit con bloqueo de escritura: `dd`, `dcfldd`, `ewfacquire`), se calcula el **hash** del original y de la copia, y cada acceso queda en la
  **cadena de custodia** (quién, cuándo, qué, por qué).
- **Reproducibilidad**: cada conclusión debe poder repetirla otra persona con las mismas evidencias y herramientas. Las hipótesis se separan de los hechos, y se buscan también pruebas que las refuten.
- **Legalidad y privacidad**: autorización por escrito, alcance definido, protección de los datos personales que aparezcan (el RGPD sigue aplicándose).

## 2. El tiempo

Una **línea de tiempo** une todo lo que se sabe en un único eje. Errores que la estropean:

- **Zonas horarias**: Apache escribe `14/Nov/2026:03:15:00 +0100`, un cortafuegos `2026-11-14T02:20:00Z`, el `auth.log` tradicional `Nov 14 03:10:01` **sin año ni zona** (la del sistema). Todo se pasa a UTC
  antes de comparar: entre `03:15:00 +0100` y `02:40:00Z` pasan 25 minutos, no 35.
- **Relojes desincronizados**: se mide el desfase de cada fuente (con un evento que aparezca en dos, o el estado de NTP) y se corrige.
- **Qué significa cada marca**: en Unix, `atime` (último acceso; con `relatime` solo se actualiza a veces), `mtime` (último cambio del contenido) y `ctime` (último cambio del **inodo**: permisos, propietario,
  enlaces, nombre). `mv` dentro del mismo sistema de archivos solo cambia `ctime`; `chmod`, `ctime`; escribir, `mtime` y `ctime`. ext4 guarda además la de creación (`crtime`). NTFS guarda cuatro marcas
  (MACB) dos veces: en `$STANDARD_INFORMATION` (que el usuario puede falsificar con `timestomp`) y en `$FILE_NAME` (que solo cambia el núcleo); si discrepan, alguien las tocó.

Herramientas: `log2timeline`/`plaso` (une decenas de fuentes en una supertimeline), `mactime` de The Sleuth Kit.

## 3. Sistemas de archivos y memoria

**Sistemas de archivos** (Carrier): borrar un archivo marca libres su inodo y sus bloques, pero los datos siguen ahí hasta que se reutilizan. En ext4, al borrar se ponen a cero los punteros de extensión del
inodo, así que la recuperación usa el **diario** (copias antiguas de los inodos) o el **tallado** (*carving*: buscar firmas de formato como `FF D8 FF` de JPEG o `%PDF`, sin metadatos). En NTFS, la
`$MFT` conserva las entradas borradas hasta que se reutilizan, y el `$UsnJrnl` registra los cambios. Los SSD con TRIM borran de verdad, y pronto: lo que no se recogió puede perderse.

**Memoria** (Ligh et al.; Volatility 3): una imagen de la RAM (con LiME en Linux o WinPmem en Windows) contiene procesos, conexiones, módulos, claves y código inyectado. El analizador reconstruye las
estructuras del núcleo traduciendo direcciones como hace la MMU: en x86-64 con 4 niveles, los bits 47-39, 38-30, 29-21 y 20-12 de la dirección virtual indexan las tablas PML4, PDPT, PD y PT (512 entradas
cada una) y los 12 bits bajos son el desplazamiento. Técnicas típicas: comparar la lista enlazada de procesos con un barrido de memoria (un proceso oculto aparece solo en el barrido), buscar regiones
ejecutables y escribibles sin archivo detrás (código inyectado).

## 4. Registros de Linux

- **syslog** (RFC 5424): cada mensaje lleva `<PRI>` = instalación × 8 + gravedad. `auth` es 4, `authpriv` 10, `local0`-`local7` 16-23; gravedades de 0 (`emerg`) a 7 (`debug`). `<38>` es auth.info (4 × 8 + 6).
  rsyslog o syslog-ng los reparten en archivos (`/var/log/auth.log`, `syslog`) y los reenvían.
- **journald**: registro binario con campos estructurados (`_PID`, `_UID`, `_SYSTEMD_UNIT`), consultable con `journalctl -u sshd --since … -o json`.
- **auditd**: el subsistema de auditoría del núcleo; registra llamadas al sistema según reglas (`-w /etc/shadow -p wa -k cuentas`, `-a always,exit -F arch=b64 -S execve`). Es la fuente más fiable de "qué
  ejecutó quién".
- **Aplicaciones**: servidores web (Common/Combined Log Format), bases de datos, SSH (`Failed password`, `Accepted publickey`, `Invalid user`).

## 5. Registros de Windows

El registro de **Seguridad** (con la directiva de auditoría adecuada) es la fuente principal: **4624** inicio de sesión correcto, **4625** fallido, **4688** creación de proceso (con la línea de órdenes si
se activa), **4720** cuenta de usuario creada, **4732** miembro añadido a un grupo local, **1102** registro de auditoría borrado. El **tipo de inicio de sesión** dice cómo: 2 interactivo, 3 de red (una
carpeta compartida), 10 remoto interactivo (Escritorio remoto). **Sysmon** (de Sysinternals) añade eventos mucho más ricos (creación de procesos con hash y proceso padre, conexiones de red, carga de
controladores). Además: los registros de PowerShell (registro de bloques de script, evento 4104), el Registro de Windows (claves de ejecución automática), los archivos Prefetch y las tareas programadas.

## 6. Detección

Una **regla** convierte conocimiento en búsqueda automática: "5 o más fallos de contraseña de la misma IP en 60 segundos" detecta fuerza bruta; "un éxito desde esa IP justo después" detecta que ha
funcionado, y es mucho más grave. Toda regla tiene **falsos positivos** (un usuario que olvidó la contraseña, una red con NAT) y **falsos negativos** (el atacante que hace un intento cada 61 segundos,
o reparte entre muchas IP). Por eso se combinan reglas sobre distintos rasgos y se ajustan con datos reales. **Sigma** es un formato abierto de reglas que se traduce a cada SIEM.

**Indicadores**: la **pirámide del dolor** (Bianco, 2013) ordena lo que se puede detectar por lo que le cuesta al atacante cambiarlo: valores hash (trivial), IP, dominios, artefactos de red y de máquina,
herramientas y, en la cima, **tácticas, técnicas y procedimientos** (TTP), que exigen cambiar su forma de trabajar. **MITRE ATT&CK** cataloga las técnicas con identificadores: fuerza bruta es T1110,
cuentas válidas T1078. Los identificadores cambian entre versiones (el borrado de los registros de Windows pasó de T1070.001 a T1685.005), así que se cita la versión. Los dominios generados por algoritmo
(DGA) se detectan, entre otras cosas, por su **entropía**: una cadena aleatoria de 10 caracteres distintos llega a log₂ 10 ≈ 3,32 bits por carácter, más que casi cualquier nombre elegido por una persona.

## 7. Que los registros sean de fiar

Un atacante con privilegios borra o modifica los registros locales (ATT&CK lo cataloga como evasión). Defensas:

- **Envío inmediato** a un servidor central (syslog sobre TLS, un SIEM) en el que el atacante no tiene credenciales.
- **Encadenamiento de hashes**: hᵢ = H(hᵢ₋₁ ‖ líneaᵢ). Cambiar una línea cambia su hash y todos los siguientes; basta con guardar en un sitio seguro el último. Los esquemas con **seguridad hacia adelante**
  (Schneier y Kelsey, 1999; Bellare y Yee) cambian la clave tras cada entrada para que el atacante que roba la clave de hoy no pueda falsificar las de ayer. journald implementa esta idea con `--setup-keys`
  (Forward Secure Sealing).
- **Sincronización de relojes** y **retención** suficiente: muchas intrusiones se descubren meses después.

## 8. Comprobar con un programa

Normalización de zonas horarias, la regla de fuerza bruta y la cadena de hashes:

```python
# Línea de tiempo en UTC, regla de fuerza bruta con ventana deslizante y cadena de hashes para la integridad de un registro
import datetime as dt
import hashlib
import re

def utc_clf(s):
    return dt.datetime.strptime(s, "%d/%b/%Y:%H:%M:%S %z").astimezone(dt.timezone.utc)

a = utc_clf("14/Nov/2026:03:15:00 +0100")
b = dt.datetime.fromisoformat("2026-11-14T02:40:00+00:00")
print("minutos entre Apache y el cortafuegos:", (b - a).total_seconds() / 60)

registro = """Nov 14 03:10:01 web sshd[1201]: Failed password for root from 203.0.113.250 port 50122 ssh2
Nov 14 03:10:09 web sshd[1203]: Failed password for root from 203.0.113.250 port 50130 ssh2
Nov 14 03:10:12 web sshd[1204]: Failed password for invalid user admin from 192.0.2.77 port 40211 ssh2
Nov 14 03:10:20 web sshd[1206]: Failed password for root from 203.0.113.250 port 50141 ssh2
Nov 14 03:10:31 web sshd[1208]: Failed password for root from 203.0.113.250 port 50155 ssh2
Nov 14 03:10:58 web sshd[1212]: Failed password for invalid user admin from 192.0.2.77 port 40233 ssh2
Nov 14 03:11:02 web sshd[1214]: Failed password for root from 203.0.113.250 port 50170 ssh2
Nov 14 03:11:05 web sshd[1215]: Failed password for invalid user backup from 192.0.2.77 port 40240 ssh2
Nov 14 03:11:15 web sshd[1217]: Failed password for invalid user oracle from 192.0.2.77 port 40252 ssh2
Nov 14 03:11:20 web sshd[1218]: Failed password for invalid user test from 192.0.2.77 port 40260 ssh2
Nov 14 03:11:41 web sshd[1220]: Failed password for invalid user ubuntu from 192.0.2.77 port 40277 ssh2
Nov 14 03:12:30 web sshd[1225]: Accepted password for deploy from 192.0.2.77 port 40301 ssh2"""

fallos = {}
for linea in registro.splitlines():
    m = re.search(r"Failed password for (?:invalid user )?\S+ from (\S+)", linea)
    if m:
        h, mi, s = map(int, linea.split()[2].split(":"))
        fallos.setdefault(m.group(1), []).append(h * 3600 + mi * 60 + s)
for ip, t in sorted(fallos.items()):
    ventana = min((t[i + 4] - t[i] for i in range(len(t) - 4)), default=None)
    print(ip, "fallos:", len(t), "ventana mínima de 5:", ventana, "→ DETECTADA" if ventana is not None and ventana <= 60 else "")

def cadena(lineas):
    h, hs = bytes(32), []
    for l in lineas:
        h = hashlib.sha256(h + l.encode()).digest()
        hs.append(h.hex()[:16])
    return hs

orig = ["09:00:00 servicio iniciado", "09:05:12 copia de seguridad correcta", "09:30:40 usuario ana cerró sesión"]
alterado = [orig[0], orig[1].replace("correcta", "fallida"), orig[2]]
print("original:", cadena(orig))
print("alterado:", cadena(alterado))
```

Salida:

```
minutos entre Apache y el cortafuegos: 25.0
192.0.2.77 fallos: 6 ventana mínima de 5: 43 → DETECTADA
203.0.113.250 fallos: 5 ventana mínima de 5: 61 
original: ['5e61968f8af9bee6', 'f3394bedc3358b5a', '579c8cf58eb7c9a8']
alterado: ['5e61968f8af9bee6', 'd19b5d32abf66084', 'a6e557c2ac63ccc1']
```

El primer hash coincide y los dos siguientes cambian. Observa que 203.0.113.250 se queda fuera de la regla por un segundo: un atacante paciente la esquiva.

## 9. Errores típicos

- Apagar o reiniciar la máquina antes de recoger la memoria; trabajar sobre el original; no calcular hashes al recoger.
- Mezclar zonas horarias o fiarse de un `auth.log` sin año; confundir `ctime` con la fecha de creación.
- Sacar conclusiones de la ausencia de registros (puede que nunca se registrara o que se borrara).
- Reglas sin medir falsos positivos, o con umbrales que el atacante puede leer y esquivar.
- Dejar los registros solo en la máquina que se quiere investigar.
- Citar técnicas de ATT&CK sin versión.

## 10. Resumen

- Proceso: recoger (orden de volatilidad), examinar, analizar, informar; hashes, copias, cadena de custodia, reproducibilidad.
- Tiempo: todo a UTC, desfases medidos, significado de atime/mtime/ctime y de las marcas de NTFS.
- Sistemas de archivos (borrado, diario, tallado) y memoria (procesos ocultos, código inyectado, traducción de direcciones).
- Linux: syslog (PRI), journald, auditd. Windows: 4624/4625/4688/4720/1102, tipos de inicio de sesión, Sysmon.
- Detección: reglas con falsos positivos y negativos, Sigma, pirámide del dolor, ATT&CK. Integridad: envío remoto, cadenas de hashes, sellado con seguridad hacia adelante.

## Repaso: lo que debe quedarte dentro de un mes

1. Primero lo más volátil; nunca sobre el original; hash de todo.
2. Todo a UTC antes de comparar.
3. `ctime` no es "creación": es el último cambio del inodo.
4. Un éxito después de muchos fallos es la alarma de verdad.
5. Un registro que el atacante puede editar no prueba nada: envíalo fuera y encadénalo.

## Siguiente

`sec-reversing-malware` (qué hace el código que encontraste en la memoria) y `sec-seguridad-redes`; practica en [[lab-sec-forense-servidor]].
