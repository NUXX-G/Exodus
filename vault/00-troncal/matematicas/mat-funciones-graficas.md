---
id: mat-funciones-graficas
title: "Gráficas y funciones: plano cartesiano, tablas, lectura de gráficas, concepto de función, dominio y recorrido, y sus características"
area: matematicas
trunk_level: 2
prerequisites: [mat-numeros-enteros, mat-proporcionalidad, mat-expresiones-algebraicas]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 12: «Tablas y gráficas», secciones 1 (plano cartesiano y coordenadas) y 2 (tablas de valores, gráficas, situaciones reales, interpretación, la función lineal). Apuntes Marea Verde, autores Concha Fidalgo y Javier Brihuega. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2012%20graficas.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 11: «Funciones y gráficas», sección 3 (la función como relación entre variables; tabla, gráfica, expresión verbal y algebraica). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_11_graficas.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 11: «Funciones y gráficas», secciones 1 (sistemas de representación), 2.1-2.2 (concepto y gráfica de una función) y 3 (continuidad, monotonía, extremos, simetría, periodicidad). Apuntes Marea Verde, autor José Gallegos Fernández. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/11%20Funciones%203.pdf"
hints:
  - "Concepto: una función asigna a cada valor de la variable independiente (x) un único valor de la dependiente (y). Se puede dar con palabras, con una tabla, con una gráfica o con una fórmula; las cuatro dicen lo mismo."
  - "Herramienta: para leer una gráfica, mira primero qué hay en cada eje y en qué unidades; para estudiar una fórmula, haz una tabla de valores (incluye negativos y el 0) y dibuja los puntos. Las características (crece, decrece, máximos, cortes) se ven recorriendo la gráfica de izquierda a derecha."
  - "Documentación: Marea Verde 1.º ESO cap. 12; 2.º ESO cap. 11 (sección 3); 3.º ESO cap. 11."
