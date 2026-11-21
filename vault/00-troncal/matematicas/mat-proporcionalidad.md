---
id: mat-proporcionalidad
title: "Proporcionalidad: razones, proporciones, regla de tres directa, inversa y compuesta, repartos, mezclas y divisas"
area: matematicas
trunk_level: 2
prerequisites: [mat-fracciones, mat-decimales]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 10: «Magnitudes proporcionales. Porcentajes», secciones 1.1-1.2 (razón y proporción), 2.1-2.2 (proporcionalidad directa y regla de tres directa), 4 (cambios de divisas) y 5 (escalas). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2010%20Proporciones.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 6: «Proporcionalidad», secciones 1.1-1.3 y 1.7 (directa, regla de tres simple y compuesta, escalas), 2.1-2.3 (inversa y regla de tres simple y compuesta inversa) y 3.1-3.3 (repartos directo e inverso, mezclas y aleaciones). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/06%20proporciones%203.pdf"
hints:
  - "Concepto: dos magnitudes son directamente proporcionales si su cociente es constante (al doble, el doble) e inversamente proporcionales si su producto es constante (al doble, la mitad). Antes de hacer cuentas, decide cuál de las dos es."
  - "Herramienta: reduce a la unidad (cuánto corresponde a 1) o escribe la proporción y usa que el producto de medios es igual al de extremos; en las compuestas, analiza cada magnitud por separado frente a la incógnita."
  - "Documentación: Marea Verde 1.º ESO cap. 10 (secciones 1, 2, 4 y 5); 3.º ESO cap. 6."
