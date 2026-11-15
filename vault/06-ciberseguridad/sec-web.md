---
id: sec-web
title: "Seguridad web: HTTP, sesiones y JWT, mismo origen, inyección, XSS, CSRF, SSRF y control de acceso"
area: ciberseguridad
trunk_level: 9
prerequisites: [sec-redes-tcpip, sec-fundamentos]
academic_sources:
  - "Stuttard, D.; Pinto, M. The Web Application Hacker's Handbook, 2ª ed. Wiley, 2011."
  - "Zalewski, M. The Tangled Web: A Guide to Securing Modern Web Applications. No Starch Press, 2011."
  - "RFC 9110: HTTP Semantics. IETF, 2022."
  - "RFC 6265: HTTP State Management Mechanism. IETF, 2011."
  - "RFC 7519: JSON Web Token (JWT). IETF, 2015. RFC 7515: JSON Web Signature (JWS). IETF, 2015."
  - "RFC 8725: JSON Web Token Best Current Practices. IETF, 2020."
  - "OWASP Foundation. OWASP Top 10:2021 y OWASP Web Security Testing Guide v4.2."
ctf_flag: "sha256:547bf1eefc0feffb2e7d39d8c41d8239bf2d8d53b41685fbdd4f02d6e30ff3fb"
hints:
  - "La firma HS256 es un HMAC-SHA256 calculado sobre el texto exacto «cabecera.cuerpo» en base64url, con una clave secreta. Quien conoce la clave puede firmar cualquier cuerpo. El enunciado te dice cómo de pequeña es la familia de claves posibles: comprueba cada candidata contra el token que ya tienes."
  - "Diez líneas de Python con hmac, hashlib y base64 (urlsafe_b64encode, quitando los «=» finales) bastan para probar las 100 000 claves. También: `hashcat -m 16500 token.txt -a 3 'exodus-?d?d?d?d?d'` o `john --format=HMAC-SHA256`. Para firmar el nuevo token, codifica el JSON exactamente como se da, sin espacios ni saltos de línea."
  - "RFC 7515 §3.1 y apéndice A.1 (ejemplo completo de JWS con HS256, y definición de base64url sin relleno en el apéndice C). RFC 2104 (HMAC). RFC 8725 §3.5 sobre la entropía mínima de las claves. Documentación: docs.python.org/3/library/hmac.html."
