---
id: mat-vectores-rectas-plano
title: "Vectores y rectas en el plano: operaciones, producto escalar, ecuaciones de la recta, posiciones relativas, ángulos y distancias"
area: matematicas
trunk_level: 4
prerequisites: [mat-funciones-lineales-cuadraticas, mat-razones-trigonometricas, mat-sistemas-dos-incognitas]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 5: «Geometría», secciones 1.1-1.5 (plano cartesiano, vectores, operaciones con puntos y vectores, producto escalar, distancias y ángulos, bases ortonormales) y 2.1-2.6 (lugares geométricos, ecuaciones de la recta, posiciones relativas, distancia de un punto a una recta, traslaciones, mediatriz y bisectriz). Apuntes Marea Verde, autor Andrés García Mirantes. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_05_Geometria.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 9: «Geometría». Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/09_geometria.pdf"
hints:
  - "Concepto: un vector es un desplazamiento (cuánto en x y cuánto en y); una recta queda fijada por un punto y una dirección. El producto escalar u·v = u₁v₁ + u₂v₂ = |u||v| cos θ mide a la vez longitudes y ángulos; si vale 0, los vectores son perpendiculares."
  - "Herramienta: vector director de Ax + By + C = 0: (−B, A); vector normal: (A, B). Distancia de un punto a una recta: |Ax₀ + By₀ + C| / √(A² + B²). Posiciones: compara los cocientes A/A′, B/B′ y C/C′."
  - "Documentación: Marea Verde Matemáticas I cap. 5 (secciones 1-2)."
