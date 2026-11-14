---
id: prog-rust-unsafe-ffi-macros
title: "Rust IV, debajo del suelo: unsafe e invariantes, comportamiento indefinido y Miri, punteros crudos, disposición en memoria, asignación, FFI con C y macros"
area: bajo-nivel
trunk_level: 12
prerequisites: [prog-rust-concurrencia-async, sys-ensamblador-x86-64]
academic_sources:
  - "The Rustonomicon: The Dark Arts of Unsafe Rust. doc.rust-lang.org/nomicon, consultado en noviembre de 2026."
  - "Gjengset, J. Rust for Rustaceans: Idiomatic Programming for Experienced Developers. No Starch Press, 2021 (caps. Unsafe Code, Foreign Function Interfaces y Macros)."
  - "The Rust Reference (comportamiento indefinido, disposición de tipos, bloques extern, macros por ejemplo y procedurales) y The Little Book of Rust Macros. Consultados en noviembre de 2026."
exercises:
  - id: desreferencia-sin-unsafe
    tier: 1
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      fn main() {
          let x = 5;
          let p = &x as *const i32;
          println!("{}", *p);
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:db825dae85776b101542406aac2246e74368a969b3527b01c9f7391e88a08fc6"]
  - id: punteros-crudos
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      fn main() {
          let mut v = [10, 20, 30, 40];
          let p = v.as_mut_ptr();
          // SAFETY: los índices 1 y 3 están dentro del array y no hay otras referencias vivas.
          unsafe {
              *p.add(1) += 1;
              *p.add(3) = *p.add(1) * 2;
          }
          println!("{:?}", v);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:3f6363e83f777de93ac192149ab59a9ea055882fc3c2aded90e826ef9c4c3692"]
  - id: ffi-libc
    tier: 1
    prompt: |
      Se llama a dos funciones de la biblioteca de C. ¿Qué imprime?

      ```rust
      use std::ffi::{CStr, CString, c_char, c_int};

      unsafe extern "C" {
          fn abs(x: c_int) -> c_int;
          fn strlen(s: *const c_char) -> usize;
      }

      fn main() {
          let s = CString::new("año").unwrap();
          // SAFETY: abs y strlen son funciones de libc; s es una cadena C válida terminada en nulo.
          let (a, n) = unsafe { (abs(-42), strlen(s.as_ptr())) };
          let vuelta = unsafe { CStr::from_ptr(s.as_ptr()) }.to_str().unwrap();
          println!("{a} {n} {}", vuelta.chars().count());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:4bf983753a3d8b68554e38787e662d05f499a9032edff2c300e17ac9d7b566b1"]
  - id: macro-repeticion
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      macro_rules! suma {
          () => { 0 };
          ($($x:expr),+ $(,)?) => { 0 $(+ $x)+ };
      }

      macro_rules! mapa {
          ($($k:expr => $v:expr),* $(,)?) => {{
              let mut m = std::collections::BTreeMap::new();
              $( m.insert($k, $v); )*
              m
          }};
      }

      fn main() {
          let m = mapa! { "b" => 2, "a" => 1, "c" => suma!(1, 2, 3), };
          println!("{} {:?}", suma!(), m);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:96022a27f47378ccc8adeab39447ea15c1479584c72864ac4e1c1b1362999989"]
  - id: higiene
    tier: 1
    prompt: |
      Las macros de `macro_rules!` son higiénicas. ¿Qué imprime?

      ```rust
      macro_rules! cuadrado_de {
          ($e:expr) => {{
              let x = $e;
              x * x
          }};
      }

      fn main() {
          let x = 3;
          let y = cuadrado_de!(x + 1);
          println!("{x} {y}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:7a20311cf7a4b222d436424480bc65dd0f9d2cefcbbb1fa148ca0d7e1d5bb55a"]
  - id: bits-de-un-flotante
    tier: 1
    prompt: |
      ¿Qué imprime? (IEEE 754 de precisión simple.)

      ```rust
      fn main() {
          let f = 1.0f32;
          // SAFETY: f32 y u32 tienen el mismo tamaño y cualquier patrón de bits es un u32 válido.
          let a: u32 = unsafe { std::mem::transmute(f) };
          let b = (-2.5f32).to_bits();
          println!("{a:08x} {b:08x} {}", f32::from_bits(0x4049_0fdb));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:2b486ceef884184b79e7f35a722362fbe84c34360d73e961db428639bafa898b"]
  - id: alineacion
    tier: 1
    prompt: |
      ¿Qué imprime en x86-64?

      ```rust
      use std::mem::{align_of, size_of};

      fn main() {
          println!("{} {} {} {}", align_of::<u64>(), align_of::<u32>(), align_of::<[u8; 3]>(), size_of::<Option<std::ptr::NonNull<u8>>>());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:dca7ee6e13502915ed529e99704e17bd4d0449bec91453223f9c073d1034b382"]
  - id: union
    tier: 2
    prompt: |
      ¿Qué imprime en x86-64 (little-endian)?

      ```rust
      #[repr(C)]
      union Palabra {
          n: u32,
          b: [u8; 4],
      }

      fn main() {
          let p = Palabra { n: 0x0102_0304 };
          // SAFETY: ambos campos ocupan 4 bytes y cualquier patrón es válido para los dos.
          let bytes = unsafe { p.b };
          println!("{:?} {}", bytes, u32::from_le_bytes(bytes) == 0x0102_0304);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:31c9f41606a826604ae50229ce8bb6644832368036f44e6ff66901f995f9fb45"]
  - id: from-raw-parts
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      fn main() {
          let v: Vec<u16> = (1..=8).collect();
          let p = v.as_ptr();
          // SAFETY: los 3 elementos desde el índice 4 están dentro de v, que sigue vivo e inmutable.
          let trozo = unsafe { std::slice::from_raw_parts(p.add(4), 3) };
          println!("{:?} {}", trozo, trozo.iter().sum::<u16>());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:b44aabfa07849c3020dee74abf5c92604b87c1705aaa5a8ec669b6be7b300b31"]
  - id: macro-recursiva
    tier: 2
    prompt: |
      `tt` es un árbol de tokens: un token suelto o un grupo entre delimitadores. ¿Qué imprime?

      ```rust
      macro_rules! cuenta {
          () => { 0usize };
          ($cabeza:tt $($resto:tt)*) => { 1usize + cuenta!($($resto)*) };
      }

      macro_rules! maximo {
          ($x:expr) => { $x };
          ($x:expr, $($y:expr),+) => {{
              let a = $x;
              let b = maximo!($($y),+);
              if a > b { a } else { b }
          }};
      }

      fn main() {
          println!("{} {}", cuenta!(a b (c d) [e] f), maximo!(3, 9, 4, 7));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:3e1e967e9b793e908f8eae83c74dba9bcccce6a5535b4b462bd9994537bfe15c"]
  - id: box-crudo
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::ptr::NonNull;

      struct Ruido(u32);

      impl Drop for Ruido {
          fn drop(&mut self) {
              print!("drop{} ", self.0);
          }
      }

      fn main() {
          let crudo: *mut Ruido = Box::into_raw(Box::new(Ruido(1)));
          let nn = NonNull::new(crudo).unwrap();
          // SAFETY: el puntero viene de Box::into_raw y nadie más lo usa.
          unsafe {
              (*nn.as_ptr()).0 += 6;
          }
          print!("antes ");
          // SAFETY: se reconstruye el Box una sola vez, así que se libera una sola vez.
          let b = unsafe { Box::from_raw(nn.as_ptr()) };
          drop(b);
          println!("fin");
      }
      ```

      Respuesta: la salida tal cual.
    answers: ["sha256:bd86a85fed3b2294aead131a4249247dd86bdabaf685f1a910c6e180b639b977"]
  - id: repr-c
    tier: 2
    prompt: |
      ¿Qué imprime en x86-64?

      ```rust
      use std::mem::size_of;

      #[repr(C)]
      struct EnC {
          a: u8,
          b: u32,
          c: u8,
      }

      struct EnRust {
          a: u8,
          b: u32,
          c: u8,
      }

      fn main() {
          let r = EnRust { a: 1, b: 2, c: 3 };
          println!("{} {} {}", size_of::<EnC>(), size_of::<EnRust>(), r.a + r.c + r.b as u8);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:2adf89afa76f370d54092cb53f74d1558f116bbbffe20007a67ba31746fdb7e3"]
  - id: mem-utilidades
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::mem;

      fn main() {
          let mut a = String::from("uno");
          let mut b = String::from("dos");
          mem::swap(&mut a, &mut b);
          let viejo = mem::replace(&mut a, String::from("tres"));
          let tomado = mem::take(&mut b);
          println!("{a} {viejo} [{b}] {tomado}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:816321e0f958fab4f3b83526c0c43d7c2fb67b7b45260f1e75deb468c957f486"]
  - id: macro-expresion
    tier: 2
    prompt: |
      Un fragmento `expr` se sustituye como una expresión ya agrupada; una secuencia de `tt`, como tokens sueltos. ¿Qué imprime?

      ```rust
      macro_rules! doble {
          ($e:expr) => { $e * 2 };
      }

      macro_rules! doble_texto {
          ($($t:tt)*) => { $($t)* * 2 };
      }

      fn main() {
          println!("{} {}", doble!(1 + 2), doble_texto!(1 + 2));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:108c995b953c8a35561103e2014cf828eb654a99e310f87fab94c2f4b7d2a04f"]
  - id: vec-propio
    tier: 3
    prompt: |
      Un vector hecho a mano con el asignador global. ¿Qué imprime? (Este programa pasa Miri sin comportamiento indefinido.)

      ```rust
      use std::alloc::{self, Layout};
      use std::ptr::{self, NonNull};

      struct MiVec {
          ptr: NonNull<u64>,
          cap: usize,
          len: usize,
      }

      impl MiVec {
          fn new() -> Self {
              MiVec { ptr: NonNull::dangling(), cap: 0, len: 0 }
          }

          fn crecer(&mut self) {
              let nueva = if self.cap == 0 { 2 } else { self.cap * 2 };
              let disp = Layout::array::<u64>(nueva).unwrap();
              // SAFETY: el tamaño no es cero; si había memoria, se reubica con el mismo Layout con que se reservó.
              let p = unsafe {
                  if self.cap == 0 {
                      alloc::alloc(disp)
                  } else {
                      alloc::realloc(self.ptr.as_ptr() as *mut u8, Layout::array::<u64>(self.cap).unwrap(), disp.size())
                  }
              };
              self.ptr = NonNull::new(p as *mut u64).expect("sin memoria");
              self.cap = nueva;
          }

          fn push(&mut self, x: u64) {
              if self.len == self.cap {
                  self.crecer();
              }
              // SAFETY: len < cap, así que la posición está reservada y no inicializada.
              unsafe { ptr::write(self.ptr.as_ptr().add(self.len), x) };
              self.len += 1;
          }

          fn como_slice(&self) -> &[u64] {
              // SAFETY: los len primeros elementos están inicializados; con cap 0 el puntero colgante es válido para len 0.
              unsafe { std::slice::from_raw_parts(self.ptr.as_ptr(), self.len) }
          }
      }

      impl Drop for MiVec {
          fn drop(&mut self) {
              if self.cap > 0 {
                  // SAFETY: se libera con el mismo Layout con que se reservó.
                  unsafe { alloc::dealloc(self.ptr.as_ptr() as *mut u8, Layout::array::<u64>(self.cap).unwrap()) };
              }
          }
      }

      fn main() {
          let mut v = MiVec::new();
          let mut capacidades = Vec::new();
          for i in 1..=9 {
              v.push(i * i);
              if capacidades.last() != Some(&v.cap) {
                  capacidades.push(v.cap);
              }
          }
          println!("{:?} {} {}", capacidades, v.como_slice().iter().sum::<u64>(), v.como_slice()[8]);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:6b16e9004bc48f82a56826ae7dfc1f70b84f9eb24ea79f1f7bd6d7ffa9a27f79"]
  - id: qsort
    tier: 3
    prompt: |
      Se ordena un array de Rust con `qsort` de C y un comparador escrito en Rust. ¿Qué imprime?

      ```rust
      use std::ffi::{c_int, c_void};

      unsafe extern "C" {
          fn qsort(base: *mut c_void, n: usize, tam: usize, cmp: extern "C" fn(*const c_void, *const c_void) -> c_int);
      }

      extern "C" fn por_valor_absoluto(a: *const c_void, b: *const c_void) -> c_int {
          // SAFETY: qsort pasa punteros a elementos del array de i32.
          let (x, y) = unsafe { (*(a as *const i32), *(b as *const i32)) };
          x.abs().cmp(&y.abs()).then(x.cmp(&y)) as c_int
      }

      fn main() {
          let mut v = [5, -3, 8, -1, 0, 3, -8];
          // SAFETY: base, número y tamaño describen exactamente el array; el comparador es total.
          unsafe { qsort(v.as_mut_ptr() as *mut c_void, v.len(), std::mem::size_of::<i32>(), por_valor_absoluto) };
          println!("{:?}", v);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:77a5995fc32419d49bb9750ed9450392500ded73647b775e9c200bfb5c5812f3"]
---

Las garantías de Rust se apoyan en un núcleo de código que el compilador **no puede** comprobar: `Vec` reserva y reubica memoria cruda, `Arc` hace aritmética
atómica de contadores, `Mutex` llama al sistema operativo, y todo programa termina hablando con bibliotecas escritas en C. Ese núcleo usa **`unsafe`**: una
palabra que no apaga ninguna comprobación, sino que permite unas pocas operaciones adicionales a cambio de que **tú** garantices sus condiciones. Un
profesional de Rust no escribe `unsafe` a menudo, pero tiene que saber leerlo, auditarlo, aislarlo detrás de interfaces seguras y comprobarlo con **Miri**,
porque ahí es donde un programa en Rust puede volver a tener los errores de C. Este nodo cubre ese núcleo, la interoperabilidad con C (**FFI**) y las **macros**,
la otra herramienta de bajo nivel del lenguaje, que genera código en tiempo de compilación.

## Objetivos

Al terminar sabrás:

1. Enumerar lo que permite `unsafe`, lo que no cambia, y escribir y revisar comentarios de seguridad (`// SAFETY:`).
2. Reconocer el comportamiento indefinido de Rust y detectarlo con Miri.
3. Usar punteros crudos, `NonNull`, `ptr::read`/`write`, `&raw` y las API de procedencia.
4. Controlar la disposición en memoria (`repr(C)`, `repr(transparent)`, alineación, nichos, `MaybeUninit`) y asignar memoria con `std::alloc`.
5. Construir abstracciones seguras sobre código inseguro y entender por qué son sólidas.
6. Llamar a C desde Rust y a Rust desde C: tipos, cadenas, propiedad de la memoria, retrollamadas y pánicos.
7. Escribir macros declarativas (fragmentos, repeticiones, recursión, higiene) y saber cuándo hace falta una macro procedural.

## Qué debes dominar antes

[[prog-rust-concurrencia-async]] (y por tanto los nodos anteriores de Rust), y [[sys-ensamblador-x86-64]] para la convención de llamada, la alineación y la pila; de
[[sys-c-memoria]], el comportamiento indefinido de C.

> [!question] Test de entrada
> 1. ¿Qué significa que un programa tenga comportamiento indefinido?
> 2. ¿Qué es la convención de llamada de System V en x86-64?
> 3. ¿Por qué `struct { char a; int b; char c; }` ocupa 12 bytes en C?
>
> Respuestas: que el estándar no impone nada sobre su ejecución, y el compilador puede suponer que no ocurre y optimizar en consecuencia; las reglas de qué registros llevan
> los argumentos (`rdi`, `rsi`, `rdx`…), el retorno (`rax`) y quién preserva cada registro; porque `b` necesita alineación 4 (3 bytes de relleno tras `a`) y el tamaño se redondea a
> múltiplo de 4.

## 1. Para qué sirve

- **Implementar estructuras de datos** y primitivas eficientes: colecciones, asignadores, estructuras sin cerrojos, *buffers* circulares.
- **Interoperar**: usar bibliotecas de C (OpenSSL, SQLite, drivers), exponer bibliotecas de Rust a C, Python o C++.
- **Sistemas y embebidos**: registros de hardware mapeados en memoria, núcleos de sistema operativo, código sin biblioteca estándar.
- **Auditoría de seguridad**: en una base de código Rust, los bloques `unsafe` son exactamente donde buscar vulnerabilidades de memoria.

## 2. Qué permite `unsafe` (y qué no)

Un bloque o función `unsafe` permite **cinco** cosas más: desreferenciar punteros crudos; llamar a funciones `unsafe` (incluidas las de C); acceder o modificar un `static mut`;
implementar un trait `unsafe` (como `Send` o `Sync` a mano); y leer campos de una `union`. **Nada más**: el comprobador de préstamos, los tipos y las vidas siguen actuando
igual. Desreferenciar un puntero crudo fuera de `unsafe` es el error **E0133**.

En la edición 2024 hay que marcar también los bloques externos (`unsafe extern "C" { ... }`) y los atributos peligrosos (`#[unsafe(no_mangle)]`), y dentro de una `unsafe fn` cada
operación insegura necesita su propio bloque `unsafe` (aviso `unsafe_op_in_unsafe_fn`). La convención profesional: cada bloque lleva un comentario `// SAFETY:` que explica por
qué se cumplen las condiciones, y cada `unsafe fn` documenta en `# Safety` qué debe garantizar quien la llame.

**Solidez** (*soundness*): una función segura que usa `unsafe` por dentro es sólida si **ninguna** llamada desde código seguro, por retorcida que sea, puede provocar comportamiento
indefinido. Es la propiedad que hace que el resto del programa pueda confiar en ella. Un `unsafe` mal encapsulado (que expone un puntero crudo como seguro, o que confía en que el
llamador "se porte bien") es un error aunque los tests pasen.

## 3. Comportamiento indefinido en Rust

La lista de la referencia de Rust incluye, entre otros: desreferenciar punteros colgantes, nulos o **desalineados**; leer memoria **no inicializada**; producir un valor **inválido** para su
tipo (un `bool` que no es 0 ni 1, un `char` fuera de Unicode, un enum con un discriminante inexistente, una referencia nula); violar las **reglas de alias** (dos `&mut` activos a la vez,
o modificar algo mientras existe un `&` a ello); carreras de datos; y llamar a una función con la ABI equivocada. Como en C, el optimizador **supone** que nunca ocurre, así que sus
efectos son imprevisibles.

**Miri** es un intérprete de la representación intermedia de Rust que ejecuta el programa y **detecta** la mayoría de esos casos (con los modelos de alias *Stacked Borrows* o *Tree
Borrows*): `cargo +nightly miri test`. Todo código `unsafe` debería pasar sus pruebas bajo Miri; los sanitizadores (`-Zsanitizer=address`) complementan donde Miri no llega (FFI).

## 4. Punteros crudos y memoria

`*const T` y `*mut T` pueden ser nulos, colgantes o desalineados; crearlos es seguro (`&x as *const T`, `v.as_mut_ptr()`), usarlos no. `p.add(n)` avanza $n$ **elementos**;
`ptr::read`/`ptr::write` leen y escriben sin crear referencias ni ejecutar `drop`; `ptr::copy_nonoverlapping` es el `memcpy`. `NonNull<T>` es un puntero no nulo y covariante (y gracias a la
**optimización de nicho**, `Option<NonNull<T>>` ocupa lo mismo que un puntero). Para tomar la dirección de un campo sin crear una referencia intermedia (que sería indefinida si el
campo está desalineado o sin inicializar), `&raw const x.campo` / `&raw mut` (estables desde Rust 1.82). Las API de **procedencia** (`ptr::with_addr`, `expose_provenance`, desde 1.84)
dejan explícito de dónde viene un puntero cuando se manipulan direcciones como enteros.

**Disposición en memoria.** Por defecto, Rust **reordena** los campos de los structs para minimizar el relleno y no garantiza el orden; `#[repr(C)]` fija el orden y las reglas de C
(imprescindible en FFI); `#[repr(transparent)]` garantiza que un *newtype* tiene la misma disposición que su campo; `#[repr(u8)]` fija el tamaño del discriminante de un enum. `MaybeUninit<T>`
representa memoria que aún no contiene un `T` válido; `mem::transmute` reinterpreta bits y es de lo más peligroso del lenguaje (casi siempre hay una alternativa segura:
`to_bits`, `from_le_bytes`, `as`). Utilidades seguras que conviene conocer: `mem::swap`, `mem::replace`, `mem::take`.

**Asignación.** `std::alloc::{alloc, realloc, dealloc}` con un `Layout` (tamaño y alineación) es lo que hay debajo de `Box` y `Vec`. Reglas: no reservar tamaño cero con `alloc`, liberar con
el **mismo** `Layout`, comprobar el puntero nulo (sin memoria). `Box::into_raw` y `Box::from_raw` transfieren la propiedad a un puntero crudo y de vuelta: exactamente un
`from_raw` por cada `into_raw`, o habrá fuga o doble liberación.

## 5. Abstracciones seguras

El patrón de toda la biblioteca estándar: una interfaz segura cuyos invariantes garantizan las condiciones del `unsafe` interno. El ejemplo canónico es `split_at_mut`: devolver dos `&mut`
a mitades disjuntas de un slice es correcto, pero el comprobador de préstamos no puede demostrar que no se solapan; con punteros crudos y un `assert!(mid <= len)`, la función es
sólida. Otro: un `Vec` hecho a mano mantiene el invariante "los `len` primeros elementos están inicializados y `len ≤ cap`", y cada método `unsafe` se justifica con él. Para que el
compilador entienda que un tipo **posee** valores `T` a través de un puntero crudo (y aplique bien `drop` y la varianza), se añade `PhantomData<T>`.

## 6. FFI: hablar con C

- **Llamar a C**: se declaran las funciones en un bloque `unsafe extern "C" { fn strlen(s: *const c_char) -> usize; }` y se enlaza la biblioteca (`#[link(name = "z")]`, o un `build.rs`
  con el crate `cc` para compilar C propio). Los tipos van en `std::ffi` (`c_int`, `c_char`, `c_void`…) y los structs compartidos con `#[repr(C)]`. **bindgen** genera las declaraciones a
  partir de los `.h`.
- **Cadenas**: `CString` (propia, terminada en nulo, sin nulos internos) para pasar a C; `CStr` para leer lo que devuelve C. Cuidado: el puntero de `CString::new(..).unwrap().as_ptr()` sobre
  un temporal queda colgante al final de la sentencia.
- **Propiedad**: la regla de oro es que **quien reserva, libera**: memoria reservada por C se libera con la función de C correspondiente, y la de Rust se devuelve a Rust
  (`CString::into_raw` / `from_raw`).
- **Llamar a Rust desde C**: `#[unsafe(no_mangle)] pub extern "C" fn ...` con tipos compatibles con C, y **cbindgen** para generar el `.h`. Retrollamadas: punteros `extern "C" fn`.
- **Pánicos**: un pánico que intente desenrollar a través de una función `extern "C"` hace **abortar** el proceso (desde Rust 1.81); para propagar errores a C, captura con
  `catch_unwind` y devuelve códigos. Para otros lenguajes: PyO3 (Python), cxx (C++), wasm-bindgen (JavaScript).

## 7. Macros

Las macros generan código **antes** de la comprobación de tipos. Las **declarativas** (`macro_rules!`) comparan la entrada con patrones de **fragmentos**: `expr`, `ident`, `ty`, `pat`,
`literal`, `block`, `path` y `tt` (un árbol de tokens: un token suelto o un grupo entre paréntesis, corchetes o llaves). Las **repeticiones** `$( ... ),*` (cero o más) y `+` (una o más)
expanden listas; la **recursión** permite procesar la entrada trozo a trozo (los *tt munchers*). Un fragmento `expr` se sustituye como una expresión **ya agrupada** (así `$e * 2` con
`1 + 2` da 6, no 5), mientras que tokens sueltos se pegan tal cual. Son **higiénicas**: las variables que la macro declara no chocan con las del sitio de la llamada. Se exportan con
`#[macro_export]`.

Las **procedurales** son funciones de Rust que reciben y devuelven un `TokenStream`, compiladas en un crate aparte de tipo `proc-macro`: `#[derive(MiTrait)]`, atributos (`#[ruta("/x")]`) y
macros tipo función (`sql!(...)`). Se escriben con los crates `syn` (analizar) y `quote` (generar). Son la base de serde, tokio o clap. Regla práctica: primero una función o un genérico;
una macro declarativa si hace falta sintaxis propia o repetición de código; una procedural solo para `derive` o atributos.

> [!example] Ejemplo resuelto 1: una abstracción segura sobre punteros crudos
> `fn divide_en_dos(s: &mut [i32], mitad: usize) -> (&mut [i32], &mut [i32])`: con `assert!(mitad <= s.len())`, un puntero `p = s.as_mut_ptr()` y
> `(slice::from_raw_parts_mut(p, mitad), slice::from_raw_parts_mut(p.add(mitad), s.len() - mitad))`. El comentario `SAFETY` dice: los dos trozos están dentro del slice original
> (por el `assert!`), no se solapan, y su vida queda ligada al préstamo de `s`, así que no hay alias. Sin el `assert!` la función sería **insólida**: código seguro podría pedir
> `mitad > len` y obtener memoria fuera del slice. El programa del §8 la prueba bajo Miri.

> [!example] Ejemplo resuelto 2: C ordena con un comparador de Rust
> `qsort` de la biblioteca de C recibe un puntero al array, el número de elementos, su tamaño y un puntero a función `extern "C" fn(*const c_void, *const c_void) -> c_int`. El
> comparador de Rust convierte los `*const c_void` en `*const i32`, los lee y devuelve `Ordering as c_int` (−1, 0, 1). Las condiciones: el array vive durante toda la llamada, el tamaño
> es exacto, y el comparador no hace pánico (o abortaría) y define un orden total. Es uno de los ejercicios de este nodo.

> [!example] Ejemplo resuelto 3: una macro con sintaxis propia (con menos ayuda)
> Escribe `config!{ puerto: u16 = 8080, nombre: &str = "exodus" }` que genere un `struct Config` con esos campos y tipos y un `impl Default` con esos valores. Necesitas repeticiones
> con tres fragmentos por elemento (`$campo:ident : $tipo:ty = $valor:expr`). Comprueba en el programa siguiente que `Config::default().puerto` es 8080. ¿Por qué esto no se podría hacer con
> una función genérica?

## 8. Comprobar con un programa

Compila sin avisos de `cargo clippy -- -D warnings`, pasa `cargo test` y además se ha ejecutado bajo Miri (nightly) sin comportamiento indefinido: el ejemplo 1, un vector de
capacidad fija con `MaybeUninit` que destruye exactamente lo que contiene, `Box::into_raw`/`from_raw` y la macro del ejemplo 3.

```rust
use std::cell::Cell;
use std::mem::MaybeUninit;

// --- Ejemplo resuelto 1.
fn divide_en_dos(s: &mut [i32], mitad: usize) -> (&mut [i32], &mut [i32]) {
    assert!(mitad <= s.len(), "mitad fuera de rango");
    let n = s.len();
    let p = s.as_mut_ptr();
    // SAFETY: [0, mitad) y [mitad, n) están dentro de s (por el assert) y no se solapan;
    // ambos trozos heredan el préstamo exclusivo de s, así que no hay más alias.
    unsafe { (std::slice::from_raw_parts_mut(p, mitad), std::slice::from_raw_parts_mut(p.add(mitad), n - mitad)) }
}

// --- Vector de capacidad fija sobre MaybeUninit.
struct Fijo<T, const N: usize> {
    datos: [MaybeUninit<T>; N],
    len: usize,
}

impl<T, const N: usize> Fijo<T, N> {
    fn new() -> Self {
        Fijo { datos: [const { MaybeUninit::uninit() }; N], len: 0 }
    }
    fn push(&mut self, x: T) -> Result<(), T> {
        if self.len == N {
            return Err(x);
        }
        self.datos[self.len].write(x);
        self.len += 1;
        Ok(())
    }
    fn pop(&mut self) -> Option<T> {
        if self.len == 0 {
            return None;
        }
        self.len -= 1;
        // SAFETY: el elemento len estaba inicializado y, al bajar len, deja de considerarse vivo.
        Some(unsafe { self.datos[self.len].assume_init_read() })
    }
    fn como_slice(&self) -> &[T] {
        // SAFETY: los len primeros están inicializados; MaybeUninit<T> tiene la disposición de T.
        unsafe { std::slice::from_raw_parts(self.datos.as_ptr().cast::<T>(), self.len) }
    }
}

impl<T, const N: usize> Drop for Fijo<T, N> {
    fn drop(&mut self) {
        while self.pop().is_some() {}
    }
}

// --- Un tipo que cuenta cuántas veces se destruye.
thread_local! { static DESTRUIDOS: Cell<u32> = const { Cell::new(0) }; }
struct Cuenta;
impl Drop for Cuenta {
    fn drop(&mut self) {
        DESTRUIDOS.with(|d| d.set(d.get() + 1));
    }
}

// --- Ejemplo resuelto 3: una macro que genera un struct y su Default.
macro_rules! config {
    ($($campo:ident : $tipo:ty = $valor:expr),* $(,)?) => {
        #[derive(Debug)]
        struct Config { $($campo: $tipo),* }
        impl Default for Config {
            fn default() -> Self { Config { $($campo: $valor),* } }
        }
    };
}

config! { puerto: u16 = 8080, nombre: &'static str = "exodus", reintentos: u8 = 3 }

fn main() {
    let mut v = [1, 2, 3, 4, 5];
    let (a, b) = divide_en_dos(&mut v, 2);
    a[0] = 10;
    b[2] = 50;
    println!("{v:?}");

    let mut f: Fijo<String, 3> = Fijo::new();
    for s in ["a", "b", "c", "d"] {
        if let Err(x) = f.push(s.to_string()) {
            println!("lleno, rechazado {x}");
        }
    }
    let contenido = format!("{:?}", f.como_slice());
    println!("{contenido} {:?}", f.pop());

    {
        let mut g: Fijo<Cuenta, 4> = Fijo::new();
        for _ in 0..3 {
            g.push(Cuenta).ok();
        }
        drop(g.pop());
    }
    println!("destruidos {}", DESTRUIDOS.with(Cell::get));

    let crudo = Box::into_raw(Box::new(41));
    // SAFETY: crudo viene de Box::into_raw y se reconstruye una sola vez.
    let b = unsafe {
        *crudo += 1;
        Box::from_raw(crudo)
    };
    let c = Config::default();
    println!("{} {} {} {}", b, c.puerto, c.nombre, c.reintentos);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn divide() {
        let mut v = [1, 2, 3];
        let (a, b) = divide_en_dos(&mut v, 3);
        assert_eq!((a.len(), b.len()), (3, 0));
    }

    #[test]
    #[should_panic(expected = "mitad fuera de rango")]
    fn divide_fuera_de_rango() {
        let mut v = [1, 2, 3];
        divide_en_dos(&mut v, 4);
    }

    #[test]
    fn fijo_destruye_lo_justo() {
        let antes = DESTRUIDOS.with(Cell::get);
        {
            let mut g: Fijo<Cuenta, 2> = Fijo::new();
            g.push(Cuenta).ok();
            assert!(g.push(Cuenta).is_ok());
            assert!(g.push(Cuenta).is_err());
        }
        assert_eq!(DESTRUIDOS.with(Cell::get) - antes, 3);
    }
}
```

## 9. Errores típicos

- Creer que `unsafe` "apaga el comprobador": no; solo añade cinco operaciones.
- Bloques `unsafe` grandes sin `// SAFETY:`; funciones seguras que dependen de que el llamador cumpla algo no comprobado (insolidez).
- Crear una referencia a memoria sin inicializar o desalineada en lugar de usar `&raw`/punteros.
- `transmute` entre tipos cuyo tamaño o validez no coinciden; suponer el orden de los campos sin `#[repr(C)]`.
- Liberar con un `Layout` distinto del de reserva; mezclar el asignador de C y el de Rust.
- Pasar a C el puntero de un `CString` temporal; dejar que un pánico cruce una frontera `extern "C"`.
- No pasar las pruebas del código `unsafe` bajo Miri.
- Usar macros donde bastaba una función o un genérico; olvidar que `expr` se agrupa y `tt` no.

## 10. Resumen

- `unsafe` permite: desreferenciar punteros crudos (E0133 sin él), llamar a funciones `unsafe`, `static mut`, traits `unsafe`, campos de `union`. Edición 2024: `unsafe extern`, `#[unsafe(..)]`,
  bloques dentro de `unsafe fn`. `// SAFETY:` y `# Safety`. Solidez.
- Comportamiento indefinido: colgantes, desalineados, sin inicializar, valores inválidos, alias, carreras; Miri.
- Punteros crudos, `add`, `read`/`write`, `NonNull` y nichos, `&raw`, procedencia; `repr(C)`/`transparent`/`u8`, `MaybeUninit`, `transmute`, `mem::{swap, replace, take}`.
- `std::alloc` con `Layout`; `Box::into_raw`/`from_raw`; abstracciones seguras (`split_at_mut`, `Vec`), `PhantomData`.
- FFI: `unsafe extern "C"`, `std::ffi`, `CString`/`CStr`, quien reserva libera, `extern "C" fn` para retrollamadas, pánicos que abortan, bindgen, cbindgen, cc, PyO3.
- Macros declarativas (fragmentos, repeticiones, recursión, higiene) y procedurales (`syn`, `quote`).

## Repaso: lo que debe quedarte dentro de un mes

1. `unsafe` no desactiva nada: añade cinco operaciones y te hace responsable de sus condiciones.
2. Una función segura con `unsafe` dentro debe ser imposible de usar mal desde código seguro.
3. Todo `unsafe` se prueba bajo Miri.
4. En FFI, quien reserva la memoria la libera.
5. Una macro `expr` se sustituye ya agrupada.

## Siguiente

`prog-rust-profesional` (cómo se construye y se mantiene software en Rust en un equipo: diseño de API, errores, pruebas, rendimiento, observabilidad y servicios), y el proyecto
`proy-sys-kv-rust`. La vulnerabilidad que evita todo esto está en [[sec-explotacion-binaria]].
