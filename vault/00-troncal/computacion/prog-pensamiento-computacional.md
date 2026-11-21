---
id: prog-pensamiento-computacional
title: "Pensamiento computacional: algoritmos, bits y trazas"
area: bajo-nivel
trunk_level: 1
prerequisites: [mat-numeros-naturales, mat-algebra-basica, mat-funciones-basicas]
academic_sources:
  - "Abelson, H.; Sussman, G. J.; Sussman, J. Structure and Interpretation of Computer Programs, 2ª ed. MIT Press, 1996."
  - "Knuth, D. E. The Art of Computer Programming, vol. 1: Fundamental Algorithms, 3ª ed. Addison-Wesley, 1997."
  - "Cormen, T. H.; Leiserson, C. E.; Rivest, R. L.; Stein, C. Introduction to Algorithms, 4ª ed. MIT Press, 2022, cap. 1 (el papel de los algoritmos) y cap. 2 (2.1 ordenación por inserción, 2.2 análisis de algoritmos)."
  - "Wing, J. M. Computational Thinking. Communications of the ACM, 49(3), 33-35, 2006."
  - "Euclides. Elementos, libro VII, proposiciones 1 y 2 (algoritmo de Euclides). Edición en línea de D. E. Joyce, Clark University."
  - "Pólya, G. How to Solve It. Princeton University Press, 1945."
hints:
  - "Concepto: para predecir qué hace un programa, hazle una traza: una tabla con una fila por paso y una columna por variable. No adivines; ejecuta a mano los primeros pasos, busca el patrón y comprueba con una ejecución real. Para contar operaciones, cuenta cuántas veces se ejecuta la línea más interna."
  - "Herramienta: instala Python 3 (python.org) y ejecuta tu código con `python archivo.py`, o escribe `python` para abrir el intérprete interactivo. Para contar o comprobar sin riesgo, usa `print` dentro del bucle (solo las primeras iteraciones) y `assert` para fijar lo que debe cumplirse."
  - "Documentación oficial: docs.python.org/3/tutorial/introduction.html y docs.python.org/3/tutorial/controlflow.html (for, while, if); docs.python.org/3/library/functions.html#bin (bin) y la función incorporada `sum`."