exercises:
  - id: modulo-de-un-vector
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula el módulo del vector $\overrightarrow{AB}$ con $A{{A}}$ y $B{{B}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"A":"(2, -1)","B":"(8, 7)"}
        answers: ["sha256:ab870ad0044943a254bb5073deb41d45aaea2ffd194841f36f33bf6acac0383d","sha256:2c056fc477439e450fc9c42e5e81dde1eb826207706573ed5d2994411bd56360","sha256:38ac6072ebc4346086b3e2077a28a73979ad3d958eb236685a4545bb124d43b0"]
      - values: {"A":"(-3, 4)","B":"(2, -8)"}
        answers: ["sha256:89253b401b4bea527550b35f3e9f80fc53272b0b61cbe714a9bc9d9372452ef1","sha256:f72108330249dc6382744db4632540a60e000ed3b5751666cf42d157f249ee76","sha256:38fe100f5d59e9100c7172654c9d6ff5385bc3df1d234a9d529fbaaadef1a02a"]
      - values: {"A":"(0, 0)","B":"(-7, 24)"}
        answers: ["sha256:9953ce715d83dd4bb4c08437a59652ca01657decae55a16d2baee454b3611289","sha256:aa5a8724337f509b515f26c6bf5900ec65f90c4cab19d36a3f0e095783b7f8d1","sha256:3e0e7b085319787823855a265d7629ea0c9861cfc73d6db60059cfcad90a0039"]
      - values: {"A":"(1, 1)","B":"(9, 16)"}
        answers: ["sha256:b1009d6ac7f8c52fc9e8ae139f052f144a72b72ace46a32bf119ce0bbe7afdd4","sha256:ef187ffa6455851f1b8145e4641683905edf71c87aaab6dadc02d5b57b6f76c6","sha256:bac57db666d6acc19b227d1a9f33334e1cd2f707f0061248b561265077c47638"]
      - values: {"A":"(-2, -3)","B":"(7, 9)"}
        answers: ["sha256:f3793869cf735d008b4ee028754574c423377e62bf78edf0850c526c131cdbaa","sha256:bcf2e8f3d3783866cb5ab8195355d006a2345c67408013ffbd5623b7cd6d5988","sha256:c221faadf8d6439f0bacb1ba0cd8344963e7a048fddb6653fc29689ae4cf04d7"]
      - values: {"A":"(5, -2)","B":"(-1, 6)"}
        answers: ["sha256:3accdb52166178b6b5594409beb695a62c338d5b8f0144fbaa4342b6ae1db741","sha256:18f7b29cb2213b1c6e4b9778f379f71c45c9f97e59d4148657c88ed443125847","sha256:4a85894115d16fc1b2c026d8e72e88d24721b9a02973e2a5f02c79dd8e763078"]
  - id: combinacion-lineal
    tier: 1
    prompt: |
      Con $\vec u = {{u}}$ y $\vec v = {{v}}$, calcula ${{a}}\,\vec u {{b}}\,\vec v$. Respuesta: `x;y`.
    variants:
      - values: {"u":"(2, -1)","v":"(3, 4)","a":"3","b":"- 2"}
        answers: ["sha256:7c360ac2c4f86a24ed7ef1212b47ea79f87d632c9001d50e42ee5d14ad5cdc6b"]
      - values: {"u":"(1, 5)","v":"(-2, 0)","a":"-1","b":"+ 4"}
        answers: ["sha256:de504dd2caede1ca3571255e3baf74dcf720ebf78f8321b6803ba0f9700727bd"]
      - values: {"u":"(0{,}5, 2)","v":"(4, -6)","a":"4","b":"+ 0{,}5"}
        answers: ["sha256:37aa7858d15e526023c427fea4c89851844c80d860819a6f2f7b889d1539d0a2"]
      - values: {"u":"(-3, 2)","v":"(1, 1)","a":"2","b":"+ 3"}
        answers: ["sha256:ada8b0b0da1ad64b61b9e378b578579103bf2f920fad19133b9b998cec4a5be3"]
      - values: {"u":"(7, -4)","v":"(2, 3)","a":"-1","b":"- 2"}
        answers: ["sha256:d3efd443ca6845cfc19db1c6f5e18b07aae95913b83ef30d01c5e972513d377c"]
      - values: {"u":"(6, 0)","v":"(0, 6)","a":"0{,}5","b":"- 1{,}5"}
        answers: ["sha256:bceb269f0467db6177bd6017c1b491316884bb9b0e34a5732f887bba088bd9c9"]
  - id: producto-escalar
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula el producto escalar de $\vec u = {{u}}$ y $\vec v = {{v}}$.
    variants:
      - values: {"u":"(3, -2)","v":"(5, 1)"}
        answers: ["sha256:b1e9fbe0edc0fc629e5b96e071f99f25a506fc9ad9527761a8b60c85083e2ceb","sha256:0657cbcf3247be6e2a60fe5c0d0c6d53bb732ba62ea507b409b8bb12f0f7cf17","sha256:e974f5720c2d338a139c0c4965be79870e9d832bb5856894843783a1d474b0f2"]
      - values: {"u":"(-4, 6)","v":"(3, 2)"}
        answers: ["sha256:aec7c8c49586a3d26509b3e382a48c2dd767d49eaa04a5ab870e5f7b9b8cd893","sha256:2ffbe170d23cd2787d3281aef93ba04b411f9d71a31c69e1ad641794fff7a713","sha256:8379f9db2d3bbee00ca8bab0892f9717921fc1b9b2872b1add9b218038c6d8dc"]
      - values: {"u":"(2{,}5, 1)","v":"(-2, 4)"}
        answers: ["sha256:518155e3eaa03eb666f488278f92504e251d43e45754fea288db759001beb3cb","sha256:284e2cb8cc1a1fc5849ae0bbb7f7bfa16bf76731ca7d08dbc47035070c828d09","sha256:80fefa543271d9c2886b4c7b430cf1b4bfa1c3690533b457308ac339c3c44a5c"]
      - values: {"u":"(1, -7)","v":"(-3, -1)"}
        answers: ["sha256:d16439952d2a7b81ab15f061e172c65d7a73fb984ffb724dd4183b66a0d57ddc","sha256:e9a269dd05486e916f257378981b0131c2359b196b229e67e5447a87e280f743","sha256:eb4a2d0fe1af7daf167280500225101acc98e1546eff87509a38209f66dd667f"]
      - values: {"u":"(0, 5)","v":"(8, -3)"}
        answers: ["sha256:cc12b779bff78a851d25ef29a4d69a64200397ff7073c92954de2aa6134cb8bd","sha256:e6e1c46dced4f759dd0ca1fefb66941d176aeb3702a0f1756573bff4eb3b7450","sha256:66be51cb797c92e15c052f51a0c2d0ccfdc1da9d6f1b323171fb4587981bb982"]
      - values: {"u":"(-6, -2)","v":"(-1, 8)"}
        answers: ["sha256:fdadba1cc93d6f6a2444ffe34c2bae317acc9a5c73d21cc5d4c8585773be9889","sha256:5ad837033fb5d8d320d022ad806b400b448a49971cc92d7b844bef8da062f4e3","sha256:24af6135cdc59a87fddb6c8aa38c5e4251d9dbb5f4c9a212b477363a3d137b39"]
  - id: angulo-entre-vectores
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué ángulo, en grados, forman $\vec u = {{u}}$ y $\vec v = {{v}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"u":"(1, 2)","v":"(3, -1)"}
        answers: ["sha256:9caee352afc8a1959f1902f1605c2c885d958b7aafe9b6c1db44624e2a2eab4c","sha256:f6f73fe7f4f47c318fd68018f3f26212a00a830dd568dc817ef497b8ecb7038d","sha256:161989f6781f263a12532a2bafd453943d86c58c436a6a981aa782e1cceb1e23"]
      - values: {"u":"(4, 0)","v":"(-2, 5)"}
        answers: ["sha256:07d469682cb9dcb1d7cd67c5606a2a8a757d3b8e28eebdcab3fb65083ba09ab4","sha256:eb48a7f807358260d9d56449ac1a8a6425ebc1f408f1f937b78a71112e034531","sha256:a88027f44261c43b8ec987db289352bf0c1a1aad9bc45defca272c60b3112d72"]
      - values: {"u":"(-3, -1)","v":"(2, 6)"}
        answers: ["sha256:61449149302b5b4f5eeaf34ce9f305ca231b67afacd5195e8280211a9071bc12","sha256:8f4d4f4e8ad4da755ef3f60477c14bc23a952bb600110eb33d52375b0a78f6be","sha256:7dc3b197435709c7456d4aa0642ebff6370c70a0a305321feab88d93e84855b7"]
      - values: {"u":"(5, 5)","v":"(1, -3)"}
        answers: ["sha256:49c15b0d7b7a87d2a0fefa349e7bf0975025b87102eef867b2fef33170fb408e","sha256:b19886d816f6029394a87d7201d3925ab40dd5eaf4da573896b770bd5723c212","sha256:5b47d852e659d6ea12504a110fc7dc94738f378b0679972446e49282c84b7fa4"]
      - values: {"u":"(2, -7)","v":"(-4, 1)"}
        answers: ["sha256:0a7eeb61d4164cf4658cf4b436c57180db3e5fbc9233f6f4156e281e7b7b4bf5","sha256:6c7f7202891e58b2ec076dc769626bd9223c9e6c1775b4597a030d680487654a","sha256:3c3115561bd118be42e651993c3f60799615e1932b414b5bb3b47469ba759cba"]
      - values: {"u":"(6, 1)","v":"(1, 6)"}
        answers: ["sha256:754fdf21db405fdb9acdbef10de64a85a0c3372f531f54600b5fd01e2cd052f3","sha256:f0af6c42a0834db9346bc7a867f1a201b36f13407c201f6c256d2612d186aedb","sha256:a28e33c07b9501ad510704b9ca12bef6cdb2b1cee569e3903ffaec1c7878e278"]
  - id: vectores-perpendiculares
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Para qué valor de $k$ el vector $({{a}}, k)$ es perpendicular a $({{p}}, {{q}})$?
    variants:
      - values: {"a":"2","p":3,"q":6}
        answers: ["sha256:1ae2483df25cda14696801f7f0692c6ac06d49e5f0ec1ca8823547eeaa0f826b","sha256:afc9ebed318c1ba24fcfa614a646b957fbd600c449171852b5eb60f73d1154ae","sha256:0a5070cb8dfa6cc61731bb6e5ec2abbc90bba3915108f7649c3b125b529783fd"]
      - values: {"a":"5","p":-4,"q":10}
        answers: ["sha256:e60ed59302fb85ee76b4ed63ad9fec23991db1116840736c41362b0ec919839a","sha256:a2c568f27bed26fe4ddd152945e6df8f85d6eb504a85692b9a3d76c677c58b77","sha256:f21463b66498e06a1b4eb6e331fcfa897b5b325b59c73ee0353db761d34b68c6"]
      - values: {"a":"-3","p":2,"q":4}
        answers: ["sha256:aa4246269562254bb8bae5e029166938923680ddf88b90a176e14f45b9aee252","sha256:c80cada4e8355720b25e242b65bc75b97aa103dcae52ddcf2d7995911ae534a4","sha256:44eabe2b99c1b3e53037fcb708dfc60f6579ce8055a7445909e5410cd4ee8c17"]
      - values: {"a":"6","p":9,"q":-2}
        answers: ["sha256:5123b1608c2bbad6bdbf5edc714919701c405dec56317e2473b2c760d22f54ce","sha256:c486cc378f6883b0f6c91e1189539d93c2bf4fadb66dcfbda73b47caac1edb29","sha256:7fd4db778ad0a8f87fad83872c8dae1eff31b5bf41df0b1f8c7a00897af6442d"]
      - values: {"a":"1{,}5","p":4,"q":3}
        answers: ["sha256:46d6fb1f6fe3c48b86e48e52add036e776e11a03ba48720d43409629218d113a","sha256:59f818a6f3c9020ba123d367d31e1a849c1bb766071c8f67a1a2765db517c1ca","sha256:3a8c7792b9f630c968ad8864afcbfdbcc3e5a77073943aa0058392860165aaa3"]
      - values: {"a":"-8","p":-2,"q":5}
        answers: ["sha256:1a8c69df77e81e325118b63c689e7bfac2fa360960988ab85de38e22c636cf34","sha256:5a6bd14fd44bce23f4bcea3cb175ef6066602b871b9c12b3b6841a8f43509d55","sha256:179bd0cee48d7fba17ff8e8b05196ba01cc0af71df44f295d6a6246c1d4bd676"]
  - id: ecuacion-parametrica
    tier: 1
    prompt: |
      La recta pasa por $A{{A}}$ con vector director $\vec v = {{v}}$. ¿Qué punto de la recta corresponde a $t = {{t}}$ en la ecuación paramétrica
      $(x, y) = A + t\,\vec v$? Respuesta: `x;y`.
    variants:
      - values: {"A":"(1, -2)","v":"(3, 5)","t":"2"}
        answers: ["sha256:bfc86d784f419d674a75910dbe05931e09b79516c4a6eb05ae0a3a25c67c10ca"]
      - values: {"A":"(-4, 0)","v":"(2, -1)","t":"-3"}
        answers: ["sha256:0b98b599587df9fe75bc2bf1ae5f5bed735a2b752edbfbbee4e871c8ea5c76ff"]
      - values: {"A":"(0, 7)","v":"(-5, 2)","t":"0{,}5"}
        answers: ["sha256:9cb28c67e468c69a63750173618db8d0079b640fbac12d8fb501abfdc74ca7ed"]
      - values: {"A":"(3, 3)","v":"(1, 1)","t":"10"}
        answers: ["sha256:4c1e2cd3ac15b29f931e8de5098bd28283a211af3926b47a8608b1c6db7116a1"]
      - values: {"A":"(-2, 5)","v":"(4, -3)","t":"-1{,}5"}
        answers: ["sha256:c87fe1409dcc21a9a0277d3a92f267df6c7051081d662d38be6219a750b93778"]
      - values: {"A":"(6, -1)","v":"(0, 2)","t":"4"}
        answers: ["sha256:8af91448144b426eeaed65df68130c9f2b151256469562d15bef6a26b0325170"]
  - id: posicion-relativa-de-rectas
    tier: 2
    prompt: |
      ¿Cómo son las rectas ${{r1}}$ y ${{r2}}$? Responde `secantes`, `paralelas` o `coincidentes`.
    variants:
      - values: {"r1":"2x - 3y + 5 = 0","r2":"4x - 6y + 1 = 0"}
        answers: ["sha256:e5552e56022fef6010ad5eebfdec832baf941973d03a70c93f25a9b36cbe9ebe"]
      - values: {"r1":"x + 2y - 4 = 0","r2":"3x - y + 2 = 0"}
        answers: ["sha256:d52989c1ac76670ef7cf710cd5709189e582e2a70f4507071528f01820298115"]
      - values: {"r1":"3x - y + 2 = 0","r2":"-6x + 2y - 4 = 0"}
        answers: ["sha256:40f10a1d0bb1b8edcda76c58a69f317573b381d3999228623711e7132ff972b7"]
      - values: {"r1":"5x + 4y = 0","r2":"10x + 8y + 3 = 0"}
        answers: ["sha256:e5552e56022fef6010ad5eebfdec832baf941973d03a70c93f25a9b36cbe9ebe"]
      - values: {"r1":"x - y + 3 = 0","r2":"2x + 2y - 1 = 0"}
        answers: ["sha256:d52989c1ac76670ef7cf710cd5709189e582e2a70f4507071528f01820298115"]
      - values: {"r1":"-2x + 6y + 4 = 0","r2":"x - 3y - 2 = 0"}
        answers: ["sha256:40f10a1d0bb1b8edcda76c58a69f317573b381d3999228623711e7132ff972b7"]
  - id: distancia-punto-recta
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula la distancia del punto ${{Q}}$ a la recta ${{r}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"r":"3x + 4y - 5 = 0","Q":"(6, 2)"}
        answers: ["sha256:746d5bfd0d1d0b8e55039b6c145d2b5746541991e3fdf7a41db6e27774fed4e2","sha256:23acfb06f140218220187c047890ab130ebbc6804b4d9cff97c1f654e98f5b3a","sha256:cca5de8d09ef16c8a4689538ecee46cb0f07fc41c34a4960646e1de616d02148"]
      - values: {"r":"5x - 12y + 2 = 0","Q":"(-1, 3)"}
        answers: ["sha256:6542fc86e5ed993b796c779550fce4d0f81d8c5857b98e1c25001cd913138081","sha256:e63915c18e3b5a53105e3894d89304571c3834171d6440cd18d076fc696c82ab","sha256:5ecd06bf4afcaa0fd00b4fa9838cd5076b2a331c53fa11495f95391705ec5df8"]
      - values: {"r":"x + y - 4 = 0","Q":"(0, 0)"}
        answers: ["sha256:1f867e0c3ec8f4a5679807e27d22ebc2e4300afbd26e596964def663b329449a","sha256:1100cbd77c53ee490ef41d84dd5b50d07311ecfc69eabdbafecc1aa039491d8e","sha256:f7536ade97aa0886e6d3c887cf0cfb7ae29950dce57f3a21199b0dec560c42ed"]
      - values: {"r":"2x - y + 3 = 0","Q":"(4, -5)"}
        answers: ["sha256:adf54b6b2ad7d61f9d7f5bab56da945f6d86da7fc8e47629920987700a7df16a","sha256:8d6c0803d6471de2dcacd1d1fb668b59e7110d72ea17b2da7814fa88d479367e","sha256:6c11023fc8660406025dd4fe1553441178379032498c4e125b56eb71935ed53d"]
      - values: {"r":"8x + 6y + 10 = 0","Q":"(1, 1)"}
        answers: ["sha256:82f90becd763e89091b65b25acbcdfc45ec5e957b75d64dfd4b0d1103d91acb6","sha256:720d0e4cf7f43121c7a971ad4d4242d926048bdee83a5a38e625c7cf5f6b491b","sha256:baed8f0f8352f73d75ac9e2d8c9230193b0dc5c058b41c14d651414e2c77e053"]
      - values: {"r":"y - 3 = 0","Q":"(7, -2)"}
        answers: ["sha256:6c97b241223d563a009175e6568bab7b12ab16f4b1c002a97827e51ec1bceaaa","sha256:ca185f9b27fbca0f96729b9faa74772777cf69ba8a91be88306eb324cff347e0","sha256:0e36ab3a02a7dbc21227aa7e4b052d0c2ffe4a5fe5ce9bed322d8e846195479a"]
  - id: angulo-entre-rectas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué ángulo agudo, en grados, forman las rectas ${{r1}}$ y ${{r2}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r1":"x - y = 0","r2":"2x + y = 0"}
        answers: ["sha256:4c9fccb79df5cd7ec3637d2a46dfec695dc0b3945b9a8c9d637103f53c62d49d","sha256:e82b39c9f4954276d07537780812f228d30bfa1e697cba07f214dbf16e4d34c3","sha256:a18c0fad9163d2fc90fdd6a5127916693c9db648be5aae4e9d1bba1200ad49ac"]
      - values: {"r1":"3x + 4y = 0","r2":"4x - 3y = 0"}
        answers: ["sha256:f559a015277a5c45b6a8fbf0d34aaf570e5f57203757f25b7da36ba7c3857d01","sha256:9bdeb13b9e6fdb0570b8a140595cd0f54c0995552d0e7eaf75206936e89d5ec1","sha256:162523e266e0c78d8b757fb03d2e6f6c9bf57367709eb883c74f803e593d332c"]
      - values: {"r1":"x = 0","r2":"x + y = 0"}
        answers: ["sha256:e169d65b6f7ac5f3acf9326eac8142cf64d582c8d362c67a8e0cfa21c1be4ac8","sha256:27fb61f6730c578283fafe6aa7d481940d05039d4a868ee795e14b304013b012","sha256:5cc12ecc00ba919023c21004c3399eb730e322080341bd1090df3fde64544ce5"]
      - values: {"r1":"2x - 5y = 0","r2":"x + 3y = 0"}
        answers: ["sha256:7192584f6bff1e94cca68593012fa3775793ffb4c59018892aeba8488a528e0d","sha256:1352bcc0f573282b5b5fb3c8f4b459fe8eeb84bceb13567a84fe6f786bc7a914","sha256:3f03d1f5abdbceb931a7ed93548a11ba777102bb3d9ac68119ba25d8d56e4d6d"]
      - values: {"r1":"y = 0","r2":"3x - y = 0"}
        answers: ["sha256:2b78d244d290db85d4b9b0bc32e983886e68cd8dc7a31a67913241f6a15f9325","sha256:8819ddc521979a075308c53e59809117713c70e4ce7bb73da121f0dfca804b82","sha256:52997e2d75d74a9fdb30ec0657ec6117206da4e2d52171a48de286d723106ae1"]
      - values: {"r1":"5x + 2y = 0","r2":"-x + 4y = 0"}
        answers: ["sha256:4ae78ef00e9142d8000a799f7728343c8cf9b9188a570638d8c8d7ae85066fb1","sha256:0f235e68e7e9ca6cf6854ce79ed4220af92ce532e78c076a41500f5f7f99f85f","sha256:a9d4659ba28d3b6120ce4717d85a780d47e8205331c492f274cde8cec5fb13fe"]
  - id: distancia-entre-paralelas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula la distancia entre las rectas paralelas ${{r1}}$ y ${{r2}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"r1":"3x + 4y - 2 = 0","r2":"3x + 4y + 13 = 0"}
        answers: ["sha256:7ca6d9fa781d278f62d94251b25e3dc2e49b26631e4e93be34a6d8e6392d1fff","sha256:18e9576ef699573afaf11bd2c29f0f59a2043c0a9da5f28253e7ecce97760919","sha256:f9dbf4ae974d4e7055c3747b3b9ea9f78a4da8ee48ae1551532130b00b5b0576"]
      - values: {"r1":"x - y + 5 = 0","r2":"x - y - 3 = 0"}
        answers: ["sha256:dcc186af64de66aea6b072ca162c19cf4ebafa0ca611e1fa1267d9fa2d5a32f2","sha256:204149b70ef943851bd4c8b224e0e66a6ebcbc8b55a2b56ef40374757850337d","sha256:a145320e1f2840c50843cb33f4821654e055943c025c3a2a6c49d4c5b1017d4b"]
      - values: {"r1":"5x + 12y = 0","r2":"5x + 12y + 26 = 0"}
        answers: ["sha256:2535182a8d9caf981678b8127ac24e1dee0337068ac292c2775b2b6055f83fad","sha256:ea3d0d69ee7e98ed376f50c945a6e79cc22722a3ddee34398a3e37afaff76e30","sha256:76e54e696ee220d8fd150cde63ac59f089df359eef220d3e029a47386e98b7ea"]
      - values: {"r1":"2x + y - 7 = 0","r2":"2x + y + 3 = 0"}
        answers: ["sha256:f2ff8caac23aeb1815db7c6ef1735ad585aed7dc608cfe14764f59c0b8e1b1e2","sha256:dfb1c3a42f756ce7a2af3e6803159c4bb46ddf3025c97b143a47caac76299745","sha256:e409f7361b7e64bbc1f78d34fb3f94e37b02bc9ff84079d57f7f9b0fd3949649"]
      - values: {"r1":"8x - 6y + 15 = 0","r2":"8x - 6y - 5 = 0"}
        answers: ["sha256:14a01ae5f22872cf526cf1950cc1d4964e9c7829d4ab316b62a50bee4d65841f","sha256:1a49295acd86652a96e198babc97425253c0dc6a0883bc17502994dec6e618c8","sha256:ed13186c9f85aa282b61779f32e26294d64091b52094524bd4fb4cd77859e02e"]
      - values: {"r1":"x + 2y + 4 = 0","r2":"x + 2y + 4.5 = 0"}
        answers: ["sha256:7ff99109c261fa00a80b62fda15d7a06f1c6112fc98bc8f26e8bcda85a8b822e","sha256:15a96e3065a0d8d6ea1314380e6622241a376855872968be6377db910e543171","sha256:0e133f6d3a15a3a7b388e9bcb4fb5455dcc7ee4b11496869e5427765ab3405ec"]
  - id: simetrico-respecto-de-una-recta
    tier: 3
    prompt: |
      Halla el punto simétrico de ${{Q}}$ respecto de la recta ${{r}}$. Respuesta: `x;y`.
    variants:
      - values: {"r":"x - y = 0","Q":"(5, 1)"}
        answers: ["sha256:9282a01675edb92f2bc2628cecf9119b3c2f12f342bc206a9f3227e0512c71d6"]
      - values: {"r":"y - 3 = 0","Q":"(2, 7)"}
        answers: ["sha256:b1f713457ab0ea711879485a067897b743cba223b42f550e76278ab3a87ac617"]
      - values: {"r":"x + 2 = 0","Q":"(3, -4)"}
        answers: ["sha256:cc6a45e1eca58483e477c7455ef937bdac16e758e6cbf08e7f02f3bf834f457f"]
      - values: {"r":"x + y - 2 = 0","Q":"(4, 4)"}
        answers: ["sha256:bca73be7a7e02bd765507ce6b385f888046e8784ceeed5c77fe62cbbd839286a"]
      - values: {"r":"2x - y = 0","Q":"(5, 0)"}
        answers: ["sha256:682acd6a9ce15dbd8c553f8124cb22bf0afa570b2f9f7b716c37452b819298ab"]
      - values: {"r":"x + 2y - 4 = 0","Q":"(-1, -3)"}
        answers: ["sha256:e4be3da765ff76d2da1195b67a0cbfd399bc63012bcfa5520cb16785a2111275"]
  - id: dividir-en-tres-partes
    tier: 2
    prompt: |
      Los puntos que dividen el segmento de extremos $A{{A}}$ y $B{{B}}$ en tres partes iguales son dos. ¿Cuál es el más cercano a $A$? Respuesta: `x;y`.
    variants:
      - values: {"A":"(0, 0)","B":"(9, 6)"}
        answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
      - values: {"A":"(-3, 5)","B":"(6, -4)"}
        answers: ["sha256:4678a16a156b8b96e70f49eb04791bcbb641f47e8000b01a5abd834c58bf319f"]
      - values: {"A":"(2, 1)","B":"(11, 7)"}
        answers: ["sha256:11b4e3d107c9ead370d5988313bdb607b2fa33279ce574f04f1f9091af18bc34"]
      - values: {"A":"(-6, -6)","B":"(3, 0)"}
        answers: ["sha256:58d1f49b0d4e4a104f05e882ac015efcb35a9b353f110c41689c897b3743ed84"]
      - values: {"A":"(1, 8)","B":"(-5, -1)"}
        answers: ["sha256:dda4ad566be33890416fd31aa7ad4f49af3898a0b8b5cc9bcb649ba8f00367fb"]
      - values: {"A":"(4, -2)","B":"(-2, 10)"}
        answers: ["sha256:5705c50ceb73f721ce58fb003ec62d0c0c4e40f93298505f7dc6b7f3e475cc84"]
  - id: distancia-a-una-recta
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué el vector $(A, B)$ es perpendicular a la recta $Ax + By + C = 0$. (b) Deduce la fórmula de la distancia de un
      punto $P_0(x_0, y_0)$ a esa recta proyectando un vector sobre la dirección perpendicular. (c) Usa el producto escalar para demostrar que dos
      rectas $y = mx + n$ e $y = m'x + n'$ son perpendiculares si y solo si $mm' = -1$.
    sealed: "gz64:H4sIAAAAAAACCn2S0W4aMRBFf+VqZSlAlwh43IgHQh8rNVKkvtQNMt5JammxYWynQbAf02/IJ+THKpuFQhTlyd7ZO7bn3rMrvGtiMM4WVTEY9FR/MMC9gbhbjAW2aZ0IkA9vfy3IolFg0kGVELOXxRhfcLvNyxxTjHLH7GUxOdQnp/oNmHxQtnapsZcUQ7wsxv0k7G3z5zZ9JnEJ8qhJGy4herMSt31IqWsXIKV7Jmbz9DsoZvdnd7cY3y0mbe6rpO3k6cVYE6/J1kbHRjEUdFTNJhpiPJMOjlHTaZxraaUdDHrLPD6pbv5osY42uAspvinUJk2jjUoXNQqNs08mxLoTrtltSWvz9mpTRXz87FEr4N2Sc0tt+Nhx8XBphZTPpGExRTddBVFjCikfWend/vj/U49G7b49SfftWXuKY3QZx6iLY9/upPQbDrvZQ870YdJetKbOHHVa5h/KRYm1400kiGFGZnhAZoq5ONquk+0/ciop+mRF3lYQvXGJVT+DlbdXfXGNe/fOJfLwBj4m5+uogwN5rVLu5CFGybEE6Wp11RHm4FPKh8JwLK6LsuC4ZKOL6ueu0GwCsXFFVXylVSQfWCHPcAaY4+CenFUNEgC+wyqz+5+WoiwyQr6oJm357uQ66ix9fHvlVUwUdCwc6dLOvufpQAw1R4qt45VqPrvn+zIYsnQ27eHciyefPL886Vf7DyGTJd8iBAAA"
  - id: r-escalar-cero
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si el producto escalar de dos vectores no nulos es $0$, ¿qué se puede decir de ellos?
    options:
      - |
        Son paralelos
      - |
        Son perpendiculares
      - |
        Tienen el mismo módulo
      - |
        Son iguales
    answers: ["sha256:a4bdb774cee0bdb153b0edd7947e2ac763e28d2cfad81203933d80f6e0917a9f"]
  - id: r-director
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es un vector director de la recta $2x + 3y - 7 = 0$?
    options:
      - |
        $(2, 3)$
      - |
        $(3, 2)$
      - |
        $(3, -2)$
      - |
        $(2, -3)$
    answers: ["sha256:cd461683519ba1b0f24ef0526847ace217e845952c7c237f0423f1c495a31921"]
  - id: r-pendiente-general
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la pendiente de la recta $3x + 2y + 5 = 0$?
    answers: ["sha256:d2f9e616bab234ea7e62ec059fed31f1497c4f371d43eabd70e430ead944970c","sha256:99fcbac643151336d8bfcabd13de7cdf54a54e82a2307edb49c866739155c30b","sha256:3e1046fc89ed66011e850c155a215a6d1a2fcc595880eb99c4531130e2179d61"]
  - id: r-unitario
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el vector unitario con la dirección y el sentido de $(3, 4)$?
    options:
      - |
        $(0{,}6, 0{,}8)$
      - |
        $(3, 4)$
      - |
        $(1, 1)$
      - |
        $(\frac34, 1)$
    answers: ["sha256:ad94b927d8ba5138cac868ff84f674e4543dc88a977d21d62bb36581229c1c97"]
  - id: r-paralelas-coeficientes
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué tienen las ecuaciones generales de dos rectas paralelas?
    options:
      - |
        Términos independientes iguales
      - |
        Coeficientes opuestos
      - |
        Pasan por el origen
      - |
        Coeficientes de $x$ e $y$ proporcionales
    answers: ["sha256:e4aa7e2e8380369059061b102cd868affd79b284acf21b0733638315cb62c333"]
  - id: r-modulo-suma
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se cumple $|\vec u + \vec v| = |\vec u| + |\vec v|$?
    options:
      - |
        Siempre
      - |
        Solo si tienen la misma dirección y sentido
      - |
        Nunca
      - |
        Solo si son perpendiculares
    answers: ["sha256:8143630b2847a048e3eefb89cb548f4c143b073bff908334631299cfc940ea35"]
  - id: r-punto-medio
    tier: 1
    review: true
    prompt: |
      ¿Cuál es el punto medio de $(-3, 4)$ y $(7, -2)$? Respuesta: `x;y`.
    answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
---

# Vectores y rectas en el plano: operaciones, producto escalar, ecuaciones de la recta, posiciones relativas, ángulos y distancias

La **geometría analítica** traduce la geometría a números: los puntos son pares de coordenadas, los desplazamientos son **vectores** y las rectas,
ecuaciones. Así, preguntas como «¿son perpendiculares estas dos calles?», «¿a qué distancia pasa el barco de la boya?» o «¿dónde se cruzan dos
trayectorias?» se responden con cuentas, sin dibujar. Es el lenguaje de la física (desplazamientos, velocidades), de los gráficos por ordenador, de
la robótica y del aprendizaje automático, donde los datos son vectores.

## Objetivos

Al terminar sabrás:

1. Operar con vectores (suma, producto por un número, combinaciones lineales) y calcular su módulo.
2. Usar el producto escalar para calcular ángulos y decidir perpendicularidad.
3. Escribir la ecuación de una recta en sus distintas formas y pasar de una a otra.
4. Estudiar la posición relativa de dos rectas y el ángulo que forman.
5. Calcular distancias (entre puntos, de un punto a una recta, entre paralelas) y simétricos.

## Qué debes dominar antes

[[mat-funciones-lineales-cuadraticas]] (pendiente, forma $y = mx + n$), [[mat-razones-trigonometricas]] (coseno de un ángulo) y
[[mat-sistemas-dos-incognitas]] (corte de dos rectas).

> [!question] Test de entrada
> 1. Pendiente de la recta por $(1, 2)$ y $(3, 8)$.
> 2. Distancia entre $(0, 0)$ y $(5, 12)$.
> 3. $\cos 90^\circ$.
>
> Respuestas: $3$; $13$; $0$.

## 1. Para qué sirve

- **Física**: posiciones, velocidades y desplazamientos son vectores, y muchas magnitudes físicas se calculan con productos escalares ([[fis-medida-movimiento]]).
- **Gráficos y videojuegos**: mover, girar y detectar colisiones de objetos.
- **Robótica y navegación**: trayectorias, distancias a obstáculos ([[rob-cinematica]]).
- **Álgebra lineal e IA**: los vectores del plano son el primer ejemplo de espacio vectorial; la similitud entre datos se mide con el
  ángulo entre vectores ([[mat-algebra-lineal-1]]).

## 2. Vectores

> [!practico]
> Para ir del punto $A(1, 2)$ al $B(4, 6)$ hay que avanzar $3$ a la derecha y $4$ hacia arriba: ese desplazamiento es el vector $\overrightarrow{AB} = (3, 4)$. Su
> longitud (módulo) es $5$, por Pitágoras. El mismo desplazamiento aplicado a otro punto lleva a otro sitio, pero es el mismo vector.

- **Vector** $\overrightarrow{AB} = (b_1 - a_1, b_2 - a_2)$ (extremo menos origen). Tiene **módulo** (longitud) $|\vec v| = \sqrt{v_1^2 + v_2^2}$, **dirección** (la de su recta) y
  **sentido**. Dos vectores son iguales si tienen las mismas componentes.
- **Operaciones**: suma componente a componente (regla del paralelogramo), producto por un número $k\vec v = (kv_1, kv_2)$ (estira o encoge; si
  $k < 0$, invierte el sentido). Una **combinación lineal** de $\vec u$ y $\vec v$ es $a\vec u + b\vec v$.
- **Vector unitario** en la dirección de $\vec v$: $\frac{\vec v}{|\vec v|}$. Los vectores $\vec i = (1, 0)$ y $\vec j = (0, 1)$ forman la **base canónica**: $(v_1, v_2) = v_1\vec i + v_2\vec j$.
- **Punto medio** de $AB$: $\left(\frac{a_1 + b_1}{2}, \frac{a_2 + b_2}{2}\right)$. Los puntos que dividen $AB$ en partes iguales se obtienen sumando a $A$ fracciones de $\overrightarrow{AB}$.

## 3. El producto escalar

> [!practico]
> ¿Cuánto «empuja» un vector en la dirección de otro? Si son perpendiculares, nada; si van en el mismo sentido, todo. El producto
> escalar lo mide, y con él se calculan a la vez longitudes ($\vec v \cdot \vec v = |\vec v|^2$) y ángulos.

$$
\vec u \cdot \vec v = u_1v_1 + u_2v_2 = |\vec u|\,|\vec v|\cos\theta ,
$$
donde $\theta$ es el ángulo que forman. Por tanto:

- **Ángulo**: $\cos\theta = \dfrac{\vec u \cdot \vec v}{|\vec u|\,|\vec v|}$.
- **Perpendicularidad**: $\vec u \perp \vec v \iff \vec u \cdot \vec v = 0$. *Ejemplo:* $(3, 4)$ y $(-4, 3)$: $-12 + 12 = 0$. En general, $(a, b)$ es perpendicular a $(-b, a)$.
- **Proyección** de $\vec u$ sobre la dirección de $\vec v$: $\frac{\vec u \cdot \vec v}{|\vec v|}$.

> [!formal] Con rigor: por qué las dos expresiones coinciden
> Por el teorema del coseno en el triángulo formado por $\vec u$, $\vec v$ y $\vec u - \vec v$: $|\vec u - \vec v|^2 = |\vec u|^2 + |\vec v|^2 - 2|\vec u||\vec v|\cos\theta$
> ([[mat-resolucion-triangulos]]). Con componentes, $|\vec u - \vec v|^2 = (u_1 - v_1)^2 + (u_2 - v_2)^2 = |\vec u|^2 + |\vec v|^2 - 2(u_1v_1 + u_2v_2)$. Comparando,
> $u_1v_1 + u_2v_2 = |\vec u||\vec v|\cos\theta$. $\blacksquare$

## 4. Ecuaciones de la recta

Una recta queda determinada por un punto $A(a_1, a_2)$ y un **vector director** $\vec v = (v_1, v_2)$:

| forma | ecuación |
| --- | --- |
| vectorial | $(x, y) = (a_1, a_2) + t(v_1, v_2)$, $t \in \mathbb R$ |
| paramétricas | $x = a_1 + tv_1$, $y = a_2 + tv_2$ |
| continua | $\dfrac{x - a_1}{v_1} = \dfrac{y - a_2}{v_2}$ |
| general (implícita) | $Ax + By + C = 0$; vector director $(-B, A)$, vector normal $(A, B)$ |
| punto-pendiente | $y - a_2 = m(x - a_1)$, con $m = \frac{v_2}{v_1}$ |
| explícita | $y = mx + n$ |

Cada valor de $t$ da un punto de la recta (en física, $t$ es el tiempo y la recta, la trayectoria de un movimiento uniforme). Para pasar de una
forma a otra se despeja $t$ o se opera.

## 5. Posiciones relativas, ángulos y distancias

**Posición relativa** de $Ax + By + C = 0$ y $A'x + B'y + C' = 0$:

- **Secantes** (se cortan en un punto) si $\frac{A}{A'} \neq \frac{B}{B'}$; el punto de corte es la solución del sistema.
- **Paralelas** si $\frac{A}{A'} = \frac{B}{B'} \neq \frac{C}{C'}$; **coincidentes** si los tres cocientes son iguales ([[mat-sistemas-dos-incognitas]]).

**Ángulo entre dos rectas**: el agudo que forman sus vectores directores (o normales): $\cos\theta = \frac{|\vec v \cdot \vec v'|}{|\vec v||\vec v'|}$. Son **perpendiculares** si
$AA' + BB' = 0$, o, en forma explícita, si $mm' = -1$.

**Distancias**:

- Entre dos puntos: el módulo del vector que los une.
- De un punto $P_0(x_0, y_0)$ a la recta $Ax + By + C = 0$:
  $$
  d(P_0, r) = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}} .
  $$
  *Ejemplo:* de $(5, 5)$ a $3x + 4y - 10 = 0$: $\frac{|15 + 20 - 10|}{5} = 5$.
