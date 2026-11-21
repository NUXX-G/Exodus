---
id: mat-decimales
title: "Expresiones decimales: posiciones, operaciones, decimales periódicos, fracción generatriz y redondeo"
area: matematicas
trunk_level: 2
prerequisites: [mat-fracciones]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 6: «Expresiones decimales», secciones 1.1-1.8 (expresiones decimales, conversión a fracción, recta, suma, resta, producto y división), 2.1-2.3 (periódicos puros y mixtos, fracción generatriz, operaciones) y 3.1-3.2 (aproximaciones, truncamientos y redondeos). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2006%20Decimales.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 1: «Números racionales» (expresión decimal de un racional y fracción generatriz). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/01%20Racionales%203.pdf"
hints:
  - "Concepto: un decimal es una fracción con denominador potencia de 10. Al dividir numerador entre denominador, o la división termina (decimal exacto) o los restos se repiten y aparece un periodo (decimal periódico)."
  - "Herramienta: para la generatriz, llama x al número, multiplícalo por la potencia de 10 que corre la coma hasta el final del primer periodo y por la que la corre hasta su principio, y resta: el periodo desaparece. Para la cifra lejana de un periódico, calcula el periodo y el resto de dividir la posición entre su longitud."
  - "Documentación: Marea Verde 1.º ESO, cap. 6, secciones 1-3; 3.º ESO, cap. 1."
