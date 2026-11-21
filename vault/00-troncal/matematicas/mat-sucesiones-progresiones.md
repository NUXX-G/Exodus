---
id: mat-sucesiones-progresiones
title: "Sucesiones y progresiones aritméticas y geométricas"
area: matematicas
trunk_level: 4
prerequisites: [mat-algebra-basica, mat-proporcionalidad-porcentajes, mat-funciones-basicas]
academic_sources:
  - "Ramos Rodríguez, F.; Latasa Asso, M. Matemáticas 3.º ESO (LOMLOE), capítulo 3: «Sucesiones», secciones 1-3 (definiciones, progresiones aritméticas y geométricas, sumas, productos y aplicaciones). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/03%20Sucesiones%203.pdf (CC BY-NC-SA 3.0)."
  - "Ramos Rodríguez, F. Matemáticas I, 1.º Bachillerato (LOMLOE), capítulo 3: «Sucesiones», secciones 1.4-1.6 (convergencia, suma de infinitos términos de una progresión geométrica, monotonía y acotación) y 2.1-2.2 (límite de una sucesión). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_03_Sucesiones.pdf"
  - "Abramson, J. et al. Precálculo, 2.ª ed. (en español). OpenStax, 2023, cap. 11, secciones 11.1 («Secuencias y sus notaciones»), 11.2 («Secuencias aritméticas»), 11.3 («Secuencias geométricas») y 11.4 («Series y sus notaciones»). https://openstax.org/books/prec%C3%A1lculo-2ed/pages/11-introduccion (CC BY 4.0)."
hints:
  - "Concepto: en una progresión aritmética se SUMA siempre la misma diferencia d (a_n = a_1 + (n − 1)d); en una geométrica se MULTIPLICA siempre por la misma razón r (a_n = a_1·r^(n−1)). Para sumar n términos: aritmética, (a_1 + a_n)·n/2; geométrica, a_1(r^n − 1)/(r − 1)."
  - "Herramienta: escribe los cinco primeros términos para ver el patrón, y comprueba cada fórmula con n = 1 y n = 2. En Python, sum(range(...)) o un bucle comprueba cualquier suma. Para la suma infinita de una geométrica, mira primero si |r| < 1."
  - "Documentación: Marea Verde 3.º ESO, cap. 3 (secciones 2.1-2.2 y 3.1-3.4); Matemáticas I, cap. 3, sección 1.5 para la suma infinita; OpenStax Precálculo 2ed, secciones 11.2 y 11.3."
