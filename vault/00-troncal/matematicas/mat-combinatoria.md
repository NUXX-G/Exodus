---
id: mat-combinatoria
title: "Combinatoria: principio del producto, diagramas de árbol, permutaciones, variaciones, combinaciones, números combinatorios y binomio de Newton"
area: matematicas
trunk_level: 3
prerequisites: [mat-potencias-raices, mat-resolucion-problemas, mat-expresiones-algebraicas]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 15: «Combinatoria», secciones 1 (diagramas de árbol, permutaciones), 2 (variaciones con y sin repetición), 3 (combinaciones, números combinatorios, binomio de Newton) y 4 (resolución de problemas, permutaciones circulares, permutaciones y combinaciones con repetición). Apuntes Marea Verde, autores Álvaro Garmendia y María Molero. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/15_Combinatoria_4B.pdf"
  - "R. A. Brualdi, «Introductory Combinatorics», 5.ª ed., Pearson (2010), capítulos 2 (permutaciones y combinaciones) y 5 (coeficientes binomiales)."
hints:
  - "Concepto: casi todo recuento sale del principio del producto (si una decisión tiene a opciones y otra b, juntas tienen a·b). Para elegir la fórmula, responde tres preguntas: ¿entran todos los elementos?, ¿importa el orden?, ¿se pueden repetir?"
  - "Herramienta: permutaciones n!; variaciones n·(n−1)·…(k factores); con repetición nᵏ; combinaciones C(n, k) = n!/(k!(n−k)!). Si hay una condición («al menos uno», «juntos»), cuenta lo contrario y resta, o trata el bloque como un solo elemento."
  - "Documentación: Marea Verde 4.º ESO B cap. 15; Brualdi, caps. 2 y 5."
