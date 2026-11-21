---
id: mat-vectores-espacio
title: "Vectores en el espacio: operaciones, dependencia lineal y bases, productos escalar, vectorial y mixto, áreas y volúmenes"
area: matematicas
trunk_level: 4
prerequisites: [mat-vectores-rectas-plano, mat-determinantes]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 4: «Vectores en el espacio», secciones 2 (definición, operaciones, bases, sistema de referencia, dependencia e independencia lineal), 3 (producto escalar: definición, interpretación, propiedades, expresión analítica, aplicaciones), 4 (producto vectorial) y 5 (producto mixto). Apuntes Marea Verde, autores Leticia González Pascual y Álvaro Valdés Menéndez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2004%20Vectores.pdf"
  - "OpenStax, «Calculus Volume 3» (2016), capítulo 2: «Vectors in Space» (secciones 2.2-2.4: vectores en tres dimensiones, producto escalar, producto vectorial). https://openstax.org/details/books/calculus-volume-3"
hints:
  - "Concepto: en el espacio cada vector tiene tres componentes. El producto escalar (un número) mide ángulos y perpendicularidad; el vectorial (un vector) es perpendicular a los dos y su módulo es el área del paralelogramo; el mixto (un número) es el volumen del paralelepípedo."
  - "Herramienta: u·v = u₁v₁ + u₂v₂ + u₃v₃; u × v se calcula como un determinante con i, j, k en la primera fila; [u, v, w] = det(u, v, w). Tres vectores son coplanarios (dependientes) si su determinante es 0."
  - "Documentación: Marea Verde Matemáticas II cap. 4; OpenStax Calculus Volume 3, cap. 2."
