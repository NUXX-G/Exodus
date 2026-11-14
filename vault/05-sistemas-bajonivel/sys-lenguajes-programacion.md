---
id: sys-lenguajes-programacion
title: "Teoría de lenguajes de programación: λ-cálculo, estrategias de evaluación, semántica operacional, sistemas de tipos, inferencia Hindley-Milner, polimorfismo, subtipos y varianza, parametricidad"
area: bajo-nivel
trunk_level: 13
prerequisites: [sys-compiladores, sys-verificacion-formal, mat-logica-demostraciones, prog-rust-traits-genericos]
academic_sources:
  - "Pierce, B. C. Types and Programming Languages. MIT Press, 2002 (λ-cálculo sin tipos, De Bruijn, simplemente tipado, subtipos, reconstrucción de tipos en el capítulo 22)."
  - "Harper, R. Practical Foundations for Programming Languages, 2ª ed. Cambridge University Press, 2016 (semántica estática y dinámica, progreso y preservación)."
  - "Damas, L.; Milner, R. Principal type-schemes for functional programs. POPL 1982, pp. 207-212 (algoritmo W, tipos principales); Wadler, P. Theorems for free! FPCA 1989, pp. 347-359 (parametricidad)."
  - "Krishnamurthi, S. Programming Languages: Application and Interpretation, 3ª ed., 2022 (plai.org; intérpretes, ámbito, entornos, clausuras); Abelson, H.; Sussman, G. J. Structure and Interpretation of Computer Programs, 2ª ed. MIT Press, 1996."
