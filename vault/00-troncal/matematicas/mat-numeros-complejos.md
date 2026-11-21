---
id: mat-numeros-complejos
title: "Números complejos: forma binómica, polar, De Moivre y raíces"
area: matematicas
trunk_level: 6
prerequisites: [mat-numeros-reales, mat-algebra-secundaria, mat-trigonometria, mat-geometria-analitica]
academic_sources:
  - "Muñoz, J.; Moya, P. Matemáticas I, 1.º Bachillerato (LOMLOE), capítulo 1: «Números reales y complejos», sección 2 (2.1 necesidad de los complejos y el número i; 2.2 forma binómica y operaciones, representación en el plano; 2.3 forma trigonométrica y operaciones; 2.4 fórmula de Moivre). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_01_Complejos.pdf (CC BY-NC-SA 3.0)."
  - "Abramson, J. et al. Precálculo, 2.ª ed. (en español). OpenStax, 2022, sección 3.1 («Números complejos») y sección 8.5 («Forma polar de los números complejos»). https://openstax.org/books/prec%C3%A1lculo-2ed/pages/8-5-forma-polar-de-los-numeros-complejos"
  - "Needham, T. Visual Complex Analysis. Oxford University Press, 1997, cap. 1 («Geometry and Complex Arithmetic»), secciones I-III."
hints:
  - "Concepto: i es un número con i² = −1. En forma binómica se opera como con polinomios, sustituyendo i² por −1; para dividir se multiplica arriba y abajo por el conjugado. En forma polar (módulo r y argumento θ), multiplicar es multiplicar módulos y SUMAR ángulos."
  - "Herramienta: dibuja cada complejo como un punto o una flecha del plano (eje horizontal real, vertical imaginario). Módulo: r = √(a² + b²); argumento: el ángulo de la flecha (cuidado con el cuadrante: atan(b/a) solo vale si a > 0). En Python: complex(3, 4), abs(z), cmath.phase(z), cmath.rect(r, θ)."
  - "Documentación: Marea Verde Matemáticas I, cap. 1, secciones 2.2-2.4; OpenStax Precálculo 2ed, secciones 3.1 y 8.5; documentación de Python: docs.python.org/3/library/cmath.html."