exercises:
  - id: posicion-decimal
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Qué cifra ocupa el lugar de las {{nombre}} en ${{s}}$?
    variants:
      - values: {"s":"4{,}0817","nombre":"milésimas"}
        answers: ["sha256:2a22f4ec657cb624f3fcbf454052109bf3c99cee19399a0e48cc244c216f1ae7","sha256:3b295881810b713c4f848c326c192ef0243eaf5d523b543d30a75f36c59dd20c","sha256:652976407f9760cd89bb0f04774f44c3f3256bce874f8969dd4d1b969ca9ebd9"]
      - values: {"s":"12{,}6593","nombre":"centésimas"}
        answers: ["sha256:7c985eaadd08ef8407d403feab8cc04c22ef051f2e5c6f768ec143945c494c14","sha256:89c4f43709d3114d2f6797afb54105201a37f57b801e20a2a768b02cbed1bbe7","sha256:7f96a933618c6dc0dd8ed1eafcbe9eb2917c0dc13dab064f5f3e299d1471ddc0"]
      - values: {"s":"0{,}30472","nombre":"diezmilésimas"}
        answers: ["sha256:3947345e7389c97772bf2f47daeb752c9a9ce4e7d56ae30a2c914e59444d1653","sha256:359848edc805ba3ff057882b78b3f1af1563fc9983c6920441287fe369e2b753","sha256:8642a43d57ddbc73bb0dad57df6ed888596ecdd021c1b670fff8b5af2949cb06"]
      - values: {"s":"7{,}0905","nombre":"décimas"}
        answers: ["sha256:820abccb1733a7cc99259560a42a894e8055f1cab7927e7583eeb6693dfb9631","sha256:0a9952fbadc7effc21d8ff5f8ceeff6fdc150b75a03f92f46e4a581aa06a7773","sha256:6c449a2066f99f27385367975b9c66cef96e8dd00d6b4be9c1419b6f1561ddbd"]
      - values: {"s":"58{,}1264","nombre":"milésimas"}
        answers: ["sha256:2385cfa40715ebbf427d12da15bad9c3028a5153d08badd6c712e8229b6fb8d1","sha256:4b8405b28660ac07277f8e2d0895e951ef8122e50d0210f03016570b92ac051f","sha256:83cf86b39018656e98f3b3c75d00aa609386faa2011d41ccbb6f9dec55e2734c"]
      - values: {"s":"0{,}00731","nombre":"diezmilésimas"}
        answers: ["sha256:a7bdb07b82e36e3dc9a28d006155adbd50c8a040ed64a06b2d05be33b3b58856","sha256:e03ce7514bd1b3e625ab8540439c83b5e02256c4ad0120b7d54e32448679ad02","sha256:782b72158a2c1b3aa6d1dd862609674f3f83e3aea86cb781e629a1d9552162af"]
  - id: decimal-a-fraccion
    tier: 1
    prompt: |
      Escribe ${{s}}$ como fracción irreducible. Respuesta: `p/q`.
    variants:
      - values: {"s":"0{,}45"}
        answers: ["sha256:958d3f8cb040a00bacc5d525fd70f81086218f5c2a7dc76346d885ab886ce25f"]
      - values: {"s":"2{,}125"}
        answers: ["sha256:4604bfbb473d9f67125e7b654c5fa8ec41428dc25f66dce54c30446bfb345b39"]
      - values: {"s":"0{,}064"}
        answers: ["sha256:8e3048fb54025c896b16cce9397c9beb4bc9b6be6f6f8e2b268f3f626df89454"]
      - values: {"s":"1{,}75"}
        answers: ["sha256:64209b4db9fbe2249b534a6def33e737ddffcc08162dcd83aaf58f9554bc7e8b"]
      - values: {"s":"0{,}0625"}
        answers: ["sha256:ece2d97a690303566cb7ba329f7bf3e25baedb393c113372798d4230af8de720"]
      - values: {"s":"3{,}6"}
        answers: ["sha256:3f99d85316926a1a4c4574865f131f4c83105ccb7ef2f3ac73fe2e3033166d08"]
  - id: exacto-o-periodico
    tier: 2
    prompt: |
      Sin hacer la división, ¿la fracción $\dfrac{{{a}}}{{{b}}}$ da un decimal `exacto` o `periodico`? (Simplifícala y mira los factores
      primos del denominador.)
    variants:
      - values: {"a":7,"b":40}
        answers: ["sha256:dcf2ab8588c5770102e62bd109c6d6cbcfa74ae1a8958db52f3d8284d3604254"]
      - values: {"a":5,"b":12}
        answers: ["sha256:e0d493fe11293f73eb91190803e84e02c95cbd103f39fea59dd967881126e980"]
      - values: {"a":9,"b":25}
        answers: ["sha256:dcf2ab8588c5770102e62bd109c6d6cbcfa74ae1a8958db52f3d8284d3604254"]
      - values: {"a":11,"b":30}
        answers: ["sha256:e0d493fe11293f73eb91190803e84e02c95cbd103f39fea59dd967881126e980"]
      - values: {"a":13,"b":64}
        answers: ["sha256:dcf2ab8588c5770102e62bd109c6d6cbcfa74ae1a8958db52f3d8284d3604254"]
      - values: {"a":8,"b":15}
        answers: ["sha256:e0d493fe11293f73eb91190803e84e02c95cbd103f39fea59dd967881126e980"]
  - id: sumar-restar-decimales
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula ${{a}} {{op}} {{b}}$.
    variants:
      - values: {"a":"3{,}75","op":"+","b":"12{,}408"}
        answers: ["sha256:bf753b392009317a918cc79ba82f79951272a79fe4f0c6ec02b43654c915e118","sha256:6d83966ef1b1892844f34e901ad948a315694f1de63ebfc8b3f88994b32f86a2","sha256:deab9a7c9d7a0700d21f4831b0e2fa4e814aaabb120accaa0405f5bc14693a12"]
      - values: {"a":"10","op":"-","b":"4{,}627"}
        answers: ["sha256:2a28a298e59f0f29080d077cdefec0f85ce12bcf70e94be868c251f536570ff7","sha256:1d3120dec6248c3ad1e483874511b2d557f4d4653d54489aca8ffa34d02e5ec1","sha256:1e46563eb07785d8ded60687c274084114556a54558e2b4cc124f8ea6cc5d87b"]
      - values: {"a":"0{,}95","op":"+","b":"0{,}087"}
        answers: ["sha256:78512ccbf48516efded88d40ac288635f8629d69633e1d9be0d089c73de04ddc","sha256:ea68362e3483d04063dbdc9a63458864b791456d633a91b2793fb87f7ee29b65","sha256:4e515631ac97d5b389ba0c8639c258a978693d9898fd54267ff98ec705d5040e"]
      - values: {"a":"25{,}3","op":"-","b":"18{,}76"}
        answers: ["sha256:7f42dc7ba54e30248633e9b44a764b361d34ab780aeb748c2c96fbe435ba439f","sha256:aacb6042958ed41b667bfdc26efb1dbc0d7a66a906eb6f187a2a7b0fdd6c0c4a","sha256:1cfe2c51e660984bcf5e3a76c3bc7f3f6f97e7cdfdd0bf306c78e5927863fd45"]
      - values: {"a":"7{,}08","op":"+","b":"2{,}92"}
        answers: ["sha256:ef272c2b7aabdce86ee904a456f30a7634a7291a9ebfd038a58122dab4b91321","sha256:51a52176dfa84139102a9c98d47904028eb6f215fe5d57e6512478bbfbaa3e04","sha256:ec6bbfd944d8c7ae402f26fe809050ea600db68f30238ae382f66f3e55287236"]
      - values: {"a":"100{,}1","op":"-","b":"0{,}105"}
        answers: ["sha256:44678f3169c7fe6107c347934849c723dd3148c388eb3b323fefc4e693d1869f","sha256:adf23689258d03ef55ae482ff22ed294be24f9469f733fd58788398e5945feb1","sha256:173bb7ca3bcf63e2f8f39bc0e8dd4dd1a69bbfc7fa1bbcec4f455d4956630fa7"]
  - id: multiplicar-decimales
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula ${{a}} \cdot {{b}}$.
    variants:
      - values: {"a":"2{,}5","b":"0{,}36"}
        answers: ["sha256:1c4f224365913cdfa4c848696da384846ff4c2b0f5e40792186ce4f8ae4087fc","sha256:021be9cc06b57f78e0761757c499a2a891593203fcb7dc0d8e77b473851468ff","sha256:c596ae927bd235d3937612d1b2865b2a2330ee00b5806bf441f4be7124062342"]
      - values: {"a":"0{,}12","b":"0{,}5"}
        answers: ["sha256:93217175c0dd581811556923ab35b97dd9f6c9d431843a242f12a40c5903c822","sha256:c825515aa2e1a412dc6e970121ea7a675408ed20477d7526f17c91a77a6ab8ea","sha256:73a6550ecb4c8339f3669705fa08d0760b6b586debe377f0a361eff99057edf1"]
      - values: {"a":"14{,}3","b":"0{,}07"}
        answers: ["sha256:a5f79a92b2f7a7f4c8e50a28a4cc732506a73f361dbc8d2a954e6070c32ed62a","sha256:6b38ad5379e7f9551f020019714d411e06791170934e92aab209812ab6706f17","sha256:5ae1441b1ecec1514133a8776262673dd8f79ee129db6f80ae96922ff970fea5"]
      - values: {"a":"1{,}25","b":"8{,}8"}
        answers: ["sha256:67cf4cdb8165d043cd731e05bf51e4360485c6d8fd8fdb89734dda2e222a2ca7","sha256:4fa09e0c0151f38d60e39c9bdcf0e899b20113a848c533f7d3c2ec1c1681cefb","sha256:38651e99e9866694be5dd181d6359e85fc77fe5ff3db8221d40f006c5ed27b44"]
      - values: {"a":"0{,}006","b":"450"}
        answers: ["sha256:726c8ce2a72b70d15d0aac8caeacb628475701455d17e0a2c22ad7cf01b18042","sha256:c7089bab7fd9ea9a4fff565ac9968492070bd9bb5b9af7d853ecd6689d7d51fb","sha256:2c7a30ea4306106d0ec780a6bf064c4df6026124636499a4809b6acd913c576d"]
      - values: {"a":"3{,}14","b":"2{,}5"}
        answers: ["sha256:ce0663629516623e273113adaf0e7c70d0a8adc7421bec8b15f7b9c083e51a14","sha256:8d8230859b582a511b4c0aac32f6421d94fbbcbfacacb5c2321d18154631e5f5","sha256:c042cb0e498a1bec17175adbba5cef9eea59e88de4fe9c34c53700252842b992"]
  - id: dividir-decimales
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula ${{a}} : {{b}}$ (multiplica dividendo y divisor por la misma potencia de $10$ para que el divisor sea entero).
    variants:
      - values: {"a":"9{,}6","b":"0{,}32"}
        answers: ["sha256:1a761db43ad9e361efbcd816a6abb058e10f03311232709f0c863c5e9e39348d","sha256:f14737c9ddd2ca10260b396fe7acdd103fd6c28ffceefd1d75f06eb31077773e","sha256:9a4cd3637fb0b5ed71725e3b7a6b0f74a6bc6f2fa5490b71af9c4d94f2195420"]
      - values: {"a":"4{,}5","b":"0{,}15"}
        answers: ["sha256:bbb74483534d7f7898836e99a4d963d5128c524b751ebf241673d2b42a5adc25","sha256:cd1604374d1f4d1acddb888c0a31e9edecb7973dd68d703586234616a5d53444","sha256:b57b5e1fc959b1b2dce40e774d13a29ffa2c6b3e6c4b1760c68b67b0a77d920e"]
      - values: {"a":"0{,}84","b":"1{,}2"}
        answers: ["sha256:094047262b83c7e5d7185f632e5822240f813f9cc82f2a7e660d879d28b1a7c6","sha256:af78e98455ef8ad3ae53ee1e0a6b1d0c02a28ddb68d19f6bf4042b22cb68fe76","sha256:268f0c7e9df9840807d1ce4061b843ddf1713920698c9eb0745e8df9b4fb404e"]
      - values: {"a":"17{,}5","b":"0{,}7"}
        answers: ["sha256:d48ceb48dfea8b537cb8c682ae43207c54f79d42b15e93953bbda87169be30af","sha256:481ce7d95ce509975c07309184637646a6807aa7ffb594055f03c82742388015","sha256:2911c08da60a58ddaf2526e35ce4204b74d0283855ddbaaa50ca73226b4b1e22"]
      - values: {"a":"3","b":"0{,}125"}
        answers: ["sha256:62bc7d0c5f24ddc730f4eb744ad6ad7602261479bf10146b7917dcafde54f127","sha256:c781b51994a230d0e92c8333c15eeec6b2db85259c40bdacbd22c192f594c6c1","sha256:5c5879c316594a000dd87f50b2863f57602c4d5ed4dead670e4615322b730470"]
      - values: {"a":"0{,}096","b":"0{,}08"}
        answers: ["sha256:d14a603d19a1c2237c9d3708088493ac42c96561478efb7e0f32f0173ae56a46","sha256:0d7e4c42cf4dec81ac454d5ccf83aa92ce6009cd0d1fe69aa66df2fefba63851","sha256:b9425285968f4d490fde6a5f23d1650514a1e14e95120ac961b4836cbca3a027"]
  - id: generatriz-periodico-puro
    tier: 2
    prompt: |
      Halla la fracción generatriz (irreducible) del decimal periódico puro ${{e}},\overline{{{p}}}$ (el periodo, que se repite sin fin,
      es ${{p}}$). Respuesta: `p/q`.
    variants:
      - values: {"e":"0","p":"27"}
        answers: ["sha256:3eadd86d2622740a91bbe7e84f64a43dce7b6f2e56490445ac444f8e8ea213d5"]
      - values: {"e":"0","p":"5"}
        answers: ["sha256:6523f09afbc5ba27530a3abe3ff0f5db40b2b859346f4425d64edd6d596c6eb5"]
      - values: {"e":"2","p":"18"}
        answers: ["sha256:0e9e99055ec6eda46d2da45ab28211184594d054ea02e8bba8c9d053fe98976a"]
      - values: {"e":"0","p":"142857"}
        answers: ["sha256:2da190e578ddcfcde27e772094a620aacca6b6b5f26f3ce58a42640b4363b509"]
      - values: {"e":"1","p":"6"}
        answers: ["sha256:fdfc31f701148d549f3f9896f8f8f0f5a931199186715bf4a8557d1c266dc139"]
      - values: {"e":"0","p":"054"}
        answers: ["sha256:6d8762ac93a8b10752d2d97c1d612103dadae1c0f2af82578c5b9018dde7f1e5"]
  - id: generatriz-periodico-mixto
    tier: 3
    prompt: |
      Halla la fracción generatriz (irreducible) del decimal periódico mixto ${{e}},{{a}}\overline{{{p}}}$ (anteperiodo ${{a}}$, periodo ${{p}}$).
      Respuesta: `p/q`.
    variants:
      - values: {"e":"0","a":"1","p":"6"}
        answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
      - values: {"e":"2","a":"3","p":"45"}
        answers: ["sha256:aee7d39bfe25815fa9f7c5d64282a799f586693ca7589cda1a1b3b54ad7f20af"]
      - values: {"e":"0","a":"08","p":"3"}
        answers: ["sha256:47ba35745effadff9e578cbc46df1652bbf082998fb90393de64b5c1f5bd1fa6"]
      - values: {"e":"1","a":"2","p":"7"}
        answers: ["sha256:1f2dcfac29419a0e017f47a7117d0da40f8f126ee66e1e6c29ae8cd3b4b3dc44"]
      - values: {"e":"0","a":"45","p":"9"}
        answers: ["sha256:403388bfd823de592a1a86853a7c919cdd3257515bdad33ba2f4f875138c2508"]
      - values: {"e":"3","a":"1","p":"36"}
        answers: ["sha256:904fa7759560bff56c3a8fb5029b22d3b7a4cf6b53038119fd047167457a4a32"]
  - id: longitud-del-periodo
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuántas cifras tiene el periodo de $\dfrac{1}{{{n}}}$? (Haz la división larga y observa cuándo se repite un resto.)
    variants:
      - values: {"n":7}
        answers: ["sha256:c2a53ce42b46f785996de0a52df9e0b57cf82e27f6dcaf047c450291dd7ab8ac","sha256:44d11e1d1f7d78bae311e35ad5c702e0d8cdbc90864e0f19a95cfe09b13b0af4","sha256:02495ecade15510e1a6ea7db06459a999d3d4009b67e8571619b00af20bfbb4f"]
      - values: {"n":13}
        answers: ["sha256:8108d61f66c9335f10890e3a86f8de267de93e494811a0d43cd9c9fe854b3757","sha256:c50e31b862b9d1381b9cfe4e067330d9851fe3e599101fb4ca79527bb2d635fa","sha256:5909fdac692fad43b8cad7159a4c94baeb54a4966bda9ef5f33b4e2ef710de30"]
      - values: {"n":17}
        answers: ["sha256:5a495521bfed4526e8dc324fefb630e4d7a32450dc01c1f323211d7abc4547b0","sha256:74b7a13652c349e957cf77aab0b38beac6e2533e15d92b9798d623d1ff18317b","sha256:63e724480346ca29e4ce53da79da707c1319b42fe81ee380064a4b9c84364df8"]
      - values: {"n":11}
        answers: ["sha256:5ab11e81eba4af1cb8733bdd99d62fff1325c1995f5c03761c305eaa3c71ae75","sha256:6a7ecb4f58492356af146dd31efea2681a282e33e9a8dea03dbcc076eea9b247","sha256:687274659376558e6f843cb0eff4a6164c2170828e0fd009d15d219120a87b26"]
      - values: {"n":37}
        answers: ["sha256:b688b4949f3109bd8672fbb322c909cc5ef61256952f46e25675dfdaac5c9446","sha256:affe6b32f3b44f16d0e4250ed025754e328c016f06d1c1026ae49d161254f20f","sha256:9a726e8632b4986eb4a37abaf9cb70f7e44a13e8c1c3cd5934a895b8677ee65d"]
      - values: {"n":41}
        answers: ["sha256:5a9bae0898312958f93271f1e8860dc7180e683692a42ba8d7bc49821c00010c","sha256:d35e01f6bcbbef19693124c9b97c7895341a288ca4b526f885f588c632f23d9e","sha256:04c46bc4b7ff602af7c2b85c2e4828aec83ec61a06453ebb0897e7315144365f"]
  - id: truncar-y-redondear
    tier: 1
    prompt: |
      Trunca y redondea ${{s}}$ a ${{k}}$ cifras decimales. Respuesta: `truncado;redondeado` (con punto decimal).
    variants:
      - values: {"s":"2{,}71828","k":3}
        answers: ["sha256:0f980801cdc63aa1cf595dbbf7ae8d667d9a8ce5cf8380fcbe6172fb4e1b2376"]
      - values: {"s":"0{,}4545","k":2}
        answers: ["sha256:89e845196b5ad913515ed065c1c584d82ff0316664946d442ef03a8e41375cf6"]
      - values: {"s":"9{,}99961","k":3}
        answers: ["sha256:314a2baa0cd64546f618ac00e41d02018ffcdc84f438ce7377278a0ebf019a73"]
      - values: {"s":"1{,}41421","k":1}
        answers: ["sha256:68612e65e6ad788f04156e50938c714a1be396b7572f68f79a2a43b7f0190547"]
      - values: {"s":"0{,}06149","k":2}
        answers: ["sha256:aec895edc5f5145d5c12ef3be9342e942e74b47983c5e1e91ca2afa29a91a091"]
      - values: {"s":"12{,}34567","k":4}
        answers: ["sha256:40c948680c51d116c55e5c543f4800d22348dd6353ea15697b3d3ed7826c3425"]
  - id: ordenar-decimales
    tier: 1
    prompt: |
      Ordena de menor a mayor: ${{L}}$. Respuesta: separados por `;`, con punto decimal.
    variants:
      - values: {"L":"0{,}3;\\ 0{,}29;\\ 0{,}305;\\ 0{,}03"}
        answers: ["sha256:ea0a22f9dcb40983425401a713374d9e0fc4261e774066d0d1744ccb286ebfa6"]
      - values: {"L":"1{,}5;\\ 1{,}05;\\ 1{,}45;\\ 1{,}505"}
        answers: ["sha256:36b01aa78ff4f94fba6b8033f292927aa794a422a52cfbca6b306db3a3538b64"]
      - values: {"L":"2{,}1;\\ 2{,}09;\\ 2{,}099;\\ 2{,}01"}
        answers: ["sha256:622cc4bb54b90e75809a34ca5b4596b083e11c39f105e1a2ea426c9350dd9e0f"]
      - values: {"L":"0{,}7;\\ 0{,}69;\\ 0{,}071;\\ 0{,}7001"}
        answers: ["sha256:ca90b1a8b17039ac225e6cd7c6b05a607815827ed35eb4f937e63ab0fd530224"]
      - values: {"L":"-0{,}4;\\ -0{,}04;\\ 0{,}04;\\ -0{,}44"}
        answers: ["sha256:b61336113d8750c7bbe4c97d1e00cbd486d5945f9146a16e18523b16d0fa5938"]
      - values: {"L":"3{,}33;\\ 3{,}3;\\ 3{,}303;\\ 3{,}033"}
        answers: ["sha256:d48270577cec6d0167e58baa6cebd3d45d07e3b55bd22c384077ae186f8986f1"]
  - id: la-compra
    tier: 1
    type: numero
    sig: 10
    prompt: |
      En una tienda se compran estos artículos (unidades a precio por unidad): {{L}}. ¿Cuánto se paga en total, en euros?
    variants:
      - values: {"L":"$3$ a $1{,}25$ €, $2$ a $0{,}89$ €, $5$ a $0{,}4$ €"}
        answers: ["sha256:3ad03f60317424dd8f570588185130e0cb194bb6424fd980554b9edf7bd8f67e","sha256:39f69068aa8f53a107a16930139ab8f69b2b768e3eab2eb28bf986338781ebec","sha256:c0f13142d66d0a3c8d4251fc673b098405ce9cb737153133074e610e21a3b4c3"]
      - values: {"L":"$1$ a $12{,}99$ €, $4$ a $2{,}35$ €, $2$ a $0{,}6$ €"}
        answers: ["sha256:c91860f4e06d4d689e936319022b2d369c44353c8ce3d608b58255b40b0191d7","sha256:fe751ba6de1cfd5758b656fc75bb42134dd34199b47250bb8152d12ee9af28e5","sha256:936fd7508c112011fd9b1346e5c1141c6869f1084d13234108056be27df38144"]
      - values: {"L":"$6$ a $0{,}75$ €, $2$ a $3{,}1$ €, $1$ a $8{,}45$ €"}
        answers: ["sha256:78688ca3a92f50e0e13befad405fa711fe2afc043f5a693c7e8037cf35889ab8","sha256:d0139bf6862cb6094121fae31a453e8e0ddb1e9e5103e5302e9d4f9af785ecf3","sha256:0fa26c5a956887232e82c2c13d5b9b3b54586b2bd4410d4259f52767f7647d7a"]
      - values: {"L":"$10$ a $0{,}15$ €, $3$ a $4{,}2$ €, $2$ a $1{,}99$ €"}
        answers: ["sha256:5e6e51ff77f2ac6a9f6d1d1e59feef3abcc8bd2f5e355840c6f540deee9b7f9c","sha256:b78b34199b49fa28511e0e45a9f72f55e6b93974f4e3b582bb992764cec625a3","sha256:9c5e4ecc4a342f5364e26c6c8df2653ce63d6b3aeeeb5da58a4c10f59d6772e3"]
      - values: {"L":"$2$ a $7{,}5$ €, $5$ a $0{,}32$ €, $4$ a $1{,}05$ €"}
        answers: ["sha256:8022eeb3af5a7a034930f6b02cfe1a33eca4e80e869213e7a6e355d274deb3fc","sha256:5fee7f843a12617e18e1a086d9b0b109af9fbed4ccc07cb5e225ffee1a8f098f","sha256:0062979a2647d6f402c22cfbc94f051152f3b54dd6782e6f29058e0861bef98d"]
      - values: {"L":"$3$ a $2{,}99$ €, $3$ a $0{,}01$ €, $1$ a $20$ €"}
        answers: ["sha256:35f21c699be1cec55a918b6952a316b8946161fe387b1b0b96bde55d70d2ae21","sha256:258d3775ff2900a9c75779605c281f22d2c9567153822ca78843e3aca395b6c3","sha256:57532034caf71de773d8a2ad8e6825e4c66162b19d8f9224973a3bec24d148ff"]
  - id: cifra-lejana
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la cifra que ocupa el lugar ${{n}}$ después de la coma en la expresión decimal de $\dfrac{{{a}}}{{{b}}}$? (Busca el periodo y
      usa la división entera para saber en qué punto del ciclo cae.)
    variants:
      - values: {"a":1,"b":7,"n":100}
        answers: ["sha256:a1e4f6c9bca38a7efee90b3f887547e93dc25e07bd4cf5393b37a3b1a3c3948d","sha256:a44884a5575cf4b77f369cb2451aad70d9e0bb1698c3cacc10b6e5779bee618c","sha256:9005e7c61fc46eedb5f42258f4512c304159d25d336249dc5e17698208e83537"]
      - values: {"a":3,"b":13,"n":51}
        answers: ["sha256:ea59e8f68c02f270b16c205d3c0b19bf59aaffcec6ad3e26eee40eeeb90135f5","sha256:1a3b81fafcfe49458e9bb6c6a91b6c369bb723a9b2bb729113fda90e8e8fc290","sha256:04ed751db955349ebed1c6647d0ae40686210f273483304cb8e7d1216f57798a"]
      - values: {"a":2,"b":11,"n":33}
        answers: ["sha256:a03299099ebff026100701c926ac39c4553b9f9140ef86f2a718514c2243479d","sha256:457ab6bf7544ab7f4bc2e91d0e144d952e9785dca479dd9e6f1b5754c096f4a8","sha256:52f99e2bf0da69b6c7f3a2b3a7b6661c18ed78e20039ad33275b359517f0d59a"]
      - values: {"a":5,"b":17,"n":20}
        answers: ["sha256:d002fef8ce34492d177aa2e6076e8c6850d1cca7d77e1ca28642b3ff3101ab2b","sha256:8d5ada72b90dd14c3a6316c2a4d413a6d451cb4b344fb9898c1869cc7c61bfed","sha256:8f1e7a0e7ae6795e838df74640e349e84e65de010fee62610472426814e62595"]
      - values: {"a":1,"b":37,"n":30}
        answers: ["sha256:828daaf6aec433c52f3886f6994838da752a27d2ec42f311b7afd02a08bbc9ee","sha256:270bc5636b3939064134d537b9b6e5ed81162c4becd5df9456dc9222c831fce4","sha256:c0a5a46c08e2d01b734700426fce77ec9b8bcb0e32b1cab8de8553c54d7a7298"]
      - values: {"a":4,"b":41,"n":25}
        answers: ["sha256:f8bb301f751da86993380f11fa7729aacb7450e9a30994b47360ac620aae5f60","sha256:21b3db6989edbe31412828949c099d1b1be6b662e461684646be2013de4b9fcb","sha256:f4ac27cd0327eeb990eddc01b6bebb2f3856caa607769a17468a2ba4032f3763"]
  - id: cero-nueve-periodico
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Usa el método de la fracción generatriz para demostrar que $0{,}\overline{9} = 1$, y explica con tus palabras por qué no
      hay «ningún número entre» $0{,}999\ldots$ y $1$.
    sealed: "gz64:H4sIAAAAAAACCoVSQY7TQBD8SsmaA1izkR1xcSQOaE8ckCL2iDlM7E52xHjG6ZlZEaJIvAaJw36Aa37CS9A4jslmtXCx7HZ1dXVX7TPvTAza2WyR3ZGC+Iq3KPbyUFVVXZvWBS/wIZqge6MbZVuH3jFEWQiZngleXcE/kg8JOQJu8ByEm6shCSEkyKOlRrOEqIYuUdvdSVQpZhB1vTKq+eK3UTEJvLp1FkaBaWMUWkrvG7LEKrD+tkBPrF3rIBJ3tAqNXrOSiWfNqqmqE+/r2tY2z5eOsY3Hn7AO92oHq1oFsoEJZIzzszzHncZ9XGnyhGhhj786YgexEyNQXN9uB1EKmYS1ek1MttEKonx2AAFPfHxUF7S17Z3XQT+4GZbDmKltNKkcTJi4xmpxVZ7qRSl+f/9xpYU8OrLD6oQmKrONmvi0SFGM6opSDP891ZZ8w3qlJJQ/Pg5V69BHatNvxqhZLRKzKJJriaqu3QOx0Zb21WE8C7yzyPPWeQykIbJKATDotO/c+Q55LqE3UZlh2OhdOR9ITh/zN2KWyYzjinWTLT7ts8SWzM8W2dIoGy6j/VSKRDfFe8o2duCUYjSOmZqgOrKB0ow+2uB8tpgf5JMpt842Ju5oCq6cYnvRVV51veNNTNRqWO2FkPzVi0q85Nc5iufISJhIG3c24R/K39tA3DONIpIn/3Pk6UqfD38At9oH7EcEAAA="
  - id: r-mayor-decimal
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué número es mayor, $0{,}45$ o $0{,}5$?
    options:
      - |
        $0{,}5$, porque $0{,}5 = 0{,}50 > 0{,}45$
      - |
        $0{,}45$, porque tiene más cifras
      - |
        Son iguales
      - |
        No se pueden comparar
    answers: ["sha256:332ceaaef122ab47d35f536eec397a6eef607d77c0db3673870340b83611604d"]
  - id: r-multiplicar-por-10
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Calcula $3{,}725 \cdot 100$.
    answers: ["sha256:eabf55c3b8e3f5cee3817c7f93d80bee644500a00e3a9a94fc498ed1c4010921","sha256:6fd06fd9905667e0005a1cb122fb93c0a1f71514ac70f116a6b6ba23fba93f11","sha256:dcf99b936c510cf6e7adbfed4071e268ea1850ca342ca6cef9838d16d8aa8978"]
  - id: r-cuando-exacto
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo da una fracción un decimal exacto?
    options:
      - |
        Cuando el numerador es par
      - |
        Cuando el denominador es primo
      - |
        Cuando el denominador de la fracción irreducible solo tiene los factores primos $2$ y $5$
      - |
        Siempre
    answers: ["sha256:41cf8559548ab56b5259380decb5361da0a72577ded0bab6e4a1f4f579a1a449"]
  - id: r-generatriz-un-tercio
    tier: 1
    review: true
    prompt: |
      ¿Qué fracción irreducible es $0{,}\overline{3}$? Respuesta: `p/q`.
    answers: ["sha256:0d7f0e336166042f8cc9e4c20ae427ba367c279d6e3dfd1bd7247b0fbce61d50"]
  - id: r-redondeo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Redondea $4{,}65$ a las décimas (con la regla: si la cifra siguiente es $5$ o más, se sube).
    answers: ["sha256:17b2c08e7ddede535795ab2e8510e472c80fc48d758a506f0dadebca5a3aa9a6","sha256:7ea99a8c509595a18996129ef5b01e36d696dfff4ec88d1b30fbf9d3e548e477","sha256:4a5baa6aceb8e403e6cab49c06180643d79515d8fcd56d643738c19a0a9711c9"]
  - id: r-dividir-por-decimal
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Calcula $2 : 0{,}05$.
    answers: ["sha256:b5df43be5a0825cb983e0d038a22c81432b81c109c86c0667712b13b876aa6c2","sha256:738b9f38efb5f41d938992767b8afede5315daa2bc63a1b5a458904f677cde31","sha256:7bf1699a4efedcb8421b36916af9656acd52d08abdaa047d5540f584d2ba4a50"]
  - id: r-producto-menor
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo es $8 \cdot 0{,}6$ comparado con $8$?
    options:
      - |
        Siempre mayor que $8$
      - |
        Menor que $8$, porque se toma menos de una vez
      - |
        Igual a $8$
      - |
        Negativo
    answers: ["sha256:1936d964a8eec56c0a308d814b00ed207f997368cb02d5b86809a8e420d65378"]
