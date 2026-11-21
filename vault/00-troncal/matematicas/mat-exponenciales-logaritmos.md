---
id: mat-exponenciales-logaritmos
title: "Exponenciales y logaritmos: definición, propiedades, cambio de base, ecuaciones exponenciales y logarítmicas, crecimiento y escalas"
area: matematicas
trunk_level: 3
prerequisites: [mat-potencias-raices, mat-ecuaciones-segundo-grado, mat-porcentajes-finanzas]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 2: «Potencias y raíces», secciones 3 (potencias de exponente racional) y 6.1-6.2 (logaritmos: definición y propiedades). Apuntes Marea Verde, autor José Antonio Encabo de Lucas. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/02_POTENCIAS_4B.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 12: «Funciones exponenciales, logarítmicas y trigonométricas», secciones 1.1-1.3 (crecimiento exponencial, el número e) y 2.1-2.3 (definición, cálculo elemental y propiedades de los logaritmos). Apuntes Marea Verde, autor Miguel Ángel Paz. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/12_Exponencial_4B.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 4: «Ecuaciones y sistemas», sección 2.4 (ecuaciones logarítmicas y exponenciales). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/04_Ecuaciones_4B.pdf"
hints:
  - "Concepto: el logaritmo es la operación inversa de la potencia: log_b x es el exponente al que hay que elevar b para obtener x. Por eso sus propiedades son las de las potencias leídas al revés: el logaritmo de un producto es la suma de logaritmos, y el de una potencia, el exponente por el logaritmo."
  - "Herramienta: en una ecuación exponencial, intenta escribir los dos miembros como potencias de la misma base; si no se puede, toma logaritmos; si aparecen b^(2x) y b^x, haz el cambio t = b^x. En las logarítmicas, junta los logaritmos en uno solo, quítalos y COMPRUEBA que los argumentos son positivos."
  - "Documentación: Marea Verde 4.º ESO B caps. 2 (sección 6), 12 (secciones 1-2) y 4 (sección 2.4)."
