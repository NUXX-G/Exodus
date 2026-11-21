---
id: mat-estructuras-algebraicas
title: "Estructuras algebraicas: grupos, anillos, ideales y cuerpos finitos"
area: matematicas
trunk_level: 8
prerequisites: [mat-logica-demostraciones, mat-matematica-discreta, mat-conjuntos-numeros]
academic_sources:
  - "Dummit, D. S.; Foote, R. M. Abstract Algebra, 3ª ed. Wiley, 2004."
  - "Artin, M. Algebra, 2ª ed. Pearson, 2011."
  - "Shoup, V. A Computational Introduction to Number Theory and Algebra, 2ª ed. Cambridge University Press, 2009 (PDF gratuito en shoup.net/ntb)."
  - "Lidl, R.; Niederreiter, H. Introduction to Finite Fields and Their Applications, ed. revisada. Cambridge University Press, 1994."
  - "NIST. FIPS 197: Advanced Encryption Standard (AES), 2001 (aritmética en GF(2⁸) con el polinomio x⁸ + x⁴ + x³ + x + 1)."
ctf_flag: "sha256:7b341624442d0bb7b8bcc37295fe870c9f39dcfffa4b153b4d6b67bf7e07061e"
hints:
  - "(a) El orden de un elemento divide al orden del grupo: no hace falta multiplicar hasta volver a 1, basta examinar los divisores de p − 1. (b) Un grupo cíclico de orden n tiene tantos generadores como enteros coprimos con n. (c) Todo elemento de un cuerpo de 2^n elementos es raíz de x^(2^n) − x, y ese polinomio es el producto de todos los irreducibles cuyo grado divide a n."
  - "Factoriza p − 1 con `factor 1000002` (coreutils) o sympy.factorint. pow(2, d, p) en Python calcula 2^d mod p al instante. Para (c), cuenta por grados con la función de Möbius (sympy.mobius) y contrasta con fuerza bruta en un grado pequeño: sobre 𝔽₂ hay 3 irreducibles de grado 4."
  - "Dummit y Foote, capítulos de grupos cíclicos, teorema de Lagrange y cuerpos finitos (recuento de irreducibles). Shoup, capítulos de grupos abelianos y de cuerpos finitos. Documentación: docs.sympy.org, módulo ntheory."