exercises:
  - id: beta-reduccion
    tier: 1
    prompt: |
      Reduce `(λx.λy.x) a b` a forma normal. ¿Qué queda y cuántas β-reducciones hacen falta?

      Respuesta: `resultado;pasos`.
    answers: ["sha256:d0b40f1ceaedd862a2b8ea8690fdfb30af4a472fb0a621eeaca71af9c1956be1"]
  - id: numerales-de-church
    tier: 1
    prompt: |
      Con 0 = λf.λx.x y SUC = λn.λf.λx.f (n f x), ¿qué número representa la forma normal de SUC (SUC 0)?

      Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: producto-de-church
    tier: 1
    prompt: |
      Con MULT = λm.λn.λf.m (n f), ¿qué número representa la forma normal de MULT 2 3 (con 2 y 3 construidos con SUC)?

      Respuesta: un número.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: orden-de-evaluacion
    tier: 1
    prompt: |
      Con Ω = (λx.x x)(λx.x x), ¿qué da `(λx.z) Ω` en orden normal y qué ocurre con evaluación por valor?

      Respuesta: `resultado;diverge` o `resultado;termina`.
    answers: ["sha256:fe9c45f4f98f029441fedabdcb2fa31afc94986f53ba50bfd5b046cf33a4ba84"]
  - id: variables-libres
    tier: 1
    prompt: |
      ¿Cuáles son las variables libres de `λx.(x y) (λy.y z)`?

      Respuesta: en orden alfabético, separadas por espacios.
    answers: ["sha256:68d617d6d2ee5715af77d9795566cfaba9a43a33d14cbbc95831c507c935bad1"]
  - id: captura-de-variables
    tier: 1
    prompt: |
      Al reducir `(λx.λy.x) y`, ¿qué variable devuelve la función resultante si la sustitución evita la captura?

      Respuesta: el nombre de la variable que devuelve (la libre de fuera, o `captura` si se capturara).
    answers: ["sha256:a1fce4363854ff888cff4b8e7875d600c2682390412a8cf79b37d0b11148b0fa"]
  - id: tipo-del-combinador-s
    tier: 2
    prompt: |
      ¿Qué tipo principal infiere Hindley-Milner para S = λx.λy.λz. x z (y z)?

      Respuesta: el tipo con `'a`, `'b`, `'c` y `->`.
    answers: ["sha256:72e133832b274daac7c07fec03b23f1ac844cdbcc9994b470200907779599289"]
  - id: polimorfismo-de-let
    tier: 2
    prompt: |
      ¿Tipa `let id = λx.x in (id 1, id true)` en Hindley-Milner? ¿Y `(λid. (id 1, id true)) (λx.x)`?

      Respuesta: `si` o `no` para cada uno, separados por un espacio.
    answers: ["sha256:b56435fbd6b2d8c2f1fec8fbc2b9a12c4e4e322e04f3faefa4418177e4f69759"]
  - id: auto-aplicacion
    tier: 2
    prompt: |
      ¿Tipa `λx. x x` en Hindley-Milner?

      Respuesta: `si` o `no`.
    answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: ambito-lexico-y-dinamico
    tier: 2
    prompt: |
      `x = 10; f() { return x; } g() { local x = 20; return f(); }`. ¿Qué devuelve `g()` con ámbito léxico y con ámbito dinámico?

      Respuesta: `lexico;dinamico`.
    answers: ["sha256:62f71d6dd2b0bca0c228849e984e61c792c53514c363c4081d6fb5b998f7c816"]
  - id: llamadas-de-cola
    tier: 2
    prompt: |
      ¿Cuántos marcos de pila hay como máximo al calcular fact(10) con la recursión normal (`n * fact(n − 1)`, contando el de fact(0)), y cuántos con la versión acumuladora de cola si el lenguaje elimina las llamadas de cola?

      Respuesta: `normal;cola`.
    answers: ["sha256:ebcf0bf49ff6df759005cafeba869db393be8d1f97e46d9085be7c1c516f0cac"]
  - id: varianza
    tier: 2
    prompt: |
      Con Gato <: Animal, ¿cuáles son subtipos? a) Animal → Gato <: Gato → Animal; b) Gato → Gato <: Animal → Animal; c) Array<Gato> <: Array<Animal> con arrays mutables; d) List<Gato> <: List<Animal> con listas inmutables.

      Respuesta: las letras en orden, separadas por espacios.
    answers: ["sha256:70ba33708cbfb103f1a8e34afef333ba7dc021022b2d9aaa583aabb8058d8d67"]
  - id: parametricidad
    tier: 3
    prompt: |
      ¿Cuántas funciones totales distintas (sin efectos) tienen el tipo ∀a. a → a → a? Compruébalo contando, sobre un tipo de 3 elementos, las funciones que conmutan con todas las funciones de ese tipo en sí mismo.

      Respuesta: un número.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: combinador-de-punto-fijo
    tier: 3
    prompt: |
      En un lenguaje estricto, Y no sirve y se usa Z = λf.(λx.f (λv.x x v)) (λx.f (λv.x x v)). ¿Cuánto vale Z aplicado al funcional del factorial, aplicado a 5?

      Respuesta: un número.
    answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
  - id: semantica-operacional
    tier: 3
    prompt: |
      En el lenguaje WHILE, ¿qué valores tienen x e y al terminar `x := 1; y := 0; while (y < 5) { x := x * 2; y := y + 1 }`? (Compruébalo con una semántica de pasos grandes y otra de pasos pequeños.)

      Respuesta: `x;y`.
    answers: ["sha256:bfbae9fd98bd7c1cf4a4de56d51858ba1a3066ebd0773178082eb5aa7e41ae14"]
  - id: pasos-de-la-maquina
    tier: 3
    prompt: |
      En la semántica de pasos pequeños con una pila de sentencias pendientes, donde cada paso desapila una sentencia y o la ejecuta (asignación), o apila sus partes (secuencia), o evalúa la condición del bucle (apilando el cuerpo y el propio bucle si es cierta), ¿cuántos pasos tarda el programa anterior?

      Respuesta: un número.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
---

Un lenguaje de programación es un objeto matemático: tiene una **sintaxis** (qué programas se pueden escribir), una **semántica** (qué significa cada programa) y, casi siempre, un **sistema de tipos** (qué
programas se rechazan antes de ejecutarlos y qué se garantiza de los aceptados). Este nodo da las herramientas con las que se diseñan y se razonan los lenguajes: el λ-cálculo como núcleo mínimo, la semántica
operacional para definir la ejecución sin ambigüedad, los tipos con su teorema de seguridad, la inferencia que usan OCaml, Haskell y (en parte) Rust, y el polimorfismo con sus dos caras: los genéricos y los subtipos.
Con esto entiendes **por qué** Rust rechaza ciertos programas, por qué Java tiene un fallo de diseño con los arrays, por qué `seq` complica Haskell y qué significa que un lenguaje sea "seguro". Continúa
[[sys-compiladores]] (que trata el **cómo** de traducir) y [[sys-verificacion-formal]] (que razona sobre programas concretos).

