---
id: mat-algebra-secundaria
title: "Álgebra de secundaria: polinomios, radicales y logaritmos"
area: matematicas
trunk_level: 5
prerequisites: [mat-algebra-basica, mat-funciones-basicas, mat-numeros-reales, mat-ecuaciones-segundo-grado, mat-polinomios-factorizacion]
academic_sources:
  - "Stewart, J.; Redlin, L.; Watson, S. Precalculus: Mathematics for Calculus, 7ª ed. Cengage Learning, 2016."
  - "Gelfand, I. M.; Shen, A. Algebra. Birkhäuser, 1993."
  - "Apuntes Marea Verde (LOMLOE). Matemáticas 3.º ESO, cap. 4 (polinomios) y cap. 5 (ecuaciones de segundo grado); 4.º B ESO, caps. 2-5 (potencias y raíces, polinomios, ecuaciones e inecuaciones); Matemáticas I, cap. 1, sección 3 (logaritmos) y cap. 2 (álgebra). https://www.apuntesmareaverde.org.es/grupos/mat/index.html"
  - "Euclides. Elementos, libro X (inconmensurables) y libro II (álgebra geométrica). Edición en línea de D. E. Joyce, Clark University."
hints:
  - "Concepto: casi todo se reduce a dos movimientos: factorizar (para ver las raíces) y usar la definición de logaritmo como inverso de la exponencial. Al elevar al cuadrado o multiplicar por una expresión con incógnita pueden aparecer soluciones falsas: comprueba **siempre** cada solución en la ecuación original y en el dominio."
  - "Herramienta: sympy (`factor`, `solve`, `Poly`, `div`) para comprobar a mano; la regla de Ruffini y el teorema del resto para evaluar y dividir; `math.log(x, base)`, `math.log10` y `math.log2` en Python para los logaritmos, y un barrido de enteros con un bucle para recuentos."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/ (simplificación, resolución de ecuaciones y polinomios); docs.python.org/3/library/math.html (log, log10, log2, sqrt); Stewart-Redlin-Watson, capítulos de funciones polinómicas y racionales, y de exponenciales y logaritmos."
