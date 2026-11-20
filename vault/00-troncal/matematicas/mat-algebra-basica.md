---
id: mat-algebra-basica
title: "Álgebra básica: letras, ecuaciones y sistemas"
area: matematicas
trunk_level: 2
prerequisites: [mat-enteros-fracciones]
academic_sources:
  - "Gelfand, I. M.; Shen, A. Algebra. Birkhäuser, 1993."
  - "Euclides. Elementos, libro II, proposición 4 (el cuadrado de una suma, en forma geométrica). Edición de Heath; texto en línea: claymath.org/library/historical/euclid/files/elem.2.4.html"
  - "Pólya, G. How to Solve It. Princeton University Press, 1945 (traducir un problema a ecuaciones)."
hints:
  - "Concepto: una ecuación es una balanza; cualquier operación que hagas a un lado debes hacerla al otro y la solución no cambia, salvo que multipliques por cero. Para los problemas, define primero qué letra representa qué, traduce frase a frase y comprueba el resultado en el enunciado, no solo en la ecuación."
  - "Herramienta: `sympy` resuelve y simplifica simbólicamente (`from sympy import symbols, Eq, solve; x = symbols('x'); solve(Eq(5*x - 7, 3*x + 9), x)`), y sirve como segunda vía para comprobar tu álgebra a mano; también sustituir los valores hallados en el enunciado original."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/solvers.html (resolver ecuaciones) y docs.sympy.org/latest/tutorials/intro-tutorial/simplification.html; Gelfand y Shen, capítulos sobre ecuaciones lineales y sistemas."
