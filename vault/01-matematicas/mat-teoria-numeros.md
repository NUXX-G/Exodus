---
id: mat-teoria-numeros
title: "Teoría de números: divisibilidad, congruencias, funciones aritméticas, residuos cuadráticos, primalidad y ecuaciones diofánticas"
area: matematicas
trunk_level: 9
prerequisites: [mat-matematica-discreta, mat-estructuras-algebraicas]
academic_sources:
  - "Hardy, G. H.; Wright, E. M. An Introduction to the Theory of Numbers, 6ª ed. (revisada por D. R. Heath-Brown y J. H. Silverman). Oxford University Press, 2008."
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
exercises:
  - id: mcd-y-bezout
    tier: 1
    prompt: |
      Con el algoritmo de Euclides extendido, halla $d = \gcd(1071, 462)$ y enteros $x, y$ con $1071x + 462y = d$ (los que da el algoritmo). Respuesta: `d;x;y`.
    answers: ["sha256:bac5a1502fb2df68d24eafe4f3e58ec506a0fd244794439eb357b6378b5b6b7d"]
  - id: funcion-phi
    tier: 1
    prompt: |
      ¿Cuánto vale la función de Euler $\varphi(360)$? Respuesta: un entero.
    answers: ["sha256:7b1a278f5abe8e9da907fc9c29dfd432d60dc76e17b0fabab659d2a508bc65c4"]
  - id: divisores
    tier: 1
    prompt: |
      ¿Cuántos divisores positivos tiene $360$ y cuánto suman? Respuesta: `tau;sigma`.
    answers: ["sha256:dfeba01aedd9a60c93fcfe4f69772ce018dfa7d7b1dcb1aa4377e6853a98bc7a"]
  - id: potencia-modular
    tier: 1
    prompt: |
      Calcula $3^{100} \bmod 7$ con el pequeño teorema de Fermat. Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: inverso-modular
    tier: 2
    prompt: |
      ¿Cuál es el inverso de $17$ módulo $3120$? Respuesta: un entero entre $0$ y $3119$.
    answers: ["sha256:8e6dbcb8a3461e581f3859d45d8cb900814b396f76566d227c2d668e30c62828"]
  - id: teorema-chino-del-resto
    tier: 2
    prompt: |
      Halla el menor $x \ge 0$ con $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$ y $x \equiv 2 \pmod 7$. Respuesta: un entero.
    answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
  - id: simbolo-de-legendre
    tier: 2
    prompt: |
      Calcula el símbolo de Legendre $\left(\frac{5}{97}\right)$ con la ley de reciprocidad cuadrática. Respuesta: `1` o `-1`.
    answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
  - id: orden-multiplicativo
    tier: 2
    prompt: |
      ¿Cuál es el orden de $2$ módulo $101$ (el menor $k > 0$ con $2^k \equiv 1$)? Respuesta: un entero.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: contar-primos
    tier: 2
    prompt: |
      ¿Cuántos primos hay menores o iguales que $100\,000$? Usa la criba de Eratóstenes. Respuesta: un entero.
    answers: ["sha256:454df0b799320283814e09c66752efdf334c0205f55f6334c40896e9a48f0712"]
  - id: raiz-cuadrada-modular
    tier: 2
    prompt: |
      Resuelve $x^2 \equiv 10 \pmod{13}$. Respuesta: las dos soluciones en $[0, 12]$, de menor a mayor, separadas por `;`.
    answers: ["sha256:8af91448144b426eeaed65df68130c9f2b151256469562d15bef6a26b0325170"]
  - id: ecuacion-diofantica
    tier: 2
    prompt: |
      ¿Cuántas soluciones con $x, y \ge 0$ enteros tiene $3x + 5y = 100$? Respuesta: un entero.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: numero-de-carmichael
    tier: 3
    prompt: |
      $561 = 3\cdot11\cdot17$ cumple $a^{560} \equiv 1 \pmod{561}$ para todo $a$ coprimo con él (es un número de Carmichael). ¿Cuánto vale la función de Carmichael $\lambda(561)$, el exponente mínimo que funciona para todos? Respuesta: un entero.
    answers: ["sha256:48449a14a4ff7d79bb7a1b6f3d488eba397c36ef25634c111b49baf362511afc"]
  - id: miller-rabin
    tier: 3
    prompt: |
      ¿Cuál es la menor base $a \ge 2$ con la que el test de Miller-Rabin demuestra que $561$ es compuesto? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: ecuacion-de-pell
    tier: 3
    prompt: |
      Halla la solución fundamental (la menor con $y > 0$) de $x^2 - 14y^2 = 1$, usando la fracción continua de $\sqrt{14}$. Respuesta: `x;y`.
    answers: ["sha256:6e4a051a81cc5871dbe4eda6013232c91cb87c41059319b9cdf15d7d2d13b889"]
  - id: sumas-de-dos-cuadrados
    tier: 3
    prompt: |
      ¿De cuántas formas se escribe $325 = a^2 + b^2$ con $a, b$ enteros (contando signos y orden)? Usa $r_2(n) = 4\,(d_1(n) - d_3(n))$. Respuesta: un entero.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: raices-primitivas
    tier: 3
    prompt: |
      ¿Cuál es la menor raíz primitiva módulo $23$ y cuántas raíces primitivas hay? Respuesta: `menor;cuantas`.
    answers: ["sha256:6124945d516d5a8438fb0639a9a4da472eb42574a89934893040c4bf616adc30"]
