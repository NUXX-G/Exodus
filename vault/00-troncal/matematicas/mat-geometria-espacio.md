---
id: mat-geometria-espacio
title: "Geometría del espacio: vectores, rectas, planos, ángulos y distancias"
area: matematicas
trunk_level: 7
prerequisites: [mat-geometria-analitica, mat-algebra-lineal-1, mat-vectores-espacio]
academic_sources:
  - "Apuntes Marea Verde (LOMLOE). Matemáticas II, 2.º Bachillerato: cap. 4 «Geometría en el espacio - Vectores» (secciones 2-5: vectores, dependencia lineal, productos escalar, vectorial y mixto), cap. 5 «Rectas y planos en el espacio» (secciones 1-3: ecuaciones y posiciones relativas) y cap. 6 «Geometría métrica en el espacio» (secciones 1-4: ángulos, proyecciones, simétricos y distancias). Rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/MatematicasIILL.htm (CC BY-NC-SA 3.0)."
  - "Abramson, J. et al. Precálculo, 2.ª ed. (en español). OpenStax, 2022, sección 8.8 («Vectores»). https://openstax.org/books/prec%C3%A1lculo-2ed/pages/8-8-vectores"
  - "Strang, G. Introduction to Linear Algebra, 5.ª ed. Wellesley-Cambridge Press, 2016, cap. 1 (vectores, longitudes y productos escalares) y sección 5.3 (el producto vectorial y los volúmenes como determinantes)."
hints:
  - "Concepto: en 3D una recta se da con un punto y un vector director; un plano, con un punto y un vector NORMAL (perpendicular a él): Ax + By + Cz + D = 0 tiene normal (A, B, C). El producto escalar mide ángulos y perpendicularidad; el vectorial da un vector perpendicular a dos dados y su módulo es un área; el mixto es un volumen."
  - "Herramienta: dibuja un esquema aunque sea aproximado. Fórmulas clave: d(P, plano) = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²); d(P, recta) = |AP × v| / |v|; d(r, s) que se cruzan = |[AB, u, v]| / |u × v|. Comprueba en Python con numpy.cross y numpy.dot, o en GeoGebra 3D."
  - "Documentación: Marea Verde Matemáticas II, caps. 4-6; Strang, cap. 1 y sección 5.3; numpy.org/doc/stable/reference/generated/numpy.cross.html."
