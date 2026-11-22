---
id: prog-python-funciones-colecciones
title: "Python II: funciones, ámbito y recursión, listas, tuplas, diccionarios y conjuntos, alias y mutabilidad, archivos, excepciones y módulos"
area: bajo-nivel
trunk_level: 2
prerequisites: [prog-python-datos-control]
academic_sources:
  - "Python Software Foundation, «The Python Tutorial», secciones 4.7-4.9 (definir funciones, argumentos por defecto y por nombre), 5 («Data Structures»: listas, tuplas, conjuntos, diccionarios, comprensiones), 6 («Modules»), 7.2 («Reading and Writing Files») y 8 («Errors and Exceptions»). https://docs.python.org/3/tutorial/"
  - "Python Software Foundation, «The Python Language Reference», sección 4.2 («Naming and binding»: ámbitos) y «Glossary» (mutable, hashable, iterable). https://docs.python.org/3/reference/executionmodel.html"
  - "A. B. Downey, «Think Python: How to Think Like a Computer Scientist», 3.ª ed., O'Reilly (2024), capítulos 3, 6, 9-12 y 13-14 (libre en https://allendowney.github.io/ThinkPython/)."
hints:
  - "Concepto: una función empaqueta un cálculo con nombre, parámetros y un valor devuelto; las colecciones guardan muchos valores (listas ordenadas y modificables, tuplas fijas, diccionarios de clave a valor, conjuntos sin repetidos). En Python los nombres apuntan a objetos: dos nombres pueden apuntar a la misma lista."
  - "Herramienta: `help(f)` y `dir(x)` en el intérprete; `id(a) == id(b)` o `a is b` para ver si son el mismo objeto; `L[:]` o `list(L)` copian una lista; `d.get(k, 0)` evita el KeyError; `with open(ruta, encoding=\"utf-8\") as f:` para archivos; `try`/`except TipoDeError` para los errores esperables."
  - "Documentación: «The Python Tutorial», secciones 4-8 (docs.python.org/3/tutorial/); Downey, «Think Python»."
