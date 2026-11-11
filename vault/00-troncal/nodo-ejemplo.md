---
id: nodo-ejemplo
title: Enteros en máquina y aritmética modular
area: troncal
trunk_level: 0
prerequisites: []
academic_sources:
  - "Knuth, D. E. The Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3ª ed. Addison-Wesley, 1997. §4.1 (sistemas posicionales) y §4.6.3 (evaluación de potencias)."
  - "Bryant, R. E.; O'Hallaron, D. R. Computer Systems: A Programmer's Perspective, 3ª ed. Pearson, 2016. Cap. 2: Representing and Manipulating Information."
  - "Shoup, V. A Computational Introduction to Number Theory and Algebra, 2ª ed. Cambridge University Press, 2009. Caps. 2–3."
  - "Warren, H. S. Hacker's Delight, 2ª ed. Addison-Wesley, 2013. Cap. 2."
ctf_flag: "sha256:0fb107c03f7e56c972928d068dac14528a179afe5099c4c3f1939dde7b7ec13c"
hints:
  - "El exponente no cabe en un uint64_t, pero no hace falta almacenarlo. Escribe 2^127 − 1 en binario: ¿qué valor tiene cada uno de sus bits y cuántos son?"
  - "GCC y Clang ofrecen `unsigned __int128` en x86-64: sirve para el producto intermedio y también para guardar el exponente. Alternativa sin 128 bits: un bucle de 127 iteraciones en el que el bit del exponente siempre vale 1. Imprime con printf(\"EXODUS{%016llx}\", (unsigned long long)x)."
  - "Manual de GCC, sección «128-bit Integers» (gcc.gnu.org/onlinedocs/gcc/_005f_005fint128.html). Para reducir el exponente: pequeño teorema de Fermat en Shoup, cap. 2; el módulo 2^61 − 1 es un primo de Mersenne."
---

# Enteros en máquina y aritmética modular

Todo lo que una máquina calcula con enteros lo calcula en un anillo finito. Este nodo deriva ese
hecho desde cero y lo usa para construir el algoritmo que sostiene buena parte de la criptografía
de clave pública: la exponenciación modular rápida.

## 1. Un registro es un conjunto finito

Un registro de $n$ bits tiene exactamente $2^n$ estados. Asignar significado numérico a esos
estados es una *convención*; la más natural es la posicional.

**Teorema (representación posicional).** Todo entero $x$ con $0 \le x < 2^n$ se escribe de forma
única como

$$
x = \sum_{i=0}^{n-1} b_i \, 2^i, \qquad b_i \in \{0, 1\}.
$$

*Demostración.* Existencia por inducción sobre $n$: por división euclídea $x = 2q + b_0$ con
$b_0 \in \{0,1\}$ y $0 \le q < 2^{n-1}$; se aplica la hipótesis a $q$. Unicidad: hay $2^n$ cadenas
de bits y $2^n$ enteros en el rango, y la aplicación es sobreyectiva, luego es biyectiva. $\blacksquare$

## 2. El sumador calcula en $\mathbb{Z}/2^n\mathbb{Z}$

Un sumador de $n$ bits descarta el acarreo que sale del bit más alto. Lo que devuelve no es $a + b$
sino su resto:

$$
a \oplus_n b = (a + b) \bmod 2^n .
$$

La relación $a \equiv b \pmod m \iff m \mid (a - b)$ es de equivalencia y es compatible con la suma
y el producto: si $a \equiv a'$ y $b \equiv b'$, entonces $a + b \equiv a' + b'$ y $ab \equiv a'b'$.
Por eso las clases de restos forman un anillo, $\mathbb{Z}/m\mathbb{Z}$, y el hardware implementa
exactamente el caso $m = 2^n$. El «desbordamiento» no es un error del procesador: es la aritmética
correcta de ese anillo.

> [!warning] En C el anillo solo está garantizado para tipos sin signo
> El estándar define la aritmética `unsigned` módulo $2^n$ (ISO/IEC 9899, §6.2.5). El
> desbordamiento de enteros **con signo** es comportamiento indefinido, aunque la máquina
> subyacente use complemento a dos. Se retoma en [[sys-c-memoria]].

## 3. Complemento a dos: los mismos bits, otra lectura

Para representar negativos se reinterpreta el peso del bit más alto:

$$
x = -b_{n-1}\,2^{n-1} + \sum_{i=0}^{n-2} b_i\,2^i, \qquad -2^{n-1} \le x < 2^{n-1}.
$$

Esta lectura difiere de la posicional en un múltiplo de $2^n$, es decir, ambas son el mismo
elemento de $\mathbb{Z}/2^n\mathbb{Z}$. Consecuencia: **el mismo sumador sirve para enteros con y
sin signo**. El opuesto se obtiene sin restar, porque $x + \lnot x = 2^n - 1$ (todos los bits a 1):

$$
-x \equiv \lnot x + 1 \pmod{2^n}.
$$

```asm
; x86-64: rax = -rdi, sin usar la instrucción neg
mov  rax, rdi
not  rax        ; rax = ~x
add  rax, 1     ; rax = ~x + 1 = -x  (mod 2^64)
```

## 4. Exponenciación modular en $O(\log e)$

Calcular $a^e \bmod m$ multiplicando $e - 1$ veces es inviable cuando $e$ tiene cientos de bits.
Escribiendo el exponente en binario, $e = \sum_i e_i 2^i$:

$$
a^e = \prod_{i\,:\,e_i = 1} a^{2^i},
$$

y cada $a^{2^{i+1}} = \left(a^{2^i}\right)^2$ se obtiene del anterior con un solo cuadrado. Bastan
$\lfloor \log_2 e \rfloor$ cuadrados y, como mucho, otras tantas multiplicaciones. Reducir módulo
$m$ tras cada operación es legítimo por la compatibilidad de la sección 2 y mantiene los
operandos por debajo de $m$.

```c
#include <stdint.h>

/* (a * b) mod m sin desbordar: el producto de dos valores de 64 bits ocupa hasta 128. */
static uint64_t mulmod(uint64_t a, uint64_t b, uint64_t m) {
    return (uint64_t)((unsigned __int128)a * b % m);
}

/* a^e mod m, recorriendo los bits de e del menos al más significativo. */
uint64_t modpow(uint64_t a, uint64_t e, uint64_t m) {
    uint64_t r = 1 % m;
    a %= m;
    while (e > 0) {
        if (e & 1)
            r = mulmod(r, a, m);   /* este bit del exponente contribuye */
        a = mulmod(a, a, m);       /* a^(2^i) -> a^(2^(i+1)) */
        e >>= 1;
    }
    return r;
}
```

Valor de control para tu implementación: $3^{200} \bmod (10^9 + 7) = 136318165$.

## Reto

Calcula

$$
x = 3^{\,2^{127} - 1} \bmod \left(2^{61} - 1\right).
$$

El exponente no cabe en ningún tipo entero nativo de 64 bits: `modpow` no sirve tal cual. Decide
cómo resolverlo, escribe el programa y expresa $x$ en hexadecimal, en minúsculas y rellenado con
ceros hasta 16 dígitos.

Formato de la flag: `EXODUS{0123456789abcdef}`
