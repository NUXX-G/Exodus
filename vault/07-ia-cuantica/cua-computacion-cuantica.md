---
id: cua-computacion-cuantica
title: "Computación cuántica: qubits, circuitos, entrelazamiento, Grover, Shor y corrección de errores"
area: ia-cuantica
trunk_level: 14
prerequisites: [fis-mecanica-cuantica, mat-probabilidad, mat-matematica-discreta]
academic_sources:
  - "Nielsen, M. A.; Chuang, I. L. Quantum Computation and Quantum Information, ed. 10º aniversario. Cambridge University Press, 2010."
  - "Shor, P. W. Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer. SIAM Journal on Computing, 26(5), 1484-1509, 1997."
  - "Grover, L. K. A fast quantum mechanical algorithm for database search. arXiv:quant-ph/9605043, 1996."
  - "Boyer, M.; Brassard, G.; Høyer, P.; Tapp, A. Tight bounds on quantum searching. Fortschritte der Physik, 46, 493-506, 1998."
  - "Deutsch, D.; Jozsa, R. Rapid solution of problems by quantum computation. Proceedings of the Royal Society A, 439, 553-558, 1992."
  - "Wootters, W. K.; Zurek, W. H. A single quantum cannot be cloned. Nature, 299, 802-803, 1982."
  - "Bennett, C. H.; Brassard, G.; Crépeau, C.; Jozsa, R.; Peres, A.; Wootters, W. K. Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels. Physical Review Letters, 70, 1895-1899, 1993."
  - "Clauser, J. F.; Horne, M. A.; Shimony, A.; Holt, R. A. Proposed Experiment to Test Local Hidden-Variable Theories. Physical Review Letters, 23, 880-884, 1969."
  - "Cirel'son, B. S. Quantum generalizations of Bell's inequality. Letters in Mathematical Physics, 4, 93-100, 1980."
  - "NIST. FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard, 2024."
ctf_flag: "sha256:46df4b2114bcd4e3ff85db625c6e5a5c22a4ceefde2d2e64ddd73a60a29e4ec7"
hints:
  - "(a) Grover mantiene el estado en un plano de dos dimensiones y cada iteración lo gira un ángulo fijo 2θ, con sin θ = 1/√N. (b) El orden de a módulo N es el menor r > 0 con a^r ≡ 1; si es par y a^(r/2) ≢ −1, los máximos comunes divisores de a^(r/2) ± 1 con N dan factores. (d) Tras medir el segundo registro, el primero queda en una superposición uniforme de x ≡ x0 (mod r); su transformada de Fourier cuántica es una suma geométrica (núcleo de Dirichlet) de m términos. (e) El valor esperado ⟨A⊗B⟩ para el estado de Bell |Φ+⟩ con observables en el plano XZ depende solo de la diferencia de ángulos."
  - "Para (a) simula el vector de 1024 amplitudes (oráculo: cambio de signo; difusión: 2·media − amplitud) y compara con sin²((2k+1)θ). Para (b) y (c), pow(a, r, N) y math.gcd en Python. Para (d) calcula la suma directa de los m exponenciales y contrástala con la forma cerrada; comprueba que Σ_y P(y) = 1. Para (e) construye las matrices 2×2 de los observables y haz la doble suma sobre el vector de estado."
  - "Nielsen & Chuang, §6.1 (Grover y su geometría), §5.2–5.3 (estimación de fase y búsqueda de orden), apéndice 4 (fracciones continuas) y §2.6 (desigualdad de Bell y CHSH). Documentación: qiskit.org/documentation."
