---
id: mat-geometria-basica
title: "Geometría básica: figuras, Pitágoras y semejanza"
area: matematicas
trunk_level: 3
prerequisites: [mat-algebra-basica]
academic_sources:
  - "Kiselev, A. P. Kiselev's Geometry, Book I: Planimetry (trad. de A. Givental). Sumizdat, 2006."
  - "Euclides. Elementos, libro I (rectas paralelas, suma de ángulos de un triángulo, teorema de Pitágoras) y libro VI (semejanza y teorema de Tales). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/"
  - "Gelfand, I. M.; Shen, A. Algebra. Birkhäuser, 1993 (uso del álgebra para demostrar propiedades geométricas)."
hints:
  - "Concepto: casi todo se reduce a tres herramientas: la suma de los ángulos de un triángulo (180°), el teorema de Pitágoras y la semejanza (razones de lados iguales). Para contar o medir, divide la figura en triángulos y rectángulos, o completa la figura hasta una más simple y resta."
  - "Herramienta: dibuja siempre la figura y escribe los datos en ella; comprueba cada resultado con una segunda vía (otra fórmula, una descomposición distinta, o coordenadas). En Python, `math.hypot(dx, dy)` da la distancia y `math.pi` el número pi."
  - "Documentación oficial: docs.python.org/3/library/math.html (hypot, sqrt, pi); Kiselev, capítulos sobre triángulos, polígonos y semejanza; Euclides, Elementos I y VI."
