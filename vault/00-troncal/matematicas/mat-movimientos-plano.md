---
id: mat-movimientos-plano
title: "Movimientos en el plano: traslaciones, giros y simetrías"
area: matematicas
trunk_level: 3
prerequisites: [mat-geometria-basica]
academic_sources:
  - "Garmendia, Á.; Molero, M. Matemáticas 3.º ESO (LOMLOE), capítulo 9: «Movimientos en el plano y el espacio», secciones 1-5 (isometrías, traslaciones, giros, simetrías, mosaicos, frisos y rosetones). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/09%20Movimientos%203.pdf (CC BY-NC-SA 3.0)."
  - "Apuntes Marea Verde. Matemáticas 2.º ESO (LOMLOE), capítulo 8: «Movimientos en el plano y el espacio». https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_08_Movimientos.pdf"
  - "Coxeter, H. S. M. Introduction to Geometry, 2.ª ed. Wiley, 1969, cap. 3 («Isometry in the Euclidean plane») y cap. 4 («Two-dimensional crystallography»)."
hints:
  - "Concepto: una isometría conserva distancias y ángulos. Traslación = sumar un vector; giro = dar vueltas alrededor de un punto fijo; simetría axial = reflejar en un espejo. Dos simetrías seguidas son una traslación (ejes paralelos) o un giro (ejes que se cortan)."
  - "Herramienta: trabaja con coordenadas y papel cuadriculado (o el lienzo de la Libreta). Fórmulas con centro en el origen: giro de 90° antihorario (x, y) → (−y, x); de 180°, (x, y) → (−x, −y); simetría respecto al eje X, (x, y) → (x, −y); respecto a la recta y = x, (x, y) → (y, x). Para un giro de centro C, traslada C al origen, gira y deshaz la traslación."
  - "Documentación: Marea Verde 3.º ESO, cap. 9 (secciones 2 a 4 para las fórmulas y las composiciones; sección 5 para mosaicos, frisos y rosetones). GeoGebra (geogebra.org/classic) tiene las herramientas Traslación, Rotación y Simetría axial para comprobar dibujos."
