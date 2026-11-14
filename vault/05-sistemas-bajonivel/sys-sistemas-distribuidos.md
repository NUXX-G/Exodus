---
id: sys-sistemas-distribuidos
title: "Sistemas distribuidos: modelos y fallos, tiempo y orden (Lamport, vectoriales, NTP, TrueTime), replicación y modelos de consistencia, CAP y PACELC, consenso (FLP, Paxos, Raft, BFT), transacciones, CRDT, particionado y prueba de sistemas reales"
area: bajo-nivel
trunk_level: 12
prerequisites: [sys-concurrencia, sys-redes-sockets, sys-bases-datos]
academic_sources:
  - "van Steen, M.; Tanenbaum, A. S. Distributed Systems, 4ª ed. distributed-systems.net, 2023."
  - "Kleppmann, M. Designing Data-Intensive Applications. O'Reilly, 2017."
  - "Lamport, L. Time, Clocks, and the Ordering of Events in a Distributed System. CACM 21(7), 1978; Lamport, L. Paxos Made Simple. ACM SIGACT News 32(4), 2001."
  - "Fischer, M.; Lynch, N.; Paterson, M. Impossibility of Distributed Consensus with One Faulty Process. JACM 32(2), 1985; Gilbert, S.; Lynch, N. Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services. SIGACT News 33(2), 2002."
  - "Ongaro, D.; Ousterhout, J. In Search of an Understandable Consensus Algorithm. USENIX ATC 2014; Castro, M.; Liskov, B. Practical Byzantine Fault Tolerance. OSDI 1999."
  - "Shapiro, M.; Preguiça, N.; Baquero, C.; Zawirski, M. Conflict-Free Replicated Data Types. SSS 2011; Corbett, J. C. et al. Spanner: Google's Globally-Distributed Database. OSDI 2012; DeCandia, G. et al. Dynamo: Amazon's Highly Available Key-value Store. SOSP 2007."
