---
id: prog-python-datos-control
title: "Python I: el intérprete, valores y tipos, variables, operadores, cadenas, entrada y salida, condicionales y bucles"
area: bajo-nivel
trunk_level: 2
prerequisites: [prog-pensamiento-computacional]
academic_sources:
  - "Python Software Foundation, «The Python Tutorial», secciones 3 («An Informal Introduction to Python»: números, cadenas, primeros pasos) y 4.1-4.5 («More Control Flow Tools»: if, for, range, break, continue y else en bucles). https://docs.python.org/3/tutorial/introduction.html y https://docs.python.org/3/tutorial/controlflow.html"
  - "Python Software Foundation, «The Python Language Reference», secciones 6 («Expressions»: precedencia de operadores, comparaciones encadenadas, operadores booleanos) y 8 («Compound statements»). https://docs.python.org/3/reference/expressions.html"
  - "A. B. Downey, «Think Python: How to Think Like a Computer Scientist», 3.ª ed., O'Reilly (2024), capítulos 1-2, 5 y 7 (libre en https://allendowney.github.io/ThinkPython/)."
hints:
  - "Concepto: un programa es una secuencia de instrucciones que el intérprete ejecuta en orden; las variables son nombres que apuntan a valores de un tipo (int, float, str, bool); las condiciones eligen qué bloque se ejecuta y los bucles repiten un bloque. En Python, los bloques se marcan con la sangría."
  - "Herramienta: prueba cada expresión en el intérprete interactivo; `type(x)` dice el tipo; // y % usan el suelo (−7 // 2 = −4); / siempre da float; range(a, b, s) llega hasta b sin incluirlo; para seguir un bucle a mano, haz una tabla con el valor de cada variable en cada vuelta (traza)."
  - "Documentación: «The Python Tutorial», secciones 3 y 4 (docs.python.org/3/tutorial/); Downey, «Think Python»."