exercises:
  - id: orden-de-un-elemento
    tier: 1
    prompt: |
      ¿Cuál es el orden de $3$ en el grupo multiplicativo $(\mathbb Z/7\mathbb Z)^\times$ (el menor $k \ge 1$ con $3^k \equiv 1$)? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: elementos-de-orden-dos
    tier: 1
    prompt: |
      ¿Cuántos elementos de orden $2$ tiene el grupo simétrico $S_4$? Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: funcion-de-euler
    tier: 1
    prompt: |
      ¿Cuánto vale $\varphi(36)$, el número de enteros entre $1$ y $36$ coprimos con $36$? Respuesta: un entero.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: subgrupos-de-un-ciclico
    tier: 1
    prompt: |
      ¿Cuántos subgrupos tiene el grupo cíclico $\mathbb Z/12\mathbb Z$? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: generadores-de-un-ciclico
    tier: 2
    prompt: |
      ¿Cuántos generadores tiene el grupo aditivo $\mathbb Z/20\mathbb Z$? Respuesta: un entero.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: inverso-por-euclides
    tier: 2
    prompt: |
      Con el algoritmo de Euclides extendido, halla el inverso de $17$ módulo $43$. Respuesta: un entero entre $1$ y $42$.
    answers: ["sha256:aea92132c4cbeb263e6ac2bf6c183b5d81737f179f21efdc5863739672f0f470"]
  - id: orden-de-una-permutacion
    tier: 2
    prompt: |
      ¿Qué orden tiene la permutación $(1\,2\,3)(4\,5)(6\,7\,8\,9)$ de $S_9$? Respuesta: un entero.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: unidades-y-divisores-de-cero
    tier: 2
    prompt: |
      En el anillo $\mathbb Z/6\mathbb Z$, ¿cuántos elementos son **unidades** (tienen inverso) y cuántos elementos **no nulos** son **divisores de cero**? Respuesta: los dos números separados por `;`.
    answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
  - id: mcd-de-polinomios
    tier: 2
    prompt: |
      Halla el máximo común divisor mónico de $x^6 - 1$ y $x^4 - 1$ en $\mathbb Q[x]$ con el algoritmo de Euclides. Respuesta: sus coeficientes de mayor a menor grado, separados por `;`.
    answers: ["sha256:6dead5d8148c09b038e98c2629eb5a02b7405169ba68101c644b5f5e00410b42"]
  - id: producto-en-f8
    tier: 2
    prompt: |
      En $\mathbb F_8 = \mathbb F_2[x]/(x^3 + x + 1)$, calcula $(x^2 + 1)(x^2 + x)$. Respuesta: los coeficientes de $x^2$, $x$ y $1$ como 3 bits (por ejemplo `101`).
    answers: ["sha256:8a080cea809d1b9d33b541f3498b1b6366ffc66df75423108947085057cf2f99"]
  - id: grupo-diedrico
    tier: 2
    prompt: |
      El grupo diédrico $D_4$ de simetrías del cuadrado está generado por el giro de $90^\circ$ y una reflexión. ¿Cuántos elementos tiene y cuántos son de orden $2$? Respuesta: los dos números separados por `;`.
    answers: ["sha256:085cf18d0562fd690fb7d923f88d091fced1b38dc538eaf22c7f33dbf690ed38"]
  - id: inverso-en-el-cuerpo-de-aes
    tier: 3
    prompt: |
      AES trabaja en $\mathbb F_{2^8} = \mathbb F_2[x]/(x^8 + x^4 + x^3 + x + 1)$, con cada byte como polinomio. ¿Cuál es el inverso multiplicativo de `0x53`? Respuesta: dos dígitos hexadecimales en minúsculas.
    answers: ["sha256:6959097001d10501ac7d54c0bdb8db61420f658f2922cc26e46d536119a31126"]
  - id: polinomios-irreducibles
    tier: 3
    prompt: |
      ¿Cuántos polinomios mónicos **irreducibles** de grado $6$ hay sobre $\mathbb F_2$? Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: raices-primitivas
    tier: 3
    prompt: |
      ¿Cuántas raíces primitivas hay módulo $23$ y cuál es la menor? Respuesta: los dos números separados por `;`.
    answers: ["sha256:2830667e6f00d97c75a988e79e79e032e9de5263cb9923ba180f670c80d22734"]
  - id: numero-de-carmichael
    tier: 3
    prompt: |
      $561 = 3\cdot11\cdot17$ es compuesto. Calcula $2^{560} \bmod 561$ y $\varphi(561)$. (El primero muestra por qué el test de Fermat se equivoca con los números de Carmichael.) Respuesta: los dos números separados por `;`.
    answers: ["sha256:f1f5ff0036a2a3950e08d14bce51951b9abe1224fb0ec1966e588398f6eda732"]
  - id: grupo-no-ciclico
    tier: 3
    prompt: |
      El grupo $(\mathbb Z/15\mathbb Z)^\times$ tiene $8$ elementos. ¿Cuál es el **mayor orden** de sus elementos? (Que sea menor que $8$ prueba que no es cíclico.) Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
---

# Estructuras algebraicas: grupos, anillos, ideales y cuerpos finitos

Los enteros módulo $n$, las permutaciones, los giros de un cubo de Rubik, los polinomios y los bytes de AES comparten una estructura: un
conjunto con operaciones que cumplen ciertas leyes. El álgebra abstracta estudia esas estructuras una vez y aplica los resultados a todas. Este
nodo enseña los **grupos** (orden, subgrupos, Lagrange, grupos cíclicos y de permutaciones, homomorfismos), los **anillos** (unidades,
divisores de cero, ideales, cocientes, anillos de polinomios) y los **cuerpos finitos**, que están en el corazón de la criptografía
([[sec-criptografia]]), los códigos correctores y el hardware digital ([[ing-logica-digital]]).

## Objetivos

Al terminar sabrás:

1. Reconocer grupos, calcular órdenes de elementos y aplicar el teorema de Lagrange y sus corolarios (Fermat y Euler).
2. Trabajar con grupos cíclicos (generadores, subgrupos, $\varphi$), de permutaciones (ciclos, orden, signo) y diédricos.
3. Definir homomorfismos, núcleos, subgrupos normales y grupos cociente, y enunciar el primer teorema de isomorfía.
4. Calcular en anillos ($\mathbb Z/n\mathbb Z$, polinomios): unidades, divisores de cero, ideales, máximo común divisor de polinomios.
5. Construir cuerpos finitos $\mathbb F_{p^n}$ como cocientes por polinomios irreducibles, operar en ellos (incluido el cuerpo de AES) y contar irreducibles.
6. Calcular raíces primitivas y entender por qué los números de Carmichael engañan al test de Fermat.

## Qué debes dominar antes

[[mat-logica-demostraciones]] (conjuntos, funciones, relaciones de equivalencia, demostraciones) y [[mat-matematica-discreta]] (aritmética
modular, inversos, Euclides, Fermat).

> [!question] Test de entrada
> 1. ¿Cuánto es $3^4 \bmod 7$?
> 2. ¿Qué enteros entre $1$ y $10$ son coprimos con $10$?
> 3. ¿Es la relación «$a \equiv b \pmod 5$» de equivalencia?
>
> Respuestas: $81 = 11\cdot7 + 4$, así que $4$; $1, 3, 7, 9$; sí (reflexiva, simétrica y transitiva).

## 1. Para qué sirve

- **Criptografía**: RSA vive en $(\mathbb Z/n\mathbb Z)^\times$; Diffie-Hellman y las firmas, en grupos cíclicos donde el logaritmo discreto es difícil;
  AES y las curvas elípticas, en cuerpos finitos ([[sec-criptografia]]).
- **Códigos correctores** (Reed-Solomon en QR, CD y comunicaciones espaciales; CRC): polinomios sobre cuerpos finitos.
- **Física y química**: las simetrías de cristales, moléculas y partículas son grupos; la mecánica cuántica clasifica estados por representaciones de grupos.
- **Informática**: los hashes, los generadores pseudoaleatorios y los algoritmos de cómputo exacto usan aritmética en anillos y cuerpos.

## 2. Grupos

Un **grupo** es un conjunto $G$ con una operación $\cdot$ **asociativa**, con **neutro** $e$ y en el que todo elemento tiene **inverso**. Si además es
conmutativa, el grupo es **abeliano**. Ejemplos: $(\mathbb Z, +)$; $(\mathbb Z/n\mathbb Z, +)$; las unidades de $\mathbb Z/n\mathbb Z$ con el producto,
$(\mathbb Z/n\mathbb Z)^\times$, de orden $\varphi(n)$; las matrices invertibles; las **permutaciones** de $n$ objetos con la composición, $S_n$, de
orden $n!$ (no abeliano para $n \ge 3$).

El **orden** de un elemento $g$ es el menor $k \ge 1$ con $g^k = e$; el de un grupo finito, su número de elementos. Un **subgrupo** es un
subconjunto que es grupo con la misma operación; el subgrupo **generado** por $g$, $\langle g\rangle = \{g^k\}$, tiene como orden el de $g$.

**Teorema de Lagrange.** Si $H$ es subgrupo de un grupo finito $G$, el orden de $H$ divide al de $G$.

*Demostración.* Las **clases laterales** $gH = \{gh : h \in H\}$ tienen todas $\lvert H\rvert$ elementos ($h \mapsto gh$ es biyectiva) y son disjuntas o
iguales (si $x \in g_1H \cap g_2H$, entonces $g_1H = xH = g_2H$): forman una partición de $G$ en bloques de tamaño $\lvert H\rvert$. $\blacksquare$

**Corolarios.** El orden de cada elemento divide al orden del grupo, así que $g^{\lvert G\rvert} = e$. Aplicado a $(\mathbb Z/n\mathbb Z)^\times$: si
$\gcd(a, n) = 1$, $a^{\varphi(n)} \equiv 1 \pmod n$ (**teorema de Euler**), y para $n = p$ primo, $a^{p-1} \equiv 1$ (**pequeño teorema de Fermat**). Un grupo
de orden primo es cíclico (todo elemento distinto de $e$ lo genera).

