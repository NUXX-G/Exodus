---
id: mat-triangulos-pitagoras
title: "Triángulos: clasificación, suma de ángulos, desigualdad triangular, igualdad, rectas y puntos notables, áreas y teorema de Pitágoras"
area: matematicas
trunk_level: 2
prerequisites: [mat-rectas-angulos, mat-potencias-raices]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 8: «Figuras planas», secciones 4.1-4.4 (clasificación de triángulos, propiedades fundamentales, igualdad de triángulos, rectas y puntos notables). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2008%20FigurasPlanas.pdf"
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 9: «Longitudes y áreas», sección 1.3 (área del triángulo). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2009%20Longitudes.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 6: «Longitudes y áreas. Semejanza», sección 1 (teorema de Pitágoras). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_06_Longitudes.pdf"
  - "Euclides, «Elementos», libro I, proposiciones I.4, I.8 e I.26 (criterios de igualdad), I.20 (desigualdad triangular), I.32 (suma de ángulos) e I.47-I.48 (Pitágoras y su recíproco). Edición de D. E. Joyce: https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html"
hints:
  - "Concepto: los ángulos de un triángulo suman 180°; cada lado es menor que la suma de los otros dos; y en un triángulo rectángulo, el cuadrado de la hipotenusa es la suma de los cuadrados de los catetos. Pitágoras sirve para calcular cualquier longitud que se pueda meter en un triángulo rectángulo."
  - "Herramienta: busca (o crea, trazando una altura) un triángulo rectángulo; identifica la hipotenusa (frente al ángulo recto, el lado mayor); c² = a² + b² para la hipotenusa, a² = c² − b² para un cateto. Para clasificar sabiendo los lados, compara el cuadrado del mayor con la suma de los otros dos cuadrados."
  - "Documentación: Marea Verde 1.º ESO caps. 8 (sección 4) y 9 (sección 1.3); 2.º ESO cap. 6 (sección 1)."