exercises:
  - id: division-entera-y-resto
    tier: 1
    prompt: |
      ¿Qué escribe este programa? (Escribe la salida exacta, con el espacio.)
      ```python
      a = {{a}}
      b = {{b}}
      print(a // b, a % b)
      ```
    variants:
      - values: {"a":23,"b":4}
        answers: ["sha256:2858dcd1057d3eae7f7d5f782167e24b61153c01551450a628cee722509f6529"]
      - values: {"a":-23,"b":4}
        answers: ["sha256:11f067c8173efe63ab3794cb4ba468ca6f22038f99100c14269ed374d2557251"]
      - values: {"a":23,"b":-4}
        answers: ["sha256:11f69ddd8ccb1c898d4c72bd3699d2bfaa19bbb9c09e54096768ab1f12e9ae74"]
      - values: {"a":-9,"b":2}
        answers: ["sha256:1d9342ecadfca5845716537bccf61967edec5812fe4d51e2632f538f04fdf6ba"]
      - values: {"a":100,"b":7}
        answers: ["sha256:d4ee9f58e5860574ca98e3b4839391e7a356328d4bd6afecefc2381df5f5b41b"]
      - values: {"a":-1,"b":3}
        answers: ["sha256:7ed00270e394c3e190d18a977f5d0e1ed889bdc03a637e8fe35f00946841b0bf"]
  - id: precedencia
    tier: 1
    prompt: |
      ¿Qué escribe `print({{a}} + {{b}} * {{c}} ** 2 - {{d}} / {{e}})`? (Escribe la salida exacta, como la mostraría Python.)
    variants:
      - values: {"a":2,"b":3,"c":4,"d":10,"e":4}
        answers: ["sha256:f40bbd5c36e5cb41640b5534198654a475ed2a86c0c370fc39462a2af7c99188"]
      - values: {"a":1,"b":5,"c":2,"d":9,"e":3}
        answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
      - values: {"a":10,"b":2,"c":3,"d":1,"e":2}
        answers: ["sha256:d978b6fd23fe948eb58ebc9d61bad83c288f3b8e34d003dee9eaaf7cfd492df0"]
      - values: {"a":0,"b":4,"c":5,"d":6,"e":8}
        answers: ["sha256:9de30083aca9997051371be3676f9e3118770fea398c9c5a55818c4bcf7ba65a"]
      - values: {"a":7,"b":1,"c":6,"d":5,"e":5}
        answers: ["sha256:73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049"]
      - values: {"a":3,"b":2,"c":7,"d":12,"e":16}
        answers: ["sha256:276e984dd04dbd73c7d99e14cf02cff9fe8d1b467a04929a3770f8c7c7f0ace2"]
  - id: conversiones-de-tipo
    tier: 1
    prompt: |
      ¿Qué escribe `print(int("{{s}}") + int({{x}}) + len(str({{n}})))`?
    variants:
      - values: {"s":"12","x":"3.9","n":4567}
        answers: ["sha256:9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"]
      - values: {"s":"-5","x":"7.2","n":10}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"s":"40","x":"-2.8","n":999}
        answers: ["sha256:3d914f9348c9cc0ff8a79716700b9fcd4d2f3e711608004eb8f138bcba7f14d9"]
      - values: {"s":"7","x":"0.99","n":123456}
        answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
      - values: {"s":"100","x":"9.5","n":5}
        answers: ["sha256:9bdb2af6799204a299c603994b8e400e4b1fd625efdb74066cc869fee42c9df3"]
      - values: {"s":"3","x":"-0.5","n":31415}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: indices-y-rebanadas
    tier: 2
    prompt: |
      Con `s = "{{s}}"`, ¿qué escribe `print(s{{i}} + s{{j}} + s{{ab}})`? (Escribe la salida exacta.)
    variants:
      - values: {"s":"programar","i":"[0]","j":"[-2]","ab":"[3:6]"}
        answers: ["sha256:6dd337499092859098b2faf88c2e93f235ce26b810d3e3208f22f302457c3ad6"]
      - values: {"s":"algoritmo","i":"[2]","j":"[-1]","ab":"[0:4]"}
        answers: ["sha256:844bbac39239171c7bb30ea5845c65c3947f101f28949e61fd756f88051b366d"]
      - values: {"s":"universidad","i":"[4]","j":"[-3]","ab":"[1:5]"}
        answers: ["sha256:018357da84dd36774ca0f3510166ae941c70ed8e9a3e5264b852e847d2cf17c7"]
      - values: {"s":"teclado","i":"[1]","j":"[-4]","ab":"[2:7]"}
        answers: ["sha256:629005837a4209630aa7c69123faf1be8e7c8da7b364d989db8d10235910ce89"]
      - values: {"s":"pantalla","i":"[3]","j":"[-2]","ab":"[4:8]"}
        answers: ["sha256:1af2ac83bb7bbc7016e012e8b1e2d3f85dff105267c0e552901eba53f25c77bd"]
      - values: {"s":"variable","i":"[5]","j":"[-5]","ab":"[0:3]"}
        answers: ["sha256:8fe308a2ec2921b888bc68ad3638e57f74d9cfa9f4c32a1931e79c09239d581f"]
  - id: comparaciones-y-logica
    tier: 2
    prompt: |
      ¿Qué escribe este programa? (Salida exacta.)
      ```python
      a, b, c = {{a}}, {{b}}, {{c}}
      print(a < b <= c, not (a == c) and b > 0 or c < 0)
      ```
    variants:
      - values: {"a":1,"b":5,"c":5}
        answers: ["sha256:4e46a76bb7c3bebbcc5960b8a948522a7cf39a0417377d7206d613ace578ed90"]
      - values: {"a":3,"b":2,"c":7}
        answers: ["sha256:d0ed673fb6af647b0a9da7863b7699b68286c3c3796b41976baf4fa3b3dc3ef9"]
      - values: {"a":-4,"b":0,"c":9}
        answers: ["sha256:c0b3b644a08b30d0dcd67fe353ded4d67bb8308394cb5d89ad94bfd3cb0e8ed7"]
      - values: {"a":6,"b":6,"c":6}
        answers: ["sha256:9a798296dcf0c54809ae61fb73ea470e860bb00864908cce833d6b0fd3b31cc0"]
      - values: {"a":2,"b":8,"c":-1}
        answers: ["sha256:d0ed673fb6af647b0a9da7863b7699b68286c3c3796b41976baf4fa3b3dc3ef9"]
      - values: {"a":0,"b":-3,"c":4}
        answers: ["sha256:9a798296dcf0c54809ae61fb73ea470e860bb00864908cce833d6b0fd3b31cc0"]
  - id: condicionales-encadenados
    tier: 1
    prompt: |
      ¿Qué escribe este programa?
      ```python
      nota = {{x}}
      if nota < 5:
          print("suspenso")
      elif nota < 7:
          print("aprobado")
      elif nota < 9:
          print("notable")
      else:
          print("sobresaliente")
      ```
    variants:
      - values: {"x":"4.9"}
        answers: ["sha256:ef96b2fd4a3e509a9c010a17421274649b2884789ca8b739887a4a302c41286b"]
      - values: {"x":"5"}
        answers: ["sha256:fea72ba3a3e01e02e2f80d0764ca8dc584255337742b59e1a69fb424c7b5e7bf"]
      - values: {"x":"8.75"}
        answers: ["sha256:6adc722e54d82920e3faba3bd42f15ebd26e7700218e8b30c0c3526416d162da"]
      - values: {"x":"9"}
        answers: ["sha256:fb57573c7ff7713b126f6783439a4ad56cdbf07bb9608e49bd6675c0a0658870"]
      - values: {"x":"6.99"}
        answers: ["sha256:fea72ba3a3e01e02e2f80d0764ca8dc584255337742b59e1a69fb424c7b5e7bf"]
      - values: {"x":"0"}
        answers: ["sha256:ef96b2fd4a3e509a9c010a17421274649b2884789ca8b739887a4a302c41286b"]
  - id: bucle-while
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Qué número escribe este programa?
      ```python
      n = {{n}}
      pasos = 0
      while n != 1:
          if n % 2 == 0:
              n = n // 2
          else:
              n = 3 * n + 1
          pasos += 1
      print(pasos)
      ```
    variants:
      - values: {"n":7}
        answers: ["sha256:d31fac122ec83f7b0751c72d4d179a341f9d55eec9f016097b6454a08793f818","sha256:b793bcfd05e6a059a73c895539536bb22004ff456cda6cf4aafec8d356bf2373","sha256:cad9b945aad995c6f6989ca50e7ba5e1062f8afb09e658b8207fbfd2c9fa042f"]
      - values: {"n":27}
        answers: ["sha256:d61745ba6b12dc71171df4a374d553653659233c2ea25102bf07d4035239813b","sha256:f9d73d00ca2cbea1621eb400ddec07610877cb33cefbd696e327edb240d75f87","sha256:0bdd49b733aba82c5ee514134efd791b7e8d51231e05526875507628524e33bc"]
      - values: {"n":12}
        answers: ["sha256:1b32fbe19156c993536343a3e36295ab917d5a0ca58a5c87332b5282a2470d9f","sha256:67978946c91eaf82dd7bf5e57c749649877aac2e21b640129e74286497174219","sha256:58eb3e8bd639bed09e897869bc7718883ee32535df9e7dbc579c0042aa08342c"]
      - values: {"n":97}
        answers: ["sha256:6e5754d12c22d1323173bace41a0a056e1ca4871676d33cffd1bdd016b6c7bbb","sha256:b72312d3af1afa064ad2251f94c0b33e58d6fc1ab3991410d65f385723cec729","sha256:7311fcb9c607cccea92bd859836e429c3510029fc6b8df2419eda946120106cb"]
      - values: {"n":19}
        answers: ["sha256:4a1ab06f7fdd3d41f2045d8a476bddb3076cfd155a02d78f006242578ad4dbd8","sha256:63a6d966c94465a39eb0d61e937fe5278717dbb770873fbe88c4e7f0222df1b4","sha256:080d75933792beacbd92a0ded0680d55258cd27f3d22f9139bf7df3b3aa68668"]
      - values: {"n":1}
        answers: ["sha256:3ebc2fd0a74742263c57cb9d067e9c139359dc9b6d25b3a6c22aed301076788e","sha256:e18bad0929c8287aadbb003e1c2e85ae7857e3c9109192ad4e40339f81f42eaa","sha256:a517bbe01c87e7fad872651351e1f8ebbd1fcaa914e19f5b9cdf08c1ea0f5a88"]
  - id: bucle-for-con-range
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Qué número escribe este programa?
      ```python
      total = 0
      for x in range({{a}}, {{b}}, {{s}}):
          total += x
      print(total)
      ```
    variants:
      - values: {"a":3,"b":30,"s":3}
        answers: ["sha256:c4db64e5b2b5447c8d42f74dcbe1b56bcc7375e4bb0039df531513b95fb1f128","sha256:6ce2d20b941bce34b5f4ddcb24bac5a85870dd10a2ca86975d4e0d3bacd59697","sha256:84d8eda4a34e4e5b0a5295cd684604c5a529e4a98f15953433fda577378a60ed"]
      - values: {"a":10,"b":1,"s":-2}
        answers: ["sha256:f2c2d64a93f5f264307fbc9780ec19c350b4cdca4528cf58bed71563a029cf44","sha256:6702fa89f513311afe5a8252ff9ebb46b7b29ac8470a6a4a7ee7d61e9c86ba88","sha256:af0ebf44b32476fb6f6cf5c4c946dd0b7bd3d5a2bfb1819190b12ffc011463ce"]
      - values: {"a":0,"b":50,"s":7}
        answers: ["sha256:37894f19ea5087a84f386e7cf1a06ba2d4201a93e04b958d8873ca67ce49b0db","sha256:70203a66915bd8017cfe75b9025e7af55b5dca662c032af54f7c9483cfc2c51d","sha256:0cb5b15b22b0018ae78dcba636e937761fe4b54b0507de76a7474c6c4a3c660b"]
      - values: {"a":5,"b":9,"s":1}
        answers: ["sha256:576aeb1d032afa4e77328ba78129747878ded22f7b21b137e5bb5f12ce77c30d","sha256:567ade473be1ff7a30383f7176896db24bfc4a0686f78624dcdc6cca0ba2e891","sha256:19aff9b089c232db1ce356be9890a2b33ba0b0f8433ce136b2cfcdd71ddc026d"]
      - values: {"a":-10,"b":11,"s":5}
        answers: ["sha256:33b344b1aaeb9ccd2f0e2a611687305ab5153b96c620e5b458186bd2a95d009d","sha256:1531f63e4e6dd907af7a395355c8633171401334f88f7bdc57112b52950cd5ad","sha256:85255581feb06e57d73cb56a74ff6d24828b64ff4591387ee03ac9f2bcac19f1"]
      - values: {"a":100,"b":0,"s":-15}
        answers: ["sha256:f01fc1d747ce05a6c5c5d96f386a710eba517fcd8e66298760338a9d5009b867","sha256:d9dcc18912f5b41895389325e29422c2f1535fdd529b3cd6760ab16ab804157b","sha256:15c377f3b2dee5ab6314ca51f20706606996338fa4b444e9070f456a2754cb38"]
  - id: break-y-continue
    tier: 3
    type: numero
    sig: 12
    prompt: |
      ¿Qué número escribe este programa?
      ```python
      total = 0
      for x in range(1, {{n}} + 1):
          if x % {{m}} == 0:
              break
          if x % {{k}} == 0:
              continue
          total += x
      print(total)
      ```
    variants:
      - values: {"n":50,"k":3,"m":17}
        answers: ["sha256:97aaee02c1df5d552f8d36e1d09cfa123b9231c6638c14e7e8fc3cd769c55207","sha256:628ca0020d0cf1266c3debcd145bfb538309f673d17182e49e262be0170fc71f","sha256:8f7c0078054db36a5833628711f93f006aff0d6fa3048c28fbf396e915bbce6a"]
      - values: {"n":30,"k":4,"m":11}
        answers: ["sha256:1435f7f5797e6c3d1266dca98fab2e0f30f414493b3ceaa133746ad8017a899a","sha256:a6acd8d69019905efb4fade8409b8c11fdbbc9d70fcd0af847f10218bfd751d6","sha256:0cd66712b756ebc2fe65aa35365f045adef3483aa45370ef08b9f334d7c36597"]
      - values: {"n":100,"k":5,"m":23}
        answers: ["sha256:2edaae8df810943165e3090da4bad357f5c8eece00f9ed3182f8acad4028266e","sha256:b03c40ead54072d1848b82ad8343db5518d2245306fc19af0d2307fb40f4e36a","sha256:5ef4f3c3e7d6f77b1f9bfeb96fc198482f195df2d0031aa58e1b48fa1b89a86c"]
      - values: {"n":40,"k":2,"m":13}
        answers: ["sha256:42dc3a5f17faef2c6e9b8faadb9169918e1ffa6e50b8a766a36f29707883b5ae","sha256:264b41b712261fdb1d38abfb77fcb912cb2d8c3c6ec3f3794811b9c584143a14","sha256:981770d73864f0c4c872e302c6dea48e26da3d7a91a5f0191dbd5019a6d52e12"]
      - values: {"n":60,"k":7,"m":19}
        answers: ["sha256:f7c1581ae74a779731ffdb8e9dd21074630a0b3b4307ce6d618994a5cc581e19","sha256:5b95dcd149ef3dfe181fe8b443aad7d77f6a4d06cc2542a410a4bf9c49016f5b","sha256:d29147f8accd18d47964b75a3338f3e9007aebf5b4139237110ca150450a09ba"]
      - values: {"n":25,"k":6,"m":9}
        answers: ["sha256:d27ac4a1ea27475ef796d2ef82c9d7982725617fc14c5da6275cc209d6e2f46b","sha256:a5ea1c933180eeb4ed01d5cfa152798c88398a4713d78a2045d6a5b213f37671","sha256:143f6ff5f7d3827007dae1c531b3c6b83b64151e2abc12979c3cc3285495316e"]
  - id: bucles-anidados
    tier: 3
    type: numero
    sig: 12
    prompt: |
      ¿Qué número escribe este programa?
      ```python
      c = 0
      for i in range({{n}}):
          for j in range(i + 1, {{n}}):
              if (i + j) % {{k}} == 0:
                  c += 1
      print(c)
      ```
    variants:
      - values: {"n":10,"k":3}
        answers: ["sha256:707b658885925241ac983f555cf415ff27e04a52d9cc55ee0e1ce85faf8a3916","sha256:fb105216b62a083798b5321a46f57ad5b0b6756d0e24cc548472613971a7e694","sha256:8e02ab8fcaeb219b84cecc8c3022432356c68fbcdc0f446e0f72984546e6a7f9"]
      - values: {"n":13,"k":4}
        answers: ["sha256:577c98611de4ceba487a05d7b88b32d9c8ae0ea39e7f77eb24fd634cf0bc6235","sha256:b00bd3aabb311dd4bab44f85449ccc8f425894b4f1d888fbaed336f77c610f82","sha256:fcd86698d9ae0b30bc68d8e9a54186523e35192aeeb3826254249ce62655f248"]
      - values: {"n":8,"k":2}
        answers: ["sha256:9a83518b591fa1f33af7541cc7b738a72c751c1d43dc0ee072388b6bcea347b8","sha256:a708483c8ad203b14cca04366a0bad2dd3c6024bb5a485f82f67bd30b4be7d82","sha256:9d68348f1fdcb5fc353582fe9036701dbd46ada2921d37557402ea1579a47435"]
      - values: {"n":15,"k":5}
        answers: ["sha256:1951dafa66e5bc270de78a190acf008e530cb762fa567b78ecee319a45d779c5","sha256:5a55a1ef7d10dea9484ef8938d15109915c7898f011c47888f1c82cdeafc8e2b","sha256:cc1cfdff58be8f3969671f45b1f01be620904d83589d1938109ee01938a3a20b"]
      - values: {"n":20,"k":7}
        answers: ["sha256:8b5ab6550384a7a955e954c017b7dc645f8bffd138efbb7fd9a6740051657475","sha256:c6db350d642b3c5e00a8347a35c40a930f3b5fdeabd3af39cdc66c6788df8c60","sha256:22138710b25343452a0d64b5976ef007fdff9e6dc59fd785f63a3a136d0642f0"]
      - values: {"n":9,"k":6}
        answers: ["sha256:be8a43547a32bbf38f964b9717197d95a7acec52ddc90279f46df32347ffc8f1","sha256:9befadf5b37602a6671153dad124f468b60043676f9e1d5d3683306667436f2f","sha256:2811e7c87ba9ebfcb635b5fab70d8cb064fc8f9e4db7e4a5b7a40245c471fac4"]
  - id: acumuladores
    tier: 2
    prompt: |
      ¿Qué escribe este programa? (Salida exacta, como la mostraría Python.)
      ```python
      datos = "{{s}}".split()
      mayor = menor = int(datos[0])
      suma = 0
      for t in datos:
          v = int(t)
          suma += v
          if v > mayor:
              mayor = v
          if v < menor:
              menor = v
      print(mayor, menor, suma / len(datos))
      ```
    variants:
      - values: {"s":"4 9 2 7"}
        answers: ["sha256:d4d6ad94524337d37bc78792edb9e9d9894e5de71078e5775c459dd59c4be8dd"]
      - values: {"s":"10 -3 5"}
        answers: ["sha256:7157118fe467b44ec2b961115746c998bc45ec718c548feb013eb64de42ac19c"]
      - values: {"s":"8 8 1 3 5"}
        answers: ["sha256:96da2f8885ba92c9ca4d34bb763a3bc9e19017f0df6424956d61f45abdc7f241"]
      - values: {"s":"-2 -9 -4"}
        answers: ["sha256:dd44a99423038a98809d963a820143a552cfb9005798a31bb87746d32670ee63"]
      - values: {"s":"15 3 12 6"}
        answers: ["sha256:731d65cdd441fde25333a70782a078911af63ef672e299a906030e16ff66756b"]
      - values: {"s":"1 2 3 4 5 6"}
        answers: ["sha256:2abdd9357f352c73b3935d1e86c04283e4b16d781e341027d6cf30ba8159c311"]
  - id: programa-con-validacion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Escribe un programa en Python que pida al usuario números enteros uno a uno (con `input`) hasta que escriba `fin`, ignore (avisando) lo que no sea un entero, y al terminar
      muestre cuántos números válidos se introdujeron, su suma y el mayor. Explica qué tipo de bucle usas y por qué, cómo detectas las entradas no válidas y qué ocurre si no se introduce ningún número.
    sealed: "gz64:H4sIAAAAAAACCn1Ty44jNwz8lUJf1sYaziZHL7yn7CWHueRxSQcQ3aZtTdSkQkmT6V3sx8w35DZX/1ggtT3jQYD0SU2RxWIV9bVLGkr2Kt2m+1UI9Xfw538EUZPfBd704pyLUz6p9DIUkqwJW3zoJZWR5tNIkxq2uFPhXv4++cD4xUotBoDMj1mxhZdY8qLv7s7PI5tioXh38PJuuUHfLdcpm4+L5VzjD9eyLfru4KXvLmj12xnTnxdwm24upLXJi1Z7geLHgWPGbxQKfzZTu8mPVrP77k7BCUXAktn0I4LCH0VN1323fM0fVLKXwnPkKsf7Lb6fI02T91vIyxSzNj41caAGwac5eEPjKqD04g8vsNstPlySbngmrhOa7su9Qrwcz88CmSWdyXJI/KbuArhq9FZzt2UztpefGSVRHX1XhsBwr/a5Oi5cE9shqv1VGNIYJNox9gySzCOJYijnJ8mUqoBGe0o40c7OT1gEqjB7P6/VnhGpJmDPkWXfUIKiQidGYFqu4V4tdAgkXwju1T6H5MHhsh9SnevlxbpNhRko5mKEqf00z87PjQcCIflj8TUbD4VDpjVck8SBx+j5C4EFrvrlGtk2c4kqbC+CP1CotoofPIWPlZEoTjRdnahiM8bCKVtTd2RJdM8VOpQjWZ271BdXN2ZCkV7G89OjHxXJCxJL9ntdd6vOys780G1+/9oN5jOb127TfQ4XwwIzTpQywR28OEygoYylyW7GQ6axzVoDhSXTqmkwt+Uwb0PtE0tdkm7zw7fVm04/cq4oCLfuiuLh/BR8PS+iGviexxh0Ne9Mtsl95/7z8tyyDZfZRi9ktX00PRqN9H8Mfiop+4MfqNnuo1bx5uknZKPcLgZK7UIUmW+9uj6ONx3++PYvMTv9kf0EAAA="
  - id: r-tipo-division
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿De qué tipo es el resultado de `8 / 2` en Python 3?
    options:
      - |
        int
      - |
        float
      - |
        str
      - |
        bool
    answers: ["sha256:cbf1615c2abd373112b8ccbce90edafd17d1343eebb7782eeec54ec68ab62cd1"]
  - id: r-modulo-negativo
    tier: 2
    review: true
    prompt: |
      ¿Qué escribe `print(-10 % 3)`?
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: r-indentacion
    tier: 1
    type: opcion
    review: true
    prompt: |
      En Python, ¿qué marca qué instrucciones pertenecen a un bloque (`if`, `for`, `while`)?
    options:
      - |
        Las llaves
      - |
        La palabra end
      - |
        La sangría (indentación)
      - |
        El punto y coma
    answers: ["sha256:0074193976643dba6fa3eb4f4a383c75828508ed824511c8286abeac48648fd2"]
  - id: r-range-5
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos números genera `range(2, 17, 3)`?
    answers: ["sha256:cd857d4168a2c04a3a9a7acd4479df12a9aef0e591310af910f01c1f14ff23c9","sha256:dd900591f5172885949ae5f00dcfb2e3987177e3543de7d179da611386c6c1d6","sha256:52cd7c4d8b4e71a9c7fbfa1fdfd1a23888da215815227447b9ca8df91697560a"]
  - id: r-input-tipo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿De qué tipo es siempre el valor que devuelve `input()`?
    options:
      - |
        str
      - |
        int
      - |
        float
      - |
        Depende de lo que escriba el usuario
    answers: ["sha256:4c149d972c3320dca71eaab3071c640cf755ea7a6c4975026db3fabdf9ea13e2"]
  - id: r-cadenas-inmutables
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué ocurre al ejecutar `s = "hola"` y después `s[0] = "H"`?
    options:
      - |
        Cambia la primera letra
      - |
        Devuelve una cadena nueva
      - |
        No hace nada
      - |
        Da un error (TypeError): las cadenas no se pueden modificar
    answers: ["sha256:70d58cccbccd607c23f06868e76e343e7b4b04926267affcb4e7ee303d6be0b6"]
  - id: r-while-infinito
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué hace `n = 10` seguido de `while n > 0: print(n)`?
    options:
      - |
        Termina enseguida
      - |
        No termina nunca, porque n no cambia
      - |
        Da un error de sintaxis
      - |
        Escribe 10
    answers: ["sha256:8caef1ac916518be7a41703022e1322f666e7958c68196a7b31dc3234ca1a9f4"]
