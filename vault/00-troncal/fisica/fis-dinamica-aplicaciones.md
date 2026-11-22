---
id: fis-dinamica-aplicaciones
title: "Aplicaciones de las leyes de Newton: rozamiento estático y cinético, planos inclinados, poleas, dinámica del movimiento circular y velocidad límite"
area: fisica
trunk_level: 3
prerequisites: [fis-leyes-newton]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 6: «Aplicaciones de las leyes de Newton» (resolución de problemas con las leyes de Newton, fricción, fuerza centrípeta, fuerza de arrastre y velocidad terminal). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/6-introduccion"
  - "D. Halliday, R. Resnick y J. Walker, «Fundamentals of Physics», 11.ª ed., Wiley (2018), capítulo 6 (fuerza y movimiento II: rozamiento, arrastre, movimiento circular uniforme)."
hints:
  - "Concepto: el rozamiento se opone al deslizamiento; el estático se ajusta a lo necesario hasta un máximo μs N, y el cinético vale μk N. En un movimiento circular, la resultante de las fuerzas hacia el centro (tensión, rozamiento, normal, peso…) es la fuerza centrípeta m v²/r."
  - "Herramienta: diagrama de cuerpo libre, ejes (en un plano, paralelo y perpendicular), ΣF = m a en cada eje y en cada cuerpo. Plano con rozamiento: a = g (sen θ − μ cos θ). Ángulo crítico: tan θ = μs. Curva plana: v_max = √(μs g r); peraltada sin rozamiento: tan θ = v²/(g r)."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 6; Halliday, cap. 6."
