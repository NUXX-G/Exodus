---
id: mat-numeros-naturales
title: "Números naturales y aritmética"
area: matematicas
trunk_level: 0
prerequisites: []
academic_sources:
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
  - "Hardy, G. H.; Wright, E. M. An Introduction to the Theory of Numbers, 6ª ed. (rev. Heath-Brown y Silverman). Oxford University Press, 2008."
  - "Euclides. Elementos, libro VII, proposiciones 1 y 2 (algoritmo de Euclides). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/bookVII/bookVII.html"
  - "Pólya, G. How to Solve It. Princeton University Press, 1945 (las cuatro fases de la resolución de problemas)."
hints:
  - "Concepto: casi todos los problemas difíciles de este nodo se resuelven descomponiendo en factores primos. Los exponentes de la descomposición te dan el número de divisores, su suma, los ceros finales (el exponente del 5 en un factorial) y el periodo de las últimas cifras de una potencia."
  - "Herramienta: en Python, `math.gcd`, `pow(a, b, m)` (potencia modular exacta) y `sympy.factorint(n)` (factorización). Para comprobar a mano un resultado contado, escribe el recuento más simple posible (un bucle) y úsalo como segundo método."
  - "Documentación oficial: docs.python.org/3/library/math.html (gcd, lcm, factorial) y docs.python.org/3/library/functions.html#pow (pow con tres argumentos); Niven et al., capítulos 1 y 2 (divisibilidad y congruencias); Euclides, Elementos VII.1-2."
exercises:
  - id: binario-2026
    tier: 1
    prompt: |
      Escribe el número $2026$ en base 2. Respuesta: solo ceros y unos, sin espacios.
    answers: ["sha256:2286b936353fb3909a12a2b2079e2846b89b7dbc921aec85005a688f97b90fb6"]
  - id: orden-operaciones
    tier: 1
    prompt: |
      Calcula $8 + 6 \times (5 - 3)^2 \div 4 - 2^3$. Respuesta: un número entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: cifras-2-64
    tier: 1
    prompt: |
      ¿Cuántas cifras tiene $2^{64}$ escrito en base 10? Respuesta: un número entero.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: division-euclidea
    tier: 2
    prompt: |
      Divide $98765$ entre $123$ (división euclídea: $a = bq + r$ con $0 \le r < b$).
      Respuesta en la forma «cociente;resto».
    answers: ["sha256:a892b22920a5b6e41eeb4eb29211bfe34c29818ec7c5967ca6bf99f0efa11fd1"]
  - id: mcd-euclides
    tier: 2
    prompt: |
      Calcula $\operatorname{mcd}(1071, 462)$ con el algoritmo de Euclides. Respuesta: un entero.
    answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
  - id: mcm-84-90
    tier: 2
    prompt: |
      Calcula $\operatorname{mcm}(84, 90)$. Respuesta: un entero.
    answers: ["sha256:9c19f29d0e6fefa21eec58f6ff4d0cf807b63d0ed146f1fea0874506b66c35ee"]
  - id: autobuses
    tier: 2
    prompt: |
      Dos autobuses salen juntos de la estación a las 8:00. Uno vuelve a salir cada 12 minutos y el otro cada 18.
      ¿A qué hora vuelven a salir juntos por primera vez? Respuesta en formato «H:MM», por ejemplo «9:05».
    answers: ["sha256:314c2d13fae11fe8673f3af0a9ed0831f30b92726b1990068557ac537c2d4d38"]
  - id: baldosas
    tier: 2
    prompt: |
      Un suelo rectangular mide $840$ cm por $600$ cm. Se quiere cubrir con baldosas cuadradas enteras, todas
      iguales y del mayor tamaño posible, sin cortar ninguna. ¿Cuánto mide el lado y cuántas baldosas hacen falta?
      Respuesta en la forma «lado en cm;número de baldosas».
    answers: ["sha256:1bc94f350dcb7da52e55fc6b54b1cbf7a71074615080da8e87b0273cede6ba80"]
  - id: resto-11
    tier: 2
    prompt: |
      ¿Cuál es el resto de dividir $123456789$ entre $11$? Usa el criterio de divisibilidad por $11$ y comprueba
      después con la división. Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: divisores-360
    tier: 2
    prompt: |
      ¿Cuántos divisores positivos tiene $360$ y cuánto suman todos ellos? Respuesta en la forma «cantidad;suma».
    answers: ["sha256:dfeba01aedd9a60c93fcfe4f69772ce018dfa7d7b1dcb1aa4377e6853a98bc7a"]
  - id: ultimas-cifras
    tier: 3
    prompt: |
      ¿Cuáles son las dos últimas cifras de $7^{2026}$? Respuesta: dos cifras, sin espacios.
    answers: ["sha256:0e17daca5f3e175f448bacace3bc0da47d0655a74c8dd0dc497a3afbdad95f1f"]
  - id: doce-divisores
    tier: 3
    prompt: |
      ¿Cuál es el menor número natural que tiene exactamente $12$ divisores positivos? Respuesta: un entero.
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: ceros-100-factorial
    tier: 3
    prompt: |
      ¿Con cuántos ceros termina el número $100! = 1 \times 2 \times 3 \times \cdots \times 100$? Respuesta: un entero.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: pares-coprimos
    tier: 3
    prompt: |
      ¿Cuántos pares $(a, b)$ de números naturales con $1 \le a < b \le 100$ cumplen $\operatorname{mcd}(a, b) = 1$?
      Respuesta: un entero.
    answers: ["sha256:deeced0756445f4466bd032c573b0c4c48ad83a7c13b17bc15e6f73e22fbe7ae"]
  - id: primos-1000
    tier: 3
    prompt: |
      ¿Cuántos números primos hay menores que $1000$? Respuesta: un entero.
    answers: ["sha256:80c3cd40fa35f9088b8741bd8be6153de05f661cfeeb4625ffbf5f4a6c3c02c4"]
  - id: cajero
    tier: 3
    prompt: |
      Un cajero automático solo dispone de billetes de $20$ y de $50$ euros y entrega la cantidad exacta que se
      pide. De los importes enteros entre $1$ y $1000$ euros, ¿cuántos **no** se pueden entregar? Respuesta: un entero.
    answers: ["sha256:6a97982dccf77dd3dafa27fcbdf75c017301f730ba186b1d9e8ea212eee73f54"]