exercises:
  - id: logaritmo-por-definicion
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula sin calculadora $\log_{{{b}}} {{N}}$ (puede ser negativo o fraccionario).
    variants:
      - values: {"b":3,"N":"81"}
        answers: ["sha256:8d0536cd62cec8a1e3b3d14f057a313335dcc560bb46851a3e5bdf5d9f8dcdc6","sha256:8165852d1668ffe4602f4d1b2bcd0f68cf45b2792ff96889244440229224c1e9","sha256:fe2e0ecbff0190618fa72507d07bd0aaf6636c2ee18a5925c08ac0ea3f58d730"]
      - values: {"b":5,"N":"\\frac{1}{25}"}
        answers: ["sha256:541011ef9c9600d78b2c9e49b1e670fb2c9a240c94e329db2d980461f7165566","sha256:b9e262738d5038fe10b135e45d71fb79b186281c672f29844f7a33aa0f8c8d8f","sha256:eafc76ee334bb74af86905ada8edc130d999a4056b391a1e106e4c414b70cd74"]
      - values: {"b":2,"N":"\\sqrt{2}"}
        answers: ["sha256:3572db34b7f4a9466582d90135f73bdf538b40667e8c758aa50f3bf9250cce4f","sha256:ce24c33fe918ef911b1d176be9b510fa0db66970346cef50896344d5126ea4c0","sha256:7e502d5f5a4ed423827e81627a71bf521f25bf4e862e62df00ad79dc0d6e8037"]
      - values: {"b":10,"N":"0{,}001"}
        answers: ["sha256:0b78c6c3d81ff5211efd4d8a687a5f8cb105613ee844d667b83d49d30b7a7b5d","sha256:f09c7382ec3d9a246f67f791bb28432008868f43edb56862efa26463ae72057a","sha256:ee5cfe94090988633ee4623eb84904819120c9e627f0a99f52529ad92fbeb07c"]
      - values: {"b":4,"N":"8"}
        answers: ["sha256:647053bf199ba917cd7149a2f506f2c9657fb554673211023614465db7ac2a79","sha256:29fe55c6b73a8e77685e8633d763ec06bc41ae393ae640d040823fe5c981d305","sha256:7d20bf5069724ca4efd330e795f7dd747578247844753d87e3d3b2aeea52f702"]
      - values: {"b":16,"N":"2"}
        answers: ["sha256:364f958395afb4270d3c2ab6c1f5cf59c5c206bbe54444a1c36c8c9f9f599e25","sha256:6bcb7dd8a66e52ffa15b2fc5556d9f372309e7cd6b5b7b972bc4ba1cbd5902a1","sha256:bdb5364366d31572f74c9a7459a41b3b81eeedf74984fa9470436bbd235ead4e"]
  - id: propiedades-de-los-logaritmos
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula sin calculadora, usando las propiedades de los logaritmos: ${{e}}$.
    variants:
      - values: {"e":"\\log 25 + \\log 4"}
        answers: ["sha256:86fc70499f50c7c128c4ae2a4006bb2f91cbb118b03660d33072c55726de1287","sha256:d73282b882d181808cf6d2a6c5c3dab882280b6896395eeda6ee6490efb5c40f","sha256:c815d20350f052b13e1bce81e619215684f98c627719a08221aff694ff4aede4"]
      - values: {"e":"\\log 500 + \\log 2"}
        answers: ["sha256:8ae6d8fca8c55ca295a9b8dde2e1700faacc3ab092d078634e941a68f02372ce","sha256:6b705d018fafb1a70ce10d4541bd71aa6f99583d780d033e7fa08e86e2795783","sha256:749035adb95bfe49ceee2fd0b039bc9e0361ec6f209a7b8436cb44ce54f32896"]
      - values: {"e":"\\log 8\\,000 - \\log 8"}
        answers: ["sha256:a1baa7ad96af584ed9ba3ce85aef2876c42f9ee9619d7eb3f8ede35aab451d3e","sha256:cd564a58d5bc977c94b843a70a5b3b4de96999cdc91e6b624787a66b0c962516","sha256:59fd97f5838224bb3495dc46b64d67118af62080a4be21a556f085e00aaaf009"]
      - values: {"e":"\\log 40 + \\log 250 - \\log 10"}
        answers: ["sha256:40c5001b73611735cf8bfa6e148d858539bda1e3cb5c64d94b74fbee3d899c8c","sha256:365252bcea823fe451c04878fb076ca990f66dd53e3e88fcdbd22954c461d502","sha256:f0da70d295c384e446f551aef45cde06c5b4f29d8b15dd8003ef6734558b5133"]
      - values: {"e":"\\log 2 - \\log 200"}
        answers: ["sha256:ee55ba5672829dd4ba627205b361be196fa0d67c00873df16dcdb0291547996c","sha256:6a31feb5feb2743bca9a445601d65631eab9b75fc04ffd1fd780224e0639dd92","sha256:65cec2584e5aa7a9647560f5857a2cad1bb289a0b7b8057de3bee416b6971646"]
      - values: {"e":"2\\log 50 + \\log 4"}
        answers: ["sha256:67605d2e61a72c9e1fed80b56fcec0fabfe22a035b119140dd46a4a8abec67a9","sha256:74c7f3e478778633decc745985ec60e40a4a2def84725a2fd06f8a607e5efb64","sha256:587f24f5ae6fcf6f646fc4e502d18668d3efaaa322314c02a9be446f72d5ced1"]
  - id: desarrollar-un-logaritmo
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Sabiendo que $\log x = {{A}}$, $\log y = {{B}}$ y $\log z = {{C}}$, calcula ${{e}}$.
    variants:
      - values: {"e":"\\log \\dfrac{x^{2}\\,y}{z^{3}}","A":"0{,}3","B":"0{,}5","C":"0{,}1"}
        answers: ["sha256:4a81490b9868debd3eeee18504915a5bb38db28fce40071aa5a73ae121254668","sha256:b82e4829e925b0913a1bba656df61ff72181bc176de8724709093e16f3159e5e","sha256:c40f0ce703ac269d2cde942fa72c796b8080b8d252f810c2deb62669477ab6d5"]
      - values: {"e":"\\log \\dfrac{x\\,y^{2}}{z}","A":"1{,}2","B":"-0{,}4","C":"0{,}6"}
        answers: ["sha256:309862a9a0ccb1a5ca96afc155beb966f4473cc5d6972a5dee6dd8c754c95242","sha256:6e52994dd2777b934b78486131ea3cca76c2af1cd32d7c15610faf54af2a5e3c","sha256:33aad4ca15cf9891926e2582efc74ab0bb34bd29b04da88df93d4c6ac14b2d1e"]
      - values: {"e":"\\log \\dfrac{x^{3}\\,y}{z^{2}}","A":"0{,}5","B":"1","C":"1{,}5"}
        answers: ["sha256:cb50bd898b98a5583e5b2fd16d4a0fc512aab26b63d8f148d11099d606c1757a","sha256:8e5e6c7176b24be35f9329ff7fd7596de31bcc6885faa7bad5d5dd05f88d25c5","sha256:f0f5cbdbb0af9b60f1ee3ff9bd4e70829954d0990bff93c525800598a0f0078f"]
      - values: {"e":"\\log \\dfrac{x\\,y^{3}}{z^{2}}","A":"-1","B":"0{,}25","C":"0{,}5"}
        answers: ["sha256:a9c5b3ada04aec43eea2487bc15e3ffd74206b989c2de29eabe5905b77215335","sha256:bf354b815c5409f7562b6e06829424dacb85458edf4985f78769da06278c2672","sha256:6042ed8e6197ded726a372e06d9476190a57885d638fd1130bb6e4018956163e"]
      - values: {"e":"\\log \\dfrac{x^{4}\\,y^{2}}{z}","A":"0{,}1","B":"0{,}7","C":"0{,}3"}
        answers: ["sha256:360b5270e311c8f0ee88188714c81bc71521ca3aa92cc294924d3156f92b7807","sha256:b2a3f4f04881b39979e5cadc6c49bad50ec3bb9fe94c03ef30aefcb82db21027","sha256:47522e3c14ead848415dc6957c66733234f973c16bd0d2bd372339f1d594bb21"]
      - values: {"e":"\\log \\dfrac{x^{2}\\,y^{2}}{z^{2}}","A":"1{,}5","B":"0{,}5","C":"2{,}5"}
        answers: ["sha256:f65102151192703bec7e6e3d750349a26c138f87f199f2e3de57901995352aec","sha256:90c850f6fd15cc8e40e1d7fbbf95aedac263e3b8be84ae0d3eacff9e9a1f6ab5","sha256:c1356e4fde2e878d54abee67138938db9177c94b955b7a675d1dec4119eab236"]
  - id: cambio-de-base
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula $\log_{{{b}}} {{N}}$ con la calculadora (usa el cambio de base). Respuesta con al menos cuatro cifras significativas.
    variants:
      - values: {"b":"2","N":50}
        answers: ["sha256:fca25afa914d0cee075c79bca4d256abb2fa39e8f1359c386cb70eb8531d1771","sha256:c8e2dceda18f0e157f0425c2c2a642fd23691b703a5c29508efad48f469dd7b9","sha256:2976b7351c594e75722b4939a455b6168ed39a77fd82a02aa948280ce465359e"]
      - values: {"b":"3","N":10}
        answers: ["sha256:3a5ecd92a9d477d7a0b0c83cbf16c50c29b94ab7a0d528f2481e014cf6523650","sha256:47c51ba952bf7b14a63e148967a4f8ae5a13638d68d4a89a5a911ef146b75da8","sha256:f37e55aaa333adf7332539b58917b2080f45813fb330c50da128ccf6954f1d74"]
      - values: {"b":"7","N":100}
        answers: ["sha256:c9c0ba8e213673e834420566d246dd7cebc392cea436902cc9f4a9fc15aa7ef4","sha256:b15e900d692f761b407713687a237f35fc0df2c3324093066f8d349ee5a5aa8d","sha256:b796fc1478bd3485a4793fe07f9ac2d3f33ba91d9d0df9c6565119027961f399"]
      - values: {"b":"5","N":2}
        answers: ["sha256:0dfb2dc187f4dc5f03e8933d31d9c99c3d97635a94b2a850ba5abd0ae6e3e34b","sha256:850e866164065c618c86cf934f1487e1447856a4a46787e0254703345d7edac0","sha256:56223f1631f68f13d7903b8a91001615ac2594b415cc8024462c5887fa013394"]
      - values: {"b":"1{,}5","N":30}
        answers: ["sha256:213ba5039ed04fa85176d9788049d69b3a6112010324741c047d9845f1dcb043","sha256:a601291f2b48b7aee5375dac662221bf41590f82d28b2653ac01a686c16137fb","sha256:07e53721ae6935ba77a49875eb4ffb959209778003277d4db9c926b580d48ca1"]
      - values: {"b":"0{,}5","N":12}
        answers: ["sha256:560f587dd1544cd9018dabc0a33a2c676624af715ff59bd8dae9c0123e15e5fc","sha256:f17c7dfd2513fcbab049632fc38f82407eacd32dba9ba09ca9447b50e8db7f13","sha256:1b76fbae9c7f42881181b60d88e4a0b2faacebc2360e99e02fd2082bde850fd0"]
  - id: exponencial-misma-base
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Resuelve ${{b}}^{{{ex}}} = {{s}}$ escribiendo los dos miembros como potencias de la misma base.
    variants:
      - values: {"b":2,"ex":"x + 3","s":"64"}
        answers: ["sha256:3e8b9e1d2661decda2e3b30cf8b108fd34e1708721b5db37543c2a47000d022a","sha256:a084b1f0ddd9c1311e8602a5a7dc2362685c1ab08a2ed2a6585ffa299d193628","sha256:c5bae80637a57fdff294e9db83b7cf2cb2160bc3ec4218ccbb05e705cee5d853"]
      - values: {"b":3,"ex":"2x - 1","s":"2\\,187"}
        answers: ["sha256:53a06f3cdd3b1bea31c576967b3536376416f93e16901f74b27aa73932c83058","sha256:da826af9f80e1d4efc4c852475b3b59237d5586d513d4dbd063f43c460dd64b0","sha256:9c87e17e81e439b085be056a682b9d2640aa3eeb09aabbc6fe2171538e5f2818"]
      - values: {"b":5,"ex":"x","s":"\\frac{1}{125}"}
        answers: ["sha256:94d7dbdfd5e153b5237f50addd81c5c8f8ac12c7ba9d7d01448228570ad20265","sha256:10faa1b85047b741c302ab2b3e24d6437a1cd62b772c938e59021f549587530a","sha256:7cdc60fa95152e283e7c15c168dd462a17b391e0357466aac54f06118b133245"]
      - values: {"b":2,"ex":"3x + 1","s":"\\frac{1}{4}"}
        answers: ["sha256:6199a176703111f067bf41b058da74a67163095f8570dc6243c9593434d05258","sha256:c1e1edf71abbf9a45cbba845245f0d7b6a961763255883e7fca5b62e5f797e04","sha256:1a3268185c067ffd5a7ada8b4f1437b51679d9f84a40411f3c71161b08dc2cf9"]
      - values: {"b":10,"ex":"x + 2","s":"0{,}01"}
        answers: ["sha256:e04dcc9e293224a6f4d7d1a7299fe23e87cbedfac4964a440fcecd46c97690c5","sha256:78b1e494bcb078420c0aa883244c96af352545ba139c411741b12ef89b28e427","sha256:617bd73c52acf81547901952ed731229e5c87782a1b27abd5ef5c0891289678c"]
      - values: {"b":9,"ex":"x","s":"27"}
        answers: ["sha256:88af6974127d891e8a8b77caaaeda89b7c4067de584d8623cc436cc92dc2d49c","sha256:9195f3bc51b1878fc364e6b0913abefcc63ecd770f00bb277aa9a71e84011f66","sha256:335d953454409bcb63564d23c4337f1b046e87bc58cd86a29c44f4e99386fbb0"]
  - id: exponencial-con-logaritmos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Resuelve ${{b}}^x = {{N}}$ tomando logaritmos. Respuesta con al menos cuatro cifras significativas.
    variants:
      - values: {"b":"2","N":"10"}
        answers: ["sha256:937f0d8eb0cbcc3710f3702962e9f83172bd7e12e8dc389032fd29cae43bb016","sha256:d3eb6bf312ce6de63e92896a59b1ba15221dc24289a74048dca0fc0d5a1abfbd","sha256:440f82c9a118f4c936de38cf279193a5de422f1c5d7a1ff416dd38248461c739"]
      - values: {"b":"5","N":"40"}
        answers: ["sha256:3ca4f5c7fda8d7d85793eecbe293119712adbc29271ea3442423498ba48ac8be","sha256:5b8dcbdf1c095baefbe883a9c6787768c422a8b9128f9d16a70f87b8b3c86164","sha256:aa58ec6224284d130c72f6dd94dfa22197ba325bb80629f78b396bd10554bb7d"]
      - values: {"b":"1{,}05","N":"2"}
        answers: ["sha256:eb57f0e4e2a8bf851076b2414dcee37d74eddbe6fe2bc5c139268316addc5a46","sha256:97ffe02f4a2e3be3bb89a696359eb0de4b7946f65311641f0f285f325f23f3a6","sha256:b9a57d18ca82ade05c3eaec0b04f74b9cd2ff4ac396cb07b34e7612df2a8d7c7"]
      - values: {"b":"3","N":"0{,}5"}
        answers: ["sha256:6fa24c9febe8e481ad278ec2f1306ce6a8c350119d145628b1ea66eb7c5d71c1","sha256:a173e304315f4577f05d9793dc6ccccf8ffc7a7ba7d5c12b97fd5a4818234960","sha256:92663eb06b0dc7827ecc134670fd4eeca94e41c228b796ece12e350f71e45408"]
      - values: {"b":"10","N":"7"}
        answers: ["sha256:77ad980c611cfefe16bc6deba82833a5eedb06da734722955749750a5ca756b1","sha256:6fcca0eee13bd0bbbc36eadd1a9d1d8b901e0c7bfc20fe3e71bdbfaf24db24b1","sha256:9b9589ff30aa5d8131dd5cc6d12d3e408c32b1f098e2db72b0e366e230a9ef54"]
      - values: {"b":"4","N":"50"}
        answers: ["sha256:2d5680afb3f4fcc548cbd4842a76bbf083cee39e71b57a7c43f823c9e232551c","sha256:c97906c19c89b6d735c7827858ffdd29bd31135cfc22468b5307f2f72ec0bdbd","sha256:f26f0beb412f747903d8886f897c31e83f7ee70e307b187cf2d00e55f222ed95"]
  - id: exponencial-cambio-de-variable
    tier: 3
    prompt: |
      Resuelve ${{B}}^x - {{s}} \cdot {{b}}^x + {{p}} = 0$ con el cambio $t = {{b}}^x$. Soluciones de menor a mayor separadas por `;`.
    variants:
      - values: {"B":4,"b":2,"s":"18","p":32}
        answers: ["sha256:2192dfe7c072e51bc665f3cf7966dd5260acafe140c94ddbd3e647a592956039"]
      - values: {"B":9,"b":3,"s":"10","p":9}
        answers: ["sha256:4678a16a156b8b96e70f49eb04791bcbb641f47e8000b01a5abd834c58bf319f"]
      - values: {"B":4,"b":2,"s":"4{,}5","p":2}
        answers: ["sha256:08165339490e6089b8c9706d04c057083734242352c1c09d94b9091a87e3c9a1"]
      - values: {"B":25,"b":5,"s":"30","p":125}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
      - values: {"B":9,"b":3,"s":"30","p":81}
        answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
      - values: {"B":100,"b":10,"s":"101","p":100}
        answers: ["sha256:4678a16a156b8b96e70f49eb04791bcbb641f47e8000b01a5abd834c58bf319f"]
  - id: logaritmica-con-dominio
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Resuelve $\log x + \log({{xa}}) = \log {{N}}$ (logaritmos decimales). Descarta las soluciones que no estén en el dominio y da la válida.
    variants:
      - values: {"xa":"x + 2","N":15}
        answers: ["sha256:160f4fde6f9b4730d72a72cef66caea6395ecf101d8bbe4411ad2dea82ec5914","sha256:fc5c63819d290e2b03173be481f42877b5a10f2a3ed7d9c8095622408331a418","sha256:1aef5ec7ea2a30d066c79ef0df9b018917533fc41ee95a246ea3e4e8bdb0d1e4"]
      - values: {"xa":"x + 5","N":14}
        answers: ["sha256:c345f1eea75870683b75e1cc581273b268c423eb577d90784be99f50fa038d2f","sha256:49332aeb72cf2bbcb322d6bdc9cb6ee6f967bd2eee93c5c8f579aa6fb6b0b052","sha256:50fe28f16e81179728b10cc32149f8f4aa76f893bc0f2c22e534267af03b40c7"]
      - values: {"xa":"x - 2","N":8}
        answers: ["sha256:f651ea4446b93f8018abaef7d2e4f159ac11f94c8f32e93d59b1c782f4995eaf","sha256:2bd0d11eed61efaae930c5de4cd3607ede1236b609d1df8432923cf21293b00b","sha256:68ae33379a80d6c6481bd18fc4f3af594980314b05e786eda21ab276f18623d0"]
      - values: {"xa":"x + 3","N":40}
        answers: ["sha256:2683428707bcfdffcbf27deaa34387035ee1b1f3acda125761d89eb8ea15ec08","sha256:15d47f3664b2c9363f34d5a62a06b41d722ad39e18b4eeb2ea7eca8147a69db4","sha256:268e0ad8f5722fd33765f4957347b54538f0f14eeec95b7836b13dfbcf3bf5a2"]
      - values: {"xa":"x + 1","N":12}
        answers: ["sha256:dc846f45a5184973b96816ca0910424354f0bdbc1c144dc7f3bc4185116f6f05","sha256:58efdabab31e6028f2804aad891fc1eff1d52657ecc31c20e93c3bb6514f7424","sha256:4989a98dbf123eb9481da2436166abcd6c4e5114314d15e768b902700cfa9413"]
      - values: {"xa":"x - 4","N":21}
        answers: ["sha256:d90373fcb90dbdb7085476324202cdd3201cfca6be43490aa115a4c32f0c28d7","sha256:bb4ce745702ebe6c279bde9c567e8eb62e1847944b83977d1d364b7d50125fd5","sha256:002834b7a66b2722325e3a83cf23c2942d333b44da3572d53e9772168c74fb36"]
  - id: logaritmo-igual-a-numero
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Resuelve $\log_{{{b}}} ({{arg}}) = {{k}}$.
    variants:
      - values: {"b":2,"arg":"x + 3","k":"5"}
        answers: ["sha256:4890ac1389b21ee13964f014b4ef2fbb5c87d1f681373e8ad07ed990010bcb79","sha256:5d1c73449f71c72224ccba53762a702da63f001cad7b0bc64f02bf346ad04e74","sha256:f96cbfe980264fcdc54396c2297d77b60d4333b612e8df648ad8a93664ec4f66"]
      - values: {"b":3,"arg":"2x - 1","k":"2"}
        answers: ["sha256:bb0f1dc8e495a07a96feff5548666508bbd8f729de641ac827cb15ba179c48eb","sha256:3abdb34a765ba16f00d1d9a2f8f208c38c186d4176781b1215f6e98dd768daec","sha256:fd22f30faa6b7c241809eb8bdf509d4e199a6c8219fb2ed0124ae6ff6238030e"]
      - values: {"b":10,"arg":"x","k":"-1"}
        answers: ["sha256:227d84b5d3635a5c2aaf91004a742e5c14c352244efe6a4aeb2ff168f622e9c9","sha256:b3d909f6dd3cf07a00c57827198b4f75e2e774111b39f7261b15ee5313888510","sha256:4d94fa568cca4817d523c37f0b88aa77a5232fa4d70f843aea972032c506e431"]
      - values: {"b":5,"arg":"3x + 1","k":"2"}
        answers: ["sha256:eff57b8c628b8e5c6c584ccc06dd3341c1459f6483ec7d5c20b4781d2b549d9d","sha256:e944bdb17f802c7a6e63a1437a1e3dbd2cee0778f7be4c9443eeed4c17f4eb03","sha256:4911120b6bcfb94b379ce36d01a62b4f52658d72a3859d1a313ebb7e3d61b931"]
      - values: {"b":2,"arg":"4x","k":"-1"}
        answers: ["sha256:930781e212e8e15cd4c632cefd546d4a05ef552335b68593ee51db50b30b5cdf","sha256:f7cda4f05db17f8ae84be555d3a271b76dc0612deed5d55331cc487fc59ed25a","sha256:9e8a87c85c4fb8b80978d5a78d9f54a3621882f97b67bdc4c81d4a7c52fea22a"]
      - values: {"b":4,"arg":"x - 6","k":"1{,}5"}
        answers: ["sha256:701749b4c6ee004d5892dd0c939ab386529d2da41059b3a21bdaac0b600a8962","sha256:a13806d11b16ceba15262bdff4dcabc49a85f19c35502f098c6407eaed8da8c6","sha256:29182dbbf756d3b30de3c08ff96343901dd42ca7f08f6cf2de825a60c260db23"]
  - id: anos-para-crecer
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Una población de ${{P0}}$ individuos crece un ${{r}}\,\%$ cada año. ¿Cuántos años completos tienen que pasar para que **supere** los
      ${{M}}$ individuos?
    variants:
      - values: {"P0":1000,"r":"5","M":2000}
        answers: ["sha256:1351ca1bba9a095762a4deaf34560b6652ea5bd8dcfdd9885ef6bf9ec2cd8a86","sha256:af65ca7e1faca3405eccb9aa82f3f7b84ef27e811b56ec42732afea4b41d56b1","sha256:198574ba8761d63baef23c2274e3488d0fafa5da90f11585c1c77057bd8b762e"]
      - values: {"P0":25000,"r":"2","M":30000}
        answers: ["sha256:3da788b5c057ed03207d0e522e06a684ee33c05a7fdd413b9df686e2b0919234","sha256:d7a2492c037101101b29914e780fefb5dcff03f96be0c171810df3c369a06de9","sha256:f2ac91a24aeb57ce62692a3ba6a1e6ca8aa1ec640c507780f5915ed85c7a7845"]
      - values: {"P0":500,"r":"12","M":3000}
        answers: ["sha256:fed9ded312692bcfd4dc954a76ad06caabaed7a15b06cbe9853015d20157fce2","sha256:0fb66f96a47fef29dc0c61a9c1c1184b04f55c18879aef3bfcc6827fe62fcac5","sha256:747781c90088552bf19c2dc9b14b3a3660da2bce331d04ff24bc722eba2e1d92"]
      - values: {"P0":8,"r":"30","M":100}
        answers: ["sha256:0b73e17d57b583499c9daff7000ca52b8fe37fa686e67c3640c5fce8cd22665c","sha256:6f280647a28068b8dcc1848b56f16b5170f6cd033cca2a29f02ccf381f955b8f","sha256:81b79229a60ca6466de2395b85a64765b6dc36e3d9649a5d31d4f346b1330d01"]
      - values: {"P0":120000,"r":"1{,}5","M":150000}
        answers: ["sha256:adcf02026ef7471531bc1cc61adf044afb8daee7feb740e0d99d2b5d445d710c","sha256:0f1daff5db13990766a8c7dd143a9b369a35ac3270b183e0b4307f41a7942092","sha256:c6a9d354de0b9fb78e68761c26d3f2a90f429154bda5792a4f5638edde3c711c"]
      - values: {"P0":3000,"r":"8","M":10000}
        answers: ["sha256:51c0965a58e2304382bbc3e619dab41b3b1f8f973a742e8576799a646a692b1a","sha256:cf22ca30ce7f79df0e7556c6cd224c5d7a94b99c116381f8ba2633cd3093d87a","sha256:68097082ac67b9ecfaed55e3ab4d0b4c2d48cf23e630a2dacca4d8334419e5e7"]
  - id: semivida
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un isótopo tiene una semivida de ${{T}}$ años (cada ${{T}}$ años queda la mitad). ¿Cuántos años pasan hasta que quede el ${{pc}}\,\%$
      de la cantidad inicial? Respuesta con al menos cuatro cifras significativas.
    variants:
      - values: {"T":"8","pc":"10"}
        answers: ["sha256:102ac5c268c322ab6974ac9cae6d349719a1a25d2ea9773e658b21e289ff8859","sha256:3bc630cfaa2b3532e5049dc4ecacf506ba53a6e582ee6ad6dc6559ca2c2da75a","sha256:0f476430fae051dca6dc9cb6e0d7db23da132ee6d47f4ba685ce6f2970a7bebd"]
      - values: {"T":"30","pc":"25"}
        answers: ["sha256:f6749d1f94095c652ce1d0803e753ae1b3b3414a989ffda12f305feb3fa6a6ab","sha256:da44c7c7ac7ac9970a5ccabdfae5c804348fd1f0ec9e99c37e5486eff80be60b","sha256:aa2d96d43d119fa9c75a30b9d964188348c9ad37ed4756e3e41bfa4fe2ea8bfe"]
      - values: {"T":"1600","pc":"60"}
        answers: ["sha256:3b5a1f39da162ea208047932caeb7c8f95ceef6d54ae6b2be85020c551fe3345","sha256:19220ba181070b52aa382651a33d9827afe1015d97fa6ecb4272533ca4fca052","sha256:f7b2053851a229c9405c93f98180f7223573db762f286b0cb1185fc4ef2f013a"]
      - values: {"T":"5{,}27","pc":"5"}
        answers: ["sha256:0600c4faae72a57d63f9683504d98ed2a2e4542c119f09ad118120ec906da507","sha256:e403a2ab6d006eeab4271ee1b9c7b225fb6fa322ff8bbec06db1c44520938669","sha256:dd5286fb08284a3b463586e259703800dd835b02a10bf96f5abd3efa068b46e7"]
      - values: {"T":"12{,}3","pc":"30"}
        answers: ["sha256:1dc9b6e3f9190749621cccf8ae082f841eed218b53a08bcc485e1ac069af9b11","sha256:9e954eafcba6ba17c2fba1894f441b534caafa0ba574b0f4b0f216036248dbb7","sha256:7d63bf9c8ec2bd1602808d775aa9de2cfbfad3289757174767e69723be43be80"]
      - values: {"T":"24000","pc":"90"}
        answers: ["sha256:0d21042a24e975a483456b2268b4d7b8d04061a03636b56429dd4421a8066e04","sha256:2251cb1e4fbb1dd62b37d2e089c7b9d7cd013f5d03e9e2bb871a117612855598","sha256:938ddeeba548959264d80c0af2df3fd074cfe8816ed9408625c3342b5adf79a6"]
  - id: calcular-ph
    tier: 2
    type: numero
    sig: 4
    prompt: |
      El pH de una disolución es $\text{pH} = -\log [\text{H}^+]$, con la concentración en mol/L. Calcula el pH si $[\text{H}^+] = {{c}}$ mol/L.
    variants:
      - values: {"c":"3{,}2 \\cdot 10^{-4}"}
        answers: ["sha256:98b909a6cd989f4b69d8610032245bcf9d5480757a421d12762a1612deaa5bfd","sha256:b60c7714f3c11575691d294e867743845cd0ad8deb932f2b6fde5f5e37bc7ee8","sha256:3fa20bc22d315e4bd5b94cbb2c5ea86efd36e800d12e7e0ef7ef97faee01e021"]
      - values: {"c":"10^{-11}"}
        answers: ["sha256:d81cfab8082dd0679796f9eeb7ecea852de2ce119878bc01420e36ea5ad4df28","sha256:ec802c026fb40804dce9cf5f14b4aa853b60ecdaa7af9d4f7fc0186cd6b9d898","sha256:cfb72899b42d99084d1ca617d7d04b3f7bbcc3b4ef13d9ae0dbc5ac0cb86b09b"]
      - values: {"c":"5 \\cdot 10^{-9}"}
        answers: ["sha256:41fd79bc900a3ebd01bf64100f18efec38dc56bc488f64b1612b8f966265e1c5","sha256:f663160ec5233561f6d06205fa1357f69340a92734838161b03b8721fbe269f2","sha256:cd6dfb6c6b59bcb53c877173dd9435bbbf43698ec2d2334390c9f7e8d30e93cc"]
      - values: {"c":"2{,}5 \\cdot 10^{-3}"}
        answers: ["sha256:802a7c599d04bbc3e46d32b7c2286332af80d4432da5af9ef0e73f4452e9639b","sha256:ddac2faf70b92bcb78ec8d973093a9265e5c3a3012bf9c8217a9dd64bbc05636","sha256:1d2cba0df3158b396352cb002d98488cdac7654ebb7d54ff176840cb4771d4a0"]
      - values: {"c":"7{,}9 \\cdot 10^{-6}"}
        answers: ["sha256:4f9f66fa0e01f17bf9129e9fa781ad985b84126bfff151bc24fb97523123672d","sha256:792dc4c518988ab10775e09425317958d5a80f70313af6b5b383b304202d146f","sha256:76707d10675473ac116be2726fd6d634d4cb44d0957a669bd0d4dea1aa381cbd"]
      - values: {"c":"1{,}6 \\cdot 10^{-12}"}
        answers: ["sha256:11939113889196e355e6341df4ece009b31891316000f82efcbac328d54c85c3","sha256:6773b80ac0fb1cd06c22a6a83141d1b145ccf9f4e71155c69ad0f0ccad890119","sha256:ffcd4bfc2ff3d02b134bebe6a52f07952266a18eb4326028c23d760300bfcb43"]
  - id: logaritmo-de-un-producto
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra a partir de la definición de logaritmo que $\log_b (xy) = \log_b x + \log_b y$ y que $\log_b x^n = n \log_b x$. Explica
      después por qué no existen $\log_b 0$ ni el logaritmo de un número negativo (con $b > 0$, $b \neq 1$), y por qué la base no puede ser $1$.
    sealed: "gz64:H4sIAAAAAAACCn2Tv27bMBDGX+WDwCFxBCPu6MJdmmzZMlZ1QUkXlQB1J5OiIMHwA2XI1C2rXqyg5FhuC3SSRN6f39336Zh4saE1wsk2eSbNUAE7ZJmV6keOXmGA6q5OBvUZjTiU9GLYFGb8xVD5PibNwfk+hg9qjUduhQvyUP2AHWLQfJnvjwF36E4qxfBPtZJgpdLOtLVkrM6Nb/rhFjtMedeAuLtCW+OBLGrja0EtpUD1e8YON/k+3E5v+f7IIfa1gSqButSZbjmOwcvwa9w8aY/GSWOo1CX5mc5nfEH08MKwer6K0dISF0Z7WBrfSu2hLRx146tf32a8jBQXRh5kQX0jTNxSDD0Ewk89TE+y1GkHlSs02mlI3hKTg4psXyWuHl9wr1IUQdtDMOQu/SdZpg6rVSPetKbTq9UWHLjQ6LQlqHsFNgicMY/vNTkBU6Vb00kK7ce3CYJl4lkg42E5voK8+FhIHPk1ng2sRq494SWQ01AblUJtJm9szgO0kypBbWNVT2ikdOPbMhgbrsZ3zljaCHOGGj6E2sRCnbZz0jJzIV7PviQ/1aXeVBS3k2VMB2zUOkkTF3JnimT77ZgUzrTkjCTb5MnqWkemyeoKOgq8WNCnCH5e5pV977pTjC+ECxuGKPziEpRk41cZilZi3yZwKz7Zfjqlf3R+oDqQb53+O336Psv4vwKPfWNNoSNGtJE3FUtMn5WP6ziE8fVDwCvLlhftS7pI7uPfOKPnlmp9BpkUVfMGF5Dvp993l/n8OwQAAA=="
  - id: r-definicion-log
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa $\log_b x = y$?
    options:
      - |
        $x^b = y$
      - |
        $y^x = b$
      - |
        $b^y = x$
      - |
        $b \cdot y = x$
    answers: ["sha256:5f76e0296bdda5346fc0ffa3ae2b7508b2f4358257caac4af2b1839e456b8ffa"]
  - id: r-log-uno
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\log_7 1$?
    answers: ["sha256:ab07d5764bab0f3239f185706572aaeb89148f971195885f33469689a7cf9412","sha256:80a89065cf61fb0f2f4bca25dc5cd508de065aff28b61592a0dc36dc76347d9a","sha256:19c81863317e2dfe2419e13127e3780a9ca881c1f7362d24ea4df1922ed5acf8"]
  - id: r-log-suma-error
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se simplifica $\log(3 + 4)$ con las propiedades de los logaritmos (sin calcularlo)?
    options:
      - |
        $\log 3 + \log 4$
      - |
        $\log 3 \cdot \log 4$
      - |
        $\log 12$
      - |
        No se puede simplificar con las propiedades
    answers: ["sha256:cfc28ecad78540eb48f018daffa6ab84d405f5083b1d001e9968ec193c6aab33"]
  - id: r-exponencial-positiva
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuántas soluciones reales tiene $3^x = -9$?
    options:
      - |
        Ninguna
      - |
        Una
      - |
        Dos
      - |
        Infinitas
    answers: ["sha256:b021c0c70bb2a56de92716148f995aa495dc46b058ec95375f03aa4161e28312"]
  - id: r-comprobar-logaritmica
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué hay que comprobar las soluciones de una ecuación logarítmica?
    options:
      - |
        Porque los logaritmos son aproximados
      - |
        Porque pueden salir valores que hacen negativo o cero el argumento de algún logaritmo
      - |
        Por costumbre
      - |
        Porque la calculadora redondea
    answers: ["sha256:8a2882e2a2b1ded0ddb554e77a9590806548ffc47cc8203c4a75e1c1ab31dbcc"]
  - id: r-potencia-log
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Sabiendo que $\log_2 x = 3$, ¿cuánto vale $\log_2 x^2$?
    answers: ["sha256:acb75bad8f3dd11ce937f493513ee9824639caacee069e2a5bb4634fd1301e43","sha256:0bb83df2d7bd50a58d7177772b14a55191497b0a1233aeb16a0fc39c6d500c8a","sha256:e5f1a2bc4605a2f51e5ffe7bceb8a9204420f2f3c21fac6015cf4e40b535b857"]
  - id: r-escala-ph
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si el pH de una disolución baja de $6$ a $3$, ¿por cuánto se multiplica su concentración de $\text{H}^+$?
    answers: ["sha256:88fc76cb816df35bf5d279a0c2606f27c4a95b011a34619450e6f1acf856786d","sha256:d576b14b1882c1277ef4129803774c78d1738025f8d0beee0480a220a8b54e48","sha256:801fedad1d99c194591375dbaa317cfc5e1758a6c5194a21875d53dca6884ede"]