---

# Python I: el intérprete, valores y tipos, variables, operadores, cadenas, entrada y salida, condicionales y bucles

Python es uno de los lenguajes más usados del mundo: en ciencia de datos, inteligencia artificial, automatización, ciberseguridad, web y enseñanza. Su
sintaxis es clara y se parece al pseudocódigo de [[prog-pensamiento-computacional]], así que permite concentrarse en las ideas: guardar datos, tomar
decisiones y repetir. Este nodo es la primera mitad del lenguaje: valores, tipos, variables, operadores, texto, entrada y salida, condicionales y bucles.
Con eso ya se pueden escribir programas útiles.

## Objetivos

Al terminar sabrás:

1. Ejecutar código en el intérprete interactivo y en archivos `.py`.
2. Distinguir los tipos básicos (`int`, `float`, `str`, `bool`), convertir entre ellos y usar variables.
3. Evaluar expresiones con los operadores aritméticos, de comparación y lógicos, respetando la precedencia.
4. Manejar cadenas: índices, rebanadas, métodos y formato; leer datos con `input` y escribirlos con `print`.
5. Escribir condicionales (`if`/`elif`/`else`) y bucles (`while`, `for` con `range`, `break`, `continue`), y seguir su ejecución con una traza.

## Qué debes dominar antes

