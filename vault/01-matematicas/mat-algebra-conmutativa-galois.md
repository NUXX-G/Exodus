---
id: mat-algebra-conmutativa-galois
title: "Anillos, cuerpos y Galois: ideales, dominios, extensiones, cuerpos finitos, teoría de Galois y primeros pasos de geometría algebraica"
area: matematicas
trunk_level: 10
prerequisites: [mat-estructuras-algebraicas, mat-teoria-numeros]
academic_sources:
  - "Dummit, D. S.; Foote, R. M. Abstract Algebra, 3ª ed. Wiley, 2004."
  - "Atiyah, M. F.; Macdonald, I. G. Introduction to Commutative Algebra. Addison-Wesley, 1969."
exercises:
  - id: grado-de-una-extension
    tier: 1
    prompt: |
      ¿Cuánto vale el grado $[\mathbb Q(\sqrt2, \sqrt3) : \mathbb Q]$? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: polinomio-minimo
    tier: 1
    prompt: |
      El polinomio mínimo de $\sqrt2 + \sqrt3$ sobre $\mathbb Q$ es $x^4 + ax^3 + bx^2 + cx + d$. ¿Cuánto vale $b$? Respuesta: un entero.
    answers: ["sha256:c171d4ec282b23db89a99880cd624e9ba2940c1d894783602edab5d7481dc1ea"]
  - id: anillo-z12
    tier: 1
    prompt: |
      En el anillo $\mathbb Z/12\mathbb Z$, ¿cuántas unidades hay y cuántos ideales? Respuesta: `unidades;ideales`.
    answers: ["sha256:ba728f85805e503b8820de5e9fba209b27a4312e7a616358844a3b72a1342556"]
  - id: mcd-de-polinomios
    tier: 1
    prompt: |
      Calcula el máximo común divisor mónico de $x^4 - 1$ y $x^6 - 1$ en $\mathbb Q[x]$. Respuesta: `grado;termino_independiente`.
    answers: ["sha256:b1f713457ab0ea711879485a067897b743cba223b42f550e76278ab3a87ac617"]
  - id: cuadrados-en-fp
    tier: 1
    prompt: |
      ¿Cuántas soluciones tiene $x^2 = -1$ en $\mathbb F_{13}$? ¿Y en $\mathbb F_7$? Respuesta: `F13;F7`.
    answers: ["sha256:fed72a7858bfce28d12a8e53f92f0b10be7eb2f55a663356fd26e1a0d51695f1"]
  - id: galois-de-x3-menos-2
    tier: 2
    prompt: |
      ¿Cuál es el orden del grupo de Galois de $x^3 - 2$ sobre $\mathbb Q$? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: irreducibles-sobre-f2
    tier: 2
    prompt: |
      ¿Cuántos polinomios mónicos irreducibles de grado 4 hay sobre $\mathbb F_2$? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: elementos-primitivos
    tier: 2
    prompt: |
      ¿Cuántos elementos de $\mathbb F_{16}^*$ lo generan (elementos primitivos)? Respuesta: un entero.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: discriminante-de-una-cubica
    tier: 2
    prompt: |
      Calcula el discriminante de $x^3 - 3x + 1$ y deduce el orden de su grupo de Galois sobre $\mathbb Q$. Respuesta: `discriminante;orden`.
    answers: ["sha256:8dc8b4f4f56e6df589ed13891d63b2bd9015ebf0d8363da38578bfc90c2e34fe"]
  - id: idempotentes
    tier: 2
    prompt: |
      ¿Cuántos idempotentes ($e^2 = e$) tiene $\mathbb Z/60\mathbb Z$? (Usa el teorema chino de los restos.) Respuesta: un entero.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: enteros-de-gauss
    tier: 2
    prompt: |
      ¿Cuántos enteros de Gauss $a + bi$ tienen norma $a^2 + b^2 = 65$? Respuesta: un entero.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: dimension-de-un-cociente
    tier: 2
    prompt: |
      ¿Cuál es la dimensión, como espacio vectorial sobre $k$, de $k[x, y]/(x^2, y^3)$? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: bezout
    tier: 2
    prompt: |
      ¿Cuántas soluciones complejas tiene el sistema $x^2 + y^2 = 5$, $xy = 2$? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: x4-menos-2
    tier: 3
    prompt: |
      ¿Cuál es el grado sobre $\mathbb Q$ del cuerpo de descomposición de $x^4 - 2$? Respuesta: un entero.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: correspondencia-de-galois
    tier: 3
    prompt: |
      ¿Cuántos cuerpos intermedios hay entre $\mathbb Q$ y $\mathbb Q(\zeta_7)$, contando los dos extremos? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: construcciones-con-regla-y-compas
    tier: 3
    prompt: |
      ¿Es construible con regla y compás $\sqrt[3]{2}$ (duplicar el cubo)? ¿Y el polígono regular de 17 lados? Respuesta: `si` o `no` para cada uno, separados por `;`.
    answers: ["sha256:7a4dae830a7a38317563e00b59f9f4bf818813dec10ba189db782363d23d9432"]
