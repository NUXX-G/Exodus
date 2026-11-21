---
id: mat-numeros-reales
title: "Números reales: irracionales, intervalos, valor absoluto y errores"
area: matematicas
trunk_level: 4
prerequisites: [mat-enteros-fracciones, mat-algebra-basica, mat-geometria-basica, mat-proporcionalidad-porcentajes]
academic_sources:
  - "Moya, P. Matemáticas orientadas a las enseñanzas académicas, 4.º B ESO (LOMLOE), capítulo 1: «Números reales», secciones 1-4 (racionales e irracionales, √2 no es racional, aproximaciones y errores, representación en la recta, número de oro, intervalos, semirrectas y entornos). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/01_Reales_4B.pdf (CC BY-NC-SA 3.0)."
  - "Muñoz, J.; Moya, P. Matemáticas I, 1.º Bachillerato (LOMLOE), capítulo 1: «Números reales y complejos», secciones 1.1-1.8 (recta real, valor absoluto, desigualdades, distancia, intervalos y entornos, aproximaciones y errores, notación científica). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_01_Complejos.pdf"
  - "Spivak, M. Calculus, 4.ª ed. Publish or Perish, 2008, cap. 1 («Basic properties of numbers»: desigualdades y valor absoluto) y cap. 2 (inducción y problemas sobre la irracionalidad de las raíces)."
hints:
  - "Concepto: un número es racional si es una fracción de enteros (su decimal termina o se repite); si su decimal no termina ni se repite, es irracional (√2, π). El valor absoluto |x| es la distancia de x al 0, y |a − b| la distancia entre a y b. Un intervalo es un trozo de la recta: corchete [ si el extremo entra, paréntesis ( si no."
  - "Herramienta: dibuja la recta y marca los puntos; para |x − a| ≤ r piensa «los puntos a distancia como mucho r de a», que es [a − r, a + r]. Para errores: absoluto = |valor real − aproximación|; relativo = absoluto / |valor real| (multiplicado por 100, en %)."
  - "Documentación: Marea Verde 4.º B ESO, cap. 1 (secciones 1.3, 2 y 4); Matemáticas I, cap. 1 (secciones 1.3-1.8); Spivak, cap. 1."