exercises:
  - id: rozamiento-estatico
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Una caja de ${{m}}$ kg descansa en un suelo horizontal; el coeficiente de rozamiento estático es $\mu_s = {{mu}}$ ($g = 9{,}8$ m/s²). ¿Qué fuerza horizontal mínima, en N, hay que hacer
      para que empiece a moverse?
    variants:
      - values: {"m":35,"mu":"0{,}4"}
        answers: ["sha256:ec305a5bd6a1a5affd674b482798301e678f7d08cd498d6af241652a62bfa0eb","sha256:132ed7fe69588ca1f585b2693394cf8166be20100578cd97b03479638806f885","sha256:4dbd5716c6dad30bfca56c1ba4441dd53d7c1dd95825d6d1129f5072bac7d7fc"]
      - values: {"m":12,"mu":"0{,}65"}
        answers: ["sha256:19adac371438496cfabc919f2960a0cbc919160de43b17fa7cf01b8926323b66","sha256:e6600071dd5db7d24cd407596996ac5422a98bd28d183d3f0426a06f42016c00","sha256:ff3b8714280eee50f9ad32fe0cd4d61c043efc6cd8614260ee9e7993d75b6043"]
      - values: {"m":80,"mu":"0{,}3"}
        answers: ["sha256:ee979da24afab7f2b8ec4af8175d1be93eb78da5329a442140465caa1c8ecf16","sha256:7f8015afc523c5652f9a19cafb09e09e2068c6798a65ded812b5a5d073ecee49","sha256:ac334377d26df71b2290ebd077b17adba82ec78f65dbf7bacf70974a3e81f2a0"]
      - values: {"m":5,"mu":"0{,}9"}
        answers: ["sha256:a44cad64b9403c8448fa34eb9ab0df30793c4f40732d93af50566191c9d00436","sha256:5e84ac9c1ce5365435df27990e83dd9fabaa72c4f2f9ed23b08c88b971f5a2d5","sha256:313410049edc2b3564ff9450462b7385906558d5b80a1aa8708a2d162e74abc3"]
      - values: {"m":150,"mu":"0{,}25"}
        answers: ["sha256:e06b13321165b26bdc4cea6c39ffe47fa0d1765c0b625a4157ee4bd8d7e1b822","sha256:fd36a6f2d060258973515fcdba16571299ac7f4f54cbcc9ed68ed2a3ebac36b3","sha256:5b7285d45e99e25ff1b6039eff7637caeb68cb8bbc4031ba0bf770d423765512"]
      - values: {"m":48,"mu":"0{,}55"}
        answers: ["sha256:36d0e002f28c1207eee09af4f5bfecf2a3c981fb6cc03afbbd86a322bedadc33","sha256:3edd0b780311a8a11164964259f7c0bccc55e8fcbd0a23543aeaf309e484df58","sha256:0e48d7c9e28ebd6ec9bf22d9641746873dae05bdfcb8e4447ec979e0212b9fdf"]
  - id: aceleracion-con-rozamiento
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se arrastra una caja de ${{m}}$ kg por un suelo horizontal con una fuerza horizontal de ${{F}}$ N; el coeficiente de rozamiento cinético es $\mu_k = {{mu}}$ ($g = 9{,}8$ m/s²). ¿Qué aceleración tiene,
      en m/s²?
    variants:
      - values: {"m":10,"F":60,"mu":"0{,}3"}
        answers: ["sha256:c58af9e94ec7010d2b80f64efda42186de1b60a921d29068fb92d1cba4675de2","sha256:d320e2c761e3ceec5ceb451be3cfb12c60d2225bddde23a6f26238514d3587e7","sha256:d272a71c33c6d4d4e094c12b6eed0b3503231a775c2e4db40d867b6ab91b86d3"]
      - values: {"m":25,"F":150,"mu":"0{,}4"}
        answers: ["sha256:5dc528bdb176e846be32a98529fe8213f23c6f43adeca10c92afd6f8860e1310","sha256:bff6904d2298f29789f2ac031955a62cc432b0b49ad450c1c00919b62060ad3e","sha256:0c6190c14005410212985d53bd1188539d8e7439ae47f020f45e33f3a6994e2b"]
      - values: {"m":4,"F":30,"mu":"0{,}5"}
        answers: ["sha256:704bc1b56e49065aabe162bf336d759f7af1a4ebb6fd8e28754898acf80fb9a1","sha256:149841e20cbef8ad2c809ec6eaf65c05ac5c10d24a8dab6d8a0488b53352d55e","sha256:ad255be3aef5d54d69998fbec39083a8c32ff798e1a701103192fa7c2948ab87"]
      - values: {"m":60,"F":400,"mu":"0{,}2"}
        answers: ["sha256:43388b9df4d91954f1f3b0df62cc376303b9c1a685f10d98e2628f89cf6ce84f","sha256:c267f1a9adb46ab81136ca44d0da78b72a087ec5331a084e0c6963ddf5b5541f","sha256:f6d9c4009f8f7d73b19507b8fdc37dde892527691cd99a322464b2faf2186a11"]
      - values: {"m":8,"F":45,"mu":"0{,}35"}
        answers: ["sha256:0c38e70d4f18ca7196f2b8f906f69d505e6b0f5168f1b0b53b84bfcddc24cf83","sha256:927f8bf8e450400842dc874f289e9a6c7a44a5cbcec745f1b475efd235f06d30","sha256:73f53230dde66f285eeb088b5a7d1c1de693328fe9aa8f313a31ba24b2bc7114"]
      - values: {"m":15,"F":120,"mu":"0{,}6"}
        answers: ["sha256:a597bf8f0f031259cb3ebbaab1902c9347106a1543df5524897996d06bd01e7d","sha256:9a19fcb5e210173a5537ee75726c34e3e4570d05c2316a3f04ffdbcc37121539","sha256:0dfc62028ab0dca65da616488e09bd695e28e4b49edfd7a79262d454c053d252"]
  - id: frenado-con-ruedas-bloqueadas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un coche que va a ${{vk}}$ km/h bloquea las ruedas y derrapa hasta pararse; el coeficiente de rozamiento cinético con el asfalto es ${{mu}}$ ($g = 9{,}8$ m/s²). ¿Qué distancia
      recorre, en m? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"vk":72,"mu":"0{,}6"}
        answers: ["sha256:62347e28b3a0b24d313ece9d8a97c03c72c1855ad42a1b514aa02b3f1995e78b","sha256:a16db56fbbdb431a16933fa1b7e0caa906ddc0d03bf2284d7e84f8741dffb39e","sha256:16ddcbde84119b3db109da1f12515094f09b811671f9b1837b226a3c0204db71"]
      - values: {"vk":100,"mu":"0{,}75"}
        answers: ["sha256:5dcfd7d2765454b8180a0eda40596b21793265f68062963964376adbf62896af","sha256:d5e916c34f74988ac02628c96f97ff348639e1211f678a7bc9979e027d6edc74","sha256:4ddded8949b60352a81245b31451165a2dba6aeb4ce10848153df17bbf3c6af9"]
      - values: {"vk":50,"mu":"0{,}4"}
        answers: ["sha256:7c75311e77453aa37cbe87f6d6e626ffb15c3fe90bcb3d65874e6c885ef8acb0","sha256:191c7a1e6dfc6b9143ed4f1f293d5864433952c2f5753a4db62c7cd680e7778f","sha256:44c103ce976f29410b78677305277bc88cb834501e8defb613dbc8f47f1bcda3"]
      - values: {"vk":120,"mu":"0{,}8"}
        answers: ["sha256:c58a1a8da0be24c01c5f1f8c4bce0bccc03e13e06a1e63325cb1c7d58422bef1","sha256:bf9694d6913873114715545e2bb50d1817f5d74d7cd93b64a822ce1dc64ba5a7","sha256:d6a23b34942141649c416eec5924cc20e70a635d1e2a37d41be81c18154c333c"]
      - values: {"vk":36,"mu":"0{,}2"}
        answers: ["sha256:e6901fb86251a090b85df4e4c37c0a80ebf35670b15a5eebd87105ce05acb530","sha256:6a02f7df29558425bd01ad44d26cd56f1dda1faa53c61be726ca4188872848ca","sha256:bcebd2cc6db6e92cc9751931c491c1f31f55acbde92479cabb536b5c9fa80819"]
      - values: {"vk":90,"mu":"0{,}5"}
        answers: ["sha256:b8dfaf80c094d1137c71f9b457c0d5b6ec1af0621afe6362a8293f6e0607f1d4","sha256:9e31f8388c7a49abdc7fcbb30d89fcb7b56c66906b5229879e9df2bc2a264469","sha256:6f54d77891e67d200228e6794b6ec85a32d31f92aa4db52531a28f482b47b01a"]
  - id: plano-inclinado-con-rozamiento
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un bloque baja deslizando por un plano inclinado ${{th}}°$ con coeficiente de rozamiento cinético ${{mu}}$ ($g = 9{,}8$ m/s²). ¿Con qué aceleración baja, en m/s²? (Al menos cuatro
      cifras significativas.)
    variants:
      - values: {"th":40,"mu":"0{,}3"}
        answers: ["sha256:14ad9ac851c812658ff81cf2f51f0464d5a999bcbba008730ad739bfa9969ebb","sha256:5185f807950ac03c3dd79a0b43c6849f482aae37edf702239f080f7c37e837d3","sha256:b3bcacfe9aa2c76e844d1abdda83f172973dd7dc697c56ceb2d8d7823f3922be"]
      - values: {"th":30,"mu":"0{,}2"}
        answers: ["sha256:70095731b953a9f101f0526f0b6859c9f952e6b15b7050fe270014c1b9817f08","sha256:0a5b707566759cbc2e4418b7588aff0556f8b307b7852e86bdf7076cbcd38e80","sha256:d809a0ac115869022cf4acd9c6ff301bdc50e7138a06836ef63d0b491947eda4"]
      - values: {"th":55,"mu":"0{,}5"}
        answers: ["sha256:5ab689293665c11f5587caaa5ad4ce2c6e0f0dc30464dda304a9f9a1d0ae776b","sha256:b46d607c5fffd6555b0b513540d442f07ec5a934b44ad11e68f0b3ded745d4a9","sha256:850a9f64fa03df31b6aea18512bcc195e4da2139f6a2ea54734f3b88e4e798f7"]
      - values: {"th":25,"mu":"0{,}15"}
        answers: ["sha256:a38f8dfd8fc6303de4ecdd0b7bf66c9c0be870bc50ca8350f375d96b4768a6df","sha256:559161e6d57db13e38832062f4df366325c2b3eb6b5af4b597129f369fec543b","sha256:82aae3595c5f502a4f9aa7f5008242e569c7b419acce193243ea7896378c8188"]
      - values: {"th":60,"mu":"0{,}7"}
        answers: ["sha256:eda13006edc92a02ba662378b214cbc9b80cd4163d255bcd18ade4aafaad3491","sha256:c26bd00c65d9212dc23bd0ddb093ea36461fe09b8ebddd82bfc68be4f98d2544","sha256:3f9a60aa67364c6e772a84b0842e87041e9cc8ef52737befaec1bc9e97ff0f66"]
      - values: {"th":45,"mu":"0{,}4"}
        answers: ["sha256:7ef99ccb8b1813fe380150f67e10e9f165e52e6057105ddef9dbb93d397356aa","sha256:7e8372fbf49aa3d462b344d393f11d536b7fa460d5b2bc6118422d382d96958e","sha256:aed36b629e1ae04685c08e33754aab56065e68e7c74cdc59394f5725ed379a62"]
  - id: angulo-critico
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Se va inclinando poco a poco una tabla con una caja encima; el coeficiente de rozamiento estático entre ambas es ${{mu}}$. ¿A partir de qué ángulo (en grados) empieza a deslizar
      la caja? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"mu":"0{,}35"}
        answers: ["sha256:c5c511ba620325dabb718b3e73a738b6de8cf92bd1b5cea5bcf27b23ae475e18","sha256:c763a31ebf419116a8cbead27a14a2598e8adbc29079dcaf791111c654246c89","sha256:127e7a1ea170c0b93711bf7747fc7177c03afb269e6a5ef587d7831a4677cc2b"]
      - values: {"mu":"0{,}6"}
        answers: ["sha256:01aca153fcfd88016381c4b451090b07ed4f8d8a29db182b7efe66f0b20b6b37","sha256:a77a50943c6d31445a67ca42e2520b8aeedbae734d9dfca2c46a2ecc3d39f0fc","sha256:02cad1599e89fc94c52f721473af09f76f8cf3ee16e1945fefa3c8f4e1494b23"]
      - values: {"mu":"0{,}8"}
        answers: ["sha256:48bbdea7d707ff8f93079eadf703a5e39d5a9baabca50290d41f377dbf7b14f7","sha256:d9615e11a69d23d225059d8472627345ded79c5da45a8a590a982c0aba41e73e","sha256:39333fe79c24e97fbed0235ffc2c8bb5637d020cc5b5ae4fd7fbe52b335db8d8"]
      - values: {"mu":"0{,}25"}
        answers: ["sha256:289bc2363d10915f0ec7287958225a63f20f5fa00a51e6725b22026268b491af","sha256:495e2826a290c302bced6d50c8263b671e306005f5443567dca477a150bfbdde","sha256:bb73de84ba596f18c39ea8ecef0beec8bdcda7cb03db7bc89eef1639db0ee41c"]
      - values: {"mu":"1{,}2"}
        answers: ["sha256:ec2bef5aaa099c5775444e356a1f94fd57d3f0b10976433830bdcb192a6b36c1","sha256:2245ce704940b8b3eac5a76537a800656d938da1f2c630128f4be2a23fe9f91b","sha256:db5a17bbae030a60ac4a4de28f86ed029389e24fd1f3f5afba9a5ce5efe6a082"]
      - values: {"mu":"0{,}45"}
        answers: ["sha256:26296712d0dda7ca2418f4073ebf52a1ae3aeb911b9af5091871c4ca08bb5ac4","sha256:710fbdbd249191a2a46e1fed497105a1407033aa7a836e3729aa5c09f9b0f1ed","sha256:a14b04cd1f946aa6005509b4a3974628b0b99cce14829146b858168696c6d25a"]
  - id: bloque-y-masa-colgante
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un bloque de ${{m1}}$ kg sobre una mesa horizontal (coeficiente de rozamiento cinético ${{mu}}$) está unido por una cuerda ligera, que pasa por una polea ideal en el borde de la
      mesa, a una masa de ${{m2}}$ kg que cuelga ($g = 9{,}8$ m/s²). ¿Con qué aceleración se mueve el sistema, en m/s²? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m1":4,"m2":"2","mu":"0{,}2"}
        answers: ["sha256:ada26fe86b225bb8b1dc31d46012f8d5e46cb13e3941af761b561aa37055688b","sha256:32dc848ccb7499d28451b5625c72b325691adacbc9c69b1507b21c1a537791b2","sha256:438659664608d55a4580c96c70fcc8bed33761e3522ad381efaa9f7e9cb6c3c2"]
      - values: {"m1":10,"m2":"5","mu":"0{,}3"}
        answers: ["sha256:1ca1308d560e77092357b9f0380f08d98b155082b579c8a190fb6966678708ce","sha256:5ec30477655dd38f2b2d9d18e3e5d7886c4f9e8baddfdbc9ed6963b7f3eca1e6","sha256:12832a47c940af368c13dc59c2ff8440eca6b5494ebb9e463d9087e9b2cffa95"]
      - values: {"m1":3,"m2":"3","mu":"0{,}5"}
        answers: ["sha256:73525789ef4ca00cb99f277fb93b36aa7a0cab7db6dda05a2bfdc91fa8d3a48e","sha256:30caf6fec68c6eb3fc2cda93f985eabc5e7fd0a252f48e850020d310cf9d5d48","sha256:2edaa0faa267d6af2924430b588e3aae21deebf40f719f0620c0ab13e4f3b7d0"]
      - values: {"m1":6,"m2":"1{,}5","mu":"0{,}1"}
        answers: ["sha256:10ca85ee0e8f9534e6d21898516d5c760714babaa3775fe77327450cf510f0cc","sha256:d2ed0c1d0823a9745519ee9006a02c584a76ac2523ed8f80c54f44912e427800","sha256:bd524f87e5d5f14f9ed5ba00606c29bae666527e292ff15bcc093093f134783d"]
      - values: {"m1":8,"m2":"6","mu":"0{,}35"}
        answers: ["sha256:e9222241a5838570b8ac907ac2d73dc70b4fa675d51c0909b6a1ce6da7870a74","sha256:406bdacf7f990d2aa515859f4b96a6ce60b8422f0abde9d95b4547829997f733","sha256:f1458b715be4bb8c77b90342bf99b0ebf189c9785e9de726da27f89cee1d6cf0"]
      - values: {"m1":2,"m2":"1","mu":"0{,}25"}
        answers: ["sha256:9defdd1c5668b5d60ba233f3b406062a20e40b5e47e3a6cee51c6b1ac4cca7f6","sha256:bb2bf03c3d06ec634aaec4f85cf4ddc257b009f80df152d6606a731886a0fe05","sha256:21544d0ff148213678d958c8131d53ec7a8a0f5e82e72f45a17f67219329aaf9"]
  - id: curva-plana
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la velocidad máxima, en km/h, a la que un coche puede tomar una curva plana de ${{r}}$ m de radio sin derrapar, si el coeficiente de rozamiento estático entre
      neumáticos y asfalto es ${{mu}}$ ($g = 9{,}8$ m/s²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":80,"mu":"0{,}6"}
        answers: ["sha256:d337815ffd8628898d2833849481dccdae23bcb4489b2df88472ad0fa39a9b8d","sha256:81ae0bc9da48652d9abd648a33a1e4736a0a80ba28ea9c01410425a4c7d4ca83","sha256:b64c8cabe2ce86e7c68900049fcf18ca41377f03bab49e532a4eca97f454bed2"]
      - values: {"r":30,"mu":"0{,}9"}
        answers: ["sha256:66080b2a111564eb2aa6d528bebfca3eeac797b58895168bb917db9033b51890","sha256:143fa309ad53f3f7aacaf1fd435ece87850b0abb51655b41e57e81718bb3a066","sha256:ff18a3ee71f9ca4d4c4578d4d644ce04103507e92bacd888af5786c5d31d65ce"]
      - values: {"r":120,"mu":"0{,}5"}
        answers: ["sha256:a012237c1cde33b277c2db422f7a0ff990cc75a225e46c2306aae0fdf2706dd9","sha256:852b6d5766782e64f3c0da5f36d6d6e0d7a1d52daee8ad0e241d24457c63fc20","sha256:375f74e730c4a77a66879f777ac13d503b02080302fa6712a7af65ff84c34984"]
      - values: {"r":200,"mu":"0{,}7"}
        answers: ["sha256:e1a6c7dba848e1d4c35ab6fcce07504115630314a85775da51a6cd1aa2c28290","sha256:c6f68b9b8c59ae56a80d5dc048191426af33bd072ea769fcaf1d619254014208","sha256:13cb523ebf34a0d6698fd86cfa8801a5b22c05a96de37148006cc7e623d4b8f0"]
      - values: {"r":15,"mu":"0{,}4"}
        answers: ["sha256:422f7e0e6c5635b502fa5d13aae272d6a5dc11a3a25c084f5ade796a711b0477","sha256:f568f85fec0021eb1f7cbd8c826cc125c32ba62e0dc1c622487e6f9f8ed2c5d4","sha256:edd767f773e332aebc65f2f17adaebaeb8c598ab21e1c039baf435f832fb9701"]
      - values: {"r":60,"mu":"0{,}85"}
        answers: ["sha256:348687b86d3bc080b38cfc5c4e22589944f265cae37ea2762872e8fcc031aeb8","sha256:ad757d071cf14bcc18a9ffcbaae7eed8f0d3ecb91ab458a186335556733fec7a","sha256:6ca650219e6e09fa63b8a21e8593243e95ac219578e3c0a987d1c008957fbc43"]
  - id: curva-peraltada
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una curva de ${{r}}$ m de radio tiene un peralte de ${{th}}°$. ¿A qué velocidad, en m/s, puede tomarse sin necesidad de rozamiento ($g = 9{,}8$ m/s²)? (Al menos cuatro cifras
      significativas.)
    variants:
      - values: {"r":100,"th":15}
        answers: ["sha256:8d4820bc003d061b72d2a450441011fc6da39dcfe2ba7f64f6d22be645909038","sha256:4378e7c1e753a45a23b658d1a849dc94d64b586d8c67ac6b83c661608e46567f","sha256:90247f19b4f33995acccaa58cb9fedea757b29127afde0983fd3a841ce277ce4"]
      - values: {"r":250,"th":10}
        answers: ["sha256:6d39940158adde257e9a1f8031c0abba48f592dd12ce4d41c906d6f2cb817866","sha256:6b60e4307d10d82ff09590b53e086250ba42a3f34b155ab1c46964c7f7f2be1b","sha256:5e7ed4a306151021155b9dc0bc809cf4b0111180b8b0127527ab936487516cee"]
      - values: {"r":60,"th":25}
        answers: ["sha256:8877a3c74ea4bbaeb4574ac7b07bf6bf50e528ebd67a9b8c6f858005f0e6d523","sha256:15e239126d0972ae0cbbc783991d9a6707468467480de38e6024d83e724540b5","sha256:c3e38e2ec5e4913baed151a88bfea349bc684dcbd0bae6c8d4259a1e7bcf9c1d"]
      - values: {"r":400,"th":8}
        answers: ["sha256:00968896fad1fc5670015b47b7aa4c4e0f9c3f7894a8cfd05bbd62cd3219c1f9","sha256:34fd8fc6970edef0f6d86db0ce67aeac33ed1099f5789c75313861079c160753","sha256:c534884fe1f0f6bf5f45f1884563e20fb808bb844ab2e397ff54742a98591a8f"]
      - values: {"r":35,"th":30}
        answers: ["sha256:3db6c75564889f459ab464e97b49b88870918a8387b19d5bc2bd777f18df937f","sha256:4433cab3d3b93dcd6643888eae475546cadaf3ea03fc9bf87e01ea0ea1d2f532","sha256:617efb4585e393ac0403db54699ecd629fec8df5f632769f6748228aa9cfbea8"]
      - values: {"r":150,"th":20}
        answers: ["sha256:62cf790a6a14b48c98098d255f6b72a1022fbd54750fb0a59500544707032c86","sha256:3f9c69bb8e07af13c0630b4939221158766465a59781f4cc816e4c9e6f0e3da0","sha256:a0dd7d1361ff195da0bf798f8410c787f07c4410bb79157ab0f0fb5b7a496e83"]
  - id: tension-en-el-punto-mas-bajo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una bola de ${{m}}$ kg atada a una cuerda de ${{L}}$ m oscila como un péndulo y pasa por el punto más bajo a ${{v}}$ m/s ($g = 9{,}8$ m/s²). ¿Qué tensión soporta la cuerda en ese
      instante, en N? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"0{,}5","L":"1{,}2","v":"3"}
        answers: ["sha256:612f799d12bdd67fd95b75b8fabc87577d7f70fe416c4257fe796a66b39f0d92","sha256:d7f7b3fb3600a6b914e276d951583acd5561abb8a409db7fc12ae7395f7f943d","sha256:0d86398bbe04b601405bbd81fe88bf7c327a556c1c38a71708b5f93642956b53"]
      - values: {"m":"2","L":"0{,}8","v":"2{,}5"}
        answers: ["sha256:9f66494e8bbbbfa2afdbb00b91df1755f01c0191f2fcc58ef9797a97991a3473","sha256:e9785670b883b2c1ad4e4a0719aa6134681b8e70ad3a7e23d529aeecba5a9f55","sha256:bb3d7ca6b7987fa48b23cd24c03be1e7fe6c45ae784e2581f66f604467fbba93"]
      - values: {"m":"0{,}2","L":"0{,}5","v":"4"}
        answers: ["sha256:0ac77d583601585991634d96f4dac29c470b4c1436d2106009fa17e7d7d4fa97","sha256:7898b253422217fddee16ea2789e08ed3cd9847ec883b0e78aa5689d86c43a32","sha256:da6f1c1ac50eca0131834e02234a5f3aee0d3c5df3dacc791e6568315b57b5ee"]
      - values: {"m":"1{,}5","L":"2","v":"5"}
        answers: ["sha256:54f56678cb1502c0d702662e49af8198b2bcb0d42bd35eb0a91650ed2a161945","sha256:78b247b8352c22f50e842ecde6e9e6706da6853de277723244b9e7fa540f0999","sha256:d570d6be80775fedf0267bd6f8e5c835f1dac5ae7aff1170fecfead9e907dfe3"]
      - values: {"m":"3","L":"1{,}5","v":"1{,}8"}
        answers: ["sha256:09cdb671d90231ab244d76ed000dec5c217ebe3c6227ec2d7c5cf02b7d395b65","sha256:e1ee51ba42177c3585a3b39df8e87e5a76e4686a109cc2046a62a4df249af7f0","sha256:57c436354acbf2b12653bdea3ae3134bf588e854b2e04a5cbb21cd859eb4e0a7"]
      - values: {"m":"0{,}8","L":"0{,}6","v":"2{,}2"}
        answers: ["sha256:f67c873280705c47bccda1cc29dfef93e4a8e2278e1b7946f21149836ac13706","sha256:794e2007ce14ce8f8d0ad3003c291e96dc2c9ce606d7a2e5fe86136c38c11610","sha256:d12178ef6e019df584cf636ef146e37c2441b42e032e509b2c2478d7d29e5d5e"]
  - id: rizo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un carrito recorre un rizo vertical de ${{r}}$ m de radio. ¿Qué velocidad mínima, en m/s, debe llevar en el punto más alto para no despegarse de la vía ($g = 9{,}8$ m/s²)? (Al menos
      cuatro cifras significativas.)
    variants:
      - values: {"r":"4"}
        answers: ["sha256:5c9fcdd93b3047697697569a52ec487bbf97edb3eb8f21618fa7aa369a25d596","sha256:b8ce121ee5101e018bc8a86a605df5e2cb9b73996f1f4a27591a73411221320e","sha256:a050c999a1b6c87a31389a1473b174b3d9cb53651fa61e9288de9f12a5819b8a"]
      - values: {"r":"10"}
        answers: ["sha256:b77ba96e7d111e7e1ddca7c0521e9490c62b0f50abeeddeda0eb404ea9b2bf35","sha256:a78d5f7fac15197c97244eaf0f157a59c9ef8410cf3b501e73b49ebd3aceef84","sha256:28db88481ea445166f8ec32c3372d39061f48dc4c5d4eec7066072ae6574f037"]
      - values: {"r":"2{,}5"}
        answers: ["sha256:3147f4fce95c8ec1d7c601326f5f80b3bdb080901457b16bc9502245197ffd9f","sha256:ae3a862380104fe2b00e96ff0e1cee139be55ca156939136b5c48d61c993152e","sha256:7a1ae74ebbe6c7ac7ee88246b9617314d51ee5692753c6aa53893cb400a138cb"]
      - values: {"r":"6"}
        answers: ["sha256:782091482ab7b81e32babccce91baaf6e33c70e07c8be2b265862a4a0f291bea","sha256:8ee799751b169c8d7704d25e6f10d28f0dbe94e6a894be525da06dbc14c68cbd","sha256:b27c2a224a9c203432beb250720d2db48a953879929d8199c980c9f629ce97b4"]
      - values: {"r":"15"}
        answers: ["sha256:bb8941ef80e1259a04b05f361ad36ebdac616be366f0022c97060b4660f9078b","sha256:489bb11638fda4d1383c287fb7b975b2b5d8dc3d9057f4dc5496cac26e7538b0","sha256:d6d345c4e4d50a853edb378d1ffe4f25ebc96e10c1bcb7383640185a237c537b"]
      - values: {"r":"0{,}9"}
        answers: ["sha256:834bd23cbc948eaeebf761c7d2627fa5c1a3546a278165a27d73f0a1b0476f5a","sha256:947b79ec59dab25b09fb140fe27d25de3f1507386693d2bdac0c4425375d0b3f","sha256:5377cec93ede37f7da457f06bae598a5c046a1d28bda8122d73093547a6c293e"]
  - id: velocidad-limite
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un cuerpo de ${{m}}$ kg cae en el aire, que le opone una resistencia $F = b\,v^2$ con $b = {{b}}$ kg/m ($g = 9{,}8$ m/s²). ¿Cuál es su velocidad límite, en m/s? (Al menos cuatro cifras
      significativas.)
    variants:
      - values: {"m":"80","b":"0{,}25"}
        answers: ["sha256:d423b8f4fa30cabfbfb9185df1341212b837e283e5864b4ef3859e191c6bed2f","sha256:e91bfd9621170b7aa713959e7e574da6fbf2ee899baf8f14a6f0e19ab77b17f7","sha256:7ee5e87ba905f238e7a5a2fd70b1065e7a6ffe6d18d0c97b3180fdbcaea086f8"]
      - values: {"m":"0{,}05","b":"0{,}002"}
        answers: ["sha256:2eebeb9f3732125f3f949bfa8ceed9fefe88d85f87785597761e32e0cdc6e231","sha256:6d189ef752e2a8cd140875f09d0cb28192568a887ac2814313cca030fc9ee28b","sha256:94986351b02a8598cf80fb8870634d948757651a9f435c50a42568d7342a755b"]
      - values: {"m":"90","b":"30"}
        answers: ["sha256:5aec745694abfc71b330b0cd11634f606dd40a8d23c354a1bea8a0c37e381285","sha256:7da300ffa57560c26805c0ea55b75e702e2e21f3389b511a5c38c8e4d6169239","sha256:a943e45578b513852c3037dae87bf052b7b862c473ce618ab16bfffab1c341a0"]
      - values: {"m":"5","b":"0{,}04"}
        answers: ["sha256:6dae394ecc5d2635e4f4e02997aa74aa0e32fdeaa22e4b1cbe1de2e09f7e8db0","sha256:24867b979f32a1e2af4b915405ba21ea6b72aaf9c2bc7dd20e86f266f1484804","sha256:914499568dad26375bd4960f2d095b741e9b7f989a9682d26bcb1714ffe317f1"]
      - values: {"m":"0{,}001","b":"0{,}00002"}
        answers: ["sha256:ac6d62398a900bec44dee03123a02bb3165420d7c5737642995d5fcc71afed1c","sha256:e863e9c96a1691fa5785f365211bde93ce27da7d0d39e11d1481ceaaa59b4a20","sha256:8f392d460b0593c01bfe62b211504567ff46b34f0ebfc33ccec9c8d84bb3959c"]
      - values: {"m":"70","b":"0{,}3"}
        answers: ["sha256:78317eb2283efe40c3f18cbebcae68b4d4d63ce0107c3b99c7a1ceb2978d2f35","sha256:b6b0adbd1c1156b7b26eeb85cccef5665ad2e62eddbd3d7428f12319c1fb7961","sha256:785d455a6dd01e4b9272381394108c618df6052bf29d973bf060d2a948ade7f7"]
  - id: rozamiento-y-curvas
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica la diferencia entre rozamiento estático y cinético y por qué la fuerza de rozamiento estático no siempre vale $\mu_sN$. (b) Explica qué fuerza
      proporciona la fuerza centrípeta en una curva plana y en una peraltada, y por qué la velocidad máxima en una curva plana no depende de la masa del coche.
      (c) Explica por qué un paracaidista alcanza una velocidad límite y por qué al abrir el paracaídas esa velocidad baja mucho.
    sealed: "gz64:H4sIAAAAAAACCn1US27bSBC9ygPBhU0QTuIlE+/GiwEMXyBMjFKzJLWnP3R/CNOCDuPlLHyB2epiQZGULAfBbLurX9X7VO+K6E1O2ruiKarqgi6rCrcGVcUxHV6TVr6qQCod/iNYzS4FinAeWxrRcTT6haZjjxGRQY85JgLBeDhWHCloj54CQdueOx2Mr7ElKcoO9vD6rK1H2bY2P8T78iuiBts+P1JEdgRFjwTlHcovn0vcY5TmkWEzD1yDTeuCP80wkOGlspbCE+7VTEppd/j3IymVyXUeIx3pYFxgprf/3Je4cD5YMpZdOh3jG2bssoHKLHzs4TWCQiCnKOApMyy5xI7D5VXrWldVFyuR946wzhxeCEr0PLz1nEim5ZnycukyD9TIoSEEjtkkgcOWlCawmV/7K9y6WakcBkJvyJG86KaaM21OhsJQ4kAGHcP4CMfZzjexOSpmN2jbDaNt14HUzg4/r/e7sC/r1o1Q3goILEUC9RRYMdhNYJ2XeTsfa5TDw65tLT3vcYO2jU8h7Wb0TdiXQrjjnl3HMggbQ79TkSETdVRLM+Vt791kwdYH/eJdWiiIduIPqPch/UncpnVRuzMxauGZyLVt2or4N0eiE08Z7+iYWhwLHHVM7ET7jg1IB4aamEs6DWFg45XuqPsKMlDEoQZlCQ0tgdebTIaC+NJz9BOto9kyheyPy0YSeI6Hjh+l6dwuNCjtBjdYDQ93P6/FkXJ4uHuX2G4+rfZz4GXvFB3eOoqw2STdG60ILHrxEudViYspuTH3HNZaab6sQfHwNkVYsEusZAtlY31E75WPsJ/iVVEXIa+CVkXzfVeooBMH7Yum+EvHpN0m81noRpyWDyP4eR5FWrA5K3v/Q37/JKRdn13ysWiu9/WHhn937JJeC+K7poK9JTXF63zT2EFRd0zZCGl3eqvdEsrF6WPO/6/77ULmg2nm8GZ14nlZ+Clro1fyF8ogPPmP8TxVtahiwGtWyU8RO3PvY/cf+196sBe5twUAAA=="
  - id: r-rozamiento-sentido
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué sentido tiene la fuerza de rozamiento?
    options:
      - |
        Siempre hacia abajo
      - |
        Opuesto al deslizamiento (o a la tendencia a deslizar)
      - |
        En el sentido del movimiento
      - |
        Perpendicular a la superficie
    answers: ["sha256:7ad7ad12d02f86ee2a7b6e021f2a37eca7ca3a76d77d99417ae4a570a01d87a0"]
  - id: r-mu-estatico-cinetico
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál suele ser mayor, el coeficiente de rozamiento estático o el cinético?
    options:
      - |
        El estático
      - |
        El cinético
      - |
        Son siempre iguales
      - |
        Depende de la masa
    answers: ["sha256:70ca5a5d92b27b62c1f7b8262915f8a2561ac414dd0428ddadca881a94b49c99"]
  - id: r-rozamiento-area
    tier: 2
    type: opcion
    review: true
    prompt: |
      En el modelo habitual de rozamiento seco, ¿cómo depende la fuerza de rozamiento del área de contacto?
    options:
      - |
        Es proporcional al área
      - |
        Es inversamente proporcional al área
      - |
        En el modelo simple no depende del área de contacto
      - |
        Depende del cuadrado del área
    answers: ["sha256:2f827a4eb48db0503b53dbc13dae0e284cc3b5c13e10c4242f2e0ab4491aab83"]
  - id: r-angulo-mu-1
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si el coeficiente de rozamiento estático es $1$, ¿a partir de qué ángulo (en grados) desliza una caja en un plano inclinado?
    answers: ["sha256:7d6fab79922b2a4e389610f93c317ffe21118400623c40d9efcf7933b1eb4d5e","sha256:0d2a31ad22d95c39390eb700af9bc7704802eebd23f51849c0626b89b0e19994","sha256:3415edd0da3be108355b149908b97454a1e357198fab7db2705a5035a0f88c44"]
  - id: r-centripeta-cuerda
    tier: 1
    type: opcion
    review: true
    prompt: |
      Una piedra gira en un círculo horizontal atada a una cuerda (sin tocar el suelo y despreciando el peso frente a la tensión). ¿Qué fuerza hace de fuerza centrípeta?
    options:
      - |
        El peso
      - |
        La normal
      - |
        El rozamiento
      - |
        La tensión de la cuerda
    answers: ["sha256:a815c9694b7512b9cfda5944c6a0e9693725a9551c8f8d3ed68329aaaecf9685"]
  - id: r-frenado-mu-doble
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si el coeficiente de rozamiento se duplica (con la misma velocidad inicial), ¿por cuánto se multiplica la distancia de frenado con las ruedas bloqueadas?
    answers: ["sha256:caff7aa9bd854b7d2e59d05ccc8633bbdc19c90860e8a7413eaceda83a7d37a1","sha256:830de8e742b19b8cbaddd96c1d392e11e9da9e96acbefbeacbdf10bd3abed860","sha256:bdd2ddffba3be30a012647ca73cf154f87b36b7b321b7defc25ba8d347c5cff7"]
  - id: r-velocidad-limite-masa
    tier: 2
    type: opcion
    review: true
    prompt: |
      Dos cuerpos con la misma forma y tamaño (mismo $b$) pero distinta masa caen en el aire. ¿Cuál tiene mayor velocidad límite?
    options:
      - |
        La misma
      - |
        Mayor la del más pesado
      - |
        Mayor la del más ligero
      - |
        Ninguno tiene velocidad límite
    answers: ["sha256:0bfe5525ef087083d5d0a1de02c99c164b3bd873af9045b22c8767cd1237173b"]
