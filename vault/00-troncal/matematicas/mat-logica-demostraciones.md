---
id: mat-logica-demostraciones
title: "Lógica y demostración: cómo se escribe una prueba"
area: matematicas
trunk_level: 7
prerequisites: [mat-algebra-secundaria, mat-combinatoria-probabilidad-basica]
academic_sources:
  - "Velleman, D. J. How to Prove It: A Structured Approach, 3ª ed. Cambridge University Press, 2019."
  - "Hammack, R. Book of Proof, 3ª ed. Richard Hammack, 2018 (libre, licencia CC BY-NC-ND 4.0: people.vcu.edu/~rhammack/BookOfProof)."
  - "Lehman, E.; Leighton, F. T.; Meyer, A. R. Mathematics for Computer Science. MIT OpenCourseWare (2018, gratuito)."
  - "Graham, R. L.; Knuth, D. E.; Patashnik, O. Concrete Mathematics, 2ª ed. Addison-Wesley, 1994."
ctf_flag: "sha256:5074242c1f1877b75304a40239bca5283b6a205f92bbdc70dced9f833b2d6683"
hints:
  - "Ninguno de los tres apartados exige enumerar a mano. (a) Clasifica las asignaciones válidas según el valor de la última variable y busca una recurrencia. (b) Cuenta lo contrario: funciones que NO alcanzan algún elemento, con inclusión-exclusión. (c) Una relación de equivalencia y una partición son el mismo objeto."
  - "Verifica cada fórmula con fuerza bruta en un caso pequeño antes de fiarte: en Python, itertools.product([0, 1], repeat=n) recorre asignaciones e itertools.product(range(4), repeat=k) recorre funciones. Para (c), la recurrencia B(n+1) = Σ C(n, k)·B(k) se programa en cinco líneas con math.comb."
  - "Velleman, capítulos de inducción y recursión y de relaciones de equivalencia y particiones. Concrete Mathematics, números de Stirling de segunda clase para (b) y (c). Documentación de itertools: docs.python.org/3/library/itertools.html."
exercises:
  - id: dos-implicaciones
    tier: 1
    prompt: |
      ¿En cuántas de las $16$ asignaciones de valores de verdad a $p, q, r, s$ es verdadera $(p \Rightarrow q) \land (r \Rightarrow s)$? Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: cuales-son-tautologias
    tier: 1
    prompt: |
      ¿Cuáles de estas fórmulas son **tautologías** (verdaderas en todas las filas)?

      (a) $p \lor \lnot p$ · (b) $(p \Rightarrow q) \Rightarrow (q \Rightarrow p)$ · (c) $\bigl((p \Rightarrow q) \land p\bigr) \Rightarrow q$ · (d) $(p \Rightarrow q) \lor (q \Rightarrow p)$ · (e) $\lnot(p \land q) \Rightarrow (\lnot p \land \lnot q)$ · (f) $\bigl((p \Rightarrow q) \land (q \Rightarrow r)\bigr) \Rightarrow (p \Rightarrow r)$

      Respuesta: las letras en orden alfabético separadas por `;` (por ejemplo `a;b`).
    answers: ["sha256:8dd5e8acfd17b065ea0fa4ae0f5249f0ab21d8d90047e807e9a1606dcb9f7ab9", "sha256:51dc5be712faa568a924961e7449c435cc8cdb5fd8402fb706ce41ff1e781b11"]
  - id: funciones-booleanas
    tier: 1
    prompt: |
      Una función booleana de $3$ variables asigna $V$ o $F$ a cada fila de una tabla de verdad de $3$ variables. ¿Cuántas funciones booleanas distintas de $3$ variables hay? Respuesta: un entero.
    answers: ["sha256:51e8ea280b44e16934d4d611901f3d3afc41789840acdff81942c2f65009cd52"]
  - id: negar-cuantificadores
    tier: 1
    prompt: |
      ¿Cuál de estas fórmulas es equivalente a $\lnot\,\forall x\,\exists y\; P(x, y)$, sea cual sea el predicado $P$?

      (a) $\exists x\,\forall y\;\lnot P(x, y)$ · (b) $\forall x\,\exists y\;\lnot P(x, y)$ · (c) $\exists y\,\forall x\;\lnot P(x, y)$ · (d) $\forall x\,\forall y\;\lnot P(x, y)$

      Respuesta: una letra.
    answers: ["sha256:ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb"]
  - id: cuantificadores-en-un-dominio
    tier: 2
    prompt: |
      En el dominio $D = \{0, 1, \dots, 9\}$ sea $P(x, y)$: «$x + y$ es múltiplo de $10$». Di si es verdadera (V) o falsa (F) cada afirmación:

      1. $\forall x\,\exists y\; P(x, y)$
      2. $\exists y\,\forall x\; P(x, y)$
      3. $\forall x\,\forall y\;\bigl(P(x, y) \Rightarrow P(y, x)\bigr)$
      4. $\exists x\; P(x, x)$
      5. $\forall x\;\bigl(P(x, x) \Rightarrow x = 0\bigr)$

      Respuesta: cinco letras `v` o `f` en orden, separadas por `;` (por ejemplo `v;v;f;f;v`).
    answers: ["sha256:eb1c25cb1639322239a179e41087d4bd8c62adc87461a1c625e02c6003066c92"]
  - id: contraejemplo-de-euler
    tier: 2
    prompt: |
      Euler observó que $n^2 + n + 41$ es primo para $n = 0, 1, 2, \dots$ durante mucho tiempo. ¿Cuál es el **menor** $n \ge 0$ para el que $n^2 + n + 41$ **no** es primo? Respuesta: un entero.
    answers: ["sha256:d59eced1ded07f84c145592f65bdf854358e009c5cd705f5215bf18697fed103"]
  - id: sellos-de-5-y-8
    tier: 2
    prompt: |
      Con sellos de $5$ y $8$ céntimos (tantos de cada uno como se quiera), ¿cuál es el **mayor** franqueo en céntimos que **no** se puede pagar exactamente? (A partir del siguiente valor todos se pueden pagar: se demuestra por inducción fuerte con cinco casos base.) Respuesta: un entero.
    answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
  - id: base-de-la-induccion
    tier: 2
    prompt: |
      ¿Cuál es el menor entero $n_0 \ge 0$ tal que $2^n > n^2$ para **todo** $n \ge n_0$? (Prueba los primeros valores y después demuestra el paso inductivo.) Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: inclusion-exclusion-1000
    tier: 2
    prompt: |
      ¿Cuántos enteros entre $1$ y $1000$ (ambos incluidos) son divisibles por $2$, por $3$ o por $5$? Respuesta: un entero.
    answers: ["sha256:c2a181d8178a9f753b013fc4bb892ceeb5dc5bcb763352610844b93341ea52a4"]
  - id: relaciones-reflexivas-simetricas
    tier: 2
    prompt: |
      ¿Cuántas relaciones en un conjunto de $4$ elementos son a la vez **reflexivas** y **simétricas**? Respuesta: un entero.
    answers: ["sha256:a68b412c4282555f15546cf6e1fc42893b7e07f271557ceb021821098dd66c1b"]
  - id: funciones-inyectivas
    tier: 2
    prompt: |
      ¿Cuántas funciones **inyectivas** hay de un conjunto de $4$ elementos en uno de $7$? Respuesta: un entero.
    answers: ["sha256:fd0f7e53c5b02b688a57ee37f3d52065cb168a7b9fd5a3abd93d37e1559fbd30"]
  - id: falsa-demostracion
    tier: 2
    prompt: |
      Esta «demostración» concluye que $2 = 1$. Sean $a, b$ reales con

      1. $a = b$
      2. $a^2 = ab$ (se multiplica por $a$)
      3. $a^2 - b^2 = ab - b^2$ (se resta $b^2$)
      4. $(a + b)(a - b) = b(a - b)$ (se factoriza)
      5. $a + b = b$ (se simplifica $a - b$)
      6. $2b = b$ (porque $a = b$)
      7. $2 = 1$ (se divide entre $b$)

      ¿Cuál es el **número de la primera línea que no se deduce** de la anterior? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: sobreyecciones-6-3
    tier: 3
    prompt: |
      ¿Cuántas funciones **sobreyectivas** hay de un conjunto de $6$ elementos en uno de $3$? Respuesta: un entero.
    answers: ["sha256:84f01dd97c687fb28a296bcc2ef1801446ea7405860595924eb2b5bb634718d1"]
  - id: particiones-en-tres-bloques
    tier: 3
    prompt: |
      ¿De cuántas formas se puede partir un conjunto de $6$ elementos en exactamente $3$ bloques no vacíos (sin orden entre los bloques)? (Es el número de Stirling de segunda clase $S(6, 3)$.) Respuesta: un entero.
    answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
  - id: involuciones
    tier: 3
    prompt: |
      Una **involución** de un conjunto $A$ es una biyección $f: A \to A$ con $f \circ f = \mathrm{id}_A$. ¿Cuántas involuciones tiene un conjunto de $6$ elementos? Respuesta: un entero.
    answers: ["sha256:f74efabef12ea619e30b79bddef89cffa9dda494761681ca862cff2871a85980"]
  - id: palomar-divisibilidad
    tier: 3
    prompt: |
      ¿Cuál es el **menor** $k$ tal que, elegidos $k$ números distintos cualesquiera de $\{1, 2, \dots, 20\}$, siempre hay dos de ellos con uno divisor del otro? Respuesta: un entero.
    answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: emparejamiento-de-cantor
    tier: 3
    prompt: |
      La función $\pi(x, y) = \dfrac{(x + y)(x + y + 1)}{2} + y$ es una biyección de $\mathbb{N} \times \mathbb{N}$ en $\mathbb{N}$ (con $0 \in \mathbb{N}$). ¿Qué par $(x, y)$ cumple $\pi(x, y) = 100$? Respuesta: `x;y`.
    answers: ["sha256:6fb73a3356b452f5575eeb852cf8242645f055592fa9ebbfb747165bdec5de1e"]