exercises:
  - id: principio-del-producto
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Para formar un código hay que elegir, en orden, ${{k}}$ símbolos, y para cada posición hay estas opciones: ${{L}}$. ¿Cuántos códigos
      distintos se pueden formar?
    variants:
      - values: {"L":"4, 3, 5","k":3}
        answers: ["sha256:8fcbe663b081bb620b79acd9282dbe8ad97507ccb6a6ea14a0bbfcd08eda7d13","sha256:f3cabd48505c33d8bd9410fb7817f87a78694291c0b496ae20d24dc2a2ec28cf","sha256:59290157bb348abfbb1ff1c25eedfff64c887fa9cc2db2d2d1392cb6016a4bec"]
      - values: {"L":"2, 6, 3, 2","k":4}
        answers: ["sha256:92c12e8d92fad7ae4f99ce948d538d03a186089afbc0fd537489947c0139a071","sha256:2f7811be2d56c3341251c76be7526e0f39335849df511988a6354c155a7c19ec","sha256:8299cedc6511191b9f893e307456d4d1e14b27a1c39c16f5f0d1a66d1c10b17d"]
      - values: {"L":"10, 10, 26","k":3}
        answers: ["sha256:e5e434f041f6c53ea91fc2a6f76c097c08af354806dbdceedb0291424df08f4c","sha256:247ef7288481c88d80b875c78648dcaea764b5d6f7c636505b8d246b333ff1c0","sha256:a5dfa66f035f52d29fcf957d027ef22cd9450b0697b7ac5839cba59ac54c84cd"]
      - values: {"L":"3, 7","k":2}
        answers: ["sha256:cdfb78388b1b2f585b4e24d147091971dd2ad6b1978d431188f7272e463fabcd","sha256:56b29c8c1cbb44adc2e7f847ec4d795676663bb728f9494c3b8d259b0ea10541","sha256:f37e92277f562d0f7d5bb356b5fdeaa84a873129283ad6e55d908b3a73a6b5e3"]
      - values: {"L":"5, 4, 2, 4","k":4}
        answers: ["sha256:fedbf4fbca81f5fdad0cda97eaa9c230541ac1f40991f4b85884b372b2ccecf8","sha256:5bf8e449aa1126f56b39fc34bd8a6c81374ea980293a50e55cbac741f02c532c","sha256:f88b21e8018480a74800a4210153f2982c95abeb09c483a5263660713ae47d25"]
      - values: {"L":"12, 2, 2","k":3}
        answers: ["sha256:93d11323d0bc5d48390cdd239ed9bdf9b6bee07b48647d5323e2e1e0538cabd5","sha256:15e366412aa1e5aba9810d685b8c1d70b65dffa67d826bd4d2189f70208b9de8","sha256:b82193e2d2b30fe5da4e0a18a5a8899377725326e020e8995d8debadfaa9d7b3"]
  - id: permutaciones
    tier: 1
    type: numero
    sig: 12
    prompt: |
      ¿De cuántas formas se pueden colocar ${{n}}$ libros distintos en una estantería?
    variants:
      - values: {"n":6}
        answers: ["sha256:4c662873632cbb4b8546fa3c10da26cf7c2c69533cce400a3c05afd5fead078f","sha256:b38cb70ff7462629dbaa45aab4e9e37829b83fbe9810ca20355781026f2d6657","sha256:9924739418eb62566c9d556153beaac904c4bc2600687653f20fb85762a1d76c"]
      - values: {"n":7}
        answers: ["sha256:a8990026a88d569c3bf2f2cceb2c1ec1d9599d57dc9022c91eb3dcad256ca38a","sha256:981d6c9122820abff52add4183f2526085bb3b163953d8e081499c47aa3416e3","sha256:ebebf706830c7f6800bd985c7ad31038eb4e846d1799345dbc27b4df8154639c"]
      - values: {"n":4}
        answers: ["sha256:4b2b824d2da41835826e8d53b4a8aa247817d52f86ad0250bb79ffbfed7fd14a","sha256:a9d0edfcef067dffaedef8da556f019b0603defccfc6d01d8054253a7e397d55","sha256:149465acf6a0a72c67bb7158cebf761c92044e676ceb3d0538b207ec17a5507e"]
      - values: {"n":8}
        answers: ["sha256:9782d76dc8b11163260c9fca668571d9f9e4fe1c04d32de18c0f79909756a6d8","sha256:724f49d726eaea62a9c3f84860a92d71adb9446f4148e1b40afef789afbcf03e","sha256:473ecf1ff300cecd663af8484d527c166a52557dffb07833b44429860b7c1178"]
      - values: {"n":3}
        answers: ["sha256:f1b013e0fc942b1b06bb42976625d80f7009f59d7c6e919a5475805178553d81","sha256:b77eb60f3ab25cad63936012bdc34c4c9782da09b7cf4f3d7735f3aae57cafcf","sha256:00d3b73af17b1d15fa49aa78a3f7410383dfd43faa6d3fdfc4fb2c5022309018"]
      - values: {"n":9}
        answers: ["sha256:f9f5fbec7c3e0751b3af140756b026c6346b6dc8ef3c729b94d139baf1442e80","sha256:969e662e002fe74c9e438d8a7922e8cbbb5fcd49bd12b5c725e0bde9b2cb74a3","sha256:bd3a4d973097a2f3b9b81599cc427e52a0f48f598d38b519ca5c690a5b23c1c4"]
  - id: variaciones-sin-repeticion
    tier: 1
    type: numero
    sig: 12
    prompt: |
      En un concurso con ${{n}}$ participantes se reparten ${{k}}$ premios distintos (primero, segundo…), y nadie puede ganar dos. ¿De cuántas
      formas se pueden repartir?
    variants:
      - values: {"n":10,"k":3}
        answers: ["sha256:c180806b3fbcd627dede2ddefab94e6edcc006a22e1e28b5d142e8d4130bc921","sha256:2c815da8fce06c978e27a5b5725eecae26bc62d385a920aaae59f818c394cf6d","sha256:fa4f2de15a14d93cb5c3ac2993f2415f09de78e51473d3e6b2e6936311d9612d"]
      - values: {"n":12,"k":2}
        answers: ["sha256:97c1cf6dea749f9dca6b0d8df01be702b8aace2bdbba1aef61296b73ccf14ecf","sha256:38264599664e12b552fadf1e5be611da77e7410e8ed855acc0499e8269974a08","sha256:664acfecd003f6132d01e75bf17ebd5543a91d002c4452472805be9965850bf3"]
      - values: {"n":7,"k":4}
        answers: ["sha256:3c0fc69af49ffa1a96ad712ccaaa702cde8bd6dcdab12f7d542be5863ad7d059","sha256:c7f6e4572c6c6060c90d1f56dfd752a756c5c2c3bb9cd9dac97e9b65a37ed51d","sha256:52b3fa1cf9057aad89914e434e473a88037eb7ce101b8aca5314df720642c378"]
      - values: {"n":20,"k":3}
        answers: ["sha256:9a352feb623194a28efb36b8d7b17a7eedbaff21dcc144a85acd92ce2558f71c","sha256:f30407a36f2216b9d16e945d57e6ec5f95c33fa00d72b101db66061bd4cd967d","sha256:8926166c7c1792d5c40f31a9b7c788ac4ab4759021afef637f860614b8d4df57"]
      - values: {"n":6,"k":6}
        answers: ["sha256:3be426ebe17f8c1f22b4db14d854e90e49b4f4d0bf144ed08c33299bd3720092","sha256:a02ffd838b6cfef25d8630e038e09154a1d6e54cc628799f5ed22b0f40cd44a1","sha256:6a951a97399831209816b4a88e7ed2871c26eaed21e3fae53452d4155a130421"]
      - values: {"n":9,"k":5}
        answers: ["sha256:9122c7104f47ece44c1ac03f03f05dc190e06aac62446e7cf4fa841145dfebe1","sha256:9324de1f43d2faa8e2f0c717d5a9bac29603387d0b4333f2ba55bebe29322440","sha256:3b7de8deb8ae62f40a8e81b39ccc2862080f3e626d0005fa522593138a27646e"]
  - id: variaciones-con-repeticion
    tier: 1
    type: numero
    sig: 12
    prompt: |
      ¿Cuántas palabras (con o sin sentido) de longitud ${{k}}$ se pueden escribir con un alfabeto de ${{n}}$ símbolos, si se pueden repetir?
    variants:
      - values: {"n":2,"k":8}
        answers: ["sha256:8cc5c4dfca4ddc00e4e124804d309035c9f93b5fb0a79ef942ffca46cea24cea","sha256:433739b62a9002a9294dd2bf9fbb0863055c4a0f88692d1c5f3cbe721f5a9df4","sha256:33816536edff50446b2ba095d8517d06f49242a991a22fe05e61861a6012c8b3"]
      - values: {"n":10,"k":3}
        answers: ["sha256:67f57cc4795785b8549f82f58f1df0abab884f7bd70422511a0d26bb2d72cca6","sha256:ab9bd7de9358107b7349cb187397c60b2993eb0084a6aa9d91987a10de361b83","sha256:16a4e7e7b09d0137ef6f833ce304fb4c308a682bddedd1bf62ff530e84296cba"]
      - values: {"n":3,"k":5}
        answers: ["sha256:ed76dcf94b938aeddc544e2bef927fe52831b7c030a4d72a43d053b37d1e9c68","sha256:f7374970f04525377d8ef16b04bf8dd4a733c2b335e1154dd4729401039b1d3f","sha256:f40e37cdce5956c751a1782b9fce4ecd4ce8d6752503c08dd47d0d1d3225745b"]
      - values: {"n":26,"k":2}
        answers: ["sha256:1c349de5a3bc4964bbfd37ce48422f91feea2688eaa474e525dd567600db7d74","sha256:9c9f8ce2f126f9cf640d84dd591303a59a5fbde7a99ccf079650cfcae1e955c3","sha256:ce8762b398138c8d98a1d03114eb5fa454909f91cf50407dfe786bcccf30b509"]
      - values: {"n":5,"k":4}
        answers: ["sha256:3775ea48a4b7a00d30a36abd5505b060772866463a848c47fa7f04b1f3d70825","sha256:307edd571706e2f37f8d1c24e979b897fe2d163f931121495cd80a7ee076fd85","sha256:0fb56fdd8f1ce62d0b0919e2333c380a999ec1d9026c58af1da6c66d18e2d5ce"]
      - values: {"n":4,"k":6}
        answers: ["sha256:9bec325c6497efe955c625dc45bba544552128bd49db90ba72c324e01ef6a494","sha256:714486bb47b441e414619035c3044c3a79355f94ab8beec4a270267512e32cd6","sha256:c7f6ef71ec8f2aed0e8e681248104e67cfb6960b3bccf8c7a178d68adce509e2"]
  - id: combinaciones
    tier: 1
    type: numero
    sig: 12
    prompt: |
      ¿De cuántas formas se pueden elegir ${{k}}$ personas de un grupo de ${{n}}$ para formar un equipo (sin cargos, el orden no importa)?
    variants:
      - values: {"n":8,"k":3}
        answers: ["sha256:0cbfbf8cef8a245d798a2b09200ae45ba31e68569017365270b70e57b57231fc","sha256:2006c834c2dd85f3bd83cd0933554ed005141530820889b847b44870c894b669","sha256:112f60d0e6782479aa80805fccf7cd344501ffd148c3b4895a868d1bf32efb3e"]
      - values: {"n":12,"k":4}
        answers: ["sha256:91f03ad7f7713de481e6e27be73a5150c5715a6c8872ce6620dbd6b5683d2496","sha256:86e4e21689da2fc509c15880ad4466b22a32b5a96a576ad61e04f1a9d7223053","sha256:f5ea1c0344a517481ecb18c5bfd12741601098576ce469328172bd7e3571e833"]
      - values: {"n":6,"k":2}
        answers: ["sha256:5495b62a80d3fa5f48441d022fbd14da4d5c931b7b34b1d50fbff1068e30291e","sha256:ea8996183e222910b8eecf6b58556afda0c6ac4c531c5ae29c3f469b4dabab2e","sha256:bc7815440ad1b884f6eae2f54016a09c6ba73279c09fda4ad941c5cf57fb46c3"]
      - values: {"n":15,"k":5}
        answers: ["sha256:276a9159d808cbcd4e1d1402661c7bafda8d7bafeb1b8b42f487e6a22a0d6cdd","sha256:00d284b62afa7e557566a2e29f0e5b3d7d38d5d01c42c10c6e14bfc0647f3d15","sha256:1a22eaf74b64be0f5fddf32b25a88807603534188fc4848b63b1a626a833006f"]
      - values: {"n":20,"k":2}
        answers: ["sha256:670f630a8e7fe61bbdec88a4731c17fd826605d88767452990d4ff995bbc0241","sha256:7bab756b7e3ee8a31df53bef0dbbbfaad40483e125b9113e14a41cc7381cca41","sha256:0494a256f01c84ff972ea1c00b84d7e5ebd6c5da77a308578effab87c7d68343"]
      - values: {"n":9,"k":6}
        answers: ["sha256:a4da2798c562c9674c20169c669e3b0138dd3aa9e9d353b2b8175972f5197e9f","sha256:b83cad9a1c9e95213840aae0d91f38669e1875a4e3add99fa3f3d12215034ae1","sha256:01e7c6cedeb4faa0fa8544e562e811af1b6d893b143a3f758733612760b6af1d"]
  - id: anagramas
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Cuántas ordenaciones distintas de las letras de la palabra {{w}} hay (contando las que no tienen sentido)?
    variants:
      - values: {"w":"PAPEL"}
        answers: ["sha256:ab0aed1924bd0447252733421a2800d4feef69d56e938201dd09e295cefd745b","sha256:ce86fb4c24c5cbfca18bf98060d46359ca4f9a0e4a39be83790ab400355324bb","sha256:25fab3c8669fd2d6744380cd318806bae1d10a0f2f4f5d155889a93233508e70"]
      - values: {"w":"BANANA"}
        answers: ["sha256:cf4c92c9bcdfaf8354db48d112b3c647da1740cf265d4295479123f5a830386a","sha256:740305adb27ead6dab18eb076aead0d76fd06575d65eb43f59683864af896ddd","sha256:32d891d36d18520de2db12ab3d388b0dc3a5e0aa98c966b224288b6dc2ea60a8"]
      - values: {"w":"MAMA"}
        answers: ["sha256:ec752d7023640eac3fe0988329a8336a4be8f0b2dafcb3fcb8fe317be29d6e01","sha256:e17aadce7ed17f33f709fe418513fadfadb44cabd421cb3719abd2a3cce40076","sha256:7338890812caa415dcbf8c7491e91318941da09dd1da7a53049351b311615546"]
      - values: {"w":"PERRO"}
        answers: ["sha256:f8b89915043041bf890c01012418039d482b379aacd9824b7c8d88eb434e2503","sha256:9b3107c836b98978cb54d53e163a54a180c43fb5471c5bcdf01a00ad586a74fc","sha256:176900d592494bd4b555a15be28047774315b7262776b0a87c05eaec5c773259"]
      - values: {"w":"ARROZ"}
        answers: ["sha256:29fd5a9ed8d5440bd8e8bab8d590efdfe5439eb12a18cf2b2a9876f8677bca29","sha256:4534d9ba4a504ffabc692c60077c23bd4b6f32a25b76b6ad35a33a382927084f","sha256:ad4af0198f2124927ce1b43c9bc8dc95e77ba05b93b24d2db58c558396c8b606"]
      - values: {"w":"TOMATE"}
        answers: ["sha256:595fa5eb6d23845caeb72fb976f0b597d9b6069af3e7691c1a1237660b769441","sha256:725265bda1f68a5e306196d42a217f729bcc0526d9c71ffdf94dbe15335abde5","sha256:b3ea9177abd2cba5358eb684f3fa1b3107d2ebb3d5673dd7c7960d4dd42f4049"]
  - id: permutaciones-circulares
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿De cuántas formas se pueden sentar ${{n}}$ personas alrededor de una mesa redonda, si solo importa quién tiene a su izquierda y a su
      derecha cada una (dos colocaciones que se diferencian en un giro son la misma)?
    variants:
      - values: {"n":5}
        answers: ["sha256:4be7ca1cac87d68a44a8c674f3979bc68cc70da413b7c46c3c202edd28e82463","sha256:d5ee82d2f816d4a53ac4fcf226bb38e43de81df3b64246a6f9495f4b51f0a1b5","sha256:3d302d255645221f5efa96d23dfa5d5cd125ab14578f4013b918e1850bc2ed9f"]
      - values: {"n":8}
        answers: ["sha256:5d3fea761ac689fac071a03141f1f30c89c39d834eba4fb6312e0debf1c52334","sha256:4d00896e2621d827ef6bcd1d432e746d72493ad6844cb609a853b89eb79eed17","sha256:6c9e8e7d032398b0cfa95e5554a161e9568879aee9c0c1bf8aa25fd4a15940ca"]
      - values: {"n":4}
        answers: ["sha256:dd390df20de56d1e4684e5ceb0503e5e79d79e8a63db9921cecdfc56d23d9b32","sha256:2b93d935a8063d860a452cc19a492f234cea873b34ff3f082b3680ec0b213c07","sha256:7e3a191875adfba5b385409c1796ede19f9359dc5c83bf8cb29dd2c664a3d80b"]
      - values: {"n":7}
        answers: ["sha256:020e3fab156f762c7d51d2c8a60dde8b169c1a75df5c5bf1f7916a81a11ef54d","sha256:bf44bad180cb80bd591ab5da53279ca60885d6bdf316a43c15780e87eb7d7af3","sha256:cbdd7620ec073ea00dea698b13fa3531c809ff5854f790dd5456d40b47035fbc"]
      - values: {"n":10}
        answers: ["sha256:3c4185e1f381fab0e7db819432d594eb51f7fe32b814afa777feaead1b35031e","sha256:388545ea343305cd060b8a79f2853198d133c67835535ac311e40e32a8bb4c3f","sha256:045bdc054f382efbbdf5e61fdf39decbab4a27124505dc316767bca9c1020aa7"]
      - values: {"n":3}
        answers: ["sha256:e70c76a2f6d78b06bcf396cd537feb00976afcf967eab5f4be28b7ad8f4330ea","sha256:34868d97441e8d45eee701a92710486c140772f7159cbdd443bd04612af244e1","sha256:0487178578b872378a2844ae4b7085c61cd1e396a89ce8e7862cd400f1857915"]
  - id: combinaciones-con-repeticion
    tier: 3
    type: numero
    sig: 12
    prompt: |
      En una heladería hay ${{n}}$ sabores. ¿Cuántas copas distintas de ${{k}}$ bolas se pueden pedir, si se pueden repetir sabores y no importa
      el orden de las bolas?
    variants:
      - values: {"n":3,"k":5}
        answers: ["sha256:a8444550a1b48ab47d596a372f9a714bf41e78ce9b6787b8d92cb3594f5eda1f","sha256:a95e3f9f52f49ca961f0b5df47010da5c1715364ddb0dd68d2da1ec127f1e9de","sha256:0f58f0db934477f8b52417603cad2d8bc6f8e684451e9c46bc3f0bc9bbc7d898"]
      - values: {"n":4,"k":3}
        answers: ["sha256:edbca0e59611befbfcec47b7e18068b6251dfbae6da3dd093b257238c5a6187d","sha256:5ca709340c085a13110eadb8be4519e7785a216fbb1080941f3272cc365b5c9f","sha256:a70a2b18d70e695bc6b9e3bb8cbbcc62d08ed0a845a2846009ec36bd06632e21"]
      - values: {"n":5,"k":2}
        answers: ["sha256:cc73bcd5d55876257e0de8cac73b6c3a7c4a22794b17e79abcfab2d271c322af","sha256:89e5e2da032313e8183aa0d4a7bdbe08e264965f815e183902cce39dbd881d31","sha256:ad1db411fb18f55ff73779cbc94916b86e9cda022723a485f846ca47940a5ba4"]
      - values: {"n":6,"k":4}
        answers: ["sha256:3e461b0a19bed8a400d4b8d6b6628bea112110ba0530285ba707b3f94a086d25","sha256:4b08f986ccdcb5389c3e73226edfd39393ce6bc04fa2ebd4e5b7e3582810ffba","sha256:8a6640c6d165d18ba5129811a81b8019ff08aad588fb2c9e7e43720bd93c99fd"]
      - values: {"n":2,"k":9}
        answers: ["sha256:32adc6c93c54c2cc391528d65db3eb0d67d2f68140b72f30c0240604c84be3e2","sha256:5f81169a424eaea315911351d5f27e96017e069b7a88ce1efddac7859c32a44b","sha256:21169819517d72048ee6a6c2cb5f53b119bd55757538ca102219a96cdabf0ef3"]
      - values: {"n":10,"k":3}
        answers: ["sha256:7f1d9701bc427b8aed1504d3c2f98c83963c2defdd3b1d368555a72290ebe941","sha256:a9ceb691433e2711b4bd6a41498e6fc1e461c8c2019a203dc798bfbde5c66b1c","sha256:9ae76ab74da7c1ab71a05b4452d2ada3ffb1f13bee142ebd850f4a28a7fab315"]
  - id: coeficiente-del-binomio
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Cuál es el coeficiente de $x^{{{k}}}$ en el desarrollo de $({{base}})^{{{n}}}$?
    variants:
      - values: {"base":"2x + 1","n":5,"k":3}
        answers: ["sha256:e74823ab21c6cd215adeb772f2bbff93c5cf507c403693571a5439a67b67f8b8","sha256:b7fb1e53c5282ce558fa8840b0032938d89eeefe53ba55d5a9667d2c7e78ef04","sha256:eb362664b22c93e4031d58c69c10d9296f4f16344378ae2754c09f88b6a8ade0"]
      - values: {"base":"x - 2","n":6,"k":2}
        answers: ["sha256:a652c8f3edea456c13eb5208649bc6f0faf74fb83cbb4dc6d4b42585269c0bcf","sha256:37d8aa97b2b1b9bb4af45d1a0f8fb7c82bfe9dd43549a28d5c498b669024f96d","sha256:1c4c9f3170c1153d4681c8a3b32ad56892c88528d8802af0211faa8a27ec82f8"]
      - values: {"base":"3x + 1","n":4,"k":4}
        answers: ["sha256:2968015a78c9c976e1d67d8dfc92d82338777732bf2c3a43349f648e58d23904","sha256:38b0199cb52f039e286f45bb221207a76de2cdf9f6d6bab42036763ceeef89d1","sha256:8efa8768c4e962f134e077ad4cbc37404369f217fe3dd0ba182c38af1db0070f"]
      - values: {"base":"x + 3","n":7,"k":5}
        answers: ["sha256:d8f62e85e93fef418b5fccdf38f4aabf1afab73592d8da6e8752287cbf665e2e","sha256:ebb5cb69ee33ae6524258cfe6155c8525d776fbe475194fa9baca936395448cc","sha256:05d75ac18ac52876da61dfbd2941daa40dad1ad254148fc9d44f043d26e4cfec"]
      - values: {"base":"2x - 1","n":5,"k":1}
        answers: ["sha256:0db55c33b2ac437d019548d6ed6b141106fd98b4240b97398e8c9c1460b91c4c","sha256:89e068c38e17873b8167d1eaca694c33c28b47946434088d3cf0368dc0327a28","sha256:155698752b968c7cdebfc0ebb731681f3a279504eaf6746747ccd739ecb7613b"]
      - values: {"base":"x + 1","n":10,"k":6}
        answers: ["sha256:9d590d8a144eba58b289fe949c96255473dd74feed3569c5fa129714140ee54e","sha256:f631f2167d0cb2ca831ea23ab6aacbe5f54d861939b0fef062bdba53b1acbc54","sha256:ef9a2e1db635b1c81e75e121cbced91778cc76ffdfff768a8124b16fdc38b0a6"]
  - id: dos-personas-juntas
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿De cuántas formas se pueden poner en fila ${{n}}$ personas si dos de ellas tienen que ir juntas (una al lado de la otra)?
    variants:
      - values: {"n":5}
        answers: ["sha256:0483a382a432dc457df504a24780e7bf0589ca9904632a35b473483d3fd92fde","sha256:58d87b80a0c47f43988d3838d5f4d099f92301d5c8ce22a3d6a4fb529e762397","sha256:301c4589c2d66909b076f0e8356e111e8f7dba53c4216841a5516babd4fda657"]
      - values: {"n":6}
        answers: ["sha256:06224119bfff0ddc761608f0f207b1e3104b84c60a1c500c03351909e736bed4","sha256:fb77418715ff22374c9b38cef8b06498083ad62ecae3e1779e7c0e75ed27567e","sha256:62ab9b0e8ff4fd8af413f9667d53c44fd0fe8ef9abe9170f4d41986f0f083c5b"]
      - values: {"n":4}
        answers: ["sha256:b9f9a09f4e9bf5875c18b5f40f3e989bad4e9be9b4bf4390defa3c8ea8132517","sha256:1a16c4fbb2c0e4a46f0c5cf3f549710059beb4159d2a51baaa95c1d0b85d2467","sha256:0aea142b87fe69a1bf2fa4434966a94c293f0490107c9d531edbbe19cb418991"]
      - values: {"n":8}
        answers: ["sha256:a46919b345e8fddfb23a10f4ec1fe08d4899bff1782ce869cbd3ac19add2fc74","sha256:72f0e0d530279519592c140000a569bfbe311b93107a418077f5b713faa0127c","sha256:e60176a4939112310e2804381634ff916b8e657781655ccd9d201a8478173715"]
      - values: {"n":7}
        answers: ["sha256:94b744afae519b7be052d76fa71141b488858d26b6787916c831455c81793657","sha256:957859db6ad83dcb7ab92e276dd233c40cc3d432adde469bc2fbf6c74343fc92","sha256:99ca01ffa58f135a1f5151bf91f0b2789120f947f1ce6fa1a7b1ca63d7f74940"]
      - values: {"n":3}
        answers: ["sha256:dc7ae614a13558d137ca215e9d266df50fd6bdf3d5c872ace2766fa3d27eaf89","sha256:e20cde7c7a7a337625650f602d056d5d8df707221db2870a4ba80328d94a564d","sha256:deaac6cab333c069ec9781360c4954c023f269d8c7ea88c8a65ca869213c178c"]
  - id: al-menos-una
    tier: 3
    type: numero
    sig: 12
    prompt: |
      En un grupo hay ${{h}}$ hombres y ${{m}}$ mujeres. ¿Cuántos comités de ${{k}}$ personas tienen al menos una mujer? (Pista: cuenta los que
      no tienen ninguna.)
    variants:
      - values: {"h":6,"m":4,"k":3}
        answers: ["sha256:7d9f2d429300a3e636441af40ba085d5cccbf0bcc146166c4fbfa85023bf7b83","sha256:948c11024fc74d2e2d5a7f22e3cf230dd979390c79152fb69f6b0204fb216bc9","sha256:b4784124ca2fb1686777cd22e9e22f7d83e4d83e4da6610397eb82f8e451e39b"]
      - values: {"h":5,"m":5,"k":4}
        answers: ["sha256:80ea2ed95525cfa31464c7bacf567aa54f00174e3166057191ce64c87944f38c","sha256:d5ce80bf5fc99a83b5032dc99d82f502f0fe7b4b7f00191b0f61df95718cf6d6","sha256:c6972ffa97a7aeb48b4e94373bf60512b9af7a5653b7bbd945c851e2ed7bfe63"]
      - values: {"h":8,"m":2,"k":3}
        answers: ["sha256:e39b167dde83c34294d5e8751fa0a6c291bc8a189d68039b6c0eaa22a6dc032a","sha256:92b6cee847f4437bffaab4e5da9e5d37ae16388f95a55e12d4aec2a8b0de402b","sha256:1b285553cb14221c80ecc8b1ea7ff569b7b3749a03d8879f375ba57c8208f4a1"]
      - values: {"h":7,"m":3,"k":2}
        answers: ["sha256:f136dd4418db6b3ffe457b768323e7fb92838c33833bbc3f14efc1403f65c711","sha256:035b1bfcda1114a4cfda308807f9ac34ce3c15a8d16bec4c09530050432802cd","sha256:c0f77f8b5b2acc9927b8d0f7c27735022a3eaff760dbdb5fe3564dfde186d41a"]
      - values: {"h":4,"m":6,"k":5}
        answers: ["sha256:e0594d5e197e174e5a093be071ab080e79864829f213f070318d7f2691e7fb91","sha256:fef5cceff72869860a2880c492b8022a4381da1022e9bcbe3aeeec1feef2a428","sha256:1c34669fefa9ce238d12215519a928e2b69a6aa561e9189b3cde011e9793a5ba"]
      - values: {"h":10,"m":3,"k":4}
        answers: ["sha256:f75efc241417ac7e889fa73645bdc43cdbbf340b1fa117efeeddedb0121e7368","sha256:83367fefb632470fd484bbab7d6d5997e350d9343a488fcf2d6512077e9d00ea","sha256:81f83aed2c66d1b01c12f391b9e226462ffbf48bb49d5bcda442108076a42206"]
  - id: caminos-en-cuadricula
    tier: 2
    type: numero
    sig: 12
    prompt: |
      En una cuadrícula, ¿cuántos caminos distintos van desde $(0, 0)$ hasta $({{a}}, {{b}})$ dando pasos de una unidad solo hacia la derecha o
      hacia arriba?
    variants:
      - values: {"a":3,"b":4}
        answers: ["sha256:4bd8ea6b5bdfaa561c46233b9289d878eb2852ccf58d913f25094c36612e6989","sha256:569ec8cd75db6e3abea81eaab5bbfd28baa796b4b37c92198e6a9a36289ca68e","sha256:a6f56ee9328d6926a3f5c4d98af4fe40389d204159b59863c7d817c7a81e84bf"]
      - values: {"a":5,"b":2}
        answers: ["sha256:39b741d8a2575af1f81bc0fe87b2e53acb433cf09ac5dca25c83f9e0d2de74fc","sha256:c58b94196f4b97011588f0c555caf89a9a590c5e37539615f242dbdb65d9e0f4","sha256:6e12ede814a8da2b660fefe3db18dcb97c3299012d4dbf16cd892a4f6a710353"]
      - values: {"a":6,"b":6}
        answers: ["sha256:7dd0e8478bb6a62b0d3f01db0c8fb8c2788f09fe094d91b5d891e5239d5c1838","sha256:190aedc783256affd867c4e0058a52fce89373b507866981e2487a66fd4de226","sha256:9afa96e3eb0f2bbbf57056ca013374aad4cf8848c02028a7d0950c2b95f27239"]
      - values: {"a":4,"b":4}
        answers: ["sha256:70a448b64a280e4d53e3b7b1e53fcc58b4fe39abab39f90a263d024d0d87653a","sha256:4eb6155ce94551636a479a166454758ac6657e0f3b49074756222483d2a9acb8","sha256:8dd6358cb9c0d2981760812c7df123985fb92639d44a657656661aff2d2c8896"]
      - values: {"a":7,"b":4}
        answers: ["sha256:6a12ac38e3cf47858219e1bfa481242ed2eef7cb85a2f61fda858da917ab7d83","sha256:7dbce1f85de20cd7f27d7a40e796fbca0628675289cc8e371cd3134a516d2b36","sha256:0f92d7e5c8c751cc71fa987a561ea95b4756b3caa730b323ddd6c05980e4f2ea"]
      - values: {"a":2,"b":9}
        answers: ["sha256:d0cb522393715b1abb8273f78730d3a82e3940c73667136aff3a7ef44ce13af0","sha256:a3b528b4883fec63b2372d04f94462d795cea4562deff1e4698496c8af5dc8e9","sha256:33f89690e81d848d45ee0f058ab74127c2a4099cdb28e5ce1d4249f6dda08d46"]
  - id: apretones-de-manos
    tier: 1
    type: numero
    sig: 12
    prompt: |
      En una reunión de ${{n}}$ personas, cada una da la mano una vez a cada una de las demás. ¿Cuántos apretones de manos hay en total?
    variants:
      - values: {"n":12}
        answers: ["sha256:565f2f7bb80aab0c0d5eb16e1fea37242f99f26cb4096533531e89136de2689f","sha256:d3e319b59bf959f00861b7fc2e51eed5735f6e4a3318a6ed1a9a344aeb8a4b62","sha256:e95c7e42475de2436984dff49d46ab9b2ce472e58e2e80efe53bd8110a6e8d62"]
      - values: {"n":20}
        answers: ["sha256:56709f478988df488d68facfce4390bd8debafc4c5f3a1ebb8335f6d42a38c60","sha256:b46e372cec7c213ff4daa74cf2c8910e6a8ab951417f1cc8d822701b134c0835","sha256:8e14757e5c973028005aa6e30741fc604c604bf63a39c616587d5804a089943b"]
      - values: {"n":7}
        answers: ["sha256:1da0b50000d117d7292b29592c38a9a4bf41f63f26ce51d535ece4e304ae8a0b","sha256:27414d35bd518134dc542bf898fbc8d0247231b3064102827b3cb24325bf7308","sha256:4bfbe8a7ae06256e400d1665beed2926eff90c2d4d9ceea371d3333758e4aa55"]
      - values: {"n":30}
        answers: ["sha256:3243612feabced95bd5a94286b6e5ffb6c4079cd3468c704e50e0a904f4bbbf4","sha256:46d3a143d34e98ded03d5495b3e06b9d188dc8cb6957ec4cfcb39035ecdb2219","sha256:99caa882949dde0e3dcecb499f53213937d03e143ee0ad78e90c9a166f25fd38"]
      - values: {"n":9}
        answers: ["sha256:12c5efe53197182051c937b4915321e6446801730a324f8280cf5d1af8b33ce4","sha256:580e5682994931d3cce692c7ec23d7558729877d3ab379f727e6541774281d44","sha256:ff7180548868697c635f21a95e053184540323a5fc2a81dfe1943e71541da9a0"]
      - values: {"n":18}
        answers: ["sha256:7370ccfbb8b5551b0ab9207503b9fca85d86e9706582897bfd3b8905dab1139b","sha256:75bae71a101b6cfd13298542c1d4c97f3bbfd5089a6cc9167c3db723096a36d1","sha256:ec3ae2f791a2db1c6effa996b55dac84d1701e24edf0c048247f60851959b028"]
  - id: elegir-el-modelo
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica con un ejemplo cada una de las preguntas que deciden el modelo de recuento: ¿se usan todos los elementos?,
      ¿importa el orden?, ¿se pueden repetir? (b) Justifica por qué $\binom{n}{k} = \frac{V_{n,k}}{k!}$. (c) Demuestra la propiedad $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$
      contando de dos maneras los grupos de $k$ personas de un grupo de $n$ en el que está Ana.
    sealed: "gz64:H4sIAAAAAAACCpVUwW7TQBD9lYm1Bydyooa2UFniUAEHEAKkCi4Y0GQ9CdvYs2Z3Xamy/DF8QE+9cc2PobHjOmklJG7W2PPevDdv3ETeFnUwlqM0ms1inM5m8NHlxOhAnSsozMpZD8RQMwL5gBzI7e4wBU9Qe2QINrc+AVNW1gUEKsAKQALeMDiqKBhtdvecQkWurANqY5l8Aup8ohbwpqCNcVDZ3FjICdSpAuLgCNSFSoEteMr4P5lu0JmR5wKyTOc2wIvh4blawGeGT28/dJRnCrRZO/TpE3C4FaGOKhPoGBi05YwPaBNQy5PvZ6MmkZJTQRvMre+Ilie9pCcsbOAn3h6L0LZcGR5lZNnKsC2b5UnbnLZqkXHGs1m8kp29whxh4+qq93CrgAoqiYP1ED8A7e55KnKqmnLqmdH1DRMFJTI59Ancgha4/n3XBeS7AOzlSyU3PhgOuIBLv7tLRArv/pTkZIKMD40i/zA88HbYwXaihConX9E1cm6To69eQpatHermy4+Gk23bNttJO1Z5IoUsS2KGOWynk9EQLYa8t773ww+GeILc3BhxmxgK6+FXTbLEYIiJAeGSEWJZg7ygfofynQ1yA2oLc1gO4SzQg+K+4vZ34dNxSTxfts12vmzVFG4HtozZQlx0YN1AVJhNN88AaYMbgZ/AtWq6gKu6FLek3a72s3eXkR76Jyn0UCA42hQoMYTgzO43b+qiy8gn9BqLRZRErl45o6P0axNpZwI5Y6M0eo1QM9A1lVVhQVvnSIeu89EZH2461ra7mON7FAcehfm69sGsje6UiPDgyEPlaFNzQC9jVbWkN0qftcnRYO+GVlEnG/V9Qvt/hgQ51gfXgH1tCLPQT/8Ff0UVOuw2ts+PaJJo9Lr6p73zMsJ6d+/KuvP4wNQR/lv7FyoWtTpmBQAA"
  - id: r-orden-importa
    tier: 1
    type: opcion
    review: true
    prompt: |
      Para elegir presidente y secretario de entre $15$ socios, ¿qué se usa?
    options:
      - |
        Combinaciones
      - |
        Variaciones
      - |
        No se puede contar
      - |
        Permutaciones con repetición
    answers: ["sha256:8120427b462878752d1b5715e28a9c904fc0b19684ba498e5b1bb599373ea67c"]
  - id: r-cero-factorial
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $0!$ por convenio?
    answers: ["sha256:504455d0ba63c28e7c031e416c6159035a65431b56d5a64020b199292aff095c","sha256:fb3f0bc3132e4c1e08cc799f75a2a67715e9ce06e8fd2e7c1e6a10c03906b0a4","sha256:393fcccd5c1f59b66a2e2c9381bdc29b6dda595c26eb4f5501c92f0421f6778e"]
  - id: r-simetria-combinatorio
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué número combinatorio es igual a $\binom{15}{12}$?
    options:
      - |
        $\binom{15}{3}$
      - |
        $\binom{12}{3}$
      - |
        $\binom{15}{12}$ y $\binom{15}{3}$ son iguales
      - |
        $15 \cdot 3$
    answers: ["sha256:730e5a2678efc8ea299d14dc8eceef7acee5fd32828e86acb80c2073fdb34bef"]
  - id: r-suma-fila
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto suman todos los números de la fila $n = 6$ del triángulo de Pascal, $\binom60 + \binom61 + \dots + \binom66$?
    answers: ["sha256:50a35962aa63bc69aa2402c7b51578590c0b81c59ee51576d6bb7be38baadc19","sha256:fe8955981e1cab13049e553c319ba2dba5c2fbdb065bc9bfd0db57b9e8fea10c","sha256:78a54ebce9c4db2843da6fe5ecd2dade84df88a074b11f804835ecbe985737c2"]
  - id: r-matriculas
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuántas matrículas de $4$ cifras seguidas de $3$ letras se pueden formar con $10$ cifras y $21$ letras?
    options:
      - |
        $10 + 21$
      - |
        $10^3 + 21^4$
      - |
        $4! \cdot 3!$
      - |
        $10^4 \cdot 21^3$
    answers: ["sha256:de10cea34f8e199ad4f73969f024185204eb56387b3311a09587462c545c8d83"]
  - id: r-circular
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuántas formas hay de sentar $n$ personas en una mesa redonda (sin distinguir giros)?
    options:
      - |
        $(n - 1)!$
      - |
        $n!$
      - |
        $n^n$
      - |
        $\binom n2$
    answers: ["sha256:3b3e526300b612af7ca6ab3a1f638d147645956c6d42cf53ca60c58bb795a694"]
  - id: r-repeticion-letras
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas ordenaciones distintas tienen las letras de la palabra OSO?
    answers: ["sha256:398ba55fddf17c293d8cd14fe6164848c50616f607e3dd68cb617bc48521eff0","sha256:f0d58298f8fa96e06ede9af9e660b4890ffb0506026dba50684e61688ee288e2","sha256:679bf4abd2ff9e4fe6ff676d56fcafa2521830ecca1b9e71065499864f63fb82"]
