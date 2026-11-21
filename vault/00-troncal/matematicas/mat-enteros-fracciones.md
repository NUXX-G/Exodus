---
id: mat-enteros-fracciones
title: "Enteros, fracciones y decimales"
area: matematicas
trunk_level: 1
prerequisites: [mat-numeros-naturales, mat-numeros-enteros]
academic_sources:
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
  - "Hardy, G. H.; Wright, E. M. An Introduction to the Theory of Numbers, 6ª ed. (rev. Heath-Brown y Silverman). Oxford University Press, 2008."
  - "Euclides. Elementos, libro VII (proporciones entre números y mcd). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/bookVII/bookVII.html"
hints:
  - "Concepto: casi todo se reduce a trabajar con fracciones irreducibles y con el mcd. Un decimal es finito solo si el denominador irreducible no tiene más primos que 2 y 5; el periodo de 1/n es el menor k con 10^k ≡ 1 (mod n) cuando n es coprimo con 10."
  - "Herramienta: en Python, el módulo `fractions` (`Fraction(3, 4) + Fraction(5, 6)`) hace aritmética exacta y devuelve siempre la fracción irreducible; `pow(10, k, n)` calcula 10^k módulo n. Para comprobar un recuento, escribe el bucle más simple posible y compáralo con tu fórmula."
  - "Documentación oficial: docs.python.org/3/library/fractions.html (clase Fraction) y docs.python.org/3/library/functions.html#pow. Niven et al., capítulo 1 (divisibilidad) y los capítulos sobre fracciones de Farey y fracciones continuas (para hallar la fracción de menor denominador dentro de un intervalo)."
