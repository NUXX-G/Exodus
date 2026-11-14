---
id: sec-criptoanalisis
title: "Criptoanálisis: estadística de los cifrados clásicos, criptoanálisis diferencial y lineal, ataques genéricos (cumpleaños, encuentro a medio camino), RSA mal usado, logaritmo discreto, nonces repetidos y extensión de longitud"
area: ciberseguridad
trunk_level: 15
prerequisites: [sec-criptografia-aplicada, mat-teoria-numeros, mat-probabilidad]
academic_sources:
  - "Stinson, D. R.; Paterson, M. B. Cryptography: Theory and Practice, 4ª ed. CRC Press, 2018; Heys, H. M. A Tutorial on Linear and Differential Cryptanalysis. Cryptologia 26(3), 2002, pp. 189-221."
  - "Boneh, D. Twenty Years of Attacks on the RSA Cryptosystem. Notices of the AMS 46(2), 1999, pp. 203-213; Wiener, M. Cryptanalysis of Short RSA Secret Exponents. IEEE Trans. Inf. Theory 36(3), 1990."
  - "Heninger, N.; Durumeric, Z.; Wustrow, E.; Halderman, J. A. Mining Your Ps and Qs: Detection of Widespread Weak Keys in Network Devices. USENIX Security 2012."
  - "Bogdanov, A. et al. PRESENT: An Ultra-Lightweight Block Cipher. CHES 2007; Biham, E.; Shamir, A. Differential Cryptanalysis of DES-like Cryptosystems. J. Cryptology 4(1), 1991; Matsui, M. Linear Cryptanalysis Method for DES Cipher. EUROCRYPT 1993."