exercises:
  - id: cuarto-proporcional
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Halla $x$ en la proporción $\dfrac{{{a}}}{{{b}}} = \dfrac{{{c}}}{x}$.
    variants:
      - values: {"a":4,"b":10,"c":6}
        answers: ["sha256:12eb7ea106decf7693a9d50ca47dcd3df0a33f4a47cb69bce8e18d5643e7aa04","sha256:31e17d72adf35710466272f9ea7db77ed57d6bfb4db5ac98de7e96f433518f37","sha256:5f415581f24b0a222d8f5528549d538de2f7f5dd7afcce63e028c3217360c1b7"]
      - values: {"a":3,"b":7,"c":12}
        answers: ["sha256:80816d71e5dbf1a435dc82143ad665778bd2c6baac018a78884ed22fcb120a2e","sha256:0f4194000427d37dcd921ba017bd3130e316f50f23bf2e147153c8d6a9b17687","sha256:8cb0293d7462dba0eeec4a1b7c557675f9c2851f0a55ca089d786b4034660909"]
      - values: {"a":5,"b":8,"c":15}
        answers: ["sha256:572f13a5a6fdc9a7ac835c11e531b752eb6b39b82e1400346a53d8f3d0d3754c","sha256:ef7bbb8ef33747e852ecf67346b8a1e8d510b1197d0f0be874956bf26985e50b","sha256:d70d44829c5bae005d3863a83e415fca6752d6879f2596951aae3fecc339a3d9"]
      - values: {"a":9,"b":6,"c":12}
        answers: ["sha256:cc5b02ae44f7a9feb58c21a089e1d8584afbd9e1291598fd86b0f1f4da22aa29","sha256:8fb7605656afaacf44ea8d8fd486970e7007a9e838836dff6eccafe4fd8e356c","sha256:ce8255a8ac5414418f5601e3e32dbe2fa1c8561d36064c464f082568a56229e5"]
      - values: {"a":2,"b":13,"c":8}
        answers: ["sha256:23548601665e936d510d60649af8144dc3a2b3790578d643a12e00eb53d01c07","sha256:304dd325c89ed75bffb687f7d16b507be9be39513d903f9244599cbdedf07b8a","sha256:cc8b7a9ad95679f7bff2559ab3b6cb73ba932a625e9cb85208826068d626d1e8"]
      - values: {"a":7,"b":4,"c":21}
        answers: ["sha256:5a5e08efefd6f63de73a8cc8c3c049467db54f67faf3eccc3bb812e7dcce5b4e","sha256:bb497cddc68d3479b30781ff48fbf69881af23f366217474f3c64825012943ce","sha256:e5a303b47fc461e8d14ac797450cc1eb89492be191c40106a467aaa8657a9f11"]
  - id: medio-proporcional
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Halla el número positivo $x$ tal que $\dfrac{{{a}}}{x} = \dfrac{x}{{{b}}}$.
    variants:
      - values: {"a":4,"b":25}
        answers: ["sha256:da1c867d71ff97173a0455c7c85d37884fdbbced5592f64b42545e09bdbdbda9","sha256:918286466e8bb2618cea4a09e0a5a3db44be953f9367b9c079e1542abe946d61","sha256:658fe9be273099c79ab40f5a9194b2b0b381d415e477ecd8c03fce64199039a4"]
      - values: {"a":2,"b":32}
        answers: ["sha256:d5d8a379125d1e272b127e85a5d0f1af781af5c2f1b471082400adebe02ff1b2","sha256:0c23a0345069d4251c2815cf913ce89414b6a2749932e08198d947a9e4345e09","sha256:76ad913e0dcafe6b8cac090053328581260d0606cf7d648ed5c4a3800db6145a"]
      - values: {"a":3,"b":27}
        answers: ["sha256:f8ef59cdb2d483b462234459365b0e6e6adeb20c6811be5fbcfcf50149327f6a","sha256:54b35951a05fe783dc5990fae48d7b723ac7f13d26a1fc6d56ce2b5974efc955","sha256:b13d1b9bb792de3225f9e5fc3f3c19fc9a3e17bd445c6ae84f058c4de978f07c"]
      - values: {"a":5,"b":45}
        answers: ["sha256:183d8144b38b8bb5ed319a8401777c50f9ab3126ba305c63cc4e4b9382fffcc0","sha256:a618ae5b67da73346f731c2359a55d6d9649d7c9694de2a75913b9f02c80ace2","sha256:da6a457e315b47d79b1ae2351f0beac0b7d6cbbba1d71eabdae10aafe95a125b"]
      - values: {"a":8,"b":18}
        answers: ["sha256:e0f82e33b4bb1a20d9fc451ccfcec8b0d5080cbbb5b58ed0ede6dd904e36ee99","sha256:299e8f180afcbf7e6aca3dd6fee91f34fcf4372dd42dd3b2c6787a9dc23a6b08","sha256:70b0154cd401e3c71ab7370b2871d06d3bbd66d6d60fa070f4ba5219df00a912"]
      - values: {"a":6,"b":24}
        answers: ["sha256:65d21ff61fdca550b05cb1e2307a713d27ac521fca919a088d70bbbbd26d1656","sha256:1e6671a510983d45478a5aa569d9ecc45acfce1ada1e5a09a6f75d22bf15708b","sha256:eaf013814320cfcd440ccf919860f2f19b5c3b8499e0a129646d12630769a1fa"]
  - id: son-proporcionales
    tier: 1
    prompt: |
      ¿Son directamente proporcionales las magnitudes de esta tabla? Primera: ${{A}}$; segunda: ${{B}}$. Respuesta: `si` o `no`.
    variants:
      - values: {"A":"2,\\ 5,\\ 8","B":"7,\\ 17{,}5,\\ 28"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"A":"3,\\ 6,\\ 9","B":"10,\\ 20,\\ 31"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"A":"4,\\ 10,\\ 14","B":"6,\\ 15,\\ 21"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"A":"1{,}5,\\ 3,\\ 4{,}5","B":"2,\\ 4,\\ 7"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"A":"5,\\ 12,\\ 20","B":"8,\\ 19{,}2,\\ 32"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"A":"6,\\ 9,\\ 15","B":"4,\\ 6,\\ 11"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: regla-de-tres-directa
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Si ${{q}}$ unidades de un producto cuestan ${{p}}$ €, ¿cuánto cuestan ${{Q}}$ unidades?
    variants:
      - values: {"q":5,"p":"12{,}5","Q":8}
        answers: ["sha256:1117da53b8d18561eaa73b4e08fc3611852bfd032da03f6bf709b50b8df61055","sha256:3d2f3bffae59fbd63bfcf6588c27f9e76c7626fe0f54ca13035b629695c9ebf6","sha256:2f743c4c57ef4453df7b57684d4626fc42e6e62dba69d8685f289c5a9326e38b"]
      - values: {"q":3,"p":"4{,}2","Q":7}
        answers: ["sha256:a8f5dcf0714be8b9f1213adf60d36b48dcf45c335af2b8e02975815399a04a5f","sha256:dbe11628937a584081682cec9284e3991ced54c978e7778ecd754a7b03fd49e5","sha256:341cc5ef33e0f515e3332ffac7dabdc0a80b50923a73887b1fc43792677e5e41"]
      - values: {"q":12,"p":"18","Q":20}
        answers: ["sha256:f0c3e1f2989a72e6f868a3b0fa6413631af3f810fa7aa1609a973aa5aabe5a98","sha256:62204a2c09526e4e9fe38d77a4ae126b0495c61799536a3d981f86ed46c2ef21","sha256:bc0c0c22ba283e1fd63be0c464bcce6534e2de334f46b16b7174aeeee9c9d503"]
      - values: {"q":4,"p":"7{,}6","Q":10}
        answers: ["sha256:3222e5209d7fec695412fdae324059f7c12222e71d0d9964d55ee2f03b241309","sha256:37173ec448678fdb42bc427c21a93cda0b203af15f2bb10dbab43c03ac0365ad","sha256:2158caf23a4ad93eeb76935c4a07c970fa1c08e58a293083ec853cf9d33ee73c"]
      - values: {"q":6,"p":"15{,}3","Q":9}
        answers: ["sha256:1ced683ce90b9973b23bdb0bb9ad424e29cb8359343c8bfa041cfb7fe8051dfb","sha256:dc24b3ad3b8bcf89b604d594b31cbab37c8704b24286f859b28ce25e945dca24","sha256:37919b6477104432529dc498a75a388f227afbe1a3237e253b48bc29c69770d6"]
      - values: {"q":250,"p":"3{,}75","Q":400}
        answers: ["sha256:a07d3ab9ba336e70e6e013a50c791249ba6ad2d9552b7204bab93bee3ee05013","sha256:a03e58cacdc56749d7ba39fc53a9e9e309d3ecfb7e60600d05ad7260adf9851a","sha256:38e5d00e0793cfc6d00a6833ee35aa84c2842c4f267fc8b7b722c8bfeb166bd0"]
  - id: constante-de-proporcionalidad
    tier: 1
    prompt: |
      ${{q}}$ litros de un zumo cuestan ${{p}}$ €. ¿Cuál es la constante de proporcionalidad (euros por litro) y cuánto cuestan ${{Q}}$
      litros? Respuesta: `constante;precio` (con punto decimal).
    variants:
      - values: {"q":8,"p":"20","Q":14}
        answers: ["sha256:883cdf0eebcdea0fe4c2ab308ce0bd3b5a63b9ac841db1b493bca84afb1268a1"]
      - values: {"q":15,"p":"9","Q":25}
        answers: ["sha256:e8f95c5d33d82e35cd7d9d7dec93eef4854d05c6ad26db3ab6a462b5088d04d2"]
      - values: {"q":6,"p":"4{,}5","Q":10}
        answers: ["sha256:20fb042cb8f464cbc8849166e686209eb17bf91ea926f70b03991dad9d3a0910"]
      - values: {"q":20,"p":"50","Q":7}
        answers: ["sha256:7adb558621b5150201d8b1efa05fbce3ee4133d395ca9b10f80334d8fbff4c95"]
      - values: {"q":12,"p":"30","Q":18}
        answers: ["sha256:bc41a76044474050cac2889a1b5870a43b6b8f238108febc737e455539eece3d"]
      - values: {"q":40,"p":"6","Q":90}
        answers: ["sha256:9193e164706bc38988281da316d64446a8225ed18c859f93e6e89bd07c9e26bb"]
  - id: regla-de-tres-inversa
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ${{o}}$ trabajadores tardan ${{d}}$ días en hacer una obra. ¿Cuántos días tardarían ${{O}}$ trabajadores al mismo ritmo?
    variants:
      - values: {"o":6,"d":20,"O":8}
        answers: ["sha256:7a17af30b4d80d575290425b22db3ba7534e73050f7ec9a3f2f9dba41d16e7ad","sha256:755c67a60b680925a7acb3a6f43a7779d1d28811a67833ab53b8655c49cc723b","sha256:6a8acb07944bee51c60788cd33acdb70a1171931612a312ccd9162c0b3360b81"]
      - values: {"o":10,"d":12,"O":15}
        answers: ["sha256:e8d124b1cc690a68ef791b8d45ec8d461aeb84646211ef1906b00777bff183c7","sha256:5aaaf764fa2999b6741978d43811fb2439f21c7f79d96dad1e297b658cc00d2c","sha256:713c2ba1d9e2491d944bdc2731711c1785e2f716b7d16116c266822922c81d92"]
      - values: {"o":4,"d":30,"O":6}
        answers: ["sha256:03f2d8dc62eafa6a4d582803a4fde774679adb1ada37ce45b41ceaacb1f396a9","sha256:da1c6eb5deb8992ca5d44c016c833e7742e06a419dfd292df422ac475c4e1d35","sha256:1f868a475a727f25b9ac0cf362a6af7ac5bc309b8ee6e8c2304a62cd5b95f480"]
      - values: {"o":9,"d":16,"O":8}
        answers: ["sha256:5562069a75ccba32b7f3533e2a116804645cae728537f0c0606d717c8f228445","sha256:2cb56a955b976c5db744c644195edc2676398b2d75e81832c57c122954047f4f","sha256:c584970aa0a363f1fa1031922dd7a94e3b6605f1969c6eed97058ca01ae836bc"]
      - values: {"o":5,"d":18,"O":3}
        answers: ["sha256:a0e585a3a9ff621963789e62d9866664b99f2a7d96dedff48b8a1e693543543e","sha256:d6a030d114863406108bad4570e8804944383f947ad04de14ebc30194953d45f","sha256:ef745bc0d7a418b9e907b7ad4f70a0ae449f2dfd785293bfb229a7debd16fcf9"]
      - values: {"o":8,"d":21,"O":14}
        answers: ["sha256:26eed31095aa94d2adafa2e1a5f4ead38d7bf32d85ead71b6da5944c68081549","sha256:fb80c12fc8eb84afef0d7b9580c231956645c54958a75bcf878f4eea4be4cfcd","sha256:b3871ae4a5d0654565f50b8564c709ee9b232378d6dd6fe41b644f921eec34c4"]
  - id: velocidad-y-tiempo
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un viaje dura ${{t}}$ horas a ${{v}}$ km/h. ¿Cuántos **minutos** duraría a ${{V}}$ km/h?
    variants:
      - values: {"v":90,"t":"2","V":100}
        answers: ["sha256:56cf1119a28d9d45f36bcac696be79e028a6e2459c7e6c2057bd3901e44cbd5a","sha256:3e68ba821bb60eccb4c3942c30b3304ae08b43c733e5b92a1a373acca2b6670c","sha256:cb0d8dced6d20017fe88eced498b312597b7d7c44bf39ffd4d23f147ee727f8a"]
      - values: {"v":60,"t":"3","V":80}
        answers: ["sha256:0facbb485833364219ecc57bff10ee2848b97f7e43cd7212889d91455317b8e6","sha256:46972c39dd3829459d7a8a6cf6176a8ea4deb1a8a245e43ca6c2a46540a37a94","sha256:22b8cac456b830a64eccd6fec683f5821788557ec8e8e20e8a5e4e7651278b95"]
      - values: {"v":100,"t":"1{,}5","V":80}
        answers: ["sha256:6ecb0d828a2cb9a32b1eb8fc2d08045a15c3488707fa4f25f50b7eeda82b83a3","sha256:52482a52c201a8bac9c0092b0cceb364c3ea0608b6517e9f17f0314e16f7424d","sha256:9f48204c124e942210165c614c0171c48b0ab2a3b44b476f68e787e59d79eeb7"]
      - values: {"v":80,"t":"4","V":64}
        answers: ["sha256:721f5cbb6e4ab76e308985f0ae662ee475a5b8b9c89cc10afe9840886c376c72","sha256:45d355f76a191d6a762b46cab10a9b9ecbe531240ea3eabf74e7ca3726becc70","sha256:691915c8f773c2d1cf9deafe40b0cc374ad061c1903fd4aa70eda8f68c83c063"]
      - values: {"v":120,"t":"2{,}5","V":96}
        answers: ["sha256:8eafb292d258b8adcb72c81f304fd1e48a6034f0da219f232a935eba4238110e","sha256:c7cf802dfd9c1714c047d310fe9a8d5c7c499379f951cc90b30492cb1f7e3a5c","sha256:b043559b393930186f48fd8a9a887fd0927f1e91f9cdb1553e25695b31083588"]
      - values: {"v":50,"t":"6","V":80}
        answers: ["sha256:53c300383db3462ec9a4261e82158e657f9c3cd41569d5539809ae270c19f132","sha256:d24e99717b51422d71c49cf00915297321958f6244ff45793d79ad2201644d09","sha256:dc658463dd0a32b99306532e63c471733f4cab8877bd7d816bee84967ddad93e"]
  - id: regla-de-tres-compuesta
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ${{o}}$ operarios, trabajando ${{h}}$ horas al día, hacen un trabajo en ${{d}}$ días. ¿Cuántos días tardarán ${{O}}$ operarios
      trabajando ${{H}}$ horas al día?
    variants:
      - values: {"o":8,"h":6,"d":15,"O":10,"H":8}
        answers: ["sha256:3052e0eaf8b6770e94a9e364a75c549e1568b1bdac1236cfbe43a2fed31f756d","sha256:529ab1d6af7acc542d361dd438225941d6673093395b8c21b866e5d239f57962","sha256:36530d493d78975ef38fdd250b27cca4ab4a290fae8f4100c77a740e6d910b80"]
      - values: {"o":5,"h":8,"d":12,"O":4,"H":8}
        answers: ["sha256:0d5190137f1faca55d6abfdfda15a28306569cd55340040fd85c0fd99858d479","sha256:5d5e2dfe85ffce328e1e23e455443f7b6ac0decef0d27a1d53cbd1a7e862deaa","sha256:cd5f7adfcec7249ea967698d98546172a1a0367f376b914d7e1ffdb20b5258cd"]
      - values: {"o":12,"h":7,"d":10,"O":8,"H":7}
        answers: ["sha256:6fe9b94d1b523ab53545172332d75bebe5d7eaa5657d6f5b250e5ec68cb6dc6b","sha256:f63a436b3fd685163ac5130616f915863a73f75ea907c3cb5d8f27f8a1c37229","sha256:ba4533be0211741939fe15074d238662a187df8bc8c81d6d2e916991d177f28b"]
      - values: {"o":6,"h":9,"d":20,"O":9,"H":8}
        answers: ["sha256:17a69ddf3dda8a846b3d3e0d97a42450ff9a4cc585cbaeb113a9965bfa7b2e41","sha256:41bb0d63e966a4c2db479c5e465ad610fa6afd01121d4b3db62bd67bfa61d68f","sha256:153860ac9337216e6da2a54d5071540d1b38184786ed3e9e7a309265b7f5abb5"]
      - values: {"o":8,"h":6,"d":18,"O":9,"H":4}
        answers: ["sha256:1f8e94ef7eb2e8b746f5eb41cb3d5add61017dc0d031e009f43ce6f8c9bf70a4","sha256:b680a8f042ccd30a17ad357266164e100274218802550b4839be5450ee2fcdd3","sha256:3c1a08f90cc1a76f90edcd94c1423e2ae14dac1e23085bd4999b9974fb4ff1a6"]
      - values: {"o":4,"h":10,"d":21,"O":7,"H":8}
        answers: ["sha256:20cb3cdea1a9b2315efec9cafb9f59f31587e8d9d74e3ba2493db33af7e50cb0","sha256:798f900407e36ac324e3cc6d3cbb947040b96978b9af4218817b4d093dc18040","sha256:66c82e47a66daf203372468c04e7978c96c59072b985bde735ff26f985680f78"]
  - id: reparto-directo
    tier: 2
    prompt: |
      Se reparten ${{T}}$ € de forma directamente proporcional a ${{a}}$, ${{b}}$ y ${{c}}$. ¿Cuánto recibe cada parte? Respuesta: las tres
      cantidades separadas por `;`, en ese orden.
    variants:
      - values: {"T":1200,"a":3,"b":4,"c":5}
        answers: ["sha256:b1f414434d888acccef37060c07ffd910fdd5463b789f4c1570ad836ba44cf5c"]
      - values: {"T":560,"a":1,"b":2,"c":4}
        answers: ["sha256:29f4c211cc2581f129b26d3f8bf2108cf8c90c371730a25595c25456b87159e8"]
      - values: {"T":2000,"a":5,"b":7,"c":8}
        answers: ["sha256:c261bfca3b60318e1dfc8da5ffa9bfe2f82806415e7e694747531bbe9c5f62dd"]
      - values: {"T":990,"a":2,"b":3,"c":4}
        answers: ["sha256:e54f90b02e2899bc782e61d002af6c3899ee63c6d766e7a0b6dfc47d9f877bfa"]
      - values: {"T":1500,"a":1,"b":1,"c":3}
        answers: ["sha256:89aaf3bf49942c3c143c53463a13dda6a380804854bfb02199455dfe155d5458"]
      - values: {"T":3600,"a":6,"b":9,"c":15}
        answers: ["sha256:83dc93d5233b7ef43d9936a474054a9a0efa2ba52409d529ea33b87663d15d6a"]
  - id: reparto-inverso
    tier: 3
    prompt: |
      Se reparten ${{T}}$ € de forma **inversamente** proporcional a ${{a}}$, ${{b}}$ y ${{c}}$ (por ejemplo, a las faltas de asistencia).
      ¿Cuánto recibe cada parte? Respuesta: las tres cantidades separadas por `;`, en ese orden.
    variants:
      - values: {"T":1300,"a":2,"b":3,"c":4}
        answers: ["sha256:3aac5a20a1b6642237f645b100b37fc35291871ca0e1babc70dbb909582909da"]
      - values: {"T":700,"a":1,"b":2,"c":4}
        answers: ["sha256:229b59d411e06f4511341f9fa99258d6cab352b399bb7c8fe85277b21fae0f08"]
      - values: {"T":940,"a":3,"b":4,"c":5}
        answers: ["sha256:d64d1261e92e947c52183afaa0cd74352c8fc9074f1d554ed401162036fb445a"]
      - values: {"T":2100,"a":2,"b":4,"c":8}
        answers: ["sha256:fc91c13df3e3e4408321dbc974cc50203426a55475dc87b6bd4f49805a46e012"]
      - values: {"T":540,"a":1,"b":3,"c":6}
        answers: ["sha256:4ec2a6b30b81b02001cbfa134990a41857edc761cddb56683db2ce86eb808db8"]
      - values: {"T":2700,"a":3,"b":5,"c":15}
        answers: ["sha256:5749c3471b64ea29b2735d6bd516c5ec9c77f287affea9f67d8ed3e877563262"]
  - id: mezcla
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Se mezclan ${{a}}$ kg de un producto de ${{pa}}$ €/kg con ${{b}}$ kg de otro de ${{pb}}$ €/kg. ¿A qué precio por kilo sale la
      mezcla?
    variants:
      - values: {"a":30,"pa":"9","b":20,"pb":"14"}
        answers: ["sha256:29b4caafa53b201ddd686f21addbb62b411aab0d1cb270e80346ce7267384939","sha256:9f8f8138794791c476a1062d299cad238694c6e5cea2efa5124000aeb0d9551c","sha256:2e770fd47e09e7453105629e248c0ee884f8ed98ee2ac91559262508cf4c4eba"]
      - values: {"a":5,"pa":"6","b":15,"pb":"10"}
        answers: ["sha256:2d889bcd55c44c652362933f9d934e0c0d851a560fab0e25ae588fe963dc891b","sha256:b4c5211b955897cbb4fd0debfa41a4b9f12c2550c8679e9b12984b618fdca86a","sha256:f7d1e28238de5e3ebe9cfdb38789fd75745a9704257371c22d349fa792fc51ca"]
      - values: {"a":12,"pa":"4{,}5","b":8,"pb":"7"}
        answers: ["sha256:64e84a2e99116c8f9e49a47d0fcc43c5db76db00d2c44ad1d4f399323f771ae4","sha256:afa18f0f7475dcbb499112f3f5e1ae242af3eae271ad17a844b8b0a34410a15c","sha256:8d26cee05827957f2040ff3f0b6427d94c0b576ae1cd2f12615cf01438b97121"]
      - values: {"a":40,"pa":"11","b":10,"pb":"16"}
        answers: ["sha256:e52503960004a642dd3ab264c2bdf1d4fd75c49b1e90aff8321a086a2ed4e126","sha256:6938482944d16473e4f35b2300a3db4b88981fc5b28f4ddf5c03e9acc9b3ce04","sha256:16ba516b03424e372da5713089d4b0c3c30982bd5324a02720c6c254a1093a65"]
      - values: {"a":25,"pa":"3{,}2","b":75,"pb":"4"}
        answers: ["sha256:66b95c7a7b2728e1a89e29311ce5145d62741886affb70955b296cf950e9e5c9","sha256:30bd22d8fb2fbc8e8ce79e0ad974f443066233069cae880c44573a5de34a5af4","sha256:31edb2d543a5802fbdad8c41c2a04f179e8deb5d1654861dc3734758b4c027c8"]
      - values: {"a":18,"pa":"12","b":12,"pb":"17"}
        answers: ["sha256:c54df54b350b8b508bf9d23b16ec442fb3a2ca2c178f0febab8ed62e794859f4","sha256:5e340be6c459c75eaa12bcef07b205c95b6b0864dc9f72abc5f6c011348e60da","sha256:5f9d41e4e66671460af3feab6bda6cc32c9f070796c32f156c666b214f4a373c"]
  - id: aleacion
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Una joya de ${{m}}$ g es de oro de ${{q}}$ quilates (es decir, ${{q}}$ partes de oro puro de cada $24$). ¿Cuántos gramos de oro puro
      contiene?
    variants:
      - values: {"m":30,"q":18}
        answers: ["sha256:2e8ec507f309200b5afe6765dfdfddf3791b45895eb8a1d9b209ab9608fae184","sha256:ab47c1dff10fd225ad1253e29b4e48f56bb5b1ddf7c511b32c3ed147ffde2f1c","sha256:ff72040163588105f33febf3b79b9defbc10d7237d4a620700d1c60c1e1e4676"]
      - values: {"m":12,"q":20}
        answers: ["sha256:55d8e78d229142b65d500def4f553339f1bed5674c334ac4dad1bd0eecf80345","sha256:7b695ce228cfc19c5596a0265fb1d6d73a0bedc4195e0ca591eb84cb836839c1","sha256:abf7f54a16e3f06ab047652a204861fa868ebd107343bb0d34af477cf71ef347"]
      - values: {"m":48,"q":14}
        answers: ["sha256:3459a5a3df5263b713e7dfd7b115046dadc5a4e1b12294e6164dd460abd9d319","sha256:b86a13291b92b2d4c0963cab880289a1a81257fa67b4c156d6ffea8a2164d5d9","sha256:1b7a0213b5054c1ca0e1d548798be5c3291ace4281eb9578c7ae0ce3ccfafe91"]
      - values: {"m":15,"q":22}
        answers: ["sha256:9ad40a4a68020853f8d58e9a79c76e330469709574837cfb60141386d34d8863","sha256:21e24bad05c19a0d2ad7682ee03d57b473965ba1e226b87b948988ffed4ecdd7","sha256:865b9e837e9cf4738ee7f50263e033ed3d38ba99f190bab7142f71f0340f1903"]
      - values: {"m":36,"q":9}
        answers: ["sha256:a551cebb44060a9aeb615930dbecfd7a6124a8ccb46da5632892eea05c391aeb","sha256:d125fbfe62114e14ea84415fe90377dedb556f443468c69bfb1f234904f42470","sha256:ef91cdbff38dbff8c8164eb7430e23e1beb7d7e8220420bb748e86a26af31439"]
      - values: {"m":60,"q":16}
        answers: ["sha256:08389901b50cb0816f8df9834ed940d10c2adf722a23d0812728c138c427f69d","sha256:bb40796a93a30da18ab29e8eb69447f171b64fcd3c054d5da004ba7b23db2fce","sha256:5f1d3c5bf5d11f336ec17b4d20f354e7d16d59b4a6bb13cf3eed64a7d7eff1e5"]
  - id: cambio-de-divisas
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Una casa de cambio da ${{t}}$ dólares por euro y cobra una comisión del ${{c}}\,\%$ sobre los euros entregados. ¿Cuántos dólares se
      obtienen por ${{E}}$ €?
    variants:
      - values: {"E":500,"t":"1{,}1","c":2}
        answers: ["sha256:16758682dbc560ad91c4f56ec995fa877dad37628db7b1ee643fe4f6e0eb99bc","sha256:3ac46a26b09c43ebddc28dcc2170ae5056a3003fde0ea5e8385246cc00af3fd1","sha256:ef06530e4077f8b8a1708b89fbd31d2a95c2d25cf839cadc3f541cc3d54fc98c"]
      - values: {"E":1200,"t":"1{,}05","c":1}
        answers: ["sha256:c4345efb2c878421903e6e9de36ef3b134f4a7047bca44d7edd5e74e486d425c","sha256:ca67ccb38cf3c44360f18bc1541b63a7a73f733eaf4016efb5da4328ed8d9438","sha256:0f59b704e9db2885c97b1d75e8cd627fecb6fe24d4eef36f508591c7e670e862"]
      - values: {"E":250,"t":"1{,}2","c":4}
        answers: ["sha256:6ed9f4ef0bdcefe49abc1403023d7769ee1b818afbf6e452f68ce64fe8234e22","sha256:432bddc548512baea39be7c6e8d722120cf7524a0ba82a4c8c8df7f92b552da8","sha256:a71ac354e0834b31756e36dd61da3bac60496c08a7db611c58ba0c0d79a4b3e4"]
      - values: {"E":800,"t":"1{,}15","c":5}
        answers: ["sha256:f00e81b961fdd5838cfd72123e4b3bf9b959d305be9d5386895fe79e904d5b6a","sha256:aae7b10dd90b6da4440e46e834bb91f1aa77e0b01a6e07c0dd549760ef1607b8","sha256:a48fe42481aaf2087e4c79afa248a185b5ca5b9cf0fbb012ffc0f16be15667b2"]
      - values: {"E":2000,"t":"1{,}08","c":3}
        answers: ["sha256:499895d3ae411402b942370625808d87c1c91cfab09eceafb7827de27ab7e8cb","sha256:b466aa77966a441494cf9e9aa1d295a8b427d33dca60cf1ed27f459581673e7e","sha256:58ed7f54e6540badede9a4fbb29b032145493a739df5af0175b80ab2f6227616"]
      - values: {"E":150,"t":"1{,}25","c":2}
        answers: ["sha256:63d1e2814935b194fdb6f8f89eb21f84d6ee0c1f3859390ee03b7b26b893afd7","sha256:31535003ae9e418bf79cea48710cd4d486c8a9a298228943ac9f632c8c8335a1","sha256:2b08960d97ecec0ed394fc50bb9ae17554535aeb7f6402e0e5f04c77eb0b2255"]
  - id: superficie-a-escala
    tier: 3
    type: numero
    sig: 10
    prompt: |
      En un plano a escala $1 : {{E}}$, una habitación ocupa ${{s}}$ cm². ¿Cuál es su superficie real en m²? (Ojo: las superficies van con
      el cuadrado de la escala.)
    variants:
      - values: {"s":"12","E":"200"}
        answers: ["sha256:cab7e35c27d9515197a4c883bd50866c87823e2bd4b914eb2c44fbff5fb3b942","sha256:8d2a8135d399bce355c8b2efbad6eec3f23c24a1842e97da10b1d043dcaca5e2","sha256:daa30fb20b1db8b3231d30974f2a113bcaef3720ca3f7ffc61294427e6dc96d6"]
      - values: {"s":"30","E":"150"}
        answers: ["sha256:9400974f604ece292e3e89890582b07e1194e40b6528fcc0c36e902d49fd0433","sha256:927330a4ce594cf3d026e7968996b0cb9b658552ae9d99cb255865021a934edc","sha256:5dcf1d90c1a53969218f72cb24cc9f03d8cf9fdee15240bfcfb4b7001c58303e"]
      - values: {"s":"8","E":"400"}
        answers: ["sha256:74484d44a8646892b2e2fb654fdbbdd3380705b36613c779cf5c6870a3d71367","sha256:82e1ecd00833e0f9b01f05c8e333167565ae7558e26ecc1c5080396279887fbb","sha256:99ff593cb7ad353434c50b2bdf4cf58407f525aba168de705ef90f66599fe6b6"]
      - values: {"s":"45","E":"50"}
        answers: ["sha256:2fc811d8f945b49fef6df57008fcee63b0598e13a2b3b105d3b6c6ca70324d45","sha256:78e0c0bff2ae6a26ba44b6d26f6e2ed4a8ccfa76ceaea37eb9ad56a99461e19c","sha256:f60ab46972ebffd9057805b3b4f4b8a996cf074771d3e6abf33958a5e2580645"]
      - values: {"s":"7","E":"1000"}
        answers: ["sha256:b996019952ddd31c7b06ae95c4fe17fe85520e0c4868a760db6d586e06895d6a","sha256:00fc5d6567701f17e63a8a3b6703206efbab89139d1ab39a7b83be37722794e0","sha256:99f5d133c1e529a99db55a5d7e802e70d552cbd0bc68645e53c5eb1e8a31c235"]
      - values: {"s":"20","E":"250"}
        answers: ["sha256:04dbf4f8a6c054561c939b51b55b57eaa3af6916ca4eb3f61276f1323853744a","sha256:fae93a610dd8784204d24917e4ebeb96fcc2c0bc6c8a6ad63952320a426a29ed","sha256:da3a77150c1058d15be42759ed66af352a34d5771f690de78e7881955cb45906"]
  - id: reparto-inverso-por-que
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Explica por qué repartir una cantidad de forma **inversamente** proporcional a $2$, $3$ y $6$ es lo mismo que repartirla
      de forma **directamente** proporcional a $\frac12$, $\frac13$ y $\frac16$ (o a $3$, $2$ y $1$), y resuelve con esa idea el reparto de $1\,200$ €.
    sealed: "gz64:H4sIAAAAAAACCn1TsW7bMBD9lQeBQ6IQhi0HHlxoSjsX6Fp1oKgrQFTiqSQVWAmy9BeyZunerZ+QP8mXFKRl2a7RLsLpeHx3997jY+a5HYJhm22zDxaDhaNeucAw9p6cVx3ZQOgd9+y0YataKAglJEQtMEJoIdEqj3iLPMQuHo3x8yCgh65vyULsqko3HKBQYpziGiUeplijxDeBq95xM+jAldVsfVA20LUEeTSkjZMQu1i4v1RVX53SqzTLeJGu0wgXaS22p+N6tsjzxjjSYb9rnp9tSx4KLfuJD/aLylb2ji1EETusEwmbSMJJUcIVU8tCYorWc7QR79ANbTB9a7SyDaNnF3FwRS063V3j+0CNshBriUJiJWTMgHx4/WlBFq1CZ3yn5nFff9tFZT8l/YyDWFWVLJZLgbcfv3C64oWchxZbUIvAQbVo6EBRFDXup1Wj9jncq5YgDtgSIzzBkTZ11HqzXEZmbuPxeCxLxOV33PWOa5XG3eapGpMJCpS4Pf6uUaI4/m5QYl5pNgqOPsHby7NMaiyXuElINwng5N7by/Mik5kbamd0tv38mGlnAjnD8QF47UxNkVnNtjFpxsTECV+mUc3hcUBzx7gcJdo0OX3vcWgRm/aDDeyzbfEkz9q+p2bQlNT9y5kXRjxYSs1GqudIR7b3AF5BISrt2B/V/d8MH+tgyNI/xYvQccGudwPV6hzqy9Mf2lgRDUgEAAA="
  - id: r-directa-o-inversa
    tier: 1
    type: opcion
    review: true
    prompt: |
      El número de grifos iguales que llenan un depósito y el tiempo que tardan, ¿qué relación tienen?
    options:
      - |
        Directa: más grifos, más tiempo
      - |
        Inversa: más grifos, menos tiempo
      - |
        No son proporcionales
      - |
        Directa, porque las dos aumentan
    answers: ["sha256:38171c1a47f3880d1bf012c53b8534ca31f4929051ac9af4f87664db4ee7c921"]
  - id: r-no-proporcional
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas parejas de magnitudes **no** es proporcional?
    options:
      - |
        Kilos de fruta y precio
      - |
        Litros de gasolina y kilómetros recorridos por un coche
      - |
        Horas de trabajo y sueldo por horas
      - |
        Edad y estatura de una persona
    answers: ["sha256:e90c532d46a9dd932bf00b65f458c87f00e3117a3242579064a1cee49db8fe18"]
  - id: r-regla-tres
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $4$ cuadernos cuestan $8$ €, ¿cuánto cuestan $7$?
    answers: ["sha256:b091b8b73436d7ed0ac31b63af10096b2a6751f740370ef5ce0afe68038369d8","sha256:8e4973449b344eb5d841cf2335d825c419e1ef98490eff45cc0f4a81a9468728","sha256:ed5e7f85f032e4a30a482279263b89484804d3b999de8794544d348143d36524"]
  - id: r-inversa-rapida
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      $3$ pintores pintan una casa en $8$ días. ¿Cuántos días tardan $6$ pintores?
    answers: ["sha256:0f22eecfde098551df1e819d25dd832273fe1409cf8976721a7b9c8f93107cf8","sha256:305d8dc0fe59d0ea76d0570f0c03b4b9a7e0564c2900a078d57678443e2e56dd","sha256:c8a8f359a23ebc86b9074eaf581985f8ebe3b9ff57001bad654880716a2c57d1"]
  - id: r-propiedad-proporcion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué propiedad cumple siempre una proporción $\dfrac ab = \dfrac cd$?
    options:
      - |
        El producto de medios es igual al producto de extremos: $a\cdot d = b\cdot c$
      - |
        $a + d = b + c$
      - |
        $a\cdot b = c\cdot d$
      - |
        $a - b = c - d$
    answers: ["sha256:8205839d01cdd4e08cac40b8059decfa03602f1be6c98244913d68e89c03d006"]
  - id: r-reparto-suma
    tier: 2
    review: true
    prompt: |
      Reparte $500$ € de forma directamente proporcional a $2$ y $3$. Respuesta: `a;b`.
    answers: ["sha256:5b21cebab950f1cc5ae5fb348ebbc2fe958d23aa21ff2832fbfa40beb2d8ddae"]
  - id: r-escala-area
    tier: 3
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se dobla la escala de un plano (todo se dibuja el doble de grande), ¿por cuánto se multiplica el área dibujada de cada
      habitación?
    answers: ["sha256:414e5e16565711f0390975ff8ebdb053364a82a8afaccf8308fb13becfcbde00","sha256:8c1787b99606857d6f7537fd83040495a39f7e6b06bcafc75a715e7c3aa37249","sha256:1eeae3459cfe8d6b1a18302fc89ebd6c57c065618078e7ea4d6bc8ac1b68a896"]
---

# Proporcionalidad: razones, proporciones, regla de tres directa, inversa y compuesta, repartos, mezclas y divisas

Si $3$ kg de naranjas cuestan $6$ €, $6$ kg cuestan $12$ €: el doble de kilos, el doble de precio. Si $4$ obreros tardan $15$ días en
una obra, $8$ obreros tardan $7{,}5$: el doble de obreros, la mitad de días. Muchísimos problemas de la vida diaria, de la ciencia y
de la economía son de este tipo: magnitudes que cambian **en proporción**. Este nodo enseña a reconocer cuándo dos magnitudes son
proporcionales, de qué tipo, y a resolver cualquier problema de proporciones con un método seguro (no con una regla de tres
aplicada a ciegas).

## Objetivos

Al terminar sabrás:

1. Usar razones y proporciones y sus propiedades (cuarto y medio proporcional).
2. Distinguir magnitudes directa e inversamente proporcionales, y las que no son proporcionales.
3. Resolver problemas de regla de tres directa, inversa y compuesta, también por reducción a la unidad.
4. Hacer repartos directa e inversamente proporcionales.
5. Calcular precios de mezclas, la ley de una aleación, cambios de divisas y medidas a escala.

## Qué debes dominar antes

[[mat-fracciones]] (fracciones equivalentes, productos cruzados) y [[mat-decimales]].

> [!question] Test de entrada
> 1. ¿Son equivalentes $\frac{6}{8}$ y $\frac{9}{12}$?
> 2. Si un bolígrafo cuesta $0{,}75$ €, ¿cuánto cuestan $4$?
> 3. ¿Cuánto es $\frac{2}{3}$ de $45$?
>
> Respuestas: sí ($6 \cdot 12 = 8 \cdot 9 = 72$); $3$ €; $30$.

## 1. Para qué sirve

- **Compras y cocina**: precios por kilo, adaptar una receta de $4$ a $6$ personas, comparar ofertas por unidad.
- **Trabajo y viajes**: cuántas personas hacen falta para acabar a tiempo, cuánto se tarda a otra velocidad, cuánta gasolina
  hace falta.
- **Repartos justos**: beneficios según lo que puso cada socio, gastos según lo que consumió cada uno.
- **Ciencias**: las leyes físicas más sencillas son proporciones (la ley de Hooke, la de Ohm: [[ing-electricidad-basica]]).

## 2. Razones y proporciones

> [!practico]
> Una **razón** compara dos cantidades dividiéndolas: si en una clase hay $12$ chicas y $15$ chicos, la razón chicas/chicos es
> $\frac{12}{15} = \frac45$, «cuatro chicas por cada cinco chicos». Una **proporción** dice que dos razones son iguales: «la receta
> lleva $2$ huevos por cada $3$ vasos de harina, así que con $6$ vasos hacen falta $4$ huevos».

Una **razón** entre $a$ y $b$ es el cociente $\frac ab$. Una **proporción** es una igualdad de dos razones, $\frac ab = \frac cd$ ($a$ y $d$ son los
**extremos**, $b$ y $c$ los **medios**). **Propiedad fundamental:** el producto de los extremos es igual al de los medios, $a \cdot d = b \cdot c$
(son los productos cruzados de las fracciones equivalentes).

- **Cuarto proporcional**: el término desconocido de una proporción: $\frac{3}{4} = \frac{9}{x}$ da $x = \frac{4 \cdot 9}{3} = 12$.
- **Medio proporcional**: el $x$ de $\frac ax = \frac xb$, es decir $x^2 = ab$: el medio proporcional entre $4$ y $9$ es $6$.

## 3. Proporcionalidad directa

> [!practico]
> Dos magnitudes son **directamente proporcionales** si al multiplicar una por un número, la otra queda multiplicada por el
> mismo número: el doble de kilos, el doble de precio; la mitad de tiempo, la mitad de distancia (a velocidad constante). Ojo:
> que las dos «crezcan juntas» no basta; la edad y la estatura crecen juntas y no son proporcionales.

Las magnitudes $x$ e $y$ son **directamente proporcionales** si el cociente $\frac yx$ es siempre el mismo número $k$, la **constante de
proporcionalidad** (en una tabla, todas las columnas dan el mismo cociente). Entonces $y = k \cdot x$: la gráfica es una recta que pasa
por el origen ([[mat-funciones-lineales-cuadraticas]]).

**Regla de tres directa.** *Ejemplo resuelto 1.* Si $3$ kg cuestan $7{,}50$ €, ¿cuánto cuestan $8$ kg?
- *Reducción a la unidad:* $1$ kg cuesta $7{,}50 : 3 = 2{,}50$ €; $8$ kg cuestan $8 \cdot 2{,}50 = 20$ €.
- *Proporción:* $\frac{3}{7{,}50} = \frac{8}{x}$, de donde $x = \frac{7{,}50 \cdot 8}{3} = 20$ €.

La reducción a la unidad es la más segura: obliga a pensar qué significa cada paso.

## 4. Proporcionalidad inversa

> [!practico]
> Si se reparte una pizza entre más personas, a cada una le toca menos; si van más obreros, se tarda menos. Son magnitudes
> **inversamente proporcionales**: al doble de una, la mitad de la otra. Lo que se mantiene es el **producto**: $4$ obreros por
> $15$ días son $60$ «jornadas de trabajo», las hagan como las hagan.

$x$ e $y$ son **inversamente proporcionales** si el producto $x \cdot y$ es constante. *Ejemplo resuelto 2.* $4$ obreros tardan $15$ días;
¿cuánto tardan $6$? El trabajo total es $4 \cdot 15 = 60$ jornadas; con $6$ obreros, $60 : 6 = 10$ días. (Con la regla de tres
inversa: $4 \cdot 15 = 6 \cdot x$.) Otros ejemplos: velocidad y tiempo de un mismo trayecto, número de grifos y tiempo de llenado,
número de personas y días que dura una despensa.

> [!formal] Con rigor: qué es exactamente «proporcional»
> $y$ es directamente proporcional a $x$ si existe $k \neq 0$ con $y = kx$ para todos los pares de valores; inversamente si existe $k$
> con $y = \frac kx$ (es decir, $xy = k$). En el primer caso, si $x$ se multiplica por $\lambda$, $y$ también: $k(\lambda x) = \lambda(kx)$; en el segundo,
> $y$ queda dividido por $\lambda$: $\frac{k}{\lambda x} = \frac1\lambda \cdot \frac kx$. Por eso «crecer a la vez» no basta: $y = x + 5$ crece con $x$ pero al doblar
> $x$ no se dobla $y$. $\blacksquare$

## 5. Regla de tres compuesta

> [!practico]
> Cuando intervienen más de dos magnitudes (obreros, horas al día y días), se estudia cada una **por separado** frente a lo que
> se busca, imaginando que las demás no cambian: más obreros, menos días (inversa); más horas al día, menos días (inversa).
> Luego se combinan.

*Ejemplo resuelto 3.* $6$ obreros, trabajando $8$ horas al día, tardan $10$ días. ¿Cuánto tardarán $4$ obreros trabajando $6$ horas
al día? El trabajo total es $6 \cdot 8 \cdot 10 = 480$ horas-obrero. Con $4$ obreros a $6$ horas, cada día se hacen $24$ horas-obrero: hacen
falta $480 : 24 = 20$ días. (Las dos magnitudes son inversas a los días, por eso se multiplica y se divide así.)

## 6. Repartos proporcionales

> [!practico]
> Tres amigos ponen $2$, $3$ y $5$ euros para un décimo de lotería que gana $900$ €. Lo justo es repartir según lo que puso cada
> uno: el premio se divide en $2 + 3 + 5 = 10$ partes y a cada uno le tocan tantas partes como euros puso. Eso es un reparto
> **directamente proporcional**.

**Reparto directo**: se suman los números de partes, se divide el total entre esa suma (valor de una parte) y se multiplica.
*Ejemplo:* $900$ € en $2$, $3$ y $5$: una parte vale $90$ €; reciben $180$, $270$ y $450$ €.

**Reparto inverso**: se reparte de forma directamente proporcional a los **inversos**. *Ejemplo:* una prima de $1\,200$ € inversamente
proporcional a las faltas $2$, $3$ y $6$: inversos $\frac12, \frac13, \frac16$, que multiplicados por $6$ son $3, 2, 1$; se reparte en $6$ partes de
$200$ €: $600$, $400$ y $200$ € (quien menos faltó, más recibe).

## 7. Mezclas, aleaciones, divisas y escalas

> [!practico]
> Si mezclas café caro y café barato, el precio de la mezcla queda entre los dos, más cerca del que pongas en mayor cantidad: es
> una media ponderada. Lo mismo pasa con el oro de una joya o con un cambio de moneda: todo es proporcionalidad.

- **Mezclas**: precio medio $= \dfrac{\text{coste total}}{\text{cantidad total}}$. *Ejemplo:* $30$ kg de café a $8$ €/kg con $10$ kg a $12$ €/kg cuestan
  $240 + 120 = 360$ € por $40$ kg: $9$ €/kg.
- **Aleaciones**: la **ley** es la proporción de metal precioso. El oro se mide en **quilates**: $24$ quilates es oro puro y $18$ quilates
  significa $18$ partes de oro de cada $24$ ($75\,\%$).
- **Divisas**: un tipo de cambio es una constante de proporcionalidad; si $1$ € equivale a $1{,}08$ dólares, entonces $250$ € son $270$ dólares. Las comisiones
  se descuentan aparte.
- **Escalas**: en $1 : E$, las longitudes reales son las del plano por $E$ y las superficies, por $E^2$ ([[mat-sistema-metrico]]).

## 8. Errores típicos

- Aplicar una regla de tres directa a magnitudes inversas (más obreros no tardan más).
- Tratar como proporcionales magnitudes que no lo son (edad y estatura, el precio de un taxi con bajada de bandera).
- En la compuesta, no analizar cada magnitud por separado frente a lo que se busca.
- En el reparto inverso, repartir directamente a los números en lugar de a sus inversos.
- Hacer la media simple en una mezcla con cantidades distintas.
- Olvidar que las áreas a escala van con el cuadrado de la escala.

## 9. Resumen

- Proporción $\frac ab = \frac cd \iff ad = bc$; cuarto proporcional; medio proporcional $x^2 = ab$.
- Directa: $\frac yx = k$ constante; inversa: $xy = k$ constante; comprobar antes de calcular.
- Reducción a la unidad; regla de tres directa, inversa y compuesta (cada magnitud por separado).
- Reparto directo (partes proporcionales) e inverso (proporcional a los inversos).
- Mezclas (media ponderada), quilates, divisas y escalas.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo distinguir proporcionalidad directa, inversa o ninguna.
2. La reducción a la unidad.
3. El producto constante de la proporcionalidad inversa.
4. Cómo se hace un reparto inversamente proporcional.
5. El precio de una mezcla es una media ponderada.

## Siguiente

[[mat-porcentajes-finanzas]] (los tantos por ciento son proporciones sobre $100$) y [[mat-funciones-graficas]] (las proporciones dibujadas en unos ejes).