exercises:
  - id: producto-binomica
    tier: 1
    prompt: |
      Calcula $({{z}})({{w}})$. Respuesta: parte real y parte imaginaria en la forma «a;b» (por ejemplo, $7 - i$ se escribe «7;-1»).
    variants:
      - values: {"z":"3 + 2i","w":"1 - 4i"}
        answers: ["sha256:afac0dfdd92274133a839d48d8d069f4932db4ef393d26b946f8684e08d99269"]
      - values: {"z":"2 - i","w":"2 + i"}
        answers: ["sha256:23aeccd16b491403d2060a26d5d422f564c816c185fa695d26a896a266496bb9"]
      - values: {"z":"-1 + 3i","w":"4 + 2i"}
        answers: ["sha256:51fa44f536a12631f2e24f34b64b068584bb0a0ffa28abe56abe607f9a8f5bf1"]
      - values: {"z":"5 + i","w":"-2 + 3i"}
        answers: ["sha256:4edee61070d8e3d43f958b09fe3ac094b15f06076af1b707ce98c8b2907f4e05"]
      - values: {"z":"1 + i","w":"1 - 2i"}
        answers: ["sha256:f2f65cb33cc34b632dc25dba55cd86f9cfb769b206ba6fb4561982e69fd4a6ad"]
      - values: {"z":"4 - 3i","w":"3 + 4i"}
        answers: ["sha256:42be0a0f4cdc288c4be8f7005efa585b8c8808133c7cc40a2cd6b03f378163b3"]
  - id: potencia-de-i
    tier: 1
    prompt: |
      Calcula $i^{{{n}}}$. Respuesta: uno de «1», «i», «-1», «-i».
    variants:
      - values: {"n":35}
        answers: ["sha256:444c8974fcf3d4d990db382d0a6ed1d69ffc4caa10da28afd7ab561fd7f27ced"]
      - values: {"n":50}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"n":101}
        answers: ["sha256:de7d1b721a1e0632b7cf04edf5032c8ecffa9f9a08492152b926f1a5a7e765d7"]
      - values: {"n":2026}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"n":7}
        answers: ["sha256:444c8974fcf3d4d990db382d0a6ed1d69ffc4caa10da28afd7ab561fd7f27ced"]
      - values: {"n":400}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: modulo
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula el módulo de $z = {{z}}$. Respuesta: un número (cuatro cifras significativas si no es exacto).
    variants:
      - values: {"z":"3 + 4i"}
        answers: ["sha256:e99c0387387e78334a52086b0f206ea7cc80e2bad22d70ee405e161c0dbd1039","sha256:0865cb5754065c375e76f18c3f9b56c8b2129bc8b279dd80a7f6424448a652c7","sha256:bafda054d5d90130f0faead3e230288bd7041fa3ca3e6185288e48e0b3a19ea8"]
      - values: {"z":"5 - 12i"}
        answers: ["sha256:56373c559d4e4f9cf597b61e5929eff778e39906f712e59abb9888c4e6449a02","sha256:1879e0f3a9693e5b5436e60f84ae5d2f6197f251637756fb905a457a4cc52640","sha256:a4187be76303b9d3092cad3bd279607ed01d1eabf54a079a1e0bb31a7bf03773"]
      - values: {"z":"-8 + 15i"}
        answers: ["sha256:adf53bbbee8e5d04908b54c746ecb363034be0be98b8c746bc28fad69d9cb152","sha256:13fb830b10ecaa61cb86796e7c338dac74989897fdef7a503c9a7e72b04cfc5e","sha256:7ee5ee6b296e809d7a821f7c1d73a70cce94a0db9b15ce7e77561fea724ed726"]
      - values: {"z":"1 + i"}
        answers: ["sha256:45fadb941f9b7245d3a54402591a7860278a1201a17f1622ff1cea55e833b72b","sha256:fa6dba8a5bf76595d10d188b2b9ca5ca9c6df2e72f79634942d0b77443400702","sha256:13773dc72721935bc5582d4a5d7a803455bf0bace09a85a415bde8608351eaa4"]
      - values: {"z":"-6 - 8i"}
        answers: ["sha256:af1783268a0efb333d43ab5b7b55aeb4c6b10b5b16a38d1cba7d30543d3ef23d","sha256:10930b543b3f5018118086e4180571f3aea1aa9bb272cabf3b653a58b67dc4b3","sha256:589acf7a747f29cd19b0a8c2a5bb45cd5bd56e1d2e7eb6056e145dfaf19027bd"]
      - values: {"z":"7 + 24i"}
        answers: ["sha256:5ce4ad7d019f92250ff75e46a62e63fccf955d3ec9e91e7bf1f5607aa82e21b7","sha256:556c35a4c4ff06b9218015614e1d03d6d82ac330244ef8dfa6efecb67ef07c6d","sha256:fbe70d3be01f6cdc4d56498e1f963e97dc1e96e4f405030cc881629a28a77f49"]
  - id: cociente-binomica
    tier: 2
    prompt: |
      Calcula $\dfrac{{{z}}}{{{w}}}$. Respuesta: «a;b» con la parte real y la imaginaria (con decimales si hace falta).
    variants:
      - values: {"z":"5 + 5i","w":"1 + 2i"}
        answers: ["sha256:f2f65cb33cc34b632dc25dba55cd86f9cfb769b206ba6fb4561982e69fd4a6ad"]
      - values: {"z":"7 - i","w":"3 + i"}
        answers: ["sha256:b1f713457ab0ea711879485a067897b743cba223b42f550e76278ab3a87ac617"]
      - values: {"z":"10","w":"1 - 3i"}
        answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
      - values: {"z":"4 + 6i","w":"2 + 2i"}
        answers: ["sha256:16f02a729a8cb7ec97022a7817e265390cc5308378383c2a3214405c979bbd23"]
      - values: {"z":"13","w":"2 + 3i"}
        answers: ["sha256:28bf16acee72a1c96175ab09bac6f9a3b521b5f3cb97b4d3bf3dffb6dcc9a14b"]
      - values: {"z":"1 + 7i","w":"1 + i"}
        answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
  - id: argumento
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el argumento de $z = {{z}}$, en grados, entre $0^\circ$ y $360^\circ$? (Cuidado con el cuadrante.)
    variants:
      - values: {"z":"2 - 2i"}
        answers: ["sha256:52d636beedeb995ec64bcd78d531de420c23625f23d9c81a0a861ddfe87b0493","sha256:21d6092d82059066e05e2be6b2f2343e3a61964680ea71d7de854e2684e4b319","sha256:7b551d1fd5c96f5f18a3406220eb0a078894107b6e68f87870aed2e6bb24b979"]
      - values: {"z":"-1 + i"}
        answers: ["sha256:44a1255338ad398db2b4b1ec4b24d5eddfbd4100ecffb78c6b7d7cd4d54b2b2c","sha256:ab30fd50a76f502d528e7c7b866f8f7fe519737a2e7aa011b57daeeebbc7b61f","sha256:e5437d0ac3c926f26601003dcdf0f8cfe545c37d0489da8a3d272ad621609328"]
      - values: {"z":"1 - \\sqrt3\\, i"}
        answers: ["sha256:de83f71baee286dab69bbed92374063a97769b4bb78a90537bcf81b30b7e8832","sha256:ababc6d32eed3dcab95810f171c060982b28d650e6ecae20bc3f7bcb0c8e3567","sha256:7bfea6f1cffa97d4389451d925d3fdaa9fc1fd52ba0b19291931bf4bf72a3f62"]
      - values: {"z":"-\\sqrt3 - i"}
        answers: ["sha256:ba5a7653874d3557fe303b8c40a26ffe1e925ff46e859e4099ec44fb0077bca4","sha256:5bf43dbfc38fcaebf665b9b2a49311fbddd7517da4f8f7a6d26d9314f7ca888e","sha256:15fa02a49784922a300f43428b0e1421f50a352fb86392c4b62a2f0108b6aa94"]
      - values: {"z":"-5i"}
        answers: ["sha256:62e8a8aac96c5b4e657fe3db230ba67d60ab6aadd17ab52ba528f3d80c3a7509","sha256:1e5d7c03b6dd07fed18225f4f7478e1d92d932aa37ef7c034e8d9401eb5965d4","sha256:bc603424b8210b32095082eeafa27b6e53320ff4658913d8ed4f2d297dd6dda8"]
      - values: {"z":"-4"}
        answers: ["sha256:6920c8e06b751b212cf2b2e3616c78bb8cbd0ebce060b534fa7e2403e51c5cb2","sha256:a1808721236ea1d837476fb10a69c4d5bb6da827d786fc8c8e04deea7576b48e","sha256:8d78e55edbc25d1f3a9a2ee9707dd3b76ae73c218c917ba5a02bd57aeff923ac"]
  - id: ecuacion-compleja
    tier: 2
    prompt: |
      Resuelve $x^2 {{p}} {{q}} = 0$. Da la solución con parte imaginaria **positiva** en la forma «a;b» (para $a + bi$).
    variants:
      - values: {"p":"- 6x","q":"+ 13"}
        answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
      - values: {"p":"+ 2x","q":"+ 5"}
        answers: ["sha256:08165339490e6089b8c9706d04c057083734242352c1c09d94b9091a87e3c9a1"]
      - values: {"p":"- 2x","q":"+ 10"}
        answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
      - values: {"p":"+ 4x","q":"+ 13"}
        answers: ["sha256:aaee0d07807a079803c3753362a7d79f1a4f0c5819deadc8d22501ea590464e2"]
      - values: {"p":"- 8x","q":"+ 25"}
        answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
      - values: {"p":"","q":"+ 9"}
        answers: ["sha256:29146eb203a325319fce1b33a3812e9fd3662bf8589143019f76c13a2901b0cf"]
  - id: de-moivre
    tier: 2
    prompt: |
      Calcula $({{z}})^{{{n}}}$ usando la forma polar. Respuesta «a;b».
    variants:
      - values: {"z":"1 + i","n":6}
        answers: ["sha256:6db14445755b70796d9d55ef9c05be273f582485f77b9be7775ef39de5554b6d"]
      - values: {"z":"1 - i","n":4}
        answers: ["sha256:68fbcbf176b78ef489780d0ef2c96d6d7ad902da5f9e34ee08b058d684e18d5c"]
      - values: {"z":"2i","n":5}
        answers: ["sha256:6a8f478e262c1222dcfa580b96fb922f24b79db593b040c4f98bf56a4cd69f1d"]
      - values: {"z":"1 + \\sqrt3\\, i","n":3}
        answers: ["sha256:950e56acbf5f02794d9b7bc445afe8e6c1d30a2a26844a9e1f24ecc6c22ac451"]
      - values: {"z":"\\sqrt3 + i","n":6}
        answers: ["sha256:06421c0f5a752ee171f37cbcf2eebb1d53fb59128a7af0abe6c105f1a5196920"]
      - values: {"z":"-1 + i","n":8}
        answers: ["sha256:ba9740993dfd1df2954a052e01ad319004530f4d59a787ec1dce91ec2e319400"]
  - id: multiplicar-por-i
    tier: 2
    type: opcion
    prompt: |
      ¿Qué le hace geométricamente a un punto $z$ del plano complejo multiplicarlo por $i$?
    options:
      - |
        Lo refleja respecto del eje real
      - |
        Lo gira $90^\circ$ en sentido antihorario alrededor del origen
      - |
        Lo traslada una unidad hacia arriba
      - |
        Duplica su módulo
    answers: ["sha256:91a6ddbc3887fda1e3ac3940e6dfcfa05b3699c0c3f2881feb25aa26f24d475a"]
  - id: raices-n-esimas
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Las raíces de $w^{{{n}}} = {{z}}$ tienen todas el mismo módulo. Entre sus argumentos (en $[0^\circ, 360^\circ)$), ¿cuál es el
      **menor**? Respuesta: grados.
    variants:
      - values: {"z":"27i","n":3,"mod":"3"}
        answers: ["sha256:e394e7fcaa08a2d6cc78ab30dbcbe5754e6bc57b3667cfed64b4323fdb092232","sha256:b8175420ef261d65f7942a75c3bdfa9ba692be30e2d89e00f2aa623a8f00b87a","sha256:59c777536dd216c778eb1615bbe8bfe635f8d4f5ce2d52aabc9e504b18b01799"]
      - values: {"z":"16","n":4,"mod":"2"}
        answers: ["sha256:c502bd73fcdf4284930935c998777938102be39c68720f00ba3b45e82af283f5","sha256:93ee77922c5cec23d79ccc083292fd41c429cff2e48931ed2ec3946f270683f9","sha256:9b0a137633b9f36c1ebaca2de6dec718130b24e199d5a1c52a75340081bfd0e7"]
      - values: {"z":"-1","n":3,"mod":"1"}
        answers: ["sha256:d1ee276caf39c97ee1d4bda21a6f8d323d35deca173e461c0f9c53bf02f659f8","sha256:bf9918532561d65ccef9c571920fe628e1ddb19689c7aad161f2128de631ecd5","sha256:3a4ffd05471236ba08935c692ef9d799b4d700d443993e4acba02f0b5e73a7b5"]
      - values: {"z":"-32i","n":5,"mod":"2"}
        answers: ["sha256:3779265de554ad11b4c6d7b32c7529d9db891e04359c550de5359ca7431cbd7e","sha256:7ae427fcde6cba711216892221350cc39b4e0d576647f084c403f3a38e6b1d54","sha256:99ceeae893be6d7c003cdd27b4066763efecbf4744e98de4f0a4f7da77620fa0"]
      - values: {"z":"-64","n":6,"mod":"2"}
        answers: ["sha256:314eb1da9a1358f7da66030ea6b43902a33c1993d105885d54502bb7f639f6f9","sha256:9c8371f41154561431a7cd1e8f6b0075af1c9a8520cc458ede67136b0aa97a6c","sha256:cfa3fe6b6be68b031f19e2aa8e5d06a060d728259456faf012987008c774b82b"]
      - values: {"z":"i","n":2,"mod":"1"}
        answers: ["sha256:e83e64e3c4e9b498937444bb424b439caf1634a6df24ddd6b0a678f6e7be6955","sha256:88b5cefaacbd8dca90e8479014a3b876be80f138eb99b4cbc233dd2286fc3b2e","sha256:b3547d47127a36659c5f4251f5d92aa95006051c62067a0a17689f0a549fb311"]
  - id: raices-conjugadas
    tier: 3
    type: opcion
    prompt: |
      Un polinomio con coeficientes **reales** tiene la raíz $3 + 2i$. ¿Cuál de estos números es también raíz con seguridad?
    options:
      - |
        $3 + 2i$
      - |
        $-3 + 2i$
      - |
        $3 - 2i$
      - |
        $2 + 3i$
    answers: ["sha256:4c019789a02d022acca423471ece0ce01433e61057cfabc7c4b7a08f251f0dbe"]
  - id: raiz-producto-falso
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Calcula $\sqrt{-4}\cdot\sqrt{-9}$, interpretando $\sqrt{-a} = i\sqrt a$ para $a > 0$. (¿Coincide con $\sqrt{(-4)(-9)}$?)
    answers: ["sha256:cb3e14f94fadb82eaf5a3e9052bb57d6c59aa68e9baf7164dad264d0cc32619d","sha256:8bc26b037f7732845c0cf4a3ae7cd5b07a09f1817afd0a139b8b4bd7cb85617e","sha256:d708e48fb058f6e34544846c71666b5fd41bc2e7db0d02ff69ff30c2442d171d"]
  - id: producto-polar-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que al multiplicar dos complejos en forma polar se multiplican los módulos y se suman los
      argumentos. Úsalo para explicar por qué las $4$ raíces cuartas de $1$ son $1$, $i$, $-1$ y $-i$.
    sealed: "gz64:H4sIAAAAAAACCpWTyW7bMBCGX+WHwION2kacGl0M+FCgPfRQIECPYQxMKMYmQnEULkmcIA+TYw459RH0YgUlO7KRLshFGGo483+c5b4IbFM07Ip58VOTg7jDAn4gpeIgJdl6TXgHI2UwbnseCmwgbrBA2N0713H/Wj4OxQQ/ko2mtkaRKxmKK0bN1jiuDAdskELrEGZ5jAXGUzGXTgjp7nJyn/OalT09gNkXHGMfa187swwOnfuchwn7sFbQn2HSYZywh6WAi+aXr1K2Sg1LCKmiEcSbsbDolAd9YXe1wkY68WbgNmEw7g8JR6DQPOMqaYiDcg7+gvDSvteurizD3J2q+VUmyxA+5Ckgv0qVdpFzNQ6jxEQ66b7k7jePruQcNBO41kqHEcTNctbS+zUvZx0TZlJek6/X5oWl/5XH6YQ8tS8KmiCmWGC6jTzqI46GAmtSGhdkI2WuViJfFiPpdG6iMn7r6H7nee7FF3j/4WgppTJe4VKMsB+zvSOlcZDyfndvhM+9Of3U28cfd7aUDwIDjp4DxKWA17WJ2mWkyAHNo1sly2E4wbfAASpR9Iw6uewttYVqnr3KxU/OlFQisIPI9MLkz3ja7uU4HywHXDdPPhrVwiO5nLD0VPKkGBU+nXujivnpfaG8idobLuZFv67d2LOvKCB6s2LHVfMUvVGU95ZWPtWEmnzU8JosNExFK+PIG3q91lmye0gxP34YHYh+L7WL5uJFdG/XLBQH7RgbaIvW6hcQGyh2yqaNxlum8h8oX3WZlN6fjP8MxgZ8Ho12GvqWVKQsqttnbLvnqXnOHRjo266uNXtcpeYJjrGmDarmMQwPmc4efgPmn38dlgUAAA=="
  - id: r-conjugado
    tier: 1
    review: true
    prompt: |
      Calcula $(2 + 3i)(2 - 3i)$. Respuesta: un número.
    answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
  - id: r-plano
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué cuadrante del plano complejo está $z = 5 - 2i$?
    options:
      - |
        Primer cuadrante
      - |
        Segundo cuadrante
      - |
        Tercer cuadrante
      - |
        Cuarto cuadrante
    answers: ["sha256:d906f7510b323cafca1585d7d400446297f60df0254dd881c41f5ea7c4d588fa"]
  - id: r-polar-a-binomica
    tier: 2
    review: true
    prompt: |
      Escribe en forma binómica el complejo de módulo $6$ y argumento $90^\circ$. Respuesta «a;b».
    answers: ["sha256:b563aac6ff3d328a4e87ee81fbcd9184e666ec32937af739c8750571cc0af7b4"]
  - id: r-producto-modulos
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      $|z| = 3$ y $|w| = 5$. ¿Cuánto vale $|zw|$?
    answers: ["sha256:faf90169d8de8c8c1184eeadce964d8b083ab77ad8072bd8b9f4d998be5e2363","sha256:f9ec8b0340c268ee01ac8d29e2ff4ec75083daecf17ce554dba71def6fb946ac","sha256:f87619d3188116358862b3f2222f8bbdeaffbe7d5f20dc819689d0c79403e15a"]
  - id: r-cuantas-raices
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas soluciones complejas distintas tiene $w^5 = 2 + 7i$?
    answers: ["sha256:6b8594c4b7db77d1626d0d2d316ba32142d2886699a9ce823e4a01b4a9e286cc","sha256:cd0e0e68daffa49ba237c4c75799ad8f4c0a73dfcb10985f43acbcef34e0287a","sha256:35cfedbc21ab72a2c834e4187a64ac401a929a48bb5a57aacb74f4fcd128c88f"]
  - id: r-i-cuadrado
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $i^{6}$?
    answers: ["sha256:7a78fcb8d789947dee58ac614155a419bd64499a073a6cad5bff88abea93b33c","sha256:61ceef6ce11d25986c16df6e4adf19f016336eaedc01ea356154f3eeabf5c7ee","sha256:9b938225f0fb3216c9fd7d85996d4fad585df096d60997e6acf9ec9020fe73c2"]