## Objetivos

Al terminar sabrás:

1. Reducir términos del λ-cálculo, codificar datos en él (números de Church, booleanos, recursión con combinadores de punto fijo) y evitar la captura de variables (sustitución correcta, índices de De Bruijn).
2. Distinguir estrategias de evaluación (orden normal, por valor, por necesidad) y sus consecuencias.
3. Definir un lenguaje con semántica operacional de pasos grandes y de pasos pequeños.
4. Enunciar y entender la seguridad de tipos: progreso y preservación.
5. Inferir tipos con Hindley-Milner (unificación, generalización en `let`) y saber dónde se queda corto.
6. Razonar sobre subtipos y varianza, y sacar "teoremas gratis" de los tipos polimórficos.

## Qué debes dominar antes

[[sys-compiladores]] (análisis sintáctico, árboles de sintaxis), [[mat-logica-demostraciones]] (inducción estructural), [[sys-verificacion-formal]] (reglas de inferencia) y algún lenguaje con genéricos,
como el Rust de [[prog-rust-traits-genericos]].

> [!question] Test de entrada
> 1. ¿Qué es una variable libre en una expresión como ∫ f(x, y) dx?
> 2. ¿Qué devuelve una función que devuelve otra función que recuerda una variable local de la primera?
> 3. Demuestra por inducción que todo árbol binario con n hojas tiene n − 1 nodos internos.
>
> Respuestas: y (x está ligada por el ∫); una **clausura**: la función interna junto con el entorno donde se creó; el caso base es una hoja (0 internos) y un nodo une dos árboles con n₁ y n₂ hojas, con
> (n₁ − 1) + (n₂ − 1) + 1 = n₁ + n₂ − 1 internos.

## 1. El λ-cálculo sin tipos

Church (1936) propuso un lenguaje con tres construcciones:

```
t ::= x          variable
    | λx. t      abstracción (función con parámetro x y cuerpo t)
    | t t        aplicación
```

Convenios: la aplicación asocia a la izquierda (`f a b` = `(f a) b`) y el cuerpo de una λ llega lo más lejos posible (`λx. x y` = `λx. (x y)`). Una variable está **ligada** si la captura una λ que la rodea, y
**libre** si no: en `λx. x (λy. y w) v` las libres son `w` y `v`; `x` e `y` están ligadas. Dos términos que solo difieren en el nombre de las ligadas son el mismo (**α-equivalencia**): `λx. x` = `λy. y`.

La única regla de cálculo es la **β-reducción**: `(λx. t) s → t[x := s]`, sustituir el argumento por el parámetro. Por ejemplo, `(λx. λy. y) a b → (λy. y) b → b`, en dos pasos. Un **redex** es una subexpresión de
la forma `(λx. t) s`; un término sin redex está en **forma normal**.

**La sustitución tiene una trampa: la captura.** `(λx. λz. x) z` no puede dar `λz. z` (la función identidad): la `z` de fuera es libre y quedaría ligada por la λ de dentro. La sustitución correcta renombra
primero la ligada (`λz'. z`, la función constante que devuelve la `z` de fuera). Las implementaciones evitan el problema con **índices de De Bruijn**: cada variable se sustituye por el número de λ que hay entre
ella y la que la liga. `λx. λy. x` es `λ. λ. 1`, `λx. x` es `λ. 0`; ya no hay nombres que capturar, y la α-equivalencia es la igualdad. Pierce (cap. 6) da las operaciones de desplazamiento y sustitución.

**Con solo funciones se puede programar todo.** Los **numerales de Church** representan n como "aplicar f n veces":

```
0    = λf. λx. x
1    = λf. λx. f x
SUC  = λn. λf. λx. f (n f x)
SUMA = λm. λn. λf. λx. m f (n f x)
MULT = λm. λn. λf. m (n f)        (aplicar "n veces f", m veces)
CIERTO = λt. λf. t      FALSO = λt. λf. f      SI = λc. λa. λb. c a b
```

