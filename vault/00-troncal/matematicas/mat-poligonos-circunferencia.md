---
id: mat-poligonos-circunferencia
title: "Polígonos, circunferencia y círculo: elementos, ángulos, cuadriláteros, perímetros y áreas, ángulos en la circunferencia y figuras circulares"
area: matematicas
trunk_level: 2
prerequisites: [mat-triangulos-pitagoras]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 8: «Figuras planas», secciones 2 (polígonos), 3 (circunferencia y círculo) y 5 (cuadriláteros), y capítulo 9: «Longitudes y áreas», secciones 1 (perímetros y áreas de polígonos) y 2 (figuras circulares). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2008%20FigurasPlanas.pdf y https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2009%20Longitudes.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 8: «Geometría del plano», secciones 1.1 (la circunferencia como lugar geométrico) y 3.2-3.5 (ángulos de un polígono, longitudes y áreas, ángulos de la circunferencia, figuras circulares). Apuntes Marea Verde, autor Pedro Luis Suberviola. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/08%20Geometria%20en%20el%20plano%203.pdf"
  - "Euclides, «Elementos», libro III, proposiciones III.20 (el ángulo central es el doble del inscrito) y III.31 (el ángulo en una semicircunferencia es recto). Edición de D. E. Joyce: https://mathcs.clarku.edu/~djoyce/elements/bookIII/bookIII.html"
hints:
  - "Concepto: todo polígono se descompone en triángulos (por eso sus ángulos suman (n − 2)·180°); el área de un polígono regular es perímetro por apotema entre dos; y en la circunferencia todo es proporcional al ángulo: un arco o un sector de α grados es la fracción α/360 de la circunferencia o del círculo."
  - "Herramienta: para áreas de figuras raras, descompón en figuras conocidas (o resta); para la apotema o el lado de un rombo, busca un triángulo rectángulo y usa Pitágoras; longitud 2πr, área πr²."
  - "Documentación: Marea Verde 1.º ESO caps. 8 y 9; 3.º ESO cap. 8 (secciones 3.2-3.5)."
