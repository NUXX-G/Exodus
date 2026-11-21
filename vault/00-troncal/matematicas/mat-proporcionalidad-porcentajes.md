---
id: mat-proporcionalidad-porcentajes
title: "Proporcionalidad, porcentajes e interés"
area: matematicas
trunk_level: 2
prerequisites: [mat-enteros-fracciones, mat-sistema-metrico, mat-proporcionalidad]
academic_sources:
  - "Euclides. Elementos, libro V (teoría de la razón y la proporción, atribuida a Eudoxo). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/bookV/bookV.html"
  - "Kellison, S. G. The Theory of Interest, 3ª ed. McGraw-Hill/Irwin, 2009."
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991 (fracciones y razones como base aritmética)."
hints:
  - "Concepto: casi todos los problemas de porcentajes se resuelven con un único gesto, convertir cada porcentaje en un factor multiplicador (subir un 25 % es multiplicar por 1,25; bajar un 25 % es multiplicar por 0,75) y multiplicar los factores. Nunca sumes porcentajes sucesivos. En proporcionalidad compuesta, reduce a «una unidad» y vuelve a ampliar."
  - "Herramienta: en Python usa `fractions.Fraction` para trabajar sin errores de redondeo y `decimal.Decimal` para dinero; comprueba cada resultado con una segunda vía (por ejemplo, simular año a año el interés con un bucle y comparar con la fórmula)."
  - "Documentación oficial: docs.python.org/3/library/fractions.html y docs.python.org/3/library/decimal.html; Kellison, capítulos introductorios sobre la medida del interés (interés simple y compuesto) y la tasa efectiva; Euclides, Elementos V (definición V.5 de igualdad de razones)."
