---
id: mat-probabilidad
title: "Probabilidad: axiomas, condicionamiento, variables aleatorias, teoremas límite y cadenas de Markov"
area: matematicas
trunk_level: 11
prerequisites: [mat-combinatoria-probabilidad-basica, mat-calculo-multivariable, mat-logica-demostraciones]
academic_sources:
  - "Hernández Morales, V.; Vélez Ibarrola, R. Cálculo de Probabilidades I. Editorial UNED (colección Grado): texto base de «Cálculo de probabilidades I» (61022033) de la UNED. Guía 2026-27: temas 1-5 (modelo matemático, asignación, inclusión-exclusión), 6-7 (condicionada e independencia), 8-10 (variable aleatoria, esperanza, análisis descriptivo), 11 (pruebas repetidas) y 12 (las fluctuaciones del azar)."
  - "García Pérez, A. Estadística Básica con R, 2.ª ed. UNED, 2023, temas 3 (probabilidad) y 4 (modelos probabilísticos): texto base de «Estadística básica» (61021045)."
  - "Blitzstein, J. K.; Hwang, J. Introduction to Probability, 2ª ed. CRC Press, 2019 (versión en línea gratuita en https://probabilitybook.net; curso Stat 110 de Harvard)."
  - "Grimmett, G.; Stirzaker, D. Probability and Random Processes, 4ª ed. Oxford University Press, 2020."
  - "Feller, W. An Introduction to Probability Theory and Its Applications, Vol. 1, 3ª ed. Wiley, 1968."
  - "Norris, J. R. Markov Chains. Cambridge University Press, 1997."
ctf_flag: "sha256:245c59e7478edd222ffc5fa0232d4412134826a092d20fa27449cb93f74d4fc1"
hints:
  - "Los tres resultados son exactos: una simulación de Monte Carlo no los da. (a) La distribución de una suma de variables independientes es una convolución; añade los dados de uno en uno. (b) Define un estado por cada prefijo del patrón ya visto y escribe una ecuación lineal para la espera media desde cada estado; un fallo no siempre te devuelve al principio. (c) Calcula la probabilidad de que NO haya coincidencia como un producto."
  - "(a) Programación dinámica sobre la suma, con enteros: 10 pasadas sobre un array de 61 posiciones. (b) Resuelve el sistema con fractions.Fraction o sympy.linsolve, y contrástalo con el patrón HTH, cuya espera media es 10. (c) Usa enteros o fractions.Fraction para decidir la desigualdad sin error de redondeo; valida con N = 365, que da 23."
  - "Feller vol. 1: funciones generatrices para (a), tiempos de recurrencia de patrones para (b). Norris, capítulo 1 (probabilidades y tiempos medios de llegada). Blitzstein y Hwang, capítulos de esperanza y de cadenas de Markov. Documentación: docs.python.org/3/library/fractions.html."