exercises:
  - id: termino-aritmetica
    tier: 1
    type: numero
    sig: 8
    prompt: |
      En la progresión aritmética ${{a1}},\ {{a2}},\ {{a3}},\ \dots$, ¿cuánto vale el término que ocupa el lugar ${{n}}$?
    variants:
      - values: {"a1":"5","a2":"8","a3":"11","n":40}
        answers: ["sha256:e915a26e00e69ef4241d45870b405cc922941c1d18505978df8f6c6cf29bfcdf","sha256:14076dd3cad6d812bd4b809e189a6768ffa97ff4935215f814d9e045abe0447c","sha256:bdca2510e1f3cc4697d17857166a1879fdd8142968bf1315d6f7044c13ad74ec"]
      - values: {"a1":"12","a2":"19","a3":"26","n":25}
        answers: ["sha256:9131766f6b82a884e035b336ed8e778dd258cdbaaf466039a669ad482562e50a","sha256:0dce76c9d3827e6fed5d30c7d5d4fb4a881c7e690c72b0f33628b6dc23e6f45f","sha256:7280bf6eeafe86632b31a950d4bd8e2ef10ddbbc5daa72640b44f25625d0e141"]
      - values: {"a1":"-4","a2":"2","a3":"8","n":31}
        answers: ["sha256:bf60fc7d32792b86ce50d710f1f4941e5867d878fe6fb037ee3f77f7c6fec773","sha256:0d8bc51fbcb88af503b571c4c8ce617c8bdb381c8a77caaf9f8f6ee98407ed85","sha256:80e1bd3a7b822c03f370139b2d21711be4f99f8485a382fc9978a53b7f3f6866"]
      - values: {"a1":"100","a2":"97","a3":"94","n":21}
        answers: ["sha256:c1a336f5ac489d38cda979c60a0d7acdfcb04d6744092a77ff428a15a47701a3","sha256:871e38429a3dc1968b5eabc081f32e8db0f53a5e341f2e228218f2328cb85b8e","sha256:65e5853228f18054a48a10b7825016731bc1751a311efff890cc130f72fb4d8e"]
      - values: {"a1":"2{,}5","a2":"3","a3":"3{,}5","n":19}
        answers: ["sha256:01411b9cba1f2e35f3112d4aa7a04f6952b6e5fb1704b660d059371be93bcff8","sha256:bacaad7b88af57f5c13810367805d041bf508e2ff7a52abf9592bf5a6258ee28","sha256:5f4e095989e62cdfa164cbb601f227734537663305e098a62f1a439f5b122794"]
      - values: {"a1":"9","a2":"20","a3":"31","n":60}
        answers: ["sha256:418d552ed644f59c725dee32dc4e5f4750844405d5c169b379825d1e504fe441","sha256:89b55d5ee3d4a35889f00f92c2af177073a74e7ebd7c188e1d1cba2bcd9064d6","sha256:71aeb931c9e8172f2b882f602cf03f3c2ad650858bd779e88572ce7603576208"]
  - id: termino-geometrica
    tier: 1
    type: numero
    sig: 8
    prompt: |
      En la progresión geométrica ${{a1}},\ {{a2}},\ {{a3}},\ \dots$, ¿cuánto vale el término que ocupa el lugar ${{n}}$? (Si no es
      entero, da al menos cuatro cifras significativas.)
    variants:
      - values: {"a1":3,"a2":"6","a3":"12","n":12}
        answers: ["sha256:562a93a5c687f4bd7a818079ec4abdc40a2eb38a74ffd6974bcbf699b2534279","sha256:8592a8320a99dec77912403cd688063fcbcfef6a7b55cf3387d7c65d7b0700ba","sha256:ba581ba85e943a9e2cdfbef577c060774d8b9aed1ade4313abf4d51ff969674a"]
      - values: {"a1":5,"a2":"15","a3":"45","n":8}
        answers: ["sha256:f1368236ae8132edb461996d92cb157a0b0791cf54f42e3f4701b62af8448cb4","sha256:0f55f3d191a88c512884f13459ead24a838c11f04219b315f66ce55c23db4fd4","sha256:0df279bc0828e46d0c0f2120594c3a59ef4c558d40e281a10c6f23921eda9e4c"]
      - values: {"a1":2,"a2":"-4","a3":"8","n":11}
        answers: ["sha256:ea7125e1b6e10f052d38bedf40251dcbd9c72316a369958b0c0d9fada26021d1","sha256:8851d58f8c6c5e1263a3265e6f48c3c7ba7c8c6291e6efa6b6a1e6a12b3c8b8c","sha256:3843fd75aec3e475a32bb8cc690daec4c05f148971d691b829df38fd1b10c835"]
      - values: {"a1":1000,"a2":"500","a3":"250","n":7}
        answers: ["sha256:40cf3213b0e125dfcfa955a44257030427ccdd1aa417a679fce325b7a392cf77","sha256:e450cf8a470287a6b858b2baaf9aa0ab4f8258c4d64cba2b7dfa077982d18427","sha256:5ea777949c335ef1a14649b956b0dd6f6a4ea90c098c2d727baa1c1d78b5af5e"]
      - values: {"a1":4,"a2":"20","a3":"100","n":6}
        answers: ["sha256:4feff3e5b2d1f241a4e93909b010cbbf2a3f9d28a0334de82fa72d9a4fbf5925","sha256:9f1c09462318992df6d8c64de1d03e2924c83a791e3a3111e67608abb029a3f4","sha256:63c5c76d0d6265b2576d4700e902a984ac4d182ae05c857af92416abeafb08c7"]
      - values: {"a1":81,"a2":"27","a3":"9","n":5}
        answers: ["sha256:12f3c3e7c0fe0b39c88c42f414527ea34c98eb85ca4d4f29b1a8e3b4e2f34aca","sha256:a6acb39f9300fee5a36f6b89ae9c44fe30bb6d3089eccac9ced918bcecd413ce","sha256:5e87ff5a1c92b59cc78d09ee31f0074ed638b81b114981dc87ae51690f12d86b"]
  - id: tipo-de-progresion
    tier: 1
    type: opcion
    prompt: |
      ¿Qué tipo de sucesión es $2,\ 6,\ 18,\ 54,\ \dots$?
    options:
      - |
        Aritmética de diferencia $3$
      - |
        Geométrica de razón $3$
      - |
        Ni aritmética ni geométrica
      - |
        Aritmética de diferencia $6$
    answers: ["sha256:1ae7c93f8544f561abafcf762d68c79d1a0d9ffaf19861e7d29ea55bfd5de8d4"]
  - id: lugar-de-un-termino
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En la progresión aritmética ${{a1}},\ {{a2}},\ {{a3}},\ \dots$, ¿qué lugar ocupa el número ${{x}}$?
    variants:
      - values: {"a1":5,"a2":8,"a3":11,"x":152}
        answers: ["sha256:e7e354eb32e93ffe759b216c16ece62f719b6ed63d714ca37cc53ef78036438c","sha256:2a0f4b04a6cd4043aa8abb22b740dc9b0e3e7be1e296b1d043b19a8959f16f6a","sha256:0b9c86030530874bee9a6da72663618d489d49f3f93449aa78bdd418d099ef97"]
      - values: {"a1":12,"a2":19,"a3":26,"x":271}
        answers: ["sha256:4b317cc32ec884c9817bb0eff1a2ae80d722f910fdb46c036189242133cbe5f5","sha256:6c9d9929fef7df0700686c0e911e229b1c678783a88b37b7560277f288a5a249","sha256:65aa687775cb8756fc9d62adfd6fbb26c2c3dd82d16d8ab5e2b80fc51ea4506f"]
      - values: {"a1":-4,"a2":2,"a3":8,"x":170}
        answers: ["sha256:10cf2d9e978193a47df3bcdf32e1ddb9bb86e12d93609e77c1f450ae00e54bf4","sha256:d16b53414db5ae54198ceec25967ff8f59e6f2563920113276305adccda726cc","sha256:f5a8209429041b6ce3b5c390919955c7cdb3565a12e5025161a7f5dbc5f85747"]
      - values: {"a1":100,"a2":97,"a3":94,"x":1}
        answers: ["sha256:3c18eba8df8a6b203de43d577cbef8e60a8a01fb796e025b686c921617f0cd26","sha256:6750d8e52e31fe9c8c9e890d1b4472c49198e46d65a9e88aa1bbf5f95fb8b3a4","sha256:f02a033b62234e5f43aa199b2f9a6784b4ab402a8b68485ecbcd1061cca2098c"]
      - values: {"a1":2,"a2":11,"a3":20,"x":497}
        answers: ["sha256:b8e0d59acc814a20c3b333afd769fbe96a4050fda68aa5424ff48cbe55567155","sha256:9ed0f5fd3f33d4e0a84091ec5045f89f371b0c4ed05c576c8badfb9f7f3f2791","sha256:e302d9d60504c1602a3b4a9c845230b0c8b09f7ba20dd74df5f992db33c1211f"]
      - values: {"a1":30,"a2":34,"a3":38,"x":222}
        answers: ["sha256:9068bc828383814455119e77c851653784d45282c21b1269f7c865a5ca02b552","sha256:9cb03693602f4bc8023d35e481c50a828b3188ccf896dc672feadeebf05a75f3","sha256:f5857c8bc845bebc8748bdb37301110bc011d8da4bb95702234633a4e1d87a6f"]
  - id: suma-consecutivos
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Calcula ${{a}} + ({{a}} + 1) + \cdots + {{b}}$, la suma de todos los enteros desde ${{a}}$ hasta ${{b}}$.
    variants:
      - values: {"a":1,"b":120}
        answers: ["sha256:7d4fe6ca5e7b381f4861b8316418958f11bf27f8bb404d9e6d1da53132268aca","sha256:3922aad752299507cba391312a45771c69bc0cab1c986f5dab8f317fd5c062d6","sha256:1da32072df96a50d7e7688e4c6715351eb353daaad2f5e69c2e202e292b93823"]
      - values: {"a":1,"b":250}
        answers: ["sha256:9cfafca1d4f40258e2b5bcd1c87cc7d60d38633a1cd4100835341a68b646cfa2","sha256:d61d6933d5e6a56ec84db3abd9f8bc100261ad6343b5aeb325c262ec9fa882d3","sha256:5fa0db47bfdd19bc615d768b8232eeb4efadb51b475e87f375771b00cc2ce6c0"]
      - values: {"a":101,"b":200}
        answers: ["sha256:2b317f1379376810a861c6579b654572e4150e18a7d95b16f8aac4c938fd30a9","sha256:1dc350b1402fc590ab70912819e34bfda9de46c6284154cf58989e594440c310","sha256:7c9fb1a21656c7a775163ea42eae450d101a67fbc170f2c5661c951dcf0f5d58"]
      - values: {"a":50,"b":150}
        answers: ["sha256:fa45d104ad7308982cda4f27d45a3b2ea18e30be2f5242f30712de5c77085cb2","sha256:7bfd0a40cc7e799e627421a236b643b74fc56dff937dd34975c1bc2ab22c2c50","sha256:bcc214d52e79ce5ff2f73b734661828762eb1b3c773ff3d6567773453269595b"]
      - values: {"a":10,"b":90}
        answers: ["sha256:b553281f67bad24b93770312ee477d866902318254880cc4ff469fe8bf23edd5","sha256:c8eb9edf6d4e687db528c9d4982251c6c85b7e354a97b51d418c12f55baa0cbb","sha256:ca40af2ac70373cc41710422252f2eaeee24f6eec27de43140e762a20e857d27"]
      - values: {"a":1,"b":1000}
        answers: ["sha256:813bbe51f57b43513b60ea44d29ee1dcee2724cb8df460fbd295b9b3fba7ddda","sha256:95363cee1c1c4ae12f0c4acf18f7d34e06cccc12a8e7905db4c06bdd16c66e67","sha256:036288c9a8206e7474a1c10b029e89c13f46b8ce8845f317a453b4611ced7f8e"]
  - id: suma-geometrica
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Suma los ${{n}}$ primeros términos de la progresión geométrica de primer término ${{a1}}$ y razón ${{r}}$.
    variants:
      - values: {"a1":3,"r":2,"n":10}
        answers: ["sha256:1a0df776dce63bb4e03a695e547f32ef989574b94ec672369f140b4af7e8f49c","sha256:8acb7c353d0b0563d71518dc242d6afa2c89bb2630fee6830dafcc79291e1f40","sha256:fe86c9ac1ad5c8327a06d110739236021bfbc34828aca1136d3582951911997a"]
      - values: {"a1":1,"r":3,"n":8}
        answers: ["sha256:957561b80a7c496d9595b6422bef8382cefc9541526882aef70d2003fd3f6003","sha256:07d0d9e6f7b6df101298ea62306050289e9623b99ec50f0cf8990e67fcf0691a","sha256:71ae0b74d8c20bbf1ba2264e0ee6d5fe838cbb9b8c774dd8df485fd6f97e2cf6"]
      - values: {"a1":5,"r":2,"n":12}
        answers: ["sha256:c6ea5d06f8ce37b553294dd3b4285bdc4471733e96f5505c5495e0c50ba8855f","sha256:1b678e7a0c6593273498b390cb13c642bbd6f6ef22891c7cdccbc78ed4f47f2c","sha256:8e58bbcca70a97e0cfd5887adad299df9db072c3813d3adff9aef667fdb1717e"]
      - values: {"a1":2,"r":5,"n":6}
        answers: ["sha256:4b99c632f4fedc2ff9e60528f4de13363a95b3abc464053ecafb1e83597d4e05","sha256:d70c1fae5be4d9703ba6e2f28d67f6300e45bcb160578621346ab465953f1bcb","sha256:11dab7500cfa6896ae1988cd9a45aeb272c6b072ef6419a3a22449913247c317"]
      - values: {"a1":7,"r":2,"n":9}
        answers: ["sha256:046d50218f33ee2cd633be328e7caaf85a581401a0a899bfa693aef0ac137315","sha256:c73c863df1f1b46a0880681e50746347fdc4a950cf460aa47baf2338c649a154","sha256:9be71f18ab840f69eac6d48ef9ae6af6a3c42a8f0cdd5cd46c1a982e8486452a"]
      - values: {"a1":4,"r":3,"n":7}
        answers: ["sha256:4399f56583c01ff03057419010d48d1283b332df1b3880ccac00ad6af3445dc4","sha256:1c4163761fa250a9f6fc64b4a72a21e4fa69c3dc1719f4a383c7a0f68498a339","sha256:21ebe2e22f6bc4cab5244aad0938427815096b904a2c7fa0d3c2579ae3a69fac"]
  - id: ahorro
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Ahorras ${{A}}$ € el primer mes y cada mes ${{D}}$ € más que el anterior. ¿Cuánto has ahorrado en total al cabo de ${{M}}$
      meses?
    variants:
      - values: {"A":50,"D":5,"M":12}
        answers: ["sha256:82cc06528523a859270e92fa5689e0facbaf498ef080bbfe5f02ab8347e43981","sha256:934346943ddf399f6b192ba3be6b6450a9b2465d541e1489ff87d20de6db09a0","sha256:d7b84f64312a11494eced8a6b0728681436104ab91378beedcf30d2f0e3026de"]
      - values: {"A":20,"D":10,"M":24}
        answers: ["sha256:eef9cc180bcf9e83e84a55d1eafde5bc47ed79cd9a3dd59e9a05e832c6722cd3","sha256:3813987c7ed62cfbde967d931f98f2877614c38dcf3b4820b1afd28f23e2c59c","sha256:c3ce8b41f9910e7910f7ed39442fcbeb604f3ae841ba9b8cddc1802e849fa564"]
      - values: {"A":100,"D":15,"M":10}
        answers: ["sha256:250a740b87570bef01660f0df9605919f3d8f70670b5ff48bd3e0c54a76d96e6","sha256:34b000881749eed5c356fc60260f1a1c3d67699a1e290fb2cf0109f18696aaf0","sha256:7ff8129417806a5ad2b2d206b9a6c9b68e0a48766ef853dfee294e8320dec8f7"]
      - values: {"A":30,"D":2,"M":36}
        answers: ["sha256:0f2485726837db2627e29a3aa0f7eeda66145f4514fd662b13535623f41259c5","sha256:71b0a2a79df38878ff092129593fb3850848bca30c0f6b0cd637c9216358ac7a","sha256:f06c72238b64696025eec07bd74553b7be9dcacf16744ce95ea441e4d97e9fea"]
      - values: {"A":75,"D":25,"M":8}
        answers: ["sha256:c0ad34fdc0bdcb12740a2a579d34f390ed1d795775df5b4b30ddc37fd05ee91e","sha256:5e3d1acc9201788c73b99d117399a3384b60e10b229b860e88218f4202a8c3f0","sha256:0bcaaebfaa15bf74f1c8a919f2be075661c3524fb710f48d5e0f22cb6a11cde5"]
      - values: {"A":10,"D":10,"M":52}
        answers: ["sha256:e141fd0d61a103a33e7de745c8f2b33638a5b383c522374c6bfab9a31b7780ac","sha256:a8f88bda1b8cdd05b22c2ead202b51a85af0e20f77efa614a33f2394db870a23","sha256:acd88cba0eda1e8fcb5823bdab81ccb3d515b495e40f36a4c025484b028719e2"]
  - id: suma-infinita
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula la suma de los infinitos términos de la progresión geométrica de primer término ${{a1}}$ y razón ${{r}}$.
    variants:
      - values: {"a1":6,"r":"0{,}5"}
        answers: ["sha256:bc906e9e5cdfac4399a23f8921e8a407f48c60f6e247fffa1f47572bba53b56e","sha256:ab3a6c085c8bda538fe01d809a0d2cd235bed36362d3b1b95fa63768a6b87306","sha256:b7535e67eae3cbca5733b57479423f73d94b02803ce46b0c145f797dd2e2bfa6"]
      - values: {"a1":10,"r":"0{,}2"}
        answers: ["sha256:d2063e70151a3af812c76fdd1ffb7592a8750418e14da33fc9c393a6dd1c8dfa","sha256:103a3d0d7c1b397379148a8cdc6a9be0aa372ec1040321ba26fd9994cc7a9767","sha256:3a9ac69876783ca834e3d26fe812d42ff94475519e22e68b05b0794ae5b96368"]
      - values: {"a1":12,"r":"0{,}25"}
        answers: ["sha256:ac550ea61bfa29b9ee9ea658c988941de76ad07e0aed7ff91564761ea949e1e7","sha256:9fe0ab47baedea23d2d8a4914f61ddb84c98b6f66364b5f7d84286322067f27f","sha256:48c05d9a213bf75c72b2b980428d8ca42c4cae39a50735bfd951e6096b2ab120"]
      - values: {"a1":9,"r":"-0{,}5"}
        answers: ["sha256:b0de2309437a4183881e8d83d8d8218a29676a80da485390e1c6affbdf36bfc8","sha256:816880e953de7503f96c33df05d8d2d1f066518561f42e58a5063a9ed51297c0","sha256:907a7b7c804e6376abe9b153f54d3383f892131170867cb42dd45b085734066a"]
      - values: {"a1":20,"r":"0{,}75"}
        answers: ["sha256:4161277fbd0cbe808791bba7469db2851db1327cb6bbe2b0b6b300f5a105d9df","sha256:0c6a7ecb81426c7cec8e5f2b929856abf7e6821a7da46e44390c4186e6ad8be7","sha256:39ff9121a3f650a623e1a272e993f290ff60416174a0f92148ee90591d97904a"]
      - values: {"a1":4,"r":"0{,}6"}
        answers: ["sha256:d8ac153e887e0a0f1fce3c9ec96e9c136f547a9ce7a715174788d086777b189c","sha256:39c32838b37b9661225cb763cf92bf96a511a6679bf0aba7fa10097ba52bf164","sha256:cae7b98faaa6d3388fd794994903cb8b81363718753dc96a9f26d98159852051"]
  - id: ladrillos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una pila de ladrillos tiene ${{B}}$ ladrillos en la fila de abajo, uno menos en cada fila, y ${{T}}$ en la de arriba. ¿Cuántos
      ladrillos hay en total?
    variants:
      - values: {"B":30,"T":1}
        answers: ["sha256:8527afd684f708d0ec4d9c5045691ebc28ed40b4d92e598f4604019859e89943","sha256:49049f973c6938fb92fc7b01bd1493be28593248d5fcaf68c599fd39342bb92b","sha256:88ad372f326f315bd55def090480bd7dd8632f7a29c8d0fdc34463fb629f0b73"]
      - values: {"B":25,"T":5}
        answers: ["sha256:35c09c523d5a7055ab4007815ae49124fcceb0f0f254060e3f3395cff7cd8933","sha256:1b431caefae408c4981564295ae5b865f68fa713fdb9abeff470bed03221a380","sha256:80b070893fa5cb27e489b9fd2a1526062371d6e7a7270e94b9cc8b45e0c6d2d3"]
      - values: {"B":40,"T":11}
        answers: ["sha256:e7e946264a074817077b45db0777e14b396c73eb8dd9196387af78f230eeeb15","sha256:f8e42a4b80dce21a15dd7e688f3e3c434784f0038269a473bf9c793465d3074d","sha256:f501e59f988e66ff63ba769bfcaee7954a097e98428f1a39b96d7407b824da2f"]
      - values: {"B":18,"T":3}
        answers: ["sha256:30b21059940eca39265068b86c0a5aed7a776882a40bb6a53e9b88c8f664f9f3","sha256:09d7c2e75a0a485b2830ca0cf35c507f49aaa0ca7723d8c673d9343b563ec408","sha256:adf9476a66ec85ab6338a76a6ac32120d24cf69891d088c1eb33bd34ad663c63"]
      - values: {"B":50,"T":21}
        answers: ["sha256:dc74c2c6bec74301fceb1f829dad863ba16043d8b1146342d11da70b63f85e5a","sha256:028f4ecfe94c604f94af2a7b08782c2ee0744f0278a0aa1d0f05dbd21f16c93f","sha256:96e8cda933190e1faf0ea83dde6fcb0ec8d28e39007d9e5e1cb59bf7d6c2242e"]
      - values: {"B":12,"T":1}
        answers: ["sha256:75affacce5329912affdee8ec180e969a71ed21aac5abb0c6b221f12d5d98fa7","sha256:928a762bd8091984dd853aee5734dca37d9e3e1665a3ea9a788d7aff56ee528c","sha256:5198b33d103f352b37d9cc1e5214db774909e0e8b0dff75a1776d2ba20534aa1"]
  - id: fibonacci
    tier: 2
    type: numero
    sig: 10
    prompt: |
      En la sucesión de Fibonacci ($F_1 = F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$), ¿cuánto vale el término $F_n$ para $n = {{n}}$?
    variants:
      - values: {"n":12}
        answers: ["sha256:aab452dba0fa114af13a0182a203c3b7ced4b9a3d1ddb4ad5e6e3ee4fe863a6b","sha256:4ed8f79f5da6109dbec0345aa15d6d8e5d86f507707c9df85a88861618731cd1","sha256:82f02b4bd4ef80b3e80230e799ef3199ba707eef4428f75641e3e4b4474f54e9"]
      - values: {"n":15}
        answers: ["sha256:32487198db9b96d34c32f666effaec39ab96218e49ec73ec3a74b2ca73c2b73d","sha256:4a830df926ee09091ff4db3d437dfaf745d82ef20a3b2388759ab7a46e3c48a2","sha256:f85a27de26b4d0ba12b275a2281bfb1498d47abe99da5d84cd95aafe850d9cf3"]
      - values: {"n":20}
        answers: ["sha256:74e3a0188a507744ea733340af97152ee5cae9bb7627efbf9bde51e36a9cd5cb","sha256:d1d54e17296a2ce520ddbe298a6b6708a1b491ae89438c4d57d4c8e2f369f4aa","sha256:e944625b4caacedbe1ce7ff47ee091907d4500ad135558131c051982c74c797d"]
      - values: {"n":18}
        answers: ["sha256:e0afb30d54ff0aff845b01d638224e48c86e9f38cd7988276cf1aab3db3df24e","sha256:ae35474c6de529ef7d7f94a233a642de570ddf642cd8386208cb76c605b4fc91","sha256:f21436de23654ea5ed3968f76a529cea6f0d7d146db29fefb42e7c1987bcddee"]
      - values: {"n":25}
        answers: ["sha256:f5b85c432f3709b2dea0368a4f0bad0000abf3d4be38baececd56765584782c0","sha256:6b84a34bc23512e87e295d658816fd8559df28987558f7312f4e9f743c660569","sha256:786e26366c1ab2787b9bec1872cc31b618eec440dd578f6532212023bbda07d2"]
      - values: {"n":10}
        answers: ["sha256:766245cfebadf2af3e857bda4e3eeed41fbc637441d1426bc4d405c24f331a72","sha256:b08484505c71fb5adbbf41fe5d5430213de6a639f50930235420597770dc5361","sha256:03afed736a1daf9a53021c07aad86a58af629d217a6cc4ed1f817321ccb8df12"]
  - id: pelota
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una pelota cae desde ${{H}}$ m y en cada bote sube el ${{p}}\,\%$ de la altura desde la que cayó. Suponiendo que bota
      indefinidamente, ¿cuántos metros recorre en vertical en total (bajadas y subidas)?
    variants:
      - values: {"H":"3","p":50}
        answers: ["sha256:c5b47b97d9389e7d759b237402de6a2f9f595fad8ed721033b0d4265b4dc0dba","sha256:71681a4bce27d64a221dcfdaa7e30a03f673c0732a85034974e1461c3abbf87d","sha256:ea846920ded96ca8cee6113f8a4e926d4be14d9a322fd99b4be948d742f89d00"]
      - values: {"H":"1","p":75}
        answers: ["sha256:fbfe08be51a2635dd6c593fce6c49ede101bb01256efd4cfb211f1281a687864","sha256:1aaa087380a8b77efb1fd5024eec58a8473a0a51834c2a113bea60cbb18f3cfe","sha256:f3c1574ac38544e2ac3a99abe18feb518ffdd0adeebbe2628db1e5bfa1593d93"]
      - values: {"H":"4","p":40}
        answers: ["sha256:2fdf998827a9ae87670fb180b7adced1ce3eba85896e8e987060b11ebc51b508","sha256:da5ea5dc4447b3ac29b94c72087f6cc49f1e9e325916fdde5ef0b5e7ce499901","sha256:2ea78f2f89cde307c0fbcacfa6c1ee7f16234540031a47979aa1ed2fb4c85a38"]
      - values: {"H":"5","p":20}
        answers: ["sha256:fa913e35eb14c21d01c07af5ccc850bc47d8e5f847b3cf8ca0f39f6dcd9c3b12","sha256:5fe4f70d25d98d893b0f45aa3bfe3b49cc3309492bf4105ec4b88a0ba5deb653","sha256:e7408f280003a74a81cab99d3ea6573c9d0aed39750f135765be54fc7b2b40b5"]
      - values: {"H":"2{,}4","p":50}
        answers: ["sha256:ccc92e41aa9754b08f0ab05579f4f91dbd5f54878541e6cda0860d2082190926","sha256:1b9d6a6a16046f5e0ef71929c74f92663cba5fefd2b7cf894da5cf66bfb93841","sha256:ca97a5a6f2cd384fb3f4bd98a2f8f29108552ce8dbff98dc13a2963c28e66837"]
      - values: {"H":"10","p":80}
        answers: ["sha256:80b657dd190e166cadd8563d8399a86ddcfb06a3fe47dc1902cbc549776c3bff","sha256:b7f9948f951c0fb7f8005596339709ff2f2ae834e5320ead8eb1596dc38c6b49","sha256:0bebe06926b506b70df13f2183a76c72dc8ee3e35277db206d0e919447afc9a7"]
  - id: duplicar-capital
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un capital crece un ${{p}}\,\%$ cada año (interés compuesto). ¿Cuál es el menor número **entero** de años tras el que el capital
      es **más del doble** del inicial?
    variants:
      - values: {"p":3}
        answers: ["sha256:f26eba6de140b0b6afa2a402932d08cd245d528478581fb14d8f9e71591db564","sha256:f4f894f7d25df8d522fd5251eb3e8fcc956b5de0b4a098427a547d7d7d84085c","sha256:eb8e68746aa3f06266d0bbd56fc06836a30aa73bac0fce2e91415420f00d89e0"]
      - values: {"p":5}
        answers: ["sha256:274daa863ca38f73815f0376176d461abab75d87a5739248c5700e2cd8bf6a65","sha256:75bac6897b4661b2b61eba11d88424692b9e5af9d6e0dd076c376ccace96ae81","sha256:16b797ff3c9c3247d369d0cd09f50df40e6ed00e49c0aa59d3a9c38408bd00f5"]
      - values: {"p":8}
        answers: ["sha256:1ccd8409c092a80b0adfeec609db5b8b70f9c1bd55731e51500f1c87514e84a3","sha256:12e0be42e22cb3debf52abc8b2b8f70a8f67fb467fe2f9a0a05a5df47304d3bf","sha256:76781e681b5ec080b100ab5c49b78669b30d840ebfd494363755a082138df0ff"]
      - values: {"p":2}
        answers: ["sha256:f52cdaf0d35ec5bf11a19bac82e689d390a5912ca95238bf8c78530e1ea6b3b6","sha256:b9fa1777fcc78f5f5d6f69d6e24661143ae90d7e356d07e452a14ebe915a06c7","sha256:1b8145f14b67158a92ce6536d9f788fdf91453821f47b9b9c376d66c7d3aae5c"]
      - values: {"p":10}
        answers: ["sha256:98e1c490838e7f30ba4c2a6224199d77f5a2ea51989854e9b5f26b4e718fa1a3","sha256:c8a1fdab50c091c3a0a19211a53ac0c3f244a838f619f66e1dd73e4af57acd0c","sha256:6d6e3cd9b802e33635797788f9ca8333c9a0a3aff4153c82605aa373521ea193"]
      - values: {"p":6}
        answers: ["sha256:655f9ee1970239f4ef7160d74a35f418036a338329435b642363267c08f4bcda","sha256:319a55f04aaa2b0aefd24c8854d37cc4d4309fc754389843dc7684824197766a","sha256:a3e77c1883745451ef2d664e86ffe51a090bcce9fc808b7b5df349099d8d7f98"]
  - id: convergencia
    tier: 3
    type: opcion
    prompt: |
      ¿Cuál de estas sucesiones es convergente? (Piensa a qué se acercan sus términos cuando $n$ es muy grande.)
    options:
      - |
        $a_n = 2^n$
      - |
        $a_n = (-1)^n$
      - |
        $a_n = \dfrac{3n + 1}{n}$
      - |
        $a_n = n^2 - n$
    answers: ["sha256:a79397df9e818c19cf5b08db4a9d028c498c8d4c8f573c015fb28d28ead07448"]
  - id: suma-gauss-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que la suma de los $n$ primeros términos de una progresión aritmética de primer término $a_1$ y
      diferencia $d$ es $S_n = \dfrac{n\,(2a_1 + (n - 1)d)}{2}$. Después úsala para calcular la suma de los múltiplos de $7$ que hay
      entre $1$ y $500$.
    sealed: "gz64:H4sIAAAAAAACCn2SzW7bMBCEX2Ug8CDZsmEKdtUI9aEIArRFgR5yLAuDlpiEsbRUSCmAYfiBcu6tV79YQck/UVL0tsQulzPDbxc4U7aNNhRkwa2SYLcrwhJyxTGGXCUYQ4i8MI3rzsSQGwKTq815KtxgAh4VbIobl1u91pVxKCVcW0nIEoWyKn8w2PqDVc+HF4dt1/WDzeHFVpoMpKBTnQliTFDSiwlPaijyz/Wq5GpHE76PBgJDuaKuxyNM+x3XspCopVWPEs+yVCgNKu0qk/Uu+k1jPtnssUQytORLwgSbqHjVpLPfL3ILRuy438UoW3VvBLGjchIiDt9cixi2p5iFuLMy39G7mf0u2bMYT61CI6u1PrwQnILq8lVgx4uvkqHuylSQoNHoc13qXOb68JumoxG+G4fq8KdsdF0ah0KBpQyKGqvAeKdnMZsxOP+1aQw+jyGEzzTG/CplCNn8KsUSaR81Us6iDMxbSDmLfZLc174susKnf7vapXx/sZlyHwefY4x0dtrUWR3OdI3FbH7s8FSI+ONV0psLr01VW7Pu3WVgabcUYwxZTXl0Efx2eZocd58MJYvFh8FTURAHtl1bnQfZz12QW90oq02QBTfHPzgBXhiHZ5Urh/DfrEcwaJ1ES5D2vq0UNQbqqdUeR2oUcmOtyhuDsDYW6lFVdWliaCravHMZTYM4qFtqjAuyZB8P9HxrXaPvdC47WvJXuHfy2BmtiWcW227sYQju//Z/LRQdH1hrRd53bc29Vc5L8zCV7/BKEb5HIj4Dg9pYr4JdeMLSkwYhSoXFbIZPHgA2MM7fCPuxbrQiT/D51wbTv/Z/AUxFz4/eBAAA"
  - id: r-diferencia
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la diferencia de la progresión aritmética $25,\ 21,\ 17,\ 13,\ \dots$?
    answers: ["sha256:2e2e0841e51cfe5f8b2803dfb3cf06971f4b08489949c73ea675fe8e017557df","sha256:d96fe79f9eecba7d54ac7d8ae0435941be37871f26dd5064fadd99674f8d70ce","sha256:441756bca491e3ad603fccf799a94608bd6c89f0e8bdeddf01f17f6b4ad08b4a"]
  - id: r-razon
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la razón de la progresión geométrica $64,\ 32,\ 16,\ 8,\ \dots$?
    answers: ["sha256:ab66e24c8f3392b0465b56e502d4db1636ca7d2558a9be96071d89d9e85a5fdd","sha256:ae8ba2aff888b54bb8b1520226f6ba6e50820a4da4b860292c51de1a2eed294d","sha256:e7c606dd6f5bee311f1f365726dc51bacb616d223603e6329396dba4eac1bcab"]
  - id: r-saltos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el término general de una progresión aritmética de primer término $a_1$ y diferencia $d$?
    options:
      - |
        $a_1 + (n - 1)d$, porque del primero al $n$-ésimo hay $n - 1$ saltos
      - |
        $a_1 + n\,d$
      - |
        $n\,a_1 + d$
      - |
        $a_1 \cdot d^{\,n-1}$
    answers: ["sha256:49ce0b1e3876da6311b18b71c67d9fefdd146a5020d446b79fc8fc3b12b2c861"]
  - id: r-suma-infinita-existe
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Para cuál de estas razones tiene sentido sumar los infinitos términos de una progresión geométrica (con $a_1 \ne 0$)?
    options:
      - |
        $r = 2$
      - |
        $r = -1$
      - |
        $r = 1$
      - |
        $r = -\frac{1}{3}$
    answers: ["sha256:34df9636ea8cb43d3cec584b3fbe3442b6ad46559e61c3bb585f9be7d2f06b56"]
  - id: r-decimal-serie
    tier: 2
    review: true
    prompt: |
      Escribe $0{,}555\ldots$ como suma de una progresión geométrica infinita y calcula su valor como fracción «a/b».
    answers: ["sha256:6523f09afbc5ba27530a3abe3ff0f5db40b2b859346f4425d64edd6d596c6eb5"]
  - id: r-recurrencia
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una sucesión cumple $a_1 = 1$ y $a_{n+1} = 3a_n + 1$. ¿Cuánto vale $a_5$?
    answers: ["sha256:ceb30d6d4ecfb4645a0c34814b8c558c457c184176805f6efe6a6b3c5c5d64db","sha256:bb61971c16077617365994b236a8f559cbad883453e38a85a59bf24fbe54f47d","sha256:6029013d7ed08500bee38409a960aa55605bb8812091b04f0f1e2e053294e0e8"]