`MULT 2 2` se reduce a `λf. λx. f (f (f (f x)))`, el 4. La recursión sin nombres se consigue con un **combinador de punto fijo**: `Y = λf. (λx. f (x x)) (λx. f (x x))` cumple `Y g →* g (Y g)`, así que
`Y (λfact. λn. SI (ES_CERO n) 1 (MULT n (fact (PRED n))))` es el factorial. El λ-cálculo es **Turing-completo** (Church y Turing demostraron la equivalencia), y por eso la igualdad de dos términos es indecidible.

## 2. Estrategias de evaluación

Un término puede tener varios redex; la **estrategia** decide cuál reducir.

- **Orden normal**: el redex más externo y más a la izquierda. Si existe forma normal, la encuentra (teorema de normalización). Con Ω = `(λx. x x)(λx. x x)`, que se reduce a sí mismo para siempre,
  `(λx. λy. y) Ω → λy. y`: el argumento no se usa y no se evalúa.
- **Por valor** (*call-by-value*; C, Java, Rust, OCaml, Python): primero se evalúan los argumentos y no se reduce dentro de las λ. `(λx. λy. y) Ω` **no termina**. Y el combinador Y también diverge, porque `x x` se
  evalúa antes de tiempo; en un lenguaje estricto se usa **Z** = `λf. (λx. f (λv. x x v)) (λx. f (λv. x x v))`, que retrasa la autoaplicación con una λ (η-expansión).
- **Por nombre** y **por necesidad** (*lazy*; Haskell): como el orden normal sin reducir dentro de λ, y "por necesidad" además **memoriza** el valor del argumento la primera vez (con **thunks**), de modo que se
  evalúa como mucho una vez.

El **teorema de Church-Rosser** (confluencia) garantiza que, si dos estrategias llegan a una forma normal, es la **misma**. Las estrategias difieren en **si** terminan y en **cuánto** cuestan, no en el
resultado. En un lenguaje con efectos (E/S, asignación) la estrategia sí cambia el significado, y por eso los lenguajes perezosos aíslan los efectos (las mónadas de Haskell).

**Llamadas de cola**: si una llamada es lo último que hace una función, su marco de pila puede reutilizarse. `fact n = n * fact (n − 1)` necesita n + 1 marcos (fact(5): 6); la versión con acumulador
`fact_ac n ac = fact_ac (n − 1) (n · ac)` usa uno solo si el lenguaje elimina las llamadas de cola (Scheme lo exige; OCaml y Haskell lo hacen; C y Rust no lo garantizan, aunque el optimizador suele hacerlo).

## 3. Semántica operacional

Definir un lenguaje "por su implementación" no sirve: dos implementaciones discrepan y no se puede demostrar nada. La semántica operacional define la ejecución con **reglas de inferencia** sobre la sintaxis
(Plotkin, 1981). Con el lenguaje WHILE (expresiones, asignación, secuencia, `while`) y un estado σ que asigna valores a variables:

**Pasos grandes** (*natural*, Kahn): ⟨c, σ⟩ ⇓ σ' relaciona un programa con su estado final.

```
         ⟨e, σ⟩ ⇓ n                          ⟨c₁, σ⟩ ⇓ σ'    ⟨c₂, σ'⟩ ⇓ σ''
  ─────────────────────────────          ───────────────────────────────────
  ⟨x := e, σ⟩ ⇓ σ[x ↦ n]                       ⟨c₁; c₂, σ⟩ ⇓ σ''

  ⟨b, σ⟩ ⇓ cierto   ⟨c, σ⟩ ⇓ σ'   ⟨while b do c, σ'⟩ ⇓ σ''          ⟨b, σ⟩ ⇓ falso
  ─────────────────────────────────────────────────────────    ─────────────────────────────
              ⟨while b do c, σ⟩ ⇓ σ''                            ⟨while b do c, σ⟩ ⇓ σ
```

**Pasos pequeños** (*estructural*, Plotkin): ⟨c, σ⟩ → ⟨c', σ'⟩ da **un** paso. Es más fino: distingue un programa que no termina de uno que se atasca (un error), permite describir la concurrencia (intercalar
pasos de dos hilos) y es la base de las demostraciones de seguridad de tipos. Una forma práctica de pasos pequeños es una **máquina abstracta** con una pila de sentencias pendientes (como la máquina CEK o la
SECD de Landin), que es casi un intérprete. Ambas semánticas coinciden en los programas que terminan, y demostrarlo es un ejercicio clásico de inducción sobre las derivaciones.

