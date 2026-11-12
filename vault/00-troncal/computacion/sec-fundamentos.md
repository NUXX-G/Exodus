---
id: sec-fundamentos
title: "Fundamentos de seguridad: amenazas, principios, contraseñas y criptografía básica"
area: ciberseguridad
trunk_level: 7
prerequisites: [prog-terminal-linux-git, prog-python-fundamentos, mat-combinatoria-probabilidad-basica]
academic_sources:
  - "Saltzer, J. H.; Schroeder, M. D. The Protection of Information in Computer Systems. Proceedings of the IEEE, 63(9), 1975."
  - "Anderson, R. Security Engineering: A Guide to Building Dependable Distributed Systems, 3ª ed. Wiley, 2020 (disponible gratis en línea)."
  - "Rashid, A. et al. (eds.). The Cyber Security Body of Knowledge (CyBOK), versión 1.1. University of Bristol, 2021 (cybok.org)."
  - "NIST. SP 800-63B: Digital Identity Guidelines, Authentication and Lifecycle Management."
  - "M'Raihi, D. et al. RFC 4226 (HOTP) y RFC 6238 (TOTP). IETF, 2005 y 2011."
  - "OWASP Foundation. OWASP Top 10: 2021 (owasp.org/Top10)."
  - "NIST. SP 800-61: Computer Security Incident Handling Guide."
hints:
  - "Concepto: la seguridad es gestión del riesgo, no un estado de «seguro/inseguro». Pregunta siempre: ¿qué protejo, de quién y con qué recursos puede atacarme? La fortaleza de una contraseña o clave es el logaritmo en base 2 del número de posibilidades que el atacante debe probar (bits de entropía), siempre que la elección sea realmente aleatoria."
  - "Herramienta: Python con hashlib, hmac, base64 y secrets (aleatoriedad criptográfica) para comprobar cálculos; sha256sum y base64 en la terminal; para cálculos de probabilidad de colisión, aritmética de precisión arbitraria (decimal o fractions), porque las aproximaciones no dan el entero exacto."
  - "Documentación oficial: docs.python.org/3/library/hashlib.html, hmac.html y secrets.html; datatracker.ietf.org/doc/html/rfc6238 (incluye vectores de prueba); NIST SP 800-63B y SP 800-61; CyBOK (cybok.org), áreas de conocimiento sobre factores humanos, criptografía y seguridad de sistemas operativos."