exercises:
  - id: esfera-de-bloch
    tier: 1
    prompt: |
      Un qubit está en $\cos\frac\theta2\lvert0\rangle + e^{i\varphi}\sin\frac\theta2\lvert1\rangle$ con $\theta = 120°$ y $\varphi = 45°$. ¿Con qué probabilidad da $1$ al medirlo? Respuesta: un número.
    answers: ["sha256:ce5d3aa79ae56155078af52e8fac68eb2d0a78489f82bc26c1e1bbc667ba9fde"]
  - id: memoria-de-un-simulador
    tier: 1
    prompt: |
      Un simulador guarda el vector de estado de $30$ qubits con cada amplitud como un complejo de $16$ bytes (dos `double`). ¿Cuántos GiB ($2^{30}$ bytes) ocupa? Respuesta: un entero.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: circuito-de-bell
    tier: 1
    prompt: |
      Se parte de $\lvert01\rangle$, se aplica $H$ al primer qubit y luego CNOT con el primero como control. ¿Con qué probabilidad dan el mismo resultado los dos qubits al medirlos? Respuesta: un número.
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: reduccion-de-shor
    tier: 1
    prompt: |
      Para factorizar $N = 15$ con $a = 7$: halla el orden $r$ de $7$ módulo $15$ y los factores $\gcd(7^{r/2} - 1, 15)$ y $\gcd(7^{r/2} + 1, 15)$. Respuesta: `r;menor;mayor`.
    answers: ["sha256:77a9d87abe61d519357abdcb28840d042620fb5058f8ab03b64aeb79b03fdbcf"]
  - id: deutsch-jozsa
    tier: 2
    prompt: |
      En el circuito de Deutsch-Jozsa con $n = 3$ ($H^{\otimes3}$, oráculo $\lvert x\rangle \mapsto (-1)^{f(x)}\lvert x\rangle$, $H^{\otimes3}$) se usa $f(x) = 1$ si $x < 3$ y $0$ si no (ni constante ni equilibrada). ¿Con qué probabilidad sale $000$? Respuesta: un número.
    answers: ["sha256:f3499b6fd23711d2e243b8074433b1e25ba1fe9f21b6040a0133d8f6ab50050c"]
  - id: grover-64
    tier: 2
    type: numero
    sig: 5
    prompt: |
      Grover sobre $N = {{N}}$ elementos con uno marcado, haciendo $k = \lfloor\frac\pi4\sqrt N\rfloor = {{k}}$ iteraciones. ¿Con qué
      probabilidad se mide el marcado? Respuesta: con **5 cifras significativas**.
    variants:
      - values: {"N":64,"k":6}
        answers: ["sha256:a5af5e26e2524558dc3920318f69da29391ce0be33f5a397f6efef6c3d869b11","sha256:09169b8c23d07e26e20961e72630d50c99102a0f073f590f388a405dc64f937b","sha256:d5127d11856e7d2459fd4998e3463ec6df05c63e7c3bb0aecd5aa8de30f6a4da"]
      - values: {"N":16,"k":3}
        answers: ["sha256:347eca9cf95565c8f31db95774eb8ad466a3d89f368220cb45f5f738936f8a41","sha256:9a7d348cbf894adc0f75b801ed711e8aeb3a41247a8599a233f7f3468e8ff4fa","sha256:df29c2cb9419b524978c7c4040b0e9db5b82970e04556069ebb1693d4d754628"]
      - values: {"N":32,"k":4}
        answers: ["sha256:314f7ae26c1effbdbdc370292eaeb421dc29508fd113be971f6d3564a0d0d06e","sha256:b061794a235cfca3654e351fd16d57a74e68c253bd7d86e601ee04cbaee240db","sha256:774971bcf284fd2880700a0add2ca5a00b1901a28bb8bab3771abc8b0292df78"]
      - values: {"N":128,"k":8}
        answers: ["sha256:97069f5237541b3f0f309e15d29e9da83b9542d46af4279842593f364a062c8a","sha256:8be1da7e9008d335fbd4f7da9c690015af81588aef027ce4807a9f58a176f30b","sha256:aa4a6c0fdd5cb95421ffe1fd3f59bed7bc76c33aec50eff85318df165b7f4e37"]
      - values: {"N":256,"k":12}
        answers: ["sha256:e984f115e97337a61c93b139c274b9f5e4638a8107b6d27d9a68f7abb6f86300","sha256:0ae3ee37c3548544d3ebdb2eba17b9fb4fb3b74edc8008821791cc6fb350d690","sha256:bead49bdcab0659f71b345e27e49ede0f7bfde764991d84863aff3a85fe72298"]
      - values: {"N":512,"k":17}
        answers: ["sha256:85a828d173b2740da079c0862e879a78bd5921b6a51ea08eab833e40fbfcf70f","sha256:058b6f1280603376fd616ec8dc7d221d915a0b8f1688e85d8e963a321a75229b","sha256:707d7c81e84804b5085c2843ff7e44bfc7b98c0c689d4f2ec68569e03fb4abd5"]
      - values: {"N":1024,"k":25}
        answers: ["sha256:4c2f22e58684433acb0aa1cfcf166e1629970c94a4a07c11aa716846fc71ed12","sha256:55faa3477864eba798b0569d682f98327ff0ddf5e9afd51bee193a000fdfa68b","sha256:be38b7921d35c0785759bb660ebbbb53b168de28296edf6b785b3d7bfa65636e"]
  - id: grover-con-varios-marcados
    tier: 2
    prompt: |
      Grover sobre $N = 1024$ elementos con $M = 4$ marcados ($\sin\theta = \sqrt{M/N}$) y $k = 12$ iteraciones. ¿Con qué probabilidad se mide alguno de los marcados? Respuesta: con **5 decimales**.
    answers: ["sha256:df73f4b828486f1a29002b2276f29369270ed84fe427e5fb8c70c2d85318eedb"]
  - id: transformada-de-fourier-cuantica
    tier: 2
    prompt: |
      Se aplica la QFT de tamaño $Q = 8$ a la superposición uniforme de $\lvert0\rangle, \lvert2\rangle, \lvert4\rangle, \lvert6\rangle$. ¿Con qué probabilidad se mide $y = 4$? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: fracciones-continuas
    tier: 2
    prompt: |
      En Shor con $N = 21$ y $Q = 512$, se mide $y = 427$. Desarrolla $427/512$ en fracción continua y toma el último convergente con denominador menor que $N$: su denominador es el candidato a orden. ¿Cuál es? Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: chsh-con-otros-angulos
    tier: 2
    prompt: |
      Con el estado $\lvert\Phi^+\rangle$ y observables $\cos\theta\,Z + \sin\theta\,X$ en cada lado, ¿cuánto vale $S = E(A,B) - E(A,B') + E(A',B) + E(A',B')$ con $A = 0°$, $A' = 45°$, $B = 22{,}5°$, $B' = -22{,}5°$? Respuesta: con **4 decimales**.
    answers: ["sha256:be4f583379c29fcd51ee207a3d29fe6937fb6e5f6e2ab40646a7f6351c38224b"]
  - id: codigo-de-repeticion
    tier: 2
    prompt: |
      Un qubit lógico se protege con el código de repetición de 3 qubits contra inversiones de bit independientes, cada una con probabilidad $p = 0{,}1$, y se corrige por mayoría. ¿Cuál es la probabilidad de error lógico? Respuesta: un número.
    answers: ["sha256:205dedb85ccba3c703f3285ff30538c0a7545c12dc75442b7da6344e7f054711"]
  - id: puerta-t
    tier: 2
    type: numero
    sig: 3
    prompt: |
      ¿Con qué probabilidad da $0$ el estado $H\,{{nombre}}\,H\lvert0\rangle$, donde ${{nombre}} = \operatorname{diag}(1, e^{i\varphi})$ con
      $\varphi = {{tex}}$? Respuesta: con **3 cifras significativas**.
    variants:
      - values: {"nombre":"T","tex":"\\pi/4"}
        answers: ["sha256:d85456c500c5092a3f6b910b19838bfdcc2fe91704ed989624ff1e231b4f74e1","sha256:659d6a1ece6865aedeb921a1fd350cdeedf00403418bdbfb91afc19f3955cf57","sha256:62b93f800b62c61e4873387c9c187498d9124efb390dc19e96300f4074b8b0f8"]
      - values: {"nombre":"S","tex":"\\pi/2"}
        answers: ["sha256:c0aa227e1a5f4a578b4629386f183408d8bdad4b8de2255e6a7675662dfbfa11","sha256:71de41e844209d6c9ca0658df659844df6aa7c13ee1c391f90db2c5dc5d8c56c","sha256:a15f2c01d3394d56757952dc97ceda986394ffb1363bdc88d19deab065ce7937"]
      - values: {"nombre":"P(\\pi/8)","tex":"\\pi/8"}
        answers: ["sha256:398b12f4af9c50073b6acdd3b1b0c01bf3ae12215f0424e809a4b0005585158f","sha256:2dc96f51562342414c9a8204a837abedb49a82ee29ace54e215a740278c7320e","sha256:ff6293abd3e5c35c24581691d4f5c3ce4db2af4ebde73150a872d311478640c1"]
      - values: {"nombre":"P(3\\pi/4)","tex":"3\\pi/4"}
        answers: ["sha256:2f9a312df0b9c32c561ce361fd5ac9b8c7e7ba8bdb0e01cacf420bcbfb2911d9","sha256:15f72438bb9f37d6e3f6f72b878febf987e8fdeff275b104ee3af1254348110a","sha256:9387e2cdb9d5042b4c5a0a89ac25dd85af5fc1c21bfc08e052ca8f96b1eed153"]
      - values: {"nombre":"P(\\pi/3)","tex":"\\pi/3"}
        answers: ["sha256:22165d8c9b549d8a28765598d54ed32618db40de27fffd20c5d179ba22a8e992","sha256:fca5d1c8c718ce52db0e21a7dbf6d76b86e85f1e9d23e6d1df16cb9a6b29a6ff","sha256:453bbc8922fac090880cd14648849d05f0e9480c59421172ba8f889e37818d3e"]
      - values: {"nombre":"Z","tex":"\\pi"}
        answers: ["sha256:d284e094c0cd0a580a6bf9f01b70377c86e561e961fa63d8b479029f061f6c30","sha256:90cf55c555a3543f6e20b165e28391f58a261744337a8006a589e9b80e41e0b0","sha256:b3ff2d94a20b958f679f7c8617df1edd970a068f1855ceaff5b66a21e1d4796b"]
  - id: bernstein-vazirani
    tier: 2
    prompt: |
      En el algoritmo de Bernstein-Vazirani con $n = 4$ y oráculo $f(x) = s\cdot x \bmod 2$ para una cadena secreta $s = 1011$, ¿qué cadena de 4 bits se mide (con probabilidad 1) tras una sola consulta? Respuesta: la cadena.
    answers: ["sha256:3dd9c0995d54c0abd51a90f1d57b1ce77bc885fc8a7cea52dcad3c2540dda5ee"]
  - id: teleportacion-sin-corregir
    tier: 3
    prompt: |
      Se teleporta $\lvert\psi\rangle = \cos\frac\pi8\lvert0\rangle + \sin\frac\pi8\lvert1\rangle$, pero Bob no aplica ninguna corrección. Promediando sobre los cuatro resultados de Alice (equiprobables), ¿cuánto vale la fidelidad media $\lvert\langle\psi\vert\psi_{\text{Bob}}\rangle\rvert^2$? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: estimacion-de-fase
    tier: 3
    prompt: |
      En la parte cuántica de Shor con $Q = 256$ y orden $r = 6$, tras medir el segundo registro el primero queda en la superposición uniforme de los $x \equiv 0 \pmod 6$ ($m = 43$ términos). ¿Cuánto vale $\Pr(y)$ para $y = 43$ tras la QFT? Respuesta: con **4 decimales**.
    answers: ["sha256:3bc3a53e5045af563978436c8e049cd5e17d50415e7d6991fcfb81b11abd6c1e"]
  - id: grover-pasado-de-vueltas
    tier: 3
    prompt: |
      Grover sobre $N = 16$ con un marcado. ¿Cuál es la probabilidad de éxito con $k = 3$ iteraciones y con $k = 6$? Respuesta: `P3;P6`, ambas con **4 decimales**.
    answers: ["sha256:adafc342cf8940866ee54bdb3936e6af5a97173325441ff08db55e25389cc334"]
  - id: r-h-sobre-0
    tier: 1
    type: matriz
    review: true
    sig: 4
    prompt: |
      Escribe el vector de estado (amplitudes de $\lvert0\rangle$ y $\lvert1\rangle$) que resulta de aplicar $H$ a $\lvert0\rangle$.
      Respuesta: `(a, b)`; vale `1/sqrt(2)`.
    answers: ["sha256:c5aad6aabf64d10c5510a46898e2aa98967662b01de22467cea215fe2c40a7b2","sha256:187ca350c5a6921caf6ba7c2d090c3389813ec0c19cce06fe981dc8cbdcab378"]
  - id: r-h-sobre-1
    tier: 1
    type: matriz
    review: true
    sig: 4
    prompt: |
      Escribe el vector de estado que resulta de aplicar $H$ a $\lvert1\rangle$. Respuesta: `(a, b)`.
    answers: ["sha256:4fb35135513c9b77fa538d69f913deecadbaa6fbd3653a21da6ad29e8ed610ae","sha256:ba9ba0ea3b6d747d110e7f25652f51678062dbd01822a92ad2e0e230c0e3fca3"]
  - id: r-amplitudes-n-qubits
    tier: 1
    type: numero
    review: true
    sig: 10
    prompt: |
      ¿Cuántas amplitudes complejas hacen falta para describir un estado general de ${{n}}$ qubits? Respuesta: un entero.
    variants:
      - values: {"n":10}
        answers: ["sha256:a23f8bad53420632da250874ab73e4f6f9c4248e3b8ff4f8ea876da5177e6728","sha256:64ee7887884933b44c120a6c765d9c804153cd368ebcf06bd8f99237d5020960","sha256:4203e5944499f42ac6da9376d4241e7c664a568a23ce7be150bef1aff41eb16f"]
      - values: {"n":20}
        answers: ["sha256:357e5902e3f1eace71a33c8657a634a06156835a7571ed5ea62a269938434e64","sha256:edc47b724fe3a721ba283fae4ed2548b3e4ffe9808208a014280411eca22cc31","sha256:af38263dc8ded0a448b930fcccd18cb3e3a91bb68f48ee9035cccfda77863919"]
      - values: {"n":30}
        answers: ["sha256:d16d735db9db10c62e2e4fecec1d0f26431adcb8187153441966ab1d25165b29","sha256:8dae209525944a6e33283d2f58abfd42d8c306a3ddfc802c529cf58517253858","sha256:34caaf35ccbb1865008a76dce814cb2748fad4f46192c0888b39ffc166a505e8"]
      - values: {"n":5}
        answers: ["sha256:c90ecd06babb0bf242167d58e9ac7f967482928cc249091aa4b7d130d4b2824b","sha256:7ac6e05afe3534a2af502354bcae57eca6f650906b7719e4a15a0a94c96f668d","sha256:f0b9596e543edb50ee2100c9cc625a20cae1f5a111184aeb965f6423a1d86500"]
      - values: {"n":16}
        answers: ["sha256:aa59f9aa2bbfaf75326e81492049240ea30b17781aba0323334bc96e04a75875","sha256:b64e46a2bf51b888e5e311749d9b4aa4648a5dfaf6cf6984fbc9b1d9584935ef","sha256:41392faba840686aa6b806da7f247665efc58dfb7d01cbced67cda9ced31f944"]
  - id: r-medir-superposicion
    tier: 2
    type: opcion
    review: true
    prompt: |
      Se mide en la base computacional un qubit en el estado $\tfrac{1}{\sqrt2}(\lvert0\rangle + \lvert1\rangle)$. ¿Qué pasa?
    options:
      - |
        Se obtiene «la mitad de 0 y la mitad de 1»
      - |
        Sale 0 o 1 con probabilidad $1/2$ cada uno, y después el qubit queda en el estado medido
      - |
        Siempre sale 0, porque es el primer estado
      - |
        La medida no cambia el estado
    answers: ["sha256:f9b84f1a253032fb0450e934f911fa20b7fa14c983ec4b5ec1678e2d2fcd6222"]
  - id: r-no-clonacion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Se puede copiar un qubit en un estado **desconocido** $\alpha\lvert0\rangle + \beta\lvert1\rangle$ en otro qubit?
    options:
      - |
        Sí, con una puerta CNOT basta para cualquier estado
      - |
        Sí, midiéndolo y preparando otro igual
      - |
        No: el teorema de no clonación prohíbe copiar un estado cuántico desconocido
      - |
        Solo si el estado es una superposición
    answers: ["sha256:474eefdf210ebcc368fa344fa3945bf829ac30e0527b8a80612f8345d27fa0e2"]
