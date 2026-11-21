---
id: mat-resolucion-triangulos
title: "Resolución de triángulos cualesquiera: teoremas del seno y del coseno, caso ambiguo, áreas y problemas de distancias"
area: matematicas
trunk_level: 3
prerequisites: [mat-razones-trigonometricas]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 4: «Trigonometría», secciones 4.1-4.4 (teorema del coseno, teorema del seno, resolución de triángulos, problemas con medidas simples y dobles). Apuntes Marea Verde, autores José Luis Lorente Aragón y Andrés García Mirantes. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_04_Trigonometria.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 8: «Trigonometría», sección 4 (teorema de los senos, de los cosenos y resolución de triángulos cualesquiera). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/08_Trigonometria.pdf"
  - "Euclides, «Elementos», libro II, proposiciones II.12 y II.13 (la forma geométrica del teorema del coseno). Edición de D. E. Joyce: https://mathcs.clarku.edu/~djoyce/elements/bookII/bookII.html"
hints:
  - "Concepto: en cualquier triángulo, los lados son proporcionales a los senos de los ángulos opuestos (teorema del seno), y c² = a² + b² − 2ab·cos C (teorema del coseno, un Pitágoras con corrección)."
  - "Herramienta: con dos ángulos y un lado, o dos lados y el ángulo opuesto a uno de ellos → seno (¡cuidado con el caso ambiguo!); con tres lados, o dos lados y el ángulo que forman → coseno. Los ángulos suman 180°: el tercero sale por diferencia."
  - "Documentación: Marea Verde Matemáticas I cap. 4 (sección 4); 4.º ESO B cap. 8 (sección 4)."