exercises:
  - id: enteros-signos
    tier: 1
    prompt: |
      Calcula ${{a}} - {{b}} + {{c}} \times {{d}}$. Respuesta: un número entero (con signo menos si es negativo).
    variants:
      - values: {"a":"-7","b":"(-12)","c":"2","d":"(-4)"}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
      - values: {"a":"5","b":"(-9)","c":"-2","d":"6"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"a":"-3","b":"(-8)","c":"4","d":"(-5)"}
        answers: ["sha256:5e37b37c842d8df7106ee92e2e45beefef71ca60f51f7bb5cb50cb1e81c355a8"]
      - values: {"a":"10","b":"(-4)","c":"-3","d":"(-7)"}
        answers: ["sha256:9f14025af0065b30e47e23ebb3b491d39ae8ed17d33739e5ff3827ffb3634953"]
      - values: {"a":"-6","b":"15","c":"2","d":"(-9)"}
        answers: ["sha256:079e2bd789e00729ea2fae6c182d162926ae72f58e8db5112fff99f5a3064d6a"]
      - values: {"a":"4","b":"(-11)","c":"-5","d":"3"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: suma-fracciones
    tier: 1
    prompt: |
      Calcula $\dfrac{{{a}}}{{{b}}} + \dfrac{{{c}}}{{{d}}} - \dfrac{{{e}}}{{{f}}}$ y da el resultado como fracción irreducible «a/b»
      (si es entero, solo el número).
    variants:
      - values: {"a":3,"b":4,"c":5,"d":6,"e":1,"f":3}
        answers: ["sha256:ff060f43ada244fcedb7073528f9137c7a181b5ad54fffa2c749988cc3f423b2"]
      - values: {"a":2,"b":3,"c":3,"d":4,"e":5,"f":6}
        answers: ["sha256:2d0ba250dbdb3e61c40f6500fcb6cd35f793a14e94bacab7197ab693092f3521"]
      - values: {"a":5,"b":6,"c":7,"d":10,"e":2,"f":5}
        answers: ["sha256:809a57cd2bd20a6684caac89928b13e8cf95e6f10c879b3c8f19907e2c370b9a"]
      - values: {"a":1,"b":4,"c":5,"d":9,"e":1,"f":6}
        answers: ["sha256:ac638ddba1fda5ad51bb83f1839ac6d7865a356cebe191c58f59665ef696502e"]
      - values: {"a":7,"b":8,"c":1,"d":6,"e":3,"f":4}
        answers: ["sha256:de90c0c4ad961ae7dd2a0ef4bb3f27f72bbad96b0148a203d11a846d503dac8f"]
      - values: {"a":4,"b":9,"c":5,"d":12,"e":1,"f":2}
        answers: ["sha256:8f7bec88c57eb24bb87a72d0ca1d4c0fdd5264db6dea5ff7c615d596508c21bf"]
  - id: division-fracciones
    tier: 1
    prompt: |
      Calcula $\dfrac{{{a}}}{{{b}}} \div \dfrac{{{c}}}{{{d}}}$ como fracción irreducible «a/b» (si es entero, solo el número).
    variants:
      - values: {"a":2,"b":3,"c":4,"d":9}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"a":3,"b":5,"c":9,"d":10}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
      - values: {"a":5,"b":8,"c":15,"d":4}
        answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
      - values: {"a":7,"b":12,"c":14,"d":9}
        answers: ["sha256:896af01783cc4ba66a114b2b1cc0284bad63a52fca0571dafbbed491c95972c5"]
      - values: {"a":4,"b":15,"c":8,"d":25}
        answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
      - values: {"a":9,"b":14,"c":3,"d":7}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
  - id: simplificar
    tier: 2
    prompt: |
      Simplifica $\dfrac{{{a}}}{{{b}}}$ hasta la fracción irreducible «a/b». (Pista de método: ya conoces un algoritmo que da el
      mcd sin factorizar.)
    variants:
      - values: {"a":462,"b":1071}
        answers: ["sha256:c3b2c6a979d3ba926c7967c9ef61734714e001ac7d8b793bfa5e2cc1c5f5ebbc"]
      - values: {"a":374,"b":1122}
        answers: ["sha256:0d7f0e336166042f8cc9e4c20ae427ba367c279d6e3dfd1bd7247b0fbce61d50"]
      - values: {"a":585,"b":1287}
        answers: ["sha256:916639634200482d3a407557feb633ad083b8372d27e264f0491cef728fd38c8"]
      - values: {"a":918,"b":1428}
        answers: ["sha256:d75ad8a3d75abddc564e54a5f4bcd6f6dd445284af6ac2fe7a8973c2937bdc5a"]
      - values: {"a":2431,"b":4199}
        answers: ["sha256:1cf5c0a4fbec86aa26811c24ef8d547e93e2d45390358e4a7e16c8d0f5737d9f"]
      - values: {"a":756,"b":1092}
        answers: ["sha256:688889e88550c6053862a97c9150c3659ca69b01684ba09334fe7c685c3a9bf5"]
  - id: comparar
    tier: 2
    prompt: |
      ¿Cuál es mayor, $\dfrac{{{a}}}{{{b}}}$ o $\dfrac{{{c}}}{{{d}}}$? Responde con la fracción mayor, escrita «a/b». Hazlo sin pasar a
      decimales: con productos cruzados.
    variants:
      - values: {"a":7,"b":11,"c":9,"d":14}
        answers: ["sha256:d75ad8a3d75abddc564e54a5f4bcd6f6dd445284af6ac2fe7a8973c2937bdc5a"]
      - values: {"a":5,"b":9,"c":6,"d":11}
        answers: ["sha256:6523f09afbc5ba27530a3abe3ff0f5db40b2b859346f4425d64edd6d596c6eb5"]
      - values: {"a":11,"b":13,"c":13,"d":15}
        answers: ["sha256:5692f1cf872d088aad44323c8e2f0878811ec2e6240b4aa7fc6ceec051457763"]
      - values: {"a":4,"b":7,"c":7,"d":12}
        answers: ["sha256:2d0ba250dbdb3e61c40f6500fcb6cd35f793a14e94bacab7197ab693092f3521"]
      - values: {"a":13,"b":17,"c":10,"d":13}
        answers: ["sha256:2bd9391b76a100723e35625ca20ead32303eaa2869427f76521aa0c087a597dd"]
      - values: {"a":8,"b":15,"c":9,"d":17}
        answers: ["sha256:2c8d109e1c0d5b7e8472ad7c0cb17fced3269b786dc51924c2965f2672db2c0a"]
  - id: periodico-a-fraccion
    tier: 2
    prompt: |
      Expresa ${{dec}}\ldots$ (el ${{c}}$ se repite siempre) como fracción irreducible «a/b».
    variants:
      - values: {"dec":"0{,}58333","c":3}
        answers: ["sha256:2d0ba250dbdb3e61c40f6500fcb6cd35f793a14e94bacab7197ab693092f3521"]
      - values: {"dec":"0{,}41666","c":6}
        answers: ["sha256:844f5767a56764778291ffe2dce3664e3c626df6f566633818c065f01b7d0067"]
      - values: {"dec":"0{,}16666","c":6}
        answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
      - values: {"dec":"0{,}83333","c":3}
        answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
      - values: {"dec":"0{,}27777","c":7}
        answers: ["sha256:22520d68cf372e30798de084be5fd4fc48b99ea27b38bf68b9f11e97bfac3540"]
      - values: {"dec":"0{,}12555","c":5}
        answers: ["sha256:117f444432758002089b67b74cbb5fbf293aae720e77a2463a847bf648df716d"]
  - id: digito-2026
    tier: 2
    prompt: |
      En el desarrollo decimal de $\dfrac{1}{{{q}}}$, ¿qué cifra ocupa el lugar ${{n}}$ después de la coma? Respuesta: una cifra.
    variants:
      - values: {"q":7,"n":2026}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"q":7,"n":1000}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"q":13,"n":2026}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"q":13,"n":500}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"q":17,"n":2026}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"q":7,"n":77}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: decimales-finitos
    tier: 2
    prompt: |
      ¿Para cuántos valores de $n$ con $1 \le n \le 100$ el número $\dfrac{1}{n}$ tiene un desarrollo decimal **finito**
      (termina)? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: periodo-97
    tier: 3
    prompt: |
      ¿Cuántas cifras tiene el periodo del desarrollo decimal de $\dfrac{1}{97}$? Respuesta: un entero.
    answers: ["sha256:7b1a278f5abe8e9da907fc9c29dfd432d60dc76e17b0fabab659d2a508bc65c4"]
  - id: telescopica
    tier: 3
    prompt: |
      Calcula $\dfrac{1}{1\cdot 2} + \dfrac{1}{2\cdot 3} + \dfrac{1}{3\cdot 4} + \cdots + \dfrac{1}{{{m}}\cdot {{n}}}$ como fracción
      irreducible «a/b». (Pista: $\frac{1}{k(k+1)} = \frac{1}{k} - \frac{1}{k+1}$.)
    variants:
      - values: {"n":100,"m":99}
        answers: ["sha256:adda290c53eda62a0d8f44a131302a84651364227fcc02f7ed70159e8fc5f6ba"]
      - values: {"n":50,"m":49}
        answers: ["sha256:15159cba30311b438472946c8b8b5abab1fad8d2adc72b1dad6dd320e288a63c"]
      - values: {"n":20,"m":19}
        answers: ["sha256:f6c8736635e02e4e59b5400dc18b9fc5a3da6e56aeda4899c79b8bc03779c515"]
      - values: {"n":200,"m":199}
        answers: ["sha256:8b6a94d465f4d7aefc231ed3c062145ffd18bdf9694fc146a0c6cf0d87c1a5bc"]
      - values: {"n":30,"m":29}
        answers: ["sha256:90e3ecb4f1352fad02f6db03fae08f1be366d9461ad8a3d37a451b5a8ea60415"]
      - values: {"n":75,"m":74}
        answers: ["sha256:7764f1136d2442158e3cbc93c1e82000045544fa5a3576c3020d0027b1c666a5"]
  - id: irreducibles-50
    tier: 3
    prompt: |
      ¿Cuántas fracciones irreducibles $\dfrac{a}{b}$ cumplen $0 < \dfrac{a}{b} < 1$ con denominador $b \le 50$?
      Respuesta: un entero.
    answers: ["sha256:d15e7843961ed4bfa3e08a80b882c74670e9e9347ea55325cbc1be93c7f54edc"]
  - id: entre-dos-fracciones
    tier: 3
    prompt: |
      Entre $\dfrac{17}{39}$ y $\dfrac{18}{41}$ (estrictamente) hay infinitas fracciones. ¿Cuál es la de **menor denominador**?
      Respuesta como fracción «a/b».
    answers: ["sha256:248fbc03282617ae5b1700d532ce64429efb261fd51b29c9d0f3dc483157d8cb"]
  - id: grifos
    tier: 3
    prompt: |
      Un depósito se llena con un grifo en ${{a}}$ horas y con otro, solo, en ${{b}}$ horas. ¿Cuánto tarda en llenarse con los dos
      abiertos a la vez? Respuesta en horas, como fracción irreducible «a/b» (si es entero, solo el número).
    variants:
      - values: {"a":6,"b":9}
        answers: ["sha256:3f99d85316926a1a4c4574865f131f4c83105ccb7ef2f3ac73fe2e3033166d08"]
      - values: {"a":3,"b":6}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"a":5,"b":20}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"a":8,"b":12}
        answers: ["sha256:aa3bb46d25aeab367e0747a0be5efd2e63ca33c0339b83e161706e93b1f293d3"]
      - values: {"a":10,"b":15}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"a":4,"b":7}
        answers: ["sha256:af654e40f03223887d1add4419d191094c0a405b5bb2ab425b88f4d78ce2758f"]
  - id: sueldo
    tier: 3
    prompt: |
      Ana gasta $\frac{1}{{{p}}}$ de su sueldo en el alquiler y $\frac{1}{{{q}}}$ **de lo que le queda** en comida. Después le sobran
      ${{s}}$ euros. ¿Cuál es su sueldo, en euros? Respuesta: un entero.
    variants:
      - values: {"p":3,"q":4,"s":600}
        answers: ["sha256:15197cf7214b58e67cae565e573ffd9aa44bcb81f8ee5d7185dfe8da0a16ef43"]
      - values: {"p":4,"q":3,"s":900}
        answers: ["sha256:e49ec846db7527df7ff483009fe61700e6435072c8c5b551ab08f0a13fc45a07"]
      - values: {"p":5,"q":4,"s":960}
        answers: ["sha256:b458944d9ec4322f9ff0de2885ce82d580341fcf0fd688422e9929b6e7ce3b2d"]
      - values: {"p":3,"q":5,"s":1040}
        answers: ["sha256:3f5f3806e425deac33023e9764d08ac98397e6f1bc8599743cbb15a9cfdf8929"]
      - values: {"p":4,"q":5,"s":1080}
        answers: ["sha256:e49ec846db7527df7ff483009fe61700e6435072c8c5b551ab08f0a13fc45a07"]
      - values: {"p":6,"q":3,"s":1000}
        answers: ["sha256:e49ec846db7527df7ff483009fe61700e6435072c8c5b551ab08f0a13fc45a07"]
  - id: armonica
    tier: 3
    prompt: |
      Sea $x = \dfrac{1}{2} + \dfrac{1}{3} + \dfrac{1}{4} + \cdots + \dfrac{1}{10}$. Calcula $\lfloor 1000x \rfloor$ (la parte entera de
      $1000x$). Respuesta: un entero.
    answers: ["sha256:aef662afc24b5edde66ab972975340f6a9963eb766261e6bf43ffdb56b6d2a3f"]
  - id: menores-que-medio
    tier: 3
    prompt: |
      Considera los números racionales distintos que se pueden escribir como $\dfrac{a}{b}$ con $1 \le a < b \le 12$. ¿Cuántos
      de ellos son menores que $\dfrac{1}{2}$? Respuesta: un entero.
    answers: ["sha256:785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09"]
  - id: r-suma-mal
    tier: 1
    type: opcion
    review: true
    prompt: |
      Un compañero escribe $\dfrac{1}{3} + \dfrac{1}{4} = \dfrac{2}{7}$. ¿Qué le dirías?
    options:
      - |
        Es correcto
      - |
        Es correcto solo si se simplifica después
      - |
        Es falso: hay que pasar a denominador común y da $\frac{7}{12}$
      - |
        Es falso: da $\frac{2}{12}$
    answers: ["sha256:9325cf03c19edfa35e83c634ea6b41e9c0cb6bb97b9a8df37299cdc5ac344355"]
  - id: r-signo-potencia
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Calcula $-5^2 + (-3)^2$. Respuesta: un entero.
    answers: ["sha256:644c025b0aa56d3d69bc77a6f956d006e746594a928806cb0688769cf26f8264","sha256:f10dd873af76876c69a13ee77b7dd9e5a4e3325f9b3834502e298258a3a95b17","sha256:722e1d8b0004577faf0713f7f1b6d8b6544885d721d2afee67a0e5039cd15100"]
  - id: r-termina
    tier: 2
    type: opcion
    review: true
    prompt: |
      Sin dividir: ¿cuál de estas fracciones tiene un desarrollo decimal que **termina**?
    options:
      - |
        $\frac{7}{30}$
      - |
        $\frac{9}{40}$
      - |
        $\frac{5}{12}$
      - |
        $\frac{2}{15}$
    answers: ["sha256:251af1ab82ad99d85584ba1335854c8833464683d056ee33903612ddb62f8f44"]
  - id: r-de-lo-que-queda
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una botella tiene $100$ cL. Se bebe $\frac{1}{5}$ y después la mitad **de lo que queda**. ¿Cuántos cL quedan?
    answers: ["sha256:cdab65f2cc0ff1a3232530cbf27c260aa91b64b102e25e73bb1fed3b866adfb6","sha256:612d21db955a81910a8ea8eb2ece80cd5596fb1b402ce57349481ed893246c79","sha256:ad7ac01931199c1fc914771f0f72e975090899f4ea7a5c5f6b95a34e3dff4557"]
  - id: r-periodo-fraccion
    tier: 2
    review: true
    prompt: |
      Escribe $0{,}454545\ldots$ como fracción irreducible «a/b».
    answers: ["sha256:916639634200482d3a407557feb633ad083b8372d27e264f0491cef728fd38c8"]
  - id: r-cancelar
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuánto vale $\dfrac{2 + 3}{2 + 5}$?
    options:
      - |
        $\dfrac{3}{5}$, tachando los doses
      - |
        $\dfrac{2}{5}$
      - |
        $1$
      - |
        $\dfrac{5}{7}$: solo se tachan factores comunes, no sumandos
    answers: ["sha256:a2dfa2a7fd8f0afc0ddf836788a5d46012e581273eaf8ec21b988e1cb59f1407"]
