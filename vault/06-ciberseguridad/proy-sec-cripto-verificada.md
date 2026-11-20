---
id: proy-sec-cripto-verificada
title: "Proyecto: criptografía verificada contra los vectores oficiales (ChaCha20, Poly1305, ChaCha20-Poly1305, SHA-256, HMAC, HKDF, AES y AES-GCM)"
area: ciberseguridad
trunk_level: 13
kind: proyecto
prerequisites: [sec-criptografia, mat-teoria-numeros]
academic_sources:
  - "Nir, Y.; Langley, A. RFC 8439: ChaCha20 and Poly1305 for IETF Protocols. IETF, 2018; Bernstein, D. J. ChaCha, a variant of Salsa20 (2008) y The Poly1305-AES message-authentication code (FSE 2005)."
  - "NIST. FIPS 197: Advanced Encryption Standard (AES), actualización de 2023; FIPS 180-4: Secure Hash Standard, 2015; SP 800-38D: Galois/Counter Mode (GCM) and GMAC, 2007."
  - "Krawczyk, H.; Eronen, P. RFC 5869: HMAC-based Extract-and-Expand Key Derivation Function (HKDF). IETF, 2010; Krawczyk, H.; Bellare, M.; Canetti, R. RFC 2104: HMAC. IETF, 1997."
  - "Aumasson, J.-P. Serious Cryptography, 2ª ed. No Starch Press, 2024; Ferguson, N.; Schneier, B.; Kohno, T. Cryptography Engineering. Wiley, 2010."
attachments: [prueba.sh]
exercises:
  - id: hito-1-chacha20
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `cripto bloque-chacha CLAVE NONCE CONTADOR` y `cripto chacha20 CLAVE NONCE CONTADOR DATOS` implementan la función de bloque y el cifrado en flujo ChaCha20 de la RFC 8439 (§2), con los vectores oficiales, un mensaje de 1000 bytes y entradas inválidas.

      Comprueba con `bash prueba.sh ./cripto 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4286c1d6d5fe9428fcc595f64c266ca13f21ddc25b203bfc65ac1961d764020b"]
  - id: hito-2-poly1305
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `cripto poly1305 CLAVE MENSAJE` implementa el autenticador de un solo uso Poly1305 (aritmética módulo 2¹³⁰ − 5 y la máscara de r), con el vector de la RFC 8439 y casos límite (§3).

      Comprueba con `bash prueba.sh ./cripto 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:a0ac490f4c5a623d1dffd9c501a1d0543da052a11ef8937e7f963cf3bf2ccb5d"]
  - id: hito-3-aead-chacha20-poly1305
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `cripto sella-chacha` y `cripto abre-chacha` implementan el AEAD ChaCha20-Poly1305 de la RFC 8439 (clave de un solo uso, relleno y longitudes, comparación de etiquetas en tiempo constante) y rechazan con código 1 cualquier manipulación del cifrado, de la etiqueta o de los datos asociados (§4).

      Comprueba con `bash prueba.sh ./cripto 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f0473d92a6bb886980d7c4e3a2bf4cfd94e9adf214823787566cb96791b58f0b"]
  - id: hito-4-sha256-hmac-hkdf
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `cripto sha256`, `cripto hmac` y `cripto hkdf SAL IKM INFO L` implementan SHA-256 (FIPS 180-4), HMAC-SHA-256 (RFC 2104) y HKDF (RFC 5869), con los vectores oficiales y entradas largas (§5).

      Comprueba con `bash prueba.sh ./cripto 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:80be20b8ef7f8963d05297fbd371825567de93eb0b2bf6a684562da34add90df"]
  - id: hito-5-aes
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** `cripto aes CLAVE BLOQUE` cifra un bloque con AES-128, AES-192 o AES-256 según la longitud de la clave (FIPS 197): expansión de clave, SubBytes, ShiftRows, MixColumns y AddRoundKey, con los vectores del apéndice C (§6).

      Comprueba con `bash prueba.sh ./cripto 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:5771731f568fc50b0ac6cf5340eabeb18d4777e8342636f358c1ffe60224505c"]
  - id: hito-6-aes-gcm
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** `cripto sella-gcm` y `cripto abre-gcm` implementan AES-GCM (NIST SP 800-38D) con IV de 96 bits: contador, GHASH en GF(2¹²⁸) y etiqueta, con el caso de prueba oficial, mensajes largos, solo datos asociados y rechazo de manipulaciones (§7).

      Comprueba con `bash prueba.sh ./cripto 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:93049b9b3f84638f49fe26138f2d3b27550ca1a66b6f2d814cc4db3d262f4b2d"]
