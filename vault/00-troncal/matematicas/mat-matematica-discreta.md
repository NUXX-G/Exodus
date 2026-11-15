---
id: mat-matematica-discreta
title: "Matemática discreta: lógica, inducción, recurrencias, grafos y aritmética modular"
area: matematicas
trunk_level: 7
prerequisites: [mat-combinatoria-probabilidad-basica, mat-algebra-secundaria]
academic_sources:
  - "Rosen, K. H. Discrete Mathematics and Its Applications, 8ª ed. McGraw-Hill, 2019."
  - "Graham, R. L.; Knuth, D. E.; Patashnik, O. Concrete Mathematics: A Foundation for Computer Science, 2ª ed. Addison-Wesley, 1994."
  - "Lehman, E.; Leighton, F. T.; Meyer, A. R. Mathematics for Computer Science. MIT OpenCourseWare (2018, gratuito)."
  - "Diestel, R. Graph Theory, 5ª ed. Springer, 2017."
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
hints:
  - "Concepto: la matemática discreta estudia lo que se cuenta, no lo que se mide: conjuntos, grafos, restos. Casi todo se prueba por inducción o con un argumento de conteo; casi todo se comprueba con un programa que enumere los casos pequeños. Para una recurrencia lineal, busca soluciones de la forma r^n y resuelve la ecuación característica."
  - "Herramienta: enumera con bucles o con itertools (product, permutations, combinations) para comprobar tus fórmulas en tamaños pequeños; pow(a, b, m) calcula potencias modulares exactas y pow(a, -1, m) el inverso modular; math.comb y math.factorial para combinatoria."
  - "Documentación oficial: docs.python.org/3/library/itertools.html, docs.python.org/3/library/math.html (comb, gcd, perm); pow con tres argumentos en docs.python.org/3/library/functions.html#pow; Rosen, capítulos de lógica, inducción, recurrencias, grafos y teoría de números."