---

# Combinatoria: principio del producto, diagramas de árbol, permutaciones, variaciones, combinaciones, números combinatorios y binomio de Newton

¿Cuántas contraseñas de $8$ caracteres hay? ¿Cuántas combinaciones de la lotería primitiva? ¿De cuántas formas se puede formar un equipo?
Son preguntas de **contar**, pero sin poder hacer una lista: los números son enormes. La combinatoria es el arte de contar sin
enumerar, con unas pocas ideas que lo resuelven casi todo. Es imprescindible para medir el azar (contando casos), en informática (cuántas
operaciones hace un algoritmo, cuánto aguanta una contraseña) y en el álgebra (el binomio de Newton).

## Objetivos

Al terminar sabrás:

1. Contar con el principio del producto y con diagramas de árbol.
2. Distinguir y calcular permutaciones, variaciones y combinaciones, con y sin repetición.
3. Usar los números combinatorios, sus propiedades y el triángulo de Pascal.
4. Desarrollar potencias de un binomio con la fórmula de Newton.
5. Resolver problemas con condiciones (al menos uno, elementos juntos, mesas redondas, caminos).

## Qué debes dominar antes

[[mat-potencias-raices]] (potencias), [[mat-resolucion-problemas]] (organizar casos, empezar por casos pequeños) y
[[mat-expresiones-algebraicas]] (productos notables, para el binomio).

