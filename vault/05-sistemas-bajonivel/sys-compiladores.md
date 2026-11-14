---
id: sys-compiladores
title: "Compiladores: análisis léxico y sintáctico (LL, LR, Pratt), semántica y tipos, representación intermedia y SSA, flujo de datos y optimización, generación de código, asignación de registros y entornos de ejecución"
area: bajo-nivel
trunk_level: 11
prerequisites: [sys-ensamblador-x86-64, prog-estructuras-datos, prog-algoritmos]
academic_sources:
  - "Aho, A. V.; Lam, M. S.; Sethi, R.; Ullman, J. D. Compilers: Principles, Techniques, and Tools, 2ª ed. Pearson/Addison-Wesley, 2006 (el «libro del dragón»)."
  - "Cooper, K. D.; Torczon, L. Engineering a Compiler, 3ª ed. Morgan Kaufmann, 2022."
  - "Appel, A. W. Modern Compiler Implementation in ML. Cambridge University Press, 1998."
  - "Nystrom, R. Crafting Interpreters. Genever Benning, 2021 (también en craftinginterpreters.com)."
  - "Cytron, R.; Ferrante, J.; Rosen, B. K.; Wegman, M. N.; Zadeck, F. K. Efficiently Computing Static Single Assignment Form and the Control Dependence Graph. ACM TOPLAS 13(4), 1991."
  - "Pierce, B. C. Types and Programming Languages. MIT Press, 2002 (cap. 22, reconstrucción de tipos); Jones, R.; Hosking, A.; Moss, E. The Garbage Collection Handbook, 2ª ed. CRC Press, 2023."
