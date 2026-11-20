---
id: mat-calculo-1
title: "Cálculo I: límites, derivadas y optimización"
area: matematicas
trunk_level: 8
prerequisites: [mat-algebra-secundaria, mat-trigonometria, mat-geometria-analitica]
academic_sources:
  - "Spivak, M. Calculus, 4ª ed. Publish or Perish, 2008."
  - "Apostol, T. M. Calculus, vol. 1, 2ª ed. Wiley, 1967."
  - "Stewart, J. Calculus: Early Transcendentals. Cengage Learning (varias ediciones)."
  - "Courant, R.; John, F. Introduction to Calculus and Analysis, vol. 1. Springer (reedición de Classics in Mathematics)."
hints:
  - "Concepto: la derivada es la tasa de cambio instantánea, el límite de la pendiente de rectas secantes; en los problemas de optimización se deriva, se iguala a cero y se comprueba si es máximo o mínimo (y se miran los extremos del intervalo). Con límites indeterminados 0/0, factoriza, usa límites notables o L'Hôpital."
  - "Herramienta: comprueba cada derivada con diferencias finitas, (f(x+h) − f(x−h)) / (2h) con h pequeño (por ejemplo 1e-5) en Python; para optimización, un barrido numérico con un bucle confirma el extremo; sympy (`diff`, `limit`, `solve`) sirve para contrastar a mano."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html (derivadas y límites); Spivak, capítulos sobre límites, continuidad, derivadas y aplicaciones; Apostol, vol. 1, capítulos de derivación y de aplicaciones."