exercises:
  - id: cuantos-racionales
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos de estos números son **racionales**? $\sqrt{16}$, $\sqrt{12}$, $0{,}\overline{12}$, $\pi$, $\frac{22}{7}$,
      $\sqrt{2}\cdot\sqrt{8}$, $1 + \sqrt{3}$, $\sqrt{0{,}25}$.
    answers: ["sha256:ce6141ae88c29542b4789bc032e93471c5b1a591c982ab2808c4a04030074b64","sha256:53a275c4ba8a228e3b9ac48fe9f71fa8e22a424229ab14264ace4b2a8d2abc06","sha256:e71c6f835f96b5521686937abcbda9f513784f2ade6e0dbff694e0573ca7ddce"]
  - id: raiz-entre-enteros
    tier: 1
    type: numero
    sig: 6
    prompt: |
      $\sqrt{{{n}}}$ está entre dos enteros consecutivos $k$ y $k + 1$. ¿Cuánto vale $k$?
    variants:
      - values: {"n":50}
        answers: ["sha256:bba9c9c001a412a4da712bd66d0c34095fb2933c54dc1aee32ab0c49f688462e","sha256:756a9f8439407944d1855a963cbe78ec3048831f5d4cffa2cc5b143e0a756ca1","sha256:c3300fc9eb813fe16800f94496f2a49de9d9bcbb420a969932c24a5ee99c70e4"]
      - values: {"n":200}
        answers: ["sha256:73ee1bbfb1db69a64d82115da4591ebbca315f07a85f7eac1c306146a8cbc60b","sha256:615c916bbcc23c8423caa78cc645178f01b266d3a5c0d8d797553d85067ff1c7","sha256:84962865535cefeeb5d2c75198152f27e40a94d887a1a75814f22b954f75be32"]
      - values: {"n":1000}
        answers: ["sha256:4d157c93038790c3b23763dfd8da8f60dc5064c6168cf203b05f0a214c312994","sha256:f5e0e315cc69f9e2b69c746320acfedc03d637bff863426c62d3877276e6454c","sha256:294f7354f8ef3da17272b9644e888b577c62fd9742c358be7e083f30f09dd32d"]
      - values: {"n":777}
        answers: ["sha256:cef248c825c9d8db7eb0e577700a62c3eea4a472cfd9d0a7fdf43a3efc500ca6","sha256:188859821d4e477c8116c926c4cd8036085ea82712eb987b60ef287eccef3501","sha256:156fdca87e7fa749c964f769e2b90957e79d936c77c289511ca3da71b61769f6"]
      - values: {"n":3}
        answers: ["sha256:9d88d805bd68d63864b4a8bed97b187daa452186e96432087a7d82f2dae640aa","sha256:5fb1465d3992fa016e1134fe307c96c23a5c857b8792aadb6660035c9475ee26","sha256:d27cf28657c807c586e2b60581af55bb39f29f1e9fb4e0646586e5a3b21fcf27"]
      - values: {"n":2026}
        answers: ["sha256:2a8ecb52e77691a0dcae127c605ea36c9343a286099b56f7410d4d96f95972d6","sha256:915a69c8bd2937eb6f97998926e5b7c93cb40ea566a7c2547545f4f170c5967e","sha256:eec1c5c9e85ccf2c903f7107e25f7d69f7e23e936e35370bf1395897176b56ad"]
  - id: distancia-recta
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Qué distancia hay en la recta real entre ${{a}}$ y ${{b}}$?
    variants:
      - values: {"a":"-3","b":"8"}
        answers: ["sha256:e53cc0d692b77edb89fdb6da702c8b41ff9b614aa546ee32eee78d27c8f005bf","sha256:1482db57d7374dbb7c109ce0de076ae8051c736fc5b3ba5baae07e7812edbaca","sha256:772a4fdae4582553669b918eafdbcb3e72df3b40ac4020b3eb4c8939daf695de"]
      - values: {"a":"-12{,}5","b":"-4"}
        answers: ["sha256:cc2f5ae4ff95f8efc8e3f8d901d906a952a66773c774296077aadaff7f8d572c","sha256:948f5ff05a07343eb320302ea7d33729614eabf6a181ebf19bb4d5ed16a08d00","sha256:d380ffb0f31f0499710ac97fd86d9a38511fe39c0344e4aed7b61cd5f91ac794"]
      - values: {"a":"7","b":"-2{,}25"}
        answers: ["sha256:174e176c46a84347e8aba4c9dbfea0ba78871b7cfe92ced5d4361ec8e84b2b89","sha256:a274ec29a2c9528ab8ac39391cb44fac77100ba989360b4c4c4471aef058801e","sha256:708ebea602da7c6956a7146e0fe77399b6a5a6db95efdf3515bf03c31dc34843"]
      - values: {"a":"0{,}4","b":"3{,}1"}
        answers: ["sha256:c8e5c6fac34cd311f548d1d1da9f5e157f4d640934cb70a465c071da6370b64f","sha256:9ad7153b8c1430312d9c1ae5a2652856bb9a4772bbca3770c46d36d771175dc4","sha256:39321f29304ee699ae1cc37379d9c5d84f2f43078d9d5bff1259e65f048a8c0b"]
      - values: {"a":"-100","b":"37"}
        answers: ["sha256:fa78fe3a98a453e163a82d2ccb9c75ba291c206d2dd3c77a9f9380116130bead","sha256:5234a00d3f188aba3a40e803e0041fb4f46c2082c6eb5d41fb70a0ff6becd9f7","sha256:7065a8dcfdea79891f214afd548ff45ab7c10a9533b9cf1fc88773af0f3dccbc"]
      - values: {"a":"15","b":"9"}
        answers: ["sha256:9542b703aaa914f97b0f215957d88827b67ea865579ced6deb7f2b81e74639e7","sha256:5d71d1757dd3c41c65f9ca4f64252847300877c114fd1caa12af1b8b401f5c38","sha256:bb750923399dd2f1840f58cc7db3bf428f66c480c5f0558d3b9a6d4b9375f78e"]
  - id: enteros-valor-absoluto
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos números **enteros** $x$ cumplen $|x - ({{a}})| \le {{r}}$?
    variants:
      - values: {"a":"3","r":"4{,}5"}
        answers: ["sha256:8abbd069f9dcb2446ce6b6e5196008218ce94b1e5ef7a47a8c7753fa20ea05b0","sha256:0e7376c8ef639ba730c984fdea1d94bf83220df434581153b387da8844972b77","sha256:6d9b0fe462ea6d8583d90d14eec4aaa22a6c91082944d3fe4f26099a69278372"]
      - values: {"a":"-2","r":"3"}
        answers: ["sha256:a571d6ce047ba3583cd227b59f29c8c0d7d3a519cb41c1cfd676520324835b6a","sha256:b0aa23a50b67f9610fb71ce6084775042006a0026abce3ee0ecedb7555ac6437","sha256:5b7179270f37b2b00c756ec95b3359cd9fbbb4436a5981c4c0e6cce7c1b1b6f0"]
      - values: {"a":"10","r":"2{,}5"}
        answers: ["sha256:0eeec480b072a128923cb2c4fd90c3e78683ac3ebdda00e7c23a853dc778690e","sha256:b2ac6fb597031194b46989d9d2519a1e551720b31fe77b01a2faa45e6c19b308","sha256:6e7170d1a33aaa33a0846d7f4dedcaefbe756110b8602300f864ba24caa2075a"]
      - values: {"a":"0","r":"6"}
        answers: ["sha256:8f1281e9036ba224c90487f50ead02c231897233f105ce4b6c90e5e68e7bb6f5","sha256:fddd7bc9d7f8d04c9341f539f0e2ee8969f3514a0236d1ebdbdc8d9891c43514","sha256:92f840ea6b6c35fa3f668d6c8f32e9bc39caa196f3e0214a4ad03e9774b9b35e"]
      - values: {"a":"7","r":"0{,}9"}
        answers: ["sha256:05f572cb374057cb2c299e9ff0c20db1a988ea0d89202788176f6a5e96ccc109","sha256:02e67b4499f321ef1c8ef8313bbe2c99644128ecd543285e3506516e3bc9f5bf","sha256:ca2f47f8fd105cd7a2517450ab9ba0c838514377a48f21cb184b7baf19be9931"]
      - values: {"a":"-5","r":"7{,}2"}
        answers: ["sha256:b6a1a2250a3b502772fe6c1be16fdfb3184fc5342800e2aa618ba5eea4a2c659","sha256:f462f19db8d89355b9874eac83fadc98a24a7e37d4839e606ad5044d49bd1336","sha256:6d768dde7dab53ba9d2fa06348e6c79ec2b9fa7d7d1b68e6d393e26987b37bf5"]
  - id: desigualdad-absoluto
    tier: 2
    prompt: |
      Resuelve $|{{k}}x {{b}}| < {{c}}$. La solución es un intervalo abierto $(p, q)$. Respuesta: «p;q» (con decimales si hace falta,
      usando punto o coma).
    variants:
      - values: {"k":4,"b":"- 2","c":10}
        answers: ["sha256:aaee0d07807a079803c3753362a7d79f1a4f0c5819deadc8d22501ea590464e2"]
      - values: {"k":2,"b":"- 5","c":9}
        answers: ["sha256:a35b554581573c0f4fd2a4bb64912ff5ad4d642ae4a88c9cdd8b66789053567a"]
      - values: {"k":4,"b":"+ 1","c":6}
        answers: ["sha256:eb867412fe3d0dabb8a66d2a9b97c7b1df3ffbd3b2ac48de0e54002b84020a50"]
      - values: {"k":5,"b":"- 3","c":12}
        answers: ["sha256:30e0a3d58ce495f192ad8c83d557052d1a2ef6c0710ccc5275959ce5a4b267f1"]
      - values: {"k":2,"b":"+ 7","c":5}
        answers: ["sha256:1602395dccf4e2c49f43d4b4c2cff2625fbfa06a129032a47528ccdb2427b382"]
      - values: {"k":5,"b":"- 1","c":9}
        answers: ["sha256:c8e0133544dd45e47099d233c3861a67187282ddb0e4fe017acf7ac7f58c998d"]
  - id: interseccion-intervalos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Qué longitud tiene el conjunto $[{{a}}, {{b}}) \cap [{{c}}, {{d}}]$? (Si es vacío, responde $0$.)
    variants:
      - values: {"a":"-3","b":"5","c":"1","d":"9"}
        answers: ["sha256:777cb268d5e00344ca6f8308ca550360fa54d4d99a77787f1b4185972b09aa05","sha256:88a3c96db8df1d80686b94fd8331d6ec6e49d609932a663fb3d8f3acb1713a2f","sha256:648c7a63e6a94cd807439c2fa6ece2808c1c463e67ab3736c478e1a0c5c55a28"]
      - values: {"a":"1","b":"10","c":"-4","d":"6"}
        answers: ["sha256:a0673a41ee826f363f415cb29b2c1f827bb55b63f5ff4dadabebdec59d81df52","sha256:3170ac02a237e40d7ac1feece5923c32713d37acca3674232aea8c1b13afe293","sha256:bef5a7a4b005c84c4117df313d91fba10535e291ca5d1740dd8f49b0df38b5cf"]
      - values: {"a":"2","b":"8","c":"3","d":"4"}
        answers: ["sha256:58597efd715f6832f9b7ad4ce9df8fa5f17ee7b464abb35fefb738e9b770abef","sha256:a99c522f33f78c224e0d9a1919b804fe75ad03a61fd2f5ab0e5e0c3b9d7e2c96","sha256:ad921727319bd0baa133f2fadabf3ef25c7579999b7ea9eef245d4b61b7a2272"]
      - values: {"a":"-6","b":"-1","c":"-2","d":"7"}
        answers: ["sha256:0f8174777d41184be9e1dd96e09ef6ec647c195e891a5d72732c57f4974eed52","sha256:70ae0df866c3b025ea307c7ce90538ce24e883157ce9cfe8612d7fc446e20ba5","sha256:41a41fe73e536389f86f4f8063bc578609e2c36166dc4c002df570cddefd81c3"]
      - values: {"a":"1","b":"12","c":"5","d":"20"}
        answers: ["sha256:89d1e23c96e4283e7e75afd04b9651f56d5adac298aa4350caedbe90ce21b68a","sha256:0bed23a99495f3678879b02df8e4d4ce0cbe2a39d46317ca290fb7cc8a3ad9cb","sha256:592c784e1e75d16b6c9e3ad2cf2d4ecb1c168d4bf3f668b10e3dfff813ce653b"]
      - values: {"a":"-10","b":"0","c":"-15","d":"-3"}
        answers: ["sha256:341504fe8a011c78dbd69c4c017a36e3777d787bd440ed96cc18c9169ad3b239","sha256:82db48ba64b048e9a9e0699d4a31ad5a6f14c5105ea1c55e148a3243bb8e02fd","sha256:e02d5631f04bec6f41d5e83f962e1c432814a9b0f3b98f1e9b89b395c6cfd1cb"]
  - id: error-relativo
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Se aproxima el número ${{x}}\ldots$ por ${{a}}$. ¿Cuál es el error relativo, **en porcentaje**? Respuesta con tres cifras
      significativas.
    variants:
      - values: {"x":"1{,}732050808","a":"1{,}73"}
        answers: ["sha256:beaa261cfd7ab3599c881fa52c60d01df45d7f707045eda291c8bcaee6b0e503","sha256:da2e82d84ab56dda9e6fb750af9f190396d551912be886b897414813232c4526","sha256:a9e5541e2d40030c654f8913410a4be9dd88355a2a62903be0405946ff8ffec2"]
      - values: {"x":"2{,}718281828","a":"2{,}7"}
        answers: ["sha256:242d2c1ee33750aeae2eb138108a0f82ae84484497f61dbf7488a1145d5d47c3","sha256:764f1f06507e3a7a717e8f85d651a9b71c3875b183512f78fbfad59900dd38c6","sha256:c0bcae04dc4cc825d4893b2daf9e9622c4e0f94c73a845d6d153882e50da4b69"]
      - values: {"x":"3{,}141592654","a":"3{,}1416"}
        answers: ["sha256:a49681b763dc5e90c375763894105a21ae24eb6af21ff903b28ed4a61a975b5f","sha256:59a9d42a386d759ae5f41a69b7a5c3e341db6d80224c8186c9ced46098d5a17f","sha256:3ed9ddf92380f51287b469955d54bdb1369f26163880bf0ae9991d16dc9ab787"]
      - values: {"x":"1{,}414213562","a":"1{,}4"}
        answers: ["sha256:b0cb38432fa263bf45151e713f1bf6732c40fbb44113968ca02abd01c880c1c0","sha256:1458dddbaac3dc22d5d5a1b36bed7d10c1b793666cd91572d2031435b1c78019","sha256:f4dfba1a42bde6baad0fa121d28fee343c410e0bd2029ae422cefd359a65d40d"]
      - values: {"x":"0{,}333333333","a":"0{,}33"}
        answers: ["sha256:ea0271ea6f6b121d143b4333bf093d3663f1426cb1fda4baaf5ca4c463042b2c","sha256:641fd1cb2224b9259b356bfc52fe91d04020ace1b0611accc6faebf0701013dd","sha256:631708d3346e6cb457c8a8831d40cff13bcc60fa54a54dea878648d3a7057624"]
      - values: {"x":"9{,}81","a":"10"}
        answers: ["sha256:8a2bd28acebded528c83e03cc303dc599429e24329788e798d32fa13ca71c37b","sha256:ebeff6e98d626d1f7d0fcf0a6b4b88b2564b4bdfc00eb4bf9d6c9e81d5bb5658","sha256:4a548c14d96ad633d4f678fda425285b4e47f886f126f43492a35e070a165b40"]
  - id: exponente-cientifica
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula $({{a}} \cdot 10^{{{m}}}) \cdot ({{b}} \cdot 10^{{{n}}})$ y escríbelo en notación científica $c \cdot 10^{e}$ con
      $1 \le c < 10$. ¿Cuánto vale el exponente $e$?
    variants:
      - values: {"a":"2{,}5","m":7,"b":"4","n":-3}
        answers: ["sha256:b75b6cf4ecd171e053c1b5cd047097b625d9226429527e0651a259cddb484de0","sha256:e87eac0c78c6bba4b359046017a85020f1fba5058108c84829253036f8295a9c","sha256:db8d32bcb76d9b4d4d098b596e8bef9e022d3a15f1bb6742f93493aa6bd99fa4"]
      - values: {"a":"7","m":-4,"b":"5","n":9}
        answers: ["sha256:0a4d3f58d49e4b2520b13dcd068ea0f442ca95323f814e3699d506d37a5550cf","sha256:37129869edfd4cd4529cb2f4ac568ac4601ebc300f76732217406a7149835318","sha256:e3404fb5dd280e7f3ba53eba15e5b2e995d53b78c7db01fc0d61b813b88935bd"]
      - values: {"a":"8","m":12,"b":"3","n":-20}
        answers: ["sha256:d90de6e176b6dd09eeba941005e5fd6d00519c1ca903593edd6ee8a2d8b4bb72","sha256:d8ea1c77a3439eb8cf879253e06d40da19764288cf30388cb56afaa68a89173f","sha256:14c9f2c27bb04a526aeecc25ff8ca0a0573497949c655ccb1f325e09196578c6"]
      - values: {"a":"1{,}5","m":3,"b":"4","n":2}
        answers: ["sha256:2a0e774b90374bafb4c4d0ee58deac3def0221f6bd3a223134e88cbc3ac09e54","sha256:20e972d1483b39d36028b70fb4bfb9b4583c47c688127cd0da8162e928454119","sha256:c7e38f0edc595542a348ce3de77e5669e4eeeaa5176388ed18ec7db96d7a04e9"]
      - values: {"a":"9","m":-8,"b":"9","n":-8}
        answers: ["sha256:e98708c6a77e6596b723b3a44687988ffcf3a681429ef9ca2c9eb6e43480c642","sha256:c087e580eb3e30f4ee6b16cfb3e767fd9a7cff0b3d893a296c35a64a65b7d98d","sha256:49c73364d1e6dec0c14cc9f4a9006b3b5e7a0c9d0584dfaa12b4a0adcbcd183f"]
      - values: {"a":"3","m":15,"b":"7","n":6}
        answers: ["sha256:83d22c74e10ce64bdddbca07223e8670502320eba96fa9c8ad67eca9bca12bc4","sha256:89278a202ede460cdc0e646a789eb6a396c0b5e3777d89ec9865e494db06cb14","sha256:a99e5d800f4538075217f085209177f1be0b0b12501a9450599ae1e8c6cfaafa"]
  - id: intervalo-desde-tolerancia
    tier: 2
    type: opcion
    prompt: |
      Una pieza debe medir $12{,}5 \pm 0{,}02$ mm, ambos extremos admitidos. ¿Qué intervalo forman las medidas aceptables?
    options:
      - |
        $(-0{,}02;\ 0{,}02)$
      - |
        $[12{,}48;\ 12{,}52]$
      - |
        $[12{,}48;\ +\infty)$
      - |
        $(12{,}48;\ 12{,}52)$
    answers: ["sha256:5fdf47df9905adb7f5aff66972a823f39603fc01e472e94b665ce0d6b85e4d0b"]
  - id: raiz-de-cuadrado
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuánto vale $\sqrt{(-7)^2}$?
    answers: ["sha256:881788984221d1ca46e7e8b29ff8372c3e3cb43ab97b2036baf5b24f258549a8","sha256:7492ca98bdc7b2810fd06472d5a448712c3ee4379c6939e76976f08f575dd049","sha256:372926ea9c2daf5b8d23e383a889e51d62643ab9c62592d2901e25629228d714"]
  - id: irracional-suma
    tier: 3
    type: opcion
    prompt: |
      ¿Cuál de estas afirmaciones es **verdadera**?
    options:
      - |
        La suma de dos irracionales es siempre irracional
      - |
        El producto de dos irracionales es siempre irracional
      - |
        La suma de un racional y un irracional es siempre irracional
      - |
        Todo decimal con infinitas cifras es irracional
    answers: ["sha256:61d3ab65816326caf220b859409e438581423054337941b522598a8bedf92cc9"]
  - id: aureo
    tier: 3
    type: numero
    sig: 6
    prompt: |
      El número de oro es $\varphi = \frac{1 + \sqrt 5}{2}$. Calcula $\varphi^2 - \varphi$ **exactamente** (desarrolla el cuadrado).
    answers: ["sha256:292a3c2b3753792233a73d24a60bfcca6425412be8c9d044ead90d06c5ea1b08","sha256:9ebf19449568c22ba5b796720cb84c2550d6230e70f67375668eb7d1b379ef20","sha256:a5bc97caa45c4b72c9109e85926cb1b63b5f2099af09939c8406ff9bad77f045"]
  - id: raiz3-irracional
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que $\sqrt 3$ es irracional. Indica qué propiedad de los enteros usas en el paso clave y por qué
      la fracción de partida se puede suponer irreducible.
    sealed: "gz64:H4sIAAAAAAACCoWTz4obRxDGX6UY+rArBgWvgiEDezB4LyFgY4dc0lkoddcq5e3p6uk/MorQA5mQU26bm/VioXvsldYsyWlQqWbq+35V375L4kpm8d3QvS9B/AZHST0EiRDJFmP4+LcHdIDrVKKVHqZCoLROU8ywgmvQ+i6i2YfDfjooMOJBhR4mBeQzRUkQJHHmraQl/CwWobbPn00EoZAl7ROPwfEdG4xgecuWyVtpMsjBaCxYAl9Gimglwg4seRnZ1189YDr+1XQFsTRKglStUAR3Pm2x4Ng88drRYjFor7SWQBGzRI8j7UdjDxdV/CVcwwu11F77G0dbrFrQgSloq4AeVLi9gmtYTbdXqgdXaCOgVqD1yBbC7ZVawmLxFpOAcbilYbEAI2PtUUAJQuRRekg8myVAKB5CFFtMFu1V0NpYyRDUqQPdpnipIJwkuEOTJVKCiwqpGm0F/gNnt8cHzwaHiq9Na6MxYCRDQP6ZNyw1W0r7JE6quKft7X91uYRXFffJreqrJUuGI6hQqdzP6N6XlDmXXV3lAOqH+3NmAokQ1DTX7ltt97hwTqMAxk0ZyecztJNawo3P4g2l5uiRjgoKdvU5qV57Iz5HhP9bMPyE7VYSzwiocnUJh9OFt31xjGhYPLpm7OLNB2lkTwo//5l4xlf7x+ODyxxc25Zaqb7Jyziu+fjJf/4HvMAWHUHAiPWs3FSYIvjjw0ixwvr+i+HVSwWBoswVX0sv1RJ+QUfaB4ktjWdHtbzs+i6WdWTTDb/uOxM5U2Tphu6tQ58J6yqfjfac3bNkh+8mBWeZqQv6UHdac9pWNZXjpznCXyOX6PyNZdd3ofgsqRteHPoncl7XJnqSpP9q//Fx8Gz5lDXQ+h1vfs8Yo3yE01lCSS24tX/1CAgung0KCDga25HfFOPYUro8l3P1jZw368zk6fwyYQfO0QahIZ4v0PIXzJWtwxMbdmzRPp3w2+Ff/YWnBpAFAAA="
  - id: r-tipo-decimal
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué tipo de número es $2{,}1717171717\ldots$ (el $17$ se repite siempre)?
    options:
      - |
        Racional: su decimal es periódico
      - |
        Irracional: tiene infinitas cifras
      - |
        No es un número real
      - |
        Entero
    answers: ["sha256:1223e0e803c8de8752f7a4632e6c8455830acc9a854f721565112b00cce00caa"]
  - id: r-intervalo-infinito
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se escribe el conjunto de los números mayores o iguales que $5$?
    options:
      - |
        $[5, \infty]$
      - |
        $(5, \infty]$
      - |
        $[5, \infty)$ sin incluir el 5
      - |
        $[5, +\infty)$
    answers: ["sha256:ce1111b9698559f5217bb2f7ee25bc6f583ce1d4770cde0d4f9382a42e775eb6"]
  - id: r-absoluto-suma
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Calcula $|-7 + 3| $. (¿Coincide con $|-7| + |3|$?)
    answers: ["sha256:92d954c30078806b35c7144b0e2f2b5b1dc2f5339910b20082f0afbe7d5b3931","sha256:5d2b6f733ab1946ae92a970f1015078e9a12adc07aca46a0a7272086031fc13c","sha256:379d46bf46e47e57c46dbca866932e3cd2aa7c9b7214c6a07d8aa116bf675fab"]
  - id: r-entorno
    tier: 2
    review: true
    prompt: |
      Escribe el entorno de centro $3$ y radio $1{,}5$ como intervalo $(p, q)$. Respuesta «p;q».
    answers: ["sha256:2f3788c0e9e9410a1edee4064fdc5fc6a091dfe9c6a02f008b1956a14acd882c"]
  - id: r-error-absoluto
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Una cuerda mide en realidad $4{,}7$ m y la estimas en $5$ m. ¿Cuál es el error absoluto, en metros?
    answers: ["sha256:449717c3fd008580e32c36430b07749ca19e3b7d234f21a41d4f44c02fd4660c","sha256:c2cb1e35e02c2d654b24223b2c5642471a9f667b6d33e20a2e18c098598bb0ae","sha256:760c50dc5e91f93b66294f0ba1cfb515f8589f53f835de25973980f2b31a562e"]
  - id: r-cifras-significativas
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas cifras significativas tiene la medida $0{,}0705$ m?
    answers: ["sha256:acfcd9ec999b5970cb6a14766c7f03a453957cbe2df1e0aab1fde943301ddcde","sha256:581e21d371a3384360e42f05a972c3f20f3defa0a041e6ce761c298a4746257e","sha256:f4ad118836e091be008c4b02226beddc4911af4ddf5f5cffe5fc1b7cd8effceb"]
