---
id: mat-funciones-basicas
title: "Funciones, gráficas y estadística descriptiva"
area: matematicas
trunk_level: 4
prerequisites: [mat-algebra-basica, mat-geometria-basica, mat-proporcionalidad-porcentajes]
academic_sources:
  - "Gelfand, I. M.; Glagoleva, E. G.; Shnol, E. E. Functions and Graphs. Dover Publications, 2002."
  - "Freedman, D.; Pisani, R.; Purves, R. Statistics, 4ª ed. W. W. Norton, 2007."
  - "Charig, C. R.; Webb, D. R.; Payne, S. R.; Wickham, J. E. Comparison of treatment of renal calculi by open surgery, percutaneous nephrolithotomy, and extracorporeal shockwave lithotripsy. British Medical Journal, 292(6524), 879-882, 1986 (datos del ejemplo de la paradoja de Simpson)."
  - "Apuntes Marea Verde (LOMLOE). Matemáticas 3.º ESO, cap. 11 (funciones y gráficas) y cap. 12 (estadística); 4.º ESO B, caps. 10-12 (funciones) y cap. 14 (estadística). https://www.apuntesmareaverde.org.es/grupos/mat/index.html"
hints:
  - "Concepto: una función asigna a cada entrada una sola salida. La lineal añade lo mismo cada vez (pendiente constante); la exponencial multiplica por lo mismo cada vez. Para comparar situaciones, escribe cada una como función y busca dónde se cortan (resolver un sistema). En estadística, la media se deja arrastrar por los valores extremos y la mediana no."
  - "Herramienta: en Python, `statistics.mean`, `statistics.median`, `statistics.pstdev` (desviación típica poblacional) y `statistics.stdev` (muestral); para dibujar, `matplotlib.pyplot.plot`. Comprueba cada respuesta numérica con un barrido de valores, no solo con la fórmula."
  - "Documentación oficial: docs.python.org/3/library/statistics.html y matplotlib.org/stable/tutorials; Freedman, Pisani y Purves, capítulos de estadística descriptiva (media, desviación típica, histogramas) y de correlación."
