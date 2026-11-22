---
id: fis-leyes-newton
title: "Fuerzas y leyes de Newton: inercia, F = m a, acción y reacción, masa y peso, normal, tensión y diagramas de cuerpo libre"
area: fisica
trunk_level: 3
prerequisites: [fis-vectores-movimiento-plano]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 5: «Leyes del movimiento de Newton» (fuerzas, primera, segunda y tercera ley, masa y peso, fuerzas comunes, diagramas de cuerpo libre). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/5-introduccion"
  - "I. Newton, «Philosophiæ Naturalis Principia Mathematica» (1687), «Axiomata, sive leges motus»; traducción inglesa de A. Motte (1729), de dominio público."
  - "D. Halliday, R. Resnick y J. Walker, «Fundamentals of Physics», 11.ª ed., Wiley (2018), capítulo 5 (fuerza y movimiento I)."
hints:
  - "Concepto: una fuerza es una interacción que cambia el estado de movimiento. Sin fuerza neta, la velocidad no cambia (inercia); con fuerza neta, el cuerpo acelera en su dirección, tanto menos cuanto más masa tiene; las fuerzas siempre van por parejas iguales y opuestas sobre cuerpos distintos."
  - "Herramienta: dibuja el diagrama de cuerpo libre de cada cuerpo, elige ejes (en un plano inclinado, paralelo y perpendicular al plano) y escribe ΣFₓ = m aₓ y ΣF_y = m a_y. Peso P = m g; la normal y la tensión se obtienen de esas ecuaciones."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 5; Halliday, cap. 5."
