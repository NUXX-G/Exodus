---
id: fis-trabajo-energia
title: "Trabajo y energía: trabajo de una fuerza, energía cinética, teorema trabajo-energía, energía potencial, conservación de la energía mecánica y potencia"
area: fisica
trunk_level: 3
prerequisites: [fis-dinamica-aplicaciones]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 7: «Trabajo y energía cinética» (trabajo, energía cinética, teorema de trabajo-energía, potencia). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/7-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 8: «Energía potencial y conservación de la energía» (energía potencial de un sistema, fuerzas conservativas y no conservativas, conservación de la energía, diagramas de energía potencial, fuentes de energía). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/8-introduccion"
  - "R. P. Feynman, R. B. Leighton y M. Sands, «The Feynman Lectures on Physics», vol. I, capítulo 4 («Conservation of Energy»), edición en línea: https://www.feynmanlectures.caltech.edu/I_04.html"
hints:
  - "Concepto: la energía es la capacidad de producir cambios y no se crea ni se destruye, solo se transforma. Una fuerza hace trabajo cuando desplaza su punto de aplicación en su dirección; el trabajo neto cambia la energía cinética. Si solo actúan fuerzas conservativas (peso, muelles), la energía mecánica se conserva."
  - "Herramienta: W = F d cos θ; Ec = ½ m v²; Ep = m g h; Ep elástica = ½ k x²; W_neto = ΔEc; sin rozamiento Ec + Ep = constante; con rozamiento, la energía mecánica final es la inicial menos μ N d. Potencia P = W/t (vatios); 1 kWh = 3,6 · 10⁶ J."
  - "Documentación: OpenStax Física universitaria vol. 1, caps. 7-8; Feynman, vol. I cap. 4."