exercises:
  - id: numero-de-diagonales
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Cuántas diagonales tiene un polígono convexo de ${{n}}$ lados?
    variants:
      - values: {"n":7}
        answers: ["sha256:22cc15e5d3065dc98f6175242c7a70265b958a350e06e4297d76ffddf596d14e","sha256:40140809cc2f9be51e10d6852e3abf78a351852e8862492600c73a1bf38065ad","sha256:fff344b90d1a74918c56b597da3c9079a4143806e03c63894f5b87188c7068ba"]
      - values: {"n":10}
        answers: ["sha256:128ae8c825ac0fa3a12341b2a58b5d2365395eb3854a00e98c586208a700a1c0","sha256:6c19b14528611115603c32c69c95c7456e8553763f1044232a9e143ea03004bd","sha256:166a75e6bc8c8e57690a95fe585f8bbbdf9ce32a5a029754bf65c0d6b8433fc3"]
      - values: {"n":12}
        answers: ["sha256:dfd5107c18f339a359aee6dcc62e44ea94711d419f3d44fbe3708cb1eabcb036","sha256:1c8a1f573bf0f85db8995d93633dd71665638fd38aac5d6f39d561eedc7067de","sha256:97425ffdd2cf72716cb56e3a27bdad69dfb9f51c4245ffbc8650af128bf7c279"]
      - values: {"n":8}
        answers: ["sha256:4a0ddc65f856c24fe9ab55e9afcfa31ce532876d844ba66c86e2f996ab4556c0","sha256:b07822cd003b2cb4bff3dacf4faa3c213989ab91eb88f6c0b8321f620e9b5492","sha256:3d83fd9b0472de1bf370a928109cb041b0d932398f0fafea267de5e20a377ae8"]
      - values: {"n":20}
        answers: ["sha256:de462fdfeca35a41cb7906764bc68bb1040079923a2da4580fa03942e1bdb8bf","sha256:ad665482e93eb54aa65ee67f4eda7576b25c49e483000e620c98dbb3b1e8591f","sha256:781c4b0c86ec60c0ac3e8c76c5546286cbe640d32126ff4c290cc7a5838def30"]
      - values: {"n":15}
        answers: ["sha256:167db463111a1a005ae82fd688e2e497ebc5575230c1a185cdef83c9d4d11810","sha256:9e83ab56845ef9d28104950da0efb5afc988fae41fbefc4c1723b7489eb77da8","sha256:21e7cbf1de6af3dee4409b0106c4c73d59e9e00ff389193c261ee5717ecaab12"]
  - id: suma-de-angulos-interiores
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Cuánto suman los ángulos interiores de un polígono convexo de ${{n}}$ lados, en grados?
    variants:
      - values: {"n":5}
        answers: ["sha256:9195c6494d2a2398cb695aa49d17bdfaa394d2be18d8fe7bcffe6451c297c47d","sha256:3e8279d0cbddb2779dfd74f8f0ad32c40bf6f3eeef10d5ab700579badfd42b8e","sha256:53fbe8ffcf8e18e7128d1a8035e9dd65cd68a94a1da29c1a83c69b2a3cf7281d"]
      - values: {"n":8}
        answers: ["sha256:5a561efcd88945a7a942037616edb899dced641f0b6c971751250640be2f95b3","sha256:c756e00babf00f200ac3df32a89d252ace62d22a1b076a5248ccb0289fd3bf09","sha256:7ce875cd56d1f8d03f6c83a7825856a8574538c1271a36a03a4ad4cac2090c0e"]
      - values: {"n":11}
        answers: ["sha256:69495b819af55fa7175fae93d0f2261fecbefb44d4ce87c2cb83149963640eac","sha256:eedb4caeddec25ed73478388552980730319a201f598703c95c1f85a6d9435a4","sha256:46b175c9793952a1639621ed27360fcee12958832c1c4ac4a7ce182a83c03a02"]
      - values: {"n":9}
        answers: ["sha256:6af18422cd81904876dd130588355bb1e8f63480521f601ab7893ce099c9598f","sha256:688c1fa611165a1479cbc64f4ffe7146f04c63a5461d0848f154140fab0d96ca","sha256:7b3aa90d27c5c9eceee7b2d1748bff8bc443527fbc054e7f6fc923a9d81aff07"]
      - values: {"n":14}
        answers: ["sha256:78a110230f8db15b79de2007cc8c998677c631beef7690618471de6aa5d01bc4","sha256:f6cd19cc429696e3c08c5d72b1f064815aebee6a03cb75c74c060ef04960faf6","sha256:ad36a17369be711cdcda0312aa63e8564fe6ac55c4747bf631a54301987e4e75"]
      - values: {"n":18}
        answers: ["sha256:9ec5b798dfd33566d644fa9119991a92eeb8cd44b62dcb8cc816637325fcdeec","sha256:f426d1b9b6f08f071d5348eda8a53215a802cc7f2280a023831430c460389d51","sha256:a68c300bc46237d504caee1335456e719cdd879e5cd571830189f948b4a30cda"]
  - id: angulo-del-poligono-regular
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Cuánto mide cada ángulo interior de un polígono regular de ${{n}}$ lados, en grados?
    variants:
      - values: {"n":8}
        answers: ["sha256:12d9e2fc8fc7bd76bfec1366a800f14bb6f9f790858017d1463e5a3596346d7c","sha256:66d6bb5a478aeaeee862cad96d44b1b6c83e63cb92b85805d6c319df7d3114ed","sha256:0594f55b2dda60cc6365eb1344449df64f25eb36aea458d7026e28485adb9158"]
      - values: {"n":10}
        answers: ["sha256:c80c0a6afc91986f320a00bc9ba593416552e9928f553e93bef02a3e9b0a9b6c","sha256:95ae443958658a434dd70335ce937a5064d11c648153ad834c6b8fb861d86d81","sha256:cef1b29bc239015d7263d7dfcc480e890f372fee7e057a5a693c0615d73cfac3"]
      - values: {"n":12}
        answers: ["sha256:05a8b09cc4a97f91a2da5943bd30b1a618ee1458c45a9627f74986afdd6de786","sha256:e1a99f86ec254cab6cf8a1d38294847c500e40579f7c719d9785c0969592a1fb","sha256:ee253fb0775e9184402636bb3bba8a61b64536fbf909c8863e5a493b9ccdedd9"]
      - values: {"n":5}
        answers: ["sha256:02814290e09edf3cf1425d1300232a13edff6da248d2312dfc19198ec4f3bdb3","sha256:9dfc9aa2729e3d426e225de6a0afbcec1e35eb48bc08cfc12e520212e8a38e0b","sha256:a1ea03329c6079cc8121639d47533e51fe04afb62d2f139f5d7117a3155498e4"]
      - values: {"n":9}
        answers: ["sha256:b65bbedde08e98fb5b82681adc9ea06a410e52d8ad806a6dc2da745618a58330","sha256:8d22476cda46faa6d9b0cfbc76b8106034e5820db2e79e7c0ee810e32f0adff1","sha256:503db352a15e60c14527a8c8b6b4b4299743a04ea95f46cbbe2d31a19143c9eb"]
      - values: {"n":18}
        answers: ["sha256:d3d359e3c0c9637a7d1a25a84e703cba33ec588392484ee4f87d74ae63f19428","sha256:31b0f484521b94af2cef0443016157b3bdd126c4b8d2b6e9fb0ee67457c6b526","sha256:28666c52cea81cdf5f80d5edd3e9b4ea45c030e3cbca6487aa017f9adeed2421"]
  - id: lados-del-poligono-regular
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Cada ángulo interior de un polígono regular mide ${{a}}^\circ$. ¿Cuántos lados tiene?
    variants:
      - values: {"a":140}
        answers: ["sha256:f5b20c3ca71f194b7023368d0ab3ad0ca5c714bcb43429255817dfe9ab3131c4","sha256:5a2401d45087ee988aa32fecec45ac62f035ed595d5798d714f12c10fe7a58ec","sha256:5eaeef1b82b5842452fbfc2024ad8ec84142e630f5c00b2a1c7ecc891abfc361"]
      - values: {"a":150}
        answers: ["sha256:052349832b7771e4cd6ede0eea482f08b5b9d8942a9e3c14f3479ec724207a26","sha256:69f6023b0d925ca13c3b75845598503790be2fb0ba5f3acb3264cae1ee194e18","sha256:8faa7c197c848f97ad57c93595139a4c59b071dbac8c1fc59d44d7c5c9664ef4"]
      - values: {"a":156}
        answers: ["sha256:4f98ba765b0bd9b42b47d0985dd7aee3659d1031c4b18d347bd182f0a1a9e883","sha256:8dc7df13cb4015d3b9bf81a389b7d19948df669badd0f1440a3c0e35eeda1fd5","sha256:9f954e6f55d234c19099b774155d8dd35eeda6055e2ce97e447b0735faa044b4"]
      - values: {"a":162}
        answers: ["sha256:e2ad880c5bfa665db122f1e3b66090ebea001966cd631b9492f35ccdefa3d17b","sha256:860e1f09dff66d6869ad06fbe1e632341c0a50066f47e9c4172c75226a24cc4e","sha256:193a482bd0bd379000f500d1a7b4142f23a75b6c0f3fd8e3b7e45c1fc67bc686"]
      - values: {"a":165}
        answers: ["sha256:9af99d80c013465908a35b5234122146d600feb27b1513ce1578dd8dac24eda0","sha256:14e55025c863232312551b6f02a29122c4737aaf3a1397b144a2f08566fed735","sha256:2a09cc1190ead4a51a5cc75fa65125cddb0135e6b806e246849ef018d9031c4f"]
      - values: {"a":170}
        answers: ["sha256:1a56c82b9fbde7cb9a970fe4251573c2eb6044473ccfbe9f4f51a055d4cd93eb","sha256:8446849278fc99c74573e952d7c2fbcb875664ca733bb8d654ef956a29c1a431","sha256:8bdf2acebb5da9474d5e645ba6a68bfe90d8085b28f14a84775de2982e52319e"]
  - id: area-del-trapecio
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un trapecio tiene bases de ${{B}}$ cm y ${{b}}$ cm y una altura de ${{h}}$ cm. ¿Cuál es su área en cm²?
    variants:
      - values: {"B":"12","b":"7","h":"5"}
        answers: ["sha256:923a475d239d388bf6c11c4225c0d152ed587fc4ba4e2a42485d48bffefc1954","sha256:3dc000e6bacc355ec7f00799ddc8b1a644e0c5fc2447929fc70b02be36657002","sha256:3d38ad5cde1dd914b05a4c6a324a188895804c3cddf4e3ba2cf27a75d520275c"]
      - values: {"B":"9","b":"4","h":"6"}
        answers: ["sha256:a09e57de0bc06a9dc3c7cc8636642eb7646eb5323a46e3004825d880140a120f","sha256:0415649b492c1d6fb33e4015ce3f7832bfb3ef944ab81d9628a682021b850b5f","sha256:41d49b4aba9de655a5b0c26d461d52333a9e35c6c19493ffc3ec094d99f782b6"]
      - values: {"B":"15","b":"9","h":"8"}
        answers: ["sha256:77e7e1fb45115929b923df075f0e93e2f156867ea3407a93246a70055b7e3fbf","sha256:9cd0cfc497354efe87be989b20f742cdd16116082cd6e6c4781cb063ad55f17f","sha256:15cc2598bf7621123b885c83ca27a1cc5ff1cfbc482a28b8a7994eb0e82ed58a"]
      - values: {"B":"20","b":"11","h":"3{,}5"}
        answers: ["sha256:0c1cef4d27b4db928a3e77b64d1a1eeeffa23074f029759a3cf6cbf1d0d068d7","sha256:98950b1dbab8e71fa620553aa7684bda94127ed81678dba3a0b854d5756108e9","sha256:8d978a61db513de2a188409f5622ec2574f1add2f99746bda04b3c5ca75ed6ea"]
      - values: {"B":"8{,}5","b":"5{,}5","h":"4"}
        answers: ["sha256:2a248c11f42d0c71b4a75ab7edd5cd39f398cae9653402b1cbb2d79bfcd23366","sha256:80c78c15d08657dad99ed4f9af9965b9afea445de2c1850f0e5e107c85b2a02e","sha256:ff491542ffd2efc432cbafab652f55573bbf3ba05c5bb451d346b5506739b046"]
      - values: {"B":"30","b":"18","h":"12"}
        answers: ["sha256:45a3f5d05630aebc630ec09bdbcdb707077492b2cea99c64fc8019ad519ddb25","sha256:91ace00d0aca872b51c3816fbb12a26b77710263a0d8146b29c5f0246cf34c23","sha256:bff431f109a2b862efae984dc1509946f6514c106b57bdb0eb2dca6d67741f17"]
  - id: perimetro-del-rombo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Las diagonales de un rombo miden ${{D}}$ cm y ${{d}}$ cm. ¿Cuál es su perímetro? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"D":10,"d":24}
        answers: ["sha256:cb68d313dd33c7df24c200a0e522b0512584ff72a7e05008b0213bb8034f0530","sha256:8cedf363b2d74ef49f21efe93461d4beb4e600d05a52e4811f42859311c340ad","sha256:318ec7eb274530c44476f17a7f5f8eb4e1165d0057007851da709308e8fced30"]
      - values: {"D":16,"d":30}
        answers: ["sha256:fbdd03ac09590fca320c115aedee162c8c052e5ef1156c6ae8733aebad3c9c03","sha256:d62f628005d7688cf2c7ee825af89a20ffdbf16f550c27388318fb16e0f943bf","sha256:09c23b5ec2469e56d165aea2eb8e0c4260a8a825c4ddea9b28f23bc0e48ec54b"]
      - values: {"D":12,"d":9}
        answers: ["sha256:0b6fac24d00de3d63842f19a92cca4e8fe3c914651f0cb9140323a4a5f5a3c3a","sha256:a4a0ac53a477a536d194b4e312d88494cdd067bd740776a47baa0cabdcc9ed47","sha256:470570ded7f1b9bb6bf7a68777a70fd4756604bf92038ec79e4e9238703d3af0"]
      - values: {"D":14,"d":48}
        answers: ["sha256:6dd952fa8998a78e910465c194ed5650749b0f23f9735960b0b9b8b0e8309491","sha256:ce622dce1ab7e66dd4ecec217b93759cb2e9e5a557e19b76f317d73b77641282","sha256:48249dc29172f4de4e200c74e6263582f7b70fd549b16f64007bd1575b059517"]
      - values: {"D":7,"d":24}
        answers: ["sha256:0c748bb6f653e9fe5aeaae50be20978b36bff407787f4b0f3115872efce907c0","sha256:9b53e0d2106a98f086947e81c45ec65621597243dc181c12b900b55c42f42756","sha256:e19101c91731c0afc24f6df5861c4939edfe39803cfdf05c9729ba2d419b5bde"]
      - values: {"D":20,"d":21}
        answers: ["sha256:13becfa4be40d7886d9a9f257f0dc7d74c977998cc61fd54e236f4390c7c2dff","sha256:66251ff837ff8d8b06191a3dcfe65eba98a5d10eb18c56a677cf3f34d202ea09","sha256:30a866fe5f6eddc1e10e4e6a1c5ac6bba0ecec82a54627a68b6e9428c27543d9"]
  - id: area-del-poligono-regular
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Calcula el área de {{pol}} de ${{L}}$ cm de lado (calcula primero la apotema). Respuesta en cm², con al menos cuatro cifras
      significativas.
    variants:
      - values: {"pol":"un hexágono regular","L":"4"}
        answers: ["sha256:18601cfdd2145664fbf2942e21b0930a3db82acd2600cfdae936a8b545952268","sha256:f4a8a577fc0cc5cd6bdebbfd6fc6ab5a2983087f78195fbd9e0c46e03f3ffe26","sha256:fd2f36304598f43f71a1208cf3e1c7838328b0ae3c7cb7e737f5d870bdf11e86"]
      - values: {"pol":"un hexágono regular","L":"10"}
        answers: ["sha256:9f85515f9cf1f58390a4a829e82275396d0679a2d7b518b73ac676df5716aca8","sha256:9a5f5fb8ae6452441f9db16f1a2ce1c2ce3cb82ca0b8d0d7a81206bd178f206a","sha256:f32d4c5aa6e615b307c4c4a5b50f2331452beae45128377f8e7a47a29ea15d3e"]
      - values: {"pol":"un cuadrado","L":"7"}
        answers: ["sha256:b2f2bb3dbb7c715c4f2e1589179ce7c727f5c69dbc237e1d67c2f05b32d427c3","sha256:b11fd653b8f192bb36ccda8fcb7fdca3a0426d62d7788376ac8e30a0c70b0288","sha256:53ded1cf9a3fbb91d0169f0161abc146d0a80761a9217cefb0ce2ea3da5016bb"]
      - values: {"pol":"un triángulo equilátero","L":"9"}
        answers: ["sha256:3c96f6cf6ffab149ee7bcac52d8d2082850e54d412631105be9cbe077001cd7c","sha256:fd390d0e2f955b502ab9edf57ed9434ea55d196c618cef164a741673c0663daf","sha256:70c8f811f7cce6b81c16418465dee25052b4a4a8395d8e2d5df680bd982377fd"]
      - values: {"pol":"un hexágono regular","L":"2{,}5"}
        answers: ["sha256:393b7ffc90cd41a87cdd29f62225e8bb4182777dab027860ef952ab90edf1ded","sha256:c5d83897b43c1af6f7133ffbc55cf3da347575f1534acd6f0ebe844b027b0f0f","sha256:e7545731084a8effb4a68455474eca6da9ec1692c1a0011ec98c8f746832ebb0"]
      - values: {"pol":"un octógono regular","L":"5"}
        answers: ["sha256:06ee7e26326e3cf9103247a67f2efc4de4f83d7216c08f32d6b9fdb315000f04","sha256:f5ad6ba8a08b3004974b284d2193c954aac0645a352ef53317dfed94a33587ca","sha256:2585b3ec5df6982fee33ee487b12af7e38a8765a887d171a6741b0f25afaa094"]
  - id: apotema-desde-el-area
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un polígono regular tiene ${{P}}$ cm de perímetro y ${{A}}$ cm² de área. ¿Cuánto mide su apotema?
    variants:
      - values: {"P":60,"A":240}
        answers: ["sha256:e151bf8d2043aa25e706dce8dd45e5bc9b28b5045b250ae73c451c3b79fe13d4","sha256:0c580a65877ea6dfacebddbb33c0ce320b97caa2fdc45db3a90acb2baabe3186","sha256:5067c90714937e27b15e44f000ea83aa3817a64feb2d722b436b99b550b5629f"]
      - values: {"P":42,"A":126}
        answers: ["sha256:c1520facec03b0fde8bb1f92bf705443ba5de89d2b3414830c51ecdb2ff109c6","sha256:81966b214df395984d964917b618a9d3ddb08ed258eb8454da14c45dddca1697","sha256:6c39e4e79507ce6005a06618103f0648db7dc1913ddebf9a57eba69039e41d9a"]
      - values: {"P":80,"A":384}
        answers: ["sha256:98e21febaaf677cbc5c105170fc1a4b0b49f8037435d2b98fbaeeb1fc4fc97d1","sha256:b9ff46574b20ab197a30a0e5fb23e810a3413ee81dc3c94bc72bea9be928c5a5","sha256:833bc0c500e8ebcd4f345f37a213e1a14823e1eb3e219db712bca7ec344cf911"]
      - values: {"P":36,"A":81}
        answers: ["sha256:da3335241c13474037b1917eae856e952228bb652c9b03ab9e5b5a5117648ef2","sha256:24ac9c474db8d0f9051644a7d46a6d83d469947c8d1dabde436bf3f3ebf3db05","sha256:a1a12d83e402396be7be1065cd2878a39113225c4352cf6f1966dc140c9fad63"]
      - values: {"P":50,"A":172}
        answers: ["sha256:613e782c3dd596c827fce432cabc4b27cceada5ec653a070763353b9d6bcdf35","sha256:985c34ab763f7d26234702c511d0dacc91119f3a7d869b8fa83969f6d9d84712","sha256:e8dc9a0319eb44e2c03e1640232479334314b47aec1fb563d73ee6a6d557762a"]
      - values: {"P":96,"A":672}
        answers: ["sha256:447a59b7935ebf82ae69dab48ba8d3cc2b1fa08b97b7c956c18eaf0cad9e56ba","sha256:9ccf2adbb5212c4de1532429276c57285d3727423befad724c27e5312658f1e6","sha256:bb3e47f7b712a1b399d0edcc18afea8ee3c2566f2f5da7d2e9eda88bc55cd17c"]
  - id: longitud-de-un-arco
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto mide un arco de ${{a}}^\circ$ en una circunferencia de ${{r}}$ cm de radio? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"10","a":45}
        answers: ["sha256:43e0e9d6806c07dd618fc151828ca6419ec771850e9b96e4238bcc2179409ee2","sha256:181cf064a4f53604c226149a45118cedb3a2c28d0fe2212911a55114a6fac712","sha256:d2212977f257ec77de416ac3b297d0af3ddd235bbb7f75ac7c087d977c5ebfc5"]
      - values: {"r":"6","a":120}
        answers: ["sha256:04b98206febdc9df8b5a3cf696c68672e504cbe5f9218177794634493952764f","sha256:7764f1772425e50afe350277ff362abf8075fa3f349a439334adea9edb12c7fb","sha256:cd5d7532485e521d4482decd47d9023a67d3c31d80e6b25b694b68507ee52b9d"]
      - values: {"r":"15","a":72}
        answers: ["sha256:4823c128b14b70b026a0bb082ed0586d88a4af63b7cbdecb45e59a0af46998a1","sha256:f4d62246978a63bc1508cd9d438bbb70ac6072f9b69c8475f9e3165dbb29e7a3","sha256:69972119f10ab4316d711bd0588b79a7ca369426e04762bdf1542cb400b569db"]
      - values: {"r":"8","a":270}
        answers: ["sha256:2949b3b5b5559113977628661c0e50a27f6a99609b61f435a180d22c718d6105","sha256:f85c90c596e928c34a0a4d62983d140af1217dd79901d8b041b1485d4f9332ff","sha256:8d200af7cd6c4061d71e4e3ab5d28f5485700eb0f31c4ba97d003a86426c554a"]
      - values: {"r":"2{,}5","a":30}
        answers: ["sha256:b2d5bda7f1f4ba54aedd7517a237b69186f452f1fe56a81bb7c7b91ae1558e9f","sha256:59816ac7d68c9eb13f5e628e74a95c92cfd8a938ee751f73da138e2d670f8694","sha256:5af7fc8bf7779711ffc0d2c6b7635c230d098d8b69a2a58dcb90ba1eed368f30"]
      - values: {"r":"12","a":150}
        answers: ["sha256:a14987264d93edd975f33ab8770db8288a9e2a225a48ea017e6323e744f5ed87","sha256:669d0c40a0c27d8e705dd0250dd9eabbcf92ad2d3364f7e654bb8f8d240b9e37","sha256:02626c4b452c31f68c12463d5025eb888eb9aa3fcdcfd93791c8fe2361821956"]
  - id: area-de-un-sector
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el área de un sector circular de ${{a}}^\circ$ y ${{r}}$ cm de radio? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"4","a":90}
        answers: ["sha256:b8c57af0d6757b8988f08333ec84a22347f6e671c67f2cdfa72cbbcdd1ddd930","sha256:752c74dc07f2bf55d544ad367a47a15fd93120a1fdf0c41f8409c612d76157ca","sha256:7d05eeaf223c39bfe7badd89fd05e98856be7aec6b759141f516726a81217138"]
      - values: {"r":"9","a":40}
        answers: ["sha256:47b63eaa51cecca0bf80fc27015059bbf20d21180adc26e66e38690b17ab8640","sha256:af48b9ca04251fd6adf1b32299ab8ee8eca2828b660a1e9a646b3d2b56df72c5","sha256:d077a7c74c6082e558a88388d4544f9b6f2f311fa09dae6cc37eec0aaf27f86c"]
      - values: {"r":"12","a":135}
        answers: ["sha256:0c92be620315fc29824bcf75a17817fc94a9105e6a2e28621b2ed7fa8f9e063a","sha256:a6bc56f2ce57652e498cd49b140e9854b57a5c54dfbda1cd1505678cf9e7b188","sha256:127e0a6f15a262ab6eb7f6609c9171b11a5ec01788584efc8124d8af8417d653"]
      - values: {"r":"3","a":300}
        answers: ["sha256:fd4d96b479f4998ca0edcd2bf44a38161cd262b2dc614091bed21682aaff2274","sha256:290ce922681da8f3e1b9c1ced65e4bffb6ad5c7b6c249c87341e30097a5a1f2b","sha256:3b8a060247e7a3d68d4ccaef4ac2f936ac084727214ffa006f5ff7cfee9ffcbf"]
      - values: {"r":"7{,}5","a":48}
        answers: ["sha256:04fc35314da50945f35bd4f7507e5884f185a98c4ff0e297414d94d9036ea41c","sha256:692536f590f76e912d57fcd59345e2804e5be3c0cc38e804d018f6d5b0ccd52f","sha256:7aca7ff627d7ac727ec32ac7527d90b4e86afaa2641d74231d8897ce1ff2393b"]
      - values: {"r":"10","a":18}
        answers: ["sha256:224df02d3a3bdce0e5b4ca8b74eb69af18ee79d5e37c34f4a2aa10ec459212e8","sha256:7a232212e6658345caafa436ab29b4ba01cf0e0c95932f30bbc011b8cd367520","sha256:71c00f92d2bd50ba47737fb56378b7a94c83236706fedb66354f44a6aa14e73d"]
  - id: area-de-una-corona
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el área de una corona circular de radios ${{R}}$ cm y ${{r}}$ cm? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"R":"7","r":"3"}
        answers: ["sha256:fca437adb74139d0855e6fe7292fb4585c3ff0a93cf275f8b283f7ac106ffd61","sha256:d1e200afd4dc8dd6e15c8df38a26dcc590d92795b0526fad25296cc4f1afac12","sha256:a4580e02fff987ea34969f36fa72724d7a6fcb106a03674125ce8929612e588c"]
      - values: {"R":"10","r":"8"}
        answers: ["sha256:478f8bfb721200ef10878e7910668f1fc63bb97a833ba0ecff055bf912b3f74d","sha256:76889d582824af60c1d844ef2f23f8ed3247ea02d0ce139fc6250f4388b15551","sha256:ca13309f9fd02a470112db4b2c90851f9fe70d27301fb967469ac2b7913cc2ec"]
      - values: {"R":"4","r":"1{,}5"}
        answers: ["sha256:49aef662300fffd7c11d74661906e205a0f91fed74e63c88bb643267f1154a43","sha256:6589c2d1fbd79c5ea37d694015192f759dbf25964928c93085a6ce37264523d9","sha256:24e9a0dd92e65922df73aac480f7a96b03ba3b6dd50086f9e772cf68780ca246"]
      - values: {"R":"12{,}5","r":"2{,}5"}
        answers: ["sha256:d783e538fc3c4c28d5d0cb2759c6614d8cebc3a1d24f70acb02123cb5599a6ce","sha256:e80a29c8b5df6b25541511842c8f241d164f22a041246b83422bbb14d128d8e7","sha256:dad7bb2e625fbac87488184285d85039d467baf1d186471a9d9b8255b40fe7bf"]
      - values: {"R":"9","r":"6"}
        answers: ["sha256:4831161958468e4d46f2b13546c85bf0932b0981a1f3125da90f91e2d6d67e76","sha256:2bd34529e3dd9dfc8e8e3230157356fe4611b58dbb8dbeef59b9bc377f44edfd","sha256:b832c41065156c62ee14aa22636cbaa1f4eced0c3e8c764c4302a69fc89cb6aa"]
      - values: {"R":"20","r":"15"}
        answers: ["sha256:f0fda97228333bc9690f3522c103ef259f7e942fd4dfaa2d03b47306d0f21b87","sha256:e6ca1b2684e11b1ec2142d9222f93b36e4970c11519d7bdead06034b509831ea","sha256:005b5df9968ac9c591aee99c4b52b7eda2b53180922fa6b2029ca72ff7f6a839"]
  - id: angulo-inscrito
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un ángulo central mide ${{c}}^\circ$. ¿Cuánto mide un ángulo inscrito en la misma circunferencia que abarca el mismo arco?
    variants:
      - values: {"c":110}
        answers: ["sha256:71e2cbd38f196397762383e76b406b3eb54bc4a972812ed2f170d7b02ceab51d","sha256:10588f078bcf4eca28bf29783b36d3644fa1e852703eefa73a7aa854dc853a0a","sha256:93984a8e669b0f598651706a310df87b2b6b726b7b3883617b6c58a57f1bfa49"]
      - values: {"c":64}
        answers: ["sha256:f912c6fe14dd6eeac04b053911c2dcff1e41b5f050d963d85781b8f3dfc19524","sha256:b5cf34c3f0cecd81c0bb34b73efb58a29f6da79cf5340d3db98ead1c2cdab022","sha256:36fcd98457402f34f6aff784236f21fc8553f17a77b24e51c976d08e0b755778"]
      - values: {"c":150}
        answers: ["sha256:e4b43ada67b0b785b3ee6d54bee61a0b52786160509fc53e844a5857108b6584","sha256:633f41561b67b0e695f142e7eeef7928cc5f9f6d1d93780dcd0338ff74710a6c","sha256:a68db3fd10d4ea13639b800d5c74d80a3fe29ef46058ed320addfe7e67a8369f"]
      - values: {"c":42}
        answers: ["sha256:d9306c7b54a17093bf1e11012de82447458e75f085695f9a645a48cb04c9bb82","sha256:b7d7558baeec416ba1cbbe0e4e5bb7f136109e44c43719ae6af7d465a08673bf","sha256:8fb776f0d7ef9c45f95d8117f2238b37b17ab23329c85528884ce318f5914d2c"]
      - values: {"c":200}
        answers: ["sha256:3e3817f76754ba33642372928b6cf8cec75aba445ef35314bcd45c47bbb52b6f","sha256:14abec9068ab72d792f15991e64b7cf273d49fb46ce828441a879d6d0d8b92e7","sha256:3af059c570df319f4db126fb2460fe1d56fa8f72f09e4104a9aa9392a49fd84d"]
      - values: {"c":96}
        answers: ["sha256:469664c9542f9270722eb668be2a800a49e723baae4f3ed5b255a23b0b2c46a1","sha256:c0ce137dfdcbb25a52ecdc0094c603664f5c4812183c690396b24a1aa4ace453","sha256:7c85efce4d88b76d0c14770960dbff71498b9508dcb7c7e19c81865fe3d11986"]
  - id: triangulo-en-semicircunferencia
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un triángulo está inscrito en una circunferencia y uno de sus lados es un diámetro. Uno de los otros dos ángulos mide ${{a}}^\circ$. ¿Cuánto
      mide el tercero?
    variants:
      - values: {"a":"35"}
        answers: ["sha256:63d5e6c2f336fb0a5972d4168b2d48d84f8527e0e59220470762a4920fb7a044","sha256:b4ac601d9d5e8de7fe5f6ee0d06cda34e9b2e85fb264e78d045167908bb4edc2","sha256:698c5d2c5eebe04e2771636c9659fad7613fd684edf07c00644e0e83edc3bdc5"]
      - values: {"a":"62"}
        answers: ["sha256:74ad78a34b73f570632092fd21c35f90386117504ab146be680fe3d71fa242c4","sha256:979bb91d44f1dbeb9fd3d771c1b43f4b7c01e0d5906ace1ca4ad0ed09a1b5c00","sha256:95297b5b8d4b2a7ce243b43dd6bf4a7e2b0f4cb5f034e51e0dba054ffa51a570"]
      - values: {"a":"18"}
        answers: ["sha256:75a6dfa5163a3d809b2e67cef04180eb6a93b85fe21e8b3d40bc9c0b5f04e591","sha256:ef64b37f6f04ef0bcdc5c66d42a80224052c0a083aedc27c8f6db85524014b2c","sha256:d50f4a8820c0e909c737d3432c45f089c66309049d1b55e040671924cb3a8b2a"]
      - values: {"a":"47{,}5"}
        answers: ["sha256:f0a8b824902727b1ad16724432b97b8d7a634502892dfd8ef023b0aaddebfa64","sha256:c34a5f703e981cb2e48e9993e08552ded04480af1db9d5c2e15be6673b1e59c9","sha256:5c8b57ee9cfc1a48fc087596c534beb19c1a0cb374a401d7e7ca04bacee9c8a3"]
      - values: {"a":"71"}
        answers: ["sha256:9268004c4e8460ca38ce4d820b204503fb0f22bcf702a244e1a7d61f270772bb","sha256:9c77e7a0dc313cd6c50efc327a3aee39053b036c4d9b0521dbdbdc9ed07f5835","sha256:36c54207041ca790622fd089295990845f47e550e1b779cf54f49cd8584d15c5"]
      - values: {"a":"29"}
        answers: ["sha256:064b17ac23a74b8bef9b57f517152b447cb0185d9e726a7d08f872ea84ebae83","sha256:fed44c9106f89cfa4321828ddd9b5ea3da3a35eb66378751fc732c2ced3a7479","sha256:70c293107e368c85b9f39caaf81d2eb4d8d51224197b0f197e9dc65ddf5160be"]
  - id: vueltas-de-una-rueda
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuántas vueltas da una rueda de ${{D}}$ cm de diámetro para recorrer ${{K}}$ km? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"D":60,"K":"3"}
        answers: ["sha256:86b2905aa5c8cf63520e9d40566f09517b4d12a1813dc6c709f18d6de941d8c6","sha256:7ba379c6084127f78a351acc748b6714f82aca26e366ffded904b2a5866aacff","sha256:51d1185f32e1881624502da68dce0615ec5381841dfd70bb2bc597f9fcf9f2e1"]
      - values: {"D":70,"K":"1{,}5"}
        answers: ["sha256:f5eecad12d90888025688ecad5a5c12ef7e72f06d6b3c68cecc1f121d7ef5e46","sha256:d88a13d3fd0ff22c0bb3135986ddac72cca0d37053df345ad18ceee118d087b6","sha256:aa2ca83b5646889901b172db89170d66cbe9804c4ea95f13fe158949c68672d3"]
      - values: {"D":55,"K":"10"}
        answers: ["sha256:ae6ec101643a7c8104f6e9dad912d2a5ed279be023be638ea63e5fa3a6024746","sha256:f119aebb24e57e00fda975014b037693ea075502e4485b965b714fbb805d017a","sha256:b4369722c0eb48b96b4958840ba1c9c60d50a84890ff031b128301ddb9be2296"]
      - values: {"D":66,"K":"0{,}5"}
        answers: ["sha256:5d7f120bca1a96e5b0c4131f966e732aefe1f9267a80d47bcd69b4024c2b591b","sha256:4af5aa475310042700365a8f9d8104acc75f1b9a10e75df53088e269ed66af1a","sha256:177776a2816b8693ec1000e4f327972c244b1475ee08537bbe38553d8b1f5813"]
      - values: {"D":80,"K":"2{,}2"}
        answers: ["sha256:ec40892b4034eb8625d5dcb8e63a3b6fedb3d390145944831c5350bb511da646","sha256:a34e12f361d6bb2bc0ae946e5fd43759ca186af22be00582b7ed54535f375c7d","sha256:7ed30e7c898e66d62fb4f8e9d788c1a12171364c64205466458867950c1d3557"]
      - values: {"D":26,"K":"1"}
        answers: ["sha256:454a2f5a40bad6a3e58d49520dee3533c7a5c301ac20025b0e9ae00485592902","sha256:22f5686caefb181ea964470cdd506c5074ba6d6ae3d51a8b404b6b839eebed39","sha256:44007342dd7dfb196f9b279580b60b5422631e34c9763ae90803d3c14259db27"]
  - id: angulos-poligono-e-inscrito
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Demuestra que los ángulos interiores de un polígono convexo de $n$ lados suman $(n - 2) \cdot 180^\circ$ y que sus ángulos
      exteriores suman $360^\circ$. (b) Demuestra que un ángulo inscrito mide la mitad del central que abarca el mismo arco, en el caso en que
      uno de los lados del inscrito es un diámetro. (c) Deduce por qué todo triángulo inscrito con un lado igual al diámetro es rectángulo.
    sealed: "gz64:H4sIAAAAAAACCo1UwW4TMRT8ldHKhyRsK2glBKl6SELPOQAnFqQX+zVY8voF21s1qvoxPXLoiU/IjyFvsuluKYibN/KbmTczzl0RxTXJii+mxWQyovFkgg8cDaPxuNn9DMlqRiTHHsrjBOcKxtJaPDmOJX40jA2FxB7ssBG3e1yLF3TXzxRSsLsHv26cxAs4iei+YBgcJfZv4FpCTb7yfEs6Uc0+8fOhHk8JirvHVkVsavJQo5Z1jKrSRhLevHv9raq0DVqd4spDk6HjXiWsTxysBGzBt4fjAag3Oc3rJEnkKq/8C9AXCBwTeSNw1ALk3TpwjlmgIbw0ixP8VTIucf72SX/lKz+ZjFY5o49MUEuVTdfsU5ASajZXOTVjdw81pyDYQi0UJB83jU+SRTlCRmv8NQf22tIprlznLqyPOtgk4AhVVeTXjjGfLRRGxzKomSozjyMjiLIKDHaVP9KOs5kHWeTabGhFQVP+tbaxFlDQAjVfqCHPcqFaNU99gJot97ds3P2Kmh1HjNRyhkssF6pEIGMljgc96JUl13CmsiDfehHFw66btrtZ8ppq2Stwm++kBl6o+YH62AwCR+6ry6hLVcI1vBbU1vARC6/QnS5x1hFM+85kaAcjK8dtqzvzu6B1G7TdB8txkG2ZR/9I7WjlbDFXnes1G/s89BK62UpfSQ7UkW87ogbV3khAolyfvGDl1funShZlEZpVsLqYfrkrsojsVDEtPgVLWRz9z98CtjBsGs3919PGd9u9oMzUdjgW07P7csD1ObYsvVx6ZTEMI/HQk30zj+l1uW4oEG44tP15OaB/8S/Ea9dsuRvv8HvNHzxLjgiskwwxv97/Bnqo8g+NBQAA"
  - id: r-paralelogramos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas figuras es un paralelogramo?
    options:
      - |
        El trapecio
      - |
        El rombo
      - |
        El trapezoide
      - |
        El triángulo
    answers: ["sha256:10d0e55c969ee8b23cb832651ae8c9532f12d8be63e62176cd665e965613d08f"]
  - id: r-exteriores
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Cada ángulo exterior de un polígono regular mide $24^\circ$. ¿Cuántos lados tiene? (Los exteriores suman siempre lo mismo.)
    answers: ["sha256:54ff2ae40570b612d28e6e8195798f020440a532e982330f05d3470a555da876","sha256:83c1d59d52cbde17dfa03298c9728699e034e2fa560825b12e93323366a88bfb","sha256:f4028cad52c730f35277946238be71efd3a74244cd3e265cce12d0febd3e27d9"]
  - id: r-pi
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es el número $\pi$?
    options:
      - |
        El área de un círculo de radio $1$ dividida entre $2$
      - |
        Exactamente $3{,}14$
      - |
        El cociente entre la longitud de una circunferencia y su diámetro
      - |
        Un número entero
    answers: ["sha256:91342d25c426040b3f880ea209930a120354329886a743012fcf7ca5897fe3ee"]
  - id: r-tangente
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué ángulo forma la recta tangente a una circunferencia con el radio que llega al punto de tangencia?
    options:
      - |
        Perpendicular
      - |
        Paralela
      - |
        Forma $45^\circ$
      - |
        Depende del radio
    answers: ["sha256:c94581e93359652ec7f8967846d4d96beea9d483aa060230fa6a385c97e2b7f2"]
  - id: r-area-rombo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el área de un rombo de diagonales $10$ y $7$ cm, en cm²?
    answers: ["sha256:40a195e379760822b1bf525fbfaca2ee443f6b987fa2af1d06359b54c2ba8aaa","sha256:b4a96dfb8a93822746e2894ffc5f49d0c0ac333384760d4bde704fae4dc24e8c","sha256:701ba1339fd6321bcd391dbba808683f9fd2531af285455e89f83404d891ecd3"]
  - id: r-doble-radio
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si se duplica el radio de un círculo, ¿qué le pasa a su área?
    options:
      - |
        Se duplica
      - |
        Se triplica
      - |
        No cambia
      - |
        Se multiplica por $4$
    answers: ["sha256:4f90b2632282f672a170a2b5296e31c88a446d174db0bc89dc0d6de52a63793c"]
  - id: r-poligono-regular
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es regular un polígono?
    options:
      - |
        Tiene todos los lados iguales
      - |
        Tiene todos los ángulos iguales
      - |
        Tiene todos los lados y todos los ángulos iguales
      - |
        Es convexo
    answers: ["sha256:61d0019fae768c39fcacd8e727535b7102fd5193ce90bd09feffb68df5f694a5"]
