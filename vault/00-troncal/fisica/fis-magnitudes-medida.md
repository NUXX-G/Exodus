---
id: fis-magnitudes-medida
title: "Magnitudes y medida: Sistema Internacional, prefijos, conversión de unidades, notación científica, cifras significativas, errores y análisis dimensional"
area: fisica
trunk_level: 3
prerequisites: [mat-potencias-raices, mat-sistema-metrico, mat-ecuaciones-primer-grado]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 1: «Unidades y medidas» (alcance y escala de la física, unidades y estándares, conversión de unidades, análisis dimensional, estimaciones de Fermi, cifras significativas, resolución de problemas). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/1-introduccion"
  - "Bureau International des Poids et Mesures (BIPM), «The International System of Units (SI)», 9.ª ed. (2019): definiciones de las siete unidades básicas a partir de constantes fundamentales. https://www.bipm.org/en/publications/si-brochure"
  - "JCGM 100:2008, «Evaluation of measurement data — Guide to the expression of uncertainty in measurement» (GUM), BIPM: incertidumbre de medida."
hints:
  - "Concepto: medir es comparar con una unidad. Toda medida es un número, una unidad y una incertidumbre; las cifras significativas dicen cuántas cifras son fiables. Las dos partes de una ecuación física deben tener las mismas dimensiones."
  - "Herramienta: para convertir, multiplica por factores de conversión que valen 1 (1000 m / 1 km) hasta que se tachen las unidades; en superficies y volúmenes el factor va al cuadrado o al cubo. En productos y cocientes, el resultado lleva tantas cifras significativas como el dato que menos tenga."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 1; folleto del SI del BIPM."
