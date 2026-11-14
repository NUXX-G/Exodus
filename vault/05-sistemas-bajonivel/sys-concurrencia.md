---
id: sys-concurrencia
title: "Concurrencia en profundidad: modelos de memoria (SC, TSO, ARM, C11/C++/Rust), atómicos, cerrojos por dentro, coordinación, interbloqueo, linealizabilidad, estructuras sin cerrojos y recuperación de memoria, rendimiento y verificación"
area: bajo-nivel
trunk_level: 11
prerequisites: [sys-sistemas-operativos, sys-c-profesional]
academic_sources:
  - "Herlihy, M.; Shavit, N.; Luchangco, V.; Spear, M. The Art of Multiprocessor Programming, 2ª ed. Morgan Kaufmann, 2020."
  - "Williams, A. C++ Concurrency in Action, 2ª ed. Manning, 2019; Bos, M. Rust Atomics and Locks. O'Reilly, 2023."
  - "McKenney, P. E. Is Parallel Programming Hard, And, If So, What Can You Do About It? (perfbook), edición de 2023."
  - "Lamport, L. How to Make a Multiprocessor Computer That Correctly Executes Multiprocess Programs. IEEE Trans. Computers C-28(9), 1979; Herlihy, M.; Wing, J. Linearizability: A Correctness Condition for Concurrent Objects. ACM TOPLAS 12(3), 1990."
  - "Boehm, H.-J.; Adve, S. V. Foundations of the C++ Concurrency Memory Model. PLDI 2008; Michael, M. M. Hazard Pointers: Safe Memory Reclamation for Lock-Free Objects. IEEE TPDS 15(6), 2004."
