---
id: mat-geometria-analitica
title: "Geometría analítica: rectas, vectores, circunferencias y cónicas"
area: matematicas
trunk_level: 7
prerequisites: [mat-geometria-basica, mat-algebra-secundaria, mat-trigonometria]
academic_sources:
  - "Gelfand, I. M.; Glagoleva, E. G.; Kirillov, A. A. The Method of Coordinates. Birkhäuser, 1990."
  - "Abramson, J. et al. Precálculo, 2.ª ed. (en español). OpenStax, 2022, sección 8.8 (vectores) y cap. 10 (10.1 la elipse, 10.2 la hipérbola, 10.3 la parábola). https://openstax.org/books/prec%C3%A1lculo-2ed/pages/10-introduccion"
  - "Apuntes Marea Verde (LOMLOE). Matemáticas 4.º B ESO, cap. 9 (geometría analítica) y Matemáticas I, cap. 5 (geometría analítica: vectores, rectas y cónicas). https://www.apuntesmareaverde.org.es/grupos/mat/index.html"
  - "Apolonio de Pérgamo. Cónicas (siglo III a. C.): origen de la parábola, la elipse y la hipérbola como secciones de un cono."
hints:
  - "Concepto: la geometría analítica traduce figuras en ecuaciones y propiedades geométricas en cálculos. Distancia entre puntos = Pitágoras; perpendicular = producto de pendientes −1 o producto escalar cero; que una recta corte, sea tangente o no corte a una circunferencia se decide con la distancia del centro a la recta (o con el discriminante)."
  - "Herramienta: comprueba cada resultado por una segunda vía (sustituir el punto en la ecuación, minimizar numéricamente una distancia, o dibujarlo con matplotlib). Para recuentos de puntos de la red, un doble bucle en Python."
  - "Documentación oficial: docs.python.org/3/library/math.html (hypot, atan2, acos); matplotlib.org (dibujo de rectas, circunferencias y cónicas); Gelfand-Glagoleva-Kirillov, capítulos sobre coordenadas en el plano y ecuaciones de curvas."