exercises:
  - id: convertir-velocidades
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Expresa ${{v}}$ {{a}} en {{b}} (al menos cuatro cifras significativas).
    variants:
      - values: {"v":"90","a":"km/h","b":"m/s"}
        answers: ["sha256:82fd66e24c2b32171708b21621415b18d288d6fce30dec92ca2a628190e52475","sha256:527a18c901396d5e7f2fb5299ddafe71311f990f54824d1a1773469cd1480c32","sha256:622f40ad7ac1cf3a625e0b02b674e3179e846aff67722dd41f5f59f1f51d4868"]
      - values: {"v":"15","a":"m/s","b":"km/h"}
        answers: ["sha256:b12f4b78cc378d363a34ed344c1b4cd6eca7efadbde1d27b016324f65c2ce53d","sha256:e0ccc496d7076088b6fbeabe77ebe024fd0f09ae8b01a3ef13667c5a6bd1ef04","sha256:7b829b717bd648efe97d194bd5d0ac3425f787752830807fd258cb0ee3aa89c1"]
      - values: {"v":"120","a":"km/h","b":"m/s"}
        answers: ["sha256:f995d828efcd77c0899cf065fe6e72a1fbe92478138c485569c4ed1387ef3abb","sha256:8732266215589b8e6ea1498da8985056bde79ac8a8324b83414896016f564691","sha256:e17691d88b04c5127f60af169f1c85faa4a934bf78f0ae02b43403a2b9e81b21"]
      - values: {"v":"340","a":"m/s","b":"km/h"}
        answers: ["sha256:1b363ac5b9344c6d013e74c3296ba9cc0ace40b463608e1f0b55947c5ac22f3c","sha256:9ec2eb591a197ad3c94b53feaadd0c9570fa0b40a9ed668f400d80ced3e83627","sha256:49a79b066cd1c6a4ef697140024e9aeb729da36baf343fe6c3cbadde68ccd58b"]
      - values: {"v":"36","a":"km/h","b":"m/s"}
        answers: ["sha256:95cf15efb9f94501482f44843d92c622a28f4896cad8d4f26de155c2554770df","sha256:333ef4c3d30778aa99a6787b824950a1d4ef424e7aa756f5f3036d9113f8ea3e","sha256:118725478fe279491009a489309360abc0049b5a94f499d30f6cfea942592b6d"]
      - values: {"v":"2{,}5","a":"m/s","b":"km/h"}
        answers: ["sha256:963f78312cbbdfa2dc4dcfa8897b1333821ae437cd9084d7aa4be037591314df","sha256:44dd4dda0064c242f63dcb5b06db0313eef525d966517eb2c3d577910f8160c2","sha256:8c067dac1690dd54033f6833f2600f394963b03d1e883d93487bb55910dfa3e8"]
  - id: prefijos-del-si
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Expresa ${{x}}\ \mathrm{{{p}}{{u}}}$ en $\mathrm{{{q}}{{u}}}$.
    variants:
      - values: {"x":"3{,}5","p":"G","q":"k","u":"W"}
        answers: ["sha256:67472ebfc678b1ea2a25475bf35a938b795222110d2ef8151dca478b77c96795","sha256:70ca52e4c3a7b3cefcf00b1e82043b11d149c48f262fc695ad65c26fbbc0ce5f","sha256:beda0f63e26ee4d238c476beea12eb0e69ed91ecb8800799590e1de43f975202"]
      - values: {"x":"250","p":"n","q":"\\mu ","u":"m"}
        answers: ["sha256:6632d99d3df6da3149f3d4f53c5a5c55bbf8fbfdf339e411089078bb45509a3d","sha256:dae065fe4f437f0bb3c1e9c994876b5845df35f813dd62b181b4614e7d86257d","sha256:a49aa6e3d5a5688cd1080c6d4d40ae6fc5b34adb8c29f6ec921cec8d52a176a1"]
      - values: {"x":"4{,}2","p":"M","q":"k","u":"Hz"}
        answers: ["sha256:0dcc7b607b5d2902c79553d043d4dafc745f2840918eaeb07d75df7478114a8b","sha256:d7facb04e56a0096d5d577bb6d5ab4cca6e92203cb354ed7e6e59458c79a353f","sha256:71be553609f8afd11da73cd9ce872c7350b7e077683941669d7c908806bddcd1"]
      - values: {"x":"780","p":"\\mu ","q":"m","u":"s"}
        answers: ["sha256:a28520ae73d1bd981a4f3011865114cb381498e2b98cbaa9ada3f26123bde0ea","sha256:ed52eb5249ef0886c2043426670f30b5125053326a8800244f024468a483f427","sha256:54f9f582c7e4d19b52c8a710bef60d55384c14fedb44631ed1796116af8bfe32"]
      - values: {"x":"0{,}6","p":"k","q":"m","u":"g"}
        answers: ["sha256:9b2b5364757515c3c27896eac32fd0a2cba178b3f74ecdb997e5f8c5bf188ef0","sha256:8a38d5defb93cc098ef4b49dfc86e6c736233fda68f4af52ac7a96586074a8ea","sha256:33383ffa43fa492e97d0f91a717a0e239de4b5fa1123784e2e6fe24f65982e00"]
      - values: {"x":"12","p":"c","q":"\\mu ","u":"m"}
        answers: ["sha256:c89b1705333ec895feebf1aa25bc691ef052a063c3877fce0bb43b0886191cb9","sha256:fae1228aab31412ea9c00e4855819244686d7caf2bd2ba7434824fc824160689","sha256:7fd116d052605846f6d1193f7634974b7b4a75af7ad959c70811cf146a49d9d9"]
  - id: superficies-y-volumenes
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Expresa ${{x}}\ \mathrm{{{a}}}$ en $\mathrm{{{b}}}$.
    variants:
      - values: {"x":"2{,}5","a":"m^2","b":"cm^2"}
        answers: ["sha256:f7e6ff4b4b71bb5940060f802eb31426679e274d8b78c7178c1d888f271574cb","sha256:a44752c1a901997389cf8aa40e36833c7bfef46ec20f962dbc7f9add485e8286","sha256:87bdc7648da0b1da2a16e3313ababce767c7b7a48ff3e293a6d07f0a985671a5"]
      - values: {"x":"3","a":"L","b":"cm^3"}
        answers: ["sha256:236b2905301fe6947a19794b50ae3c6e2e7b4131b199f730ebd75bc9e5d014e7","sha256:eaa2989050ec8c86ca89d9c9141fe2244d17a8956ff07341c69dae7f63a6ecd0","sha256:fd7a65005186b3a41037d033405fb07b42a4323a329e0c8c409f1fda3148d250"]
      - values: {"x":"0{,}8","a":"km^2","b":"m^2"}
        answers: ["sha256:ea7c1f96d3d66624b282571cb75e6861f17965a995e253aa7195de60787f95d1","sha256:cf951f3aaf9f46f93c61b836f49890fe36ca3562104990712a4df0bf1eab8986","sha256:3a33f82e04f37096867e51cbed1ff223f45bf6f6ac9426f2287b73d72625c3e1"]
      - values: {"x":"450","a":"cm^3","b":"m^3"}
        answers: ["sha256:b1b77760c2c27c27666f51d4a084fe817e863f4ed12c1470aa474171812e9dde","sha256:7d16991b69819c234fc34d654db7bb83f79640c1149a652dc51f108fbd904372","sha256:9b6fdf1458a4eb7bf74a239d5df4f51ecc8d21fa23fa9db48910d76861eaea79"]
      - values: {"x":"1{,}2","a":"m^3","b":"L"}
        answers: ["sha256:ada8ad74a69ffa461ae35b79ecb8792d271a809cc3deb8a91d4443e58f9ada1f","sha256:4d76e93a5dffc2f64232396a5d52b335fccb87787d52a60153a3633c77e9fdfb","sha256:b51f406265e4b292f663fa78eb3a071255ce3ac96a17ed5bcfd1d5e8ba3c3d62"]
      - values: {"x":"6500","a":"mm^2","b":"m^2"}
        answers: ["sha256:fefd107de609409f401bfebc353aa35f711047a1eb192e3a783c860e380dcd4f","sha256:5dc2b1db33267dd7be27f44f5bd3321eeebe1859a9bd7985fc61b9398081133c","sha256:d8f54da6f2df5bcc9f460e6e03d6e68162f5939bf8574827700315d73a20179c"]
  - id: contar-cifras-significativas
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuántas cifras significativas tiene la medida ${{s}}$?
    variants:
      - values: {"s":"0{,}0072"}
        answers: ["sha256:28a53d0396d773f5db9e90cf948773dbd59d146bcfa33bfb592e989d4eb4bb3b","sha256:a292c61c9532184c31a6d0e8b2ea43d46c9bf7f3bc9077bf03e5fc2d0bd31df7","sha256:59b2617cc9c6cf730cd442c58cb97e841aba54590349c0eb7e1aa73851d26acc"]
      - values: {"s":"305{,}0"}
        answers: ["sha256:862d3ef8172caeb5150909ac17796595e7b8deb1a7585b841a1e00246abfaa3d","sha256:6b16f066c1de1709c76ca15d7889845e39552117fc6ce6e771f7402700412a38","sha256:fd0b1bacde18f59b713e47be0b747a2b14cef322697b390662d28f47a1f83b57"]
      - values: {"s":"1{,}200"}
        answers: ["sha256:44719aa3327bcdeb48a21600199f56a5b060e9e3b5c663562c907082ef7efe9a","sha256:d191ebf273f64a2497deeb385947e81177cce0863f38f0b379aa64d206170ed7","sha256:06643344f206e9caa26822a612ac47902f60d63c53e3fd88553a866c1cb5eb97"]
      - values: {"s":"0{,}10200"}
        answers: ["sha256:0253fbca12fd43d87b2a9237446f6916338d840a87ed841f2b5540272c783be1","sha256:2e1d3c1bc86a651cd16b80f00b0fa46acfbd170f8dc5b105100dc62a3a5aa46a","sha256:0fea9884463da9cbfa739d1a881dc28070cfdca43485be78ec5debbaa224f039"]
      - values: {"s":"40{,}07"}
        answers: ["sha256:fb834a08b7702cd9be835a089faf1193fc2c545fcce107872ef7280de0988720","sha256:a15ae4eccf4bbf1e23c6044e10587a40f5dd5ac5a539cc8d01732a46d1b20d50","sha256:60b5db7713926bc693a2a3a8ab958220172a1a6d659cf98b0f18824fe650dad1"]
      - values: {"s":"6{,}0230"}
        answers: ["sha256:549560f641883fa9f01d9c13fd975b33b13e74f814ea06ffa30cd369d58d1d48","sha256:d3300c829d38a7f3899818fcbc9e3e202e40e03ee222e457b0234d6e936fdc92","sha256:08a0f4dfb61e6dd113a76fabd14546860259d1200e74986ae807573c682b227b"]
  - id: producto-con-cifras-significativas
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula ${{L}}$ y redondea el resultado al número de cifras significativas que corresponde (el de la medida con menos cifras).
    variants:
      - values: {"L":"2{,}45 \\times 3{,}1","n":2}
        answers: ["sha256:671e128a2e10ff718cfc6a0873974fa3059ee12c15f2dd0b3ab2d72b312cd400","sha256:2f369d37480496ad44a02d4de78e5a841e4cb1d2e97fc5d43d706e9a95c071f1","sha256:08588b0bf9907f9abc03ec7c8ce9a9c56b5a717198d82789ba43ef7fe10cefde"]
      - values: {"L":"12{,}30 \\times 0{,}0451","n":3}
        answers: ["sha256:f46bdc0a168a9b19bdf5c046fc1d3ba548f6af0cf4dfb1904dd455099f5a7e37","sha256:e3f0736f4ce6b8bc8c5f1e337c48c359165b702c2e9762b7631cad6330408f54","sha256:9265bdaef01b71a32314722d2de11c33cee07af63c2e1e48f6b4527527fb5564"]
      - values: {"L":"6{,}0 \\times 7{,}25 \\times 1{,}12","n":2}
        answers: ["sha256:0f1c641f36dd796620d91080bf2c82c1ca9637c5d253b6b91fd53feb229341b3","sha256:a8f9b0efbe7105c19cbb260b6df29725be5669530d73cd7c3075fdfc89f279a9","sha256:829dfa480f224ea0f584bd00a518e0737e99885d1ae2c49fecc773b2332aecde"]
      - values: {"L":"0{,}250 \\times 48{,}6","n":3}
        answers: ["sha256:84536b63cb121273d2a22e8b494b08f385c842f9d0ca568f0cb4aa2d22f031b5","sha256:d8b10f39613a21a729e4cc3edcbbd739e8ebd6bbd12cc30186d9a4a9f87290b6","sha256:5565acc72a5b435a4dac5772cf551e627c5fcf7204036726d01ee1b79b33e705"]
      - values: {"L":"3{,}14159 \\times 2{,}0","n":2}
        answers: ["sha256:c52450fe916a62241a42e1e47ab294be60499372aef26c3db300a270bd5b2c50","sha256:421ae370f39bce7545ef4c1e955746b13e449f097fc3054c9a724e7a2eb5d638","sha256:8f16a51b3239387db6d6598ed6c193b74bcdeacf588f4db81a7b5e157f31d430"]
      - values: {"L":"9{,}81 \\times 4{,}205","n":3}
        answers: ["sha256:8cb0a8d47d9a227b49eb4c2f6855a059a796eb61c269fda0dbe2c4fa0713131f","sha256:d3018bd9489bca81cf7e5983bb95e245ab60ebf8ba966355d475af870951cfd9","sha256:b7be3ab2dd66b776838346eca46c54cc839a682798127857954bc01227aaf658"]
  - id: error-relativo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Se mide ${{m}}$ cuando el valor de referencia es ${{v}}$. ¿Cuál es el error relativo, en porcentaje? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"9{,}71","v":"9{,}81"}
        answers: ["sha256:f5477774cc6c3524fd325eaaa45e2a7a3b2388a6705d8f5fc9abb052f87c5489","sha256:c78c818f9950622b3def5badf9ffd2fe24cf4ad222518dfcdb27ce3b22c16bad","sha256:f5e0effe7e049d4dd3fda4b6c8266ad2354dc1d6b70e386ea2e4919fc85a6d6d"]
      - values: {"m":"2{,}48","v":"2{,}5"}
        answers: ["sha256:aeb86f5bfece803bbae333f56765574b0af9178e629448a10aca5e5455659d5c","sha256:c117553b8f9fffbb63f99ef15304072b3b4a67f03487616854d8ecc563465ba8","sha256:1de7fee4631d47fde200b643435413f8c8cad7268997c40f4a60ec0906f01d1b"]
      - values: {"m":"101{,}6","v":"100"}
        answers: ["sha256:3a18afd350355a7d0c2c91cdf138df0ac3c062bd51d64b6b557c3e35a99bd0e0","sha256:a2d0da270f8cf27143e555c8632a75761abb18c4992f78e8a355f1a0b9fc0fb6","sha256:884eafe4056f2d57bee054029bfca3b45f46d1b4dc1712d5aeac05b2f47e1f2b"]
      - values: {"m":"340","v":"343"}
        answers: ["sha256:789c0a0fabbc307259bc2d73ef32d0df5538691439a965c051155b0e11462928","sha256:08438e8fbab9cb14b06eb7b3505e9f518141133d4a4b240b3e535fd7dc6462b2","sha256:eb0c1722a280d77b0dd878e31f9b57911cd2accac28cb5f615b79d240bb941b0"]
      - values: {"m":"0{,}52","v":"0{,}5"}
        answers: ["sha256:9775966ea1e760e0f4ed197f306f9ff0a42d500d4f3cc73e6f121bd319ec323e","sha256:95f64a967aea19c1584849bbaf0714d11b0b3a47402a8fa75074c9d437c147eb","sha256:56bbda757e9db665c41a27b08d70031a8b864d44f463afc55ffdb9d5c6b28502"]
      - values: {"m":"6{,}62","v":"6{,}626"}
        answers: ["sha256:787d8b80d6f78d7a20c0f8035c0a91340e57201ac52b2795d227124536b3205c","sha256:e375f3c72d6f4a14a1323d8d58492d95322bd743c949c068913b9dbe9192379f","sha256:17e7432b364dbc71fa92b0264bd23aac2676352e60ec63e41bebc44448a91b25"]
  - id: analisis-dimensional
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se busca una fórmula para la {{s}}, de la forma producto de potencias de esas magnitudes (con una constante sin dimensiones). Con el análisis
      dimensional, ¿qué exponente lleva ${{var}}$?
    variants:
      - values: {"s":"velocidad de una onda en una cuerda a partir de la tensión $F$ y la masa por unidad de longitud $\\mu$","var":"\\text{μ}"}
        answers: ["sha256:1bb59f7deea8d39f89dc6ea4132daf85f52c222a786c05716417403722068c3e","sha256:10cb31b4a35e445baa513e1af2ad9a052ec1aee50366fafa40604b7a7fecffa7","sha256:f68007b0694c8dfc12d0f458e21c03d96ed694b5172c986815e7ace44a324410"]
      - values: {"s":"periodo de una masa $m$ colgada de un muelle de constante $k$ (unidades N/m)","var":"\\text{k}"}
        answers: ["sha256:af41ed441997d930662291db2c1977d1d178f47178e8a9b43e4bcc91987168b4","sha256:d1d377263e09f725a562210f5b786807be0dbdd710e07745c02805867f0a3751","sha256:9f03016fcba375e09407cf5a39836798bf83ba5623d64fff7c2fdbe852df41ad"]
      - values: {"s":"velocidad de caída desde una altura $h$ con gravedad $g$","var":"\\text{g}"}
        answers: ["sha256:ca5428c3d0645ad0662af64a9d87b14a26f1763c7c5cfa4cfbddcdae48123a41","sha256:6254761c8f72233b56229ab9a5ed0820748bf7d8d76d481463e943cbff6d56d7","sha256:8763c4e7aec371d6244fd4000ca6d1451506d6dd575ccdb5ade34a86e572ee60"]
      - values: {"s":"periodo de una órbita rasante alrededor de un planeta de densidad $\\rho$ (con la constante $G$)","var":"\\text{ρ}"}
        answers: ["sha256:c497308d06d990437b4acd03fdc42deb9e71d0793ad5a4eddf411767021680c6","sha256:1c0b1b679c0d8ceed188e95989d2b530e947988b09167f0f3eef156ae7c14645","sha256:da79f40f40641bada7b87b9df6ea96e1c8121f501bb620e8e4a344fd5105465e"]
      - values: {"s":"velocidad del sonido en un gas a partir de la presión $P$ y la densidad $\\rho$","var":"\\text{P}"}
        answers: ["sha256:02ec70b06cf0f06c5bfae4265f7a660e5d6c93165373f25766363fe141829f92","sha256:002a1e9b4eefe8bf6ea08081455339d3f088f2c08a8319004aff2d30195b5e0d","sha256:95eb294c7f66f6e663f5c33c90445f6dbfb73cd446d3ddf3f863fc38b48d4b40"]
      - values: {"s":"energía de un cuerpo de masa $m$ y velocidad $v$","var":"\\text{v}"}
        answers: ["sha256:17a1b14baa554f823edc9c5070581f9c638818ddb1b8a3cabc22dac520d37701","sha256:165028566ecf34a3b9928678fa3e2e29e87ec260369b1670ae701f1761bf5438","sha256:72eac2f803b80ab7c0beada29533f134ee246f69ea60244fb2bac103a9c83a19"]
  - id: densidades
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Expresa la densidad ${{x}}\ \mathrm{{{a}}}$ en $\mathrm{{{b}}}$.
    variants:
      - values: {"x":"2{,}7","a":"g/cm^3","b":"kg/m^3"}
        answers: ["sha256:2d557c34c2c1478936764a1b67ac4de34aa1a23fcb1ef4238cace4d2d905798c","sha256:7eeb08bc9d3e95e3e68482b07ce65c5e0ec19b1880e8f2250d6809fc70fae700","sha256:fc49b86987d7a6399045ef63a12448f3d655976c1d3690c6a344bb659288d797"]
      - values: {"x":"7870","a":"kg/m^3","b":"g/cm^3"}
        answers: ["sha256:4d12ea1669304d6ae0ee22eb4f1c03b75086bb393bf84905da6ccc27de926e16","sha256:5427815ff8241b5b84e77851259999013cde949486bacbd6c18a88bf55a47325","sha256:b31fd7a48f9b37065084ee5f54ff9352d5efb2cd9baa02508cbde7337c870579"]
      - values: {"x":"0{,}92","a":"g/cm^3","b":"kg/m^3"}
        answers: ["sha256:2a484411d8fbd56049c39c4d32c5f12a305cce4de532b5d3013d2f55a2ee1872","sha256:6db5564c446fc7bea9b25145c1d1a43087dfaa0ba797482a0e63332ff72bdb3d","sha256:ac3e1e577056606cb79d666b01af04d9bc3c9380d980e05205a7caef81caf909"]
      - values: {"x":"1{,}29","a":"kg/m^3","b":"g/cm^3"}
        answers: ["sha256:0448f7213f0766baf00d19847e13b5f5e1c2a3bab29aedf91fe815450e3ca599","sha256:6e4eb68da0f349fcb6a045ee3943ed8e178ac5b5a9dbf6c39fedba6ec7f42002","sha256:c433d3970e92077d55b33f9b8ca3473977f54b32251745b6e9463f4639073af8"]
      - values: {"x":"13{,}6","a":"g/cm^3","b":"kg/m^3"}
        answers: ["sha256:ab67385889aed8550f06f8bf5f1272c86b7cb02eb8781d72da194d10b923cbd2","sha256:dadf84dd494ebd4b9c7de8b2450dbf6c9074864c32c1c829484ff1c0bedb93c7","sha256:3110b854bab0a0dc5c3fc8cd8b46b0216088da8a7821c29a2216a1c8b30abf43"]
      - values: {"x":"19300","a":"kg/m^3","b":"g/cm^3"}
        answers: ["sha256:d0c7ed6cb52c3bb21cf2ae78988a593c3d845eb81cc3fb66dd528182fcfc7382","sha256:b2b32e851cada2f529bee298c9d415f9095a1c11d29aa1e3690c87790b8dcfe8","sha256:87f890f0170a7a67d25882679428cd56f969d4bfcc923e755f4bf55a5a83bf86"]
  - id: propagacion-del-error
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es, aproximadamente, el error relativo (en %) de {{s}}? (En productos y potencias, los errores relativos se suman.)
    variants:
      - values: {"s":"el área de un rectángulo (lados con errores relativos del $2\\,\\%$ y el $3\\,\\%$)"}
        answers: ["sha256:86aceddfc99d362736a0d58da980eb83e53031f8b7f753746eaf6eeba2224bc2","sha256:1bc49448c76cb4e5c771370dc476fb02e5c3ab214da8164d0b32941f08dfce37","sha256:62e789d2387db6c56d8f856e9dc2ba10c0cd48d7e428dd0e6a46bc1930d7f3eb"]
      - values: {"s":"el volumen de un cubo cuya arista tiene un error relativo del $1{,}5\\,\\%$"}
        answers: ["sha256:4905193bbdd512452baa6925bcc133dc95f6d0d586cc15e2d505f7fbb69cd305","sha256:70cd5e690d3febbd89f96378369d82908a1b48fbd97075962873cc7829895b52","sha256:b4c082ef7b11f83f1f35191410fdce2f9160ba709ac24597a87e8d1e98db27cb"]
      - values: {"s":"el producto de una masa (error $0{,}5\\,\\%$) por una aceleración (error $4\\,\\%$)"}
        answers: ["sha256:71ccabe567053700d55407cf4be8dc7353505089a3364c9e641e25792baac8ee","sha256:c94c48900249608a4adb715d434c4c562490253b69307f2aa0287e744c53fa13","sha256:7d50c1043f2ca386b92c985b201ed1a12ce849e3d19cb95c3927295c6187740f"]
      - values: {"s":"el área de un cuadrado cuyo lado tiene un error relativo del $2\\,\\%$"}
        answers: ["sha256:3d20d6e531a8fe5bdfc63e56bf398cbbb5cd3a3787b4bf178d837eeabb4819ff","sha256:82d45ec468f2c8612b543266504aace4577198c8f11d2f6c13252835c34a515c","sha256:bbeb2aafad6413661c85afcd893927b2ddd57bbd5a28e23f41341a950f4afb47"]
      - values: {"s":"el volumen de un ortoedro con errores relativos del $1\\,\\%$, $1\\,\\%$ y $3\\,\\%$"}
        answers: ["sha256:2f7b46a7a50c711d7008520621f83dd2769395ae6bdc291726aff54a1b86b278","sha256:2c757b59fc23fec150f5da0995f00726a6883d6fa4e87bd30875194be4852873","sha256:ae75533e2dafb95d6782695523e550f0736564a87eb378ea1bb5c6a786d845f0"]
      - values: {"s":"$x^4$ si $x$ tiene un error relativo del $0{,}2\\,\\%$"}
        answers: ["sha256:4ed64716606703aef0c51e11e25bea0b6bdd2cf9c37349af7687345d412b3461","sha256:bb5a58ca6726ad3b70e6e0bdbeb3b270f2ce0db7367e6141273240417437e675","sha256:7db88174ce34e372fe08927b10c9ded7b7e4770a062376ac8b896d1801f10049"]
  - id: notacion-cientifica
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula $({{a}}) {{op}} ({{b}})$ (puedes dar el resultado en notación decimal o con exponente; al menos cuatro cifras significativas).
    variants:
      - values: {"a":"3{,}2 \\cdot 10^{5}","b":"4 \\cdot 10^{-3}","op":"\\cdot"}
        answers: ["sha256:4bc4f0c906ab47a34cebd7d4ca4224c3ffa2e53bdb51f933f3c8029c92203665","sha256:480a45738d4ed11994bb6d21ce397b37dfbd68663073943a9131a7f83aad4395","sha256:1f939eaf12898c8e11f35174d5e9088ee7f9ad7d6a41c22c35410365a0c394d8"]
      - values: {"a":"6 \\cdot 10^{8}","b":"2{,}5 \\cdot 10^{0}","op":"\\cdot"}
        answers: ["sha256:f9fd4975cf5eab69fbdad02c6eb8eeff7514978cc49e8666ff9ae5ec7e506545","sha256:53e36805bc56c7529de604215cd2a8350e248bc204e3589075ac2d6fdc845bd5","sha256:ddcdffa33f89e2be48a2329015e94658f1ca0adef1dcf12c8bd889083f7cfdc3"]
      - values: {"a":"9 \\cdot 10^{8}","b":"3 \\cdot 10^{-2}","op":":"}
        answers: ["sha256:5ec8b54249311553ff76c2e5afe593ab0a1e4a30a9e8fab410b0e274c259ef12","sha256:be9c430b50f598cfa025b893f0a3d4dc05bda6e4bbcc41792866cea99a7b04a4","sha256:5927a97b82d37d1b52488f92f09e3e916a9ae02b1f727291be2132166b3001ab"]
      - values: {"a":"1{,}5 \\cdot 10^{-6}","b":"4 \\cdot 10^{-6}","op":"\\cdot"}
        answers: ["sha256:4b1ccd0549edfe282fa854402a7f995ea9057b47082f507f111cdc47026caa97","sha256:8549c7f445568f0a579306aa937c6982c3faa696187709d04938dca9843c6476","sha256:c84095efde0b4a6d34182fb7247a22f3ff1d52fa6b651d63154043dcbb2a1ed1"]
      - values: {"a":"8{,}4 \\cdot 10^{12}","b":"2{,}1 \\cdot 10^{4}","op":":"}
        answers: ["sha256:31cd3c07da1a926b036bdf689173dc0a0c41861fa68901c9305aa265d9232279","sha256:ae5f815ea4c650a89980d49b2f1ec4593cb227088c665de02e04be4e033fd09c","sha256:d98c05574a29846584c95f7c8cd0742bb562d66aa16703cba8dcd237861252d5"]
      - values: {"a":"5 \\cdot 10^{-3}","b":"2 \\cdot 10^{7}","op":"\\cdot"}
        answers: ["sha256:8da0825cc19ae5d254ae329870c2ad16e47ac399c5285e00d8c1fa45225e0206","sha256:19ece93f7e671d61dff592089c532c95b8b1f2acb27fb55ff638b1d2ed474f25","sha256:6f15eed67e820c68ce40217fb9f40dbef1b58acfb11c5baaeddb7c8b1bf9c049"]
  - id: medir-con-sentido
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué el resultado de una medida debe darse con su incertidumbre y con las cifras significativas adecuadas, con un ejemplo de lo
      que pasa si se dan demasiadas. (b) Explica qué es el análisis dimensional y úsalo para comprobar que $s = v_0 t + \frac12 a t^2$ es dimensionalmente correcta. (c) Haz
      una estimación de Fermi razonada: ¿cuántos latidos da un corazón humano en toda una vida?
    sealed: "gz64:H4sIAAAAAAACCn1Uy24bRxD8lcJiDyRDEBRl2TIDnwwBOfConLRW0JxtKhPMTG/mIYghCORXfAnggw+BP4F/ki8JeqWlSAfIbWa2uqu7unp3VRJXspVQLavJZETjyQS30hI8t7YlZMuBUQLBBsMx27b4dWSMOolgBxtSjsVzyIKtPvjDlyytjGe4SSbatY2oL3bT/bvLN9eLGh5GQp/P2JAJvxcGdZGNJY02HPLhq+ccBak8WI49eRN6SLKHbwEbcomWcAIjMbLJAk4DiTKMZLihaTqP+W66n1/U8OMZVpRg7CZSQrIPwW6soWwf9VV8CdZQgCmHzyGfACVgY2ntOE2xBTlIx5H6/iOn4jK1giDoCreMxLEJ/vA54blo6Ztkh5aywHOQ45dZE5owmYzWKvtHCcmmzOCgxXRR1hT7WCcJrSR4y34d9fI8EjaFTK9JP6YARwpKnhJa6zkkK4ETRp4STeEkPNhc2qnCfSf//PnXWBtKNj4yOoqEljObrK3FKJETtk1ouS3GRjjCRqJXEBxvOc1wE1AnfMDjL/OMH9A0m0jmYkH5flEvUd+lT/iAVf0j6juF6O0Zg9Utmsa0knF7hGjYK2S32u9u7xf7AXa/6IEztaekXpN8+BK9VT11REN7nJZqCCO/cuSQGSN2qIfaah1UL1cTTjQaD6MwOoqfNWf9bl7DUbZKp3b3NpQsU9Rv50PxizfD6fLtFZqGui7KE66G14v5/VX9EpjUOXT4Wxel9ATX87p/SEslG2LOgofz9fw1++UJ4P2xxBlWAus7iZm0a07qOYktB7TcBE8PQeXByFvHvYe8da5vfqqiuFfH8xOZTGlWTatY1tGaanm3q0y0maOValndPHXOGlJPnP8Xtqdp/rNhuvng39h3TrSAfpXxuttK2JWQJVXLxX56RvlRV6Lwmo5jx8nRfWd59ejJgvxf4p/IvKxTyta/LFSkPyRQS33Rh2+q4otmRxmfZ3g+jPE50af9v8dt8KlhBQAA"
  - id: r-magnitudes-basicas
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas es una magnitud fundamental del SI?
    options:
      - |
        Velocidad
      - |
        Fuerza
      - |
        Longitud
      - |
        Energía
    answers: ["sha256:603e4e607d18639236628c04c7e2fe3d487c4c15b508cc925c92c2012abb49a9"]
  - id: r-unidad-masa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la unidad de masa del SI?
    options:
      - |
        El kilogramo
      - |
        El gramo
      - |
        El newton
      - |
        La libra
    answers: ["sha256:7e01bd5363022b7c67ceae331406e0caa783932a0a07fe403ed423cd1239cefc"]
  - id: r-km-h
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Por qué número se multiplica una velocidad en m/s para pasarla a km/h?
    answers: ["sha256:17bf09d6c1c605b11488e53c2e6ba6a7028d4c742a2c6e5ba0b255a70e7d0b58","sha256:6a3304a9a072d72a520e63593874d5fd272894c9c4429fd4b5ca1166b950d5c9","sha256:302d2b8fee1848728cec5a26df02922d47d6c4278b3abadc3a1f12265bfc8a6a"]
  - id: r-ceros-izquierda
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Son significativos los ceros a la izquierda en $0{,}0032$?
    options:
      - |
        Sí, siempre
      - |
        No: solo indican la posición de la coma
      - |
        Solo si hay coma
      - |
        Solo en notación científica
    answers: ["sha256:355a5f42f4640144976379a7c1b988060c1e5413d79aeefc24d93437a9662d24"]
  - id: r-precision-exactitud
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué diferencia hay entre exactitud y precisión?
    options:
      - |
        Son lo mismo
      - |
        La precisión es la cercanía al valor verdadero
      - |
        La exactitud es la repetibilidad
      - |
        La exactitud es la cercanía al valor verdadero y la precisión, que las medidas repetidas den valores parecidos
    answers: ["sha256:cfaccd4b024c7de71ccbcaee4d6adddfb798c133a426aa0acdc0b8a6a8e48dd0"]
  - id: r-micro
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué factor representa el prefijo micro ($\mu$)?
    options:
      - |
        $10^{-3}$
      - |
        $10^{-9}$
      - |
        $10^{-6}$
      - |
        $10^{6}$
    answers: ["sha256:86063936f7c5ddaeabf2e984e0ef63f92d548ac4b7f2d92e887d5d25237e467b"]
  - id: r-dimension-velocidad
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuáles son las dimensiones de una velocidad?
    options:
      - |
        $L\,T^{-1}$
      - |
        $L\,T$
      - |
        $M\,L$
      - |
        $L\,T^{-2}$
    answers: ["sha256:55ea572c66a4193562698b9623ec40694ab1c9617b477b45bcd2fb5d0ee714bd"]