---

# Teoría de números: divisibilidad, congruencias, funciones aritméticas, residuos cuadráticos, primalidad y ecuaciones diofánticas

La teoría de números estudia los enteros, y durante siglos fue la rama «pura» por excelencia. Hoy es la base de la criptografía de clave pública
([[sec-criptografia]]), de los códigos correctores, de los generadores de números pseudoaleatorios y de buena parte de la algoritmia. Este nodo
recorre lo esencial con una idea guía: cada teorema viene con un **algoritmo** que lo hace útil, y cada algoritmo se puede comprobar contra una búsqueda
exhaustiva.

## Objetivos

Al terminar sabrás:

1. Usar la división euclídea, el algoritmo de Euclides extendido y la identidad de Bézout; factorizar y razonar con primos.
2. Trabajar con congruencias: inversos, sistemas lineales y el teorema chino del resto.
3. Calcular funciones aritméticas ($\varphi$, $\tau$, $\sigma$) y usar los teoremas de Fermat, Euler y Wilson.
4. Usar órdenes, raíces primitivas y la función de Carmichael.
5. Decidir si un número es residuo cuadrático (Legendre, reciprocidad) y extraer raíces cuadradas modulares.
6. Aplicar tests de primalidad (Fermat, Miller-Rabin) y resolver ecuaciones diofánticas lineales, de Pell y sumas de dos cuadrados.

## Qué debes dominar antes

[[mat-matematica-discreta]] (divisibilidad, aritmética modular básica, inducción) y [[mat-estructuras-algebraicas]] (grupos, anillos $\mathbb Z_n$, cuerpos finitos).

> [!question] Test de entrada
> 1. ¿Cuánto es $17 \bmod 5$ y $-17 \bmod 5$?
> 2. ¿Es $91$ primo?
> 3. ¿Qué orden tiene el grupo $(\mathbb Z_7^*, \cdot)$?
>
> Respuestas: $2$ y $3$; no, $91 = 7\cdot13$; $6$.

## 1. Para qué sirve

- **Criptografía**: RSA, Diffie-Hellman y las curvas elípticas viven en $\mathbb Z_n$ y en cuerpos finitos; su seguridad depende de factorizar y del logaritmo discreto.
- **Informática**: tablas *hash* con módulos primos, generadores congruenciales, sumas de comprobación, aritmética de enteros grandes.
- **Códigos**: los códigos de Reed-Solomon (QR, CD, comunicaciones espaciales) usan aritmética en cuerpos finitos.
- **Matemáticas**: una escuela de rigor: enunciados sencillos, demostraciones profundas, y la puerta a la teoría analítica (primos) y algebraica.

## 2. Divisibilidad, Euclides y primos

**División euclídea.** Para $a, b$ enteros con $b > 0$ existen únicos $q, r$ con $a = bq + r$ y $0 \le r < b$.

**Algoritmo de Euclides.** $\gcd(a, b) = \gcd(b, a \bmod b)$, y $\gcd(a, 0) = a$. Termina en $O(\log\min(a, b))$ pasos (el peor caso son dos Fibonacci consecutivos,
teorema de Lamé).

**Identidad de Bézout.** Existen enteros $x, y$ con $ax + by = \gcd(a, b)$, y el **algoritmo extendido** los obtiene arrastrando las combinaciones lineales.

