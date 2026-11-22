---
id: mat-cuerpos-geometricos
title: "Cuerpos geométricos: posiciones en el espacio, poliedros y fórmula de Euler, prismas, pirámides, cilindros, conos y esferas, áreas y volúmenes"
area: matematicas
trunk_level: 3
prerequisites: [mat-poligonos-circunferencia, mat-sistema-metrico]
academic_sources:
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 7: «Cuerpos geométricos», secciones 1 (el espacio, dimensiones, elementos), 2 (poliedros regulares, prismas, pirámides, áreas y volúmenes) y 3 (cilindro, cono, esfera, superficies y volúmenes). Apuntes Marea Verde, autor Fernando Blasco. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_07_Cuerpos.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 10: «Geometría del espacio», secciones 1 (posiciones, ángulos diedros, perpendicularidad), 2 (poliedros, teorema de Euler, regulares, duales, prismas, paralelepípedos, Pitágoras en el espacio, pirámides y troncos), 3 (áreas) y 4 (cuerpos de revolución). Apuntes Marea Verde, autoras Milagros Latasa Asso y Fernanda Ramos Rodríguez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/10%20geometria%20del%20espacio%203.pdf"
hints:
  - "Concepto: el área de un cuerpo es la de su desarrollo plano (todas sus caras extendidas); el volumen de un prisma o cilindro es base por altura, y el de una pirámide o cono, la tercera parte. Para longitudes dentro del cuerpo (diagonales, apotemas, generatrices), busca un triángulo rectángulo."
  - "Herramienta: dibuja el desarrollo para las áreas; para la generatriz del cono, g = √(r² + h²); para la apotema de una pirámide, Pitágoras con la altura y la apotema de la base; y cuidado con las unidades (1 L = 1 dm³ = 1 000 cm³)."
  - "Documentación: Marea Verde 2.º ESO cap. 7; 3.º ESO cap. 10."