---

# Magnitudes y medida: Sistema Internacional, prefijos, conversión de unidades, notación científica, cifras significativas, errores y análisis dimensional

La física empieza por medir. Sin unidades comunes no se puede comparar un experimento hecho en Madrid con otro hecho en Tokio, y sin incertidumbres
no se sabe si dos resultados coinciden o discrepan. En 1999 la sonda Mars Climate Orbiter se perdió porque un equipo usó unidades anglosajonas y otro, del SI. Este
nodo presenta el Sistema Internacional de unidades, cómo manejar cantidades enormes y diminutas, cómo convertir unidades sin errores, cómo expresar
la precisión de una medida y una herramienta poderosísima: el análisis dimensional.

## Objetivos

Al terminar sabrás:

1. Distinguir magnitudes fundamentales y magnitudes derivadas, y conocer las unidades del SI y sus prefijos.
2. Convertir unidades con factores de conversión, también en superficies, volúmenes y velocidades.
3. Trabajar en notación científica y con órdenes de magnitud (estimaciones de Fermi).
4. Expresar medidas con sus cifras significativas e incertidumbre, y calcular errores.
5. Usar el análisis dimensional para comprobar ecuaciones y deducir la forma de leyes.

## Qué debes dominar antes

[[mat-potencias-raices]] (potencias de $10$, notación científica), [[mat-sistema-metrico]] (unidades de longitud, masa, capacidad) y
[[mat-ecuaciones-primer-grado]] (despejar en fórmulas).