exercises:
  - id: distancia-punto-recta
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula la distancia del punto $({{x0}}, {{y0}})$ a la recta ${{r}} = 0$. Respuesta: un número (al menos cuatro cifras
      significativas si no es exacto).
    variants:
      - values: {"x0":1,"y0":2,"r":"3x + 4y - 10"}
        answers: ["sha256:98b1cbe30aa651f403b427093df99db47361d7bb07d00243aed3d8acff4d3a83","sha256:ab20ae5933059a096f5296d1b537d9cc058d9e461755a6ae6bf6e6fe5c57cfae","sha256:131cd7af48691fa657f41ffabd67042b9b0c76499cfd8a1492a06d47d55f7059"]
      - values: {"x0":2,"y0":-1,"r":"5x + 12y + 3"}
        answers: ["sha256:071288aacf87d070c1bfb8a2ed8369c97679e63df271110e68dcef8073a3603d","sha256:e748862ccd3dbb21657f85cbe559bc6348b6794cf50351f029b86f208774ae44","sha256:745f72043ed3b507e8883516423a8dbc290dcd83bb7474338ce32a0fb0204b26"]
      - values: {"x0":0,"y0":0,"r":"6x + 8y - 20"}
        answers: ["sha256:6a2b29287705983344b98334d7c6a672da92c490f17dd3856328ea185ba3f202","sha256:4ab1b9b8f0bbf674735dab67432ec29403092f4e48b0bbf7ac77fc60111ec5d9","sha256:9e5df948760cf876141b0a1bb008e670070d6803c0a1151ae3fb9415c44c18e8"]
      - values: {"x0":-3,"y0":4,"r":"x - y + 2"}
        answers: ["sha256:bb03e20eaf140ed3adfc686e1dfe0f766e59ce558f32c5bd8aa0ad6ca0eb213f","sha256:fbed2dbccc4f904356202b6f249af4e07a4c93fb300f774435a68e9c062279b5","sha256:84eddab8b9c5627f209955fd0b5a9bee751d001a5de57638b8779f4fbeaa8f32"]
      - values: {"x0":5,"y0":1,"r":"4x - 3y + 0"}
        answers: ["sha256:136382476b98d60dfb1e9476da9197a91d30370273b025be52bf0344993c45d7","sha256:644fa3ee32f6152457d537aa96c7c14e4a06ca0b357cdc7a585bd76e5856027a","sha256:c89cae695492f337436e45112fb8eae739c4d4b252b16a2bf81a4ad40ea2f15b"]
      - values: {"x0":2,"y0":7,"r":"8x + 15y - 4"}
        answers: ["sha256:d10ac4b0c52cfe48db742d3148222cc610b3df9198d48c4ea0a45844a426c35e","sha256:4c8f2b9006b91febad4f9644bc2a9379e4cd0fae8b6b48dab14a3b22ff42fcfc","sha256:1653f17c51154968c841a809e421c660e382aafc82ed3f22324b6535fe635be7"]
  - id: radio-de-circunferencia
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el radio de la circunferencia $x^2 + y^2 {{D}} {{E}} {{F}} = 0$? (Completa cuadrados.)
    variants:
      - values: {"D":"- 6x","E":"+ 4y","F":"- 12"}
        answers: ["sha256:a775918e4674ba00565839cbb026f86938096ae675485588fe5d4f9a47ff2738","sha256:fa99ce570097a2fe03f81fe68d81fd777a8b8583f772a395729df8d83b634bea","sha256:3694ee6b7043d1eb01ec7990324f9ad988aa44645198e1df09c0de9d8ca101a6"]
      - values: {"D":"+ 2x","E":"- 8y","F":"- 8"}
        answers: ["sha256:5963d2eb56c68e3af3817e1143ba143efde1dd5cb18d2c5be51279dbd3b1f23e","sha256:e00aade5007f7d27d76a5f8fb9255d13a5b0d975ca6526bbc63b73908febbe55","sha256:eeff9578db677d444144e63ea443dc78916d050cdefbf4102545f6ab7bb1287f"]
      - values: {"D":"- 10x","E":"","F":""}
        answers: ["sha256:9cbb917be9bbf6023a8f3a3403fd68f702cc1b8f97fc23bbd7c75f741a66669a","sha256:d5a160a5067cd914badd0e91e2567538c673d00ec55623701d2cedcc206051f2","sha256:cc4f525876f18404a5e4f15d556fa246401dbddcdaefb7719bb805cc81191e5c"]
      - values: {"D":"+ 4x","E":"+ 6y","F":"- 3"}
        answers: ["sha256:fa6ed823f451b3da9f90320da1c4806c6289deb8d79de218b7fe68759a06bfe3","sha256:f8aa63fd9d34792233aca459770d102a938a1419f6ca02e78d5488f2cad8a36d","sha256:0447a078dbf36f0bde5b70a81fa1b8edd50c842b0b10d1a32694becfa5ee31dd"]
      - values: {"D":"- 2x","E":"- 2y","F":"- 23"}
        answers: ["sha256:1fdc8aad77382d468fe9f9c5c5d1e9c2b8758849ec465edacca35ccfdf63cbc5","sha256:acb0755bf1352abcab9e339545fad15c6970b2769bbb0ac63a1b44f480ac9664","sha256:468abc7ee61ed747140780b0e31c340d32214d40d4d63f769de080cdf55fd73b"]
      - values: {"D":"+ 8x","E":"- 6y","F":""}
        answers: ["sha256:c4172d5bef0f627b1ff9e03b36168f02b00b79c4db45720d4e53a8bead379a86","sha256:981e61aab923fb850c3e3248f0215d81cb859d28c8d72c2c9ae87668723d7f3f","sha256:abdee30edb226ece7ec5d107630b802f4a2464a847d753e7a6b200d9b76f6351"]
  - id: recta-perpendicular
    tier: 1
    prompt: |
      ¿Cuál es la pendiente de una recta **perpendicular** a $y = {{m}}x + 1$? Respuesta: fracción irreducible «a/b» (si es
      entera, solo el número).
    variants:
      - values: {"m":"-\\frac{2}{3}"}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"m":"\\frac{4}{5}"}
        answers: ["sha256:46ce96c534e969ea4b7a9cdb05f5d2dd70e5a2b1ec9cf0c5b41c8a0692928e6b"]
      - values: {"m":"-\\frac{1}{7}"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"m":"\\frac{3}{1}"}
        answers: ["sha256:702c7c3aed27f9669e7f9cfdcc7f0f4b8bc4fe1fd326fcdb4d1cc4019aa2ec35"]
      - values: {"m":"-\\frac{5}{2}"}
        answers: ["sha256:0b9db2ecfb8de65fb248232d099982a827055c98d6372e9b4e1fa81d98dc1cc2"]
      - values: {"m":"\\frac{6}{11}"}
        answers: ["sha256:67b1e38e095505537ef6d588595de5446ec216ef594220ea1cbdee8014ddb9ac"]
  - id: angulo-entre-vectores
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula el ángulo entre los vectores $\vec u = ({{u1}}, {{u2}})$ y $\vec v = ({{v1}}, {{v2}})$, con el producto escalar.
      Respuesta: grados (cuatro cifras significativas si no es exacto).
    variants:
      - values: {"u1":2,"u2":3,"v1":5,"v2":1}
        answers: ["sha256:fa37554a64c0414352db8f489532fc02ff633a48052b59fa2e658cb91352deec","sha256:bf58c20425bad0d8ffed0308495af672bc7f48102a2b603bea56b4d84a95ed4f","sha256:5e13ea48eb2bf1187fe53ee766b8a3492237242bd756c663899c1eebd00f75a5"]
      - values: {"u1":1,"u2":0,"v1":1,"v2":1}
        answers: ["sha256:f6074bf48823270428edaa3818d1d8e11ba447f1e59cb31165b069a2650dff19","sha256:253db6161e4c99aacc82f9073a543f7a63fa75d9469b576341a4354f03012627","sha256:45d5c52d0cc9e5a3d862cc230429b983d7b535a35ef78d65ca11c3332eac09fa"]
      - values: {"u1":2,"u2":1,"v1":-1,"v2":3}
        answers: ["sha256:51f484faba701849b03193d3f0016993f92f42bf6d9d4a8c45dfc2a215919e73","sha256:2a8862653c66d6af0c4a06621b7b3c41901e4ed6086721d2c35253a5d227b5f6","sha256:a41114db1b423960d196c87cd173369963353f921cfbfb6457109e03ef8b2c3b"]
      - values: {"u1":3,"u2":4,"v1":4,"v2":-3}
        answers: ["sha256:c10718a76d2b1a292112f68358859cf5ae4d8b7f1a28f93fb150144bfdc18324","sha256:6585cef3816f7245d6bfb89c0085aaf163db9eff310d7546e337e274ac34607a","sha256:2bd14db9f0ec1e447a61e354b7fa00ab30e8687282bb031e675b085734bd2b45"]
      - values: {"u1":1,"u2":1,"v1":-1,"v2":0}
        answers: ["sha256:81c9321290179071c9a6dfae5353e96033ac1d032fb85a30b7e281468b2a4316","sha256:bfa3b263d11898e0247947d8d9737afbc01fa012b2628e63d226be7f44141730","sha256:d0d0369c8f96c42786118225df1767affe3413a414284834450629f0b7a57be2"]
      - values: {"u1":1,"u2":3,"v1":2,"v2":-1}
        answers: ["sha256:a6aef26c08015dfeb30e1caae837408bab6b1bfa0b5a16bf35ba6d9fb10ca9e3","sha256:3eec704a8e31488ae9afe3145936c10244a5609f7484b99be17e4a7bb6ada0dc","sha256:cfc70e4ce04c2a115cabccc7d7e5e7f44e3ca3fdef673079e4fa16d6992ebd81"]
  - id: interseccion-de-rectas
    tier: 2
    prompt: |
      Halla el punto de corte de las rectas ${{r1}}$ y ${{r2}}$. Respuesta en la forma «x;y».
    variants:
      - values: {"r1":"2x + 3y = 12","r2":"x - y = 1"}
        answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
      - values: {"r1":"x + 2y = 7","r2":"3x - y = 7"}
        answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
      - values: {"r1":"4x - y = 5","r2":"x + y = 5"}
        answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
      - values: {"r1":"3x + 2y = 1","r2":"x - 3y = -7"}
        answers: ["sha256:08165339490e6089b8c9706d04c057083734242352c1c09d94b9091a87e3c9a1"]
      - values: {"r1":"5x + y = 11","r2":"2x + 3y = 7"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"r1":"x - 4y = 7","r2":"2x + y = 5"}
        answers: ["sha256:f2f65cb33cc34b632dc25dba55cd86f9cfb769b206ba6fb4561982e69fd4a6ad"]
  - id: distancia-entre-paralelas
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula la distancia entre las rectas paralelas ${{r1}} = 0$ y ${{r2}} = 0$.
    variants:
      - values: {"r1":"3x - 4y + 5","r2":"3x - 4y - 10"}
        answers: ["sha256:7ca6d9fa781d278f62d94251b25e3dc2e49b26631e4e93be34a6d8e6392d1fff","sha256:31931790719b241b11c966438c66888fa6b51175d67d6778368582ad0eaaf378","sha256:09dc491bbdbeac00c84a7c85563d72b14a524366ca119125f24f0ef8f84b2db2"]
      - values: {"r1":"5x + 12y + 1","r2":"5x + 12y + 27"}
        answers: ["sha256:53947d7d3c6f4fb91edc02db9f371a86f1fd0288a11594bda2e80b96d9fcaf9c","sha256:a022201f38ea71939ef98cdf39551533b19f1942b3a098b017683bcf114119fb","sha256:c7bd7a958d802b17d96b818b8f1b3ecc6733c80432ae3e3bbf73c16455aabd81"]
      - values: {"r1":"6x + 8y - 3","r2":"6x + 8y + 17"}
        answers: ["sha256:2535182a8d9caf981678b8127ac24e1dee0337068ac292c2775b2b6055f83fad","sha256:76e1f73a2a6b294f6f8df78ec9f0fbb1abc62b8e1613727dbec8526b489d97b1","sha256:083331ec8539c41341f7e99b9ae8bd17a31c35e9732e3801dad459897c65f9f0"]
      - values: {"r1":"x + y + 2","r2":"x + y - 2"}
        answers: ["sha256:e0e500f4f6ede4badeac94230d3f8d3b68a3fa97b067fe7c558d97aa79eec03b","sha256:a0648cd2965ed2bc8e08d69b8bd08e23eaad143465c08b8aebf8c112be502436","sha256:8231dc8814d0b848a47e68817db6fd043b4ac0fb5270b6764083e9a4e8473df6"]
      - values: {"r1":"8x - 15y + 4","r2":"8x - 15y - 30"}
        answers: ["sha256:14a01ae5f22872cf526cf1950cc1d4964e9c7829d4ab316b62a50bee4d65841f","sha256:8b161c38df2e848546cca2992c3e1248154333acc5f772c55e0800c0008820b3","sha256:d7a97c2adfe802f1be9dcd933efe91710be9f6f743e9f1c0acde6f9e4f6264b2"]
      - values: {"r1":"12x + 5y + 0","r2":"12x + 5y + 26"}
        answers: ["sha256:1d5414bdcbb36f05f8e834e4e1dfdf1a59e3ff821841a173e70d7aebbd88836b","sha256:f06d0bf1524781fb6a3800d7e266783a929076aae8673dfd139bca2e34a77478","sha256:f7b5f93e3357d46d59379dd1f79b5617d4b6387dfaf9459f9ca44f1430a07b55"]
  - id: circunferencia-por-tres-puntos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La circunferencia que pasa por $(0, 0)$, $({{p}}, 0)$ y $(0, {{q}})$ tiene radio $r$. ¿Cuánto vale $r^2$?
    variants:
      - values: {"p":4,"q":2}
        answers: ["sha256:a0825333453e0919240088b45f3d2837e93df9454fb4ed6058e757bbffd095e5","sha256:222b08c500aaae2d26febed0397158128b7a0ae66a6f80352ad0bc36afaf42b7","sha256:31ab026b1a7bc5a20e9fa21c484273d945dbfe2180a9ed343e19624048c53c1d"]
      - values: {"p":6,"q":8}
        answers: ["sha256:7d8fc4d288fcf66464c48ba6c25aa566b2efbe9132e01824c1acf2e82980196b","sha256:dfdeeb6977edb7a6a0a9b3ddd07039e7b6d4811ec8cae6c5e8f81c7c16229804","sha256:30b4e69ff05800564e43b205cbfcf637656ac3635e8f6c5123c556761c40b825"]
      - values: {"p":10,"q":4}
        answers: ["sha256:b2d3ff135955ccb009bb0b81263d802cc75f98f0f1b0577a3cd7451b8f4c414d","sha256:d09d742fd23969ba2dd316bc93944cc1151aaf0777901f889cd733e0e2991034","sha256:8705adfbc7e4b08e7e93b4330cdefac3e05a198c0a915ed9d012b4ef2c62a6b0"]
      - values: {"p":2,"q":6}
        answers: ["sha256:56015cf854272156d0b726a6bc36f5e7c2f0d7c5adc090153e76a9daa8744a34","sha256:e2926b1686312f69929c72a2f41e808caff3ee363e8bfd2923c9596576941be4","sha256:4388415cee4439f0fd5d171c38a40b557f2a834aa1f734a91719aa660c4d4be6"]
      - values: {"p":12,"q":5}
        answers: ["sha256:526e38f91d5f1b178a5789645528b7a941cb6f3c08289c219fd4b3cd8ecbd420","sha256:642f4857b1ec6fc86ecf4aa4c0cc508972eabd80d46922348ac3aa8e36f39f72","sha256:491b441c26681626ab54f33ab710695a013d607c59fbd638cebc6c23314d8cda"]
      - values: {"p":8,"q":6}
        answers: ["sha256:63288867caef18cf7f9abb0e96be1747335ddf974b3421b3257c9646fa9e6b16","sha256:4ccf48096c71565d566b3a4a585e1cc13463059f80b647d1f5d0bffe2b6bd8c9","sha256:99d57c490c349ab31d534c67618dbb807a03b524c2bfdec4329e2719f2e16e63"]
  - id: tangente
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La recta tangente a la circunferencia $x^2 + y^2 = {{R}}$ en el punto $({{x0}}, {{y0}})$ corta al eje $y$ en un punto. ¿Cuál es su
      ordenada? (Pista: la tangente es perpendicular al radio.) Respuesta: un número (fracción o decimal con cuatro cifras).
    variants:
      - values: {"x0":4,"y0":3,"R":25}
        answers: ["sha256:727909b9e5c1bc5813acb12e2c9cfb3b96028c8cde00e496492c0d9f64358a22","sha256:fffd9a7488aaff5ec7b870dfc2f6122b86396f77512afaa09b2150c4b24f4b1c","sha256:db8aba9400812f1ce22b47d7f457c99c31b38de6cc90f8e17f914d35a0836c97"]
      - values: {"x0":6,"y0":8,"R":100}
        answers: ["sha256:7949de00a4b5b76fb08bf9fd328fd2821636324b4eced02921646230f6240aed","sha256:f94feedef12c2ee844b483fbeba898d53e62f38abe6ffffa22223646afd5838f","sha256:7b08d16b6425285ee89a10600db1e141d77da3a9401adcabc7fe9162e6846d53"]
      - values: {"x0":5,"y0":12,"R":169}
        answers: ["sha256:362c8391bbe0cd9085e730c782a58dd7f6180c51be8dbd23cb66e9cc88f01a8c","sha256:e72195bb16e738b052d28831e8957be63b67df8bac53eaec28b0dccd411c1389","sha256:a476d79c5df80df8750d9fb2cf51f64736bb779ea6c00116a94346bc95b9dfaa"]
      - values: {"x0":1,"y0":2,"R":5}
        answers: ["sha256:f010649022bf8accedbdac00edbcbbc140928b1342e729e8c6e2cba263a53435","sha256:d42b61ef8ee89c35783fb3fae7c0c460d94c2322614ac2565767095c22a77741","sha256:72f111f4c2ea26871f2735fef91a75810431242c12484f8c81c3a3a33ffc027e"]
      - values: {"x0":2,"y0":3,"R":13}
        answers: ["sha256:16bde73b45652e253894973af36b7e9fd3e2847da773860d4014fcb22ed3a298","sha256:a87a87c28c18c7fcf61938927fc5d6dd857c3486eeae6e1be1b1c6e3542d20d4","sha256:336af8176f1a47f4bf29af55334ebe76bfc842c6ebd9897b1aae04f445a83db4"]
      - values: {"x0":8,"y0":15,"R":289}
        answers: ["sha256:8486e486224dc7bf08cbe425863e3c08404a6e8e4a1d5010bdf8112a2c9edef7","sha256:d02ff91d5fa1156ef2514e35f49e5bc2aeaef5d6800d2717cf082e11c586d2be","sha256:2783b1e97bef4b9c816b3896f684f803f461781a5893a0cbe90fcbfa5c2ffa80"]
  - id: recta-y-circunferencia
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La recta $y = x {{k}}$ corta a la circunferencia $x^2 + y^2 = {{R}}$ en dos puntos. ¿Cuánto suman sus coordenadas $y$?
    variants:
      - values: {"k":"+ 2","R":13}
        answers: ["sha256:f95f4c8b0594f0d2bfb4e713b4d0b418386cce2cbdeeda5e39b3e60b45ea022e","sha256:4a472a9cdf57404060c4c7d24537265fd701d9901b89bef5b506dad36c16f687","sha256:466947b543578fe3d9fedbfe8d54f28781c86d730674bddb54226162a68cdf05"]
      - values: {"k":"+ 2","R":20}
        answers: ["sha256:464ca43e858fe5c7badd13be1e440abd102a997a50ba46ad995210f0398c5f82","sha256:40e03870462b0096aae4e1e1e7807163cdc8b031189a01286643bf8035dcd12b","sha256:cdf13fab77b222b38582493ccd8cba4df6027b16c38e6bacb0d37a082ce632aa"]
      - values: {"k":"- 1","R":25}
        answers: ["sha256:a2a26d0583d82e40d8676fa0d6f68088309633fdd8e733c4dfb9df189bf44658","sha256:18c8ff7cd5b52d196c429f315d0451c0eba4e07a87c1fa78923929422f962b9c","sha256:d4c0f88e5d9bf8716f5538db2f80dfcd7cfb11d754c64501fe0b0e8fc21086b3"]
      - values: {"k":"+ 3","R":29}
        answers: ["sha256:9cedd830dc70b394ed6c4ad615ef3f7ca058add8f5f47aff8c6d4adcf3632dea","sha256:fb99d80a57a9d2888824dc03f7c59cb1da811fd944a576a94838c7be694f830f","sha256:66460633a8363edb17bf5f9bbd3e02e4d6358f7f8ec5c2c8d6dfd7af83966b35"]
      - values: {"k":"","R":18}
        answers: ["sha256:719188c11d4aba7dbc11ae30cde51aacad753d3930656b7a6423826a54d3dcd0","sha256:8f3a95aa270a4db4679feedc1eb4fdfef77c77dac539c7f42e1d5c46782c55dc","sha256:a3b16b1c066392910a8d8d2ba6445a0ac0ab959c5a1eedb127893a49e16d816e"]
      - values: {"k":"+ 1","R":41}
        answers: ["sha256:c16dfb11cb5d76ad254e1ae12e388122f684749a350a40b0045aba7164f7a960","sha256:9e9c41224f4c3f2c92feee49f4006be8b2f1f817f5ccc619baafb5c2d54a56e1","sha256:38e7adfc7f07a3115f0d7d0335db7794f05df410921edb26fd9fc9a729b930c2"]
  - id: foco-de-la-parabola
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La parábola $x^2 = {{c}}y$ tiene su foco en $(0, p)$. ¿Cuánto vale $p$?
    variants:
      - values: {"c":12}
        answers: ["sha256:69f34ecd0f4de6543dccdbd1a3fcba37e772f8849f24c6bdd9530493b007470d","sha256:31a98fc8162aa770f3f0e0a9216087100367f1c70cc58f2ecf1db2d381a7dd2f","sha256:fea4aaf434f09cd3d7687a7e7f76360475b16329e55c3db5c62cf45b11cd4156"]
      - values: {"c":8}
        answers: ["sha256:8009a44d0a30d491db36717fd6a4188f0b41e373cd96f1890f09685a6d0ed874","sha256:0ade0cf1b42654e5c2b9dbdb3d925d5e8e246b3829646b7f976f11032810d668","sha256:be409b1c5c989300dffc4338881d41c27833bd32633bdcbfeee34bb270c8bee5"]
      - values: {"c":20}
        answers: ["sha256:372be5f1a0363e0db565036fb1d0715b7c56282384a184ad5e2921b30c0121cc","sha256:7e4e14d8bf66a80ed0535975ec4fda5b3bb67b810c98f98e8c90238c50e89eb3","sha256:c9969a60fd41aace9b68ed93d6e4993190b2d5395cf6bdfdf3847c5d105737e2"]
      - values: {"c":2}
        answers: ["sha256:03bb9d7ecd1763bf8905449125320db5511e4b009c063f5d0ff8524295420e81","sha256:658882556918eb6bde15c8036d448bdb1e75f2f4b599a3af878d39ef423be591","sha256:05c90072fd5d84ead80b7209e3d8008d46c0734a2513971d440073c1b9e76ec6"]
      - values: {"c":6}
        answers: ["sha256:a8c1c52f5edf950bb2b8f79b88e575859d77e8953edd88e57412795873ab9a57","sha256:c021910615734777df663c10ad7f7bb0f320c141d2a7ac9129ad15d95495b099","sha256:3586b40c5e2fbf57d06abfbae94e099e14f8b2e453f82ad44200bcf790991986"]
      - values: {"c":1}
        answers: ["sha256:36ff2b501abaf0dfd08a0b2f9ce5c404b9a65eb67c63e35064ae995497c2034c","sha256:07a4f167c03cf17faedf41410b9df487dc62f0156e9c342c6e6bf2afe817d148","sha256:b92fffb49e21e6a21f0d23c71017b7bb08dcdddf29bc31e94d1142be01cdf9e7"]
  - id: distancia-focal
    tier: 3
    type: numero
    sig: 6
    prompt: |
      La elipse $\dfrac{x^2}{{{a2}}} + \dfrac{y^2}{{{b2}}} = 1$ tiene dos focos. ¿Cuál es la distancia entre ellos?
    variants:
      - values: {"a2":25,"b2":9}
        answers: ["sha256:c97e8591c5cae7e8d9087c5e7e399f842f7b4db6fbddec85014b9819aab59f2c","sha256:2ef82edd045599477b4d7752ed6c3bde16886495fa25813aca203a2bad5b6515","sha256:367106f458ab0893ae4b83b0182020daa43ce53d002109c445933aa7ecf2b3c2"]
      - values: {"a2":100,"b2":36}
        answers: ["sha256:3403831713a85b31db907481b91d4db301ad649c0d66ae513eab7125701ec8db","sha256:5e707620a580526c5e9e89be4b8e39882d166886062a898f44aa307241047cf2","sha256:41ade946dfae4c0c0461abfff395ad861d6841c367067360bfe7dd603f4ffab0"]
      - values: {"a2":169,"b2":25}
        answers: ["sha256:99578573388218c86ce2d5bf2459baaadd73ffc1c3a1dd79d978c1efcda6e4c5","sha256:776a80f3f58571319620cc8f408688f19dd321e9f580d20a3af93f0b895e25a1","sha256:611bae86652b264a9be5694455186f400f3c81f169364d730f287064c55ff9c2"]
      - values: {"a2":16,"b2":7}
        answers: ["sha256:d01833a53f5cfda9487c5f5629128eceb18745fece340908daef7d1dda405a7f","sha256:fe2523852a92b3a2e56d26f311155471902c472011416b2be999d1bf9f8b33c1","sha256:5a60fc723d7508981a6889fb825dabdcad9a55403455451d93a95e6e12efbe18"]
      - values: {"a2":49,"b2":24}
        answers: ["sha256:1a21d7ce6b9bcfad59651abaff8acdb45f72cacaa54671ed356bef1bf78418b1","sha256:ea745b7410dc37dc7f29b6f2d5cf84a463604562788f452d165a8a017419bc06","sha256:d21df2926f141618fc2ce8790282de92b3dcaddd9d291e85b99139ddea319108"]
      - values: {"a2":36,"b2":11}
        answers: ["sha256:d2fc3db730ae4534b2e698dbd6bfdc9f6f7fde683b4a1db200023d7c3fe4b05e","sha256:c0c40b851593adef71fda8110c3badf80382add7c17051fb2747ac3777ef0c45","sha256:69c0bffd9568a6eb0fd03fb2d0013a18ac98a65f8d80cc279c0fcc552597cf14"]
  - id: area-de-la-elipse
    tier: 3
    type: numero
    sig: 6
    prompt: |
      El área de la elipse $\dfrac{x^2}{{{a2}}} + \dfrac{y^2}{{{b2}}} = 1$ es $k\pi$. ¿Cuánto vale $k$?
    variants:
      - values: {"a2":25,"b2":9}
        answers: ["sha256:ac4d4af9fec3cec7265420c30f5ef4e9b9e1b449f35d2af330d22b518c6b2d6c","sha256:8a08fd2e56ff19f678670fffccbd46769e41a7a99633662591a5a545d6c9bee3","sha256:477820cbb5a0125126107ba4ba26db1148d0be748fa9e1da5a7bd15d9a361774"]
      - values: {"a2":16,"b2":4}
        answers: ["sha256:ea925435f7d9afac77783b432fe36625ceb7963c58659154a5c914acac469a4c","sha256:1d1f1f81aae3e83eb6e91aa43cf07afff697a197b2b332e01b38af4a191d47da","sha256:4503278c6224d0b31ef2dd42d843f5289e960436d66e6b11ca711c9d8d63566d"]
      - values: {"a2":49,"b2":9}
        answers: ["sha256:65d709eb0d405d9f83254b115d9aace89453206bb2753a071f53240cfffe08e9","sha256:89e968118c4bb923bd1f7a820b64c112427d24ac99ac4e2702440e087d602a29","sha256:ca26eaeb9487dd53328155360389418d3f6baef7bb9cab062a28a35c4fc8d807"]
      - values: {"a2":100,"b2":1}
        answers: ["sha256:9bdaeb57cc9eb0abd948534fed5475f075bd0f2f23992b3cec1c0d5799202be8","sha256:fa819f8fea3d162f8cc6763ace100441976afc5d57f4f29eaa20c76a217d1b32","sha256:fe8cb06b09d7cf91118ce02253254f3eed78687d4c5504873d64d90b414bd4db"]
      - values: {"a2":36,"b2":25}
        answers: ["sha256:4ad339eb0bbe772b86cc808a1ae92bbaea11ad3a1eb321b5d6d92796b9df3a41","sha256:c236db3ab599870e96f485950960f0ff0757d653d6f298b0129482f2b0e65418","sha256:52b6c5c309513d1d20994f573a9bbbddc0b573bdbb8ac4f1e69446cd09fbeaf1"]
      - values: {"a2":64,"b2":9}
        answers: ["sha256:a4ae56207efa26ad58592536dd478bba3dda16367b01d53d41f0397d776aeb37","sha256:124553aa0a7af06f730c69ffe5051d9c34f36b2c2345fdc251adac1fcadde040","sha256:d234485c736d58882f11699e9a55172913998b408b2416d2682fb49a720087ad"]
  - id: hiperbola
    tier: 3
    type: numero
    sig: 6
    prompt: |
      En la hipérbola $\dfrac{x^2}{{{a2}}} - \dfrac{y^2}{{{b2}}} = 1$, ¿cuánto vale la distancia $c$ del centro a cada foco?
    variants:
      - values: {"a2":16,"b2":9}
        answers: ["sha256:db2741ebe3a4a2da20cd912ca80583181b7467818d79e00ad2a584a725a80f52","sha256:67427bbb0ba8ab235d3cd9f158ddc752ed76ec545c305791e27650f98f72d3cd","sha256:e37bc8d371270c107e309c44d0a76080d7cf15a28055a528525a7fcb0a8d06c5"]
      - values: {"a2":25,"b2":144}
        answers: ["sha256:3fc6a7e666e1745f2c80571bd52627dd18513c9a9196acdc91a140ab4a004be2","sha256:885ff5e2430f3516cf6347e5dbd52b2a19a6b6b9f6cf22fff98bde3e1f0096d8","sha256:4a94a7f43569f2ccf8004ea0c84b428325be950e8e4524a71e14411c0ec706ec"]
      - values: {"a2":36,"b2":64}
        answers: ["sha256:68ff797a94c31c63d4fee58a2fa2c2cb30f2b42746fb8fd015cd104edf10c0a0","sha256:ca91200ca8775d5204b6eac1c9a8d3c20c4cbcbb8f751318fc5cd97a7e4b4c8a","sha256:da115846740f2471f9f9ae1b5cac7096c5101a3d1a20a2fa5709c473d46e5582"]
      - values: {"a2":9,"b2":40}
        answers: ["sha256:9703799f97c7f6187811e93578d638857cf77fcec08a8034a913075ca0431cfc","sha256:61bd2a41a1269aa11b36d2d288656af182599f0b866f25821ea7ac76d5c1e304","sha256:cd73448cce4c774e7d670d6dfa13d185b5bdcaec066e1db5db6ffadac640538d"]
      - values: {"a2":64,"b2":225}
        answers: ["sha256:cf84978ca65d0356ca290bdbaf6e410edfd87e51f4e647fa25be2bc48e748f63","sha256:ec8de7cf80b2a59204bafd1eaca65ab26ef5914bb9cd2d4d31b03905ec01002e","sha256:f6575f15a77dbdf6073a7392d01ec6d7d4ed57caa03afd284db773e09d624b32"]
      - values: {"a2":4,"b2":5}
        answers: ["sha256:394bbbc5eae10917be852e598c313e0dd5fe7f7ec10d68b6571f419133b047c4","sha256:2ff9a9eecb986ad04ed71afb16a528c1b6509e1797caf47a0830b56729c2762d","sha256:114719a8f20233d8db7ba3750efdf164e9f01fa7f255c432663fd115ab1e277f"]
  - id: trilateracion
    tier: 3
    prompt: |
      Tres balizas en $(0, 0)$, $({{L}}, 0)$ y $(0, {{L}})$ miden las distancias a un receptor: los cuadrados de las distancias son
      ${{d1}}$, ${{d2}}$ y ${{d3}}$ respectivamente. ¿Dónde está el receptor? Respuesta en la forma «x;y».
    variants:
      - values: {"L":10,"d1":25,"d2":45,"d3":65}
        answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
      - values: {"L":10,"d1":40,"d2":20,"d3":100}
        answers: ["sha256:c33865f6cdf22951fcde8ccbd7fc15aa0acfe84dde5dbccc28aa95d2e4b5c4f5"]
      - values: {"L":10,"d1":50,"d2":130,"d3":10}
        answers: ["sha256:fef135820449037b9709cded308d163d11d38ecfaddce0665fa33d01a151a875"]
      - values: {"L":12,"d1":50,"d2":74,"d3":74}
        answers: ["sha256:98b6417c1c7ba8003e9b2fbd5443a10c00f801f5215e2d7ee13d2543f03a7024"]
      - values: {"L":12,"d1":85,"d2":181,"d3":13}
        answers: ["sha256:20a5b8e89d4892dbd37343584661e6a03ea946148c8474fb962e501872f5280b"]
      - values: {"L":10,"d1":65,"d2":5,"d3":145}
        answers: ["sha256:cc087cc897f09d15be4197ca3181a4c3ce34bea071527e430c8de90a814dae1c"]
  - id: area-con-determinante
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Calcula el área del triángulo de vértices ${{A}}$, ${{B}}$ y ${{C}}$.
    variants:
      - values: {"A":"(1, 1)","B":"(7, 2)","C":"(4, 8)"}
        answers: ["sha256:c363a31f1b5ffc035aebee98c55adcaa9ab09ba5f9357b7a92768c2e29e5d419","sha256:4ffe3cbddcc9abdc5b6f46624e10a3b6d4400e79d542df351362ad5178215bfe","sha256:fb8f0a12319d6c72e0d4be36e5df8ee01c775ac3e0d97618e85228b404479b89"]
      - values: {"A":"(0, 0)","B":"(5, 1)","C":"(2, 6)"}
        answers: ["sha256:9ecc5e535d0b25d949d9f3451a5c19ef1a121bbe5e38d609195a061575d022c5","sha256:a0f488fc5bb27f4f465dff4208867571b8f5ab90eff04dea32e948e7f49ae330","sha256:4d1a597c916b8463cc75eabe86eebf655d3f6a8816ff4fcbc3441a64adbb8852"]
      - values: {"A":"(-2, 1)","B":"(4, -1)","C":"(3, 5)"}
        answers: ["sha256:c6005edc996261743c36a01395452f2a635b87aa1862fa097be8aee54ea6d5fc","sha256:194c99b393cb3adc4d4a93a2acc4434f561036b731e83cf570eb8c7641e93198","sha256:ef37437de4eb17d1a591935788529277274b363fa5588140bc1e6548dd18e111"]
      - values: {"A":"(1, -3)","B":"(6, 2)","C":"(-1, 4)"}
        answers: ["sha256:091916a3f80fc78203a88f0df3317be11e2c10e80c193dc60ebae005a1ec12b2","sha256:c252ca5ed9b91510a7662970138e90c3fd55c190344195588aab4f14218acd72","sha256:71c267fc55e66f44d55bb242310d2f423fc640a45e18ac45dd83f6bcc8377dec"]
      - values: {"A":"(0, 2)","B":"(8, 0)","C":"(3, 7)"}
        answers: ["sha256:baeaac3a359fe61e2b61d62bd71ed460b08931cf1e475b1fea651206373d72bf","sha256:9ae626b7f3b2f6c291df3a91dcd104b747de941ef42cfdb74f32ebd045b45c0f","sha256:212789a8519737fc3ccef707cbb33e633ca5e6975f2b455ce9636cb1abe15349"]
      - values: {"A":"(2, 2)","B":"(9, 3)","C":"(5, 10)"}
        answers: ["sha256:00c3ea1717d1de6d92d7371a06b2e502bfe2eb9ceb72f5010bef1c5b5bac2ea5","sha256:6bd9d7c66d85a401c6822cf88f1a95f5c5cb7b5ba8d7b7a1bc2cec48640e3696","sha256:a34bae970c47a3377f52aa11194d8834dcd191ae08beca8ebcdb43fb65e79875"]
  - id: puntos-de-la-red
    tier: 3
    type: numero
    sig: 8
    prompt: |
      ¿Cuántos puntos de **coordenadas enteras** $(x, y)$ cumplen $x^2 + y^2 \le {{r2}}$ (dentro o sobre la circunferencia de radio
      ${{r}}$)? Respuesta: un entero.
    variants:
      - values: {"r":12,"r2":144}
        answers: ["sha256:123561fde23233e1baaad5d1bf6204638d4c918ab7c976afcbd9e32492df7581","sha256:15d344dcb864358df3921f39f86ed0a48b4b4b9e85b1ad8c710b1cafd40f2311","sha256:47583e8bb3ccf48c90c6c30722f5cf6517d0ce3d8f8ce49f06ebeff55f7af8c9"]
      - values: {"r":9,"r2":81}
        answers: ["sha256:7402cf387d614b0e9e49d4e5c078561a9d8e06279be8fc401436ed2e432ce7dd","sha256:c55efb30ec4aac86edeeabf574293b17fc3d0103ae0c14280a9042bd8f36fd28","sha256:b9a909178df8847bf8fe368d421cd4bfd699ec562182f3ac8e360e4e2e5f60a0"]
      - values: {"r":5,"r2":25}
        answers: ["sha256:7acec573999bc45b43f499d213cac0a12d1ecbfcf5cb3e9f1156752ba60d0264","sha256:d7cd03c2a4e7ee3ec3ecf37df69f86cd812182d7d90915c39d0bb4bf97a12707","sha256:4c3901b4229997080f93f3265dbaca407b3a03c696bb4f056af953288d98bacf"]
      - values: {"r":7,"r2":49}
        answers: ["sha256:610ed882a70861a29f88c7e0202bcb39d2df8bd57ab62531aaccb143f0576c9f","sha256:520216e60b20bb677aff4138e71ecc30e9384f1ba74d2dcfe5ad54f8eca21882","sha256:083eebdce3e61c45fab66506b4cb76bbce7f197eb12e1043b7db584c3d7287d4"]
      - values: {"r":15,"r2":225}
        answers: ["sha256:ccd578681bf98c8a26a4fcec69d140762c9ade5921cb9962b46a36cf15a339fa","sha256:9c7c893a3ddd8d1a2da9220397687cdc990af93f1996bfed5581bbd53553adc5","sha256:d9238374fea6377c6b03d6fa67b75dc97ef5e846bb6333e703137c2eaef476cf"]
      - values: {"r":20,"r2":400}
        answers: ["sha256:2c44a7013e4a9d6c2879e17ee93ee530b792dbe649f50cbd87a368cb2fcdff93","sha256:38347033374a69ce6328c3ad6eb28b7677251f6918d4371a963fc5013edf8813","sha256:81ddc75a7e3c3d55d2c0015d45ef8045a734246ca49067ac12f18cb01c9b9d9e"]
  - id: r-centro-signo
    tier: 1
    review: true
    prompt: |
      ¿Cuál es el centro de la circunferencia $(x + 2)^2 + (y - 5)^2 = 9$? Respuesta «x;y».
    answers: ["sha256:a51d9b712489823e55107f918de66becfc484639e6adc72b2fdcab25183ffd5b"]
  - id: r-perpendiculares
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué par de vectores es perpendicular?
    options:
      - |
        $(2, 3)$ y $(3, 2)$
      - |
        $(2, 3)$ y $(-3, 2)$
      - |
        $(2, 3)$ y $(4, 6)$
      - |
        $(2, 3)$ y $(-2, -3)$
    answers: ["sha256:f823f41285186c7f6d45fab91e874d06faf119e46ea6ae9f626a15d8ce7b13ed"]
  - id: r-tipo-conica
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué cónica es $\dfrac{x^2}{4} - \dfrac{y^2}{9} = 1$?
    options:
      - |
        Circunferencia
      - |
        Parábola
      - |
        Hipérbola
      - |
        Elipse
    answers: ["sha256:1aae27b2d607b692c2433320d105eec6dabbd15fd15ee2861d69324a115b706e"]
  - id: r-pendiente-general
    tier: 1
    review: true
    prompt: |
      ¿Cuál es la pendiente de la recta $2x + 5y - 7 = 0$? Respuesta «a/b».
    answers: ["sha256:ba3c29b0ba8b35f2977b47a5a9759dc86c0d8115e5bf7dca109c4da3bd2e1967"]
  - id: r-excentricidad
    tier: 2
    type: opcion
    review: true
    prompt: |
      Una órbita elíptica tiene excentricidad $0{,}95$. ¿Cómo es?
    options:
      - |
        Muy alargada
      - |
        Casi una circunferencia
      - |
        Es una parábola
      - |
        Es una hipérbola
    answers: ["sha256:062226a44eef6bf26c2e8fe9a7c5aadef1d8e67582b865aca594c270ca5a6f59"]
  - id: r-gps-cuatro
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué un receptor GPS necesita al menos **cuatro** satélites y no tres?
    options:
      - |
        Porque la Tierra es redonda
      - |
        Porque los satélites se mueven
      - |
        Por redundancia, sin más
      - |
        Porque además de las tres coordenadas hay que averiguar el error del reloj del receptor
    answers: ["sha256:20045f306696ccd354980ec54ec3d3332dddaa447956cb8d255f9abfbd8dda32"]