---

# Sucesiones y progresiones aritméticas y geométricas

Una **sucesión** es una lista ordenada de números que sigue una regla: los pisos de un edificio, los ahorros de cada
mes, la población de cada año. Las dos reglas más sencillas, **sumar siempre lo mismo** y **multiplicar siempre por lo
mismo**, dan las progresiones aritméticas y geométricas, que modelan desde el sueldo con subida fija hasta el interés
compuesto o la radiactividad. Al final se asoma una de las ideas más profundas de las matemáticas: sumar **infinitos**
números y obtener un resultado finito.

## Objetivos

Al terminar sabrás:

1. Definir una sucesión por su término general o por recurrencia, y calcular sus términos.
2. Reconocer progresiones aritméticas y geométricas y hallar su término general.
3. Sumar $n$ términos de una progresión aritmética o geométrica, y demostrar las fórmulas.
4. Resolver problemas reales (ahorro, préstamos, crecimiento, escaleras de ladrillos) con progresiones.
5. Decidir si una sucesión crece, decrece, está acotada o se acerca a un número, y sumar una progresión geométrica
   infinita cuando $|r| < 1$.

> [!question] Test de entrada
> 1. Continúa: $3, 7, 11, 15, \dots$ 2. Continúa: $2, 6, 18, 54, \dots$ 3. ¿Cuánto es $2^{10}$?
>
> Respuestas: $19$ (se suma $4$); $162$ (se multiplica por $3$); $1024$.