[[prog-pensamiento-computacional]] (algoritmos, secuencia, selección e iteración en pseudocódigo) y la aritmética de [[mat-divisibilidad]] (cociente y resto).

> [!question] Test de entrada
> 1. Cociente y resto de dividir $29$ entre $6$.
> 2. En pseudocódigo, ¿cuántas veces se repite «mientras $i < 5$: $i \leftarrow i + 2$» empezando con $i = 0$?
> 3. ¿Es verdadera la expresión «$3 > 2$ y $1 > 4$»?
>
> Respuestas: $4$ y $5$; tres veces ($0$, $2$, $4$); no.

## 1. Para qué sirve

- **Automatizar**: renombrar archivos, procesar hojas de cálculo, descargar datos ([[prog-bash-scripting]] para la terminal).
- **Ciencia de datos e IA**: casi todas las bibliotecas de aprendizaje automático se usan desde Python ([[ia-python-datos]]).
- **Ciberseguridad**: scripts de análisis, herramientas de auditoría y CTF ([[sec-fundamentos]]).
- **Base de todo lo demás**: la segunda parte, el tema `prog-python-funciones-colecciones`, añade funciones, colecciones y archivos.

## 2. Primeros pasos

> [!practico]
> Abre una terminal y escribe `python` (en Windows, `py`). Aparece `>>>`: es el intérprete interactivo, que evalúa cada línea al momento. Escribe `2 + 3` y pulsa
> Intro: responde `5`. Es la mejor forma de probar cualquier duda: en vez de preguntarte qué hará una expresión, escríbela y mira.