exercises:
  - id: vigenere-longitud
    tier: 2
    prompt: |
      Este texto en castellano (solo letras A-Z, sin tildes ni espacios) está cifrado con Vigenère:

      ```
      NIHIISHQOWRFLOETFJIFOEIDFPRFSCJUEMODIAVROOGAYRDLGVQHRDHZKLNF
      MDIPKNWRDRQXTISXGVQYLCLCPKTESHFXIQRFUSECJECLOFMHRDDZGBWRYXBQ
      XTCIDZHIGVTLQQKTDOHZFMAZGHBGZJJOOCNIWVPDFVMJETUSWVFJPRQCAHFL
      XAPIXJIVSCLNMIQOECFETDGEWQLMQOUPFPCDRCCSRVXSNDJRSHFWVHZFUOFW
      IVCHGCZVLEFOGKTEUQGKUUCEUSECJETRRGTJKRDGDIGSAJSASFJIVYKTTUEV
      QWJWZEUCPMSVLVWITTUIHQKVZVVHPWAHRNGCTMUVTLQKWSVSHBGTYVXWCEQK
      IAGCANWZEGACVQFCRBXQWKIRSPMXKAGWUBNTAFCPMQZNGWEMIVCRWPKNUEQQ
      KIVLEPWFMQRPUCDIGZLLRCLIVQXSFWXCEWFCAJCEJWFIXRLDNCZXVAQWICFC
      EVSPKFJTHZNISFEVORZTSAEWNQIRDUCPLFJIHHGKJETHGKUFJMLSPBWRSTIG
      MSLNWSZBTRLHOVWWZOHGFMZEAHBVZJMELBVQXVIV
      ```

      ¿Cuál es la menor longitud de clave L para la que el índice de coincidencia medio de las L columnas supera 0,06?

      Respuesta: un número.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: vigenere-clave
    tier: 3
    prompt: |
      Con esa longitud, rompe cada columna como un César eligiendo el desplazamiento que minimiza χ² frente a las frecuencias del castellano. ¿Cuál es la clave?

      Respuesta: la clave en mayúsculas.
    answers: ["sha256:526860da24891f42fdd066dc0cc632f2e2e908f75475726aa29ddede0485d0dc"]
  - id: criptoanalisis-diferencial
    tier: 2
    prompt: |
      Para la caja S de 4 bits de PRESENT (`C 5 6 B 9 0 A D 3 E F 8 4 7 1 2`), construye la tabla de distribución de diferencias. Sin contar la fila Δentrada = 0, ¿cuál es el valor máximo y cuántas veces aparece?

      Respuesta: `maximo;veces`.
    answers: ["sha256:5c81090618400ac0987716272b3ca78a6f1fd237c254670a7c01575495b40fb5"]
  - id: criptoanalisis-lineal
    tier: 2
    prompt: |
      Para la misma caja S, en la tabla de aproximaciones lineales (número de x con a·x = b·S(x), menos 8), ¿cuál es el valor absoluto máximo con a, b ≠ 0, y qué sesgo representa (ese valor entre 16)?

      Respuesta: `maximo;sesgo` (el sesgo en decimal).
    answers: ["sha256:a2865d4e660e51bfa181e22f77072b482a47238dafcbb2a0d6784bb0a92704d8"]
  - id: cumpleanos
    tier: 1
    prompt: |
      ¿Cuántos resúmenes hay que calcular, en media, para encontrar una colisión en un resumen de 64 bits? Da el log₂ de √(π/2 · 2⁶⁴).

      Respuesta: con 1 decimal.
    answers: ["sha256:c2c55e2769e84562b58c982a142f213c810ea3d9e3d5831b3673d03d222dc9ff"]
  - id: encuentro-a-medio-camino
    tier: 1
    prompt: |
      El doble DES (dos claves de 56 bits) no da 112 bits de seguridad por el ataque de encuentro a medio camino. ¿Con cuántos cifrados (como potencia de 2: 2ᵏ, contando cifrar y descifrar con todas las claves) se rompe?

      Respuesta: k.
    answers: ["sha256:c837649cce43f2729138e72cc315207057ac82599a59be72765a477f22d14a54"]
  - id: rsa-exponente-pequeno
    tier: 2
    prompt: |
      Un mensaje corto se cifró con RSA, e = 3 y sin relleno: c = 611850640993015933357847274113466617357971268268806123335044359429463326679292489868043701085155808970123778016342058727063852872. El módulo es mucho mayor que m³. ¿Qué dice el mensaje (bytes UTF-8 del entero)?

      Respuesta: el texto.
    answers: ["sha256:f6d37914aa21d40bac7278529e12fe5be55bd17d64efec5c8ebe1ba274ad430a"]
  - id: primos-compartidos
    tier: 2
    prompt: |
      Dos claves RSA generadas con un generador defectuoso tienen los módulos n₁ = 21878741757151417572563953929036467301338504513035793745052943843459372552033 y n₂ = 15463615715685054419577234902257712257894429242850356198971725864150204790597. ¿Cuáles son las 6 últimas cifras del primo que comparten?

      Respuesta: 6 cifras.
    answers: ["sha256:20766489f11e0c2633da28d3774fc770589d79184ea245a0d8843da4b62037f4"]
  - id: factorizacion-de-fermat
    tier: 2
    prompt: |
      n = 851484818801761236212255041178977856650318332385878544453 es el producto de dos primos muy cercanos. Con el método de Fermat (a = ⌈√n⌉, a + 1, … hasta que a² − n sea un cuadrado), ¿cuántos valores de a pruebas y cuáles son las 6 últimas cifras del factor menor?

      Respuesta: `pruebas;cifras`.
    answers: ["sha256:8d646c9c218e422b5d9bbcafe73f54794cf356fe94cb200fc4c3f7f13aa85314"]
  - id: ataque-de-wiener
    tier: 3
    prompt: |
      Una clave RSA usa un exponente privado pequeño: e = 4558403528835293301317248690354533616605550189683700006039180725467334879425, n = 6974977278421399352299749325025871085781309850780477344289403452797503561867. Con el ataque de Wiener (fracciones continuas de e/n), ¿cuál es d?

      Respuesta: d en decimal.
    answers: ["sha256:0ca5edc59f5958312b3c0ec9819e077520e6a7cfa93af1d14688700b5e996f34"]
  - id: paso-de-bebe-paso-de-gigante
    tier: 2
    prompt: |
      Resuelve 2ˣ ≡ 123456 (mód 1000003) con el algoritmo de paso de bebé y paso de gigante. ¿Cuál es el menor x ≥ 0?

      Respuesta: un número.
    answers: ["sha256:af9fb9d47460d124ee061d26ec07b9e1e141e3ef3c27fe503e717dff7a81e93b"]
  - id: pohlig-hellman
    tier: 3
    prompt: |
      p = 425675251 es primo y p − 1 = 2 · 3⁵ · 5³ · 7² · 11 · 13 es liso. Con g = 2 (generador) y h = 217275729, resuelve gˣ ≡ h (mód p) con Pohlig-Hellman. ¿Cuál es el menor x ≥ 0?

      Respuesta: un número.
    answers: ["sha256:dcc7d4c92cfe1504a2d2afd6aa37fc0454ba98825283ad9bf641417091771a67"]
  - id: ecdsa-con-nonce-repetido
    tier: 3
    prompt: |
      Dos firmas ECDSA en P-256 (con SHA-256) del mismo firmante comparten r porque se repitió el nonce. Mensajes: «pago de 10 euros» y «pago de 20 euros». r = 78561952118758522600320418200610160512711098385494029231841729341144006694767, s₁ = 80568288055130714902519293604543878940771329641447039975092863670974570415289, s₂ = 5430613435938657127786213451839464855778578140778591416404101699602940278179. Recupera la clave privada d. ¿Cuáles son sus 16 primeras cifras hexadecimales (con los 64 dígitos, ceros a la izquierda incluidos)?

      Respuesta: 16 cifras hexadecimales.
    answers: ["sha256:102fb355240f74f3778887ea2d6df09c8403ca474fa8277aa2aff3064a0ab9d4"]
  - id: extension-de-longitud
    tier: 2
    prompt: |
      Una API autentica con H(secreto ‖ mensaje) usando SHA-256, con un secreto de 16 bytes y el mensaje `user=ana&rol=lector`. Para extender el mensaje, el atacante necesita el relleno que SHA-256 añadió. ¿Cuántos bytes mide ese relleno y qué longitud en bits codifica?

      Respuesta: `bytes;bits`.
    answers: ["sha256:3b74ade09cb49520cd0c922ea0f30b3bb8b2b886a04b6d0a74c54310c3b2da0d"]
  - id: indice-de-coincidencia
    tier: 1
    prompt: |
      ¿Qué índice de coincidencia esperado tiene un texto de letras uniformemente aleatorias, y cuál el castellano según la tabla de frecuencias que se usa en este nodo (Σ pᵢ²)?

      Respuesta: `aleatorio;castellano` con 4 decimales.
    answers: ["sha256:04bb2ad251b06c08f8ad33c75003da978ab1e917880df29783791024c8bf55be"]