exercises:
  - id: angulos-triangulo
    tier: 1
    type: numero
    sig: 6
    prompt: |
      En un triángulo, dos ángulos miden ${{a}}^\circ$ y ${{b}}^\circ$. ¿Cuánto mide el tercero, en grados? Respuesta: un número.
    variants:
      - values: {"a":47,"b":68}
        answers: ["sha256:70db10064eb59d2b6e9d9e6b85a198dbb26c8e00f42372a51805018f92e427df","sha256:5671147c3721529a7d4f37846ba3e5650421873bc7bc12548ad4c1ccd3233c2c","sha256:3535cd14f27f8242e42d53b5a3d5e82674090aac7c16aa26f2f5ea47f1b4798d"]
      - values: {"a":35,"b":95}
        answers: ["sha256:7f1346c1ab7829748bae9a91c3de3632cb5e45621d726521a3d421324fb7f0ab","sha256:c68063eca451558e100aa728dda0e84e33dedbe50d854e6b500756ce9539dd74","sha256:59d949f4f861dfbb5401bfa078557d40e69642aa84ce3fda89bb24f72f38890d"]
      - values: {"a":52,"b":61}
        answers: ["sha256:a0de9291165fea7461156a3dc42ad870283ad499a4ac659382274caab03b692b","sha256:e37c66e7399dcbcac72fec99e0d298d846c69ec515ffc161f3eaee74c3b7ff7e","sha256:d6705ae050cbf1731090ae79bd2f6c67bdac7628dc56c229f6fc096765fb3d8d"]
      - values: {"a":24,"b":112}
        answers: ["sha256:a57ec1b05dc422a63b9a009bb7cd5a9208077fc3a523a2e8590156f0c85169e8","sha256:8cb8f9e9436337bf467d018bc91308d6f3e44ad3d95f6ca12162be2c7db8715d","sha256:e29097ba64fcbbdfd3d708cdf5b5fad4ea9f71c7372f02d6cb7bbd09b184295e"]
      - values: {"a":73,"b":73}
        answers: ["sha256:3ed096a4d2cca4d7fe66fa63cd8f500b86863ceb74aa787100920d21e9093543","sha256:411a0c6b897ec1a4d0c819de95374827aa792141c617baf5626a0d4849e3b6df","sha256:c15130e84238063cb7d53216480e5a2307f4897cba13fd3dcb6716f9b477f278"]
      - values: {"a":29,"b":88}
        answers: ["sha256:0b39abe8b0520df27a4b754a743eb6b76cafa2be39b471ab85e029dfaf18bdeb","sha256:46ac7d03cc76f3ac5509d6db670583a6704d00802c63fc441083dcbb890dae59","sha256:5edc347bcf97ea6efd7cf869364b75cdde541af548c9d3b4f8dda49dc1967aba"]
  - id: hipotenusa
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un triángulo rectángulo tiene catetos de ${{a}}$ y ${{b}}$ cm. ¿Cuánto mide la hipotenusa, en cm? Respuesta: un número.
    variants:
      - values: {"a":9,"b":12}
        answers: ["sha256:451c216fa639c82c296dd2cc23b6f226a20bece35af737db773e67c917f73e32","sha256:a29e2285b3716e2ebd0f66219bc34e8642be3d71edccdc55eb05e5b62a84251e","sha256:3fb89767b0cf3e619365ae80e4e34059ebf20174df766c9643fc832ffccd34e0"]
      - values: {"a":5,"b":12}
        answers: ["sha256:bd55ccd3acf5ae6f7976a21f2e15f047b520e7e295aaea2936fdf1f6e0c47387","sha256:28da8a41e433302530e53d34819f6c47b220511b1cb6906e3af408ded03dc3d5","sha256:aae41d47183595be30573575804607ef2e77e95fc658c772d109f42d7270cff7"]
      - values: {"a":8,"b":15}
        answers: ["sha256:14325b3d89b1e8fd637ac7b4a8aa64587a6724b97057458cb9ca8259930bb1a6","sha256:149fdad0714c0cbaa79aa1d767957a57e7a70474c05726b58573c6c4c2c76ded","sha256:242370e86ef0d70c73d79c1e1eebd95450ba4af714bc4cd4fa675583099a6d68"]
      - values: {"a":7,"b":24}
        answers: ["sha256:80bbd6d4548ad351f9f5f3311aa1cd0036bb6c4ede52e3205b666c9fc21b6d3b","sha256:87f2f1122a738c7479e0f564ac1ff862447874c3168c683f386cf973b984ebf7","sha256:fc8ee92009de2b33258205d8355f4fb5b3cc43a1fd119195c2f2e68cd66cbdea"]
      - values: {"a":20,"b":21}
        answers: ["sha256:e028739eca33ab31f35adc1038cd193222c1d9bb325cba4a7537e9978ce29e45","sha256:f6b1d243e0c0a10b68ebafa451bc992add081c1d7a64cbc21a71f856942965ec","sha256:0dd8c72577560f2d28690a8817744f39065b32a46af24f379394f8b4634ccd59"]
      - values: {"a":12,"b":35}
        answers: ["sha256:af5878485718dfb3ec9f1aa9ce3f8ca10608e0b5ead2e1ed7c363462f8e671d2","sha256:e98114744edce0d040142d0d7595888d9898b099ed6cb881052fbe4ec8bb96db","sha256:dd5b3aeb533bc7a805b8e6bf2e99d5564acefdbe853469aa52b166f285f52540"]
  - id: area-trapecio
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un trapecio tiene bases de ${{b}}$ y ${{B}}$ cm y altura ${{h}}$ cm. ¿Cuál es su área, en cm$^2$? Respuesta: un número.
    variants:
      - values: {"b":8,"B":14,"h":"5"}
        answers: ["sha256:c2944c4417d4a1824fe50a9790b9c89c3ec6928bd4ac8b43e24814a1fc5a7ae2","sha256:e90533b827923cf3c6aab4c2a72f367f86cdc3a07bd88daf22bca9b39274c85f","sha256:6be76c4f4a2b44f82e28454839e13bd3159c6437fa7e7d0dc15f6e5bd645b947"]
      - values: {"b":6,"B":10,"h":"7"}
        answers: ["sha256:9c0cd217b774a9455350df24a1196e173eb228c7f1f30c270893e3ded8fb5ffd","sha256:e638ac07e16c2ee4e45ac07f28c6b96960d7e8d87cb88a053ae3ea1aec963aac","sha256:b0e71dd87c1de2daa31f73befe27ba8623faadc2fbf60cf244b9b44174946c98"]
      - values: {"b":12,"B":20,"h":"4{,}5"}
        answers: ["sha256:2b255d967b4f994245dd17826087162f49136134465c00a2c37299fce1de6938","sha256:2d286ffd9e6b353a313026b014ad9b2ecea9160f8517c0fe2bfb09a84886b18d","sha256:4c40cf08c9b85eaadf081c304d41959778a6d3a6900e2fb2212b345bd82983c8"]
      - values: {"b":5,"B":9,"h":"6"}
        answers: ["sha256:d3dc6527b193be0fcf9f64b895d02577b76a0f17fce9b730c02b17c7a162d980","sha256:4f5a0f741c7f705213c49c7d0a3c68a8d22c317ab803104109c09bddf77b1a1d","sha256:445922c90394203ae728d533e2c2032f0941845da03115bfa45864aff1e5d78a"]
      - values: {"b":15,"B":25,"h":"8"}
        answers: ["sha256:303eb4d7698389b0d14acc93dcf9cef1a8185d8c350d31e4d63f2435a1abfe77","sha256:4069d53d06034a789264cfe00b823cc48ed8422752296c77e08294e4b6503737","sha256:559c358b93355caf647f537fa9403bb9ee66bc824740968230a677e8dacf273d"]
      - values: {"b":3,"B":11,"h":"9"}
        answers: ["sha256:7347a266f032c4f06c48aa36249f3ab8bec25b9d4eec7615421c6fdade2f0901","sha256:2099acb48c30cf588ca99119cc8eb92b214c9b5b1a7d2484a73815d423ad8237","sha256:2b156243a4c01dc647e4e5a81c10fc1e63978277ae04db53d94c9ad5180f92c8"]
  - id: lados-por-angulos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La suma de los ángulos interiores de un polígono convexo es ${{S}}^\circ$. ¿Cuántos lados tiene? Respuesta: un entero.
    variants:
      - values: {"S":1980}
        answers: ["sha256:67f36af1bad9bd0eaf892442cc21c188cb7236c495b23cb2d42d6f10422b904a","sha256:76da3ffd6da77020fe78937a27ce4cd88a14ddaa45737e82b420c2bd501684a9","sha256:f6affde45db7344bec18f232b97f14fe90a65b09f02dd01e0e8f0b5bcebb863f"]
      - values: {"S":1260}
        answers: ["sha256:9107d2163599e86956f0374559ff48de919dbf0207c88f4d0aa5f6e2d7c21d50","sha256:bc3ea5dd2539794ffdf641013c69cd94be82af9147f8400164a2fcc3284a43cb","sha256:13d208daa46894c453b0f199faf2ec5fb3065c8477bba2af5b2f2def9757a4d1"]
      - values: {"S":2700}
        answers: ["sha256:e5be1de7ef0ca656168bf8c1fc3401580db8e85fd858c17d5d6b5d91ecb05a91","sha256:b1756566fe6283b6db48c659c228c0fc59c25faa7c35d4719966ac3646b584b4","sha256:231e206b7f56556e7b85341a59302c571511fe12cbc6e44ce7a4c5f636968ee8"]
      - values: {"S":1620}
        answers: ["sha256:cea862bf039386e46bf7254f90ca3484639d0595c031df92c3c795393255893b","sha256:d4bb81130eeddc337ed8fba924751a98b44106d0c5ebc6d0d48a14c44151c610","sha256:d69c708a6e459d2b6f50ee76c95a2c249ed4ba4171b6adc10a64c6b1b413494e"]
      - values: {"S":3240}
        answers: ["sha256:f074d5683fb392c04d77c084a945764edbfa54cb9e6c4703938e44d6e67a5abb","sha256:0043569ddcb964ca0400ac0f5255c9fe68c1bca8affc23cd728afce610b7039d","sha256:20700bc5c1b60d29f7db133cba22e5d77c57ab3c1158c7406516b9df4c36c056"]
      - values: {"S":900}
        answers: ["sha256:80f066ec30a3384c1e1895fe99c31f59c728529490d524f4b1fcdb7ef14edbd5","sha256:e06c8c650d1f21ffd597154a03e97bebbe0a13d2e74d5f881104ca4c6142c076","sha256:5c1cd35ec102ee2576df7c5df6a85a621e14aae11f7cc7cc80263d0521b1bc31"]
  - id: diagonales
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuántas diagonales tiene un polígono convexo de ${{n}}$ lados? Respuesta: un entero.
    variants:
      - values: {"n":20}
        answers: ["sha256:c375187852ca284fba53bcc658426d2e889adcb6208a29106f6ffdf540bd1b46","sha256:e7de46a265939546411a80cde5864132f711c7e88fd3414cb0e3eb3ae6d391cc","sha256:ff5289f0ec53b40f4a4811e1ef0bf6016c90740b32f1e1acb093745d7687b644"]
      - values: {"n":15}
        answers: ["sha256:e74bb702839165768cc22fef2cd6af457c5f6cce64696426064b4babcb8291c1","sha256:040ad7133ceb4b3dcfd772168b3398962082155e7db0da95b1cb6203cc952945","sha256:a2654606e9d73362ee2981c4bb02f571822b9632620af9574e59090d9645160e"]
      - values: {"n":12}
        answers: ["sha256:f527a13bb57f1cc536c363e01174803f342403d71fe258420d51c6a1c4042b0d","sha256:816ce902f64e772b73f7b1f38fed4c7835dd0e89883d43f72914ddea4f448a73","sha256:3dbbe982a98878a30816719f8f7a747d96ac7289972c4a952b97bdbb4ad4d1ce"]
      - values: {"n":25}
        answers: ["sha256:1a4a1156987d8776159982a7dbc410334d64a3ac350440c7873351a03d8cac43","sha256:f9db51b49cb3f3f575840cbe36cb0d5ca1a549a4240754d9026cb4fe216c45be","sha256:d85032a2b49f7900357cc9fd59137f92a612b4249f3eae82f632db6d36312c48"]
      - values: {"n":30}
        answers: ["sha256:372885b65aa71019ee76020ada1f6247672f76ed00d0bea0ac375d2f8c8f1a66","sha256:3d8c3b3c1a747ef88d02196aaf3d1b018c8ed9ff98ddbdf529e4ad41b2b16785","sha256:b0cfd54667030a0cd067b68e7312d92685c288159b853991d54483e05cefcfed"]
      - values: {"n":9}
        answers: ["sha256:047ec4d84e2c14e5eb4b8f76f16c89bdbebf18f00cc4b48dd540d0886f6e3730","sha256:4386df764a5c8bcda8ed5cfdbbe0aab14c33e7a374782e7ad9b660640926ff47","sha256:d54659d2290ffc79dc762c31d2dd5b0e28bfafdacb11fe12ffcb8c296b41cb2f"]
  - id: altura-arbol
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una persona de ${{h}}$ m proyecta una sombra de ${{s}}$ m en el mismo momento en que un árbol proyecta una sombra de
      ${{S}}$ m. ¿Qué altura tiene el árbol, en metros? Respuesta: un número.
    variants:
      - values: {"h":"1{,}8","s":"2{,}4","S":"12"}
        answers: ["sha256:78f427d98676fb3e73bb4cdb43235ea4d813a28bc83d97c3f207ca2eac6a6afa","sha256:d96deccf636a406714d2d77fc5d506da287394b781ec68aa81d6febb2fe8fb90","sha256:7560410e041af9844224b9f87843b43bd6b129d519347038ca0cce4104f57d94"]
      - values: {"h":"1{,}5","s":"2","S":"18"}
        answers: ["sha256:99101d11a9445b5c12b76b6dc9790ad1efbb07a2dcfd17b23e80bef6cfb76bbc","sha256:603c166a0707361cb5e78213261823b49c6ab309735278687dc39b92639786f6","sha256:0b55c9f7a66ab4924119b5e49d1749e5e297c0a8eb8cce9a1982e3236dd2d8dc"]
      - values: {"h":"1{,}7","s":"0{,}85","S":"6"}
        answers: ["sha256:6decde37bf8726209fbd472757040c61bbe5b0c3707406ee546e1c022d659548","sha256:f1203ae963512b78005fd60361fbe6218df6817455ebc094f6a2ad88bea9980b","sha256:6066313cfb7f9e4977b2320f07b23407621a380466e5d78bd261e2be47776b9e"]
      - values: {"h":"1{,}6","s":"1{,}2","S":"9"}
        answers: ["sha256:41849dcce0cf2d6b0da672b89f8ce72fb7594dcb4627ddb758fbc147c2ed40c4","sha256:e88001d40027f46d613d00d040ef62a62f4121d2bb8821cadb1d1d8f0cce2668","sha256:d6ae88287237df51e6cb8551bc8e17f4e7e4bb59a408232d0ac458e03d23866a"]
      - values: {"h":"2","s":"2{,}5","S":"15"}
        answers: ["sha256:a9d55622f9015d518d349c4ed5c9c3cc37ee7533c0e39cae6e5c8ea68ee498a6","sha256:e3ab28ec3b3467f8f94e77acb5f7582ae01d64d32d517ce1b99c5ebf37a92a7f","sha256:31017ef72730f80d07f7c71a3591e02a2c2be40b4dca714694efec7bc53912a2"]
      - values: {"h":"1{,}75","s":"1{,}4","S":"10"}
        answers: ["sha256:e74c4c787332e604649ad61062846742b0fbc075e2ba479513a5bb176f157a14","sha256:8730b99de6ce91deb94f191d41a2d74a4f0a606c42c30b77e3b2b14fd4491ba8","sha256:ac5f61dc21b0844af5c5908577173be06c636b852abf8206e76fdd037a294b1c"]
  - id: volumen-cilindro
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un cilindro tiene radio ${{r}}$ cm y altura ${{h}}$ cm. Su volumen es $V = k\pi$ cm$^3$. ¿Cuánto vale $k$? Respuesta: un entero.
    variants:
      - values: {"r":5,"h":11}
        answers: ["sha256:f2697243cd1244d73cd3b00b828279df29e1b12ea4b2d0fd4d0f5c6b214b8027","sha256:99074f43c57bfb72ddab8225be55cc7f9fc98427f454bd38fccf3f496f4a3f84","sha256:15259ad750b95c3d7f8bcc0c6792282aa3bd8f3c24c652071208eb2ecba88aca"]
      - values: {"r":3,"h":10}
        answers: ["sha256:ddda1e964ed4e455eac4ba67fb6ed7ba2a8c04ff80f3ba9e102d877bb4e9cd36","sha256:af9101a23802d0d73734b1f54a0c44eff09fe11f165a51ecfff3e580f981e191","sha256:d4b2ab394f83e062979aae75e8d98a7a11437cafe8247ee79d3817f454e84513"]
      - values: {"r":4,"h":7}
        answers: ["sha256:1625bf119a0359f3fa2e9b8040eaa331011917838118ab221764ed48851ac7f9","sha256:eba25b021d7e1bddf76bb97c74b7a80f12c7bb3b980738931ceb9fb44b196e44","sha256:70c252c44424da67203597ab65ad6e2b9c5ea1d3e971d761b25e61f305d9f51e"]
      - values: {"r":6,"h":6}
        answers: ["sha256:9ba67ad1b11f2b8da6b2e0d0d232b3cd21ef9e34afe1c648b01a302e59d09162","sha256:3e68ee3150811b5c2fe122872b74f5c1d8ce52eb0f15dfb46d6cff97f88ab020","sha256:8e75909b208fa0036ff35edac370e1fa2723b509a1a264f91642e81e1717f852"]
      - values: {"r":2,"h":15}
        answers: ["sha256:87256e66a32245434dbcfb6f7d27b820288d18199c07cbb771341815c972ad97","sha256:e5e2c7100257df8b8c6a8248f7574c57b0363e602f965f5d92b0d92dba14e6bf","sha256:9f73f38b9086e3fb4d03ce8b42892bf09c4e633a4e9dcf4043da008208dba6be"]
      - values: {"r":7,"h":4}
        answers: ["sha256:660248a50af9ea8d06b731f72d4a3bdb6be96c98698408907ef9615839666767","sha256:d3d312bc27239a6de967ee6ba393fefa05e1f87f9bb3a897b8b4065562781d29","sha256:b07e9fa549678f99aa67c6e639d01fbb79979a651f906d0094992ad5472d4cb9"]
  - id: distancia-puntos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la distancia entre los puntos $({{a}}, {{b}})$ y $({{c}}, {{d}})$? Respuesta: un número (si no es exacto, con
      tres cifras significativas).
    variants:
      - values: {"a":"-3","b":"2","c":"5","d":"-4"}
        answers: ["sha256:d3a498d44c6f1050dbb2f94ea699e66c155c5f89847098ad9068b22f4a5903b8","sha256:1f22e3e17f7f695eebb187afc97ebc9df2ba7a19a583d9c154df780a9cf99e98","sha256:c61ccf0853b82d3e88a95d2d5b0578e389e50b845a841938e0b5abc211676976"]
      - values: {"a":"1","b":"-1","c":"4","d":"3"}
        answers: ["sha256:a9d714bfe80b9323e8554d126cf99d79d447898b135c14fbcadf7f557dd2fe19","sha256:515ac63fb222f7c5cdaa486105abe097ea57a36cf1bae26fba5e71008d70e5a5","sha256:31fb7e44b3ef7b5d7bf2aed78f093867507d12aba7c81aa0c8b11c4ab6093bfd"]
      - values: {"a":"-2","b":"-5","c":"3","d":"7"}
        answers: ["sha256:1c78d38e77f989cdb4d2b037a4c9f726b7e27ea914b6f92ce7dbde4fb03da337","sha256:44ff03e256983da855c5611efd30d63b90e6a7de804df5fd8d77cc9967a8876b","sha256:655899efe6604a10e11437028fbc45f1653d110217f4cc344fce3f3362c47a35"]
      - values: {"a":"0","b":"6","c":"8","d":"0"}
        answers: ["sha256:4e8ac5310d0208b5915605dee9a221cd1ea2bb3e14b527eb83e632a74d0e65f4","sha256:2700805e32183396aee51b4362f509ed082eced48d0f9463a74adfa5426d58c3","sha256:3cba3f53354b8c9ce004bc1b60ed88e83e9abd63739a1d0538708b5be5fa509c"]
      - values: {"a":"-4","b":"1","c":"2","d":"9"}
        answers: ["sha256:6b8a65c22beacece87f0edeec8ab5860966bed652937ceaf9949aaded21b9f76","sha256:e659a32c90cc2d63bea2a3687d7a2515692443646c87793e149ae87a258d788a","sha256:355308b80a755ba00cfd965411d1c73a4bf76bedc7ff7152bb31a6281ec2011f"]
      - values: {"a":"3","b":"-2","c":"-6","d":"10"}
        answers: ["sha256:39b1a41055768e05c67d11705faa5dfa14c613b96f974e41e0fa556d71579407","sha256:981b850034030326f306f70eba93b09b397af30b114a514d1bf65ad0d2bd4596","sha256:eafe14e7695c574cc6803c016f2e9b34ab50c4e4b943bb7234f928e14c965c75"]
  - id: area-heron
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un triángulo tiene lados de ${{a}}$, ${{b}}$ y ${{c}}$ cm. ¿Cuál es su área, en cm$^2$? Respuesta: un número.
    variants:
      - values: {"a":5,"b":5,"c":6}
        answers: ["sha256:7218378f9eae6995755c79ef16a768cef2e9c22b30ccb8186135d1e09b600c98","sha256:f62c3820fc1096a39887651e134036c87e15b51a800f82260d0dabbe804b9df4","sha256:882a0cbf636243eba03ede317862597c304d8f637f8ad07520ef2795d75d6e27"]
      - values: {"a":5,"b":5,"c":8}
        answers: ["sha256:50187d4e0d9f7d28a82e5fc8e0638c83899ae8ed023e7cc5ad76119db23558d6","sha256:452465819c529950f200cda585ddfd7f0f6e71f81502064a86a25ece0a0a21d2","sha256:3d75b21330cbfbfdcb6fe8bbc737d7fc01941ff249e8d4b60f304cbe7bc798f2"]
      - values: {"a":10,"b":13,"c":13}
        answers: ["sha256:162ccced801bcf48100eae6260d1590e908707f09408cc2421695f4e422360bd","sha256:2b699f436d36074579df89539d8edfb76548064dc17875664caeb51970d04df8","sha256:4a1d4b1f2553f1fef8d4ff4933792e2ad4b3c86f833e9284171a978240d4df6c"]
      - values: {"a":9,"b":10,"c":17}
        answers: ["sha256:29904befc493efa2e4104275a841b324bf6fb269be5bf6a38ce26e67fc09fee6","sha256:051d28ccb2a0800b62ab33e67728178e71c36d271526a5a3bfb26118826c7003","sha256:cc9f9e81fc194ecdc954aeead472b3c0e368f6d98e57243ae11ff62260f22088"]
      - values: {"a":7,"b":15,"c":20}
        answers: ["sha256:241e852513e6515f314e321f2a29aab110d250f6a2dcd3b2ddf57fda5755c8d4","sha256:db07fc048c44d2479eb78cadbbbb5f58d84ec9444cd3484c0fa77b07214aec05","sha256:8103f8fea5921f055e0e191d0d76483e90fcf20c7022f4fc5ca4d0852d22aa22"]
      - values: {"a":13,"b":20,"c":21}
        answers: ["sha256:52e7e68d0c96d0daf5daaea73c5d5b60607397fd77242138caf4d1fe97f27793","sha256:8326857b9fc6f582ff3cb62b6b9ecd9ee60716bca7037e499ca77f14e0c733ec","sha256:c65098516d4647b5ff8190f55ccd6540820ea5b584acc40959f3bee29fa1cb4f"]
      - values: {"a":11,"b":13,"c":20}
        answers: ["sha256:842e09dd57a222208f39e61735189be26dd42ae40f1a02231536d322497896f9","sha256:3337c2af1bf0d8e798c8a550b65da50ebcff302d92d5974404afb4fb1773580d","sha256:d3cb05d39063c1d57fa12957cafee761105fa67d631cab4c5fc42fe17bc8bedf"]
  - id: volumen-semejantes
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos conos son semejantes con razón de semejanza ${{p}} : {{q}}$. El menor tiene un volumen de ${{V}}$ cm$^3$. ¿Cuál es el
      volumen del mayor, en cm$^3$? Respuesta: un número.
    variants:
      - values: {"p":3,"q":5,"V":54}
        answers: ["sha256:5b9de5ed308dd673f1f4efa75144a8f40ca877e964c72bbe7f2fcf58dde37906","sha256:38c6d1920b11be40c0e59b77d504f41c26e9b511266b865c5183537d2b18e8e1","sha256:02b851201526135abb8f62cac46442e686c70b0121c19280132f4712934ec81e"]
      - values: {"p":2,"q":3,"V":56}
        answers: ["sha256:ea115bcc1d0db74e1891886b9f63461bea064e51254f23150c39ae4cef5576a3","sha256:36a8fa68c60de5ebe59399dda210bd5cece74338b9fabf9c0e89a99f56d0c084","sha256:bc891bf9fa35979690f0b8cf6dd44ce06347f2d874aa9281d0581d3b3e1eb30e"]
      - values: {"p":1,"q":2,"V":13}
        answers: ["sha256:48202456bdf4c0e67cdda833f5d45f8266a97e73d77680773946367f9c61d804","sha256:31513c2abed864c7dafd89e7d8d147b6e82661761f7fd95e2dc7d966cf9b3bfa","sha256:168a6ba4d2e8fa2e72ee84adba7532d12519d44375424d1adda55c0285d77258"]
      - values: {"p":3,"q":4,"V":108}
        answers: ["sha256:c74d5b219f51ee160e98ec31435f7a12c5ff34c0d44cae67d8828c66c923e14f","sha256:edcac6eed66485dde42daea9abfe4115b19cc182c096ddf08c333d198eab0945","sha256:97e216e40c3659703c4400b7d536f74c8c39d02049804acdaa9c377cab043281"]
      - values: {"p":5,"q":6,"V":250}
        answers: ["sha256:5b27059597f2f346cc315543dd94bbde2d0f2ee9171868bfcad1f3dc8bc6e207","sha256:a2448a85ece60976e2ac72753ae0eae09abbdd75f0211c9723fe6d460befb891","sha256:fb5466adc25b8610b0b4f4764b2149bd5b3c98f3b69a09bea41fc500d928309d"]
      - values: {"p":2,"q":5,"V":24}
        answers: ["sha256:9b1cb8cd55bd655df7bdc07220f667ac0b371b6597a70adde7da01f10f02f64b","sha256:2202372e8772df56b96965c46ada6ee1ea8773e3eba0ca3cb509dcbec92f09eb","sha256:54b8c553965a1e27067fb312f5d64721c15896c7326e4f8d34906acbf1698ad0"]
  - id: vueltas-rueda
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una rueda de bicicleta tiene un radio de ${{r}}$ m. ¿Cuántas vueltas **completas** da al recorrer $1$ km sin deslizar?
      Respuesta: un entero.
    variants:
      - values: {"r":"0{,}35"}
        answers: ["sha256:37cd39cc3a296f19463d460e5a2cb8f29cd9439832313ee0f7626338d06bf018","sha256:f2b4b6f2990a32978bf0c3514af428a31a2caf31ba65264dbe7d67d28260923b","sha256:858a385ca85095e5a506cfecddb824789d673b344f9635bc05e5d2f0f0d03814"]
      - values: {"r":"0{,}3"}
        answers: ["sha256:eb346a7b30086fe389904917d39c6b0aa8151f2c8e774f6ed9fbee37487f721d","sha256:901a1f0533c9bf574e6a7fb64b15ef2f99a74ee184cd655bbb3937848f04eab7","sha256:912e8af401648e71fb133550534d65f212e2ffd68b691179daa0945159216ad3"]
      - values: {"r":"0{,}33"}
        answers: ["sha256:f73a0a3a04ca8859533c8bf8653a61526004cbb94b47c6a8a2eb8fb346794855","sha256:da26cadeb33a1d008fe2816120634e0d0cfc9579b6c348780ea74fac543e6c04","sha256:620d4c47c9f302e35b72f9da742982b82ccb65918af35c6758b3b537c33071df"]
      - values: {"r":"0{,}31"}
        answers: ["sha256:8385e84cbc2d7b1ca5f741b2eeb4108cb63bba86b9561d426f9cd51efb34f5fc","sha256:b67a5e4962ae56bb166a5cebfa5d833a35b2e8a370dbf2a080c5463a5fad1f26","sha256:5ba37fe4ba4a93bac1acfaf4485839ef0e1b33e3aa91b6649fc57b21c863c9ac"]
      - values: {"r":"0{,}36"}
        answers: ["sha256:2a1893abbc64f78de8dd998587b6299cb9537792cbdcebce9e7291e456e93188","sha256:9cbb64408e33ed7b626e284d4e74b9dae1c59d1189a43782e06e22cb9bc695bf","sha256:30844c8de333dde0748782649752679a01ba0ce8d2797c3fbec0316aa15968f4"]
      - values: {"r":"0{,}25"}
        answers: ["sha256:6dff6504f873058e7333acbefa542c422ec7179098da82eb0f09be32c1e32216","sha256:d84e4b031fda739cf204813af1188f31a3ad7cd77a80252cac1f621c6c9b68fc","sha256:2daf12e8a0cda24a79b27332b030aaa9b2cf01bf9225c03cfeda82954b4d2610"]
  - id: ternas-pitagoricas
    tier: 3
    prompt: |
      ¿Cuántos triángulos rectángulos con **todos sus lados enteros** tienen catetos $a < b \le 50$? (Cada par $(a, b)$ cuenta una vez.)
      Respuesta: un entero.
    answers: ["sha256:5f9c4ab08cac7457e9111a30e4664920607ea2c115a1433d7be98e97e64244ca"]
  - id: escalera
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una escalera de ${{L}}$ m de largo se apoya en una pared vertical con el pie a ${{d}}$ m de ella. ¿A qué altura de la
      pared llega su extremo superior, en metros? Respuesta: un número.
    variants:
      - values: {"L":"6{,}5","d":"2{,}5"}
        answers: ["sha256:f690a7ea848ccfb950c1182d67c82e22bf37f441bb6e6ad1a7d47286534c3eb2","sha256:363428a5c7699d66700e0f035889bea6dcf7da33b2de7fea80a0d0161ecbb35d","sha256:9add300f0dac95a4c2c4242a4c07e979980b67abe4f37dbb0a6402da30151ff4"]
      - values: {"L":"2{,}5","d":"0{,}7"}
        answers: ["sha256:ca8be3c998c49b220ecd5ef16c016b7629c8ce4f476d218d1207c40643905ad4","sha256:f17c21415312a2513e4a6cd286791777e8da94b585552f0997ac144f70f4207d","sha256:38e4de70914ba23621e50eeca98fb48b0d61c97c9e57fb7de1b0ba112b078723"]
      - values: {"L":"10","d":"6"}
        answers: ["sha256:7bd83c02b8e2a1cd5be17e9bc86e71ec712ddcaed56bda13b03692c01c17ff2e","sha256:60ff9526102491e636e193af46b200cb4f6b4129d5cb209f803544ed0954ca7d","sha256:0954f8737dc284236cce11c746209981cea2b54542ac604370c645a8ca84171c"]
      - values: {"L":"3{,}4","d":"1{,}6"}
        answers: ["sha256:44ab2a486851f0df737c7b3d7ca8d3d246b987d390260df0ee4a3b94776adaa7","sha256:a6620d87e2d41fe716bf90b8f1be9e8ab36082c7c353e0dcf54362d7316f7566","sha256:b195ff68d33ec4ae99c5bb7f2ba45d66a458bd8a835e09dbb9e904f766f7ecca"]
      - values: {"L":"6{,}1","d":"1{,}1"}
        answers: ["sha256:336fd643cab95c3a4ae8757b6f672ad3435556d601e537b7f378313833c098ff","sha256:d187a7f56b6b79ca9aeaa3ff6fdb041c2a1e206854fbd5931eacfd2d003af002","sha256:9e9df91f4d6ee76d4da2c72df0455d2ccae52133c7dd341bed6d98cd8a78b03c"]
      - values: {"L":"8{,}5","d":"4"}
        answers: ["sha256:8583a78cecb710b593853f9af14491652b853a2fc7403491e0e3bd48d32462d1","sha256:66e83c0d39af8b1cb0daee35c18f64ac54fe8a948b1ce8416216b790c1a4bf8c","sha256:73e5f7bcdb137df2d61e095b22d0b0908eea4b60bff6e3061172e35adc653700"]
  - id: diagonal-ortoedro
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un ortoedro (caja) mide ${{a}} \times {{b}} \times {{c}}$ cm. ¿Cuánto mide su diagonal espacial (de una esquina a la opuesta),
      en cm? Respuesta: un número.
    variants:
      - values: {"a":2,"b":3,"c":6}
        answers: ["sha256:ac5f9fb7a94649f80903990a4dad9a88f15ab208c06783d72087f18d4e342367","sha256:d52658c5c39e8a7e38916d7f309ab7d19aa25135fa16c94073684585626ca2e7","sha256:ec2d0dd21756c62a9b85f997245814d10db51331a6db22540060cdb998574c72"]
      - values: {"a":1,"b":4,"c":8}
        answers: ["sha256:8f20113c26a758020ac00e04ac4f9c3616dbf289b86d29fc029e7cd9b93d3c1b","sha256:a065f1a16e70575f1380d9f26c6f063f81d6c7a8262774bb34d9f29768524a4d","sha256:1545b3720a1ac5548759d030a63c5a56e4b4f0b4f2f985f8f9e7eaa40b2d4a8b"]
      - values: {"a":2,"b":6,"c":9}
        answers: ["sha256:79e24b42b84b5c52858b9bdcaa8f29677c87038c616b2de4b86a53014c2d95b6","sha256:488a32a511cf1498d6510427da8257e025d84677faef8df5a189da1a639fc9b3","sha256:1a7815d9c5ef69371a814b5db9ed81b318efd486194c53a0977dea4bac045e65"]
      - values: {"a":4,"b":4,"c":7}
        answers: ["sha256:25f3c148c47ee28a4d579f762858cb32c039bca69258135cfa2309ad58ad487a","sha256:d5009445aebb0fc48ec7a4d833b61af4942d3e502bdc68aa8ce262be912b3cb5","sha256:383608dc6132fde2d648887872dd0647cba21a671e000c5281e82935ac6e501b"]
      - values: {"a":6,"b":6,"c":7}
        answers: ["sha256:d88b565a3c5b319eb0485760bb1ff478b5a8c6576f6cf79b76a84187be703736","sha256:da27c4cb1159a2e7af5ea976a2b3000c9df33b4b1c150846a9fc8d537fde7161","sha256:2146f46afb68b5ee138dddd1601631fa3fcae5086999ab8cfcbe9471711064ac"]
      - values: {"a":2,"b":10,"c":11}
        answers: ["sha256:da741ed0d8ec097c9dc8be4c3e931e2ee1e7ebf7c1110f0d74f698792c5d4118","sha256:6bea2ef205ccee184363799dfdb563218031acd1836c82bba04add8b001d75a8","sha256:2e8e27f0bd6cf4eb443e5991c460c08c447f8981be209b692dd0023de6a8cf26"]
      - values: {"a":4,"b":8,"c":8}
        answers: ["sha256:c122b44a73ac18c8beaae69bdb4e5fb5162bb528f20495ffc987f0b50e220a73","sha256:37878537eacbd447b59a6003d322b2c61c5696d8dfef3e79f1cf577a30cff5e6","sha256:1df9a70c651f2485bdb7dd650e67422cb8c2f3340c5bf1cea2a66c93f8441007"]
  - id: area-hexagono
    tier: 3
    type: numero
    sig: 6
    prompt: |
      El área de un hexágono regular de lado ${{l}}$ cm es $k\sqrt{3}$ cm$^2$. ¿Cuánto vale $k$? Respuesta: un número.
    variants:
      - values: {"l":4}
        answers: ["sha256:1f395ff5f958252e1a8df6e7680004a907ce5b71b77f1c28c7475ca8b7dfbaa0","sha256:f222819705d9f4d2dd8c25d23e3768b7d72ba39eda0db4fe7dc5cb78c2b874b5","sha256:8e1d9359dce16c1f65aca0aee8ae50d3ca7acdfeef13d0cb3c95e6a0570d52a4"]
      - values: {"l":2}
        answers: ["sha256:1bfaf5b6344de7fe90c6a5cce7d35191b44d90e04c6e7201a9e9962cde12af57","sha256:efefcc3a2747ea904ac71f98055b8915a57eb4a8bc3a583a4d251d43290c0430","sha256:aa85ea56a37febb2bb919a3b3ce80e61f813b2665866aa8706f72c4ef515cb63"]
      - values: {"l":6}
        answers: ["sha256:d717fb45039102da8534f5f38f206e127697c46405373592e32c7905cf8cb408","sha256:2c61d09216f0448ac2d90691d4d640f1e5f9728ddaef45e0699772d83e8bec51","sha256:8156cd403fd89c59fe9c1e9628d68fbd8c61129694f6c874cd28848440277e63"]
      - values: {"l":8}
        answers: ["sha256:b60022f5bc3ce17376a72510f3513e845e2d85481cb5ab4971aa802087537cb7","sha256:50d253e50ddad350fb2fe85e7f84f2d6ea286e19a30d2b1f355a691c680bcdc4","sha256:4f6d614b15467976efadbd06014a85e1147fb29fab47eaceb340f2d1c5d685c4"]
      - values: {"l":10}
        answers: ["sha256:00e907218c2bddda83b0e59dbd5bbe9e4944c30221103cec7b2275f4ea44913b","sha256:3ba67b1e899ab970e18be490692f0a9ae82bb0d31be722a1972a3de19e88c086","sha256:a1eb4797b54c3f38ef2b1fa0126eaed54b98276922290f19fcf2158ba9be915d"]
      - values: {"l":12}
        answers: ["sha256:725da456fff1efc31d7cf5c75660f7ac091855d3e61c5dba804d486395ae8926","sha256:d86b2d327187452da65140daa07ca279b64f98701340a151b05310e1d4a8c610","sha256:b913bee1a098ba8d2fb61f2ecb80a8422ab8461a5d06c6dffe8783b94ebb0714"]
  - id: poligono-regular
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Cada ángulo interior de un polígono regular mide ${{ang}}^\circ$. ¿Cuántos lados tiene? Respuesta: un entero.
    variants:
      - values: {"ang":156}
        answers: ["sha256:3b381f60f866b597cc4ff076bf9d2d48780f6370b4e87e741557b2da0d874ce3","sha256:c0bfaeb54cadfafa1d59dc931cafbf5c5148b55da14ec6d5c74a35cca5f27294","sha256:cbc6d3c0df0fc974b0a09f9b1c6a6cfd43ef5161d42bbb8661b6421c69b814e1"]
      - values: {"ang":144}
        answers: ["sha256:c712bbf85134fe38a05558b59e9a2615c209b5801cece5a594a91d1a0d0ac300","sha256:ae999756ec486f8af191eb649ac8e2dc4652c1db3fd279939706fd0fa9c42edd","sha256:9951cf92f192d18f397a3bde792f858d88ac8c46bc2325908741c7bfde438bc9"]
      - values: {"ang":150}
        answers: ["sha256:be3fea1b4bb9c50dfba83cc7bf655497e6dc630bacd0ffd37f8f0e4cd324e1be","sha256:3be387982eb4dfeb73e6fcef15c5c4c7b90d4aa8473ce73742a8adff674ef035","sha256:431e797e73ae1545ef0efbd2a8c889962d38471cfb8be3b264ed5afe20b0f36f"]
      - values: {"ang":160}
        answers: ["sha256:a57134fac84b8443d8695af1f6f5adf1e05af9efa61d250cd81dd6bfc8d99573","sha256:2b7f19be074f8ede212d7eb8bd4496c2a47b0e412892a331761951aa9e8eeeb5","sha256:861f8a33e2b62fe600b3c96ca5591878e3bb473dfe82bdfef6be0afa1a42693a"]
      - values: {"ang":162}
        answers: ["sha256:244c8f14e9676898f31227836dccf33ac77fe008d06442bd481622fe6cdd8460","sha256:4655e26ca97935ac21897a1909016706f08238fbc7358501986bda55df3dbd69","sha256:311cb74accb0eb0db86901e516676d0a570cfa2b2ec19026e15a157b9b5807ac"]
      - values: {"ang":165}
        answers: ["sha256:1777cf5a3ce2ae9df5f5db744acef67884b6261013ba4aea4e3c02a0f7cb7ffe","sha256:4bf77c72799c888f0d33fa92899e7472d0cf8b1f0c9789682bc08d2309f3e7c3","sha256:1e4467cd2f4f666412a486d55556ed389b38231c5e7ef195c1117315ba1371f9"]
  - id: r-pitagoras-reciproco
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos triángulos es rectángulo?
    options:
      - |
        $4$, $5$ y $6$
      - |
        $5$, $6$ y $8$
      - |
        $8$, $15$ y $17$
      - |
        $6$, $9$ y $12$
    answers: ["sha256:d63154347dabf5778746b32747af14ca073c7517b3528af15ef0a312186d9330"]
  - id: r-area-escala
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Amplías un dibujo de modo que todas las longitudes se multiplican por $3$. ¿Por cuánto se multiplica su área?
    answers: ["sha256:47371d27f7302d31cc71f2d9eab7afb2b4241e674901e52eaf401c220b22d1e6","sha256:1cc82c254f37a28ad4c908af9685ada1a3e72159a2d5f76664b2593306d8e1f0","sha256:561915b53cd9a93df474ef4447a03c5ca79d15d4d7facfdc388cb3c1c1823e06"]
  - id: r-unidades-area
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos cm$^2$ son $2{,}5$ m$^2$?
    answers: ["sha256:73698cba6323edbcdd12630a6d334a15187bb30dfe5819e1a386106cf1cce3bc","sha256:15d8e564c86191552c68d6ab9783b83add60cfe0697e27931cdecb3e481d73ad","sha256:49eef4fb2fecc14921cc4dc7be0855512093745a2c75047548c68be1107b7228"]
  - id: r-cono-cilindro
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un cono y un cilindro tienen la misma base. El cono mide $12$ cm de alto y tiene el mismo volumen que el cilindro.
      ¿Cuánto mide de alto el cilindro, en cm?
    answers: ["sha256:ff2304609e2934d483b40e4c17abe594cb73bc055658199cd8be930e9c1c7193","sha256:75d4d40e41fb0d6c12345e64a46c7784b6a3a673008c02f31a09e1207f2f2021","sha256:920da7840f379f0542dc59618d520a8b075b65d32a6bffda4f44e96516cb1fc4"]
  - id: r-exterior
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Cada ángulo **exterior** de un polígono regular de $9$ lados mide… (en grados)
    answers: ["sha256:42db4abd63cb906ecda697f103a2dc516c4f4b4a3b07bfdace49c139603b977f","sha256:9bb7c2f83cbb8f9e0fb00c322bc22d13d87f40520e36cb267cfbc5961aa9e071","sha256:393d3aae69e26443f056f8c950cac5a98a552675c8dae1443124d32b6601c806"]
  - id: r-radio-diametro
    tier: 2
    type: numero
    review: true
    sig: 4
    prompt: |
      Un círculo tiene $8$ cm de **diámetro**. ¿Cuál es su área, en cm$^2$? Respuesta con tres cifras significativas como
      mínimo.
    answers: ["sha256:89ae44f3ab5c38f3b2cb6d6c171f269aa52971e313e075fdb519a7d5bfd9b354","sha256:2c9127f6417c127e64627380c701d6da942a194b85b10b03ed0a100100cf7520","sha256:dbf953d90c8f3eecbc5181807c205d5bcdbfc3560cc96f923a54904865428dd9"]
