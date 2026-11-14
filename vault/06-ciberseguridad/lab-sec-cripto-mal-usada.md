---
id: lab-sec-cripto-mal-usada
title: "Laboratorio: criptografía mal usada (nonce reutilizado en AES-CTR, patrones en ECB y contraseñas en MD5 sin sal)"
area: ciberseguridad
trunk_level: 13
kind: laboratorio
prerequisites: [sec-criptografia, prog-unix-texto]
academic_sources:
  - "Ferguson, N.; Schneier, B.; Kohno, T. Cryptography Engineering. Wiley, 2010 (modos de operación y nonces)."
  - "NIST SP 800-38A, Recommendation for Block Cipher Modes of Operation (2001); NIST SP 800-63B, Digital Identity Guidelines: Authentication (almacenamiento de secretos)."
  - "OWASP Password Storage Cheat Sheet y OWASP Cryptographic Storage Cheat Sheet. owasp.org, consultados en noviembre de 2026."
attachments: [mensajes.txt, nominas.ecb, hashes.txt, diccionario.txt]
ctf_flag: "sha256:eca28e61bd77051eb263247c92076c1cd534368a33c25d7fc25749c1639418e7"
hints:
  - "En modo CTR, el cifrado es C = P ⊕ K, donde K es un flujo que solo depende de la clave y del nonce. Con el mismo nonce, C1 ⊕ C2 = P1 ⊕ P2: la clave desaparece. Si conoces P1, obtienes P2. En ECB, dos bloques iguales en claro dan dos bloques iguales cifrados."
  - "En Python: bytes(a ^ b ^ c for a, b, c in zip(bytes.fromhex(C1), bytes.fromhex(C2), P1.encode())). Para ECB: xxd -p -c 16 nominas.ecb | sort | uniq -c. Para MD5: recorre el diccionario con printf '%s' palabra | md5sum y compara."
  - "NIST SP 800-38A (modo CTR, sección 6.5, y la exigencia de contadores únicos), el apartado sobre ECB del mismo documento, y la OWASP Password Storage Cheat Sheet (por qué Argon2id, scrypt o bcrypt con sal y no un hash rápido)."
exercises:
  - id: longitud-del-mensaje
    tier: 1
    prompt: |
      En `mensajes.txt`, ¿cuántos bytes mide el segundo mensaje cifrado (`C2`)? En modo CTR, ¿qué te dice eso del texto en claro?

      Respuesta: un número.
    answers: ["sha256:2747b7c718564ba5f066f0523b03e17f6a496b06851333d2d59ab6d863225848"]
  - id: importe
    tier: 2
    prompt: |
      Sabes que el primer mensaje es el informe diario, cuyo texto exacto es:

      ```text
      INFORME DIARIO 2026-11-13: sin incidencias en la red de produccion. Copias de seguridad completadas a las 03:15. Proxima revision el lunes.
      ```

      Y los dos mensajes se cifraron con la misma clave y el mismo nonce. ¿Qué importe (en euros, sin puntos) ordena transferir el segundo?

      Respuesta: un número.
    answers: ["sha256:bac891aa92fc5d96e698de785dc781dcb32e50dcc77b54a0d9255360877964db"]
  - id: bloques-ecb
    tier: 1
    prompt: |
      `nominas.ecb` es una tabla cifrada con AES-128 en modo ECB. ¿Cuántos bloques de 16 bytes tiene?

      Respuesta: un número.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
  - id: bloques-distintos
    tier: 2
    prompt: |
      ¿Cuántos de esos bloques son distintos? ¿Qué revela la diferencia sin descifrar nada?

      Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: contrasenas-crackeadas
    tier: 2
    prompt: |
      `hashes.txt` guarda contraseñas como MD5 sin sal. ¿Cuántas encuentras con `diccionario.txt`?

      Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: contrasena-de-marta
    tier: 2
    prompt: |
      ¿Cuál es la contraseña de `marta`?

      Respuesta: la contraseña.
    answers: ["sha256:893afa6f93613a56f27d4f1a35081392fc366510d19e23261bad7f122a204fda"]
---

> [!info] Escenario
> Una auditoría interna encontró tres "atajos" en el código de una empresa: una utilidad que cifra los mensajes entre sedes con AES-128-CTR y un IV **fijo**, una exportación de nóminas cifrada con
> AES en modo **ECB**, y una tabla de usuarios con contraseñas guardadas como **MD5 sin sal**. Te entregan muestras reales de cada uno. Tu tarea es demostrar, sin conocer la clave, que los tres son
> inseguros, para que el informe no se quede en "teóricamente vulnerable".

La criptografía de [[sec-criptografia]] es correcta; lo que falla casi siempre es **cómo se usa**. Este laboratorio muestra tres de los errores más comunes y caros, con datos sintéticos y
herramientas básicas ([[prog-unix-texto]] y unas líneas de Python). Ninguno exige romper AES: basta con entender qué garantiza cada construcción y qué no.

## 1. Los artefactos

- **`mensajes.txt`**: dos mensajes, `C1` y `C2`, cifrados con la misma clave y el mismo nonce (IV) en modo CTR, en hexadecimal. Sabes por el contexto que `C1` es el informe diario automático, cuyo
  texto exacto aparece en el ejercicio correspondiente.
- **`nominas.ecb`**: una tabla de nóminas con campos de 16 bytes, cifrada en ECB (sin relleno).
- **`hashes.txt`**: `usuario:md5(contraseña)`. **`diccionario.txt`**: una lista de contraseñas candidatas.

La **flag** está dentro del segundo mensaje: recupéralo completo.

## 2. Qué deberías concluir

- **CTR (y cualquier cifrado en flujo) con nonce repetido** pierde toda confidencialidad frente a quien conozca o adivine un mensaje, y además deja **modificar** el texto sin conocer la clave (CTR no
  autentica: cambiar un bit del cifrado cambia el mismo bit del claro). La regla: un nonce **jamás** se repite con la misma clave, y se usa cifrado **autenticado** (AES-GCM, ChaCha20-Poly1305), en el que
  repetir el nonce es todavía más grave (permite falsificar mensajes).
- **ECB** cifra cada bloque por separado: bloques iguales producen cifrados iguales, así que se ven la estructura y las repeticiones (el famoso pingüino de Linux cifrado en ECB). No debe usarse
  nunca para datos.
- **MD5 sin sal** es rapidísimo de calcular (miles de millones por segundo en una GPU) y la misma contraseña da siempre el mismo hash, lo que permite diccionarios y tablas precalculadas. Las contraseñas se
  guardan con una función de derivación **lenta y con sal** por usuario: Argon2id, scrypt o bcrypt (OWASP); y se comprueban contra listas de contraseñas filtradas (NIST SP 800-63B).

## 3. Para el informe

Para cada hallazgo: evidencia (lo que recuperaste), impacto (qué puede hacer un atacante), y corrección concreta. En el primer caso, por ejemplo: "sustituir AES-CTR con IV fijo por AES-256-GCM con nonce
aleatorio de 96 bits por mensaje, o por una biblioteca de alto nivel (libsodium, `crypto_secretbox`) que lo gestione por ti; rotar la clave comprometida".

## 4. Para ir más allá

Demuestra la **maleabilidad** de CTR: sin la clave, modifica `C2` para que el importe pase de `48.500` a `98.500` (cambia los bytes correspondientes con `C2[i] ⊕ '4' ⊕ '9'`). Después lee sobre los ataques de
oráculo de relleno contra CBC y continúa con `sec-criptografia-aplicada`, que trata el uso correcto de las bibliotecas y protocolos.
