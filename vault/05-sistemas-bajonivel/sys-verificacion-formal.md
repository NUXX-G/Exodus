---
id: sys-verificacion-formal
title: "Verificación formal: lógica de Hoare y precondición más débil, invariantes y terminación, comprobación de modelos (LTL y CTL), SAT y SMT, TLA+, interpretación abstracta, ejecución simbólica y asistentes de demostración"
area: bajo-nivel
trunk_level: 12
prerequisites: [sys-concurrencia, mat-logica-demostraciones]
academic_sources:
  - "Huth, M.; Ryan, M. Logic in Computer Science: Modelling and Reasoning about Systems, 2ª ed. Cambridge University Press, 2004."
  - "Baier, C.; Katoen, J.-P. Principles of Model Checking. MIT Press, 2008."
  - "Kroening, D.; Strichman, O. Decision Procedures: An Algorithmic Point of View, 2ª ed. Springer, 2016; Lamport, L. Specifying Systems (TLA+). Addison-Wesley, 2002."
  - "Hoare, C. A. R. An Axiomatic Basis for Computer Programming. CACM 12(10), 1969; Dijkstra, E. W. Guarded commands, nondeterminacy and formal derivation of programs. CACM 18(8), 1975; Cousot, P.; Cousot, R. Abstract interpretation. POPL 1977."
  - "Klein, G. et al. seL4: Formal Verification of an OS Kernel. SOSP 2009; Leroy, X. Formal verification of a realistic compiler. CACM 52(7), 2009; Newcombe, C. et al. How Amazon Web Services Uses Formal Methods. CACM 58(4), 2015."