exercises:
  - id: entropia-diceware
    tier: 1
    prompt: |
      Una frase de contraseña se forma con $4$ palabras elegidas al azar de una lista de $7776$ (método Diceware). ¿Cuántos **bits de entropía** tiene? Respuesta: la **parte entera** de $4\log_2 7776$.
    answers: ["sha256:031b4af5197ec30a926f48cf40e11a7dbc470048a21e4003b7a3c07c5dab1baa"]
  - id: espacio-de-contrasenas
    tier: 1
    prompt: |
      ¿Cuántas contraseñas distintas de exactamente $10$ letras minúsculas (a-z, con repetición) existen? Respuesta: un entero.
    answers: ["sha256:2577aa8c19694f160168324a10c6d2b0c2158953ed9fe5344b4a1cbcbab0dd5e"]
  - id: sha256-exodus
    tier: 1
    prompt: |
      Calcula el hash SHA-256 de la cadena ASCII `exodus` (sin salto de línea) y da sus **8 primeros caracteres hexadecimales**. (En Linux: `printf exodus | sha256sum`.)
      Respuesta: 8 caracteres hexadecimales en minúsculas.
    answers: ["sha256:edae053c78d10ec467a0969724f46a26c36618480ccf82a8d9c121d2be792be9"]
  - id: tiempo-de-fuerza-bruta
    tier: 2
    prompt: |
      Un atacante prueba $10^9$ contraseñas por segundo contra un hash rápido. Las contraseñas son de $8$ caracteres con $62$ símbolos posibles (letras y cifras). ¿Cuántas **horas** tardaría en
      probarlas **todas**? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: hmac-sha256
    tier: 2
    prompt: |
      Calcula el HMAC-SHA256 con clave `k` y mensaje `m` (ambos ASCII de un carácter) y da los **8 primeros caracteres hexadecimales**. (Python: `hmac.new(b"k", b"m", hashlib.sha256).hexdigest()`.)
      Respuesta: 8 caracteres hexadecimales en minúsculas.
    answers: ["sha256:b856802082448119c03d3e757df4cc6321bf016f2ae3a46253982cdebfd60efe"]
  - id: codigo-totp
    tier: 2
    prompt: |
      Un código TOTP (RFC 6238) se calcula como HOTP (RFC 4226) con contador $c = \lfloor t/30\rfloor$. Con el secreto ASCII `12345678901234567890`, HMAC-SHA1 y $t = 59$ s, el RFC da el código de **8** dígitos $94287082$.
      ¿Cuál es el código de **6** dígitos para ese mismo instante? (Se obtiene con la misma truncación, módulo $10^6$.) Respuesta: seis dígitos.
    answers: ["sha256:5c24358901dcc3ea3408b50a701fa317e3dfec80ede2422fbd91318beb847843"]
  - id: base64-decodificar
    tier: 2
    prompt: |
      Decodifica la cadena en Base64 `RXhvZHVz`. Respuesta: el texto resultante (distingue mayúsculas; aquí se compara sin distinguirlas).
    answers: ["sha256:4995baa63e0e2487000039c1a829fadc3e90a69b115a47b2280064292497bbc0"]
  - id: xor-de-bytes
    tier: 2
    prompt: |
      Calcula $\texttt{0x48} \oplus \texttt{0x2a}$ (XOR bit a bit). Respuesta: el resultado en **hexadecimal**, sin el prefijo «0x» y en minúsculas.
    answers: ["sha256:81b8a03f97e8787c53fe1a86bda042b6f0de9b0ec9c09357e107c99ba4d6948a"]
  - id: perdida-anual-esperada
    tier: 2
    prompt: |
      Un activo vale $50\,000$ euros; un incidente destruye el $40\,\%$ de su valor (factor de exposición) y se espera una vez cada $4$ años (tasa anual de ocurrencia $0{,}25$).
      La **pérdida anual esperada** es $\text{ALE} = \text{SLE}\times\text{ARO}$, con $\text{SLE}$ la pérdida por incidente. ¿Cuánto vale el ALE, en euros? Respuesta: un número.
    answers: ["sha256:0f8eb4b72b6e0c9e88b388eb967b49e067ef1004bf07bffc22c3acb13b43580a"]
  - id: coste-de-bcrypt
    tier: 2
    prompt: |
      bcrypt tiene un parámetro de coste $c$ que fija el trabajo en $2^c$ rondas de su expansión de clave. Con $c = 12$, ¿cuántas rondas son? Respuesta: un entero.
    answers: ["sha256:8b926d75599a618e21f1341318e66517be26e18cc7496783d2b59758c1333be8"]
  - id: cumpleanos-hash-32
    tier: 3
    prompt: |
      Una función hash tiene salidas de $32$ bits ($2^{32}$ valores equiprobables). ¿Cuál es el **menor** número de mensajes distintos para que la probabilidad de que **dos** den el mismo hash sea al menos $\tfrac12$ (paradoja del cumpleaños)? La aproximación $\approx 1{,}1774\sqrt{N}$ no basta para el entero exacto: calcula el producto $\prod(1 - i/N)$ con precisión suficiente.
      Respuesta: un entero.
    answers: ["sha256:41e20b7d9413241e193d5f3da71766e5508cfdf387424451e8e8022380af2026"]
  - id: entropia-pin
    tier: 2
    prompt: |
      Un PIN de $6$ dígitos decimales elegidos al azar, ¿cuántos bits de entropía tiene? Respuesta: la **parte entera** de $\log_2 10^6$.
    answers: ["sha256:9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"]
  - id: efecto-avalancha
    tier: 3
    prompt: |
      Se calculan los SHA-256 de las cadenas `exodus` y `exodut` (solo cambia el último carácter, en $1$ bit). ¿En cuántos de los $256$ bits **difieren** los dos hashes? (Efecto avalancha: un hash bueno cambia, en
      promedio, la mitad de los bits.) Respuesta: un entero.
    answers: ["sha256:38d66d9692ac590000a91b03a88da1c88d51fab2b78f63171f553ecc551a0c6f"]
  - id: cadena-de-hashes
    tier: 3
    prompt: |
      Se parte de la cadena ASCII `exodus`, se calcula su SHA-256 (en **bytes**) y se vuelve a aplicar SHA-256 al resultado, en total **1000** veces (cada vez sobre los $32$ bytes anteriores).
      Da los **8 primeros caracteres hexadecimales** del resultado final. Respuesta: 8 caracteres hexadecimales en minúsculas.
    answers: ["sha256:27f174354652fe0c18627569853366c19243f07651b57e764b1238641a0d5061"]
  - id: anios-para-2-80
    tier: 3
    prompt: |
      Una clave de $80$ bits tiene $2^{80}$ valores posibles. Un atacante prueba $10^{12}$ claves por segundo. ¿Cuántos **años** (de $365{,}25$ días) tarda en probarlas todas? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:de9d634cee7cd80a1d7d32230ae906010f2b74999f4cdfab7b92ae1999e655f2"]
  - id: diffie-hellman-juguete
    tier: 3
    prompt: |
      Diffie-Hellman con $p = 23$ y $g = 5$: Alice elige $a = 6$ y envía $A = g^a \bmod p$; Bob elige $b = 15$ y envía $B = g^b \bmod p$. El secreto compartido es $B^a \bmod p = A^b \bmod p$.
      ¿Cuánto vale? Respuesta: un entero. (Con valores tan pequeños es inseguro: solo ilustra la idea.)
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
---