exercises:
  - id: fraccion-a-porcentaje
    tier: 1
    prompt: |
      Expresa $\dfrac{3}{5}$ como porcentaje. Respuesta: un número (sin el símbolo %).
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: porcentaje-de
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula el ${{p}}\,\%$ de ${{b}}$. Respuesta: un número.
    variants:
      - values: {"p":18,"b":250}
        answers: ["sha256:eff9c517aba62d2a550de68e0aee7561550fcfc36295a249ef962469348edafb","sha256:7a84a036e3aee2dbe5beb102e35b336a3fad74f55d7e5efdb782da213235a916","sha256:7f0f551d82a3c887f9071d69ed3f62a47b3ba466bfc8cdbc1f2848ac9f12a099"]
      - values: {"p":15,"b":340}
        answers: ["sha256:0d07dc91014badf2d75c8e9582656ef74fcab1460d1dbd0bbb5a3919c72715fe","sha256:c95fef3fc284e27b29b357f0b1bf21bdf759d869450a0b66540aee522a5b7bdb","sha256:86d47459af4b66e93ac2765556375af73565005f04acdef60434c3b1d4ec0fdb"]
      - values: {"p":35,"b":160}
        answers: ["sha256:df243d18559dfb5a41cc986be9fec8fe2a104d47df2f10f230b65a9509c6fa6a","sha256:34a8051aa888e556b6570b4339197aafe7c74e27b5edfcd73d26ee95422b4ae7","sha256:c318c060838df0b2f2a8834a365e4508b1ea40a378fc4506d045e6c91bea23f8"]
      - values: {"p":12,"b":475}
        answers: ["sha256:7e604d19acb418b59f7197830a50ad74cd8f79e8ca7fcc59a9fa16b442209285","sha256:279ac023d5ec0469fe2c3f0212010676f3e63ea25f2306400ab72627c5331ca4","sha256:739ba72dd335d8c77e65a8ab8ada26012bafcdd7a6825d54b9f72d404d479d22"]
      - values: {"p":65,"b":240}
        answers: ["sha256:27331f05cde379b965794b0d8532889251c6d220e0d2875bf176a5ec4c5f9d06","sha256:2203f254608be2deeaf1f32c6e97d1f0731558b773fc8dd468b5032d09302f3c","sha256:692996bc9a69d63f6ea7d7c7260c245c273f0f4c5c7a79e52872c4049117fe7e"]
      - values: {"p":8,"b":1350}
        answers: ["sha256:97558ebe7d9da8a0fd9b02ae7af4b4e1c1d415faba4ebdb5f885014b59848a8e","sha256:4b47a73e6dd8240a6d19cce40984091744f91f1a9016f3486dfef09d64c2ee79","sha256:36ca85d9280155463f49fc75315edf9fe6f2b0cb867394d7c79587ff1ad64771"]
      - values: {"p":42,"b":550}
        answers: ["sha256:0455a6f485d240904118923d737574b2014b93599c5e0ba1dcd285e2886c26fd","sha256:72a04de4b704b94a71d47dcbc63e4bc8ae8276797b27c02f289960c7295b1f69","sha256:d9ec6c4464c1bb18e3103826366d6c058b8f043f06199dbbb3db20edd1827e0d"]
      - values: {"p":24,"b":625}
        answers: ["sha256:8cc756ea7fa124c2dd82198459ce955b47d074de2183f55842d789bb5c7e5d48","sha256:8730aaae63922defb72a1c9a08b917fb7c8084770844dcc42a6fcadcab02e9ed","sha256:aa2467eb82a28db0549c37f73b12c7160b63f60f915b0defbc31173b49105219"]
      - values: {"p":75,"b":96}
        answers: ["sha256:1a902928a59cbd34889c8b6ff1b8cb910b38c0763159d008d65b15ba421f49b3","sha256:3687ea6099b363a5f2bb734799f0b53f61eef224a5349524135610d0c4c2b9d3","sha256:a31b434722830314d5c31e28969786dc22c1f1c16ab2d5d531fe69a5188f9ba1"]
      - values: {"p":5,"b":1830}
        answers: ["sha256:9bbcb6f580a04f56669112720d03af6684bb32b22edf1fe13cfd31ed85cab87e","sha256:ebae020f6788d3e6751d710bf951b4498086f445baf73432052a30c368e084d1","sha256:09f8a6e85116bc0580007e436342c61f248f7ffef8cc15cfa11b17affd960d69"]
  - id: obreros
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ${{a}}$ obreros terminan una obra en ${{d}}$ días. Con el mismo ritmo, ¿en cuántos días la terminarían ${{n}}$ obreros?
      Respuesta: un número de días.
    variants:
      - values: {"a":12,"d":15,"n":18}
        answers: ["sha256:8ef8e8c22589466b2d850809a0496b53023ff71f3d0be143a710829470d2ef81","sha256:ae62d3d323a1d2026e63bf548b9132297e669a233d3d3bcf7f739b2d8e68089c","sha256:d5fdad93ca9a84ca06418a7026d7a89ac75037ad912e899bdcbaa3d3e130e8a7"]
      - values: {"a":8,"d":9,"n":6}
        answers: ["sha256:b82f53cf22ea3981d5f3bd689e7045d9e9736b1d85793c95391b8418e8fce4db","sha256:99c453847e5b65b1d8012ed08b1ef9347b82d03e1e9400ef4f64a07028c84054","sha256:4ce28f0dedf0a09f4e4718d52f49a284272b2484ab94b101f11bb70065a4ffdb"]
      - values: {"a":10,"d":12,"n":15}
        answers: ["sha256:bdb521e0849a8758495212f0d2967c33ca7e0210000591626e3fd823c00e033a","sha256:40d2851613b464bec2fcbcbab165fad98095f8536f18616907077916deb2b5cc","sha256:2c46be12b436931087d0d65b7df64c490423d2f97543324c39d1f5a053ba245a"]
      - values: {"a":6,"d":20,"n":8}
        answers: ["sha256:6d934a2ecac61d44f8bb04aa78c6a6fdf0cff411f21f6a5c9e0bd4b73922a2f5","sha256:1e0d0a5a737c5b45a6c8c9c5fb72cf0a10bed0ec4b281b33e27021d5393f318a","sha256:b45d059f69d74f792abe1dd7f1bf5b88b18ab06c425c51fd187b5f897a5d3d1c"]
      - values: {"a":14,"d":6,"n":21}
        answers: ["sha256:f0a17231306b55dfc034f3c3b6bbd2c60d44a19b135792362c65d264379c1ee1","sha256:de9f8b225178b8c7233a0aebe9c01a8616eab6af77eb83728d4a494472e3b478","sha256:789c726c3a3831ac85a163076bd48677040f5bd870b0eaf6bb6ab321e55f6740"]
      - values: {"a":9,"d":16,"n":8}
        answers: ["sha256:0121912e7769f119c71a462fc60423cc1e4bf99c184e77984396aa21a80f2637","sha256:f746bae986b3f109bf8de65cd25d962516607a0643cc2e27fbf3fcf3dfa59134","sha256:f787125b60ca94ddca1bc141a754b592855474ce66c700872549a90741b74522"]
      - values: {"a":15,"d":8,"n":20}
        answers: ["sha256:9835fa811004a75c00382ff80143c12489ab3a3cfba723d48279ba91178bb95c","sha256:b23e930cf6f525752fe6bdd143cf7c676052e18bf56e6ce7f0ec2a715454937c","sha256:015493f88347674a7e995b037733b1b4aab53c94b96e4b019cf59c0b88a24dc8"]
      - values: {"a":4,"d":27,"n":9}
        answers: ["sha256:ccaebb1ba7ff9b21826eafc337c44410c7fc8c223e820e8a23f9be3954b0b021","sha256:8cfb86094d8857a984ac07b384eb06769ad27cfc92024a42cdaa92336cef42c9","sha256:f960ad6c6c1e2d660cb187cc3d16594b63fd29761e41f2cfc2fd963a7553f655"]
  - id: sube-y-baja
    tier: 2
    prompt: |
      Un artículo cuesta $80$ euros. Sube un $25\,\%$ y, después, baja un $25\,\%$. ¿Cuánto cuesta al final?
      Respuesta: euros, un número.
    answers: ["sha256:f369cb89fc627e668987007d121ed1eacdc01db9e28f8bb26f358b7d8c4f08ac"]
  - id: iva
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un producto cuesta ${{precio}}$ euros con un IVA del $21\,\%$ incluido. ¿Cuál es su precio **sin** IVA? Respuesta:
      euros, un número.
    variants:
      - values: {"precio":"193{,}60"}
        answers: ["sha256:5b6ace5859b9c46538207421d2044c7ac0fe53e5c23a1fcca28691782f87e540","sha256:3ad696a325a76fcab12efd21a3a2720ec9f390ba3da0d8b00c68b318ddcadf06","sha256:93239f1d01bdd4e9ceb6f13ea2f1496601c6444895ab1c35f1d03146a48718d2"]
      - values: {"precio":"54{,}45"}
        answers: ["sha256:b3d91ca71e656babc029465d311cf0981ab0a0c23a7f02303c7008f9dff167ef","sha256:48fdf63b188bd8da3b0ea62f9b7588dec33f412eb0fd6dfe08168b047d6fc30d","sha256:88771efeaf92747f439566f47ce5b460b60e59a242460bb84077e258c2073d5f"]
      - values: {"precio":"290{,}40"}
        answers: ["sha256:32e914537b764b94be5d3c87b3fc3063701d4eaae367539071c3dfca07241b43","sha256:e3db02a169072fe1b747d8db19cc90adf69d09c5551d31e3a5befce84c71a31f","sha256:121dfa294841e1467288a54dd8c032037233df2e4a15a1d4eaa3cd4ff656b263"]
      - values: {"precio":"15{,}73"}
        answers: ["sha256:89592f5089d50619af152b93ebc4a7ce180167f7b4236dbc6bd6f17fa4e2f13b","sha256:e8e40ef65d10d8ba65c40b59465c06f5d794d45908fdc60d90104c9b1ab5a495","sha256:bd08e81391f03310ed325fdaa7040bca148e0bef2579cf85867779e991268b79"]
      - values: {"precio":"1058{,}75"}
        answers: ["sha256:f394963a8e91871f962e572e1cc23400d2c26717b4b47d533147b3483d42be0c","sha256:2ca6e28d65334702079edb2613351bfc55030a670b8881dbc24fea259d6800a1","sha256:4a745b76cac29f90646e6a1f16b1cfcc22b2dca438ecb3b4292fcbf5ebd0be89"]
      - values: {"precio":"43{,}56"}
        answers: ["sha256:27d408320a3ed3337666ff48341d39558e31cb2cb1c5db9be773bc5ac58e8f8b","sha256:385c1dbde52a0e6c398b5908bfe64039fdefb9e6160d664d90761fba02d089e6","sha256:d9f134e9c27ecd38cd4f55d2d90d1c0666b32209c37d0c81900d0d1cf69a7cfe"]
      - values: {"precio":"150{,}04"}
        answers: ["sha256:984b1ba7dc0924b94ef20bb35b7562f6d59bd69c1c433ae375dce8666955b24d","sha256:ff4a03b099e943e47c2ec83407ffde2bcea046e79a380d07062a1a3b43498dab","sha256:5e561756d0ad5a13367968968a756a0b3fda6a63dae30e03db6713bfdc3fdeb3"]
      - values: {"precio":"724{,}79"}
        answers: ["sha256:4713b473a0cf39391abc38257c799020c92902c4a8fec61c063e2888e352c81a","sha256:532be485f9300effd66164609189143552c06bd8fbead936504998f3e20a5a6a","sha256:b0127864f213d1977bdd5d94added901174d0191874eecc48b650b887872952e"]
  - id: descuentos-sucesivos
    tier: 2
    prompt: |
      Una tienda aplica un descuento del $20\,\%$ y, sobre el precio ya rebajado, otro del $15\,\%$. ¿A qué **descuento único**
      equivale (en %)? Respuesta: un número sin el símbolo %.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: escala
    tier: 2
    prompt: |
      En un mapa a escala $1 : 25\,000$ dos pueblos están a $7{,}2$ cm. ¿Cuántos kilómetros los separan en la realidad?
      Respuesta: kilómetros, con un decimal.
    answers: ["sha256:a97b042d7bd59d92a46e8ab17f7dff7326067c74b938e6f6daabf1768932330d"]
  - id: mezcla
    tier: 2
    prompt: |
      Se mezclan $3$ litros de zumo con un $20\,\%$ de fruta y $2$ litros con un $45\,\%$. ¿Qué porcentaje de fruta tiene la
      mezcla? Respuesta: un número sin el símbolo %.
    answers: ["sha256:624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"]
  - id: velocidad-media
    tier: 2
    prompt: |
      Un coche va de A a B a $60$ km/h y vuelve de B a A, por el mismo camino, a $40$ km/h. ¿Cuál es su velocidad media en
      todo el trayecto? Respuesta: km/h, un número. (No es $50$: piensa en el tiempo empleado en cada tramo.)
    answers: ["sha256:98010bd9270f9b100b6214a21754fd33bdc8d41b2bc9f9dd16ff54d3c34ffd71"]
  - id: interes-compuesto
    tier: 3
    prompt: |
      Se depositan $1000$ euros al $4\,\%$ de interés compuesto anual (los intereses se suman al capital cada año).
      ¿Cuánto dinero hay al cabo de $10$ años? Respuesta: euros con dos decimales, **truncando** (sin redondear).
    answers: ["sha256:5e47249fc50ae9c12208e5dbd7e2b44a2b58c1d5fbeb4b5954c99d8e8785bd63"]
  - id: duplicar-capital
    tier: 3
    prompt: |
      Con un interés compuesto anual del $5\,\%$, ¿cuál es el menor número **entero** de años tras el cual el capital se ha
      duplicado, al menos? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: variaciones-encadenadas
    tier: 3
    prompt: |
      Un precio sube un $10\,\%$, luego un $20\,\%$ y por último baja un $5\,\%$. ¿Cuál es la variación total, en %?
      Respuesta: un número con un decimal, sin el símbolo %.
    answers: ["sha256:a86d4cb8b7e06cf8dd9c9732f1271275054e8d20780a2ba613861642cc3643af"]
  - id: proporcionalidad-compuesta
    tier: 3
    prompt: |
      Ocho máquinas, trabajando $6$ horas al día durante $15$ días, fabrican $4800$ piezas. ¿Cuántas piezas fabricarán
      $12$ máquinas trabajando $8$ horas al día durante $10$ días, al mismo ritmo? Respuesta: un entero.
    answers: ["sha256:a7dccef9ce1ae31c49a4cfc484f8411dd52b11c914c1fe3d781633642d1e1327"]
  - id: reparto-proporcional
    tier: 3
    prompt: |
      Tres socios aportan $5000$, $8000$ y $12000$ euros a un negocio y reparten un beneficio de $7500$ euros en proporción a
      lo aportado. ¿Cuánto recibe el que más aportó? Respuesta: euros, un número.
    answers: ["sha256:8b34042b7a96b3ba94b27ad723ca8f57787eefbab2083b3098173c444aefbfdf"]
  - id: mas-y-menos-3
    tier: 3
    prompt: |
      Una población crece un $3\,\%$ un año y decrece un $3\,\%$ al siguiente. ¿Cuál es la variación total, en %?
      Respuesta: un número con dos decimales, con signo menos si es negativa, sin el símbolo %.
    answers: ["sha256:eeb2c33fd8999602a089b882b888d5895abf29555ea6dec4dc8dc56f25c1ec74"]
  - id: tae
    tier: 3
    prompt: |
      Una cuenta paga un $1\,\%$ de interés **cada mes** (compuesto). ¿Qué porcentaje de interés equivale a un año completo?
      Respuesta: un número con cuatro decimales, **truncando**, sin el símbolo %.
    answers: ["sha256:c4c94b07ddf8b88aed2e65b6d2032d348fa53dc5f34157fb411ef380e24cfdee"]
  - id: r-sube-baja-igual
    tier: 2
    type: opcion
    review: true
    prompt: |
      Un precio sube un $10\,\%$ y después baja un $10\,\%$. Respecto al precio inicial, el precio final es…
    options:
      - |
        Igual que al principio
      - |
        Un $1\,\%$ menor
      - |
        Un $1\,\%$ mayor
      - |
        Un $10\,\%$ menor
    answers: ["sha256:d0dcae58234dcb185b513dff7d3df77ef26f6848497411097cf6a5a54e2ea208"]
  - id: r-conmutativo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es mayor: el $30\,\%$ de $80$ o el $80\,\%$ de $30$? Piénsalo antes de calcular.
    options:
      - |
        El $30\,\%$ de $80$
      - |
        El $80\,\%$ de $30$
      - |
        Son iguales
    answers: ["sha256:3e6b9653d36e33739f79778ab73aaff52b87dd50175d9f6987ad90479ae31514"]
  - id: r-grifos
    tier: 1
    type: opcion
    review: true
    prompt: |
      Cuatro grifos iguales llenan un depósito en $6$ horas. ¿Cuánto tardan ocho grifos iguales?
    options:
      - |
        $12$ h
      - |
        $3$ h
      - |
        $6$ h
      - |
        $2$ h
    answers: ["sha256:cc7ae956bf989cf28314705526ff8ba7a401a13a11dc2a48c5454a00c35171ac"]
  - id: r-precio-original
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Tras una rebaja del ${{r}}\,\%$, un artículo cuesta ${{p}}$ euros. ¿Cuánto costaba antes de la rebaja? Respuesta: euros.
      (Cuidado: no es sumar el ${{r}}\,\%$ al precio rebajado.)
    variants:
      - values: {"r":20,"p":64}
        answers: ["sha256:e91b50b1ecb7d3f0d22df08c8591936c101925acd731cedbf94f444d873afe2c","sha256:e9c94f1bbad2afd3341a6767258238a78a6db4db41561a460f7605438832c738","sha256:2cd010c487be235e0dff6d72e14d459c0cf222e79a34b2cdebd9b412305be7b2"]
      - values: {"r":15,"p":102}
        answers: ["sha256:bfd4d1ef8370f91bce6b8f3476d901cc4607a496c67419be0330bb9c2e500512","sha256:6a80b4e8b805fb44a593f9c98f1d3e967bee6116d398e728bb612528c1a7d2ba","sha256:8d33b51373c80b10053408af09b54d3643cb103aefc733d529050bfe07a657b7"]
      - values: {"r":30,"p":56}
        answers: ["sha256:6671f844984e16fe921a8728b8527c115b05e89ec77e3a478f6b34b649db1fa5","sha256:fc39c492e08687b476ac85f2f74c5a69ceb9de832a1280a2426140f80e73e39d","sha256:d9a0a63294f3d6f6947ccf47cea75bb038d54990d51cf6d86a9b9b7f1de14caa"]
      - values: {"r":25,"p":90}
        answers: ["sha256:41c0e63dad19cfdbfa85a83fea4e416d1622323dac8bc8cd9e88ad73bf13cdb3","sha256:8e7fbf14b03ee4fbc06829a8c7d8f352f70174fc697b661fa33528329d143905","sha256:26ae1e28dc2709f66cbae3135298f9f32b34b7f9fcfbd4a6b1a82a2d63e14cb1"]
      - values: {"r":40,"p":72}
        answers: ["sha256:0b6640372067cb60f26cac7e667f3ae919811dca89f07c994226cdc55a31a84a","sha256:58700df02799530372c6461bee0189b77fa38a89321967e94885cc8af1e22aeb","sha256:02167ec6047295d1298a4addef21f8ee199d6d04eeb07f54cadab2e8c13205ce"]
      - values: {"r":10,"p":81}
        answers: ["sha256:ba04762636f20d5075c460f4451d8033989d65b5e7c5b1419a4e8b3db0a2d3bb","sha256:4b49faaa170b57ab77b4477dbd5d4c21f348ac7370371cc0b1c5014c60ad7a8d","sha256:08bb405c6aa2c62f7dde1100b217507589c88132339599e70cb7fabfedddb558"]
  - id: r-unitario
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si ${{k}}$ kg de manzanas cuestan ${{c}}$ euros, ¿cuánto cuestan ${{m}}$ kg al mismo precio? Respuesta: euros.
    variants:
      - values: {"k":5,"c":"8{,}20","m":3}
        answers: ["sha256:a113ef5b9bbc0d415bd38e2bc7b3fa473d7e86223fce1e2ea82464558b5854ba","sha256:2e22a953b6475766022d9549336eff9e4078b5d9e00ec47bff1ada938bc0127e","sha256:0dc27efbe5fe778dec78583c1cad3af39f7934535850cc06e1a741d0dd0eb7d2"]
      - values: {"k":4,"c":"6{,}20","m":6}
        answers: ["sha256:8060a42678fa7969d1dcbcb75d3ee5d21697c152ab6462ec9c63b5baf048587f","sha256:a8139c2dbde88f893209395c84fc2231ae69930b56bf434e56d79f53394e85e4","sha256:b694b116c65f23adbfd17f4d07a3fafe3d7a75587265b9169dc1cdf62e5abde0"]
      - values: {"k":3,"c":"4{,}35","m":7}
        answers: ["sha256:8cb700911d21aac117d1b29b7635ad2298574d897083373453e880abc4e349af","sha256:934b52f3c3b9b71c9aa7881ad6bb04c9a6c5caf5d4836cadeb6d08158737a579","sha256:ad16c3b005f23868e03b3e330585ad0a81aa3b9b1972b1b8ec1760285d9fd0f5"]
      - values: {"k":6,"c":"12{,}90","m":4}
        answers: ["sha256:b964d3f49954c4a47f70756379a48a3eb30195d87fe1c7e51d1773b425a8d53d","sha256:546dfb602579a850b8c647c57d01c8b455c5cee9e03675fc9a6f160654096068","sha256:86fe263a4e0aa910c87bc3e4218c11965028725219bbd9a59f647bb375478c82"]
      - values: {"k":8,"c":"10{,}00","m":5}
        answers: ["sha256:a1527bc905f1b7d14235a771c66f8bb02327b74ea25b921032e07d4dac369730","sha256:61ac71fba80b030f9468fc9cfd9c1aa0d651b3ccde639cf59cd4112321a092d8","sha256:17a5122c35de138629867311a821158d0fbfeff571258369754a8d0f80de31ed"]
