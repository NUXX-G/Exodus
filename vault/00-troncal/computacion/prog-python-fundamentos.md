---
id: prog-python-fundamentos
title: "Python desde cero: tipos, colecciones, funciones y archivos"
area: bajo-nivel
trunk_level: 2
prerequisites: [prog-pensamiento-computacional]
academic_sources:
  - "Python Software Foundation. The Python Tutorial, secciones 3 (introducción informal), 4 (control de flujo y funciones), 5 (estructuras de datos), 6 (módulos), 7 (entrada y salida) y 8 (errores y excepciones). https://docs.python.org/3/tutorial/index.html"
  - "Python Software Foundation. The Python Language Reference y The Python Standard Library (docs.python.org/3/)."
  - "van Rossum, G.; Warsaw, B.; Coghlan, A. PEP 8 – Style Guide for Python Code (peps.python.org/pep-0008/)."
  - "Downey, A. B. Think Python: How to Think Like a Computer Scientist, 3ª ed. O'Reilly, 2024."
  - "Abelson, H.; Sussman, G. J.; Sussman, J. Structure and Interpretation of Computer Programs, 2ª ed. MIT Press, 1996."
hints:
  - "Concepto: en Python todo es un objeto y los nombres son etiquetas que apuntan a objetos. Eso explica los alias (dos nombres, una lista), por qué un valor por defecto mutable se comparte entre llamadas y por qué la asignación no copia. Ante la duda, ejecuta un caso pequeño."
  - "Herramienta: abre el intérprete interactivo (`python`) y prueba cada expresión antes de contestar; `type(x)` dice el tipo, `help(f)` la documentación, `dir(x)` los métodos, `id(x)` la identidad del objeto (sirve para ver si dos nombres apuntan a lo mismo)."
  - "Documentación oficial: docs.python.org/3/tutorial/datastructures.html (listas, diccionarios, conjuntos), docs.python.org/3/tutorial/controlflow.html (funciones y bucles), docs.python.org/3/tutorial/errors.html (excepciones) y docs.python.org/3/reference/executionmodel.html (ámbitos y nombres)."