---

El criptoanálisis es la otra mitad de la criptografía: estudiar cómo y por qué se rompen los esquemas. No se aprende a diseñar sin él, porque cada principio de diseño moderno (cajas S con baja
uniformidad diferencial, relleno aleatorio en RSA, nonces únicos, construcciones HMAC) es la respuesta a un ataque concreto. Este nodo trabaja con parámetros de juguete y con fallos documentados en la
literatura: lo que se aprende es a **reconocer** un diseño o un uso débil y a explicar por qué la versión correcta no cae. Continúa [[sec-criptografia-aplicada]] y usa [[mat-teoria-numeros]] y
[[mat-probabilidad]].

## Objetivos

Al terminar sabrás:

1. Romper cifrados clásicos con estadística (índice de coincidencia, χ²) y explicar por qué la estadística del idioma es su debilidad.
2. Calcular tablas de diferencias y aproximaciones lineales de una caja S y entender cómo se convierten en ataques sobre un cifrado por rondas.
3. Aplicar los ataques genéricos (cumpleaños, encuentro a medio camino) para fijar tamaños de clave y de resumen.
4. Reconocer los usos de RSA que se rompen (exponente pequeño sin relleno, primos compartidos o cercanos, exponente privado pequeño) y los algoritmos del logaritmo discreto que explican el tamaño de los grupos.
5. Explicar los fallos de construcción: nonce repetido en (EC)DSA y extensión de longitud en H(secreto ‖ mensaje).

## Qué debes dominar antes

[[sec-criptografia-aplicada]], [[mat-teoria-numeros]] (aritmética modular, Euclides extendido, teorema chino del resto) y [[mat-probabilidad]] (esperanza, paradoja del cumpleaños).

