---
id: sys-redes-sockets
title: "Programación de red con sockets: TCP, UDP, enmarcado, concurrencia y HTTP a mano"
area: bajo-nivel
trunk_level: 10
prerequisites: [sec-redes-tcpip, sys-procesos-planificacion]
academic_sources:
  - "Stevens, W. R.; Fenner, B.; Rudoff, A. M. UNIX Network Programming, Volume 1: The Sockets Networking API, 3ª ed. Addison-Wesley, 2003."
  - "Kerrisk, M. The Linux Programming Interface. No Starch Press, 2010 (capítulos de sockets)."
  - "RFC 9110: HTTP Semantics y RFC 9112: HTTP/1.1 (Fielding, Nottingham, Reschke). IETF, junio de 2022 (la codificación chunked está en RFC 9112)."
  - "Little, J. D. C. A Proof for the Queuing Formula: L = λW. Operations Research, 9(3), 383-387, 1961."
  - "Python Software Foundation. socket, selectors, ssl y urllib.parse (docs.python.org/3/library); páginas de manual socket(7), tcp(7), udp(7), ip(7)."
hints:
  - "Concepto: TCP entrega un FLUJO de bytes, no mensajes: un send puede llegar troceado en varios recv o varios send pegados en uno; por eso todo protocolo sobre TCP necesita enmarcado (longitud delante o delimitador). UDP sí conserva los límites de cada datagrama, pero puede perderlos o desordenarlos. recv que devuelve 0 bytes significa que el otro extremo cerró."
  - "Herramienta: prueba cliente y servidor en 127.0.0.1 con Python (socket, threading); `nc -l 9000` y `nc 127.0.0.1 9000` hacen de servidor o cliente de prueba; `ss -tanp` muestra conexiones y estados; `curl -v` enseña la petición y la respuesta HTTP en crudo; Wireshark con el filtro `tcp.port == 9000` muestra cada segmento."
  - "Documentación: docs.python.org/3/howto/sockets.html (guía de sockets), docs.python.org/3/library/socket.html y selectors.html; RFC 9112, secciones de formato de mensaje y codificación chunked; páginas de manual socket(7) y tcp(7); Stevens, Fenner y Rudoff, capítulos de cliente/servidor TCP y de E/S multiplexada."