# Fundamentos de seguridad: amenazas, principios, contraseñas y criptografía básica

La ciberseguridad no es un truco ni un producto, es una **disciplina de ingeniería** para que los sistemas sigan funcionando como se espera aunque haya alguien intentando que no. Todos los que programan, administran sistemas o simplemente usan un ordenador
la necesitan. Este nodo da el marco conceptual (qué se protege, de quién y cómo se razona), los principios de diseño clásicos, la práctica diaria que más reduce el riesgo (contraseñas, autenticación en dos pasos, copias de seguridad) y la
criptografía a nivel de uso. Es la base para las ramas ofensiva y defensiva de [[sec-criptografia]], [[sec-web]] o [[sec-explotacion-binaria]].

> [!warning] Ética y legalidad primero
> Las técnicas de seguridad **solo se prueban en sistemas propios o con autorización por escrito**. Acceder sin permiso a un sistema ajeno es un delito en prácticamente todos los países, aunque se haga «por curiosidad» o «sin dañar nada». Para practicar hay entornos legales:
> máquinas virtuales propias, laboratorios y competiciones tipo CTF. Si encuentras una vulnerabilidad real, se **comunica al responsable** (divulgación coordinada, sección 9), no se explota.

## Objetivos

Al terminar sabrás:

1. Definir seguridad con la tríada **CIA** y los servicios asociados (autenticación, autorización, no repudio, trazabilidad).
2. Hacer un **modelo de amenazas** sencillo y razonar con el riesgo (probabilidad, impacto, pérdida anual esperada).
3. Aplicar los **principios de diseño seguro** de Saltzer y Schroeder.
4. Elegir, almacenar y proteger **contraseñas**, y usar la **autenticación de dos factores**; calcular su fortaleza en bits.
5. Usar la criptografía con criterio: hash, MAC, cifrado simétrico y asimétrico, firmas, TLS.
6. Reconocer las amenazas más frecuentes y las defensas básicas, y actuar con ética.

> [!question] Test de entrada
> 1. ¿Qué es más seguro: una contraseña corta con símbolos raros o una frase larga? 2. ¿Para qué sirve una copia de seguridad? 3. ¿Es delito probar la seguridad de un sitio web que no es tuyo sin permiso?
>
> Respuestas: en general la **frase larga** (la longitud aporta más entropía, y se recuerda); para recuperarse de pérdida o de un ataque de ransomware; **sí**, sin autorización lo es.

## 1. Para qué sirve

- **Proteger lo que importa**: datos personales, dinero, trabajo, reputación; los de una empresa o los de un usuario.
- **Trabajar en tecnología**: cualquier profesión técnica exige criterio de seguridad (código, redes, nube, datos).
- **Decidir con cabeza**: gastar donde el riesgo es mayor, y no ceder a la «seguridad de cara a la galería».
- **Base de las ramas avanzadas**: pentesting, análisis forense, criptografía, ingeniería inversa.

## 2. ¿Qué es la seguridad?

Se define con tres propiedades, la **tríada CIA**:

| Propiedad | Significa | Ataque típico | Defensa típica |
|---|---|---|---|
| **Confidencialidad** | solo accede quien debe | robo de datos, espionaje | control de acceso, cifrado |
| **Integridad** | los datos no se alteran sin autorización | modificar un pago, inyectar código | hashes, firmas, permisos |
| **Disponibilidad** | el sistema funciona cuando se necesita | DoS, ransomware | redundancia, copias, protección de red |