exercises:
  - id: parametros-por-defecto
    tier: 1
    prompt: |
      ¿Qué escribe este programa? (Salida exacta.)
      ```python
      def f(a, b=2, c=3):
          return a * b + c
      print(f({{x}}), f({{x}}, {{y}}), f({{x}}, c={{z}}))
      ```
    variants:
      - values: {"x":4,"y":5,"z":10}
        answers: ["sha256:19514f943723f5b8afcb499b6a72b7ec304ef203a16093ff2fca7352c912e564"]
      - values: {"x":1,"y":7,"z":0}
        answers: ["sha256:92414e34ded3540b1074ef8761b44dfff6f8fecb224c6fa4a8690ce68786d8ba"]
      - values: {"x":-3,"y":2,"z":6}
        answers: ["sha256:3d9b9e0bf8bf2c548cdd65852ba4010d4d65fac5834b033f69fa6ce22c820388"]
      - values: {"x":10,"y":-1,"z":1}
        answers: ["sha256:12ef92c84370928d3b9b676a02fa62700b5f97e4e6080359c7e159810a9c0573"]
      - values: {"x":0,"y":9,"z":4}
        answers: ["sha256:058d5d43bf485bf78dda1ed4eaf8b78e3106f3c6364c625ead2cc3aeb1908237"]
      - values: {"x":6,"y":3,"z":-2}
        answers: ["sha256:88b173af155932f55ff54e9b9e4269993fa2036179bd09431a3bb0a3e2ec5347"]
  - id: ambito-de-las-variables
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Qué número escribe este programa?
      ```python
      x = {{g}}
      def h():
          x = {{l}}
          return x * {{k}}
      print(h() + x)
      ```
    variants:
      - values: {"g":10,"l":5,"k":3}
        answers: ["sha256:d5eb012391d0e88932a54a5b76433a03501c63f9b3b19b6fe08ad115154f04ae","sha256:ce8dfc80cbab4962d022ea1b1f026416b1860a0277a5a5c62bc957a52440a14f","sha256:f5508bd27b9bd3724b425ddced421ba2f9f2c47138228ec3b221fa9dc972e1a1"]
      - values: {"g":7,"l":2,"k":4}
        answers: ["sha256:3df5b763df8fd0b9f8f6673f127a9ea62600582168852892549d3e9adbd2127d","sha256:b0d48219f8e72c711e56c399f96de62715b67d1d9218f89c64c70ed86ca70f2f","sha256:7e4eee07135b02b5d7a2e45fc64e8666fc1182d72875bccb24732ffbadc5504a"]
      - values: {"g":1,"l":9,"k":2}
        answers: ["sha256:8bf7a7231e9f0b7e555cbcc649246f6949570c61ee8a692df8ab595b1ab47e82","sha256:a09dfb39ce1733941fdc0bb800dd16f56521972b594e6d305f355e762cd6fc8e","sha256:0ae2ed0de0c2d8e5544280d13ff6db0ab1d4c02f16ccd8592818d74dc3c649c3"]
      - values: {"g":20,"l":6,"k":5}
        answers: ["sha256:e24d9cb7d7d679c7d3686b54367c5254d4da1eb7e21cd0995be3676546c40975","sha256:eefe8feb75295275ff0b2e8e70534d084d9121d193cb5d74116cdaa8fd261a92","sha256:aa79715dfd8b746a0b12fdce5acf1d5e76fd6f298704295da827960a3e40b194"]
      - values: {"g":3,"l":3,"k":10}
        answers: ["sha256:6a186c65dc4598dd57b62abd5a30cbe952f71a663bfcd7f34776424e24306121","sha256:2f61a63f77521d2fcf4f9777abaaa1af210a9aaeceb5d9fee7f018d697f287ac","sha256:5ec2c9faa69c9393711ca702f3f60f136d9bbb93855c16a6e0248668894c3584"]
      - values: {"g":-4,"l":8,"k":3}
        answers: ["sha256:3800bbd17558476a3ad54bfb6c2279b154129ee297d1d5ec22ed3ad02345476e","sha256:2fa1f91bf6ffb5ee718e2bfd53053de907d3bed89698592c1fe4c937cc9856b7","sha256:0c22b837a535fdf719d4872dfabe6932b4878613071f6debad147cda6549d85b"]
  - id: recursion
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Qué número escribe este programa?
      ```python
      def r(n):
          if n == 0:
              return 0
          return n % 10 + r(n // 10)
      print(r({{n}}))
      ```
    variants:
      - values: {"n":4096}
        answers: ["sha256:52f5f4b80f22fab5961bed342447dc3f819e83503db9c277f9317ecc3ecb7971","sha256:fd3487731f464224f7a5da1782c317764f5b88cfa89417b511e78b3104ed6f92","sha256:f2f792547446b21f71a9108ae2964a61e4574c3bfce0bfbd56593d0f7488a096"]
      - values: {"n":99999}
        answers: ["sha256:55b7be324ac64084cf2cd025385d92cf44edda529d665e9fc2602762fcae81ec","sha256:451ce50940059eba3a3e91dd774acb4e98fce5216dcc0242bc7ab4d6fc8083dd","sha256:e5e2758ced4d6472a8b23ab4927330425c8710ab820a498321c7d4a4a7df5acb"]
      - values: {"n":123456780}
        answers: ["sha256:cc50371401f809d040fe17435fb03052fa76a1e1c032a772c3786eeea1dd4b70","sha256:a99a3c3c8712bc05b36d4ad5c952b0c0e51679596d7eab0ef08b1e77069aa27a","sha256:1894ea58f373498e147de0b8d2d447e4a74022bbaf84f36f61986399a430f4e5"]
      - values: {"n":1000001}
        answers: ["sha256:7bb75bd2b7b13f48abcd0fbade162029bc6b47e708a1b4881874ee6ede9d81ab","sha256:1b4eb9f80bd88b9cc2ccf6dfa79e32b852723f61df13289e64513c479ae4bf02","sha256:95f93a453ed38206e7e7771e0a77ff27fd1b0ebd9b330b7ac7f97fa71c8efcb8"]
      - values: {"n":70007}
        answers: ["sha256:704d0c89993fe77b5a554ea2eaaa1de987bd105e838516f4ed84f3aa10480a6c","sha256:9e3f02ebf3c9480d5a7827d87d8fddb0564da4307d4b054a30c5ac3ca6ac2e57","sha256:19eba8af0a11ad2996676cef43ecb4f959855ba2a80f7f52ccd80588afe33014"]
      - values: {"n":58206}
        answers: ["sha256:710d53a51523ca23d223e22ee7fb1c16f332bda9cca721292f16a8390b47bf53","sha256:0d70117f8b89dd070b6aab5b22d4f88ccf149c903f11fddc184d4b26f5575c79","sha256:4dee6eaf92cce4df555f2485fef4ae26d0c72003b5e5ab5f60ada353eef30ea2"]
  - id: metodos-de-listas
    tier: 2
    prompt: |
      ¿Qué escribe este programa? (Salida exacta, con corchetes y comas como la muestra Python.)
      ```python
      L = {{L0}}
      L.append({{a}})
      L.insert({{i}}, {{b}})
      L.pop()
      L.remove({{r}})
      print(L)
      ```
    variants:
      - values: {"L0":"[5, 2, 8]","a":7,"i":1,"b":9,"r":5}
        answers: ["sha256:f62ed738732bc51dbddcb033620da3d8a9b2649489ff9e2c404b7db518d52089"]
      - values: {"L0":"[1, 1, 3]","a":4,"i":0,"b":6,"r":1}
        answers: ["sha256:0d477c674a723f8fdabdd0790e11eda2aa6847376da320fbf9ca5ff826bb0685"]
      - values: {"L0":"[9, 4]","a":2,"i":2,"b":0,"r":9}
        answers: ["sha256:569f7864e58ad2661fe8c2058233dcde374a7ddbd51e9bf0fecf8a1dd3216617"]
      - values: {"L0":"[6, 6, 6, 1]","a":3,"i":1,"b":5,"r":6}
        answers: ["sha256:088b26d1a4b195cb163ab6ae39f0fac30b7ca32209a1d0fdd641668655cb4659"]
      - values: {"L0":"[0]","a":8,"i":0,"b":2,"r":0}
        answers: ["sha256:038966de9f6b9a901b20b4c6ca8b2a46009feebe031babc842d43690c0bc222b"]
      - values: {"L0":"[4, 7, 4]","a":4,"i":3,"b":1,"r":4}
        answers: ["sha256:c3736fc334cf694440d85ab55f24b00c921e16f7e0a137b39a669b001e3b938b"]
  - id: alias-y-copias
    tier: 3
    prompt: |
      ¿Qué escribe este programa? (Salida exacta.)
      ```python
      a = {{L0}}
      b = a
      c = a[:]
      b.append({{x}})
      c.append({{y}})
      c.append({{y}})
      print(len(a), len(c), a is b)
      ```
    variants:
      - values: {"L0":"[1, 2]","x":3,"y":4}
        answers: ["sha256:057d827216c9d9e86c2faad57b81bfaf95d49b9f7803a2c0f794ff876486ecff"]
      - values: {"L0":"[5]","x":6,"y":7}
        answers: ["sha256:2eaddd0878362979b2e31b3d3a0b2392aba9d65aeedadc29f13c8d7812813d55"]
      - values: {"L0":"[]","x":1,"y":2}
        answers: ["sha256:947782a6794a69f878b31f91a7f9aa22367e590af3ebb96a04e8df28ab3ff233"]
      - values: {"L0":"[9, 9, 9]","x":0,"y":0}
        answers: ["sha256:ddd9a31298e041642f434781aca7e993e5ac5cb5c8f12fdea13a99d40859715b"]
      - values: {"L0":"[2, 4, 6, 8]","x":10,"y":12}
        answers: ["sha256:38e924f80190f366f2bc6fc53a4a639dad94b817e68ba0abfbf815b8ca887aeb"]
      - values: {"L0":"[7, 7, 7, 7, 7]","x":1,"y":1}
        answers: ["sha256:757b11ed0d7a6396e3ee7d1ff895b6bc56765a39d2126a40459a834056e9f710"]
  - id: comprension-de-listas
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Qué escribe `print(sum([x * x for x in range({{n}}) if x % {{k}} == {{r}}]))`?
    variants:
      - values: {"n":20,"k":3,"r":1}
        answers: ["sha256:f2b8cedd6ea83952b8d521b427737702a3946a794938ef4f63bb7c9d5ddc1af7","sha256:4f80b01b110bdca9394d1a062968dca5627da7bf69a4706ae190cf4638d289d9","sha256:691539c75daeb0445f67d8cdde468447e2a11269a31dbc455ee20028d4682a24"]
      - values: {"n":15,"k":4,"r":0}
        answers: ["sha256:6db2a7bc416d5889bfeb25894a10571c0d396f4d0a40d039325e486783366e66","sha256:6d73f49b186c1e51451ecbef46a8851b6dc596e191f419af01ab6079610c6308","sha256:c9f493f1ae24c7addf2e0f9c683b9828b0a93339c67f57e1e067b388fb30b1b9"]
      - values: {"n":30,"k":5,"r":2}
        answers: ["sha256:96cd0c0eb5ebc529eb145d9dd002c3b6fd8976962f16a0d59b29a034c11724bc","sha256:6998cb82a456dda141304d73b13517a65ecdd6916bff4d2d30f3c539debe0ab9","sha256:e35e02edd110c57b0dbd3493852d4d001c81031ee1f0dbfda3abadae1e2609f4"]
      - values: {"n":12,"k":2,"r":1}
        answers: ["sha256:ee57b7aa5c12b984158655bd96c02fa85a788db5c7091a69f23f563593364b4c","sha256:03b578c9ca5c7eae423b5b3a272657b820dbe17415d30234e8cc13c12ebc7a10","sha256:eb949556fbc171ed023753b96863b1119e18de3c5ddbeb1fa5525c68be856676"]
      - values: {"n":25,"k":7,"r":3}
        answers: ["sha256:b157b7363148f0234968e5a881f6e9bcd931bf87586273d2076a2a79da1758c3","sha256:2f5f0ef27436b48a74e02bfde7e604004bbfdbe98bf254f2664e33d661241140","sha256:55d46737c924bc9b74bebe4eeccd6935ed176b86c51b2581879366dca821be4e"]
      - values: {"n":40,"k":6,"r":5}
        answers: ["sha256:87a3c31f53dd1aeca54667392b76074952a09cff2ef3e26350dc7566bbac94b3","sha256:373173043769afe4dd8a3ce540245f4cbfbadf4a0f7c7f9601b214c0e2ede32e","sha256:9f9fc9505ef32b3052f2974ce325fba6907f83e28dfc46a4169c558e2f10a760"]
  - id: diccionario-contador
    tier: 2
    prompt: |
      ¿Qué escribe este programa? (Salida exacta.)
      ```python
      cuenta = {}
      for letra in "{{w}}":
          cuenta[letra] = cuenta.get(letra, 0) + 1
      print(len(cuenta), cuenta["{{c}}"])
      ```
    variants:
      - values: {"w":"programacion","c":"a"}
        answers: ["sha256:8241649609f88ccd2a0a5b233a07a538ec313ff6adf695aa44a969dbca39f67d"]
      - values: {"w":"mississippi","c":"s"}
        answers: ["sha256:71ee45a3c0db9a9865f7313dd3372cf60dca6479d46261f3542eb9346e4a04d6"]
      - values: {"w":"abracadabra","c":"b"}
        answers: ["sha256:41cfc0d1f2d127b04555b7246d84019b4d27710a3f3aff6e7764375b1e06e05d"]
      - values: {"w":"electroencefalograma","c":"e"}
        answers: ["sha256:9f1f9dce319c4700ef28ec8c53bd3cc8e6abe64c68385479ab89215806a5bdd6"]
      - values: {"w":"paralelepipedo","c":"p"}
        answers: ["sha256:bbb965ab0c80d6538cf2184babad2a564a010376712012bd07b0af92dcd3097d"]
      - values: {"w":"otorrinolaringologo","c":"o"}
        answers: ["sha256:434c9b5ae514646bbd91b50032ca579efec8f22bf0b4aac12e65997c418e0dd6"]
  - id: operaciones-con-conjuntos
    tier: 1
    prompt: |
      Con `A = {{A}}` y `B = {{B}}`, ¿qué escribe `print(len(A | B), len(A & B), len(A - B))`? (Salida exacta.)
    variants:
      - values: {"A":"{1, 2, 3, 4}","B":"{3, 4, 5}"}
        answers: ["sha256:a9346b0068335c634304afa5de1d51232a80966775613d8c1c5a0f6d231c8b1a"]
      - values: {"A":"{2, 4, 6, 8, 10}","B":"{1, 2, 3}"}
        answers: ["sha256:c66bbe9d118f554bfdba35a609848b9ab2d9c22e6bed77be6f8a55e96c295549"]
      - values: {"A":"{7}","B":"{7}"}
        answers: ["sha256:9bdb2af6799204a299c603994b8e400e4b1fd625efdb74066cc869fee42c9df3"]
      - values: {"A":"{1, 3, 5, 7, 9}","B":"{2, 4, 6}"}
        answers: ["sha256:d1c78c9aa5dcb0991f46b25fbaaa359d7d5823ac7a2a94c4d4a31da42a26c24f"]
      - values: {"A":"{0, 1, 2, 3, 4, 5}","B":"{4, 5, 6, 7}"}
        answers: ["sha256:7a9b1b9dd2e433fc1fc962c38ad571bf1ebb49cb365bfdfb2c36d3f059d6fdd5"]
      - values: {"A":"{10, 20, 30}","B":"{20, 30, 40, 50}"}
        answers: ["sha256:72933e3b31f0070af6478edc3becf96e1ee59917620e8c509cf0e6b360e29c02"]
  - id: desempaquetado
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Qué número escribe este programa?
      ```python
      a, b = {{a0}}, {{b0}}
      for _ in range({{n}}):
          a, b = b, a + b
      print(a)
      ```
    variants:
      - values: {"n":10,"a0":0,"b0":1}
        answers: ["sha256:94a7c1b6afb0d87342d8ac2fbaf04bc0fbb7961d35d5a0338fa5efc8c79f5e8b","sha256:ea999775f3da8a83034339ee34e25a28c0f5af97ccbfa6aaee86e7a075a8ec50","sha256:901433e5e87c807deda1662bc34bb9d5a76d84f00afaecdbfccbe8351671e15f"]
      - values: {"n":7,"a0":2,"b0":1}
        answers: ["sha256:abf05cb37fd59914a4d66ce12aeb498fa6e0b5f9d8133aae2e9547d7ba65fcb4","sha256:e5d6dc43f81c9ed63020c06f2dcb2fa44833ae2b43672086395e233548299483","sha256:a91eac410ee359deb3bd2c1880046a8510531425047be5a18060bac3c113de90"]
      - values: {"n":15,"a0":1,"b0":1}
        answers: ["sha256:4331ff8d5471e4c81180f2e101687a423ea25d9e00fa8d8ed3c91c86eecfe533","sha256:a842d207ce9be0bc18bc57d43f141a67e3624170648b477424f98929e4ab252b","sha256:7244c59eae5792002e627db3ec71be453227af351902ba4041514e5b0d072bbd"]
      - values: {"n":6,"a0":3,"b0":4}
        answers: ["sha256:499263a6c79b585a4e0f9bb905d7de8990711d88f95bad0efb81e287b2658688","sha256:db8a4326cf9bf3f657526e45586464c339e8d89845fdbb02ae3f6f9da35b2153","sha256:0de66134084004c7eb49a98c410a3e1371d4466414ed9f3cc0916f1a82339d47"]
      - values: {"n":20,"a0":0,"b0":1}
        answers: ["sha256:274ce3a080cb89837f99a1cce3aa5ff33a19a4a828fbd98f859a4ffb6dfb748f","sha256:d382268fe63b2450fd7984fbc065d36bc378e5e20a22e63a95d56fa4cad867eb","sha256:46a9ee9ccf4cef3ffe79866a1e1c61929702a9b1561e6a0e266879f99dda549c"]
      - values: {"n":8,"a0":5,"b0":2}
        answers: ["sha256:86176f66e18aab8cdccb98672212e78e9d729de7fcfaf8fe4f6aa4b0bdc16163","sha256:902479e716bda34414c4c612a6ea55c61a531fd923f039c3dedc0af3f691440a","sha256:aa163e17d7a7676be19cba008f720eabdd3e14245cc139d33aa679beb9f2b82c"]
  - id: ordenar-con-clave
    tier: 2
    prompt: |
      Con `palabras = [{{L}}]`, ¿qué escribe `print(sorted(palabras, key=len){{i}})`? (Recuerda que la ordenación de Python es estable.)
    variants:
      - values: {"L":"\"pera\", \"kiwi\", \"uva\", \"manzana\", \"higo\"","i":"[1]"}
        answers: ["sha256:ae0a456b0a5b5a05196cf4e6392e597b5a4e99545c6a5254f5ddca6ae6d016a1"]
      - values: {"L":"\"sol\", \"luna\", \"mar\", \"rio\", \"cielo\"","i":"[2]"}
        answers: ["sha256:682f158037ed29e3b1718ce7060f73e69cfa2673d9bcd898ad4ecdfd4fe7f320"]
      - values: {"L":"\"casa\", \"ala\", \"barco\", \"ojo\", \"tren\"","i":"[3]"}
        answers: ["sha256:76abef6399af5e8b910588b4d6746689013a25ea0f322918b15cb92b51a3c83b"]
      - values: {"L":"\"python\", \"c\", \"rust\", \"go\", \"java\"","i":"[2]"}
        answers: ["sha256:521fe5c9ece1aa1f8b66228171598263574aefc6fa4ba06a61747ec81ee9f5a3"]
      - values: {"L":"\"rojo\", \"azul\", \"gris\", \"negro\", \"oro\"","i":"[0]"}
        answers: ["sha256:dab41234953ddef39b5b7959edf610eb3ecc5dee017fff3dfdc867d526d8fa7c"]
      - values: {"L":"\"tres\", \"dos\", \"uno\", \"cuatro\", \"cinco\"","i":"[3]"}
        answers: ["sha256:216e1e3f8fed804bf3c16a8f9dac7d25fd4902b7277828729dcceb797c8c1ddc"]
  - id: excepciones
    tier: 2
    prompt: |
      ¿Qué escribe este programa? (Salida exacta.)
      ```python
      def prueba(texto):
          try:
              n = int(texto)
              return "ok " + str(100 // n)
          except ValueError:
              return "no es un entero"
          except ZeroDivisionError:
              return "división por cero"
      print(prueba("{{s}}"))
      ```
    variants:
      - values: {"s":"4"}
        answers: ["sha256:972d4163682cf1346ec4fbd3efdd288beca70b385a021207d0ddaa712e061f3b"]
      - values: {"s":"0"}
        answers: ["sha256:156fb240cca730f3532859eb8df03f3ed79c002a325da833b2532850cecdbd5a"]
      - values: {"s":"tres"}
        answers: ["sha256:54078f61032ca8c71fd152288697d1f42a511633d6b094d6237569a8fcc9bff5"]
      - values: {"s":"-7"}
        answers: ["sha256:05184d44ceb8c0bd7c3998b169c2d650e871b6444ba50c9b8c350217386f499e"]
      - values: {"s":"7"}
        answers: ["sha256:2a1ffbfe01b7bef09a6163d698af09947c4b9c2fb5612dee403d318d1ccd7269"]
      - values: {"s":"25"}
        answers: ["sha256:ab65f48f972e46eb7593e4f3a64ec94f5d3e8a18a19fdc47bf8d5769cafdf54a"]
  - id: palabras-mas-frecuentes
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Escribe una función `mas_frecuentes(ruta, k)` que lea un archivo de texto (UTF-8), cuente cuántas veces aparece cada palabra (sin distinguir mayúsculas y sin signos de
      puntuación) y devuelva una lista con las `k` palabras más frecuentes y sus cuentas, de mayor a menor. Explica qué estructura de datos usas para contar y por qué, cómo ordenas, qué pasa si el archivo no
      existe y cómo probarías la función.
    sealed: "gz64:H4sIAAAAAAACCn1UzY7jRBB+lZI1B3vWG+1yQkE5od0TAiTEKY5wpV1JmmlX9VZ3Zzc7misPwBtwRGgOaG/LAWnyJjwJav/MZgDhk91V9dVXX33t2yKIS9EKF8vie0bIn8aePzB4CXbraNlw27b+FA/CDdvei0YIUS3vG264ox30GH7YKZlEHCmUmiLWcFMtGwYAGI4RVnB7Nx68tfEA4omnTGIjneX9qilS3D3/vCkqwAC7qT4/O1FwlgnB8pPAHPTocKtDeMhbOHlLWlaL4J2NZfWPkvzMJav5bZGn8uU428InNjFhlgaeQVM8/Pnwy8NvD380RfVvLLubQf6j0ScR1lPSBlbTyWJPsZxOa3hRwTN4OSJ4VAqwgiAaqSundBupD2VVww2dVg77bYc5cwnlc4+6frmp8+f6xaaaWCrFpDyirZc3m2GbDX+LimCEIyoEghQQEsP1dWeNscKoVq6vYWYGf/30M/D5Y08q0BGgR7U5j0K1hG0KBhVOgFkwZ9+jQmIE4/BIec4QB/RoqfeSu4aIHAmIwav01FmpAcP5Ht4kmlld8dWsaZhBOnIg2hFnEld81XBphKE14hyZvKqw+FISR9I2j3VAPd8j2H1Cl7v1xBLAne+ZMFQL+I5GOGRwEibJvejs2Y6CIe6yreFUw4TUYVcDuh1uz79Ga7DP8UF3HAYgB0ohuYidQKAME0l7yzZEXED76P8WjCVVzBWo5mCP0jAmziAHPCGQqiiFLyDYixxgAXpnQ27ajjgO+T1C+9o6+lria0ncvcq1bT1LerTEBB39iJpF97hHhVLAoI9JUWGXSLHKKrmUY13OPoo7Ut7mxUQ7dEEWMDjIq2xRHS5zykzP05tE59+lYQpGbRRA6JGHzU/KhvwuxnYYajAYxq30NhKUM8wRzfleamhvWujxJDqLe2HE2SB1zjh/DCY5DHCCYPcsoYITGOkHkqNbBwothkAa20VRF5q2ak2xXN8WmSqplWJZfIWwSzz+Bh3RpfYDwKcN1sCi/WB6yK0fHXuaPZQLEsPFxcp9feIooVh+dlc/6fzNYMfBg9Mf1ViEcgKZE8flBOo9RspTdnRM5I40cMiCebU9KYb/6/XqnXfWZN5Ajsw4br5iF1zrPHtUjNhb4ihDfNbC8mjD4XqAOX/o5dERTxtv7v4GjE0W6GkGAAA="
  - id: r-return-none
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué devuelve una función de Python que termina sin ejecutar ningún `return`?
    options:
      - |
        0
      - |
        Una cadena vacía
      - |
        None
      - |
        Un error
    answers: ["sha256:8ad17e713b75f49a6b737eaf02542272f61d9168f0e0bca8f0593a66445650d2"]
  - id: r-tupla-inmutable
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué diferencia principal hay entre una lista y una tupla?
    options:
      - |
        Las tuplas no se pueden modificar; las listas sí
      - |
        Las tuplas solo guardan números
      - |
        Las listas no admiten repetidos
      - |
        Ninguna
    answers: ["sha256:e1ba37d57c4f31e5bbb012992ee2066cda1ade30e08bcbbd6d27952468d0f931"]
  - id: r-claves-diccionario
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué valores pueden ser claves de un diccionario?
    options:
      - |
        Cualquier valor, también listas
      - |
        Valores inmutables (y hashables), como números, cadenas o tuplas
      - |
        Solo cadenas
      - |
        Solo números
    answers: ["sha256:770ea1b5a9c4b0fcc998542416f89eea6c2a52c3425f2bf69b8d32df3e5d9d6f"]
  - id: r-set-repetidos
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué escribe `print(len(set([3, 1, 3, 2, 1, 3])))`?
    answers: ["sha256:69554ce70623064a0ea79ce590e2350c35d18e15e8eaabe2a9103532900f2cc9","sha256:98d9ca52ce7e4ae6a260a8569ffe71015f9fcc6fde3c6c7ea65083892730560d","sha256:3e86c7d8c0defef20634410a36b15929c7adca2f35435bb3426247eb459a7f6b"]
  - id: r-mutable-por-defecto
    tier: 3
    type: numero
    review: true
    sig: 6
    prompt: |
      Con `def f(x, L=[]): L.append(x); return L`, tras llamar a `f(1)` y `f(2)`, ¿qué longitud tiene la lista que devuelve `f(3)`?
    answers: ["sha256:315693536da14518f4d1f25af7b6cee8de0c6ae6dacb70388234409c8ab057eb","sha256:b1ed64532acb9c12dd1feba2996563b468231394522cf2dab0915093944633a0","sha256:fb969c0196d251e9e1974f057f79918189f8fcaf7cc7d51d9f52af6dd3b434e3"]
  - id: r-with
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Para qué sirve abrir un archivo con `with open(...) as f:`?
    options:
      - |
        Abre el archivo más rápido
      - |
        Lee el archivo entero en memoria
      - |
        Impide que otros programas lo usen
      - |
        Garantiza que el archivo se cierra al salir del bloque, aunque haya errores
    answers: ["sha256:88ff2da20474b5b43443d00d3bc78af8e063ab366b52f46eea330ee99f0e6ca8"]
  - id: r-recursion-caso-base
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué ocurre con una función recursiva que no tiene caso base?
    options:
      - |
        Se llama a sí misma indefinidamente hasta agotar la pila (RecursionError)
      - |
        Devuelve 0
      - |
        Se ejecuta una sola vez
      - |
        Python la convierte en un bucle
    answers: ["sha256:d12b5c6fb21f756a1ef01d4d22743546cd544a8df3c9bcc2595f3c327bf27e9d"]