---

# Geometría básica: figuras, Pitágoras y semejanza

La geometría es la ciencia de la forma y del espacio. Es donde nació la **demostración** (Euclides, hacia el
300 a. C.) y sigue siendo el lugar donde mejor se aprende a razonar: cada afirmación se apoya en otras ya
probadas. Aquí se conserva esa tradición, y a la vez se usa el álgebra del nodo anterior para
calcular longitudes, ángulos, áreas y volúmenes que sirven a quien diseña, construye, programa gráficos o
simplemente quiere saber cuánta pintura comprar.

## Objetivos

Al terminar sabrás:

1. Calcular y demostrar relaciones entre ángulos (triángulos, paralelas, polígonos).
2. Usar el teorema de Pitágoras y su recíproco, y calcular distancias en el plano.
3. Reconocer la semejanza y aplicar el teorema de Tales para medir lo inaccesible.
4. Calcular áreas y perímetros de triángulos, cuadriláteros, polígonos regulares y círculos.
5. Calcular volúmenes y áreas de prismas, cilindros, pirámides, conos y esferas.
6. Controlar cómo cambian longitudes, áreas y volúmenes al escalar, y elegir bien las unidades.

> [!question] Test de entrada
> 1. ¿Cuánto vale el área de un rectángulo de $6 \times 4$? 2. ¿Cuántos grados suman los ángulos de un triángulo?
> 3. ¿Cuánto mide la hipotenusa de un triángulo rectángulo con catetos $3$ y $4$?
>
> Respuestas: $24$; $180^\circ$; $5$.