exercises:
  - id: htons
    tier: 1
    prompt: |
      En un x86-64 (little-endian), ¿qué valor devuelve `socket.htons(1)` en Python (o `htons(1)` en C)? Respuesta: un entero en decimal.
    answers: ["sha256:51e8ea280b44e16934d4d611901f3d3afc41789840acdff81942c2f65009cd52"]
  - id: bytes-con-prefijo-de-longitud
    tier: 1
    prompt: |
      Un protocolo enmarca cada mensaje con un prefijo de **2 bytes** (big-endian) con su longitud en bytes, seguido del mensaje en UTF-8. ¿Cuántos bytes en total ocupan los mensajes `hola`, `` (vacío) y `adiós`? Respuesta: un entero.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: recv-parciales
    tier: 1
    prompt: |
      Un servidor TCP hace `sendall(b"abc")`, `sendall(b"defg")` y cierra. El cliente, cuando ya le han llegado todos los datos, llama a `recv(2)` en un bucle hasta que devuelve `b""`. ¿Cuántas llamadas devuelven datos? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: autenticacion-basica
    tier: 1
    prompt: |
      La autenticación HTTP *Basic* envía `usuario:contraseña` codificado en Base64 (codificado, **no** cifrado: sin TLS cualquiera lo lee). ¿Qué texto Base64 corresponde a `ana:secreta`? Respuesta: el texto.
    answers: ["sha256:70da205ca07ea9e6c86fb8f5b3ff306e0401cbf86ee71cfc844bd03724afd02a"]
  - id: codificacion-por-porcentaje
    tier: 2
    prompt: |
      ¿Cómo queda `a b&c=d/é` tras codificarlo por porcentaje para ir como **valor** de un parámetro de URL (todo lo que no sea letra ASCII, dígito o `-_.~` se codifica, en UTF-8 y con hexadecimal en mayúsculas)? Respuesta: el texto codificado.
    answers: ["sha256:99151a58262a93868c620fab14910582e46ecd56e5d743b132c9cee3871a0aa9"]
  - id: udp-conserva-limites
    tier: 2
    prompt: |
      Por UDP, un emisor envía tres datagramas de $5$, $0$ y $7$ bytes a un receptor, que llama tres veces a `recvfrom(1024)`. ¿Cuántos bytes devuelve cada llamada? (En un enlace local no se pierde nada.) Respuesta: los tres números separados por `;`.
    answers: ["sha256:abf6d48eaa115d2a78313444beeaa935567ff6ab50d78884003541a92bcebc8b"]
  - id: servidor-de-eco-enmarcado
    tier: 2
    prompt: |
      Un servidor lee mensajes con prefijo de longitud de 2 bytes y devuelve cada uno, con el mismo enmarcado, en **mayúsculas**. Un cliente envía de una vez (un solo `sendall`) los mensajes `hola`, `red` y `eco` enmarcados, y lee tres respuestas. ¿Qué recibe? Respuesta: los tres textos separados por `;`.
    answers: ["sha256:8d1f2a35fd0cd753712373e9af061a969bb145eade8d2dc7475abee074a73171"]
  - id: decodificar-chunked
    tier: 2
    prompt: |
      Decodifica este cuerpo HTTP con codificación *chunked* (cada trozo: tamaño en hexadecimal, `CRLF`, datos, `CRLF`; termina con un trozo de tamaño 0):

      ```text
      4\r\nWiki\r\n5\r\npedia\r\nE\r\n in\r\n\r\nchunks.\r\n0\r\n\r\n
      ```

      Respuesta: el texto decodificado, tal cual (los espacios y saltos de línea no cuentan al comparar).
    answers: ["sha256:86d3dcb4d70c99c584db1022dd3279c82d868ab70ad12a2e9b70d2652eb2ca36"]
  - id: leer-una-respuesta-http
    tier: 2
    prompt: |
      Una respuesta HTTP/1.1 empieza por `HTTP/1.1 404 Not Found` y lleva las cabeceras `Content-Type: text/plain`, `Content-Length: 13` y `Connection: close`, seguidas de una línea vacía y el cuerpo `no encontrado`. ¿Cuál es el código de estado y cuántos bytes de cuerpo hay que leer? Respuesta: los dos números separados por `;`.
    answers: ["sha256:84854e75b733ec138375045c1e8698ec007c51e03722c28b199ab0d8700a4a28"]
  - id: servidor-con-select
    tier: 2
    prompt: |
      Un servidor con `select()` atiende a la vez a tres clientes; el cliente $i$ ($i = 1, 2, 3$) envía el texto `"{10i} {i} "` (por ejemplo, el primero `"10 1 "`) y cierra. El servidor suma todos los números que recibe hasta que se cierran los tres. ¿Qué total obtiene? Respuesta: un entero.
    answers: ["sha256:3ada92f28b4ceda38562ebf047c6ff05400d4c572352a1142eedfef67d21e662"]
  - id: peticion-http-en-bytes
    tier: 2
    prompt: |
      Una petición `POST /alta HTTP/1.1` lleva las cabeceras `Host: exodus.lan`, `Content-Type: application/x-www-form-urlencoded` y `Content-Length`, cada línea terminada en `\r\n`, una línea vacía y el cuerpo `nombre=Ana&ciudad=Málaga` en UTF-8. ¿Cuánto vale `Content-Length` y cuántos bytes ocupa la petición completa? Respuesta: los dos números separados por `;`.
    answers: ["sha256:a42f74da43cef3f1fa5cf3e6828208104d0b4c5fe4d368e34a19f4357c04e50e"]
  - id: ley-de-little
    tier: 3
    prompt: |
      A un servidor llegan de media $200$ peticiones por segundo y cada una tarda de media $50$ ms en atenderse. Por la **ley de Little** ($L = \lambda W$), ¿cuántas peticiones hay en curso a la vez, de media? (Es el mínimo de hilos o conexiones simultáneas que debe admitir.) Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: puertos-efimeros
    tier: 3
    prompt: |
      Un cliente abre y cierra conexiones TCP contra **el mismo** servidor y puerto. Dispone de $28\,232$ puertos efímeros y cada conexión cerrada deja su puerto ocupado $60$ s en `TIME_WAIT`. ¿Cuántas conexiones nuevas por segundo puede mantener indefinidamente, como máximo? Respuesta: un entero (redondea hacia abajo).
    answers: ["sha256:30eec89ddd9c342ef28a87f731d6e50ba977baf12d7caa7045a9d56b0e923f03"]
  - id: flujo-sin-enmarcar
    tier: 3
    prompt: |
      Un servidor envía dos objetos JSON seguidos, `{"a": 1}` y `{"b": 2}`, con dos `sendall` y sin separador, y cierra. El cliente lee todo hasta el final y llama **una vez** a `json.loads` con lo recibido. Otra versión del protocolo termina cada objeto con `\n` y el cliente decodifica línea a línea. ¿Cuántos objetos se decodifican correctamente en cada versión? Respuesta: los dos números separados por `;`.
    answers: ["sha256:4678a16a156b8b96e70f49eb04791bcbb641f47e8000b01a5abd834c58bf319f"]