> [!example] Ejemplo resuelto 1: Euclides extendido a mano
> $\gcd(240, 46)$: $240 = 5\cdot46 + 10$; $46 = 4\cdot10 + 6$; $10 = 1\cdot6 + 4$; $6 = 1\cdot4 + 2$; $4 = 2\cdot2$. El mcd es $2$. Volviendo atrás:
> $2 = 6 - 4 = 6 - (10 - 6) = 2\cdot6 - 10 = 2(46 - 4\cdot10) - 10 = 2\cdot46 - 9\cdot10 = 2\cdot46 - 9(240 - 5\cdot46) = 47\cdot46 - 9\cdot240$. Comprobación:
> $47\cdot46 = 2162$ y $9\cdot240 = 2160$.

**Teorema fundamental de la aritmética.** Todo entero $n > 1$ se escribe de forma única (salvo orden) como producto de primos. La unicidad se apoya en el
**lema de Euclides**: si un primo $p$ divide a $ab$, divide a $a$ o a $b$ (consecuencia de Bézout).

**Infinitud de los primos** (Euclides): si $p_1, \dots, p_k$ fueran todos, $p_1\cdots p_k + 1$ no sería divisible por ninguno. El **teorema de los números primos**
dice que $\pi(x) \sim x/\ln x$; la **criba de Eratóstenes** los lista hasta $x$ en $O(x\log\log x)$.

## 3. Congruencias y teorema chino del resto

$a \equiv b \pmod n$ si $n \mid a - b$. Las congruencias se suman y se multiplican como igualdades; dividir exige un **inverso**: $a$ es invertible módulo $n$ si y
solo si $\gcd(a, n) = 1$, y Bézout da el inverso ($ax + ny = 1 \Rightarrow ax \equiv 1$). La ecuación $ax \equiv b \pmod n$ tiene solución si y solo si $d = \gcd(a, n)$ divide a $b$,
y entonces tiene $d$ soluciones módulo $n$.

**Teorema chino del resto.** Si $m_1, \dots, m_k$ son coprimos dos a dos, el sistema $x \equiv r_i \pmod{m_i}$ tiene solución única módulo $M = m_1\cdots m_k$:
$x = \sum r_iM_iy_i$ con $M_i = M/m_i$ e $y_i \equiv M_i^{-1} \pmod{m_i}$. Equivale al isomorfismo de anillos $\mathbb Z_M \cong \mathbb Z_{m_1}\times\cdots\times\mathbb Z_{m_k}$, que es lo que acelera
el descifrado RSA.

## 4. Funciones aritméticas y los teoremas de Fermat, Euler y Wilson

Con $n = \prod p_i^{e_i}$:

$$
\varphi(n) = n\prod_{p\mid n}\Bigl(1 - \frac1p\Bigr), \qquad \tau(n) = \prod(e_i + 1), \qquad \sigma(n) = \prod\frac{p_i^{e_i+1} - 1}{p_i - 1} .
$$

Las tres son **multiplicativas** ($f(mn) = f(m)f(n)$ si $\gcd(m, n) = 1$), y $\sum_{d\mid n}\varphi(d) = n$.

**Teorema de Euler.** Si $\gcd(a, n) = 1$, $a^{\varphi(n)} \equiv 1 \pmod n$. *Demostración.* $\mathbb Z_n^*$ es un grupo de orden $\varphi(n)$, y por Lagrange el orden de
cualquier elemento divide al del grupo. $\blacksquare$ Con $n = p$ primo es el **pequeño teorema de Fermat**, $a^{p-1} \equiv 1$, que permite reducir exponentes:
$a^k \equiv a^{k \bmod (p-1)}$.

**Teorema de Wilson.** $p$ es primo si y solo si $(p - 1)! \equiv -1 \pmod p$ (cada elemento se empareja con su inverso salvo $\pm1$). Bonito, pero inútil como test.

## 5. Órdenes y raíces primitivas

El **orden** de $a$ módulo $n$ es el menor $k > 0$ con $a^k \equiv 1$; divide a $\varphi(n)$, así que basta probar los divisores. Una **raíz primitiva** es un $g$ de orden $\varphi(n)$:
genera todo $\mathbb Z_n^*$. Existen si y solo si $n = 1, 2, 4, p^k$ o $2p^k$ ($p$ primo impar), y entonces hay $\varphi(\varphi(n))$ de ellas. Para comprobar que $g$ es
raíz primitiva módulo $p$: $g^{(p-1)/q} \ne 1$ para cada primo $q \mid p - 1$.