exercises:
  - id: reducir-expresion
    tier: 1
    type: expresion
    vars: ["x"]
    form: expandida
    prompt: |
      Simplifica ${{a}}({{b}}x - {{c}}) - {{d}}(x - {{e}})$ hasta la forma $ax + b$. Respuesta: la expresión sin paréntesis,
      por ejemplo «5x+3».
    variants:
      - values: {"a":3,"b":2,"c":4,"d":2,"e":5}
        answers: ["sha256:a38d5fc1f08050e27f8db0f9fe62b733ecfd1d48da32ede4c0046492395746dd","sha256:be748fd3730b7cfdc06a7e5a68ef85d8ae73092f08a20d4a5e617cd6214843c3","sha256:a8e0421a65a60f081a7d816ec1ebb3c3c85dadbe3e76bfba98559913fac45642","sha256:97625fe77226b4559b2e7e060309410f858f4e56edb10a4e2dd3613131c7f089","sha256:6b763e10dbb92a1ed7c69c9f81913534246ed63ef3ba81b30c9d6ed4461e36eb","sha256:39707c737b3aafddd6aa38e85b20374afad94e8631d2e7ece2e79b01d2308d8b","sha256:652593dc8810d3c4715e786783314e5980fcae9d12738cbb876e50e977b5f8dc","sha256:e5eabe132e9165104bcab5dadb31f32d671c4d1a16709c7b998c66f78d6c552e","sha256:157a911be8a10f86caaeda908b842592e7ab575f71d6549847ab582c7daef8ce"]
      - values: {"a":4,"b":3,"c":1,"d":5,"e":2}
        answers: ["sha256:734077c1dff489886e4d74bc2505709adfc769213db34f077374e7d4817a4328","sha256:0ac63504300416daaefe431f68c8638e11f8d1fdf9b26270dc81d112633078c6","sha256:51fc2f2452d14d7623bb11b3c3ff0b9641060e4f9868bc36c3d165e948700d00","sha256:e686eddffe6c75f23bce02ed0612c1e8a77377cb20119a703a1f113c38ee1dee","sha256:82843bdae0a4fa72774a45424ee930552102e31b5194bd8bc20c888c86f90065","sha256:36e247237c27aae4eec4ad1170ec522ad250ef8c456d4f6fd6c68a5b683ab207","sha256:00b6d3b9cd888b9809df0f91f7689a91c5c239940e4c096fe74528b51e710da3","sha256:f57d0f0cd2e62bcba00f4945cbd306444d3b3c4bd22029a93a1992dd7129e783","sha256:b1add3d3448119f872d2b4c63a262dc129456838eb592cea2bdc44b2752a051c"]
      - values: {"a":2,"b":5,"c":3,"d":3,"e":4}
        answers: ["sha256:035cc16989ad5783dcbc7dd7030ce0e564af102c7bf560c2d253c186f4dee789","sha256:5af8193f6eef99855b965fe8178126bc07ef35f08c714558a340a6d7bab02035","sha256:f08b1da18342ead1970665fad2bac7b5a40ca43010405ab0d4a4b07fea38f30b","sha256:94a19451ddaa3143163eee4f674e8b434258311a71516e0c6df19eb3f6975f77","sha256:7b7bd9673fd2e873394c93297c4e795b616f66e7ee630bccdbb650bb9c37ad9d","sha256:7e1291e40c10abbc23cfa4aca080c2d8735084682806abe938727c4b74160b1b","sha256:83d061650c4f26c14cd3a6d961a516ec5dd632e14c82e3b0cb156c7bf58bd198","sha256:303237083b039d724e2b615f81b73d109101fd1b55c60590c836c731de4c9c00","sha256:900517c756bc2e4fc9d27b2ed495fb654d239f83628f3a61131a93166d6dbcc1"]
      - values: {"a":5,"b":2,"c":3,"d":4,"e":1}
        answers: ["sha256:f63a5fcb4eebb731c9bc1cccac7168662ec05e4cf10ada8aca3171345820ba40","sha256:1fadfa12ec24571016f8eeb491103e8b30f1f37677b2b4d73f1f9a7c4a799303","sha256:47bebdc025e222608f69a38826df092f764c0e299838651240cfd51f03a7df82","sha256:0edbf63072e82b033628188e2b3954388f77bded5436fc953891c9b874646a1c","sha256:b2926a8453d86f54118dbe99be6e195169f62bb5dd5876c4eeee4f91001868dc","sha256:dd04189ed9d9a6f50d9c3e164bff5356fca5e33fc719bb124f0d841586bb4b7c","sha256:d4fbef924a4dce4dcd4f179efd8a5bbe44208adcf41efa208df514cbfefc3484","sha256:bd82e1a213afd9bef0101f6705c8476bbeb26c8edc99f0a8fef3aff690ad2372","sha256:22177622a2ffc2f24b09e4a240f01edf9bde74b458aa6367198f1a1246160d9f"]
      - values: {"a":6,"b":1,"c":2,"d":3,"e":7}
        answers: ["sha256:78e83178aeb5aebb527fe39108f87c1bd2f829b7525456e61a366b019b745add","sha256:e19fc9b5bbb0d990210bbd7434c664820d11c48f4ea6a25e029f53de00fd2f04","sha256:215901b726a1144a3af2fe32f8f27bfa4b18f34b20a64fa48c2716ba01e4ce51","sha256:623ac50c03ccff8957c8f4325dc5e1150ae757f3ba5da7fdbea2aef542d60a42","sha256:632b0ad7dfa46b6540b087e8c2dc24c5fd6e72e35847e95f09e7616d3f4b5ff7","sha256:8e4fa5abe00f997122ed73bf56a5c6725e638f0424358dae182de761d8226c64","sha256:7eb82a976e9498f73afe7699a3c8ceab6d9f1e642685b101a881d6516ec85aa6","sha256:6c99814066e76fe81e5f5a8ea62ddd7ea125a862c5b7953728e92c861b080dcf","sha256:94661e718f2d1ef3b160d501657ede780dc84da2f25b7f5285820162032616fe"]
      - values: {"a":3,"b":4,"c":5,"d":7,"e":2}
        answers: ["sha256:458f46c3b20f6c1309fa635e53c053865c643cb3cfec7e7e556dcd9326b34540","sha256:1ec2692c6913d6489e9213791199796f254befcdff16ceab0f053871e3a028a2","sha256:b4240055441c35acd15701c1dae9b45f48254905e5c8e5a3c95f90627ad54b34","sha256:64e4c5aed23e2b2dc9350d9ad78116c9543ad627ffa1a33b82a5ac08b6b57526","sha256:1c6a9833b0a1672901542970ff7a66e48aabbcb8e7c5bde9e96a63a4f62cca9d","sha256:44ddb51ae9f8ee2fa6d931bce4066beece0aa0fea5763dcbdc3085d780a5a2b6","sha256:8f82f34c52ab66f3e6d221fd95ff73a1ebd1335b2d73423690f2bab223f0c53c","sha256:0b2ef886834d7bca4578ffc8279810dd62777e3d4ca5536c19b9ef7162bf66ae","sha256:83bb62d0e2c7f18e3e36baec9c239e44edd99cbe03d27e8f13b25ff5e89b66b0"]
  - id: ecuacion-lineal
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Resuelve ${{a}}x - {{b}} = {{c}}x + {{d}}$. Respuesta: el valor de $x$.
    variants:
      - values: {"a":5,"b":7,"c":3,"d":9}
        answers: ["sha256:47e97688a56d9aafbd1895e8a39f21e9f3f46a808abfa16a0edf193c2852fb4b","sha256:89ec30f55417f877c473932e25182fa542848edcbe4af9c00696484e868bb5c1","sha256:0fb997cc5776795cccb1c1224199313ce61d952f66577ffc9371d10aad1dd7c7"]
      - values: {"a":7,"b":4,"c":2,"d":21}
        answers: ["sha256:00b1a0159ff41bdd7e22ccfd32462bb6ec195c6849c0376118ffbb43cd986b7e","sha256:6985aa008b466bd298c4e5ed3d180fb3e76156c90046c76bec0ed7e1c81a09f0","sha256:c43859a63864c960a927b68ab3c0cd1ba7e2629210a326124c1d0e0103c4685c"]
      - values: {"a":6,"b":5,"c":4,"d":11}
        answers: ["sha256:6f4699da320383a224437cd2167b0bd2f6d2656d05e47d83018177bdaa86c8b0","sha256:7ffae176acb995d9d0b9c432868ee8087feb7bd6acbedd40aaf6598f58a37499","sha256:4b57098b60016964426f8f6d90a3b883fb377d234b17227804adafbfed2aebc1"]
      - values: {"a":9,"b":2,"c":5,"d":22}
        answers: ["sha256:089bfcb57c07fa082e05a8e24326daf5bb9548affae8845bd630ab913cf9a765","sha256:1527a4104826234570f8bd7d878e5fe0c191cdc6e2894114a7a7a8c63e40f333","sha256:b3124c6a495daded00d0a2597802710847c85e441d783bc7949e9bf4a7723871"]
      - values: {"a":4,"b":13,"c":1,"d":2}
        answers: ["sha256:3a93581013fd158a37c3bd1a6b2542a17342078e1f2cb9c10534789e7dcfd14e","sha256:b8293d6523a9c4508b92bf2fdc60b4821db43ec40def5c2139bfe118a1cb5d0f","sha256:b745db0c1816a19ee6b1fe7cd0f377ffe495a4dd9e07154200b9b887dcfb4d42"]
      - values: {"a":8,"b":3,"c":3,"d":27}
        answers: ["sha256:6f7357273d37aee7c74684985aa9c2a1f6ffba221efa880e27b892742024b7ce","sha256:3eb2b03571e8a6b0f75cf1278bfa3b8ef7b1ca398b141b76dea9733c7e55f6dd","sha256:97251202612276d6c506acad169a40909f8005dd93d9c9391853990cf5647c5b"]
  - id: diferencia-cuadrados-expr
    tier: 1
    type: expresion
    vars: ["x"]
    form: expandida
    prompt: |
      Desarrolla y simplifica $(x + {{a}})^2 - (x - {{a}})^2$. Respuesta: una expresión de la forma «kx», con $k$ entero.
    variants:
      - values: {"a":4}
        answers: ["sha256:d2922ca256095fcc344073acbdd1bef59774b90e8b567c6833a223476763e748","sha256:c4b54e8fa693c531e7d0b6b877350f6ca85e77386429cd166cf35d88757ecce3","sha256:8fcb40290f33435192b4e61325a2f8b3b7f84656a338cf8f0f0780e77b5c0561","sha256:99e2f59c48acc9c38ed116e3a7b330fe6c7b5abc0e2d16b7f8ca0d94f95ccec5","sha256:d01a1fa5186ffe6a81f546a24b21d7fe630a9f0f8f90c772909efa86a7e6bb33","sha256:da839c0c5bea5f64c42f9928cca0ad25d736a8b6a6309a5189da089e682f6bee","sha256:8095aeee23fcfe3f04714d2757299b652651269f66bda06af5b13363721d3198","sha256:cab35376ba080b38abcee0f3937632d964633929299acd040806e5b897e8fe6d","sha256:8d48b21b56dd711276b0eea6872008c72fe67a5ab8c15f61470cf47e1d3ba84a"]
      - values: {"a":9}
        answers: ["sha256:d0930dc859168baeda102f09fd195c8991af09ae19128a451dff80842bb86a50","sha256:02c49c67e27787a225dab6e228674a825a9069139ad7b937925876eee6c91260","sha256:b9cccb7d030f81998facb06ec367eb46e3829f1571b0d78e422129e8387310bd","sha256:4ffae583f99e4140b9dab6f4ce1188364e45ba9c472a7b4621149f590459b552","sha256:da60cbdb9f9470567d992e9157b1a988af16f963162d5d9f40a03d31fc87602f","sha256:6f958f9f647da995f6520c086add631106df387f2104a49e53d3013b94ceb9d3","sha256:a270f4b4aa531d56de5d737f1d018b1e49b55e858bce5d791531342816e23a94","sha256:74b4c1a4ecf44e1d31639e197ad103e918579e6a12d0e2c5ef8071e2bc1beec9","sha256:b416b45f289e42e45a70549a04ef78931170eebfea0cef4c7b567f597320d2d0"]
      - values: {"a":5}
        answers: ["sha256:f02a2ffadcaef5a4be93096719416cf5a3dd5b016fe34148db42447aca6b7089","sha256:8ddf6c46726cee8473eed16445264979466ed18d06d7df1ca0034ebac36f0f61","sha256:56165aaefa2de0f615b8d5df2d4b01a92d1e2aa1ac232130e05272f5256e6751","sha256:731320bd99e3e7ce872a8e10e935c6d2073c498f2208aebce1e7a607d2901f77","sha256:70416438e00b9534fce1ecb35a2e6f492a5181a2ead0c884d32655b51b85eda2","sha256:7864160e1d0483dc98bf3b0f5235c6052f47a0e957be8ce3c171f02f93c35279","sha256:ddee4e653420debc0927ee2c65439b9d74d106932a12d432ec6de6ac467e6e5e","sha256:e2307f07ed634de175627c8725b1eda120ee99ea060032a8ee4c872f27abfde1","sha256:fae5b95bfef3e7e2488a41845d13f9e96ff799cc35ab274165f9c3575a33d19a"]
      - values: {"a":7}
        answers: ["sha256:d8ef4ed564dcdf89e19d73eb9c349e7367c14bd6f57e8c60417a1857d9dd8cee","sha256:57cf2cc63ca2da74430c7e411de33764fe0b2ca26b0928d8b964a09817f10bdd","sha256:687b914ffb5fd764bc00cf07b89e9ff147aad57ab0b59dc9bc5d7b226ba5fe35","sha256:6881e852f41d9cf18c8d1d81f758213b55e0df26ccfcbcdf7b60c6505d239fac","sha256:96264692501f384a51696c1003c677beac0c6c9529ed71abdbe43766838a5472","sha256:3eef147b0bc58281cc4b166d304cf301e6a62175a00994de20717ea1e2bc8a74","sha256:53177f435f99a5b91b9084d34c7037ac4745594539042ca1f61691de4f06955c","sha256:0ed35ec8c6f9618556f4bc234d14f3c0d1e6459ae64f0564b1a3b78137fdadcf","sha256:e8d8acb8c012f9f50133ba75ca26e15a771a202141e3aa260cc67771016926c1"]
      - values: {"a":6}
        answers: ["sha256:9b4b85c6ca2de90c5d84df43480b588da3a321ed94b5365548889555fb245bb4","sha256:c04d4eaf1911deb1910312083f33c195b90e20cb6674af5313c30ec8cd21598f","sha256:510d592430125ae23c20fe3eaa20246f31b6ce4fc5fea33ff995f98802de3890","sha256:c30ad4ad9bd40941eef02094a5c71eb9fa9ea0b9dd86e3e7636c8ef1e892eaff","sha256:276c6e6f2c9e13e4a898f12010224df7e6126e8a39a319f242bfc038aefb12b9","sha256:874dc04d667d25d3f62431c55fdccd0a55695fb3809d8b8057d775e2b65e5a3a","sha256:d10a76fa898d30c943ca881bb4b2903d7d96a003eb81b6ba795c78d38b60c4cb","sha256:98b64ff0ba0ed5b2dd991d8d684905ce93de2a6448d22a05b733650caac00694","sha256:3af37492c902081e641557f48cf28f82febb30e56f49610a6a4b850a3a6de776"]
      - values: {"a":10}
        answers: ["sha256:807bc51b4a6295888031e1446fee9187f0e9ce11536ad77543a14e5e6145284b","sha256:e93eb5cfea16bd5a51d469833011ad9bfc6fa69aa29a48e49182153ceb5477fd","sha256:3706d5fbed0e0513ac85ebc9cf82d4da93862279609fab71a43ff3a07f55541b","sha256:c4bbcc09ea14d86314f4a44921c991a1946e1516b8da07b4677f92ec2a6cad40","sha256:a697adbf245d8d504c89a54b69b90dadb39e3b441ded6121376a1a5ac8cfa77e","sha256:9504b81be6ce827c2e17f7eb54a480f5fc31bc678fd60427fc73499a4a894635","sha256:8503cb84748c9f7bb626bd3a26898c6948f49f512ca7e8470de2f16a3a5a2211","sha256:f3442613841a10bab8cce3762c01eb1957964b5cf80898d6b78524d90333fdc5","sha256:f8729cdf008ac183be5a697cc943355231620a598e8e52b1127d56545fd57832"]
  - id: ecuacion-con-fracciones
    tier: 2
    prompt: |
      Resuelve $\dfrac{2x - {{a}}}{3} + \dfrac{x + {{b}}}{4} = \dfrac{{{c}}}{2}$. Respuesta: $x$ como fracción irreducible «a/b» (si es
      entero, solo el número).
    variants:
      - values: {"a":1,"b":2,"c":5}
        answers: ["sha256:af654e40f03223887d1add4419d191094c0a405b5bb2ab425b88f4d78ce2758f"]
      - values: {"a":3,"b":1,"c":5}
        answers: ["sha256:5bea2a97208f66ba07b4a6135b3b668150829c5b26d2866d69fd54fa8b834e50"]
      - values: {"a":2,"b":5,"c":7}
        answers: ["sha256:6c51d0326cbba01bb1e4953d480006ab9360c3616afed85a49254c004898a0aa"]
      - values: {"a":4,"b":3,"c":3}
        answers: ["sha256:c929da2960e765d0c429918d960ee9ba3be360699bc5a542747eb6eb01615ad4"]
      - values: {"a":5,"b":2,"c":6}
        answers: ["sha256:0495e6b9325372d539a87ba723ffe7e55984ae0260f6922e07e48a444de4baf8"]
      - values: {"a":1,"b":6,"c":9}
        answers: ["sha256:10bcfb944daf11e20c33fc95e64b43f648857f0317904818606b32502dbbb3c4"]
  - id: despejar-formula
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La conversión de grados Celsius a Fahrenheit es $F = \dfrac{9}{5}C + 32$. Un termómetro marca ${{F}}\,^\circ$F.
      ¿Cuántos grados Celsius son? Respuesta: un número.
    variants:
      - values: {"F":"98{,}6"}
        answers: ["sha256:bc1317d7af3411a38e2f86a54535c631b3705912f5daaf7832d2aa5a3a639a6c","sha256:589c202d8277956d8601a072f18aaf6d1392b8024bb0449729093b51c7774fdb","sha256:09b9b3a1ec6af51532ba6f50d28a0a633b11e7a300c9c4529c025fe712c1712a"]
      - values: {"F":"212"}
        answers: ["sha256:f093b7ba48d62834326db646a12957f77acd0b009ea8f9ac21cdb25da821cfc7","sha256:59428eeb6a51fd2a177886056c2ef84bc33bb07e7f26245ff146a897d02e5653","sha256:e2c786f2a1f52a5b35cc583298c7cc5de73687945adb9333bad075c2f92b6e63"]
      - values: {"F":"50"}
        answers: ["sha256:3547b2f40c535fdf7a5b41c635cb794a44c1fa4d53d5e9bda3ea8d673eca74f9","sha256:d8236b80b55fb477d35ff1b0945a208a2d06dd836297af764751470e0d2cda4a","sha256:919e2a60b22306f8ee046072c8e6ef73553602a0570a463f7cd09e549efb8605"]
      - values: {"F":"14"}
        answers: ["sha256:0af0151fad35b60f5c15aa97e7feb2b77409b71ff6207c2dd2b6b12b7f0a5c45","sha256:9d72999afdbb5b3ac8dfb6815618aa4c7af6732f0831a44e42082cdafad89a90","sha256:a727e6b7833daa0ee6c5a8e72ba7be186548e063b8b717826221bd2644e6fdea"]
      - values: {"F":"104"}
        answers: ["sha256:1db73e7c407c1e145f5828e19ea4d87490a19f4f0a419826cf85f9f8b17afc74","sha256:b305f20f3404a198cf865be944fcf89eb2a80e03898fcbc07b8603f067cc74bf","sha256:90703378511760138f062e5f519c19a2513154cd98d7019d19c2ff70250edc5b"]
      - values: {"F":"77"}
        answers: ["sha256:c10219d4f8c15947411d0fad5794f719b5b91538e374995c82a1f1141eb06d21","sha256:4b07cab2df7e2eaf8fbb4dfceea4147100a8e14715066300be82f47b47b2d277","sha256:e0309fa65488688ff9b6c1de55cf5f2879112f0cd7f3ee74e654055a799fe772"]
  - id: tres-consecutivos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La suma de tres números enteros consecutivos es ${{S}}$. ¿Cuál es el mayor? Respuesta: un entero.
    variants:
      - values: {"S":1203}
        answers: ["sha256:23677af4df71f1e0e743122361bc836816cba8de09181028433625adbfb3185c","sha256:08bb4126a78076ba8e8692b1132be78154441b8f3dd5c17e7a9d77f1197ec22f","sha256:ff025e6e1b7f0f908917d64fae79ca4fd9f233a5e6a5a52829df544936138136"]
      - values: {"S":645}
        answers: ["sha256:3514da5a2fbcfb9a75d433b526706b924ff4f70928bf928dcd1672a66d220de1","sha256:d15ed55c93589ed67b9fd8fc74f68f3e10a3455fad01cc11e7de5cd4c082d772","sha256:43e00594e83eb4f60bd584ced9cb25259e76b2b4f0ade95d74d4741d33194234"]
      - values: {"S":3003}
        answers: ["sha256:94307d0ebce6836fc5dfdb01be12106ae27c9dfa091d3d1540486b92f3ee8bbd","sha256:2cb4f6b28e516322ef608540a87b32f0e06ad428380443a3f702d0d2895f24c9","sha256:c0df930a236b3342802fa9734a5022ce1d896f2b69b207c291bb42714a7c7bed"]
      - values: {"S":99}
        answers: ["sha256:1c53bac02ef5acac9970a43ef85e809ce021fed72ee9ab53f27566959a7a487c","sha256:54c91c9bcca8626f81e8ce71b110513103219d6114fc73cce56941cf55de03c0","sha256:1498d2c196ae9ae55cdea339a10ee5b6204c24166e4bf855b24fe21c343c4d2d"]
      - values: {"S":1500}
        answers: ["sha256:6c8d145e9c0215707e4219b38a8abb6b6c1aa46f217219624c6accacf343a77b","sha256:d4a74727c4d18f0ab4cfa562a89cf34c51857ef7285ee0e10c369c7a47689985","sha256:c0dfdf6e4d37de3102d46e8ec7726e782fbe3551bba91cf9abb4099f0cdd7d06"]
      - values: {"S":2028}
        answers: ["sha256:bfcefcffe59817719657b3de4ab96ec1111b55a00236aa2e3cb88ba7fe994d30","sha256:72d5e034350a98dc4572657b0b85c11ec30610a02d3b17f6d9e0a4969d758357","sha256:48692d1e8b124756e72f93464eeb1e10bc0be6d1f68e82cda013c5bf0fe64a38"]
  - id: sistema-2x2
    tier: 2
    prompt: |
      Resuelve el sistema $\begin{cases} {{a}}x + {{b}}y = {{c}} \\ x - y = {{d}} \end{cases}$. Respuesta en la forma «x;y».
    variants:
      - values: {"a":3,"b":2,"c":16,"d":2}
        answers: ["sha256:72cf353cd903f805b7dbcb12dd8a4f02e164ac55033c5d28bedbffc119ff8c24"]
      - values: {"a":2,"b":5,"c":11,"d":2}
        answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
      - values: {"a":4,"b":3,"c":36,"d":2}
        answers: ["sha256:b8d926d2a5e1288c9304e254320049407dba8ba5968965daad3641b96b4c4ccf"]
      - values: {"a":5,"b":2,"c":1,"d":3}
        answers: ["sha256:f2a490014bb9a9a7880c1d1e325866ec7ea9998d66fae9ed249f797b00c10312"]
      - values: {"a":3,"b":4,"c":5,"d":-3}
        answers: ["sha256:08165339490e6089b8c9706d04c057083734242352c1c09d94b9091a87e3c9a1"]
      - values: {"a":2,"b":7,"c":31,"d":2}
        answers: ["sha256:11b4e3d107c9ead370d5988313bdb607b2fa33279ce574f04f1f9091af18bc34"]
  - id: sistema-incompatible
    tier: 2
    prompt: |
      ¿Cuántas soluciones tiene el sistema $\begin{cases} 2x + 3y = 7 \\ 4x + 6y = 15 \end{cases}$? Responde «0», «1» o «infinitas».
    answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: trenes
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos trenes parten a la vez de dos estaciones separadas ${{D}}$ km y van uno hacia el otro, a ${{v1}}$ km/h y ${{v2}}$ km/h.
      ¿Cuántas horas tardan en cruzarse? Respuesta: un número.
    variants:
      - values: {"D":300,"v1":80,"v2":70}
        answers: ["sha256:428e6626ee917e611d114cd8331a8ca6cdf5ed8093db34736f4b774ccb5c75d2","sha256:eca80762762e88fdd4a5f221685df8101520085c9ccf2e765955c077b9c85375","sha256:b282ddc49f289577387c700a858d02a0f69a206e1c5a4d1929db8e8ca0beebd1"]
      - values: {"D":495,"v1":100,"v2":125}
        answers: ["sha256:da539ff47828ab72c11ee5506739c16e11b76aafd0b3f41bffee32a9fc5f97d1","sha256:b555a1ef5184baec44903a2eb0668a85ecff87aa0ae9543b2ab99a4a5812e985","sha256:140ad00f872aebf7f851a76319af71ee598f004f0e9be2523c0d885dec7f36dc"]
      - values: {"D":360,"v1":70,"v2":90}
        answers: ["sha256:cee50df9e682bf4b28eb8f4fdd8399cd2ca642a0da6b98140f65f34427bc65e0","sha256:9140fa6befd513044c5ffb1074255e49346b51c28100a7435c31a72173528525","sha256:f4a41ae146163b57b2654b27d440734c0b421a70782c12eeb1130c0e1387921e"]
      - values: {"D":210,"v1":60,"v2":80}
        answers: ["sha256:35dc4785dbdf50a53c1030a36f97d9c52a819d98c2134885140e9cfbff4104cc","sha256:e5b898c8f8f88316523623dda6b2cc7b786da8dd89a62fb2c0d069409fd33463","sha256:21199c2483735dac9f9286dabafde750cbbd7d9a7a0634ed126bd4ab7dcc4554"]
      - values: {"D":675,"v1":110,"v2":160}
        answers: ["sha256:d29ad2f37242150f01bc0553a561473d327a506c1b5541121ca32724152c8fc5","sha256:b6c0a8ccdaf9ba631bb1c659688e8df67245a0688315aa6b0de74d2b38ad1f29","sha256:b2d35790ade2733eaca3998b25a4c749f387c50c4b062608b3acb92c6781124b"]
      - values: {"D":245,"v1":75,"v2":65}
        answers: ["sha256:7a1fe2438b23af7733f8fc5e6604115b778876051f8c460535c41e7691562ca4","sha256:12b92517a31d832ac6bac295d627cc5d4dbf20bbfad95f3759a658efd2386a31","sha256:e45d5966cf5b3621d4ecebdbe4ec52e6a2a28b20d1cfac57aba2b24b20b91e34"]
  - id: edades
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Hace ${{k}}$ años la edad de un padre era {{p}} de la de su hijo. Dentro de ${{k}}$ años será {{q}}. ¿Qué edad tiene
      ahora el hijo? Respuesta: un entero.
    variants:
      - values: {"k":5,"p":"el triple","q":"el doble"}
        answers: ["sha256:24ea0d12a7d5781df7be3e0e3b40f7392b163a68ba3288165ca2addd3da98c3b","sha256:76c87e3682938feff954aba992e05797f18df69810fa5c547bc5080f5d468b9e","sha256:e710e8a24d1bb1a6fb7f5918325994f5f289bb0299fc4d2bd2a6220fa25bd15d"]
      - values: {"k":4,"p":"el triple","q":"el doble"}
        answers: ["sha256:78238bcf9d1f0e3ff492ed42e857a24e193a2d56551f7273dd3548e30ffa1af3","sha256:ee52f66cf7df89af07e438acc2626b2ae13570c7054cd1c0678e1ab01265bef8","sha256:826dc059f764640e3b28e44d741fb63bfd038c631d9566009b7da42ddfcbe7e2"]
      - values: {"k":6,"p":"el cuádruple","q":"el triple"}
        answers: ["sha256:4073c927d07be173a25912efd09c0f672731321954fbf3a92ff080b5e042596e","sha256:54a1ed318e5e1a2c28d0660c2215405df7ffb623d9dcac11293abe5db1c0d7c8","sha256:5506d55328d409846e9fc00499c0cc350030255f3510d08005abdb2e87f28d1c"]
      - values: {"k":3,"p":"el quíntuple","q":"el triple"}
        answers: ["sha256:006bca9e5423670e0e24471c023b3841f23a5317d963e7c09ed84761ed5b21f0","sha256:a45155d4c99f910572c5e5e21bc94018c2802f233f8a368fd36fe100eef122bd","sha256:ffc770a7125bbaca52ca51d4005c302a0d598dd7dfc1f7a42531a8ca1bc782c1"]
      - values: {"k":10,"p":"el triple","q":"el doble"}
        answers: ["sha256:3741459a092b9a6e1c63b616bf970678612c4fdcca28e5ae4d4d62cf72062fa5","sha256:6e5fa145ff1087b32dcf042d84afe5d8b09225ff007cc4ee295ae09e2324420a","sha256:12008042883aa86295146135242bd6a038ce136225cf3343089e855f4962d55d"]
      - values: {"k":2,"p":"el cuádruple","q":"el triple"}
        answers: ["sha256:964fa4241382896d23535d699fbbf12f139729abe845f3721a873c132c44c828","sha256:be9e9876ef2bfd126a1c411e549a099bfc335c139a9a10d23fa8f4d6e09046e2","sha256:0a83e285f382e0587ed6bc91f2e1e57859c244446cd2f8ef78626cab890cb093"]
  - id: inecuacion-doble
    tier: 3
    prompt: |
      ¿Cuántos números **enteros** $x$ cumplen $-3 < \dfrac{5 - 2x}{3} \le 4$? Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: identidad-notable
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Si $a + b = {{s}}$ y $ab = {{p}}$, calcula $a^2 + b^2$ **sin** hallar $a$ y $b$. Respuesta: un entero.
    variants:
      - values: {"s":10,"p":"21"}
        answers: ["sha256:673adc7bfbfb6ef5f1f84f1feade23b32bf8c0fe1bd1acd2693ed5610571ec7d","sha256:45971ec8d911add230e42643ef6d6c580c719184a361d56936b429c5633d9374","sha256:36f04e960d0b931b2e4b39dbea442b66df4de79eafe97f865b9e99285463b38d"]
      - values: {"s":7,"p":"12"}
        answers: ["sha256:74c3143b28d003f73c57913674ed7798c529dfcd16ec913f733736d3f5c1684d","sha256:0465fd1129e75b06c22d32ccb814502f7a71066062a2557d7259f95524811027","sha256:c8d11e627c7467d25963e40aab7c8001d90a1e41608b584501c71c50e247e629"]
      - values: {"s":9,"p":"14"}
        answers: ["sha256:0cdb01c3dad1be12dc821449e6f99f0c8b66b5448e371d8a07293fdc5a6d3b94","sha256:2d39283389beaa1efcc08e036d51043734c6f0c14facdaadfa073c28c5a20051","sha256:a195ccc6e4161add48f068476ebc30105b4eaaf0dba5062132f08fe14c84aad8"]
      - values: {"s":12,"p":"35"}
        answers: ["sha256:4a025af5e6d03bccdc95771ce790edb89f2dfed5c65ba8a6b430e0bb8af68d40","sha256:a11b6f1af7687dde03903cf76f202d16a6ec56c7ffd24fbe8c7011f6c7045251","sha256:fd6d6b4d67a5b3c94b9f2273697cd7cc14e338f86fc0e3001b58aa1572defb0c"]
      - values: {"s":5,"p":"(-6)"}
        answers: ["sha256:2d0f98fe7b744a86633d6bfe084b2c7665d88b7c71f3fbcd4ed2df651349e575","sha256:4cf4bf06d188e65e3ebdaa3cca759c7c2ff17274343e36905a697aeffab5c5d2","sha256:c2af21abd3f7f867058ced755628f3d2f386cbd3089d00a427c6595b13a8bc6b"]
      - values: {"s":11,"p":"30"}
        answers: ["sha256:3269baa6a1f21c09a6378ca78b8d82ba49da262f98918b1dcbf4956fb4cd6547","sha256:075824b48996323114c563fc6e300d75adb725c0761cd32d1df171de5c5084d1","sha256:2eda0e1db4174ef09a4bc9ed16906d9a982c1697232ebd48b652819de338adfd"]
  - id: cuadrados-2026
    tier: 3
    type: numero
    sig: 8
    prompt: |
      Calcula ${{n}}^2 - {{m}}^2$ sin usar calculadora, con un truco algebraico. Respuesta: un entero.
    variants:
      - values: {"n":2026,"m":2025}
        answers: ["sha256:2c2a5a50772cc55cba324de67fdb75f655c10d3db19692a7a99021b9c8ad02bd","sha256:04a768ea625f6b93a0b8151cdf36aa6cf4e38dd710345efa53c130952e25232a","sha256:0916b79e91ea9db0f302888f64458d7f886242b356cfd29d923e7ee3472192c0"]
      - values: {"n":1001,"m":1000}
        answers: ["sha256:12c18bcda1aa39833d2a5e055e3c76b3914851b6c0ca7a3d16ce265f27e7a83b","sha256:e69b360ddf2b6a0263c2727a3e2464a1d43ab185a69f4f2d063757302e5331a4","sha256:fdb659f3570ad554127a4dc386dc5d4708a108be8e4c98ebc6f50cc2d70d3a29"]
      - values: {"n":500,"m":499}
        answers: ["sha256:90068831833ba2253bab9b05e4a08f381753f2327daeec4f5e3e2da79dbc663d","sha256:72d63ce7a6f477f3f22756ab89d8eb96c0ab186cc95e8e5cd3faf3ac9c223257","sha256:39e3cddc15488d61ffb41ed7067a58cf9c4cb35418cc0a266e23ae4e845f0233"]
      - values: {"n":3333,"m":3332}
        answers: ["sha256:299e828bfcefb100fa050d65146c2afb6cf1100f29efc0ebf4c2354fae3cf429","sha256:bd595278d12e6986b55fd516a421a366142c48dfe8e0d4d13446b3159c245351","sha256:0570800299bdb0f9094cc3cc852d27d319759b74d4819c7edde44b9e4d330e39"]
      - values: {"n":750,"m":749}
        answers: ["sha256:b2c041cd2908ad1c0fb06c9c5279b11ca2a86a8c1ab76a80537e503ffaf2916b","sha256:c74076f8dd139f164f413e5e1e5726baa7635ffb8a20553480c6f6262136db78","sha256:8fa6c2d53639ded27ac9f9cf76571710ba8a06267ffc763cbd37ae4099058567"]
      - values: {"n":2048,"m":2047}
        answers: ["sha256:e64ecc04b56a7f806ad0e06da3f3ea370f679ac6e3c79932bb7f7fea6c1984ae","sha256:241a7c62a66f9f80aaf40730ec1b6c61b014718312a6e8c10d1ed6bf8b283212","sha256:093bde22958ff9903a4976c2e57624238a20225c58af495cf7d26a60cac5696e"]
  - id: parametro
    tier: 3
    prompt: |
      ¿Para qué valor de $k$ tiene el sistema $\begin{cases} kx + 2y = 4 \\ 3x + 6y = 12 \end{cases}$ **infinitas** soluciones?
      Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: dilucion
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se tienen ${{V}}$ litros de una disolución al ${{p}}\,\%$ de alcohol. ¿Cuántos litros de agua hay que añadir para que
      quede al ${{q}}\,\%$? Respuesta: litros, un número.
    variants:
      - values: {"V":30,"p":40,"q":25}
        answers: ["sha256:c0c049fd6a987791338adf2c5ab5b2da1ac60d3647a5e12d12977245244cf48a","sha256:790f463fe68695775b9c1a25dcabbd6c5297ee7ac947965a012dbde54af13c08","sha256:e30b4806cd4a4bccf9bf8410d140dee83d4a0b32bfef0d0b122974ad98a227fc"]
      - values: {"V":20,"p":50,"q":40}
        answers: ["sha256:d3f41f3c8848f11e88d88b60ed1e53ea481931077f897bf551212041745fc17d","sha256:1eefe3797a12fb0523d65eecfb587a8c20f33c7308728542fa6ed688ee9dbf2a","sha256:0483d496bf9a37c427c4ff6d4125c860a020088bfa6d5183cf70c68af0a5642a"]
      - values: {"V":12,"p":30,"q":20}
        answers: ["sha256:443fec976cff67fa2ee126dca91a192b661a2bf1d6ebd07a919feba79895a407","sha256:4831db18f0f05ef3c673107ebdf54f5539336ca12e8ae89152908756cc1d608e","sha256:e3e284acf101ba7401ae216a7dc683f5da00ea3693964ed46f41bd893e747d84"]
      - values: {"V":50,"p":18,"q":15}
        answers: ["sha256:86b0c55abc905721d7ac702314578a8ab5d889b4007c513b8e9b55ace6dc4807","sha256:7c3632612340db101e565023c2b04bc3af5270004d5c7b168c99e144ff96cbdf","sha256:dd9e43c629e53ec164d01dc22152c822d77ecabc05d24008a85af7f2984b2c4a"]
      - values: {"V":40,"p":35,"q":28}
        answers: ["sha256:26b16abd6731f64f3e023e666084dc0086f25703df2dec7c4ff0d4b855e5b821","sha256:145b057c8bfbbd8516b72fba5f151215dd8e3b5f9a64f9c18b39200a2a739458","sha256:0c245f5ebf4002318d3b58d416d2af2f5b98db630647aad597e694af2b4289e0"]
      - values: {"V":15,"p":60,"q":45}
        answers: ["sha256:fd3079176681e086c92a666dee9f01f8dd909bbb830a738c58a94713374e2164","sha256:55d2946496f4f36ca721c4ca66a04a41b0d525c048035590f003531629639c27","sha256:3c23f44bc78ba6e2a05f296c4529d659fd177d564a15394225b6fe6df288e742"]
  - id: dos-cifras
    tier: 3
    prompt: |
      Un número de dos cifras es igual a $4$ veces la suma de sus cifras, y al intercambiar las cifras el número aumenta en $18$.
      ¿Cuál es el número? Respuesta: dos cifras.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: r-traducir
    tier: 1
    type: opcion
    review: true
    prompt: |
      «El doble de la suma de un número y $3$» se escribe:
    options:
      - |
        $2x + 3$
      - |
        $2(x + 3)$
      - |
        $x + 3 \cdot 2$
      - |
        $2 + x + 3$
    answers: ["sha256:2442d3f944cc660762c641581a8a37253c7818b33ed61fedf52789f62cd0500f"]
  - id: r-cuadrado-binomio
    tier: 1
    type: expresion
    review: true
    vars: ["x"]
    form: expandida
    prompt: |
      Desarrolla $(x - 5)^2$. Respuesta: la expresión sin paréntesis.
    answers: ["sha256:41acc5fc2ddc7f698e33f48cca12669c6defc75a840b837ca524f24cdd83fcc7","sha256:032fdf8d516b71eddc9027d32bbc38a1589a6277086b232dacfea62ed1b19f92","sha256:f2306d4968855a35a05175015ba589d2a18f559fcd45730e34593caa294c84d2","sha256:19565492d841ad492af8fc812dd5af70eeeb70e7b39dc2e3d322b6084fe4aadd","sha256:1f1149df654e9ff69444805dc96260253271e92b6c47032f7e1c5ae9518f87a3","sha256:e7097dfe95169deab0b1aa556f07acd06905ffa92c33a10135638781a3f95eb6","sha256:e65246272ae372389e1d3092bf8b5cb666fbfb862351045bd0a4bcad7f2a338d","sha256:6228a35b502089a46253db2b640cc4aa81483d0824d873d8287ccc1c6f29b78c","sha256:36c0f174977a3307d926f4bba792e55a8a62676dcf28494ec0343b28a0631c2a"]
  - id: r-inecuacion-signo
    tier: 2
    type: opcion
    review: true
    prompt: |
      Resuelve $-3x + 1 < -5$.
    options:
      - |
        $x > -2$
      - |
        $x < 2$
      - |
        $x > 2$
      - |
        $x < -2$
    answers: ["sha256:fb02f579512b8363db98768157f2d0a3d62cbc7eb3dccbbc330374408c81bf5a"]
  - id: r-sistema-casos
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuántas soluciones tiene $\begin{cases} x + 2y = 3 \\ 3x + 6y = 9 \end{cases}$?
    options:
      - |
        Infinitas: la segunda ecuación es la primera multiplicada por 3
      - |
        Ninguna: las rectas son paralelas
      - |
        Una: $x = 1$, $y = 1$
    answers: ["sha256:c223319122b02f4ac16033c8afb2dd86d49e3c02ac0c52581681e2dc2c4cda4a"]
  - id: r-despejar
    tier: 2
    type: expresion
    review: true
    vars: ["E","m"]
    domain: [1,5]
    prompt: |
      La energía de un objeto en movimiento es $E = \frac{1}{2} m v^2$ (con $v > 0$). Despeja $v$. Respuesta: una expresión en
      $E$ y $m$ (usa `sqrt` para la raíz).
    answers: ["sha256:1a834efd080deb8f759cfbc3bdba16876bf69a39b565e46f6bac1ab81dfd56bd","sha256:2fdf878918993ba9b5551aff491a7a8e28b3712049179f66c10a293aa14d653f","sha256:b39c07c4813e8564d0ed1b8a40f5c975711a2199876b521d29b859f1d16bd127","sha256:8f5790d64494b12cdf81d91a87637fb1cd71390508a02bfb1a9a31c752c0ab96","sha256:50e0583314564a35a316cc6b747e3d55aa83f9f24fe51fe0aa4a1ed13c408439","sha256:99900d0d15ab9e7a86440cb19a7084def9bb3ecd56f4d4354afecf945ffdbdd1","sha256:9c47f920cf52146f9a797c0ffef6435b46865be7fd802233d5dc53b83c7c8f68","sha256:30e18cb4cdabe273dd25842f7f6f9c98dbd9d9d764b9d2b09fba17803ac4a0b8"]
  - id: r-mezcla
    tier: 3
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos litros de zumo puro hay que añadir a $6$ litros de una bebida con un $20\,\%$ de zumo para que tenga un
      $52\,\%$? Respuesta: litros.
    answers: ["sha256:3e64cbcd5ae0b405e0fcc75dca1f5215d68c096246185e42633225ed98f03f07","sha256:cb2337ec495f9f18c2bf688cef92e66f44737f9c7c053f4a6e4dacc7b6ac69a4","sha256:a64c4195a7acdc3010be8210307ec97f8ac481de048e05a8a3f12ab96a5ad9c4"]