exercises:
  - id: limite-factorizando
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Calcula $\displaystyle\lim_{x\to {{a}}} \frac{x^2 - {{a2}}}{x - {{a}}}$. Respuesta: un número.
    variants:
      - values: {"a":3,"a2":9}
        answers: ["sha256:0a8a817a5f84b54d887ce4deb3a74bca834213c57da05df36da3a23e9c0f12f1","sha256:7cde7250d4ae0c0278c04e4770fc2d3a7ac83654cbaffc085b62acc2259e6579","sha256:d707186fe8fb77b1de9a59d08c88ddda746c4c87845778401a0e9813efbd1f90"]
      - values: {"a":4,"a2":16}
        answers: ["sha256:fd40f38d3d415393fde02069ca5ae4b3c0dbd54f31e8f09ddfb1159bd53e0075","sha256:22fafb9f69f25dd382e92dbd5936e68452be60bee8fd307aa1557d67ee43ae30","sha256:0b390692792211f95866a07ae4ebb3591d43ebc371aa5d990edd3c0e5b34cb45"]
      - values: {"a":5,"a2":25}
        answers: ["sha256:aa537ced45e06a3698b65689c9b06a824183ca38e446fc3bfe49dab85f8aa6c1","sha256:a3cd8795fe929d3152365b7dc4149859dbf6036784a052d5e3a5b71048a5ccd9","sha256:d1c0b4b36cf20b4e4430fcaa6b249930d0c1d749ce700c1f3de451aec844e6f7"]
      - values: {"a":7,"a2":49}
        answers: ["sha256:88973b803231ee432516c941811c62230f9f56d94d118b35463c9126f6a656ee","sha256:200ee2409aa7db8f0aee2b1145d8f5715a933e71f58b0df412fe573ee2ffec29","sha256:3418a3be1049c02b20baf8652de86763d1401b69679df7850f61ba984d4f8dcb"]
      - values: {"a":2,"a2":4}
        answers: ["sha256:a49a831d69f208c3c7ad9972c27b19c55bc214aa324626d34f3f6e61829dae63","sha256:c02c4a83b5cd7834e300d7e622d539f1d5cd62aa94116406ab2467fb12c97b4e","sha256:4a39345ad97339975a0885b545ee6ff12fc954be7281a668480802b61687aefa"]
      - values: {"a":6,"a2":36}
        answers: ["sha256:b4e86fc0a562cfa7d2e951d10f5599ae0254f4e47802b2f16944fa09fbafa401","sha256:15ee440f2a541a140cf9481da6551bcf157907e73e5a5f2dc60afc7fc9c78aae","sha256:6e7167e7915bff8ab2788f09330e8a920076b3bcb31e55f0660711a8d22fd961"]
      - values: {"a":9,"a2":81}
        answers: ["sha256:f19733d9cbea68324060d07edc3aeeab2e811c29b71b0ac984a54d8ac0fbe5cf","sha256:e0af001e1a0f184bcfe3510e49868be57d3ac618738bd8fd6b79002fa8cd658a","sha256:59af736f365b7657839a37b99a6aa9c82c8c8861a611e7703acce6049da20e65"]
      - values: {"a":11,"a2":121}
        answers: ["sha256:a19d88f983fee1f34fad9d2021307e8b84d6552b70e2488080da2d0020c12bdd","sha256:3c65decd0326276c29393cdaffb489ca15c5452672a6e293025a7befc1e06140","sha256:487868058b91699089abba8385ab756aa1e94c29e45c6a61f0869fb5045c20a2"]
  - id: derivada-polinomio
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Sea $f(x) = {{a}}x^4 - {{b}}x^2 + {{c}}$. Calcula $f'({{k}})$. Respuesta: un número.
    variants:
      - values: {"a":3,"b":2,"c":7,"k":2}
        answers: ["sha256:082d9377593f6457a8fe50247b24e30d513141718f04b6d4f1ee66ae692c99d7","sha256:0fedd067253ffe581b8e49a4fcb00a23c4508ef36ce77e487a60f38f48de1aff","sha256:a9626329ce48d1798ae80a24616718a60acc8537bd6fc96f1479ba16b516bf66"]
      - values: {"a":2,"b":5,"c":1,"k":1}
        answers: ["sha256:d6e4d7f0f09a32287ecab0ae950656fba4d737ffb07b44fa715cb5392dcf6334","sha256:b10e7ed7e646e5876cbd65bc938a93b50fbf3d0ba90af50ca1d36bd891b5264e","sha256:9a2a3ddd8b1981fc1e7aaaa6675f31785a7e599371871c621bf3ed2ebaa01df0"]
      - values: {"a":6,"b":3,"c":4,"k":3}
        answers: ["sha256:ef809f694a5cd572a35956b8d37dba7dc4bd4b987f28aed3d8885fd50deb981e","sha256:04d692eb37b58eab3d4ac0c0192671b10a648b12797b7c041c10bcf952d36022","sha256:b06a6707ceaac2db12b946b9df821c73b99b52374bc8eccc8ca2f8e32bc650b4"]
      - values: {"a":4,"b":3,"c":9,"k":-1}
        answers: ["sha256:2a9d690a29ab19084f0dc695df95032fb37366464fce121c34e057a1123d50a9","sha256:8a735532c3cd90b6f04104076d920a7425b25fa0fd0455c4ab902d16fd824a09","sha256:fdec211d6eb7790abfbb49e42f1fa957963b76f74d76c68a866294f8521ad97c"]
      - values: {"a":2,"b":7,"c":3,"k":2}
        answers: ["sha256:3bd7553190a457b683651b51c50f6b198c879c1a569b761d23d4b692aa1adab2","sha256:f970ffc30fac0a49b035e1fe5664308a95d5c33e5d7bb590184ce961d5a89757","sha256:ff6efb1dc150f373d046ffc69699a1d13802844680eed9052890525ca2dcc910"]
      - values: {"a":5,"b":2,"c":6,"k":-2}
        answers: ["sha256:45530fb79eacc985a2803ac7d90b59cfcf3e609caed18cc80650112ab88441db","sha256:21e1f8462fb3584ee9b89b9436638cb2b0b2af9f581d44790b16f19b1cc9e639","sha256:873ff38a36ad98392774e2630af6ba5faea376c23952f75bdd82ec3551eb62d7"]
      - values: {"a":2,"b":6,"c":2,"k":4}
        answers: ["sha256:2c31e26c7021c1a8dfa1e32f4078b4d76f8740190ac9aeb656e2fdc5e5ac43d6","sha256:bb3708ff673155fd7f6310916152ac584096ea188240397cacfddb5b3c8bbf7c","sha256:e926ec1fbec85455f219202c71ea090ee8335345c86261eeb7a16817bae561be"]
      - values: {"a":3,"b":4,"c":8,"k":-3}
        answers: ["sha256:fb7a1b15a73c21bc13650b845ecdd5070ea36d45b0601b15ca4b6db6cd7bb8b1","sha256:4210c5c6bcb3b4aace7f79c6fca1cafe3ecf827c9f05decb5feb82ce0139c0a4","sha256:95f470df0512db8d895feda687db4e960af37e1765ccca6f0438000d91158612"]
  - id: pendiente-de-la-tangente
    tier: 1
    prompt: |
      ¿Cuál es la pendiente de la recta tangente a $y = x^3$ en el punto de abscisa $x = 2$? Respuesta: un número.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: limite-notable
    tier: 2
    prompt: |
      Calcula $\displaystyle\lim_{x \to 0}\frac{\sin 5x}{x}$ (usa $\lim_{u\to0}\frac{\sin u}{u} = 1$). Respuesta: un número.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: derivada-del-producto
    tier: 2
    type: expresion
    vars: ["x"]
    domain: [-2,2]
    prompt: |
      Sea $f(x) = x^2 e^x$. Escribe $f'(x)$. Respuesta: una expresión en $x$ (por ejemplo `x^2*e^x` o en LaTeX); vale
      cualquier forma equivalente.
    answers: ["sha256:6e66fb54b9506fdc7f26cd46eb4cead5968fe2287d97f326c39c6001f5be0062","sha256:eb9cebcb799ac5008fab90541db7be6a6aaae4d2175f1d2be947c28835d74eeb","sha256:a7643cc176136853a462261d5ea940c5d70ad6c522eca7a97f36afbdbd58bc54","sha256:06935b3e14a5cdf25dad017678e7ac9eadbb2cb4a88a8f4f8a0d457fbe8c30f2","sha256:dda9c5a61ffe774dd8e3189a087afb2c80a2b70dfd0e6cf40e53717233f0aa3d","sha256:2107d293d90d3203ab2dac3165a3030315c1be97edd32c0cc9457b0fd64ce6b4","sha256:74014929ef31f657d4d77d7751968650fe728c27058e022d432bfa7ef1034e1f","sha256:01b2ae67c4b78a13e474c7b49ad7365dc31d7e086fc9b1edf14ef78f34556577"]
  - id: derivada-de-ln
    tier: 2
    type: expresion
    vars: ["x"]
    domain: [-2,2]
    prompt: |
      Sea $f(x) = \ln(x^2 + {{a}})$. Escribe $f'(x)$. Respuesta: una expresión en $x$.
    variants:
      - values: {"a":1}
        answers: ["sha256:9cfd06326f8f96222d9cafa0fa0525c5bb8e4f3af7c0c41e5ba562e4891246f7","sha256:ad705758485d2e422c13606a5611a3a93a491a9f872ec470118004a586b24f82","sha256:dcb0ee76281a1c4459d830a02171ca5fd06b48cf2127915f998f2e1e431df5da","sha256:1bf46bd30ea78e3a149ffabc4e789b1e4e99537bb649d9124fae94823862a5a9","sha256:bf66e72c73244f3a51b9b06c8a5c473646d2b3d5e956fb1911761c7d0f76c22c","sha256:363a4bf484d5d84467c97ddfe16130d82cdf0d9a20a8fcd7ff37af3848e2c7a2","sha256:1041616c6627ad677a62573e4fd96e2922d00e6ca76c84aa5653c98dd1f79599","sha256:d14bfdd4a5e7807807c217cf16b0000a4ca322cb225c294e772cdd58a54cc2e2"]
      - values: {"a":2}
        answers: ["sha256:d0fe6c6e8e48a37bc660666543c336f8d65cd149534677ce0abec687819bec9b","sha256:7b0071945cf49c3147a921dae3e6a999bddbd8569cd15d3e66dcd7722396f19a","sha256:950f2c5584b745da3d1b8195febf601d202bedd2131bf7d33dec5149abbfdcc8","sha256:1169587f8dcfda1e228e4ef8b5b2cff8dc3d76f61f3bb7d60dd814ef35d1a975","sha256:80e55729ac1a3edb55efa6255c6cb483547162187a96c78254551eca384d01c8","sha256:14549d16a19eb00d37d3fc16147d28d43d222a2e9409d40332f6d4790c2c85e9","sha256:66319f3f9c767a7ce39070cec796e79527d632dfb76bc042ed7557159e4123ba","sha256:a36638e97648aef7684cd10c54e16cb54b4d054418edd4c0e12d5faf21f2b2f3"]
      - values: {"a":3}
        answers: ["sha256:4a22defb913f1c860a785211329695958ccdf110da8ea74b84fa8877aa1b16f3","sha256:8bae8c25fe925c0e38802354eda48ee91423701bcfbbb0acaf66c4010f1a91fe","sha256:734cfe3cd5a09bf29cc85d3a4589d3d8fc7eb424df6f9fd3e4321196e95dfc46","sha256:0ec4c3520975fce0d6cdb02e5adee852e72b5bc0c06ed636ad7a3fb38226cf35","sha256:dc752edb13185c6043ca2be9e26a0949c453b0a86b979f4fdd0d34c7ad259238","sha256:1bda5feb5ed694435f1ceb9e173ffdf1bc5d784db77343d4d2f4236627b697d3","sha256:679dfe8f3c16635d783ee3e4c54b6d5a7198aadfd3320d5e9ca2aac0b30dc548","sha256:80208f575a6d0fabbff3bbc3c4f899221f88885feaae5a4a7214641b788e4992"]
      - values: {"a":4}
        answers: ["sha256:f1b7f124dff4fb61c87ef8ea8a9783ba4e18f08793d7ea00123cb020857eca8a","sha256:ae5d54f7a403a6ace8edf7f3097b6bc5b683107b5c180803285d7b0069329af7","sha256:0754ddbb3170789469370b1be234033474cd2dc1e407cbdacd2daa57bf5d7287","sha256:526e6afc8adb4a507dc2442a67b918ba919926186c5e443cbcab07b28431ee9e","sha256:0669e28b380026454e9ffc8d561312abe4431ee60a74c4c3946b9222465afcc8","sha256:4bc9caa0082a1d6abfac6ecbd3c3498d70dad566db8ed159859d74dd6c11403f","sha256:5dcff51cc0f2e6cfdab1d97f1cf8c8b32df17b1fef6e6d7f05312062c02e96fe","sha256:ce8334d18f8be0acf524f816c1d8d851696f16727629372f16a3b822b823f4c8"]
      - values: {"a":5}
        answers: ["sha256:4e44cc8d3faed4aabc4ac263547ce02735a775e9c9ffcf9cb14382a1cb488848","sha256:674133063510a5aa2db31cbd53bfe4d8a6071c0a34cbd34f155df4eeb414cb82","sha256:763af7ce21ec397b6fd05150b212f765c3a4ec3cf690a315fd1ad84a7fb7ddc1","sha256:8b5faa19f163aa15655beca7275b23bc15959558779d99ef2cb8100296369e1a","sha256:ba7d51b7e65da3f295eb57d54d354721d867d21fb89bdd6ac0c8193ab9c3d489","sha256:79ab62cac7c336a08be2945c420bd4bc6169dd5a57d636ed1ec786c34b301a9f","sha256:e2a33eb00c5aad361c1e0491d46be9744c8bbc68f6a5c91974712102b462c6ae","sha256:b12c112d071bfa4f9b871c875a6b25fcf8a5b567fc92fb401f40c5a2354ae35d"]
      - values: {"a":9}
        answers: ["sha256:dd6e10bb2d48d0402601bbe9e73a016fbdb496041602c2a2ebcf6077a8213e44","sha256:6469c7dad1bc2f73d07b758c05f5c35a26bfda43fd47d1d082281f0d1d6f52b4","sha256:1ba72bd3d154e2602cb70a268bcda8fbb5fb17c0e3aec448d97507b716927711","sha256:d6db34e0a398586901a172e7eeb4324487a6694c9c44b2b6ae066956d4b3f61a","sha256:71b02e1441d2c986edd809e0ef82fcb56ae95615157b241d930b184aefd34c75","sha256:4a63ad238fbfc0d30218ea6965c83c292314a0d5055c4f27e6613fed89706c42","sha256:f2dfb0c9a81b42bcec782a9f5749fe29ae9ff902d08ac3801410ea634300301b","sha256:0d4b39024136b11deecb4ff6fd0cd48381f033629dbf476e0092ceb45dbcaccf"]
  - id: regla-de-la-cadena
    tier: 2
    type: expresion
    vars: ["x"]
    domain: [-2,2]
    prompt: |
      Sea $f(x) = \sin(x^2)$. Escribe $f'(x)$. Respuesta: una expresión en $x$ (`sin`, `cos`, `^`); vale cualquier forma
      equivalente.
    answers: ["sha256:cdde19f3bbc93a4d2040bb3a4f1433c70b570568e185ca012a103ee825bf12e8","sha256:4044811e7cb02ca976ede1c99f035ed61e749d35550c6018f8e153c811c91d1e","sha256:ba50efc155cdf0ed12c8af9ef7fc51aea5c6e1936cb37525d797b80bbaeef429","sha256:53b41b3f09509725f158f0ded4ca23791cb9b47903ccf348009fce032744dda3","sha256:4868fe08e143fe442583bb2768b515b541bdfabf815dafb1f1e750e76ca7d6e1","sha256:a3ceca64f62677a9e19d25d8c3bf206b948ef3ed07d3b1ecc8fa8c8dcb1b6a01","sha256:ae0648a049ee043661efc24ebe00710d5a88a069bc1d52bf1abf4eb4f0966563","sha256:60dcbb09639f9f3bbbd4bb6a4df590b4c524d57557fa10553a75c961c9225cbe"]
  - id: maximo-de-parabola
    tier: 2
    prompt: |
      ¿Cuál es el valor **máximo** de $f(x) = -x^2 + 6x + 1$? Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: caja-de-volumen-maximo
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Con una lámina cuadrada de cartón de {{L}} cm de lado se hace una caja sin tapa: se recorta un cuadrado de lado $x$ en
      cada esquina y se doblan los bordes. ¿Cuál es el **volumen máximo** de la caja, en cm³? Respuesta: un número.
    variants:
      - values: {"L":12}
        answers: ["sha256:77b390c3a9113f42d4b393dd8d034a5e8715c4ffd7942c2b260277a14d6e57ee","sha256:667a6f76db77c83d961a1b6a856b23613427b2512c6deea3964a737510ac7e88","sha256:7e5661330cd005658f8024cf238430cf1de5e45a0165b7265681bf42419ec366"]
      - values: {"L":6}
        answers: ["sha256:0b6af0e24ab54c03b69ea8dfd04f16039b79f58f4a7266b4b455f590c9b86abb","sha256:b1ec05969cc8a27b96e8ba40c31621ebb18d2faceef4021135dc82dc5f3b2ef6","sha256:03297a934026a7c50ffca4245b2c0f06a457a5114f53810a8502b87efca05521"]
      - values: {"L":18}
        answers: ["sha256:449127719a0cd488b98553a4735e3d4c8a3cb67bf1c1ed298258fa3080f4d545","sha256:483f5926dda73dbc2299d125d9a550a1f786e356d49865aefbeea37f6ad6a6b2","sha256:2eb49221954ff2928eb7e9222245879e6c6d988cc0f7477b741de833e0333645"]
      - values: {"L":24}
        answers: ["sha256:3bdaeca837dd5292e9c14dc14fc80102eb3d6dee853c6e9578a86f9032933a7a","sha256:10d03efeef4734f0c7b4bab8dc46ef1813fe700470f02942bb659c44aa4fe163","sha256:3b9eb9a730d958d1656e6a34fd35fbd242c8843ea40d0d3d8d0d1bed689c1864"]
      - values: {"L":30}
        answers: ["sha256:149629d8e308b8d895ada90c98ec6d4e58c280835731284032351decc03aa75b","sha256:58b963eb417a7bb1a2d3abd076ba19cb598d3a434b2f511b504f52c0c7cfad84","sha256:1a1a2885adba1f525b8eabffcf1ce5d3e47747d75a5d65b5e143ca5a034c870c"]
      - values: {"L":36}
        answers: ["sha256:749707fffae983c9c539b699d39c00a9f0f62fdb62468e4f11bb511f932c3a92","sha256:e523a309e141c4e486f7424c57355b5eda0e98f2b9ff2180ffe1db7aed3fa66c","sha256:f5e8534e6032f46c5de040135e2ae6a72c9713ba7e48255919ab343a2b2c47ee"]
  - id: velocidad-cero
    tier: 2
    prompt: |
      La posición de una partícula es $s(t) = t^3 - 6t^2 + 9t$ metros, con $t$ en segundos. ¿En qué instante $t > 0$ se anula su velocidad **por segunda vez**?
      Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: limite-con-lhopital
    tier: 3
    prompt: |
      Calcula $\displaystyle\lim_{x \to 0}\frac{e^x - 1 - x}{x^2}$ (aplica la regla de L'Hôpital las veces necesarias). Respuesta: fracción «a/b».
    answers: ["sha256:d939926f05444b0f4495fb9629ecbfa80d99a8ec1a20d06800ca5a3d5f4fd276"]
  - id: metodo-de-newton
    tier: 3
    prompt: |
      El método de Newton para resolver $x^2 - 2 = 0$ itera $x_{n+1} = x_n - \dfrac{x_n^2 - 2}{2x_n}$. Partiendo de $x_0 = 1$, calcula $x_3$.
      Respuesta: **ocho decimales, truncando** (sin redondear).
    answers: ["sha256:d93d75b55c459a18e110f89866da81090b8d425da3b9afee49fa508850552a9d"]
  - id: razones-relacionadas
    tier: 3
    prompt: |
      Se infla un globo esférico y su radio crece a $2$ cm/s. En el instante en que el radio es $10$ cm, el volumen crece a $k\pi$ cm$^3$/s. ¿Cuánto vale $k$? ($V = \frac43\pi r^3$.)
      Respuesta: un número.
    answers: ["sha256:1a1cf797fabe7f95836fabeca626907c77b3e6c9aff7c2290b396a238c69362e"]
  - id: maximo-local-cubica
    tier: 3
    prompt: |
      La función $f(x) = x^3 - 12x$ tiene un máximo local. ¿Cuál es el valor de $f$ en ese máximo? Respuesta: un número.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: aproximacion-lineal
    tier: 3
    prompt: |
      Usa la recta tangente a $y = \sqrt{x}$ en $x = 4$ para aproximar $\sqrt{4{,}2}$. Respuesta: **dos decimales**.
    answers: ["sha256:797897e9ae3e1831c46fe0859265d8fc37bf113ff3b60c7d37a1f9782b0b24d3"]
  - id: biseccion
    tier: 3
    prompt: |
      El método de bisección parte de un intervalo $[1, 2]$ donde $f(x) = x^3 - x - 1$ cambia de signo (teorema del valor intermedio) y lo divide por la mitad en cada paso.
      ¿Cuántas bisecciones hacen falta, como mínimo, para que el intervalo final mida **menos de $10^{-6}$**? Respuesta: un entero.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: r-derivada-cociente
    tier: 2
    type: expresion
    review: true
    vars: ["x"]
    domain: [0,3]
    prompt: |
      Deriva $f(x) = \dfrac{x}{x+1}$ y escribe $f'(x)$ (cualquier forma equivalente).
    answers: ["sha256:bfd68be50c07b549c1bd038efa8bd4d862ecc6e26afd9bc59f6bd15ffb673634","sha256:d24565a142e2b7dba3c91c11a4971c5108f4afdb324977fccc58e6c44225a573","sha256:403cc3eb54f110b9f57d678f7e62e0c26dc8dd386a746b66895a478426371128","sha256:56a4752ec764ebafd84245df8a2b0060ce9628ae62df7b7086e8e5fff7cb914b","sha256:7654b95161f19b67c67db6d64d6e7c88dce98370e1b6e9cbb686f8f9139d6241","sha256:cb241648ad6a887b070451e2c2a7f9bc02eeecd2a279b60c2f1e4f032195d5b1","sha256:de4c43d541a011d640360561e108e990b6cbb9818d9bde537c952f98ee8f0b94","sha256:447c7a70d18da78f86c6a7bbfb60e9fb85a19c7a34654a0b7064c75752302c07"]
  - id: r-derivada-factorizada
    tier: 2
    type: expresion
    review: true
    vars: ["x"]
    form: factorizada
    prompt: |
      Deriva $f(x) = x^3 - 12x$ y escribe $f'(x)$ **factorizada** (como producto de factores). Te dice dónde la tangente es
      horizontal.
    answers: ["sha256:f8a64fe9d14d7e8ecbec6fc2d255f7bb5884eff946752f1ca7b84353a51ab710","sha256:eca1771ceed8398c5bb3384ff4367615a484ed624dd1524d96e34c0647edcb95","sha256:71ea2795da3c6cedbc64d3d7a162fd2a51afc7d68312c5d65f4038e5bd7b9dcf","sha256:bd0c7847d4e214e9e2a9873bf7dcd75b3277ab20b3a2b5795a9515518541b26e","sha256:2ab46d8993e072d443d1906ad16f17880fd71dad8f7835832a130d7911f18282","sha256:5ad49eccbcc8e35032199b880e43f269de3f3ae8b5c23746f90839234c10f11f","sha256:83bd732bdeb716031091fcc067dd95bf47314c6ba6afb1e8c7c80fd00aa0c880","sha256:6ac6e692af392cf399129f5424b8f450ffa54ba2a8a7e1720cfab70bf39353fb","sha256:975f084e348d0b4f1498954565fc7c935256307f3236cb4af92a1bf6d50b908a"]
  - id: r-velocidad
    tier: 1
    type: expresion
    review: true
    vars: ["t"]
    domain: [0,4]
    prompt: |
      Un objeto se mueve según $s(t) = t^3 - 6t^2 + 9t$ (metros, segundos). Escribe su velocidad $v(t)$.
    answers: ["sha256:0a93e3c84b3956eaacd34d4d3cc119e99c63130186610f6c3bbece9bba4c3843","sha256:8660155ce48641893a54e3ec2b37478ae6d7911f23545df47579c0dd2d592e5e","sha256:7bd73ad4b50dba08628d4f3bced2bdc10567c72c00f68c74fe460a073e201b11","sha256:216a03bce6a82331a57d628842ca2ce9081360616da3af0dbc966e8f1ce706d5","sha256:d4962f15d0a6d4143763e47d8d79be5c50d460847b96a1c4bc3d2bbeb55daf39","sha256:2178a4484d88e3b602da39c7fdde9171f94e2926d95c79e5de97a41efe8454d7","sha256:f76f5e82ac11d41cf3feee3e71c75bcdb3ee88949af263c7f22fa87102cf0f69","sha256:cbea2da479a061d39d5b15348d8b96470a8de7d5707424eb558ea2f3cb79d0a0"]
  - id: r-tangente-horizontal
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si $f'(a) = 0$, ¿qué puedes asegurar **siempre**? (Piensa en $f(x) = x^3$ en $a = 0$.)
    options:
      - |
        $f$ tiene un máximo o un mínimo en $a$
      - |
        La recta tangente a la gráfica en $a$ es horizontal
      - |
        $f(a) = 0$
      - |
        $f$ no es derivable en $a$
    answers: ["sha256:2311f9e3e6c127cdbd5e064e686d1374d0a3a464188a2079e6daaa678f8d1412"]
  - id: r-lhopital-trampa
    tier: 3
    type: opcion
    review: true
    prompt: |
      ¿Se puede aplicar la regla de L'Hôpital a $\displaystyle\lim_{x\to 1}\frac{x^2+1}{x-1}$?
    options:
      - |
        Sí: derivando arriba y abajo da $2x/1 \to 2$
      - |
        Sí, y el límite vale $0$
      - |
        No: no es una indeterminación $0/0$ ni $\infty/\infty$; el límite no existe (por la derecha tiende a $+\infty$ y por la izquierda a $-\infty$)
    answers: ["sha256:044c6b25a6bd60b5e7e98f60a95c1bcfa22167b80a47a8753e2f3b26585148a5"]
---

# Cálculo I: límites, derivadas y optimización

El **cálculo** es el estudio matemático del **cambio**. Newton y Leibniz lo inventaron, cada uno por su cuenta, a finales del siglo XVII para describir el movimiento de los planetas, y desde entonces es el idioma de la física, la
ingeniería, la economía y el aprendizaje automático (entrenar una red neuronal consiste en seguir derivadas: ver [[ia-redes-profundas]]). Este nodo cubre la mitad **diferencial**: cómo se mide
**qué tan deprisa cambia** una cantidad, y cómo se usa eso para optimizar y aproximar. La otra mitad, la acumulación, es `mat-calculo-2`.

## Objetivos

Al terminar sabrás:

1. Entender y calcular límites, y reconocer continuidad.
2. Definir la derivada, calcularla con las reglas (producto, cociente, cadena) y conocer las derivadas de las funciones elementales.
3. Interpretarla: pendiente de la tangente, velocidad, tasa de variación.
4. Usar derivadas para estudiar el crecimiento, los extremos, la concavidad y para resolver **problemas de optimización**.
5. Aplicar L'Hôpital, la aproximación lineal, el método de Newton y la bisección.
6. Resolver problemas de razones relacionadas.

> [!question] Test de entrada
> 1. ¿Cuál es la pendiente de la recta por $(1, 1)$ y $(3, 9)$? 2. Si $f(x) = x^2$, ¿cuánto vale $f(3) - f(2)$? 3. ¿Para qué valor de $x$ alcanza su mínimo $y = (x - 4)^2 + 1$?
>
> Respuestas: $4$; $5$; $x = 4$.

## 1. Para qué sirve

- **Física**: velocidad es la derivada de la posición; aceleración, la de la velocidad ([[fis-medida-movimiento]]).
- **Optimizar**: el mínimo coste, la máxima área, el menor tiempo, el mayor beneficio: siempre un máximo o un mínimo.
- **Aproximar**: sustituir una función complicada por una recta cercana (linealización), base de la mayoría de los métodos numéricos.
- **Aprendizaje automático**: entrenar un modelo es minimizar una función de error siguiendo su derivada (descenso del gradiente).
- **Economía y biología**: crecimiento, costes marginales, tasas.

## 2. Límites

La idea: $\displaystyle\lim_{x\to a} f(x) = L$ significa que $f(x)$ se acerca a $L$ **tanto como queramos** al acercar $x$ a $a$ (sin que importe lo que ocurra **en** $a$). Formalmente (Weierstrass):
para cada $\varepsilon > 0$ existe $\delta > 0$ tal que $0 < |x - a| < \delta \Rightarrow |f(x) - L| < \varepsilon$.

**Ejemplo (la definición en acción).** $\displaystyle\lim_{x\to 2}(3x - 1) = 5$: dado $\varepsilon$, basta $\delta = \varepsilon/3$, porque $|(3x - 1) - 5| = 3|x - 2| < 3\delta = \varepsilon$.

**Propiedades.** Si existen $\lim f$ y $\lim g$: el límite de una suma, producto y cociente (con denominador no nulo) es la suma, producto y cociente de los límites. Para polinomios y funciones elementales en su dominio, el límite en $a$ es $f(a)$
(**continuidad**).

**Formas indeterminadas $\frac00$.** Se resuelven simplificando. $\displaystyle\lim_{x\to 3}\frac{x^2 - 9}{x - 3} = \lim_{x\to3}(x + 3) = 6$ (la función no está definida en $3$, pero el límite existe). Con radicales,
se multiplica por el conjugado: $\displaystyle\lim_{x\to4}\frac{\sqrt x - 2}{x - 4} = \lim\frac{1}{\sqrt x + 2} = \frac14$.

**Límites laterales.** $\lim_{x\to a^-}$ y $\lim_{x\to a^+}$; el límite existe si y solo si ambos existen y coinciden. Y **límites en el infinito**: $\displaystyle\lim_{x\to\infty}\frac{3x^2 + 1}{x^2 - 5} = 3$
(se divide por la mayor potencia).

**Límites notables.**

$$
\lim_{x\to0}\frac{\sin x}{x} = 1, \qquad \lim_{n\to\infty}\Bigl(1 + \frac1n\Bigr)^n = e, \qquad \lim_{h\to0}\frac{e^h - 1}{h} = 1 .
$$

*Demostración del primero.* En el círculo unidad, para $0 < x < \frac\pi2$, el área del triángulo $\frac12\sin x$ es menor que la del sector $\frac12 x$, que es menor que la del triángulo mayor $\frac12\tan x$. Dividiendo por $\frac12\sin x$:
$1 < \frac{x}{\sin x} < \frac{1}{\cos x}$, es decir $\cos x < \frac{\sin x}{x} < 1$. Como $\cos x \to 1$, por el **teorema del sándwich** $\frac{\sin x}{x} \to 1$. $\blacksquare$
Con él: $\displaystyle\lim_{x\to0}\frac{\sin 5x}{x} = 5\lim\frac{\sin 5x}{5x} = 5$.

### Continuidad y dos teoremas fundamentales

$f$ es **continua** en $a$ si $\lim_{x\to a}f(x) = f(a)$: su gráfica no se rompe. Para funciones continuas en un intervalo **cerrado** $[a, b]$:

- **Teorema del valor intermedio**: si $f(a)$ y $f(b)$ tienen signos opuestos, **existe** $c\in(a,b)$ con $f(c) = 0$.
- **Teorema de Weierstrass**: $f$ alcanza un **máximo y un mínimo absolutos** en $[a, b]$.

El primero da un **algoritmo**: el método de **bisección**. Se parte un intervalo $[a, b]$ con cambio de signo; se toma el punto medio, y nos quedamos con la mitad donde sigue habiendo cambio de signo. Cada paso divide la longitud por $2$:
para llegar a una precisión $\varepsilon$ desde un intervalo de longitud $L$ hacen falta $\lceil\log_2(L/\varepsilon)\rceil$ pasos. Para $x^3 - x - 1$ en $[1, 2]$ con $10^{-6}$: $20$ pasos (la raíz es $\approx 1{,}3247$).

## 3. La derivada

La **derivada** de $f$ en $a$ es el límite de la pendiente de la recta secante cuando el segundo punto se acerca al primero:

$$
f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h} .
$$