---

# Enteros, fracciones y decimales

Los naturales no bastan: no se puede restar $3 - 5$ ni repartir $1$ entre $3$. Este nodo amplía los números
en dos direcciones, hacia los negativos (**enteros**) y hacia los repartos (**fracciones** y **decimales**), y
fija las reglas con las que se calcula sin equivocarse. Es la base de todo el álgebra
y el idioma de cualquier medida: dinero, tiempo, dosis, escalas.

## Objetivos

Al terminar sabrás:

1. Operar con enteros y justificar la regla de los signos, sin memorizarla.
2. Definir una fracción, reconocer fracciones equivalentes y llegar siempre a la forma irreducible.
3. Sumar, restar, multiplicar, dividir y comparar fracciones, y saber por qué cada procedimiento es correcto.
4. Convertir fracciones en decimales y decimales (incluso periódicos) en fracciones, y predecir si el
   desarrollo termina y cuánto mide su periodo.
5. Resolver problemas de «partes de un todo» y de tareas conjuntas.

> [!question] Test de entrada
> 1. ¿Cuánto es $-3 + 8$? 2. ¿Es $\frac{2}{6}$ igual a $\frac{1}{3}$? 3. ¿Cuál es mayor, $0{,}7$ o $0{,}65$?
>
> Respuestas: $5$; sí; $0{,}7$. Si dudas en alguna, este nodo te da el porqué, no solo la regla.