---

# Python II: funciones, ámbito y recursión, listas, tuplas, diccionarios y conjuntos, alias y mutabilidad, archivos, excepciones y módulos

Con variables, condicionales y bucles ([[prog-python-datos-control]]) ya se puede calcular casi cualquier cosa, pero los programas crecen y se vuelven
ilegibles. Las **funciones** permiten dividir un problema en piezas con nombre, probarlas por separado y reutilizarlas; las **colecciones** permiten
trabajar con muchos datos a la vez (las notas de una clase, las palabras de un libro, los usuarios de una web). Este nodo completa el núcleo del lenguaje:
funciones, las cuatro colecciones básicas, archivos, errores y módulos.

## Objetivos

Al terminar sabrás:

1. Definir y llamar funciones con parámetros posicionales, por nombre y por defecto, y entender el ámbito de las variables.
2. Escribir funciones recursivas con su caso base.
3. Usar listas, tuplas, diccionarios y conjuntos, sus operaciones y las comprensiones.
4. Entender los alias, la mutabilidad y cuándo hace falta copiar.
5. Leer y escribir archivos de texto, tratar errores con excepciones y usar módulos de la biblioteca estándar.

## Qué debes dominar antes

[[prog-python-datos-control]] (tipos, operadores, cadenas, condicionales y bucles).