## 1. Para qué sirve

- **Dinero**: un sueldo que sube $50$ € cada año es aritmético; una inversión al $4\,\%$ anual es geométrica.
- **Ciencia**: la desintegración radiactiva, el crecimiento de una población o de una epidemia en sus primeras fases.
- **Informática**: cuántos pasos da un algoritmo que divide el problema por la mitad (geométrica), la memoria de un
  vector que se duplica al llenarse.
- **Matemáticas posteriores**: las sucesiones son la base de los límites y de todo
  [[mat-calculo-1|el cálculo]].

## 2. Sucesiones

> [!practico]
> Una sucesión es una fila de números con un orden: el primero, el segundo, el tercero… Como los asientos numerados de
> un cine. A cada posición $n$ le toca un número $a_n$. Hay dos maneras de dar la regla:
>
> - **Directa** (término general): «el número de la posición $n$ es $n^2$»: $1, 4, 9, 16, \dots$ Sirve para saltar a
>   cualquier posición sin calcular las anteriores.
> - **Paso a paso** (recurrencia): «cada número es el anterior más $3$, empezando en $2$»: $2, 5, 8, 11, \dots$ Como una
>   receta que dice qué hacer en cada paso.

Una **sucesión** de números reales es una función que asigna a cada natural $n \ge 1$ un número $a_n$, su **término**
$n$-ésimo: $a_1, a_2, a_3, \dots$