exercises:
  - id: operadores
    tier: 1
    prompt: |
      ¿Qué imprime `print({{a}} // {{b}}, {{a}} % {{b}}, {{a}} / {{b}})`? Respuesta con los tres valores separados por punto y coma, por
      ejemplo «1;2;3.0».
    variants:
      - values: {"a":15,"b":4}
        answers: ["sha256:7f151e83a4757c6e1d02abdc754c5b33977fb30259db5700639a12e1fd77d2f0"]
      - values: {"a":9,"b":4}
        answers: ["sha256:c41a2c934ef5c5a2f2c7072c228fcac0f17107ea614306a3b6cfd269d06fd360"]
      - values: {"a":11,"b":8}
        answers: ["sha256:e8abae28d9d0aa5c9f4dd0e90d57ef59a86ab730ef8f96e645cfbc8212f75caa"]
      - values: {"a":13,"b":5}
        answers: ["sha256:9d833a3ef8a92d916dcf7b746e3093311de3fcf0654bcad8630f2a2a25c1adf5"]
      - values: {"a":17,"b":4}
        answers: ["sha256:c8173ea41c56cc1ae03396ada46171351a96dfe544057f25b57453be9558eac3"]
      - values: {"a":23,"b":8}
        answers: ["sha256:216a697684eef673061724ac85dc3962de41ddfa3c9b76115212afb0b588fffa"]
  - id: rebanadas
    tier: 1
    prompt: |
      Con `s = "{{s}}"`, ¿qué imprime `print(s[{{i}}:{{j}}].upper())`? Respuesta: el texto impreso (sin comillas).
    variants:
      - values: {"s":"aprendizaje","i":1,"j":6}
        answers: ["sha256:7d126cce57c57d3114e9ec89d8c96186cb8bd9b4ad2cc87c1a55a4870535e741"]
      - values: {"s":"programacion","i":0,"j":4}
        answers: ["sha256:3d1f2ae627a3560aebf3b9c4998e92b8dae4a19f350e6992e51513cb14fb113c"]
      - values: {"s":"universidad","i":2,"j":7}
        answers: ["sha256:31ce0061a7d8c43a5de410086da522cfbb1748ba35232c960daac769ebf6fff6"]
      - values: {"s":"exodus","i":1,"j":5}
        answers: ["sha256:972a2683e811962f73ba5496a813bb614c2b5b93f549d2208d2382e28fc7c977"]
      - values: {"s":"matematicas","i":4,"j":9}
        answers: ["sha256:50b9984bd9eb2b8837f97266b81ae2f8922a0272c40818dfabffdb6b66066a17"]
      - values: {"s":"electronica","i":6,"j":11}
        answers: ["sha256:49102b78c91a23e08eb3ff400e2c4bfd121b66ea19dd5747387fc6f1d8b2ed8f"]
  - id: formato-decimales
    tier: 1
    prompt: |
      ¿Qué imprime `print(f"{{{x}}:.{{d}}f}")`? Respuesta: el texto impreso.
    variants:
      - values: {"x":"2.718281828","d":2}
        answers: ["sha256:902795fe6daca24ce5bca2a8f7c9de0201f677be45668721b8d56e7312ee8a6e"]
      - values: {"x":"2.71828182","d":3}
        answers: ["sha256:48587d28518aa9e93fcf1d78f0baa69fa5de133b6907146f4c2dba39ed97b568"]
      - values: {"x":"1.41421356","d":1}
        answers: ["sha256:1a948f1b4374f4e3f02501c7feb43784021718a93c1ed5f9f19adf357bb2d20e"]
      - values: {"x":"9.87654321","d":2}
        answers: ["sha256:c959f158db7290c5a5d39a20947bb58d863348684dcda2ef44cb159b0ba6e494"]
      - values: {"x":"0.0049","d":2}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
      - values: {"x":"123.456789","d":0}
        answers: ["sha256:a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"]
  - id: comprension
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Qué número imprime `print(sum(x * x for x in range(1, {{N}}) if x % {{k}} == 0))`?
    variants:
      - values: {"N":31,"k":3}
        answers: ["sha256:6cbcd5e961b4e25d7f9c6fd04c9933b18b872be1e7082f4af84c115657ac82f8","sha256:2ced292c428538517337900fc8d0434cc745fd6d10fa0718072ca40b876c46df","sha256:50e5b39966cb3b41626e439d568788dcaad41bd5a598be39d86ddccdac1a527a"]
      - values: {"N":51,"k":5}
        answers: ["sha256:3a0484196bc376fbe5477c9b16862964329b2b0af7fc33f97a8c0820583b184b","sha256:e44f3b20da3e94e50423945284c4cdad5f42bb02560865495a084ceec112922a","sha256:0c4490e6164a8bbe07eb343056b13a5e3593e159f67c8c86e79dfdd8a83cf616"]
      - values: {"N":21,"k":3}
        answers: ["sha256:d2be9afa560a9391858ec372b10869250073ed7b2dd9c481e3ac04edc021cadb","sha256:027c6022468942d9bfab2f0f830e6f29d9d99346c153599a7987b372c20744c9","sha256:26fc8184c22550099c4bae781339605d176bc3b1c6b596e51bd88075d82e5c73"]
      - values: {"N":101,"k":7}
        answers: ["sha256:4b3bc83ae5a8b9c9bd17e0ce5f51a75d8b36959a1cf73d4316ef3f185f8439e5","sha256:285f470416be779e3a5e18079d91776405d28d886834ad35a20f40f24ddf7d67","sha256:9174521ad4aee24e2f55aa44db6ad3787f6d98f2493b283c4d9cb6fab6cd78f3"]
      - values: {"N":41,"k":6}
        answers: ["sha256:c5e2d7670710e63a194e158d71d102e98facbef7185769cff72652de3a59993b","sha256:e2fd8b02d11e4670e939e4c5dff0f99f8abe4fad2d3f22ffebfbcfe70a1de7e1","sha256:63503a1f3725484547695ee9519353f0b8c48170a0281cf35ca2d8efd712708e"]
      - values: {"N":26,"k":2}
        answers: ["sha256:939d26068dc8d5b3bfba551962179032992bee2f1b2b45af5cd1262e4b178e77","sha256:29fb7566ce46c975b4d1387a20d65964a5d9ff897ccd41060154e520e8ff1f6b","sha256:e2a34d7db31cff4ea5cf8f6805f94f083a2c7d052d2922732626fd39d6f16bb6"]
  - id: argumento-mutable
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Qué número imprime este programa? (Es una trampa clásica de Python: piensa **cuándo** se crea la lista del valor por defecto.)

      {{codigo}}
    variants:
      - values: {"codigo":"~~~python\ndef f(x, L=[]):\n    L.append(x)\n    return L\n\nf(1)\nprint(len(f(3)))\n~~~"}
        answers: ["sha256:569c298c15f0caf6ba63487fd18350674b517afa4e8c95bc6172e04d1d894aba","sha256:ddfa7d0a14e3597d958e9c4ad7747bfe354c2abaa447651d7b25194d13f3f521","sha256:e48b8b65630f9d737feff5cc5951eccdadd70da62e7768cd6d64703b21814300"]
      - values: {"codigo":"~~~python\ndef f(x, L=[]):\n    L.append(x)\n    return L\n\nf(1)\nf(2)\nprint(len(f(4)))\n~~~"}
        answers: ["sha256:87201cf348c942bad0f30495fa94d2e6a0b70dfb624c60a81c469395337911fc","sha256:7909e8cec22ab0ff4ca7e1398621e4e6cabc7f2712149201f11468e67827233c","sha256:cb09faa65934a71bf788aacd284d532a5ab7144289dfdde0e410e900ce71fb21"]
      - values: {"codigo":"~~~python\ndef f(x, L=[]):\n    L.append(x)\n    return L\n\nf(1)\nf(2)\nf(3)\nprint(len(f(5)))\n~~~"}
        answers: ["sha256:a8a34805cebad4ab01437bda72110b2d4aeb00272cca61186eeaece77af29215","sha256:7cc8a4e45c752e9b6043eb6aae902ae8817de922724468ec5754e11ba08b4bb4","sha256:755ee000909e4b4f8d6f1fcb43849a6625146b10f31b96ee041d1bf988a166a6"]
      - values: {"codigo":"~~~python\ndef f(x, L=[]):\n    L.append(x)\n    return L\n\nprint(len(f(2)))\n~~~"}
        answers: ["sha256:585e507f0a2d6744497be29f31cc2dca086dde17c3c29ade39b4ca983060ea17","sha256:130b5f4c183758e8e4dc080b4b3600351bc1c142dbef009b7d04cca4ee211761","sha256:69cb336c1e8e438d7daf6964815f3ea9d750168f3cbc5532714e3772a4f6d3ab"]
      - values: {"codigo":"~~~python\ndef f(x, L=[]):\n    L.append(x)\n    return L\n\nf(1)\nprint(len(f(6)))\n~~~"}
        answers: ["sha256:a6f21ccd46f93606c01dfbae44b20c10e2aede08322c4191abb2b3634b5a4079","sha256:bd7019a62bc9b1290cc8cac0d9b334338c475479d380567eabb63481bd8e29b9","sha256:6fcfcd1d2a60a4f9eeda3ec814318df1adabdf72ac0f5b554c236121f45de272"]
      - values: {"codigo":"~~~python\ndef f(x, L=[]):\n    L.append(x)\n    return L\n\nf(1)\nf(2)\nf(3)\nf(4)\nprint(len(f(7)))\n~~~"}
        answers: ["sha256:2f9bbdda67ba7c309da229ae171b98461a1c2a6acd534b6c0f810e972bea64f4","sha256:f0190f6d40977684d964c2e1bba101127f92fa2f1eb68495fb4cdcce0d80d039","sha256:6d67f4b39e27e0cdf428e1be4ce32cf916fd1f011f9d04472dbb09eddc9c98eb"]
  - id: alias-de-listas
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Qué número imprime este programa?

      {{codigo}}
    variants:
      - values: {"codigo":"~~~python\na = [1, 2]\nb = a\nb.append(3)\nprint(len(a))\n~~~"}
        answers: ["sha256:76ace12796058cc44ca4a8c977663cc90794576073a1cdc12276df54b4d42eaa","sha256:f97a164fc0d921840e2b84267d93daf150c251ddc129361723ea99c064596795","sha256:5305ac1299a286520682fec19c0e29729a8551c02d398bd3c31101e5838dc778"]
      - values: {"codigo":"~~~python\na = [1, 2, 3]\nb = a\nb = b + [4]\nprint(len(a))\n~~~"}
        answers: ["sha256:6b9073c2f727e3071a960b25caec13621f7b3310da2fe9603a4d21982d5e1d73","sha256:ae1ea6e5d34bd28fb7a1b8cab433d232080292ae8dcd8ad205c025baac99da9d","sha256:5f17a70ee25f57f79b28d7b64f06e7621bb61820ce7568922eeee1905b6c5281"]
      - values: {"codigo":"~~~python\na = [5]\nb = a\nb.extend([6, 7])\nprint(len(a))\n~~~"}
        answers: ["sha256:4fc9eebef8324e7b1524779df1c1cf5a092d7402e43ecacfa1db506576de1b1e","sha256:879d3b314d8413bc2f064ef286bbff43354ab9850446d27f9426ff35db345acc","sha256:4f43b342ad09921bc410e63d1f292e46492025d9596d91e20917ff24170fac5b"]
      - values: {"codigo":"~~~python\na = [1, 2]\nb = a\nb = a[:]\nb.append(3)\nprint(len(a))\n~~~"}
        answers: ["sha256:4b5ffad9bf13723140649fb16027b549746b9345e46b80bc5d1f510da44a95cf","sha256:9f479483ec293b74e0933e2d3f5469304541f60d12290d45f6ce3e625a40fcbb","sha256:587a80dc6a307c263464e13d528e173b578455976cc90643c3ece95f2121597c"]
      - values: {"codigo":"~~~python\na = [0, 0, 0]\nb = a\nb.pop()\nprint(len(a))\n~~~"}
        answers: ["sha256:436492ea631d19b903f2af8edeae24f1ae050cb0ce9aeb404325ed56a59ba65b","sha256:65391b5a38e5d1c3bbf080f5cbe0c4396b7b8edbadb817d92ab914935fe1318c","sha256:7210f06761e46863b0c57ebcbefc0dd59d6dbb91e60f17a8fe522ad23c807637"]
      - values: {"codigo":"~~~python\na = [9, 8]\nb = a\nb.insert(0, 7)\nprint(len(a))\n~~~"}
        answers: ["sha256:e5934814c35fe29a8088c8f63de6cb6d53fcdb34193e8a43f0537ba33b4fba0f","sha256:3279d842f990fae98157d6c09b1229cdc4b1e22bea957e547e67fa8e3d79637f","sha256:d647deaff0bb38559571025a0635685520c3e5a0e453a46032b0701285c47a19"]
  - id: flotantes
    tier: 2
    prompt: |
      ¿Qué imprime `print(0.1 * 3 == 0.3)`? Respuesta: «True» o «False».
    answers: ["sha256:fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa"]
  - id: excepcion
    tier: 2
    prompt: |
      ¿Cómo se llama la excepción que lanza `"abc" + 1` en Python? Respuesta: el nombre exacto de la clase.
    answers: ["sha256:583abb96a6174b86cd0efa397cdc083a4b7d5871eaf9865ebbfa67bd22739db5"]
  - id: potencia-modular
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Qué imprime `print(pow({{b}}, {{e}}, {{m}}))`?
    variants:
      - values: {"b":2,"e":100,"m":"10**9 + 7"}
        answers: ["sha256:ec6d425598988db3e70f8b6da9d7338626eee59ba17fa16a85db27fab78c2b5a","sha256:f7892c7976b4f44f7745afb71eb03883c794dbc9db9b4384a830d38d2585ba56","sha256:3181957d30d77d5cfeab380b5704d2150baa8ffc89c3ce326e0acde96a2eeadf"]
      - values: {"b":3,"e":200,"m":"10**9 + 7"}
        answers: ["sha256:be246a8ddd8c05185deb3b8cbd062024f3100dad4e7b9780c78027cb78554aac","sha256:8df48dfcb8461745fc75085518569d92c31a25578123d6d358c00ccacc1e1a3d","sha256:3bf0f0586ff5fbfccf525d6c94bd706b49818ff45470fb48ae63dc8761e8fccc"]
      - values: {"b":7,"e":77,"m":"1000"}
        answers: ["sha256:06882a896f58be33c9be39173597a1fb6d1ff004a842d6c0e0879633113ffacd","sha256:59d1482f355ce5a571b8e0d0aa36911f7694e70069943f0a914d3555cdb12428","sha256:9e16088cae02fef580a6c4eda139462586ad86b1216bf4e53dd20e4b26ee7f1d"]
      - values: {"b":2,"e":64,"m":"97"}
        answers: ["sha256:3fe08d9378132bf6ac8e740f53ac9b15343fbb245fcc49bbf2265cd7ba90b287","sha256:e3e8c54bbd884f7f407cc544ef02820ceda57be04e99fb2fc6e4c92cb5d8a1c5","sha256:9a3da9b97c8fb5fcfdb45ec5f0608ba8c9e666c78f836ce91f49c8becf05d1cd"]
      - values: {"b":5,"e":1000,"m":"13"}
        answers: ["sha256:f6468308addb048d6e1b507e0bee87efae3762c1969fe58c743fe5df1c3fc86e","sha256:2809ee8660bac89fe97f7e978b71b6b9db03f5a315f5669e9983ff85b0e6e00d","sha256:c77e4e6d28e2050a1a94eea36d3ab500a933da2372312513b3e008f38e68abc7"]
      - values: {"b":10,"e":18,"m":"10**9 + 9"}
        answers: ["sha256:a882c10becb06073e4a2949dd66045f1d711d519ca8e80f593f2e0ed3e9b8d2f","sha256:54767437a705f0985ef9543b0c9101ca9e8870591b50eb579edc8eae41500ac1","sha256:f27503b9c7a8945bfab3f8b3601192c33472e8f87acf189145d8096121b5184e"]
  - id: ordenar-con-clave
    tier: 2
    prompt: |
      ¿Qué imprime `print(sorted({{lista}}, key=len)[{{i}}])`? (La ordenación de Python es estable.) Respuesta: el texto impreso.
    variants:
      - values: {"lista":"[\"cereza\", \"pera\", \"uva\", \"melocoton\"]","i":0}
        answers: ["sha256:93701021b69332b431f49a94f716556a64eefa2dc392e1bef4335158da46dcc2"]
      - values: {"lista":"[\"sol\", \"luna\", \"estrella\", \"mar\"]","i":0}
        answers: ["sha256:8db59feb4d217f26c79d6e76eea6ff80398e8b823e376bb783be870a96cab9e7"]
      - values: {"lista":"[\"python\", \"c\", \"rust\", \"go\"]","i":-1}
        answers: ["sha256:11a4a60b518bf24989d481468076e5d5982884626aed9faeb35b8576fcd223e1"]
      - values: {"lista":"[\"alfa\", \"beta\", \"gamma\", \"pi\"]","i":-1}
        answers: ["sha256:be9d587defa1f0c09ef49eb17e206983a5f8f8289e4281860bd0ee5a19592c67"]
      - values: {"lista":"[\"casa\", \"perro\", \"gato\", \"ave\"]","i":1}
        answers: ["sha256:b3813027ed2150ec3449f0716cf53c5d4a632486136365bd23e19c372884553f"]
      - values: {"lista":"[\"uno\", \"dos\", \"tres\", \"cuatro\"]","i":2}
        answers: ["sha256:3d5f1d095f03cbeab065f280e5c42801aa0122b683af43b458dfa65fa438b5e8"]
  - id: zip-diccionario
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Qué imprime `print(dict(zip("{{s}}", range({{n}})))["{{c}}"])`?
    variants:
      - values: {"s":"abcab","n":5,"c":"b"}
        answers: ["sha256:2683017d09b6f97db2131ae9fa4cb6d02b2261b9dbf1547059782d44ba932621","sha256:688ae8083436db6d97d3ca2ddbc54a5591589183bbad85ab7d9b696827a497f8","sha256:92ce62330acf3e23c33575f58922d69db7aa3f69a3247bc7817698b86658d44d"]
      - values: {"s":"banana","n":6,"c":"a"}
        answers: ["sha256:7a98080d190eaf443f0681d0f930b455ebc93441a709c77549ce02ff40810887","sha256:ad6d08a249fc0246e3ec65ac8c0895d7bbd19e9758d6b90e169d6b0ad22fe797","sha256:4ab67389fe53495057b67a69cc77bf821d12f710f78c794ef8fe61a9b7ad4bac"]
      - values: {"s":"hola","n":4,"c":"o"}
        answers: ["sha256:a918e3d936b390bf508f522cb815aaa6d9901308ee7198fcf3316d45273713ff","sha256:2b26ad6d32af18b9ff68415119c2e20dcdadc508fc261608c80117099ba8bdec","sha256:35ab43716b3189412da0202c4e63580ba1f75a9341175ba2dbe36d4e0a1863b8"]
      - values: {"s":"mississippi","n":11,"c":"s"}
        answers: ["sha256:05e594066dcb156dd25cb96e0f6cc00adb13dadd03be3308fde6c2d5866ca4f1","sha256:0dc741b57342cfef0da6ad9826924d8fcefe4a67ef5fecb7741bfd02f8c26e5a","sha256:5a8df8b62d87aebd421e3dc58bc90b2f542934e0537fe43d3937876ea16d0f5e"]
      - values: {"s":"exodus","n":6,"c":"x"}
        answers: ["sha256:22a34eaa672385771a5185cd6b17cecc6903ae30368f840248b2d43fcd6e09f7","sha256:3cf8be5db5ed8969cb2f8eb0ba10a83c9809a6908ab14ce260b962fc2c3f0240","sha256:ac76d0e7ba998bac5510e9cc04047d5a8c22549d52c00d8e0af1cf5b0d2458f9"]
      - values: {"s":"aaa","n":3,"c":"a"}
        answers: ["sha256:50bf6e811bb3fdfaf4bc371adf30a72cc526bd4279c3fb63b20b502d9642d139","sha256:263195786f0e7d3eb88020399a4e64013ca46a37cca4a6c6f1949e730bdaa2b2","sha256:1e83a89c9f5bb6af5b479d0b5ba523dc8498da65e3bfebf0a65c5ea214a4b440"]
  - id: conjuntos
    tier: 3
    prompt: |
      ¿Qué imprime `print(len(set("{{w}}")), len({x % {{m}} for x in range({{N}})}))`? Respuesta con los dos números separados por punto
      y coma.
    variants:
      - values: {"w":"mississippi","m":7,"N":100}
        answers: ["sha256:303967d1437e85a0093d7a74e5a3acec2282fad4e534023ed0a8be8571b543cb"]
      - values: {"w":"banana","m":5,"N":3}
        answers: ["sha256:3408e9fd6e48e92d05663967f874a5cd74807dbafa56ee764edcddeddc948c0b"]
      - values: {"w":"programacion","m":10,"N":1000}
        answers: ["sha256:1d5790e08fbafa4ace1456f27b2b7e301c02a9c562723d8e106ddbda1d305030"]
      - values: {"w":"aeiou","m":3,"N":50}
        answers: ["sha256:11b4e3d107c9ead370d5988313bdb607b2fa33279ce574f04f1f9091af18bc34"]
      - values: {"w":"abracadabra","m":12,"N":7}
        answers: ["sha256:1ff0601aaac1c5e778e1aa23996f5f9c1046e89b50ed658052365b2ac5f878e7"]
      - values: {"w":"exodus","m":4,"N":4}
        answers: ["sha256:b8d926d2a5e1288c9304e254320049407dba8ba5968965daad3641b96b4c4ccf"]
  - id: factorial-25
    tier: 3
    prompt: |
      ¿Qué imprime este programa? (Python tiene enteros de tamaño ilimitado.)

      ~~~python
      def fact(n):
          return 1 if n <= 1 else n * fact(n - 1)

      print(fact({{n}}))
      ~~~
    variants:
      - values: {"n":25}
        answers: ["sha256:18825bc0b987d768d250f6629e60092357649e9e6b40ba5678fed545e7e186b0"]
      - values: {"n":21}
        answers: ["sha256:6171a611dbd5d5b08d2e14669494dd045f628deba0cd7bd7423d32f05378033c"]
      - values: {"n":30}
        answers: ["sha256:a47e913ff580051dcf6bd19ac828721341d3e1d00d4845e08eba525c7c1a9131"]
      - values: {"n":15}
        answers: ["sha256:786c3f261345922c77631f8757ab215f18f0be479c32ab4a5b153c967e06a238"]
      - values: {"n":22}
        answers: ["sha256:124524c554550729315ddb5050ce70cd2e9c9ec053db35a61f04e60a24cc8aed"]
      - values: {"n":40}
        answers: ["sha256:2cd0865fc175674abdfdd555ed56e01f8fb0dda85fb4085c02a44b0f49b10792"]
  - id: capicuas
    tier: 3
    type: numero
    sig: 8
    prompt: |
      ¿Qué imprime `print(sum(1 for n in range(1, {{N}}) if str(n) == str(n)[::-1]))`? (Cuenta los capicúas de $1$ a ${{txt}}$.)
    variants:
      - values: {"N":100000,"txt":"99\\,999"}
        answers: ["sha256:53c58130eeba184bd07bb82e3cc7dd7d0eaf9a52c52d6fa9a6c0c90a460a3ad4","sha256:dbabbcb1f0399d19e804edb8102a8c878ab76be71101b39f06eeb5fbbc4b55b8","sha256:1871f3edcd721d9f966756f6ab388917a33bcae407f98414fcb636c8e9163210"]
      - values: {"N":1000,"txt":"999"}
        answers: ["sha256:d07f40367fbd8ef7c768808cc97ade8d9774e8a52714719d3bd0617edaaed503","sha256:fb06939429196dc5c67f0649da684e8133a55fb473524775662f2b36a7a2e061","sha256:6fecdd8a4ab9970eb9abdd3372641b9448a12269966b7a0c705dde826acee95c"]
      - values: {"N":10000,"txt":"9\\,999"}
        answers: ["sha256:bc1294d73bc983eecb3c4fb4f674b13f36f369ccde4b0e9b4b4ad4b116ff4935","sha256:632710f88cbbbdca59f11b9800cf699eb447f279869daf871ce6e468a6f158b7","sha256:f9cf880e2519b51817b26a121e0bcdcac509c4a65432db85dcb75184c7d17bdb"]
      - values: {"N":500,"txt":"499"}
        answers: ["sha256:d4e21e14b059dace91a6e00fa3e3f05a9997b93e71fe8c9168c42e0046518988","sha256:376ead959559458bcbda67f95c4956ed1492d6ff67c46923832637b8735c4b81","sha256:17d73e27de49552aa439e02cc3b79d4d7eb2961073dd5221a4d94ae4efde6489"]
      - values: {"N":2026,"txt":"2\\,025"}
        answers: ["sha256:570c54f5638d226780b5cb5b7f513e3e5535f267fe124e0b2148477b09771bef","sha256:0ca324ef0ba71f4d26385464cd56c2f373f946429e5d53e3daa421140d321522","sha256:a44f0ae36210b4abbdd03252e0082dae3c08554060b1f50113ba91301288979a"]
      - values: {"N":1000000,"txt":"999\\,999"}
        answers: ["sha256:6d81e37fea583dc9c43ab67aeca6341032873a7f490b71a7832892416c8a1619","sha256:b8a867825c38bd0c1c229c8ef13da3ae4c9cea05a58b84acf5eec99909cab49e","sha256:eaff55d5fce98f3ca9fa2a41c689ef25ea9e30436832265050db7a6b65db5018"]
  - id: vocales
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántas vocales (a, e, i, o, u) hay en `"{{s}}"`? (Sin tildes; no distingas mayúsculas.)
    variants:
      - values: {"s":"Universidad de Salamanca"}
        answers: ["sha256:517a44d0246d22490c62993ef0514efbd26b65c985ed8aa1716cc359d516f2f4","sha256:f563b2b0260562f4f8ee18129066751c0f0c446b0a71fecadf99426e8ca394cc","sha256:dec01a19b486025fce88c7ec8e9fccc1154ebea3934fbcfb4c5a41276e19f517"]
      - values: {"s":"Murcielago"}
        answers: ["sha256:ac6d2daa4a3a5eba84080d92ab247919ac5ebe0f2622ab83e4b1cc440a57c0a5","sha256:a5c4890e3bcb1bb7f5aecfad4d949bcbf3ab123d4e6581912d5cbdbd8a459819","sha256:ae41cbbd4b7858d96b2dfc92790f47c5e3dc91a6cff862ed843a74a0f7f7b635"]
      - values: {"s":"El rapido zorro marron"}
        answers: ["sha256:cc2539647f9dc14e49eaf3989f8b7cff43fa88f02d9bc2d3cae065a24f8879b0","sha256:d89853d5891804178cf6fe2911dd522abb74fe0010af06ce69626f9ca75b88f5","sha256:d8d37697353cfcaf275f7228e562a8e6409b9ac449cf623d63a1dd1a24c4f8fd"]
      - values: {"s":"Exodus aprende"}
        answers: ["sha256:7d678684a0cf9d265720992ed2f607fbec674c7c1bf29614146d42769ab779e2","sha256:c637f308c370a044c0c8ffb4f06392dc18776671da0d3cb229501800c2eea68a","sha256:a25875112630093f5e3ee43f94f9e8bd51a0ae16ffda33c0b9b0d7530d57448d"]
      - values: {"s":"Computacion cuantica"}
        answers: ["sha256:b28f6b217f740e75f944918a8179ec376ec8c97eefc8bfe5d97388cd6ba9978e","sha256:3306c20b85d4677f28309703502b13455a42d253a52275f0de35cb24e2d2650a","sha256:190fe24de07b19f2832bfaa87431280979da74d510a312af425ec73951fd9cc2"]
      - values: {"s":"AEIOU aeiou"}
        answers: ["sha256:47de265d56e5bfc17dba1f859ca8752cdf553bcf6acf6b1031042fcff6e5e745","sha256:1625e253fcf5b05e3322e36d57dc60637da80c0c77446c57da459c46046e0056","sha256:80f3dee84a0904ef77b818b4ee24662e4e83651852e7a09249c1b0f5cc7f6f9f"]
  - id: ambito
    tier: 3
    prompt: |
      ¿Qué imprime este programa?

      ~~~python
      x = 10

      def g():
          x = 5
          return x

      g()
      print(x)
      ~~~
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: r-tipo-input
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿De qué tipo es siempre el valor que devuelve `input()`?
    options:
      - |
        `int`
      - |
        `float`
      - |
        `str`
      - |
        Depende de lo que se escriba
    answers: ["sha256:9afd75a61a164b30fa512036d88006ac8dec4f68f949829e66e21e964f789a9a"]
  - id: r-indice
    tier: 1
    review: true
    prompt: |
      ¿Qué imprime `print("python"[3])`?
    answers: ["sha256:aaa9402664f1a41f40ebbc52c9993eb66aeb366602958fdfaa283b71e64db123"]
  - id: r-traza-abajo
    tier: 1
    type: opcion
    review: true
    prompt: |
      Al leer una traza de error de Python, ¿qué línea dice el tipo de error?
    options:
      - |
        La primera
      - |
        La última
      - |
        La del medio
      - |
        Ninguna: hay que releer el código
    answers: ["sha256:bc4fe10b00a1110a4fff71dd1b33ac4f0b9c5aa396dbfe24e38e4ee9a08b71aa"]
  - id: r-diccionario
    tier: 2
    type: opcion
    review: true
    prompt: |
      Quieres guardar el teléfono de cada contacto y buscarlo por el nombre. ¿Qué estructura usas?
    options:
      - |
        Un diccionario
      - |
        Una lista
      - |
        Una tupla
      - |
        Un conjunto
    answers: ["sha256:a34d12c4efd5d136e9c946d22391969c9ca3178827a303949ea369c1b232d431"]
  - id: r-copia
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué imprime este programa? `a = [1, 2]`, `b = a.copy()`, `b.append(3)`, `print(len(a))`
    answers: ["sha256:bc13ea1429672c07c04a63368974b860dd09ac5be87b33cfd75ee607aac202db","sha256:6b19fdb035ca468bd3f3df40f32ac7448ddc5239e79eb3dd31f2c3a75e61b511","sha256:bc9e4881400737097a75572b766c77ef24461e5edae2284ec57c8671abc9fe02"]
  - id: r-keyerror
    tier: 2
    review: true
    prompt: |
      ¿Qué excepción lanza `{"a": 1}["b"]`? Respuesta: el nombre exacto de la clase.
    answers: ["sha256:b1a812dda513c88746677b78bcd18cc90e476abf3cad03443b045ee9303aa522"]