exercises:
  - id: dos-dados
    tier: 1
    prompt: |
      Se lanzan dos dados equilibrados. ¿Cuál es la probabilidad de que la suma sea ${{s1}}$ o ${{s2}}$? Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"s1":6,"s2":8}
        answers: ["sha256:22520d68cf372e30798de084be5fd4fc48b99ea27b38bf68b9f11e97bfac3540"]
      - values: {"s1":2,"s2":12}
        answers: ["sha256:142bd7f8865666d65368717226453ee888b41b2a828d9dfb89dc9b01b0c32887"]
      - values: {"s1":5,"s2":10}
        answers: ["sha256:56ce46b8f40fc32441959275a9535f35696e50a3feaed86bedc2460a397c1b98"]
      - values: {"s1":5,"s2":9}
        answers: ["sha256:185b24d9b65771b0c597f1cb146a9aa5f45091ef88b25cfe570676c6a62e52eb"]
      - values: {"s1":3,"s2":8}
        answers: ["sha256:56ce46b8f40fc32441959275a9535f35696e50a3feaed86bedc2460a397c1b98"]
      - values: {"s1":7,"s2":12}
        answers: ["sha256:56ce46b8f40fc32441959275a9535f35696e50a3feaed86bedc2460a397c1b98"]
  - id: esperanza-del-cuadrado
    tier: 1
    prompt: |
      Sea $X$ el resultado de un dado equilibrado de ${{m}}$ caras (numeradas de $1$ a ${{m}}$). Calcula $E[X^2]$. Respuesta: una fracción irreducible `a/b` (o un entero).
    variants:
      - values: {"m":4}
        answers: ["sha256:2a873d587af23c030e609fa2b3fa0db5a4c2fb433222b497b0d0e0819da2d3a6"]
      - values: {"m":8}
        answers: ["sha256:c34a304b8e1a810ab91d1a34dd9325740928b4ee91751c9f731d8cd11c27db6b"]
      - values: {"m":10}
        answers: ["sha256:666e14b6fd173ad48da79a03c7593bbfc63f2976debe8e5478ccd6eff6a691a1"]
      - values: {"m":12}
        answers: ["sha256:cf282829320a4d7d4746b4adfa3ae9e562f2bc7e9e2205f902660e37f307f4b7"]
      - values: {"m":20}
        answers: ["sha256:780e589143ce3ed1d9612e78bb6e41b068ff983986708d00d7e90b5e1b36860d"]
      - values: {"m":3}
        answers: ["sha256:7c3ec7450c2329d65819804a071635a8d35e976e6d70b4ae148800a8d72854bd"]
  - id: probabilidad-binomial
    tier: 1
    prompt: |
      Se lanza ${{n}}$ veces una moneda equilibrada. ¿Cuál es la probabilidad de obtener **exactamente** ${{k}}$ caras? Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"n":8,"k":3}
        answers: ["sha256:64b5838a9d3c945ff2b05ad5c7ac31415762da5c5fba2aac9004c98be28e7928"]
      - values: {"n":12,"k":6}
        answers: ["sha256:d9715c268383fb8015c8ed8262969a2c47b10f3498c1d2cf05ac96199689e157"]
      - values: {"n":6,"k":2}
        answers: ["sha256:001e59d5744c880c8fe0a37df172da634160a923785d572ad41bb2b2f3f17ba7"]
      - values: {"n":10,"k":5}
        answers: ["sha256:23ba51225d75fc7b486cb8c5fe150be7996c5e54a49ad75d8026912b5dc10e06"]
      - values: {"n":9,"k":4}
        answers: ["sha256:23ba51225d75fc7b486cb8c5fe150be7996c5e54a49ad75d8026912b5dc10e06"]
      - values: {"n":15,"k":7}
        answers: ["sha256:189e7d15a8b948ce8c6c60ac88e4398bca14b1ab261887a34d45f9a802a2d50e"]
  - id: tres-dados-suman-diez
    tier: 1
    prompt: |
      ¿De cuántas formas (de los $6^3$ resultados ordenados) suman ${{s}}$ tres dados distinguibles? Respuesta: un entero.
    variants:
      - values: {"s":9}
        answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
      - values: {"s":11}
        answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
      - values: {"s":12}
        answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
      - values: {"s":8}
        answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
      - values: {"s":13}
        answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
      - values: {"s":6}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: teorema-de-bayes
    tier: 2
    prompt: |
      Una enfermedad afecta al ${{p}}\,\%$ de la población. Una prueba la detecta en el ${{s}}\,\%$ de los enfermos (sensibilidad) y da negativo en el ${{e}}\,\%$ de los sanos (especificidad). Si una persona al azar da **positivo**, ¿qué probabilidad tiene de estar enferma? Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"p":"2","s":"95","e":"90"}
        answers: ["sha256:99e65153e2892bf0f90a3de69f6df882fc844f9ca750d634fb03159dee478300"]
      - values: {"p":"0{,}5","s":"99","e":"99"}
        answers: ["sha256:c2d5ed6819c15083b7e4b929471191ff54b6a56c016a581372d132c9266a49c0"]
      - values: {"p":"10","s":"80","e":"95"}
        answers: ["sha256:00a49fc7de24fdc6aee247f18df9794b3ce79097e371acef95c2ffe276aea715"]
      - values: {"p":"1","s":"99{,}9","e":"98"}
        answers: ["sha256:7fde2b0fe569f8bf976b814c4498d5296ff0307d2c5d9344b8b9cbf0c12ccac2"]
      - values: {"p":"5","s":"90","e":"90"}
        answers: ["sha256:c9a7191876deaeeed23d40978046c5e8f48297a959e847ba5b41bb0f2aae2caf"]
      - values: {"p":"0{,}2","s":"95","e":"99{,}9"}
        answers: ["sha256:dcfde180b6f6130155a85cf8b5c7eaf0d6fa0258963644d5af14bf2ca1405e05"]
  - id: distribucion-de-poisson
    tier: 2
    prompt: |
      A un servidor llegan de media ${{l}}$ peticiones por segundo, según una distribución de Poisson. ¿Cuál es la probabilidad de que en un segundo lleguen **al menos 2**? Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"l":"1"}
        answers: ["sha256:7439ee0beea8db098b083c7593179ea6113e9d4eacb555ce48a043f43eb8c66c"]
      - values: {"l":"3"}
        answers: ["sha256:cf31aefda5fca1d1ca230762079a18b1b897fad422edc7bf83d7588580f9d660"]
      - values: {"l":"0{,}5"}
        answers: ["sha256:bbf3ec97a63ecd17fd7f46cd1844a3e7b309df8d4ad483da1c8a755ce88fadca"]
      - values: {"l":"4"}
        answers: ["sha256:3564d18bf109f1711af516f58cdbcb2187a2dfdc44e78c5ef7d89cd29797e253"]
      - values: {"l":"1{,}5"}
        answers: ["sha256:1b8ac16b765e645765e49d4c41015100ba2052334d028d5633c6ec6f304f718c"]
      - values: {"l":"2{,}5"}
        answers: ["sha256:c5452aac71481d922691fb354f4d7e485f1e56d2322e99d4dee0e1c27fc36180"]
  - id: distribucion-geometrica
    tier: 2
    prompt: |
      Se lanza un dado equilibrado de ${{m}}$ caras hasta que sale por primera vez la cara $1$. Sea $N$ el número de lanzamientos. ¿Cuánto valen $E[N]$ y $\operatorname{Var}(N)$? Respuesta: los dos números separados por `;`.
    variants:
      - values: {"m":4}
        answers: ["sha256:deb38c4ba4198f89c6de704e9525d918c329df7f0abd476986d379b372d7a1c3"]
      - values: {"m":8}
        answers: ["sha256:876f9c998949b0ac6f332f5474a89864684bc54babb014a8b57eb78d3872652d"]
      - values: {"m":10}
        answers: ["sha256:6ada7d8ce15d22301fc10cbc79219fbba45b2b60de648f612a1326034d711d00"]
      - values: {"m":12}
        answers: ["sha256:ef4e840658c8ea1ac3a288af81a8c3f2b366506150d0870b43f30ad21fd8c80c"]
      - values: {"m":20}
        answers: ["sha256:cc67978ac2b3387475ea86dd619a9af5fefd2862b0a3c737a38ec9c2c26d17a0"]
      - values: {"m":2}
        answers: ["sha256:5705c50ceb73f721ce58fb003ec62d0c0c4e40f93298505f7dc6b7f3e475cc84"]
  - id: falta-de-memoria
    tier: 2
    prompt: |
      La vida de una bombilla es exponencial con media ${{mu}}$ horas. Si ya ha durado ${{a}}$ horas, ¿qué probabilidad tiene de durar **más de ${{b}}$** en total? Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"mu":500,"a":200,"b":600}
        answers: ["sha256:f39bcdbd25d0802ccdf57e9a644f3f2c9a3b95839514937d683b47a5dc545998"]
      - values: {"mu":2000,"a":1000,"b":2500}
        answers: ["sha256:9c631eab93e20b8967e1ef42c886ee8142782174da520706c2e5bc32aa9259f9"]
      - values: {"mu":100,"a":50,"b":80}
        answers: ["sha256:96d3de0d87aca83675103843f2054014de05043d92cdab29dad402c053dce9b9"]
      - values: {"mu":1000,"a":300,"b":1300}
        answers: ["sha256:abb6d135ea32394c0d69996d2c7c8c9facbba4b2cf7ce8b4bb3070fa4283e97b"]
      - values: {"mu":800,"a":800,"b":1000}
        answers: ["sha256:4cfdb2c5123ef1408b90cf156e10e81aadff00101b2d3b93c3048cc1fc1b04df"]
      - values: {"mu":50,"a":10,"b":110}
        answers: ["sha256:81a66bf490ca518ae32cb547d723bf15b506340bd7061ab99822d52550d9f043"]
  - id: normal-estandar
    tier: 2
    prompt: |
      Sea $Z \sim N(0, 1)$. Calcula $P({{a}} \le Z \le {{b}})$. Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"a":"-2","b":"1"}
        answers: ["sha256:7b659f7ef2d1a38aa839dee1a02dcc093fe612351c6c2c73eec866cac4222b0a"]
      - values: {"a":"0","b":"1{,}5"}
        answers: ["sha256:025cceec9ada145b20e533fe60e37284a05ec7659f12f3c7452f1510e80acc82"]
      - values: {"a":"-1{,}5","b":"1{,}5"}
        answers: ["sha256:78e5ceee1db60f62288c0718c9d04be61bf5c00dbc2982581adfe1fd47b22a28"]
      - values: {"a":"-0{,}5","b":"2"}
        answers: ["sha256:431dc5c21e628cc83f47985438982af80e1767651cd9b530b18272327451ba6f"]
      - values: {"a":"1","b":"3"}
        answers: ["sha256:43c9d08d7b2bef4c71c34bfff58e943309de93ef1de40c5d12f95a882239937a"]
      - values: {"a":"-3","b":"0{,}5"}
        answers: ["sha256:d5e279f4654c8cd5eb65e431c759c60894c8fda006fc50fdc5443d8b97eabb20"]
  - id: valores-distintos-en-seis-dados
    tier: 2
    prompt: |
      Se lanzan ${{n}}$ dados de ${{m}}$ caras. ¿Cuál es el **número esperado de valores distintos** que aparecen? (Usa variables indicadoras y la linealidad de la esperanza.) Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"n":4,"m":6}
        answers: ["sha256:a5454631ca681ab2a6b0def91ce5a80c015e3c9b466eaa5e751f9b4800d15ec9"]
      - values: {"n":3,"m":6}
        answers: ["sha256:d36b9022868bf40be0664aec8575b0f1f387fd593a18a3478a3bdfe2fc52f1ea"]
      - values: {"n":5,"m":4}
        answers: ["sha256:ff24ba97ab52ef52fbab6f1e9bfafb6ee11494366ac41d3e277816fe6ade6568"]
      - values: {"n":8,"m":6}
        answers: ["sha256:634f1d4144c0c87be7affb65f144217e818a4593a52b480c6166a01c4fd8eb46"]
      - values: {"n":2,"m":10}
        answers: ["sha256:2e67235582e93478edf6d72b72fff7abbd8017d6671024ccde568e8412972f46"]
      - values: {"n":6,"m":8}
        answers: ["sha256:3e929971e4b3f4cca86bdbef6d6874bbd72effab1010fbd24a5b1d9908ca06a2"]
  - id: covarianza
    tier: 2
    prompt: |
      Sea $X$ un dado equilibrado de ${{m}}$ caras e $Y = {{Y}}$. Calcula $\operatorname{Cov}(X, Y)$. Respuesta: una fracción irreducible `a/b` (o un entero).
    variants:
      - values: {"m":6,"Y":"2X + 1"}
        answers: ["sha256:547f5d607574abcb08602ba0afa3f3e8b6e15eb28e8b044dacf40ff00c220169"]
      - values: {"m":4,"Y":"-X + 5"}
        answers: ["sha256:46ce96c534e969ea4b7a9cdb05f5d2dd70e5a2b1ec9cf0c5b41c8a0692928e6b"]
      - values: {"m":8,"Y":"3X"}
        answers: ["sha256:395ddebbaa930e1d732a094187ac5dfabd6a1015f24cbb7e5da11a102cf94cbc"]
      - values: {"m":6,"Y":"-2X + 10"}
        answers: ["sha256:88fd063e48b037f6f4637e304315f76993a055115c9cf7de8b2fe9921f8df7ea"]
      - values: {"m":10,"Y":"X - 3"}
        answers: ["sha256:5d463f99733ce05c7f0cc583fc5996732d5bc999215456ad04551221635b3eee"]
      - values: {"m":12,"Y":"-X + 13"}
        answers: ["sha256:db7524040a27c5f6df240574253b14d5fcc49b431b6ad5894f43197fab5d3085"]
  - id: desigualdad-de-chebyshev
    tier: 2
    prompt: |
      Una variable tiene media ${{mu}}$ y desviación típica ${{s}}$, sin más información sobre su distribución. ¿Qué cota superior da la desigualdad de Chebyshev para $P(\lvert X - {{mu}}\rvert \ge {{a}})$? Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"mu":100,"s":4,"a":10}
        answers: ["sha256:170f63c7b49fa44e1117f2e2f71d134223020e8517a165f55e041c68a626dd3b"]
      - values: {"mu":20,"s":3,"a":8}
        answers: ["sha256:7135e421b6a89efb49234fb22bf9a8ecb6f8e3392b03497ba9424b458f29d4f1"]
      - values: {"mu":0,"s":2,"a":5}
        answers: ["sha256:170f63c7b49fa44e1117f2e2f71d134223020e8517a165f55e041c68a626dd3b"]
      - values: {"mu":70,"s":6,"a":15}
        answers: ["sha256:170f63c7b49fa44e1117f2e2f71d134223020e8517a165f55e041c68a626dd3b"]
      - values: {"mu":10,"s":1,"a":4}
        answers: ["sha256:ece2d97a690303566cb7ba329f7bf3e25baedb393c113372798d4230af8de720"]
      - values: {"mu":500,"s":25,"a":60}
        answers: ["sha256:2a5cb1e9b5869516c632f75ab4344f9c234487f781b18ff0e77b5d7a704cbea2"]
  - id: binomial-exacta-y-normal
    tier: 3
    prompt: |
      Se lanza ${{n}}$ veces una moneda equilibrada. Calcula **exactamente** $P(X \ge {{k}})$, donde $X$ es el número de caras. (Compáralo después con la aproximación normal con corrección de continuidad.) Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"n":50,"k":30}
        answers: ["sha256:f2764be85eb114ca78206b8fe9628bbed8bc28bc4f23a2fa821b50d3dfd4d36f"]
      - values: {"n":200,"k":110}
        answers: ["sha256:f5ecf34b11ce4c3f37691fb51fdc601e42957f2f0ef8bb604ffa3d9692f47a8d"]
      - values: {"n":80,"k":48}
        answers: ["sha256:4f3dfbe5c49701ed43b11c1b6b23544bf99cc7aa331a80cda83275aa104f13b5"]
      - values: {"n":120,"k":70}
        answers: ["sha256:99023ceb9006e7d084622b73e8fa570c2a244d8b3a5720056a3c297b0d3c16dc"]
      - values: {"n":60,"k":40}
        answers: ["sha256:f2b1a1d5c13494d60b8925348adc00d5aaf2c3fa399d6114b71dbe33a9c9fa32"]
      - values: {"n":150,"k":85}
        answers: ["sha256:eb8b3b7a8bd6d43613c2e2309c94d73be57ea873d49f0c9f46e857d45467e9a6"]
  - id: tiempo-de-espera-de-un-patron
    tier: 3
    prompt: |
      Se lanza una moneda equilibrada hasta que aparece por primera vez la secuencia **{{p}}** (H = cara, T = cruz). ¿Cuál es el número esperado de lanzamientos? Respuesta: un entero.
    variants:
      - values: {"p":"HTHT"}
        answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
      - values: {"p":"HTTH"}
        answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
      - values: {"p":"HHTT"}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
      - values: {"p":"HTHH"}
        answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
      - values: {"p":"TTHH"}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
      - values: {"p":"HHTHT"}
        answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: ruina-del-jugador
    tier: 3
    prompt: |
      Un jugador empieza con ${{i}}$ €, apuesta $1$ € cada vez, gana con probabilidad ${{p}}$, y se retira al llegar a ${{N}}$ € o a $0$ €. ¿Qué probabilidad tiene de llegar a ${{N}}$ €? Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"p":"0{,}45","i":5,"N":10}
        answers: ["sha256:8e5817ea190c34cffd9c714e3eca0242a916a0a73b6dc496a065ce57ec32ef7f"]
      - values: {"p":"0{,}4","i":2,"N":6}
        answers: ["sha256:b4ec5c65fc3fe266f3b0df9a8c051c4c31abb1049b9d07324dd99168e4ca8fb5"]
      - values: {"p":"0{,}48","i":10,"N":20}
        answers: ["sha256:2be404aa107b8fc1f750857f609d12e6839443cc1c0ce367eb0aa0ca3a7a7ac6"]
      - values: {"p":"0{,}3","i":4,"N":8}
        answers: ["sha256:5c7d5c5417611c76c65006eee4949afd9ccdf8fdf41b6b29cf9f59cd927fe0cc"]
      - values: {"p":"0{,}55","i":3,"N":10}
        answers: ["sha256:72b080d885b57b75f3919dc5607148dacc47037234be0d9f90f40397591c75b1"]
      - values: {"p":"0{,}49","i":50,"N":100}
        answers: ["sha256:6ef851cffc2e1a1042879d73005279da744b4c810012405ef263bd9c22d11cea"]
  - id: paradoja-del-cumpleanos
    tier: 3
    prompt: |
      En un grupo de ${{n}}$ personas (cumpleaños independientes y uniformes entre ${{N}}$ días), ¿cuál es la probabilidad de que **al menos dos** cumplan años el mismo día? Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"n":23,"N":365}
        answers: ["sha256:30cc8cb085485ace7dff4458470ace2b5d2fdb4420fa95fb5f569eac6a955971"]
      - values: {"n":40,"N":365}
        answers: ["sha256:f70695838c6f45eafa8b29c3ef16ae89df8dd04ae3ee4717bb9841d3283d31d4"]
      - values: {"n":10,"N":365}
        answers: ["sha256:9dbb3f62f5e6e3f99584a0690ee7bd499c1f8620ae761730b5c9023eb07c2cbf"]
      - values: {"n":50,"N":365}
        answers: ["sha256:8e7257093c6f1a900cebce66ff4962282af00c06e3cd9d4cc2aaa93f52f809bd"]
      - values: {"n":30,"N":1000}
        answers: ["sha256:0d8a6703aef550ec73d3c02303497b118eaea6ea4bddc5cdad0d66d6622f7030"]
      - values: {"n":5,"N":52}
        answers: ["sha256:6254750b8c56f3a1f1623d38e955cdfeec2adb8e4103dfec55d2b00f27d5933f"]
  - id: teorema-de-la-votacion
    tier: 2
    prompt: |
      En una elección, A obtiene ${{a}}$ votos y B obtiene ${{b}}$, y las papeletas se cuentan en un orden aleatorio. ¿Qué
      probabilidad hay de que A vaya **siempre estrictamente por delante** durante todo el recuento? Respuesta: fracción «p/q».
    variants:
      - values: {"a":5,"b":3}
        answers: ["sha256:f70b94aeb67de2a5eb4bd8c2ea85128f13776cb545a661abe422b378a6cf3099"]
      - values: {"a":4,"b":1}
        answers: ["sha256:e8692ca200b54ddada768e71960a0511416137a374776dcfd1aa8305d0a96fa3"]
      - values: {"a":7,"b":2}
        answers: ["sha256:6523f09afbc5ba27530a3abe3ff0f5db40b2b859346f4425d64edd6d596c6eb5"]
      - values: {"a":6,"b":4}
        answers: ["sha256:bd82a28b1f088b3a186737712fb16fe7323aecb3abc234b38c9534349aaa1757"]
      - values: {"a":9,"b":2}
        answers: ["sha256:6bbc2e197b33c9264fb156ad7d312ff230cf23ba8b4b8ac23f404798f4e0496d"]
      - values: {"a":8,"b":5}
        answers: ["sha256:0a74839d7549e1b2fcbee535afb85966be40f0aded8e4a76168cd0d6c45a52d4"]
  - id: hipergeometrica
    tier: 2
    prompt: |
      Una caja tiene ${{N}}$ piezas, ${{K}}$ de ellas defectuosas. Se sacan ${{n}}$ al azar **sin reemplazamiento**. ¿Qué probabilidad
      hay de que exactamente ${{k}}$ sean defectuosas? Respuesta: fracción irreducible «p/q».
    variants:
      - values: {"N":20,"K":8,"n":5,"k":2}
        answers: ["sha256:3eb9fdc6b9655a0bf737cdfd1bc2a5c6dfd69f09745c1914e0eed2668e58e1af"]
      - values: {"N":15,"K":5,"n":4,"k":1}
        answers: ["sha256:8e3c6749bb960bf4ac1aeed4279f0597f6d17e8c15493f326569e96225661ec6"]
      - values: {"N":30,"K":10,"n":6,"k":3}
        answers: ["sha256:a5ef8ba9a1ef7dd8399d7fccfd7550ac005b7045c2b6eb69c83d654803b3b702"]
      - values: {"N":12,"K":4,"n":3,"k":0}
        answers: ["sha256:9a0f88c366a23e163fd2502b9f50e6fde89c9b867c13aa7559ff402d49edb36b"]
      - values: {"N":25,"K":10,"n":5,"k":2}
        answers: ["sha256:e2707b320bf6331c54c9946015eb9715938125db72381524d1118a50302e35aa"]
      - values: {"N":40,"K":15,"n":8,"k":4}
        answers: ["sha256:7ced9bf69b8683a8866a5e77da810eaafb01ddbdd721b3c980bf3456508655f6"]
  - id: r-incompatibles-independientes
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo son independientes dos sucesos **incompatibles** $A$ y $B$?
    options:
      - |
        Siempre
      - |
        A veces
      - |
        Nunca, salvo que alguno tenga probabilidad $0$
      - |
        Solo si $P(A) = P(B)$
    answers: ["sha256:5baf58a78b59b6afd3585105ce98b6a491feaf5b3c6a800cb84cf09ffc6e9d7c"]
  - id: r-var-suma
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      $X$ e $Y$ son independientes con $\operatorname{Var}(X) = 9$ y $\operatorname{Var}(Y) = 16$. ¿Cuánto vale $\operatorname{Var}(X + Y)$?
    answers: ["sha256:140049bfd4603c3c22939da292c2f3a9933265ce96f6c2060fa6e28275d0434b","sha256:880ec8aca70ccbf7318a3339d25916a5a51b7e3bf673b9eff86a76584fbbb5cd","sha256:ccf3e55b59cadd0d26d529c9b1c9b17d1432fcc2539043abbce146c0a8cac77e"]
  - id: r-poisson-media
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué ocurre con la media y la varianza de una Poisson$(\lambda)$?
    options:
      - |
        La media y la varianza valen $\lambda$
      - |
        La media vale $\lambda$ y la varianza $\lambda^2$
      - |
        La media vale $1/\lambda$
      - |
        No tiene varianza
    answers: ["sha256:69e623fee0da0f263a2f7913e0fa831a4cca8c7dc9c36b224f67da999ac3975c"]
  - id: r-tcl
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué afirma, en esencia, el teorema central del límite?
    options:
      - |
        Que toda variable aleatoria es normal
      - |
        Que la media de muchas variables independientes es aproximadamente normal
      - |
        Que la media muestral es exactamente la media
      - |
        Que la varianza de la media crece con $n$
    answers: ["sha256:39dac8d2542e3a3668cf664aa906c15df89e6b87a032b56b180abe02a7fc15ce"]
  - id: r-desviacion-media
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una variable tiene desviación típica $5$. ¿Cuál es la desviación típica de la media de $100$ observaciones independientes?
    answers: ["sha256:5380632603d920215995deabe1ec08c44986d00cef24171b2646abcf88d7d983","sha256:5821aa50709900e8876c7a1e0909516a9b087ab75a047673711f0350e139965b","sha256:4abdfc07a99aad21332b6f05574c81c63fab1ab728ec147c3e6cf80f706a5a32"]
  - id: r-falacia-jugador
    tier: 1
    type: opcion
    review: true
    prompt: |
      Una moneda equilibrada ha salido cara $8$ veces seguidas. ¿Qué probabilidad hay de que la siguiente sea cruz?
    options:
      - |
        Más de $\frac12$, porque «toca» cruz
      - |
        Menos de $\frac12$
      - |
        Depende de la racha
      - |
        Exactamente $\frac12$
    answers: ["sha256:5759eac6163b66743c9d55e301975f54c825da4a3ac2c7669f1a53a864fa76f4"]
  - id: r-votacion-empate
    tier: 3
    type: numero
    review: true
    sig: 6
    prompt: |
      Si A y B obtienen el **mismo** número de votos, ¿qué probabilidad hay de que A vaya siempre estrictamente por delante en el recuento?
    answers: ["sha256:aaff4762e455e7c3946faeed95f4794984eb461f3835bd09d788f0f4d24b0a33","sha256:37b2f8e805c23d7d65323d752fc9dd34b68c1ae4803a9225b97f563949d29f3f","sha256:3d6e71fdb76907aa079dae159d9dcf4250c5f75d713e85c3dc271ec41471892e"]