exercises:
  - id: formula-de-euler
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un poliedro convexo tiene {{d1}} y {{d2}}. ¿Qué número de {{falta}} tiene? (Usa la fórmula de Euler.)
    variants:
      - values: {"d1":"10 vértices","d2":"15 aristas","falta":"caras"}
        answers: ["sha256:0e1bf55f91a6b6b4029dd6f53e70f1766248930484a4895794a9e9da4cbc902c","sha256:5e1a3913900509c4b3ce42b4d875504e2bbe4a66c28b81d0ef27dba370ff6cea","sha256:57b8b551c970f13bce61b65943939fa19ebcd7b5f9a2f1f0c3ea3ca47aa8fe19"]
      - values: {"d1":"7 caras","d2":"12 aristas","falta":"vértices"}
        answers: ["sha256:36365e2c49415dd20cafd51d7f32d38ad46d2950c52351da4a4ea75203d7531b","sha256:acf138b4d6828aa5097522641347562dbce7db2f57f0ee9830c60182516958f0","sha256:698ac8b979f9fcf9a46a7040bd815a4f7d4e6785865c57b935a22c0add5f6564"]
      - values: {"d1":"8 caras","d2":"6 vértices","falta":"aristas"}
        answers: ["sha256:b9165524db1745dfb69ec44a90a3c0c0e7b13a783732f3b7b4b94f65369ff2ce","sha256:ef26daf508a337d3563ee0c903d1239882d969f7fb13e512d029d94a3cf20377","sha256:ce75c240d4b95a04dbb13b5a2df2ebe341a40df79b9910f640a0a1c86395d192"]
      - values: {"d1":"14 vértices","d2":"21 aristas","falta":"caras"}
        answers: ["sha256:5580469e9241db622359968061ffddeb3e0a221fdcba768b92d897cfde66377a","sha256:ce1356ffe1d193f2b3b83d9f85134c8e6c9414c0468d62a646220b5e659c280d","sha256:ddc95dba45349e5a247c9a1fbe51ab6ca52d3a9e5cc2b2904ba0700f7a41d28b"]
      - values: {"d1":"20 caras","d2":"30 aristas","falta":"vértices"}
        answers: ["sha256:91aab237bdd2bd71b84b518886b33d7504be259b3e92f2f17fab3bd934ab09d4","sha256:fa9deb78f88b5b6ffd18a2fd64188349e5a22d89cddd7dafb302dfd82003d361","sha256:f67d446c288404dcbede78c46b7e7dc407c37cbfe802574a001a35b18fce2ba1"]
      - values: {"d1":"11 caras","d2":"11 vértices","falta":"aristas"}
        answers: ["sha256:b6a2496fc3110fd4ab44f1674f1e70f9d83ef04cf62e1e5fb925238a971f1cba","sha256:6e5d36ae57ba19bac34f2e24d70f537261e983679065a26a80c4b5cc2e6b320b","sha256:eabb7bb5808839d10a146224c1f5ce60aa6b99127bd4fb7916fbe35650dee403"]
  - id: diagonal-del-ortoedro
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto mide la diagonal de un ortoedro (caja) de aristas ${{a}}$, ${{b}}$ y ${{c}}$ cm? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":2,"b":3,"c":6}
        answers: ["sha256:c3fffbd21632dccd0c3c879af0bbf7d34e0b336bb31f18f0cecc47322f90a703","sha256:b736b66945dd7439dbcea4d5ab2ebab458feaa80f71258a2bded25f05d979302","sha256:19dce740bd29649018590ed7e9bba2654fdda310bd5b0d7b1a16e4348b57b8ba"]
      - values: {"a":1,"b":4,"c":8}
        answers: ["sha256:e778ed6289d7d168fbb733c8b137b3241b9a07e808cb6f04999e0912d387a5a8","sha256:b8762514117debe5c20c9ee3031273eb529ad70caa9e5bef4336e13859c9f1d2","sha256:7e14f0979cbe86d5092dec97f2782257a859dc2af7161e25c486627a36808682"]
      - values: {"a":6,"b":6,"c":7}
        answers: ["sha256:414f701b31fc95aadc8358cf250de47b98e540136403dfbe45b76b593a319237","sha256:c563ec8704fc7f581ec1ea4cda07098132c09ba4b9bd2dfb6e255cde8189f681","sha256:094129b194896ca5fc22be1f3fc74fa4f1ebdecc4e85f584fed676b73f3783a8"]
      - values: {"a":2,"b":10,"c":11}
        answers: ["sha256:d8546aec32b48becb110f835a7593b8dfaf1668131a41cf1b9dd660890072bf8","sha256:74a0cc7827c1e8f594ca335a259af354e96f532b933a0eb54d5e27f7d70478bb","sha256:f0d46c529342be81a7d2d0b0e98be31482426d9849a8cd41b7c203567c757dc9"]
      - values: {"a":5,"b":5,"c":5}
        answers: ["sha256:6bd1b6644b14075fe31d69f10c1e2f83ec2676bb15263ead1b3a039beb6e9122","sha256:36a2b264d96da96d1e8efe83009ab5ec19b2f428425a7f748e85ca092063233d","sha256:627523eeaac6ecdc90106c3e1b212b2c904f7f744e20074e35d5e665e9920e8c"]
      - values: {"a":4,"b":4,"c":7}
        answers: ["sha256:c74680fb6fdea93d30c83cc15d0d146391ec4a14659ea3f4926055a8c5ca9388","sha256:d270cd4a4fb65a41a3238937407ec11d81fb11a6c421194e70229cb65c8c7160","sha256:21d3ef31cc6843b6b7b8903cb1559c8b7bae0b43aabe714158797427c6aef62a"]
  - id: area-del-ortoedro
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Cuánto cartón hace falta (área total, en cm²) para una caja cerrada de ${{a}} \times {{b}} \times {{c}}$ cm?
    variants:
      - values: {"a":"5","b":"2","c":"7"}
        answers: ["sha256:dec5e53f26ebe2799ec9edb4cb63dae580c724b7624e1f66f6181fd39b2cbe8e","sha256:a6bbf5e8567e9185f1d7c57ad7e6f4b84682cdb8014c4e62c95e0b2ce4e13027","sha256:60bd58ff98336bb2d0a7ca1cbac414957433c60cbfb0643f9404a6a1f10fedde"]
      - values: {"a":"10","b":"4","c":"3"}
        answers: ["sha256:4a610337be59fb4c2c0915b293e1310085a5a45c2fe94b8d6fd956d47f3d0465","sha256:2ff4f1d0aea38ce92aa274f7e640f500c37c94b09c9318fbba53e8140c03ef65","sha256:883d389ae8b06093b70188fb3529507436aff04d8ea49586bc8dae561f2222d0"]
      - values: {"a":"1{,}5","b":"2","c":"8"}
        answers: ["sha256:ee4d3afb6e72cd7b8e8ef3002d40536b8596099dada3f67b902d517b0e417fbf","sha256:1c9da9b263c1527104f2ac09292285d5f8ccfd50cd0d350981af7fd51c3f2557","sha256:d07a7282c583f94ad21358d28f2e7124970d3b7c8b1282b32d6ce59cc90ee03c"]
      - values: {"a":"9","b":"9","c":"2"}
        answers: ["sha256:7905285d623e20be4de60668b0311ad143804bb2cee42b0092a7d3c38f6fb6ff","sha256:53d1eca839768daa92cdbd857c61d9dc123be7765301dcbf372313203d79b56e","sha256:5e1b2c4a461a016464f2cbf35a7d76d34d4627c8b554017a80d3ad3540fb5d2e"]
      - values: {"a":"6","b":"0{,}5","c":"4"}
        answers: ["sha256:177b1c0ebe11dcc9cf051db4845369b50993b9972268c6be610dab4da390c267","sha256:d56e86ee7601de477336203c7c23f084e3427bf1519bbffcff2446a8e83e67d9","sha256:12912f11f573a841560377f39a3c645de9835587e0659a90d1289293afe74bfa"]
      - values: {"a":"12","b":"5","c":"5"}
        answers: ["sha256:7b01a203ad8a60cadf0865aaad1df5acebd130e9998b899c5de6c1bc9c346099","sha256:d7a60fdd40bbad250e1753ae0bad80549ce2717ad877ab7f06f212c2521cf46a","sha256:58a3331e14fc56d74f481c9bc2369eff304dca8801af034f14757083c994a013"]
  - id: volumen-del-prisma
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un prisma recto tiene como base un triángulo rectángulo de catetos ${{p}}$ y ${{q}}$ cm, y una altura de ${{h}}$ cm. ¿Cuál es su volumen en cm³?
    variants:
      - values: {"p":"3","q":"8","h":"10"}
        answers: ["sha256:335d267ebdac15aa532266ec249d82634622becaac1077294c744cd5c675e25e","sha256:f18b09e65f04d7a806bdac4b478d9e815adf0880688cc64fc740484c6a0f6440","sha256:7742adc555cb952e8062e1dffac5b67938e181729f76e74f9ce2c09e96269b26"]
      - values: {"p":"5","q":"12","h":"7"}
        answers: ["sha256:69eee81023b731de088936ab431b4bd52ce37167f75e063211d17ad37c2a38b2","sha256:f3a7ca5179d9cc4216c2f058dbd9361d0b0c0a1a966b7385caacff554bee8153","sha256:cde8de97d044b78c59816944a829a3aa7afe1a265f4b83e9c62fb149d7942f25"]
      - values: {"p":"6","q":"6","h":"2{,}5"}
        answers: ["sha256:0ea446ba55a5eef6439ad7f21abd9b3007b6c056353e30d7bf93621ac01f92a5","sha256:9bdb4650162d560ce0fe7986bae09fa491eb878fe1e4d70b2da253ed176ccd75","sha256:6ad06fb41799239a367aa597679850e688c668b305754335edb305cb5a89fa28"]
      - values: {"p":"9","q":"4","h":"15"}
        answers: ["sha256:bc3af906aa2c5459e980b2b7b06effd03067ac9ab1d94eb6cb4ff2b1e912f408","sha256:41d35bfb700d754e8ed22d561ee9bd2603061695e8de4a46807b68d7b5d79715","sha256:819eda2dc7d48d0a037e1ed7515307078f5026acad1ab9092731f3c68f607f97"]
      - values: {"p":"2{,}5","q":"4","h":"12"}
        answers: ["sha256:3d9391b1369040467eca2dfb1788ffe316583761c2759ef771a24f08940ea5d6","sha256:be48625e7447fc8a40dde8bd8d877475fba89155355d41f570fb5bdbbf9edbdc","sha256:a7ef153eb7f7565e069d286d7183e3eef557f247ee601f66aa77b18e22853e7c"]
      - values: {"p":"7","q":"10","h":"3"}
        answers: ["sha256:71597adb5a8393e7a17378224bd95268364991c77c508556b2f74c2986d4f561","sha256:9e184a0e5af5c9df1729ab7038762e96927d34eb4331c6df32e0bdc1e2b019c4","sha256:c8dbac060c91b41efb24e89aa3a5f74d76b776bef1848b5ab945808e2160900b"]
  - id: area-de-la-piramide
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una pirámide cuadrangular regular tiene una base de ${{L}}$ cm de lado y una altura de ${{H}}$ cm. Calcula su área total en cm² (halla antes
      la apotema de la pirámide). Al menos cuatro cifras significativas.
    variants:
      - values: {"L":10,"H":24}
        answers: ["sha256:cb22a5d253826e216839605165c613604140a11a24ca1ea46f9a906ace9e341e","sha256:5df842874b7c9de5c3145b34abbcf004b978de4f74c9cb27c0ea6e72d8600cab","sha256:dc5f7f97b8452e015f60cdf13610df9c6ce4801e99bfad21a40c95a508777a8e"]
      - values: {"L":8,"H":7.5}
        answers: ["sha256:36b99f000834bd9bf3e7fb2ef26b8ed5e0f96d8096e17fcd93a15dfd56392cdf","sha256:42f97a23086030d9d36f71c547f8c444f9f68516614695b113b231a1960f35fc","sha256:525d4b3bdb2597c326b18ce43e364b5be5e476fb5b388128b4af59f731ac7e6a"]
      - values: {"L":6,"H":5}
        answers: ["sha256:20c5a2055f64c524c3966fdde860052c0e15129faac8c1b6262b4633f70c9969","sha256:6d2966f647faf9f450587d611828234fd444e8163dab9be46abdc8daa83b6dba","sha256:05d976582db83c78e4ac4780a2eef71e47e31c7b0f841d8e7d7470dec6825ac3"]
      - values: {"L":12,"H":8}
        answers: ["sha256:8543ceaf93fe9f50972e2c28d4767f2829c016517ff7fa612bdc1dd768f046a9","sha256:dd128f4327b18eb2d49b9383aacb316130d1e8874560f3f46abc39cc1840d3ed","sha256:b21621a5ca8e1674b8f1f75b05f065277086fcc04ae07765915534c51f8d6ec9"]
      - values: {"L":5,"H":6}
        answers: ["sha256:91f675a295f20754b897ceafacc3d9a934e8a47fa163706d273c916db4cb7d34","sha256:9690ae6e70d49fabafad49e068bc46de904f3c1cd7ad1406c3fe99120f0922d7","sha256:4c7fff0e49859b6362e79766ee79b0a3441d1e0dbbf11300e9817f9ebea2c975"]
      - values: {"L":16,"H":15}
        answers: ["sha256:3c84707b96d35f1a4e710b0a994e8273102d591b856c424db06a7b3639d9c021","sha256:3908592fa60a2279f8b68167177ae960195ff6a8304092561bcf2274c75c6320","sha256:2c6bb71acef241c656c59251a08ebbcae681f5758a0470ca9f2c6109c1bec314"]
  - id: volumen-de-la-piramide
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Cuál es el volumen de una pirámide de base rectangular de ${{a}} \times {{b}}$ cm y altura ${{H}}$ cm, en cm³?
    variants:
      - values: {"a":"5","b":8,"H":"9"}
        answers: ["sha256:376d3f9b6b7e02a616cdcd016422836170caa7398aadaf1130f090a6d4ab2d89","sha256:3664585caf3f5e1d1e16821b282cb96aba4e146eee88195dc9e9f5339742611b","sha256:8ca9716a10608008ac88a5ef0ae022fbed10f996ca2fecb6f3b0615f61b3e6df"]
      - values: {"a":"10","b":10,"H":"7{,}5"}
        answers: ["sha256:3e18ac0be0b66ca8c10f2a3c458bc72f1c40c304710b55c06648c93c2fd71b1a","sha256:876722bb48da25d3840cc5b49ee6d41ad5f2ad5dc671d6ba2b835a1543f7af68","sha256:8a74d141ed3dcc93a6d4863a14ebbf2b19097f2a822ffba86802a8215a04b663"]
      - values: {"a":"3","b":4,"H":"12"}
        answers: ["sha256:5167a4838df036cb1775316ee533550056f5a22085f0ac578582828a519f00db","sha256:ee3ae8d640784613c2e305050449e8b67cc4d351e5d48bc9f0e437cd7f8515ca","sha256:e72d1d130715e90d8de40e4aa13fd97223a43d17fc0ea127accefc7db1629014"]
      - values: {"a":"7","b":6,"H":"5"}
        answers: ["sha256:08d58db0d8e1809aac805eeafff587c1edd66270ab2b23abd850bb0eab9f76dc","sha256:18a1c2a82ca40ec53a4aefbfc52154404de17038f1b75c24014448e93e88d03d","sha256:879390f4305b94815af854d749fb3587b676c9511dbb1fe4ba7f141c54a3b95a"]
      - values: {"a":"2{,}5","b":6,"H":"8"}
        answers: ["sha256:d81d3a866042e291e08edda0619b866f9b8c6e436ddce8aedad87aab4e8329fe","sha256:100addf2ce1ff547e419430f0afc17a57b7c38fa2fd2077b926dbdb30cececfb","sha256:c1ce4ffaa89051c1fb8eb4db0cdb3c24e4d7973c5cc2ed1f03ece0f0488093cd"]
      - values: {"a":"12","b":9,"H":"11"}
        answers: ["sha256:5d8d8961b015bc4ee5fcdcdb61918d959564193699f87ef6dc7bbfdf9d236d14","sha256:81aeca4e8ac15a024eaf94e97062580151b0a43896e19237a40534d46b7928c6","sha256:a01f04030378e17d40fbb8f660895a536853b223dd24ce8e92da21b734c0c483"]
  - id: area-del-cilindro
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el área total de un cilindro de radio ${{r}}$ cm y altura ${{h}}$ cm, en cm²? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"4","h":"9"}
        answers: ["sha256:5190647ab143705503208d23ccdca041d3320cb19c627edbb4a3f7ec9c61112d","sha256:c51ac56ceff6d0c6da3256b1e042626790d7e92ca8f4db2e8e6a465038f95e4a","sha256:5e4f9d85b342122e1ea001f1d06e3b63b4b5a07b07b1595f5018a397da177b2b"]
      - values: {"r":"1{,}5","h":"6"}
        answers: ["sha256:5a8d7e9b5a554757e587f1cd0ea4f422e4e1cd3cc3e62e9099d9be4ca97cafa7","sha256:ac0be54f51af8271517286ae8020624210091798b26caf0730c8d62d8606560e","sha256:6ae449d89e35633db5b5ef03b5bab0890c081b87332c31f2d774bcb0f1f2d69d"]
      - values: {"r":"10","h":"2"}
        answers: ["sha256:0d9b1c62a30d096c1f701089445fe5badcffd87f3ded1704cc5a4e8df038305c","sha256:ed93dc5d699140953b9b505db088003d964065dd84039ffe2e9efd16473f69fb","sha256:b023624345278165dc19fc8826f1fd7af7b871e2846b28fd9dd4014470a33c51"]
      - values: {"r":"2{,}5","h":"2{,}5"}
        answers: ["sha256:fdf936913cad5f7b4134be95628a3649c7358733602de9435ec71d848627c0e3","sha256:eaec62821fe194aa2d032de2576127e0becab627a4d869e9d15a5a61f2df00c1","sha256:7163010619544f67da4b9abda53f8988adc8e35500b07aa5fbf6dc684ff7de86"]
      - values: {"r":"7","h":"20"}
        answers: ["sha256:03387732bdf1f4a388ceb77d27a8dbc57348f0fd78d49448911d321e3f56a2f7","sha256:33551e11039687e7d7a2389019e8e94290c225bb058e8d02c1d67841c50b43c4","sha256:5f3b64c9fa5d71560088e21ebe32804d2a670ab8c247ef0d8c7eb52f14684f97"]
      - values: {"r":"0{,}5","h":"12"}
        answers: ["sha256:fb0285aeaae053460667d9acfb4b733ce1f970b4ee12dbb935836725c4766710","sha256:bca6e7a821c2d7f64cb1e7aeb1282d971c7832ca6e8f6a37d8c3abca12e9651f","sha256:138bd36289e07efe0510ae76c93cc60efb5ad1c9ba3e96b5ac141cf59afe791d"]
  - id: capacidad-de-un-deposito
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuántos litros caben en un depósito cilíndrico de ${{r}}$ m de radio y ${{h}}$ m de altura? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"0{,}5","h":"1{,}2"}
        answers: ["sha256:dc01853732de9b165d4e38aaff876d182b57ca112445843835fecb8d779e0668","sha256:610dc01774d24c72b297237bf278f2d2e9d20445af6185ac96282f94b4cfb703","sha256:6cf922ec99cfbbacc334f152d7be2b822447c5e3cb1dc565f0ff6862c42d3bee"]
      - values: {"r":"1","h":"2{,}5"}
        answers: ["sha256:01501bc076e30330dc122984b248ee87e04a87a9c02c40f53ec4f721ccefc712","sha256:a81e59c7e9952f96fb0e2dc92003a7426a72125a4d0241e51aa09ffdfcd6f1c5","sha256:145db456aeed916a3ec928f8ee9924c4b355a2971fbefbaa4b97c6b9121993d7"]
      - values: {"r":"0{,}3","h":"0{,}8"}
        answers: ["sha256:aae2827d49937673ed5601312b726bf86d47f04715b8f328fd56e6e7d4f9abbc","sha256:52e6ff617b328a3359743f77a0b178f92142b84a08455ffd4d6a7af8d829f930","sha256:10bb2debbbc9e96b14911ea48f9b6d24015b60e4de5ad2d2eef4edbe83072138"]
      - values: {"r":"2","h":"3"}
        answers: ["sha256:c5c6b0948b7fb90f6d0e15e9e16c420b7e233d57b6834f24cc0ba5104b8d62bb","sha256:a208aaca5832f3372a378cad9177c011dfda3d51789054c7c44f1b8429fce349","sha256:557bdf6ba151f1dd0675a48f6b1771cc0521fb1a1382ca84feeb88046242efec"]
      - values: {"r":"0{,}25","h":"1"}
        answers: ["sha256:7613b8957a89e433aab9772a0f9dadb32bb6dbbe6821c2661e33ff24151a3eb9","sha256:3e784ce22b793790c6128d4ccc0304887f88f1699a48d6e4f52e4825d2e56940","sha256:67e05cfc51d1d4fa077916ccadd8066a12f725307adc2bee8d8bae59b245fbdc"]
      - values: {"r":"1{,}5","h":"4"}
        answers: ["sha256:d56665bebe7c6d53ebacd44c28bff7b1dc001d58db892da081caee61756fc746","sha256:fa390e287c42b91a506ba4ce4f7f5d5bee7efd528ee7b5c9afe3cb4f78583e9e","sha256:ee4b87636662a7e8cf001d50b0933493befd48bd3665513c913e1ccc7781d497"]
  - id: area-lateral-del-cono
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un cono tiene ${{r}}$ cm de radio y ${{h}}$ cm de altura. ¿Cuál es su área lateral en cm²? (Calcula antes la generatriz; al menos cuatro
      cifras significativas.)
    variants:
      - values: {"r":"5","h":"12"}
        answers: ["sha256:ab7b850ae7e11e289f9d93c5ee3a0540c2483e769db89a35cd0db5291c48909a","sha256:6adc42ce29163f957d5faa0ba58de1bc66f3ef43063a7c9b21b4615045c95e7a","sha256:df4f215e895edf47d8a5de1179c881238baf7af6661dbb284a34d0a50c12d26a"]
      - values: {"r":"6","h":"8"}
        answers: ["sha256:87537086b9c30b969cea0574c0876ca120c53b55e95c095e5a7b1b5a3a9751bc","sha256:b195285733f250d08f3fe8629d5db26b3a4852d25c82e360ac4b65615e786de9","sha256:8d727c8d2946a377fcec97816dfe5ffee53ed7b9a2fea40278db354a9b6e4db0"]
      - values: {"r":"8","h":"15"}
        answers: ["sha256:c2e232018a2d6beb2db994f3c1403d5ee9cfc08eaaddc02b179cdea16ff008b9","sha256:b317769176d23a72eabec1ee88201131eab4481c9acddf9e96f8fed423a63b4c","sha256:96d664520707c27dfc0c66551fd9dfa26d142da0c88a719024e6c1171e4344ef"]
      - values: {"r":"2","h":"7"}
        answers: ["sha256:2fbe1ad6e80345a5bf249f793397ad16a541bc5a3ffc73ac2c502ad7d27e8eb8","sha256:5f9490b2fa2a163ebcfeb725ed5437885b94c2d5543043183bb47f32e5c01697","sha256:2e89e1c69dbd57bf99155364138ff7cd07f0a64ce39d4445ce20a81989a0476e"]
      - values: {"r":"9","h":"12"}
        answers: ["sha256:fc572e767998a71f607cddbd4bbf9883010c7caa31ac7e661508581226f50a20","sha256:2a6a9de4b220ff014cba8dff9bad043d6977d5701151aa4e383011ca290b6117","sha256:f36ddd61b78c349112704ba2d6e8e98c6a2533b5637ea2565a58546500dd553f"]
      - values: {"r":"1{,}5","h":"2"}
        answers: ["sha256:8a6c31cd326da03613103a34315d42caba2c2a671387a0c572c8e16a77497f70","sha256:99f1a73a0cd5fea5cebafb8786c8acd579c20f5d8aba8dc4ab2412e7d4a01d24","sha256:8efb03933c6320775a43cf23148cdbbcd1d5477f0408916520b808a4d6bb1e98"]
  - id: volumen-del-cono
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el volumen de un cono de radio ${{r}}$ cm y altura ${{h}}$ cm, en cm³? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"5","h":"9"}
        answers: ["sha256:78f5f940604822cae932ac034537801d7866d61f06db461eb9ac3e4f69067ccd","sha256:4c11ffe5c948a1819025f238ee21101ccc15967176973f54e3be2036c72262c6","sha256:bbd566509172b35387e18a2dff9feb983ef788ae14153600d9369374e01b30e7"]
      - values: {"r":"2","h":"6"}
        answers: ["sha256:14959d478798bd3ac832c6d8d8c659d3d47abe237dc1bbc672af7180a513320b","sha256:553fadd8da2835a9fc650b93aefc9577ab104788539c70ee43ab07adb6ceccc7","sha256:39de35d07510b83a5564478eaddba8f3b1bf0ef299205fc7ff8909bdeb61274f"]
      - values: {"r":"10","h":"3"}
        answers: ["sha256:6b7fd543c3f2c47a126e7ca8e59cb8b66e21e70a70bd7d17763ca452e0590786","sha256:2cec2628a805f4f41587d07f45e4fb82864787090dc94d5719b6eac90c1d14f4","sha256:dc0eededf46a1334cc654387d5b49214c15d4fa99a92f7294da18a8523166858"]
      - values: {"r":"4{,}5","h":"8"}
        answers: ["sha256:f5abec6c9af5babd558ab1d7af542bfd4f0f5d77f37b7a41ab4200a732f4fc67","sha256:82c6762605ff8c2f3320fc6d046a1a1f99428e60f2df044a073ce8a94b2a1b30","sha256:aa68f11fc74bb14e5248dd15b0df29c8f03de99067a94097b022d1e950ff79f1"]
      - values: {"r":"1","h":"12"}
        answers: ["sha256:ddd53741c050f332b4da8a832ecb08210599e7ceccefb0e756bace089cc7e23d","sha256:222022fecd2ccff67d99adcec90e816da9b50570f7aee3c544db2ba1a7a640fa","sha256:eb6842a8182eae1982511129ba630b3a4d3e1ba11c3d61829197c0927142c2d1"]
      - values: {"r":"7","h":"7"}
        answers: ["sha256:5bf7635a4bdda6c5a6017ebb5054881b01309370081ada743d42f3f8345edb8b","sha256:27ef60be3d536f71b5c890614439a8e1de7ae3ec81c0adf738320f004487d39a","sha256:cdeaaea8c71cbabe0d834a142e9b2bc8366a93d2d82b20ab96e5e3647e9935a2"]
  - id: esfera
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula el {{q}} de una esfera de ${{r}}$ cm de radio, en {{u}}. (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"3","q":"volumen","u":"cm³"}
        answers: ["sha256:0cc06c41fd31355e31eb54cef7c4af281139d48fd3e3ac402aa3fbd1fc8d4c90","sha256:9a3e1c514e47568f312e971b3657ca0f0cc3ac79eee25ba19266bf15cba7d513","sha256:a6a6468e7b7e9236c1957d016eeba9b0df8bf7125a92a5b6a044e72cf4a2d394"]
      - values: {"r":"10","q":"área","u":"cm²"}
        answers: ["sha256:c80a3661c8f546b8c5e150137e27f939dbfa76c46013bc9fadd07ee3895b6997","sha256:528e52656eb2cf08337802e3de4280ae03f84016c57ab24ae7269cad2e4e98bb","sha256:035fc5d46baf342cd8a9e66f38f9ee1ba3d4a0ab950b6bbc2163dd9cd85a05dc"]
      - values: {"r":"1{,}5","q":"volumen","u":"cm³"}
        answers: ["sha256:8d7ee1ccfcde4f1df326e6012e90e1933b5c2147cf9119911bf4849d9d52207a","sha256:9cf0692003d062259087a5d553ccc6f4bcf98c09a578d6222fb048ef2f7a1dc1","sha256:e9946990a5334acf0e1f7cb9c0541ea2d2d642ee438072d3b0308ebb7b2fef92"]
      - values: {"r":"4","q":"área","u":"cm²"}
        answers: ["sha256:af99794b93eb423eab57e6bfc74d5a043e6f97204a549eb0e99c0b4f57d75a60","sha256:9057b934260b1631deef0348fb1d92eb39c31b85ab141925512777b215a8db44","sha256:7b02679bc2e4dcfbedad5fe3ddaace6504daf0a7b3096344989da7072711b4ea"]
      - values: {"r":"0{,}5","q":"volumen","u":"cm³"}
        answers: ["sha256:a0e9e9bde91be8b2d5e9a5c13dc6c5fc15ed62e04fe1baf02a01df6686234c6d","sha256:062e13f635d1ec9d844d7d6256c9820113a237b651b078d15e9cf09fc9900921","sha256:57eeadbb4dee5d130c3e9b992323a82f8c0538540a7cfb3e78c61dd6f694bb35"]
      - values: {"r":"12","q":"área","u":"cm²"}
        answers: ["sha256:310feac7208b2b90deef1acb53073a773717df6605759374f00c15e44e2d2dc9","sha256:04d7a1f9d58802c365a98455cebfcddd83dc1ffc89712991e108d5cc65654e9d","sha256:fe53f9c2825cde01905ab8b34514168cbd842ac2abf1ca119c99df81bac6fef7"]
  - id: tronco-de-cono
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un tronco de cono tiene radios de ${{R}}$ cm y ${{r}}$ cm y una altura de ${{h}}$ cm. ¿Cuál es su volumen en cm³? (Puedes restar dos conos o usar
      $V = \frac{\pi h}{3}(R^2 + r^2 + Rr)$; al menos cuatro cifras significativas.)
    variants:
      - values: {"R":6,"r":3,"h":4}
        answers: ["sha256:1e94f122066b3d6ab0c4f4a1c5cce6ada30515debf1b66f9b5cf2877d92cf35c","sha256:5276f4ff9a51ef0ddb7e8eda361abd9fe88d2712c781f764149f2d585bf4143c","sha256:76bea2ab82b1537dc97ee158ff59516a53df8ba643a456ee556a2563c414f854"]
      - values: {"R":10,"r":5,"h":9}
        answers: ["sha256:bf32f2d42eaf305cab5929c6ffc9171f0037824d6d770c7ca3b371afcf0cad78","sha256:ca76c00e83ceaf1d1d964e00fbc72a177357cfc78aa58a0fa25684addfda77d1","sha256:8893cecec9990f60d5593a3b21cc8ddbc19069e034e9fff36b992fd126426359"]
      - values: {"R":4,"r":1,"h":3}
        answers: ["sha256:03a1a29f741c9759f60f6d21e26f144f03c24198275ad6f5dd0a0e53be61b1ac","sha256:efca541c14bdb2db5e3a656e5820d7d232e70c0f05f6f68bd97ebb973fe22205","sha256:046ea5ad6b34316d9a2c0c71eddb97c52da763592ac78d7209572f6d887a33a6"]
      - values: {"R":8,"r":6,"h":5}
        answers: ["sha256:c0d1cbfdf1cf8dd08d24ad27fd3894fa0bfa8f2e42ee5583220a586a7ab24b0e","sha256:5ccb6650015868374e375289034eb6fcf333d6ddc57ec609cd28d6cfc3b4eaf0","sha256:805fd70aaf8953d711fa490eab714b3b6e9dc1ed51546fdbf1d3b142d7fa6a90"]
      - values: {"R":5,"r":2,"h":7}
        answers: ["sha256:a417e904ce057e705e5a2139d2a83d585513aaf428fb3916c414ca15cb735e66","sha256:98548d415e0a06add28cc918c2c3f64781c73f9422d73ff31180cf7ee819d026","sha256:832d960c9ef8a7ed25d49b46688ebba8e29c543220ee772568d55c2372a9d1c5"]
      - values: {"R":12,"r":4,"h":6}
        answers: ["sha256:c1fd25250a799b4ac98056c7054dcbbd5529cfc08644cdd09666e4eae8c593d2","sha256:b765af3c5db0e4fba9ad3914d89dfa94520e407ce5d82a9d63dbfa920c746e84","sha256:9be0da7328364c7fc37e4fb5ef8242b4c0bd36f191da8d06bcd4553c511d1849"]
  - id: nivel-del-agua
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Se sumerge por completo una bola de ${{b}}$ cm de radio en un vaso cilíndrico de ${{R}}$ cm de radio con agua (sin que se desborde). ¿Cuántos
      cm sube el nivel del agua? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"b":"2","R":5}
        answers: ["sha256:4267fc09f021a65267e3a620e4f181cbe7098d8da8b3be8f89c51f1ceb3de2ef","sha256:0e812f607aa2a8f6bb9f744ac0405584db5c1003e2f125b45b78bc3cdac98cfa","sha256:cd545cb6ae0383e67acd1f61535cce0a0a5aa130b496557243d048696351cf5b"]
      - values: {"b":"3","R":6}
        answers: ["sha256:a4ad975ea8270ab397b173ad8074787d01e5cbc20820edc51dcc270c13c4ba33","sha256:257d019db94180048534658141261efe9de8bce57d25f4a13e759b044e2c817d","sha256:719840087e0f982bae073dd3431450bc2f70fc48a32a8b0bc6af38bd7e2b2d75"]
      - values: {"b":"1{,}5","R":4}
        answers: ["sha256:55fb823eda52eb9cadeffe221fcaba8a2ce64b00c329114c1abd9b44a75862a7","sha256:db713fa1d8df381946b00ce1c543e2538e3097d33a70eaffaec153723c652b8c","sha256:c86b82ee0dd7010f1c384c4b51eea9fe952b6b151149d59e7e9e5a57d6cb6a24"]
      - values: {"b":"4","R":10}
        answers: ["sha256:54c0080d26659f0dd4c3cbc7f49b97cb33c62f25bbc58f4c104a0dcfd174a35d","sha256:d15f4dd06abe0a5cf0f115b1b2addccc5a34443612f5c289c1d1858ca7f55ca2","sha256:1bc723cd4554c185f7a1234d232aad410c2cdd986d4786939a944e6e6a87d00d"]
      - values: {"b":"1","R":3}
        answers: ["sha256:eca9dbc97dc5aca2c3d0ae2093aa036369e4ffac8172e5bb365f2db508e96d4f","sha256:026ba5a93c5ba7d317865ac1fca0fd1d2aa7916088008cdc093467193930b022","sha256:0be3cbb7ba5a56bfef4439b1cf7bc2e3293a433ac871db41e6d8b74a94fd7c27"]
      - values: {"b":"2{,}5","R":8}
        answers: ["sha256:445bae04f8dfa356e790b12bda993c3dc2d26fa55d13ab0286c34aa1deb40d4c","sha256:a32de1e60161b10e041a080d8cee02bcc9bd7a4c181d3f84e06e01b9522593f6","sha256:941eb1101f5494c8fb092f92ae785c4e1e706834611895c017f762878b896ae7"]
  - id: poliedros-regulares
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un {{n}} tiene ${{C}}$ caras, todas polígonos regulares de ${{p}}$ lados, y en cada vértice concurren ${{q}}$ caras. ¿Qué número de {{pid}} tiene?
      (Cuenta los lados de todas las caras y piensa cuántas veces se cuenta cada arista o cada vértice.)
    variants:
      - values: {"n":"tetraedro","C":4,"p":3,"q":3,"pid":"aristas"}
        answers: ["sha256:bfc5d38143c89055c778401346d70465b3bd9548abef5ea27e63ea17939567bd","sha256:834570c2a2feda6e92933318beb78ea9a9d47564e5c5bbe883bd0ffabb356339","sha256:5162799203fe49365f19a383abecd2a88f34cca6120154db18c03122f4b9fab6"]
      - values: {"n":"cubo","C":6,"p":4,"q":3,"pid":"aristas"}
        answers: ["sha256:c84956b1fc0d8a2696aa9281f5a1342d7640bfcd24cab8c55862d5afd1afb22d","sha256:c826979b1a989e7451e0848e4b58b37506b7cef42c67da7128d63babfbc47d77","sha256:67e84056bcd795d5ef022459768ab88dd8dcd1f85530d45360f7a3032f0969be"]
      - values: {"n":"octaedro","C":8,"p":3,"q":4,"pid":"aristas"}
        answers: ["sha256:ed5451e9ade22aaabb9ba9200b623a3a6ab18dd9896ad28fefb928990bd297c1","sha256:90d6fdc092e2b83f3a4749d24c1355897b6fecf3ae33d85dc7c9a8f49f7773e8","sha256:2935e5a394918a824f05312e0cd19d89d3517bece17d799c1c6359b56d4eba0b"]
      - values: {"n":"dodecaedro","C":12,"p":5,"q":3,"pid":"aristas"}
        answers: ["sha256:311039760e2ef0c1c5aa4bbee882ebb428ec313ce2b0a8a55f5ddc2630966671","sha256:2e3c87602a1c0fb11b07af11fe7c756291b3e4a7fe54761651cc20135d1b7309","sha256:cb88d57e09c3fda77e3d6cd64b8ffb878e186a4ac48b605193578922691811b3"]
      - values: {"n":"icosaedro","C":20,"p":3,"q":5,"pid":"aristas"}
        answers: ["sha256:b5d63b3f3b6eedd71edc422edd85703bdf4cc725317f2166c569b724461f0837","sha256:78d042fbe0875356da5afcb075b739bf130a5d6584a17593931ee90eba7fc6aa","sha256:4461884c1eaadc4a3548663c5771e05dc030788865e5ab15ff5371cb6e326447"]
      - values: {"n":"dodecaedro","C":12,"p":5,"q":3,"pid":"vértices"}
        answers: ["sha256:1c9a65a0b8b375050c17f97efdffa093ea04f4c139b963bf3893aaa2d8f88b10","sha256:9b777369b8a4b45292f2182d92b30840b1aa39592930cd2f7d189a7ec860584f","sha256:877a24da402156c1d28cf49070ab0572ca4cdfb27d3b93e5f493495ea21348e7"]
  - id: por-que-un-tercio
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué un cubo se puede partir en tres pirámides iguales con vértice común en un vértice del cubo, y qué
      dice eso del volumen de una pirámide. (b) Enuncia el principio de Cavalieri y úsalo para explicar por qué un prisma oblicuo y uno recto
      con la misma base y la misma altura tienen el mismo volumen. (c) ¿Por qué solo hay cinco poliedros regulares convexos?
    sealed: "gz64:H4sIAAAAAAACCp1VzW4jRRB+lZLVh/FoZG1iQOCwB7TkihCIXBiCaror3pbaVbP9E8VEfhgfOexpH8EvhqrjiZ3sCiRO06rp+uqrr376cZYklOyFZ6tZ2zY4b1v41UMioODXBIXh/vB3zN4SmBsDjgLYMkgHARPkSAksRkzwoRC0LUvbQhCwwtkTE0MSrlcHTJTA0ZPP6ONhv/FO3eVliCuw6BAKI1SInkeJ1V3J2IIuohNFCvo1aGALegVDLhGroQkIGH3KCCPFkdh5WwLGeQfbE3Gl5tcFAyU1B2JkOOYHySv3gCPGRAv4IR0+9myWN38+9n2mh/w4+rjbwVvA26UyMJ//6fu7iPZiCXh7CX1vnWTAc/vRdnTTFHevbE857cwCrlMWGGOhAStHTFWDqstRFKxaHmWoiQGGqtLVk4gUYIyerR99dX6H9xg8RQ+N5plVz2EOW6CUfUR2AgHhzq8VkCbornbHgxbHEaBGDx+Kp3iq6grMzf9MtOee27YZtBF//iLZFSQPThLYQnGUBMdOCwgbnzY4KbCFLHotFW2ymLXtJMIYkCXBiBEDBUmA6qmcuqfjOUjX82v0wz4SdlNQCtUscC+hbIgX8BuryHpThuBtEdhCYYFINtfBOEHV4m0nvhMiPw3A0Vq458p+qujEdvUycDdJ/p8SQ2NlIzpMG+F8+MSq7kaYHCbwbINndDKfKmG1EtdHUs+DaoVtibE2BWxIFT1bBpHWOm6UpvnSudM6HPa8Liq6o0GXQ9lghLatAG2rRMzymze3fW99tAaa5IGl0+XiMB4+Ys+1fCDAApZirNb5At4JQ47+Gb8xJ5j5CszSdGC+MiBgvja1D55TaTLliOSidCA2H0/eSqrH+VUt2rR4FPq7c+gkQRS/50YXx/H6SJwP+7Vwdbh48+0XPKBx4sieR3lPD5PXFsE8T87F5RQS3sKZQgv4SeA9bmFz2Gt7Jz/44B06SotZN4tliN7OVr8/zmz0maKX2Wr2IyUb/UCnTXi2jnWPv1qFW3DkitUnAe7QZolgptE2GmYsnCXNVpe77kWgay5sPZ7tma0+DjgGb7XBXw3Kv0H9gn8J4zQ+2jfaLM/lJn7xUjXm+3OVdKXJUOer5mw9W/lcrVPsP3b/AJfKsvYZBwAA"
  - id: r-prisma-piramide
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué volumen tiene una pirámide comparada con un prisma de la misma base y la misma altura?
    options:
      - |
        Igual
      - |
        La tercera parte
      - |
        La mitad
      - |
        El doble
    answers: ["sha256:7630bda3faf9d3fdd277c6424737e52b9e41de3d6dac8143729c5b85b2a8a23b"]
  - id: r-litro
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos cm³ tiene un litro?
    answers: ["sha256:0c1d75f086bd49989b14b5e92d2e5fa145449cfbabe8b1f75ba8a6d698fa9e46","sha256:67d5487b0f11d81d842f33925441a771519823e1c73ee429787982a5c7b186eb","sha256:19b3c4d26541976bfd3096523b80d56e2332a42e05b3c1f8d407d7660eb18ad9"]
  - id: r-generatriz
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se calcula la generatriz de un cono de radio $r$ y altura $h$?
    options:
      - |
        $g = r + h$
      - |
        $g = r \cdot h$
      - |
        $g = \sqrt{r^2 + h^2}$
      - |
        $g = h - r$
    answers: ["sha256:df3fe1256f4f44cffbc9fcd82d95749f4785f3e7994e1b60cd5acca1ceae4e5f"]
  - id: r-cuerpos-revolucion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué cuerpo se obtiene al girar un triángulo rectángulo alrededor de uno de sus catetos?
    options:
      - |
        Un cono
      - |
        Un cilindro
      - |
        Una esfera
      - |
        Un prisma
    answers: ["sha256:754bd49f1e80945c9dd5a9d67524d154acd6f04e81e900c39da4688b95e41098"]
  - id: r-esfera-doble
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica el radio de una esfera, ¿por cuánto se multiplica su volumen?
    answers: ["sha256:0a5d04d0da88aef646706a57d451c7685560da98dd8811f837de14bfe831cf16","sha256:2d2f13099b99dfa182cb98117b562e72949a4a6881e33ea43ccb9bf9cb8edd0b","sha256:f3e68f782a49f16cab0adaebb763e51017f567c000ce1c86bbc87e2451281f20"]
  - id: r-euler-cuenta
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      En cualquier poliedro convexo, ¿cuánto vale caras $+$ vértices $-$ aristas?
    answers: ["sha256:bc332526f2763bda8985c4141849b0349cd665fde823ba97fa0d6aa9da66f4c9","sha256:dd11f6a1f29617d7684ed66e3048c8e2d7459feb5d412a3ed734f847543c5ef8","sha256:e4b33b2474b580ddaf3662bff56a3d06e49c66ef4dc209571519c60ffa9de5e6"]
  - id: r-desarrollo-cilindro
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué figura plana es la superficie lateral de un cilindro al desenrollarla?
    options:
      - |
        Un triángulo
      - |
        Un sector circular
      - |
        Un círculo
      - |
        Un rectángulo de base $2\pi r$ y altura $h$
    answers: ["sha256:0fe65209ad36ed639690ee2127272c06a41651dbe52b78b1f87526cf19248d30"]