---

# Geometría analítica: rectas, vectores, circunferencias y cónicas

Hacia 1637, Descartes y Fermat, cada uno por su lado, tuvieron la misma idea: **poner números a los puntos**. Con coordenadas, una curva se convierte en una ecuación y un problema geométrico en un problema de
álgebra. Esa traducción es la base del cálculo, de los gráficos por ordenador, de la robótica ([[rob-cinematica]]), del GPS y de casi toda la ingeniería. Este nodo la desarrolla
para el plano (con una mirada al espacio) y estudia las curvas que más aparecen: la recta, la circunferencia y las **cónicas**.

## Objetivos

Al terminar sabrás:

1. Calcular distancias, puntos medios, pendientes y ángulos con coordenadas.
2. Escribir la ecuación de una recta de varias formas, y estudiar posiciones relativas, intersecciones y distancias punto-recta.
3. Operar con **vectores** del plano y usar el **producto escalar**.
4. Escribir y analizar circunferencias, y estudiar recta y circunferencia (secante, tangente, exterior).
5. Reconocer, a partir de su definición geométrica y de su ecuación, la parábola, la elipse y la hipérbola.
6. Aplicar estas ideas a trilateración, órbitas y problemas de diseño.

> [!question] Test de entrada
> 1. ¿Cuál es la distancia entre $(0, 0)$ y $(3, 4)$? 2. ¿Cuál es la pendiente de la recta por $(1, 2)$ y $(3, 6)$? 3. ¿Qué punto está en medio entre $(2, 4)$ y $(6, 8)$?
>
> Respuestas: $5$; $2$; $(4, 6)$.

