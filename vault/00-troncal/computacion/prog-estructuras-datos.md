---
id: prog-estructuras-datos
title: "Estructuras de datos: listas, pilas, tablas hash, árboles y grafos"
area: bajo-nivel
trunk_level: 7
prerequisites: [prog-python-fundamentos, mat-combinatoria-probabilidad-basica]
academic_sources:
  - "Cormen, T. H.; Leiserson, C. E.; Rivest, R. L.; Stein, C. Introduction to Algorithms, 4ª ed. MIT Press, 2022."
  - "Sedgewick, R.; Wayne, K. Algorithms, 4ª ed. Addison-Wesley, 2011."
  - "Knuth, D. E. The Art of Computer Programming, vol. 1: Fundamental Algorithms, 3ª ed. Addison-Wesley, 1997."
  - "Python Software Foundation. Python Documentation: Data Structures, collections, heapq y TimeComplexity (docs.python.org/3)."
hints:
  - "Concepto: una estructura de datos es una forma de organizar la información para que ciertas operaciones sean baratas. Cada elección es un compromiso (lo que ganas en búsqueda lo pierdes en inserción, o en memoria). Para predecir un resultado, simula la estructura a mano dibujándola paso a paso."
  - "Herramienta: collections.deque para colas y pilas eficientes, heapq para montículos, dict y set para tablas hash, OrderedDict para una caché LRU; y para grafos, diccionarios de listas. Comprueba tu simulación escribiendo la misma estructura en 10 líneas de Python y ejecutándola con un caso pequeño."
  - "Documentación oficial: docs.python.org/3/library/collections.html (deque, OrderedDict, Counter), docs.python.org/3/library/heapq.html y wiki.python.org/moin/TimeComplexity (coste de las operaciones de list, dict, set y deque); Cormen et al., capítulos sobre estructuras de datos elementales, tablas hash, árboles de búsqueda, montículos y algoritmos de grafos."