---

# Programación de red con sockets: TCP, UDP, enmarcado, concurrencia y HTTP a mano

[[sec-redes-tcpip]] explicó cómo viajan los paquetes; este nodo enseña a **programar** sobre esa pila. La interfaz es la de
**sockets**, nacida en el Unix de Berkeley y presente hoy en todos los sistemas: un socket es un descriptor de archivo
([[sys-procesos-planificacion]]) por el que se leen y escriben bytes hacia otra máquina. Aquí aprenderás el ciclo de vida de un
cliente y un servidor, la diferencia práctica entre el flujo de TCP y los datagramas de UDP, por qué todo protocolo necesita
**enmarcado**, cómo atender a muchos clientes a la vez, cómo hacer servicios robustos (plazos, límites, cierre ordenado) y cómo
hablar HTTP/1.1 sin bibliotecas. Los ejemplos se ejecutan de verdad sobre `127.0.0.1`.

## Objetivos

Al terminar sabrás:

1. Escribir un cliente y un servidor TCP y UDP (en Python y en C) y explicar `socket`, `bind`, `listen`, `accept` y `connect`.
2. Tratar las lecturas y escrituras **parciales** de TCP y diseñar un **enmarcado** de mensajes (prefijo de longitud o delimitador).
3. Elegir un modelo de concurrencia (procesos, hilos, multiplexación con `select`/`epoll`, bucle de eventos) y dimensionarlo con la
   **ley de Little**.
4. Hacer servicios robustos: plazos (*timeouts*), límites de tamaño, `SO_REUSEADDR`, `TIME_WAIT` y agotamiento de puertos.
5. Escribir y analizar peticiones y respuestas **HTTP/1.1** (cabeceras, `Content-Length`, *chunked*, codificación por porcentaje).
6. Explicar qué añade **TLS** y por qué nunca se desactiva la verificación del certificado.

## Qué debes dominar antes

[[sec-redes-tcpip]] (IP, puertos, TCP y UDP, orden de bytes de red) y [[sys-procesos-planificacion]] (descriptores, `fork`, hilos y
bloqueo). Los ejemplos en Python usan lo visto en [[prog-python-fundamentos]].

> [!question] Test de entrada
> 1. ¿Qué identifica de forma única una conexión TCP?
> 2. ¿Qué devuelve `read` sobre una tubería cuando el escritor ya cerró y no quedan datos?
> 3. ¿En qué orden viajan los dos bytes del número `0x1F90` por la red?
>
> Respuestas: la 4-tupla (IP y puerto de origen, IP y puerto de destino); 0 (fin de archivo); primero `1F` y después `90`.

## 1. Para qué sirve

- **Todo servicio en red** (web, bases de datos, juegos, IoT, la propia plataforma Exodus) es, por debajo, un servidor de sockets.
- **Diagnóstico**: saber que TCP es un flujo explica errores de «mensajes cortados» o «pegados» que solo aparecen con carga o en
  redes lentas.
- **Diseño de protocolos y APIs**: enmarcado, plazos, reintentos y límites deciden si un servicio aguanta clientes lentos o
  maliciosos.
