---
id: sec-criptografia
title: "Criptografía: secreto perfecto, cifrado simétrico, integridad, RSA, logaritmo discreto y curvas elípticas"
area: ciberseguridad
trunk_level: 12
prerequisites: [mat-estructuras-algebraicas, mat-probabilidad]
academic_sources:
  - "Katz, J.; Lindell, Y. Introduction to Modern Cryptography, 3ª ed. Chapman & Hall/CRC, 2020."
  - "Boneh, D.; Shoup, V. A Graduate Course in Applied Cryptography, versión 0.6, 2023 (toc.cryptobook.us)."
  - "Menezes, A. J.; van Oorschot, P. C.; Vanstone, S. A. Handbook of Applied Cryptography. CRC Press."
  - "Shannon, C. E. Communication Theory of Secrecy Systems. Bell System Technical Journal, 28(4), 656-715, 1949."
  - "Washington, L. C. Elliptic Curves: Number Theory and Cryptography, 2ª ed. Chapman & Hall/CRC, 2008."
  - "Nystrom, M. RFC 4231: Identifiers and Test Vectors for HMAC-SHA-224, HMAC-SHA-256, HMAC-SHA-384, and HMAC-SHA-512. IETF, 2005."
ctf_flag: "sha256:fc7c17ccadb67f3d9f5ae8001968dc9c1bebc17724f73db9d105c6a2e89299da"
hints:
  - "(a) Si p y q están muy cerca, n es casi un cuadrado: escribe n = a² − b² con a cerca de √n. (b) El orden del grupo, p − 1, factoriza en primos pequeños: resuelve el logaritmo en cada subgrupo de orden primo y recombina. (c) Cuenta los puntos con el símbolo de Legendre recorriendo todas las x; después multiplica por doble y suma."
  - "(a) math.isqrt de Python (enteros de precisión arbitraria; no uses float). Convierte el entero descifrado a bytes con int.to_bytes. (b) Factoriza p − 1 por división por tentativa y aplica paso de bebé-paso de gigante en cada subgrupo con el teorema chino del resto (sympy.ntheory.residue_ntheory.discrete_log sirve para contrastar). (c) pow(v, (p−1)//2, p) da el símbolo de Legendre; SageMath tiene EllipticCurve(GF(p), [a, b]).order() para contrastar."
  - "Katz & Lindell, capítulo 2 (secreto perfecto), capítulo sobre algoritmos para el logaritmo discreto (Pohlig-Hellman y paso de bebé-paso de gigante) y capítulos sobre RSA. Handbook of Applied Cryptography, capítulo 3 (factorización y logaritmos discretos). Washington, capítulo 2 (ley de grupo) y capítulo 4 (teorema de Hasse). Documentación: docs.python.org/3/library/functions.html#pow."