---

# Python desde cero: tipos, colecciones, funciones y archivos

Python es, hoy, uno de los lenguajes más usados del mundo: se escribe casi como se piensa, tiene una biblioteca enorme y sirve
para automatizar tareas, analizar datos, construir webs, hacer ciencia y entrenar modelos de inteligencia artificial. Aquí lo
aprendes **bien**, con el modelo mental que evita los errores clásicos, y lo usarás durante todo el currículo.

## Objetivos

Al terminar sabrás:

1. Instalar Python, ejecutar código y leer un mensaje de error.
2. Usar los tipos básicos (números, texto, booleanos) y sus operaciones.
3. Elegir y manejar listas, tuplas, diccionarios y conjuntos, y entender la **mutabilidad** y los alias.
4. Escribir funciones, entender el ámbito de las variables y la recursión.
5. Leer y escribir archivos y manejar errores con excepciones.
6. Probar tu código y escribirlo con claridad (PEP 8).

> [!question] Test de entrada
> 1. ¿Qué imprime `print(len("hola"))`? 2. ¿Y `print(2 ** 5)`? 3. Si `a = 3` y luego `a = a * 2`, ¿cuánto vale `a`?
>
> Respuestas: `4`; `32`; `6`. Si no lo tienes claro, repasa [[prog-pensamiento-computacional]].

