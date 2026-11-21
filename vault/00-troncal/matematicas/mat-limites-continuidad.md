---
id: mat-limites-continuidad
title: "Límites y continuidad: idea y definición de límite, límites laterales e infinitos, indeterminaciones, asíntotas, continuidad y Bolzano"
area: matematicas
trunk_level: 4
prerequisites: [mat-funciones-elementales, mat-sucesiones-progresiones, mat-polinomios-factorizacion]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 7: «Límites y continuidad», secciones 1 (definición, límites laterales, tipos, asíntotas), 2 (operaciones con infinito, propiedades, proceso de cálculo, indeterminaciones) y 3 (continuidad en un punto, propiedades, tipos de discontinuidad). Apuntes Marea Verde, autor Luis Ángel Morales García. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_07_Limites.pdf"
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 7: «Límites y continuidad», secciones 2 (definición matemática), 4 (límites infinitos), 5-6 (cálculo e indeterminaciones, incluida 1^∞) y 7 (continuidad, Bolzano). Apuntes Marea Verde, autora Leticia González Pascual. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2007%20Limites.pdf"
  - "M. Spivak, «Calculus», 4.ª ed., Publish or Perish (2008), capítulos 5 (límites) y 6 (funciones continuas)."
hints:
  - "Concepto: el límite de f(x) cuando x → a es el valor al que se acerca f(x) cuando x se acerca a a, sin importar lo que valga en a. Una función es continua en a si ese límite existe y coincide con f(a): se dibuja sin levantar el lápiz."
  - "Herramienta: primero sustituye; si sale un número, ese es el límite. Si sale 0/0, factoriza o multiplica por el conjugado; ∞/∞ con polinomios, compara grados; ∞ − ∞ con raíces, conjugado; 1^∞, lleva a la forma (1 + 1/u)^u → e. Comprueba con la calculadora dando valores muy cercanos."
  - "Documentación: Marea Verde Matemáticas I cap. 7; Matemáticas II cap. 7; Spivak, caps. 5-6."