---

# Exponenciales y logaritmos: definición, propiedades, cambio de base, ecuaciones exponenciales y logarítmicas, crecimiento y escalas

Si un capital crece un $5\,\%$ al año, ¿cuántos años tarda en duplicarse? Hay que resolver $1{,}05^x = 2$, con la incógnita **en el
exponente**. Ninguna de las operaciones conocidas la despeja: hace falta una nueva, el **logaritmo**, que responde a «¿a qué exponente
hay que elevar $1{,}05$ para obtener $2$?». Los logaritmos aparecen en todo lo que crece o decrece en proporción a lo que ya hay
(poblaciones, intereses, desintegración radiactiva, enfriamiento) y en las escalas que miden cosas de tamaños muy distintos (pH,
decibelios, terremotos). Este nodo los define, demuestra sus propiedades y enseña a resolver ecuaciones con exponentes.

## Objetivos

Al terminar sabrás:

1. Calcular logaritmos sencillos por la definición y cualquiera con la calculadora (cambio de base).
2. Usar y justificar las propiedades de los logaritmos.
3. Resolver ecuaciones exponenciales (misma base, tomando logaritmos, cambio de variable).
4. Resolver ecuaciones logarítmicas comprobando el dominio.
5. Resolver problemas de crecimiento y decrecimiento exponencial y entender las escalas logarítmicas.