- **Seguridad**: entradas sin límite, falta de plazos y credenciales sin cifrar son vulnerabilidades clásicas de servicios de red
  ([[sec-web]]).

## 2. El modelo de sockets

Un socket se crea con una **familia** (`AF_INET` para IPv4, `AF_INET6` para IPv6, `AF_UNIX` para la comunicación local) y un
**tipo** (`SOCK_STREAM` para TCP, `SOCK_DGRAM` para UDP).

**Servidor TCP**: `socket` → `bind` (dirección y puerto locales) → `listen` (marca el socket como pasivo; el núcleo completa el
saludo de tres pasos y encola las conexiones; el *backlog* acota la cola) → `accept` (bloquea hasta que hay una conexión y devuelve
un **socket nuevo**, conectado con ese cliente; el original sigue escuchando).

**Cliente TCP**: `socket` → `connect` (el núcleo elige un **puerto efímero** de origen y hace el saludo). Después, ambos extremos
leen y escriben (`recv`/`send`, o `read`/`write` en C) y cierran (`close`).

Para no depender de IPv4 o IPv6, los nombres se resuelven con **`getaddrinfo`**, que devuelve una lista de direcciones candidatas
(en Python, `socket.create_connection((host, puerto))` las prueba en orden). Los números de puerto y las direcciones se guardan en
**orden de red**: `htons(8080)` reordena los bytes en un x86.

```c
#define _DEFAULT_SOURCE
#include <arpa/inet.h>
#include <assert.h>
#include <netinet/in.h>
#include <string.h>
#include <sys/socket.h>
#include <sys/wait.h>
#include <unistd.h>

int main(void) {
    int srv = socket(AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in dir = {0};
    dir.sin_family = AF_INET;
    dir.sin_addr.s_addr = htonl(INADDR_LOOPBACK);   /* 127.0.0.1, en orden de red */
    dir.sin_port = htons(0);                        /* 0: que el núcleo elija un puerto libre */
    assert(bind(srv, (struct sockaddr *)&dir, sizeof dir) == 0 && listen(srv, 8) == 0);
    socklen_t len = sizeof dir;
    getsockname(srv, (struct sockaddr *)&dir, &len); /* ¿qué puerto nos dieron? */

    if (fork() == 0) {                               /* hijo: cliente */
        int c = socket(AF_INET, SOCK_STREAM, 0);
        assert(connect(c, (struct sockaddr *)&dir, sizeof dir) == 0);
        const char msg[] = "hola";
        assert(write(c, msg, 4) == 4);
        char buf[8] = {0};
        assert(read(c, buf, sizeof buf - 1) == 4 && strcmp(buf, "HOLA") == 0);
        close(c);
        _exit(0);
    }
    int con = accept(srv, NULL, NULL);               /* padre: servidor */
    char buf[8];
    ssize_t n = read(con, buf, sizeof buf);
    for (ssize_t i = 0; i < n; i++)
        buf[i] = (char)(buf[i] - 'a' + 'A');         /* responde en mayúsculas */
    assert(write(con, buf, (size_t)n) == n);
    close(con);
    int estado;
    wait(&estado);
    assert(WIFEXITED(estado) && WEXITSTATUS(estado) == 0);
    close(srv);
    return 0;
}
```

(En este ejemplo de 4 bytes en `127.0.0.1` una sola lectura basta; en general **no**: sección 3.)

## 3. TCP es un flujo de bytes: lecturas parciales y enmarcado

TCP garantiza que los bytes llegan **todos, en orden y una vez**, pero **no conserva los límites** de cada `send`: tres `send` pueden
llegar en un `recv`, y un `send` grande puede llegar en varios. `recv(n)` devuelve **entre 1 y $n$** bytes (lo que haya), o 0 si el otro
extremo cerró. `send` puede escribir menos de lo pedido; `sendall` repite hasta enviarlo todo.

Por eso todo protocolo sobre TCP define cómo se separan los mensajes (**enmarcado**):

- **Prefijo de longitud**: cada mensaje va precedido de su tamaño en un número fijo de bytes (por ejemplo, 2 o 4, en big-endian). Se
  lee la cabecera con una función que lee **exactamente** $n$ bytes y después el cuerpo.