exercises:
  - id: resto-ruffini
    tier: 1
    type: numero
    sig: 8
    prompt: |
      ¿Cuál es el resto de dividir ${{pol}}$ entre ${{div}}$? Respuesta: un número.
    variants:
      - values: {"pol":"x^3 - 2x^2 + 4x - 8","div":"x - 2"}
        answers: ["sha256:c4ff479aba96951e4832fbfc58f18f89fe1e76e172fa872799fd334ad6888212","sha256:482fc0ede7af686dad8c660a0a193a0cc337e3019e3bada9bf06e5dbb9ead6b2","sha256:7a165fbf966532814f496c8aa76331cab7c53777c385e768b2db499ffdf9e31d"]
      - values: {"pol":"x^3 + 3x^2 - x + 5","div":"x - 2"}
        answers: ["sha256:b6c3da348975f8dcdb299d12bd5c983c8b5a0f02192238be4c4c18d6a0635c1b","sha256:8da85eff0f0ab600894b1da267f1c9c5ce5ceed809660ed47998f2f916fe1363","sha256:4a531d5007e51136b25f9f42010fc1a70264deb47a8f62e20699123b21c7808a"]
      - values: {"pol":"x^3 - 4x + 7","div":"x + 3"}
        answers: ["sha256:4f9bcb32b3550ed802b540757eedc4747f4e959177f0a07a20b1296ee28aa4c4","sha256:b7c9941cb3beee8193d1939d0ff756ba5141c1b8609746cb55fe4bf4681ad3cc","sha256:9a3974eaafca92806a375b51b1bf0ec01d4bbf1c202f5423ae95d34260bcdad9"]
      - values: {"pol":"2x^3 - x^2 + 3","div":"x - 1"}
        answers: ["sha256:80fc6b54fc561aa09af87b5a62ebe1159d0aea3aa51dd7457947b456e3e62bfe","sha256:a8e45ba0d96d9c4be15466c8531835650e23072ba30e06b8f3dda80185f79232","sha256:3595afef5b2d5e33697ce6adda5ae3c012c6f9944cb338e22eb0d76c9beee680"]
      - values: {"pol":"x^3 - 5x^2 + 2x","div":"x - 4"}
        answers: ["sha256:5c6af39c65ff593833478336f1f4b93f07853372e3e4e9806e0d8d3e46559f4b","sha256:32b64cbc15b3feb6952988bb5035e9e4cad5188eef742b8a8ed9c39a538d9f6d","sha256:5e6d8c322fd589e83a6ace890a09684b2449b75234ea5f2ebab8fc012d17c721"]
      - values: {"pol":"3x^3 - 2x - 1","div":"x + 1"}
        answers: ["sha256:c3d6be2d5644a40fd8f447aacd44ea95ef022f0055ed35ac45cfb613aee01df9","sha256:b6f66972761aca3f50a85b512f7849f33b6a4d9ca4487a8a8739913f822379ad","sha256:1376b27acb3489156954e263098ab73278ff6d7232d20e39a668869d0bd7174a"]
  - id: cuadratica-simple
    tier: 1
    prompt: |
      Resuelve ${{t}} = 0$. Respuesta: las dos raíces de menor a mayor, separadas por punto y coma, por ejemplo «1;4».
    variants:
      - values: {"t":"x^2 - 5x + 6"}
        answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
      - values: {"t":"x^2 + 3x - 4"}
        answers: ["sha256:0834233093bec287f06bd85842a2c6f2428fbb38d7f470914eb85250735af3fd"]
      - values: {"t":"x^2 + 7x + 10"}
        answers: ["sha256:c2ba0393c219e75700d97abd53f4a60f4297fe50e045a8756f80e302fcaa0fcf"]
      - values: {"t":"x^2 - 11x + 24"}
        answers: ["sha256:688f28fc79dc3a786afef03cc18d185e47e71d5c677b4827e3d7ab51a3105338"]
      - values: {"t":"x^2 - 36"}
        answers: ["sha256:26772f139a7ac296df03971a12b0f85ecdb43a28404a24ecb6502934bf2aea56"]
      - values: {"t":"x^2 - 7x"}
        answers: ["sha256:4fdb3515a4601cad71bf132941cf4ab421f89e1592c19534eee4e7560d04cbfd"]
  - id: logaritmo-base-2
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula $\log_{{{b}}} {{x}}$. Respuesta: un número.
    variants:
      - values: {"b":2,"x":"64"}
        answers: ["sha256:5fa5356d4a444ea5ad6882b7a2ee7840805a6e5c7b7c1ac3a6018bbb2e2b43b4","sha256:70599f4777117d7a44d052b8d7934f85ab226a2184c2bff5c6029ab62de1a7ca","sha256:d88dd20742f68e19f2e87e3059ec16e58d1a3ef9ccc0596b4aeec9692102ab45"]
      - values: {"b":3,"x":"81"}
        answers: ["sha256:d0dc86520f0217b8153ad5f39b180c829f69b1d2e2355ca504d65b2cafa08aad","sha256:b818269cb3b067f61ec54b2a5bfc7333b4bbaa5b348cd296f01f8c8e3da2e3d0","sha256:e8aedc3aeb138f4cc34557da48fa3ebd8e963b19727244623ff5753cccbd66ba"]
      - values: {"b":5,"x":"125"}
        answers: ["sha256:743bbc6bc77ade13646dc205d616641193038d36dbe6f5cf0ff175bce21c3054","sha256:8601c47db98ae30f9fbca35ada0be3307fc8302aaa21667fca82588bee4d6ddc","sha256:b9fee764b22a21c3c9fb286500d717124e977ec72e26072ff74633525f2d15ff"]
      - values: {"b":2,"x":"1024"}
        answers: ["sha256:b14280417d8f414823552b9e593d2b88a4a8eeba2a1355f949bf04c6adda9086","sha256:558a47754cf024cac211f748858cfc8313591e7f6c12fa5339b4a4c572c507e0","sha256:16a10ffbde53d1bcf07e820b724703bcc108ff0758faf0df6bf4dbde96358172"]
      - values: {"b":10,"x":"100000"}
        answers: ["sha256:b0a260b4ccca175b433b989497f19b3455e282519fcd01effd2e06b527b5dd28","sha256:5f0f48b4bc26bfc1f04184b05de4dc7a4581ec201ce1873bec6dc5e0fd3f2f6c","sha256:970ab297f442d4b99ae4b2cc7728dd96efb0b884dd7b179b95e0a807dd2e7827"]
      - values: {"b":4,"x":"\\tfrac{1}{16}"}
        answers: ["sha256:bcbb4b35b2604b3bf8cf06742ae1428adebdfa0e4ddbb5cce344735359506389","sha256:e436cae38794d4646a7897502a4c92405361fb5a669180801908975fbdc57513","sha256:00cfc3c0a49c68e6374d9c0f7e83cd7f9de6ad5aa466a0ad38ec877d9f1a87dd"]
  - id: suma-cuadrados-raices
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Si $\alpha$ y $\beta$ son las raíces de $x^2 - {{s}}x {{p}} = 0$, calcula $\alpha^2 + \beta^2$ sin hallar las raíces.
    variants:
      - values: {"s":7,"p":"+ 10"}
        answers: ["sha256:46116b37634fd7bb1546c1201f7ef4e7969165fab776fec9d2bcbcf31b3870eb","sha256:4830d58b0efaafbb39416a700566e5b89b58b10372dd3630bc22e7ff254d75ac","sha256:41a6c3a9253b6f870b739ece3e757b702f866535f310bd4399bd4f9a2248a7ec"]
      - values: {"s":9,"p":"+ 14"}
        answers: ["sha256:e9958022a7004ce2062750b2d8238f5d493fc1e1d10c217e8cead886fde1f9ba","sha256:8c4e8ef3adef9152e08f4a61b7ee3b0641a8d994adb45d37730f16c1ff0d8d82","sha256:0f9ea6786bb5310984706dafbc23cd66994d6a2c95c1b08b9dd53480689fba88"]
      - values: {"s":4,"p":"- 5"}
        answers: ["sha256:00a3606fe712a55b73d24488cd48abe0b19342c22cb0cfa482beae51015603d0","sha256:25e3323714af082aa1ee28764afb6d0ca6234a145aaaec711b301c8e8183d80a","sha256:3a5f55845518e20741ddd805357b5c74cb16f2ef16b43ea3837d3c67fd3810b9"]
      - values: {"s":11,"p":"+ 24"}
        answers: ["sha256:304882e6bb4da839397e4713c2f099f5d1bbe66816eaa5c70931258d3b1825b1","sha256:a4440f69901d2f07ef533050f12706c312a3634b01ec5df0b98387f6d5d268e8","sha256:72e7226307f06e64817d88e0c6fd7962004fe08c3a5f2f24641b4b193d949585"]
      - values: {"s":3,"p":"+ 1"}
        answers: ["sha256:e4d63ebb2053b17f98bf461b20d147832a4276ce7f873efc6595ad757b1223f3","sha256:f4df67073f2863f4c63ec6ed33bfcce0fb7d83bf4c1fe6e858901cb6d4f6108c","sha256:be18e3edef32cfa5cf93bb002dd45f79540f9389fd781de3eafca19bc138b490"]
      - values: {"s":6,"p":"- 7"}
        answers: ["sha256:ed0fd6d851fa4798ddc58bc07fd0c21936b63f4bf47e57afc9ffac679ad9685a","sha256:099f42f58cf42e095b66ca3a8f14a6326428493f901c3c635af93dd6d02a7aff","sha256:38495f6f1db089731a789dbc44c7800eff8c06c82eb442955d541700a0f6e97b"]
  - id: bicuadrada
    tier: 2
    prompt: |
      ¿Cuántas soluciones reales distintas tiene $x^4 - 5x^2 + 4 = 0$? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: ecuacion-con-raiz
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Resuelve $\sqrt{x + {{a}}} = {{der}}$. (Cuidado: al elevar al cuadrado pueden aparecer soluciones falsas; comprueba.)
      Respuesta: la solución válida.
    variants:
      - values: {"a":7,"der":"x + 1"}
        answers: ["sha256:a354d742621760406a8b1bee3c983be389401946b47ce8967b433600a22d9b6e","sha256:a2b660c569f91a2159425fb3ac7a316b9bd006594361096cec9115d9011214de","sha256:b8974d0e093115314fddf2865634e43a8e761efbd6279bc597bc86e3e7a008e5"]
      - values: {"a":10,"der":"x - 2"}
        answers: ["sha256:fe7ffeeec9307b458257313c0f65d0b81e7e25512322ae7414f70ac6c90a7cec","sha256:0898e5ad301adf0983cd573273c99ee99c13f483eec2b606325c6b0424388e2c","sha256:ec3db1debeea8c59ca4e36a2d9fe3df2d902fa9fb89cc29b575e2d3c1cd8da4f"]
      - values: {"a":13,"der":"x + 1"}
        answers: ["sha256:f868f2786e0232013856b5b47edd8b5292397421c9e11a00da476717704dbd5c","sha256:756dbdcbae8355ccd6c64b63c0bb614b5090e0bc00fc4aa22e6b97e19863b23d","sha256:927ed70bf118e74c9a49f29f2cb7fe7313f6f1d4610cde3b8e1df528c643b6db"]
      - values: {"a":6,"der":"x"}
        answers: ["sha256:6fd333329921e9bbf0ebc2010264e25d5a5833e467e969f8b284627d9ad02828","sha256:6dc0ad45f204ff1e08139c7d97434ce3de8a97e220d3121f60bcd50b4a1245a4","sha256:5f6c98260ede6ad8a374bf440af394bf61bf59075b2c566f39a7e9e0756849a5"]
      - values: {"a":11,"der":"x - 1"}
        answers: ["sha256:694c9cdd31bd2936098b1eb4cb6c73c8bf5f3846c0f507593b1f7fd91caa8683","sha256:d7638bea7d95425f7d1e0188d21f096a151355d059c4a25ff92a71a8d1c5b83c","sha256:829b80077b8b3da525a0e38110378356271e36641d0e35b63b0efb2eaa3d47f6"]
      - values: {"a":4,"der":"x + 2"}
        answers: ["sha256:15b81788c055b71c021f8ba20ab76d7bdf5143ccbe77473375247709069a82ce","sha256:3c7c8cacf2657c433dc660638392ea1720af70c4c275dda878c4dc6e9b4e94e6","sha256:a6c92f48c63a7e88f597e3bc45cb11747f043a8cc11fb6d14127636481a2d299"]
  - id: ecuacion-logaritmica
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Resuelve $\log_{{{b}}} x + \log_{{{b}}} (x - {{c}}) = {{k}}$. Respuesta: la solución válida (recuerda el dominio del logaritmo).
    variants:
      - values: {"b":3,"c":6,"k":3}
        answers: ["sha256:489b34b67d4db33e364b1dc5bce9ca0c46f832fa4e03514ffb59331dde430cc7","sha256:5c2e371d7d42d51e1effe6e58cdcd2e0ef067b7315abc75f849397eb53e5717f","sha256:e96302baf3ad25cb7ca155b465a89928d903bd275d682cf370aa5fafac496330"]
      - values: {"b":2,"c":3,"k":2}
        answers: ["sha256:277b60199932faf9061c8a55a9fa2d9def10a81256e0789ff30766a8f69a4db3","sha256:3b6ab8d172cb55c0e0d9e87c419d16c2521f25bbad10356f98b2fa9a551e5a32","sha256:bbb143d6b2fce9d0226b2e276b778264624203dc8387f1e8ef216de02c4e0c0e"]
      - values: {"b":2,"c":6,"k":4}
        answers: ["sha256:672ccb451c2157dc1ca9683fd7b185f79272f6a0f5eff5a444d10aa3a5ca9032","sha256:f5b52e3f00f8f1da46d4c0174316925fa06e46be502c2297a4219133ea64b226","sha256:0f963c756fed1ca02aa5f5ab7f6c069c5e27b6cdbcfee7f4b03d7afb5a50f0c4"]
      - values: {"b":3,"c":8,"k":2}
        answers: ["sha256:9f59c0cd9d8e920422ae5d8315ddd499dd70a6d1bde3651364ba3c592db21f5c","sha256:082562028b464284f43579df9c292e067672a0275b3379bd19f47c8281a1ac3e","sha256:e0e5e4d3ccd1da7083190887cbaee91d7f66758d4fa209204585801e6c853406"]
      - values: {"b":10,"c":15,"k":2}
        answers: ["sha256:27314d84df45d1e075dbf88ac763dcb38443aee8af18a4f2bf619768bbfa924c","sha256:030ea0de071ca72d8c4d6a1c21a154fd9cdd5a9b577b593e2c56e1734298d6d3","sha256:6782e98d7d1cd976e597282f7f2aec51e47b4a97bf890278ee89b1540c842760"]
      - values: {"b":2,"c":2,"k":3}
        answers: ["sha256:01402a2decf0724856e6be28c2ba564b10d4cf141d6a1df3cb3fc83bacb390e6","sha256:03d312d29c83b6cbb7c5a85cda0bc80be81d19158b6903ebe77aca7556a8a218","sha256:4630f2a0ac4c339b98aefac845da11e9a6e5153734584af23e392eff1ca13e01"]
  - id: exponentes-racionales
    tier: 2
    prompt: |
      Calcula ${{a}}^{{{m}}/{{n}}}\cdot {{b}}^{-1/{{k}}}$ como fracción irreducible «a/b» (si es entero, solo el número).
    variants:
      - values: {"a":8,"m":2,"n":3,"b":27,"k":3}
        answers: ["sha256:88a09c48f589386b2d18d8be987cffe6a938c9e22314f3542082f7f6243efdb5"]
      - values: {"a":16,"m":3,"n":4,"b":27,"k":3}
        answers: ["sha256:5bdb15b49f6ce00d8f14a9b691a06657c8983dde480ba2a5066d89ff7a5e53a3"]
      - values: {"a":25,"m":3,"n":2,"b":8,"k":3}
        answers: ["sha256:0d784c787eccbcf0f25468cac07e06fd189bdf88b082d3ded62f2af9e00f1735"]
      - values: {"a":27,"m":2,"n":3,"b":4,"k":2}
        answers: ["sha256:8eb625d3c0595535af2fa65cf5d8ae6d1d8ac4d43c08d2db3350778a3e4ca47e"]
      - values: {"a":32,"m":2,"n":5,"b":81,"k":4}
        answers: ["sha256:88a09c48f589386b2d18d8be987cffe6a938c9e22314f3542082f7f6243efdb5"]
      - values: {"a":9,"m":3,"n":2,"b":64,"k":3}
        answers: ["sha256:6667ce351fd1d83561a2b928c4c7d500cddc786c43222fa3244886e28b518d57"]
  - id: racionalizar
    tier: 2
    prompt: |
      Calcula el valor de $\dfrac{6}{\sqrt{5} - \sqrt{2}}$ (conviene racionalizar el denominador). Respuesta: la **parte entera** del resultado.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: inecuacion-cuadratica
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos números **enteros** $x$ cumplen ${{t}} < 0$? Respuesta: un entero.
    variants:
      - values: {"t":"x^2 - 3x - 10"}
        answers: ["sha256:de02e5c598c8bb86227add90e403fd99a662655d7c79e28bc038d7e1e389e7ac","sha256:02f46ff5303cce084f669557dfacd08038c9bfbf4ffd257bf0f15781bde93cb0","sha256:a9fc8ee0574539b0c95e932457a75ff5853a6a2c4b4adb129afc25d2f8835016"]
      - values: {"t":"x^2 + x - 12"}
        answers: ["sha256:3fc9185b9b7ae98cc1dce1008779e6ccf4fc0c03859b991369e98130625dd22f","sha256:90b19bda3d9e1922a3cedf6bf9972d348994536557ba23ecf741e41c7a1a26e0","sha256:49d03e219d51f4db4207e8a6089815c221e3b82babc178b63cda0137af2dc1f9"]
      - values: {"t":"x^2 - 10x + 9"}
        answers: ["sha256:f640c2da66ac229f2ea1ab6504127a07f119f0d146a385ad116fec2f6aed3cef","sha256:460c331f4b090901c7000ab5edc22c137c705ad268a3276d568b0e7ac0fb18bf","sha256:ff71e09c83e53f485397a34ebf19dd2f2b43eff1f6912091a8e53cb54d73eb60"]
      - values: {"t":"x^2 + 8x + 7"}
        answers: ["sha256:683868741d91f399569b850f398f2c1f184e0cbe1df1d9a7fdf1bd1737420852","sha256:b308a869509de336b0a9526d1a7d6983051c0f44fe9f978e9a29e82c20f453a6","sha256:8e6a1b7b0356bee721e59ba700d59296687e4246580617e926b4113dca466f41"]
      - values: {"t":"x^2 - 12x"}
        answers: ["sha256:54c8a1cf528c9ac70c75074a78941bb5d69e6a881b39578963c7b2b7f013c220","sha256:829988c6a275660f653e332e1543629fa6ff66ede3f613ac77dede82a4bc5524","sha256:3d7daf0313ff4f859d337219c828b474fe61530d77c6d8eca083f4fb601d4a2b"]
      - values: {"t":"x^2 - 9"}
        answers: ["sha256:aa809cd51ba04ee4fa844c904011aac3c63b3d8d819a596279d42756d72163a8","sha256:a552f1e2c47d5738bfd73e8d676b241f10c08ae445c0fe4a6c70e383b4490a69","sha256:f1ac2ebc7920f2cd7e09404323ca9ffc571766ed5c5bd2ccd8bbb39caa98bb57"]
  - id: tiempo-de-duplicacion
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se invierten ${{C}}$ euros al ${{r}}\,\%$ de interés compuesto anual. ¿Cuál es el menor número **entero** de años tras el
      cual el capital es al menos el doble? Respuesta: un entero.
    variants:
      - values: {"r":"3{,}5","C":1000}
        answers: ["sha256:7f08811d695d53ed0b4bce0423b47c8d65df720f3385cd1f284d0fa53b7079f3","sha256:2c10faa22fc77e9c1f5839590b89f35f1dd76402fafd7d169cf92b867c330e89","sha256:2e0d4bdaa3ad4afccd2fbbfe46f1c613801ec1648acfd3ab2d1617ad0866f885"]
      - values: {"r":"5","C":500}
        answers: ["sha256:3483e35329d1623de906d4fe9e57aacd3eab6a4fb11c7115e4a3434ce820eefe","sha256:9733e5d1d68c496fdb0228bbcaf7103a76963bc3a663c1d305a1e80540de4c3d","sha256:fffe15c8858d256e4ff352918d661f412a983db009d22c07033f745dd7b560c5"]
      - values: {"r":"2","C":3000}
        answers: ["sha256:0196eda332928834c5515213705849f57a6086ad9cc6432b16f1414f444051cb","sha256:071485912c40119c404a350ade3bacb9655a1596643abf35706a679348560fa3","sha256:ba8b1bcf0822af58265401bf64cd322aff9bcfa702ce13f5952e726d47133d45"]
      - values: {"r":"7","C":1200}
        answers: ["sha256:7c13a9f6f120129131f82aee735e86e9ba447bc6771cf8fa2a32e3bab87e8319","sha256:f2ab11cce9fd4040bec19eb25cde5d8146d133abc163f06b1e3278147949d59c","sha256:2d5dbabf3b8969cf3e7d2b78bf360071fe1635727a4fac36b296cf0b6285f7d8"]
      - values: {"r":"1{,}5","C":800}
        answers: ["sha256:a068bda7195dbd6b63a68eb64bfb77f420d92acb9979c45df17f094aa1ec6891","sha256:2ed0fde0f1e664aa566495ec3a0e6b6eda7dbae37c4e61b878d7392ea0bd3806","sha256:61bffa124c2c3fa3a5bfdfb91183a2f1e59f1dde7ee85ae3da2647ce31e727ff"]
      - values: {"r":"6","C":2500}
        answers: ["sha256:005d642c6222d040aec29a630946ace6fe814df414ed3598173d339aa67cce83","sha256:cd3a37ac3b678baa6776edd4c2125645d5142a5f00a875ebd3682f92a09dbdbe","sha256:cadddd66ec290e778bd83ecc8356b2159e0e84ea4a5e7699555749503376e67a"]
  - id: ph
    tier: 3
    type: numero
    sig: 3
    prompt: |
      El pH se define como $\mathrm{pH} = -\log_{10}[\mathrm{H}^+]$. Si $[\mathrm{H}^+] = {{m}}\cdot 10^{{{e}}}$ mol/L, ¿cuánto vale el pH?
      Respuesta: **dos decimales**.
    variants:
      - values: {"m":"3{,}0","e":-5}
        answers: ["sha256:fcbe9cfbddff509b5b094d86de86209342f0b73b4cfcbaa206b144b91b4c88f9","sha256:7d48e5f5a715c13767dc6afdc4bb8f146d6236d55c926e75b82693e25f6d440d","sha256:48bd1c417b7cb6505ca071773c1a3b565f2400b632e1a5829d807c01eb5ef903"]
      - values: {"m":"2{,}5","e":-3}
        answers: ["sha256:261d130b55e16478a556350fce6a938deb521c619aba09ca329ef4af3c635ce0","sha256:78400505585439e1aff1d442f339dd3533c458658b5254c5b5adfb4a58f9972a","sha256:3eb39e2f7c9bfb6c47755bf3be8645f14cd2fa8ba454d9a393af53886e16bb55"]
      - values: {"m":"7{,}2","e":-8}
        answers: ["sha256:52ff2246769ef9c9b3304c434aa8ceaf7e77524c0f050eda62da7104bf9bb6d8","sha256:8369e05ae25a205ad56cd2d158948c10741bea234c89ed75d096a4da04c61ab0","sha256:f4c493f9559a7e3f2a3080d44ff3f9d6b3a342c27f01764cf2dc6dc3b669c4c1"]
      - values: {"m":"1{,}0","e":-6}
        answers: ["sha256:d63f8ff8bf91f61314a9b7a8bc3c948f739b4ede45c1fbbc07e3f3df2bf183a9","sha256:79db1b6a502ed4e265c758feefb756c3b04b318452e4ffbec23ac2c5eba00d4e","sha256:8daca1ec922ee37fdc90f3a860076f89b0685f81622bcd2f93172dd6169edca7"]
      - values: {"m":"4{,}0","e":-2}
        answers: ["sha256:a99a0a8cf8b9bed69ce7236d69dcfb0ea1bab612877225bb271da59cfe3c734b","sha256:7f0dceecc0ab5fa7334fefe6c9812b53be03ef4e18ca2ef2850fa02c9b5b51f1","sha256:d8ad5184146640c1d29a126dba3850a3d79f22fc6897b10c74697205c4b9bc3c"]
      - values: {"m":"6{,}3","e":-10}
        answers: ["sha256:61da6eca72c48a9a3f3e8bd542d10035a55dad0d11a8a6c710decb20accedd4b","sha256:7f835ae4991d2687fc7e6d313425bd90d722ed4c99986d0f1382511b43fafb0b","sha256:47e6dc490f20078ab456e75eb365a6be93e0eb22c74a35e65a1830d1013e19d8"]
  - id: energia-sismica
    tier: 3
    type: numero
    sig: 4
    prompt: |
      La energía liberada por un terremoto crece como $E \propto 10^{1{,}5\,M}$, siendo $M$ la magnitud. ¿Cuántas veces más energía
      libera un terremoto de magnitud ${{M1}}$ que uno de magnitud ${{M2}}$? Respuesta: redondeado a un entero (basta con las cuatro
      primeras cifras).
    variants:
      - values: {"M1":"8","M2":"5"}
        answers: ["sha256:33770f70bfd8e82d7ec42c02c596b7cb7da884ed033d668f2a328321bf90b2be","sha256:5f2f18226fdb631ded4d10e9fd72a1f4f45b7c70f244a875ec30936b806fcc29","sha256:1c75e3f7ca98511539c57fe2933036a46cfc061e9e8c253f5ca6c028348ee79a"]
      - values: {"M1":"7","M2":"6"}
        answers: ["sha256:dbfa22ebcbeaa9c5a924ad5b50951d46205ca6d7ca50ce03810fd685408c3771","sha256:ff83e8d22d964e6743fc3349c62189c831857ab310070182cabd254d5faa9190","sha256:a6042b804e6528f7a73b7843e5a05d9d94257d0de17ada3b975fb4678f699768"]
      - values: {"M1":"9","M2":"6"}
        answers: ["sha256:4bd548375fd1cbcca5cc1936a51c38782ff97435991698a8d9b11e354b8fcd5f","sha256:3ec6ced9fad7b6a2cc227e7f7834f0383ed5c292ca365c561771a48af7550ad2","sha256:60061a2c97d13bfd852da1e8b6a70314cb47597578ee4a2bdc34ff6d09b715db"]
      - values: {"M1":"6{,}5","M2":"4"}
        answers: ["sha256:d6606cde0de325d6e4336271f705f62e1dcfb5fce31387e49b677004a271e130","sha256:0d84753ecac78f293bf5f6999a2703ade4800bd2d5ddec013bd96445d3507fd2","sha256:64ef0279f70cad1ce08097b9b28fd8d4234c20e59ac999e26731435ab4bf7c66"]
      - values: {"M1":"7{,}5","M2":"5"}
        answers: ["sha256:5efc98a9adc63d3c811c721b95100abcbb4472af30a009d1a22bf6f2457eb5e0","sha256:bda1ab8c8b51384c1171ab4c9ba0b5b111110e9df8b54751828f53f973c368ff","sha256:da5b19a8bb149770e981cedbf06a2a707e5ffe008ece25217a8e925bed921c3f"]
      - values: {"M1":"8{,}5","M2":"7"}
        answers: ["sha256:a414a2bcf9ee2b944ad83570bddd699cc287d8ebb9dc4706d9bb50f134e2148e","sha256:2b8cabbae81eb4f1e658c60e08fa6804289cafe5e7828823d8a1181a9168d1f5","sha256:14d721780a33785461c7ee71939c8786b4088048cb230ba3925621a53988e9fe"]
  - id: parametro-teorema-del-resto
    tier: 3
    type: numero
    sig: 6
    prompt: |
      El polinomio $p(x) = x^3 + a x^2 - {{c1}}x {{c0}}$ deja resto ${{R}}$ al dividirlo entre ${{div}}$. ¿Cuánto vale $a$?
    variants:
      - values: {"c1":4,"c0":"+ 1","div":"x - 1","R":5}
        answers: ["sha256:46ca10931626ae8b3d8b9565c4c73bfbb3ae9703084bc45c3c29ece41cf966d4","sha256:1a0afbada7e1c28115dc0724dce1a6e017fe06b3cdb96730240a42f03fa74a3a","sha256:b8236fd0702c1c63a1f686ff87a56fc54022adb3b8972bba2b3c7052398fea75"]
      - values: {"c1":4,"c0":"+ 3","div":"x - 2","R":11}
        answers: ["sha256:9b25c8ad39b42168bd070099347187b8b37ed3221b4e732400b753c63ac27f5b","sha256:729361ed98d41424ff830e79e47b787eeafae6dd742a524f3cd902064855d6cc","sha256:3230ea144fde70972dcf741d5bf98a5e762b5dfc7f50c6b02f981719b76b4194"]
      - values: {"c1":4,"c0":"+ 3","div":"x + 1","R":9}
        answers: ["sha256:e88f0666a297300aa15ccd0d1f6caf9b09822870f42fee15ddf063bcbf7d37a9","sha256:83f0d5e9612df27a09604dc53f89f15dba659f9969eef879ee1b706f7c176e95","sha256:306a5f7aacb5d20fa43d3fc7c2ef49512453532acf7f4cf32a93a1fb3ad69b9e"]
      - values: {"c1":6,"c0":"+ 1","div":"x - 1","R":-2}
        answers: ["sha256:9d478f0b1ec00d80ff1d0d9828c5bd6bee1ee8c45bd9a97a8e299f4ef66d0a22","sha256:4fd1b166932df158cd6771a14b769a016e4f8938fb712a4332f0683586c54bec","sha256:958dfade6343484b67c7293b769df7146b3ce1db5ec132583bda6327b1f68d9f"]
      - values: {"c1":14,"c0":"+ 5","div":"x - 3","R":44}
        answers: ["sha256:98ca00c88328aba9d2bf6ac82a4a56054f73142a912ace2a68d247eb3e877821","sha256:8c47e51a28184948a8e2d921ed3d559d118a54407974e268f0ce966efc23a60d","sha256:6565669e5df68ef218fd938c5bec1ac62537a720ab7cd5e6454c08e4dcaa5d67"]
      - values: {"c1":1,"c0":"- 2","div":"x - 2","R":0}
        answers: ["sha256:27c2bd146656aeda3ab0407ab9588cdc42b2a672086e8cde2f9ed34df96c306d","sha256:637a965c1de045f7c660318f25adc4b62f49385011ee0c58265229b6d10b620a","sha256:1544af2dc9e8ffbd26851f64c61e136d56f26273f928e56cb4b94d1a63ceba18"]
  - id: raices-enteras
    tier: 3
    prompt: |
      ¿Cuántas raíces **enteras** tiene $2x^3 - 3x^2 - 11x + 6 = 0$? (Pista: prueba los divisores del término independiente y aplica la regla de Ruffini.) Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: identidad-de-cubos
    tier: 3
    type: numero
    sig: 8
    prompt: |
      Si $\alpha$ y $\beta$ son las raíces de $x^2 - {{s}}x {{p}} = 0$, calcula $\alpha^3 + \beta^3$ (sin hallar las raíces: usa
      $\alpha + \beta$ y $\alpha\beta$).
    variants:
      - values: {"s":6,"p":"+ 4"}
        answers: ["sha256:ac54d57f9a8dc4b5efcdcb53d0f698cd73a6415f1266eadb7b5222707f22595e","sha256:727d2ff4dd6af434cac02f0ff7f4400147824d14bad20383fb92163529fd4d93","sha256:e58c821354134e7c30e72dcefe288d160bdba64e1181c5d253fb99ba6dde2c4a"]
      - values: {"s":5,"p":"+ 3"}
        answers: ["sha256:826445a1411078458c3b6750f81013bcda2d61c75bf207f0c8fcc896eefe718a","sha256:e331deff54d9b96cc2b7b31e87139377122de547e46a4d67c1c9c0c851b03a0c","sha256:c658df367802a893de9622931af7a432d633f54365013709fbca91a88ecae89c"]
      - values: {"s":7,"p":"+ 2"}
        answers: ["sha256:e45785051c633d4b3df67c8c16b8fb3e7f76157537817d7292cadec6453fb722","sha256:59861f1a424e4a7955907b32e1f0a8ba92276ecbbdd5b20762771d1b90814ec2","sha256:74ba437e624fb8e7b9231e304a92697f942d84a69aea419f9e2956d4c97c4374"]
      - values: {"s":4,"p":"- 1"}
        answers: ["sha256:e779a730db68171cc676c3382ab1ebeb194731e4470e075aa5168aac57211d4e","sha256:239d35a8a7ae709d0403b4d5959e885dd4791ca42ff4a03fc713ee289cfdee17","sha256:e42870040e8a524db50cf3f9b46f1ba0c727ebd21483b418b46bf3c16bc686e3"]
      - values: {"s":8,"p":"+ 5"}
        answers: ["sha256:0c91515cb70977a61cd3f8f584e9d5448848118ebd0c37a9b717c027026b289b","sha256:dc63bf97cf2b30123eacd85af11781d20e4b6abc492b0878dc880b40cbc96aba","sha256:842bf4c8cf64f67d9e9ccdb64cdadead2adfd0c0a431a91713e4e6418d54a3b9"]
      - values: {"s":3,"p":"- 2"}
        answers: ["sha256:7f066337e070a3a8bdf98d065e0f4c9e2791788724ccff8f5848d2b4938ef3d3","sha256:1aae117963c04b6d8910a4f9d808ebea50dc567ea071f61b6871f9ebb9f7e62c","sha256:ac1bf2ae0536909b5ebf780e3b7c5c135b6ea2d95afbb22be7b31bc835a54522"]
  - id: r-raiz-factor
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si $p(3) = 0$, ¿qué se puede asegurar?
    options:
      - |
        $(x + 3)$ es un factor de $p(x)$
      - |
        $(x - 3)$ es un factor de $p(x)$
      - |
        $p(0) = 3$
      - |
        $p$ tiene grado 3
    answers: ["sha256:0255dd71c4ab6b0c2f676a25420841beaab93e2e17f000953d07dc7a34b3731e"]
  - id: r-log-suma
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas igualdades es correcta (para $a, b > 0$)?
    options:
      - |
        $\log(a + b) = \log a + \log b$
      - |
        $\log(ab) = \log a \cdot \log b$
      - |
        $\log(ab) = \log a + \log b$
      - |
        $\log(a^k) = (\log a)^k$
    answers: ["sha256:784a7cae6fed6799900932b66eb4c78924c2342d38a006efac262d8eb72ded1a"]
  - id: r-exponente-negativo
    tier: 1
    review: true
    prompt: |
      Calcula $5^{-2}$ como fracción «a/b».
    answers: ["sha256:f4c4a538074d228998c97603b1c8d66449c8b1988b36b9ea748fec04b2000a2c"]
  - id: r-discriminante-raices
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas soluciones reales tiene $2x^2 - 3x + 4 = 0$?
    answers: ["sha256:d672a08fb5a30716b2491014245168613c47556be4d9dd5fcac84e9f56b7447f","sha256:da51011090f54ab8be6d6e3e9f55a6c9ff266ca914437a9c76f0e04753de6364","sha256:faf7f8b57951ea0e66d63a0bc0dca9afcc792d059cb507ec545c9ac0defdc87c"]
  - id: r-inversa
    tier: 2
    type: expresion
    review: true
    vars: ["x"]
    prompt: |
      Halla la función inversa de $f(x) = 3x + 5$. Respuesta: $f^{-1}(x)$ como expresión en $x$.
    answers: ["sha256:7197b1f322758f62caaff450ff65d71b8d7b99735ddc67c9020577bbddea6a8c","sha256:f414dcd749a306ec48cb2f33d3d3a22396e841b706a3a0b0e0355fd954837106","sha256:3a3d94c7493dc3dad3930d2dcf47bb269d4effa6eccc210aee172c5ac78988ac","sha256:53ed0b5ba31cc826d8251a961945210959d1119e0ae778082078544394518c3f","sha256:8b6dbbedceb3d54c4578e568f77a570aba3a3205ef5e46736bc8d07d0e8c53a9","sha256:33c55a929e17e4f91f9ad9c357dbf20960a3c15cfa153afe17f5c0c92be4b076","sha256:18ca3ac99bfd5aa6019b05d8c70aa57f97031eefb1f35851a58ee489eaa204c3","sha256:2f6c73d733f353a5235e709d174b7d94a9152d066e57f756c1b1f68b5da1e615"]
  - id: r-ph-factor
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una disolución tiene pH $3$ y otra pH $6$. ¿Cuántas veces mayor es la concentración de $\mathrm{H}^+$ de la primera?
    answers: ["sha256:18f1f4e065e38a2a2e02114aefd03cd2277645b82c288c6a5c43ca5e127bd588","sha256:ccc7c9b69dce91deedf6c83e1d247ece8c3895d96daed137cef3f83a38b372a7","sha256:d0873457f132be434b0cf8676765211663df23ff732a32b18e7b5918f1a7c8b4"]
