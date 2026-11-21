---
id: mat-sistemas-dos-incognitas
title: "Sistemas de dos ecuaciones lineales con dos incógnitas: sustitución, igualación, reducción, interpretación gráfica y problemas"
area: matematicas
trunk_level: 3
prerequisites: [mat-ecuaciones-primer-grado]
academic_sources:
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 10: «Álgebra», secciones 5.1-5.4 (concepto de sistema de ecuaciones lineales y métodos de sustitución, igualación y reducción). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_10_algebra.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 5: «Ecuaciones y sistemas», secciones 3.1-3.5 (concepto, clasificación y métodos de resolución) y 4.3 (resolución de problemas mediante sistemas). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/05%20Ec%202%20grado%203.pdf"
hints:
  - "Concepto: una solución del sistema es un par (x, y) que cumple las dos ecuaciones a la vez; gráficamente, el punto donde se cortan las dos rectas. Los tres métodos hacen lo mismo: eliminar una incógnita para quedarse con una ecuación de primer grado."
  - "Herramienta: si una incógnita ya está despejada o tiene coeficiente 1, sustitución; si las dos ecuaciones dan y = …, igualación; en otro caso, reducción (multiplicar para que una incógnita tenga coeficientes opuestos y sumar). Comprueba en las DOS ecuaciones."
  - "Documentación: Marea Verde 2.º ESO cap. 10 (sección 5); 3.º ESO cap. 5 (secciones 3 y 4.3)."