exercises:
  - id: filas-tabla-de-verdad
    tier: 1
    prompt: |
      ¿Cuántas filas (combinaciones de valores de verdad) tiene la tabla de verdad de una fórmula con $5$ variables proposicionales? Respuesta: un entero.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: partes-de-un-conjunto
    tier: 1
    prompt: |
      Si $A$ tiene $6$ elementos, ¿cuántos subconjuntos tiene $A$ (contando el vacío y el propio $A$)? Respuesta: un entero.
    answers: ["sha256:a68b412c4282555f15546cf6e1fc42893b7e07f271557ceb021821098dd66c1b"]
  - id: apretones-de-manos
    tier: 1
    prompt: |
      En una reunión de $12$ personas todas se dan la mano **una vez** con cada una de las demás. ¿Cuántos apretones hay? Respuesta: un entero.
    answers: ["sha256:3ada92f28b4ceda38562ebf047c6ff05400d4c572352a1142eedfef67d21e662"]
  - id: implicacion-logica
    tier: 2
    prompt: |
      ¿En cuántas de las $8$ asignaciones de valores de verdad a $p, q, r$ es **verdadera** la proposición $(p \lor q) \rightarrow \lnot r$? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: suma-de-cuadrados
    tier: 2
    prompt: |
      Calcula $\displaystyle\sum_{k=1}^{40}k^2$ (se demuestra por inducción que vale $\frac{n(n+1)(2n+1)}{6}$). Respuesta: un entero.
    answers: ["sha256:b3c50838fe758e187c428a6490d6de846c35793552b778c10b431c9ade3a9f33"]
  - id: recurrencia-lineal
    tier: 2
    prompt: |
      La sucesión cumple $a_n = 3a_{n-1} - 2a_{n-2}$ con $a_0 = 1$ y $a_1 = 3$. ¿Cuánto vale $a_{12}$? (Pista: la ecuación característica $x^2 - 3x + 2 = 0$ tiene raíces $1$ y $2$.) Respuesta: un entero.
    answers: ["sha256:d31fd82522aa23afef527a708684d548837f6778ddde55a1c1b4ae1119d7f053"]
  - id: relaciones-de-equivalencia
    tier: 2
    prompt: |
      ¿Cuántas **relaciones de equivalencia** distintas existen sobre un conjunto de $4$ elementos? (Cada una corresponde a una partición del conjunto.) Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: funciones-sobreyectivas
    tier: 2
    prompt: |
      ¿Cuántas funciones **sobreyectivas** hay de un conjunto de $6$ elementos a uno de $3$ elementos? (Usa inclusión-exclusión.) Respuesta: un entero.
    answers: ["sha256:84f01dd97c687fb28a296bcc2ef1801446ea7405860595924eb2b5bb634718d1"]
  - id: aristas-de-k8
    tier: 2
    prompt: |
      El grafo completo $K_8$ tiene una arista entre cada par de sus $8$ vértices. ¿Cuántas aristas tiene? Respuesta: un entero.
    answers: ["sha256:59e19706d51d39f66711c2653cd7eb1291c94d9b55eb14bda74ce4dc636d015a"]
  - id: hojas-de-un-arbol
    tier: 2
    prompt: |
      Un árbol tiene exactamente $3$ vértices de grado $3$ y todos los demás son hojas (grado $1$). ¿Cuántas hojas tiene? (Usa que la suma de los grados es $2(n - 1)$ en un árbol de $n$ vértices.) Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: inverso-modular
    tier: 3
    prompt: |
      Halla el inverso de $7$ módulo $26$: el entero $x$ con $0 < x < 26$ tal que $7x \equiv 1 \pmod{26}$. Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: pequeno-teorema-de-fermat
    tier: 3
    prompt: |
      Calcula $3^{100} \bmod 7$. (Pista: $3^6 \equiv 1 \pmod 7$.) Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: desarreglos
    tier: 3
    prompt: |
      Un **desarreglo** es una permutación sin puntos fijos (ningún elemento queda en su sitio). ¿Cuántos desarreglos tiene un conjunto de $8$ elementos? ($D_n = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}$.) Respuesta: un entero.
    answers: ["sha256:8315a6b19a85015a2566d4521f986957ff9ba77143246549a27ccc949ce6b350"]
  - id: cadenas-sin-unos-seguidos
    tier: 3
    prompt: |
      ¿Cuántas cadenas binarias de longitud $15$ **no** contienen dos unos consecutivos? (Sale una sucesión de Fibonacci.) Respuesta: un entero.
    answers: ["sha256:eb57f949956cc9f3c32eb7f249bbe56a74c253015af4dddb0c98cde49157cbd0"]
  - id: rsa-de-juguete
    tier: 3
    prompt: |
      RSA con $n = 3233$ ($= 61\cdot53$) y exponente público $e = 17$. Se cifra el mensaje $m = 65$ como $c = m^e \bmod n$. ¿Cuánto vale $c$? (Es un ejemplo de juguete: con $n$ tan pequeño se factoriza al instante.) Respuesta: un entero.
    answers: ["sha256:10f6b6ad5e069f3b97acb8979dc276b9a1c04beb48dd9fa7c8169a142879474a"]
  - id: teorema-chino-del-resto
    tier: 3
    prompt: |
      Halla el menor entero positivo $x$ con $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$ y $x \equiv 2 \pmod 7$ (problema del matemático chino Sunzi). Respuesta: un entero.
    answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
---

# Matemática discreta: lógica, inducción, recurrencias, grafos y aritmética modular

Los ordenadores trabajan con cosas **discretas**: bits, enteros, cadenas, redes, estados. La matemática discreta es el lenguaje de la informática teórica y práctica: de ella salen la lógica de los circuitos, la
corrección de los algoritmos, el análisis de redes, la criptografía y las bases de datos. Este nodo reúne sus herramientas centrales con demostraciones y con comprobación por programa.

## Objetivos

Al terminar sabrás:

1. Manejar lógica proposicional y de predicados, y negar enunciados con cuantificadores.
2. Operar con conjuntos, relaciones (equivalencia, orden) y funciones (inyectivas, sobreyectivas, biyectivas).
3. Demostrar por **inducción** (simple y fuerte) y por el **principio del palomar**.
4. Resolver **recurrencias** lineales y plantear problemas de conteo recursivo.
5. Estudiar **grafos y árboles**: grados, lema del apretón de manos, caminos de Euler.
6. Calcular con **aritmética modular**: inversos, Fermat, teorema chino del resto y un RSA de juguete.

> [!question] Test de entrada
> 1. ¿Cuántos subconjuntos tiene un conjunto de $3$ elementos? 2. ¿Cuál es el resto de $100$ entre $7$? 3. Si «Todos los gatos son mamíferos» es cierto, ¿se puede deducir «Todos los mamíferos son gatos»?
>
> Respuestas: $8$; $2$; **no** (el recíproco no se deduce).