exercises:
  - id: precondicion-mas-debil
    tier: 1
    prompt: |
      Calcula wp(x := 2x + 3, x ≥ 11) sobre los enteros. ¿Cuál es el menor x que la cumple?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: contar-modelos
    tier: 1
    prompt: |
      ¿Cuántas asignaciones de a, b, c, d satisfacen (a ∨ b) ∧ (¬a ∨ c) ∧ (¬b ∨ ¬c ∨ d)?

      Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: invariante-de-bucle
    tier: 1
    prompt: |
      Para `i = 0; s = 0; while (i < n) { i++; s += i; }`, ¿cuál de estas propiedades es un invariante del bucle? a) s = i²; b) 2s = i(i + 1); c) s ≤ i; d) s = i + 1.

      Respuesta: la letra (o letras, separadas por espacios).
    answers: ["sha256:3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"]
  - id: ltl-en-lazo
    tier: 1
    prompt: |
      ¿Satisface la palabra infinita {p} {} ({q} {p} {})^ω la fórmula G(p → F q)?

      Respuesta: `si` o `no`.
    answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: estados-de-peterson
    tier: 1
    prompt: |
      Modela el algoritmo de Peterson para dos procesos con contador de programa 0 (fuera) → 1 (flag = 1) → 2 (turno = otro) → 3 (espera hasta ¬flag_otro ∨ turno ≠ otro, entra) → 4 (sección crítica) → 0 (flag = 0), con las variables flag₀, flag₁ y turno, todo a 0 al empezar. ¿Cuántos estados son alcanzables?

      Respuesta: un número.
    answers: ["sha256:5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca"]
  - id: triple-de-hoare
    tier: 1
    prompt: |
      ¿Es válida la terna de Hoare {x ≥ 0} y := x·x {y ≥ x} sobre los enteros?

      Respuesta: `si` o `no`.
    answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: palomar
    tier: 2
    prompt: |
      Codifica en CNF el principio del palomar con 3 palomas y 2 huecos (cada paloma en algún hueco; dos palomas no comparten hueco, con cláusulas de dos literales). ¿Cuántas cláusulas salen y es satisfacible?

      Respuesta: `clausulas;satisfacible` o `clausulas;insatisfacible`.
    answers: ["sha256:4cb056301886bfbd25e3e3aea4ecb47b2d35543939a0fa267d3d40c033cbe198"]
  - id: restricciones-lineales
    tier: 2
    prompt: |
      Resuelve en los enteros x + 2y = 7 y x − y = 1 (como lo haría un resolvedor SMT con aritmética lineal).

      Respuesta: `x;y`.
    answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
  - id: comprobacion-acotada
    tier: 2
    prompt: |
      Un sistema empieza en x = 0 y evoluciona con x' = (5x + 3) mód 16. Con comprobación de modelos acotada, ¿cuál es el menor número de pasos k en el que se alcanza el estado de error x = 13?

      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: interpretacion-abstracta
    tier: 2
    prompt: |
      Con el dominio de intervalos, ensanchamiento en la cabeza del bucle y después estrechamiento, ¿qué intervalo se obtiene para x a la salida de `x = 0; while (x < 100) x += 3;`?

      Respuesta: `min;max`.
    answers: ["sha256:c3f36443c77ff22f37b2a0b8c93fa4bc67439134fd59eecbe96ee89498d9c208"]
  - id: ctl
    tier: 2
    prompt: |
      Estructura de Kripke: s0 → s1, s0 → s2, s1 → s1, s1 → s3, s2 → s0, s3 → s3; p se cumple en s0 y s1, q en s3. ¿En qué estados se cumple EG p y en cuáles AF q?

      Respuesta: `estados_EG;estados_AF`, cada lista en orden y separada por espacios.
    answers: ["sha256:e9c84cdf8ee75205ccb705751553b5714a4cb2fa2634d18b6482ada96c41cac7"]
  - id: ejecucion-simbolica
    tier: 2
    prompt: |
      En `if (x > 10) {…} else {…}; if (x > 20) {…} else {…}; if (x % 2 == 0) {…} else {…}`, ¿cuántos caminos son factibles para algún entero x?

      Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: compromiso-en-dos-fases
    tier: 3
    prompt: |
      Modela TCommit de Lamport con 3 gestores de recursos (estados trabajando, preparado, comprometido, abortado): un gestor trabajando puede prepararse o abortar; uno preparado puede comprometerse si todos están preparados o comprometidos, y abortar si nadie se ha comprometido. ¿Cuántos estados son alcanzables desde «todos trabajando»? (Comprueba también que nunca hay uno comprometido y otro abortado.)

      Respuesta: un número.
    answers: ["sha256:86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef"]
  - id: reinas-con-sat
    tier: 3
    prompt: |
      Codifica el problema de las 6 reinas en SAT (una variable por casilla, al menos una reina por fila, a lo sumo una por fila, columna y diagonal) y cuenta sus modelos. ¿Cuántas soluciones hay?

      Respuesta: un número.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: desbordamiento-en-la-media
    tier: 3
    prompt: |
      La función `uint8_t media(uint8_t x, uint8_t y) { return (uint8_t)(x + y) >> 1; }` calcula la suma en 8 bits. ¿Para cuántos pares (x, y) da un resultado distinto de ⌊(x + y)/2⌋? (Un verificador con vectores de bits lo encuentra de un golpe.)

      Respuesta: un número.
    answers: ["sha256:9f06fb9158aa6c4f2282fc1ddb5514ff914134bc09697e037936280df7084649"]
  - id: wp-con-condicional
    tier: 3
    prompt: |
      Calcula wp(if x > 0 then y := x else y := −x; y := y + 1, y > 3). ¿Cuántos enteros del intervalo [−10, 10] la cumplen?

      Respuesta: un número.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
---

Las pruebas muestran que un programa funciona en los casos que alguien pensó; la **verificación formal** demuestra que funciona en **todos**, o encuentra el caso que nadie pensó. No es teoría lejana:
Amazon especifica con TLA+ los protocolos de S3 y DynamoDB y ha encontrado errores que requerían 35 pasos para manifestarse; el micronúcleo seL4 y el compilador CompCert están demostrados correctos; los
controladores de Windows se verifican con comprobadores de modelos; y Rust lleva un verificador (el comprobador de préstamos) dentro del compilador. Este nodo da las herramientas mentales y prácticas para
razonar con rigor sobre programas, especialmente sobre los concurrentes y distribuidos de [[sys-concurrencia]] y [[sys-sistemas-distribuidos]], donde las pruebas casi nunca bastan.

## Objetivos

Al terminar sabrás:

1. Escribir especificaciones con precondiciones, postcondiciones e invariantes, y demostrar programas con la lógica de Hoare y la precondición más débil.
2. Encontrar invariantes de bucle y funciones de variante para demostrar la terminación.
3. Modelar un sistema como una estructura de transiciones y comprobar propiedades de seguridad y de vitalidad en LTL y CTL.
4. Explicar DPLL y CDCL, codificar problemas en SAT y usar un resolvedor SMT (Z3) para verificar y para encontrar contraejemplos.
5. Especificar un algoritmo en TLA+ y comprobarlo con TLC.
6. Explicar la interpretación abstracta, la ejecución simbólica y los asistentes de demostración, y elegir la técnica adecuada.

