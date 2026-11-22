---
id: fis-corriente-circuitos
title: "Corriente eléctrica y circuitos: intensidad, resistencia y ley de Ohm, potencia y efecto Joule, generadores, asociaciones, leyes de Kirchhoff y circuitos RC"
area: fisica
trunk_level: 3
prerequisites: [fis-electrostatica, mat-funciones-exponencial-logaritmica]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 9: «Corriente y resistencia» (corriente eléctrica, modelo de conducción en metales, resistividad y resistencia, ley de Ohm, energía y potencia eléctrica, superconductores). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/9-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 10: «Circuitos de corriente continua» (fuerza electromotriz, resistores en serie y en paralelo, reglas de Kirchhoff, instrumentos de medición eléctrica, circuitos RC, cableado doméstico y seguridad eléctrica). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/10-introduccion"
  - "G. S. Ohm, «Die galvanische Kette, mathematisch bearbeitet» (1827); G. Kirchhoff, «Ueber den Durchgang eines elektrischen Stromes durch eine Ebene» (1845)."
hints:
  - "Concepto: la corriente es carga en movimiento; un generador mantiene una diferencia de potencial que empuja las cargas por el circuito, y las resistencias convierten esa energía en calor u otras formas. En un nudo no se acumula carga y en una vuelta completa al circuito el potencial vuelve a su valor."
  - "Herramienta: I = Q/t; R = ρ L/A; Ohm V = I R; potencia P = V I = I² R = V²/R; serie R = R₁ + R₂; paralelo 1/R = 1/R₁ + 1/R₂; generador V = ε − I r; Kirchhoff: Σ I = 0 en cada nudo, Σ ΔV = 0 en cada malla; RC: V_C = ε (1 − e^(−t/RC))."
  - "Documentación: OpenStax Física universitaria vol. 2, caps. 9-10."
