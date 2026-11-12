---
id: sec-criptografia
title: "Criptografía"
area: ciberseguridad
trunk_level: 12
prerequisites: [mat-estructuras-algebraicas, mat-probabilidad]
academic_sources:
  - "Katz, J.; Lindell, Y. Introduction to Modern Cryptography, 3ª ed. CRC Press, 2020."
  - "Boneh, D.; Shoup, V. A Graduate Course in Applied Cryptography (v0.6), 2023."
  - "Menezes, A. J.; van Oorschot, P. C.; Vanstone, S. A. Handbook of Applied Cryptography. CRC Press, 1996."
  - "Shannon, C. E. Communication Theory of Secrecy Systems. Bell System Technical Journal 28(4), 1949."
  - "Washington, L. C. Elliptic Curves: Number Theory and Cryptography, 2ª ed. CRC Press, 2008."
ctf_flag: "sha256:fc7c17ccadb67f3d9f5ae8001968dc9c1bebc17724f73db9d105c6a2e89299da"
hints:
  - "(a) Si p y q están muy cerca, n es casi un cuadrado: escribe n = a² − b² con a cerca de √n. (b) El orden del grupo, p − 1, factoriza en primos pequeños: resuelve el logaritmo en cada subgrupo de orden primo y recombina. (c) Cuenta los puntos con el símbolo de Legendre recorriendo todas las x; después multiplica por doble y suma."
  - "(a) gmpy2.isqrt o math.isqrt de Python (enteros de precisión arbitraria; no uses float). Convierte el entero descifrado a bytes con int.to_bytes. (b) sympy.ntheory.factorint para p − 1 y sympy.ntheory.residue_ntheory.discrete_log, o tu propio paso de bebé-paso de gigante en cada subgrupo con el CRT (sympy.ntheory.modular.crt). (c) pow(v, (p−1)//2, p) da el símbolo de Legendre; SageMath tiene EllipticCurve(GF(p), [a, b]).order() para contrastar."
  - "Katz & Lindell, §2.1–2.3 (secreto perfecto), §9.3 (Pohlig-Hellman y paso de bebé-paso de gigante) y cap. 9 sobre RSA. Handbook of Applied Cryptography, §3.2 (factorización de Fermat como caso particular) y §3.6.4 (Pohlig-Hellman). Washington, cap. 2 (ley de grupo) y §4.3 (teorema de Hasse). Documentación: docs.python.org/3/library/functions.html#pow."
---

# Criptografía

La criptografía moderna no consiste en esconder algoritmos, sino en reducir la seguridad de un
esquema a la dificultad de un problema matemático bien definido. Este nodo construye esa idea
desde el secreto perfecto de Shannon hasta las curvas elípticas, y muestra en el reto cómo una
mala elección de parámetros rompe un esquema matemáticamente correcto.

**Principio de Kerckhoffs.** Un sistema debe seguir siendo seguro aunque el adversario conozca
todo salvo la clave.

## 1. Secreto perfecto

Un esquema de cifrado es una terna $(\mathsf{Gen}, \mathsf{Enc}, \mathsf{Dec})$ con espacio de
mensajes $\mathcal M$, de claves $\mathcal K$ y de criptogramas $\mathcal C$, tal que
$\mathsf{Dec}_k(\mathsf{Enc}_k(m)) = m$.

**Definición (Shannon).** El esquema tiene **secreto perfecto** si, para toda distribución sobre
$\mathcal M$, todo $m$ y todo $c$ con $\Pr[C = c] > 0$,

$$
\Pr[M = m \mid C = c] = \Pr[M = m].
$$

Ver el criptograma no cambia en nada lo que se sabe del mensaje.

**Libreta de un solo uso.** $\mathcal M = \mathcal K = \mathcal C = \{0,1\}^\ell$, la clave es
uniforme y $\mathsf{Enc}_k(m) = m \oplus k$.

**Teorema.** La libreta de un solo uso tiene secreto perfecto.

*Demostración.* Para cualesquiera $m, c$, $\Pr[C = c \mid M = m] = \Pr[K = m \oplus c] =
2^{-\ell}$, que no depende de $m$. Por tanto $\Pr[C = c] = 2^{-\ell}$ y, por Bayes,
$\Pr[M = m \mid C = c] = \Pr[C = c \mid M = m]\Pr[M = m] / \Pr[C = c] = \Pr[M = m]$. $\blacksquare$