---

# Números naturales y aritmética

Aquí empieza el troncal. Todo lo que viene después, del álgebra a la criptografía, se apoya en dominar los
números enteros con una seguridad total: saber qué significa cada operación, por qué funcionan los
trucos de cálculo y cómo se razona sobre divisibilidad. Este nodo lo hace desde cero y llega hasta
resultados que se usan en informática y en la vida diaria.

## Objetivos

Al terminar sabrás:

1. Escribir y leer números en cualquier base (decimal, binario, hexadecimal) y justificar por qué el
   sistema posicional funciona.
2. Hacer una división con resto y enunciar con precisión qué garantiza.
3. Evaluar expresiones respetando la prioridad de las operaciones, y manejar potencias.
4. Decidir si un número es divisible por 2, 3, 4, 5, 8, 9, 10 u 11 **sin dividir**, y demostrar por qué.
5. Factorizar un número, reconocer primos y calcular el máximo común divisor (mcd) y el mínimo común
   múltiplo (mcm) de dos formas distintas.
6. Plantear y resolver problemas reales (horarios, embaldosado, pagos) con estas herramientas.

> [!question] Test de entrada
> Antes de seguir, intenta estas tres sin calculadora. Si no te salen, el nodo te lo enseña; no hace
> falta saberlo ya.
> 1. ¿Cuánto es $7 \times 8$?
> 2. ¿Cuál es el resto de dividir $50$ entre $7$?
> 3. ¿Es $91$ un número primo?
>
> Respuestas: $56$; $1$; no ($91 = 7 \times 13$). Si fallas la 3, es el caso típico de un número que
> «parece primo»: aprenderás a comprobarlo con seguridad.

## 1. Para qué sirve

- **Tu DNI.** La letra del DNI español es el resto de dividir el número entre $23$, traducido con una
  tabla. Es una operación de este nodo.
- **Libros y pagos.** El dígito de control del ISBN-10 y de muchos códigos bancarios es un resto de una
  división: detecta errores de tecleo.
- **Informática.** Todo lo que guarda un ordenador son números en base $2$; las direcciones de memoria y
  los colores usan base $16$.
- **Organizar.** Horarios que coinciden, repartos sin sobrantes y piezas que encajan son problemas de
  múltiplos y divisores.