Otras dos semánticas: la **denotacional** (Scott y Strachey) asigna a cada programa un objeto matemático (una función parcial de estados en estados; el `while` es un **punto fijo mínimo**), y la
**axiomática** (Hoare) es la de [[sys-verificacion-formal]].

**Ámbito léxico frente a dinámico.** Con `x = 1; f() { return x }; g() { local x = 2; return f() }`, `g()` devuelve 1 con ámbito **léxico** (la `x` de `f` es la del sitio donde **se escribió** `f`) y 2 con
ámbito **dinámico** (la del que **llama**). Casi todos los lenguajes son léxicos (los antiguos Lisp y las variables `local` de bash son dinámicos), porque el léxico permite razonar sobre una función sin conocer a
quien la llama. Implementarlo exige **clausuras**: una función se representa como (código, entorno donde se creó). El error clásico de un intérprete es evaluar el cuerpo con el entorno del que llama, y entonces
se obtiene ámbito dinámico sin querer (Krishnamurthi lo trata en PLAI).

## 4. Tipos y su teorema de seguridad

Un sistema de tipos es un conjunto de reglas Γ ⊢ t : T ("en el contexto Γ, t tiene tipo T") que se comprueban sin ejecutar. Para el λ-cálculo **simplemente tipado** (λ→):

```
   x : T ∈ Γ              Γ, x : T₁ ⊢ t : T₂                  Γ ⊢ t₁ : T₁ → T₂     Γ ⊢ t₂ : T₁
  ───────────          ──────────────────────────           ────────────────────────────────────
   Γ ⊢ x : T            Γ ⊢ λx:T₁. t : T₁ → T₂                       Γ ⊢ t₁ t₂ : T₂
```

"Bien tipado no puede ir mal" (Milner, 1978) se formaliza con dos teoremas (Wright y Felleisen, 1994; Harper, cap. 6; Pierce, cap. 8-9):

- **Progreso**: si ⊢ t : T, entonces t es un valor o puede dar un paso. Un programa bien tipado nunca se **atasca** (sumar un booleano, llamar a algo que no es una función).
- **Preservación**: si ⊢ t : T y t → t', entonces ⊢ t' : T. El tipo se conserva al ejecutar.

Juntos dicen que la ejecución de un programa bien tipado o termina en un valor de su tipo o sigue para siempre. **No** dicen que termine, ni que no haya errores "previstos" (división por cero, índice fuera de
rango): esos se definen como excepciones del lenguaje, no como atascos. En λ→ puro, además, todo programa termina (normalización fuerte), y por eso Ω y Y **no tipan**: un lenguaje real añade `fix` como
primitiva. C no es seguro en este sentido (un `int*` puede apuntar a cualquier sitio); Rust seguro sí lo pretende, y RustBelt (Jung et al., 2018) lo demostró para un modelo del lenguaje.

**Isomorfismo de Curry-Howard**: los tipos son proposiciones y los programas, demostraciones. `A → B` es la implicación; un programa de tipo `(A → B) → (B → C) → A → C` demuestra la transitividad. Es la base de
Coq, Lean y Agda (los asistentes de [[sys-verificacion-formal]]).

## 5. Inferencia de tipos: Hindley-Milner

En OCaml o Haskell no se escriben los tipos y el compilador los deduce. El **algoritmo W** (Damas y Milner, 1982):

1. Da a cada variable sin tipo conocido una **variable de tipo** nueva ('a, 'b, ...).
2. Recorre el término generando **ecuaciones**: en `f x`, si f : τ₁ y x : τ₂, entonces τ₁ = τ₂ → 'r con 'r nueva.
3. Las resuelve por **unificación** (Robinson, 1965): unir una variable con un tipo la sustituye; unir dos flechas une sus partes; unir tipos distintos (`int` con `bool`) es un error.
4. **Comprobación de ocurrencia**: 'a = 'a → 'b no tiene solución (sería un tipo infinito). Por eso `λf. f (λx. f)` no tipa: f tendría que ser a la vez una función y parte de su propio argumento.