**Teorema (cota de Shannon).** Si un esquema tiene secreto perfecto, entonces
$|\mathcal K| \ge |\mathcal M|$.

*Demostración.* Fijado un $c$ posible, sea $\mathcal M(c) = \{\mathsf{Dec}_k(c) : k \in
\mathcal K\}$; $|\mathcal M(c)| \le |\mathcal K|$. Si $|\mathcal K| < |\mathcal M|$ existe
$m \notin \mathcal M(c)$, y con la distribución uniforme sobre $\mathcal M$ se tiene
$\Pr[M = m \mid C = c] = 0 \ne \Pr[M = m]$. $\blacksquare$

La clave tiene que ser tan larga como todo lo que se cifre con ella y no puede reutilizarse:
$c_1 \oplus c_2 = m_1 \oplus m_2$ filtra la relación entre los mensajes. Para salir de ahí hay
que debilitar la definición.

## 2. Seguridad computacional

Se pasa a adversarios **eficientes** (tiempo polinómico en un parámetro de seguridad $n$) y se
admite una probabilidad de éxito **despreciable**: $\varepsilon(n)$ es despreciable si
$\varepsilon(n) < n^{-c}$ a partir de cierto $n$, para toda constante $c$.

**Indistinguibilidad (IND-CPA).** El adversario elige $m_0, m_1$ de igual longitud, recibe
$\mathsf{Enc}_k(m_b)$ con $b$ aleatorio y puede pedir cifrados de mensajes de su elección. El
esquema es seguro si ningún adversario eficiente acierta $b$ con probabilidad mayor que
$\tfrac12 + \varepsilon(n)$.

Consecuencia inmediata: un esquema IND-CPA **no puede ser determinista**, porque el adversario
pediría el cifrado de $m_0$ y lo compararía. Por eso todo modo de cifrado serio usa un vector de
inicialización o un *nonce*.

**Funciones y permutaciones pseudoaleatorias.** Una familia $F_k$ es una PRF si ningún adversario
eficiente distingue $F_k$ de una función aleatoria con acceso de oráculo. Un cifrador de bloque
como AES se modela como una permutación pseudoaleatoria (PRP).

**Modo contador (CTR).** Con un *nonce* $r$, $c_i = m_i \oplus F_k(r + i)$. Si $F$ es una PRF y
los contadores no se repiten, CTR es IND-CPA: es una libreta de un solo uso cuya clave larga
genera la PRF. Si el *nonce* se repite, se vuelve al ataque $c_1 \oplus c_2$.

## 3. Integridad: MAC y funciones hash

El cifrado no protege la integridad: en CTR, invertir un bit del criptograma invierte el mismo bit
del mensaje. Un **código de autenticación de mensajes** (MAC) es un par
$(\mathsf{Mac}, \mathsf{Vrfy})$; es seguro si ningún adversario eficiente, tras ver etiquetas de
mensajes de su elección, produce una etiqueta válida para un mensaje nuevo.

Una **función hash** $H : \{0,1\}^* \to \{0,1\}^\ell$ es **resistente a colisiones** si es difícil
hallar $x \ne x'$ con $H(x) = H(x')$.

**Teorema (paradoja del cumpleaños).** Con $q$ entradas al azar en un recorrido de tamaño
$N = 2^\ell$, la probabilidad de colisión es al menos $1 - e^{-q(q-1)/2N}$; con
$q \approx 1{,}18\sqrt N$ supera $\tfrac12$.

*Demostración.* $\Pr[\text{sin colisión}] = \prod_{i=1}^{q-1}(1 - i/N) \le \prod e^{-i/N} =
e^{-q(q-1)/2N}$, por $1 - x \le e^{-x}$. $\blacksquare$

Una salida de $\ell$ bits ofrece, como mucho, $\ell/2$ bits de seguridad frente a colisiones: de
ahí SHA-256 y no SHA-128. La construcción **HMAC**,
$\mathrm{HMAC}_k(m) = H\bigl((k \oplus \mathrm{opad}) \,\|\, H((k \oplus \mathrm{ipad}) \,\|\,
m)\bigr)$, evita el ataque de extensión de longitud que sufre $H(k \,\|\, m)$ con hashes de tipo
Merkle-Damgård. La combinación correcta de confidencialidad e integridad es
*encrypt-then-MAC*, o un modo autenticado como AES-GCM.