## Qué debes dominar antes

[[mat-logica-demostraciones]] (lógica proposicional y de predicados, inducción) y [[sys-concurrencia]] (intercalaciones, exclusión mutua).

> [!question] Test de entrada
> 1. ¿Qué afirma una demostración por inducción?
> 2. ¿Por qué ejecutar muchas veces un programa concurrente no demuestra que sea correcto?
> 3. ¿Qué significa que una fórmula proposicional sea satisfacible?
>
> Respuestas: que una propiedad vale para el caso base y que, si vale para n, vale para n + 1; porque el número de intercalaciones es enorme y la que falla puede no salir nunca en las pruebas; que hay al
> menos una asignación de valores de verdad que la hace verdadera.

## 1. Para qué sirve

- **Protocolos concurrentes y distribuidos** (cerrojos, consenso, cachés coherentes): los errores aparecen en intercalaciones rarísimas que un comprobador de modelos encuentra en segundos.
- **Software crítico**: aviónica (DO-178C admite métodos formales), ferrocarriles (el metro de París se verificó con el método B), medicina, criptografía (HACL*, la criptografía verificada de Firefox y Linux).
- **Seguridad**: los analizadores estáticos de las empresas (Infer de Meta, CodeQL) y los *fuzzers* con ejecución simbólica (KLEE) aplican estas ideas a millones de líneas.
- **Diseño**: escribir la especificación formal obliga a decidir qué debe hacer el sistema, y suele encontrar errores de diseño antes de escribir código.

## 2. Lógica de Hoare y precondición más débil

Una **terna de Hoare** {P} C {Q} dice: si el programa C empieza en un estado que cumple P y termina, acaba en uno que cumple Q (corrección **parcial**; la **total** exige además que termine).

- **Asignación**: {Q[x ↦ E]} x := E {Q}. Hacia atrás: para que tras `x := 2x + 3` valga x ≥ 11, antes debe valer 2x + 3 ≥ 11, es decir, x ≥ 4.
- **Secuencia**, **condicional** (cada rama con su condición) y **consecuencia** (se puede reforzar la precondición y debilitar la postcondición).
- **Bucle**: si I es un **invariante** ({I ∧ B} C {I}), entonces {I} while B do C {I ∧ ¬B}.
- La **precondición más débil** wp(C, Q) de Dijkstra es la condición más general que garantiza Q: wp(x := E, Q) = Q[x ↦ E]; wp(C₁; C₂, Q) = wp(C₁, wp(C₂, Q)); wp(if B then C₁ else C₂, Q) = (B → wp(C₁, Q)) ∧
  (¬B → wp(C₂, Q)). Verificar es comprobar que P → wp(C, Q). Para `if x > 0 then y := x else y := −x; y := y + 1` y Q = y > 3, wp = |x| > 2.

> [!example] Ejemplo resuelto 1: un invariante
> En `i = 0; s = 0; while (i < n) { i++; s += i; }` el invariante es **2s = i(i + 1)** (s = 1 + 2 + … + i): vale al empezar (0 = 0), se conserva (si 2s = i(i + 1), tras i' = i + 1 y s' = s + i', 2s' = i(i + 1) +
> 2(i + 1) = i'(i' + 1)), y al salir (i = n) da s = n(n + 1)/2. Para la **terminación**, una **función de variante** que decrece en cada vuelta y está acotada: n − i.

## 3. Comprobación de modelos

Un sistema se modela como una **estructura de Kripke**: estados, transiciones y las proposiciones que se cumplen en cada estado. El comprobador **explora todos los estados alcanzables** (BFS o DFS con una tabla de
visitados) y comprueba las propiedades.

- **Seguridad** ("nunca pasa nada malo": exclusión mutua, ausencia de interbloqueo): un invariante sobre los estados alcanzables; un contraejemplo es un camino finito.
- **Vitalidad** ("algo bueno acaba pasando": todo proceso que lo pide acaba entrando): necesita caminos infinitos y **equidad** (que un proceso habilitado no se ignore para siempre); un contraejemplo es un lazo.
- **LTL** (lógica temporal lineal) habla de cada ejecución: G (siempre), F (alguna vez), X (en el siguiente), U (hasta). G(pide → F entra) es "todo el que pide, entra". Se comprueba construyendo un autómata de Büchi de
  la negación y buscando un lazo aceptante en el producto.
