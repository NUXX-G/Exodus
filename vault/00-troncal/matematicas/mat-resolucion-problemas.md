---
id: mat-resolucion-problemas
title: "Resolución de problemas: las cuatro fases de Pólya y las estrategias que funcionan"
area: matematicas
trunk_level: 0
prerequisites: []
academic_sources:
  - "Salvador, A.; Garmendia, Á. Matemáticas 1.º de ESO (LOMLOE), capítulo 1: «Resolución de problemas», secciones 1 (fases), 2.1-2.6 (estimar, experimentar, hacerlo más fácil, diagramas, problemas parecidos, notación), 3 (emociones: ¡eureka! y bloqueos) y 4 (juegos y problemas). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2001%20Resolucion%20problemas.pdf (CC BY-NC-SA)."
  - "Pólya, G. How to Solve It: A New Aspect of Mathematical Method. Princeton University Press, 1945 (2.ª ed., 1957): la lista de preguntas de las cuatro fases y el «diccionario» de heurísticas (trabajar hacia atrás, problema auxiliar, generalizar, particularizar)."
  - "Engel, A. Problem-Solving Strategies. Springer (Problem Books in Mathematics), 1998, cap. 1 (el principio de invariancia) y cap. 2 (coloraciones)."
hints:
  - "Concepto: casi ningún problema se resuelve de golpe. Primero entiende qué te dan y qué te piden; después elige una estrategia (hacerlo más fácil, una tabla, un dibujo, ir hacia atrás…); luego ejecútala con cuidado y, al final, comprueba con el enunciado."
  - "Herramienta: si no ves el camino, prueba casos pequeños y apúntalos en una tabla ordenada; si el problema da el final, recorre las operaciones al revés; si hay dos cantidades desconocidas, prueba valores de una de ellas de forma ordenada."
  - "Documentación: Marea Verde 1.º ESO, cap. 1 (secciones 1 y 2); Pólya, How to Solve It, la lista de preguntas del principio del libro."