- **Delimitador**: cada mensaje termina en un carácter que no puede aparecer dentro (`\n` en muchos protocolos de texto, `\r\n` en
  las cabeceras HTTP). Sencillo de depurar; exige escapar o prohibir el delimitador.

**Ejemplo resuelto 1: un servidor de eco enmarcado.**

```python
import socket
import struct
import threading


def recv_exacto(s, n):
    """Lee exactamente n bytes o lanza ConnectionError si el otro extremo cierra antes."""
    datos = b""
    while len(datos) < n:
        trozo = s.recv(n - len(datos))
        if not trozo:
            raise ConnectionError("cerrado a mitad de mensaje")
        datos += trozo
    return datos


def enviar(s, mensaje: bytes):
    s.sendall(struct.pack(">I", len(mensaje)) + mensaje)    # 4 bytes de longitud, big-endian


def recibir(s, maximo=1 << 20):
    (n,) = struct.unpack(">I", recv_exacto(s, 4))
    if n > maximo:                                          # nunca te fíes de una longitud ajena
        raise ValueError("mensaje demasiado grande")
    return recv_exacto(s, n)


def atiende(con):
    with con:
        try:
            while True:
                enviar(con, recibir(con)[::-1])             # devuelve cada mensaje al revés
        except ConnectionError:
            pass


srv = socket.socket()
srv.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
srv.bind(("127.0.0.1", 0))
srv.listen()
puerto = srv.getsockname()[1]


def acepta():
    con, _ = srv.accept()
    atiende(con)


hilo = threading.Thread(target=acepta)
hilo.start()
with socket.create_connection(("127.0.0.1", puerto), timeout=5) as c:
    for m in [b"exodus", b"", "año".encode()]:
        enviar(c, m)
    respuestas = [recibir(c) for _ in range(3)]
hilo.join()
srv.close()
assert respuestas == [b"sudoxe", b"", "año".encode()[::-1]]
```

Fíjate en tres detalles profesionales: `recv_exacto` trata las lecturas parciales; `recibir` **acota** la longitud que anuncia el
otro (si no, un cliente malicioso podría pedir que reservaras 4 GB); y el cliente usa `timeout` para no quedarse colgado.

## 4. UDP: datagramas

Con `SOCK_DGRAM` no hay conexión: cada `sendto` envía un **datagrama** completo y cada `recvfrom` devuelve **uno** (si el búfer es
más pequeño, el resto se descarta). Los límites se conservan, pero los datagramas pueden **perderse, duplicarse o llegar
desordenados**, y no hay control de congestión. Una aplicación sobre UDP pone sus propias reglas: un cliente de DNS envía la
pregunta, espera la respuesta con un **plazo** y, si no llega, reintenta (quizá con otro servidor). El tamaño práctico de un
datagrama sin fragmentar en Ethernet es de 1472 bytes de datos.

## 5. Atender a muchos clientes

Un servidor que atiende a un cliente detrás de otro (**iterativo**) deja esperando a todos mientras uno es lento. Alternativas:

| Modelo | Idea | Ventajas | Inconvenientes |
|---|---|---|---|
| Un proceso por cliente | `fork` tras `accept` | aislamiento total | memoria y coste de crear procesos |
| Un hilo por cliente | `threading` / `pthread_create` | sencillo; memoria compartida | miles de hilos pesan; hay que sincronizar |
| Grupo de hilos | $N$ hilos fijos y una cola | coste acotado | hay que elegir $N$ |
| Multiplexación | `select`/`poll`/`epoll` | un hilo, miles de conexiones | código basado en eventos |
| Bucle de eventos | `asyncio`, Node.js | multiplexación con sintaxis secuencial | una tarea que bloquea, bloquea a todas |

**Multiplexación.** `select(lista)` bloquea hasta que **alguno** de los sockets está listo para leer (un cliente envió datos, o hay una
conexión nueva en el socket que escucha) y devuelve cuáles. `epoll` (Linux) hace lo mismo con coste independiente del número de
sockets vigilados, y es la base de los servidores que atienden decenas de miles de conexiones. En Python, el módulo `selectors`
elige el mecanismo más eficiente del sistema.