exercises:
  - id: tercer-angulo
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Dos ángulos de un triángulo miden ${{a}}^\circ$ y ${{b}}^\circ$. ¿Cuánto mide el tercero?
    variants:
      - values: {"a":48,"b":75}
        answers: ["sha256:4bb74838f181b2152d49ac3f3dc551466d5a66c3dbc073abfdca82a203d33a65","sha256:94dd7a8c2fa971f9d5f9c0bf52de2cd54a9b364d64cdd010e16ce7326ac3c02d","sha256:b4a00fbc955220b9c87ef6b7af752813dfe2568bde90086e4030640056d7d7a9"]
      - values: {"a":90,"b":33}
        answers: ["sha256:2bdaeea19e0af28eab88f776890551d28a76a10ac5f1e43f7e4f11ac4775adbb","sha256:2cd25cb31ee279bd8b9fdc214b34665f286ec51530146d19e86239dc0621f140","sha256:72809dc760bdf2691dfaadd317c563167106169f436794c4e495bbb7501f0cc7"]
      - values: {"a":112,"b":29}
        answers: ["sha256:b798f1684b6c87f52982084722116f578cfa1e00f9408859f026b77421f08591","sha256:11703b41ac6241927f9e474ef0d2ee18c2cfbe486b98507efcdc960668c785bc","sha256:59c923314aa677902fd6557e80e234a20ea3232fd03d3279c3f145f8d5dc7a3d"]
      - values: {"a":61,"b":61}
        answers: ["sha256:8fef16c82c842b99283300e4d0a20f027791edd2d1fb429ca8314125730b3c72","sha256:c5b78ba57b31e8b0f540bc0e1436c1f38f551362ad60872743efedb18b66e57f","sha256:ad73b25a1e895c513a5b8657628436cc2c471b9b08ef8ae1b052879f859aefdc"]
      - values: {"a":17,"b":124}
        answers: ["sha256:4af469dfa25d02992e0dbdf565f8a0f3b4af409bc56f4768f1f20b4e21d54d6c","sha256:cdb4afed8c468e193034c345e899e2eb9146f7e1b9fdaf0e5212d239e5887249","sha256:08e200408d4d16b527dfbd9155c0c092f20f5db61a9f0eb7fb0b01252af33d03"]
      - values: {"a":38,"b":90}
        answers: ["sha256:441e90faa195c6681bc8883bad042f307dec2b5e0e54eefbde56a98fffa18d4c","sha256:02f78e7d3c72f784527fcc39037a61661f8a54a4bbf332d975bdf1cf44ecd03e","sha256:5d295b970c24316e260678bd255e9f8dfc386e2f690e281cb480db311654dc0a"]
  - id: angulo-exterior
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Dos ángulos interiores de un triángulo miden ${{a}}^\circ$ y ${{b}}^\circ$. ¿Cuánto mide el ángulo exterior en el tercer vértice?
    variants:
      - values: {"a":38,"b":77}
        answers: ["sha256:54ff1d410f9a5e44c936ba8b4d308c6067d602f3424de863921f316a063341c8","sha256:91ce22f1727c99b69f32fbc72af432d44c3d83e38cb37b9e57b9adb7dd0f614a","sha256:c9471854720cf53289c9692b7a7a3adbec5cce3c4d655ce6023e3b7604f9a775"]
      - values: {"a":90,"b":25}
        answers: ["sha256:53b1c857506a42b7eb95867e1d50069a67e35960e788c99f4212aecc814c07f4","sha256:4642dabfb82ca499d8810db1db06771f30ce4e0b1d63ec3f6b8f9cd4a81c791a","sha256:81811575a61a6eb8f97bd918a5f407e787633863db235fb8a899844e4fa19576"]
      - values: {"a":64,"b":64}
        answers: ["sha256:8a7615b736f2f26ec717f464495676c904398f5cc2e9ca6ead96e81f3c56e591","sha256:0215e4bb2b96c22b8cda8bcd20bd7b390ce5202e0130d5c8db263056d072e1f0","sha256:2581c8f298235c7bbfe2e1ce6cc7766a13ed89aa6e2b6127ff58dac79dc094b7"]
      - values: {"a":105,"b":41}
        answers: ["sha256:901d2a03d4f1893001a30e58a0940714c95a0e47214b6fa5f4ca5521c1964926","sha256:b6cbb37c175dc8076319804c5c3d89bf326de59bf3c0210f1f5cdc968ded4dd1","sha256:2bbe69acc242f49feb27715110ceecf39675e89241d3cac0276d872096efda97"]
      - values: {"a":52,"b":33}
        answers: ["sha256:c513f1f506474ed3237ec29be9d5662dd413f6671aecaf82f581042d079213d8","sha256:c74b15c2af96e45beb6db6cd728e70e4d0e5e6db28cae93a51572fc5dc0b3e8f","sha256:b4028636b611b6b19b5781dbb10d3c9d813d3c8ffe5c60793899b6c859e25e3d"]
      - values: {"a":18,"b":99}
        answers: ["sha256:184bd9bcc7d4024baa50d834b4ccc98c7776170ca38ae61115dc4e8f0eb70f6b","sha256:c515a696b67a596f1274db81f86a296964cf7c1d531067eb664d5d7a5e88fd67","sha256:b24305b7c0d8906a81cfd3fa9aa8fbf96ad85642ed111b037df9c7954edab25a"]
  - id: desigualdad-triangular
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Dos lados de un triángulo miden ${{a}}$ cm y ${{b}}$ cm. ¿Cuántas longitudes **enteras** (en cm) puede tener el tercer lado?
    variants:
      - values: {"a":7,"b":11}
        answers: ["sha256:f38401c47aa8a93d0197d60ff6a19b530df9484fab571dee467bbb25798bc196","sha256:017287d077a7bf6a8c06a0915f2fd85b20b96aba92d5f9147c89535bf1ad9f33","sha256:b494caeed1bfad535cf05a55b96162f2059eb35d24f22f8f5a3792c865bfe61f"]
      - values: {"a":9,"b":9}
        answers: ["sha256:2296a60355cd6f969d59d792db04fe1de04b30410c35de2c8e59dd2a38ea2d03","sha256:4f2e90d44665546e1ed2383ad122ac4c229d4fb7d663611947822a923d326aa5","sha256:a558b4f35492c6dd3221270564d1e12ad4119e6a3fa1f4fc0895fe7c14c11ee7"]
      - values: {"a":15,"b":4}
        answers: ["sha256:6135eab33d5f1c26d054531901e6b7c28f0da12ca804b64897ddd18a9d8e5276","sha256:f95cbb9c1c58176f7ea114873f4c1460196a56597ed25216b04412d1bade4bfd","sha256:83c281b23d3b54858feeacf722a2008e0c0773ed0fe16d144d6cc6ca0667b5cb"]
      - values: {"a":20,"b":13}
        answers: ["sha256:9f2a0a14be993952efed8669ff435164f25f7c59249b39900cdfb592543e2315","sha256:048193f2ecf7f79a4b802480b82ccd584e4b7e067c6151a383dcc724fb65a925","sha256:e5e5691cd126ef97c1f536de1a84a97fd4a231637ebd5ecd8fd671dc8f0aa288"]
      - values: {"a":2,"b":30}
        answers: ["sha256:fea195c82952d9ec4e59c9f290d48cd1ccd08be2943e089dcaf4a0f4f6f3b17e","sha256:a1ef5ffa93dd917ac025ff819a946150ad462c451c9032414c7fc0156d2fb72b","sha256:5d9c8cff8fc9fc103033b8dcf417f4effbf5e2eb957a710270d23f2ffd43c32f"]
      - values: {"a":10,"b":25}
        answers: ["sha256:212d2b0b7b0662a583bce4f6703338179284658ad1aff5494d7518afb73c39f8","sha256:50c765542f31e7fcb867a3fd7619575492ae138640792e96f67250375d166df0","sha256:1925f21a3f06c0675554cac6ac222acc05ec46a9ef920c6291e7fec13fedda92"]
  - id: angulos-con-expresiones
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Los ángulos de un triángulo miden $x$, $({{e2}})$ y $({{e3}})$ grados. ¿Cuánto mide el mayor?
    variants:
      - values: {"e2":"2x + 20","e3":"3x - 20"}
        answers: ["sha256:ea770b154a8f50994da3f73d259980ea4a9c887c9eb549fbc27a3f5d8f641438","sha256:292d25d6afceb4e2f4ca09eeb90cdcf35fdb78dfcca0ac821979cd545778c89d","sha256:f1639bcb9ccb6aa2c82642c362adca0aaed05f159f0d7a82edd9c8a71c1d47d5"]
      - values: {"e2":"x + 30","e3":"2x - 10"}
        answers: ["sha256:a5982b8f7d4741f35252ef9fb659929638f3a04e35245c054c95c15c369a28ec","sha256:74aad15e670cff3db14750ebf03763c3b49c49c052fe602affdac8ba80430e64","sha256:e8a445a270af67d172588edca3922f92321a6bdb4c7928c4ab43d4be5aae3d51"]
      - values: {"e2":"3x","e3":"4x - 20"}
        answers: ["sha256:aee164444aac98f2ae7d03469339b7e6c636f8ea34430fd7b1cd3b419874aaba","sha256:aa7f5168f5e1231669d9e7fd882d5fdac996b2ff4739988459b8bd2ae59996ce","sha256:3b3d9f083fe15dee1f11f41005b4f6cd69e0959fb86fcd2f33d4171679be7e6e"]
      - values: {"e2":"2x - 15","e3":"2x + 15"}
        answers: ["sha256:07f8f86eccd8ec57767c43e610f9746e30387e3b0a73f062499e968a6e094bf1","sha256:91653a26699015611a4fecb2b5c0ecdff9a399a3426f3c93dbe6b6f3c17b1f94","sha256:0bc7976565c6bd027fd6cff27a30d00b269bb0035dd39ad182a8182c911c3898"]
      - values: {"e2":"x + 12","e3":"x + 24"}
        answers: ["sha256:dc499ee4a7a22d8c9bea6e7487d25e7e621fd53a3fefde40692c5d71c52d3ff3","sha256:d10f8356dd358a76fb586d390d487119d643257c1967512c0b79e494bb31ba86","sha256:0db7f78dd474ac9e883ff615f1995344ad60b831383f5693b097161805a70910"]
      - values: {"e2":"5x - 10","e3":"2x + 30"}
        answers: ["sha256:580e2961b30a72d5ee412396197e89230eac424e73f4bf6dbe6271244cbe3c78","sha256:041b00f7e1284ef63086d2b0768fb84bbf5842d216f527f29ffdda01a1c44ad2","sha256:13a672524f48a1931b32310de0ad47f3ddd46f06e55eda4df49a9763be7cffce"]
  - id: hipotenusa
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Los catetos de un triángulo rectángulo miden ${{a}}$ cm y ${{b}}$ cm. ¿Cuánto mide la hipotenusa? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":"5","b":"12"}
        answers: ["sha256:8f2169b06f96b48d0231cbbaac2b75a820d2871f863b18465681a49307fefc0a","sha256:045bc91e38853205f8efe693db6166e353dc867964ad272782a8e10254b18360","sha256:518d727ef12eb1ed4afc83dcf01d62d283cb5a960e7b800b4953b9ca11a8ab81"]
      - values: {"a":"8","b":"15"}
        answers: ["sha256:73c7b5b39ee2da4d485f33ebd2322b7b35964649dda7af6439e408760e90d0d3","sha256:6224ffcc4b680cc8d378ba6b1f76aa6efba3d604e7e27fc36736ff2d0c4c88f7","sha256:f77434a7bf70192b30de61cbc447fea34d31c441d21167cf78e4dbbe9fe6215f"]
      - values: {"a":"7","b":"24"}
        answers: ["sha256:f5e043fd024435e7f33a60006f83eb0d4728558ad25bae0bea6627dec57491c0","sha256:313a1f851cb0ef3aeb8ad51d8af491a95949730dd57bbe1ed13b53a3dd60c86c","sha256:9446648b736a1677728640b0ec76b8ecbf8de5b4c398f74d42f7442d0c58047a"]
      - values: {"a":"2","b":"3"}
        answers: ["sha256:eba79f918a32d6db13a69d56fcd457cc66f00fc557eac5c7fd47032239374468","sha256:759d70a1289b98df7207d3f7234261336d0b4359a4950b6545edae166c2b1eac","sha256:3b744d142da7dfd7ecc6fade0933cbce6cb016467f1a600be3b502f39ebae2ac"]
      - values: {"a":"9","b":"40"}
        answers: ["sha256:2df7e7e7c00ef5e53ffec9543b96067c5d8885ff55906ebccc57d7c9f5563e1e","sha256:306f4c9c01d47e1fcf85e14018ca4ad0ba43f84fd382e84e02287a42a63e884d","sha256:80690ad47e48f46a96bcf2963082191deee51b42b7b66d86e498671f9f887a24"]
      - values: {"a":"1{,}2","b":"3{,}5"}
        answers: ["sha256:518fd3f680dd39625ecd46d208c460a05f0f5dddca177d5a5beb196a71d3c604","sha256:f8e95d32378deaa5245e9b6a7fce592217c10f0ed9db660b1afe5a888c88900b","sha256:3656936761f05d1c98749a525535793cfd6ef5db7aac32f698c87ca3c03f6350"]
  - id: cateto
    tier: 1
    type: numero
    sig: 4
    prompt: |
      La hipotenusa de un triángulo rectángulo mide ${{h}}$ cm y un cateto ${{a}}$ cm. ¿Cuánto mide el otro cateto? (Al menos cuatro cifras
      significativas.)
    variants:
      - values: {"h":17,"a":8}
        answers: ["sha256:616f00bd20274992d2339d64979303ce2ce40e322e61e732a64890351b64f70a","sha256:566a5f73bb7e5a20f805c1d787467b91e64d4cbdb7593d1613ad2f3829db7681","sha256:946d3bd173940d4da4b7955581b4203abbd84f0c5a2485b85e42b6881df2162a"]
      - values: {"h":25,"a":7}
        answers: ["sha256:cbc4da16171fea25babdf46d5ccf432fc3c74ab765d405b131e846b5a91d82e7","sha256:80eb30347c19aedc1dd070f31e56f4696e5d2fcc087e6e24b0e7289b2fcfca1d","sha256:a9158a36eee3a99cd3366b59c0d8169cc2824ed7fd08fd892ba04d472f2778df"]
      - values: {"h":41,"a":9}
        answers: ["sha256:4b42f9037581093df9422e7bd81276419f34b6a5b463411959452f320f78a33c","sha256:e82944ce9cd4345f37d3766531a2d8ef0b0154a2330473213893720b68ac7e59","sha256:ef8fbb7dc527c580ece5275cffe013dd289e06aa863edf027b4e73fbd177ae05"]
      - values: {"h":10,"a":7}
        answers: ["sha256:72270c70dd9c3319c60d178989324f44de7802734b505965575f1ed9b9f42f10","sha256:f1403ecd058c5344ada4776e3c4380dbd311336446a5ce40deae1040dc84763b","sha256:8e72720459afee48854df6930c2ea3f7965e25c5b33a12ab7e78629751734cc7"]
      - values: {"h":61,"a":11}
        answers: ["sha256:46682e788e457b11b681d6044d45a76dca7624670f4590c882026d365d1bfacc","sha256:b051e47647e4015633452b0689867ee74161a1c17da50db263a3df8236ca6b6f","sha256:273143e5aea5702c6cb9ee8da22a3979bf602aa60c4d8b63f652ebb38b955469"]
      - values: {"h":13,"a":12}
        answers: ["sha256:70c41c90ef201e4b5174e74aecab817a29570883f116e44486766675b57da6ac","sha256:e626201ade80bb4c86f97d9dd65bd38270981687a26dec20ee8c2d009adb6700","sha256:f95608778c887cbbf9f753d1476f56049e82b228950a2c6c0fcb715b4afebbdb"]
  - id: clasificar-por-angulos
    tier: 2
    prompt: |
      Un triángulo tiene lados de ${{a}}$, ${{b}}$ y ${{c}}$ cm. Sin dibujarlo, ¿es `acutangulo`, `rectangulo` u `obtusangulo`? (Compara el
      cuadrado del lado mayor con la suma de los cuadrados de los otros dos.)
    variants:
      - values: {"a":6,"b":8,"c":10}
        answers: ["sha256:e39d834d195da157182f80f79f2a0683af560e6c0a592303f8783ac689cd9275"]
      - values: {"a":5,"b":6,"c":7}
        answers: ["sha256:db96a4d20462d65af27b2c97b75589672573e56183425a43851591c531ae35cc"]
      - values: {"a":4,"b":6,"c":9}
        answers: ["sha256:e479af6b4a2739d8b6663f580cec7e24d5a8eec103a9fe8b9be06fef5f7d1cfb"]
      - values: {"a":7,"b":24,"c":25}
        answers: ["sha256:e39d834d195da157182f80f79f2a0683af560e6c0a592303f8783ac689cd9275"]
      - values: {"a":8,"b":8,"c":11}
        answers: ["sha256:db96a4d20462d65af27b2c97b75589672573e56183425a43851591c531ae35cc"]
      - values: {"a":10,"b":12,"c":15}
        answers: ["sha256:db96a4d20462d65af27b2c97b75589672573e56183425a43851591c531ae35cc"]
  - id: altura-equilatero
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto mide la altura de un triángulo equilátero de ${{L}}$ cm de lado? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L":"10"}
        answers: ["sha256:3a73d5ebdba42602b9519e56a8cefaa7aae644c2ac4589338b28ef9d548d9903","sha256:cb1cc010f7f08d8a22d78cf41fa66a2453843d679af376c29535801e825fe1ae","sha256:f542436bd861d0c4011ffc2693f62ceaa0f3e6a71bce97d341f67a39800f45f7"]
      - values: {"L":"4"}
        answers: ["sha256:d1b2716946bf8cff7bc1360a0f230e019d69c94201340da22e8e74cbb17ec8c2","sha256:fde279186f254ba0218825122085f2124bdee7671f38540597918da8baaf7ee3","sha256:e68292992102a98a203b54c750c216c1977f32aca4888b18f1be7c8d327b05b7"]
      - values: {"L":"7"}
        answers: ["sha256:91819c4599c86fe66214acbf052a42b3a76f38be6c4e22675e588db694815905","sha256:0a5f0cb66062a379966e0175231df2595fc46ba4c732c5eb1f2a92a5a1695a7f","sha256:9cb18d2b0a18df34cd4344741368e512813f7d63d574b8438baa150f21955d6f"]
      - values: {"L":"12"}
        answers: ["sha256:ca5c1c3c227b771e93c1eed8151716209400a819fcdf6a69ab16acc8bca73f1d","sha256:b2ca8d822ffec36e20aa16dfcb41d88e6c93988cf246dcc3b7d632bb6b1592fc","sha256:be5d65be5d036432d936af4720195d8cd6c7e397704a39d75f608198d7181dab"]
      - values: {"L":"2{,}5"}
        answers: ["sha256:dace3206e3c32ec06142fd8d6f801109020b106b7f9624bde758f8cdc04c2532","sha256:fa64725e08c34505ed6c6d53609391e7bc5f62d5419bb714a8956234a90146f7","sha256:7852a40c571ad10b74f98ff1e57881ed473ea4e179f7de6eef3734c0b1ec7d13"]
      - values: {"L":"20"}
        answers: ["sha256:902d8a55976da8cc11e7768b23614b63efd9192c7e6d63052a73a91b64c6dbc1","sha256:34171aa5ec43e1ac2d92cec144b52267ec6180d80aa1e23954669d4df1806f14","sha256:9b60ab5cc28a3b91ba580f4f753bcd7ffc4a7c963873a24a3858ba8d07ab0b9c"]
  - id: distancia-entre-puntos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué distancia hay entre los puntos $A{{A}}$ y $B{{B}}$ del plano? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":"(1, 2)","B":"(7, 10)"}
        answers: ["sha256:3466b3e26db6e948f653e7538ce9e2e8a05d88db70847547992810db8022e57b","sha256:1eaa4f5838ec74ed417addb9fe4c61cda2919ee55d3de420a28370196d48589e","sha256:6d950db7dbd3329d95077c74339d6b7aa23dc4a16bf91a32ec54ff9d5f67bf1b"]
      - values: {"A":"(-3, 5)","B":"(2, -7)"}
        answers: ["sha256:ef88c3a0c1850e918efd34c0dd2cadb85e8e4d4ae269776e4023f3e802d77a26","sha256:0ba3e6f958ba0f5562e14fd385098db6dcaeee2a6b8d0e573d17f7368ef4e6a7","sha256:deeb7cb79d010175b80ceffac5db6f155ef443bc94cf612390987cdbabff209d"]
      - values: {"A":"(0, -4)","B":"(6, 4)"}
        answers: ["sha256:97e13a88a868ee6ed3a906808a3343a0428d43f13c42a0716f2292e9ef1fabaa","sha256:78549a23138771bee67ce3973074e5ed0cb8586001a844724e7de4276b745ea5","sha256:0086ee8d5bedc5d94f16f4f2063f9a62109d797a9b3a88eb3349ecda8c394248"]
      - values: {"A":"(2, 2)","B":"(7, 14)"}
        answers: ["sha256:c906ff0b35d5d9c0344d66ffdd3e15d9e826ef307b2359b0a08052df658d2358","sha256:26da60c66f034671f97095800255c43f7c22aa42cca2f10e8d964d4ba626e538","sha256:01a277ae80ad8a4f7d48e9c27e4da55f74312d30f814dc8aedd1b8f74c31056a"]
      - values: {"A":"(-1, -1)","B":"(7, 14)"}
        answers: ["sha256:d2d370decc28d82ee71f77fffc87e7c3c18ada4e0f78864073a6f1b1c2babe30","sha256:065493f834d14b1300cc88513472e48687d1df1dc7b6c218e9a54e0375004cdd","sha256:319d6f97f634ed21df1fa11fa837b70de1021469f39eda2ba7f4db9dbbcc2ac9"]
      - values: {"A":"(4, -3)","B":"(-2, 1)"}
        answers: ["sha256:cb47060cadb6c9e019c750ad1c1867b93db96a8310bce37030bfd4ab70daa1ff","sha256:caf3b9129a7305472be93a3aa5cc55296dd96a36de59918ee73255f3f9bcd803","sha256:9f1296f960072f4b47b3855719f723f9317e221d0a6edbe29db49b62e0e17cae"]
  - id: escalera
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una escalera de ${{L}}$ m se apoya en una pared vertical con el pie a ${{a}}$ m de la pared. ¿A qué altura llega? (Al menos cuatro cifras
      significativas.)
    variants:
      - values: {"L":"6{,}5","a":"2{,}5"}
        answers: ["sha256:f690a7ea848ccfb950c1182d67c82e22bf37f441bb6e6ad1a7d47286534c3eb2","sha256:363428a5c7699d66700e0f035889bea6dcf7da33b2de7fea80a0d0161ecbb35d","sha256:9add300f0dac95a4c2c4242a4c07e979980b67abe4f37dbb0a6402da30151ff4"]
      - values: {"L":"10","a":"6"}
        answers: ["sha256:024e9510d43510c5135e3ef1e558d61bef563911da05823719e77c1138ce3e87","sha256:0ebd99a8bd0561907d9b2477dee9c6ac2a8eb56dce865de8b6839276b6945f1c","sha256:651c0d0ef95026949efee0864add24bc7125a3d127d94ea45f133d002f30d4a0"]
      - values: {"L":"4","a":"1{,}2"}
        answers: ["sha256:7ad8bd14345217ca9e227795ef8b746cfb3d5990fb8bcf684ea7e6e895b18318","sha256:55779933a0305d5d2c1857cb60920042baaf608c4cde220dbf041a3694059369","sha256:cbc99b3469021550d580eff6f4493ca1a07e84ee3918fddc07d44c37cfcf5d6e"]
      - values: {"L":"8","a":"2"}
        answers: ["sha256:7bf6a3832822292b47ab5ed9f22b3ba48653b80b0c79282e92413d0f2a775b2b","sha256:c060dda4880f96a9581c9b68743f79ca32bdd0be095f16b2c8507d9da05abc1d","sha256:0162d92582030045791f60c561c3b2e2cb534e1d32b03d484b0503bd871cd7de"]
      - values: {"L":"3{,}4","a":"1{,}6"}
        answers: ["sha256:d357c9d5ab0cd143d8251549ff0623d7fcf75cc3c4e0d5f54982652d4e616d1e","sha256:01aa17fd2aeecef53c2dd658e6114af22670c9a10354f9ab07f41a923e5bc7be","sha256:26927bea8ce1cbe6c4aa2d54d94a318e47379be389f620ad87cd70b840dc05c3"]
      - values: {"L":"12","a":"3{,}5"}
        answers: ["sha256:83622b1b7101a120b7c242ae170d9907c812a42128294efd7f2cbe9c1750493b","sha256:a861f628b6af65bcff33cc3928521017384e1aa7b5cf49c68d6490daa25a3c2a","sha256:8cf112b047de31e7c667d257378adf611bf90d931b3e82e8de2bd9abfc02ce4d"]
  - id: area-isosceles
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un triángulo isósceles tiene los dos lados iguales de ${{a}}$ cm y la base de ${{b}}$ cm. Calcula su área en cm². (Al menos cuatro
      cifras significativas.)
    variants:
      - values: {"a":13,"b":10}
        answers: ["sha256:669068ca8ca8067dacfbc154a1789d12041ba0a5a74d1647b2c98ac0a60b3a48","sha256:ae180fdb77fc57a4a3c6b0de0767db43f642f526dcb8d17d387a14ac86504277","sha256:477a22ddeed041719813760c692e4d0354096c1c82e7abca56f7b6623d22b694"]
      - values: {"a":5,"b":8}
        answers: ["sha256:0e8764d10b43702821bbafce2096299c81332944728043c4c2fb1bdbfec3bc04","sha256:02ac31a5c94b0b0813675228476e5387520825ae65bcabf631e7f52d6f2eb904","sha256:0afd7e62d16b88eddeaf4420eb06b9ded7903b64d04207cb8150c7b14ffa50d7"]
      - values: {"a":17,"b":16}
        answers: ["sha256:1fac1ff3b644d46f54d7ac2b2d351cc923d06878df932c4c739733743fad08d1","sha256:2c6f6e0a4876eb822156c06a5706828a32b8abd87d21eac58260a925e4762d53","sha256:1a5f5fb6b7e39d71cf3917b37a510aa33e49e1bf42bf881bfec6ecfad0861429"]
      - values: {"a":10,"b":12}
        answers: ["sha256:861f0c1dfd54f5b3468e222acc04720e21898338bd18c8fc1cbe7ba09b3e1fce","sha256:3ede1ecab4aff6d4c6b9777992d5584409de2cc593a4feea88f88b6f5b83f3c3","sha256:d44561838cc0cd033f2755a581c0829a4359d599a3b3662bb94cc13bdff2b1a5"]
      - values: {"a":7,"b":4}
        answers: ["sha256:7f713d3e1863843e6cdb62cba9f15108560173dbf38948b24bc818c154563c12","sha256:f6daad73208a5f9050ce7d0a8c39f606ba10dbd18fb54523b41e8683dd6e2caa","sha256:78e6eedd28850f321295df870477840f9f1c30e444a033579895f5203205ad18"]
      - values: {"a":25,"b":14}
        answers: ["sha256:701ba01b530d4100f238a4abcd69064e5ada17df754e165f71688d45b7ce37cb","sha256:ca963b070ceae2bdb6c44de42ab438b15b2bd7d4a867e46a80824e20dfd38ac6","sha256:82861ba48b00731131e46fdaef92c06213c1ca95d9cffd326dddb1a321b2bf74"]
  - id: formula-de-heron
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Calcula con la fórmula de Herón el área de un triángulo de lados ${{a}}$, ${{b}}$ y ${{c}}$ cm. (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":13,"b":14,"c":15}
        answers: ["sha256:90c64ed7c89752674a655da58af0952661157884cadfc4ffde32aac8f167841f","sha256:3a5e3d63c1479115f3c9e845aa9c8852a4af83ac4836ac95370559c1ac2d3ba4","sha256:d849cab296fe008448644c7793a61da6c7cdf48591e440e4a85b0a078863e663"]
      - values: {"a":7,"b":8,"c":9}
        answers: ["sha256:2dc35e9488b648dfdea029baf74bb01f4cdd4ef6c14e765628e3961bcd8f9724","sha256:c6b463c2529f8857e555d658895e632440b03a8bae822d3a6efa492948e93699","sha256:c0504442b15f00bab679198316f89ba561ca79073a8b3ef1a1fd4af0ba5266af"]
      - values: {"a":5,"b":5,"c":8}
        answers: ["sha256:e5e7454b831847c142ad4194c84c34f4513f872b839cbef38952a873af3a54f4","sha256:8207e6ce2bdb349cce8cb274312607c474e8e4ed1167e00ac4bd5601273917b9","sha256:4d0cc3a781a12c18b5673bb4d417c189441c3c169c42e17fc1301472bfdd46f0"]
      - values: {"a":6,"b":7,"c":12}
        answers: ["sha256:3263c46917771c706bb8b01fd207c13cd7d9cbf77d47ff9f112447147b83e681","sha256:3a93b986bb2b8b96e21812216c4b1bb4e022989c3c61659a02a1c34ae5867012","sha256:3af5543032a9f9d5d82d6e9bf985f665c6bb7c5f7a76c876affc3308da6fc6de"]
      - values: {"a":9,"b":10,"c":17}
        answers: ["sha256:b00749cd6b39cc0f398db9023f1ad59be9209e2a523fa3c93d4957b9e5c259fa","sha256:872acea808444ef4c63053fc9cb80757fbbc8848f0b2ce2af7e053ef4cefe3b3","sha256:120faac59b0521c2b998fdb1d48b77741ae39cdbf3e6c130483a4e362bc7d608"]
      - values: {"a":11,"b":13,"c":20}
        answers: ["sha256:1c667920b10efe43c2a74cb6b0f5e4c9a703a7033e9c05f759017d653f917c7e","sha256:270d23ee94b57a01785785f450a482dfe9cc37833454b9538419dae6545aa732","sha256:3743bc60515980f2e24de0aba8bca13f5ded4aabc977ca1eaffa61e5e6b6cdb1"]
  - id: baricentro
    tier: 2
    prompt: |
      ¿Cuáles son las coordenadas del baricentro del triángulo de vértices $A{{A}}$, $B{{B}}$ y $C{{C}}$? Respuesta: `x;y`.
    variants:
      - values: {"A":"(0, 0)","B":"(9, 0)","C":"(3, 6)"}
        answers: ["sha256:72cf353cd903f805b7dbcb12dd8a4f02e164ac55033c5d28bedbffc119ff8c24"]
      - values: {"A":"(-2, 4)","B":"(7, 7)","C":"(1, -2)"}
        answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
      - values: {"A":"(5, 5)","B":"(-1, 2)","C":"(2, -4)"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"A":"(1, 1)","B":"(7, 3)","C":"(-2, 8)"}
        answers: ["sha256:5c062f977e5d0e39b746d58304e9711596badda6c7fa054f415a197c006080d5"]
      - values: {"A":"(-6, 0)","B":"(0, 9)","C":"(3, -3)"}
        answers: ["sha256:08165339490e6089b8c9706d04c057083734242352c1c09d94b9091a87e3c9a1"]
      - values: {"A":"(2, -1)","B":"(2, 5)","C":"(8, 2)"}
        answers: ["sha256:72cf353cd903f805b7dbcb12dd8a4f02e164ac55033c5d28bedbffc119ff8c24"]
  - id: angulos-isosceles
    tier: 1
    type: numero
    sig: 10
    prompt: |
      En un triángulo isósceles, el ángulo desigual mide ${{t}}^\circ$. ¿Cuánto mide cada uno de los otros dos?
    variants:
      - values: {"t":40}
        answers: ["sha256:05bc47383813db6399e0ae3ae332caee76327f05a49f3dbeca83f3e48f8b002f","sha256:0857464828198ae851dddaf5d097dc7a437f5a47176138bd46bd892ef5ecc943","sha256:9f514365fcdeef27ed36a90aa8a3a45d5426041ba82bc613603bce4fb2cec01f"]
      - values: {"t":100}
        answers: ["sha256:22b994a81e8f8f6b173503e83471406a005f6db1d4b92e46c363b1b53d13bca8","sha256:139ddfceb2b6a8ac8262377a7bad13f7deccefb193027861ccf339f176e0564f","sha256:ea80203bd2e5a24cf105f7afa1d930195c68af06c65adaa5941a952a42836925"]
      - values: {"t":58}
        answers: ["sha256:7c22913619adff3e8a165283437d3c85b213529c8bab037f7c5953470dedc666","sha256:51558e552ba5acfc7645cb97a27a56f2ecefd428fbd79c79b4dbd5663fcce31a","sha256:a5ac089bd068deee444d18e81f8f45427926ba70152264fe78ab2904bffb1f75"]
      - values: {"t":130}
        answers: ["sha256:71732796f99798a9aa27260f8cf0fa519b5a5703d833a60c61650ccae623e8c9","sha256:06e54cb2f47689d287d8c72eb618b4b35369724405ae74c13c2ce2c10bb5ea83","sha256:d004cdf7b51d7bb029d127b8b15fd2152e1d4255910dce521eab6434415affc9"]
      - values: {"t":24}
        answers: ["sha256:258d19dc865d06093b70a292c24648cf0a86d6632cc7a66cd52fb893e9e1e1e0","sha256:1bcf720ae6e4135924fb1ed2267bcc41f8c08248880ee2fed064a4eff7c7d203","sha256:050abeb1ad7bd0f0609b27c66fa5d6261d8286746fcfd50654aa756bf7f356f3"]
      - values: {"t":77}
        answers: ["sha256:6028abb74f4dc06a3158bad5d7b74282836e06f2f9c36902d60d80cb0fac6783","sha256:3dd4840288183e3a620ef4e6e4e0b4016664629dec9139049414105d8b7046d4","sha256:5b618cb6711cd56893f27e65d3275632687ca19364d96ff883a50bbe7caf86f3"]
  - id: suma-angulos-y-pitagoras
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Demuestra que los ángulos de un triángulo suman $180^\circ$ trazando por un vértice la paralela al lado opuesto.
      (b) Demuestra el teorema de Pitágoras colocando cuatro copias de un triángulo rectángulo de catetos $a$, $b$ e hipotenusa $c$ dentro de un
      cuadrado de lado $a + b$. (c) ¿Por qué un triángulo de lados $5$, $6$ y $8$ no es rectángulo?
    sealed: "gz64:H4sIAAAAAAACCn1Uy2obQRD8lWKZgx6LiIUjHAUHbJFLyCEQcspG0Jod2RNmp+V5HITQx/gD8hX+sdCza1vCISeNZrqruqu691BFdjlZ9tWymkxGNJ5M8N0QjEMK9unR32XHUDe3K4U9VFBwhB0FcsYRCEoedhygbtQMXzliyIl4yAZbDh2VNM1eYASlP64UInuQSyZ4jrB+OLQGqsTJYaUwchQbH40mn0wsSQOQgIxrUHz6U9g62xoPx+hs7Lhc9UhqpWb4kn3iQm4cXjtTNaTaFEzsy/XIHs6RZxihUkuoG0xxiylWuMbF1bt102gbtJo1vvGTyWgjsn0uwDpTG6hlqd7JryJMsVGIBpoda/KFT2dKgU9EjqW0mCM0JZNYOt0EU4IFKNYC2XHbN9aa3+SlQOE0XrCyb/xbeq0wEtQXGhEwGC0MOw6CZTw0tQQTH7L1VCjbUyvpLrfFmbOpiFnEUh9e5BjPsGKfyLcM4xr/9BgMSSWSXLSNS6hREWS8nuMal2ga3XJC02wD6QNtjof5EVPo9VzVMMKpbaihaD3HFHPaSHLJ7c994L7MYCJxeAjtg+T52SVdhttim02gIsHQSS1DfW93nIzPkRBNePpTdqBI2NGeA/bFwdztnC2v6qoQvC9ki/VcfcTOBIZaSFPePGBxoUSQrr/7JP/r09njXTYxceNpIFJXSlrmTcqRZ1VdhbwJVlfLn4dKB5tMsFwtqx+RzrZwXwx7NevNRklkr394mW2B38lGxGo5P9ZnBN+crBr1tfYWngz2XSAvnva2duRNoCjyWNFmazXhnmKifxjxH84Vd6VMtbgcPhaLi+FjoV3emzL0spLx1DmMnvUaLsbnHL+OfwFk08eK4gQAAA=="
  - id: r-escaleno
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se llama un triángulo con los tres lados distintos?
    options:
      - |
        Equilátero
      - |
        Isósceles
      - |
        Escaleno
      - |
        Rectángulo
    answers: ["sha256:5a9a3edccbb479fe0ea00bc1af15ccf5be98354655d771f9e1e992220430ffae"]
  - id: r-dos-obtusos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Puede un triángulo tener dos ángulos obtusos?
    options:
      - |
        Sí, si es grande
      - |
        No: dos ángulos obtusos ya suman más de $180^\circ$
      - |
        Solo si es isósceles
      - |
        Solo si es escaleno
    answers: ["sha256:f075d381fe3f350b118bdcc711e95045bd93898fd51b0dc7917798ee47cd42b9"]
  - id: r-puntos-notables
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se llama el punto donde se cortan las mediatrices de un triángulo (el centro de la circunferencia que pasa por los tres vértices)?
    options:
      - |
        Circuncentro
      - |
        Incentro
      - |
        Baricentro
      - |
        Ortocentro
    answers: ["sha256:51995e2b5e03a1671418d013ca1d3f7a57840f42142a667999c5af9260845ae0"]
  - id: r-pitagoras-enunciado
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué dice el teorema de Pitágoras en un triángulo rectángulo de catetos $a$, $b$ e hipotenusa $c$?
    options:
      - |
        $a + b = c$
      - |
        $a^2 + b^2 + c^2 = 180$
      - |
        $c = a \cdot b$
      - |
        $a^2 + b^2 = c^2$, con $c$ la hipotenusa
    answers: ["sha256:8814ee7476d517c01a4f2ec3c5d2b82be53ca28684d86c8f2182841648961c38"]
  - id: r-criterio-igualdad
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas condiciones garantiza que dos triángulos son iguales?
    options:
      - |
        Tres ángulos iguales
      - |
        Dos lados iguales
      - |
        Dos lados y el ángulo comprendido entre ellos iguales
      - |
        Un lado y un ángulo iguales
    answers: ["sha256:6f018bb95492e4ad9bbd6121352d3d9769f34dd770da5721d18e05eef83ac54f"]
  - id: r-terna
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Los catetos de un triángulo rectángulo miden $10$ y $24$. ¿Cuánto mide la hipotenusa?
    answers: ["sha256:835bd2335263c6a8c9ee65fbe5a002fafba998027abdff7f1d2dd0e643a4f88d","sha256:42e23a05ddc320cbd9796eb8d4a69a0cea1fda825dbb79c8f8958db3fb6c46cd","sha256:5c905215b00af669c836c02813a23d96d6b1571a943262054543cafd61d3bb7e"]
  - id: r-baricentro-mediana
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Dónde está el baricentro sobre cada mediana?
    options:
      - |
        En el punto medio de cada mediana
      - |
        A dos tercios de cada mediana, contando desde el vértice
      - |
        En el vértice
      - |
        Fuera del triángulo
    answers: ["sha256:74c0f2461db5345d5ba3574694f282dc1cb439cb2780333987a44c68cf9ccdb7"]
---

# Triángulos: clasificación, suma de ángulos, desigualdad triangular, igualdad, rectas y puntos notables, áreas y teorema de Pitágoras

El triángulo es la figura más sencilla con área y la más rígida: un marco cuadrado se deforma al empujarlo, uno triangular no. Por
eso las grúas, los puentes y las torres eléctricas están hechos de triángulos, y por eso cualquier polígono se estudia partiéndolo en
triángulos. Este nodo reúne sus propiedades básicas (cuánto suman sus ángulos, qué longitudes pueden tener sus lados, cuándo dos
triángulos son iguales), sus rectas y puntos notables, su área y el resultado más famoso de la geometría: el teorema de Pitágoras.

## Objetivos

Al terminar sabrás:

1. Clasificar triángulos por sus lados y por sus ángulos.
2. Usar la suma de ángulos, el ángulo exterior y la desigualdad triangular.
3. Aplicar los criterios de igualdad de triángulos.
4. Reconocer mediatrices, bisectrices, alturas y medianas y sus puntos de corte.
5. Calcular áreas de triángulos (también con la fórmula de Herón).
6. Demostrar y aplicar el teorema de Pitágoras y su recíproco.

## Qué debes dominar antes

[[mat-rectas-angulos]] (ángulos, paralelas y secante, mediatriz y bisectriz) y [[mat-potencias-raices]] (cuadrados y raíces cuadradas).

> [!question] Test de entrada
> 1. ¿Cuánto suman dos ángulos suplementarios?
> 2. Calcula $\sqrt{169}$.
> 3. Si dos paralelas se cortan con una secante, ¿cómo son los ángulos alternos internos?
>
> Respuestas: $180^\circ$; $13$; iguales.

## 1. Para qué sirve

- **Estructuras**: la rigidez del triángulo es la base de las cerchas, grúas y puentes (el tema `ing-estatica-estructuras`).
- **Medir lo inaccesible**: alturas, distancias a través de un río, la diagonal de una pantalla (las pulgadas de un televisor son su
  diagonal), la longitud de un cable tendido.
- **Coordenadas**: la distancia entre dos puntos del plano es Pitágoras ([[mat-geometria-analitica]]).
- **Topografía y navegación**: la triangulación, que localiza puntos midiendo ángulos, se usó para hacer los mapas.

## 2. Clasificación y propiedades básicas

> [!practico]
> Un triángulo se reconoce por sus lados (¿cuántos son iguales?) y por su ángulo mayor (¿es agudo, recto u obtuso?). Y no todo trío
> de palos forma un triángulo: si uno es demasiado largo, los otros dos no llegan a juntarse.

- **Por los lados**: **equilátero** (tres lados iguales, y entonces tres ángulos de $60^\circ$), **isósceles** (dos iguales; los ángulos
  opuestos a ellos también lo son) y **escaleno** (tres distintos).
- **Por los ángulos**: **acutángulo** (tres agudos), **rectángulo** (uno recto; sus lados son los dos **catetos** y la **hipotenusa**, opuesta
  al ángulo recto) y **obtusángulo** (uno obtuso).

**Propiedades:**

- **Suma de ángulos**: $A + B + C = 180^\circ$. *Ejemplo:* si dos miden $50^\circ$ y $60^\circ$, el tercero mide $70^\circ$. Consecuencia: un triángulo no
  puede tener dos ángulos rectos u obtusos.
- **Ángulo exterior** (el que forma un lado con la prolongación de otro): mide lo mismo que la suma de los dos interiores no adyacentes.
- **Desigualdad triangular**: cada lado es menor que la suma de los otros dos (y mayor que su diferencia). Con lados $3$, $4$ y $9$ no hay
  triángulo, porque $3 + 4 < 9$.
- A mayor lado se opone mayor ángulo.

> [!formal] Con rigor: por qué los ángulos suman 180°
> Por el vértice $A$ se traza la paralela al lado $BC$. Con las secantes $AB$ y $AC$ aparecen en $A$ dos ángulos alternos internos de $B$ y de $C$,
> iguales a ellos ([[mat-rectas-angulos]]). Esos dos ángulos y el ángulo $A$ forman un llano: $A + B + C = 180^\circ$ (Euclides, I.32). La
> demostración usa el postulado de las paralelas; en una esfera, donde no se cumple, los ángulos de un triángulo suman más de $180^\circ$. $\blacksquare$

## 3. Igualdad de triángulos

Dos triángulos son **iguales** (congruentes) si tienen los tres lados y los tres ángulos iguales: se pueden superponer. No hace falta
comprobar las seis cosas; basta uno de estos **criterios**:

- **LLL**: los tres lados iguales.
- **LAL**: dos lados y el ángulo comprendido entre ellos.
- **ALA**: un lado y los dos ángulos contiguos.

Tres ángulos iguales **no** bastan: dan triángulos de la misma forma pero quizá de distinto tamaño (semejantes,
el tema `mat-semejanza-tales`). Los criterios de igualdad son la herramienta para demostrar casi todo en geometría elemental (por ejemplo,
que los puntos de la mediatriz equidistan de los extremos).

## 4. Rectas y puntos notables

> [!practico]
> En cada triángulo hay cuatro familias de tres rectas, y lo sorprendente es que las tres rectas de cada familia se cortan siempre
> en un mismo punto. Cada uno de esos puntos tiene un significado: el centro de la circunferencia que pasa por los vértices, el de la
> que toca los tres lados, el punto de equilibrio…

| rectas | definición | punto de corte | significado |
| --- | --- | --- | --- |
| mediatrices | perpendiculares a los lados por su punto medio | **circuncentro** | centro de la circunferencia que pasa por los tres vértices |
| bisectrices | dividen cada ángulo en dos iguales | **incentro** | centro de la circunferencia que toca los tres lados |
| alturas | perpendicular desde un vértice al lado opuesto | **ortocentro** | |
| medianas | unen un vértice con el punto medio del lado opuesto | **baricentro** | centro de gravedad; está a $\frac23$ de cada mediana desde el vértice |

En coordenadas, el baricentro es la media de los vértices: $G = \left(\frac{x_A + x_B + x_C}{3}, \frac{y_A + y_B + y_C}{3}\right)$. El circuncentro, el
baricentro y el ortocentro están siempre alineados (en la **recta de Euler**).

## 5. Área

El área de un triángulo es **la mitad de base por altura**, $\frac{b \cdot h}{2}$, porque dos copias forman un paralelogramo de base $b$ y altura $h$.
Cualquier lado puede servir de base, con su altura correspondiente.

**Fórmula de Herón** (cuando se conocen los tres lados): con $s = \frac{a + b + c}{2}$ el semiperímetro,
$$
A = \sqrt{s(s - a)(s - b)(s - c)} .
$$
*Ejemplo:* lados $4$, $5$ y $7$: $s = 8$, $A = \sqrt{8 \cdot 4 \cdot 3 \cdot 1} = \sqrt{96} \approx 9{,}80$.

## 6. El teorema de Pitágoras

> [!practico]
> Dibuja un triángulo rectángulo con catetos de $3$ y $4$ cuadritos: la hipotenusa mide exactamente $5$. Si construyes un cuadrado sobre
> cada lado, el de la hipotenusa ($25$ cuadritos) tiene tanta área como los otros dos juntos ($9 + 16$). Eso pasa en **todos** los
> triángulos rectángulos, y en ninguno más.

**Teorema de Pitágoras.** En un triángulo rectángulo de catetos $a$, $b$ e hipotenusa $c$:
$$
a^2 + b^2 = c^2 .
$$
Para la hipotenusa, $c = \sqrt{a^2 + b^2}$; para un cateto, $a = \sqrt{c^2 - b^2}$.

*Ejemplos resueltos.*
- Catetos $3$ y $4$: $c = \sqrt{9 + 16} = 5$.
- Escalera de $5$ m con el pie a $3$ m de la pared: llega a $\sqrt{25 - 9} = 4$ m.
- Altura de un equilátero de lado $6$: la altura lo parte en dos triángulos rectángulos de hipotenusa $6$ y cateto $3$: $h = \sqrt{36 - 9} =
  \sqrt{27} \approx 5{,}196$. En general, $h = \frac{\sqrt3}{2} L$.
- Distancia entre $(1, 1)$ y $(4, 5)$: catetos $3$ y $4$, distancia $5$.

**Recíproco** (Euclides, I.48): si $a^2 + b^2 = c^2$, el triángulo es rectángulo. Más aún, comparando el cuadrado del lado mayor $c$ con la
suma de los otros dos: si $c^2 < a^2 + b^2$ es acutángulo, y si $c^2 > a^2 + b^2$, obtusángulo. Así, $4$, $5$, $7$ es obtusángulo ($49 > 41$).

> [!formal] Con rigor: una demostración por áreas
> En un cuadrado de lado $a + b$ se colocan cuatro copias del triángulo, una en cada esquina, con los catetos sobre los lados. El hueco
> central es un cuadrado de lado $c$ (cada ángulo suyo es $180^\circ$ menos los dos agudos del triángulo, que suman $90^\circ$). Calculando el
> área del cuadrado grande de dos formas: $(a + b)^2 = 4 \cdot \frac{ab}{2} + c^2$, de donde $a^2 + 2ab + b^2 = 2ab + c^2$ y $a^2 + b^2 = c^2$. $\blacksquare$

Las **ternas pitagóricas** son tríos de enteros que cumplen el teorema: $(3, 4, 5)$, $(5, 12, 13)$, $(8, 15, 17)$, $(7, 24, 25)$… y sus múltiplos.

## 7. Errores típicos

- Aplicar Pitágoras a triángulos que no son rectángulos.
- Sumar los cuadrados de la hipotenusa y un cateto para hallar el otro cateto (hay que restar).
- Escribir $\sqrt{a^2 + b^2} = a + b$.
- Confundir mediana con mediatriz, o altura con mediana.
- Usar como altura un lado que no es perpendicular a la base.
- Olvidar la desigualdad triangular al proponer lados.

## 8. Resumen

- Clasificación por lados (equilátero, isósceles, escaleno) y ángulos (acutángulo, rectángulo, obtusángulo).
- $A + B + C = 180^\circ$; exterior = suma de los dos interiores no adyacentes; desigualdad triangular.
- Criterios de igualdad LLL, LAL, ALA.
- Circuncentro, incentro, ortocentro, baricentro (a $\frac23$ de la mediana).
- Área $\frac{bh}{2}$ y Herón.
- Pitágoras $a^2 + b^2 = c^2$, su recíproco y la clasificación por lados.

## Repaso: lo que debe quedarte dentro de un mes

1. La demostración de que los ángulos de un triángulo suman $180^\circ$.
2. Cuándo tres longitudes forman un triángulo.
3. Los criterios de igualdad y por qué tres ángulos no bastan.
4. Qué punto notable es el centro de la circunferencia que pasa por los vértices.
5. El teorema de Pitágoras, una demostración y cómo se clasifica un triángulo por sus lados.

## Siguiente

el tema `mat-poligonos-circunferencia` (polígonos, circunferencia y círculo) y el tema `mat-semejanza-tales`.