exercises:
  - id: producto-vectorial
    tier: 1
    prompt: |
      Calcula $\vec u \times \vec v$ con $\vec u = {{u}}$ y $\vec v = {{v}}$. Respuesta: las tres coordenadas separadas por «;».
    variants:
      - values: {"u":"(1, 0, 2)","v":"(3, 1, 0)"}
        answers: ["sha256:44b4fb0ea0d829677074b85d6013abe49a1e164589f90c549e96b01c167888c8"]
      - values: {"u":"(2, -1, 1)","v":"(0, 3, 1)"}
        answers: ["sha256:b01606f4003cf2ba37cbecba5ab40c8b26c76b7f429e1f83a1661b4356f462bf"]
      - values: {"u":"(1, 1, 1)","v":"(1, -1, 2)"}
        answers: ["sha256:ea53f8eb8454dbd79b29313dea482c4c188c2e7dad1f7977aff0f744e5cfa556"]
      - values: {"u":"(4, 0, -1)","v":"(2, 5, 0)"}
        answers: ["sha256:d05d59c0a9f72db176adc72b0a7da80ee02452c905317066fc24aa3dc5d28fac"]
      - values: {"u":"(0, 2, 3)","v":"(1, 0, -2)"}
        answers: ["sha256:c5e02735743edfa7bf778b4285da819b137a41983724f38f5377a8a3ba408b23"]
      - values: {"u":"(3, -2, 1)","v":"(1, 1, 1)"}
        answers: ["sha256:a2136287d6d6f38fcc89fa8f57c466ae053e1adcad45b8bc2d44372b0ca40cdb"]
  - id: angulo-entre-rectas
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Dos rectas tienen vectores directores ${{u}}$ y ${{v}}$. ¿Qué ángulo (agudo) forman, en grados? Respuesta: cuatro cifras
      significativas si no es exacto.
    variants:
      - values: {"u":"(1, 0, 0)","v":"(1, 1, 0)"}
        answers: ["sha256:7508dc48395d90438b375b6debb4d99ee5ab8b59e67b0c666304e2e69205499b","sha256:b3559b9446ecbdc1fe276ad857a1e9364089bf4492a22653a1e2fa5b331a20f5","sha256:9439d04e6bf01fb557b0424adbcde4fef57bf998cc5c7d2412fadbd2d0ed8e61"]
      - values: {"u":"(1, 1, 1)","v":"(1, 0, 0)"}
        answers: ["sha256:2ab8625957d2a5e753f0a3ddac5b86b06aa8272f3b6950c756590c8bb707ce3a","sha256:16ecc44c65cec06014e411005fb8bfe8c401422694e9489df095e16122be3b28","sha256:8c38bed329c91479e6ab3682c8dbd8a64089b5229816da32ad011efa791074c1"]
      - values: {"u":"(2, 1, 2)","v":"(1, 2, 2)"}
        answers: ["sha256:64933b579d9e73c8f0e49239aa2c8aaad60625965784b0cfd6241f148cbe253c","sha256:6d33ecc06e8bc67ee62fe5a84e5950ba591f5ea9ab7310d4d8176334ae5f48ed","sha256:f5a2f6c86c220f122af636bda3647cd7131355a05b684d20b1d7c2ce7d07047f"]
      - values: {"u":"(1, 2, 2)","v":"(2, -2, 1)"}
        answers: ["sha256:b7f47be505fed08b6957ca44d2981da550497e8d3358bd7461bb4fbe94c1225c","sha256:3018b306ad5d00881834289b5283e99d599bba695a79fc6bf66068b0cc4604a8","sha256:381d6b38723d53a68e122bafae969682d334e1d337e483b9dbd6374823014f6d"]
      - values: {"u":"(0, 3, 4)","v":"(0, 4, 3)"}
        answers: ["sha256:bff74f847b293aa2469a4bfb3695f061c0279f0a9d1192c1456788e06c07baef","sha256:ca2b6422b4977405952e54bb647181bc9bc010aa92e4fb64885359519ffa35f5","sha256:7397554fe003678e2e9600c639e9424fb44c3c7dfe7f32becb8e2a38f9e134a4"]
      - values: {"u":"(1, 1, 0)","v":"(0, 1, 1)"}
        answers: ["sha256:36bc90fb7da47aa70cca8b8628091d823c0365749bc98c95f9de6fa409e7e180","sha256:c0b61a0654406171b1b3b9f88b1ddc96dd2087b5c1c0a3ba41d9189d456d70d3","sha256:b5c3e11d923135a438534dfaa9edf7c857a1308d50a13071cbe29aeb4af47856"]
  - id: area-triangulo-3d
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula el área del triángulo de vértices $A{{A}}$, $B{{B}}$ y $C{{C}}$. Respuesta: cuatro cifras significativas si no es exacto.
    variants:
      - values: {"A":"(0, 0, 0)","B":"(3, 0, 0)","C":"(0, 4, 0)"}
        answers: ["sha256:a4a5ab04e41dc4bcd8a8c3433f20600336e223c38a9bdfcb7372e67320eea351","sha256:3b7fea84a10b167ec6ccc07194064360f074e29cb65b07b7568117424d3dab07","sha256:0166d7e6caa5cb778b00d641b6ae74632b747ddfdce6c24091ef7e9204ef12c0"]
      - values: {"A":"(1, 0, 0)","B":"(0, 2, 0)","C":"(0, 0, 2)"}
        answers: ["sha256:48fd67f5f65b75e9b2de938c1196af759618fce9727ab1654f458011f3b86f65","sha256:828a73cce200369e6dac46192a62b56a10c7b9b4ffbe122b3cf96dc7ab3b203c","sha256:604bfe34eabd61f0d2d92d2495fe95208e4ea044bdaab8e8eb380eacf6201b4e"]
      - values: {"A":"(1, 1, 1)","B":"(3, 1, 2)","C":"(2, 4, 1)"}
        answers: ["sha256:3eb545ec74245a0c3dc05cd404ac86a3e6ef44dca0ef6d9e163693cb13e9cf6f","sha256:2b81657630f978316618204e7035b09665aed8e2f7af0b5389c82fd31e88fd57","sha256:f192c012775b33423a0caa93c426fb564bb528ff993f3979b5f99cc990b0988b"]
      - values: {"A":"(0, 0, 0)","B":"(2, 2, 1)","C":"(1, -2, 2)"}
        answers: ["sha256:ebaa8516047a9b90e6fa2ffccaff9b30a530038f2a4520fd3a66e38f91745526","sha256:324186081082f199aff20a92f0ce9e81bc78fe3acce252c1088d3a5e079b63be","sha256:1baeb79308a43c20a8eba9679dda4d6ef4ee8cfe7a194a47aea4d80149d14214"]
      - values: {"A":"(2, 0, 1)","B":"(2, 3, 1)","C":"(5, 0, 5)"}
        answers: ["sha256:2568d591cf8ce45bea2926068ae729178188c13cb42b43dc7662f5038f64a3cf","sha256:043c94f541f9d796c772dbabf10d2cf8b45492c15157de95489f5a4e2c2cb4ef","sha256:a39e99894f55fd62a99d0352a7921ff595ab7cde2f13808dcce6822605db9608"]
      - values: {"A":"(1, 2, 3)","B":"(4, 6, 3)","C":"(1, 2, 8)"}
        answers: ["sha256:93b7c3974f38fb9c67186972c7d9697b591c0b11434cb4e3bce5825ce0a409b0","sha256:b6ddec80393aa9180ad38c8c18c4bf9673710a69f1cadd00f3c45260b58839b5","sha256:928cab6ad07203cdaf3ad359f87a91ac2e23f16c0a9b26817410f96511ee649a"]
  - id: volumen-paralelepipedo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula el volumen del paralelepípedo de aristas ${{u}}$, ${{v}}$ y ${{w}}$ (que salen de un mismo vértice).
    variants:
      - values: {"u":"(1, 0, 0)","v":"(0, 2, 0)","w":"(0, 0, 3)"}
        answers: ["sha256:89c7e018be0ea2d40902f06f049d908c76906614e0463b6f9b1329651f97cbce","sha256:38cb9a0b32dd1e937d1a68707efacbcb1b728b708949627ab830c61ff7a7dfd9","sha256:d0a521660f154322cc8e2b7c45aa4fbf435586fa34a9fdad45921a72b847a3b3"]
      - values: {"u":"(1, 1, 0)","v":"(0, 1, 1)","w":"(1, 0, 1)"}
        answers: ["sha256:3bac750c308b8192f0f76625ad554cc1ad81c3a0f468c9d0cdac15fe9eefeae3","sha256:cbc0b5203408aa83b1339a55bd1d29fa8f58accd626ab631c7d07f5215c8c96d","sha256:1da191c49d88e48767dcddfdc4603a18f844b3c87b80ffe470fc420b5769dd83"]
      - values: {"u":"(2, 1, 0)","v":"(0, 3, 1)","w":"(1, 0, 4)"}
        answers: ["sha256:bcf86af93bc8da35117d6679ea6d2c5e454e999725c111fdeb16985da5bebee0","sha256:3c4276f783d3a81df25ca3032f106c84e1138224a2cf35f68c3d3b516cdae127","sha256:fd274f1396ce4715a1a68b52404f4985908aac31e4e2eaf21b331bccacf987c1"]
      - values: {"u":"(3, 0, 1)","v":"(1, 2, 0)","w":"(0, 1, 5)"}
        answers: ["sha256:bd85323d3058c19d7630d3879e0d750b0f791aa1481e6bf73b78dbf350854fd1","sha256:78753d072a2cd46549959a714c8e8878acfc887cbdb94548dcd0e558df920dd8","sha256:aee9864c34d1b3e47aeef3cc4b1ebd1bdcd4e6676c5ef9232d58b14893a17694"]
      - values: {"u":"(1, 2, 3)","v":"(0, 1, 4)","w":"(5, 6, 0)"}
        answers: ["sha256:920623984d169e4e9ab5f178f84e8b32e95868c6dd214c7af967d438441984cf","sha256:a5e7e94e4dc12cadea6d4bb05dda1c03a5fd06da50178f61a9cec01ee6f5ef56","sha256:670b61871393f1ac8b896c0fafcbc61bafafa2776a2f15a7517d679750db0222"]
      - values: {"u":"(2, -1, 1)","v":"(1, 3, -2)","w":"(0, 1, 1)"}
        answers: ["sha256:d096a92062f4999206063ce618e72bcb8b335239f8457191409463cd033452b1","sha256:9193d0b20099d404cde48f221cd1fc46d2f679018b070483bb9fae497a67f0fb","sha256:eee18e765ec0a4bf5d95de33c4ee689d52f556cbea0d852d40b899529804e73a"]
  - id: coplanarios
    tier: 2
    prompt: |
      ¿Están los vectores ${{u}}$, ${{v}}$ y ${{w}}$ en un mismo plano? Respuesta: «si» o «no».
    variants:
      - values: {"u":"(1, 2, 3)","v":"(4, 5, 6)","w":"(7, 8, 9)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"u":"(1, 0, 1)","v":"(0, 1, 1)","w":"(1, 1, 0)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"u":"(2, 1, 0)","v":"(1, 3, 1)","w":"(3, 4, 1)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"u":"(1, 2, 0)","v":"(0, 1, 1)","w":"(2, 5, 1)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"u":"(1, -1, 2)","v":"(2, 0, 1)","w":"(0, 3, 1)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"u":"(3, 1, 2)","v":"(1, 1, 1)","w":"(5, 3, 4)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: plano-tres-puntos
    tier: 2
    prompt: |
      Halla el plano que pasa por ${{P}}$, ${{Q}}$ y ${{R}}$ en la forma $Ax + By + Cz = D$ con $A, B, C, D$ enteros **sin divisor común**
      y $A > 0$ (si $A = 0$, $B > 0$). Respuesta: «A;B;C;D».
    variants:
      - values: {"P":"(1, 0, 0)","Q":"(0, 3, 0)","R":"(0, 0, 2)"}
        answers: ["sha256:7cd3b4ea47279f7362efe4af756ffa2ea68f4815d5c1c9d0d90146369a040144"]
      - values: {"P":"(2, 0, 0)","Q":"(0, 4, 0)","R":"(0, 0, 4)"}
        answers: ["sha256:fc39d06a901d9eea8687f947b8e8bae314e91d69cd225258d6c1e7ac88cc335a"]
      - values: {"P":"(1, 1, 0)","Q":"(0, 1, 1)","R":"(1, 0, 1)"}
        answers: ["sha256:357caf6af0a322ac44a22a4e4e16c7de6a4e3ddff0a493e92e9fb7230e8f5a43"]
      - values: {"P":"(3, 0, 0)","Q":"(0, 6, 0)","R":"(0, 0, 2)"}
        answers: ["sha256:b692165822b825d9ccd33398a30ba79f9e8a0622ca08f796caabc23090915d45"]
      - values: {"P":"(1, 2, 3)","Q":"(2, 3, 1)","R":"(3, 1, 2)"}
        answers: ["sha256:79043c5e9572169791073975e36923cad9a9fc5793a504e1c17a7ad3c50b7a4a"]
      - values: {"P":"(4, 0, 0)","Q":"(0, 2, 0)","R":"(0, 0, 1)"}
        answers: ["sha256:fe5c3220834da6236a64ceb9ee5a1a802081154cef37af5341f0a2de92e6ffab"]
  - id: distancia-punto-plano
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula la distancia del punto ${{P}}$ al plano ${{pl}} = 0$. Respuesta: cuatro cifras significativas si no es exacto.
    variants:
      - values: {"P":"(1, 2, 3)","pl":"2x - y + 2z + 4"}
        answers: ["sha256:30cc53490fc5fa92aaf701cb7f04a8ec44a496e43cd3c0fc6df421be0089e87b","sha256:5048b9c3f465987bd12410d6859f52d8ec4a878ff172ff27426416bea2f4f9fe","sha256:c70265a8a59c319a3579f19ab7bc6b1db3f57768b0e462bcec193131d0f36d6c"]
      - values: {"P":"(0, 0, 0)","pl":"x + 2y + 2z - 9"}
        answers: ["sha256:68b789b28a601b16e02fe2a49bf03c17a784affe80f5a6bf32feb1faea0fa38c","sha256:412dc27875826509d5ad35281edf94f734a17c6e2042b5351ef16161cd6223f8","sha256:e99e3a2629d18bf224ac8eb19337a4ef02a9736da1bbb7700fb9278734d7a121"]
      - values: {"P":"(3, -1, 2)","pl":"4x + 3z + 1"}
        answers: ["sha256:cfa87c769d06c3a735095a0bc02eab13ab8518809ea6b2bea4a40e1b59939a62","sha256:6bdb471de1244362186ed36fd075d4e9588dc03e95e4f06422ba0a170a395bb7","sha256:0c735d3472a11c97b21733126a56629d02b18acf48843a89ea05f535a2025bb3"]
      - values: {"P":"(2, 2, 2)","pl":"x + y + z"}
        answers: ["sha256:8eb81ff96da26e7485a8418826ae2705e1a1157804f6582ee74e1f828fe5f412","sha256:f575209e75c188e422e3c15a55fb4bf140b865196e8abc2f9c2c1d6c19bc775d","sha256:1efa6e72586987476abdefba95994c0ee8bff260a615be7ffa43cac7f899d011"]
      - values: {"P":"(5, 0, 1)","pl":"2x + 3y - 6z + 7"}
        answers: ["sha256:36f999d92d1338145196994407f495d0524dbe850837f19725adaba38cd63632","sha256:0677b2dceafa823901c4f52d6ea66a88c5247a71733d9f1df3ab02395a85db4b","sha256:71242459a98370549e6c804e2cb2a21b8d23ba45a91e314e4c92aedc0825b7fe"]
      - values: {"P":"(-1, 4, 0)","pl":"3y + 4z - 2"}
        answers: ["sha256:b1b40d8faa6c6e914ed9f17792feac1d6efd302a46a9d9e6d9eeb28a2d08a82b","sha256:f8bc0aaf0d9402dbd76636e11f94abb8b6e3f0c6f65e9f9210ab9050b404333f","sha256:eedc1ac0a1c091e2d388de6d70db1dc4cff96b76e7914aaf15c4d9656681f1de"]
  - id: distancia-punto-recta
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Calcula la distancia del punto $P{{P}}$ a la recta que pasa por $A{{A}}$ con vector director ${{v}}$.
    variants:
      - values: {"P":"(1, 2, 0)","A":"(0, 0, 0)","v":"(1, 0, 0)"}
        answers: ["sha256:383cc9b59a4f47fed5902e8b354f9225103c5f6f05abbfe13c3531029443482b","sha256:8d156f3f555d9e04fb23a1672b8a31b5cea7e9e236b4fef93662901cb279ba26","sha256:d60eebb2e47b92de605fd2360e8aecfd5497093399b8276a77c5e4d363ec6792"]
      - values: {"P":"(3, 1, 2)","A":"(1, 1, 1)","v":"(0, 1, 0)"}
        answers: ["sha256:1f47d26e00b97fc184861a21db27eb11637acf2023c2343408230e72aae07abb","sha256:4bd74a15d57977c3753d0f9e45cc15cf3a09160667c1462494a698325c45cb6e","sha256:0f719f7e5db122d13c6ad3b1cf9ecede83ede8356aef4cb14994457f40290413"]
      - values: {"P":"(0, 0, 5)","A":"(1, 0, 0)","v":"(1, 1, 0)"}
        answers: ["sha256:b8838b59028d72b8df0834f4157c965a88ab0f6f8c85fa2ae7e789745ca00106","sha256:d2195505cb41bd68cf70eb38c5cb4b80f8af224dac79829b341e3ee76d9886a2","sha256:8d05743028edf8c59257528e22d36eacecf6510aeb8b7a7a4ed2bacebbc8d77a"]
      - values: {"P":"(2, 3, 4)","A":"(0, 0, 0)","v":"(1, 1, 1)"}
        answers: ["sha256:32b303c524c9864b2759f69b7a342142d0a0fc9aa4ef3a0943b97fe0d2454a1b","sha256:f84a2556306669ab00374a5843dfdd155baba0f44127c2642ae6dbf3cbeda20b","sha256:99fb607e75feecff7ecd0329f7b67dd025250193fbc9513987a3dd383b855a89"]
      - values: {"P":"(1, -1, 2)","A":"(2, 0, 1)","v":"(1, 2, 2)"}
        answers: ["sha256:eaa1059dea390652799e6b3f0a0831fa658b0aad31c4ce4fc70ecde38a958e2f","sha256:9c6d8a9e25a684f172401aa29a53c1872bf63b27f1af9915b8c286fe353d5db7","sha256:80b788ac9ce2cc1682aa7d43a995527903b61b40247a5fc1cf1bf54a502b8c56"]
      - values: {"P":"(4, 0, 0)","A":"(0, 0, 0)","v":"(0, 3, 4)"}
        answers: ["sha256:73b74328f9e523d225975d90cbf7ff62516c136648cf05902018ab96aaa07230","sha256:5d521ea8e4e9eced07770b456539ddab8cafa1a7d1831736d9d82c4064dfcc4a","sha256:9bd56a8c7ff7a7ed40bc853947d0cf267828aa9c6403c7a93de9e019d70f626e"]
  - id: distancia-entre-rectas
    tier: 3
    type: numero
    sig: 4
    prompt: |
      La recta $r$ pasa por $A{{A}}$ con director $\vec u = {{u}}$, y la recta $s$ pasa por $B{{B}}$ con director $\vec v = {{v}}$. Se cruzan.
      ¿Qué distancia hay entre ellas?
    variants:
      - values: {"A":"(0, 0, 0)","u":"(1, 0, 0)","B":"(0, 1, 1)","v":"(0, 1, 0)"}
        answers: ["sha256:28e19b6cc2c86a2295f5a55767f116b1f814cb076907f27c90ac9c5cee916480","sha256:c97ef7d7db23dbbb63d41f0e40961ac6be9d25c2de6d79bd5aacce37c58c941a","sha256:daa413154ddab67f8a2621f3ed991346358e0ac5f1259ebba7028f5368cacdf0"]
      - values: {"A":"(1, 0, 0)","u":"(0, 1, 0)","B":"(0, 0, 2)","v":"(1, 0, 0)"}
        answers: ["sha256:707e7d673c43de2e5b198e3c3d819bb7cf130664bff41a70a8c30a80f2cde9fd","sha256:193167e9983155b303e810a603d6ec5e542b504a68b17750bab8f77a1474b55c","sha256:cde6abb0fe4602ca66cac6eb6c2864a92b4f1d81b50c97b98b7b5a5773c7242e"]
      - values: {"A":"(0, 0, 0)","u":"(1, 1, 0)","B":"(1, 0, 3)","v":"(0, 1, 1)"}
        answers: ["sha256:cb704270f4c515d53dea7be182877190f7230b120901bd7af34ebccf4d73dbdb","sha256:295762627b4022f531d519e2cbc29285eba8eed0e5df6166c10e03d21e21ae73","sha256:0cbbcdbad98c07d69637daafbe5c4f5be1db06d6fb5f76ac6451e308140079ee"]
      - values: {"A":"(1, 2, 0)","u":"(1, 0, 1)","B":"(0, 0, 4)","v":"(0, 1, 0)"}
        answers: ["sha256:65c83331d5a682a13c2a927eb4f68ba14d9b31258b95ab49273ad1e2de680ef8","sha256:b6aacd8a00020bc88f2ac2ae8fc13ec574e73ea1c5e28db2d4d9344ded19de31","sha256:304bae81e025af874aec9bd0556264d955dbbfe5f24a1dba2a18769c7aed7421"]
      - values: {"A":"(2, 0, 1)","u":"(0, 1, 1)","B":"(0, 3, 0)","v":"(1, 0, 1)"}
        answers: ["sha256:3e6c92a21817852f1e0b571385d6bbd7979e86c4588368a5ee77d66e1b2fd5af","sha256:a7a0d42b51d345115817ffc8274338df0835a09a8270abfaf638a54a14df64d4","sha256:df4bf18edf4bc951c2262083f10408cc74945da38a0b3eb56578af33ad63f801"]
      - values: {"A":"(0, 1, 0)","u":"(1, 1, 1)","B":"(3, 0, 0)","v":"(1, -1, 0)"}
        answers: ["sha256:fb8be7a719d182950463c932851abacb0a56c7697d8e84bbf39beb92b73972e8","sha256:fba7d068a021c0fc7b9aaffb671b54e0e549305ca8b29d4b2a6206902cae32ff","sha256:b2707541a46b69a8558ee541faad934d19d9baebd38e525d846575dd54178fcc"]
  - id: posicion-rectas
    tier: 3
    type: opcion
    prompt: |
      La recta $r$ pasa por $(0, 0, 0)$ con director $(1, 0, 0)$ y la recta $s$ pasa por $(0, 1, 1)$ con director $(0, 1, 0)$. ¿Cuál es
      su posición relativa?
    options:
      - |
        Son paralelas
      - |
        Se cortan en un punto
      - |
        Se cruzan
      - |
        Son coincidentes
    answers: ["sha256:42da2c7b8e26328a124aceb355d29f92fbde6ed4e77c8acec57c398985f3d0ff"]
  - id: recta-plano-paralela
    tier: 3
    type: opcion
    prompt: |
      La recta $(x, y, z) = (1, 0, 0) + t(1, 1, 1)$ y el plano $x - 2y + z = 5$. ¿Qué posición relativa tienen?
    options:
      - |
        Paralela al plano, sin tocarlo
      - |
        Corta al plano en un punto
      - |
        Contenida en el plano
      - |
        Perpendicular al plano
    answers: ["sha256:0c4569736b2c12359a7fae9b45409034a2065956adcef801f6ef8d106172f56f"]
  - id: distancia-punto-plano-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que la distancia de $P_0 = (x_0, y_0, z_0)$ al plano $Ax + By + Cz + D = 0$ es
      $\dfrac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$. Explica por qué la distancia se mide a lo largo del vector normal.
    sealed: "gz64:H4sIAAAAAAACCqVUy27bMBD8lYHAg40qhu2jCx8cJ0BQ9BAB7alshDVFOwQo0iEl1w/pY3LsIad8gn6soOQ4cVu0BXqRQC65Ozszy0PkrS4LZU00ia41NlIU1oFxvpECBlP0ZjEuY8z7DNJjLd1amkyJUpMDaaw1GTuBV2BJOoqRpONwsGgeDaRB813HYDNs0xHe4XLX/ub7dIQpLq4wxWybjrvIuIuMWYwdN076gkxm41csnIvMFuDcbqRzanVfkHP22yFJR0k6rjHFkA244eYjIVPhulCETILdpkN2Ahva0GFfY12awiJvHj2EdCIE2Q17D6nh5SqXIRou3/yhd/S8grHQFstSOoq5WVuHW1U0jyvryOOeFq55IpTmNwX7Mcg3T3goZVuDHGmpLejUNxvgk80DFxAl6YdSSXdMxBLW9RGAxGBVwFoFsNxogrZmpYoyCxxowtrZnRRCNc+mZeVXIm/TYc3g7cLJ1/ITbhjjJsMUnC8diUP1V0VCoqo+HazqN5dnvW06xAW2adIPyvd27XLXLee9fbvcp0m/qg+c+wdXHGZ3rUna7/xuXNcYdKjmNrdgs22adCZKOhMlrb1YHJQ0ZS4dZdYFflk1C9Xbs8PubPhdVcF18BJ2UShpWr6WzbPLS02DKI5cuXBKRJMvh0g4VUinbDSJPpS+UEslqJWPnY+KsS4nffJJyNKq5qPJqI7P8lxv1/oli35r3rx5MiqnAIy0ILOnMFRByzMv9l7d1scOwX8FBYN4iVxlEsEL0ORW9qj80VlvMI1/xuSFU4v/MQ6ENUGADWnrQIv2pbHYhb28ec5K/e9oPvsjx8nxdQk8vDi/nRpoLVdhLv+g8bkGX+sfNmBZEP4EAAA="
  - id: r-normal
    tier: 1
    review: true
    prompt: |
      Escribe un vector normal al plano $2x - y + 5z = 7$. Respuesta: «a;b;c» (el que se lee directamente de la ecuación).
    answers: ["sha256:0ddf3f074304011928f0eb9026b5f8832f1defcc3571ceb811c171d04f14ac74"]
  - id: r-cruzarse
    tier: 1
    type: opcion
    review: true
    prompt: |
      En el espacio, dos rectas que **no** son paralelas…
    options:
      - |
        Siempre se cortan
      - |
        Pueden cruzarse sin tocarse
      - |
        Siempre son paralelas
      - |
        Siempre están en un mismo plano
    answers: ["sha256:978bf63d6db3faa6d363cb9c388a4d422ee9795b5fced3ace81d5bd878b02753"]
  - id: r-vectorial-paralelos
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si $\vec u \times \vec v = \vec 0$ (con $\vec u, \vec v$ no nulos), entonces $\vec u$ y $\vec v$…
    options:
      - |
        Tienen el mismo módulo
      - |
        Son perpendiculares
      - |
        Forman $45^\circ$
      - |
        Son paralelos
    answers: ["sha256:536e400b334547e75984a479990e3ffd582486861a6b7f5f7a831ec24f22baab"]
  - id: r-modulo-3d
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Calcula el módulo de $(2, 3, 6)$.
    answers: ["sha256:4a8f4b5d0553dd12d16bc0e7b65faa6f6cabc42b4f19758874ad95923f6e19f9","sha256:f15c42416e6d718abcc0fa57fae219e2f7f660aea8665422c3343522dec31687","sha256:7b3ebbce68e1156680877d6987f8f7196fde5ea9ed410f933646078ed99dc12c"]
  - id: r-tetraedro
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Las aristas de un tetraedro que salen de un vértice son $(1, 0, 0)$, $(0, 2, 0)$ y $(0, 0, 3)$. ¿Cuál es su volumen?
    answers: ["sha256:4885defe97dc2b9454b7e4a64c8b7dd5e1c579ae35b1a7a9c8295f42449784b6","sha256:c9c40f550ecbf7e11ec230c390c232acedc004ac8586b2c68c9598639d7ee58b","sha256:0f51817fbaddd7c5bb66830cadf19701d2b183f5ba2c589ec622df4824e2c40d"]
  - id: r-anticonmutativo
    tier: 2
    review: true
    prompt: |
      Si $\vec u \times \vec v = (6, -3, 1)$, ¿cuánto vale $\vec v \times \vec u$? Respuesta «a;b;c».
    answers: ["sha256:a3d9027ca3928c90c590e9f4eab14d32ac2f821ee65f57ef6fe8bb359e2a3ea5"]
---

# Geometría del espacio: vectores, rectas, planos, ángulos y distancias

Vivimos en tres dimensiones. Un dron, la cámara de un videojuego, el brazo de un robot o un satélite necesitan
coordenadas $(x, y, z)$, y las preguntas son las mismas que en el plano pero con más juego: ¿se cortan estas dos rectas?
¿a qué distancia pasa el avión de la antena? ¿qué ángulo forman dos paredes? Este nodo lleva la geometría analítica de
[[mat-geometria-analitica]] al espacio, con tres herramientas nuevas: el **producto vectorial**, el **producto mixto** y
los **planos**.

## Objetivos

Al terminar sabrás:

1. Operar con vectores en el espacio y decidir si son linealmente independientes.
2. Usar los productos escalar, vectorial y mixto para calcular ángulos, áreas y volúmenes.
3. Escribir la ecuación de una recta y de un plano en sus distintas formas.
4. Estudiar posiciones relativas de rectas y planos.
5. Calcular ángulos, proyecciones, simétricos y distancias en el espacio.

> [!question] Test de entrada
> 1. Producto escalar de $(1, 2)$ y $(3, -1)$. 2. Distancia de $(0, 0)$ a la recta $3x + 4y - 10 = 0$. 3. Determinante de
> $\begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$.
>
> Respuestas: $1$; $2$; $2$. Si fallas la 3, repasa [[mat-algebra-lineal-1]].

## 1. Para qué sirve

- **Gráficos 3D**: la iluminación de cada superficie se calcula con el vector normal y el producto escalar; el producto
  vectorial da la orientación de cada triángulo de un modelo.
- **Robótica y drones**: posiciones, orientaciones y distancias a obstáculos.
- **Física**: el efecto de giro de un empujón sobre una llave inglesa y la desviación que sufre una partícula cargada
  que se mueve en un campo magnético (por ejemplo, entre los polos de un imán) se calculan con productos vectoriales.
- **Ingeniería y arquitectura**: ángulos entre paredes, volúmenes, intersecciones de planos.

## 2. Vectores en el espacio

> [!practico]
> En el espacio, una flecha necesita **tres** números: cuánto avanza a lo ancho, a lo largo y hacia arriba. Todo lo que
> sabías de vectores en el plano sigue valiendo con una coordenada más. Lo nuevo: tres flechas pueden estar en el mismo
> plano (como tres palos apoyados en una mesa) o no; si no lo están, con ellas se puede llegar a cualquier punto del espacio
> combinándolas: forman una **base**.

Un vector es $\vec u = (u_1, u_2, u_3)$; se suma y se multiplica por números componente a componente, y su **módulo** es
$|\vec u| = \sqrt{u_1^2 + u_2^2 + u_3^2}$. El vector de $A$ a $B$ es $\overrightarrow{AB} = B - A$.

Unos vectores son **linealmente dependientes** si uno es combinación de los otros. Dos vectores lo son si son
proporcionales; **tres vectores** del espacio son dependientes si y solo si el determinante de la matriz que forman es
$0$ (es decir, si están en un mismo plano). Tres vectores independientes forman una **base**: todo vector se escribe de
forma única como combinación de ellos.

## 3. Producto escalar

> [!practico]
> Igual que en el plano: multiplica coordenada a coordenada y suma. Si sale $0$, las flechas son perpendiculares; si sale
> positivo, forman un ángulo agudo; si negativo, obtuso.

$$
\vec u \cdot \vec v = u_1 v_1 + u_2 v_2 + u_3 v_3 = |\vec u|\,|\vec v| \cos\theta .
$$

Sirve para el **ángulo** entre dos vectores, para decidir la **perpendicularidad** ($\vec u \cdot \vec v = 0$) y para la
**proyección** de $\vec u$ sobre $\vec v$, de longitud $\frac{|\vec u \cdot \vec v|}{|\vec v|}$. La demostración de la igualdad es la
del plano (teorema del coseno), con tres coordenadas.

## 4. Producto vectorial

> [!practico]
> Con dos flechas en el espacio se construye una tercera **perpendicular a las dos**, como el palo de una sombrilla
> respecto a la tela. Su sentido lo da la **regla de la mano derecha** (dedos de la primera a la segunda; el pulgar indica
> el resultado) y su longitud es el **área** del paralelogramo que forman las dos flechas.

$$
\vec u \times \vec v = (u_2 v_3 - u_3 v_2,\ u_3 v_1 - u_1 v_3,\ u_1 v_2 - u_2 v_1) ,
$$

que se recuerda como el «determinante» $\begin{vmatrix} \vec i & \vec j & \vec k \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix}$ desarrollado
por la primera fila. Propiedades: es perpendicular a $\vec u$ y a $\vec v$; $\vec v \times \vec u = -\vec u \times \vec v$ (**no** es
conmutativo); es $\vec 0$ si y solo si $\vec u$ y $\vec v$ son paralelos; y