Es la **pendiente de la tangente** a la gráfica en $(a, f(a))$ y la **tasa de variación instantánea**. En física, si $s(t)$ es la posición, $s'(t)$ es la velocidad. Se escribe también $\frac{df}{dx}$ (Leibniz).

**Ejemplo (desde la definición).** $f(x) = x^2$: $\dfrac{(a + h)^2 - a^2}{h} = \dfrac{2ah + h^2}{h} = 2a + h \to 2a$. Luego $(x^2)' = 2x$. Con $f(x) = \sqrt x$: multiplicando por el conjugado,
$\dfrac{\sqrt{a + h} - \sqrt a}{h} = \dfrac{1}{\sqrt{a + h} + \sqrt a} \to \dfrac{1}{2\sqrt a}$.

**Derivable implica continua**, pero no al revés: $|x|$ es continua en $0$ y no tiene derivada (una esquina).

### Reglas de derivación

| Función | Derivada |
|---|---|
| $c$ (constante) | $0$ |
| $x^n$ | $n\,x^{n-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\dfrac1x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\dfrac{1}{\cos^2 x}$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ |

Para combinarlas:

$$
(f + g)' = f' + g',\quad (cf)' = cf',\quad (fg)' = f'g + fg',\quad \Bigl(\frac fg\Bigr)' = \frac{f'g - fg'}{g^2},\quad (f\circ g)'(x) = f'(g(x))\,g'(x) .
$$

*Demostración de la regla de la potencia ($n$ natural).* $(a + h)^n = a^n + n a^{n-1}h + \binom n2 a^{n-2}h^2 + \cdots$ (binomio de Newton); restando $a^n$ y dividiendo por $h$ queda $n a^{n-1} + h(\cdots) \to n a^{n-1}$. $\blacksquare$
*Demostración del producto.* $\dfrac{f(x + h)g(x + h) - f(x)g(x)}{h} = \dfrac{f(x + h) - f(x)}{h}g(x + h) + f(x)\dfrac{g(x + h) - g(x)}{h}$, y al hacer $h\to0$ (usando que $g$ es continua) sale $f'g + fg'$. $\blacksquare$
*La derivada de $\sin$:* $\dfrac{\sin(x + h) - \sin x}{h} = \sin x\,\dfrac{\cos h - 1}{h} + \cos x\,\dfrac{\sin h}{h} \to \cos x$, porque $\frac{\sin h}{h}\to1$ y $\frac{\cos h - 1}{h}\to0$. $\blacksquare$

**Ejemplos resueltos.**

- $\bigl(x^3\sin x\bigr)' = 3x^2\sin x + x^3\cos x$.
- $\left(\dfrac{x}{x^2 + 1}\right)' = \dfrac{1\cdot(x^2 + 1) - x\cdot2x}{(x^2 + 1)^2} = \dfrac{1 - x^2}{(x^2 + 1)^2}$.
- *Cadena:* $\bigl(e^{3x^2}\bigr)' = e^{3x^2}\cdot6x$; $\bigl(\ln(\cos x)\bigr)' = \dfrac{-\sin x}{\cos x} = -\tan x$.

**Derivadas de orden superior:** $f''$ es la derivada de $f'$; en física, aceleración.

## 4. Qué dice la derivada sobre la función

**Teorema del valor medio.** Si $f$ es continua en $[a, b]$ y derivable en $(a, b)$, existe $c$ con $f'(c) = \dfrac{f(b) - f(a)}{b - a}$ (en algún instante la tasa instantánea es igual a la media).
*Ejemplo:* un coche recorre $150$ km en $1{,}5$ h (media $100$ km/h): en algún instante marcó **exactamente** $100$ km/h. *Consecuencia:* si $f' > 0$ en un intervalo, $f$ es **creciente**; si $f' < 0$, **decreciente**.

**Extremos.** Un máximo o mínimo local en un punto interior cumple $f'(c) = 0$ (**punto crítico**). Para decidir cuál:

- **Primera derivada**: si $f'$ pasa de $+$ a $-$, máximo; de $-$ a $+$, mínimo.
- **Segunda derivada**: $f''(c) > 0$, mínimo; $f''(c) < 0$, máximo. (La **concavidad**: $f'' > 0$ la gráfica «sonríe»; los puntos donde cambia son de **inflexión**.)

**Ejemplo resuelto: $f(x) = x^3 - 3x$.** $f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)$: puntos críticos $\pm1$. $f''(x) = 6x$: en $x = -1$, $f'' < 0$, **máximo** de valor $f(-1) = 2$; en $x = 1$, **mínimo** de valor $-2$; inflexión en $x = 0$.
Para un máximo o mínimo **absoluto** en un intervalo cerrado hay que comparar los puntos críticos **y los extremos** del intervalo.