---

# Cuerpos geométricos: posiciones en el espacio, poliedros y fórmula de Euler, prismas, pirámides, cilindros, conos y esferas, áreas y volúmenes

¿Cuánto cartón lleva una caja? ¿Cuántos litros caben en un depósito? ¿Cuánta pintura hace falta para una cúpula? ¿Por qué un cucurucho
de helado lleno contiene tan poco? Los objetos reales tienen tres dimensiones, y sus formas más frecuentes (cajas, latas, conos,
balones) son cuerpos geométricos con fórmulas sencillas para su superficie y su volumen. Este nodo las presenta, explica de dónde
salen y enseña a calcular las longitudes internas de un cuerpo con Pitágoras en el espacio.

## Objetivos

Al terminar sabrás:

1. Describir posiciones de rectas y planos en el espacio.
2. Reconocer poliedros, sus elementos y los cinco poliedros regulares, y usar la fórmula de Euler.
3. Calcular áreas (con su desarrollo) y volúmenes de prismas, pirámides y troncos.
4. Calcular áreas y volúmenes de cilindros, conos, troncos de cono y esferas.
5. Usar Pitágoras en el espacio (diagonales, apotemas, generatrices) y el principio de Cavalieri.

## Qué debes dominar antes

[[mat-poligonos-circunferencia]] (áreas de polígonos y círculos) y [[mat-sistema-metrico]] (unidades de volumen y capacidad), además de
Pitágoras ([[mat-triangulos-pitagoras]]).