---

# Probabilidad: axiomas, condicionamiento, variables aleatorias, teoremas límite y cadenas de Markov

[[mat-combinatoria-probabilidad-basica]] contó casos igualmente probables. Este nodo construye la teoría completa: los axiomas de
Kolmogorov, la probabilidad condicionada y el teorema de Bayes, las variables aleatorias discretas y continuas con sus distribuciones
principales, la esperanza y la varianza, las desigualdades y los **teoremas límite** que justifican la estadística, y las cadenas de
Markov. Es el lenguaje de la estadística ([[mat-estadistica-inferencia]] la usa en cada línea), del aprendizaje automático, de la física
estadística, de la criptografía y de la teoría de colas.

## Objetivos

Al terminar sabrás:

1. Deducir propiedades de los axiomas y calcular probabilidades condicionadas con la regla del producto, la probabilidad total y **Bayes**.
2. Trabajar con las distribuciones Bernoulli, binomial, geométrica, Poisson, uniforme, exponencial y normal, conocer su media y su
   varianza y cuándo usar cada una.
3. Calcular esperanzas con la **linealidad** y variables indicadoras, varianzas, covarianzas y correlaciones.
4. Aplicar las desigualdades de Markov y Chebyshev, la ley de los grandes números y el teorema central del límite.
5. Calcular tiempos medios de llegada en cadenas de Markov resolviendo un sistema lineal.
6. Comprobar un resultado de probabilidad por enumeración exacta o por simulación.