> [!question] Test de entrada
> 1. ¿Qué escribe `print("pato"[1:3])`?
> 2. ¿Cuántas vueltas da `for i in range(3, 12, 4):`?
> 3. ¿Qué escribe `print(-9 // 4, -9 % 4)`?
>
> Respuestas: `at`; tres ($3$, $7$, $11$); `-3 3`.

## 1. Para qué sirve

- **Organizar programas**: cada función hace una cosa y se puede probar sola; es la base de la programación orientada a objetos ([[prog-poo-diseno]]).
- **Datos**: casi todos los programas reales manejan colecciones; elegir la adecuada decide su eficiencia ([[prog-estructuras-datos]]).
- **Automatización y análisis**: leer archivos, contar, filtrar, resumir ([[ia-python-datos]]).
- **Robustez**: las excepciones permiten reaccionar a datos malos o archivos que no existen sin que el programa se rompa.

## 2. Funciones

> [!practico]
> Una función es como una receta con nombre: `def area_rectangulo(base, altura): return base * altura`. Una vez escrita, `area_rectangulo(3, 4)` da $12$ sin volver a pensar
> cómo se calcula. Si mañana descubres un error en la receta, lo corriges en un único sitio.

- **Definición**: `def nombre(parámetros):` y un bloque sangrado; `return valor` termina la función y devuelve el valor (sin `return`, devuelve `None`). Una **cadena de documentación** al principio explica
  qué hace (`help(nombre)` la muestra).
