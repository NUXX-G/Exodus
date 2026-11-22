---
id: mat-distribucion-binomial
title: "Variables aleatorias discretas y distribución binomial: media, varianza, ensayos de Bernoulli, probabilidades binomiales y desigualdad de Chebyshev"
area: matematicas
trunk_level: 4
prerequisites: [mat-probabilidad-elemental, mat-combinatoria, mat-estadistica-descriptiva]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 12: «Distribuciones de probabilidad», secciones 1.1 (distribuciones discretas: media, varianza y desviación típica), 1.2 (distribución binomial) y 1.3 (desigualdad de Chebycheff). Apuntes Marea Verde, autora Raquel Caro. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2012%20Distribuciones.pdf"
  - "C. M. Grinstead y J. L. Snell, «Introduction to Probability», American Mathematical Society (2.ª ed. revisada, 1997), de libre acceso en https://math.dartmouth.edu/~prob/prob/prob.pdf: distribuciones discretas, esperanza y varianza, distribución binomial."
hints:
  - "Concepto: una variable aleatoria asigna un número a cada resultado de un experimento; su distribución dice la probabilidad de cada valor. La binomial B(n, p) cuenta los éxitos en n intentos independientes con la misma probabilidad p de éxito."
  - "Herramienta: media μ = Σ xᵢpᵢ, varianza σ² = Σ xᵢ²pᵢ − μ². Binomial: P(X = k) = C(n, k)·pᵏ·(1 − p)ⁿ⁻ᵏ, μ = np, σ² = np(1 − p). Para «al menos uno», el contrario: 1 − (1 − p)ⁿ."
  - "Documentación: Marea Verde Matemáticas II cap. 12 (secciones 1.1-1.3); Grinstead y Snell."