## Qué debes dominar antes

[[mat-combinatoria-probabilidad-basica]] (combinatoria, probabilidad de Laplace) y [[mat-calculo-multivariable]] (integrales dobles; la
integral de Gauss $\int e^{-x^2}dx = \sqrt\pi$).

> [!question] Test de entrada
> 1. ¿De cuántas formas se eligen 3 elementos de 10?
> 2. Calcula $\sum_{k=0}^{\infty} \frac{2^k}{k!}$.
> 3. ¿Cuánto vale $\int_0^\infty \lambda e^{-\lambda t}\,dt$?
>
> Respuestas: $\binom{10}{3} = 120$; $e^2$; $1$.

## 1. Para qué sirve

- **Estadística y ciencia de datos**: todo intervalo de confianza o contraste se basa en el teorema central del límite.
- **Aprendizaje automático**: los modelos son distribuciones; entrenar es maximizar una verosimilitud ([[ia-aprendizaje-estadistico]]).
- **Medicina y decisiones**: interpretar una prueba diagnóstica es aplicar Bayes; olvidarlo lleva a errores graves (ejemplo 2).
- **Sistemas e ingeniería**: tiempos de llegada a un servidor (Poisson y exponencial), fiabilidad de componentes, cachés y colisiones
  de funciones hash (sección 9), cadenas de Markov en algoritmos de búsqueda y en la física estadística.