---

# Lógica y demostración: cómo se escribe una prueba

Hasta aquí has **calculado**. A partir de aquí también vas a **demostrar**: convencer, sin posibilidad de réplica, de que algo
es cierto en **todos** los casos, incluidos los infinitos que nadie puede comprobar uno por uno. Este nodo enseña el lenguaje
(lógica de proposiciones y de predicados, conjuntos, relaciones y funciones) y, sobre todo, el **oficio**: cómo leer la forma
lógica de un enunciado y saber, a partir de ella, cómo empieza y cómo termina su demostración. Es el método de Velleman: la
estructura de la prueba la dicta la estructura lógica del enunciado.

## Objetivos

Al terminar sabrás:

1. Calcular tablas de verdad, reconocer tautologías y transformar fórmulas con las equivalencias básicas.
2. Traducir frases a fórmulas con cuantificadores, **negarlas** correctamente y decidir su verdad en un dominio.
3. Elegir la técnica según la forma del enunciado: directa, contrarrecíproco, reducción al absurdo, casos, existencia,
   contraejemplo, inducción simple y fuerte.
4. Demostrar igualdades de conjuntos «persiguiendo elementos» y probar propiedades de relaciones y funciones.
5. Contar funciones inyectivas y sobreyectivas, relaciones con propiedades dadas y particiones, demostrando cada fórmula.
6. Distinguir conjuntos numerables y no numerables (Cantor) y detectar el fallo en una demostración incorrecta.

## Qué debes dominar antes

[[mat-algebra-secundaria]] (manipulación algebraica, irracionalidad de $\sqrt2$ vista como ejemplo) y
[[mat-combinatoria-probabilidad-basica]] (principio del producto, combinaciones $\binom nk$).

> [!question] Test de entrada
> 1. ¿Cuántos subconjuntos de $\{1, 2, 3, 4\}$ tienen exactamente $2$ elementos?
> 2. Desarrolla $(k + 1)^2 - k^2$.
> 3. Un número es par si es de la forma $2m$ con $m$ entero. ¿Es par $6k^2 + 4k + 2$?
>
> Respuestas: $\binom42 = 6$; $2k + 1$; sí, es $2(3k^2 + 2k + 1)$.

## 1. Para qué sirve

- **Matemáticas de grado**: análisis real, álgebra abstracta, probabilidad y topología se escriben como definiciones,
  teoremas y demostraciones. Sin este nodo no se pueden leer ([[mat-analisis-real]], [[mat-estructuras-algebraicas]]).