---

# Computación cuántica: qubits, circuitos, entrelazamiento, Grover, Shor y corrección de errores

Un ordenador cuántico no es «un ordenador más rápido»: es un modelo de cómputo basado en las reglas de [[fis-mecanica-cuantica]] aplicadas a sistemas
de dos niveles. Para un número pequeño de problemas da ventaja asintótica probada o conjeturada (factorizar, simular moléculas, buscar sin
estructura); para casi todo lo demás no ayuda. Entender qué da y qué no da es tan importante como saber operar los circuitos, y es la base
para juzgar la criptografía poscuántica de [[sec-criptografia]].

## Objetivos

Al terminar sabrás:

1. Describir qubits y registros como vectores, con la esfera de Bloch y el producto tensorial, y simular circuitos pequeños a mano y con código.
2. Usar las puertas básicas ($X$, $Z$, $H$, $S$, $T$, CNOT), preparar estados de Bell y demostrar el teorema de no clonación.
3. Explicar la teleportación y la desigualdad CHSH y calcular sus magnitudes.
4. Analizar Deutsch-Jozsa, Bernstein-Vazirani y Grover (geometría, número óptimo de iteraciones, varios marcados).
5. Reducir la factorización al cálculo del orden, recuperar el orden con fracciones continuas y calcular las probabilidades de la estimación de fase.
6. Razonar sobre ruido, corrección de errores y el alcance real de la tecnología.