---

# Proporcionalidad, porcentajes e interés

Casi todo lo que se hace con números en la vida real es una **comparación**: cuánto sube un precio, qué parte
de un sueldo se va en alquiler, cuántos obreros hacen falta, qué interés cobra un banco. Este nodo convierte
esa intuición en un método único y sin errores, y desmonta los fallos más caros: sumar porcentajes que no se
suman, o creer que «subir y bajar lo mismo» no cambia nada.

## Objetivos

Al terminar sabrás:

1. Distinguir magnitudes directa e inversamente proporcionales y resolver una regla de tres sin memorizar
   recetas.
2. Calcular porcentajes en las tres situaciones típicas (parte, total, tanto por ciento) y encadenar subidas
   y bajadas con factores.
3. Resolver repartos y mezclas proporcionales.
4. Calcular interés simple y compuesto, la tasa equivalente anual y el tiempo de duplicación.
5. Trabajar con escalas y saber cómo cambian longitudes, áreas y volúmenes.
6. Detectar los errores de razonamiento más frecuentes en noticias, ofertas y contratos.

> [!question] Test de entrada
> 1. Una camiseta de $40$ € baja un $10\,\%$: ¿cuánto cuesta? 2. Si $3$ kilos de manzanas cuestan $4{,}50$ €,
> ¿cuánto cuestan $5$ kilos? 3. ¿Cuánto es el $50\,\%$ del $50\,\%$ de $200$?
>
> Respuestas: $36$ €; $7{,}50$ €; $50$.