## 1. Para qué sirve

- **Construcción y diseño**: planos, escaleras, tejados, cuántos azulejos o cuánta pintura hacen falta.
- **Medir sin alcanzar**: la altura de un edificio por su sombra, el ancho de un río, la distancia a una isla.
- **Informática**: gráficos 2D y 3D, videojuegos, mapas, detección de colisiones: todo es geometría con coordenadas.
- **Naturaleza y ciencia**: la forma de una gota, el tamaño de un planeta, la ley del cuadrado-cubo en biología.

## 2. Puntos, rectas y ángulos

> [!practico]
> Un **ángulo** es «cuánto se abre» algo: las agujas de un reloj, una puerta, unas tijeras. Una vuelta completa son
> $360$ grados; media vuelta, $180$; la esquina de un folio, $90$ (ángulo **recto**). Dos calles **paralelas** nunca se
> cruzan; dos **perpendiculares** se cruzan formando cuatro esquinas de folio.
>
> En esta sección y las siguientes verás **demostraciones**: razonamientos que prueban que algo es cierto para
> **todas** las figuras, no solo para la que has dibujado. Los bloques «Con rigor» las contienen.


Un **punto** no tiene tamaño; una **recta** se extiende sin fin en dos sentidos; un **segmento** es la parte entre dos
puntos y tiene **longitud**. Dos rectas son **paralelas** si no se cortan nunca, y **perpendiculares** si forman un
ángulo recto.