---

# Polígonos, circunferencia y círculo: elementos, ángulos, cuadriláteros, perímetros y áreas, ángulos en la circunferencia y figuras circulares

Baldosas, señales de tráfico, ruedas, pizzas, parcelas, panales de abejas: las figuras planas están en todas partes, y medirlas (cuánto
borde tienen, cuánta superficie ocupan) es uno de los usos más antiguos y prácticos de las matemáticas. Este nodo estudia los
polígonos (sus elementos, sus ángulos, los cuadriláteros y sus áreas) y la circunferencia y el círculo (sus elementos, los ángulos
que se forman en ellos, la longitud, el área y las figuras que salen de ellos: arcos, sectores y coronas).

## Objetivos

Al terminar sabrás:

1. Nombrar los elementos de un polígono, clasificarlo y contar sus diagonales.
2. Calcular la suma de los ángulos de un polígono y el ángulo de un polígono regular.
3. Clasificar los cuadriláteros y calcular áreas de paralelogramos, trapecios, rombos y polígonos regulares e irregulares.
4. Usar los ángulos central e inscrito y las posiciones de rectas y circunferencias.
5. Calcular longitudes de circunferencias y arcos y áreas de círculos, sectores y coronas.

## Qué debes dominar antes

[[mat-triangulos-pitagoras]] (triángulos, su área y el teorema de Pitágoras).