---

# Aplicaciones de las leyes de Newton: rozamiento estático y cinético, planos inclinados, poleas, dinámica del movimiento circular y velocidad límite

Sin rozamiento no podrías andar, los coches no frenarían ni tomarían curvas y los clavos se saldrían de la pared. A la vez, el rozamiento desgasta
máquinas y gasta energía. Este nodo aplica las leyes de Newton a las situaciones reales: superficies con rozamiento, planos inclinados, sistemas con
poleas, curvas de carretera, rizos de montaña rusa y caídas en el aire. El método es siempre el mismo (diagrama de cuerpo libre y segunda ley por ejes); lo
nuevo son las fuerzas.

## Objetivos

Al terminar sabrás:

1. Distinguir rozamiento estático y cinético y calcularlos con sus coeficientes.
2. Resolver planos inclinados y sistemas de cuerpos con rozamiento y poleas.
3. Identificar qué fuerza actúa como fuerza centrípeta y resolver curvas planas y peraltadas, péndulos y rizos.
4. Explicar la resistencia del aire y calcular velocidades límite.

## Qué debes dominar antes

[[fis-leyes-newton]] (las tres leyes, diagramas de cuerpo libre, normal y tensión), con el movimiento circular de [[fis-vectores-movimiento-plano]].

> [!question] Test de entrada
> 1. ¿Cuánto vale la normal sobre un bloque de $10$ kg en un plano inclinado $30°$ ($g = 9{,}8$ m/s²)?
> 2. Aceleración centrípeta de un objeto a $6$ m/s en una circunferencia de $3$ m de radio.
> 3. ¿Qué dice la segunda ley si un cuerpo se mueve con velocidad constante?
>
> Respuestas: $84{,}9$ N; $12$ m/s²; que la fuerza neta es cero.

