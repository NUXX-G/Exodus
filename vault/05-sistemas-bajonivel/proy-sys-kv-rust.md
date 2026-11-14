---
id: proy-sys-kv-rust
title: "Proyecto: un almacén clave-valor en Rust, persistente, concurrente y con protocolo de red"
area: bajo-nivel
trunk_level: 14
kind: proyecto
prerequisites: [prog-rust-profesional, sys-redes-sockets]
academic_sources:
  - "Kleppmann, M. Designing Data-Intensive Applications. O'Reilly, 2017 (cap. 3, almacenamiento estructurado como registro)."
  - "Sheehy, J.; Smith, D. Bitcask: A Log-Structured Hash Table for Fast Key/Value Data. Basho Technologies, 2010."
  - "Klabnik, S.; Nichols, C.; Krycho, C. The Rust Programming Language, 3ª ed. No Starch Press, 2026; documentación de std::net, std::sync y tokio."
attachments: [prueba.sh]
exercises:
  - id: hito-1-ordenes-en-memoria
    tier: 1
    prompt: |
      **Hito 1.** `kv DIR` lee órdenes de la entrada estándar (una por línea, palabras separadas por espacios) y responde una línea por orden: `SET k v` → `OK`; `GET k` → el valor o `(nil)`; `DEL k` → `1` si existía, `0` si no; `COUNT` → número de claves; `KEYS` → claves ordenadas separadas por un espacio, o `(empty)`. Errores: orden desconocida → `ERR unknown command`; número de argumentos incorrecto → `ERR wrong number of arguments`.

      Comprueba con `bash prueba.sh ./target/release/kv 1` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c459f0b2bb1069e4ae8d8a3591d4071cf09c4d7ce4be5dd33a3b6cf996ed2ae9"]
  - id: hito-2-incr
    tier: 1
    prompt: |
      **Hito 2.** `INCR k` suma 1 al valor entero de `k` (una clave inexistente vale 0) y responde el nuevo valor; si el valor no es un entero (con signo opcional), responde `ERR not an integer` sin cambiar nada.

      Comprueba con `bash prueba.sh ./target/release/kv 2` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:35862c9ceeee14484ff22ec510ea9f490f8a82ebc96878d5b6c7d17fc208d902"]
  - id: hito-3-persistencia
    tier: 1
    prompt: |
      **Hito 3.** Los datos sobreviven al reinicio: cada orden que modifica el estado se añade a `DIR/kv.log` antes de responder, y al arrancar se reconstruye el estado leyendo el registro.

      Comprueba con `bash prueba.sh ./target/release/kv 3` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f07c6446bd7a97134ff4e893f1dd4a955f6296ea9bc10951aaeb9ba2a9078cdd"]
  - id: hito-4-registro-y-compactacion
    tier: 2
    prompt: |
      **Hito 4.** El registro tiene un formato fijo: una línea por cambio, `SET k v` o `DEL k` (un `INCR` se registra como el `SET` del nuevo valor). `COMPACT` reescribe el registro con una línea `SET k v` por clave viva, en orden de clave, de forma atómica (archivo temporal y `rename`), y responde `OK`; las órdenes posteriores se siguen añadiendo al registro compactado.

      Comprueba con `bash prueba.sh ./target/release/kv 4` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d7894138f77a2dac91c7a521da51cf41b2efeac6cf9fc82132b17464392d844c"]
  - id: hito-5-servidor-tcp
    tier: 2
    prompt: |
      **Hito 5.** `kv DIR --serve PUERTO` escucha en `127.0.0.1:PUERTO` y atiende el mismo protocolo por TCP: una línea por orden, una línea por respuesta. Al cerrar un cliente la conexión, el servidor sigue atendiendo a los siguientes.

      Comprueba con `bash prueba.sh ./target/release/kv 5` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:057f12de9cef4006b9908044f8064afc1837553574ff1fa2999d520bb89d4a69"]
  - id: hito-6-clientes-concurrentes
    tier: 2
    prompt: |
      **Hito 6.** Varios clientes a la vez: la prueba conecta 8 clientes simultáneos que hacen 50 `INCR` cada uno sobre la misma clave. Ninguna actualización puede perderse ni repetirse (cada respuesta es un valor distinto).

      Comprueba con `bash prueba.sh ./target/release/kv 6` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:436ec768438a288aff0a697d78b8d0cd86b461a7247e91a2d9824f4465e3516d"]
  - id: hito-7-durabilidad
    tier: 3
    prompt: |
      **Hito 7.** Una orden cuya respuesta ya recibió el cliente no puede perderse aunque el servidor muera con `kill -9` justo después: escribe y vacía el registro antes de responder.

      Comprueba con `bash prueba.sh ./target/release/kv 7` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:90af393942c20585108f51d0f8af00cad96920ae2a7439a861e9286814f6296a"]
  - id: hito-8-rendimiento
    tier: 3
    prompt: |
      **Hito 8.** El servidor procesa 20 000 `SET` enviados seguidos por una sola conexión (sin esperar cada respuesta) en menos de 15 segundos, con todas las respuestas en orden.

      Comprueba con `bash prueba.sh ./target/release/kv 8` (en Linux; ver §2 del enunciado).

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:9764f0a5b25a9fe5726953f1b4eaf3223f2f6e6b0714daf8a65fe73a71c8ba11"]
---

