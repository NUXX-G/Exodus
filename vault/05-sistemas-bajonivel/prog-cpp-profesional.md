---
id: prog-cpp-profesional
title: "C++ moderno III, en producción: concurrencia y modelo de memoria, rendimiento y caché, CMake moderno y paquetes, ABI, pruebas, sanitizadores, análisis estático y endurecimiento"
area: bajo-nivel
trunk_level: 11
prerequisites: [prog-cpp-genericidad, sys-procesos-planificacion]
academic_sources:
  - "Williams, A. C++ Concurrency in Action, 2ª ed. Manning, 2019."
  - "Kitware. CMake Reference Documentation (cmake-buildsystem, usage requirements, presets), versión 3.31. Consultada en noviembre de 2026."
  - "Stroustrup, B.; Sutter, H. (eds.) C++ Core Guidelines; y documentación de GCC y Clang sobre sanitizadores y endurecimiento. Consultados en noviembre de 2026."
exercises:
  - id: atomicos
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.)

      ```cpp
      // flags: -pthread
      #include <atomic>
      #include <iostream>
      #include <thread>
      #include <vector>

      int main() {
          std::atomic<int> n{0};
          int sin_proteger_por_hilo[4] = {};
          std::vector<std::jthread> hs;
          for (int k = 0; k < 4; ++k)
              hs.emplace_back([&, k] {
                  for (int i = 0; i < 1000; ++i) {
                      n.fetch_add(1, std::memory_order_relaxed);
                      ++sin_proteger_por_hilo[k];
                  }
              });
          hs.clear();
          int otro = 7;
          bool ok1 = n.compare_exchange_strong(otro, 1);
          std::cout << n.load() << ' ' << sin_proteger_por_hilo[2] << ' ' << ok1 << ' ' << otro << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:22a07c8cbc826fc70d216cb836e16e3a1d33f8071a26e3be2c14d2f9b608862a"]
  - id: mutex
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.)

      ```cpp
      // flags: -pthread
      #include <iostream>
      #include <map>
      #include <mutex>
      #include <string>
      #include <thread>
      #include <vector>

      int main() {
          std::map<std::string, int> cuenta;
          std::mutex m;
          std::vector<std::thread> hs;
          for (int k = 0; k < 3; ++k)
              hs.emplace_back([&, k] {
                  for (int i = 0; i < 100; ++i) {
                      std::scoped_lock bloqueo(m);
                      ++cuenta[(i + k) % 2 ? "impar" : "par"];
                  }
              });
          for (auto& h : hs) h.join();
          std::cout << cuenta["par"] << ' ' << cuenta["impar"] << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:bb8e79f6fc5997f5cce763fbf45c55cb13407ed49f1581cd7145fa956bd86460"]
  - id: async
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.)

      ```cpp
      // flags: -pthread
      #include <future>
      #include <iostream>
      #include <numeric>
      #include <vector>

      long long suma(const std::vector<int>& v, std::size_t a, std::size_t b) {
          return std::accumulate(v.begin() + static_cast<long>(a), v.begin() + static_cast<long>(b), 0LL);
      }

      int main() {
          std::vector<int> v(1000);
          std::iota(v.begin(), v.end(), 1);
          auto f1 = std::async(std::launch::async, suma, std::cref(v), 0, 500);
          auto f2 = std::async(std::launch::async, suma, std::cref(v), 500, 1000);
          std::promise<int> p;
          auto fp = p.get_future();
          std::thread t([&p] { p.set_value(42); });
          std::cout << f1.get() << ' ' << f2.get() << ' ' << fp.get() << '\n';
          t.join();
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:0739641b7ab75f29890f14e50609547248ee2474329a516a4c4d8a7622c53c83"]
  - id: propagacion-cmake
    tier: 1
    prompt: |
      Un proyecto de CMake tiene este `CMakeLists.txt`:

      ```cmake
      cmake_minimum_required(VERSION 3.20)
      project(propagacion LANGUAGES CXX)
      set(CMAKE_CXX_STANDARD 23)

      add_library(base STATIC util/base.cpp)
      target_compile_definitions(base PUBLIC USA_BASE=1 PRIVATE SOLO_BASE=1)

      add_library(util STATIC util/util.cpp)
      target_compile_definitions(util INTERFACE PARA_QUIEN_ME_USE=1 PRIVATE SOLO_UTIL=1)
      target_link_libraries(util PRIVATE base)

      add_executable(app main.cpp)
      target_link_libraries(app PRIVATE util)
      ```

      Y este `main.cpp` (las otras dos fuentes solo definen `base()`, que devuelve 1, y `util()`, que devuelve `base() + 1`):

      ```cpp
      #include <iostream>

      int util();

      #ifndef USA_BASE
      #define USA_BASE 0
      #endif
      #ifndef SOLO_BASE
      #define SOLO_BASE 0
      #endif
      #ifndef PARA_QUIEN_ME_USE
      #define PARA_QUIEN_ME_USE 0
      #endif
      #ifndef SOLO_UTIL
      #define SOLO_UTIL 0
      #endif

      int main() {
          std::cout << USA_BASE << SOLO_BASE << PARA_QUIEN_ME_USE << SOLO_UTIL << ' ' << util() << '\n';
      }
      ```

      ¿Qué imprime `app`? Piensa qué definiciones llegan a `app` según `PUBLIC`, `PRIVATE` e `INTERFACE`.

      Respuesta: la línea tal cual.
    answers: ["sha256:0e3f6a03ed33bcb0bc709b790988d68d1f8c84644646c131a0f69be31f93e744"]
  - id: jthread-parada
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.) Fíjate en el orden en que se destruyen `cb` y `t` al salir del bloque.

      ```cpp
      // flags: -pthread
      #include <atomic>
      #include <iostream>
      #include <stop_token>
      #include <thread>

      int main() {
          std::atomic<int> vueltas{0};
          {
              std::jthread t([&vueltas](std::stop_token st) {
                  while (!st.stop_requested()) {
                      vueltas.fetch_add(1);
                      std::this_thread::yield();
                  }
              });
              std::stop_callback cb(t.get_stop_token(), [] { std::cout << "aviso "; });
              while (vueltas.load() < 1000) std::this_thread::yield();
          }
          std::cout << (vueltas.load() >= 1000) << '\n';
      }
      ```

      Respuesta: la salida tal cual.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: condvar
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.)

      ```cpp
      // flags: -pthread
      #include <condition_variable>
      #include <iostream>
      #include <mutex>
      #include <queue>
      #include <thread>

      int main() {
          std::queue<int> cola;
          std::mutex m;
          std::condition_variable cv;
          bool fin = false;
          long suma = 0;
          int n = 0;
          std::thread consumidor([&] {
              std::unique_lock lk(m);
              while (true) {
                  cv.wait(lk, [&] { return !cola.empty() || fin; });
                  while (!cola.empty()) { suma += cola.front(); cola.pop(); ++n; }
                  if (fin) return;
              }
          });
          for (int i = 1; i <= 100; ++i) {
              { std::lock_guard g(m); cola.push(i); }
              cv.notify_one();
          }
          { std::lock_guard g(m); fin = true; }
          cv.notify_one();
          consumidor.join();
          std::cout << n << ' ' << suma << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:08616274e8f23c44473eb9782f7d15ef5ec19be9d9466d209113b30ddf23ae8e"]
  - id: latch-barrier
    tier: 1
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.) La función de finalización de `std::barrier` se ejecuta una vez por fase.

      ```cpp
      // flags: -pthread
      #include <atomic>
      #include <barrier>
      #include <iostream>
      #include <latch>
      #include <thread>
      #include <vector>

      int main() {
          constexpr int N = 4;
          std::latch listos(N);
          std::atomic<int> fase_completada{0};
          std::barrier sincronia(N, [&]() noexcept { fase_completada.fetch_add(1); });
          std::atomic<int> vistos_tras_latch{0};
          std::vector<std::jthread> hs;
          for (int k = 0; k < N; ++k)
              hs.emplace_back([&] {
                  listos.count_down();
                  listos.wait();
                  vistos_tras_latch.fetch_add(1);
                  for (int f = 0; f < 3; ++f) sincronia.arrive_and_wait();
              });
          hs.clear();
          std::cout << vistos_tras_latch << ' ' << fase_completada << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:44cb730c420480a0477b505ae68af508fb90f96cf0ec54c6ad16949dd427f13a"]
  - id: acquire-release
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.) ¿Puede el consumidor ver `numero` sin el 42?

      ```cpp
      // flags: -pthread
      #include <atomic>
      #include <iostream>
      #include <string>
      #include <thread>

      std::string mensaje;
      int numero = 0;
      std::atomic<bool> listo{false};

      int main() {
          std::thread productor([] {
              mensaje = "hola";
              numero = 42;
              listo.store(true, std::memory_order_release);
          });
          std::thread consumidor([] {
              while (!listo.load(std::memory_order_acquire)) {}
              std::cout << mensaje << ' ' << numero << '\n';
          });
          productor.join();
          consumidor.join();
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:b513ff618cf35016d42e5d651f3264c33158184226ef189cf9eb383d486ef058"]
  - id: tsan
    tier: 2
    prompt: |
      Este programa se compila con ThreadSanitizer. ¿Qué tipo de problema informa?

      ```cpp
      // flags: -pthread -fsanitize=thread
      #include <iostream>
      #include <thread>

      int contador = 0;

      int main() {
          std::thread a([] { for (int i = 0; i < 10000; ++i) ++contador; });
          std::thread b([] { for (int i = 0; i < 10000; ++i) ++contador; });
          a.join();
          b.join();
          std::cout << (contador <= 20000) << '\n';
      }
      ```

      Respuesta: el tipo de informe tal como lo escribe ThreadSanitizer (dos palabras).
    answers: ["sha256:b164df0330a40877ebc9707498f2bf008fa5747b53ca78b66bfa232a8668aa65"]
  - id: alineacion
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.)

      ```cpp
      #include <atomic>
      #include <iostream>

      struct Juntos {
          std::atomic<long> a;
          std::atomic<long> b;
      };

      struct Separados {
          alignas(64) std::atomic<long> a;
          alignas(64) std::atomic<long> b;
      };

      int main() {
          std::cout << sizeof(Juntos) << ' ' << sizeof(Separados) << ' ' << alignof(Separados) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:90d1237e1bcbd708f5a95887a96275eb161a4bbd2578f7c9dc4e9ecd92f2bb1f"]
  - id: string-corto
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.) (libstdc++ guarda hasta 15 caracteres dentro del propio objeto.)

      ```cpp
      #include <iostream>
      #include <string>

      int main() {
          std::string vacia;
          std::string corta = "15 caracteres..";
          std::string larga = "dieciseis letras";
          std::cout << sizeof(std::string) << ' ' << vacia.capacity() << ' ' << corta.size() << ' ' << (corta.capacity() == 15) << ' ' << (larga.capacity() >= 16) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:88bd25e2d8e2055e03cd7f4d9d57b8edb6d54388f381c5477b1929f7dbf71ad8"]
  - id: crecimiento-de-vector
    tier: 2
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.) (libstdc++ dobla la capacidad al crecer.)

      ```cpp
      #include <iostream>
      #include <vector>

      int main() {
          std::vector<int> v;
          int reubicaciones = 0;
          auto cap = v.capacity();
          for (int i = 0; i < 1000; ++i) {
              v.push_back(i);
              if (v.capacity() != cap) { ++reubicaciones; cap = v.capacity(); }
          }
          std::vector<int> w;
          w.reserve(1000);
          auto c0 = w.capacity();
          for (int i = 0; i < 1000; ++i) w.push_back(i);
          std::cout << reubicaciones << ' ' << cap << ' ' << (w.capacity() == c0) << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:197da25f0a75862fb743d8673a5fec005e8e61ebb8e121647f2d312abb620064"]
  - id: vista-colgante
    tier: 2
    prompt: |
      Este programa se compila con AddressSanitizer. ¿Qué tipo de error informa, y por qué?

      ```cpp
      // flags: -fsanitize=address
      #include <iostream>
      #include <string>
      #include <string_view>

      std::string nombre_completo() { return "Ada Lovelace, condesa de Lovelace"; }

      int main() {
          std::string_view v = nombre_completo();
          std::cout << v.substr(0, 3) << '\n';
      }
      ```

      Respuesta: el tipo de error tal como lo escribe AddressSanitizer.
    answers: ["sha256:41c4e1dbcdc6e4360af83510364c6c9f62e660ee5aaa496e32933d8d66c1e304"]
  - id: ubsan
    tier: 2
    prompt: |
      Este programa, ejecutado sin argumentos, se compila con UndefinedBehaviorSanitizer. ¿Qué error informa?

      ```cpp
      // flags: -fsanitize=undefined -fno-sanitize-recover=undefined
      #include <climits>
      #include <iostream>

      int suma(int a, int b) { return a + b; }

      int main(int argc, char**) {
          int x = INT_MAX - 1 + argc;
          std::cout << suma(x, 1) << '\n';
      }
      ```

      Respuesta: el texto del error tras «runtime error:», hasta los dos puntos.
    answers: ["sha256:f02b7e12aa86bcc416f4ba4fb2ce2e81ce239290474c17e582b70b3abe7c2101"]
  - id: cola-spsc
    tier: 3
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.) Una cola sin cerrojos de un productor y un consumidor.

      ```cpp
      // flags: -pthread
      #include <array>
      #include <atomic>
      #include <cstddef>
      #include <iostream>
      #include <optional>
      #include <thread>

      template <typename T, std::size_t N>
      class ColaSpsc {
          std::array<T, N> buf_{};
          alignas(64) std::atomic<std::size_t> cabeza_{0};
          alignas(64) std::atomic<std::size_t> cola_{0};
      public:
          bool mete(const T& x) {
              auto c = cola_.load(std::memory_order_relaxed);
              auto sig = (c + 1) % N;
              if (sig == cabeza_.load(std::memory_order_acquire)) return false;
              buf_[c] = x;
              cola_.store(sig, std::memory_order_release);
              return true;
          }
          std::optional<T> saca() {
              auto h = cabeza_.load(std::memory_order_relaxed);
              if (h == cola_.load(std::memory_order_acquire)) return std::nullopt;
              T x = buf_[h];
              cabeza_.store((h + 1) % N, std::memory_order_release);
              return x;
          }
      };

      int main() {
          ColaSpsc<int, 64> q;
          long long suma = 0;
          int recibidos = 0;
          std::thread consumidor([&] {
              while (recibidos < 10000)
                  if (auto x = q.saca()) { suma += *x; ++recibidos; }
          });
          for (int i = 1; i <= 10000; ++i)
              while (!q.mete(i)) {}
          consumidor.join();
          std::cout << recibidos << ' ' << suma << '\n';
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:5f7209c8783fd565d866f0c949ad7e73c7b144b0649ffea1228465c0a2f401ae"]
  - id: pool-de-hilos
    tier: 3
    prompt: |
      ¿Qué imprime? (C++23 en x86-64 Linux con libstdc++, compilado con GCC o Clang; la línea `// flags:` indica las opciones extra.)

      ```cpp
      // flags: -pthread
      #include <condition_variable>
      #include <functional>
      #include <future>
      #include <iostream>
      #include <mutex>
      #include <queue>
      #include <thread>
      #include <vector>

      class Pool {
          std::vector<std::jthread> hilos_;
          std::queue<std::function<void()>> tareas_;
          std::mutex m_;
          std::condition_variable cv_;
          bool parar_ = false;
      public:
          explicit Pool(unsigned n) {
              for (unsigned i = 0; i < n; ++i)
                  hilos_.emplace_back([this] {
                      while (true) {
                          std::function<void()> t;
                          {
                              std::unique_lock lk(m_);
                              cv_.wait(lk, [this] { return parar_ || !tareas_.empty(); });
                              if (parar_ && tareas_.empty()) return;
                              t = std::move(tareas_.front());
                              tareas_.pop();
                          }
                          t();
                      }
                  });
          }
          ~Pool() {
              { std::lock_guard g(m_); parar_ = true; }
              cv_.notify_all();
          }
          template <typename F>
          auto envia(F f) -> std::future<decltype(f())> {
              auto tarea = std::make_shared<std::packaged_task<decltype(f())()>>(std::move(f));
              auto fut = tarea->get_future();
              { std::lock_guard g(m_); tareas_.push([tarea] { (*tarea)(); }); }
              cv_.notify_one();
              return fut;
          }
      };

      int main() {
          long long total = 0;
          {
              Pool pool(4);
              std::vector<std::future<long long>> fs;
              for (long long i = 1; i <= 100; ++i) fs.push_back(pool.envia([i] { return i * i; }));
              for (auto& f : fs) total += f.get();
          }
          std::cout << total << '\n';
      }
      ```

      Respuesta: un número.
    answers: ["sha256:7b683a1ee3dbf9bc30529b3c2c9e5e8e48c05c91f45551b2869712fb38b9f561"]
---

Con [[prog-cpp-moderno]] y [[prog-cpp-genericidad]] sabes escribir C++ correcto en un solo hilo y en un solo archivo. El C++ de una empresa es otra cosa: decenas de
hilos que comparten datos, millones de líneas repartidas en bibliotecas que se compilan con CMake y dependen de paquetes externos, requisitos de latencia de
microsegundos, y la obligación de que nada de eso tenga comportamiento indefinido, porque en C++ un error de concurrencia o de memoria no produce una excepción:
produce un fallo aleatorio en producción o una vulnerabilidad. Este nodo cubre lo que se espera de un perfil profesional: el modelo de memoria y las primitivas
de concurrencia de la biblioteca estándar, cómo se comporta el hardware (caché, compartición falsa) y cómo se mide, cómo se organiza y se construye un proyecto con
CMake moderno, qué es la ABI y por qué importa, y la batería de herramientas (sanitizadores, análisis estático, pruebas, endurecimiento) sin la que no se debería
fusionar código C++.

## Objetivos

Al terminar sabrás:

1. Usar `std::jthread` y los tokens de parada, mutex y cerrojos (`scoped_lock`, `unique_lock`, `shared_mutex`), variables de condición, `latch`, `barrier` y semáforos.
2. Razonar con el modelo de memoria de C++ (`memory_order`) y escribir estructuras sencillas sin cerrojos.
3. Usar futuros, promesas, `async` y escribir un grupo de hilos.
4. Explicar los efectos de la jerarquía de memoria (localidad, compartición falsa, optimización de cadenas cortas, crecimiento de `vector`) y medir rendimiento.
5. Estructurar proyectos con CMake moderno basado en objetivos y requisitos de uso, y gestionar dependencias con vcpkg o Conan.
6. Explicar la ABI, las bibliotecas estáticas y dinámicas y los problemas de compatibilidad binaria.
7. Integrar sanitizadores (ASan, UBSan, TSan), análisis estático, pruebas, *fuzzing* y opciones de endurecimiento en la integración continua.

## Qué debes dominar antes

[[prog-cpp-genericidad]] (y por tanto [[prog-cpp-moderno]]) y [[sys-procesos-planificacion]] (hilos y planificación). El mismo modelo de memoria, visto desde Rust, está en
[[prog-rust-concurrencia-async]].

> [!question] Test de entrada
> 1. ¿Qué es una sección crítica?
> 2. ¿Por qué un programa con más hilos puede ir más lento?
> 3. ¿Qué hace el enlazador?
>
> Respuestas: código que accede a datos compartidos y que solo debe ejecutar un hilo a la vez; por la contención (esperas en cerrojos), los cambios de contexto y la coherencia de caché entre
> núcleos; une los archivos objeto y las bibliotecas resolviendo los símbolos que se usan en uno y se definen en otro.

## 1. Para qué sirve

- **Servidores y bases de datos** de alto rendimiento (ScyllaDB, ClickHouse), **motores de juego** con trabajo repartido entre núcleos, **finanzas** de baja latencia, **robótica** (ROS 2 y su ejecutor
  multihilo), **navegadores**.
- **Ingeniería de software a escala**: compilar, empaquetar y distribuir proyectos con cientos de dependencias.
- **Seguridad**: los sanitizadores y el endurecimiento son la primera línea contra vulnerabilidades de memoria en código C++ existente.

## 2. Hilos y sincronización

Una **carrera de datos** (dos accesos sin sincronizar a la misma posición, al menos uno de escritura) es **comportamiento indefinido** en C++: el compilador puede reordenar, cachear en
registros o romper la operación. El estándar ofrece:

- **`std::thread`** (hay que `join` o `detach` antes de destruirlo, o el programa termina) y **`std::jthread`** (C++20): se une solo al destruirse y lleva un **`std::stop_token`** para pedirle que pare;
  `std::stop_callback` registra una acción que se ejecuta al pedir la parada (y se da de baja al destruirse: el orden de destrucción importa).
- **Mutex**: `std::mutex`, `std::shared_mutex` (lectores y escritores), `std::recursive_mutex`, `std::timed_mutex`. Nunca se usan con `lock()`/`unlock()` a mano, sino con guardas RAII: `std::lock_guard`,
  `std::unique_lock` (movible, se puede soltar antes, necesaria para las variables de condición) y **`std::scoped_lock`** (C++17), que toma **varios** mutex a la vez con un algoritmo que evita el
  interbloqueo.
- **`std::condition_variable`**: esperar a una condición sobre datos protegidos; `wait(lk, predicado)` vuelve a comprobar tras cada despertar (hay despertares espurios). Notificar fuera de la
  sección crítica evita que el despertado se bloquee de inmediato.
- **C++20**: `std::latch` (cuenta atrás de un solo uso), `std::barrier` (sincroniza fases repetidas, con una función de finalización por fase), `std::counting_semaphore`.
- **Tareas**: `std::async(std::launch::async, f)` devuelve un `std::future`; `std::promise` y `std::packaged_task` conectan quien produce un valor con quien lo espera; `future::get()` relanza las
  excepciones de la tarea.

## 3. El modelo de memoria

Las operaciones sobre `std::atomic<T>` son indivisibles y llevan un **orden de memoria**: `memory_order_relaxed` (solo atomicidad: contadores), `release` en la escritura y `acquire` en la lectura (todo lo
escrito antes del `store(release)` **sucede antes** de lo que el otro hilo haga después de su `load(acquire)` que ve ese valor: es el patrón para **publicar** datos), `acq_rel` para lectura-modificación-
escritura, y `seq_cst` (el predeterminado), que añade un orden total único. `compare_exchange_strong/weak` (cambia si el valor es el esperado y, si no, actualiza el esperado con el actual) es la base
de las estructuras sin cerrojos. El modelo es el mismo que adoptó Rust ([[prog-rust-concurrencia-async]]).

Una **cola de un productor y un consumidor** (SPSC) sobre un *buffer* circular solo necesita dos índices atómicos: cada lado escribe su índice con `release` y lee el del otro con `acquire`. Con más
productores o consumidores el diseño se complica mucho (el problema ABA, la recuperación de memoria): se usan bibliotecas probadas o cerrojos. Las estructuras sin cerrojos no son
automáticamente más rápidas: se miden.

## 4. Rendimiento y jerarquía de memoria

Un acceso a la caché L1 cuesta del orden de 1 ns; a memoria principal, del orden de 100 ns: la **localidad** domina el rendimiento real más que el número de instrucciones. Consecuencias:

- **Datos contiguos** (`std::vector`, estructuras de arrays) frente a nodos dispersos (`std::list`, `std::map`): recorrer un `vector` aprovecha las líneas de caché y el *prefetcher*.
- **Compartición falsa** (*false sharing*): dos hilos que escriben variables distintas en la **misma línea de caché** (64 bytes en x86-64) se pelean por ella; separarlas con `alignas(64)` (o
  `std::hardware_destructive_interference_size`) puede multiplicar el rendimiento.
- **Asignaciones**: cada `new` cuesta; `reserve`, reutilizar *buffers*, la **optimización de cadenas cortas** (libstdc++ guarda hasta 15 caracteres dentro del `std::string` de 32 bytes) y los recursos de
  memoria polimórficos (`std::pmr::monotonic_buffer_resource`) evitan reservas en los caminos calientes.
- **Compilación**: `-O2`/`-O3`, `-march=native` (si el binario no se distribuye), LTO, PGO; el compilador vectoriza bucles simples; las llamadas virtuales impiden alinear (de ahí CRTP).
- **Medir**: *microbenchmarks* con Google Benchmark (cuidado con que el compilador elimine el código medido), perfiles con `perf`, Valgrind/Callgrind o VTune, y *flamegraphs*. Optimiza lo que el perfil
  señala, no lo que intuyes.

## 5. CMake moderno y dependencias

CMake genera el sistema de construcción (Ninja, Make, Visual Studio). El **CMake moderno** se basa en **objetivos** (`add_library`, `add_executable`) con **requisitos de uso**: directorios de inclusión,
definiciones, opciones y dependencias se declaran **sobre el objetivo** con alcance:

- `PRIVATE`: solo para compilar ese objetivo.
- `INTERFACE`: solo para quien lo use.
- `PUBLIC`: para ambos.

`target_link_libraries(app PRIVATE util)` hereda los requisitos `PUBLIC` e `INTERFACE` de `util`, pero no los `PRIVATE`; y los de las dependencias **privadas** de `util` tampoco llegan a `app` (solo se
enlazan). Nada de `include_directories` o `add_definitions` globales. Además: `find_package` para dependencias instaladas, `FetchContent` para descargarlas, expresiones generadoras (`$<CONFIG:Debug>`),
**presets** (`CMakePresets.json`) para configuraciones reproducibles, y `ctest` para las pruebas. Gestores de paquetes: **vcpkg** (de Microsoft, integrado con CMake por archivo de manifiesto) y **Conan**.

## 6. ABI y bibliotecas

La **ABI** (interfaz binaria) fija cómo se pasan los argumentos, la disposición de las clases, la decoración de nombres (*name mangling*) y las tablas virtuales. Dos objetos compilados con ABIs
incompatibles no se pueden enlazar o, peor, se enlazan y fallan. C++ no tiene ABI estándar entre compiladores; en la práctica, GCC y Clang en Linux comparten la *Itanium C++ ABI*. Consecuencias:
cambiar un miembro privado de una clase pública de una biblioteca dinámica la rompe para los binarios ya compilados (por eso existe el modismo **pimpl**, que esconde la implementación tras un
puntero); libstdc++ tiene dos ABI de `std::string` (la antigua, anterior a C++11, y la actual); y las interfaces entre módulos compilados por separado suelen ser de **C** (`extern "C"`). Bibliotecas
**estáticas** (`.a`: el código se copia en el ejecutable) frente a **dinámicas** (`.so`, `.dll`: se cargan al ejecutar, se comparten y se actualizan por separado), y la **visibilidad** de símbolos
(`-fvisibility=hidden`) para exportar solo la API.

## 7. Calidad: herramientas en la integración continua

- **Avisos** como errores: `-Wall -Wextra -Wpedantic -Werror` (y `-Wconversion`, `-Wshadow` según el proyecto).
- **Sanitizadores** en las pruebas: **ASan** (memoria: uso tras liberar, desbordamientos, fugas), **UBSan** (desbordamiento con signo, desplazamientos inválidos, conversiones), **TSan** (carreras de
  datos; incompatible con ASan, se ejecuta aparte), MSan (memoria sin inicializar, solo con Clang).
- **Análisis estático**: clang-tidy (comprobaciones de las Core Guidelines, modernización, errores comunes), cppcheck, el analizador de Clang; **formato** automático con clang-format.
- **Pruebas**: GoogleTest, Catch2 o doctest; *fuzzing* con libFuzzer (`-fsanitize=fuzzer,address`) para todo lo que analice datos externos; cobertura con gcov o llvm-cov.
- **Endurecimiento** del binario: `-D_FORTIFY_SOURCE=3`, `-fstack-protector-strong`, `-D_GLIBCXX_ASSERTIONS` (comprobación de límites en la biblioteca estándar), los modos de endurecimiento de
  libc++, PIE y RELRO completo. En sectores regulados se añaden estándares de codificación (MISRA C++, AUTOSAR).

> [!example] Ejemplo resuelto 1: un interbloqueo y su arreglo
> Una transferencia entre dos cuentas bloquea primero el mutex de la de origen y luego el de la de destino. Si un hilo transfiere de A a B mientras otro transfiere de B a A, cada uno puede tomar su
> primer mutex y esperar para siempre el segundo. Arreglos: tomar siempre los mutex en un **orden global** (por dirección o identificador), o `std::scoped_lock lk(a.m, b.m);`, que los toma juntos
> sin interbloqueo. El programa del §8 hace 10 000 transferencias cruzadas entre hilos y comprueba que el dinero total se conserva.

> [!example] Ejemplo resuelto 2: compartición falsa
> Cuatro hilos incrementan cada uno su contador en un `struct { std::atomic<long> c[4]; }`: los cuatro contadores comparten una línea de caché y cada incremento invalida la línea en los otros núcleos.
> Con `struct alignas(64) Contador { std::atomic<long> c; };` y un array de ellos, cada contador ocupa su línea y el mismo programa suele ir varias veces más rápido. El coste: 64 bytes por contador en
> lugar de 8 (el ejercicio "alineación" de este nodo calcula los tamaños).

> [!example] Ejemplo resuelto 3: un proyecto con CMake (con menos ayuda)
> Organiza una biblioteca `geometria` (cabeceras en `include/`, fuentes en `src/`), sus pruebas con GoogleTest obtenidas con `FetchContent`, y un ejecutable que la usa. Declara los directorios de inclusión
> con `target_include_directories(geometria PUBLIC include)`, añade una opción `-DSANITIZAR=ON` que active ASan y UBSan solo en ese objetivo, y un `CMakePresets.json` con las configuraciones `debug`,
> `release` y `asan`. Comprueba que cambiar una definición `PRIVATE` de la biblioteca no recompila el ejecutable, y que una `PUBLIC` sí.

## 8. Comprobar con un programa

Compila con GCC y Clang en C++23 con `-Wall -Wextra -Wpedantic -Werror`, se ejecuta con ASan y UBSan, y también se ha ejecutado con ThreadSanitizer sin informes: transferencias cruzadas con
`std::scoped_lock` (ejemplo 1), una cola acotada con variables de condición, una canalización de `jthread` con parada y contadores separados por líneas de caché.

```cpp
// flags: -pthread
#include <array>
#include <atomic>
#include <cassert>
#include <condition_variable>
#include <cstddef>
#include <iostream>
#include <mutex>
#include <optional>
#include <queue>
#include <thread>
#include <vector>

// --- Ejemplo resuelto 1: transferencias sin interbloqueo.
struct Cuenta {
    std::mutex m;
    long saldo = 1000;
};

void transfiere(Cuenta& de, Cuenta& a, long cantidad) {
    std::scoped_lock lk(de.m, a.m);
    if (de.saldo >= cantidad) {
        de.saldo -= cantidad;
        a.saldo += cantidad;
    }
}

// --- Cola acotada y cerrable.
template <typename T>
class ColaAcotada {
    std::queue<T> q_;
    std::size_t max_;
    bool cerrada_ = false;
    std::mutex m_;
    std::condition_variable hay_hueco_, hay_dato_;
public:
    explicit ColaAcotada(std::size_t max) : max_(max) {}
    void mete(T x) {
        std::unique_lock lk(m_);
        hay_hueco_.wait(lk, [&] { return q_.size() < max_; });
        q_.push(std::move(x));
        lk.unlock();
        hay_dato_.notify_one();
    }
    std::optional<T> saca() {
        std::unique_lock lk(m_);
        hay_dato_.wait(lk, [&] { return !q_.empty() || cerrada_; });
        if (q_.empty()) return std::nullopt;
        T x = std::move(q_.front());
        q_.pop();
        lk.unlock();
        hay_hueco_.notify_one();
        return x;
    }
    void cierra() {
        { std::lock_guard g(m_); cerrada_ = true; }
        hay_dato_.notify_all();
    }
};

struct alignas(64) Contador {
    std::atomic<long> n{0};
};

int main() {
    Cuenta a, b;
    {
        std::vector<std::jthread> hs;
        for (int k = 0; k < 4; ++k)
            hs.emplace_back([&, k] {
                for (int i = 0; i < 2500; ++i) {
                    if ((i + k) % 2) transfiere(a, b, 7);
                    else transfiere(b, a, 5);
                }
            });
    }
    std::cout << "saldos " << a.saldo << " + " << b.saldo << " = " << a.saldo + b.saldo << '\n';
    assert(a.saldo + b.saldo == 2000);

    ColaAcotada<int> etapa1(8), etapa2(8);
    std::array<Contador, 2> procesados;
    long suma = 0;
    {
        std::jthread productor([&] {
            for (int i = 1; i <= 1000; ++i) etapa1.mete(i);
            etapa1.cierra();
        });
        std::jthread transformador([&] {
            while (auto x = etapa1.saca()) {
                etapa2.mete(*x * 2);
                procesados[0].n.fetch_add(1, std::memory_order_relaxed);
            }
            etapa2.cierra();
        });
        std::jthread consumidor([&] {
            while (auto x = etapa2.saca()) {
                suma += *x;
                procesados[1].n.fetch_add(1, std::memory_order_relaxed);
            }
        });
    }
    std::cout << "canalización: " << procesados[0].n << " y " << procesados[1].n << " procesados, suma " << suma << '\n';
    assert(suma == 1001000 && procesados[1].n == 1000);
    static_assert(sizeof(Contador) == 64 && sizeof(procesados) == 128);
}
```

## 9. Errores típicos

- Compartir datos entre hilos sin sincronizar "porque solo es un `bool`" (es comportamiento indefinido; usa `std::atomic<bool>`).
- `lock()`/`unlock()` a mano; tomar varios mutex en órdenes distintos.
- Esperar en una variable de condición sin predicado.
- `std::thread` destruido sin `join` (termina el programa); detached threads que usan variables locales ya destruidas.
- Elegir órdenes de memoria relajados sin poder justificar la relación "sucede antes"; inventar estructuras sin cerrojos sin TSan.
- Optimizar sin perfil; medir en modo depuración; ignorar la compartición falsa.
- `include_directories` y `add_definitions` globales en CMake; requisitos `PUBLIC` donde bastaba `PRIVATE`.
- Romper la ABI de una biblioteca dinámica al cambiar una clase pública.
- Ejecutar las pruebas sin sanitizadores, o ASan y TSan a la vez (son incompatibles).

## 10. Resumen

- Carreras de datos = comportamiento indefinido. `jthread` y `stop_token`; `scoped_lock` para varios mutex; `unique_lock` con variables de condición y predicado; `latch`, `barrier`, semáforos.
- `std::atomic`, `memory_order` (relaxed, acquire/release, seq_cst), `compare_exchange`; cola SPSC.
- `async`, `future`, `promise`, `packaged_task`, grupos de hilos.
- Localidad, líneas de caché de 64 bytes, compartición falsa y `alignas(64)`, SSO, `reserve`, `pmr`; `-O2`, LTO, PGO; Google Benchmark, `perf`, *flamegraphs*.
- CMake por objetivos: `PRIVATE`, `INTERFACE`, `PUBLIC`; `find_package`, `FetchContent`, presets, `ctest`; vcpkg y Conan.
- ABI Itanium, pimpl, `extern "C"`, estáticas frente a dinámicas, visibilidad.
- `-Werror`, ASan/UBSan/TSan/MSan, clang-tidy, clang-format, GoogleTest, libFuzzer, cobertura, `_FORTIFY_SOURCE`, `_GLIBCXX_ASSERTIONS`, PIE y RELRO.

## Repaso: lo que debe quedarte dentro de un mes

1. En C++, una carrera de datos es comportamiento indefinido.
2. Varios mutex a la vez: `std::scoped_lock`.
3. `release` al publicar y `acquire` al leer.
4. Dos hilos que escriben en la misma línea de caché se estorban aunque usen variables distintas.
5. En CMake, cada requisito va en su objetivo con `PRIVATE`, `INTERFACE` o `PUBLIC`.

## Siguiente

`sys-c-profesional` (las mismas prácticas en C) y `sys-concurrencia` (el modelo de memoria del hardware), y los proyectos `proy-sys-shell-c` y `proy-sys-compilador`.