## Qué debes dominar antes

[[fis-mecanica-cuantica]] (postulados, espín, entrelazamiento), [[mat-probabilidad]] y [[mat-matematica-discreta]] (aritmética modular, máximo común
divisor).

> [!question] Test de entrada
> 1. ¿Cuánto vale $H\lvert0\rangle$ con $H = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$?
> 2. ¿Cuánto es $7^2 \bmod 15$?
> 3. ¿Es $\frac{1}{\sqrt2}(\lvert00\rangle + \lvert11\rangle)$ un estado producto?
>
> Respuestas: $\frac{1}{\sqrt2}(\lvert0\rangle + \lvert1\rangle)$; $4$; no, está entrelazado (su matriz de coeficientes tiene rango 2).

## 1. Para qué sirve

- **Criptografía**: Shor rompe RSA, Diffie-Hellman y las curvas elípticas en un ordenador cuántico tolerante a fallos; por eso el NIST publicó en
  2024 los primeros estándares poscuánticos (FIPS 203, ML-KEM, basado en retículos).
- **Química y materiales**: simular moléculas y sólidos, el uso que motivó la idea de ordenador cuántico.
- **Comunicaciones**: distribución cuántica de claves, cuya seguridad descansa en la no clonación.
- **Teoría de la computación**: separaciones entre modelos de consulta, la clase BQP, límites de la búsqueda.
- **Ingeniería de qubits**: los dispositivos actuales (superconductores, iones atrapados, fotones) requieren entender ruido y corrección de errores.