Un **ángulo** mide la abertura entre dos semirrectas con el mismo origen. Se mide en **grados**: una vuelta completa
son $360^\circ$, un ángulo **llano** $180^\circ$, uno **recto** $90^\circ$. Es **agudo** si es menor que $90^\circ$ y
**obtuso** si es mayor. Dos ángulos son **complementarios** si suman $90^\circ$ y **suplementarios** si suman $180^\circ$.

**Teorema (ángulos opuestos por el vértice).** Si dos rectas se cortan, los ángulos opuestos son iguales.
> [!formal] Con rigor: demostración
> *Demostración.* Si $\alpha$ y $\beta$ son ángulos contiguos, $\alpha + \beta = 180^\circ$; el opuesto de $\alpha$, $\alpha'$,
> también cumple $\alpha' + \beta = 180^\circ$. Restando, $\alpha = \alpha'$. $\blacksquare$

**Rectas paralelas cortadas por una transversal.** Los ángulos **correspondientes** son iguales, y también los
**alternos internos**. Esta propiedad es equivalente al **postulado de las paralelas** de Euclides, la base de
toda la geometría de este nodo.

## 3. Triángulos

> [!practico]
> Recorta un triángulo de papel, rompe sus tres esquinas y júntalas por los picos: siempre forman media vuelta, una línea
> recta ($180^\circ$). Pruébalo con triángulos muy distintos. La demostración de abajo explica **por qué** pasa
> siempre, sin tener que recortar infinitos triángulos.