---

# Números complejos: forma binómica, polar, De Moivre y raíces

La ecuación $x^2 + 1 = 0$ no tiene solución real: ningún número al cuadrado da negativo. Durante siglos esa «imposibilidad»
se esquivó, hasta que se decidió **inventar** un número que la resolviera, $i$, con $i^2 = -1$. Lo sorprendente es que ese
invento no rompe nada y lo arregla casi todo: con los complejos, **toda** ecuación polinómica tiene solución, y multiplicar
por un complejo resulta ser lo mismo que **girar y estirar**. Por eso son el idioma de la corriente alterna, las señales,
la mecánica cuántica y los gráficos por ordenador.

## Objetivos

Al terminar sabrás:

1. Operar con complejos en forma binómica: sumar, multiplicar, conjugar, dividir y calcular potencias de $i$.
2. Representarlos en el plano y calcular su módulo y su argumento.
3. Pasar de forma binómica a polar y al revés, y multiplicar y dividir en forma polar.
4. Usar la fórmula de De Moivre para potencias y calcular las $n$ raíces $n$-ésimas de un complejo.
5. Resolver ecuaciones de segundo grado con discriminante negativo y enunciar el teorema fundamental del álgebra.

> [!question] Test de entrada
> 1. Resuelve $x^2 - 4x + 5 = 0$ en los reales. 2. ¿Cuánto vale $\cos 90^\circ$? 3. ¿Qué distancia hay del origen al
> punto $(3, -4)$?
>
> Respuestas: no tiene solución real ($\Delta = -4$); $0$; $5$. La primera la resolverás al final de este nodo.