## 1. Para qué sirve

- **Dinero y temperaturas**: saldos negativos, descubiertos, temperaturas bajo cero.
- **Cocina y construcción**: $\frac{3}{4}$ de taza, tablas de $\frac{5}{8}$ de pulgada.
- **Salud**: dosis por kilo de peso, concentraciones («$5$ mg por cada mL»).
- **Mapas y planos**: escalas $1:25000$.
- **Informática**: los números decimales del ordenador no son exactos (se ve al final de este nodo):
  saber por qué evita errores graves, por ejemplo al programar dinero.

## 2. Los números enteros

> [!practico]
> Un termómetro o un ascensor con sótanos: por encima del $0$ los números de siempre, por debajo los **negativos**
> ($-1$ es el primer sótano). Un saldo de $-30$ € es deber $30$ €. El **opuesto** de un número es su «reflejo» al otro
> lado del $0$: el de $5$ es $-5$, y juntos se anulan, como ganar $5$ € y gastar $5$ €.
>
> Restar un negativo es **quitar una deuda**: si te perdonan una deuda de $12$ € ($-(-12)$), tu dinero sube $12$ €.
> Por eso $7 - (-12) = 19$.


Los **enteros** $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ añaden a los naturales sus **opuestos**: el opuesto
de $a$ es el número $-a$ con $a + (-a) = 0$. Se representan en una **recta** con el $0$ en el centro; sumar
$b$ es desplazarse $b$ unidades (a la derecha si $b > 0$, a la izquierda si $b < 0$). El **valor absoluto**
$|a|$ es la distancia al $0$: $|-5| = |5| = 5$. Un número es menor que otro si queda a su izquierda.