## 2. Espacios de probabilidad

> [!practico]
> Para hablar de azar con precisión hacen falta tres cosas: la lista de todo lo que puede pasar, qué preguntas («sucesos»)
> se pueden hacer y un número entre $0$ y $1$ para cada pregunta. Con solo tres reglas (nada es negativo, lo seguro vale $1$, y
> las probabilidades de cosas incompatibles se suman) se deduce todo lo demás, desde «la probabilidad de que no pase es $1$
> menos la de que pase» hasta los teoremas más finos.


Un **espacio de probabilidad** consta del conjunto $\Omega$ de resultados posibles, de una familia de **sucesos** (subconjuntos de $\Omega$)
y de una **probabilidad** $P$ que cumple los axiomas de Kolmogorov:

1. $P(A) \ge 0$ para todo suceso $A$;
2. $P(\Omega) = 1$;
3. si $A_1, A_2, \dots$ son disjuntos dos a dos, $P\bigl(\bigcup_i A_i\bigr) = \sum_i P(A_i)$.

Todo lo demás se **demuestra**: $P(A^c) = 1 - P(A)$ (pues $A$ y $A^c$ son disjuntos y su unión es $\Omega$); $P(\varnothing) = 0$;
si $A \subseteq B$, $P(A) \le P(B)$; $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, y en general la inclusión-exclusión de
[[mat-logica-demostraciones]]. Cuando $\Omega$ es finito y todos los resultados son igual de probables, $P(A) = \lvert A\rvert/\lvert\Omega\rvert$:
la regla de Laplace es un caso particular.

## 3. Probabilidad condicionada, independencia y Bayes

> [!practico]
> Saber algo cambia las probabilidades. Si sabes que ha llovido, es más probable que el suelo esté mojado. Bayes da la
> vuelta a la pregunta: si el suelo está mojado, ¿qué probabilidad hay de que haya llovido? La respuesta depende mucho de lo
> frecuente que sea la lluvia, y olvidarlo produce errores serios, como creer que un positivo en una prueba casi seguro es
> enfermedad cuando la enfermedad es rara.


La probabilidad de $A$ **sabiendo** que ha ocurrido $B$ (con $P(B) > 0$) es

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} .
$$

De ahí la **regla del producto** $P(A \cap B) = P(B)\,P(A \mid B)$ y, si $B_1, \dots, B_n$ parten $\Omega$, la **probabilidad total**
$P(A) = \sum_i P(B_i)\,P(A \mid B_i)$. Combinándolas se obtiene el **teorema de Bayes**:

$$
P(B_j \mid A) = \frac{P(B_j)\,P(A \mid B_j)}{\sum_i P(B_i)\,P(A \mid B_i)} .
$$

$A$ y $B$ son **independientes** si $P(A \cap B) = P(A)P(B)$ (saber uno no cambia la probabilidad del otro). Para más de dos sucesos
hay que exigirlo para **todas** las subfamilias: tres sucesos pueden ser independientes dos a dos sin serlo los tres juntos.

**Ejemplo resuelto 1.** Dos dados. $A$ = «la suma es 8», $B$ = «el primero es par». $P(A) = 5/36$; $P(A \mid B)$: con el primero par
($18$ casos), suman 8 los pares $(2,6), (4,4), (6,2)$: $3/18 = 1/6 \ne 5/36$. No son independientes.