---

# Expresiones decimales: posiciones, operaciones, decimales periódicos, fracción generatriz y redondeo

Los precios ($2{,}35$ €), las medidas ($1{,}72$ m), las notas ($7{,}5$) y casi todo lo que sale de una calculadora son **números
decimales**. Son otra forma de escribir fracciones: $0{,}75 = \frac34$. Este nodo explica cómo se leen, cómo se opera con ellos (y
dónde poner la coma), por qué algunas fracciones dan decimales que nunca terminan ($\frac13 = 0{,}333\ldots$) y cómo se vuelve de
esos decimales infinitos a la fracción. Termina con el redondeo, imprescindible para dar resultados con sentido.

## Objetivos

Al terminar sabrás:

1. Leer decimales por posiciones (décimas, centésimas, milésimas…) y compararlos.
2. Pasar de decimal exacto a fracción y de fracción a decimal, y saber de antemano si será exacto o periódico.
3. Sumar, restar, multiplicar y dividir decimales colocando bien la coma.
4. Hallar la fracción generatriz de un decimal periódico puro o mixto.
5. Truncar y redondear, y estimar el error que se comete.

## Qué debes dominar antes

[[mat-fracciones]] (equivalencia, simplificación) y la división entera de [[mat-sistema-decimal-operaciones]].