exercises:
  - id: intercambio
    tier: 1
    prompt: |
      Sigue paso a paso este programa y da el valor **final** de las variables.

      {{codigo}}

      Respuesta en la forma «x;y» (primero el valor de x y luego el de y).
    variants:
      - values: {"codigo":"~~~python\nx = 6\ny = 11\nx = x + y\ny = x - y\nx = x - y\n~~~"}
        answers: ["sha256:65b3ac3c4617dc62ae9b4b187667e619f8b7d52892d1ecad09a8bc2db834a2f9"]
      - values: {"codigo":"~~~python\nx = 9\ny = 4\nx = x + y\ny = x - y\nx = x - y\n~~~"}
        answers: ["sha256:6fb73a3356b452f5575eeb852cf8242645f055592fa9ebbfb747165bdec5de1e"]
      - values: {"codigo":"~~~python\nx = -2\ny = 7\nx = x + y\ny = x - y\nx = x - y\n~~~"}
        answers: ["sha256:c9d5749589ba46bed1f0c936eb04ae24776ac2c553bb13471cf641c0d093acfd"]
      - values: {"codigo":"~~~python\nx = 12\ny = 12\nx = x + y\ny = x - y\nx = x - y\n~~~"}
        answers: ["sha256:d50c6767d66a5310a0299d0b952e2afcfef88cbdfd70f72fa8b8192f50008c8c"]
      - values: {"codigo":"~~~python\nx = 100\ny = -1\nx = x + y\ny = x - y\nx = x - y\n~~~"}
        answers: ["sha256:e5849b3f24ae2165c07d2737c3e908c9b0b22c67f662ce57671e086f296bbf88"]
      - values: {"codigo":"~~~python\nx = 6\ny = 15\nx = x + y\ny = x - y\nx = x - y\n~~~"}
        answers: ["sha256:63f4d070a27eb4d93df911d956b1cb09940145f17f29f1b8b747cd0e5e7668d8"]
  - id: suma-cuadrados
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Qué número imprime este programa?

      {{codigo}}
    variants:
      - values: {"codigo":"~~~python\ns = 0\nfor i in range(1, 13):\n    s += i * i\nprint(s)\n~~~"}
        answers: ["sha256:515a3bccf44db548491153aac71531c6369e3b0c0dfa12ccf93463be006f73e1","sha256:fb666eed51dfee35702013a2a01229b0052438e5160576e3b634a9c35f88e67b","sha256:42b1c88ce92ff788bf3175e49eaa1fe7600431e16c610f56340bf3642c1549f8"]
      - values: {"codigo":"~~~python\ns = 0\nfor i in range(1, 21):\n    s += i * i\nprint(s)\n~~~"}
        answers: ["sha256:8e50221994da6842b25b93c10f46743f987ce2d3fe019fee6f3a52951beb9046","sha256:7baa56acd1d98bc367e0c0bcb3f068c731286d60313b37f276af03605dc5e25f","sha256:9da7e660e27117593ddbe92e3941be08b253dca5e09a7674757065e5dc7ad2e5"]
      - values: {"codigo":"~~~python\ns = 0\nfor i in range(5, 16):\n    s += i * i\nprint(s)\n~~~"}
        answers: ["sha256:2bdc7f376aefc2640c30cfa6b82d1db9f5367c503ee63826fdfb2ca0d71c18f2","sha256:04bdf12e2f19c1cd4a1e7df593a46457ef4aeeed9b67a8e5e120f1d9ccc3bd5c","sha256:3c3c8a9a6ca283bb0e75a1218b8573d6124870660697e320971bd4b3a4a6adc1"]
      - values: {"codigo":"~~~python\ns = 0\nfor i in range(1, 101):\n    s += i * i\nprint(s)\n~~~"}
        answers: ["sha256:14390042b7317e612a0eb4b50f7befa73dfea52a5fbb56840ad4fa43c9ca4f57","sha256:e58aabe3a14f776b307d99b65930a295d0ee631158bd2def26c533760cf14149","sha256:bca7fe9b874fe5b8cd947c3fc18054928552069e5b0f229da7275595086523c4"]
      - values: {"codigo":"~~~python\ns = 0\nfor i in range(10, 31):\n    s += i * i\nprint(s)\n~~~"}
        answers: ["sha256:6e982c187255a35bc96f1a5d13bebc80c77d4a9a673f8362da5b36c20af76118","sha256:32bece0980d763eeeb41fe590888ce7b04520314af93c19cef7e55effe68c534","sha256:35596744bff9613148b4c4e141f13b6f7d8255645eeeef22c120788aff555afd"]
      - values: {"codigo":"~~~python\ns = 0\nfor i in range(1, 8):\n    s += i * i\nprint(s)\n~~~"}
        answers: ["sha256:93c71a593c17647f870a7bf695e291cdf170fecc1e7f8aa79cc8d51bb8ab6626","sha256:79f5540c872ce316b2894f7116eb7ea60bdfb39d8aba19c4610957319df91b6f","sha256:dc97a421500bf9bf48e9dbcc1ffe76d50d42c57210685e7d08be5190e5d2e682"]
  - id: unos-en-binario
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos **unos** tiene el número ${{n}}$ escrito en binario?
    variants:
      - values: {"n":"2026"}
        answers: ["sha256:4329914bb330f4adb82a36adbcae1baab3ffb39303fb64815a80d1ab2ba4c085","sha256:a4a3151f4826eab563f4e52a803540bb6569a09b90c2b9b8c67b57fd7870d8c2","sha256:7ae9e11957e00cafbf5c021ffadc749647f08d90a8b43977c953fd0e8e1c500b"]
      - values: {"n":"1000"}
        answers: ["sha256:f2dac9a47e9a63d83696a7dcc39ae787425d8ee128dd0703683088a43d551ac9","sha256:4dd918685996292ef05f566eebee38b382ffe242aee4cfe1b8a0c58e57eef5e6","sha256:6ab8d8cd47978107b0c8fce3dbb3ae0c31eff82b9f971d8d0b2528082a765605"]
      - values: {"n":"255"}
        answers: ["sha256:8ebcf753dd639dcfc146eb70b4e35bfca897ec76c085690171816118a0692c3d","sha256:364a58a7a4c07e4fcafe880c110e47cafc1c219cfb403bd9a4402edea8ec210c","sha256:82b6849eeff51a30e9d8f50d19ee1b5c9e84dd6edfa9ccec9eaede038c572343"]
      - values: {"n":"4096"}
        answers: ["sha256:6bb2ecf594e34f658eaa27b1ae91dd5b4b89245c5c6560800974157577bb4d2e","sha256:44af258e157edfbc81fd122d03fc887205ffac5617bda3cce88b2d70d6df853e","sha256:62a0fb769bd0ded60da6e26073ab9536723c34c083d338c7701c186f25ea5cf7"]
      - values: {"n":"1023"}
        answers: ["sha256:bdb616e61a2efd9701f64c45778390a58ba9f4683cacf9cc0e560050ebcb0d0e","sha256:657a257fca91669f6d12e5b540af599d01f34e25631a3c42ebe5df8ac681939f","sha256:3870350547149f2a03c4877b789fe3cdbef5621c824d5b558c8137ffa1ce9382"]
      - values: {"n":"77\\,777"}
        answers: ["sha256:614e3172df9b7ef30416ef050f3ebe8f0f0f602431938e2fe551db4f34deb516","sha256:382a96f7e055529c6f6cd4dea703ec192f6c147a78c18955eeb2a42435fc1925","sha256:2f277cc5553cf7ee27720a40ed552902eee97bd6c272db638e2ca3208c101c6a"]
  - id: adivinar-1000
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se piensa un número entre $1$ y ${{n}}$ y tú lo adivinas con preguntas de sí o no («¿es menor o igual que $x$?»). Con la mejor
      estrategia, ¿cuántas preguntas bastan **en el peor caso**?
    variants:
      - values: {"n":"5000"}
        answers: ["sha256:bb5e8f073fc7959746cdc27c9a72e1b34a189ecc30abe869c825dc0246f16641","sha256:34273f9cd471d724cc5447770299bbcd4062f538f78387a8708db4306ce82744","sha256:6875edf12722e6a1352639375ff363e219be3d05ddfe75ea1a64ce7c857ba132"]
      - values: {"n":"100"}
        answers: ["sha256:3e9c91c047133259824d398921afd24e6b7f583b3db7ca570f39be52777b00b3","sha256:b08da093cd1b215b6a6a49a07b6f9af03dba61f09112f61258d32784ca5bb95b","sha256:1379714ec5c15d548b1decd6d14fcacc94ee5af70b04b1b85485e06cea86c311"]
      - values: {"n":"2000"}
        answers: ["sha256:46ee19ef50ef56a8ff6c59468a73c76cf4f18856bce9d4afe1d5d016c9726e09","sha256:c3c76561bb6e304d85e55911e27a4a17987141021ad1fa65a65100f31c9860fd","sha256:fd985b6545f5cda48a9b5fa84daa7ea6667e4c4157a12af4f4f0e6f479b71e85"]
      - values: {"n":"10"}
        answers: ["sha256:62a52c8d3cc3beb30d5cad43b09b80f12d7e62c39f5aae130425df6f09fbca90","sha256:3065e54c08f881a7217d3db30434efe8063e90317abe57add33b34d48c9cbfa4","sha256:3929d6212dbe5ad744b222b1ddb50005927a091c47ff3d849ca9f86b3d1f8627"]
      - values: {"n":"1\\,000\\,000"}
        answers: ["sha256:17e1a4dc59a4d67fed418ccfebcb8387f47c862deffdc2c9908fec66c5166a3e","sha256:cd1db57885eaff6835e763216ed1fd79d2509e000dc3b6ffeba97a69ba126dcd","sha256:b214a72c04e0a05d488c96836060a9fa66065231c6ba35246697020101eccc5b"]
      - values: {"n":"500"}
        answers: ["sha256:8109eba720b822bb9fc68dfd1168d193e090a1184d53ecff8ed5c09c8ec01ce7","sha256:34a2f2df64a47f58de39b4d2b792c499b79e881804f8d77332279bae61cf974b","sha256:e5633cd7895ed33a25ebd0009efa288af65a50424fa9d7477c3dadab03e5b860"]
  - id: collatz-27
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se parte de $n = {{n}}$ y se repite: si $n$ es par se divide entre $2$; si es impar se calcula $3n + 1$. ¿Cuántos pasos hacen falta
      para llegar a $1$?
    variants:
      - values: {"n":31}
        answers: ["sha256:fdc521daafe04928cd2aad1e6538f92ead379c46ab7af748c2b52d873921e0ba","sha256:4a86a6ea09dea65edd5d81694ae9f0ee2798eec4cffba6c75b7e6fe14255b16a","sha256:e757b01d6a349d22843d8a8e8203d6dde43555af72db54445f27390e07365aff"]
      - values: {"n":7}
        answers: ["sha256:b59b9860b6d0f8ae0ba1c3bba3033e077675a2ce5c08557ed845a47b13f4e458","sha256:bebfea67c1dc6759257b4be0bd3fe103cd77b9deba63da2278bf9e741e34e6a4","sha256:8d8a39128eb2b51b2b02eb32d22e2fbcaafccadd8a2322ea0fd6f01df641e6af"]
      - values: {"n":97}
        answers: ["sha256:971995fcace1f321942919422dd6a0dfd45c5d2ac0b6f06829140b201fa26556","sha256:6d236f3aea0d14a37b748be0c4e0ae84096594116bf99c6d1b957ac74378c7d3","sha256:e8a3aaa7537e72f72c18bcf280b1af3644e1d3fff2c2d77a9fdd40b7d844e2a9"]
      - values: {"n":15}
        answers: ["sha256:5b0e265dbab39de2bba8f0676fc08f5d11aad69dbf486ca4dfae0e55e2aa6eb6","sha256:db67a5f5df1b4c11c8833d8c33dfa389a96776b482009a9fad821347e772da29","sha256:a22b6ce653cb4c1c54d61c1f84dd6294767baa4306ed57dc98ea0d66693f07d8"]
      - values: {"n":41}
        answers: ["sha256:29361a185368c18dfdd75dcdaacba48ee2f258091c9fe8844ee799490472f161","sha256:3c01851300f78f725a9c8ef43b21024c2116a70546db42a962c2c8df5c0e9d12","sha256:a9ebda7ec8da4c9d88c61cb9186574c7c9e3d4b7b05480b610f739a92787b555"]
      - values: {"n":9}
        answers: ["sha256:25473897d4469aec0716fceddd6dc34cd8a17560605faf2bcbe97f362e5a8cd3","sha256:d35ac4b84e70e35a3e9dd0265711ced54637f1a4b217bbe30a183cd4c247600b","sha256:1abc84f5e1bd537989999da97095d8cb36f2d151a93bb72133aca5523c96a592"]
  - id: fizzbuzz-numeros
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un programa recorre $1, 2, \ldots, {{N}}$ e imprime «Fizz» si el número es múltiplo de ${{a}}$, «Buzz» si lo es de ${{b}}$ y «FizzBuzz»
      si lo es de ambos; en cualquier otro caso imprime el propio número. ¿Cuántas veces imprime un **número**?
    variants:
      - values: {"N":1000,"a":3,"b":5}
        answers: ["sha256:81bb27c4d66b7413559e91a2b2b38f85767fab086eb360c7d6edf2ba04062959","sha256:1a264159a8ea662885247d2be27a08d374f3280973a81608af75bec8138f442f","sha256:f0db0e5adc0f5ce2ebfbf65b573dba79bdb2bb61ff3bc7325e1f18a7aa5a33bc"]
      - values: {"N":100,"a":3,"b":5}
        answers: ["sha256:42b3d12c90675ccc74dc53e0c9c17d0a524d4ab9425aa6d660810396b723a4af","sha256:d5ddd881b0a17ee2b834a8c728f1f22f7e8b493f7746f172f53566ba93a2ec63","sha256:d993166430108ac064b03e90b22b07413a66fcde42b0a344a3c9b7beb564a6f0"]
      - values: {"N":500,"a":3,"b":7}
        answers: ["sha256:503c4e456d2061521cddee46a09a4fffa0a49df6c8b699f5e44888df816ca137","sha256:35fcf7baaed0a8cd0301bc49e92d0cbb2b33d8be12fe82b02477653f5a0abdad","sha256:4adfde0e087435841b2e504663519d3bb1604a7bd0889008f7632f09ad89a9a3"]
      - values: {"N":1000,"a":4,"b":6}
        answers: ["sha256:45cc7119333c2d6296ad71d49ab5575811eb8c114210de89b39dc460fd5a150c","sha256:7d1cb64b966a891012d5de42cf70ccbf7e5c2be7ae93210896a4c52fd2858fd5","sha256:2e4613f336ad0143587f82bf155cbce55d2cf8cf5228db56c732f048dff334cc"]
      - values: {"N":300,"a":2,"b":5}
        answers: ["sha256:67f58e62dc6cb8e85c177b41477acbaf2160fd6558c5c663962650fd611dc4a7","sha256:f66ed1b92df737a7b3942a75fec4229c149078e9acabe11dececd6f72372f73d","sha256:318ac8df88dd0d41a889a0fe3dddfbbf422e77f1cf9cd08a09a54a30eb983ecb"]
      - values: {"N":2000,"a":3,"b":5}
        answers: ["sha256:331ca4e04bc80bf348191ad73f9fdcdf5a89695dc952d4d8dd80bd799e233562","sha256:97c6be300757932fe6ef2d6086db6f12a75b6e3d60ef6e569308fb5cc2c72a8a","sha256:5e7cf17e2687bf15fae40e21918a88f4d1575a2948c7defdb70039f05b88bf4f"]
  - id: bucles-anidados
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Qué imprime este programa?

      {{codigo}}
    variants:
      - values: {"codigo":"~~~python\nc = 0\nfor i in range(1, 11):\n    for j in range(i, 11):\n        c += 1\nprint(c)\n~~~"}
        answers: ["sha256:64f7ecc369330787ab14bc5a8ced871773e3442d922246e8037d2b49d2d2e768","sha256:862836b41d8fae6840de3018057c4bbe9f6d5bb10e5c2dc3974f641c1a3bca7e","sha256:9327d0f239eb43b0ba9fe1fc1fb29b34a363c0ab4bcf872508ff922eefd9f1f0"]
      - values: {"codigo":"~~~python\nc = 0\nfor i in range(1, 21):\n    for j in range(i, 21):\n        c += 1\nprint(c)\n~~~"}
        answers: ["sha256:f075fd246602caf97e6fba507a778b8e8e45e558dc1286b598d8e1f502161cd2","sha256:a1344532c9ad8b8e0899a9c1941633bc8e0b503867e1b3714630d1c756a5b370","sha256:5b90a20fd724afe5402a6a84ca47ebba3ca8fbf6e8ed817b2e48a3f3d731ce2a"]
      - values: {"codigo":"~~~python\nc = 0\nfor i in range(0, 6):\n    for j in range(i, 6):\n        c += 1\nprint(c)\n~~~"}
        answers: ["sha256:83286effe4485683ecd315b3b43a15f7f383b8bc24d45bb55f1dcb83508f83ac","sha256:a3bc318dc2e330d91336533b983fcd310ce4c09adf7703f5cecefe78838b91d0","sha256:6d626b9769566cfbb947c5d6747d66b8d056ee7726ba291990fab2a5ed81c3ec"]
      - values: {"codigo":"~~~python\nc = 0\nfor i in range(1, 81):\n    for j in range(i, 81):\n        c += 1\nprint(c)\n~~~"}
        answers: ["sha256:d6782057a9fc2df4cde60acbff4e36685a6ae360507088fa8f816653e3df5e8f","sha256:fdd94427df6adaac555f065edc25fc3759469a3235fa89c0df004fca2988a0dd","sha256:0fb059bb1d8e95f75244118ffe568a7c45b7753a71cb9759a5fda7c83ebd78d1"]
      - values: {"codigo":"~~~python\nc = 0\nfor i in range(3, 13):\n    for j in range(i, 13):\n        c += 1\nprint(c)\n~~~"}
        answers: ["sha256:301fa64b3e5e96e6c8608ea19faf50ef59718b71cd896ecd69a37b389b709f1d","sha256:087372fc0075acb9ffa7d79c12d3c637ae4225c0b20d65e692d531826c59d7d7","sha256:8cb146a46f3a66f60881e2ab1966b6d43471933060f02bfd8cc4138ee6bdf61d"]
      - values: {"codigo":"~~~python\nc = 0\nfor i in range(0, 51):\n    for j in range(i, 51):\n        c += 1\nprint(c)\n~~~"}
        answers: ["sha256:11d9ba91880151b3d8f5a72555216eabef07e15f92e514059b1bd22677801772","sha256:457a76e5e726697382bec7bf0258eb8fec978cf603bac0c292381f2968f7d9e9","sha256:2dd70b7f576d0458fddc98580002061c9c7e9caddcdb46c3a49c58578b81a710"]
  - id: burbuja
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Este programa ordena una lista y cuenta los intercambios que hace. ¿Qué número imprime?

      {{codigo}}
    variants:
      - values: {"codigo":"~~~python\na = [5, 2, 9, 1, 5, 6]\nsw = 0\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\n            sw += 1\nprint(sw)\n~~~"}
        answers: ["sha256:b9a0857e9d22227cd2616fd810cde43313e7c9624aaccc3e55ff05b3900f1e4e","sha256:649fe2937fa86df26075603b8688371f8b2eebf78cea8c4d2f1b3940346f47bc","sha256:81081d33e6cc328b6f8758f4820dfe8d14e98765e985f5403ac91a40759e0b76"]
      - values: {"codigo":"~~~python\na = [3, 1, 2]\nsw = 0\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\n            sw += 1\nprint(sw)\n~~~"}
        answers: ["sha256:256b0507a3bcd25e20c25b2e5020c9e76fc38940edf4464f5a9c57953d40fed3","sha256:bec637596a238654ced398efab9aa38d86b3561d1e5c4f4885daf8e6f968d8df","sha256:dfcc5a2c31915872de12e4b7452536410a8089e00c7c850e1eec547540e268bf"]
      - values: {"codigo":"~~~python\na = [4, 3, 2, 1]\nsw = 0\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\n            sw += 1\nprint(sw)\n~~~"}
        answers: ["sha256:d61cc11d2c451d58e4ecfb6a459d2a01d01d617f3fdaf06c5b61cf0ebd109f0e","sha256:851febeb9e0cd753c7caac8ea3c221f86c39aef277d46753a98eb66996af669d","sha256:1c3eedfa68d199d0dfca1279cfd0c1363fed08570cb4169887a2410c2924c1fb"]
      - values: {"codigo":"~~~python\na = [1, 2, 3, 4, 5]\nsw = 0\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\n            sw += 1\nprint(sw)\n~~~"}
        answers: ["sha256:f17773fb5d3e46d1facc87a9902c9d8b6011fca928c6e2d32d157d334fa4f149","sha256:1855705ffb49bb915466fc9dbf0d7238757a22ca12f66ebc724189cd6d677f51","sha256:98c77c896f5b346dcabba0587c11db0f2cc91e704bf631fba6acb808520066d2"]
      - values: {"codigo":"~~~python\na = [7, 1, 6, 2, 5, 3, 4]\nsw = 0\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\n            sw += 1\nprint(sw)\n~~~"}
        answers: ["sha256:e1c1a9ffd9c85fe7660941678cd66d2ab6c6c10f50cb2b90f3f326147dfbb277","sha256:24f004ed404816e65d85229d249219d68ae4cd1ec4a7010304b0810638de66be","sha256:1e3376ea43c35cb2365ece8d93618122bb77519fdaeae4d2d7267ca416f532ff"]
      - values: {"codigo":"~~~python\na = [2, 9, 4, 7, 1]\nsw = 0\nfor i in range(len(a)):\n    for j in range(len(a) - 1 - i):\n        if a[j] > a[j + 1]:\n            a[j], a[j + 1] = a[j + 1], a[j]\n            sw += 1\nprint(sw)\n~~~"}
        answers: ["sha256:83526da6d0e5c8e20954db5db925ab0815b11acf467b9cf07847ca56912ee84c","sha256:cb07145f8115ca6f8b30198309724d23395fda298176c40142c27d75b1c37085","sha256:0ed9dcbff512c8f7b993aaba1cddfc2ccb1f0b8885a2cbf13b77f93406d1a534"]
  - id: pasos-euclides
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántas iteraciones del bucle hace este programa?

      ~~~python
      a, b, pasos = {{a}}, {{b}}, 0
      while b:
          a, b = b, a % b
          pasos += 1
      print(pasos)
      ~~~
    variants:
      - values: {"a":10946,"b":6765}
        answers: ["sha256:121cb6d6dd3fa9c3e66a052f7322bf7360cc6cf565e62f40c287c34224134b36","sha256:c853c68f2d956277dc872d66c180a32fcbcb80f0aa0854c6c22934de01b7b1e6","sha256:8703b1df9709e83d2be7978a16f41efcbf9afbc72f4358ec508a27c16114572e"]
      - values: {"a":1071,"b":462}
        answers: ["sha256:0625bc2a67997039da0bc717904e5aa95dee1c818be83099b91575d117ce81f5","sha256:44bbf0dbb1aa1fc1b399df37da79d55c20359ee9b0e73d16f07326fdd52e767a","sha256:e681f81aaed5515f38b7f5243a5261054c7891bd5f5f3df25b9da14f255a2a2c"]
      - values: {"a":987,"b":610}
        answers: ["sha256:17b0d362380bef544e529d46546f4797e778816537fd8905d35ce38b98da3076","sha256:56ed5f03d75d0c8dfc1f3a086a96d6678f87e5a9cd18902ccb6828634b3617c0","sha256:8bbf1bc3727ee3bc0274ac212e22569192678c91375ef7def755e9a863b9f490"]
      - values: {"a":1000,"b":37}
        answers: ["sha256:6fbc41c88711e1de74e727b67dc9da8b09bd0c41dc8daf4c011baa966f780e0b","sha256:4dd1fbbc875caa614cad7140f16f6a245a54458ddb13340f2daf10d8a16e4c32","sha256:a99a33276cceafec82b6851d9ab2cd3248e53e3c6704ff9ba68008b7242d34b0"]
      - values: {"a":144,"b":89}
        answers: ["sha256:4982a8d42bb65f85b12e75bfbc059c952c0c6fa56cce41b3a7723bf7d821fd56","sha256:5a28c9a7a3287e2b79176ff7f9d570a6eafae0166737bf495535f03ba234cc4e","sha256:84c77f17a01622318d79feedcfacb86810a0fc7c260e7bf666bdc045e12ee4b3"]
      - values: {"a":2024,"b":506}
        answers: ["sha256:ff8077a7c30ae0ac956663968e37b4425cc051aa1f859653c7ca4ec1bed76f73","sha256:695d1ff57ed80e55671176e5f41be3c603f209d2a95210684a613e06b41700ab","sha256:3c07f6c07161cd6a67cab3f5fe7a62feda7d299d0f52513a0efae622521abfa1"]
  - id: congruencial
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Qué imprime este programa? (Pista de método: ejecútalo, o busca el ciclo que forman los valores.)

      {{codigo}}
    variants:
      - values: {"codigo":"~~~python\nx = 1\nfor _ in range(1000):\n    x = (7 * x + 3) % 101\nprint(x)\n~~~"}
        answers: ["sha256:4065643a25d8bd4f8ca99da29522e67facad96abb59e169274d663e4db89db34","sha256:8efffc5c05e24cd1fceff180c2713380ef5cdcb1f4994fcbaa3327925b696b60","sha256:ce36251e3ea97aab238843436e16a25c6b863e559217745bd16f4f898e8d6fdd"]
      - values: {"codigo":"~~~python\nx = 1\nfor _ in range(100):\n    x = (5 * x + 1) % 64\nprint(x)\n~~~"}
        answers: ["sha256:77f279b6c61a525eda08c29d1d4fd0be2291a411649ae8c5d49e0ce556cc64fe","sha256:9845006ab9e53bf78a8fc0e7a89b0ab88831957b16796d6f2ca9326926606764","sha256:86a2df3c68a428c527707680160708055bf7998198a6c6dcee06ee96d8d95903"]
      - values: {"codigo":"~~~python\nx = 1\nfor _ in range(50):\n    x = (3 * x + 4) % 17\nprint(x)\n~~~"}
        answers: ["sha256:a3c3fdcdcf59125913714604b0365a0c59dd73df20d46f19d7719fde1a4ccc81","sha256:2a2af77d9105cd997bfc4c0229825c5e3fe6773b562970474235a0ac2997c29d","sha256:bbfd52c7012715b2906f9daa0c8a557515553a670b4603367a119d4a7642c1a8"]
      - values: {"codigo":"~~~python\nx = 1\nfor _ in range(365):\n    x = (11 * x + 7) % 97\nprint(x)\n~~~"}
        answers: ["sha256:b95d0d2ead1ad4f1a4d088464579325e2a03f030548ae31db4e98c7887e8e32f","sha256:2d6d875bbff857f78c10b39e3f5a2914e4187c8967a51d6bbac39061eeff1515","sha256:c8334251e6d06222e2f45a7243519d79e9e208fc1a3d277cfc8bd2474772f2ee"]
      - values: {"codigo":"~~~python\nx = 1\nfor _ in range(12):\n    x = (2 * x + 0) % 13\nprint(x)\n~~~"}
        answers: ["sha256:531b7fc39a16a0cfd244e173ad3517876508e80609f3baa426486ee04364a7fa","sha256:bc80c91aef7d7668b7a28592f54278d31f84273b3521e369abb42c51ba6cc330","sha256:dc40b7e0cc8881afd864295f628076380f9ffe5067dd9ccabedb2688483b8999"]
      - values: {"codigo":"~~~python\nx = 1\nfor _ in range(1000):\n    x = (9 * x + 5) % 128\nprint(x)\n~~~"}
        answers: ["sha256:49c61146ab377eafdbf726bab4020997485dd58a7f29a581a310d6a0806927ba","sha256:28625b6cfb3f7d034ee491a12f64985ae58a22d96016fa9820079a3f4bd85d57","sha256:c61749199ea515bc4d202a04d6d507690f59020196b580d054f37da86ef43de7"]
  - id: multiplos-3-o-5
    tier: 3
    type: numero
    sig: 12
    prompt: |
      ¿Cuánto suman todos los números naturales menores que ${{N}}$ que son múltiplos de ${{a}}$ **o** de ${{b}}$?
    variants:
      - values: {"N":"1000","a":3,"b":5}
        answers: ["sha256:2b2499b28f7e932f1aaeea9d3784eb5519b279166a80bda4b01a729112f5dfe7","sha256:8fc31b5d253f6faf3283445e216c589057998b08a7bf8ba7e6e8337f52a1da7a","sha256:91ff431b7d8ef37f0bc36d3fe5de45fd333a08070c057eeff784520357d75af6"]
      - values: {"N":"100","a":3,"b":5}
        answers: ["sha256:0ed7dba52e6479924c1018c85fb4eac4e59ceaa4f15862ab47854740553a62a5","sha256:5c34fed2029a4c984cb620e3a6e27fee07a2e0e1042139ee7e0aac8b18408717","sha256:4dc8ab3c0c8d02b299002bdfae6135f5115fe689b0bed805839e1e25ec748a45"]
      - values: {"N":"500","a":2,"b":7}
        answers: ["sha256:0d714e0b7f6bb701882bbda6f8b5401d8172d13591636b1bc1dbb89e4cdb563a","sha256:4891961968a8ac28f67039c0fcbaeee585424d660ab29bb2c10eac650221fc5e","sha256:5b6eec2219a861f4ecfb3f2565158ff56f41270df62970b0298d424b32b1b643"]
      - values: {"N":"1000","a":4,"b":6}
        answers: ["sha256:4e6be23ea018406ede2eaf26497ce5094950985f2cafaaa6a03550a91dedfb15","sha256:aa90bf20ae8a14e8e24f564c07676d8d6d1117fabc3be4a81d74981fcb0f76bf","sha256:663b65661c998290891ac32340952511fb95102535d15a81b8cbaa707e492038"]
      - values: {"N":"200","a":5,"b":7}
        answers: ["sha256:e6de810dbf5c9b21e8dd1fee67747705000aa0ce5c5ac30e9688c9b26d057ed0","sha256:4ae96371b6874b30efd7f40a357b00ca4f1b971b5cc2046cc4c1ab9aec367fbb","sha256:9f9a60aba142b9324e0b48720521d7378f6eba693f33bda5b4c34e0d589f1e52"]
      - values: {"N":"10\\,000","a":3,"b":5}
        answers: ["sha256:d6322a8d3de537ad34f5a0a6a94eb818b100bcd50ac80ac26aa35fea28d6f9f6","sha256:b41b528749e533833f36bbddfc2697331c8533c5dfc2631f899bb425dc4914fa","sha256:ab7a06e968493bb21e668fb00d00bcd8734ff1f3f83ccb705a14635b001bf398"]
  - id: fibonacci-40
    tier: 3
    prompt: |
      Con $F_0 = 0$, $F_1 = 1$ y $F_n = F_{n-1} + F_{n-2}$, ¿cuánto vale $F_{{{n}}}$? Respuesta: un entero (todas las cifras).
    variants:
      - values: {"n":40}
        answers: ["sha256:10644921fbf8cd16d23d6d1b762f2f564f78a7e4ed7258aa6f23d698797cf49e"]
      - values: {"n":30}
        answers: ["sha256:ee1848f1be80d6501f64bcef1e3b9c4a6aae617e4ca521e27ee9edcb22827337"]
      - values: {"n":50}
        answers: ["sha256:124d5d90a650dbf4964dd44649ff4149f6390b4b8d20fc842acbade38d09791b"]
      - values: {"n":25}
        answers: ["sha256:53a000093408dfa643af1af8b5937c33190c4181308817776e51ef994a232c04"]
      - values: {"n":45}
        answers: ["sha256:ce4b63be639eff9cc156cd7eca1a9297ec9a83fd62b638c9a3936ef2f71abde3"]
      - values: {"n":60}
        answers: ["sha256:198897799fcd5eb94201c7341b591a20cf7f139fc13239f1f1d36b152b8d3a71"]
  - id: busqueda-binaria
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se busca el número ${{obj}}$ en la lista ordenada $1, 2, \ldots, {{N}}$ con búsqueda binaria (se mira siempre el elemento central,
      $\lfloor(lo + hi)/2\rfloor$, y se descarta la mitad que no sirve). ¿Cuántas comparaciones de igualdad se hacen hasta encontrarlo?
    variants:
      - values: {"obj":"777\\,777","N":"1\\,000\\,000"}
        answers: ["sha256:9e835991ecc5c5f36bf21a1b60d664516d6c21823e0887229dcd9bfaceb0d9dc","sha256:a4b7545a9a58d8831b408233b088f22c881a918086d78a3501df3c1a133f6626","sha256:ee07236fe4624b69a1c6f817d470b18c05c4fb1572901b552372b6a3ef522977"]
      - values: {"obj":"500\\,000","N":"1\\,000\\,000"}
        answers: ["sha256:44d444b213fd2bd5de05790efd9eb2abab8a11a0b8540591c361e28a2bc6317f","sha256:15edd4d0bd2dc4200a30216a196dac854335aed220a49fd7c329a11151cca3a2","sha256:23e9cd2c0c64fd44cc1cabd6114c4e0af685ef82077b2872c7c5bb3b1c20429b"]
      - values: {"obj":"1","N":"1\\,000"}
        answers: ["sha256:8ec21d091575c89e1ac6ba4b2e64cc36b8d40d4ba6e1bce63db82e7443687d3a","sha256:d427032a53e5c7ac6582d75976e5b7328da77474a5f4bb953721092e4a6f4b5e","sha256:19de18ebd38a254441ee230c62827359071be1c3d79f5f6e2cfbe25739c72717"]
      - values: {"obj":"999","N":"1\\,000"}
        answers: ["sha256:e7a0de9ceec8e536a0c69268e8d586781375a74e75b892a9ca3828cc324e4e57","sha256:2a5032c02787629cc6813890ee13f310384030514170ca16b2ef89733e9871a5","sha256:25397550678cfb27f92d7019a6d2756ddb73df8ad71e36c2131173a32a724c8a"]
      - values: {"obj":"123\\,456","N":"200\\,000"}
        answers: ["sha256:564c21b7dd116bb00505f382f6c18bf3db68fb8e6bca72c8a2bbd03e0f80a4cb","sha256:684fe05cf6ba61a1b48cc75dbeca01fd936e3919707d5d199ecb1ef96789eed7","sha256:437ab1d090b639755e6171470a6da4373f8a47fe335bd90ff0cf3911d39fcd7a"]
      - values: {"obj":"1","N":"1\\,000\\,000"}
        answers: ["sha256:287648cfce2dbf08f43ea29e59e2a685ca36249eb6088d639de4e8b49d827f6e","sha256:cf75fe2f4e4e72f0ed3438f1d088434c1dcec6784ac0f257a8e32d60d85c9edd","sha256:549fc07eacb6037ac52b0ac6d21414eb1eb2b10a094449307a39517d008f4a49"]
  - id: pares-ordenados
    tier: 3
    type: numero
    sig: 12
    prompt: |
      ¿Cuántos pares $(i, j)$ con $0 \le i < j < {{n}}$ recorre un doble bucle que compara cada elemento con todos los posteriores?
    variants:
      - values: {"n":"2000"}
        answers: ["sha256:53cc03692b4e60e3ab7cd5fa4ed51b6fd77d09d9902b12c2f15f54080bfc58cc","sha256:188d51613a256052a29cd948e0556ae5ffc595cb7c9d3db474e4ec6855cd2745","sha256:2159b7e83ff13f905b67f3beae124f00f311570624e6db4753702e9e1d99a3d5"]
      - values: {"n":"100"}
        answers: ["sha256:41721bec9b9327aa6aae8e877f25e65384e501b651991dfef1d49b008e450122","sha256:5c03279cfd3f12a5b9dfd87fa54870c6031ccce43a037c87ab1393b8341deb89","sha256:753032f03af79399e4918898ca5ac727e3acfc2feaedcde8c3a93e387f109827"]
      - values: {"n":"1000"}
        answers: ["sha256:a4e3b29814b45c138331fe4bdb5e83c8e083492089ae2f3337baa21fb4a2e035","sha256:09bef9390d9e427dc5cc353d5596a1ecdef0172ccd37de187e2070430551020c","sha256:b2368166835b7262ba5389a6c9c667d70492893f9d3466597b061bedfbc89c4e"]
      - values: {"n":"50"}
        answers: ["sha256:452a83df7f11bf3715b9048b871ec7b178842a702ae9375a100ec5305b532e84","sha256:583a91f6c304c7c50a299da05c27f183b618d39117096a8cdbf37ed486e7c121","sha256:44f43fd2feb106076cdfee7fbf2b588a7a5cd6d7c763bdf8bef44f83a0625bbf"]
      - values: {"n":"10\\,000"}
        answers: ["sha256:1a120dbb8c5693df51a0e23018d4471712fec32ddc64a73769d1d4b10a0ef32d","sha256:d28e4ad0c999d3ba391903b14cd99a5d788ae97ee3a74b47fd2a0712e72aaae0","sha256:65df7496b997ad9b8ab94a1ea1eecf29d897b2a88c8c70468650abe709ad6afc"]
      - values: {"n":"365"}
        answers: ["sha256:5104822698b3520dfeede245390795f671446e317d87f84210d293ace2ee694e","sha256:3889f34e3d7b30fe4e2f4a853cbd34155502491c8bd94270506d1654dfff14be","sha256:0958b21eba283819fbc57d813929cd92ed1576cc6d5a4a21311a20ca4ca0acef"]
  - id: r-asignacion
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si `x = 10` y se ejecuta `x = x + 5`, ¿cuánto vale `x`?
    answers: ["sha256:ec94135ed93771a4106ffd3fba7f73639a0241ea53fb05a6eafd841885bc6eb8","sha256:7210a17d9a9d908b5b68a66cdf2414b3244f0bdc682fc89d8d14fd1c170961da","sha256:66b90742cfdded9816dc573132f07deb83998b217dacd42726cd2feb1ffd3ce0"]
  - id: r-range
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas veces se repite el cuerpo de `for i in range(3, 10):`?
    answers: ["sha256:c96d37f41b8cb167db4be37d22382da5d17aa73d7dd7f6a8a3598e02ec9767fe","sha256:423d67f75c72a87c7faffdb0985e5deb337450a716cdfc4af554c8fa56df4dc2","sha256:2ad68e2c7a4841120cddb9d98033c1dd5f66a1e5f52e820fc92472c693a663e0"]
  - id: r-bits
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos valores distintos se pueden representar con $16$ bits?
    answers: ["sha256:1f805d2a61b3cc5b35b75790bcca48175c797ea5f02e6674cd78fcc2f2def602","sha256:decb941bc65c4f8a21290cee29e708c537e842592d32325a4131b957a5d5798e","sha256:22f8a5c3dcacf3bdd54bdc462ca6b5ab501188085d0dea263550de2403261d23"]
  - id: r-bucle-infinito
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué este bucle no termina nunca? `i = 0` y después `while i < 10: print(i)`
    options:
      - |
        Porque la condición es demasiado larga
      - |
        Porque nada dentro del bucle acerca la condición a ser falsa
      - |
        Porque usa `while` en vez de `for`
      - |
        Porque la variable es entera
    answers: ["sha256:fdac1ed812ac6b88a3294f753faa439f10683172ba14ea2f598167a52698bb5b"]
  - id: r-busqueda-millon
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos pasos necesita, como mucho, una búsqueda binaria en una lista ordenada de mil millones de elementos?
    answers: ["sha256:2fceb1fded6be7b2562d24997a4b096f88f18f4c4aa10498cdc1dd634735afde","sha256:f009b88380a02ba0f43c7aa79cdfda46cfe06c66b35e53f5658f279aadf4a4fc","sha256:ace2d5e8a84f195b251a7677d7a892fac7558fff2d1612574b8154fa553f4c52"]
  - id: r-depurar
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es lo **primero** que hay que hacer al depurar un error?
    options:
      - |
        Reproducir el fallo con una entrada concreta y pequeña
      - |
        Reescribir el programa desde cero
      - |
        Añadir más funciones
      - |
        Probar con entradas al azar hasta que funcione
    answers: ["sha256:ef0a1e477204afc794365d1e1b927bfa66158dc7d42a5c636ed8ef72a2d3e9ef"]