> [!question] Test de entrada
> 1. ¿Por qué un cifrado de sustitución monoalfabética se rompe aunque tenga 26! claves?
> 2. ¿Cuánto cuesta calcular un MCD de dos números de 2048 bits?
> 3. ¿Qué es el principio de Kerckhoffs?
>
> Respuestas: porque conserva la frecuencia de cada letra y el atacante no necesita probar claves: deduce la sustitución de las frecuencias; microsegundos, con el algoritmo de Euclides; que la seguridad debe
> depender solo del secreto de la clave, no del secreto del algoritmo.

## 1. Cifrados clásicos y estadística

El **índice de coincidencia** (Friedman) es la probabilidad de que dos letras elegidas al azar de un texto coincidan: IC = Σ nᵢ(nᵢ − 1) / (N(N − 1)). En un texto con letras uniformes vale 1/26; en un idioma,
Σ pᵢ² con sus frecuencias, bastante más. Un cifrado monoalfabético (César, sustitución) **conserva** el IC; uno polialfabético como **Vigenère** (cada letra se desplaza según la letra de la clave que le
toca) lo baja hacia el uniforme. Para romperlo: se prueba cada longitud L, se reparte el texto en L columnas y se calcula el IC medio; en la longitud correcta (y en sus **múltiplos**, y a veces en divisores
si la clave repite letras) cada columna es un César y el IC vuelve al del idioma. Después, en cada columna se elige el desplazamiento cuya distribución de letras se parece más a la del idioma, minimizando
χ² = Σ (observadoᵢ − esperadoᵢ)² / esperadoᵢ. Kasiski llega a la misma longitud por otro camino: las distancias entre repeticiones del texto cifrado son múltiplos de L.

La lección para hoy: **un cifrado que deja pasar la estructura del texto en claro está roto**, aunque su espacio de claves sea enorme. Es lo que hace el modo ECB con los bloques repetidos.

## 2. Criptoanálisis diferencial y lineal

Los cifrados por bloques modernos alternan capas no lineales (cajas S) y lineales (permutaciones, mezclas). Los dos grandes ataques miden cuánto se aleja la caja S de una función aleatoria:

- **Diferencial** (Biham y Shamir, 1990): para cada diferencia de entrada Δx, cuántas entradas x producen cada diferencia de salida S(x) ⊕ S(x ⊕ Δx). Es la **tabla de distribución de diferencias**
  (DDT). Una entrada alta da una diferencia que se propaga con probabilidad alta; encadenando rondas se obtiene una **característica** cuya probabilidad es el producto, y con suficientes pares de textos
  elegidos se recuperan bits de la última subclave. El máximo de la DDT (sin la fila 0) es la **uniformidad diferencial**: para una caja de 4 bits el mínimo posible es 4.
- **Lineal** (Matsui, 1993): para cada máscara de entrada a y de salida b, cuántas x cumplen a·x = b·S(x) (producto escalar de bits). Esa cuenta menos la mitad es la **tabla de aproximaciones
  lineales** (LAT); su valor dividido entre el número de entradas es el **sesgo**. Por el lema de apilamiento de Matsui, el sesgo de una aproximación de varias rondas es 2ⁿ⁻¹ por el producto de los
  sesgos, y hacen falta del orden de 1/sesgo² textos conocidos.

Diseñar contra esto es elegir cajas S con DDT y LAT pequeñas y capas lineales que obliguen a cualquier característica a pasar por muchas cajas activas (la estrategia de trayectoria ancha de AES). La caja
S de AES tiene uniformidad diferencial 4 sobre 256 entradas; las de 4 bits de PRESENT o GIFT, el óptimo para su tamaño.

## 3. Ataques genéricos

- **Cumpleaños**: entre n valores aleatorios de un conjunto de N, la probabilidad de colisión es ≈ 1 − e^(−n²/2N); el número esperado de intentos hasta la primera es ≈ √(πN/2). Un resumen de b bits da
  solo b/2 bits de resistencia a colisiones: SHA-256 da 128.
- **Encuentro a medio camino**: si c = E_k₂(E_k₁(m)), se cifra m con todas las k₁ y se descifra c con todas las k₂, buscando coincidencias en una tabla; el coste es la **suma**, no el producto. Por eso
  el doble DES no aporta casi nada y se usa el triple DES (y por eso desapareció en favor de AES).