exercises:
  - id: proxima-revision
    tier: 1
    type: numero
    sig: 6
    prompt: |
      El cuentakilómetros de un coche marca ${{r}}$ km y las revisiones son cada ${{I}}$ km (a los ${{I}}$, al doble, …). ¿Cuántos
      kilómetros faltan para la próxima revisión?
    variants:
      - values: {"r":"37\\,410","I":"5\\,000"}
        answers: ["sha256:6791bb41dd156fab7b7eb97fc846f07d386604754a5b2bf812f8c2500aa3f8e2","sha256:79f98cf294e80bafcf03d443c87561a5a4e3f0cb09f649e815c918ce5f007eb3","sha256:d4c9b2c2a662092005e5265599b3ee4776652289f18408bcb8d9738be60c4142"]
      - values: {"r":"12\\,950","I":"3\\,000"}
        answers: ["sha256:807ab50002b8586fcb4c06980547ba5967a745bf00f839b25a450f70827df563","sha256:860c2a759d5da21f5293790e4a133afa695390798c70e43797a95244f856a3a4","sha256:26bf8d157785ad891b3cc8e71625f7ca661fd9417e907354c125971f9d22a9e7"]
      - values: {"r":"99\\,150","I":"10\\,000"}
        answers: ["sha256:c75c46eb7fd0af00f9997b95444b47f9c32a24bc84204f4f2a83018bf45a89f0","sha256:5b9faf9f70faec4ecb4c2ba032dc9d9d43de0eee37be40c1b5f37fd77e4f5fa1","sha256:7ff23a0d3866f7c1c9e8ecaef3ccdc9684d1d0a01a29d6a93d36e4da6f1a9b20"]
      - values: {"r":"45\\,000","I":"7\\,500"}
        answers: ["sha256:9acdec7c97d684709c5a82a7a69885947aadb55d738ad18248af1ab9c6e4b196","sha256:187a606abceee5534a89fd52e0f4248992414a363b0cf0976a18b79559d1c984","sha256:fc8153446735b7ed41a9792310d2543f71ec9094ee52ef4f74da410fa4de7866"]
      - values: {"r":"8\\,120","I":"2\\,500"}
        answers: ["sha256:905046cba445734fb4455533b2d6312e6d3d20471de7eea9cf0145917c327cbb","sha256:2b2dc8fae08fa48d4129154505361604f512430215484ab93ded713d98e90f99","sha256:ae3fddf3d6032a0fd0afcd44b074709e68a79a15ed5a1948c614e50cb346d7eb"]
      - values: {"r":"63\\,500","I":"15\\,000"}
        answers: ["sha256:3ff8a74b21da0ab07024c810a74dd0a9d0810ef0c53275967b06556575172d45","sha256:1ba2a7005f34bb4ccefdc73e02fbb2ed3ea4ee453b66bf7e5839a880df9c3129","sha256:a249303355d6c58ff75ed4c2d34eccb2ab9667a627b2df8d75a1c4ddf3bce0d3"]
  - id: valla-de-la-piscina
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Una piscina rectangular mide ${{a}}$ m de largo y ${{b}}$ m de ancho. Se quiere rodear con una valla que cuesta ${{p}}$ € el
      metro. ¿Cuántos euros cuesta la valla?
    variants:
      - values: {"a":12,"b":8,"p":15}
        answers: ["sha256:e64fae85111166d1e137a2047d73404bd6426e841328f1c377efb0871ee71c5a","sha256:7daf8e6540e2a41d80b130abae17dfa8894cfd02cc88a71282f022857d8d01c6","sha256:3971a1d0301ff40b1bdbd5924e1a3d254867a01de2c5049fe680110e15d3b0ad"]
      - values: {"a":25,"b":10,"p":9}
        answers: ["sha256:7389707598c7c1bc3314351a0b8d505f9b23cd20873e4f7e1c8b49bb98b505d0","sha256:4e79b2261ccc4c6fd94dfd80b35d02ee12a77b9c8da411361bda434cb03d6d58","sha256:4b55f8a2d8a9b0772bf30870bba4da4e4a911db8318566055ebd749228eafe28"]
      - values: {"a":6,"b":4,"p":22}
        answers: ["sha256:243107446843a774835c78c16fb9ec52afa699bbdc7bb6179292b55300fdc394","sha256:3cb4bca38cb86ecaba0dfad5935bfdde6f039de4d8318ddf053562dcb4795c17","sha256:dc721e2f9ef1f285d6c7ba4e097711494bac2c3a89cb91f3fb4c4d3e1877c703"]
      - values: {"a":18,"b":12,"p":7}
        answers: ["sha256:1086a4a08367304d1098321b81357557c2e96c197890b0fbfe44f11ecce0be0d","sha256:7c22bd3879581291dfbb6b6901e0054baddab9eba101045f0f0ebb76813745be","sha256:0e9134d06bb14125a662c3f2b6713d359b3f9364225b5dfa93cf00d4621ddd21"]
      - values: {"a":30,"b":15,"p":11}
        answers: ["sha256:fe3907009e50efc43c1e36d68d793e336a36105ab5fa8650011fa90f7b8945db","sha256:c57345e6f2508961ea6953acf43738eb569d31fda20df8c8d3c48307cfe1ef22","sha256:fc9e32cf7d4289fbb8ab66c9239aa0b5ec6b5a1bd5bcaf9d240abb2026cc371a"]
      - values: {"a":9,"b":9,"p":14}
        answers: ["sha256:cfe85cea35e7e93c998061fe6943ca38b2bff9082f58cf26d471422b43ff6ed5","sha256:a289b16c4e41f2b3beae9def37c1dce6753758bd282f2e796a19e48b47b253e0","sha256:932540673b8850b72be71d5a12bdc0cbdf7fd1937969fc127045c21e9fd1da4f"]
  - id: billetes-del-viaje
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se apuntan ${{n}}$ estudiantes a un viaje. Al pagar, ${{k}}$ se dan cuenta de que no llevan dinero, y los demás pagan sus
      billetes poniendo cada uno ${{e}}$ € más de lo que les tocaba. ¿Cuánto cuesta cada billete, en euros?
    variants:
      - values: {"n":30,"k":6,"e":4}
        answers: ["sha256:d7702568d3c02d9fde77792d38fb46ecf6ea7d3923a24a165cc7b1054ae7d8f9","sha256:9bf619722cd88fff9bbf4191bc20b2117c17391de666bcaa780d677ef3fc012a","sha256:0f891d9f555b3040144e8c366513f52021131edc6ef3f096ba92568fa9b899b8"]
      - values: {"n":24,"k":4,"e":3}
        answers: ["sha256:3059db4844784008d9033e508c91b9fc93001284262e2101f6036a4dd29bcfad","sha256:0cf569c5e10f74c5a1f6628271e328da7412cd93487fd4368e9c8b42782d8bec","sha256:b8dade6eba6d1c61d617a0ed56afddf0229cee36486eb468e2e2372628d59895"]
      - values: {"n":40,"k":8,"e":5}
        answers: ["sha256:843f77ea6b77039b406dc6ec47960139c65d00c877d4be29c2c16c7123cb5702","sha256:2be5ccff0efe5772f9cf89b5bfa4713c7b26f581248e9b4f6cfd7c2ff2a840c1","sha256:6d4f8901f0520d4e1e1442b33951399f76651051517cea97602af48def7d445c"]
      - values: {"n":18,"k":3,"e":2}
        answers: ["sha256:65e2b44607d06481b07f28ce0e5eb06c12d609a0323f75a8792d86a659d24f2d","sha256:17872d3abf32bb2817db32191915bf883203e7085a5793e28ea18e7d1a8a357d","sha256:bb47f880ed20ddce10801bc807bc5f705fc7b978d3e135a7a9e88ca4e486b9b4"]
      - values: {"n":35,"k":5,"e":6}
        answers: ["sha256:8395959484c1d1fbfc6b0769b56f4e29fe94e8ae37e2ccd6f494efb2211bc2b1","sha256:1dcd94846769c51f2652f687dc0863787f4f34fd14a9ad2183c498d188a867b6","sha256:9c7ea27cb327e75864b7caefe46e133dfce51577f836128a8ca24a72fdef6540"]
      - values: {"n":21,"k":7,"e":4}
        answers: ["sha256:ab67fafc9339d44267fed0825174af1554720b7c01ebba1faa2634f924420b8e","sha256:a91a6575c9b8ddbc47d507f394b468d3293ab023e452fc07e393c942a2c35dce","sha256:7260aa51a671d92a8b27d19f928a7daf4f9bef2b2184c70373af88ccb66cd1ca"]
  - id: estatura-misteriosa
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una persona mide ${{a}}$ cm más que {{frac}} de su propia estatura. ¿Cuánto mide, en cm? (Haz un esquema con barras.)
    variants:
      - values: {"a":64,"frac":"dos tercios"}
        answers: ["sha256:3583d8b36470fb88d9a6b4f79eba335fda959e24eb98b62b5e5dca8debf0392d","sha256:8acc0a6d4ec4af027b571d5c3312fa2f150482acadd3c6400c938465baf939fc","sha256:ceac585a32390cb3b3baca5f894448844232cd112c8de3ab0d8b8756018014a1"]
      - values: {"a":85,"frac":"la mitad"}
        answers: ["sha256:56371b185f54435571ea63dac1e4dfd4a45cf35f5cda44537f5ad0f908d21ace","sha256:a51490afc08c3f97b004c19c905f7928309767be31dbff7a310bc20d905de4eb","sha256:4c1a0040828045d1a9d2ed0338cf4d8da84090e4378a07e8d2759cad32169e3f"]
      - values: {"a":42,"frac":"tres cuartos"}
        answers: ["sha256:a926f3099fc752c40865315b335d7d69f833956cb30118dd630878592ef36736","sha256:4898dd790fbf9d0eb508ca3ec7e3981911683f92448931190062dd3d82f1cb5e","sha256:7418c74d50d750b6cc95c157155f66d5bd41640033175989882ad1ec1d145c7c"]
      - values: {"a":100,"frac":"un tercio"}
        answers: ["sha256:ac49cbc4e304ba91f27db4a7cf2f776e38c47d03e17540cb0638b6775e2ea697","sha256:2f28129d78ada6338e5ba1be9376bb8811f51c52987ef9323416454a2ea44296","sha256:b3cc6fd4c38dcbb5c9dff6d65feaecfd68655c5183efcab02b06c397e8d697ed"]
      - values: {"a":35,"frac":"cuatro quintos"}
        answers: ["sha256:8c3e11dc3eaad3f7d5134291f06750f7a738fdead165b6d612bfd52740c49661","sha256:4396e94f82f793bbb60212002776ee7111ea1f27fd58c54643c9cef67382ea34","sha256:1f95d87875d0230be5f8949fa0740d9ae22a175cab7e486a41537287c9be66cc"]
      - values: {"a":111,"frac":"un cuarto"}
        answers: ["sha256:02bebc04c616b704420c908d4343d48c21bb1c5b8052227e3d815418ee987f1c","sha256:b8737f10cd95b6e05e59b0b13270ac556ef75cef0f84c39c2d3d9ce29bd02bc9","sha256:5f020cc2e8e570637689eae8eb98c8ef64ab0a810075f99d6d18e7f87f476663"]
  - id: torres-de-hanoi
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En las torres de Hanoi hay que pasar ${{n}}$ discos de una aguja a otra, moviendo uno cada vez y sin poner nunca uno
      grande sobre uno pequeño. ¿Cuántos movimientos hacen falta como mínimo? (Empieza con $1$, $2$ y $3$ discos y busca la
      regla.)
    variants:
      - values: {"n":4}
        answers: ["sha256:6ef46c0dd285d0fe12bf6153b3d7985d2194e6d29c303f3420fdfcc444ee73bc","sha256:e0316304e1ded771b606a52cf190195f55b9f1ab242ff4a33632a68f5e5e5133","sha256:0ddb0315b217e0bb275ab049e0e7b1304b366793e7091dbbc33a8dfb280c4508"]
      - values: {"n":5}
        answers: ["sha256:681c0a96ccf912aff638058f33ab6a2ae8e1424a2edf560b760a8f7e0a9bbda6","sha256:712b9da29776beaecbb576820dcaaf4d1eb1d228e2ce61a518bd25707dab6b40","sha256:885cd22161b82e92fc32ace0e8bf56ecc37d000e3853216ae68c0847c4a492e4"]
      - values: {"n":6}
        answers: ["sha256:804e6439ebffc4bc1429d690f04f18bf86b8118bea94ec34474b621a10d64540","sha256:99ff7cb66b9d865bec78d583327841383cfa5fdf19f43da76b4b3f4eaf299e14","sha256:462fd761109a1f8894f17874f3082c0206c58dab257058f5e1fac169ba23f51a"]
      - values: {"n":8}
        answers: ["sha256:d84aeb7d6267947b9d7f91c362f57f173d65618d3f0bc3881d00a9b6575088b8","sha256:634a5cdf17b433a14215f9ddd6a49e8416e631f39846d1d546ed6bd6eb478764","sha256:bf3c22dcc717d76023e70c0a06dabe44cd415ee49bd637dcd23d796dde69248b"]
      - values: {"n":10}
        answers: ["sha256:d0d514ba2c724c454f846e026ad8878cc926578cc4c0ebbb7d7e2430f7e0bff8","sha256:8fe6578f3c281bd10af9a8195572c02cfc3788232e78048735398b462bc4e087","sha256:17f3e5fcd83d35bb6db9f749f33e059a6309d96a6ad0152c6debd01a25812f05"]
      - values: {"n":7}
        answers: ["sha256:954787f08aa52d2f888f005c02b06c510b6e96a7fc9848c4933d971ad3b5c317","sha256:a91728c34e17e66d8956a92468bc295c9eff4a1ffcb63bd05a03e6af50def3e9","sha256:3c57c84bb6246684cdd6263fe8a70ed192e35ccee113d0274bf30b361272f859"]
  - id: cuadrado-magico
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Con los números del ${{k}}$ al ${{k8}}$ (nueve números seguidos) se forma un cuadrado mágico $3\times3$: todas las filas,
      columnas y diagonales suman lo mismo. ¿Cuánto suman? (Suma los nueve y reparte entre las tres filas.)
    variants:
      - values: {"k":5,"k8":13}
        answers: ["sha256:af38b29252569518a3140e7bfe87625892136cf22ba1ca692c4c684fb6de12d0","sha256:0694a613891290de72805c893a4d9a311c7dd847e33eee9997d835f574b422d7","sha256:9fe90e9bf76de5b381da0c7cdbe36fb8c255b9d15f666064b3dcf25933846678"]
      - values: {"k":20,"k8":28}
        answers: ["sha256:04a3d1604c84ae38113e3f32e7aed731c038774d00fcc1471439ed24315e0c32","sha256:17be7035e2780b773cf7a690b5825880022bf623b55c211eab49574b76b66eda","sha256:763a0d4363af8572eee7287e3880ce212004f33f4fd155149df33bce391edfdf"]
      - values: {"k":7,"k8":15}
        answers: ["sha256:f8567c7a4e5603bec60be092591193a5a0bd424cb9cce49f05e304415d6cde1f","sha256:0af2fee5d52ad896ca1674782253dbb87c3ade947bfff8f83ceaeb5901f83d66","sha256:20555bf8bc3f83805e1dd403295d6a7759a14c3b262b57e89f8d23aaceabea70"]
      - values: {"k":11,"k8":19}
        answers: ["sha256:6acbf0d7040c6de91ab46909a808c0cd440edb9ef3f045681e11633a9b5a04a2","sha256:0a6990337ad96ee8587339b4c05878b6bcc65a2009cc439e1f09dc4e1ba1d471","sha256:b1a092e73dba902d700e0fd2554c3f18341b2e6b39708b631a9167c4d621e418"]
      - values: {"k":100,"k8":108}
        answers: ["sha256:47a9dc47bee2506800695567aebbcaf374f80763dc2c44a1fe483cc18da667e1","sha256:8060a1065c140059e9256cb8a5dc85e0a6c5286fe21f480631cdf7198c74f32d","sha256:d26480ba7fd671e3a023f16dad8bd0fe12b8cb2dfc573ad8bbd2ba301ef96b25"]
  - id: hacia-atras
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Pienso un número, lo multiplico por ${{a}}$, le sumo ${{b}}$ y divido el resultado entre ${{c}}$. Me sale ${{r}}$. ¿Qué
      número pensé? (Deshaz las operaciones desde el final.)
    variants:
      - values: {"a":3,"b":6,"c":3,"r":9}
        answers: ["sha256:8bdce9342864ec48ee4beac3f252c8758731adb588b97efc0658793def7e7874","sha256:ab90208aa5cbe90d06a174bfeb275706e486f460987878f706aa6f52abbfb9cf","sha256:8d9d2ec72effbfb45f8a1da63b9b175dd4092d4c838f40ab2593ee6e63007e7c"]
      - values: {"a":5,"b":15,"c":5,"r":12}
        answers: ["sha256:3ea6c654c0c834b5b9a30455edcb14962ee9639d1fd56efb66ad472c23c5468d","sha256:dc681d9aea1e74c860649aac44d6a9760798ab2ef42f8b2c7d9e14e79cb7b288","sha256:b27485391fdb0f860f67c279235d97da1f402c4567799c9249ce103212b58af8"]
      - values: {"a":4,"b":8,"c":2,"r":30}
        answers: ["sha256:ba85c413fef0b8b68d597fd2e63dffb8c5b1ee8955d2bf91149f44da582ec239","sha256:ffbf924d4bd36a501ee79e3188a3ae0395bfbe83c9df3ea3eb659140fc962d1e","sha256:3d4189776ef4fd8b5862a70f28754c95717c501a0ea4eb60c1a1a64bf11bb2fd"]
      - values: {"a":6,"b":3,"c":3,"r":15}
        answers: ["sha256:e6a819fda072d8cbe91206faebe9904abfe98c9df42884ea42ba6d409b4c3ae6","sha256:66c40234a9c76dcadf25c91cceb63545f6b14e2a427de4bf74b8424744b2f1d2","sha256:cb2754ff7eedb84f1bf6040fa8899bbaac3599991bf9b74265ee563fd4a55677"]
      - values: {"a":2,"b":14,"c":4,"r":11}
        answers: ["sha256:7f4f29236f5abdad50cf512a8f1d2e9ae85bd492ab48652dc1508823d2d2efdc","sha256:201d6adcb2b85e13bdea526828b2f6bab9cf7e9b33e231677c60e8061052d77b","sha256:756a9d1121819b61663c5716dbe03a3acd5be666c73b0356afd59fe43c234d42"]
      - values: {"a":7,"b":7,"c":7,"r":15}
        answers: ["sha256:ba31b5bc95bfd5d532ded364b8b9853864ef30587cbc35eb3deec2bf6ff45261","sha256:40c27289d51afcf6a6bbad712b64d6bbb1213f444562f6f0a42418d5e90b056c","sha256:2be0e285237eae199a5fb92d62c67429d31e049f3daf443ed871e7ecb133f3f0"]
  - id: cuadrados-en-una-cuadricula
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos cuadrados de **todos los tamaños** hay en una cuadrícula de ${{n}}\times{{n}}$ casillas? (Cuenta primero los de
      $1\times1$, luego los de $2\times2$… y busca el patrón en cuadrículas pequeñas.)
    variants:
      - values: {"n":3}
        answers: ["sha256:92632674eb32e974d915f975803dee15d9259b1ec82e7c821da1fa4ec31f73eb","sha256:f6a5693b7a8dbe1736e887a178683f864ac80c02fb020ba5143f7a78a96882fa","sha256:acc3fce05938e81c35c4e7f58a37dfd66f0e2aef7dad49fdc8d93b3c631a3be0"]
      - values: {"n":5}
        answers: ["sha256:3d294fb7c48b7e26dd349968eedffd0c8c768455a06ad37a1f2d88793fdf4169","sha256:4d20761fa3eed854316ad0a20b458b5c1b9ce9316c268f00d828f58a76208b18","sha256:4f7a5c801be199becad4f097b9a725f91fd5769746cc22d686ffda205d5b8691"]
      - values: {"n":6}
        answers: ["sha256:093541f6d084f06ed68a0d9801285d645914a599b4913ccf3e634c782627614f","sha256:b967887a94e49c62f09dfaf98a8361620758b27cb4ac0064e01d3311af043b2e","sha256:2c2f219581ef81b89ae0642cc7e183004b83ad15ac92e8d1f961b04bf76da05f"]
      - values: {"n":8}
        answers: ["sha256:404d7245ea52cfac257bc1e258665cbcff9849161b34591a7d809461d1cb5f44","sha256:c3e811fecf671ca56335f8812caa3ca2510bce23ff94d9ae7e322f33c0faf10a","sha256:81f16f58c546a42824fca9358597c0830d2bf1d9999c256a76c867ef684096f6"]
      - values: {"n":10}
        answers: ["sha256:4f6873a725cd858c545fe978aeefba535c5d06637fe948e4575fb85b104d6355","sha256:abcb1f8002ba32adf294f13f34ceb57e644fd42eda2216d5ae62b2c48ddcaebd","sha256:2b512c13758bcd9182397acf3d49d0bac73a656f781d7b7d1fab06274d04cd1e"]
      - values: {"n":4}
        answers: ["sha256:2813d0ea6043da4343254ba2ed4262f795f55a81220114755a5b31fabc870418","sha256:7e8ef9f3dbcf465b1c6b697bd91f6ac89b25fd53b850478e0119a3be9c259932","sha256:2f568f460d276c3e1f823fec8204f2fa2e9190f732252d756a4fd23144da17d4"]
  - id: palillos-en-fila
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Con palillos se forma una fila de ${{n}}$ cuadrados pegados (cada dos cuadrados vecinos comparten un palillo). ¿Cuántos
      palillos hacen falta?
    variants:
      - values: {"n":5}
        answers: ["sha256:cafa890e8132ace9b1a8ebaf8ca48fdecf2e7ca5e26197a47bb3cc0eebd89bab","sha256:715a8232b2a928838da5571228ddc43309b0af46031fdac630a1e4470f1a8543","sha256:3b7fea13cdbf3b14f0ff1d6aba0a9eccbc671fadbfd535ad2fef13070c916c53"]
      - values: {"n":12}
        answers: ["sha256:40efa5991ebd9788e64b6639692c1a46eb28eaf62b1b0835af2810049bdcede2","sha256:5c15b7256b545dc401878daac098f7223d7eaa2c4c3821645a52ac8aa18a6606","sha256:af8ed22eb9d49b1d67a363dde11db8309bea038303ffef4005ecc80ada689016"]
      - values: {"n":20}
        answers: ["sha256:0884b2942f8876b905c78ab1b2104e4e65bb7c618f08f2d49987a05086e799f5","sha256:7b9c48c0e455c61f66a6c751c033ec983ff0bb67b19cb056c8243c699c29c087","sha256:a11c392d2db2ba4d4bfa2a6fa5bc83def31f5db7bb3fbaf86358912e58e8dd23"]
      - values: {"n":50}
        answers: ["sha256:263b9b28805b083578b13f2fadf0d5f4896b17546b4881cc2b1e469c6dfcee9c","sha256:e2f16a5d0a37528fcb6534a70587530840ad9a1890da211bf8a66f273b373167","sha256:8999208edb69bcfbb7552d8f8149aa2ab556d47d90d539150195b21a7ffad960"]
      - values: {"n":100}
        answers: ["sha256:711e9ba8f9d887993fac85effca4cd20daaf871057c3d87941eb6ff4c9bf1317","sha256:a3dce93b5409dab3e1882591699b3f1197737ab8ade95f55dec4402605fe7a67","sha256:516c1c301be3a1ed6d0da9187f1a292102702b6b04e6d14fb261e05cb86bbf21"]
      - values: {"n":37}
        answers: ["sha256:f1781ff1fb101bd8440041f2350409b5c392057e4bafb6fac89bcc22c0ff8809","sha256:a39716c4f4f6d1ff85885d4e9a114def7592d0a9a3ff01ab652479978155866a","sha256:3cd5bff66e033e5cc49a30d15b7d6a838cae946bc9ece6bf4406a07d1dc0d42f"]
  - id: gallinas-y-conejos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En una granja hay gallinas y conejos. Entre todos tienen ${{c}}$ cabezas y ${{p}}$ patas. ¿Cuántos conejos hay?
    variants:
      - values: {"c":30,"p":84}
        answers: ["sha256:7ed7f6c6f20bafc5c9e8bea8e6525fb77a00a7b7e9e82ea243482d028c01510c","sha256:504438acb136b78628dde6c3faef17c5e89835531c3edb33f24ab0e1d36df1c1","sha256:a86b0319714fc25094987f3957eee2d76c3b657c81604c26dc84e6fd6d1c81af"]
      - values: {"c":25,"p":70}
        answers: ["sha256:591bc922210fb76b0960343276d63ec64a61539b4bc70e976aea31ce3b1a2297","sha256:b81b66162a4562faedf7e6675331a7fb87dfdb699db174694ebedd1fcf799a1f","sha256:6bb3d4fcac926800df520ed78605c8734ceea4009362363f136a71859825814b"]
      - values: {"c":40,"p":130}
        answers: ["sha256:7f2fe7cf3c4b214a355ca69293c5ca2eae2cf22c63b9173fb989677fde151407","sha256:905e5086ba745e190f6de47cfe7a16e188d6472af4f197d91667086f43f76528","sha256:b5b836b3c417934938ce91bea6c78cbe4f591e32f8be38bc691174be1862edbc"]
      - values: {"c":18,"p":50}
        answers: ["sha256:eb58759d6b1038f26441f5b973737eb0f1c2ed63c8a66d2a0aa02f478dcc2151","sha256:63ef1338ac885864572bcfbd2075b88b1eda437da04ce9e07bb2eeb60660e430","sha256:1d8d1fdc5d54374290816b14380d756fea3ce5fd8e92f974134d2437b44e1db8"]
      - values: {"c":50,"p":140}
        answers: ["sha256:b3f4dea1edd9e8d0023e635c4cdbb57ed492390d92c38703f68538cf8b7fcc9d","sha256:4c76916ed5aae20929c43565554da4570a436c4c4ac6fe9fcd50d9c04e3f7ea4","sha256:ba5772fade112e06530392bf5757e7c252796b8775954873ffcd168a906aa760"]
      - values: {"c":35,"p":96}
        answers: ["sha256:6f97bfad09b94e08271b8f8eed4fae897f022ac64860f0b7f5c8278c9cae60e7","sha256:23450f7ca72a4880f64d9716ccd34699b423817db25e37020e1fcb7d3d2e35b4","sha256:3255a5c93855a907cb046fdb37cf6053e368e3c10f5d5ead479bde04e50d798a"]
  - id: pagar-con-monedas
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿De cuántas formas distintas se pueden pagar exactamente ${{N}}$ céntimos con monedas de $1$, $2$ y $5$ céntimos (sin importar
      el orden de las monedas)? (Haz una lista ordenada: primero según cuántas de $5$.)
    variants:
      - values: {"N":13}
        answers: ["sha256:3faf727928183fe57f4417970a3807f32983206f044ae2e277ec7da61db5c85e","sha256:bdf939ae9f32a94aa3c997b05ca76fd372f32f27aa288549f6e5e27c3f3031b6","sha256:d000cc299dc9d4afcd9f4d52b80d5348d5e83401843de41a1643014078305783"]
      - values: {"N":15}
        answers: ["sha256:dc4c7c24439753fb3421dd7af3c66af2840df7473bb9111c2db53b0339ef1ba6","sha256:e7eb777d2d403901267fcabef0755906ffba26530ce4662a8760162216aaa63e","sha256:7ab8b8519097d3d8fa2425829c87ddb2d2d1df78de1953ff834ad2b294713513"]
      - values: {"N":20}
        answers: ["sha256:842b621103b2e1e1b64172fc87adb5ae6be35cc8ccafd2e23294ff6a0508e9e7","sha256:275f642f39f4b2d3502343bb35aa53ed1586f6403c32524daa71ba290c09e477","sha256:fc0390cede0d4295ee10949b0e7c8e59d8ff1d9d9b5e445c93c7a65744d5c4f2"]
      - values: {"N":9}
        answers: ["sha256:604a25efa86c079851b97c27af3e84f1f79b04e62be94516752d7ade69432747","sha256:f1a451ec24360f49754d4e2922ef2cad2314901c08d31cb44c77e91e5549c31e","sha256:769f165ce2314d2acf2c7655c6e761ba5649cc09f67359f33ea40d0abcd47420"]
      - values: {"N":25}
        answers: ["sha256:4af4417985440ed35e913af06ae409ab417a61a427ea70f105e2d53d0b804bfd","sha256:ad8a3b5b587913f8c71a08ef6da0dc372ee399459a42e8abd292f1fb86c925b9","sha256:84a3ab054db1516675738dc2dcb5494e9426be6f7805404c7ded289fa3fd8565"]
      - values: {"N":30}
        answers: ["sha256:09ad8fdad450feb996c70fc730b567bd7e1ba3163d6b110cbef9a521a5163754","sha256:5aa8c039f64d9b8267ac2853d5e854c619eb6f0c2923c4110d7b7575cc44ea82","sha256:a57bd8d1252e56581cba8f372b43a4670d5e9be47399f84c4171968bf4e17000"]
  - id: contar-una-cifra
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se escriben todos los números del $1$ al ${{N}}$. ¿Cuántas veces aparece la cifra ${{d}}$? (Cuenta por separado las unidades,
      las decenas…)
    variants:
      - values: {"d":7,"N":"100"}
        answers: ["sha256:cca88d2a91ecd74a65365b58acdc91cd460c17b6c12931d3450c763b32990315","sha256:cd384857135eb10e20e3aa5cd8fbba1dad9dbca0ca67743ecac3f38e23e5abfa","sha256:2bcd88dae3042a4bdf10e3bf79ba18e35e111fde48471ecc611e777fe69e4f43"]
      - values: {"d":1,"N":"100"}
        answers: ["sha256:daa495ead842902536e54718812b223eb66b82173b7302e45d9697dcf66ef064","sha256:c5e92628951b1b970f33858684f725ee6d96cc48aaf917dd88bb532b4d9a7801","sha256:dda6a38658a413344a32f64f22b278882c0dbe62266dade48a19d1cda8651e21"]
      - values: {"d":0,"N":"100"}
        answers: ["sha256:bcce0bbfed48dec0b2cb6cd8e271f0cc0fc08b97c6174977fc233f5391a1ffed","sha256:7264290870a870ddcfeb1f3437e7c3d93d4af65797f4457d9482ecf95a4ba856","sha256:369308333da0a76f060f022c6e4d6ae76c508bfe75ea44b6d69092f7d69b2d0a"]
      - values: {"d":3,"N":"250"}
        answers: ["sha256:242e944434c8f48cb57ff1b100d65ba2d507ea9ff3794a51ed1ae27fd80c8d0e","sha256:cf103b96d080ec681a9b465934f10dd87f239ff42ddc044c62b4c8ddff0c99bc","sha256:ba84eb864348373ec32c869aa7da1b1b758336f28ee2ea4a36f6da440f3eb327"]
      - values: {"d":9,"N":"99"}
        answers: ["sha256:3ee032927b2ba3d7a47d98dfb6f23c243d1bcb5fa661d0abe223d66551a54e4b","sha256:fc6a7eb7d954327169aa5dcb425f67acc8f3dff7fb8d73fb86342eb2d2184b07","sha256:48dc4d50ac1b84aaab4256353f8a8786d364817b1d4626d2a535b67de0696019"]
      - values: {"d":5,"N":"2\\,000"}
        answers: ["sha256:07861f9f58ffe7ecf8102e90a4ef075253c7d1fee2b08cc10bbf04241f4949f4","sha256:796bebbe6a45491b77d60b5b92c30c090af62e91dbac8656254541d65543d1df","sha256:925b9fb465733ccfe22686992e937fb7c5a5287e58cfb8c2c59b9990d87abb8b"]
  - id: edad-al-morir
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Una persona nació el ${{n}}$ y murió el ${{m}}$ (día/mes/año). ¿Cuántos años cumplidos tenía al morir?
    variants:
      - values: {"n":"12/6/1910","m":"2/3/1975"}
        answers: ["sha256:44f9ef899dcd95c7df3257d3ecdedee639d40ca69d7d2f6459efb483b4345994","sha256:9e4ae1c6f713c0bc550ca53ca6839b8f9805870bbba1739edac7dec1d3a40ff2","sha256:3c6514d79b653e045aff81fa521af6aefaa3fad19f56fc0ebb439447b5a77fe3"]
      - values: {"n":"30/1/1888","m":"15/7/1962"}
        answers: ["sha256:db53ee20b3cde3c50dfd382beba5de83a2fe40f41f1842758933fc77631a558d","sha256:61e1c846719def35119f6fe6eb9d9d60b1381006ff1bc0641b1416c4382e9387","sha256:1fbde6620e6ae6542135c3bfd2a9b53e8b5f9b6b222350f8a18aab6d2c39a3fd"]
      - values: {"n":"4/11/1950","m":"4/11/2020"}
        answers: ["sha256:1a1892358964b676c187fb3285a793ebd92f5fced075c4a47e762ecd36592464","sha256:84dc6893bafd8264f0ce9fab16ea3841a58bdd5fad7c1fddc9c3029feb04c086","sha256:80a4289ee234259b9b12e610df16ce74f9794eae45bbe1ab0d2a2feeb05cb851"]
      - values: {"n":"31/12/1900","m":"1/1/1961"}
        answers: ["sha256:d399f2db72f31780ddf666551caa72d28c963fad554b61c4e74b372b1c19fbed","sha256:10520e7dd7e804a9c55495e8c537cfd4205b8c0f678a15b0806c3e8cd6d8f40b","sha256:fca37e64291a50ef6893ca26d35669dd31fc340360a3b69c1e594a65c7024763"]
      - values: {"n":"20/5/1925","m":"19/5/2001"}
        answers: ["sha256:4b7c0cf3c461c06de07b10aa71d1c205fde0ec08a29666542b48c914af633c09","sha256:78b5d353107cb4f3db0f75ecaa27f52c9e9c8ee321e159830d585b60e9979544","sha256:7b7c824111f1ff7ac27db454f5bc29de899026ef8620db04da9d8bc7d2457cd8"]
      - values: {"n":"28/2/1942","m":"14/3/2018"}
        answers: ["sha256:6b0863cd5739955394ac6ed11408d79f795d12d75caff52319b06c4490e15be3","sha256:ca9fbe68ecb17ee11620ff6c2eb4167b4fac4380d0d6048e73f7f44bfda51940","sha256:3e0a4a792046c604f47302e9b95efc98a6223eb8159bb2ff513b9c5087168977"]
  - id: ofertas-de-la-tienda
    tier: 1
    prompt: |
      En una tienda, las camisetas pasan de $15$ € a $12$ €, las chaquetas de $40$ € a $30$ €, los pantalones de $32$ € a $28$ € y las
      camisas de $25$ € a $21$ €. Alguien compra en oferta ${{ca}}$ camisetas, ${{ch}}$ chaquetas, ${{pa}}$ pantalones y ${{cs}}$
      camisas. ¿Cuánto paga y cuánto se ahorra? Respuesta: `pago;ahorro` en euros.
    variants:
      - values: {"ca":2,"ch":1,"pa":3,"cs":4}
        answers: ["sha256:49315227f040001421bbcfc60c0f4464090f94b62fcedf1153956fccf3ebb6dd"]
      - values: {"ca":5,"ch":0,"pa":1,"cs":2}
        answers: ["sha256:91b65dea091b7bb42f295e72842919d51d6da8e09775ed3759724958defd9e5c"]
      - values: {"ca":1,"ch":2,"pa":2,"cs":1}
        answers: ["sha256:730b230105fbc05fc25e3716818fbaff23098c64936709e0241cbe545ccf6c1f"]
      - values: {"ca":0,"ch":3,"pa":0,"cs":5}
        answers: ["sha256:1da01d96d6e369ce4158d03838399313ed6a37f704108e989e17995d8795d61d"]
      - values: {"ca":4,"ch":1,"pa":1,"cs":1}
        answers: ["sha256:285fe25d6300b20522bc66fea7ee9cf8ace98b6639e05946444cef94275959ae"]
      - values: {"ca":3,"ch":2,"pa":4,"cs":0}
        answers: ["sha256:795591eac79ee6bbaaaea6b86714e7ae00701338c4e595300a99164e7a19364a"]
  - id: edades-padre-hijo
    tier: 3
    prompt: |
      Un padre tiene ${{m}}$ veces la edad de su hijo. Dentro de ${{t}}$ años tendrá ${{k}}$ veces la edad del hijo. ¿Qué edad
      tienen ahora? (Prueba con una tabla: edad del hijo, edad del padre, edades dentro de ${{t}}$ años.) Respuesta: `hijo;padre`.
    variants:
      - values: {"m":4,"t":6,"k":3}
        answers: ["sha256:91f1b4b149f30955d6804a4f301522b0e9760729412344221729126387a8e87e"]
      - values: {"m":3,"t":10,"k":2}
        answers: ["sha256:41ba5c0cfc9dbf93fbb06e9a450305a278c67a8438b4b49a707492e1a5b9b91f"]
      - values: {"m":5,"t":4,"k":3}
        answers: ["sha256:a09944a092d50b738a3c722d6a76efd3d28c31be6c938394187df083a5a7dbe8"]
      - values: {"m":4,"t":10,"k":2}
        answers: ["sha256:0333e796d9f52a17d886524aceb00e96c22b1229bba380f87754c9868a173417"]
      - values: {"m":7,"t":3,"k":4}
        answers: ["sha256:4e661b9e51777b81b531653c2bed86bf68c466ae1935e31dd47630b86cf8aafa"]
      - values: {"m":3,"t":5,"k":2}
        answers: ["sha256:eb6159a181b799647706d244b756a6e811e8c726f15a4e0aa9a66a21a1668ff4"]
  - id: estimar-la-fila-humana
    tier: 2
    type: opcion
    prompt: |
      Si los unos $8\,000$ millones de habitantes del mundo se dieran la mano en una fila, ocupando cada uno aproximadamente un
      metro, ¿qué longitud tendría la fila, más o menos?
    options:
      - |
        Unos $8\,000$ km
      - |
        Unos $80\,000$ km
      - |
        Unos $8$ millones de km
      - |
        Unos $8\,000$ millones de km
    answers: ["sha256:19c8e3aadda29d11f563fb23a14e9532126d3e24587b80acfeaabdeeef9484dd"]
  - id: estimar-granos-de-arroz
    tier: 2
    type: opcion
    prompt: |
      Un grano de arroz pesa unos $0{,}02$ g. ¿Cuántos granos hay, aproximadamente, en un paquete de $1$ kg?
    options:
      - |
        Unos $500$
      - |
        Unos $50\,000$
      - |
        Unos $5$ millones
      - |
        Unos $500$ millones
    answers: ["sha256:e9a58d206898b7abc32ccbca7cb6d35b4b9d7eab8d8be826d2e3031f9a41bf86"]
  - id: cruzar-el-rio
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un granjero debe cruzar un río con un lobo, una cabra y una col. En la barca solo caben él y una de las tres cosas. Si deja
      solos al lobo con la cabra, el lobo se la come; si deja solas a la cabra y la col, la cabra se come la col. ¿Cuántos viajes
      de la barca (contando cada cruce, de ida o de vuelta) hacen falta como mínimo?
    answers: ["sha256:f6e53abcd311d12ad2a6762f913963b68b8c3d6f3bd276df659df43f50b835fa","sha256:b9836dc9aafb4ddd4a8684b1de2bfda367476b5a3184d769265e143475a367ca","sha256:fee60372e01be042b9dc96b008a4d2ec66cbf783af4bc822ed5ec4e4d88c4e6e"]
  - id: plan-de-polya
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Resuelve este problema y escribe **cada una de las cuatro fases** de Pólya por separado (qué datos hay y qué
      se pide; qué estrategia eliges y por qué; la ejecución; la comprobación): *Ana tiene el triple de cromos que Luis. Si Ana le
      da $10$ cromos a Luis, los dos tienen los mismos. ¿Cuántos cromos tiene cada uno?*
    sealed: "gz64:H4sIAAAAAAACCoVTPW/UQBD9K0/WFRdjWblLKkcUEYSKAil0HMV4d3LaaG/W2fFGOqJI/AdaGhokCgpa2vsn+SXR2r4kBCQ6a3f2vXkfvik0+NS7IEVTlOWixquw6SKL5ViXJV5TH7TBqRB6x8Jgjz66zjOuEuNtcnoCdcOAJcwWh7Mq31gSuHUiTzZojXNG5yzDpN036YNOYIYsIUlYSVmSRxedGNe5UJb1SvLhssY7T5I3OdM+Us9rRw2SoCxZrxJvCJbRUoykZVkPC4EVSWg8PcmrVegj6zQ27sVa49SjI6U4rA0TwyZohjsVWgmNWE+1sFYg3f0cpHuCdRccWYwjOHHGkcfchj3PATRIhsYLLA7xEssHkhrz97Rp3e6H4Jo8g0VpG7AFxxjiSkK0LGQDTJBBS0+tp/pgdOWoxtklm9TTmNED5ci4zBn4xOvwaMN+l1kzyhr9H3Rvh/BmR4ezyfTjqQShHfHzVfb0MXo7Pb37+qXG+bP0J+jlAD2QDd/D7JlHZE2+z9pYEelTEGo9Yy673xuOQVfS8VXi3a+g2Q/p82EFEzYBhloGa8eR4kFdVEVMbXSmaD7cFCa6nqMLRVO8IWUsGjjL0rsLZwg+J5u7jC18GALUqZNzTwpD0jtLlnUfJevA0KXc16JZ3FZ/cywbsHdrxhaXSSeq7Dk/lBXzqafVmGH1LGvso777/P3/hEcNvOc1YWrnswCHumSpHWlQXDt1bW76E9jlv2CPm+xvFxO3hGxHbrEJYp1xQTj/FB4sKVd9KiU/SfJP/I+395MuwttVBAAA"
  - id: r-fases-polya
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuáles son, en orden, las cuatro fases de la resolución de problemas de Pólya?
    options:
      - |
        Comprender, planear, ejecutar y comprobar
      - |
        Leer, copiar, operar y entregar
      - |
        Estimar, adivinar, preguntar y corregir
      - |
        Dibujar, sumar, restar y dividir
    answers: ["sha256:b9287a6be9da523006ccc7947dfe5bfe0a0c46d5ac77bd04e4246c4c73137831"]
  - id: r-problema-o-ejercicio
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué diferencia un **problema** de un **ejercicio**?
    options:
      - |
        Un problema siempre tiene números grandes
      - |
        Un ejercicio no tiene solución
      - |
        En un problema no conoces de antemano un procedimiento que lleve directamente a la solución
      - |
        No hay ninguna diferencia
    answers: ["sha256:d0e96b6e678379a0689f9b783a7c863ad5c1b19dbb4d63db7b262dc89497b6dd"]
  - id: r-hazlo-mas-facil
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué consiste la estrategia «hazlo más fácil para empezar»?
    options:
      - |
        Buscar la respuesta en internet
      - |
        Cambiar el enunciado por otro distinto
      - |
        Saltarse la comprobación
      - |
        Resolver primero casos pequeños para descubrir la regla
    answers: ["sha256:8aa0f46b4be56220c6583d84f4173fd63dbda36052a38001f7b43c20d1ba86b9"]
  - id: r-hacia-atras
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Pienso un número, le resto $3$, lo multiplico por $4$ y obtengo $20$. ¿Qué número pensé?
    answers: ["sha256:dec59dfb7b2a351caa16de6aea8e80d4f7d58b5e06f80dc864015cc3c43ad943","sha256:9400c475e5a82353a4d7be3d029533863af0988a6abf6a143736527a70ce8812","sha256:31009853234520e8d5521e3ffd94c246650eafece8d7ad1ae76a8c8853d0b539"]
  - id: r-bloqueo
    tier: 1
    type: opcion
    review: true
    prompt: |
      Llevas un rato atascado en un problema. ¿Qué conviene hacer?
    options:
      - |
        Abandonar el problema para siempre
      - |
        Releer el enunciado, cambiar de estrategia o descansar y volver
      - |
        Escribir cualquier número
      - |
        Copiar la solución
    answers: ["sha256:96f15387a1da34ebeb58c6159e21c9b302b355308139bdac1375b1d4105ec668"]
  - id: r-comprobar
    tier: 2
    type: opcion
    review: true
    prompt: |
      Para «dos números suman $40$ y uno es el doble del otro», alguien responde $13$ y $26$. ¿Es correcto?
    options:
      - |
        No: $13$ y $26$ no suman $40$
      - |
        Sí, está bien
      - |
        Sí, porque $26$ es el doble de $13$
      - |
        No se puede comprobar
    answers: ["sha256:e2d3a098301cd9c6603d84ba85b6c2ee3db6ed8d6176ea3e5dc0a9dc6a4c40b5"]
  - id: r-palillos-triangulos
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Con palillos se forma una fila de $10$ triángulos alternados hacia arriba y hacia abajo (cada dos vecinos comparten un
      palillo). ¿Cuántos palillos hacen falta?
    answers: ["sha256:bc1a3523d67ec5879ab0f095acd8028771aaa694867401919eeb7e0b10cf6a24","sha256:42d98abf305fc3389d1e94537af48b336db6d9e0181bd1b9fcb20cd1f2e11471","sha256:4086fb300eb6beba97202a22c7b5be4b4161df2a564fde2794c575ed713aba5a"]