$$
|\vec u \times \vec v| = |\vec u|\,|\vec v| \sin\theta = \text{área del paralelogramo de lados } \vec u, \vec v .
$$

> [!formal] Con rigor: perpendicularidad y módulo
> $(\vec u \times \vec v)\cdot \vec u = u_1(u_2v_3 - u_3v_2) + u_2(u_3v_1 - u_1v_3) + u_3(u_1v_2 - u_2v_1) = 0$ (los seis términos se
> cancelan dos a dos); igual con $\vec v$. Para el módulo, desarrollando se comprueba la **identidad de Lagrange**
> $|\vec u \times \vec v|^2 = |\vec u|^2|\vec v|^2 - (\vec u\cdot\vec v)^2$. Como $\vec u \cdot \vec v = |\vec u||\vec v|\cos\theta$, queda
> $|\vec u|^2|\vec v|^2(1 - \cos^2\theta) = |\vec u|^2|\vec v|^2\sin^2\theta$, y el área del paralelogramo es base por altura,
> $|\vec u| \cdot |\vec v|\sin\theta$. $\blacksquare$

**Ejemplo resuelto.** $\vec u = (1, 2, 0)$, $\vec v = (0, 1, 3)$: $\vec u \times \vec v = (6, -3, 1)$. Comprobación:
$(6, -3, 1)\cdot(1, 2, 0) = 0$ y $(6, -3, 1)\cdot(0, 1, 3) = 0$. $\checkmark$ El área del paralelogramo es
$\sqrt{36 + 9 + 1} = \sqrt{46}$ y la del triángulo, la mitad.