- **Programación correcta**: un invariante de bucle es una demostración por inducción; una especificación es una fórmula con
  cuantificadores («para todo índice $i$, el vector está ordenado hasta $i$»). Ver [[prog-algoritmos]].
- **Hardware**: las tablas de verdad son los circuitos combinacionales de [[ing-logica-digital]].
- **Seguridad**: un protocolo «seguro» lo es porque se demuestra que todo atacante de cierto tipo fracasa; un único
  contraejemplo (un ataque) basta para refutarlo.
- **Vida diaria**: distinguir «si A entonces B» de «si B entonces A» separa un argumento válido de una falacia en una noticia,
  un contrato o una discusión.

## 2. Lógica de proposiciones

Una **proposición** es un enunciado que es verdadero (V) o falso (F). Las letras $p, q, r, \dots$ las representan y los
**conectivos** las combinan. Cada conectivo se define por su tabla de verdad:

| $p$ | $q$ | $\lnot p$ | $p \land q$ | $p \lor q$ | $p \Rightarrow q$ | $p \Leftrightarrow q$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| V | V | F | V | V | V | V |
| V | F | F | F | V | F | F |
| F | V | V | F | V | V | F |
| F | F | V | F | F | V | V |

- $p \lor q$ es el «o» **inclusivo**: vale también si ambas son verdaderas.
- $p \Rightarrow q$ («si $p$, entonces $q$»; $p$ es la hipótesis y $q$ la conclusión) **solo es falsa cuando $p$ es
  verdadera y $q$ falsa**. Una promesa «si apruebas, te invito» solo se incumple si apruebas y no invito. Si no apruebas,
  la promesa no se ha roto, sea cual sea lo que yo haga: es la **verdad vacua**.
- $p \Leftrightarrow q$ («$p$ si y solo si $q$») es verdadera cuando $p$ y $q$ tienen el mismo valor.

Con $n$ variables hay $2^n$ filas (cada variable, V o F: principio del producto). Una fórmula es una **tautología** si es
verdadera en todas las filas, una **contradicción** si es falsa en todas, y dos fórmulas son **equivalentes** ($\equiv$) si
coinciden en todas las filas. Como cada una de las $2^n$ filas puede recibir V o F, hay $2^{2^n}$ funciones booleanas de $n$
variables: con $n = 2$, $16$.

**Equivalencias que se usan a diario** (todas se comprueban con una tabla):

$$
\begin{aligned}
p \Rightarrow q &\equiv \lnot p \lor q &&\text{(implicación como disyunción)}\\
p \Rightarrow q &\equiv \lnot q \Rightarrow \lnot p &&\text{(contrarrecíproco)}\\
\lnot (p \land q) &\equiv \lnot p \lor \lnot q, \qquad \lnot (p \lor q) \equiv \lnot p \land \lnot q &&\text{(De Morgan)}\\
\lnot (p \Rightarrow q) &\equiv p \land \lnot q &&\text{(negación de la implicación)}\\
p \Leftrightarrow q &\equiv (p \Rightarrow q) \land (q \Rightarrow p) &&\text{(doble implicación)}\\
p \land (q \lor r) &\equiv (p \land q) \lor (p \land r) &&\text{(distributiva)}
\end{aligned}
$$

> [!warning] Recíproco y contrarrecíproco
> El **recíproco** de $p \Rightarrow q$ es $q \Rightarrow p$ y **no** es equivalente: «si es un cuadrado, es un rectángulo» es
> cierta y su recíproco es falso. El **contrarrecíproco** $\lnot q \Rightarrow \lnot p$ sí es equivalente: «si no es un
> rectángulo, no es un cuadrado».

**Ejemplo resuelto 1 (equivalencia por álgebra, sin tabla).** Simplificar $\lnot(p \Rightarrow (q \land \lnot r))$.

1. Negación de la implicación: $\equiv p \land \lnot(q \land \lnot r)$.
2. De Morgan: $\equiv p \land (\lnot q \lor \lnot\lnot r)$.
3. Doble negación: $\equiv p \land (\lnot q \lor r)$.

Comprobación: la fórmula original es verdadera exactamente cuando $p$ es V y $q \land \lnot r$ es F, que es lo que dice el
resultado.

**Ejemplo resuelto 2 (reglas de inferencia).** Las tautologías $\bigl((p \Rightarrow q) \land p\bigr) \Rightarrow q$
(*modus ponens*), $\bigl((p \Rightarrow q) \land \lnot q\bigr) \Rightarrow \lnot p$ (*modus tollens*) y
$\bigl((p \Rightarrow q) \land (q \Rightarrow r)\bigr) \Rightarrow (p \Rightarrow r)$ (*silogismo hipotético*) son las piezas
con que se encadenan los pasos de una demostración. Para ver que la tercera es tautología no hace falta la tabla de $8$ filas:
solo podría ser falsa si $p \Rightarrow r$ fuese falsa, es decir, $p$ V y $r$ F; entonces, si $q$ es V falla $q \Rightarrow r$,
y si $q$ es F falla $p \Rightarrow q$; en ambos casos la hipótesis es falsa y la implicación completa es verdadera.

Este razonamiento «busca la única fila que la haría falsa y demuestra que no existe» es más rápido que la tabla y es, ya, una
demostración por casos.

## 3. Predicados y cuantificadores

Un **predicado** $P(x)$ es un enunciado con una variable libre: «$x$ es primo» no es V ni F hasta que se fija $x$. Se
convierte en proposición de dos maneras:

- **Cuantificador universal** $\forall x \in D\; P(x)$: «para todo $x$ del dominio $D$, $P(x)$».
- **Cuantificador existencial** $\exists x \in D\; P(x)$: «existe al menos un $x$ en $D$ con $P(x)$». La variante
  $\exists!\,x$ significa «existe exactamente uno».

**El dominio importa**: $\exists x\,(x^2 = 2)$ es falsa en $\mathbb Q$ y verdadera en $\mathbb R$.

**Negación.** Negar intercambia los cuantificadores y empuja la negación hacia dentro:

$$
\lnot\,\forall x\, P(x) \equiv \exists x\, \lnot P(x), \qquad \lnot\,\exists x\, P(x) \equiv \forall x\, \lnot P(x).
$$

«No todos los cisnes son blancos» significa «hay un cisne que no es blanco», no «ningún cisne es blanco».