> [!question] Test de entrada
> 1. Área de un círculo de radio $2$.
> 2. ¿Cuántos cm³ son $2$ litros?
> 3. Hipotenusa de catetos $5$ y $12$.
>
> Respuestas: $4\pi \approx 12{,}57$; $2\,000$; $13$.

## 1. Para qué sirve

- **Envases y embalaje**: material necesario (área) y contenido (volumen); por qué las latas son cilindros.
- **Construcción**: hormigón para un pilar, tierra de una zanja, tejas de un tejado piramidal.
- **Ciencias**: densidad $= \frac{\text{masa}}{\text{volumen}}$ ([[fis-medida-movimiento]]), cristales con forma de poliedro (química), la Tierra
  como esfera.
- **Diseño e impresión 3D**: todos los modelos se construyen y miden con estas ideas.

## 2. El espacio: posiciones y ángulos

> [!practico]
> En una habitación, el suelo y el techo son planos paralelos; una pared y el suelo son planos perpendiculares; la arista entre dos
> paredes es una recta perpendicular al suelo. Dos rectas del espacio pueden no cortarse sin ser paralelas: piensa en la arista entre el
> suelo y la pared del fondo y en la arista entre el techo y una pared lateral: no se cortan y no son paralelas (se cruzan).

- **Dos rectas** en el espacio: secantes, paralelas, coincidentes o **que se cruzan** (no se cortan ni son paralelas: no hay un plano que
  contenga a las dos).
