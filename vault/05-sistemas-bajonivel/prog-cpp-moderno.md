---
id: prog-cpp-moderno
title: "C++ moderno I: modelo de compilación, semántica de valor y RAII, movimiento, punteros inteligentes, la biblioteca estándar, lambdas, rangos y excepciones"
area: bajo-nivel
trunk_level: 9
prerequisites: [sys-c-memoria, prog-poo-diseno]
academic_sources:
  - "Stroustrup, B. A Tour of C++, 3ª ed. Addison-Wesley, 2022."
  - "Meyers, S. Effective Modern C++: 42 Specific Ways to Improve Your Use of C++11 and C++14. O'Reilly, 2014."
  - "ISO/IEC 14882:2024 (C++23); cppreference.com y C++ Core Guidelines (Stroustrup, Sutter). Consultados en noviembre de 2026."
exercises:
  - id: valor-y-referencia
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.)

      ```cpp
      #include <iostream>

      void por_valor(int x) { x += 10; }
      void por_referencia(int& x) { x += 10; }
      int doble(const int& x) { return 2 * x; }

      int main() {
          int a = 1;
          por_valor(a);
          por_referencia(a);
          int& alias = a;
          alias *= 3;
          std::cout << a << ' ' << doble(a) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:0db1804a6beaabd4686ed1f9a9763427df438dafe97e3a2a761e1db81405f538"]
  - id: raii-orden
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) Fíjate en el objeto global y en el orden de destrucción.

      ```cpp
      #include <iostream>
      #include <string>

      struct Ruido {
          std::string n;
          explicit Ruido(std::string s) : n(std::move(s)) { std::cout << "+" << n << ' '; }
          ~Ruido() { std::cout << "-" << n << ' '; }
      };

      Ruido global("g");

      int main() {
          Ruido a("a");
          {
              Ruido b("b");
              Ruido c("c");
          }
          Ruido d("d");
          std::cout << "| ";
      }
      ```

      Respuesta: la salida tal cual.
    answers: ["sha256:1af659f082e9a6737f082576b1c11f5cee8a8f7defaa053879b125d6d61047ee"]
  - id: string
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.)

      ```cpp
      #include <iostream>
      #include <string>

      int main() {
          std::string s = "exodus.config.json";
          auto p = s.find('.');
          auto q = s.rfind('.');
          std::cout << s.size() << ' ' << s.substr(0, p) << ' ' << s.substr(q + 1) << ' ' << (s.find("xml") == std::string::npos) << '\n';
          s.replace(p, q - p, ".prod");
          std::cout << s << '\n';
      }
      ```

      Respuesta: las dos líneas separadas por `;` (`true` se imprime como `1`).
    answers: ["sha256:5c9107b80289305bd11ea45d7d1cc7fce4b179453f79d07349f85e5844294579"]
  - id: vector-borrar
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) (`std::erase` y `std::erase_if` son de C++20 y devuelven cuántos elementos borraron.)

      ```cpp
      #include <algorithm>
      #include <iostream>
      #include <vector>

      int main() {
          std::vector<int> v{5, 1, 4, 1, 5, 9, 2, 6, 5};
          auto n = std::erase(v, 5);
          std::erase_if(v, [](int x) { return x % 2 == 0; });
          v.insert(v.begin(), 7);
          for (int x : v) std::cout << x << ' ';
          std::cout << "| " << n << ' ' << v.size() << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:9edbf8d59ab7340d9051c50cf939696f89d103f96666234506eabbaa10da98a5"]
  - id: map-corchetes
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) Ojo: `operator[]` de `std::map` inserta si la clave no existe.

      ```cpp
      #include <iostream>
      #include <map>
      #include <string>

      int main() {
          std::map<std::string, int> m{{"b", 2}, {"a", 1}};
          int x = m["z"];
          auto it = m.find("q");
          bool hay_q = it != m.end();
          m["c"] += 5;
          for (const auto& [k, v] : m) std::cout << k << v << ' ';
          std::cout << "| " << x << ' ' << hay_q << ' ' << m.size() << ' ' << m.contains("q") << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:7e76d703ae5b45bc432e65c5c03d2f86e1c6d1f2e8931baed0f0c39aa4fdac76"]
  - id: capturas
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.)

      ```cpp
      #include <iostream>

      int main() {
          int n = 1;
          auto por_valor = [n] { return n * 10; };
          auto por_ref = [&n] { return n * 10; };
          auto contador = [k = 0]() mutable { return ++k; };
          n = 5;
          contador();
          contador();
          std::cout << por_valor() << ' ' << por_ref() << ' ' << contador() << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:f67872be29ccbe1cb925b15a68e6e8acecb203525451f510e0f016606077df9b"]
  - id: enlaces-estructurados
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) (La división entera de C++ trunca hacia cero.)

      ```cpp
      #include <iostream>
      #include <map>
      #include <tuple>

      std::tuple<int, int> divmod(int a, int b) { return {a / b, a % b}; }

      int main() {
          auto [c, r] = divmod(-17, 5);
          std::map<int, char> m{{3, 'c'}, {1, 'a'}, {2, 'b'}};
          int suma = 0;
          for (auto& [k, v] : m) {
              v = static_cast<char>(v - 32);
              suma += k;
          }
          std::cout << c << ' ' << r << ' ' << m[1] << m[2] << m[3] << ' ' << suma << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:fcd2b4636c8c057bfe323a4a94f6701d2e3cb817332321c932174df1c2603fa9"]
  - id: copias-y-movimientos
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) Cuenta copias y movimientos; el `reserve` evita reubicaciones.

      ```cpp
      #include <iostream>
      #include <string>
      #include <utility>
      #include <vector>

      struct S {
          static inline int copias = 0, movimientos = 0;
          std::string dato = "x";
          S() = default;
          S(const S& o) : dato(o.dato) { ++copias; }
          S(S&& o) noexcept : dato(std::move(o.dato)) { ++movimientos; }
      };

      S fabrica() { return S{}; }

      int main() {
          std::vector<S> v;
          v.reserve(8);
          S a;
          v.push_back(a);
          v.push_back(std::move(a));
          v.emplace_back();
          v.push_back(fabrica());
          S b = v[0];
          S c = std::move(b);
          std::cout << S::copias << ' ' << S::movimientos << '\n';
      }
      ```

      Respuesta: los dos números separados por un espacio.
    answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
  - id: unique-y-shared
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.)

      ```cpp
      #include <iostream>
      #include <memory>

      int main() {
          auto u = std::make_unique<int>(7);
          auto u2 = std::move(u);
          std::cout << (u == nullptr) << ' ' << *u2 << ' ';
          auto s1 = std::make_shared<int>(1);
          {
              auto s2 = s1;
              auto s3 = s2;
              std::cout << s1.use_count() << ' ';
          }
          std::shared_ptr<int> s4 = std::move(u2);
          std::cout << s1.use_count() << ' ' << *s4 << ' ' << (u2 == nullptr) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:b7932125838048891cb9355b9fb8fae3cc88890b644e10db9d8c10e7f0f2cf0c"]
  - id: weak
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.)

      ```cpp
      #include <iostream>
      #include <memory>

      struct Nodo {
          int v;
          std::weak_ptr<Nodo> padre;
      };

      int main() {
          std::weak_ptr<Nodo> w;
          auto hijo = std::make_shared<Nodo>(Nodo{2, {}});
          {
              auto raiz = std::make_shared<Nodo>(Nodo{1, {}});
              hijo->padre = raiz;
              w = raiz;
              if (auto p = hijo->padre.lock()) std::cout << p->v << ' ' << raiz.use_count() << ' ';
          }
          std::cout << w.expired() << ' ' << (hijo->padre.lock() == nullptr) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:2ecefe59ab6ae4e734bb1adec3bbb706be8c6fae0b39500d05f7a6665ffa7390"]
  - id: regla-de-cinco
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) La asignación usa el modismo de copiar e intercambiar.

      ```cpp
      #include <algorithm>
      #include <cstddef>
      #include <iostream>
      #include <utility>

      class Buffer {
          std::size_t n_;
          int* d_;
      public:
          explicit Buffer(std::size_t n) : n_(n), d_(new int[n]{}) {}
          ~Buffer() { delete[] d_; }
          Buffer(const Buffer& o) : n_(o.n_), d_(new int[o.n_]) { std::copy(o.d_, o.d_ + n_, d_); }
          Buffer& operator=(Buffer o) noexcept { swap(o); return *this; }
          Buffer(Buffer&& o) noexcept : n_(std::exchange(o.n_, 0)), d_(std::exchange(o.d_, nullptr)) {}
          void swap(Buffer& o) noexcept { std::swap(n_, o.n_); std::swap(d_, o.d_); }
          int& operator[](std::size_t i) { return d_[i]; }
          std::size_t size() const { return n_; }
      };

      int main() {
          Buffer a(3);
          a[0] = 7;
          Buffer b = a;
          b[0] = 9;
          Buffer c = std::move(b);
          a = c;
          c[1] = 4;
          std::cout << a[0] << a[1] << ' ' << c[0] << c[1] << ' ' << b.size() << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:41c253fff2f3b9a90749743012dc93e03f2aa59e342d1ed62c8df920134e625e"]
  - id: optional-variant
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.)

      ```cpp
      #include <iostream>
      #include <optional>
      #include <string>
      #include <variant>
      #include <vector>

      std::optional<int> raiz_entera(int x) {
          for (int r = 0; r * r <= x; ++r)
              if (r * r == x) return r;
          return std::nullopt;
      }

      using Valor = std::variant<int, double, std::string>;

      std::string describe(const Valor& v) {
          return std::visit([](const auto& x) -> std::string {
              using T = std::decay_t<decltype(x)>;
              if constexpr (std::is_same_v<T, int>) return "i" + std::to_string(x);
              else if constexpr (std::is_same_v<T, double>) return "d";
              else return "s" + std::to_string(x.size());
          }, v);
      }

      int main() {
          std::cout << raiz_entera(49).value_or(-1) << ' ' << raiz_entera(50).value_or(-1) << ' ';
          std::vector<Valor> vs{3, 2.5, std::string("hola"), 7};
          for (const auto& v : vs) std::cout << describe(v) << ' ';
          std::cout << vs[1].index() << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:ae699bdb053ec2afa02fb5b1ba93c988fbbbf3643b07916cadbb389d5e8e8c52"]
  - id: excepciones
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) Sigue el desenrollado de la pila: qué destructores se ejecutan y en qué orden.

      ```cpp
      #include <iostream>
      #include <stdexcept>
      #include <string>

      struct Traza {
          char c;
          ~Traza() { std::cout << c; }
      };

      int profundo(int x) {
          Traza t{'p'};
          if (x > 2) throw std::out_of_range("demasiado: " + std::to_string(x));
          return x;
      }

      int medio(int x) {
          Traza t{'m'};
          return profundo(x + 1);
      }

      int main() {
          try {
              Traza t{'a'};
              std::cout << medio(1) << ' ';
              std::cout << medio(5) << ' ';
          } catch (const std::logic_error& e) {
              std::cout << " [" << e.what() << "]";
          } catch (...) {
              std::cout << " [otra]";
          }
          std::cout << '\n';
      }
      ```

      Respuesta: la salida tal cual.
    answers: ["sha256:20846e3fc81354d21f248bfe70745e04cb9d8989ef040c06216afb2cbee181a8"]
  - id: ordenar
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.)

      ```cpp
      #include <algorithm>
      #include <iostream>
      #include <string>
      #include <vector>

      struct P {
          std::string n;
          int edad;
      };

      int main() {
          std::vector<P> v{{"ana", 30}, {"luis", 25}, {"eva", 30}, {"jon", 25}, {"sara", 41}};
          std::stable_sort(v.begin(), v.end(), [](const P& a, const P& b) { return a.edad < b.edad; });
          for (const auto& p : v) std::cout << p.n << ' ';
          auto it = std::lower_bound(v.begin(), v.end(), 30, [](const P& p, int e) { return p.edad < e; });
          std::cout << "| " << it - v.begin() << ' ' << std::count_if(v.begin(), v.end(), [](const P& p) { return p.edad >= 30; }) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:f76927a1e8f2cc2e256a15a6dfc72a47854c9fd2247ae7eebaad7a43a50cd354"]
  - id: asan
    tier: 3
    prompt: |
      Este programa se compila con AddressSanitizer (`-fsanitize=address`). ¿Qué tipo de error informa al ejecutarlo? Explica por qué antes de responder.

      ```cpp
      // flags: -fsanitize=address -fno-omit-frame-pointer
      #include <iostream>
      #include <vector>

      int main() {
          std::vector<int> v(3, 7);
          int suma = 0;
          for (std::size_t i = 0; i <= v.size(); ++i) suma += v.data()[i];
          std::cout << suma << '\n';
      }
      ```

      Respuesta: el tipo de error tal como lo escribe AddressSanitizer.
    answers: ["sha256:87ee90cf590bf8ceb279bfc6bc06ac9c757c5bb3e697cc13e40b08cbaa0dc12e"]
  - id: rangos
    tier: 3
    prompt: |
      ¿Qué imprime? (C++23, compilado con GCC o Clang.) (`std::views::stride` es de C++23.)

      ```cpp
      #include <iostream>
      #include <numeric>
      #include <ranges>
      #include <vector>

      int main() {
          namespace rv = std::views;
          auto cuadrados_impares = rv::iota(1) | rv::filter([](int x) { return x % 2 == 1; }) | rv::transform([](int x) { return x * x; }) | rv::take(5);
          for (int x : cuadrados_impares) std::cout << x << ' ';
          std::vector<int> v{4, 8, 15, 16, 23, 42};
          auto r = v | rv::reverse | rv::drop(1) | rv::stride(2);
          std::vector<int> w(r.begin(), r.end());
          std::cout << "| " << std::accumulate(w.begin(), w.end(), 0) << ' ' << w.size() << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:b54c7c1890ce06c3ee0cbbaa4b5b4297c83157be934ba74513a6308ac932f972"]
---

C++ mueve buena parte de la infraestructura que usas sin verla: navegadores, motores de videojuegos, bases de datos, compiladores, sistemas de trading,
simuladores, el software de coches y aviones, y casi todo el cálculo científico de alto rendimiento. Es un lenguaje enorme con cuarenta años de historia, y la
diferencia entre el C++ de 1998 y el **C++ moderno** (C++11 en adelante: 14, 17, 20 y 23) es tan grande que casi son lenguajes distintos. El moderno se basa en una
idea: **los recursos los gestiona el ámbito** (RAII), así que el código correcto no lleva `new` ni `delete`, ni `fclose`, ni `unlock` manuales; y en la
**semántica de movimiento**, que permite pasar objetos grandes sin copiarlos. Este primer nodo de C++ cubre el núcleo que todo profesional usa a diario; los dos
siguientes, la programación genérica y el C++ de producción (concurrencia, rendimiento, herramientas). Si vienes de [[sys-c-memoria]] o de Rust, verás las mismas
ideas de propiedad, pero esta vez es el programador, no el compilador, quien las mantiene: por eso aquí también aprenderás a detectar errores con sanitizadores.

## Objetivos

Al terminar sabrás:

1. Explicar el modelo de compilación (preprocesador, unidades de traducción, enlazado, la regla de una definición) y los estándares vigentes.
2. Usar tipos, inicialización, referencias, `const` y `constexpr`, `enum class` y clases con corrección constante.
3. Diseñar clases con RAII y aplicar la regla de cero, tres y cinco.
4. Distinguir categorías de valor y usar la semántica de movimiento, `noexcept` y la elisión de copias.
5. Gestionar la propiedad con `unique_ptr`, `shared_ptr` y `weak_ptr`.
6. Elegir contenedores de la STL conociendo su coste y sus reglas de invalidación, y usar algoritmos, lambdas y rangos.
7. Manejar errores con excepciones (y sus garantías) o `std::expected`, y detectar comportamiento indefinido con sanitizadores.

## Qué debes dominar antes

[[sys-c-memoria]] (punteros, memoria dinámica, comportamiento indefinido) y [[prog-poo-diseno]] (clases, encapsulación, composición, interfaces).

> [!question] Test de entrada
> 1. ¿Qué pasa en C si olvidas llamar a `free`? ¿Y si lo llamas dos veces?
> 2. ¿Qué es un constructor?
> 3. ¿Qué diferencia hay entre pasar un argumento por valor y por puntero?
>
> Respuestas: una fuga de memoria; comportamiento indefinido (corrupción del montón); la función que crea e inicializa un objeto; por valor se copia el dato y los cambios no
> afectan al original, por puntero se pasa la dirección y se puede modificar el original.

## 1. Para qué sirve

- **Rendimiento con abstracción**: motores de juego (Unreal), navegadores (Chromium), bases de datos (ClickHouse, MySQL), compiladores (LLVM), bibliotecas de IA (el núcleo de PyTorch y TensorFlow).
- **Sistemas en tiempo real y embebidos**: automoción, aviónica, robótica (ROS 2 y su `rclcpp`, `rob-ros2`), equipos médicos.
- **Finanzas y simulación**: sistemas de baja latencia y cálculo científico.
- **Seguridad**: buena parte de las vulnerabilidades de memoria del mundo están en código C y C++; saber leerlo y endurecerlo es parte del oficio defensivo.

## 2. Estándares y modelo de compilación

El lenguaje lo define un estándar ISO. El vigente es **C++23** (ISO/IEC 14882:2024); el comité técnico terminó **C++26** en marzo de 2026 (con reflexión estática y contratos), y su
aprobación final por ISO seguía en discusión en noviembre de 2026. Los compiladores principales son **GCC**, **Clang** y **MSVC**; se elige el estándar con `-std=c++23`.

Un programa se compila **por unidades de traducción**: cada `.cpp`, tras el **preprocesador** (`#include` pega el texto del archivo, `#define` sustituye texto), se compila por separado
a un objeto, y el **enlazador** los une. Por eso las **declaraciones** van en cabeceras (`.hpp`, con `#pragma once` o guardas) y las **definiciones** en un único `.cpp`: la **regla de una
definición** (ODR) exige una sola definición de cada función no `inline` en todo el programa. Las funciones y variables `inline`, las plantillas y las funciones `constexpr` sí pueden
definirse en cabeceras. Los **módulos** de C++20 (`import std;`) sustituyen al modelo textual de `#include` y aceleran la compilación, y su adopción en herramientas avanza.

## 3. Tipos, inicialización y clases

- `auto` deduce el tipo; la **inicialización con llaves** `int x{3};` prohíbe las conversiones con pérdida (`int y{3.5};` no compila).
- **Referencias** `T&`: un alias que no puede ser nulo ni reasignarse; `const T&` permite pasar objetos grandes sin copiarlos y aceptar temporales. Regla: pasa por valor los tipos baratos,
  por `const&` los caros que solo lees, por `&` los que modificas, y devuelve por valor.
- `const` (no modificable) y **`constexpr`** (evaluable en compilación; las funciones `constexpr` pueden ejecutarse en el compilador). `enum class` da enumeraciones con ámbito que no se
  convierten solas a entero.
- **Clases**: miembros privados por defecto (`struct`, públicos), constructores con **lista de inicialización** (`: n_(n), d_(new int[n]{})`, que inicializa en el orden de **declaración** de los
  miembros), métodos `const` que prometen no modificar el objeto (y son los únicos que se pueden llamar sobre un `const&`), `explicit` en constructores de un argumento para evitar
  conversiones implícitas.

## 4. RAII: los recursos los gestiona el ámbito

**RAII** (*resource acquisition is initialization*): un objeto adquiere el recurso en su constructor y lo libera en su **destructor**, que el lenguaje llama **siempre** al salir del ámbito,
también si se sale por una excepción. Los objetos locales se destruyen en **orden inverso** a su construcción; los globales se construyen antes de `main` y se destruyen después. Así se
gestionan memoria (`std::vector`, `std::string`, punteros inteligentes), archivos (`std::fstream`), cerrojos (`std::lock_guard`), conexiones… El código no necesita `try/finally`.

Las **funciones miembro especiales** (constructor por defecto, de copia, de movimiento, asignación de copia, de movimiento, destructor) las genera el compilador si no las declaras, y hacen lo
correcto si cada miembro lo hace. De ahí las reglas:

- **Regla de cero**: si tus miembros ya gestionan sus recursos (`std::vector`, `std::unique_ptr`…), no escribas ninguna de las cinco. Es el caso normal.
- **Regla de cinco** (antes, de tres): si escribes una (porque gestionas un recurso crudo), escribe las cinco, o bórralas (`= delete`) a propósito. El modismo **copiar e intercambiar**
  (`operator=(Buffer o) { swap(o); return *this; }`) da una asignación correcta ante la autoasignación y segura ante excepciones.

## 5. Categorías de valor y movimiento

Cada expresión tiene una **categoría**: un **lvalue** tiene identidad (una variable con nombre); un **prvalue** es un valor puro temporal (`S{}`, `a + b`, lo que devuelve una función por valor);
un **xvalue** es un objeto con identidad cuyos recursos se pueden robar (`std::move(x)`). Una **referencia a rvalue** `T&&` se enlaza a prvalues y xvalues, y permite el **constructor de
movimiento** `S(S&& o)`, que roba los recursos de `o` (punteros, buffers) en lugar de copiarlos y lo deja en un estado **válido pero no especificado** (normalmente vacío).

- `std::move` **no mueve nada**: es una conversión a xvalue que permite elegir la sobrecarga de movimiento.
- Marca los movimientos **`noexcept`**: `std::vector` solo mueve sus elementos al reubicarse si el movimiento no puede lanzar (si no, copia, para conservar la garantía fuerte).
- **Elisión de copias**: desde C++17, devolver un prvalue (`return S{};`) o inicializar con él construye directamente en el destino (garantizado); devolver una variable local con nombre
  normalmente se elide (NRVO) o, si no, se mueve. No escribas `return std::move(local);`: impide la elisión.
- `emplace_back(args...)` construye el elemento dentro del contenedor; `push_back(x)` copia un lvalue y mueve un rvalue.

## 6. Propiedad: punteros inteligentes

- **`std::unique_ptr<T>`**: un único dueño, sin coste frente al puntero crudo; se mueve pero no se copia; admite un borrador propio (para un `FILE*` o un manejador de una biblioteca de C).
  Se crea con `std::make_unique`.
- **`std::shared_ptr<T>`**: propiedad compartida con un **bloque de control** y un contador **atómico** (`use_count()`); `std::make_shared` hace una sola reserva. Como en Rust, los ciclos no se
  liberan nunca: se rompen con **`std::weak_ptr`**, que observa sin poseer y se convierte en `shared_ptr` con `lock()` (vacío si el objeto ya no existe).
- Los punteros y referencias **crudos** se usan para **observar** sin poseer. En C++ moderno no hay `new` ni `delete` fuera de las clases de bajo nivel (*C++ Core Guidelines*, R.11).

## 7. Contenedores, vistas y su coste

| Contenedor | Estructura | Acceso / búsqueda | Inserción | Notas |
|---|---|---|---|---|
| `vector` | array dinámico contiguo | O(1) por índice | O(1) amortizado al final | el contenedor por defecto; reubicar **invalida** iteradores, punteros y referencias |
| `array` | array fijo en la pila | O(1) | — | tamaño en compilación |
| `string` | como `vector<char>` con optimización de cadenas cortas | O(1) | | |
| `deque` | bloques | O(1) | O(1) en ambos extremos | |
| `map`, `set` | árbol rojinegro ordenado | O(log n) | O(log n) | iteración ordenada; `operator[]` **inserta** si no existe |
| `unordered_map`, `unordered_set` | tabla hash | O(1) medio | O(1) medio | orden no especificado; rehash invalida iteradores |

Vistas que no poseen: **`std::string_view`** y **`std::span<T>`** (puntero y longitud): baratas de pasar, pero **colgantes** si el original muere antes. Tipos de vocabulario: **`std::optional<T>`**
(valor o nada), **`std::variant<A, B>`** (unión etiquetada segura; se recorre con `std::visit`), `std::tuple` y los **enlaces estructurados** (`auto [a, b] = f();`).

## 8. Algoritmos, lambdas y rangos

`<algorithm>` y `<numeric>` traen más de cien algoritmos genéricos sobre pares de iteradores: `sort` (no estable, O(n log n)), `stable_sort` (conserva el orden de los iguales), `lower_bound`
(búsqueda binaria en un rango ordenado), `find_if`, `count_if`, `transform`, `accumulate`, `partition`, `unique`… Escribir un bucle a mano cuando hay un algoritmo con nombre es peor código. Para
borrar por valor o condición, `std::erase`/`std::erase_if` (C++20) sustituyen al modismo borrar-quitar.

Las **lambdas** `[capturas](params) { cuerpo }` crean objetos función: `[x]` copia `x` **al crear** la lambda, `[&x]` la referencia (cuidado si la lambda vive más que `x`), `[k = 0]` inicializa una
captura propia, y `mutable` permite modificar las copias. `std::function` guarda cualquier invocable a cambio de una posible reserva y una llamada indirecta.

Los **rangos** (C++20) aceptan contenedores enteros (`std::ranges::sort(v)`) y añaden **vistas** perezosas que se componen con `|`: `filter`, `transform`, `take`, `drop`, `reverse`, `iota` (secuencia
infinita) y, en C++23, `stride`, `zip`, `enumerate` y `chunk`. Como los iteradores de Rust, no hacen nada hasta que se recorren.

## 9. Errores: excepciones y `std::expected`

`throw` lanza un objeto; la pila se **desenrolla** destruyendo los objetos de cada ámbito (RAII) hasta un `catch` compatible. Se captura **por referencia constante** (`catch (const
std::exception& e)`) para no rebanar el objeto, y las jerarquías estándar (`logic_error`, `runtime_error`, `out_of_range`…) permiten capturar por categoría. **Garantías de seguridad ante
excepciones**: básica (no hay fugas y el objeto queda válido), **fuerte** (la operación tiene éxito o no cambia nada) y `noexcept` (no lanza). Los destructores son `noexcept` y nunca deben lanzar.

**`std::expected<T, E>`** (C++23) devuelve un valor o un error, como el `Result` de Rust: explícito en la firma y sin coste de desenrollado. Se usa para errores esperables (análisis de
entradas); las excepciones, para lo excepcional. Muchos entornos (juegos, embebidos) compilan sin excepciones.

## 10. Comportamiento indefinido y herramientas

El C++ hereda el comportamiento indefinido de C y añade el suyo: acceso fuera de rango con `operator[]`, iteradores y referencias **invalidados** (el clásico: guardar `&v[0]` y luego hacer
`push_back`), `string_view` colgantes, desbordamiento de enteros con signo, carreras de datos. Defensas: compila con `-Wall -Wextra -Wpedantic -Werror`, usa **AddressSanitizer** (`-fsanitize=address`:
uso tras liberar, desbordamientos de buffer, fugas) y **UndefinedBehaviorSanitizer** (`-fsanitize=undefined`) en las pruebas, `.at()` donde la comprobación compensa, y sigue las *C++ Core
Guidelines*.

> [!example] Ejemplo resuelto 1: una referencia invalidada
> `std::vector<int> v{1, 2, 3}; int& r = v[0]; v.push_back(4);`: el `vector` tenía capacidad 3, así que `push_back` reserva un buffer nuevo, mueve los elementos y libera el viejo; `r` apunta a memoria
> liberada. Leerla puede "funcionar" (la memoria aún no se ha reutilizado) y por eso el error pasa desapercibido; con `-fsanitize=address` el programa se detiene con
> `heap-use-after-free` y la pila de dónde se liberó. Soluciones: guardar índices en vez de referencias, `reserve` por adelantado, o no mantener referencias a través de modificaciones.

> [!example] Ejemplo resuelto 2: regla de cero con un recurso de C
> Para envolver un `FILE*`: `using Archivo = std::unique_ptr<FILE, decltype(&std::fclose)>;` y `Archivo f(std::fopen(ruta, "r"), &std::fclose);`. La clase que lo contiene no necesita destructor, ni
> copia (no se puede copiar, como debe ser), ni movimiento (el de `unique_ptr` basta): regla de cero. El archivo se cierra exactamente una vez, también si se lanza una excepción. El programa del §11
> lo comprueba con un borrador que cuenta los cierres.

> [!example] Ejemplo resuelto 3: frecuencia de palabras (con menos ayuda)
> Cuenta las palabras de un texto con `std::unordered_map<std::string_view, int>` (las claves son vistas del texto original, sin copiar), pásalas a un `std::vector<std::pair<...>>` y ordénalas por
> frecuencia descendente y, en empate, alfabéticamente. ¿Qué pasaría si el texto fuese un `std::string` temporal destruido antes de usar el mapa? Comprueba en el programa siguiente que el resultado
> de `"b a c a b a"` empieza por `a:3 b:2`.

## 11. Comprobar con un programa

Compila con GCC y Clang en C++23 con `-Wall -Wextra -Wpedantic -Werror`, y se ejecuta con AddressSanitizer y UndefinedBehaviorSanitizer sin errores: el ejemplo 2 con un borrador que cuenta los
cierres, un tipo solo-movible en un `vector`, el ejemplo 3, `std::expected` y una vista de rangos.

```cpp
#include <algorithm>
#include <cassert>
#include <charconv>
#include <expected>
#include <iostream>
#include <memory>
#include <ranges>
#include <string>
#include <string_view>
#include <unordered_map>
#include <utility>
#include <vector>

// --- Ejemplo resuelto 2: regla de cero con un recurso que hay que liberar una vez.
static int cierres = 0;
struct Recurso { int id; };
struct Cerrar {
    void operator()(Recurso* r) const noexcept { ++cierres; delete r; }
};
using Manejador = std::unique_ptr<Recurso, Cerrar>;

class Sesion {                       // sin destructor, ni copia, ni movimiento escritos
    Manejador h_;
    std::string nombre_;
public:
    Sesion(int id, std::string n) : h_(new Recurso{id}), nombre_(std::move(n)) {}
    int id() const { return h_->id; }
};

// --- Un tipo solo-movible con movimiento noexcept.
struct Paquete {
    std::vector<int> datos;
    explicit Paquete(int n) : datos(static_cast<std::size_t>(n), n) {}
    Paquete(const Paquete&) = delete;
    Paquete& operator=(const Paquete&) = delete;
    Paquete(Paquete&&) noexcept = default;
    Paquete& operator=(Paquete&&) noexcept = default;
};

// --- Ejemplo resuelto 3: frecuencias sin copiar el texto.
std::vector<std::pair<std::string_view, int>> frecuencias(std::string_view texto) {
    std::unordered_map<std::string_view, int> cuenta;
    for (auto palabra : texto | std::views::split(' ')) {
        std::string_view p(palabra.begin(), palabra.end());
        if (!p.empty()) ++cuenta[p];
    }
    std::vector<std::pair<std::string_view, int>> v(cuenta.begin(), cuenta.end());
    std::ranges::sort(v, [](const auto& a, const auto& b) { return a.second != b.second ? a.second > b.second : a.first < b.first; });
    return v;
}

// --- std::expected para errores esperables.
std::expected<int, std::string> puerto(std::string_view s) {
    int v = 0;
    auto [p, ec] = std::from_chars(s.data(), s.data() + s.size(), v);
    if (ec != std::errc{} || p != s.data() + s.size()) return std::unexpected("no es un número: " + std::string(s));
    if (v < 1 || v > 65535) return std::unexpected("fuera de rango: " + std::string(s));
    return v;
}

int main() {
    {
        std::vector<Sesion> sesiones;
        sesiones.emplace_back(1, "a");
        sesiones.emplace_back(2, "b");
        Sesion movida = std::move(sesiones[0]);
        assert(movida.id() == 1);
    }
    std::cout << "cierres: " << cierres << '\n';
    assert(cierres == 2);

    std::vector<Paquete> v;
    for (int i = 1; i <= 20; ++i) v.emplace_back(i);   // las reubicaciones mueven: Paquete no se puede copiar
    std::cout << "paquetes: " << v.size() << ", último con " << v.back().datos.size() << " datos\n";

    auto f = frecuencias("b a c a b a");
    std::cout << "frecuencias: ";
    for (const auto& [p, n] : f) std::cout << p << ':' << n << ' ';
    std::cout << '\n';
    assert(f.size() == 3 && f[0].first == "a" && f[0].second == 3 && f[1].first == "b");

    for (std::string_view s : {"8080", "80x", "70000"}) {
        auto r = puerto(s);
        std::cout << s << " -> " << (r ? std::to_string(*r) : r.error()) << '\n';
    }
    assert(puerto("443").value() == 443 && !puerto("0"));

    auto pares = std::views::iota(1, 11) | std::views::filter([](int x) { return x % 2 == 0; }) | std::views::transform([](int x) { return x * x; });
    int suma = 0;
    for (int x : pares) suma += x;
    std::cout << "suma de cuadrados pares hasta 10: " << suma << '\n';
    assert(suma == 220);
}
```

## 12. Errores típicos

- `new`/`delete` en código de aplicación; recursos sin dueño claro.
- Escribir destructor o copia sin escribir las cinco funciones especiales (o sin pensar en la regla de cero).
- Movimientos sin `noexcept`: el `vector` copia en lugar de mover al crecer.
- `return std::move(local);` (impide la elisión); usar un objeto después de moverlo como si conservara su valor.
- Guardar referencias, punteros o iteradores a un `vector` y luego modificarlo; `string_view` o `span` que sobreviven a su dato.
- `map[clave]` para consultar (inserta); `std::sort` cuando hacía falta estabilidad.
- Capturar por referencia en una lambda que se ejecuta después de que la variable muera.
- Capturar excepciones por valor (rebanado); lanzar desde un destructor.
- Compilar sin avisos ni sanitizadores en las pruebas.

## 13. Resumen

- C++23 vigente (C++26 técnicamente terminado en 2026); unidades de traducción, cabeceras, ODR, enlazado; módulos.
- Llaves sin estrechamiento, referencias, `const`/`constexpr`, `enum class`, listas de inicialización, métodos `const`, `explicit`.
- RAII: destructores al salir del ámbito, en orden inverso; regla de cero, de cinco, copiar e intercambiar.
- lvalue, prvalue, xvalue; `T&&`, `std::move` es una conversión; movimiento `noexcept`; elisión garantizada y NRVO; `emplace_back`.
- `unique_ptr` (borradores), `shared_ptr` (bloque de control), `weak_ptr`; punteros crudos solo para observar.
- Contenedores y su coste e invalidación; `string_view`, `span`, `optional`, `variant`, enlaces estructurados.
- Algoritmos (`sort`, `stable_sort`, `lower_bound`, `erase_if`…), lambdas y capturas, rangos y vistas perezosas.
- Excepciones por referencia, desenrollado, garantías básica/fuerte/`noexcept`; `std::expected`; ASan y UBSan, `-Werror`, Core Guidelines.

## Repaso: lo que debe quedarte dentro de un mes

1. Cada recurso tiene un dueño cuyo destructor lo libera: RAII.
2. Regla de cero siempre que puedas; de cinco cuando no.
3. `std::move` no mueve: permite mover.
4. Un `push_back` puede invalidar todo lo que apunta al `vector`.
5. Pruebas siempre con sanitizadores.

## Siguiente

`prog-cpp-genericidad` (plantillas, conceptos, `constexpr` y metaprogramación) y `prog-cpp-profesional` (concurrencia, rendimiento, CMake y herramientas). El equivalente comprobado por el compilador
está en [[prog-rust-fundamentos]].