exercises:
  - id: intensidad-de-corriente
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Por la sección de un conductor pasan ${{Q}}$ C en ${{t}}$ s. ¿Cuál es la intensidad media, en mA? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"Q":"1{,}8","t":60}
        answers: ["sha256:2e8ea65acac1bc1e22c2014743318219bce467557a424302d554474b696840d7","sha256:11f65599b5c4e9b576e5c0a3a5990600752066c5f7bf747241db37bbb0ff3356","sha256:d6c7b01b7da442ad590fe2a8308e0884d06ec0a2429f69f67bc30ea42bc6970c"]
      - values: {"Q":"0{,}5","t":2}
        answers: ["sha256:8c935f982992aa9e7b3ea95d80f9ea8e7a815c4a648e83d7e931da6bba5f2f23","sha256:a9469d795f97e9b5d245ee24301a61f8a84a61917177a6e474a12305d1fe2e1c","sha256:a39518c25ec7bb92b4be284636bbb12c77297609e5bcf3aa170e5d54fe9d1c64"]
      - values: {"Q":"36","t":3600}
        answers: ["sha256:24f8bc2c88900754521f7c7a56b4a1ac2dc685654d5418eb2a57ce6ab66759b3","sha256:921384a0ba4524aa1c39004320532ab84bc400078c20b750bcbb87dd7dc84ff8","sha256:4618762b21d4e297d552c7fb4de1a51554c2df867fc43b3e1d495bc558d2e816"]
      - values: {"Q":"0{,}012","t":0.5}
        answers: ["sha256:0bc3ca0c9328bdb24f419a1b986765924af8a215cfaa358ff6da9cbee0509f76","sha256:cab735cc08d840f4966e22dcb7cbb926b127fe073391701474196eeeb8284a11","sha256:d4bf1c00e8fb45a667477bcfb7aec44e1bf5b9752a9707727c0e8028766e4b2f"]
      - values: {"Q":"90","t":120}
        answers: ["sha256:f69677c86f5deed64e51e684c64e76ffb5828273cbda7163f83977a7ebfbd3db","sha256:5e4cacfab4b27dec7ed73ee46c70a1a48a59ca6c7a11d4c28fb4d0abf3d13d87","sha256:2e1379469ca63d55631e9d0ad29ca0d96d3167d0e777086760288f8007a1db3d"]
      - values: {"Q":"2{,}4","t":15}
        answers: ["sha256:a039a5f5faec41c6b72ce482d41bd078c50d8d918bdd5d20d60a490fba60b551","sha256:15696b65c058b24b9e302aae5cc2349b60e1b1c21525e77d50c14cc9610c6db0","sha256:453bef390063ac53b849bff7134e022848179e8d34591d79a64c65adbc734ce1"]
  - id: resistencia-de-un-cable
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la resistencia, en Ω, de un hilo de ${{L}}$ m de longitud y ${{D}}$ mm de diámetro, de un material de resistividad ${{rho}} \cdot 10^{-8}$ Ω·m? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"rho":"1{,}68","L":50,"D":"1{,}5"}
        answers: ["sha256:14dff81b0acbf8f227b67885156bbe8a4c9125babe5dd7fbe7c2309476d247ec","sha256:807a0ab3b8c7b706ff55e4ceed24ac6226c7f0c24ef7fb1775aabfb691666004","sha256:3db185c0dfb52ab5d2408a1a45bdee32729d7273674d2ef8853f5131bc60d46d"]
      - values: {"rho":"2{,}65","L":200,"D":"2"}
        answers: ["sha256:62a0b1f2c26f013800ac607af4d5769b0ee3a0777871cd220a2cdea01be879ba","sha256:9769ce955c4c8ee09d751dadbadc6b217fd24f3bc947ec2d4df5c1a895e8bdb9","sha256:ae5c4cd2e69de66cbbda9c3858eb5f29aa25c7a42b5f903ae4838c50e65f0eba"]
      - values: {"rho":"1{,}68","L":10,"D":"0{,}5"}
        answers: ["sha256:be9dd08d31d6ad9326705e5cc8cae97f2cc9a672571cad115c69d6443a581135","sha256:a5fc15ac23761ec2f4aab56cded6f0e7e09c5866d615ae8a064e7643ff25d924","sha256:656cca777d04123a56f2e208d95f636ca4b3713f5cb55eab199e3af8ce0af607"]
      - values: {"rho":"9{,}71","L":3,"D":"0{,}8"}
        answers: ["sha256:bc43889e0f88efc8beb2c8aaef4e4533865288e4e726768dc929af9473685397","sha256:cde2afbc6aebe5ebb135e897f273f4fc6239bbedd0ea897f83be3a59de6ecca7","sha256:f37d948dc3919c2fda3083ffe235af9d2b9ba208d6e4e946c949a6eaf3cb4738"]
      - values: {"rho":"110","L":0.5,"D":"0{,}2"}
        answers: ["sha256:67a40565d041782e630c398fb17d26561733c6da9f21637cc9b081771c1c817c","sha256:7a2c27ddd2c84ca4aa47b63bee3f431bcc29f9262342474b2d1e55424cfdede3","sha256:aa1a495f635bb11e0160fbe02d27ce4961d63f586ee693f2c2cf1df2b92b6e88"]
      - values: {"rho":"2{,}65","L":1000,"D":"4"}
        answers: ["sha256:25aed8db75693b21f50792b6a841f6096e806b6fadb11ca09ad4ec1710d9deed","sha256:0241016adc799ee9e6800a70a0b5b31ab95f41a8d9bc4316eeab520901407d86","sha256:bd552ca2a1b09d7d22253b602a6344305a0fd3109b53490100b939ab2f4f0eb3"]
  - id: ley-de-ohm
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una resistencia de ${{R}}$ Ω se conecta a ${{V}}$ V. ¿Qué intensidad circula, en mA? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"V":"12","R":470}
        answers: ["sha256:a67eebacddce99695e343d74f8fc14176bd87531b0b16810f65f178b14ac6bdf","sha256:42320c982b1f00b52e10098a7c6c47b10a58b8ab7c20a05d4f330c1568de73ab","sha256:7425a4db77b3c0480c0b96a4650433aa2f16a72e60d3686087de1775aea66171"]
      - values: {"V":"3{,}3","R":220}
        answers: ["sha256:f7415ed97ac3fa933788f3976d5a903ca3fadb32e32c717ba968d18e2fdc8df3","sha256:7a79d636a391b30d9b3fce5b9de468676d65dae52be0f20a82f7178e0c641ab5","sha256:c46c15a091c898c6663775614446519cefbaf46eb79e972c41b3e586e059ad52"]
      - values: {"V":"230","R":47000}
        answers: ["sha256:9757128f5555b11000b43635da18bfac168976e1ff7a78de21b2f3223cf64a6e","sha256:33607494d67865fbf4dd6633617e49333d934af7396396f7522b9f978e43c2f9","sha256:d15a73766236fdf9d9bc89efc8828ec4bcb1cf10724a3b148c709768c002210c"]
      - values: {"V":"1{,}5","R":68}
        answers: ["sha256:bb086e0e987bd712c2479020a06c3abaf2696a196f541bbbe36db2bc788038cd","sha256:a5aaf27ce87308b8f91b21b7d9466237d54e69b7b42672dce1ae5067da14052a","sha256:c23f0945bb1f7abc9402161fecaa104957e5e205cfc07b93ba96fa034e0853a4"]
      - values: {"V":"24","R":1800}
        answers: ["sha256:2cbfcb4c277167f0a042706b205e40e3caef7cf99c4cc47b568ef9e2aec4fd03","sha256:c0f1977107d1e8163f01369aaad48f01f8f80c8f2426db6cae9df5e85b1e6675","sha256:e5f872664c8da1859938606c17dbafba2f33525cc254e9e7382625b314770d61"]
      - values: {"V":"9","R":330}
        answers: ["sha256:d4ac95d704946c029ff1e17ae567c49d99dd4bf8017599a01f194734ffffe4fa","sha256:c4b85d5168a06c544cec2593bf3a48d56065bed68992c4b6b7f584f31d1f9e7f","sha256:dc18376c669a73d7ac2c85729112d955e4edf0f16e4971bd66681d486e02329d"]
  - id: potencia-disipada
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Qué potencia, en W, disipa una resistencia de ${{R}}$ Ω conectada a ${{V}}$ V? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"V":"230","R":"52{,}9"}
        answers: ["sha256:4dda6881afff2621eec5a8d6a2bab1a3e7ecbc5868241fbe47a9f6ac833d4688","sha256:a15a43599ae53ff9f1dc93ab19a687c0d870fdb4efcac4721bc1d997edfe613e","sha256:cd350117e972f3502173f8f81609860d9f01880b97fd9f5325b7494e4cd637bb"]
      - values: {"V":"12","R":"8"}
        answers: ["sha256:c3bdb4e59a8b2e6ffe067ef366667bd1edd2b52626843f11b10263f6890b90b1","sha256:27c03b6b9f17e7222aea1c7875150980b088dc0da6f56baf1f15fbc64a48dd89","sha256:de47261d67eafbe80b48c7c1581bf47c5e611b4bb3684837e05c0c55bb776536"]
      - values: {"V":"5","R":"100"}
        answers: ["sha256:89bd02e4367a0869e302e5810cfcae16f52c8fccbc67af5339f3e0f4c7d35c2b","sha256:517585b124ff96c53136ea2af989521f6ced0d5cf6e42429afbd68b0bba3ecf8","sha256:6bca78eeab9d2d309991a163fb78da7607499121c1c90ab529f7fef85d2e985e"]
      - values: {"V":"24","R":"6"}
        answers: ["sha256:53d44722f28084c67c0d8973fb82034e356557b51fdff8c7616a88dc5a69b238","sha256:477c146108af3d877a53f9f62de398e1f2915ebcb1d3a6f1fd18995dae3f639b","sha256:192e026a271a517b34a2bb804ae54113fe6121353f6e8c288f9fc3f24c22a516"]
      - values: {"V":"400","R":"1000"}
        answers: ["sha256:7c53b5447a6457319ba4eed3fb24a18e6b6cd44c8081706762da51bc7d0284e0","sha256:38043ff0a756c9284db3fdd83634af11d32d9919f6ec07b231b2088bbcaf7e9a","sha256:1581463eda60a162c950c9a30b8b057c1a01c1b1944dc9b2b3f19ba1f2066a49"]
      - values: {"V":"3{,}7","R":"2"}
        answers: ["sha256:23c82f24da8b0760817ba0b68ca945ee26ffe6e95b39b151d14359ab93d591a4","sha256:4061f9fd5afa4831146695fcc87289d7bc3d89f2c5c0919e245f7d2748e5c752","sha256:0dcd498c63f9ddda84871937b6a4f3a9b02eb8b41c039bbe66b6fbbc264937bd"]
  - id: consumo-mensual
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un aparato de ${{P}}$ W funciona ${{h}}$ h al día durante ${{dd}}$ días. ¿Cuántos kWh consume?
    variants:
      - values: {"P":1500,"h":"0{,}5","dd":30}
        answers: ["sha256:cba57ff0466ae0d63c04c4d18d0a78004eb9d0d9a671c20b6b34043a9eb0a62a","sha256:957a30b4a1daf287dedf517d8ff1ba1e4d7d7df2975e6901a3893ca804853d1a","sha256:cb3f8b202711c9152de38073490d6723a4f0101019f540c7c233269fc16d45af"]
      - values: {"P":8,"h":"24","dd":30}
        answers: ["sha256:b0f2d4865abce494e2bb3c76b2413fe2e01afea1e172fe1f9c0c282c7f101a46","sha256:b1a87e75ec21e456fcbff5d40b5350eaa71f79cb3829e34a652f3a14bea0adb9","sha256:128af1b524953c53000ba3575945e88c4fa8d478596035962be5a0f8a720d43c"]
      - values: {"P":2200,"h":"1{,}5","dd":31}
        answers: ["sha256:655ccc4fa90e47e7c2e79c9df33cf6f63880d2c0bfc79ae7f9827282d53b89ea","sha256:63f82523bd1cfa6e3f349a53a0d2717b4424fc04fff78d6e78fcfeafeb327b8f","sha256:fbd5bc991f8d187916fbf490282fdf7b8616f96d44a474eec935dbe1dc79254c"]
      - values: {"P":120,"h":"6","dd":30}
        answers: ["sha256:8d36e204c126592678b71097b950ff0040891e7f18d119afe3f4b3956ccce516","sha256:9d5c65d5d91864757ac3ce9053c58381fcc5e612c0219ea2a39183d0468c948e","sha256:6525b2717191bd25b817fc07cf0fe3542280af3677b385bd7ed85474ecb57a24"]
      - values: {"P":45,"h":"10","dd":28}
        answers: ["sha256:978a2a96a441734bbc93063fdf80b313f79e8c085ee976c7fc468468d6cb0974","sha256:e7f55a152e7932b42b380dfa3dc37435a1a4e3dbdb1f0eff0a96ea26a7f35122","sha256:1cb562421101257a29fadb39051da26c893830ba956dc5aab5cec82109f16f52"]
      - values: {"P":700,"h":"0{,}25","dd":31}
        answers: ["sha256:516cc1e634501ae08a85d1f4c5418c72249d9e06939bf39b510afe525e40cb12","sha256:08d1531c0926db9c9d31d62233e3cf4226189cc5920f2088e1c6a9a59bfe8e1e","sha256:0fe0016948668d831ccfbfb5bb5f4e5af20c8292e3859bb862a8cd417b11d76b"]
  - id: resistencia-equivalente
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una resistencia de ${{R1}}$ Ω está en serie con dos resistencias de ${{R2}}$ Ω y ${{R3}}$ Ω conectadas en paralelo entre sí. ¿Cuál es la resistencia equivalente, en Ω? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"R1":100,"R2":200,"R3":300}
        answers: ["sha256:5601e8f6b5691279eed76ce4d329a457c14927d6da73baf0e9b366028883cf7c","sha256:0f7cecf2bd5a27f29adef422556d315b153f7db781606fd4e1fd17577e8bd455","sha256:8f728ac0e07f38e89ee087c3adf1eb2fbe936f812607d488d721ac26e4cb3fe5"]
      - values: {"R1":47,"R2":100,"R3":100}
        answers: ["sha256:acbd87b4434b21bf5d5326a7b81ebf746791e0319eb6f4368a2b3a0c3637ac37","sha256:5bf0453f4a9f77767874e99feccdff372d807820b4ff00059cb22ef657de3df6","sha256:a021099b0858bbb09ff354499b213db2a38b034b9507430e537bc851fcbeec9e"]
      - values: {"R1":1000,"R2":2200,"R3":3300}
        answers: ["sha256:0caa27c3252bea26ce8cf9a485a8b8a3d911596ccafd8d9c9a94eb338c091dd8","sha256:952818fb8d8608a43d0e9637e602c180f7fc9e3b4f5439400c5c4db082591c42","sha256:6dae52f675757a9891dbf4000415b80ae75dbc401b83062226bbbebd7fe7b6da"]
      - values: {"R1":10,"R2":15,"R3":30}
        answers: ["sha256:3970a9c10be12318a75410f971cd89325f52edf8a89c1c44be2d9c161e6d1caf","sha256:243ebd7b66306071fc4dc7e4e8be6cea54c040923dfd6f27b5805c192b3450e1","sha256:4cf972729a531c1de156101391ad5e1ee197407eccd83a88c073053f64651fc7"]
      - values: {"R1":220,"R2":470,"R3":680}
        answers: ["sha256:d915bbd0f5d3413d428223d54eb081b3c8c42209bf14b9744bb9602f630f8759","sha256:e636c7a2f51da5c02101e1280f6040566b50c3056ee47e4154556937210f7a1d","sha256:4fc542a8c9a5e845c3cbf4a08345ffb1bdedbf4a7f7183c899700a6ab4e2d20a"]
      - values: {"R1":5,"R2":20,"R3":80}
        answers: ["sha256:73ca24bc922a74ce9699c3101cc6a0ec7d064264f56bfefb90519d042b27b0d2","sha256:4524c6fc977fb9cfbc054282adf380cabca17c617330ac4518ce622572f508f1","sha256:98abe2c187f528167ad2eb5134da07a1a184a0ed99dc6f545550238256aa368a"]
  - id: divisor-de-tension
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Dos resistencias de ${{R1}}$ Ω y ${{R2}}$ Ω en serie se conectan a ${{V}}$ V. ¿Qué tensión, en V, hay entre los extremos de la de ${{R2}}$ Ω? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"V":"12","R1":1000,"R2":2200}
        answers: ["sha256:da328ae028a167cb46121eb8ccac4a014939f38838dc3da68582e50a4a054880","sha256:21ec9b37c4922bee01a81982d686de84a565772fbdd1865c4bfb6d48ebffac6d","sha256:ab457961d0d2d27a823f9896882adf46cd043155d64933de5e091fcb1e16401c"]
      - values: {"V":"5","R1":4700,"R2":10000}
        answers: ["sha256:a90ffc13d89625674dcd67b1189ad42b927ed06786669cf43caf6405469d689c","sha256:a262f372c166ebc51b99e0cab68f909d98c71b850ede705ced69a12fb3a9bf66","sha256:7315c0d188f0eedee20e152b7a02f391857de84e47d113d5e118bd8895bff166"]
      - values: {"V":"230","R1":100000,"R2":4700}
        answers: ["sha256:d0b43cd5f4c72cb0fa667fbae1816ec21d82fd5801c6eba63b450c8a0e8e4b73","sha256:ce535c0ff6a209852e8cda78b5fbab72e9085b86c83a668c98655c06a1e75939","sha256:2ccc631356e6c5b0bb4604306efff2b300ba003c14aa1c766d4f4b8926dd39fb"]
      - values: {"V":"9","R1":330,"R2":470}
        answers: ["sha256:6517dc1a71de5a76c6ad9df51d73f92d24eeea81e8036555148822debf8a7367","sha256:7179fd5c30f4f1c7c40b972e56f3fd69eccb40389bd934efcb48053521b8a2dd","sha256:152f7853b0d0a2040d39e1ecd7bb7d8b6eef44b52d602d6fd7f30dd141a21856"]
      - values: {"V":"3{,}3","R1":10000,"R2":15000}
        answers: ["sha256:e5946013aafd7fa6fbadc41f9ccd21a41a68f99e06dafe7210fdfc1ae749f36a","sha256:3d8f29e988b76855bf2fcc872764e3dc6d08e84e8127cc86a97e1ba366bcaf91","sha256:3d2939eea54346d5e5f62a5f0a3ef0da5ef9faa5e8bb04d4d6992637a942f153"]
      - values: {"V":"24","R1":6800,"R2":1200}
        answers: ["sha256:90cffbd3d4111cf21e410597d419d65b478ba55d8d832298c7ebd679b59d541a","sha256:b140b4d70b6833100ed57be61c9aef8c3ddc5edd27919e989a514298f4955ecd","sha256:94c6ae3ae9d329cb3ce92c7a63f35144784e16b221ee3195e03b098e31f2df68"]
  - id: resistencia-interna
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un generador de fuerza electromotriz ${{eps}}$ V y resistencia interna ${{r}}$ Ω alimenta una resistencia de ${{R}}$ Ω. ¿Qué tensión, en V, hay entre sus bornes? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"eps":"12","r":"0{,}5","R":"5{,}5"}
        answers: ["sha256:848400c5d576d5d77bcc848f07d3cb97f46be509e6fbda5668a977f3baa4e310","sha256:125f298738cbc244560139180372a021ab9a95658bbb3bcfd6cce7c0dce5c9b7","sha256:58cfecd608dc96342b4b6ab22bffcd8b65e69079c01298cb0a099889ea03c598"]
      - values: {"eps":"1{,}5","r":"0{,}2","R":"2{,}8"}
        answers: ["sha256:9377ea0af2359ecd742548ed4f9521883be9e10e2b9320bcbb7c4ad1d0e28827","sha256:73644e5b67a956b663f708a062d7d81d8c15cf8e1aca39b7b0c5fde06d301bbc","sha256:8aa9a0709344755fb697c8a68f38e2dcef47614f083655408cfc017796b385d1"]
      - values: {"eps":"9","r":"1{,}5","R":"16{,}5"}
        answers: ["sha256:b9248295942a5231a89636e16e7a0f8328fd6a9f21947ca682891776b7a04957","sha256:0e41f6b5ca7a8535c7ea04b05240ab52dd3d0a9fca36bd8095dfdced15a4b525","sha256:9397af4ac8e2b859416b8297ca0fee017eb6f2b94046464587abea14c1f1d26b"]
      - values: {"eps":"24","r":"0{,}1","R":"2{,}3"}
        answers: ["sha256:5191f10fb947603c5eb8465848289a5fd9b7ace498a65b01a571da4eef911020","sha256:0c628232e5f97333f54f3977975dd4867c429b9a03ee718467bce1932d4e8069","sha256:55a4fa596a3a12ebbc2391c8a2ad74b4c8f8392b6ee1538fc1c4b5456fa0d8a9"]
      - values: {"eps":"6","r":"0{,}8","R":"3{,}2"}
        answers: ["sha256:98adeffff026b970b498726377c329303ba088a5691c170129b89064c9004929","sha256:65d47be2626174fcb00495cfa1501e9be1e8c650d543fc11c9c010e0ce0f3df5","sha256:77c344fc456764c2c03a29cdf4b79087c44330462744eead16f6eafea2ff3705"]
      - values: {"eps":"48","r":"0{,}25","R":"11{,}75"}
        answers: ["sha256:644a49b3e684e5e9b6188f9da53fe772504a399a887430826a69e6e6e69a30e9","sha256:8ad16b85242930e87bcf0fee3d8e91767c42db37ef14bafb63d60e3b9a1a574d","sha256:304f1d808d081e3859d3d6c276a8154b4797fdb16267a4c0a87c16fcc8c5c422"]
  - id: leyes-de-kirchhoff
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un circuito tiene dos nudos, A (arriba) y B (abajo), unidos por tres ramas. Rama izquierda: una pila de ${{e1}}$ V (polo positivo hacia A) en serie con ${{R1}}$ Ω. Rama derecha: una pila de ${{e2}}$ V
      (polo positivo hacia A) en serie con ${{R2}}$ Ω. Rama central: una resistencia de ${{R3}}$ Ω. ¿Qué intensidad, en mA, circula por la rama central de A hacia B (con signo)? (Al menos cuatro
      cifras significativas.)
    variants:
      - values: {"e1":12,"e2":6,"R1":100,"R2":200,"R3":300}
        answers: ["sha256:161733e7611b5186aa01f18fe3fc0e93289102d0ab3574fa47abed692abcaf80","sha256:70abfe01a1989bbc81048b1896f0bd61d8431d94d90e83b273feec2838b8376a","sha256:7e414a6d59b204197b1c65d3aa55387e70d9f96e7b3c7f650f26d630a80958cb"]
      - values: {"e1":9,"e2":3,"R1":220,"R2":470,"R3":1000}
        answers: ["sha256:b1b665e647630e16033b6f9cbf1b87e9dc8cb4c5eac1c209f11b2596f0dd5f0c","sha256:978a0f191227a3fc0fced309e21428f1d9ec32d6c0b139fc39a2c1f10ab5b801","sha256:4324ebf2db7d299db4c5e48ae943448c824b7a351620c510cbcd60f1687ee3e9"]
      - values: {"e1":5,"e2":12,"R1":1000,"R2":1000,"R3":2200}
        answers: ["sha256:6b793cfd7805f1788abf73ab188261f73742b3579e2d65681d54ce248ee6e6d2","sha256:a2b8ae8f4ac2ec47d681cf334c2d891941b19e0be9ce0ca15e8d696c5196a25d","sha256:e58954a6d05399bb2778714f3cbcd05d573385fd110992fb3535ff2dc1216653"]
      - values: {"e1":24,"e2":12,"R1":50,"R2":100,"R3":150}
        answers: ["sha256:d2a4bee32a054881cddcccb71f84a91bfee0c73e73a901f0cca7b6e1d0c41b45","sha256:4bdb994a9daee03a72472892bc3d480655fde4d76ab15be14f0e706bf0930df9","sha256:5ea7bb00b8dc00d4f1d70fddc7de2e180485705f5edfe24fbe4377ab6c3fa106"]
      - values: {"e1":10,"e2":4,"R1":330,"R2":220,"R3":680}
        answers: ["sha256:5ff8a2d1f86c32ece19c14fa315f192e44a0b4e6be112b1cabb095f5a8d7589f","sha256:766b38df238fa14a49f2678680ac69e60d753ddc3981c69ecf22329466eb0d81","sha256:4b07ea643b91393be60653254d3ea3023251775669f26f6729964b47ff97cf89"]
      - values: {"e1":15,"e2":9,"R1":120,"R2":470,"R3":100}
        answers: ["sha256:ba66829b22a6c32037f5a101ab68f7a0e8406fe59265391514528911c3d0d5dc","sha256:f30de461e223265aa1deb852071ebb132785783aab41943b1ac1ab01edca1aac","sha256:0f3a204cd6ec342a1627311dd96159f9ea3a608100064c5e2c3c991be1894c7a"]
  - id: carga-de-un-condensador
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un condensador de ${{CuF}}$ μF, inicialmente descargado, se carga a través de una resistencia de ${{Rk}}$ kΩ con una fuente de tensión constante. ¿Cuántos milisegundos tarda en alcanzar el
      ${{p}}\,\%$ de la tensión final? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"Rk":"10","CuF":100,"p":"50"}
        answers: ["sha256:110417025a9c2463e4550a3cd0f8f32255dc99d84139ae278453f6dbb4bdafd0","sha256:4d02dfff35898e785a9daa53ad674507a7410c099bb6d9b4e3781452df8907fe","sha256:6ac72c506811a720da3fd9119b012bd75e62afb9ef901af6379ee90d5f28dfbe"]
      - values: {"Rk":"4{,}7","CuF":220,"p":"90"}
        answers: ["sha256:0a74f0d98c897f482c36ea2585fe3885d8b142fa4903b52d9a73454d54cd3941","sha256:6cf85be6fd8eeae03503d12ae6bce5b79a9c285a8e30491adc75f95a5f071d45","sha256:cfa6d6bd083eab916f2576882b52b28dfe8d9e669d00ca8b6f83d277e5057c04"]
      - values: {"Rk":"1","CuF":1000,"p":"63{,}2"}
        answers: ["sha256:84e1c5e453f407dc0a954ef1a28833fa597aebc16ad4383319111003a29ae375","sha256:971514a7de195e3e1e005623f63680ed14c396ba5c7c6ee25e050460d4ed0eaf","sha256:c9cfdc473b0d7967461bf6447efdb7390093bf9bd2b33abac3255fd451c65a23"]
      - values: {"Rk":"47","CuF":10,"p":"99"}
        answers: ["sha256:7755b5223da83c74b5ca29bc0b90c21793ae59c96de72406d0b47b1a4b71b680","sha256:93f2c432b720fbabb0bac5ec0eccb239db04878f8c437b5c2e5b5c250b4babf1","sha256:3db6f0c844eb64c4675c417a3984a9ae5f51b5c019f43862d31ea38050400d67"]
      - values: {"Rk":"2{,}2","CuF":470,"p":"25"}
        answers: ["sha256:5a24172b179f72bcde6324d817623a6414bf7109672066ab3c6933197cd31ec7","sha256:ef4f93da7bc0f26c709902588a895b8487f5e67f3b60a5ee8aef5dcdd6d474bd","sha256:bd5271555d4f1fb931ff5c71263e0eaa549af859dd60e9a129310340e7d88141"]
      - values: {"Rk":"100","CuF":33,"p":"75"}
        answers: ["sha256:c426a054b094800002b90dfe6cd44f84a4272e2a8d47b2182ab2a425b2131bd1","sha256:e042d31c9deb917ce29541a9d390ef05fcea32a4c3fbe78b7c43be2dfc718d02","sha256:e78b442d94d0f81240575fd8d6899b3a4963f5a4c82f4e58c1d59ab2645dcee0"]
  - id: intensidad-de-un-aparato
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Qué intensidad, en A, consume un aparato de ${{P}}$ W conectado a ${{V}}$ V? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"P":2000,"V":230}
        answers: ["sha256:b1e0cfc75036ebc1f769334b3e1b48ad5063398ab8bb808be2c68e09bf20a9c9","sha256:66003ee0196689e93d4b507b81c9bf1e6ce82991a160b982c544dbd9e419fdd7","sha256:9b705ad3d2e57cfd5cd35fc8297cb41cf59d65d3da4c686455c94492931386bd"]
      - values: {"P":800,"V":230}
        answers: ["sha256:6abfddf47395e5645a5007ea10bf04c7145165dea8ce17fb673718f003e54add","sha256:e24314c15b6f4077d8f5d208f938694b09e65579be8543e3df736ebdaac55b51","sha256:b6b7ccea849732ec3c1c38dae6bac846cc4ff34826d561858366ac21493a3f43"]
      - values: {"P":3500,"V":230}
        answers: ["sha256:1f71f66e3a99b4d11c2965428fb23772fc1b41acd7d59b1bcb94fe880b0ee2c7","sha256:78bb90a8eb12f695fd506475beb4e6e4b923eca7ff4d3600a8f39092ec87ce88","sha256:183a79db3a48f9571283eb7a5c3d411904ec4c20ddcf61d91ff906ae74c16bee"]
      - values: {"P":1000,"V":120}
        answers: ["sha256:b450e4900eb6bbd30e89a6b70970f824f1b4671a1aa2b8024381701c98c19fbf","sha256:ec3c2c329cad4ae7dfa829e9bf16e7b05ec8fb5f5e7fc0813e995ac524b08276","sha256:7820c1c30106536b0ac67d989487b78bb5919cbb6c233dd44fa11ac025590186"]
      - values: {"P":48,"V":12}
        answers: ["sha256:d13d0d2b15fd42af7f8e4f9496bd4b958cc4ec095e55dfb885fad6201c216a71","sha256:80e6d2748501d9e25596bba2763c165191f06ad54cbb3219eaa29749e2a94f3b","sha256:5366b5c5ccab411c2c99d91a98a8d7d8bfbf6e841fde3cd26a6517fa175fdb5b"]
      - values: {"P":2400,"V":400}
        answers: ["sha256:62736ac5c83d4a342352f283e00432dc4f376da2e9e6103e6e441a8ae439bf99","sha256:dbcffd478144fa799f02810e0f0332af980f88c1fac4628723899d041d207607","sha256:b272cbfc736f952d02e287257e55844e421014f47520d0077f3ce8916f8b12fd"]
  - id: circuitos
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica qué es la corriente eléctrica en un metal, por qué los electrones avanzan muy despacio aunque la luz se encienda al instante, y qué es la resistencia. (b) Enuncia
      las dos leyes de Kirchhoff y explica de qué principios de conservación salen. (c) Explica por qué en una casa los aparatos se conectan en paralelo y para qué sirven los fusibles y el
      diferencial.
    sealed: "gz64:H4sIAAAAAAACCn1Uu44bOwz9FWKQwhYMF7d0cIsU2+RulTZzC1qixwQ05CwlGfEG+ZiUW2x1P8E/FkjjxzpZ3GoeEsnDcw75vUsaS2aVbtM5t8Clc/AgUARGyhhhj0egSD6bCiWIvDVKHwEj4BTZo0ERhEyS+PSfAE5o5KnGexwnBYqnF5+NvQIJZA31F3jcRoKFx8SAEBEOFNVzwACB6ncsz0s4tvsJoqa3GGicmJ5RACGQ8QHtkuN51QsWeSoEqbzJOVLgehnwgOIJErWvnaH33HIGgpHj6XWkbAqTGiQaigRdwyOCcyytxYDBOag8IHi0AaHWwmx4YErYuEjkfePizyxGiVMm8YzOwchzrzpp4jkEI0yYtJf5xKsZk2Ta/M6B36tHAa/STq5NRASjAEfwFEiAhGw4vSIsaEc+K3zWEmn5ET58gb+h722vfV9pgMdPH9a99OLcYls94NwjHVtGTSAlaHJuU9OnMuJcKd3wpcYDSTasRav8NaYyxUOpZqmh56gmD0YSWHiVRHbAuftz05XX5foNAkwwYoz4HoRUthww1Y7x9FrfAvVy8yNEhYg2aA3wBeNTYbJqThYFT2Y44/Rk+j6gC4mb6txJZ/1ijaly74q8vXzVcnmh059HakLDSFFX4DFgmxTMCkaety30CtrrOEXKeCdoq6MyG1dtRGAJNJGEpgAsEkOimnaoPtRVUy7QePqZIPFQSJZreIjg3K4k3kZyDhZtGkcchLLm04uN7HVZdc14Z8BeEkOz2IiJK2WDoQRatbaapLVcm+sEohWKx9hiBY4wmR70qczWYPEVtp7hBN6RzaQ6B4Ey+YyQ+A7AzWA1+72vLoaCxSzIgCt4Kvx8+gkIdTZPL204imAvE1lSwbpd5jZJ6ujzeVLTult1VrbGvtt8/d5540zG2m26h29t493BWv2xvOaVBDtrqNvtybSqcrFJnFfjCo6zutedUEtPRbKmbvPXj9V9can6Y/N8pOM87f+w+f1ed7uWKoFRxNkkbTG0x/vzBcffzP1/tT+XlHl3bV3oW0tHN0/DEejMztlctcBN1/vs//74BdA6wp53BgAA"
  - id: r-amperio
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es un amperio?
    options:
      - |
        Un culombio por segundo
      - |
        Un voltio por ohmio al cuadrado
      - |
        Un julio por segundo
      - |
        Un vatio por voltio al cuadrado
    answers: ["sha256:d91cc7273f27f31e951170ff2929cc9e2e71167f4b6651c61de2c10248b35015"]
  - id: r-doble-longitud
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica la longitud de un cable (misma sección y material), ¿por cuánto se multiplica su resistencia?
    answers: ["sha256:355f804ef339348d2d1faa5f5ff8646d926ff2701346844680222f7397515b56","sha256:bd40322dfd89020bc6814be087d5afd5b481f11e893349add77e362b3721a6d6","sha256:22f5dcf8ae5fae80f4f0bb46313fcce4388e74cc7193a7932e06b0705569a253"]
  - id: r-doble-diametro
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica el diámetro de un cable (misma longitud y material), ¿por cuánto se multiplica su resistencia?
    answers: ["sha256:4b02a714d2762a905b77d5bb38d110ff9299b52fcec8ee57d35935f3dd402855","sha256:5b9b9e91d3c3205af49edc4469a35b979b5fe6f2b3b90840dc26a50a0ed25cd1","sha256:27fe2980da02e22484478205b93cc6335dd1a8effad2831e7c2b756e6372d1b6"]
  - id: r-serie-corriente
    tier: 1
    type: opcion
    review: true
    prompt: |
      En varias resistencias conectadas en serie, ¿qué magnitud es la misma en todas?
    options:
      - |
        La tensión
      - |
        La potencia
      - |
        La intensidad
      - |
        Nada
    answers: ["sha256:324949b03ac69bce95924edcbac6a8be24557af3e4424bdc23a909dcc498d60d"]
  - id: r-paralelo-iguales
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la resistencia equivalente, en Ω, de cuatro resistencias de $100$ Ω en paralelo?
    answers: ["sha256:d04d96185f6cc66aa633696719746b0ece5ac43e07df413f4f56e21683506181","sha256:7d0ceed19fff28f560d539d15159761e61ce3cb4a867fc7d2d3179b252d8a6e4","sha256:6f4bd0962bea6141dc3a89983a770d30e3aa1c6d830247f4fcedcbf1742ef1ac"]
  - id: r-amperimetro
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se conecta un amperímetro y cómo debe ser su resistencia?
    options:
      - |
        En paralelo, con resistencia muy grande
      - |
        En serie, con resistencia muy pequeña
      - |
        En paralelo, con resistencia muy pequeña
      - |
        En serie, con resistencia muy grande
    answers: ["sha256:fa213f3789d85e887805a5390d129580382bf7680ce8aba621cf569846b6e879"]
  - id: r-constante-de-tiempo
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la constante de tiempo de un circuito RC?
    options:
      - |
        R/C
      - |
        C/R
      - |
        1/(RC)
      - |
        RC
    answers: ["sha256:6d5133d723a369215a67c5fdc0ed307314f0e6eeade522101c81dcdb0053e3b9"]