**Ejemplo resuelto 1.** Orden de $2$ módulo $13$: divide a $12$, así que basta probar $2, 3, 4, 6$: $2^2 = 4$, $2^3 = 8$, $2^4 = 16 \equiv 3$, $2^6 = 64 \equiv 12$; ninguno
da 1, luego el orden es $12$: $2$ es una **raíz primitiva** módulo 13.

## 3. Grupos cíclicos, de permutaciones y de simetrías

Un grupo es **cíclico** si está generado por un elemento. Todo cíclico de orden $n$ es «el mismo» que $\mathbb Z/n\mathbb Z$, y en él:

- tiene **exactamente un subgrupo por cada divisor** $d$ de $n$ (el generado por $n/d$);
- $g^k$ tiene orden $n/\gcd(k, n)$, así que hay $\varphi(n)$ **generadores**.

**Teorema.** $(\mathbb Z/p\mathbb Z)^\times$ es cíclico para $p$ primo: existen **raíces primitivas**, y hay $\varphi(p - 1)$. (Más en general, el grupo
multiplicativo de cualquier cuerpo finito es cíclico.) En cambio $(\mathbb Z/n\mathbb Z)^\times$ no siempre lo es: en $(\mathbb Z/8\mathbb Z)^\times$ todo
elemento distinto de 1 tiene orden 2.

**Permutaciones.** Toda permutación se descompone en **ciclos disjuntos**, y su orden es el **mínimo común múltiplo** de las longitudes de sus ciclos. Toda
permutación es producto de transposiciones; la paridad de su número (el **signo**) está bien definida, y las pares forman el grupo alternado $A_n$, de
orden $n!/2$. En $S_4$ hay $6$ transposiciones y $3$ productos de dos transposiciones disjuntas: $9$ elementos de orden 2.

**Simetrías.** El grupo **diédrico** $D_n$ de simetrías de un polígono regular de $n$ lados tiene $2n$ elementos: $n$ giros y $n$ reflexiones. Es el ejemplo más
sencillo de grupo no abeliano después de $S_3$ (de hecho, $D_3 \cong S_3$).

## 4. Homomorfismos y cocientes

Un **homomorfismo** $f: G \to H$ respeta la operación: $f(ab) = f(a)f(b)$. Su **núcleo** $\ker f = \{g : f(g) = e\}$ es un subgrupo **normal**
($gNg^{-1} = N$ para todo $g$). Con un subgrupo normal $N$, las clases laterales forman un grupo, el **cociente** $G/N$ ($aN\cdot bN = abN$).
**Primer teorema de isomorfía**: $G/\ker f \cong \operatorname{im}f$. Ejemplos: $\mathbb Z/n\mathbb Z$ es el cociente de $\mathbb Z$ por $n\mathbb Z$; el signo
$S_n \to \{\pm1\}$ tiene núcleo $A_n$; el determinante $GL_n \to \mathbb R^\times$ tiene núcleo $SL_n$.

**Teorema chino del resto, versión estructural.** Si $\gcd(m, n) = 1$, $\mathbb Z/mn\mathbb Z \cong \mathbb Z/m\mathbb Z \times \mathbb Z/n\mathbb Z$, y por tanto
$\varphi(mn) = \varphi(m)\varphi(n)$. Así se calcula $\varphi$ a partir de la factorización: $\varphi(n) = n\prod_{p\mid n}\left(1 - \frac1p\right)$.

## 5. Anillos e ideales

Un **anillo** tiene suma (grupo abeliano) y producto asociativo, distributivo respecto a la suma (aquí, conmutativo y con 1): $\mathbb Z$, $\mathbb Z/n\mathbb Z$,
los polinomios $K[x]$, las matrices (no conmutativo). Una **unidad** tiene inverso multiplicativo; un **divisor de cero** es un $a \ne 0$ con $ab = 0$ para
algún $b \ne 0$. En $\mathbb Z/n\mathbb Z$ cada elemento no nulo es una cosa o la otra: unidad si $\gcd(a, n) = 1$, divisor de cero si no. Un anillo sin
divisores de cero es un **dominio**; uno en el que todo no nulo es unidad, un **cuerpo**. $\mathbb Z/n\mathbb Z$ es cuerpo si y solo si $n$ es primo.