> [!question] Test de entrada
> 1. Escribe $0{,}00034$ en notación científica.
> 2. ¿Cuántos centímetros tiene un kilómetro?
> 3. Despeja $t$ en $d = v\,t$.
>
> Respuestas: $3{,}4 \cdot 10^{-4}$; $100\,000$; $t = \frac dv$.

## 1. Para qué sirve

- **Toda la ciencia y la ingeniería**: los resultados solo tienen sentido con unidades e incertidumbre ([[tro-razonamiento-cientifico]]).
- **Seguridad**: dosis de medicamentos, cargas de estructuras, combustible de un avión (los errores de unidades han causado accidentes reales).
- **Estimar**: calcular órdenes de magnitud permite decidir rápido si algo es posible antes de hacer cuentas finas.
- **Comprobar**: el análisis dimensional detecta errores en fórmulas en segundos.

## 2. Magnitudes y unidades: el Sistema Internacional

> [!practico]
> Una magnitud es todo lo que se puede medir: longitud, tiempo, masa, temperatura. Medir es contar cuántas veces cabe una unidad: una mesa de $1{,}5$ m
> «contiene» una vez y media el metro. Para que todos midamos igual, desde 2019 las unidades se definen a partir de constantes de la naturaleza
> (la velocidad de la luz, la constante de Planck…), no de objetos que puedan cambiar.