---

# Corriente eléctrica y circuitos: intensidad, resistencia y ley de Ohm, potencia y efecto Joule, generadores, asociaciones, leyes de Kirchhoff y circuitos RC

Al pulsar un interruptor, la luz se enciende al instante; el cargador del móvil se calienta un poco; el diferencial «salta» si algo va mal. Detrás de cada
aparato eléctrico hay un **circuito**: un camino cerrado por el que circulan cargas empujadas por un generador. Este nodo pone en movimiento las cargas de
[[fis-electrostatica]] y presenta las leyes que permiten calcular cualquier circuito de corriente continua, la base de la electrónica.

## Objetivos

Al terminar sabrás:

1. Definir la intensidad de corriente y explicar cómo se mueven las cargas en un conductor.
2. Calcular resistencias a partir de la resistividad y aplicar la ley de Ohm.
3. Calcular potencias y energías eléctricas (efecto Joule, consumo en kWh).
4. Resolver circuitos con asociaciones de resistencias, generadores reales y las leyes de Kirchhoff.
5. Describir la carga y la descarga de un condensador (circuitos RC) y la seguridad eléctrica en casa.

## Qué debes dominar antes

[[fis-electrostatica]] (carga, potencial, condensadores) y [[mat-funciones-exponencial-logaritmica]] (la función exponencial, para los circuitos RC).

