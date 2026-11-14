---
id: sys-c-profesional
title: "C profesional: C23, reglas de enteros y conversiones, objetos, alineación y alias, comportamiento indefinido, diseño de API y de errores, cadenas seguras, depuración y herramientas"
area: bajo-nivel
trunk_level: 9
prerequisites: [sys-c-memoria, prog-unix-texto]
academic_sources:
  - "Seacord, R. C. Effective C: An Introduction to Professional C Programming, 2ª ed. (C23). No Starch Press, 2024."
  - "Gustedt, J. Modern C, 3ª ed. (C23). Manning, 2025."
  - "ISO/IEC 9899:2024 (C23); SEI CERT C Coding Standard; documentación de GCC y Clang (avisos, -fanalyzer, sanitizadores). Consultados en noviembre de 2026."
exercises:
  - id: promociones
    tier: 1
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.) Recuerda las promociones de enteros.

      ```c
      #include <stdint.h>
      #include <stdio.h>

      int main(void) {
          unsigned char a = 200, b = 100;
          int c = a + b;
          uint8_t d = (uint8_t)(a + b);
          short s = -3;
          unsigned u = 2;
          printf("%d %u %d\n", c, (unsigned)d, s * (int)u);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:62752d814cca199fe00ab82004942a1338d705cde778f9937d8aa2c9d241eede"]
  - id: con-signo-sin-signo
    tier: 1
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.) Las conversiones aritméticas habituales deciden el tipo común de cada comparación.

      ```c
      #include <stdio.h>

      int main(void) {
          int menos_uno = -1;
          unsigned uno = 1;
          long largo = -1;
          printf("%d %d %d\n", menos_uno < uno, largo < uno, (long long)menos_uno < uno);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:8a080cea809d1b9d33b541f3498b1b6366ffc66df75423108947085057cf2f99"]
  - id: relleno
    tier: 1
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.)

      ```c
      #include <stddef.h>
      #include <stdint.h>
      #include <stdio.h>

      struct A { char c; int32_t i; char d; };
      struct B { int32_t i; char c; char d; };
      struct C { char c; double x; };

      int main(void) {
          printf("%zu %zu %zu %zu\n", sizeof(struct A), sizeof(struct B), offsetof(struct A, d), sizeof(struct C));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:282b8c79c90501634e916404787e518d2a11948aba60f6461c6dc265c4944cd3"]
  - id: cadenas
    tier: 1
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.)

      ```c
      #include <stdio.h>
      #include <string.h>

      static size_t mide(const char s[]) { return sizeof s; }

      int main(void) {
          char a[] = "hola!";
          const char *p = "hola!";
          printf("%zu %zu %zu %zu\n", strlen(a), sizeof a, sizeof p, mide(a));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:8dca256af296945f77bc0147f78e57f4d7f9e91dcbdecfa49d7a37d8c2df270c"]
  - id: snprintf
    tier: 1
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.) (`snprintf` devuelve la longitud que habría escrito sin límite.)

      ```c
      #include <stdio.h>

      int main(void) {
          char buf[8];
          int n = snprintf(buf, sizeof buf, "hola %s", "mundo");
          printf("%d [%s] %d\n", n, buf, n >= (int)sizeof buf);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:1d19314bca2cdc209e3eb3d1c4b788c6e038f672eba1e16d0fd80d6e88bb8e90"]
  - id: c23
    tier: 1
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.) Usa novedades de C23.

      ```c
      #include <stdio.h>

      constexpr int TAM = 0b1010'1010;

      int main(void) {
          bool b = true;
          int *p = nullptr;
          typeof(TAM) copia = TAM;
          auto x = 7u;
          [[maybe_unused]] int no_usado = 0;
          printf("%d %d %d %d %zu\n", copia, b, p == nullptr, (int)sizeof(x), sizeof(1'000'000));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:3bea0de0835b57428703fa550ce0abe9f36c75a1778e3dafd3547d7e2322ff54"]
  - id: strtol
    tier: 1
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.) Los códigos son: 0 correcto, 1 vacío, 2 basura al final, 3 fuera de rango.

      ```c
      #include <errno.h>
      #include <limits.h>
      #include <stdio.h>
      #include <stdlib.h>

      static int lee(const char *s, long *out) {
          char *fin;
          errno = 0;
          long v = strtol(s, &fin, 10);
          if (fin == s) return 1;
          if (*fin != '\0') return 2;
          if (errno == ERANGE) return 3;
          *out = v;
          return 0;
      }

      int main(void) {
          const char *casos[] = {"42", "  -17", "12abc", "", "99999999999999999999"};
          long v = 0;
          for (int i = 0; i < 5; ++i) {
              int r = lee(casos[i], &v);
              printf("%d", r);
          }
          printf(" %ld\n", v);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:e8dfdeceda0829832e5282918d385593aa1410b900577af2c85c61e10ae7ca5a"]
  - id: matrices
    tier: 2
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.)

      ```c
      #include <stdio.h>

      int main(void) {
          int m[3][4];
          for (int i = 0; i < 3; ++i)
              for (int j = 0; j < 4; ++j) m[i][j] = 10 * i + j;
          int *plano = &m[0][0];
          int (*fila)[4] = m + 2;
          printf("%d %d %zu %zu\n", plano[6], (*fila)[3], sizeof m, sizeof m[0]);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:d6abcf364353cea71b7a8fcc1cd9bfa0beca30135a326a3f96a77999c15f9dbc"]
  - id: qsort-structs
    tier: 2
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.)

      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>

      struct P { const char *nombre; int edad; };

      static int por_edad_desc_y_nombre(const void *a, const void *b) {
          const struct P *x = a, *y = b;
          if (x->edad != y->edad) return (y->edad > x->edad) - (y->edad < x->edad);
          return strcmp(x->nombre, y->nombre);
      }

      int main(void) {
          struct P v[] = {{"luis", 30}, {"ana", 41}, {"eva", 30}, {"jon", 25}};
          size_t n = sizeof v / sizeof v[0];
          qsort(v, n, sizeof v[0], por_edad_desc_y_nombre);
          for (size_t i = 0; i < n; ++i) printf("%s ", v[i].nombre);
          struct P clave = {"eva", 30};
          struct P *e = bsearch(&clave, v, n, sizeof v[0], por_edad_desc_y_nombre);
          printf("%td\n", e - v);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:c384032760440f71c4d4380397c7b78581658164460ffb07e07da2fefd43d65b"]
  - id: variadicas
    tier: 2
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.)

      ```c
      #include <stdarg.h>
      #include <stdio.h>

      static double media(int n, ...) {
          va_list ap;
          va_start(ap, n);
          double s = 0;
          for (int i = 0; i < n; ++i) s += va_arg(ap, double);
          va_end(ap);
          return n ? s / n : 0;
      }

      int main(void) {
          printf("%.2f %.2f\n", media(3, 1.0, 2.0, 4.5), media(2, (double)3, 4.0));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:a069300b611f297433f904e34cdced1de93cf3cfc07ad7d0f8c84db1d09fcef9"]
  - id: bits
    tier: 2
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.)

      ```c
      #include <stdint.h>
      #include <stdio.h>

      static uint32_t rotl(uint32_t x, unsigned r) { return (x << (r & 31)) | (x >> ((32 - r) & 31)); }

      static int unos(uint32_t x) {
          int c = 0;
          while (x) { x &= x - 1; ++c; }
          return c;
      }

      int main(void) {
          uint32_t x = 0xF0000001u;
          printf("%08x %d %d %d %d\n", rotl(x, 4), unos(x), __builtin_popcount(x), __builtin_ctz(0x50u), (int)((x >> 28) & 0xF));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:a8215e535bbd608360d08020df71866af1407607c627c519d2ed2f2b2ed0e3d6"]
  - id: realloc
    tier: 2
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.)

      ```c
      #include <stdio.h>
      #include <stdlib.h>

      typedef struct { int *d; size_t n, cap; } Vec;

      static int empuja(Vec *v, int x) {
          if (v->n == v->cap) {
              size_t nueva = v->cap ? 2 * v->cap : 4;
              int *p = realloc(v->d, nueva * sizeof *p);
              if (!p) return -1;
              v->d = p;
              v->cap = nueva;
          }
          v->d[v->n++] = x;
          return 0;
      }

      int main(void) {
          Vec v = {0};
          long suma = 0;
          for (int i = 1; i <= 100; ++i)
              if (empuja(&v, i) == 0) suma += v.d[v.n - 1];
          printf("%zu %zu %ld\n", v.n, v.cap, suma);
          free(v.d);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:88725a51790b9ca45579d908b50516d240eb367180c146c194a5a52b4c8f16e1"]
  - id: asan-pila
    tier: 2
    prompt: |
      Este programa se compila con AddressSanitizer y se ejecuta sin argumentos. ¿Qué tipo de error informa?

      ```c
      // flags: -fsanitize=address
      #include <stdio.h>

      static void copia(char *dst, const char *src) {
          while ((*dst++ = *src++)) {}
      }

      int main(int argc, char **argv) {
          char nombre[8];
          const char *entrada = argc > 1 ? argv[1] : "nombre-demasiado-largo";
          copia(nombre, entrada);
          printf("%c\n", nombre[0]);
      }
      ```

      Respuesta: el tipo de error tal como lo escribe AddressSanitizer.
    answers: ["sha256:a5997e464e642f3c9a4b9423c81e07d5367648ecc2468702156162b8f7fa9025"]
  - id: ubsan-desplazamiento
    tier: 2
    prompt: |
      Este programa se compila con UndefinedBehaviorSanitizer y se ejecuta sin argumentos. ¿Qué tipo de comportamiento indefinido detecta?

      ```c
      // flags: -fsanitize=undefined -fno-sanitize-recover=undefined
      #include <stdio.h>

      int main(int argc, char **argv) {
          (void)argv;
          int bits = 31 + argc;
          unsigned seguro = 1u << (bits % 32);
          printf("%u\n", seguro);
          int x = 1 << bits;
          printf("%d\n", x);
      }
      ```

      Respuesta: las dos primeras palabras del mensaje tras «runtime error:».
    answers: ["sha256:44dd99c5b65cbb9c6e24df20676e3c609473ab9e0c5c0f948b2cd6606bde7300"]
  - id: goto-limpieza
    tier: 3
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.) Es el patrón de limpieza con `goto` del núcleo de Linux.

      ```c
      #include <stdio.h>
      #include <stdlib.h>

      static int abiertos = 0;
      typedef struct { int id; } Recurso;
      static Recurso *abre(int id, int falla) { if (falla) return NULL; ++abiertos; Recurso *r = malloc(sizeof *r); r->id = id; return r; }
      static void cierra(Recurso *r) { if (r) { --abiertos; free(r); } }

      static int tarea(int falla_en) {
          int estado = -1;
          Recurso *a = NULL, *b = NULL, *c = NULL;
          if (!(a = abre(1, falla_en == 1))) goto fin;
          if (!(b = abre(2, falla_en == 2))) goto fin;
          if (!(c = abre(3, falla_en == 3))) goto fin;
          estado = a->id + b->id + c->id;
      fin:
          cierra(c);
          cierra(b);
          cierra(a);
          return estado;
      }

      int main(void) {
          for (int f = 0; f <= 3; ++f) printf("%d ", tarea(f));
          printf("| %d\n", abiertos);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:14400b5b081fbb5aa0eca3f2d11e178f87cef98df45d14edbade1cb476874f04"]
  - id: arena
    tier: 3
    prompt: |
      ¿Qué imprime? (C23 en x86-64 Linux, GCC o Clang, ejecutado sin argumentos.) Un asignador de arena con alineación.

      ```c
      #include <stdalign.h>
      #include <stddef.h>
      #include <stdint.h>
      #include <stdio.h>

      typedef struct { unsigned char *base; size_t tam, usado; } Arena;

      static void *reserva(Arena *a, size_t n, size_t alin) {
          uintptr_t actual = (uintptr_t)(a->base + a->usado);
          uintptr_t alineado = (actual + (alin - 1)) & ~(uintptr_t)(alin - 1);
          size_t nuevo = (size_t)(alineado - (uintptr_t)a->base) + n;
          if (nuevo > a->tam) return NULL;
          a->usado = nuevo;
          return (void *)alineado;
      }

      int main(void) {
          alignas(16) static unsigned char memoria[64];
          Arena a = {memoria, sizeof memoria, 0};
          char *c = reserva(&a, 3, 1);
          double *d = reserva(&a, sizeof(double), alignof(double));
          int32_t *i = reserva(&a, 2 * sizeof(int32_t), alignof(int32_t));
          void *demasiado = reserva(&a, 64, 1);
          printf("%td %td %td %zu %d\n", (unsigned char *)c - memoria, (unsigned char *)d - memoria, (unsigned char *)i - memoria, a.usado, demasiado == NULL);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:5dfece59ed7a2567b653a8e63bc8ec707ae9741c620d2985592c8fc760a2307d"]
---

C tiene más de cincuenta años y sigue debajo de casi todo: el núcleo de Linux, las bibliotecas del sistema, los intérpretes de Python y Ruby, las bases de datos
embebidas, el firmware de miles de millones de microcontroladores. [[sys-c-fundamentos]] y [[sys-c-memoria]] enseñaron el lenguaje y su modelo de memoria; este nodo
enseña a escribir C **de producción**: el que no se rompe con una entrada hostil, compila sin avisos en varios compiladores, tiene una API que se puede mantener
años y se depura con método. El núcleo son las reglas que más errores causan (las conversiones de enteros, el alias y el comportamiento indefinido), las
novedades de **C23** que hacen el código más seguro, y el arsenal de herramientas profesional: avisos como errores, sanitizadores, Valgrind, gdb, análisis
estático y *fuzzing*.

## Objetivos

Al terminar sabrás:

1. Aplicar las promociones de enteros y las conversiones aritméticas habituales, y evitar los desbordamientos con aritmética comprobada.
2. Razonar sobre objetos, duraciones de almacenamiento, alineación, relleno, tipo efectivo y alias estricto.
3. Reconocer el comportamiento indefinido que más se ve y cómo lo aprovechan los optimizadores.
4. Diseñar APIs en C: tipos opacos, pares crear/destruir, propiedad documentada, códigos de error y limpieza con `goto`.
5. Manejar cadenas y entradas de forma segura (`snprintf`, `strtol`, `getline`).
6. Usar las novedades de C23 (`bool`, `nullptr`, `constexpr`, `typeof`, `auto`, atributos, `#embed`, `<stdckdint.h>`, `<stdbit.h>`).
7. Compilar con avisos estrictos y depurar con sanitizadores, Valgrind, gdb, análisis estático y *fuzzing*.

## Qué debes dominar antes

[[sys-c-memoria]] (punteros, memoria dinámica, comportamiento indefinido básico) y [[prog-unix-texto]] (make y la línea de órdenes).

> [!question] Test de entrada
> 1. ¿Qué valor tiene `(unsigned char)300`?
> 2. ¿Qué diferencia hay entre `sizeof` de un array y de un puntero?
> 3. ¿Qué devuelve `malloc` si no hay memoria?
>
> Respuestas: 44 (300 módulo 256); el del array es su tamaño total en bytes y el del puntero, el tamaño de una dirección (8 en 64 bits); `NULL`, y hay que comprobarlo.

## 1. Para qué sirve

- **Sistemas**: núcleos, controladores, cargadores de arranque, bibliotecas de C y criptográficas.
- **Embebidos**: microcontroladores sin sistema operativo, donde C sigue siendo el estándar (con MISRA C en automoción y aviónica).
- **Interoperabilidad**: C es la lengua franca de las interfaces binarias; Rust, Python, Go y C++ se hablan entre sí a través de APIs de C.
- **Seguridad**: auditar C es el día a día de quien busca vulnerabilidades o las previene ([[sec-explotacion-binaria]]).

## 2. Enteros: promociones y conversiones

- **Promociones de enteros**: en una expresión, los tipos más pequeños que `int` (`char`, `short`, `uint8_t`) se convierten a `int`. `unsigned char a = 200, b = 100; a + b` vale 300 (un `int`), no 44.
- **Conversiones aritméticas habituales**: con dos operandos de tipos distintos se busca un tipo común; si uno es sin signo y su rango es mayor o igual que el del otro, **el con signo se convierte a sin
  signo**. Por eso `-1 < 1u` es **falso** (`-1` pasa a ser `UINT_MAX`), pero `-1L < 1u` es verdadero en x86-64 Linux, porque `long` (64 bits) puede representar todo `unsigned int`. Los avisos
  `-Wsign-compare` y `-Wconversion` señalan estos casos.
- **Desbordamiento**: en enteros **sin signo**, aritmética módulo $2^n$ (definida); en enteros **con signo**, **comportamiento indefinido**. El cálculo de tamaños para `malloc(n * tam)` es una fuente clásica
  de vulnerabilidades. C23 trae **`<stdckdint.h>`**: `ckd_add(&r, a, b)`, `ckd_sub`, `ckd_mul` devuelven `true` si el resultado no cabe.
- **Tipos de anchura fija** (`<stdint.h>`): `int32_t`, `uint64_t`, `uintptr_t`; `size_t` (tamaños, sin signo) y `ptrdiff_t` (diferencias de punteros, con signo). Formatos de `printf` correctos: `%zu`, `%td`,
  `PRIu64` de `<inttypes.h>`. Los desplazamientos mayores o iguales que el ancho del tipo, o de valores negativos, son comportamiento indefinido.

## 3. Objetos, alineación y alias

Cada objeto tiene una **duración de almacenamiento**: automática (variables locales, en la pila), estática (globales y `static`, toda la ejecución), asignada (`malloc`) o de hilo (`thread_local`). Tiene también
una **alineación** (`alignof`, `alignas` en C23): un `double` en x86-64 debe estar en una dirección múltiplo de 8, y por eso el compilador añade **relleno** entre campos (`offsetof` dice dónde queda cada
uno; ordenar los campos de mayor a menor alineación lo reduce). Acceder a un objeto a través de un puntero desalineado es comportamiento indefinido (en x86 suele funcionar; en otras arquitecturas, falla).

**Alias estricto**: un objeto solo puede leerse a través de su propio tipo (o compatibles, con o sin signo, o como `char`/`unsigned char`). Leer un `float` como `uint32_t` mediante un *cast* de puntero es
comportamiento indefinido y el optimizador puede suponer que esos dos punteros no se solapan; la forma correcta es **`memcpy`** (que el compilador convierte en una simple carga). `restrict` promete que un
puntero es el único acceso a su objeto, y permite optimizaciones (como en `memcpy`). Los **miembros de array flexible** (`struct { size_t n; int datos[]; }`) reservan un bloque de tamaño variable al final de un
struct.

## 4. Comportamiento indefinido y optimizadores

El estándar lista más de doscientos casos. Los que más aparecen: desbordamiento con signo, acceso fuera de límites, uso tras liberar y doble liberación, lectura de memoria sin inicializar, punteros nulos,
violaciones de alias y de alineación, carreras de datos, y modificar un literal de cadena. El compilador **supone** que no ocurren: un `if (x + 1 < x)` para detectar desbordamiento se elimina entero (si `x`
es con signo, `x + 1 < x` "no puede" ser cierto); una comprobación de `NULL` después de desreferenciar el puntero desaparece. Por eso proyectos como el núcleo de Linux compilan con `-fno-strict-aliasing` y
`-fwrapv`, y el código profesional se prueba siempre con **UBSan** y **ASan**.

## 5. Diseño de APIs y de errores en C

- **Tipos opacos**: la cabecera declara `typedef struct Cola Cola;` sin su contenido, y solo el `.c` lo define. El usuario no puede depender de los campos, así que se pueden cambiar sin romper la ABI.
- **Pares crear/destruir** con la propiedad documentada: `Cola *cola_crea(size_t cap); void cola_destruye(Cola *c);` (y `destruye(NULL)` no hace nada, como `free`).
- **Errores**: un `enum` de códigos devuelto por cada función (y el resultado por un parámetro de salida), o `NULL`/`-1` con `errno`, según la convención de la biblioteca; con una función que traduzca el
  código a texto. `[[nodiscard]]` (C23) hace que el compilador avise si se ignora el retorno.
- **Limpieza con `goto`**: en funciones que adquieren varios recursos, un único bloque de liberación al final, en orden inverso, al que saltan todos los errores. Es el estilo del núcleo de Linux, más claro
  que anidar `if`.
- **Higiene**: prefijos como espacio de nombres (`cola_`), `static` en todo lo que no se exporta, `const` en los punteros de solo lectura, cabeceras autocontenidas con guardas, y no exponer `struct` cuya
  disposición quieras poder cambiar.

## 6. Cadenas y entradas

- `strcpy`, `strcat`, `sprintf` y `gets` (eliminado del estándar) no conocen el tamaño del destino: no se usan. `strncpy` tampoco es la solución (no garantiza el terminador y rellena con ceros).
- **`snprintf(buf, tam, ...)`** siempre termina en nulo y devuelve la longitud que **habría** escrito: si es `>= tam`, hubo truncamiento.
- Convertir números con **`strtol`/`strtoul`/`strtod`** comprobando el puntero de fin y `errno == ERANGE`; `atoi` no informa de errores.
- Leer líneas con `fgets` (tamaño fijo) o `getline` (POSIX, reserva lo necesario). Las funciones `_s` del Anexo K casi no tienen implementaciones y no son portables.

## 7. C23

**C23** (ISO/IEC 9899:2024) moderniza el lenguaje: `bool`, `true` y `false` son palabras clave; **`nullptr`**; **`constexpr`** para objetos; **`typeof`**; **`auto`** para deducir el tipo de una variable;
atributos `[[nodiscard]]`, `[[maybe_unused]]`, `[[deprecated]]`, `[[fallthrough]]`; `static_assert` y `alignas` como palabras clave; literales binarios `0b1010` y separadores de dígitos `1'000'000`;
inicialización vacía `= {}`; enumeraciones con tipo subyacente; **`#embed`** para incluir un archivo binario como datos; **`<stdckdint.h>`** (aritmética comprobada) y **`<stdbit.h>`** (contar bits, potencias de
dos). Elimina las definiciones de funciones al estilo K&R y exige complemento a dos para los enteros con signo. GCC y Clang lo implementan casi entero con `-std=c23`.

## 8. Herramientas y método

- **Compilar**: `-std=c23 -Wall -Wextra -Wpedantic -Wconversion -Wshadow -Werror`, en GCC **y** Clang (cada uno avisa de cosas distintas); `-fanalyzer` de GCC hace análisis estático entre funciones.
- **Sanitizadores** en las pruebas: `-fsanitize=address,undefined` (y `thread` por separado). **Valgrind** (`memcheck`) detecta lo mismo que ASan sin recompilar, mucho más despacio.
- **gdb**: `break`, `run`, `next`/`step`, `bt` (pila de llamadas), `frame`, `print`, `watch` (para cuando una variable cambia), y análisis de **volcados de memoria** (`ulimit -c unlimited`, `gdb ./prog core`).
- **Análisis estático**: clang-tidy, cppcheck, scan-build. **Pruebas** con Unity o CMocka; ***fuzzing*** con libFuzzer o AFL++ para todo lo que lea datos externos.
- **Construcción**: Make o CMake (`prog-cpp-profesional`). **Normas**: SEI CERT C y, en sectores regulados, MISRA C. **Endurecimiento**: `-D_FORTIFY_SOURCE=3`, `-fstack-protector-strong`, PIE, RELRO.

> [!example] Ejemplo resuelto 1: un tamaño que desborda
> `void *reserva_matriz(size_t filas, size_t cols) { return malloc(filas * cols * sizeof(double)); }` con `filas = cols = 2^31` calcula $2^{65}$ bytes, que en `size_t` de 64 bits da la vuelta a 0: `malloc(0)` devuelve
> un bloque diminuto y las escrituras siguientes desbordan el montón. Con C23: `size_t n; if (ckd_mul(&n, filas, cols) || ckd_mul(&n, n, sizeof(double))) return NULL;`. Es exactamente el error que
> `calloc(filas * cols, ...)` evita al hacer la comprobación por dentro.

> [!example] Ejemplo resuelto 2: una cola con API opaca
> `cola.h` declara `typedef struct Cola Cola;`, `typedef enum { COLA_OK, COLA_LLENA, COLA_VACIA, COLA_SIN_MEMORIA } ColaError;`, `[[nodiscard]] Cola *cola_crea(size_t cap)`, `ColaError cola_mete(Cola *, int)`,
> `ColaError cola_saca(Cola *, int *salida)` y `void cola_destruye(Cola *)`. El `.c` define el struct con un miembro de array flexible y un búfer circular. El usuario no puede romper el invariante tocando
> los índices, y la biblioteca puede cambiar la implementación sin recompilar a nadie. El programa del §9 la implementa y la prueba bajo los sanitizadores.

> [!example] Ejemplo resuelto 3: un lector de configuración robusto (con menos ayuda)
> Escribe una función que lea con `getline` líneas `clave = valor` (con comentarios `#` y espacios alrededor), convierta los valores numéricos con `strtol` comprobando errores y devuelva un código por
> línea errónea con su número. Pruébala con ASan y UBSan, y con un *fuzzer* de libFuzzer (`LLVMFuzzerTestOneInput`) durante un minuto. ¿Qué entradas encuentra el *fuzzer* que tus pruebas no cubrían?

## 9. Comprobar con un programa

Compila en C23 con GCC y Clang con `-Wall -Wextra -Wpedantic -Werror` y se ejecuta con AddressSanitizer y UndefinedBehaviorSanitizer sin errores: el ejemplo 1 con `ckd_mul`, la cola opaca del ejemplo 2
(en un solo archivo), la lectura con `memcpy` en vez de un *cast* que viola el alias, y `strtol` con todas sus comprobaciones.

```c
#include <errno.h>
#include <limits.h>
#include <stdckdint.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// --- Ejemplo resuelto 1: tamaños comprobados.
static void *reserva_matriz(size_t filas, size_t cols) {
    size_t n;
    if (ckd_mul(&n, filas, cols) || ckd_mul(&n, n, sizeof(double))) return nullptr;
    return malloc(n);
}

// --- Ejemplo resuelto 2: cola opaca (aquí, interfaz e implementación en el mismo archivo).
typedef struct Cola Cola;
typedef enum { COLA_OK, COLA_LLENA, COLA_VACIA } ColaError;
struct Cola {
    size_t cap, cabeza, n;
    int datos[];
};

[[nodiscard]] static Cola *cola_crea(size_t cap) {
    size_t tam;
    if (cap == 0 || ckd_mul(&tam, cap, sizeof(int)) || ckd_add(&tam, tam, sizeof(Cola))) return nullptr;
    Cola *c = malloc(tam);
    if (c) *c = (Cola){.cap = cap};
    return c;
}
static void cola_destruye(Cola *c) { free(c); }
static ColaError cola_mete(Cola *c, int x) {
    if (c->n == c->cap) return COLA_LLENA;
    c->datos[(c->cabeza + c->n++) % c->cap] = x;
    return COLA_OK;
}
static ColaError cola_saca(Cola *c, int *salida) {
    if (c->n == 0) return COLA_VACIA;
    *salida = c->datos[c->cabeza];
    c->cabeza = (c->cabeza + 1) % c->cap;
    --c->n;
    return COLA_OK;
}

// --- Leer los bits de un float sin violar el alias estricto.
static uint32_t bits_de(float f) {
    uint32_t u;
    static_assert(sizeof u == sizeof f);
    memcpy(&u, &f, sizeof u);
    return u;
}

// --- strtol con todas las comprobaciones.
static bool lee_entero(const char *s, int *out) {
    char *fin;
    errno = 0;
    long v = strtol(s, &fin, 10);
    if (fin == s || *fin != '\0' || errno == ERANGE || v < INT_MIN || v > INT_MAX) return false;
    *out = (int)v;
    return true;
}

int main(void) {
    void *grande = reserva_matriz((size_t)1 << 31, (size_t)1 << 31);
    void *pequena = reserva_matriz(3, 4);
    printf("matriz enorme: %s, pequeña: %s\n", grande ? "reservada" : "rechazada", pequena ? "reservada" : "rechazada");
    free(pequena);

    Cola *c = cola_crea(3);
    if (!c) return 1;
    int x = 0, suma = 0, llenas = 0;
    for (int i = 1; i <= 5; ++i) llenas += cola_mete(c, i) == COLA_LLENA;
    while (cola_saca(c, &x) == COLA_OK) suma += x;
    for (int i = 10; i <= 13; ++i) (void)cola_mete(c, i);
    (void)cola_saca(c, &x);
    printf("cola: %d rechazadas, suma %d, siguiente %d\n", llenas, suma, x);
    cola_destruye(c);

    printf("bits de 1.0f: %08x\n", (unsigned)bits_de(1.0f));
    const char *entradas[] = {"123", "-7", "12x", "", "99999999999"};
    for (size_t i = 0; i < sizeof entradas / sizeof entradas[0]; ++i) {
        int v = 0;
        printf("%s%s", lee_entero(entradas[i], &v) ? "ok" : "no", i + 1 < sizeof entradas / sizeof entradas[0] ? " " : "\n");
    }
    return grande == nullptr && llenas == 2 && suma == 6 && x == 10 ? 0 : 1;
}
```

## 10. Errores típicos

- Mezclar con signo y sin signo en comparaciones y bucles (`for (size_t i = n - 1; i >= 0; --i)` no termina nunca).
- `malloc(n * tam)` sin comprobar el desbordamiento; no comprobar `NULL`.
- Reinterpretar memoria con *casts* de punteros en lugar de `memcpy`.
- `strcpy`, `sprintf`, `atoi`, `gets`; `strncpy` como "versión segura".
- Ignorar el valor de retorno de funciones que pueden fallar; `[[nodiscard]]` ayuda.
- Exponer la definición de los structs en la API pública.
- Liberar en orden incorrecto o en varios sitios; no usar un único bloque de limpieza.
- Compilar con un solo compilador, sin `-Werror` y sin sanitizadores.
- Depurar con `printf` lo que gdb, ASan o un `watch` encuentran en minutos.

## 11. Resumen

- Promociones a `int`; conversiones habituales (el con signo pasa a sin signo si no cabe); desbordamiento con signo indefinido; `ckd_add/sub/mul`; `<stdint.h>`, `size_t`, `ptrdiff_t`, `%zu`, `%td`.
- Duraciones de almacenamiento, alineación y relleno, `offsetof`, alias estricto y `memcpy`, `restrict`, arrays flexibles.
- Comportamiento indefinido y optimizadores; `-fwrapv`, `-fno-strict-aliasing`.
- APIs: tipos opacos, crear/destruir, códigos de error, `[[nodiscard]]`, `goto` de limpieza, prefijos, `static`, `const`.
- `snprintf`, `strtol` con comprobaciones, `getline`.
- C23: `bool`, `nullptr`, `constexpr`, `typeof`, `auto`, atributos, `0b` y `'`, `#embed`, `<stdckdint.h>`, `<stdbit.h>`.
- `-Wall -Wextra -Wpedantic -Wconversion -Werror` en GCC y Clang, `-fanalyzer`, ASan/UBSan/TSan, Valgrind, gdb y volcados, clang-tidy, *fuzzing*, CERT C y MISRA, endurecimiento.

## Repaso: lo que debe quedarte dentro de un mes

1. `-1 < 1u` es falso: el con signo se convirtió a sin signo.
2. Todo tamaño calculado se comprueba antes de `malloc`.
3. Para reinterpretar bytes, `memcpy`.
4. En una API, struct opaco, crear/destruir y códigos de error.
5. Ningún código C se fusiona sin avisos como errores, dos compiladores y sanitizadores.

## Siguiente

El proyecto `proy-sys-shell-c` (una shell de Unix en C, donde se aplica todo esto), `sys-ensamblador-arm` y `sys-kernel-linux`. El mismo lenguaje con abstracciones está en [[prog-cpp-moderno]].