exercises:
  - id: pendiente
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula la pendiente de la recta que pasa por $({{x1}}, {{y1}})$ y $({{x2}}, {{y2}})$. Respuesta: un número.
    variants:
      - values: {"x1":"1","y1":"3","x2":"5","y2":"11"}
        answers: ["sha256:cfaee4c2d274d97b8d00eeeb8ac5328ee23ff91650d5887c4b1bd9405a616b77","sha256:cbed0bba1a590dec9386a80ecf27b2ab186d9f1193ba60820b8ab8d250654756","sha256:665926ab568aecd140f0c0dda9672a7f9652ad22d0e4f75558e4c6eb29546fbe"]
      - values: {"x1":"2","y1":"-1","x2":"6","y2":"11"}
        answers: ["sha256:44e89152737ff975cef2cf3e52e1a98b6ab8f17463938730f3a20a232903942b","sha256:35d9e9f669c858f1861f4a08fc402e3a8c0bb7cba1060f3d486016fdf6efe794","sha256:2f8c0641a4009a5dc484984882effb7cbda680be10bac33c15c6ef8ced67592c"]
      - values: {"x1":"-3","y1":"4","x2":"1","y2":"-12"}
        answers: ["sha256:0295e85b8da73695e18447b5d532d9854f859e4415e827270547ecdf28ffb9c2","sha256:951dbf362e12a092b9f00b06f074a82e8113e290a1f3e540c9ee74e7baa37f2d","sha256:a8c6166525255b1cf5632ae9c4ecf9033bf739e2ee1192761506d3032536d0f7"]
      - values: {"x1":"0","y1":"5","x2":"4","y2":"3"}
        answers: ["sha256:e00019c5553a5f01f30f9315ba2e838ff7410b4014b28c1e0301dc373cabfde3","sha256:eae7b85e77a439e25b4c80c3dde67c5f21b9ae8d13968f9024e6fe172a9c54f6","sha256:80c1d16eaa68a6316c050b520515c542b8dcc005194b7eee47c7c42ce6f59966"]
      - values: {"x1":"-2","y1":"-6","x2":"3","y2":"4"}
        answers: ["sha256:2674daee55582c149be8a90bc424ff56c7247d7698e070bfc1f7fe2b3ba2bfab","sha256:215c9234f1bfedf3d8845997e55e12fa4c78e981797f2a1a2c4ccfceac264533","sha256:86cdaea009ddbaeb6ea865721de2439d9beb8bb8774acf28f904cbc7d494abcb"]
      - values: {"x1":"1","y1":"1","x2":"7","y2":"4"}
        answers: ["sha256:8c79591c0a72262411b9f1b2804c90867226a94f5d9f3e3a009b836f7abf0da3","sha256:ae7ae395bbed5489b62b7274b7b1a7b3b355273f67ff88ea77386c2b93044741","sha256:da0a8dd543b7311a24ce92d6ec5138085622da9e1525af6ea4b8d34eb7644565"]
  - id: evaluar-funcion
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Sea $f(x) = {{a}}x^2 {{b}}x {{c}}$. Calcula $f({{x}})$. Respuesta: un número.
    variants:
      - values: {"a":"3","b":"- 2","c":"+ 1","x":"-2"}
        answers: ["sha256:e7687ce9d4ac4cadcdf9e855453cee94ecfbf4028966a6b573193d82c85e0993","sha256:73722a62cf3fd94605fbdca027dcbaedf8c86a6dbcb087b2682464a5d64b523f","sha256:0e7bf214ae763913e03195a1a95f8e0afb431bf1afa07fedcda81eae75ba5af7"]
      - values: {"a":"2","b":"+ 5","c":"- 3","x":"-3"}
        answers: ["sha256:8faf41445fd37ffff7c456c4b2b5b098de7dbc5d289f38baecc77b59bf6dab91","sha256:9756105baea81a2751dacb36a854916b5be7fc51dbfa5347cfac650c0e483e38","sha256:e5ddf039a4897bcb0228f4d4bf7cb778f6c0cf30d5d7c5b482cd70b89d44f131"]
      - values: {"a":"-","b":"+ 4","c":"+ 6","x":"2"}
        answers: ["sha256:4b03b1525c2c960a59b38ff4fce1a7a6d5aeeaba48672cd047209f62c9e2134d","sha256:2d78eadef2cd4ed779727375056ceaab89668ca075837f8e6c65689249220418","sha256:bd5f7a717e6264d73787cf99f23bef2994f3a75a0d81bc79d774de08ebc08538"]
      - values: {"a":"4","b":"-","c":"- 5","x":"-1"}
        answers: ["sha256:5440c9dbb65cc0f120a9af55191a9c2d6ebf8b4f0ca8cdd1d3b106a92e44bc2b","sha256:33d29e1a6c1332ada3ecf2aea256765d8ffb9661d18efc047be0d7b8610c527d","sha256:f1f2e63b8402f53402c050526b23c4fb80fceb3e75e4b0b9f26290693a291a0c"]
      - values: {"a":"","b":"- 6","c":"+ 2","x":"5"}
        answers: ["sha256:d1def5de1a2c06b12062e5557b04ee1aa7a155dd9b50c5f34f5618db6ca8cada","sha256:2080c077a9397438824cafd0e76616b6ba141c6b7e612c7f07dfb1594c3468ae","sha256:357c318659b9a1a5edb9a5f572c59c22b83bb7452cf0e19c976373a8124ca9bb"]
      - values: {"a":"-2","b":"+ 3","c":"+ 7","x":"-4"}
        answers: ["sha256:6169b362577f1f11306dfe0e84c4349ee972652bb4af65ccd94ff18ce34c98ea","sha256:63c13c4ba39080b502d7847cbc694b5afdec55020a3e0fa15e1df469702781c0","sha256:8bbf204290541a2f0bf17e66415f3c3cc8575cd010dc3834f70da811d05b0273"]
  - id: media
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula la media de los datos ${{d}}$. Respuesta: un número.
    variants:
      - values: {"d":"4,\\ 8,\\ 15,\\ 16,\\ 23,\\ 42"}
        answers: ["sha256:92c95a5fe0e3af7de205a715a1c9302fa49a59911905ae951c8eb55104467e06","sha256:b9bb169d82665201865ab1a22a98933362f09bb904e97600be82e28b6b79d6a3","sha256:8007d7bfa6bc77b4cd8538602e906c0057a0db04de77e35d13f493987c95461c"]
      - values: {"d":"3,\\ 7,\\ 7,\\ 11,\\ 12"}
        answers: ["sha256:71fa80856508d4d166cd3be7fa0dcd975b836961e24f770dd5d8eeb6b8c173d2","sha256:59e04b7d243be0526ae3627f9809f467a6fd4311e4f136b32da6c5a5eaa50c5a","sha256:05ae420142b42e59a2fdfce70a56a72670125519f9cc761d4e6da070962dbf36"]
      - values: {"d":"10,\\ 20,\\ 35,\\ 15"}
        answers: ["sha256:058638fa60df081e5fac2c3ebc6d853e367bc33fd6e46707c3d0e6f718d99b9b","sha256:4575bb0fc5b19f8aa6422cae61f234108e76fb9033d0c0b3adec79ce24642e69","sha256:90a481a685d76183d3b317025f2f188c85cddfd99dbaee66432a409c0909cd8c"]
      - values: {"d":"2,\\ 9,\\ 4,\\ 7,\\ 3,\\ 5,\\ 12"}
        answers: ["sha256:a2f4bdcd3a35c6020c9426aa72b805b5f4192e2eed9f66dc018d790c7424d0b0","sha256:aa0f20de1a4237d1f621f87029133cac213e4bdedfb74a584d771109dbb97f39","sha256:38784055c62c5b7758dbe1a53b3597cb20164dc4e77b4acae5a09a4679dc7590"]
      - values: {"d":"6,\\ 6,\\ 8,\\ 13,\\ 17"}
        answers: ["sha256:6c8ac4eef6d4b6836ea73c5ae3938d5d03de46e41836252e374c7f4d089cc891","sha256:0e7bfd34e1c7504f16c0d831521734008e8e18688c3a99eb402400cf1bcda8a0","sha256:944da0a9fbbc83ebbb1ee4e24dfa07f6d54ccfe1284e1e6583d7b917625ad3dd"]
      - values: {"d":"21,\\ 18,\\ 30,\\ 27,\\ 24"}
        answers: ["sha256:8c8583a722e491f0d44ca2aece76c55bc633437fdcb81a77f5ced863b11a5ce7","sha256:877e2bdca997885c0515ed5e9f2ee7d56e88729baa87833145adbaee2567c3e6","sha256:c05db36df576c22abb517d83ee97d087db89b948f037bdd8017e3c2ef093432b"]
  - id: recta-dos-puntos
    tier: 2
    type: expresion
    vars: ["x"]
    prompt: |
      Halla la ecuación de la recta que pasa por $({{x1}}, {{y1}})$ y $({{x2}}, {{y2}})$ en la forma $y = mx + n$. Respuesta: la
      expresión de $y$, por ejemplo «3x-4».
    variants:
      - values: {"x1":"2","y1":"5","x2":"6","y2":"13"}
        answers: ["sha256:fef67469ee29a60e4e23e29cf0e3ddb3f3313a2b0cb26db8023147310f194b74","sha256:b47bac73b1f2c8bbd05760860f88bffd6603c08a05657c6cebf080a2d504377e","sha256:c2966bdcca306ad9f95ebee89505aca88448cb22a2d2c022a8e6182103bdafe5","sha256:d81fb7672891aeb894342cf9ae11b29441eebe7a738699268855c28ec3ce426e","sha256:9ddb3d4ffb09899354b8b802b75610af8c702000a589afd0a659c07a0f957d08","sha256:0115f28295b3ccc9381a5e74c711a9cf7deeb0399ced5fd7f72b3c4eed3a258f","sha256:a2138962e7eb896769962fb405c1aa1c08fa6f1c862db1c8673f9be6fe594395","sha256:1c31a8c0fec7ee61320e6a6c8019de4cdd20308db21a48f9d84579a0e1435848"]
      - values: {"x1":"1","y1":"-1","x2":"4","y2":"8"}
        answers: ["sha256:07cf5776b82ad0e40602c59c4d78c0eb8c4a061773a37a5f78daabb56c3bcd6f","sha256:d0bae45ed3717403bf9906a503d0c7c2c69e7b585ccf431cae7b249ccb4d992d","sha256:b8ea596c8137b53ac47711b9a85b7f526fd31fbc37cfd1c5521878e0f8e1a3e1","sha256:da1bb22f713db4c34639f3a326be645569b11478662ad6d7b471db8745f74aff","sha256:3d738f55f90ceabb562dfa3a1f66a447ceb56a1aae3c83f5608630aec6ceab4a","sha256:4d8321e9eb6a332bbcab55d8099e11316e3d230160168d56fb94e45e139f33b2","sha256:d22fda0e485778a6bb7b05649cc5fb4c8209670dcfa19391133be2f7afce9bc7","sha256:019c5547d38337f40f47cf23dc756c207cb9ef3b8f29279fd7a1bbd420607015"]
      - values: {"x1":"-2","y1":"7","x2":"2","y2":"-1"}
        answers: ["sha256:f1210cec53c694bf79b81a66651e5aa9701e06158fbd763a998c5bda2498c581","sha256:aa298bd8847d898ca66fcf5febad10b25aa05bc42303a2ca9bcaf69f41e84cf4","sha256:d47d4bd0fa189ad5b730b57478d85aee15c8e3b44b925e8cf027191ed63c6341","sha256:b1f8ded832e4401fc578c492ddfd465182349703f550cf3f11e4f8272925aacb","sha256:e7fabec4a4e963c90307bed82145baa103e56a82823b8be6edf2eb7b554c144b","sha256:73cc2ac786861b688606a14c16aecc8ce3aeebc79bbef3c72033e953851e5903","sha256:e4c1efc3df263ee4551f150dd3bfdcbc5cede67bf0bbbb8faf189b95bb1deb70","sha256:2332fa3df53011abcd07ad8b75361ca7e0412963df755e715012b3fca12c2560"]
      - values: {"x1":"0","y1":"-3","x2":"5","y2":"7"}
        answers: ["sha256:9347c34fd8a2e5346e65daf1839b3439f3171a1c0f2cc3385b6ec426f67d6ed5","sha256:20a0499a471e952b39aa5608bcc50ee4b05b71c945fdc8b2e82c1bc290698531","sha256:8f9e9293470ceade4fae597b83e5459e969cb7a7dbad503951442e490ec39289","sha256:0e93e5fdea36978f526024e4cec217db105a87b388370cef0a98895ab9907025","sha256:51e56c2261d5b69729b3ead04e5c65302335105ebc04b77aab0293100e0da12e","sha256:f1d07fdcd246bdeb5c30cc8ce0fb35102c86ab9b0afdc2ea8ce4d48e7a351e26","sha256:c9f45e3fab1c67329e7634733c2ab04b34d7d77063ed9e947004e1c07b3e5a3c","sha256:277581662c0dea3c5062715c27f1887acd7a805386d42f4078906e78ae40744b"]
      - values: {"x1":"3","y1":"2","x2":"6","y2":"1"}
        answers: ["sha256:6f897a076794067b77ec0f5c90c70cd63e549340bf6b046e5fd2202294eccd05","sha256:e16c9339328f8f99596203437e665d31f97e2ef3aee0616452037cab8ce54a49","sha256:82c82b3cb535f19f604f17538dd74a5ee9dcadaeff5fab474b8db94301615913","sha256:4a5b547b8e57bc1d4972408f3d8ef11c8789c63f0924fb26266d5a74c7a28802","sha256:4986f14089df446599b13491da777ece23d94f06af48b66f84893baa1ff0acf6","sha256:6b0d67785584ca68be76fc73617413914bd0971e4d061ec8642cce041414afd0","sha256:3a1d01a9b783c97c3ba03fe21dec41885c8f8002c2c917a33312274cd4f0c6aa","sha256:4183a74df6a32983b0e3e2f7aaf84fb2211b6bbd2de7d8bf86aaf955e774fb5d"]
      - values: {"x1":"-1","y1":"-4","x2":"1","y2":"6"}
        answers: ["sha256:21440a6f973c0b9660e4b4303faddaaae0a6cd6616390316691a74b102049da5","sha256:13bcca82e621c9804364909037cf54b273c5c4897f9b6782e2bbaaade2731126","sha256:725a177118986d2bf6c80f0748d026fa1123247ea62c4d1c3aaa80f0b931121a","sha256:8efb70daf4fce8969b7d04ac44dffc30841daecf792415fba3e0f4a9cf2adb85","sha256:bd153b88bf0ac81da39a4bd91eb44d45f9a9cfbdb3199666beb71839bbb69712","sha256:b3c1bf42f885cb74f2d9cc178f2bb41b9435b32d1e13d59fb8097f1b6bbdc22b","sha256:1792097708acda68a8265e719d70b875f50bf9773aa8f7280d7a6acf2a4cd9a2","sha256:026fed795b1c48f6ce08ac3939e09ad9eefc3eff497cc509effe3cfaf227daf6"]
  - id: interseccion-rectas
    tier: 2
    prompt: |
      ¿En qué punto se cortan las rectas $y = {{m1}}x {{n1}}$ e $y = {{m2}}x {{n2}}$? Respuesta en la forma «x;y».
    variants:
      - values: {"m1":2,"n1":"+ 3","m2":-1,"n2":"+ 9"}
        answers: ["sha256:b02d52c90ad05f4ecd1b45485318789bda353f2975ae2cf879dc9a99228f2a85"]
      - values: {"m1":3,"n1":"- 2","m2":1,"n2":"+ 4"}
        answers: ["sha256:caaabb8be65085cf2b08b76f8dd7e9c85cd21ef9be7f0c7ac781f31e2c23bd70"]
      - values: {"m1":-2,"n1":"+ 5","m2":1,"n2":"- 4"}
        answers: ["sha256:f2f65cb33cc34b632dc25dba55cd86f9cfb769b206ba6fb4561982e69fd4a6ad"]
      - values: {"m1":4,"n1":"+ 1","m2":-2,"n2":"+ 13"}
        answers: ["sha256:20a5b8e89d4892dbd37343584661e6a03ea946148c8474fb962e501872f5280b"]
      - values: {"m1":1,"n1":"+ 6","m2":3,"n2":"- 2"}
        answers: ["sha256:4772339acb0d12a7a7651bd81c4cda5ceb20ed688675f8814aea01a6babe31a5"]
      - values: {"m1":-3,"n1":"+ 2","m2":2,"n2":"- 8"}
        answers: ["sha256:f8e4b91cd7a1640d30d1f7d5c00e29a17484b9791eec0d71cc846aec5eac5667"]
  - id: mediana
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula la mediana de ${{d}}$. Respuesta: un número.
    variants:
      - values: {"d":"3,\\ 9,\\ 4,\\ 12,\\ 7,\\ 5,\\ 10,\\ 8"}
        answers: ["sha256:4bf5490c00f9b024085b9c443de333aa17dd4534942ed732433a0bfa71ff3e0c","sha256:112f87ee0ed5127efa4460f17ab1f31bcc83149fe7383bfdf0b9211f482834ed","sha256:6fd8400223deea7d7447c0d069b90fe9a700340bd901dc63397ae4a1378d1597"]
      - values: {"d":"15,\\ 2,\\ 8,\\ 11,\\ 6"}
        answers: ["sha256:2f09273ab1de761dcabb4613302d0d3fdf9683182472d80496214f6cdd23a766","sha256:1c54588f020ac7694dc8df92af9d2a19b0859b82fce332ee0e680ef183411ccd","sha256:27bf161c041e6fb91f9c263a04785954132426ac5504bcf7bbd24003a5d26064"]
      - values: {"d":"21,\\ 3,\\ 14,\\ 9,\\ 30,\\ 18"}
        answers: ["sha256:9cd81e42a0bb8595076f1e48c4eeb0f23b8868bcc907487f40be553df6f5c091","sha256:57c6f5c92ea18ff647fc61f6b98193b7e43e24cb7e2bc2f740660944111c3d11","sha256:9ccaac3d3b052a7dbfa420e4a16d9f01806e66604c1df6cb8b9fc0eb37fc2632"]
      - values: {"d":"5,\\ 5,\\ 1,\\ 9,\\ 2,\\ 7,\\ 6"}
        answers: ["sha256:5c0f810dfc0b0713f22da592ad50730afb651847af731454abc4ca7c67bd6898","sha256:707d8e6c625cb05c243b1ef54a9e79b9181a254baef6b7d6a798599692e73e7f","sha256:85bfbb9ff0367ab1d2d939d00f361e035e8ca4f95ab6d258f53fd5b806d52c54"]
      - values: {"d":"40,\\ 12,\\ 25,\\ 33"}
        answers: ["sha256:fc7194516ea0f5ca4b3a84c434fe707d4f3e4a937db14a0a7ed3aa8511167f52","sha256:1bb0fb5bd5555da48ff318dd1af319dc2a4ad6b464288ce972d2fc282b021444","sha256:08d4f6221b7a301b38c0db660e246d6de9130f0e340a72ad762744b28d769d7c"]
      - values: {"d":"7,\\ 1,\\ 3,\\ 10,\\ 4,\\ 8,\\ 2,\\ 6,\\ 9"}
        answers: ["sha256:7ed3ae5aeb8ec5687cbbd314c6627460617b576ae5ece4d126d2bce3fb982415","sha256:d7788c152e904eb7dc5acb1741e79f4bcce0cc79a6f7e7a498599b67b6332aad","sha256:f892d52995627c8e8012a7d1bf495d3027360b2b3f1c9c13b65fe13487e02661"]
  - id: vertice
    tier: 2
    prompt: |
      Halla el vértice de la parábola $y = {{q}}$. Respuesta en la forma «x;y».
    variants:
      - values: {"q":"x^2 - 6x + 5"}
        answers: ["sha256:3431d68f996e170dc06832cca7d5e14ff61784b4a6ebed852deb0b0a59bb15cf"]
      - values: {"q":"x^2 + 8x + 10"}
        answers: ["sha256:b1d4663c5214b3d5ea0deaf16a3aa20ead305314076b973e923b25e399c75cc1"]
      - values: {"q":"-x^2 + 4x + 1"}
        answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
      - values: {"q":"2x^2 - 12x + 7"}
        answers: ["sha256:2b1c82549973dffd9068d1262782b7a1ce589a93f78c49f5bd80e1efc7690a6a"]
      - values: {"q":"-2x^2 - 8x + 3"}
        answers: ["sha256:e044c2abc94d6958b815e7c2698eacbac546d835a6290167aceeeafee0cb4768"]
      - values: {"q":"x^2 - 10x + 30"}
        answers: ["sha256:98b6417c1c7ba8003e9b2fbd5443a10c00f801f5215e2d7ee13d2543f03a7024"]
  - id: cortes-eje-x
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos puntos de corte con el eje $x$ tiene la parábola $y = {{q}}$? Respuesta: $0$, $1$ o $2$.
    variants:
      - values: {"q":"x^2 - 4x + 5"}
        answers: ["sha256:f7753fbaed09930a2e29244747da6bbd2d01ad74718821cc6260dab0dc39bba7","sha256:d2ac3d73864985231893ef09c35ab6fec0092e0c33202904ead63427b686897b","sha256:b8b0d9ebfebc0b1ce991ac4b56f9b53f529252150cc8551ccb6d79805c48d387"]
      - values: {"q":"x^2 - 6x + 9"}
        answers: ["sha256:9e724c7deeee3dd25c98cceaf0056c471385d7b036200e6d4102aa65377142c3","sha256:94263222901f220db555bee265a742c0b321ec22b1ad34ea363bdfff624a48e7","sha256:43569ff49cefabe68cfd60ab154e60790deba9eb798f2d6c17aeee8d4e9a953e"]
      - values: {"q":"x^2 + 2x - 8"}
        answers: ["sha256:1716e28ce4e91c60b29ce79b3c70d8ecfa1b5a2a63818cdcb5b7c925a221fa6f","sha256:41a68a64b4f200a21d6444088afc16a23e5f1be675738bde46c89e8482827c0a","sha256:c9c11038b75de350b6bbbff09a9be942b297401e39459c266f5d712036d51bc0"]
      - values: {"q":"2x^2 + 3x + 5"}
        answers: ["sha256:326e18c18e9f0d8b86271724a4e9d80a22dfa0340f7dd9a6b808de7888a0c82e","sha256:60eb685c2f68ba5184b493ef4ca41f39f3c4bbdaa4eb0f74dd9d77e0b8baf967","sha256:e1e88220b94be1ee0a5a20712227d650ee554eb1fb25fbc941903c19011513bf"]
      - values: {"q":"-x^2 + 4x - 4"}
        answers: ["sha256:411bab82f2c45e16fa1416a09e05aa6010003d54de5e037c1f2a4585914d5c97","sha256:e8673022b821a3d211b7bfd3cb006e4a3340976363fa5ad2f1bf18cdef4aebd4","sha256:d0e4569bc82b14f2973445361a916a79aed2e5a2650460a0fca80265fecad239"]
      - values: {"q":"3x^2 - x - 2"}
        answers: ["sha256:5007003b9861c2704658f3bc698efa10f658a96abb4b1c8ebde24c82a3599761","sha256:c5b9f8ca6ac18d86568205c055c0c2c06d96c3e27d04e980df7be7fab757e958","sha256:d7d4d5f7f9d3e84f1e5308fb7b313e7e904b71f219f4871de71a6a0c40006a4c"]
  - id: tarifas
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La tarifa A cuesta ${{F}}$ € fijos más ${{a}}$ €/min. La tarifa B cuesta ${{b}}$ €/min sin cuota. ¿Cuál es el **menor número
      entero de minutos** al mes a partir del cual A es estrictamente más barata que B? Respuesta: un entero.
    variants:
      - values: {"F":20,"a":"0{,}05","b":"0{,}15"}
        answers: ["sha256:717ca7f59bf6fb797831e0047949f7fcb0898b70f7c208174d325fa1f0a55375","sha256:03accaa94bd61e43329dc5c8ab396baf481669d4e63ea0dd0044e5173676aa3d","sha256:24a598374708a48a5cc85f36005affa578cf047b59e42e447f9015d64c42169b"]
      - values: {"F":12,"a":"0{,}08","b":"0{,}2"}
        answers: ["sha256:729c25345ba5f0ca8a3b61f95c950a529f1e00f26d079c9fde6e2300768899b3","sha256:ab15d9c1c6e132437fc5b808a9d3304100b0750415060a55bc4f6c76ac07ba97","sha256:62ed81bdb77568dde4749a287ad7bfd82f53d44a4a7f4191bbd8ad572f255bd5"]
      - values: {"F":30,"a":"0{,}02","b":"0{,}12"}
        answers: ["sha256:f302c6d41c90e16e255eaf058dcd2636d7b5090f88de9e39274668f04c653186","sha256:1cfb0f067ae11210aebfd3a308bf3c7327e47e9c61a2f6d69898cce9211a3a91","sha256:f05550f056262cce9a4ad1895dd1d9cc6a8ccb1f9d32d41f438e3a676d4efd3f"]
      - values: {"F":9,"a":"0{,}1","b":"0{,}25"}
        answers: ["sha256:93023d0329959903d896a24ef377d2ea863c78e0dab778299239ba978de0fb58","sha256:8454d5d97d5ff9fb0ffe183a429937821b81f023c4c98d5372d2045687fecbf4","sha256:3d684aaeb8df8f32c1790f1fd4b96159972e53d488f5a8d12a4c75d517e96513"]
      - values: {"F":25,"a":"0{,}04","b":"0{,}09"}
        answers: ["sha256:6187d5bd190bbbb1e090b1fc79b6f67a5adee0717b029494c33a527d4fe1f5f3","sha256:9b3267b387d98fd8047718f968b91bdc4bee1465940f840bc508c997372d06bd","sha256:51b42c1f4a67f9a556e988942ec4d41819dff474b2fc4fbe4544dfed8284c8e1"]
      - values: {"F":18,"a":"0{,}06","b":"0{,}15"}
        answers: ["sha256:9066a33c4eec6ff864c9cd2024874fa8da921242c04d2563180f624eb84c0a1a","sha256:518f910ad8bb67f559db100111e636ffcf2efa6f9180d21dfe6a6bf76d9e6705","sha256:8f130febddd8d94e65e900bf51bdafac3d0b10592167d70dc79def99e4f93792"]
  - id: bacterias
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Un cultivo empieza con ${{N}}$ bacterias, que se **duplican cada ${{T}}$ horas**. ¿Cuántas habrá tras ${{t}}$ horas?
      Respuesta: un entero.
    variants:
      - values: {"N":500,"T":"3","t":24}
        answers: ["sha256:e3cad7e692666e35cf6911e394e40c9744086382272647eab9b47836b7a79794","sha256:b0e90e0f121dc612854dfff9dbbf6467830b807eeb61289f875068e1f534d3cd","sha256:c4ce4b389301ce19c646ddecd8f337a118cf9d7a8a0f2a692cfe356d126f4512"]
      - values: {"N":200,"T":"4","t":20}
        answers: ["sha256:981b169a6e044e75f15f9026ecb0c51206185e855946362adc038e91ca712a1e","sha256:cc8f3efab664c14a61a1145c48edd5ca092f02f4ba8da9b18d177128a4c5ab3f","sha256:464f7247a4e4f40589664f79db7afad0dab3a975dc31015023556df1e2225e84"]
      - values: {"N":50,"T":"2","t":14}
        answers: ["sha256:6d199ebfd89b0f051f549f2224eacfb0e5e3e059c6b80c3887757a6c3e903f2d","sha256:e3c273215464e00a67ba4134c61efcdff916139f78f6466269ebe55c4ced87c6","sha256:c70e5b02e50bb795e5744321a83df2d80e836dccad7b88e9a87987fed027337c"]
      - values: {"N":1000,"T":"5","t":30}
        answers: ["sha256:5d3b0a0fc1c977e24904a104d68d3b5cfc5948fc0849f6170290ca7913f38ae7","sha256:d4600350caa7a407b2fccbbc6cfc1fbf3d39ae0e2fd9fd36b21b222943cc79ff","sha256:3d5ea912f5a3044192aff4922490f31bdedd5d6290e793c4ee3ab608425f7a36"]
      - values: {"N":300,"T":"6","t":36}
        answers: ["sha256:cc099c642838de09e6f9c6f0cfe14872fcdaeaeaf1a7cb180ba771875aefcf0a","sha256:8c45b4134fdcb0295f41a4cbbd8dfe22a5aa9c47efc1a956dab75ffde91eed31","sha256:1bf4145a18ac383e1069da97d1d0207aaf01393e204b773186c1449baa8a7be4"]
      - values: {"N":80,"T":"1{,}5","t":12}
        answers: ["sha256:e8ec17741b9b05fbef2bbac8714882fd1354264dfa9c657023bdf87d737c6905","sha256:a324d95a37cc5af0e6c746655994b3299f9a0c4551131d3d190343dfc4935f04","sha256:13de06bbd978ac0bbe623db4cf75e38cd0c494cdfc223f80f5007829cb6bd0ef"]
  - id: dominio
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Sea $f(x) = \dfrac{\sqrt{{{raiz}}}}{x - {{b}}}$. ¿Cuántos números **enteros** $x$ con $0 \le x \le {{M}}$ pertenecen al dominio de $f$?
      Respuesta: un entero.
    variants:
      - values: {"raiz":"x - 3","b":5,"M":20}
        answers: ["sha256:e739c27e2aa27f9327507021c2f030f13440fdd888825a04b90569fb63010977","sha256:fd695c00014dc073c8fe37e9a24d54ffbd765fc62c51e9301521c51a1adfa237","sha256:c376a772c7d8ab5b7fc8cbb7c7126f5b5cec9102ad485674a457193357c29d2a"]
      - values: {"raiz":"x - 2","b":7,"M":15}
        answers: ["sha256:c0191af14cc2a5992859967fa888359c55ad7b601e316ac51c01dfb6defb4740","sha256:edc684f27627a3e85c47e61cea1f11cb00b128a32c33bc51bf7be726df2e333e","sha256:e5bef794a7c7f671df0e38a22db0889cdb6698414d34cee5ff81afa421f65064"]
      - values: {"raiz":"x - 1","b":4,"M":10}
        answers: ["sha256:6545fac1bb3abea77a98fd90d079af7fa852660f22b6e1f449d263c65ade30a3","sha256:cd1e796152411628d546b8bd224441ad63fa3272adf5c5e1de127254874b809e","sha256:4c3362fdfb8d817c10e598bf2a122625a9f91332c716ea4846a0458f0cca8c34"]
      - values: {"raiz":"x - 5","b":9,"M":25}
        answers: ["sha256:1004b92a2aea8416e1131d2107baf8815b857b2a13d7f2d079939439e0c9bf14","sha256:2e836e44c147d6743218d088723f898e5e187bc1ba8fe40cec782efa3a73284d","sha256:74031682872de4eff4f60776420370cf054696e92ec054792b8374d5bff4829f"]
      - values: {"raiz":"x - 2","b":3,"M":12}
        answers: ["sha256:a5c101530e1b2c117e23e712a346b60b57c620e25250d9dbb107542be73b9280","sha256:3643d56f0e2a7ef29d6e022b0f4c9524f131a11a6da7e45151312695195c399e","sha256:85316c463a29e8902e644651fcee2d7fa435d9722e7439b82ca9eea42b42769f"]
      - values: {"raiz":"x - 4","b":6,"M":18}
        answers: ["sha256:52df2abef3a50ecfd318eef0db04a605ac52d47e73e2ee2bb743b26c39658314","sha256:d8fffdde1e75f9bb466b5d73f229208ee8ddba371d4ba45a59d479011493a3bd","sha256:7e29a96d4b49e8a0bfdffb43927e8116be054d448551d8bb667ca339353191f7"]
  - id: desviacion-tipica
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Calcula la desviación típica poblacional ($\sigma = \sqrt{\frac{1}{n}\sum (x_i - \mu)^2}$) de los datos ${{d}}$. Respuesta: un
      número (si no es exacto, con cuatro cifras significativas).
    variants:
      - values: {"d":"2,\\ 4,\\ 4,\\ 4,\\ 5,\\ 5,\\ 7,\\ 9"}
        answers: ["sha256:cf4630b69655ae692dad9aa4349ef14754da11a956b3e4898f79b76e6ecba5f4","sha256:f2bdd3d496c2a55e3560162a2c60df376651970a6ca852ddd88f90be43f8c0a7","sha256:120e6d08b601015659dcd35918e7c10d7e2d13bf3600f0488c3a33f305373f57"]
      - values: {"d":"1,\\ 3,\\ 3,\\ 5"}
        answers: ["sha256:190091fa6b8b31a2f23022ade10bea240a0260ab703329c7fc650414d6d5c15c","sha256:1fb67b08c69523c694ef492eeb7173a4b0470d59e200ce5751d90b3f4ff44c90","sha256:03bd96ea3743c4d2c4e5c9a8eb9b71529fe5c4c84b6b8b6b44f129934306862f"]
      - values: {"d":"10,\\ 14,\\ 6,\\ 10"}
        answers: ["sha256:fde06024ef9a2e363c3e07e3498b6d09c4de88a91f978bccbd994fee5fc4d65b","sha256:281ad317fd6cd180bbb4e631627395452574291a0e3097baa214e5592fdfb6bd","sha256:589ebd1c4f2f3644e3a2a2236866dea363af1c9488fc811d3a81605f723d4923"]
      - values: {"d":"4,\\ 8,\\ 8,\\ 12,\\ 4,\\ 12"}
        answers: ["sha256:f42327d634931a25e07c1cfef11b45126d6da472e76f6c5440c02b0d99e8513f","sha256:09651a5fab5577058c17351f2f02037daff34449914839149db559b435db76d4","sha256:a291ae1fa0f773c6e050d8a44a456e3ed90516b9752a824bdfc642171abc36a1"]
      - values: {"d":"5,\\ 5,\\ 5,\\ 5"}
        answers: ["sha256:75ec343215b2860d982c6e34ce95f6170ea7be1f38588f30cf3ccfcd0c5adc99","sha256:033adfeb6497d96fa551d876c196545e9e37bc1aa767d5ed0aa7d4cc08e4743c","sha256:bf405690d28fb3e6f0c5fd00b1c48edc5ef36f32dd48546c22031dc8f618e356"]
      - values: {"d":"0,\\ 6,\\ 6,\\ 12"}
        answers: ["sha256:fa7687e57d31b32389b0c34fe74822af8f76d9f21241bae7f66ee27223b56d08","sha256:952f1897bd6c6d0e91e3b4cc0186f1838af6f510f0accdbc6098c8e1b98c98cd","sha256:1e2f18d41612c4609d4b444bd765fe8c59217e838b7116d3b33ae76e6a3359fb"]
  - id: valor-absoluto
    tier: 3
    prompt: |
      ¿Cuántos números **enteros** $x$ cumplen $|x - 3| \le 4{,}5$? Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: punto-equilibrio
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Fabricar un producto cuesta ${{F}}$ € fijos más ${{c}}$ € por unidad, y se vende a ${{v}}$ € la unidad. ¿Cuál es el **menor
      número entero de unidades** que hay que vender para obtener beneficio estrictamente positivo? Respuesta: un entero.
    variants:
      - values: {"F":1200,"c":"7","v":12}
        answers: ["sha256:d13587a34632c7fe0eac6a66b9c859b92ce6540569c279f5e56d0ec005f31149","sha256:7e235e7a9da4d7cf96e03460ff6eea68f3c33fc9186bd2935b1150a38fda496e","sha256:eb60664b38d28246640bb2b264e47c0fa44c0326b93ed2240a5878ae7c90ff6a"]
      - values: {"F":800,"c":"3","v":8}
        answers: ["sha256:7c5528baa89de0a4bcfcf83ba65e070e31c1862c4aa85812f75d2676d8357b5b","sha256:9b627783e812cf4609344b3e843818e320adc5af22ba42a3f4f908e95acd2e98","sha256:cd0d2dfe2c4ae9ff2d3f60ec7b2ac2950b01805c963406df898d3d2f88fa19c2"]
      - values: {"F":2500,"c":"15","v":22}
        answers: ["sha256:f9d64e8032482c5f260d7fc36d582799438a219d8c30bfebc4e6fac4e0cb04a2","sha256:dba18d1c090ec64f612596023d4608ae8f782a7c54841470a706e7ab34e2a782","sha256:f941da1f6f3a24727b00cbea68078cafaeed363989ba06d3923c61fe397d16e8"]
      - values: {"F":450,"c":"2{,}5","v":4}
        answers: ["sha256:1b57ed22d8aa17255e6af8dce0f3df94bae76b431b324df3b32eefc59c891a5d","sha256:e6d1ed5a494263ce0d3e20170c65bb6283077568b929a8278d08efec2bafab77","sha256:d6a668751bf2b5edb20859d1fc8716dd35e6da3dea1af5794118a528f1b7c5a8"]
      - values: {"F":3000,"c":"40","v":55}
        answers: ["sha256:119e4f1ac5468ad3d56077aa2fb79642f979ddf7b9219574e6023a5494dbbaa1","sha256:2e2ffcf22bb4a8d172aaa8f3be4caf69295281f1d37827bb2de9f01ab5f0102b","sha256:9df1e6db0b301a4807d3a22085f4fc552bf6ce574876f982cf5765d7337b9bfa"]
      - values: {"F":999,"c":"6","v":9}
        answers: ["sha256:98095d254ff923590ae317957c7b975a5f293f35f00d5d39ffe2f03c31c49061","sha256:5c3629c1d8e2892b246ad7b910270dbc04ecbdfebcc890463bbecb53baa9a27d","sha256:0df72cb027d0f0254ea49938309e7fb6c85a357eefcea8f2dfe77df5b290dc0a"]
  - id: decaimiento
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una sustancia pierde el ${{p}}\,\%$ de su cantidad cada hora. ¿Tras cuántas horas **enteras** queda menos del ${{q}}\,\%$ de la
      cantidad inicial? Respuesta: un entero (el menor posible).
    variants:
      - values: {"p":20,"q":10}
        answers: ["sha256:3ef178b5964f44357856d412f3a9b09ed1cdfa55939d62af5204d2317c12e205","sha256:a444450ef74d61f660d43d060200a5a50a7b9cf0eabaa35ec3d24cafc9b03a66","sha256:7b4ebdbb98d0d06e96861a15575bcbd83a40d9c89d02602c849925366ebeb787"]
      - values: {"p":10,"q":50}
        answers: ["sha256:ef0618a59d687ce416f78be1caca079dedf267bc426f429fb4f1b1e2a36c4042","sha256:d41f7498b86e250a00961db639e9b225b997f7d789a3eb29490b43dc9f0d8065","sha256:5d54a81ccfff0da73e57a9c366399ceb279ca1b806af65350a42099c3ca9e760"]
      - values: {"p":30,"q":5}
        answers: ["sha256:ff0f951a4353600378df9351ec75840c7c6652b17e99fffda4039febd90a8be8","sha256:c3c16de22be0e72cad23b6746c30d5338ba652b0ae29099b98720be5676926a9","sha256:0b1cc7096bfede1e5cba4777a3603cda03f443b907a160ce7fe7c521cee044b3"]
      - values: {"p":50,"q":1}
        answers: ["sha256:c3b7a8c07d88fc9d72acb28a4c843b1608d08b06bfc6d1e85ac4d287890d89ca","sha256:b0a41ed698ad3858121c94087e3f49bf84635072baa4664cfd115690a9cf8ae0","sha256:3d6fae491074fc46685199453b8700c46a664240d55b58498eef452882d8e429"]
      - values: {"p":15,"q":20}
        answers: ["sha256:35ee12ce0b658c828c10bf4eaf25de45abd75ed5feabb0140dacae6653b317f9","sha256:2141d4e1264c60856e9cf17eca1369429d019234d80ce353836132499cba07b0","sha256:c1750f8ea6b8982d994ab9d1d9da84fe9d3c2ca5a64a8f91e3622f74c4a26e89"]
      - values: {"p":25,"q":10}
        answers: ["sha256:56e758a2ce181c49020fbce0ef4ef6e1c8f74c1e7118c1a57169f76ffe7f7ad1","sha256:1767b84b9ba8276f4aa3fa89bed4a8a755e5f54baacdeae30523b9dd458ee63e","sha256:35e8649afc6cb702317c8eaacf36699a080c08ac6e8bd0e9174662dea853e75e"]
  - id: media-global
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una clase A de ${{na}}$ alumnos tiene nota media ${{ma}}$ y una clase B de ${{nb}}$ alumnos tiene nota media ${{mb}}$. ¿Cuál es la
      nota media de los ${{n}}$ alumnos juntos? Respuesta: un número.
    variants:
      - values: {"na":6,"ma":"7","nb":4,"mb":"8{,}5","n":10}
        answers: ["sha256:c7624061e6a0a24f78b2aad828141e2ecff51505a57f9143dc535d7c1a2a955f","sha256:a67eadcd298370a4f0c62853753540bc58a200915b88dd1a9c07eacca1351329","sha256:edc56ac16c0bd291ffe31470fefa87c50878a0dca8756b8d31af37f1c8400696"]
      - values: {"na":20,"ma":"6","nb":10,"mb":"9","n":30}
        answers: ["sha256:a4b10ba2d83e1727e33dfcf34fb6a4e718a391c3f61c95676e6ace36806f3aba","sha256:4187be6565aaf0df57256e4b9133e027370dea66ef3e34a01381ae579d7823bb","sha256:b1ae6e12a8e9012efc125aa97d28404b8ccf24de6633eed0f534eca0edbe2470"]
      - values: {"na":12,"ma":"5{,}5","nb":8,"mb":"8","n":20}
        answers: ["sha256:730934e55991dbbe20285bde2559755135022b4af4153536011d178655252063","sha256:9f2692c07779ce0fe56ab131010b1dc541f08b1f6b983479f206f87418881dbf","sha256:630e3de6408641fc4be15b84a2ae4911fac41bd0b2662fd0f7d627d15ab6ad27"]
      - values: {"na":15,"ma":"7{,}2","nb":5,"mb":"6","n":20}
        answers: ["sha256:dead129a1a1e1f4fcbc9f8aafa8f1fc340820b4b50145d193b616f33eaf9c291","sha256:79e5954fe44b6d6633a3066d0e3f015e6ec1316603f61d3cd91f5ee9f43f347d","sha256:e9a4f896788304019a17ec81c07f4e5b863abfb63bb68027a4030d1bb186f30b"]
      - values: {"na":9,"ma":"4","nb":3,"mb":"8","n":12}
        answers: ["sha256:125cd2eef230c2fa58eadfa324a970f222819d7bb3683e7da4d8465fcdd078da","sha256:a3acd7b34ef99673a2b4cb54525db3579e616da2f14050b531cda6e867a03af4","sha256:ef748c13f33b2047f5d37de11e240172ae8aa9a3e6d0b0a9175e483306f4b491"]
      - values: {"na":25,"ma":"6{,}4","nb":15,"mb":"7{,}2","n":40}
        answers: ["sha256:07c392e6f4f6fea41e8fb102adb470f30d921e6d6f8d0dd14b669236e3756880","sha256:9ce6b8cccc7e4e1728cc6d8761b47954a72381ca94ebc286e05e80079f7b4954","sha256:7452c8be4fba83ad602a59d173582ce5b5a9f99603b8dd2c44addb46b07308d3"]
  - id: r-es-funcion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas reglas es una función (a cada entrada, **una sola** salida)?
    options:
      - |
        A cada persona, sus números de teléfono
      - |
        A cada número positivo, sus raíces cuadradas
      - |
        A cada persona, su fecha de nacimiento
      - |
        A cada año, las personas nacidas ese año
    answers: ["sha256:97d4dd9e64d5dc7706ea8b33902556daf409c7ea8b1ef7b56a7f9f45ee142e31"]
  - id: r-lineal-o-exponencial
    tier: 1
    type: opcion
    review: true
    prompt: |
      Una tabla de valores es $5, 15, 45, 135, \dots$ ¿Qué tipo de crecimiento es?
    options:
      - |
        Lineal: aumenta siempre lo mismo
      - |
        Exponencial: se multiplica siempre por lo mismo
      - |
        Ninguna de las dos
    answers: ["sha256:cdd353c6e013ccc87ff0df5bbf778d232954be606c571a9fabdc1835047ae3ff"]
  - id: r-pendiente-interpretar
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Una compañía cobra $y = 0{,}35x + 9$ euros por $x$ kWh de luz al mes. ¿Cuántos euros más pagas por cada kWh extra?
    answers: ["sha256:d8192205eb37eb96b7c9711949d6c877c98ac930c45b55ee97c4e529e51ba9c7","sha256:922c2b14ba4e67e08846f00c7c99002515b749981ce4cc8d4c5f5220b4d5463c","sha256:5d5312d266a842f5604bdf842c72271ae328fcce55766e2aef9480077959635b"]
  - id: r-media-mediana
    tier: 2
    type: opcion
    review: true
    prompt: |
      En un barrio hay muchos pisos de unos $150\,000$ € y unos pocos de lujo de más de $2$ millones. ¿Qué medida describe
      mejor el precio de un piso típico?
    options:
      - |
        La mediana, porque la media se deja arrastrar por los pisos de lujo
      - |
        La media, porque usa todos los datos
      - |
        La moda, porque es la más repetida
      - |
        Da igual, siempre coinciden
    answers: ["sha256:c9ac02785ba21c29313feb683c38693fd0cfca22563c655c4aad42fcfd88adb9"]
  - id: r-discriminante
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas veces corta al eje $x$ la parábola $y = x^2 + 10x + 25$?
    answers: ["sha256:952226e76d91e39f0b5e7d4bbd6b1806e56cded618777130eb887f5e2f6270e4","sha256:7d57d37d7f92f681e51012f4ab2b572a09ba7c0109e373e7a3d6e17a5bb0a1b1","sha256:6808c700a60e9f3191fd01f00a6a5cd95a4097a8f0025fc30075a9fe51d3dabf"]
  - id: r-simpson
    tier: 3
    type: opcion
    review: true
    prompt: |
      Un tratamiento A funciona mejor que B en hombres y también en mujeres, pero peor si se juntan todos los pacientes. ¿Qué
      explica esto?
    options:
      - |
        Es imposible: si A gana en cada grupo, gana en el total
      - |
        Se debe a un error de cálculo
      - |
        Ocurre solo con muestras pequeñas
      - |
        Puede ocurrir si los grupos tienen tamaños muy distintos en cada tratamiento (variable de confusión)
    answers: ["sha256:2d88884c88b682406ce393f3c2d39e3f7f74157efcd3d9e27016b8cde2bb7b3a"]