---

# Álgebra básica: letras, ecuaciones y sistemas

El álgebra es la aritmética **con letras**: en lugar de calcular con un número concreto, se razona con uno
cualquiera, y lo que se demuestra vale para todos a la vez. Esa idea, simple, es la herramienta con la que se
escriben las fórmulas de la física, las hojas de cálculo, los programas y casi todo el resto de las
matemáticas. Este nodo enseña a **manejar** expresiones, a **resolver** ecuaciones y a **traducir** problemas
reales al lenguaje algebraico.

## Objetivos

Al terminar sabrás:

1. Traducir frases a expresiones y ecuaciones, y viceversa.
2. Simplificar expresiones con las propiedades de las operaciones, y usar las identidades notables.
3. Resolver ecuaciones de primer grado (con fracciones y paréntesis) y despejar fórmulas.
4. Plantear y resolver problemas (edades, móviles, mezclas, cifras, repartos).
5. Resolver sistemas de dos ecuaciones con dos incógnitas por tres métodos y reconocer cuándo no tienen
   solución o tienen infinitas.
6. Resolver inecuaciones lineales sin cometer el error del cambio de sentido.

> [!question] Test de entrada
> 1. ¿Cuánto vale $2x + 3$ si $x = 4$? 2. Simplifica $3a + 2a$. 3. Si $x + 5 = 12$, ¿cuánto vale $x$?
>
> Respuestas: $11$; $5a$; $7$.