El **SI** tiene siete magnitudes **fundamentales**: longitud (metro, m), masa (kilogramo, kg), tiempo (segundo, s), intensidad de corriente (amperio, A),
temperatura (kelvin, K), cantidad de sustancia (mol) e intensidad luminosa (candela, cd). Las demás son **magnitudes derivadas** y se expresan con ellas: superficie
(m²), volumen (m³), velocidad (m/s), densidad (kg/m³)… Algunas tienen nombre propio, como el newton ($1\ \mathrm N = 1\ \mathrm{kg\,m/s^2}$), el julio (J) o el vatio (W).

**Prefijos**: giga (G, $10^9$), mega (M, $10^6$), kilo (k, $10^3$), centi (c, $10^{-2}$), mili (m, $10^{-3}$), micro ($\mu$, $10^{-6}$), nano (n, $10^{-9}$), y otros más extremos (tera, pico,
femto…).

## 3. Conversión de unidades y notación científica

> [!practico]
> Para pasar $72$ km/h a m/s, multiplica por fracciones que valen $1$ y que tachan las unidades que sobran:
> $72\ \frac{\mathrm{km}}{\mathrm h} \cdot \frac{1000\ \mathrm m}{1\ \mathrm{km}} \cdot \frac{1\ \mathrm h}{3600\ \mathrm s} = 20\ \frac{\mathrm m}{\mathrm s}$. Si las unidades no se tachan bien, el planteamiento está mal.