**Ejemplo resuelto 2 (la falacia del fiscal).** Una prueba de una enfermedad rara (prevalencia del $0{,}1\,\%$) acierta el $99\,\%$
de las veces en enfermos y en sanos. Si alguien da positivo,
$P(E \mid +) = \frac{0{,}001\cdot0{,}99}{0{,}001\cdot0{,}99 + 0{,}999\cdot0{,}01} \approx 0{,}09$: **solo un 9 %**. De cada 100 000 personas, 100 están
enfermas (99 positivos verdaderos) y 99 900 sanas (999 positivos falsos). Confundir $P(+ \mid E)$ con $P(E \mid +)$ es un error común en
medicina, en tribunales y en seguridad (alertas de un sistema de detección de intrusiones).

## 4. Variables aleatorias discretas

> [!practico]
> Una variable aleatoria es un número que sale del azar: la suma de dos dados, cuántos clientes llegan en una hora. Su
> **esperanza** es el valor medio a largo plazo y su **varianza**, cuánto se aparta de ese valor de una vez a otra. Muchas
> situaciones distintas siguen unos pocos patrones con nombre (binomial, geométrica, Poisson), y reconocerlos ahorra
> calcular desde cero.


Una **variable aleatoria** $X$ asigna un número a cada resultado. Si toma valores aislados, su **función de masa** es $p(x) = P(X = x)$.
La **esperanza** es la media ponderada, $E[X] = \sum_x x\,p(x)$, y la **varianza** mide la dispersión:

$$
\operatorname{Var}(X) = E\bigl[(X - E[X])^2\bigr] = E[X^2] - E[X]^2, \qquad \sigma = \sqrt{\operatorname{Var}(X)} .
$$

**Linealidad de la esperanza.** $E[aX + bY] = aE[X] + bE[Y]$ **siempre**, aunque $X$ e $Y$ dependan una de otra. Combinada con
variables **indicadoras** ($I_A = 1$ si ocurre $A$, $0$ si no, y $E[I_A] = P(A)$) resuelve problemas que parecen difíciles.

**Ejemplo resuelto 3.** $n$ cartas con su nombre se reparten al azar entre $n$ personas. ¿Cuántas reciben la suya, de media? Sea $I_k$ la
indicadora de que la persona $k$ recibe la suya: $P = 1/n$. Entonces $E[\text{aciertos}] = \sum_k E[I_k] = n\cdot\frac1n = 1$, para cualquier $n$.
Sin linealidad habría que conocer la distribución completa (los desarreglos de [[mat-matematica-discreta]]).

**Distribuciones discretas principales:**

| Distribución | Modelo | $P(X = k)$ | $E[X]$ | $\operatorname{Var}(X)$ |
|---|---|---|:---:|:---:|
| Bernoulli$(p)$ | un ensayo con éxito $p$ | $p$ si $k=1$; $1-p$ si $k=0$ | $p$ | $p(1-p)$ |
| Binomial$(n, p)$ | éxitos en $n$ ensayos independientes | $\binom nk p^k(1-p)^{n-k}$ | $np$ | $np(1-p)$ |
| Geométrica$(p)$ | ensayos hasta el primer éxito | $(1-p)^{k-1}p$, $k \ge 1$ | $1/p$ | $(1-p)/p^2$ |
| Poisson$(\lambda)$ | sucesos raros en un intervalo | $e^{-\lambda}\lambda^k/k!$ | $\lambda$ | $\lambda$ |

**Hipergeométrica** (extracciones **sin** reemplazamiento): de una urna con $K$ bolas blancas entre $N$ se sacan $n$; el número de
blancas cumple $P(X = k) = \binom Kk\binom{N - K}{n - k}\big/\binom Nn$, con media $n\frac KN$ (la misma que la binomial) y varianza
algo menor. **Multinomial** (pruebas repetidas con más de dos resultados, de probabilidades $p_1, \dots, p_r$): la probabilidad de
obtener $k_1, \dots, k_r$ veces cada resultado en $n$ pruebas es $\frac{n!}{k_1!\cdots k_r!}p_1^{k_1}\cdots p_r^{k_r}$.

La Poisson es el límite de la binomial cuando $n \to \infty$ y $p \to 0$ con $np = \lambda$: llamadas a una centralita, errores en un disco,
desintegraciones en un segundo.

## 5. Variables aleatorias continuas

> [!practico]
> Algunas cantidades pueden tomar cualquier valor en un intervalo: una estatura, un tiempo de espera. Entonces no tiene
> sentido la probabilidad de un valor exacto ($1{,}750000\ldots$ m), sino la de un intervalo, que es el área bajo una curva
> (la densidad). La campana de Gauss es la curva más famosa, y la exponencial describe esperas «sin memoria»: haber esperado
> mucho no acerca el autobús.


Una variable **continua** tiene una **densidad** $f \ge 0$ con $\int f = 1$, y $P(a \le X \le b) = \int_a^b f(x)\,dx$ (la probabilidad de un
valor concreto es 0). La **función de distribución** es $F(x) = P(X \le x)$, y $F' = f$. Esperanza: $E[X] = \int x f(x)\,dx$; y
$E[g(X)] = \int g(x)f(x)\,dx$.

- **Uniforme** en $[a, b]$: $f = \frac{1}{b - a}$; media $\frac{a + b}{2}$, varianza $\frac{(b - a)^2}{12}$.
- **Exponencial**$(\lambda)$: $f(t) = \lambda e^{-\lambda t}$ para $t \ge 0$; $P(T > t) = e^{-\lambda t}$; media $1/\lambda$. Es la única continua **sin
  memoria**: $P(T > s + t \mid T > s) = P(T > t)$. Modela tiempos entre llegadas de un proceso de Poisson y vidas de componentes que no
  envejecen.
- **Normal** $N(\mu, \sigma^2)$: $f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-(x - \mu)^2/(2\sigma^2)}$ (la constante sale de la integral de Gauss). Si
  $X \sim N(\mu, \sigma^2)$, $Z = (X - \mu)/\sigma \sim N(0, 1)$ (**tipificar**), y $P(X \le x) = \Phi\bigl(\frac{x - \mu}{\sigma}\bigr)$, con $\Phi$ la
  distribución de la normal estándar. Dentro de $\mu \pm \sigma$, $\mu \pm 2\sigma$ y $\mu \pm 3\sigma$ cae aproximadamente el $68\,\%$, el
  $95\,\%$ y el $99{,}7\,\%$.

## 6. Varias variables

> [!practico]
> Con dos cantidades a la vez (altura y peso, temperatura y consumo) importa cómo se mueven juntas. La **covarianza** dice si
> tienden a subir y bajar a la vez; la independencia, que una no dice nada de la otra. Y una consecuencia muy práctica: al sumar
> cantidades independientes, sus dispersiones se compensan en parte.


La distribución **conjunta** de $(X, Y)$ da $P(X = x, Y = y)$ (o una densidad $f(x, y)$); las **marginales** se obtienen sumando o
integrando la otra variable. $X$ e $Y$ son independientes si la conjunta es el producto de las marginales; entonces
$E[XY] = E[X]E[Y]$.

La **covarianza** $\operatorname{Cov}(X, Y) = E[XY] - E[X]E[Y]$ mide la relación lineal, y la **correlación**
$\rho = \frac{\operatorname{Cov}(X, Y)}{\sigma_X\sigma_Y} \in [-1, 1]$ la normaliza. Independencia implica covarianza nula, pero **no al revés**
($X$ uniforme en $\{-1, 0, 1\}$ e $Y = X^2$ tienen covarianza $0$ y dependen totalmente). Para la suma,