---

# Números reales: irracionales, intervalos, valor absoluto y errores

Con las fracciones se puede medir casi todo… pero no todo. La diagonal de un cuadrado de lado $1$ mide $\sqrt 2$, y
ese número **no es una fracción**: según una leyenda tardía, su descubrimiento causó escándalo entre los pitagóricos. Este nodo completa la recta numérica con los
**irracionales**, da el lenguaje para hablar de trozos de la recta (intervalos), de distancias (valor absoluto) y de lo
que se pierde al redondear (errores). Es el suelo sobre el que se construye todo el cálculo.

## Objetivos

Al terminar sabrás:

1. Distinguir números naturales, enteros, racionales e irracionales, y demostrar que $\sqrt 2$ es irracional.
2. Situar números reales en la recta, incluidas raíces cuadradas construidas con regla y compás.
3. Usar el valor absoluto como distancia y resolver desigualdades con él.
4. Escribir conjuntos de números como intervalos, semirrectas y entornos.
5. Aproximar, redondear y calcular errores absolutos y relativos, y usar la notación científica.

> [!question] Test de entrada
> 1. Escribe $0{,}75$ como fracción. 2. ¿Cuánto vale $|-7|$? 3. ¿Entre qué dos enteros consecutivos está $\sqrt{50}$?
>
> Respuestas: $\frac{3}{4}$; $7$; entre $7$ y $8$ (porque $49 < 50 < 64$).