exercises:
  - id: cifrado-cesar
    tier: 1
    prompt: |
      El criptograma `KHOOR` se obtuvo con un cifrado de César (desplazar cada letra $k$ posiciones). Descífralo; prueba los 26 desplazamientos si hace falta. Respuesta: la palabra en minúsculas.
    answers: ["sha256:2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"]
  - id: cumpleanos
    tier: 1
    prompt: |
      Se calculan valores al azar de un hash de 32 bits ($N = 2^{32}$ salidas equiprobables). ¿Cuál es el menor número $q$ de valores con el que la probabilidad de alguna colisión, $1 - \prod_{i=1}^{q-1}(1 - i/N)$, llega al $50\,\%$? Respuesta: un entero.
    answers: ["sha256:41e20b7d9413241e193d5f3da71766e5508cfdf387424451e8e8022380af2026"]
  - id: pequeno-teorema-de-fermat
    tier: 1
    prompt: |
      ¿Cuánto vale $7^{128} \bmod 13$? Usa el pequeño teorema de Fermat para reducir el exponente. Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: rsa-de-juguete
    tier: 1
    prompt: |
      RSA con $p = 61$, $q = 53$ y $e = 17$. ¿Cuál es el exponente privado $d$ y cuál es el cifrado de $m = 65$? Respuesta: `d;c`.
    answers: ["sha256:a055b3e5563343de271b88d62561780fd129f08d336a8065459f35f38d8af5b6"]
  - id: diffie-hellman
    tier: 1
    prompt: |
      Diffie-Hellman en $\mathbb Z_{23}^*$ con $g = 5$: Alicia elige $a = 6$ y Bernardo $b = 15$. ¿Qué valores públicos $A$ y $B$ se envían y qué secreto comparten? Respuesta: `A;B;K`.
    answers: ["sha256:ef6197baad408ba2ee55b791d1bdc1864df8fe79a8baede4538239516e96bbd6"]
  - id: libreta-reutilizada
    tier: 2
    prompt: |
      Dos mensajes de 14 bytes se cifraron con la misma libreta de un solo uso. Los criptogramas, en hexadecimal, son `4d01a085b134f8bfcd387ce04737` y `5e10b59db630c3bffe1e7cad0477`, y se sabe que el primer mensaje es `ataque_al_alba`. ¿Cuál es el segundo? Respuesta: el texto.
    answers: ["sha256:72bd006f6ac20a5d5308413f099e4ccd1802cf89973901cfacf04c0b07993bbc"]
  - id: factorizacion-de-fermat
    tier: 2
    prompt: |
      Un módulo RSA $n = 1000036000099$ se generó con dos primos demasiado cercanos. Factorízalo por el método de Fermat. Respuesta: el factor menor.
    answers: ["sha256:68d420488470fb5305cad01a6fc7238cb5737005298daabb8bb4a3ac1c994178"]
  - id: descifrado-con-crt
    tier: 2
    prompt: |
      Con la clave RSA de $p = 61$, $q = 53$, $e = 17$, descifra $c = 855$ usando el teorema chino del resto ($d_p = d \bmod (p-1)$, $d_q = d \bmod (q-1)$, recombinación de Garner). Respuesta: un entero.
    answers: ["sha256:a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"]
  - id: paso-de-bebe-paso-de-gigante
    tier: 2
    prompt: |
      En $\mathbb Z_{1019}^*$, con generador $g = 2$, halla $x$ tal que $2^x \equiv 550 \pmod{1019}$. Respuesta: un entero entre $0$ y $1017$.
    answers: ["sha256:eaf89db7108470dc3f6b23ea90618264b3e8f8b6145371667c4055e9c5ce9f52"]
  - id: pohlig-hellman
    tier: 2
    prompt: |
      El primo $p = 65\,521$ tiene $p - 1 = 2^4\cdot3^2\cdot5\cdot7\cdot13$, muy liso. Halla el menor generador $g$ de $\mathbb Z_p^*$ y el $x$ con $g^x \equiv 33572 \pmod p$ (Pohlig-Hellman). Respuesta: `g;x`.
    answers: ["sha256:d867f634cb26660d00429f8b852307a91e8009a6620339725f74cce5f0b4bb4e"]
  - id: hmac
    tier: 2
    prompt: |
      Calcula $\mathrm{HMAC}$-SHA256 con clave `key` del mensaje `The quick brown fox jumps over the lazy dog`, construyéndolo a mano con `ipad`/`opad` (bloque de 64 bytes) y contrastándolo con una biblioteca. Respuesta: las 16 primeras cifras hexadecimales.
    answers: ["sha256:15f294bb5a85a43b3d92c880eba50ccc8cc2a9ed246858be7af71e415576b102"]
  - id: doblar-un-punto
    tier: 2
    prompt: |
      En la curva $y^2 = x^3 + 2x + 3$ sobre $\mathbb F_{97}$, calcula $2P$ para $P = (3, 6)$. Respuesta: `x;y`.
    answers: ["sha256:f1d006de8c8f8c48c56f89027da23d159472f5b65d3e2b4b5bbff9f867ede491"]
  - id: contar-puntos
    tier: 3
    prompt: |
      ¿Cuántos puntos tiene la curva $y^2 = x^3 + x + 1$ sobre $\mathbb F_{23}$, incluido el punto del infinito? Respuesta: un entero.
    answers: ["sha256:59e19706d51d39f66711c2653cd7eb1291c94d9b55eb14bda74ce4dc636d015a"]
  - id: ecdh
    tier: 3
    prompt: |
      ECDH en $y^2 = x^3 + 2x + 3$ sobre $\mathbb F_{97}$ con $G = (0, 10)$, de orden $50$: Alicia usa el secreto $13$ y Bernardo el $17$. ¿Cuál es la coordenada $x$ del punto compartido? Respuesta: un entero.
    answers: ["sha256:31489056e0916d59fe3add79e63f095af3ffb81604691f21cad442a85c7be617"]
  - id: nonce-repetido-en-ctr
    tier: 3
    prompt: |
      Dos mensajes de igual longitud se cifraron con AES-128 en modo CTR con la misma clave y el **mismo nonce**: `f48acb0ea98c0de36c887f7b70cf7b8ba4ef4325110a1afe` y `f48acb0ea98c0de36c887f7379c67b8ba4ef4325110e02fe` (hexadecimal). El primero es `transferir 100 EUR a Ana`. ¿Cuál es el segundo? Respuesta: el texto.
    answers: ["sha256:d977bde5edb2c35a81a39105ecb3e8934d17a40bc19bf6e55338cb6e5137d276"]
  - id: generadores
    tier: 3
    prompt: |
      ¿Cuántos generadores tiene el grupo cíclico $\mathbb Z_{65521}^*$? Respuesta: un entero.
    answers: ["sha256:619b9764b0f5da3d20548bf11d493fb78b5a6790c625aae87e95f3dd1a15a289"]