### Optimización

Se sigue siempre el mismo método: **1)** dibujar y definir variables; **2)** escribir la magnitud a optimizar como función de **una** variable; **3)** derivar, igualar a cero y resolver; **4)** comprobar que es el extremo buscado (y los extremos del dominio); **5)** contestar con unidades.

**Ejemplo resuelto.** De una lámina cuadrada de $30$ cm se recortan cuadrados de lado $x$ en las esquinas para hacer una caja sin tapa. $V(x) = x(30 - 2x)^2$ con $0 < x < 15$.
$V'(x) = (30 - 2x)^2 - 4x(30 - 2x) = (30 - 2x)(30 - 6x)$; se anula en $x = 5$ (y en $15$, que no da caja). $V(5) = 5\cdot400 = 2000$ cm$^3$: el máximo, porque $V(0) = V(15) = 0$.

**Otro ejemplo (la luz toma el camino más rápido).** Fermat (1662) propuso que la luz sigue el camino de **tiempo mínimo**. Minimizando el tiempo total entre dos puntos de medios con velocidades $v_1$ y $v_2$ se obtiene
$\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$: la **ley de Snell** (ver [[fis-ondas-calor-fluidos]]). Una ley física sale de un problema de optimización.

## 5. Razones relacionadas

Cuando varias magnitudes cambian con el tiempo y están ligadas por una ecuación, se **deriva respecto al tiempo** (regla de la cadena). **Ejemplo resuelto.** Una escalera de $5$ m resbala por una pared: $x^2 + y^2 = 25$. Si el pie se aleja a $0{,}3$ m/s,
cuando $x = 3$ ($y = 4$): $2x\dot x + 2y\dot y = 0 \Rightarrow \dot y = -\frac{x}{y}\dot x = -\frac34\cdot0{,}3 = -0{,}225$ m/s: la parte alta baja a $0{,}225$ m/s.