---

# Álgebra de secundaria: polinomios, radicales y logaritmos

El álgebra básica resolvía ecuaciones de primer grado. Aquí se ensancha a todo lo que sostiene la matemática posterior: los **polinomios** (y por qué se pueden
factorizar), las ecuaciones de segundo grado y superiores, los **radicales** y las potencias con exponentes cualesquiera, y los **logaritmos**, que permiten
resolver para el exponente y manejar escalas enormes (terremotos, sonido, acidez, interés compuesto). Es el nodo donde se aprende a **comprobar** cada solución,
que es una de las lecciones más valiosas de la matemática.

## Objetivos

Al terminar sabrás:

1. Operar con polinomios, dividirlos, factorizarlos y usar los teoremas del resto y del factor.
2. Resolver ecuaciones de segundo grado, bicuadradas, racionales y con radicales, y detectar soluciones falsas.
3. Manejar potencias de exponente entero y racional, y radicales; racionalizar.
4. Definir y usar logaritmos; resolver ecuaciones exponenciales y logarítmicas.
5. Resolver inecuaciones polinómicas y racionales con una tabla de signos.
6. Aplicar logaritmos a interés, acidez, sonido y sismos.

> [!question] Test de entrada
> 1. Factoriza $x^2 - 9$. 2. ¿Cuánto vale $2^{-3}$? 3. Resuelve $x^2 = 16$.
>
> Respuestas: $(x - 3)(x + 3)$; $\frac{1}{8}$; $x = 4$ o $x = -4$.