exercises:
  - id: trabajo-de-una-fuerza
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una fuerza constante de ${{F}}$ N actúa sobre un cuerpo que se desplaza ${{dd}}$ m en línea recta; la fuerza forma un ángulo de ${{th}}°$ con el desplazamiento. ¿Qué trabajo hace,
      en J? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"F":50,"dd":12,"th":30}
        answers: ["sha256:64793b1b74a595c6c816ac77aa2219bc04c698deed412e0d31772381cf1eb28f","sha256:c9977c8f9a938bb7379928e5303ef79fad4454bd0f14e51698d37519cb01b2d8","sha256:551d0cf49d4c30534ecd5221b8a99ee701a9f0a7170f95981908aac55d143226"]
      - values: {"F":120,"dd":8,"th":0}
        answers: ["sha256:427fd0549e6dd011d8058906ec67972b9fd4a20586d9eb6f34cdd5c60a9611b7","sha256:752c88097fa29502c80ce90e5805876c6fd347edc436a8b790f6b0292714fe83","sha256:c95b212d7f5c2a702789dab074b64288c6f64905a9322dd4465cfa93fb8d9257"]
      - values: {"F":35,"dd":20,"th":60}
        answers: ["sha256:11b98e59aaf23e01b75031cb151193fe8927129c2f43b214bd9a2399a624f0ad","sha256:c02f98f7c3e832961310fa0782465f350cb1d4bae4448198ff721e73d8e7d10a","sha256:4f8b8cf5676f9145e83f4197e9a1a3dbdab5bcb3bf48215db99de652c3dd2c91"]
      - values: {"F":200,"dd":5,"th":120}
        answers: ["sha256:4a60ec25305b9afd786cf751a8552aedd01884a2caca71df2e5bd24ddafc24ba","sha256:e29883e1bd0bfdcf28c9bc4ad5d1d8309d4e70915d8a8dd00d1fce470e23b7bc","sha256:6c5f9022e26bd1cc3b2d0ee5aaf6df6cc3dcc202e9524b4bb1a7d8f5306743bf"]
      - values: {"F":80,"dd":15,"th":45}
        answers: ["sha256:b353dfbef77f313cafc6f7829f59e28ea6b1c94db858b81f58bcf38db700c786","sha256:491318acb4c59769adf9dd076d0b6cd890d532f7b1caa47f9729fca041b46c40","sha256:fc6eb75c165c7d93b1310d786ab96c5b2f8c05a6354c979149145d014b01b4f4"]
      - values: {"F":60,"dd":25,"th":150}
        answers: ["sha256:44c7534d0d1f6803319e8d386c8ab5213d840d995b3d1d6ec838024bcf7af886","sha256:cb7d010ea12071e4d1bd5273cbac279f3b63f2cac13b505259edada09bb3ec7b","sha256:a5a861e0e12bc940121ac21524b90bcb723a00b9b7af47e3d96c003fc7744e5c"]
  - id: energia-cinetica
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la energía cinética, en kJ, de un cuerpo de ${{m}}$ kg que se mueve a ${{vk}}$ km/h? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"1200","vk":90}
        answers: ["sha256:ff02d6defd4ddb1d6e180759ef62222d08c58f8e52e973cf653f8914425b9a73","sha256:772f615ff50887a97343d5db8a010ce8efa1dcca46f08509c8c9aef8ea9ab350","sha256:f6f537bd098a6b5a397839f415bc3dbbd5a45d39da17c70f0d374393c6761176"]
      - values: {"m":"80","vk":36}
        answers: ["sha256:ff05823d55e6303135ecaab667fad3a6e33917ce4e358956a8229347d8b055aa","sha256:a16138d10b0750f99314a5e807f4f71a12eda70f93e6c8e4fda289a96a764831","sha256:ec4c78f4e068274fc2a1c6c75d534257c6d3956b7639dd178ca4368d480f754a"]
      - values: {"m":"15000","vk":72}
        answers: ["sha256:f13caf12959845b445cada9b1928b4b15d3c6be08cb1bb45fcd28d84269fb7a4","sha256:b242edf182321c9edfc46a643bc69c04057dc53e894fe45574a09bc971e2ceda","sha256:063370cad5a75fda7bac2468dc551679a553e858aadc7921e38dcdfda9bee953"]
      - values: {"m":"0{,}145","vk":144}
        answers: ["sha256:70f8989b6f171f9f8a13b97e4d1149f44f60e47b83d06e0b459ae11348587ea9","sha256:d67206008db9eba1759a7bdfa456ac4a6caf23e3c2f7f7a80792348f1b8cd533","sha256:9cba985574960830ee52797d4e112ec2d37dac036c764314df1a9eebb4b23523"]
      - values: {"m":"60","vk":18}
        answers: ["sha256:c3fd8fb35d08293ab898492343a89b33ae6ed9695478e05ea9ef001f34b7794f","sha256:207571de3068d1d5020811af361f04c957618df797662b32e6254b64167ac982","sha256:48d3f2f74a4e8c9f69a80125bdc3d1564a98c0227e63e09209dd4901a02c541c"]
      - values: {"m":"2000","vk":126}
        answers: ["sha256:b8743c0fdcaa3490d0c1756ae5b9544279e1f30536b54ce906f1417b0757464d","sha256:451367b3852cae8f5d01b30ad6e1730595fb920d198df89b73f83cf4081f8a69","sha256:0c1722d3d66d740d6a73040064bbc1339dc2b8c7e4a31aafc78a772fc5fcf0db"]
  - id: teorema-trabajo-energia
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un cuerpo de ${{m}}$ kg que va a ${{v0}}$ m/s recibe un trabajo neto de ${{W}}$ J. ¿Qué velocidad tiene después, en m/s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"2","v0":3,"W":27}
        answers: ["sha256:379a09c63b5406152e4c1890ca26f4cdfeeb7b0839473a371c423b9a1d5ebc1d","sha256:6df4ad3a6ac8efe4076c60a88b0d8d0c47c46f3c63f2333c9da591f2ffffb430","sha256:e6218d60f3dd56dce6a1fab97a5daf07445cc4f1070bbc14822d0d0a69efd58a"]
      - values: {"m":"10","v0":0,"W":605}
        answers: ["sha256:0f436c25393be2a9831de9a7e1fb7724929a4a24ade6f4066de87836221ffe83","sha256:eedac80881509d1f9fc6152b2db38ba8dea39fd364e871072988ef028df1ce9f","sha256:2762cff342a062ea4b3c9f5f36370451db41a0cb6c3e74fa5a64c769908657df"]
      - values: {"m":"0{,}5","v0":4,"W":-3}
        answers: ["sha256:27bcbdf0a0970a0e100fccd4f02b25eced5542d0fa1090810616fed51305643b","sha256:a82bb97a93db9d27aeba6d888bfeaa04abac4306fe9227899f41cd8e01361483","sha256:50f91815f9240b5a2c21474c5248b8937066c0a17d4c60b2670ebda000621dc0"]
      - values: {"m":"1500","v0":20,"W":-150000}
        answers: ["sha256:de9ee1257d856fd1e3e4aec318302296157715cd3a8bbaf3fc967ddda2f77676","sha256:211330665cdaa18a4cebb969f3131c399ba62874956de13871b10e1608eba990","sha256:36a791c8beb18cd4df9cd5ccbcf219ce9912f0ab454b45c4c343f9e64588f2f3"]
      - values: {"m":"4","v0":1,"W":48}
        answers: ["sha256:a4dd45b790013c8eafccb02e7db1c54ab6d8389dc2de42319a21f5c1f9e9b3b2","sha256:abfb96df604332951f5196f0f0710324b09092570923a98692c373f3b7b9c5ff","sha256:b0e57dee824d5a99ebfc89375f69de68ca730c98fd25dcf92b3379b4fa21e8f3"]
      - values: {"m":"70","v0":5,"W":875}
        answers: ["sha256:811f05305cc11981d67b9b785fce333f3136bc3c8d09e52ed6f780bb787d2c4a","sha256:dc4f93a9b56f722c92a96e97c7a459a2aa5f1c4fd3d790c26a37d71d7d67e9dd","sha256:cda67cb50b268b135c2d9412730307d9958919fa9c36687d52aebced19b24dcf"]
  - id: montana-rusa
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un vagón de montaña rusa pasa a ${{v0}}$ m/s por un punto situado a ${{h1}}$ m de altura. Sin rozamiento ($g = 9{,}8$ m/s²), ¿qué velocidad lleva, en m/s, al pasar por un punto a ${{h2}}$ m
      de altura? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"h1":30,"v0":2,"h2":5}
        answers: ["sha256:9a0de2c7508bb0ba18721555cca9a53842f4576ea53fbde966c45d64df12475c","sha256:d05eb31af9ca8114804924d5ee70669b59dc92878cd605ba06c677c77c7e41a1","sha256:45ee15c262253dcaff6fbf3f7a1cf89f630477a62c58d3644e69bdf196a5bbdb"]
      - values: {"h1":45,"v0":0,"h2":10}
        answers: ["sha256:32dd99315d148a70ec97d65087d1e963f3a2adaadc56f8242d67f0adfb4a71e2","sha256:d38c61de7e008811295a34319cbf4c7680de6402367f6428a924565391851b46","sha256:c6f144425f0a06a7aed100086af18b999d5090600aa4bf01b4a1d5d38f1d37b9"]
      - values: {"h1":20,"v0":5,"h2":0}
        answers: ["sha256:23dbe2a57f0cf08ce22c18e2b658ecdadc910d82db344594279fef9c38bf1dda","sha256:8a83ef295ca77de2f9b0a653d2e4b15c702ee904f394a317fb31e8bbe3665cba","sha256:b181589596e674b8b1e861cb28518b4b80848c7d46868c23efb449353c1acdde"]
      - values: {"h1":60,"v0":3,"h2":12}
        answers: ["sha256:1495f8c85d6080c1c29c08ead36dc01c3443e58f54acee76af7eb7ab9a65f2f0","sha256:078536e834782255a609c4570cee6cac8a5de9ad331af140ba535fb63e7c98ff","sha256:af6356ff7fff084c3e290bb36a9b8906420ba3d179c2d53258bc10f0485a3bb8"]
      - values: {"h1":25,"v0":0,"h2":2}
        answers: ["sha256:8d236c08791115b133ee2c3132be055cc287ea0fce6dfbba742616de2e271adc","sha256:f35c6f1b9796a421ad47ba26cd08b5fd7f0cac26c432194c0707387f56fbeb48","sha256:de2c44bf0aa5cd337e705963c5c66d25b0914de5b8c64ae25b023f02b8cc13b2"]
      - values: {"h1":52,"v0":1,"h2":20}
        answers: ["sha256:ac224a69bc779561c89f4771659063e758ca4a733825585af485972a3ee41424","sha256:3860c915e92708a237cad0b29472a2dc6f4ce529a1d51a627f83d3462a8696b7","sha256:8882e317679974eb9c226ee7949e80da270477b740980b376f388d9aec51be87"]
  - id: muelle-lanzador
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un muelle vertical de constante ${{k}}$ N/m, comprimido ${{x}}$ m, lanza hacia arriba una bola de ${{m}}$ kg. Despreciando el aire y la masa del muelle ($g = 9{,}8$ m/s²), ¿cuántos metros sube la
      bola por encima del punto donde el muelle la suelta? (Toma la altura del muelle comprimido como despreciable; al menos cuatro cifras significativas.)
    variants:
      - values: {"k":500,"x":"0{,}08","m":"0{,}05"}
        answers: ["sha256:e309db1fa05a271f4cb95ceb9cf9d2ab9c5a7cd08c02af01d7fc18cd7116197f","sha256:0f732dc4d40d6a35b5d3254a435d30cf891673e127c8c9a191dcfb460eac6005","sha256:8d0f6cd18bb001937704350870d157f0e371288c89bad84dd0990096965c1be1"]
      - values: {"k":1200,"x":"0{,}15","m":"0{,}4"}
        answers: ["sha256:2f9d2046e91e88dafccfe9025ee827c8efa61be5d7d203425ba11be2d42d0169","sha256:63d7173351ecd06a3a25d3081ef94b5c443d6ac4f8c832235ca4f551b07150d6","sha256:be68adf7d5f98929ccef00032ccc993486e9862d331c40e733e4d1883b0dfc09"]
      - values: {"k":80,"x":"0{,}2","m":"0{,}02"}
        answers: ["sha256:6aeab30786fd8fdf861cdbf4d41b3111bb28509ece26797a9dc9faade7453b3a","sha256:301253462fb0d3914108008b5849d0c2328aeabbb3ba44a3334ca1eaed35b548","sha256:75982f350bb36cd223fb243a61adbc2bbb3cc553e311076bb120f07c6c397461"]
      - values: {"k":3000,"x":"0{,}05","m":"0{,}25"}
        answers: ["sha256:d56798c5e37f93210a2e2716d36ef32eddab5f1cccf68e62a8d70eac14b578d9","sha256:c5241e8ee3fd40d300654e8691931b426779d92da4ada9310d009f677e387966","sha256:53aa2d9068f882d6ddb2b987b3346d01b63c61b438ac69d166bcdd0a4ea2bcaf"]
      - values: {"k":250,"x":"0{,}12","m":"0{,}1"}
        answers: ["sha256:4bdaea95bc63d841a9e6757ecc2a124382d044ae70107dfe5a4a401d19569d8f","sha256:811a00c122100519c44ac7eaf80a79b88b23e9650345e7e4bc77b9e612f7a915","sha256:a3d6bb20d5b9c3f50c78be28ff7b477f98e4468953621d7f11b9f9618c6ad0b7"]
      - values: {"k":900,"x":"0{,}06","m":"0{,}03"}
        answers: ["sha256:9ab8d4f94a1fcbd1f262698ac15141b9920ead561e5f77f7d0da63f551958cf2","sha256:2f55f8d2c58a4f055d8b7cf41d042fe508524d03a9c5d1ff0f7deba498981055","sha256:e04344841bc742d51bcae094ff3f8df2c724ca9eba611bd90035827aabbc9413"]
  - id: trabajo-para-estirar-un-muelle
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Qué trabajo, en J, hay que hacer para estirar un muelle de constante ${{k}}$ N/m desde un alargamiento de ${{x1}}$ m hasta uno de ${{x2}}$ m?
    variants:
      - values: {"k":150,"x1":"0","x2":"0{,}2"}
        answers: ["sha256:7361b4f24f7edf85225f972d73693f2642a1f80bb6b6385b59941641900f3e38","sha256:ebe569e1170d23106fd5b93d3f1ff9dd2587e4bdac119206892c74d9e3120c88","sha256:3bcf357c2906d73af2eb42fc74f9c48997044d24b85b99923082e6dcb8825b84"]
      - values: {"k":400,"x1":"0{,}1","x2":"0{,}3"}
        answers: ["sha256:a605cac44c4b22c555e78b1124f4819bcfc53292d8c5ffb654b4fc56fa734332","sha256:e404079cacf0bd38f390e16e0059a83bcc5063b51c9ba5e675010fd4f761ddd9","sha256:d5ff4f5010b04e43621fa68472a3dfdeef9d9fdae9fdc9801ba20860145654c7"]
      - values: {"k":80,"x1":"0{,}05","x2":"0{,}25"}
        answers: ["sha256:d9029dff1f73b4f9751a2ad61630ac1ae1f7cd24c909d01985c539fd88d60333","sha256:3e5903b1fb4b218f943be9e5d6693e643bee3a7fdebc8a9e1b986b0fe2a840cc","sha256:b6b3c5366a05d8e14609f11d79621911e1bb5128c261e1e04b601f6739c7feda"]
      - values: {"k":1000,"x1":"0{,}02","x2":"0{,}06"}
        answers: ["sha256:55b03c0cacd7a8c36a5e833f629a681238008ea3009261bbc72b4fa3fe32f139","sha256:0b1a5c62eaba75bd80d45a86f55de5f9e04c637c5d7d5bf00cd85e7199a1f69e","sha256:85159010f4a7a1b2ea5985bc52ad9bccb02c793c9f5f29f75d7876e34dd2a6fd"]
      - values: {"k":60,"x1":"0{,}3","x2":"0{,}5"}
        answers: ["sha256:e22289f543dc1fca160394466f47eae7f46b6fcc83ec9351e6c13b66b9364bb7","sha256:6515817458d3c600ec1a4a6a0fe13dfa8bb7f62914d13d7d3264cac04fbd260a","sha256:bcb9509f2d3127f8a524d19001acc07084e1ff47e512b3d0431582a9e5f34651"]
      - values: {"k":2500,"x1":"0","x2":"0{,}04"}
        answers: ["sha256:a621822000d09a020fe6abebd97b111deab41f8984d860808b8ca8fea9ddcc89","sha256:da57f3b0df486f2b78a33a43861086c9db281ed82ad3d36a8a30880ce2bc94ab","sha256:df52c386d7aaad1758f8ead854052a0e5531d6135a5efc02c827ca6d791705e3"]
  - id: potencia-media
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Qué potencia media, en W, hace falta para subir ${{m}}$ kg a una altura de ${{h}}$ m en ${{t}}$ s, a velocidad constante ($g = 9{,}8$ m/s²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":75,"h":"12","t":"20"}
        answers: ["sha256:84dc39de5730ec6ad843a3ccc583aad8bd5b03c3088da5bb9f54d8271d53a717","sha256:4401d20ff9bd2a789372049bef84ffc7fd16a5d7fffe32646630df986cd1374d","sha256:9c37c4bc90e4cfb1e3cf9aca039e93f7937f1dfd679c3aeb560f0e06c1d17598"]
      - values: {"m":500,"h":"30","t":"60"}
        answers: ["sha256:03e2f5348ef8183b1821171fd3ccea15cee87b829fc36dbe2f8517be30d81803","sha256:4ec792e079f882c65883672fb513d4cecba6f61bd8a3a653c9c9acea8855c321","sha256:f2b5f31bf4da008053bfafb5c3c3d47f17a49d423c8b385e1702fd80e5fd6194"]
      - values: {"m":2,"h":"1{,}5","t":"0{,}5"}
        answers: ["sha256:e66666e670294e4787ace5a72d73e854206e32c4ee5d77da78c30efffa0e8f87","sha256:a06eb40ec1d28784028fbe2f5bbdf8f5e7fa88dda6e5eac47edd0236ea36b5b2","sha256:a4f30e8a171260e186544415814d386c129a7a12592f82c6ae0f3ef938645c46"]
      - values: {"m":1200,"h":"40","t":"25"}
        answers: ["sha256:d6945b08a46f8fa5d797a04b878b7bf8dae130ea05e2cd316b528de67d2d7ca3","sha256:91ba7c712e8b0e4748cfb0cdf449ecc901695afb354ef138e23412021dc45193","sha256:fe849321fd60830ca34a42a5abe797ed540aad333a0897b14184ad3e1695c7c5"]
      - values: {"m":65,"h":"3{,}2","t":"4"}
        answers: ["sha256:6fd704bdb195ed2bbf628b1c4b237f02f441e12b91f0ea94351b0c01e646093c","sha256:062d0431c66915c960ec0fb47b4677b8e3eaac2c8bdc690bea7fdec6790c35d3","sha256:a7a6a3a8fe9d18a3610dc2e9355c2ef14d924f81b55581227bc7224b4dd50017"]
      - values: {"m":150,"h":"18","t":"45"}
        answers: ["sha256:132b32282c56ef952a2cd9c01e6d4135d47f39a5def6d5cb69cad98ba87c24de","sha256:b0dc20a8b29dc2d68f58e8b0b76a74fa884aa7d7bb91532f20d0b203e4cd3bb2","sha256:cd0c909449eac4af79180d1a30ad622e40c8021a804d648d2377cc1df66f7f9a"]
  - id: rampa-y-tramo-con-rozamiento
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un trineo baja desde el reposo por una rampa sin rozamiento de ${{h}}$ m de altura y después recorre ${{D}}$ m por un tramo horizontal con coeficiente de rozamiento ${{mu}}$ ($g = 9{,}8$ m/s²).
      ¿Qué velocidad lleva al final del tramo, en m/s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"h":5,"mu":"0{,}2","D":10}
        answers: ["sha256:cdf4d629898216c9bcff1cb28721181977dcf7a21a93ddd0a847686b4f3e1f5c","sha256:1f96bcf385b6483657dde200bbdcd71a209b2c97ff14e890fff5ff8dfedcde0e","sha256:986dd38430a370b8c0c26d523e456ab03e8f56d7fc11187c8c9bddc856cbd4a4"]
      - values: {"h":8,"mu":"0{,}3","D":12}
        answers: ["sha256:7332973e22ba6633d584f9174dc84abc67259e40d5b9010f8d3cbcfcf6aa3f9a","sha256:69a79c44df0f92eeea8a45b2cc197da982982f8418155a3553649d2154a0dab3","sha256:1c5377638776477d099893656a23b40a4561c7c6bc2a4c5585193dc90397d66b"]
      - values: {"h":3,"mu":"0{,}1","D":8}
        answers: ["sha256:32d3e95b00f432f66d5e9e891650ac1a28a296a06ea618fb952b8d8f06689b70","sha256:d5f944fd36d1f7fd98645950c7c8286063485ee59774cb1be8f07f3d30d91d03","sha256:fa9f697e87b484525d41782f62765f191861ae8a16e4db9c6407a5892b6bef82"]
      - values: {"h":12,"mu":"0{,}4","D":20}
        answers: ["sha256:eacd327220b4771de8b4d17dff74901dd663f2d6c475c5166d2c5ec2d49980f5","sha256:c65f28a9946e1ee3ac19355c2bb3ddf27f40899e01ddd84d1119fe718c05f85e","sha256:5e81d66a35fb388ef948d0014fdcae0490217474a21059d3af7c8523a0ea976d"]
      - values: {"h":6,"mu":"0{,}25","D":5}
        answers: ["sha256:77d465a9243559f1baef4f617dd29d630070b9a735844ed38842797409bffa45","sha256:852a07336096c1fe884b3fe22dc0205792db99deccf81dc9047e9e3859c10c78","sha256:a6131bf780e6bd33a68b6ba0a8ac1e0aca7ec88d2bc56531821f86601f14c59a"]
      - values: {"h":10,"mu":"0{,}5","D":15}
        answers: ["sha256:bdaa6bba3bd53cb00219f33113ee1217536013fba5346b83edfb2bf1dece63e7","sha256:c3b7a161c85da19ab881c866dfdbe8cd6f9b403eb3233ae5a48f46043a72f3a2","sha256:b41764ef2aee624e155ba2f1ac7aab2f8ede1b67a7d0e45f22fc7b4a32933101"]
  - id: pendulo-energia
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un péndulo de ${{L}}$ m de longitud se suelta desde el reposo formando ${{th}}°$ con la vertical ($g = 9{,}8$ m/s²). ¿Con qué velocidad pasa por el punto más bajo, en m/s? (Al menos
      cuatro cifras significativas.)
    variants:
      - values: {"L":"1","th":30}
        answers: ["sha256:e9597c9759b24351f1e39aa41ad90cd7bf2f99b77b7b9ae006d95ac5259ad21a","sha256:21828be466e3f42e96c17c0f06a05f29e520f9c23b8207ba6d7d7b44d924db4f","sha256:d33933c2f9896b4850d11edb7af2a6e0c44560d7b3d8612fb11cde2ba3659ca0"]
      - values: {"L":"2{,}5","th":60}
        answers: ["sha256:68676ebc441f0c3a5f9153e59a3fd8cbe280edb275bacb1af9b95d107494f06e","sha256:d7bf15430bc55b4df4afdab402a0a056fb044b83a12aed5eec3b245a81fa0888","sha256:270fb1ac12f3fc34b6bcb93499e1ae70b4a844013e2633fea33710bab47cf7e5"]
      - values: {"L":"0{,}8","th":45}
        answers: ["sha256:060d1a265bfb80ebc44b8cf1114341621dc70a9d149b23a6e5d1f383d611da3a","sha256:9728c929b306ed23ed681a336631b9fd4adac58ddb78346fa15ff79c679448d2","sha256:22408d7fff57e97141711ddf4ddd5e67f24c8fd31380d1a45002bfe49ab00dcc"]
      - values: {"L":"1{,}5","th":20}
        answers: ["sha256:87290b66bfbb65d55293cd32ef2e92431054dd992f291ed49f90e1159caf0857","sha256:689c3ff1e2116494b50e428d9bdc7ab143b9360e668b29d8339fcb1bbaeb4c13","sha256:f904276be61a0c8dc87c6a39188746fe01eb1db4b7116db96806c195f9ad974a"]
      - values: {"L":"3","th":90}
        answers: ["sha256:9c852bcd6aa839fcffecc68862ddf4aa1a42c2fde8ae69d526a6fa0f5104275c","sha256:353bda90612eb65d187c800a36ab66f383798506c6b312c83d40ac259913a69c","sha256:4841c825c47654eb568bddfbf6f4528af92c83ea4c5e9d32f5bf0b07af3b993f"]
      - values: {"L":"0{,}5","th":75}
        answers: ["sha256:05a1c391662c171d4ebfeb84071082623d7f8917ea92540b24ba8d50a5d69bb5","sha256:e7b8364d9f1b4f4849cd8771af2ccb21d69a97fd4a65146c50df90c8f667bb15","sha256:e40545419da5b53a5361338db6721b89d3ea4514f3e4437e0c4e87a574f2fbee"]
  - id: rendimiento
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un motor sube ${{m}}$ kg a ${{h}}$ m de altura consumiendo ${{E}}$ J de energía eléctrica ($g = 9{,}8$ m/s²). ¿Cuál es su rendimiento, en %? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":200,"h":15,"E":50000}
        answers: ["sha256:63c7cea5de1d4caa46c7024b2204b736333c042ac1c4956a98ec29268d2618bd","sha256:72482158705008e80d62317fe937802f00070263aba1c6343310b4cef8eeac13","sha256:c82bc34d0cfc7df63d5802104c358e03b4f40e99491056b83eef7b661d713280"]
      - values: {"m":50,"h":8,"E":5000}
        answers: ["sha256:0ed5d85824434d97ebba275a06020656bf9af56443ca1966fc31e9293d634c1d","sha256:61cf7fc398f058b59370fb1be3f42f1c72394572f5bfb0e2cef52d67c415a41a","sha256:e3d7bf195888219285dbb74d01c8affdf3253ff706765988faa002990b2db383"]
      - values: {"m":1000,"h":12,"E":180000}
        answers: ["sha256:43f210dcddcb1a2684c94f775fbbd18731394a3b2da9dcd0579e29636c8eaae2","sha256:d97ee12ddff2398029b563840b6687fd8719f5bd54bbf2aa0c71788706fe26cc","sha256:d881526a97fcfc3842c7a20d846b95374462730d2e4852e31d3effbe3134f30d"]
      - values: {"m":30,"h":25,"E":9800}
        answers: ["sha256:317e28e19b40670067fed5068dc8f6e9035810d0c3912c1d4c71bfc74e4d4160","sha256:eab932529aa69f62f3914928ba54fe0f47a3362cad38e8485a74c4fe5c53b8c5","sha256:892197a43942eb36ef647c126c23ee40e4c16a886f4da9d9b63107b44ebc599d"]
      - values: {"m":800,"h":4,"E":45000}
        answers: ["sha256:ba30a8f28f512ae08568cd2cd66e1b6d44fcec82d2ee0e22022a9f51b23c919d","sha256:5deca8bf10ce491692715d6213e6ad9030117e774c0435e0ee55546e2efe34de","sha256:72e88f8436621416a1c16cb9064fb9262341786bc042696aefa2a3d3333d529f"]
      - values: {"m":120,"h":10,"E":16000}
        answers: ["sha256:9e0e5d31a29ba1960cbe38dad4659c4bff460fd5076f92785acc38946187ed09","sha256:929dbb72538c47ffdeb5f3e6557f65790144cfb7873fe8b584e96a5e8a496efb","sha256:679bf55bbd4d28d57a45ebc53a93f64ebb296acd5ceea9057a91cf99af52f094"]
  - id: kilovatios-hora
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un aparato de ${{P}}$ W funciona durante ${{t}}$ h. ¿Cuántos kWh consume?
    variants:
      - values: {"P":2000,"t":"1{,}5"}
        answers: ["sha256:83c3be907dd6286349329830064d2bcb16d2b3f06eb93601ef0f463853904c1e","sha256:4155b55efff00347ed0450124368267f65b2a544965bd75a8f9c5bb301feb052","sha256:e51a7e9863429bb17f21071dd4a5eead99c2c0e2303b0e06895c6ed9a8df0b74"]
      - values: {"P":9,"t":"2000"}
        answers: ["sha256:0f9cd2229afb386b45575c8e5af5e718f2a467d40a17f93e6db6afb507602ba1","sha256:5d54ec3474b2d152515d3f07428396192c66d72af175b91896f948a1bf21fdc6","sha256:996a669a91a61687ca4caa5b75aef0af85cecec5a2fa22cafa5a5fa589941bc6"]
      - values: {"P":750,"t":"0{,}4"}
        answers: ["sha256:b4ef994a8d9c6c46f9c42522ab97c2dcd12b4835aa1b2687fd058029f6fa4b93","sha256:2dca27df6120ba65db5051c3bd54d3b1db5ea05e15b59db3cd92d7f357e6032d","sha256:363e7dbb6fc06c7c136e7f265488d75d292082fb7c3b2d41217ebc267fbef38a"]
      - values: {"P":1500,"t":"3"}
        answers: ["sha256:23f0b41f938c09233dd15f42b6464448c87e1a6560ec854eb59c7f0cca96709f","sha256:391dab69e58e5b4a4e922e17857abc9ad7e43e2133318a2d0659954c95108107","sha256:b85226df4b355f5d7e36038cf5892033a64a8a47cdaf396a7e24b40ece62faff"]
      - values: {"P":100,"t":"42"}
        answers: ["sha256:a0402d8ca5af9d51bbc06c9630c7ec21254f6c105d41f1aef2549efae4c7f55f","sha256:4902584f65bb27316a1d30fad642df576911a2c83d25c0a6508865907dd22d70","sha256:efc8fc302d0a54e55a70774cc713c7cc176803378d0985f939599a55308bb9bb"]
      - values: {"P":3500,"t":"0{,}25"}
        answers: ["sha256:49d37ac92b97db0beff73609f7e6d23a3b291ba6866e89ba1f2a60c45b304161","sha256:80d1b24c563a52dc0ef37a6f4ca9895d6e59afd8efca2746d563bf23c9d63e44","sha256:0f5a559742642f0a822a71ec2b133af72ba726adf3aeb06a7a59dfb38b101309"]
  - id: conservacion-de-la-energia
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Deduce el teorema trabajo-energía, $W_{\text{neto}} = \Delta E_c$, para una fuerza neta constante en un movimiento rectilíneo. (b) Explica qué es una fuerza conservativa, por qué el
      peso lo es y el rozamiento no, y cómo se llega a la conservación de la energía mecánica. (c) Una pelota se deja caer desde $2$ m y rebota hasta $1{,}5$ m: ¿se ha violado la
      conservación de la energía? Explícalo.
    sealed: "gz64:H4sIAAAAAAACCn2UvY7bSBCEX6VAMNDSXMEnwIkABYfzOjpfcAfDwfG8aA1b0hjDbu78CJYFPYxDB44uc6oXM4a0LO7CcDjQqLq/qhoei6AuRatSLIuqmtFNVeEPFWwS+48E4UgwKiGSRK5RvsIKHZU4oNy/W2CF/f3zdws8w4Kapm6al+wi4UM5x+vkou2dNSStolePsmk2ngy6Rbm8HH5bdFnnFtfjIJinTAWxwqsn57f3x6aJ/CEehaOeTuUcdw7R05rea95cwQHsYKhbW0XLYGG/PX8hGCvnz9EamjfSSFXN1hn8jdAFnAOqKoOz31O0e6oqBIuQfgxgiZ7RakCfJGqA5BE9S8tox6lWFDN+SHZPjiVyx4OJHCDJZQUkudwz7D21evMIIuv0HDJII+Vtt51YsCtrPCRGUDcdDEcB5GLyFGDFGksOB2yskFsiMPrE2YlgvF1bD6Odory9qN7d92UOHOXdfZ9T2O5GX71+pM6yREWw3PWes5j2Kgxy6HRvx59rUDh/GVabAjbynRA7MjyJaZvt1WW2jwMmlusc/9gRb7xNl1o+ukahRvkWK1wRDFZ4RFTDJd5qhjJ4NkIGRkcSLQtfG36pg8l1+Evn+JOupamqjs35k1iT27AjtDZ0VpJtFbOy26JpTKsRz4/16UWJDh2LhpsaPXuFmyhFjeTyBheOJTgQevJxsHVHGVnCRn2XLWO5/tdKZC+EmSP07DQSDrnlIbFTBG7EkMtJ0OB+r0ZzQC0PYj7wTb4vCCq2fUL4g2+0fbJgLr8oyMTz10kOubjTKOZFXfi09tYUy3+PhfE2srdaLIuX3CbDedHI6rkjjLzW59JOvitDhcEmkbHn/wXBCmJu3PgcXv/95vc8ZXx0xXJxqp/M2VjhyzOeLocD3qcQ7Sbz5e/RQzp/xuWFuaF+g5OTqov+cpYN0co28c8cPDyNO4fo4HmtkR+r/nf6Bqy5RtmIBQAA"
  - id: r-trabajo-perpendicular
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto trabajo, en J, hace la normal sobre un cuerpo que se desliza por una mesa horizontal?
    answers: ["sha256:70dbc250c3df66f5069673965be48fe9e844374bc7c13643c224b73921dcfb02","sha256:fb5e00ac9929b4a74cd0fb60b8532bee4ca62fd3fd8f957257d6d88e7ae6e94c","sha256:3d9490ce825728c482bf3b6861c2cd46dca7ea356fe6ed066a2ad04cde879c75"]
  - id: r-julio
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿A qué equivale un julio?
    options:
      - |
        $\mathrm{N/m}$
      - |
        $\mathrm{N\cdot m}$
      - |
        $\mathrm{N\cdot s}$
      - |
        $\mathrm{W/s}$
    answers: ["sha256:b3cdc6a4de879df7d194b4c5b188cd75d113dc7d3a9635e90e9b14fa88c46290"]
  - id: r-doble-velocidad-energia
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si un coche duplica su velocidad, ¿por cuánto se multiplica su energía cinética?
    answers: ["sha256:1798c50ebcc1a641a56263c498d8a18c8bdb3881d1636686c30ba46e6852e48a","sha256:48631d238a0be4e3cf86326fe91f0c8fb28ddc6dafcd94f09caf8a1809312925","sha256:1b7f2864927b29031d1f719ddaee2ff5700b61646b5a50d34dd47857c7c49fcd"]
  - id: r-caida-masas
    tier: 2
    type: opcion
    review: true
    prompt: |
      Dos bolas de distinta masa se dejan caer desde la misma altura sin rozamiento. Según la conservación de la energía, ¿cuál llega al suelo con más velocidad?
    options:
      - |
        La más pesada
      - |
        La más ligera
      - |
        Llegan con la misma velocidad
      - |
        Depende de la altura
    answers: ["sha256:2ac12b2737cd47fe260905281c833f2ca0a4e1b7cf72e09abdcbfca8ce8d48f0"]
  - id: r-potencia-unidad
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué unidad se mide la potencia en el SI?
    options:
      - |
        El vatio, que es un julio por segundo
      - |
        El julio
      - |
        El newton por segundo
      - |
        El kilovatio hora
    answers: ["sha256:7a4d5d53a712f686e9585674085063ec35b0ceba9e106e1c2311b35ec5bce94d"]
  - id: r-kwh-julios
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos julios son un kWh?
    answers: ["sha256:19cd47850c46183f9d0adc312cdb50b0deb665ec617d43e6ed8fad0796bdcbf5","sha256:f04df68f9a133151b7a42f37ff053e12e7e97036dfa59f4e60fb1d3f38172518","sha256:7d15f95741d6f32122c2048c65a3a35752bd9f5a91b836bcf1900075f2d1df21"]
  - id: r-rozamiento-energia
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué le pasa a la energía mecánica que «pierde» un cuerpo por el rozamiento?
    options:
      - |
        Se destruye
      - |
        Se convierte en energía potencial
      - |
        Se convierte en energía cinética
      - |
        Se transforma en energía interna (calor)
    answers: ["sha256:16d69f167ce406777331771091ecd2b961907250396a3e75338dd2ec1b80c465"]