## 1. Para qué sirve

- **Automatizar**: procesar mil archivos, renombrar, descargar, generar informes.
- **Datos y ciencia**: cálculo numérico, estadística, gráficos (NumPy, pandas, Matplotlib).
- **Web y APIs**: servidores, scripts de integración.
- **Seguridad**: gran parte de las herramientas de pentesting y de análisis de malware están escritas en Python.
- **IA**: casi todo el aprendizaje automático moderno (PyTorch, scikit-learn) se usa desde Python.

## 2. Primeros pasos

> [!practico]
> Python es un idioma para hablar con el ordenador que se parece bastante al inglés escrito. Se puede usar de dos maneras:
> como una **calculadora conversacional** (escribes una línea y te contesta enseguida) o escribiendo un **guion** completo en
> un archivo y ejecutándolo de golpe. Cuando algo sale mal, Python te dice qué y dónde: aprender a leer ese mensaje es la
> mitad de saber programar.


**Instalar.** Descarga Python 3 desde python.org (en Linux suele venir instalado). Comprueba en una terminal:

```
python --version        # en algunos sistemas: python3 --version
```

**Dos formas de usarlo:**

- El **intérprete interactivo** (escribe `python`): ejecuta línea a línea y muestra el resultado. Ideal para experimentar.
- Un **archivo** `programa.py` que se ejecuta con `python programa.py`.