> [!question] Test de entrada
> 1. Trabajo que hace el campo al mover $2$ C entre dos puntos con $6$ V de diferencia de potencial.
> 2. Área de un círculo de $2$ mm de diámetro, en mm².
> 3. $e^{-1}$ (con tres decimales).
>
> Respuestas: $12$ J; $\pi \approx 3{,}14$ mm²; $0{,}368$.

## 1. Para qué sirve

- **Instalaciones**: cálculo de secciones de cable, protecciones y consumo en viviendas e industria ([[ing-electricidad-basica]]).
- **Electrónica**: divisores de tensión, polarización de componentes, temporizadores RC, filtros.
- **Energía**: baterías, rendimiento de motores y de líneas de transporte, coste de la factura eléctrica.
- **Seguridad**: fusibles, magnetotérmicos, diferenciales y toma de tierra.

## 2. Corriente eléctrica

> [!practico]
> Una manguera llena de agua: al abrir el grifo, el agua sale enseguida por el otro extremo, aunque cada gota tarde mucho en recorrerla. Con la corriente pasa igual:
> los electrones de un cable avanzan a fracciones de milímetro por segundo, pero todos empiezan a moverse casi a la vez porque el campo eléctrico se propaga
> a una velocidad cercana a la de la luz.

- **Intensidad**: carga que atraviesa una sección por unidad de tiempo, $I = \frac{\Delta Q}{\Delta t}$, en **amperios** ($1$ A $= 1$ C/s).
- Por convenio, el **sentido de la corriente** es el de las cargas positivas: del polo positivo al negativo por fuera del generador (los electrones van al revés).
- **Corriente continua** (sentido constante, pilas) y **alterna** (cambia periódicamente, la red; [[fis-induccion]]).