---

# Trabajo y energía: trabajo de una fuerza, energía cinética, teorema trabajo-energía, energía potencial, conservación de la energía mecánica y potencia

Muchos problemas de dinámica son difíciles con las leyes de Newton (la montaña rusa cambia de inclinación a cada metro) y muy fáciles con la **energía**:
basta comparar el principio y el final. La energía es quizá el concepto más importante de toda la física, porque se **conserva**: en cualquier proceso,
la cantidad total es la misma, aunque cambie de forma (movimiento, altura, deformación, calor, electricidad, química). Este nodo define el trabajo y las
energías mecánicas, y enseña a usar su conservación.

## Objetivos

Al terminar sabrás:

1. Calcular el trabajo de una fuerza constante y el de un muelle (fuerza variable).
2. Usar la energía cinética y el teorema trabajo-energía.
3. Calcular energías potenciales gravitatoria y elástica, y distinguir fuerzas conservativas y no conservativas.
4. Resolver problemas con la conservación de la energía mecánica, también con rozamiento.
5. Calcular potencias, rendimientos y consumos en kWh.

## Qué debes dominar antes

[[fis-dinamica-aplicaciones]] (fuerzas, rozamiento, planos inclinados) y, a través de ella, [[fis-leyes-newton]] y el MRUA de [[fis-cinematica-rectilinea]].