A ellas se añaden servicios que las implementan: **autenticación** (¿quién eres?), **autorización** (¿qué puedes hacer?), **no repudio** (no puedes negar haberlo hecho: firmas digitales) y **trazabilidad** (registros, para investigar). Distingue
**seguridad** (frente a un adversario intencionado) de **fiabilidad** (frente a fallos y accidentes): un disco que se rompe es un problema de fiabilidad; un disco cifrado por un atacante, de seguridad.

**No existe la seguridad absoluta.** Siempre hay un atacante con más recursos, o un fallo no descubierto. El objetivo es hacer el ataque **demasiado caro** respecto de lo que el atacante gana, y **detectar y recuperarse** cuando ocurra.

## 3. Modelo de amenazas y riesgo

Antes de elegir defensas, se pregunta: **¿qué protejo (activos), de quién (adversarios) y cómo me pueden atacar (superficie de ataque y vectores)?** Un adversario aficionado, un delincuente organizado, un competidor, un empleado descontento
y un estado tienen recursos y objetivos distintos. Un método útil es **STRIDE**, que recorre seis categorías de amenaza:

| Letra | Amenaza | Propiedad que viola |
|:---:|---|---|
| **S** | *Spoofing* (suplantación de identidad) | autenticación |
| **T** | *Tampering* (manipulación de datos) | integridad |
| **R** | *Repudiation* (negar haber actuado) | no repudio |
| **I** | *Information disclosure* (fuga de información) | confidencialidad |
| **D** | *Denial of service* (denegación de servicio) | disponibilidad |
| **E** | *Elevation of privilege* (escalada de privilegios) | autorización |

**Riesgo** $=$ **probabilidad** $\times$ **impacto**. En términos cuantitativos: la **pérdida anual esperada** $\text{ALE} = \text{SLE}\times\text{ARO}$, con $\text{SLE}$ la pérdida por incidente (valor del activo $\times$ factor de exposición) y
$\text{ARO}$ la tasa anual de ocurrencia. **Ejemplo:** un servidor valorado en $100\,000$ € con una exposición del $30\,\%$ y un incidente cada $5$ años ($0{,}2$): $\text{ALE} = 30\,000\cdot0{,}2 = 6000$ € al año. No tiene sentido gastar $20\,000$ €
al año en protegerlo de ese riesgo concreto. Ante un riesgo hay cuatro respuestas: **mitigarlo** (controles), **transferirlo** (seguros), **evitarlo** (no hacer la actividad) o **aceptarlo** de forma consciente.

## 4. Principios de diseño seguro

Saltzer y Schroeder (1975) formularon ocho principios que **siguen vigentes**:

1. **Economía del mecanismo**: diseños simples; lo complejo tiene más fallos.
2. **Valores seguros por defecto** (*fail-safe defaults*): denegar salvo permiso explícito; si algo falla, que sea hacia el lado seguro.
3. **Mediación completa**: comprobar la autorización en **cada** acceso, no solo la primera vez.
4. **Diseño abierto**: la seguridad no debe depender de que el diseño sea secreto (principio de **Kerckhoffs**, 1883: un cifrado debe ser seguro aunque todo salvo la clave sea público). *Seguridad por oscuridad* no es seguridad.
5. **Separación de privilegios**: operaciones críticas que exijan más de una condición (dos firmas, dos claves).
6. **Mínimo privilegio**: cada programa y usuario, solo con los permisos necesarios (ver [[prog-terminal-linux-git]]).
7. **Mínimo mecanismo común**: no compartir recursos entre usuarios si se puede evitar (un fallo no se propaga).
8. **Aceptabilidad psicológica**: si una medida es incómoda, los usuarios la burlarán (post-its con contraseñas).

Y una idea transversal: **defensa en profundidad**: varias capas independientes (cortafuegos, autenticación, cifrado, registros, copias) de modo que fallar una no baste para comprometer el sistema.

## 5. Autenticación

Se puede demostrar quién eres con **algo que sabes** (contraseña), **algo que tienes** (móvil, llave de seguridad) o **algo que eres** (huella, rostro). Combinar **dos categorías distintas** es la **autenticación multifactor (MFA)**.

### Contraseñas y entropía