exercises:
  - id: pila-pop-push
    tier: 1
    prompt: |
      Una pila empieza vacía y se ejecutan estas operaciones en orden: `push 4, push 9, pop, push 2, push 7, pop, pop, push 5` (`push x` apila `x`; `pop` desapila el último).
      ¿Qué elemento queda **arriba** (en el tope) al final? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: cola-fifo
    tier: 1
    prompt: |
      Una cola empieza vacía. Se ejecutan: `e1, e2, e3, d, e4, d, e5, d`, donde `eN` encola el elemento `N` y `d` desencola el primero (el que lleva más tiempo). ¿Qué elementos salen, y en qué orden?
      Respuesta: los números de los elementos desencolados, separados por punto y coma, por ejemplo «1;2;3».
    answers: ["sha256:bf0829b96c02d5926aac91b3e215550ee729da83061ea0be5974a6821b1bbc88"]
  - id: parentesis-equilibrados
    tier: 1
    prompt: |
      Una cadena de paréntesis está **equilibrada** si cada `(`, `[` o `{` se cierra en el orden correcto (se comprueba con una pila). De estas seis cadenas, ¿cuántas están equilibradas?
      `(())`, `(()`, `([)]`, `{[()]}`, `)(`, `((()))()`. Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: altura-abb
    tier: 2
    prompt: |
      Se insertan, en este orden, las claves `50, 30, 70, 20, 40, 60, 80, 35` en un árbol binario de búsqueda inicialmente vacío (menores a la izquierda; mayores o iguales a la derecha).
      ¿Cuál es la **altura** del árbol, contada como el número de **niveles** (un solo nodo tiene altura $1$)? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: tres-minimos
    tier: 2
    prompt: |
      Se insertan `5, 3, 8, 1, 9, 2` en un montículo mínimo (cola de prioridad) con `heapq.heappush`, y se extraen tres elementos con `heappop`. ¿Cuánto suman los tres extraídos? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: evaluacion-posfija
    tier: 2
    prompt: |
      Evalúa con una pila la expresión en notación **posfija** `3 4 + 2 * 7 -`. Respuesta: un entero.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: tabla-hash-cadenas
    tier: 2
    prompt: |
      Una tabla hash de $7$ cubetas usa $h(k) = k \bmod 7$ y resuelve las colisiones por **encadenamiento**. Se insertan las claves `3, 10, 17, 24, 6, 13`. ¿Cuántas claves tiene la cadena **más larga**?
      Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: arbol-completo
    tier: 2
    prompt: |
      ¿Cuántos nodos tiene un árbol binario **completo** (todos los niveles llenos) con niveles numerados de $0$ a $10$ (la raíz es el nivel $0$)? Respuesta: un entero.
    answers: ["sha256:adde7bf0e33b11361d40f4de29102a7c23e91a14078409b597701c7cb2134204"]
  - id: anillo-de-josefo
    tier: 2
    prompt: |
      Diez personas numeradas del $1$ al $10$ forman un círculo. Empezando por la $1$, se elimina de forma repetida **una de cada tres** (la 3, la 6, la 9, la 2...) hasta que queda una.
      ¿Qué número tiene la persona superviviente? (Es el problema de Josefo; se simula con una cola circular.) Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: laberinto-bfs
    tier: 3
    prompt: |
      En este laberinto (`#` pared, `.` libre, `S` inicio, `E` salida) solo se puede mover arriba, abajo, izquierda o derecha, de casilla en casilla:

      ~~~
      S.#.....
      .##.###.
      ....#...
      .####.#.
      ......#E
      ~~~

      ¿Cuántos **pasos** tiene el camino más corto de `S` a `E`? (Una búsqueda en anchura lo calcula.) Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: componentes-conexas
    tier: 3
    prompt: |
      Un grafo no dirigido tiene los vértices $1, \dots, 10$ y estas aristas: `1-2, 2-3, 4-5, 6-7, 7-8, 8-6, 9-9` (la `9-9` es un bucle). ¿Cuántas **componentes conexas** tiene (los vértices aislados cuentan)?
      Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: cache-lru
    tier: 3
    prompt: |
      Una caché **LRU** (se expulsa el elemento usado hace más tiempo) tiene capacidad $3$ y empieza vacía. Se piden, en orden, los elementos: `1, 2, 3, 1, 4, 2, 5, 1, 2, 3, 4, 5`. ¿Cuántos **fallos** (peticiones de un elemento que no está en caché) hay?
      Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: nodos-de-un-trie
    tier: 3
    prompt: |
      Se construye un **trie** (árbol de prefijos) con las palabras `car, cart, care, dog, do`. ¿Cuántos nodos tiene, **sin contar la raíz** (un nodo por cada prefijo distinto no vacío)? Respuesta: un entero.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: camino-minimo-ponderado
    tier: 3
    prompt: |
      Un grafo no dirigido tiene las aristas (con pesos): `A-B:4, A-C:2, B-C:1, B-D:5, C-D:8, C-E:10, D-E:2, D-F:6, E-F:3`. ¿Cuál es el coste del **camino más barato** de `A` a `F` (algoritmo de Dijkstra)? Respuesta: un entero.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: heapify-lista
    tier: 3
    prompt: |
      Se aplica `heapq.heapify` a la lista `[9, 4, 7, 1, 3]` (montículo **mínimo** almacenado en un array, con los hijos del índice $i$ en $2i + 1$ y $2i + 2$). ¿Cómo queda la lista?
      Respuesta: los cinco números separados por punto y coma.
    answers: ["sha256:737decb78a7aed67cdd562f1b269523c605953c09ff6424cd80167e666ddd7f1"]
  - id: heappush-lista
    tier: 3
    prompt: |
      Se parte de un montículo mínimo vacío y se hace `heappush` de `7, 2, 9, 4` por ese orden. ¿Cómo queda la lista interna? Respuesta: los cuatro números separados por punto y coma.
    answers: ["sha256:ffe36feee3bf923b73e16bdfff703eccd0efdddc2d96cd7da236499cc7df37b3"]
---

# Estructuras de datos: listas, pilas, tablas hash, árboles y grafos

Un programa es **algoritmos más datos**, y de cómo se organicen los datos depende que una operación tarde microsegundos o años. Buscar un nombre en una lista desordenada de mil millones de entradas es inviable; en una tabla hash,
inmediato. Un buscador, un sistema operativo, un videojuego, una base de datos o un compilador usan siempre un puñado de estructuras clásicas. Aquí las aprendes: cómo funcionan por dentro, cuánto cuesta cada operación y
cuándo usar cada una. Es uno de los conocimientos que más separa a quien programa por tanteo de quien programa con criterio.