## 1. Para qué sirve

- **Medir de verdad**: diagonales, circunferencias, el número de oro de un diseño: muchas medidas exactas son
  irracionales, y hay que saber trabajar con ellas y con sus aproximaciones.
- **Tolerancias**: una pieza de «$20 \pm 0{,}05$ mm» es el intervalo $[19{,}95;\ 20{,}05]$, o sea $|x - 20| \le 0{,}05$.
- **Ciencia e ingeniería**: todo dato medido tiene un error; saber cuánto afecta al resultado es la diferencia entre
  un cálculo fiable y uno inútil.
- **Cálculo**: los límites (la idea de «acercarse tanto como se quiera») se definen con valores absolutos y entornos ([[mat-calculo-1]]).

## 2. Racionales e irracionales

> [!practico]
> Los números **racionales** son los que se pueden escribir como fracción: $\frac{3}{4}$, $-5$, $0{,}333\ldots$ Su decimal
> o **termina** o **se repite**. Pero hay números cuyo decimal sigue para siempre **sin repetirse nunca**, como
> $\sqrt 2 = 1{,}41421356\ldots$ o $\pi = 3{,}14159265\ldots$: son los **irracionales**. No es que no los conozcamos
> bien: es que **ninguna** fracción los iguala exactamente, por mucho que se acerque.
>
> Juntos, racionales e irracionales forman los números **reales**: todos los puntos de la recta, sin agujeros.