> [!question] Test de entrada
> 1. ¿Cuánto es $2^{10}$?
> 2. Desarrolla $(a + b)^2$.
> 3. ¿Cuántos números de dos cifras hay?
>
> Respuestas: $1\,024$; $a^2 + 2ab + b^2$; $90$.

## 1. Para qué sirve

- **El azar**: la regla de Laplace necesita contar casos favorables y posibles ([[mat-probabilidad-elemental]]).
- **Seguridad informática**: la robustez de una contraseña o de una clave es el número de posibilidades que hay que probar
  ([[sec-criptografia]]).
- **Algoritmos**: cuántos casos debe examinar un programa (ordenaciones, subconjuntos) y por qué algunos problemas son intratables.
- **Organización**: horarios, torneos, turnos, menús, códigos.

## 2. El principio del producto y los diagramas de árbol

> [!practico]
> Un menú tiene $3$ primeros, $4$ segundos y $2$ postres. Para cada primero hay $4$ segundos posibles ($3 \cdot 4 = 12$ parejas) y para cada pareja, $2$
> postres: $3 \cdot 4 \cdot 2 = 24$ menús. Si lo dibujas como un árbol (una rama por cada opción en cada paso), el número de hojas es el producto.

**Principio del producto**: si una tarea se hace en pasos sucesivos y el paso $i$ tiene $n_i$ opciones (sea cual sea la elección anterior), el
número total de formas es $n_1 \cdot n_2 \cdots n_k$. **Principio de la suma**: si hay que elegir entre opciones que no se solapan, se suman. Un
**diagrama de árbol** dibuja todas las posibilidades y sirve para comprobar recuentos pequeños.