exercises:
  - id: metodos-seguros
    tier: 1
    prompt: |
      Según el RFC 9110, los métodos `GET` y `HEAD` son «seguros»: no deben modificar estado. De estas seis peticiones, ¿cuántas lo violan (método seguro pero con efecto secundario)? `GET` (modifica), `POST` (modifica), `HEAD` (no), `GET` (no), `DELETE` (modifica), `GET` (modifica). Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: entropia-de-sesion
    tier: 1
    prompt: |
      Un identificador de sesión en servidor son 16 bytes aleatorios. ¿Cuántos bits de entropía tiene? Respuesta: un entero.
    answers: ["sha256:2747b7c718564ba5f066f0523b03e17f6a496b06851333d2d59ab6d863225848"]
  - id: cookies-robables
    tier: 1
    prompt: |
      Un sitio fija cinco cookies, de las cuales tres **no** tienen el atributo `HttpOnly`. Si hay un XSS, ¿cuántas puede leer el JavaScript del atacante? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: base64url
    tier: 1
    prompt: |
      Codifica en base64url (sin relleno `=`) la cadena `{"alg":"HS384"}`. Respuesta: la cadena base64url.
    answers: ["sha256:920a0276723d2e22ae6fd07efd7a7f8ea134a13600b6ee594431864567788e5b"]
  - id: leer-un-jwt
    tier: 1
    prompt: |
      Un JWT es `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbmEiLCJyb2xlIjoiZWRpdG9yIn0.xxxx`. Decodifica su cuerpo (el segmento central) y di el valor del campo `role`. Respuesta: el texto.
    answers: ["sha256:1553cc62ff246044c683a61e203e65541990e7fcd4af9443d22b9557ecc9ac54"]
  - id: cookie-samesite
    tier: 2
    prompt: |
      Una cookie tiene `Secure` y `SameSite=Lax`. El usuario sigue un enlace (navegación `GET` de nivel superior) desde otro sitio, por HTTPS. ¿Se envía la cookie? Respuesta: `si` o `no`.
    answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: firma-hs256
    tier: 2
    prompt: |
      Calcula la firma HS256 de un JWT: $\operatorname{HMAC-SHA256}$ con clave `secreto` del mensaje `a.b`, en base64url sin relleno. Respuesta: la firma.
    answers: ["sha256:d4609426a8c596b647b00f9f3993cb634b2c8f5c6b8483d5b090f4041b9cdcfd"]
  - id: mismo-origen
    tier: 2
    prompt: |
      La política del mismo origen compara (esquema, host, puerto), con puertos por defecto 80 (http) y 443 (https). De estos pares, ¿cuántos son del mismo origen? `http://a.com/x` y `http://a.com/y`; `http://a.com` y `https://a.com`; `http://a.com:80/x` y `http://a.com/y`; `http://a.com` y `http://b.com`; `https://a.com:443` y `https://a.com/z`. Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: inyeccion-sql
    tier: 2
    prompt: |
      La consulta `SELECT id FROM usuarios WHERE nombre='$nombre' AND clave='$clave'` concatena la entrada. Con `nombre` $=$ `admin' --` y una contraseña cualquiera, ¿consigue el atacante iniciar sesión como admin sin saber su contraseña? Respuesta: `1` (sí) o `0` (no).
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: escape-de-html
    tier: 2
    prompt: |
      Codifica para contexto HTML (escapando `& < > " '`) la cadena `<script>alert(1)</script>` para que el navegador no la ejecute. Respuesta: la cadena escapada (usa `&lt;`, `&gt;`, `&#39;`, etc.).
    answers: ["sha256:1904d00cf6af7e2a85e0c8d6bab5ab623f839062e3e3e7ba7a3487fb97b181b1"]
  - id: ssrf
    tier: 2
    prompt: |
      Un servidor hace una petición a una URL que da el usuario. De estas cinco, ¿cuántas apuntan a destinos internos prohibidos (metadatos de la nube `169.254.169.254`, loopback, rangos privados `10.*`, `192.168.*`, `172.16–31.*`)? `http://169.254.169.254/latest/meta-data/`, `https://api.exodus.lan/v1`, `http://127.0.0.1:6379/`, `http://10.0.0.5/admin`, `https://cdn.example.com/x.png`. Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: idor
    tier: 3
    prompt: |
      Con control de acceso por propietario, el usuario 7 pide sus facturas. De `{id:1001,owner:7}`, `{id:1002,owner:3}`, `{id:1003,owner:7}`, `{id:1004,owner:9}`, ¿a cuántas tiene acceso legítimo? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: fuerza-bruta-jwt
    tier: 3
    prompt: |
      La clave de firma de un JWT tiene la forma `exodus-xxxx` con `xxxx` cuatro letras minúsculas (de la a a la z, sin ñ). ¿Cuántas claves hay que probar, como mucho, para recuperarla a partir de un token (ataque sin conexión)? Respuesta: un entero.
    answers: ["sha256:eff7a54322c310ba886e83ec575cdaf0362481d49d556accd52ca709f111e320"]
  - id: confusion-de-algoritmos
    tier: 3
    prompt: |
      Un verificador de JWT lee el algoritmo del propio token en vez de fijarlo. Le llega un token con `{"alg":"none"}` y firma vacía. ¿Lo acepta como válido? Respuesta: `1` (sí) o `0` (no).
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: content-security-policy
    tier: 3
    prompt: |
      Una CSP con `script-src 'self' https://cdn.example.com` prohíbe los scripts en línea. De estas cinco fuentes, ¿cuántas bloquea? un script en línea (`inline`), `https://cdn.example.com/a.js`, `https://evil.com/x.js`, `'self'`, `data:text/js`. Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: token-anti-csrf
    tier: 3
    prompt: |
      Un formulario exige un token anti-CSRF igual al de la sesión (`T-abc123`). Llegan cinco POST con los tokens: `T-abc123`, `` (vacío), `T-xxx`, `T-abc123`, (ninguno). ¿Cuántos se rechazan? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
---

# Seguridad web: HTTP, sesiones y JWT, mismo origen, inyección, XSS, CSRF, SSRF y control de acceso