**Restar es sumar el opuesto**: $a - b = a + (-b)$. Por eso $7 - (-12) = 7 + 12 = 19$.

### Por qué «menos por menos es más»

> [!practico]
> Una forma de verlo: grabas en vídeo una bañera que se **vacía** $2$ litros por minuto ($-2$ L/min). Si pones el vídeo
> **hacia atrás** $3$ minutos ($-3$ min), ves que el agua **sube** $6$ litros: $(-2)\cdot(-3) = +6$. Pero la razón de
> verdad es la de abajo: cualquier otra regla rompería la propiedad distributiva, que es la que hace que el cálculo
> funcione.


No es una convención arbitraria: es **obligada** si queremos que se siga cumpliendo la propiedad
distributiva. Partimos de $0 = (-1)\cdot 0 = (-1)\bigl(1 + (-1)\bigr) = (-1)\cdot 1 + (-1)(-1) = -1 + (-1)(-1)$.
Luego $(-1)(-1)$ debe ser el número que sumado a $-1$ da $0$, es decir, $1$. En general:

$$
(+)(+) = +,\qquad (+)(-) = -,\qquad (-)(+) = -,\qquad (-)(-) = + .
$$

La división sigue los mismos signos. Cuidado con las potencias: $(-2)^3 = -8$ y también $-2^3 = -(2^3) = -8$ (con exponente impar coinciden), pero
$(-2)^2 = 4$ mientras que $-2^2 = -4$. El paréntesis cambia el resultado.