Un editor con coloreado (Thonny para empezar; Visual Studio Code más adelante) ayuda mucho. Lo esencial:

```python
print("Hola, Exodus")          # muestra texto
nombre = input("¿Cómo te llamas? ")   # lee una línea de teclado (siempre como texto)
print("Encantado,", nombre)
```

`#` inicia un **comentario**: Python lo ignora; sirve para explicar el *porqué*, no el *qué*. Python usa la **sangría** (cuatro espacios) para
delimitar bloques: no es estética, es sintaxis.

### Leer un error

Cuando algo falla, Python muestra una **traza** (*traceback*). Se lee **de abajo arriba**: la última línea dice el **tipo de error** y el
mensaje; las anteriores dicen en qué línea ocurrió y quién llamó a quién.

```
Traceback (most recent call last):
  File "demo.py", line 3, in <module>
    print(10 / 0)
ZeroDivisionError: division by zero
```

Aprender a leerlas ahorra horas. Los más frecuentes: `SyntaxError` (código mal escrito), `NameError` (nombre sin definir), `TypeError` (operación
con un tipo inadecuado), `ValueError` (valor inadecuado), `IndexError` (posición fuera de la lista), `KeyError` (clave inexistente en un diccionario).

## 3. Valores y tipos

> [!practico]
> No es lo mismo el número $5$ que el texto «5»: con el primero puedes sumar, con el segundo no (para Python, «5» + «5» es «55»,
> dos letras pegadas). Cada dato tiene un **tipo** (número entero, número con decimales, texto, verdadero/falso) y el tipo
> decide qué se puede hacer con él.