exercises:
  - id: amdahl
    tier: 1
    prompt: |
      Un programa pasa el 90 % de su tiempo en una parte perfectamente paralelizable. Según la ley de Amdahl, ¿qué aceleración obtiene con 8 núcleos y cuál es el máximo con infinitos?

      Respuesta: `con8;maximo`, la primera con 2 decimales.
    answers: ["sha256:024bcccc8855a6b07d2c25f66b1b6d822a15702595529679d628e88a6651bf3d"]
  - id: actualizacion-perdida
    tier: 1
    prompt: |
      Dos hilos ejecutan una vez `x = x + 1` (leer `x`, sumar, escribir) sobre `x = 0` compartida, sin sincronización. ¿Qué valores finales de `x` son posibles?

      Respuesta: de menor a mayor, separados por espacios.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: grafo-de-espera
    tier: 1
    prompt: |
      P1 tiene A y espera B; P2 tiene B y espera C; P3 tiene C y espera A; P4 tiene D y espera A. ¿Qué procesos forman el ciclo de interbloqueo?

      Respuesta: en orden, separados por espacios.
    answers: ["sha256:f89e12271cc797c213ad2d775b804f438f5ef0431419a4cdf512a4ce1c3f7d9f"]
  - id: intercalaciones
    tier: 1
    prompt: |
      ¿Cuántas intercalaciones distintas hay de dos hilos que ejecutan 3 pasos atómicos cada uno?

      Respuesta: un número.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: falso-compartir
    tier: 1
    prompt: |
      En x86-64 Linux, ¿cuánto ocupan `struct { long a; long b; }` y `struct { alignas(64) long a; alignas(64) long b; }`?

      Respuesta: `primero;segundo` en bytes.
    answers: ["sha256:d567f3e65d24b4f8e612c6cd685b426cf0823597fc6ffd051f75b907a3a3d696"]
  - id: gustafson
    tier: 1
    prompt: |
      Según la ley de Gustafson, ¿qué aceleración escalada se obtiene con 8 procesadores si la fracción serie del trabajo escalado es 0,1?

      Respuesta: un número con 1 decimal.
    answers: ["sha256:3dcfb00c29b15a402da6c2ca2308157ba64ba500d09e8654328458c98c4b65e1"]
  - id: incrementos-perdidos
    tier: 2
    prompt: |
      Dos hilos ejecutan dos veces cada uno `x = x + 1` (leer, sumar, escribir) sobre `x = 0`. ¿Qué valores finales son posibles?

      Respuesta: de menor a mayor, separados por espacios.
    answers: ["sha256:114bd151f8fb0c58642d2170da4ae7d7c57977260ac2cc8905306cab6b2acabc"]
  - id: banquero
    tier: 2
    prompt: |
      Algoritmo del banquero con 3 recursos. Disponibles `(3, 3, 2)`. Asignación: P0 `(0,1,0)`, P1 `(2,0,0)`, P2 `(3,0,2)`, P3 `(2,1,1)`, P4 `(0,0,2)`. Máximo: P0 `(7,5,3)`, P1 `(3,2,2)`, P2 `(9,0,2)`, P3 `(2,2,2)`, P4 `(4,3,3)`. Eligiendo en cada paso el proceso de menor índice que pueda terminar, ¿cuál es la secuencia segura?

      Respuesta: los procesos separados por espacios (por ejemplo `P0 P1 …`).
    answers: ["sha256:40e648de5a7ad1a66275d77d35f267091cff47874ca6d47768d011cb1a971967"]
  - id: store-buffering
    tier: 2
    prompt: |
      Con `x = y = 0`, el hilo 1 hace `x = 1; r1 = y;` y el hilo 2 `y = 1; r2 = x;`. ¿Cuántos pares `(r1, r2)` distintos son posibles con consistencia secuencial, y cuántos en x86-64 (TSO) sin barreras?

      Respuesta: `sc;tso`.
    answers: ["sha256:2b2ae0ddb1ad07ad30f68dbf8869395377eb9bc264d7da773d28f5934f0f5e59"]
  - id: filosofos
    tier: 2
    prompt: |
      Tres filósofos, tres tenedores; cada uno coge dos tenedores, come y los suelta. ¿Cuántos estados de interbloqueo son alcanzables si todos cogen primero el de su izquierda, y cuántos si todos cogen primero el de menor número?

      Respuesta: `izquierda;ordenado`.
    answers: ["sha256:8f42786de6c4830af682e9e652094033da177111ab13c8ec6bb20af2c9019249"]
  - id: aba
    tier: 2
    prompt: |
      Pila de Treiber `A → B → C`. El hilo 1 lee `cima = A` y `siguiente = B` y se detiene antes de su `CAS(cima, A, B)`. El hilo 2 saca A, saca B (y libera B) y vuelve a meter A. El hilo 1 continúa. ¿Qué nodo queda en la cima?

      Respuesta: la letra.
    answers: ["sha256:3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"]
  - id: threadsanitizer
    tier: 2
    prompt: |
      Dos hilos incrementan 1000 veces cada uno un `long` global: (a) con `x++`; (b) con `atomic_fetch_add_explicit(&x, 1, memory_order_relaxed)` sobre un `atomic_long`. Compilando con `-fsanitize=thread`, ¿avisa TSan de una carrera en cada caso?

      Respuesta: `si` o `no` para (a) y (b), separados por un espacio.
    answers: ["sha256:b56435fbd6b2d8c2f1fec8fbc2b9a12c4e4e322e04f3faefa4418177e4f69759"]
  - id: ley-de-little
    tier: 2
    prompt: |
      A un servicio llegan 200 peticiones por segundo y cada una pasa de media 50 ms dentro. ¿Cuántas peticiones hay dentro de media?

      Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: linealizabilidad
    tier: 3
    prompt: |
      Historias de una cola FIFO, con intervalos `[inicio, fin]`: (1) `enq(1) [0,4]`, `enq(2) [1,3]`, `deq→2 [5,6]`, `deq→1 [7,8]`. (2) `enq(1) [0,1]`, `enq(2) [2,3]`, `deq→2 [4,5]`. (3) `enq(1) [0,6]`, `deq→1 [1,3]`, `deq→vacía [4,5]`. (4) `enq(1) [0,2]`, `deq→vacía [3,4]`. ¿Cuáles son linealizables?

      Respuesta: los números en orden, separados por espacios.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: peterson
    tier: 3
    prompt: |
      Implementa en C11 el cerrojo de Peterson para dos hilos con `atomic_int` (orden secuencialmente consistente por defecto) y úsalo para proteger `contador++` sobre un `long` no atómico; cada hilo entra 100 000 veces. ¿Qué valor final tiene `contador`?

      Respuesta: un número.
    answers: ["sha256:b552e632666bbf6125e3109e28a4fecc08340d017e44109dadbf497a280b8f82"]
  - id: verificar-cerrojos
    tier: 3
    prompt: |
      Explora todas las intercalaciones (consistencia secuencial) de dos hilos que intentan entrar una vez en la sección crítica con: (A) `while (flag[otro]); flag[yo] = 1;`; (B) `flag[yo] = 1; while (flag[otro]);`; (C) Peterson. ¿Viola A la exclusión mutua? ¿Puede B interbloquearse? ¿Falla C de alguna de las dos formas?

      Respuesta: `si` o `no` para cada pregunta, separados por espacios.
    answers: ["sha256:d0b1dcb1044011a1c7484d402aabb92c1c49c5865ed8feff9cfa50ad9f960a4b"]
---