## 1. Para qué sirve

- **Seguridad vial**: distancias de frenado según el estado del asfalto, velocidad máxima en curvas, diseño de peraltes.
- **Ingeniería mecánica**: frenos, embragues, correas, rodamientos y lubricación.
- **Deporte**: el agarre de las zapatillas, el ciclismo en velódromo, el esquí.
- **Aeronáutica y paracaidismo**: la resistencia del aire y la velocidad límite.

## 2. Rozamiento

> [!practico]
> Empuja una caja pesada: al principio no se mueve aunque empujes cada vez más (el suelo «responde» con la misma fuerza); de repente arranca, y a partir de
> ahí cuesta algo menos mantenerla en movimiento. Lo primero es el rozamiento **estático**; lo segundo, el **cinético**.

- **Rozamiento estático**: impide que empiece el deslizamiento. Vale **lo que haga falta** para equilibrar, hasta un máximo $f_{s,\max} = \mu_s N$. *Ejemplo:* para mover una caja de $20$ kg con
  $\mu_s = 0{,}5$ hacen falta más de $0{,}5 \cdot 20 \cdot 9{,}8 = 98$ N.
- **Rozamiento cinético** (o dinámico): actúa mientras desliza, se opone al movimiento relativo y vale $f_k = \mu_k N$, con $\mu_k < \mu_s$ en general.
- Los coeficientes no tienen unidades y dependen de los materiales (goma sobre asfalto seco, $\approx 0{,}7$-$1$; sobre hielo, $\approx 0{,}1$). En este modelo simple (leyes de Amontons-Coulomb) el
  rozamiento no depende del área de contacto ni de la velocidad.