exercises:
  - id: aceleracion-con-dos-fuerzas
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Sobre un cuerpo de ${{m}}$ kg actúan dos fuerzas en la misma dirección: ${{F1}}$ N y ${{F2}}$ N (con signo, según el sentido). ¿Qué aceleración adquiere, en m/s²
      (con signo)?
    variants:
      - values: {"m":"4","F1":"25","F2":"-10"}
        answers: ["sha256:aec91b760da8f83f8bb6d4cdfc716cccf5910b0a8fe68ad353894304034152ba","sha256:dc121a7256fdafdeb9879ee8f61264123f9e9f2a1bfad977f688cfebbcf9e94c","sha256:51e9b2b5e9dd1cede0ef420f507b9dc9ba4129d208af506a6c1f79fbbcb05a00"]
      - values: {"m":"12","F1":"80","F2":"46"}
        answers: ["sha256:366adbc1456f685e2664841af8df6bc5bbd5c1df28278e1c8c5eb51e2a497f05","sha256:2e67b92df60e383dc3dcf9b6fd15519650bc6021d05aa66a033cbb3665fda784","sha256:5833311f6acf36fe1f248c8464f0e33de94f3eb92a60a2fdd08937efd9203e2a"]
      - values: {"m":"0{,}5","F1":"4","F2":"-1{,}2"}
        answers: ["sha256:231335ab3f8b114c0d0597016379724aed3035f9b92127d20a0699e627e81aba","sha256:90e09d8a524f821cf638a3b7887629c3087c093753e574ada36e27cbbab24aa5","sha256:9ae2704285f351f5874e674c9fa389f4924522a99032d363ffe670b2272a3fe7"]
      - values: {"m":"8","F1":"-30","F2":"72"}
        answers: ["sha256:051050bbba217d84d41fe45c75e5f7b94cd59d398c20b6c8d475a67a5b596216","sha256:cde3cefb355c5cabbf53c5bbaab84377d209a4b948e33409ccb040c69dfef779","sha256:b6fc8cd5a20ee787544c00de33364bc771c13873a474b9121b798b68ee6f8941"]
      - values: {"m":"1500","F1":"4500","F2":"-1200"}
        answers: ["sha256:71bd9d0c0aef9d725cc375ca638adcd794bf6bcc90736ff7b7d752b10126f2c1","sha256:104529e5b659ae0bc57d39d3fa4fced7e17597ff579abc1d3076fbd396aa8e98","sha256:ee7b1c7a47a1f2e4008cf79967bf3e428692ec19d700ab925d41bcc026342c0d"]
      - values: {"m":"25","F1":"60","F2":"-60{,}5"}
        answers: ["sha256:b8603b2c50140cd66fea6d7447da1e571987669f1a2549cb9434ed02de421740","sha256:8cc8c816e0f60226c169a7bf23638032069f279d70371b0e4fd224414fee8c17","sha256:fc992dcdb36535b1d4d4ed63d637790000557c6476a660330e5b58de9ef16e70"]
  - id: peso-en-otro-astro
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una persona pesa ${{P}}$ N en la Tierra ($g = 9{,}8$ m/s²). ¿Cuánto pesaría en {{s}}, donde $g = {{gp}}$ m/s²? (En N, al menos cuatro cifras significativas.)
    variants:
      - values: {"P":588,"gp":"3{,}71","s":"Marte"}
        answers: ["sha256:ca66a037cb7f75f77bc6485a85f2ccd3d402037d92175cfabe3e990a23f29742","sha256:cfbbcdac0ed8811632f5ee7b40b6b99030bd60f09b8d669cdfd255a33c6f0c0b","sha256:4beea241f6bd636dabae1aa9d0e0fc0a5fdb2325b0b0352fccb0487a8d6fd82f"]
      - values: {"P":490,"gp":"24{,}79","s":"Júpiter"}
        answers: ["sha256:2e60c3b18c80a6efef7d6f01ea68c9e6fd7f39c681a0ea6665294834ade005fe","sha256:9ed2ca66950bb3b6fe25db1027fac96e35e04ea1fb19c99f4a53d41e3d80853f","sha256:68eeeed7635dd31ffd151a93b3c49e6c95476d40936522167aa17a99140dbb82"]
      - values: {"P":882,"gp":"8{,}87","s":"Venus"}
        answers: ["sha256:44c7b7a8858cc902d56d360a3a1ca398c472444705d1e228f104d08155d63518","sha256:9a9ec82ca072bbec230f61435a24088f9348c1ee32423dafef33529c84d874c7","sha256:82f2474088c7b0d18fac04544f5f03597c5c54dfd1727357ae55b92b07121ac1"]
      - values: {"P":735,"gp":"1{,}35","s":"Titán"}
        answers: ["sha256:9417e8fe9a21dca92acc690c22c77ceacfa6024593d9cfb0b2720b544e31288b","sha256:73150b35d4610eee7660e5d87666389742ca76db3d73dc69845516fcafd07320","sha256:e1897fe66de596f697be688b542cd71a6fb335a2e5842e398f524ec7ea7156e4"]
      - values: {"P":196,"gp":"3{,}7","s":"Mercurio"}
        answers: ["sha256:267465801da6b584ccd200d957040a5a16fe1eac10e271fa72d3a0f8654ffc28","sha256:19c81657e450e3718ef731e446dc9d186fc273fae672cd802827260d4b65a0cf","sha256:9c2b291ebf6bdbce8d77b7794751a08c443e1a85fdc7495827cf06124f33451b"]
      - values: {"P":1176,"gp":"11{,}15","s":"Neptuno"}
        answers: ["sha256:638093ea85c3ca3e9ea5c2779f47990a9d594f2c977cebc6d2deddf51809bc03","sha256:38303a31cc6d25acf72993465fdfc726ca5a09cc252a500e5032d4f0c899e6fb","sha256:869bd82d0ba6d9c0fb254073c25e96002847170daf6a2c5a49816de83fcd4ab9"]
  - id: fuerzas-perpendiculares
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Sobre un cuerpo de ${{m}}$ kg, en reposo sobre una superficie horizontal sin rozamiento, actúan dos fuerzas horizontales perpendiculares de ${{F1}}$ N y ${{F2}}$ N.
      ¿Qué aceleración adquiere, en m/s²?
    variants:
      - values: {"F1":6,"F2":8,"m":"4"}
        answers: ["sha256:aea71e3b1d8feb5c165d7f3d584e2de74b0fee9ada6c5b9a19abc36653dc46c5","sha256:47c92cf3771e9dcf55f1a43a349550cf4088e239db50d12fb0f0656f13eafe01","sha256:6f355f86fca05d87f2d372d82a052dc1d6c8594aaad197927bb0d6879fb9a9e1"]
      - values: {"F1":5,"F2":12,"m":"2"}
        answers: ["sha256:3e4a82c2371fe46f3098132f328970aafeb00c44a77cffa16366c953e309d4df","sha256:f61677f8144c5cd1cb84b36523ab1e6de18e16e946bf45d74b7213d5b913b1ff","sha256:5582a501596282febf7673b90b9118e314fa3ea36677610cd55ed157fc7d3ddc"]
      - values: {"F1":9,"F2":40,"m":"8"}
        answers: ["sha256:1df56541030f6533a935ef732bb24af4844aa1349a1152c19166022d4f6fadd4","sha256:5981e959162adc1aaa33be5d6105c3a6db304b08014ff9a365d88ce8cdbc7640","sha256:d31132bf75d177299347e5224397f9d6a77d132c984540cf7b8ceffe7e6006f6"]
      - values: {"F1":15,"F2":20,"m":"8"}
        answers: ["sha256:9b651cea598dae4dc5df4c13f6ba2394f9f13b3981c1b1d70382f2c67b9f5e59","sha256:e6c51f0a8fbdfcdf25c0591677a548aeb137bef62663efe4732b80087dfd9f4b","sha256:05513984903739c2948015074e1c2d6b9df8042e4cb54bceefde996198328d6d"]
      - values: {"F1":7,"F2":24,"m":"4"}
        answers: ["sha256:4e7d73d217b8c743629305220622b382556cc026e241a3ce7a27cf3f8e0441e5","sha256:a7abebcfb69bf2a3b91498d5fc23efc0551ffc43ca2b8918462de3affe15dfea","sha256:cabfbdee2f9a8aebe90027be343e4be1087ada39067302f571c248f5e7067588"]
      - values: {"F1":12,"F2":16,"m":"0{,}64"}
        answers: ["sha256:501612cf4ee74c6dc459c3f45ad9ba06875cca6717239579860236a170958a9c","sha256:7cdf59db3c909e5fb153b0c2056cf47d8a109510ab95a57778b021ef743fd246","sha256:81914e81be0841ded240feb0075d6dff324fea9efdd60f12396e08e3be66d931"]
  - id: bascula-en-un-ascensor
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una persona de ${{m}}$ kg está sobre una báscula dentro de un ascensor que acelera a ${{a}}$ m/s² {{s}} ($g = 9{,}8$ m/s²). ¿Qué fuerza marca la báscula, en N?
    variants:
      - values: {"m":75,"a":"1{,}2","s":"hacia arriba"}
        answers: ["sha256:adaea2cb3fe8dec9f2b9dd1a6f1d918160e958cfa837e75c40a053e1464c4fd7","sha256:d3bde31c381c223e0a7e0ff3d3e622a223a3f2cfa356f2b44fb8c58825aed2ea","sha256:c4ee0b5aa73268e9631fe00bb0b3989d6de5af298239633e10ef58585ffc2d84"]
      - values: {"m":50,"a":"2","s":"hacia abajo"}
        answers: ["sha256:2ddf8b9a1fd05247a834db4d65d4c9492b68f892a2e927962f66784bcbfea3b5","sha256:c52d73ca64f2d94bef114563f9a023cc7f4f35463d1f993783128704d3746fd7","sha256:dcadeb96fb0d2731f2c6b267e0c0e7cf51c4e6945f744995a5dd3ea27c031c4d"]
      - values: {"m":80,"a":"0{,}6","s":"hacia arriba"}
        answers: ["sha256:073e71cef99fa85f393e7e37003184a994f10048947860758bcdc2bcdffba928","sha256:c64d30d01748cf1a6458f352dd9299cfb989d576abfe2f31ce400db0e3cfc5da","sha256:617faa9d91ff16f7d7b0c74fd60ccfd190bbbc0be2d1fadd1f549e82e2b848de"]
      - values: {"m":45,"a":"1{,}5","s":"hacia abajo"}
        answers: ["sha256:e9a385260aadb7e2fff688d579b6bf2e1d08260e1fba351e18dc964bdffbf104","sha256:06c912b46f74a08d4f15b840ac2a172aaa65760d4bb819263c64d10e571f1a70","sha256:5af201abbdead5cc67ea565dcc0556bf25c7fe03c4d5fc767f5fdda93d9f2fda"]
      - values: {"m":90,"a":"2{,}4","s":"hacia arriba"}
        answers: ["sha256:b9fdccffb2f0997a13ebaa4ac3bbf068e792e5e7cff204299a6dab12730e4cc3","sha256:a44a46acd27dfd130d82c4a26ea3b2fe9bdde68f4b8b954622cde9de2db12009","sha256:b243a6bd4adfb94f4672e9d3aaeb6483e2976c5bbe507e770b27d11eb65fd6b0"]
      - values: {"m":68,"a":"0{,}8","s":"hacia abajo"}
        answers: ["sha256:175e12d9b373ec3996b66333c7f121b5dd74931fe4a08193dffd8baf4f274ec6","sha256:02c36c35b2bd0ed9d2733bcd3fb12c89888edb0739a21f0bd3b16b159c619f52","sha256:d79cc0f70916c6f975b0d16ecd0894a580d2edd6ed1d4561125ebba985e8c1c4"]
  - id: tension-entre-dos-bloques
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos bloques de ${{m1}}$ kg (detrás) y ${{m2}}$ kg (delante), unidos por una cuerda ligera, están sobre una mesa sin rozamiento. Se tira del bloque delantero con una fuerza
      horizontal de ${{F}}$ N. ¿Cuál es la tensión de la cuerda que los une, en N?
    variants:
      - values: {"m1":"2","m2":"3","F":20}
        answers: ["sha256:3d236cadf914fac88f57c93dbf62391769d97ea5f1de3d7f373789dde33234f4","sha256:15d6a26490a45b5444ab2bae137066f38247d3e69da7bb4bc62dfbd470a94cdf","sha256:8760714839d7f1a2db006d29958ea6deebaf0ec002e0b7ec30275b94edf5449f"]
      - values: {"m1":"5","m2":"1","F":30}
        answers: ["sha256:1a162dc7b270dbc4a58dece57ace9ab8d4166b12a2fa771f32d8602930ae703c","sha256:637c7854b2ac227d25b81659339e98506a85a1749cc361669034ba762bf419e8","sha256:d34ebc529a13e9af8d1c3781f038d7fb722932ba42102fff431cabf5e5b0f140"]
      - values: {"m1":"4","m2":"4","F":18}
        answers: ["sha256:8149de05a7c7bdd41dd281591d5fc603873597403647a749caade7b11d90f0d9","sha256:caf15b672483990bf60caa3395602cfe8efae732a5c1fc249219d9dfb75d1752","sha256:bebaa8b0b70e46253dd375fcac0f9f40d6e12fb4581fb5e024becf98c9ae73d3"]
      - values: {"m1":"1{,}5","m2":"2{,}5","F":12}
        answers: ["sha256:f8e69f4942475b90f7e7a80c53c3004ff66be6a4f4105be1e15efdb5a5f00ff4","sha256:6f1266fb042df106408ae66697a3c789dfa4199ca4075a979d9591c0a299d377","sha256:69e5114c4d009e2fdeb114f47029b66f851253d2c10eddf27ba88309cb3d26ab"]
      - values: {"m1":"10","m2":"6","F":64}
        answers: ["sha256:589c9bfd98beff8f44947b69f998546cc058425aa8c3fe13251dc19572b2376b","sha256:76ceba85f27a760aff09aeca2556a7475f61204cd4e1dd4bd088997765139db0","sha256:f74eb9368bc6e690bcd4e05bd2670dec7d7b5f2ffcfd841109bc849945a4449c"]
      - values: {"m1":"3","m2":"7","F":45}
        answers: ["sha256:057145e77b4645fe1e235621d0dcfe2fde4b5c43190be4a4beb4ddabdbb9726c","sha256:a466d5cc9bcfa6831cac95ddd4ffa13830ab17d8ff2885305880784988c95e67","sha256:b815f5b7a582af0ded31cb2b70606adbdcd6e4bce68addbe0e64ca5cd6094380"]
  - id: maquina-de-atwood
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Dos masas de ${{m1}}$ kg y ${{m2}}$ kg cuelgan de los extremos de una cuerda ligera que pasa por una polea ideal ($g = 9{,}8$ m/s²). ¿Con qué aceleración se mueven, en m/s²?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m1":"5","m2":"3"}
        answers: ["sha256:882891c2132acf65654c46d0fa5c41e55e9c12d2cf5a9984e3d8efe7e4a44c8e","sha256:e381601d5ffc36eb780c01f0b5cfcb1084264ba218ec2cef1d84c44b56ac5f06","sha256:1c71d2bed95e1451a07b4e5a698476242ee869a961c3f701361940c830b12b57"]
      - values: {"m1":"2","m2":"1{,}5"}
        answers: ["sha256:0e87f6124a438898c236e3e70e818a0ba2b427d269e3514c62944ae210ab6e60","sha256:314494618960b3dcc6bdb8bffd163d847a07df3dd85f2c0ca36f54fd95adf382","sha256:23d99f3fd88b9cce90b498072bf8fb66c3d42125fe49b547079e3c4b7141269d"]
      - values: {"m1":"10","m2":"7"}
        answers: ["sha256:303d16c07cb760b1b92b873db3854d964e618d348eb0b670022b3441050225e9","sha256:affcc645323d43b567f2555c2226dc299dae6307850c4647ee1d01ff57614079","sha256:bdc469c843407416751b464d819aa9df1f8b0df79646ae59b2fce2eb755f5449"]
      - values: {"m1":"0{,}6","m2":"0{,}4"}
        answers: ["sha256:78b5a82495dba035629675057967fae4c5526c65f23176d502c8f9dcb5758166","sha256:ace68773ffe7552066a67c9e875e39efa41b722fce03902ea751b545972e95f5","sha256:fa9b74f6cdbdaebf8376229247194b9d9dfe480155657a6c092c32afba71285b"]
      - values: {"m1":"7","m2":"2"}
        answers: ["sha256:4848ec58120fb7ce923813b7d2bbc829d531d4a14f1b8b8a3dc58959723e802a","sha256:c22db2038df1be339d40c6e2a26c57f9878c60994fe083a274f8b030f214fb5c","sha256:78bf0ca1d71a7b2188d54d44481aef9fe6de542db111cc98d37e06cd4ccf1e71"]
      - values: {"m1":"12","m2":"11"}
        answers: ["sha256:78a111ba43e402ac1827bd77c5e1e6c6adbca59e80bc4cadfa7c10a12dfb499e","sha256:7c70a7b361786577b6a347373fb26d7688230206a2318fb17b56c21b7ceb7450","sha256:d33bb9816bf113339ec29d6554e17dbf76210367fd222b10de9e18a77f6ee0c1"]
  - id: fuerza-de-frenado
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un vehículo de ${{m}}$ kg que va a ${{vk}}$ km/h se detiene en ${{D}}$ m con una fuerza de frenado constante. ¿Cuánto vale esa fuerza, en N? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":1200,"vk":90,"D":50}
        answers: ["sha256:59c139678688581402688be96228667b9ffb336270396637c703c5eddf3522af","sha256:887bce3580c98490e5b2526db35adcca19db6e9f69b0754a1c74dea6f6fe3e1d","sha256:2b7d37c330599039531bc9b3ffab33065d071ca62483143197c796be561657c5"]
      - values: {"m":900,"vk":54,"D":25}
        answers: ["sha256:76a211f3e8d95b2e1e2e645b9941d4e3137d8cc0cbf7a1bac5b19a7603b5b85a","sha256:971c430ddcd94db1c6a9be022d223d8b02e1622f70c26476a70ab0fce78c363e","sha256:e9fc75c103c3d50a9ffaa2609119bcf76f0c176aa400b0e4c471e0a2684e411c"]
      - values: {"m":15000,"vk":72,"D":80}
        answers: ["sha256:227df25128a1f6ecf3677b0b9715e1ed9e280c50f19f2e57587ca6b3c963f86a","sha256:d0c0a0e010d242cdb7ef7ff97a0190ec7e5cd5774e69e3db310b3ce6f802629e","sha256:8a7b6c199cfc6b070658b1354ca0bb2256c760a1e0842c25e777cfb9eb0a1b92"]
      - values: {"m":1800,"vk":108,"D":75}
        answers: ["sha256:8c3355cc41739bfec331e3090cf3597cc3ddbb2b0654cd023a217cf1e10bdaf3","sha256:bbb032957600e9b0d6902e7d496556c2b6be4bdcc7aec969c5ca88730d6b1838","sha256:32eba53961a1745077d1e4a8da61743eee18840a63d2bae49647c54b5a47b357"]
      - values: {"m":600,"vk":36,"D":10}
        answers: ["sha256:dc7075a375d8d73acb56050cedb67e48c351f2a3830134902ca5ed81804522a3","sha256:a8ca830b3c0c9b6d977a43d8a32443b5909112d68c557889d285a4e986e9ace7","sha256:afb3f2f0a978648c1830bac73721a94e13f4bf3e9a44ba56d9f6fd02d8fb387c"]
      - values: {"m":2400,"vk":126,"D":120}
        answers: ["sha256:51a2b14557923597749cf1f0304f28d0ae9efdfd2f0d2132bd8962625e1c30e6","sha256:5ced683758b4c565adf4679536eed397cc56364c2f458fd273d76fdd546400dd","sha256:c3e680e5061319c0c0b29bb4fef39eed9a29bef933a31230788e1fbeed0b5f04"]
  - id: plano-inclinado-sin-rozamiento
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un bloque desliza por un plano inclinado ${{th}}°$ sin rozamiento ($g = 9{,}8$ m/s²). ¿Con qué aceleración baja, en m/s²? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"th":30}
        answers: ["sha256:7db9a0d0d59da878b1a1f1b642911df287c072e69931818f94e96905d054d543","sha256:f685460fe41f11b99c8e8e285f4fdbfbc09cb7c12b569b3867a1045d41556ce6","sha256:3a6abb94a6e7352c24a7ae0cae37798cbc9346daf316e4bebe9b18d728d321ae"]
      - values: {"th":15}
        answers: ["sha256:39c26d550f6b27bd3912b93193cb4128daa1d02258608b00554dd8122683db44","sha256:d955baf5d5792fa2681829c9aaa10114ef20c794de7fe3ce71ea7b0159f2affe","sha256:9e0751004251176e88cf88ef10a1b16877e4126b2d12368ccf45bb9b1ec9fbcb"]
      - values: {"th":45}
        answers: ["sha256:04d70e1d0f5a83a6081b53b152cf1cff214bac4878ba0ca5668e80fa61504504","sha256:f2a6a5f880e4f95811eb04a4eacf893814f60cf6fdd4d0ff46c9bd18a63ed84c","sha256:15591762d2d18810349c32cb61dfcd82706f74f8cf2c859570c3f49e369bacb4"]
      - values: {"th":10}
        answers: ["sha256:f552c7eafa8fb9b4136699aaa2300c62918e9281e5bd6de6d0da07f80cc20cd2","sha256:5e21b36ce579f61bd40bb7d0f05ee9f06f9a0d178616f6e244f92b1e7c58af6c","sha256:7c739b6d01a0a00bb4e9c9e9d2f1f334702ca5b8100eeb5b9fd0f5d900d36c1d"]
      - values: {"th":60}
        answers: ["sha256:767c06ea0806303d9247b8eb0f3e2908a2bb4a3b4dad5435b186c1d600c56e49","sha256:d03e5c799f09a62c494071b58530c9ebce1056e5c16f9b619d86712aed5fc7bb","sha256:65d858011ba99f22c23cc44f578b78930d4a8057026d872b6aa24c34d136729d"]
      - values: {"th":22}
        answers: ["sha256:085fd77ac66869630efc3c13262d21e297a063c4fe4028c86c9241bec1495d3c","sha256:78c1f6076f7581b49bd213019151990921520390309cff9e4b4d354dc06854e7","sha256:6b22cc3e75ec59dae2c50d5240d2098afd58f8f4cf066d6775ebfa13ac5fb985"]
  - id: normal-en-un-plano-inclinado
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un bloque de ${{m}}$ kg descansa en un plano inclinado ${{th}}°$ ($g = 9{,}8$ m/s²). ¿Cuánto vale la fuerza normal que le hace el plano, en N? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"5","th":30}
        answers: ["sha256:c8f1404e57f219c964d59878bda9b8a0f293ce83435925db1c2c9856b7481aa7","sha256:68fbcda7ad5d8b6d3c4d0d78bea8898c574261e54f4394e6165ec94f3ae2677a","sha256:54c6ed514c691860de17d45cd6b1cead8812a8eab5047d47ea5c0bc24ea5b911"]
      - values: {"m":"12","th":20}
        answers: ["sha256:f5984f0693345fb286eb716f905562ca6d654378a317aec74a544d5ad6e92491","sha256:2ed7403acaaa0fad6175b761adedf93f31d2311d2b6a4044cf1e107317e9821a","sha256:d61f28be3e33888bf3e6f509cf7478b6d9b17650bcd52c45e2289303707b0657"]
      - values: {"m":"2{,}5","th":45}
        answers: ["sha256:437557106e908a61b7d537512ee2b1a73473545dc810e0f39eca129abe32d64b","sha256:0049fc995007a192a308290ec86a7f1e49688282a9108481aaad102f572714a9","sha256:1286509f64a76ad2cc64c85ec2b6b48eb6da7b3c0ce1cc83f36286fbc5026cb8"]
      - values: {"m":"40","th":15}
        answers: ["sha256:619deeaa5bfef74daf269587c3bdff380144fb364900a62bed83f75665d56244","sha256:1d3545e746b915245572dcfab83ae0a5d08ce47cb7a009ce59dd034e53c65537","sha256:c0426f5f4468a8a84ac78190e10b13c4cd4c54e9f18bb3dce4e2f1182a3db5b8"]
      - values: {"m":"8","th":60}
        answers: ["sha256:8d6ea44fee5d598931b3b4699223b00b7844421d7f84046f7ce3a16bf04da25a","sha256:2852f6b6176b0bd22b5f0461ea315a8a8873c21c708d83c0a3c3f7c7b482f349","sha256:045498d9a1f9c5f5a0b4bf83a1324ec6a5bdd3641b6380ed9be448af7944f921"]
      - values: {"m":"20","th":35}
        answers: ["sha256:1071bb1199dd6edf4adfbdaba4d8a0a2aec97d3667551e61e4ae5357cbfc7008","sha256:9170b2fc1355193f6a288f204985a6a56b102ded6678df707f1f6d69df6b58a4","sha256:a6c1a8801129e1186aecc322953e7b34aae3a0684d49ba57cada419154c8ae50"]
  - id: colgado-de-dos-cuerdas
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un cuadro de ${{m}}$ kg cuelga en equilibrio de dos cuerdas simétricas que forman cada una un ángulo de ${{th}}°$ con la horizontal ($g = 9{,}8$ m/s²). ¿Cuál es la tensión de
      cada cuerda, en N? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":10,"th":30}
        answers: ["sha256:0ef18624cf6f7c3bb1e201b5bde34df5c94c587728a7bf033848e7137e4c3d5e","sha256:6c0268ac355757ce82ab956df6d9d82cc7bad8d92b5ce92f503a04195c16284d","sha256:6806235419aa577b0de203a32ef53a84c0d5fae5b779dcc37922c4d0bc42d12e"]
      - values: {"m":4,"th":45}
        answers: ["sha256:0d877d4d7e409d6bb86ecc90bbb56dc13de21a31293474c477323568b0039106","sha256:9a57aae50980926051e5d66200871f6493e814731885fb6fb294d0d282882728","sha256:34e1b901d67e98acfded8edf4a987cd7f982e48805b54806c2f805e7075b12e8"]
      - values: {"m":25,"th":60}
        answers: ["sha256:6b4c6afb510881d0dde0127d8caf9a48c62131fc2e691b5859f08aa0db8fbc87","sha256:a1c4cebfb6ba53f7bb815e179d4b0039bb4f3605843f833ceb5724944a47cee7","sha256:1c271555b888bf7e207279bf9a249348eab30be8482996023d97f98d4d1433da"]
      - values: {"m":6,"th":20}
        answers: ["sha256:b939f5f52727e958967722a067d8d5e9dc5e869126ca23b1d66ca23c78ed1043","sha256:5c1eab764b69cef0598c42bae658662000a417bfbaf15376b8eb25313feae865","sha256:6c587cecd1b77505823d8ff3fd64dff269f787c3428ab68de0d85c7c99c938d8"]
      - values: {"m":15,"th":75}
        answers: ["sha256:e463c483b116c5d4f0eeb34a8d71ead26cc0b56a1fc55147a36ec55158faba3b","sha256:78a6fb7c31a850c50e542e9f23d375e893cea745e21f7074050cd010e33b9896","sha256:6fc3121cca42547f72ffe8e1ac09f17d8f9c352d0b03bfbdfc1f7bc68e8c96cc"]
      - values: {"m":8,"th":50}
        answers: ["sha256:9a5981dc1322cf1215c4cca4a1f6d2bf9ff9b376cfc8cc4750989301bad4b23c","sha256:84abd014f5a551848e3426597e2fadfa9dded39332a856250e7ae4f9ea35abff","sha256:314bf754e72ff051f5c1e7c7fc5d9ddc891b629485a689763fbd572069d505af"]
  - id: patinadores-que-se-empujan
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos patinadores de ${{m1}}$ kg y ${{m2}}$ kg, en reposo sobre hielo, se empujan. Mientras dura el empujón, el primero acelera a ${{a1}}$ m/s². ¿Con qué aceleración (en módulo)
      se mueve el segundo, en m/s²?
    variants:
      - values: {"m1":60,"a1":"2{,}4","m2":80}
        answers: ["sha256:e312a843a1a4872a5517078f0d6ce889923eb3cedfd7269fefa58bf7ae189462","sha256:e302fb166893d9bee5cc7605f21196d1d26a963afc2c26bf231cec966cf51cf5","sha256:2e61ab72fd5caa604b6cd1636bdac46559c5db8db5a791bffb769427061c6402"]
      - values: {"m1":45,"a1":"3","m2":72}
        answers: ["sha256:b6a399e2eecc2ff85eb9a140abd48bf7c47b06cf4ab4071161529a3a1907cdd2","sha256:5d65410b0d24eff5c8c0f8873f48c94326cffb6923e6b61f204e7d5ca17c2b57","sha256:27519056d84f6024bb902a45252f256b589e784787888e62275aa8d34e64780a"]
      - values: {"m1":90,"a1":"1{,}2","m2":50}
        answers: ["sha256:98245fa394d20c460b2a40358d9503d7b5036b5ad2fa756a091b5f3231c054d1","sha256:1262bdb4be38923c9d08ac2f1f3c2c300b7d196d19414487861bc4b0988bab56","sha256:65a01018ef3a0d5c30d2b1c80e19f5b60d5fdfe87e8a6753ac6b7e08b5e2f9bf"]
      - values: {"m1":55,"a1":"1{,}8","m2":66}
        answers: ["sha256:e913a9104822add89ccbc4166f6b008899c77d02ad0aa7b73f050c4ed7e39c45","sha256:70a09fac9ade0d436faa8e113038faeaa62e9746c1a64908bc852d28ad9b8943","sha256:bd4f84c7a618849fb4455e039f02ec51d671355ea36b16393b8e143ad81f7d8d"]
      - values: {"m1":70,"a1":"0{,}9","m2":40}
        answers: ["sha256:5fcc716232cf33779cd690a5defffad0f8bc9d5abc5c019d0ecd07395f671a50","sha256:29ae6f2ebc035c2f59591919d0707bb1e9f078b3d26b96f1368555d54cd8b91b","sha256:437acd6f4176a1982d63941aaf970a40ebede308e2714b1611c9b811b0f64e4f"]
      - values: {"m1":100,"a1":"0{,}6","m2":48}
        answers: ["sha256:6a5960b0ed0122d06acf17fd4f95abcc9be76577c9adbaca8ab493b50b68a447","sha256:333502fb93dd28894d6a3f1f08a3529ecce8ed938db80ea5fc590b37f95e964d","sha256:a5417c10d2518d338ee50a3161b0251054d9fa15479d246e0976e7a9122564d9"]
  - id: tres-leyes
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Enuncia las tres leyes de Newton y pon un ejemplo cotidiano de cada una. (b) Un libro descansa sobre una mesa: dibuja (describe) su diagrama de
      cuerpo libre y explica por qué el peso y la normal **no** son un par de acción y reacción. (c) Explica por qué un cinturón de seguridad salva vidas usando la
      primera y la segunda ley.
    sealed: "gz64:H4sIAAAAAAACCn1UPW8jNxD9Kw+CCmmhuEgpI8Ud4APSGAF8XTYIRtyxTIM7szckjZMN/5grr0h13bX6Y8HshwwDQboll5w372P4ssqaaokqq/2qaTa0bRo0zR8WezZqGmyisIVI2z1yRCLcV7ZngnAhcEZg0x2qIFS2QZHjsTJYYDxoViiCCp44aYgddb7KhaQwNpRwbyxk4ASqRQ/nn3mHpBkDZXpk0zzVEzxQiNRKx8nvbq/QNHd8rNJR0+yxbtsnDvj090vbFv5aXry711f8hn76Q2tsvI9E6GPuFxZT42SmeKJw/kdBgRMboT9/y/hSGVUUKbHoiPmZLYy6jGp8AD/6BqpcdMl6MMbHHT4uP6edD36olXislHCCDpVzoVEE455s5yIY9wruh/pIoybHShNzUDHv6HTZnk8lwoEsLMcu+rTSStNsDm7n3dgAJ6R4MKdYzj9JkCsGzor1rNFxjc0MdqBHdSMWConwObIZbXHyhaj1lBbZb98umsUD7fzI282eM22vEdS55XL+9paOHda3btJxfYVbRVZphUKI5x/yi/H8hUHNnbj0vdBpGvdSm2bJ3skroGMIlWqU+JnQxVyiFLrCTcJA5hJNvDl7d1RswekuEk0QF9bXjjbdRaJWZvpTgdn3/7jsxBcjghtxI2PeHtTpcELQ8MDIjI5LZGEEytFBjpoGvnbimMdvjIeGOoyjMw1Zr0/x/F06zXyFuygIUUq18w8ZvVuKckKmNMRAHZu6+FXAeaAQXbIqKJH7QVvp6wlBrWjeL4MwKcPOmHFayM7rzfqTu0fr7ajuBR6b0a+OxykK3PmEYNCgW29sHHo8VinT47AosRtXPkvvwHtHm3I3wbdiPJCV2C3j9qxCGcY55sJSOI92TKm4Wu1WVg8Ww2r/58sqWCxsUVf71Y1U8dQGNeNQqPerSJRRzL3lk79v3uAj94M/S9RxqNRp9qKDE8ir/a+vu3dlf+9YSryPgaacnZZxOYG/DmncV8OXev4OUdz7z9GTOWFLHE+4jMD/wd3MNceIDpwm6hcr5ldvjhFOWDx7X/Ov138BHAz4OQoGAAA="
  - id: r-sin-fuerza-neta
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué hace un cuerpo sobre el que la fuerza neta es cero?
    options:
      - |
        Se para
      - |
        Sigue en reposo o con velocidad constante
      - |
        Acelera
      - |
        Gira
    answers: ["sha256:b5ea92aeef1a7294ed38fe65398d5b3c2993b39fc90a007feb208d4c730d7503"]
  - id: r-unidad-fuerza
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿A qué equivale un newton en unidades básicas del SI?
    options:
      - |
        $\mathrm{kg}$
      - |
        $\mathrm{kg\,m/s}$
      - |
        $\mathrm{kg\,m/s^2}$
      - |
        $\mathrm{m/s^2}$
    answers: ["sha256:617881b2a830472840d6f42233b2f541b1ab62c3a1fc044e3f632440dd0e74c2"]
  - id: r-masa-peso
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si un astronauta va de la Tierra a la Luna, ¿qué le pasa a su masa y a su peso?
    options:
      - |
        La masa no cambia; el peso sí
      - |
        Cambian los dos
      - |
        Ninguno cambia
      - |
        Cambia la masa, no el peso
    answers: ["sha256:60858bffdf9df197be08ca7c8aee111bdf958667a1a9e26dafb2719727c60ac8"]
  - id: r-peso-50
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto pesa, en N, un objeto de $50$ kg en la Tierra ($g = 9{,}8$ m/s²)?
    answers: ["sha256:825a9da92e6fa95368814fb8830ed5129d821a170a58a8d206b23923cb0b5fb2","sha256:501bbbf2760bd5afd21ccafe25880ecc02d38bd295c8e3024e26807bbcc54101","sha256:49f5b6717bbef1928bccd42dae57229be7f43433d87f887c89cb7b1763e861ad"]
  - id: r-accion-reaccion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué las fuerzas de acción y reacción no se anulan entre sí?
    options:
      - |
        Se anulan porque son iguales y opuestas
      - |
        Actúan sobre el mismo cuerpo
      - |
        La reacción es menor
      - |
        Actúan sobre cuerpos distintos, por eso no se anulan
    answers: ["sha256:75026ff84a9a331b374d675b3e5f20282becbb2babfe85600a9d886bb7d8956e"]
  - id: r-doble-fuerza
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica la fuerza neta sobre un cuerpo, ¿por cuánto se multiplica su aceleración?
    answers: ["sha256:61c9d81eba39168e7339b0674aa445635396b4a27fbfd7637efbc3e8f32ed9ad","sha256:54d680bf99320b9678366b936cdd78efdd58545c42a53eb2c05a65f8dc2739b8","sha256:499dd86786fc80bffe4669340ecf0af1c5d51d2428c998710b6c78ff9a1f9a43"]
  - id: r-velocidad-constante
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un coche va por una recta a $100$ km/h constantes. ¿Cuánto vale la fuerza neta sobre él, en N?
    answers: ["sha256:41d976f633c8719a1234a4217132c53aa467d4c0e6e0a3cf61ffb8cdae74ed11","sha256:db6534c3f824e21b9d929dd6949aa47dceaa876470c6e0927253bbce1f0460c0","sha256:0607df4de6fb1a99fcb4f42c918a85c4b2fbc3791af3782b440011ea3804077b"]
