---
id: sec-criptografia-aplicada
title: "Criptografía aplicada: aleatoriedad, AEAD y nonces, derivación de claves, contraseñas, firmas y PKI, TLS 1.3, mensajería segura, gestión de claves, canales laterales y criptografía poscuántica"
area: ciberseguridad
trunk_level: 14
prerequisites: [sec-criptografia, proy-sec-cripto-verificada, lab-sec-cripto-mal-usada]
academic_sources:
  - "Boneh, D.; Shoup, V. A Graduate Course in Applied Cryptography, v0.6, 2023 (cryptobook.us); Ferguson, N.; Schneier, B.; Kohno, T. Cryptography Engineering. Wiley, 2010."
  - "RFC 8446 (TLS 1.3), RFC 8448 (trazas de ejemplo de TLS 1.3), RFC 5869 (HKDF), RFC 5280 (certificados X.509), RFC 9525 (identidad del servicio en TLS, 2023), RFC 9106 (Argon2)."
  - "NIST FIPS 203, 204 y 205 (ML-KEM, ML-DSA, SLH-DSA), 2024; NIST SP 800-38D (GCM); OWASP Password Storage Cheat Sheet, consultada en noviembre de 2026."
  - "Marlinspike, M.; Perrin, T. The X3DH Key Agreement Protocol y The Double Ratchet Algorithm. Signal, 2016 (signal.org/docs)."