exercises:
  - id: traslacion-punto
    tier: 1
    prompt: |
      Traslada el punto $P({{x}}, {{y}})$ con el vector $\vec v = ({{a}}, {{b}})$. Respuesta: las coordenadas de $P'$ en la forma «x;y».
    variants:
      - values: {"x":"2","y":"-3","a":"4","b":"5"}
        answers: ["sha256:c33865f6cdf22951fcde8ccbd7fc15aa0acfe84dde5dbccc28aa95d2e4b5c4f5"]
      - values: {"x":"-1","y":"4","a":"6","b":"-1"}
        answers: ["sha256:11b4e3d107c9ead370d5988313bdb607b2fa33279ce574f04f1f9091af18bc34"]
      - values: {"x":"0","y":"7","a":"-3","b":"-3"}
        answers: ["sha256:682acd6a9ce15dbd8c553f8124cb22bf0afa570b2f9f7b716c37452b819298ab"]
      - values: {"x":"5","y":"5","a":"-8","b":"1"}
        answers: ["sha256:a99b97fbb02249593449b199a58dbb0f13e5582e19b83b8305bfe2c300ac89de"]
      - values: {"x":"-6","y":"-2","a":"2","b":"9"}
        answers: ["sha256:8584eb7ce977d25064dccf4eacf0a6805319ee97ebae3ec4762579391f417f3e"]
      - values: {"x":"3","y":"-4","a":"-7","b":"-6"}
        answers: ["sha256:a1a9cfeb979f514f4b84620147efc18afc22e37f110bf91d6ec9eab7f0e048ae"]
  - id: vector-traslacion
    tier: 1
    prompt: |
      Una traslación lleva $A({{x1}}, {{y1}})$ a $A'({{x2}}, {{y2}})$. ¿Cuál es su vector? Respuesta en la forma «a;b».
    variants:
      - values: {"x1":"2","y1":"3","x2":"7","y2":"-1"}
        answers: ["sha256:f786bd4fb1cc383becb98546b58b9e72d5c7b9ece95ebf7b26d87eb5fc3f6e01"]
      - values: {"x1":"-4","y1":"1","x2":"0","y2":"7"}
        answers: ["sha256:ba728f85805e503b8820de5e9fba209b27a4312e7a616358844a3b72a1342556"]
      - values: {"x1":"5","y1":"-2","x2":"-1","y2":"-5"}
        answers: ["sha256:32a23e47b000f01b2a92ec4fb288b72e2da7f993828b5525166285e02315312a"]
      - values: {"x1":"-3","y1":"-3","x2":"4","y2":"2"}
        answers: ["sha256:27d5035446fd7debd92dd7e0db440f25d9b2de7e6a1662a4ab2f9b12f1d55047"]
      - values: {"x1":"1","y1":"8","x2":"6","y2":"3"}
        answers: ["sha256:678f1c7f0fea9ac62f6dfcb2c08912e10e5729acea642a5462491749f59cbca6"]
      - values: {"x1":"0","y1":"-5","x2":"-7","y2":"1"}
        answers: ["sha256:ce7e11c2ea6edd8c3fe6144daf5cf6f27565f9531b344e2b36aba11b182e1769"]
  - id: giro-90
    tier: 1
    prompt: |
      Gira el punto $({{x}}, {{y}})$ $90^\circ$ en sentido antihorario alrededor del origen. Respuesta: «x;y».
    variants:
      - values: {"x":"4","y":"1"}
        answers: ["sha256:756236390741caef54a3307d0d4ae1406cfa69e19a298576634a497bd1a64c7f"]
      - values: {"x":"2","y":"-6"}
        answers: ["sha256:c33865f6cdf22951fcde8ccbd7fc15aa0acfe84dde5dbccc28aa95d2e4b5c4f5"]
      - values: {"x":"-3","y":"2"}
        answers: ["sha256:3a23ae867ef0a8b6a01b8e4bb44de84d09aa1d2ad2f3bcb357f9c73acd9b5bc0"]
      - values: {"x":"-1","y":"-6"}
        answers: ["sha256:6724f4dcf0f0334436b34629b4043d2ed5d8f35215da092da7c2b120a0101ca4"]
      - values: {"x":"5","y":"3"}
        answers: ["sha256:bd830788d1a4024db5001f9ff5305dc4d14705f3ffbf44bec35dbc4cad186980"]
      - values: {"x":"0","y":"4"}
        answers: ["sha256:68fbcbf176b78ef489780d0ef2c96d6d7ad902da5f9e34ee08b058d684e18d5c"]
  - id: simetria-central
    tier: 2
    prompt: |
      Halla el simétrico del punto $P({{x}}, {{y}})$ respecto del **punto** $C({{cx}}, {{cy}})$ (simetría central). Respuesta: «x;y».
    variants:
      - values: {"x":"4","y":"-2","cx":"1","cy":"1"}
        answers: ["sha256:8f8138d3a05297cea9be923ad9e6ce90d86bab3ff047163a183320ac0eaa53b0"]
      - values: {"x":"3","y":"5","cx":"-1","cy":"2"}
        answers: ["sha256:688fe0a79587e4080b30369bfdf1f2c53e5b325897ec528e47ee05e791a49341"]
      - values: {"x":"-2","y":"1","cx":"2","cy":"-3"}
        answers: ["sha256:0d8ddde8a58d98534185d5a849d7f5ccf623afb1afe0c89e726df2571a6de338"]
      - values: {"x":"6","y":"0","cx":"3","cy":"3"}
        answers: ["sha256:b563aac6ff3d328a4e87ee81fbcd9184e666ec32937af739c8750571cc0af7b4"]
      - values: {"x":"-4","y":"-1","cx":"0","cy":"3"}
        answers: ["sha256:303967d1437e85a0093d7a74e5a3acec2282fad4e534023ed0a8be8571b543cb"]
      - values: {"x":"1","y":"7","cx":"-2","cy":"-2"}
        answers: ["sha256:2e0a4c5955b71f693f215bfa4e216be2c2546c8b7065374b85f7c1137ddfaff1"]
  - id: composicion-traslaciones
    tier: 2
    prompt: |
      Se aplica la traslación de vector $({{a}}, {{b}})$ y después la de vector $({{c}}, {{d}})$. ¿De qué vector es la traslación
      que hace lo mismo de una sola vez? Respuesta: «a;b».
    variants:
      - values: {"a":"3","b":"-1","c":"-5","d":"5"}
        answers: ["sha256:8f8138d3a05297cea9be923ad9e6ce90d86bab3ff047163a183320ac0eaa53b0"]
      - values: {"a":"2","b":"2","c":"2","d":"-7"}
        answers: ["sha256:287f26a8739ad7093c434411f4d2935bc6642e981f7e7c005a30e7961ab6786b"]
      - values: {"a":"-6","b":"3","c":"1","d":"1"}
        answers: ["sha256:29ebd8dfb4a7b65caf459a187ec8b88d2970f64ed9d8a79cf8c72fac027bee56"]
      - values: {"a":"4","b":"0","c":"-4","d":"5"}
        answers: ["sha256:6cd59efd2eb4c20a7a23989458c7497fec1d7d55d4129fb1d8051265b15f03e8"]
      - values: {"a":"-2","b":"-3","c":"-1","d":"8"}
        answers: ["sha256:bd830788d1a4024db5001f9ff5305dc4d14705f3ffbf44bec35dbc4cad186980"]
      - values: {"a":"7","b":"-2","c":"-3","d":"-4"}
        answers: ["sha256:c5d4fe9a89dea9156eb3d2afa8138b9799fd326eb3c318b0a8a7c1624293028a"]
  - id: dos-simetrias-ejes
    tier: 2
    prompt: |
      Al punto $({{x}}, {{y}})$ se le aplica la simetría respecto de la recta $y = x$ y, después, la simetría respecto del eje $X$.
      ¿Dónde queda? Respuesta: «x;y». (Piensa también: ¿qué movimiento único es esa composición?)
    variants:
      - values: {"x":"3","y":"5"}
        answers: ["sha256:3602065ec0fe907c175db44be7e18df7cdb87b20d97ed2b960f0ca59cc39c317"]
      - values: {"x":"-2","y":"4"}
        answers: ["sha256:72cf353cd903f805b7dbcb12dd8a4f02e164ac55033c5d28bedbffc119ff8c24"]
      - values: {"x":"6","y":"-1"}
        answers: ["sha256:b5df9830b5be42e74ec1665198cfa0c6205c7b47c63b0737b16660b653321e27"]
      - values: {"x":"-5","y":"-3"}
        answers: ["sha256:bd830788d1a4024db5001f9ff5305dc4d14705f3ffbf44bec35dbc4cad186980"]
      - values: {"x":"1","y":"7"}
        answers: ["sha256:603aa65e33cd9593d0e5da8c888c980d6533b8b2c3e0a926d44c46910bdb652f"]
      - values: {"x":"4","y":"0"}
        answers: ["sha256:c7e79e14fd560242f13db41f2f337c9da1226135c8d2cc0750757a47df7e15b4"]
  - id: ejes-paralelos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se aplica la simetría de eje $x = {{a}}$ y después la de eje $x = {{b}}$. El resultado es una traslación horizontal. ¿Cuánto
      vale la componente horizontal de su vector (con signo)? Respuesta: un número.
    variants:
      - values: {"a":"1","b":"4"}
        answers: ["sha256:4c674c1c523923053e7f05ac83d369932fdb5335d0001ef8e7f515c6758bff52","sha256:048e31070741f4dc424b20b5b4ca39ac804a89797aa5441f157e8477072e12e8","sha256:3296f181e41ab6309f34fb241e4a5004493d5ccfdf47f79c047bf454d0692b08"]
      - values: {"a":"-2","b":"3"}
        answers: ["sha256:b14107aad650a9614c76546d9642055adc9ccd146ea9cf913a6294bb83174963","sha256:e6c2a05d3b4985306130695f413c3d4f3311ec61b54f69377f5a841cb4b02115","sha256:b48b24aaa0508abe82922c50160861c5c83e756976e5e55e4e8e014e4a6dbda8"]
      - values: {"a":"0","b":"7"}
        answers: ["sha256:9e3aae6c0ace66b0285770edbc20bfdde6314a463fe5855ba68681b9e690c026","sha256:d92127c4e945fffc4d8deb086d76200b6ea7dc45dcd401ad4b183dc9a9f75f5b","sha256:a5d2451939d235561b55d7177c3aa542afefbc6cad9e177c77327c2b1fca5a94"]
      - values: {"a":"2","b":"2{,}5"}
        answers: ["sha256:adc55287df6689a535af8363dae0ea1d4dd5f940c85c08201619872ad10fdc6f","sha256:20bba906ac39eb673ebc6dfd625133502842f13966a610c3906d244e19a3961e","sha256:1f9666263f62f4de40d5b56abbfa0b839369f422d16be98554063de12e4c80ce"]
      - values: {"a":"-5","b":"-1"}
        answers: ["sha256:d912032a0e1eb54fb2280d604a44229edf5cf550f1f95fecbc621c9018fa449c","sha256:8789c74cb931c6ce6e0b336284fabdfaf720139a7d0e535d33917ec73157d5c2","sha256:d40a06c150bfda4f5219145b0bfa55f6dad7fad857296b59e7c22825fdfc5458"]
      - values: {"a":"3","b":"10"}
        answers: ["sha256:7cfc9106a49f135691c711fa46e9caab45fee6d80c8c6b88db2fb55b03340787","sha256:753cabd9b50c82208430cb5c818c95f25372c77879ab77f0ad19d5661917dd1b","sha256:62b1fc9a03582863c514c3c79d65ecbd0767b468052bf9febd10d9d36b6027c0"]
  - id: ejes-secantes
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos ejes de simetría se cortan en $O$ formando un ángulo de ${{al}}^\circ$. Se aplica la simetría respecto del primero y
      después respecto del segundo. El resultado es un giro de centro $O$. ¿Cuántos grados gira (en valor absoluto)?
    variants:
      - values: {"al":"35"}
        answers: ["sha256:1a1a3342ce295f12ec01f3a74f626132c248913569bf818da893a291f634aed4","sha256:bc9662e0031821478b844027b6db64b9bdad28a01ac1ef150b2b64afd5560755","sha256:4e56f11a7c2c7b3773022a9c999b489ee84dbcb190a6069ba96bcdfe8b19a960"]
      - values: {"al":"50"}
        answers: ["sha256:28373910193ac6a2d804e94ea18ca4cb0bd5eb1c54fb790076ac8d0e268f0a1f","sha256:98e1fd5576b3dd2f1d2851877ad0e20a523cf257bef2ff471cf382a8ac84111e","sha256:9e0f269b5b5faa231672c76848e68c653a36618e9aaace27f52f5f4a9b50bfe1"]
      - values: {"al":"22{,}5"}
        answers: ["sha256:681d8aca68f8da37f2853ffc07be11e98b2ac62e589b242df271217cdf4e1e70","sha256:ec837dfc75ef0b4d8e71096b894a2646dcadae771ead6effaa8b6254cd06dde8","sha256:ceb31ea4a4dcc9bd7b1bf249936be49a0279342226acdba09d6af151aa4d2f6a"]
      - values: {"al":"70"}
        answers: ["sha256:b239d8897c48cbac35aa8fe06a5549851cbb5528140d4c95450d9f7bb9984393","sha256:e10b879d7d71dd29d4be6be1c2e80f7b00deab52612247eec4ae84f66bda9022","sha256:3abe83ddfe975a3f117e8685c1253eefb9e4f5ac9e6704911ec559405452da01"]
      - values: {"al":"15"}
        answers: ["sha256:6ccaf15736e8ea4e15f7052f2048d4da7d665986afc0ceadddced83283db24c3","sha256:0bb6a6147912823e7613cf10f7888e11cf9f0dbc71edf0ed1231084a5640d126","sha256:a55ca37ba163f025b29cdc91d594c0a7c2ce4a6dd5f5bdd1fb82860f25b75c25"]
      - values: {"al":"80"}
        answers: ["sha256:c8f9a8cf16b8a289ad9e55b2bfec0cf5afc7e318f98ba91eb79af42fc2edefdb","sha256:e0ede0ebb778f8666a0bb8a109edcb2a1dc516b2fdfe400f6307dc548068388b","sha256:afc7c4d4ede84e794a2c77c7bea62d6d7c56858f5c094d87334f7e78343989ed"]
  - id: roseton
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un rosetón tiene la forma de un polígono regular de ${{n}}$ lados. ¿Cuál es el menor ángulo (en grados, mayor que $0$)
      que hay que girarlo alrededor de su centro para que quede igual?
    variants:
      - values: {"n":5}
        answers: ["sha256:00bfbd4292d7c8fa9d5b17539e01df240d0975082cbcaf2cff77ed5c32657fe4","sha256:eaaf6b39ad609e9c04dfd33f5467bc6e675e125ffce0cecf5d22ca14e7bd55b2","sha256:c88a3fea44e700f6aea4d14b74d4517ff77194626c62130ce11d8d8424dfeed0"]
      - values: {"n":8}
        answers: ["sha256:da7a4b7a8320a627f6538af0f5f6f3167c73e3bc822dad17efda0764d3c4598d","sha256:514294c17adc157a5c7899a913c44470827db661bf79b448071bf6b62283f789","sha256:bee09f5f842d7efc6a6b791ac3c4add273e7f59844ed676bc70fcbeb6f76ba52"]
      - values: {"n":9}
        answers: ["sha256:c15a45a4d259890aa21e73bac66d01e1e25d55a5ff57ab54e2f2c1df39c78eec","sha256:8936aeaf3c35a568f018ca3a3ec7fd48bbb0668297a7f49c24c277d170a1d42e","sha256:0197855ae2d53ceed57f523048b3e86c5537480e214d7d3e6376c255839bfc45"]
      - values: {"n":10}
        answers: ["sha256:0842940318a0c5e849cbcadbabdfceb751a268662c1077522456a9ce2fe2c3bc","sha256:b1f2ae6a88035974f7ca3836acc395c6adfcca19c352eae3d75078655dd6eace","sha256:5352ed28cf8b825aac7e6a53798f040ede59bcaa97c26f4ebf92e76d53b651cd"]
      - values: {"n":12}
        answers: ["sha256:5282ea57ca2367fe5b2f379ef6c44f765d66b8473952ea05f5d9bbad77074c65","sha256:b68f53476584c244799e56f8e205136191edc004d220215c21eef795e7e99f0a","sha256:eb0fced0be09dac0e9fe8cdb62a0df56aec69c0c7c0b373b48d157bbf5eb7f76"]
      - values: {"n":18}
        answers: ["sha256:891e0d93eb42a273e8fd86744704caee33e5c62b4f2bb9f36a43ebd07cb69db7","sha256:9b4da1f568567c03c1aca3cce9eae05735455bb3dcf57d71dd9a1c4436865a33","sha256:1f6ead75e7dbf1207daf78f95f5cd219c2617cfd048b6cc3b91bede5c4666f76"]
  - id: mosaico-regular
    tier: 2
    type: opcion
    prompt: |
      ¿Con cuál de estas baldosas, todas iguales, se puede cubrir el suelo sin huecos ni solapes?
    options:
      - |
        Pentágonos regulares
      - |
        Octógonos regulares
      - |
        Hexágonos regulares
      - |
        Decágonos regulares
    answers: ["sha256:35da201e225b1cc7ac6b377d1a4a7cd7935c22d5396c96a27202e1584dd89da3"]
  - id: giro-centro
    tier: 3
    prompt: |
      Gira el punto $P({{x}}, {{y}})$ $90^\circ$ en sentido antihorario alrededor de $C({{c1}}, {{c2}})$. Respuesta: «x;y».
    variants:
      - values: {"x":"6","y":"3","c1":"1","c2":"2"}
        answers: ["sha256:4fdb3515a4601cad71bf132941cf4ab421f89e1592c19534eee4e7560d04cbfd"]
      - values: {"x":"4","y":"-1","c1":"2","c2":"2"}
        answers: ["sha256:5e57dafc516a66457dc6df510462a81e3377d21714bd8f2b0059682ac34ecb56"]
      - values: {"x":"-2","y":"5","c1":"1","c2":"-1"}
        answers: ["sha256:3b15d4ac651db7766b5f746e41c51e711d10697a84a6ef435be073849708b26b"]
      - values: {"x":"3","y":"3","c1":"-2","c2":"1"}
        answers: ["sha256:05e6d5f03ef2176b07e7c58f65ec40696c3d596dec74525863606f9a35b31f43"]
      - values: {"x":"0","y":"0","c1":"3","c2":"4"}
        answers: ["sha256:43bc2a0c49952d30f7f66177268b363d564635c0cdca978aa6a3067ef8b1b92b"]
      - values: {"x":"7","y":"-2","c1":"4","c2":"1"}
        answers: ["sha256:4ed08ab2fe8eeb8bb16ce77809d9a8a75416943ea07a687da79178578f78d41b"]
  - id: dos-centrales
    tier: 3
    prompt: |
      Al punto $P({{x}}, {{y}})$ se le aplica la simetría central de centro $A({{a1}}, {{a2}})$ y, después, la de centro
      $B({{b1}}, {{b2}})$. ¿Dónde queda? Respuesta: «x;y». (Pista: dos giros de $180^\circ$ seguidos son una traslación; ¿de qué
      vector?)
    variants:
      - values: {"a1":"1","a2":"0","b1":"4","b2":"2","x":"0","y":"3"}
        answers: ["sha256:8af91448144b426eeaed65df68130c9f2b151256469562d15bef6a26b0325170"]
      - values: {"a1":"2","a2":"1","b1":"-1","b2":"3","x":"5","y":"0"}
        answers: ["sha256:756236390741caef54a3307d0d4ae1406cfa69e19a298576634a497bd1a64c7f"]
      - values: {"a1":"0","a2":"0","b1":"3","b2":"-2","x":"1","y":"1"}
        answers: ["sha256:51707f9a59fd9cc84170d3000336a5654af14ab0ad559e9d2989380144749359"]
      - values: {"a1":"-2","a2":"3","b1":"1","b2":"1","x":"4","y":"-1"}
        answers: ["sha256:089cef00c8928c001843f1de12b9eba57825952c77143bb3baec80912d6a80c6"]
      - values: {"a1":"3","a2":"3","b1":"5","b2":"6","x":"-1","y":"2"}
        answers: ["sha256:688f28fc79dc3a786afef03cc18d185e47e71d5c677b4827e3d7ab51a3105338"]
      - values: {"a1":"1","a2":"-2","b1":"-3","b2":"0","x":"2","y":"2"}
        answers: ["sha256:26772f139a7ac296df03971a12b0f85ecdb43a28404a24ecb6502934bf2aea56"]
  - id: clasificar-b-p
    tier: 3
    type: opcion
    prompt: |
      Dibuja en papel cuadriculado una letra «b» y, debajo, una «p» del mismo tamaño, con los palos alineados en vertical.
      ¿Qué movimiento lleva la «b» a la «p»?
    options:
      - |
        Una traslación
      - |
        Un giro de $180^\circ$
      - |
        Una simetría axial de eje vertical
      - |
        Una simetría con deslizamiento (simetría de eje horizontal y traslación)
    answers: ["sha256:0cae61b89f836a531b13513a814374c77e2fbbc6ef8a2b31c02008c2a21689c7"]
  - id: invariantes
    tier: 3
    type: opcion
    prompt: |
      ¿Cuál de estos movimientos deja fijos **infinitos** puntos?
    options:
      - |
        Una traslación de vector no nulo
      - |
        Una simetría axial
      - |
        Un giro de $90^\circ$
      - |
        Una simetría con deslizamiento
    answers: ["sha256:bca0d7cfcc26e8f25ddcf0366a14a9e643fb95d3e70a91fa81b908cee6e05138"]
  - id: mosaicos-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que solo hay tres polígonos regulares con los que, usando copias iguales que se juntan vértice
      con vértice, se puede cubrir el plano. Indica qué condición deben cumplir los ángulos en cada vértice, plantea la
      ecuación y resuélvela en números naturales.
    sealed: "gz64:H4sIAAAAAAACCnVUTW/jRgz9K4QxBxlQsvEHjFSLnLZ762GB9lJULUCPmGTiEanMhxE3yI/JsYecetur/lhBSU6cYHuxPBqRfHx8j4+zKD4nJzyrZl8ZLDYI+/6fkJwlaMhDKxGdFYgEd5kTMpidgU58/3IjLBEC3WSPgSI0BIYNeGwkQmEY6vqGYGVKOIDZHU/QSbjPNJbqn/kme6m5dQ1BS5pQ0ywuL/6qa+uCNfNz+EXi8csIGvsGxntiZMiMsM/kE1Y1G1Pzrq5tI6murwPax4LhDJbzui7fEj898hNcwWpzfAHnY+jPbu8aR9wIEKcwojFwgDb75DrvLOpdJ0HbrcDspvRwBUs2JQxUWBfA7IaLnf4wXMGFOYdfczuEm7UBBGy3EkfGao4E12iTBPc3VmCmrMXumHxtzmuu+Yu0Ama4HDldmJHg0xdRWNFTkAg2HwS6IE22SRSdWZsSPEbov7OzGKGT6LbOuwYbikOsWYwEgn5qltNhaeBQs1lPx4WpFNCZorkaBm12cAUbU0EkFyEF9zo2us/O988josJsphRv7J+Owsw/v6ZdH9OuTQU2YwqijyZMMjuC+elHwZtj8MpUkFSkt/TQP39UbmFWx5aWJ8LT5r5hQK3n77OjAKLlVeUscIsHyKMfGFMO6KFQVdAdtZ2XEshDR5zGepAcMb3peJD5xeWx2kDsanPxaXFxCXWNXRfkAVaP5dNqpR74HTRoaMFiVELZCqeRhdi/ALVb9I1EZCiunU63odMJlCNr/YvNHkvokNHPS/CZbkRHXjM9oE3YqmyGQuezchbyNjg7q/54nNngEgUns2r2zSMnwsGLHiHmFrWaP/UpqSvfdonK7mTAcIAcURmaAsDxkD2AeTXt2XL+3q9GIXWZk8RZtXwq34H6LSDHawktKiayGa3r/2W4xZjwh3aCQobNMQapQvfoh/a1sY5C6xJCoCh+T8HjHKJjoBBkYuf/oHxlm3V34OCyYWi6Z60TVh6KVbmZqzKLdbke/2zK1VxJucsxuWtnR24nkbX9c4Ri3A0UX32trk1uP2ppPT8FtPgA6Iu0Xci0nUb2XkmB0I9Tt3kbiAfdemRRfrzoWlbkCPTQ+f7FukkkHyr++fQfo+1SIE4GAAA="
  - id: r-directa-inversa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos movimientos cambia la orientación de las figuras (es una isometría **inversa**)?
    options:
      - |
        La simetría axial
      - |
        La traslación
      - |
        El giro de $90^\circ$
      - |
        El giro de $180^\circ$
    answers: ["sha256:99222769337a1c369d903cae22e98d4fd2736ca2240e24c08f631a414a89a5ae"]
  - id: r-simetria-eje-y
    tier: 1
    review: true
    prompt: |
      Halla el simétrico de $(7, 2)$ respecto del eje $Y$. Respuesta: «x;y».
    answers: ["sha256:c1d4065a2e366f520efabb1b7f7d4bcf15470f973f21af69002e91ccee127fa8"]
  - id: r-giro-270
    tier: 2
    review: true
    prompt: |
      Gira $(5, 2)$ $90^\circ$ en sentido **horario** alrededor del origen. Respuesta: «x;y».
    answers: ["sha256:e64a9557d0c522ee92935d9ee76bf2e5383780bd52a7948e7f7b959b86f9acae"]
  - id: r-ejes-poligono
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos ejes de simetría tiene un octógono regular?
    answers: ["sha256:3b4ebebdad66ab54ebc106a23aad51740664cef66454099c1cda7727f30a119d","sha256:773c2e5257ba442e478747a0b188847fb2e402aa6451387e48e90ca5dc5f48cc","sha256:b142f2f1e101704a4f68120aa78aadda931fc9b9467cc83b7a41a7470813ec85"]
  - id: r-paralelos-distancia
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Dos espejos paralelos están a $7$ cm. Reflejar una figura en el primero y después en el segundo equivale a trasladarla.
      ¿Cuántos cm se traslada?
    answers: ["sha256:908870e51e3247ef20b5b604bb5bedf2ef0983599a96231aec1416e080d680d3","sha256:941403aedc2c9f96b4cd393ee4194852fe87a01ab6a8e2e96f583532e870b154","sha256:c0456b51d07e4f094ae4482daefe98043640014eac17ffb0ebb867a1ccf4029d"]
  - id: r-giro-mismo-centro
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Se gira una figura $130^\circ$ y después $260^\circ$ alrededor del mismo centro (ambos antihorarios). ¿Qué giro entre
      $0^\circ$ y $360^\circ$ hace lo mismo de una vez? Respuesta: grados.
    answers: ["sha256:27e751b45335d1ca0bccea2188829dbb6f5b73df26fd4ea3b53ac78219df1d17","sha256:fe0365187b2452333c7a97a568abd17c75fdc9049e482b601139078c061187b8","sha256:03694aec6907da30f07a082b081d158f540829d74b554383ebcc13ead6c52e7a"]