- **Término general**: una fórmula de $a_n$ en función de $n$. Por ejemplo $a_n = \frac{n}{n + 1}$ da
  $\frac{1}{2}, \frac{2}{3}, \frac{3}{4}, \dots$
- **Recurrencia**: una regla que da cada término a partir de los anteriores, con los primeros términos fijados. La más
  famosa es la de **Fibonacci**: $F_1 = F_2 = 1$ y $F_{n} = F_{n-1} + F_{n-2}$, que da $1, 1, 2, 3, 5, 8, 13, \dots$

**Ejemplo resuelto.** Si $a_n = 2n^2 - 1$, entonces $a_1 = 1$, $a_4 = 31$ y $a_{10} = 199$. Comprobación del patrón: las
diferencias $a_2 - a_1 = 6$, $a_3 - a_2 = 10$, $a_4 - a_3 = 14$ crecen de $4$ en $4$, como corresponde a un término con
$n^2$.

## 3. Progresiones aritméticas

> [!practico]
> Subes una escalera: cada peldaño está $18$ cm más alto que el anterior. Las alturas de los peldaños forman una
> progresión **aritmética**: se **suma** siempre lo mismo (la **diferencia**, aquí $18$ cm). Para saber la altura del
> peldaño $20$ no hace falta contar uno a uno: has subido $19$ peldaños desde el primero, así que estás
> $19 \cdot 18$ cm por encima de él.