## 1. Para qué sirve

- **GPS y localización**: la posición se obtiene intersectando circunferencias (esferas en 3D) centradas en satélites o balizas.
- **Gráficos y videojuegos**: detectar colisiones, calcular qué se ve y qué no.
- **Robótica y visión**: ángulos, distancias y proyecciones de un brazo o de una cámara.
- **Astronomía e ingeniería**: órbitas elípticas, antenas parabólicas, arcos y puentes.

## 2. Distancia, punto medio y pendiente

> [!practico]
> Es como dar direcciones en una ciudad de calles en cuadrícula: «$3$ manzanas al este y $4$ al norte». Con dos números por
> punto, todo se puede calcular: la distancia en línea recta (Pitágoras: $5$ manzanas), el punto de encuentro a mitad de
> camino (la media de las coordenadas) o lo empinada que es una calle (la pendiente).


En el plano con ejes, un punto es $(x, y)$. La **distancia** entre $P_1 = (x_1, y_1)$ y $P_2 = (x_2, y_2)$ es Pitágoras sobre $\Delta x$ y $\Delta y$ (ver [[mat-geometria-basica]]):

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$

El **punto medio** es $\bigl(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\bigr)$. La **pendiente** del segmento es $m = \frac{y_2 - y_1}{x_2 - x_1}$ (si $x_1 \ne x_2$). Con coordenadas se **demuestra** con álgebra lo que
parecía solo geométrico: por ejemplo, un triángulo con vértices $A, B, C$ es rectángulo en $A$ si y solo si $|AB|^2 + |AC|^2 = |BC|^2$.

