---
id: sys-c-memoria
title: "C y la memoria: punteros, estructuras, memoria dinámica y comportamiento indefinido"
area: bajo-nivel
trunk_level: 8
prerequisites: [sys-c-fundamentos, prog-estructuras-datos]
academic_sources:
  - "Kernighan, B. W.; Ritchie, D. M. The C Programming Language, 2ª ed. Prentice Hall, 1988."
  - "ISO/IEC 9899:2024 (C23), borrador público N3220, e ISO/IEC 9899:2018 (C17). Con la numeración de C17: representación de objetos y relleno (6.2.6.1), operadores aditivos (6.5.6), reglas de acceso por tipo (6.5, párrafo 7), gestión de memoria (7.22.3)."
  - "Bryant, R. E.; O'Hallaron, D. R. Computer Systems: A Programmer's Perspective, 3ª ed. Pearson, 2016."
  - "Matz, M.; Hubička, J.; Jaeger, A.; Mitchell, M. System V Application Binary Interface: AMD64 Architecture Processor Supplement (representación de datos y disposición de estructuras)."
  - "Regehr, J. A Guide to Undefined Behavior in C and C++, 2010 (blog.regehr.org)."
ctf_flag: "sha256:1dcc075e5689e2f917be9c9f8d9fb807f733eccd07366afa25799059cee35642"
hints:
  - "El hash recorre TODOS los bytes del array, también los de relleno que el compilador inserta entre campos y que ninguna asignación a un campo escribe. Si tu resultado cambia entre ejecuciones o entre -O0 y -O2, estás leyendo relleno sin inicializar. Comprueba además cuánto vale sizeof(struct registro)."
  - "Imprime la disposición real con offsetof (de <stddef.h>) y sizeof, o con `pahole` sobre el binario compilado con -g. Vuelca los primeros 24 bytes con `xxd` o un bucle de printf(\"%02x\") para ver relleno y orden de bytes. Compila con `gcc -std=c11 -O2 -Wall -Wextra -fsanitize=address,undefined`."
  - "System V AMD64 ABI: tamaño y alineación de cada tipo y reglas de disposición de estructuras. ISO C, 6.2.6.1: los bytes de relleno toman valores no especificados al almacenar en un miembro. Página de manual memset(3). Especificación de FNV: IETF draft-eastlake-fnv."
