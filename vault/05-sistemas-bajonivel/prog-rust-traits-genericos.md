---
id: prog-rust-traits-genericos
title: "Rust II, abstracción sin coste: traits, genéricos y monomorfización, objetos de trait, cierres, iteradores, punteros inteligentes y diseño de tipos"
area: bajo-nivel
trunk_level: 10
prerequisites: [prog-rust-fundamentos]
academic_sources:
  - "Klabnik, S.; Nichols, C.; Krycho, C. The Rust Programming Language, 3ª ed. (Rust 2024). No Starch Press, 2026."
  - "Gjengset, J. Rust for Rustaceans: Idiomatic Programming for Experienced Developers. No Starch Press, 2021."
  - "The Rust Reference (traits, dyn compatibility, closures) y Rust API Guidelines. doc.rust-lang.org y rust-lang.github.io/api-guidelines, consultadas en noviembre de 2026."
exercises:
  - id: metodo-por-defecto
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      trait Saludo {
          fn nombre(&self) -> String;
          fn saluda(&self) -> String {
              format!("hola, {}", self.nombre())
          }
      }

      struct Ana;
      struct Robot(u32);

      impl Saludo for Ana {
          fn nombre(&self) -> String {
              "Ana".to_string()
          }
      }

      impl Saludo for Robot {
          fn nombre(&self) -> String {
              format!("R{}", self.0)
          }
          fn saluda(&self) -> String {
              format!("BIP {}", self.nombre())
          }
      }

      fn main() {
          println!("{} | {}", Ana.saluda(), Robot(2).saluda());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:95f5b3a0b5cdd03e4b39165a288ae8e99db1e8778996dee1268b02690304f2d8"]
  - id: cota-de-trait
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      fn mayor<T: PartialOrd + Copy>(v: &[T]) -> T {
          let mut m = v[0];
          for &x in v {
              if x > m {
                  m = x;
              }
          }
          m
      }

      fn main() {
          println!("{} {} {}", mayor(&[3, 9, 2]), mayor(&['q', 'z', 'a']), mayor(&[1.5, -2.0]));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:1b047e63c7b6b0800d662144f202cfe9a27f2395fe400e889b5b57fabe9befe6"]
  - id: falta-una-cota
    tier: 1
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      fn imprime<T>(x: T) {
          println!("{x}");
      }

      fn main() {
          imprime(3);
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:23bc46bc6d1b71218d3be49f2ac43640d9977dee7a5abbc90a464bdb76fcb539"]
  - id: display
    tier: 1
    prompt: |
      ¿Qué imprime? (`{:>10}` alinea a la derecha en 10 caracteres.)

      ```rust
      use std::fmt;

      struct Precio(f64);

      impl fmt::Display for Precio {
          fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
              write!(f, "{:.2} EUR", self.0)
          }
      }

      fn main() {
          let p = Precio(3.14159);
          println!("[{}] [{:>10}] [{}]", p, p.to_string(), p.to_string().len());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:9b0d7dc0515d4d8ac94ad60dc97215a9935d42d2029c70bf8e3964dce4228897"]
  - id: cierres
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      fn aplica_tres<F: FnMut() -> u32>(mut f: F) -> u32 {
          f();
          f();
          f()
      }

      fn main() {
          let mut cuenta = 10;
          let ultimo = aplica_tres(|| {
              cuenta += 5;
              cuenta
          });
          let base = String::from("x");
          let concatena = move |s: &str| format!("{base}{s}");
          println!("{ultimo} {cuenta} {}", concatena("y"));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:732858669e12fbc2dc26cf17942527e699c884b2eaa46287fab60fded7ca0fec"]
  - id: iterador-propio
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      struct Fibonacci {
          a: u64,
          b: u64,
      }

      impl Iterator for Fibonacci {
          type Item = u64;
          fn next(&mut self) -> Option<u64> {
              let r = self.a;
              self.a = self.b;
              self.b += r;
              Some(r)
          }
      }

      fn main() {
          let f = || Fibonacci { a: 0, b: 1 };
          let suma: u64 = f().take(10).sum();
          let primero_mayor = f().find(|&x| x > 1000).unwrap();
          let pares = f().take_while(|&x| x < 100).filter(|x| x % 2 == 0).count();
          println!("{suma} {primero_mayor} {pares}");
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:f55cef7f2081c87cfe3a5a5203bab1d35d538d22fa427927d2b8eb8c2dade29a"]
  - id: sobrecarga
    tier: 1
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::ops::{Add, Mul};

      #[derive(Debug, Clone, Copy, PartialEq)]
      struct V2 {
          x: i32,
          y: i32,
      }

      impl Add for V2 {
          type Output = V2;
          fn add(self, o: V2) -> V2 {
              V2 { x: self.x + o.x, y: self.y + o.y }
          }
      }

      impl Mul<i32> for V2 {
          type Output = V2;
          fn mul(self, k: i32) -> V2 {
              V2 { x: self.x * k, y: self.y * k }
          }
      }

      fn main() {
          let a = V2 { x: 1, y: 2 };
          let b = V2 { x: -3, y: 5 };
          let c = (a + b) * 3;
          println!("{:?} {}", c, c == V2 { x: -6, y: 21 });
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:e9dcf3a93dbc61812b15fe6261a5ad004bf453d7cf12231c8a7c320d02402bbd"]
  - id: objetos-de-trait
    tier: 2
    prompt: |
      ¿Qué imprime en x86-64?

      ```rust
      trait Forma {
          fn area(&self) -> f64;
          fn nombre(&self) -> &'static str;
      }

      struct Circulo(f64);
      struct Rect(f64, f64);

      impl Forma for Circulo {
          fn area(&self) -> f64 {
              std::f64::consts::PI * self.0 * self.0
          }
          fn nombre(&self) -> &'static str {
              "circulo"
          }
      }

      impl Forma for Rect {
          fn area(&self) -> f64 {
              self.0 * self.1
          }
          fn nombre(&self) -> &'static str {
              "rect"
          }
      }

      fn main() {
          let formas: Vec<Box<dyn Forma>> = vec![Box::new(Circulo(1.0)), Box::new(Rect(2.0, 3.5)), Box::new(Circulo(0.5))];
          let total: f64 = formas.iter().map(|f| f.area()).sum();
          let mayor = formas.iter().max_by(|a, b| a.area().total_cmp(&b.area())).unwrap();
          println!("{:.3} {} {}", total, mayor.nombre(), std::mem::size_of::<Box<dyn Forma>>());
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:7ced226308faa786841c92d13e44ce1f312c223bcd16a745243887a6104961d1"]
  - id: compatible-con-dyn
    tier: 2
    prompt: |
      Si no compila, responde con el código del error que da `rustc` (por ejemplo `E0000`); si compila, con lo que imprime.

      ```rust
      trait Serializa {
          fn escribe<W: std::io::Write>(&self, w: &mut W);
      }

      struct Nada;

      impl Serializa for Nada {
          fn escribe<W: std::io::Write>(&self, _w: &mut W) {}
      }

      fn main() {
          let v: Vec<Box<dyn Serializa>> = vec![Box::new(Nada)];
          println!("{}", v.len());
      }
      ```

      Respuesta: el código de error o la salida.
    answers: ["sha256:480453e72651f17819fd60c887650bdf4a6865c2e89461fb95b57a5b48d04d3e"]
  - id: rc
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::rc::Rc;

      fn main() {
          let a = Rc::new(String::from("compartido"));
          let b = Rc::clone(&a);
          let n1 = Rc::strong_count(&a);
          {
              let c = Rc::clone(&b);
              let _d = Rc::clone(&c);
              print!("{} ", Rc::strong_count(&a));
          }
          let n3 = Rc::strong_count(&a);
          drop(b);
          println!("{n1} {n3} {}", Rc::strong_count(&a));
      }
      ```

      Respuesta: la salida tal cual.
    answers: ["sha256:ef98552e86cf708b5dd4818acf9c9c6537c65fd2ee957bdd5ab7b2d0b165eb32"]
  - id: refcell
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::cell::RefCell;

      fn main() {
          let celda = RefCell::new(vec![1, 2]);
          {
              let lectura = celda.borrow();
              let otra = celda.borrow();
              let escritura = celda.try_borrow_mut();
              println!("{} {} {}", lectura.len(), otra.len(), escritura.is_err());
          }
          celda.borrow_mut().push(3);
          let ok = celda.try_borrow_mut().is_ok();
          println!("{:?} {}", celda.borrow(), ok);
      }
      ```

      Respuesta: las dos líneas separadas por `;`.
    answers: ["sha256:4fb86d27cb1207eb8d14791f92d06df70c53f242e15ce2edc9ddd05d23c8242f"]
  - id: pereza
    tier: 2
    prompt: |
      ¿Qué imprime? Los adaptadores de iteradores son perezosos.

      ```rust
      fn main() {
          let v = [1, 2, 3, 4];
          let _sin_consumir = v.iter().map(|x| {
              print!("m{x} ");
              x * 10
          });
          print!("| ");
          let r: Vec<i32> = v
              .iter()
              .filter(|&&x| {
                  print!("f{x} ");
                  x % 2 == 0
              })
              .map(|x| {
                  print!("m{x} ");
                  x * 10
              })
              .take(1)
              .collect();
          println!("| {r:?}");
      }
      ```

      Respuesta: la salida tal cual.
    answers: ["sha256:c98d7deaf10d0e7a4df787ce3af9ce25fc46ad05a9f8838545d29ee96448d0d9"]
  - id: derive-orden
    tier: 2
    prompt: |
      `#[derive(PartialOrd, Ord)]` compara los campos en el orden en que se declaran, y las variantes de un enum en el orden de declaración. ¿Qué imprime?

      ```rust
      #[derive(Debug, PartialEq, Eq, PartialOrd, Ord, Clone, Copy)]
      enum Prioridad {
          Alta,
          Media,
          Baja,
      }

      #[derive(Debug, PartialEq, Eq, PartialOrd, Ord)]
      struct Tarea {
          prioridad: Prioridad,
          minutos: u32,
          nombre: &'static str,
      }

      fn main() {
          let mut v = vec![
              Tarea { prioridad: Prioridad::Baja, minutos: 5, nombre: "e" },
              Tarea { prioridad: Prioridad::Alta, minutos: 30, nombre: "a" },
              Tarea { prioridad: Prioridad::Media, minutos: 10, nombre: "c" },
              Tarea { prioridad: Prioridad::Alta, minutos: 15, nombre: "b" },
              Tarea { prioridad: Prioridad::Media, minutos: 10, nombre: "d" },
          ];
          v.sort();
          let orden: String = v.iter().map(|t| t.nombre).collect();
          println!("{orden} {}", Prioridad::Media > Prioridad::Alta);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:dc8fb41454719304b0f954d472bce3f00b30e9b0ebb00213ab1c915d2f3492e7"]
  - id: cierres-en-caja
    tier: 2
    prompt: |
      ¿Qué imprime?

      ```rust
      fn compone(fs: Vec<Box<dyn Fn(i64) -> i64>>) -> impl Fn(i64) -> i64 {
          move |x| fs.iter().fold(x, |acc, f| f(acc))
      }

      fn main() {
          let k = 3;
          let tuberia = compone(vec![Box::new(|x| x + 1), Box::new(move |x| x * k), Box::new(|x| x - 4)]);
          println!("{} {}", tuberia(5), tuberia(-1));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:ab4b85d34e2828f6960e2e06e1856bfbf55a139865eba3f3ad4e7e1d4e383a05"]
  - id: genericos-y-especializacion
    tier: 3
    prompt: |
      ¿Qué imprime?

      ```rust
      use std::fmt::Display;

      struct Pila<T> {
          datos: Vec<T>,
      }

      impl<T> Pila<T> {
          fn nueva() -> Self {
              Pila { datos: Vec::new() }
          }
          fn mete(&mut self, x: T) -> &mut Self {
              self.datos.push(x);
              self
          }
          fn saca(&mut self) -> Option<T> {
              self.datos.pop()
          }
      }

      impl<T: Display> Pila<T> {
          fn muestra(&self) -> String {
              self.datos.iter().map(|x| x.to_string()).collect::<Vec<_>>().join(",")
          }
      }

      trait Capacidad {
          const MAX: usize;
          fn cabe(n: usize) -> bool {
              n <= Self::MAX
          }
      }

      impl Capacidad for Pila<u8> {
          const MAX: usize = 3;
      }

      fn main() {
          let mut p = Pila::nueva();
          p.mete(1u8).mete(2).mete(3).mete(4);
          let fuera = p.saca();
          println!("{} {:?} {} {}", p.muestra(), fuera, Pila::<u8>::cabe(p.datos.len()), <Pila<u8> as Capacidad>::MAX);
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:03ba87cf887acd645c5e071b60d00c8bc997fe9ed9bebbb708e8e26da28bb57c"]
  - id: struct-con-vida
    tier: 3
    prompt: |
      Este analizador léxico devuelve trozos prestados del texto original sin copiarlos. ¿Qué imprime?

      ```rust
      struct Tokens<'a> {
          resto: &'a str,
      }

      impl<'a> Iterator for Tokens<'a> {
          type Item = &'a str;
          fn next(&mut self) -> Option<&'a str> {
              let s = self.resto.trim_start();
              if s.is_empty() {
                  return None;
              }
              let fin = if s.starts_with(|c: char| "()+*".contains(c)) {
                  1
              } else {
                  s.find(|c: char| c.is_whitespace() || "()+*".contains(c)).unwrap_or(s.len())
              };
              let (tok, resto) = s.split_at(fin);
              self.resto = resto;
              Some(tok)
          }
      }

      fn main() {
          let texto = String::from("(12+ x1)*7  ");
          let toks: Vec<&str> = Tokens { resto: &texto }.collect();
          println!("{} {}", toks.len(), toks.join("|"));
      }
      ```

      Respuesta: la línea tal cual.
    answers: ["sha256:dd2ef60538977f950bd6e3faf35580593b7f0d178d8221427a7cbc919086675d"]
---

En [[prog-rust-fundamentos]] escribiste código para tipos concretos. El código profesional es **genérico**: una función de ordenación que sirve para cualquier
cosa comparable, un servidor que acepta cualquier tipo de conexión, una biblioteca que devuelve iteradores que el usuario encadena. Rust lo consigue con
**traits** (contratos de comportamiento) y **genéricos**, y lo hace sin coste en tiempo de ejecución: el compilador genera una copia especializada del código
para cada tipo (monomorfización), igual de rápida que si la hubieras escrito a mano. Cuando necesitas lo contrario (colecciones heterogéneas, plugins), usas
**objetos de trait** con despacho dinámico, y sabes exactamente lo que cuesta. Este nodo cubre también los cierres, los iteradores por dentro y los punteros
inteligentes (`Box`, `Rc`, `RefCell`, `Weak`), y termina con las técnicas de diseño de tipos con las que las buenas bibliotecas de Rust hacen imposibles los usos
incorrectos.

## Objetivos

Al terminar sabrás:

1. Definir e implementar traits, con métodos por defecto, tipos y constantes asociados, supertraits e implementaciones generales, respetando la regla del huérfano.
2. Escribir funciones, structs e `impl` genéricos con cotas y cláusulas `where`, y explicar la monomorfización y su coste.
3. Usar objetos de trait (`dyn Trait`), su representación (puntero gordo y vtable) y las reglas de compatibilidad con `dyn`.
4. Distinguir `Fn`, `FnMut` y `FnOnce`, las capturas y `move`, y devolver cierres.
5. Implementar `Iterator` e `IntoIterator`, y usar `collect` con `FromIterator` (incluido recoger en un `Result`).
6. Elegir entre `Box`, `Rc`/`Arc`, `Weak`, `Cell` y `RefCell`, y romper ciclos de referencias.
7. Implementar los traits estándar y sobrecargar operadores respetando sus contratos, y aplicar patrones de diseño: *newtype*, constructor, tipos de estado.

## Qué debes dominar antes

[[prog-rust-fundamentos]]: propiedad, préstamos, vidas, enums, `Result` y colecciones. De [[prog-poo-diseno]], la idea de interfaz y de polimorfismo.

> [!question] Test de entrada
> 1. ¿Qué diferencia hay entre `&T` y `&mut T`?
> 2. En un lenguaje orientado a objetos, ¿cómo se llama a un método distinto según el tipo real del objeto?
> 3. ¿Qué hace `iter().map(f).collect::<Vec<_>>()`?
>
> Respuestas: la primera es un préstamo compartido de solo lectura y la segunda uno exclusivo que permite modificar; con despacho dinámico a través de una tabla de
> métodos virtuales; aplica `f` a cada elemento prestado y reúne los resultados en un vector nuevo.

## 1. Para qué sirve

- **Bibliotecas reutilizables**: la biblioteca estándar, serde, tokio o axum se apoyan en traits genéricos que tu código implementa.
- **Rendimiento sin renunciar a la abstracción**: los iteradores y los genéricos compilan a bucles y llamadas directas.
- **Arquitectura**: inyección de dependencias con traits (un `trait Repositorio` con una implementación real y otra de pruebas), plugins con `dyn Trait`.
- **APIs seguras**: tipos que codifican el estado (una conexión no puede enviar antes de abrirse) y el compilador lo comprueba.

## 2. Traits

Un **trait** declara métodos que un tipo debe proporcionar; puede dar **implementaciones por defecto** que los tipos sobrescriben si quieren. Un trait también
puede tener **tipos asociados** (`type Item;` en `Iterator`: cada implementación fija uno) y **constantes asociadas**, exigir otros traits (**supertraits**:
`trait Ordenable: PartialOrd + Display`) y tener **implementaciones generales** (`impl<T: Display> MiTrait for T`), que dan el trait a todos los tipos que cumplen la
cota. La **regla del huérfano** (coherencia) solo permite `impl Trait for Tipo` si el trait o el tipo son de tu crate: así dos crates no pueden dar implementaciones
contradictorias. Para implementar un trait ajeno en un tipo ajeno, se envuelve el tipo en un *newtype* propio.

Los traits estándar que todo tipo público debería implementar cuando tengan sentido (directrices de API de Rust): `Debug`, `Clone`, `Copy` (si es barato y no posee
recursos), `PartialEq`/`Eq`, `PartialOrd`/`Ord`, `Hash`, `Default`, `Display` (para mostrar a personas), `From`/`TryFrom` (conversiones; `From` da `Into` gratis), `FromStr`
(`"..".parse()`), `AsRef`, `Error`. `#[derive]` genera muchos de ellos: `PartialOrd`/`Ord` derivados comparan **campo a campo en el orden de declaración**, y las
variantes de un enum **en el orden en que se declaran**. Hay contratos que el compilador no comprueba y tú debes respetar: si `a == b`, entonces `hash(a) == hash(b)`;
`Ord` debe ser coherente con `PartialEq`; `Copy` implica que copiar bit a bit es correcto.

## 3. Genéricos y monomorfización

`fn mayor<T: PartialOrd + Copy>(v: &[T]) -> T` funciona para cualquier `T` que cumpla las **cotas**; si usas en el cuerpo algo que las cotas no garantizan (imprimir sin
`Display`), el compilador lo rechaza (**E0277**: "the trait bound is not satisfied"), en la definición y no en cada uso como las plantillas de C++. Las cotas largas
van en una cláusula `where`. Los structs y enums también son genéricos (`Pila<T>`, `Option<T>`), y un `impl<T: Display> Pila<T>` añade métodos solo cuando `T` cumple la
cota. Los **genéricos constantes** parametrizan por valores: `fn suma<const N: usize>(a: [f64; N])`.

El compilador genera una copia de cada función genérica para cada combinación de tipos con que se usa: **monomorfización**. Las llamadas son directas y se pueden
alinear, así que no hay coste en tiempo de ejecución; el precio es tiempo de compilación y tamaño del binario. `impl Trait` en posición de argumento es azúcar para un
genérico anónimo; en posición de retorno (`fn pares() -> impl Iterator<Item = u32>`) oculta un tipo concreto que solo conoce el compilador (imprescindible para devolver
cierres e iteradores encadenados, cuyos tipos no se pueden escribir).

## 4. Objetos de trait y despacho dinámico

`Box<dyn Forma>`, `&dyn Forma` o `Arc<dyn Forma>` guardan **cualquier** tipo que implemente `Forma`, decidido en tiempo de ejecución. El puntero es **gordo**: dirección de
los datos más dirección de una **vtable** con los métodos del tipo concreto (16 bytes en 64 bits), y cada llamada es indirecta (sin alineado). Es lo adecuado para
colecciones heterogéneas, plugins o para reducir el tamaño del código. No todos los traits sirven: para ser **compatible con `dyn`** (antes llamado *object-safe*), un
trait no puede tener métodos genéricos (no habría una entrada de vtable para cada tipo posible) ni devolver `Self` por valor (salvo marcándolos `where Self: Sized`, que
los excluye de la vtable); si no lo es, `dyn Trait` da **E0038**.

Regla práctica: genéricos por defecto (rendimiento y tipos precisos); `dyn` cuando la colección es heterogénea, el conjunto de tipos se decide en ejecución o el
tamaño del binario importa.

## 5. Cierres

Un cierre `|x| x + k` captura variables de su entorno de la forma menos exigente posible: por referencia compartida, por referencia mutable o por valor. Según lo que
haga con ellas implementa **`Fn`** (solo lee; se puede llamar muchas veces y en paralelo), **`FnMut`** (modifica lo capturado) o **`FnOnce`** (consume algo capturado; solo se
puede llamar una vez). Cada cierre tiene un tipo propio anónimo; las funciones que los reciben son genéricas (`F: FnMut() -> u32`) o usan `&dyn Fn`/`Box<dyn Fn>`. `move`
fuerza la captura por valor, imprescindible para devolver un cierre o enviarlo a otro hilo. Los punteros a función (`fn(i32) -> i32`) son el caso sin capturas.

## 6. Iteradores por dentro

`Iterator` tiene un tipo asociado `Item` y un único método obligatorio, `next(&mut self) -> Option<Self::Item>`; todo lo demás (`map`, `filter`, `sum`… más de setenta
métodos) viene por defecto. Un `for x in coleccion` es azúcar para `IntoIterator::into_iter(coleccion)` y llamadas a `next` hasta `None`: por eso `for x in &v`, `for x in &mut v` y
`for x in v` prestan, prestan mutablemente o consumen. Los adaptadores son **perezosos** y se ejecutan elemento a elemento **intercalados** (no por etapas):
`filter(..).map(..).take(1)` se detiene en cuanto encuentra el primero. `collect` construye cualquier tipo que implemente `FromIterator`: un `Vec`, un `HashMap`, un `String`, y
también un **`Result<Vec<T>, E>`** a partir de un iterador de `Result` (se detiene en el primer error), lo que da una validación en una línea. Otros traits:
`DoubleEndedIterator` (`rev`), `ExactSizeIterator` (`len`), `Extend`.

## 7. Punteros inteligentes y mutabilidad interior

- **`Box<T>`**: un valor en el montón con un único dueño. Para tipos recursivos (`enum Lista { Nodo(i32, Box<Lista>), Vacia }`), objetos de trait y para mover valores grandes
  sin copiarlos.
- **`Rc<T>`** (y **`Arc<T>`**, atómico, para varios hilos): propiedad **compartida** con recuento de referencias; `Rc::clone` solo incrementa el contador y el valor se
  destruye cuando llega a 0. Los ciclos (`a` apunta a `b` y `b` a `a`) **nunca** llegan a 0: fuga de memoria. Se rompen con **`Weak<T>`**, una referencia que no cuenta y que se
  "actualiza" con `upgrade()` (devuelve `None` si el valor ya no existe), típico para el puntero al padre en un árbol.
- **Mutabilidad interior**: `Rc` solo da acceso compartido. `Cell<T>` (para `Copy`) y **`RefCell<T>`** permiten modificar a través de `&`, comprobando la regla del préstamo **en
  tiempo de ejecución**: `borrow()` y `borrow_mut()` hacen pánico si violarías la regla (`try_borrow_mut` devuelve un error en vez de pánico). `Rc<RefCell<T>>` es el modismo para
  datos compartidos y mutables en un solo hilo; en varios hilos, `Arc<Mutex<T>>` (`prog-rust-concurrencia-async`).
- **`Deref`**: hace que `Box<String>` se use como `&String` y como `&str` (coerción de desreferencia). **`Cow<'a, str>`** (prestado o propio) evita copiar cuando casi nunca hace
  falta modificar.

## 8. Operadores y diseño de tipos

Los operadores son traits de `std::ops`: `Add` (con tipo asociado `Output`), `Mul<Rhs>`, `Neg`, `Index`, `AddAssign`… Se sobrecargan cuando la semántica es la matemática esperada
(vectores, matrices, dinero), nunca por ahorrar caracteres.

Patrones de diseño idiomáticos:

- ***Newtype***: `struct Metros(f64)` y `struct Segundos(f64)` no se pueden sumar por error; el envoltorio no cuesta nada en ejecución.
- **Constructor** (*builder*): `Peticion::nueva(url).cabecera(..).tiempo_max(..).enviar()`, para objetos con muchos parámetros opcionales.
- **Tipos de estado** (*typestate*): el estado vive en un parámetro genérico (`Conexion<Abierta>`, `Conexion<Cerrada>`) y cada transición consume el valor y devuelve otro tipo, así
  que llamar a `enviar` sobre una conexión cerrada **no compila**.
- **Traits de extensión** y **traits sellados** (que otros crates no pueden implementar, para poder ampliarlos sin romper a nadie).

> [!example] Ejemplo resuelto 1: estático frente a dinámico
> Sumar áreas con un genérico, `fn total<F: Forma>(v: &[F]) -> f64`, exige que todas sean del **mismo** tipo y genera una versión por tipo, con las llamadas a `area` alineadas.
> Con `fn total(v: &[Box<dyn Forma>]) -> f64` caben círculos y rectángulos juntos; cada elemento son 16 bytes (puntero y vtable) más su caja en el montón, y cada `area()` es una
> llamada indirecta. Si el conjunto de formas es cerrado y conocido, una tercera opción es un `enum Forma { Circulo(f64), Rect(f64, f64) }` con un `match`: sin montón, sin
> vtable y exhaustivo. Elegir entre las tres es una decisión de diseño, no de estilo.

> [!example] Ejemplo resuelto 2: un árbol con puntero al padre
> Cada nodo tiene `hijos: RefCell<Vec<Rc<Nodo>>>` y `padre: RefCell<Weak<Nodo>>`. Al añadir un hijo, el padre guarda un `Rc` (cuenta fuerte) y el hijo un `Weak` al padre (cuenta débil).
> Si el padre también fuese `Rc`, padre e hijo se mantendrían vivos mutuamente para siempre. Con `Weak`, al soltar el último `Rc` externo del padre su cuenta fuerte llega a 0, se
> destruye, y `hijo.padre.borrow().upgrade()` pasa a devolver `None`. El programa del §9 lo comprueba con `Rc::strong_count` y `Rc::weak_count`.

> [!example] Ejemplo resuelto 3: una conexión que no puede usarse mal (con menos ayuda)
> Diseña `Conexion<S>` con los estados `Cerrada` y `Abierta` (tipos vacíos) y `PhantomData<S>`, de modo que `Conexion::<Cerrada>::nueva().abrir()` devuelva una `Conexion<Abierta>`, que solo
> `Conexion<Abierta>` tenga `enviar` y que `cerrar` consuma la conexión. Comprueba que `Conexion::<Cerrada>::nueva().enviar("x")` no compila, y que el estado no ocupa memoria
> (`size_of` igual con cualquier `S`). El programa siguiente contiene una solución: escríbela antes de leerla.

## 9. Comprobar con un programa

Compila sin avisos de `cargo clippy -- -D warnings`, ejecuta las comprobaciones y pasa `cargo test`: el árbol con `Weak` del ejemplo 2, los tipos de estado del ejemplo 3, la
monomorfización frente a `dyn`, `collect` en un `Result` y un iterador propio.

```rust
use std::cell::RefCell;
use std::fmt::Display;
use std::marker::PhantomData;
use std::rc::{Rc, Weak};

// --- Ejemplo resuelto 2: árbol con referencias débiles al padre.
#[derive(Debug)]
struct Nodo {
    valor: i32,
    padre: RefCell<Weak<Nodo>>,
    hijos: RefCell<Vec<Rc<Nodo>>>,
}

fn nodo(valor: i32) -> Rc<Nodo> {
    Rc::new(Nodo { valor, padre: RefCell::new(Weak::new()), hijos: RefCell::new(Vec::new()) })
}

fn cuelga(padre: &Rc<Nodo>, hijo: &Rc<Nodo>) {
    *hijo.padre.borrow_mut() = Rc::downgrade(padre);
    padre.hijos.borrow_mut().push(Rc::clone(hijo));
}

// --- Ejemplo resuelto 3: tipos de estado sin coste en memoria.
struct Cerrada;
struct Abierta;
struct Conexion<S> {
    enviados: usize,
    _estado: PhantomData<S>,
}

impl Conexion<Cerrada> {
    fn nueva() -> Self {
        Conexion { enviados: 0, _estado: PhantomData }
    }
    fn abrir(self) -> Conexion<Abierta> {
        Conexion { enviados: self.enviados, _estado: PhantomData }
    }
}

impl Conexion<Abierta> {
    fn enviar(mut self, _datos: &str) -> Self {
        self.enviados += 1;
        self
    }
    fn cerrar(self) -> usize {
        self.enviados
    }
}

// --- Genérico frente a objeto de trait.
trait Forma {
    fn area(&self) -> f64;
}
struct Cuadrado(f64);
struct Circulo(f64);
impl Forma for Cuadrado {
    fn area(&self) -> f64 {
        self.0 * self.0
    }
}
impl Forma for Circulo {
    fn area(&self) -> f64 {
        std::f64::consts::PI * self.0 * self.0
    }
}
fn total_generico<F: Forma>(v: &[F]) -> f64 {
    v.iter().map(Forma::area).sum()
}
fn total_dinamico(v: &[Box<dyn Forma>]) -> f64 {
    v.iter().map(|f| f.area()).sum()
}

// --- Un iterador propio y una implementación general.
struct Cuenta {
    n: u32,
    hasta: u32,
}
impl Iterator for Cuenta {
    type Item = u32;
    fn next(&mut self) -> Option<u32> {
        (self.n < self.hasta).then(|| {
            self.n += 1;
            self.n
        })
    }
}
trait Etiqueta {
    fn etiqueta(&self) -> String;
}
impl<T: Display> Etiqueta for T {
    fn etiqueta(&self) -> String {
        format!("<{self}>")
    }
}

fn parsea_todos(v: &[&str]) -> Result<Vec<i32>, std::num::ParseIntError> {
    v.iter().map(|s| s.parse::<i32>()).collect()
}

fn main() {
    let hoja = nodo(3);
    {
        let raiz = nodo(1);
        cuelga(&raiz, &hoja);
        println!(
            "padre de la hoja: {:?}; fuertes raíz {} débiles raíz {} fuertes hoja {}",
            hoja.padre.borrow().upgrade().map(|p| p.valor),
            Rc::strong_count(&raiz),
            Rc::weak_count(&raiz),
            Rc::strong_count(&hoja)
        );
    }
    assert!(hoja.padre.borrow().upgrade().is_none());
    assert_eq!(Rc::strong_count(&hoja), 1);
    println!("sin la raíz, el padre de la hoja es {:?}", hoja.padre.borrow().upgrade().map(|p| p.valor));

    let enviados = Conexion::<Cerrada>::nueva().abrir().enviar("a").enviar("b").cerrar();
    assert_eq!(enviados, 2);
    assert_eq!(std::mem::size_of::<Conexion<Cerrada>>(), std::mem::size_of::<Conexion<Abierta>>());

    let g = total_generico(&[Cuadrado(2.0), Cuadrado(3.0)]);
    let d = total_dinamico(&[Box::new(Cuadrado(2.0)), Box::new(Circulo(1.0))]);
    println!("genérico {g} dinámico {d:.4} tamaño de Box<dyn Forma>: {}", std::mem::size_of::<Box<dyn Forma>>());

    let suma: u32 = Cuenta { n: 0, hasta: 5 }.zip(Cuenta { n: 0, hasta: 5 }.skip(1)).map(|(a, b)| a * b).sum();
    println!("suma de productos {suma}, {} {}", 42.etiqueta(), "x".etiqueta());
    println!("{:?} {:?}", parsea_todos(&["1", "2"]), parsea_todos(&["1", "z"]).is_err());
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn arbol_sin_fugas() {
        let raiz = nodo(1);
        let hijo = nodo(2);
        cuelga(&raiz, &hijo);
        assert_eq!(Rc::strong_count(&hijo), 2);
        assert_eq!(Rc::weak_count(&raiz), 1);
        drop(raiz);
        assert!(hijo.padre.borrow().upgrade().is_none());
    }

    #[test]
    fn iterador_y_collect() {
        assert_eq!(Cuenta { n: 0, hasta: 3 }.collect::<Vec<_>>(), vec![1, 2, 3]);
        assert_eq!(parsea_todos(&["4", "-5"]).unwrap(), vec![4, -5]);
        assert!(parsea_todos(&["4", "cinco"]).is_err());
    }

    #[test]
    fn despacho() {
        assert_eq!(total_generico(&[Cuadrado(1.0), Cuadrado(2.0)]), 5.0);
        assert_eq!(std::mem::size_of::<&dyn Forma>(), 2 * std::mem::size_of::<usize>());
    }
}
```

## 10. Errores típicos

- Poner `Box<dyn Trait>` por costumbre donde un genérico o un enum serían más simples y rápidos.
- Diseñar un trait con métodos genéricos y descubrir después que no se puede usar como `dyn` (E0038).
- Crear ciclos con `Rc` (fugas de memoria silenciosas); el puntero hacia arriba debe ser `Weak`.
- Mantener un `borrow()` de un `RefCell` vivo mientras se llama a algo que hace `borrow_mut()`: pánico en ejecución.
- Implementar `PartialEq` a mano y olvidar que `Hash` debe ser coherente.
- Clonar dentro de cierres para evitar errores de préstamo cuando bastaba `move` o reorganizar.
- `collect` sin indicar el tipo destino; no aprovechar `collect::<Result<_, _>>()` para validar.
- Exigir `T: Clone` (o más cotas de las necesarias) en una API: cada cota de más es un usuario de menos.

## 11. Resumen

- Traits: métodos por defecto, tipos y constantes asociados, supertraits, implementaciones generales, regla del huérfano, traits estándar y sus contratos; `derive` compara en orden de declaración.
- Genéricos con cotas y `where` (E0277), genéricos constantes, `impl Trait`; monomorfización: sin coste en ejecución, coste en compilación y tamaño.
- `dyn Trait`: puntero gordo con vtable (16 bytes), llamadas indirectas, compatibilidad con `dyn` (E0038).
- Cierres `Fn`/`FnMut`/`FnOnce`, capturas, `move`, devolver con `impl Fn` o `Box<dyn Fn>`.
- `Iterator` (`next`, `Item`), `IntoIterator` y `for`, pereza intercalada, `collect` con `FromIterator` (también en `Result`).
- `Box`, `Rc`/`Arc`, `Weak`, `Cell`/`RefCell` (préstamo comprobado en ejecución), `Deref`, `Cow`.
- `std::ops`; *newtype*, constructor, tipos de estado, traits sellados.

## Repaso: lo que debe quedarte dentro de un mes

1. Genérico = una copia por tipo y llamadas directas; `dyn` = una copia y llamadas por vtable.
2. Un trait con métodos genéricos no sirve como `dyn`.
3. Los iteradores no hacen nada hasta que algo los consume, y van elemento a elemento.
4. `Rc` cuenta, `Weak` no: los punteros hacia arriba, débiles.
5. Codifica los estados en los tipos y el compilador impedirá los usos incorrectos.

## Siguiente

`prog-rust-concurrencia-async` (`Send`, `Sync`, hilos, `Arc<Mutex<T>>`, atómicos, `async`/`await` y tokio), después `prog-rust-unsafe-ffi-macros` y `prog-rust-profesional`.