---

# Pensamiento computacional: algoritmos, bits y trazas

Programar es **dar instrucciones exactas a una máquina que hace exactamente lo que le dices**. Antes de aprender un lenguaje
conviene aprender a pensar como ella: descomponer un problema en pasos, expresarlos sin ambigüedad, seguirlos a mano y
medir cuánto cuestan. Eso se llama **pensamiento computacional** (Wing, 2006) y es la base de todo lo que viene después, desde un
guion de Python hasta los programas más grandes.

## Objetivos

Al terminar sabrás:

1. Describir un problema como un **algoritmo**: entradas, pasos finitos y no ambiguos, salida.
2. Seguir un programa con una **traza** y predecir su resultado sin ejecutarlo.
3. Usar variables, condiciones y bucles, y reconocer cuándo se termina un bucle.
4. Explicar cómo se representa la información con **bits** y por qué $n$ bits distinguen $2^n$ casos.
5. **Medir** un algoritmo contando pasos, y ver por qué la búsqueda binaria es tan potente.
6. Depurar con método: aislar, reproducir y comprobar.

> [!question] Test de entrada
> 1. Si $x = 4$ y se ejecuta $x = x + 3$, ¿cuánto vale $x$? 2. ¿Cuánto es $2^{10}$? 3. ¿Qué hace el algoritmo «mientras haya
> piezas sin ordenar, coger la menor y ponerla al final de la fila»?
>
> Respuestas: $7$; $1024$; **ordena** las piezas de menor a mayor (es la ordenación por selección).

