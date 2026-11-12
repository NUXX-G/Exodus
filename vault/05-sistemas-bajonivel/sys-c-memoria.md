---
id: sys-c-memoria
title: "C y el modelo de memoria"
area: bajo-nivel
trunk_level: 3
prerequisites: [prog-python-fundamentos, prog-terminal-linux-git]
academic_sources:
  - "Kernighan, B. W.; Ritchie, D. M. The C Programming Language, 2ª ed. Prentice Hall, 1988."
  - "ISO/IEC 9899:2018. Programming languages — C. §6.2.4–6.2.8, §6.5, §7.22.3."
  - "Bryant, R. E.; O'Hallaron, D. R. Computer Systems: A Programmer's Perspective, 3ª ed. Pearson, 2016. Caps. 2, 3 y 7."
  - "Matz, M.; Hubička, J.; Jaeger, A.; Mitchell, M. System V Application Binary Interface: AMD64 Architecture Processor Supplement. §3.1.2 (Data Representation)."
  - "Regehr, J. A Guide to Undefined Behavior in C and C++. 2010."
ctf_flag: "sha256:1dcc075e5689e2f917be9c9f8d9fb807f733eccd07366afa25799059cee35642"
hints:
  - "El hash recorre TODOS los bytes del array, también los de relleno que el compilador inserta entre campos y que ninguna asignación a un campo escribe. Si tu resultado cambia entre ejecuciones o entre -O0 y -O2, estás leyendo relleno sin inicializar. Comprueba además cuánto vale sizeof(struct registro)."
  - "Imprime la disposición real con offsetof (de <stddef.h>) y sizeof, o con `pahole` sobre el binario compilado con -g. Vuelca los primeros 24 bytes con `xxd` o un bucle de printf(\"%02x\") para ver relleno y orden de bytes. Compila con `gcc -std=c11 -O2 -Wall -Wextra -fsanitize=address,undefined`."
  - "System V AMD64 ABI, §3.1.2: tamaño y alineación de cada tipo y reglas de disposición de estructuras. ISO C §6.2.6.1p6: los bytes de relleno toman valores no especificados al escribir en un miembro. Página de manual memset(3). Especificación de FNV: IETF draft-eastlake-fnv."
---

# C y el modelo de memoria

C no describe una máquina, sino una *máquina abstracta* cuyo comportamiento fija el estándar. Un
compilador puede transformar el programa como quiera mientras conserve el comportamiento
observable de los programas **correctos**. Entender C es entender dónde termina esa abstracción y
dónde empieza el hardware (ver [[ing-logica-digital]] y [[prog-pensamiento-computacional]]).

## 1. Objetos, tipos y representación

Un **objeto** es una región de almacenamiento con un tipo. Su *representación* son los
`sizeof(T)` bytes que ocupa; su *valor* es la interpretación de esos bytes según `T`. Cualquier
objeto puede inspeccionarse byte a byte a través de un puntero a `unsigned char` (ISO C §6.2.6.1).

En x86-64 Linux (modelo LP64, ABI System V):

| Tipo | Tamaño | Alineación |
|---|:---:|:---:|
| `char`, `uint8_t` | 1 | 1 |
| `short`, `uint16_t` | 2 | 2 |
| `int`, `uint32_t`, `float` | 4 | 4 |
| `long`, `uint64_t`, `double`, punteros | 8 | 8 |

Los enteros de varios bytes se almacenan en **little-endian**: el byte menos significativo ocupa
la dirección más baja.

```c
#include <stdint.h>
#include <stdio.h>

int main(void) {
    uint32_t x = 0xDEADBEEF;
    const unsigned char *p = (const unsigned char *)&x;
    for (size_t i = 0; i < sizeof x; i++)
        printf("%02x ", p[i]);          /* x86-64: ef be ad de */
    putchar('\n');
}
```

## 2. Alineación y relleno

Un objeto de tipo `T` debe situarse en una dirección múltiplo de `_Alignof(T)`. En una estructura,
el compilador coloca los miembros **en el orden declarado** e inserta bytes de relleno según dos
reglas:

1. Cada miembro se sitúa en el primer desplazamiento libre que sea múltiplo de su alineación.
2. La alineación de la estructura es la máxima de sus miembros, y su tamaño se redondea hacia
   arriba a un múltiplo de ella (para que los arrays de estructuras queden alineados).

Formalmente, si el miembro $i$ tiene tamaño $s_i$ y alineación $a_i$, su desplazamiento es

$$
o_1 = 0, \qquad o_{i+1} = \left\lceil \frac{o_i + s_i}{a_{i+1}} \right\rceil a_{i+1},
\qquad \texttt{sizeof} = \left\lceil \frac{o_n + s_n}{A} \right\rceil A, \quad A = \max_i a_i .
$$

```c
struct mal  { char c; double d; char e; };   /* 1 + 7 relleno + 8 + 1 + 7 relleno = 24 */
struct bien { double d; char c; char e; };   /* 8 + 1 + 1 + 6 relleno          = 16 */
```