La **función de Carmichael** $\lambda(n)$ es el exponente mínimo con $a^{\lambda(n)} \equiv 1$ para todo $a$ coprimo: $\lambda(p^k) = \varphi(p^k)$ para $p$ impar y
$\lambda(n) = \operatorname{mcm}$ de las de sus factores. Un **número de Carmichael** es compuesto y cumple $\lambda(n) \mid n - 1$: engaña al test de Fermat para todas las
bases coprimas. El menor es $561 = 3\cdot11\cdot17$.

## 6. Residuos cuadráticos

$a$ es **residuo cuadrático** módulo $p$ (primo impar) si $x^2 \equiv a$ tiene solución. Hay exactamente $(p - 1)/2$. El **símbolo de Legendre** $\bigl(\frac ap\bigr)$ vale $1$, $-1$ o
$0$, y el **criterio de Euler** lo calcula: $\bigl(\frac ap\bigr) \equiv a^{(p-1)/2} \pmod p$.

**Ley de reciprocidad cuadrática** (Gauss). Para primos impares distintos,
$\bigl(\frac pq\bigr)\bigl(\frac qp\bigr) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}$, con los suplementos $\bigl(\frac{-1}{p}\bigr) = (-1)^{(p-1)/2}$ y $\bigl(\frac2p\bigr) = (-1)^{(p^2-1)/8}$. Permite calcular símbolos
reduciendo como en Euclides.

> [!example] Ejemplo resuelto 2: reciprocidad (con menos ayuda)
> $\bigl(\frac{3}{11}\bigr)$: como $3 \equiv 11 \equiv 3 \pmod 4$, $\bigl(\frac3{11}\bigr) = -\bigl(\frac{11}{3}\bigr) = -\bigl(\frac23\bigr) = -(-1) = 1$. En efecto, $5^2 = 25 \equiv 3 \pmod{11}$. Calcula tú
> $\bigl(\frac5{97}\bigr)$: como $5 \equiv 1 \pmod 4$, es $\bigl(\frac{97}{5}\bigr) = \bigl(\frac25\bigr)$, y $5 \equiv 5 \pmod 8$.

Hallar la raíz (no solo saber que existe): si $p \equiv 3 \pmod 4$, $x = a^{(p+1)/4}$; en general, el algoritmo de **Tonelli-Shanks**.

## 7. Primalidad

- **Fermat**: si $a^{n-1} \not\equiv 1 \pmod n$, $n$ es compuesto. Los números de Carmichael lo engañan.
- **Miller-Rabin**: escribe $n - 1 = 2^sd$ con $d$ impar; $n$ supera la prueba en base $a$ si $a^d \equiv 1$ o $a^{2^rd} \equiv -1$ para algún $r < s$. Un compuesto la supera
  para como mucho $1/4$ de las bases, así que $k$ bases aleatorias dejan una probabilidad de error menor que $4^{-k}$. Con un conjunto fijo de bases es
  determinista para enteros de 64 bits.
- **AKS** (2002) probó que la primalidad está en P; en la práctica se usa Miller-Rabin (y certificados para primos «demostrados»).

## 8. Ecuaciones diofánticas

- **Lineales** $ax + by = c$: tienen solución si y solo si $\gcd(a, b) \mid c$; si $(x_0, y_0)$ es una, todas son $x_0 + \frac bdt$, $y_0 - \frac adt$.
- **Pell** $x^2 - Dy^2 = 1$ ($D$ no cuadrado): tiene infinitas soluciones, generadas por la fundamental, que se lee en la **fracción continua periódica** de $\sqrt D$
  (es un convergente al final del primer periodo o del segundo). Para $D = 14$, $\sqrt{14} = [3; \overline{1, 2, 1, 6}]$.
- **Sumas de dos cuadrados** (Fermat): un primo impar es suma de dos cuadrados si y solo si $p \equiv 1 \pmod 4$; en general, el número de representaciones es
  $r_2(n) = 4(d_1(n) - d_3(n))$, con $d_j$ el número de divisores $\equiv j \pmod 4$.

## 9. Comprobar con un programa

Euclides extendido, la criba, Miller-Rabin, el teorema chino del resto y Pell, cada uno contrastado con una búsqueda directa.