- **Frenado con ruedas bloqueadas** en horizontal: $a = -\mu_k g$, distancia $\frac{v_0^2}{2\mu_k g}$. *Ejemplo:* a $25$ m/s con $\mu_k = 0{,}7$, unos $45{,}6$ m. Los frenos ABS evitan el bloqueo para aprovechar el
  rozamiento estático, mayor, y mantener la dirección.

## 3. Planos inclinados y sistemas de cuerpos

- **Plano con rozamiento**, bajando: $ma = mg\sin\theta - \mu_k mg\cos\theta$, es decir, $a = g(\sin\theta - \mu_k\cos\theta)$. Subiendo (empujado), el rozamiento apunta hacia abajo del plano.
- **Ángulo crítico**: una caja en reposo empieza a deslizar cuando $mg\sin\theta > \mu_s mg\cos\theta$, es decir, $\tan\theta > \mu_s$. Midiendo ese ángulo se mide $\mu_s$.
- **Bloque sobre una mesa unido a una masa colgante** (polea ideal): para el conjunto, $a = \frac{(m_2 - \mu_k m_1)\,g}{m_1 + m_2}$ (si $m_2 > \mu_s m_1$, hay movimiento).

## 4. Dinámica del movimiento circular

> [!practico]
> En una curva, nadie empuja el coche hacia el centro con una «fuerza centrípeta» especial: lo hace el rozamiento de los neumáticos con el asfalto. Si la
> curva está helada, ese rozamiento no basta y el coche sigue recto (por inercia), saliéndose por la tangente. La sensación de «ser lanzado hacia fuera» es la
> inercia vista desde dentro del coche.

