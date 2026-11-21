---
id: mat-logica-demostraciones
title: "Lógica y demostración: cómo se escribe una prueba"
area: matematicas
trunk_level: 7
prerequisites: [mat-algebra-secundaria, mat-combinatoria-probabilidad-basica]
academic_sources:
  - "Delgado Pineda, M.; Muñoz Bouzo, M. J. Lenguaje matemático, conjuntos y números, 3.ª ed. Sanz y Torres, 2025, temas 1 (lógica), 2 (conjuntos) y 3 (relaciones y aplicaciones): texto base de la asignatura «Lenguaje matemático, conjuntos y números» (61021039) de la UNED."
  - "Velleman, D. J. How to Prove It: A Structured Approach, 3ª ed. Cambridge University Press, 2019."
  - "Hammack, R. Book of Proof, 3ª ed. (3.4, 2025), caps. 1 (conjuntos), 2 (lógica), 4-7 (demostración directa, contrarrecíproco, reducción al absurdo, enunciados no condicionales), 9 (refutar), 10 (inducción), 11 (relaciones), 12 (funciones) y 14 (cardinalidad). Gratuito en https://richardhammack.github.io/BookOfProof/"
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
      ¿En cuántas de las ${{N}}$ asignaciones de valores de verdad a ${{vars}}$ es verdadera ${{f}}$? Respuesta: un entero.
    variants:
      - values: {"N":16,"vars":"p, q, r, s","f":"(p \\lor q) \\land (r \\lor s)"}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"N":16,"vars":"p, q, r, s","f":"(p \\land q) \\lor (r \\land s)"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"N":16,"vars":"p, q, r, s","f":"(p \\Rightarrow q) \\lor (r \\Rightarrow s)"}
        answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
      - values: {"N":16,"vars":"p, q, r, s","f":"(p \\Leftrightarrow q) \\land (r \\Leftrightarrow s)"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"N":8,"vars":"p, q, r","f":"(p \\Rightarrow q) \\land (q \\Rightarrow r)"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"N":64,"vars":"p, q, r, s, t, u","f":"(p \\Rightarrow q) \\land (r \\Rightarrow s) \\land (t \\Rightarrow u)"}
        answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
  - id: cuales-son-tautologias
    tier: 1
    prompt: |
      ¿Cuáles de estas fórmulas son **tautologías** (verdaderas en todas las filas)?

      (a) $p \lor \lnot p$ · (b) $(p \Rightarrow q) \Rightarrow (q \Rightarrow p)$ · (c) $\bigl((p \Rightarrow q) \land p\bigr) \Rightarrow q$ · (d) $(p \Rightarrow q) \lor (q \Rightarrow p)$ · (e) $\lnot(p \land q) \Rightarrow (\lnot p \land \lnot q)$ · (f) $\bigl((p \Rightarrow q) \land (q \Rightarrow r)\bigr) \Rightarrow (p \Rightarrow r)$

      Respuesta: las letras en orden alfabético separadas por `;` (por ejemplo `a;b`).
    answers: ["sha256:8dd5e8acfd17b065ea0fa4ae0f5249f0ab21d8d90047e807e9a1606dcb9f7ab9","sha256:51dc5be712faa568a924961e7449c435cc8cdb5fd8402fb706ce41ff1e781b11"]
  - id: funciones-booleanas
    tier: 1
    prompt: |
      Una función booleana de ${{n}}$ variables asigna $V$ o $F$ a cada fila de una tabla de verdad de ${{n}}$ variables. ¿Cuántas funciones booleanas distintas de ${{n}}$ variables hay? Respuesta: un entero.
    variants:
      - values: {"n":1}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"n":4}
        answers: ["sha256:0f255ec16482c343fd099ba9668863778be40dc166a6856b1d470e0bc97cc6fd"]
      - values: {"n":5}
        answers: ["sha256:6c1ca4002509bc24e93aa4211830738fce7e205e41364e11301ac5a0635cb4b5"]
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
      En el dominio $D = \{0, 1, \dots, {{ult}}\}$ sea $P(x, y)$: «$x + y$ es múltiplo de ${{m}}$». Di si es verdadera (V) o falsa (F) cada afirmación:

      1. $\forall x\,\exists y\; P(x, y)$
      2. $\exists y\,\forall x\; P(x, y)$
      3. $\forall x\,\forall y\;\bigl(P(x, y) \Rightarrow P(y, x)\bigr)$
      4. $\exists x\; P(x, x)$
      5. $\forall x\;\bigl(P(x, x) \Rightarrow x = 0\bigr)$

      Respuesta: cinco letras `v` o `f` en orden, separadas por `;` (por ejemplo `v;v;f;f;v`).
    variants:
      - values: {"m":7,"ult":6}
        answers: ["sha256:c049e80dad1b968a001b754783ab30667cf527c8ebef51c2923ee29bc14aabb6"]
      - values: {"m":12,"ult":11}
        answers: ["sha256:eb1c25cb1639322239a179e41087d4bd8c62adc87461a1c625e02c6003066c92"]
      - values: {"m":9,"ult":8}
        answers: ["sha256:c049e80dad1b968a001b754783ab30667cf527c8ebef51c2923ee29bc14aabb6"]
      - values: {"m":6,"ult":5}
        answers: ["sha256:eb1c25cb1639322239a179e41087d4bd8c62adc87461a1c625e02c6003066c92"]
      - values: {"m":11,"ult":10}
        answers: ["sha256:c049e80dad1b968a001b754783ab30667cf527c8ebef51c2923ee29bc14aabb6"]
      - values: {"m":8,"ult":7}
        answers: ["sha256:eb1c25cb1639322239a179e41087d4bd8c62adc87461a1c625e02c6003066c92"]
  - id: contraejemplo-de-euler
    tier: 2
    prompt: |
      El polinomio $n^2 + n + {{p}}$ da números primos para los primeros valores de $n = 0, 1, 2, \dots$ ¿Cuál es el **menor** $n \ge 0$ para el que $n^2 + n + {{p}}$ **no** es primo? Respuesta: un entero.
    variants:
      - values: {"p":17}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
      - values: {"p":11}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"p":5}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"p":3}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"p":7}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"p":13}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: sellos-de-5-y-8
    tier: 2
    prompt: |
      Con sellos de ${{a}}$ y ${{b}}$ céntimos (tantos de cada uno como se quiera), ¿cuál es el **mayor** franqueo en céntimos que **no** se puede pagar exactamente? (A partir del siguiente valor todos se pueden pagar: se demuestra por inducción fuerte con ${{casos}}$ casos base.) Respuesta: un entero.
    variants:
      - values: {"a":3,"b":7,"casos":3}
        answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
      - values: {"a":4,"b":9,"casos":4}
        answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
      - values: {"a":5,"b":7,"casos":5}
        answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
      - values: {"a":6,"b":11,"casos":6}
        answers: ["sha256:0e17daca5f3e175f448bacace3bc0da47d0655a74c8dd0dc497a3afbdad95f1f"]
      - values: {"a":7,"b":9,"casos":7}
        answers: ["sha256:31489056e0916d59fe3add79e63f095af3ffb81604691f21cad442a85c7be617"]
      - values: {"a":3,"b":10,"casos":3}
        answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
  - id: base-de-la-induccion
    tier: 2
    prompt: |
      ¿Cuál es el menor entero $n_0 \ge 0$ tal que ${{izq}} > {{der}}$ para **todo** $n \ge n_0$? (Prueba los primeros valores y después demuestra el paso inductivo.) Respuesta: un entero.
    variants:
      - values: {"izq":"2^n","der":"n^3"}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"izq":"3^n","der":"n^3"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"izq":"2^n","der":"n^4"}
        answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
      - values: {"izq":"2^n","der":"10n"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"izq":"3^n","der":"n^4"}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"izq":"n!","der":"3^n"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: inclusion-exclusion-1000
    tier: 2
    prompt: |
      ¿Cuántos enteros entre $1$ y ${{N}}$ (ambos incluidos) son divisibles por ${{a}}$, por ${{b}}$ o por ${{c}}$? Respuesta: un entero.
    variants:
      - values: {"N":600,"a":2,"b":3,"c":7}
        answers: ["sha256:2d1007980f49215311f7f1012e84f99b801eb5daeca04dedea3ada41cc45353b"]
      - values: {"N":1000,"a":3,"b":5,"c":7}
        answers: ["sha256:18beb4813723e788a1d79bcbf80802538ec813aa19ded2e9c21cbf08bed6bee3"]
      - values: {"N":500,"a":2,"b":5,"c":7}
        answers: ["sha256:0791963ca2667a23cf3268ad25d7bb6ca0ed287b192869703cdbcf0e87934c33"]
      - values: {"N":2000,"a":3,"b":4,"c":5}
        answers: ["sha256:15197cf7214b58e67cae565e573ffd9aa44bcb81f8ee5d7185dfe8da0a16ef43"]
      - values: {"N":360,"a":4,"b":6,"c":9}
        answers: ["sha256:dbae772db29058a88f9bd830e957c695347c41b6162a7eb9a9ea13def34be56b"]
      - values: {"N":1200,"a":5,"b":6,"c":8}
        answers: ["sha256:ddfe0e8d462af661f81db36589c39882dc0f2330785b5d80cd34f2f520ad618f"]
  - id: relaciones-reflexivas-simetricas
    tier: 2
    prompt: |
      ¿Cuántas relaciones en un conjunto de ${{n}}$ elementos son **{{prop}}**? Respuesta: un entero.
    variants:
      - values: {"n":3,"prop":"reflexivas y simétricas"}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"n":4,"prop":"simétricas"}
        answers: ["sha256:e39eef82f61b21e2e7f762fcc4307358f165757f2e77ec855d6992f7e0191932"]
      - values: {"n":3,"prop":"reflexivas"}
        answers: ["sha256:a68b412c4282555f15546cf6e1fc42893b7e07f271557ceb021821098dd66c1b"]
      - values: {"n":3,"prop":"antisimétricas"}
        answers: ["sha256:0f4121d0ef1df4c86854c7ebb47ae1c93de8aec8f944035eeaa6495dd71a0678"]
      - values: {"n":4,"prop":"reflexivas"}
        answers: ["sha256:8b926d75599a618e21f1341318e66517be26e18cc7496783d2b59758c1333be8"]
      - values: {"n":2,"prop":"antisimétricas"}
        answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: funciones-inyectivas
    tier: 2
    prompt: |
      ¿Cuántas funciones **inyectivas** hay de un conjunto de ${{m}}$ elementos en uno de ${{n}}$? Respuesta: un entero.
    variants:
      - values: {"m":3,"n":5}
        answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
      - values: {"m":5,"n":5}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"m":2,"n":9}
        answers: ["sha256:8722616204217eddb39e7df969e0698aed8e599ba62ed2de1ce49b03ade0fede"]
      - values: {"m":4,"n":6}
        answers: ["sha256:838f461c2fa673cec73e6eecdafa88b127802d6cb0a61c53175197a122cb645a"]
      - values: {"m":5,"n":8}
        answers: ["sha256:3e8ab67ce1b66389c3ae94f9c8f8afdeb70b46a33640554f352868f99d2f5616"]
      - values: {"m":3,"n":10}
        answers: ["sha256:d829857eb1366e70be857a69886d1555af0d32681beab068afb93492c2e2b843"]
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
      ¿Cuántas funciones **sobreyectivas** hay de un conjunto de ${{m}}$ elementos en uno de ${{n}}$? Respuesta: un entero.
    variants:
      - values: {"m":5,"n":3}
        answers: ["sha256:9ae2bdd7beedc2e766c6b76585530e16925115707dc7a06ab5ee4aa2776b2c7b"]
      - values: {"m":6,"n":2}
        answers: ["sha256:81b8a03f97e8787c53fe1a86bda042b6f0de9b0ec9c09357e107c99ba4d6948a"]
      - values: {"m":7,"n":3}
        answers: ["sha256:a78000a5ff6306012360b87357e93eb04bd07897b57167459c36c70215ddbc70"]
      - values: {"m":5,"n":4}
        answers: ["sha256:6af1f692e9496c6d0b668316eccb93276ae6b6774fa728aac31ff40a38318760"]
      - values: {"m":6,"n":4}
        answers: ["sha256:c649b15e769148e6b199b7a671140d60c77847fce6fe17277723dc91f0b27d4c"]
      - values: {"m":7,"n":2}
        answers: ["sha256:65a699905c02619370bcf9207f5a477c3d67130ca71ec6f750e07fe8d510b084"]
  - id: particiones-en-tres-bloques
    tier: 3
    prompt: |
      ¿De cuántas formas se puede partir un conjunto de ${{n}}$ elementos en exactamente ${{k}}$ bloques no vacíos (sin orden entre los bloques)? (Es el número de Stirling de segunda clase $S({{n}}, {{k}})$.) Respuesta: un entero.
    variants:
      - values: {"n":5,"k":2}
        answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
      - values: {"n":7,"k":3}
        answers: ["sha256:c3ea99f86b2f8a74ef4145bb245155ff5f91cd856f287523481c15a1959d5fd1"]
      - values: {"n":6,"k":2}
        answers: ["sha256:eb1e33e8a81b697b75855af6bfcdbcbf7cbbde9f94962ceaec1ed8af21f5a50f"]
      - values: {"n":5,"k":3}
        answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
      - values: {"n":7,"k":4}
        answers: ["sha256:deeeb5df3f2cee6bf4e597a8a3a878a6ce49b932b9e90b416922d4499f54fae6"]
      - values: {"n":6,"k":4}
        answers: ["sha256:108c995b953c8a35561103e2014cf828eb654a99e310f87fab94c2f4b7d2a04f"]
  - id: involuciones
    tier: 3
    prompt: |
      Una **involución** de un conjunto $A$ es una biyección $f: A \to A$ con $f \circ f = \mathrm{id}_A$. ¿Cuántas involuciones tiene un conjunto de ${{n}}$ elementos? Respuesta: un entero.
    variants:
      - values: {"n":4}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"n":5}
        answers: ["sha256:5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca"]
      - values: {"n":7}
        answers: ["sha256:835d5e8314340ab852a2f979ab4cd53e994dbe38366afb6eed84fe4957b980c8"]
      - values: {"n":8}
        answers: ["sha256:aaee0ce51abf0849e68b257ab97d83a36d9d082916b939cd1012f27d7f6bb873"]
      - values: {"n":3}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"n":9}
        answers: ["sha256:1483c82372b98e6864d52a9e4a66c92ac7b568d7f2ffca7f405ea0853af10e89"]
  - id: palomar-divisibilidad
    tier: 3
    prompt: |
      ¿Cuál es el **menor** $k$ tal que, elegidos $k$ números distintos cualesquiera de $\{1, 2, \dots, {{M}}\}$, siempre hay dos de ellos con uno divisor del otro? Respuesta: un entero.
    variants:
      - values: {"M":30}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
      - values: {"M":50}
        answers: ["sha256:5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca"]
      - values: {"M":24}
        answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
      - values: {"M":100}
        answers: ["sha256:031b4af5197ec30a926f48cf40e11a7dbc470048a21e4003b7a3c07c5dab1baa"]
      - values: {"M":16}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"M":60}
        answers: ["sha256:eb1e33e8a81b697b75855af6bfcdbcbf7cbbde9f94962ceaec1ed8af21f5a50f"]
  - id: emparejamiento-de-cantor
    tier: 3
    prompt: |
      La función $\pi(x, y) = \dfrac{(x + y)(x + y + 1)}{2} + y$ es una biyección de $\mathbb{N} \times \mathbb{N}$ en $\mathbb{N}$ (con $0 \in \mathbb{N}$). ¿Qué par $(x, y)$ cumple $\pi(x, y) = {{z}}$? Respuesta: `x;y`.
    variants:
      - values: {"z":50}
        answers: ["sha256:37aa7858d15e526023c427fea4c89851844c80d860819a6f2f7b889d1539d0a2"]
      - values: {"z":77}
        answers: ["sha256:c8730c504f54a49095f0e69e6f13acf28f89c617fade812c57b74c1496b2b75d"]
      - values: {"z":200}
        answers: ["sha256:1d5790e08fbafa4ace1456f27b2b7e301c02a9c562723d8e106ddbda1d305030"]
      - values: {"z":31}
        answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
      - values: {"z":1000}
        answers: ["sha256:a842d115f6aaaad541fe1adf85bc3ce67a30cf080828cdd56a7351e9cd2df0cd"]
      - values: {"z":64}
        answers: ["sha256:1762a6b859ceda5a80a741c7d8881ef0722cb76eb483d310bcf42246ffd761b8"]
  - id: induccion-suma-de-impares
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra por inducción que, para todo entero $n \ge 1$,
      $$
      1 + 3 + 5 + \cdots + (2n - 1) = n^2 .
      $$
      Escribe claramente la proposición $P(n)$, el caso base, la hipótesis de inducción y el paso inductivo.
    sealed: "gz64:H4sIAAAAAAACCn1TTW/TQBT8KyNrD3aSRrIRF0s5VSCQOFT0yJJqs36kq+6Hu+sFhcg/qOKEeoMb+WPI66bErejN8tuZN2/mvX0WnI6dcjars0sSYBe5LVgNxnmjQqvFLnQ7TZyHaK72N6uyX+9tj7y6wRnKAivYdcWW3HI7m52L4LARgWYz5MxihZIVNUhDi8ZBfb+NinzjQAGsZNgNpYY8yWsHVq6rhFjikiCjaTU98L5T7eG+o6ACGoKyTZRSHe7tcjbDZWyd3QrjAm4jDfpNwYYGUpHvBFrhBaIFM+B8SygZZBQ6KRFpzpPJTJ9XN2dpLPNvrIthrNS1U19dakoD7dCTNA6/dKeMQ4hG2MZhhxhSTQtcPyqvuWWM22m7edmfOMl5tA35jReS9s91pWf91T5p6zEH5xu11XmVm3lZDNX0wz+oxxyVwRwlVsjTR7GusBxlfIi0daNZ4Pyj2l53wnv3DReJ7DFQZ6WO4ej1uTMJVE4c3r3AM9rfucadBLBA6/zgXOuVlapVbhort+MWPk1xpLFHmqQxf9+QwJacOdx1XklRD2HLKBo/rFxDYJbzThkKsAxttJ0LCIQvzhsBcfgpGkVDbH9+UBhx4c/vBCwXeLXA6wU4b1wXjuhlkS0yHzdeyaz+tM+kVx155bI6e2Ojlep4RZDOovUk1ehgtshGhqwu+8UEeO5M6yNtxGCLPJ4RHm7oJeRb503UYrpsUz9PboBB+I3qvPDKIbdukg8rXmo0vYIaId3AoLc73HmjrAMbV/FsiFi0WsmnsnbQmrYCAiy9XFcMQVmQ985TOG1fPXNoWMUdQaoundn/92c6xef+Lz6I1yXlBAAA"
  - id: r-contrarreciproco-lluvia
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el **contrarrecíproco** de «si llueve, el suelo está mojado»?
    options:
      - |
        Si el suelo está mojado, ha llovido
      - |
        Si no llueve, el suelo no está mojado
      - |
        Si el suelo no está mojado, no ha llovido
      - |
        Llueve y el suelo no está mojado
    answers: ["sha256:e07ee1d8f6cef3a12b845c754c3270520c669d41292d4ff53a1f331627ed1d3a"]
  - id: r-negar-todos-algun
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la negación de «todos los alumnos aprobaron algún examen»?
    options:
      - |
        Ningún alumno aprobó ningún examen
      - |
        Hay un alumno que no aprobó ningún examen
      - |
        Todos los alumnos suspendieron algún examen
      - |
        Hay un examen que nadie aprobó
    answers: ["sha256:1e98a71439aec75b450a00f2e62f99ef765de838e01e0af5722ea1e5a53eae62"]
  - id: r-relaciones-totales
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas relaciones (subconjuntos de $A \times A$) hay en un conjunto $A$ de $3$ elementos? Respuesta: un entero.
    answers: ["sha256:ff9e7bbf7594edead2eea68c671a631f0e90cc4c90e1f4b5dd0beac1ccb9a9a7","sha256:b86cb453f473803e16d6a8c72a69df2780bd6567215a672c5faed6534e956bb0","sha256:3bbfe0eeb55ea28411b5c9a863713fe03e2bee22a27cb5ff3a455f3fdfdadcdc"]
  - id: r-partes-de-5
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos elementos tiene el conjunto de partes $\mathcal P(A)$ si $A$ tiene $5$ elementos?
    answers: ["sha256:29bc314566676bb4525712105ebeb727be669be098e4ec30ae8039ccf60869e4","sha256:725e39c831431a66a5e7a53a2591979b1dee8395e20847c401f7b33f43e93484","sha256:0a10d97bb936e5d4616ff108610ce931956d8266f00226344e9dc22a9a1de6eb"]
  - id: r-funciones-totales
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas funciones hay de un conjunto de $4$ elementos en uno de $3$ (sin ninguna condición)?
    answers: ["sha256:a8aaa681a5d92258ac19e57acbfaaee405afa73269c29baf5f452c9e27e3470c","sha256:fc040c8e1f904b385736b7f145f1cb75c6b42eb0d299d1f83b3b7329e428cb6f","sha256:fb16601a45148ee8b0f7c9d840f246ad595092a2631026b2243687fa985ff225"]
  - id: r-tecnica-existencia
    tier: 2
    type: opcion
    review: true
    prompt: |
      Para demostrar un enunciado de la forma $\exists x\, P(x)$, ¿qué basta hacer?
    options:
      - |
        Basta encontrar un $x$ concreto que lo cumpla y comprobarlo
      - |
        Hay que comprobarlo para todos los $x$
      - |
        Hay que suponer lo contrario siempre
      - |
        Basta comprobarlo con muchos ejemplos al azar
    answers: ["sha256:02ca4421415ed08b9e7b57ca5771029a72b77a5eb4616284f89d445e2f67fbc2"]
  - id: r-caballos-falla
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      En la falsa demostración de que «todos los caballos son del mismo color», el paso inductivo $k \to k + 1$ falla para un único
      valor de $k$. ¿Cuál? Respuesta: un entero.
    answers: ["sha256:f182720a8a6e45931a838157b64a8dc633646aabe2bb47fd19faffbf494a3ccf","sha256:dddff5de85d57aa567f4c63e498fa289c7f5e341145b948b4fcdc237dc2e0cb6","sha256:313949d0fac57717f2e57b104d01fbc7fa5c3b38668692a961aae10c61829916"]
  - id: r-no-numerable
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos conjuntos **no** es numerable?
    options:
      - |
        $\mathbb Z$
      - |
        $\mathbb Q$
      - |
        $\mathbb N \times \mathbb N$
      - |
        $\mathcal P(\mathbb N)$
    answers: ["sha256:ae79a9822c49c0e7a9a75809978571fd3aa41ced5cf65e752f9d92d99410f2e0"]
  - id: r-orden-cuantificadores
    tier: 2
    type: opcion
    review: true
    prompt: |
      En $\mathbb N$, compara (1) $\forall x\,\exists y\;(y > x)$ y (2) $\exists y\,\forall x\;(y > x)$.
    options:
      - |
        Las dos son verdaderas
      - |
        La primera es verdadera y la segunda falsa
      - |
        La primera es falsa y la segunda verdadera
      - |
        Las dos son falsas
    answers: ["sha256:2d3aca69f7582b5897cab32c86e53536a1001698d9c6edef6fdce3d84b047b77"]
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