## Objetivos

Al terminar sabrás:

1. Distinguir un **tipo abstracto de datos** de su implementación y razonar sobre el coste de sus operaciones.
2. Usar y construir listas, pilas, colas, tablas hash, árboles de búsqueda, montículos y grafos.
3. Recorrer árboles y grafos (en profundidad y en anchura) y calcular caminos mínimos.
4. Elegir la estructura adecuada para cada problema.
5. Conocer los fallos típicos de seguridad y rendimiento asociados (colisiones hash, árboles degenerados).

> [!question] Test de entrada
> 1. ¿Cuántos pasos hace, como máximo, la búsqueda lineal de un valor en una lista de $1000$ elementos? 2. ¿Y la búsqueda binaria si está ordenada? 3. ¿Qué diferencia hay entre una pila y una cola?
>
> Respuestas: $1000$; unos $10$ ($\lceil\log_2 1000\rceil$); la pila saca el **último** que entró (LIFO), la cola el **primero** (FIFO).

## 1. Para qué sirve

- **Rendimiento**: elegir bien convierte un programa inservible en uno rápido sin cambiar nada más.
- **Problemas clásicos**: orden de ejecución (colas), deshacer (pila), diccionarios y cachés (hash), rutas y redes (grafos), prioridad (montículos), jerarquías (árboles).
- **Seguridad**: los ataques de colisión sobre tablas hash y los árboles desbalanceados provocan denegaciones de servicio.
- **Entrevistas y práctica profesional**: es la base común de todo el diseño de software.

## 2. Tipos abstractos de datos y coste

Un **tipo abstracto de datos** (TAD) define **qué operaciones** ofrece (por ejemplo, una *pila*: apilar, desapilar, ver el tope) sin decir **cómo** se implementa. Una misma interfaz puede implementarse de varias maneras con costes distintos.
El coste se mide con la **notación $O$** (que se formaliza en el nodo de algoritmos): $O(1)$ constante, $O(\log n)$ logarítmico, $O(n)$ lineal, $O(n\log n)$, $O(n^2)$ cuadrático.

| Estructura | Acceso por posición | Buscar | Insertar / borrar |
|---|:---:|:---:|:---:|
| Array / `list` | $O(1)$ | $O(n)$ | final $O(1)$ amortizado; medio $O(n)$ |
| Lista enlazada | $O(n)$ | $O(n)$ | $O(1)$ dado el nodo |
| `deque` | extremos $O(1)$ | $O(n)$ | extremos $O(1)$ |
| Tabla hash (`dict`, `set`) | — | $O(1)$ medio | $O(1)$ medio |
| Árbol de búsqueda **equilibrado** | — | $O(\log n)$ | $O(\log n)$ |
| Montículo | mínimo $O(1)$ | $O(n)$ | $O(\log n)$ |

## 3. Arrays y listas

Un **array** guarda los elementos **contiguos** en memoria: acceder al elemento $i$ es calcular una dirección ($O(1)$). La `list` de Python es un array **dinámico**: cuando se llena, reserva uno mayor (aproximadamente $1{,}125\times$ a $2\times$)
y copia. Con duplicación, **añadir al final es $O(1)$ amortizado**: copiar $n$ elementos cuesta $n$, pero ocurre una de cada $n$ veces. Insertar o borrar en medio es $O(n)$ (hay que desplazar).

Una **lista enlazada** guarda cada elemento en un nodo con un puntero al siguiente: insertar tras un nodo conocido es $O(1)$, pero llegar al elemento $i$ exige recorrer ($O(n)$) y los nodos dispersos en memoria aprovechan mal la caché
del procesador (ver [[ing-arquitectura-computadores]]); en la práctica el array gana casi siempre.

## 4. Pilas y colas

- **Pila** (*stack*, LIFO: último en entrar, primero en salir): `push`, `pop`, `peek`. Se implementa con una lista (`append`, `pop`). La **pila de llamadas** de un programa es una pila: cada función apila su marco y lo desapila al retornar
  (ver [[sys-c-memoria]]).