- **Argumentos**: posicionales (`f(3, 4)`), por nombre (`f(altura=4, base=3)`) y **valores por defecto** (`def saludo(nombre, saludo="Hola")`). Los parámetros con valor por defecto van al final.
- **Trampa clásica**: el valor por defecto se evalúa **una sola vez**, al definir la función; un valor mutable (`L=[]`) se comparte entre llamadas. Se usa `L=None` y se crea la lista dentro.
- **Ámbito**: las variables asignadas dentro de una función son **locales** y no afectan a las de fuera con el mismo nombre; una función puede **leer** variables globales, pero para reasignarlas
  necesitaría `global` (mejor evitarlo: pasar parámetros y devolver resultados).
- Las funciones son valores: se pueden pasar como argumento (`sorted(lista, key=len)`) y escribir en una línea con `lambda` (`lambda x: x * x`).

## 3. Recursión

Una función **recursiva** se llama a sí misma con un problema más pequeño, hasta llegar a un **caso base** que se resuelve directamente:

```python
def factorial(n):
    if n <= 1:          # caso base
        return 1
    return n * factorial(n - 1)
```

`factorial(5)` da $120$. Sin caso base (o si no se acerca a él), las llamadas no terminan y Python se detiene con `RecursionError`. Muchos problemas (recorrer carpetas, árboles, «divide y vencerás») se
expresan de forma natural con recursión ([[prog-algoritmos]]); algunos se resuelven igual de bien con un bucle.