exercises:
  - id: media-de-una-distribucion
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula la media (esperanza) de la variable $X$ con esta distribución:
      $$
      \begin{array}{|{{cols}}|} \hline x_i & {{x}} \\ \hline p_i & {{p}} \\ \hline \end{array}
      $$
    variants:
      - values: {"x":"0 & 1 & 2 & 3","p":"0{,}1 & 0{,}3 & 0{,}4 & 0{,}2","cols":"ccccc"}
        answers: ["sha256:85fe5cf7bf406eca7b4fe1598418b01942c5084019885739cef69cab97941b25","sha256:4a8e66335bfee21a98ccfa1a2c2c7e3034b129f9b1c5dc80354c2619ea8eb2b2","sha256:8b08b196c998c42121d9c89a8187f97f03f30cfe44902e244b50a03f2af8528a"]
      - values: {"x":"1 & 2 & 3 & 4 & 5","p":"0{,}2 & 0{,}2 & 0{,}3 & 0{,}2 & 0{,}1","cols":"cccccc"}
        answers: ["sha256:f06be4d4d772481fb4fd9bead4f58adc362c9475570c252817473a15c0856769","sha256:65730654287fc41e4a1cbb5bf3dfdfc23570590df1b7932b3aa56fcf177b420e","sha256:e4efc0bba4feb4e663655ca2583b81c9aa3f0af4a59b6f1ac252e2543bdec16c"]
      - values: {"x":"-2 & 0 & 5","p":"0{,}5 & 0{,}3 & 0{,}2","cols":"cccc"}
        answers: ["sha256:faacdd70b2cbcdf7d21d7d7c0e571433935bc5c46d39fc1976f011732e47caea","sha256:df1bb4399624305f679db722c1d1ae7996725a11a3878ee0dc9463a4fd90e685","sha256:997eadd95768ac7c3950979fae8ad8798e09b7eb80983d4fd69bcb6d391cf69f"]
      - values: {"x":"0 & 10 & 20","p":"0{,}6 & 0{,}3 & 0{,}1","cols":"cccc"}
        answers: ["sha256:1aee6528f0d8e607224a9ceb7df5542ec054a70df2b1b9b9ec15cb59bb7453a4","sha256:b943ddcc5fe134e73e882fe1f7629be036c20b554b8f3065c7c7bdb87bff60b7","sha256:38738c4493003c9ccf8c6db277a608a52a841b8bd2d16bb2ece59ee68f635da3"]
      - values: {"x":"1 & 3 & 6","p":"0{,}25 & 0{,}25 & 0{,}5","cols":"cccc"}
        answers: ["sha256:4f75311d4136ed2242cb13e6b0d1f4c48f4066e0cdc663062d3db2c4ffc86345","sha256:64f4e4c798c99cc99c511bce8f06a0f4bd9a8f625c960102e7c9fee8aff8f037","sha256:99a715bc318f0f30026b3d5f9f515ce613024a913338c10930cc805dfe0207de"]
      - values: {"x":"2 & 4 & 6 & 8","p":"0{,}1 & 0{,}2 & 0{,}3 & 0{,}4","cols":"ccccc"}
        answers: ["sha256:cc60dfbbbe7d7761e87c4d13fd8dfcc765791d184f397682839f8e67319db266","sha256:55f24b141486129db0f451fd5bc7374f7cf8c690bf08e20735a389e371abc631","sha256:fed4d28e4611be194a87175403f088cba153f97402dc08d8b403a9467e8bbc57"]
  - id: desviacion-de-una-distribucion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula la desviación típica de la variable $X$ (al menos cuatro cifras significativas):
      $$
      \begin{array}{|{{cols}}|} \hline x_i & {{x}} \\ \hline p_i & {{p}} \\ \hline \end{array}
      $$
    variants:
      - values: {"x":"0 & 1 & 2 & 3","p":"0{,}1 & 0{,}3 & 0{,}4 & 0{,}2","cols":"ccccc"}
        answers: ["sha256:ce05249aa045dc3e638f55c6c450e062a6a92787de7236354e57529eebdbb330","sha256:3de28230ef16eb26ce1fcb7504aeab6fc51e1463d4fff04916ad79053df88cde","sha256:e9c0da90dacdb2f775fdb9a40cfc148c02d005c90409ae9d5ef40876c26053c3"]
      - values: {"x":"1 & 2 & 3 & 4 & 5","p":"0{,}2 & 0{,}2 & 0{,}3 & 0{,}2 & 0{,}1","cols":"cccccc"}
        answers: ["sha256:98a9f2011cb7957ced93805146ad76249ff71c11b228679a672c61cebc7b8927","sha256:9285c411f2f5418b5a94986dbbfd2e888321d7b1857688f1ce61e02ef1445256","sha256:265e8915d3bf214acfb8323c7527d3979e2e5fa41f81405ccbb9fc91993cf28a"]
      - values: {"x":"-2 & 0 & 5","p":"0{,}5 & 0{,}3 & 0{,}2","cols":"cccc"}
        answers: ["sha256:18bfc13769e112015e6cc0b63ecb2c760cbe4ef581454d6b18c7878252c73eff","sha256:81c2bfda0bf7866727e0a4bdc24e91e7ac705c1de3895b8b53f626b1c09bbc64","sha256:604417a71e10d992df8473d365acbecc32026d7190ff0582c51f14aad522e0b3"]
      - values: {"x":"0 & 10 & 20","p":"0{,}6 & 0{,}3 & 0{,}1","cols":"cccc"}
        answers: ["sha256:7db95d94dfcd5c813faccfb3942996894f8b8daa60cbf720bf5ff8e5e45a8d36","sha256:cf81d52e7ca82406b41231406d33a3b5c4fcde4192480daf24259abf9066927f","sha256:c6d7299e667761350b33272bd3a3f0964abac523f4713f2150fbcd0d52e8f533"]
      - values: {"x":"1 & 3 & 6","p":"0{,}25 & 0{,}25 & 0{,}5","cols":"cccc"}
        answers: ["sha256:b111490171141687ae632f869544db3cd6be2df0168bb89dcc95b1d5329731d5","sha256:f037d81dea433dce8b36fcc0da07adc95d28c2f65b0e0e8f84ed47d1fcf0d1bf","sha256:9649eb503e7be70de0e15a9ee0b69fc5a89fa3558c02c6caed3fdfaf8887ed7c"]
      - values: {"x":"2 & 4 & 6 & 8","p":"0{,}1 & 0{,}2 & 0{,}3 & 0{,}4","cols":"ccccc"}
        answers: ["sha256:a9ed126f5b5934fb72a7edcab7f91fa5a76430a8090a60d341e16315a5d10f3d","sha256:35e6a3306078f39543f09e14b1bd60f264dfd9c19efdb6d58faa120b8ea76eb6","sha256:b3f6958c812f30d2aa763e0b582dd923550a8fcf560ca8ffdc7c8479c8c2a9e8"]
  - id: esperanza-de-un-juego
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un juego cuesta ${{c}}$ € por partida y paga ${{g}}$ € si {{s}}. ¿Cuál es la ganancia esperada por partida, en €? (Negativa si se pierde; al menos cuatro
      cifras significativas.)
    variants:
      - values: {"c":"1","g":5,"s":"sale un $6$ al lanzar un dado"}
        answers: ["sha256:e1336a055ea9a13595ce6d1620a586db8a458ca1924d6f735b692af3ff849f7f","sha256:88695c2148d739b3c679f5fec2b2f47d7f4a5da25f53ab1ce1a900d3f14c56c0","sha256:862c6000fbd5eb547b20f9881cb7ee5a4ed0c2f727e90d03dbb4993df2536f53"]
      - values: {"c":"2","g":10,"s":"sale una carta de oros de la baraja española"}
        answers: ["sha256:2a5e6f12d556c3d69d024ef5f7fbc363a07b4569ced0f915b2eaa24bf2d5e3fd","sha256:ae89d2039bbc5128c88ed7e3a17fd188e0579ae8b60284befa6324375a76ae70","sha256:bc02447cd6aea2c94fc53fdae0ed7a065b5e9a18ed3736b3dfdc6cbbc8178ff7"]
      - values: {"c":"5","g":30,"s":"la suma de dos dados es $10$ u $11$"}
        answers: ["sha256:d650f9692afa6683e24997e860c9ff10f3abca061d19c8c1ca4bf8ea86c74cbd","sha256:5742ad05a021c98a7c19464493b22134172563de5cc33d1ead50be8b2b0e5ab5","sha256:42801b472c43f2114545df3c72f94980345806ee0bd94033b0d68afbf1617452"]
      - values: {"c":"1","g":3,"s":"salen exactamente dos caras al lanzar tres monedas"}
        answers: ["sha256:eeaef73775571be011e261211f9cd4a0d34b4fc5624fda131b2e50ffceefe57d","sha256:78ef5faf4b9417852f645f5c7c97314472b3f07f5c6e84f9ca049bdacbf9304e","sha256:5d20d75cadcd0dfb601384b50c3ec8eef975a0c7fa2711114219d91990675902"]
      - values: {"c":"3","g":100,"s":"salen dos seises al lanzar dos dados"}
        answers: ["sha256:8647587575a7cbdff6cdc68b2bd8d4bb42906b0ffb01cbbd2d9dc99117c16f04","sha256:a30a4aae1222afadcc1da7ecb2c410a4374ddf2b2f628aaaad64aecfc6bfa40b","sha256:8405e442f379d7aa8da5fea8c2f847806aa06e9a7b5e0fd9fe77a1d78e00fbb7"]
      - values: {"c":"0{,}5","g":1,"s":"sale cara"}
        answers: ["sha256:ff1c60b94aefb3f55fb7648a0dd4d60bac3b354d7cc4eaeca99943f010ac39a6","sha256:1d963aec93bf60daf96f7859a5dc2bb15e9630a1e113a64cb6eb6f0855a3b717","sha256:cce2a9ec91e8908a2ce89a8563325681297a27db0864b9f48d9fecc12d96bee5"]
  - id: probabilidad-binomial
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Si $X \sim B({{n}}; {{p}})$, calcula $P({{k}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"n":8,"p":"0{,}3","k":"X = 2"}
        answers: ["sha256:6c9ee0273253c32259558595a28ce3bf525448bdc2b9bc27464c1805dfe42028","sha256:32c83d77b1b4dc395895f3735f7dd037cda84904cc8609b1b7158e3b476dfd1c","sha256:a0b619366ffcf15061a7e5b1694eac9460420567d4506e0e83f827581201fec3"]
      - values: {"n":12,"p":"0{,}5","k":"X = 6"}
        answers: ["sha256:88ce4b1b9f14cbe2b6045c29328fbd3d3f0e7c313ddc61effec904c5e956c1ca","sha256:7a42fed12597797e553446c8c1414d616b7484948f2b9dc816853cc7017e55b2","sha256:5ecd073676a22f78b85439c523f0775afb66e0f0ea9156003ce939f677ec8c7b"]
      - values: {"n":6,"p":"0{,}1","k":"X = 1"}
        answers: ["sha256:c6238e15202f851f5c44388b5e6724e723d1381e7532ffeba12fb49a4bbdd6da","sha256:bda42e7fc69610dccfe1393e1a80e43caa26d7d864e9fb49c33f02a0bd713ef7","sha256:41f20e056270fdcc7dbedd83c5b0029982fdeb374d5bdee6d264fc346795265e"]
      - values: {"n":10,"p":"0{,}25","k":"X = 3"}
        answers: ["sha256:27ca884a5619a0d3440ea135bb7d544d8529f31ba21faae89da8de4577271582","sha256:7a4802ebe707e964eaf8f4ff00297fd57d8c186f88284955ca2fa15415bad204","sha256:ef9aa4bc1dc3ed63d36be280ced0ff657cb409758fe4a3799f77e9967d5ca2d3"]
      - values: {"n":15,"p":"0{,}8","k":"X = 12"}
        answers: ["sha256:054a4393d3decced1862084bcfdf6df0fdb34946e94f2a5430ecff02125d14fd","sha256:44de72bc33ded5fc5e01380da7c4f045e1592dde522fc6def6a9a2ef3db1689b","sha256:6ef4eaf521739ad5aa97f4670c7cffc2875fb661f9c8354f0d6b7d45091ec8b3"]
      - values: {"n":20,"p":"0{,}05","k":"X = 0"}
        answers: ["sha256:f1a6cf7e7da218e3c0021ee3b9b6168d5dbe683361fe5fb3f8c0f091aa8bac9a","sha256:919930a156540219480c8c274a17cab7e33def88fa15950c3a4314a5e4791c01","sha256:e1f21bb9b5e7ddf3c69dbabc2f22726c24cb843b570a2a228ea4c77cc0a3f364"]
  - id: binomial-acumulada
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $X \sim B({{n}}; {{p}})$, calcula $P({{k}})$ sumando las probabilidades (al menos cuatro cifras significativas).
    variants:
      - values: {"n":10,"p":"0{,}2","k":"X \\le 2"}
        answers: ["sha256:974ba6d0fa6d2f0eea7caa951b85e87882635f3bfc3cbd76a708cf281eb9bf95","sha256:0c04c42a391f16e172ebbbec7a9f550ca075bd0ee5e9ca51e2946476e9614265","sha256:4df4a57edd1f023227490672eee32bda99be1fc5ffcf617cdaf954bc00a18208"]
      - values: {"n":7,"p":"0{,}5","k":"X \\le 2"}
        answers: ["sha256:8af2173c3f41b0d39e8b72c1fb21ba98bc1aeb969c4df11a81a285e5a8b4a26b","sha256:cbc58bf77972e1dbbc139df717306f5b396a83b778c35d4d5a184d6cd59a9f9e","sha256:1fac5f23d41a2006d2507549b1a6f7c3e425a3223399c77ff24021e7934517fb"]
      - values: {"n":12,"p":"0{,}1","k":"X \\le 1"}
        answers: ["sha256:937281daf6f8c1a1bd7844d1f7b117ca5f25028b7f439870d583abe78b5ed492","sha256:c7ccfa985c5abb48056f0387a112ffe733734cfcdb69d6c2974ef05d1239ca31","sha256:dd5b17549f21041a118776260e3a630e67739a477fad4114967343f10db27e23"]
      - values: {"n":9,"p":"0{,}4","k":"X \\le 4"}
        answers: ["sha256:75fd2c6293fac45c42aea7d23099aae8b068f48f0289d13d12feeffdd64f5cd6","sha256:15d55d7d86eb5a8eb4f600254a8d7ab2e8fb77f6b4b39340453c3dc3167603e0","sha256:e1f7ce8a0c89d306b83db30a84a4b4e7ba573832012a0efe63994e3efcabcec6"]
      - values: {"n":15,"p":"0{,}3","k":"X \\le 5"}
        answers: ["sha256:9abf69563d67e49a8ed66b5037ee1ea7772b406adb87a899fd19770b3e791e11","sha256:552dfa6dbf1e1ebe4ddc3c7d09633975e2cc193ab6ba5f7d1d776da43a3a7803","sha256:2af8618915ea1501cbc2c949db3a967a0429373c3a2dcffbdd59560fe561542f"]
      - values: {"n":20,"p":"0{,}6","k":"X \\le 10"}
        answers: ["sha256:cb1fa8cda29fac05d76f04a57981bf3c7cd49016a9543bb0af92fc2e0ce5916e","sha256:45eddfa6b9896be0c242515b534c8f9947ff9daa2abcbeea7dae2eb8d8d622fc","sha256:a5ea9c3d3c59f577504125db25f4ea55e67a9f128d7ae625ba974d11ddbffc49"]
  - id: al-menos-un-exito
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Se repite ${{n}}$ veces un experimento con probabilidad de éxito ${{p}}$. ¿Cuál es la probabilidad de al menos un éxito? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n":5,"p":"0{,}2"}
        answers: ["sha256:7d8ba82aa09d7643b1c14e884cc258e0086cd1464e97b40f97b28e641a934847","sha256:92213ec8a1573674aab38d25a0c6a396746b2af2f429d9c3ae1ce5e795cc5596","sha256:d1562f4b5d215784251ce1b2515b0348785da3662d374d7d671523125c46bb02"]
      - values: {"n":10,"p":"0{,}05"}
        answers: ["sha256:08e2cdf83dc8bbf2b1144ce99f3285f8eaa74ac8bb03ee247aa4fceaa6114bca","sha256:b551d742e95f46f19b3dbb7fdd461262d44ce243bace0c26eb161db0147a9e07","sha256:57bcc487cbb2095a71659e01f7641eca4ad68be0faa1ff24fe5dac766eb8d9e2"]
      - values: {"n":4,"p":"0{,}5"}
        answers: ["sha256:79af87697098036710f0e4b9f64a4a441e56b0fed8cc3027136890dc17303a2c","sha256:0bec92e0178ae401b31b2580c90499c272044349070be5e453062ec0bd12d623","sha256:eedc86003e9e38db1e54b88b400d4ef7def4b12f1fea4e34b2f8345b8465c57c"]
      - values: {"n":8,"p":"0{,}1"}
        answers: ["sha256:d140858786f43560e06366d5805f5d49617564cc9146246295338ec8962358ef","sha256:5d7778cb0832790c723dee0acc1472344cf008b8bd093ab532660722036d2868","sha256:c2dd6b26744fcddd98dcac4e90e3be1b554656474aef6c0a0a71a0cf74d74336"]
      - values: {"n":20,"p":"0{,}02"}
        answers: ["sha256:3ebe7edbd838443fe5d40da9d808f865dfaa714698c240c5045236767dd25824","sha256:f29d24b1322d23468594cccf2101763839d149b6b667ffec29b05fafd1eb7ede","sha256:a3147cb82554677d70fb6ccdf6e2fb6dded4f8bca5bfb4dce53cdfff5e57d099"]
      - values: {"n":3,"p":"0{,}3"}
        answers: ["sha256:51aabbb900c356fed003876dbbf541e9ef3371e4a6674ba363efb02e0af0983d","sha256:854c6ad27262b6fda6561bcede69285d679a6cb05b89923d0045b8c2b775f5a3","sha256:8b86fb15f57fdf5ca64c941b65e1c288ccd4dac494741a55cf76f95f0844a1e7"]
  - id: desviacion-binomial
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la desviación típica de $X \sim B({{n}}; {{p}})$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n":50,"p":"0{,}4"}
        answers: ["sha256:fd5c284cfd6e9786d64219c96ca2287dc1e078018842804a812124ccf53c4800","sha256:d759181f85edb03b6aa19e4b3702e21a4ebdb6d77323e1f78af1adba9e0d35c7","sha256:e8b59ec4d343a882c4f4632e9e8a6b5d1ef0248b731aed2da9fc0bc03ec13f8a"]
      - values: {"n":100,"p":"0{,}1"}
        answers: ["sha256:a02e891575ad3121e2e177e0121ded7091528f98950cc1defb73365f4f1cd7e6","sha256:ec4d5427f9baeddbb6ab48a420cb5825b1f90cf9c36f36d1e130613b16d720b8","sha256:f8bf01efd7c3ed2f68c705dd28df16810a3f4105c7e65c4be18e9f03d6da7a2e"]
      - values: {"n":36,"p":"0{,}5"}
        answers: ["sha256:1574da6610684d531c3020c3c061fec27c245eee24413b0bebb598a4023255bd","sha256:6c8a4492f60803e5914ca3c17cc0928aa54140d4579e7843f906d053741fd7c9","sha256:a34c237106afa6fdeeb987e98b0a2241c72fafa1b89e4c66c8154d3d1c975267"]
      - values: {"n":200,"p":"0{,}25"}
        answers: ["sha256:265a278e8c1c350a408e080edf693bead3a742c352b08d8c9a729421de788513","sha256:43b027c1affdc2970b1fb339714872b58b1669ce5c29957be67e8fcad5cb7efe","sha256:d38cee3366a3d1836ee1bd0a71eeefb6379e10e802e6f3a52bd06559eda010cf"]
      - values: {"n":80,"p":"0{,}75"}
        answers: ["sha256:96168ebaed51653fb32f20c08653a4cc0833ee176d8f5655560f7d81881515ef","sha256:725420065c2ce1065a78ec9b3986d6183cf935f486049aab13776b6d43b61749","sha256:a218c73647cdb91ea58698a958bb4980a6497a1971e429ac9d73cbf3f67cf753"]
      - values: {"n":64,"p":"0{,}2"}
        answers: ["sha256:468deeaa388cfb03eee587cc53cf1289a0d9652e772f3ae098c5e1d50511179d","sha256:3d3aa42256f24e94e0b548477e0af753d791f5983cdbcee061448c3c47a9c1a7","sha256:c75f335e22242cd76eabbfb68898b48f01a76cf4dd0267cc9ba2ea56bb113083"]
  - id: valor-mas-probable
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el valor más probable (la moda) de $X \sim B({{n}}; {{p}})$? (Compara las probabilidades vecinas.)
    variants:
      - values: {"n":10,"p":"0{,}3"}
        answers: ["sha256:33b8d64e7482d115d71fc322876d230f69c094252b3dd81b281fcabee203b6c3","sha256:f0f8a7047ec74266f9c4007d44995ac6d31884a6fe19487b4218c098e8ee937b","sha256:d8d64bc46beb68b4bce933aa8ef1571b4694a8d58b50ff7e1637907c60175129"]
      - values: {"n":9,"p":"0{,}55"}
        answers: ["sha256:118ff9cd3fa13be14a1aeed4a0e9eed2346304bebde53292f3c75c0e83bc24ac","sha256:ef5d873887b2d54e0c4687222c53ff00511c4db3c0ebe5600c0830ad1619fa3a","sha256:765dfe26ecb38a4c26d5670c7a2c65dceecfa760b3f35e2f1088116ae7b25a2c"]
      - values: {"n":15,"p":"0{,}2"}
        answers: ["sha256:678fa0bbfb7bfe2f6c9ac5c90f2d4e552c3c25face99eb9681296f5b9b4f7078","sha256:9b5d3085fc895eecd47336d2402db4f3ad7743aff42db1c1efa5dd439fbf60d4","sha256:059428d640d4802993c4c9f55b46a361dc1d01eb6d15d33ece3c19c18c1556dd"]
      - values: {"n":7,"p":"0{,}45"}
        answers: ["sha256:ff10b047b1e0667e8e01b80fa4d4fb01a5081177c4d1947a3e490ac4e6d83631","sha256:a6390e1f4252a27d4381e5be9957259addcfabf2da299747f53b3512f8cf1944","sha256:098101d14a6258835dccf5679b3d3587b4112f0106ac08041e05d9f8d088c125"]
      - values: {"n":20,"p":"0{,}66"}
        answers: ["sha256:4bbb63409c01a1bfec1854879c67ee852bc0304302364fa9276635c14106172d","sha256:f9dbe866c01d471a97b58035b07b3cc75468a9ded9461cb9e23d33ed997b5c6f","sha256:60eec2719371af8f4b1737e0335f5a25972750a24b6329e922b60b5c34666b0b"]
      - values: {"n":11,"p":"0{,}7"}
        answers: ["sha256:5f18493984f6c4debb7372283b3efeef0d3528e9aac6cfe5787493d422073b05","sha256:eb04634dd1e3aa472c56f0d1f9cb14e0e5a2d730fe68bd700cdff6e7e68cab77","sha256:6c6d238e8969cbb4364b366849255a43111f397b0b1a850c2d049f7fffb35ac5"]
  - id: intentos-necesarios
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Cada intento tiene probabilidad de éxito ${{p}}$, independientemente. ¿Cuántos intentos hacen falta, como mínimo, para que la probabilidad de al menos un
      éxito sea mayor o igual que ${{q}}$?
    variants:
      - values: {"p":"0{,}1","q":"0{,}9"}
        answers: ["sha256:7fb50ab59453bde299b20996e4cfc9c9498691c40a74443a4cc93926497dd072","sha256:a172f9dd5273a4c5624d21a11f111869d5ab9eb99521e7272b925097e7d61708","sha256:b416ed9934254a589f47d85e866a74b549dbaf2147697348ab93d6860faa4964"]
      - values: {"p":"0{,}05","q":"0{,}95"}
        answers: ["sha256:5255092dde8a3f154c950c7c95da5472dea62ebf880d2e780db2948e3072a529","sha256:da7f2bc61117216823e96dc9a8147de45048e47a5572411a881b8d4562bdc277","sha256:4f22eefcd36cc5ca11b75bd42b81891e77f7f1ee75e3d2eea975da8bf9097b58"]
      - values: {"p":"0{,}2","q":"0{,}99"}
        answers: ["sha256:24e1bd535906b621268b169ed6017b9dcd1aa153c1be060758b6a6e39f0521dd","sha256:8c2965ff16eeb94ac1c80ba1d333f551384ebbee3d61ecc9e7142b120165f2b0","sha256:92e9ab5962363f9724423ba3678467abd2dee76e5dd25399888b59c1d74530e5"]
      - values: {"p":"\\frac16","q":"0{,}5"}
        answers: ["sha256:a67a831dfd7f81cb8ae47c34bdae2d163b1e3d253bb56193ac26fe9e125bef80","sha256:c90accbe6e0d5cf18a48e8f215b720bb348d36c51ef84fbadc212be463843821","sha256:c7d503bc68ffd05d0972be855133788f8ef60f65848b94df79587a610f53950f"]
      - values: {"p":"0{,}01","q":"0{,}5"}
        answers: ["sha256:de7eca7d285a30d3ccf7586c03012e76f11daece1f824b76f48ac3c61563d296","sha256:858041c8bbe61ec89b1d66a932680cf2c273ae1f73eeda899e692535249a7d53","sha256:0aa713f01ff3c3f126f50027fb5f9b98d03a080ffd8e31c7a735a33e5c543b11"]
      - values: {"p":"0{,}3","q":"0{,}95"}
        answers: ["sha256:17fc5b188c655fdc95fd4c3950c4a288396d1743323abea1f38d62a140df9444","sha256:04a4a95424e815ba5383248eff4476fd73bcf9b35f586cc927b94d75178bd9ab","sha256:4c1efcc3ccd095e595f7f244ae7a2f9a1c4cf5954bb69a8b8dfe99cccf21c8e6"]
  - id: cota-de-chebyshev
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Por la desigualdad de Chebyshev, ¿qué cota superior tiene $P(|X - \mu| \ge {{k}}\sigma)$ para cualquier variable con media $\mu$ y desviación $\sigma$?
    variants:
      - values: {"k":"2"}
        answers: ["sha256:750fb04170ea0c82782e9088be91541959afcc059ae68e38c7e5fa1d102c76ec","sha256:190e67dc5ddaa99a1ea69013727d38fa86f0f4f54387893de7886511e60832c8","sha256:4c5c775709549912595201f29c6ce1ba0d7a8c188b283d1d76743c1509780909"]
      - values: {"k":"3"}
        answers: ["sha256:d88a2129005b0067988c0277c4aa095fbff9d3d0272111022738528e7a6a04b6","sha256:7278605414d4dc8dcf3882eb5a1f1bbaed5b29e94dc87f282f840cb49e915078","sha256:5232577a87ba8b77041b955731ae7d869e287502485916aef51ff3a735237c9c"]
      - values: {"k":"1{,}5"}
        answers: ["sha256:6b5af06cbf8f2364f26700682f9a0b58fa14b7f4277d1f530967ba80577e998a","sha256:b3c92253bc78bf1bdc711fc57ebe782926051416b8899c83e1cee9767304c659","sha256:2fdef24983414af455a6ae7c86ddcd4a0fdd715b10421f09a521c7c215f60cd1"]
      - values: {"k":"4"}
        answers: ["sha256:95c631c73a9c043f657b2fca415a134cd9168781ac99400d2934c06a6caf0847","sha256:7394beefa85df05084bd24acd46051ab4d24faef9ed3fae356b9ca78d45d7281","sha256:e313dc4a5eaca3260a9c015da84cd94ad94982cbef9a03b3943d3b53ffed46af"]
      - values: {"k":"2{,}5"}
        answers: ["sha256:9b2bcf47c2c9fb0d1b6ffb9e3e13d996053aba6f518570fffa482c6cfa41c471","sha256:e12f9069c6161734242088be519c34ce1349ecc6a334a851b36f0e834c27e1b2","sha256:bd75d4fb1cfb5d1a7025087f8be9c32facc9dac5df301587521617fb9a99437a"]
      - values: {"k":"5"}
        answers: ["sha256:864a013b09292254a15428a032425d04a6b5425ce287c37a2231b7396ac33683","sha256:614e5885ee761765e21e44b8bbe9325f64c5b43526310874d3b2ef61e912b38c","sha256:c79e1b2d228714603ac27f06f1a0933863c88494d6c4aac0180c79bd63b128be"]
  - id: control-de-calidad
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una fábrica produce un ${{p}}\,\%$ de piezas defectuosas. Se acepta un lote si en una muestra de ${{n}}$ piezas hay como mucho ${{c}}$ defectuosas. ¿Cuál es la
      probabilidad de aceptar el lote? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n":20,"c":1,"p":"5"}
        answers: ["sha256:057142cf9619ac63f4d94e78b169f7ae5a1be719fe8d6dbafd8b593418786fb6","sha256:2b5168512abc3aed6a01e7a72cd15035b0b088d4ee09c3ba1ac83a1196e9fbd0","sha256:8bb05266eeb25474c2f0dc176b2cce25b6e147efd66d16b410f9ffae896cd4a6"]
      - values: {"n":10,"c":0,"p":"2"}
        answers: ["sha256:70c1875cb49bbbc9c4cea50b0304a6593028a8f26f4ee7745f4f908cc6e3c39e","sha256:a4f25be1464a33f34b55db6edb7512fe121124de529ee956da5550bcfd4da168","sha256:85c09a97dfdd2236ddd20c1ffc75fa9f6c8924b0d76bfaf9f4218cdf9fba04b7"]
      - values: {"n":15,"c":2,"p":"10"}
        answers: ["sha256:7744f3c7d58be30fdcdaef8e464f6470e74238c130335aae1a1a8108840bab12","sha256:a5150dcb85a4cfb8d2bf00cd0798fe2ee9aef7c36d18081f4668b5145453d933","sha256:f2ef71912f07087e6d14bd4a9ff1bf2f664c40e9dcb5affeedeed28c1c7bc3a6"]
      - values: {"n":50,"c":3,"p":"4"}
        answers: ["sha256:23835de2ec438026b34b334e68678fcc8273ab2f1ada1259e6bec0182e750f3e","sha256:147f50c6723770ee320252dba233a379b520f69c9b17d485c09d0b8d1ad4c371","sha256:d1891ef66f1ee6ff701e429809483afa6609c561ba1e0f28c9d8bda3b6a4a7af"]
      - values: {"n":8,"c":1,"p":"15"}
        answers: ["sha256:d5dd54922f124139096b19ee3a274b37d0813ae94e999192eafab9c26254720a","sha256:a2f299804a00831dba8bd77cb67e262f6b60606ec0443a7e37c5dbfa05003934","sha256:652dd6b2764598c6648603bd996c35c5360f6c12683553151913b3e1acde85d0"]
      - values: {"n":30,"c":2,"p":"3"}
        answers: ["sha256:2908f51654375d51d992713329abb9c032a738163b75024f55adda69903b43d9","sha256:d59ce0002bc252f6f33b2c82c854920b339b0b69f4119ce490f1106dd4a35135","sha256:8403c5168a52ae61c1b407aecb4c06a7b7c2fe02f55f5bd587d3613d7611d799"]
  - id: por-que-binomial
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Deduce la fórmula $P(X = k) = \binom nk p^k(1 - p)^{n - k}$ explicando de dónde sale cada factor. (b) Justifica que la media de $B(n, p)$ es $np$
      escribiendo $X$ como suma de $n$ variables que valen $1$ (éxito) o $0$ (fracaso). (c) Explica qué condiciones debe cumplir un experimento para que
      el número de éxitos siga una binomial, con un ejemplo que las cumpla y otro que no.
    sealed: "gz64:H4sIAAAAAAACCn1UwW7bOBD9lQeBB1tRjLrAXgzklA2wp73twkDVBmNyUjCmZlSSCuIN/DE95tDT3nr1jxWU5bRug95IYfjmzZv39FQlDUP2KtWqqusZzesa/wghsR1YrCdYFRs5jweYrcHh+dFnTdjBCC6xNbiLZClpQvYsjD7qhjY+eEcOpv+wnS1xiX7+4Wms35sGvcZPAyNogpfMUvCSCrw47lmcZ8lcWiRGN4Ts++AtyaKVv2gH07YbL9pBtuY70wTnU/aSKf3CdRYo4U5jV6oYHPijj2DBp+Hw/AOFkbwbLMu8QVZHCf7jQKE8Oo4VOIHhxWrXU/bHu+TISIcvDSgdvrRSZkuMNHQkqx/p4hU1Fq20UtezTdHerHGF9e0SF2hbpznhAutbMQ2cimOY9a3HFZYGyYPDiTqMN+CEQaaRF7gmR2O5mdbSsfMEs0TbWqcZPS7w5nSZSOEKvWmwQ6Cp3jGG4oeho9IgTEfHrRRNx6K0grl5t36PK0hvFphda6cgx93h82t7bVCePlD0JP9RQqZu4w/Pcq6Z9hwpaxTq+Olfivv1iD8xNYv5pJs9ehZy+NpxVNz5e4URU6ifNtvAFjkG0dEaThMipyFkKsfZUTPoycnzZhTAp47O3ex40hemN8U/WQsAvwx4zMxoiFY4BE0LXA9dH3hV1nXi6BiWIhXrwCzfGISiROePNpw071TY0QJ/K+yrEBstOka9pwQKSGQpwvxhTgBDFEJdJy+tOH7Q8MAxUKrrkofzwWxZwcu2+TFHstYf/hcQNEeaL6qmisMmelut3j1VNvrM0Wu1qm4ex3AWbsfwjOoUn1+OLr/c7k0J/E8a7cqDO7JZ41mgS6N+KDpUq7f75qzVn5xK7lRKEEb9JzMWbG/JadF0B90cLW+KHX+DdyNDx5FGO1otEF5l/O+MZgHfc9cHxa5crEqOdPpkNUa2WdM5/vv9NyjIwm9TBQAA"
  - id: r-media-binomial
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la media de $X \sim B(40; 0{,}3)$?
    answers: ["sha256:e1dc327dc13be56ce7245a1f7ea9e39ebc909bd35391f3ad7526604003cde3ea","sha256:48024308514dd356d179c484acced97d801007a3b628816221d5c16218bed567","sha256:4d50c7b402db193575b5c135a94e7e7e6069568601436ad405961ee426cd00c6"]
  - id: r-suma-probabilidades
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto suman todas las probabilidades de una distribución discreta?
    answers: ["sha256:092583feb0dff084589aefccd2a185bf56a9751e3fd5db2fe649b0ff18e21036","sha256:7cad2f684188c4b31e9e11803c4887242ff229421bb611edf324606b2e495b52","sha256:254120d280e387200f29e5e59b22183604dd356de0fd2eada10faf89e16be9eb"]
  - id: r-juego-justo
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se dice que un juego es justo (equitativo)?
    options:
      - |
        Cuando se gana siempre
      - |
        Cuando la probabilidad de ganar es $\frac12$
      - |
        Cuando la ganancia esperada es $0$
      - |
        Cuando no cuesta nada
    answers: ["sha256:60d2d85db86b7ce12f4219a6f1ff7ce97b4ffe6c0e6546c981d9cd0a7da143bf"]
  - id: r-sin-devolucion
    tier: 2
    type: opcion
    review: true
    prompt: |
      Al sacar $5$ bolas de una urna sin devolverlas, ¿es binomial el número de bolas rojas?
    options:
      - |
        Sí, siempre
      - |
        No: la probabilidad de éxito cambia en cada extracción
      - |
        Solo si hay muchas bolas rojas
      - |
        Solo si $n$ es par
    answers: ["sha256:8d8260f674ca5993a68c09a4fc4a0c76499e330489a239ecdd7fe94bc3e289de"]
  - id: r-varianza-binomial
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la varianza de $X \sim B(16; 0{,}5)$?
    answers: ["sha256:5b33f5cffe3b309f1e36f4111ea6a944098d6393c23913437fe0291f26d7fd51","sha256:61772e5fbb9d49b7e34b7a82c79a51316e276615cf2bf4acf5e567c9cae701bd","sha256:754a8fe44e332b17443debdfafacc0a39156b5df65305f7b343f7b248d1f5844"]
  - id: r-variable-discreta
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas variables aleatorias es discreta?
    options:
      - |
        El número de hijos de una familia
      - |
        La estatura de una persona
      - |
        El tiempo de espera en una cola
      - |
        La temperatura
    answers: ["sha256:9ce7fbfb4864ae1085fb265cea6f9ce82810a842651e20c3b38346d95eeaa799"]
  - id: r-cero-exitos
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si $X \sim B(n; p)$, ¿cuánto vale $P(X = 0)$?
    options:
      - |
        $p^n$
      - |
        $np$
      - |
        $1 - p^n$
      - |
        $(1 - p)^n$
    answers: ["sha256:cbebeef7bd3a2f1e55579ddee8ea05c425f26341bc6d124495f4ee8083ad0fe2"]
---

# Variables aleatorias discretas y distribución binomial: media, varianza, ensayos de Bernoulli, probabilidades binomiales y desigualdad de Chebyshev

Si lanzas $10$ veces una moneda, el número de caras es un número al azar: puede ser cualquiera de $0$ a $10$, pero no todos son igual de probables.
Contar éxitos en intentos repetidos es una de las situaciones más frecuentes de la probabilidad: piezas defectuosas en un lote, pacientes que
responden a un tratamiento, respuestas acertadas al azar, clics en un anuncio. Este nodo presenta las **variables aleatorias discretas**, su media
y su varianza (la «estadística» de la probabilidad), y la distribución que modela el recuento de éxitos: la **binomial**.

## Objetivos

Al terminar sabrás:

1. Describir una variable aleatoria discreta con su distribución de probabilidad.
2. Calcular e interpretar su media (esperanza), varianza y desviación típica; decidir si un juego es justo.
3. Reconocer cuándo un recuento sigue una distribución binomial.
4. Calcular probabilidades binomiales, su media, su varianza y su valor más probable.
5. Usar la desigualdad de Chebyshev.

## Qué debes dominar antes

[[mat-probabilidad-elemental]] (probabilidad, sucesos independientes, árboles), [[mat-combinatoria]] (números combinatorios) y
[[mat-estadistica-descriptiva]] (media y varianza de datos).

> [!question] Test de entrada
> 1. Calcula $\binom{6}{2}$.
> 2. Probabilidad de sacar dos caras seguidas con una moneda.
> 3. Media de los datos $2, 4, 4, 6$.
>
> Respuestas: $15$; $\frac14$; $4$.

## 1. Para qué sirve

- **Control de calidad**: probabilidad de encontrar piezas defectuosas en una muestra y decidir si se acepta un lote.
- **Medicina y ciencias**: número de pacientes que responden a un tratamiento; ensayos clínicos.
- **Juegos y seguros**: la esperanza de ganancia decide si una apuesta o una póliza es rentable.
- **Estadística**: la binomial es la base de las encuestas y de los contrastes sobre proporciones ([[mat-estadistica-inferencia]]).

## 2. Variables aleatorias discretas

> [!practico]
> Al lanzar tres monedas, el número de caras puede ser $0$, $1$, $2$ o $3$, con probabilidades $\frac18, \frac38, \frac38, \frac18$. Esa tabla es la distribución de la
> variable. Si repitieras el experimento muchísimas veces, la media de los resultados se acercaría a $0 \cdot \frac18 + 1 \cdot \frac38 + 2 \cdot \frac38 + 3 \cdot \frac18 = 1{,}5$: la
> esperanza.

Una **variable aleatoria** $X$ asigna un número a cada resultado de un experimento aleatorio; es **discreta** si toma valores aislados $x_1, x_2, \dots$ Su **distribución**
da $p_i = P(X = x_i)$, con $p_i \ge 0$ y $\sum p_i = 1$.

- **Media o esperanza**: $\mu = E[X] = \sum x_i p_i$ (el promedio a largo plazo).
- **Varianza**: $\sigma^2 = \sum (x_i - \mu)^2 p_i = \sum x_i^2 p_i - \mu^2$; **desviación típica** $\sigma = \sqrt{\sigma^2}$.

Son las mismas fórmulas de la estadística descriptiva con las frecuencias relativas sustituidas por probabilidades.

**Juegos**: la **ganancia esperada** es la media de la ganancia. Un juego es **justo** si vale $0$. *Ejemplo:* en una ruleta europea, apostar $1$ € a un número
paga $36$ € con probabilidad $\frac{1}{37}$: la ganancia esperada es $\frac{36}{37} - 1 \approx -0{,}027$ € por euro apostado (la ventaja de la banca).

## 3. La distribución binomial

> [!practico]
> Un concursante responde al azar $5$ preguntas de $4$ opciones. Cada respuesta es un «ensayo» con probabilidad $\frac14$ de acertar, independiente de
> las demás. ¿Cuál es la probabilidad de acertar exactamente $2$? Hay que elegir cuáles $2$ se aciertan y multiplicar las probabilidades:
> $\binom52\left(\frac14\right)^2\left(\frac34\right)^3 \approx 0{,}264$.

Un **experimento de Bernoulli** tiene dos resultados, éxito (probabilidad $p$) y fracaso ($1 - p$). Si se repite $n$ veces de forma **independiente** y con la
**misma $p$**, el número de éxitos $X$ sigue una **distribución binomial** $B(n, p)$:
$$
P(X = k) = \binom{n}{k}\,p^k\,(1 - p)^{n - k}, \qquad k = 0, 1, \dots, n .
$$
- **Media** $\mu = np$; **varianza** $\sigma^2 = np(1 - p)$. (Por ejemplo, $B(10; 0{,}5)$ tiene media $5$ y desviación $\approx 1{,}58$.)
- **Al menos un éxito**: $P(X \ge 1) = 1 - (1 - p)^n$.
- **Valor más probable** (moda): el entero $\lfloor (n + 1)p \rfloor$ (si $(n + 1)p$ es entero, hay dos modas: él y el anterior).
- Para $P(X \le k)$ se suman las probabilidades (o se usan tablas o la calculadora).

**Cuándo no es binomial**: si las extracciones son sin devolución en una población pequeña (la $p$ cambia), si los intentos no son independientes o si $n$ no
está fijado de antemano.

> [!formal] Con rigor: de dónde salen la fórmula, la media y la varianza
> Cada secuencia concreta de $k$ éxitos y $n - k$ fracasos tiene probabilidad $p^k(1 - p)^{n-k}$ (independencia), y hay $\binom nk$ secuencias distintas, incompatibles
> entre sí. Para la media y la varianza, $X = X_1 + \dots + X_n$ con $X_i \in \{0, 1\}$ el resultado del intento $i$: $E[X_i] = p$ y $\operatorname{Var}X_i = p - p^2 = p(1 - p)$. La esperanza de
> una suma es la suma de esperanzas, y, al ser independientes, también se suman las varianzas: $E[X] = np$, $\operatorname{Var}X = np(1 - p)$. Que las probabilidades suman $1$ es
> el binomio de Newton: $\sum\binom nk p^k(1 - p)^{n-k} = (p + 1 - p)^n = 1$. $\blacksquare$

## 4. Desigualdad de Chebyshev

Para **cualquier** variable aleatoria con media $\mu$ y desviación $\sigma$, y cualquier $k > 0$:
$$
P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2} .
$$
Es decir, como mucho un $25\,\%$ de la probabilidad está a $2$ o más desviaciones típicas de la media, y como mucho un $11\,\%$ a $3$ o más. Es una cota
general (para distribuciones concretas suele ser mucho menor) y es la base de la ley de los grandes números.