> [!practico]
> La lógica es la gramática de los argumentos. Frases como «llueve» o «tengo paraguas» son verdaderas o falsas, y palabras como
> «y», «o», «no» y «si…, entonces…» las combinan. La única trampa está en el «si…, entonces…»: la promesa «si apruebas, te
> invito» solo se rompe cuando apruebas y no invito. Si suspendes, haga yo lo que haga, no he mentido. Una **tabla de verdad**
> es la lista de todos los casos posibles: con dos frases hay cuatro (las dos verdaderas, solo la primera, solo la segunda,
> ninguna).


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

> [!practico]
> «Es primo» no es verdadero ni falso hasta que dices de qué número hablas. Las palabras «**todos**» y «**alguno**» convierten
> esas frases incompletas en afirmaciones: «todos los números de la lista son primos», «alguno es primo». Para negarlas hay que
> tener cuidado: lo contrario de «todos los alumnos aprobaron» no es «ninguno aprobó», sino «**alguno** suspendió». Y el orden
> cuenta: «cada persona tiene una madre» es cierto; «hay una madre de todas las personas», no.


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

> [!practico]
> Una demostración es como una receta comprobada: cada paso se apoya en algo que ya sabes (una hipótesis, una definición o un
> resultado anterior) y el último paso es justo lo que querías. La forma de lo que te piden te dice por dónde empezar: si es
> «para todo número…», empiezas con «sea un número cualquiera»; si es «existe…», buscas uno concreto y lo enseñas; si es
> «si A, entonces B», supones A y caminas hasta B.


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