- **Cola** (*queue*, FIFO: primero en entrar, primero en salir): `enqueue`, `dequeue`. En Python hay que usar `collections.deque` (`popleft` es $O(1)$); `list.pop(0)` es $O(n)$.

```python
from collections import deque

pila = []
pila.append(4); pila.append(9); pila.pop()      # pila == [4]

cola = deque()
cola.append("a"); cola.append("b")
cola.popleft()                                   # 'a'  (el primero que entró)
```

**Aplicación: paréntesis equilibrados.** Se recorre la cadena apilando cada apertura; cada cierre debe coincidir con la que está en el tope. Al final la pila debe quedar vacía.

```python
def equilibrada(s):
    pares = {")": "(", "]": "[", "}": "{"}
    pila = []
    for c in s:
        if c in "([{":
            pila.append(c)
        elif c in pares:
            if not pila or pila.pop() != pares[c]:
                return False
    return not pila

assert equilibrada("{[()]}") and not equilibrada("([)]") and not equilibrada("(()")
```

**Notación posfija.** `3 4 + 2 * 7 -` significa $(3 + 4)\cdot 2 - 7$ y se evalúa con una pila: los números se apilan; un operador toma los dos de arriba y apila el resultado. **Las colas** sirven para planificar tareas por orden de llegada, para
las colas de impresión y de mensajes, y para recorrer grafos en anchura.

## 5. Tablas hash

Una **tabla hash** guarda pares clave-valor y ofrece búsqueda, inserción y borrado en tiempo $O(1)$ **medio**. Idea: una **función hash** $h$ convierte la clave en un número y se guarda el par en la posición $h(k) \bmod m$ de un array de $m$ cubetas.

**Colisiones.** Dos claves distintas pueden caer en la misma cubeta (por el principio del palomar, es inevitable si hay más claves que cubetas; y por la paradoja del cumpleaños, ocurre **antes** de lo que parece: ver
[[mat-combinatoria-probabilidad-basica]]). Dos estrategias:

- **Encadenamiento**: cada cubeta es una lista. Con $m = 7$ y $h(k) = k \bmod 7$, las claves $3, 10, 17, 24$ caen todas en la cubeta $3$ (cadena de $4$).
- **Direccionamiento abierto**: si la cubeta está ocupada, se prueba la siguiente (*sondeo lineal*).

El **factor de carga** $\alpha = \frac{n}{m}$ controla el coste: con $\alpha$ pequeño, las cadenas son cortas; cuando crece, se **redimensiona** (se duplica $m$ y se reinsertan las claves). Con una buena función hash, el coste medio es $O(1)$.

```python
def nueva(m=7):
    return [[] for _ in range(m)]

def insertar(t, clave):
    t[clave % len(t)].append(clave)

t = nueva()
for k in [3, 10, 17, 24, 6, 13]:
    insertar(t, k)
assert max(len(c) for c in t) == 4            # la cubeta 3 tiene 3, 10, 17, 24
```

**En Python:** `dict` y `set` son tablas hash. Las claves deben ser **hashables** (inmutables: números, cadenas, tuplas; no listas). Desde Python 3.7 el `dict` conserva el orden de inserción.
**Seguridad (ataque de colisiones):** si un atacante conoce la función hash puede enviar claves que colisionen todas y degradar cada operación a $O(n)$, tumbando un servidor (*hash flooding*, publicado en 2011). Por eso Python **aleatoriza**
el hash de las cadenas en cada ejecución y las bibliotecas modernas usan funciones con una clave secreta (como SipHash). Un hash para tablas **no** es un hash criptográfico (SHA-256), que busca otra propiedad.

## 6. Árboles

Un **árbol** es una estructura jerárquica: una **raíz** de la que cuelgan **hijos**; los nodos sin hijos son **hojas**. La **altura** es el número de niveles. Un **árbol binario** tiene como mucho dos hijos por nodo. Un árbol **completo** de
niveles $0$ a $h$ tiene $1 + 2 + \cdots + 2^h = 2^{h+1} - 1$ nodos (serie geométrica): con $h = 10$, $2047$; y recíprocamente, $n$ nodos pueden caber en altura $\approx\log_2 n$.