- **Recta y plano**: la recta está contenida, corta al plano en un punto o es paralela a él. Una recta es **perpendicular** a un plano si
  lo es a dos rectas distintas del plano que pasan por su pie.
- **Dos planos**: secantes (se cortan en una recta) o paralelos. El ángulo entre dos planos que se cortan es un **ángulo diedro**.

## 3. Poliedros

Un **poliedro** es un cuerpo limitado por polígonos (sus **caras**); los lados de las caras son las **aristas** y sus esquinas, los **vértices**.

**Fórmula de Euler.** En todo poliedro convexo:
$$
C + V = A + 2 .
$$
*Ejemplo:* el cubo tiene $6$ caras, $8$ vértices y $12$ aristas: $6 + 8 = 12 + 2$.

**Poliedros regulares** (caras polígonos regulares iguales y el mismo número de caras en cada vértice): solo hay **cinco**, los sólidos
platónicos.

| poliedro | caras | vértices | aristas |
| --- | ---: | ---: | ---: |
| tetraedro | $4$ triángulos | $4$ | $6$ |
| cubo (hexaedro) | $6$ cuadrados | $8$ | $12$ |
| octaedro | $8$ triángulos | $6$ | $12$ |
| dodecaedro | $12$ pentágonos | $20$ | $30$ |
| icosaedro | $20$ triángulos | $12$ | $30$ |