---

# Fuerzas y leyes de Newton: inercia, F = m a, acción y reacción, masa y peso, normal, tensión y diagramas de cuerpo libre

La cinemática describe cómo se mueven las cosas; la **dinámica** explica **por qué**. En 1687 Isaac Newton resumió en tres leyes la relación entre las
fuerzas y el movimiento, y con ellas se calculan desde la trayectoria de una pelota hasta la órbita de un satélite o la estructura de un puente. Este
nodo presenta el concepto de fuerza, las tres leyes, la diferencia entre masa y peso, las fuerzas más comunes y el método que lo resuelve todo: el
**diagrama de cuerpo libre**.

## Objetivos

Al terminar sabrás:

1. Explicar qué es una fuerza y sumar fuerzas como vectores.
2. Enunciar y aplicar las tres leyes de Newton.
3. Distinguir masa y peso y calcular el peso en distintos lugares.
4. Identificar las fuerzas habituales (peso, normal, tensión, rozamiento) y dibujar diagramas de cuerpo libre.
5. Resolver problemas con uno o varios cuerpos: ascensores, bloques unidos por cuerdas, poleas, planos inclinados y equilibrio.

## Qué debes dominar antes

[[fis-vectores-movimiento-plano]] (vectores, componentes y aceleración), que a su vez se apoya en [[fis-cinematica-rectilinea]].