---

# Anillos, cuerpos y Galois: ideales, dominios, extensiones, cuerpos finitos, teoría de Galois y primeros pasos de geometría algebraica

¿Por qué hay fórmula para resolver ecuaciones de grado 2, 3 y 4, y no para las de grado 5? ¿Por qué no se puede trisecar un ángulo con regla y compás?
¿Cómo se construye un cuerpo con 256 elementos para AES o para los códigos Reed-Solomon de un QR? Las tres preguntas se responden con la misma
herramienta: estudiar las **simetrías de las raíces** de un polinomio (el grupo de Galois) y la estructura de **anillos e ideales** que las contiene. Este
nodo sigue a [[mat-estructuras-algebraicas]] y a [[mat-teoria-numeros]], y es la base del álgebra que usan la criptografía moderna
([[sec-criptografia]]), los códigos correctores ([[mat-teoria-informacion]]) y la geometría algebraica.

## Objetivos

Al terminar sabrás:

1. Trabajar con anillos conmutativos, ideales (primos y maximales), cocientes y el teorema chino de los restos.
2. Distinguir dominios euclídeos, de ideales principales y de factorización única, con ejemplos como $\mathbb Z[i]$ y $\mathbb Q[x]$.
3. Calcular grados de extensiones de cuerpos y polinomios mínimos, y decidir construcciones con regla y compás.
4. Construir y usar cuerpos finitos $\mathbb F_{p^n}$, sus elementos primitivos y sus polinomios irreducibles.
5. Calcular grupos de Galois pequeños (discriminante, cuerpos de descomposición) y aplicar la correspondencia de Galois.
6. Entender por qué la quíntica general no es resoluble por radicales, y usar ideales para describir conjuntos de soluciones de sistemas polinómicos.

## Qué debes dominar antes

[[mat-estructuras-algebraicas]] (grupos, subgrupos normales, cocientes, anillos y cuerpos básicos, grupos de permutaciones) y [[mat-teoria-numeros]]
(congruencias, teorema chino de los restos, $\varphi$ de Euler, raíces primitivas).

> [!question] Test de entrada
> 1. ¿Cuáles son los subgrupos de $\mathbb Z/6$?
> 2. ¿Es $x^2 + 1$ irreducible en $\mathbb R[x]$? ¿Y en $\mathbb C[x]$?
> 3. ¿Cuánto vale $\varphi(15)$?
>
> Respuestas: $\{0\}$, $\langle 3\rangle$, $\langle 2\rangle$ y todo; sí, no; 8.

## 1. Para qué sirve

- **Criptografía**: AES trabaja en $\mathbb F_{2^8}$; las curvas elípticas, sobre cuerpos finitos; los sistemas postcuánticos de retículos, en anillos $\mathbb Z_q[x]/(x^n + 1)$.
- **Códigos correctores**: Reed-Solomon y BCH (CD, QR, comunicaciones espaciales) son polinomios sobre cuerpos finitos.
- **Cálculo simbólico y robótica**: las bases de Gröbner resuelven sistemas polinómicos (cinemática inversa, condiciones de equilibrio).
- **Matemáticas**: teoría de números algebraica, geometría algebraica, imposibilidad de resolver la quíntica y de las construcciones clásicas.