Vas a construir en Rust un pequeño **almacén clave-valor** al estilo de Redis o Bitcask: un servidor que guarda pares clave-valor, los hace **persistentes**
en un registro de solo añadir, los **compacta**, atiende a **muchos clientes a la vez** por TCP y no pierde ninguna escritura confirmada aunque lo maten de golpe.
Es el proyecto que reúne toda la serie de Rust: propiedad y errores ([[prog-rust-fundamentos]]), traits para separar el motor del transporte
([[prog-rust-traits-genericos]]), concurrencia sin carreras ([[prog-rust-concurrencia-async]]) y la organización, las pruebas y la calidad de un proyecto
profesional ([[prog-rust-profesional]]). También es, a escala, cómo funcionan por dentro las bases de datos de verdad.

## 1. Qué vas a construir y cómo se evalúa

Un binario `kv` con dos modos:

- `kv DIR`: lee órdenes por la entrada estándar y responde por la salida estándar (útil para depurar y para los hitos 1 a 4).
- `kv DIR --serve PUERTO`: servidor TCP en `127.0.0.1:PUERTO` con el mismo protocolo.

Los datos viven en `DIR/kv.log`. El trabajo se divide en **8 hitos** (en los ejercicios). El adjunto **`prueba.sh`** ejecuta tu binario con los casos de cada hito y, si todos pasan, imprime el
código del hito. Con `-v` muestra lo que respondió tu programa en cada caso.

> [!warning] Sobre los códigos
> Solo tienen sentido si los obtiene **tu** implementación. El valor del proyecto está en escribirla y en las decisiones de diseño que tendrás que justificar (sección 6).

## 2. Entorno

Las pruebas necesitan Linux con bash (usan `/dev/tcp` para hablar con el servidor) y las herramientas de GNU. Con Docker:

```sh
docker run --rm -v "$PWD":/w -w /w rust:slim bash -c 'cargo build --release && bash prueba.sh ./target/release/kv 1'
```

## 3. El protocolo

Una orden por línea, palabras separadas por espacios (claves y valores no contienen espacios); una línea de respuesta por orden:

| Orden | Respuesta |
|---|---|
| `SET k v` | `OK` |
| `GET k` | el valor, o `(nil)` |
| `DEL k` | `1` si existía, `0` si no |
| `INCR k` | el nuevo valor (clave inexistente = 0), o `ERR not an integer` |
| `COUNT` | número de claves |
| `KEYS` | claves en orden, separadas por un espacio, o `(empty)` |
| `COMPACT` | `OK` |
| orden desconocida | `ERR unknown command` |
| argumentos de más o de menos | `ERR wrong number of arguments` |