## 3. Resistencia y ley de Ohm

- **Resistencia**: oposición de un conductor al paso de la corriente, $R = \rho\frac LA$, con $\rho$ la **resistividad** del material (cobre: $1{,}68 \cdot 10^{-8}$ Ω·m). *Ejemplo:* un hilo de cobre de $1$ m y $1$ mm² tiene $0{,}0168$ Ω.
  La resistividad de los metales aumenta con la temperatura.
- **Ley de Ohm**: en muchos conductores (óhmicos), la intensidad es proporcional a la tensión: $V = IR$, con $R$ en **ohmios** (Ω). *Ejemplo:* $5$ V sobre $1$ kΩ dan $5$ mA. Los diodos o las lámparas no son
  óhmicos.

## 4. Energía y potencia eléctrica

Una carga $q$ que atraviesa una tensión $V$ pierde una energía $qV$; por tanto, la **potencia** consumida por un elemento es $P = VI$ (vatios). En una resistencia, $P = I^2R = \frac{V^2}{R}$: la energía se
convierte en calor (**efecto Joule**: estufas, tostadoras, bombillas de filamento, y pérdidas en los cables). *Ejemplo:* una bombilla de $60$ W a $230$ V consume $0{,}26$ A. La energía se factura en **kWh**.

## 5. Generadores y asociaciones de resistencias