- **CTL** (ramificada) cuantifica sobre caminos: EG p (existe un camino donde p vale siempre), AF q (en todo camino, alguna vez q). Se calcula con **puntos fijos** sobre conjuntos de estados: EG p es el mayor Z con
  Z = p ∩ pre∃(Z); AF q el menor Z con Z = q ∪ pre∀(Z).
- **Explosión de estados**: n procesos con k estados dan kⁿ. Remedios: reducción de orden parcial, simetría, representación simbólica con **BDD** (McMillan, 1992), y abstracción.

## 4. SAT y SMT

- **SAT**: ¿es satisfacible una fórmula en forma normal conjuntiva? Es NP-completo (Cook, 1971), y aun así los resolvedores modernos resuelven fórmulas industriales con millones de variables. **DPLL**:
  propagación unitaria, elección de un literal y vuelta atrás. **CDCL** añade el **aprendizaje de cláusulas** a partir de los conflictos y los saltos atrás no cronológicos (GRASP, Chaff, MiniSat, CaDiCaL).
- **Codificar** un problema en SAT es un oficio: las 6 reinas con una variable por casilla (4 soluciones), el palomar (3 palomas en 2 huecos: 9 cláusulas, insatisfacible, y difícil para la resolución).
- **SMT** (*Satisfiability Modulo Theories*) añade teorías: aritmética lineal entera y real, **vectores de bits** (aritmética de máquina exacta, con desbordamiento), arrays, tipos de datos. **Z3** (Microsoft
  Research) y cvc5 son los más usados. Se verifica preguntando si existe un contraejemplo: si la negación de la propiedad es insatisfacible, la propiedad vale; si no, el modelo es el contraejemplo.
- **Comprobación acotada** (BMC): desplegar k pasos del sistema en una fórmula y preguntar si se alcanza un error; encuentra contraejemplos cortos muy rápido (CBMC para C, Kani para Rust).

> [!example] Ejemplo resuelto 2: un error de desbordamiento que un verificador encuentra de golpe
> `uint8_t media(uint8_t x, uint8_t y) { return (uint8_t)(x + y) >> 1; }` falla cuando x + y ≥ 256: en 32 640 de los 65 536 pares. Con vectores de bits de 8 bits, Z3 da un contraejemplo (por ejemplo, x = 128,
> y = 128) en milisegundos. La versión correcta es `x / 2 + y / 2 + (x & y & 1)`, y el verificador demuestra que coincide con ⌊(x + y)/2⌋ para todos los pares. El mismo error, en la búsqueda binaria de Java, pasó
> nueve años sin detectarse (Bloch, 2006).

## 5. TLA+

**TLA+** (Lamport) especifica un sistema como un estado inicial `Init` y una relación de siguiente estado `Next` sobre variables, y las propiedades como invariantes (`TypeOK`, `Consistencia`) y fórmulas temporales.
**TLC** las comprueba por exploración explícita; **Apalache**, simbólicamente con SMT; y **TLAPS** permite demostrarlas para cualquier tamaño. El ejemplo canónico es el compromiso de transacciones: con 3 gestores,
TCommit tiene 34 estados alcanzables, y el invariante "nunca hay uno comprometido y otro abortado" se cumple en todos. **PlusCal** permite escribir los algoritmos en una sintaxis parecida a la imperativa y traducirlos a
TLA+.

## 6. Interpretación abstracta, ejecución simbólica y tipos

- **Interpretación abstracta** (Cousot y Cousot, 1977): ejecutar el programa sobre un **dominio abstracto** (signos, intervalos, octógonos, poliedros) que sobreaproxima todos los estados posibles; siempre termina
  gracias al **ensanchamiento** (*widening*), que salta a ±∞ cuando un intervalo crece, y el **estrechamiento** recupera precisión. Para `x = 0; while (x < 100) x += 3;` da x ∈ [100, 102] a la salida (el valor real es
  102). Es **correcta** (nunca omite un error) pero puede dar falsas alarmas. Astrée la usa para demostrar la ausencia de errores de ejecución en el software de control de vuelo del Airbus A380.
- **Ejecución simbólica**: ejecutar con valores simbólicos y acumular la **condición de camino**; un resolvedor SMT decide qué caminos son factibles y genera entradas que los recorren (KLEE, angr). Con tres
  condicionales sobre el mismo x, de los 8 caminos sintácticos solo 6 son factibles.
- **Sistemas de tipos** como verificación ligera: los tipos de Rust impiden las carreras de datos y los accesos tras liberar ([[prog-rust-fundamentos]]); los tipos refinados (Liquid Haskell) y dependientes llevan las
  especificaciones al compilador.