## 3. Permutaciones y variaciones

> [!practico]
> Ordenar $5$ libros: para el primer hueco hay $5$ candidatos, para el segundo quedan $4$, luego $3$, $2$ y $1$: $5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120$. Si solo se
> eligen los $3$ primeros puestos de una carrera de $8$, el producto se para tras $3$ factores: $8 \cdot 7 \cdot 6 = 336$.

- **Factorial**: $n! = n \cdot (n - 1) \cdots 2 \cdot 1$, con $0! = 1$.
- **Permutaciones** (ordenar **todos** los elementos, sin repetición): $P_n = n!$.
- **Variaciones sin repetición** (elegir $k$ de $n$ **en orden**, sin repetir): $V_{n,k} = n(n - 1)\cdots(n - k + 1) = \dfrac{n!}{(n - k)!}$.
- **Variaciones con repetición** (en orden, pudiendo repetir): $VR_{n,k} = n^k$. *Ejemplo:* un PIN de $4$ cifras: $10^4 = 10\,000$.

## 4. Combinaciones y números combinatorios

> [!practico]
> Elegir $3$ delegados de una clase de $10$ es distinto de elegir presidente, vicepresidente y secretario: en los delegados no hay orden. Cada
> grupo de $3$ personas da $3! = 6$ ordenaciones, así que hay $6$ veces menos grupos que ordenaciones: $\frac{10 \cdot 9 \cdot 8}{6} = 120$.