## 1. Para qué sirve

- **Programar con rigor**: razonar sobre bucles y recursión (invariantes e inducción: ver [[prog-algoritmos]]).
- **Circuitos y hardware**: la lógica booleana es la de [[ing-logica-digital]].
- **Redes y datos**: grafos para rutas, redes sociales, dependencias, bases de datos.
- **Criptografía**: la aritmética modular es la base de RSA y Diffie-Hellman ([[sec-criptografia]], [[sec-fundamentos]]).

## 2. Lógica

Una **proposición** es un enunciado con valor de verdad (verdadero o falso). Se combinan con conectivos: $\lnot p$ (no), $p\land q$ (y), $p\lor q$ (o), $p\to q$ (si $p$ entonces $q$), $p\leftrightarrow q$ (equivale).
**La implicación $p\to q$ solo es falsa cuando $p$ es verdadera y $q$ falsa**: «si llueve, me mojo» no se contradice si no llueve. Una fórmula con $n$ variables tiene una tabla de verdad de $2^n$ filas.

**Equivalencias útiles:** $p\to q \equiv \lnot p\lor q$ (**implicación como disyunción**); **contrarrecíproco** $p\to q \equiv \lnot q\to\lnot p$ (¡**no** el recíproco $q\to p$!); **De Morgan** $\lnot(p\land q)\equiv\lnot p\lor\lnot q$ y $\lnot(p\lor q)\equiv\lnot p\land\lnot q$;
distributivas. Dos fórmulas son equivalentes si tienen la misma tabla. **Ejemplo:** $(p\lor q)\to\lnot r$ es falsa solo cuando $p\lor q$ y $r$ son verdaderas: $3$ casos de $8$, es decir, es verdadera en $5$.

**Cuantificadores.** $\forall x\,P(x)$ (para todo) y $\exists x\,P(x)$ (existe). **Negación:** $\lnot\forall x\,P(x)\equiv\exists x\,\lnot P(x)$ y $\lnot\exists x\,P(x)\equiv\forall x\,\lnot P(x)$.
«No todos los números primos son impares» es «existe un primo que no es impar» (el $2$). **El orden de los cuantificadores importa:** «para todo $x$ existe $y$ con $y > x$» es cierto en los enteros; «existe $y$ tal que para todo $x$, $y > x$», falso.

**Técnicas de demostración:** directa; por **contrarrecíproco**; por **reducción al absurdo** (suponer lo contrario y llegar a una contradicción, como la irracionalidad de $\sqrt2$ en [[mat-algebra-secundaria]]); por **casos**; por **contraejemplo** (para refutar un «para todo»); por **inducción**.

## 3. Conjuntos, relaciones y funciones

Un **conjunto** es una colección de elementos sin orden ni repetición. Operaciones: unión $A\cup B$, intersección $A\cap B$, diferencia $A\setminus B$, complemento, producto cartesiano $A\times B$ (pares ordenados). Si $|A| = n$, entonces $|A\times B| = n|B|$ y el **conjunto de partes** $\mathcal P(A)$ tiene
$2^n$ elementos (cada elemento está o no en el subconjunto: principio del producto). Las leyes de De Morgan valen también para conjuntos.

**Relaciones.** Una relación $R$ en $A$ es un subconjunto de $A\times A$. Es **de equivalencia** si es **reflexiva**, **simétrica** y **transitiva**; entonces parte $A$ en **clases de equivalencia** disjuntas, y recíprocamente toda **partición** define una equivalencia. El número de relaciones de
equivalencia en un conjunto de $n$ elementos es el **número de Bell**: $1, 1, 2, 5, 15, 52, 203, \dots$ ($n = 0, 1, 2, \dots$); para $4$ elementos hay $15$. Es **de orden (parcial)** si es reflexiva, **antisimétrica** y transitiva (divisibilidad entre naturales, inclusión de conjuntos), y se dibuja con un **diagrama de Hasse**.
**Ejemplo:** «tener el mismo resto al dividir entre $m$» es de equivalencia y da las **clases módulo $m$** ([[mat-numeros-naturales]]).