## Qué debes dominar antes

[[mat-potencias-raices]] (propiedades de las potencias, exponentes negativos y fraccionarios), [[mat-ecuaciones-segundo-grado]] (para
el cambio de variable) y [[mat-porcentajes-finanzas]] (interés compuesto).

> [!question] Test de entrada
> 1. ¿Cuánto es $2^{-3}$?
> 2. Escribe $\sqrt[3]{5^2}$ como potencia.
> 3. ¿Por cuánto se multiplica un capital al $4\,\%$ en un año?
>
> Respuestas: $\frac18$; $5^{2/3}$; por $1{,}04$.

## 1. Para qué sirve

- **Finanzas**: tiempo necesario para que una inversión o una deuda alcance cierta cantidad ([[mat-porcentajes-finanzas]]).
- **Biología y medicina**: crecimiento de bacterias, eliminación de un fármaco del cuerpo.
- **Física y química**: desintegración radiactiva y datación, enfriamiento, el pH, el nivel sonoro en decibelios
  (el tema `fis-ondas-sonido`).
- **Informática**: el número de pasos de una búsqueda binaria es un logaritmo en base $2$ (el tema `prog-algoritmos-complejidad`).

## 2. El crecimiento exponencial

> [!practico]
> Un papel doblado por la mitad tiene $2$ capas; doblado otra vez, $4$; luego $8$, $16$… Al doblarlo $10$ veces tiene $1\,024$ capas.
> Cuando algo se multiplica siempre por el mismo número en cada paso, crece «exponencialmente»: al principio despacio y después
> de forma explosiva. Si el número es menor que $1$ (por ejemplo, se queda la mitad cada vez), decrece cada vez más despacio, sin
> llegar nunca a $0$.