**Ejemplo resuelto:** $5 - 2\cdot(-3) + (-4)^2 \div (-8)$.
Potencia: $(-4)^2 = 16$. Productos y cocientes de izquierda a derecha: $2\cdot(-3) = -6$, $16 \div (-8) = -2$.
Queda $5 - (-6) + (-2) = 5 + 6 - 2 = 9$.

## 3. Fracciones

> [!practico]
> Una pizza cortada en $8$ trozos iguales: cada trozo es $\frac{1}{8}$ y si te comes $3$, te has comido
> $\frac{3}{8}$. Abajo (**denominador**) va en cuántas partes iguales se corta; arriba (**numerador**), cuántas se cogen.
>
> - $\frac{2}{4}$ y $\frac{1}{2}$ son la misma cantidad de pizza, cortada más fina o más gruesa: son **equivalentes**.
> - Para sumar fracciones tienen que ser trozos **del mismo tamaño**: medio más un tercio no son «dos quintos»; se pasan
>   los dos a sextos ($\frac{3}{6} + \frac{2}{6} = \frac{5}{6}$).
> - «$\frac{2}{3}$ **de** algo» es multiplicar: $\frac{2}{3}$ de $30$ € son $20$ €.
> - Dividir entre una fracción pregunta «¿cuántas veces cabe?»: en $3$ litros caben $6$ botellas de medio litro,
>   porque $3 \div \frac{1}{2} = 3 \cdot 2 = 6$.


Una **fracción** $\dfrac{a}{b}$ ($a$ entero, $b$ entero **distinto de cero**) es el número que, multiplicado por
$b$, da $a$. Tiene varias lecturas que conviene dominar:

- **parte de un todo**: $\frac{3}{4}$ son tres de las cuatro partes iguales de una unidad;
- **cociente**: $\frac{3}{4} = 3 \div 4$ (repartir $3$ entre $4$);
- **razón**: $3$ de cada $4$.

### Fracciones equivalentes y forma irreducible

Dos fracciones son **equivalentes** (representan el mismo número) si

$$
\frac{a}{b} = \frac{c}{d} \iff ad = bc .
$$

> [!formal] Con rigor: por qué funciona el criterio
> *Justificación.* Multiplicando ambos lados por $bd$ (distinto de cero) se obtiene $ad = bc$, y el paso es
> reversible. En particular, **multiplicar o dividir numerador y denominador por un mismo número no nulo no
> cambia la fracción**: $\frac{a}{b} = \frac{ka}{kb}$, porque $a(kb) = b(ka)$.

Una fracción es **irreducible** si $\operatorname{mcd}(a, b) = 1$. Toda fracción tiene una única forma
irreducible con denominador positivo, que se obtiene dividiendo numerador y denominador por su mcd
(ver [[mat-numeros-naturales]]). Es la forma en que se dan los resultados.

**Ejemplo resuelto:** $\dfrac{252}{198}$. Ya sabemos que $\operatorname{mcd}(252, 198) = 18$; luego
$\dfrac{252}{198} = \dfrac{14}{11}$.

### Comparar

Con denominadores positivos, $\dfrac{a}{b} < \dfrac{c}{d} \iff ad < bc$ (se multiplica ambos lados por $bd > 0$).
Es el método de los **productos cruzados**: $\frac{5}{8}$ frente a $\frac{3}{5}$: $5\cdot 5 = 25 > 3\cdot 8 = 24$, así que
$\frac{5}{8} > \frac{3}{5}$.

### Suma y resta

Para sumar hay que expresar los sumandos en **partes del mismo tamaño**, es decir, con el mismo denominador:

$$
\frac{a}{b} + \frac{c}{d} = \frac{ad}{bd} + \frac{cb}{bd} = \frac{ad + bc}{bd} .
$$

Para evitar números grandes se usa el **mínimo común múltiplo** de los denominadores:
$\frac{5}{12} + \frac{7}{18}$: $\operatorname{mcm}(12, 18) = 36$, luego $\frac{15}{36} + \frac{14}{36} = \frac{29}{36}$.

**Error más común:** $\frac{1}{2} + \frac{1}{3} \ne \frac{2}{5}$. Sumar numeradores y denominadores no tiene sentido
(mezcla «mitades» y «tercios»). La suma correcta es $\frac{5}{6}$.

### Producto y división

$$
\frac{a}{b}\cdot\frac{c}{d} = \frac{ac}{bd}, \qquad
\frac{a}{b} \div \frac{c}{d} = \frac{a}{b}\cdot\frac{d}{c}\quad (c \ne 0).
$$