[[sys-sistemas-operativos]] presentó los hilos, los cerrojos, las variables de condición y el interbloqueo. Este nodo baja al nivel en que trabajan quienes escriben bibliotecas de concurrencia,
bases de datos, motores de juegos o núcleos: qué garantiza de verdad el hardware sobre el orden de las operaciones de memoria, qué promete el modelo de memoria de C, C++ y Rust, cómo se construye un
cerrojo con instrucciones atómicas, cuándo una estructura concurrente es correcta, cómo se escribe una sin cerrojos y cómo se libera su memoria sin romper nada, por qué un programa paralelo puede ir más
lento que el secuencial, y cómo se prueba y se verifica código concurrente, que es donde están los errores más difíciles de reproducir.

## Objetivos

Al terminar sabrás:

1. Distinguir carrera de datos y condición de carrera, y razonar sobre intercalaciones.
2. Explicar la consistencia secuencial, TSO y el modelo de ARM con pruebas de tornasol (*litmus tests*).
3. Usar el modelo de memoria de C11/C++11/Rust: `happens-before`, órdenes `relaxed`, `acquire`, `release`, `acq_rel` y `seq_cst`, y la garantía DRF-SC.
4. Construir cerrojos (de giro, de tique, MCS, sobre `futex`) y saber qué propiedades tiene cada uno.
5. Coordinar hilos con variables de condición, semáforos, barreras y cerrojos de lectura-escritura, y aplicar los patrones habituales.
6. Evitar interbloqueos, inanición, inversión de prioridad y bloqueos activos.
7. Definir linealizabilidad y las garantías de progreso (bloqueante, sin obstrucción, sin cerrojos, sin espera).
8. Escribir estructuras sin cerrojos con CAS, reconocer el problema ABA y recuperar memoria con punteros de riesgo, épocas o RCU.
9. Medir y mejorar el rendimiento (Amdahl, Gustafson, Little, coherencia de caché, falso compartir) y verificar con TSan y comprobación de modelos.

## Qué debes dominar antes

[[sys-sistemas-operativos]] (hilos, cerrojos, variables de condición, semáforos, interbloqueo) y [[sys-c-profesional]] (C moderno y comportamiento indefinido). Ayudan [[prog-rust-concurrencia-async]] y
[[sys-ensamblador-arm]].

> [!question] Test de entrada
> 1. ¿Por qué `contador++` desde dos hilos pierde incrementos?
> 2. ¿Por qué se comprueba la condición de `pthread_cond_wait` en un `while`?
> 3. ¿Cuáles son las cuatro condiciones de Coffman?
>
> Respuestas: porque son tres pasos (leer, sumar, escribir) que pueden intercalarse; porque puede haber despertares espurios u otro hilo puede haber cambiado el estado antes de que el despertado
> recupere el cerrojo; exclusión mutua, retención y espera, sin expropiación y espera circular.

## 1. Para qué sirve

- **Rendimiento**: los procesadores no son más rápidos por núcleo desde hace años, sino que tienen más núcleos; servidores, bases de datos, compiladores y motores de vídeo dependen de usarlos bien.
- **Latencia**: separar la E/S, la interfaz y el cálculo en hilos o tareas mantiene un sistema respondiendo (en robótica, el control a 1 kHz no puede esperar a la red: [[rob-ros2]]).
- **Corrección**: los errores de concurrencia son intermitentes, dependen de la carga y del hardware, y aparecen en producción. Saber razonar sobre ellos y verificarlos es una habilidad escasa.

## 2. Intercalaciones, carreras y atomicidad

Un programa concurrente tiene muchas ejecuciones posibles: dos hilos de `n` pasos atómicos cada uno admiten `C(2n, n)` intercalaciones (20 con 3 pasos; 184 756 con 10). Probar "a ver si falla" no
basta.

- Una **carrera de datos** (*data race*) es que dos hilos accedan a la misma posición de memoria, al menos uno escriba, y no haya sincronización entre ellos. En C, C++ y Rust es **comportamiento indefinido**.
- Una **condición de carrera** es un error lógico porque el resultado depende del orden: puede existir sin carrera de datos (comprobar con un atómico y luego actuar con otro: *check-then-act*).
- Con dos hilos que hacen `x = x + 1` dos veces cada uno sobre `x = 0`, el resultado puede ser 4, 3 o **2**: el hilo A lee 0; B hace su primer incremento completo (`x = 1`); A escribe 1; B lee 1 para su
  segundo incremento; A lee 1 y escribe 2; B escribe 2.

## 3. Consistencia secuencial y modelos del hardware

**Consistencia secuencial** (SC, Lamport, 1979): el resultado es el de *alguna* intercalación de las operaciones de todos los hilos, respetando el orden de cada uno. Es lo que la intuición supone y lo
que **ningún procesador moderno ofrece** por defecto, porque los búferes de escritura, las cachés y la ejecución fuera de orden lo harían lento.