---

# Resolución de problemas: las cuatro fases de Pólya y las estrategias que funcionan

Este es el primer nodo de las matemáticas de Exodus, y no va de ningún número concreto: va de **cómo pensar** cuando no sabes
qué hacer. Todo lo demás (fracciones, álgebra, cálculo, demostraciones) son herramientas; resolver problemas es saber
cuál usar, cómo combinarlas y qué hacer cuando te atascas. Lo usarás en cada nodo que venga después, y también fuera de las
matemáticas: en un presupuesto, en una avería, en un examen o en un trabajo.

## Objetivos

Al terminar sabrás:

1. Distinguir un **problema** de un **ejercicio** y reconocer qué te piden.
2. Seguir las **cuatro fases** de Pólya: comprender, planear, ejecutar y comprobar.
3. Usar nueve estrategias concretas: estimar, experimentar y buscar regularidades, hacerlo más fácil, dibujar un esquema,
   probar de forma ordenada, ir hacia atrás, hacer una lista sistemática, buscar un problema parecido y elegir una buena
   notación, y buscar algo que no cambia (un invariante).
4. **Comprobar** un resultado de varias formas (con el enunciado, con las unidades, con el tamaño esperado).
5. Gestionar los **bloqueos** y aprovechar los momentos de «¡eureka!».