## 2. Qubits y registros

Un **qubit** es un vector unitario de $\mathbb C^2$, $\lvert\psi\rangle = \alpha\lvert0\rangle + \beta\lvert1\rangle$ con $\lvert\alpha\rvert^2 + \lvert\beta\rvert^2 = 1$. Módulo una fase global (no
observable), se parametriza por la **esfera de Bloch**: $\lvert\psi\rangle = \cos\frac\theta2\lvert0\rangle + e^{i\varphi}\sin\frac\theta2\lvert1\rangle$; medido en la base
computacional da $1$ con probabilidad $\sin^2\frac\theta2$, sin importar $\varphi$.

Un registro de $n$ qubits vive en $(\mathbb C^2)^{\otimes n} \cong \mathbb C^{2^n}$: un estado general tiene $2^n$ amplitudes. Las puertas son matrices
unitarias (reversibles) y la medida en la base computacional da $x$ con probabilidad $\lvert\langle x\vert\psi\rangle\rvert^2$ y colapsa el estado a $\lvert x\rangle$.

Toda la dificultad de simular un sistema cuántico clásicamente está en ese crecimiento: con $30$ qubits el vector ya ocupa $16$ GiB en complejos de
doble precisión, y cada qubit más lo duplica.

## 3. Puertas y circuitos

$$
X = \begin{pmatrix}0&1\\1&0\end{pmatrix},\; Z = \begin{pmatrix}1&0\\0&-1\end{pmatrix},\; H = \tfrac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\;
S = \begin{pmatrix}1&0\\0&i\end{pmatrix},\; T = \begin{pmatrix}1&0\\0&e^{i\pi/4}\end{pmatrix}.
$$

$X$ es el NOT; $Z$, $S$ y $T$ cambian fases relativas (invisibles en una medida directa, decisivas tras una $H$); $H$ lleva
$\lvert0\rangle \mapsto \frac{1}{\sqrt2}(\lvert0\rangle + \lvert1\rangle)$ y crea superposición. La puerta de dos qubits fundamental es **CNOT**, que invierte el objetivo si el
control vale $1$.

> [!example] Ejemplo resuelto 1: el circuito de Bell
> $\lvert00\rangle \xrightarrow{H\otimes I} \frac{1}{\sqrt2}(\lvert00\rangle + \lvert10\rangle) \xrightarrow{\text{CNOT}} \frac{1}{\sqrt2}(\lvert00\rangle + \lvert11\rangle) = \lvert\Phi^+\rangle$, un **estado de Bell**. Cada qubit por
> separado da $0$ o $1$ con probabilidad $\frac12$, pero los dos resultados coinciden siempre. Partiendo de $\lvert01\rangle$, $\lvert10\rangle$ o $\lvert11\rangle$ se obtienen
> los otros tres estados de Bell, que forman una base ortonormal de dos qubits.

**Universalidad.** El conjunto $\{H, T, \text{CNOT}\}$ aproxima cualquier unitaria con error arbitrario (Nielsen y Chuang, §4.5). Las puertas de
Clifford $\{H, S, \text{CNOT}\}$ por sí solas se simulan eficientemente en un ordenador clásico (teorema de Gottesman-Knill): la puerta $T$ es la
que aporta el poder extra.

**Teorema de no clonación** (Wootters y Zurek, 1982). No existe una unitaria $U$ con $U(\lvert\psi\rangle\lvert0\rangle) = \lvert\psi\rangle\lvert\psi\rangle$ para todo $\lvert\psi\rangle$.

*Demostración.* Si $U$ clonase $\lvert\psi\rangle$ y $\lvert\phi\rangle$, el producto interno de ambas salidas sería $\langle\psi\vert\phi\rangle^2$, pero una unitaria conserva productos
internos: $\langle\psi\vert\phi\rangle = \langle\psi\vert\phi\rangle^2$, lo que solo ocurre si el producto es $0$ o $1$. $\blacksquare$

Un estado cuántico desconocido no se puede copiar ni observar sin perturbarlo: es el fundamento de la distribución cuántica de claves.

## 4. Entrelazamiento: teleportación y CHSH

**Teleportación** (Bennett et al., 1993). Alice tiene un qubit $\lvert\psi\rangle = \alpha\lvert0\rangle + \beta\lvert1\rangle$ desconocido y comparte con Bob un par $\lvert\Phi^+\rangle$.
Alice aplica CNOT (su qubit como control, su mitad del par como objetivo) y $H$ a su qubit, y mide ambos, obteniendo $(m_1, m_2)$. Desarrollando
el estado de los tres qubits,

$$
\tfrac12\sum_{m_1,m_2}\lvert m_1m_2\rangle \otimes X^{m_2}Z^{m_1}\lvert\psi\rangle ,
$$

de modo que, tras recibir los dos bits por un canal clásico, Bob aplica $X^{m_2}Z^{m_1}$ y recupera $\lvert\psi\rangle$. Los cuatro resultados son
equiprobables e independientes de $\lvert\psi\rangle$: sin los bits clásicos Bob no tiene información (no hay comunicación más rápida que la luz) y el
original se destruye (coherente con la no clonación).

**Desigualdad CHSH.** Con observables $A, A'$ en un lado y $B, B'$ en el otro, de valores $\pm1$, toda teoría de variables ocultas locales cumple

