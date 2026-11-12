---
id: sec-web
title: "Seguridad web"
area: ciberseguridad
trunk_level: 9
prerequisites: [sec-redes-tcpip]
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
---

# Seguridad web

La web es un sistema distribuido en el que el servidor no controla al cliente, el cliente
ejecuta código de orígenes que no conoce, y todo viaja sobre un protocolo sin estado. Casi todas
las vulnerabilidades web son una de dos cosas: **confundir datos con código** o **confiar en
algo que controla el atacante**.

## 1. HTTP

HTTP es un protocolo de petición y respuesta sobre TCP ([[sec-redes-tcpip]]) o QUIC. Una
petición es texto:

```http
POST /sesion HTTP/1.1
Host: exodus.lan
Content-Type: application/x-www-form-urlencoded
Content-Length: 29

usuario=ana&clave=correcta123
```

Lo esencial para la seguridad:

- **Todo lo que llega en una petición lo controla el cliente**: URL, cabeceras, cookies y cuerpo.
  Las validaciones del navegador son comodidad, no control.
- Los métodos **seguros** (`GET`, `HEAD`) no deben modificar estado (RFC 9110 §9.2.1). Violarlo
  convierte cualquier enlace o imagen en un disparador de acciones.
- HTTP **no tiene estado**: cada petición es independiente. La noción de sesión se construye
  encima.

## 2. Estado: cookies y sesiones

El servidor envía `Set-Cookie` y el navegador la adjunta automáticamente a toda petición
posterior al mismo sitio. De ese envío automático nacen sus riesgos, y tres atributos los
acotan (RFC 6265):

| Atributo | Efecto | Ataque que mitiga |
|---|---|---|
| `HttpOnly` | El JavaScript de la página no puede leerla | Robo de sesión mediante XSS |
| `Secure` | Solo se envía por HTTPS | Captura en la red |
| `SameSite=Lax` o `Strict` | No se envía en peticiones iniciadas por otro sitio | CSRF |

Hay dos diseños de sesión. Con **sesión en servidor**, la cookie lleva un identificador
aleatorio de al menos 128 bits y el estado vive en el servidor; revocarla es borrar una fila.
Con **token autocontenido**, el estado viaja en el cliente protegido por una firma; no hay
consulta al servidor, pero tampoco revocación inmediata, y toda la seguridad descansa en la
clave de firma.

## 3. Tokens firmados: JWT

Un JWT (RFC 7519) son tres segmentos en base64url separados por puntos:

```text
base64url(cabecera) . base64url(cuerpo) . base64url(firma)
```

**base64url** es base64 con `-` y `_` en lugar de `+` y `/`, y sin el relleno `=`. No es
cifrado: cualquiera decodifica y lee el cuerpo. Con el algoritmo HS256, la firma es

$$
\text{firma} = \operatorname{HMAC-SHA256}\bigl(k,\; \text{b64}(\text{cabecera}) \,\Vert\, \texttt{"."} \,\Vert\, \text{b64}(\text{cuerpo})\bigr),
$$

donde, para una función hash $H$ con bloques de $B$ bytes (RFC 2104),

$$
\operatorname{HMAC}(k, m) = H\bigl((k' \oplus \text{opad}) \,\Vert\, H((k' \oplus \text{ipad}) \,\Vert\, m)\bigr),
$$

con $k'$ la clave rellenada con ceros hasta $B$ bytes, $\text{ipad} = \texttt{0x36}^B$ y
$\text{opad} = \texttt{0x5c}^B$. La construcción anidada evita los ataques de extensión de
longitud que sufre el esquema ingenuo $H(k \Vert m)$.

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

- **Aceptar `"alg": "none"`**: el servidor valida un token sin firma.
- **Confusión de algoritmos**: un servidor que espera RS256 acepta HS256 y usa su clave pública,
  conocida por todos, como clave HMAC.
- **Clave débil**: la firma es verificable sin conexión, así que una clave de poca entropía se
  recupera por fuerza bruta a partir de un único token. La clave debe tener al menos 256 bits
  aleatorios.
- **No validar `exp`, `aud` o `iss`**: tokens caducados o emitidos para otro servicio.

## 4. Política del mismo origen

Un **origen** es la terna (esquema, host, puerto). La política del mismo origen (SOP) impide que
el código de un origen lea respuestas o el DOM de otro. Es la frontera de seguridad del
navegador: sin ella, cualquier página leería tu correo con tus cookies.

Lo que SOP **no** impide es *enviar* peticiones a otro origen: formularios, imágenes y
navegaciones cruzan orígenes libremente, con las cookies del destino adjuntas. De ahí nace
**CSRF**: una página hostil hace que tu navegador envíe una petición autenticada a otro sitio.
Las defensas son `SameSite`, un token anti-CSRF impredecible ligado a la sesión, y verificar la
cabecera `Origin`.

## 5. Inyección: datos interpretados como código

El patrón es siempre el mismo: una cadena construida concatenando datos del atacante se entrega
a un intérprete.

**Inyección SQL.** La consulta

```sql
SELECT id FROM usuarios WHERE nombre = '$nombre' AND clave = '$clave'
```

con `nombre` igual a `admin' --` se convierte en una consulta que ignora la contraseña. La
defensa correcta no es filtrar caracteres sino **separar código y datos**: consultas
parametrizadas, en las que la estructura de la consulta se envía compilada y los valores viajan
aparte, sin posibilidad de alterarla.

**Cross-site scripting (XSS).** Si una página inserta datos del atacante en su HTML sin
codificarlos, el navegador los ejecuta como script *con el origen de la víctima*, lo que anula
SOP: puede leer el DOM, hacer peticiones autenticadas y robar toda cookie sin `HttpOnly`. Se
distingue entre reflejado (el dato va en la petición), almacenado (se guarda y se sirve a otros)
y basado en DOM (lo introduce el propio JavaScript de la página). Defensas: codificar la salida
según el contexto (HTML, atributo, JavaScript, URL), que los motores de plantillas modernos hacen
por defecto, y una **Content-Security-Policy** que prohíba scripts en línea como segunda barrera.

**SSRF.** El servidor hace una petición a una URL que proporciona el usuario. El atacante la
dirige a servicios solo accesibles desde dentro: `http://169.254.169.254/` (metadatos de la nube)
o `http://localhost:6379/`. La defensa es una lista de destinos permitidos, resolviendo el nombre
y validando la IP final.

## 6. Control de acceso

Autenticar es saber quién eres; **autorizar** es decidir qué puedes hacer, y es donde más se
falla (primera categoría del OWASP Top 10:2021). El caso típico es la referencia directa
insegura (IDOR): `GET /facturas/1042` devuelve la factura con solo estar autenticado, sin
comprobar que sea tuya. La regla es que **cada** petición compruebe en el servidor que el sujeto
autenticado tiene permiso sobre el objeto concreto que pide, denegando por defecto.

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

La flag es el tercer segmento (la firma en base64url) del token falsificado:
`EXODUS{firma}`