## Qué debes dominar antes

Solo leer con atención y las cuatro operaciones con números naturales. Este nodo no tiene prerrequisitos.

> [!question] Test de entrada
> 1. Si compras $3$ cuadernos a $2$ € y pagas con $10$ €, ¿cuánto te devuelven?
> 2. ¿Cuántos días tienen $5$ semanas?
> 3. Un tren sale a las $9{:}40$ y tarda $35$ minutos. ¿A qué hora llega?
>
> Respuestas: $4$ €; $35$ días; a las $10{:}15$.

## 1. Para qué sirve

- **En los estudios**: los exámenes de matemáticas y de física (incluidos los de la UNED, que son de desarrollo) son
  problemas, no listas de cuentas. Saber por dónde empezar ahorra tiempo y nervios.
- **En la vida**: decidir si te conviene una oferta, repartir gastos de un viaje, calcular si te llega el dinero a fin de mes
  o estimar cuánto tardarás en algo son problemas que se resuelven con las mismas fases.
- **En la técnica**: depurar un programa, encontrar una avería o diseñar un experimento siguen el mismo esquema: entender el
  fallo, hacer un plan, probar y comprobar.
- **En la investigación**: Pólya escribió su libro para enseñar «el arte de descubrir»; las heurísticas de este nodo son las
  que usan los matemáticos profesionales.