> [!question] Test de entrada
> 1. ¿Cuánto es $\frac{3}{10}$ escrito como decimal?
> 2. Simplifica $\frac{25}{100}$.
> 3. ¿Cuál es el resto de $10 : 7$?
>
> Respuestas: $0{,}3$; $\frac14$; $3$.

## 1. Para qué sirve

- **Dinero y medidas**: todos los precios y casi todas las medidas son decimales; un error con la coma multiplica o divide por
  $10$.
- **Calculadoras y ordenadores**: muestran decimales, y saber si un resultado es exacto o un redondeo evita errores. Los
  ordenadores tampoco guardan exactamente $0{,}1$ ([[prog-pensamiento-computacional]]).
- **Ciencias**: los datos experimentales se dan con un número de decimales que indica su precisión (el tema `fis-magnitudes-medida`).

## 2. Qué es un número decimal

> [!practico]
> Un euro se divide en $100$ céntimos: $2{,}35$ € son $2$ euros, $3$ monedas de $10$ céntimos y $5$ de un céntimo. Cada posición
> después de la coma vale **diez veces menos** que la anterior, igual que hacia la izquierda cada posición valía diez veces
> más. Las décimas, centésimas y milésimas son las «monedas pequeñas» del sistema decimal.

Las posiciones a la derecha de la coma son las **décimas** ($\frac1{10}$), **centésimas** ($\frac1{100}$), **milésimas** ($\frac1{1000}$),
diezmilésimas… En $3{,}725$: $3$ unidades, $7$ décimas, $2$ centésimas y $5$ milésimas, es decir $3 + \frac7{10} + \frac2{100} + \frac5{1000}$.