---

# Criptografía: secreto perfecto, cifrado simétrico, integridad, RSA, logaritmo discreto y curvas elípticas

La criptografía moderna no consiste en esconder algoritmos, sino en **reducir la seguridad de un esquema a la dificultad de un problema matemático bien
definido**. Este nodo construye esa idea desde el secreto perfecto de Shannon hasta las curvas elípticas y muestra, en los ejercicios y en el reto, cómo un
mal uso o una mala elección de parámetros rompe un esquema matemáticamente correcto. Es el fundamento de TLS, SSH, las firmas de software, las contraseñas
bien guardadas y la criptografía poscuántica que motiva [[cua-computacion-cuantica]].

**Principio de Kerckhoffs.** Un sistema debe seguir siendo seguro aunque el adversario conozca todo salvo la clave.

## Objetivos

Al terminar sabrás:

1. Definir el secreto perfecto, demostrar que la libreta de un solo uso lo tiene y por qué no se puede reutilizar su clave.
2. Explicar la seguridad computacional (IND-CPA), por qué el cifrado debe ser aleatorizado y el modo CTR con sus riesgos.
3. Usar funciones hash, la cota del cumpleaños y HMAC, y combinar cifrado e integridad correctamente.
4. Generar claves RSA, cifrar, descifrar con el teorema chino del resto y factorizar módulos mal generados (Fermat).
5. Calcular logaritmos discretos con paso de bebé-paso de gigante y Pohlig-Hellman, y aplicar Diffie-Hellman.
6. Operar en curvas elípticas (suma, doble, multiplicación escalar, ECDH) y contar sus puntos.

## Qué debes dominar antes

[[mat-estructuras-algebraicas]] (grupos cíclicos, cuerpos finitos, $\mathbb Z_n^*$), [[mat-matematica-discreta]] (aritmética modular, algoritmo de Euclides,
teorema chino del resto) y [[mat-probabilidad]] (probabilidad condicionada, Bayes).

> [!question] Test de entrada
> 1. ¿Cuál es el inverso de $3$ módulo $7$?
> 2. ¿Cuánto vale $2^{10} \bmod 11$?
> 3. ¿Qué orden tiene $\mathbb Z_{13}^*$?
>
> Respuestas: $5$ ($3\cdot5 = 15 \equiv 1$); $1$ (pequeño teorema de Fermat); $12$.

## 1. Para qué sirve

- **Comunicaciones seguras**: TLS (web), SSH, VPN y mensajería cifrada combinan intercambio de claves (Diffie-Hellman, curvas), cifrado autenticado y firmas.
- **Integridad y autenticidad**: firmas de software y de actualizaciones, certificados, MAC en protocolos, sumas de verificación seguras.
- **Almacenamiento**: cifrado de discos, gestión de claves, contraseñas guardadas con funciones de derivación lentas.
- **Auditoría**: la mayoría de los fallos reales no rompen la matemática, sino su uso: nonces repetidos, claves reutilizadas, parámetros débiles, comparaciones
  no constantes. Saber reconocerlos es lo que se audita ([[sec-fundamentos]]).

## 2. Secreto perfecto