> [!question] Test de entrada
> 1. ¿Cuánto suman los ángulos de un triángulo?
> 2. Área de un triángulo de base $8$ y altura $5$.
> 3. Hipotenusa de un triángulo de catetos $6$ y $8$.
>
> Respuestas: $180^\circ$; $20$; $10$.

## 1. Para qué sirve

- **Obras y bricolaje**: cuánta pintura, cuántas baldosas, cuánto rodapié o cuánta valla hace falta.
- **Diseño y arquitectura**: mosaicos con polígonos regulares (solo triángulos, cuadrados y hexágonos rellenan el plano solos, porque
  sus ángulos dividen a $360^\circ$).
- **Mecánica**: la distancia que recorre una rueda en cada vuelta es la longitud de su circunferencia; engranajes y poleas
  (el tema `ing-mecanismos`).
- **Medida de terrenos**: un terreno irregular se mide partiéndolo en triángulos y trapecios.

## 2. Polígonos

> [!practico]
> Un polígono es una figura cerrada hecha solo con segmentos rectos. Si tiene $5$ lados es un pentágono, si tiene $6$ un hexágono…
> Las diagonales son los segmentos que unen dos vértices que no están juntos: desde cada vértice salen hacia todos menos hacia él
> mismo y sus dos vecinos.