exercises:
  - id: metodo-de-sustitucion
    tier: 1
    prompt: |
      Resuelve por **sustitución** el sistema $\left\{\begin{array}{l} {{e1}} \\ {{e2}} \end{array}\right.$ Respuesta: `x;y`.
    variants:
      - values: {"e1":"x + 2y = 11","e2":"3x - y = 12"}
        answers: ["sha256:11b4e3d107c9ead370d5988313bdb607b2fa33279ce574f04f1f9091af18bc34"]
      - values: {"e1":"-2x + y = 1","e2":"5x + 3y = 25"}
        answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
      - values: {"e1":"x - 3y = -7","e2":"4x + 5y = 6"}
        answers: ["sha256:08165339490e6089b8c9706d04c057083734242352c1c09d94b9091a87e3c9a1"]
      - values: {"e1":"3x + y = 10","e2":"2x - 5y = 18"}
        answers: ["sha256:ba370f8efee3c8a520bd74c9be3ea0ee7cd66c32f56f1883c003cde0f33c86bd"]
      - values: {"e1":"x + 4y = 2","e2":"2x + 3y = -6"}
        answers: ["sha256:1b58bbaafdc136e2bc53d7dafa5099f1a8ea08bbe65ad3adf09e67727b94ceee"]
      - values: {"e1":"5x + y = 21","e2":"3x - 2y = 10"}
        answers: ["sha256:c7e89f720edbab31d81f8c8d658b9db15ea46f4672591510a638b778192b2286"]
  - id: metodo-de-reduccion
    tier: 1
    prompt: |
      Resuelve por **reducción** el sistema $\left\{\begin{array}{l} {{e1}} \\ {{e2}} \end{array}\right.$ Respuesta: `x;y`.
    variants:
      - values: {"e1":"3x + 4y = 8","e2":"5x - 4y = 24"}
        answers: ["sha256:333de8e8d2a2402d709f0a57fba0292d88af87e731f2a391e2df78e2538a9595"]
      - values: {"e1":"2x + 5y = 1","e2":"3x - 2y = -8"}
        answers: ["sha256:3cb7b0b08aed44f0f57bec2249989d5f85f71d1425e448de63bef9a593fd1afc"]
      - values: {"e1":"4x + 3y = 19","e2":"6x + 5y = 27"}
        answers: ["sha256:51707f9a59fd9cc84170d3000336a5654af14ab0ad559e9d2989380144749359"]
      - values: {"e1":"7x - 2y = 1","e2":"3x + 4y = 15"}
        answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
      - values: {"e1":"5x + 2y = 3","e2":"2x + 3y = 10"}
        answers: ["sha256:756236390741caef54a3307d0d4ae1406cfa69e19a298576634a497bd1a64c7f"]
      - values: {"e1":"6x - 5y = 10","e2":"4x + 3y = 13"}
        answers: ["sha256:93b4285ba317a06be307004c43a7fab85b6dd11cbd72eb8c2165f44d126b7972"]
  - id: metodo-de-igualacion
    tier: 1
    prompt: |
      Resuelve por **igualación** el sistema $\left\{\begin{array}{l} {{r1}} \\ {{r2}} \end{array}\right.$ y di en qué punto se cortan
      las dos rectas. Respuesta: `x;y`.
    variants:
      - values: {"r1":"y = 3x + 2","r2":"y = -x + 8"}
        answers: ["sha256:dcaf0dab3d1670573cf1c1e39a1a9f575c5c1bee4f6a275d29dcd6d31e4aea0b"]
      - values: {"r1":"y = -2x + 7","r2":"y = x - 2"}
        answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
      - values: {"r1":"y = 4x - 5","r2":"y = -x + 10"}
        answers: ["sha256:caaabb8be65085cf2b08b76f8dd7e9c85cd21ef9be7f0c7ac781f31e2c23bd70"]
      - values: {"r1":"y = 0{,}5x + 3","r2":"y = -1{,}5x + 7"}
        answers: ["sha256:5c062f977e5d0e39b746d58304e9711596badda6c7fa054f415a197c006080d5"]
      - values: {"r1":"y = 5x - 2","r2":"y = 2x + 7"}
        answers: ["sha256:46de623b6608c21f0f3dd3c12b2e0ecb82764107f82433a4d854bd2ab463bd07"]
      - values: {"r1":"y = -3x + 4","r2":"y = 2x - 6"}
        answers: ["sha256:2f6f5f24734eb41a14264419bb6e1265335041d117581205b284d3e3fbad7313"]
  - id: clasificar-sistema
    tier: 2
    prompt: |
      Clasifica el sistema $\left\{\begin{array}{l} {{e1}} \\ {{e2}} \end{array}\right.$ Responde `determinado` (una solución),
      `indeterminado` (infinitas) o `incompatible` (ninguna).
    variants:
      - values: {"e1":"2x - 3y = 5","e2":"4x - 6y = 10"}
        answers: ["sha256:42eff26416d8850bbe3e2e302b7eec5abd959f2cbc00e0cd540eef0a26f9e620"]
      - values: {"e1":"x + 4y = 7","e2":"3x + 12y = 20"}
        answers: ["sha256:62a8b13dcc5471418358086b4a60ef38dd3c269976f5e8339c77e3afdb1a324a"]
      - values: {"e1":"5x + 2y = 9","e2":"2x - 5y = 3"}
        answers: ["sha256:239783e5e82d72dc988e5b88bcb59db5b96c7e4d309bcc13277816b9241423cb"]
      - values: {"e1":"3x - y = 4","e2":"-6x + 2y = -8"}
        answers: ["sha256:42eff26416d8850bbe3e2e302b7eec5abd959f2cbc00e0cd540eef0a26f9e620"]
      - values: {"e1":"4x + 6y = 2","e2":"6x + 9y = 4"}
        answers: ["sha256:62a8b13dcc5471418358086b4a60ef38dd3c269976f5e8339c77e3afdb1a324a"]
      - values: {"e1":"2x + 5y = 1","e2":"5x - 2y = 3"}
        answers: ["sha256:239783e5e82d72dc988e5b88bcb59db5b96c7e4d309bcc13277816b9241423cb"]
  - id: parametro-sin-solucion-unica
    tier: 3
    type: numero
    sig: 10
    prompt: |
      ¿Para qué valor de $k$ el sistema formado por ${{e1}}$ y $kx + {{d}}y = {{e}}$ **no** tiene una única solución?
    variants:
      - values: {"e1":"2x + 3y = 7","d":6,"e":1}
        answers: ["sha256:9c418251e5e3eed3159c4aa76592120b2f87e544daa6640d2d44bca457c5910d","sha256:b3364777c456974d7f1e58c835dc5975e387eb7d045c28df37758b3785e8f239","sha256:66026af6dc3237af6b8bdec109d9c47a10e9356828bdeaa13d8c53dbf3f69a68"]
      - values: {"e1":"4x - 2y = 5","d":3,"e":2}
        answers: ["sha256:941a17a367acb05d30abcd57dd4d687eb6d539a62375d25b44cb7408acfce330","sha256:4a38978d13e241869b414d0273c37fe2064f993d99780b7496f1d3fcbeca8779","sha256:8a335cad39055ebdeeac59a22744c6f537e20dc73ffbc7c20778b83bcabab9a0"]
      - values: {"e1":"x + 5y = 2","d":10,"e":9}
        answers: ["sha256:f0ec89caf679cf5e88078b801cee2cf221fb2a74356a2ef2fecf2d1afb053333","sha256:f098c6afaea87b3737e40ec641876060344e0d5a080af01a2feb2530fad2d6af","sha256:b4e47a8f45eb7b7a0391ef9a253a49ee2391863c848359b7a1c94813370045e0"]
      - values: {"e1":"6x + 4y = 1","d":2,"e":5}
        answers: ["sha256:7bea849c53f375529d0a7b93b49857b76b36fce92b424577c2d9a3387156296f","sha256:8f33d5607ca11a1ada46acdfecdea41113fedcf33db6af5a1f020cb126c91f2b","sha256:c4730374296576c5030d88b1a72c86ade573a09c0922c83e115abdc6cd338e6d"]
      - values: {"e1":"3x + 7y = 2","d":14,"e":1}
        answers: ["sha256:c070663878d1c86dfe56a2171a00e982bd1f01493084ede39be518b832b6b584","sha256:16d15493e45829cd9d6fb390d2a0912bc19dfd8292cecdfcc0cdd6dad50924c3","sha256:0b8bcac8e6304882cd87d7e280fd993b140479771bc7400da75e7ca7d8cbe6ce"]
      - values: {"e1":"5x - y = 3","d":4,"e":2}
        answers: ["sha256:eac44809a09fb845b55a0283dd5b785ed49de9ebac0dcb21ad8d5b0bad881619","sha256:6f767e3f13e68f1b54edaefb22e42b78fc5fb7dd8262bf6bf0b5bb22d76ca705","sha256:eb51600457bc11e12df6279a06866266867114566affa308c1dfb737e6cac91c"]
  - id: problema-de-entradas
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un teatro vende ${{n}}$ entradas, unas de adulto a ${{pa}}$ € y otras de niño a ${{pn}}$ €, y recauda ${{V}}$ €. ¿Cuántas entradas
      de adulto vendió?
    variants:
      - values: {"n":120,"pa":"8","pn":"5","V":765}
        answers: ["sha256:ccdaf6276bf42c825aa079ad51656504c229e4a0422e7632c710d25bd0e41706","sha256:293fa4a7976d1a272fbb6da444fc1f002a18e652e8dc0d8bac29320364fdcd57","sha256:d7003095536d7dcd5773585c4cef0bad864169e123ea7a35beca077b9aea79e3"]
      - values: {"n":80,"pa":"12","pn":"7","V":785}
        answers: ["sha256:2bfbed96778c36687896ee9b0a5c0f3cc5da4707ac8d7b9282996946897c35c0","sha256:39902bebf3fc4bb8a54184cc16012e9e5d63d9d25ab6c56ebc003c95f11b228c","sha256:8404b6ca09f107d6ed5d2280caaf7966cfa0de218185ebbc201d0f71779a8912"]
      - values: {"n":200,"pa":"6","pn":"4","V":1010}
        answers: ["sha256:16d37cec7c4cc4a5286ce62a06fc85d39cd087ddaa54c98efd62bd03ce640337","sha256:6bf81ebd79848940223f4adabb68ca082213693c6781fedc6c824192434b704f","sha256:fc80c6711de01e8fa73100c590be1a8f0505baadaee247ad098d15e03e78b0a8"]
      - values: {"n":150,"pa":"9","pn":"6","V":1215}
        answers: ["sha256:7460db1941e107925734cd1a13b453c809510461a7362de1d3701cab3777a70d","sha256:e7a5bfdf304184750737663b6b09eaeac49edc6d75f0d160b3170962a48ab982","sha256:80b8147b296593fa7c1dbdac62c8c0c463ca2e93a2e86f4f6e4f61d29e91c9bb"]
      - values: {"n":64,"pa":"15","pn":"10","V":820}
        answers: ["sha256:6b4f4b3bcc55f645245d8c63ded59ef65608ddc8a1dd5662031f8580594af612","sha256:0c55859cba150a8c572107abb1e0d055096cbcbd304035c4fd550f3c8b2d52cd","sha256:c2b4b1eb8f4e552a63c583b1c14b4862fab49054ba044d95034b7bc9e9e806c4"]
      - values: {"n":90,"pa":"7{,}5","pn":"4{,}5","V":543}
        answers: ["sha256:6bf921399a56bdf8e6eea7ac96824ab3b412f841728d29e6aa52dc395685e2d5","sha256:71f3d89c41fe8237b3139246f65ac6d58f205cbc8ec48d26afd0546f177ea2d1","sha256:96e7a0bb72a4ba6c291f85352cfad49743eb7dcc76ceddb1b92741f333e57275"]
  - id: suma-y-diferencia
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Dos números suman ${{S}}$ y su diferencia es ${{D}}$. ¿Cuál es el mayor?
    variants:
      - values: {"S":"53","D":"17"}
        answers: ["sha256:e07b5dc44d0b12cf55f0418cf8822209653cda7022017bca0259dcea6b1c35cb","sha256:9379ace452da38279979c2e3302ef4837014130f892cc67d2c4a2c98aa863e27","sha256:d0bb7497cea7e8e7d6007dd540630e5c3b2f3a52ffa099263fc96b027bb67ddc"]
      - values: {"S":"100","D":"36"}
        answers: ["sha256:0ff0a7900e2c440173bc43e79acc63755b93a043e8e9934f90082bd030234583","sha256:f593e0b24e4abd5b6128b49e356b1d4c68eb40e1850c00a5bfbfc792b540a8d1","sha256:fef4d7800bb613e21d2301d9f784b08b81cf7dc6501f6bba948fa2e6bec84e1c"]
      - values: {"S":"-4","D":"22"}
        answers: ["sha256:94d4ea587de3cd75073d1f0ba7db4bb798b7e50361d838a88a2ea3d3a3d8ec7d","sha256:c47eaf91567b8a05f48b07ecb85cc3f4952d23b755258ef82de6b349de6d46fc","sha256:4a95301eabcbc3b13891dcd716ecb80c85cfbc72d8da79885925d6ea7749bedd"]
      - values: {"S":"75","D":"9"}
        answers: ["sha256:27f95705340696ec5aeee9c6bba93a105c25c62863f20ae790d51c7f781cbc74","sha256:0664035fb8cada2191f6177de6ed1230d472dba1132b305b9a5f69a1cece66bc","sha256:5e74e2ae50d0cc6b923871ccc7e6b5ae9453ac5241dcd057550eecda9f5ca1cb"]
      - values: {"S":"13{,}5","D":"2{,}5"}
        answers: ["sha256:1b31c3754eac3ce44b0003c604a696f110c8df12a085923e4473527f68a35195","sha256:8941e7603ded88e2a48f11c0db496f91924844774fd90e220ada553a645f4562","sha256:d28dfa91356a5e1d66889d231eb2b2f9dbf5b4d5af50236b37798b217bba1eeb"]
      - values: {"S":"140","D":"98"}
        answers: ["sha256:844cc7541d697951913cc402a3d91f5f8d9e4a3ad939f8943e237ffd70ba7c3c","sha256:fda60fb9e7ca8bdbe89ae112f8df0562df26239ff5ceb42db12d572bff09129b","sha256:d046fc7bbec411a63aa97150a988bbe37b282228289e8208a30fdcbd7b70c285"]
  - id: gallinas-y-conejos
    tier: 1
    type: numero
    sig: 10
    prompt: |
      En un corral hay gallinas y conejos. En total hay ${{H}}$ cabezas y ${{P}}$ patas. ¿Cuántos conejos hay?
    variants:
      - values: {"H":35,"P":100}
        answers: ["sha256:e84a27efd0ae4848838d7031efaca9a548832080c857fb58714042cb74acf8f7","sha256:b4cc5b29b70479c2cfb53882c9de04b99add06448be6836649bbcbc1d84f61b0","sha256:2c4091e41c806e7ac979d771c4dba88156402704d56da0dca90a684f2ba8245f"]
      - values: {"H":50,"P":130}
        answers: ["sha256:8916e524d4a9e684f70e7da884cb3c2a89bc562ad26edd883522d15695695dac","sha256:0bb2b8f42e6397e13c3adcb94eebdb8c5356554fe9f6193b6c03858c1076a353","sha256:07f753e3bb9319fd8b22a3d50a190c2db86ad626c8571527d4b4273585a56d48"]
      - values: {"H":24,"P":70}
        answers: ["sha256:67162e62cf891188f36717289dfd4e302833f7e3b741f8d9535c2ed8234006ac","sha256:4c3532e92c2461bd83aa83cd052a8238897a921d3ca1d5f53510af20cf0f8c04","sha256:3ce1dc460da4c5c53a16b209739b1648d916d58dee86c78507b9f46e32c201da"]
      - values: {"H":40,"P":146}
        answers: ["sha256:f55d3c13baf9a83861a6274fdb32b1435146359903c421d7b42055b9c28c9c4a","sha256:50939ad36c59841166af41bb401997bff5b48613fb9d8372bd77b14c53116c2c","sha256:608d6ab0ebd5369bb50df9f1ce5c7887ffb93926b529347a3362b04f86391454"]
      - values: {"H":18,"P":62}
        answers: ["sha256:077addee5de1a5977fb80223aec7fff17a26212f8794892b0b43a1659b63cc30","sha256:45e25883a9733f2d2302272673573580dfaa253914cc88171fb1d79758d8d947","sha256:e024ba2aabf4516eb368cd6dcb08e953c6e2700edafff1abb95857361957e941"]
      - values: {"H":60,"P":190}
        answers: ["sha256:c9cf969d8c05456183a5e0af9c1c913c4f7172532f4f0924b9b16b8835e21d6b","sha256:8449f9a32e79ab3e55412d5310b3bc5fc601214fa4b517e8b65b0f87f3b4d6a2","sha256:d21681db09abf4c428c132030bd3a686ffacc91bac300d1eed9c7f627a7e770a"]
  - id: mezcla-con-sistema
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Se quiere obtener ${{Q}}$ kg de una mezcla a ${{pm}}$ €/kg mezclando un producto de ${{p1}}$ €/kg con otro de ${{p2}}$ €/kg. ¿Cuántos
      kilos del primero hay que poner?
    variants:
      - values: {"p1":"10","p2":"6","Q":50,"pm":"7{,}6"}
        answers: ["sha256:d4b2718b681e63ac39748400b78237063277d8e3393f62bb30b7c73d2ffbde77","sha256:7c7b07b57d0e4e48172144fc68817bf818ff01975b85dd74bef40ff4c64bea82","sha256:865814717dcd07ae4048dee1671da3c01c60faee4f24af0c4f5144be61ec52f7"]
      - values: {"p1":"15","p2":"9","Q":30,"pm":"13"}
        answers: ["sha256:62c8825bbb3ffabce5f68fe2ffacb8c41d3ad3d726198ea612427737b36a03b7","sha256:c72617eef12f7a2c2e082b6906ee21a845d9ca9d4bd0137307c9933b0f3fa0da","sha256:ab14bced1c40a4bad64404cc188235c7483f6bed1efd834cc7d40b1c30e685d2"]
      - values: {"p1":"4","p2":"2{,}5","Q":60,"pm":"3{,}5"}
        answers: ["sha256:7207d082353b6efaef9df21aadc318df98c1d4dc3515ed4f0409c90b0376ff22","sha256:a88927c36eb6edfe7f4d58deb2cc0f3fb567cbe77d1126a641918641aa762efc","sha256:dae83683bd988dec6b478dd04367702e92b528c8729c45f22fce5e334bf5f24b"]
      - values: {"p1":"20","p2":"12","Q":40,"pm":"14"}
        answers: ["sha256:710a24e5c414e13c977659c680d6dc8f40b76b78be0bb80b1bf5c7d42f81d355","sha256:50905adde274cff8fb6b0e8a96ba4a4beb192cef1199b884067f201be38f247b","sha256:d8ec5b3c68010af70fe1d9ceaa7249a9a399f7903a40bfbe45eae227db191c27"]
      - values: {"p1":"8","p2":"5","Q":90,"pm":"7"}
        answers: ["sha256:2034ce9dd8afd8c7761e2131a1546fd91b08676a7f24b819e3cf1820686f6508","sha256:3d8f26e5aa01334d233d858e729266ce4ad29155049f672255097107ee8350ca","sha256:664e412f90439bc5296018168c46aa3d84551c438b51699728afad195bec9eb9"]
      - values: {"p1":"3{,}2","p2":"2","Q":25,"pm":"2{,}48"}
        answers: ["sha256:e9e81d0bbb907f5aadd06c824b1c9331a63b02c10c62365b55e95626c182e2aa","sha256:095ce47020815f739870a2e65ec8d394ab7c3a182a7a85e4cf68db254045f980","sha256:4073088e3253b4cb055bdbb02567898ba4e0c4126de9cb78777d27c64a163224"]
  - id: edades-con-sistema
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Las edades de un padre y su hijo suman hoy ${{S}}$ años. Dentro de ${{t}}$ años, el padre tendrá {{k}} de la edad del hijo. ¿Cuántos
      años tiene hoy el hijo?
    variants:
      - values: {"S":48,"t":6,"k":"el doble"}
        answers: ["sha256:ce7f1499f5dd53e6f240f1265d21159c919a9c1b2fdeefc430002e58582644e9","sha256:e2f62f0d5e3b5ceccd0f647a2d45390e0fefdc3eb480a54a6d602e6e73e7367d","sha256:47dacdb1422ba728ae1235f1010ad8ce7bc3e8c27c9a438c8d141acefa4eaae8"]
      - values: {"S":52,"t":4,"k":"el triple"}
        answers: ["sha256:41b4e28785ca78ff48b8fb750920bcd749def7b3e98ccc19717a1f1f1ae25169","sha256:cbc9c3c00c8b3f2ce11d3f1527522165891f6c56cdc39a29fcbcbca7fa632b49","sha256:f539019633f31a6fef91d0d78659ba25976636e8a0b8f696dc5d8154c4b3535a"]
      - values: {"S":71,"t":5,"k":"el doble"}
        answers: ["sha256:b1c4eebab744d9d9830434161c01ae4399c538ebcebc763c6096ff33503ab8d9","sha256:1552d47f42cebbd375d3f346ded798dde035e5eb44b274cdcae48a862326d709","sha256:cc2940be550ed70cc8921204db1adb108eb64162f65234fa5e09e45b6e2f4d45"]
      - values: {"S":46,"t":10,"k":"el doble"}
        answers: ["sha256:27ec8e9355bfcfc68b8a8da23c743450fbd63e83e3d2fc2401d7e7fafe444f2b","sha256:c68c75e77a48f41946c75129354b426901254f8603b7f66c962329e05e31dfb7","sha256:e6ef2b310f29c98c3b09458322f004e0f6af4332b41f9069c58916c5feed3f43"]
      - values: {"S":56,"t":2,"k":"el cuádruple"}
        answers: ["sha256:80363fd18ff1dfebe94bfa67dd7a0b031cd09aebf8d9f7cf4ace2198a4201c02","sha256:1999d637424cbf89d7f6b3d6d5bf5807e677c1ca589ec4d313693e4dc9943611","sha256:22dba33e512ff7409bae5b974e4dde0073444722f3e1101344bf46b07209865a"]
      - values: {"S":63,"t":7,"k":"dos veces y media"}
        answers: ["sha256:bdc24fc38745eda2d8b5798390fa0232a5a49d0af38f7942218e6c2b331cc32a","sha256:2539825ea50d3924fa781de76a0713d480478f0599f4a5135da0444c3d8d8328","sha256:dcc2e74ef5c7e6d1370d5baa430ae67a6fb637725eeaaa03c81060f538e6a677"]
  - id: numero-de-dos-cifras
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Las cifras de un número de dos cifras suman ${{s}}$. Si se intercambian las cifras, el número aumenta en ${{d}}$. ¿Cuál es el número?
    variants:
      - values: {"s":9,"d":27}
        answers: ["sha256:fc850e0c0967db8dbdc46bc98069d9f374229e35c119476418f6f90cf8457c84","sha256:123608859853f86460ad949badb7c0ff5fc9696dbcebd410cfebf0cc0f2367dd","sha256:c65747dcd0bf1fbe38d8c78e444ff9e7a6c33836e0e8e9e90b940418388703d5"]
      - values: {"s":11,"d":45}
        answers: ["sha256:7cf5d3452ab3bdbab1bf1e98315b432aef3279c172e808ddab824325a5895d4f","sha256:0c872bf402ad80f2133259e057ddbb8d44b6a62107500f10513e9276249e0ab7","sha256:b043a1109f933a57ad39b9214672ad4008e5cbf4b7567efe39377cfe8baa68b9"]
      - values: {"s":7,"d":45}
        answers: ["sha256:3d9cd73c1bcfbc4799e7f5d3f8a5c894d8610179ab90ad1fe4e038518a01c576","sha256:80aa1a6c99397c58bab9924ea600521e52ee468f25140b192c8c63fab0ac64fe","sha256:8f2dd78bbbc97666cb6228374a8826a811798a7a24eec13e56a8505dbb29d231"]
      - values: {"s":13,"d":9}
        answers: ["sha256:0359730b260ae1322b72b13460f096135c97a2a1f3d429389ac7d28dd8e485c6","sha256:8f47e82048ebb039add26462d239c8b3dfaed4dd2904c22531deb73a03382dc3","sha256:ea29f72f17e9b2044b1059de2b77c6d441fb02c394ef61f5c41a001f0cf0fd31"]
      - values: {"s":10,"d":54}
        answers: ["sha256:a3038bbc4cc50b09398e37fd478b35c3f1f2b3bb1a496179bfc02fe135dfbf4b","sha256:ce9b7cd0c958d6d9dc9e12cac76babe57874bba902fb4001ffe4e2e5bd38ca4c","sha256:f2af846c87eabd2051ccfcd1265f3af0e18ddcfc5491884e42de954b63e89df0"]
      - values: {"s":12,"d":36}
        answers: ["sha256:b079c9555e0ad50944792c6bba45342863cf066a6476c5bc0525dd9983e67726","sha256:cd1ef71cf8692d1819e64549a440adc3ade3161dcdcade86235f6a07e2b700f4","sha256:3a5420d2dcae37c35e23bc5bdea5962e376175bbf8bb3de6830635fbd54ec6d2"]
  - id: tres-tipos-graficamente
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Cada ecuación lineal con dos incógnitas se representa como una recta. Explica qué ocurre con las dos rectas en un
      sistema **determinado**, en uno **indeterminado** y en uno **incompatible**, y cómo se reconoce cada caso mirando los coeficientes de
      $ax + by = c$ y $a'x + b'y = c'$. Pon un ejemplo de cada uno.
    sealed: "gz64:H4sIAAAAAAACCoWUz27bMAzGX+WDISCN5wZduz+AgR4KdIedtvuyAyOzgQaZdCW5aBD4gXrubde82CAnTZus3S4CSNPU9/1Ie11E9X1yKkVdnKIsrzlxaJ1Qo2WJk14IucK6zaNMa3iKCGwTRZRlZFgNiaQswYJe0PWStILtVxRhVUPDQg1FRBX4F61m+Gb7EBi2J2kUXnM93zjrWBLHuQANw9wbMMzKoCwlC8p9uqCdButUyHOsYebzm0B2TcOaJgPmc+Fb7HKLYb2YDAYnfNu7O/K5eZsPGFpMcAqaLHZvnJnpDF9+cdt5rWHu8Q4rXOKjqXJwOgbvTYXbnhE5C9yaz9bNyUWF86mZzSVD/CrNIUYnN05corhD2GgE256yCd7TKcvWxZa2gJ/oc0S7+e2T67xmJJ6gKdC0RtLc5phclZUlahdu8yDj07R5yFI0wknDHUuzq3yFZnVM8/KQ5HNsh7WdDOYY2XnG9MFgBXOR408jtvNnMlbbjpJbeM4OxcmyFzrcrCyrLDsK5NlTLEs0LiYniWL9l98tk+zNbh6XI+RXfKHjMG7ZSOcNIBD9r/+D7dozuPIIHNXfcUBkeM9LAoH8UuHaTmP2C6utwpyNS/UmtyzwOfPZzIqqCP0iOFvUP9aFDS5xcFrUxVVU6wgvVg1W5Qnidk13O1qNTl+ts+rEumYLgDPG/YDGsv0YspDx+45FfT5UB1KuCezxlMgjeYnfNdSMYzoeXe4NS00+ov7rgu8qnH8wvIWWbWX941Vjg+S6owY/hz9fqLc93QQAAA=="
  - id: r-es-solucion-sistema
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos pares es solución del sistema $x + y = 5$, $3x - y = 3$?
    options:
      - |
        $(1, 4)$
      - |
        $(2, 3)$
      - |
        $(3, 2)$
      - |
        $(5, 0)$
    answers: ["sha256:0f0d08234b219fe332dceb50ad4f9cb6fe1356b13fa5289d292245cf3517810e"]
  - id: r-reduccion-idea
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué consiste el método de reducción?
    options:
      - |
        Despejar una incógnita y sustituirla en la otra ecuación
      - |
        Despejar la misma incógnita en las dos e igualar
      - |
        Multiplicar las ecuaciones por números para que al sumarlas desaparezca una incógnita
      - |
        Dibujar las rectas
    answers: ["sha256:1e910c8a7f539f50548ea394ba81ff2b0a2dc76caf637fefb9cd8a8fa1f9f012"]
  - id: r-paralelas
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuántas soluciones tiene un sistema cuyas dos rectas son paralelas y distintas?
    options:
      - |
        Ninguna
      - |
        Una
      - |
        Dos
      - |
        Infinitas
    answers: ["sha256:ecbf6a8a32fb2aefcd9ce86e06bf956dc16c16f73e819aecd03d36e418a02c86"]
  - id: r-sustituir-y
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      En el sistema $y = 2x$, $x + y = 6$, ¿cuánto vale $y$?
    answers: ["sha256:7be6d62d724fad86d7cc2e1c1acb9fa731412d04685fcafc6a22c10fa41b7634","sha256:31f78e76d6e1aa85b9dc47ac5f2502b3c7a709acc118d6e1db2bdd788458f086","sha256:02247402de0f38c7a45faeb08b5bf32c19f8851516ee4132e7c6dcd7b7753c66"]
  - id: r-plantear
    tier: 2
    type: opcion
    review: true
    prompt: |
      En un corral hay $30$ animales entre gallinas ($x$) y conejos ($y$) y $80$ patas. ¿Qué sistema lo describe?
    options:
      - |
        $x + y = 30$, $x + y = 80$
      - |
        $x + y = 80$, $2x + 4y = 30$
      - |
        $2x + 2y = 80$, $x + y = 30$
      - |
        $x + y = 30$, $2x + 4y = 80$
    answers: ["sha256:f40e68929ea9535bb016690d422b4b9823df8300227269b6eaa547ba7a5d4bc2"]
  - id: r-cero-igual-cinco
    tier: 2
    type: opcion
    review: true
    prompt: |
      Al resolver un sistema por reducción desaparecen las dos incógnitas y queda $0 = 5$. ¿Qué significa?
    options:
      - |
        Que la solución es $x = 0$
      - |
        Que el sistema es incompatible
      - |
        Que hay infinitas soluciones
      - |
        Que hay un error de cálculo seguro
    answers: ["sha256:bdbedde326cc793613a5d55847d8b7d2b86fbf5b903a3b40e8a97b0d48104b09"]
  - id: r-coeficientes-proporcionales
    tier: 3
    type: opcion
    review: true
    prompt: |
      ¿Cómo es el sistema $2x - y = 3$, $-6x + 3y = -9$?
    options:
      - |
        Determinado
      - |
        Incompatible
      - |
        Indeterminado
      - |
        No se puede saber
    answers: ["sha256:cbd3a298f8e84d5c6986fea526f73f5c8fd557b4702d35fe5715dbf48aa1d409"]
---

# Sistemas de dos ecuaciones lineales con dos incógnitas: sustitución, igualación, reducción, interpretación gráfica y problemas

«En un corral hay $20$ animales entre gallinas y conejos, y en total tienen $56$ patas. ¿Cuántos hay de cada?» Aquí hay **dos** cosas
desconocidas y **dos** informaciones. Se puede plantear con una sola letra, pero es más natural usar dos, $x$ gallinas e $y$ conejos, y
escribir dos ecuaciones: $x + y = 20$ y $2x + 4y = 56$. Eso es un **sistema**. Este nodo enseña los tres métodos clásicos para
resolverlos, qué significan gráficamente, por qué a veces no hay solución o hay infinitas, y cómo plantear problemas con dos
incógnitas.

## Objetivos

Al terminar sabrás:

1. Comprobar si un par de números es solución de un sistema.
2. Resolver sistemas por sustitución, igualación y reducción, y elegir el método más cómodo.
3. Interpretar un sistema como dos rectas y su solución como el punto de corte.
4. Clasificar un sistema (determinado, indeterminado o incompatible) mirando sus coeficientes.
5. Plantear y resolver problemas con dos incógnitas.

## Qué debes dominar antes

[[mat-ecuaciones-primer-grado]] (resolver ecuaciones, despejar, plantear problemas).

> [!question] Test de entrada
> 1. Despeja $y$ en $3x + y = 10$.
> 2. Resuelve $2x + 3(x - 1) = 12$.
> 3. ¿Cuánto vale $2x - y$ para $x = 4$, $y = -1$?
>
> Respuestas: $y = 10 - 3x$; $x = 3$; $9$.

## 1. Para qué sirve

- **Problemas con dos cantidades desconocidas**: precios de dos productos, entradas de dos tipos, mezclas, edades de dos personas.
- **Economía**: el punto de equilibrio entre oferta y demanda, o el momento en que dos tarifas cuestan lo mismo.
- **Ciencias**: dos móviles que se encuentran, mezclas químicas, circuitos con dos corrientes desconocidas ([[ing-electricidad-basica]]).
- **Puerta de entrada** a los sistemas grandes con muchas incógnitas, que se resuelven con las mismas ideas
  (el tema `mat-sistemas-lineales`).

## 2. Qué es un sistema y qué es una solución

> [!practico]
> Una sola ecuación con dos incógnitas, como $x + y = 20$, tiene muchísimas soluciones ($1$ y $19$, $5$ y $15$, $12{,}5$ y $7{,}5$…). La
> segunda información descarta casi todas: de esos pares, solo uno cumple también lo de las patas. El sistema pide las dos cosas
> **a la vez**.

Un **sistema de dos ecuaciones lineales con dos incógnitas** es
$$
\left\{\begin{array}{l} ax + by = c \\ a'x + b'y = c' \end{array}\right.
$$
(«lineal» significa que las incógnitas aparecen con exponente $1$ y sin multiplicarse entre sí). Una **solución** es un par de números
$(x, y)$ que cumple **las dos** ecuaciones. *Ejemplo:* en $x + y = 10$, $x - y = 2$, el par $(6, 4)$ es solución ($6 + 4 = 10$ y $6 - 4 = 2$);
el par $(7, 3)$ cumple la primera pero no la segunda, así que no lo es.

## 3. Los tres métodos

> [!practico]
> Los tres métodos persiguen lo mismo: conseguir una ecuación con **una sola** incógnita, que ya sabes resolver. Cambia solo la
> manera de hacer desaparecer la otra. Ninguno es «el bueno»: se elige el que menos cuentas pida.

Se resuelve el mismo sistema por los tres métodos: $\left\{\begin{array}{l} 2x + 3y = 12 \\ x - y = 1 \end{array}\right.$

**Sustitución.** Se despeja una incógnita en una ecuación y se sustituye en la otra. De la segunda, $x = 1 + y$. En la primera:
$2(1 + y) + 3y = 12$, $5y = 10$, $y = 2$. Y $x = 1 + 2 = 3$. Conviene cuando una incógnita tiene coeficiente $1$ o $-1$.

**Igualación.** Se despeja la **misma** incógnita en las dos ecuaciones y se igualan. $x = \frac{12 - 3y}{2}$ y $x = 1 + y$; entonces
$\frac{12 - 3y}{2} = 1 + y$, $12 - 3y = 2 + 2y$, $y = 2$, $x = 3$. Conviene cuando las dos ya vienen despejadas (por ejemplo, $y = \dots$ en las dos).

**Reducción.** Se multiplican las ecuaciones por números elegidos para que una incógnita tenga coeficientes **opuestos**, y se suman.
Multiplicando la segunda por $3$: $3x - 3y = 3$. Sumándola a la primera: $5x = 15$, $x = 3$; y de $x - y = 1$, $y = 2$. Es el más general
y el que se generaliza a sistemas grandes (método de Gauss).

**Siempre:** comprobar en las **dos** ecuaciones iniciales: $2 \cdot 3 + 3 \cdot 2 = 12$ ✓ y $3 - 2 = 1$ ✓.

## 4. Interpretación gráfica

> [!practico]
> Todos los pares $(x, y)$ que cumplen una ecuación lineal, dibujados en unos ejes, forman una **recta**. La solución del sistema es
> el punto que está en las dos rectas: donde se cruzan. Si dibujas bien las rectas, puedes leer la solución en el papel.

*Ejemplo:* $y = 2x - 1$ e $y = -x + 5$. Igualando, $2x - 1 = -x + 5$, $x = 2$, $y = 3$: las rectas se cortan en el punto $(2, 3)$. Dibujar es
útil para ver la solución aproximada y para entender los casos especiales, pero el cálculo algebraico es el que da el valor exacto
(más sobre rectas en [[mat-funciones-lineales-cuadraticas]]).

## 5. Clasificación: una, ninguna o infinitas soluciones

> [!practico]
> Dos rectas en un plano solo pueden hacer tres cosas: cortarse en un punto, ser paralelas sin tocarse o ser la misma recta.
> Eso da los tres tipos de sistemas.

- **Compatible determinado**: una única solución; las rectas se cortan. Los coeficientes de las incógnitas **no** son proporcionales:
  $\frac{a}{a'} \neq \frac{b}{b'}$.
- **Compatible indeterminado**: infinitas soluciones; las dos ecuaciones son la misma recta (una es múltiplo de la otra):
  $\frac{a}{a'} = \frac{b}{b'} = \frac{c}{c'}$. *Ejemplo:* $3x + 2y = 7$ y $6x + 4y = 14$. Al resolver se llega a $0 = 0$.
- **Incompatible**: ninguna solución; rectas paralelas distintas: $\frac{a}{a'} = \frac{b}{b'} \neq \frac{c}{c'}$. *Ejemplo:* $3x + 2y = 7$ y $6x + 4y = 9$.
  Al resolver se llega a algo imposible, como $0 = -5$.

> [!formal] Con rigor: la fórmula general y cuándo hay solución única
> Si en el sistema se multiplica la primera ecuación por $b'$, la segunda por $b$ y se restan, desaparece $y$:
> $(ab' - a'b)\,x = cb' - c'b$. Del mismo modo $(ab' - a'b)\,y = ac' - a'c$. Por tanto, si $D = ab' - a'b \neq 0$, la solución es única:
> $$
> x = \frac{cb' - c'b}{D}, \qquad y = \frac{ac' - a'c}{D} .
> $$
> Si $D = 0$ (coeficientes proporcionales), las dos igualdades quedan $0 = cb' - c'b$ y $0 = ac' - a'c$: o se cumplen siempre (indeterminado)
> o alguna es falsa (incompatible). Este número $D$ tiene nombre propio y se estudia a fondo en
> [[mat-determinantes]]. $\blacksquare$

## 6. Problemas con sistemas

El método es el de siempre ([[mat-ecuaciones-primer-grado]]), con dos letras: decir qué es $x$ y qué es $y$, buscar **dos** relaciones
independientes en el enunciado, resolver y comprobar en el enunciado.

*Ejemplo resuelto (gallinas y conejos).* Sean $x$ las gallinas e $y$ los conejos. Cabezas: $x + y = 20$. Patas: $2x + 4y = 56$. Por
sustitución, $x = 20 - y$, $2(20 - y) + 4y = 56$, $2y = 16$, $y = 8$, $x = 12$. Comprobación: $12 + 8 = 20$ animales y $24 + 32 = 56$ patas ✓.

**Tipos frecuentes:**

- **Dos tipos de objetos** (entradas, monedas, animales): una ecuación cuenta unidades y la otra cuenta valor (o patas).
- **Mezclas**: una ecuación para la cantidad total y otra para el coste total ([[mat-proporcionalidad]]).
- **Edades**: una ecuación para hoy y otra para dentro de (o hace) unos años; **los dos** suman los mismos años.
- **Cifras de un número**: si las cifras son $a$ (decenas) y $b$ (unidades), el número es $10a + b$ y el invertido $10b + a$.
- **Suma y diferencia**: $x + y = S$, $x - y = D$ dan $x = \frac{S + D}{2}$.

## 7. Errores típicos

- Comprobar la solución en una sola ecuación.
- Al reducir, multiplicar solo un miembro de la ecuación, o solo algunos términos.
- Al sustituir, olvidar el paréntesis: $2(1 + y)$, no $2 \cdot 1 + y$.
- Dar solo el valor de una incógnita.
- Tomar como dos ecuaciones lo que es la misma información dicha dos veces (sale un sistema indeterminado).
- En edades, sumar los años solo a una de las dos personas.

## 8. Resumen

- Solución: par $(x, y)$ que cumple las dos ecuaciones; gráficamente, el corte de dos rectas.
- Sustitución (despejar y sustituir), igualación (despejar lo mismo e igualar), reducción (coeficientes opuestos y sumar).
- Determinado (se cortan, coeficientes no proporcionales), indeterminado (misma recta), incompatible (paralelas).
- Fórmula con $D = ab' - a'b$; si $D \neq 0$, solución única.
- Problemas: dos incógnitas, dos relaciones, comprobación en el enunciado.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué es una solución de un sistema y cómo se comprueba.
2. En qué consisten los tres métodos y cuándo conviene cada uno.
3. Qué significan gráficamente los tres tipos de sistema.
4. Cómo se reconoce un sistema incompatible o indeterminado mirando los coeficientes.
5. Cómo se plantean los problemas de dos tipos de objetos.

## Siguiente

[[mat-ecuaciones-segundo-grado]] (ecuaciones con la incógnita al cuadrado) y, más adelante, el tema `mat-sistemas-lineales` (sistemas de
cualquier tamaño y el método de Gauss).