El resultado es el **tipo principal**: el más general, del que todos los demás son instancias. Para la composición B = `λf. λg. λx. f (g x)`: si x : 'c, `g x` exige g : 'c → 'a, `f (g x)` exige
f : 'a → 'b, y el tipo es `('a -> 'b) -> ('c -> 'a) -> 'c -> 'b`.

**Polimorfismo de `let`.** En `let k = λx. λy. x in (k 1 true, k true 1)`, el tipo de `k` ('a → 'b → 'a) se **generaliza** a ∀a b. a → b → a al ligarlo con `let`, y cada uso lo **instancia** con variables
nuevas: tipa. En `(λk. (k 1 true, k true 1)) (λx. λy. x)`, `k` es un parámetro de λ, su tipo es una sola variable y unificarla con int → bool → … y con bool → int → … falla: no tipa. Solo se generalizan las variables que no aparecen libres en el
contexto. La inferencia completa con polimorfismo de rango superior (pasar funciones polimórficas como argumento, el **System F** de Girard y Reynolds) es **indecidible** (Wells, 1999); HM es el punto óptimo:
decidible, casi lineal en la práctica (aunque exponencial en el peor caso por `let` anidados) y sin anotaciones.

Extensiones en lenguajes reales: **clases de tipos** de Haskell y **traits** de Rust (polimorfismo acotado: ∀a. Ord a ⇒ [a] → [a]), resueltos con diccionarios o con **monomorfización** (Rust genera una copia
por tipo); Rust infiere solo dentro de una función y exige firmas en las funciones, para que los errores sean locales.

## 6. Subtipos y varianza

Con **subtipos** (S <: T, "un S sirve donde se espera un T"), la pregunta es cómo se propaga por los constructores de tipos. Con Gato <: Animal:

- **Funciones**: S₁ → S₂ <: T₁ → T₂ si T₁ <: S₁ (**contravariante** en el argumento) y S₂ <: T₂ (**covariante** en el resultado). Con Entero <: Número, una función Número → Entero sirve donde se espera
  Entero → Número (acepta más y devuelve algo más concreto); Entero → Entero **no** sirve donde se espera Número → Número (le podrían pasar un 2,5).
- **Contenedores inmutables** (lista, `Option`): covariantes. Una lista de enteros es una lista de números.
- **Contenedores mutables** (arrays, referencias): **invariantes**. Si Array<Entero> fuera un Array<Número>, se podría escribir 2,5 en él. Java lo permitió para los arrays y tiene que comprobar cada escritura
  en tiempo de ejecución (`ArrayStoreException`); sus genéricos (`List<Integer>`) son invariantes y usan comodines (`? extends Number`) para la covarianza. Scala marca la varianza con `+T`/`-T`; Rust la deduce y
  la aplica a los tiempos de vida (`&'a T` es covariante en 'a; `&'a mut T` es invariante en T), y equivocarse con `unsafe` produce fallos de memoria reales.

## 7. Parametricidad: teoremas gratis

Una función polimórfica no puede inspeccionar los valores de un tipo que no conoce, y eso limita lo que hace. Reynolds (1983) lo formalizó y Wadler lo popularizó: del **tipo** se deduce un **teorema**.

- ∀a. a → a: la única función total es la identidad.
- La parametricidad se puede comprobar contando: sobre un conjunto finito, las funciones de un tipo polimórfico son las que conmutan con todas las funciones del conjunto en sí mismo. Para ∀a. a → a,
  sobre un conjunto de 3 elementos, de las 3³ = 27 funciones solo la identidad conmuta con todas.
- ∀a. [a] → [a] (como `reverse` o `tail`): para toda g, `map g ∘ r = r ∘ map g`. La función solo reorganiza, duplica o descarta elementos, nunca los inventa.

Esto vale sin efectos, sin excepciones y sin `seq` (que rompe parte de la parametricidad en Haskell) y sin reflexión (`instanceof` en Java la destruye). Es la razón por la que los tipos genéricos son
documentación verificada.

## 8. Comprobar con un programa

Un reductor del λ-cálculo con índices de De Bruijn en orden normal y una inferencia Hindley-Milner con unificación y `let`:

```python
# Reductor del λ-cálculo con índices de De Bruijn (orden normal) e inferencia Hindley-Milner (algoritmo W)
def L(b): return ("L", b)
def A(f, a): return ("A", f, a)
def I(n): return ("I", n)

def shift(t, d, c=0):
    if t[0] == "I": return I(t[1] + d if t[1] >= c else t[1])
    if t[0] == "L": return L(shift(t[1], d, c + 1))
    return A(shift(t[1], d, c), shift(t[2], d, c))

def subst(t, j, s):
    if t[0] == "I": return s if t[1] == j else t
    if t[0] == "L": return L(subst(t[1], j + 1, shift(s, 1)))
    return A(subst(t[1], j, s), subst(t[2], j, s))

def paso(t):  # el redex más externo y más a la izquierda; None si está en forma normal
    if t[0] == "A":
        if t[1][0] == "L": return shift(subst(t[1][1], 0, shift(t[2], 1)), -1)
        for k in (1, 2):
            r = paso(t[k])
            if r is not None: return A(r, t[2]) if k == 1 else A(t[1], r)
    if t[0] == "L":
        r = paso(t[1])
        return None if r is None else L(r)
    return None

def normal(t):
    n = 0
    while (r := paso(t)) is not None: t, n = r, n + 1
    return t, n

def church(t):  # λ.λ. 1 (1 (... 0)) → número
    t, n = t[1][1], 0
    while t[0] == "A": t, n = t[2], n + 1
    return n

CERO = L(L(I(0)))
SUC = L(L(L(A(I(1), A(A(I(2), I(1)), I(0))))))
MULT = L(L(L(A(I(2), A(I(1), I(0))))))
DOS, TRES = A(SUC, A(SUC, CERO)), A(SUC, A(SUC, A(SUC, CERO)))
r, pasos = normal(A(A(MULT, DOS), DOS))
print("MULT 2 2 =", church(r), "en", pasos, "pasos")

# Hindley-Milner: tipos ("v", n) | ("fn", a, b) | ("int",) | ("bool",) | ("par", a, b)
class Tipado:
    def __init__(self): self.n, self.s = 0, {}
    def nueva(self): self.n += 1; return ("v", self.n)
    def busca(self, t):
        while t[0] == "v" and t[1] in self.s: t = self.s[t[1]]
        return t
    def ocurre(self, v, t):
        t = self.busca(t)
        return t == ("v", v) if t[0] == "v" else any(self.ocurre(v, x) for x in t[1:])
    def uni(self, a, b):
        a, b = self.busca(a), self.busca(b)
        if a == b: return
        if a[0] == "v":
            if self.ocurre(a[1], b): raise TypeError("tipo infinito")
            self.s[a[1]] = b
        elif b[0] == "v": self.uni(b, a)
        elif a[0] == b[0] and len(a) == len(b):
            for x, y in zip(a[1:], b[1:]): self.uni(x, y)
        else: raise TypeError(f"no unifican {a[0]} y {b[0]}")
    def libres(self, t):
        t = self.busca(t)
        return {t[1]} if t[0] == "v" else set().union(*(self.libres(x) for x in t[1:]))
    def inst(self, esq):
        vs, t = esq
        m = {v: self.nueva() for v in vs}
        def go(t):
            t = self.busca(t)
            return m.get(t[1], t) if t[0] == "v" else (t[0], *map(go, t[1:]))
        return go(t)
    def W(self, e, env):
        k = e[0]
        if k == "var": return self.inst(env[e[1]])
        if k == "lit": return (e[1],)
        if k == "lam":
            a = self.nueva()
            return ("fn", a, self.W(e[2], {**env, e[1]: ((), a)}))
        if k == "app":
            f, x, r = self.W(e[1], env), self.W(e[2], env), self.nueva()
            self.uni(f, ("fn", x, r))
            return r
        if k == "par": return ("par", self.W(e[1], env), self.W(e[2], env))
        if k == "let":
            t = self.W(e[2], env)
            enEnv = set().union(set(), *(self.libres(s[1]) - set(s[0]) for s in env.values()))
            return self.W(e[3], {**env, e[1]: (tuple(self.libres(t) - enEnv), t)})

def ver(tp, t, nombres):
    t = tp.busca(t)
    if t[0] == "v": return nombres.setdefault(t[1], "'" + "abcdef"[len(nombres)])
    if t[0] == "fn":
        a = ver(tp, t[1], nombres)
        return (f"({a})" if tp.busca(t[1])[0] == "fn" else a) + " -> " + ver(tp, t[2], nombres)
    if t[0] == "par": return ver(tp, t[1], nombres) + " * " + ver(tp, t[2], nombres)
    return t[0]

def tipo(e):
    tp = Tipado()
    try: return ver(tp, tp.W(e, {}), {})
    except TypeError as err: return "error: " + str(err)

v = lambda x: ("var", x)
lam = lambda x, b: ("lam", x, b)
app = lambda f, *xs: xs and app(("app", f, xs[0]), *xs[1:]) or f
B = lam("f", lam("g", lam("x", app(v("f"), app(v("g"), v("x"))))))
K = lam("x", lam("y", v("x")))
doble = ("par", app(v("k"), ("lit", "int"), ("lit", "bool")), app(v("k"), ("lit", "bool"), ("lit", "int")))
print("B :", tipo(B))
print("let k = λx.λy.x in (k 1 true, k true 1) :", tipo(("let", "k", K, doble)))
print("(λk. (k 1 true, k true 1)) (λx.λy.x) :", tipo(app(lam("k", doble), K)))
print("λf. f (λx. f) :", tipo(lam("f", app(v("f"), lam("x", v("f"))))))
```

Salida:

```
MULT 2 2 = 4 en 25 pasos
B : ('a -> 'b) -> ('c -> 'a) -> 'c -> 'b
let k = λx.λy.x in (k 1 true, k true 1) : int * bool
(λk. (k 1 true, k true 1)) (λx.λy.x) : error: no unifican int y bool
λf. f (λx. f) : error: tipo infinito
```

Amplíalo: añade `fix` y `if` al lenguaje tipado y escribe el factorial; añade booleanos de Church y comprueba Church-Rosser reduciendo con otra estrategia.

## 9. Errores típicos

- Sustituir sin renombrar y capturar variables (el primer fallo de casi todo intérprete del λ-cálculo hecho a mano).
- Creer que la estrategia de evaluación cambia el resultado: solo cambia si termina y cuánto cuesta (sin efectos).
- Implementar clausuras con el entorno del que llama (ámbito dinámico sin querer).
- Pensar que "bien tipado" significa "correcto" o "termina": la seguridad de tipos solo garantiza que no se atasca.
- Olvidar la comprobación de ocurrencia en la unificación (el inferidor no termina o acepta `λx. x x`).
- Generalizar en `let` variables que siguen libres en el contexto (el sistema se vuelve inconsistente).
- Tratar los contenedores mutables como covariantes (el agujero de los arrays de Java), o equivocarse con la varianza de las funciones.

## 10. Resumen

- λ-cálculo: variables, abstracción y aplicación; β-reducción; captura y De Bruijn; numerales de Church; Y y Z; Turing-completo.
- Estrategias: orden normal (encuentra la forma normal si existe), por valor, por necesidad; Church-Rosser; llamadas de cola.
- Semántica operacional de pasos grandes y pequeños; máquinas abstractas; ámbito léxico y clausuras.
- Seguridad de tipos = progreso + preservación; Curry-Howard.
- Hindley-Milner: variables de tipo, unificación con comprobación de ocurrencia, tipo principal, polimorfismo de `let`; System F indecidible.
- Varianza: funciones contravariantes en el argumento y covariantes en el resultado; inmutables covariantes; mutables invariantes. Parametricidad: teoremas gratis.

## Repaso: lo que debe quedarte dentro de un mes

1. Todo lenguaje funcional se reduce a λ y aplicación; la sustitución debe evitar capturas.
2. La estrategia de evaluación decide qué termina, no qué resultado da.
3. "Bien tipado no puede ir mal" = progreso y preservación, y nada más.
4. HM: ecuaciones, unificación, generalizar en `let`.
5. Lo que se escribe es contravariante; lo que se lee, covariante; lo que se lee y escribe, invariante.

## Siguiente

Los laboratorios `lab-sys-depuracion` y `lab-sys-rendimiento`, y el proyecto [[proy-sys-compilador]], donde se puede añadir inferencia de tipos al lenguaje Mini.