**Recorridos.** *Profundidad:* **preorden** (nodo, izquierdo, derecho), **inorden** (izquierdo, nodo, derecho), **postorden** (izquierdo, derecho, nodo); *anchura* (por niveles, con una **cola**).

**Árbol binario de búsqueda (ABB):** para cada nodo, las claves del subárbol izquierdo son **menores** y las del derecho **mayores o iguales**. Buscar es descender comparando: cuesta $O(h)$, con $h$ la altura. **El recorrido inorden de un ABB
da las claves ordenadas.**

```python
class Nodo:
    def __init__(self, clave):
        self.clave, self.izq, self.der = clave, None, None

def insertar(nodo, clave):
    if nodo is None:
        return Nodo(clave)
    if clave < nodo.clave:
        nodo.izq = insertar(nodo.izq, clave)
    else:
        nodo.der = insertar(nodo.der, clave)
    return nodo

def inorden(nodo):
    return [] if nodo is None else inorden(nodo.izq) + [nodo.clave] + inorden(nodo.der)

def altura(nodo):
    return 0 if nodo is None else 1 + max(altura(nodo.izq), altura(nodo.der))

raiz = None
for k in [50, 30, 70, 20, 40, 60, 80]:
    raiz = insertar(raiz, k)
assert inorden(raiz) == [20, 30, 40, 50, 60, 70, 80] and altura(raiz) == 3
```

**El peligro:** insertar claves **ya ordenadas** produce un árbol que es una cadena ($h = n$) y todo cuesta $O(n)$. Los **árboles equilibrados** (AVL, rojo-negro) se reorganizan con rotaciones para garantizar $h = O(\log n)$. Los
**árboles B** (varios hijos por nodo, hechos para el disco) son la base de los índices de las bases de datos y de muchos sistemas de archivos. Un **trie** (árbol de prefijos) guarda palabras letra a letra y
sirve para el autocompletado: con las palabras *car, cart, care, dog, do* tiene $c,a,r,t,e,d,o,g$ $= 8$ nodos (sin contar la raíz).

## 7. Montículos y colas de prioridad

Una **cola de prioridad** devuelve siempre el elemento de **menor** (o mayor) prioridad. Se implementa con un **montículo binario**: un árbol binario casi completo en el que **cada nodo es menor que sus hijos** (montículo mínimo) y que se guarda en un **array**:
los hijos del índice $i$ están en $2i + 1$ y $2i + 2$, y el padre en $\lfloor (i-1)/2\rfloor$.

- **Insertar** (`push`): se añade al final y se **sube** mientras sea menor que su padre: $O(\log n)$.
- **Extraer el mínimo** (`pop`): se saca la raíz, se pone el último elemento en su lugar y se **baja** intercambiando con el menor hijo: $O(\log n)$.
- **Construir** un montículo con $n$ elementos (`heapify`): $O(n)$.

Ordenar sacando el mínimo $n$ veces es la **ordenación por montículo** ($O(n\log n)$). Se usa en planificadores del sistema operativo, en el algoritmo de Dijkstra y para «los $k$ mayores» de un flujo.

```python
import heapq

h = []
for x in [7, 2, 9, 4]:
    heapq.heappush(h, x)
assert h == [2, 4, 9, 7]                  # el mínimo siempre está en h[0]
assert [heapq.heappop(h) for _ in range(4)] == [2, 4, 7, 9]
```

## 8. Grafos

Un **grafo** es un conjunto de **vértices** unidos por **aristas** (dirigidas o no, con o sin peso). Modela redes sociales, mapas de carreras, internet, dependencias entre tareas, circuitos.
Se representa con una **lista de adyacencia** (un diccionario vértice $\to$ lista de vecinos; memoria $O(V + E)$, la opción habitual) o una **matriz de adyacencia** ($O(V^2)$, útil si es denso).

**Búsqueda en anchura (BFS)** explora por capas con una **cola** y calcula el **camino más corto en número de aristas** desde un origen. **Búsqueda en profundidad (DFS)** avanza todo lo posible y retrocede, con una **pila** (o recursión); sirve para
detectar ciclos, ordenar tareas por dependencias (**orden topológico**) y hallar **componentes conexas**.