## 2. Anillos e ideales

Un **ideal** $I$ de un anillo conmutativo $A$ es un subgrupo aditivo con $aI \subset I$; el cociente $A/I$ es un anillo. Un ideal es **primo** si $ab \in I \Rightarrow a \in I$ o $b \in I$
(equivale a: $A/I$ es dominio), y **maximal** si no hay otro entre él y $A$ (equivale a: $A/I$ es cuerpo). En $\mathbb Z$, los ideales son $n\mathbb Z$; los maximales, $p\mathbb Z$ con $p$
primo, y $\mathbb Z/p$ es un cuerpo.

**Teorema chino de los restos (anillos).** Si $I + J = A$, $A/(I\cap J) \cong A/I \times A/J$. Así $\mathbb Z/60 \cong \mathbb Z/4\times\mathbb Z/3\times\mathbb Z/5$; como cada factor tiene solo los idempotentes 0 y 1,
$\mathbb Z/60$ tiene $2^3 = 8$ idempotentes. Es la base de la aritmética modular rápida (RSA con CRT).

**Jerarquía de dominios**: euclídeo ⇒ de ideales principales (DIP) ⇒ de factorización única (DFU). $\mathbb Z$, $k[x]$ y los enteros de Gauss $\mathbb Z[i]$ son euclídeos;
$\mathbb Z[x]$ es DFU pero no DIP (el ideal $(2, x)$ no es principal); $\mathbb Z[\sqrt{-5}]$ no es DFU: $6 = 2\cdot3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$.

**Enteros de Gauss.** La norma $N(a + bi) = a^2 + b^2$ es multiplicativa. Un primo $p \equiv 1 \pmod 4$ se parte en dos primos de Gauss ($5 = (2 + i)(2 - i)$) y $p \equiv 3$
sigue siendo primo: de ahí el teorema de Fermat de las dos sumas de cuadrados. El número de elementos de norma $n$ es $4(d_1(n) - d_3(n))$, con $d_r$ los divisores
congruentes con $r$ módulo 4.

**Anillos noetherianos.** Todo ideal está finitamente generado. **Teorema de la base de Hilbert**: si $A$ es noetheriano, $A[x]$ también; así, todo sistema de
ecuaciones polinómicas, aunque tenga infinitas ecuaciones, equivale a uno finito.

## 3. Extensiones de cuerpos

Si $K \subset L$ son cuerpos, $L$ es un espacio vectorial sobre $K$ de dimensión $[L : K]$, el **grado**. **Torre**: $[M : K] = [M : L][L : K]$. Un $\alpha$ es **algebraico** si es raíz de
un polinomio; su **polinomio mínimo** es el mónico irreducible de menor grado que lo anula, y $[K(\alpha) : K]$ es su grado. Criterios de irreducibilidad: raíces
racionales (divisores del término independiente), Eisenstein, reducción módulo $p$.

> [!example] Ejemplo resuelto 1: $\sqrt2 + \sqrt3$
> $[\mathbb Q(\sqrt2) : \mathbb Q] = 2$ y $\sqrt3 \notin \mathbb Q(\sqrt2)$ (si $\sqrt3 = a + b\sqrt2$, elevando al cuadrado sale una contradicción), así que $[\mathbb Q(\sqrt2, \sqrt3) : \mathbb Q] = 4$. Para $\alpha = \sqrt2 + \sqrt3$:
> $\alpha^2 = 5 + 2\sqrt6$, $(\alpha^2 - 5)^2 = 24$, es decir $\alpha^4 - 10\alpha^2 + 1 = 0$. No tiene raíces racionales ($\pm1$ no lo anulan) ni factores cuadráticos enteros, luego es el
> polinomio mínimo y $\mathbb Q(\alpha) = \mathbb Q(\sqrt2, \sqrt3)$: un **elemento primitivo**.