exercises:
  - id: lexico
    tier: 1
    prompt: |
      Con identificadores `[A-Za-z_][A-Za-z0-9_]*`, números con parte decimal opcional, el operador `>=` como un solo token y los símbolos `= * ( ) + ;`, ¿cuántos tokens tiene `x1 = 3.14 * (y + 42) >= z_2;`?

      Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: dfa-minimo
    tier: 1
    prompt: |
      ¿Cuántos estados tiene el autómata finito determinista **mínimo** que reconoce `(a|b)*abb`?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: conjunto-follow
    tier: 1
    prompt: |
      En la gramática `E → T E'`, `E' → + T E' | ε`, `T → F T'`, `T' → * F T' | ε`, `F → ( E ) | id`, ¿cuál es FOLLOW(T')?

      Respuesta: los símbolos en orden ASCII separados por espacios (`$` es el fin de la entrada).
    answers: ["sha256:e2bb6502313f339218c4b597ca667e3bd5dda764c4ebc9960209c88900befbba"]
  - id: precedencia
    tier: 1
    prompt: |
      Con las precedencias habituales (`**` mayor que `*` y `/`, que son mayores que `+` y `-`), `**` asociativo por la derecha y `/` división real, ¿cuánto vale `2 + 3 * 4 ** 2 ** 0.5 - 10 / 4`?

      Respuesta: el valor, redondeado a 6 decimales si hace falta.
    answers: ["sha256:5f0aa60a202628ebb7b432a422ab77d2388fd3746e748c696f93a99274fb1626"]
  - id: nodos-del-ast
    tier: 1
    prompt: |
      ¿Cuántos nodos tiene el árbol de sintaxis abstracta de `(a + b) * c - d / e` (los paréntesis no generan nodos)?

      Respuesta: un número.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: tres-direcciones
    tier: 1
    prompt: |
      Al traducir `a = (b + c) * (b + c) - d` a código de tres direcciones con un temporal por operación, ¿cuántos temporales salen, y cuántos con numeración de valores (eliminando la subexpresión común)?

      Respuesta: `sin;con`.
    answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
  - id: maquina-de-pila
    tier: 1
    prompt: |
      ¿Qué queda en la cima de la pila tras ejecutar `PUSH 3, PUSH 4, ADD, PUSH 5, MUL, PUSH 2, SUB, DUP, MUL`?

      Respuesta: un número.
    answers: ["sha256:8cf04f0d07191f042b1d11880ab80618c2680e8e03bbacc60f9e31160d4fa87f"]
  - id: conflictos-ll1
    tier: 2
    prompt: |
      ¿Cuántas celdas de la tabla de análisis LL(1) de `S → a A | a B`, `A → b`, `B → c` tienen más de una producción? ¿Cómo lo arreglarías?

      Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: estados-lr0
    tier: 2
    prompt: |
      ¿Cuántos estados tiene la colección canónica de conjuntos de elementos LR(0) de la gramática aumentada `E' → E`, `E → E + T | T`, `T → T * F | F`, `F → ( E ) | id`?

      Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: vivacidad
    tier: 2
    prompt: |
      Programa: `1: a = b + c`, `2: d = a * 2`, `3: b = d - e`, `4: if b > 0 goto 1`, `5: return a`. ¿Qué variables están vivas a la entrada de la instrucción 1?

      Respuesta: en orden alfabético separadas por espacios.
    answers: ["sha256:3f5319c51e359ee04fabcbf3a1f8dcd9c9ed613ac5b89e389fc1f7708274b550"]
  - id: asignacion-de-registros
    tier: 2
    prompt: |
      Seis variables viven en los intervalos `a [1,6)`, `b [2,4)`, `c [3,9)`, `d [5,8)`, `e [7,10)`, `f [9,12)`. ¿Cuántos registros hacen falta como mínimo para que ninguna se vuelque a memoria?

      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: funciones-phi
    tier: 2
    prompt: |
      Un grafo de flujo tiene los bloques `B0 → B1`, `B1 → B2, B3`, `B2 → B4`, `B3 → B4`, `B4 → B1, B5`. `x` se define en B0 y B2; `y` en B0, B3 y B4; `z` solo en B0. ¿Cuántas funciones φ coloca la construcción de SSA mínima (con fronteras de dominancia)?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: inferencia-de-tipos
    tier: 2
    prompt: |
      ¿Qué tipo principal infiere Hindley-Milner para `fun f x -> f (f x)`?

      Respuesta: el tipo, usando `'a`, `'b`… y `->`.
    answers: ["sha256:b712fd58ea609d4dc86f13f01ebb2073aedb43cf19fb069b58ddff44adac219c"]
  - id: recoleccion-de-basura
    tier: 2
    prompt: |
      En un montón, las raíces son `r1` y `r2`, y las referencias son `r1 → a, b`; `r2 → c`; `a → d`; `b → d, e`; `d → a`; `f → g`; `g → f`; `h → a`. Contando las raíces, ¿cuántos objetos marca un recolector de marcado y barrido y cuántos libera?

      Respuesta: `marcados;liberados`.
    answers: ["sha256:affd7224c792f22eaeb6e2b0dc6414c6d7a6bcb18ad6eeda6f6086de7b1d1a63"]
  - id: generar-ensamblador
    tier: 3
    prompt: |
      Genera ensamblador x86-64 de pila para `(17 * 3 + 4) % 6 - 2 * (9 - 14)` (semántica de C: el resto conserva el signo del dividendo), enlázalo con un `main` en C y ejecútalo. ¿Qué imprime?

      Respuesta: un número.
    answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: optimizacion
    tier: 3
    prompt: |
      Aplica plegado de constantes, propagación de copias, simplificación algebraica (`x + 0 = x`) y eliminación de código muerto (solo `r` se usa después) a: `t1 = 4 * 8`, `t2 = t1 + 2`, `t3 = x * t2`, `t4 = y + 0`, `t5 = t1 - 32`, `r = t3 + t5`, `t6 = x * 3`. Sin fusionar instrucciones (cada instrucción que sobrevive conserva su destino), ¿por qué constante queda multiplicado `x` y cuántas instrucciones quedan?

      Respuesta: `constante;instrucciones`.
    answers: ["sha256:f16db4618c947f8a02e9ae3ec19b35cb155ce4d12b3f679fa6d5c0f6b83e4791"]
---

Un compilador traduce un programa de un lenguaje a otro conservando su significado, y casi siempre lo mejora por el camino. Es la pieza de software que más teoría de la informática junta en un
solo sitio: autómatas y expresiones regulares para leer el texto, gramáticas libres de contexto para entender su estructura, lógica y unificación para los tipos, grafos y retículos para analizar
el flujo de datos, coloreado de grafos para asignar registros y el modelo de la máquina de [[sys-ensamblador-x86-64]] para emitir código. Aunque nunca escribas un compilador completo, lo que aprendes
aquí lo usarás siempre: analizadores de formatos y de configuraciones, lenguajes de dominio específico, linters, formateadores, motores de consultas, intérpretes de plantillas, y la capacidad de leer
lo que GCC, Clang o `rustc` hacen con tu código y por qué.

## Objetivos

Al terminar sabrás:

1. Describir las fases de un compilador y qué representación pasa de una a otra.
2. Pasar de expresiones regulares a autómatas (Thompson, subconjuntos, minimización) y escribir un analizador léxico.
3. Escribir gramáticas sin ambigüedad, calcular FIRST y FOLLOW, construir tablas LL(1) y escribir analizadores descendentes recursivos y de Pratt.
4. Construir la colección LR(0), entender SLR, LR(1) y LALR, y diagnosticar conflictos de desplazamiento-reducción.
5. Diseñar el AST, la tabla de símbolos y la comprobación de tipos, e inferir tipos con Hindley-Milner.
6. Traducir a código de tres direcciones, construir el grafo de flujo de control y pasar a forma SSA con fronteras de dominancia.
7. Plantear y resolver análisis de flujo de datos (vivacidad, definiciones que alcanzan) y aplicar las optimizaciones clásicas.
8. Generar código x86-64, asignar registros por coloreado o por barrido lineal, y explicar los entornos de ejecución y la recolección de basura.

## Qué debes dominar antes

[[sys-ensamblador-x86-64]] (registros, pila y convención de llamada), [[prog-estructuras-datos]] (árboles, tablas hash, grafos) y [[prog-algoritmos]] (recorridos de grafos y puntos fijos).

> [!question] Test de entrada
> 1. ¿Qué hace `push rax` con `rsp`?
> 2. ¿Qué recorrido de un árbol binario de expresión da la notación posfija?
> 3. ¿Qué es un punto fijo de una función `f`?
>
> Respuestas: resta 8 a `rsp` y guarda `rax` en `[rsp]`; el recorrido en postorden (hijos y luego el nodo); un valor `x` con `f(x) = x`, que es lo que calculan los algoritmos iterativos de este nodo.

## 1. Para qué sirve

- **Lenguajes y herramientas**: compiladores, intérpretes, máquinas virtuales y compiladores JIT (V8, la JVM HotSpot, PyPy, LuaJIT).
- **Infraestructura**: LLVM y GCC son la base de C, C++, Rust, Swift y Zig; entender su representación intermedia explica el rendimiento de todos ellos.
- **Software corriente**: casi cualquier programa lee un lenguaje (JSON, SQL, expresiones de filtro, plantillas, configuraciones); hacerlo con un analizador de verdad en lugar de expresiones regulares
  encadenadas evita una clase entera de errores y de vulnerabilidades.
- **Seguridad y calidad**: analizadores estáticos, *fuzzers* guiados por cobertura, sanitizadores y desofuscadores son compiladores o se apoyan en sus análisis.

## 2. La estructura de un compilador

El **frontal** (*front end*) depende del lenguaje fuente; el **trasero** (*back end*), de la máquina destino; entre ambos, el **medio** optimiza una **representación intermedia** (RI) independiente de
los dos. Así, con `n` lenguajes y `m` máquinas hacen falta `n + m` piezas en vez de `n · m` (la idea de LLVM y de GCC).

| Fase | Entrada | Salida | Teoría |
|---|---|---|---|
| Análisis léxico | caracteres | tokens | expresiones regulares, autómatas finitos |
| Análisis sintáctico | tokens | árbol de sintaxis | gramáticas libres de contexto, LL y LR |
| Análisis semántico | AST | AST decorado (tipos, símbolos) | sistemas de tipos, unificación |
| Generación de RI | AST | código de tres direcciones, CFG, SSA | traducción dirigida por la sintaxis |
| Optimización | RI | RI mejor | flujo de datos, retículos, dominancia |
| Generación de código | RI | ensamblador | selección de instrucciones, coloreado de grafos, planificación |

Cada fase **detecta errores** en su nivel (un carácter ilegal, un paréntesis sin cerrar, una variable sin declarar, un tipo incompatible) y debe dar mensajes con posición y seguir para informar de más.

## 3. Análisis léxico

El analizador léxico agrupa caracteres en **tokens** (`IDENT`, `NUM`, `>=`…), descarta espacios y comentarios, y anota línea y columna. Cada clase de token se describe con una **expresión
regular**; las reglas de desempate son dos: la **coincidencia más larga** (`>=` es un token, no `>` seguido de `=`; `iffy` es un identificador, no `if` + `fy`) y, a igual longitud, la **regla que
aparece primero** (por eso las palabras clave van antes que los identificadores).

De la expresión al reconocedor hay tres pasos clásicos:

1. **Construcción de Thompson**: cada expresión regular da un autómata finito no determinista (AFN) con transiciones ε, combinando piezas para la concatenación, la alternativa y la estrella.
2. **Construcción de subconjuntos**: cada estado del autómata determinista (AFD) es un conjunto de estados del AFN (su cierre ε). En el peor caso hay `2^n` estados, pero en la práctica son pocos.
3. **Minimización** (Hopcroft, o el refinamiento de particiones de Moore): se parte de {aceptación, no aceptación} y se separan los estados que van a clases distintas con algún símbolo, hasta que no
   cambie nada. El AFD mínimo es único (salvo nombres): sus estados son las clases de **Myhill-Nerode**, las de palabras que se comportan igual ante cualquier sufijo.

> [!example] Ejemplo resuelto 1: el autómata mínimo de `(a|b)*abb`
> Las palabras se distinguen por cuánto del sufijo `abb` llevan ya: nada (`ε`, `b`, `abb` seguido de `b`…), `a`, `ab` o `abb` completo. Cuatro clases, luego cuatro estados: `0 →a 1`, `0 →b 0`,
> `1 →a 1`, `1 →b 2`, `2 →a 1`, `2 →b 3`, `3 →a 1`, `3 →b 0`, con 3 como único estado de aceptación. La construcción de subconjuntos sobre el AFN de Thompson da 5 estados (como en el libro del dragón,
> §3.7) y la minimización funde dos de ellos.

En la práctica, los analizadores léxicos se escriben **a mano** (un `switch` sobre el carácter actual y bucles para identificadores y números; así lo hacen Clang, Go o `rustc`) o se generan con
**flex** o **re2c**. Escrito a mano es fácil de depurar y da los mejores mensajes de error.

## 4. Gramáticas y análisis descendente

Una **gramática libre de contexto** tiene no terminales, terminales, producciones y un símbolo inicial. Una gramática es **ambigua** si una cadena tiene dos árboles de derivación: `E → E + E | E * E | id`
lo es (`a + b * c` admite dos árboles). Se resuelve **estratificando** por precedencia:

```text
E → E + T | T          (suma: menor precedencia, asociativa por la izquierda)
T → T * F | F          (producto)
F → ( E ) | id         (primarios)
```

El **análisis descendente** construye el árbol desde la raíz, eligiendo la producción con el siguiente token. Para que baste un token, la gramática debe ser **LL(1)**, y eso exige dos cosas:

- **Sin recursión por la izquierda**: `E → E + T` haría que el analizador se llamase a sí mismo sin consumir nada. Se reescribe como `E → T E'`, `E' → + T E' | ε`.
- **Sin prefijos comunes**: `S → a A | a B` no sabe qué elegir con `a`; se **factoriza** como `S → a S'`, `S' → A | B`.

Para construir la tabla se calculan dos conjuntos por punto fijo:

- **FIRST(α)**: los terminales con que puede empezar una cadena derivada de α (con ε si α puede ser vacía).
- **FOLLOW(A)**: los terminales que pueden aparecer justo después de `A` en alguna derivación (con `$`, el fin de la entrada, si `A` puede ser el último).

La producción `A → α` va en la celda `[A, t]` para cada `t` de FIRST(α), y, si α puede ser vacía, también para cada `t` de FOLLOW(A). Si alguna celda tiene dos producciones, la gramática **no es
LL(1)**.

> [!example] Ejemplo resuelto 2: FOLLOW(T') en la gramática de expresiones sin recursión izquierda
> Con `E → T E'`, `E' → + T E' | ε`, `T → F T'`, `T' → * F T' | ε`, `F → ( E ) | id`: FOLLOW(E) = {`)`, `$`} (por `F → ( E )` y por ser inicial). FOLLOW(E') = FOLLOW(E). FOLLOW(T) contiene
> FIRST(E') sin ε, que es {`+`}, y, como E' puede ser vacía, FOLLOW(E): {`+`, `)`, `$`}. Y FOLLOW(T') = FOLLOW(T) = {`+`, `)`, `$`}. La celda `[T', +]` lleva `T' → ε`: al ver un `+` el producto ha
> terminado. Es exactamente la tabla del libro del dragón (§4.4).

El **descenso recursivo** convierte cada no terminal en una función. Es lo que usan GCC, Clang, `rustc`, Go, V8 y casi todos los compiladores de producción: es rápido, se depura con un depurador
normal y permite mensajes y **recuperación de errores** a medida (modo pánico: descartar tokens hasta un punto de sincronización como `;` o `}`).

Para las expresiones, el **análisis de Pratt** (precedencia de operadores descendente) sustituye la escalera de funciones por una tabla: cada operador tiene una **potencia de enlace** izquierda y
derecha. Si la derecha es mayor que la izquierda, el operador asocia por la izquierda; si es menor, por la derecha.

```text
expr(min):
  izq = primario()                      // número, identificador, ( expr ), operador prefijo
  mientras el siguiente es un operador op con potencia_izq(op) >= min:
      consume op
      der = expr(potencia_der(op))
      izq = Binario(op, izq, der)
  devuelve izq
```

Con `+` = (10, 11), `*` = (20, 21) y `**` = (31, 30), `2 + 3 * 4 ** 2 ** 0.5` se agrupa como `2 + (3 * (4 ** (2 ** 0.5)))`. El algoritmo de **shunting-yard** de Dijkstra produce el mismo resultado con
una pila de operadores, y es el que verás en calculadoras y motores de fórmulas.

## 5. Análisis ascendente: LR

El **análisis ascendente** construye el árbol desde las hojas: **desplaza** tokens a una pila y **reduce** cuando la cima coincide con el lado derecho de una producción. Reconoce la familia **LR(1)**,
que contiene a todas las LL(1) y admite recursión por la izquierda; es lo que generan **yacc**, **bison** y **menhir**.

- Un **elemento LR(0)** es una producción con un punto: `E → E · + T` significa "he visto `E` y espero `+ T`".
- El **cierre** de un conjunto añade `B → · γ` para cada `B` que aparezca justo detrás de un punto. La función **ir_a(I, X)** avanza el punto sobre `X` y cierra.
- La **colección canónica** son los conjuntos alcanzables desde el cierre de `E' → · E`. Para la gramática de expresiones salen **12 estados** (I0 a I11 en el libro del dragón).
- **SLR(1)** reduce `A → α ·` solo con los tokens de FOLLOW(A). **LR(1)** lleva el token de anticipación dentro de cada elemento (más preciso, muchos más estados); **LALR(1)** funde los estados LR(1)
  con el mismo núcleo: tiene tantos estados como LR(0) y es lo que hacen yacc y bison.

Un **conflicto de desplazamiento-reducción** aparece cuando un estado puede hacer las dos cosas con el mismo token. El ejemplo clásico es el `else` colgante (`if a then if b then s1 else s2`): se
resuelve **desplazando**, que asocia el `else` al `if` más cercano. Los generadores informan de los conflictos y los resuelven con declaraciones de precedencia (`%left`, `%right`); un conflicto que no
entiendes es un fallo de la gramática, no algo que silenciar.

## 6. Árbol de sintaxis abstracta, semántica y tipos

El **AST** guarda solo la estructura que importa: `(a + b) * c - d / e` tiene 9 nodos (cinco hojas y cuatro operadores), sin paréntesis ni no terminales auxiliares. Se diseña como un tipo suma
(`enum` en Rust, variante o jerarquía en C++) y se recorre con funciones recursivas o con el patrón visitante.

El **análisis semántico** comprueba lo que la gramática no puede expresar:

- **Ámbitos y tabla de símbolos**: una pila de tablas hash (una por bloque); al entrar en un bloque se apila, al salir se desapila. Resuelve cada uso a su declaración y detecta variables no
  declaradas o duplicadas.
- **Tipos**: cada nodo recibe un tipo según reglas de inferencia (`Γ ⊢ e1 : int`, `Γ ⊢ e2 : int` ⇒ `Γ ⊢ e1 + e2 : int`). Se insertan las **conversiones implícitas** explícitamente en el árbol.
- **Inferencia Hindley-Milner** (ML, OCaml, Haskell y, de forma local, Rust): se da a cada expresión desconocida una variable de tipo, cada construcción genera **ecuaciones**, y la **unificación**
  las resuelve (con la **comprobación de ocurrencia**, que impide `α = α → β`). El resultado es el **tipo principal**, el más general. Con `let` se **generaliza**: `let id = fun x -> x` tiene tipo
  `∀α. α → α` y puede usarse con enteros y con cadenas.

> [!example] Ejemplo resuelto 3: el tipo de `fun f x -> f (f x)`
> Sean `f : φ` y `x : ξ`. `f x` exige `φ = ξ → ρ1`; `f (f x)` exige `φ = ρ1 → ρ2`. Unificar `ξ → ρ1` con `ρ1 → ρ2` da `ξ = ρ1` y `ρ1 = ρ2`. Todo es la misma variable: el tipo es
> `('a -> 'a) -> 'a -> 'a`. La función solo se puede aplicar a funciones de un tipo en sí mismo, cosa que el programador no ha escrito en ninguna parte.

## 7. Representaciones intermedias y SSA

- **Código de tres direcciones**: instrucciones con un operador y como mucho tres operandos (`t1 = b + c`). Cada operación intermedia recibe un temporal; `a = (b + c) * (b + c) - d` necesita 4, y 3 si la
  **numeración de valores** detecta que `b + c` ya se calculó.
- **Bloques básicos y grafo de flujo de control (CFG)**: un bloque es una secuencia sin saltos salvo al final; los arcos son los saltos posibles. Un **líder** es la primera instrucción, el destino de un
  salto o la instrucción que sigue a un salto.
- **Dominancia**: `d` domina a `n` si todo camino desde la entrada hasta `n` pasa por `d`. La **frontera de dominancia** de `d` son los nodos donde la dominancia de `d` termina: `n` tiene un predecesor
  dominado por `d`, pero `d` no domina estrictamente a `n`.
- **Forma SSA** (*static single assignment*): cada variable se asigna **una sola vez**; donde confluyen definiciones distintas se coloca una función **φ** (`x3 = φ(x1, x2)`). Cytron et al. (1991)
  probaron que basta poner φ en la **frontera de dominancia iterada** de los bloques que definen cada variable. SSA hace triviales muchos análisis (cada uso tiene una sola definición) y es la RI de
  LLVM, de GCC (GIMPLE en SSA), de HotSpot y de V8.

> [!example] Ejemplo resuelto 4: dónde van las φ
> Bloques `B0 → B1`, `B1 → B2, B3`, `B2 → B4`, `B3 → B4`, `B4 → B1, B5`. Dominadores: B0 domina todo; B1 domina B2, B3, B4 y B5; B4 domina B5. Fronteras: DF(B2) = DF(B3) = {B4} (la unión del `if`),
> DF(B4) = {B1} (la vuelta del bucle) y DF(B1) = {B1}. `x`, definida en B2, recibe φ en B4, y esa φ es una definición nueva que pide otra en B1: 2 φ. `y` (B3 y B4) también da 2. `z`, definida solo
> en B0, ninguna. Total: **4**. La SSA **podada** quitaría las φ cuyo resultado no se usa nunca, lo que exige saber qué variables están vivas.

## 8. Análisis de flujo de datos y optimización

Un análisis de flujo de datos asocia a cada punto del programa un valor de un **retículo** y lo calcula como **punto fijo** de ecuaciones locales, iterando hasta que nada cambia (termina porque las
funciones son monótonas y el retículo tiene altura finita).

| Análisis | Dirección | Confluencia | Ecuación | Uso |
|---|---|---|---|---|
| Variables vivas | hacia atrás | unión | `in = uso ∪ (out − def)` | asignación de registros, código muerto |
| Definiciones que alcanzan | hacia delante | unión | `out = gen ∪ (in − kill)` | propagación de constantes, cadenas uso-definición |
| Expresiones disponibles | hacia delante | intersección | `out = e_gen ∪ (in − e_kill)` | eliminación de subexpresiones comunes global |

Las optimizaciones clásicas, todas apoyadas en esos análisis:

- **Plegado y propagación de constantes** (`t1 = 4 * 8` → `t1 = 32` y se sustituye en sus usos); en SSA, la versión fuerte es la propagación condicional dispersa (SCCP, Wegman y Zadeck).
- **Simplificación algebraica y reducción de fuerza**: `x + 0 → x`, `x * 2 → x << 1`, `x / 8 → x >> 3` (solo sin signo, o con corrección para los negativos).
- **Eliminación de subexpresiones comunes** (numeración de valores) y **propagación de copias**.
- **Eliminación de código muerto**: se borra lo que define valores que nadie usa y no tiene efectos laterales.
- **Bucles**: movimiento de código invariante (LICM), variables de inducción, desenrollado y vectorización.
- **Expansión en línea** (*inlining*): la optimización que más habilita a las demás, porque expone el código de la función al contexto de la llamada.

> [!example] Ejemplo resuelto 5: variables vivas
> `1: a = b + c`, `2: d = a * 2`, `3: b = d - e`, `4: if b > 0 goto 1`, `5: return a`. Hacia atrás, iterando hasta el punto fijo: a la entrada de 5 está viva `a`; de 4, `a`, `b`, `c` y `e` (lo que necesitan 1 y 5,
> más `b`); de 3, `a`, `c`, `d` y `e` (`b` se define aquí); de 2, `a`, `c` y `e` (`d` se define aquí); de 1, `b`, `c` y `e` (`a` se define aquí). `c` y `e` nunca se definen: llegan vivas desde
> fuera y siguen vivas en todo el bucle.

El comportamiento indefinido de C ([[sys-c-profesional]]) entra justo aquí: el optimizador **supone** que no ocurre, y por eso un desbordamiento con signo o un acceso fuera de límites hacen que se
borren comprobaciones o se transformen bucles de forma sorprendente.

## 9. Generación de código

- **Selección de instrucciones**: se cubre el árbol de la RI con **patrones** de la máquina (con programación dinámica para elegir la cobertura más barata, o con reglas de reescritura como en
  LLVM). `x86-64` permite `lea rax, [rbx + rcx*4 + 8]`, que hace en una instrucción una suma, un producto y otra suma.
- **Código de pila**: la forma más sencilla de generar código es recorrer el árbol en postorden emitiendo `push` de operandos y, para cada operador, `pop` de dos, operar y `push`. Es lento pero correcto, y es
  el punto de partida del proyecto `proy-sys-compilador`.
- **Asignación de registros**: dos variables **interfieren** si están vivas a la vez; en el **grafo de interferencias**, asignar `k` registros es **colorear con `k` colores** (Chaitin, 1981). Es un
  problema NP-completo en general, y se usa la heurística de simplificar (quitar nodos con menos de `k` vecinos), volcar a memoria (*spill*) si no se puede y seleccionar. Briggs la mejoró con el
  coloreado optimista; el **barrido lineal** (Poletto y Sarkar, 1999) recorre los intervalos de vida en orden y es el que usan los JIT por su rapidez. Para intervalos (y para programas en SSA), el
  número de registros necesario es el **máximo de variables vivas a la vez**.
- **Convención de llamada**: el código generado debe respetar el ABI (System V en Linux): argumentos en `rdi`, `rsi`, `rdx`, `rcx`, `r8`, `r9`; resultado en `rax`; registros que conserva el que llama
  y el llamado; alineación de la pila a 16 bytes antes de un `call`.
- **Planificación de instrucciones**: reordenar para ocultar latencias y aprovechar varias unidades de ejecución, respetando las dependencias.

## 10. Entornos de ejecución

- **Registros de activación**: cada llamada reserva un marco en la pila con argumentos, dirección de retorno, marco anterior y variables locales; el compilador calcula los desplazamientos.
- **Cierres**: una función anidada que usa variables de fuera necesita llevarlas consigo (un **entorno** en el montón) si puede sobrevivir a la función que la creó; es lo que hace Rust con sus cierres y
  lo que Lua llama *upvalues*.
- **Recolección de basura**: un objeto está vivo si es **alcanzable** desde las raíces (pila, registros, variables globales).
  - **Conteo de referencias**: libera al instante, pero no recoge ciclos (CPython añade un detector de ciclos; Rust ofrece `Rc` y `Weak`).
  - **Marcado y barrido**: marca lo alcanzable recorriendo el grafo y barre el resto; recoge ciclos.
  - **Copia** (Cheney): copia lo vivo a otro semiespacio; compacta y su coste es proporcional a lo vivo, no al montón.
  - **Generacional**: la mayoría de los objetos mueren jóvenes, así que se recoge a menudo la generación joven y rara vez la vieja; necesita **barreras de escritura** para las referencias de viejos a
    jóvenes. Los recolectores de la JVM (G1, ZGC) y de V8 son generacionales y en gran parte concurrentes.

## 11. Intérpretes, bytecode y JIT

Un **intérprete de árbol** recorre el AST; es sencillo y lento. Una **máquina virtual de bytecode** (CPython, Lua, la JVM, la de *Crafting Interpreters*) compila a instrucciones compactas para una
máquina de pila o de registros y las ejecuta en un bucle con `switch` o con *threaded code*. Un **compilador JIT** observa qué código se ejecuta mucho, lo compila a código máquina con la información de
tipos recogida durante la ejecución (especialización), y **desoptimiza** si una suposición deja de cumplirse. Es la arquitectura por niveles de HotSpot y V8.

## 12. Comprobar con un programa

Un compilador completo en miniatura en Python: analizador léxico con posiciones, analizador de Pratt con asociatividad por la derecha para `**` y menos unario, plegado de constantes sobre el AST,
compilación a bytecode de pila, máquina virtual, y generación de ensamblador x86-64 de pila. Se comprueba contra la evaluación de Python y con errores de sintaxis a propósito.

```python
import re

TOKEN = re.compile(r"\s*(?:(?P<num>\d+)|(?P<id>[A-Za-z_]\w*)|(?P<op>\*\*|[-+*/%()]))")


def lexico(texto):
    pos, toks = 0, []
    while texto[pos:].strip():
        m = TOKEN.match(texto, pos)
        if not m:
            col = len(texto) - len(texto[pos:].lstrip())
            raise SyntaxError(f"carácter inesperado en la columna {col + 1}: {texto[col]!r}")
        tipo = m.lastgroup
        toks.append((tipo, m.group(tipo), m.start(tipo)))
        pos = m.end()
    toks.append(("fin", "", len(texto)))
    return toks


POTENCIA = {"+": (10, 11), "-": (10, 11), "*": (20, 21), "/": (20, 21), "%": (20, 21), "**": (31, 30)}
UNARIO = 25  # el menos unario liga más que * pero menos que **: -2 ** 2 = -(2 ** 2)


class Analizador:
    def __init__(self, texto):
        self.toks, self.i = lexico(texto), 0

    def mira(self):
        return self.toks[self.i]

    def toma(self, valor=None):
        t = self.toks[self.i]
        if valor is not None and t[1] != valor:
            raise SyntaxError(f"se esperaba {valor!r} en la columna {t[2] + 1} y llegó {t[1] or 'el final'!r}")
        self.i += 1
        return t

    def programa(self):
        arbol = self.expr(0)
        if self.mira()[0] != "fin":
            raise SyntaxError(f"sobra {self.mira()[1]!r} en la columna {self.mira()[2] + 1}")
        return arbol

    def expr(self, minimo):
        tipo, valor, col = self.toma()
        if tipo == "num":
            izq = ("num", int(valor))
        elif tipo == "id":
            izq = ("var", valor)
        elif valor == "(":
            izq = self.expr(0)
            self.toma(")")
        elif valor == "-":
            izq = ("neg", self.expr(UNARIO))
        else:
            raise SyntaxError(f"se esperaba una expresión en la columna {col + 1}")
        while True:
            op = self.mira()[1]
            if op not in POTENCIA or POTENCIA[op][0] < minimo:
                return izq
            self.toma()
            izq = (op, izq, self.expr(POTENCIA[op][1]))


def opera(op, a, b):
    if op in "/%" and b == 0:
        raise ZeroDivisionError("división por cero")
    q = abs(a) // abs(b) * (1 if (a >= 0) == (b >= 0) else -1) if op in "/%" else 0  # división truncada, como en C
    return {"+": a + b, "-": a - b, "*": a * b, "/": q, "%": a - b * q, "**": a ** b if op == "**" else 0}[op]


def pliega(n):
    if n[0] in ("num", "var"):
        return n
    if n[0] == "neg":
        h = pliega(n[1])
        return ("num", -h[1]) if h[0] == "num" else ("neg", h)
    a, b = pliega(n[1]), pliega(n[2])
    if a[0] == b[0] == "num" and not (n[0] in "/%" and b[1] == 0):
        return ("num", opera(n[0], a[1], b[1]))
    if n[0] == "+" and b == ("num", 0):
        return a
    if n[0] == "*" and b == ("num", 1):
        return a
    return (n[0], a, b)


def compila(n, codigo):
    if n[0] == "num":
        codigo.append(("PUSH", n[1]))
    elif n[0] == "var":
        codigo.append(("LOAD", n[1]))
    elif n[0] == "neg":
        compila(n[1], codigo)
        codigo.append(("NEG", None))
    else:
        compila(n[1], codigo)
        compila(n[2], codigo)
        codigo.append(("BIN", n[0]))
    return codigo


def ejecuta(codigo, entorno):
    pila = []
    for op, arg in codigo:
        if op == "PUSH":
            pila.append(arg)
        elif op == "LOAD":
            pila.append(entorno[arg])
        elif op == "NEG":
            pila.append(-pila.pop())
        else:
            b, a = pila.pop(), pila.pop()
            pila.append(opera(arg, a, b))
    assert len(pila) == 1
    return pila[0]


def ensamblador(codigo):
    lineas = []
    for op, arg in codigo:
        if op == "PUSH":
            lineas.append(f"  pushq ${arg}")
        elif op == "NEG":
            lineas += ["  negq (%rsp)"]
        elif op == "BIN" and arg in "+-*":
            ins = {"+": "addq", "-": "subq", "*": "imulq"}[arg]
            lineas += ["  popq %rcx", "  popq %rax", f"  {ins} %rcx, %rax", "  pushq %rax"]
        elif op == "BIN" and arg in "/%":
            lineas += ["  popq %rcx", "  popq %rax", "  cqto", "  idivq %rcx", "  pushq %rdx" if arg == "%" else "  pushq %rax"]
        else:
            raise NotImplementedError(op if op != "BIN" else arg)
    return lineas + ["  popq %rax", "  ret"]


casos = {
    "2 + 3 * 4": 14, "(2 + 3) * 4": 20, "2 ** 3 ** 2": 512, "-2 ** 2": -4, "(-2) ** 2": 4,
    "10 - 4 - 3": 3, "-7 / 2": -3, "-7 % 3": -1, "(17 * 3 + 4) % 6 - 2 * (9 - 14)": 11, "x * (y + 1) - x": 30,
}
entorno = {"x": 5, "y": 6}
for texto, esperado in casos.items():
    arbol = Analizador(texto).programa()
    plegado = pliega(arbol)
    v1 = ejecuta(compila(arbol, []), entorno)
    v2 = ejecuta(compila(plegado, []), entorno)
    assert v1 == v2 == esperado, (texto, v1, v2, esperado)
    if "/" not in texto and "%" not in texto:  # Python // y % redondean hacia abajo; C trunca hacia cero
        assert v1 == eval(texto, {}, dict(entorno)), texto
    print(f"{texto:34} = {v1:5}   bytecode: {len(compila(arbol, [])):2} → plegado: {len(compila(plegado, [])):2}")

for malo in ["2 +", "(1 + 2", "3 $ 4", "1 2"]:
    try:
        Analizador(malo).programa()
        raise AssertionError(f"debería fallar: {malo}")
    except SyntaxError as e:
        print(f"{malo!r:10} → {e}")

asm = ensamblador(compila(Analizador("(17 * 3 + 4) % 6 - 2 * (9 - 14)").programa(), []))
assert asm[-2:] == ["  popq %rax", "  ret"] and asm.count("  idivq %rcx") == 1
print(f"ensamblador de pila: {len(asm)} instrucciones")
```

El mismo ensamblador, enlazado con un `main` en C, se ejecuta en el ejercicio de nivel 3 con GCC.

## 13. Errores típicos

- Gramáticas ambiguas o con la precedencia mal estratificada; recursión por la izquierda en un analizador descendente.
- Silenciar conflictos de bison sin entenderlos.
- Mezclar análisis léxico y sintáctico, o resolver con expresiones regulares lo que necesita una gramática (paréntesis anidados).
- Mensajes de error sin posición o que se detienen en el primero.
- Olvidar que `/` y `%` de C truncan hacia cero mientras que en Python redondean hacia abajo; plegar `x / 0` en tiempo de compilación.
- Optimizaciones que no conservan la semántica: reordenar operaciones de coma flotante (no son asociativas), eliminar un acceso `volatile`, mover código con efectos laterales.
- Iterar un análisis de flujo de datos sin comprobar la monotonía, o comparar conjuntos por su tamaño cuando comparten el mismo objeto en memoria.
- Generar código que no respeta el ABI (pila sin alinear a 16 bytes, registros del llamado sin conservar).

## 14. Resumen

- Fases: léxico (regex → AFN → AFD mínimo) → sintáctico (LL, LR, Pratt) → semántico (ámbitos, tipos, HM) → RI (tres direcciones, CFG, SSA) → optimización (flujo de datos) → código (selección,
  registros, planificación).
- LL(1): sin recursión izquierda ni prefijos comunes; FIRST y FOLLOW; descenso recursivo en producción; Pratt con potencias de enlace.
- LR: elementos, cierre, ir_a, colección canónica; SLR, LR(1), LALR; conflictos y el `else` colgante.
- SSA con φ en la frontera de dominancia iterada (Cytron); vivacidad hacia atrás con unión; definiciones que alcanzan hacia delante.
- Plegado, propagación, CSE, código muerto, LICM, *inlining*; el comportamiento indefinido como licencia del optimizador.
- Registros: grafo de interferencias y coloreado (Chaitin, Briggs) o barrido lineal; System V ABI.
- Ejecución: marcos, cierres, conteo de referencias, marcado y barrido, copia, generacional; bytecode y JIT.

## Repaso: lo que debe quedarte dentro de un mes

1. Coincidencia más larga y prioridad de reglas en el léxico; el AFD mínimo es único.
2. Para LL(1), quita la recursión izquierda y factoriza; si una celda tiene dos producciones, no es LL(1).
3. En Pratt, potencia derecha mayor que la izquierda da asociatividad por la izquierda.
4. Las φ van en la frontera de dominancia iterada; la vivacidad se calcula hacia atrás.
5. Registros necesarios = máximo de variables vivas a la vez (en SSA); si no caben, se vuelca a memoria.

## Siguiente

El proyecto `proy-sys-compilador`, donde escribirás un compilador de un lenguaje pequeño hasta ensamblador x86-64 ejecutable; `sys-lenguajes-programacion` (semántica formal y diseño de
lenguajes) y `sys-optimizacion-rendimiento` (leer lo que el compilador ha hecho con tu código).