Una **progresión aritmética** es una sucesión en la que cada término se obtiene sumando al anterior una cantidad fija
$d$, la **diferencia**: $a_{n+1} = a_n + d$. Su término general es

$$
a_n = a_1 + (n - 1)\,d ,
$$

porque para ir de $a_1$ a $a_n$ se suma $d$ exactamente $n - 1$ veces. Si $d > 0$ es creciente; si $d < 0$, decreciente.

**Ejemplo resuelto.** En $7, 11, 15, \dots$ ($d = 4$): $a_{50} = 7 + 49\cdot 4 = 203$. ¿Qué lugar ocupa el $123$?
$7 + (n - 1)\cdot 4 = 123 \Rightarrow n - 1 = 29 \Rightarrow n = 30$.

### La suma de los términos (el truco de Gauss)

Según una anécdota muy repetida (y probablemente adornada), al pequeño Gauss le pidieron sumar los números del $1$ al
$100$ y lo hizo en un momento: emparejó el primero con el último ($1 + 100$), el segundo con el penúltimo ($2 + 99$)…
Cada pareja suma $101$ y hay $50$ parejas: $5050$.

> [!formal] Con rigor: la fórmula de la suma
> Sea $S_n = a_1 + a_2 + \cdots + a_n$. Escribimos la suma dos veces, una al derecho y otra al revés:
> $$
> \begin{aligned}
> S_n &= a_1 + a_2 + \cdots + a_n ,\\
> S_n &= a_n + a_{n-1} + \cdots + a_1 .
> \end{aligned}
> $$
> En cada columna, $a_k + a_{n+1-k} = \bigl(a_1 + (k-1)d\bigr) + \bigl(a_1 + (n-k)d\bigr) = 2a_1 + (n-1)d = a_1 + a_n$: todas
> las columnas suman lo mismo. Hay $n$ columnas, así que $2S_n = n(a_1 + a_n)$ y
> $$
> S_n = \frac{(a_1 + a_n)\,n}{2} . \qquad\blacksquare
> $$