## 5. Producto mixto

> [!practico]
> Tres flechas que salen de una esquina forman una «caja inclinada» (paralelepípedo). El producto mixto da su volumen.
> Si sale $0$, la caja es plana: las tres flechas están en el mismo plano.

$$
[\vec u, \vec v, \vec w] = \vec u \cdot (\vec v \times \vec w) = \det\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{pmatrix} .
$$

Su valor absoluto es el **volumen del paralelepípedo** de aristas $\vec u, \vec v, \vec w$ (área de la base $|\vec v \times \vec w|$
por la altura, que es la proyección de $\vec u$ sobre la normal a la base). El tetraedro con esas aristas tiene $\frac16$ de
ese volumen. Cuatro puntos son **coplanarios** si el producto mixto de los tres vectores que salen de uno de ellos es $0$.

## 6. Rectas en el espacio

> [!practico]
> Una recta queda fijada por un punto y una dirección: «sal de aquí y avanza siempre en esta dirección». Variando
> cuánto avanzas (el **parámetro** $t$) recorres todos sus puntos.

Con un punto $A = (a_1, a_2, a_3)$ y un **vector director** $\vec v = (v_1, v_2, v_3)$:

- **vectorial**: $(x, y, z) = A + t\,\vec v$;
- **paramétricas**: $x = a_1 + tv_1$, $y = a_2 + tv_2$, $z = a_3 + tv_3$;
- **continua**: $\dfrac{x - a_1}{v_1} = \dfrac{y - a_2}{v_2} = \dfrac{z - a_3}{v_3}$ (si ninguna $v_i$ es $0$);
- **implícitas**: como intersección de dos planos.