Una cantidad que en cada unidad de tiempo se multiplica por un factor $a > 0$ vale, al cabo de $t$ unidades, $C(t) = C_0 \cdot a^t$. Si $a > 1$
**crece** (con un $r\,\%$ anual, $a = 1 + \frac{r}{100}$); si $0 < a < 1$ **decrece** (con una semivida $T$, $a^T = \frac12$). Las potencias $a^t$ son
**siempre positivas**.

Un caso especial es la base $e = 2{,}71828\ldots$, el **número $e$**: es lo que vale $\left(1 + \frac1n\right)^n$ cuando $n$ se hace enorme (un $100\,\%$
anual capitalizado infinitas veces). Aparece de forma natural en todo crecimiento continuo y se estudia en
[[mat-sucesiones-progresiones]] y en el cálculo.

## 3. Qué es un logaritmo

> [!practico]
> Preguntar «¿cuánto es $2^5$?» da $32$. El logaritmo hace la pregunta al revés: «¿a qué número tengo que elevar $2$ para que salga $32$?».
> La respuesta, $5$, es el logaritmo en base $2$ de $32$. Un logaritmo es siempre **un exponente**.

Para $b > 0$, $b \neq 1$ y $x > 0$:
$$
\log_b x = y \iff b^y = x .
$$
*Ejemplos:* $\log_2 8 = 3$ porque $2^3 = 8$; $\log_{10} 1\,000 = 3$; $\log_3 \frac19 = -2$ porque $3^{-2} = \frac19$; $\log_4 2 = \frac12$ porque $4^{1/2} = 2$.