Un esquema de cifrado es una terna $(\mathsf{Gen}, \mathsf{Enc}, \mathsf{Dec})$ con $\mathsf{Dec}_k(\mathsf{Enc}_k(m)) = m$.

**Definición (Shannon, 1949).** El esquema tiene **secreto perfecto** si, para toda distribución sobre los mensajes, todo $m$ y todo $c$ con $\Pr[C = c] > 0$,
$\Pr[M = m \mid C = c] = \Pr[M = m]$: ver el criptograma no cambia nada de lo que se sabe del mensaje.

**Libreta de un solo uso.** Mensajes, claves y criptogramas en $\{0,1\}^\ell$, clave uniforme y $\mathsf{Enc}_k(m) = m \oplus k$.

**Teorema.** La libreta de un solo uso tiene secreto perfecto.

*Demostración.* Para cualesquiera $m, c$, $\Pr[C = c \mid M = m] = \Pr[K = m \oplus c] = 2^{-\ell}$, que no depende de $m$. Por tanto $\Pr[C = c] = 2^{-\ell}$ y, por Bayes,
$\Pr[M = m \mid C = c] = \Pr[M = m]$. $\blacksquare$

**Teorema (cota de Shannon).** Si un esquema tiene secreto perfecto, entonces $\lvert\mathcal K\rvert \ge \lvert\mathcal M\rvert$.

*Demostración.* Fijado un $c$ posible, el conjunto $\{\mathsf{Dec}_k(c)\}$ tiene a lo sumo $\lvert\mathcal K\rvert$ elementos. Si $\lvert\mathcal K\rvert < \lvert\mathcal M\rvert$ hay un $m$ fuera de él, y con la
distribución uniforme $\Pr[M = m \mid C = c] = 0 \ne \Pr[M = m]$. $\blacksquare$

La clave tiene que ser tan larga como todo lo que se cifre con ella y **no puede reutilizarse**: $c_1 \oplus c_2 = m_1 \oplus m_2$, y conocer (o adivinar) un mensaje
revela el otro. El **cifrado de César** (desplazar letras) es el extremo opuesto: 26 claves, que se prueban todas.

## 3. Seguridad computacional y cifrado simétrico

Se pasa a adversarios **eficientes** (tiempo polinómico en un parámetro de seguridad) y se admite una probabilidad de éxito **despreciable**.

**Indistinguibilidad (IND-CPA).** El adversario elige $m_0, m_1$ de igual longitud, recibe $\mathsf{Enc}_k(m_b)$ con $b$ aleatorio y puede pedir cifrados de su
elección. El esquema es seguro si ningún adversario eficiente acierta $b$ con probabilidad mayor que $\frac12$ más algo despreciable. Consecuencia: un esquema
IND-CPA **no puede ser determinista**; por eso todo modo serio usa un vector de inicialización o un *nonce*.

Un cifrador de bloque como **AES** se modela como una permutación pseudoaleatoria. En **modo contador (CTR)**, $c_i = m_i \oplus F_k(\text{nonce}\,\|\,i)$: una libreta cuya
clave larga genera AES. Es IND-CPA si el par (clave, nonce) **no se repite nunca**; si se repite, vuelve el ataque $c_1 \oplus c_2 = m_1 \oplus m_2$. Además, CTR es
**maleable**: invertir un bit del criptograma invierte el mismo bit del mensaje. Por eso se usan modos autenticados (AES-GCM, ChaCha20-Poly1305).

## 4. Integridad: funciones hash y MAC

Una **función hash** $H : \{0,1\}^* \to \{0,1\}^\ell$ es **resistente a colisiones** si es difícil hallar $x \ne x'$ con $H(x) = H(x')$.

**Teorema (paradoja del cumpleaños).** Con $q$ valores al azar en un recorrido de tamaño $N$, $\Pr[\text{sin colisión}] = \prod_{i=1}^{q-1}(1 - i/N) \le e^{-q(q-1)/2N}$; con
$q \approx \sqrt{2N\ln2} \approx 1{,}18\sqrt N$ la probabilidad de colisión ya supera $\frac12$.

*Demostración.* Cada factor cuenta que el valor $i + 1$ evite los $i$ anteriores, y $1 - x \le e^{-x}$. $\blacksquare$

