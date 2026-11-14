---
id: prog-cpp-genericidad
title: "C++ moderno II, programación genérica: plantillas, deducción y resolución de sobrecargas, conceptos, constexpr y consteval, plantillas variádicas, reenvío perfecto, CRTP, borrado de tipos y metaprogramación"
area: bajo-nivel
trunk_level: 10
prerequisites: [prog-cpp-moderno]
academic_sources:
  - "Vandevoorde, D.; Josuttis, N. M.; Gregor, D. C++ Templates: The Complete Guide, 2ª ed. Addison-Wesley, 2017."
  - "Josuttis, N. M. C++20 – The Complete Guide. NicoJosuttis, 2022."
  - "ISO/IEC 14882:2024 (C++23) y cppreference.com (templates, constraints and concepts, constant expressions). Consultados en noviembre de 2026."
exercises:
  - id: deduccion
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <iostream>

      template <typename T>
      T mayor(T a, T b) { return a > b ? a : b; }

      template <typename T, typename U>
      auto suma(T a, U b) { return a + b; }

      int main() {
          std::cout << mayor(3, 7) << ' ' << mayor<double>(3, 4.5) << ' ' << suma(1, 2.5) << ' ' << sizeof(suma('a', 1)) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:beaaf16cce9b717f7b8253a68cd421b0d47fe1265fbcee9cbcdcb4af91c1dd42"]
  - id: parametro-no-tipo
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <array>
      #include <cstddef>
      #include <iostream>

      template <typename T, std::size_t N>
      class Pila {
          std::array<T, N> d_{};
          std::size_t n_ = 0;
      public:
          bool mete(T x) { if (n_ == N) return false; d_[n_++] = x; return true; }
          std::size_t tam() const { return n_; }
          static constexpr std::size_t capacidad() { return N; }
      };

      int main() {
          Pila<int, 3> p;
          int aceptados = 0;
          for (int i = 0; i < 5; ++i) aceptados += p.mete(i);
          std::cout << aceptados << ' ' << p.tam() << ' ' << Pila<char, 8>::capacidad() << ' ' << sizeof(Pila<char, 8>) - sizeof(std::size_t) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:92558c434783e42c876aecb2be96e48437a4ecfea46f5b61ca4d522836135ed9"]
  - id: especializacion
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) Hay una especialización completa y una parcial.

      ```cpp
      #include <iostream>
      #include <string>

      template <typename T>
      struct Nombre { static std::string de() { return "otro"; } };

      template <>
      struct Nombre<int> { static std::string de() { return "int"; } };

      template <typename T>
      struct Nombre<T*> { static std::string de() { return "puntero a " + Nombre<T>::de(); } };

      int main() {
          std::cout << Nombre<double>::de() << ", " << Nombre<int>::de() << ", " << Nombre<int**>::de() << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:367a8d16a7e00bd0e7515d4acf1bb84b27499a0751c323656d6b38295c61f141"]
  - id: resolucion-de-sobrecargas
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) Una función que no es plantilla gana solo en igualdad de conversiones; la plantilla más especializada gana a la general.

      ```cpp
      #include <iostream>

      template <typename T> const char* f(T) { return "plantilla"; }
      const char* f(int) { return "int"; }
      const char* f(double) { return "double"; }
      template <typename T> const char* g(T*) { return "T*"; }
      template <typename T> const char* g(T) { return "T"; }

      int main() {
          int x = 0;
          std::cout << f(1) << ' ' << f(1.0f) << ' ' << f('c') << ' ' << f<>(1) << ' ' << g(&x) << ' ' << g(x) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:c4ee128c06a0f249126d4269f0184dd9d65c0573f293a72accb4fa65fb850cf4"]
  - id: decltype
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) (`decltype((x))`, con doble paréntesis, es el tipo de la expresión.)

      ```cpp
      #include <iostream>
      #include <type_traits>

      int x = 1;
      int& ref() { return x; }
      auto copia() { return ref(); }
      decltype(auto) mismo() { return ref(); }

      int main() {
          std::cout << std::is_same_v<decltype(x), int> << std::is_same_v<decltype((x)), int&>
                    << std::is_same_v<decltype(copia()), int> << std::is_same_v<decltype(mismo()), int&> << ' ';
          mismo() = 5;
          copia();
          std::cout << x << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:e0f8aece47e9bfb35bb8c9f09efb3ac062174eefd68b8c11a1b760c8291eb794"]
  - id: constexpr
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <array>
      #include <iostream>

      constexpr long long factorial(int n) { return n <= 1 ? 1 : n * factorial(n - 1); }

      constexpr int cifras(long long v) {
          int c = 1;
          while (v >= 10) { v /= 10; ++c; }
          return c;
      }

      int main() {
          constexpr auto f20 = factorial(20);
          static_assert(f20 == 2432902008176640000LL);
          std::array<int, cifras(f20)> a{};
          std::cout << a.size() << ' ' << f20 % 1000003 << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:077cb2cb7ec05c0cd4bc67fac54594ca99e41ae98f208aec879d43c8d112aeb8"]
  - id: variadicas
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <iostream>
      #include <string>

      template <typename... Ts>
      auto suma(Ts... xs) { return (xs + ... + 0); }

      template <typename... Ts>
      constexpr std::size_t cuantos() { return sizeof...(Ts); }

      template <typename... Ts>
      void imprime(const Ts&... xs) {
          std::string sep;
          ((std::cout << sep << xs, sep = ","), ...);
          std::cout << '\n';
      }

      int main() {
          std::cout << suma(1, 2, 3, 4) << ' ' << suma() << ' ' << cuantos<int, char, double>() << ' ';
          imprime(1, "dos", 3.5, 'x');
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:173a4cdad59113b3e5068ec25e9d69508519e34d1f4715e066ade40490283ff4"]
  - id: conceptos
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <concepts>
      #include <iostream>
      #include <string>

      template <std::integral T>
      std::string clase(T) { return "entero"; }

      template <std::floating_point T>
      std::string clase(T) { return "flotante"; }

      template <typename T>
          requires requires(T t) { t.size(); }
      std::string clase(const T& t) { return "contenedor de " + std::to_string(t.size()); }

      template <typename T>
      concept Numerico = std::integral<T> || std::floating_point<T>;

      auto doble(Numerico auto x) { return x * 2; }

      int main() {
          std::cout << clase(3) << ' ' << clase(2.5) << ' ' << clase('a') << ' ' << clase(std::string("hola")) << ' ' << doble(21) << ' ' << doble(1.25) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:a7644075164cade3d02b3014d94a753bd6a490cf2ab0bdb90a046d3f39e816a8"]
  - id: if-constexpr
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <iostream>
      #include <string>
      #include <type_traits>
      #include <vector>

      template <typename T>
      std::string describe(const T& x) {
          if constexpr (std::is_arithmetic_v<T>) {
              return "num:" + std::to_string(x * 2);
          } else if constexpr (requires { x.begin(); x.end(); }) {
              std::string r = "seq:";
              for (const auto& e : x) r += describe(e) + ";";
              return r;
          } else {
              return "?";
          }
      }

      struct Nada {};

      int main() {
          std::cout << describe(4) << ' ' << describe(std::vector<int>{1, 2}) << ' ' << describe(Nada{}) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:21e8041f00a5aa122a870b0bfa300686ad3a83633c9339d291d1cff7f9792a72"]
  - id: reenvio-perfecto
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) Cuenta copias y movimientos hacia `destino`.

      ```cpp
      #include <iostream>
      #include <string>
      #include <utility>

      struct S {
          static inline int copias = 0, movs = 0;
          S() = default;
          S(const S&) { ++copias; }
          S(S&&) noexcept { ++movs; }
      };

      void destino(S s) { (void)s; }

      template <typename T>
      void sin_forward(T&& x) { destino(x); }

      template <typename T>
      void con_forward(T&& x) { destino(std::forward<T>(x)); }

      int main() {
          S a;
          sin_forward(a);
          sin_forward(S{});
          con_forward(a);
          con_forward(S{});
          std::cout << S::copias << ' ' << S::movs << '\n';
      }
      ```

      Respuesta: los dos números separados por un espacio.
    answers: ["sha256:eb1e33e8a81b697b75855af6bfcdbcbf7cbbde9f94962ceaec1ed8af21f5a50f"]
  - id: referencias-universales
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) Cómo se deduce `T` en una referencia de reenvío `T&&`.

      ```cpp
      #include <iostream>
      #include <type_traits>

      template <typename T>
      constexpr int tipo(T&&) {
          if constexpr (std::is_lvalue_reference_v<T>) return std::is_const_v<std::remove_reference_t<T>> ? 2 : 1;
          else return 0;
      }

      int main() {
          int x = 0;
          const int c = 0;
          std::cout << tipo(x) << tipo(c) << tipo(5) << tipo(static_cast<int&&>(x)) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:15197cf7214b58e67cae565e573ffd9aa44bcb81f8ee5d7185dfe8da0a16ef43"]
  - id: crtp
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) (Patrón de plantilla curiosamente recurrente.)

      ```cpp
      #include <iostream>

      template <typename Derivada>
      struct Contable {
          static inline int vivos = 0;
          Contable() { ++vivos; }
          Contable(const Contable&) { ++vivos; }
          ~Contable() { --vivos; }
          int doble() const { return 2 * static_cast<const Derivada*>(this)->valor(); }
      };

      struct A : Contable<A> { int valor() const { return 3; } };
      struct B : Contable<B> { int valor() const { return 10; } };

      int main() {
          A a1, a2;
          B b1;
          {
              A a3 = a1;
              std::cout << Contable<A>::vivos << ' ';
          }
          std::cout << Contable<A>::vivos << ' ' << Contable<B>::vivos << ' ' << a1.doble() + b1.doble() << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:f04d843c366adfee1f59976608aceba9b2a6c74a8c68c86060fa30169501f90c"]
  - id: borrado-de-tipos
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <iostream>
      #include <memory>
      #include <string>
      #include <vector>

      class Forma {
          struct Concepto {
              virtual ~Concepto() = default;
              virtual double area() const = 0;
          };
          template <typename T>
          struct Modelo final : Concepto {
              T obj;
              explicit Modelo(T o) : obj(std::move(o)) {}
              double area() const override { return obj.area(); }
          };
          std::unique_ptr<Concepto> p_;
      public:
          template <typename T>
          Forma(T obj) : p_(std::make_unique<Modelo<T>>(std::move(obj))) {}
          double area() const { return p_->area(); }
      };

      struct Cuadrado { double l; double area() const { return l * l; } };
      struct Rect { double a, b; double area() const { return a * b; } };

      int main() {
          std::vector<Forma> fs;
          fs.emplace_back(Cuadrado{3});
          fs.emplace_back(Rect{2, 5});
          fs.emplace_back(Cuadrado{0.5});
          double t = 0;
          for (const auto& f : fs) t += f.area();
          std::cout << t << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:be885d68b006d2627589c734781d940fa2ba23b91a2392d71d4c2c8783a0eb4e"]
  - id: tabla-constexpr
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) La tabla se calcula en compilación.

      ```cpp
      #include <array>
      #include <iostream>

      template <int N>
      constexpr std::array<bool, N> criba() {
          std::array<bool, N> p{};
          p.fill(true);
          p[0] = p[1] = false;
          for (int i = 2; i * i < N; ++i)
              if (p[i])
                  for (int j = i * i; j < N; j += i) p[j] = false;
          return p;
      }

      constexpr auto PRIMOS = criba<1000>();

      consteval int cuenta_primos() {
          int c = 0;
          for (bool b : PRIMOS) c += b;
          return c;
      }

      int main() {
          static_assert(cuenta_primos() == 168);
          int ultimo = 0;
          for (int i = 999; i > 0; --i) if (PRIMOS[i]) { ultimo = i; break; }
          std::cout << cuenta_primos() << ' ' << ultimo << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:57b3b3df2b32e9e751168e922ef6ee9ad1c4685bce5455505e5c667771820ffb"]
  - id: metaprogramacion
    tier: 3
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.)

      ```cpp
      #include <cstddef>
      #include <iostream>
      #include <type_traits>

      template <typename... Ts> struct Lista {};

      template <typename L> struct Longitud;
      template <typename... Ts> struct Longitud<Lista<Ts...>> : std::integral_constant<std::size_t, sizeof...(Ts)> {};

      template <typename T, typename L> struct Contiene;
      template <typename T, typename... Ts> struct Contiene<T, Lista<Ts...>> : std::bool_constant<(std::is_same_v<T, Ts> || ...)> {};

      template <typename L> struct TamTotal;
      template <typename... Ts> struct TamTotal<Lista<Ts...>> : std::integral_constant<std::size_t, (sizeof(Ts) + ... + 0)> {};

      template <unsigned N> struct Fib : std::integral_constant<unsigned long long, Fib<N - 1>::value + Fib<N - 2>::value> {};
      template <> struct Fib<0> : std::integral_constant<unsigned long long, 0> {};
      template <> struct Fib<1> : std::integral_constant<unsigned long long, 1> {};

      int main() {
          using L = Lista<int, char, double, short>;
          std::cout << Longitud<L>::value << ' ' << Contiene<double, L>::value << Contiene<float, L>::value << ' ' << TamTotal<L>::value << ' ' << Fib<50>::value << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:6cf4b24e800534bdc62a2867bb7148442c1b041aaae68c748e4195ac8eb2a998"]
  - id: despacho-por-etiquetas
    tier: 3
    prompt: |
      ¿Qué imprime? (C++23, GCC o Clang en x86-64.) Cada iterador elige su versión de `avanza` según su categoría.

      ```cpp
      #include <forward_list>
      #include <iostream>
      #include <iterator>
      #include <list>
      #include <vector>

      static int pasos = 0;

      template <typename It>
      void avanza(It& it, int n, std::random_access_iterator_tag) { it += n; ++pasos; }

      template <typename It>
      void avanza(It& it, int n, std::bidirectional_iterator_tag) {
          if (n >= 0) while (n--) { ++it; ++pasos; }
          else while (n++) { --it; ++pasos; }
      }

      template <typename It>
      void avanza(It& it, int n, std::forward_iterator_tag) { while (n--) { ++it; ++pasos; } }

      template <typename It>
      void avanza(It& it, int n) { avanza(it, n, typename std::iterator_traits<It>::iterator_category{}); }

      int main() {
          std::vector<int> v{1, 2, 3, 4, 5, 6};
          std::list<int> l(v.begin(), v.end());
          std::forward_list<int> f(v.begin(), v.end());
          auto iv = v.begin(); auto il = l.end(); auto iff = f.begin();
          avanza(iv, 4); avanza(il, -2); avanza(iff, 3);
          std::cout << *iv << *il << *iff << ' ' << pasos << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:81792906f17d7bc4be9abf66a07d7484e4a353fb3474ac8afa807d9d27673edd"]
---

La biblioteca estándar de C++ (contenedores, algoritmos, `std::optional`, rangos) está hecha de **plantillas**: código que se escribe una vez y el compilador instancia para cada
tipo, sin coste en ejecución. Saber usarlas es imprescindible; saber **escribirlas** es lo que separa a quien usa bibliotecas de quien las diseña. Las plantillas de C++ son, además, un
lenguaje en sí mismo que se ejecuta en el compilador: deducen tipos, eligen implementaciones, calculan tablas en tiempo de compilación. Durante años eso produjo mensajes de error
ilegibles y trucos oscuros (SFINAE); el C++ moderno lo ha domesticado con **conceptos** (C++20), `if constexpr` (C++17) y la evaluación en compilación con `constexpr` y `consteval`. Este nodo
recorre todo eso con la precisión necesaria para predecir qué sobrecarga se elige y qué tipo se deduce, que es exactamente lo que pregunta cualquier entrevista seria de C++.

## Objetivos

Al terminar sabrás:

1. Escribir plantillas de función y de clase con parámetros de tipo y de valor, y especializarlas total o parcialmente.
2. Predecir la deducción de argumentos (incluidas las referencias de reenvío) y la resolución de sobrecargas con plantillas.
3. Restringir plantillas con conceptos y cláusulas `requires`, y entender qué resolvían SFINAE y `enable_if`.
4. Calcular en compilación con `constexpr`, `consteval`, `static_assert` e `if constexpr`.
5. Usar plantillas variádicas y expresiones de plegado, y reenviar argumentos sin copias con `std::forward`.
6. Aplicar CRTP, borrado de tipos y despacho por etiquetas, y escribir metaprogramas con rasgos de tipo.

## Qué debes dominar antes

[[prog-cpp-moderno]]: clases, RAII, movimiento y categorías de valor, contenedores y lambdas. La comparación con los genéricos de Rust de [[prog-rust-traits-genericos]] ayuda: allí las cotas
se comprueban en la definición; aquí, tradicionalmente, en la instanciación.

> [!question] Test de entrada
> 1. ¿Qué es una referencia a rvalue y para qué sirve?
> 2. ¿Qué hace `std::move`?
> 3. ¿Qué ventaja tiene una función genérica frente a escribir una versión para cada tipo?
>
> Respuestas: una referencia que se enlaza a temporales y a valores marcados como movibles, para implementar el movimiento; convierte su argumento en un xvalue para permitir moverlo; una sola
> implementación que se mantiene y se prueba una vez.

## 1. Para qué sirve

- **Bibliotecas**: toda la STL, Boost, Eigen (álgebra lineal con plantillas de expresiones), fmt, ranges, bibliotecas de serialización.
- **Rendimiento**: el polimorfismo estático (plantillas, CRTP) evita las llamadas virtuales y permite alinear, clave en cálculo numérico, motores de juego y baja latencia.
- **Seguridad de tipos**: unidades físicas en el sistema de tipos, máquinas de estados comprobadas en compilación, tablas precalculadas sin coste al arrancar.

## 2. Plantillas de función y de clase

`template <typename T> T mayor(T a, T b)` define una familia de funciones; usarla con `int` **instancia** `mayor<int>`. Las plantillas de clase (`template <typename T, std::size_t N> class Pila`) admiten
parámetros de **tipo**, de **valor** (no tipo: enteros, punteros, y desde C++20 tipos literales) y **plantilla de plantilla**. El código de una plantilla se compila al instanciarla, así que debe estar
visible en cada unidad de traducción que la usa: por eso vive en las cabeceras.

**Especialización**: una **completa** (`template <> struct Nombre<int>`) da una implementación distinta para un tipo concreto; una **parcial** (`template <typename T> struct Nombre<T*>`, solo para clases)
cubre una familia (todos los punteros). El compilador elige la especialización **más especializada** que encaja. Las funciones no se especializan parcialmente: se **sobrecargan**.

## 3. Deducción y resolución de sobrecargas

Al llamar a una plantilla de función sin indicar los argumentos, el compilador los **deduce** de los argumentos de la llamada. Reglas clave:

- Por **valor** (`T x`): se ignoran referencias y `const` de nivel superior; los arrays y funciones decaen a punteros. Si dos argumentos deducen `T` distintos (`mayor(3, 4.5)`), es un error: hay que dar
  el tipo (`mayor<double>`) o usar dos parámetros.
- **Referencia de reenvío** (`T&&` con `T` deducido): con un lvalue de tipo `int`, `T` es `int&` (y por el **colapso de referencias** `int& &&` es `int&`); con un rvalue, `T` es `int`. Con un `const int` lvalue,
  `T` es `const int&`.
- `auto` en una variable sigue las reglas de la deducción por valor; **`decltype(auto)`** conserva la categoría exacta (devuelve `int&` si la expresión es un lvalue). `decltype(x)` es el tipo declarado,
  `decltype((x))` el de la **expresión** (un lvalue, así que `int&`).

**Resolución de sobrecargas** con plantillas: entre los candidatos viables gana el de mejores **conversiones** (coincidencia exacta > promoción > conversión); en empate, una función que **no es
plantilla** gana a una plantilla, y entre plantillas, la **más especializada** (`g(T*)` gana a `g(T)` con un puntero). Una plantilla con coincidencia exacta (`f<float>`) gana a una función normal que
necesita una promoción (`f(double)`). `f<>(x)` fuerza a usar solo plantillas.

## 4. Conceptos y restricciones

Antes de C++20 una plantilla aceptaba cualquier tipo y fallaba **dentro**, con errores de decenas de líneas; o se restringía con **SFINAE** (*substitution failure is not an error*: si sustituir los
tipos en la firma produce un tipo inválido, el candidato se descarta en silencio) y `std::enable_if`, legible solo para expertos. C++20 introduce los **conceptos**, predicados sobre tipos que se
comprueban **antes** de instanciar:

- Concepto de la biblioteca: `std::integral`, `std::floating_point`, `std::same_as`, `std::convertible_to`, `std::invocable`, `std::ranges::range`, `std::totally_ordered`…
- Uso: `template <std::integral T>`, `requires std::integral<T>` tras la cabecera, o la forma abreviada `auto doble(Numerico auto x)`.
- Definición: `template <typename T> concept Numerico = std::integral<T> || std::floating_point<T>;`, y expresiones `requires` que comprueban que algo compila: `requires(T t) { t.size(); { t.begin() } ->
  std::input_iterator; }`.
- Las sobrecargas restringidas se ordenan: la más restringida (cuyo concepto **subsume** al otro) gana.

## 5. Calcular en compilación

- **`constexpr`** en funciones: pueden evaluarse en compilación si sus argumentos son constantes (y si no, en ejecución). Desde C++20 admiten bucles, `std::vector` y `std::string` transitorios, `try`,
  e incluso reservas que se liberan antes de terminar la evaluación. En variables, `constexpr` exige un valor calculado en compilación.
- **`consteval`** (C++20): la función **debe** evaluarse en compilación. **`constinit`**: inicialización estática garantizada (sin el "fiasco del orden de inicialización").
- **`static_assert(cond, "mensaje")`**: comprueba en compilación.
- **`if constexpr`** (C++17): la rama descartada **no se instancia**, así que puede contener código que no compilaría para ese tipo. Sustituye a la mayoría del despacho con SFINAE.
- Los **rasgos de tipo** de `<type_traits>` (`std::is_integral_v`, `std::remove_reference_t`, `std::decay_t`, `std::conditional_t`) preguntan y transforman tipos.

## 6. Plantillas variádicas y reenvío perfecto

`template <typename... Ts> void f(Ts... xs)` acepta cualquier número de argumentos; `sizeof...(Ts)` los cuenta y las **expresiones de plegado** (C++17) los combinan: `(xs + ... + 0)`, `(std::cout << ... <<
xs)`, `((accion(xs)), ...)` con el operador coma. Se usan en `std::make_unique`, `emplace_back`, `std::tuple`, `std::format`.

**Reenvío perfecto**: dentro de `template <typename T> void envoltorio(T&& x)`, `x` tiene nombre y por tanto es un **lvalue**, aunque se haya pasado un temporal. `std::forward<T>(x)` lo reenvía con su
categoría original: rvalue si lo era (y entonces se mueve), lvalue si no. Sin `forward`, cada capa de envoltorio copia lo que podría mover. `std::move` en una referencia de reenvío es un error
(movería también los lvalues del llamador).

## 7. Técnicas de diseño

- **CRTP** (*curiously recurring template pattern*): `struct A : Base<A>`; la base conoce el tipo derivado en compilación y llama a sus métodos con `static_cast<const Derivada*>(this)`, sin `virtual`. Sirve para
  polimorfismo estático, para inyectar funcionalidad (contadores, comparaciones) y, en C++23, se simplifica con el **parámetro `this` explícito** (*deducing this*).
- **Borrado de tipos**: una clase no plantilla (`Forma`) con un constructor plantilla guarda **cualquier** tipo que cumpla una interfaz implícita, usando internamente una jerarquía virtual
  (`Concepto`/`Modelo<T>`). Da semántica de valor y polimorfismo sin que los tipos hereden de nada. Es lo que hacen `std::function`, `std::any` y `std::move_only_function`.
- **Despacho por etiquetas**: elegir la implementación según un tipo etiqueta (`std::random_access_iterator_tag`): `std::advance` avanza en O(1) en un `vector` y en O(n) en una lista. Hoy se escribe con
  conceptos o `if constexpr`, pero aparece en todo el código existente.
- **Metaprogramación de tipos**: listas de tipos (`Lista<Ts...>`), especializaciones parciales que las recorren, `std::integral_constant`. Bibliotecas como Boost.Mp11 lo sistematizan; la
  **reflexión estática** de C++26 sustituirá buena parte de estos trucos.

> [!example] Ejemplo resuelto 1: qué sobrecarga se elige
> Con `template <typename T> f(T)`, `f(int)` y `f(double)`: `f(1)` es exacto para la plantilla (`T = int`) y para `f(int)`; empatan, y gana la **no plantilla**. `f(1.0f)` es exacto para la plantilla
> (`T = float`) y necesita una promoción para `f(double)`: gana la **plantilla**. `f('c')`: exacto para la plantilla, promoción a `int` para `f(int)`: plantilla. Y con `g(T)` y `g(T*)`, `g(&x)` elige `g(T*)`
> porque es **más especializada**. Es el ejercicio "resolución de sobrecargas" de este nodo.

> [!example] Ejemplo resuelto 2: una función que se adapta al tipo
> `describe(x)` debe devolver `num:` y el doble para números, `seq:` y los elementos para secuencias, y `?` para lo demás. Con `if constexpr (std::is_arithmetic_v<T>)` y `else if constexpr (requires {
> x.begin(); x.end(); })` cada rama solo se instancia para los tipos que la cumplen (multiplicar un `std::vector` no llega a compilarse). La recursión `describe(e)` sobre los elementos funciona para
> vectores de vectores.

> [!example] Ejemplo resuelto 3: unidades físicas en el sistema de tipos (con menos ayuda)
> Define `template <int M, int S> struct Magnitud { double v; };` (exponentes de metro y segundo), con `operator+` solo entre iguales y `operator*`/`operator/` que suman o restan los exponentes en el tipo
> del resultado. Comprueba con `static_assert` que `distancia / tiempo` tiene tipo `Magnitud<1, -1>` y que sumar metros con segundos no compila. El programa siguiente contiene una solución.

## 8. Comprobar con un programa

Compila con GCC y Clang en C++23 con `-Wall -Wextra -Wpedantic -Werror` y se ejecuta con sanitizadores: el ejemplo 3 (unidades), un `make_unique` propio con reenvío perfecto, conceptos con
subsunción, una tabla `constexpr` y el tipo de las referencias de reenvío.

```cpp
#include <array>
#include <cassert>
#include <concepts>
#include <iostream>
#include <memory>
#include <string>
#include <type_traits>
#include <utility>

// --- Ejemplo resuelto 3: unidades en el tipo.
template <int M, int S>
struct Magnitud {
    double v;
};
template <int M, int S>
constexpr Magnitud<M, S> operator+(Magnitud<M, S> a, Magnitud<M, S> b) { return {a.v + b.v}; }
template <int M1, int S1, int M2, int S2>
constexpr Magnitud<M1 + M2, S1 + S2> operator*(Magnitud<M1, S1> a, Magnitud<M2, S2> b) { return {a.v * b.v}; }
template <int M1, int S1, int M2, int S2>
constexpr Magnitud<M1 - M2, S1 - S2> operator/(Magnitud<M1, S1> a, Magnitud<M2, S2> b) { return {a.v / b.v}; }
using Metros = Magnitud<1, 0>;
using Segundos = Magnitud<0, 1>;
using Velocidad = Magnitud<1, -1>;

template <typename A, typename B>
concept Sumables = requires(A a, B b) { a + b; };

// --- Reenvío perfecto: un make_unique propio.
struct Traza {
    static inline int copias = 0, movs = 0;
    std::string s;
    explicit Traza(std::string x) : s(std::move(x)) {}
    Traza(const Traza& o) : s(o.s) { ++copias; }
    Traza(Traza&& o) noexcept : s(std::move(o.s)) { ++movs; }
};
struct Par {
    Traza a, b;
    Par(Traza x, Traza y) : a(std::move(x)), b(std::move(y)) {}
};
template <typename T, typename... Args>
std::unique_ptr<T> crea(Args&&... args) { return std::unique_ptr<T>(new T(std::forward<Args>(args)...)); }

// --- Conceptos con subsunción: gana el más restringido.
template <typename T> concept Ordenable = std::totally_ordered<T>;
template <typename T> concept Entero = Ordenable<T> && std::integral<T>;
template <Ordenable T> constexpr const char* tipo(T) { return "ordenable"; }
template <Entero T> constexpr const char* tipo(T) { return "entero"; }

// --- Tabla calculada en compilación.
constexpr auto cuadrados = [] {
    std::array<int, 10> a{};
    for (int i = 0; i < 10; ++i) a[static_cast<std::size_t>(i)] = i * i;
    return a;
}();

template <typename T>
constexpr bool es_lvalue(T&&) { return std::is_lvalue_reference_v<T>; }

int main() {
    constexpr Metros d{100};
    constexpr Segundos t{9.58};
    constexpr auto v = d / t;
    static_assert(std::is_same_v<std::remove_const_t<decltype(v)>, Velocidad>);
    static_assert(Sumables<Metros, Metros> && !Sumables<Metros, Segundos>);
    static_assert(std::is_same_v<decltype(v * t), Metros>);
    std::cout << "velocidad: " << v.v << " m/s\n";

    Traza x("izquierda");
    auto p = crea<Par>(x, Traza("derecha"));
    std::cout << "copias " << Traza::copias << ", movimientos " << Traza::movs << '\n';
    assert(Traza::copias == 1 && Traza::movs == 3 && p->a.s == "izquierda");

    std::cout << tipo(3) << ' ' << tipo(2.5) << ' ' << tipo(std::string("x")) << '\n';
    static_assert(cuadrados[9] == 81);
    int n = 0;
    static_assert(!es_lvalue(5));
    assert(es_lvalue(n) && !es_lvalue(std::move(n)));
    std::cout << "suma de la tabla: " << [] { int s = 0; for (int c : cuadrados) s += c; return s; }() << '\n';
}
```

## 9. Errores típicos

- Definir una plantilla en un `.cpp` y usarla en otro (error de enlazado): las plantillas van en cabeceras.
- Esperar que `mayor(3, 4.5)` deduzca `double`.
- Usar `std::move` en una referencia de reenvío, o no usar `std::forward`.
- Escribir SFINAE donde basta un concepto o `if constexpr`.
- Sobrecargas ambiguas entre plantillas sin un orden de especialización claro.
- Olvidar `typename` delante de un nombre dependiente que es un tipo (`typename T::value_type`).
- Metaprogramación innecesaria: si una función `constexpr` normal resuelve el problema, es más legible.
- Restricciones demasiado laxas (errores tarde) o demasiado estrictas (rechazan tipos válidos).

## 10. Resumen

- Plantillas de función y clase; parámetros de tipo, valor y plantilla; instanciación en cabeceras; especialización completa y parcial, la más especializada gana.
- Deducción por valor (decaimiento, sin `const` superior), referencias de reenvío y colapso (`T = int&` para lvalues), `auto`, `decltype` y `decltype(auto)`.
- Resolución: mejores conversiones; en empate, no plantilla y luego la más especializada.
- SFINAE y `enable_if` frente a conceptos (`requires`, abreviados, subsunción).
- `constexpr`, `consteval`, `constinit`, `static_assert`, `if constexpr`, rasgos de tipo.
- Variádicas y plegado; `std::forward` para el reenvío perfecto.
- CRTP (y *deducing this*), borrado de tipos, despacho por etiquetas, listas de tipos; reflexión en C++26.

## Repaso: lo que debe quedarte dentro de un mes

1. Una función normal gana a una plantilla solo en igualdad de conversiones.
2. En `T&&` deducido, un lvalue hace que `T` sea una referencia.
3. Un parámetro con nombre es un lvalue: reenvíalo con `std::forward<T>`.
4. Los conceptos comprueban los tipos antes de instanciar.
5. `if constexpr` no instancia la rama descartada.

## Siguiente

`prog-cpp-profesional` (concurrencia y modelo de memoria, rendimiento, CMake, gestores de paquetes, pruebas y herramientas). Los genéricos de Rust, con las cotas comprobadas en la definición,
están en [[prog-rust-traits-genericos]].