## 1. Para qué sirve

- **Electricidad**: en corriente alterna, las resistencias, bobinas y condensadores se combinan como complejos
  («impedancias»); los ingenieros escriben $j$ en lugar de $i$ porque $i$ es la intensidad.
- **Señales y sonido**: una onda se representa por un complejo que gira; así se analizan el audio, la radio y las imágenes.
- **Física**: la mecánica cuántica está escrita con números complejos.
- **Gráficos y robótica**: multiplicar por un complejo de módulo $1$ es girar, sin fórmulas trigonométricas aparte.
- **Matemáticas**: con ellos todo polinomio de grado $n$ tiene $n$ raíces, y aparecen fractales como el conjunto de
  Mandelbrot.

## 2. El número $i$ y la forma binómica

> [!practico]
> Los números negativos también parecieron absurdos al principio («¿cómo voy a tener $-3$ manzanas?») hasta que se
> entendieron como deudas o temperaturas bajo cero. Con $i$ pasa algo parecido: no cuenta objetos, pero es una
> herramienta perfecta. La regla es una sola: **opera como siempre y, cada vez que aparezca $i^2$, cámbialo por $-1$**.
> Por ejemplo, $(2 + i)(3 - i) = 6 - 2i + 3i - i^2 = 6 + i + 1 = 7 + i$.