- **Búsqueda exhaustiva y compromisos tiempo-memoria** (tablas de Hellman, *rainbow tables*): la sal en las contraseñas las anula.

## 4. RSA mal usado

Boneh (1999) concluye que en veinte años no apareció ningún ataque devastador contra RSA, solo ataques contra **usos incorrectos**:

- **Exponente pequeño sin relleno**: con e = 3 y un mensaje corto, m³ < n y el "cifrado" es una potencia entera; basta una raíz cúbica. Si el mismo mensaje va a tres destinatarios, el teorema chino del
  resto da m³ (ataque de Håstad). El relleno aleatorio OAEP lo impide.
- **Primos compartidos**: generadores con poca entropía al arrancar producen claves que comparten un primo; el MCD de dos módulos los factoriza a ambos. Heninger et al. (2012) factorizaron así las claves
  del 0,5 % de los servidores TLS de Internet.
- **Primos cercanos**: si |p − q| es pequeño, n = a² − b² con a = (p + q)/2 cercano a √n, y el método de **Fermat** (probar a = ⌈√n⌉, ⌈√n⌉ + 1, … hasta que a² − n sea un cuadrado) factoriza en pocas pruebas.
- **Exponente privado pequeño**: si d < n^(1/4)/3, la fracción e/n tiene a k/d entre sus **convergentes** (ataque de **Wiener**, 1990): se prueba cada convergente hasta que (ed − 1)/k da un φ(n)
  coherente con n. Boneh y Durfee lo extendieron con retículos hasta d < n^0,292.