## 1. Para qué sirve

- **Modelar**: casi toda relación con curvatura (trayectorias, áreas, costes) es un polinomio o una exponencial.
- **Resolver el exponente**: «¿cuánto tarda en doblarse mi dinero?» es una ecuación con logaritmos.
- **Escalas**: pH, decibelios, magnitud de terremotos y brillo de estrellas son logarítmicas.
- **Fundamento del cálculo y de la informática**: la complejidad de algoritmos ($\log n$, $n^2$) y la criptografía usan exactamente estas ideas.

## 2. Polinomios

> [!practico]
> Un **polinomio** es una suma de potencias de $x$ multiplicadas por números, como $3x^2 - 5x + 2$. Son las fórmulas
> más sencillas que pueden «curvarse»: el área de un cuadrado de lado $x$ ($x^2$), el volumen de una caja ($x^3$), la
> altura de una pelota en el tiempo. Una **raíz** de un polinomio es un valor de $x$ que lo hace valer $0$: donde la gráfica
> corta el eje horizontal.
>
> La idea clave de esta sección: **conocer una raíz permite partir el polinomio en trozos más simples** (factorizar),
> igual que conocer un divisor de $360$ permite descomponerlo. Si $2$ es raíz, $(x - 2)$ es un factor.


Un **polinomio** en $x$ es $p(x) = a_n x^n + a_{n-1}x^{n-1} + \cdots + a_1 x + a_0$ con $a_n \ne 0$; $n$ es su **grado**. Se suman, restan y multiplican término a término.
El grado de un producto es la **suma** de grados: $(x^2 + 1)(x^3 - x)$ tiene grado $5$.

