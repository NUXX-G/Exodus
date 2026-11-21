---
id: mat-expresiones-algebraicas
title: "Expresiones algebraicas: lenguaje algebraico, monomios, polinomios, operaciones, productos notables y factor común"
area: matematicas
trunk_level: 3
prerequisites: [mat-numeros-enteros, mat-fracciones, mat-potencias-raices]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 11: «Álgebra», secciones 1.1-1.4 (letras y números, coeficiente y parte literal, valor numérico, equivalencia y simplificación). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2011%20algebra.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 4: «Expresiones algebraicas. Polinomios. Productos notables», secciones 1 (expresiones algebraicas), 2.1-2.3 (monomios, polinomios, suma y producto) y 3.4 (igualdades notables). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/04%20Polinomios%203.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 10: «Álgebra». Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_10_algebra.pdf"
hints:
  - "Concepto: una letra representa un número cualquiera; con ella se escriben reglas generales. Solo se suman monomios semejantes (misma parte literal). Al multiplicar se aplica la propiedad distributiva término a término, y los productos notables son atajos de esa distributiva."
  - "Herramienta: para comprobar una simplificación o un desarrollo, da un valor sencillo a la letra (x = 2, por ejemplo) en la expresión de partida y en la final: deben dar lo mismo."
  - "Documentación: Marea Verde 1.º ESO cap. 11 (sección 1); 3.º ESO cap. 4 (secciones 1, 2 y 3.4)."