## 1. Para qué sirve

- **Compras y ofertas**: descuentos encadenados, IVA, comparar precio por unidad.
- **Dinero a largo plazo**: hipotecas, préstamos, tarjetas, ahorro; el interés compuesto decide quién gana.
- **Noticias y salario**: inflación, subidas del $2\,\%$ sobre el $3\,\%$, «puntos porcentuales».
- **Ciencia y salud**: dosis por peso, concentraciones, dilución, estadísticas de riesgo.
- **Ingeniería y cocina**: escalar una receta o un plano.

## 2. Razón y proporción

> [!practico]
> Cuando dices «en esta clase hay 2 chicas por cada 3 chicos» estás comparando dos cantidades dividiendo una entre
> otra: eso es una **razón**. Si en otra clase hay 8 chicas y 12 chicos, la mezcla es la misma (también 2 por cada 3):
> las dos razones son iguales, y a esa igualdad se le llama **proporción**. Un truco para comprobarlo sin dividir:
> multiplica «en cruz». $2 \cdot 12 = 24$ y $3 \cdot 8 = 24$: salen iguales, así que la mezcla es la misma.

> [!formal]
> Una **razón** compara dos cantidades de la misma clase: $a : b = \dfrac{a}{b}$ (con $b \ne 0$). Una **proporción**
> es la igualdad de dos razones:
>
> $$
> \frac{a}{b} = \frac{c}{d} \iff ad = bc \qquad (b, d \ne 0).
> $$
>
> Es la propiedad que vimos para las fracciones equivalentes (ver [[mat-enteros-fracciones]]): el producto
> de los extremos ($a\,d$) iguala al de los medios ($b\,c$). La teoría de la proporción es antiquísima:
> Eudoxo la formalizó en el siglo IV a. C. (Euclides, *Elementos* V).