---

# Funciones, gráficas y estadística descriptiva

Una **función** es la idea de que una cantidad **depende** de otra: el coste depende de los minutos, la altura de un
balón depende del tiempo, la población depende de los años. Dibujar esa dependencia en una gráfica convierte
una tabla opaca en algo que se **ve**. Este nodo enseña a leer, construir y comparar funciones, y añade la otra
mitad de «trabajar con datos»: resumirlos con números (estadística descriptiva) sin que te engañen.

## Objetivos

Al terminar sabrás:

1. Definir una función, su dominio y su recorrido, y evaluarla.
2. Dibujar y usar rectas: pendiente, ecuación, intersecciones y comparación de tarifas.
3. Reconocer parábolas: vértice, cortes con los ejes y máximos y mínimos.
4. Distinguir crecimiento lineal y exponencial, y modelar duplicaciones y decaimientos.
5. Calcular media, mediana, moda y desviación típica, y elegir la medida adecuada.
6. Detectar gráficos engañosos, sesgos y la paradoja de Simpson.

> [!question] Test de entrada
> 1. Si $y = 2x + 1$, ¿cuánto vale $y$ cuando $x = 3$? 2. ¿Cuál es la media de $2, 4, 9$? 3. ¿Qué crece más deprisa
> a la larga, sumar $10$ cada día o duplicar cada día?
>
> Respuestas: $7$; $5$; duplicar. (Lo comprobarás con números en este nodo.)