## 2. Problema y ejercicio

> [!practico]
> Si te enseñan a sumar fracciones y luego te ponen diez sumas de fracciones, eso son **ejercicios**: sabes el
> procedimiento y solo hay que aplicarlo. Un **problema** es otra cosa: tienes un objetivo, pero no sabes de antemano qué
> pasos llevan a él. Lo que para un alumno de primaria es un problema («¿cuántas ruedas hay en $7$ coches?») para ti es un
> ejercicio. Y al revés: lo que hoy te parece un problema, dentro de unos meses será un ejercicio.

Un **problema matemático** es una situación con un objetivo que alcanzar superando obstáculos, cuando quien lo afronta **no
conoce un procedimiento** que le lleve directamente a la solución. Resolver problemas consiste en convertir lo desconocido en
algo conocido: partirlo, compararlo con otros, simplificarlo, hasta que aparece un camino.

## 3. Las cuatro fases

> [!practico]
> Antes de cocinar algo nuevo, lees la receta (qué ingredientes hay, qué plato sale), decides cómo organizarte, cocinas y,
> al final, pruebas el plato. Resolver un problema es igual. El error más común es saltarse la primera fase (ponerse a
> hacer cuentas sin haber entendido qué piden) y la última (no comprobar).

El matemático George Pólya resumió el proceso en cuatro fases. Para cada una, estas son las preguntas que conviene hacerse:

**Fase 1: comprender el problema.** ¿Cuáles son los datos? ¿Qué se pide (lo que no sabes y buscas)? ¿Hay condiciones? ¿Puedo contarlo con
mis palabras? ¿Puedo hacer un dibujo? ¿Sobra o falta algún dato?

**Fase 2: concebir un plan.** ¿He visto un problema parecido? ¿Conozco algo que relacione los datos con lo que piden? ¿Puedo
resolver primero una parte, o un caso más sencillo? ¿Qué estrategia (sección 4) encaja?

**Fase 3: ejecutar el plan.** Llévalo a cabo paso a paso, comprobando cada uno. Si se complica, vuelve a la fase 2: cambiar de
plan es normal, no un fracaso.

**Fase 4: comprobar y mirar hacia atrás.** ¿Cumple el resultado **todas** las condiciones del enunciado? ¿Es razonable su tamaño?
¿Tienen sentido las unidades? ¿Se podía resolver de otra forma? ¿Sirve el método para otros problemas?

**Ejemplo resuelto 1 (las cuatro fases).** *El cuentakilómetros de un coche marca $24\,312$ km. Las revisiones se hacen cada
$5\,000$ km. ¿Cuántos kilómetros faltan para la próxima?*

1. *Comprender.* Datos: $24\,312$ km recorridos; revisiones a los $5\,000$, $10\,000$, $15\,000$… km. Se pide la distancia hasta la
   siguiente revisión.