```python
from collections import deque

def bfs(grafo, origen):
    dist = {origen: 0}
    cola = deque([origen])
    while cola:
        u = cola.popleft()
        for v in grafo[u]:
            if v not in dist:
                dist[v] = dist[u] + 1
                cola.append(v)
    return dist

g = {"A": ["B", "C"], "B": ["A", "D"], "C": ["A", "D"], "D": ["B", "C", "E"], "E": ["D"]}
assert bfs(g, "A") == {"A": 0, "B": 1, "C": 1, "D": 2, "E": 3}
```

**Caminos mínimos con pesos (Dijkstra).** Para pesos **no negativos**: se mantiene un montículo con las distancias provisionales; se extrae siempre el vértice más cercano y se **relajan** sus aristas. Coste $O((V + E)\log V)$.
Es el algoritmo detrás de las rutas de un navegador GPS (con mejoras) y del enrutamiento de redes (OSPF). Con pesos negativos hay que usar Bellman-Ford.

```python
def dijkstra(grafo, origen):                  # grafo: {u: [(v, peso), ...]}
    dist = {origen: 0}
    h = [(0, origen)]
    while h:
        d, u = heapq.heappop(h)
        if d > dist.get(u, float("inf")):
            continue                          # entrada obsoleta
        for v, w in grafo[u]:
            if d + w < dist.get(v, float("inf")):
                dist[v] = d + w
                heapq.heappush(h, (d + w, v))
    return dist
```

## 9. Otras estructuras útiles y cómo elegir

- **Conjuntos** (`set`): pertenencia en $O(1)$ y operaciones de unión, intersección y diferencia.
- **Caché LRU** (*least recently used*): un `OrderedDict` que mueve al final lo usado y expulsa el primero: los navegadores y los sistemas de archivos la usan. Con capacidad $3$ y las peticiones $1,2,3,1,4,2,5,1,2,3,4,5$ hay $10$ fallos.
- **Union-Find**: agrupa elementos en conjuntos y consulta si dos están en el mismo en casi $O(1)$; sirve para componentes conexas y el algoritmo de Kruskal.

| Necesito... | Estructura |
|---|---|
| acceso por índice | `list` |
| añadir/quitar en ambos extremos | `deque` |
| deshacer, evaluar expresiones, DFS | pila |
| orden de llegada, BFS | cola |
| «¿está?» y contar rápido | `set`, `dict`, `Counter` |
| siempre el menor (o el mayor) | montículo (`heapq`) |
| datos **ordenados** con inserciones | árbol equilibrado / `sorted` + `bisect` |
| relaciones entre objetos, rutas | grafo |

## 10. Errores típicos

- Usar una `list` y `x in lista` en un bucle ($O(n^2)$) en lugar de un `set` ($O(n)$ total).
- `list.pop(0)` como cola: es $O(n)$; usa `deque`.
- Modificar una lista mientras se recorre; claves mutables en un `dict`.
- Árbol de búsqueda con datos ordenados (degenerado): usa uno equilibrado.
- Olvidar marcar los vértices visitados en BFS/DFS (bucle infinito en grafos con ciclos).
- Usar Dijkstra con pesos negativos.
- Confundir pila con cola (LIFO frente a FIFO) y un hash de tabla con un hash criptográfico.

## Repaso: lo que debe quedarte dentro de un mes

1. Pila LIFO, cola FIFO; `deque` para ambas con $O(1)$; `list.pop(0)` es $O(n)$.
2. Tabla hash: $O(1)$ medio, colisiones inevitables; encadenamiento y factor de carga.
3. ABB: $O(h)$; inorden da orden; degenera si los datos llegan ordenados; árbol completo $2^{h+1} - 1$ nodos.
4. Montículo: array, padre $\lfloor (i-1)/2\rfloor$, `push`/`pop` $O(\log n)$.
5. Grafos: lista de adyacencia; BFS con cola (camino mínimo sin pesos), DFS con pila; Dijkstra con montículo (pesos $\ge 0$).

## Siguiente

`prog-algoritmos` formaliza la **complejidad** y estudia las técnicas generales (ordenación, dividir y vencer, programación dinámica, voraces), y `sys-bases-datos` usa árboles B e índices hash a gran escala.