Solo hay cinco porque en cada vértice los ángulos de las caras deben sumar menos de $360^\circ$ (con triángulos caben $3$, $4$ o $5$; con
cuadrados o pentágonos, solo $3$; con hexágonos ya se llega a $360^\circ$ y queda plano).

## 4. Prismas y pirámides

> [!practico]
> Un prisma es como una pila de monedas iguales (de forma poligonal): la base se repite a lo largo de toda la altura, así que su
> volumen es base por altura. Una pirámide se estrecha hasta un punto, y resulta que cabe exactamente tres veces en el prisma de la
> misma base y altura: lo puedes comprobar llenando de arena moldes de cartulina.

- **Prisma**: dos bases poligonales iguales y paralelas y caras laterales que son paralelogramos (rectángulos si es recto). Un prisma
  de base rectangular es un **ortoedro** (una caja) y, si todas sus caras son cuadrados, un cubo.
  **Área** $=$ área lateral (perímetro de la base $\times$ altura, si es recto) $+ 2 \cdot$ base. **Volumen** $= \text{base} \times \text{altura}$.
- **Pirámide**: una base poligonal y caras laterales triangulares que se juntan en el vértice. En una pirámide regular, la **apotema de la
  pirámide** (altura de cada cara lateral) se obtiene por Pitágoras con la altura $H$ y la apotema de la base.
  **Área** $=$ base $+$ caras laterales. **Volumen** $= \frac13 \cdot \text{base} \cdot \text{altura}$.