> [!question] Test de entrada
> 1. Fuerza de rozamiento cinético sobre una caja de $10$ kg en un suelo con $\mu_k = 0{,}3$ ($g = 9{,}8$ m/s²).
> 2. Despeja $v$ en $v^2 = v_0^2 + 2a\,\Delta x$ si $v_0 = 0$, $a = 2$ m/s² y $\Delta x = 9$ m.
> 3. $\cos 60°$.
>
> Respuestas: $29{,}4$ N; $v = 6$ m/s; $0{,}5$.

## 1. Para qué sirve

- **Energía y sostenibilidad**: centrales hidroeléctricas (energía potencial del agua), consumo eléctrico en kWh, eficiencia de motores.
- **Seguridad**: la energía cinética de un coche crece con el cuadrado de la velocidad, y es la que hay que disipar en un choque.
- **Ingeniería y deporte**: montañas rusas, catapultas, saltos con pértiga, muelles y amortiguadores.
- **Toda la física posterior**: termodinámica (el tema `fis-calor-temperatura`), electricidad, física moderna ($E = mc^2$) se construyen sobre la energía.

## 2. Trabajo

> [!practico]
> En física, sostener una maleta quieta no es «trabajar», aunque canse: la maleta no se mueve. Arrastrarla sí, y cuanto más la desplazas y más fuerza haces en
> la dirección del movimiento, más trabajo. Si tiras de ella con una correa inclinada, solo cuenta la parte de la fuerza que va en la dirección del avance.