## 1. Para qué sirve

- **Fórmulas**: $F = \frac{9}{5}C + 32$, $\text{distancia} = \text{velocidad}\cdot\text{tiempo}$, el área de un círculo.
- **Programar y hojas de cálculo**: toda variable de un programa es una letra del álgebra.
- **Decidir con números**: ¿qué tarifa de móvil conviene?, ¿cuántas unidades hay que vender para
  cubrir costes?, ¿cuánto tiempo falta para alcanzar a otro tren?
- **Ciencia e ingeniería**: nada se calcula sin despejar una incógnita.

## 2. Expresiones algebraicas

> [!practico]
> Una letra es una **caja con un número dentro** que todavía no conoces (o que puede ser cualquiera). En una tienda,
> «cada camiseta cuesta $12$ € y el envío $5$ €» se escribe $12x + 5$: vale para $1$ camiseta, para $3$ o para $100$; solo
> tienes que meter el número en la caja $x$. Una hoja de cálculo hace exactamente eso: la fórmula de una celda es una
> expresión algebraica, y cambias el dato sin cambiar la fórmula.
>
> **Sumar «cosas iguales»**: $3$ manzanas más $2$ manzanas son $5$ manzanas ($3a + 2a = 5a$), pero $3$ manzanas más $2$
> peras siguen siendo «$3$ manzanas y $2$ peras» ($3a + 2b$ no se junta).