- Un **generador** (pila, batería, fuente) proporciona una **fuerza electromotriz** $\varepsilon$ (energía por unidad de carga); si tiene **resistencia interna** $r$, la tensión entre sus bornes es $V = \varepsilon - Ir$, menor
  cuanto más corriente da.
- **Serie** (una detrás de otra, misma intensidad): $R = R_1 + R_2 + \dots$; las tensiones se reparten en proporción a las resistencias (**divisor de tensión**: $V_2 = V\frac{R_2}{R_1 + R_2}$).
- **Paralelo** (entre los mismos dos puntos, misma tensión): $\frac1R = \frac1{R_1} + \frac1{R_2} + \dots$; la equivalente es menor que la menor.
- **Instrumentos**: el **amperímetro** se conecta en serie y debe tener resistencia muy pequeña; el **voltímetro**, en paralelo y con resistencia muy grande.

## 6. Leyes de Kirchhoff

> [!practico]
> En un cruce de tuberías, el agua que entra es la que sale. Y si recorres un circuito completo subiendo y bajando «escalones» de potencial, vuelves a la altura de
> partida. Esas dos ideas bastan para resolver cualquier circuito, por complicado que sea.

- **Ley de los nudos**: en cada nudo, $\sum I_{\text{entran}} = \sum I_{\text{salen}}$ (conservación de la carga).
- **Ley de las mallas**: en cada camino cerrado, la suma de las variaciones de potencial es cero: $\sum\varepsilon = \sum IR$ (conservación de la energía).
- **Método**: se eligen sentidos para las corrientes (si sale una negativa, va al revés), se escriben las ecuaciones de nudos y mallas y se resuelve el sistema lineal
  ([[mat-sistemas-lineales-bachillerato]]).