## 4. Colecciones

| colección | sintaxis | ordenada | modificable | repetidos | uso típico |
| --- | --- | --- | --- | --- | --- |
| lista | `[3, 1, 2]` | sí | sí | sí | secuencias que cambian |
| tupla | `(3, 1, 2)` | sí | no | sí | registros fijos, devolver varios valores |
| diccionario | `{"ana": 7}` | por inserción | sí | claves únicas | buscar por clave |
| conjunto | `{3, 1, 2}` | no | sí | no | pertenencia, quitar repetidos |

- **Listas**: índices y rebanadas como las cadenas; métodos `append`, `insert`, `pop`, `remove`, `sort` (modifica la lista) frente a `sorted` (devuelve otra); `len`, `sum`, `min`, `max`, `in`. *Ejemplo:*
  `sorted([3, 1, 2])` da `[1, 2, 3]`.
- **Tuplas** e inmutabilidad; **desempaquetado**: `a, b = b, a` intercambia; una función puede devolver `return minimo, maximo`.
- **Diccionarios**: `d[clave]` (da `KeyError` si no existe), `d.get(clave, defecto)`, `d.items()`, `d.keys()`, `d.values()`. Las claves deben ser **inmutables** (números, cadenas, tuplas). Contar letras de `"banana"`:
  `{"b": 1, "a": 3, "n": 2}`.