---

Vas a implementar **desde cero** los algoritmos que protegen casi todo el tráfico de internet (TLS 1.3, WireGuard, SSH, Signal) y a **verificarlos** contra los vectores oficiales de sus normas. Es un
proyecto de **ingeniería de seguridad defensiva**: el objetivo no es inventar criptografía (nunca se hace) sino entender exactamente qué hace cada pieza, por qué está diseñada así y dónde se rompe si se usa mal,
para auditar implementaciones y elegir bien las bibliotecas. Aplica [[sec-criptografia]] (y la aritmética modular de [[mat-teoria-numeros]]), y es la base del laboratorio [[lab-sec-cripto-mal-usada]], donde se
ve qué pasa cuando se reutiliza un nonce.

> [!warning] Tu implementación es para aprender, no para producción
> Una implementación correcta en los vectores puede seguir siendo insegura: tiempos que dependen de los datos (tablas de AES indexadas por bytes secretos), restos de claves en memoria, comparaciones que salen
> antes de tiempo. En producción se usan bibliotecas auditadas (libsodium, BoringSSL, RustCrypto, `cryptography` de Python) y se elige la construcción, no las primitivas.

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `cripto` en el lenguaje que quieras, **sin bibliotecas criptográficas** (sí puedes usar enteros grandes del lenguaje). Todas las entradas y salidas son **hexadecimales**; el guion `-` significa
"vacío" en una entrada, y una salida vacía se escribe `-`. Una entrada inválida (tamaño de clave, nonce o bloque incorrectos, hexadecimal mal formado) termina con código 1, igual que una autenticación fallida. El
adjunto **`prueba.sh`** combina los vectores oficiales con mensajes largos pseudoaleatorios y comprobaciones de manipulación, y da un código por hito; con `-v` muestra las salidas, que puedes comparar tú
mismo con las normas.

## 2. ChaCha20 (RFC 8439, §2.1–2.4)

- **Estado**: 16 palabras de 32 bits: las constantes `"expand 32-byte k"`, la clave (8 palabras), el contador (1) y el nonce (3), todas en **little-endian**.
- **Cuarto de ronda**: a += b; d ^= a; d <<<= 16; c += d; b ^= c; b <<<= 12; a += b; d ^= a; d <<<= 8; c += d; b ^= c; b <<<= 7 (sumas módulo 2³²). Diez dobles rondas (columnas y diagonales), y al final se suma el
  estado inicial: sin esa suma, la función sería invertible y el flujo revelaría la clave.
- `bloque-chacha CLAVE NONCE CONTADOR` imprime los 64 bytes del bloque; `chacha20 CLAVE NONCE CONTADOR DATOS` cifra (o descifra: es la misma operación) con el flujo de bloques con contador, contador + 1, …
- Diseño ARX (sumas, rotaciones y XOR): rápido en software sin tablas, y por tanto sin fugas por caché.

## 3. Poly1305 (RFC 8439, §2.5)

La clave de 32 bytes da r (los 16 primeros, con la **máscara** que pone a cero algunos bits: `0x0ffffffc0ffffffc0ffffffc0fffffff`) y s (los 16 últimos). Cada bloque de 16 bytes del mensaje (el último, como esté),
con un byte `01` añadido al final, se lee como entero little-endian n; acc = (acc + n)·r mod (2¹³⁰ − 5); la etiqueta es (acc + s) mod 2¹²⁸ en little-endian. `poly1305 CLAVE MENSAJE`. Es un autenticador **de un
solo uso**: con dos mensajes autenticados con la misma clave, un atacante puede despejar r y falsificar.

## 4. ChaCha20-Poly1305 (RFC 8439, §2.6–2.8)

- La **clave de Poly1305** son los 32 primeros bytes de ChaCha20 con contador 0; el mensaje se cifra con contador 1.
- La etiqueta autentica: AAD con relleno de ceros hasta múltiplo de 16, el cifrado con relleno, y las dos longitudes en 8 bytes little-endian.
- `sella-chacha CLAVE NONCE AAD DATOS` imprime cifrado ‖ etiqueta; `abre-chacha CLAVE NONCE AAD CIFRADO‖ETIQUETA` comprueba la etiqueta **antes** de descifrar, con una comparación en **tiempo constante**
  (acumulando el XOR de todos los bytes), y solo entonces devuelve el texto; si no coincide, código 1 sin ninguna salida.