**Combinaciones** (elegir $k$ de $n$, **sin orden** y sin repetición):
$$
C_{n,k} = \binom{n}{k} = \frac{n!}{k!\,(n - k)!} .
$$
**Propiedades**: $\binom n0 = \binom nn = 1$; $\binom nk = \binom{n}{n - k}$ (elegir los que entran es elegir los que quedan fuera);
$\binom nk = \binom{n-1}{k-1} + \binom{n-1}{k}$ (regla de Pascal); $\sum_{k=0}^n \binom nk = 2^n$ (número de subconjuntos de un conjunto de $n$ elementos).

**Triángulo de Pascal** (o de Tartaglia): cada número es la suma de los dos de encima; la fila $n$ contiene $\binom n0, \dots, \binom nn$.

| $n$ | |
| ---: | :---: |
| $0$ | $1$ |
| $1$ | $1 \quad 1$ |
| $2$ | $1 \quad 2 \quad 1$ |
| $3$ | $1 \quad 3 \quad 3 \quad 1$ |
| $4$ | $1 \quad 4 \quad 6 \quad 4 \quad 1$ |
| $5$ | $1 \quad 5 \quad 10 \quad 10 \quad 5 \quad 1$ |

## 5. Recuentos con repetición y otras situaciones

- **Permutaciones con repetición** (ordenar elementos con repeticiones): $\dfrac{n!}{a!\,b!\cdots}$, si un elemento aparece $a$ veces, otro $b$… *Ejemplo:* anagramas de
  CASA: $\frac{4!}{2!} = 12$.