**Comparar**: se comparan primero las partes enteras y después cifra a cifra; añadir ceros a la derecha no cambia el número
($0{,}5 = 0{,}50$), así que $0{,}5 > 0{,}45$ aunque $45 > 5$.

**Decimal exacto → fracción**: el número sin coma entre la potencia de $10$ que indica la última cifra, y se simplifica:
$0{,}35 = \frac{35}{100} = \frac{7}{20}$.

**En la recta**: se divide cada unidad en $10$ (décimas) y cada décima en $10$ (centésimas), como en una regla con milímetros.

## 3. Operaciones con decimales

> [!practico]
> Para sumar precios se colocan los euros bajo los euros y los céntimos bajo los céntimos: comas alineadas. Para multiplicar
> se puede olvidar la coma, multiplicar como enteros y al final contar cuántas cifras decimales había entre los dos.

- **Suma y resta**: se alinean las comas (completando con ceros) y se opera como con enteros: $2{,}4 + 0{,}75 = 2{,}40 + 0{,}75 = 3{,}15$.
- **Producto**: se multiplica sin comas y el resultado lleva tantas cifras decimales como los dos factores juntos:
  $1{,}2 \cdot 0{,}35$: $12 \cdot 35 = 420$, con $1 + 2 = 3$ cifras decimales, $0{,}420 = 0{,}42$.