- **Conjuntos**: sin repetidos y con pertenencia muy rápida; unión `|`, intersección `&`, diferencia `-`. `len(set(lista))` cuenta los distintos.
- **Comprensiones**: `[x * x for x in range(10) if x % 2 == 0]`, `{p: len(p) for p in palabras}`, `{c for c in texto}`: construyen colecciones en una línea legible.

## 5. Alias y mutabilidad

> [!practico]
> En Python una variable no es una caja que contiene un valor, sino una **etiqueta** pegada a un objeto. Si escribes `b = a` con una lista, no copias la lista: pegas una
> segunda etiqueta al mismo objeto. Lo que hagas con `b.append(...)` lo verás también en `a`. Con números y cadenas no se nota, porque no se pueden modificar.

- `b = a` crea un **alias** (`a is b` es `True`); `c = a[:]`, `list(a)` o `a.copy()` crean una **copia** (superficial: si la lista contiene listas, esas se comparten; para eso existe `copy.deepcopy`).
- Al pasar una lista a una función, la función recibe el mismo objeto: si la modifica, el cambio se ve fuera. Las funciones que modifican sus argumentos deben dejarlo claro (y no devolverlos), como `list.sort`.
- `==` compara valores; `is` compara identidad (si son el mismo objeto).

## 6. Archivos, excepciones y módulos