**Regla y compás.** Cada construcción resuelve ecuaciones de grado 1 o 2, así que un número construible tiene grado potencia de 2 sobre $\mathbb Q$. $\sqrt[3]2$ tiene grado 3:
**no se puede duplicar el cubo**. $\cos 20°$ es raíz de $8x^3 - 6x - 1$ (irreducible): **no se puede trisecar** $60°$. El polígono regular de $n$ lados es construible si
y solo si $\varphi(n)$ es potencia de 2 (Gauss-Wantzel): sí el de 17 lados ($\varphi(17) = 16$), no el de 7.

## 4. Cuerpos finitos

Para cada primo $p$ y cada $n \ge 1$ existe un único cuerpo con $p^n$ elementos, $\mathbb F_{p^n} = \mathbb F_p[x]/(f)$ con $f$ irreducible de grado $n$. Propiedades:

- El grupo multiplicativo $\mathbb F_{p^n}^*$ es **cíclico** de orden $p^n - 1$: tiene $\varphi(p^n - 1)$ generadores (elementos primitivos). En $\mathbb F_{16}$, $\varphi(15) = 8$.
- Todo elemento cumple $a^{p^n} = a$; el **Frobenius** $a \mapsto a^p$ es un automorfismo y genera el grupo de Galois de $\mathbb F_{p^n}/\mathbb F_p$, cíclico de orden $n$.
- El número de mónicos irreducibles de grado $n$ sobre $\mathbb F_q$ es $\frac1n\sum_{d\mid n}\mu(d)q^{n/d}$; para $q = 2$, $n = 4$: $\frac{16 - 4}{4} = 3$ ($x^4 + x + 1$, $x^4 + x^3 + 1$, $x^4 + x^3 + x^2 + x + 1$).
- $-1$ es un cuadrado en $\mathbb F_p$ ($p$ impar) si y solo si $p \equiv 1 \pmod 4$.

AES usa $\mathbb F_{2^8} = \mathbb F_2[x]/(x^8 + x^4 + x^3 + x + 1)$: sumar es XOR y multiplicar, producto de polinomios reducido.

## 5. Teoría de Galois

Una extensión finita $L/K$ es **de Galois** si es el cuerpo de descomposición de un polinomio separable. Su **grupo de Galois** $\operatorname{Gal}(L/K)$ son los automorfismos
de $L$ que fijan $K$; permutan las raíces y $|\operatorname{Gal}(L/K)| = [L : K]$.

**Teorema fundamental (correspondencia de Galois).** Hay una biyección que invierte inclusiones entre los **subgrupos** $H$ de $G = \operatorname{Gal}(L/K)$ y los **cuerpos intermedios**
$K \subset M \subset L$: $H \mapsto L^H$ (el cuerpo fijo). Además $[L : L^H] = |H|$, y $M/K$ es de Galois si y solo si el subgrupo correspondiente es normal.

**Ejemplos.**

- $\mathbb Q(\sqrt2, \sqrt3)$: grupo $\mathbb Z/2\times\mathbb Z/2$, tres subgrupos de orden 2 ↔ tres cuerpos intermedios $\mathbb Q(\sqrt2)$, $\mathbb Q(\sqrt3)$, $\mathbb Q(\sqrt6)$.
- $x^3 - 2$: raíces $\sqrt[3]2\,\omega^k$; cuerpo de descomposición $\mathbb Q(\sqrt[3]2, \omega)$ de grado 6, grupo $S_3$.
- $x^4 - 2$: cuerpo $\mathbb Q(\sqrt[4]2, i)$ de grado 8, grupo diédrico $D_4$.
- $\mathbb Q(\zeta_n)$ (ciclotómico): grupo $(\mathbb Z/n)^*$, abeliano. Para $n = 7$, cíclico de orden 6: cuatro subgrupos, cuatro cuerpos intermedios.

**Cúbicas y discriminante.** Para una cúbica irreducible, el grupo es $A_3$ (orden 3) si el **discriminante** $\Delta = \prod_{i<j}(r_i - r_j)^2$ es un cuadrado en $\mathbb Q$, y $S_3$ si no. Para
$x^3 + px + q$, $\Delta = -4p^3 - 27q^2$.