**Dimensionar: la ley de Little.** En un sistema estable, el número medio de elementos dentro $L$, la tasa de llegada $\lambda$ y el
tiempo medio de estancia $W$ cumplen

$$
L = \lambda\,W
$$

(Little, 1961; vale para cualquier disciplina de servicio). Si llegan 500 peticiones por segundo y cada una tarda 40 ms, hay de media
$L = 500\cdot0{,}04 = 20$ peticiones en curso: un grupo de menos de 20 hilos formaría cola. Y si la base de datos se vuelve lenta y $W$
se duplica, también se duplican las conexiones necesarias, aunque no lleguen más usuarios.

## 6. Robustez

- **Plazos**: sin `settimeout`, un `recv` sobre un cliente que desaparece sin cerrar (se cae la red) espera para siempre. Todo socket de
  un servicio lleva plazo de conexión y de lectura.
- **Límites**: tamaño máximo de mensaje, de cabeceras y de cuerpo, número máximo de conexiones por cliente. Un ataque *slowloris*
  abre muchas conexiones y envía las cabeceras HTTP byte a byte para agotar los hilos del servidor: se defiende con plazos totales
  por petición y límites de conexiones.
- **`SO_REUSEADDR`**: permite volver a hacer `bind` al puerto del servidor aunque queden conexiones antiguas en `TIME_WAIT` (si no,
  reiniciar el servidor falla con «address already in use»).
- **Agotamiento de puertos**: cada conexión que un cliente cierra deja su puerto efímero en `TIME_WAIT` un tiempo; un cliente que abre
  y cierra muchas conexiones contra el mismo destino puede quedarse sin puertos. La solución es **reutilizar conexiones** (HTTP
  *keep-alive*, grupos de conexiones).
- **Cierre ordenado**: `shutdown(SHUT_WR)` indica «no enviaré más» (el otro recibe fin de archivo) pero permite seguir leyendo la
  respuesta.
- **`SIGPIPE`**: escribir en una conexión que el otro cerró envía `SIGPIPE` y, por defecto, mata el proceso; los servidores en C lo
  ignoran o usan `MSG_NOSIGNAL` y tratan el error `EPIPE`.

## 7. HTTP/1.1 a mano

HTTP es un protocolo de texto sobre TCP (RFC 9110 define su semántica y RFC 9112 el formato de HTTP/1.1). Una **petición** es una línea
de petición, cabeceras, una línea vacía y un cuerpo opcional; cada línea termina en `\r\n`:

```text
GET /temario?area=sistemas HTTP/1.1
Host: exodus.lan
Accept: text/html
Connection: close

```

La **respuesta** empieza por la línea de estado (`HTTP/1.1 200 OK`), cabeceras, línea vacía y cuerpo. Los códigos se agrupan por su
primera cifra: 2xx éxito, 3xx redirección, 4xx error del cliente (404 no encontrado, 403 prohibido), 5xx error del servidor.

**¿Dónde acaba el cuerpo?** Es el problema del enmarcado otra vez, con tres respuestas: `Content-Length: n` (exactamente $n$ bytes,
contados en **bytes**, no en caracteres: `é` ocupa 2 en UTF-8); `Transfer-Encoding: chunked` (trozos, cada uno precedido de su tamaño
en hexadecimal y seguido de `\r\n`, hasta un trozo de tamaño 0), que permite enviar respuestas cuyo tamaño no se conoce de antemano;
o cerrar la conexión (solo en respuestas). Con *keep-alive* (lo predeterminado en HTTP/1.1) la conexión se reutiliza para varias
peticiones, y por eso el enmarcado tiene que ser exacto.

**URL y caracteres especiales.** En una URL, los caracteres reservados (`?`, `&`, `=`, `/`, espacio…) y los no ASCII se escriben con
**codificación por porcentaje**: cada byte UTF-8 como `%` y dos cifras hexadecimales (`é` → `%C3%A9`, espacio → `%20`).

**Ejemplo resuelto 2.** La petición anterior ocupa: `GET /temario?area=sistemas HTTP/1.1` (35 caracteres) $+ 2$, `Host: exodus.lan`
($16 + 2$), `Accept: text/html` ($17 + 2$), `Connection: close` ($17 + 2$) y la línea vacía ($2$): $35 + 2 + 18 + 19 + 19 + 2 = 95$
bytes.