- **Multiplicar o dividir por $10, 100, 1\,000$**: la coma se corre a la derecha o a la izquierda tantos lugares como ceros.
- **División**: si el divisor tiene decimales, se multiplican dividendo y divisor por la misma potencia de $10$ hasta que el
  divisor sea entero (el cociente no cambia, como en las fracciones equivalentes): $7{,}5 : 0{,}25 = 750 : 25 = 30$.

> [!formal] Con rigor: por qué funciona la regla del producto
> $1{,}2 = \frac{12}{10}$ y $0{,}35 = \frac{35}{100}$, así que $1{,}2 \cdot 0{,}35 = \frac{12 \cdot 35}{10 \cdot 100} = \frac{420}{1000} = 0{,}420$. El número de cifras
> decimales del producto es el exponente de la potencia de $10$ del denominador, que es la suma de los exponentes de los dos
> factores. Del mismo modo, en la división, $\frac{7{,}5}{0{,}25} = \frac{7{,}5 \cdot 100}{0{,}25 \cdot 100}$ porque multiplicar arriba y abajo por lo mismo
> da una fracción equivalente. $\blacksquare$

## 4. De fracción a decimal: exactos y periódicos

> [!practico]
> Si repartes $3$ pizzas entre $8$ personas, la división termina: $0{,}375$ por persona. Si repartes $1$ entre $3$, nunca termina:
> $0{,}333\ldots$ Y no es casualidad: al hacer la división, los restos solo pueden ser $0, 1, 2$; si nunca sale $0$, tarde o temprano
> se repite uno, y desde ahí las cifras se repiten para siempre.