> [!example] Ejemplo resuelto 2: dos cúbicas
> $x^3 - 2$: $\Delta = -27\cdot4 = -108$, no es cuadrado ⇒ grupo $S_3$ de orden 6. $x^3 - 3x + 1$: $\Delta = -4(-3)^3 - 27 = 81 = 9^2$ ⇒ grupo $A_3$, cíclico de orden 3; en efecto, sus raíces son
> $2\cos\frac{2\pi}{9}$, $2\cos\frac{4\pi}{9}$, $2\cos\frac{8\pi}{9}$, y cualquiera de ellas da las otras dos como polinomios ($r^2 - 2$ lleva una en la siguiente): el cuerpo de una raíz ya contiene las tres.

**Resolubilidad por radicales.** Un polinomio es resoluble por radicales si y solo si su grupo de Galois es **resoluble** (tiene una cadena de subgrupos
normales con cocientes abelianos). $S_3$ y $S_4$ lo son (de ahí las fórmulas de Cardano y Ferrari); $S_5$ no, porque $A_5$ es simple y no abeliano. Un polinomio
de grado 5 irreducible con exactamente dos raíces no reales, como $x^5 - 4x + 2$, tiene grupo $S_5$: **no hay fórmula por radicales** para sus raíces (Abel-Ruffini,
Galois).

## 6. Ideales y geometría: primeros pasos

Un sistema de ecuaciones polinómicas $f_1 = \cdots = f_m = 0$ depende solo del **ideal** $(f_1, \ldots, f_m)$: cualquier combinación $\sum g_if_i$ también se anula en las soluciones.

- **Nullstellensatz de Hilbert** (sobre $\mathbb C$): los ideales maximales de $\mathbb C[x_1, \ldots, x_n]$ son los $(x_1 - a_1, \ldots, x_n - a_n)$; un sistema no tiene solución compleja si y solo si
  1 pertenece al ideal.
- **Bézout**: dos curvas planas de grados $d$ y $e$ sin componentes comunes se cortan en a lo sumo $de$ puntos (exactamente $de$ contando multiplicidades y
  puntos del infinito).
- Si el sistema tiene finitas soluciones, $k[x, y]/I$ es un espacio vectorial de dimensión finita (igual al número de soluciones contadas con multiplicidad); para
  ideales monomiales como $(x^2, y^3)$, la dimensión es el número de monomios fuera del ideal, $2\cdot3 = 6$.
- Las **bases de Gröbner** (algoritmo de Buchberger) generalizan la división de polinomios y la eliminación gaussiana: permiten decidir si un polinomio está
  en un ideal y eliminar variables.

> [!example] Ejemplo resuelto 3: un sistema y su resultante (con menos ayuda)
> Resuelve $x^2 + y^2 = 5$, $xy = 2$. Sustituye $y = 2/x$ para eliminar $y$ (la resultante): $x^4 - 5x^2 + 4 = 0$. Factoriza como $(x^2 - 1)(x^2 - 4)$ y comprueba que salen cuatro
> soluciones, justo la cota de Bézout $2\cdot2$. Interpreta geométricamente: una circunferencia y una hipérbola.

## 7. Comprobar con un programa

$\mathbb F_{16}$ construido a mano y sus elementos primitivos, los irreducibles de grado 4 sobre $\mathbb F_2$, el discriminante de las cúbicas del ejemplo 2 y los
idempotentes de $\mathbb Z/60$.