El producto es «una fracción **de** una fracción»: $\frac{2}{3}$ de $\frac{3}{4}$ es $\frac{6}{12} = \frac{1}{2}$. Para la
división: $x = \frac{a}{b} \div \frac{c}{d}$ es el número que cumple $x\cdot\frac{c}{d} = \frac{a}{b}$; multiplicando ambos
lados por $\frac{d}{c}$ se obtiene $x = \frac{a}{b}\cdot\frac{d}{c}$. **Dividir entre una fracción es multiplicar por su
inversa.** Y, como es lógico, **no se divide entre una fracción de numerador cero**.

### Número mixto

$2\frac{3}{5}$ significa $2 + \frac{3}{5} = \frac{13}{5}$. Se usa para leer, no para operar: antes de calcular conviene
pasar a fracción impropia.

### Fracciones de lo que queda

Un tipo de problema frecuente: «gasta $\frac{1}{3}$ y después $\frac{1}{4}$ **de lo que le queda**». Hay que
ir **paso a paso**, actualizando el total. **Ejemplo resuelto:** un depósito de $60$ L pierde $\frac{1}{5}$ y luego
$\frac{1}{3}$ del resto. Tras la primera pérdida quedan $\frac{4}{5}\cdot 60 = 48$ L; después
$\frac{2}{3}\cdot 48 = 32$ L. Atajo: $60\cdot\frac{4}{5}\cdot\frac{2}{3} = 32$. *Cuidado*: **no** es
$60\bigl(1 - \frac{1}{5} - \frac{1}{3}\bigr) = 28$, porque el segundo $\frac{1}{3}$ es del resto, no del total.

### Tareas conjuntas

Si un grifo llena el depósito en $a$ horas, en una hora llena $\frac{1}{a}$ del depósito. Con dos grifos, en
una hora llenan $\frac{1}{a} + \frac{1}{b}$, y el tiempo total es el inverso. **Ejemplo resuelto:** dos obreros
tardan $4$ h y $12$ h por separado. Juntos hacen $\frac{1}{4} + \frac{1}{12} = \frac{4}{12} = \frac{1}{3}$ de
la obra por hora: tardan **$3$ horas**. (Menos que el más rápido, como debe ser: un resultado mayor de $4$
h delataría un error.)

## 4. Entre dos fracciones siempre hay otra

> [!practico]
> Entre $5$ y $6$ no hay ningún número natural. Pero entre $\frac{1}{2}$ y $\frac{2}{3}$ hay fracciones, y entre esas otras,
> y así sin fin: si haces zoom en la recta, nunca encuentras dos fracciones «pegadas».


Para los naturales existe el «siguiente» de cada número; para las fracciones **no**. Si
$\frac{a}{b} < \frac{c}{d}$ (con $b, d > 0$), la **mediante** $\frac{a+c}{b+d}$ queda estrictamente en medio:

$$
(a + c)\,b - a\,(b + d) = cb - ad > 0, \qquad c\,(b + d) - (a + c)\,d = cb - ad > 0 .
$$

Repitiendo, entre dos fracciones hay **infinitas**. De aquí sale la idea de que los racionales llenan la
recta de forma «densa» (aunque no la llenan del todo: faltan números como $\sqrt{2}$, que se verán más
adelante). Una consecuencia práctica: para comparar dos fracciones muy próximas, los productos cruzados
son más fiables que los decimales redondeados.

## 5. Decimales

> [!practico]
> Los decimales son fracciones con denominador $10$, $100$, $1000$…: $0{,}25$ son $25$ céntimos de euro, $\frac{25}{100}$.
> Algunas fracciones dan decimales que **terminan** ($\frac{1}{4} = 0{,}25$) y otras que se **repiten sin fin**
> ($\frac{1}{3} = 0{,}333\ldots$). Saber cuál ocurre sin hacer la división, y volver de un decimal periódico a su
> fracción, es lo que enseña esta sección.


Un número decimal usa la notación posicional con **décimas, centésimas, milésimas**:
$3{,}14 = 3 + \frac{1}{10} + \frac{4}{100}$. Para pasar de fracción a decimal se **divide**: $\frac{3}{8} = 0{,}375$.

> [!formal] Con rigor: cuándo termina un decimal
> **Teorema (decimales finitos).** Sea $\frac{a}{b}$ irreducible ($b > 0$). Su desarrollo decimal **termina** si y solo
> si $b = 2^m 5^n$ para ciertos $m, n \ge 0$.
>
> *Demostración.* Si $b = 2^m 5^n$, multiplicamos numerador y denominador por $2^{n-m}$ o $5^{m-n}$ (el que
> iguale los exponentes) y queda una fracción de denominador $10^{k}$, con $k = \max(m, n)$: un decimal con a lo
> sumo $k$ cifras. Recíprocamente, si $\frac{a}{b} = \frac{N}{10^k}$ entonces $a\cdot 10^k = N b$; como $a$ y $b$ son
> coprimos, $b$ divide a $10^k = 2^k 5^k$ y no puede tener otros primos. $\blacksquare$