La fortaleza de una contraseña **elegida al azar** de un conjunto de $N$ posibilidades es $\log_2 N$ **bits de entropía**: cada bit duplica el esfuerzo del atacante. Ejemplos:

| Contraseña | Posibilidades | Entropía |
|---|---|---|
| 8 minúsculas aleatorias | $26^8 \approx 2{,}1\cdot10^{11}$ | $37{,}6$ bits |
| 12 caracteres alfanuméricos aleatorios | $62^{12}$ | $71{,}5$ bits |
| 6 palabras elegidas al azar de una lista de 7776 (Diceware) | $7776^6$ | $77{,}5$ bits |
| 10 caracteres aleatorios de 94 imprimibles | $94^{10}$ | $65{,}5$ bits |

Con $10^9$ intentos por segundo, agotar las $8$ minúsculas lleva $26^8/10^9 \approx 209$ s: **minutos**. Una frase de 6 palabras al azar es mucho más fuerte **y más fácil de recordar** que «P@ssw0rd!»: la longitud pesa más que los símbolos raros.
**Pero la entropía solo vale si la elección es aleatoria.** Las contraseñas humanas («Madrid2024!») son predecibles: los atacantes las prueban primero con **diccionarios** y reglas.

**Ataques reales a contraseñas:** fuerza bruta; **diccionario**; **credential stuffing** (probar pares usuario-contraseña filtrados de otro sitio, porque la gente **reutiliza**); **phishing** (engañarte para que la entregues, y ahí ninguna entropía ayuda). Reglas útiles
(en línea con las guías de NIST SP 800-63B): **una contraseña distinta por servicio**, un **gestor de contraseñas** que las genere y guarde, **longitud antes que complejidad**, comprobar contra listas de contraseñas filtradas y no obligar a cambiarlas periódicamente sin sospecha de compromiso.

### Cómo se guardan las contraseñas (si desarrollas)

**Nunca en claro ni cifradas de forma reversible.** Se guarda un **hash** con **sal** y con **coste ajustable**:

- Un hash rápido (SHA-256) sirve para integridad pero es **malo para contraseñas**: un atacante con la base de datos robada prueba miles de millones de candidatas por segundo en GPU.
- La **sal** es un valor aleatorio único por usuario que se guarda junto al hash: impide usar tablas precalculadas (*rainbow tables*) y hace que dos usuarios con la misma contraseña tengan hashes distintos.
- Se usan funciones **deliberadamente lentas y costosas en memoria**: **Argon2** (ganador del concurso Password Hashing Competition, 2015), **scrypt** o **bcrypt** (con parámetro de coste: $2^c$ rondas). Si el atacante prueba mil veces menos por segundo, la contraseña «vale» mil veces más.

```python
import hashlib, os

def guardar(contrasena: str):
    sal = os.urandom(16)                                                    # aleatorio criptográfico
    h = hashlib.scrypt(contrasena.encode(), salt=sal, n=2**14, r=8, p=1)    # lento y costoso en memoria
    return sal, h

def verificar(contrasena: str, sal: bytes, h: bytes) -> bool:
    import hmac
    return hmac.compare_digest(hashlib.scrypt(contrasena.encode(), salt=sal, n=2**14, r=8, p=1), h)
```

(Se compara con `hmac.compare_digest` en **tiempo constante** para no filtrar información por el tiempo de respuesta.)

### Segundo factor

**TOTP** (RFC 6238) es el código de 6 dígitos de las apps autenticadoras. Móvil y servidor comparten un **secreto**; el código es $\text{HOTP}(K, c)$ con el contador $c = \lfloor t/30\rfloor$ (paso de $30$ s): se calcula un HMAC-SHA1 de $c$ con la clave $K$, se toman $4$ bytes elegidos por el último
nibble (truncación dinámica) y se reduce módulo $10^6$. Con el secreto de prueba del RFC `12345678901234567890` y $t = 59$ s, el estándar publica el valor de $8$ dígitos $94287082$.
El código vale solo unos segundos, así que robar una contraseña no basta; pero **el phishing en tiempo real** puede capturar también el código. Las **llaves de seguridad FIDO2/WebAuthn** son resistentes al phishing: la autenticación es una firma ligada al
dominio verdadero y no se puede reutilizar en una web falsa. Y cuidado con los **SMS** como segundo factor (secuestro de SIM).

## 6. Autorización y control de acceso