- **Factores de conversión**: fracciones iguales a $1$ ($\frac{1000\ \mathrm m}{1\ \mathrm{km}}$). Para velocidades, $1\ \mathrm{m/s} = 3{,}6\ \mathrm{km/h}$.
- **Superficies y volúmenes**: el factor se eleva al cuadrado o al cubo: $1\ \mathrm m^2 = 10^4\ \mathrm{cm}^2$; $1\ \mathrm m^3 = 10^6\ \mathrm{cm}^3 = 1\,000$ L. Densidades: $1\ \mathrm{g/cm^3} = 1\,000\ \mathrm{kg/m^3}$.
- **Notación científica**: $a \cdot 10^n$ con $1 \le |a| < 10$. Para multiplicar, se multiplican las mantisas y se suman los exponentes.
- **Órdenes de magnitud y estimaciones de Fermi**: redondear a la potencia de $10$ más cercana y razonar con cantidades aproximadas («¿cuántos afinadores de pianos hay
  en una ciudad?»). Si dos estimaciones independientes dan el mismo orden de magnitud, el resultado es fiable.

## 4. Incertidumbre, cifras significativas y errores

> [!practico]
> Con una regla milimetrada no puedes afirmar que un lápiz mide $14{,}2738$ cm: como mucho, $14{,}27$ o $14{,}3$ cm, según lo bien que veas. Las cifras que
> escribes tienen que ser las que de verdad sabes. Escribir de más es engañar al lector.