exercises:
  - id: puntero-a-puntero
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          int x = 5;
          int *p = &x;
          *p += 3;
          int **pp = &p;
          **pp *= 2;
          printf("%d\n", x);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: paso-por-valor-y-por-puntero
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      void cambia_valor(int a, int b) { int t = a; a = b; b = t; }
      void cambia_puntero(int *a, int *b) { int t = *a; *a = *b; *b = t; }

      int main(void) {
          int a = 1, b = 2;
          cambia_valor(a, b);
          printf("%d %d ", a, b);
          cambia_puntero(&a, &b);
          printf("%d %d\n", a, b);
          return 0;
      }
      ```

      Respuesta: los cuatro números en orden, separados por `;`.
    answers: ["sha256:9a50aeae9ec3bb8cb25d52ee4015a0e73beee518302d506c63a9b4e620d40e1b"]
  - id: aritmetica-de-punteros
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          int v[] = {10, 20, 30, 40, 50};
          int *p = v + 1;
          printf("%d %d %td\n", *(p + 2), p[-1], &v[4] - p);
          return 0;
      }
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:f6b91723ed524e656b6eb1527de21c2f93928a0c6721ed42ec3e2bdd6c511ef1"]
  - id: relleno-de-estructuras
    tier: 1
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      struct a { char x; int y; char z; };
      struct b { int y; char x; char z; };

      int main(void) {
          printf("%zu %zu\n", sizeof(struct a), sizeof(struct b));
          return 0;
      }
      ```

      Respuesta: los dos tamaños separados por `;`.
    answers: ["sha256:da5b8f8124b28468af5a28dcdca673cdf848363913b9c931d8346a88d8fa8d59"]
  - id: offsetof-y-sizeof
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stddef.h>
      #include <stdio.h>

      struct s { char c; double d; short h; char t; int i; };

      int main(void) {
          printf("%zu %zu\n", offsetof(struct s, i), sizeof(struct s));
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:c2fc65ab587db31cf1cbbab0ea63554359699786946de1ce1d923f7d9aa30036"]
  - id: orden-de-bytes
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdint.h>
      #include <stdio.h>

      int main(void) {
          uint32_t x = 0x11223344;
          const unsigned char *b = (const unsigned char *)&x;
          printf("%02x%02x\n", b[0], b[3]);
          return 0;
      }
      ```

      Respuesta: los cuatro dígitos hexadecimales impresos.
    answers: ["sha256:8ed5f6c97c680e72cf3da76cc9ccbfb92c01ff74185d2883072fcc7be0d3fdb6"]
  - id: bits-de-un-float
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux? (`memcpy` es la forma correcta de reinterpretar los bytes de un objeto.)

      ```c
      #include <stdint.h>
      #include <stdio.h>
      #include <string.h>

      int main(void) {
          float f = 1.0f;
          uint32_t u;
          memcpy(&u, &f, sizeof u);
          printf("%08x\n", (unsigned)u);
          return 0;
      }
      ```

      Respuesta: los ocho dígitos hexadecimales impresos.
    answers: ["sha256:3a2b0cdff4a0d73fd8231dbc1dee4e11073ecd03dae99be90efc89d1d21cb10e"]
  - id: array-bidimensional
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      int main(void) {
          int m[3][4];
          for (int i = 0; i < 3; i++)
              for (int j = 0; j < 4; j++)
                  m[i][j] = i * 4 + j;
          int *p = &m[0][0];
          printf("%d %d %zu\n", p[7], *(*(m + 2) + 1), sizeof m / sizeof m[0]);
          return 0;
      }
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:7ad393991266111f56add6906bbf9566391323168cd8a1b50a4c27dcc249f803"]
  - id: invertir-con-dos-punteros
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>
      #include <string.h>

      int main(void) {
          char s[] = "abcdef";
          for (char *i = s, *j = s + strlen(s) - 1; i < j; i++, j--) {
              char t = *i;
              *i = *j;
              *j = t;
          }
          puts(s);
          return 0;
      }
      ```

      Respuesta: la cadena impresa.
    answers: ["sha256:01bceba8ff08f248e11cec15840fd3c406d14c2ed91e00e6a89681d1aab4a9cf"]
  - id: vector-dinamico
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>
      #include <stdlib.h>

      int main(void) {
          size_t n = 0, cap = 1, crecimientos = 0;
          int *v = malloc(cap * sizeof *v);
          if (!v) return 1;
          for (int k = 0; k < 1000; k++) {
              if (n == cap) {
                  int *nuevo = realloc(v, 2 * cap * sizeof *v);
                  if (!nuevo) { free(v); return 1; }
                  v = nuevo;
                  cap *= 2;
                  crecimientos++;
              }
              v[n++] = k;
          }
          printf("%zu %zu\n", crecimientos, cap);
          free(v);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:1a6a83a3ceb42e769eb6e1cadae61e3e13349e653e8530b49991af4630b3ca67"]
  - id: lista-enlazada
    tier: 2
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>
      #include <stdlib.h>

      struct nodo { int valor; struct nodo *sig; };

      int main(void) {
          struct nodo *cabeza = NULL;
          for (int i = 1; i <= 6; i++) {          /* inserción por la cabeza */
              struct nodo *n = malloc(sizeof *n);
              if (!n) return 1;
              n->valor = i * i;
              n->sig = cabeza;
              cabeza = n;
          }
          for (struct nodo **pp = &cabeza; *pp;) { /* borra los pares */
              if ((*pp)->valor % 2 == 0) {
                  struct nodo *muerto = *pp;
                  *pp = muerto->sig;
                  free(muerto);
              } else {
                  pp = &(*pp)->sig;
              }
          }
          for (struct nodo *n = cabeza; n; n = n->sig)
              printf("%d ", n->valor);
          putchar('\n');
          while (cabeza) {
              struct nodo *s = cabeza->sig;
              free(cabeza);
              cabeza = s;
          }
          return 0;
      }
      ```

      Respuesta: los valores impresos, en orden, separados por `;`.
    answers: ["sha256:5c3218a177597a63c7b1e9514b5687be0c80c7c9e8aeae4bec3dc5a3620c5397"]
  - id: qsort-con-comparador
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>

      struct persona { const char *nombre; int edad; };

      static int compara(const void *a, const void *b) {
          const struct persona *x = a, *y = b;
          if (x->edad != y->edad)
              return y->edad - x->edad;          /* edad descendente */
          return strcmp(x->nombre, y->nombre);   /* y, a igual edad, por nombre */
      }

      int main(void) {
          struct persona v[] = {{"luis", 25}, {"eva", 30}, {"bea", 22}, {"ana", 30}};
          size_t n = sizeof v / sizeof v[0];
          qsort(v, n, sizeof v[0], compara);
          for (size_t i = 0; i < n; i++)
              printf("%s ", v[i].nombre);
          putchar('\n');
          return 0;
      }
      ```

      Respuesta: los nombres impresos, en orden, separados por `;`.
    answers: ["sha256:76203d085a6e66bd13099788e819471543f0b5af7408df3a41b4d259c3887149"]
  - id: memmove-con-solapamiento
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux? (Con `memcpy` el resultado sería indefinido, porque origen y destino se solapan.)

      ```c
      #include <stdio.h>
      #include <string.h>

      int main(void) {
          char s[] = "123456789";
          memmove(s + 2, s, 5);
          puts(s);
          return 0;
      }
      ```

      Respuesta: la cadena impresa.
    answers: ["sha256:f7d187f8aacfee4a7d94355f6934b9645922f1226b0dd7b6c244bf916b9d28f2"]
  - id: buffer-static-compartido
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      static const char *texto(int n) {
          static char buf[16];
          snprintf(buf, sizeof buf, "%d", n);
          return buf;
      }

      int main(void) {
          const char *a = texto(12);
          const char *b = texto(345);
          printf("%s %s\n", a, b);
          return 0;
      }
      ```

      Respuesta: las dos cadenas impresas separadas por `;`.
    answers: ["sha256:f6d60ff2a1238bdaceaa286135d401845bd442d3cf8f70cc27c2174cdb9d5850"]
  - id: desbordamiento-al-calcular-tamanos
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdint.h>
      #include <stdio.h>
      #include <stdlib.h>

      int main(void) {
          size_t n = ((size_t)1 << 61) + 1;     /* un recuento enorme llegado de fuera */
          size_t bytes = n * 8;                 /* aritmética sin signo: da la vuelta */
          void *p = calloc(n, 8);               /* calloc comprueba el desbordamiento */
          printf("%zu %d\n", bytes, p == NULL);
          free(p);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:cc087cc897f09d15be4197ca3181a4c3ce34bea071527e430c8de90a814dae1c"]
  - id: desplazamiento-en-array-de-estructuras
    tier: 3
    prompt: |
      ¿Qué imprime este programa, compilado con GCC en x86-64 Linux?

      ```c
      #include <stdio.h>

      struct punto { char etiqueta; int x; };

      int main(void) {
          struct punto v[10];
          printf("%td\n", (char *)&v[7].x - (char *)v);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
---

# C y la memoria: punteros, estructuras, memoria dinámica y comportamiento indefinido

C no describe una máquina, sino una *máquina abstracta* cuyo comportamiento fija el estándar. Un compilador puede
transformar el programa como quiera mientras conserve el comportamiento observable de los programas **correctos**. Entender
C es entender dónde termina esa abstracción y dónde empieza el hardware. Este nodo, continuación de [[sys-c-fundamentos]],
enseña el modelo de memoria de C con el detalle que exige la programación de sistemas: qué es exactamente un puntero, cómo se
disponen las estructuras en bytes, cómo se gestiona la memoria dinámica sin fugas ni accesos inválidos, y qué es el
comportamiento indefinido y por qué es la raíz de tantas vulnerabilidades.

## Objetivos

Al terminar sabrás:

1. Declarar y usar punteros (a datos, a punteros, a funciones, `const`), y pasar argumentos por referencia.
2. Calcular con **aritmética de punteros** y explicar la relación exacta entre arrays y punteros.
3. Calcular a mano el **desplazamiento** de cada miembro de una estructura y su `sizeof` según la ABI de x86-64.
4. Gestionar memoria dinámica con `malloc`, `calloc`, `realloc` y `free`, con un dueño claro de cada bloque, y construir un
   vector dinámico y una lista enlazada.
5. Reconocer los errores de memoria (fugas, doble liberación, uso tras liberar, desbordamientos, desbordamiento al calcular
   tamaños) y detectarlos con AddressSanitizer y UBSan.
6. Explicar el **comportamiento indefinido**, la regla de acceso por tipo (*strict aliasing*) y el camino del código fuente
   al proceso en ejecución.

## Qué debes dominar antes

[[sys-c-fundamentos]] (tipos, representación de enteros, arrays y cadenas, compilación con avisos y *sanitizers*) y
[[prog-estructuras-datos]] (listas enlazadas, vectores dinámicos y su coste amortizado).

> [!question] Test de entrada
> 1. ¿Cuánto vale `sizeof(int)` y `sizeof(double)` en x86-64 Linux?
> 2. ¿Qué devuelve `sizeof v` dentro de una función que recibe `int v[]`?
> 3. ¿Cómo se escribe $\texttt{0x11223344}$ byte a byte?
>
> Respuestas: 4 y 8; el tamaño de un puntero, 8; `11 22 33 44` (en memoria, en x86-64, aparecerá al revés: sección 2).

## 1. Para qué sirve

- **Programación de sistemas**: núcleos, controladores y bases de datos manejan memoria con punteros y estructuras cuya
  disposición en bytes importa (formatos de archivo, paquetes de red, registros de hardware).
- **Seguridad**: los errores de memoria (escribir fuera de un búfer, usar memoria ya liberada) son la causa de buena parte
  de las vulnerabilidades graves del software escrito en C y C++. Saber evitarlos y detectarlos es la base de la auditoría
  de código ([[sec-explotacion-binaria]] los estudia desde el lado defensivo).
- **Rendimiento**: la disposición de los datos decide cuántas líneas de caché se tocan; reordenar los miembros de una
  estructura puede reducir su tamaño a la mitad.
- **Interoperabilidad**: llamar a C desde Python (`ctypes`), Rust o Go exige conocer la disposición exacta de los datos.

## 2. Objetos, direcciones y representación

La memoria de un proceso es, para C, una sucesión de bytes numerados por su **dirección**. Un **objeto** es una región de
almacenamiento con un tipo. Su *representación* son los `sizeof(T)` bytes que ocupa; su *valor* es la interpretación de esos
bytes según `T`. Cualquier objeto puede inspeccionarse byte a byte a través de un puntero a `unsigned char`.

En x86-64 Linux (ABI System V) los tipos básicos tienen alineación igual a su tamaño:

| Tipo | Tamaño | Alineación |
|---|:---:|:---:|
| `char`, `uint8_t` | 1 | 1 |
| `short`, `uint16_t` | 2 | 2 |
| `int`, `uint32_t`, `float` | 4 | 4 |
| `long`, `uint64_t`, `double`, punteros | 8 | 8 |

Los enteros de varios bytes se almacenan en **little-endian**: el byte **menos** significativo ocupa la dirección **más
baja**. Los protocolos de red usan *big-endian* (el orden «de lectura»), y por eso existen `htonl` y `ntohl`.

```c
#include <assert.h>
#include <stdint.h>
#include <stdio.h>

int main(void) {
    uint32_t x = 0xDEADBEEF;
    const unsigned char *p = (const unsigned char *)&x;
    for (size_t i = 0; i < sizeof x; i++)
        printf("%02x ", p[i]);            /* x86-64: ef be ad de */
    putchar('\n');
    assert(p[0] == 0xEF && p[3] == 0xDE);
    return 0;
}
```

## 3. Punteros

Un **puntero** a `T` es un objeto cuyo valor es la dirección de un objeto `T`. `&x` da la dirección de `x`; `*p` es el objeto
al que apunta `p` (**desreferencia**). `NULL` es un puntero que no apunta a nada: desreferenciarlo es indefinido (en Linux,
el proceso muere con «segmentation fault»).

```c
#include <assert.h>
#include <stddef.h>

/* Devuelve el cociente y escribe el resto en *resto: dos resultados con un puntero. */
static int divide(int a, int b, int *resto) {
    *resto = a % b;
    return a / b;
}

/* const a la izquierda del *: no se modifica lo apuntado. */
static size_t cuenta(const char *s, char c) {
    size_t n = 0;
    for (; *s != '\0'; s++)       /* el puntero (una copia) sí puede avanzar */
        n += (*s == c);
    return n;
}

int main(void) {
    int r;
    int q = divide(17, 5, &r);
    assert(q == 3 && r == 2);

    int x = 10, y = 20;
    int *p = &x;
    int **pp = &p;                /* puntero a puntero */
    *pp = &y;                     /* cambia a dónde apunta p */
    *p += 1;
    assert(x == 10 && y == 21);

    assert(cuenta("banana", 'a') == 3);
    return 0;
}
```

- C pasa **todo por valor**. Para que una función modifique una variable de quien llama, recibe **su dirección**.
- `const int *p`: no se puede modificar `*p` a través de `p`. `int *const p`: no se puede cambiar `p`. Marca `const` todo lo
  que una función no deba modificar: documenta la interfaz y el compilador la hace cumplir.
- Un puntero a puntero (`int **`) permite que una función cambie el puntero de quien llama (por ejemplo, la cabeza de una
  lista: sección 7).

## 4. Aritmética de punteros y arrays

La aritmética de punteros opera en **unidades de `sizeof(T)`**: si `p` apunta a un `int`, `p + 1` apunta al siguiente `int`,
4 bytes más allá. La resta de dos punteros al mismo array da el número de **elementos** entre ellos (tipo `ptrdiff_t`, se
imprime con `%td`). La indexación es azúcar sintáctico: `a[i]` **se define** como `*(a + i)`.

Un array **no** es un puntero: `sizeof a` da su tamaño total y `&a` tiene tipo «puntero a array». Pero en casi toda expresión
**decae** a un puntero a su primer elemento; por eso una función que recibe un array recibe solo una dirección, sin longitud.
La aritmética solo está definida **dentro** de un mismo array o **una posición más allá** de su final (ese puntero se puede
calcular y comparar, pero no desreferenciar). Calcular `v - 1` o `v + 11` en un array de 10 elementos ya es indefinido, aunque
no se lea.

Un array bidimensional `int m[3][4]` es un array de 3 arrays de 4 `int`, guardados **por filas** y contiguos: `m[i][j]` está
en la posición $4i + j$ desde `&m[0][0]`. Recorrerlo por filas aprovecha la caché; por columnas, la desaprovecha.

## 5. Estructuras: disposición, relleno y uniones

Una `struct` agrupa miembros de tipos distintos; con un puntero a estructura, `p->campo` equivale a `(*p).campo`.

**Alineación y relleno.** Un objeto de tipo `T` debe situarse en una dirección múltiplo de `_Alignof(T)`. En una estructura,
el compilador coloca los miembros **en el orden declarado** e inserta bytes de **relleno** según dos reglas:

1. Cada miembro se sitúa en el primer desplazamiento libre que sea múltiplo de su alineación.
2. La alineación de la estructura es la máxima de sus miembros, y su tamaño se redondea hacia arriba a un múltiplo de ella
   (para que en un array de estructuras **todas** queden alineadas).

Si el miembro $i$ tiene tamaño $s_i$ y alineación $a_i$:

$$
o_1 = 0, \qquad o_{i+1} = \left\lceil \frac{o_i + s_i}{a_{i+1}} \right\rceil a_{i+1},
\qquad \texttt{sizeof} = \left\lceil \frac{o_n + s_n}{A} \right\rceil A, \quad A = \max_i a_i .
$$

**Ejemplo resuelto 1.** `struct m { char c; double d; char e; };` $o_c = 0$; $d$ necesita múltiplo de 8: $o_d = 8$ (7 bytes de
relleno); $o_e = 16$; fin en 17, redondeado a múltiplo de $A = 8$: `sizeof` $= 24$. Reordenando, `struct b { double d; char c;
char e; };` ocupa $8 + 1 + 1 = 10 \to 16$. **Ordenar los miembros de mayor a menor alineación minimiza el relleno.** En un
array de un millón de elementos son 8 MB de diferencia.

`offsetof(tipo, miembro)` (de `<stddef.h>`) da el desplazamiento real; la herramienta `pahole` lo muestra para todo un binario.

> [!warning] El relleno tiene contenido no especificado
> Según el estándar (6.2.6.1), al almacenar un valor en una estructura o en uno de sus miembros, los bytes de relleno toman
> valores **no especificados**, y la asignación de estructuras no está obligada a copiarlos. Comparar estructuras con `memcmp`,
> calcular un hash de sus bytes o escribirlas tal cual en un archivo o en la red solo es fiable si toda la región se inicializó
> antes con `memset` (o `calloc`). Enviar relleno sin inicializar a otro proceso puede **filtrar** datos antiguos de la memoria.

**Uniones.** En una `union` todos los miembros empiezan en el desplazamiento 0 y se solapan; su tamaño es el del mayor. Para
reinterpretar los bytes de un objeto como otro tipo, la forma siempre correcta es `memcpy` (el compilador la reduce a un
movimiento de registro).

## 6. Dónde vive cada objeto

| Duración | Dónde vive | Tiempo de vida | Valor inicial |
|---|---|---|---|
| Estática (`static`, globales) | `.data` / `.bss` | Todo el programa | Cero si no se inicializa |
| Automática (locales) | Pila | Hasta salir del bloque | **Indeterminado** |
| Asignada (`malloc`) | Montón (*heap*) | Hasta `free` | Indeterminado (`calloc`: cero) |

El espacio de direcciones de un proceso en Linux contiene, de direcciones bajas a altas: el código (`.text`), las constantes
(`.rodata`), los datos inicializados (`.data`) y a cero (`.bss`), el montón (crece hacia arriba), las bibliotecas compartidas y
la **pila**, que crece hacia direcciones bajas. Cada llamada a función reserva en la pila un **marco** con sus variables locales
y la dirección de retorno.

- Devolver la dirección de una variable local entrega un puntero a un marco que ya no existe (**puntero colgante**).
- Una función que devuelve un puntero a un búfer `static` (como hacen `strtok`, `ctime` o `inet_ntoa`) reutiliza ese búfer en
  cada llamada: dos resultados guardados apuntan al mismo sitio, y la función **no es reentrante** (falla con hilos).

## 7. Memoria dinámica

`malloc(n)` reserva $n$ bytes sin inicializar y devuelve su dirección, o `NULL` si no hay memoria; `calloc(k, t)` reserva
$k\cdot t$ bytes a cero **comprobando que el producto no desborda**; `realloc(p, n)` cambia el tamaño de un bloque (puede
moverlo: el puntero antiguo deja de ser válido); `free(p)` lo devuelve. `free(NULL)` no hace nada.

**Regla de propiedad.** Cada bloque tiene **un dueño** responsable de liberarlo **exactamente una vez**, y nadie lo usa después.
Documenta en cada función quién es el dueño de lo que devuelve. Las violaciones tienen nombre: **fuga** (nadie lo libera),
**doble liberación**, **uso tras liberar** (*use-after-free*).

**Ejemplo resuelto 2: vector dinámico.** Se duplica la capacidad cuando se llena. Si empieza en 1 y se insertan $n$ elementos,
las copias que hacen los `realloc` suman como mucho $1 + 2 + 4 + \cdots + 2^{k-1} = 2^k - 1 < 2n$: el coste **amortizado** por
inserción es $O(1)$ ([[prog-estructuras-datos]]). Crecer en una cantidad fija (por ejemplo, de 10 en 10) daría $O(n^2)$ en total.

```c
#include <assert.h>
#include <stdlib.h>

typedef struct { int *datos; size_t n, cap; } Vector;

static int vector_push(Vector *v, int x) {
    if (v->n == v->cap) {
        size_t nueva = v->cap ? 2 * v->cap : 4;
        int *p = realloc(v->datos, nueva * sizeof *p);  /* nunca v->datos = realloc(v->datos, ...) */
        if (p == NULL)
            return -1;                                   /* v sigue siendo válido */
        v->datos = p;
        v->cap = nueva;
    }
    v->datos[v->n++] = x;
    return 0;
}

int main(void) {
    Vector v = {0};
    for (int i = 0; i < 1000; i++)
        assert(vector_push(&v, i * i) == 0);
    assert(v.n == 1000 && v.cap == 1024 && v.datos[999] == 998001);
    free(v.datos);                                       /* el dueño libera una vez */
    return 0;
}
```

El patrón `p = realloc(v->datos, ...)` con un puntero temporal evita una fuga: si `realloc` falla, devuelve `NULL` y el bloque
original sigue existiendo; asignarlo directamente perdería la única referencia.

**Ejemplo resuelto 3: lista enlazada y borrado con puntero a puntero.** Recorrer la lista con un `struct nodo **` (la dirección
del enlace que apunta al nodo actual) permite borrar cualquier nodo, incluido el primero, sin casos especiales.

```c
#include <assert.h>
#include <stdlib.h>

struct nodo { int valor; struct nodo *sig; };

static int inserta_cabeza(struct nodo **cabeza, int v) {
    struct nodo *n = malloc(sizeof *n);
    if (n == NULL)
        return -1;
    n->valor = v;
    n->sig = *cabeza;
    *cabeza = n;
    return 0;
}

static void borra_si(struct nodo **pp, int (*condicion)(int)) {  /* puntero a función */
    while (*pp) {
        if (condicion((*pp)->valor)) {
            struct nodo *muerto = *pp;
            *pp = muerto->sig;         /* el enlace salta el nodo */
            free(muerto);
        } else {
            pp = &(*pp)->sig;
        }
    }
}

static int es_multiplo_de_3(int x) { return x % 3 == 0; }

int main(void) {
    struct nodo *lista = NULL;
    for (int i = 1; i <= 10; i++)
        assert(inserta_cabeza(&lista, i) == 0);    /* 10 9 8 ... 1 */
    borra_si(&lista, es_multiplo_de_3);
    int suma = 0, n = 0;
    for (struct nodo *p = lista; p; p = p->sig)
        suma += p->valor, n++;
    assert(n == 7 && suma == 55 - 18);
    while (lista) {                                /* libera todo: sin fugas */
        struct nodo *s = lista->sig;
        free(lista);
        lista = s;
    }
    return 0;
}
```

**Punteros a función.** `int (*condicion)(int)` es un puntero a una función que recibe y devuelve `int`. Así se pasan
comportamientos como argumento (el patrón Estrategia de [[prog-poo-diseno]]): `qsort` recibe el comparador que define el orden.

## 8. Errores de memoria y cómo detectarlos

| Error | Ejemplo | Consecuencia |
|---|---|---|
| Desbordamiento de búfer | escribir `v[10]` en `int v[10]`, `strcpy` sin límite | corrompe datos vecinos; vulnerabilidad clásica |
| Lectura fuera de límites | leer más allá del final | filtra memoria (el fallo Heartbleed de OpenSSL era de este tipo) |
| Uso tras liberar | usar `p` después de `free(p)` | lee o escribe en un bloque reutilizado por otro |
| Doble liberación | `free(p); free(p);` | corrompe las estructuras del asignador |
| Fuga | perder el último puntero a un bloque | el proceso crece sin límite |
| Puntero colgante | devolver `&local` | apunta a un marco de pila ya reutilizado |
| Variable sin inicializar | leer una local antes de asignarla | valor arbitrario; el optimizador puede hacer cualquier cosa |
| Desbordamiento al calcular tamaños | `malloc(n * tam)` con `n` enorme | el producto da la vuelta, se reserva poco y se escribe mucho |

El último merece atención: `n * tam` en `size_t` es aritmética módulo $2^{64}$. Si `n` viene de fuera (un archivo, un paquete
de red), un atacante puede elegirlo para que el producto dé un número pequeño: el programa reserva unos pocos bytes y después
escribe `n` elementos. Defensas: usar `calloc(n, tam)` (comprueba el desbordamiento y devuelve `NULL`) o comprobar antes
`n > SIZE_MAX / tam`.

**Herramientas.** Compila durante el desarrollo con `-fsanitize=address,undefined -g`: AddressSanitizer detecta en ejecución
accesos fuera de límites (en pila, montón y globales), uso tras liberar, doble liberación y fugas, e indica la línea; UBSan
detecta desbordamientos con signo, desplazamientos inválidos, accesos desalineados y más. **Valgrind** (`valgrind ./prog`)
detecta errores parecidos sin recompilar, más despacio. Los avisos del compilador (`-Wall -Wextra`) y los analizadores estáticos
(`gcc -fanalyzer`, `clang --analyze`) encuentran parte de los errores sin ejecutar nada.

## 9. Comportamiento indefinido a fondo

El estándar distingue comportamiento **definido por la implementación** (documentado, como el tamaño de `int`), **no
especificado** (varias opciones válidas, como el valor del relleno o el orden de evaluación de los argumentos) e **indefinido**
(UB): el estándar no impone requisito alguno. El compilador optimiza **suponiendo que el UB nunca ocurre**, de modo que un
programa con UB no tiene un resultado «incorrecto»: no tiene significado, y puede comportarse distinto con `-O0` y con `-O2`.

Fuentes habituales de UB:

- Leer o escribir fuera de los límites de un objeto, o calcular un puntero fuera de su array (salvo uno más allá del final).
- Usar un puntero tras `free`, o a una variable automática fuera de su bloque.
- Leer una variable automática sin inicializar.
- Desbordar un entero **con signo**; desplazar un número de bits mayor o igual que el ancho del tipo.
- Acceder a un objeto a través de un puntero de tipo incompatible (**regla de acceso por tipo** o *strict aliasing*, 6.5p7):
  leer un `float` a través de un `uint32_t *` es UB. La forma correcta de reinterpretar bytes es `memcpy` o un puntero a
  `unsigned char` (que puede leer cualquier objeto).

```c
#include <limits.h>
#include <stdio.h>

static int siempre_cierto(int x) {
    return x + 1 > x;   /* GCC -O2 lo compila como «return 1»: supone que x + 1 no desborda */
}

int main(void) {
    printf("%d\n", siempre_cierto(41));  /* con INT_MAX el programa no tendría significado */
    return 0;
}
```

Por esa suposición, un compilador puede **eliminar una comprobación de seguridad** escrita de forma que dependa del
desbordamiento (`if (x + 100 < x) error();`): la comprobación correcta es `if (x > INT_MAX - 100) error();`. Regehr explica
estos efectos con ejemplos reales.

## 10. Del código fuente al proceso

```text
fuente.c ──cpp──▶ unidad de traducción ──cc1──▶ ensamblador .s ──as──▶ objeto .o ──ld──▶ ELF ejecutable
```

El preprocesador (`cpp`) expande `#include` y las macros; el compilador traduce a ensamblador; el ensamblador produce un
**objeto** con secciones (`.text` código, `.rodata` constantes, `.data` datos inicializados, `.bss` datos a cero) y una tabla de
**símbolos**; el **enlazador** resuelve las referencias entre objetos y bibliotecas y asigna direcciones. Al ejecutar, el núcleo
proyecta los segmentos del ELF en el espacio de direcciones del proceso y crea la pila. Se ve con `gcc -E` (preprocesado),
`gcc -S` (ensamblador), `objdump -d` (desensamblado) y `nm` (símbolos). Se desarrolla en [[sys-sistemas-operativos]] y
[[sys-ensamblador-x86-64]].

## 11. Errores típicos

- Olvidar comprobar que `malloc`/`realloc` no devolvieron `NULL`, o asignar `p = realloc(p, ...)` directamente.
- Calcular el tamaño con el tipo equivocado: usa `malloc(n * sizeof *p)`, que sigue siendo correcto si cambia el tipo de `p`.
- Liberar memoria que no se obtuvo de `malloc` (un array local, una cadena literal) o liberarla dos veces.
- Devolver punteros a variables locales; guardar dos resultados de una función con búfer `static`.
- Usar `memcpy` con regiones que se solapan (hay que usar `memmove`).
- Comparar o volcar estructuras con relleno sin haberlas puesto a cero.
- Reinterpretar bytes con un *cast* de punteros en lugar de `memcpy`.
- Suponer que un programa con UB «funciona» porque pasó las pruebas: compílalo con *sanitizers*.

## 12. Resumen

- `&` y `*`; todo se pasa por valor; para modificar, se pasa la dirección; `const` documenta y protege.
- `a[i] == *(a + i)`; la aritmética va en elementos; válida dentro del array y una posición más allá.
- Disposición: desplazamiento múltiplo de la alineación; tamaño múltiplo de la alineación máxima; el relleno no está especificado.
- Pila (locales, marcos), montón (`malloc`), datos estáticos; cada bloque dinámico, un dueño y un `free`.
- Vector por duplicación: $O(1)$ amortizado; lista con puntero a puntero.
- Errores de memoria: desbordamientos, uso tras liberar, doble liberación, fugas, tamaños que desbordan; ASan, UBSan, Valgrind.
- UB: el compilador supone que no ocurre; *strict aliasing*; `memcpy` para reinterpretar.

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

## Repaso: lo que debe quedarte dentro de un mes

1. `p + 1` avanza `sizeof *p` bytes; `a[i]` es `*(a + i)`; un array decae a puntero y pierde su longitud.
2. Reglas de disposición de una estructura y por qué ordenar de mayor a menor alineación.
3. Un dueño y un `free` por bloque; `realloc` con puntero temporal; `calloc` para tamaños que vienen de fuera.
4. ASan y UBSan durante el desarrollo; `memmove` si hay solapamiento.
5. El comportamiento indefinido no es «un resultado raro»: el compilador supone que no existe.

## Siguiente

[[sys-sistemas-operativos]] (procesos, memoria virtual, llamadas al sistema) y [[sys-ensamblador-x86-64]] (cómo se traduce
todo esto a instrucciones de la máquina).