Un **polígono** es la región del plano limitada por una línea poligonal cerrada. Sus **elementos**: lados, vértices, ángulos interiores y
**diagonales** (segmentos que unen vértices no consecutivos). Es **convexo** si todos sus ángulos interiores miden menos de $180^\circ$ (y cóncavo
si alguno mide más), y **regular** si tiene todos los lados **y** todos los ángulos iguales. En un polígono regular, el **centro** equidista de
los vértices (radio) y la **apotema** es la distancia del centro a un lado.

- **Diagonales** de un polígono de $n$ lados: $\dfrac{n(n - 3)}{2}$ (de cada vértice salen $n - 3$, y cada diagonal se cuenta dos veces). Un
  hexágono tiene $9$.
- **Suma de ángulos interiores**: $(n - 2) \cdot 180^\circ$, porque las diagonales desde un vértice lo parten en $n - 2$ triángulos. Hexágono: $720^\circ$.
- **Ángulo de un polígono regular**: $\dfrac{(n - 2) \cdot 180^\circ}{n} = 180^\circ - \dfrac{360^\circ}{n}$. Hexágono regular: $120^\circ$.
- Los **ángulos exteriores** de un polígono convexo suman siempre $360^\circ$ (dar una vuelta completa recorriendo el borde).

## 3. Cuadriláteros