- **x86-64 (TSO)**: cada núcleo tiene un **búfer de escritura FIFO**; sus lecturas ven primero su propio búfer. La única reordenación visible es que **una lectura adelante a una escritura anterior** a otra dirección.
- **ARM y POWER**: además pueden reordenar escrituras entre sí y lecturas entre sí si no hay dependencias ni barreras ([[sys-ensamblador-arm]]). ARMv8 es multicopia-atómico; POWER no.
- El **compilador** también reordena, fusiona y elimina accesos a memoria normal: el modelo de memoria del lenguaje acota a ambos.

> [!example] Ejemplo resuelto 1: la prueba SB (*store buffering*)
> Con `x = y = 0`, el hilo 1 hace `x = 1; r1 = y;` y el hilo 2 `y = 1; r2 = x;`. Con SC, alguna escritura va primero, así que alguno lee 1: los resultados posibles son `(0,1)`, `(1,0)` y `(1,1)`. En TSO
> las dos escrituras pueden quedarse en los búferes mientras las dos lecturas van a memoria: también `(0,0)`. Por eso el algoritmo de Peterson, correcto con SC, **falla en x86** sin una barrera
> (`mfence`) o sin operaciones `seq_cst`: la exploración exhaustiva con búferes de escritura encuentra la ejecución en que ambos hilos entran en la sección crítica.

## 4. El modelo de memoria de C11, C++11 y Rust

El modelo (Boehm y Adve, 2008) define cuándo una escritura es visible para una lectura a partir de dos relaciones:

- **Secuenciado antes** (*sequenced-before*): el orden dentro de un hilo.
- **Sincroniza con** (*synchronizes-with*): una escritura atómica con `release` y una lectura atómica con `acquire` **que lee ese valor**.
- **Ocurre antes** (*happens-before*): el cierre transitivo de las dos. Si una escritura ocurre antes que una lectura, la lectura la ve (o una posterior).

Los órdenes de las operaciones atómicas:

| Orden | Garantiza | Uso típico |
|---|---|---|
| `relaxed` | solo atomicidad y un orden total por variable | contadores, estadísticas |
| `release` (escrituras) | lo anterior no se mueve después | publicar datos |
| `acquire` (lecturas) | lo posterior no se mueve antes | consumir datos publicados |
| `acq_rel` | ambos, en lecturas-modificaciones-escrituras | `fetch_add` en un cerrojo, conteo de referencias al soltar |
| `seq_cst` | además, un orden total único de todas las operaciones `seq_cst` | por defecto; Peterson, Dekker |

La garantía central es **DRF-SC**: un programa **sin carreras de datos** que solo usa `seq_cst` se comporta como si fuera secuencialmente consistente. Los órdenes más débiles son optimizaciones que exigen
razonar con *happens-before*. En hardware: en x86, `acquire` y `release` son cargas y escrituras normales y una escritura `seq_cst` es `xchg` (o `mov` + `mfence`); en ARM, `ldar` y `stlr`.

> [!example] Ejemplo resuelto 2: publicar un dato
> ```c
> // hilo productor                                // hilo consumidor
> datos = 42;                                       while (!atomic_load_explicit(&listo, memory_order_acquire)) {}
> atomic_store_explicit(&listo, true,               assert(datos == 42);   // garantizado
>                       memory_order_release);
> ```
> La lectura `acquire` que ve `true` sincroniza con la escritura `release`, así que `datos = 42` ocurre antes que el `assert`. Con `relaxed` en cualquiera de los dos lados, el `assert` puede fallar en
> ARM, y `datos` sería una carrera de datos (comportamiento indefinido) en el lenguaje, en cualquier procesador. En Rust el mismo código usa `AtomicBool` con `Ordering::Release`/`Acquire`, y el
> compilador impide la carrera sobre `datos` salvo con `unsafe`.

Las **barreras** (`atomic_thread_fence`) imponen orden sin variable propia; `memory_order_consume` está desaconsejado (los compiladores lo tratan como `acquire`). `volatile` **no** es sincronización:
solo impide que el compilador elimine accesos (sirve para registros de dispositivos, no entre hilos).

## 5. Cerrojos por dentro

- **De giro con prueba y asignación** (*test-and-set*): `while (atomic_exchange(&c, 1)) {}`. Cada intento escribe la línea de caché y la hace saltar entre núcleos. **Prueba, prueba y asigna** (TTAS): girar
  leyendo (`while (atomic_load(&c)) {}`) y solo entonces intentar el intercambio; con **espera exponencial** (*backoff*) y una instrucción `pause` (x86) o `yield` (ARM) en el bucle.