```python
from math import gcd, isqrt

def euclides(a, b):
    x0, x1, y0, y1 = 1, 0, 0, 1
    while b:
        q, a, b = a // b, b, a % b
        x0, x1, y0, y1 = x1, x0 - q * x1, y1, y0 - q * y1
    return a, x0, y0

# 1. Ejemplo resuelto 1.
d, x, y = euclides(240, 46)
assert d == 2 and 240 * x + 46 * y == 2

# 2. Criba frente a división por tentativa hasta 10⁴.
def criba(n):
    es = [True] * (n + 1)
    es[0] = es[1] = False
    for i in range(2, isqrt(n) + 1):
        if es[i]:
            es[i * i :: i] = [False] * len(es[i * i :: i])
    return [i for i, v in enumerate(es) if v]

primos = criba(10_000)
assert primos == [n for n in range(2, 10_001) if all(n % k for k in range(2, isqrt(n) + 1))]
assert len(primos) == 1229

# 3. Miller-Rabin determinista para n < 3,3·10²⁴ con las 12 primeras bases primas.
def miller_rabin(n):
    if n < 2:
        return False
    for p in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
        if n % p == 0:
            return n == p
    d, s = n - 1, 0
    while d % 2 == 0:
        d, s = d // 2, s + 1
    for a in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
        x = pow(a, d, n)
        if x in (1, n - 1):
            continue
        for _ in range(s - 1):
            x = x * x % n
            if x == n - 1:
                break
        else:
            return False
    return True

assert all(miller_rabin(n) == (n in set(primos)) for n in range(2, 10_001))
assert not miller_rabin(561) and pow(2, 560, 561) == 1   # Carmichael: engaña a Fermat, no a Miller-Rabin
assert miller_rabin(2**61 - 1)                            # primo de Mersenne

# 4. Teorema chino del resto frente a recorrido directo.
def tcr(restos, modulos):
    x, M = 0, 1
    for r, m in zip(restos, modulos):
        x += M * ((r - x) * pow(M, -1, m) % m)
        M *= m
    return x % M

assert tcr([2, 3, 2], [3, 5, 7]) == next(n for n in range(105) if (n % 3, n % 5, n % 7) == (2, 3, 2))

# 5. Pell x² − 61y² = 1: la fracción continua da una solución famosa por lo grande que es.
def pell(D):
    a0 = isqrt(D)
    m, d, a = 0, 1, a0
    h0, h1, k0, k1 = a0, 1, 1, 0
    while h0 * h0 - D * k0 * k0 != 1:
        m = d * a - m
        d = (D - m * m) // d
        a = (a0 + m) // d
        h0, h1, k0, k1 = a * h0 + h1, h0, a * k0 + k1, k0
    return h0, k0

x, y = pell(61)
assert x * x - 61 * y * y == 1
print("Pell D = 61:", x, y)
```

## 10. Errores típicos

- Dividir en una congruencia sin comprobar que el divisor es invertible.
- Aplicar el teorema chino del resto con módulos no coprimos.
- Reducir el exponente módulo $p$ en vez de módulo $p - 1$ (o $\varphi(n)$).
- Tomar el test de Fermat como prueba de primalidad (Carmichael).
- Confundir el símbolo de Legendre con la existencia de raíz cuando $p$ no es primo (el de Jacobi puede valer $1$ sin que haya raíz).
- Usar coma flotante con enteros grandes.

## 11. Resumen

- Euclides y Bézout; lema de Euclides; factorización única; infinitud de los primos; criba.
- Congruencias, inversos, $ax \equiv b$; teorema chino del resto.
- $\varphi$, $\tau$, $\sigma$ multiplicativas; Euler, Fermat, Wilson.
- Orden, raíces primitivas ($\varphi(\varphi(n))$), Carmichael ($\lambda$, $561$).
- Legendre, criterio de Euler, reciprocidad; Tonelli-Shanks.
- Miller-Rabin; Pell por fracciones continuas; sumas de dos cuadrados.

## Repaso: lo que debe quedarte dentro de un mes

1. Euclides extendido da el mcd y el inverso.
2. El teorema chino del resto trocea un módulo en primos.
3. $a^{\varphi(n)} \equiv 1$: los exponentes se reducen módulo $\varphi(n)$.
4. Legendre por el criterio de Euler o por reciprocidad.
5. Para primalidad, Miller-Rabin; Fermat solo no basta.

## Siguiente

[[sec-criptografia]] aplica todo esto; en las ramas, `mat-algebra-conmutativa-galois` (cuerpos finitos y extensiones), `sec-criptoanalisis` y la teoría
analítica de números con [[mat-analisis-complejo]].
