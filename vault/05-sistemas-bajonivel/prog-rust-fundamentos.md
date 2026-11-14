---
id: prog-rust-fundamentos
title: "Rust I, fundamentos: cargo, tipos, propiedad y préstamos, vidas, structs y enums, patrones, errores con Result, colecciones y pruebas"
area: bajo-nivel
trunk_level: 9
prerequisites: [sys-c-memoria, prog-poo-diseno]
academic_sources:
  - "Klabnik, S.; Nichols, C.; Krycho, C. The Rust Programming Language, 3ª ed. (Rust 2024). No Starch Press, 2026; y la versión en línea en doc.rust-lang.org/book."
  - "Blandy, J.; Orendorff, J.; Tindall, L. F. S. Programming Rust, 2ª ed. O'Reilly, 2021."
  - "The Rust Reference y documentación de la biblioteca estándar (Rust 1.100, edición 2024). doc.rust-lang.org, consultada en noviembre de 2026."
exercises:
  - id: sombreado
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      fn main() {
          let x = 5;
          let x = x * 2;
          {
              let x = x + 1;
              println!("{x}");
          }
          let x = "texto";
          println!("{x} {}", x.len());
      }
      ```

      Respuesta: las líneas separadas por `;`.
    answers: ["sha256:e8e4059af0a34fec199562c1f4a0fe79f7b3b0bd4ff1a636eadcecec435f2111"]
  - id: desbordamiento
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      fn main() {
          let x: u8 = 255;
          println!("{} {:?} {}", x.wrapping_add(1), x.checked_add(1), x.saturating_add(1));
          let y: i8 = -128;
          println!("{:?} {}", y.checked_abs(), y.wrapping_abs());
      }
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:7c12c022ca1777311e26ffda06de367b7a3fa84ab138588332cd322dcab75efc"]
  - id: utf8
    tier: 1
    prompt: |
      ¿Qué imprime? (`ñ` ocupa 2 bytes en UTF-8 y `€`, 3.)

      ```rust
      fn main() {
          let s = String::from("año€");
          println!("{} {}", s.len(), s.chars().count());
          println!("{}", &s[0..3]);
          println!("{:?}", s.char_indices().map(|(i, _)| i).collect::<Vec<_>>());
      }
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:7ac04be9471a0d49b2d63bc862f1dc63bc1155e5f8a5e8cfc5156a920f544a00"]
  - id: movimiento
    tier: 1
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      fn longitud(s: String) -> usize {
          s.len()
      }

      fn main() {
          let saludo = String::from("hola");
          let n = longitud(saludo);
          println!("{n} {saludo}");
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:cce9a69ab92d0426fd6ea516036e01e3331394df2573dead0419b57bb07e2b1d"]
  - id: bucles-con-valor
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      fn main() {
          let mut n = 0;
          let doble = loop {
              n += 3;
              if n > 10 {
                  break n * 2;
              }
          };
          let mut pares = 0;
          'externo: for i in 1..=5 {
              for j in 1..=5 {
                  if i * j > 6 {
                      continue 'externo;
                  }
                  pares += 1;
              }
          }
          println!("{doble} {pares}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:93e2a45037eb149bd13e633f2cdd848b0caaa04a4f048df7c49de10fb41a3d16"]
  - id: match
    tier: 1
    prompt: |
      ¿Qué imprime? (Las ramas se prueban en orden.)

      ```rust
      fn clasifica(t: i32) -> &'static str {
          match t {
              i32::MIN..=-1 => "bajo cero",
              0 => "cero",
              x if x % 2 == 0 && x < 10 => "par pequeño",
              1..=9 => "impar pequeño",
              _ => "grande",
          }
      }

      fn main() {
          let v: Vec<&str> = [-3, 0, 4, 7, 12].iter().map(|&t| clasifica(t)).collect();
          println!("{}", v.join(","));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:340f21bcd4b114aee2dbb79fb13e05bbb11047b6d10dc5b48c7abdaadcd06423"]
  - id: tamanos
    tier: 1
    prompt: |
      ¿Qué imprime en x86-64? (El compilador puede reordenar los campos de una tupla para reducir el relleno.)

      ```rust
      use std::mem::size_of;

      fn main() {
          println!(
              "{} {} {} {} {}",
              size_of::<String>(),
              size_of::<&str>(),
              size_of::<Option<Box<i32>>>(),
              size_of::<Option<i32>>(),
              size_of::<(u8, u32, u8)>()
          );
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:2630592da2518e9e2ead168f014953810e52c156598833fca4375194e6e3f2f7"]
  - id: prestamo-y-mutacion
    tier: 2
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      fn main() {
          let mut v = vec![1, 2, 3];
          let primero = &v[0];
          v.push(4);
          println!("{primero}");
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:06b566bb326e3437798883b60c70a8ad294023edfd70e8f7e025a2a18300f53e"]
  - id: dos-mutables
    tier: 2
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      fn main() {
          let mut s = String::from("a");
          let r1 = &mut s;
          let r2 = &mut s;
          r1.push('b');
          r2.push('c');
          println!("{s}");
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:efa9c6eba89f26ae87f453384bbcf31344fd74ce2c2b9f118ad6922825a0bd1b"]
  - id: vidas
    tier: 2
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      fn mas_larga(a: &str, b: &str) -> &str {
          if a.len() >= b.len() { a } else { b }
      }

      fn main() {
          println!("{}", mas_larga("uno", "tres"));
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:e885896447d90cd6744554b25e944eed78a18cd876e1b1941e12339c336b50c7"]
  - id: match-exhaustivo
    tier: 2
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      enum Semaforo {
          Rojo,
          Ambar,
          Verde,
      }

      fn espera(s: Semaforo) -> u32 {
          match s {
              Semaforo::Rojo => 30,
              Semaforo::Verde => 0,
          }
      }

      fn main() {
          println!("{}", espera(Semaforo::Ambar));
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:1a62a38631e535978f8ed0b7ab1262c1179366167006967e0d3443d554e80389"]
  - id: errores
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::num::ParseIntError;

      fn suma(v: &[&str]) -> Result<i32, ParseIntError> {
          let mut total = 0;
          for s in v {
              total += s.trim().parse::<i32>()?;
          }
          Ok(total)
      }

      fn main() {
          println!("{:?}", suma(&["1", " 2", "39"]));
          match suma(&["4", "x5"]) {
              Ok(n) => println!("{n}"),
              Err(e) => println!("error: {e}"),
          }
          let total: i32 = ["7", "a", "8"].iter().filter_map(|s| s.parse::<i32>().ok()).sum();
          println!("{total}");
      }
      ```

      Respuesta: las tres líneas separadas por `;`.
    answers: ["sha256:8be5663ff143c843ff87e26cb2f77cfac1b820e4eedf73b6084046695ccc68d9"]
  - id: hashmap-entry
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::collections::HashMap;

      fn main() {
          let texto = "el gato y el perro y el raton";
          let mut cuenta: HashMap<&str, u32> = HashMap::new();
          for p in texto.split_whitespace() {
              *cuenta.entry(p).or_insert(0) += 1;
          }
          let mut v: Vec<(&str, u32)> = cuenta.into_iter().collect();
          v.sort_by(|a, b| b.1.cmp(&a.1).then(a.0.cmp(b.0)));
          let primeros: Vec<String> = v.iter().take(3).map(|(p, n)| format!("{p}={n}")).collect();
          println!("{}", primeros.join(" "));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:97857e8abd18599656f25c525ba5f49909d4f397272a6cb2c5bdab33487cd6a9"]
  - id: iteradores
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      fn main() {
          let a: i32 = (1..=10).filter(|x| x % 3 != 0).map(|x| x * x).sum();
          let b: Vec<i32> = vec![3, 1, 4, 1, 5, 9, 2, 6].into_iter().rev().skip(1).step_by(2).collect();
          let c = ["a", "bb", "ccc"].iter().zip(1..).map(|(s, i)| s.len() * i).max().unwrap();
          println!("{a} {b:?} {c}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:1fbce3764929f201fdc06ec48e0c8ac1962eb51831f787d1f588939e8ca1bb13"]
  - id: orden-de-drop
    tier: 3
    prompt: |
      ¿Qué imprime? Fíjate en qué valores se destruyen, cuándo y en qué orden (y en la diferencia entre `let _ = ...` y `let _c = ...`).

      ```rust
      struct Ruido(&'static str);

      impl Drop for Ruido {
          fn drop(&mut self) {
              print!("{} ", self.0);
          }
      }

      fn consume(_r: Ruido) {
          print!("dentro ");
      }

      fn main() {
          let a = Ruido("a");
          let b = Ruido("b");
          {
              let _c = Ruido("c");
              let _ = Ruido("d");
              print!("bloque ");
          }
          consume(b);
          let _e = Ruido("e");
          print!("fin ");
          let _ = &a;
      }
      ```

      Respuesta: la salida tal cual.
    answers: ["sha256:82bb4253987664177a4f1c7ffb5338bd521a1388214c5cdbd38477124fa23cbb"]
  - id: maquina-de-estados
    tier: 3
    prompt: |
      ¿Qué imprime esta máquina de estados?

      ```rust
      #[derive(Debug, Clone, Copy, PartialEq)]
      enum Estado {
          Parada,
          Andando { velocidad: u32 },
          Averiada,
      }

      enum Orden {
          Arrancar,
          Acelerar(u32),
          Frenar,
          Golpe,
      }

      fn paso(e: Estado, o: &Orden) -> Estado {
          use Estado::*;
          match (e, o) {
              (Averiada, _) => Averiada,
              (_, Orden::Golpe) => Averiada,
              (Parada, Orden::Arrancar) => Andando { velocidad: 1 },
              (Andando { velocidad }, Orden::Acelerar(d)) => Andando { velocidad: (velocidad + d).min(10) },
              (Andando { velocidad }, Orden::Frenar) if velocidad > 2 => Andando { velocidad: velocidad / 2 },
              (Andando { .. }, Orden::Frenar) => Parada,
              (e, _) => e,
          }
      }

      fn main() {
          use Orden::*;
          let ordenes = [Acelerar(5), Arrancar, Acelerar(4), Acelerar(9), Frenar, Frenar, Frenar, Frenar, Arrancar, Acelerar(2)];
          let mut e = Estado::Parada;
          let mut paradas = 0;
          for o in &ordenes {
              e = paso(e, o);
              if e == Estado::Parada {
                  paradas += 1;
              }
          }
          println!("{e:?} {paradas}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:37c08f556580263b12e1f81f46e753f955c0808b93e81ec37479da3699d883d5"]
---

Rust es un lenguaje de sistemas con el rendimiento de C y C++ y **sin** sus errores de memoria más caros: usos después de liberar, dobles liberaciones,
punteros colgantes, desbordamientos de buffer y carreras de datos. No lo consigue con un recolector de basura, sino con reglas que el compilador
comprueba antes de ejecutar nada: la **propiedad** (cada valor tiene un único dueño) y los **préstamos** (muchas referencias de lectura o una sola de
escritura). Por eso lo usan el núcleo de Linux, Android, Windows, los navegadores, la infraestructura de nube y cada vez más empresas para software
nuevo. Este es el primero de cinco nodos que llevan del cero al nivel profesional: aquí, el modelo de memoria de Rust y el lenguaje básico, con
la precisión suficiente para leer los mensajes del compilador y entender **por qué** dicen lo que dicen. Si vienes de [[sys-c-memoria]], cada regla
de este nodo es la versión comprobada por el compilador de una disciplina que en C tenías que mantener tú.

## Objetivos

Al terminar sabrás:

1. Crear, compilar, probar y documentar proyectos con cargo, y entender las ediciones y el versionado de paquetes.
2. Usar los tipos básicos con sus garantías (desbordamiento, UTF-8, tamaños) y las expresiones de control.
3. Razonar sobre propiedad, movimiento, copia y destrucción, y predecir cuándo se libera cada valor.
4. Aplicar las reglas de préstamo y de vidas, y corregir los errores E0382, E0499, E0502 y E0106.
5. Modelar datos con structs y enums, y recorrerlos con patrones exhaustivos.
6. Gestionar errores con `Result`, el operador `?` y tipos de error propios.
7. Usar `Vec`, `String`, `HashMap` e iteradores, organizar el código en módulos y escribir pruebas.

## Qué debes dominar antes

[[sys-c-memoria]] (pila y montón, punteros, memoria dinámica, comportamiento indefinido) y [[prog-poo-diseno]] (tipos, interfaces, composición). No hace falta
saber C++.

> [!question] Test de entrada
> 1. En C, ¿qué pasa si usas un puntero después de `free`?
> 2. ¿Qué diferencia hay entre pila y montón?
> 3. ¿Qué es un tipo suma (una unión etiquetada)?
>
> Respuestas: comportamiento indefinido (puede funcionar, fallar o corromper datos en silencio); la pila guarda variables locales de tamaño conocido y se libera
> sola al salir de la función, el montón guarda datos de tamaño o vida dinámicos y hay que liberarlos; un tipo cuyo valor es una de varias variantes, cada una
> con sus datos, y que recuerda cuál es.

## 1. Para qué sirve

- **Software de sistemas**: controladores (el núcleo de Linux admite código en Rust desde la versión 6.1, de 2022), sistemas operativos, firmware, bases de datos, motores de
  búsqueda.
- **Servicios de red**: proxies, colas, APIs de baja latencia y alto rendimiento donde un fallo de memoria es una vulnerabilidad.
- **Herramientas**: buena parte de las herramientas modernas de línea de órdenes y de desarrollo están escritas en Rust.
- **Embebidos y WebAssembly**: sin sistema operativo (`no_std`) o en el navegador.
- **Seguridad**: Microsoft y Google atribuyen alrededor del 70 % de sus vulnerabilidades graves a errores de memoria; los lenguajes con seguridad de memoria
  eliminan esa clase entera.

## 2. Herramientas: rustup, cargo y ediciones

`rustup` instala y actualiza el compilador (canales `stable`, `beta`, `nightly`; sale una versión estable cada seis semanas y solo la última recibe
correcciones). `cargo` es todo lo demás: `cargo new` (proyecto con `Cargo.toml` y `src/main.rs`), `cargo build` (depuración) y `cargo build --release` (optimizado),
`cargo run`, `cargo check` (solo comprobación, rápido), `cargo test`, `cargo doc --open`, `cargo fmt` (rustfmt) y `cargo clippy` (cientos de avisos de estilo y de
errores probables; en un equipo profesional se ejecuta en la CI con `-D warnings`).

Las dependencias se declaran en `Cargo.toml` con versiones semánticas (`serde = "1"` acepta cualquier 1.x compatible) y se descargan de crates.io; `Cargo.lock`
fija las versiones exactas. Una **edición** (2015, 2018, 2021, **2024**) es un conjunto de cambios de sintaxis que cada paquete elige en su `Cargo.toml`; paquetes de
ediciones distintas se enlazan sin problema, lo que permite evolucionar el lenguaje sin romper el ecosistema.

## 3. Tipos y expresiones

- **Variables** inmutables por defecto (`let x = 5;`), mutables con `let mut`. El **sombreado** (`let x = x * 2;`) crea una variable nueva con el mismo nombre (puede
  cambiar de tipo); no es mutación.
- **Enteros** `i8`…`i128`, `u8`…`u128`, `isize`/`usize` (tamaño de puntero, el de los índices). Un desbordamiento hace **pánico** en depuración y da la vuelta en
  `--release`; cuando importa, dilo explícitamente: `checked_add` (devuelve `Option`), `wrapping_add`, `saturating_add`, `overflowing_add`. Las conversiones son explícitas
  (`x as u32`, que trunca; mejor `u32::try_from(x)?`).
- **Flotantes** `f32`, `f64`; **`bool`**; **`char`**: un valor escalar Unicode de 4 bytes (no un byte).
- **Tuplas** `(i32, &str)`, **arrays** de tamaño fijo `[u8; 4]`, **slices** `&[T]` (puntero y longitud).
- Casi todo es una **expresión** con valor: `let y = if x > 0 { 1 } else { -1 };`, bloques cuyo valor es la última expresión sin `;`, y `loop` puede devolver un valor
  con `break valor`. Las etiquetas (`'externo:`) permiten `break` y `continue` de bucles exteriores. `for x in 0..n` recorre rangos (`..=` incluye el final) y
  cualquier iterador.

**Cadenas.** `String` es un buffer UTF-8 en el montón, propio y ampliable (en la pila ocupa 24 bytes en 64 bits: puntero, longitud y capacidad); `&str` es una
**vista prestada** de bytes UTF-8 (puntero y longitud, 16 bytes), como un literal `"hola"` (de tipo `&'static str`). `len()` cuenta **bytes**, no caracteres: `"año€".len()`
es 7. No se puede indexar `s[i]` (un índice de byte puede caer en medio de un carácter); se usan `chars()`, `char_indices()` o slices por rangos de bytes que caigan en
fronteras de carácter (si no, pánico).

## 4. Propiedad

Tres reglas:

1. Cada valor tiene un **dueño** (una variable o un campo).
2. Solo hay un dueño a la vez.
3. Cuando el dueño sale de su ámbito, el valor se **destruye** (se llama a `drop` y se libera su memoria).

Asignar o pasar a una función un valor que posee recursos **lo mueve**: `let t = s;` copia los 24 bytes de la cabecera de `s` y **invalida** `s`, de forma que nunca habrá
dos dueños del mismo buffer (y por tanto, nunca una doble liberación). Usar `s` después es el error **E0382** ("use of moved value"). Los tipos simples que viven
enteros en la pila (enteros, flotantes, `bool`, `char`, referencias compartidas, tuplas y arrays de ellos) implementan **`Copy`**: se copian en vez de moverse. Para
duplicar de verdad un `String` o un `Vec`, `clone()` (explícito porque cuesta: reserva y copia).

La destrucción es **determinista** (RAII, como en C++): las variables se destruyen al final de su ámbito en orden **inverso** al de declaración; un valor movido a
una función se destruye al final de esa función; `let _ = valor;` **no** enlaza nada y destruye el valor temporal en el acto, mientras que `let _x = valor;` lo
conserva hasta el final del ámbito. `drop(x)` lo destruye antes.

## 5. Préstamos y vidas

Para usar un valor sin quedárselo se **presta**: `&x` (referencia compartida, solo lectura) o `&mut x` (exclusiva, permite modificar). La regla del préstamo:

> En cada momento puede haber **muchas referencias compartidas o una sola mutable**, pero no las dos cosas.

Es la regla que impide las carreras de datos y la invalidación de iteradores: si guardas `&v[0]` y luego haces `v.push(4)` (que puede reubicar el buffer), el
compilador lo rechaza (**E0502**: préstamo mutable mientras hay uno compartido vivo); dos `&mut` simultáneos dan **E0499**. Un préstamo "vive" desde que se crea
hasta su **último uso**, no hasta el final del bloque (*non-lexical lifetimes*), así que muchos programas razonables compilan sin cambios.

Ninguna referencia puede sobrevivir a su dueño. El compilador lo comprueba con **vidas** (*lifetimes*): parámetros genéricos como `'a` que nombran "cuánto tiempo es
válida esta referencia". En la mayoría de funciones se infieren con las **reglas de elisión** (cada parámetro referencia recibe su propia vida; si hay una sola
de entrada, la salida usa esa; en métodos, la de `&self`). Cuando la salida podría venir de varias entradas, hay que decirlo (**E0106**):
`fn mas_larga<'a>(a: &'a str, b: &'a str) -> &'a str` promete que el resultado vive lo que viva la más corta de las dos. Las vidas **no cambian** cuánto vive nada:
solo describen relaciones para que el compilador las verifique.

## 6. Structs, enums y patrones

`struct Punto { x: f64, y: f64 }` agrupa datos con nombre; las tuplas-struct (`struct Metros(f64);`) crean tipos nuevos que no se confunden entre sí (el patrón
*newtype*). Los métodos van en bloques `impl` y reciben `self`, `&self` o `&mut self` según consuman, lean o modifiquen; las funciones asociadas sin `self` (como
`Punto::nuevo`) hacen de constructores. `#[derive(Debug, Clone, Copy, PartialEq, Eq, Hash, Default)]` genera implementaciones habituales.

Los **enums** de Rust son tipos suma: cada variante puede llevar datos (`enum Forma { Circulo { r: f64 }, Rect(f64, f64) }`). Dos de la biblioteca estándar están en todo
el código: **`Option<T>`** (`Some(v)` o `None`: no hay `null`) y **`Result<T, E>`** (`Ok(v)` o `Err(e)`). Se consumen con **`match`**, que debe ser **exhaustivo** (si falta
un caso, **E0004**): añadir una variante a un enum hace que el compilador te señale cada `match` que hay que revisar. Patrones: literales, rangos (`1..=9`), varias
alternativas (`1 | 2`), desestructuración de structs, tuplas y slices (`[primero, .., ultimo]`), enlaces con `@`, comodín `_`, **guardas** (`x if x % 2 == 0`); las ramas se
prueban en orden. Atajos: `if let Some(x) = opt { }`, `let Some(x) = opt else { return; };` y `matches!(v, Patron)`.

Los enums de Rust son la forma idiomática de modelar **estados** y **mensajes**: en lugar de un struct con campos opcionales que pueden ser incoherentes, cada estado
lleva exactamente sus datos y los estados imposibles no se pueden representar.

## 7. Errores

Rust separa dos clases de fallo. Los **irrecuperables** (un índice fuera de rango, una invariante rota) llaman a `panic!`, que desenrolla la pila destruyendo los valores
y termina el hilo. Los **esperables** (un archivo que no existe, una entrada mal formada) se devuelven como `Result<T, E>` y el llamador **tiene** que decidir qué hacer: no
hay excepciones invisibles. El operador **`?`** propaga el error: `let n = s.parse::<i32>()?;` devuelve `Err` al llamador si falla, convirtiéndolo con `From` al tipo de
error de la función. `unwrap()` y `expect("motivo")` convierten un error en pánico: aceptables en pruebas y prototipos o cuando el fallo es imposible por
construcción (y entonces `expect` documenta por qué), nunca para entradas externas.

Un tipo de error propio es normalmente un enum con una variante por causa, que implementa `std::fmt::Display` y `std::error::Error`, y `From` para los errores que envuelve;
en el nodo `prog-rust-profesional` se automatiza con `thiserror` y `anyhow`. `main` puede devolver `Result<(), Box<dyn Error>>` para usar `?` en él.

## 8. Colecciones e iteradores

- **`Vec<T>`**: array dinámico contiguo (puntero, longitud, capacidad); `push` amortizado O(1); `with_capacity(n)` evita reubicaciones. Indexar fuera de rango hace
  pánico; `get(i)` devuelve `Option`.
- **`String`** y `&str` (§3); `format!`, `push_str`, `split_whitespace`, `trim`, `parse`.
- **`HashMap<K, V>`** (y `BTreeMap` si quieres orden). La **API `entry`** cuenta y agrupa sin búsquedas dobles: `*m.entry(k).or_insert(0) += 1`. El orden de iteración de
  un `HashMap` es arbitrario (y cambia entre ejecuciones por la semilla aleatoria contra ataques de colisiones): ordena antes de mostrar.
- **Iteradores**: `iter()` presta los elementos, `iter_mut()` los presta mutables, `into_iter()` los consume. Los adaptadores (`map`, `filter`, `filter_map`, `enumerate`, `zip`,
  `rev`, `skip`, `step_by`, `take_while`, `flat_map`) son **perezosos** y no hacen nada hasta que un consumidor (`collect`, `sum`, `count`, `max`, `fold`, `for`) los recorre;
  el compilador los optimiza hasta bucles equivalentes a los escritos a mano ("abstracciones de coste cero").

## 9. Módulos, crates y pruebas

Un **crate** es una unidad de compilación (binario con `main.rs` o biblioteca con `lib.rs`); un **paquete** de cargo contiene uno o varios. Dentro, el código se organiza en
**módulos** (`mod red;` busca `red.rs` o `red/mod.rs`), todo es **privado** por defecto y se exporta con `pub`; `use` trae nombres al ámbito. Las pruebas unitarias viven
junto al código en `#[cfg(test)] mod tests { #[test] fn ...() { assert_eq!(...) } }` y pueden probar funciones privadas; las de integración, en `tests/`; y los ejemplos
de la documentación (`///` con bloques de código) se ejecutan como pruebas con `cargo test`.

> [!example] Ejemplo resuelto 1: seguir la propiedad de un `String`
> `let s = String::from("hola");` reserva 4 bytes en el montón; `s` (en la pila) guarda puntero, longitud 4 y capacidad 4. `let t = s;` copia esos 24 bytes a `t` y marca `s`
> como movida: el buffer tiene un solo dueño. `let u = t.clone();` reserva otro buffer y copia los bytes: dos dueños de **dos** buffers. `let r = &u;` presta sin mover;
> mientras `r` se use, `u` no se puede modificar ni mover. Al final del ámbito se destruyen `u` y `t` (en ese orden, inverso a la declaración): dos liberaciones, cada
> una de su buffer. Nada de eso necesita un recolector, y ninguna línea puede provocar una doble liberación porque el compilador rechaza el programa antes.

> [!example] Ejemplo resuelto 2: un analizador con errores propios
> Leer líneas `clave = número` y devolver la suma, distinguiendo "línea sin `=`" de "número inválido". Un `enum ErrorConfig { SinIgual(usize), Numero(usize,
> ParseIntError) }` con el número de línea; `Display` para mensajes legibles; y en la función, `let (k, v) = linea.split_once('=').ok_or(ErrorConfig::SinIgual(n))?;` y
> `v.trim().parse::<i64>().map_err(|e| ErrorConfig::Numero(n, e))?`. El llamador recibe un `Result` y decide; el compilador impide ignorarlo sin decirlo
> (`#[must_use]`). El programa del §10 lo prueba con entradas buenas y malas.

> [!example] Ejemplo resuelto 3: frecuencias de palabras sin copiar el texto (con menos ayuda)
> Escribe `fn top<'a>(texto: &'a str, k: usize) -> Vec<(&'a str, usize)>` que devuelva las $k$ palabras más frecuentes (empates por orden alfabético), con un
> `HashMap<&'a str, usize>` cuyas claves **son préstamos del propio texto** (ninguna copia de cadenas). ¿Por qué hace falta la vida `'a` en la firma? ¿Qué pasaría
> si el texto fuese un `String` local de la función? Comprueba en el programa siguiente que `top("b a c a b a", 2)` devuelve `[("a", 3), ("b", 2)]`.

## 10. Comprobar con un programa

El programa compila en la edición 2024 sin avisos de `cargo clippy -- -D warnings`, ejecuta las comprobaciones y pasa sus pruebas con `cargo test`: el orden de
destrucción, los ejemplos 2 y 3, el desbordamiento explícito y UTF-8.

```rust
use std::cell::RefCell;
use std::collections::HashMap;
use std::fmt;
use std::num::ParseIntError;

// --- Orden de destrucción: cada valor anota su nombre al destruirse.
thread_local! { static TRAZA: RefCell<Vec<&'static str>> = const { RefCell::new(Vec::new()) }; }
struct Ruido(&'static str);
impl Drop for Ruido {
    fn drop(&mut self) {
        TRAZA.with(|t| t.borrow_mut().push(self.0));
    }
}

fn orden_de_destruccion() -> Vec<&'static str> {
    {
        let _a = Ruido("a");
        let _b = Ruido("b");
        let _ = Ruido("temporal");
        let c = Ruido("c");
        drop(c);
    }
    TRAZA.with(|t| t.borrow().clone())
}

// --- Ejemplo resuelto 2: errores propios con número de línea.
#[derive(Debug)]
enum ErrorConfig {
    SinIgual(usize),
    Numero(usize, ParseIntError),
}

impl fmt::Display for ErrorConfig {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            ErrorConfig::SinIgual(n) => write!(f, "línea {n}: falta '='"),
            ErrorConfig::Numero(n, e) => write!(f, "línea {n}: número inválido ({e})"),
        }
    }
}

impl std::error::Error for ErrorConfig {}

fn suma_config(texto: &str) -> Result<i64, ErrorConfig> {
    let mut total = 0;
    for (i, linea) in texto.lines().enumerate() {
        let n = i + 1;
        let linea = linea.trim();
        if linea.is_empty() || linea.starts_with('#') {
            continue;
        }
        let (_clave, valor) = linea.split_once('=').ok_or(ErrorConfig::SinIgual(n))?;
        total += valor.trim().parse::<i64>().map_err(|e| ErrorConfig::Numero(n, e))?;
    }
    Ok(total)
}

// --- Ejemplo resuelto 3: las k palabras más frecuentes, sin copiar el texto.
fn top<'a>(texto: &'a str, k: usize) -> Vec<(&'a str, usize)> {
    let mut cuenta: HashMap<&'a str, usize> = HashMap::new();
    for p in texto.split_whitespace() {
        *cuenta.entry(p).or_insert(0) += 1;
    }
    let mut v: Vec<(&str, usize)> = cuenta.into_iter().collect();
    v.sort_by(|a, b| b.1.cmp(&a.1).then(a.0.cmp(b.0)));
    v.truncate(k);
    v
}

fn main() {
    let traza = orden_de_destruccion();
    assert_eq!(traza, ["temporal", "c", "b", "a"]);
    println!("destrucción: {traza:?}");

    let total = suma_config("# puertos\na = 1\nb = 41\n").expect("configuración válida");
    assert_eq!(total, 42);
    match suma_config("a = 1\nsin igual\n") {
        Err(e) => println!("{e}"),
        Ok(_) => unreachable!("debía fallar"),
    }

    println!("top: {:?}", top("b a c a b a", 2));
    let x: u8 = 250;
    println!("{:?} {} {}", x.checked_add(10), x.wrapping_add(10), x.saturating_add(10));
    let s = "año€";
    println!("bytes {} caracteres {}", s.len(), s.chars().count());
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn config_valida() {
        assert_eq!(suma_config("a=1\n\n# comentario\nb = -3\n").unwrap(), -2);
    }

    #[test]
    fn config_errores() {
        assert!(matches!(suma_config("a 1"), Err(ErrorConfig::SinIgual(1))));
        let e = suma_config("a=1\nb=x2").unwrap_err();
        assert!(matches!(e, ErrorConfig::Numero(2, _)));
        assert_eq!(e.to_string(), "línea 2: número inválido (invalid digit found in string)");
    }

    #[test]
    fn frecuencias() {
        assert_eq!(top("b a c a b a", 2), vec![("a", 3), ("b", 2)]);
        assert_eq!(top("", 3), vec![]);
    }

    #[test]
    fn utf8_y_desbordamiento() {
        assert_eq!("año€".len(), 7);
        assert_eq!(250u8.checked_add(10), None);
        assert_eq!(250u8.wrapping_add(10), 4);
    }
}
```

## 11. Errores típicos

- Pelearse con el comprobador de préstamos clonando todo: casi siempre la solución es reorganizar quién posee qué (o acortar un préstamo).
- Guardar referencias a elementos de un `Vec` y luego modificar el `Vec` (E0502).
- Devolver una referencia a una variable local (E0106/E0515): devuelve el valor propio (`String`), no `&str`.
- Indexar `String` por posiciones creyendo que son caracteres; `len()` son bytes.
- `unwrap()` sobre entradas externas: un pánico en producción.
- Usar `as` para convertir enteros sin pensar en la truncación; ignorar el desbordamiento en `--release`.
- Depender del orden de iteración de un `HashMap`.
- No ejecutar `cargo clippy` y `cargo fmt`: el estilo y muchos errores se detectan solos.

## 12. Resumen

- `rustup`, `cargo` (`check`, `build --release`, `test`, `clippy`, `fmt`, `doc`), `Cargo.toml`/`Cargo.lock`, semver, ediciones (2024).
- Inmutable por defecto, sombreado, enteros con desbordamiento explícito, `char` Unicode, expresiones con valor, `loop`/`break valor`, etiquetas.
- `String` (24 bytes: puntero, longitud, capacidad) frente a `&str` (16 bytes), UTF-8, `len()` en bytes.
- Propiedad: un dueño, movimiento, `Copy`, `clone`, `drop` determinista en orden inverso; `let _` frente a `let _x`.
- Préstamos: muchas `&` o una `&mut`; NLL; vidas y elisión; E0382, E0499, E0502, E0106.
- Structs, `impl`, *newtype*, `derive`; enums con datos, `Option`, `Result`; `match` exhaustivo (E0004), guardas, `if let`, `let else`.
- `panic!` frente a `Result`; `?` con `From`; errores propios con `Display` y `Error`.
- `Vec`, `String`, `HashMap` y `entry`; iteradores perezosos; módulos, `pub`, pruebas unitarias, de integración y de documentación.

## Repaso: lo que debe quedarte dentro de un mes

1. Cada valor tiene un dueño; asignar lo mueve y el dueño lo destruye al salir del ámbito.
2. Muchas referencias de lectura o una de escritura, nunca las dos.
3. Las vidas describen cuánto viven las referencias; no las alargan.
4. Un `match` debe cubrir todos los casos, y eso es una ventaja.
5. Los errores esperables son valores (`Result`) y se propagan con `?`.

## Siguiente

`prog-rust-traits-genericos` (traits, genéricos, iteradores propios y punteros inteligentes), después `prog-rust-concurrencia-async`, `prog-rust-unsafe-ffi-macros` y
`prog-rust-profesional`. La versión manual de estas garantías está en [[sys-c-memoria]] y lo que pasa cuando faltan, en [[sec-explotacion-binaria]].