**División de polinomios.** Como con los enteros (ver [[mat-numeros-naturales]]): dados $A$ y $B \ne 0$ existen un **cociente** $Q$ y un **resto** $R$ únicos con
$A = B\,Q + R$ y $\text{grado}(R) < \text{grado}(B)$.

**Teorema del resto.** El resto de dividir $p(x)$ entre $x - a$ es $p(a)$.

> [!formal] Con rigor: demostración del teorema del resto
> *Demostración.* Como $x - a$ tiene grado $1$, el resto es una constante $r$: $p(x) = (x - a)Q(x) + r$. Sustituyendo $x = a$: $p(a) = r$. $\blacksquare$

**Teorema del factor.** $x - a$ divide a $p(x)$ si y solo si $p(a) = 0$; es decir, **$a$ es una raíz si y solo si $x - a$ es un factor.**

**Regla de Ruffini** (división entre $x - a$ con solo los coeficientes). **Ejemplo resuelto:** $x^3 - 7x + 6$ entre $x - 2$; coeficientes $1, 0, -7, 6$ y $a = 2$:

| | $1$ | $0$ | $-7$ | $6$ |
|---|:---:|:---:|:---:|:---:|
| $2$ | | $2$ | $4$ | $-6$ |
| | $1$ | $2$ | $-3$ | $0$ |