Una salida de $\ell$ bits ofrece como mucho $\ell/2$ bits de seguridad frente a colisiones: por eso SHA-256 y no SHA-128. Un **código de autenticación de
mensajes** (MAC) protege la integridad con una clave. $H(k\,\|\,m)$ es inseguro con hashes de tipo Merkle-Damgård (ataque de extensión de longitud); la
construcción **HMAC** lo evita:

$$
\mathrm{HMAC}_k(m) = H\bigl((k \oplus \mathrm{opad})\,\|\,H((k \oplus \mathrm{ipad})\,\|\,m)\bigr),
$$

con la clave rellenada al tamaño de bloque (64 bytes en SHA-256), $\mathrm{ipad} = $ `0x36` y $\mathrm{opad} = $ `0x5c` repetidos. Los valores de prueba oficiales están
en el RFC 4231. La verificación de una etiqueta debe compararse **en tiempo constante**. La combinación correcta de confidencialidad e integridad es
*cifrar y después autenticar*, o un modo autenticado.

## 5. RSA

**Generación.** Primos $p \ne q$, $n = pq$, $\varphi(n) = (p - 1)(q - 1)$, un $e$ con $\gcd(e, \varphi(n)) = 1$ y $d \equiv e^{-1} \pmod{\varphi(n)}$ (algoritmo de Euclides
extendido). Clave pública $(n, e)$, privada $d$; $c = m^e \bmod n$ y $m = c^d \bmod n$.

**Teorema (corrección).** Para todo $m \in \mathbb Z_n$, $(m^e)^d \equiv m \pmod n$.

*Demostración.* $ed = 1 + t\varphi(n)$. Si $p \nmid m$, por el pequeño teorema de Fermat $m^{ed} = m\,(m^{p-1})^{t(q-1)} \equiv m \pmod p$; si $p \mid m$, ambos lados son $0$
módulo $p$. Igual módulo $q$, y por el teorema chino del resto la congruencia vale módulo $n$. $\blacksquare$

> [!example] Ejemplo resuelto 1: RSA de bolsillo
> $p = 11$, $q = 13$: $n = 143$, $\varphi = 120$. Con $e = 7$, Euclides extendido da $d = 103$ ($7\cdot103 = 721 = 6\cdot120 + 1$). Cifrar $m = 9$: $9^7 \bmod 143 = 48$.
> Descifrar con el teorema chino del resto: $d_p = 103 \bmod 10 = 3$ y $48^3 \equiv 4^3 = 64 \equiv 9 \pmod{11}$; $d_q = 103 \bmod 12 = 7$ y $48^7 \equiv 9^7 \equiv 9 \pmod{13}$;
> el único $m < 143$ con $m \equiv 9 \pmod{11}$ y $m \equiv 9 \pmod{13}$ es $9$. Trabajar con $p$ y $q$ por separado es unas cuatro veces más rápido.

Calcular $d$ a partir de $(n, e)$ equivale a factorizar $n$. RSA «de libro» es determinista y maleable ($c_1c_2$ cifra $m_1m_2$): en la práctica se usa con relleno
aleatorio (OAEP) para cifrar y PSS para firmar.

**Factorización de Fermat.** Si $n = pq$ con $p < q$, sean $a = \frac{p + q}{2}$ y $b = \frac{q - p}{2}$: $n = a^2 - b^2$. Se prueba $a = \lceil\sqrt n\,\rceil, \lceil\sqrt n\,\rceil + 1, \dots$ hasta que
$a^2 - n$ sea un cuadrado. Como $a - \sqrt n = \frac{(\sqrt q - \sqrt p)^2}{2}$, el número de pasos es aproximadamente $\frac{(q - p)^2}{8\sqrt n}$: si los primos se generan juntos
(por ejemplo, $q$ el siguiente primo tras $p$), la factorización es inmediata. Valor de control: $5959 = 59\cdot101$ sale con $a = 80$, $b = 21$, tras probar $78$ y $79$.

## 6. Logaritmo discreto y Diffie-Hellman

En un grupo cíclico $G = \langle g\rangle$ de orden $N$, el **logaritmo discreto** de $h$ es el $x \in \{0, \dots, N - 1\}$ con $g^x = h$.