La web es un sistema distribuido en el que el servidor no controla al cliente, el cliente ejecuta código de orígenes que no conoce y todo viaja sobre
un protocolo sin estado. Casi todas las vulnerabilidades web son una de dos cosas: **confundir datos con código** o **confiar en algo que controla el
atacante**. Este nodo recorre los dos patrones a través de los mecanismos reales de la web (HTTP, cookies, JWT, el mismo origen) y los fallos clásicos
del OWASP Top 10, siempre desde la óptica del análisis y la defensa.

## Objetivos

Al terminar sabrás:

1. Leer una petición y una respuesta HTTP y razonar sobre qué controla el cliente y qué métodos son seguros.
2. Diseñar sesiones con cookies (`HttpOnly`, `Secure`, `SameSite`) y entender los dos modelos (estado en servidor frente a token autocontenido).
3. Descomponer y verificar un JWT HS256, y reconocer sus fallos de implementación (`alg:none`, confusión de algoritmos, clave débil).
4. Explicar la política del mismo origen y de dónde nace el CSRF.
5. Reconocer y defender las inyecciones (SQL, XSS, SSRF) separando datos de código.
6. Razonar sobre el control de acceso (IDOR) y por qué se comprueba en cada petición.

## Qué debes dominar antes

[[sec-redes-tcpip]] (TCP, DNS, TLS, el modelo cliente-servidor) y [[sec-fundamentos]] (hash, HMAC, principios de confidencialidad e integridad). Ayuda
[[sys-bases-datos]] para la inyección SQL y [[prog-python-fundamentos]] para los ejercicios.

> [!question] Test de entrada
> 1. ¿Qué capa usa HTTP por debajo?
> 2. ¿Qué es un HMAC y para qué sirve?
> 3. ¿Qué devuelve `base64` de 3 bytes?
>
> Respuestas: TCP (o QUIC en HTTP/3); un código de autenticación con clave, que da integridad y autenticidad; 4 caracteres.

## 1. Para qué sirve

- **Desarrollo seguro**: cada decisión (cómo guardar la sesión, cómo construir una consulta, cómo plantar datos en el HTML) es una decisión de seguridad.
- **Pentesting y *bug bounty***: la mayoría de los informes son web; el OWASP Top 10 es el mapa.
- **Respuesta a incidentes**: entender el ataque (robo de sesión, inyección, SSRF a la nube) para detectarlo y contenerlo.
- **Arquitectura**: elegir entre sesión en servidor y JWT, diseñar la autorización, poner cabeceras de seguridad (CSP, HSTS).

## 2. HTTP

HTTP es un protocolo de petición y respuesta sobre TCP ([[sec-redes-tcpip]]) o QUIC. Una petición es texto:

```http
POST /sesion HTTP/1.1
Host: exodus.lan
Content-Type: application/x-www-form-urlencoded
Content-Length: 29

usuario=ana&clave=correcta123
```

Lo esencial para la seguridad:

- **Todo lo que llega en una petición lo controla el cliente**: URL, cabeceras, cookies y cuerpo. Las validaciones del navegador son comodidad, no control:
  el atacante no usa el navegador, usa `curl`.
- Los métodos **seguros** (`GET`, `HEAD`) no deben modificar estado (RFC 9110 §9.2.1), y los **idempotentes** (además, `PUT`, `DELETE`) pueden repetirse sin
  efecto extra. Un `GET` que borra algo convierte cualquier enlace o imagen en un disparador de esa acción.
- HTTP **no tiene estado**: cada petición es independiente. La noción de sesión se construye encima.

## 3. Estado: cookies y sesiones

El servidor envía `Set-Cookie` y el navegador la adjunta automáticamente a toda petición posterior al mismo sitio. De ese envío automático nacen sus
riesgos, y tres atributos los acotan (RFC 6265):

| Atributo | Efecto | Ataque que mitiga |
|---|---|---|
| `HttpOnly` | El JavaScript de la página no puede leerla | Robo de sesión mediante XSS |
| `Secure` | Solo se envía por HTTPS | Captura en la red |
| `SameSite=Lax` o `Strict` | No se envía (o solo en navegaciones GET de nivel superior) en peticiones iniciadas por otro sitio | CSRF |