## 3. La recta

> [!practico]
> Una recta queda fijada por dos datos: **dos puntos**, o **un punto y una dirección**. Las distintas «formas» de su
> ecuación son maneras de escribir esos dos datos; se elige la que más cómoda resulte para el problema, igual que una
> dirección se puede dar con calle y número o con coordenadas del GPS.


Formas equivalentes de la ecuación de una recta:

- **Explícita**: $y = mx + n$ (pendiente $m$, ordenada en el origen $n$).
- **Punto-pendiente**: $y - y_0 = m(x - x_0)$.
- **General**: $Ax + By + C = 0$. El vector $(A, B)$ es **normal** (perpendicular) a la recta y la pendiente es $-\frac{A}{B}$.
- **Paramétrica**: $(x, y) = (x_0, y_0) + t\,(v_1, v_2)$, con $\vec v$ un vector **director**; $t$ recorre la recta.

**Ejemplo resuelto:** la recta por $(1, 2)$ y $(4, 8)$ tiene $m = \frac{6}{3} = 2$ y ecuación $y - 2 = 2(x - 1)$, es decir $y = 2x$. La perpendicular a ella por $(0, 5)$ tiene pendiente $-\frac{1}{2}$:
$y = -\frac{x}{2} + 5$.

**Posiciones relativas.** Dos rectas son **paralelas** si tienen la misma pendiente (o coeficientes $A, B$ proporcionales), **perpendiculares** si $m_1 m_2 = -1$ (equivale a $A_1A_2 + B_1B_2 = 0$) y, si no, **se cortan** en un punto que se halla
resolviendo el **sistema** de sus dos ecuaciones (ver [[mat-algebra-basica]]). El **ángulo** $\theta$ entre dos rectas cumple $\tan\theta = \left|\dfrac{m_1 - m_2}{1 + m_1 m_2}\right|$: con pendientes $1$ y $3$, $\tan\theta = \frac{2}{4} = 0{,}5$ y $\theta \approx 26{,}57^\circ$.