2. *Plan.* Encontrar el primer múltiplo de $5\,000$ mayor que $24\,312$ y restar.
3. *Ejecutar.* $5\,000 \cdot 5 = 25\,000 > 24\,312$ (y $5\,000 \cdot 4 = 20\,000$ ya ha pasado). Faltan $25\,000 - 24\,312 = 688$ km.
4. *Comprobar.* $24\,312 + 688 = 25\,000$ ✓, que es múltiplo de $5\,000$ ✓. Es razonable: menos de $5\,000$ km ✓.

**Ejemplo resuelto 2 (cuidado con la fase 1).** *Una piscina rectangular de $10$ m por $7$ m se rodea con una valla de $12$ € el
metro. ¿Cuánto cuesta?* Lo que se valla es el **borde**, no la superficie: el perímetro es $10 + 7 + 10 + 7 = 34$ m y la valla
cuesta $34 \cdot 12 = 408$ €. (Quien multiplica $10 \cdot 7$ calcula el área, que no es lo que se pide: un error de la fase 1, no
de las cuentas.)

> [!formal] Con rigor: por qué funciona comprobar
> Si el enunciado se traduce a unas condiciones $C_1, C_2, \dots$ y el resultado las cumple todas, el resultado **es** una
> solución, aunque se haya llegado a él por un camino dudoso (ensayo y error, intuición). Comprobar no demuestra que sea la
> única solución; para eso hace falta un argumento (por ejemplo, haber probado todos los casos posibles de forma ordenada, o
> que el procedimiento solo admita un resultado). En cursos posteriores esta distinción entre «encontrar una solución» y
> «encontrarlas todas» será esencial al resolver problemas con letras.

## 4. Estrategias

### 4.1 Estima el resultado

> [!practico]
> Muchas veces no hace falta la cifra exacta: basta saber «más o menos». ¿Me llega el dinero? ¿Cabe la nevera por la
> puerta? Estimar antes de calcular también sirve para detectar errores: si estimas «unos $500$» y la calculadora dice
> $50\,000$, algo has tecleado mal.

Para estimar se redondean los datos a números cómodos y se opera con ellos. Los **problemas de Fermi** (por el físico Enrico
Fermi) estiman cantidades que parecen imposibles de saber partiéndolas en factores razonables.

**Ejemplo resuelto 3 (Fermi).** *¿Cuántos litros de agua bebe una persona en un año?* Unos $2$ litros al día, por $365$ días:
$2 \cdot 365 \approx 2 \cdot 400 = 800$; más exactamente $730$ litros. La respuesta útil es «unos $700$-$800$ litros», no «$730$
exactos» (los $2$ litros diarios ya eran una aproximación).

### 4.2 Experimenta y busca regularidades

> [!practico]
> Cuando no sabes por dónde empezar, prueba: haz el proceso con números concretos y observa qué pasa. Si siempre ocurre lo
> mismo, hay una regla escondida, y buscar **por qué** se cumple suele ser el principio de la solución.

**Ejemplo resuelto 4 (el truco del 1089).** Piensa un número de tres cifras con la primera y la última distintas, por ejemplo
$742$. Escríbelo al revés ($247$) y resta el menor del mayor: $742 - 247 = 495$. Escribe el resultado al revés ($594$) y súmalo:
$495 + 594 = 1089$. Con $821$: $821 - 128 = 693$, $693 + 396 = 1089$. ¡Siempre sale $1089$!

> [!formal] Con rigor: por qué siempre sale 1089
> Sea el número $100a + 10b + c$ con $a > c$. Al revés es $100c + 10b + a$, y la diferencia es $99(a - c)$. Como $a - c$ va de
> $1$ a $9$, la diferencia es uno de $99, 198, 297, \dots, 891$: números de la forma $100x + 10\cdot9 + y$ con $x + y = 9$
> (escribiendo $099$ para el primero). Al darle la vuelta y sumar, $(100x + 90 + y) + (100y + 90 + x) = 101(x + y) + 180 = 101\cdot9 + 180 = 1089$.
> $\blacksquare$ (Este razonamiento usa letras en lugar de números: es álgebra, que verás en el nodo de expresiones algebraicas.)

### 4.3 Hazlo más fácil para empezar

> [!practico]
> Si el problema es grande, resuelve primero uno pequeño del mismo tipo. Con los casos pequeños aparece la regla, y con la
> regla resuelves el grande. Es como aprender a montar una estantería grande montando antes una pequeña.

**Ejemplo resuelto 5 (las torres de Hanoi).** *Hay tres agujas y una torre de discos de tamaños distintos en la primera. Hay
que pasarla a la tercera moviendo un disco cada vez y sin poner nunca uno grande sobre uno pequeño. ¿Cuántos movimientos
hacen falta como mínimo?*

- Con $1$ disco: $1$ movimiento.
- Con $2$: el pequeño a la aguja del medio, el grande a la tercera, el pequeño encima: $3$.
- Con $3$: pasar los dos de arriba a la aguja del medio ($3$ movimientos), el grande a la tercera ($1$) y los dos encima ($3$):
  $3 + 1 + 3 = 7$.

Se ve la regla: con un disco más, hacen falta «el doble de antes más uno»: $1, 3, 7, 15, 31, \dots$, que es $2^n - 1$ (una potencia
de $2$ menos uno; las potencias se estudian en el nodo de potencias raices). Con los $64$ discos de la leyenda,
$2^{64} - 1 \approx 1{,}8 \cdot 10^{19}$ movimientos: a uno por segundo, unos $585\,000$ millones de años.

### 4.4 Haz un dibujo, un esquema o una tabla

> [!practico]
> Un buen dibujo hace visible lo que el texto esconde. Las **barras** (rectángulos que representan cantidades) son
> especialmente útiles: una cantidad y «su mitad» se dibujan como una barra y media barra, y la relación salta a la vista.

**Ejemplo resuelto 6.** *Una persona mide $80$ cm más que la mitad de su estatura. ¿Cuánto mide?* Dibuja su estatura como una
barra partida en dos mitades. «Mide la mitad más $80$ cm» quiere decir que la otra mitad son esos $80$ cm. Luego mide
$80 + 80 = 160$ cm. *Comprobación:* la mitad de $160$ es $80$, y $80 + 80 = 160$ ✓.

**Ejemplo resuelto 7 (un viaje).** *Se apuntan $25$ estudiantes a un viaje. Al pagar, $5$ no llevan dinero y los otros $20$ pagan
sus billetes poniendo cada uno $3$ € más. ¿Cuánto cuesta un billete?* Esquema: los $20$ que pagan aportan $20 \cdot 3 = 60$ €
extra, y esos $60$ € pagan exactamente $5$ billetes. Un billete cuesta $60 : 5 = 12$ €.

### 4.5 Prueba de forma ordenada (ensayo y error con una tabla)

> [!practico]
> Probar al azar es perder el tiempo, pero probar **con orden**, apuntando cada intento en una tabla, es un método serio:
> cada prueba te dice si te has pasado o te has quedado corto, y te acercas a la solución.

**Ejemplo resuelto 8 (gallinas y conejos).** *En una granja hay gallinas y conejos: $20$ cabezas y $56$ patas. ¿Cuántos hay de
cada?* Si todos fueran gallinas habría $40$ patas; faltan $16$. Cada conejo que cambies por una gallina añade $2$ patas, así que
hacen falta $16 : 2 = 8$ conejos y $12$ gallinas. En forma de tabla:

| conejos | gallinas | patas |
| ---: | ---: | ---: |
| $0$ | $20$ | $40$ |
| $4$ | $16$ | $48$ |
| $8$ | $12$ | $56$ ✓ |