- Entre dos rectas paralelas $Ax + By + C = 0$ y $Ax + By + C' = 0$: $\frac{|C - C'|}{\sqrt{A^2 + B^2}}$.

**Simétrico** de un punto $P$ respecto de una recta: el punto $P'$ tal que la recta es la mediatriz de $PP'$ (el punto medio está en la recta y
$\overrightarrow{PP'}$ es perpendicular a ella). Se calcula con la perpendicular por $P$ y su pie $H$: $P' = 2H - P$.

**Lugares geométricos**: la mediatriz de $AB$ (puntos con $d(P, A) = d(P, B)$) y las bisectrices de dos rectas (puntos a igual distancia de ambas)
salen de igualar distancias; elevando al cuadrado o quitando valores absolutos se obtienen sus ecuaciones.

## 6. Errores típicos

- Restar las coordenadas al revés (el vector $\overrightarrow{AB}$ es $B - A$).
- Confundir el vector director $(-B, A)$ con el normal $(A, B)$.
- Olvidar el valor absoluto en la distancia o la raíz del denominador.
- Concluir que dos rectas son paralelas comparando solo un coeficiente.
- Dar el ángulo obtuso entre dos rectas cuando se pide el que forman (el agudo).

## 7. Resumen

- Vector $\overrightarrow{AB} = B - A$; módulo $\sqrt{v_1^2 + v_2^2}$; suma y producto por un número; combinación lineal.
- Producto escalar $u_1v_1 + u_2v_2 = |\vec u||\vec v|\cos\theta$; perpendicularidad si vale $0$.
- Recta: vectorial, paramétricas, continua, general, punto-pendiente, explícita.
- Posiciones por cocientes; ángulo con los directores; $mm' = -1$.
- Distancia punto-recta $\frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$; entre paralelas; simétricos; lugares geométricos.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se calcula el ángulo entre dos vectores.
2. Por qué el producto escalar nulo significa perpendicularidad.
3. Las formas de la ecuación de una recta y el vector director de la general.
4. Cómo se decide si dos rectas son paralelas, coincidentes o secantes.
5. La fórmula de la distancia de un punto a una recta.

## Siguiente

el tema `mat-conicas` (circunferencia, elipse, hipérbola y parábola como lugares geométricos).