Hay dos diseños de sesión:

- **Sesión en servidor**: la cookie lleva un identificador aleatorio de al menos 128 bits y el estado vive en el servidor. Revocar es borrar una fila;
  el precio es ese almacenamiento y su consulta en cada petición.
- **Token autocontenido** (JWT): el estado viaja en el cliente protegido por una firma. No hay consulta al servidor, pero tampoco revocación inmediata, y
  toda la seguridad descansa en la clave de firma y en validar el token bien.

## 4. Tokens firmados: JWT

Un JWT (RFC 7519) son tres segmentos en base64url separados por puntos: `base64url(cabecera).base64url(cuerpo).base64url(firma)`. **base64url** es base64
con `-` y `_` en lugar de `+` y `/` y sin el relleno `=`. **No es cifrado**: cualquiera decodifica y lee el cuerpo. Con el algoritmo HS256, la firma es

$$
\text{firma} = \operatorname{HMAC-SHA256}\bigl(k,\; \text{b64}(\text{cabecera}) \,\Vert\, \texttt{"."} \,\Vert\, \text{b64}(\text{cuerpo})\bigr),
$$

y $\operatorname{HMAC}(k, m) = H\bigl((k' \oplus \text{opad})\,\Vert\,H((k' \oplus \text{ipad})\,\Vert\,m)\bigr)$ (RFC 2104), con $k'$ la clave rellenada con ceros hasta el tamaño de bloque,
$\text{ipad} = \texttt{0x36}$ y $\text{opad} = \texttt{0x5c}$ repetidos. La construcción anidada evita el ataque de extensión de longitud de $H(k\,\Vert\,m)$.

```python
import base64, hashlib, hmac

def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def firmar(cabecera: bytes, cuerpo: bytes, clave: bytes) -> str:
    mensaje = f"{b64url(cabecera)}.{b64url(cuerpo)}".encode()
    firma = hmac.new(clave, mensaje, hashlib.sha256).digest()
    return f"{mensaje.decode()}.{b64url(firma)}"
```

Errores de implementación recurrentes (RFC 8725):

- **Aceptar `"alg": "none"`**: el servidor valida un token sin firma. El verificador debe **fijar** el algoritmo esperado, no leerlo del token.
- **Confusión de algoritmos**: un servidor que espera RS256 (firma asimétrica) acepta HS256 y usa su clave **pública**, conocida por todos, como clave HMAC.
- **Clave débil**: la firma es verificable sin conexión, así que una clave de poca entropía se recupera por fuerza bruta a partir de un único token. La clave
  debe tener al menos 256 bits aleatorios (RFC 8725 §3.5). Es exactamente el reto de este nodo.
- **No validar `exp`, `aud` o `iss`**: tokens caducados o emitidos para otro servicio.

> [!example] Ejemplo resuelto 1: leer y verificar un JWT
> Cabecera `eyJhbGciOiJIUzI1NiJ9` → base64url de `{"alg":"HS256"}`. Para verificar, se recalcula $\operatorname{HMAC-SHA256}(k, \text{cab}.\text{cuerpo})$ y se compara **en tiempo
> constante** con el tercer segmento. Si coincide, el cuerpo no se ha alterado; si la comparación no es constante, se filtra la firma byte a byte por
> temporización. Cambiar `"role":"user"` por `"role":"admin"` sin la clave cambia el cuerpo pero no permite recalcular la firma: ahí está la seguridad, y
> por eso una clave adivinable la rompe entera.

## 5. Política del mismo origen

Un **origen** es la terna (esquema, host, puerto). La política del mismo origen (SOP) impide que el código de un origen lea respuestas o el DOM de otro.
Es la frontera de seguridad del navegador: sin ella, cualquier página leería tu correo con tus cookies. `http://a.com` y `https://a.com` son **orígenes
distintos** (distinto esquema), y también lo son `a.com:80` y `a.com:8080`.

Lo que SOP **no** impide es *enviar* peticiones a otro origen: formularios, imágenes y navegaciones cruzan orígenes libremente, con las cookies del
destino adjuntas. De ahí nace **CSRF**: una página hostil hace que tu navegador envíe una petición autenticada a otro sitio. Las defensas son `SameSite`,
un **token anti-CSRF** impredecible ligado a la sesión (que la página atacante no puede leer ni adivinar) y verificar la cabecera `Origin`.