## 7. Circuitos RC

Al cargar un condensador $C$ a través de una resistencia $R$ con una fuente $\varepsilon$, la corriente empieza valiendo $\frac\varepsilon R$ y va disminuyendo a medida que el condensador se carga:
$$
V_C(t) = \varepsilon\left(1 - e^{-t/RC}\right), \qquad I(t) = \frac\varepsilon R\,e^{-t/RC}.
$$
La **constante de tiempo** $\tau = RC$ marca el ritmo: en $\tau$ se alcanza el $63\,\%$; en $5\tau$, prácticamente todo. Al descargarse, $V_C = V_0e^{-t/RC}$. Se usan como temporizadores (intermitentes, flashes) y filtros.

> [!formal] Con rigor: de dónde sale la exponencial
> Por la ley de las mallas, $\varepsilon = IR + \frac qC$ con $I$ el ritmo al que crece $q$. Así, ese ritmo es $\frac{\varepsilon - q/C}{R}$: proporcional a lo que «le falta» al condensador para estar lleno. Una magnitud
> cuyo ritmo de cambio es proporcional a la distancia a su valor final se acerca a él exponencialmente ([[mat-ecuaciones-diferenciales]]): $q(t) = C\varepsilon\,(1 - e^{-t/RC})$. $\blacksquare$