En un movimiento circular de radio $r$ y velocidad $v$, la **resultante** de las fuerzas en la dirección del centro debe valer $F_c = \frac{mv^2}{r}$. No es una fuerza nueva: es el papel que
hacen las fuerzas reales.

- **Curva plana**: la da el rozamiento estático lateral: $\frac{mv^2}{r} \le \mu_s mg$, así que $v_{\max} = \sqrt{\mu_s g r}$ (no depende de la masa). *Ejemplo:* $r = 50$ m, $\mu_s = 0{,}8$: unos $19{,}8$ m/s ($71$ km/h).
- **Curva peraltada** (inclinada un ángulo $\theta$) sin rozamiento: la componente horizontal de la normal hace de fuerza centrípeta: $N\sin\theta = \frac{mv^2}{r}$, $N\cos\theta = mg$, de donde
  $\tan\theta = \frac{v^2}{gr}$.
- **Péndulo en el punto más bajo**: $T - mg = \frac{mv^2}{r}$, la tensión supera al peso.
- **Rizo vertical**, en el punto más alto: $N + mg = \frac{mv^2}{r}$; para no despegarse, $N \ge 0$, luego $v \ge \sqrt{gr}$.

## 5. Resistencia del aire y velocidad límite

Un cuerpo que se mueve en un fluido sufre una fuerza de **arrastre** que se opone a su velocidad y crece con ella: a velocidades altas y para objetos
grandes, $F \approx b\,v^2$ (con $b = \frac12 C\rho A$: coeficiente de forma, densidad del aire y área frontal). Al caer, la velocidad aumenta hasta que el arrastre iguala al peso; desde entonces
la fuerza neta es cero y se cae a la **velocidad límite** $v_L = \sqrt{mg/b}$. Un paracaidista en caída libre ronda los $200$ km/h; con el paracaídas abierto (mucha más área), unos pocos m/s.