## 1. Para qué sirve

- **Automatizar** lo repetitivo: renombrar mil archivos, limpiar una hoja de datos, calcular una nómina.
- **Resolver con precisión**: un algoritmo no «más o menos» funciona; o es correcto o no lo es.
- **Entender las máquinas** que te rodean: buscadores, mapas, cifrado, inteligencia artificial.
- **Pensar mejor**: descomponer, buscar patrones, abstraer y comprobar son habilidades que sirven fuera de la informática.

## 2. Qué es un algoritmo

> [!practico]
> Explícale a alguien por teléfono cómo hacer una tortilla sin que pueda verte. Tendrás que ser muy preciso: cuántos huevos,
> cuánto tiempo, qué hacer si se pega. Un ordenador es ese alguien llevado al extremo: no entiende «un poco» ni «hasta que
> esté», solo instrucciones exactas. Una lista de instrucciones así, que siempre termina y siempre da el resultado, es un
> **algoritmo**.


Un **algoritmo** es una secuencia **finita** de pasos **precisos** que, a partir de unos datos de **entrada**, produce una **salida**.
Una receta de cocina es un algoritmo imperfecto (¿cuánto es «un poco de sal»?). Para una máquina, cada paso debe ser inequívoco.

**Ejemplo: el algoritmo de Euclides** para el mayor divisor común de $a$ y $b$ (nodo [[mat-numeros-naturales]]):