El **trabajo** de una fuerza constante $\vec F$ cuando su punto de aplicación se desplaza $\vec d$ es
$$
W = \vec F \cdot \vec d = F\,d\cos\theta ,
$$
en **julios** ($1\ \mathrm J = 1\ \mathrm{N\cdot m}$). Es positivo si la fuerza favorece el movimiento ($\theta < 90°$), negativo si se opone (el rozamiento) y **nulo** si es perpendicular (la normal en una mesa, la tensión
en un movimiento circular). Si la fuerza varía, el trabajo es el **área bajo la gráfica** $F$-$x$. Para un muelle ($F = kx$, ley de Hooke), esa área es un triángulo: estirarlo desde $0$ hasta $x$
cuesta $\frac12kx^2$.

## 3. Energía cinética y teorema trabajo-energía

La **energía cinética** de un cuerpo de masa $m$ y velocidad $v$ es $E_c = \frac12mv^2$. *Ejemplo:* un coche de $1\,000$ kg a $20$ m/s tiene $200\,000$ J; al doble de velocidad, cuatro veces más.

**Teorema trabajo-energía**: el trabajo de la fuerza neta es igual a la variación de la energía cinética,
$$
W_{\text{neto}} = \Delta E_c = \tfrac12mv_f^2 - \tfrac12mv_i^2 .
$$
Se deduce de $F = ma$ y de $v^2 = v_0^2 + 2a\Delta x$ multiplicando por $\frac m2$.