Una **variable** es una letra que representa un número cualquiera. Una **expresión algebraica** combina
números y variables con las operaciones: $3x + 5$, $\frac{a + b}{2}$, $x^2 - 4x$. El **valor numérico** se obtiene
sustituyendo: $3x + 5$ para $x = 4$ vale $17$.

### Traducir del español al álgebra

| Frase | Expresión |
|---|---|
| un número aumentado en $7$ | $x + 7$ |
| el triple de un número, menos $2$ | $3x - 2$ |
| la mitad de la suma de dos números | $\dfrac{a + b}{2}$ |
| tres enteros consecutivos | $n,\ n+1,\ n+2$ |
| un número de dos cifras (decenas $a$, unidades $b$) | $10a + b$ |
| el $15\,\%$ de $x$ | $0{,}15\,x$ |
| $A$ es $5$ más que $B$ | $A = B + 5$ |

Es la parte más difícil y la más importante: un error de traducción no lo corrige ningún cálculo posterior.

### Las reglas son las de siempre

Las propiedades de los números (conmutativa, asociativa y, sobre todo, **distributiva**) siguen valiendo con
letras:

$$
a(b + c) = ab + ac, \qquad -(a - b) = -a + b .
$$

Un **término** es un sumando; dos términos son **semejantes** si tienen las mismas letras con los mismos
exponentes ($5x^2$ y $-3x^2$ lo son; $5x^2$ y $5x$ no). Solo se suman y restan términos semejantes.