Autenticarse no basta: hay que decidir **qué** puede hacer cada uno. Modelos: **listas de control de acceso** (para cada recurso, quién puede qué; como los permisos de Unix), **control por roles (RBAC)** (permisos agrupados en roles: «contable», «administrador»)
y por atributos. Un fallo muy común (primer puesto del OWASP Top 10 2021: *Broken Access Control*) es comprobar la identidad pero **no** que ese usuario sea dueño del recurso: si cambiando `/factura/1001` por `/factura/1002` en la URL ves la de otra persona,
hay una **referencia directa insegura a objetos (IDOR)**. Regla: **toda petición se autoriza en el servidor**, nunca confiando en lo que envía el cliente.

## 7. Criptografía: lo que hay que saber para usarla

La criptografía se estudia con rigor en [[sec-criptografia]]; aquí, las herramientas y las reglas de uso.

| Herramienta | Qué da | Ejemplo | Idea |
|---|---|---|---|
| **Hash** | huella de integridad (sin clave) | SHA-256 | salida fija de $256$ bits; no reversible; un bit de cambio cambia ~la mitad de los bits de salida (*avalancha*) |
| **MAC / HMAC** | integridad **y** autenticidad (con clave compartida) | HMAC-SHA256 | solo quien tiene la clave puede generar la etiqueta |
| **Cifrado simétrico** | confidencialidad (misma clave) | AES (con GCM) | rápido; el problema es compartir la clave |
| **Cifrado asimétrico** | intercambio de claves y firmas | RSA, curvas elípticas, Diffie-Hellman | clave pública / privada |
| **Firma digital** | autenticidad y no repudio | RSA, ECDSA, Ed25519 | firma con la clave privada; verifica cualquiera |

El **SHA-256** de la cadena `abc` es `ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad` (vector de prueba oficial). **Un hash no es cifrado**: no se puede «descifrar», pero las entradas **predecibles** (contraseñas cortas) se recuperan
probando candidatas. **Base64 no es cifrado:** es solo una codificación de bytes a texto (`RXhvZHVz` $\to$ `Exodus`); quien vea Base64 lo lee.

**Diffie-Hellman** permite acordar un secreto sobre un canal público: con $p = 23$, $g = 5$, Alice elige $a = 6$ y envía $g^a \bmod p = 8$; Bob elige $b = 15$ y envía $g^b \bmod p = 19$; ambos calculan $g^{ab}\bmod p = 2$. Con números minúsculos es trivial de romper;
con $p$ de $2048$ bits es inviable (problema del logaritmo discreto).

**Colisiones y tamaño.** Por la paradoja del cumpleaños (ver [[mat-combinatoria-probabilidad-basica]]), en un hash de $n$ bits aparecen colisiones tras $\approx 2^{n/2}$ mensajes: un hash de $128$ bits ofrece solo $\approx 64$ bits de resistencia a colisiones. Por eso se usan salidas
de $256$ bits para resistir ataques de colisión con $\approx 128$ bits de seguridad.

**TLS** (el candado de HTTPS) combina todo esto: autentica al servidor con un **certificado** firmado por una autoridad, acuerda claves con Diffie-Hellman y cifra el tráfico con cifrado simétrico autenticado.

**Reglas de oro:** **no inventes tu criptografía** (ni mezcles primitivas a tu manera): usa bibliotecas probadas (libsodium, `cryptography`); usa **aleatoriedad criptográfica** (`secrets`, `os.urandom`), **nunca** `random`; **nunca reutilices un nonce**;
las claves **no se escriben en el código**; y la seguridad de un sistema criptográfico bien diseñado reside en la **clave**, no en el algoritmo (Kerckhoffs).

## 8. Amenazas y ataques frecuentes

- **Ingeniería social y phishing**: el vector más común. Se engaña a una persona (correo falso, llamada, mensaje urgente) para que entregue credenciales o ejecute algo. **Defensa:** desconfiar de la urgencia, verificar por otro canal, MFA resistente al phishing.
- **Malware**: virus, gusanos, troyanos, **ransomware** (cifra los datos y exige un rescate), *spyware*. Defensa: parches, mínimo privilegio, copias de seguridad **fuera de línea**.
- **Inyección** (SQL, comandos): datos del usuario que se interpretan como código. Defensa: consultas parametrizadas y validación (ver [[sec-web]]).
- **XSS y CSRF**: ejecutar código en el navegador de otro usuario / forzar acciones con su sesión.
- **Man-in-the-middle**: alguien en medio de la comunicación. Defensa: TLS y verificación de certificados.
- **Denegación de servicio (DoS/DDoS)**: saturar un servicio. Defensa: capacidad, filtrado, servicios de mitigación.
- **Escalada de privilegios y errores de configuración**: servicios con permisos de más, credenciales por defecto, puertos abiertos.
- **Cadena de suministro**: comprometer una dependencia o una actualización legítima (caso SolarWinds, 2020): hay que **verificar lo que se instala**.
- **Amenaza interna** y errores humanos.