Un número es **racional** si se puede escribir como $\frac{p}{q}$ con $p, q$ enteros y $q \ne 0$; el conjunto de los racionales
se llama $\mathbb Q$. Por [[mat-enteros-fracciones]], su expresión decimal es finita o periódica, y toda expresión finita o
periódica es una fracción. Un número real que no es racional es **irracional**. Los números se organizan así:

$$
\mathbb N \subset \mathbb Z \subset \mathbb Q \subset \mathbb R ,
$$

(naturales, enteros, racionales y reales; el símbolo $\subset$ se lee «está contenido en»).

**Teorema.** $\sqrt 2$ no es racional.

> [!formal] Con rigor: demostración por reducción al absurdo
> Supongamos que sí lo fuera: $\sqrt 2 = \frac{p}{q}$ con la fracción **irreducible** ($p$ y $q$ sin divisores comunes).
> Elevando al cuadrado, $p^2 = 2q^2$, así que $p^2$ es par. Entonces $p$ es par (si $p$ fuese impar, $p^2$ también lo
> sería): $p = 2k$. Sustituyendo, $4k^2 = 2q^2$, es decir $q^2 = 2k^2$, y por el mismo argumento $q$ es par. Pero
> entonces $p$ y $q$ tienen el divisor común $2$, contra la hipótesis de que la fracción era irreducible. La suposición
> era falsa: $\sqrt 2$ es irracional. $\blacksquare$
>
> El mismo argumento, con la factorización única de [[mat-numeros-naturales]], prueba que $\sqrt n$ es irracional
> siempre que $n$ no sea un cuadrado perfecto.