**Formato del registro** (`DIR/kv.log`): una línea por cambio, `SET k v` o `DEL k`; un `INCR` se registra como `SET` del valor resultante. Tras `COMPACT`, el registro contiene una línea `SET k v` por clave
viva, en orden de clave.

## 4. Arquitectura recomendada

Un paquete con biblioteca y binario fino ([[prog-rust-profesional]]):

- `motor.rs`: el estado en memoria (un `BTreeMap<String, String>` da `KEYS` ordenado gratis) y la ejecución de órdenes, **sin** saber nada de archivos ni de red. Una función
  `fn ejecuta(&mut self, orden: Orden) -> Respuesta` pura es fácil de probar.
- `protocolo.rs`: analizar una línea a `enum Orden { Set { k, v }, Get { k }, ... }` (con un error tipado para lo desconocido y la aridad) y dar formato a las respuestas.
- `registro.rs`: abrir, reproducir y añadir al registro; compactar escribiendo un archivo temporal y renombrándolo (el `rename` es atómico en el mismo sistema de archivos: o ves el registro viejo
  completo o el nuevo completo).
- `servidor.rs`: aceptar conexiones y repartirlas. Dos diseños válidos: un hilo por conexión con el motor en un `Arc<Mutex<Motor>>`, o tokio con tareas.
- `main.rs`: los argumentos y la elección de modo.

## 5. Lo que tienes que resolver

- **Durabilidad**: "persistente" significa que el cambio está en el registro **antes** de responder. Un `BufWriter` sin `flush` puede perder datos si el proceso muere; para sobrevivir además a
  un corte de corriente hace falta `sync_data` (fsync), mucho más lento: decide y justifica tu política (como el `appendfsync` de Redis).
- **Concurrencia**: con un `Mutex`, cada orden es atómica y `INCR` no pierde actualizaciones; con un `RwLock` las lecturas van en paralelo; con varios fragmentos (*sharding*) por hash de clave, se
  reduce la contención. Mide antes de complicar. Nunca mantengas el cerrojo mientras esperas a la red.
- **Rendimiento**: un cliente puede enviar muchas órdenes sin esperar respuesta (*pipelining*). Lee con `BufReader`, escribe con `BufWriter` y vacía el socket al final de cada lote o cuando no
  quedan órdenes en el búfer de entrada.
- **Robustez**: un cliente que se desconecta a mitad, una línea vacía o una orden malformada no pueden tumbar el servidor. Nada de `unwrap` en la E/S del servidor.
- **Recuperación**: al arrancar, un registro con la última línea cortada (el proceso murió escribiendo) debe tolerarse ignorando esa línea.

## 6. Calidad exigida

- `cargo clippy --all-targets -- -D warnings` y `cargo fmt --check` limpios.
- Pruebas unitarias del analizador y del motor; una prueba **basada en un modelo** con proptest: secuencias aleatorias de órdenes aplicadas a tu motor y a un `BTreeMap` deben dar las mismas
  respuestas; y una prueba de integración que arranca el servidor en un puerto libre y le habla por TCP.
- Un `README` que explique el formato del registro, la política de `fsync`, el modelo de concurrencia elegido y sus límites.
- Errores con thiserror en la biblioteca y anyhow en el binario.

## 7. Ampliaciones

Versión asíncrona con tokio y comparación de rendimiento; compatibilidad con el protocolo RESP para usar `redis-cli`; caducidad de claves (`EXPIRE`); índice en memoria de desplazamientos en el
registro para no guardar los valores en memoria (como Bitcask); compactación en segundo plano mientras se sigue sirviendo; y replicación a un segundo nodo, que lleva directamente a
`sys-sistemas-distribuidos` (Raft).

## 8. Recursos

*Designing Data-Intensive Applications* (Kleppmann), capítulo 3, para registros, compactación e índices; el artículo de Bitcask para un diseño real y sencillo; y la documentación de
`std::net::TcpListener`, `std::sync` y, si eliges async, el tutorial de tokio.