exercises:
  - id: reloj-de-lamport
    tier: 1
    prompt: |
      Tres procesos. P1: `a` (local), `b` (envía m1 a P2), `c` (recibe m3). P2: `d` (recibe m1), `e` (envía m2 a P3), `f` (local). P3: `g` (local), `h` (recibe m2), `i` (envía m3 a P1). Con relojes de Lamport que empiezan en 0, ¿qué marca tiene el evento `c`?

      Respuesta: un número.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: quorums
    tier: 1
    prompt: |
      En un almacén con N = 5 réplicas, ¿cuál es el menor número de réplicas de lectura R que garantiza leer la última escritura si W = 3? ¿Y si W = 5?

      Respuesta: `R1;R2`.
    answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
  - id: fallos-tolerados
    tier: 1
    prompt: |
      ¿Cuántas caídas tolera un grupo Raft de 5 servidores, y cuántos nodos bizantinos tolera PBFT con 7 réplicas?

      Respuesta: `raft;pbft`.
    answers: ["sha256:5705c50ceb73f721ce58fb003ec62d0c0c4e40f93298505f7dc6b7f3e475cc84"]
  - id: disponibilidad
    tier: 1
    prompt: |
      Un servicio necesita una mayoría de 3 réplicas independientes, cada una disponible el 99 % del tiempo. ¿Qué disponibilidad tiene?

      Respuesta: en porcentaje con 4 decimales.
    answers: ["sha256:88e1e2d917fb3b964ef2f45cf617c91473aa97b221d7b2fff087f68905baca18"]
  - id: mensajes-2pc
    tier: 1
    prompt: |
      ¿Cuántos mensajes intercambia el compromiso en dos fases, sin fallos, entre un coordinador y 3 participantes (preparar, voto, decisión y confirmación)?

      Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: ntp
    tier: 1
    prompt: |
      Un cliente NTP envía en t1 = 100,000 s (su reloj), el servidor recibe en t2 = 100,250 y responde en t3 = 100,260 (reloj del servidor), y el cliente recibe en t4 = 100,050. ¿Qué desfase θ y qué retardo δ calcula?

      Respuesta: `theta;delta` en segundos con 2 decimales.
    answers: ["sha256:3283c0fa5556823d76d54bebd7084579fde82fb68365eed89732acb76851ffd7"]
  - id: relojes-vectoriales
    tier: 2
    prompt: |
      Tres procesos. P1: `a` (local), `b` (envía m1 a P2), `c` (recibe m3). P2: `d` (recibe m1), `e` (envía m2 a P3), `f` (local). P3: `g` (local), `h` (recibe m2), `i` (envía m3 a P1). Con relojes vectoriales `[P1, P2, P3]`, ¿qué vector tiene `c`, y qué relación hay entre `f` e `i`?

      Respuesta: `v1 v2 v3;relación`, con relación `antes`, `despues` o `concurrentes`.
    answers: ["sha256:36c5efd74f142314e96f521e56b762b3bf384ac48b02b423a4ad4d9729784083"]
  - id: hash-consistente
    tier: 2
    prompt: |
      Anillo de 0 a 99 con los nodos A = 10, B = 40 y C = 70; cada clave va al primer nodo en sentido creciente (dando la vuelta). Las claves están en 5, 15, 25, …, 95. Si se quita B, ¿cuántas claves cambian de nodo? Si en cambio se reparte con `clave mod 3` sobre `[A, B, C]` y al quitar B con `clave mod 2` sobre `[A, C]`, ¿cuántas cambian?

      Respuesta: `anillo;modulo`.
    answers: ["sha256:b00744b5a50b67c51ba9f6257456807bcf7970df0f191d73e6fd18aaf20646d9"]
  - id: eleccion-raft
    tier: 2
    prompt: |
      Cinco servidores Raft tienen como última entrada (término, índice): S1 (3, 7), S2 (4, 5), S3 (3, 9), S4 (4, 6), S5 (2, 10). Ninguno ha votado en el término nuevo. ¿Cuáles pueden ganar una elección?

      Respuesta: en orden, separados por espacios.
    answers: ["sha256:0110f5a2056f5f7c115141bf6c12378ae65d107d7fb609432aa96c6530dfc5a5"]
  - id: crdt
    tier: 2
    prompt: |
      Tres réplicas de un G-Counter tienen `{A:3, B:0, C:1}`, `{A:2, B:4, C:0}` y `{A:1, B:1, C:5}`. ¿Qué valor dan tras fusionarse? En un OR-Set, la réplica A añade `x`, la B lo elimina tras ver esa inserción, y la C añade `x` de forma concurrente; tras fusionar las tres, ¿contiene `x`?

      Respuesta: `valor;si` o `valor;no`.
    answers: ["sha256:b86b26d25b3bc9dd985d45d993ac8c756c1341a7298eb0c04502269dfb3a56fc"]
  - id: versiones-hermanas
    tier: 2
    prompt: |
      Un almacén estilo Dynamo recibe estas versiones de una clave con relojes vectoriales: `{A:2, B:1}`, `{A:1, B:2}`, `{A:2, B:2}` y `{A:3, B:1}`. ¿Cuántas versiones hermanas (no dominadas) debe conservar?

      Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: entrega-causal
    tier: 2
    prompt: |
      Difusión causal con relojes vectoriales. P1 difunde m1 y luego m3; P2 entrega m1 y después difunde m2. A P3 llegan, en este orden, m2, m3 y m1. ¿En qué orden los entrega P3 (revisando los mensajes retenidos por orden de llegada)?

      Respuesta: separados por espacios.
    answers: ["sha256:e1ff4dd232055c95938e1ff703da814b5be72b9b9951ef860cffb44e36e8303b"]
  - id: espera-de-spanner
    tier: 2
    prompt: |
      En Spanner, con una incertidumbre de TrueTime ε = 7 ms, ¿cuántos milisegundos dura aproximadamente la espera de compromiso (*commit wait*)?

      Respuesta: un número.
    answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
  - id: compromiso-raft
    tier: 3
    prompt: |
      Un líder Raft del término 4 tiene un registro cuyos términos por índice (1 a 7) son `1 1 2 2 3 4 4`, y `commitIndex = 4`. Con `matchIndex` (incluido el líder) `[7, 5, 5, 3, 7]`, ¿qué `commitIndex` puede fijar? ¿Y con `[7, 6, 6, 3, 7]`?

      Respuesta: `primero;segundo`.
    answers: ["sha256:ba728f85805e503b8820de5e9fba209b27a4312e7a616358844a3b72a1342556"]
  - id: linealizabilidad-de-registro
    tier: 3
    prompt: |
      Registro con valor inicial 0 e intervalos `[inicio, fin]`: (1) `w(1) [0,2]`, `r→1 [1,3]`, `r→0 [4,5]`. (2) `w(1) [0,5]`, `r→1 [1,2]`, `r→0 [3,4]`. (3) `w(1) [0,5]`, `r→0 [1,2]`, `r→1 [3,4]`. (4) `w(1) [0,3]`, `w(2) [1,4]`, `r→2 [5,6]`, `r→1 [7,8]`. (5) `w(1) [0,3]`, `w(2) [1,4]`, `r→1 [5,6]`, `r→1 [7,8]`. ¿Cuáles son linealizables?

      Respuesta: los números en orden, separados por espacios.
    answers: ["sha256:9f14025af0065b30e47e23ebb3b491d39ae8ed17d33739e5ff3827ffb3634953"]
  - id: reparar-registro-raft
    tier: 3
    prompt: |
      Un líder Raft tiene el registro de términos `1 1 1 4 4 5 5 6 6 6` (índices 1 a 10) y un seguidor `1 1 1 2 2 2 3 3 3 3 3` (1 a 11). El líder empieza con `nextIndex = 11` y lo reduce en uno tras cada rechazo de AppendEntries. ¿Cuántos rechazos hay antes de que el seguidor acepte?

      Respuesta: un número.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