Un **número complejo** es una expresión $z = a + bi$ con $a, b$ reales e $i^2 = -1$. Su **parte real** es
$\operatorname{Re} z = a$ y su **parte imaginaria**, $\operatorname{Im} z = b$. Los reales son los complejos con $b = 0$ y los
**imaginarios puros**, los de $a = 0$. Dos complejos son iguales si coinciden sus partes reales y sus partes imaginarias.
El conjunto se llama $\mathbb C$.

**Operaciones** (con $z = a + bi$, $w = c + di$):

$$
z + w = (a + c) + (b + d)i, \qquad zw = (ac - bd) + (ad + bc)i .
$$

El **conjugado** de $z = a + bi$ es $\bar z = a - bi$, y cumple $z\bar z = a^2 + b^2$, un número **real** y no negativo. Por eso
para **dividir** se multiplica arriba y abajo por el conjugado del denominador:

$$
\frac{3 + 2i}{1 - i} = \frac{(3 + 2i)(1 + i)}{(1 - i)(1 + i)} = \frac{3 + 3i + 2i + 2i^2}{1 + 1} = \frac{1 + 5i}{2} = \frac12 + \frac52 i .
$$

**Potencias de $i$.** $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, y a partir de ahí se repiten de cuatro en cuatro: para
$i^n$ basta el resto de dividir $n$ entre $4$ (como las últimas cifras de [[mat-numeros-naturales]]). Así $i^{27} = i^3 = -i$.