exercises:
  - id: cuadrante
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿En qué cuadrante está el punto ${{P}}$? Responde $1$, $2$, $3$ o $4$.
    variants:
      - values: {"P":"(-4, 7)"}
        answers: ["sha256:6be7342420d4b4d6a6871de06af426ace594f042ad8d5fa7d8bc219ef26d8afb","sha256:8c8dc334bbd8fd39c14973438122e91b4d93ed5e0400df8280fd653d56c76c69","sha256:c85790f48d456076f7fa74bb9c5ae8279bd403030101c1303119bd9f1e3deb99"]
      - values: {"P":"(5, -1)"}
        answers: ["sha256:78bb56e0fc1ff1c337ecd93904b3877c6b392388e9b72b707bf69356bf9f498c","sha256:890fd37aba5a03896ce9da36929fcd25656c9a12e77dedf0e857a3e27a735177","sha256:12e0ba29c33b88c147706e04e63b3c3eee41d077bc78826f90858c2a57858a37"]
      - values: {"P":"(-2{,}5, -6)"}
        answers: ["sha256:a267cd67f50a26d4d0e2a92c19267e79ace996264c5db23efcacc35100f6b773","sha256:3f34eabe25414d2c61feee71410999d91fed45bfaca89998f96ef14021ee7164","sha256:778eab7d31e847efd642ecd9d6032d6e98d6726f37e97f2b49b37b50f260df5e"]
      - values: {"P":"(8, 3)"}
        answers: ["sha256:4326619a8b432c77a4fe1f09a00cc0cfbcb6a8cda4081c36c1bf8d43972e93a2","sha256:f51428795b1c296f608ab31a327f4fb0a1a12f27f74f19a921fe43c9410602b2","sha256:39d96c1a01b03bd4f658b6a0780abe8c1dd4a79d459499b9e9495ad0af1b8629"]
      - values: {"P":"(-0{,}5, 0{,}5)"}
        answers: ["sha256:e0c5c8fc19e7278b20e7ed229fe851e2ef30dbe3d34c44126cf22a23d75f5537","sha256:f77da18821487418080fbe1146e2bea1821e3084456432e7966553f83a614f4f","sha256:ffd568bd373a7638b95b8aebb05c72bff814d19b0823cfc84953264901acb2be"]
      - values: {"P":"(1, -9)"}
        answers: ["sha256:b3da732825825a925ccec7e73bff46c0ae3a36d04707b0f94c5c836f4e28d8d1","sha256:ae898a4466b20102afa561065e45869a8e8d771cf3408200ef29598b5ac40f48","sha256:d2020b1499146d1d188756b6428045c3d756a4bbff744367bd581558731d4031"]
  - id: evaluar-una-funcion
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Si $f(x) = {{f}}$, calcula $f({{x}})$.
    variants:
      - values: {"f":"2x^{2} - 3x + 5","x":"(-2)"}
        answers: ["sha256:83f5d56b9e7a2d99f6fb3fcec5cbcdc5231fc22643ad7d4dceec7f5b33ed36f0","sha256:19b4ed55f31d69d8d6f181c3611a9ffded69fc9945257216516652d145413ed1","sha256:072ab4115616744eecf6df3979b558be9f8ea1c80a9a080f5cb56c88da69ca46"]
      - values: {"f":"x^{3} - 1","x":"3"}
        answers: ["sha256:30879f705ea8b8b2bec86e59b2de52eb1bf5fec94499aebdd295d879d495ad0e","sha256:969373f4eea20a9d9038b66b0f3c8bc38118d09a28625b7ebf3a68ad27a9c45c","sha256:c61504a057050ab7509f881cc171fbf87dfe979eef09f00945d1a01751edfcbd"]
      - values: {"f":"4x + 7","x":"2{,}5"}
        answers: ["sha256:add8feed087381deb5d0e4b5df689f5e2ea80a666945cfee5f60261ba05e815e","sha256:aeb6581eec24ff829f1781bb440014f77d4fa178ea28996ab2002c09f846199d","sha256:e8f847131382e1f04c4b537e0ea3afa1be6199621ddb8a4be3cf9d7a2455839a"]
      - values: {"f":"-x^{2} + 6x","x":"4"}
        answers: ["sha256:d7464f3ba81fe79f5d9aa71136e47b09e5ef53738e8bc063311bd47075ffae15","sha256:cad664e55a86b1685518153a4216cd3dc794f29a6927a7c4a8ce966a4de2d158","sha256:c3797269b3abc04d05027e2cbf97be242ea56e6acd1f89a35fd0fb85db0f8b4d"]
      - values: {"f":"-3x^{2} + 2","x":"(-1)"}
        answers: ["sha256:8b62bec07f9ce5684227360524250b7606a95e36a332c2eae478c980304a8b03","sha256:cc18ba33f7403f487824f99f5b8935850c468154d85d755d7bd51baf39bac7dd","sha256:ff37782c79e89228d3f48cefd059e1f26aa9d8d0dec4a1e15a292a2c2b91698f"]
      - values: {"f":"x^{3} + x^{2} + x - 4","x":"2"}
        answers: ["sha256:a6869d15da8f145df183bb4a6c652373a04b32bc9255414d06c1af4ef67e34c7","sha256:fbc2413e4a655f0dfdd5e316aeca2018e1b0c7fb2b28ac3d23aabde245c15cf6","sha256:3ee813ffde7bd6a5ca7e3da0879a24718b8205d83ad8e0467444a542e55623e3"]
  - id: es-funcion
    tier: 1
    prompt: |
      La relación está formada por los pares $(x, y)$: ${{pares}}$. ¿Es $y$ una función de $x$? Responde `si` o `no`.
    variants:
      - values: {"pares":"(1, 2), (2, 4), (3, 6), (4, 8)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"pares":"(1, 5), (2, 5), (1, 7), (3, 9)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"pares":"(0, 0), (1, 1), (-1, 1), (2, 4)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"pares":"(3, 1), (3, 2), (4, 3), (5, 4)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"pares":"(-2, 0), (-1, 0), (0, 0), (1, 0)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"pares":"(5, 1), (6, 2), (7, 3), (5, 1)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: dominio
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Para $f(x) = {{f}}$, {{q}}
    variants:
      - values: {"f":"\\sqrt{x - 5}","q":"¿cuál es el menor valor de $x$ que pertenece a su dominio?"}
        answers: ["sha256:6ad4c27a7357a32bd201d44766a87ece12a0a0bb8a3ee440cfdefa44fd847714","sha256:2803c0d921032bed2a6b5287f4f8a5b8f7f6a068ef8e2cb2e67efd141c6c012a","sha256:430ca2d4619ad65d84c45f4d9f7cf673bb24263a92360a7b36c8ce7e4f25978d"]
      - values: {"f":"\\dfrac{1}{x + 4}","q":"¿qué número es el único que **no** pertenece a su dominio?"}
        answers: ["sha256:1e9768824ac6239d06ecf1f87c890fb9d0b39fd7005023cc956373da184b3e85","sha256:6f5faa1ff9f818ebf174dc3542b5900a178aa26cddeaecbfdfec40889dfd9000","sha256:d79221c85ec40f3d2ca33d29b8d664e059b62b23a74beb99cbf03179c30e8717"]
      - values: {"f":"\\sqrt{x + 1{,}5}","q":"¿cuál es el menor valor de $x$ que pertenece a su dominio?"}
        answers: ["sha256:f3fce042d374313663beab899ddcbacf6d4601359d5bd622bb4b4da4a7476e58","sha256:00514506e54df52504159a9d0c990d58a761d53cf25bdfe5ad9b0a06b795abf2","sha256:ed19de841b89cc97c1ce120cef69b0a53da50d8d2cd9d9f63bfa7ccce60cb92d"]
      - values: {"f":"\\dfrac{1}{x - 7}","q":"¿qué número es el único que **no** pertenece a su dominio?"}
        answers: ["sha256:5a6dfaa1b505631a8b1d1e54e1908804552f928b74ecce233af80a7f50e46544","sha256:9e0c963a74c9209b58e1c43eb74ba5c23be958b3321e9fa0edb3a8275c5c7adb","sha256:797dfb633c13d2333fad524b59793c9356490e63d4e73a4c71bd7070e447466d"]
      - values: {"f":"\\sqrt{x - 0{,}25}","q":"¿cuál es el menor valor de $x$ que pertenece a su dominio?"}
        answers: ["sha256:a5d59838874ca882de8c5b590dd9250ed930b855dd3e6d3b9ae064b1796f05d8","sha256:be32677b8bad028dc44303b8123cbb9f69a835725c482a517be0885dd0499524","sha256:2b8a6b113f34d39fe7dd5c93b25860dd93f65f16f19a035705705121826659cf"]
      - values: {"f":"\\dfrac{1}{x + 0{,}5}","q":"¿qué número es el único que **no** pertenece a su dominio?"}
        answers: ["sha256:d501195a2c6e476ddb55da197b32d15c2742959f1c8eb263112af504bcb41c0a","sha256:77130c26fa4dcc365f4dcd938fb815389616952d9a9c5038006850029a49c280","sha256:e29ab57936d083734595b02b397160ba4933dd0fe2bfa12ec31f7350dfae6c99"]
  - id: cortes-con-los-ejes
    tier: 1
    type: numero
    sig: 10
    prompt: |
      La gráfica de $f(x) = {{f}}$ corta al eje {{eje}} en un punto. ¿Cuánto vale {{coord}} de ese punto que no es cero?
    variants:
      - values: {"f":"3x - 12","eje":"X","coord":"la abscisa (la $x$)"}
        answers: ["sha256:17c580a3510dd3f9272d5e94b06d7c24e24727f3199cbc11ffa7a8f5d47a171f","sha256:e83c3027c213e3635da7b0fb9109132f382097ec4cba422f6853a8016c33369b","sha256:26821b58838361b81dd4ad4e79588a02da5869d78f51de38cb4121f6dbe9a706"]
      - values: {"f":"-2x + 7","eje":"Y","coord":"la ordenada (la $y$)"}
        answers: ["sha256:b3a5a47c8f108336057239af18f172ec2d6cc3c6cb3c12b5e680a869cd034175","sha256:b89dd64433d81a7dc7b1cabef640e5b645f564997367aff3aca46cf49c94264d","sha256:302f0d64ac1ab92925d43ed1aed813ff89412ed9825c0a4eec82b31df2f9e476"]
      - values: {"f":"5x + 2","eje":"X","coord":"la abscisa (la $x$)"}
        answers: ["sha256:cfd1871e2dcd1ee79998314ce26a35c261cb6004a77e601dd7a048e7e0f5bafe","sha256:ae5d1159f2215993464f274fa4dff40e97fe15181768d65593745eba005d3dce","sha256:7e8d0829dd676f17a93b2a4866c51d2cc611c6f4137f14b20d30c5fd3ff20553"]
      - values: {"f":"0{,}5x - 3","eje":"Y","coord":"la ordenada (la $y$)"}
        answers: ["sha256:35f46dbb1fe93d8b2e010f8d716363919aecd9615376ec661d330ae03b62af6c","sha256:e6f7c9ccddb6effac2f6563852e6d1bc31a06a59f50c1cf550ef64358b6e9136","sha256:c1945244edd74f7027330f593306aa9925780188c896db9bae4d2a9a649f492f"]
      - values: {"f":"-4x - 10","eje":"X","coord":"la abscisa (la $x$)"}
        answers: ["sha256:bf0a8d2d53f0cab9ca262ab4a8e9b73197d2e217d52ab3dfd9ced821df82eae4","sha256:0208c8a868b108c2650724bcac72d2e9f500958984d1f0d6a8b58fbd1ff6795b","sha256:782346275e6f3abd0951b6fb68709d8b85e49058ce62ec49b898602ae90bb9dd"]
      - values: {"f":"1{,}5x + 4{,}5","eje":"Y","coord":"la ordenada (la $y$)"}
        answers: ["sha256:ef9195d8ba41bccc439e12ec3e2ba37879eab64213db673afd648dcfe55b0179","sha256:2d5a99b1d0e0b9516faa3608ebd574907d45acd0afb3a9ef99c638a903e98ec5","sha256:2a7ee7be903409abced804fe3e6190a116fce651917e806327834320075586fc"]
  - id: tasa-de-variacion-media
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula la tasa de variación media de $f(x) = {{f}}$ en el intervalo $[{{a}}, {{b}}]$.
    variants:
      - values: {"f":"2x^{2}","a":1,"b":4}
        answers: ["sha256:29961e99e847dadbbfd94d743a8026f8a0b46d35adf4f06eb8d7d9c513ac1dab","sha256:d8691e6c7148bd8479d090224743cc6a077e893dc3965167d14afdab2b19c523","sha256:006f829bd15b0686a934761129ea5babdbac39dcdad1857e618046ec425412ca"]
      - values: {"f":"-x + 3","a":-2,"b":5}
        answers: ["sha256:e5a871378916692dbf4618e50018e01ec972a92ae9d8e648d91124f6eca9246e","sha256:e1abcd63b57180ec3fa98738de149cc397913da2da85722f9c05c6755a493e5d","sha256:69df3fdff868e00d079e814c3fb241d2de30ae7e8c55f759af4d199b3cc24f22"]
      - values: {"f":"-x^{2} + 1","a":0,"b":2}
        answers: ["sha256:edff63f65de198127ff9ab10fdee5c22214691cef7cc1e76b2ba3c325660150d","sha256:9ac9c3514b825ea8ea5eece62dc9eedbcba837634b7f4db31916bb172ce97d67","sha256:eacb18037b78b722d1f500d0515b017b611bf08d0f05bd347c1103b54dfcf409"]
      - values: {"f":"x^{3}","a":-1,"b":2}
        answers: ["sha256:690de98e74ce0fd93a3fdd012cbf1d5e8724385140f15d5fb7e119588c24e69c","sha256:8339062f1a4e59a6be0389d7f1d9ea47f672fc68c0e0454398361aae007f96a9","sha256:0885e6e5dd5cd35c81513ccfb20276a67b8cc1f0b779bd2f1808d6307270c841"]
      - values: {"f":"x^{2} + 2x + 5","a":2,"b":6}
        answers: ["sha256:1938a575c81128e2a4a7f72bb31a6bfa31844c79eadc99091d2b12d1f1fd0ba4","sha256:e6d33317892ede14f6011fedac27b771b332ee289d973bafb1adfc7dcf5f9faa","sha256:2adb1b9be7a77f85a64d6b58005e37a4c9beda13a1642eb7543af477df7632f8"]
      - values: {"f":"0{,}5x^{2} - 3x + 10","a":0,"b":4}
        answers: ["sha256:886536406afdd018686a30b059423bcd18382aa3d42733f83aecfb96060624ee","sha256:09e4e25ba482deba4a34baa11675c0dbe01bc2ed33190fdbf16ea4c350fcb0a6","sha256:161d5cc8a7ebf1cff1b3bd4f4b56873fdcfcf6b4bff60ca9d30d8cf857b598a9"]
  - id: leer-una-tabla
    tier: 1
    type: numero
    sig: 10
    prompt: |
      La tabla da la distancia a casa (en metros) de una persona que sale a pasear, en varios instantes (en minutos). Entre dos instantes
      consecutivos, se mueve a velocidad constante o está parada. ¿Cuántos minutos estuvo parada en total?

      $$
      \begin{array}{|{{cols}}|} \hline {{t}} \\ \hline {{dd}} \\ \hline \end{array}
      $$
    variants:
      - values: {"t":"0 & 5 & 10 & 15 & 20 & 25 & 30","dd":"0 & 400 & 400 & 900 & 900 & 900 & 1200","cols":"ccccccc"}
        answers: ["sha256:fe1cd573c7b3cdb7767735a8d89b5413dd1d830dbb4091535033c750f3704c1c","sha256:0dbc69c697962a63393f718c71df4a11c6abd911d2ead72ee85a6540d07e543d","sha256:aaff7c5fae4ed410516a4f26904f8b0c6fcb353a16dd52001a93ed95c17f6992"]
      - values: {"t":"0 & 4 & 8 & 12 & 16 & 20","dd":"0 & 300 & 600 & 600 & 200 & 0","cols":"cccccc"}
        answers: ["sha256:bbbbaccea63cc7f83c0257b86ecab25b29dadeae26a0adb030c3e065c71322c3","sha256:fa302d3d64d64b047922cb62a49ab8850174996483a13d7f0e447f06ff025122","sha256:fb039ace4b1b4245daf023627c48653ecc2713607fceab2b512a65d71483f1bf"]
      - values: {"t":"0 & 10 & 15 & 20 & 35","dd":"0 & 800 & 800 & 800 & 0","cols":"ccccc"}
        answers: ["sha256:cac9c1e4afff33912e33f98b2c4511fb6d8611a7fbea7dc717503dced3d2ccc0","sha256:f83176e9405558773f2ed90c845de3c8862c24aa6c5e8059f9d6e260c42550e5","sha256:ab533fc7ec6e96addef1b4ed3373a0fd0facb8b9e06fe1d6d41becb6083c229d"]
      - values: {"t":"0 & 3 & 6 & 9 & 12 & 15","dd":"0 & 250 & 250 & 500 & 500 & 750","cols":"cccccc"}
        answers: ["sha256:c151c59e53eb267b9438c6606adf0b9780e420ce0f7428b043d49533d4a0ab12","sha256:f3e8fb6bc08b5116ecc8f27922b362b03100e9eb3aa99730724640b62edefa40","sha256:28f7d000792a135051b41df77fc661fcf1ac1978fca4a422a839a9c2803b639c"]
      - values: {"t":"0 & 6 & 8 & 14 & 20","dd":"0 & 600 & 600 & 1200 & 0","cols":"ccccc"}
        answers: ["sha256:6652bb8aaae376c00e48a1672ccd0e6e08abd70079201bc421624f63f4cb434e","sha256:6bcabcf64a7979bf72da130057644d2dbdc57dc3d8b5cbb4e3d01788b57b86b0","sha256:6c6238008563ad4fb45e8b21bfb6c0fba7d9436c3b963a920955eafe0574776f"]
      - values: {"t":"0 & 5 & 25 & 30","dd":"0 & 500 & 500 & 0","cols":"cccc"}
        answers: ["sha256:a411bedc9e128b86de908e79e15a22e6cda3a70f0d19d979d7cd6c4ff948040b","sha256:2f4ad7d189b48aa43d692fb57696f038ad6340d1bb0df08821b7616f10383558","sha256:cd94a61a5bc028c2378edfc31872829b55605ab6fdbfdd8b5af203036f462aa1"]
  - id: simetria
    tier: 2
    prompt: |
      ¿La función $f(x) = {{f}}$ es `par`, `impar` o `ninguna`? (Calcula $f(-x)$.)
    variants:
      - values: {"f":"3x^{2} + 1"}
        answers: ["sha256:c9d9d2c4be976b707a1acdcaba8495e7e0a7089579da6625a71083d5b0c6bddf"]
      - values: {"f":"-x^{3} + 2x"}
        answers: ["sha256:4b8aa96628373823296049530cee3c4cf7084c061623fbaed8404cd265753252"]
      - values: {"f":"x^{2} + x"}
        answers: ["sha256:308b666bfd216587c69de1a2b90c5ed164a22ca51866e6624a3ac9f0c7bfe560"]
      - values: {"f":"2x^{4} - 5"}
        answers: ["sha256:c9d9d2c4be976b707a1acdcaba8495e7e0a7089579da6625a71083d5b0c6bddf"]
      - values: {"f":"x^{5}"}
        answers: ["sha256:4b8aa96628373823296049530cee3c4cf7084c061623fbaed8404cd265753252"]
      - values: {"f":"x + 2"}
        answers: ["sha256:308b666bfd216587c69de1a2b90c5ed164a22ca51866e6624a3ac9f0c7bfe560"]
  - id: periodicidad
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Una función definida en los enteros es periódica de periodo ${{T}}$, y ${{tabla}}$. ¿Cuánto vale $f({{N}})$?
    variants:
      - values: {"T":4,"tabla":"f(0) = 3,\\ f(1) = 5,\\ f(2) = 2,\\ f(3) = 7","N":23}
        answers: ["sha256:6fed09b63390a5482895bb4f972d1da295861905a6e19956dc13ca4d83a51645","sha256:7fd6e5bce901373f9c1bac7650534fc8de05ea705d3069f7d8e867b402605d0f","sha256:0b7ea76d0ee96b90364790bfd0d55a0e970c65e42214816298d94a918685a31f"]
      - values: {"T":3,"tabla":"f(0) = 1,\\ f(1) = -1,\\ f(2) = 0","N":100}
        answers: ["sha256:f78246e2b912578e96e41bcbec4e892316cded2a87b01ba7772c5914cbedf1de","sha256:4eeef6e68dbf8ca53ac9dece37d3b625e039b203559335036c1a1e1e5c974520","sha256:3b3bf10ad13efdc263c514ad44564d5a18245101ceac801038c8ccf7976d3e0a"]
      - values: {"T":5,"tabla":"f(0) = 2,\\ f(1) = 4,\\ f(2) = 6,\\ f(3) = 8,\\ f(4) = 10","N":57}
        answers: ["sha256:1275a7a01ba4688567f6b3a59c25b819f7bf78b3dcd52e0c25e07a7cea2970c9","sha256:6885b8e80b9c36449935768ba9faf777e2265f9ef6d737c16057fa80e6890985","sha256:1cd81306e61ab901a3659073b124c5bb394965819a7f57eadcad9424d3d8c92f"]
      - values: {"T":6,"tabla":"f(0) = 0,\\ f(1) = 1,\\ f(2) = 0,\\ f(3) = -1,\\ f(4) = 0,\\ f(5) = 2","N":41}
        answers: ["sha256:87799b608990e32f87155823f7853e715196dc6bcbdcf1a9c870733e7a94c175","sha256:ee1daef664656c861d1dd8e8e5f4fade45335bae39792714d0afdeca6d143810","sha256:3c963f5b3fef2d784ec4ee174aa9ac06c67caaa449c3b38a5027c877aec2ef01"]
      - values: {"T":2,"tabla":"f(0) = 9,\\ f(1) = 4","N":1001}
        answers: ["sha256:627d98184028510f14a65d9a21ddbfdf5a419dbd6c8a21e1dab936f7669573e9","sha256:d951c963bf3197e4ad654159f28aff2356b0714d6d9a7989227f7425bbd56ad5","sha256:dd87c532e0c3dc3f593517f9f63f776a91756f8b4fd3b7cfee8de5a015ae4c1c"]
      - values: {"T":7,"tabla":"f(0) = 1,\\ f(1) = 2,\\ f(2) = 3,\\ f(3) = 4,\\ f(4) = 5,\\ f(5) = 6,\\ f(6) = 7","N":50}
        answers: ["sha256:d313775ec59d456bc8c3838becc8650cdff1f2981f8474656dac09b316325c8c","sha256:d3e5f4d5df6fad4d03adf8c7fd10dcc841495f6b466227b2102c4f86cff1b2b1","sha256:ac7d6cfee8bdbe5eb04ef1f927f8024c270a41029626b8b709a9f1da9ba7c1a0"]
  - id: tarifa-lineal
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un servicio cobra ${{F}}$ € fijos más ${{p}}$ € por cada unidad consumida. Escribe el precio como fórmula de las unidades y calcula
      cuántas unidades se consumieron si se pagaron ${{Q}}$ €.
    variants:
      - values: {"F":"4","p":"0{,}8","Q":"16"}
        answers: ["sha256:c661a3cb649fcecb000faf6818333f1d4756c5351a10e2513615ae8256a1038f","sha256:95badc4311bb90fc8180b9bff02ddbc80f94868550b28740e982b93350ff706e","sha256:7834d2054d6f5b008ea90e245edda87842d06008e5ddb88291e040c07170800b"]
      - values: {"F":"2{,}5","p":"1{,}5","Q":"17{,}5"}
        answers: ["sha256:6c30bc4c28efa01678aa0bae55d7714c2628b812f33e23dfaa85f1dc618b98fc","sha256:5daef2f79097974b7da9c0cc03c1174daf7fc3351182526347c9e634c89b9aaf","sha256:27a8242f652a26041865624f47a6eee4a26777e193ad4272e2e6d6747079126c"]
      - values: {"F":"10","p":"0{,}12","Q":"22"}
        answers: ["sha256:35035661a8bb62498180f2c60233cf9ef19f07bd9b7b6a84ca15f766dede5555","sha256:83f141a92391eb94b9674c89ca58a3ad54514e2452bf17d05428817542a08579","sha256:7faf0818fad3eda1d4defee6dec8ef49acf089b5e9b41cb33f3c289d5db60ca3"]
      - values: {"F":"3{,}2","p":"0{,}95","Q":"12{,}7"}
        answers: ["sha256:433b7f587e827729bc0dd73180fc025fc7702b8809925bea6fec9b0a4b305be6","sha256:244ab45c1c715e70e5e27e542d840b40e095a52e8483064820719b51314a2263","sha256:c74fc3a142bdc91470f678d2802ddf912578a42aeebf0434a2090129eb20065c"]
      - values: {"F":"0","p":"2{,}25","Q":"18"}
        answers: ["sha256:4c2b3d4e861b8822c81c3e57f083a10a3ed26e1398cfb7d1d4cccee014fdba7e","sha256:1f5d28767a5b59fa92478ebec3b7c1bd01f354568e0fa6c79fbf9c22b4881268","sha256:9d7114755740defd07ed67e6dfb2f4a16232c1721908ebe3b6482ba97eb5335c"]
      - values: {"F":"6","p":"0{,}35","Q":"13"}
        answers: ["sha256:2e2f5cb77be61bb2cf47929d0f7cec8e4a1ad6474bdb8347f3866fe25184728c","sha256:ed73c891ee58f2606ff8d79cd93e9992156cf2e196367163d5c2c921e2cf1505","sha256:df1fcc5e6017c04a5f7d7933d7c79a601d77c177c457693abee3651151e93868"]
  - id: valor-minimo
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Escribe $f(x) = {{f}}$ en la forma $(x - h)^2 + k$ completando el cuadrado. ¿Cuál es el menor valor que toma $f$?
    variants:
      - values: {"f":"x^{2} - 4x - 1"}
        answers: ["sha256:f02c36dc2e1b0e0b6fd3e88b2c18668bb4e869a22bc966f64295672ead38f6ff","sha256:09f5e44354549b0d05c52a5501027d522c9526ecd5065dca7ad607c53fbb36c9","sha256:a65e72e315a94e1a567efba3b8fe4584e90c5caa2f14c808fc7998a0d1efe53f"]
      - values: {"f":"x^{2} + 6x + 10"}
        answers: ["sha256:352e8f208e18f3cf2ac7b9c0afef260ff85f4aa23dc5a9eeafa0a2a1d4c6873d","sha256:235857cc3c7bb9298348eb7e9f83b9e78ab1ce0b97fd5358715f399346dbd053","sha256:f4b105239eef093c9c452eb74762d32eb968349ce74b83f8b647545a8a49ed85"]
      - values: {"f":"x^{2} - x + 4{,}75"}
        answers: ["sha256:bf4e8cf8697fd010a564de5afb9819471e820ad6d0907432948643891aae3864","sha256:7b0c767494575fb1c99485c364d3c2ef115530046260c393e1010e7e09563137","sha256:b7c269bd46be0a0c981151277a2dad46b0328d4ed21f24b46d31b5782044fb7b"]
      - values: {"f":"x^{2} + 2x - 6"}
        answers: ["sha256:ef6021b32669d5142bbed72f9b9cf9f9188518ca4a9d4e5dd1e7d4ff25b813ba","sha256:98613ba8c2d0b878c65445a245b679bfb77ca24159c00ba83dd59071f9a5ba5d","sha256:d477dd4245463b8d7b5e76cf7f8c308a26883f92276254323222b04fc5a98bfc"]
      - values: {"f":"x^{2} - 8x + 16{,}25"}
        answers: ["sha256:1c842c84ba4361a0dffa7f259de4ef4047ab3d3fe95bb680a3047957fe2c648f","sha256:5245b896ed08847e90d7b9caef289a60173653f8c1bccfd007f8897a550ee027","sha256:7684c9ff575c66bb158c31797c72b78bdb0b9003c70ff179be3a6bdf354a0d3b"]
      - values: {"f":"x^{2} - 12x + 33{,}5"}
        answers: ["sha256:77d3b15e50edb1a91c2e4af7e37bf939af71bbcc031f30e3bdd058b25a1390e4","sha256:be3d03fa222e0e8b5d2f18bda911a443ce9c3c6ea7c3d5df96932b2ab20e8b19","sha256:14d01b131a6c9491efed5c0968f44a2a5ead155ef072d6b249c6cf8d12c18002"]
  - id: funcion-y-sus-formas
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Un móvil cuesta $200$ € y pierde $30$ € de valor cada año. (a) Expresa su valor como función del tiempo de cuatro formas:
      con palabras, con una tabla (de $0$ a $6$ años), con una fórmula y describiendo su gráfica. (b) Indica el dominio razonable, el recorrido, si
      es creciente o decreciente y sus cortes con los ejes, explicando qué significa cada uno. (c) ¿Por qué una circunferencia dibujada en unos
      ejes **no** es la gráfica de una función de $x$?
    sealed: "gz64:H4sIAAAAAAACCn1TPY/bRhD9Kw/EFhJDCzrp7hwwuCq+BOmCIHFj2sBoOXL2QO7Qu8uDZEFN/klKI0kRuEs665/klwSz1J1hOEhFPgLzZt4HD0WUbkxOfFEXZTmjeVnie+poEyjW+PAbd7inTgK4Hxy/JbCHWS2XBv/88jv22NAdwazPeJAAOv0pH/5e4EfadFTDLNE0SaAzFczFhC6eZrQ6o8uM1md0kdHlhL7M4GoCVxlcPzCaReO/Ob0P/Zg3PZ+lOW50E55gvUxmgW/D6dets1RjGH2SCOqcZ2olqpDREwLbRHgzcpZS5TcrIRGoA98x7jkkZxWclS8a3/iynG3Uq2fSO+8Egd6Kp03HZ8UdI02PptkGsofVcnk8rJdHNA0NQ5Adrg/V8fqpyYZFzFqOw3h6F/FoeeRw+oPg+TUldy8VovOI7JNrZb7AD2wlBNdKDfNiWanul2aB24iWbWDr2Cdu/MxSS3mJ0jJ69hLnC3wtIalUrwtVqHluapjZxDQ3lX4flEfgvLOOuq+yM58OJR1KuPmo83hYH00FO5JvBXuCP2/21NKDeVbNu50i2I7eutN7X4GQjzU7gy7HEDgO4ltGWY4ep7+8s1KWMHuzwE+P6T1G9BAeg9ARrAt29FsO7K3L1dXgz01oKaNsNatnytr4gQKpuN7FXvIlM20133E/dFLB7F6t8AX2r1ZatSujPGaPG6wNeHp7sjbINGaHG1yaea0WcHwUuiiqIoyb4GxRvzgUNrjEwUlRF8/07qjepSAIPATWwMk68dORWwk9wcrPqiqxUk2Cinp1rD4h+863zqrKXNFKzZoKU6EXL0m81ms/ORZzqnFEdK+903+mlf8jv90NnbLrVEcYwsgb0gO7z1JR/96Mp3f/Ecnnvnzc9/L4L8zzpPCeBAAA"
  - id: r-abscisa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué coordenada de un punto es la abscisa?
    options:
      - |
        La primera, la $x$
      - |
        La segunda, la $y$
      - |
        La mayor
      - |
        La distancia al origen
    answers: ["sha256:79ef3ed919d93112df614d5f64567b2208d3312f9fe17140182d65312b8e5c4d"]
  - id: r-definicion-funcion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es una función?
    options:
      - |
        Una relación en la que $y$ crece cuando $x$ crece
      - |
        Cualquier fórmula
      - |
        Una relación que asigna a cada $x$ de su dominio un único valor $y$
      - |
        Una recta
    answers: ["sha256:61ebc22fc6afdec7b82d7cf2cdc3d0941cf6d3108de5a52027a1a149b54d6fb4"]
  - id: r-variable-dependiente
    tier: 1
    type: opcion
    review: true
    prompt: |
      En la gráfica de la temperatura de un horno a lo largo del tiempo, ¿cuál es la variable dependiente?
    options:
      - |
        El tiempo
      - |
        La temperatura
      - |
        Las dos
      - |
        Ninguna
    answers: ["sha256:4b9def32280afcfbb2f3afdc2152baeb5078f4e2d4966871993578dfee729e48"]
  - id: r-par-simetria
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Respecto de qué es simétrica la gráfica de una función par?
    options:
      - |
        Respecto del origen
      - |
        Respecto del eje $X$
      - |
        Respecto de la recta $y = x$
      - |
        Respecto del eje $Y$
    answers: ["sha256:0742861d9d0ccbd8521983b8df424bca53809e468deb6eb7177d6e30e128bb4c"]
  - id: r-creciente
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es creciente una función en un intervalo?
    options:
      - |
        Si al aumentar $x$ aumenta $f(x)$
      - |
        Si $f(x)$ es positiva
      - |
        Si corta al eje $Y$ por encima del origen
      - |
        Si tiene un máximo
    answers: ["sha256:e0afcc14b948fa0e934a8cd8041f4bc082720675b5bfdb29d2f1acb1718f9c2e"]
  - id: r-evaluar-rapido
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $f(x) = 2x^2 - 3x - 6$, ¿cuánto vale $f(-1)$?
    answers: ["sha256:9acef969b2a4318abd5d0d6a47fbaca59010b268974d277969235d64ae7f8f63","sha256:c160f442e9b9e430d5f61cbc8c461607cca13f5fc850278024a88cc5696211ba","sha256:8ba8bf2a06e0d6178b04fd22bd0e7679261c4e8ae124ebef2f8d94835e12e779"]
  - id: r-maximo-relativo
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es un máximo relativo?
    options:
      - |
        El punto más alto de toda la gráfica, siempre
      - |
        Un corte con el eje $Y$
      - |
        Un punto donde la función pasa de crecer a decrecer
      - |
        Un punto donde $f(x) = 0$
    answers: ["sha256:298b80ee6ae51f4479f30752e20b1d2aef0702478f37109f46881ad7aa73fd8e"]
---

# Gráficas y funciones: plano cartesiano, tablas, lectura de gráficas, concepto de función, dominio y recorrido, y sus características

La temperatura a lo largo del día, el precio de un viaje según los kilómetros, la altura de un balón según el tiempo, la factura de la
luz según el consumo: muchas cantidades **dependen** de otras. Para estudiarlas se usan tablas, fórmulas y, sobre todo, **gráficas**, que
permiten ver de un vistazo cuándo algo sube, cuándo baja, dónde es máximo o cuándo se repite. Este nodo enseña a manejar el plano
cartesiano, a leer e interpretar gráficas y a usar con precisión el concepto que hay detrás de todas ellas: la **función**.

## Objetivos

Al terminar sabrás:

1. Representar y leer puntos en el plano cartesiano.
2. Construir tablas y gráficas a partir de situaciones, y leer gráficas reales.
3. Decidir si una relación es una función y expresarla con palabras, tabla, gráfica y fórmula.
4. Hallar el dominio, el recorrido y los cortes con los ejes.
5. Estudiar continuidad, crecimiento, extremos, simetría y periodicidad, y calcular tasas de variación media.

## Qué debes dominar antes

[[mat-numeros-enteros]] (números negativos y la recta), [[mat-proporcionalidad]] (magnitudes que dependen unas de otras) y
[[mat-expresiones-algebraicas]] (valor numérico de una expresión).

> [!question] Test de entrada
> 1. ¿Qué número es mayor, $-3$ o $-7$?
> 2. Valor de $2x^2 - 1$ para $x = -2$.
> 3. Si $1$ kg cuesta $3$ €, ¿cuánto cuestan $x$ kg?
>
> Respuestas: $-3$; $7$; $3x$ €.

## 1. Para qué sirve

- **Entender información**: las noticias, los informes y las facturas usan gráficas; saber leerlas (y detectar las engañosas) es
  imprescindible.
- **Ciencias**: casi todas las leyes describen cómo una magnitud depende de otra (posición y tiempo, presión y volumen)
  ([[fis-medida-movimiento]]).
- **Programación**: una función en programación también recibe datos y devuelve un resultado ([[prog-python-fundamentos]]).
- **Base del cálculo**: todo el análisis matemático (límites, tasas de cambio, áreas bajo curvas) trabaja con funciones.

## 2. El plano cartesiano

> [!practico]
> Para decir dónde está un punto en un mapa basta con dos números: cuánto hay que ir a la derecha (o a la izquierda) y cuánto hacia
> arriba (o hacia abajo) desde un punto de partida. Es como el juego de los barcos o las casillas de un tablero de ajedrez.

Dos rectas numéricas perpendiculares, los **ejes**, se cortan en el **origen** $O(0, 0)$: el horizontal es el **eje de abscisas** ($X$) y el
vertical, el **eje de ordenadas** ($Y$). Cada punto se describe con un par ordenado $P(x, y)$: primero la **abscisa** (horizontal) y después la
**ordenada** (vertical). Los ejes dividen el plano en cuatro **cuadrantes**, numerados en sentido contrario a las agujas del reloj:

| cuadrante | signos |
| --- | --- |
| 1.º | $x > 0$, $y > 0$ |
| 2.º | $x < 0$, $y > 0$ |
| 3.º | $x < 0$, $y < 0$ |
| 4.º | $x > 0$, $y < 0$ |

*Ejemplo:* $(3, -2)$ está en el cuarto cuadrante: $3$ a la derecha y $2$ hacia abajo. Los puntos de los ejes no están en ningún cuadrante.

## 3. Tablas y gráficas

> [!practico]
> Si apuntas cada hora la temperatura y dibujas los puntos (hora, temperatura), obtienes una gráfica. Si la temperatura cambia de
> forma continua, tiene sentido unir los puntos; si son datos sueltos (el número de alumnos de cada curso), no.

Una **tabla de valores** recoge parejas de valores de dos magnitudes relacionadas; al representarlas se obtiene una **gráfica**. Para
**leer** una gráfica: (1) mirar qué magnitud hay en cada eje y en qué unidades; (2) localizar puntos concretos; (3) describir tramos
(sube, baja, se mantiene); (4) buscar máximos, mínimos y valores extremos; (5) interpretar todo en la situación.

**Gráficas engañosas**: un eje que no empieza en $0$ o con escalas desiguales puede exagerar o esconder cambios. Leer siempre las escalas.

## 4. El concepto de función

> [!practico]
> Una máquina en la que metes un número y sale otro. Si cada vez que metes el $2$ sale siempre lo mismo, la máquina es una función.
> Si al meter el $2$ unas veces sale $5$ y otras $7$, no lo es.

Una **función** $f$ es una relación entre dos variables que asigna a cada valor de la **variable independiente** $x$ (de un conjunto llamado
**dominio**) **un único** valor de la **variable dependiente** $y = f(x)$, la **imagen** de $x$. Se escribe $f: x \mapsto f(x)$. *Ejemplo:* si
$f(x) = x^2 - 4x + 1$, entonces $f(3) = 9 - 12 + 1 = -2$.

**Formas de dar una función:** con palabras, con una tabla, con una gráfica o con una fórmula. *Ejemplo:* «un taxi cobra $3{,}50$ € de bajada
de bandera y $1{,}10$ € por km»; la fórmula es $P(x) = 3{,}50 + 1{,}10\,x$; para $10$ km, $P(10) = 14{,}50$ €.

**Prueba de la recta vertical**: una curva del plano es la gráfica de una función de $x$ si ninguna recta vertical la corta en más de un
punto. Una circunferencia no lo es.

- **Dominio** $\operatorname{Dom} f$: los $x$ para los que existe $f(x)$. Con una fórmula, se quitan los valores que anulan un denominador o
  hacen negativo lo de dentro de una raíz cuadrada: $\sqrt{x - 2}$ exige $x \ge 2$; $\frac{1}{x + 3}$ exige $x \neq -3$. En una situación real, además,
  solo valen los $x$ con sentido (tiempos positivos, cantidades enteras…).
- **Recorrido** (o imagen) $\operatorname{Im} f$: los valores que toma $y$. Como $(x - 2)^2 \ge 0$, $f(x) = (x - 2)^2 + 1$ tiene recorrido $[1, +\infty)$.

## 5. Características de una función

> [!practico]
> Recorre la gráfica con el dedo de izquierda a derecha, como si caminaras por una montaña: dónde subes, dónde bajas, dónde está
> la cima y el fondo del valle, dónde cruzas el nivel del mar (el eje $X$), si hay algún salto y si el paisaje se repite.

- **Cortes con los ejes**: con el eje $Y$, el punto $(0, f(0))$ (si $0$ está en el dominio); con el eje $X$, los puntos $(x, 0)$ con $f(x) = 0$ (los
  **ceros** de la función).
- **Continuidad**: una función es continua en un intervalo si su gráfica se puede dibujar sin levantar el lápiz. Una tarifa por tramos
  o una división por cero producen saltos o rupturas.
- **Crecimiento** (monotonía): $f$ es **creciente** en un intervalo si al aumentar $x$ aumenta $f(x)$, y **decreciente** si disminuye.
- **Extremos**: un **máximo relativo** es un punto donde la función pasa de crecer a decrecer (una cima); un **mínimo relativo**, donde pasa de
  decrecer a crecer. El **máximo absoluto** es el mayor valor de toda la función.
- **Simetría**: $f$ es **par** si $f(-x) = f(x)$ (gráfica simétrica respecto del eje $Y$, como $x^2$) e **impar** si $f(-x) = -f(x)$ (simétrica
  respecto del origen, como $x^3$).
- **Periodicidad**: $f$ es **periódica** de periodo $T$ si $f(x + T) = f(x)$ para todo $x$: la gráfica se repite (las mareas, los latidos, las
  estaciones).

**Tasa de variación media** en $[a, b]$: $\dfrac{f(b) - f(a)}{b - a}$, lo que cambia $y$ por cada unidad de $x$, en promedio. Para $f(x) = x^2$ en $[1, 3]$:
$\frac{9 - 1}{2} = 4$. Si $x$ es el tiempo y $f$ la posición, es lo que se avanza por unidad de tiempo en promedio. Es la idea que, llevada al
límite, da la tasa de cambio instantánea (el tema `mat-derivadas`).

## 6. Errores típicos

- Cambiar el orden de las coordenadas ($(x, y) \neq (y, x)$).
- Leer una gráfica sin mirar las unidades ni dónde empieza cada eje.
- Pensar que toda relación es una función, o que una función tiene que venir dada por una fórmula.
- Decir que una función es par «porque sale $x^2$», sin comprobar $f(-x)$ con todos los términos.
- Confundir el valor máximo (la $y$) con el punto donde se alcanza (la $x$).
- Unir con líneas puntos que corresponden a datos sueltos.

## 7. Resumen

- Plano cartesiano: ejes, origen, $(x, y)$, cuatro cuadrantes.
- Tablas y gráficas; leer ejes y unidades primero.
- Función: a cada $x$ del dominio, un único $y$; palabras, tabla, gráfica, fórmula; prueba de la recta vertical.
- Dominio, recorrido, cortes con los ejes.
- Continuidad, crecimiento, máximos y mínimos, par e impar, periodicidad.
- Tasa de variación media $\frac{f(b) - f(a)}{b - a}$.

## Repaso: lo que debe quedarte dentro de un mes

1. Los signos de las coordenadas en cada cuadrante.
2. La definición de función y la prueba de la recta vertical.
3. Cómo se halla el dominio de una fórmula con raíces o denominadores.
4. Qué significan creciente, máximo relativo, par y periódica.
5. Qué mide la tasa de variación media.

## Siguiente

el tema `mat-funciones-lineales-cuadraticas` (las rectas y las parábolas, las funciones más usadas) y el tema `mat-estadistica-descriptiva`.