**Notación:** $\log x$ es el logaritmo **decimal** (base $10$) y $\ln x$ el **neperiano** (base $e$), las dos teclas de la calculadora.

**Consecuencias inmediatas:** $\log_b 1 = 0$, $\log_b b = 1$, $\log_b b^k = k$ y $b^{\log_b x} = x$. No existen $\log_b 0$ ni logaritmos de negativos,
porque $b^y$ siempre es positivo.

## 4. Propiedades

> [!practico]
> Al multiplicar potencias de la misma base, los exponentes se suman: $10^2 \cdot 10^3 = 10^5$. Como los logaritmos **son** exponentes,
> el logaritmo de un producto es la suma de los logaritmos. Esa es toda la magia: los logaritmos convierten multiplicaciones en
> sumas (por eso, antes de las calculadoras, se usaban tablas de logaritmos para multiplicar números grandes).

Para $x, y > 0$:
$$
\log_b(xy) = \log_b x + \log_b y, \qquad \log_b \frac xy = \log_b x - \log_b y, \qquad \log_b x^n = n \log_b x .
$$
*Ejemplos:* $\log 2 + \log 5 = \log 10 = 1$; $\log \frac{x^2 y}{z} = 2\log x + \log y - \log z$.

**¡Cuidado!** No hay propiedad para el logaritmo de una **suma**: $\log(x + y) \neq \log x + \log y$.