**Orden.** Cuantificadores del mismo tipo conmutan; de distinto tipo, **no**. En $\mathbb Z$, $\forall x\,\exists y\,(x + y = 0)$
es verdadera (cada $x$ tiene su opuesto, que depende de $x$), y $\exists y\,\forall x\,(x + y = 0)$ es falsa (no hay un
único $y$ que anule a todos). En $\forall x\,\exists y$, **el $y$ puede depender de $x$**; en $\exists y\,\forall x$, no.

**Ejemplo resuelto 3 (negar una definición).** Una función $f$ es **acotada** si $\exists M\,\forall x\;\lvert f(x)\rvert \le M$.
Negando paso a paso:

$$
\lnot\,\exists M\,\forall x\;\lvert f(x)\rvert \le M \;\equiv\; \forall M\,\lnot\,\forall x\;\lvert f(x)\rvert \le M
\;\equiv\; \forall M\,\exists x\;\lvert f(x)\rvert > M .
$$

«$f$ no es acotada» significa: por grande que sea $M$, hay un punto donde $\lvert f\rvert$ lo supera. Para $f(x) = x^2$ basta
tomar $x = M + 1$ (si $M \ge 0$, $(M+1)^2 > M$). La definición de límite,
$\forall\varepsilon > 0\;\exists\delta > 0\;\forall x\;\bigl(0 < \lvert x - a\rvert < \delta \Rightarrow \lvert f(x) - L\rvert < \varepsilon\bigr)$,
se niega del mismo modo, y esa negación es lo que se escribe para probar que un límite **no** existe.

**Traducir frases.** «Todo número par mayor que $2$ es suma de dos primos» (la conjetura de Goldbach, sin demostrar) es
$\forall n\,\bigl((n > 2 \land n \text{ par}) \Rightarrow \exists p\,\exists q\,(p, q \text{ primos} \land n = p + q)\bigr)$.
Observa el patrón: **«todo A es B» se escribe $\forall x\,(A(x) \Rightarrow B(x))$** y **«algún A es B» se escribe
$\exists x\,(A(x) \land B(x))$**. Cambiar $\Rightarrow$ por $\land$ en el primero, o $\land$ por $\Rightarrow$ en el segundo,
es un error frecuente.

## 4. Anatomía de una demostración

Una **demostración** es una sucesión finita de afirmaciones, cada una de las cuales es una hipótesis, una definición, un
resultado ya demostrado o una consecuencia lógica de las anteriores, y que termina en lo que se quería probar. Se escribe
en frases completas: las fórmulas sin texto no son una demostración.

La regla de oro: **la forma lógica de la conclusión dice cómo empieza la prueba, y la forma de cada hipótesis dice cómo se
usa.**

| Para **demostrar**… | se hace… |
|---|---|
| $P \Rightarrow Q$ | «Supongamos $P$.» … y se deduce $Q$ (o se supone $\lnot Q$ y se deduce $\lnot P$) |
| $\forall x\, P(x)$ | «Sea $x$ arbitrario.» … y se prueba $P(x)$ sin suponer nada más sobre $x$ |
| $\exists x\, P(x)$ | se exhibe un $x$ concreto y se comprueba $P(x)$ |
| $P \land Q$ | se prueban $P$ y $Q$ por separado |
| $P \lor Q$ | se supone $\lnot P$ y se prueba $Q$ (o se razona por casos) |
| $P \Leftrightarrow Q$ | se prueban $P \Rightarrow Q$ y $Q \Rightarrow P$ |
| $\lnot P$ | se reescribe empujando la negación hacia dentro, o se supone $P$ y se llega a contradicción |

| Para **usar** una hipótesis… | se hace… |
|---|---|
| $\forall x\, P(x)$ | se aplica a cualquier objeto concreto que convenga |
| $\exists x\, P(x)$ | «Sea $x_0$ tal que $P(x_0)$» (un nombre nuevo, del que solo se sabe eso) |
| $P \lor Q$ | se razona por casos: caso $P$ y caso $Q$ |
| $P \Rightarrow Q$ | si se tiene $P$, se obtiene $Q$ (*modus ponens*); si se tiene $\lnot Q$, se obtiene $\lnot P$ |

Las **definiciones** son las herramientas. Las de este nodo: $n$ es **par** si $n = 2k$ con $k \in \mathbb Z$; **impar** si
$n = 2k + 1$; $a$ **divide** a $b$ ($a \mid b$) si $b = ak$ con $k \in \mathbb Z$; un número es **racional** si es $p/q$ con
$p, q$ enteros y $q \neq 0$.

## 5. Técnicas de demostración, con ejemplos que se van desvaneciendo

Cada técnica empieza con un ejemplo completamente resuelto; el siguiente deja huecos que debes rellenar tú antes de abrir la
solución. Es el **desvanecimiento** de los ejemplos resueltos que pide [[tro-aprender-a-aprender]].

### 5.1 Demostración directa

**Teorema.** Si $m$ y $n$ son impares, $mn$ es impar.

*Demostración.* Sean $m$ y $n$ impares (forma: $\forall m\,\forall n\,(\dots \Rightarrow \dots)$: se toman arbitrarios y se
supone la hipótesis). Por definición, $m = 2a + 1$ y $n = 2b + 1$ con $a, b$ enteros. Entonces
$mn = 4ab + 2a + 2b + 1 = 2(2ab + a + b) + 1$, y como $2ab + a + b$ es entero, $mn$ es impar. $\blacksquare$

**Ahora tú.** Demuestra: si $a \mid b$ y $b \mid c$, entonces $a \mid c$.

*Esqueleto.* Supongamos $a \mid b$ y $b \mid c$. Por definición, $b = ak$ y $c = b\ell$ con $k, \ell$ enteros. Entonces
$c = \underline{\qquad}$, luego $a \mid c$.

> [!tip]- Solución
> $c = b\ell = (ak)\ell = a(k\ell)$, y $k\ell$ es entero. $\blacksquare$

### 5.2 Contrarrecíproco

Cuando la hipótesis da poca información y la negación de la conclusión da mucha, se prueba $\lnot Q \Rightarrow \lnot P$.

**Teorema.** Para $n$ entero, si $n^2$ es par, entonces $n$ es par.

*Demostración.* Probamos el contrarrecíproco: si $n$ es impar, $n^2$ es impar. Sea $n = 2k + 1$; entonces
$n^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, impar. $\blacksquare$