Ordenar los miembros de mayor a menor alineación minimiza el relleno.

> [!warning] El relleno tiene contenido no especificado
> Asignar a un miembro no escribe sus bytes de relleno, y copiar una estructura por asignación
> tampoco está obligado a conservarlos. Comparar estructuras con `memcmp` o calcular un hash de
> sus bytes solo es fiable si toda la región se inicializó antes con `memset`.

## 3. Punteros

Un puntero a `T` guarda la dirección de un objeto `T`. La aritmética de punteros opera en unidades
de `sizeof(T)`: `p + n` apunta `n` elementos más allá, no `n` bytes. La indexación es azúcar
sintáctico: `a[i]` se define como `*(a + i)`.

Un array **no** es un puntero: `sizeof a` da el tamaño total. Pero en casi toda expresión
*decae* a un puntero a su primer elemento, y por eso una función que recibe un array recibe solo
una dirección, sin longitud. La aritmética solo está definida dentro de un mismo array o una
posición más allá de su final (ISO C §6.5.6).

## 4. Duración de almacenamiento

| Duración | Dónde vive | Tiempo de vida | Valor inicial |
|---|---|---|---|
| Estática (`static`, globales) | `.data` / `.bss` | Todo el programa | Cero |
| Automática (locales) | Pila | Hasta salir del bloque | **Indeterminado** |
| Asignada (`malloc`) | Montón | Hasta `free` | Indeterminado (`calloc`: cero) |

La pila crece hacia direcciones bajas en x86-64; cada llamada reserva un *marco* con sus
variables locales y la dirección de retorno. Devolver la dirección de una variable local entrega
un puntero a un marco que ya no existe.

## 5. Comportamiento indefinido

El estándar distingue comportamiento *definido por la implementación* (documentado, como el
tamaño de `int`), *no especificado* (varias opciones válidas) e **indefinido** (UB): el estándar
no impone requisito alguno. El compilador optimiza suponiendo que el UB nunca ocurre, de modo que
un programa con UB no tiene un resultado «incorrecto»: no tiene significado.

Fuentes habituales de UB:

- Leer o escribir fuera de los límites de un objeto.
- Usar un puntero tras `free`, o a una variable automática fuera de su bloque.
- Leer una variable automática sin inicializar.
- Desbordar un entero **con signo** (el `unsigned` es aritmética módulo $2^n$ y está definido).
- Desplazar un número de bits mayor o igual que el ancho del tipo.
- Acceder a un objeto a través de un puntero de tipo incompatible (*strict aliasing*, §6.5p7).
  La forma correcta de reinterpretar bytes es `memcpy` o un puntero a `unsigned char`.

```c
int siempre_cierto(int x) {
    return x + 1 > x;   /* GCC -O2 lo compila como "return 1": el desbordamiento con signo no existe */
}
```

## 6. Del código fuente al proceso

```text
fuente.c ──cpp──▶ unidad de traducción ──cc1──▶ ensamblador .s ──as──▶ objeto .o ──ld──▶ ELF ejecutable
```

El objeto contiene secciones (`.text` código, `.rodata` constantes, `.data` datos inicializados,
`.bss` datos a cero) y una tabla de símbolos; el enlazador resuelve las referencias entre objetos
y asigna direcciones. Al ejecutar, el núcleo proyecta los segmentos del ELF en el espacio de
direcciones del proceso y crea la pila. Se desarrolla en [[sys-sistemas-operativos]] y
[[sys-ensamblador-x86-64]].

## Reto

Escribe un programa en C para **x86-64 Linux** (GCC o Clang, ABI System V) que haga exactamente
lo siguiente.

1. Define, con los miembros en este orden y sin atributos de empaquetado:

   ```c
   struct registro {
       uint8_t  tipo;
       uint32_t id;
       uint16_t len;
       uint64_t marca;
   };
   ```

2. Reserva un array de 1000 registros y pon **todos sus bytes a cero**.
3. Usa el generador xorshift64 con estado inicial `0x9E3779B97F4A7C15`. Cada llamada actualiza el
   estado y devuelve el nuevo valor:

   ```c
   s ^= s << 13;  s ^= s >> 7;  s ^= s << 17;  return s;
   ```

4. Para cada registro, en orden: obtén `r` con una llamada y asigna `tipo = r & 0xFF`,
   `id = (r >> 8) & 0xFFFFFFFF`, `len = (r >> 40) & 0xFFFF`; después asigna a `marca` el valor de
   una **segunda** llamada.
5. Calcula el hash FNV-1a de 64 bits de la representación completa del array, es decir, de sus
   `1000 * sizeof(struct registro)` bytes en orden de dirección creciente: se parte de
   `h = 0xcbf29ce484222325` y, por cada byte `b`, `h ^= b; h *= 0x100000001b3;`.

Valores de control: FNV-1a del único byte `'a'` es `af63dc4c8601ec8c`, y con un array de un solo
registro el resultado es `b5a2cba487113a7e`.

Formato de la flag, con el hash en hexadecimal, minúsculas y 16 dígitos: `EXODUS{0123456789abcdef}`