- **Modo interactivo** (`>>>`) para probar; **scripts** (archivos `.py` que se ejecutan con `python programa.py`) para programas completos.
- `print(...)` escribe en pantalla los valores que recibe, separados por un espacio y terminados en salto de línea (`sep` y `end` lo cambian).
- **Comentarios**: todo lo que sigue a `#` en una línea se ignora; sirven para explicar el **porqué**, no el qué.
- Los **errores** se leen desde abajo: la última línea dice el tipo (`SyntaxError`, `NameError`, `TypeError`…) y la de encima, dónde ocurrió.

## 3. Valores, tipos y variables

- **Tipos básicos**: enteros `int` (sin límite de tamaño: `2 ** 100` es exacto), reales `float` (con decimales y precisión limitada: `0.1 + 0.2` da `0.30000000000000004`), cadenas `str` (`"hola"` o `'hola'`) y
  booleanos `bool` (`True`, `False`). `type(x)` dice el tipo de un valor.
- **Variables**: `edad = 17` crea un nombre que apunta al valor; se puede reasignar (`edad = edad + 1`, o `edad += 1`). Los nombres distinguen mayúsculas y siguen el estilo `minusculas_con_guiones`
  (PEP 8). Python es de **tipado dinámico**: el tipo va con el valor, no con el nombre.