### Magnitudes directamente proporcionales

> [!practico]
> En la frutería, si 1 kg de naranjas cuesta 2 €, 2 kg cuestan 4 € y 10 kg cuestan 20 €: el precio y los kilos crecen
> «al mismo ritmo». Siempre que dividas el precio entre los kilos te sale lo mismo (2 € por kilo). Ese número fijo es
> lo que hace que las dos cantidades sean **directamente proporcionales**.

> [!formal]
> Dos magnitudes son **directamente proporcionales** si su cociente es constante: $y = kx$, con $k \ne 0$ la
> **constante de proporcionalidad**. Si una se multiplica por $\lambda$, la otra también. Su gráfica es una recta
> que pasa por el origen, de pendiente $k$.

**Ejemplo:** el precio de las manzanas: $3$ kg cuestan $4{,}50$ €, luego $k = 1{,}50$ €/kg y $5$ kg cuestan
$5 \cdot 1{,}50 = 7{,}50$ €.

### Magnitudes inversamente proporcionales

> [!practico]
> Cuantos más amigos pagan una pizza de $24$ €, **menos** paga cada uno: $2$ amigos, $12$ €; $3$ amigos, $8$ €; $4$ amigos,
> $6$ €. Lo que no cambia es el total: amigos $\times$ euros por cabeza $= 24$ siempre.