**Más irracionales.** $\pi$ (Lambert, 1761), el número $e \approx 2{,}718$ (que aparece con el interés compuesto «continuo») y el **número de oro**
$\varphi = \frac{1 + \sqrt 5}{2} \approx 1{,}618$, la proporción de un rectángulo que, al quitarle un cuadrado, deja otro
rectángulo semejante a él. Sumar o multiplicar un racional no nulo por un irracional da siempre un irracional
($3 + \sqrt 2$, $5\sqrt 2$); pero la suma de dos irracionales puede ser racional ($\sqrt 2 + (-\sqrt 2) = 0$).

## 3. La recta real

> [!practico]
> Cada número real es un punto de una recta, y cada punto es un número real. Los racionales están por todas partes
> (entre dos cualesquiera hay infinitos), pero aun así dejan «huecos» donde están los irracionales. Con regla y compás
> puedes dibujar exactamente el punto $\sqrt 2$: es la diagonal de un cuadrado de lado $1$, llevada sobre la recta con el
> compás.

**Representar $\sqrt n$.** Sobre la recta, en el punto $1$ se levanta un segmento perpendicular de longitud $1$. Por
Pitágoras, la distancia del $0$ a su extremo es $\sqrt{1^2 + 1^2} = \sqrt 2$; con el compás se lleva sobre la recta. Repitiendo
(un cateto $\sqrt 2$ y otro $1$) se obtiene $\sqrt 3$, luego $\sqrt 4 = 2$, $\sqrt 5$… (la «espiral de Teodoro»). Y como
$\sqrt 5 = \sqrt{2^2 + 1^2}$, también se obtiene directamente con catetos $2$ y $1$.