---

# Movimientos en el plano: traslaciones, giros y simetrías

Mover una figura sin deformarla es algo que haces cada día: arrastrar una foto en el móvil, girar un mapa, mirarte al
espejo. Este nodo convierte esas acciones en matemáticas precisas: qué conservan, cómo se escriben con coordenadas y qué
pasa al encadenarlas. Es la base de los gráficos por ordenador, de los mosaicos de la Alhambra y, más adelante, del álgebra
lineal y de la teoría de grupos.

## Objetivos

Al terminar sabrás:

1. Distinguir isometrías directas e inversas, y saber qué conserva cada movimiento.
2. Aplicar traslaciones, giros y simetrías a puntos y figuras, con regla y con coordenadas.
3. Componer movimientos y predecir el resultado (dos simetrías dan una traslación o un giro).
4. Reconocer los puntos y rectas que un movimiento deja fijos (invariantes).
5. Explicar por qué solo tres polígonos regulares embaldosan el plano, y analizar frisos y rosetones.

> [!question] Test de entrada
> 1. ¿Cuánto suman los ángulos interiores de un hexágono? 2. En el plano con ejes, ¿dónde está el punto $(-2, 3)$?
> 3. ¿Cuántos grados mide cada ángulo de un triángulo equilátero?
>
> Respuestas: $720^\circ$; $2$ unidades a la izquierda y $3$ hacia arriba; $60^\circ$. Si fallas la 1 o la 3, repasa
> [[mat-geometria-basica]].