(La prueba directa, «$n^2 = 2m$, luego $n = \sqrt{2m}$…», no lleva a ninguna parte: por eso se elige el contrarrecíproco.)

**Ahora tú.** Demuestra que si $3 \nmid n^2$, entonces $3 \nmid n$. Pista sobre la forma: el contrarrecíproco es
«si $3 \mid n$, entonces $3 \mid n^2$».

> [!tip]- Solución
> Si $3 \mid n$, $n = 3k$ y $n^2 = 9k^2 = 3(3k^2)$, luego $3 \mid n^2$. $\blacksquare$

### 5.3 Reducción al absurdo

Se supone la negación de lo que se quiere probar y se deduce una **contradicción** (algo de la forma $R \land \lnot R$).
Funciona porque $\lnot P \Rightarrow \text{falso}$ solo es verdadera si $\lnot P$ es falsa.

**Teorema.** $\sqrt 2$ es irracional.

*Demostración.* Supongamos que $\sqrt 2 = p/q$ con $p, q$ enteros, $q \neq 0$, y la fracción **irreducible** (siempre se
puede simplificar). Entonces $p^2 = 2q^2$, luego $p^2$ es par y, por 5.2, $p$ es par: $p = 2r$. Sustituyendo,
$4r^2 = 2q^2$, es decir $q^2 = 2r^2$, y $q$ también es par. Pero entonces $2$ divide a $p$ y a $q$, contra la
irreducibilidad. $\blacksquare$

**Teorema (Euclides).** Hay infinitos números primos.

*Demostración.* Supongamos que solo hay un número finito: $p_1, \dots, p_k$. Sea $N = p_1 p_2 \cdots p_k + 1$. Como
$N \ge 2$, tiene algún divisor primo $p$, que ha de ser uno de los $p_i$. Pero $p_i$ divide a $p_1\cdots p_k$ y a $N$, luego
divide a su diferencia, $1$: imposible. $\blacksquare$

> [!warning] Lo que la prueba de Euclides no dice
> No dice que $N$ sea primo: $2\cdot3\cdot5\cdot7\cdot11\cdot13 + 1 = 30031 = 59 \cdot 509$. Solo dice que sus factores primos
> no están en la lista.

**Ahora tú.** Demuestra por reducción al absurdo que no existen enteros $a, b$ con $4a + 6b = 1$.

> [!tip]- Solución
> Si existieran, $1 = 2(2a + 3b)$ sería par: contradicción. $\blacksquare$

### 5.4 Demostración por casos

Si una hipótesis es una disyunción (o se puede partir el dominio en casos que lo cubren todo), se prueba la conclusión en
cada caso.

**Teorema.** Para todo entero $n$, $n^2 + n$ es par.

*Demostración.* Caso $n$ par, $n = 2k$: $n^2 + n = 2k(2k + 1)$, par. Caso $n$ impar, $n = 2k + 1$:
$n^2 + n = (2k + 1)(2k + 2) = 2(2k + 1)(k + 1)$, par. Los dos casos cubren todos los enteros. $\blacksquare$

(Otra prueba, más corta: $n^2 + n = n(n + 1)$ es producto de dos enteros consecutivos, uno de los cuales es par.)

**Ahora tú.** Demuestra que el cuadrado de cualquier entero deja resto $0$ o $1$ al dividir entre $3$. Casos: $n = 3k$,
$n = 3k + 1$, $n = 3k + 2$.

> [!tip]- Solución
> $(3k)^2 = 3(3k^2)$; $(3k + 1)^2 = 3(3k^2 + 2k) + 1$; $(3k + 2)^2 = 3(3k^2 + 4k + 1) + 1$. $\blacksquare$
> Consecuencia: ningún cuadrado termina en resto $2$ módulo $3$, así que $n^2 = 3m + 2$ no tiene solución entera.

### 5.5 Existencia, unicidad y contraejemplos

Para probar $\exists x\, P(x)$ basta un **testigo**. A veces se puede probar la existencia sin dar el testigo (prueba **no
constructiva**). *Ejemplo clásico:* existen irracionales $a, b$ con $a^b$ racional. Considérese $\sqrt2^{\sqrt2}$. Si es
racional, sirven $a = b = \sqrt2$. Si es irracional, tómese $a = \sqrt2^{\sqrt2}$ y $b = \sqrt2$:
$a^b = \sqrt2^{\sqrt2\cdot\sqrt2} = \sqrt2^2 = 2$. En ambos casos existe el par, aunque la prueba no dice cuál de los dos es.

Para probar **unicidad** ($\exists!$) se prueba la existencia y después: «si $x$ e $y$ cumplen $P$, entonces $x = y$».

Para **refutar** $\forall x\, P(x)$ basta **un contraejemplo**: un $x$ con $\lnot P(x)$. Ningún número de ejemplos favorables
demuestra un enunciado universal. El polinomio de Euler $n^2 + n + 41$ da primos para $n = 0, 1, \dots, 39$; para $n = 40$,
$40^2 + 40 + 41 = 41^2$. Cuarenta casos a favor y la afirmación es falsa.

### 5.6 Inducción

**Principio de inducción.** Si $P(n_0)$ es cierta (**base**) y, para todo $k \ge n_0$, $P(k) \Rightarrow P(k + 1)$
(**paso**), entonces $P(n)$ es cierta para todo $n \ge n_0$.

Es válido porque todo subconjunto no vacío de $\mathbb N$ tiene mínimo (**buena ordenación**): si $P$ fallase en algún
$n \ge n_0$, habría un mínimo $m$ donde falla; $m \neq n_0$ por la base, luego $P(m - 1)$ es cierta y el paso da $P(m)$,
contradicción.

**Ejemplo resuelto (una desigualdad).** Para todo $n \ge 5$, $2^n > n^2$.

- *Base:* $2^5 = 32 > 25$.
- *Paso:* supongamos $2^k > k^2$ con $k \ge 5$. Entonces $2^{k+1} = 2\cdot2^k > 2k^2$. Falta ver $2k^2 \ge (k + 1)^2$, es
  decir $k^2 - 2k - 1 \ge 0$, que vale para $k \ge 3$ (pues $k^2 - 2k - 1 = (k - 1)^2 - 2 \ge 2$). Luego
  $2^{k+1} > (k + 1)^2$. $\blacksquare$