**Densidad.** Entre dos reales distintos $a < b$ siempre hay otro (por ejemplo, su media $\frac{a + b}{2}$), y por tanto
infinitos; también hay siempre un racional y un irracional.

**Orden.** $a < b$ significa que $a$ está a la izquierda de $b$. Reglas que se usan constantemente (ya las viste con las
inecuaciones en [[mat-algebra-basica]]): sumar el mismo número a los dos lados conserva la desigualdad; multiplicar por un
positivo la conserva; multiplicar por un negativo **la invierte**.

## 4. Valor absoluto y distancia

> [!practico]
> El **valor absoluto** de un número es su distancia al $0$, sin importar el lado: $|5| = 5$ y $|-5| = 5$. Y la distancia
> entre dos números es el valor absoluto de su resta: entre $-3$ y $4$ hay $|4 - (-3)| = 7$ unidades. Decir
> «$|x - 10| < 2$» es decir «$x$ está a menos de $2$ unidades del $10$», o sea, entre $8$ y $12$.

El **valor absoluto** de $x$ es

$$
|x| = \begin{cases} x & \text{si } x \ge 0, \\ -x & \text{si } x < 0, \end{cases}
$$

y la **distancia** entre $a$ y $b$ es $d(a, b) = |a - b|$. Propiedades básicas: $|x| \ge 0$ (y $|x| = 0$ solo si $x = 0$),
$|xy| = |x|\,|y|$, $|{-x}| = |x|$ y $\sqrt{x^2} = |x|$ (¡no $x$!: $\sqrt{(-3)^2} = 3$).

**Desigualdades con valor absoluto.** Para $r > 0$:

$$
|x - a| \le r \iff a - r \le x \le a + r, \qquad |x - a| > r \iff x < a - r \ \text{ o } \ x > a + r .
$$

**Ejemplo resuelto.** $|2x - 3| < 7$: $-7 < 2x - 3 < 7$, luego $-4 < 2x < 10$ y $-2 < x < 5$. Comprobación con $x = 0$:
$|{-3}| = 3 < 7$. $\checkmark$ Con $x = 5$: $|7| = 7$, que no es $< 7$. $\checkmark$

> [!formal] Con rigor: la desigualdad triangular
> Para todo $a, b$ reales, $|a + b| \le |a| + |b|$.
>
> *Demostración.* Siempre $-|a| \le a \le |a|$ y $-|b| \le b \le |b|$. Sumando, $-(|a| + |b|) \le a + b \le |a| + |b|$, que
> por la equivalencia $|y| \le r \iff -r \le y \le r$ (con $y = a + b$, $r = |a| + |b|$) es exactamente $|a + b| \le |a| + |b|$. $\blacksquare$
>
> Interpretación: $d(x, z) \le d(x, y) + d(y, z)$; ir directamente nunca es más largo que pasar por otro punto. Es la
> desigualdad del triángulo de [[mat-geometria-basica]], ahora en la recta.