---

Un sistema distribuido es un conjunto de máquinas que se comunican por una red y deben comportarse como un único sistema coherente, aunque los mensajes se retrasen, se pierdan o lleguen desordenados,
los relojes no coincidan y las máquinas se caigan en cualquier momento. Casi todo el software actual lo es: bases de datos replicadas, colas de mensajes, Kubernetes, la nube entera, las flotas de robots que
comparten un mapa. Este nodo da los fundamentos que no cambian (lo que se puede y lo que no se puede hacer, demostrado), los algoritmos que se usan en producción (Raft en etcd y Consul, Paxos en Spanner y
Chubby, CRDT en Riak y en editores colaborativos) y la forma de razonar y probar que un diseño es correcto. Es la continuación natural de [[sys-concurrencia]]: allí los hilos comparten memoria; aquí solo
comparten mensajes.

## Objetivos

Al terminar sabrás:

1. Distinguir los modelos de sistema (síncrono, asíncrono, parcialmente síncrono) y de fallo (caída, omisión, bizantino), y por qué importan.
2. Ordenar eventos con relojes de Lamport y vectoriales, sincronizar relojes físicos (NTP) y entender TrueTime y los relojes lógicos híbridos.
3. Replicar datos con un líder, con quórums o sin líder, y distinguir los modelos de consistencia (linealizable, secuencial, causal, eventual y las garantías de sesión).
4. Explicar CAP y PACELC sin los malentendidos habituales.
5. Explicar el resultado FLP, Paxos, Raft (elección, replicación del registro, regla de compromiso) y los protocolos bizantinos.
6. Diseñar transacciones distribuidas (2PC, sagas) y saber qué hace Spanner.
7. Usar CRDT y difusión causal para la consistencia eventual fuerte.
8. Particionar con hash consistente y detectar fallos con *gossip* y detectores de fallos.
9. Diseñar para la red real (idempotencia, reintentos, semánticas de entrega) y probar sistemas con Jepsen, simulación determinista y TLA+.

## Qué debes dominar antes

[[sys-concurrencia]] (linealizabilidad, cerrojos, modelos de memoria), [[sys-redes-sockets]] (TCP, UDP, latencias) y [[sys-bases-datos]] (transacciones y aislamiento).

> [!question] Test de entrada
> 1. ¿Qué garantiza TCP sobre el orden y la entrega de los bytes, y qué no garantiza?
> 2. ¿Qué es una operación linealizable?
> 3. ¿Qué significa que una transacción sea atómica?
>
> Respuestas: dentro de una conexión, los bytes llegan en orden y sin duplicados mientras la conexión vive, pero no sabes si el otro extremo procesó lo último que enviaste antes de un corte, ni cuánto
> tardará; una que parece ocurrir instantáneamente entre su invocación y su respuesta; que o se aplican todos sus efectos o ninguno.

## 1. Para qué sirve

- **Escala y disponibilidad**: un solo servidor tiene un límite y se cae; replicar y particionar permite servir más y sobrevivir a fallos.
- **Latencia geográfica**: tener los datos cerca de los usuarios exige réplicas en varios continentes, con decenas o cientos de milisegundos entre ellas.
- **Corrección**: los errores típicos (pérdida de escrituras confirmadas, dos líderes a la vez, dinero duplicado) no se ven en pruebas normales; se evitan con los algoritmos y las pruebas de este nodo.