**Ejemplo resuelto:** $2(3x + 1) - (x - 4) = 6x + 2 - x + 4 = 5x + 6$. Fíjate en que el signo menos delante del
paréntesis cambia **todos** los signos de dentro.

**Factor común** es la distributiva leída al revés: $6x + 9 = 3(2x + 3)$.

**Potencias.** $x\cdot x = x^2$, $x^2\cdot x^3 = x^5$, $(xy)^2 = x^2y^2$, pero $(x + y)^2 \ne x^2 + y^2$: este es el
error más frecuente del álgebra, y la siguiente sección lo corrige.

## 3. Identidades notables

> [!practico]
> Dibuja un cuadrado de lado $a + b$ (por ejemplo $3 + 2 = 5$ cm) y pártelo con dos líneas: salen un cuadrado de $3 \times 3$,
> otro de $2 \times 2$ y **dos** rectángulos de $3 \times 2$. El área total, $25$, es $9 + 4 + 6 + 6$. Por eso
> $(a + b)^2$ **no** es $a^2 + b^2$: faltan los dos rectángulos, el famoso $2ab$. Puedes comprobarlo en el lienzo de tu
> Libreta.


Una **identidad** es una igualdad que se cumple para **todos** los valores de las letras. Tres son tan útiles
que conviene saberlas de memoria:

$$
(a + b)^2 = a^2 + 2ab + b^2,\qquad (a - b)^2 = a^2 - 2ab + b^2,\qquad (a + b)(a - b) = a^2 - b^2 .
$$

> [!formal] Con rigor: demostración
> *Demostración algebraica.* $(a + b)^2 = (a + b)(a + b) = a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$, y la tercera:
> $(a + b)(a - b) = a^2 - ab + ba - b^2 = a^2 - b^2$.
> *Demostración geométrica* (ya la conocía Euclides, *Elementos* II.4): un cuadrado de lado $a + b$ se parte en un
> cuadrado de área $a^2$, otro de área $b^2$ y dos rectángulos de área $ab$ cada uno. $\blacksquare$

**Para qué sirven en la práctica:**

- Cálculo mental: $99^2 = (100 - 1)^2 = 10\,000 - 200 + 1 = 9801$; $51\cdot 49 = (50 + 1)(50 - 1) = 2500 - 1 = 2499$.
- Simplificar: $(x + 3)^2 - 9 = x^2 + 6x$.
- Más adelante, para resolver ecuaciones de segundo grado y en el cálculo de límites.

Comprueba siempre una identidad **sustituyendo un número**: $(x + 3)^2$ con $x = 1$ da $16$ y $x^2 + 6x + 9 = 16$.

## 4. Ecuaciones de primer grado

Una **ecuación** es una igualdad que se cumple solo para ciertos valores de la incógnita. Resolverla es
encontrarlos. La imagen clave es una **balanza en equilibrio**: lo que se haga a un platillo se hace al otro.

**Principio de equivalencia.** Sumar o restar la misma cantidad a los dos lados, o multiplicar o dividir
ambos por un número **distinto de cero**, da una ecuación con las mismas soluciones. (Multiplicar por cero
destruye la información: de $x = 3$ se obtiene $0 = 0$, que se cumple siempre.)

**Ejemplo resuelto:** $4(x - 2) = 2x + 6$.

$$
4x - 8 = 2x + 6 \;\Rightarrow\; 2x = 14 \;\Rightarrow\; x = 7 .
$$

**Comprobación (siempre):** $4(7 - 2) = 20$ y $2\cdot 7 + 6 = 20$. $\checkmark$

**Con fracciones:** se multiplica por el mcm de los denominadores. $\dfrac{x}{2} + \dfrac{x}{3} = 10$:
multiplicando por $6$, $3x + 2x = 60$, luego $x = 12$.