> [!practico]
> Hay pocas formas de demostrar, y conviene tenerlas como herramientas en una caja:
>
> - ir **de frente** de la hipótesis a la conclusión;
> - **dar la vuelta**: probar que si falla la conclusión, falla la hipótesis (el contrarrecíproco);
> - **suponer lo contrario** y llegar a un disparate (reducción al absurdo);
> - **partir en casos** (par o impar, positivo o negativo);
> - **la escalera** (inducción): si puedes subir el primer peldaño y desde cualquier peldaño subir al siguiente, llegas a todos.
>
> Para tumbar una afirmación general basta un solo **contraejemplo**; mil ejemplos a favor no la demuestran.


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

> [!formal] Con rigor: por qué funciona la inducción
> Es válido porque todo subconjunto no vacío de $\mathbb N$ tiene mínimo (**buena ordenación**): si $P$ fallase en algún
> $n \ge n_0$, habría un mínimo $m$ donde falla; $m \neq n_0$ por la base, luego $P(m - 1)$ es cierta y el paso da $P(m)$,
> contradicción.

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

> [!practico]
> Un conjunto es una colección de cosas en la que solo importa **qué** hay dentro, no el orden ni las repeticiones: la lista de
> la compra $\{\text{pan}, \text{leche}\}$ es la misma escrita al revés. Unir dos listas, quedarte con lo que está en las dos o
> quitar de una lo que está en la otra son las operaciones de conjuntos, y se comportan como el «o», el «y» y el «no» de la
> lógica.


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