- Toda medida es $x \pm \Delta x$: el valor y su **incertidumbre** (al menos, la resolución del instrumento).
- **Cifras significativas**: las cifras conocidas con fiabilidad más la primera dudosa. Los ceros a la izquierda no cuentan ($0{,}0045$ tiene $2$); los ceros finales
  tras la coma sí ($0{,}00450$ tiene $3$; $1{,}200$ tiene $4$). Con notación científica no hay ambigüedad: $1{,}20 \cdot 10^3$ tiene $3$.
- **Al operar**: en productos y cocientes, el resultado lleva tantas cifras significativas como el dato que menos tenga; en sumas y restas, tantos decimales
  como el dato con menos decimales.
- **Errores**: absoluto $E_a = |x - x_{\text{ref}}|$; **relativo** $E_r = \frac{E_a}{x_{\text{ref}}}$ (a menudo en %). Los errores relativos de los factores se suman,
  aproximadamente, en productos y cocientes (y se multiplican por el exponente en potencias).
- **Exactitud** (cercanía al valor verdadero) frente a **precisión** (que las medidas repetidas den valores parecidos): una báscula mal calibrada puede ser
  precisa pero inexacta.

## 5. Análisis dimensional

Cada magnitud tiene **dimensiones** en términos de las fundamentales: $[v] = L\,T^{-1}$, $[a] = L\,T^{-2}$, $[F] = M\,L\,T^{-2}$, $[E] = M\,L^2\,T^{-2}$. En una ecuación física, **todos los términos que se
suman deben tener las mismas dimensiones**, y los exponentes y los argumentos de los senos no deben tener dimensiones.