**Teorema (suma de los ángulos).** Los ángulos de un triángulo suman $180^\circ$.

> [!formal] Con rigor: demostración
> *Demostración.* Por un vértice se traza la paralela al lado opuesto. Los dos ángulos que se forman a ambos lados
> son alternos internos con los otros dos ángulos del triángulo, y junto al tercero llenan un ángulo llano.
> $\blacksquare$

**Ejemplo resuelto:** los ángulos de un triángulo miden $38^\circ$, $2x$ y $x + 22^\circ$. Entonces
$38 + 2x + x + 22 = 180$, $3x = 120$, $x = 40^\circ$: los ángulos son $38^\circ$, $80^\circ$ y $62^\circ$.
Comprobación: $38 + 80 + 62 = 180$. $\checkmark$

**Desigualdad triangular:** cada lado es menor que la suma de los otros dos (el camino recto es el más corto).
Por eso no existe un triángulo de lados $2$, $3$ y $7$.

**Clasificación:** por lados (equilátero, isósceles, escaleno) y por ángulos (acutángulo, rectángulo, obtusángulo).

**Congruencia.** Dos triángulos son iguales (congruentes) si tienen iguales **tres lados** (LLL), **dos lados y el ángulo
que forman** (LAL) o **un lado y los dos ángulos adyacentes** (ALA).