## 1. Para qué sirve

- **Pantallas y videojuegos**: mover, girar y reflejar un personaje son exactamente estas operaciones sobre las
  coordenadas de sus puntos.
- **Arte y diseño**: los mosaicos, las grecas de una reja y los rosetones de una catedral repiten un motivo con
  movimientos.
- **Física y química**: la simetría de una molécula o de un cristal decide muchas de sus propiedades.
- **Matemáticas posteriores**: en [[mat-algebra-lineal-1|álgebra lineal]] los movimientos se escriben como tablas de
  números que se multiplican, y son el primer ejemplo de lo que en la universidad se llama un «grupo».

## 2. Transformaciones e isometrías

> [!practico]
> Calca una figura en papel vegetal y muévela por la mesa: la puedes **deslizar**, **girar** o **dar la vuelta** al
> papel (verla por detrás). En los tres casos la figura sigue midiendo lo mismo: son **isometrías** («igual medida»).
> Si en cambio haces zoom con dos dedos en el móvil, la forma se conserva pero el tamaño no: eso es una **semejanza**,
> no una isometría.
>
> Hay una diferencia entre deslizar o girar y dar la vuelta al papel: tu mano derecha y tu mano izquierda son iguales,
> pero no puedes ponerlas una encima de la otra coincidiendo. Dar la vuelta cambia la «orientación».