Por dos puntos $A$ y $B$ pasa la recta de director $\overrightarrow{AB}$.

## 7. Planos

> [!practico]
> Un plano (una pared, una mesa) queda fijado por un punto y la dirección **perpendicular** a él, como la dirección en la
> que apunta un clavo clavado en la pared. Ese vector perpendicular es el **normal**, y con él la ecuación es muy simple.

Con un punto $P_0$ y un vector **normal** $\vec n = (A, B, C)$, los puntos $P$ del plano cumplen $\vec n \cdot \overrightarrow{P_0P} = 0$, es
decir

$$
Ax + By + Cz + D = 0 .
$$

Por **tres puntos** no alineados $P, Q, R$ pasa un único plano, de normal $\overrightarrow{PQ} \times \overrightarrow{PR}$.

**Ejemplo resuelto.** Plano por $P(1, 0, 0)$, $Q(0, 2, 0)$ y $R(0, 0, 3)$: $\overrightarrow{PQ} = (-1, 2, 0)$, $\overrightarrow{PR} = (-1, 0, 3)$,
normal $(6, 3, 2)$; ecuación $6x + 3y + 2z = 6$, o $\frac{x}{1} + \frac{y}{2} + \frac{z}{3} = 1$ (forma **segmentaria**: corta a los
ejes en $1$, $2$ y $3$).