- **Tronco de pirámide**: lo que queda al cortar una pirámide por un plano paralelo a la base. Su volumen es la diferencia de dos
  pirámides semejantes ([[mat-semejanza-tales]]).

**Pitágoras en el espacio**: la diagonal de un ortoedro de aristas $a$, $b$, $c$ mide $\sqrt{a^2 + b^2 + c^2}$ (primero la diagonal de la base,
$\sqrt{a^2 + b^2}$, y luego otro triángulo rectángulo con la altura). *Ejemplo:* $3 \times 4 \times 12$ tiene diagonal $\sqrt{9 + 16 + 144} = 13$.

*Ejemplo de pirámide.* Base cuadrada de lado $6$ y altura $4$: apotema de la pirámide $\sqrt{4^2 + 3^2} = 5$; área $36 + 4 \cdot \frac{6 \cdot 5}{2} = 96$;
volumen $\frac13 \cdot 36 \cdot 4 = 48$.

## 5. Cuerpos de revolución

Se obtienen al girar una figura plana alrededor de un eje: un rectángulo da un **cilindro**; un triángulo rectángulo girando sobre un
cateto, un **cono**; un semicírculo, una **esfera**.

| cuerpo | área | volumen |
| --- | --- | --- |
| cilindro (radio $r$, altura $h$) | $2\pi r h + 2\pi r^2$ | $\pi r^2 h$ |
| cono (generatriz $g = \sqrt{r^2 + h^2}$) | $\pi r g + \pi r^2$ | $\frac13 \pi r^2 h$ |
| tronco de cono (radios $R$, $r$; generatriz $g = \sqrt{h^2 + (R - r)^2}$) | $\pi (R + r) g + \pi R^2 + \pi r^2$ | $\frac{\pi h}{3}(R^2 + r^2 + Rr)$ |
| esfera (radio $r$) | $4\pi r^2$ | $\frac43 \pi r^3$ |