Así, $\frac{1}{8} = 0{,}125$ y $\frac{7}{20} = 0{,}35$ terminan; $\frac{1}{3}$, $\frac{1}{6}$ y $\frac{1}{7}$ no.

> [!formal] Con rigor: por qué si no termina, se repite
> **Teorema (periodicidad).** Si no termina, el desarrollo es **periódico**: a partir de cierta cifra se repite
> un bloque indefinidamente.
>
> *Demostración.* En la división larga de $a$ entre $b$ cada paso produce un resto entre $0$ y $b - 1$ y la
> siguiente cifra depende **solo** de ese resto. Si algún resto fuera $0$, terminaría. Si no, tras como mucho
> $b$ pasos un resto ya visto se repite, y desde ahí todo se repite. $\blacksquare$

La longitud del periodo de $\frac{1}{b}$, para $b$ coprimo con $10$, es el menor $k \ge 1$ con
$10^k \equiv 1 \pmod b$ (el **orden** de $10$ módulo $b$): $\frac{1}{7} = 0{,}\overline{142857}$ (periodo $6$),
$\frac{1}{11} = 0{,}\overline{09}$ (periodo $2$), $\frac{1}{13} = 0{,}\overline{076923}$ (periodo $6$). Esto permite
decir, sin dividir, la cifra que ocupa cualquier lugar: la cifra $n$-ésima de $\frac{1}{7}$ es la cifra
$(n - 1) \bmod 6 + 1$ del bloque $142857$.

### De decimal periódico a fracción

Si $x = 0{,}\overline{36}$: $100x = 36{,}\overline{36}$; restando, $99x = 36$, luego $x = \frac{36}{99} = \frac{4}{11}$.
Para un periodo de $k$ cifras se multiplica por $10^k$ y se resta. Con parte decimal no periódica, se
alinean los periodos antes de restar.

**Ejemplo resuelto: $x = 1{,}2\overline{45} = 1{,}2454545\ldots$.** Con $10x = 12{,}4545\ldots$ y
$1000x = 1245{,}4545\ldots$, resta: $990x = 1233$, así que $x = \frac{1233}{990} = \frac{137}{110}$ (dividiendo por
$9$). Comprobación: $137 \div 110 = 1{,}24545\ldots$ $\checkmark$

**¿Es $0{,}\overline{9}$ igual a $1$?** Sí. $x = 0{,}\overline{9}$ cumple $10x - x = 9$, luego $x = 1$. No es
un «casi uno»: son dos escrituras del mismo número, como $\frac{1}{2}$ y $\frac{2}{4}$.

### Aviso para programadores

En un ordenador los decimales se guardan en **binario**, y una fracción solo termina en base $2$ si su
denominador es potencia de $2$. Por eso $0{,}1$ (que es $\frac{1}{10}$) **no** se puede representar
exactamente:

```python
>>> 0.1 + 0.2
0.30000000000000004
>>> from fractions import Fraction
>>> Fraction(1, 10) + Fraction(2, 10)
Fraction(3, 10)
```

Para dinero se usan enteros (céntimos) o tipos decimales exactos; para cálculo exacto, racionales.

## 6. Errores típicos

- Sumar numeradores y denominadores: $\frac{1}{2} + \frac{1}{3} = \frac{2}{5}$ (**falso**).
- «Cancelar» sumandos: $\frac{2 + 3}{2 + 5} = \frac{3}{5}$ (**falso**); solo se simplifican **factores** comunes
  a todo el numerador y a todo el denominador.
- Olvidar que $-3^2 = -9$ pero $(-3)^2 = 9$.
- Comparar decimales por longitud: $0{,}7 > 0{,}65$ aunque $65 > 7$.
- Dar un resultado sin simplificar o con denominador negativo.
- No comprobar el orden de magnitud: dos grifos juntos no pueden tardar más que el más rápido solo.

## Repaso: lo que debe quedarte dentro de un mes

1. $(-)(-) = +$ porque lo exige la distributiva.
2. $\frac{a}{b} = \frac{c}{d} \iff ad = bc$; el resultado se da irreducible.
3. Suma con denominador común; dividir es multiplicar por el inverso; comparar con productos cruzados.
4. $\frac{a}{b}$ irreducible termina $\iff b = 2^m 5^n$; si no, es periódico.
5. Entre dos fracciones siempre hay otra: la mediante.

## Siguiente

[[mat-proporcionalidad-porcentajes|El siguiente nodo]] usa estas fracciones para modelar situaciones reales (repartos,
escalas, descuentos), y [[mat-algebra-basica|el de álgebra básica]] sustituye los números por letras.