### Distancia de un punto a una recta

$$
d(P_0, r) = \frac{|A x_0 + B y_0 + C|}{\sqrt{A^2 + B^2}} .
$$

> [!formal] Con rigor: de dónde sale la fórmula
> *Idea de la demostración.* Si $Q = (x_1, y_1)$ es un punto cualquiera de la recta, la distancia es la longitud de la **proyección** de $\overrightarrow{QP_0}$ sobre el vector normal $(A, B)$:
> $\frac{|(x_0 - x_1)A + (y_0 - y_1)B|}{\sqrt{A^2 + B^2}}$, y como $A x_1 + B y_1 = -C$ se obtiene la fórmula. $\blacksquare$

**Ejemplo:** distancia de $(4, -1)$ a $2x - y + 3 = 0$: $\frac{|8 + 1 + 3|}{\sqrt5} = \frac{12}{\sqrt5} \approx 5{,}37$. La **distancia entre dos paralelas** se calcula con un punto de una de ellas.

## 4. Vectores en el plano

> [!practico]
> Un **vector** es una flecha: dice cuánto y hacia dónde (un desplazamiento, una velocidad, el viento). Dos flechas se suman
> poniendo una a continuación de la otra. El **producto escalar** es un número que mide cuánto «apuntan en la misma
> dirección» dos flechas: es grande si van juntas, cero si son perpendiculares y negativo si van en sentidos opuestos. Con
> él se calculan ángulos sin transportador.