## 5. Errores típicos

- Usar la binomial con extracciones sin devolución.
- Olvidar el factor $\binom nk$ (contar una sola secuencia).
- Confundir $P(X \le k)$ con $P(X < k)$, o calcular «al menos uno» sumando casos.
- Dar la varianza cuando se pide la desviación típica (o al revés).
- Pensar que la media de una variable tiene que ser uno de sus valores posibles.

## 6. Resumen

- Variable discreta: tabla de $x_i$ y $p_i$ con $\sum p_i = 1$; $\mu = \sum x_ip_i$; $\sigma^2 = \sum x_i^2p_i - \mu^2$; juegos justos.
- Binomial $B(n, p)$: intentos independientes con la misma $p$; $P(X = k) = \binom nk p^k(1 - p)^{n-k}$; $\mu = np$; $\sigma^2 = np(1 - p)$.
- Al menos uno: $1 - (1 - p)^n$; moda $\lfloor (n + 1)p \rfloor$.
- Chebyshev: $P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}$.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se calculan la media y la varianza de una variable discreta.
2. Qué condiciones definen una binomial.
3. La fórmula de $P(X = k)$ y de dónde sale cada factor.
4. La media y la varianza de $B(n, p)$.
5. Qué dice la desigualdad de Chebyshev.

## Siguiente

el tema `mat-distribucion-normal` (la distribución continua más importante, y su relación con la binomial).