- **Conversiones**: `int("42")` da `42`; `int(3.9)` da `3` (trunca hacia cero); `float("2.5")`, `str(7)`, `bool(0)` (`False`). Convertir un texto que no es un número (`int("3.5")`) produce `ValueError`.

## 4. Operadores y expresiones

| operador | significado | ejemplo |
| --- | --- | --- |
| `+ - *` | suma, resta, producto | `7 * 3` → `21` |
| `/` | división real (siempre `float`) | `7 / 2` → `3.5` |
| `//` | división entera (redondea hacia abajo) | `17 // 5` → `3`; `-7 // 2` → `-4` |
| `%` | resto (con el signo del divisor) | `17 % 5` → `2` |
| `**` | potencia | `2 ** 10` → `1024` |

- **Precedencia**: primero `**` (que asocia por la derecha), después `*`, `/`, `//`, `%`, después `+` y `-`; ante la duda, paréntesis. Siempre se cumple `a == (a // b) * b + a % b`.
- **Comparaciones**: `==`, `!=`, `<`, `<=`, `>`, `>=`; se pueden **encadenar**: `0 <= x < 10` equivale a `0 <= x and x < 10`. No confundas `=` (asignar) con `==` (comparar).
- **Lógicos**: `not`, `and`, `or` (en ese orden de prioridad). Son de **cortocircuito**: en `a and b`, si `a` es falso, `b` ni se evalúa.