## 7. Asistentes de demostración y sistemas verificados

**Coq/Rocq**, **Isabelle/HOL** y **Lean** comprueban demostraciones escritas por personas con un núcleo pequeño y fiable. Resultados emblemáticos: **CompCert** (un compilador de C demostrado: en las campañas de
*fuzzing* de Csmith fue el único sin errores en su parte verificada), **seL4** (un micronúcleo con la corrección funcional demostrada hasta el binario), el teorema de los cuatro colores y la conjetura de Kepler
(Flyspeck). La biblioteca matemática de Lean (mathlib) está formalizando las matemáticas de grado y posgrado.

## 8. Elegir la técnica

| Necesidad | Técnica |
|---|---|
| Diseño de un protocolo concurrente o distribuido | TLA+ y TLC (o un modelo explícito propio) antes de programar |
| Encontrar errores en código C o Rust | BMC (CBMC, Kani), *fuzzing*, sanitizadores |
| Demostrar la ausencia de errores de ejecución | interpretación abstracta (Astrée, Frama-C) |
| Demostrar una función crítica | contratos y SMT (Dafny, Frama-C/WP, Prusti, Creusot) |
| Corrección total de un sistema | asistentes de demostración (Coq, Isabelle, Lean) |
| Mucho código, poco tiempo | pruebas basadas en propiedades (QuickCheck, Hypothesis, proptest) |

## 9. Comprobar con un programa

En Python puro (ejecutado en `python:3.12-slim`): un resolvedor **DPLL** con propagación unitaria que cuenta modelos y codifica las 6 reinas; un **comprobador de modelos explícito** que explora el algoritmo de
Peterson, comprueba la exclusión mutua y busca un estado sin salida; y el cálculo de **EG** y **AF** por puntos fijos sobre una estructura de Kripke.

```python
from itertools import product


def dpll(clausulas, asignacion=None):
    """Devuelve el número de modelos de la CNF (cláusulas con literales ±v)."""
    asignacion = dict(asignacion or {})
    cambiado = True
    while cambiado:  # propagación unitaria
        cambiado = False
        for c in clausulas:
            if any(asignacion.get(abs(l)) == (l > 0) for l in c):
                continue
            libres = [l for l in c if abs(l) not in asignacion]
            if not libres:
                return 0
            if len(libres) == 1:
                asignacion[abs(libres[0])] = libres[0] > 0
                cambiado = True
    variables = {abs(l) for c in clausulas for l in c}
    pendientes = [c for c in clausulas if not any(asignacion.get(abs(l)) == (l > 0) for l in c)]
    if not pendientes:
        return 2 ** len(variables - set(asignacion))
    v = next(abs(l) for l in pendientes[0] if abs(l) not in asignacion)
    return dpll(clausulas, {**asignacion, v: True}) + dpll(clausulas, {**asignacion, v: False})


def reinas(n):
    var = lambda f, c: f * n + c + 1
    cl = [[var(f, c) for c in range(n)] for f in range(n)]
    casillas = [(f, c) for f in range(n) for c in range(n)]
    for i, (f1, c1) in enumerate(casillas):
        for f2, c2 in casillas[i + 1:]:
            if f1 == f2 or c1 == c2 or abs(f1 - f2) == abs(c1 - c2):
                cl.append([-var(f1, c1), -var(f2, c2)])
    return cl


assert dpll([[1, 2], [-1, 3], [-2, -3, 4]]) == 6
assert dpll(reinas(6)) == 4 and dpll(reinas(4)) == 2 and dpll(reinas(3)) == 0
print("modelos de las 6 reinas:", dpll(reinas(6)))


# Comprobador de modelos explícito: Peterson con dos procesos.
def sucesores(estado):
    pc, flag, turno = list(estado[0]), list(estado[1]), estado[2]
    for i in (0, 1):
        otro = 1 - i
        p, f, t = pc[:], flag[:], turno
        if pc[i] == 0:
            f[i], p[i] = 1, 1
        elif pc[i] == 1:
            t, p[i] = otro, 2
        elif pc[i] == 2:
            if flag[otro] and turno == otro:
                continue  # espera: esta transición no está habilitada
            p[i] = 3
        elif pc[i] == 3:
            p[i] = 4
        else:
            f[i], p[i] = 0, 0
        yield (tuple(p), tuple(f), t)


inicial = ((0, 0), (0, 0), 0)
vistos, frontera = {inicial}, [inicial]
while frontera:
    s = frontera.pop()
    hijos = list(sucesores(s))
    assert hijos, f"interbloqueo en {s}"
    assert not (s[0][0] == 3 and s[0][1] == 3), f"se viola la exclusión mutua en {s}"
    for h in hijos:
        if h not in vistos:
            vistos.add(h)
            frontera.append(h)
print("estados alcanzables de Peterson:", len(vistos))
assert len(vistos) == 26


# CTL por puntos fijos.
SUC = {"s0": ["s1", "s2"], "s1": ["s1", "s3"], "s2": ["s0"], "s3": ["s3"]}
ETIQ = {"s0": {"p"}, "s1": {"p"}, "s2": set(), "s3": {"q"}}


def EG(p):
    Z = {s for s in SUC if p in ETIQ[s]}
    while True:
        nuevo = {s for s in Z if any(t in Z for t in SUC[s])}
        if nuevo == Z:
            return Z
        Z = nuevo


def AF(q):
    Z = {s for s in SUC if q in ETIQ[s]}
    while True:
        nuevo = Z | {s for s in SUC if all(t in Z for t in SUC[s])}
        if nuevo == Z:
            return Z
        Z = nuevo


assert EG("p") == {"s0", "s1"} and AF("q") == {"s3"}
print("EG p:", sorted(EG("p")), " AF q:", sorted(AF("q")))

# El error de la media en 8 bits, por fuerza bruta (un SMT lo haría simbólicamente).
malos = sum(1 for x, y in product(range(256), repeat=2) if ((x + y) & 0xFF) >> 1 != (x + y) >> 1)
buena = all(x // 2 + y // 2 + (x & y & 1) == (x + y) // 2 for x, y in product(range(256), repeat=2))
assert malos == 32640 and buena
print("pares con desbordamiento:", malos, " versión corregida correcta:", buena)
```