exercises:
  - id: teorema-del-seno
    tier: 1
    type: numero
    sig: 4
    prompt: |
      En un triángulo, $A = {{A}}^\circ$, $B = {{B}}^\circ$ y el lado $a$ (opuesto a $A$) mide ${{a}}$ cm. ¿Cuánto mide el lado $b$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":50,"B":70,"a":"10"}
        answers: ["sha256:786ed3edf141ab9b4a4d4f94780ac4f0117a831139ae69163c714baab1ced483","sha256:17edc2f6940e11e3ce7a6cfafdaca13fe8419addd2bf8e548f9bee083d49d51e","sha256:53401bbcaa9a1e14943bac512a0c6869363d8b42b6a158823bc3cb3121826086"]
      - values: {"A":35,"B":105,"a":"8"}
        answers: ["sha256:e669c2492616c5e59807525fcfb8f71e34d33c9acc1597ee71a16f5799601b38","sha256:7eca807a058158cc440ab1d477df2c786b923e5cead193e56caac0b1b6d2f0a8","sha256:94123499e287c92c7ae4696834796b614d9cef660249627c30af8b9e9562ff6c"]
      - values: {"A":62,"B":48,"a":"15"}
        answers: ["sha256:b7c823f13bb4b29e688310a70e9c92aa568c9b531581b961bb4c48d51d0ae832","sha256:6490ca3495cca326fb778a003fcae21b6d6f870274814162c40e65373775f159","sha256:7d8e309f42eb98aed1ca1dc81cf20592f6e2c946f3eb96933b635ceadc86fcbf"]
      - values: {"A":28,"B":95,"a":"6{,}5"}
        answers: ["sha256:64dbfd69ce4f96d6905fca8d9f3fba97c53c8da2bb436edb2e9a67e6b90b3561","sha256:f50e0965f822d521bbef8429155d5d2b781e863ad074a2ea22badd12798615e3","sha256:61bdc711ef44c78a4791fa5fc91edf216141bacfc71ad5bd4ed8a29f99c33dc7"]
      - values: {"A":80,"B":45,"a":"20"}
        answers: ["sha256:b2b98da354cee2801a982096b1b4114938a65600e6bdde9a8ee773323e149d2a","sha256:15f113e184d6dd25630cf2aef49ac554b18fda59e56aa969494ba8a8d048fd62","sha256:26453af1fc98aa43d33fab098a47d639243fa1059ba021b5e2380eaf4519b336"]
      - values: {"A":110,"B":25,"a":"9"}
        answers: ["sha256:6157757169d71998465ffc432320748ff940f3027ba161dbf41087557d6cfa03","sha256:7357e2232ae294e856eb044de28f088ffb754ddc49f113428d3f77e306aae013","sha256:9c1cd0b140eef0701c11e0a00c3863804b3b703805c990f8b65056fca9cd7dbc"]
  - id: teorema-del-coseno
    tier: 1
    type: numero
    sig: 4
    prompt: |
      En un triángulo, $a = {{a}}$ cm, $b = {{b}}$ cm y el ángulo comprendido $C = {{C}}^\circ$. ¿Cuánto mide $c$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":"8","b":"5","C":75}
        answers: ["sha256:7d4bafef17bfb741165b1a7ead6f245e0dca121c5528a0d23b642f2ce8545d9f","sha256:da08c327960f1f9c0955f5eea7f7cba4765e0b29c709039d7a730e1622252a8a","sha256:c163ba2541f79c3735cfd205618ea79f203c0fdfe2b1df2a8b482baf210f4e32"]
      - values: {"a":"12","b":"9","C":130}
        answers: ["sha256:52821a097dfaa712207c30663b207c939194694dedfc993787ccc64b4afb665d","sha256:c2e93e0816604b32af99cfc2daf28a25413669031dc957848f21cfd7d4bb9f1d","sha256:15fe8c3ecb0ab387ab15a6dc3cf24652624bb960edc5c41abada01c5c9ca6502"]
      - values: {"a":"6","b":"6","C":40}
        answers: ["sha256:f6e728ada2f2638750de87df3e32267f3a184f50c53c6235bdc4d06a1aaaf579","sha256:5b6c049d9a4cfb33d5354b0feaaa1be977619a308579b676c8ca1b2d4bf6c517","sha256:c9324c8be6ab2bedee4d11adb072818e053025b622ed61d67639c3a017bad622"]
      - values: {"a":"15","b":"7","C":95}
        answers: ["sha256:6510c8756df17155649cdf6a9bf435cf3bb7e55663a6faf3bea865f89045e153","sha256:8a247a54b580016fecc2e293d1489054495dd7c7d22736f43f21c660a5173ced","sha256:333ff6ac92a689632a4a458b6ce0847d21fcd8f2416f072f9a3d3b64107fd576"]
      - values: {"a":"4{,}5","b":"10","C":55}
        answers: ["sha256:7936b6c19b68ad1cbf8d432a0306f9d6b43adf3d2c7eb6452f88b0a0425ad2b7","sha256:4236f7365f82931f121abfab16d42d93c40088fc0c5a5d4a500928a02854e171","sha256:086bcd106741ee6e5e318e0cb8f25fbc5aa4be7e964ee3c7e5b27e2b4604c3fe"]
      - values: {"a":"20","b":"13","C":160}
        answers: ["sha256:a0f246493e6ee0ed96a8a73a2c226bbaf04d5a039612d0df3245c8681481e34b","sha256:d1ed719bd4875382e63079d636f00123c3bf0d7cf3bb1bbc4c7ab29780f8e7c7","sha256:91819bc944d8c343b859aaec282c1fa0e848b71edd80252c8585ed5028c13a76"]
  - id: angulo-con-tres-lados
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un triángulo tiene lados $a = {{a}}$, $b = {{b}}$ y $c = {{c}}$. ¿Cuánto mide el ángulo $C$ (opuesto a $c$), en grados? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":7,"b":9,"c":12}
        answers: ["sha256:c99177fe07f6d8e11c2fc03216643e5971785de92ce57df252d4652d350eed01","sha256:c303368ba39334e80756952e5aba08efa9ff64acb164c0f0c11e970049ef3ef2","sha256:cfaad6d5d0cd0a0a508848e7716614359aab287922c58913ecf7e4852ff8478d"]
      - values: {"a":4,"b":5,"c":6}
        answers: ["sha256:f1c0c00efc0ddb8d2318d1c25e6b4a1aaf9c6d29204aa7d09f298f6441a7cc3f","sha256:9f35348c96a3322c2adcbf320dd8d34c75dc7f8c70fc0394e3c46b24fb37707e","sha256:4f20c6c5b0aa07dd9af4892a6d55dee26cd989c9bb02fdf611dc25c0f53ddf65"]
      - values: {"a":10,"b":11,"c":19}
        answers: ["sha256:7c53b5374a1842563d5e4020ac7bc7d8ff8d31a4b4b14a5381e9bc2115764b0b","sha256:0a8b2b070a7163a5c1aab180994a4b478f4515786cdfb058d966227580e3c37e","sha256:3356de87b9eed94d457bd1b922c61a75c07403a00a85e6fda5656e7a700b07c3"]
      - values: {"a":3,"b":7,"c":8}
        answers: ["sha256:9cc3818132ae9e94bfa9f6a3347c45f850935fece7d8382772bd046522846a89","sha256:486b09c547025f87e0cc21fa217ff9429d6dade2faf5b72657ea882c45458cc1","sha256:a7f3850ce9cfed456c9eeb6dc224f627a1c9374e4e45329bdea8e5d8e665dcf6"]
      - values: {"a":6,"b":9,"c":10}
        answers: ["sha256:b7430eae215f6e53470971aac80968af3442f3e85d891a3d827b839dbbf17b4c","sha256:fbe0aa54fe629131e404eb825e451fc4d522801fbdacd68600430dd5442426d9","sha256:3471446304264a1b118d2d644ccacb72f5572d1c9dfbdce022f4a090ca7d9729"]
      - values: {"a":13,"b":14,"c":15}
        answers: ["sha256:2e9cbc59fa0c065f3e23842e305d5c8d7b76b5432041065dbddb537c070648aa","sha256:b5a105fe990da9f38c74cfd528eb3ec49c45f560920857fd7bbe091cfddd94bd","sha256:f323f0a57d6dbf14a75c26f5552d17b0823b896a5f56684448731ada900a2081"]
  - id: caso-ambiguo
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos triángulos distintos hay con $a = {{a}}$, $b = {{b}}$ y $A = {{A}}^\circ$ (el ángulo opuesto a $a$)? Responde $0$, $1$ o $2$.
    variants:
      - values: {"a":7,"b":10,"A":40}
        answers: ["sha256:da29b11101d2002c2d3d9802c0bf95fe8e75d2990c447b809faec5b6de0e68cb","sha256:740c31a230570a100960f9b32a84e6cfcf353e36a963ff81d9a76054a8764988","sha256:96392429c024aa8653dd4f310e5b8c587c5129b9e80a2162e1d1a0b66f51433d"]
      - values: {"a":12,"b":10,"A":50}
        answers: ["sha256:ce7e35ad226107032bdb5187e0638c260ad60cc2ff8dbd8c2f451e756cb8acaf","sha256:56f10f5138bcb14f9ab873c7c9305fa3d05212740a103287bffcd8ce02a6e978","sha256:71a105f9fc2499d580c6a4459a41d1a1c73eeedf270d3f757284bb72a7789c4c"]
      - values: {"a":4,"b":10,"A":30}
        answers: ["sha256:dd0815de92995b841f9e72467016b58655516dc471e4b05f1adcbafee1b1932d","sha256:97a674959da0602d50e860a4657905d5475381fcc9ef61da1d29277b4ada4fe6","sha256:0697a2d7cb6db863d6942f7ae71d3a6d4ba6537d629e2e68b675f98fbf7b0962"]
      - values: {"a":5,"b":10,"A":30}
        answers: ["sha256:dd755324bf9bbde8b5d2c8cd2b0f1c5af19041e5d497a606642cc650ca89e0a0","sha256:afc11786bd13dacb7dbd9f0fd4588b8db2a7fe7f96204cff845bb252c99990f2","sha256:553d3f5d139a54ce71c6ff61ca28d453afc38bf22027d2553411f7ad33f7f4e9"]
      - values: {"a":9,"b":14,"A":35}
        answers: ["sha256:f1cb12085254ccdc2023681da6bbb67465b41934793da9bf987407564aa44b89","sha256:6c87f4241a0b7df04d6b12ea1f4745b226e8f8f41fc85d854bea136f71b195c7","sha256:5a17e981be57e63dd2b3e09a058787b7177bce3a06a73e77965ace7bb6eceaa1"]
      - values: {"a":6,"b":15,"A":20}
        answers: ["sha256:3edcad662629662372f58979b5f069e01538aa97289e8f1fc0289dbbda53f3d3","sha256:135e7f7ab2d71d5744e54ed22db4b7a97a9fe9d94f30695e1817b91316df9b85","sha256:0af9daadd6958969921b67291567bd7b46bd3f8b798b7d4cd7437b0e6930e091"]
  - id: area-con-dos-lados
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula el área de un triángulo con dos lados de ${{a}}$ y ${{b}}$ cm que forman un ángulo de ${{C}}^\circ$. (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":"9","b":14,"C":35}
        answers: ["sha256:c7aa7ca12e59f893fa192363e131d7b13b41e282e86881fa29c406b52ee77660","sha256:e6b1d581db14e4cc41a143394bdb7e5e04689761cdd4cfc4c72ea03242f4a67a","sha256:77649781acca521660c94696117a540d433f5ce3ade7f30ba11f30cdf337ba2d"]
      - values: {"a":"6","b":6,"C":120}
        answers: ["sha256:d7a82994217a4b5c3e573594f3ae51c9326f8e294b09bb0a66f896568c91980e","sha256:b9bca4485371d9258ed9200f42894d070e6f58c2f7c92cb9349e5c5f8263568d","sha256:34403188de6ecad8f254bf7866eab1bb349cf9df64da3d5d7517fab4e0c2e2e2"]
      - values: {"a":"12{,}5","b":8,"C":72}
        answers: ["sha256:7ccd4b301c869ea9801a6b5e14e9f88c3c9b3783c0a7c94d93e4dc1ad08875a8","sha256:e3d3ed60455b3d5df99b3b9bee00c78f4ad4cf75606bc745ef79e880d9399d7d","sha256:98414ef426029d0a20fd65a916ad864c7b651efc5c5697e0f5fccba5758c8d5f"]
      - values: {"a":"20","b":15,"C":150}
        answers: ["sha256:928a0c0465db06e9a5924e44ab9f02711829a347b8434a406dc3d6389c9dfb85","sha256:051e232af7b63dcfa3330ed54c905edc2f9838ae1a2076c8ef66c129acd74fcd","sha256:aded73c05bd5ad82a17f03d14df38c3fa3e96b1525ea5bf3af8ccfe0b5480333"]
      - values: {"a":"7","b":11,"C":90}
        answers: ["sha256:394254f5a9eba4a471c6e4d074ad62c0c60782214845237f379ece6ef2dc037d","sha256:3af4c369a76f18cff209e6d40a711cbb6c5d1fb22fd6e34396738ad7fa5b8b40","sha256:0fb2d7b7dce71856ce6fb1a4f9b74903f6d0e34131437cd5363537fec9f1dcc2"]
      - values: {"a":"5","b":18,"C":28}
        answers: ["sha256:61578fbe7a1b54128fbec6aba33c1f3fbb0dc6c5085863e2da87bdf4625927fc","sha256:9fcdf199fe48c4edc9fb70e5c13c0218192d52390da95bf30cecc12d887aec70","sha256:4b3245d166cc0314b5a1505d42d520da8f84304ace115bd19947c56e8fc36432"]
  - id: distancia-a-traves-de-un-lago
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Para medir la distancia entre dos puntos $A$ y $B$ separados por un lago, se elige un punto $C$ desde el que se ven los dos: $CA = {{p}}$ m,
      $CB = {{q}}$ m y el ángulo $ACB$ mide ${{C}}^\circ$. ¿Cuánto mide $AB$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p":200,"q":260,"C":55}
        answers: ["sha256:beda50ebc1d23d5cfdba422986af3d61939e4d68fb711e79293adb46ef61dbf8","sha256:9d5fb43662d6359bfbbbbf043e1456813946e4f3569fd8df609a7701e50a1e78","sha256:c7709bbc340f1ab1de084a2100c9f5ef8b5bd54f991b8781271b6ac8cac3c857"]
      - values: {"p":85,"q":140,"C":100}
        answers: ["sha256:58e736df36f23f0d7df9b4e555c34d977e858d37e24208636d2b8a74555fdb77","sha256:372c36117ce7217e3b4284be10d81a61fe882cdfccc9cfeff40af008fa15395d","sha256:acabb0afc8c7ad2fa3f3f2ed6493abf017cd7e45355d29c64afb8bf85e59dc0b"]
      - values: {"p":320,"q":300,"C":40}
        answers: ["sha256:1f6b879fbbcf83c74f8e9a0b6c11dad5bfe55d5a4d5af64fbd9f6f2bd71fc7c8","sha256:97a84bb64ba609f545d83684b1a4ec45ae5c24ac1c373a8970a27d82c61220ad","sha256:8b4bddb6ba344cf3f143388ecd377d50228389c6d98cf2d37de82062b8d0eee3"]
      - values: {"p":60,"q":95,"C":125}
        answers: ["sha256:f6e9afed25e3fa987a142e5d1d668305f01a43c6047376fe4bdc32913aed50db","sha256:89aa9825c8003600800f78bebee614d25214134eb2c9dcdf3fd964ab8d6ec681","sha256:cbdccbde7c75d5fe725be3644f87001ae6bb23c04f73dd85d69492f5c0118ee8"]
      - values: {"p":410,"q":380,"C":72}
        answers: ["sha256:84ef4b625e5ce540ff16a81c9309298b65c2b24cb71ab48f1c7789dabfd0cfc7","sha256:0ab9270851b49953eaa9548f7eaaa0c0b48338889d9a6ad7680982f3fe7cdb45","sha256:5f0e4db170d529f3b03452c22aa3f544b9fe44f10a1c3776a974e771e5de6030"]
      - values: {"p":150,"q":90,"C":33}
        answers: ["sha256:ae170ba62fc87153892d3ce5ed115d37c595c68563150fed3e1873809cd156e2","sha256:904b75372ecf5f0d827d3fc5664cef5615002fa0ee52f100ea42123ed83bfc9f","sha256:525f27bd1dd7a5f7593edbb11a67c9c72e09c7e22d35e8d9fc9968f978db40f2"]
  - id: punto-inaccesible
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Desde dos puntos $A$ y $B$ separados ${{s}}$ m se observa un punto $P$ al otro lado de un río: el ángulo $PAB$ mide ${{a}}^\circ$ y el $PBA$, ${{b}}^\circ$.
      ¿A qué distancia está $P$ de $A$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":100,"a":62,"b":71}
        answers: ["sha256:644c51f863c381b672ca1eee36f5b6fdde99d41bcd4d3948eeefdeb3942a3cbb","sha256:d97282d8bbe37ed40d307c5d4be5af33c17ebf63db2308d2bd103258a2824bfa","sha256:4db0f14b63ebedf8616e4ebd14d3e5b4f378a2e1dc75725f88b721d438504a5e"]
      - values: {"s":250,"a":40,"b":85}
        answers: ["sha256:83ea86ddbb2fd6380793625f12d223f23c5f34ee9094af5be9caa5c2a5220bb8","sha256:ffe2221677876b47b2c65ce4a69fbd3221624ba9b478f8c0ff7f01f4fd595e2d","sha256:7c0305b2dac2cbf13aadef9f5d271db3563ab3e5dc22a66e32d363ce5f983794"]
      - values: {"s":80,"a":75,"b":55}
        answers: ["sha256:03e798533c2e49e2f81ed8b38d6733d6839da212eac35c47a374695fbfa60ca1","sha256:bc7309e8665f537659c8885bc65f37c9716b26cb285b707af1b50cdb5becf818","sha256:2d1d23dce7c39cc41240b0bc239e471dc91ad8661c6bd0222dbb5dfcaba673f7"]
      - values: {"s":500,"a":30,"b":120}
        answers: ["sha256:2cd4ebb32b4e1bf068f04c172d094a6fb12463d05cc9905204142aa2d43cb7c6","sha256:1f55716f73a8a619ccc3f25f4a693c0f09d753bb30effc477488ce9c824e9e9a","sha256:c4ffd3f0b67b6fe5190cf270d26de69903d036ee2bd05fd7e1650814b0b4def8"]
      - values: {"s":150,"a":88,"b":45}
        answers: ["sha256:d04a78fc83b0fe9b5f77db4f1676d03639dd4dc1a80ae835d396f91c507616cd","sha256:e03451969f8666a8c4b7a774b3e84e202891598a7fc8ec6ad263ef0ab2fe7519","sha256:5436e588a22e046e643ca845c36c7a4958295db7f5e379108690076c239d4f53"]
      - values: {"s":60,"a":50,"b":50}
        answers: ["sha256:a4f7df2a7ea892ce6e617854fa0df5b7c8cecf838135e6114328db28c4af6ade","sha256:f3388acd3d060fca09cc886ee2fa359cd4d8133a379dc60503d3a10ef62e36a9","sha256:8020dcd81f3b6e36b2dc8d0c0bb77870f5193bbe0cd42d0c492596eaab1b04f8"]
  - id: radio-circunscrito
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En un triángulo, el lado $a$ mide ${{a}}$ cm y el ángulo opuesto $A$, ${{A}}^\circ$. ¿Cuál es el radio de la circunferencia que pasa por sus tres
      vértices? (Usa el teorema del seno ampliado; al menos cuatro cifras significativas.)
    variants:
      - values: {"a":10,"A":35}
        answers: ["sha256:5746c244cfa37b203f2254d3408e9b5f73c1873fd1af0cb663681a59dad7019b","sha256:15885e2d95775cdffd896118e174c6ba839cda0cd000f346035c4fed45c7e57b","sha256:53c366f850cd5c6606a3f2b9f49b7812a404649533259e12036f8af5d3b2fbd3"]
      - values: {"a":7,"A":45}
        answers: ["sha256:c6b7f5138aa1f93627406f4702f40c9fe608bf1ba217ae378ad5a980d42ad66f","sha256:0f0a3fb7a2388724d84beb9b75d9c69d6a6111d63fe706116f11e03542ed57b4","sha256:807dbf60b240cbbb1b14eb0472d3aad67481f1ba215e23b7bf238853a92e2f85"]
      - values: {"a":12,"A":100}
        answers: ["sha256:1543f2d76e3d8647fc85e76e5244cf8d64bf0444a4c44b1930649025e767563c","sha256:9f2cd07b48252e985419ff7643ad07e3fdb5b22b197709f7476e67ba195ba738","sha256:32b08f0578eb50bcdba81b4c8b12f4f11bbac3f8821e2020cb790b288830fbbf"]
      - values: {"a":5,"A":60}
        answers: ["sha256:e4ae78f6d99245b001211653973be01946bb4f41d90dc4651a2c98d401b78cb6","sha256:134878dc816cbdcac8b73f29ce6c33c853c017b4bd38792ea345a77ccf57eb22","sha256:6ff47ad37d789eeca9783603c032bfc9329bcd97ba0997c6a391a03ef568b069"]
      - values: {"a":9,"A":135}
        answers: ["sha256:1a3d2f6f2316227170615d1e0e84cbc36f758507795dd585e76d4ea625a03320","sha256:7197ef71f0a5af36df29437effc50f6a28b05286b09e353c684bf5bcd0ff0cb2","sha256:4d72581afb372bac6453436f59047b589e9c9d708d806fe378884103218e53f2"]
      - values: {"a":15,"A":20}
        answers: ["sha256:efb550c40badaeeddc99cfcd69cd3ad710b36ccee2219e626b4aa12e5b81d267","sha256:604c9ff9a929d017142814ff86218a2f777ca09c1506f23bb27076d8f4e6ae05","sha256:b15b421b8a6aac7fba416214695c49dfc248b443305a15ef686ea495329ba201"]
  - id: dos-barcos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Dos barcos salen a la vez de un puerto, uno a ${{v1}}$ nudos y otro a ${{v2}}$ nudos (millas por hora), con rumbos que forman un ángulo de
      ${{th}}^\circ$. ¿A qué distancia, en millas, están al cabo de ${{t}}$ horas? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v1":12,"v2":15,"t":"2","th":60}
        answers: ["sha256:4f1661e0ac56a8b65b3864d5a24d3e2745035b609b51caf1786304774c92338b","sha256:a7e84f2e0e9e40312950fb8aa8bc738f98582c05f2dffac9147e845adfbc0d96","sha256:54266b052c808c23baab039cf3453f5f3c089dbfa3df2f7785f60893500edae2"]
      - values: {"v1":20,"v2":18,"t":"1{,}5","th":110}
        answers: ["sha256:7059a8e1d95e339efe48a1c79b343c76bc487549bc4dea691c05fc8a89f75727","sha256:d727e4b01cec80e333a1499363e84baeea8f77cfaff6fa4ac9c6a33eb9a577c8","sha256:17abab6b842d8af49eef5c7b17cfb887610f825c931ff3af66c58a7a93ae5d0c"]
      - values: {"v1":10,"v2":10,"t":"3","th":35}
        answers: ["sha256:6f7e052a51ed88b25a65568ba0492c2a40c408cbe8fe30ffdce0e251eda73add","sha256:d2d657ee1657ccbe48c94d7c1f32d0e1dfad04f65441b74466a333342adc6d3b","sha256:c742080d4ddb66f80387c04d6b9367a5bcf48961efca246b49952545d2822281"]
      - values: {"v1":25,"v2":14,"t":"2","th":150}
        answers: ["sha256:d3b2473d3e9aae2ab239bd054953085e3f823db94bfecac397843278d25c72fa","sha256:ef9189dce14ace598e4b556b6c89031f667a25910b37aa5c61db185ee1d00d02","sha256:c5b8431a864d7ea3567cb21b8f947c65379c91954c7e0134503400b27f1cae80"]
      - values: {"v1":8,"v2":22,"t":"2{,}5","th":80}
        answers: ["sha256:0ae4d344c65a0ade780de8b958dc95fa00d3b63fb48931ad8c021fa5a3a7c087","sha256:59cbe66083ae6403370b45ba7502a0bb812ddb5e280bb0759d2bbe8e40ef1577","sha256:48b8ac50cf0706ef3a54c8a0469ca18bc1bac3b3d5a4948fb34e1d27cef8a2b2"]
      - values: {"v1":16,"v2":9,"t":"4","th":20}
        answers: ["sha256:4a7efce18a6d4d5f4765abf1e38fa19102c7e5041bed496c36317ee8f300362e","sha256:d0f034d665ee16c1135ce7f14b6416bbdacc54ee2146d3aa154dd644a8d3f145","sha256:b19b1423a265397003f855169f94bca515a77c0c7c1c0e7322b1a71c105d2800"]
  - id: diagonal-del-paralelogramo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un paralelogramo tiene lados de ${{p}}$ y ${{q}}$ cm que forman un ángulo de ${{th}}^\circ$. ¿Cuánto mide su diagonal mayor? (Al menos cuatro
      cifras significativas.)
    variants:
      - values: {"p":8,"q":5,"th":60}
        answers: ["sha256:ed506b7f34da6db3e29c7315affd848ad4708d6609f14389cb9e9e62edd943eb","sha256:c975615735df28a679e4f756b1531448e6b82ef71df6eee223a61effc2e6cb8a","sha256:c4a5bd8eb82a86f01241694284297c55285c95c5616897926e1a14ec71c5bec1"]
      - values: {"p":12,"q":7,"th":45}
        answers: ["sha256:193f245b1510cc4181d1e791139378298c3ad2653b828200a914c0e78e117ebe","sha256:3981519d3460534e6de98c7156cdbfee26432afee820e988457a4b15b8579b13","sha256:89b7dd48bef9bace2af15a68f003db63080ebd5090cb0263a107d3ff96cbe2a0"]
      - values: {"p":10,"q":10,"th":70}
        answers: ["sha256:f435e3783b04de9778590c585b3c47fa03d75f0f32337c30e660db13e85f7be4","sha256:becccd64908c51d2b9b0ee53a758991557cb8b9e4baeafdaee9a78df87f96b6b","sha256:8df89b70ccc459aacbd1b9cc6edf4006b47a9a1aeb0acac83e7a0a0cb3de66d7"]
      - values: {"p":6,"q":9,"th":30}
        answers: ["sha256:a9b7946ce836bc65dd799402807717ec52967d0e5932ffe3973571f3fbc98b4c","sha256:22de6174735360262a318380fe772dff071d8d78494513548fa636a25da1f711","sha256:534e05f4fdef3a8e16708a426f029a9686f5cfb601a4d8f49aab2829fb9f70db"]
      - values: {"p":15,"q":4,"th":80}
        answers: ["sha256:094492cc95ce333fdfdb98af73dc027db752c4ae3a7b7b18c880b47f888898ab","sha256:4f84c9d308ac8e6743934a96ba0f9cb0672a5cc02372157d3d4ccabbba79e5a1","sha256:f8640ee6d99fc582f97c2d43682c379274e0046ef818898f3aa9fefe9600aa20"]
      - values: {"p":20,"q":11,"th":55}
        answers: ["sha256:1dd16b32e719687e20827c7779ce0d1a0f960af363d06ae13f1e1c3c553fe757","sha256:e62e840cd4bd6ec82d5e91a414eca8d0c92192ae45d4020a2967759905708b4e","sha256:21231f1165ef0ff2af31007ff224aa4fd2a22dae151eb9921e73130f5a7858a7"]
  - id: resolver-un-triangulo
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Resuelve el triángulo con $a = {{a}}$, $b = {{b}}$ y $C = {{C}}^\circ$ (halla $c$ y los otros dos ángulos). ¿Cuánto mide el ángulo $A$ (opuesto a $a$), en grados?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":9,"b":6,"C":50}
        answers: ["sha256:94de02ee72ac10a2c5b6523d814a1174dafeb5f02b7184f3836575283013ff0a","sha256:f3d11c996ae3f231f6dde84848e1ef00b74e30183c52395aa88f7a8362fae996","sha256:8377a1e907c7772f8efcf7534c0fcd39ec7321e772c6f3ba720eff079e2d69ac"]
      - values: {"a":5,"b":12,"C":65}
        answers: ["sha256:532875fcd73a54d89f639bc7ded131d560e4a7b8a4d3e6132a23bed2c3751d23","sha256:26e505a80605cf19b94e62d68df284fd41fbe29533cdbd97d7f6bfd00fb33090","sha256:a5e9dd0317b386c023aac13c0aeb527f0c46ccaaeb996d016855c144cd4a2f0a"]
      - values: {"a":14,"b":8,"C":100}
        answers: ["sha256:d2ff47d4f69b4d5f230a19bb068f02887e9158f14e43e2a983541cef6d772a8a","sha256:1fc74ff09939dc0ef7f00a01ac75df354fdb680d29f4faab2a1ae2ca1963072e","sha256:22e23397f0909b6524fe528a86e0101eef482c418f9cfce55d5c2cc7ed60740a"]
      - values: {"a":7,"b":7,"C":30}
        answers: ["sha256:edc100d53f2024f0b060e5b6cc6f82ff217612b8c8514fdecef54776b67ae670","sha256:d32014ebdde5c4bc8d916e7246bc2d595ab4dbee20677d8490fc0e31bbc4b092","sha256:d5f2acb3425c3ca15d16eaea8fefe54c31104a94739550fbde32e0e31c13f384"]
      - values: {"a":10,"b":4,"C":120}
        answers: ["sha256:336851b7094c43ed71458cce8c4340b705cdff4ad992235ad3275357102647ff","sha256:ae0508b35e1b3d58743a6c4b7386cd2c38746d705af194f8f6e0e783e0c6412c","sha256:33987702f3323995c6a7a83ddc521a96c6a39d236d62bbcb9ca9261f6900539c"]
      - values: {"a":11,"b":13,"C":75}
        answers: ["sha256:1b5ebe1fa5982efaf837d8dce375b775e2d0b5b3fdba827afbe05f3efce7e1f6","sha256:e66700b599be320d8a1f951dbec0d57142ec1e6a0e189ddb5f2f51976833897a","sha256:077d7c36f2fd86c5f4456cb5748ee6fb23c7428316a94d55b7227676135da083"]
  - id: demostrar-seno-y-coseno
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Demuestra el teorema del seno trazando una altura. (b) Demuestra el teorema del coseno colocando el triángulo en
      coordenadas con $C$ en el origen y $B$ sobre el eje $X$. (c) Explica por qué el teorema del coseno generaliza el de Pitágoras y qué indica el
      signo de $\cos C$.
    sealed: "gz64:H4sIAAAAAAACCn2TTW7bMBCFr/IgcGE5suBq1TpxgETIoruiWVYVMCJphwBNOqRYwDB8mCy77hF8sYL0T+xG6HLE977502wzb3XolTXZLBuPR5SPx3iWBPbCoAmk++AIQnohwWoGbzsnITU0CQvGWYknA209hPXondq/mWWIsZO8PwevQWJh3YoKsBfM0TWNXUtHvXWGVnLrpdk9MGwOrzTw+shKfF0G0mSELRrDmmbhiG9ptx1i7TDHUdENKh537Bbcmg9d2t5Z/Nr/dr3iEl7Cdr2SRkahigUIEsl4qoAP8usdKzF6VggGxzFA+ggL3hbvWRvDSWIRpCNsYrrgKaI/AEefPk/bpuHKcUzwkKcGB4ZY5o1pzHg86uIu61hojTlG0wLTnBVgjzGiFMWBP8SwaxpuPepicDN1zmaNYbytLrWYgPK2wk36NGBK8q6tRsnQVjVuhkpuqzrHBBWdwTeg5KVE79rq6pmVxwZ5+lnVob8vp+HEFk+gOaaxx9cgBeFY/xnKZvim+v3b0jry5QHE4o5oGYS9oNwfKMl/d+G/hVeXOz0b7pLhOLH7CwdGUoM71UunLNbkCFyTVwvFyV1dz9o6+ODTmfm8zIrMhc4pns1+bLMTIZtlT5471cmrvzidYro2jw2EFIGnk+2ldXIVFRpeGhup62B667NZtSuuuDVpHjRFrlC+J8MVQRpwa52QhkRie7Va61T96ZSc1MTV/o/BIhhBK2l60v9L9D0ZrKFYISdv/11nIr8vCpso9GppbGz1NPODLG0Om+NGrtP+3P0FNxH+tO0EAAA="
  - id: r-cuando-seno
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Con qué datos conviene empezar por el teorema del seno?
    options:
      - |
        Dos ángulos y un lado
      - |
        Tres lados
      - |
        Dos lados y el ángulo comprendido
      - |
        Solo ángulos
    answers: ["sha256:099c7f72aa0d92421b358538556c3861e3eafe58615faefb76bb171fd80ea38e"]
  - id: r-cuando-coseno
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Con qué datos conviene usar el teorema del coseno?
    options:
      - |
        Dos ángulos y un lado
      - |
        Un lado y un ángulo
      - |
        Tres lados, o dos lados y el ángulo comprendido
      - |
        Tres ángulos
    answers: ["sha256:9b5d375eee624cb25608f0c0e2997e084fd87e7d9ba19ee93fdb8a04e0ff4f4c"]
  - id: r-ambiguo
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué, al calcular un ángulo con el teorema del seno, puede haber dos soluciones?
    options:
      - |
        Porque el coseno es periódico
      - |
        Porque $\operatorname{sen}\alpha = \operatorname{sen}(180^\circ - \alpha)$: un mismo seno da un ángulo agudo y otro obtuso
      - |
        Porque el seno puede ser mayor que $1$
      - |
        No hay ambigüedad
    answers: ["sha256:d49fbb9d91f49e6ebe444284ac88faca838e4e4d9ee4d08632cb0b732c249ef3"]
  - id: r-area-formula
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el área de un triángulo con lados $a$ y $b$ que forman un ángulo $C$?
    options:
      - |
        $ab\cos C$
      - |
        $\frac12 ab$
      - |
        $ab\operatorname{sen}C$
      - |
        $\frac12 ab\operatorname{sen}C$
    answers: ["sha256:94f73d4fb2b36eb40e54b52347c55f7455bbadc5964864ddf4ce57d40e4cacbe"]
  - id: r-seno-ampliado
    tier: 2
    type: opcion
    review: true
    prompt: |
      En el teorema del seno, ¿qué es la constante $\frac{a}{\operatorname{sen}A}$?
    options:
      - |
        El diámetro de la circunferencia circunscrita
      - |
        El perímetro
      - |
        El área
      - |
        La altura
    answers: ["sha256:c76a10c36ffd4f773ca8a961e0ac90596b0fc03a9c8371bcacbf0df438809ca7"]
  - id: r-tres-angulos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Se puede resolver un triángulo conociendo solo sus tres ángulos?
    options:
      - |
        Sí, siempre
      - |
        Solo si es rectángulo
      - |
        No: hay infinitos semejantes
      - |
        Solo si es isósceles
    answers: ["sha256:dc5eba652e767ee9b25a86483b3f707f7614670ab2b17b7cf0bccc0171d07e26"]
  - id: r-obtuso-coseno
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si el ángulo $C$ es obtuso, ¿qué signo tiene $\cos C$?
    options:
      - |
        Positivo
      - |
        Negativo
      - |
        Cero
      - |
        Mayor que $1$
    answers: ["sha256:0498be2eaf90b63d1e028833dea1ae9d472aab7f2a368441552b62a3be6a114b"]
---

# Resolución de triángulos cualesquiera: teoremas del seno y del coseno, caso ambiguo, áreas y problemas de distancias

Las razones trigonométricas resuelven triángulos rectángulos, pero los triángulos del mundo real (una parcela, la distancia entre dos
barcos, la posición de un móvil a partir de dos antenas) rara vez lo son. Dos teoremas, el del **seno** y el del **coseno**, permiten resolver
cualquier triángulo a partir de tres datos (con al menos un lado). Este nodo los demuestra, explica cuál usar en cada caso, analiza el caso
en que hay dos soluciones y los aplica a problemas de distancias inaccesibles.

## Objetivos

Al terminar sabrás:

1. Enunciar y demostrar los teoremas del seno y del coseno.
2. Elegir el teorema adecuado según los datos y resolver cualquier triángulo.
3. Reconocer el caso ambiguo (dos lados y el ángulo opuesto a uno) y contar sus soluciones.
4. Calcular áreas con dos lados y el ángulo comprendido, y el radio de la circunferencia circunscrita.
5. Resolver problemas de topografía y navegación.

## Qué debes dominar antes

[[mat-razones-trigonometricas]] (razones de cualquier ángulo, $\operatorname{sen}(180^\circ - \alpha) = \operatorname{sen}\alpha$, relación fundamental).

> [!question] Test de entrada
> 1. ¿Cuánto vale $\cos 120^\circ$?
> 2. Si $\operatorname{sen}\alpha = 0{,}5$, ¿qué dos ángulos entre $0^\circ$ y $180^\circ$ cumplen eso?
> 3. Dos ángulos de un triángulo miden $48^\circ$ y $67^\circ$; ¿y el tercero?
>
> Respuestas: $-\frac12$; $30^\circ$ y $150^\circ$; $65^\circ$.

## 1. Para qué sirve

- **Topografía**: medir terrenos y distancias a través de obstáculos (ríos, lagos, montañas) por **triangulación**.
- **Navegación y GPS**: situar un barco o un avión a partir de rumbos y distancias.
- **Física e ingeniería**: sumar vectores que no son perpendiculares (la combinación de dos desplazamientos o dos velocidades)
  ([[fis-medida-movimiento]]); estructuras triangulares.
- **Astronomía**: distancias a objetos lejanos por paralaje.

## 2. El teorema del seno

> [!practico]
> En un triángulo, a mayor ángulo se opone mayor lado. El teorema del seno dice exactamente en qué proporción: cada lado dividido entre
> el seno de su ángulo opuesto da siempre el mismo número (que, además, es el diámetro de la circunferencia que pasa por los tres
> vértices).

En un triángulo de lados $a$, $b$, $c$ y ángulos opuestos $A$, $B$, $C$:
$$
\frac{a}{\operatorname{sen}A} = \frac{b}{\operatorname{sen}B} = \frac{c}{\operatorname{sen}C} = 2R ,
$$
donde $R$ es el radio de la circunferencia circunscrita.

*Ejemplo:* $A = 40^\circ$, $B = 65^\circ$, $a = 12$. Entonces $C = 75^\circ$, $b = \frac{12 \operatorname{sen}65^\circ}{\operatorname{sen}40^\circ} \approx 16{,}92$ y $c = \frac{12\operatorname{sen}75^\circ}{\operatorname{sen}40^\circ} \approx 18{,}03$.

## 3. El teorema del coseno

> [!practico]
> Si abres un compás, la distancia entre sus puntas depende de lo abierto que esté. Con un ángulo recto es Pitágoras; si lo cierras, la
> distancia es menor que la de Pitágoras; si lo abres más, mayor. El teorema del coseno añade a Pitágoras justo esa corrección.

$$
c^2 = a^2 + b^2 - 2ab\cos C \qquad (\text{y análogamente para } a^2 \text{ y } b^2).
$$
- Si $C = 90^\circ$, es Pitágoras; si $C$ es agudo ($\cos C > 0$), $c^2 < a^2 + b^2$; si es obtuso, $c^2 > a^2 + b^2$.
- Despejando, sirve para hallar un ángulo con los tres lados: $\cos C = \dfrac{a^2 + b^2 - c^2}{2ab}$ (sin ambigüedad: el coseno distingue agudos de
  obtusos).

*Ejemplo:* lados $7$ y $10$ con $60^\circ$ entre ellos: $c^2 = 49 + 100 - 140 \cdot 0{,}5 = 79$, $c \approx 8{,}89$. Lados $5$, $6$ y $8$: $\cos C = \frac{25 + 36 - 64}{60} = -0{,}05$,
$C \approx 92{,}9^\circ$.

> [!formal] Con rigor: demostración de los dos teoremas
> **Seno.** La altura $h$ desde $C$ cumple $h = b\operatorname{sen}A$ y $h = a\operatorname{sen}B$ (si un ángulo es obtuso, la altura cae fuera y se usa
> $\operatorname{sen}(180^\circ - B) = \operatorname{sen}B$). Igualando, $\frac{a}{\operatorname{sen}A} = \frac{b}{\operatorname{sen}B}$. Para ver que vale $2R$: el diámetro $BB'$ de la circunferencia
> circunscrita forma con $C$ un triángulo rectángulo en $C$ (ángulo inscrito en una semicircunferencia), y el ángulo en $B'$ es igual a $A$
> (inscritos sobre el mismo arco); así $a = 2R\operatorname{sen}A$.
> **Coseno.** Con $C = (0, 0)$, $B = (a, 0)$ y $A = (b\cos C, b\operatorname{sen}C)$: $c^2 = (b\cos C - a)^2 + b^2\operatorname{sen}^2C = a^2 + b^2 - 2ab\cos C$, usando
> $\operatorname{sen}^2 + \cos^2 = 1$. $\blacksquare$

## 4. Resolver un triángulo: qué teorema usar

Un triángulo queda determinado por tres datos con al menos un lado (con tres ángulos solo se conoce la forma, no el tamaño).

| datos | método |
| --- | --- |
| tres lados (LLL) | coseno para dos ángulos; el tercero, por diferencia a $180^\circ$ |
| dos lados y el ángulo comprendido (LAL) | coseno para el tercer lado; después, coseno (o seno, con cuidado) para otro ángulo |
| un lado y dos ángulos (ALA o LAA) | el tercer ángulo por diferencia; seno para los lados |
| dos lados y el ángulo opuesto a uno (LLA) | seno: **caso ambiguo**, puede haber $0$, $1$ o $2$ triángulos |

**El caso ambiguo.** Con $a$, $b$ y $A$: $\operatorname{sen}B = \frac{b \operatorname{sen}A}{a}$. Si sale mayor que $1$, no hay triángulo. Si es menor que $1$, hay dos ángulos posibles, $B$ y
$180^\circ - B$; el segundo solo vale si con él los ángulos suman menos de $180^\circ$ (lo que ocurre cuando $a < b$). *Ejemplo:* $a = 6$, $b = 10$, $A = 30^\circ$:
$\operatorname{sen}B = \frac{10 \cdot 0{,}5}{6} \approx 0{,}833$, $B \approx 56{,}4^\circ$ o $B \approx 123{,}6^\circ$, y los dos dan triángulo. Geométricamente, la circunferencia de radio $a$
centrada en $C$ corta en dos puntos al lado donde está $B$.

## 5. Área y otras fórmulas

- **Área** con dos lados y el ángulo comprendido: $S = \frac12 ab \operatorname{sen}C$ (la altura sobre $a$ es $b \operatorname{sen}C$).
- **Fórmula de Herón** con los tres lados ([[mat-triangulos-pitagoras]]).
- **Radio circunscrito**: $R = \frac{a}{2\operatorname{sen}A}$.

## 6. Problemas de distancias

- **Distancia a través de un obstáculo**: desde un punto $C$ que ve $A$ y $B$ se miden $CA$, $CB$ y el ángulo $C$; el coseno da $AB$.
  *Ejemplo:* $CA = 120$ m, $CB = 150$ m, $C = 70^\circ$: $AB \approx 156{,}8$ m.
- **Punto inaccesible**: con una base $AB$ medida y los ángulos que forman con $P$ desde $A$ y desde $B$, el seno da $AP$ y $BP$ (es la
  triangulación de los mapas).
- **Navegación**: dos móviles que salen del mismo punto con rumbos distintos forman un triángulo con el ángulo entre los rumbos.
- **Paralelogramos y suma de vectores**: la diagonal de un paralelogramo de lados $p$, $q$ y ángulo $\theta$ mide $\sqrt{p^2 + q^2 + 2pq\cos\theta}$ (la del ángulo
  suplementario lleva el signo menos).

## 7. Errores típicos

- Usar el teorema del seno para hallar un ángulo obtuso sin darse cuenta (la calculadora da siempre el agudo).
- Olvidar el caso ambiguo, o dar dos soluciones cuando la segunda no es válida.
- En el coseno, olvidar el factor $2$ o el signo menos; o restar los cuadrados en el orden equivocado al despejar el ángulo.
- Emparejar un lado con un ángulo que no es su opuesto.
- Intentar resolver un triángulo solo con los tres ángulos.

## 8. Resumen

- Seno: $\frac{a}{\operatorname{sen}A} = \frac{b}{\operatorname{sen}B} = \frac{c}{\operatorname{sen}C} = 2R$.
- Coseno: $c^2 = a^2 + b^2 - 2ab\cos C$; generaliza Pitágoras y da ángulos sin ambigüedad.
- Elección: LLL y LAL, coseno; ALA y LAA, seno; LLA, seno con caso ambiguo.
- Área $\frac12 ab\operatorname{sen}C$; Herón; $R = \frac{a}{2\operatorname{sen}A}$.
- Triangulación, obstáculos, navegación.

## Repaso: lo que debe quedarte dentro de un mes

1. Los dos teoremas y una demostración de cada uno.
2. Qué teorema usar según los datos.
3. Por qué el caso LLA puede tener dos soluciones.
4. La fórmula del área con dos lados y un ángulo.
5. Cómo se mide una distancia a través de un lago.

## Siguiente

[[mat-identidades-ecuaciones-trigonometricas]] (fórmulas de suma y ángulo doble, identidades y ecuaciones).