$$
\operatorname{Var}(X + Y) = \operatorname{Var}(X) + \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y),
$$

y si son independientes las varianzas **se suman**: la desviación típica de la suma de $n$ variables independientes iguales crece como
$\sqrt n$, no como $n$ (la diversificación de una cartera de inversión).

## 7. Desigualdades y teoremas límite

> [!practico]
> Cuantas más veces repites un experimento, más se parece la media a lo esperado (ley de los grandes números): por eso un
> casino gana siempre a la larga. Y además, el error que queda tiene casi siempre forma de campana de Gauss, sea cual sea el
> experimento (teorema central del límite): por eso la normal aparece en todas partes.


> [!formal] Con rigor: las desigualdades de Markov y Chebyshev
> **Markov.** Si $X \ge 0$, $P(X \ge a) \le \frac{E[X]}{a}$. *Demostración.* $a\,I_{X \ge a} \le X$; tomando esperanzas, $a\,P(X \ge a) \le E[X]$. $\blacksquare$
>
> **Chebyshev.** $P(\lvert X - \mu\rvert \ge a) \le \frac{\sigma^2}{a^2}$. *Demostración.* Markov aplicada a $(X - \mu)^2 \ge a^2$. $\blacksquare$ Vale para
> **cualquier** distribución: a $3\sigma$ de la media queda como mucho $1/9$ de la probabilidad (para la normal, solo un $0{,}3\,\%$).

**Ley (débil) de los grandes números.** Si $X_1, X_2, \dots$ son independientes con media $\mu$ y varianza $\sigma^2$, la media muestral
$\bar X_n = \frac1n\sum X_i$ cumple, para todo $\varepsilon > 0$,

$$
P\bigl(\lvert\bar X_n - \mu\rvert \ge \varepsilon\bigr) \le \frac{\sigma^2}{n\varepsilon^2} \xrightarrow[n\to\infty]{} 0 .
$$

> [!formal] Con rigor: demostración de la ley débil
> *Demostración.* $E[\bar X_n] = \mu$ y $\operatorname{Var}(\bar X_n) = \sigma^2/n$ (varianzas de independientes); se aplica Chebyshev. $\blacksquare$ Es lo
> que hace funcionar los seguros, los casinos y las simulaciones de Monte Carlo.

**Teorema central del límite.** Con las mismas hipótesis, la media tipificada tiende a una normal estándar:

$$
\frac{\bar X_n - \mu}{\sigma/\sqrt n} \xrightarrow{\ d\ } N(0, 1) ,
$$

es decir, $P\bigl(\frac{\bar X_n - \mu}{\sigma/\sqrt n} \le z\bigr) \to \Phi(z)$, **sea cual sea** la distribución de partida. Por eso la normal está
en todas partes: los errores de medida, las alturas o las notas son sumas de muchas causas pequeñas. Como aproximación de una
binomial$(n, p)$ (suma de Bernoulli) se usa $N(np, np(1-p))$ con **corrección de continuidad**: $P(X \ge k) \approx 1 - \Phi\bigl(\frac{k - 0{,}5 - np}{\sqrt{np(1-p)}}\bigr)$.

## 8. Cadenas de Markov y tiempos de espera

> [!practico]
> Una cadena de Markov es un juego de tablero en el que la casilla siguiente solo depende de la casilla actual, no de cómo
> llegaste: el tiempo de mañana según el de hoy, la página web siguiente según la actual. Con ella se calculan esperas medias
> (¿cuántas tiradas hasta salir de la cárcel?) resolviendo un sistema de ecuaciones.


Una **cadena de Markov** es una sucesión $X_0, X_1, \dots$ en la que el futuro depende del pasado solo a través del presente:
$P(X_{n+1} = j \mid X_n = i, \dots) = p_{ij}$. Las probabilidades de transición forman una matriz estocástica $P$ (filas que suman 1); la
distribución tras $n$ pasos es $\pi_0P^n$, y una distribución **estacionaria** cumple $\pi P = \pi$ (el PageRank de Google es la estacionaria
de un paseo aleatorio por la web).

**Teorema (tiempo medio de llegada).** Sea $h_i$ el número esperado de pasos hasta alcanzar por primera vez un conjunto de estados $A$
partiendo de $i$. Entonces $h_i = 0$ para $i \in A$ y

$$
h_i = 1 + \sum_{j} p_{ij}\, h_j \qquad (i \notin A).
$$

> [!formal] Con rigor: por qué funciona la ecuación del primer paso
> *Demostración.* Se condiciona sobre el primer paso y se usa la propiedad de Markov. $\blacksquare$ Es un sistema lineal, resoluble con la
> eliminación exacta de [[mat-algebra-lineal-1]].

**Ejemplo resuelto 4: esperar el patrón HTH al lanzar una moneda.** Los estados son el prefijo más largo del patrón que coincide con el
final de lo lanzado: $\varnothing$, H, HT, HTH. Desde HT, una cruz devuelve a $\varnothing$, pero desde H una cara **mantiene** el estado H.
Las ecuaciones $h_\varnothing = 1 + \tfrac12 h_H + \tfrac12 h_\varnothing$, $h_H = 1 + \tfrac12 h_H + \tfrac12 h_{HT}$, $h_{HT} = 1 + \tfrac12\cdot0 + \tfrac12 h_\varnothing$
dan $h_\varnothing = 10$, mientras que para HHH es $14$ y para HTT es $8$: patrones igual de probables tienen esperas distintas, porque se
solapan consigo mismos de forma diferente.

**Ruina del jugador.** Quien juega con probabilidad $p$ de ganar cada euro, empieza con $i$ y para en $0$ o en $N$, llega a $N$ con
probabilidad $\frac{r^i - 1}{r^N - 1}$, $r = (1 - p)/p$ (si $p = \tfrac12$, $i/N$). Con $p < \tfrac12$ y $N$ grande la ruina es casi segura:
la desventaja de un casino es pequeña, pero se aplica muchas veces.

## 8b. Las fluctuaciones del azar: el paseo aleatorio

> [!practico]
> Lanza una moneda muchas veces y apunta la diferencia entre caras y cruces: es un paseo que da un paso arriba o abajo cada
> vez. La intuición dice que irá alternando por encima y por debajo de cero; la realidad es que pasa rachas larguísimas de un
> solo lado. En una partida justa de $1000$ lanzamientos, lo más probable es que uno de los jugadores vaya ganando casi todo el
> tiempo, aunque al final estén igualados.

El **paseo aleatorio simple** es $S_n = X_1 + \cdots + X_n$ con $X_i = \pm1$ independientes y equiprobables. $S_{2n} = 0$ (empate)
tiene probabilidad $\binom{2n}{n}2^{-2n} \approx \frac{1}{\sqrt{\pi n}}$, que tiende a $0$ despacio.

**Principio de reflexión.** Los caminos de $(0, a)$ a $(n, b)$ con $a, b > 0$ que **tocan** el eje se corresponden uno a uno con
todos los caminos de $(0, -a)$ a $(n, b)$: basta reflejar el tramo inicial hasta el primer contacto.