Un **vector** $\vec u = (u_1, u_2)$ tiene módulo $|\vec u| = \sqrt{u_1^2 + u_2^2}$, dirección y sentido. Se suman por componentes y se multiplican por un escalar: $\vec u + \vec v = (u_1 + v_1,\, u_2 + v_2)$,
$k\vec u = (ku_1, ku_2)$. El vector de $P$ a $Q$ es $\overrightarrow{PQ} = Q - P$.

**Producto escalar:**

$$
\vec u\cdot\vec v = u_1 v_1 + u_2 v_2 = |\vec u|\,|\vec v|\cos\theta ,
$$

con $\theta$ el ángulo entre ellos.
> [!formal] Con rigor: demostración con el teorema del coseno
> *Demostración de la igualdad.* Por el teorema del coseno (ver [[mat-trigonometria]]) aplicado al triángulo de lados $\vec u$, $\vec v$ y $\vec u - \vec v$: $|\vec u - \vec v|^2 = |\vec u|^2 + |\vec v|^2 - 2|\vec u||\vec v|\cos\theta$.
> Desarrollando el primer miembro en coordenadas, $|\vec u|^2 + |\vec v|^2 - 2(u_1v_1 + u_2v_2)$; igualando, sale el resultado. $\blacksquare$

**Consecuencias:** $\vec u \perp \vec v \iff \vec u\cdot\vec v = 0$; el ángulo es $\theta = \arccos\frac{\vec u\cdot\vec v}{|\vec u||\vec v|}$; la **proyección** de $\vec u$ sobre $\vec v$ vale $\frac{\vec u\cdot\vec v}{|\vec v|}$.
**Ejemplo:** $\vec u = (1, 2)$ y $\vec v = (3, 1)$ dan $\vec u\cdot\vec v = 5$, $|\vec u||\vec v| = \sqrt5\sqrt{10} = \sqrt{50}$ y $\cos\theta = \frac{5}{\sqrt{50}} = \frac{\sqrt2}{2}$: $\theta = 45^\circ$ (comprobación con
las pendientes: $\arctan 2 - \arctan\frac13 = 63{,}43^\circ - 18{,}43^\circ = 45^\circ$).

**Área de un triángulo** de vértices $A, B, C$: $\dfrac{1}{2}\left|(B - A)_x(C - A)_y - (C - A)_x(B - A)_y\right|$ (en [[mat-algebra-lineal-1]] reaparecerá con otro nombre). Es la «fórmula del cordón de zapato» (*shoelace*) y se usa para calcular
el área de un terreno a partir de las coordenadas de sus esquinas.

## 5. La circunferencia

> [!practico]
> Una circunferencia es «todos los puntos a la misma distancia de un centro», como el alcance de una antena o la cuerda de
> una cabra atada a una estaca. Su ecuación es solo eso escrito con la fórmula de la distancia. Cuando aparece «desordenada»
> ($x^2 + y^2 - 4x + \dots$), completar cuadrados devuelve el centro y el radio.


Es el conjunto de puntos a distancia $r$ de un centro $(a, b)$: $(x - a)^2 + (y - b)^2 = r^2$. Desarrollada, $x^2 + y^2 + Dx + Ey + F = 0$, que representa una circunferencia con centro $\left(-\frac D2, -\frac E2\right)$
y $r^2 = \frac{D^2 + E^2}{4} - F$ siempre que esto sea positivo (**completando cuadrados**).