Son **inversamente proporcionales** si su **producto** es constante: $xy = k$. Si una se duplica, la otra se
reduce a la mitad. Ejemplo: obreros y días para una misma obra, con el mismo ritmo.

**Cómo decidir cuál es cuál.** Pregúntate: «si duplico la primera, ¿se duplica o se reduce a la mitad la
segunda?». **Ojo**: no todo es proporcional. La edad de un niño y su altura crecen juntas pero no son
proporcionales; el precio de un taxi con bajada de bandera tampoco.

### La regla de tres como método

No hay que memorizar «cruzado» o «recto»: se reduce a la **unidad** y se vuelve a ampliar.

- **Directa.** $4$ cuadernos cuestan $10$ €. ¿Cuánto cuestan $7$? Un cuaderno cuesta $\frac{10}{4} = 2{,}5$ €;
  siete cuestan $7\cdot 2{,}5 = 17{,}5$ €.
- **Inversa.** $6$ obreros tardan $20$ días. ¿Cuánto tardan $8$? Con $1$ obrero harían falta $6\cdot 20 = 120$ días
  (el producto es constante); con $8$, $\frac{120}{8} = 15$ días.

### Proporcionalidad compuesta

Si intervienen más de dos magnitudes se razona por factores. **Ejemplo resuelto:** $5$ máquinas, $8$ horas al día
durante $12$ días producen $2400$ piezas. ¿Cuántas producen $7$ máquinas, $6$ horas al día, durante $10$ días?
La producción es proporcional a cada factor: $2400\cdot\dfrac{7}{5}\cdot\dfrac{6}{8}\cdot\dfrac{10}{12} =
2100$ piezas. Comprobación por la unidad: $\frac{2400}{5\cdot 8\cdot 12} = 5$ piezas por máquina-hora;
$7\cdot 6\cdot 10 = 420$ máquinas-hora; $420\cdot 5 = 2100$. $\checkmark$

### Reparto proporcional

Repartir una cantidad $T$ en proporción a $a_1, \dots, a_n$ da a cada uno $T\,\dfrac{a_i}{a_1 + \cdots + a_n}$.
**Ejemplo:** $900$ € entre quienes aportaron $2$, $3$ y $4$ partes: $900\cdot\frac{2}{9} = 200$, $300$, $400$ €.
Si el reparto es **inversamente** proporcional a $b_i$ se usa $\frac{1}{b_i}$ como peso.

## 3. Porcentajes

> [!practico]
> «Por ciento» significa «de cada cien». Un $20\,\%$ de descuento es quitar $20$ € de cada $100$ €. La idea que ahorra
> más errores: **subir un $10\,\%$ es multiplicar por $1{,}10$** y **bajar un $10\,\%$ es multiplicar por $0{,}90$**. Con
> eso, un descuento sobre un descuento es multiplicar dos veces, y quitar el IVA es dividir.


El **tanto por ciento** es una fracción de denominador $100$: $p\,\% = \dfrac{p}{100}$. Por tanto,
«el $18\,\%$ de $250$» es $\frac{18}{100}\cdot 250 = 45$, y $\frac{3}{5} = \frac{60}{100} = 60\,\%$.

Las tres preguntas típicas, con la misma relación $\text{parte} = \dfrac{p}{100}\cdot \text{total}$:

| Se pide | Se despeja | Ejemplo |
|---|---|---|
| la parte | $\text{parte} = \frac{p}{100}\cdot\text{total}$ | $15\,\%$ de $80$ es $12$ |
| el total | $\text{total} = \text{parte}\cdot\frac{100}{p}$ | $12$ es el $15\,\%$ de $80$ |
| el porcentaje | $p = 100\cdot\frac{\text{parte}}{\text{total}}$ | $12$ de $80$ es el $15\,\%$ |

**Atajo para propinas y estimaciones:** el $10\,\%$ se obtiene corriendo la coma; el $5\,\%$ es la mitad del
$10\,\%$; el $15\,\%$ es $10\,\% + 5\,\%$.

### Aumentos y disminuciones: el factor multiplicador

Subir un $p\,\%$ es multiplicar por $1 + \frac{p}{100}$; bajar un $p\,\%$, por $1 - \frac{p}{100}$:

$$
x \xrightarrow{+\,25\,\%} 1{,}25\,x, \qquad x \xrightarrow{-\,25\,\%} 0{,}75\,x .
$$

**Para volver al valor inicial se divide por el factor**, no se resta el porcentaje. **Ejemplo resuelto
(IVA):** un producto cuesta $121$ € con un IVA del $21\,\%$ incluido. El precio sin IVA $P$ cumple
$1{,}21\,P = 121$, luego $P = 100$ €. Error típico: restar el $21\,\%$ de $121$ (daría $95{,}59$).