**Teorema de la votación (ballot).** Si en un escrutinio el candidato A obtiene $a$ votos y B obtiene $b < a$, y los votos se
cuentan en orden aleatorio, la probabilidad de que A vaya **siempre** estrictamente por delante es $\frac{a - b}{a + b}$.
*Ejemplo:* con $a = 3$ y $b = 1$, $\frac24 = \frac12$ (de las $4$ ordenaciones, solo AAAB y AABA cumplen).

> [!formal] Con rigor: el teorema de la votación por reflexión
> Los recuentos son caminos de $(0, 0)$ a $(a + b, a - b)$ con $a$ subidas y $b$ bajadas: $\binom{a + b}{a}$ en total. Si A va
> siempre delante, el primer voto es de A y el camino va de $(1, 1)$ a $(a + b, a - b)$ sin tocar el eje. Los caminos de
> $(1, 1)$ a $(a + b, a - b)$ son $\binom{a + b - 1}{a - 1}$; los que tocan el eje son, por reflexión, tantos como los de $(1, -1)$
> a $(a + b, a - b)$, es decir $\binom{a + b - 1}{a}$. Restando y dividiendo,
> $\frac{\binom{a + b - 1}{a - 1} - \binom{a + b - 1}{a}}{\binom{a + b}{a}} = \frac{a}{a + b} - \frac{b}{a + b} = \frac{a - b}{a + b}$. $\blacksquare$

**Ley del arcoseno.** La fracción de tiempo que el paseo pasa por encima de cero **no** tiende a $\frac12$: su distribución límite
tiene densidad $\frac{1}{\pi\sqrt{x(1 - x)}}$ en $(0, 1)$, que es máxima en los extremos. Lo típico es ir casi siempre por delante
o casi siempre por detrás.

## 9. Coincidencias

> [!practico]
> En una clase de $23$ alumnos es más probable que no que dos cumplan años el mismo día, aunque haya $365$ días. La intuición
> falla porque no se compara una persona con las demás, sino **todas las parejas** entre sí, y con $23$ personas hay $253$
> parejas.


Se eligen $n$ valores independientes y uniformes entre $N$ posibles. La probabilidad de que sean todos distintos es

$$
P(\text{sin coincidencia}) = \prod_{k=0}^{n-1} \left(1 - \frac{k}{N}\right) \approx \exp\!\left(-\frac{n(n-1)}{2N}\right),
$$

usando $1 - x \approx e^{-x}$. La coincidencia se vuelve probable cuando $n \approx \sqrt{2N \ln 2} \approx 1{,}18\sqrt{N}$: es la **paradoja del
cumpleaños** ($N = 365$ da $n = 23$). Por eso una función hash de $b$ bits ofrece solo $b/2$ bits de resistencia a colisiones
([[sec-criptografia]]).

## 10. Comprobar: enumeración exacta y simulación

```python
import itertools
import math
import random
from fractions import Fraction

# Ejemplo resuelto 1, por enumeración exacta.
caras = range(1, 7)
pares = list(itertools.product(caras, caras))
p_a = Fraction(sum(1 for a, b in pares if a + b == 8), 36)
p_a_dado_b = Fraction(sum(1 for a, b in pares if a + b == 8 and a % 2 == 0), sum(1 for a, _ in pares if a % 2 == 0))
assert (p_a, p_a_dado_b) == (Fraction(5, 36), Fraction(1, 6))

# Ejemplo resuelto 3: puntos fijos de una permutación aleatoria, media exacta 1 (n = 6, todas las permutaciones).
perms = list(itertools.permutations(range(6)))
assert Fraction(sum(sum(p[i] == i for i in range(6)) for p in perms), len(perms)) == 1

# Ley de los grandes números con una simulación reproducible (semilla fija).
rng = random.Random(2026)
n = 200_000
media = sum(rng.randint(1, 6) for _ in range(n)) / n
assert abs(media - 3.5) < 4 * math.sqrt(35 / 12 / n)   # dentro de 4 desviaciones típicas de la media muestral

# Paradoja del cumpleaños: el menor n con probabilidad de coincidencia > 1/2 es 23.
p, n = Fraction(1), 0
while 1 - p <= Fraction(1, 2):
    p *= Fraction(365 - n, 365)
    n += 1
assert n == 23
```

## 11. Errores típicos

- Confundir $P(A \mid B)$ con $P(B \mid A)$ (falacia del fiscal) o ignorar la probabilidad a priori.
- Suponer independencia sin justificarla; confundir sucesos **independientes** con **incompatibles** (dos sucesos incompatibles con
  probabilidad positiva nunca son independientes).
- Creer que covarianza nula implica independencia.
- Sumar desviaciones típicas en lugar de varianzas.
- Pensar que la ley de los grandes números «compensa» rachas (la falacia del jugador: la moneda no tiene memoria).
- Aplicar la aproximación normal a una binomial con $np$ pequeño (usar Poisson) u olvidar la corrección de continuidad.
- Dar por buena una simulación sin estimar su error ($\sim\sigma/\sqrt n$).

## 12. Resumen

- Axiomas de Kolmogorov; complementario, unión e inclusión-exclusión como teoremas.
- $P(A \mid B) = P(A \cap B)/P(B)$; producto, probabilidad total, Bayes; independencia.
- $E$ lineal siempre; indicadoras; $\operatorname{Var} = E[X^2] - E[X]^2$; covarianza y correlación.
- Bernoulli, binomial, geométrica, Poisson; uniforme, exponencial (sin memoria), normal (tipificar).
- Markov, Chebyshev, ley de los grandes números ($\sigma^2/n$), teorema central del límite.
- Cadenas de Markov: $h_i = 1 + \sum p_{ij}h_j$; ruina del jugador; paradoja del cumpleaños $\approx 1{,}18\sqrt N$.
- Paseo aleatorio: reflexión, votación $\frac{a - b}{a + b}$, arcoseno; hipergeométrica y multinomial.

## Reto

Calcula tres enteros exactos.

- **a.** El número de resultados, de los $6^{10}$ posibles al lanzar 10 dados distinguibles, cuya suma es exactamente 35.
- **b.** El número esperado de lanzamientos de una moneda equilibrada hasta que aparece por primera vez el patrón `HTHHTHTHHTHH`
  (es un entero).
- **c.** El menor $n$ tal que, eligiendo $n$ valores independientes y uniformes entre $N = 10^6$ posibles, la probabilidad de que al
  menos dos coincidan supera $\frac12$.

Formato de la flag, en decimal: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Bayes: la probabilidad a priori importa; $P(E \mid +) \ne P(+ \mid E)$.
2. Linealidad de la esperanza con indicadoras, aunque haya dependencia.
3. Medias y varianzas de binomial, geométrica, Poisson, exponencial y normal.
4. Chebyshev y la ley de los grandes números; el TCL y la desviación típica $\sigma/\sqrt n$ de la media.
5. Tiempos medios en cadenas de Markov como sistema lineal.
6. Votación: A siempre delante con probabilidad $\frac{a - b}{a + b}$; el paseo aleatorio pasa rachas largas de un lado.

## Siguiente

[[mat-estadistica-inferencia]] (de la probabilidad a los datos), [[fis-termo-estadistica]], [[ia-aprendizaje-estadistico]] y
[[sec-criptografia]].