**Área.** $A = \dfrac{b\,h}{2}$, con $h$ la altura sobre la base $b$.
> [!formal] Con rigor: por qué el área es la mitad de base por altura
> *Justificación.* Un paralelogramo de base $b$ y altura $h$ tiene área $bh$ (se corta un triángulo de un extremo y se
> pega en el otro para formar un rectángulo), y una diagonal lo parte en dos triángulos iguales. $\blacksquare$

### El teorema de Pitágoras

> [!practico]
> Si vas de una esquina a la opuesta de un campo de fútbol cruzando en diagonal, ¿cuánto andas? Pitágoras lo dice sin
> medir: en un triángulo con una esquina recta, los cuadrados construidos sobre los dos lados cortos (**catetos**) suman
> lo mismo que el cuadrado sobre el lado largo (**hipotenusa**). Con lados $3$ y $4$, la diagonal es $5$, porque
> $9 + 16 = 25$. Un albañil lo usa al revés: si mide $3$, $4$ y $5$, la esquina está a escuadra.


**Teorema.** En un triángulo rectángulo de catetos $a, b$ e hipotenusa $c$: $a^2 + b^2 = c^2$.

> [!formal] Con rigor: demostración (la del cuadrado partido)
> *Demostración.* Se construye un cuadrado de lado $a + b$ con cuatro copias del triángulo colocadas en las esquinas;
> en el centro queda un cuadrado inclinado de lado $c$. Calculando el área total de dos maneras:
>
> $$
> (a + b)^2 = c^2 + 4\cdot\frac{ab}{2} \;\Longrightarrow\; a^2 + 2ab + b^2 = c^2 + 2ab \;\Longrightarrow\; a^2 + b^2 = c^2 . \;\blacksquare
> $$

**Recíproco.** Si $a^2 + b^2 = c^2$, el triángulo es rectángulo. Es lo que usan los albañiles con la terna $3, 4, 5$
(o $6, 8, 10$) para comprobar una esquina a escuadra.

**Ejemplo resuelto (pantallas).** Un televisor 16:9 de $55$ pulgadas tiene $55$ pulgadas de **diagonal**. Si el ancho
es $16k$ y el alto $9k$, entonces $(16k)^2 + (9k)^2 = 55^2$, $337k^2 = 3025$, $k \approx 2{,}996$. Ancho $\approx 47{,}9$
pulgadas, alto $\approx 27{,}0$ pulgadas. Comprobación: $47{,}9^2 + 27{,}0^2 \approx 2294 + 729 = 3023 \approx 55^2$. $\checkmark$

**Ternas pitagóricas.** Hay infinitos triángulos rectángulos con lados enteros. Por la fórmula de Euclides, para
$m > n > 0$: $(m^2 - n^2,\ 2mn,\ m^2 + n^2)$ (con $m, n$ coprimos y de distinta paridad se obtienen todas las
**primitivas**; el resto son múltiplos): $m = 2, n = 1$ da $3, 4, 5$; $m = 3, n = 2$ da $5, 12, 13$.

**Herón.** Si el triángulo tiene lados $a, b, c$ y semiperímetro $s = \frac{a + b + c}{2}$, su área es
$\sqrt{s(s - a)(s - b)(s - c)}$. Para $13, 14, 15$: $s = 21$ y $\sqrt{21\cdot 8\cdot 7\cdot 6} = \sqrt{7056} = 84$.
Comprobación con la altura sobre el lado $14$: $h = 12$ (por Pitágoras, $13^2 - 5^2 = 144$) y
$\frac{14\cdot 12}{2} = 84$. $\checkmark$

## 4. Semejanza y teorema de Tales

> [!practico]
> Una foto ampliada es **semejante** a la original: misma forma, distinto tamaño. Todas las medidas se multiplican por el
> mismo número (la **razón**). Con eso se mide lo que no se alcanza: a la misma hora, tu sombra y la de un edificio
> guardan la misma proporción que vuestras alturas, porque los rayos del sol llegan paralelos.


Dos figuras son **semejantes** si tienen la misma forma y distinto tamaño: ángulos iguales y lados proporcionales,
con una **razón de semejanza** $k$. Dos triángulos son semejantes si tienen **dos ángulos iguales** (criterio AA).

**Teorema de Tales.** Si una paralela a $BC$ corta a los lados $AB$ y $AC$ de un triángulo en $D$ y $E$, entonces
$\dfrac{AD}{DB} = \dfrac{AE}{EC}$.

> [!formal] Con rigor: demostración con áreas
> *Demostración con áreas.* Los triángulos $ADE$ y $BDE$ comparten la altura desde $E$, luego
> $\frac{[ADE]}{[BDE]} = \frac{AD}{DB}$; análogamente $\frac{[ADE]}{[CDE]} = \frac{AE}{EC}$. Pero $[BDE] = [CDE]$ (misma
> base $DE$ y misma altura, por ser $DE \parallel BC$). Igualando los cocientes se obtiene el resultado. $\blacksquare$

**Ejemplo resuelto.** Con $AD = 3$, $DB = 2$ y $AE = 4{,}5$: $\frac{3}{2} = \frac{4{,}5}{EC}$ y $EC = 3$.

**Medir lo inaccesible.** Una persona de $1{,}6$ m proyecta una sombra de $2$ m cuando una torre proyecta $25$ m.
Los triángulos (sol, objeto, sombra) son semejantes porque los rayos son paralelos y los ángulos con el suelo
coinciden: $\frac{h}{25} = \frac{1{,}6}{2}$, $h = 20$ m.

### Cómo escalan longitudes, áreas y volúmenes

Si la razón de semejanza es $k$: las **longitudes** se multiplican por $k$, las **áreas** por $k^2$ y los
**volúmenes** por $k^3$ (visto en el nodo de proporcionalidad). Dos conos semejantes con $k = 2$: la superficie es
$4$ veces mayor, el volumen $8$ veces. Por eso un insecto puede cargar muchas veces su peso y un elefante no: el
peso crece con $k^3$ y la sección de los músculos solo con $k^2$.

## 5. Cuadriláteros y polígonos

**Áreas** (con $b$ base y $h$ altura):

| Figura | Área |
|---|---|
| rectángulo | $b\,h$ |
| paralelogramo | $b\,h$ |
| triángulo | $\frac{b\,h}{2}$ |
| rombo | $\frac{D\,d}{2}$ (diagonales) |
| trapecio (bases $B$, $b$) | $\frac{(B + b)\,h}{2}$ |