> [!formal] Con rigor: demostración y cambio de base
> Si $u = \log_b x$ y $v = \log_b y$, entonces $b^u = x$, $b^v = y$, y $xy = b^{u + v}$: por definición, $\log_b (xy) = u + v$. Igual, $x^n = b^{nu}$ da
> $\log_b x^n = nu$. **Cambio de base:** si $y = \log_b x$, entonces $b^y = x$; tomando logaritmos en otra base $c$, $y \log_c b = \log_c x$, es decir
> $$
> \log_b x = \frac{\log_c x}{\log_c b} ,
> $$
> que permite calcular cualquier logaritmo con las teclas $\log$ o $\ln$: $\log_2 10 = \frac{\log 10}{\log 2} = 3{,}3219\ldots$ $\blacksquare$

## 5. Ecuaciones exponenciales

Tienen la incógnita en un exponente. Tres técnicas:

1. **Misma base**: si se pueden escribir los dos miembros como potencias de la misma base, se igualan los exponentes (porque
   $b^u = b^v \Rightarrow u = v$). *Ejemplo:* $2^{x} = 32 = 2^5 \Rightarrow x = 5$.
2. **Tomando logaritmos**: $3^x = 20 \Rightarrow x \log 3 = \log 20 \Rightarrow x = \frac{\log 20}{\log 3} = 2{,}7268\ldots$
3. **Cambio de variable**: si aparecen $b^{2x}$ y $b^x$, se llama $t = b^x$ (con $b^{2x} = t^2$). *Ejemplo:* $4^x - 6 \cdot 2^x + 8 = 0$; con $t = 2^x$,
   $t^2 - 6t + 8 = 0$, $t = 2$ o $t = 4$, luego $x = 1$ o $x = 2$. Las soluciones $t \le 0$ se descartan ($2^x$ nunca lo es).