## 5. SHA-256, HMAC y HKDF

- **SHA-256** (FIPS 180-4): relleno (un bit 1, ceros y la longitud en bits en 64 bits big-endian), 64 rondas por bloque con las constantes K (las partes fraccionarias de las raíces cúbicas de los 64 primeros primos)
  y las funciones Σ, σ, Ch y Maj. `sha256 DATOS`. El caso de 56 bytes obliga a añadir un bloque entero de relleno.
- **HMAC** (RFC 2104): H((K ⊕ opad) ‖ H((K ⊕ ipad) ‖ m)), con la clave resumida si pasa de 64 bytes. `hmac CLAVE DATOS`.
- **HKDF** (RFC 5869): extracción PRK = HMAC(sal, IKM) (sal vacía = 32 ceros) y expansión T(i) = HMAC(PRK, T(i − 1) ‖ info ‖ i), hasta L bytes (L ≤ 255·32). `hkdf SAL IKM INFO L`. Es lo que TLS 1.3 usa para derivar
  todas sus claves a partir del secreto compartido.

## 6. AES (FIPS 197)

`aes CLAVE BLOQUE` cifra un bloque de 16 bytes con 10, 12 o 14 rondas según la clave sea de 16, 24 o 32 bytes: la S-box (inverso en GF(2⁸) con el polinomio x⁸ + x⁴ + x³ + x + 1 y una transformación afín,
calcúlala en lugar de copiarla), ShiftRows, MixColumns (multiplicación por {02}, {03}, {01}, {01}) y AddRoundKey, con la expansión de clave (RotWord, SubWord, Rcon, y el SubWord extra de AES-256). Pruébala con los
tres vectores del apéndice C. Las implementaciones con tablas de búsqueda filtran la clave por la caché (Bernstein, 2005); por eso los procesadores tienen instrucciones AES-NI y ARMv8-CE.

## 7. AES-GCM (NIST SP 800-38D)

Con IV de 12 bytes: H = AES_K(0¹²⁸); J₀ = IV ‖ 0x00000001; el cifrado es AES-CTR desde J₀ + 1 (incrementando los 32 bits bajos); la etiqueta es GHASH_H(AAD ‖ relleno ‖ C ‖ relleno ‖ len(AAD) ‖ len(C), longitudes en
**bits** en 64 bits big-endian) ⊕ AES_K(J₀), con la multiplicación en GF(2¹²⁸) del polinomio x¹²⁸ + x⁷ + x² + x + 1 en el **orden de bits invertido** de GCM (el bit 0 es el más significativo del primer byte; la reducción
con R = 0xE1 ‖ 0¹²⁰). `sella-gcm` y `abre-gcm` como en el hito 3. Reutilizar un IV con la misma clave en GCM es catastrófico: revela el XOR de los textos **y** permite recuperar H y falsificar etiquetas (el ataque
"prohibido" de Joux, 2006).

## 8. Arquitectura y calidad

Una función por primitiva con tipos de tamaño fijo; las construcciones (AEAD, HKDF) encima de las primitivas; pruebas con **todos** los vectores de las normas (también los de la RFC 8439, apéndice A) y pruebas de
propiedades (descifrar(cifrar(x)) = x, cualquier bit cambiado en el cifrado, la etiqueta o los AAD hace fallar la apertura). Compara tus resultados con OpenSSL (`openssl enc -chacha20`, `openssl dgst -sha256`) o con
la biblioteca estándar de tu lenguaje, que es lo que hacen las referencias de esta prueba.

## 9. Ampliaciones

XChaCha20 (nonces de 192 bits, que se pueden elegir al azar sin riesgo de colisión); AES en tiempo constante con *bitslicing*; SHA-3 y BLAKE2; X25519 (intercambio de claves sobre la curva de Montgomery, RFC 7748) y
Ed25519; y un pequeño protocolo autenticado: X25519 + HKDF + ChaCha20-Poly1305, con números de secuencia contra la repetición, que es lo que usa el enlace seguro del superproyecto.

## 10. Recursos

Las normas citadas (todas gratuitas), *Serious Cryptography* de Aumasson y *Cryptography Engineering*, y los retos de [CryptoHack](https://cryptohack.org) y [Cryptopals](https://cryptopals.com). Más en la
[página de recursos de ciberseguridad](/recursos/ciberseguridad).