Se baja el primero; cada resultado se multiplica por $2$ y se suma al siguiente coeficiente. Cociente $x^2 + 2x - 3$ y **resto $0$**: $2$ es raíz. Entonces
$x^3 - 7x + 6 = (x - 2)(x^2 + 2x - 3) = (x - 2)(x + 3)(x - 1)$, con raíces $2, -3, 1$.

**Raíces racionales.** Si $p$ tiene coeficientes **enteros** y $\frac{r}{s}$ (irreducible) es raíz, entonces $r$ divide al término independiente $a_0$ y $s$ divide al coeficiente principal $a_n$.

> [!formal] Con rigor: demostración
> *Demostración.* Sustituyendo y multiplicando por $s^n$: $a_n r^n + a_{n-1} r^{n-1}s + \cdots + a_0 s^n = 0$. Todos los términos salvo el primero son múltiplos de $s$, luego $s \mid a_n r^n$;
> como $\gcd(r, s) = 1$, $s \mid a_n$. Análogamente $r \mid a_0$. $\blacksquare$ 

Con ello se acota la búsqueda: para $2x^3 + 3x^2 - 8x + 3$ las candidatas son
$\pm1, \pm3, \pm\frac12, \pm\frac32$. Probando $x = 1$: $2 + 3 - 8 + 3 = 0$. Ruffini da $2x^3 + 3x^2 - 8x + 3 = (x - 1)(2x^2 + 5x - 3) = (x - 1)(2x - 1)(x + 3)$.