| tipo | definición | ejemplos |
| --- | --- | --- |
| paralelogramo | dos pares de lados paralelos | cuadrado, rectángulo, rombo, romboide |
| trapecio | un solo par de lados paralelos (las bases) | rectángulo, isósceles, escaleno |
| trapezoide | ningún par de lados paralelos | cometa |

En todo paralelogramo los lados y ángulos opuestos son iguales y las diagonales se cortan en su punto medio. El rombo tiene las
diagonales perpendiculares; el rectángulo, iguales; el cuadrado, ambas cosas. Los ángulos de cualquier cuadrilátero suman $360^\circ$.

## 4. Áreas de polígonos

> [!practico]
> Medir un área es contar cuántos cuadraditos de $1 \times 1$ caben. Un rectángulo de $5 \times 3$ tiene $15$. Las demás fórmulas salen de
> recortar y recolocar: un romboide se convierte en un rectángulo cortando un triángulo de un lado y pegándolo en el otro; dos
> trapecios iguales, uno girado, forman un romboide.

| figura | área |
| --- | --- |
| rectángulo, romboide (paralelogramo) | base $\times$ altura |
| triángulo | $\dfrac{b \cdot h}{2}$ |
| rombo | $\dfrac{D \cdot d}{2}$ (producto de las diagonales entre $2$) |
| trapecio | $\dfrac{(B + b)\, h}{2}$ |
| polígono regular | $\dfrac{P \cdot a}{2}$ (perímetro por apotema entre $2$) |