exercises:
  - id: hkdf
    tier: 2
    prompt: |
      Con HKDF-SHA256, IKM = `exodus`, sal = `sal`, info = `tls13 prueba` (todo en ASCII) y 16 bytes de salida, ¿qué clave sale?

      Respuesta: 32 cifras hexadecimales en minúsculas.
    answers: ["sha256:05ad735b9435c63cb7db42f9855fdd06a18685d1be6089e9de194c549b0cbd7c"]
  - id: expand-label
    tier: 3
    prompt: |
      En TLS 1.3, HKDF-Expand-Label(secreto, "key", "", 16) usa la estructura HkdfLabel (longitud de 2 bytes, etiqueta con el prefijo `tls13 ` precedida de su longitud, y contexto precedido de su longitud). Si el secreto es SHA-256(`secreto`), ¿qué clave sale, y cuántos bytes mide HkdfLabel?

      Respuesta: `clave;bytes` (la clave en 32 cifras hexadecimales).
    answers: ["sha256:9f198ba874f5f0a49c7bbd95edfb78067a7738a23d9c99a7a2e2fb182f7ae7b1"]
  - id: pbkdf2
    tier: 2
    prompt: |
      ¿Cuáles son los primeros 8 bytes de PBKDF2-HMAC-SHA256 con contraseña `correcto caballo`, sal `sal-exodus` y el número de iteraciones que recomienda OWASP para PBKDF2-HMAC-SHA256?

      Respuesta: 16 cifras hexadecimales.
    answers: ["sha256:ae4ce13e146b4af8c20975528ffaa307c3156c143c14545233880324f92cfff0"]
  - id: argon2id-owasp
    tier: 1
    prompt: |
      ¿Qué configuración mínima de Argon2id recomienda OWASP? Da la memoria en KiB (como la piden las bibliotecas), las iteraciones y el paralelismo.

      Respuesta: `KiB;iteraciones;paralelismo`.
    answers: ["sha256:e34adb3b445e8673dafaaa39052ce974933e86678d0c7f150e633aa946c82b04"]
  - id: nonces-aleatorios
    tier: 2
    prompt: |
      Con AES-GCM y nonces aleatorios de 96 bits, ¿qué probabilidad de que dos mensajes repitan nonce hay tras 2³² mensajes? (Paradoja del cumpleaños.)

      Respuesta: su log₂ redondeado al entero (por ejemplo `-20`).
    answers: ["sha256:38ba4d774db065ae5ed9730a1bff2b14c50a15552aff2cba17e73745dd3d78a7"]
  - id: cadena-de-certificados
    tier: 2
    prompt: |
      Una hoja está firmada por una intermedia cuyo certificado tiene `basicConstraints = CA:FALSE`, y la intermedia por una raíz de confianza. ¿Qué error da `openssl verify`?

      Respuesta: el mensaje en inglés tal como lo imprime OpenSSL (sin el número, que cambia entre versiones).
    answers: ["sha256:c9dc8482c3a46405ce64fdd6b386822a8fe482e53e0226b80460de425b03b2c9"]
  - id: certificado-caducado
    tier: 1
    prompt: |
      ¿Qué código de error da `openssl verify` para un certificado cuyo `notAfter` ya ha pasado?

      Respuesta: el mensaje en inglés tal como lo imprime OpenSSL (sin el número).
    answers: ["sha256:1a74eb8739237032fb82523710f5a6d1101db2ecce8430ab89c44683211926e8"]
  - id: comodines-en-san
    tier: 2
    prompt: |
      Un certificado tiene `subjectAltName = DNS:*.exodus.test, DNS:exodus.test`. ¿Para qué nombres es válido? a) `api.exodus.test`; b) `a.b.exodus.test`; c) `exodus.test`; d) `apiexodus.test`.

      Respuesta: las letras en orden, separadas por espacios.
    answers: ["sha256:f45de51cdef30991551e41e882dd7b5404799648a0a00753f44fc966e6153fc1"]
  - id: comparacion-no-constante
    tier: 2
    prompt: |
      Un servidor compara una etiqueta MAC de 16 bytes byte a byte y responde antes en cuanto encuentra una diferencia, y el atacante puede medir ese tiempo. ¿Cuántos intentos necesita como máximo para falsificar la etiqueta, frente a 2¹²⁸ por fuerza bruta?

      Respuesta: un número.
    answers: ["sha256:8b926d75599a618e21f1341318e66517be26e18cc7496783d2b59758c1333be8"]
  - id: cifrado-de-sobre
    tier: 1
    prompt: |
      En el cifrado de sobre (*envelope encryption*), los datos se cifran con una DEK y la DEK con una KEK guardada en un KMS. Al rotar la KEK, ¿qué hay que volver a cifrar: los datos o las DEK?

      Respuesta: `datos` o `DEK`.
    answers: ["sha256:24400004dc6ef1610dec22ebe2eb7159adf23bd154cbc7e30c30c9db0aa37868"]
  - id: tamano-de-firmas
    tier: 1
    prompt: |
      ¿Cuántos bytes mide una firma Ed25519 y una firma RSA con clave de 3072 bits?

      Respuesta: `ed25519;rsa`.
    answers: ["sha256:2c30858435462eb0a759bfd0309e0abddfd70d2d4df8d7e4aff9d87417e24f2e"]
  - id: ml-kem-768
    tier: 2
    prompt: |
      Según FIPS 203, ¿cuántos bytes miden la clave de encapsulación y el texto cifrado de ML-KEM-768?

      Respuesta: `clave;cifrado`.
    answers: ["sha256:a0564db892c408c69eda71c65bc3d170ee5cccd890fae60e79a165ad592325df"]
  - id: x25519
    tier: 3
    prompt: |
      Alicia y Bruno usan X25519 con claves privadas SHA-256(`alicia`) y SHA-256(`bruno`) (32 bytes cada una, tal cual). ¿Cuáles son los primeros 8 bytes del secreto compartido?

      Respuesta: 16 cifras hexadecimales.
    answers: ["sha256:5d3e797a44dcfed47a82914be965b531573039542643b38fa9918824a18650aa"]
  - id: prefijos-de-contrasenas
    tier: 1
    prompt: |
      En `/etc/shadow` y en los formatos PHC, ¿qué prefijo identifica a cada algoritmo: 1) yescrypt; 2) bcrypt; 3) Argon2id; 4) SHA-512 crypt? Opciones: a) `$2b$`; b) `$6$`; c) `$y$`; d) `$argon2id$`.

      Respuesta: las letras para 1, 2, 3 y 4, separadas por espacios.
    answers: ["sha256:ec6b4c244fa34011a26da4b2c57e5dffd8470ff4f18746c627b021335a1bafcc"]
  - id: x3dh
    tier: 2
    prompt: |
      En X3DH (el acuerdo inicial de Signal), cuando el paquete de Bruno incluye una preclave de un solo uso, ¿cuántos Diffie-Hellman se combinan para derivar la clave inicial?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: frase-diceware
    tier: 1
    prompt: |
      ¿Cuántos bits de entropía tiene una frase de 6 palabras elegidas al azar de la lista Diceware de 7776 palabras?

      Respuesta: con 1 decimal.
    answers: ["sha256:4510b7bcd95a13c49dc12f91cb382500ad779df6b27cf82ad5bb66b41423eff2"]
---