- **Archivos de texto**: `with open("datos.txt", encoding="utf-8") as f:` y recorrer `for linea in f:` (o `f.read()`); para escribir, `open(ruta, "w", encoding="utf-8")` y `f.write(texto)`. `with` cierra el archivo al terminar,
  aunque haya errores.
- **Excepciones**: los errores en tiempo de ejecución (`ValueError`, `KeyError`, `IndexError`, `ZeroDivisionError`, `FileNotFoundError`…) se pueden capturar:
  `try: … except ValueError: …`; se capturan solo los errores esperables y concretos, nunca todos a ciegas. `raise ValueError("mensaje")` lanza uno propio.
- **Módulos**: `import math`, `from random import randint`, `import collections`; la biblioteca estándar trae de todo (`math`, `random`, `statistics`, `datetime`, `pathlib`, `csv`, `json`). Un archivo `.py` propio
  también es un módulo; `if __name__ == "__main__":` separa el código que solo se ejecuta al lanzar el archivo directamente.

> [!formal] Con rigor: por qué los diccionarios y los conjuntos son tan rápidos
> Diccionarios y conjuntos son **tablas hash**: cada clave se convierte, con un cálculo de dispersión (en inglés, *hashing*), en un número que indica en qué posición de una tabla interna se guarda. Buscar, insertar o borrar cuesta en promedio
> un tiempo constante, independiente del tamaño, mientras que buscar en una lista exige recorrerla (tiempo proporcional a su longitud). Por eso las claves deben ser inmutables: si una clave cambiara, su hash
> cambiaría y ya no se encontraría en su posición ([[prog-estructuras-datos]]). $\blacksquare$

## 7. Errores típicos

- Olvidar el `return` (la función devuelve `None`) o confundir `print` con `return`.
- Usar una lista como valor por defecto.
- Modificar una lista mientras se recorre con `for`.
- Creer que `b = a` copia una lista.
- Capturar todas las excepciones con un `except:` vacío, ocultando errores reales.

## 8. Resumen

- Funciones: `def`, `return`, parámetros por posición, por nombre y por defecto; ámbito local; `lambda`.
- Recursión con caso base.
- Listas, tuplas, diccionarios, conjuntos; métodos; comprensiones.
- Alias y copias; mutabilidad; `is` frente a `==`.
- Archivos con `with open`; excepciones con `try`/`except`; módulos e `import`.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué devuelve una función sin `return` y por qué no se usa `L=[]` como valor por defecto.
2. Qué necesita una función recursiva para terminar.
3. Cuándo usar lista, tupla, diccionario o conjunto.
4. La diferencia entre `b = a` y `b = a[:]` con listas.
5. Cómo se lee un archivo de forma segura y cómo se trata un `ValueError`.

## Siguiente

[[prog-python-fundamentos]] repasa el bloque con un mini-proyecto; después, [[prog-estructuras-datos]] y [[prog-algoritmos]].