*Ejemplos:* trapecio de bases $10$ y $6$ y altura $4$: $\frac{16 \cdot 4}{2} = 32$. Rombo de diagonales $8$ y $6$: área $24$; su lado, por Pitágoras con las
semidiagonales, $\sqrt{16 + 9} = 5$, y su perímetro $20$.

**Polígono regular**: partiéndolo en $n$ triángulos iguales con vértice en el centro, cada uno tiene base el lado y altura la apotema, de
ahí $\frac{P \cdot a}{2}$. En el **hexágono regular** el radio es igual al lado (los seis triángulos son equiláteros), así que la apotema es
$\sqrt{L^2 - (L/2)^2} = \frac{\sqrt3}{2}L$.

**Polígonos irregulares**: se descomponen en triángulos, rectángulos o trapecios (o se calcula un rectángulo que lo contiene y se restan
los trozos sobrantes).

## 5. Circunferencia y círculo

> [!practico]
> La circunferencia es la línea (el borde de una moneda); el círculo es la superficie que encierra (la moneda entera). Todos los
> puntos de la circunferencia están a la misma distancia del centro: el radio. Si mides con una cuerda el borde de cualquier objeto
> redondo y lo divides entre su diámetro, siempre sale lo mismo, algo más de $3$: es el número $\pi$.