**Diffie-Hellman.** Alicia envía $A = g^a$, Bernardo envía $B = g^b$ y ambos calculan $g^{ab}$. Un espía que ve $A$ y $B$ debe resolver el problema de Diffie-Hellman.
Sin autenticación, un intermediario puede hacer un intercambio con cada uno: por eso se firman los valores públicos (o se usan certificados).

**Paso de bebé-paso de gigante (Shanks).** Con $m = \lceil\sqrt N\,\rceil$ se escribe $x = im + j$; se tabulan los $g^j$ ($0 \le j < m$) y se recorren los $h\,(g^{-m})^i$ hasta encontrar
uno en la tabla: $O(\sqrt N)$ en tiempo y en memoria.

**Pohlig-Hellman.** Si $N = \prod q_i^{e_i}$, para cada $i$ el elemento $g_i = g^{N/q_i}$ tiene orden $q_i$ y $h^{N/q_i} = g_i^{\,x}$: se obtiene $x \bmod q_i$ con un logaritmo en un grupo
pequeño (y los dígitos de $x$ en base $q_i$ uno a uno si $e_i > 1$), y el teorema chino del resto reconstruye $x \bmod N$. El coste es $O(\sum e_i(\log N + \sqrt{q_i}))$: **la
seguridad la fija el mayor factor primo del orden**, no su tamaño. Por eso se usan primos seguros $p = 2q + 1$ y se trabaja en el subgrupo de orden $q$.

> [!example] Ejemplo resuelto 2: Pohlig-Hellman a mano (con menos ayuda)
> En $\mathbb Z_{31}^*$ ($N = 30 = 2\cdot3\cdot5$) con $g = 3$ y $h = 6$: $h^{15} = 6^{15} \equiv 30 = -1 \equiv g^{15}$, luego $x \equiv 1 \pmod 2$; $h^{10} \equiv 25 \equiv g^{10}$ (y $g^{20} \equiv 5$),
> luego $x \equiv 1 \pmod 3$. Calcula tú $h^6$ (sale $1$, así que $x \equiv 0 \pmod 5$) y recombina con el teorema chino del resto: $x = 25$ ($3^{25} \equiv 6 \pmod{31}$).

El número de generadores de $\mathbb Z_p^*$ es $\varphi(p - 1)$; $g$ es generador si y solo si $g^{(p-1)/q} \ne 1$ para todo primo $q \mid p - 1$.

## 7. Curvas elípticas

Sobre $\mathbb F_p$ con $p > 3$, una **curva elíptica** es el conjunto de soluciones de $y^2 = x^3 + ax + b$ con $4a^3 + 27b^2 \ne 0$, más un punto del infinito $\mathcal O$.

**Ley de grupo.** Tres puntos alineados suman $\mathcal O$. Para $P = (x_1, y_1)$ y $Q = (x_2, y_2)$ con $P \ne -Q$:

$$
\lambda = \begin{cases} \dfrac{y_2 - y_1}{x_2 - x_1} & P \ne Q \\[2mm] \dfrac{3x_1^2 + a}{2y_1} & P = Q \end{cases}, \qquad x_3 = \lambda^2 - x_1 - x_2, \qquad y_3 = \lambda(x_1 - x_3) - y_1 ,
$$

con $-P = (x_1, -y_1)$ y $\mathcal O$ como neutro. Es un grupo abeliano (Washington, capítulo 2). En la práctica se usan **coordenadas proyectivas o jacobianas** para no
invertir en cada paso.

**Multiplicación escalar** por doble y suma: $kP$ en $O(\log k)$ operaciones. Recuperar $k$ a partir de $P$ y $kP$ es el **logaritmo discreto elíptico**; para curvas bien
elegidas no se conoce nada mejor que $O(\sqrt N)$: 256 bits de curva dan unos 128 de seguridad, frente a los 3072 bits que necesita RSA. **ECDH** es Diffie-Hellman con
$aG$, $bG$ y $abG$; el generador debe tener **orden primo grande**: si cae en un subgrupo pequeño, el secreto compartido toma pocos valores.

**Contar puntos.** Para cada $x$ hay $1 + \bigl(\frac{f(x)}{p}\bigr)$ valores de $y$, con el símbolo de Legendre $\bigl(\frac vp\bigr) \equiv v^{(p-1)/2}$ (criterio de Euler):

$$
\#E(\mathbb F_p) = p + 1 + \sum_{x\in\mathbb F_p}\left(\frac{x^3 + ax + b}{p}\right) .
$$