## 2. Modelos de sistema y de fallo

- **Red**: los mensajes pueden perderse, duplicarse, retrasarse sin límite y llegar desordenados. Una **partición** separa grupos de nodos que siguen funcionando.
- **Sincronía**: en el modelo **síncrono** hay cotas conocidas de retardo y de velocidad; en el **asíncrono**, ninguna (no se distingue un nodo caído de uno lento); el **parcialmente síncrono** (Dwork,
  Lynch y Stockmeyer, 1988) dice que las cotas existen a partir de algún momento desconocido. Los algoritmos prácticos suponen este último: son **siempre seguros** y **avanzan cuando la red se porta bien**.
- **Fallos**: **caída** (el nodo se detiene), **caída y recuperación** (vuelve con lo que tenía en disco), **omisión** (pierde mensajes) y **bizantino** (hace cualquier cosa, incluso mentir).
- **Seguridad** (*safety*: nunca pasa nada malo) frente a **vitalidad** (*liveness*: algo bueno acaba pasando). Los resultados de imposibilidad dicen que, en ciertos modelos, no se pueden garantizar las dos.

## 3. Tiempo y orden

- **Relojes físicos**: derivan (decenas de partes por millón) y se corrigen con **NTP**. Con las marcas `t1` (envío del cliente), `t2` (recepción en el servidor), `t3` (respuesta) y `t4` (recepción en el
  cliente), el desfase estimado es `θ = ((t2 − t1) + (t3 − t4)) / 2` y el retardo de ida y vuelta `δ = (t4 − t1) − (t3 − t2)`. La estimación es exacta si la ida y la vuelta tardan lo mismo, y el error está
  acotado por `δ/2`. Un reloj puede **saltar hacia atrás**: para medir duraciones se usa un reloj **monótono**.
- **Relojes de Lamport** (1978): cada proceso incrementa un contador en cada evento; al enviar adjunta el valor, y al recibir toma `max(propio, recibido) + 1`. Si `a → b` (*ocurre antes*), entonces
  `L(a) < L(b)`, pero **no al revés**: dos eventos concurrentes pueden tener cualquier orden de marcas. Con el identificador del proceso para desempatar dan un orden total coherente con la causalidad.
- **Relojes vectoriales**: un contador por proceso; se incrementa el propio y al recibir se toma el máximo componente a componente. `a → b` **si y solo si** `V(a) < V(b)` (menor o igual en todo y estrictamente
  menor en algo); si ninguno es menor, son **concurrentes**. Sirven para detectar conflictos (versiones hermanas en Dynamo) y para la entrega causal.
- **Relojes lógicos híbridos** (HLC) combinan el reloj físico con un contador lógico: marcas cercanas a la hora real que respetan la causalidad (CockroachDB, MongoDB).
- **TrueTime** (Spanner): el reloj devuelve un intervalo `[ahora − ε, ahora + ε]` garantizado con GPS y relojes atómicos (ε de unos pocos milisegundos). Para que el orden de las marcas coincida con el orden
  real, una transacción toma la marca `s = TT.now().latest` y **espera** hasta que `TT.now().earliest > s` antes de hacerse visible: la **espera de compromiso**, de unos `2ε`.

> [!example] Ejemplo resuelto 1: Lamport frente a vectoriales
> P1: `a`, `b` (envía m1 a P2), `c` (recibe m3). P2: `d` (recibe m1), `e` (envía m2 a P3), `f`. P3: `g`, `h` (recibe m2), `i` (envía m3 a P1). Lamport: `a=1`, `b=2`, `d=3`, `e=4`, `f=5`, `g=1`,
> `h=max(1,4)+1=5`, `i=6`, `c=max(2,6)+1=7`. `f` y `h` tienen la misma marca y `L(g) < L(f)`, pero ninguna de las dos cosas dice nada de la causalidad. Vectoriales: `f = [2,3,0]` e `i = [2,2,3]`: ninguno es
> menor que el otro, así que son **concurrentes**; `c = [3,2,3]` es mayor que todos, porque `c` depende de todo lo anterior.

## 4. Replicación y modelos de consistencia

