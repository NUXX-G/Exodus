---
id: mat-estructuras-algebraicas
title: "Grupos, anillos y cuerpos"
area: matematicas
trunk_level: 8
prerequisites: [mat-logica-demostraciones, mat-numeros-naturales]
academic_sources:
  - "Dummit, D. S.; Foote, R. M. Abstract Algebra, 3ª ed. Wiley, 2004."
  - "Artin, M. Algebra, 2ª ed. Pearson, 2011."
  - "Lidl, R.; Niederreiter, H. Introduction to Finite Fields and Their Applications, ed. revisada. Cambridge University Press, 1994."
  - "Shoup, V. A Computational Introduction to Number Theory and Algebra, 2ª ed. Cambridge University Press, 2009."
ctf_flag: "sha256:7b341624442d0bb7b8bcc37295fe870c9f39dcfffa4b153b4d6b67bf7e07061e"
hints:
  - "(a) El orden de un elemento divide al orden del grupo: no hace falta multiplicar hasta volver a 1, basta examinar los divisores de p − 1. (b) Un grupo cíclico de orden n tiene tantos generadores como enteros coprimos con n. (c) Todo elemento de un cuerpo de 2^n elementos es raíz de x^(2^n) − x, y ese polinomio es el producto de todos los irreducibles cuyo grado divide a n."
  - "Factoriza p − 1 con `factor 1000002` (coreutils) o sympy.factorint. pow(2, d, p) en Python calcula 2^d mod p al instante. Para (c), cuenta por grados con la función de Möbius (sympy.mobius) y contrasta con fuerza bruta en un grado pequeño: sobre 𝔽₂ hay 3 irreducibles de grado 4."
  - "Dummit & Foote, §2.3 (grupos cíclicos), §3.2 (Lagrange) y §14.3 (cuerpos finitos y recuento de irreducibles). Lidl & Niederreiter, teorema 3.25. Documentación: docs.sympy.org, módulo ntheory."
---

# Grupos, anillos y cuerpos

El álgebra abstracta estudia las operaciones con independencia de los objetos sobre los que
actúan. La aritmética modular (los restos de [[mat-numeros-naturales]]), las simetrías de un sólido y los bytes de un
cifrado obedecen a los mismos pocos axiomas, y todo teorema demostrado a partir de ellos vale a
la vez para los tres.

## 1. Grupos

Un **grupo** es un conjunto $G$ con una operación $G \times G \to G$ que es asociativa, tiene
elemento neutro $e$ y en la que todo elemento tiene inverso. Es **abeliano** si además es
conmutativa.

Ejemplos: $(\mathbb{Z}, +)$; $(\mathbb{Z}/n\mathbb{Z}, +)$; las unidades módulo $n$,
$(\mathbb{Z}/n\mathbb{Z})^\times = \{a : \gcd(a, n) = 1\}$ con el producto, de orden $\varphi(n)$;
las permutaciones $S_n$ con la composición (no abeliano si $n \ge 3$).

Un **subgrupo** $H \le G$ es un subconjunto cerrado por la operación y por inversos. Para
$g \in G$, la **clase lateral** es $gH = \{gh : h \in H\}$.

**Teorema (Lagrange).** Si $G$ es finito y $H \le G$, entonces $|H|$ divide a $|G|$.

*Demostración.* La relación $a \sim b \iff a^{-1}b \in H$ es de equivalencia y sus clases son las
clases laterales $aH$. La aplicación $h \mapsto ah$ es una biyección $H \to aH$, así que todas
tienen $|H|$ elementos. $G$ es unión disjunta de ellas: $|G| = [G : H] \cdot |H|$. $\blacksquare$

El **orden** de $g$ es el menor $k \ge 1$ con $g^k = e$; es el tamaño del subgrupo
$\langle g \rangle$ que genera.

**Corolario.** El orden de todo elemento divide a $|G|$; en particular $g^{|G|} = e$.

Aplicado a $(\mathbb{Z}/n\mathbb{Z})^\times$ da el **teorema de Euler**,
$a^{\varphi(n)} \equiv 1 \pmod n$ si $\gcd(a, n) = 1$, y con $n = p$ primo el **pequeño teorema
de Fermat**, $a^{p-1} \equiv 1 \pmod p$. Sobre ellos descansa RSA ([[sec-criptografia]]).

**Proposición.** $g^m = e$ si y solo si el orden de $g$ divide a $m$.

*Demostración.* Sea $k$ el orden y $m = qk + r$ con $0 \le r < k$. Entonces
$g^m = (g^k)^q g^r = g^r$, que vale $e$ solo si $r = 0$, por la minimalidad de $k$. $\blacksquare$

De ahí un algoritmo: el orden de $g$ es el menor divisor $d$ de $|G|$ con $g^d = e$.

## 2. Grupos cíclicos

$G$ es **cíclico** si $G = \langle g \rangle$ para algún $g$, llamado **generador**.

**Proposición.** En un grupo cíclico de orden $n$ generado por $g$, el elemento $g^k$ tiene orden
$n / \gcd(n, k)$. Por tanto hay exactamente $\varphi(n)$ generadores.

**Teorema.** Si $p$ es primo, $(\mathbb{Z}/p\mathbb{Z})^\times$ es cíclico de orden $p - 1$. Sus
generadores se llaman **raíces primitivas** módulo $p$.