*Comprobación:* $8 \cdot 4 + 12 \cdot 2 = 32 + 24 = 56$ ✓ y $8 + 12 = 20$ ✓.

### 4.6 Trabaja hacia atrás

> [!practico]
> Si conoces el final de la historia, recórrela al revés: deshaz cada paso con la operación contraria. Es lo que haces para
> saber a qué hora salir de casa: si el tren sale a las $9$ y tardas $20$ minutos en llegar a la estación, tienes que salir a
> las $8{:}40$.

**Ejemplo resuelto 9.** *Pienso un número, lo multiplico por $3$, le sumo $5$ y divido entre $2$. Me sale $13$.* Al revés: si al
dividir entre $2$ salió $13$, antes había $26$; si al sumar $5$ salió $26$, antes había $21$; si al multiplicar por $3$ salió
$21$, el número era $7$. *Comprobación:* $(7\cdot3 + 5) : 2 = 26 : 2 = 13$ ✓.

### 4.7 Haz una lista sistemática de los casos

> [!practico]
> Cuando hay que contar «de cuántas formas» se puede hacer algo, la clave es no olvidar ninguna ni repetirla. Para eso se
> ordenan: primero según una cosa, y dentro de cada grupo según otra.

**Ejemplo resuelto 10.** *¿De cuántas formas se pueden pagar $12$ céntimos con monedas de $1$, $2$ y $5$ céntimos?* Ordenamos por
el número de monedas de $5$:

- con dos de $5$ quedan $2$ céntimos: $2 = 2 = 1 + 1$, **2** formas;
- con una de $5$ quedan $7$: con $0, 1, 2$ o $3$ monedas de $2$ (y el resto en monedas de $1$), **4** formas;
- sin monedas de $5$ quedan $12$: con $0, 1, \dots, 6$ monedas de $2$, **7** formas.

En total $2 + 4 + 7 = 13$ formas.

### 4.8 Busca un problema parecido y elige una buena notación

> [!practico]
> Antes de inventar, pregúntate: «¿he resuelto algo parecido?». Muchos problemas son el mismo con otro disfraz: repartir
> gastos de un viaje y repartir pizzas se resuelven igual. Y nombrar bien las cosas ayuda: «la edad del hijo» se escribe
> más rápido como $h$, y en cuanto escribes $h$ ya estás haciendo álgebra.

**Ejemplo resuelto 11.** *La suma de dos números es $50$ y uno es $8$ más que el otro.* Es «el mismo» problema que el de las
gallinas y los conejos: si los dos fueran iguales, cada uno valdría $25$; como uno es $8$ más que el otro, quitamos $8$ al total,
$50 - 8 = 42$, repartimos, $21$ y $21$, y devolvemos los $8$ al mayor: $21$ y $29$. *Comprobación:* $21 + 29 = 50$ ✓, $29 - 21 = 8$ ✓.

### 4.9 Busca algo que no cambie (un invariante)

> [!practico]
> En algunos problemas hay una cantidad que no cambia por mucho que hagas. Si al principio vale una cosa y el objetivo
> exige otra, el objetivo es imposible, y lo has demostrado sin probar todas las posibilidades.

**Ejemplo resuelto 12 (el tablero mutilado).** *A un tablero de ajedrez de $8 \times 8$ se le quitan dos esquinas opuestas.
¿Se pueden cubrir las $62$ casillas restantes con $31$ fichas de dominó de $2 \times 1$?*

> [!formal] Con rigor: la coloración demuestra que es imposible
> Cada ficha de dominó cubre siempre **una casilla blanca y una negra** (son vecinas). Por tanto $31$ fichas cubren exactamente
> $31$ blancas y $31$ negras. Pero las dos esquinas opuestas tienen el mismo color (por ejemplo, las dos blancas), así que
> quedan $30$ blancas y $32$ negras. Es imposible cubrirlas. $\blacksquare$ El invariante es «número de blancas cubiertas
> igual al de negras cubiertas».

## 5. Comprobar de verdad

> [!practico]
> Un resultado sin comprobar es una apuesta. Hay comprobaciones de distintos tipos y conviene usar más de una: volver al
> enunciado, mirar si el tamaño tiene sentido y fijarse en las unidades.

- **Con el enunciado**: sustituye el resultado en **todas** las condiciones (como en los ejemplos).
- **Con el tamaño**: ¿es razonable? Una persona de $1{,}60$ m sí; una de $16$ m, no. Una paga semanal de $8$ € no compra un móvil
  de $300$ € en un mes ($4 \cdot 8 = 32$ €).
- **Con las unidades**: si sumas metros y euros, algo va mal. Si te piden euros, la respuesta lleva euros.
- **Con un caso extremo**: si una fórmula vale para cualquier número de discos, debe dar $1$ con un solo disco.
- **Con otro método**: resolver de dos formas distintas y obtener lo mismo es la comprobación más fuerte.

## 6. Emociones: «¡eureka!» y bloqueos

> [!practico]
> Atascarse le pasa a todo el mundo, también a los matemáticos profesionales. Lo importante es tener un plan para cuando
> pasa. Y la otra cara: muchas veces la idea llega cuando dejas el problema y haces otra cosa, porque la cabeza sigue
> trabajando sin que te des cuenta.

Cuenta la tradición que Arquímedes gritó «¡eureka!» («¡lo encontré!») en la bañera al descubrir cómo medir el volumen de una
corona. Esa sensación (también llamada «¡ajá!») es real y aparece a menudo **después** de haber trabajado el problema y haberlo
dejado reposar.

**Qué hacer ante un bloqueo:**

1. Releer el enunciado despacio, en voz alta o subrayando datos y pregunta.
2. Hacer un dibujo o una tabla, aunque parezca innecesario.
3. Cambiar de estrategia: probar un caso más fácil, ir hacia atrás, buscar un problema parecido.
4. Descansar un rato y volver (el «¡eureka!» suele llegar así).
5. No mirar la solución demasiado pronto: usa las **pistas graduales** de Exodus, de una en una. El esfuerzo de buscar es lo
   que hace que se te quede (ver [[tro-aprender-a-aprender]]).

## 7. Juegos y problemas

> [!practico]
> Muchos juegos de dos jugadores esconden un problema: «¿hay una forma de jugar que gane siempre?». Para encontrarla se usa
> lo de siempre: casos pequeños y trabajar hacia atrás desde el final de la partida.

**Ejemplo resuelto 13 (el juego del 20).** Dos jugadores dicen números por turnos, empezando en $0$; en cada turno se suma $1$ o
$2$ al número anterior, y gana quien diga $20$. *Hacia atrás:* quien diga $17$ gana (el rival dirá $18$ o $19$, y tú llegas a $20$).
Igual, quien diga $14$ llega a $17$, y así: $20, 17, 14, 11, 8, 5, 2$. Las posiciones ganadoras son las que dejan un múltiplo
de $3$ por recorrer hasta $20$. El primer jugador gana diciendo $2$ y luego siempre completando $3$ con lo que diga el rival.

## 8. Errores típicos

- Empezar a operar sin haber entendido qué se pide (multiplicar largo por ancho cuando se pide la valla).
- Usar todos los números del enunciado «porque están»: a veces sobra alguno.
- Probar al azar, sin apuntar los intentos.
- Dar el resultado sin unidades, o con unidades que no corresponden.
- No comprobar, o comprobar solo una de las condiciones.
- Rendirse al primer bloqueo, o mirar la solución sin haberlo intentado de verdad.

## 9. Resumen

- Problema: objetivo sin procedimiento conocido; ejercicio: procedimiento conocido.
- Cuatro fases: comprender, planear, ejecutar, comprobar (y mirar hacia atrás).
- Estrategias: estimar; experimentar y buscar regularidades; hacerlo más fácil; dibujo o tabla; ensayo y error ordenado; hacia
  atrás; lista sistemática; problema parecido y buena notación; invariantes.
- Comprobar con el enunciado, con el tamaño, con las unidades, con casos extremos y con otro método.
- Ante un bloqueo: releer, dibujar, cambiar de estrategia, descansar, pistas de una en una.

## Repaso: lo que debe quedarte dentro de un mes

1. Las cuatro fases de Pólya y las preguntas de la fase 1 (datos, qué se busca, condiciones).
2. Si el problema es grande, resuelve uno pequeño y busca la regla.
3. Si conoces el final, ve hacia atrás deshaciendo operaciones.
4. Para contar casos, ordénalos para no olvidar ni repetir.
5. Comprueba siempre con el enunciado y con el sentido común.

## Siguiente

el nodo de sistema decimal operaciones (los números naturales y sus operaciones) y, en paralelo, el nodo de rectas angulos (los
primeros elementos de geometría). Todas las estrategias de este nodo se usarán en cada tema.