## 4. Energía potencial y fuerzas conservativas

Una fuerza es **conservativa** si su trabajo entre dos puntos no depende del camino seguido. Entonces se le asocia una **energía potencial** $E_p$, energía «almacenada» por la
posición, con $W = -\Delta E_p$:

- **Gravitatoria** (cerca de la superficie): $E_p = mgh$, con $h$ medida desde un nivel elegido (solo importan las diferencias).
- **Elástica** (muelle): $E_p = \frac12kx^2$, con $x$ el alargamiento o la compresión. *Ejemplo:* un muelle de $k = 200$ N/m comprimido $0{,}1$ m almacena $1$ J.

El rozamiento **no** es conservativo: su trabajo depende del camino (más largo, más trabajo negativo) y la energía que «quita» se convierte en energía interna (calor).

## 5. Conservación de la energía

> [!practico]
> Una montaña rusa sube el vagón a lo alto con un motor y lo suelta: a partir de ahí, cada vez que baja, la altura se convierte en velocidad, y cada vez que sube,
> la velocidad vuelve a convertirse en altura. Por eso ninguna colina puede ser más alta que la primera: no habría energía para subirla.

Si solo trabajan fuerzas conservativas, la **energía mecánica** $E_m = E_c + E_p$ se conserva:
$$
\tfrac12mv_1^2 + mgh_1 = \tfrac12mv_2^2 + mgh_2 .
$$
*Ejemplo:* un objeto que cae desde $5$ m llega al suelo a $\sqrt{2 \cdot 9{,}8 \cdot 5} \approx 9{,}9$ m/s, sea cual sea su masa y su camino (rampa, tobogán o caída vertical, si no hay rozamiento).