**Teorema (Hasse).** $\bigl\lvert\#E(\mathbb F_p) - (p + 1)\bigr\rvert \le 2\sqrt p$.

Contar así cuesta $O(p)$; las curvas criptográficas se cuentan con el algoritmo de Schoof y sus mejoras. Si $\#E$ no tiene un factor primo grande, Pohlig-Hellman
rompe la curva. Valor de control: $y^2 = x^3 + 2x + 3$ sobre $\mathbb F_{97}$ tiene $100$ puntos.

## 8. Comprobar con un programa

Cada técnica tiene un segundo camino: Fermat frente a división por tentativa, RSA con y sin teorema chino del resto, paso de bebé-paso de gigante frente a
fuerza bruta, Pohlig-Hellman frente a paso de bebé-paso de gigante, Legendre frente a contar pares $(x, y)$, y HMAC de la biblioteca frente a su construcción.

```python
import hashlib
import hmac
from math import isqrt

def fermat(n):
    a = isqrt(n)
    if a * a < n:
        a += 1
    while True:
        b = isqrt(a * a - n)
        if b * b == a * a - n:
            return a - b, a + b
        a += 1

# 1. Fermat: control 5959 = 59·101 y primos cercanos.
assert fermat(5959) == (59, 101)
p, q = 1_000_003, 1_000_033
assert fermat(p * q) == (p, q)

# 2. RSA de bolsillo (ejemplo resuelto 1): directo frente a teorema chino del resto.
p, q, e = 11, 13, 7
n, d = p * q, pow(7, -1, (p - 1) * (q - 1))
c = pow(9, e, n)
mp, mq = pow(c, d % (p - 1), p), pow(c, d % (q - 1), q)
m = mq + q * ((pow(q, -1, p) * (mp - mq)) % p)
assert (d, c, m, pow(c, d, n)) == (103, 48, 9, 9)

# 3. Logaritmo discreto: paso de bebé-paso de gigante frente a Pohlig-Hellman (ejemplo resuelto 2).
def bsgs(g, h, p, N):
    m = isqrt(N) + 1
    tabla = {pow(g, j, p): j for j in range(m)}
    paso, y = pow(g, -m, p), h
    for i in range(m):
        if y in tabla:
            return i * m + tabla[y]
        y = y * paso % p
    return None

def pohlig_hellman(g, h, p, factores):          # factores: primos distintos de p − 1 (orden libre de cuadrados)
    N, x, M = p - 1, 0, 1
    for qi in factores:
        xi = bsgs(pow(g, N // qi, p), pow(h, N // qi, p), p, qi)
        x += M * ((xi - x) * pow(M, -1, qi) % qi)
        M *= qi
    return x % N

assert bsgs(3, 6, 31, 30) == pohlig_hellman(3, 6, 31, [2, 3, 5]) == 25

# 4. Curva y² = x³ + 2x + 3 sobre F_97: Legendre frente a pares, y el generador (0, 10) de orden 50.
P, A, Bc = 97, 2, 3
legendre = P + 1 + sum((1 if pow(f, (P - 1) // 2, P) == 1 else -1) for x in range(P) if (f := (x**3 + A * x + Bc) % P))
pares = 1 + sum(1 for x in range(P) for y in range(P) if (y * y - x**3 - A * x - Bc) % P == 0)
assert legendre == pares == 100

def suma(Pt, Qt):
    if Pt is None: return Qt
    if Qt is None: return Pt
    (x1, y1), (x2, y2) = Pt, Qt
    if x1 == x2 and (y1 + y2) % P == 0:
        return None
    l = (3 * x1 * x1 + A) * pow(2 * y1, -1, P) if Pt == Qt else (y2 - y1) * pow(x2 - x1, -1, P)
    x3 = (l * l - x1 - x2) % P
    return x3, (l * (x1 - x3) - y1) % P

G, R, orden = (0, 10), (0, 10), 1
while R is not None:
    R, orden = suma(R, G), orden + 1
assert orden == 50

# 5. HMAC: biblioteca frente a construcción con ipad/opad.
k = b"key".ljust(64, b"\0")
msg = b"The quick brown fox jumps over the lazy dog"
interno = hashlib.sha256(bytes(b ^ 0x36 for b in k) + msg).digest()
manual = hashlib.sha256(bytes(b ^ 0x5C for b in k) + interno).hexdigest()
assert manual == hmac.new(b"key", msg, hashlib.sha256).hexdigest()
print("HMAC-SHA256:", manual[:16], "...")
```