## 6. Linealización, L'Hôpital y Newton

**Aproximación lineal.** Cerca de $a$, $f(x) \approx f(a) + f'(a)(x - a)$ (la recta tangente). **Ejemplo:** $\sqrt{9{,}3}$: $f(9) = 3$, $f'(9) = \frac16$; $\sqrt{9{,}3} \approx 3 + \frac{0{,}3}{6} = 3{,}05$ (valor real $3{,}0496$). Es la base de casi
todos los métodos numéricos y de la física en «pequeñas oscilaciones».

**Regla de L'Hôpital.** Si $\frac{f}{g}$ da $\frac00$ o $\frac\infty\infty$ en $a$ y $\frac{f'}{g'}$ tiene límite, entonces $\lim\frac fg = \lim\frac{f'}{g'}$.
**Ejemplo:** $\displaystyle\lim_{x\to0}\frac{1 - \cos x}{x^2} = \lim\frac{\sin x}{2x} = \frac12$. (Hay que comprobar que es indeterminación antes de aplicarla.)

**Método de Newton.** Para resolver $f(x) = 0$, se sustituye la curva por su tangente: desde $x_n$, la tangente corta el eje en

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} .
$$

Para $\sqrt2$ ($f = x^2 - 2$): $x_{n+1} = \frac12\bigl(x_n + \frac{2}{x_n}\bigr)$. Desde $x_0 = 1$: $1,\ 1{,}5,\ 1{,}41\overline{6},\ 1{,}41421569,\ 1{,}41421356\ldots$: **el número de cifras correctas se duplica** en cada paso
(convergencia **cuadrática**), muy superior a los $20$ pasos de la bisección. Pero requiere $f'$ y un valor inicial razonable; si no, puede divergir.