## 1. Para qué sirve

- **Decidir**: ¿qué tarifa, qué hipoteca, qué plan conviene? Cada opción es una función del tiempo o del consumo.
- **Predecir**: modelos de crecimiento de una epidemia, de una inversión, de una población.
- **Entender noticias y estudios**: gráficos, medias, «la mayoría», «el riesgo aumentó».
- **Base de todo lo posterior**: el cálculo, la física, la economía y el aprendizaje automático son estudio de
  funciones y de datos.

## 2. Qué es una función

> [!practico]
> Piensa en una **máquina de refrescos**: metes un código (la entrada) y sale una bebida (la salida). Si al pulsar «B3»
> unas veces sale cola y otras naranja, la máquina está rota. Una función es una máquina que **nunca** se rompe: a cada
> entrada le corresponde **una sola** salida. Ejemplos: a cada día del año, la temperatura máxima en tu ciudad; a cada
> cantidad de kilos de fruta, lo que pagas.
>
> El **dominio** son las entradas que la máquina acepta (no puedes pedir «el día 400 del año»); el **recorrido**, las
> salidas que puede dar.


Una **función** $f$ asigna a cada valor de entrada $x$ de un conjunto (el **dominio**) **un único** valor de salida
$f(x)$. Se escribe $y = f(x)$. El conjunto de salidas posibles es el **recorrido**.