## 9. Errores típicos

- Reutilizar la clave de una libreta o el par (clave, nonce) en CTR o GCM.
- Cifrar sin autenticar, o autenticar con $H(k\,\|\,m)$ en vez de HMAC; comparar etiquetas con `==` (no constante).
- Usar RSA «de libro» sin relleno, o generar primos cercanos o con poca entropía.
- Trabajar en un grupo cuyo orden solo tiene factores pequeños, o usar un generador de orden pequeño.
- Convertir enteros grandes a `float` (`math.sqrt`) en lugar de usar `isqrt`.
- Inventar un algoritmo propio: la seguridad viene de la reducción a un problema estudiado, no del secreto del diseño.

## 10. Resumen

- Secreto perfecto: libreta de un solo uso; $\lvert\mathcal K\rvert \ge \lvert\mathcal M\rvert$; nunca reutilizar.
- IND-CPA exige aleatorización; CTR = libreta generada por AES; nonce único; maleabilidad; modos autenticados.
- Hash: cumpleaños $\approx 1{,}18\sqrt N$; $\ell/2$ bits frente a colisiones; HMAC; cifrar y autenticar.
- RSA: $ed \equiv 1 \pmod{\varphi(n)}$; CRT; relleno OAEP/PSS; Fermat rompe primos cercanos.
- Logaritmo discreto: Diffie-Hellman; BSGS $O(\sqrt N)$; Pohlig-Hellman: manda el mayor primo de $N$; $\varphi(p - 1)$ generadores.
- Curvas: ley de grupo, doble y suma, ECDH con generador de orden primo grande, Legendre y Hasse.

## Reto

Tres esquemas correctos con parámetros mal elegidos.

- **a.** Un mensaje en ASCII se ha cifrado con RSA de libro, $e = 65537$, y se sabe que los primos se generaron demasiado cerca el uno del otro. El mensaje es una
  cadena de letras minúsculas y guiones bajos, codificada como entero en orden *big-endian*.

  $n =$ `146232966347336698540221327285883070496271504490064185108847019682993895905545872311613535340881196343329494675293433156950563746192590611692411744794144872533920057475016185660193650665845218271304557830403485668162558328885254542304955591370528591620496911656050014833755627328967800291851440161269644100707`

  $c =$ `25292594424122019647947159668257993593405937348697270820881314193707383617546484948214776174971637600839215591089014832689535844483556642204258422101942645303344815393871598493658333835554273180667836841703419919279154634374301685663775599073274039246141574496655689765691277845068657261499090162949788151427`

- **b.** En $\mathbb Z_p^*$ con $p =$ `122303883120383834159` y generador $g = 11$, halla el $x \in \{0, \dots, p - 2\}$ tal que $g^x \equiv h \pmod p$, con $h =$
  `116284088245659503928`.
- **c.** Para la curva $E : y^2 = x^3 + 3x + 7$ sobre $\mathbb F_p$ con $p = 1048583$: el número de puntos $N = \#E(\mathbb F_p)$, incluido $\mathcal O$, y la coordenada $x$ del punto
  $kG$, con $G = (1, 225176)$ y $k = 2^{100} + 31337$.

Formato de la flag: `EXODUS{mensaje-x-N-xkG}`, con los tres números en decimal. Por ejemplo, `EXODUS{hola_mundo-123-456-789}`.

## Repaso: lo que debe quedarte dentro de un mes

1. La seguridad se reduce a un problema difícil; el algoritmo es público.
2. Una clave de libreta o un nonce de CTR se usan una vez.
3. Confidencialidad sin integridad no basta: HMAC o cifrado autenticado.
4. RSA: Euclides extendido, CRT y relleno; primos aleatorios e independientes.
5. En grupos y curvas, lo que importa es el mayor factor primo del orden.

## Siguiente

En las ramas: `sec-criptografia-aplicada` (TLS, protocolos, gestión de claves), `sec-criptoanalisis` y `sec-formal-protocolos`; para el contexto poscuántico,
[[cua-computacion-cuantica]].