## 6. Inyección: datos interpretados como código

El patrón es siempre el mismo: una cadena construida concatenando datos del atacante se entrega a un intérprete.

**Inyección SQL.** La consulta `SELECT id FROM usuarios WHERE nombre = '$nombre' AND clave = '$clave'` con `nombre` igual a `admin' --` ignora la
contraseña. La defensa correcta no es filtrar caracteres, sino **separar código y datos**: consultas **parametrizadas**, en las que la estructura se
compila aparte y los valores viajan como parámetros, sin poder alterarla ([[sys-bases-datos]]).

**Cross-site scripting (XSS).** Si una página inserta datos del atacante en su HTML sin codificarlos, el navegador los ejecuta como script **con el origen
de la víctima**, lo que anula SOP: puede leer el DOM, hacer peticiones autenticadas y robar toda cookie sin `HttpOnly`. Se distingue entre reflejado (el
dato va en la petición), almacenado (se guarda y se sirve a otros) y basado en DOM (lo introduce el propio JavaScript). Defensas: **codificar la salida
según el contexto** (HTML, atributo, JavaScript, URL), que los motores de plantillas modernos hacen por defecto, y una **Content-Security-Policy** que
prohíba scripts en línea como segunda barrera.

**SSRF.** El servidor hace una petición a una URL que proporciona el usuario. El atacante la dirige a servicios solo accesibles desde dentro:
`http://169.254.169.254/` (metadatos de la nube, a menudo con credenciales), `http://127.0.0.1:6379/` o la red interna. La defensa es una **lista de
destinos permitidos**, resolviendo el nombre y validando la IP final (no solo la cadena), y bloqueando las redirecciones a destinos internos.

> [!example] Ejemplo resuelto 2: la consulta parametrizada (con menos ayuda)
> Con `admin' --` como nombre, la consulta concatenada se convierte en `... WHERE nombre='admin' --' AND clave='x'`: el `--` comenta el resto y entra como
> admin. Con una consulta parametrizada, `admin' --` es el **valor** literal del parámetro `nombre`, y no hay ningún usuario que se llame así: devuelve
> cero filas. Escribe tú la versión parametrizada en tu lenguaje y comprueba que la misma entrada ya no autentica.

## 7. Control de acceso

Autenticar es saber quién eres; **autorizar** es decidir qué puedes hacer, y es donde más se falla (primera categoría del OWASP Top 10:2021). El caso
típico es la **referencia directa insegura** (IDOR): `GET /facturas/1042` devuelve la factura con solo estar autenticado, sin comprobar que sea tuya. La
regla es que **cada** petición compruebe en el servidor que el sujeto autenticado tiene permiso sobre el objeto concreto que pide, **denegando por
defecto**. Esconder el enlace no basta: el atacante cambia el número a mano.

## 8. Comprobar con un programa

Firmar y verificar un JWT, recuperar una clave débil por fuerza bruta y comprobar una inyección SQL con una consulta real frente a una parametrizada,
todo contrastado por dos caminos.