La palabra clave es **único**: la misma entrada no puede dar dos salidas. La relación «$x$ es un número, $y$ es una
raíz cuadrada de $x$» (con $y = \pm\sqrt{x}$) **no** es función; $y = \sqrt{x}$ (solo la positiva) sí lo es. En una
gráfica, una curva es función si **toda recta vertical la corta como mucho una vez**.

Una función se puede dar de cuatro maneras equivalentes: con una **fórmula** ($f(x) = 3x - 2$), una **tabla**, una **gráfica**
o un **texto** («el coste es $5$ € por cada kilo»). Aprender a pasar de una a otra es la habilidad central.

**Dominio.** Si no se indica otra cosa, es el conjunto de $x$ para los que la fórmula tiene sentido. Dos restricciones
básicas: **no se divide entre cero** y **no se toma raíz cuadrada de un negativo** (en los reales). Por ejemplo,
$f(x) = \dfrac{\sqrt{x + 2}}{x - 1}$ exige $x + 2 \ge 0$ y $x \ne 1$: dominio $[-2, \infty)$ salvo el punto $1$.

**Evaluar** es sustituir: si $f(x) = x^2 - 3x$, entonces $f(4) = 16 - 12 = 4$ y $f(-1) = 1 + 3 = 4$.

## 3. La función lineal