> [!formal] Con rigor: demostración de la inclusión-exclusión
> *Demostración.* Un elemento que está en exactamente $m \ge 1$ de los conjuntos aparece en $\binom mj$ intersecciones de $j$
> conjuntos, así que se cuenta $\sum_{j=1}^{m}(-1)^{j+1}\binom mj = 1 - (1 - 1)^m = 1$ vez (binomio de Newton). Uno que no está
> en ninguno, $0$ veces. $\blacksquare$

*Ejemplo:* entre $1$ y $100$, divisibles por $2$ o por $3$: $50 + 33 - 16 = 67$ (los divisibles por ambos son los
múltiplos de $6$).

## 7. Relaciones

> [!practico]
> Una relación es una manera de emparejar cosas: «ser hermano de», «ser menor que», «terminar en la misma cifra». Unas
> relaciones **agrupan** (los números que terminan en la misma cifra forman diez grupos que no se mezclan: son las relaciones
> de equivalencia) y otras **ordenan** (como «ser menor o igual que», o «caber dentro de» entre cajas).


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

> [!formal] Con rigor: clases de equivalencia y particiones
> **Teorema.** Las clases de una relación de equivalencia en $A$ forman una **partición** de $A$ (bloques no vacíos, disjuntos
> dos a dos, que lo cubren), y toda partición de $A$ proviene de exactamente una relación de equivalencia.
>
> *Demostración.* Cada $a$ está en $[a]$ por reflexividad: las clases no son vacías y cubren $A$. Si $[a] \cap [b] \neq \varnothing$,
> tómese $c$ en ambas: $c \mathrel R a$ y $c \mathrel R b$; por simetría $a \mathrel R c$, y por transitividad $a \mathrel R b$.
> Entonces todo $x \in [a]$ cumple $x \mathrel R a \mathrel R b$, luego $x \in [b]$; y al revés. Así $[a] = [b]$: dos clases o
> coinciden o son disjuntas. Recíprocamente, dada una partición, «estar en el mismo bloque» es reflexiva, simétrica y
> transitiva, y sus clases son los bloques. $\blacksquare$

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

> [!practico]
> Una función es una máquina que a cada entrada le da **una sola** salida: a cada persona, su DNI; a cada número, su cuadrado.
> Si dos entradas distintas nunca dan la misma salida (como el DNI) es **inyectiva**; si todas las salidas posibles se alcanzan,
> es **sobreyectiva**; si pasan las dos cosas, se puede **deshacer** (tiene inversa). Y una idea que parece obvia y es muy
> potente, el **principio del palomar**: si metes $11$ cartas en $10$ buzones, algún buzón recibe dos.


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

> [!formal] Con rigor: el teorema de Cantor
> **Teorema (Cantor).** Para todo conjunto $A$, no existe ninguna sobreyección $f : A \to \mathcal P(A)$.
>
> *Demostración.* Dada $f$, sea $D = \{a \in A : a \notin f(a)\}$. Si fuese $D = f(d)$ para algún $d$, entonces
> $d \in D \iff d \notin f(d) = D$: contradicción. Luego $D$ no está en la imagen. $\blacksquare$

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