La base importa: para $n = 4$ hay igualdad ($16 = 16$) y para $n = 2, 3$ la desigualdad falla.

**Ahora tú (con huecos).** Desigualdad de Bernoulli: si $x > -1$, entonces $(1 + x)^n \ge 1 + nx$ para todo $n \ge 0$.
Base: $n = 0$, $\underline{\qquad}$. Paso: $(1 + x)^{k+1} = (1 + x)^k(1 + x) \ge (1 + kx)(1 + x)$, donde se ha usado que
$1 + x > 0$ (¿por qué hace falta?). Desarrolla y concluye.

> [!tip]- Solución
> Base: $1 \ge 1$. Hace falta $1 + x > 0$ para que multiplicar la desigualdad de la hipótesis por $1 + x$ no cambie su
> sentido. $(1 + kx)(1 + x) = 1 + (k + 1)x + kx^2 \ge 1 + (k + 1)x$ porque $kx^2 \ge 0$. $\blacksquare$

**Inducción fuerte.** El paso supone $P(n_0), P(n_0 + 1), \dots, P(k)$ todas a la vez y deduce $P(k + 1)$. Es la forma
natural cuando el caso $k + 1$ depende de casos anteriores que no son el inmediato.

**Ejemplo resuelto.** Todo franqueo de $n \ge 8$ céntimos se paga con sellos de $3$ y $5$.

- *Bases:* $8 = 3 + 5$, $9 = 3 + 3 + 3$, $10 = 5 + 5$.
- *Paso:* sea $k \ge 10$ y supongamos que todo valor entre $8$ y $k$ se puede pagar. Como $k - 2 \ge 8$, el valor $k - 2$ se
  paga, y añadiendo un sello de $3$ se paga $k + 1$. $\blacksquare$

Se necesitan tres bases porque el paso salta de $3$ en $3$. En general, con sellos coprimos $a$ y $b$ el mayor valor
imposible es $ab - a - b$ (con $3$ y $5$, $7$).

> [!warning] La falsa inducción de los caballos
> «Todos los caballos son del mismo color»: en un grupo de $k + 1$ caballos, quitando el primero quedan $k$ del mismo color, y
> quitando el último también, luego todos coinciden. El paso falla de $k = 1$ a $k = 2$: los dos grupos de un caballo **no
> se solapan**. Comprueba siempre que el paso vale desde la base.

## 6. Conjuntos

Un **conjunto** queda determinado por sus elementos (**extensionalidad**): $A = B$ si y solo si
$\forall x\,(x \in A \Leftrightarrow x \in B)$. Se escribe por extensión, $\{1, 2, 3\}$, o por comprensión,
$\{x \in \mathbb Z : x^2 < 10\}$. Operaciones: $A \cup B = \{x : x \in A \lor x \in B\}$,
$A \cap B = \{x : x \in A \land x \in B\}$, $A \setminus B = \{x : x \in A \land x \notin B\}$, el **producto cartesiano**
$A \times B = \{(a, b) : a \in A, b \in B\}$ y el **conjunto de partes** $\mathcal P(A)$ (todos los subconjuntos de $A$).

Cada operación es un conectivo disfrazado: $\cup$ es $\lor$, $\cap$ es $\land$, el complemento es $\lnot$. Por eso las leyes
de la lógica se convierten en leyes de conjuntos.

**Demostrar una igualdad de conjuntos: doble inclusión.** $A = B$ se prueba viendo $A \subseteq B$ («sea $x \in A$… luego
$x \in B$») y $B \subseteq A$.

**Ejemplo resuelto.** $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$.

*Demostración.* Sea $x$ arbitrario.
$x \in A \setminus (B \cup C) \iff x \in A \land \lnot(x \in B \lor x \in C) \iff x \in A \land x \notin B \land x \notin C$
(De Morgan) $\iff (x \in A \land x \notin B) \land (x \in A \land x \notin C) \iff x \in (A \setminus B) \cap (A \setminus C)$.
Cada paso es una equivalencia lógica, así que se prueban las dos inclusiones a la vez. $\blacksquare$

**Ahora tú.** Demuestra que $A \subseteq B$ si y solo si $A \cap B = A$.

> [!tip]- Solución
> ($\Rightarrow$) Siempre $A \cap B \subseteq A$. Si $x \in A$, por hipótesis $x \in B$, luego $x \in A \cap B$: así
> $A \subseteq A \cap B$. ($\Leftarrow$) Si $x \in A = A \cap B$, entonces $x \in B$. $\blacksquare$

**Contar uniones: inclusión-exclusión.**
$\lvert A \cup B \cup C\rvert = \lvert A\rvert + \lvert B\rvert + \lvert C\rvert - \lvert A \cap B\rvert - \lvert A \cap C\rvert - \lvert B \cap C\rvert + \lvert A \cap B \cap C\rvert$.
Y en general, para $A_1, \dots, A_n$ finitos,

$$
\Bigl\lvert\bigcup_{i=1}^{n} A_i\Bigr\rvert = \sum_{\varnothing \neq S \subseteq \{1,\dots,n\}} (-1)^{\lvert S\rvert + 1}\, \Bigl\lvert\bigcap_{i \in S} A_i\Bigr\rvert .
$$

*Demostración.* Un elemento que está en exactamente $m \ge 1$ de los conjuntos aparece en $\binom mj$ intersecciones de $j$
conjuntos, así que se cuenta $\sum_{j=1}^{m}(-1)^{j+1}\binom mj = 1 - (1 - 1)^m = 1$ vez (binomio de Newton). Uno que no está
en ninguno, $0$ veces. $\blacksquare$

*Ejemplo:* entre $1$ y $100$, divisibles por $2$ o por $3$: $50 + 33 - 16 = 67$ (los divisibles por ambos son los
múltiplos de $6$).

## 7. Relaciones

Una **relación** $R$ en un conjunto $A$ es un subconjunto de $A \times A$; se escribe $x \mathrel R y$ si $(x, y) \in R$. Con
$\lvert A\rvert = n$ hay $n^2$ pares posibles y, por tanto, $2^{n^2}$ relaciones. Propiedades:

- **reflexiva**: $\forall x\; x \mathrel R x$;
- **simétrica**: $\forall x\,\forall y\;(x \mathrel R y \Rightarrow y \mathrel R x)$;
- **antisimétrica**: $\forall x\,\forall y\;\bigl((x \mathrel R y \land y \mathrel R x) \Rightarrow x = y\bigr)$;
- **transitiva**: $\forall x\,\forall y\,\forall z\;\bigl((x \mathrel R y \land y \mathrel R z) \Rightarrow x \mathrel R z\bigr)$.

**Contar con la definición.** Una relación reflexiva y simétrica en un conjunto de $n$ elementos queda fijada al decidir,
para cada uno de los $\binom n2$ pares $\{x, y\}$ con $x \neq y$, si están relacionados (en los dos sentidos a la vez): hay
$2^{\binom n2}$. La diagonal no deja elección (es obligatoria).

Una relación **de equivalencia** es reflexiva, simétrica y transitiva (ejemplo: «tener el mismo resto módulo $m$»). La
**clase** de $a$ es $[a] = \{x \in A : x \mathrel R a\}$.

**Teorema.** Las clases de una relación de equivalencia en $A$ forman una **partición** de $A$ (bloques no vacíos, disjuntos
dos a dos, que lo cubren), y toda partición de $A$ proviene de exactamente una relación de equivalencia.

*Demostración.* Cada $a$ está en $[a]$ por reflexividad: las clases no son vacías y cubren $A$. Si $[a] \cap [b] \neq \varnothing$,
tómese $c$ en ambas: $c \mathrel R a$ y $c \mathrel R b$; por simetría $a \mathrel R c$, y por transitividad $a \mathrel R b$.
Entonces todo $x \in [a]$ cumple $x \mathrel R a \mathrel R b$, luego $x \in [b]$; y al revés. Así $[a] = [b]$: dos clases o
coinciden o son disjuntas. Recíprocamente, dada una partición, «estar en el mismo bloque» es reflexiva, simétrica y
transitiva, y sus clases son los bloques. $\blacksquare$

Por eso **contar relaciones de equivalencia es contar particiones**. El número de particiones de un conjunto de $n$ elementos
en exactamente $k$ bloques es el **número de Stirling de segunda clase** $S(n, k)$, y cumple

$$
S(n, k) = k\,S(n - 1, k) + S(n - 1, k - 1), \qquad S(0, 0) = 1 .
$$

*Demostración (conteo por casos sobre el último elemento).* O el elemento $n$ forma un bloque él solo (y los demás se
reparten en $k - 1$ bloques: $S(n - 1, k - 1)$ formas), o se añade a uno de los $k$ bloques de una partición de los otros
$n - 1$ ($k\,S(n - 1, k)$ formas). $\blacksquare$ La suma $B_n = \sum_k S(n, k)$ es el **número de Bell**:
$1, 1, 2, 5, 15, 52, 203, \dots$

Una relación **de orden** (parcial) es reflexiva, antisimétrica y transitiva: $\le$ en $\mathbb R$, la divisibilidad en
$\mathbb N$, la inclusión entre conjuntos.

## 8. Funciones

Una **función** $f : A \to B$ asigna a cada $a \in A$ exactamente un $f(a) \in B$. Es:

- **inyectiva** si $f(x) = f(y) \Rightarrow x = y$ (elementos distintos, imágenes distintas);
- **sobreyectiva** si $\forall b \in B\;\exists a \in A\; f(a) = b$;
- **biyectiva** si es ambas; entonces tiene **inversa** $f^{-1} : B \to A$.

Cómo se demuestran: para la inyectividad, «supongamos $f(x) = f(y)$» y se despeja hasta $x = y$; para la sobreyectividad, se
toma $b$ arbitrario y se **construye** el $a$.

**Ejemplo resuelto.** $f : \mathbb R \to \mathbb R$, $f(x) = 3x - 7$ es biyectiva. *Inyectiva:* si $3x - 7 = 3y - 7$,
entonces $x = y$. *Sobreyectiva:* dado $b$, $a = (b + 7)/3$ cumple $f(a) = b$. Por contra, $g(x) = x^2$ no es inyectiva
($g(-1) = g(1)$) ni sobreyectiva sobre $\mathbb R$ (nada va a $-1$).

**Ahora tú.** Demuestra que la composición de dos funciones inyectivas $f : A \to B$, $g : B \to C$ es inyectiva.

> [!tip]- Solución
> Si $g(f(x)) = g(f(y))$, por inyectividad de $g$, $f(x) = f(y)$; por la de $f$, $x = y$. $\blacksquare$

**Contar funciones** de un conjunto de $m$ elementos en uno de $n$:

- todas: $n^m$ (cada elemento elige imagen);
- inyectivas: $n(n - 1)\cdots(n - m + 1)$ (cada elemento elige entre las imágenes aún libres); ninguna si $m > n$;
- sobreyectivas: por inclusión-exclusión sobre los conjuntos «funciones que no alcanzan el elemento $j$»:
  $\displaystyle\sum_{j=0}^{n}(-1)^j\binom nj(n - j)^m$. Equivalentemente $n!\,S(m, n)$: partir el dominio en $n$ bloques
  (las preimágenes) y asignar cada bloque a una imagen distinta.

Ejemplo: de $4$ en $2$, $2^4 - 2\cdot1^4 + 0 = 14 = 2!\,S(4, 2) = 2\cdot7$.

**Principio del palomar.** Si $m > n$, ninguna función de un conjunto de $m$ elementos en uno de $n$ es inyectiva: dos
«palomas» comparten «nido». Es el contrarrecíproco de «si $f$ es inyectiva, $m \le n$». *Ejemplo:* entre $11$ números
distintos de $\{1, \dots, 20\}$ hay dos con uno divisor del otro. Escribe cada número como $2^k\cdot i$ con $i$ impar: hay solo
$10$ impares posibles ($1, 3, \dots, 19$), así que dos números comparten $i$, y el de menor potencia de $2$ divide al otro.
Con $10$ no basta: $\{11, 12, \dots, 20\}$ no tiene ningún par así.