Todo valor tiene un **tipo**. Los básicos:

| Tipo | Ejemplo | Notas |
|---|---|---|
| `int` | `42`, `-7`, `10**30` | enteros de **tamaño ilimitado** |
| `float` | `3.14`, `1e-3` | decimales binarios de 64 bits (aproximados) |
| `str` | `"texto"`, `'texto'` | cadenas (inmutables) |
| `bool` | `True`, `False` | lógico |
| `NoneType` | `None` | «ausencia de valor» |

**Operadores aritméticos:** `+ - * /` y además `//` (**división entera**), `%` (**resto**) y `**` (**potencia**). Fíjate:

```python
7 / 2     # 3.5   (la división «/» siempre da float)
7 // 2    # 3     (cociente entero)
7 % 2     # 1     (resto)    ->  7 == 2*3 + 1, como en la división euclídea
-7 // 2   # -4    (la división entera redondea hacia abajo, no hacia cero)
2 ** 100  # 1267650600228229401496703205376 (sin desbordamiento)
```

**Comparaciones:** `== != < <= > >=`; combinables con `and`, `or`, `not`. **Ojo:** `=` asigna, `==` compara. Las comparaciones se encadenan:
`0 < x < 10` significa «`x` entre `0` y `10`».

**Conversión:** `int("42")`, `float("3.5")`, `str(7)`. `int("3.5")` falla (`ValueError`); `int(3.9)` da `3` (trunca).

**Flotantes y precisión.** Como en [[mat-enteros-fracciones]], un decimal en binario es aproximado: `0.1 + 0.2 == 0.3` es **`False`**. Para dinero
o para cálculo exacto usa enteros (céntimos), `decimal.Decimal` o `fractions.Fraction`. Para comparar flotantes, `math.isclose(a, b)`.

**Verdad y falsedad.** En una condición, `0`, `0.0`, `""` (texto vacío), `[]`, `{}`, `set()` y `None` cuentan como **falsos**; el resto, como verdaderos.

## 4. Texto

> [!practico]
> Un texto es una fila de letras numeradas **empezando por el cero**: en «hola», la «h» es la posición $0$ y la «a» la $3$.
> Con esas posiciones puedes recortar trozos («dame de la $1$ a la $3$»), y Python trae muchas herramientas ya hechas:
> pasar a mayúsculas, buscar, reemplazar, partir en palabras.


Una cadena es una **secuencia inmutable** de caracteres (Unicode). Se indexa desde `0`; los índices **negativos** cuentan desde el final:

```python
s = "aprendizaje"
s[0]        # 'a'
s[-1]       # 'e'
s[3:8]      # 'endiz'   (desde el 3 hasta el 7; el final NO se incluye)
s[::-1]     # 'ejazidnerpa' (el paso -1 invierte)
len(s)      # 11
```