```python
def newton(f, df, x0, pasos=6):
    x = x0
    for _ in range(pasos):
        x = x - f(x) / df(x)
    return x

print(newton(lambda x: x * x - 2, lambda x: 2 * x, 1.0))   # 1.4142135623730951
```

## 7. Cómo estudiar una función

1. **Dominio** y puntos de discontinuidad; **cortes** con los ejes.
2. **Asíntotas**: verticales (donde el límite es $\pm\infty$), horizontales y oblicuas (límites en $\pm\infty$).
3. **Primera derivada**: crecimiento y extremos.
4. **Segunda derivada**: concavidad e inflexiones.
5. **Dibujo** y comprobación con un valor concreto.

## 8. Errores típicos

- Aplicar L'Hôpital sin comprobar que es una indeterminación $\frac00$ o $\frac\infty\infty$.
- Derivar un producto como producto de derivadas, o olvidar la derivada interior en la cadena.
- Suponer que $f'(c) = 0$ implica extremo (contraejemplo: $x^3$ en $0$).
- Olvidar los **extremos del intervalo** al optimizar en $[a, b]$.
- En razones relacionadas, sustituir los valores numéricos **antes** de derivar.
- Confundir que el límite exista con que la función esté definida en el punto.
- Usar el método de Newton con $f'(x_n) = 0$ o desde un punto lejano.

## Repaso: lo que debe quedarte dentro de un mes

1. $f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h}$: pendiente de la tangente y tasa instantánea.
2. $(x^n)' = nx^{n-1}$; producto, cociente, cadena; $(\sin x)' = \cos x$, $(e^x)' = e^x$, $(\ln x)' = 1/x$.
3. Extremos: $f' = 0$ y signo de $f''$; comparar con los extremos del intervalo.
4. Optimización en cinco pasos; Fermat $\Rightarrow$ Snell.
5. Newton $x_{n+1} = x_n - f/f'$ (cuadrático); bisección $\lceil\log_2(L/\varepsilon)\rceil$ pasos.

## Siguiente

`mat-calculo-2` estudia la operación inversa: la **integral**, el área bajo una curva y el **teorema fundamental** que une ambas mitades.