**Funciones.** $f: A\to B$ es **inyectiva** si elementos distintos tienen imágenes distintas, **sobreyectiva** si todo elemento de $B$ es imagen, y **biyectiva** si es ambas (tiene inversa). Con $|A| = m$ y $|B| = n$: hay $n^m$ funciones; $n(n-1)\cdots(n - m + 1)$ inyectivas; y las **sobreyectivas** se cuentan por
inclusión-exclusión: de $5$ a $3$ elementos, $3^5 - 3\cdot2^5 + 3 = 150$. Dos conjuntos tienen el mismo **cardinal** si hay una biyección entre ellos; Cantor demostró que $|\mathcal P(A)| > |A|$ también para conjuntos infinitos, y que $\mathbb R$ **no es numerable**.

## 4. Inducción

**Principio de inducción.** Para probar $P(n)$ para todo $n \ge n_0$: **(base)** $P(n_0)$ es cierta; **(paso)** si $P(k)$ es cierta ($k \ge n_0$), entonces $P(k+1)$ lo es. Funciona porque los naturales son el conjunto **bien ordenado** y «encadenado» por el sucesor: si $P$ fallase en algún $n$, habría un mínimo $n$ donde falla, y el paso lo contradice.

**Ejemplo 1.** $1 + 3 + 5 + \cdots + (2n - 1) = n^2$. *Base:* $n = 1$, $1 = 1$. *Paso:* si vale para $k$, entonces $1 + \cdots + (2k - 1) + (2k + 1) = k^2 + 2k + 1 = (k+1)^2$. $\blacksquare$
**Ejemplo 2.** $\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$: el paso es $\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \frac{(n+1)(n+2)(2n+3)}{6}$ (se comprueba desarrollando). Con $n = 30$: $9455$.
**Ejemplo 3 (divisibilidad).** $6 \mid 7^n - 1$: si $7^k - 1 = 6m$, entonces $7^{k+1} - 1 = 7(7^k - 1) + 6 = 42m + 6 = 6(7m + 1)$. $\blacksquare$

**Inducción fuerte:** el paso supone $P(j)$ cierta para **todos** los $j \le k$. **Ejemplo:** todo $n\ge2$ es producto de primos (si $n$ es compuesto, $n = ab$ con $a, b < n$ y ambos son productos de primos). **Cuidado** con las falsas demostraciones: «todos los caballos son del mismo color»
falla porque el paso no vale para $k = 1$. **Siempre se comprueba la base y que el paso valga desde ella.**

**Principio del palomar:** $n + 1$ objetos en $n$ cajas implican una caja con al menos dos. Generalizado: $m$ objetos en $n$ cajas dejan alguna con al menos $\lceil m/n\rceil$. **Ejemplo:** entre $11$ números de $\{1,\dots,20\}$ hay dos que suman $21$ (se agrupan en las $10$ parejas $\{a, 21 - a\}$).

## 5. Recurrencias

Una **recurrencia** define una sucesión en función de términos anteriores. Aparecen al analizar algoritmos y problemas de conteo. **Torres de Hanoi:** para mover $n$ discos hay que mover $n-1$, mover el mayor y volver a mover $n - 1$: $H_n = 2H_{n-1} + 1$, $H_0 = 0$, de donde
$H_n = 2^n - 1$ (inducción). Con $64$ discos, $2^{64}-1\approx1{,}8\cdot10^{19}$ movimientos.

**Recurrencias lineales homogéneas de coeficientes constantes.** Para $a_n = c_1a_{n-1} + c_2a_{n-2}$ se prueban soluciones $a_n = r^n$: sustituyendo, $r^2 = c_1r + c_2$ (**ecuación característica**). Si tiene raíces distintas $r_1, r_2$, la solución general es $a_n = A r_1^n + B r_2^n$, con $A, B$ fijadas por las condiciones iniciales.
**Ejemplo:** $a_n = 3a_{n-1} - 2a_{n-2}$ con $a_0 = 1$, $a_1 = 3$: $r^2 - 3r + 2 = 0$, $r = 1, 2$; $A + B = 1$, $A + 2B = 3$: $A = -1$, $B = 2$: $a_n = 2^{n+1} - 1$ ($a_{10} = 2047$).
**Fibonacci:** $F_n = F_{n-1} + F_{n-2}$ da $r^2 = r + 1$, $r = \frac{1\pm\sqrt5}{2}$ y la **fórmula de Binet** $F_n = \frac{\varphi^n - (1-\varphi)^n}{\sqrt5}$ (la misma que sale de los autovalores en [[mat-algebra-lineal-1]]).