> [!practico]
> Un taxi cobra $3$ € al subir y $1{,}20$ € por kilómetro. Si haces la tabla (0 km, 3 €; 1 km, 4,20 €; 2 km, 5,40 €...) y la
> dibujas, los puntos quedan **en línea recta**: cada kilómetro añade lo mismo. Esa cantidad fija por paso ($1{,}20$ €/km)
> es la **pendiente**, lo «empinada» que es la recta; y los $3$ € de partida son donde la recta corta al eje vertical.


Una función **afín** es $y = mx + n$; si $n = 0$ se llama **lineal** o de proporcionalidad directa (en muchos textos fuera del currículo español se llama «lineal» también a la afín). Su gráfica es una **recta**.

- $m$ es la **pendiente**: cuánto sube $y$ por cada unidad que avanza $x$, $m = \dfrac{\Delta y}{\Delta x} = \dfrac{y_2 - y_1}{x_2 - x_1}$.
- $n$ es la **ordenada en el origen**: el valor de $y$ cuando $x = 0$ (donde la recta corta al eje vertical).

> [!formal] Con rigor: por qué la pendiente no depende del tramo
> **¿Por qué la pendiente es la misma en cualquier tramo?** Porque los triángulos rectángulos que se forman al
> subir y avanzar entre dos puntos cualesquiera de la recta son **semejantes** (ángulos iguales por paralelismo), y en
> triángulos semejantes los cocientes de lados coinciden. Es el teorema de Tales del nodo de geometría.