Las **rebanadas** `s[a:b:c]` valen para cadenas, listas y tuplas. Los métodos más usados (devuelven **nuevas** cadenas, porque no se puede
modificar la original):

```python
"  hola  ".strip()           # 'hola'
"a,b,c".split(",")           # ['a', 'b', 'c']
"-".join(["a", "b", "c"])    # 'a-b-c'
"hola".replace("o", "0")     # 'h0la'
"Hola".lower(), "Hola".upper()
"hola".find("l")             # 2   (-1 si no está)
"ab" in "cabra"              # True
```

**f-strings**: la forma moderna de componer texto con valores y formato:

```python
nombre, nota = "Ana", 7.456
print(f"{nombre} sacó {nota:.1f}")   # Ana sacó 7.5
print(f"{1234567:,}")                # 1,234,567
print(f"{255:b} {255:x}")            # 11111111 ff   (binario y hexadecimal)
```

**Caracteres y números:** `ord("A")` es `65` y `chr(65)` es `"A"` (códigos Unicode). El texto que escribes en archivos se codifica en
**bytes**, casi siempre en UTF-8.

## 5. Colecciones

> [!practico]
> Para guardar muchos datos juntos hay distintos «recipientes»: una **lista** es una fila ordenada que puedes cambiar (la lista
> de la compra); una **tupla**, una fila que no cambia (las coordenadas de un punto); un **diccionario** asocia una clave a un
> valor (nombre → teléfono); un **conjunto** guarda elementos sin repetir y sin orden (las letras distintas de una palabra).


| Tipo | Se escribe | Ordenada | Mutable | Uso |
|---|---|:---:|:---:|---|
| `list` | `[1, 2, 3]` | sí | **sí** | secuencia general |
| `tuple` | `(1, 2, 3)` | sí | no | registro fijo, claves de diccionario |
| `dict` | `{"a": 1, "b": 2}` | por inserción | **sí** | asociar clave → valor |
| `set` | `{1, 2, 3}` | no | **sí** | pertenencia rápida, sin repetidos |

```python
nums = [5, 2, 9]
nums.append(7)            # [5, 2, 9, 7]
nums.sort()               # ordena la lista en su sitio -> [2, 5, 7, 9]
sorted(nums, reverse=True)  # NUEVA lista ordenada: [9, 7, 5, 2]

edades = {"ana": 31, "luis": 28}
edades["marta"] = 25      # añadir
edades.get("pedro", 0)    # 0  (valor por defecto si no existe; edades["pedro"] daría KeyError)
for nombre, edad in edades.items():
    print(nombre, edad)

vistos = set()
vistos.add(3); vistos.add(3)   # sigue siendo {3}: sin repetidos
```

**Eficiencia (idea):** buscar un elemento en una `list` recorre la lista ($O(n)$); en un `set` o un `dict` es casi inmediato (tiempo
constante **medio**, gracias a una tabla hash). Por eso, si vas a preguntar muchas veces «¿está?», usa un conjunto.

### Mutabilidad y alias: el modelo mental correcto

> [!practico]
> En Python una variable no es una caja que contiene el dato, sino una **etiqueta pegada** al dato. Si haces `b = a` con una
> lista, no copias la lista: pegas una segunda etiqueta a la **misma** lista. Por eso, si añades algo con `b`, también lo ves
> con `a`. Es la sorpresa más común de los principiantes.


Un nombre **no contiene** el valor: es una **etiqueta** que apunta a un objeto. Asignar `b = a` **no copia**: pone dos etiquetas en el mismo objeto.

```python
a = [1, 2]
b = a           # b y a son el MISMO objeto
b.append(3)
print(a)        # [1, 2, 3]   <- a «cambió» sin tocarla
c = a.copy()    # copia superficial (otra lista con los mismos elementos)
c.append(4)
print(a, c)     # [1, 2, 3] [1, 2, 3, 4]
```

Con tipos **inmutables** (`int`, `str`, `tuple`) esto no da problemas, porque no se pueden modificar: `x = x + 1` crea un objeto nuevo.

**Comprensiones** (crear colecciones con una expresión):

```python
[x * x for x in range(1, 6)]            # [1, 4, 9, 16, 25]
{x % 7 for x in range(100)}             # {0, 1, 2, 3, 4, 5, 6}
{p: len(p) for p in ["sol", "luna"]}    # {'sol': 3, 'luna': 4}
sum(x * x for x in range(1, 21) if x % 3 == 0)   # 819
```

**Desempaquetado y `zip`:** `a, b = b, a` intercambia sin variable auxiliar; `dict(zip("abc", range(3)))` da `{'a': 0, 'b': 1, 'c': 2}`.

**Ordenar con clave.** `sorted(lista, key=f)` ordena por el valor de `f` de cada elemento, y es **estable** (los empates conservan su orden):
`sorted(["banana", "kiwi", "fig"], key=len)` da `['fig', 'kiwi', 'banana']`.

## 6. Control de flujo

```python
n = 15
if n % 15 == 0:
    print("FizzBuzz")
elif n % 3 == 0:
    print("Fizz")
else:
    print(n)

for i in range(3):               # 0, 1, 2
    print(i)
for i, letra in enumerate("abc"):   # (0,'a'), (1,'b'), (2,'c')
    print(i, letra)

while True:
    linea = input("> ")
    if linea == "salir":
        break                    # sale del bucle
    if not linea:
        continue                 # salta a la siguiente vuelta
    print(linea.upper())
```

`range(a, b)` recorre de `a` a `b-1`; con tres argumentos, `range(a, b, paso)`. `for` itera sobre **cualquier** colección; `enumerate` añade el índice.

## 7. Funciones

> [!practico]
> Una **función** es una receta con nombre: la escribes una vez («cómo calcular el IVA de un precio») y la usas cuantas veces
> quieras, con distintos ingredientes (los argumentos). Lo que pasa dentro de la función se queda dentro: sus variables no
> estropean las de fuera.


```python
def area_circulo(radio):
    """Devuelve el área de un círculo de ese radio."""
    return 3.141592653589793 * radio ** 2

print(area_circulo(2))     # 12.566370614359172
```

Una **función** agrupa código reutilizable, recibe **parámetros** y devuelve un valor con `return` (si no hay `return`, devuelve `None`). La
cadena entre triples comillas es la **docstring**; `help(area_circulo)` la muestra.

**Parámetros con nombre y por defecto:**

```python
def saludar(nombre, saludo="Hola"):
    return f"{saludo}, {nombre}"

saludar("Ana")                    # 'Hola, Ana'
saludar("Ana", saludo="Buenas")   # 'Buenas, Ana'
```

**La trampa clásica: valor por defecto mutable.** El valor por defecto se crea **una sola vez**, cuando se define la función, no en cada llamada:

```python
def f(x, L=[]):       # ¡MAL!
    L.append(x)
    return L

f(1); f(2)
print(f(3))           # [1, 2, 3]   (la misma lista se arrastra entre llamadas)

def g(x, L=None):     # BIEN
    if L is None:
        L = []
    L.append(x)
    return L
```

**Ámbito.** Una variable creada **dentro** de una función es **local**: no existe fuera ni pisa a otra del mismo nombre de fuera.

```python
x = 10
def g():
    x = 5          # otra x, local
    return x
g()
print(x)           # 10
```

Python busca un nombre en este orden: local, la función que la encierra, global, y los incorporados (*LEGB*). Se evita modificar variables
globales desde dentro de funciones: pasa datos por parámetros y devuelve resultados.

**Recursión.** Una función puede llamarse a sí misma, con un **caso base** que detiene la cadena:

```python
def fact(n):
    return 1 if n <= 1 else n * fact(n - 1)

fact(20)   # 2432902008176640000   (enteros ilimitados: fact(100) también cabe)
```

**Funciones como valores.** Se pueden pasar a otras funciones (`key=len`) y se pueden escribir en línea con `lambda`:
`sorted(personas, key=lambda p: p[1])`.

## 8. Módulos y biblioteca estándar

Un **módulo** es un archivo de Python que se importa. La **biblioteca estándar** ya incluye mucho:

```python
import math
math.sqrt(2), math.pi, math.gcd(84, 90)          # (1.4142135623730951, 3.141592653589793, 6)

from collections import Counter
Counter("mississippi")                            # Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})

import random
random.seed(7)                                    # fija la semilla: resultados reproducibles
random.randint(1, 6)

import statistics
statistics.mean([2, 4, 9]), statistics.median([2, 4, 9, 10])   # (5, 6.5)
```

Para código de terceros se usa `pip` (`pip install requests`), dentro de un **entorno virtual** (`python -m venv .venv`) para no mezclar proyectos.

## 9. Archivos y excepciones

> [!practico]
> Los programas reales leen y escriben archivos, y ahí las cosas fallan: el archivo no existe, no tienes permiso, el disco
> está lleno. En vez de dejar que el programa se estrelle, se **captura** el error (`try`/`except`) y se decide qué hacer: avisar,
> reintentar o usar un valor por defecto.


```python
# Escribir
with open("notas.txt", "w", encoding="utf-8") as f:
    f.write("primera línea\n")
    f.write("segunda línea\n")

# Leer
with open("notas.txt", encoding="utf-8") as f:
    for linea in f:
        print(linea.rstrip("\n"))
```

`with` cierra el archivo **siempre**, incluso si hay un error. Indica siempre `encoding="utf-8"` para no depender del sistema.

**Excepciones.** Cuando algo falla, Python **lanza** una excepción. Se **capturan** con `try/except`:

```python
def leer_entero(texto):
    try:
        return int(texto)
    except ValueError:
        return None                # texto que no es un número entero

leer_entero("42"), leer_entero("hola")     # (42, None)
```

Captura **tipos concretos** (`ValueError`), no `except Exception:` a ciegas: así no escondes errores que no esperabas. `finally` se ejecuta
siempre; `raise ValueError("mensaje")` lanza una excepción propia.

## 10. Probar y escribir con claridad

**Probar:** una prueba es un código que comprueba que otro hace lo que debe. Lo más simple es `assert`:

```python
def es_capicua(n):
    s = str(n)
    return s == s[::-1]

assert es_capicua(1221)
assert not es_capicua(1223)
assert sum(1 for n in range(1, 10000) if es_capicua(n)) == 198
```

Para proyectos más grandes se usa `unittest` (incluido) o `pytest`. Prueba **los casos límite**: lista vacía, un elemento, el
máximo, texto vacío.

**Estilo (PEP 8):** sangría de 4 espacios, nombres en `minusculas_con_guiones_bajos` para funciones y variables, `CamelCase` para clases,
líneas de menos de unos 79–99 caracteres, un espacio alrededor de los operadores. El código se **lee** mucho más de lo que se escribe.
`import this` imprime el *Zen de Python* («Lo explícito es mejor que lo implícito», «La legibilidad cuenta»).

## 11. Mini-proyecto: contador de palabras

Programa completo que cuenta las palabras más frecuentes de un texto, aplicando todo lo anterior:

```python
from collections import Counter
import re

def palabras(texto):
    """Devuelve la lista de palabras en minúsculas (solo letras)."""
    return re.findall(r"[a-záéíóúüñ]+", texto.lower())

def mas_frecuentes(texto, n=3):
    return Counter(palabras(texto)).most_common(n)

texto = "El perro y el gato. El gato y el pez; el perro corre."
assert palabras("¡Hola, Mundo!") == ["hola", "mundo"]
print(mas_frecuentes(texto))     # [('el', 5), ('perro', 2), ('y', 2)]
```

Observa el patrón: una función **pequeña** que hace una cosa, probada con `assert`, y un resultado que se puede predecir a mano. Fíjate también en que `perro`, `gato` e `y` aparecen dos veces: `most_common` devuelve los empates **en el orden en que se vieron por primera vez**, y por eso salen `perro` e `y` y no `gato`. Predecir el resultado a mano habría descubierto la `y`; ejecutarlo lo confirma.

## 12. Errores típicos

- Confundir `=` con `==`; olvidar los dos puntos `:` o la sangría.
- Creer que `b = a` copia una lista; modificar una lista mientras se recorre.
- Usar un valor por defecto **mutable** en una función.
- Dividir con `/` y esperar un entero (usa `//`).
- Comparar flotantes con `==`.
- Abrir un archivo sin `with` ni `encoding`.
- Capturar todas las excepciones con `except:` y esconder el fallo.
- Error por uno: `range(1, 10)` no llega a `10`; `s[3:8]` no incluye el índice `8`.

## Repaso: lo que debe quedarte dentro de un mes

1. `/` da `float`, `//` cociente, `%` resto, `**` potencia; `int` ilimitado; `float` aproximado.
2. Las cadenas son inmutables; las rebanadas `s[a:b:c]` excluyen `b`.
3. `list`/`dict`/`set` son **mutables**; `b = a` crea un alias; copiar con `.copy()`.
4. Valor por defecto mutable: una sola vez; usar `None`. Ámbito local frente a global.
5. `with open(..., encoding="utf-8")`; `try/except` con tipos concretos; probar con `assert`.

## Siguiente

Con Python se llega a [[prog-estructuras-datos]] (pilas, colas, árboles, grafos, tablas hash) y, junto a la estadística del troncal, al
análisis de datos. Antes, [[prog-terminal-linux-git]] enseña a trabajar en la terminal y a guardar versiones del código.