Los algoritmos de [[sec-criptografia]] casi nunca se rompen; lo que se rompe es **cómo se usan**: un nonce repetido, una clave derivada sin separar contextos, una contraseña guardada con SHA-256, una comparación
que tarda más cuando acierta, un certificado que no se valida bien. Este nodo es la ingeniería que convierte primitivas correctas ([[proy-sec-cripto-verificada]]) en sistemas seguros, y es la continuación
natural de [[lab-sec-cripto-mal-usada]], donde viste tres de esos errores en la práctica.

## Objetivos

Al terminar sabrás:

1. Obtener aleatoriedad buena y gestionar nonces y límites de uso de los cifrados autenticados.
2. Derivar claves con HKDF separando contextos, y guardar contraseñas con funciones lentas bien configuradas.
3. Validar firmas, cadenas de certificados y nombres de servidor sin los errores clásicos.
4. Explicar TLS 1.3 de principio a fin (intercambio, programa de claves, propiedades) y el diseño de Signal.
5. Gestionar claves (KMS, cifrado de sobre, rotación), evitar canales laterales y preparar la migración poscuántica.

## Qué debes dominar antes

[[sec-criptografia]] (cifrados, MAC, RSA, Diffie-Hellman, curvas elípticas), [[proy-sec-cripto-verificada]] (AES-GCM, ChaCha20-Poly1305, HMAC, HKDF a mano) y [[lab-sec-cripto-mal-usada]].

> [!question] Test de entrada
> 1. ¿Qué garantiza un cifrado autenticado (AEAD) que no garantiza AES-CTR?
> 2. ¿Por qué no se guarda una contraseña cifrada?
> 3. ¿Qué es el secreto hacia adelante (*forward secrecy*)?
>
> Respuestas: además de confidencialidad, integridad y autenticidad del texto cifrado y de los datos asociados: cualquier modificación se detecta; porque quien tenga la clave las descifra todas, y para
> comprobarlas basta un resumen lento con sal; que robar hoy la clave a largo plazo de un servidor no permite descifrar las conversaciones pasadas, porque cada una usó claves efímeras ya destruidas.

## 1. Aleatoriedad

Toda la criptografía se apoya en números impredecibles. Se piden al sistema operativo (`getrandom(2)` en Linux, `BCryptGenRandom` en Windows, `crypto.getRandomValues` en el navegador, `secrets` en
Python), nunca a `rand()`, `Math.random()` o `random` de Python, que son predecibles. El caso de Debian (CVE-2008-0166) es la lección: un parche dejó el generador de OpenSSL alimentado solo por el PID,
y durante dos años todas las claves SSH y TLS generadas en Debian salieron de un conjunto de 32 768 posibles por arquitectura y tipo de clave. Las máquinas virtuales clonadas y los dispositivos
empotrados que arrancan sin entropía repiten claves por la misma razón.

## 2. Cifrado autenticado en la práctica

Un AEAD (AES-GCM, ChaCha20-Poly1305) cifra con una clave, un **nonce** y datos asociados, y produce una etiqueta. Su única exigencia dura es: **nunca repetir un nonce con la misma clave**. En GCM, una
repetición revela el XOR de los dos textos y permite falsificar mensajes (la clave de autenticación se despeja de un polinomio).

- **Nonces de contador**: seguros si el contador nunca retrocede (cuidado con reinicios, copias de seguridad y varias réplicas con la misma clave).
- **Nonces aleatorios de 96 bits**: por la paradoja del cumpleaños, tras n mensajes la probabilidad de repetición es ≈ n²/2⁹⁷. Con 2²⁴ mensajes es unas 2⁻⁴⁹; NIST SP 800-38D limita a 2³² mensajes por
  clave con nonces aleatorios. Si se necesitan más, se rota la clave, se usa **XChaCha20-Poly1305** (nonces de 192 bits, aleatorios sin preocuparse) o un modo resistente a repeticiones (AES-GCM-SIV).
- **Datos asociados**: lo que no se cifra pero debe ir ligado al mensaje (cabeceras, el identificador del usuario). Ligar el contexto evita que un texto cifrado válido se reutilice en otro sitio.
- **Errores de diseño**: cifrar y luego no comprobar la etiqueta antes de usar el texto; usar el mismo par clave/nonce en dos direcciones de un canal; truncar la etiqueta.

## 3. Derivar claves