**Ejemplo resuelto.** Suma de los $40$ primeros impares $1 + 3 + 5 + \cdots$: $a_{40} = 1 + 39\cdot 2 = 79$ y
$S_{40} = \frac{(1 + 79)\cdot 40}{2} = 1600 = 40^2$. (La suma de los $n$ primeros impares es siempre $n^2$.)

## 4. Progresiones geométricas

> [!practico]
> Doblas una hoja de papel por la mitad una y otra vez: el grosor se **multiplica** por $2$ en cada doblez. Eso es una
> progresión **geométrica**: se multiplica siempre por el mismo número (la **razón**). Con razón mayor que $1$ crece
> deprisa (bacterias, interés compuesto); con razón entre $0$ y $1$ se va encogiendo (una pelota que en cada bote
> sube la mitad que en el anterior).

Una **progresión geométrica** es una sucesión en la que cada término se obtiene multiplicando el anterior por una
cantidad fija $r \ne 0$, la **razón**: $a_{n+1} = a_n \cdot r$. Su término general es

$$
a_n = a_1 \cdot r^{\,n - 1} .
$$

**Ejemplo resuelto.** En $3, 6, 12, \dots$ ($r = 2$): $a_{10} = 3\cdot 2^9 = 1536$. Una progresión geométrica de razón
$1 + \frac{p}{100}$ es exactamente el interés compuesto de [[mat-proporcionalidad-porcentajes]]: $C_n = C_0(1 + i)^n$.

### La suma de los términos