- **Firmas y descifrado sin relleno** (maleabilidad: firmar el producto a partir de firmas de los factores), **oráculos de relleno** (Bleichenbacher, 1998, contra PKCS#1 v1.5) y canales laterales del
  exponente.

## 5. Logaritmo discreto

La seguridad de Diffie-Hellman y DSA depende de que calcular x a partir de gˣ mód p sea difícil:

- **Paso de bebé y paso de gigante** (Shanks): tabla de gʲ para j < m = ⌈√N⌉ y búsqueda de h·g^(−im); coste O(√N) en tiempo y memoria. **Rho de Pollard**: el mismo tiempo con memoria constante.
- **Pohlig-Hellman**: si el orden del grupo N = Π qᵢ^eᵢ es **liso**, el problema se reduce a uno en cada subgrupo de orden qᵢ (resolviendo los dígitos en base qᵢ uno a uno) y se recompone con el teorema
  chino del resto: coste dominado por √(mayor qᵢ). Por eso se usan grupos de orden primo grande (primos seguros p = 2q + 1, o curvas de orden primo).
- **Cálculo de índices** y la criba de cuerpos de números: subexponenciales en ℤ*ₚ (por eso hacen falta primos de 2048 bits o más), pero no se conocen para curvas elípticas genéricas (por eso bastan
  256 bits).

## 6. Fallos de construcción

- **Nonce repetido en (EC)DSA**: s = k⁻¹(z + r·d) mód n. Con dos firmas con el mismo k (mismo r): k = (z₁ − z₂)/(s₁ − s₂) y d = (s₁·k − z₁)/r. Le pasó a Sony con la PlayStation 3 (2010) y a carteras
  de Bitcoin en Android (2013) por un generador defectuoso. Con nonces solo **sesgados** unos bits, los retículos recuperan la clave con más firmas. Remedios: nonces deterministas (RFC 6979) o Ed25519.
- **Extensión de longitud**: SHA-256 (Merkle-Damgård) devuelve su estado interno completo; conocido H(secreto ‖ m), cualquiera puede calcular H(secreto ‖ m ‖ relleno ‖ m′) sin el secreto, continuando
  desde ese estado. Solo necesita saber la longitud del secreto para reconstruir el **relleno**: un byte 0x80, ceros hasta que la longitud sea 56 mód 64, y la longitud del mensaje en bits en 8 bytes. Por
  eso se usa **HMAC** (o SHA-3, o SHA-512/256, que no exponen su estado).

## 7. Comprobar con un programa

Una DDT de otra caja S, Fermat con números pequeños, paso de bebé y paso de gigante, y la recuperación de la clave de un DSA de juguete con nonce repetido (datos distintos de los ejercicios):

```python
# DDT de una caja S de 3 bits, Fermat, paso de bebé y paso de gigante, y DSA de juguete con nonce repetido
import math

S3 = [3, 6, 0, 5, 7, 1, 2, 4]
ddt = [[sum(1 for x in range(8) if S3[x] ^ S3[x ^ a] == b) for b in range(8)] for a in range(8)]
print("uniformidad diferencial de S3:", max(max(f) for f in ddt[1:]))

def fermat(n):
    a = math.isqrt(n)
    a += a * a < n
    pruebas = 1
    while math.isqrt(a * a - n) ** 2 != a * a - n:
        a, pruebas = a + 1, pruebas + 1
    b = math.isqrt(a * a - n)
    return a - b, a + b, pruebas
print("Fermat 8051 →", fermat(8051), " 1000009·1000039 →", fermat(1000009 * 1000039))

def bsgs(g, h, p):
    m = math.isqrt(p - 1) + 1
    tabla = {}
    x = 1
    for j in range(m):
        tabla.setdefault(x, j)
        x = x * g % p
    paso = pow(g, -m, p)
    y = h
    for i in range(m):
        if y in tabla:
            return i * m + tabla[y]
        y = y * paso % p
print("3^x ≡ 13 (mód 17):", bsgs(3, 13, 17))

# DSA de juguete: p = 607, q = 101 (q divide a p − 1), g de orden q
p, q = 607, 101
g = pow(2, (p - 1) // q, p)
d, k = 57, 33                                   # clave privada y nonce (repetido, el error)
def firma(z):
    r = pow(g, k, p) % q
    return r, pow(k, -1, q) * (z + r * d) % q
(r, s1), (_, s2) = firma(10), firma(77)
k_rec = (10 - 77) * pow(s1 - s2, -1, q) % q
d_rec = (s1 * k_rec - 10) * pow(r, -1, q) % q
print("nonce recuperado:", k_rec, " clave recuperada:", d_rec)
```

Salida:

```
uniformidad diferencial de S3: 4
Fermat 8051 → (83, 97, 1)  1000009·1000039 → (1000009, 1000039, 1)
3^x ≡ 13 (mód 17): 4
nonce recuperado: 33  clave recuperada: 57
```

## 8. Errores típicos

- Confiar en el tamaño del espacio de claves de un cifrado que deja ver la estructura del texto.
- Usar RSA "de libro" (sin relleno), exponentes privados pequeños para acelerar, o generar claves sin entropía.
- Grupos de Diffie-Hellman con p − 1 liso o pequeños; reutilizar parámetros sin validar.
- Nonces de (EC)DSA repetidos o sesgados; MAC como H(secreto ‖ mensaje).
- Pensar que un resumen de b bits resiste colisiones con 2ᵇ intentos: son 2^(b/2).

## 9. Resumen

- IC y χ² rompen sustituciones y Vigenère; la estructura que se filtra es la debilidad.
- DDT y LAT miden la calidad de una caja S; uniformidad diferencial, sesgo y lema de apilamiento.
- Cumpleaños (√N) y encuentro a medio camino (suma, no producto).
- RSA: e pequeño sin relleno, MCD de módulos, Fermat, Wiener; OAEP y buena entropía lo evitan.
- Logaritmo discreto: paso de bebé y gigante, rho, Pohlig-Hellman (por eso órdenes primos grandes).
- Nonce repetido en (EC)DSA y extensión de longitud: HMAC, RFC 6979, Ed25519.

## Repaso: lo que debe quedarte dentro de un mes

1. Si el texto cifrado conserva la estadística del claro, está roto.
2. Una caja S se juzga por su DDT y su LAT.
3. Colisiones a 2^(b/2); doble cifrado no duplica la seguridad.
4. Casi todos los ataques a RSA son contra malos usos.
5. Un nonce repetido entrega la clave privada.

## Siguiente

`sec-formal-protocolos` (demostrar que un protocolo resiste estos y otros ataques) y [[cua-computacion-cuantica]] (Shor: por qué RSA y las curvas caerían).