$$
\lvert S\rvert \le 2, \qquad S = E(A,B) - E(A,B') + E(A',B) + E(A',B') .
$$

*Demostración.* Para valores $\pm1$: $S = A(B - B') + A'(B + B')$, y como $B, B' \in \{\pm1\}$ uno de los dos paréntesis es $0$ y el otro $\pm2$, así que
$\lvert S\rvert \le 2$ en cada realización; el promedio mantiene la cota. $\blacksquare$

Con $\lvert\Phi^+\rangle$ y observables $\cos\theta\,Z + \sin\theta\,X$, $E(\theta_A, \theta_B) = \cos(\theta_A - \theta_B)$; con $\theta_A \in \{0, 90°\}$ y $\theta_B \in \{45°, 135°\}$ se
llega a $S = 2\sqrt2$, la cota máxima de la mecánica cuántica (Cirel'son, 1980). Los experimentos violan $\lvert S\rvert \le 2$.

## 5. Algoritmos de consulta

**El paralelismo cuántico no es magia.** Con $H^{\otimes n}$ se prepara la superposición uniforme de $2^n$ valores, y un oráculo evalúa $f$ en todos a la
vez. Pero una medida devuelve un solo resultado. Todo algoritmo cuántico consiste en organizar la **interferencia** para que las amplitudes de las
respuestas erróneas se anulen.

**Retroceso de fase.** Con el qubit auxiliar en $\frac{1}{\sqrt2}(\lvert0\rangle - \lvert1\rangle)$, el oráculo $\lvert x\rangle\lvert y\rangle \mapsto \lvert x\rangle\lvert y \oplus f(x)\rangle$ actúa como
$\lvert x\rangle \mapsto (-1)^{f(x)}\lvert x\rangle$: el valor de la función pasa a una fase.

**Deutsch-Jozsa** (1992). Se promete que $f:\{0,1\}^n \to \{0,1\}$ es constante o equilibrada. Tras $H^{\otimes n}$, el oráculo de fase y otra vez
$H^{\otimes n}$, la amplitud de $\lvert0\cdots0\rangle$ es $\frac{1}{2^n}\sum_x(-1)^{f(x)}$: $\pm1$ si $f$ es constante y $0$ si es equilibrada. Una consulta basta; clásicamente
hacen falta $2^{n-1} + 1$ en el peor caso determinista (aunque un algoritmo aleatorizado lo resuelve con pocas consultas y error pequeño).

**Bernstein-Vazirani.** Si $f(x) = s\cdot x \bmod 2$ para una cadena secreta $s$, el mismo circuito deja el registro exactamente en $\lvert s\rangle$: una
consulta frente a $n$ clásicas.

**Grover** (1996). Búsqueda entre $N = 2^n$ elementos con $M$ marcados. Sea $\lvert s\rangle$ la superposición uniforme. El oráculo invierte el signo de los
marcados y la **difusión** $D = 2\lvert s\rangle\langle s\rvert - I$ refleja respecto a la media (cada amplitud $a$ pasa a $2\bar a - a$). El estado permanece en el plano
generado por la superposición de los marcados y la de los no marcados, con $\sin\theta = \sqrt{M/N}$, y dos reflexiones componen una **rotación** de
ángulo $2\theta$. Tras $k$ iteraciones,

$$
P_k = \sin^2\bigl((2k + 1)\theta\bigr),
$$

máxima cuando $(2k + 1)\theta \approx \pi/2$, es decir, $k \approx \frac\pi4\sqrt{N/M}$. **Si se itera de más, la probabilidad baja.** La aceleración es cuadrática,
no exponencial, y es óptima: Boyer, Brassard, Høyer y Tapp (1998) acotaron con precisión el número de consultas necesario.

> [!example] Ejemplo resuelto 2: Grover con $N = 8$
> $\sin\theta = 1/\sqrt8$, $\theta \approx 0{,}3614$ rad. Con $k = 1$: $P = \sin^2(3\theta) \approx 0{,}78$; con $k = 2$: $P = \sin^2(5\theta) = 0{,}9453125$ (exacto); con $k = 3$,
> $\sin^2(7\theta) \approx 0{,}33$: se pasó. Comprueba la segunda a mano con la regla «$2\cdot$media $-$ amplitud»: partiendo de amplitudes $1/\sqrt8$, tras la
> primera iteración el marcado tiene $\frac{5}{2\sqrt8}$ y los demás $\frac{1}{2\sqrt8}$.

## 6. Shor: factorizar es hallar un orden

Factorizar $N$ se reduce a hallar el **orden** $r$ de un $a$ coprimo con $N$: el menor $r > 0$ con $a^r \equiv 1 \pmod N$.

*Reducción clásica.* Si $r$ es par y $a^{r/2} \not\equiv -1 \pmod N$, entonces $(a^{r/2} - 1)(a^{r/2} + 1) \equiv 0 \pmod N$ sin que $N$ divida a ninguno de los
factores, de modo que $\gcd(a^{r/2} \pm 1, N)$ son factores no triviales. Para un $a$ aleatorio esto ocurre con probabilidad al menos $\frac12$.

> [!example] Ejemplo resuelto 3: $N = 21$, $a = 2$
> Las potencias de $2$ módulo $21$ son $2, 4, 8, 16, 11, 1$: el orden es $r = 6$. $2^3 = 8 \not\equiv -1$, y $\gcd(7, 21) = 7$, $\gcd(9, 21) = 3$: $21 = 3\cdot7$.

*Parte cuántica.* La **transformada de Fourier cuántica** de tamaño $Q$, $\lvert x\rangle \mapsto \frac{1}{\sqrt Q}\sum_ye^{2\pi ixy/Q}\lvert y\rangle$, se implementa con $O(n^2)$ puertas
($n = \log_2Q$). Con $Q = 2^t \ge N^2$ se prepara $\frac{1}{\sqrt Q}\sum_x\lvert x\rangle\lvert a^x \bmod N\rangle$ y se mide el segundo registro. El primero queda uniformemente
repartido sobre los $m \approx Q/r$ valores $x \equiv x_0 \pmod r$, y la QFT lo transforma en

$$
\Pr(y) = \frac{1}{Qm}\left\lvert\sum_{j=0}^{m-1}e^{2\pi i\,yjr/Q}\right\rvert^2 = \frac{1}{Qm}\left(\frac{\sin(\pi myr/Q)}{\sin(\pi yr/Q)}\right)^2 ,
$$

con picos en los $y$ próximos a $sQ/r$, $s = 0, \dots, r - 1$. Si $r$ divide a $Q$, los picos son exactos y cada uno tiene probabilidad $1/r$.

**Fracciones continuas.** De $y/Q \approx s/r$ se recupera $r$ como denominador de un **convergente** de la fracción continua de $y/Q$: si
$\lvert y/Q - s/r\rvert \le 1/(2Q) \le 1/(2N^2) < 1/(2r^2)$, la teoría de aproximación diofántica garantiza que $s/r$ (irreducible) es un convergente. Se toma el
último con denominador menor que $N$ y se comprueba clásicamente si $a^r \equiv 1$.

El coste total es polinómico en $\log N$, frente al subexponencial del mejor algoritmo clásico conocido (criba general del cuerpo de números).

## 7. Ruido, corrección de errores y realidad actual

- **Decoherencia**: las puertas reales fallan con probabilidades del orden de $10^{-3}$ a $10^{-2}$ por operación.
- **Corrección de errores**: un qubit lógico se codifica en muchos físicos. El ejemplo mínimo es el **código de repetición** de 3 qubits contra
  inversiones de bit, $\alpha\lvert0\rangle + \beta\lvert1\rangle \mapsto \alpha\lvert000\rangle + \beta\lvert111\rangle$: midiendo paridades (sin medir el dato) se detecta y corrige un error; falla
  si hay dos o más, con probabilidad $3p^2 - 2p^3$, menor que $p$ si $p < \frac12$. Los códigos reales (de superficie) corrigen también errores de fase,
  y el **teorema del umbral** garantiza cómputo arbitrariamente largo si el error físico está por debajo de un umbral.
- **Escala**: ejecutar Shor sobre RSA-2048 exige del orden de millones de qubits físicos con corrección de errores, muy lejos de los dispositivos
  actuales.
- **BQP**: la clase de problemas que un ordenador cuántico resuelve con error acotado en tiempo polinómico. Contiene a BPP y está contenida en
  PSPACE; no se cree que contenga a los problemas NP-completos.
- **Cuándo ayuda**: simulación cuántica, factorización y logaritmo discreto, aceleraciones cuadráticas de búsqueda. **Cuándo no**: bases de datos
  convencionales, IA generalista y problemas sin estructura aprovechable. Una afirmación de «aceleración exponencial» sin el algoritmo concreto
  es publicidad.

## 8. Comprobar con un programa

Un simulador de vector de estado de pocas líneas reproduce todo el nodo: Grover frente a $\sin^2((2k + 1)\theta)$, la teleportación con sus cuatro
correcciones, la estimación de fase frente a la fórmula del núcleo de Dirichlet y la parte clásica de Shor con fracciones continuas.

```python
import cmath
import math
from fractions import Fraction

def aplicar_1q(estado, n, q, U):
    """Puerta de un qubit U (2×2) sobre el qubit q (0 = el más significativo)."""
    bit = 1 << (n - 1 - q)
    nuevo = estado[:]
    for i in range(len(estado)):
        if not i & bit:
            a, b = estado[i], estado[i | bit]
            nuevo[i], nuevo[i | bit] = U[0][0] * a + U[0][1] * b, U[1][0] * a + U[1][1] * b
    return nuevo

def cnot(estado, n, c, t):
    bc, bt = 1 << (n - 1 - c), 1 << (n - 1 - t)
    return [estado[i ^ bt] if i & bc else estado[i] for i in range(len(estado))]

r = 1 / math.sqrt(2)
H, X, Z = [[r, r], [r, -r]], [[0, 1], [1, 0]], [[1, 0], [0, -1]]

# 1. Grover: simulación frente a la fórmula (N = 8, k = 2 da exactamente 0,9453125).
def grover(n, marcado, k):
    N = 1 << n
    psi = [1 / math.sqrt(N)] * N
    for _ in range(k):
        psi[marcado] = -psi[marcado]
        media = sum(psi) / N
        psi = [2 * media - v for v in psi]
    return psi[marcado] ** 2

assert abs(grover(3, 5, 2) - 0.9453125) < 1e-12
for n, k in ((4, 3), (6, 6), (8, 12)):
    assert abs(grover(n, 1, k) - math.sin((2 * k + 1) * math.asin(1 / math.sqrt(1 << n))) ** 2) < 1e-12

# 2. Teleportación: con la corrección X^m2 Z^m1, Bob recupera ψ en los cuatro resultados.
alfa, beta = complex(0.6, 0), complex(0, 0.8)
e = [0j] * 8
e[0b000], e[0b100] = alfa, beta
e = cnot(aplicar_1q(e, 3, 1, H), 3, 1, 2)       # par de Bell entre los qubits 1 y 2
e = aplicar_1q(cnot(e, 3, 0, 1), 3, 0, H)       # operaciones de Alice
for m1 in (0, 1):
    for m2 in (0, 1):
        idx = (m1 << 2) | (m2 << 1)
        bob = [e[idx], e[idx | 1]]
        p = abs(bob[0]) ** 2 + abs(bob[1]) ** 2
        assert abs(p - 0.25) < 1e-12
        if m2:
            bob = [bob[1], bob[0]]
        if m1:
            bob = [bob[0], -bob[1]]
        assert abs(bob[0] / math.sqrt(p) - alfa) < 1e-12 and abs(bob[1] / math.sqrt(p) - beta) < 1e-12

# 3. Estimación de fase: suma directa frente a núcleo de Dirichlet, y Σ Pr(y) = 1 (Q = 256, r = 6, m = 43).
Q, rr, m = 256, 6, 43
def pr_suma(y):
    return abs(sum(cmath.exp(2j * math.pi * y * j * rr / Q) for j in range(m))) ** 2 / (Q * m)
def pr_cerrada(y):
    a = math.pi * y * rr / Q
    return (m if abs(math.sin(a)) < 1e-15 else math.sin(m * a) / math.sin(a)) ** 2 / (Q * m)
assert all(abs(pr_suma(y) - pr_cerrada(y)) < 1e-12 for y in range(Q))
assert abs(sum(pr_suma(y) for y in range(Q)) - 1) < 1e-10

# 4. Parte clásica de Shor para N = 21, a = 2: del pico y = 427 (Q = 512) al orden y a los factores.
N, a = 21, 2
cand = Fraction(427, 512).limit_denominator(N - 1).denominator
assert cand == 6 and pow(a, cand, N) == 1
f1, f2 = math.gcd(pow(a, cand // 2) - 1, N), math.gcd(pow(a, cand // 2) + 1, N)
assert sorted((f1, f2)) == [3, 7]
print("Shor: 21 =", f1, "×", f2)
```

## 9. Errores típicos

- Creer que $n$ qubits «guardan» $2^n$ resultados legibles: una medida da un único valor.
- Ignorar las fases relativas: no se ven en una medida directa, pero deciden la interferencia tras una $H$.
- Iterar Grover «por si acaso»: pasarse del óptimo reduce la probabilidad de éxito.
- Usar $k \approx \frac\pi4\sqrt N$ con varios marcados (hay que usar $\sqrt{N/M}$).
- Aplicar la reducción de Shor con $r$ impar o con $a^{r/2} \equiv -1$: hay que cambiar de $a$.
- Tomar el denominador de $y/Q$ en lugar del de un convergente de su fracción continua.
- Pensar que la teleportación transmite información sin canal clásico, o que copia el estado.
- Confundir la cota local de CHSH ($2$) con la cuántica ($2\sqrt2$).

## 10. Resumen

- Qubit: vector de $\mathbb C^2$; registro de $n$ qubits: $2^n$ amplitudes; puertas unitarias; medida de Born.
- $H$, CNOT y estados de Bell; universalidad de $\{H, T, \text{CNOT}\}$; Gottesman-Knill; no clonación.
- Teleportación: 2 bits clásicos + 1 par de Bell; CHSH: $\le 2$ local, $2\sqrt2$ cuántico.
- Retroceso de fase; Deutsch-Jozsa y Bernstein-Vazirani en una consulta; Grover $P_k = \sin^2((2k + 1)\theta)$, $\sin\theta = \sqrt{M/N}$, óptimo $\approx\frac\pi4\sqrt{N/M}$.
- Shor: orden $\Rightarrow$ factores con $\gcd(a^{r/2} \pm 1, N)$; QFT y núcleo de Dirichlet; fracciones continuas.
- Ruido y corrección de errores: código de repetición $3p^2 - 2p^3$; umbral; criptografía poscuántica.

## Reto

Calcula cinco enteros.

- **a.** Grover con $n = 10$ qubits, un único elemento marcado, y $k = \lfloor\frac\pi4\sqrt N\rfloor$ iteraciones. Probabilidad de medir el elemento marcado:
  $\lfloor 10^9P\rfloor$. Valor de control: con $N = 8$ y $k = 2$, $P = 0{,}9453125$.
- **b.** Orden $r$ de $a = 2$ módulo $N = 143$.
- **c.** El menor de los dos factores primos de $143$ que se obtienen con $\gcd(a^{r/2} \pm 1, N)$.
- **d.** Estimación de fase con $Q = 2^{15} = 32768$ y el mismo $r$. Tras medir el segundo registro con resultado $a^0 \bmod 143 = 1$, el primer registro es la
  superposición uniforme de los $x \in [0, Q)$ con $x \equiv 0 \pmod r$ ($m = 547$ términos). Calcula $\Pr(y)$ para $y = \operatorname{round}(7Q/r)$ y entrega
  $\lfloor 10^9\Pr(y)\rfloor$. Valor de control: $\sum_y\Pr(y) = 1$.
- **e.** Estado $\lvert\Phi^+\rangle$ y observables $\cos\theta\,Z + \sin\theta\,X$. Con los ángulos $A: 0°$, $A': 50°$, $B: 25°$, $B': -20°$, calcula
  $S = E(A,B) - E(A,B') + E(A',B) + E(A',B')$ y entrega $\lfloor 10^9S\rfloor$. Valor de control: con $A: 0°$, $A': 90°$, $B: 45°$, $B': 135°$ sale $S = 2\sqrt2$.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e}`

## Repaso: lo que debe quedarte dentro de un mes

1. Los algoritmos cuánticos funcionan por interferencia, no por «probar todo a la vez».
2. Un estado desconocido no se puede clonar; la teleportación necesita dos bits clásicos.
3. Grover gira un ángulo $2\theta$ por iteración: ganancia cuadrática y punto óptimo.
4. Shor: factorizar es hallar un orden, y el orden sale de la QFT y las fracciones continuas.
5. Sin corrección de errores no hay algoritmos largos; RSA-2048 está aún muy lejos, pero la migración poscuántica ya ha empezado.

## Siguiente

En las ramas, algoritmos cuánticos avanzados y corrección de errores (`cua-algoritmos-correccion-errores`); en ciberseguridad,
[[sec-criptografia]] y la criptografía poscuántica.