1. Mientras $b \neq 0$: sustituye el par $(a, b)$ por $(b,\ a \bmod b)$.
2. El resultado es $a$.

Cumple lo que exigimos: es finito (el resto decrece), preciso y da la respuesta correcta. Euclides lo describió hacia el 300 a. C.:
es uno de los algoritmos **más antiguos que se siguen usando**.

### Las cuatro herramientas del pensamiento computacional

- **Descomposición**: dividir un problema grande en partes pequeñas («ordenar la lista» = «encontrar el menor», «colocarlo», repetir).
- **Reconocimiento de patrones**: ver lo que se repite («cada paso hace lo mismo con un dato menor»).
- **Abstracción**: ignorar los detalles que no importan («no me importa cómo se multiplica, solo que se multiplica»).
- **Diseño del algoritmo**: expresar los pasos de forma exacta.

## 3. Variables, instrucciones y estado

> [!practico]
> Una **variable** es una caja con una etiqueta: `edad`, `precio`, `total`. Puedes mirar lo que hay dentro o cambiarlo por otra
> cosa. La instrucción `total = total + precio` significa «saca lo que hay en `total`, súmale el precio y vuelve a guardarlo
> en `total`»: no es una igualdad de matemáticas, es una **orden**.


Un programa guarda los datos en **variables**: nombres asociados a valores. La instrucción **asignación** escribe un valor:

```python
x = 5          # x vale 5
x = x + 3      # se calcula el lado derecho (5 + 3) y se guarda en x: ahora x vale 8
```

Atención: `=` **no** es la igualdad matemática, es «guarda el resultado de la derecha en la izquierda». La línea `x = x + 3` no es una
ecuación imposible: significa «aumenta `x` en $3$». Se llama **estado** del programa al conjunto de los valores de todas
sus variables en un instante; cada instrucción lo modifica.

**Ejemplo (intercambio de dos variables con una auxiliar):**

```python
a = 7
b = 2
t = a      # t guarda el valor de a
a = b      # a toma el valor de b
b = t      # b toma el valor guardado: 7
```

Sin la variable `t`, la segunda asignación destruiría el valor original de `a`.

## 4. Condiciones y bucles

> [!practico]
> Casi todo programa se construye con dos ideas: **decidir** («si llueve, coge el paraguas; si no, no») y **repetir** («mientras
> queden platos, friega uno»). Lo peligroso de repetir es olvidar lo que hace avanzar: si nunca quitas un plato del montón, no
> terminas nunca de fregar (un **bucle infinito**).


- **Condición** (`if`): ejecuta un bloque solo si algo es cierto.
- **Bucle** (`while`, `for`): repite un bloque.

```python
n = 12
if n % 2 == 0:
    print("par")      # n % 2 es el resto de dividir n entre 2
else:
    print("impar")
```