Una **transformación** del plano asigna a cada punto $P$ otro punto $P'$, su **imagen** (o punto **homólogo**). Una
**isometría** (o **movimiento**) es una transformación que conserva las distancias: para cualquier par de puntos,
$P'Q' = PQ$. En consecuencia conserva también los ángulos, las áreas y las formas.

- Es **directa** si conserva además el **sentido** de los ángulos (horario o antihorario): traslaciones y giros.
- Es **inversa** si lo invierte: las simetrías axiales.

Un punto es **invariante** si coincide con su imagen ($P' = P$); una recta es invariante si se transforma en sí misma,
aunque sus puntos se muevan por ella.

## 3. Vectores y traslaciones

> [!practico]
> Una traslación es **deslizar** sin girar, como mover un mueble empujándolo en línea recta o arrastrar un icono en el
> escritorio. Para describirla basta una flecha, el **vector**: «$3$ a la derecha y $2$ hacia abajo». Todos los
> puntos se mueven con la misma flecha.

Un **vector** $\vec v = (a, b)$ indica un desplazamiento: $a$ unidades en horizontal y $b$ en vertical. El vector que
va de $A(x_1, y_1)$ a $B(x_2, y_2)$ es $\overrightarrow{AB} = (x_2 - x_1,\ y_2 - y_1)$, y su **módulo** (su longitud) es,
por Pitágoras, $|\overrightarrow{AB}| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

La **traslación** de vector $\vec v = (a, b)$ lleva cada punto a

$$
T_{\vec v}:\ (x, y) \longmapsto (x + a,\ y + b) .
$$

**Ejemplo resuelto.** El triángulo $A(1, 1)$, $B(4, 1)$, $C(1, 3)$ trasladado por $\vec v = (-5, 2)$ queda en
$A'(-4, 3)$, $B'(-1, 3)$, $C'(-4, 5)$. Comprobación: $AB = 3$ y $A'B' = 3$. $\checkmark$

**Composición.** Aplicar primero $T_{\vec u}$ y después $T_{\vec v}$ es la traslación de vector $\vec u + \vec v$
(se suman las coordenadas). El orden no importa.

**Invariantes.** Una traslación de vector no nulo no deja **ningún** punto fijo; las rectas paralelas al vector son
invariantes (cada una se desliza sobre sí misma).

> [!formal] Con rigor: la traslación es una isometría
> Si $P = (x_1, y_1)$ y $Q = (x_2, y_2)$, sus imágenes son $P' = (x_1 + a, y_1 + b)$ y $Q' = (x_2 + a, y_2 + b)$. Las
> diferencias de coordenadas no cambian: $x_2' - x_1' = x_2 - x_1$ e $y_2' - y_1' = y_2 - y_1$. Por la fórmula de la
> distancia, $P'Q' = PQ$. $\blacksquare$

## 4. Giros

> [!practico]
> Clava una chincheta en una foto y hazla girar: el punto de la chincheta (el **centro**) no se mueve, y todos los
> demás describen arcos de circunferencia alrededor de él, todos el mismo ángulo. Las agujas del reloj giran en
> sentido **horario**; en matemáticas, el sentido **positivo** es el contrario (antihorario).

Un **giro** (o rotación) de centro $O$ y ángulo $\alpha$ lleva cada punto $P$ a $P'$ con $OP' = OP$ y
$\angle POP' = \alpha$, medido en sentido antihorario si $\alpha > 0$.

Con centro en el origen, los giros más usados tienen fórmulas sencillas (compruébalas en papel cuadriculado con el
punto $(3, 1)$):

| Giro (centro $O$) | Imagen de $(x, y)$ | Imagen de $(3, 1)$ |
|---|---|---|
| $90^\circ$ | $(-y,\ x)$ | $(-1, 3)$ |
| $180^\circ$ | $(-x,\ -y)$ | $(-3, -1)$ |
| $270^\circ$ (o $-90^\circ$) | $(y,\ -x)$ | $(1, -3)$ |

**Giro de centro $C(c_1, c_2)$.** Se traslada $C$ al origen, se gira y se deshace la traslación. Para $90^\circ$:

$$
(x, y) \longmapsto \bigl(c_1 - (y - c_2),\ c_2 + (x - c_1)\bigr) .
$$

**Ejemplo resuelto.** Girar $P(5, 2)$ $90^\circ$ alrededor de $C(2, 1)$: $P - C = (3, 1)$; girado, $(-1, 3)$; sumando
$C$, $P' = (1, 4)$. Comprobación: $CP = \sqrt{10} = CP'$. $\checkmark$

**Simetría central.** El giro de $180^\circ$ se llama **simetría central**: $O$ es el punto medio de cada segmento
$PP'$. Con centro en el origen, $(x, y) \mapsto (-x, -y)$.

**Composición e invariantes.** Dos giros del **mismo** centro son otro giro de ese centro, de ángulo la suma. Con
centros distintos el orden **sí** importa. Un giro de ángulo distinto de $0^\circ$ y $360^\circ$ solo deja fijo un
punto: el centro.

> [!formal] Con rigor: la fórmula del giro de 90° conserva distancias
> Si $P = (x_1, y_1)$, $Q = (x_2, y_2)$, las imágenes son $P' = (-y_1, x_1)$ y $Q' = (-y_2, x_2)$, y
> $$
> P'Q'^2 = (y_2 - y_1)^2 + (x_2 - x_1)^2 = PQ^2 .
> $$
> Además $P$ y $P'$ forman un ángulo recto con $O$: el producto $x_1(-y_1) + y_1 x_1 = 0$ (dos vectores
> $(a, b)$ y $(c, d)$ son perpendiculares si $ac + bd = 0$, lo verás en [[mat-geometria-analitica]]). Para un ángulo
> $\alpha$ cualquiera, la fórmula es $(x\cos\alpha - y\sin\alpha,\ x\sin\alpha + y\cos\alpha)$, que se deduce en
> [[mat-trigonometria]]. $\blacksquare$