Con **fuerzas no conservativas** (rozamiento): $E_{m,\text{final}} = E_{m,\text{inicial}} + W_{\text{no cons}}$; por ejemplo, en un tramo horizontal de longitud $d$ se pierde $\mu_kmg\,d$. La energía **total** sigue
conservándose: lo que pierde la mecánica aparece como energía interna, sonido, deformación.

> [!formal] Con rigor: por qué se conserva la energía mecánica
> Si todas las fuerzas que trabajan son conservativas, el trabajo neto es $W = -\Delta E_p$ (definición de energía potencial) y también $W = \Delta E_c$ (teorema trabajo-energía). Igualando,
> $\Delta E_c + \Delta E_p = 0$. La conservación de la energía total es mucho más general: según el teorema de Noether, se debe a que las leyes físicas no cambian con el tiempo. $\blacksquare$

## 6. Potencia y rendimiento

La **potencia** es el trabajo (o la energía transferida) por unidad de tiempo: $P = \frac Wt$, en **vatios** ($1\ \mathrm W = 1\ \mathrm{J/s}$). Para una fuerza que empuja a velocidad $v$ en su dirección,
$P = Fv$. El **kilovatio hora** es una unidad de **energía**: $1\ \mathrm{kWh} = 1\,000\ \mathrm W \cdot 3\,600\ \mathrm s = 3{,}6 \cdot 10^6$ J (una bombilla de $60$ W encendida $10$ h consume $0{,}6$ kWh). El **rendimiento** de una máquina es
$\eta = \frac{E_{\text{útil}}}{E_{\text{consumida}}}$, siempre menor que el $100\,\%$.