## 5. Cadenas de texto

> [!practico]
> Una cadena es una fila de caracteres numerados desde $0$. En `"Exodus"`, `s[0]` es `"E"` y `s[-1]` (contando desde el final) es `"s"`. Una rebanada `s[1:4]` toma desde la posición $1$
> hasta la $4$ **sin incluirla**: `"xod"`. Las cadenas no se pueden modificar: los métodos devuelven cadenas nuevas.

- **Índices** `s[i]` (desde $0$; negativos desde el final) y **rebanadas** `s[a:b]`, `s[a:]`, `s[:b]`, `s[::-1]` (al revés). `len(s)` da la longitud.
- **Operaciones**: concatenar (`+`), repetir (`*`), pertenencia (`"a" in s`). **Métodos**: `upper`, `lower`, `strip`, `split`, `replace`, `startswith`, `find`, `count`.
- **Inmutables**: `s[0] = "H"` da `TypeError`; se crea otra cadena (`"H" + s[1:]`).
- **Formato** con f-strings: `f"Tienes {edad} años y {saldo:.2f} euros"`.

## 6. Entrada y salida

`input("mensaje")` muestra el mensaje, espera a que el usuario escriba una línea y la devuelve **siempre como `str`**; para operar hay que convertirla (`int(input())`). `print` escribe; con varios argumentos
los separa con espacios. Un esquema típico: leer, convertir, calcular, escribir.