**Teorema fundamental del álgebra** (Gauss; enunciado, la demostración requiere análisis): todo polinomio de grado $n \ge 1$ tiene exactamente $n$ raíces **complejas** contadas con multiplicidad
(se verán los complejos en un nodo posterior). Un polinomio **real** de grado impar tiene **al menos una raíz real**.

## 3. Ecuaciones de segundo grado y más

> [!practico]
> Una ecuación de segundo grado pregunta «¿qué número, al elevarlo al cuadrado y combinarlo así, da cero?». La fórmula de
> abajo responde siempre, y el **discriminante** (lo que hay dentro de la raíz) avisa antes de calcular cuántas soluciones
> hay. Y una advertencia práctica que vale para todo el nodo: algunas operaciones (elevar al cuadrado, multiplicar por algo
> que contiene $x$) pueden **colar soluciones falsas**, así que cada solución se comprueba en la ecuación original.


Para $ax^2 + bx + c = 0$ ($a \ne 0$), completando el cuadrado:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} .
$$

El **discriminante** $\Delta = b^2 - 4ac$ decide: $\Delta > 0$, dos raíces reales; $\Delta = 0$, una doble; $\Delta < 0$, ninguna real.

**Relaciones de Cardano-Vieta.** Si $\alpha, \beta$ son las raíces, $x^2 + \frac{b}{a}x + \frac{c}{a} = (x - \alpha)(x - \beta) = x^2 - (\alpha + \beta)x + \alpha\beta$, de donde

$$
\alpha + \beta = -\frac{b}{a}, \qquad \alpha\beta = \frac{c}{a} .
$$

Permiten calcular expresiones **sin hallar las raíces**: $\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta$ y $\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)$. Para
$x^2 - 5x + 2 = 0$: $\alpha^2 + \beta^2 = 25 - 4 = 21$.

**Ecuaciones bicuadradas** ($ax^4 + bx^2 + c = 0$): se hace $t = x^2$ y se resuelve la cuadrática en $t$, descartando $t < 0$.

**Ecuaciones racionales.** Se multiplica por el denominador común y **se excluyen los valores que lo anulan**. **Ejemplo resuelto:** $\dfrac{1}{x - 1} + \dfrac{2}{x + 1} = 1$ ($x \ne \pm1$):
$(x + 1) + 2(x - 1) = x^2 - 1 \Rightarrow x^2 - 3x = 0 \Rightarrow x = 0$ o $x = 3$. Comprobación: $x = 0$: $-1 + 2 = 1$ $\checkmark$; $x = 3$: $\frac12 + \frac24 = 1$ $\checkmark$.

**Ecuaciones con radicales.** Elevar al cuadrado **no es reversible**: de $a = b$ se pasa a $a^2 = b^2$, pero $a^2 = b^2$ admite también $a = -b$. Por eso aparecen **soluciones falsas**.
**Ejemplo resuelto:** $\sqrt{2x + 3} = x$: elevando, $2x + 3 = x^2$, $x^2 - 2x - 3 = 0$, $x = 3$ o $x = -1$. Comprobación: $x = 3$: $\sqrt{9} = 3$ $\checkmark$; $x = -1$: $\sqrt{1} = 1 \ne -1$
**falsa**. Solución: $x = 3$.

## 4. Potencias y radicales

> [!practico]
> Las potencias con exponente negativo o fraccionario no son un capricho: se definen para que **las reglas de siempre
> sigan funcionando**. Si $2^3 \cdot 2^{-3}$ ha de ser $2^0 = 1$, entonces $2^{-3}$ tiene que ser $\frac{1}{8}$. Y si
> $9^{1/2} \cdot 9^{1/2}$ ha de ser $9^1 = 9$, entonces $9^{1/2}$ es el número que multiplicado por sí mismo da $9$: la raíz
> cuadrada, $3$.


Para $a > 0$ y exponentes enteros: $a^m a^n = a^{m+n}$, $(a^m)^n = a^{mn}$, $a^0 = 1$ y $a^{-n} = \dfrac{1}{a^n}$. Para que las leyes sigan valiendo con exponentes fraccionarios se **define**

$$
a^{1/n} = \sqrt[n]{a}, \qquad a^{m/n} = \bigl(\sqrt[n]{a}\bigr)^m .
$$

Entonces $8^{2/3} = (\sqrt[3]{8})^2 = 4$ y $27^{-1/3} = \frac{1}{3}$. **Cuidado:** $\sqrt{a^2} = |a|$ (no $a$), y $\sqrt{a}\,\sqrt{b} = \sqrt{ab}$ solo si $a, b \ge 0$.

**Racionalizar** es quitar radicales del denominador usando el conjugado: $\dfrac{6}{\sqrt{5} - \sqrt{2}} = \dfrac{6(\sqrt{5} + \sqrt{2})}{(\sqrt5)^2 - (\sqrt2)^2} = \dfrac{6(\sqrt5 + \sqrt2)}{3} = 2(\sqrt5 + \sqrt2)$.

Que $\sqrt 2$ no es una fracción (y por qué hacen falta los números reales) se demuestra en [[mat-numeros-reales]].

## 5. Logaritmos

> [!practico]
> El logaritmo responde a la pregunta inversa de la potencia: «¿**cuántos doses** hay que multiplicar entre sí para llegar a
> $64$?» Seis: $\log_2 64 = 6$. Sirve para manejar cantidades que van de lo minúsculo a lo enorme, contando
> **ceros** en vez de escribirlos: un terremoto de magnitud $7$ libera unas $32$ veces más energía que uno de $6$, y una
> disolución de pH $3$ es diez veces más ácida que una de pH $4$. Y responde a preguntas de tiempo: «¿en cuántos años se
> duplica mi dinero al $4\,\%$?».