- **Con líder** (primario-copia): las escrituras van al líder, que las propaga. **Síncrona** (no se confirma hasta que las réplicas tienen el dato: durable pero lenta) o **asíncrona** (rápida, pero un cambio
  de líder puede **perder escrituras confirmadas**).
- **Sin líder** (Dynamo, Cassandra): el cliente escribe en `W` réplicas y lee de `R` de las `N`. Si `R + W > N`, todo conjunto de lectura corta a todo conjunto de escritura y la lectura ve al menos una copia de
  la última escritura (con `N = 5` y `W = 3`, `R = 3`). Aun así no es linealizable sin más mecanismos: las versiones concurrentes se detectan con relojes vectoriales y se conservan como **hermanas**, o se
  resuelven con "gana la última" (que pierde datos).
- **Modelos de consistencia**, de más fuerte a más débil: **linealizable** (como una sola copia en tiempo real), **secuencial** (un orden total que respeta el de cada cliente, sin tiempo real), **causal**
  (todos ven las operaciones relacionadas causalmente en el mismo orden) y **eventual** (si dejan de llegar escrituras, todas las réplicas convergen). Las **garantías de sesión** (leer tus escrituras,
  lecturas monótonas, escrituras monótonas, escrituras que siguen a lecturas) arreglan las anomalías más visibles de la consistencia débil.

## 5. CAP y PACELC

**CAP** (Brewer, 2000; demostrado por Gilbert y Lynch, 2002): durante una **partición**, un sistema que sigue respondiendo en ambos lados no puede ser linealizable. No es "elige dos de tres": las particiones
no se eligen, ocurren, y la elección es qué hacer **durante** una (rechazar peticiones, CP, o responder con datos posiblemente viejos, AP). **PACELC** (Abadi, 2012) completa la idea: si hay partición (P),
disponibilidad o consistencia (A/C); **si no** (E), latencia o consistencia (L/C), porque coordinar réplicas cuesta tiempo aunque todo funcione. Spanner es PC/EC; Cassandra con quórums bajos, PA/EL.

## 6. Consenso

El **consenso** (que varios nodos acuerden un valor y, con él, un registro replicado) es la base de los cerrojos distribuidos, la elección de líder, la configuración y las bases de datos replicadas.

- **FLP** (Fischer, Lynch y Paterson, 1985): en un sistema **asíncrono** con un solo fallo de caída posible, **ningún** algoritmo determinista garantiza terminar siempre. Los algoritmos reales mantienen la
  seguridad siempre y usan temporizadores (sincronía parcial) para avanzar.
- **Mayorías**: con `N = 2f + 1` nodos se toleran `f` caídas, porque dos mayorías siempre comparten un nodo que recuerda lo decidido. Con 7 nodos, 3 caídas; con 4, solo 1 (un nodo par no añade tolerancia).
- **Paxos** (Lamport): fase 1 (*prepare/promise*: un proponente obtiene de una mayoría la promesa de no aceptar propuestas con número menor, y averigua el valor ya aceptado con número mayor) y fase 2
  (*accept*: propone ese valor, o el suyo si no había ninguno). Multi-Paxos fija un líder estable y se salta la fase 1. Correcto y difícil de implementar entero.
- **Raft** (Ongaro y Ousterhout, 2014), diseñado para entenderse:
  - **Términos** numerados; en cada término hay como mucho un líder. Un seguidor que no oye al líder durante un tiempo aleatorio se hace **candidato**, incrementa el término y pide votos; gana con una mayoría.
    Cada nodo vota a uno por término.
  - **Restricción de elección**: solo se vota a un candidato cuyo registro esté **al menos tan actualizado** (último término mayor, o igual con índice mayor o igual). Así el líder tiene todas las entradas
    comprometidas.
  - **Replicación**: el líder envía `AppendEntries` con el índice y el término de la entrada anterior; el seguidor rechaza si no coincide, y el líder retrocede hasta el punto común y sobrescribe lo que sigue
    (**propiedad de coincidencia de registros**).
  - **Compromiso**: una entrada está comprometida cuando el líder la tiene replicada en una mayoría **y es de su término actual**; las anteriores se comprometen con ella. Contar réplicas de entradas de
    términos anteriores puede perder datos (figura 8 del artículo).
  - En producción: etcd (Kubernetes), Consul, CockroachDB, TiKV, Kafka (KRaft).