## 5. Intervalos, semirrectas y entornos

> [!practico]
> Para decir «todos los números entre $2$ y $5$» se usa un **intervalo**. Los corchetes dicen si los extremos entran:
> $[2, 5]$ incluye el $2$ y el $5$ (como «de $2$ a $5$ años, ambos incluidos»); $(2, 5)$ no los incluye. El símbolo $\infty$
> (infinito) no es un número: indica que el trozo no tiene final, así que siempre lleva paréntesis.

| Notación | Conjunto | Nombre |
|---|---|---|
| $[a, b]$ | $a \le x \le b$ | intervalo cerrado |
| $(a, b)$ | $a < x < b$ | intervalo abierto |
| $[a, b)$, $(a, b]$ | $a \le x < b$, $a < x \le b$ | semiabiertos |
| $[a, +\infty)$, $(a, +\infty)$ | $x \ge a$, $x > a$ | semirrectas |
| $(-\infty, b]$, $(-\infty, b)$ | $x \le b$, $x < b$ | semirrectas |

El **entorno** de centro $a$ y radio $r > 0$ es el intervalo abierto $(a - r, a + r)$, es decir, los $x$ con $|x - a| < r$.
Un intervalo $[a, b]$ tiene **longitud** $b - a$, **centro** $\frac{a + b}{2}$ y **radio** $\frac{b - a}{2}$.

**Ejemplo resuelto.** $[-1, 4) \cap [2, 7] = [2, 4)$ (los números que están en los dos: el símbolo $\cap$ es la
**intersección**) y $[-1, 4) \cup [2, 7] = [-1, 7]$ (los que están en alguno: **unión**).

## 6. Aproximaciones y errores

> [!practico]
> Cuando dices que una película dura «dos horas» y dura $1$ h $52$ min, te equivocas en $8$ minutos: ese es el **error
> absoluto**. Pero no es lo mismo equivocarse $8$ minutos en una película que en un viaje de una semana: el **error
> relativo** compara el error con el tamaño de lo medido ($\frac{8}{112} \approx 7\,\%$ frente a menos del $0{,}1\,\%$).

Al usar una aproximación $\tilde x$ de un valor $x$:

- **Error absoluto**: $E_a = |x - \tilde x|$, en las mismas unidades que $x$.
- **Error relativo**: $E_r = \dfrac{|x - \tilde x|}{|x|}$, sin unidades; multiplicado por $100$, en porcentaje.

**Redondear** a $n$ decimales deja un error absoluto de como mucho media unidad del último lugar: redondeando $\pi$ a
$3{,}14$, el error es $|3{,}14159\ldots - 3{,}14| < 0{,}005$. **Truncar** (cortar sin más) puede dejar hasta una unidad entera
del último lugar.

**Cifras significativas.** Son las que aportan información sobre la medida: en $0{,}00450$ son tres ($4$, $5$ y el $0$
final, que indica que se midió hasta esa cifra); los ceros de la izquierda solo sitúan la coma. Un resultado no debe tener
más cifras significativas que el dato menos preciso.

**Notación científica.** $a \cdot 10^n$ con $1 \le |a| < 10$ y $n$ entero: la distancia Tierra-Sol,
$149\,600\,000$ km $= 1{,}496 \cdot 10^8$ km; la masa de un electrón, $9{,}109 \cdot 10^{-31}$ kg. Para multiplicar se
multiplican las mantisas y se suman los exponentes: $(3 \cdot 10^5)(4 \cdot 10^{-2}) = 12 \cdot 10^3 = 1{,}2 \cdot 10^4$.

## 7. Errores típicos

- Creer que $\sqrt{x^2} = x$ siempre (es $|x|$).
- Escribir $|a + b| = |a| + |b|$ (solo vale si $a$ y $b$ tienen el mismo signo).
- Poner corchete junto a $\infty$: $[3, \infty]$ no tiene sentido.
- Confundir «$\pi = 3{,}14$» con una igualdad: es una aproximación.
- Dar el error relativo dividiendo entre la aproximación en lugar de entre el valor real (diferencia pequeña, pero hay que
  saber cuál es cuál).
- Pensar que un decimal muy largo es irracional: $\frac{1}{97}$ tiene un periodo de $96$ cifras y es racional.

## Repaso: lo que debe quedarte dentro de un mes

1. Racional: decimal finito o periódico; irracional: ni lo uno ni lo otro. $\sqrt 2$ es irracional (por reducción al absurdo).
2. $|x|$ es la distancia al $0$; $|a - b|$, la distancia entre $a$ y $b$; $\sqrt{x^2} = |x|$.
3. $|x - a| \le r \iff x \in [a - r, a + r]$.
4. Intervalos: corchete si entra el extremo; con $\infty$, siempre paréntesis.
5. Error absoluto $|x - \tilde x|$; relativo, dividido entre $|x|$.

## Siguiente

[[mat-algebra-secundaria]] trabaja con raíces, potencias de exponente fraccionario y logaritmos, ya sobre los números
reales.