Un **ideal** $I$ es un subgrupo aditivo que absorbe productos ($ra \in I$ si $a \in I$); el cociente $R/I$ es un anillo. En $\mathbb Z$ y en $K[x]$ (con $K$ cuerpo)
todo ideal está generado por un elemento (son **dominios de ideales principales**) gracias a la **división euclídea**, y existe el **algoritmo de Euclides**:
$\gcd(x^6 - 1, x^4 - 1) = x^2 - 1$ (en general, $x^{\gcd(a, b)} - 1$). Un polinomio es **irreducible** si no se factoriza en polinomios de menor grado; es el
análogo de un número primo, y $K[x]/(f)$ es un cuerpo exactamente cuando $f$ es irreducible.

## 6. Cuerpos finitos

**Teorema.** Para cada primo $p$ y cada $n \ge 1$ existe un cuerpo con $p^n$ elementos, único salvo isomorfismo, $\mathbb F_{p^n}$, y no hay cuerpos finitos de
otros tamaños.

Se construye como $\mathbb F_p[x]/(f)$ con $f$ irreducible de grado $n$: sus elementos son los polinomios de grado $< n$, se suman coeficiente a coeficiente y
se multiplican reduciendo módulo $f$. Sobre $\mathbb F_2$, un elemento de $\mathbb F_{2^n}$ cabe en $n$ bits, sumar es **XOR** y multiplicar es desplazar y
XOR con reducción.

**Ejemplo resuelto 2.** En $\mathbb F_4 = \mathbb F_2[x]/(x^2 + x + 1)$, sea $\alpha = x$: $\alpha^2 = \alpha + 1$, $\alpha^3 = \alpha^2 + \alpha = 1$. Los elementos
son $0, 1, \alpha, \alpha + 1$, y $\alpha$ genera el grupo multiplicativo (de orden 3). Inverso de $\alpha$: $\alpha^2 = \alpha + 1$.

**AES** usa $\mathbb F_{2^8} = \mathbb F_2[x]/(x^8 + x^4 + x^3 + x + 1)$ (FIPS 197): cada byte es un elemento, y la caja S de AES se basa en el inverso
multiplicativo de cada byte en este cuerpo. El inverso de $a \ne 0$ se calcula con Euclides extendido para polinomios o como $a^{254}$ (pues $a^{255} = 1$).

**Contar irreducibles.** Todo elemento de $\mathbb F_{2^n}$ es raíz de $x^{2^n} - x$, que es el producto de todos los polinomios mónicos irreducibles sobre
$\mathbb F_2$ cuyo grado divide a $n$. Comparando grados, $2^n = \sum_{d\mid n} d\,N_d$ y, por inversión de Möbius,

$$
N_n = \frac1n\sum_{d\mid n}\mu(n/d)\,2^d ,
$$

con $\mu$ la función de Möbius ($\mu(1) = 1$, $\mu = (-1)^k$ si el número es producto de $k$ primos distintos, $0$ si tiene un factor cuadrado). Hay $N_4 = (16 - 4)/4 = 3$
irreducibles de grado 4.

## 7. Primalidad y números de Carmichael

El pequeño teorema de Fermat sugiere un test: si $a^{n-1} \not\equiv 1 \pmod n$, $n$ es compuesto. Pero el recíproco falla: los **números de Carmichael** (el menor
es $561 = 3\cdot11\cdot17$) cumplen $a^{n-1} \equiv 1$ para todo $a$ coprimo con $n$, porque el exponente de $(\mathbb Z/n\mathbb Z)^\times$ divide a $n - 1$. Por eso
los programas usan el test de **Miller-Rabin**, que examina también las raíces cuadradas de $1$ que aparecen por el camino.