- **Bizantino**: con nodos que mienten hacen falta `N ≥ 3f + 1` (4 para tolerar 1, 10 para tolerar 3) y quórums de `2f + 1`, para que dos quórums compartan al menos `f + 1` nodos, uno de ellos honrado. PBFT (Castro y Liskov,
  1999) y sus sucesores (HotStuff, Tendermint) se usan en cadenas de bloques con permisos.

> [!example] Ejemplo resuelto 2: la regla de compromiso de Raft
> Un líder del término 4 con términos por índice `1 1 2 2 3 4 4` y `commitIndex = 4`. Si `matchIndex = [7, 5, 5, 3, 7]`, el mayor índice replicado en una mayoría (el tercero de mayor a menor) es 5, pero la
> entrada 5 es del término 3: **no** puede comprometerla por recuento, y `commitIndex` sigue en 4. Con `[7, 6, 6, 3, 7]`, el índice 6 es del término 4: se compromete el 6 y, con él, el 5.

## 7. Transacciones distribuidas

- **Compromiso en dos fases** (2PC): el coordinador pide a todos que se **preparen** (dejar todo listo y durable, y votar) y, si todos votan sí, ordena **confirmar**. Sin fallos, `4n` mensajes con `n`
  participantes. Su problema es que **se bloquea**: si el coordinador cae tras la preparación, los participantes no pueden decidir solos y retienen sus cerrojos. Se mitiga replicando el coordinador con
  consenso (como hace Spanner con Paxos).
- **Sagas**: una secuencia de transacciones locales con **compensaciones** que deshacen los pasos hechos si uno falla; sin aislamiento, pero sin bloqueo. Es el patrón habitual entre microservicios.
- **Spanner**: 2PC sobre grupos Paxos, marcas de TrueTime y espera de compromiso: transacciones **externamente consistentes** (linealizables) en todo el planeta.
- **Bandeja de salida transaccional** (*outbox*): para modificar la base de datos y publicar un evento sin 2PC, se escribe el evento en una tabla dentro de la misma transacción y un proceso aparte lo publica.

## 8. CRDT y consistencia eventual fuerte

Un **CRDT** (Shapiro et al., 2011) es un tipo de datos cuyas réplicas se pueden modificar sin coordinación y **siempre convergen** al fusionarse, porque la fusión es **conmutativa, asociativa e idempotente**
(un semirretículo): da igual el orden y las repeticiones.