```python
import base64, hashlib, hmac, sqlite3

def b64url(data: bytes) -> str:
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def firma_hs256(clave: bytes, mensaje: str) -> str:
    return b64url(hmac.new(clave, mensaje.encode(), hashlib.sha256).digest())

# 1. HMAC de la biblioteca frente a la construcción con ipad/opad.
def hmac_manual(clave: bytes, mensaje: bytes) -> str:
    k = clave.ljust(64, b"\0") if len(clave) <= 64 else hashlib.sha256(clave).digest().ljust(64, b"\0")
    interno = hashlib.sha256(bytes(b ^ 0x36 for b in k) + mensaje).digest()
    return b64url(hashlib.sha256(bytes(b ^ 0x5C for b in k) + interno).digest())

msg = "eyJhbGciOiJIUzI1NiJ9.eyJ1IjoxfQ"
assert firma_hs256(b"secreto", msg) == hmac_manual(b"secreto", msg.encode())

# 2. Fuerza bruta de una clave débil: la firma es verificable sin conexión.
objetivo = firma_hs256(b"exodus-01234", msg)
clave = next(c for i in range(100000)
             if firma_hs256((c := f"exodus-{i:05d}").encode(), msg) == objetivo)
assert clave == "exodus-01234"

# 3. Inyección SQL: consulta concatenada (vulnerable) frente a parametrizada, en SQLite real.
db = sqlite3.connect(":memory:")
db.execute("CREATE TABLE usuarios (id INTEGER, nombre TEXT, clave TEXT)")
db.execute("INSERT INTO usuarios VALUES (1, 'admin', 'secreta'), (2, 'ana', '1234')")
ataque = "admin' --"
vulnerable = db.execute(
    f"SELECT id FROM usuarios WHERE nombre = '{ataque}' AND clave = 'x'").fetchall()
seguro = db.execute(
    "SELECT id FROM usuarios WHERE nombre = ? AND clave = ?", (ataque, "x")).fetchall()
assert vulnerable == [(1,)] and seguro == []     # la concatenación entra como admin; la parametrizada, no
print("Clave recuperada:", clave, "| SQLi vulnerable:", bool(vulnerable), "parametrizada:", bool(seguro))
```

## 9. Errores típicos

- Validar o filtrar en el cliente y confiar en ello en el servidor.
- Usar `GET` para acciones con efectos secundarios.
- Cookies de sesión sin `HttpOnly`, sin `Secure` o sin `SameSite`.
- Leer el algoritmo del propio JWT en lugar de fijarlo; aceptar `alg:none`; no validar `exp`/`aud`/`iss`; clave de firma débil.
- Comparar firmas o tokens con `==` en vez de en tiempo constante.
- Filtrar caracteres peligrosos en vez de parametrizar (SQL) o codificar por contexto (HTML).
- Validar una URL de SSRF por su cadena en vez de por la IP final, u olvidar las redirecciones.
- Esconder un identificador en lugar de comprobar la propiedad en cada petición (IDOR).

## 10. Resumen

- El cliente controla toda la petición; `GET`/`HEAD` no deben modificar estado.
- Cookies: `HttpOnly` (XSS), `Secure` (red), `SameSite` (CSRF). Sesión en servidor frente a JWT.
- JWT: base64url (no cifra), firma HMAC; fijar el algoritmo, validar `exp`/`aud`/`iss`, clave fuerte; `alg:none` y confusión de algoritmos.
- SOP: (esquema, host, puerto); no impide enviar, de ahí el CSRF; defensa `SameSite` + token anti-CSRF.
- Inyección = datos como código: SQL parametrizado; XSS codificando la salida + CSP; SSRF con lista de permitidos por IP final.
- Autorización en cada petición, denegar por defecto (IDOR).

## Reto

Una aplicación emite este token de sesión con HS256:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlc3R1ZGlhbnRlIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NjI4MTkyMDB9.HJBCaXk6jhstmLNvXRq0ZboSWn550huMYs04lFYOKkE
```

Se sabe que la clave de firma tiene la forma `exodus-NNNNN`, con `NNNNN` cinco dígitos decimales.

1. Decodifica cabecera y cuerpo.
2. Recupera la clave.
3. Firma un token con la misma cabecera y este cuerpo, byte a byte, sin espacios:

   ```json
   {"sub":"estudiante","role":"admin","iat":1762819200}
   ```

La flag es el tercer segmento (la firma en base64url) del token falsificado: `EXODUS{firma}`

## Repaso: lo que debe quedarte dentro de un mes

1. Nunca confíes en lo que controla el cliente; valida en el servidor.
2. Las cookies de sesión llevan `HttpOnly`, `Secure` y `SameSite`.
3. Un JWT no cifra; su seguridad es la firma: fija el algoritmo y usa una clave fuerte.
4. Inyección = datos tratados como código: parametriza (SQL) y codifica por contexto (HTML).
5. Comprueba la autorización en cada petición, denegando por defecto.

## Siguiente

En las ramas: `sec-metodologia-pentest` (metodología y herramientas), `sec-criptografia-aplicada` (TLS, OAuth, OIDC), `sec-seguridad-redes` y
`sec-cloud-contenedores`. Para el otro gran patrón de inyección a bajo nivel, [[sec-explotacion-binaria]].