Una clave maestra no se usa directamente para todo: se derivan subclaves independientes con **HKDF** (RFC 5869). *Extract* concentra la entropía de un material de entrada (por ejemplo un secreto de
Diffie-Hellman) en una clave pseudoaleatoria con una sal; *Expand* produce tantas claves como haga falta, cada una con un `info` distinto (`"cifrado cliente→servidor"`, `"mac"`, …): conocer una no
revela las otras. TLS 1.3 envuelve Expand en **HKDF-Expand-Label**, que codifica la longitud pedida, la etiqueta con el prefijo `tls13 ` y un contexto (normalmente el hash de la transcripción) en una
estructura `HkdfLabel`, para que ninguna derivación pueda confundirse con otra.

## 4. Contraseñas

Las contraseñas tienen poca entropía, así que se guardan con una función **deliberadamente lenta y con sal**, para que cada intento del atacante que roba la base de datos cueste caro:

- **Argon2id** (RFC 9106; ganador de la Password Hashing Competition): dura en memoria, lo que encarece las GPU y los ASIC. OWASP recomienda como mínimo 19 MiB de memoria, 2 iteraciones y paralelismo 1
  (o una combinación equivalente con más memoria y menos iteraciones).
- **scrypt** (también dura en memoria), **bcrypt** (factor de coste ≥ 10; corta la contraseña a 72 bytes) y **PBKDF2-HMAC-SHA256** (solo coste de CPU; OWASP pide ≥ 600 000 iteraciones; es la opción para
  entornos FIPS).
- **Sal** aleatoria por usuario (evita las tablas precalculadas y que dos usuarios con la misma contraseña tengan el mismo resumen) y, opcionalmente, una **pimienta** guardada fuera de la base de datos.
- El resultado se guarda en un formato autodescriptivo (formato PHC o `crypt`: el prefijo dice el algoritmo y los parámetros), para poder subir el coste con el tiempo y rehacer el resumen en el siguiente
  inicio de sesión.

La entropía de una contraseña elegida al azar es log₂(posibilidades): 5 palabras Diceware (lista de 7776) dan 5 · log₂ 7776 ≈ 64,6 bits; una contraseña "inventada" por una persona, muchos menos de lo
que aparenta.

## 5. Firmas, certificados y nombres

- **Ed25519** (RFC 8032): firmas de 64 bytes, deterministas (no necesitan aleatoriedad al firmar) y rápidas. **ECDSA** necesita un número aleatorio único por firma: repetirlo, o sesgarlo, revela la clave
  privada (le pasó a la PlayStation 3); por eso se usa la variante determinista del RFC 6979. **RSA** con PSS para firmar y OAEP para cifrar, nunca con el relleno PKCS#1 v1.5 en diseños nuevos; una
  firma RSA mide lo mismo que el módulo.
- **Validar una cadena X.509** (RFC 5280): cada certificado firmado por el siguiente hasta una raíz de confianza; fechas de validez; los intermedios deben tener `basicConstraints: CA:TRUE` (si no,
  cualquiera con un certificado de hoja podría emitir otros) y `keyUsage: keyCertSign`; restricciones de nombre y de longitud de camino; revocación (OCSP, CRL) y, en la web, **Certificate
  Transparency** (los certificados se registran en registros públicos que cualquiera puede auditar).
- **Comprobar el nombre** (RFC 9525, que sustituye al 6125): el nombre del servidor se compara con los `subjectAltName` de tipo DNS, no con el CN. Un comodín solo puede ser la etiqueta **más a la izquierda
  completa** y cubre **una sola** etiqueta: `*.ejemplo.org` vale para `www.ejemplo.org`, no para `ejemplo.org` ni para `a.b.ejemplo.org`. Desactivar la comprobación del nombre ("para que funcione")
  anula TLS: cualquier certificado válido para cualquier dominio sirve para suplantar.

## 6. TLS 1.3

El protocolo que protege casi todo el tráfico (RFC 8446, 2018) se simplificó respecto a TLS 1.2: solo intercambio de claves efímero (secreto hacia adelante siempre), solo AEAD, cinco suites, y el
intercambio cifrado desde el segundo mensaje.

1. **ClientHello**: versiones, suites, y ya una **key_share** (la parte pública de un intercambio X25519, o híbrido X25519MLKEM768) para ahorrar un viaje.
2. **ServerHello** con su key_share. Ambos calculan el secreto compartido; a partir de aquí todo va cifrado con claves de *handshake*.
3. **EncryptedExtensions**, **Certificate**, **CertificateVerify** (firma sobre el hash de toda la transcripción: demuestra que el servidor posee la clave privada **y** liga la firma a esta conversación) y
   **Finished** (un MAC de la transcripción con una clave derivada).