## 8. La instalación de una casa

Los aparatos se conectan en **paralelo**, de modo que todos reciben los $230$ V y funcionan por separado. El **magnetotérmico** (o fusible) corta si la intensidad supera la que aguantan los cables
(sobrecargas y cortocircuitos); el **diferencial** corta si detecta una fuga a tierra (por ejemplo, a través de una persona); la **toma de tierra** desvía esas fugas. Corrientes de unas decenas de
miliamperios a través del cuerpo pueden ser mortales.

## 9. Errores típicos

- Confundir tensión (entre dos puntos) e intensidad (a través de un elemento).
- Pensar que la corriente «se gasta» a lo largo del circuito (lo que se transforma es energía).
- Sumar resistencias en paralelo como si estuvieran en serie.
- Ignorar la resistencia interna de las pilas.
- Usar $P = I^2R$ con la intensidad de otra rama.

## 10. Resumen

- $I = \frac{\Delta Q}{\Delta t}$; $R = \rho\frac LA$; $V = IR$.
- $P = VI = I^2R = \frac{V^2}{R}$; efecto Joule; kWh.
- Serie, paralelo, divisor de tensión; generador real $V = \varepsilon - Ir$; amperímetro y voltímetro.
- Kirchhoff: nudos y mallas.
- RC: $V_C = \varepsilon(1 - e^{-t/RC})$, $\tau = RC$.

## Repaso: lo que debe quedarte dentro de un mes

1. La ley de Ohm y la fórmula de la resistencia de un cable.
2. Las tres expresiones de la potencia eléctrica.
3. Las reglas de las resistencias en serie y en paralelo.
4. Las dos leyes de Kirchhoff y su origen.
5. Qué es la constante de tiempo de un circuito RC.

## Siguiente

[[fis-campo-magnetico]] (imanes, corrientes y fuerzas magnéticas).