### Porcentajes encadenados: se multiplican, no se suman

> [!practico]
> Una tienda sube un abrigo de $100$ € un $50\,\%$ ($150$ €) y luego lo «rebaja» un $50\,\%$: cuesta $75$ €, no $100$. La
> rebaja se aplica sobre un precio **mayor**, así que quita más euros de los que añadió la subida.


Una subida del $p\,\%$ seguida de otra del $q\,\%$ multiplica por $\bigl(1 + \frac{p}{100}\bigr)\bigl(1 + \frac{q}{100}\bigr)$.

> [!formal] Con rigor: por qué no se suman
> Desarrollando:
>
> $$
> \Bigl(1 + \tfrac{p}{100}\Bigr)\Bigl(1 + \tfrac{q}{100}\Bigr) = 1 + \frac{p + q}{100} + \frac{pq}{10\,000} ,
> $$
>
> que **no** es $1 + \frac{p+q}{100}$ salvo que $pq = 0$: el término $\frac{pq}{10\,000}$ es el «efecto sobre lo ya
> subido». **Consecuencias:**
>
> - Subir un $10\,\%$ y luego un $20\,\%$ es subir un $32\,\%$, no un $30\,\%$.
> - **Subir y bajar el mismo porcentaje no devuelve al inicio.** $(1 + r)(1 - r) = 1 - r^2 < 1$: tras subir un
>   $20\,\%$ y bajar un $20\,\%$ se acaba un $4\,\%$ por debajo. Perder el $50\,\%$ exige ganar el $100\,\%$ para
>   recuperarse.
> - Dos descuentos del $20\,\%$ y del $30\,\%$ equivalen a $1 - 0{,}8\cdot 0{,}7 = 0{,}44$: un descuento del
>   $44\,\%$, no del $50\,\%$.

### Puntos porcentuales frente a porcentaje

Si un tipo de interés pasa del $2\,\%$ al $3\,\%$, ha subido **un punto porcentual**, pero un
**$50\,\%$** en términos relativos. Un titular que mezcla las dos cosas puede alarmar o tranquilizar sin motivo.

### Mezclas y medias ponderadas

La concentración de una mezcla es la **media ponderada** por cantidades: $c = \dfrac{\sum c_i v_i}{\sum v_i}$. Al
mezclar $2$ L al $10\,\%$ con $3$ L al $20\,\%$ queda $\frac{0{,}2 + 0{,}6}{5} = 16\,\%$. Nunca se promedian los
porcentajes sin pesar: «$15\,\%$» no es la media de $10\,\%$ y $20\,\%$ si los volúmenes difieren.

## 4. La velocidad media: un caso donde el promedio engaña

> [!practico]
> Vas al pueblo de tus abuelos ($60$ km) a $60$ km/h y vuelves a $30$ km/h por un atasco. Tardas $1$ h en ir y $2$ h en
> volver: $120$ km en $3$ h son $40$ km/h de media, no $45$. El tramo lento dura más, y por eso «pesa» más en la media.


Si se recorre el mismo camino de ida a $v_1$ y de vuelta a $v_2$, la velocidad media **no** es
$\frac{v_1 + v_2}{2}$. Con distancia $d$ cada tramo, la distancia total es $2d$ y el tiempo total
$\frac{d}{v_1} + \frac{d}{v_2}$, de modo que

$$
v_{\text{media}} = \frac{2d}{\dfrac{d}{v_1} + \dfrac{d}{v_2}} = \frac{2 v_1 v_2}{v_1 + v_2} \quad(\text{media armónica}).
$$

**Ejemplo:** $30$ km/h y $90$ km/h dan $\frac{2\cdot 30\cdot 90}{120} = 45$ km/h, no $60$. Se tarda más en
el tramo lento, y por eso pesa más. Regla general: **las velocidades se promedian con el tiempo, no con el
camino.**

## 5. Interés simple e interés compuesto

> [!practico]
> Una bola de nieve que rueda cuesta abajo: cada vuelta coge nieve **proporcional a lo grande que ya es**. El interés
> compuesto es eso: el banco te paga intereses también por los intereses de años anteriores. Al principio apenas se
> nota; a $30$ años, la diferencia es enorme. Funciona igual al revés con una deuda que no pagas.


El **interés** es el precio del dinero a lo largo del tiempo. Con un capital inicial $C$ y una tasa $r$ por
periodo (por ejemplo $r = 0{,}04$ por año):

- **Simple**: los intereses se calculan siempre sobre el capital inicial, $C_n = C(1 + nr)$. Crece **linealmente**.
- **Compuesto**: los intereses se suman al capital y generan intereses, $C_n = C(1 + r)^n$. Crece
  **exponencialmente**.

> [!formal] Con rigor: de dónde sale la fórmula
> *Justificación del compuesto.* Cada periodo multiplica el capital por $(1 + r)$; tras $n$ periodos se han
> multiplicado $n$ factores iguales. $\blacksquare$

**Ejemplo resuelto:** $2000$ € al $3\,\%$ anual durante $5$ años. Simple: $2000(1 + 5\cdot 0{,}03) = 2300$ €.
Compuesto: $2000\cdot 1{,}03^5 = 2000\cdot 1{,}159274\ldots = 2318{,}54$ €. La diferencia ($18{,}54$ €) parece
pequeña, pero a $30$ años el compuesto da $2000\cdot 1{,}03^{30} \approx 4854$ € frente a $3800$ € el simple.