- **De tique**: `fetch_add` sobre `siguiente` da un número; se espera a que `atendiendo` llegue a él. Es **justo** (orden de llegada), pero todos giran sobre la misma variable.
- **MCS** (Mellor-Crummey y Scott, 1991): una cola enlazada en la que cada hilo gira sobre **su propio nodo**; escala a muchos núcleos. Es la base del cerrojo `qspinlock` de Linux.
- **Mutex reales** (`pthread_mutex`, `std::mutex`, `parking_lot`, el `Mutex` de Rust): un camino rápido con un atómico y, si hay contención, dormir con **`futex`** (Linux) para no gastar CPU. Girar solo
  compensa si la sección crítica dura menos que un cambio de contexto (unos microsegundos).
- **Peterson y Dekker** muestran que con solo lecturas y escrituras se puede lograr exclusión mutua, pero solo con SC: en la práctica se usan instrucciones atómicas.

## 6. Coordinación y patrones

- **Variables de condición** con semántica de Mesa: `signal` solo es una pista, por eso la condición se reevalúa en un `while`. `broadcast` cuando varias esperas pueden cumplirse a la vez o hay distintas
  condiciones sobre la misma variable.
- **Semáforos**, **barreras** (`pthread_barrier`, `std::barrier`), **cerrojos de lectura-escritura** (muchos lectores o un escritor; cuidado con la inanición de escritores), **latches** y **futuros**.
- **Patrones**: productor-consumidor con cola acotada (contrapresión), **grupo de hilos** con cola de tareas, **fork-join** y **robo de trabajo** (*work stealing*: cada hilo tiene su cola de doble extremo y
  roba a otros cuando se vacía; es lo que hacen Rayon, Tokio, Cilk y el *ForkJoinPool* de Java), *pipelines*, y **paso de mensajes** (canales de Go y Rust, actores de Erlang): compartir memoria comunicándose,
  en vez de comunicarse compartiendo memoria.

## 7. Interbloqueo, inanición e inversión de prioridad

- **Interbloqueo**: se evita imponiendo un **orden global** de adquisición (por ejemplo, por dirección o por nivel jerárquico), con `try_lock` y reintento, o adquiriendo todos los cerrojos a la vez
  (`std::scoped_lock`). Se **detecta** buscando ciclos en el grafo de espera. En los filósofos, que todos cojan primero el tenedor de menor número elimina el ciclo.
- **Bloqueo activo** (*livelock*): los hilos cambian de estado sin progresar (dos que se ceden el paso a la vez); se rompe con esperas aleatorias.
- **Inanición**: un hilo nunca obtiene el recurso (cerrojos injustos, lectores que monopolizan un cerrojo de lectura-escritura).
- **Inversión de prioridad**: una tarea de alta prioridad espera un cerrojo que tiene una de baja, desplazada por una de prioridad media. Fue la causa de los reinicios del Mars Pathfinder en 1997; se
  resuelve con **herencia de prioridad** (`PTHREAD_PRIO_INHERIT`, los mutex de FreeRTOS) o con techo de prioridad.

## 8. Corrección y progreso

Una estructura concurrente es **linealizable** (Herlihy y Wing, 1990) si cada operación parece ocurrir **instantáneamente** en algún punto entre su invocación y su respuesta, y el orden resultante cumple la
especificación secuencial. Es componible (si cada objeto es linealizable, el sistema también) y es lo que se espera de una cola o un mapa concurrentes. Para comprobar una historia, se buscan órdenes
compatibles con el tiempo real (si A termina antes de que B empiece, A va antes) que la especificación acepte.

Garantías de **progreso**, de más débil a más fuerte:

- **Bloqueante**: si un hilo se detiene dentro de la sección crítica, los demás pueden quedarse esperando para siempre.
- **Sin obstrucción**: un hilo que se ejecuta solo termina en un número finito de pasos.
- **Sin cerrojos** (*lock-free*): en todo momento, **algún** hilo progresa (el sistema no se bloquea aunque se detengan hilos).
- **Sin espera** (*wait-free*): **todo** hilo termina en un número acotado de sus propios pasos.

## 9. Estructuras sin cerrojos y recuperación de memoria

La herramienta es **CAS** (*compare-and-swap*, `compare_exchange`): escribe solo si el valor actual es el esperado, y si no, devuelve el actual para reintentar. La **pila de Treiber** hace `push` y `pop`
con un bucle de CAS sobre la cima; la **cola de Michael y Scott** (1996) usa dos punteros con CAS y ayuda a terminar las operaciones a medias.

- **El problema ABA**: un hilo lee `A`, otro cambia `A → B → A`, y la CAS del primero tiene éxito aunque la estructura cambió (y el nodo que creía siguiente puede estar liberado). Soluciones: **punteros
  etiquetados** con un contador de versión (CAS doble ancho), o no reutilizar memoria mientras alguien pueda verla.