La **circunferencia** de centro $O$ y radio $r$ es el conjunto de puntos del plano a distancia $r$ de $O$ (un **lugar geométrico**). El **círculo**
es la región que encierra. Elementos: **radio**, **cuerda** (segmento que une dos puntos de la circunferencia), **diámetro** (cuerda que pasa por
el centro, $d = 2r$), **arco**.

**Posiciones de una recta**: **exterior** (no la toca: distancia al centro $> r$), **tangente** (la toca en un punto: distancia $= r$; la tangente es
perpendicular al radio en ese punto) o **secante** (la corta en dos puntos: distancia $< r$).

**El número $\pi$** es el cociente entre la longitud de cualquier circunferencia y su diámetro: $\pi = 3{,}14159\ldots$ Es irracional
([[mat-numeros-reales]]).

## 6. Ángulos en la circunferencia

- **Ángulo central**: vértice en el centro. El arco que abarca mide lo mismo en grados.
- **Ángulo inscrito**: vértice en la circunferencia y lados que son cuerdas. **Mide la mitad del central que abarca el mismo arco.**
  *Ejemplo:* si el central mide $80^\circ$, cualquier inscrito sobre ese arco mide $40^\circ$.
- Consecuencia: todos los inscritos que abarcan el mismo arco son iguales, y **todo ángulo inscrito en una semicircunferencia es
  recto** (abarca un arco de $180^\circ$). Así se comprueba si una pieza es exactamente semicircular, o se traza un ángulo recto con una
  circunferencia.

> [!formal] Con rigor: por qué el inscrito es la mitad del central
> Caso en que un lado del inscrito pasa por el centro: sean $AB$ un diámetro, $C$ un punto de la circunferencia, el inscrito $\angle BAC = \alpha$ y
> el central $\angle BOC$. El triángulo $AOC$ es isósceles ($OA = OC = r$), así que $\angle OCA = \alpha$. El ángulo $\angle BOC$ es exterior a ese
> triángulo, luego mide la suma de los interiores no adyacentes: $2\alpha$. El caso general se reduce a este trazando el diámetro desde el
> vértice del inscrito y sumando o restando (Euclides, III.20). $\blacksquare$

## 7. Longitudes y áreas circulares

> [!practico]
> Todo en el círculo es proporcional al ángulo. Un arco de $90^\circ$ es la cuarta parte de la circunferencia; un sector de $60^\circ$ (una
> porción de pizza de las de seis) es la sexta parte del círculo.

| figura | fórmula |
| --- | --- |
| longitud de la circunferencia | $L = 2\pi r = \pi d$ |
| arco de $\alpha^\circ$ | $\dfrac{2\pi r \cdot \alpha}{360}$ |
| área del círculo | $A = \pi r^2$ |
| sector circular de $\alpha^\circ$ | $\dfrac{\pi r^2 \cdot \alpha}{360}$ |
| corona circular (entre radios $R > r$) | $\pi (R^2 - r^2)$ |

*Ejemplos:* círculo de radio $5$: longitud $10\pi \approx 31{,}42$, área $25\pi \approx 78{,}54$. Sector de $60^\circ$ de ese círculo: $\frac{25\pi}{6} \approx 13{,}09$.

**Por qué el área es $\pi r^2$**: si se corta el círculo en muchos sectores finos y se colocan alternados, forman casi un rectángulo de
altura $r$ y base media circunferencia, $\pi r$: área $\pi r \cdot r$. (La justificación precisa usa límites: el tema `mat-limites-continuidad`.)

## 8. Errores típicos

- Contar los lados como diagonales, o usar $n(n - 3)$ sin dividir entre $2$.
- Confundir apotema y radio en un polígono regular.
- Usar el diámetro en $\pi r^2$, o confundir longitud ($2\pi r$) con área ($\pi r^2$).
- Restar radios en la corona en lugar de restar sus cuadrados: $\pi (R - r)^2 \neq \pi(R^2 - r^2)$.
- Olvidar que el inscrito es la **mitad** del central.
- Mezclar unidades (cm y m) en una misma fórmula de área.

## 9. Resumen

- Diagonales $\frac{n(n - 3)}{2}$; ángulos interiores $(n - 2) \cdot 180^\circ$; exteriores $360^\circ$; ángulo del regular $180^\circ - \frac{360^\circ}{n}$.
- Cuadriláteros: paralelogramos, trapecios, trapezoides.
- Áreas: $bh$, $\frac{bh}{2}$, $\frac{Dd}{2}$, $\frac{(B + b)h}{2}$, $\frac{Pa}{2}$; los irregulares, descomponiendo.
- Circunferencia: lugar geométrico; tangente perpendicular al radio; $\pi = \frac{L}{d}$.
- Inscrito = mitad del central; en una semicircunferencia, recto.
- $2\pi r$, $\pi r^2$, arcos y sectores proporcionales al ángulo, corona $\pi(R^2 - r^2)$.

## Repaso: lo que debe quedarte dentro de un mes

1. Por qué los ángulos de un polígono suman $(n - 2) \cdot 180^\circ$.
2. El área del trapecio y la del polígono regular, y de dónde salen.
3. La relación entre ángulo inscrito y central.
4. Las fórmulas de la longitud y del área del círculo.
5. Cómo se calcula un sector o un arco a partir de su ángulo.

## Siguiente

[[mat-semejanza-tales]] (figuras con la misma forma y distinto tamaño) y [[mat-cuerpos-geometricos]] (áreas y volúmenes en el espacio).