- **Permutaciones circulares** ($n$ personas en una mesa redonda, sin distinguir giros): $(n - 1)!$; se fija a una persona y se ordenan las demás.
  Con $6$ personas, $120$.
- **Combinaciones con repetición** (elegir $k$ objetos de $n$ tipos, sin orden y pudiendo repetir): $\binom{n + k - 1}{k}$.
- **Elementos que van juntos**: se pegan en un bloque, se ordenan los bloques y luego el interior del bloque.
- **«Al menos uno»**: se cuentan todos y se restan los que no tienen ninguno.
- **Caminos en una cuadrícula** de $(0, 0)$ a $(a, b)$ con pasos a la derecha o arriba: hay que elegir cuáles de los $a + b$ pasos son a la derecha:
  $\binom{a + b}{a}$.

**Cómo decidir el modelo**: ¿entran todos? (sí: permutaciones); ¿importa el orden? (sí: variaciones; no: combinaciones); ¿se repiten? (con o sin
repetición). Ante la duda, hacer un ejemplo pequeño y contarlo a mano.

## 6. El binomio de Newton

> [!practico]
> Al desarrollar $(a + b)^3 = (a + b)(a + b)(a + b)$, cada término sale de elegir de cada paréntesis una $a$ o una $b$. El término $a^2 b$ aparece tantas
> veces como formas hay de elegir en qué paréntesis se toma la $b$: $\binom31 = 3$. Por eso los coeficientes son los del triángulo de Pascal.

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k} = \binom n0 a^n + \binom n1 a^{n-1} b + \dots + \binom nn b^n .
$$
*Ejemplo:* $(x + 1)^4 = x^4 + 4x^3 + 6x^2 + 4x + 1$. Con signos o coeficientes, se sustituye $a$ y $b$ con sus paréntesis: en $(2x - 3)^n$ los términos
alternan de signo.