El **trapecio** se justifica partiéndolo en un rectángulo y dos triángulos, o duplicándolo para formar un
paralelogramo de base $B + b$.

**Polígonos.** Un polígono de $n$ lados:

- **Suma de ángulos interiores** $= (n - 2)\cdot 180^\circ$. *Demostración (convexo).* Desde un vértice se trazan
  $n - 3$ diagonales, que lo dividen en $n - 2$ triángulos. $\blacksquare$
- **Suma de ángulos exteriores** $= 360^\circ$: cada par interior-exterior suma $180^\circ$, luego la suma exterior
  es $180n - (n - 2)180 = 360$.
- **Diagonales** $= \dfrac{n(n - 3)}{2}$: cada vértice lanza $n - 3$ y cada diagonal se cuenta dos veces.
- Si es **regular** (lados y ángulos iguales), cada ángulo interior mide $\dfrac{(n - 2)180^\circ}{n}$; el hexágono tiene
  $120^\circ$, el octógono $135^\circ$.
- **Área de un polígono regular** $= \dfrac{P\cdot a}{2}$, con $P$ el perímetro y $a$ la **apotema** (distancia del centro a un
  lado). Un hexágono regular de lado $\ell$ se divide en $6$ triángulos equiláteros: área $= 6\cdot\frac{\sqrt{3}}{4}\ell^2$.

## 6. La circunferencia y el círculo

> [!practico]
> Rodea una lata con un hilo, estíralo y compáralo con el ancho de la lata: el hilo mide **algo más de tres veces** el
> ancho. Ese «algo más de tres» es el mismo en una moneda, una rueda o la Tierra: se llama $\pi$ (pi) y vale
> $3{,}14159\ldots$


La **circunferencia** es el conjunto de puntos a distancia $r$ (el **radio**) de un centro; el **círculo** es la región
que encierra. El número $\pi$ se **define** como el cociente entre la longitud de la circunferencia y su diámetro, el
mismo para todas las circunferencias (todas son semejantes):

$$
L = 2\pi r, \qquad A = \pi r^2, \qquad \pi \approx 3{,}14159\ldots
$$

Arquímedes demostró $3\tfrac{10}{71} < \pi < 3\tfrac{1}{7}$ con polígonos inscritos y circunscritos de hasta $96$ lados;
$\pi$ es **irracional**: no es una fracción y su desarrollo decimal no es periódico.

*Por qué el área es $\pi r^2$.* Si se corta el círculo en muchos sectores iguales y se reordenan alternados, la
figura se parece a un rectángulo de base $\frac{L}{2} = \pi r$ y altura $r$; su área es $\pi r\cdot r$.

Un **sector** de ángulo central $\theta$ ocupa la fracción $\frac{\theta}{360^\circ}$ del círculo: área
$\frac{\theta}{360}\pi r^2$ y longitud de arco $\frac{\theta}{360}\cdot 2\pi r$.

**Ejemplo (pizzas).** Una pizza de $30$ cm de diámetro tiene $\pi\cdot 15^2 \approx 707$ cm$^2$; **dos** pizzas de
$20$ cm suman $2\pi\cdot 10^2 \approx 628$ cm$^2$. Una grande es más pizza que dos medianas: el área escala con el
cuadrado del diámetro.

## 7. Cuerpos geométricos

> [!practico]
> El volumen es «cuánta agua cabe». Un experimento de cocina: un cono y un cilindro con la misma base y la misma altura;
> llenas el cono de arroz y lo vacías en el cilindro: hacen falta **tres** conos para llenarlo. De ahí el $\frac{1}{3}$
> de la fórmula del cono y de la pirámide.


| Cuerpo | Volumen | Área |
|---|---|---|
| prisma / cilindro | $A_{\text{base}}\cdot h$ | lateral + $2A_{\text{base}}$ |
| pirámide / cono | $\frac{1}{3}A_{\text{base}}\cdot h$ | lateral + $A_{\text{base}}$ |
| esfera | $\frac{4}{3}\pi r^3$ | $4\pi r^2$ |

El factor $\frac{1}{3}$ de pirámides y conos (frente al prisma o cilindro de la misma base y altura) es
sorprendente y se demuestra con el **principio de Cavalieri** (dos cuerpos con la misma sección a cada altura tienen el
mismo volumen) o, más adelante, con el cálculo ([[mat-calculo-2]]).

**Ejemplo (una lata).** $r = 3{,}3$ cm y $h = 11{,}5$ cm: $V = \pi\cdot 3{,}3^2\cdot 11{,}5 \approx 393$ cm$^3 \approx
0{,}39$ L. **Ejemplo (la Tierra).** Con $r = 6371$ km: área $4\pi r^2 \approx 5{,}10\cdot 10^8$ km$^2$; volumen
$\frac{4}{3}\pi r^3 \approx 1{,}08\cdot 10^{12}$ km$^3$.

**Poliedros y la fórmula de Euler.** Para un poliedro convexo con $V$ vértices, $E$ aristas y $F$ caras,
$V - E + F = 2$. Cubo: $8 - 12 + 6 = 2$; tetraedro: $4 - 6 + 4 = 2$. Hay solo **cinco poliedros regulares** (tetraedro,
cubo, octaedro, dodecaedro e icosaedro).

**Diagonal espacial de un ortoedro** $a \times b \times c$: dos aplicaciones de Pitágoras dan
$\sqrt{a^2 + b^2 + c^2}$.

## 8. Geometría con coordenadas

> [!practico]
> Como en el juego de los barcos o en un mapa de calles: cada punto se da con dos números, «tantos a la derecha, tantos
> hacia arriba». Con eso, la distancia entre dos puntos es Pitágoras: lo que te mueves en horizontal y lo que te mueves en
> vertical son los dos catetos.


En el plano con ejes, un punto es un par $(x, y)$. La **distancia** entre $(x_1, y_1)$ y $(x_2, y_2)$ es Pitágoras
sobre el triángulo rectángulo de catetos $\Delta x$ y $\Delta y$:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$

El **punto medio** es $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$. Entre $(1, 2)$ y $(4, 6)$: $d = 5$ y
punto medio $(2{,}5;\ 4)$. Las coordenadas permiten **demostrar con álgebra** lo que Euclides demostraba con
dibujos, y son la base de toda la geometría en ordenadores.

## 9. Medir bien

- **Unidades de área y volumen**: $1\ \text{m}^2 = 10\,000\ \text{cm}^2$ (no $100$) y $1\ \text{m}^3 = 10^6\ \text{cm}^3$; $1$ litro
  $= 1\ \text{dm}^3 = 1000\ \text{cm}^3$.
- **Cifras significativas**: no des más decimales de los que tienen los datos.
- **Perímetro no es área**: el perímetro se mide en unidades de longitud; el área, en unidades al cuadrado.
- **Estima antes**: un resultado de $2000$ cm$^2$ para una hoja de papel ($21 \times 29{,}7$ cm) debe hacerte dudar.

## 10. Errores típicos

- Olvidar que la hipotenusa es el lado **opuesto al ángulo recto** y el **mayor**.
- Aplicar Pitágoras a un triángulo que no es rectángulo.
- Confundir el radio con el diámetro en $\pi r^2$.
- Multiplicar por $k$ el área al escalar por $k$ (es $k^2$).
- Medir la altura sobre un lado inclinado, en lugar de perpendicular a la base.
- Mezclar unidades (metros con centímetros) en una fórmula.

## Repaso: lo que debe quedarte dentro de un mes

1. Los ángulos de un triángulo suman $180^\circ$; de un polígono de $n$ lados, $(n - 2)180^\circ$.
2. $a^2 + b^2 = c^2$ en triángulos rectángulos, y recíproco.
3. Semejanza: lados proporcionales; Tales; áreas $\times k^2$, volúmenes $\times k^3$.
4. $L = 2\pi r$, $A = \pi r^2$; $V_{\text{esfera}} = \frac{4}{3}\pi r^3$; pirámide $= \frac{1}{3}$ del prisma.
5. Distancia: Pitágoras con coordenadas.

## Siguiente

[[mat-funciones-basicas|El nodo siguiente]] lleva todo esto a las **gráficas**: relaciones entre magnitudes dibujadas en el
plano de coordenadas.