**OWASP Top 10 (2021)**, lista de los riesgos más críticos en aplicaciones web: control de acceso roto; fallos criptográficos; inyección; diseño inseguro; configuración de seguridad incorrecta; componentes vulnerables y desactualizados; fallos de identificación y autenticación; fallos de integridad
de software y datos; fallos de registro y monitorización; falsificación de peticiones del lado del servidor (SSRF).

## 9. Defensa práctica, respuesta a incidentes y ética

**Higiene básica (lo que más reduce el riesgo):**

- **Actualizar** sistema y aplicaciones (la mayoría de los ataques usa fallos ya corregidos).
- **Copias de seguridad 3-2-1**: $3$ copias, en $2$ tipos de soporte distintos, $1$ fuera del sitio (y **probar que se restauran**).
- **MFA** en el correo y en lo importante; contraseñas únicas con gestor.
- **Cifrado de disco** y bloqueo de pantalla; permisos mínimos; cortafuegos y segmentación de red.
- **Registros y monitorización**: sin ellos no se detecta ni se investiga.

**Respuesta a un incidente** (ciclo del NIST SP 800-61): **preparación** $\to$ **detección y análisis** $\to$ **contención, erradicación y recuperación** $\to$ **lecciones aprendidas**. En el momento: aislar el equipo afectado (no apagarlo si hace falta
preservar evidencias en memoria), cambiar credenciales desde un equipo limpio, y **documentar** todo.

**Divulgación coordinada.** Si descubres una vulnerabilidad: no la expongas ni la explotes; avisa al responsable en privado (o a través de su programa de *bug bounty* o de un coordinador como un CERT), da un plazo razonable para corregirla y publica después.
**Código ético:** autorización por escrito y alcance claro antes de probar; no tocar datos reales; respetar la privacidad; y comunicar los hallazgos con honestidad. Las leyes varían por país y por tipo de acceso: infórmate antes de actuar.

## 10. Errores típicos

- Creer que «a mí no me pasará»: los ataques masivos son automáticos y no eligen víctima.
- **Reutilizar contraseñas** o fiarse de la complejidad aparente en lugar de la longitud y el azar.
- Guardar contraseñas con un hash rápido sin sal, o peor, en claro.
- Usar `random` en lugar de `secrets` para claves, tokens o sal.
- Pensar que Base64 o un hash sin clave «protegen» un secreto.
- Comprobar la autorización solo en el cliente.
- Confiar en la oscuridad del diseño en lugar de en una clave bien protegida.
- No probar las copias de seguridad hasta el día en que hacen falta.
- Dar permisos de más «por si acaso» (viola el mínimo privilegio).

## Repaso: lo que debe quedarte dentro de un mes

1. CIA: confidencialidad, integridad, disponibilidad; la seguridad es gestión de riesgo ($\text{ALE} = \text{SLE}\times\text{ARO}$), nunca absoluta.
2. Principios de Saltzer-Schroeder: simplicidad, denegar por defecto, mediación completa, diseño abierto, separar privilegios, mínimo privilegio.
3. Entropía $=\log_2 N$ bits; longitud y azar; contraseña única por servicio; guardar con sal y función lenta (Argon2/scrypt/bcrypt); MFA, mejor FIDO2.
4. Hash $\ne$ cifrado $\ne$ codificación; no inventar criptografía; `secrets` para el azar; colisiones $\approx 2^{n/2}$.
5. Parches, copias 3-2-1, MFA, mínimo privilegio, registros; autorización escrita y divulgación coordinada.

## Siguiente

Con el marco claro, [[sec-criptografia]] estudia las matemáticas de los cifrados, y las demás ramas (`sec-forense-logs`, `sec-metodologia-pentest`, `sec-seguridad-so`) aplican estos fundamentos a casos concretos.