## 4. RSA

**Generación.** Se eligen primos $p \ne q$, $n = pq$, $\varphi(n) = (p-1)(q-1)$, un $e$ con
$\gcd(e, \varphi(n)) = 1$ y $d \equiv e^{-1} \pmod{\varphi(n)}$. La clave pública es $(n, e)$ y
la privada, $d$. Se cifra con $c = m^e \bmod n$ y se descifra con $m = c^d \bmod n$.

**Teorema (corrección).** Para todo $m \in \mathbb Z_n$, $(m^e)^d \equiv m \pmod n$.

*Demostración.* $ed = 1 + t\varphi(n)$. Si $p \nmid m$, por el pequeño teorema de Fermat
$m^{ed} = m \cdot (m^{p-1})^{t(q-1)} \equiv m \pmod p$; si $p \mid m$, ambos lados son $0$
módulo $p$. Igual módulo $q$, y por el teorema chino del resto la congruencia vale módulo $n$.
$\blacksquare$

Calcular $d$ a partir de $(n, e)$ equivale a factorizar $n$. RSA «de libro» es determinista y,
por tanto, no es IND-CPA: en la práctica se usa con relleno aleatorio (OAEP) o, para firmar,
con PSS.

**Factorización de Fermat.** Si $n = pq$ con $p < q$, sean $a = \frac{p+q}{2}$ y
$b = \frac{q-p}{2}$; entonces $n = a^2 - b^2$. Basta probar $a = \lceil\sqrt n\,\rceil,
\lceil\sqrt n\,\rceil + 1, \dots$ hasta que $a^2 - n$ sea un cuadrado perfecto. Como
$a - \sqrt n = \frac{(\sqrt q - \sqrt p)^2}{2}$, el número de pasos es aproximadamente
$\frac{(q - p)^2}{8\sqrt n}$: si los primos se generan juntos, por ejemplo tomando $q$ como el
siguiente primo después de $p$, la factorización es inmediata.

```python
from math import isqrt

def fermat(n):
    a = isqrt(n)
    if a * a < n:
        a += 1
    while True:
        b2 = a * a - n
        b = isqrt(b2)
        if b * b == b2:
            return a - b, a + b
        a += 1
```

Valor de control: $5959 = 59 \cdot 101$ se obtiene con $a = 80$, $b = 21$, tras probar
$a = 78$ y $a = 79$.

## 5. Logaritmo discreto y Diffie-Hellman

En un grupo cíclico $G = \langle g \rangle$ de orden $N$, el **logaritmo discreto** de $h$ es el
$x \in \{0, \dots, N - 1\}$ con $g^x = h$.

**Diffie-Hellman.** Alicia envía $g^a$, Bernardo envía $g^b$ y ambos calculan $g^{ab}$. Un espía
que ve $g^a$ y $g^b$ debe resolver el problema de Diffie-Hellman, que no es más difícil que el
logaritmo discreto.

**Paso de bebé-paso de gigante (Shanks).** Con $m = \lceil\sqrt N\,\rceil$ se escribe
$x = im + j$. Se tabulan los $g^j$ para $0 \le j < m$ y se recorren los
$h \cdot (g^{-m})^i$ hasta encontrar uno en la tabla: $O(\sqrt N)$ en tiempo y en memoria.

**Pohlig-Hellman.** Si $N = \prod_i q_i$ con primos distintos $q_i$, para cada $i$ el elemento
$g_i = g^{N/q_i}$ tiene orden $q_i$ y $h_i = h^{N/q_i} = g_i^{\,x}$. Por tanto
$x \equiv \log_{g_i} h_i \pmod{q_i}$, un logaritmo en un grupo de tamaño $q_i$, y el teorema chino
del resto reconstruye $x$ módulo $N$. Con factores repetidos $q^e$ se obtienen los dígitos de $x$
en base $q$ uno a uno.

**Teorema.** El coste de Pohlig-Hellman es $O\bigl(\sum_i e_i(\log N + \sqrt{q_i})\bigr)$
operaciones de grupo: la seguridad la fija el **mayor factor primo** del orden, no su tamaño.

Por eso Diffie-Hellman en $\mathbb Z_p^*$ exige que $p - 1$ tenga un factor primo grande; se usan
primos seguros, $p = 2q + 1$ con $q$ primo, y se trabaja en el subgrupo de orden $q$.