Un bucle `while` repite **mientras** la condición sea cierta. Tiene tres partes: inicialización, condición y un cambio que
**acerca** el bucle a su final. Si el cambio no acerca, el bucle es **infinito**:

```python
# Suma 1 + 2 + ... + 10
s = 0
i = 1
while i <= 10:
    s = s + i
    i = i + 1     # este cambio garantiza que i llegará a 11 y el bucle terminará
print(s)          # 55
```

El bucle `for i in range(1, 11)` hace lo mismo con la cuenta incorporada. En Python, `range(a, b)` recorre $a, a+1, \dots, b-1$ (el límite superior
**no** se incluye).

### La traza: ejecutar a mano

La técnica más importante para entender y depurar es la **traza**: una tabla con un paso por fila y las variables en columnas.
**Ejemplo resuelto**, el programa anterior con $i \le 4$:

| Paso | `i` | `s` |
|:---:|:---:|:---:|
| inicio | 1 | 0 |
| tras 1.ª vuelta | 2 | 1 |
| tras 2.ª vuelta | 3 | 3 |
| tras 3.ª vuelta | 4 | 6 |
| tras 4.ª vuelta | 5 | 10 |

Si la traza revela un patrón, se puede **comprobar con una fórmula** (aquí $1 + 2 + \cdots + 10 = \frac{10 \cdot 11}{2} = 55$).