## 6. Ecuaciones logarítmicas

Se usan las propiedades para dejar un solo logaritmo en cada miembro, $\log_b A = \log_b B$, y se pasa a $A = B$ (o $\log_b A = k$ pasa a
$A = b^k$). Como la ecuación inicial solo tiene sentido si **todos los argumentos son positivos**, hay que **comprobar** cada solución.

*Ejemplo:* $\log x + \log(x - 3) = 1$. Entonces $\log[x(x - 3)] = \log 10$, $x^2 - 3x - 10 = 0$, $x = 5$ o $x = -2$. Con $x = -2$ no existe $\log x$:
se descarta. Solución: $x = 5$ (comprobación: $\log 5 + \log 2 = \log 10 = 1$ ✓).

## 7. Problemas y escalas logarítmicas

- **Tiempo para alcanzar un valor**: $C_0 (1 + \frac r{100})^t = M \Rightarrow t = \frac{\log(M / C_0)}{\log(1 + \frac r{100})}$. Si $t$ cuenta años completos, se redondea
  hacia arriba.
- **Semivida**: si queda la mitad cada $T$ años, queda una fracción $f$ al cabo de $t = T \cdot \frac{\log f}{\log \frac12}$ años. El carbono 14 tiene una
  semivida de unos $5\,730$ años y sirve para datar restos orgánicos.
- **Escalas logarítmicas**: cuando las cantidades van de muy pequeñas a enormes, se mide su logaritmo. El **pH** es
  $-\log[\text{H}^+]$: el agua pura tiene pH $7$, y bajar una unidad de pH significa multiplicar por $10$ la acidez. Los decibelios y la
  magnitud de los terremotos funcionan igual.

## 8. Errores típicos

- Escribir $\log(x + y) = \log x + \log y$, o $\frac{\log x}{\log y} = \log \frac xy$.
- Olvidar que el argumento de un logaritmo tiene que ser positivo (y no comprobar las soluciones).
- En $b^x = N$, «despejar» $x = \frac Nb$.
- Confundir $\log x^2 = 2\log x$ (cierto para $x > 0$) con $(\log x)^2$.
- En el cambio de variable, no descartar las $t$ negativas o deshacer mal el cambio.

## 9. Resumen

- Crecimiento exponencial $C_0 a^t$; las potencias de base positiva son siempre positivas; el número $e$.
- $\log_b x = y \iff b^y = x$; $\log$ decimal, $\ln$ neperiano.
- Producto $\to$ suma, cociente $\to$ resta, potencia $\to$ producto; cambio de base $\log_b x = \frac{\log x}{\log b}$.
- Exponenciales: misma base, logaritmos o cambio de variable.
- Logarítmicas: juntar, quitar logaritmos y comprobar el dominio.
- Escalas logarítmicas: pH, decibelios, terremotos.

## Repaso: lo que debe quedarte dentro de un mes

1. La definición de logaritmo como exponente.
2. Las tres propiedades y su demostración a partir de las potencias.
3. La fórmula del cambio de base.
4. Las tres técnicas para ecuaciones exponenciales.
5. Por qué hay que comprobar las soluciones de una ecuación logarítmica.

## Siguiente

[[mat-numeros-reales]] y [[mat-algebra-secundaria]] repasan el bloque de álgebra; después empieza la geometría con
el tema `mat-rectas-angulos`.