**Interpretación.** La pendiente es una **tasa de cambio**: $5$ €/kg, $80$ km/h, $0{,}05$ €/min. Si $n = 0$ la función
es de **proporcionalidad directa** (el caso del nodo de proporcionalidad). Rectas con la **misma pendiente** son
paralelas; si los productos de pendientes valen $-1$ ($m_1 m_2 = -1$), son perpendiculares.

**Ecuación de la recta que pasa por dos puntos.** **Ejemplo resuelto:** por $(1, 4)$ y $(3, 10)$: pendiente
$m = \frac{10 - 4}{3 - 1} = 3$. Como pasa por $(1, 4)$: $4 = 3\cdot 1 + n$, luego $n = 1$ y $y = 3x + 1$.
Comprobación con el otro punto: $3\cdot 3 + 1 = 10$. $\checkmark$

**Comparar dos situaciones lineales = resolver un sistema.** Una tarifa cuesta $15 + 0{,}10\,m$ y otra $0{,}25\,m$ (euros,
$m$ minutos). Igualando, $15 + 0{,}10m = 0{,}25m$, $m = 100$. Con menos de $100$ minutos sale mejor la segunda, y con más,
la primera. **Punto de equilibrio** en un negocio: ingresos $=$ costes; a la derecha del corte hay beneficio.

## 4. La función cuadrática y la parábola

> [!practico]
> Lanza una pelota hacia arriba y en diagonal: sube cada vez más despacio, se para arriba un instante y baja. Ese camino
> es una **parábola**, y el punto más alto es el **vértice**. Los chorros de una fuente, la forma de una antena parabólica
> y la trayectoria de un tiro a canasta son parábolas. En problemas de «lo máximo» o «lo mínimo» (la mayor área con una
> valla, el menor coste) casi siempre hay una parábola y la respuesta está en su vértice.


Una función **cuadrática** es $y = ax^2 + bx + c$ con $a \ne 0$. Su gráfica es una **parábola**: abre hacia arriba si
$a > 0$ (tiene un **mínimo**) y hacia abajo si $a < 0$ (tiene un **máximo**).

> [!formal] Con rigor: vértice y fórmula de las soluciones
> **Vértice.** Completando el cuadrado:
>
> $$
> ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a} .
> $$
>
> El cuadrado vale $\ge 0$ y es $0$ solo cuando $x = -\frac{b}{2a}$: ahí está el **vértice**, el punto extremo. **Ejemplo
> resuelto:** $y = x^2 - 4x + 7$: $x_v = \frac{4}{2} = 2$, $y_v = 4 - 8 + 7 = 3$; el mínimo es $3$ y la parábola no corta al
> eje $x$ (el mínimo es positivo).
>
> **Cortes con el eje $x$.** Resolver $ax^2 + bx + c = 0$. Igualando a cero la expresión de arriba y despejando se obtiene
>
> $$
> x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} .
> $$
>
> El **discriminante** $\Delta = b^2 - 4ac$ decide: $\Delta > 0$, dos cortes; $\Delta = 0$, uno (el vértice); $\Delta < 0$, ninguno.