- **Recuperación de memoria**: en una estructura sin cerrojos no se puede hacer `free` de un nodo que otro hilo puede estar leyendo.
  - **Punteros de riesgo** (*hazard pointers*, Michael, 2004): cada hilo publica los punteros que está usando; un nodo retirado se libera cuando no aparece en ninguno. Entra en C++26.
  - **Recuperación por épocas** (*epoch-based*, `crossbeam-epoch` en Rust): los hilos anuncian la época global al entrar; lo retirado en una época se libera cuando todos han salido de ella.
  - **RCU** (*read-copy-update*, Linux): los lectores no sincronizan nada; el escritor copia, modifica y publica con `release`, y libera la versión vieja tras un **periodo de gracia** en el que todos los
    lectores han pasado por un estado de reposo.
- Regla práctica: usa las estructuras de bibliotecas probadas (`crossbeam`, `folly`, `libcds`, `java.util.concurrent`) y escribe las tuyas solo con un modelo comprobado y pruebas de estrés.

## 10. Rendimiento

- **Amdahl**: con una fracción paralelizable `p`, la aceleración con `n` núcleos es `1 / ((1 − p) + p/n)`, acotada por `1 / (1 − p)`: con `p = 0,9`, 4,71 con 8 núcleos y como mucho 10.
- **Gustafson**: si el problema crece con los núcleos, la aceleración escalada es `n − s(n − 1)` con fracción serie `s`: 5,5 con `n = 6` y `s = 0,1`. Las dos leyes no se contradicen: responden a preguntas
  distintas (mismo problema más rápido, o problema mayor en el mismo tiempo).
- **Ley de Little**: elementos en el sistema = tasa de llegada × tiempo de permanencia (`L = λW`): 200 peticiones/s que tardan 50 ms son 10 en curso; sirve para dimensionar grupos de hilos y colas.
- **Coherencia de caché** (MESI y variantes): escribir en una línea la invalida en los demás núcleos. Un atómico disputado cuesta del orden de cien ciclos o más por la transferencia de la línea.
- **Falso compartir**: dos variables independientes en la misma línea de 64 bytes, escritas por hilos distintos, se comportan como una variable disputada. Se separan con `alignas(64)` (o
  `CachePadded` en Rust, `std::hardware_destructive_interference_size` en C++).
- **Reducir la contención**: contadores repartidos por hilo y sumados al leer, cerrojos de grano más fino, estructuras particionadas, lecturas sin cerrojo (RCU, *seqlocks*), y conciencia de **NUMA**.

## 11. Probar y verificar

- **Sanitizadores**: ThreadSanitizer (`-fsanitize=thread`) detecta carreras de datos dinámicamente; Helgrind y DRD en Valgrind. Solo ven las ejecuciones que ocurren: hacen falta pruebas que generen
  contención.
- **Comprobación de modelos**: explorar todas las intercalaciones de un modelo pequeño. **loom** (Rust) ejecuta las pruebas bajo todas las intercalaciones y órdenes de memoria permitidos; **herd7** y las
  pruebas de tornasol evalúan modelos de hardware; **TLA+** y **Spin** verifican algoritmos (`sys-verificacion-formal`).
- **Pruebas de estrés y de linealizabilidad**: ejecutar con muchos hilos, registrar la historia y comprobarla (Jepsen y Knossos lo hacen con sistemas distribuidos).
- Diseñar para poder razonar: menos estado compartido, propiedad clara (el modelo de Rust), invariantes documentados en cada cerrojo.

> [!example] Ejemplo resuelto 3: verificar dos cerrojos ingenuos
> La **alternancia estricta**: `while (turno != yo); /* sección crítica */ turno = otro;`. Explorando todas las intercalaciones nunca hay dos hilos dentro (cumple la exclusión mutua), pero si un hilo
> deja de pedir la sección crítica, el otro espera para siempre aunque esté libre: viola el **progreso**. Los cerrojos ingenuos que solo usan banderas fallan de otras formas (lo comprobarás en los
> ejercicios); Peterson combina banderas y `turno` para cumplir las dos propiedades con SC.
> Un explorador de este tipo cabe en 40 líneas y es una de las mejores inversiones para aprender: muchos algoritmos "evidentes" tienen errores que solo aparecen en una intercalación entre miles.

## 12. Hilos, asincronía y actores

Los hilos del sistema son caros (pila de megabytes, cambio de contexto en el núcleo); para decenas de miles de conexiones se usa **E/S asíncrona** con un bucle de eventos (`epoll`, `io_uring`) y tareas
ligeras: `async`/`await` en Rust ([[prog-rust-concurrencia-async]]), C++20 y Python, o las *goroutines* de Go. Los **actores** (Erlang/Elixir, Akka) aíslan el estado y se comunican solo con mensajes. Los
problemas de este nodo siguen existiendo: interbloqueos entre tareas, inanición si una tarea no cede, y estado compartido entre tareas.