## 3. El plano complejo: módulo y argumento

> [!practico]
> Igual que los reales son los puntos de una recta, los complejos son los puntos de un **plano**: $a + bi$ es el punto
> $(a, b)$, o la flecha que va del origen a él. El eje horizontal es el de los reales y el vertical, el de los imaginarios.
> El **módulo** es la longitud de la flecha y el **argumento**, el ángulo que forma con el eje horizontal. Sumar complejos
> es sumar flechas, como los vectores de [[mat-geometria-analitica]].

El **módulo** de $z = a + bi$ es $|z| = \sqrt{a^2 + b^2} = \sqrt{z\bar z}$: la distancia del origen al punto. El **argumento**
$\arg z$ es el ángulo $\theta$ que forma la flecha con el semieje real positivo, medido en sentido antihorario (se suele
tomar en $(-180^\circ, 180^\circ]$ o en $[0^\circ, 360^\circ)$). Cumple $\tan\theta = \frac{b}{a}$, pero **hay que mirar el
cuadrante**: $-1 - i$ y $1 + i$ tienen el mismo cociente $\frac{b}{a} = 1$, y sus argumentos son $225^\circ$ y $45^\circ$.

El conjugado $\bar z$ es el **reflejo** de $z$ respecto del eje real, y $|z - w|$ es la **distancia** entre los puntos $z$ y $w$.