**Conteo recursivo.** Las cadenas binarias de longitud $n$ **sin dos unos seguidos**: si terminan en $0$, el resto es cualquier cadena válida de longitud $n - 1$; si terminan en $01$ (o son «1» solas), el resto es válido de longitud $n - 2$. Luego $c_n = c_{n-1} + c_{n-2}$ con $c_1 = 2$, $c_2 = 3$: son los **números de Fibonacci**: $c_{12} = 377 = F_{14}$.

**Desarreglos.** Permutaciones sin puntos fijos: por inclusión-exclusión, $D_n = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}$ ($D_4 = 9$, $D_8 = 14\,833$). La proporción $D_n/n!\to1/e\approx0{,}368$: **al repartir al azar $n$ regalos, la probabilidad de que nadie reciba el suyo se acerca a $37\,\%$**, sea cual sea $n$.

## 6. Grafos

Un **grafo** $G = (V, E)$ tiene **vértices** y **aristas**. El **grado** de un vértice es el número de aristas que le llegan. Ejemplos: $K_n$ (completo) tiene $\binom n2$ aristas ($K_8$: $28$).

**Lema del apretón de manos.** $\sum_{v}\deg(v) = 2|E|$ (cada arista se cuenta en sus dos extremos). *Consecuencia:* **el número de vértices de grado impar es par**, y en una fiesta el número de personas que dan la mano a un número impar de gente es par.

**Caminos y conexión.** Un grafo es **conexo** si hay camino entre cualquier par. **Árboles:** grafos conexos sin ciclos. **Teorema:** un árbol de $n$ vértices tiene exactamente $n - 1$ aristas.
*Demostración (inducción).* Todo árbol con $n\ge2$ vértices tiene al menos una hoja (grado $1$); quitarla da un árbol de $n-1$ vértices con una arista menos; por hipótesis tiene $n - 2$ aristas. $\blacksquare$
**Ejemplo:** un árbol con $3$ vértices de grado $3$ y el resto hojas: la suma de grados es $9 + L = 2(n-1) = 2(2 + L)$, luego $L = 5$ hojas y $n = 8$.

**Euler y los puentes de Königsberg (1736).** Un **circuito euleriano** (pasa por cada arista exactamente una vez y vuelve) existe en un grafo conexo **si y solo si todos los grados son pares**; un **camino euleriano** (sin volver), si hay **exactamente $0$ o $2$** vértices de grado impar.
Los $4$ sectores de Königsberg tienen grados $3, 3, 3, 5$: **cuatro** impares, luego no hay recorrido posible. Nació así la teoría de grafos.
**Grafos planos y coloreado.** Para un grafo plano conexo, $V - E + F = 2$ (fórmula de Euler); y todo grafo plano se puede colorear con $4$ colores (teorema de los cuatro colores, demostrado con ayuda de ordenador en 1976). Los grafos de dependencias, las redes de comunicaciones y los problemas de asignación (horarios, frecuencias) se modelan con coloreado.

Los algoritmos de grafos (BFS, DFS, Dijkstra) están en [[prog-estructuras-datos]] y [[prog-algoritmos]].

## 7. Aritmética modular

Dos enteros son **congruentes módulo $m$**, $a\equiv b\pmod m$, si $m\mid a - b$. La congruencia es de equivalencia, y respeta la suma y el producto; los restos $\{0, 1, \dots, m-1\}$ forman el **anillo $\mathbb Z_m$**. En $\mathbb Z_m$ siempre se puede sumar, restar y multiplicar; **dividir** exige un **inverso**.

**Teorema.** $a$ tiene inverso módulo $m$ si y solo si $\gcd(a, m) = 1$.
*Demostración.* Por Bézout (el algoritmo de Euclides extendido de [[prog-algoritmos]]), $\gcd(a, m) = 1$ implica $ax + my = 1$ para ciertos enteros, luego $ax\equiv1\pmod m$. Recíprocamente, si $ax\equiv1$ entonces $ax - 1 = mk$, y cualquier divisor común de $a$ y $m$ divide a $1$. $\blacksquare$
**Ejemplo:** $7^{-1}\bmod 26$: $26 = 3\cdot7 + 5$, $7 = 5 + 2$, $5 = 2\cdot2 + 1$; hacia atrás, $1 = 3\cdot26 - 11\cdot7$, luego $7^{-1}\equiv-11\equiv15$ (comprobación: $7\cdot15 = 105 = 4\cdot26 + 1$ $\checkmark$).