- **Seguridad.** El cifrado RSA con el que se protege casi toda comunicación en internet se apoya en que
  factorizar números enormes es difícil, aunque multiplicarlos sea fácil
  (se verá en [[sec-criptografia]]).

## 2. El sistema decimal posicional

Los **números naturales** son $0, 1, 2, 3, \dots$ (en este curso incluimos el $0$). Se escriben con
**cifras** y el valor de cada cifra depende de su **posición**:

$$
4\,096 = 4\cdot 10^3 + 0\cdot 10^2 + 9\cdot 10^1 + 6\cdot 10^0 .
$$

El invento clave es que con solo diez símbolos se escribe cualquier número, porque la posición
multiplica por una potencia de diez. Nada obliga a usar el diez: se puede usar cualquier base
$b \ge 2$.

**Teorema (representación en base $b$).** Todo natural $n$ se escribe de una única manera como

$$
n = d_k b^k + d_{k-1} b^{k-1} + \cdots + d_1 b + d_0, \qquad 0 \le d_i < b,\ d_k \ne 0 .
$$

*Idea de la demostración.* Existencia: dividir $n$ entre $b$ da $n = bq + d_0$ con $0 \le d_0 < b$; se
repite con $q$ (que es menor que $n$) hasta llegar a $0$; las cifras son los restos, en orden inverso.
Unicidad: dos escrituras distintas darían una diferencia no nula $\sum e_i b^i = 0$ con $|e_i| < b$; mirando el
menor $i$ con $e_i \ne 0$ y dividiendo entre $b^i$ se obtiene que $b$ divide a $e_i$, imposible porque
$0 < |e_i| < b$. $\blacksquare$

**Ejemplo resuelto: $1000$ en base 2.** Se divide entre $2$ y se anotan los restos:

| División | Cociente | Resto |
|---|---|---|
| $1000 \div 2$ | $500$ | $0$ |
| $500 \div 2$ | $250$ | $0$ |
| $250 \div 2$ | $125$ | $0$ |
| $125 \div 2$ | $62$ | $1$ |
| $62 \div 2$ | $31$ | $0$ |
| $31 \div 2$ | $15$ | $1$ |
| $15 \div 2$ | $7$ | $1$ |
| $7 \div 2$ | $3$ | $1$ |
| $3 \div 2$ | $1$ | $1$ |
| $1 \div 2$ | $0$ | $1$ |

Leyendo los restos de abajo arriba: $1000 = 1111101000_2$. **Comprobación** (siempre, y por el camino
inverso): $512 + 256 + 128 + 64 + 32 + 8 = 1000$. $\checkmark$

Las bases más usadas en computación:

| Base | Cifras | Uso |
|:---:|---|---|
| $2$ | 0, 1 | Todo dato en un ordenador |
| $8$ | 0–7 | Permisos de archivos en Unix |
| $16$ | 0–9, A–F | Direcciones, colores (`#FF8800`), volcados |

Como $16 = 2^4$, cada cifra hexadecimal equivale a exactamente cuatro bits:
$\mathrm{F}_{16} = 1111_2$. Por eso convertir entre binario y hexadecimal es solo agrupar de cuatro en
cuatro.

```python
def a_base(n, b):
    """Cifras de n en base b (lista, de más a menos significativa), por divisiones sucesivas."""
    if n == 0:
        return [0]
    cifras = []
    while n > 0:
        n, resto = divmod(n, b)   # divmod devuelve (cociente, resto)
        cifras.append(resto)
    return cifras[::-1]

assert a_base(1000, 2) == [1, 1, 1, 1, 1, 0, 1, 0, 0, 0]
```

**Cuántas cifras tiene un número.** $n$ tiene $k + 1$ cifras en base $10$ si y solo si
$10^k \le n < 10^{k+1}$, es decir, $k = \lfloor \log_{10} n \rfloor$. Los logaritmos se estudian en
el nodo de álgebra de secundaria; de momento, se cuenta.

## 3. Las operaciones y la división con resto

**Suma y producto** cumplen, para cualesquiera naturales $a, b, c$:

- conmutativa: $a + b = b + a$, $ab = ba$;
- asociativa: $(a + b) + c = a + (b + c)$, $(ab)c = a(bc)$;
- elementos neutros: $a + 0 = a$, $a \cdot 1 = a$;
- **distributiva**: $a(b + c) = ab + ac$.