Si $a > 0$, $a \ne 1$ y $x > 0$, el **logaritmo en base $a$** de $x$ es el exponente al que hay que elevar $a$ para obtener $x$:

$$
\log_a x = y \iff a^y = x .
$$

Por tanto $\log_2 64 = 6$ ($2^6 = 64$), $\log_{10}1000 = 3$ y $\log_a 1 = 0$. El logaritmo es la **función inversa** de la exponencial (sus gráficas son simétricas respecto de la recta $y = x$). Solo existe para
$x > 0$. Hay dos bases habituales: $\log_{10}$ y el **logaritmo neperiano** $\ln = \log_e$, con $e \approx 2{,}71828$.

**Propiedades** (con $x, y > 0$):

$$
\log_a(xy) = \log_a x + \log_a y,\quad \log_a\frac{x}{y} = \log_a x - \log_a y,\quad \log_a x^k = k\log_a x,\quad \log_b x = \frac{\log_a x}{\log_a b} .
$$

> [!formal] Con rigor: por qué el logaritmo convierte productos en sumas
> *Demostración del producto.* Sean $u = \log_a x$ y $v = \log_a y$, es decir $x = a^u$ e $y = a^v$. Entonces $xy = a^u a^v = a^{u + v}$, luego $\log_a(xy) = u + v$. $\blacksquare$ Las demás
> siguen igual de las leyes de las potencias. El **cambio de base** permite calcular cualquier logaritmo con la calculadora: $\log_5 20 = \frac{\ln 20}{\ln 5} \approx 1{,}861$.

**Ecuaciones exponenciales.** $3^{2x - 1} = 81 \Rightarrow 2x - 1 = 4 \Rightarrow x = \frac52$. Si no se pueden igualar las bases, se toman logaritmos: $5^x = 20 \Rightarrow x = \log_5 20 \approx 1{,}861$.

**Ecuaciones logarítmicas.** Se agrupan los logaritmos, se pasa a forma exponencial y **se comprueba el dominio**. **Ejemplo resuelto:** $\log_2 x + \log_2(x + 2) = 3$. Entonces $\log_2[x(x + 2)] = 3$,
$x(x + 2) = 8$, $x^2 + 2x - 8 = 0$, $x = 2$ o $x = -4$. Como $\log_2(-4)$ no existe, **solo vale $x = 2$** ($\log_2 2 + \log_2 4 = 1 + 2 = 3$ $\checkmark$).

### Aplicaciones

- **Interés compuesto** (ver [[mat-proporcionalidad-porcentajes]]): $C(1 + r)^n = 2C$ da $n = \dfrac{\ln 2}{\ln(1 + r)}$. Al $4\,\%$: $\frac{0{,}6931}{0{,}03922} = 17{,}67$ años (la regla del $72$ da $18$).
- **Acidez:** $\text{pH} = -\log_{10}[\text{H}^+]$. Un zumo de limón con $[\text{H}^+] \approx 10^{-2}$ mol/L tiene pH $2$; el agua pura, $10^{-7}$ (pH $7$). **Un punto de pH es un factor $10$ de concentración.**
- **Sonido:** $\beta = 10\log_{10}(I/I_0)$ dB (ver [[fis-ondas-calor-fluidos]]).
- **Terremotos:** la energía crece como $10^{1{,}5M}$: **un punto de magnitud multiplica la energía por $10^{1{,}5} \approx 32$**; $2$ puntos, por $1000$.
- **Desintegración radiactiva:** $N = N_0\,2^{-t/T}$; el tiempo para llegar a una fracción $f$ es $t = T\log_2(1/f)$.
- **Informática:** $\log_2 n$ es, aproximadamente, el número de bits de $n$ (exactamente, $\lfloor\log_2 n\rfloor + 1$) y el de pasos de una búsqueda binaria.

## 6. Inecuaciones polinómicas y racionales

> [!practico]
> Para saber dónde un producto es positivo basta saber el signo de cada factor: «más por más», «menos por menos»… Las
> raíces de los factores dividen la recta en trozos, y en cada trozo el signo no cambia. Se hace una tabla y se leen los
> trozos que interesan.


Se pasa todo a un lado, se **factoriza** y se estudia el **signo de cada factor** en una recta numérica dividida por las raíces.
**Ejemplo resuelto:** $x^2 - 2x - 3 > 0$. Raíces: $x = -1$ y $x = 3$; $(x + 1)(x - 3) > 0$. Signos: en $(-\infty, -1)$ ambos factores son negativos, producto $+$; en $(-1, 3)$, producto $-$; en
$(3, \infty)$, $+$. Solución: $x < -1$ o $x > 3$.
**Racional:** $\dfrac{x - 1}{x + 2} \ge 0$: numerador se anula en $1$, denominador en $-2$ (**excluido**). Signos: $x < -2$: $(-)/(-) = +$; $-2 < x < 1$: $-$; $x > 1$: $+$. Solución: $x < -2$ o $x \ge 1$.
**No** se multiplica por la expresión del denominador sin conocer su signo.

## 7. Funciones compuestas e inversas

> [!practico]
> **Componer** es encadenar máquinas: la salida de una es la entrada de la siguiente (primero quitas el IVA, luego aplicas
> un descuento). La **inversa** es la máquina que deshace: si una pasa de grados Celsius a Fahrenheit, su inversa pasa de
> Fahrenheit a Celsius.


La **composición** $(g \circ f)(x) = g(f(x))$ aplica primero $f$ y luego $g$. Una función **inversa** $f^{-1}$ deshace a $f$: $f^{-1}(f(x)) = x$. Para hallarla: se escribe $y = f(x)$,
se **despeja $x$** y se intercambian los nombres. Si $f(x) = 2x - 3$: $y = 2x - 3 \Rightarrow x = \frac{y + 3}{2}$, luego $f^{-1}(x) = \frac{x + 3}{2}$. Exponencial y logaritmo son inversas entre sí.

## 8. Errores típicos

- $(a + b)^2 = a^2 + b^2$ y $\sqrt{a^2 + b^2} = a + b$ (**ambas falsas**).
- No comprobar las soluciones tras elevar al cuadrado, multiplicar por una expresión con $x$, o agrupar logaritmos ($\log a + \log b \to \log ab$ amplía el dominio).
- $\log(a + b) = \log a + \log b$ (**falso**; el logaritmo convierte **productos** en sumas).
- Olvidar que el argumento de un logaritmo debe ser positivo.
- Simplificar una fracción «tachando» sumandos en lugar de factores.
- En una inecuación, multiplicar por un negativo sin invertir el sentido.

## Repaso: lo que debe quedarte dentro de un mes

1. Teorema del resto: $p(a)$ es el resto de dividir entre $x - a$; raíz $\iff$ factor.
2. Fórmula cuadrática; Vieta: $\alpha + \beta = -b/a$, $\alpha\beta = c/a$.
3. Elevar al cuadrado puede crear soluciones falsas: **comprobar**.
4. $\log_a x = y \iff a^y = x$; $\log(xy) = \log x + \log y$; cambio de base.
5. Inecuaciones: factorizar y tabla de signos; excluir los ceros del denominador.

## Siguiente

La [[mat-trigonometria|trigonometría]] amplía las funciones al estudio de ángulos y ondas, y la
[[mat-geometria-analitica|geometría analítica]] une el álgebra con las figuras.