## 8. Comprobar con un programa

```python
from math import gcd


def orden(a, n):
    k, x = 1, a % n
    while x != 1:
        x = x * a % n
        k += 1
    return k


def gf_mul(a, b, mod=0x11B):
    """Producto en F_{2^8} de AES: desplazar, XOR y reducir."""
    r = 0
    while b:
        if b & 1:
            r ^= a
        b >>= 1
        a <<= 1
        if a & 0x100:
            a ^= mod
    return r


assert orden(2, 13) == 12                                    # ejemplo resuelto 1: raíz primitiva
assert sum(1 for g in range(1, 13) if orden(g, 13) == 12) == 4   # φ(12) raíces primitivas
assert all(orden(a, 8) <= 2 for a in (1, 3, 5, 7))           # (Z/8)^× no es cíclico
assert gf_mul(0x57, 0x83) == 0xC1                            # ejemplo de producto de FIPS 197
inv = next(y for y in range(1, 256) if gf_mul(0x8C, y) == 1)
assert gf_mul(0x8C, inv) == 1 and pow(3, 560, 561) != 1 and gcd(3, 561) == 3
assert all(pow(a, 560, 561) == 1 for a in range(2, 561) if gcd(a, 561) == 1)  # 561 engaña a Fermat
```

## 9. Errores típicos

- Suponer que un grupo es abeliano (las permutaciones y las matrices no lo son).
- Calcular el orden de un elemento multiplicando hasta $\lvert G\rvert$, en lugar de probar solo los divisores.
- Confundir $\mathbb Z/n\mathbb Z$ (anillo) con $(\mathbb Z/n\mathbb Z)^\times$ (grupo de unidades, de orden $\varphi(n)$).
- Creer que $\mathbb F_4$ es $\mathbb Z/4\mathbb Z$ (no lo es: $2$ no tiene inverso módulo 4).
- Reducir módulo un polinomio que no es irreducible y esperar un cuerpo.
- Tomar el test de Fermat como prueba de primalidad.

## 10. Resumen

- Grupo: asociativa, neutro, inversos; orden; Lagrange $\Rightarrow$ Euler y Fermat.
- Cíclico de orden $n$: un subgrupo por divisor, $\varphi(n)$ generadores; $(\mathbb Z/p)^\times$ cíclico; permutaciones: orden $=$ mcm de ciclos.
- Homomorfismos, núcleo normal, cociente, primer teorema de isomorfía; teorema chino del resto.
- Anillos: unidades, divisores de cero, ideales, $K[x]$ euclídeo; irreducible $\Rightarrow$ cociente es cuerpo.
- $\mathbb F_{p^n} = \mathbb F_p[x]/(f)$; AES en $\mathbb F_{2^8}$; $N_n = \frac1n\sum\mu(n/d)2^d$.
- Carmichael y Miller-Rabin.

## Reto

Sea $p = 1000003$, que es primo. Calcula tres enteros.

- **a.** El orden de $2$ en $(\mathbb{Z}/p\mathbb{Z})^\times$. Valor de control: el orden de $2$ módulo $101$ es $100$.
- **b.** El número de raíces primitivas módulo $p$. Valor de control: módulo $101$ hay $40$.
- **c.** El número de polinomios mónicos irreducibles de grado $16$ sobre $\mathbb{F}_2$.

Formato de la flag, en decimal: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. El orden de un elemento divide al del grupo; basta probar los divisores.
2. $a^{\varphi(n)} \equiv 1$ si $\gcd(a, n) = 1$; $\varphi$ desde la factorización.
3. Orden de una permutación $=$ mcm de las longitudes de sus ciclos.
4. $\mathbb Z/n\mathbb Z$ es cuerpo $\iff$ $n$ primo; $K[x]/(f)$ es cuerpo $\iff$ $f$ irreducible.
5. En $\mathbb F_{2^n}$, sumar es XOR y multiplicar es desplazar, XOR y reducir.

## Siguiente

[[sec-criptografia]] (grupos y cuerpos finitos al servicio de la seguridad) y, en las ramas, teoría de números y álgebra conmutativa y de Galois.