- **Para comprobar**: en $s = v_0t + \frac12at^2$, los tres términos son longitudes.
- **Para deducir**: si el periodo de un péndulo depende de su longitud $L$ y de $g$, escribiendo $T = k\,L^a g^b$ y exigiendo $[T] = L^{a + b}\,T^{-2b}$, sale $b = -\frac12$ y
  $a = \frac12$: $T = k\sqrt{L/g}$ (la constante $k = 2\pi$ no la da el análisis dimensional).

> [!formal] Con rigor: por qué funciona el análisis dimensional
> Una ley física no puede depender de la elección de unidades: si se cambia el metro por el centímetro, los dos miembros deben cambiar del mismo modo. Eso exige
> que tengan las mismas dimensiones. Si una magnitud depende de otras como un producto de potencias, la igualdad de los exponentes de $M$, $L$ y $T$ en
> los dos miembros da un sistema lineal ([[mat-sistemas-lineales-bachillerato]]); el teorema $\pi$ de Buckingham generaliza la idea. $\blacksquare$

## 6. Errores típicos

- Convertir superficies o volúmenes con el factor lineal ($1\ \mathrm m^2 \neq 100\ \mathrm{cm}^2$).
- Dar resultados con más cifras significativas de las que justifican los datos.
- Confundir masa (kg) con peso (N), o mezclar unidades en una misma fórmula.
- Usar «m» (mili) y «M» (mega) indistintamente.
- Sumar magnitudes de dimensiones distintas.

## 7. Resumen

- SI: siete magnitudes fundamentales; magnitudes derivadas; prefijos de $10^{-9}$ a $10^9$.
- Factores de conversión; cuadrado y cubo en superficies y volúmenes; notación científica; estimaciones de Fermi.
- Medida = valor ± incertidumbre; cifras significativas; errores absoluto y relativo; exactitud y precisión.
- Análisis dimensional para comprobar y deducir.

## Repaso: lo que debe quedarte dentro de un mes

1. Las magnitudes fundamentales del SI y sus unidades.
2. Cómo se convierten km/h en m/s y m³ en litros.
3. Cuántas cifras significativas tiene $0{,}00450$ y por qué.
4. Cómo se calcula un error relativo.
5. Cómo se comprueba una fórmula con el análisis dimensional.

## Siguiente

el tema `fis-cinematica-rectilinea` (describir el movimiento a lo largo de una recta).
