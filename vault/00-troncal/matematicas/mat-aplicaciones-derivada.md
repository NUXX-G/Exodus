---
id: mat-aplicaciones-derivada
title: "Aplicaciones de la derivada: monotonía, extremos, curvatura, optimización, representación de funciones, L'Hôpital, Rolle y valor medio"
area: matematicas
trunk_level: 4
prerequisites: [mat-derivadas]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 8: «Derivadas», aplicaciones (crecimiento, extremos, concavidad, optimización, teoremas de Rolle y del valor medio, regla de L'Hôpital). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2008%20Derivadas.pdf"
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 9: «Representación de funciones». Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2009%20Funciones.pdf"
  - "M. Spivak, «Calculus», 4.ª ed., Publish or Perish (2008), capítulos 11 (significado de la derivada: extremos, valor medio, L'Hôpital) y 12 (convexidad)."
hints:
  - "Concepto: donde f′ > 0 la función crece y donde f′ < 0 decrece; los máximos y mínimos relativos de una función derivable están entre los puntos con f′ = 0. La segunda derivada dice si la gráfica es convexa (∪, f″ > 0) o cóncava (∩, f″ < 0)."
  - "Herramienta: optimizar = escribir la magnitud como función de UNA variable (usando la condición del problema), derivar, igualar a 0, comprobar que es máximo o mínimo (signo de f′ o de f″) y no olvidar los extremos del intervalo. Para 0/0 o ∞/∞, L'Hôpital: el límite del cociente de las derivadas."
  - "Documentación: Marea Verde Matemáticas II caps. 8-9; Spivak, caps. 11-12."
exercises:
  - id: maximo-relativo
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿En qué valor de $x$ tiene un máximo relativo $f(x) = {{f}}$? (Estudia el signo de $f'$.)
    variants:
      - values: {"f":"x^3 - 12x + 1"}
        answers: ["sha256:ef773af711bcae33d14a3a8dc6cd506a3dec5be829efff7dc721603c225e0421","sha256:8d66f579c6aedd09346edab29a8ffd883dc1cf7cc492da149c27d7753038e271","sha256:43d4bdae4be1d3456899a5cf645b65ab0f6f1f9e7aa9cd36cb8943b3cbfe2730"]
      - values: {"f":"x^3 - 6x^2 + 9x - 4"}
        answers: ["sha256:89432da9b967b1b34647b23a812aaa3825b429e7d71d6d17b4f95e53828d088f","sha256:da69fdd2efcf0734308067214277ab8d435a00772ff2d644974ebf8596cbcbfe","sha256:7b2817b3a3a50d507c7fcc51a0f47d9cfe8c4ae336e60c052c7ed8a81abbff66"]
      - values: {"f":"x^3 + 3x^2 - 9x"}
        answers: ["sha256:396b71cb75e95a1194e59d7e80a477d0cbd4ea5d05c1c81fef2dd2148fd2facf","sha256:32a4fa5641373a33c5249cf6f527709fb4b0b7422d7ea39a0170fd1ed351bbc1","sha256:1f88fe6a03958bc9ec44e1b92f2b23d758aa9511fdc801f80e6db7138cb7c889"]
      - values: {"f":"x^3 - 6x^2 + 2"}
        answers: ["sha256:134f0462f0f070ed8ba6728180eb3358ace1eb23d0e6f703e5f3c58df322611f","sha256:e5196968e6b82ca3c281271eea11998bab5af151dc97756ba37fd8e58751c474","sha256:7ee673b3083c4ddbdf36c7c9aae0dc26d3330398574f12a28138255c7d066ce1"]
      - values: {"f":"x^3 - 6x^2 - 15x - 3"}
        answers: ["sha256:b076a5cef74f3caecec32232103ff49cb94fd4fc7c57e9633c6e35d3d9d3015a","sha256:b949e120d735999177892b0ca42ead86a5832164681956c1f56304ca9dd9c593","sha256:3a80632ead32e350fe1a12936cef4156fbee25d0c7ebcf3165bea18f749dbeb4"]
      - values: {"f":"x^3 - 12x^2 + 36x + 5"}
        answers: ["sha256:264c06a725c2557d27d0f272e7f51bbc71a14744a5cf9f77a689544695217d53","sha256:acd0e2e4e9c8000d193445acbcae020542930af32b6a94f23574fc74e76c60e1","sha256:0ae83f51624806b2722dcd07cae57a9c134dff80c0f0823c0b7d264cf52c1d25"]
  - id: minimo-relativo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuánto vale $f$ en su mínimo relativo, si $f(x) = {{f}}$?
    variants:
      - values: {"f":"x^3 - 12x + 1"}
        answers: ["sha256:824f9d7edb3a816302d648ff9ad4d5e41f771ab6054b52180e9ad26798420fbc","sha256:c694c85a8a75ff2dba4d45aa0ba1b15c2e22a1fba8c8c543f26cb0ba6a8289a7","sha256:3994632af3280126f00b2c11ddb6d066b2adaa7be1a753047d55d946811e82a2"]
      - values: {"f":"x^3 - 6x^2 + 9x - 4"}
        answers: ["sha256:a8522fa3c0790ae3061c9957b3a75ee8451934119f119838f59e82f1d9a75aa4","sha256:1e2e3740ae1ade40fe14f49a365dbf6eb2f42dd5fca101d7e9c01ccdd6a0af06","sha256:6276b571eb4e3eeac89abf18863d07d74f8425189a0044287ac5db644b71bf40"]
      - values: {"f":"x^3 + 3x^2 - 9x"}
        answers: ["sha256:b247e076a11674bb013f101f2f8739ac0232e37e32fd305c93f57e42090408b0","sha256:976456b4f7afb1307e28bbf98e6b598e13f2c7201e10634393ed931d9df81c44","sha256:10c126cf3da424fb6016b604bed7fddc93c71d87e5c36b98beec66d6f7d9afeb"]
      - values: {"f":"x^3 - 6x^2 + 2"}
        answers: ["sha256:1b86b18f5d927d5313ed410258fc40fae44a71079e065b4ec256e7c1f0c01f2f","sha256:f653fa8593cbffc6fde4a4f1fa83a35358c074c86c5226a74f780f90f329c097","sha256:81916eb3e141e38ff02bbae92680518b374c2cdbe414adef664161832a8af995"]
      - values: {"f":"x^3 - 6x^2 - 15x - 3"}
        answers: ["sha256:fa8c46d07aed861d8627c7789edd3478c51fa3d8d190d7990635da9caa7938ed","sha256:3832b242bed3d36bf09233ddff3900ba005065c344401270f66db9326d34cc7b","sha256:9ba0dcecaea20d8cd0beea1a4915157ffde92e0fc14d5e4920f244cdbca232c9"]
      - values: {"f":"x^3 - 12x^2 + 36x + 5"}
        answers: ["sha256:c4495d03ae86976c1d15ca4d9577e767e575b59e2b57bc322c435b968a1c79ed","sha256:4dbf8d214a2c50781f6080bcc977a0aaf702f2973704b9d157d5b6b8f833c721","sha256:6598d52707da338948bed4a6f8623dd79c7e69c49669c3bfd641d86ad8b0d38a"]
  - id: punto-de-inflexion
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿En qué valor de $x$ tiene un punto de inflexión $f(x) = {{f}}$?
    variants:
      - values: {"f":"x^3 - 12x + 1"}
        answers: ["sha256:8f36c4e4a098b9a7d2ba655281eabbd5346030baaf6acf2079e98a7eb1211595","sha256:9c6047ee343fd82b1b8df7c9b63f196e3a4effe53e75cd6bdcb3a71e91492b8f","sha256:93693359bf8f02811765af4f0ab428e89b85da88ee1fb6dd925f73a1fa8ccb64"]
      - values: {"f":"x^3 - 6x^2 + 9x - 4"}
        answers: ["sha256:b57f91a5b527ec7f19d5b24d804e7c7313cceeeea5b4c058b666edd70c970490","sha256:42a418d47344a0df32ab8d46b9b1531cc554161d299076aa5ec792cb7c41304d","sha256:5079a06850cbfda784ce1f042790da27df728c9b674a7ac918b7417d26553a82"]
      - values: {"f":"x^3 + 3x^2 - 9x"}
        answers: ["sha256:5372b0f25a92eaf53e07b582c1bc4f0c5eeb7a830a8f7acfe243b44305c9251e","sha256:eb25020ba1071299094175483568122d2efa585ca4b0cc448d08698e35697ce4","sha256:b2b0961ff17326db044566d48f022d3ac36031c92fa5aec84a145f9d5c2fc24d"]
      - values: {"f":"x^3 - 6x^2 + 2"}
        answers: ["sha256:248bda4a71d7b47909cae664a88a5892bc320051c1fcdca49d1b77d8719b4b2c","sha256:624b0fbd692cdd2b42da8c62bc61bc23ccb89b0efdabdecb09e9c82565e21b2d","sha256:c2ec998561c0bd936848b08cb48944b4fc01c19d168acaa6073370625b24447f"]
      - values: {"f":"x^3 - 6x^2 - 15x - 3"}
        answers: ["sha256:99e16482d122b71deb36fc5c028c24248badb047973bf9acbd820fdccc1c5e60","sha256:4b3748d8a58a342cf4927d8df00c45eb3625f70bed0eeeaa3001722c09ac9ed2","sha256:ed001438be62ac33e5fa05c3baf36769a9b2f83009287e77d05586c85721956a"]
      - values: {"f":"x^3 - 12x^2 + 36x + 5"}
        answers: ["sha256:32c95bd16f920d12481094124f4f8c22337fd695c57a032f67c8b7e53468f856","sha256:b9138e1ca8230e4baf0906b8800949dc232289440adbe46466ef087beb7c07cb","sha256:3027a721e26e10573f8c55ef832afa2f4e6279226e6d56032e7c9237cec194b4"]
  - id: caja-de-volumen-maximo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      De una lámina cuadrada de ${{L}}$ cm de lado se recorta un cuadrado igual en cada esquina y se doblan los lados para formar una caja sin tapa.
      ¿Cuál es el mayor volumen posible, en cm³? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L":24}
        answers: ["sha256:b08cc1721bf9961765e68c1dca8cfd749884b0403e2177e3c89dc50434cb2d23","sha256:eb3974bf92d9c8103033d98c2779bfcb6460215035cee3a85c4d00684382e334","sha256:2556af350a7eb2577271919d4b5a3cc1df358d36c060a684e3f84fc8644aa5b2"]
      - values: {"L":12}
        answers: ["sha256:a0efd57df3532c4f85e2e45b7c8594d882c111a77453d04419f482dd75787321","sha256:2b5ad32f52a470ad40a39996fae2b0dddae98e1dc40255550019f5263300bcb2","sha256:1fbde53643b42ce8701551b787907d90b8bb66f755b7b6522c06f70d0cb77af5"]
      - values: {"L":60}
        answers: ["sha256:01d3c1c01017b8146d61c1813850ffadb9e101e1584ca3b2c756857d286c3696","sha256:1a658311c3e0165cb5dc728f0584da3b2351d9689c3eca89ec9ea883c7180aaa","sha256:4579873e9909eb96587f14442c2b00b9c0ff8684607b8e341c20df4bc3613fcb"]
      - values: {"L":18}
        answers: ["sha256:da537acfb7837d172f45dfe8e3c5c08350874f661983391bc6b070ce88678620","sha256:3b5a412f66748659be0e41135de30fc266e06e5f43d19ca474b235a49f8363a4","sha256:08d12970b61a8faa259b6001afe2ff1a1d5766cc8eda8029d6d2af2ce8bd9027"]
      - values: {"L":36}
        answers: ["sha256:f4bb166e6cf69eb1895849278d45785b744bebc9dc4fd0d8a9bc2b84365543e6","sha256:2c02a50a755b55f84afc53196ec33df89e0b99e5faeb83eabbc532a3ad52f279","sha256:e2366ea3de1bb1b9bdcf6dd0adcd2b788a9b1f221303ca48250da942808dacf8"]
      - values: {"L":9}
        answers: ["sha256:b2913092c50327c44375b220377d6482a69ee50575771224ba2586cbd0aeecf6","sha256:c4dd522fc4d77a98527ea31119510d7eea7a633e49a4ccfebf4e78e6116be9da","sha256:18b68468c1701be8491f4f8cce4a5d36bef2b0a632e88bdd197138791534e454"]
  - id: cercado-junto-a-un-muro
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Con ${{P}}$ m de valla se cerca un terreno rectangular junto a un muro recto (el muro hace de cuarto lado). ¿Cuál es el área máxima, en m²?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"P":80}
        answers: ["sha256:2d4e8b2babb9df1bdc4b26d48bf853f32448f466ad0446baf461cb7568a33d15","sha256:271b4d687ecd812fd8f400a79293a9f17f27b98b350cff84b00d00645630be98","sha256:adcf7c1178010383da81ca724141e68b2c795b6ad0d2f92f1085feb396a9c57e"]
      - values: {"P":120}
        answers: ["sha256:0b13d1089953597b3d5318bee1f45ba2285720058c206638b1dd6f0c64e58e24","sha256:888f43fc89b1dbeba0ca3f2cc755283b9e908550d9e080143bebdf4c53d2b5e2","sha256:f9f0e10a3622e85de1fc705fe55bbeffbe276ceab24817c993f9907d04cf33fa"]
      - values: {"P":36}
        answers: ["sha256:69ba2881ba0a5cd40331b19696a9fe957a306f562b6c4e8f0e0ec95ceb2a1935","sha256:edecc3af7fad053f3bf0904df2ca5f5cdacaae031d47070830272a61ca9faa0b","sha256:06c32b891cf8f8df238504e959e984adb2f617b70040c3513c2a6f8529ceafab"]
      - values: {"P":250}
        answers: ["sha256:59ed4f606223cc9c39a76f902fce54efbdd9f0befde1eedc0b11ddcb94d4d291","sha256:8ddf041a0fb9dbec5e13ce612762167d61354e1f6d31274f3bafcd078db943aa","sha256:3f3b95b030385d1a6d559579ff5d857c793ccece82c309ca9ffb784fac8b347f"]
      - values: {"P":60}
        answers: ["sha256:52808451a4d69fc2634512860d9723dc4a18cd163a80ee5a9e4f3f20d79f8f21","sha256:bbb6a1d7752119471f3f153d103fce02e749f5b571a8c9f9541161c271e17f9b","sha256:612b2658558ea06df134ed4bb489903d02916bc1878783bc9ff07dbe6ea6280f"]
      - values: {"P":14}
        answers: ["sha256:560068125d4b607b2bf483d4fd759cd5fc23001879d34b0da16fccd186a82116","sha256:2c249cfcaf3df1d5dee5a35564f8b413305d2da21931f6f2543bc8c4aac47cfb","sha256:956dd33e282211881896e0176dfa7998ef273ca180f63d66b0f0b422f1354dbc"]
  - id: lata-de-superficie-minima
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una lata cilíndrica cerrada debe tener ${{V}}$ cm³. ¿Qué radio, en cm, hace mínima la cantidad de chapa (su superficie total)? (Al menos cuatro
      cifras significativas.)
    variants:
      - values: {"V":500}
        answers: ["sha256:23e5a52e57040dc3fbd6a45a394ba1975af270f1166ce3ce0bb2c4236605e266","sha256:731b0cacf4cc9a9147b32e14cf2f11349e1b1ca684447853cf997de3b9a3ab31","sha256:cda97ddf05f33347e2590e7433a1ec55d5d4c0c1beabfb9dec69fbbb3db13cbc"]
      - values: {"V":330}
        answers: ["sha256:fc091c9f42b5c6b51975474df818d05dc6395da267e12cc7ee6a37f304179ba9","sha256:08b2eed3d516f431f5df88f240d27f7890b171a1935c46e5ea862ee9f7b82896","sha256:29ec9b41c6ffbeadac3a6299acc9bbe6ecfa30abe3b6664b992439d6738ef766"]
      - values: {"V":2000}
        answers: ["sha256:d09ed87a23a19fe5f2531c69216fa320b39a98ab77ae80a2727dcfd66ae42f33","sha256:f3b45fe5d38b1436fea02afea8c7b08138172113df108bc3f1897b4d5621d1d9","sha256:e0e0533a3996aeb1f8325ac57012480de61a5d171319d7426f779673d0c65684"]
      - values: {"V":250}
        answers: ["sha256:4ccfd289f36f72c3762556ac2d1e161cb0735a3742b65bc840d01d89251e8458","sha256:81a119e70099e3159b8ff8771292403e9c0bdb7fc355f667e7ec1b86c6a9545e","sha256:a18dff75105fc9bc52a03e63638de2275b62b2df65fa8621e65dc9c3a5929d7d"]
      - values: {"V":750}
        answers: ["sha256:613eb24407d4e05b38764c13041a899513e61156228b8a273227e6aa7ad3be07","sha256:4d2e2e6f4e95b7cf574a548aa63a863c29a0416582c307a5fd7dc5a3ac7e0e7f","sha256:755937cfa71ea810c510d9c284152d35bc0ba03d1068ec3fa46f137443e94ac4"]
      - values: {"V":1500}
        answers: ["sha256:bf173b224159aefe3e015409bca38b5106568f33c94ccb96d50d3b83aa5ef03e","sha256:04adbb877c0105041a4da6f84a535107025bdd875d5293303db9cfddf37c72b1","sha256:295c4821f45f4803d38487bddab78c9bfcf9e6ee68b1b8f4207b4fc6c81a6c80"]
  - id: regla-de-lhopital
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\lim_{x \to {{a}}} {{f}}$ con la regla de L'Hôpital (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"\\dfrac{e^{3x} - 1}{x}","a":0}
        answers: ["sha256:4e6ce04a870d0299018d83724c5429e4390678d2be4c721cc4d076f5ad52b3f5","sha256:54a253cd68176213d2cea0e23dab71e28cb63b78a4d1a142e36374f8f9d41701","sha256:71a40531593f2fd6462d7b95844f51643091c559c868cd1d2b112d3672bade51"]
      - values: {"f":"\\dfrac{1 - \\cos(2x)}{x^2}","a":0}
        answers: ["sha256:c718f0abd83443cf0bee0528485d047dbdce61c6d247faf34a4cbe6373151db6","sha256:b7472513cfd157379e87875b15cc6f7f2084f29b17ec534710b0a9f6d0790c4e","sha256:9a287b12c38b48b622d3854fbdf5bf3e1ab4c22b38ee3c94cca4a5a57cdf360b"]
      - values: {"f":"\\dfrac{\\ln(2x - 1)}{x - 1}","a":1}
        answers: ["sha256:a1f496822f8dcdd82cd1169b02efaacac56c207e2571f245d4dc031668b28a07","sha256:05660428b25918e773920d3fcd70d1e1829289dc5876cafe65053f2e8c569f42","sha256:6ae4e1e32081243eddf2c0e32bc7fd5909fa2b410df529b23f1d01a0b05bee58"]
      - values: {"f":"\\dfrac{x^3 - 8}{x - 2}","a":2}
        answers: ["sha256:9f69acb8ba34c3e38ddd8a76ce25458e66306f52bbb67e8fde32835d73e0f212","sha256:47d195b0a7c2ad66e5127d171684a0ab9cf4e8c20c6d9676e7c94c5071502cf3","sha256:35cef670f19ad56e7430281400c3596d199218ae2284f049b86b1bccdd569c95"]
      - values: {"f":"\\dfrac{\\operatorname{sen}(5x)}{\\operatorname{sen}(2x)}","a":0}
        answers: ["sha256:8ac3fe24619159309b2090f5e9d0c651b925ce02a00505ea651acc6ad2fb4b1f","sha256:2105e9deaa13ebf17eec7c68a4c476cfbcb6d99a07b670d75eca190b34a83441","sha256:533305e9e0d6c2f0729779c6a17cad4e80ce20603dee8f0c0c93298648290d15"]
      - values: {"f":"\\dfrac{e^{x} - 1 - x}{x^2}","a":0}
        answers: ["sha256:7a23be634367f6cd37548e93036d9fd24480cea2cb0611edb0c6aed0455d09c6","sha256:61081e6add4a24aecded1c9197473c8cc330d73924a466b0be4d1923e16c0acc","sha256:43ec39363eab3ff50a7ba7d909f602269417158ba9d35daeb5a3654d368131d2"]
  - id: teorema-del-valor-medio
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Para $f(x) = x^3$ en $[{{a}}, {{b}}]$, halla el punto $c$ del intervalo en el que la tangente es paralela a la secante que une los extremos.
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a":0,"b":"3"}
        answers: ["sha256:5ab1079c56b74accac78bf6bea7fecf83ddfc941a3d795a9c7e2e4f9c59de1b9","sha256:a2a8fff7db3d2ffd13e76ba896916dfff12356e8c4fe55c03a203c8fa14c2b95","sha256:9660d9516fd9f6e31344c7ad650528312ae63ec145aee7fe3e90399532575ee7"]
      - values: {"a":1,"b":"2"}
        answers: ["sha256:1f510ef138e53881db5679dbd70e6288b4cc97d1bcfd7c75065b7c3bf85e51f6","sha256:b7003e4b2debbe5de7374827e0d706ce0a50558d8e226d5f46aa22edc1b20488","sha256:3ff0ac5556cf7bc892561e8c36563c851b22ee714f7d1ffdc79229d1ebd78a1b"]
      - values: {"a":0,"b":"6"}
        answers: ["sha256:1999c494362e5a30b508082e44369fe472e5cd754f81273cef9e1fcb062e147d","sha256:ed3cfdcdc3d87ecfa7730bab179d5e079e6f40fec5b73d6e07ae49a772788106","sha256:68357a8fbaa71a77c6c873e4bad5bcf0edbfbecab169d1044db3a00970a77ec8"]
      - values: {"a":1,"b":"4"}
        answers: ["sha256:fcb238ccfa15d43977e49a79cf38e627510e5bb8d2829447ac8cab2a4ff27f0c","sha256:5d6ec6b9c9acf9d33b794287e88c39bce3f83328d2a66628a7fc9b327bdb7024","sha256:4ea5b84684230d7d5c2bdd4e71fe0682eb0c47c3dceb65898e5f381f6a5ad84c"]
      - values: {"a":2,"b":"5"}
        answers: ["sha256:8c8e58ad2f23c577408a277000dda0218cc18e1d7bfebc5018027368cd3452a6","sha256:63f3860b1a4c6317e231418a110113f08e8bf302363717fbf1b860fc3092b607","sha256:493671453acc582342d553b44c49b7543f2eb41eed6eff63b7938f54e77312fe"]
      - values: {"a":0,"b":"1{,}5"}
        answers: ["sha256:530355e9d800d83377b8874759e2b66b0b99202cd5b6b1b85fe50fadb10fe427","sha256:08fbc028196baa159d527ceb0faa79b06e322c7dc43a78cba2260134c294e85c","sha256:e64a9b7750bfe82e0ba58948515af18002338ec6ba9edb5836321b775924a822"]
  - id: maximo-absoluto
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el valor máximo absoluto de $f(x) = {{f}}$ en el intervalo $[{{L}}, {{R}}]$? (Compara los extremos relativos de dentro con los bordes; al menos
      cuatro cifras significativas.)
    variants:
      - values: {"f":"-x^3 + 3x","L":-2,"R":3}
        answers: ["sha256:f39de163f5ce711300d4970a02658930281adc47b8e7f8b0fa0f21843a40484c","sha256:a8ad754cbbfa312f026bea9b73a6fa7cdc8ff3b870338b6eeb329ad400e55309","sha256:4436214431105cd673894c62416509ffebbde925dcc0c7bf0ca2658c1fce62d2"]
      - values: {"f":"x^3 - 6x^2 + 9x","L":0,"R":5}
        answers: ["sha256:f58e2bd2de9912a2aa23fa442953aeb257119ed3d490520600b7a8f7d8dd014c","sha256:15e2b47f1c2d57c671803bc08a1744ab75922680e53b8b7d3ee0d59b5a0c96a8","sha256:beefe81fd4dec26566f40076c2ae760d467b8a19e137508103106f4c418372e5"]
      - values: {"f":"x^3 - 12x + 1","L":-3,"R":1}
        answers: ["sha256:ce28a6e73405dc7adbe53e7cbd7690a2753fa635d3bc2e55df1f7bb5c4011982","sha256:741bce6847a5e9a524412e7045d1d41d31ed190aafd6f354b908af6dcd3ec901","sha256:3130b6c32d41d735a2d5fea911890b4c1ec94e016bc38038fadef54815c5e3da"]
      - values: {"f":"-x^3 + 3x^2 + 2","L":-1,"R":4}
        answers: ["sha256:1ba3958b6578496e34b1b5cab0f9b9b598644721eefa3df4a293c1d3e2a3c134","sha256:0ac834327eacf6732035c7b3f8f3c8e8ad6a05a2eaf16ec34af2327a7c44b446","sha256:571c217e352b03e99097eff1ca6299b1056e9c123fabdea52ea1e3e3a2936d5c"]
      - values: {"f":"2x^3 - 3x^2 - 12x + 5","L":-2,"R":3}
        answers: ["sha256:f76d715b8bbf29065a6fedae5bdc452c5647fcb7701fee176aaa0cf33f8bdc8f","sha256:dadf6e53161760fbfe379ce7d1baab984a2d0e43ffb28f6d4d433244c5398bcb","sha256:abd226c2c634b912dfab7e095a53be9156fb2cb47c4b2efe95967f64a3f91fe7"]
      - values: {"f":"x^3 - 27x","L":-4,"R":4}
        answers: ["sha256:842823cd3ae5bcc690a1e1f7a520526f3931c2aebe6f3de731003bd51259ddfc","sha256:5e40e604576bc26df7b49355a7bdd168ecbcaffa403f9c78ac27f076714e0b75","sha256:702cb91b2814df2b360a7578322fc76762bf366172011013a5306f31bc79ad8d"]
  - id: maximo-de-x-por-exponencial
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el valor máximo de $f(x) = x^{{{n}}}\,e^{-x}$ para $x > 0$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n":"1"}
        answers: ["sha256:0076fc04b446e48c68682d2889f8fcec1b3d54caeb505c49c4c24224369f5dc2","sha256:802cba56e42d1e46820c65fcb291bfadb27737c09913e2f80906f5b90b6a5ba2","sha256:0af6a37ed0d7e57dc2dd56c270f5a8ed83dfa6ec15bcdea3e0aa0fc72c1b732c"]
      - values: {"n":"2"}
        answers: ["sha256:e2a5b061651b4511e3c2a8a646d023e15023345a0732657751f2810b22eb4b29","sha256:ab955b19f890c9de0ead1d0bf5ebf0b54838bb1adc50f56a111926155c42e758","sha256:90fc8a36683cb7107b172d9718456d80cbef4da282fbc38b7255475312b3ed6e"]
      - values: {"n":"3"}
        answers: ["sha256:906f80460dde4bb246aab7df782c2de2289b031a1d53c90156c62f1f6f6c3bbe","sha256:c017945cdb93f9c384a5e8b45f0b9391440438c2ac62c994870b09e8bdb907ea","sha256:25390d426f67545ef83e27a785bc91a36b3b25db67d758b107304f0c025e84cc"]
      - values: {"n":"4"}
        answers: ["sha256:54861cb12df49993cfdbb46221fb9caf5d52993554ab8dc019f48cfeb5abe423","sha256:3cabda0e16a03f75083f4be3cd22d3f37cad557cebf92971e214439f10e47fa7","sha256:b3dfb83b5b118d28e969931d10d7b7d862cd149475e7e8a165795fcc2c018c9a"]
      - values: {"n":"0{,}5"}
        answers: ["sha256:0328983705ebb0019ff75cbfb8443b875be5222dd84a54c2d5aaa38fb97a52f9","sha256:0a905198a9d006e2e9d6a901e4ef34dc6a880e9f42dfa195acecd001fd578e99","sha256:fcdc277b4da18b17fa9fc90bb01313922613f33fc77ab857621ecbdcc00bdb36"]
      - values: {"n":"5"}
        answers: ["sha256:067e7a307676654cdeb47078199a56aebf0d0cbb5e7dce530ef5b078976d2a48","sha256:d37d65e06764ea8d83e86e0ebcacd4023585d7164f8f6df42b79e46f435d8ca5","sha256:f540b47df8323289b7dbc1238dd8354e3f3fc7496217cf6e90921fe57be04cb7"]
  - id: cambio-de-curvatura
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿En qué valor positivo (o, si no lo hay, negativo) de $x$ cambia la curvatura de $f(x) = {{f}}$? (Estudia el signo de $f''$; si hay varios, da el
      mayor; al menos cuatro cifras significativas.)
    variants:
      - values: {"f":"x\\,e^{x}"}
        answers: ["sha256:3a4bd40ad15a6224b4d7bbb645caca9d25f2a01351b1869d58f420f1febcc82f","sha256:e62121077748f577d10fb6d399280f950495ebf2edcf7fef7fb1f05ac6217c30","sha256:fdac32a6c1a09da8d46b173c6f05af06f1620e620240edb95465598e74b31beb"]
      - values: {"f":"x^4 - 6x^2"}
        answers: ["sha256:be1608adb9186f33fbdbf65a6426f7380e2be8338655a15095d95c8c355f87f8","sha256:48b47f83177ec8fae8cd036c55b0080a3375d8a4618a722fccee56a0d1c3d50c","sha256:70e434679d54cac73e83501b9e4bac9085119be6320899e6b11a49fa375fedc0"]
      - values: {"f":"e^{-x^2/2}"}
        answers: ["sha256:4dbccb729a07046d2658cb867ae827eaca75f9f88149ad5bbb2ed2b8a422deb7","sha256:f6996dfbeb477b1c3893c55bd058cddf01d7ebf02d10ef809e0ef1c6d5adf4f2","sha256:f974ddbbcd2b24be08608606146fc8c14d5fb450a3983483012f638c7637d199"]
      - values: {"f":"x\\ln x - \\dfrac{x^3}{6}"}
        answers: ["sha256:514c396e6f91ba0b10136317c4bd94e5647f187983fbb9da02d00d22717006b6","sha256:3e2f0e49885b50f527ff2a1e04936029d52a7d5372bb2756f8619e2e118e1051","sha256:0745229c15e80e78d05d3b343d67fe8a9eb3543ff2b9991fa7ce10c3f33ccacf"]
      - values: {"f":"\\dfrac{x}{1 + x^2}"}
        answers: ["sha256:7b11bad95a6af59e5f4bb4bec8eb99b9ef6514eaa72c1ae3934b5ef3fe300061","sha256:80df7660ccb302c708762f8bab2dcadd15132264f822c389a96c247310aee40f","sha256:df8a93f81defbd6f8d543efad1e53d3df359543e2d497dec22d87e8630a7b31e"]
      - values: {"f":"x^3 - 9x^2 + 2"}
        answers: ["sha256:7b17b90213cdf767051511120cdb6fa5a9249db16be66694f54ce5ab7245f960","sha256:40bc648bc2b4ae249d0082b8b561f9b8c7319380df2f21d5c3615d8bc6f35364","sha256:ccc2e142d89973bc1ae5791af82936dd91512a60681be2bac8a7e64a403579e1"]
  - id: por-que-funciona
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué en un máximo o mínimo relativo de una función derivable la derivada vale $0$, y por qué el recíproco es falso.
      (b) Enuncia el teorema del valor medio e interprétalo con un ejemplo de velocidades en un viaje. (c) Deduce de él que una función con derivada
      positiva en un intervalo es creciente en ese intervalo.
    sealed: "gz64:H4sIAAAAAAACCn2UwW7bSAyGX+WHMEBtr5I6bk9Gt6ftC2yPVTegR3Q87WionRkFSgM/zD6AT731qhcrOHKc5LJHEeRP8uM/eqyS+CE7CdW2Wq0WtFyt8NnB7A2y48AYArrpv9F1gsiesrsXcIAhU8NytISW9QucYPYLwh84LNE0nrFf0NJswR5WrOOQGaZp9pHs4yXxqmQdHw/HWaEUrg16igRzwEf9eND43av4B6zNNT4PCX46dS5zgqfMkTynJrS84wArLljXuogFJ7Qc3T3tPC9rUJpO+HdgmP2bBS3xZ1H75BHZTqc+ihXsyXva6k6jJoz/vHtCokXruQgPCHIO85gjdzOdtSk9beR58eV1E5qwWi12LwBrgoTswkCl6AvV2H1VzcusJb7Q+NLU4NElhWjRNC7gHFeRMpPVmS6Ad89wd7gCHZWX03tasQfWVSVGhtm8Xxt870qrjcFBIqUaacA9e7GupbYJHbeOyoFuNiX77aHGg5aQv5t+BbiQMumF2c9106njHAUdRTv9BI9kM3WzCS4aT1TsE5Xx9gYfMN5ujGqzhwuZ4z15qdFL1EhmidzRMwxNzVE7e0lnGIvxdjPvP97eKJaCR6O4goZmGGb/pjisVuE+SjvYLLpmL8mp1bcXrY9nLc0tDrMu1pczPt35uqqrOOyis9X2y2Nlo8scnVTb6m/6IYHKeDpmcndB1JQvHocLNrIiIg+CpZbgqRX1A8EUA1rppJgmEn/jrveiHfshZEnVdnOsX/X8FIZg9W7P1LSh4ozQkxYtpCHh4PrpZ+bkEh7gZebeR87zyBcrcPq/hn9xO1iGJ3QSJEuYTgTSR5tdLL3L3vrL8HR2eUuvFb8efwN47GPVlQQAAA=="
  - id: r-creciente
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué condición garantiza que $f$ es creciente en un intervalo?
    options:
      - |
        $f'(x) > 0$
      - |
        $f(x) > 0$
      - |
        $f''(x) > 0$
      - |
        $f'(x) = 0$
    answers: ["sha256:e0afcc14b948fa0e934a8cd8041f4bc082720675b5bfdb29d2f1acb1718f9c2e"]
  - id: r-segunda-minimo
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si $f'(a) = 0$ y $f''(a) > 0$, ¿qué tiene $f$ en $a$?
    options:
      - |
        Un máximo
      - |
        Un punto de inflexión
      - |
        Un mínimo relativo
      - |
        No se puede saber nunca
    answers: ["sha256:ba63fdf4defe4e6dd08d187666de2625ba9e9ff8aa427f3777a5edbb32736711"]
  - id: r-concava
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué condición indica que la gráfica de $f$ es convexa (con forma de valle, «$\cup$»)?
    options:
      - |
        $f' > 0$
      - |
        $f'' > 0$
      - |
        $f'' < 0$
      - |
        $f = 0$
    answers: ["sha256:312bd9c71d52d9dc39746b6d86c3fc438a9a7764eb5e93ff0aac94f024dba6a2"]
  - id: r-lhopital-cuando
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se puede aplicar la regla de L'Hôpital a un cociente?
    options:
      - |
        Siempre
      - |
        Cuando el límite es infinito
      - |
        Con cualquier cociente
      - |
        En indeterminaciones $\frac00$ o $\frac{\infty}{\infty}$
    answers: ["sha256:7a22bd8651dc643287b25f6ceaeda478b141d40c14d2fbd00e523e8c4d8aa074"]
  - id: r-optimizar-pasos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el procedimiento para resolver un problema de optimización?
    options:
      - |
        Escribir la magnitud a optimizar como función de una variable, derivar, igualar a cero y comprobar
      - |
        Dar valores al azar
      - |
        Derivar dos veces sin más
      - |
        Buscar las asíntotas
    answers: ["sha256:a1f7c15cf219a83c8388d9c2f0463d0d9abe1c62cfa24b098ee2af2f93f6606f"]
  - id: r-rolle
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si $f$ es continua en $[a, b]$, derivable en $(a, b)$ y $f(a) = f(b)$, el teorema de Rolle asegura que existe $c \in (a, b)$ con…
    options:
      - |
        $f(c) = 0$
      - |
        $f'(c) = 0$
      - |
        $f''(c) = 0$
      - |
        $f(c) = f'(c)$
    answers: ["sha256:bfce5bb5e4005ca92773bf83593e6bda946f8508cee4f270e1a4b528aeb0aabd"]
  - id: r-extremo-absoluto
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Dónde hay que buscar el máximo absoluto de una función derivable en un intervalo cerrado $[a, b]$?
    options:
      - |
        Solo en los puntos con $f' = 0$
      - |
        Solo en los extremos del intervalo
      - |
        En los puntos con $f' = 0$ o en los extremos del intervalo
      - |
        En los puntos de inflexión
    answers: ["sha256:1f8581d28cd7e3b1c840da45e4df897f020fe67f8ccf3e35ee2749d7c35c8f97"]
---

# Aplicaciones de la derivada: monotonía, extremos, curvatura, optimización, representación de funciones, L'Hôpital, Rolle y valor medio

¿Qué medidas debe tener una lata para gastar la menor cantidad de chapa? ¿A qué precio se maximiza el beneficio? ¿Cuándo alcanza un proyectil
su altura máxima? La derivada responde a todas estas preguntas porque dice **dónde** una función crece, decrece o se detiene. Este nodo convierte
esa idea en un método: estudiar el crecimiento, encontrar máximos y mínimos, analizar la curvatura, dibujar gráficas completas y resolver
problemas de optimización, además de presentar los teoremas que lo justifican (Rolle, valor medio) y la regla de L'Hôpital para límites.

## Objetivos

Al terminar sabrás:

1. Estudiar los intervalos de crecimiento y decrecimiento y hallar extremos relativos y absolutos.
2. Estudiar la curvatura y los puntos de inflexión con la segunda derivada.
3. Plantear y resolver problemas de optimización.
4. Representar funciones con todos sus elementos.
5. Usar la regla de L'Hôpital y los teoremas de Rolle y del valor medio.

## Qué debes dominar antes

[[mat-derivadas]] (reglas de derivación, recta tangente) y las asíntotas de [[mat-limites-continuidad]].

> [!question] Test de entrada
> 1. Deriva $f(x) = x^3 - 6x^2 + 4$.
> 2. Resuelve $3x^2 - 12x = 0$.
> 3. ¿Cuál es el signo de $f'$ en un tramo donde la gráfica baja?
>
> Respuestas: $3x^2 - 12x$; $x = 0$ y $x = 4$; negativo.

## 1. Para qué sirve

- **Ingeniería y diseño**: minimizar material, peso o coste; maximizar resistencia o capacidad.
- **Economía**: precio que maximiza el beneficio, producción que minimiza el coste medio.
- **Física**: alturas máximas, tiempos mínimos (la luz sigue el camino de tiempo mínimo, principio de Fermat).
- **Inteligencia artificial y ciencia de datos**: entrenar un modelo es minimizar una función de error ([[mat-optimizacion]]).

## 2. Crecimiento y extremos relativos

> [!practico]
> Si caminas por una montaña de izquierda a derecha, subes donde la pendiente es positiva y bajas donde es negativa. En una cima o en el
> fondo de un valle, durante un instante vas en horizontal: la pendiente es cero. Por eso los candidatos a máximo o mínimo son los puntos
> donde la derivada vale cero.

- Si $f'(x) > 0$ en un intervalo, $f$ es **creciente** ahí; si $f'(x) < 0$, **decreciente**.
- Si $f$ tiene un **máximo o mínimo relativo** en $a$ y es derivable, entonces $f'(a) = 0$ (punto **crítico** o **singular**). El recíproco no es cierto: $x^3$ tiene
  $f'(0) = 0$ y es creciente.
- **Criterio de la primera derivada**: si $f'$ pasa de $+$ a $-$ en $a$, hay un máximo; de $-$ a $+$, un mínimo; si no cambia de signo, no hay extremo.
- **Criterio de la segunda derivada**: si $f'(a) = 0$ y $f''(a) < 0$, máximo; si $f''(a) > 0$, mínimo.

*Ejemplo:* $f(x) = x^3 - 3x$: $f'(x) = 3(x - 1)(x + 1)$. Crece en $(-\infty, -1)$ y $(1, +\infty)$, decrece en $(-1, 1)$; máximo relativo en $(-1, 2)$ y mínimo en $(1, -2)$.

**Extremos absolutos en $[a, b]$** (una función continua los alcanza, por Weierstrass): se comparan los valores en los puntos críticos de dentro
y en los extremos $a$ y $b$.

## 3. Curvatura y puntos de inflexión

- Si $f''(x) > 0$, la gráfica es **convexa** (forma de $\cup$: las tangentes quedan por debajo); si $f''(x) < 0$, **cóncava** ($\cap$). (Algunos libros usan las
  palabras al revés; lo seguro es el dibujo.)
- Un **punto de inflexión** es donde cambia la curvatura; ahí $f''(a) = 0$ (condición necesaria, no suficiente). En la cúbica anterior, $f''(x) = 6x$:
  inflexión en $x = 0$.

## 4. Optimización

> [!practico]
> Los problemas de optimización tienen siempre la misma estructura: una magnitud que quieres hacer lo mayor o lo menor posible, unas
> variables y una condición que las liga. La condición permite dejar la magnitud en función de una sola variable, y entonces la
> derivada hace el resto.

**Método**: (1) dibujar y nombrar las variables; (2) escribir la magnitud a optimizar; (3) usar la condición para dejarla con **una** variable; (4) fijar
el dominio con sentido; (5) derivar, igualar a $0$ y resolver; (6) comprobar que es máximo o mínimo (y comparar con los bordes); (7) responder a lo
que se pregunta, con unidades.

*Ejemplo 1 (caja).* De una lámina de $30 \times 30$ cm se recortan cuadrados de lado $x$ en las esquinas: $V(x) = x(30 - 2x)^2$, $0 < x < 15$. $V'(x) = (30 - 2x)(30 - 6x) = 0$
da $x = 5$ (el otro valor anula la caja): $V = 5 \cdot 20^2 = 2\,000$ cm³.

*Ejemplo 2 (cercado junto a un muro).* Con $100$ m de valla para tres lados: $A(x) = x(100 - 2x)$, $A'(x) = 100 - 4x = 0$, $x = 25$: $A = 1\,250$ m².

*Ejemplo 3 (lata).* Volumen $V$ fijo, superficie $S(r) = 2\pi r^2 + \frac{2V}{r}$; $S'(r) = 4\pi r - \frac{2V}{r^2} = 0$ da $r = \sqrt[3]{\frac{V}{2\pi}}$, y entonces la altura es igual al
diámetro. Para $1$ L ($1\,000$ cm³), $r \approx 5{,}42$ cm.

## 5. Representación de funciones

Esquema completo: (1) dominio; (2) simetrías y periodicidad; (3) cortes con los ejes y signo; (4) asíntotas ([[mat-limites-continuidad]]);
(5) crecimiento y extremos ($f'$); (6) curvatura e inflexiones ($f''$); (7) tabla de valores si hace falta y dibujo. Con todo ello se dibuja la gráfica sin
calculadora y se comprueba con un programa (GeoGebra, Desmos).

## 6. Teoremas fundamentales y regla de L'Hôpital

- **Teorema de Rolle**: si $f$ es continua en $[a, b]$, derivable en $(a, b)$ y $f(a) = f(b)$, existe $c \in (a, b)$ con $f'(c) = 0$.
- **Teorema del valor medio** (de Lagrange): con las mismas hipótesis salvo $f(a) = f(b)$, existe $c \in (a, b)$ con $f'(c) = \frac{f(b) - f(a)}{b - a}$: en algún punto la tangente es
  paralela a la secante. (Si se recorren $240$ km en $2$ h, en algún instante el velocímetro marcó $120$ km/h.)
- **Regla de L'Hôpital**: si $\frac{f(x)}{g(x)}$ da $\frac00$ o $\frac\infty\infty$ y existe $\displaystyle\lim\frac{f'(x)}{g'(x)}$, entonces $\displaystyle\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}$.
  *Ejemplos:* $\displaystyle\lim_{x\to0}\frac{e^x - 1}{x} = \lim\frac{e^x}{1} = 1$; $\displaystyle\lim_{x\to0}\frac{\operatorname{sen}x}{x} = \lim\frac{\cos x}{1} = 1$. (No se deriva el cociente: se derivan numerador y
  denominador por separado.)

> [!formal] Con rigor: del valor medio a la monotonía
> Si $f' > 0$ en un intervalo y $x_1 < x_2$ están en él, el teorema del valor medio da un $c$ entre ellos con $f(x_2) - f(x_1) = f'(c)(x_2 - x_1) > 0$: $f$ es creciente.
> Así se justifica el criterio de la primera derivada. El propio teorema del valor medio se deduce de Rolle aplicado a
> $g(x) = f(x) - \frac{f(b) - f(a)}{b - a}(x - a)$, y Rolle, de que una función continua en $[a, b]$ alcanza máximo y mínimo (Weierstrass) y de que en un extremo interior
> la derivada se anula. $\blacksquare$

## 7. Errores típicos

- Dar como extremos todos los puntos con $f' = 0$ sin comprobar el cambio de signo.
- Olvidar comparar con los extremos del intervalo al buscar el máximo absoluto.
- En optimización, derivar antes de reducir a una sola variable, o no dar la magnitud que se pide.
- Aplicar L'Hôpital sin que haya indeterminación, o derivar el cociente con la regla del cociente.
- Confundir convexo y cóncavo según el libro: fijarse en el signo de $f''$ y el dibujo.

## 8. Resumen

- $f' > 0$ crece, $f' < 0$ decrece; extremos donde $f' = 0$ y cambia de signo; criterio de $f''$.
- Curvatura con $f''$; inflexión donde cambia.
- Optimización en siete pasos; extremos absolutos comparando con los bordes.
- Representación: dominio, simetría, cortes, asíntotas, $f'$, $f''$.
- Rolle, valor medio, L'Hôpital.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se decide si un punto con $f' = 0$ es máximo, mínimo o ninguno.
2. Qué indica el signo de $f''$.
3. Los pasos de un problema de optimización.
4. El enunciado del teorema del valor medio y su interpretación.
5. Cuándo y cómo se aplica la regla de L'Hôpital.

## Siguiente

[[mat-calculo-1]] repasa el bloque; después viene el cálculo de áreas y acumulaciones con [[mat-integrales-bachillerato]].