## 8. Posiciones relativas

- **Dos planos**: paralelos (normales proporcionales), coincidentes o se cortan en una recta.
- **Recta y plano**: si $\vec v \cdot \vec n \ne 0$, se cortan en un punto; si $\vec v \cdot \vec n = 0$, la recta está contenida en el
  plano si el punto $A$ está en él, y es paralela al plano si no lo está.
- **Dos rectas** con puntos $A$, $B$ y directores $\vec u$, $\vec v$: si $\vec u$ y $\vec v$ son paralelos, son paralelas o
  coincidentes; si no, **se cortan** cuando $[\overrightarrow{AB}, \vec u, \vec v] = 0$ (están en un mismo plano) y **se cruzan**
  (no se tocan ni son paralelas, como dos carreteras a distinta altura en un paso elevado) cuando es distinto de $0$.

Con tres planos, las posiciones se estudian con el rango de la matriz del sistema, como en [[mat-algebra-lineal-1]].

## 9. Ángulos y distancias

**Ángulos.** Entre dos rectas, el de sus directores (agudo: con $|\vec u \cdot \vec v|$); entre dos planos, el de sus normales (agudo: con $|\vec n_1 \cdot \vec n_2|$);
entre recta y plano, el **complementario** del ángulo entre $\vec v$ y $\vec n$: $\sin\alpha = \frac{|\vec v\cdot\vec n|}{|\vec v||\vec n|}$.

