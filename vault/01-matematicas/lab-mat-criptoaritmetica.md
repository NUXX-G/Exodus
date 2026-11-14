---
id: lab-mat-criptoaritmetica
title: "Laboratorio: romper con teoría de números un RSA mal desplegado (factores compartidos, primos cercanos, ataque de Håstad y módulo común)"
area: matematicas
trunk_level: 10
kind: laboratorio
prerequisites: [mat-teoria-numeros]
academic_sources:
  - "Boneh, D. Twenty Years of Attacks on the RSA Cryptosystem. Notices of the AMS 46(2), 1999."
  - "Heninger, N.; Durumeric, Z.; Wustrow, E.; Halderman, J. A. Mining Your Ps and Qs: Detection of Widespread Weak Keys in Network Devices. USENIX Security 2012; Lenstra, A. K. et al. Ron was wrong, Whit is right. CRYPTO 2012."
  - "Håstad, J. Solving Simultaneous Modular Equations of Low Degree. SIAM Journal on Computing 17(2), 1988; Simmons, G. J. A 'weak' privacy protocol using the RSA crypto algorithm. Cryptologia 7(2), 1983."
  - "Böck, H. Fermat Factorization in the Wild. Cryptology ePrint Archive 2023/026 (CVE-2022-26320, claves de la biblioteca SafeZone en impresoras); Moriarty, K. et al. RFC 8017: PKCS #1 v2.2 (RSA-OAEP), 2016."
attachments: [claves.txt, mensajes.txt]
ctf_flag: "sha256:6281a0e8fadbe06c4d1f4ab3dea849d5111a1ce282a00bcad6ef53a7b56e282b"
exercises:
  - id: claves-con-un-primo-comun
    tier: 1
    prompt: |
      En `claves.txt` hay dos claves cuyos módulos, siendo distintos, comparten un factor primo. ¿Cuáles son?

      Respuesta: los dos números de clave, `a;b` con a < b.
    answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
  - id: primo-comun
    tier: 2
    prompt: |
      ¿Cuáles son las **seis últimas cifras** (en decimal) de ese primo común?

      Respuesta: un número de seis cifras.
    answers: ["sha256:0c22524ee899316f1c2e0c2818e3e34f05b801ad2ba3f00c8a7ce7654da2eec2"]
  - id: codigo-de-la-sala
    tier: 2
    prompt: |
      Con la clave privada que se deduce de ese primo, descifra el mensaje interceptado para la segunda de esas dos claves. ¿Qué código de acceso de la sala contiene?

      Respuesta: un número.
    answers: ["sha256:b7f4fff9b569a0bc87e6b1ef6c0e4c49c08777c9c9aa5eb6c0727edd840a24b8"]
  - id: iteraciones-de-fermat
    tier: 2
    prompt: |
      Los dos primos de la clave 7 están demasiado cerca. Aplica el método de Fermat empezando en a = ⌈√n⌉ y aumentando a de uno en uno hasta que a² − n sea un cuadrado perfecto. ¿Cuánto vale a − ⌈√n⌉ en ese momento?

      Respuesta: un número.
    answers: ["sha256:eb43272640b269219a01caf99c5a4122d6edc0916d45ac13c0ce80ca3ad2def0"]
  - id: version-de-la-libreria
    tier: 2
    prompt: |
      Descifra el mensaje para la clave 7. ¿Qué versión de la librería de primos menciona?

      Respuesta: la versión, como `X.Y`.
    answers: ["sha256:ad78cfa0ead35ff9d0d6de11ae996a470b257a7342d2a53073df0ce8cda04c4d"]
  - id: dia-de-la-auditoria
    tier: 3
    prompt: |
      Tres mensajes iguales se enviaron a tres claves con exponente e = 3 y sin relleno. Recupera el texto sin factorizar nada. ¿Qué día empieza la auditoría?

      Respuesta: un número.
    answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