> [!question] Test de entrada
> 1. Componentes de un vector de módulo $10$ que forma $30°$ con el eje $X$.
> 2. Un coche pasa de $0$ a $20$ m/s en $4$ s: ¿qué aceleración media tiene?
> 3. Módulo de la suma de $(6, 0)$ y $(0, 8)$.
>
> Respuestas: $(8{,}66;\ 5)$; $5$ m/s²; $10$.

## 1. Para qué sirve

- **Ingeniería**: diseño de vehículos, ascensores, grúas, puentes y edificios (las fuerzas deben equilibrarse).
- **Seguridad**: cinturones, airbags y cascos funcionan reduciendo la aceleración y, por tanto, la fuerza.
- **Deporte y biomecánica**: impulso de un salto, carrera, lanzamientos.
- **Robótica y simulación**: los motores de física de videojuegos y los controladores de robots integran $F = ma$ ([[rob-dinamica]]).

## 2. Qué es una fuerza

> [!practico]
> Empujar un carro, tirar de una cuerda, que un imán atraiga un clavo o que la Tierra atraiga una manzana: todo son **fuerzas**, interacciones entre dos cuerpos
> que pueden cambiar su movimiento o deformarlos. Si dos personas empujan una caja en la misma dirección, sus efectos se suman; si empujan en sentidos
> opuestos con la misma fuerza, la caja no se mueve.