## 4. Forma polar (o trigonométrica)

> [!practico]
> Una flecha se puede describir de dos maneras: «$3$ a la derecha y $4$ hacia arriba» (forma binómica, $3 + 4i$) o
> «$5$ de largo, apuntando a $53{,}13^\circ$» (forma polar). La segunda es la buena para **multiplicar**, porque multiplicar
> complejos hace algo muy visual: **multiplica las longitudes y suma los ángulos**. Multiplicar por $i$ (longitud $1$,
> ángulo $90^\circ$) es simplemente **girar un cuarto de vuelta**.

Si $|z| = r$ y $\arg z = \theta$, entonces $a = r\cos\theta$ y $b = r\sin\theta$, es decir

$$
z = r(\cos\theta + i\sin\theta) ,
$$

que se abrevia $z = r_\theta$. **Ejemplo resuelto.** $z = -2 + 2\sqrt3\, i$: $r = \sqrt{4 + 12} = 4$; el punto está en el
segundo cuadrante y $\tan\theta = -\sqrt3$, así que $\theta = 120^\circ$: $z = 4_{120^\circ}$.

**Producto y cociente en forma polar.**

$$
r_\alpha \cdot s_\beta = (rs)_{\alpha + \beta}, \qquad \frac{r_\alpha}{s_\beta} = \left(\frac{r}{s}\right)_{\alpha - \beta} .
$$

> [!formal] Con rigor: demostración con las fórmulas de la suma
> $r(\cos\alpha + i\sin\alpha)\cdot s(\cos\beta + i\sin\beta) = rs\bigl[(\cos\alpha\cos\beta - \sin\alpha\sin\beta) +
> i(\sin\alpha\cos\beta + \cos\alpha\sin\beta)\bigr]$, y por las fórmulas del coseno y el seno de una suma de
> [[mat-trigonometria]], el corchete es $\cos(\alpha + \beta) + i\sin(\alpha + \beta)$. Para el cociente, si
> $\frac{z}{w} = u$ entonces $z = uw$, y por lo anterior $|z| = |u||w|$ y $\arg z = \arg u + \arg w$. $\blacksquare$
>
> Consecuencia geométrica: multiplicar por $w = s_\beta$ es la composición de un **giro** de ángulo $\beta$ y una
> **homotecia** de razón $s$ (los movimientos de [[mat-movimientos-plano]] más un cambio de escala).

## 5. Potencias y raíces: la fórmula de De Moivre

> [!practico]
> Si multiplicar suma ángulos, elevar a la potencia $n$ multiplica el ángulo por $n$. Y al revés: las raíces dividen el
> ángulo, pero como dar una vuelta completa ($360^\circ$) deja la flecha igual, aparecen **$n$ raíces distintas**,
> repartidas como los vértices de un polígono regular. Las tres raíces cúbicas de $1$ forman un triángulo equilátero.

Aplicando el producto $n$ veces se obtiene la **fórmula de De Moivre**:

$$
\bigl(r(\cos\theta + i\sin\theta)\bigr)^n = r^n(\cos n\theta + i\sin n\theta) .
$$