```python
peticion = (b"GET /temario?area=sistemas HTTP/1.1\r\n"
            b"Host: exodus.lan\r\n"
            b"Accept: text/html\r\n"
            b"Connection: close\r\n"
            b"\r\n")
assert len(peticion) == 95

respuesta = b"HTTP/1.1 200 OK\r\nContent-Length: 5\r\nContent-Type: text/plain\r\n\r\nhola!"
cabeceras, cuerpo = respuesta.split(b"\r\n\r\n", 1)
linea_estado, *resto = cabeceras.decode("ascii").split("\r\n")
campos = {k.lower(): v.strip() for k, v in (l.split(":", 1) for l in resto)}
assert linea_estado.split()[1] == "200"
assert int(campos["content-length"]) == len(cuerpo) == 5
```

**Autenticación y credenciales.** La autenticación *Basic* envía `usuario:contraseña` en **Base64**, que es una codificación reversible,
no un cifrado: sin TLS, cualquiera en el camino la lee. Lo mismo ocurre con las *cookies* de sesión.

## 8. TLS

TLS se intercala entre TCP y la aplicación (HTTPS = HTTP sobre TLS) y aporta **confidencialidad** (cifrado), **integridad** (MAC: nadie
modifica los datos sin que se note) y **autenticación del servidor** mediante un certificado firmado por una autoridad en la que confía el
cliente ([[sec-criptografia]]). En Python, `ssl.create_default_context()` verifica el certificado y el nombre del servidor; desactivar la
verificación (`verify_mode = CERT_NONE`) para «que funcione» deja la conexión abierta a un intermediario que se haga pasar por el
servidor. En producción, TLS lo suele terminar un proxy inverso (Caddy, nginx) delante de la aplicación, como en el perfil `https` de
esta plataforma.

## 9. Errores típicos

- Suponer que un `recv` devuelve exactamente un mensaje, o que `send` envía todo (usa `sendall`).
- No tratar `recv` que devuelve `b""` (cierre) y entrar en un bucle infinito.
- Confiar en una longitud enviada por el otro extremo sin acotarla.
- Sockets sin plazo; servidores iterativos que se bloquean con un cliente lento.
- Contar `Content-Length` en caracteres en lugar de bytes.
- Olvidar `\r\n` en HTTP o la línea vacía que separa cabeceras y cuerpo.
- Abrir una conexión nueva por petición (agotamiento de puertos) en lugar de reutilizarla.
- Desactivar la verificación de certificados TLS o enviar credenciales sin cifrar.

## 10. Resumen

- Servidor: `socket`, `bind`, `listen`, `accept` (socket nuevo por cliente). Cliente: `socket`, `connect`.
- TCP es un flujo: lecturas y escrituras parciales; `recv_exacto` y `sendall`; enmarcado por longitud o delimitador.
- UDP: datagramas con límites, sin garantías; plazos y reintentos en la aplicación.
- Concurrencia: procesos, hilos, grupos, `select`/`epoll`, bucles de eventos; $L = \lambda W$.
- Robustez: plazos, límites, `SO_REUSEADDR`, `TIME_WAIT`, reutilizar conexiones, `SIGPIPE`.
- HTTP/1.1: líneas con `\r\n`, línea vacía, `Content-Length` en bytes o *chunked*; codificación por porcentaje; Base64 no cifra; TLS.

## Repaso: lo que debe quedarte dentro de un mes

1. TCP no conserva los límites de los mensajes: siempre hay que enmarcar.
2. `recv` puede devolver menos de lo pedido; `b""` significa cierre.
3. UDP conserva los límites pero puede perder datagramas.
4. Ley de Little: conexiones simultáneas = tasa de llegada por tiempo de servicio.
5. Una petición HTTP: línea, cabeceras, línea vacía, cuerpo; el tamaño del cuerpo, en bytes.

## Siguiente

[[sec-web]] (seguridad de aplicaciones web sobre HTTP). En las ramas, sistemas distribuidos y seguridad de redes.