**Cardinal.** Dos conjuntos tienen el mismo **cardinal** si hay una biyección entre ellos. Un conjunto es **numerable** si
biyecta con $\mathbb N$ (se puede listar en una sucesión). $\mathbb Z$ lo es ($0, 1, -1, 2, -2, \dots$), y también
$\mathbb N \times \mathbb N$, mediante la **función de emparejamiento de Cantor**
$\pi(x, y) = \frac{(x + y)(x + y + 1)}{2} + y$, que recorre las diagonales $x + y = 0, 1, 2, \dots$ una tras otra. De ahí se
deduce que $\mathbb Q$ es numerable.

**Teorema (Cantor).** Para todo conjunto $A$, no existe ninguna sobreyección $f : A \to \mathcal P(A)$.

*Demostración.* Dada $f$, sea $D = \{a \in A : a \notin f(a)\}$. Si fuese $D = f(d)$ para algún $d$, entonces
$d \in D \iff d \notin f(d) = D$: contradicción. Luego $D$ no está en la imagen. $\blacksquare$

Consecuencia: $\mathcal P(\mathbb N)$ no es numerable, y tampoco $\mathbb R$ (que tiene su mismo cardinal). Hay infinitos de
tamaños distintos. El argumento de la **diagonal** es el mismo que, en informática, prueba que el problema de la parada es
indecidible.

## 9. Comprobar con un programa (y por qué no basta)

Un programa recorre todos los casos **finitos**: sirve para comprobar una tautología, encontrar un contraejemplo o verificar
una fórmula de conteo en tamaños pequeños. No demuestra un enunciado sobre infinitos casos, pero detecta enseguida uno falso.

```python
from itertools import product

def imp(a, b):
    return (not a) or b

def tautologia(f, n):
    return all(f(*v) for v in product([False, True], repeat=n))

assert tautologia(lambda p, q, r: imp(imp(p, q) and imp(q, r), imp(p, r)), 3)
assert not tautologia(lambda p, q: imp(imp(p, q), imp(q, p)), 2)

def es_primo(n):
    return n >= 2 and all(n % d for d in range(2, int(n ** 0.5) + 1))

n = 0
while es_primo(n * n + n + 41):
    n += 1
assert n == 40 and n * n + n + 41 == 41 ** 2
```

## 10. Errores típicos

- **Afirmar el consecuente**: de $p \Rightarrow q$ y $q$ concluir $p$. Es la confusión con el recíproco.
- **Negar mal**: la negación de «todos los $x$ cumplen $P$» no es «ningún $x$ cumple $P$», sino «algún $x$ no cumple $P$».
- **Probar con ejemplos** un enunciado universal; o creer que un contraejemplo necesita más de un caso.
- **Usar lo que se quiere demostrar** (razonamiento circular), a veces escondido en un «es evidente que…».
- **Dividir por algo que puede ser cero** o multiplicar una desigualdad por algo que puede ser negativo.
- **Tomar un ejemplo concreto** cuando hay que probar $\forall x$: «sea $x = 3$» no prueba nada para todo $x$.
- **Inducción** sin base, o con un paso que no vale para el primer valor.
- En $\forall x\,\exists y$, elegir un $y$ que **no** dependa de $x$ cuando hace falta que dependa (o al revés).
- Contar dos veces (conjuntos no disjuntos sin inclusión-exclusión) u olvidar casos.

## 11. Resumen

- Conectivos y tablas; $p \Rightarrow q \equiv \lnot p \lor q \equiv \lnot q \Rightarrow \lnot p$; De Morgan;
  $\lnot(p \Rightarrow q) \equiv p \land \lnot q$.
- Cuantificadores: negar intercambia $\forall$ y $\exists$; el orden de cuantificadores distintos importa; «todo A es B» es
  $\forall x\,(A \Rightarrow B)$ y «algún A es B» es $\exists x\,(A \land B)$.
- La forma de la conclusión dicta el arranque de la prueba; la forma de la hipótesis, cómo usarla.
- Técnicas: directa, contrarrecíproco, absurdo, casos, existencia (constructiva o no), contraejemplo, inducción simple y fuerte.
- Conjuntos por doble inclusión; inclusión-exclusión; equivalencia = partición; $S(n, k)$ y números de Bell.
- Funciones: inyectiva, sobreyectiva, biyectiva; $n^m$, $n^{\underline m}$, $n!\,S(m, n)$; palomar; Cantor.

## Ejercicios de demostración (sin autocorrección)

Escríbelos completos, en frases, y compáralos con las soluciones de Velleman o de *Book of Proof*:

1. Demuestra por inducción que $\sum_{k=1}^{n} k^3 = \bigl(\frac{n(n+1)}{2}\bigr)^2$.
2. Demuestra que $\sqrt 3$ es irracional (adapta 5.3 usando el ejercicio de 5.2).
3. Demuestra que la composición de dos sobreyecciones es sobreyectiva.
4. Demuestra que $f : \mathbb Z \to \mathbb Z$, $f(n) = n + (-1)^n$ es una biyección y calcula su inversa.
5. Demuestra que todo entero $n \ge 2$ es producto de primos (inducción fuerte).

## Reto

Calcula tres enteros. Cada uno se obtiene razonando; programar solo sirve para comprobar.

- **a.** Número de asignaciones de verdad de $x_1, \dots, x_{12}$ que satisfacen
  $$\varphi = \bigwedge_{i=1}^{11} (x_i \lor x_{i+1}).$$
- **b.** Número de funciones sobreyectivas de un conjunto de 10 elementos en uno de 4.
- **c.** Número de relaciones de equivalencia distintas en un conjunto de 9 elementos.

Formato de la flag, en decimal y sin separadores de millares: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. $p \Rightarrow q$ solo es falsa con $p$ V y $q$ F; su contrarrecíproco es equivalente y su recíproco no.
2. $\lnot\forall x\,P \equiv \exists x\,\lnot P$; en $\forall x\,\exists y$ el $y$ depende de $x$.
3. Para probar $\forall x$: «sea $x$ arbitrario»; para refutarlo, un contraejemplo.
4. Inducción: base, paso válido desde la base; fuerte cuando se necesitan varios casos anteriores.
5. Equivalencias = particiones; sobreyecciones $= n!\,S(m, n)$ por inclusión-exclusión; no hay sobreyección $A \to \mathcal P(A)$.

## Siguiente

[[mat-matematica-discreta]] aplica estas técnicas a recurrencias, grafos y aritmética modular; [[mat-analisis-real]] y
[[mat-estructuras-algebraicas]] son, desde la primera página, definiciones y demostraciones.