## 10. Errores típicos

- Especificar mal: demostrar una propiedad que no era la que importaba (o una postcondición trivialmente verdadera).
- Olvidar la terminación: la corrección parcial de un bucle infinito vale para cualquier postcondición.
- Un invariante que no es **inductivo**: verdadero en los estados alcanzables pero no preservado por un paso desde cualquier estado que lo cumpla (hay que reforzarlo).
- Comprobar seguridad y suponer vitalidad; comprobar vitalidad sin equidad (o con una equidad irreal).
- Modelos demasiado grandes (explosión de estados) o demasiado abstractos (la abstracción esconde el error).
- Confiar en la herramienta sin entender qué garantiza: BMC solo cubre k pasos; la interpretación abstracta da falsas alarmas; *fuzzing* y pruebas no demuestran nada.

## 11. Resumen

- Hoare: {P} C {Q}; asignación hacia atrás; invariantes de bucle; corrección parcial y total (función de variante).
- wp de Dijkstra: sustitución, composición y condicional; verificar es P → wp(C, Q).
- Kripke, BFS/DFS de estados; seguridad (invariantes) frente a vitalidad (lazos y equidad); LTL (G, F, X, U) y CTL (EG, AF… por puntos fijos); explosión de estados, BDD, orden parcial.
- SAT: DPLL y CDCL; codificaciones; SMT con teorías (vectores de bits); BMC (CBMC, Kani); Z3.
- TLA+: Init, Next, invariantes; TLC; PlusCal.
- Interpretación abstracta (intervalos, ensanchamiento); ejecución simbólica (KLEE); tipos como verificación.
- Asistentes (Coq, Isabelle, Lean); CompCert, seL4; AWS y TLA+.

## Repaso: lo que debe quedarte dentro de un mes

1. wp de una asignación: sustituye la expresión en la postcondición.
2. Un invariante debe valer al entrar, conservarse en cada vuelta y, con la negación de la condición, dar la postcondición.
3. Seguridad: algo malo nunca pasa (contraejemplo finito). Vitalidad: algo bueno acaba pasando (contraejemplo en lazo).
4. Para verificar con SAT/SMT, pregunta si existe un contraejemplo.
5. Especifica en TLA+ los protocolos concurrentes y distribuidos antes de programarlos.

## Siguiente

`sys-optimizacion-rendimiento` y `sys-lenguajes-programacion` (semántica formal, la base de las demostraciones de compiladores). Para practicar: especifica en TLA+ el Raft de [[sys-sistemas-distribuidos]] o el cerrojo de
[[sys-concurrencia]] y compruébalos con TLC.