**Distancias.**

$$
d(P_0, \pi) = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}, \qquad
d(P, r) = \frac{|\overrightarrow{AP} \times \vec v|}{|\vec v|}, \qquad
d(r, s) = \frac{|[\overrightarrow{AB}, \vec u, \vec v]|}{|\vec u \times \vec v|}\ \text{(si se cruzan)} .
$$

> [!formal] Con rigor: de dónde salen
> *Punto-plano.* Si $Q$ es un punto del plano, la distancia es la longitud de la proyección de $\overrightarrow{QP_0}$ sobre la normal:
> $\frac{|\vec n \cdot \overrightarrow{QP_0}|}{|\vec n|}$, y como $Ax_Q + By_Q + Cz_Q = -D$, el numerador es $|Ax_0 + By_0 + Cz_0 + D|$.
> *Punto-recta.* El área del paralelogramo de lados $\overrightarrow{AP}$ y $\vec v$ es $|\overrightarrow{AP} \times \vec v|$; dividida por la
> base $|\vec v|$ da la altura, que es la distancia de $P$ a la recta.
> *Rectas que se cruzan.* El paralelepípedo de aristas $\overrightarrow{AB}$, $\vec u$, $\vec v$ tiene volumen
> $|[\overrightarrow{AB}, \vec u, \vec v]|$ y base de área $|\vec u \times \vec v|$; su altura es la distancia entre los planos paralelos que
> contienen a cada recta, que es la distancia entre las rectas. $\blacksquare$