exercises:
  - id: valor-numerico
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula el valor numérico de $P(x) = {{p}}$ para $x = {{x}}$.
    variants:
      - values: {"p":"x^{2} - 2x + 3","x":4,"xs":4}
        answers: ["sha256:6a60aeb74cddfba86bce5bc024e21c91a89f69f0dd06b5019586f0fdb188b116","sha256:7793732093676c7b27bfb5003984e0aa34de6909929179d25b0f78bf923eb929","sha256:f9e2da7775647e19773bc312065f4b4df5b69a8ede14b3a3d28f9c311cc74391"]
      - values: {"p":"x^{3} + 2x^{2} - 5","x":"(-2)","xs":-2}
        answers: ["sha256:f2e3c8cd3ed1a8b5afd089e99e78c39acc6e5c090b201f852beaf3f7700b32aa","sha256:8df3f36fc647313d16a213ab99341f0754c5980fcd7ad8ff9568c913d02e46d2","sha256:8fb095cbd50bbb89656ba4a0fd6551e0903b9cd2b79a07d43b13a7ccadb8d20b"]
      - values: {"p":"x^{3} + x^{2} + x + 1","x":3,"xs":3}
        answers: ["sha256:e525051a04c0a41308945dea07bfcae05a0f86b60863ce041d9b39f5102814de","sha256:f067da38f5c384258b0ebe108e5d2fc3a632c1c9c98120c3a524651ec5731b12","sha256:5bb144978d92e18d4b05a64cb4f5df4153c1757e990a62b5dd7bc9d90357e508"]
      - values: {"p":"-4x + 7","x":"(-6)","xs":-6}
        answers: ["sha256:0fcc4d3c01a14f1f3c2796c86391854c4ffc526d6b9ad3ded736c553861c3576","sha256:cfb12846bb361d32cb0c4a10a85730fd68e453d5779634fd3b9c0b02ba71bcce","sha256:c054bd6d851dff9dd30e2fe3f1248916c565c75d956356d6a146e9fb5cc6fb15"]
      - values: {"p":"-x^{3} + 3x","x":2,"xs":2}
        answers: ["sha256:0138ad37f8f5cfcd995df6fba44948b910b8b8e03c779e0bdc4f1daa8262a6ab","sha256:e7c628f99577dc48c2b6c823fc811d28f149a23a7534c6b1d30dc180504d9fc8","sha256:56873eca178beee15a695916be179c7a53ebd415827b633b7aba25f456ba43c1"]
      - values: {"p":"x^{4} - x + 2","x":"(-1)","xs":-1}
        answers: ["sha256:f808010635bcc6692d1ce3dd0770bce8ec92ac37acb29a223d6fe63be7c25d38","sha256:8b3cd6098ef84d84e7b0260fb16dbe94f2003b9a6fffd980f3871fa0f44e168c","sha256:e2f3cc9d5d751447b376a1208ddad6656bb0c530aa695f0230004b656ab407a9"]
  - id: grado-y-coeficiente-principal
    tier: 1
    prompt: |
      ¿Cuál es el grado del polinomio ${{p}}$ y cuál es su coeficiente principal (el del término de mayor grado)? Respuesta:
      `grado;coeficiente`.
    variants:
      - values: {"p":"7x^{3} - 3x^{2} + 4"}
        answers: ["sha256:caaabb8be65085cf2b08b76f8dd7e9c85cd21ef9be7f0c7ac781f31e2c23bd70"]
      - values: {"p":"2x - 1"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
      - values: {"p":"-6x^{4}"}
        answers: ["sha256:c5d4fe9a89dea9156eb3d2afa8138b9799fd326eb3c318b0a8a7c1624293028a"]
      - values: {"p":"2x^{5} + 9x^{3} + x^{2} + x + 5"}
        answers: ["sha256:d5e99f33ed154aa11a2b8779e1bc7899d8e3139d700bee2cb1569a03a88411a4"]
      - values: {"p":"-x^{3} - 8x + 3"}
        answers: ["sha256:f2f65cb33cc34b632dc25dba55cd86f9cfb769b206ba6fb4561982e69fd4a6ad"]
      - values: {"p":"x^{6} + 10"}
        answers: ["sha256:18143c55023a0047def459854c19ba2234b3790ad71367bfb21e1a5778df626b"]
  - id: reducir-semejantes
    tier: 1
    prompt: |
      Reduce términos semejantes en ${{e}}$ hasta dejarlo como $ax + by$. Respuesta: `a;b`.
    variants:
      - values: {"e":"5x - 2y + 3x + 7y - x - 4y"}
        answers: ["sha256:43bc2a0c49952d30f7f66177268b363d564635c0cdca978aa6a3067ef8b1b92b"]
      - values: {"e":"2x + 3y - 6x + y + 4x - 9y"}
        answers: ["sha256:2abb8b563dfcae274aef1cb5beabd35037e2364ce8db630b8817bab16c4d0223"]
      - values: {"e":"x + y + x + y - 3x + 5y"}
        answers: ["sha256:9d74703b0aec8b67b092c9edf80fe07743e626aece5ceb1e6641008d0067d009"]
      - values: {"e":"-7x + 2y + 10x - 2y + 4x"}
        answers: ["sha256:9b82d697abd7dbaf0ad22354ddba36b6ffaa7d6ca257e1b4226745d8ca020d8f"]
      - values: {"e":"8x - 5y - 8x + 6y + 3x + 3y"}
        answers: ["sha256:2b2ae0ddb1ad07ad30f68dbf8869395377eb9bc264d7da773d28f5934f0f5e59"]
      - values: {"e":"4y + 9x - y - 2x - 2y"}
        answers: ["sha256:43bc2a0c49952d30f7f66177268b363d564635c0cdca978aa6a3067ef8b1b92b"]
  - id: sumar-polinomios
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Sean $P(x) = {{p}}$ y $Q(x) = {{q}}$. Calcula $P(x) {{op}} Q(x)$. ¿Cuál es el coeficiente de $x^{{{k}}}$ en el resultado?
    variants:
      - values: {"p":"2x^{2} - 3x + 1","q":"x^{3} - 2x^{2} + 5x + 4","op":"+","k":2}
        answers: ["sha256:5524d6c5a4b8d6e00b8833a0f0398f34ae7a8e0cda551642debd9552acfa40d0","sha256:d6037c80c9fa047f1baacc60fff7cf0f002c5d0394328fe82a7b096ed18817f7","sha256:5b49d06ff167048a152d28d8b843aea701673adfc74884316d9ea61cb37b3cbb"]
      - values: {"p":"-x^{2} + 6x","q":"3x^{2} - 6x + 2","op":"-","k":1}
        answers: ["sha256:ee1edf0cc7a65bc459d2eb94cdc3dd0a8cf8525b6e259f73469a634080c457fa","sha256:0c0b16b95ecd981ce646dc39f8d95a218a39161119dd3663b3da4043503249cd","sha256:b748eb5613c094f64b0b01caecab7da4daa6f52a55b03a7c11c42b54d7ac6309"]
      - values: {"p":"2x^{3} + 5","q":"4x^{2} + x - 5","op":"+","k":3}
        answers: ["sha256:9a4bc0ecb76339cfa5066e7649036d0d9b56a437eaf834c36e8bdb38d5831c48","sha256:c61721dc79f83ec226469fb43d197cdeef908836feabdd1c49c80350a47188f3","sha256:2243339de67233085c400ab9494ff3caed877e365e7eebe67b379d304f24ab9c"]
      - values: {"p":"3x^{2} + 3x + 3","q":"3x^{2} + 2x + 1","op":"-","k":2}
        answers: ["sha256:4f3ce603f598188b7bf5d08279b0a0676946442edc1427f81c54c67477dfa0c0","sha256:0b88cac5d943c18745d752fb608de2631df4df8d1c967082cc85b1534331f7fb","sha256:9cbbfdfb935e583b46406dcf71b5a7c4bd4e938ed67d29211d652183d56a8739"]
      - values: {"p":"x^{3} + 4x - 2","q":"-x^{3} + x^{2} - 4x + 7","op":"+","k":1}
        answers: ["sha256:6a673c3bd0d9d28b9bd4d69bc259d3f20c15c90b5b25a9f50243b70937e55219","sha256:810011f0f949391963343472038fb30d739ed996634f81216cc599a8f5b40f15","sha256:38ee858360b4c401306bcdfc00ec287907293560d4c3a77071b1580498ea2c21"]
      - values: {"p":"-5x^{2} + 1","q":"-5x^{2} + x","op":"-","k":0}
        answers: ["sha256:6830782fc99d005b12aae575f3cb1e6db3d577ee25d3efd81b1f4e168a712776","sha256:97001dcecb348ef37a8489d477bd54fbfef0027292cb2cfe8aa81472a69dc70b","sha256:4c737f0de56bd8ff013efa9a1776c83331764d2cfa0bceb3dca5112f425c09ca"]
  - id: producto-de-monomios
    tier: 1
    prompt: |
      Calcula ${{m1}} \cdot {{m2}}$. Respuesta: `coeficiente;exponente`.
    variants:
      - values: {"m1":"3x^{2}","m2":"(-4x^{5})"}
        answers: ["sha256:dd71eec4ac2250a873a2e69781b8ef090c504b293f03f7576fece98ccdab6461"]
      - values: {"m1":"-2x","m2":"(-6x^{3})"}
        answers: ["sha256:055aa4a54b97dc2bec64576d61097fd32de71d80b808ad110de40e987d4efdc5"]
      - values: {"m1":"5x^{4}","m2":"2"}
        answers: ["sha256:f9cff6fb1acea9d8dfa8fe5a5a0ef0e584f36099f5fd1b91d620d5091c23494c"]
      - values: {"m1":"-1x^{7}","m2":"9x^{2}"}
        answers: ["sha256:4d21efeed5dc7830f35d32da87e173b133754114a0195a6ffeccdb8dab67fb09"]
      - values: {"m1":"8x^{3}","m2":"(-1x^{3})"}
        answers: ["sha256:7b2d49cef6b2e8ca5b402caf780c5c477fe2507243b46ec688e870cdbe9274dc"]
      - values: {"m1":"6x","m2":"6x"}
        answers: ["sha256:7eef738a549fdd5f5d8bfc2a9e059a3ecb8a275afc92650d62b3152ba570eb09"]
  - id: producto-de-polinomios
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Multiplica $({{p}})\,({{q}})$. ¿Cuál es el coeficiente de $x^{{{k}}}$ en el resultado?
    variants:
      - values: {"p":"2x + 3","q":"4x^{2} + x - 1","k":2}
        answers: ["sha256:39d4f9138d55cf25407c60d7923ca4aac7ab2f112a3875692170216ab7c966e7","sha256:b5ece7c365e58e54b4e8e159dc85cab547a1f6bae225f8acc2531d1d1129a5ab","sha256:5e3c5ff716985592125666d9537b7c98771d5c70a13ef7634907ca802edb94e1"]
      - values: {"p":"x^{2} - x + 1","q":"x + 1","k":3}
        answers: ["sha256:6a12b084e497e9fd95b63ccfd279cbb9556c52e939ef2f12d1a14cc33ebc81e5","sha256:a9707afbab33e50362da44d01591dea7d34df845d10066fe53ba06cf95d1a122","sha256:e500a5772d5ff41d9dde6adea36a5ae316ada843cbd92323b1c7db9060e07afb"]
      - values: {"p":"-3x^{2} + 2","q":"4x + 5","k":1}
        answers: ["sha256:c669d632470437d8d9e77b4102c730e19ca89645c67e39d8f8acac38570e00ce","sha256:3c589b5f5d50e171a5bda0406fce055b5e94978a09855e320ad2c78d822c07d2","sha256:b3d0eddb0d83104543136f41d7ae36e1035bd9d9b119378c3657a6dfdee6ffdd"]
      - values: {"p":"x - 4","q":"x - 4","k":1}
        answers: ["sha256:9bf0b6ca941242932fb648caa29b739b2d47f6fd653a49b10936624d934decd7","sha256:3e47b4eda67a4c55c46257a2e601cdb83bcf164a3814cf70850c95a7d890c180","sha256:f7c53a4673ce0b411ca3270801935359cfc3bd951e2a5575a9b1be1cb81e6f38"]
      - values: {"p":"3x^{2} + 2x + 1","q":"x^{2} + 2x + 3","k":2}
        answers: ["sha256:e89b4f8550bbc8c94c711ba8a79c8af7ff6bf3eb797aced94ef6124bfb7d6aff","sha256:35727d7f55616f4812c42ea5b920f8f598f3bc996c3387d28252792a0d753983","sha256:f6483fb6c02e7796e222f8310e5613ee771646d0d1f5782f196318f6a37e641d"]
      - values: {"p":"x^{2} + x","q":"x^{2} - 3x + 2","k":2}
        answers: ["sha256:d45e6aa1ded3681016bb70e293af7b086d1ccbbce6fe242e3d7b24ebf20dde88","sha256:2e027f01c3c21c65cd950b331ad0629392649e76644dacbfb3ec3281ca3217ec","sha256:6ad89c985165a5a3cf68a15611dd21cb096c47c9e3ca2ccd4849d6b3cf5fc9ab"]
  - id: cuadrado-de-un-binomio
    tier: 2
    prompt: |
      Desarrolla $({{b}})^2$ y escribe el resultado como $Ax^2 + Bx + C$. Respuesta: `A;B;C`.
    variants:
      - values: {"b":"2x + 5"}
        answers: ["sha256:dd42203aeaa50a7138ef3431a63089891b2a1f14bf65d11b6398aaaf73e2334c"]
      - values: {"b":"3x - 4"}
        answers: ["sha256:4b42b7fdac622fe686db2670542ee36033443516b5f114dc4830e71f4822087f"]
      - values: {"b":"x - 7"}
        answers: ["sha256:289e21e3bbc88ffb53a6b75d8a655aaa336d77f953dfc3fc848b7159cf6687bc"]
      - values: {"b":"5x + 1"}
        answers: ["sha256:e24eb8e427c0c5768207bc2a22c33ec1153c40f6928f709535db3b1444da4360"]
      - values: {"b":"4x + 3"}
        answers: ["sha256:246a86cd38ff21db83ed3e770dece6289ee788367c7b7fcfb32de5f0e2467ded"]
      - values: {"b":"6x - 1"}
        answers: ["sha256:5417c0d54916203298bc04288f9116c76309c28c5fa5d6d321da4062aebbfc7d"]
  - id: suma-por-diferencia
    tier: 2
    prompt: |
      Desarrolla $({{a}}x + {{b}})({{a}}x - {{b}})$ como $Ax^2 + C$. Respuesta: `A;C`.
    variants:
      - values: {"a":3,"b":5}
        answers: ["sha256:50fcea11be81a58cadd831a53b9dac928ba0a4ee2bf0366330d3aa1498785bc6"]
      - values: {"a":2,"b":9}
        answers: ["sha256:d3c7114366b611748c583a230e9458705aa6752fcc70eef803578054252b20a3"]
      - values: {"a":7,"b":1}
        answers: ["sha256:cb9778a586baedfbdcd41bb1bdf2c4d794126e72e90ef97bcdc831bf22824b75"]
      - values: {"a":5,"b":6}
        answers: ["sha256:44bf294b016799ecffce85b7dccc4f5dfc63e4aca0497721bba1724e12587f86"]
      - values: {"a":10,"b":3}
        answers: ["sha256:693442cdf0b47cc8168c529c8a90175f19d30ff6ad557e8ab2e74a677ba4916d"]
      - values: {"a":4,"b":11}
        answers: ["sha256:1730c9891c3da02e5455339804a2c1019b50ddfda0d46e7c7be7912252a618e7"]
  - id: trinomio-cuadrado-perfecto
    tier: 2
    type: numero
    sig: 10
    prompt: |
      El trinomio ${{p}}$ es el cuadrado de un binomio $(x + k)^2$. ¿Cuánto vale $k$?
    variants:
      - values: {"p":"x^{2} + 12x + 36"}
        answers: ["sha256:a0fd4da01fa22eedfa86eea5795b1276247740acd6e8984b0ac06a46d7c5bd1f","sha256:c2919e0fb6d7a28d5f25ad2e86826f859763e521af099ddb13cab62fc1645226","sha256:91de01644e4dd7b89fec202464264ca8032737ffb750b3424b2090f00700905c"]
      - values: {"p":"x^{2} - 18x + 81"}
        answers: ["sha256:b73394509307440d3c4234b5ed6c6d072b5f22b58324c08beadf0a58b078fafa","sha256:4e0c4c908b64d6051b44dfa7afffe3440863345b751b8a7950cd833c957f175c","sha256:037d2c63526dbd6744475a08c389ef33f84646a4c13e8e0e2992dbad8146c1ee"]
      - values: {"p":"x^{2} + 22x + 121"}
        answers: ["sha256:0c13a7b7e2b0cc6cf7f7e8fb8eac4defe123e1959fe86e6e758f78b959ec850f","sha256:04eaaf10a8fe6f24c335e22f272deabfc47e1acc9e66803662feb92b979f3c35","sha256:09afe84c9998512e180dda8cfd50064f04d32a1187f4dedc65893f2ad8245d6c"]
      - values: {"p":"x^{2} - 8x + 16"}
        answers: ["sha256:6931a356b7297985e8aff05b1c6ea19c0168182c6b3432c56c208cac231ea959","sha256:af25802389526defc27b4a1c82a4f197753d60be098ae8fd3350e401c7dddc9f","sha256:2a1b230755a479455b4ee6f60104b8f2bbf8a38d1506c1d58ad8b05b66f3b55a"]
      - values: {"p":"x^{2} + 30x + 225"}
        answers: ["sha256:78355ff3b309622950f6a811705d64fcce1ce86d2aaaa4a987d84f08b62139da","sha256:965f6ac56cff465f73cf1d155f18945a078ea90b7634559030a5b3e353760f06","sha256:f2f3bcb1050517d3c473096c216048afd0615c44ff298bc88ed4aa31a2770ba8"]
      - values: {"p":"x^{2} - 26x + 169"}
        answers: ["sha256:5936b1575260f998e4cde22f458250a051928108d3607b2b8dba717b94625494","sha256:d0d95fd80f9425771cf5597bb3efa7baf8b8236d5480a09bf505375a7aa1ba27","sha256:a20b801e3eda858890837f153746e8af2098dff5648dc1357d5662e3475db302"]
  - id: sacar-factor-comun
    tier: 2
    prompt: |
      Saca el máximo factor común de ${{e}}$, escrito como $c\,x^{e}$ con $c > 0$. Respuesta: `c;e`.
    variants:
      - values: {"e":"12x^{4} + 18x^{3}"}
        answers: ["sha256:6b357b3c86c3903ece5ea3e82fd8966149e323f2ecf83e3571195b4bf3113154"]
      - values: {"e":"15x^{5} - 25x^{2}"}
        answers: ["sha256:d5e99f33ed154aa11a2b8779e1bc7899d8e3139d700bee2cb1569a03a88411a4"]
      - values: {"e":"8x^{3} + 20x^{1}"}
        answers: ["sha256:c7e89f720edbab31d81f8c8d658b9db15ea46f4672591510a638b778192b2286"]
      - values: {"e":"21x^{6} + 14x^{4}"}
        answers: ["sha256:4ed08ab2fe8eeb8bb16ce77809d9a8a75416943ea07a687da79178578f78d41b"]
      - values: {"e":"-9x^{2} + 6x^{5}"}
        answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
      - values: {"e":"30x^{7} + 45x^{5}"}
        answers: ["sha256:9bffccc0beec5d4b6fd4a5808d001ee9a8c258dc5ccac1edb3ba43ad2fc19863"]
  - id: calculo-mental-notables
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula de cabeza, usando un producto notable: ${{e}}$.
    variants:
      - values: {"e":"(100 + 4)^2"}
        answers: ["sha256:98bb4e5c3676299c416ba09eb96c5719ec0205fd1e9c2a0942d23bc2c4cca10b","sha256:8ea76c614aa9b57a62c47890b08ca5d080537c5747d100d8a8a1d249ad078814","sha256:2ef9cde00c8873cabe91a2a24f362923a7ebae583ec229a6d98dc9ab7d84940d"]
      - values: {"e":"98^2"}
        answers: ["sha256:bec99e6db471f6449bfb5c402aa4bf866ca386498afbcc76259f7d12c9a9760b","sha256:90dd85ec869829c23bebf74a1626a4f8a42096b294537080724ce17770ce9233","sha256:e6f5622284803bbf34568a34600f398f1d3ae8e6a39f90806ccd832e6b894abb"]
      - values: {"e":"52 \\cdot 48"}
        answers: ["sha256:a9f3a46a0b5b75a8dcb0be3e98e778b189713eb18462f298a3b049bad337e89e","sha256:41d50df3fbaf21b4aa3e2896da8f7e63d20f78d2ff0413786f629200469972f5","sha256:1215ec07451a22c1fc18291b8a353a6e406ff11a37835563a531914b57eeded0"]
      - values: {"e":"(200 - 1)^2"}
        answers: ["sha256:0fd96e364b339feec5a03bbd11cd4cc82fb9c40bc3a53d57bbbaced8ead7d01a","sha256:42c15cd4f7be0352341cae64dee071870fda138b4dbaffc8c7e5dae002f4e10b","sha256:125abecf4ddc9050d204fed5d6666d378b49f88b967897ad54970060b2b202c7"]
      - values: {"e":"61 \\cdot 59"}
        answers: ["sha256:7b048fc080e4b7aa8aa34d10ca3b6c03c5ba7295f6f1954c39321c6996458abf","sha256:c52bf89a6968b2e1f710387c6f85e84691d97abe8764c40693847a0165685d56","sha256:5bc487809f4cbf39cfd734996abfc2ec2d157a311876b19333b529b7c9999698"]
      - values: {"e":"1\\,001^2"}
        answers: ["sha256:fc4d72f3e07e7746511e9f976351665364eecae2647a6d2e9da188ef9954341d","sha256:0c09c9678b1ea24439221ed27db91dfa6db2767632f2ca34ac88b0e0f852ea7b","sha256:7ffb954a65c39bd8f149b8e828b85a4b5797f7f04bcd6c9c378087578bd9a858"]
  - id: area-con-letras
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un rectángulo mide ${{l}}$ de largo y ${{a}}$ de ancho. Escribe su área como un polinomio y calcula su valor para $x = {{x}}$.
    variants:
      - values: {"l":"2x + 3","a":"x + 1","x":4}
        answers: ["sha256:a3affb7a8e4072a66b89299ceacc4e1cddf67fa84208a7d1c31256aaea045972","sha256:62c727c882410aa6f98135944e5bbecdc82f23bd6276a8c8fe46bc6509561281","sha256:a3881c218e65cd6196d847928f1463238c6b4d2969df0aff15e62e844e2fbb75"]
      - values: {"l":"5x + 1","a":"2","x":3}
        answers: ["sha256:99f2352edfdf6e0b6f28d197faf101c10b651f0ef4c894dafe10a197761ea1bd","sha256:fcf7dcd3f514ae1e9f309ef954ae06b61505cf7b7b427999979ba9eb01ef2284","sha256:0c0160358c70ec9a3dcf0331d9a535a19370e9083e43da326e959aea88d86b42"]
      - values: {"l":"3x - 1","a":"2x","x":6}
        answers: ["sha256:53535bb67ccf3599602927ffade31e092720f0462ec047668ea1e6af2d825ce9","sha256:4515af256b31063cd6137dfcf3e10ca4b1ca44d4df26249e55a4527704d235d7","sha256:3ee55e481538dd5aefe310f8cef7a04d49ad705caabe5c65973121b2e8b49a8d"]
      - values: {"l":"x + 4","a":"x - 2","x":7}
        answers: ["sha256:0b586f3bb500462d784dff7fdd47f1ed4a11ab08a064d86b9f406ef6cc6d9fad","sha256:cf198793a05de335aa097ec7019b635457d271af2540b42705f66f6446979259","sha256:7b72a5d77d9dea47e8109367877040f5b530bbb73e364d7b4e51c43f0ca87604"]
      - values: {"l":"4x + 2","a":"3x + 1","x":2}
        answers: ["sha256:352c9969ba54aa6e5b4c5b884da1fcf8010a0a8e42b8c411b19c147d0b6c9f7f","sha256:f00e860ae3187e3a1e41cd8dc484f2d4587080f877cb8b65a83cfaac6d85a025","sha256:3221a7aa95029a406cd11c86e51e3b89c5492a4ac609db65a4a27527aae46fa0"]
      - values: {"l":"2x + 5","a":"x + 3","x":10}
        answers: ["sha256:8c26e68545d156929e676e5bbdcef0a7e071b949cfc7a9c5fcfc310e970c91a5","sha256:bd83504776d854e45030c186986f79ad265b6a81a7caf21a0fa3abca5e4c164a","sha256:5fe5bab19f951acffff70f429c865e6540cfbd48576bed9e9b32541ac507f3b9"]
  - id: cuadrado-de-la-suma
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que $(a + b)^2 = a^2 + 2ab + b^2$ de dos maneras: con la propiedad distributiva y con un dibujo de un cuadrado
      de lado $a + b$ dividido en cuatro piezas. Explica después por qué $(a + b)^2 \neq a^2 + b^2$ con un ejemplo numérico.
    sealed: "gz64:H4sIAAAAAAACCn1Tu47bMBD8lYHAwpYFF7JTxIA7XxekSxXFwIrkXXiguQofRpzDfcyVKYN8gn8sICXH5+CQiqt9zO7OrJ6qwDZFw67aVHW9MyF606dojrSsa4gZYYF+vm+xxWRPD7agi7lA/8q7b7EA9fm7OEvx6G1H974VmA3svyUNQT226EnMl53rXJ6hT4+cu39ykImUJ8VQGja/okAKBA1ljkbpBpJ9JKcYkhSNWdohOUTPP3KFwAkcPUP0oplibwALzM4vXhME7Vsxb8YapTs3JvTXhLzBHCcoDvBaxvOLe0iWQ0YThK6L5qADXlVQL8b5kuP5EncWYyByJAsdStOJrcKTmOj4yLdRsalrSHa5zxarvJvIDK5FAzFbYYH1KNf6vWhwMNpFTwGF6lUBWZdw+04s8YGgzL322klDDUS7zhF0nVQcsboYGTuwQ9mQQ+f+2dlCFdGa0kZbaO/Zg+3RKFpWTeVT742sNp+fKulN1N5wtal2OpD3bC2VhWwe5np/GCgwpucrhUgXFq5XlLGH5CKHatM+Nzfod98HayQVWB0kHwYORprzb1cm/nsA2o2CN6Osb6ma1ftfqx2Vk+JMtX7Uh8EyXDqcf3ojy4Xd/EdXKXFC0OdfZMuUA/moC4P3ZCPdNvzy/Acs6wclqwMAAA=="
  - id: r-semejantes
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas parejas son monomios **semejantes** (se pueden sumar en uno solo)?
    options:
      - |
        $3x$ y $3y$
      - |
        $2x$ y $2x^2$
      - |
        $5x^2y$ y $-x^2y$
      - |
        $4xy$ y $4x$
    answers: ["sha256:87659f7c14aa752987e4d2a9e38917863ea42f77cdaaa2482c19bb1599d3d8ca"]
  - id: r-traducir
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se escribe «el doble de la suma de un número y cinco»?
    options:
      - |
        $2x + 5$
      - |
        $2(x + 5)$
      - |
        $x + 10$
      - |
        $2x \cdot 5$
    answers: ["sha256:2442d3f944cc660762c641581a8a37253c7818b33ed61fedf52789f62cd0500f"]
  - id: r-cuadrado-error
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuánto es $(x + 3)^2$?
    options:
      - |
        $x^2 + 9$
      - |
        $x^2 + 3x + 9$
      - |
        $x^2 - 9$
      - |
        $x^2 + 6x + 9$
    answers: ["sha256:7729fc0c5250b22fa37d0640b7a48208358c028955391697f452c0d69ba2c545"]
  - id: r-valor-negativo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Calcula el valor de $x^2 - 3x$ para $x = -2$.
    answers: ["sha256:259b64b950ca7a7c925332b2a01085e3c3aa1b26690e1570673fc8e364c01ac6","sha256:f23501b78e7eae036059f2b45f21ccb1cf663d8c635b018c7c9bfd6773c7c9e2","sha256:e878807fa0df2d0a18d07c72eb3552c5438317b473b1c94c462a68ab66428143"]
  - id: r-grado-producto
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $P$ tiene grado $3$ y $Q$ tiene grado $4$, ¿qué grado tiene $P \cdot Q$?
    answers: ["sha256:63d804b29ec3ae6e94a9c3d6d973c412f5df56610ccb9509ebfd2e7f9d0f18d7","sha256:c0b32e70c5ce828ed048a7438e72a0bb81ed26ae2f7a55cc1a4d2d95fcd3a5d8","sha256:dcc500cfee546a5eba56d8e91e109d78392f8d58f7ffad3f5cfcc85b3ecb01cb"]
  - id: r-diferencia-cuadrados
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se factoriza $x^2 - 25$?
    options:
      - |
        $(x + 5)(x - 5)$
      - |
        $(x - 5)^2$
      - |
        $(x + 25)(x - 1)$
      - |
        No se puede factorizar
    answers: ["sha256:a1b9fd9c3ac5ce56d3deb05f76789f42f9768ebc25e5006f9190e0fc0ed3a29a"]
  - id: r-factor-comun
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo queda $4x^2 + 6x$ sacando el máximo factor común?
    options:
      - |
        $2x(x + 2)$
      - |
        $2x(2x + 3)$
      - |
        $x(4x + 3)$
      - |
        $4x(x + 6)$
    answers: ["sha256:0656de7c6dc778d45ab388ad9b66a34a74b3d32bcb11cc062c4082a69c4ee98e"]
---

# Expresiones algebraicas: lenguaje algebraico, monomios, polinomios, operaciones, productos notables y factor común

El álgebra empieza cuando en lugar de un número concreto se escribe una **letra**: «el precio de $x$ kilos a $3$ € el kilo es $3x$».
Con letras se escriben reglas que valen para todos los números a la vez, se razona sin conocer los datos y se resuelven problemas
que con aritmética serían muy difíciles. Este nodo enseña el idioma: cómo traducir frases a expresiones, cómo se llaman sus partes,
cómo se calcula su valor y cómo se suman y multiplican, con los atajos de los productos notables. Es la base de todo el álgebra que
viene después y de casi todas las fórmulas de la ciencia.

## Objetivos

Al terminar sabrás:

1. Traducir enunciados al lenguaje algebraico y calcular el valor numérico de una expresión.
2. Reconocer monomios y polinomios: coeficiente, parte literal, grado y términos semejantes.
3. Sumar, restar y multiplicar polinomios.
4. Usar los productos notables (cuadrado de una suma y de una diferencia, suma por diferencia) en los dos sentidos.
5. Sacar factor común y comprobar cualquier cálculo dando valores a las letras.

## Qué debes dominar antes

[[mat-numeros-enteros]] (signos), [[mat-fracciones]] y [[mat-potencias-raices]] (propiedades de las potencias), y la propiedad
distributiva de [[mat-sistema-decimal-operaciones]].

> [!question] Test de entrada
> 1. Calcula $3 \cdot (4 + 5)$ de dos formas.
> 2. Calcula $(-2)^3$.
> 3. Simplifica $2^3 \cdot 2^4$.
>
> Respuestas: $27$ ($3 \cdot 9$ o $12 + 15$); $-8$; $2^7$.

## 1. Para qué sirve

- **Fórmulas**: el área de un círculo $\pi r^2$, la velocidad $v = \frac dt$, el precio con IVA $1{,}21\,p$: son expresiones algebraicas
  que valen para cualquier valor de las letras.
- **Hojas de cálculo y programación**: una fórmula de Excel como `=B2*1,21` o una variable de un programa son álgebra
  ([[prog-python-fundamentos]]).
- **Resolver problemas**: con letras se plantea un problema antes de conocer la solución (el tema `mat-ecuaciones-primer-grado`).
- **Demostrar**: con letras se prueba que algo vale **siempre** (como el truco del $1089$ de [[mat-resolucion-problemas]]).

## 2. El lenguaje algebraico

> [!practico]
> Una letra es una caja con un número dentro que todavía no conocemos (o que puede ser cualquiera). «Un número» se escribe $x$;
> «su doble», $2x$; «su doble más tres», $2x + 3$; «el doble de un número más tres», con paréntesis si el doble afecta a todo:
> $2(x + 3)$. Traducir bien es la mitad del álgebra.

| frase | expresión |
| --- | --- |
| un número aumentado en $5$ | $x + 5$ |
| el triple de un número | $3x$ |
| la mitad de un número | $\frac x2$ |
| el cuadrado de un número | $x^2$ |
| dos números consecutivos | $x$ y $x + 1$ |
| un número par / impar | $2n$ / $2n + 1$ |
| el doble de la suma de dos números | $2(x + y)$ |

Entre un número y una letra (o entre letras) no se escribe el signo de multiplicar: $3x$ significa $3 \cdot x$ y $xy$ significa $x \cdot y$.

**Valor numérico**: es el resultado de sustituir las letras por números y operar, con la jerarquía de siempre. *Ejemplo:* el valor de
$x^2 - 3x + 1$ para $x = -2$ es $(-2)^2 - 3\cdot(-2) + 1 = 4 + 6 + 1 = 11$ (cuidado con los paréntesis al sustituir un negativo).

## 3. Monomios y polinomios

> [!practico]
> Un monomio es un «producto de número por letras», como $5x^2$: el número ($5$) dice cuántos hay y las letras ($x^2$) dicen de qué
> tipo son. Solo se pueden sumar cosas del mismo tipo: $3$ manzanas y $2$ manzanas son $5$ manzanas, pero $3$ manzanas y $2$ peras no
> se juntan en un solo número. Igual, $3x^2 + 2x^2 = 5x^2$, pero $3x^2 + 2x$ se queda así.

Un **monomio** es un producto de un número (el **coeficiente**) por letras con exponentes naturales (la **parte literal**): en
$-7x^2y$, el coeficiente es $-7$ y la parte literal $x^2y$. Su **grado** es la suma de los exponentes de las letras ($3$ en este caso).
Dos monomios son **semejantes** si tienen la misma parte literal ($3x^2y$ y $-x^2y$), y solo esos se pueden sumar:
$3x^2y - x^2y = 2x^2y$.

Un **polinomio** es una suma de monomios, sus **términos**: $P(x) = 2x^3 - 5x + 7$. Su **grado** es el mayor de los grados de sus
términos ($3$), el **coeficiente principal** es el del término de mayor grado ($2$) y el **término independiente** es el que no lleva
letra ($7$). Se suele ordenar de mayor a menor grado.

## 4. Suma, resta y producto de polinomios

> [!practico]
> Sumar polinomios es juntar los términos de cada tipo: los $x^2$ con los $x^2$, las $x$ con las $x$, los números con los números.
> Multiplicar es aplicar la propiedad distributiva: cada término del primero multiplica a cada término del segundo, como al
> calcular el área de un rectángulo partido en trozos.

**Suma y resta**: se reducen los términos semejantes. Para restar, se cambia el signo de **todos** los términos del polinomio que se
resta: $(3x^2 - x + 4) - (x^2 + 2x - 1) = 3x^2 - x + 4 - x^2 - 2x + 1 = 2x^2 - 3x + 5$.

**Producto de monomios**: se multiplican los coeficientes y se suman los exponentes de cada letra (propiedades de las potencias):
$3x^2 \cdot (-4x^5) = -12x^7$.

**Producto de polinomios**: cada término por cada término, y se reducen semejantes:
$$
(2x + 3)(x^2 - x + 4) = 2x^3 - 2x^2 + 8x + 3x^2 - 3x + 12 = 2x^3 + x^2 + 5x + 12 .
$$
El grado del producto es la suma de los grados.

**Comprobar dando valores.** Si una simplificación es correcta, la expresión inicial y la final dan lo mismo para **cualquier**
valor de $x$. Con $x = 1$: $(2 + 3)(1 - 1 + 4) = 20$ y $2 + 1 + 5 + 12 = 20$ ✓.

> [!formal] Con rigor: por qué basta comprobar en unos pocos puntos
> Si dos polinomios de grado como mucho $n$ dan el mismo valor en $n + 1$ números distintos, son iguales (su diferencia sería un
> polinomio de grado $\le n$ con $n + 1$ raíces, y eso solo le pasa al polinomio cero; se demuestra en
> el tema `mat-polinomios-factorizacion`). Por eso, para comprobar un producto de grado $3$, bastan $4$ valores; uno solo ya detecta casi
> todos los errores, pero no los descarta todos.

## 5. Productos notables

> [!practico]
> Hay tres multiplicaciones que aparecen tanto que conviene saberlas de memoria, igual que la tabla del $5$. Pero no hace falta
> memorizarlas a ciegas: salen de la distributiva, y la primera se ve en un dibujo de un cuadrado partido en cuatro piezas.

$$
(a + b)^2 = a^2 + 2ab + b^2, \qquad (a - b)^2 = a^2 - 2ab + b^2, \qquad (a + b)(a - b) = a^2 - b^2 .
$$

*Ejemplos:* $(x + 3)^2 = x^2 + 6x + 9$; $(x - 2)^2 = x^2 - 4x + 4$; $(x + 4)(x - 4) = x^2 - 16$; $(2x + 5)^2 = 4x^2 + 20x + 25$.

**El error clásico**: $(x + 3)^2 \neq x^2 + 9$. Falta el doble producto: con $x = 1$, $(1 + 3)^2 = 16$ pero $1 + 9 = 10$.

**Leídos al revés, sirven para factorizar**: $x^2 + 10x + 25 = (x + 5)^2$ (trinomio cuadrado perfecto) y $x^2 - 49 = (x + 7)(x - 7)$
(diferencia de cuadrados). **Y para calcular de cabeza**: $101^2 = (100 + 1)^2 = 10\,201$; $49 \cdot 51 = (50 - 1)(50 + 1) = 2\,500 - 1 = 2\,499$.

## 6. Sacar factor común

> [!practico]
> Sacar factor común es la distributiva al revés: si todos los términos comparten un factor, se «saca fuera» del paréntesis.
> Es como agrupar: $6$ cajas de $x^2$ y $9$ cajas de $x$ tienen en común un $3x$.

$6x^2 + 9x = 3x(2x + 3)$: el factor común es el **mcd de los coeficientes** ($3$) por cada letra común con su **menor exponente** ($x$).
Se comprueba multiplicando: $3x \cdot 2x + 3x \cdot 3 = 6x^2 + 9x$ ✓. Sacar factor común es el primer paso de casi toda factorización
(el tema `mat-polinomios-factorizacion`) y de muchos problemas en los que se busca un número desconocido.

## 7. Errores típicos

- Sumar monomios no semejantes ($3x + 2x^2 \neq 5x^3$).
- Olvidar cambiar el signo de **todos** los términos al restar un polinomio.
- Escribir $(a + b)^2 = a^2 + b^2$.
- Sustituir un número negativo sin paréntesis ($-2^2 \neq (-2)^2$).
- Al sacar factor común, dejar el paréntesis incompleto ($4x^2 + 4x = 4x(x)$, en vez de $4x(x + 1)$).
- Traducir «el doble de la suma» como $2x + y$ en lugar de $2(x + y)$.

## 8. Resumen

- Letras = números cualesquiera; valor numérico sustituyendo con paréntesis.
- Monomio: coeficiente, parte literal, grado; semejantes = misma parte literal.
- Polinomio: grado, coeficiente principal, término independiente; suma reduciendo semejantes, producto término a término.
- Productos notables: $(a \pm b)^2 = a^2 \pm 2ab + b^2$, $(a + b)(a - b) = a^2 - b^2$; al revés, factorizan.
- Factor común: mcd de coeficientes y letras comunes con el menor exponente.
- Comprobar siempre dando un valor a la letra.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se traduce una frase con «el doble de la suma».
2. Qué son monomios semejantes y por qué solo esos se suman.
3. Los tres productos notables y el error de $(a + b)^2$.
4. Cómo se saca factor común.
5. Comprobar un desarrollo sustituyendo un número.

## Siguiente

el tema `mat-ecuaciones-primer-grado` (igualdades con letras que hay que resolver) y el tema `mat-polinomios-factorizacion` (dividir y factorizar
polinomios).
