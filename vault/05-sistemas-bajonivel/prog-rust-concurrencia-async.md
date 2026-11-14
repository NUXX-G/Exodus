---
id: prog-rust-concurrencia-async
title: "Rust III, concurrencia sin miedo: hilos, Send y Sync, Arc y Mutex, canales, atómicos y ordenaciones de memoria, async/await, Future y Pin, y tokio"
area: bajo-nivel
trunk_level: 11
prerequisites: [prog-rust-traits-genericos, sys-procesos-planificacion]
academic_sources:
  - "Bos, M. Rust Atomics and Locks: Low-Level Concurrency in Practice. O'Reilly, 2023."
  - "Klabnik, S.; Nichols, C.; Krycho, C. The Rust Programming Language, 3ª ed. (Rust 2024), caps. de concurrencia y async. No Starch Press, 2026."
  - "Tokio project. Tokio tutorial y documentación de la API (tokio 1.x); documentación de std::sync, std::thread y std::future. Consultadas en noviembre de 2026."
exercises:
  - id: spawn-y-join
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::thread;

      fn main() {
          let manejadores: Vec<_> = (1..=4).map(|i| thread::spawn(move || i * i)).collect();
          let total: i32 = manejadores.into_iter().map(|h| h.join().unwrap()).sum();
          println!("{total}");
      }
      ```

      Respuesta: un número.
    answers: ["sha256:624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"]
  - id: prestamo-en-hilo
    tier: 1
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      use std::thread;

      fn main() {
          let datos = vec![1, 2, 3];
          let h = thread::spawn(|| datos.len());
          println!("{}", h.join().unwrap());
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:f736412237a8a543db240eba1d615883d79b879777b7511f4d9bfeeb32a1fa78"]
  - id: rc-entre-hilos
    tier: 1
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      use std::rc::Rc;
      use std::thread;

      fn main() {
          let compartido = Rc::new(5);
          let copia = Rc::clone(&compartido);
          let h = thread::spawn(move || *copia + 1);
          println!("{}", h.join().unwrap());
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:23bc46bc6d1b71218d3be49f2ac43640d9977dee7a5abbc90a464bdb76fcb539"]
  - id: arc-mutex
    tier: 1
    prompt: |
      ¿Qué imprime? (Los clones de `Arc` que se movieron a los hilos se destruyen al terminar cada hilo.)

      ```rust
      use std::sync::{Arc, Mutex};
      use std::thread;

      fn main() {
          let contador = Arc::new(Mutex::new(0u32));
          let mut hs = Vec::new();
          for _ in 0..8 {
              let c = Arc::clone(&contador);
              hs.push(thread::spawn(move || {
                  for _ in 0..1000 {
                      *c.lock().unwrap() += 1;
                  }
              }));
          }
          for h in hs {
              h.join().unwrap();
          }
          println!("{} {}", *contador.lock().unwrap(), Arc::strong_count(&contador));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:b2f7f8759dbf8d3530162a89dc6f1f4d9a1a9ac13d3a6a72409ffd96afa1a0a9"]
  - id: canales
    tier: 1
    prompt: |
      ¿Qué imprime? ¿Por qué hace falta `drop(tx)` para que termine?

      ```rust
      use std::sync::mpsc;
      use std::thread;

      fn main() {
          let (tx, rx) = mpsc::channel();
          for id in 0..3u32 {
              let tx = tx.clone();
              thread::spawn(move || {
                  for k in 1..=4 {
                      tx.send(id * 10 + k).unwrap();
                  }
              });
          }
          drop(tx);
          let recibidos: Vec<u32> = rx.iter().collect();
          println!("{} {}", recibidos.len(), recibidos.iter().sum::<u32>());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:29ab8dd9bc17484c70b067d5483f41232a63505db64621f835b574049a545809"]
  - id: scope
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::thread;

      fn main() {
          let datos: Vec<u64> = (1..=100).collect();
          let mut parciales = [0u64; 4];
          thread::scope(|s| {
              for (trozo, p) in datos.chunks(25).zip(parciales.iter_mut()) {
                  s.spawn(move || *p = trozo.iter().sum());
              }
          });
          println!("{:?} {}", parciales, datos.len());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:7db34da7a1eea31c3c3883f175193ed9e1ad430b549ccd297e4ea93ceb314c16"]
  - id: atomicos
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::sync::atomic::{AtomicUsize, Ordering};
      use std::sync::Arc;
      use std::thread;

      fn main() {
          let n = Arc::new(AtomicUsize::new(0));
          let hs: Vec<_> = (0..4)
              .map(|_| {
                  let n = Arc::clone(&n);
                  thread::spawn(move || {
                      for _ in 0..250 {
                          n.fetch_add(1, Ordering::Relaxed);
                      }
                  })
              })
              .collect();
          for h in hs {
              h.join().unwrap();
          }
          let a = n.compare_exchange(1000, 7, Ordering::SeqCst, Ordering::SeqCst);
          let b = n.compare_exchange(1000, 9, Ordering::SeqCst, Ordering::SeqCst);
          println!("{a:?} {b:?} {}", n.load(Ordering::SeqCst));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:0ac96d56dc2b0865e30ed5ebb860e6bf06f9ac95ad3ea4b72a31111d8214207b"]
  - id: envenenamiento
    tier: 2
    prompt: |
      Un hilo hace pánico mientras tiene el cerrojo (el gancho de pánico silencia el mensaje). ¿Qué imprime?

      ```rust
      use std::sync::{Arc, Mutex};
      use std::thread;

      fn main() {
          std::panic::set_hook(Box::new(|_| {}));
          let m = Arc::new(Mutex::new(vec![1]));
          let m2 = Arc::clone(&m);
          let r = thread::spawn(move || {
              let mut g = m2.lock().unwrap();
              g.push(2);
              panic!("fallo con el cerrojo tomado");
          })
          .join();
          let envenenado = m.is_poisoned();
          let datos = match m.lock() {
              Ok(g) => g.clone(),
              Err(e) => e.into_inner().clone(),
          };
          println!("{} {} {:?}", r.is_err(), envenenado, datos);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:49238148806b40f936d73637f0e3b5e09a6e3c227b6ee92a787d06a33484a89b"]
  - id: rwlock
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::sync::{Arc, RwLock};
      use std::thread;

      fn main() {
          let config = Arc::new(RwLock::new(String::from("v1")));
          {
              let r1 = config.read().unwrap();
              let r2 = config.read().unwrap();
              let w = config.try_write();
              println!("{} {} {}", *r1, *r2, w.is_err());
          }
          let c = Arc::clone(&config);
          thread::spawn(move || c.write().unwrap().push_str("+parche")).join().unwrap();
          println!("{}", config.read().unwrap());
      }
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:444cce949f078e93ea0bc7d6d0b53ce8c672ba918de69861421734623dfb11ae"]
  - id: condvar
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::collections::VecDeque;
      use std::sync::{Arc, Condvar, Mutex};
      use std::thread;

      fn main() {
          let par = Arc::new((Mutex::new(VecDeque::new()), Condvar::new()));
          let p = Arc::clone(&par);
          let consumidor = thread::spawn(move || {
              let (m, cv) = &*p;
              let mut suma = 0;
              let mut n = 0;
              loop {
                  let mut cola = cv.wait_while(m.lock().unwrap(), |c| c.is_empty()).unwrap();
                  let x: i32 = cola.pop_front().unwrap();
                  drop(cola);
                  if x < 0 {
                      return (n, suma);
                  }
                  n += 1;
                  suma += x;
              }
          });
          let (m, cv) = &*par;
          for x in [5, 10, 15, 20, -1] {
              m.lock().unwrap().push_back(x);
              cv.notify_one();
          }
          let (n, suma) = consumidor.join().unwrap();
          println!("{n} {suma}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:83151157c10d85af7c84657c71c3e3603d955160f0526fce672481da83a2e090"]
  - id: futuros-perezosos
    tier: 2
    prompt: |
      Un `async fn` no hace nada hasta que se sondea su futuro. ¿Qué imprime? (`block_on` es un ejecutor mínimo escrito con la biblioteca estándar: sondea el futuro y aparca el hilo hasta que lo despiertan.)

      ```rust
      use std::future::Future;
      use std::pin::pin;
      use std::sync::Arc;
      use std::task::{Context, Poll, Wake, Waker};
      use std::thread::{self, Thread};

      struct Despertador(Thread);

      impl Wake for Despertador {
          fn wake(self: Arc<Self>) {
              self.0.unpark();
          }
      }

      fn block_on<F: Future>(f: F) -> F::Output {
          let mut f = pin!(f);
          let waker = Waker::from(Arc::new(Despertador(thread::current())));
          let mut cx = Context::from_waker(&waker);
          loop {
              match f.as_mut().poll(&mut cx) {
                  Poll::Ready(v) => return v,
                  Poll::Pending => thread::park(),
              }
          }
      }

      async fn doble(x: u32) -> u32 {
          println!("doble {x}");
          x * 2
      }

      async fn calcula() -> u32 {
          let a = doble(1);
          let b = doble(2);
          println!("creados");
          let rb = b.await;
          let ra = a.await;
          ra + rb
      }

      fn main() {
          let f = calcula();
          println!("antes");
          println!("{}", block_on(f));
      }
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:e876fec51ef19e909f7f4265268ead10b938f390c805a58e00a2dccce528493e"]
  - id: rc-a-traves-de-await
    tier: 2
    prompt: |
      Este programa no compila: el futuro de `tarea` no es `Send`. ¿Qué tipo de la biblioteca estándar, vivo a través del `.await`, lo impide?

      ```rust
      use std::rc::Rc;

      async fn espera() {}

      async fn tarea() -> i32 {
          let r = Rc::new(41);
          espera().await;
          *r + 1
      }

      fn exige_send<F: std::future::Future + Send>(_f: F) {}

      fn main() {
          exige_send(tarea());
      }
      ```

      Respuesta: el nombre del tipo, sin parámetros.
    answers: ["sha256:7581e0d493f6ab3fc525c4dce2a5f835c0399ebb3207d49e609cbccb2d902a42"]
  - id: barrera
    tier: 2
    prompt: |
      ¿Qué imprime? (`Barrier::wait` elige exactamente un líder.)

      ```rust
      use std::sync::atomic::{AtomicUsize, Ordering};
      use std::sync::{Arc, Barrier};
      use std::thread;

      fn main() {
          let n = 6;
          let barrera = Arc::new(Barrier::new(n));
          let lideres = Arc::new(AtomicUsize::new(0));
          let llegados = Arc::new(AtomicUsize::new(0));
          let hs: Vec<_> = (0..n)
              .map(|_| {
                  let (b, l, ll) = (Arc::clone(&barrera), Arc::clone(&lideres), Arc::clone(&llegados));
                  thread::spawn(move || {
                      ll.fetch_add(1, Ordering::SeqCst);
                      let r = b.wait();
                      let vistos = ll.load(Ordering::SeqCst);
                      if r.is_leader() {
                          l.fetch_add(1, Ordering::SeqCst);
                      }
                      vistos
                  })
              })
              .collect();
          let minimo = hs.into_iter().map(|h| h.join().unwrap()).min().unwrap();
          println!("{} {}", lideres.load(Ordering::SeqCst), minimo);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: join-de-errores
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::thread;

      fn trabajo(i: u32) -> Result<u32, String> {
          if i % 3 == 0 { Err(format!("falla {i}")) } else { Ok(i * 10) }
      }

      fn main() {
          let hs: Vec<_> = (1..=5).map(|i| thread::spawn(move || trabajo(i))).collect();
          let resultados: Vec<Result<u32, String>> = hs.into_iter().map(|h| h.join().unwrap()).collect();
          let todos: Result<Vec<u32>, String> = resultados.iter().cloned().collect();
          let buenos: u32 = resultados.iter().filter_map(|r| r.as_ref().ok()).sum();
          println!("{:?} {}", todos, buenos);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:27aa31388cea11b653d1676cdb9874eedeff6f396c97b4d2be728605b7f82124"]
  - id: primos-en-paralelo
    tier: 3
    prompt: |
      Cada hilo cuenta los primos de una progresión aritmética. ¿Qué imprime? (Puedes calcularlo con tu propio programa.)

      ```rust
      use std::thread;

      fn es_primo(n: u32) -> bool {
          if n < 2 {
              return false;
          }
          let mut d = 2;
          while d * d <= n {
              if n % d == 0 {
                  return false;
              }
              d += 1;
          }
          true
      }

      fn main() {
          let limite = 100_000u32;
          let hilos = 8u32;
          let total: usize = thread::scope(|s| {
              let hs: Vec<_> = (0..hilos)
                  .map(|k| s.spawn(move || (k..=limite).step_by(hilos as usize).filter(|&n| es_primo(n)).count()))
                  .collect();
              hs.into_iter().map(|h| h.join().unwrap()).sum()
          });
          println!("{total}");
      }
      ```

      Respuesta: un número.
    answers: ["sha256:454df0b799320283814e09c66752efdf334c0205f55f6334c40896e9a48f0712"]
  - id: futuro-propio
    tier: 3
    prompt: |
      Un futuro hecho a mano que se despierta a sí mismo. ¿Qué imprime? (`block_on` es un ejecutor mínimo escrito con la biblioteca estándar: sondea el futuro y aparca el hilo hasta que lo despiertan.)

      ```rust
      use std::future::Future;
      use std::pin::pin;
      use std::sync::Arc;
      use std::task::{Context, Poll, Wake, Waker};
      use std::thread::{self, Thread};

      struct Despertador(Thread);

      impl Wake for Despertador {
          fn wake(self: Arc<Self>) {
              self.0.unpark();
          }
      }

      fn block_on<F: Future>(f: F) -> F::Output {
          let mut f = pin!(f);
          let waker = Waker::from(Arc::new(Despertador(thread::current())));
          let mut cx = Context::from_waker(&waker);
          loop {
              match f.as_mut().poll(&mut cx) {
                  Poll::Ready(v) => return v,
                  Poll::Pending => thread::park(),
              }
          }
      }

      struct CuentaAtras {
          quedan: u32,
          sondeos: u32,
      }

      impl Future for CuentaAtras {
          type Output = u32;
          fn poll(mut self: std::pin::Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<u32> {
              self.sondeos += 1;
              if self.quedan == 0 {
                  Poll::Ready(self.sondeos)
              } else {
                  self.quedan -= 1;
                  cx.waker().wake_by_ref();
                  Poll::Pending
              }
          }
      }

      fn main() {
          let a = block_on(CuentaAtras { quedan: 3, sondeos: 0 });
          let b = block_on(async {
              let x = CuentaAtras { quedan: 1, sondeos: 0 }.await;
              let y = CuentaAtras { quedan: 0, sondeos: 0 }.await;
              x * 10 + y
          });
          println!("{a} {b}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:5092c37bcbc9f0fb33cb0f9cab7aa5ae94ed0f1219773c380b143b7c1224d01b"]
---

Un servidor atiende decenas de miles de conexiones; un compilador usa todos los núcleos; un robot lee sensores mientras planifica. La concurrencia es
inevitable y, en C o C++, es la fuente de los errores más difíciles: **carreras de datos** que solo aparecen en producción, una vez cada mil millones de
ejecuciones. En Rust, el mismo sistema de tipos que impide los errores de memoria impide las carreras de datos: si compila sin `unsafe`, dos hilos no pueden
acceder a la vez a un dato cuando uno de ellos escribe. Rust lo llama "concurrencia sin miedo", y este nodo explica cómo funciona (los traits `Send` y `Sync`), las
herramientas para compartir estado (`Arc`, `Mutex`, `RwLock`, atómicos con sus **ordenaciones de memoria**) o para no compartirlo (canales), y el modelo
**asíncrono** (`async`/`await`, `Future`, `Pin`, ejecutores y tokio) con el que se escriben los servicios de red. Lo que Rust **no** impide (interbloqueos,
condiciones de carrera lógicas) también está aquí, porque un profesional tiene que saber dónde termina la garantía.

## Objetivos

Al terminar sabrás:

1. Crear, unir y delimitar hilos (`spawn`, `join`, `scope`) y explicar los errores E0373 y E0277 al usarlos.
2. Definir `Send` y `Sync`, y saber qué tipos los implementan y por qué.
3. Compartir estado con `Arc`, `Mutex`, `RwLock`, `Condvar`, `Barrier` y `OnceLock`, incluido el envenenamiento y los interbloqueos.
4. Usar atómicos y elegir ordenación de memoria (`Relaxed`, `Acquire`/`Release`, `SeqCst`) con el modelo de "sucede antes".
5. Comunicar hilos con canales y diseñar con contrapresión.
6. Explicar `Future`, `poll`, `Waker` y `Pin`, y escribir un ejecutor mínimo.
7. Escribir servicios con tokio: tareas, `spawn` y `Send`, `select!`, tiempos máximos, semáforos, cancelación y trabajo bloqueante.

## Qué debes dominar antes

[[prog-rust-traits-genericos]] (traits, cierres, `Arc`/`Rc`, `RefCell`) y [[sys-procesos-planificacion]] (hilos, planificación, cambios de contexto). Los conceptos de exclusión
mutua y de condición de carrera se suponen vistos allí.

> [!question] Test de entrada
> 1. ¿Qué es una carrera de datos?
> 2. ¿Por qué `contador += 1` no es atómico en C?
> 3. ¿Qué diferencia hay entre concurrencia y paralelismo?
>
> Respuestas: dos accesos simultáneos a la misma memoria, al menos uno de escritura y sin sincronización (en C y C++, comportamiento indefinido); porque es leer,
> sumar y escribir, y otro hilo puede intercalarse; la concurrencia es estructurar el programa en tareas que progresan a la vez, el paralelismo es ejecutarlas
> literalmente al mismo tiempo en varios núcleos.

## 1. Para qué sirve

- **Servicios de red**: servidores HTTP y gRPC, proxies, bases de datos y colas, escritos sobre tokio.
- **Cálculo paralelo**: compiladores, motores de búsqueda, procesado de datos y de imagen que usan todos los núcleos (rayon, hilos delimitados).
- **Sistemas embebidos y robótica**: tareas concurrentes con tiempos acotados (embassy en microcontroladores).
- **Seguridad**: las carreras de datos son una fuente clásica de vulnerabilidades (TOCTOU, *use-after-free* entre hilos); eliminarlas por construcción reduce la superficie.

## 2. Hilos

`std::thread::spawn(cierre)` crea un hilo del sistema operativo y devuelve un `JoinHandle<T>`; `join()` espera y devuelve `Result<T, _>` (`Err` si el hilo hizo pánico). El
cierre debe ser **`'static`**: el hilo puede vivir más que la función que lo creó, así que no puede tomar prestadas variables locales (**E0373**); se mueven con `move`. Para
tomar prestado de verdad, **`thread::scope`** (estable desde Rust 1.63) garantiza que todos los hilos del ámbito terminan antes de que el ámbito acabe, y entonces sí pueden
usar referencias a datos locales: es la forma idiomática de paralelizar sobre un `Vec` sin `Arc`. `thread::Builder` fija nombre y tamaño de pila;
`thread::available_parallelism()` da el número de núcleos utilizables.

## 3. Send y Sync: la garantía

Dos traits **marcadores** (sin métodos) que el compilador implementa automáticamente cuando todos los componentes de un tipo los implementan:

- **`Send`**: es seguro **mover** un valor del tipo a otro hilo. Casi todo lo es; no lo son `Rc` (su contador no es atómico: dos hilos que lo clonen a la vez lo corrompen),
  los punteros crudos y los guardas de `MutexGuard` (el cerrojo debe soltarlo el hilo que lo tomó).
- **`Sync`**: es seguro **compartir** referencias `&T` entre hilos; formalmente, `T: Sync` si y solo si `&T: Send`. `Cell` y `RefCell` son `Send` pero no `Sync` (su mutabilidad interior no
  está sincronizada); `Mutex<T>` es `Sync` si `T: Send`.

`thread::spawn` exige `F: Send + 'static`, y `Arc<T>` es `Send` y `Sync` solo si `T` es `Send + Sync`: así es como un `Rc` enviado a un hilo produce **E0277** en lugar de una corrupción en
producción. En Rust seguro **no existen carreras de datos**. Sí pueden existir **interbloqueos** (dos hilos que esperan cada uno el cerrojo del otro), **condiciones de
carrera lógicas** (comprobar y luego actuar sin mantener el cerrojo) y fugas: la concurrencia sigue necesitando diseño.

## 4. Estado compartido

- **`Arc<T>`**: propiedad compartida entre hilos con contador atómico.
- **`Mutex<T>`**: el dato vive **dentro** del cerrojo; `lock()` devuelve un guarda que da acceso y que suelta el cerrojo al destruirse (RAII). No se puede tocar el dato sin el
  cerrojo. Si un hilo hace pánico con el cerrojo tomado, el `Mutex` queda **envenenado**: los siguientes `lock()` devuelven `Err`, del que se puede recuperar el dato con
  `into_inner()` si sabes que sigue siendo coherente. Mantén las secciones críticas cortas y nunca hagas E/S o `.await` con un guarda vivo.
- **`RwLock<T>`**: muchos lectores o un escritor; útil cuando las lecturas dominan (configuración).
- **`Condvar`**: esperar a que se cumpla una condición sobre datos protegidos por un `Mutex`, sin espera activa. Puede haber despertares espurios: espera siempre en bucle o con
  `wait_while`.
- **`Barrier`** (sincronizar fases), **`OnceLock`/`LazyLock`** (inicialización perezosa única, sin dependencias externas desde Rust 1.80).
- **Interbloqueos**: se evitan tomando los cerrojos siempre en el **mismo orden global**, con secciones críticas que no llaman a código desconocido, o con `try_lock`.

## 5. Atómicos y ordenaciones de memoria

`AtomicBool`, `AtomicUsize`, `AtomicI64`, `AtomicPtr`… ofrecen operaciones indivisibles: `load`, `store`, `fetch_add`, `swap`, `compare_exchange` (cambia el valor solo si es el esperado
y devuelve `Ok(anterior)` o `Err(actual)`: la base de los algoritmos sin cerrojos). Cada operación lleva una **ordenación** que dice qué garantiza sobre **otras** posiciones de
memoria, porque compiladores y procesadores reordenan accesos:

- **`Relaxed`**: solo atomicidad de esa variable. Suficiente para contadores y estadísticas.
- **`Release`** (al escribir) y **`Acquire`** (al leer): si un hilo lee con `Acquire` el valor que otro escribió con `Release`, todo lo que el escritor hizo **antes** de su `store` **sucede
  antes** que lo que el lector haga **después** de su `load`. Es el patrón para **publicar** datos: rellenar un buffer y luego `listo.store(true, Release)`; el lector espera
  `listo.load(Acquire)` y entonces ve el buffer completo.
- **`SeqCst`**: además, un orden total único de todas las operaciones `SeqCst`. Es la opción por defecto razonable cuando dudas, a cambio de algo de rendimiento.

El modelo es el mismo que el de C++11 (`prog-cpp-profesional`). Escribir estructuras sin cerrojos correctas es difícil: se prueban con **loom** (explora entrelazados) y
**Miri**, y en general se prefiere un `Mutex` bien usado.

## 6. Canales: comunicar en vez de compartir

`std::sync::mpsc::channel()` crea un canal de varios productores y un consumidor: `tx.send(v)` **mueve** el valor al receptor (no hay estado compartido), `rx.recv()` bloquea, y
`for v in rx` termina cuando **todos** los emisores se han destruido (por eso hay que soltar el `tx` original tras clonarlo). `sync_channel(k)` es **acotado**: `send` bloquea si hay $k$
mensajes pendientes, lo que da **contrapresión** (un productor rápido no agota la memoria). Para varios consumidores o selección entre canales se usan crossbeam o flume; para
paralelismo de datos, **rayon** (`par_iter()`) reparte el trabajo con robo de tareas.

## 7. Async: Future, poll, Waker y Pin

Un hilo por conexión deja de escalar con decenas de miles de conexiones que pasan casi todo el tiempo **esperando** E/S. El modelo asíncrono usa pocas hebras y
muchas **tareas** ligeras. Un `async fn` no ejecuta nada al llamarlo: devuelve un **futuro**, una máquina de estados que el compilador genera con un estado por cada
`.await`. El trait:

```rust
// sin-ejecutar (es la definición de la biblioteca estándar)
pub trait Future {
    type Output;
    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output>;
}
```

Un **ejecutor** llama a `poll`; el futuro avanza hasta que tendría que esperar y devuelve `Poll::Pending` tras registrar el **`Waker`** del contexto (por ejemplo, en el reactor de E/S que
vigila el socket); cuando el dato llega, alguien llama a `waker.wake()` y el ejecutor vuelve a sondear esa tarea. **`Pin`** existe porque la máquina de estados puede contener
referencias a sus propios campos (una variable local prestada a través de un `.await`): una vez sondeado, el futuro no se puede mover de sitio, y `Pin<&mut Self>` lo garantiza en
los tipos. Los futuros son **perezosos** (nada ocurre sin `.await` o sin un ejecutor) y **cancelables**: soltar un futuro lo cancela en su último punto de espera, así que el
código asíncrono debe ser seguro ante la cancelación (no dejar estado a medias entre dos `.await`).

## 8. Tokio en la práctica

**Tokio** es el entorno de ejecución más usado: un planificador multihilo con robo de tareas, un reactor de E/S (epoll, kqueue, IOCP) y temporizadores. Lo esencial:

- `#[tokio::main]` arranca el entorno; `tokio::spawn(fut)` lanza una **tarea** que debe ser `Send + 'static` (puede migrar de hilo), y por eso un `Rc` o un `MutexGuard` de std vivos a
  través de un `.await` hacen el futuro no `Send` y el `spawn` no compila; `JoinHandle` y `JoinSet` recogen resultados.
- **Nunca bloquees un hilo del entorno**: nada de `std::thread::sleep`, E/S síncrona ni cálculo largo dentro de una tarea; para eso, `tokio::task::spawn_blocking`.
- `tokio::time::{sleep, timeout, interval}`; `tokio::select!` espera varios futuros y se queda con el primero (cancelando los demás); `tokio::sync` ofrece `mpsc`, `oneshot`,
  `broadcast`, `watch`, `Semaphore` (limitar la concurrencia) y un `Mutex` asíncrono (solo necesario si hay que mantener el cerrojo a través de un `.await`; si no, el de std es más rápido).
- Las funciones `async` en traits son estables desde Rust 1.75. Las pruebas se escriben con `#[tokio::test]` y, para el tiempo, `start_paused = true`: el reloj virtual avanza solo y los
  tiempos son deterministas.

> [!example] Ejemplo resuelto 1: tres formas de sumar en paralelo
> Sumar un `Vec<u64>` grande con 4 hilos: (a) `thread::scope` y un trozo por hilo, cada uno devolviendo su suma parcial: sin `Arc` ni cerrojos, y lo más rápido; (b) un `Arc<Mutex<u64>>`
> que cada hilo incrementa elemento a elemento: correcto pero con contención en cada suma (puede ser más lento que un solo hilo); (c) canales, cada hilo envía su parcial: correcto y
> sin compartir, útil cuando los trabajos llegan de forma dinámica. La lección: comparte lo menos posible y sincroniza lo menos a menudo posible.

> [!example] Ejemplo resuelto 2: productor y consumidor con contrapresión
> Un lector de disco produce bloques más deprisa de lo que un compresor los procesa. Con `channel()` sin límite, la cola crece hasta agotar la memoria; con `sync_channel(4)`, el
> productor se bloquea cuando hay 4 bloques pendientes y el sistema se autorregula al ritmo del más lento. En tokio, el equivalente es `mpsc::channel(4)` y `send().await`.

> [!example] Ejemplo resuelto 3: concurrencia limitada con tokio (con menos ayuda)
> Diez peticiones simuladas tardan 100 ms cada una; el servicio remoto admite 3 a la vez. Con un `Semaphore::new(3)` y `acquire().await` en cada tarea, el tiempo total es $\lceil 10/3\rceil \cdot 100 = 400$ ms;
> sin semáforo, 100 ms; en serie, 1 s. Añade un `timeout` de 250 ms a una petición que tarda 5 s y comprueba que devuelve `Err(Elapsed)`. El programa siguiente lo mide con el reloj
> virtual de tokio.

## 9. Comprobar con un programa

Este programa usa tokio (`full` y `test-util`), compila sin avisos de `cargo clippy -- -D warnings` y pasa `cargo test`: el ejemplo 1 por las tres vías, el ejemplo 2 con un
`sync_channel(2)` y el ejemplo 3 con el tiempo pausado.

```rust
// cargo: tokio = { version = "1", features = ["full", "test-util"] }
use std::sync::mpsc;
use std::sync::{Arc, Mutex};
use std::thread;
use std::time::Duration;
use tokio::sync::Semaphore;
use tokio::task::JoinSet;
use tokio::time::{sleep, timeout, Instant};

fn suma_scope(v: &[u64], hilos: usize) -> u64 {
    let trozo = v.len().div_ceil(hilos);
    thread::scope(|s| {
        let hs: Vec<_> = v.chunks(trozo).map(|c| s.spawn(move || c.iter().sum::<u64>())).collect();
        hs.into_iter().map(|h| h.join().unwrap()).sum()
    })
}

fn suma_mutex(v: Arc<Vec<u64>>, hilos: usize) -> u64 {
    let total = Arc::new(Mutex::new(0u64));
    let trozo = v.len().div_ceil(hilos);
    let hs: Vec<_> = (0..hilos)
        .map(|k| {
            let (v, total) = (Arc::clone(&v), Arc::clone(&total));
            thread::spawn(move || {
                for x in v.iter().skip(k * trozo).take(trozo) {
                    *total.lock().unwrap() += x;
                }
            })
        })
        .collect();
    for h in hs {
        h.join().unwrap();
    }
    // En la edición 2024, los temporales de la expresión final (el guarda) se destruyen antes que `total`.
    *total.lock().unwrap()
}

fn suma_canal(v: &[u64], hilos: usize) -> u64 {
    let (tx, rx) = mpsc::channel();
    thread::scope(|s| {
        for c in v.chunks(v.len().div_ceil(hilos)) {
            let tx = tx.clone();
            s.spawn(move || tx.send(c.iter().sum::<u64>()).unwrap());
        }
    });
    drop(tx);
    rx.iter().sum()
}

/// Ejemplo resuelto 2: el productor nunca va más de `k` bloques por delante del consumidor.
fn maximo_pendiente(k: usize, bloques: usize) -> usize {
    let (tx, rx) = mpsc::sync_channel::<usize>(k);
    let producidos = Arc::new(std::sync::atomic::AtomicUsize::new(0));
    let p = Arc::clone(&producidos);
    let productor = thread::spawn(move || {
        for i in 0..bloques {
            tx.send(i).unwrap();
            p.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
        }
    });
    let mut maximo = 0;
    for consumidos in 1..=bloques {
        thread::sleep(Duration::from_millis(2));
        rx.recv().unwrap();
        let adelanto = producidos.load(std::sync::atomic::Ordering::SeqCst) - (consumidos - 1);
        maximo = maximo.max(adelanto);
    }
    productor.join().unwrap();
    maximo
}

/// Ejemplo resuelto 3: n peticiones de `ms` milisegundos con como mucho `k` a la vez.
async fn peticiones(n: u64, k: usize, ms: u64) -> (u64, Duration) {
    let sem = Arc::new(Semaphore::new(k));
    let inicio = Instant::now();
    let mut tareas = JoinSet::new();
    for i in 0..n {
        let sem = Arc::clone(&sem);
        tareas.spawn(async move {
            let _permiso = sem.acquire().await.unwrap();
            sleep(Duration::from_millis(ms)).await;
            i
        });
    }
    let mut suma = 0;
    while let Some(r) = tareas.join_next().await {
        suma += r.unwrap();
    }
    (suma, inicio.elapsed())
}

#[tokio::main(flavor = "current_thread", start_paused = true)]
async fn main() {
    let v: Vec<u64> = (1..=1_000_000).collect();
    let esperado = 1_000_000 * 1_000_001 / 2;
    assert_eq!(suma_scope(&v, 4), esperado);
    assert_eq!(suma_mutex(Arc::new(v.clone()), 4), esperado);
    assert_eq!(suma_canal(&v, 4), esperado);
    println!("las tres sumas dan {esperado}");

    let m = maximo_pendiente(2, 20);
    println!("adelanto máximo del productor con sync_channel(2): {m}");
    assert!(m <= 3, "el productor no puede ir más de k + 1 por delante");

    let (suma, t) = peticiones(10, 3, 100).await;
    println!("10 peticiones de 100 ms de 3 en 3: suma de ids {suma}, {} ms", t.as_millis());
    assert_eq!((suma, t.as_millis()), (45, 400));

    let lenta = timeout(Duration::from_millis(250), sleep(Duration::from_secs(5))).await;
    println!("la petición lenta con tiempo máximo: {}", if lenta.is_err() { "cancelada" } else { "terminó" });
    assert!(lenta.is_err());
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sumas_coinciden() {
        let v: Vec<u64> = (0..1000).collect();
        assert_eq!(suma_scope(&v, 3), suma_canal(&v, 7));
        assert_eq!(suma_mutex(Arc::new(v), 5), 499_500);
    }

    #[tokio::test(start_paused = true)]
    async fn sin_limite_y_en_serie() {
        assert_eq!(peticiones(10, 10, 100).await.1.as_millis(), 100);
        assert_eq!(peticiones(10, 1, 100).await.1.as_millis(), 1000);
    }

    #[tokio::test(start_paused = true)]
    async fn select_se_queda_con_el_primero() {
        let (tx, mut rx) = tokio::sync::mpsc::channel::<u32>(1);
        tokio::spawn(async move {
            sleep(Duration::from_millis(30)).await;
            tx.send(7).await.unwrap();
        });
        let r = tokio::select! {
            Some(x) = rx.recv() => x,
            _ = sleep(Duration::from_millis(50)) => 0,
        };
        assert_eq!(r, 7);
    }
}
```

## 10. Errores típicos

- Envolver todo en `Arc<Mutex<_>>` por reflejo; a menudo bastan hilos delimitados, canales o pasar la propiedad.
- Mantener un `MutexGuard` durante E/S, un `.await` o una llamada a código ajeno: contención e interbloqueos.
- Tomar dos cerrojos en órdenes distintos en hilos distintos.
- Usar `Relaxed` para publicar datos (otro hilo puede ver la bandera antes que los datos); o escribir estructuras sin cerrojos sin loom ni Miri.
- Bloquear el entorno de tokio (`std::thread::sleep`, E/S síncrona, cálculo largo) dentro de una tarea.
- Usar el `Mutex` de tokio cuando bastaba el de std, o el de std a través de un `.await`.
- Olvidar que soltar un futuro lo cancela, o escribir código que deja estado incoherente si se cancela entre dos `.await`.
- Canales sin límite entre etapas de distinta velocidad.

## 11. Resumen

- `spawn` (`'static`, `move`, E0373), `join`, `scope` para préstamos locales.
- `Send` (mover entre hilos) y `Sync` (`&T` es `Send`); `Rc` no es ninguno (E0277), `RefCell` no es `Sync`; sin carreras de datos en Rust seguro, pero sí interbloqueos.
- `Arc`, `Mutex` (guarda RAII, envenenamiento), `RwLock`, `Condvar` (`wait_while`), `Barrier`, `OnceLock`; orden global de cerrojos.
- Atómicos: `fetch_add`, `compare_exchange`; `Relaxed`, `Release`/`Acquire` (sucede antes), `SeqCst`; loom y Miri.
- Canales `mpsc`, `sync_channel` y contrapresión; rayon.
- `Future::poll`, `Poll`, `Waker`, `Pin`; futuros perezosos y cancelables; ejecutores.
- tokio: tareas `Send + 'static`, `spawn_blocking`, `select!`, `timeout`, `Semaphore`, `JoinSet`, canales, `Mutex` asíncrono, pruebas con `start_paused`.

## Repaso: lo que debe quedarte dentro de un mes

1. `Send`: se puede mover a otro hilo; `Sync`: se puede compartir por referencia.
2. El dato vive dentro del `Mutex`: sin cerrojo no hay acceso.
3. `Release` al publicar y `Acquire` al leer establecen "sucede antes".
4. Un futuro no hace nada hasta que lo sondean, y soltarlo lo cancela.
5. En una tarea asíncrona no se bloquea: se espera con `.await` o se delega con `spawn_blocking`.

## Siguiente

`prog-rust-unsafe-ffi-macros` (lo que hay debajo de `Arc` y `Mutex`: `unsafe`, punteros crudos e invariantes, FFI con C y macros) y `prog-rust-profesional`. El modelo de memoria
del hardware está en `sys-concurrencia`.