- **G-Counter**: un contador por réplica; fusionar es tomar el máximo de cada componente, y el valor es la suma. **PN-Counter**: dos G-Counter, uno de sumas y otro de restas.
- **Registro LWW** (gana la última escritura, con marcas): sencillo, pero pierde actualizaciones concurrentes.
- **OR-Set** (conjunto con eliminación observada): cada inserción lleva una etiqueta única y una eliminación solo borra las etiquetas que **vio**; una inserción concurrente con la eliminación sobrevive ("gana la
  inserción").
- **Secuencias** (RGA, Logoot, los algoritmos de Yjs y Automerge) para la edición colaborativa de texto.
- La **difusión causal** con relojes vectoriales entrega cada mensaje solo cuando se han entregado todos los que lo causaron; con CRDT basados en operaciones es la base de las aplicaciones *local-first*.

## 9. Particionado, pertenencia y detección de fallos

- **Hash consistente** (Karger et al., 1997): nodos y claves en un anillo; cada clave va al siguiente nodo. Al quitar un nodo solo se mueven **sus** claves (una fracción `1/N`), frente a casi todas con
  `hash mod N`. Con **nodos virtuales** (muchos puntos por nodo) el reparto se equilibra. Alternativas: particiones por rango (Bigtable, CockroachDB) y *rendezvous hashing*.
- **Detectores de fallos**: un tiempo de espera convierte "lento" en "caído", con falsos positivos inevitables (FLP). El detector **φ de acumulación** (Cassandra, Akka) da una sospecha continua según la
  distribución de los latidos.
- **Gossip** (protocolos epidémicos): cada nodo intercambia estado con otros al azar; la información llega a todos en `O(log N)` rondas. SWIM combina gossip con sondas indirectas para la pertenencia.
- **Arrendamientos y cercado**: un líder con un arrendamiento (*lease*) de tiempo limitado puede servir lecturas sin consultar a la mayoría si los relojes no derivan más de lo previsto; para protegerse de un
  líder antiguo que "despierta" se usan **testigos de cercado** (*fencing tokens*) crecientes que el almacenamiento comprueba.

## 10. Diseñar para la red real

- **Semánticas de entrega**: como mucho una vez, al menos una vez, y "exactamente una vez", que en realidad es **al menos una vez más procesamiento idempotente** (o deduplicación por identificador).
- **Idempotencia** y **claves de idempotencia** en las API (como en los pagos de Stripe); reintentos con **espera exponencial y aleatoria** (*jitter*) para no provocar avalanchas; **plazos** propagados y
  **disyuntores** (*circuit breakers*).
- Las **falacias de la computación distribuida** (Deutsch y otros, Sun Microsystems): la red es fiable, la latencia es cero, el ancho de banda es infinito, la red es segura, la topología no cambia, hay un
  administrador, el transporte no cuesta, la red es homogénea. Todas son falsas.

## 11. Probar y verificar

- **Jepsen** (Kingsbury): genera carga, inyecta particiones, pausas y saltos de reloj, registra la historia y comprueba la linealizabilidad (con Knossos o Elle). Ha encontrado pérdidas de datos en buena parte
  de las bases de datos distribuidas que ha analizado.
- **Simulación determinista** (FoundationDB, TigerBeetle): todo el sistema corre en un proceso con red, discos y relojes simulados y una semilla, y cualquier fallo se reproduce exactamente.
- **Especificación formal**: TLA+ y PlusCal (usados en AWS para DynamoDB y S3) con el comprobador de modelos TLC; Raft tiene una especificación TLA+ de sus autores (`sys-verificacion-formal`).
- **Observabilidad**: trazas distribuidas (OpenTelemetry), registros con identificadores de petición y métricas por réplica.

## 12. Comprobar con un programa

En Python, ejecutado en `python:3.12-slim`: difusión causal con relojes vectoriales (los mensajes llegan desordenados y se entregan en orden causal), un PN-Counter que converge con fusiones parciales en
orden aleatorio, y hash consistente con y sin nodos virtuales, midiendo el equilibrio de la carga y comprobando que al quitar un nodo solo se mueven sus claves (con 20 000 claves y 10 nodos, la desviación de
la carga baja de unas 900 claves a unas 200 con 100 nodos virtuales, y se mueve un 9,8 %).

```python
import bisect
import hashlib
import random
import statistics


# 1. Relojes vectoriales y entrega causal.
class Proceso:
    def __init__(self, i, n):
        self.i, self.v, self.retenidos, self.entregados = i, [0] * n, [], []

    def difunde(self, texto):
        self.v[self.i] += 1
        return (self.i, list(self.v), texto)

    def recibe(self, m):
        self.retenidos.append(m)
        avanza = True
        while avanza:
            avanza = False
            for msg in list(self.retenidos):
                de, v, texto = msg
                listo = v[de] == self.v[de] + 1 and all(v[j] <= self.v[j] for j in range(len(v)) if j != de)
                if listo:
                    self.v[de] += 1
                    self.entregados.append(texto)
                    self.retenidos.remove(msg)
                    avanza = True


p = [Proceso(i, 3) for i in range(3)]
m1 = p[0].difunde("m1")
p[1].recibe(m1)
m2 = p[1].difunde("m2 (responde a m1)")
m3 = p[0].difunde("m3")
for m in (m2, m3, m1):  # llegan desordenados a P3
    p[2].recibe(m)
assert p[2].entregados == ["m1", "m2 (responde a m1)", "m3"], p[2].entregados
print("entrega causal en P3:", p[2].entregados)


# 2. PN-Counter: converge con cualquier orden de fusión.
class PNCounter:
    def __init__(self, yo, n):
        self.yo, self.p, self.m = yo, [0] * n, [0] * n

    def suma(self, k):
        (self.p if k >= 0 else self.m)[self.yo] += abs(k)

    def fusiona(self, otro):
        self.p = [max(a, b) for a, b in zip(self.p, otro.p)]
        self.m = [max(a, b) for a, b in zip(self.m, otro.m)]

    def valor(self):
        return sum(self.p) - sum(self.m)


rnd = random.Random(7)
replicas = [PNCounter(i, 4) for i in range(4)]
esperado = 0
for _ in range(500):
    r, k = rnd.randrange(4), rnd.randint(-5, 5)
    replicas[r].suma(k)
    esperado += k
    if rnd.random() < 0.3:  # fusiones parciales en cualquier momento
        a, b = rnd.sample(range(4), 2)
        replicas[a].fusiona(replicas[b])
for _ in range(3):  # tras suficientes rondas de intercambio, todas convergen
    for a in range(4):
        for b in range(4):
            replicas[a].fusiona(replicas[b])
assert {r.valor() for r in replicas} == {esperado}
print("PN-Counter convergente:", esperado)


# 3. Hash consistente con nodos virtuales.
def h(s):
    return int.from_bytes(hashlib.sha256(s.encode()).digest()[:8], "big")


class Anillo:
    def __init__(self, nodos, virtuales):
        self.puntos = sorted((h(f"{n}#{k}"), n) for n in nodos for k in range(virtuales))
        self.claves = [p for p, _ in self.puntos]

    def nodo(self, clave):
        i = bisect.bisect(self.claves, h(clave)) % len(self.puntos)
        return self.puntos[i][1]


claves = [f"usuario:{i}" for i in range(20000)]
for virtuales in (1, 100):
    nodos = [f"n{i}" for i in range(10)]
    antes = Anillo(nodos, virtuales)
    reparto = [sum(1 for c in claves if antes.nodo(c) == n) for n in nodos]
    despues = Anillo(nodos[:-1], virtuales)
    movidas = sum(1 for c in claves if antes.nodo(c) != despues.nodo(c))
    # solo cambian las claves del nodo retirado: exactamente las que tenía
    assert movidas == reparto[-1]
    print(f"virtuales={virtuales:3}: carga media {statistics.mean(reparto):.0f}, desviación {statistics.pstdev(reparto):6.1f}, "
          f"claves movidas al quitar un nodo {movidas} ({100 * movidas / len(claves):.1f} %)")
```

## 13. Errores típicos

- Usar el reloj de pared para ordenar eventos o medir duraciones; creer que las marcas de Lamport implican causalidad.
- Confiar en "gana la última escritura" sin aceptar que pierde datos.
- Reintentar operaciones que no son idempotentes.
- Interpretar CAP como "elige dos de tres", o creer que una base de datos "AP" es simplemente mejor.
- Implementar consenso a mano sin especificación ni pruebas con fallos; contar réplicas de términos anteriores en Raft.
- Un cerrojo distribuido sin testigo de cercado: un proceso pausado por la recolección de basura despierta creyendo que aún lo tiene.
- Suponer que las particiones son raras: en una nube grande ocurren a diario.
- Probar solo con la red perfecta del portátil.

## 14. Resumen

- Asíncrono, síncrono y parcialmente síncrono; caída, omisión, bizantino; seguridad y vitalidad.
- NTP (`θ`, `δ`), Lamport (`a → b ⇒ L(a) < L(b)`), vectoriales (`a → b ⇔ V(a) < V(b)`), HLC, TrueTime y espera de compromiso de unos `2ε`.
- Replicación con líder (síncrona o asíncrona) y sin líder (`R + W > N`); linealizable, secuencial, causal, eventual y garantías de sesión.
- CAP durante particiones; PACELC añade latencia frente a consistencia.
- FLP; mayorías `2f + 1`; Paxos; Raft (términos, restricción de elección, coincidencia de registros, compromiso solo del término actual); bizantino `3f + 1`.
- 2PC (bloqueante, `4n` mensajes), sagas, Spanner, *outbox*.
- CRDT: G-Counter, PN-Counter, LWW, OR-Set, secuencias; difusión causal.
- Hash consistente y nodos virtuales; detectores φ; gossip; arrendamientos y testigos de cercado.
- Idempotencia, reintentos con *jitter*, plazos; Jepsen, simulación determinista, TLA+.

## Repaso: lo que debe quedarte dentro de un mes

1. Lamport ordena de forma coherente con la causalidad; solo los vectoriales detectan la concurrencia.
2. `R + W > N` para que las lecturas vean la última escritura; mayorías de `2f + 1` para tolerar `f` caídas.
3. En Raft solo gana quien tiene el registro más actualizado, y solo se comprometen por recuento entradas del término actual.
4. Una fusión conmutativa, asociativa e idempotente converge sin coordinación (CRDT).
5. "Exactamente una vez" es al menos una vez más idempotencia.

## Siguiente

`sys-verificacion-formal` (TLA+ y comprobación de modelos) y, en la práctica, replicar con Raft el almacén de [[proy-sys-kv-rust]].