**Tasa equivalente (TAE).** Un $1\,\%$ mensual compuesto **no** equivale a un $12\,\%$ anual: equivale a
$(1{,}01)^{12} - 1 = 12{,}68\,\%$. En general, si se capitaliza $m$ veces al año con tasa $i$ por periodo, el
interés anual efectivo es $(1 + i)^m - 1$. Por eso se compara siempre con la **tasa anual equivalente**. (En España la TAE legal incluye además las comisiones y gastos; sin ellos, coincide con $(1 + i)^m - 1$.)

**Tiempo de duplicación.** Se busca $n$ con $(1 + r)^n = 2$. Con logaritmos (que se estudian a fondo en
[[mat-algebra-secundaria]]), $n = \ln 2 / \ln(1 + r)$. Como $\ln(1 + r) \approx r$ para $r$ pequeño y $\ln 2 \approx 0{,}693$, resulta la
**regla del $72$** (aproximada; la cuenta daría $69{,}3$, pero como $\ln(1 + r) < r$ esa cifra se queda corta a los tipos habituales del $5$ al $10\,\%$, y $72$ además tiene muchos divisores para calcular de cabeza): $n \approx \dfrac{72}{r\,[\%]}$. Al $6\,\%$, unos $12$ años (el valor exacto es
$11{,}9$). Es una estimación mental, no una fórmula exacta.

**Inflación.** Con una inflación del $3\,\%$ anual el poder adquisitivo de un euro baja a
$\frac{1}{1{,}03^{10}} \approx 0{,}74$ al cabo de diez años: un euro guardado compra un $26\,\%$ menos.

```python
from fractions import Fraction

def capital_compuesto(capital, tasa, anios):
    """Capital tras `anios` años, exacto (sin errores de coma flotante)."""
    return capital * (1 + tasa) ** anios

c = capital_compuesto(Fraction(2000), Fraction(3, 100), 5)
print(float(c))            # 2318.5481...
print(int(c * 100) / 100)  # truncado a céntimos: 2318.54
```

**Aviso sobre las tarjetas de crédito y los préstamos rápidos:** una tasa del $2\,\%$ **mensual** parece pequeña,
pero equivale a $1{,}02^{12} - 1 = 26{,}8\,\%$ al año, y los intereses se aplican sobre una deuda que, si no se
paga, **crece de forma exponencial**. Lee siempre la TAE.

## 6. Escalas, unidades y cómo cambian las áreas

> [!practico]
> Si haces una foto el doble de ancha y el doble de alta, necesitas **cuatro** veces más papel, no dos. Y una caja el
> doble de larga, ancha y alta cabe **ocho** veces más. Por eso un gigante de cuentos de $10$ veces nuestra altura pesaría
> $1000$ veces más, y sus huesos (cuya sección solo crece $100$ veces) no lo aguantarían.


Una escala $1 : k$ significa que $1$ cm del plano son $k$ cm de la realidad. En un mapa a $1 : 25\,000$,
$7$ cm son $175\,000$ cm $= 1{,}75$ km. **Lo que casi todo el mundo olvida:** si todas las **longitudes** se
multiplican por $k$, las **áreas** se multiplican por $k^2$ y los **volúmenes** por $k^3$. *Prueba para un
rectángulo:* lados $a, b$ pasan a $ka, kb$ y el área $ab$ pasa a $k^2 ab$; para un prisma, por el mismo
razonamiento, $k^3$. Si una maqueta está a $1 : 100$, necesita $\frac{1}{10\,000}$ de pintura por cada pared y
pesa $\frac{1}{1\,000\,000}$ de lo que pesaría el edificio de materiales iguales.

Los **prefijos del Sistema Internacional** (kilo $10^3$, mega $10^6$, giga $10^9$; mili $10^{-3}$, micro
$10^{-6}$, nano $10^{-9}$) y el **análisis dimensional** (comprobar que las unidades del resultado son las
esperadas) son la segunda red de seguridad: $\text{km/h} = \frac{1000}{3600}\,\text{m/s}$, por tanto $36$ km/h
son $10$ m/s.

## 7. Errores típicos

- Sumar porcentajes sucesivos ($+10\,\%$ y $+20\,\%$ no es $+30\,\%$).
- Creer que subir y bajar lo mismo vuelve al inicio.
- Restar el porcentaje en lugar de dividir por el factor para recuperar el precio sin IVA.
- Promediar velocidades en lugar de tiempos; promediar porcentajes sin pesar.
- Confundir puntos porcentuales con porcentaje.
- Pasar de interés mensual a anual multiplicando por $12$ en lugar de componer.
- Aplicar proporcionalidad directa cuando es inversa (obreros y días) o cuando no hay proporcionalidad.
- Olvidar que áreas y volúmenes escalan con $k^2$ y $k^3$.

## Repaso: lo que debe quedarte dentro de un mes

1. Directa: $y = kx$. Inversa: $xy = k$. Se resuelve reduciendo a la unidad.
2. Subir/bajar $p\,\%$ es multiplicar por $1 \pm \frac{p}{100}$; se encadena multiplicando; se invierte dividiendo.
3. $(1 + r)(1 - r) = 1 - r^2$: subir y bajar lo mismo no devuelve al inicio.
4. $C_n = C(1 + r)^n$; la TAE de $m$ capitalizaciones es $(1 + i)^m - 1$.
5. Escala $k$: longitudes $\times k$, áreas $\times k^2$, volúmenes $\times k^3$.

## Siguiente

Con los números dominados, [[mat-algebra-basica|el nodo de álgebra básica]] sustituye las cantidades concretas por
letras, y [[mat-funciones-basicas|el nodo de gráficas]] dibuja la proporcionalidad y otras relaciones en gráficas.