La distributiva es la propiedad más usada del cálculo, también mental: $17 \times 12 = 17 \times 10 +
17 \times 2 = 170 + 34 = 204$. La resta y la división no son conmutativas ni asociativas, y la división
exacta no siempre existe ($7$ no se reparte entre $2$ sin resto). Eso lleva a la operación fundamental
siguiente.

**Teorema (división euclídea).** Para todo natural $a$ y todo natural $b \ge 1$ existen un único
**cociente** $q$ y un único **resto** $r$ tales que

$$
a = bq + r, \qquad 0 \le r < b .
$$

*Demostración.* Existencia: el conjunto de los múltiplos $bk$ que no superan a $a$ no está vacío ($k=0$)
y está acotado, así que hay un mayor $q$ con $bq \le a$; sea $r = a - bq \ge 0$; si fuese $r \ge b$ entonces
$b(q+1) \le a$, contra la elección de $q$. Unicidad: si $bq + r = bq' + r'$ con $q < q'$, entonces
$r - r' = b(q' - q) \ge b$, pero $r - r' < b$; contradicción. $\blacksquare$

**Nunca se divide entre cero.** Si $b = 0$, $a = 0\cdot q + r$ obligaría a $a = r$ para cualquier $q$: no habría
un único cociente. Por eso $a \div 0$ no está definido.

**Ejemplo resuelto: $1234 \div 17$.** $17 \times 72 = 1224 \le 1234 < 1241 = 17 \times 73$. Luego $q = 72$ y
$r = 1234 - 1224 = 10$. Comprobación: $17\cdot 72 + 10 = 1234$ y $0 \le 10 < 17$. $\checkmark$

**Aplicación: la letra del DNI.** Se divide el número entre $23$ y el resto indica una posición en la
cadena `TRWAGMYFPDXBNJZSQVHLCKE` (la posición $0$ es la `T`). Para $12345678$:
$12345678 = 23 \cdot 536768 + 14$; la posición $14$ es la `Z`. La letra es `Z`.

## 4. Orden de las operaciones

Una expresión sin paréntesis se evalúa con este orden, que es una convención universal:

1. paréntesis (de dentro afuera);
2. potencias;
3. multiplicaciones y divisiones, **de izquierda a derecha**;
4. sumas y restas, **de izquierda a derecha**.

**Ejemplo resuelto:** $12 - 3 \times (4 + 1)^2 \div 5 + 2$.

$$
12 - 3 \times 5^2 \div 5 + 2 = 12 - 3 \times 25 \div 5 + 2 = 12 - 75 \div 5 + 2 = 12 - 15 + 2 = -1 .
$$

Aquí aparece un resultado negativo: los naturales no alcanzan para restar siempre. Los enteros
($\dots,-2,-1,0,1,2,\dots$) se estudian en [[mat-enteros-fracciones]].

Error típico: $8 \div 2 \times 4$ vale $16$ (izquierda a derecha), **no** $1$. La multiplicación y la
división tienen la **misma** prioridad.

## 5. Potencias de exponente natural

$a^n$ es multiplicar $a$ por sí mismo $n$ veces, con el convenio $a^0 = 1$. De la definición salen las
reglas, que se justifican sin más que contar factores:

$$
a^m a^n = a^{m+n}, \qquad (a^m)^n = a^{mn}, \qquad (ab)^n = a^n b^n .
$$

Por ejemplo $2^3 \cdot 2^4$ son $3 + 4 = 7$ factores $2$. **Las potencias de $2$ crecen muy deprisa**:
$2^{10} = 1024 \approx 10^3$, y por eso $2^{64}$ ya tiene $20$ cifras.

**Última cifra de una potencia.** Las últimas cifras de las potencias de un número se repiten con un
**periodo**. Para $3^n$: $3, 9, 27, 81, 243, \dots$ terminan en $3, 9, 7, 1, 3, 9, 7, 1, \dots$ (periodo $4$).
**Ejemplo resuelto:** ¿última cifra de $3^{2026}$? Como $2026 = 4\cdot 506 + 2$, ocupa la posición $2$ del
ciclo: termina en $9$. Para varias cifras se trabaja igual con el resto módulo $100$, $1000$...

## 6. Divisibilidad y números primos

$a$ **divide** a $b$ (se escribe $a \mid b$) si existe un natural $k$ con $b = ak$. Equivalentemente, el
resto de dividir $b$ entre $a$ es $0$. Decimos que $a$ es un **divisor** de $b$ y $b$ un **múltiplo** de $a$.