Una **fuerza** es una magnitud vectorial que mide la interacción entre dos cuerpos; su unidad en el SI es el **newton**: $1\ \mathrm N = 1\ \mathrm{kg\cdot m/s^2}$ (aproximadamente el peso de
una manzana pequeña). Las fuerzas que actúan sobre un cuerpo se suman como vectores para dar la **fuerza neta** (o resultante) $\vec F_{\text{neta}} = \sum \vec F_i$. Se miden
con un **dinamómetro** (un muelle calibrado).

## 3. Las tres leyes de Newton

**Primera ley (inercia).** Si la fuerza neta sobre un cuerpo es cero, este permanece en reposo o se mueve con velocidad constante en línea recta. La
tendencia a mantener su estado de movimiento es la **inercia**, y su medida es la **masa**. Por eso, al frenar un autobús, los pasajeros siguen hacia delante. Esta
ley define los **sistemas de referencia inerciales** (los que no aceleran), en los que valen las otras dos.

**Segunda ley (ley fundamental de la dinámica).**
$$
\vec F_{\text{neta}} = m\,\vec a .
$$
La aceleración tiene la dirección de la fuerza neta y es inversamente proporcional a la masa. *Ejemplo:* una fuerza neta de $10$ N sobre $2$ kg produce $5$ m/s². Con fuerza neta cero, $\vec a = \vec 0$:
**equilibrio** (en reposo o con velocidad constante).