**Ejemplo resuelto.** Distancia de $P(2, 1, 5)$ al plano $6x + 3y + 2z - 6 = 0$: $\frac{|12 + 3 + 10 - 6|}{\sqrt{49}} = \frac{19}{7}$.

**Proyecciones y simétricos.** La proyección de $P$ sobre un plano es el corte con el plano de la recta que pasa por $P$ con
director $\vec n$; el simétrico $P'$ cumple que esa proyección es el punto medio de $PP'$.

## 10. Errores típicos

- Confundir el vector director de una recta con el normal de un plano.
- Calcular $\vec v \times \vec u$ en lugar de $\vec u \times \vec v$ (cambia el signo).
- Concluir que dos rectas no paralelas se cortan: en el espacio pueden **cruzarse**.
- Olvidar el valor absoluto en las distancias o la raíz del denominador.
- En el ángulo recta-plano, usar el coseno en vez del seno.

## Repaso: lo que debe quedarte dentro de un mes

1. Tres vectores son dependientes $\iff$ su determinante es $0$ (coplanarios).
2. $\vec u \times \vec v$ es perpendicular a ambos y $|\vec u \times \vec v|$ es un área; el producto mixto es un volumen.
3. Plano: $Ax + By + Cz + D = 0$ con normal $(A, B, C)$; recta: punto y director.
4. Dos rectas: paralelas, se cortan o se cruzan (producto mixto).
5. $d(P, \pi) = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}$; punto-recta y recta-recta con productos vectorial y mixto.

## Siguiente

[[mat-calculo-multivariable]] estudia funciones de varias variables en este mismo espacio, y la física de Bachillerato usa
estos vectores para describir empujes, velocidades y campos.