## 13. Comprobar con un programa

Compila en C23 con `-Wall -Wextra -Wpedantic -Werror` y se ejecuta con ThreadSanitizer sin avisos: una cola acotada con cerrojo y dos variables de condición (3 productores, 2 consumidores y una "píldora"
para terminar), un cerrojo de tique con `acquire`/`release`, la publicación de un dato con `release`/`acquire`, y contadores repartidos en líneas de caché distintas.

```c
#include <pthread.h>
#include <stdalign.h>
#include <stdatomic.h>
#include <stdio.h>

enum { CAP = 8, PRODUCTORES = 3, CONSUMIDORES = 2, POR_PRODUCTOR = 20000 };

typedef struct {
    long datos[CAP];
    int cabeza, cola, n;
    pthread_mutex_t m;
    pthread_cond_t hay_hueco, hay_dato;
} Cola;

static Cola cola = {.m = PTHREAD_MUTEX_INITIALIZER, .hay_hueco = PTHREAD_COND_INITIALIZER, .hay_dato = PTHREAD_COND_INITIALIZER};

static void mete(Cola *c, long v) {
    pthread_mutex_lock(&c->m);
    while (c->n == CAP) pthread_cond_wait(&c->hay_hueco, &c->m); // siempre en un bucle
    c->datos[c->cola] = v;
    c->cola = (c->cola + 1) % CAP;
    c->n++;
    pthread_cond_signal(&c->hay_dato);
    pthread_mutex_unlock(&c->m);
}

static long saca(Cola *c) {
    pthread_mutex_lock(&c->m);
    while (c->n == 0) pthread_cond_wait(&c->hay_dato, &c->m);
    long v = c->datos[c->cabeza];
    c->cabeza = (c->cabeza + 1) % CAP;
    c->n--;
    pthread_cond_signal(&c->hay_hueco);
    pthread_mutex_unlock(&c->m);
    return v;
}

static void *productor(void *arg) {
    long base = (long)arg * POR_PRODUCTOR;
    for (long i = 1; i <= POR_PRODUCTOR; i++) mete(&cola, base + i);
    return NULL;
}

static atomic_long total_consumido;
static void *consumidor(void *arg) {
    (void)arg;
    long suma = 0;
    for (long v; (v = saca(&cola)) != -1;) suma += v;
    atomic_fetch_add(&total_consumido, suma);
    return NULL;
}

// Cerrojo de tique: justo (orden de llegada); todos esperan sobre la misma variable.
typedef struct { atomic_uint siguiente, atendiendo; } Tique;
static void tique_bloquea(Tique *t) {
    unsigned mio = atomic_fetch_add_explicit(&t->siguiente, 1, memory_order_relaxed);
    while (atomic_load_explicit(&t->atendiendo, memory_order_acquire) != mio) {}
}
static void tique_libera(Tique *t) {
    unsigned a = atomic_load_explicit(&t->atendiendo, memory_order_relaxed);
    atomic_store_explicit(&t->atendiendo, a + 1, memory_order_release);
}
static Tique tique;
static long protegido; // no atómico: lo protege el cerrojo
static void *con_tique(void *arg) {
    (void)arg;
    for (int i = 0; i < 50000; i++) {
        tique_bloquea(&tique);
        protegido++;
        tique_libera(&tique);
    }
    return NULL;
}

// Publicar un dato: liberar al escribir la bandera, adquirir al leerla.
static long mensaje;
static atomic_bool listo;
static void *emisor(void *arg) {
    (void)arg;
    mensaje = 42;
    atomic_store_explicit(&listo, true, memory_order_release);
    return NULL;
}
static void *receptor(void *arg) {
    while (!atomic_load_explicit(&listo, memory_order_acquire)) {}
    *(long *)arg = mensaje; // sin carrera: la lectura acquire sincroniza con la escritura release
    return NULL;
}

// Contadores repartidos, cada uno en su línea de caché, para evitar el falso compartir.
typedef struct { alignas(64) atomic_long v; } Ranura;
static Ranura ranuras[4];
static void *cuenta(void *arg) {
    Ranura *r = &ranuras[(long)arg];
    for (int i = 0; i < 100000; i++) atomic_fetch_add_explicit(&r->v, 1, memory_order_relaxed);
    return NULL;
}

int main(void) {
    pthread_t p[PRODUCTORES], c[CONSUMIDORES], t[4];
    for (long i = 0; i < CONSUMIDORES; i++) pthread_create(&c[i], NULL, consumidor, NULL);
    for (long i = 0; i < PRODUCTORES; i++) pthread_create(&p[i], NULL, productor, (void *)i);
    for (int i = 0; i < PRODUCTORES; i++) pthread_join(p[i], NULL);
    for (int i = 0; i < CONSUMIDORES; i++) mete(&cola, -1); // una píldora por consumidor
    for (int i = 0; i < CONSUMIDORES; i++) pthread_join(c[i], NULL);
    long n = (long)PRODUCTORES * POR_PRODUCTOR, esperado = n * (n + 1) / 2;

    for (long i = 0; i < 4; i++) pthread_create(&t[i], NULL, con_tique, NULL);
    for (int i = 0; i < 4; i++) pthread_join(t[i], NULL);

    long recibido = 0;
    pthread_t e, r;
    pthread_create(&r, NULL, receptor, &recibido);
    pthread_create(&e, NULL, emisor, NULL);
    pthread_join(e, NULL);
    pthread_join(r, NULL);

    for (long i = 0; i < 4; i++) pthread_create(&t[i], NULL, cuenta, (void *)i);
    long suma_ranuras = 0;
    for (int i = 0; i < 4; i++) {
        pthread_join(t[i], NULL);
        suma_ranuras += atomic_load(&ranuras[i].v);
    }

    long consumido = atomic_load(&total_consumido);
    printf("cola %ld (esperado %ld)  tique %ld  mensaje %ld  ranuras %ld  sizeof(Ranura) %zu\n", consumido, esperado, protegido,
           recibido, suma_ranuras, sizeof(Ranura));
    return !(consumido == esperado && protegido == 200000 && recibido == 42 && suma_ranuras == 400000);
}
```