- El **desarrollo** del cilindro es un rectángulo de base $2\pi r$ (la circunferencia) y altura $h$, más dos círculos.
- El del cono es un **sector circular** de radio $g$ y arco $2\pi r$; su área es $\frac12 \cdot g \cdot 2\pi r = \pi r g$.
- *Ejemplos:* cilindro de radio $3$ y altura $10$: volumen $90\pi \approx 282{,}7$ cm³. Cono de radio $3$ y altura $4$: generatriz $5$, área lateral
  $15\pi$, volumen $12\pi$. Esfera de radio $6$: área $144\pi$, volumen $288\pi$.

> [!formal] Con rigor: el principio de Cavalieri y el volumen de la esfera
> **Principio de Cavalieri**: si dos cuerpos de la misma altura tienen, a cada altura, secciones de la misma área, tienen el mismo volumen.
> Una semiesfera de radio $r$ y el cuerpo que queda al quitar a un cilindro de radio $r$ y altura $r$ un cono invertido de las mismas medidas
> tienen, a altura $z$, secciones de área $\pi(r^2 - z^2)$ (por Pitágoras en la esfera; corona entre radios $r$ y $z$ en el otro cuerpo). Por tanto
> $V_{\text{semiesfera}} = \pi r^3 - \frac13 \pi r^3 = \frac23 \pi r^3$, y la esfera tiene $\frac43\pi r^3$ (argumento de Arquímedes). El cálculo de áreas y volúmenes por
> aproximaciones convierte esta idea en un método general (el tema `mat-integral-riemann`). $\blacksquare$

## 6. Errores típicos

- Olvidar el $\frac13$ en pirámides y conos, o ponerlo en prismas y cilindros.
- Usar la altura del cono en lugar de la generatriz en el área lateral (o al revés en el volumen).
- Confundir la apotema de la pirámide (en una cara) con su altura (dentro).
- Mezclar unidades: $1$ m³ $= 1\,000$ L, no $100$ L.
- Contar dos veces las bases en el área, o ninguna (una caja abierta no tiene tapa).
- Aplicar la fórmula de Euler a poliedros que no son convexos (puede fallar si tienen agujeros).

## 7. Resumen

- Posiciones en el espacio: rectas que se cruzan, perpendicularidad recta-plano, diedros.
- Poliedros: $C + V = A + 2$; cinco regulares.
- Prisma $V = Bh$; pirámide $V = \frac13 Bh$; áreas con el desarrollo.
- Cilindro $2\pi rh + 2\pi r^2$ y $\pi r^2 h$; cono $\pi r g + \pi r^2$ y $\frac13\pi r^2 h$; esfera $4\pi r^2$ y $\frac43\pi r^3$.
- Pitágoras en el espacio: diagonal $\sqrt{a^2 + b^2 + c^2}$, apotemas, generatriz.
- Cavalieri: mismas secciones, mismo volumen.

## Repaso: lo que debe quedarte dentro de un mes

1. La fórmula de Euler y los cinco poliedros regulares.
2. Por qué el volumen de una pirámide es un tercio del prisma.
3. El desarrollo del cilindro y del cono.
4. Las fórmulas de la esfera.
5. Cómo se calcula la diagonal de una caja.

## Siguiente

Con este tema se cierra el bloque de geometría; [[mat-geometria-basica]] y [[mat-movimientos-plano]] lo repasan y lo amplían. Después
empieza el bloque de gráficas con [[mat-funciones-graficas]].