> [!formal] Con rigor: por qué $\binom nk = \frac{n!}{k!(n-k)!}$ y la regla de Pascal
> Las variaciones $V_{n,k}$ cuentan selecciones ordenadas; cada selección sin orden (combinación) aparece en $k!$ órdenes distintos, así que
> $V_{n,k} = \binom nk \cdot k!$ y se despeja la fórmula. Para Pascal, se fija un elemento $A$: los grupos de $k$ que contienen a $A$ son $\binom{n-1}{k-1}$ y los que no,
> $\binom{n-1}{k}$; juntos son todos. Es un ejemplo de **doble recuento**: contar lo mismo de dos maneras da una igualdad
> ([[mat-matematica-discreta]]). $\blacksquare$

## 7. Errores típicos

- Usar variaciones cuando el orden no importa (o combinaciones cuando sí).
- Olvidar dividir por las repeticiones en los anagramas.
- Sumar donde hay que multiplicar (pasos sucesivos) o multiplicar donde hay que sumar (casos excluyentes).
- En «al menos uno», sumar casos a mano y contar alguno dos veces.
- En las mesas redondas, contar como distintas las colocaciones que solo se diferencian en un giro.
- Olvidar que $0! = 1$.

## 8. Resumen

- Principio del producto; diagramas de árbol.
- $P_n = n!$; $V_{n,k} = \frac{n!}{(n-k)!}$; $VR_{n,k} = n^k$; $\binom nk = \frac{n!}{k!(n-k)!}$.
- Con repetición: $\frac{n!}{a!b!\cdots}$; circulares $(n - 1)!$; combinaciones con repetición $\binom{n+k-1}{k}$.
- Propiedades de $\binom nk$ y triángulo de Pascal; $\sum \binom nk = 2^n$.
- Binomio de Newton.

## Repaso: lo que debe quedarte dentro de un mes

1. Las tres preguntas para elegir el modelo de recuento.
2. La diferencia entre variaciones y combinaciones y la relación $V_{n,k} = \binom nk k!$.
3. Cómo se cuentan los anagramas de una palabra con letras repetidas.
4. El truco del complementario para «al menos uno».
5. El binomio de Newton y su relación con el triángulo de Pascal.

## Siguiente

[[mat-probabilidad-elemental]] (usar estos recuentos para medir lo probable que es un suceso).