**Tercera ley (acción y reacción).** Si un cuerpo A ejerce una fuerza sobre B, B ejerce sobre A una fuerza de igual módulo y dirección y sentido
contrario: $\vec F_{BA} = -\vec F_{AB}$. Esas dos fuerzas actúan sobre **cuerpos distintos**, por eso no se anulan. Al caminar, tu pie empuja el suelo hacia atrás y el suelo te empuja
hacia delante; un cohete expulsa gases hacia atrás y los gases lo empujan hacia delante.

> [!formal] Con rigor: la segunda ley en forma general
> Newton la enunció en términos de la **cantidad de movimiento** $\vec p = m\vec v$: $\vec F_{\text{neta}} = \frac{d\vec p}{dt}$. Si la masa es constante, $\frac{d\vec p}{dt} = m\frac{d\vec v}{dt} = m\vec a$. La forma con $\vec p$ vale también
> para sistemas de masa variable (cohetes) y es la que sobrevive en la relatividad ([[fis-momento-choques]]). Las leyes valen en sistemas inerciales; en uno que acelera aparecen
> «fuerzas ficticias» (la que te pega al asiento en una curva). $\blacksquare$

## 4. Masa y peso

La **masa** ($m$, en kg) es la cantidad de inercia de un cuerpo y no depende del lugar. El **peso** es la fuerza con que un astro lo atrae: $\vec P = m\vec g$, dirigido hacia el
centro del astro. En la Tierra, $g \approx 9{,}8$ m/s²: una persona de $70$ kg pesa $686$ N; en la Luna ($g = 1{,}62$ m/s²) pesaría unos $113$ N, con la misma masa. En el lenguaje cotidiano
se dice «peso 70 kilos», pero en física el peso se mide en newtons.