## 14. Errores típicos

- Creer que una carrera de datos "benigna" es inofensiva: es comportamiento indefinido y el compilador puede, por ejemplo, sacar la lectura de un bucle y convertirlo en infinito.
- Usar `volatile` para sincronizar hilos, o `relaxed` donde hacía falta `acquire`/`release`.
- Comprobar la condición de una variable de condición con `if`; avisar sin haber cambiado el estado bajo el cerrojo.
- Adquirir cerrojos en órdenes distintos en distintos sitios; llamar a código desconocido (*callbacks*) con un cerrojo tomado.
- Liberar un nodo de una estructura sin cerrojos sin recuperación segura; ignorar ABA.
- Proteger cada operación pero no la secuencia (*check-then-act*: `if (!mapa.contiene(k)) mapa.inserta(k, v)`).
- Medir sin calentar, con un solo hilo o sin contención, y concluir que "escala".
- Fiarse de que un programa "nunca ha fallado": las intercalaciones raras aparecen con otra carga, otro compilador u otro procesador (sobre todo al pasar de x86 a ARM).

## 15. Resumen

- Carrera de datos (comportamiento indefinido) frente a condición de carrera (error lógico); `C(2n, n)` intercalaciones.
- SC (Lamport) frente a TSO (búfer de escritura: SB permite `(0,0)`) y ARM (más reordenaciones; multicopia-atómico).
- C11/C++/Rust: *happens-before*, `release`/`acquire`, `seq_cst`, DRF-SC; `volatile` no sincroniza.
- Cerrojos: TAS, TTAS con espera, tique (justo), MCS (escalable), `futex`; Peterson exige SC.
- Coordinación: condiciones con `while`, semáforos, barreras, RW; productor-consumidor, grupos de hilos, robo de trabajo, mensajes.
- Interbloqueo (orden global, grafo de espera), bloqueo activo, inanición, inversión de prioridad y herencia.
- Linealizabilidad; bloqueante, sin obstrucción, sin cerrojos, sin espera.
- CAS, Treiber, Michael-Scott, ABA; punteros de riesgo, épocas, RCU.
- Amdahl, Gustafson, Little; coherencia, falso compartir, `alignas(64)`, contadores repartidos.
- TSan, loom, herd7, TLA+; pruebas de estrés y de linealizabilidad.

## Repaso: lo que debe quedarte dentro de un mes

1. Toda variable compartida con alguna escritura se protege con un cerrojo o es atómica: no hay carreras "benignas".
2. Publica con `release` y consume con `acquire`; `seq_cst` si dudas.
3. x86 deja que una lectura adelante a una escritura (SB); ARM reordena mucho más.
4. Cerrojos siempre en el mismo orden; condiciones siempre en un `while`.
5. En una estructura sin cerrojos, el problema difícil es liberar la memoria (ABA, punteros de riesgo, épocas, RCU).

## Siguiente

`sys-kernel-linux` (sincronización dentro del núcleo: `spinlock`, `mutex`, RCU), `sys-sistemas-distribuidos` (concurrencia entre máquinas: relojes, consenso) y `sys-verificacion-formal`.