**Intercambio sin variable auxiliar.** Un truco con aritmética (válido para enteros): `x = x + y; y = x - y; x = x - y`. Con $x = 8$,
$y = 3$: `x` pasa a $11$; `y` pasa a $11 - 3 = 8$; `x` pasa a $11 - 8 = 3$. Traza completa, y comprobada: se ha intercambiado.

## 5. Los datos son bits

> [!practico]
> Dentro de un ordenador solo hay interruptores encendidos o apagados (`1` o `0`): los **bits**. Con un interruptor se
> distinguen $2$ cosas; con dos, $4$; con ocho, $256$. Letras, fotos, música y números se guardan como largas filas de bits,
> siguiendo una tabla que dice qué significa cada combinación.


Un ordenador solo maneja **bits** (0 o 1). Con $n$ bits se distinguen $2^n$ combinaciones distintas: con $8$ bits (un **byte**), $256$.
Todo se codifica en bits: los números (base $2$, ver el nodo de naturales), el texto (cada letra es un número según una tabla, como ASCII y
Unicode), las imágenes (números por píxel), el sonido (números por muestra).

**Ejemplo:** $13_{10} = 1101_2$ porque $8 + 4 + 1 = 13$. **Cuántas cifras hacen falta:** $n$ necesita $\lfloor\log_2 n\rfloor + 1$ bits.
Mil millones ($10^9$) cabe en $30$ bits, porque $2^{30} = 1\,073\,741\,824$.

**Por qué importa:** un entero de $32$ bits **sin signo** llega a $2^{32} - 1 = 4\,294\,967\,295$; al pasarse, **da la vuelta** a $0$. Esa limitación
causa errores reales (ver el nodo de explotación binaria, [[sec-explotacion-binaria]]). Y muchos decimales (como $0{,}1$) solo se pueden guardar en binario como **aproximaciones**: por eso `0.1 + 0.2` no da
exactamente `0.3` en un ordenador.

## 6. Cuánto cuesta un algoritmo

> [!practico]
> Para encontrar una palabra en un diccionario no lees desde la primera página: lo abres por la mitad y descartas la mitad
> que no sirve, y repites. Con un diccionario de mil páginas te bastan unos diez intentos. Esa diferencia entre «mirar una
> por una» y «partir por la mitad» es lo que separa un programa que tarda un segundo de otro que tardaría años.


Dos algoritmos que resuelven lo mismo pueden diferir enormemente en **rapidez**. Se mide **contando pasos** en función del tamaño $n$
de la entrada, no segundos (que dependen de la máquina).

**Ejemplo: encontrar un número en una lista ordenada de $n$.**

- **Búsqueda lineal**: mirar uno a uno. En el peor caso, $n$ pasos.
- **Búsqueda binaria**: mirar el elemento **central**; si es el buscado, hecho; si el buscado es menor, quedarse con la mitad izquierda; si
  mayor, con la derecha. Cada paso **descarta la mitad**. En el peor caso, $\lceil \log_2 (n + 1) \rceil$ pasos.

Para $n = 1\,000\,000$: lineal, hasta un millón de pasos; binaria, **como máximo $20$**. Es la razón por la que un buscador encuentra algo entre
miles de millones de páginas en un instante, y la del juego de «adivina el número»: con $10$ preguntas de sí o no se identifica cualquier número
del $1$ al $1024$, porque $2^{10} = 1024$.

```python
def busqueda_binaria(lista, objetivo):
    lo, hi = 0, len(lista) - 1
    while lo <= hi:
        mid = (lo + hi) // 2           # // es la división entera
        if lista[mid] == objetivo:
            return mid
        if lista[mid] < objetivo:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1                           # no está
```

**Contar bucles anidados.** Un bucle dentro de otro multiplica: `for i in range(n): for j in range(n): ...` ejecuta el interior $n^2$ veces. Si el interior
empieza en `i`, la cuenta es $n + (n-1) + \cdots + 1 = \frac{n(n+1)}{2}$. Con $n = 100$ son $10\,000$ o $5050$ pasos; con $n = 100\,000$,
$10^{10}$: el algoritmo deja de ser utilizable. Esta forma de medir se formaliza más adelante en [[prog-algoritmos]].

## 7. Depurar con método

> [!practico]
> Cuando algo falla, el mecánico no cambia piezas al azar: reproduce la avería, la aísla (¿es el motor o la batería?) y
> prueba una hipótesis cada vez. Con un programa se hace igual. Y cuando lo arreglas, dejas una prueba que avise si vuelve a
> fallar.


Un **error** (*bug*) es una diferencia entre lo que el programa hace y lo que se quería que hiciera. Depurar es una habilidad metódica,
no de tanteo (aplicación de las cuatro fases de Pólya):

1. **Reproducir** el fallo con una entrada concreta y pequeña.
2. **Aislar**: reduce la entrada y el código hasta el mínimo que sigue fallando.
3. **Hipótesis**: ¿qué variable tiene un valor distinto del esperado, y en qué línea cambia?
4. **Comprobar** con `print` o con un depurador, y **corregir una cosa cada vez**.
5. **Fijar** el caso con una prueba (`assert funcion(3) == 9`) para que no vuelva.

Errores típicos de principiante: confundir `=` (asignar) con `==` (comparar), el **error por uno** (un bucle que se pasa o se queda corto en
una iteración), no inicializar una variable y usar un valor de una ejecución anterior.

## 8. Errores típicos

- Creer que `x = x + 1` es una ecuación imposible.
- Bucles infinitos: el cambio no acerca la condición a ser falsa.
- Error por uno: `range(1, 10)` llega hasta $9$, no hasta $10$.
- Dar por buena la ejecución de «el caso típico» sin probar el vacío, el mínimo o el máximo.
- Optimizar sin medir: primero correcto, luego rápido.

## Repaso: lo que debe quedarte dentro de un mes

1. Algoritmo: pasos finitos, precisos, con entrada y salida; Euclides es de los más antiguos.
2. `x = x + 1` es **asignar**, no igualar; el estado cambia con cada instrucción; la traza es la herramienta de comprobación.
3. $n$ bits distinguen $2^n$ casos; los enteros de ancho fijo dan la vuelta; muchos decimales (como $0{,}1$) son aproximados en binario.
4. Búsqueda binaria: $\lceil \log_2 (n + 1) \rceil$ pasos frente a $n$.
5. Depurar: reproducir, aislar, hipótesis, comprobar y fijar con una prueba.

## Siguiente

[[prog-python-fundamentos]] aprende el lenguaje Python con esta forma de pensar: tipos, texto, listas, funciones y archivos.