### Cuántas soluciones puede tener

- **Una** (lo habitual): $2x + 1 = 7$.
- **Ninguna**: $2(x + 1) = 2x + 5$ lleva a $2 = 5$, imposible: la ecuación es **incompatible**.
- **Infinitas**: $3(x + 2) = 3x + 6$ lleva a $6 = 6$: es una identidad, se cumple para todo $x$.

### Despejar una fórmula

Es resolver una ecuación en la que otras letras hacen de números. De $v = \frac{d}{t}$ se obtiene $t = \frac{d}{v}$.
De $A = \frac{b\,h}{2}$, $h = \frac{2A}{b}$. De $F = \frac{9}{5}C + 32$: $C = \frac{5}{9}(F - 32)$. Se aplican los mismos
pasos, en orden inverso al de las operaciones.

## 5. Plantear y resolver problemas

Pólya (1945) propone cuatro fases; en problemas de álgebra se concretan así:

1. **Entender**: ¿qué se pide? ¿qué datos hay? ¿en qué unidades?
2. **Plan**: elegir la incógnita (una letra con significado claro, «sea $x$ la edad del hijo») y traducir cada frase.
3. **Resolver** la ecuación.
4. **Comprobar en el enunciado**: ¿el resultado tiene sentido (no hay edades negativas)? ¿cumple todas las condiciones?

**Ejemplo resuelto.** *Un rectángulo mide $5$ m más de largo que de ancho y su perímetro es $50$ m.* Sea $w$ el ancho;
el largo es $w + 5$. Perímetro: $2\bigl(w + (w + 5)\bigr) = 50$, es decir $2w + 5 = 25$, $w = 10$. Mide $10 \times 15$.
Comprobación: $2(10 + 15) = 50$. $\checkmark$

**Esquemas típicos:**

- **Movimiento**: $d = v\,t$. Si dos móviles se acercan, las velocidades se **suman**; si uno alcanza a otro, se
  **restan**.
- **Mezclas**: la cantidad de sustancia pura se conserva: $\text{volumen}\cdot\text{concentración}$ antes $=$ después.
- **Edades**: la diferencia de edades no cambia con el tiempo; todos suman lo mismo cada año.
- **Cifras**: un número de dos cifras es $10a + b$ y, al invertirlo, $10b + a$.

## 6. Sistemas de dos ecuaciones con dos incógnitas

> [!practico]
> Dos amigos van al cine: uno paga $2$ entradas y $1$ bolsa de palomitas, $19$ €; el otro, $1$ entrada y $2$ bolsas, $17$ €.
> ¿Cuánto cuesta cada cosa? Con una sola compra no se puede saber (hay muchas combinaciones de precios que dan $19$),
> pero con **dos** datos distintos sí: es un sistema de dos ecuaciones. (La entrada cuesta $7$ € y las palomitas $5$ €;
> compruébalo.) Cada método es una forma ordenada de quitarte una incógnita de encima para quedarte con una ecuación
> normal.


Un **sistema** es un conjunto de ecuaciones que deben cumplirse a la vez, por ejemplo
$\begin{cases} x + y = 10 \\ x - y = 4 \end{cases}$. Hay tres métodos, equivalentes entre sí:

**Reducción** (sumar o restar las ecuaciones para eliminar una incógnita): sumando, $2x = 14$, $x = 7$, y de la
primera $y = 3$.

**Sustitución** (despejar una incógnita y llevarla a la otra ecuación): en
$\begin{cases} y = 2x - 1 \\ 3x + y = 9 \end{cases}$ se sustituye: $3x + 2x - 1 = 9$, $x = 2$, $y = 3$.

**Igualación** (despejar la misma incógnita en las dos y igualar): $y = 10 - x$ y $y = x - 4$ dan
$10 - x = x - 4$, $x = 7$.

**Interpretación geométrica.** Cada ecuación $ax + by = c$ es una **recta** del plano, y resolver el sistema es
encontrar su punto de corte. Por eso hay tres casos:

| Rectas | Soluciones | Señal |
|---|---|---|
| se cortan en un punto | **una** | no son paralelas: $a_1b_2 - a_2b_1 \ne 0$ |
| paralelas distintas | **ninguna** | mismos coeficientes de $x, y$ pero distinto término independiente |
| coincidentes | **infinitas** | una ecuación es múltiplo de la otra |

Para $\begin{cases} a_1x + b_1y = c_1 \\ a_2x + b_2y = c_2 \end{cases}$ el sistema tiene **solución única** si y solo si
$a_1b_2 - a_2b_1 \ne 0$. Ejemplo: $\begin{cases} 2x + 3y = 7 \\ 4x + 6y = 8 \end{cases}$ tiene $2\cdot 6 - 4\cdot 3 = 0$, y como
$2\cdot 8 \ne 4\cdot 7$, es incompatible.

## 7. Inecuaciones lineales

> [!practico]
> Una inecuación responde a preguntas de «¿a partir de cuánto?»: «tengo $50$ €, cada entrada cuesta $7$ €, ¿cuántas puedo
> comprar?» es $7x \le 50$, con solución $x \le 7{,}1\ldots$: hasta $7$ entradas. Se resuelve como una ecuación, con una
> trampa: si multiplicas o divides por un número negativo, la desigualdad **se da la vuelta** (como $3 < 5$ pero
> $-3 > -5$: en la recta, al reflejar en el $0$, el orden se invierte).


Una **inecuación** usa $<, \le, >, \ge$ y su solución suele ser un conjunto infinito de valores (un intervalo).
Se resuelve como una ecuación **con una excepción esencial**: al multiplicar o dividir por un número
**negativo**, el sentido de la desigualdad **se invierte**.

**Ejemplo resuelto:** $-2x + 3 > 11 \Rightarrow -2x > 8 \Rightarrow x < -4$ (se dividió entre $-2$ y se invirtió el signo).
Comprobación con $x = -5$: $-2(-5) + 3 = 13 > 11$. $\checkmark$ Con $x = 0$: $3 > 11$ es falso, y $0 \not< -4$. $\checkmark$

Una doble desigualdad se resuelve de una vez: $1 \le 2x - 3 < 9 \Rightarrow 4 \le 2x < 12 \Rightarrow 2 \le x < 6$.

## 8. Errores típicos

- $(a + b)^2 = a^2 + b^2$ (**falso**; falta $2ab$).
- Olvidar cambiar **todos** los signos al quitar un paréntesis precedido de un menos.
- «Pasar términos al otro lado» sin entender que se está sumando o restando a ambos lados.
- Multiplicar por una expresión que puede valer cero (pierde o crea soluciones).
- No invertir el sentido de la desigualdad al dividir por un negativo.
- Dar la solución sin **comprobarla** en el enunciado original.
- Mezclar unidades (minutos con horas) al plantear problemas de movimiento.

## Repaso: lo que debe quedarte dentro de un mes

1. $a(b + c) = ab + ac$, y los signos de un paréntesis precedido de menos.
2. $(a \pm b)^2 = a^2 \pm 2ab + b^2$; $(a + b)(a - b) = a^2 - b^2$.
3. Ecuación = balanza; comprobar siempre; puede tener una, ninguna o infinitas soluciones.
4. Sistema $2\times 2$: reducción, sustitución, igualación; rectas que se cortan, paralelas o coincidentes.
5. Dividir por un negativo invierte la desigualdad.

## Siguiente

Con el álgebra básica, [[mat-funciones-basicas|el nodo siguiente]] dibuja estas relaciones en un plano con coordenadas, y
[[mat-geometria-basica|el de geometría básica]] trabaja con figuras, áreas y el teorema de Pitágoras.