**Pequeño teorema de Fermat.** Si $p$ es primo y $p\nmid a$, entonces $a^{p-1}\equiv1\pmod p$.
*Demostración.* Los números $a, 2a, \dots, (p-1)a$ son, módulo $p$, una **permutación** de $1, \dots, p - 1$ (distintos y no nulos, por el teorema anterior); multiplicándolos todos, $a^{p-1}(p-1)!\equiv(p-1)!$ y se cancela $(p-1)!$, que es invertible. $\blacksquare$
**Uso:** $3^{100}\bmod7$: como $3^6\equiv1$, $3^{100} = 3^{6\cdot16 + 4}\equiv3^4 = 81\equiv4$. Para exponentes enormes se usa la **exponenciación modular rápida** ($O(\log n)$ productos).

**Teorema chino del resto.** Si $m_1, m_2$ son coprimos, el sistema $x\equiv a_1\pmod{m_1}$, $x\equiv a_2\pmod{m_2}$ tiene **una única solución módulo $m_1m_2$**. **Ejemplo:** $x\equiv1\pmod3$ y $x\equiv2\pmod5$: $x = 7$ (módulo $15$). Permite calcular con módulos grandes por trozos y se usa para acelerar RSA.

**RSA de juguete.** Se eligen primos $p = 61$, $q = 53$; $n = pq = 3233$; $\varphi(n) = (p-1)(q-1) = 3120$; un exponente público $e = 17$ (coprimo con $3120$) y el privado $d = e^{-1}\bmod3120 = 2753$ ($17\cdot2753 = 15\cdot3120 + 1$). **Cifrar:** $c = m^e\bmod n$. **Descifrar:** $m = c^d\bmod n$. Con $m = 42$: $c = 42^{17}\bmod3233 = 2557$, y $2557^{2753}\bmod3233 = 42$.
Funciona porque $m^{ed}\equiv m$ (consecuencia del teorema de Euler, generalización de Fermat). Su seguridad real exige $n$ de miles de bits, donde **factorizar $n$** para obtener $\varphi(n)$ es inviable; aquí cualquiera factoriza $3233$ a mano ([[sec-criptografia]]).

```python
p, q, e = 61, 53, 17
n, phi = p * q, (p - 1) * (q - 1)
d = pow(e, -1, phi)                       # inverso modular: 2753
m = 42
c = pow(m, e, n)
assert (n, phi, d, c) == (3233, 3120, 2753, 2557) and pow(c, d, n) == m
assert pow(7, -1, 26) == 15 and pow(3, 100, 7) == 4
```

## 8. Errores típicos

- Confundir una implicación con su **recíproco** ($p\to q$ no es $q\to p$); aceptar el contrarrecíproco, sí.
- Negar mal un cuantificador (olvidar cambiar $\forall$ por $\exists$).
- Una inducción **sin base**, o con un paso que no funciona para el primer caso.
- Contar **dos veces** (orden que no importa) o **olvidar casos** (inclusión-exclusión).
- Dividir en aritmética modular sin comprobar que el divisor es **coprimo** con el módulo.
- Aplicar Fermat con $p$ compuesto, o con $p \mid a$.
- Cuestión de **grafos**: contar una arista dos veces, o suponer que «sin ciclos» implica conexo.

## Repaso: lo que debe quedarte dentro de un mes

1. $p\to q\equiv\lnot p\lor q\equiv\lnot q\to\lnot p$; De Morgan; negación de cuantificadores.
2. $|\mathcal P(A)| = 2^{|A|}$; equivalencia = reflexiva + simétrica + transitiva = partición; sobreyectivas por inclusión-exclusión.
3. Inducción: base y paso; fuerte; palomar.
4. Recurrencia lineal: ecuación característica; Fibonacci; Hanoi $2^n - 1$.
5. $\sum\deg = 2|E|$; árbol $= n - 1$ aristas; Euler: grados pares; $a^{-1}$ existe $\iff\gcd(a, m) = 1$; Fermat; RSA.

## Siguiente

`mat-analisis-real` y `mat-estructuras-algebraicas` llevan estas ideas de rigor al análisis y al álgebra abstracta; y `prog-algoritmos` y `sec-criptografia` las usan a diario.