```python
import math

# 1. F16 = F2[x]/(x^4 + x + 1): multiplicación, orden de cada elemento y elementos primitivos (φ(15) = 8).
def mul16(a, b):
    r = 0
    for i in range(4):
        if b >> i & 1:
            r ^= a << i
    for d in range(7, 3, -1):
        if r >> d & 1:
            r ^= 0b10011 << (d - 4)
    return r

def orden(g):
    x, k = g, 1
    while x != 1:
        x, k = mul16(x, g), k + 1
    return k

primitivos = [g for g in range(1, 16) if orden(g) == 15]
assert len(primitivos) == 8 and all(15 % orden(g) == 0 for g in range(1, 16))

# 2. Irreducibles mónicos de grado 4 sobre F2: los que no son producto de dos de grado ≥ 1.
def mulF2(a, b):
    r = 0
    for i in range(b.bit_length()):
        if b >> i & 1:
            r ^= a << i
    return r

reducibles = {mulF2(a, b) for a in range(2, 32) for b in range(2, 32)}
irreducibles = [p for p in range(16, 32) if p not in reducibles]
assert [bin(p) for p in irreducibles] == ["0b10011", "0b11001", "0b11111"]

# 3. Ejemplo resuelto 2: discriminantes de x³ − 2 (−108) y x³ − 3x + 1 (81 = 9²) con las raíces.
raices = [2 * math.cos(2 * math.pi * k / 9) for k in (1, 2, 4)]
D = ((raices[0] - raices[1]) * (raices[0] - raices[2]) * (raices[1] - raices[2])) ** 2
assert abs(D - 81) < 1e-9 and abs(raices[0] ** 2 - 2 - raices[1]) < 1e-12
assert -4 * 0**3 - 27 * (-2) ** 2 == -108

# 4. Teorema chino: Z/60 tiene 2³ = 8 idempotentes.
idem = [e for e in range(60) if e * e % 60 == e]
print("primitivos de F16:", len(primitivos), "| irreducibles de grado 4:", len(irreducibles), "| idempotentes de Z/60:", idem)
assert len(idem) == 8
```

## 8. Errores típicos

- Confundir "irreducible" con "sin raíces": $x^4 + 4$ no tiene raíces racionales pero es $(x^2 + 2x + 2)(x^2 - 2x + 2)$.
- Olvidar que el grado de una extensión compuesta no es siempre el producto ($\mathbb Q(\sqrt2, \sqrt8) = \mathbb Q(\sqrt2)$).
- Construir $\mathbb F_{p^n}$ como $\mathbb Z/p^n$: este no es un cuerpo si $n > 1$.
- Tomar como grupo de Galois de $x^3 - 2$ el cíclico $\mathbb Z/3$: el cuerpo de una raíz real no contiene las otras dos.
- Pensar que Abel-Ruffini prohíbe resolver **toda** quíntica: solo la general (o las de grupo no resoluble); $x^5 - 2$ sí se resuelve.
- Confundir ideales primos con elementos primos en dominios que no son DFU.

## 9. Resumen

- Ideales, cocientes; primo ⇔ cociente dominio, maximal ⇔ cociente cuerpo; teorema chino de los restos.
- Euclídeo ⇒ DIP ⇒ DFU; $\mathbb Z[i]$, $\mathbb Z[\sqrt{-5}]$; noetherianos y base de Hilbert.
- Grado de extensiones, torre, polinomio mínimo, elemento primitivo; regla y compás (grado potencia de 2; Gauss-Wantzel).
- $\mathbb F_{p^n}$ único, grupo multiplicativo cíclico, Frobenius, conteo de irreducibles.
- Galois: $|\operatorname{Gal}| = [L : K]$, correspondencia subgrupos-cuerpos, discriminante de cúbicas, $x^4 - 2$ y $D_4$, ciclotómicos; resolubilidad y $S_5$.
- Ideales y sistemas: Nullstellensatz, Bézout, dimensión del cociente, Gröbner.

## Repaso: lo que debe quedarte dentro de un mes

1. Un cociente por un ideal maximal es un cuerpo: así se fabrican $\mathbb F_{p^n}$ y $\mathbb Q(\alpha)$.
2. Grados de extensiones = dimensiones; las construcciones con regla y compás solo dan grados $2^k$.
3. El grupo de Galois permuta raíces y sus subgrupos son los cuerpos intermedios.
4. Resoluble por radicales ⇔ grupo resoluble; $S_5$ no lo es.
5. Un sistema polinómico es un ideal: se razona con el ideal, no con las ecuaciones sueltas.

## Siguiente

`sec-criptoanalisis` y `sec-criptografia-aplicada` (cuerpos finitos y retículos en criptografía real), `cua-algoritmos-correccion-errores` (códigos
cuánticos) y `ing-comunicaciones` (Reed-Solomon). La aritmética de base está en [[mat-teoria-numeros]].