*Idea de la demostración.* En un cuerpo, el polinomio $x^d - 1$ tiene a lo sumo $d$ raíces. Un
grupo abeliano finito en el que $x^d = e$ tiene a lo sumo $d$ soluciones para cada $d$ es
cíclico. $\blacksquare$

Que el grupo sea cíclico convierte la multiplicación módulo $p$ en suma de exponentes:
$g^a \cdot g^b = g^{a+b}$. Recuperar el exponente $a$ a partir de $g^a$ es el **logaritmo
discreto**, cuya dificultad sostiene Diffie-Hellman.

## 3. Anillos e ideales

Un **anillo** (conmutativo con unidad) es un conjunto $R$ con suma y producto tales que
$(R, +)$ es grupo abeliano, el producto es asociativo, conmutativo, con neutro $1$ y distributivo
respecto de la suma. Ejemplos: $\mathbb{Z}$, $\mathbb{Z}/n\mathbb{Z}$, los polinomios $K[x]$.

Un **ideal** $I \subseteq R$ es un subgrupo aditivo tal que $r \cdot i \in I$ para todo
$r \in R$, $i \in I$. Es exactamente lo que hace falta para que el cociente $R/I$ herede el
producto: $(a + I)(b + I) = ab + I$ está bien definido. $\mathbb{Z}/n\mathbb{Z}$ es el cociente
de $\mathbb{Z}$ por el ideal $n\mathbb{Z}$.

Un **homomorfismo** $\phi : R \to S$ respeta suma, producto y unidad.

**Primer teorema de isomorfía.** $\ker \phi$ es un ideal y $R / \ker \phi \cong \operatorname{im} \phi$.

**Teorema chino del resto.** Si $\gcd(m, n) = 1$,
$\mathbb{Z}/mn\mathbb{Z} \cong \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}$ como
anillos. En particular $\varphi(mn) = \varphi(m)\varphi(n)$, y de ahí
$\varphi(n) = n \prod_{p \mid n} \bigl(1 - \tfrac1p\bigr)$.

## 4. Cuerpos

Un **cuerpo** es un anillo en el que todo elemento no nulo tiene inverso multiplicativo.

**Proposición.** $\mathbb{Z}/n\mathbb{Z}$ es un cuerpo si y solo si $n$ es primo.

*Demostración.* Si $n = ab$ con $1 < a, b < n$, entonces $a \cdot b = 0$ y $a$ no puede tener
inverso. Si $n$ es primo y $a \not\equiv 0$, la identidad de Bézout $ua + vn = 1$ da
$u = a^{-1}$. $\blacksquare$

En $K[x]$, con $K$ un cuerpo, hay división euclídea, y un polinomio **irreducible** desempeña el
papel de un número primo: si $f$ es irreducible de grado $n$ sobre $\mathbb{F}_p$, el cociente
$\mathbb{F}_p[x]/(f)$ es un cuerpo con $p^n$ elementos, cuyos elementos son los polinomios de
grado menor que $n$ y cuyo producto se reduce módulo $f$.

**Teorema (clasificación de los cuerpos finitos).** Existe un cuerpo con $q$ elementos si y solo
si $q = p^n$ es potencia de un primo, y es único salvo isomorfismo. Se denota $\mathbb{F}_q$.

AES opera en $\mathbb{F}_{2^8} = \mathbb{F}_2[x]/(x^8 + x^4 + x^3 + x + 1)$: un byte es un
polinomio de grado menor que 8 con coeficientes en $\mathbb{F}_2$, la suma es XOR y el producto
se reduce módulo ese polinomio irreducible.

**Teorema (recuento de irreducibles).** El número de polinomios mónicos irreducibles de grado $n$
sobre $\mathbb{F}_q$ es

$$
N_q(n) = \frac{1}{n} \sum_{d \mid n} \mu(d)\, q^{n/d},
$$

donde $\mu$ es la función de Möbius ($\mu(1) = 1$; $\mu(d) = (-1)^k$ si $d$ es producto de $k$
primos distintos; $\mu(d) = 0$ si $d$ tiene un factor cuadrado).

*Demostración.* $x^{q^n} - x$ es el producto de todos los mónicos irreducibles sobre
$\mathbb{F}_q$ cuyo grado divide a $n$. Comparando grados, $q^n = \sum_{d \mid n} d\, N_q(d)$, y
la fórmula de inversión de Möbius despeja $N_q(n)$. $\blacksquare$

Valor de control: $N_2(4) = \frac14 (2^4 - 2^2) = 3$, que son $x^4 + x + 1$, $x^4 + x^3 + 1$ y
$x^4 + x^3 + x^2 + x + 1$.

## Ejercicios de demostración

1. Demuestra que un grupo de orden primo es cíclico.
2. Demuestra que todo subgrupo de un grupo cíclico es cíclico.
3. Demuestra que en un anillo finito todo elemento no nulo es una unidad o un divisor de cero.
4. Demuestra que $x^2 + x + 1$ es el único polinomio irreducible de grado 2 sobre $\mathbb{F}_2$.

## Reto

Sea $p = 1000003$, que es primo. Calcula tres enteros.

- **a.** El orden de $2$ en $(\mathbb{Z}/p\mathbb{Z})^\times$. Valor de control: el orden de $2$
  módulo $101$ es $100$.
- **b.** El número de raíces primitivas módulo $p$. Valor de control: módulo $101$ hay $40$.
- **c.** El número de polinomios mónicos irreducibles de grado $16$ sobre $\mathbb{F}_2$.

Formato de la flag, en decimal: `EXODUS{a-b-c}`