**Congruencias.** Para hablar de restos con comodidad: $a \equiv b \pmod m$ significa que $a$ y $b$ dejan el
mismo resto al dividir entre $m$ (equivale a $m \mid a - b$). Se pueden sumar y multiplicar congruencias:
si $a \equiv a'$ y $b \equiv b'$ entonces $a + b \equiv a' + b'$ y $ab \equiv a'b'$ (pues $ab - a'b' =
a(b - b') + b'(a - a')$ es múltiplo de $m$).

### Criterios de divisibilidad (con demostración)

Se escribe $n = \sum d_i 10^i$ con $d_i$ las cifras.

- **Por 2, 5 y 10**: basta la última cifra, porque $10$ es múltiplo de $2$, de $5$ y de $10$ y solo
  queda $d_0$.
- **Por 4 y por 8**: $100$ es múltiplo de $4$ y $1000$ lo es de $8$, así que cuentan solo las dos (o tres)
  últimas cifras.
- **Por 3 y por 9**: $10^i - 1 = 99\ldots9$ es múltiplo de $9$, luego $10^i \equiv 1 \pmod 9$ y por tanto
  $$
  n \equiv d_0 + d_1 + \cdots + d_k \pmod 9 .
  $$
  Un número es divisible por $9$ (o por $3$, que divide a $9$) si y solo si lo es la **suma de sus
  cifras**; más aún, deja el mismo resto que su suma de cifras módulo $9$.
- **Por 11**: $10 \equiv -1 \pmod{11}$, luego $10^i \equiv (-1)^i$ y
  $n \equiv d_0 - d_1 + d_2 - \cdots \pmod{11}$: la **suma alternada** de cifras, de derecha a izquierda.

**Ejemplo resuelto:** ¿resto de $7\,321\,058$ entre $9$? Suma de cifras: $7+3+2+1+0+5+8 = 26 \to 2+6 = 8$.
Resto $8$. ¿Y entre $11$? De derecha a izquierda: $8 - 5 + 0 - 1 + 2 - 3 + 7 = 8$. Resto $8$.

### Números primos

Un natural $p > 1$ es **primo** si sus únicos divisores positivos son $1$ y $p$; si no, es
**compuesto**. ($1$ no es primo por convenio, para que la factorización sea única.)

**Teorema (Euclides).** Hay infinitos números primos.

*Demostración.* Si hubiese solo un número finito $p_1, \dots, p_m$, el número $N = p_1 p_2 \cdots p_m + 1$
no sería divisible por ningún $p_i$ (deja resto $1$). Pero todo número $>1$ tiene algún divisor primo
(el menor divisor mayor que $1$ de $N$ es primo), que sería uno nuevo. Contradicción. $\blacksquare$

**Cómo saber si $n$ es primo.** Si $n$ es compuesto, $n = ab$ con $1 < a \le b$, y entonces
$a \le \sqrt n$ (si no, $ab > n$). Por tanto **basta probar los divisores hasta $\sqrt n$**. Para
$91$: $\sqrt{91} < 10$, y $91 = 7 \times 13$: compuesto. La **criba de Eratóstenes** aplica esto a todos los
números a la vez: se tachan los múltiplos de cada primo $p \le \sqrt N$ empezando en $p^2$.

```python
def criba(N):
    """Lista de primos menores que N."""
    es_primo = [True] * N
    es_primo[0:2] = [False, False]
    p = 2
    while p * p < N:
        if es_primo[p]:
            for m in range(p * p, N, p):
                es_primo[m] = False
        p += 1
    return [i for i, f in enumerate(es_primo) if f]

assert len(criba(100)) == 25      # hay 25 primos menores que 100
```

## 7. Factorización, mcd y mcm

**Teorema fundamental de la aritmética.** Todo natural $n > 1$ se escribe como producto de primos, y esa
escritura es única salvo el orden de los factores.

*Existencia.* Por inducción fuerte: si $n$ es primo, ya está; si no, $n = ab$ con $1 < a, b < n$, y por
hipótesis cada uno es producto de primos. *Unicidad.* Supongamos que existen números con dos
factorizaciones distintas y sea $n$ el menor de ellos:
$n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$ con $p_1 \le \dots \le p_r$ y $q_1 \le \dots \le q_s$.
Ningún primo aparece en ambas (se cancelaría y quedaría un número menor con dos factorizaciones
distintas), y $r, s \ge 2$ (un primo solo se factoriza de una manera). Podemos suponer $p_1 < q_1$.
Como $p_1^2 \le n$ y $q_1^2 \le n$ con $p_1 \ne q_1$, resulta $p_1 q_1 < n$. Sea $N = n - p_1 q_1$,
con $0 < N < n$. Tanto $p_1$ como $q_1$ dividen a $N$ (dividen a $n$ y a $p_1 q_1$). Como $N < n$, $N$ tiene
factorización única, en la que aparecen $p_1$ y $q_1$, que son primos distintos; luego $p_1 q_1 \mid N$ y
por tanto $p_1 q_1 \mid n$. De ahí, $q_1 \mid n / p_1 = p_2 \cdots p_r$. Pero $n / p_1 < n$ tiene
factorización única, y en ella no figura $q_1$ (porque ningún primo se repite entre las dos
factorizaciones de $n$). Contradicción. $\blacksquare$ (Es la prueba de Hardy y Wright, §2.11.)

**Ejemplo resuelto:** $360 = 2^3 \cdot 3^2 \cdot 5$. Dividimos entre $2$ tres veces ($360 \to 180 \to 90 \to
45$), entre $3$ dos veces ($45 \to 15 \to 5$) y queda $5$.

### mcd y mcm

El **máximo común divisor** $\operatorname{mcd}(a, b)$ es el mayor natural que divide a ambos; el **mínimo común
múltiplo** $\operatorname{mcm}(a, b)$ es el menor positivo que es múltiplo de ambos. Con las factorizaciones:
el mcd toma cada primo con el **menor** exponente, y el mcm con el **mayor**. Como $\min(x, y) + \max(x, y) =
x + y$ para cualquier par de exponentes, se obtiene

$$
\operatorname{mcd}(a, b)\cdot \operatorname{mcm}(a, b) = a\, b .
$$

**Ejemplo:** $\operatorname{mcd}(60, 90)$: $60 = 2^2\cdot 3\cdot 5$, $90 = 2\cdot 3^2\cdot 5$; mcd $= 2\cdot 3\cdot 5 = 30$,
mcm $= 2^2\cdot 3^2\cdot 5 = 180$, y $30 \cdot 180 = 5400 = 60 \cdot 90$. $\checkmark$

### Algoritmo de Euclides

Factorizar números grandes es muy costoso; el mcd, en cambio, se calcula casi al instante sin factorizar.
Se basa en que **$\operatorname{mcd}(a, b) = \operatorname{mcd}(b, r)$ donde $r$ es el resto de dividir $a$ entre $b$**:
si $a = bq + r$, todo divisor común de $a$ y $b$ divide a $r = a - bq$, y todo divisor común de $b$ y $r$
divide a $a = bq + r$; los dos pares tienen **los mismos** divisores comunes, y por tanto el mismo
mayor. Se repite hasta que el resto sea $0$ (termina, porque los restos son naturales que decrecen
estrictamente); el último resto no nulo es el mcd. Está en los *Elementos* de Euclides (VII.1-2).

**Ejemplo resuelto: $\operatorname{mcd}(252, 198)$.**

$$
252 = 1\cdot 198 + 54,\quad 198 = 3\cdot 54 + 36,\quad 54 = 1\cdot 36 + 18,\quad 36 = 2\cdot 18 + 0 .
$$

El último resto no nulo es $18$: $\operatorname{mcd}(252, 198) = 18$. Comprobación por factores:
$252 = 2^2\cdot 3^2\cdot 7$, $198 = 2\cdot 3^2\cdot 11$, mcd $= 2\cdot 3^2 = 18$. $\checkmark$

```python
def mcd(a, b):
    while b:
        a, b = b, a % b
    return a

def mcm(a, b):
    return a // mcd(a, b) * b      # dividir antes de multiplicar evita desbordamientos en otros lenguajes
```

### Contar divisores y sumarlos

Si $n = p_1^{a_1} \cdots p_r^{a_r}$, un divisor de $n$ se forma eligiendo, para cada primo, un exponente entre
$0$ y $a_i$. Luego

$$
\tau(n) = (a_1 + 1)(a_2 + 1)\cdots(a_r + 1), \qquad
\sigma(n) = \prod_{i=1}^{r} \frac{p_i^{a_i + 1} - 1}{p_i - 1},
$$

donde $\tau$ es el número de divisores y $\sigma$ su suma (la suma de una progresión geométrica
$1 + p + \cdots + p^a$ da la fracción). **Ejemplo resuelto: $n = 48 = 2^4 \cdot 3$.**
$\tau = 5 \cdot 2 = 10$ divisores; $\sigma = \frac{2^5 - 1}{2 - 1}\cdot\frac{3^2 - 1}{3 - 1} = 31 \cdot 4 = 124$.
Comprobación enumerando: $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$ son $10$ y suman $124$. $\checkmark$

**Ceros finales de un factorial.** Un cero final es un factor $10 = 2 \cdot 5$; como hay más factores $2$
que $5$, los ceros son el exponente del $5$ en $n!$, que es
$\lfloor n/5 \rfloor + \lfloor n/25 \rfloor + \lfloor n/125 \rfloor + \cdots$ (los múltiplos de $5$ aportan uno,
los de $25$ uno más, etc.). Para $25!$: $5 + 1 = 6$ ceros.

## 8. Cómo resolver problemas

Los problemas reales no vienen con la fórmula puesta. Pólya (1945) propuso cuatro fases que siguen
valiendo hoy: **entender** el problema (¿qué se pide? ¿qué datos hay?), **trazar un plan** (¿se parece a otro
conocido? ¿se puede probar con números pequeños?), **ejecutar** el plan comprobando cada paso y **mirar
atrás** (¿tiene sentido el resultado? ¿se puede obtener de otro modo?).

**Ejemplo resuelto.** *Dos luces parpadean, una cada $10$ s y otra cada $15$ s, y acaban de coincidir.
¿Cuándo vuelven a coincidir?*

1. *Entender:* piden el primer instante positivo que es múltiplo de $10$ y de $15$.
2. *Plan:* eso es el mcm.
3. *Ejecutar:* $\operatorname{mcm}(10, 15) = 10\cdot 15 / \operatorname{mcd}(10, 15) = 150/5 = 30$ s.
4. *Mirar atrás:* a los $30$ s la primera ha parpadeado $3$ veces y la segunda $2$; antes de eso
   ($10, 15, 20, 30$) solo el $30$ es común. $\checkmark$

**Regla práctica**: «¿cuándo vuelven a coincidir?» $\to$ **mcm**. «¿cuál es el mayor trozo/baldosa/grupo que
reparte todo sin sobrar?» $\to$ **mcd**.

## 9. Cálculo mental y estimación

- **Estimar antes de calcular** detecta errores: $4\,987 \times 21 \approx 5\,000 \times 20 = 100\,000$.
- **Prueba del nueve**: si $a \cdot b = c$, entonces las sumas de cifras (mod $9$) cumplen la misma relación.
  Si no se cumple, hay un error. Si se cumple, *no garantiza* que esté bien (no detecta, por ejemplo,
  cifras permutadas).
- **Descomponer** con la distributiva: $98 \times 7 = 100 \times 7 - 2 \times 7 = 686$.

## 10. Errores típicos

- Escribir $8 \div 2 \times 4 = 1$ (la multiplicación y la división se hacen de izquierda a derecha).
- Creer que $1$ es primo, o que $91$ y $51$ lo son (son $7\cdot 13$ y $3 \cdot 17$).
- Confundir mcd y mcm: el mcd nunca supera al menor de los dos números; el mcm nunca es menor que el mayor.
- Dar como resto algo $\ge$ divisor. Si $r \ge b$ la división no ha terminado.
- Fiarse de un solo cálculo. Siempre una segunda vía: la prueba inversa, otro método o una estimación.

## Repaso: lo que debe quedarte dentro de un mes

1. $n = bq + r$ con $0 \le r < b$, único.
2. $n \equiv$ (suma de cifras) mod $9$; suma alternada para $11$.
3. Primo: probar divisores hasta $\sqrt n$; factorización única.
4. mcd por Euclides; $\operatorname{mcd}\cdot\operatorname{mcm} = ab$.
5. $\tau(n) = \prod (a_i + 1)$; ceros de $n!$ = exponente del $5$.

## Siguiente

Con los naturales dominados, [[mat-enteros-fracciones]] amplía el sistema numérico a los enteros y a las
fracciones, y el nodo de álgebra básica sustituye los números por letras.