**Ejemplo resuelto.** $(1 + i)^8$: $1 + i = \sqrt2_{45^\circ}$, luego $(1 + i)^8 = (\sqrt2)^8_{360^\circ} = 16_{0^\circ} = 16$.
Comprobación: $(1 + i)^2 = 2i$, $(2i)^4 = 16i^4 = 16$. $\checkmark$

**Raíces $n$-ésimas.** Las soluciones de $w^n = z$, con $z = r_\theta \ne 0$, son exactamente $n$:

$$
w_k = \left(\sqrt[n]{r}\right)_{\frac{\theta + 360^\circ k}{n}}, \qquad k = 0, 1, \dots, n - 1 .
$$

> [!formal] Con rigor: por qué son exactamente $n$
> Si $w = \rho_\varphi$, por De Moivre $w^n = (\rho^n)_{n\varphi}$, y dos complejos en forma polar son iguales si sus módulos
> coinciden y sus argumentos difieren en un múltiplo de $360^\circ$. Así $\rho^n = r$ (luego $\rho = \sqrt[n]r$, la raíz real
> positiva) y $n\varphi = \theta + 360^\circ k$ con $k$ entero. Los valores $k = 0, \dots, n - 1$ dan argumentos distintos
> dentro de una vuelta; cualquier otro $k$ repite uno de ellos (difiere en un múltiplo de $n$, que suma vueltas
> completas). $\blacksquare$

**Ejemplo resuelto.** Las raíces cúbicas de $8i = 8_{90^\circ}$ tienen módulo $2$ y argumentos $30^\circ$, $150^\circ$ y
$270^\circ$: $\sqrt3 + i$, $-\sqrt3 + i$ y $-2i$. Comprobación con la última: $(-2i)^3 = -8i^3 = 8i$. $\checkmark$

## 6. Ecuaciones y el teorema fundamental del álgebra

Con los complejos, la fórmula de [[mat-algebra-secundaria]] resuelve **toda** ecuación de segundo grado: si $\Delta < 0$,
$\sqrt{\Delta} = i\sqrt{-\Delta}$. **Ejemplo resuelto.** $x^2 - 4x + 5 = 0$: $x = \frac{4 \pm \sqrt{-4}}{2} = \frac{4 \pm 2i}{2} = 2 \pm i$.
Comprobación: $(2 + i)^2 - 4(2 + i) + 5 = 3 + 4i - 8 - 4i + 5 = 0$. $\checkmark$

Fíjate en que las dos soluciones son **conjugadas**. No es casualidad: si un polinomio tiene coeficientes **reales** y $z$ es
raíz, también lo es $\bar z$ (porque conjugar respeta sumas y productos, y deja igual los coeficientes reales).

**Teorema fundamental del álgebra** (Gauss, 1799; enunciado). Todo polinomio de grado $n \ge 1$ con coeficientes complejos
tiene exactamente $n$ raíces complejas, contando multiplicidades. Su demostración usa herramientas de análisis que se ven
en la rama de matemáticas.

## 7. Errores típicos

- Escribir $\sqrt{-4}\cdot\sqrt{-9} = \sqrt{36} = 6$: con negativos, $\sqrt a\sqrt b = \sqrt{ab}$ **falla** ($2i\cdot 3i = -6$).
- Calcular el argumento con $\arctan\frac{b}{a}$ sin mirar el cuadrante.
- Dividir complejos «dividiendo parte real entre parte real»: hay que multiplicar por el conjugado.
- Olvidar raíces: $w^n = z$ tiene $n$ soluciones, no una.
- Confundir el módulo $|a + bi| = \sqrt{a^2 + b^2}$ con $a + b$.

## Repaso: lo que debe quedarte dentro de un mes

1. $i^2 = -1$; $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$; dividir multiplicando por el conjugado.
2. $|z| = \sqrt{a^2 + b^2}$; el argumento depende del cuadrante.
3. $z = r(\cos\theta + i\sin\theta)$; multiplicar multiplica módulos y suma argumentos; multiplicar por $i$ gira $90^\circ$.
4. De Moivre: $(r_\theta)^n = (r^n)_{n\theta}$; $n$ raíces $n$-ésimas en un polígono regular.
5. Con coeficientes reales, las raíces complejas van por parejas conjugadas.

## Siguiente

[[mat-calculo-1]] estudia cómo cambian las funciones; los complejos reaparecen en las ecuaciones diferenciales, en las
señales ([[ing-senales-sistemas]]) y en la mecánica cuántica.