exercises:
  - id: modulo-en-el-espacio
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula el módulo de $\vec u = {{u}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"u":"(2, 3, 6)"}
        answers: ["sha256:321d9a72e32fb206dd56d063a942dcb1e34f2759271cbc9fcdf1bed99fd051cc","sha256:a896e7d7a0cf9e4db0f02ac328f03887a4a91e5a67c1e8d50f824d7c5f74f448","sha256:be13d086ecefa12dc24dfa36d7b9a37d1201995e89ca2cdbdf803ef6bd5b6832"]
      - values: {"u":"(1, -4, 8)"}
        answers: ["sha256:92042f45f6423372432f4c4cacc2496cdf65b90cf2e68791f43af980e8ec9f21","sha256:781f70805a1eb8156dda284c8e71c1cbde6af5036c19d92c0c4b465d92477663","sha256:afd7329cca88d000e594f45cdc9059472101bb8f4957a473ab5dc5fb1e0237f4"]
      - values: {"u":"(-2, 10, 11)"}
        answers: ["sha256:6677cdb326d78996585384b9d019f97ce62a79265cd33843699b503462fa6bc1","sha256:25e40a2840c834bd1054b2de6f4acd9fef7079cbda34edd5b43517dc4748389a","sha256:a258ffe6a185eeaae4ca85c76ea6e5895f26d288e4e98e666f3f3accd10bf925"]
      - values: {"u":"(3, 3, 3)"}
        answers: ["sha256:5bd29a2b2ca9d7a1a93613c26a81ca7b69799c72836764c30a27d1b070783dde","sha256:e2b28dd9bff951bf50610af716961afffd7746c92d15f0a0e108bc724a51613f","sha256:4f6e792710e2790c962cff5435cc03678191638537c6164aaebd5b62c6037ebc"]
      - values: {"u":"(0, 5, -12)"}
        answers: ["sha256:4853b2696d53d482c82814cb58e971992ed4cfc948db094ad03165bdf08b381e","sha256:4354026820e9096e14685898a60ad9de1879a5e6bce574bc9e30937eb39d00b5","sha256:4991e467a97af97756aca4e10464e964000c4899db4b648b07177519739f6d5c"]
      - values: {"u":"(1, 1, 2)"}
        answers: ["sha256:bea6be5b7a27ff28523ad8162fdb4fb7e72e2ea42443665b26f41de2d7791fba","sha256:c9d6313cc4f062b729f1df6b1377e73de5bbb7f00ac1aaab34b94e45b4990afd","sha256:dd45cbdf95d92e6b96a9e812285ca0a6be4fc06573a9af3adaa4767e0042cefa"]
  - id: combinacion-lineal-3d
    tier: 1
    prompt: |
      Con $\vec u = {{u}}$ y $\vec v = {{v}}$, calcula ${{a}}\,\vec u {{b}}\,\vec v$. Respuesta: `x;y;z`.
    variants:
      - values: {"u":"(1, 0, 2)","v":"(3, -1, 1)","a":"2","b":"- 1"}
        answers: ["sha256:7e501c0c2fbf8cd2f1772eaaca6a933d4b54de873cf35396f355d2a06526a806"]
      - values: {"u":"(2, 2, -1)","v":"(0, 1, 4)","a":"-3","b":"+ 2"}
        answers: ["sha256:7fc64771624e90798d85df6b66fd82ba379289723d637be25826f113ecf4fe4d"]
      - values: {"u":"(1, 1, 1)","v":"(1, -1, 0)","a":"4","b":"+ 5"}
        answers: ["sha256:ad29fc8fd574108acde80e69475118a18c9b835cd7bdf5d016a3dd8f7ada8eb9"]
      - values: {"u":"(0, 3, -2)","v":"(2, 0, 1)","a":"0{,}5","b":"- 2"}
        answers: ["sha256:26ea7da3586640b33dad7e992d5383a60edfab2653d914f5b546316368fc03f0"]
      - values: {"u":"(-1, 2, 5)","v":"(3, 3, 0)","a":"1","b":"+ 1"}
        answers: ["sha256:b52972760f554e6c0c89156067420bf4c5e20ef02624fd9fd2a4162a5471704b"]
      - values: {"u":"(4, 0, -4)","v":"(1, 2, 3)","a":"-0{,}5","b":"+ 3"}
        answers: ["sha256:3d36e080c4b660046a2511fcd3956bac4ea0388b7387a5bae1c09bf00f525dce"]
  - id: producto-escalar-3d
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula $\vec u \cdot \vec v$ con $\vec u = {{u}}$ y $\vec v = {{v}}$.
    variants:
      - values: {"u":"(2, -1, 3)","v":"(4, 5, 1)"}
        answers: ["sha256:0ce1ac9723eeb4149dc4b01f31a7b1eb1b51f274609dc9fc2fed2f62654071d2","sha256:5f684bf798f9006fe743dbbdc4380193e8cffa66951c84ae402eae20a2f38580","sha256:aa27dd3467f0603d48d7ef33f29b2957990b5c7314c8882af9ce33c057f146a8"]
      - values: {"u":"(1, 2, 3)","v":"(-3, 2, 1)"}
        answers: ["sha256:adbf4fcd9e53d33e0e1de94d062d59654ac5e2be09e6d309884e73b31400e024","sha256:bf758defd2f5633f64952b53e09d9311708486f5d29b0b84c69c13481012d4bb","sha256:16af990260da628155c54d467fbffcbc19544c55fb05888bf668c4666a9e0a80"]
      - values: {"u":"(0, 4, -2)","v":"(5, 3, 2)"}
        answers: ["sha256:9005100e846b81c9acb747aa6a4bdf50d5a775705c7840c56b4ee7248018eaba","sha256:30d75eb83582205b2f79e74e3964af6c3bc0a793423fa8f02ed91a6c6ec50af8","sha256:0fc5853715c566ef148c197e746bf260ce003885b75fce23ca2730245e8905ab"]
      - values: {"u":"(-1, -1, 2)","v":"(3, -2, 4)"}
        answers: ["sha256:85a1ea9c6c23ed04e3222443f6a253f84a74c01a9ec74499403717aed5a16b2b","sha256:0161ff39873c72ed0f062bd0e7a20d42a1ff319daffee236d9aeef2dae3a0fa7","sha256:167b74e7f27985f755dab57229682c929b9f369e915c26e3b15c903c37a6a55e"]
      - values: {"u":"(6, 0, 1)","v":"(2, 7, -3)"}
        answers: ["sha256:0ac72b37937683120d816bf9b62d3ffb15d6d7a7ab447f02584cdf019d89766e","sha256:fdf68039e2ad27f1f94a9bac7dfb83ef315b6b79c98ede611ff05a8adbb85f5e","sha256:c7128549997c70adc03e1a67067db26e123eba50d59c5db7a65f667742217a7f"]
      - values: {"u":"(2, 3, 1)","v":"(2, -1, -1)"}
        answers: ["sha256:ff96c52b41dce349fe66e56b776124e5b0e46e4e35bc9a7bbccdd4c4ecdff786","sha256:5ab9b792d6e221b5f0397969dde86ab91caa1facea36ebdf701bb96d326e98d1","sha256:4d966dd4abfb254196def61b1e87f9f5d36c263329f12c8c44a5f0b44d4b2cd0"]
  - id: angulo-entre-vectores-3d
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué ángulo, en grados, forman $\vec u = {{u}}$ y $\vec v = {{v}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"u":"(1, 1, 0)","v":"(0, 1, 1)"}
        answers: ["sha256:ebe3d36c05a14b862e292826c484e76e4bdbf4e28adc93e0deb8751ab0804bdb","sha256:80c24052b24721535c002da9ff29cefc0834ee6953d85fab7ae76e342e05c593","sha256:b688f736adb14e1b9eaad94c0ee4b191a532121a2a291ebcf80e1ce539c51499"]
      - values: {"u":"(2, -1, 2)","v":"(1, 2, 2)"}
        answers: ["sha256:f0e2a29bbb3da2eb21ff8fae289ede889461fa66089c8603da8a4a164b70c81f","sha256:3ca518cb18ec3039512d8288cc075a14e2fd136f71ce8109503f81e853a7df4e","sha256:64fa7a44841f4b6049738770997dd566c5174fb3a6d9bad21c341c0d109fad22"]
      - values: {"u":"(1, 0, -1)","v":"(-1, 2, 1)"}
        answers: ["sha256:a0512e9e446405b16ee347794bcd0a13521d3b7ba721f2dcbfefffaf67df7f63","sha256:562a1f930901c362a110b7198ef1cff03fc4de1360c39425b8cd4f7d6e22818b","sha256:d97d10e1ed4226182aebfc215f2eb545051466fba92ded3ae343e18dcc848ffe"]
      - values: {"u":"(3, 4, 0)","v":"(0, 3, 4)"}
        answers: ["sha256:88b85fb8953ac8f5f9db82404b7cb9ed3607709e7f1eb5ef7668b8ad26a165d1","sha256:1a16bc5ea23643f3fe827fc7296a5e0e65c2c761838a4a6ec7897eaa17fc2482","sha256:8222ba4d40213339d12fc098787553790f65beaa26e2069a60cd0af33169cf2a"]
      - values: {"u":"(1, 2, 3)","v":"(3, 2, 1)"}
        answers: ["sha256:e7bf05c6b9b8c49ef2aea762fc9c377806e08a333623eccd26223687cafce762","sha256:03e20b50f51de34ae27d1f1130df2805380f4afb15b92ee57eccdbb9486c6d0d","sha256:de418cbf81797f12184419b9699a8d84e837b66a136c488dbefe42409a25cf87"]
      - values: {"u":"(-2, 1, 0)","v":"(1, 1, 1)"}
        answers: ["sha256:451b0a11d6e818ea8d6ddcdaf15dd7d8ce8e6fb6e7a2c9dc5f17a13f42247b61","sha256:a6065d321c507ea9b071971302eeed1f3e98abbcdac24e5b428a3e99d85bee68","sha256:7b4b47d211f5354a80b935719d8fe2052091500e3985ab870fbc52b7829c9df1"]
  - id: dependencia-lineal
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Para qué valor de $k$ son linealmente dependientes (coplanarios) los vectores ${{u}}$, ${{v}}$ y ${{w}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"u":"(1, 2, 0)","v":"(0, 1, 3)","w":"(2, k, 1)"}
        answers: ["sha256:39c0f660fe0cc4d938f779be438b44447c27b857902a94f936e8d7ef5905eca5","sha256:8753873ef1140077d50572b9ac2873a60c7a7455a1904ef779f96e3e403fba14","sha256:a636e51245cbf2780611394bb26e0d06cacbd80dd4cca74d90a20babcb82c8c2"]
      - values: {"u":"(1, 1, 1)","v":"(1, k, 2)","w":"(1, 2, 3)"}
        answers: ["sha256:f5b4b90b01f19d109c2bd4ad1667db65d301aed1205bca8a007d7f83e0e65877","sha256:6e89f6670000facd3c2382b47a02d4bbbb1e9a67e17a8c2364d92a5d544bc052","sha256:be432c82dca4c8d17064742fca11114f1e7e8949cc7074c909a17edfc8e0aae7"]
      - values: {"u":"(k, 1, 0)","v":"(1, 2, 1)","w":"(0, 1, 3)"}
        answers: ["sha256:6692b02504ede09b54b5106f7346f68eb486494a2209c7ca90acd6b561cfcea5","sha256:d621e63b3842bf5f68fadb7cfaf9a11fde55599ccfbdac8594c4711d717a52de","sha256:3a17e4fbd763dc83e629b7a015bb7a016f86335bf7c73e8e42b0f0bc817358de"]
      - values: {"u":"(2, 0, 1)","v":"(1, 1, k)","w":"(3, 1, 2)"}
        answers: ["sha256:9f20c0def86415b55e580eb1e1889b6d679bd9284fa331686d3d09a6f00dc0c8","sha256:adce5d2d4c5eb550e6a1022ecc083692ce68ac5f568f5aa73ca8ec91d892ca42","sha256:1d22cc980a0a4af456169daac12d841be4549394f4e714b050656359a12be7e3"]
      - values: {"u":"(1, -1, 2)","v":"(0, 3, 1)","w":"(k, 2, 4)"}
        answers: ["sha256:b1c9bc37b1c1824e5d7aa37e2e4d808f5df505046eb28af5fcb36b610a95b166","sha256:8515345e92535ce5c7c6f20e73894e60247288e2bdfc83b23b28a13daf3e7497","sha256:7c743a5572162834acf5859086ded3fadeb2551da5d28187142bba420adb7a7b"]
      - values: {"u":"(1, 2, 3)","v":"(4, 5, 6)","w":"(7, 8, k)"}
        answers: ["sha256:f8b6c8333ed86e63ca14d2d64ab7996ab76ce41a1df658a5023a240a427671ad","sha256:4f0a0a6da185705a879464818f86e41a8812d6891f0a847a0006a2083bd0c852","sha256:8d9733b76fe92d8ff1176ec5e558067b517fda3b74a820fdb16ef925e3065ea7"]
  - id: producto-vectorial
    tier: 1
    prompt: |
      Calcula $\vec u \times \vec v$ con $\vec u = {{u}}$ y $\vec v = {{v}}$. Respuesta: `x;y;z`.
    variants:
      - values: {"u":"(1, 2, 3)","v":"(4, 5, 6)"}
        answers: ["sha256:6a9e7fa621ba1e1a2d6184385435eb204779d68238a37a73928018dcdb061b61"]
      - values: {"u":"(2, 0, -1)","v":"(1, 3, 2)"}
        answers: ["sha256:6424bd8be42fd96dc440d68b0b0c5553dab478709e7d831d209aa7418714a256"]
      - values: {"u":"(0, 1, 1)","v":"(1, 0, 1)"}
        answers: ["sha256:619be5389fc4f489b9681e4c9f778b536f5b5a1c1655e3a46a9789050307774c"]
      - values: {"u":"(3, -2, 1)","v":"(1, 1, -1)"}
        answers: ["sha256:c7f1556c4bfcca8b19fba14a451fc935cf2e9f874f57b3c4b8ffd18313cfa3b5"]
      - values: {"u":"(1, 1, 0)","v":"(2, -1, 4)"}
        answers: ["sha256:d77a1c19d525055aaf951b3181398df7b341f4005db475539e15d46abbfdc16d"]
      - values: {"u":"(-2, 4, 1)","v":"(3, 0, 2)"}
        answers: ["sha256:8363ebeef094b1c14a438a7cc56a260a995e0995fd909a73c0c23a5db6d8ed3f"]
  - id: area-del-paralelogramo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el área del paralelogramo de lados $\vec u = {{u}}$ y $\vec v = {{v}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"u":"(2, 1, 0)","v":"(1, 3, 0)"}
        answers: ["sha256:5c8fa19df1c60611e98d559e55727a46901943cb638264d29d317cac5ce835ec","sha256:8e09cb89a2a84ddcc136400163f94213de0bfa3c37ec8a2e7c0e5aa5274f8f5f","sha256:6f1b5b13fa87dc99991e3d59851d179e1445f29fd5747c00d302dcb117e57c51"]
      - values: {"u":"(1, 2, 2)","v":"(2, 0, 1)"}
        answers: ["sha256:0a8642b74f18a28f9084fcf246b499ea1990907d46ff1ce3861a58def9eaf13e","sha256:1547efb044acd63eac140ab7a0c007d52cbd446a0107ee5d04276e614cb997aa","sha256:b0a0ce2a35c1ec3e9058d1d77d1b39ba7e6393fb9200cfa7c5ba2d21f1144bb5"]
      - values: {"u":"(3, 0, 0)","v":"(1, 4, 0)"}
        answers: ["sha256:7e13f176644e65f316f7e8072ce9b0a969fda12be9ffc82c2ef1227a0a89b20a","sha256:5b4900d169a2ed5419632ba248f6489b4879cfdd45a940f6da501992860ecb7f","sha256:fcacb89fe842e35dc53dcf6d18027ba647525302710b81334fbccbc11e8c76a3"]
      - values: {"u":"(1, -1, 1)","v":"(2, 1, -1)"}
        answers: ["sha256:f41bb82357df7e3828451ab182787f8bc45aaba6e6db1db577784df90dd56737","sha256:eb41c0685c47eae3063da32a14b07ddfe471b4b412c9b2b93c7d955d3b742664","sha256:f6098bde70bd2ffea2a2acb3c6417a7cc4fbe9580f7225122d5dc2293de54c1c"]
      - values: {"u":"(0, 2, 3)","v":"(1, 1, 1)"}
        answers: ["sha256:d0f94465211bdbd6333bc139242b94851d6ea31d561a3f1cd1bb1c1b1ff46057","sha256:f49a75d72400ba90079a04fb705b09e58b5a3e569c373c6b28e432fc7edd3297","sha256:dc3d57d93760d15dd5590c1e639f945493fdf3a783344a1a739cf0caeeb44f4c"]
      - values: {"u":"(4, 1, 2)","v":"(-1, 2, 0)"}
        answers: ["sha256:e2418ec32e1ddaf5d3f178d4238f0d9f54d6d652ff1a1c540301d2faf2a59d16","sha256:9bbb777602ad78cdc00efdeb7e0d6d0684e146e0cff4846c0a9d3e95989406a9","sha256:f5c992698d23c5cd2adfc28a76ab389f5d1b035fd480d597ce132353372ee706"]
  - id: area-del-triangulo-3d
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el área del triángulo de vértices $A{{A}}$, $B{{B}}$ y $C{{C}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":"(1, 1, 0)","B":"(3, 2, 1)","C":"(0, 4, 2)"}
        answers: ["sha256:73b1caf916e3f52bfbe197e03d865f45552dd8bd0e685f00eb1467a7eea2fcfd","sha256:2b13989a1a31c4cb099ab1d8e5f70e5d428127753f6fe81892b3ed1bdca6b7ba","sha256:14ecdd3e1414bc9f24cc83ba492ae22d77e15d86571462e6ad4f4d28e7199d61"]
      - values: {"A":"(0, 0, 0)","B":"(2, 0, 1)","C":"(1, 3, 0)"}
        answers: ["sha256:f7b56a549fe146187ce2c473b019110c12e2357c36e9449ed43d3296a1bf92bc","sha256:38d90593c454d5ad550c3d0ab702f231fba63fb7eae0726ea30b6aee09ca7149","sha256:48a178873a67a2886246dce1ed0b6708e16df37d5cea565b9da3ed68abf11243"]
      - values: {"A":"(2, -1, 1)","B":"(4, 1, 3)","C":"(1, 2, -1)"}
        answers: ["sha256:9463cb2afdad160a18738c26924f2ae2ba00460aa8ec747ab588abd22e2b6c87","sha256:eeca2f35cc56ccf7e7f411dc966e96907e49e746aa544562e9abd6d30793572c","sha256:c4d65149889e65fcdc7af428b40465c9ede43ced1028b7b20d90ca0449499a42"]
      - values: {"A":"(1, 2, 3)","B":"(2, 3, 1)","C":"(3, 1, 2)"}
        answers: ["sha256:d44c3da10e26d189cda2d82e408f6d8b1e88fbcb95c8f58e529f74af31069f22","sha256:a16179963043031b000d45075156a787115e5ce0946196814e4f3df830616fd4","sha256:cd2aa658618640b9935f2cf4a79804ad84d10b356003b1b90f634904b025416e"]
      - values: {"A":"(0, 1, 1)","B":"(1, 0, 1)","C":"(1, 1, 0)"}
        answers: ["sha256:ddb1526134a9669d01b8328dd5662fdfa07ecddbaa5e75e79015433dc8d5b258","sha256:eb16d44cc93e99929ee6ecbf4c27b416a359463b397b72075be6f3d98d0dc3fb","sha256:1ff2b1c208b24bf28e634291c8b897a9bcb96c889821c945571b4896a38a9465"]
      - values: {"A":"(-1, 0, 2)","B":"(3, 1, 0)","C":"(0, 4, 1)"}
        answers: ["sha256:4dcfbf51297b4adb828ef4b480031c37fb1be1811cefbc73a5b7da0d5a05a081","sha256:80be1a74cb84fb28c22023a73986258d4ed3e5abf324d795dc5546797ebc21a1","sha256:1272fcf9639532ab0cb9e3348622258280df233439f51c670b86ffed3e12a0ef"]
  - id: producto-mixto
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula el producto mixto $[\vec u, \vec v, \vec w] = (\vec u \times \vec v) \cdot \vec w$ con $\vec u = {{u}}$, $\vec v = {{v}}$ y $\vec w = {{w}}$.
    variants:
      - values: {"u":"(1, 0, 2)","v":"(2, 1, 0)","w":"(0, 3, 1)"}
        answers: ["sha256:04967c1d791cfe92b80738768eecc7b14053d4404b7a00269b648a198cac3937","sha256:7fdf1efccb7751643dfe24da691708a79d0e1caf4fd8154bc130e253411af2c4","sha256:c311fb2842009a3e535c9d829d361530ad1ccc0ff61ee4b13b6b33b1348d6bec"]
      - values: {"u":"(1, 1, 1)","v":"(1, 2, 3)","w":"(0, 1, 4)"}
        answers: ["sha256:a826aaebe4abd3ba4190df7fda7d844195edc3900fea1da2c15d49dfd5438a62","sha256:94bf5cfd8a8f4af7613d1c226d46c0eb400a6bb4bb2b87510477a9df9612e45c","sha256:53e9f7b5ec208f6fb8d404b0b4817e504235d912704426347602ee98e758ce25"]
      - values: {"u":"(2, -1, 0)","v":"(1, 1, 1)","w":"(3, 0, 2)"}
        answers: ["sha256:f442ea23519a0f6bc5767b0e156fae93d1311c98d79c8abf55b3ec6377f1b15a","sha256:60efb447ee759a1a631e62fc7188d09e37a1e78f4ae650e49edb4e38ae4224e3","sha256:4c7ee592e829dd05fbcf65a67db976c0fddf80b2c8e31437b95e5c9e287d0ad6"]
      - values: {"u":"(1, 2, 3)","v":"(0, 1, 2)","w":"(0, 0, 1)"}
        answers: ["sha256:550f13af28148e9e1ea3ddff7de561b447ad6be1be9469bd3a86f2e5bd84f2bd","sha256:0c1e4891e247f72d9ed9a4634099fe1328aba4cbcaa4f0f91b15aac12d9a548f","sha256:fa0ebbcf9c9e87276e6c5744bf66457b011b8092d98b205991b9669b1a663525"]
      - values: {"u":"(3, 1, -1)","v":"(1, 2, 0)","w":"(2, 0, 1)"}
        answers: ["sha256:3bc7dfe9773c1a29f287f1df072208a7632929bb67a538dac4d5f8cb1e304b2e","sha256:85551f52908aee360e40a8aa7a81f30c69c11d6272bc98b14f39d16337f4e5f2","sha256:cdfe4ab6676fb32280893964993ec0e05f0ec27da5a6b1edcf5d638ff6de6727"]
      - values: {"u":"(0, 2, 1)","v":"(1, 0, 2)","w":"(2, 1, 0)"}
        answers: ["sha256:219fa9b2f2e770c038c2f2bb25b26712a32e4fc04ebd86659e34cdaa5d61fd13","sha256:01141666d8009bd344f1288ec52c2e8c367fc6efd2135d8e6d5759f91762b366","sha256:e7ce74b60c4bd72ffbe867f93b3701a3b7ab7f61c8e3e0a6f8abe145f57c5814"]
  - id: volumen-del-tetraedro
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el volumen del tetraedro de vértices ${{P}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"P":"(0, 0, 0),\\ (3, 0, 0),\\ (0, 2, 0),\\ (0, 0, 4)"}
        answers: ["sha256:d9d01e9cd707cbf55f9dffedaa398220119ac025be589269ef48e759353c71a0","sha256:8262af579ce9cac37861ea18c7d804ac82835c78b6a51b71c1f72ca3334d1db2","sha256:a39ea40e9e1582a10572ad9dd9ff6c8f35744197d605c9cce2f8f61fc397b9c3"]
      - values: {"P":"(1, 1, 1),\\ (2, 1, 3),\\ (1, 3, 2),\\ (3, 2, 1)"}
        answers: ["sha256:7dd978ccd43c3a9f9be5ddd5ccd7965ceaf72c094bf164b71c0693c53f8fa8e1","sha256:e78e9a37c182b2a2d2c99cb4e3b44d750db18e08a80865de19ba8fe5cd83adcd","sha256:9a152e751fcf5d8fdaa94b3806d484c53ba0744f7474aa5e9dfbec3e46735b4c"]
      - values: {"P":"(0, 1, 0),\\ (2, 0, 1),\\ (1, 2, 3),\\ (0, 0, 2)"}
        answers: ["sha256:c58b99ccfb7b57f7c9fad71066aa2af6302960be6eb996db2c2d75d905e66456","sha256:c53818584e501b428c04d2671eb234ff87c7750aea4b106f275cdf8b34498b36","sha256:688d8d9efb4e42a9483b2c9acda8bf1bbbacafb8eb3add60951fbede00b48f83"]
      - values: {"P":"(1, 0, 1),\\ (3, 1, 0),\\ (0, 2, 2),\\ (1, 1, 4)"}
        answers: ["sha256:5aea6dfb167f2f388d2771119ffcae063d5d43697e51d5956e906d7063953b74","sha256:0327298246fac8f27cfdc5c2757ba1e734fee610784f3b237a1b95b141eb219f","sha256:2cc3cb488b49f6773666125c7494086bc0c4a7901f6076e345c58b19b14b86b1"]
      - values: {"P":"(2, 2, 2),\\ (4, 2, 2),\\ (2, 5, 2),\\ (2, 2, 8)"}
        answers: ["sha256:5ad376e3f56b1fc37a5efdd8e60f74eb4041d24843ae54a6de1b028e80055825","sha256:4be12a3df1c3689b0675847bc467378a215990c07b8152315874a8e1d0677906","sha256:fac95d6402b35f7ee44055732da6935c67fd047e4c0715658fe021c7b4c1b857"]
      - values: {"P":"(0, 0, 1),\\ (1, 2, 0),\\ (2, 1, 1),\\ (1, 1, 3)"}
        answers: ["sha256:f934525883e8aac570f5054b747c0fb01e40516a75e3b9bd6aa9d599bdc2e01f","sha256:276b0d4ce188fa4e0b33495bca0691bd1f7ec5000f1a579e744ac87f78d6a707","sha256:7a129bcdab06cccf55a51aee9aa7b2972086b109289bd1e4a8333eb46fa4a38e"]
  - id: proyeccion-escalar
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto mide la proyección (con signo) de $\vec u = {{u}}$ sobre la dirección de $\vec v = {{v}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"u":"(3, 4, 0)","v":"(1, 0, 0)"}
        answers: ["sha256:13c8626cbcc30ceda385505f997c067320ed2cf393034f95cb3c9897c327adf1","sha256:d9000c27c981e50ba294d80b444df7f6c28d78937d3ae14d6ff984cebebf7f98","sha256:ff6dc99a957a9081b16aa9327d4115a628bbea869a5e5c49cd9b7836964ce60d"]
      - values: {"u":"(2, 1, 2)","v":"(1, 2, 2)"}
        answers: ["sha256:d5e7d14b347092be35aa148475ad18218dc3039ea3d14dff7d8540a0958b1066","sha256:d3936da2134704f0f605c6e16c818d0a39a1a2ceacc00f357a2f31b28e60a214","sha256:28acbef440526762aaa3c829e4199ef3bbe43bab618bd6ac1a31a4d0dd6d3a2f"]
      - values: {"u":"(1, -1, 3)","v":"(0, 3, 4)"}
        answers: ["sha256:a7748fa875ef098281c9fa0d4f30e6ba63d3457697f1bb6e3807583b37600a87","sha256:e8bb5cff9ac021197c5668bbff6f51a6c427d6a15bf6a84e15386c000b350e07","sha256:348a993b8f097cc073acfb31f440c618bef105b7dca0e81826966ff900182910"]
      - values: {"u":"(5, 0, 5)","v":"(1, 1, 0)"}
        answers: ["sha256:bd03a68802b7b0e3bd357f4d4a30d1b1218310716d3ab9186188cf3097dbefc8","sha256:532750e09002c2e30cb52d563734a8caa12ccc8702e3ed5afdc736a2f1aa537f","sha256:05a4b57537b3a67d7e174fec6fe26fa71fe731947fc6790364b54aa0b530db17"]
      - values: {"u":"(2, 2, 1)","v":"(2, -1, 2)"}
        answers: ["sha256:a2af79da904ba45c7e545cbeb9471b4d0f6b01cd1765ebf878013a537fe210f4","sha256:cc656c04a356abc8ee44eb9d828f5b47a425f7162f1daa4b9e7ef0667040dd38","sha256:56e1d77d33e47cf43802936cc16e94a359894b6fd9a53e46378ba2a044f9fb4a"]
      - values: {"u":"(-1, 4, 2)","v":"(3, 0, 4)"}
        answers: ["sha256:a154805b176d00f022588460bd3bb3bb47c0ff50aaf056f4ea232587f871c839","sha256:29d644344b995607a177509367b6f095f98243939cf242d0e95ee13452ae4cca","sha256:26c2356d4f758bc65dedc86d415a0df76c100584e7d41f6277a8195e486a4a81"]
  - id: coordenadas-en-otra-base
    tier: 3
    prompt: |
      Escribe $\vec w = {{w}}$ como combinación $a\,\vec u + b\,\vec v + c\,\vec x$ de la base $\vec u = {{u}}$, $\vec v = {{v}}$, $\vec x = {{x}}$. Respuesta: `a;b;c` (fracciones como `p/q`).
    variants:
      - values: {"u":"(1, 0, 1)","v":"(0, 1, 1)","x":"(1, 1, 0)","w":"(2, -1, 3)"}
        answers: ["sha256:da41053e4f2dc76e0f6b3f313d7d202f7b1146642246230c68ef00c700d06c21"]
      - values: {"u":"(1, 1, 0)","v":"(0, 1, 1)","x":"(1, 0, 0)","w":"(3, 4, 2)"}
        answers: ["sha256:6d5526b2a45904ebfe90e8212873d8e593607c227d0b18b3b821800491eb4d42"]
      - values: {"u":"(2, 0, 0)","v":"(1, 1, 0)","x":"(1, 1, 1)","w":"(5, 2, 1)"}
        answers: ["sha256:be9a107e926a137940e84e12eac26f7ae3773c70f7d6bead54f44af0881b67ce"]
      - values: {"u":"(1, 2, 0)","v":"(0, 1, 2)","x":"(1, 0, 1)","w":"(3, 5, 4)"}
        answers: ["sha256:3f57dc8739a4a71f60d86259feee34c10d8aeb91c6f81f7990cf7d28630058bf"]
      - values: {"u":"(1, -1, 0)","v":"(0, 1, -1)","x":"(1, 1, 1)","w":"(3, 0, 0)"}
        answers: ["sha256:aea2933a764eefbee64625a5c8c1fd21a43cb118fc301ee94ea99613e8e9f71e"]
      - values: {"u":"(1, 0, 0)","v":"(1, 1, 0)","x":"(1, 1, 1)","w":"(4, -2, 7)"}
        answers: ["sha256:92cdfc9a53020afab64f065578628731f1200e7c73b2fc2492f9cccd667bdefc"]
  - id: productos-geometricos
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica qué miden geométricamente el producto escalar, el producto vectorial y el producto mixto. (b) Demuestra que $\vec u \times \vec v$ es
      perpendicular a $\vec u$ y a $\vec v$ a partir de su expresión en coordenadas. (c) Explica por qué tres vectores son coplanarios si y solo si su producto
      mixto es $0$, y por qué el volumen de un tetraedro es la sexta parte del valor absoluto del producto mixto de tres de sus aristas concurrentes.
    sealed: "gz64:H4sIAAAAAAACCo1UzW4bNxB+lcFiD5K6FSwJ6EGBT0lfoNdsIIzIscKCnNnwZ1vB9sP42ENOeQS9WDFcyZYNp+hFGJHL+X7mI++bJL5kJ9xsm8VihvPFAtq+H8lAgb43VjJMf0e4hYfzzsO5GB/63kjq+/yVMrZbCM4SkIfTEx+KFziCRxiiHMkYd/rBYAkKCyTZRwLJUWBGCdqbFpKDJAwDxYHYOlM8Rkrz5TWd7AKlC58WKEFhGMlkia8PAgKGvaSuZ0sQTj+ssmnf4y8DRcwSGQPdJ+LHixqYVSGRECx5GDCiJy+HiEHgWyG4kxiQ53CERJydFbBoBQaJqjrSwetJrQOygKVI5isuof18ptFdpFyKv75UUeRhFF8CMcyMMCR3YJmrlGcaNJy+D2SviYCXBDlSWvbc82Ix2+swPwr/1EG4hVnZrcfdBn6FstuMu3XX91O1qkurcbeZllbjbl2X1uNuNW+3Pbezn7SdT7m57N7q6SuY1YQEv2izK6z1BFfXN1eAmwkTbuGmhVkVefonBseSIBEYZEMeGawkQP2dd5o7geBSEDAvBoztxRqj1vz+YvN7zr7k8ghJvGhFCQaPLJ1WloyLnS5fnD9nUUeY8umJgVgTOhGpBz8AWgqnpzrkIYotJivTv7NMk9cpZ1J5yJlqft427+rQEwFy8fiaoF4hS/UiEGdKS1X5VlnSvslIGIRJOap1Q3QpoEI51MuLFekIBi2eN4G450olU45INoq6AO5Q8NnLD4Dp9F1lP39Urez7u4hm9Vv7ntnLpmti2Udnmu3n+8ZElyk6abbNJ0omuj2BkRjJZAyqS8erJtT35sxw8lI7DYWzpGa7fuxe9fooYYiF9lhDYUSiJUaLqfb6/3m+af8L5Q/yaJwwvp0v6xs0IWsWMDqyaOEIf5aU3Z0zqKG4w/qcvfj1GuvL47+HO4uBtAUAAA=="
  - id: r-perpendiculares-3d
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo son perpendiculares dos vectores no nulos del espacio?
    options:
      - |
        Su producto vectorial es $0$
      - |
        Su producto escalar es $0$
      - |
        Tienen el mismo módulo
      - |
        Su producto mixto es $0$
    answers: ["sha256:5f2f00e157dbc19c820b94f09154608a828ebb0dfe5a19ea1ff6350c790d012d"]
  - id: r-paralelos-3d
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo son paralelos dos vectores no nulos del espacio?
    options:
      - |
        Su producto vectorial es el vector nulo
      - |
        Su producto escalar es $0$
      - |
        Tienen el mismo módulo
      - |
        Suman cero
    answers: ["sha256:d453247a5ceedcc223fd1d200cc1b0db333a09fa603b7e9fbbefc2880d9dc49e"]
  - id: r-anticonmutativo
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿A qué es igual $\vec v \times \vec u$?
    options:
      - |
        $\vec u \times \vec v$
      - |
        $\vec 0$
      - |
        $-(\vec u \times \vec v)$
      - |
        $\vec u \cdot \vec v$
    answers: ["sha256:852aeb4b52bd0e36770892ed058db88e12273a09e26c2d58ddfb79def6c2c07d"]
  - id: r-i-por-j
    tier: 1
    review: true
    prompt: |
      ¿Cuánto vale $\vec i \times \vec j$, con $\vec i = (1, 0, 0)$ y $\vec j = (0, 1, 0)$? Respuesta: `x;y;z`.
    answers: ["sha256:bdc0651dd9745cc8d57c464c9c463127c1cc114c45c835cd45a26cd20896148a"]
  - id: r-base
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué forma una base del espacio?
    options:
      - |
        Cualquier par de vectores
      - |
        Tres vectores cualesquiera
      - |
        Tres vectores del mismo plano
      - |
        Tres vectores linealmente independientes
    answers: ["sha256:f3a02917f88a676bc604720d5cfdc40c041842f881b71e710e5d82c2a6438b52"]
  - id: r-modulo-unitario
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto mide el vector $(2, -1, 2)$?
    answers: ["sha256:5387127a8ca7ec3e6325a161a8d61dfb19fa4c43f9d1fbf448d398b7a0ca58ae","sha256:77f46201984dd1033f6120fa4615f6b8fd21a5c22d4fa63d8c767632cdcaf1c4","sha256:e07548e0f4ca65fe6ed07ec2e9dea7795dec83b28e3bd727a265b78a3933da26"]
  - id: r-mixto-volumen
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué representa el valor absoluto del producto mixto de tres vectores?
    options:
      - |
        El área del triángulo
      - |
        El volumen del paralelepípedo que forman
      - |
        El ángulo entre ellos
      - |
        La distancia al origen
    answers: ["sha256:d2bab76fdc12a1543b3141b00d568e7f45b663e1d76909e0f4f71e9c9a5e7ac8"]
---

# Vectores en el espacio: operaciones, dependencia lineal y bases, productos escalar, vectorial y mixto, áreas y volúmenes

El mundo tiene tres dimensiones, y para describir posiciones, velocidades, el giro de una llave inglesa o la orientación de un avión hacen
falta vectores con tres componentes. Este nodo extiende al espacio lo que se hizo en el plano ([[mat-vectores-rectas-plano]]) y añade dos
herramientas que solo tienen sentido en tres dimensiones: el **producto vectorial**, que fabrica un vector perpendicular a otros dos, y el
**producto mixto**, que mide volúmenes. Son la base de la geometría del espacio, la física del giro y los gráficos 3D.

## Objetivos

Al terminar sabrás:

1. Operar con vectores del espacio y calcular módulos.
2. Decidir si unos vectores son linealmente dependientes y si forman una base, y expresar un vector en una base.
3. Calcular el producto escalar, el ángulo entre vectores y proyecciones.
4. Calcular el producto vectorial y usarlo para hallar perpendiculares y áreas.
5. Calcular el producto mixto y usarlo para volúmenes y para decidir la coplanariedad.

## Qué debes dominar antes

[[mat-vectores-rectas-plano]] (vectores del plano y producto escalar) y [[mat-determinantes]] (determinantes de orden $3$).

> [!question] Test de entrada
> 1. Producto escalar de $(2, 3)$ y $(4, -1)$.
> 2. Calcula $\begin{vmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 2 & 0 & 1 \end{vmatrix}$.
> 3. Módulo de $(3, 4)$.
>
> Respuestas: $5$; $13$; $5$.

## 1. Para qué sirve

- **Física**: el momento de giro y el momento angular son productos vectoriales, y el trabajo es un producto escalar ([[fis-mecanica-newtoniana]]).
- **Gráficos 3D y videojuegos**: las normales de las superficies (para la iluminación) se calculan con productos vectoriales.
- **Robótica y navegación**: orientaciones, ejes de giro y cinemática en 3D ([[rob-cinematica]]).
- **Geometría del espacio**: ecuaciones de planos, distancias y volúmenes ([[mat-rectas-planos-espacio]]).

## 2. Vectores, dependencia lineal y bases

Con un **sistema de referencia** (un origen $O$ y tres ejes perpendiculares), cada punto es $P(x, y, z)$ y cada vector $\vec v = (v_1, v_2, v_3) = v_1\vec i + v_2\vec j + v_3\vec k$, con
$\vec i, \vec j, \vec k$ los vectores unitarios de los ejes. $\overrightarrow{AB} = B - A$ y $|\vec v| = \sqrt{v_1^2 + v_2^2 + v_3^2}$ (Pitágoras dos veces). Suma y producto por un número, componente a
componente.

- Unos vectores son **linealmente dependientes** si alguno es combinación lineal de los demás. Dos vectores son dependientes si son paralelos
  (proporcionales); tres, si son **coplanarios**.
- Tres vectores del espacio forman una **base** si son independientes: entonces todo vector se escribe de forma única como $\vec w = a\vec u + b\vec v + c\vec x$ (las
  **coordenadas** de $\vec w$ en esa base; se hallan resolviendo un sistema).
- **Criterio**: tres vectores son independientes si y solo si el determinante que forman es distinto de $0$ ([[mat-determinantes]]).

## 3. Producto escalar

$$
\vec u \cdot \vec v = |\vec u|\,|\vec v|\cos\theta = u_1v_1 + u_2v_2 + u_3v_3 .
$$
Como en el plano: $\cos\theta = \frac{\vec u \cdot \vec v}{|\vec u||\vec v|}$; $\vec u \perp \vec v \iff \vec u \cdot \vec v = 0$; la **proyección** de $\vec u$ sobre la dirección de $\vec v$ mide $\frac{\vec u \cdot \vec v}{|\vec v|}$.
Los **cosenos directores** de un vector son los cosenos de los ángulos que forma con los ejes: $\frac{v_1}{|\vec v|}, \frac{v_2}{|\vec v|}, \frac{v_3}{|\vec v|}$.

## 4. Producto vectorial

> [!practico]
> Para apretar un tornillo con una llave, el efecto depende de lo fuerte que empujes, de lo larga que sea la llave y del ángulo entre ellas, y el
> tornillo avanza en una dirección perpendicular a las dos: la de la regla de la mano derecha (o del sacacorchos). El producto vectorial
> recoge exactamente esa geometría.

El **producto vectorial** $\vec u \times \vec v$ es el vector:

- de **módulo** $|\vec u||\vec v|\operatorname{sen}\theta$, el **área del paralelogramo** que forman;
- de **dirección** perpendicular a $\vec u$ y a $\vec v$;
- de **sentido** el de avance de un sacacorchos que gira de $\vec u$ a $\vec v$ (regla de la mano derecha).

En coordenadas:
$$
\vec u \times \vec v = \begin{vmatrix} \vec i & \vec j & \vec k \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{vmatrix} = (u_2v_3 - u_3v_2,\ u_3v_1 - u_1v_3,\ u_1v_2 - u_2v_1) .
$$
Propiedades: **anticonmutativo** ($\vec v \times \vec u = -\vec u \times \vec v$), $\vec u \times \vec u = \vec 0$, distributivo; $\vec u \times \vec v = \vec 0$ si y solo si son paralelos. *Ejemplo:* $\vec i \times \vec j = \vec k$. El **área de un
triángulo** $ABC$ es $\frac12|\overrightarrow{AB} \times \overrightarrow{AC}|$; por ejemplo, el de vértices $(1, 0, 0)$, $(0, 2, 0)$, $(0, 0, 3)$ tiene área $\frac12|(-1, 2, 0) \times (-1, 0, 3)| = \frac12|(6, 3, 2)| = \frac72$.

## 5. Producto mixto

$$
[\vec u, \vec v, \vec w] = (\vec u \times \vec v) \cdot \vec w = \det(\vec u, \vec v, \vec w) .
$$
Su valor absoluto es el **volumen del paralelepípedo** que forman los tres vectores (área de la base, $|\vec u \times \vec v|$, por la altura, que es la proyección de $\vec w$ sobre
la perpendicular). Por tanto, **tres vectores son coplanarios si y solo si su producto mixto es $0$**, y el **volumen de un tetraedro** $ABCD$ es
$\frac16|[\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD}]|$.

> [!formal] Con rigor: por qué $|\vec u \times \vec v| = |\vec u||\vec v|\operatorname{sen}\theta$
> Desarrollando, se comprueba la **identidad de Lagrange**: $|\vec u \times \vec v|^2 = |\vec u|^2|\vec v|^2 - (\vec u \cdot \vec v)^2$. Como $\vec u \cdot \vec v = |\vec u||\vec v|\cos\theta$, queda
> $|\vec u \times \vec v|^2 = |\vec u|^2|\vec v|^2(1 - \cos^2\theta) = |\vec u|^2|\vec v|^2\operatorname{sen}^2\theta$. Que $\vec u \times \vec v$ es perpendicular a $\vec u$ se ve porque $(\vec u \times \vec v)\cdot\vec u = \det(\vec u, \vec v, \vec u) = 0$ (dos filas
> iguales). $\blacksquare$

## 6. Errores típicos

- Confundir el producto escalar (un número) con el vectorial (un vector).
- Equivocar el signo de la segunda componente del producto vectorial (en el desarrollo por la primera fila, el adjunto de $\vec j$ lleva signo $-$).
- Cambiar el orden en el producto vectorial sin cambiar el signo.
- Olvidar el $\frac12$ en el área del triángulo o el $\frac16$ en el volumen del tetraedro.
- Usar vectores de posición en vez de vectores entre puntos ($\overrightarrow{AB} = B - A$).

## 7. Resumen

- Vectores $(v_1, v_2, v_3)$, módulo, base canónica $\vec i, \vec j, \vec k$; dependencia lineal y bases con determinantes.
- Escalar: $u_1v_1 + u_2v_2 + u_3v_3 = |\vec u||\vec v|\cos\theta$; ángulos, perpendicularidad, proyecciones.
- Vectorial: perpendicular, módulo = área del paralelogramo, determinante con $\vec i, \vec j, \vec k$; anticonmutativo.
- Mixto: $\det(\vec u, \vec v, \vec w)$ = volumen del paralelepípedo; coplanariedad; tetraedro $\frac16$.

## Repaso: lo que debe quedarte dentro de un mes

1. Cuándo tres vectores forman una base.
2. Cómo se calcula el ángulo entre dos vectores del espacio.
3. La fórmula del producto vectorial y su significado geométrico.
4. El área de un triángulo dados sus vértices.
5. Qué mide el producto mixto y la fórmula del volumen del tetraedro.

## Siguiente

[[mat-rectas-planos-espacio]] (ecuaciones de rectas y planos y sus posiciones relativas).