**Aplicación (optimizar).** Con $40$ m de valla se quiere cercar un rectángulo del área máxima. Si un lado mide $x$, el
otro mide $20 - x$ y el área es $A(x) = x(20 - x) = -x^2 + 20x$, con vértice en $x = 10$: **el cuadrado** ($10 \times 10$,
área $100$ m$^2$) es la mejor opción. **Tiro parabólico:** la altura de un balón es una cuadrática del tiempo
(en la física se verá por qué).

## 5. La función exponencial

> [!practico]
> Un rumor: hoy lo sabes tú; mañana se lo cuentas a $2$ amigos; al día siguiente cada uno se lo cuenta a otros $2$… El número
> de personas nuevas cada día se **multiplica** por $2$: $1, 2, 4, 8, 16, \dots$ A los $30$ días serían más de mil millones.
> Eso es crecer exponencialmente. Lo contrario, que algo se reduzca a la mitad cada cierto tiempo (un medicamento que se
> elimina de la sangre, una sustancia radiactiva), es el **decaimiento** exponencial.


Una función **exponencial** es $y = a\cdot b^x$ con $a > 0$ y $b > 0$, $b \ne 1$. Si $b > 1$ **crece**; si $0 < b < 1$ **decrece**.
La diferencia con la lineal es esencial:

| | Lineal | Exponencial |
|---|---|---|
| Cada paso de $x$ | **suma** una constante | **multiplica** por una constante |
| Tabla | $3, 5, 7, 9, \dots$ | $3, 6, 12, 24, \dots$ |
| A la larga | crece despacio | **supera a cualquier lineal** |

**Duplicación.** Si algo se duplica cada $T$ unidades de tiempo: $N(t) = N_0\cdot 2^{t/T}$. **Ejemplo resuelto:** $100$
bacterias que se duplican cada $2$ h: tras $10$ h hay $100\cdot 2^5 = 3200$. Tras $48$ h, $100\cdot 2^{24} \approx 1{,}7\cdot 10^9$.
**Decaimiento (semivida):** si una sustancia pierde la mitad cada $T$, $N(t) = N_0\cdot 2^{-t/T}$.

**Aviso sobre el crecimiento exponencial:** el nuestro es un cerebro «lineal»; subestimamos sistemáticamente lo
exponencial (epidemias, deudas con interés, memoria de un ordenador que se duplica...). Si el valor se duplica cada día,
tarda $30$ días en llegar a algo que ya a los $29$ era la mitad.

## 6. Leer una gráfica

Lo que hay que mirar, por este orden:

1. **Ejes y escalas**: qué magnitud y en qué unidades; si el eje vertical **empieza en cero**.
2. **Cortes con los ejes**: valor inicial ($x = 0$) y los ceros ($y = 0$).
3. **Crecimiento y decrecimiento**: dónde sube y dónde baja.
4. **Máximos y mínimos**: los puntos extremos.
5. **Tendencia** a largo plazo.

**Gráficos engañosos.** Un eje vertical **truncado** (que empieza en $98$ en lugar de en $0$) hace que una diferencia del
$1\,\%$ parezca enorme. Una escala distinta entre ejes puede disimular o exagerar una pendiente. Mira siempre los
números de los ejes.

## 7. Estadística descriptiva

> [!practico]
> Tus notas de un trimestre son $4, 6, 6, 7$ y $10$.
>
> - La **media** ($6{,}6$) es repartir los puntos a partes iguales: es la nota que tendrías si todas fueran iguales.
> - La **mediana** ($6$) es la nota del medio cuando las ordenas.
> - La **moda** ($6$) es la que más se repite.
> - La **desviación típica** dice si tus notas son parecidas entre sí (pequeña) o muy desiguales (grande).
>
> Cuando hay un dato muy extremo (un sueldo millonario en una lista de sueldos normales), la media se dispara y la mediana
> apenas se mueve: por eso las noticias serias hablan de «sueldo mediano».


La **estadística descriptiva** resume un conjunto de datos con pocos números. Con datos $x_1, \dots, x_n$:

- **Media** $\bar{x} = \dfrac{x_1 + \cdots + x_n}{n}$: el punto de equilibrio de los datos.
- **Mediana**: el valor central tras ordenar (la media de los dos centrales si $n$ es par). La mitad de los datos queda por
  debajo.
- **Moda**: el valor más frecuente.
- **Rango**: máximo menos mínimo.
- **Desviación típica** (poblacional) $\sigma = \sqrt{\dfrac{1}{n}\sum (x_i - \bar{x})^2}$: la distancia «típica» a la media. Su cuadrado,
  $\sigma^2$, es la **varianza**.

**Ejemplo resuelto:** datos $1, 3, 5, 7, 9$: media $5$, desviaciones $-4, -2, 0, 2, 4$, cuadrados $16, 4, 0, 4, 16$ (suma $40$),
varianza $8$, $\sigma = \sqrt{8} \approx 2{,}83$.

**Media o mediana.** La media se deja arrastrar por los valores extremos; la mediana no. En una empresa de cinco empleados
que ganan $1500, 1600, 1700, 1800$ y $12\,000$, la media es $3720$, pero **nadie** gana eso (el jefe gana mucho más y los demás, mucho menos); la mediana,
$1700$, describe mejor al empleado típico. Por eso conviene dar los salarios, los precios de las casas y la riqueza con **medianas** (o con ambas medidas).

**Media ponderada.** Si cada dato tiene un peso $w_i$: $\bar{x} = \dfrac{\sum w_i x_i}{\sum w_i}$. Es lo que usa la nota final de un
curso (examen $60\,\%$, trabajos $40\,\%$) y la mezcla de concentraciones.

**Cuartiles y diagramas de caja.** Los cuartiles $Q_1$, mediana y $Q_3$ dividen los datos ordenados en cuatro partes; el
rango intercuartílico $Q_3 - Q_1$ mide la dispersión sin dejarse engañar por los extremos.

### Correlación no es causalidad

Dos magnitudes pueden crecer juntas sin que una cause la otra: las ventas de helados y los ahogamientos suben en verano
(la causa común es el calor). Para afirmar causalidad, lo más fiable son los **experimentos controlados**; con datos observados también se puede, pero solo con diseños muy cuidadosos (así se estableció que el tabaco causa cáncer), nunca con una gráfica sola.

### La paradoja de Simpson

Un resultado puede **invertirse** al combinar grupos. En un estudio real sobre cálculos renales (Charig et al., 1986), la
cirugía abierta tuvo éxito en $273$ de $350$ pacientes ($78\,\%$) y la nefrolitotomía percutánea en $289$ de $350$
($83\,\%$): parece mejor la segunda. Pero **por tamaño del cálculo**:

| | cirugía abierta | percutánea |
|---|---|---|
| piedras pequeñas | $81/87 = 93\,\%$ | $234/270 = 87\,\%$ |
| piedras grandes | $192/263 = 73\,\%$ | $55/80 = 69\,\%$ |
| **total** | $273/350 = 78\,\%$ | $289/350 = 83\,\%$ |

La cirugía abierta es mejor en **cada** subgrupo, y peor en el total, porque se reservaba para los casos más difíciles (las
piedras grandes). La lección: **un dato agregado puede ocultar una variable de confusión**; hay que preguntar siempre cómo se
formaron los grupos.

## 8. Errores típicos

- Confundir **función** con «relación»: una entrada, **una** salida.
- Olvidar las restricciones del dominio (dividir entre cero, raíz de un negativo).
- Creer que el crecimiento exponencial «es solo un poco más rápido».
- Usar la media donde la mediana es lo apropiado (salarios, precios).
- Mezclar medias de grupos de distinto tamaño sin ponderar.
- Fiarse de un gráfico sin mirar los ejes.
- Concluir causalidad de una correlación.

## Repaso: lo que debe quedarte dentro de un mes

1. Función: a cada entrada, una salida; dominio y recorrido.
2. Recta: pendiente $=\frac{\Delta y}{\Delta x}$; dos rectas se cortan donde sus fórmulas son iguales.
3. Parábola: vértice en $x = -\frac{b}{2a}$; discriminante $b^2 - 4ac$.
4. Lineal suma, exponencial multiplica.
5. Media (sensible a extremos), mediana (robusta), desviación típica; la paradoja de Simpson.

## Siguiente

Con esto, el siguiente escalón es [[mat-algebra-secundaria|el álgebra de secundaria]] (expresiones con potencias de $x$,
factorización, logaritmos), la trigonometría y el razonamiento lógico.