## 5. Fuerzas habituales y diagramas de cuerpo libre

- **Peso** $m\vec g$: vertical, hacia abajo.
- **Normal** $\vec N$: la que hace una superficie sobre un cuerpo apoyado, **perpendicular** a la superficie. No siempre es igual al peso: en un plano inclinado vale $mg\cos\theta$, y en un
  ascensor que acelera cambia.
- **Tensión** $\vec T$: la que hace una cuerda tensa, a lo largo de la cuerda; en una cuerda ligera que pasa por una polea ideal es la misma en los dos extremos.
- **Rozamiento**: la que se opone al deslizamiento entre superficies; se estudia a fondo en [[fis-dinamica-aplicaciones]]. En este nodo se supone despreciable.
- **Fuerza elástica** de un muelle (ley de Hooke, $F = -kx$), que reaparecerá en el tema `fis-oscilaciones`.

> [!practico]
> Un **diagrama de cuerpo libre** es un dibujo del cuerpo aislado con **todas las fuerzas que actúan sobre él** (y solo esas), como flechas desde el cuerpo. Se dibuja
> uno por cada cuerpo, se eligen ejes cómodos y se escribe la segunda ley en cada eje. Casi todos los errores de dinámica vienen de olvidar una fuerza o de
> inventarse otra («la fuerza del movimiento» no existe).