hints:
  - "Cuatro errores, cuatro herramientas. Dos módulos que comparten un primo p: mcd(n₁, n₂) = p, y el algoritmo de Euclides lo calcula al instante. Dos primos muy cercanos: n = a² − b² con a = (p + q)/2 casi igual a √n (Fermat). El mismo mensaje con e = 3 a tres módulos: el teorema chino del resto da m³ módulo n₁n₂n₃, y como m³ < n₁n₂n₃ es una raíz cúbica entera. El mismo módulo con dos exponentes coprimos: si s·e₁ + t·e₂ = 1, entonces c₁ˢ·c₂ᵗ = m."
  - "En Python: math.gcd, math.isqrt, pow(e, -1, phi) para la clave privada, pow(c, -1, n) para inversos y una búsqueda binaria para la raíz cúbica entera; para pasar de entero a texto, m.to_bytes((m.bit_length() + 7) // 8, 'big').decode(). En PARI/GP: gcd, sqrtint, issquare, chinese, sqrtnint(x, 3) y gcdext."
  - "Boneh, «Twenty Years of Attacks on the RSA Cryptosystem» (secciones de módulo común, exponente pequeño y Håstad); Heninger et al. (2012) para los factores compartidos en millones de claves reales; y Böck (2022) para las impresoras con primos cercanos."
---

> El departamento de sistemas de una empresa montó su propio «correo cifrado» con RSA de libro de texto: generó las claves con una librería «rápida», cifra el texto tal cual (m^e mod n, sin relleno) y,
> para ahorrar, reutiliza parámetros entre empleados. Te entregan el directorio de claves públicas y unos mensajes interceptados, y te piden un informe que demuestre, **sin ninguna clave privada**, si el
> sistema es seguro.

RSA es seguro si se usa bien: módulos de primos independientes y aleatorios, y un relleno aleatorio (OAEP) antes de exponenciar. Este laboratorio muestra que cada atajo convierte la seguridad en un ejercicio
de [[mat-teoria-numeros]] que se resuelve en milisegundos: el algoritmo de Euclides, el método de factorización de Fermat (1643), el teorema chino del resto y la identidad de Bézout.

## 1. Los artefactos

- **`claves.txt`**: doce claves públicas RSA, `clave N e=E n=MÓDULO`, con módulos de 1024 bits.
- **`mensajes.txt`**: mensajes interceptados, `para clave N c=CIFRADO`. Cada mensaje es su texto UTF-8 leído como un entero (el primer byte es el más significativo) y cifrado como c = m^e mod n.

La **flag** está en el mensaje que se envió a dos empleados que comparten módulo.

## 2. Qué deberías concluir

- **Factores compartidos.** Si dos módulos comparten un primo, el mcd lo revela y los dos quedan factorizados. No es teórico: en 2012, dos equipos (Heninger et al.; Lenstra et al.) calcularon el mcd de millones
  de claves de Internet y factorizaron decenas de miles, casi todas de routers y otros dispositivos que generaban los primos justo al arrancar, sin entropía suficiente. La defensa: un generador aleatorio
  criptográfico bien sembrado.
- **Primos cercanos.** Si |p − q| es pequeño frente a n^(1/4), el método de Fermat factoriza en pocas iteraciones. En 2022, Hanno Böck encontró claves así en impresoras: una biblioteca buscaba el segundo
  primo a partir del primero. Los primos deben generarse por separado.
- **Exponente pequeño sin relleno.** Con e = 3 y el mismo mensaje a tres destinatarios, el teorema chino del resto reconstruye m³ como entero y la raíz cúbica da el mensaje (Håstad, 1988). Sin relleno, además,
  RSA es determinista (el mismo mensaje da el mismo cifrado) y maleable. La defensa es **RSA-OAEP** (PKCS #1 v2.2), que añade aleatoriedad y estructura.
- **Módulo común.** Si dos usuarios comparten n con exponentes coprimos, un mensaje enviado a ambos se recupera con Bézout (Simmons, 1983); y además cualquiera de los dos, con su clave privada, puede factorizar
  n y leer los mensajes del otro. Cada usuario necesita su propio módulo.

## 3. Para el informe

Para cada hallazgo: la evidencia (el mensaje o el factor recuperado), el impacto y la corrección: regenerar todas las claves afectadas con una biblioteca contrastada (OpenSSL, libsodium), cifrar con RSA-OAEP o,
mejor, con un esquema híbrido estándar (o pasar a curvas elípticas), y retirar los parámetros compartidos.

## 4. Para ir más allá

El ataque de **Wiener** a exponentes privados pequeños con fracciones continuas; el método de **Coppersmith** (y LLL) para mensajes con partes conocidas; el ataque de **Bleichenbacher** (1998) contra el relleno
PKCS #1 v1.5; y comprobar tus propias claves con la herramienta `badkeys` de Böck. Continúa con [[sec-criptoanalisis]].