> [!formal] Con rigor: cómo se alcanza la velocidad límite
> La segunda ley da $m\frac{dv}{dt} = mg - bv^2$. La velocidad crece mientras $mg > bv^2$, y el ritmo de crecimiento disminuye a medida que se acerca a $v_L$; resolviendo la ecuación
> diferencial con $v(0) = 0$ se obtiene $v(t) = v_L\tanh\!\left(\frac{gt}{v_L}\right)$, que tiende a $v_L$ sin alcanzarla nunca del todo ([[mat-ecuaciones-diferenciales]]). $\blacksquare$

## 6. Errores típicos

- Escribir siempre $f_s = \mu_sN$ (solo es el máximo).
- Tomar $N = mg$ en un plano inclinado o cuando hay fuerzas oblicuas.
- Dibujar la «fuerza centrípeta» como una fuerza más en el diagrama (es la resultante de las reales).
- Hablar de una «fuerza centrífuga» desde un sistema de referencia inercial.
- Olvidar que el rozamiento cambia de sentido si el cuerpo sube o baja.

## 7. Resumen

- Rozamiento estático (hasta $\mu_sN$) y cinético ($\mu_kN$); frenado $\frac{v_0^2}{2\mu_kg}$.
- Plano con rozamiento: $a = g(\sin\theta - \mu_k\cos\theta)$; ángulo crítico $\tan\theta = \mu_s$; sistemas con poleas.
- Fuerza centrípeta = resultante hacia el centro: curvas planas $\sqrt{\mu_sgr}$, peraltadas $\tan\theta = \frac{v^2}{gr}$, péndulos, rizos $\sqrt{gr}$.
- Arrastre $bv^2$ y velocidad límite $\sqrt{mg/b}$.

## Repaso: lo que debe quedarte dentro de un mes

1. La diferencia entre rozamiento estático y cinético.
2. La aceleración en un plano inclinado con rozamiento.
3. Cómo se mide un coeficiente de rozamiento con un plano inclinado.
4. Qué fuerza hace de fuerza centrípeta en una curva plana y en una peraltada.
5. Por qué existe una velocidad límite.

## Siguiente

el tema `fis-trabajo-energia` (trabajo, energía y su conservación).