## 7. Errores típicos

- Pensar que cualquier fuerza hace trabajo (las perpendiculares al movimiento no lo hacen).
- Olvidar el signo del trabajo del rozamiento.
- Usar $mgh$ con alturas medidas desde niveles distintos en el mismo problema.
- Confundir potencia (W) con energía (J o kWh).
- Pensar que la energía «se pierde»: se transforma.

## 8. Resumen

- $W = Fd\cos\theta$; con fuerza variable, área bajo $F$-$x$; muelle $\frac12kx^2$.
- $E_c = \frac12mv^2$; $W_{\text{neto}} = \Delta E_c$.
- Conservativas: $E_p = mgh$, $\frac12kx^2$; conservación de $E_c + E_p$; con rozamiento, se resta su trabajo.
- $P = \frac Wt = Fv$; kWh; rendimiento.

## Repaso: lo que debe quedarte dentro de un mes

1. Cuándo una fuerza hace trabajo y cuándo no.
2. El teorema trabajo-energía.
3. Qué es una fuerza conservativa y qué energía potencial tiene asociada el peso.
4. Cómo se resuelve una montaña rusa con la conservación de la energía.
5. La diferencia entre vatio y kilovatio hora.

## Siguiente

[[fis-momento-choques]] (momento lineal, impulso y choques).