Para pasar una fracción a decimal se divide el numerador entre el denominador: $\frac38 = 0{,}375$ (**decimal exacto**); $\frac13 = 0{,}333\ldots = 0{,}\overline{3}$
(**periódico puro**: el periodo empieza justo tras la coma); $\frac16 = 0{,}1666\ldots = 0{,}1\overline{6}$ (**periódico mixto**: hay un
**anteperiodo**, $1$, antes del periodo).

**Saber el tipo sin dividir.** Se simplifica la fracción. Si el denominador solo tiene los factores primos $2$ y $5$, el decimal es
**exacto** (porque se puede convertir en una potencia de $10$: $\frac38 = \frac{375}{1000}$). Si tiene algún otro primo ($3$, $7$, $11$…), es
**periódico**. Por eso $\frac{7}{20}$ es exacto ($20 = 2^2 \cdot 5$) y $\frac{5}{12}$ es periódico ($12 = 2^2 \cdot 3$).

**La longitud del periodo** de $\frac1n$ es como mucho $n - 1$ (hay $n - 1$ restos posibles distintos de $0$): $\frac17 = 0{,}\overline{142857}$
tiene periodo de $6$ cifras.

## 5. De decimal periódico a fracción: la fracción generatriz

> [!practico]
> Un decimal que se repite para siempre parece imposible de escribir como fracción, pero hay un truco: si copias el número y lo
> corres un periodo a la izquierda, las dos colas infinitas son idénticas, y al restar desaparecen.