## 7. Condicionales

```python
if temperatura > 30:
    print("calor")
elif temperatura > 15:
    print("templado")
else:
    print("frío")
```

Se evalúan las condiciones **en orden** y se ejecuta solo el primer bloque cuya condición sea verdadera (o el `else`). Los bloques se marcan con **sangría** (cuatro espacios), no con llaves: la
sangría forma parte de la sintaxis. Los `if` se pueden anidar, pero suele ser más claro encadenar `elif` o combinar condiciones con `and` y `or`.

## 8. Bucles

> [!practico]
> Para seguir un bucle a mano, haz una **traza**: una tabla con una columna por variable y una fila por vuelta. Es lento al principio, pero es la forma más segura de
> entender qué hace un programa y de encontrar errores. Prueba con la sucesión de Collatz empezando en $6$: $6, 3, 10, 5, 16, 8, 4, 2, 1$: ocho pasos.

- **`while condición:`** repite mientras la condición sea verdadera; algo dentro del bucle debe acercarla a ser falsa, o el bucle no termina nunca. Útil cuando no se sabe cuántas vueltas habrá.
- **`for x in secuencia:`** recorre una secuencia (una cadena, una lista, un `range`). `range(b)` da $0, 1, \dots, b - 1$; `range(a, b)` de $a$ a $b - 1$; `range(a, b, s)` con paso $s$ (también negativo). La suma de
  $1$ a $100$, `sum(range(1, 101))`, da $5\,050$.
- **`break`** sale del bucle; **`continue`** salta a la vuelta siguiente; un `else` tras un bucle se ejecuta si no se salió con `break`.
- **Patrones**: contador (`c += 1`), acumulador (`total += x`), máximo o mínimo hasta el momento, búsqueda con `break`, bucles anidados para recorrer pares.

> [!formal] Con rigor: invariantes y terminación
> Para estar seguros de que un bucle es correcto se buscan dos cosas ([[prog-algoritmos]]). Un **invariante**: una propiedad que es cierta antes de empezar y que cada vuelta conserva (en una suma,
> «`total` es la suma de los elementos ya recorridos»); al salir, el invariante junto con la condición de salida da el resultado. Y una **función de cota**: una cantidad entera, no negativa, que
> disminuye en cada vuelta (en `while i < n: i += 1`, la cantidad $n - i$); como no puede bajar indefinidamente, el bucle termina. Para la sucesión de Collatz nadie ha encontrado tal cota: que termine
> para todo $n$ es un problema abierto. $\blacksquare$

## 9. Errores típicos

- Olvidar convertir el resultado de `input` antes de operar (`"3" + 4` da `TypeError`; `"3" * 4` da `"3333"`).
- Confundir `/` y `//`, o esperar que `-7 // 2` dé `-3`.
- Errores de sangría (mezclar espacios y tabuladores, o sangrar de menos).
- Bucles infinitos por no actualizar la variable de la condición.
- Errores «por uno» con `range` (el final no se incluye) y con los índices (el primero es $0$).

## 10. Resumen

- Intérprete y scripts; `print`; comentarios; leer los errores.
- Tipos `int`, `float`, `str`, `bool`; variables; conversiones.
- Operadores, precedencia, `//` y `%` con suelo, comparaciones encadenadas, lógica con cortocircuito.
- Cadenas: índices, rebanadas, métodos, inmutabilidad, f-strings; `input` devuelve texto.
- `if`/`elif`/`else`; `while`, `for` y `range`, `break`, `continue`; trazas, invariantes y terminación.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué devuelven `7 / 2`, `7 // 2`, `-7 // 2` y `7 % 2`.
2. Cómo funcionan los índices negativos y las rebanadas.
3. Por qué hay que convertir lo que devuelve `input`.
4. Qué números genera `range(a, b, s)`.
5. La diferencia entre `break` y `continue`, y cómo se hace una traza.

## Siguiente

el tema `prog-python-funciones-colecciones` (funciones, listas, diccionarios, conjuntos y archivos).