## 5. Simetrías axiales

> [!practico]
> Una simetría axial es un **espejo**: cada punto se refleja al otro lado de una recta (el **eje**), a la misma
> distancia. Dobla un papel con una mancha de tinta fresca y ábrelo: las dos manchas son simétricas respecto al
> pliegue. La «b» reflejada en un espejo vertical es una «d»: el reflejo da la vuelta a la figura.

La **simetría de eje $r$** lleva cada punto $P$ al punto $P'$ tal que $r$ es la **mediatriz** del segmento $PP'$ (la
recta perpendicular a $PP'$ por su punto medio). Los puntos del eje quedan fijos.

| Eje | Imagen de $(x, y)$ |
|---|---|
| eje $X$ | $(x,\ -y)$ |
| eje $Y$ | $(-x,\ y)$ |
| recta $y = x$ | $(y,\ x)$ |
| recta vertical $x = k$ | $(2k - x,\ y)$ |

Un polígono regular de $n$ lados tiene **$n$ ejes de simetría** y queda igual al girarlo $\frac{360^\circ}{n}$ alrededor
de su centro.

### Componer dos simetrías

Una simetría invierte la orientación; dos seguidas la devuelven a la original, así que el resultado es una isometría
**directa**: un giro o una traslación.

- **Ejes paralelos** a distancia $d$: el resultado es una **traslación** perpendicular a los ejes, de longitud $2d$, en
  el sentido del primer eje al segundo.
- **Ejes que se cortan** en $O$ formando un ángulo $\alpha$: el resultado es un **giro** de centro $O$ y ángulo $2\alpha$,
  en el sentido del primer eje al segundo.

En los dos casos, cambiar el orden da el movimiento contrario (vector opuesto o ángulo opuesto).

> [!formal] Con rigor: demostración con coordenadas (ejes paralelos)
> Tomamos los ejes verticales $x = p$ y $x = q$. La primera simetría lleva $(x, y)$ a $(2p - x, y)$; la segunda lleva
> este punto a $\bigl(2q - (2p - x),\ y\bigr) = \bigl(x + 2(q - p),\ y\bigr)$. Es la traslación de vector
> $\bigl(2(q - p), 0\bigr)$: perpendicular a los ejes y de longitud el doble de su distancia $|q - p|$. Como cualquier
> par de rectas paralelas puede colocarse así eligiendo los ejes de coordenadas, el resultado es general. $\blacksquare$
>
> *Ejes que se cortan.* Sea $O$ el punto de corte. Las dos simetrías dejan fijo $O$ y conservan distancias, luego
> $OP'' = OP$: basta seguir la **dirección** de $OP$. Medimos los ángulos desde el primer eje, de modo que el segundo
> está a $\alpha$. Reflejar respecto a una recta que forma un ángulo $\gamma$ lleva la dirección $\varphi$ a la
> dirección $2\gamma - \varphi$ (queda a la misma distancia angular, al otro lado). Si $OP$ forma un ángulo $\theta$,
> tras el primer eje ($\gamma = 0$) forma $-\theta$, y tras el segundo ($\gamma = \alpha$) forma
> $2\alpha - (-\theta) = \theta + 2\alpha$. Todos los puntos giran $2\alpha$ alrededor de $O$. $\blacksquare$

## 6. Todas las isometrías del plano

> [!practico]
> Hay solo **cuatro** maneras de mover una figura plana sin deformarla: deslizarla, girarla, reflejarla o reflejarla y
> deslizarla a lo largo del espejo (las huellas que dejas al andar por la arena: un pie es el reflejo del otro,
> desplazado).

**Teorema (clasificación).** Toda isometría del plano es una de estas: la **identidad**, una **traslación**, un
**giro**, una **simetría axial** o una **simetría con deslizamiento** (simetría seguida de una traslación paralela al
eje).

| Movimiento | Puntos fijos | Tipo |
|---|---|---|
| traslación (no nula) | ninguno | directa |
| giro (de ángulo no nulo) | el centro | directa |
| simetría axial | los del eje | inversa |
| simetría con deslizamiento | ninguno | inversa |

> [!formal] Con rigor: idea de la demostración
> Una isometría queda determinada por las imágenes de tres puntos no alineados $A, B, C$: un punto del plano está
> determinado por sus distancias a ellos. Por eso una isometría que deja fijos tres puntos no alineados es la
> identidad. A partir de ahí se prueba que **toda isometría es composición de como mucho tres simetrías axiales**
> (una para llevar $A$ a $A'$, otra para $B$ y otra para $C$, cada una por la mediatriz correspondiente). Con dos se
> obtienen traslaciones y giros (sección 5); con una o tres, simetrías y simetrías con deslizamiento. La prueba
> completa está en Coxeter, cap. 3. $\blacksquare$

## 7. Mosaicos, frisos y rosetones

> [!practico]
> Un suelo de baldosas cubre la superficie sin huecos ni solapes. Con baldosas cuadradas es fácil; con hexágonos,
> como un panal de abejas, también. ¿Y con pentágonos regulares? No hay manera: en cada esquina sobra o falta
> espacio. Abajo verás por qué.

Un **mosaico** (o teselación) cubre el plano sin huecos ni solapamientos. Es **regular** si usa un único polígono
regular.

**Teorema.** Solo hay tres mosaicos regulares: de triángulos equiláteros, de cuadrados y de hexágonos regulares.

> [!formal] Con rigor: demostración
> En cada vértice se juntan $k \ge 3$ polígonos de $n$ lados, cuyos ángulos deben sumar $360^\circ$. Cada ángulo
> interior mide $\frac{(n - 2)\,180^\circ}{n}$ (ver [[mat-geometria-basica]]), así que
> $$
> k\cdot\frac{(n - 2)\,180}{n} = 360 \iff k(n - 2) = 2n \iff (n - 2)(k - 2) = 4 .
> $$
> Las únicas factorizaciones de $4$ en naturales positivos son $1\cdot 4$, $2\cdot 2$ y $4\cdot 1$: $(n, k) = (3, 6)$,
> $(4, 4)$ y $(6, 3)$. Triángulos de seis en seis, cuadrados de cuatro en cuatro, hexágonos de tres en tres.
> $\blacksquare$

Un **friso** repite un motivo por traslación en una sola dirección (una greca, una cenefa); combinando la traslación
con giros de $180^\circ$ y simetrías, solo hay **siete** tipos de frisos. En un mosaico periódico (repetido en dos
direcciones) hay **diecisiete** tipos de simetría (Fedorov, 1891); en la decoración de la Alhambra se han identificado
muchos de ellos (cuántos exactamente es objeto de debate entre los estudiosos). Un **rosetón** no
tiene traslaciones: sus simetrías son giros alrededor de un centro (y quizá simetrías axiales por él). Si queda igual
al girarlo $\frac{360^\circ}{n}$ y no tiene ejes, su grupo se llama **cíclico** de orden $n$; si además tiene $n$ ejes,
**diédrico** (Leonardo da Vinci los catalogó al diseñar plantas de iglesias).

## 8. Errores típicos

- Girar en sentido horario cuando el ángulo es positivo (el positivo es antihorario).
- Aplicar las fórmulas con centro en el origen a un giro de otro centro sin trasladar antes.
- Creer que dos simetrías dan otra simetría: dan un giro o una traslación.
- Olvidar que la traslación resultante de dos simetrías mide el **doble** de la distancia entre los ejes (y el giro, el
  **doble** del ángulo).
- Confundir simetría central (un punto, giro de $180^\circ$) con simetría axial (una recta).

## Repaso: lo que debe quedarte dentro de un mes

1. Isometría: conserva distancias. Directas: traslación y giro; inversas: simetrías.
2. Traslación: $(x, y) \mapsto (x + a, y + b)$; dos traslaciones se suman.
3. Giro de $90^\circ$ con centro el origen: $(x, y) \mapsto (-y, x)$; de $180^\circ$: $(-x, -y)$.
4. Dos simetrías: ejes paralelos, traslación de $2d$; ejes que se cortan, giro de $2\alpha$.
5. Mosaicos regulares: solo triángulos, cuadrados y hexágonos, porque $(n - 2)(k - 2) = 4$.

## Siguiente

[[mat-funciones-basicas|El nodo siguiente]] usa el plano con coordenadas para dibujar relaciones entre magnitudes.