exercises:
  - id: limite-directo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\lim_{x \to {{a}}} {{f}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"\\dfrac{x^2 + 3x - 1}{x + 2}","a":2}
        answers: ["sha256:cbf7acaa994a11514ed39b09b378ff0fd05c854cd19a67684a6dec81b385db6b","sha256:f5cf8d77b612572a0b06e818125fe06067266f209da3885c52aa176600bdc243","sha256:4c1e1654bff066ae68ffd5a86a9a966fda7894852275cfda90d2d4386e32b563"]
      - values: {"f":"\\sqrt{2x + 7}","a":1}
        answers: ["sha256:f2fa16822177c900eafba5433ddf40e0a2b96283aa3105f4ed5b9500243939c7","sha256:c7403205a98a6986c866e1f049fa1bcdb179c9959f49545f84eaa98a17180a47","sha256:a3d31dc9d42135cf5ca2356a6f35f8c9bfd0e88f6a4a3ce43ac15eaa8c35dc99"]
      - values: {"f":"\\dfrac{x^3 - 4}{x^2 + 1}","a":2}
        answers: ["sha256:3c48ea20788abec4fd84f8a9ab37b568be71a9d1bfcc0bb932fc3cdbb173cdf5","sha256:5183d1c51807def77733aed1b813692d5cc1b7bd45c44cb467301d501ddacf03","sha256:54d63bca955e55036ace506ea7b137370c961b9dd9738cbecaaf135430103566"]
      - values: {"f":"2^{x} + x","a":3}
        answers: ["sha256:93c205b5a6b41e72deb1367d94c711bbd093fe5d4eb46173d9e3648b9333f928","sha256:bf34977316f7df78b536a1aec3a41c2c63fb646805ffcdd0b16986e8ace592fe","sha256:d11290e7c0e33535b6154eb206347635684e5d36ea3b27619fd4c25f4787c428"]
      - values: {"f":"\\dfrac{5 - x}{x - 1}","a":"(-3)"}
        answers: ["sha256:6384fa159fe918f8976552f44c89b191f5c21e0a19f596ff4bb03bc62076a051","sha256:a48b9213989611b07f0394f8525499bb9c102c9705cae2f58d6811cff162ded1","sha256:3dbfd896669d2eec5c8e8f5d7c12b4b1e7a53e21f9d76cd87565b6fd66859ed4"]
      - values: {"f":"x^2\\sqrt{x}","a":4}
        answers: ["sha256:96cdb3a222212659af8f1733436819b125929fb97e23b6180a5a51da9ff1373f","sha256:0356b5483acea7a24f2b997ef549f78353e325c9d117e3e9140871a8808d03dc","sha256:fb512009b157e9c814a3be71248042ad74e2994b22222020920fd15b3960f217"]
  - id: cero-entre-cero-factorizando
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula $\displaystyle\lim_{x \to {{a}}} \dfrac{{{num}}}{{{den}}}$ (sale $\frac00$: factoriza y simplifica).
    variants:
      - values: {"num":"x^2 - 7x + 10","den":"x - 2","a":"2"}
        answers: ["sha256:b75164f8d5a034226434d740be824258668e3cb50df705bc63de0f844c35dcf2","sha256:9b31141fc4ba380fc753a61cbc78446ee3b8c659fcdc8ef7f1fbe063eb252094","sha256:fc25033e2cad01d50f4b5bcb57fcdc97ccca1ba2c51ca0076cb68aab37802b2f"]
      - values: {"num":"x^2 - 2x - 3","den":"x + 1","a":"(-1)"}
        answers: ["sha256:bc0d1308291bd3ae7c1093c7fafdc1a30ad92657b4112385e48a4e4784b5775b","sha256:baa5b55780747d1395f8dac7c26c0264902d3dcbec0921ae277ce1025d55d9bb","sha256:a00259bdd15d43cb80e19c2f1478ed61851c8fa8c67703abac711cca88d169e3"]
      - values: {"num":"x^2 - 2x - 8","den":"x - 4","a":"4"}
        answers: ["sha256:9572950ad312868194c26be6dabc9729c638304e6f9c63a95e05837d016ecbc2","sha256:aa4cb72c5c0073d65c80d57613bf37fa29b53d4bc72469737eca51884c19629c","sha256:c4d5700130ebcaf2c134301af36008d1ec25c58de82d0592d8e329c8ce5247df"]
      - values: {"num":"x^2 - 7x + 6","den":"x - 6","a":"6"}
        answers: ["sha256:353375dd3399963d9fbeee5ed91c54a4881d9b1ba421539589b53932ffe3edb3","sha256:523591ce730a177d6ef4a8297d65ab78df9b2a448ebcc746e31f535b5b1358cd","sha256:b6fb5d344654d6c82d8f2fe09ecdfbc7194b26fcde31a19c807e72abb9dd89ff"]
      - values: {"num":"x^2 + 10x + 21","den":"x + 3","a":"(-3)"}
        answers: ["sha256:ee1deeeda0906e289da4aa614cb8447e7b7f9c233375b00e715e0a9d22ece4eb","sha256:c4f69dbd5e09da0239f7c6140302bde3b2ce77490e4c3d202a576520de806236","sha256:ff2e7390fa581e2de44744c19449def162b499e16d3e5cc551b7b19a5b1c4ae1"]
      - values: {"num":"x^2 - 2{,}5x + 1","den":"x - 0{,}5","a":"0{,}5"}
        answers: ["sha256:ac2c07483d94ced490a632cbf2b97b041fb07bf053e2014e21649b5deb74ff25","sha256:f34fdde903ace3d71135ada77785cd20815a8a0ae9bffab1adac41eed0b7acb5","sha256:ddaea71ab697570726efa2a379b58df2560ea74d1f96bb2a7d9d9dc9a18314a6"]
  - id: cero-entre-cero-con-raices
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\lim_{x \to 0} \dfrac{\sqrt{x + {{c}}} - {{r}}}{x}$ multiplicando por el conjugado (al menos cuatro cifras significativas).
    variants:
      - values: {"c":"9","r":"3"}
        answers: ["sha256:8f495ab4497182b0f571ca1542f181504ff126403d1f07dc69bf3e3713aefb48","sha256:0daff042a67d6a90f8ad2354ac7bdd4d34f36fd12b606770809f116066d701d4","sha256:7b84d33d5fb90da84471bf8e2bf6b1d749ed7dfcf155b80a95a67a468198b3ef"]
      - values: {"c":"16","r":"4"}
        answers: ["sha256:daa202d355d5a4fd5d32410151933f8511562c8ac0fc92020375aee92ef9a03b","sha256:872d0f0badcfca86dde3c19393aad29ff891565d40380bd9a59969aeb41ff851","sha256:03b411b251217e63d818178866c92d39159fd0c323ffe192981b22e6e8c9fc85"]
      - values: {"c":"1","r":"1"}
        answers: ["sha256:23bb1052eb0d6652c31d4e1f6e674631b32b1069cfc5f1a82840c149411ed12a","sha256:ef151cdbc4381abfdd225f4a111b9b142b3e721ca203e3842a6d57110d09d667","sha256:9951d0edcc44f06ecb3ebd1d5b3b9b005abd5962fb1153388a5e20c42ed160d5"]
      - values: {"c":"25","r":"5"}
        answers: ["sha256:c6b7c51a3b2d1a6ba97c82d03f8e476bc2ed4965c17221d90222774d2a398b29","sha256:adebd9cfb53190962c41f46706e29c290cd29a1efa45adefcd568b091e403ba6","sha256:d0d0a1ed72c8743d651449e581bc8a2282718fdc3c7bca3088f8e97cac9d9f96"]
      - values: {"c":"0{,}25","r":"0{,}5"}
        answers: ["sha256:a34a297d11106fc2ff22ada9653a1e8f850e011cfffb5d624e575fe4ac5dcf5e","sha256:545cfc3a37ebd0c9e2bf57c94366e1401495f1d401e207e39a12b044f4a0e7c2","sha256:f04b73de4aad0386c37ab376f27231e1fa63e97bc3db15a2e251ff354438524a"]
      - values: {"c":"100","r":"10"}
        answers: ["sha256:743dbddf651dca3e1f6293cdd1c225e42850c04f5b269f9d0862d40514dfd2f0","sha256:a33898c8969f3e714c96033712e59f84082e8143a8f8141b4cb002c86994f54e","sha256:8bb0d10fe26968acd338f7b4b8c2d6199dbe492f5ab8334b462fa56cbda08381"]
  - id: limite-en-el-infinito
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula $\displaystyle\lim_{x \to +\infty} \dfrac{{{p}}}{{{q}}}$.
    variants:
      - values: {"p":"x^2 - 2x + 4","q":"3x^2 + 2"}
        answers: ["sha256:4fec30438192ecce90095b86840d79554722f2dac72e5bc90e322627b61f01a4","sha256:56dbd2c17b0785c3feb5183ecf887e5132dfd715ed236810aea8284e7a13947c","sha256:c293e2ec188f41584de777ec3ec67dba070e6a4bb219b63afc67defcdafd09cd"]
      - values: {"p":"5x - 1","q":"2x + 3"}
        answers: ["sha256:c752bd78a8b3503d4bb350ab745a15fd04521eade0cce63fce3d5f8ce9bffd83","sha256:28d9821e4f3871eae11d9dbafa0d3065c2c59cbc7cdd5c9f40b67a8cd3fb38bf","sha256:47006d29bbae785a122d35543de7eaeadb5df210c559d7aa5cce8041b336b6df"]
      - values: {"p":"7x + 1","q":"x^2 + x + 1"}
        answers: ["sha256:93df73189eb6998fa0d0cd08152863f1fe47339b92d55706b1ad2ca708a7c77a","sha256:121bbb8d21437b11f101a794682c64aaefd2b85fa077550159d1a73733d22e92","sha256:c7ee1ae3ce683090bef723cc7ef879a8b06b16fb9bdd7a774a495fd192febea9"]
      - values: {"p":"-2x^2 + 3x","q":"4x^2 - x + 6"}
        answers: ["sha256:0dd39ac8a6f0ae0b6e72dd31c6fb11ef682ac0f9bf90ff319b82d3ebbba8bd58","sha256:62eadf305a9b0a417160a16c28e114038c5742f3626196a0f1c7dcaa3fe96e63","sha256:df2b45f7ec0eaa7df52ba9d2ab1d9fdae9b1bd3fd9d73abe14ad1d11d9891f1d"]
      - values: {"p":"6x","q":"2x^2 + 3"}
        answers: ["sha256:4d1ea1b97557cd22b1d5476195f7744aa9870adc1871985ace78894a80fb7913","sha256:94682d4310cf16e55edc8c7702dbaae11b51819a112c38f53d8904c171a54aaf","sha256:49fae10d5852f5833de3ba36ef4efd6a88f1460d75aa9033e23ec036cd648a4e"]
      - values: {"p":"5","q":"2x^2 + 1"}
        answers: ["sha256:5029ae64b34ae5a03484eb1343b81bcf478aa2ab3596d392bf44b74f7c6de6ed","sha256:901813911c947049096c097cb48d06fc28cca5c63efd6b19d31c9fd58fafae27","sha256:122b4b1fa070349325d5103aff352d0c0695fa9c168f0ffe2294fab87d99df3d"]
  - id: asintota-vertical
    tier: 2
    type: numero
    sig: 10
    prompt: |
      La función $f(x) = \dfrac{{{num}}}{{{den}}}$ no está definida en dos puntos, pero solo uno es una asíntota vertical. ¿En qué valor $x = a$ está?
    variants:
      - values: {"num":"x + 2","den":"x^2 - 3x - 10"}
        answers: ["sha256:b76b917e4bc43dd92209961c34ebc416b206d812b4e9081ec28f8c4dfede42ce","sha256:858b5ff9855d4f1030ca9131206c0e05be54a5b97fd31170df80e6198ef30242","sha256:1abd25e35d08436f8f713c71f6e9a4812df6d4585d1348d5598b687d3002091e"]
      - values: {"num":"x - 1","den":"x^2 + 3x - 4"}
        answers: ["sha256:c347aad281e088d1dd58ce4251f733936211aa658cb21efaea8e46b3bafcb9b8","sha256:1942cd791bbbcc5035911d6c038a6c9d8d0d2ccb788b7ef11f78febdf3f65dac","sha256:0e342df812dcb8883a45f012b6e190fb312a6924a696440a1fa50d27167aed89"]
      - values: {"num":"x + 3","den":"x^2 + 2{,}5x - 1{,}5"}
        answers: ["sha256:8c51ce70f0b781ecb4c995837b65aa615e399551b134d7f7a4241e3d15ae348a","sha256:646d2feee0e486aba75309ee1cbe6177ccc87aab2136d9a5734e98352fbe2aec","sha256:31c794c76d2749f6058f6ffce4839f8b2db3f0d78231d04f1d976b4b97b54ecf"]
      - values: {"num":"x - 6","den":"x^2 - 8x + 12"}
        answers: ["sha256:3ce9a3b2e7086739daacc42ca87ebff64df0b9b41f39c717b38844adc1fd99fb","sha256:45a9efa2297aa990941bf3b0a86a152a7e24dd4a6a69fd5a7ef52fdb252b663d","sha256:2f97c3c759a22a3e7b2aa52308961d6fb13ac3bbde9ebb9314c6245ebef3da35"]
      - values: {"num":"x + 4","den":"x^2 + 5x + 4"}
        answers: ["sha256:106ca4906a1b39a6f090c00ced01563c5c9030922d4af941701e412cb9db56c1","sha256:b82d9071785a2bdfe16100b1d884342b9f7d82874c0314e052252b22537229c1","sha256:1239d0a97953d57bf4e451c7d39059410877cc0f094cd4862f5588bfa1092638"]
      - values: {"num":"x + 1","den":"x^2 - 6x - 7"}
        answers: ["sha256:e8ac8b66e723aca05bb85a571c4a0523470f56ccfe8a88ab6a62a246e0e72f4e","sha256:b93a96a3a0ee67c839abf9c7a705926a7bf03dc2225737fbe4350e71f906e182","sha256:a003b5d7571fea820be5d9160b2c5a5934e952b032a030c6d10f4c5f40967969"]
  - id: asintota-oblicua
    tier: 2
    prompt: |
      Halla la asíntota oblicua $y = mx + n$ de $f(x) = \dfrac{{{num}}}{{{den}}}$. Respuesta: `m;n`.
    variants:
      - values: {"num":"2x^2 + 3x + 4","den":"x + 1"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"num":"x^2 - 4x + 6","den":"x - 2"}
        answers: ["sha256:f2a490014bb9a9a7880c1d1e325866ec7ea9998d66fae9ed249f797b00c10312"]
      - values: {"num":"3x^2 - 5","den":"x + 2"}
        answers: ["sha256:9126997c4d4a7f663a25764ba5358052c09c7eb13c1b5c91b2854bd23aae7cc4"]
      - values: {"num":"-x^2 + 2x","den":"x + 3"}
        answers: ["sha256:dda4ad566be33890416fd31aa7ad4f49af3898a0b8b5cc9bcb649ba8f00367fb"]
      - values: {"num":"4x^2 + 5x + 7","den":"x - 1"}
        answers: ["sha256:6fb73a3356b452f5575eeb852cf8242645f055592fa9ebbfb747165bdec5de1e"]
      - values: {"num":"2x^2 - 7x + 5","den":"x - 3"}
        answers: ["sha256:b1f713457ab0ea711879485a067897b743cba223b42f550e76278ab3a87ac617"]
  - id: indeterminacion-uno-elevado-a-infinito
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\lim_{x \to +\infty} \left(1 {{a}}\,\frac{1}{x}\right)^{{{b}}x}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"a":"+ 2","b":""}
        answers: ["sha256:cf5e5b12f5da571287d53d38db80c664e810d91517569d2970e79f24f2784d34","sha256:d551b7456f710a376b6caefff04371793dd85b7aee82353a281433f2a47f9d88","sha256:98b300f6dc12247c59fd8828e352522cf911152cb654f704f89b1b1d91e884d3"]
      - values: {"a":"+ 1","b":"3"}
        answers: ["sha256:1de02cb8c31b5b59ece8cb4696169847b11bfe617ec39aa71bd8005438c894ed","sha256:456754b3cf18ce4993013c5da2459404002770a7451e4d295de48f86a927d0d1","sha256:269c96899ff15c11cdc85bdb58e9922a85de405ceed6c6159186f14fdfdad49f"]
      - values: {"a":"- 1","b":"2"}
        answers: ["sha256:4013dc781da34384cf03d4b42eaf9b20bd3111666de2149f4146dc95b072f408","sha256:28bc7023d3ba105e7e2efd2b5cd1c6c330bb0aad79f2d782789cc7d395374114","sha256:959777f71592c3ce4d63b15a5e9e4f08c7693a490808aebaa4fa4b90ab1564c5"]
      - values: {"a":"+ 0{,}5","b":"4"}
        answers: ["sha256:7dec37763830c5e9df12952073533b1c1cdf28f71fe03d2d06b12a17bd7ac457","sha256:aecd0e6a493297aa84344d7d99a6d90b960e115547fb86529a466953adf7430b","sha256:8c055000d526e718c69352aedfc7369aeb32be8ed27c41b05007be99fd794fa6"]
      - values: {"a":"+ 3","b":"-1"}
        answers: ["sha256:6263ddac67c8c0a556088c3693c61a279c5268d062cbfcf98c3ad094c1a3c2b7","sha256:74611f7619b65eb2bbb0f9fbbf853fbbd120d40fc24397a70ffb4ea0730f42a8","sha256:681628bf76578e1573740720ce3732d26046be338e9b1cfa21e69eafec3a2ff8"]
      - values: {"a":"- 2","b":"-0{,}5"}
        answers: ["sha256:0d80f15eedc452ee12ace3a5dc053d34c2755794283ae05c67418d1007557db5","sha256:beeb7b244701decac78ef96aee4c7a3deb1ebc6b31120ea895b80417f24708a9","sha256:5ec463ee83de9d6185095dfbee646cb797c9d6de1bb9902c3a0a02e888fe9a4c"]
  - id: infinito-menos-infinito
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula $\displaystyle\lim_{x \to +\infty} \left(\sqrt{{{r}}} - x\right)$ multiplicando y dividiendo por el conjugado.
    variants:
      - values: {"r":"x^2 + 4x + 1"}
        answers: ["sha256:f7f15a435ddac424b5bb1df09fdde5f1ab146aadb65feabbc366dcb265d152da","sha256:69c375dac5d92d282b786f6fa7b5f0392726a676824ef19f31b66f8b538aeaeb","sha256:dab6c14f13a48ccbe4e58535dd0df5bba3903c2c8e0b41f50508f7aa808cab7d"]
      - values: {"r":"x^2 + 10x - 3"}
        answers: ["sha256:107a2781432590cbc67b8a0a102cf65142d8f4e61f3a9daefba4f2f8dc83c688","sha256:05b6f728120ee7c4d296ca29402f864727169873c9ce641220e2b34181d34534","sha256:0b0e1c33e6cd1597c038a886298168bc026c6995996d09ace5ae74bfde3856be"]
      - values: {"r":"x^2 - 6x + 2"}
        answers: ["sha256:590c8050e56ee6a15a413a6c487538177b619ef9ec487e129283e8159cbac0ab","sha256:c70811c4468216286b65cf29b44bfb7f27d6a7c53b0938c7a202d8c0ffd5ef4f","sha256:71e58a6d1893e72764f269d4dddad586da48f9debc9aa59d494d906b51ae2222"]
      - values: {"r":"x^2 + 1x + 5"}
        answers: ["sha256:b2e749809d09f95f0125769f687c007324d655a154f5f40702b9c6bfb3d4000f","sha256:ae3ef31d919c7ff5f6393e53675f95ed64c2da2c4c37425213cca8dfe7986faa","sha256:0fddd58d04002fdc8136ce6e61e066327e0454ccf2be803ccbcb1e1b41658ecc"]
      - values: {"r":"x^2 + 3x"}
        answers: ["sha256:0f2882f9e83ac11b4fde67f3ff5f373ebc846542e9b33a0fa4d40ee36cbf6384","sha256:aed5856f5c77aa75d74d8d2e96c164708f8dabaceffe1460234b3b6f969b16ac","sha256:76953dcde1a9c08d4b431d32bdcddee3b40467d3809d928e5ae20dba444bf2d1"]
      - values: {"r":"x^2 - 8x + 7"}
        answers: ["sha256:5f357ea16382a4fa1cb0093110f2b0be856796fc6b4a347ea761f9965f7f48d6","sha256:52a698a19e3aabdecb43690a71a2ae1242185a994c392adf5552bc897940f51a","sha256:044c452b621a9600a1dc5b7e4554ad4d523c7c4d7a97d2d268c9bd97e04f1e71"]
  - id: seno-entre-x
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Sabiendo que $\displaystyle\lim_{u \to 0} \frac{\operatorname{sen}u}{u} = 1$, calcula $\displaystyle\lim_{x \to 0} \dfrac{\operatorname{sen}({{a}}x)}{{{b}}x}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"a":3,"b":2}
        answers: ["sha256:a18d3148dbac51e8ad120743fb37fe5dd98544af4c82bbf9a78055ba72fea1be","sha256:85b31f6a38d8da03dc552e890e29320a5c8c082c4a5db23dd5a364ab14851262","sha256:0a3bb1be14aa619d23f9d2c97b42b58bc8936e39f35b2b4f2a04a22a13df30aa"]
      - values: {"a":5,"b":2}
        answers: ["sha256:fb755462e05ebbd1baacaa958c2cb57fdc017e0f33b6bb148b303f91b9850729","sha256:7c607380e4940e9a06d89724b4ffcb86d0bb3236a8ed9e4f63a744a491870311","sha256:bb4258b87eeb0766e174dc579035481f9a1239255410303e4fc0ff38dceac37b"]
      - values: {"a":"","b":4}
        answers: ["sha256:c28593a04b330c6cee014078047b4d4593f83a0cd28a9f1928f4f1163b380def","sha256:7b3fdf34c944444ceb9956148abfd7bec50924090aba1c8ff768f54660afbf3e","sha256:da5dea9a772098dddc9c31a6b1cf5a8be5dc32f271746aec3bbfe1097b346c98"]
      - values: {"a":7,"b":7}
        answers: ["sha256:b40032df7825688368648b40807382a9c371c6c380934a00303cfc1eeafd249b","sha256:05ca8b1dfb32a57f92e35929ce711d3da12e2ae8cc6306dc358b27d51422f0f3","sha256:f8de75cd0ac23754e1a1d40853fd80cac32103e2161308236a98b740b1d5cd47"]
      - values: {"a":2,"b":5}
        answers: ["sha256:48783e54a57755d3fc405217d86c6582272169b07236546edd0ca849fdaedbda","sha256:2b39c40b1635957a7005e837376d98bf1309431696be0ca4151534abf61997b2","sha256:b7f63679e95db2a8c92cffb11bde2953ae7a5d1649ac59bae8778a9ab989661b"]
      - values: {"a":6,"b":3}
        answers: ["sha256:1d95d2ad44ccf3e1e634188f36deb88df1158db85d713dc494e1d404bec43dca","sha256:041b9d52d38ee6e857adae6c4c3d7e95cae41f9d3752de2b63b91adb2ca397ca","sha256:d74ae6a230bdbe0f06f9991e17ee330fbcec422c9ac70770159b1d09d222bfd3"]
  - id: parametro-de-continuidad
    tier: 2
    type: numero
    sig: 4
    prompt: |
      La función vale ${{p}}$ si $x < {{cc}}$ y $kx {{q}}$ si $x \ge {{cc}}$. ¿Qué valor de $k$ la hace continua en $x = {{c}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p":"x^2 + 1","c":2,"cc":2,"q":"+ 3"}
        answers: ["sha256:1d548211fa19f60039a084cd69124f2c816fcfc407f223b348cb1525ed3a0346","sha256:958366659060f67e1112faa9b7dfd6caceb21601ea131949bcd68bed0538fd60","sha256:6c80523ace605953a298255686ff7c7d22ad89556a1bc16fc4f10c6f2d43b0e6"]
      - values: {"p":"2x - 5","c":3,"cc":3,"q":"- 4"}
        answers: ["sha256:aeafaa38eb0c1dcda9c5ac52687a86704347fd6e8f9864658eb97374738c8bbf","sha256:e3e19960108ce5b7c4332007343e1a06bccdc477d350fce2742e7bfb1c36b482","sha256:87a8153b3500682162ff1d211a8d54e219993825558884c31c093b8059f52d85"]
      - values: {"p":"\\sqrt{x + 5}","c":4,"cc":4,"q":"+ 1"}
        answers: ["sha256:191b2303a08ddcc29b1ba80ff0709252ff872de83ce0aa80b24513c2d96e8422","sha256:72e23f8779d390296d60195188a8fea6fced382d73ddc64e3801d7d0afaf1170","sha256:6abb276f14987f31f86c594449cd851324f6fa73b9ac719cd6135b4de83cdaad"]
      - values: {"p":"3 - x^2","c":"(-1)","cc":-1,"q":"+ 6"}
        answers: ["sha256:61c92f3c6790edffff9826c9f3f866841cfc32260eca2a694f319d594c7035a5","sha256:8b5cbda4b248ccf8b1057ba23829acb33b537b90b619e33735f50488c3876672","sha256:41ddb74406f84efeede0a674cc1f85887a3d1ae0053933b33ffe982e2da7cebb"]
      - values: {"p":"2^{x}","c":3,"cc":3,"q":"+ 0"}
        answers: ["sha256:02da32a307925538fac5ba03c5b2b7bfc99e4545aa3938a8d5dbb6fee1e70a61","sha256:79eaf96c0f0643b238b5b84ae8c32d8a648fd83aadb55bbac1f25f0be68c77e3","sha256:d387f1b64eb4d23dd9241d72dca1dac0598757b66e108b24f7728727905b38be"]
      - values: {"p":"x^3","c":"(-2)","cc":-2,"q":"+ 2"}
        answers: ["sha256:e087bb71a6b4ed74b19a2a51efa4ba83082b8d027c60ee96b61f4dfff16cc0fa","sha256:95124fa0c7672de67eb182f93f408179e83ea76c361ba52130aa49de4584db74","sha256:9e2e468bbc442669d2849ed4dbf19ec27f9970882d1cea2b52eecc2f66a14a3a"]
  - id: tipo-de-discontinuidad
    tier: 2
    prompt: |
      ¿Qué tipo de discontinuidad tiene $f(x) = {{f}}$ en $x = {{a}}$? Responde `evitable`, `salto` o `infinita`.
    variants:
      - values: {"f":"\\dfrac{x^2 - 4}{x - 2}","a":2}
        answers: ["sha256:d9216af9cf534b7dda0ee9a36e9d04542d91d955b9881a3f2837a1035536c54c"]
      - values: {"f":"\\dfrac{1}{x - 3}","a":3}
        answers: ["sha256:3dca240bed368c9f14ad59b249b1f3b5092800f1e9af97774993472bc050f4b5"]
      - values: {"f":"x + 1 \\text{ si } x < 1;\\ x - 1 \\text{ si } x \\ge 1","a":1}
        answers: ["sha256:ee3045e16ebe0f26b9c28f44b2e0314eb8a86605e3ad650e7e39664833296b7e"]
      - values: {"f":"\\dfrac{\\operatorname{sen}x}{x}","a":0}
        answers: ["sha256:d9216af9cf534b7dda0ee9a36e9d04542d91d955b9881a3f2837a1035536c54c"]
      - values: {"f":"\\dfrac{|x|}{x} \\ (x \\neq 0)","a":0}
        answers: ["sha256:ee3045e16ebe0f26b9c28f44b2e0314eb8a86605e3ad650e7e39664833296b7e"]
      - values: {"f":"\\dfrac{1}{x^2}","a":0}
        answers: ["sha256:3dca240bed368c9f14ad59b249b1f3b5092800f1e9af97774993472bc050f4b5"]
  - id: biseccion
    tier: 3
    type: numero
    sig: 6
    prompt: |
      La función $f(x) = {{f}}$ cambia de signo en $[{{a}}, {{b}}]$, así que por el teorema de Bolzano tiene un cero ahí. Aplica ${{n}}$ pasos del método de bisección
      (en cada paso, quédate con la mitad donde cambia el signo). ¿Cuál es el punto medio del intervalo final?
    variants:
      - values: {"f":"x^3 - x - 2","a":1,"b":2,"n":3}
        answers: ["sha256:04e7182885d5a3907255cf06f09e70883f78f1cf6c8eb814e21b435d2b168be5","sha256:4560ec0db0b927b664739c35adef0b876d32abc4d414c771368475ce37a9fe5a","sha256:71075423e2940ee39702a6e6677358b70437bd63dd060059d845a55fe6139fba"]
      - values: {"f":"x^2 - 5","a":2,"b":3,"n":4}
        answers: ["sha256:3f1c25fe3bc284ce5e12ca1a03dc6153586b59d0b40d86d6e62ecd327dafc0af","sha256:0e928bc148d9be8df1080352a3fb32d169dfa7a98e12c67641bc013debaddfed","sha256:6ee0961d84f26f54dd61984b870ad7d3e0e6b49466ec12aa7447113d1be056f6"]
      - values: {"f":"\\cos x - x","a":0,"b":1,"n":3}
        answers: ["sha256:40795172c0d98998bb046290f1d3f292bec90727ec2a0de06a07ce36fc21957e","sha256:6d0fba493d1c8ab85db87cbcf907df4debf7821089f95397c3a39793f22df07b","sha256:4dcfe43e4e4373adccba2b12bc9cd2313bdcf688212f27e20f2f4b3fc19ebaea"]
      - values: {"f":"2^{x} - 3","a":1,"b":2,"n":4}
        answers: ["sha256:dc9d15d923ef3cf036b92784a23caa62763a61040ba72475500259ab9e9f05aa","sha256:f3b1d34d29483b7c0fd66407c1398160251e01e15a8936a25438b8e420cb5488","sha256:508915efcbbe88bf94ae5ff47e2babad218bd97248ecb8ad9a7d4591771acd0d"]
      - values: {"f":"x^3 + x - 1","a":0,"b":1,"n":3}
        answers: ["sha256:597c3017bf215e90ae1d40179d833824b555e4f562eebd80a809af9b597317d0","sha256:26f95f622920ce22a4b19afc04d244d568e349af4f16b0098bc904fee371285e","sha256:01820dc42321c4d19f91f26308138bbd5daf710bbb1b364e1edd019a8b8e0645"]
      - values: {"f":"x^3 - 10","a":2,"b":3,"n":5}
        answers: ["sha256:cef3574c7881ba8924afd670ff2375d297126edf4afd1fbddf061aa8a794e3f9","sha256:acadf45f37632c834990acc65d45b5f814d6f659bc49f22bc85c81076b6a8652","sha256:df1d502fe6c8880a4de1b38e01e24651ea9bbd5e14db51b90d29bd55842f5bb6"]
  - id: definicion-de-limite
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica con palabras y con la definición $\varepsilon$-$\delta$ qué significa $\displaystyle\lim_{x \to a} f(x) = L$, y por qué el valor $f(a)$ no interviene.
      (b) Demuestra con la definición que $\displaystyle\lim_{x \to 2}(3x - 1) = 5$. (c) Explica por qué $\frac00$ es una «indeterminación» y no un número, con dos ejemplos que den
      resultados distintos.
    sealed: "gz64:H4sIAAAAAAACCn2TTW4bORCFr/LQ4EJqyBqPhGwUezbjAWbhRQJkl84AZbJk0GCz2vwxWrEE5DQBgiCr7DI7+yY5ScCWHEmAkyXJ4qt6Hx/vqyguJyu+WlR1PaJxXeN1ZqjlqB8rRAZpDpqQyCeBllbK5m22HAgEdamgM3kjUP1hvRPEvLTask9cCklhFK1H5AB7ncmNp/hbPIK9lrBAR4GQpOg0zR0F7qJ14vEXThW4tzFxOTHsEm03E7nG32ZGtFCnOMO6xwlojTPs6tQE7JN4zRFqXRzhBJfbgn0LNcUlQYs3VtvHr/5IrPTWLq8Yqsc5SC3ADu7xS2sTw3DUwV5xcVsm6SgS6nogUNcwXGy/LDBprNBlNgwvjR/82AAZaEgKAv/4reUg08Y3vq5HV+UhLuhZHBOo9Whe5vuzGHqxxjnmw7yztZrijbTb93iidY6mWQbSh0JztRi47a79itlxmzPMDzUPEe7G1mXsVxIKDHYIHLNLxYXhjr0pxOAId+xEW0MGVJbDIzLIZ0cePrccyEjACoa9tNaX1aIYKjbu+/9mm/t+g6ZJssWxO5j1+/2Zwmp/YzNc2p40jfXLtDrI7U+lxlMeIlWCGBGZPB4+71ROT9XD/1P8S6th4BTIx6WElkLxwH0XOA75GS1JJwn2PYVJydVNviYj3z98HG9THumKA27z4yeIziHwtJpUIV8Fq6vF2/tKB5s4WKkW1cXAx/DS+qdwHnE/eXrk4pb7zlm9xbmLnBdYnzjcWfZDmy77JLFazDaTo0b/OHvNx5HZt/ljXuS1tJ3jtJuolZgCDTP9TveCUEjyDbedk4g9y0Lm6SNFmPIhisSBD0ewhkszWG84cShReKblu80PYG3xpMgEAAA="
  - id: r-limite-existe
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo existe el límite de una función en un punto?
    options:
      - |
        Si $f(a)$ existe
      - |
        Si $f$ es un polinomio
      - |
        Si los dos límites laterales existen y son iguales
      - |
        Siempre
    answers: ["sha256:b514eea05d49ad18c165878f98ca77a177680ffc3ebc9361aafefcd91191eb90"]
  - id: r-continua-def
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es continua una función en $x = a$?
    options:
      - |
        Si existe $f(a)$
      - |
        Si existe el límite en $a$, existe $f(a)$ y son iguales
      - |
        Si es un polinomio
      - |
        Si tiene asíntota
    answers: ["sha256:515a444db73017290d132b2a3e9ea8246ceac78abac8d6334233ca889dabaede"]
  - id: r-indeterminaciones
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas expresiones es una indeterminación?
    options:
      - |
        $\frac{1}{0}$
      - |
        $\infty + \infty$
      - |
        $0 \cdot 5$
      - |
        $\infty - \infty$
    answers: ["sha256:30a8c77179867a76c76f24fe4d1f07af12809c52cb2578feed3f63470835832a"]
  - id: r-grados
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\displaystyle\lim_{x \to +\infty} \frac{4x + 7}{x^2 - 1}$?
    answers: ["sha256:2f42f5a70a8c957754a5a3f37f41d42822541086e16996a4ffc68dd3d7470d6c","sha256:09f0d629469566fc8d41525d6c9eeef3d5e22affdfc2db760af945f6f3f27f2f","sha256:d37abc2b1e55b0ae25f26549c136ac6a830db173c4b80e19e7296b37f0072934"]
  - id: r-bolzano
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué dice el teorema de Bolzano?
    options:
      - |
        Que una función continua que cambia de signo en $[a, b]$ se anula en algún punto de $(a, b)$
      - |
        Que toda función tiene un cero
      - |
        Que el límite siempre existe
      - |
        Que las funciones continuas son derivables
    answers: ["sha256:84780a03a35bec3d63e7b1d92a862f6ee342808f3156d8e4f2d61d89b0547509"]
  - id: r-asintota-horizontal
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la asíntota horizontal $y = L$ de $f(x) = \frac{6x - 1}{3x + 4}$?
    answers: ["sha256:598a104944796b3e06a7010a34b9e7665a7d677834aef3824d2e51b46439412e","sha256:c618022cb3910275197eb78943d2011055f24bb25d83e6b7a7c3ea6bf4fd9dab","sha256:7f1c6bd304220887178b41eac8bc73cce65fdd50b63f80c16fc4ab0d54490d04"]
  - id: r-numero-e-limite
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuánto vale $\displaystyle\lim_{n \to \infty}\left(1 + \frac1n\right)^n$?
    options:
      - |
        $1$
      - |
        $\infty$
      - |
        $e$
      - |
        $0$
    answers: ["sha256:f6b82c396f2e5aa04183ff37d3b8079d9c81128aa0b705f08b3d78d6d7bc2bb0"]
---

# Límites y continuidad: idea y definición de límite, límites laterales e infinitos, indeterminaciones, asíntotas, continuidad y Bolzano

¿A qué velocidad va un coche **justo** en este instante? ¿Cuál es el área bajo una curva? ¿Cómo se comporta un fármaco **a largo plazo**? Son
preguntas sobre lo que pasa «en el límite»: al acercarse a un instante, al hacer trozos cada vez más finos, al dejar pasar mucho tiempo. El
**límite** es el concepto que sostiene todo el cálculo, y la **continuidad**, la propiedad de las funciones que no dan saltos. Este nodo los
presenta de forma intuitiva y rigurosa, enseña a calcular límites (también cuando aparecen expresiones como $\frac00$) y a usarlos para
hallar asíntotas y estudiar la continuidad.

## Objetivos

Al terminar sabrás:

1. Explicar qué es un límite, con palabras y con la definición $\varepsilon$-$\delta$, y calcular límites laterales.
2. Calcular límites finitos, infinitos y en el infinito, y resolver las indeterminaciones habituales.
3. Hallar las asíntotas verticales, horizontales y oblicuas de una función.
4. Estudiar la continuidad y clasificar las discontinuidades.
5. Usar el teorema de Bolzano y el método de bisección.

## Qué debes dominar antes

[[mat-funciones-elementales]] (funciones y sus gráficas), [[mat-sucesiones-progresiones]] (límite de una sucesión, el número $e$) y
[[mat-polinomios-factorizacion]] (factorizar y simplificar fracciones algebraicas).

> [!question] Test de entrada
> 1. Simplifica $\frac{x^2 - 9}{x - 3}$.
> 2. ¿A qué se acerca $\frac{1}{n}$ cuando $n$ crece sin parar?
> 3. Racionaliza $\frac{1}{\sqrt5 - 2}$.
>
> Respuestas: $x + 3$ (si $x \neq 3$); a $0$; $\sqrt5 + 2$.

## 1. Para qué sirve

- **Tasas de cambio instantáneas**: la velocidad instantánea y la pendiente de una curva son límites ([[mat-derivadas]]).
- **Áreas y acumulaciones**: el área bajo una curva es el límite de sumas de rectángulos ([[mat-integrales-bachillerato]]).
- **Comportamiento a largo plazo**: hacia dónde tiende una población, una temperatura o una inversión (asíntotas).
- **Métodos numéricos**: el teorema de Bolzano garantiza que la bisección encuentra raíces; es la base de cómo los programas resuelven ecuaciones.

## 2. La idea de límite

> [!practico]
> La función $f(x) = \frac{x^2 - 9}{x - 3}$ no existe en $x = 3$ (sale $\frac00$), pero si calculas $f(2{,}9) = 5{,}9$, $f(2{,}99) = 5{,}99$, $f(3{,}01) = 6{,}01$…, ves que los
> valores se acercan a $6$. Eso es el límite: lo que la función «va a valer» al acercarse, aunque en el punto no esté definida.

Se escribe $\displaystyle\lim_{x \to a} f(x) = L$. **Límites laterales**: $\displaystyle\lim_{x \to a^-}$ (acercándose por la izquierda) y $\displaystyle\lim_{x \to a^+}$ (por la derecha). El límite
existe si y solo si los dos laterales existen y coinciden.

**Tipos**: límite finito en un punto, límite infinito en un punto ($f(x)$ crece sin cota: $\displaystyle\lim_{x \to 0}\frac{1}{x^2} = +\infty$), límite en el infinito
($\displaystyle\lim_{x \to +\infty}\frac1x = 0$) e infinito en el infinito.

> [!formal] Con rigor: la definición $\varepsilon$-$\delta$
> $\displaystyle\lim_{x \to a} f(x) = L$ significa: para todo $\varepsilon > 0$ existe $\delta > 0$ tal que, si $0 < |x - a| < \delta$, entonces $|f(x) - L| < \varepsilon$. Es decir, por pequeño que sea
> el margen $\varepsilon$ que se exija alrededor de $L$, hay un entorno de $a$ (sin contar $a$) donde $f$ cumple ese margen. *Ejemplo:* para $\displaystyle\lim_{x \to 2}(3x - 1) = 5$,
> $|3x - 1 - 5| = 3|x - 2| < \varepsilon$ en cuanto $|x - 2| < \frac\varepsilon3$; basta $\delta = \frac\varepsilon3$. Esta definición (Cauchy y Weierstrass, siglo XIX) convirtió en
> riguroso el cálculo de Newton y Leibniz ([[mat-analisis-real]]). $\blacksquare$

## 3. Cálculo de límites e indeterminaciones

**Propiedades**: el límite de una suma, producto o cociente es la suma, producto o cociente de los límites (si existen y no se divide por $0$). En
las funciones elementales continuas, el límite se calcula **sustituyendo**. Con infinitos se opera con reglas intuitivas
($\infty + \infty = \infty$, $\frac{k}{\infty} = 0$, $\frac{k}{0^+} = +\infty$ si $k > 0$…).

Hay expresiones cuyo valor **no** se puede decidir sin más, las **indeterminaciones**: $\frac00$, $\frac\infty\infty$, $\infty - \infty$, $0 \cdot \infty$, $1^\infty$, $0^0$, $\infty^0$. Por ejemplo,
$\frac{x^2}{x}$, $\frac{2x}{x}$ y $\frac{x}{x^2}$ dan «$\frac00$» en $x = 0$ y sus límites son $0$, $2$ e $\infty$. Técnicas:

- $\frac00$ con polinomios: **factorizar** y simplificar. $\displaystyle\lim_{x \to 3}\frac{x^2 - 9}{x - 3} = \lim_{x \to 3}(x + 3) = 6$.
- $\frac00$ con raíces: multiplicar por el **conjugado**. $\displaystyle\lim_{x \to 0}\frac{\sqrt{x + 4} - 2}{x} = \lim_{x \to 0}\frac{1}{\sqrt{x + 4} + 2} = \frac14$.
- $\frac\infty\infty$ con polinomios: **comparar grados** (dividir entre la mayor potencia). Si los grados son iguales, el límite es el cociente de los
  coeficientes principales ($\displaystyle\lim_{x\to\infty}\frac{3x^2 + 1}{x^2 - 5} = 3$); si el denominador tiene mayor grado, $0$; si el numerador, $\pm\infty$.
- $\infty - \infty$ con raíces: conjugado. $\displaystyle\lim_{x \to \infty}\left(\sqrt{x^2 + 6x} - x\right) = \lim \frac{6x}{\sqrt{x^2 + 6x} + x} = 3$.
- $1^\infty$: llevar a $\left(1 + \frac1u\right)^u \to e$. En general, $\displaystyle\lim_{x \to \infty}\left(1 + \frac ax\right)^{bx} = e^{ab}$.
- Un límite trigonométrico fundamental: $\displaystyle\lim_{x \to 0}\frac{\operatorname{sen}x}{x} = 1$ (con $x$ en radianes).

## 4. Asíntotas

- **Vertical** $x = a$: si $f(x) \to \pm\infty$ al acercarse a $a$ (por algún lado). Suelen estar donde se anula el denominador **y no** el numerador (si se
  anulan los dos, puede ser un punto evitable).
- **Horizontal** $y = L$: si $\displaystyle\lim_{x \to \pm\infty} f(x) = L$.
- **Oblicua** $y = mx + n$: si $m = \displaystyle\lim_{x\to\infty}\frac{f(x)}{x}$ y $n = \displaystyle\lim_{x\to\infty}(f(x) - mx)$ son finitos ($m \neq 0$). En un cociente de polinomios con el numerador
  un grado mayor, es el cociente de la división.

## 5. Continuidad

> [!practico]
> Una función continua es la que se dibuja sin levantar el lápiz. Una tarifa por tramos que salta de precio, o una función que se va al
> infinito, no lo son. La continuidad garantiza cosas útiles: si una función continua pasa de negativa a positiva, en algún momento
> vale cero.

$f$ es **continua en $a$** si existe $f(a)$, existe $\displaystyle\lim_{x \to a} f(x)$ y son iguales. Las funciones elementales (polinomios, racionales,
raíces, exponenciales, logaritmos, trigonométricas) son continuas en todo su dominio, y las sumas, productos, cocientes y composiciones
de continuas también.

**Tipos de discontinuidad en $a$**:

- **Evitable**: el límite existe (finito) pero $f(a)$ no existe o es distinto; se «arregla» redefiniendo $f(a)$.
- **De salto**: los límites laterales existen, son finitos y distintos.
- **Infinita** (o esencial): algún lateral es infinito (o no existe).

**Teorema de Bolzano**: si $f$ es continua en $[a, b]$ y $f(a)$ y $f(b)$ tienen signos opuestos, existe $c \in (a, b)$ con $f(c) = 0$. El **método de bisección**
lo aprovecha: se parte el intervalo por la mitad, se queda la mitad donde hay cambio de signo y se repite; cada paso reduce el error a la
mitad. (Otro resultado importante es el de **Weierstrass**: una función continua en un intervalo cerrado alcanza un máximo y un mínimo.)

## 6. Errores típicos

- Creer que el límite en $a$ es siempre $f(a)$ (solo si la función es continua).
- Escribir «$\frac00 = 1$» o «$\infty - \infty = 0$».
- Simplificar sin factorizar (tachar sumandos).
- Olvidar estudiar los dos lados al buscar asíntotas verticales o en funciones a trozos.
- Aplicar Bolzano a funciones que no son continuas en el intervalo.

## 7. Resumen

- $\displaystyle\lim_{x \to a} f(x) = L$: lo que vale $f$ cerca de $a$; laterales; definición $\varepsilon$-$\delta$.
- Sustituir; indeterminaciones: factorizar, conjugado, grados, $e$, $\frac{\operatorname{sen}x}{x} \to 1$.
- Asíntotas verticales, horizontales y oblicuas.
- Continuidad: límite = valor; discontinuidades evitable, de salto e infinita.
- Bolzano y bisección; Weierstrass.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué significa el límite y por qué $f(a)$ no importa.
2. Las técnicas para $\frac00$ y para $\frac\infty\infty$.
3. Cómo se halla una asíntota oblicua.
4. La definición de continuidad y los tipos de discontinuidad.
5. Qué garantiza el teorema de Bolzano y cómo funciona la bisección.

## Siguiente

[[mat-derivadas]] (la tasa de cambio instantánea, que es un límite).