**Ejemplo resuelto:** $x^2 + y^2 - 4x + 6y - 12 = 0$: $(x - 2)^2 + (y + 3)^2 = 12 + 4 + 9 = 25$; centro $(2, -3)$, radio $5$.

**Por tres puntos** no alineados pasa **una única** circunferencia: se sustituyen los puntos en $x^2 + y^2 + Dx + Ey + F = 0$ y se resuelve el sistema de tres ecuaciones.

### Recta y circunferencia

Se compara la distancia $d$ del centro a la recta con el radio: $d < r$, **secante** (dos puntos); $d = r$, **tangente** (uno); $d > r$, **exterior** (ninguno). Equivale al signo del discriminante al sustituir $y$ de la recta en la ecuación de la circunferencia.
La **tangente en un punto** es **perpendicular al radio** en ese punto. **Ejemplo:** la tangente a $x^2 + y^2 = 25$ en $(3, 4)$ es perpendicular al vector $(3, 4)$: $3x + 4y = 25$.
Una recta $y = x + k$ es tangente a $x^2 + y^2 = 8$ si $\frac{|k|}{\sqrt2} = 2\sqrt2$, es decir, $|k| = 4$.

## 6. Las cónicas

> [!practico]
> Corta un cono de helado con un cuchillo: según la inclinación del corte, el borde es una **circunferencia**, una
> **elipse** (un óvalo), una **parábola** o una **hipérbola**. Las cuatro aparecen en la naturaleza y en la técnica: las
> órbitas de los planetas son elipses, el chorro de una fuente es una parábola y la sombra de una lámpara con pantalla
> cilíndrica sobre la pared dibuja una hipérbola.


Al cortar un cono con un plano se obtienen la **elipse**, la **parábola** y la **hipérbola** (Apolonio, siglo III a. C.). Cada una tiene una definición como **lugar geométrico**, de la que sale su ecuación.

### Parábola

Puntos que equidistan de un punto (**foco**) y de una recta (**directriz**). Con foco $(0, p)$ y directriz $y = -p$: $\sqrt{x^2 + (y - p)^2} = y + p$, y elevando al cuadrado, $x^2 = 4py$.
La gráfica $y = ax^2$ del nodo de funciones es una parábola con $p = \frac{1}{4a}$. **Propiedad reflectora:** los rayos paralelos al eje se reflejan **todos hacia el foco**; por eso las antenas parabólicas, los
telescopios y los faros usan esta forma.

### Elipse

Puntos cuya **suma** de distancias a dos focos $F_1, F_2$ es constante, $2a$. Con focos en $(\pm c, 0)$ y $b^2 = a^2 - c^2$:

$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 .
$$

Tiene semiejes $a$ (mayor) y $b$, **área** $\pi a b$, y **excentricidad** $e = \frac{c}{a} < 1$ (una circunferencia es $e = 0$). **Ejemplo:** $a = 13$, $b = 12$: $c = 5$, $e = \frac{5}{13}$. **Kepler:** los planetas describen
**elipses con el Sol en un foco**; la de la Tierra tiene $e \approx 0{,}017$ (casi una circunferencia) y la del cometa Halley $e \approx 0{,}97$ (muy alargada).

### Hipérbola

Puntos cuya **diferencia** (en valor absoluto) de distancias a dos focos es constante, $2a$:

$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 + b^2, \qquad \text{asíntotas: } y = \pm\frac{b}{a}x .
$$

Para $\frac{x^2}{9} - \frac{y^2}{16} = 1$: $c = 5$ y asíntotas $y = \pm\frac43 x$. Se usa para localizar una fuente por **diferencias de tiempo** de llegada (navegación hiperbólica, localización de sonidos).

**Clasificación por la excentricidad:** $e = 0$ circunferencia, $0 < e < 1$ elipse, $e = 1$ parábola, $e > 1$ hipérbola.

## 7. Trilateración: cómo funciona el GPS

> [!practico]
> Si sabes que estás a $5$ km de un pueblo, puedes estar en cualquier punto de una circunferencia. Si además sabes que
> estás a $8$ km de otro pueblo, quedan dos puntos posibles (donde se cortan las dos circunferencias), y una tercera distancia
> decide cuál. El GPS hace lo mismo con satélites, midiendo distancias por el tiempo que tarda en llegar su señal.


Un receptor conoce la **distancia** a varios emisores en posiciones conocidas. En el plano, la posición está en la intersección de circunferencias. **Ejemplo resuelto:** balizas en $(0, 0)$, $(10, 0)$ y $(0, 10)$ con
distancias al cuadrado $25$, $65$ y $45$. Las ecuaciones son $x^2 + y^2 = 25$; $(x - 10)^2 + y^2 = 65$; $x^2 + (y - 10)^2 = 45$. **Restando** la primera de las otras se eliminan los cuadrados y quedan ecuaciones **lineales**:
$-20x + 100 = 40$, luego $x = 3$; $-20y + 100 = 20$, luego $y = 4$. Comprobación: $9 + 16 = 25$. $\checkmark$

En el espacio, tres esferas se cortan en general en **dos** puntos, y uno se descarta porque queda lejos de la Tierra; en la práctica el GPS necesita **cuatro** porque también hay que calcular el **error del reloj** del receptor.

## 8. Una mirada al espacio

Un punto del espacio es $(x, y, z)$; la distancia entre dos puntos es $\sqrt{\Delta x^2 + \Delta y^2 + \Delta z^2}$ (Pitágoras dos veces); una **esfera** es $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$; un **plano** es
$Ax + By + Cz = D$. El producto escalar y los vectores se extienden con una componente más (ver el nodo de álgebra lineal).

**Puntos de la red.** Contar los puntos de coordenadas enteras dentro de una circunferencia de radio $r$ (el problema del círculo de Gauss) da aproximadamente $\pi r^2$: para $r = 10$ hay $317$ puntos frente a
$\pi\cdot 100 \approx 314{,}2$.

## 9. Errores típicos

- Aplicar $m_1 m_2 = -1$ cuando alguna recta es vertical (la pendiente no existe; la perpendicular a una vertical es horizontal).
- Olvidar el **valor absoluto** en la distancia punto-recta, o no normalizar con $\sqrt{A^2 + B^2}$.
- Escribir la ecuación de la circunferencia con el signo del centro cambiado: $(x - a)^2$, no $(x + a)^2$.
- Confundir la elipse ($c^2 = a^2 - b^2$) con la hipérbola ($c^2 = a^2 + b^2$).
- Dar el resultado de un sistema sin **sustituir** para comprobar.
- Olvidar que dos ecuaciones lineales pueden no tener solución (rectas paralelas) o tener infinitas (coincidentes).

## Repaso: lo que debe quedarte dentro de un mes

1. $d = \sqrt{\Delta x^2 + \Delta y^2}$; rectas: $y = mx + n$, $Ax + By + C = 0$; $d(P, r) = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$.
2. $\vec u\cdot\vec v = u_1v_1 + u_2v_2 = |\vec u||\vec v|\cos\theta$; perpendicular $\iff \vec u\cdot\vec v = 0$.
3. Circunferencia $(x - a)^2 + (y - b)^2 = r^2$; completar cuadrados; tangente $\perp$ radio.
4. Parábola $x^2 = 4py$; elipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ con $c^2 = a^2 - b^2$; hipérbola con $c^2 = a^2 + b^2$.
5. Trilateración: restar ecuaciones de circunferencias da ecuaciones lineales.

## Siguiente

Con el álgebra, la trigonometría y la geometría analítica listas, el troncal pasa a [[mat-numeros-complejos|un nuevo tipo de número]]
y después al [[mat-calculo-1|cálculo]]: qué ocurre cuando las cantidades **cambian** de forma continua.