> [!formal] Con rigor: la fórmula de la suma
> Sea $S_n = a_1 + a_1 r + \cdots + a_1 r^{n-1}$ con $r \ne 1$. Multiplicando por $r$,
> $rS_n = a_1 r + a_1 r^2 + \cdots + a_1 r^{n}$. Restando, casi todo se cancela:
> $$
> rS_n - S_n = a_1 r^n - a_1 \quad\Longrightarrow\quad S_n = a_1\,\frac{r^n - 1}{r - 1} \qquad (r \ne 1) .
> $$
> Si $r = 1$, todos los términos valen $a_1$ y $S_n = n\,a_1$. $\blacksquare$

**Ejemplo resuelto (la leyenda del ajedrez).** Un grano de trigo en la primera casilla, dos en la segunda, cuatro en la
tercera… hasta la $64$: $S_{64} = \frac{2^{64} - 1}{2 - 1} = 2^{64} - 1 \approx 1{,}8\cdot 10^{19}$ granos, muchísimo
más que todo el trigo producido en la historia.

**Producto de los términos.** También se pueden multiplicar:
$P_n = a_1 \cdot a_2 \cdots a_n = a_1^n\, r^{0 + 1 + \cdots + (n - 1)} = a_1^n\, r^{\frac{n(n-1)}{2}}$ (en el exponente
aparece una suma aritmética).

## 5. Cómo se comporta una sucesión a la larga

> [!practico]
> Si cortas una tarta por la mitad, comes media; luego la mitad de lo que queda; luego la mitad de lo que queda… Comes
> $\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$ trozos **infinitos**, pero nunca más de **una** tarta: la suma se
> acerca a $1$ tanto como quieras sin pasarse. Esa idea, «acercarse tanto como se quiera», se llama **límite**, y es la
> puerta al cálculo.

- Una sucesión es **creciente** si $a_{n+1} \ge a_n$ para todo $n$, y **decreciente** si $a_{n+1} \le a_n$.
- Está **acotada** si todos sus términos quedan entre dos números fijos.
- Es **convergente** con **límite** $L$ si sus términos se acercan a $L$ tanto como se quiera a partir de un lugar en
  adelante; se escribe $\lim a_n = L$. Si crece sin tope es **divergente** (tiende a $+\infty$), y si no hace ni lo uno
  ni lo otro (como $1, -1, 1, -1, \dots$) es **oscilante**.

**Ejemplos.** $a_n = \frac{n}{n+1}$ es creciente, acotada entre $0$ y $1$, y converge a $1$. $a_n = 2^n$ diverge.
$a_n = \left(\frac{1}{2}\right)^n$ converge a $0$.

### Suma de infinitos términos de una progresión geométrica

Si $|r| < 1$, el término $r^n$ se hace tan pequeño como se quiera al crecer $n$ (converge a $0$), y en la fórmula de
$S_n$ queda

$$
S_\infty = a_1 + a_1 r + a_1 r^2 + \cdots = \frac{a_1}{1 - r} \qquad (|r| < 1) .
$$

Si $|r| \ge 1$ (y $a_1 \ne 0$), la suma no se acerca a ningún número. **Ejemplo resuelto.** $0{,}\overline{7} = 0{,}7 +
0{,}07 + 0{,}007 + \cdots$ es geométrica con $a_1 = 0{,}7$ y $r = 0{,}1$: $S_\infty = \frac{0{,}7}{0{,}9} = \frac{7}{9}$. Es otra
manera de pasar un decimal periódico a fracción ([[mat-enteros-fracciones]]).

> [!formal] Con rigor: por qué $r^n$ se hace pequeño si $0 < r < 1$
> Escribimos $\frac{1}{r} = 1 + h$ con $h > 0$. Por la desigualdad de Bernoulli, $(1 + h)^n \ge 1 + nh$ para todo $n$
> (se demuestra por inducción en [[mat-logica-demostraciones]]; con $n = 2$ es $(1 + h)^2 = 1 + 2h + h^2 \ge 1 + 2h$).
> Luego $0 < r^n = \frac{1}{(1 + h)^n} \le \frac{1}{1 + nh}$, y el último cociente queda por debajo de cualquier número
> positivo $\varepsilon$ en cuanto $n > \frac{1}{h\varepsilon}$. Para $-1 < r < 0$ basta mirar $|r|^n$. Así
> $S_n = a_1\frac{1 - r^n}{1 - r} \to \frac{a_1}{1 - r}$. $\blacksquare$ (La definición precisa de límite con $\varepsilon$
> se estudia en [[mat-calculo-1]].)

## 6. Aplicaciones

- **Ahorro con aportación fija.** Ahorrar $100$ € el primer mes, $110$ € el segundo, $120$ € el tercero… es aritmético:
  en un año, $S_{12} = \frac{(100 + 210)\cdot 12}{2} = 1860$ €.
- **Préstamos e inversiones.** Cada año el capital se multiplica por $(1 + i)$: geométrica. Si además se aporta una cantidad
  fija cada año, el total es una suma geométrica (así se calcula la cuota de una hipoteca).
- **Rebotes.** Una pelota cae desde $2$ m y en cada bote sube el $60\,\%$ de la altura anterior. La distancia vertical
  total es $2 + 2\cdot(1{,}2 + 0{,}72 + \cdots) = 2 + 2\cdot\frac{1{,}2}{1 - 0{,}6} = 8$ m.

## 7. Errores típicos

- Usar $a_1 + n\,d$ en lugar de $a_1 + (n - 1)\,d$ (del primero al $n$-ésimo hay $n - 1$ saltos).
- Aplicar la fórmula de la suma aritmética a una geométrica (o al revés): primero, **identifica el tipo**.
- Escribir $a_1 r^n$ en lugar de $a_1 r^{n-1}$.
- Sumar infinitos términos con $|r| \ge 1$: la suma no existe.
- Creer que toda sucesión que crece se va al infinito: $\frac{n}{n + 1}$ crece y nunca pasa de $1$.

## Repaso: lo que debe quedarte dentro de un mes

1. Aritmética: $a_n = a_1 + (n - 1)d$, $S_n = \frac{(a_1 + a_n)n}{2}$ (el truco de Gauss).
2. Geométrica: $a_n = a_1 r^{n-1}$, $S_n = a_1\frac{r^n - 1}{r - 1}$ (multiplicar por $r$ y restar).
3. Si $|r| < 1$: $S_\infty = \frac{a_1}{1 - r}$.
4. Creciente, acotada, convergente, divergente, oscilante.

## Siguiente

Con las sucesiones, [[mat-numeros-reales]] completa la recta numérica (los números a los que se acercan muchas
sucesiones de fracciones), y [[mat-calculo-1]] convierte la idea de límite en una herramienta.