## 6. Curvas elípticas

Sobre un cuerpo $\mathbb F_p$ con $p > 3$, una **curva elíptica** es el conjunto de soluciones de
$y^2 = x^3 + ax + b$ con $4a^3 + 27b^2 \ne 0$ (sin singularidades), junto con un punto del
infinito $\mathcal O$.

**Ley de grupo.** Tres puntos alineados suman $\mathcal O$. Para $P = (x_1, y_1)$ y
$Q = (x_2, y_2)$ con $P \ne -Q$:

$$
\lambda = \begin{cases} \dfrac{y_2 - y_1}{x_2 - x_1} & P \ne Q \\[2mm]
\dfrac{3x_1^2 + a}{2y_1} & P = Q \end{cases}, \qquad
x_3 = \lambda^2 - x_1 - x_2, \qquad y_3 = \lambda(x_1 - x_3) - y_1 ,
$$

con $-P = (x_1, -y_1)$ y $\mathcal O$ como elemento neutro. Es un grupo abeliano; la asociatividad
es la parte difícil de la demostración (Washington, §2.4).

**Multiplicación escalar** por doble y suma: $kP$ se calcula en $O(\log k)$ operaciones,
recorriendo los bits de $k$. El problema inverso, recuperar $k$ a partir de $P$ y $kP$, es el
**logaritmo discreto elíptico**, y para curvas bien elegidas no se conoce nada mejor que
$O(\sqrt N)$: una curva de 256 bits da unos 128 bits de seguridad, frente a los 3072 bits que
necesita RSA.

**Contar puntos.** Para cada $x$, el número de $y$ con $y^2 = f(x)$ es $1 + \left(\frac{f(x)}{p}
\right)$, con el símbolo de Legendre $\left(\frac{v}{p}\right) \equiv v^{(p-1)/2} \pmod p$
(criterio de Euler). Por tanto

$$
\#E(\mathbb F_p) = p + 1 + \sum_{x \in \mathbb F_p} \left(\frac{x^3 + ax + b}{p}\right).
$$

**Teorema (Hasse).** $\bigl|\#E(\mathbb F_p) - (p + 1)\bigr| \le 2\sqrt p$.

Contar así cuesta $O(p)$ y solo sirve para $p$ pequeño; las curvas criptográficas se cuentan con
el algoritmo de Schoof y sus mejoras. El orden importa por lo mismo que en el apartado anterior:
si $\#E$ no tiene un factor primo grande, Pohlig-Hellman rompe la curva.

Valor de control: la curva $y^2 = x^3 + 2x + 3$ sobre $\mathbb F_{97}$ tiene $100$ puntos.

## Reto

Tres esquemas correctos con parámetros mal elegidos.

- **a.** Un mensaje en ASCII se ha cifrado con RSA de libro, $e = 65537$, y se sabe que los
  primos se generaron demasiado cerca el uno del otro. El mensaje es una cadena de letras
  minúsculas y guiones bajos, codificada como entero en orden *big-endian*.

  $n =$ `146232966347336698540221327285883070496271504490064185108847019682993895905545872311613535340881196343329494675293433156950563746192590611692411744794144872533920057475016185660193650665845218271304557830403485668162558328885254542304955591370528591620496911656050014833755627328967800291851440161269644100707`

  $c =$ `25292594424122019647947159668257993593405937348697270820881314193707383617546484948214776174971637600839215591089014832689535844483556642204258422101942645303344815393871598493658333835554273180667836841703419919279154634374301685663775599073274039246141574496655689765691277845068657261499090162949788151427`

- **b.** En $\mathbb Z_p^*$ con $p =$ `122303883120383834159` y generador $g = 11$, halla el
  $x \in \{0, \dots, p - 2\}$ tal que $g^x \equiv h \pmod p$, con $h =$
  `116284088245659503928`.
- **c.** Para la curva $E : y^2 = x^3 + 3x + 7$ sobre $\mathbb F_p$ con $p = 1048583$: el número
  de puntos $N = \#E(\mathbb F_p)$, incluido $\mathcal O$, y la coordenada $x$ del punto
  $kG$, con $G = (1, 225176)$ y $k = 2^{100} + 31337$.

Formato de la flag: `EXODUS{mensaje-x-N-xkG}`, con los tres números en decimal. Por ejemplo,
`EXODUS{hola_mundo-123-456-789}`.