**Método general**: (1) diagrama de cuerpo libre de cada cuerpo; (2) ejes (en un plano inclinado, uno paralelo y otro perpendicular al plano); (3) $\sum F_x = ma_x$, $\sum F_y = ma_y$
para cada cuerpo; (4) resolver el sistema.

## 6. Aplicaciones típicas

- **Ascensor**: la báscula marca la normal, $N = m(g + a)$ con $a$ positiva si acelera hacia arriba. *Ejemplo:* $60$ kg subiendo con $2$ m/s² marca $708$ N; en caída libre marcaría $0$
  («ingravidez»).
- **Bloques unidos por cuerdas** (sobre una mesa lisa): todos tienen la misma aceleración $a = \frac{F}{m_{\text{total}}}$; la tensión de cada cuerda es la fuerza que necesita lo que va detrás.
- **Máquina de Atwood**: dos masas colgadas de una polea: $a = \frac{(m_1 - m_2)\,g}{m_1 + m_2}$ y $T = \frac{2m_1m_2\,g}{m_1 + m_2}$.
- **Plano inclinado sin rozamiento**: el peso se descompone en $mg\sin\theta$ (paralela al plano, hace bajar el cuerpo) y $mg\cos\theta$ (perpendicular, la equilibra la normal):
  $a = g\sin\theta$.
- **Equilibrio**: un cuerpo colgado de dos cuerdas simétricas que forman un ángulo $\theta$ con la horizontal: $2T\sin\theta = mg$. Cuanto más horizontales, mayor tensión.

## 7. Errores típicos

- Pensar que hace falta una fuerza para mantener la velocidad (sin rozamiento, no; lo que cambia la velocidad es la fuerza neta).
- Poner en el diagrama fuerzas que el cuerpo ejerce sobre otros.
- Suponer siempre $N = mg$.
- Creer que acción y reacción se anulan (actúan sobre cuerpos distintos).
- Confundir masa (kg) y peso (N).

## 8. Resumen

- Fuerza: interacción, vector, en newtons; fuerza neta = suma vectorial.
- Primera ley (inercia), segunda $\vec F = m\vec a$ (forma general $\vec F = \frac{d\vec p}{dt}$), tercera (acción y reacción sobre cuerpos distintos).
- Peso $P = mg$; normal, tensión, rozamiento, fuerza elástica.
- Diagrama de cuerpo libre y segunda ley por ejes y por cuerpos: ascensores, cuerdas, poleas, planos, equilibrio.

## Repaso: lo que debe quedarte dentro de un mes

1. Las tres leyes de Newton, con un ejemplo de cada una.
2. La diferencia entre masa y peso.
3. Cómo se dibuja un diagrama de cuerpo libre.
4. Por qué la normal no siempre es igual al peso.
5. La aceleración en un plano inclinado sin rozamiento.

## Siguiente

[[fis-dinamica-aplicaciones]] (rozamiento, planos, poleas y dinámica del movimiento circular).