**Periódico puro.** $x = 0{,}\overline{36} = 0{,}363636\ldots$ Multiplicando por $100$ (dos cifras de periodo), $100x = 36{,}3636\ldots$ Restando,
$99x = 36$ y $x = \frac{36}{99} = \frac4{11}$. **Regla:** el periodo entre tantos nueves como cifras tiene, más la parte entera.

**Periódico mixto.** $x = 1{,}2\overline{3} = 1{,}2333\ldots$ Se multiplica por $100$ (hasta el final del primer periodo) y por $10$ (hasta su
principio): $100x = 123{,}333\ldots$ y $10x = 12{,}333\ldots$ Restando, $90x = 111$ y $x = \frac{111}{90} = \frac{37}{30}$. **Regla:** (el número sin
coma hasta el final del primer periodo menos el número sin coma hasta el anteperiodo) entre tantos nueves como cifras de periodo
seguidos de tantos ceros como cifras de anteperiodo: $\frac{123 - 12}{90}$.

> [!formal] Con rigor: todo decimal periódico es una fracción, y toda fracción da un decimal exacto o periódico
> Lo segundo es el argumento de los restos de la sección 4. Lo primero es el cálculo de la generatriz: restar elimina la cola
> porque las dos colas son la **misma** serie infinita. (Si se quiere evitar «restar infinitos», $0{,}\overline{36} = \frac{36}{100} + \frac{36}{100^2} + \dots$ es
> una serie geométrica de razón $\frac1{100}$, cuya suma es $\frac{36/100}{1 - 1/100} = \frac{36}{99}$; ver [[mat-sucesiones-progresiones]].)
> Así, los números racionales (fracciones) son exactamente los decimales exactos o periódicos; los decimales infinitos no
> periódicos, como $\sqrt 2 = 1{,}41421\ldots$, son los irracionales ([[mat-numeros-reales]]). $\blacksquare$

## 6. Aproximaciones: truncar y redondear

> [!practico]
> Nadie paga $3{,}14159$ €: se redondea a céntimos. Truncar es cortar sin mirar lo que viene después; redondear es quedarse con el
> valor más cercano, mirando la primera cifra que se quita. Redondear se equivoca menos.

**Truncar** a $k$ decimales es quitar todas las cifras después de la $k$-ésima: $\pi \approx 3{,}14159$ truncado a centésimas es $3{,}14$.
**Redondear** es truncar y, si la primera cifra quitada es $5$ o más, sumar una unidad a la última conservada: $\pi$ redondeado a
milésimas es $3{,}142$ (la siguiente cifra es $5$). Al redondear puede haber arrastre: $9{,}9996$ a milésimas es $10{,}000$.

El **error absoluto** es la diferencia (en valor absoluto) entre el valor real y la aproximación; redondeando a $k$ decimales nunca
pasa de media unidad de la última cifra ($0{,}5 \cdot 10^{-k}$), mientras que truncando puede llegar casi a una unidad.

## 7. Errores típicos

- Pensar que $0{,}45 > 0{,}5$ porque $45 > 5$.
- Alinear a la derecha en vez de alinear las comas al sumar.
- Contar mal las cifras decimales del producto, o poner la coma del cociente sin ajustar el divisor.
- Escribir la generatriz de un periódico mixto como si fuese puro.
- Truncar cuando se pide redondear (o redondear mirando la cifra equivocada).
- Creer que $0{,}\overline 9$ es «un poco menos» que $1$ (son el mismo número; ver el desarrollo).

## 8. Resumen

- Posiciones: décimas, centésimas, milésimas…; un decimal exacto es una fracción con denominador potencia de $10$.
- Suma y resta con comas alineadas; producto contando cifras decimales; división haciendo entero el divisor.
- Fracción → decimal: exacto si el denominador irreducible solo tiene $2$ y $5$; si no, periódico (puro o mixto).
- Generatriz: restar copias corridas del número para eliminar el periodo; puro $\frac{\text{periodo}}{99\ldots9}$.
- Racionales = decimales exactos o periódicos.
- Truncar corta; redondear mira la primera cifra que se quita; error de redondeo $\le 0{,}5 \cdot 10^{-k}$.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se comparan decimales.
2. Cuántas cifras decimales tiene un producto.
3. Cómo saber sin dividir si una fracción da un decimal exacto.
4. La fracción generatriz de un periódico puro y de uno mixto.
5. La diferencia entre truncar y redondear.

## Siguiente

[[mat-sistema-metrico]] (las unidades de medida son decimales), [[mat-proporcionalidad]] y [[mat-porcentajes-finanzas]].