4. El cliente comprueba la cadena y el nombre, envía su Finished, y los dos derivan las claves de aplicación.

**Programa de claves**: secreto temprano (de una clave precompartida, si la hay) → secreto de *handshake* (con el de Diffie-Hellman) → secreto maestro, cada paso con HKDF-Extract y cada clave con
HKDF-Expand-Label ligada al hash de la transcripción. **0-RTT** (reanudación con datos en el primer mensaje) ahorra un viaje pero esos datos se pueden **repetir**: solo para peticiones idempotentes. La
protección contra degradación pone una marca en el aleatorio del servidor si negocia una versión antigua.

## 7. Mensajería y grupos

**Signal** combina **X3DH** para el primer contacto asíncrono (Bruno publica en el servidor una clave de identidad, una preclave firmada y preclaves de un solo uso; Alicia combina varios Diffie-Hellman
entre sus claves y las de Bruno: los que mezclan identidades autentican y los efímeros dan secreto hacia adelante) con el **doble trinquete**: un trinquete de Diffie-Hellman en cada cambio de turno y uno
simétrico (KDF) en cada mensaje. Así se obtiene secreto hacia adelante y **seguridad tras un compromiso** (si roban el estado, la siguiente ronda de Diffie-Hellman vuelve a dejar fuera al atacante). Para
grupos grandes, **MLS** (RFC 9420) lo hace con un árbol de claves en coste logarítmico.

## 8. Gestión de claves y canales laterales

- **KMS y HSM**: las claves maestras no salen del módulo; las aplicaciones piden operaciones. **Cifrado de sobre**: cada objeto se cifra con su propia clave de datos (DEK), y la DEK se guarda cifrada con
  una clave maestra (KEK) del KMS. Rotar la KEK solo obliga a recifrar las DEK (unos pocos bytes cada una), no los datos.
- **Agilidad criptográfica**: identificar el algoritmo y la versión en lo que se guarda, para poder migrar.
- **Secretos en el código**: claves en repositorios, imágenes y variables de entorno filtradas; detectarlos con escáneres (gitleaks, trufflehog) y revocarlos, no solo borrarlos del historial.
- **Canales laterales**: una comparación que sale en el primer byte distinto revela, midiendo el tiempo, cuántos bytes coinciden; con un token de 32 bytes basta probar como mucho 32 · 256 = 8192 valores en
  vez de 2²⁵⁶. Se usa una comparación de **tiempo constante** (`hmac.compare_digest`, `crypto.timingSafeEqual`, `CRYPTO_memcmp`). Los oráculos de relleno (Vaudenay, 2002) y Lucky 13 son la misma idea
  con los errores de descifrado: la cura es un AEAD que rechace cualquier modificación antes de mirar el contenido.

## 9. Criptografía poscuántica

Un ordenador cuántico suficientemente grande rompería RSA y las curvas elípticas con el algoritmo de Shor ([[cua-computacion-cuantica]]); el cifrado simétrico solo pierde la mitad de bits de seguridad
(Grover), y AES-256 sigue siendo suficiente. Como un atacante puede **guardar hoy** el tráfico y descifrarlo cuando exista ese ordenador, el intercambio de claves es lo urgente. NIST publicó en agosto de 2024
**FIPS 203** (ML-KEM, encapsulación basada en retículos, antes Kyber), **FIPS 204** (ML-DSA, firmas, antes Dilithium) y **FIPS 205** (SLH-DSA, firmas basadas en hashes, antes SPHINCS+). Las claves y textos
cifrados son mucho mayores (del orden de un kilobyte frente a los 32 bytes de X25519), así que se despliegan en modo **híbrido**: X25519MLKEM768 combina los dos secretos y es seguro mientras lo sea
cualquiera de ellos; los navegadores y servidores principales ya lo negocian por defecto en TLS 1.3. OpenSSL 3.5 incluye ML-KEM, ML-DSA y SLH-DSA.

## 10. Comprobar con un programa

HKDF-Expand-Label a mano contrastado con el vector oficial del RFC 8448, el límite del cumpleaños para nonces y una comparación en tiempo constante:

```python
# HKDF-Expand-Label (TLS 1.3) contra el RFC 8448, cumpleaños de nonces y comparación en tiempo constante
import hashlib
import hmac
import math


def hkdf_expand(prk, info, n):
    t, okm, i = b"", b"", 1
    while len(okm) < n:
        t = hmac.new(prk, t + info + bytes([i]), hashlib.sha256).digest()
        okm, i = okm + t, i + 1
    return okm[:n]


def expand_label(secreto, etiqueta, contexto, n):
    l = b"tls13 " + etiqueta
    info = n.to_bytes(2, "big") + bytes([len(l)]) + l + bytes([len(contexto)]) + contexto
    return hkdf_expand(secreto, info, n)


# RFC 8448, «Simple 1-RTT Handshake»: secreto de tráfico de handshake del servidor → IV de escritura
prk = bytes.fromhex("b67b7d690cc16c4e75e54213cb2d37b4e9c912bcded9105d42befd59d391ad38")
iv = expand_label(prk, b"iv", b"", 12)
print("iv:", iv.hex(), "coincide con el RFC 8448:", iv.hex() == "5d313eb2671276ee13000b30")

# Probabilidad de repetir un nonce aleatorio de 96 bits tras n mensajes
for e in (24, 28, 36):
    n = 2 ** e
    p = -math.expm1(-n * (n - 1) / 2 / 2 ** 96)
    print("2^%d mensajes: p ≈ 2^%.1f" % (e, math.log2(p)))

# Comparación en tiempo constante frente a la ingenua
def ingenua(a, b):
    for x, y in zip(a, b):
        if x != y:
            return False
    return len(a) == len(b)

esperado = hmac.new(b"k", b"mensaje", hashlib.sha256).digest()
print("ingenua:", ingenua(esperado, esperado), " compare_digest:", hmac.compare_digest(esperado, bytes(32)))
print("bits de 5 palabras Diceware: %.1f" % (5 * math.log2(7776)))
```

Salida:

```
iv: 5d313eb2671276ee13000b30 coincide con el RFC 8448: True
2^24 mensajes: p ≈ 2^-49.0
2^28 mensajes: p ≈ 2^-41.0
2^36 mensajes: p ≈ 2^-25.0
ingenua: True  compare_digest: False
bits de 5 palabras Diceware: 64.6
```

## 11. Errores típicos

- Nonces repetidos (contadores que se reinician, réplicas con la misma clave) o aleatorios sin respetar el límite de mensajes.
- Usar la misma clave para dos fines; derivar con un hash casero en vez de HKDF.
- Contraseñas con SHA-256 (rápido), sin sal o con parámetros de hace diez años.
- `verify=False`, `InsecureSkipVerify`, desactivar la comprobación del nombre; aceptar `alg: none` en un JWT.
- Comparar MAC o tokens con `==`; dar mensajes de error distintos según el paso que falla.
- Claves en el repositorio; no poder rotar porque el formato no dice qué algoritmo se usó.
- Inventar un protocolo en vez de usar TLS, Noise, Signal o una biblioteca de alto nivel (libsodium, Tink).

## 12. Resumen

- Aleatoriedad del sistema operativo; nonces únicos (contador, o aleatorios con límite, o XChaCha/SIV).
- HKDF con `info` distinto para cada clave; HKDF-Expand-Label en TLS 1.3.
- Contraseñas: Argon2id/scrypt/bcrypt/PBKDF2 con parámetros de OWASP, sal y formato autodescriptivo.
- Firmas Ed25519 o RSA-PSS; cadenas X.509 con `CA:TRUE` en los intermedios, fechas, revocación y CT; nombres por SAN con comodín de una etiqueta.
- TLS 1.3: key_share en el primer mensaje, CertificateVerify sobre la transcripción, programa de claves con HKDF, 0-RTT repetible. Signal: X3DH y doble trinquete; MLS para grupos.
- KMS y cifrado de sobre; tiempo constante; ML-KEM/ML-DSA/SLH-DSA e intercambio híbrido.

## Repaso: lo que debe quedarte dentro de un mes

1. Un nonce repetido con la misma clave rompe GCM.
2. Una clave, un propósito: HKDF con `info`.
3. Contraseñas: lento, con sal, con parámetros que se pueden subir.
4. Validar cadena **y** nombre, o TLS no protege de nada.
5. El intercambio de claves debe ser ya híbrido poscuántico.

## Siguiente

`sec-seguridad-redes` (TLS, VPN y protocolos en la red), `sec-criptoanalisis` (por qué se rompen los esquemas mal diseñados) y `sec-formal-protocolos` (cómo se demuestra que un protocolo como TLS 1.3 es
seguro).
