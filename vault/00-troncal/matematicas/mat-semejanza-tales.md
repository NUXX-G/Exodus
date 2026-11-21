---
id: mat-semejanza-tales
title: "Semejanza: figuras semejantes, razón y escalas, áreas y volúmenes, teorema de Tales, criterios de semejanza y teoremas de la altura y del cateto"
area: matematicas
trunk_level: 3
prerequisites: [mat-proporcionalidad, mat-poligonos-circunferencia]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 7: «Semejanza», secciones 1.1-1.3 (figuras semejantes, razón de semejanza y escala, semejanza en longitudes, áreas y volúmenes), 2.1-2.4 (teorema de Tales, demostración, recíproco y aplicaciones) y 3.1-3.2 (criterios de semejanza de triángulos, teoremas de la altura y del cateto). Apuntes Marea Verde, autor Jorge Muñoz. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/07_Semejanza_4B.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 6: «Longitudes y áreas. Semejanza», secciones 2.1-2.6 (figuras y triángulos semejantes, posición de Tales, teorema de Tales, proporcionalidad en longitudes, áreas y volúmenes, escalas). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_06_Longitudes.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 8: «Geometría del plano», sección 2 (semejanza). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/08%20Geometria%20en%20el%20plano%203.pdf"
hints:
  - "Concepto: dos figuras son semejantes si una es una ampliación o reducción de la otra: ángulos iguales y longitudes multiplicadas por el mismo número k (la razón). Entonces las áreas se multiplican por k² y los volúmenes por k³."
  - "Herramienta: busca dos triángulos semejantes (basta que tengan dos ángulos iguales; aparecen con rectas paralelas, sombras o alturas en triángulos rectángulos), empareja los lados correspondientes y escribe una proporción."
  - "Documentación: Marea Verde 4.º ESO B cap. 7; 2.º ESO cap. 6 (sección 2)."
exercises:
  - id: razon-de-semejanza
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un triángulo tiene lados de ${{a}}$, ${{b}}$ y ${{c}}$ cm. En un triángulo semejante, el lado correspondiente al de ${{a}}$ cm mide ${{x}}$ cm.
      ¿Cuál es la razón de semejanza (del segundo respecto al primero)?
    variants:
      - values: {"a":6,"b":8,"c":10,"x":"15"}
        answers: ["sha256:c4c418db0fbeaec7252c4ee1895cdb28af4379b6c85969409c8262a85071855f","sha256:702647df14bcd37b9b8c1e3643879f8df6c7f7d4da9102c3b19395ccf2c8a2a0","sha256:8b04fbd56306d7b4df23d6a56199cdc16e1522b776d90262f0f78ccd1b76774d"]
      - values: {"a":4,"b":7,"c":9,"x":"10"}
        answers: ["sha256:1ad0095cad4eea3270aabc1fd922d08d74ff5811fe93cda406d170e05d7a9f66","sha256:94fb6dae9975ba4cb6cb402c0d68cf8a3473a56b2bed6e004e2020aee617f781","sha256:7e106e19a3051dc7a72d55d124602abaa2b22171177a95b95bafbe7e27a63b5e"]
      - values: {"a":5,"b":5,"c":8,"x":"2"}
        answers: ["sha256:03c1df74bd969d2a41783c14ce6e856381924685b2a2b17596193088d9ca5916","sha256:0ba4c4240bc75527af73aa707a8406a8fd9ae9b4e9209c9b6e8208d83eba949b","sha256:2694010dace89a7c80d785a2c188b16e70348556aa26efbe7d38df52bf3d9884"]
      - values: {"a":3,"b":6,"c":7,"x":"13{,}5"}
        answers: ["sha256:ae914b9773222e40a9827e1f9d7df9a1341a54caee006c425dd9ffd185d77f54","sha256:122a29461973f51a4a724fcc740ccc1d71e8e50803b08de46b3e7f4937b49a7a","sha256:b5b65232fa3bcebe6f80882babc883da0b99116322ae10798b1a640722d174d5"]
      - values: {"a":12,"b":16,"c":20,"x":"3"}
        answers: ["sha256:850666a37db6545574c53e5bc2315d5dc92d475eca8b2a86789d3d05820afcab","sha256:d7bd61d91c821a83c2fa26d127f3c71634cfb08caebcdcf8f211bd1fc08c50b6","sha256:605d0ee373e0b2365854781cd8e5f0ef2d1eee5a5b94314e76414fe534b46670"]
      - values: {"a":9,"b":12,"c":13,"x":"22{,}5"}
        answers: ["sha256:6d7825ce4f8ca77840495ff586742b58a0c7d11428760bc8a8775ded8805b278","sha256:c19072c09e28aa93b6074bd185f65ec7ac5c123a1735b8def7943c30abb3e515","sha256:bc7e784505cdba5c1f51d966d5ba111c9b38687aff922a5a28c1fc0a5410eb24"]
  - id: lado-correspondiente
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un triángulo tiene lados de ${{a}}$, ${{b}}$ y ${{c}}$ cm. En otro semejante, el lado correspondiente al de ${{a}}$ cm mide ${{x}}$ cm. ¿Cuánto
      mide el correspondiente al de ${{c}}$ cm?
    variants:
      - values: {"a":5,"b":7,"c":9,"x":"12{,}5"}
        answers: ["sha256:23997fa381e8ea98007391908067f8bbac712d61c22af5dbe0486a2b094454f7","sha256:173ef90b61ed4b359a5abd11dc96369dbc4b48e32c8212328e2765398fd2e60c","sha256:79e7be070d1906980e4ef8ea29d1c8a2dd4af3a4f336bcc1b1ce692df135ec8e"]
      - values: {"a":6,"b":9,"c":11,"x":"3"}
        answers: ["sha256:dc62cccfbf89aa0f899a677d13a5bdaae9c574b5fbb922bad1be882f63b40c22","sha256:57d30c4b1f4955cab1ae0f77b241dd64cdc9202217bffd98a2aa62cd4bc22d55","sha256:7f8c3f630124a80d10e9d506204b2bf089eae284c617a6b11ad9b99f9e195499"]
      - values: {"a":8,"b":10,"c":15,"x":"20"}
        answers: ["sha256:3eb3da553272816ea1421471f45d3d54b33f9469e0cf3921e1e5e577aeed03a3","sha256:4a2b50a64efcd11d92e518843da0ad5776b3e5414439165d474ed57b0dfddcea","sha256:17d06390c78e4e04ee26275b166c9a10c89da58d7b304f0c521bf9315df48d17"]
      - values: {"a":3,"b":4,"c":6,"x":"7{,}5"}
        answers: ["sha256:57b76502cccd25f5872c78f98a372f2dc19116d7b53dbb7ea1ada46ddb527510","sha256:6e811bcab2512453f43f867f2ff590e8c78b9a527161ccc32cfec4472dfacf8b","sha256:25f274da3cdf83f9d415b9c6b0730c3517ac1740913b6257fb13b0ee8ee9b0f6"]
      - values: {"a":10,"b":13,"c":17,"x":"25"}
        answers: ["sha256:d410e6d2d57fbd0ff330b9dae306c0dc6e0085982478e43ddcf94b29e64728fe","sha256:255e0e8be8612daaf8d01c9adb630088698adc12509604971b7e6b8c0ccd4870","sha256:cdf6b514bf5163b14c9dc6dd1f727d9baf500d3353f49e4bf68613818271b616"]
      - values: {"a":7,"b":8,"c":12,"x":"3{,}5"}
        answers: ["sha256:9a9a7561740c2838e4fb3f3773c3bb8939c25a7430ac74cf0f4a9d899c0af00b","sha256:dd2f8adbbc358481afdc2e8ef3047bc808e26b85c0d63407d3f6cb4d4a88e36b","sha256:08fd9946f3c0285f9cb5691f8475e25d1f540eb855c1d2822234070e80da9675"]
  - id: area-semejante
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Una figura tiene ${{A}}$ cm² de área. ¿Qué área tiene una figura semejante con razón de semejanza ${{k}}$?
    variants:
      - values: {"A":18,"k":"3"}
        answers: ["sha256:929cc607933cbbf723ac208cb47df53531b697fd234ed606168582c78f492224","sha256:6e1ca9c9f7332eb992580327e58ae27289be642a2ba3812b6460cb2852edb513","sha256:3ed46ecb6292e0e15598395e45ddd7da1979e4c6976c590fb69de01839dab01d"]
      - values: {"A":50,"k":"1{,}5"}
        answers: ["sha256:2da924ccec83ff65a0ed8dfa1bbc8be6424f96011def0452ed23ae28ece42d7a","sha256:63efc7dc184811439b241427108ea1bbd5590bcd2523c9addbdcb83a6f25d156","sha256:94d273704414bc9a581ed35570ac87b26700e8b43fb0625285067a5af8876476"]
      - values: {"A":7,"k":"4"}
        answers: ["sha256:4b73cc3b79424db2df8a7e53312f2acd9553ff0be446c6e7e055bdb58cab06be","sha256:ef1c155a056875ed60c54880a782201f46fbcaae844372af809dc7da75088054","sha256:1a8cdf1eb01b942593407641c220c7c56a6e290ff4c24426507b51aaa9760233"]
      - values: {"A":120,"k":"0{,}5"}
        answers: ["sha256:d9da4213f55ca0d78b4ec8a6d304a781e984ceeb7bc0c8a3bd5154d1da7b0d76","sha256:275d8d5c7ef63a434638887842251c54f5b8a3e69878f289a86e90fcbf2129e3","sha256:05276526a905319448d1364c1db0d1bedff37b1f328cc27dc74ca65c1da5e2ee"]
      - values: {"A":9,"k":"2{,}5"}
        answers: ["sha256:27a9ae88beb44e087fd689861f3af9a1a514c14512951fb3405a1d10ae2d0e65","sha256:7819f2c338ace1e86841d359f5b47e4b320383e2f6f4c4973baf5cfbdb0d52ad","sha256:b8ee4e8141b1221214daa8bb38f0d091718c877bed72d6c9dd8fd3ea69b6cc37"]
      - values: {"A":45,"k":"\\frac13"}
        answers: ["sha256:da34772b3cf02dfacd9bfa66cc360135aeba2296b9aea8f58db3727ce87ba722","sha256:e0124df567c558d1ab1be8abc6c21c72d82e5edfb695043f2d1d8bc773bb2bfa","sha256:390acd5cfade071e3a2aba284f9c136359c2b9341c31358564be4caba1ed5e9a"]
  - id: volumen-semejante
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un cuerpo tiene ${{V}}$ cm³ de volumen. ¿Qué volumen tiene un cuerpo semejante con razón de semejanza ${{k}}$?
    variants:
      - values: {"V":40,"k":"2"}
        answers: ["sha256:6c9c88344cf49e96ea06e25a6a45c0754fb67c76cd80e1fc0a2d73fc0ba95a22","sha256:81fb06f03378af7a2821965b4d631b24409aa7d9dcefce44038541f5ff742cc9","sha256:63b58ac82154c1b6d8356602cb432212e803f3b8fee8577803fdcff533835e51"]
      - values: {"V":270,"k":"\\frac13"}
        answers: ["sha256:af9c24180c401b08aa8544991c44e1355da11eac6ac47cc5bd768b36f7298c2f","sha256:db833d04ca332894602c1235a3e428723174caca8f8fc2f8fa19c5364a1b9f8c","sha256:30972370488c4384e44b7c6d276468a925763caf2842da044cd9868e7996e44c"]
      - values: {"V":12,"k":"2{,}5"}
        answers: ["sha256:1573ce9e65fb153a7b8d1d13a68bb17d6accc3ea0966c6207937492a1fefdc95","sha256:f19f32378e8b3b2b0777c57a47ba10f3d61adc07d9fc833862e0b9a951c60f05","sha256:eb1dfd5473dd16767aca536fabf22df4bd56a0c4e81b65eaadbd26a666d878e1"]
      - values: {"V":500,"k":"0{,}4"}
        answers: ["sha256:001732b3475a2db1243999e4f6faedbb833e2a5d8da6eed3505049b9d847e192","sha256:3836500cde797e05d25986ee76b8367db5f1e11f378b5d2c9c44dbfbc56ac3b9","sha256:bcf262767192a344ba4dad06a118a45cf71c29285e329029acfda547a7948071"]
      - values: {"V":8,"k":"3"}
        answers: ["sha256:bf815b346be6476fa56cea14bd2abdc5b8c8e2308a95ba8fe4f11480a4e66529","sha256:0ae26dd9069b04d4f256e1980dd49c9cf94181881075cbe1b9ebf7cf64e94d18","sha256:84f9f10427ee07ecf161fb06d96cb212f9fff14f8abf2c4dc8c89b30e0c63fca"]
      - values: {"V":96,"k":"1{,}5"}
        answers: ["sha256:63192ee03a088b93e4d759148e518538143a891ebd52eced9e492c43574c8580","sha256:ed3f3cde6d362940a546df5180814a237e714067cde79559f39574ee49ab38b4","sha256:e21f34f0eecdd95462c37f66e243d1f25921294eb2edf620d2fd2f8027b5634b"]
  - id: razon-desde-areas
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Dos figuras semejantes tienen áreas de ${{A1}}$ cm² y ${{A2}}$ cm². ¿Cuál es la razón de semejanza de la segunda respecto a la primera?
    variants:
      - values: {"A1":"12","A2":"75"}
        answers: ["sha256:7a2abe646e0635f1cb820ed1468d70ef8d59192fdb225d29c29d10218a362dff","sha256:acf8aa7907415376d3e5fd5b306052847937a7b65b1a45b4d4a8162f7f357524","sha256:83f38557d6b8094320f3e4a0dde251067f1a7da9b2e7f6f3f3f2a9705eed6293"]
      - values: {"A1":"20","A2":"5"}
        answers: ["sha256:8935387647df54336dca9de2a6dcda21d7ac1fd101ea16a26771e77f9c06443c","sha256:407f4a9b949e7d09660ef44ebe6b2fe3a64822ad4ecaadb6e7256a2528bdbcc8","sha256:30c7e73eb883ff0261e1297a7c25191f27c6c708bcef464536960b346c0442d0"]
      - values: {"A1":"16","A2":"49"}
        answers: ["sha256:c13b0ee25b647c171f49ca2d678b4f1d25ba472b4c986d11e9331bfd975db7f3","sha256:22bf1e81254f5100e28bc57d191ea570581c6b98ecf6f7aaf7e54e091be4bced","sha256:c47da954a4620d4804236135a9097fad51e9b6a91933d0e611fbc35f9c0e518c"]
      - values: {"A1":"32","A2":"2"}
        answers: ["sha256:fd5464f020b371cfec5325798756047cd751d42906e1d81b37b35340444c6f32","sha256:2097b81913c0c1351f3530b82c150df2dd0220d8905b4eb5e2460e43b413239f","sha256:cd8b2ec29d4fae595700f32d3ef349eeb2a646b76f25af1972fb18ab7108d7a6"]
      - values: {"A1":"18","A2":"40{,}5"}
        answers: ["sha256:ec3e202be1dec392420528aefdf9a0d9916e0812eff3f8e1ae7248941b94e80c","sha256:88d4c96654dc495e82adc478a7d37f92cd5641aad86b0b4fad90df3d0cd6856d","sha256:8882041668e6c32c861f965ad1ad9224ad78262cc1175bea50855f1a3ad914b4"]
      - values: {"A1":"100","A2":"64"}
        answers: ["sha256:900b6d72f501852c7b2c9dfad0e569cc23609051dac30134d60b6fa5a370e123","sha256:b1fe1b480ac1358b5958c45f5e13f72882a00f8aafd385c303ff89f5bd8777ef","sha256:589b35a0237625ec363094f6927a7a86fc300b3f4e789da8279e466b460720d0"]
  - id: teorema-de-tales
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Tres rectas paralelas cortan a dos rectas $r$ y $s$. En $r$ determinan segmentos consecutivos de ${{a}}$ cm y ${{b}}$ cm; en $s$, el segmento
      correspondiente al de ${{a}}$ cm mide ${{c}}$ cm. ¿Cuánto mide el correspondiente al de ${{b}}$ cm?
    variants:
      - values: {"a":"4","b":"10","c":"6"}
        answers: ["sha256:0438d691fab39f4b2530a24a65a9a14061012dbfcf3fa0876f75c6f6f80905bb","sha256:0b86e56977fc80f5dfd9b933cef904a42c310b0ade530396c64b0c4fd88424e1","sha256:dd93b8331775a353e2f0c3ad1e5a3a88244a376e63679780ce723cc3d6cc1af9"]
      - values: {"a":"7","b":"3","c":"14"}
        answers: ["sha256:e6b8ff2550490511e4e731bcd9ed557e546c8d73f200ab7fefa5bf90db9ce360","sha256:59fcbdc7e9f50eb21f2e217e48bd67d9dfbce41914c0781d0483868b5016e415","sha256:09920e70084dad25b64347d47dfb5fbbe70919d1a82445cb9b6f4b8d38bf1381"]
      - values: {"a":"2{,}5","b":"4","c":"5"}
        answers: ["sha256:91bb2eed0377e17cb52df3e57c0b94e0f5588433cd979c777001b2e548376e86","sha256:c2e98df69a90481d6520faa6e5deec322a0d1d2caba787661bc0fc58c41bf09d","sha256:f2bc65c29a73fb1c2d8147a552427acc4fb43e8c619f79961f4b265bb7d496fa"]
      - values: {"a":"9","b":"6","c":"12"}
        answers: ["sha256:339bf0befcfe8cc5b365c1668a5c261fb8cee5dfaa8df8c33643324ff3e473ac","sha256:1072f8c5b24e0ee68917997c35140688ab03b4524d8c764eb6af532a7acdcd91","sha256:692f9e109b1ffa14ec838e98708b9a0c8e51fc0b76dfb0ce2901740e3d83b596"]
      - values: {"a":"5","b":"8","c":"3"}
        answers: ["sha256:0f2f2f3954d31f26211f022263bf5662d35f9d32ca39739603d825d28ca7b633","sha256:6ab8d64f30a214238c4c27755dc653f6508250f71fb0aec8efd513b8b404837b","sha256:c0ca6f0942857b8a43f61af81d2e2031493b81ac0bab640d958bce78e726af91"]
      - values: {"a":"12","b":"9","c":"20"}
        answers: ["sha256:e9fbadadf3f8ab28ded5e9d0a7e1d035fad374d62f7dd31eb53cdcb62740f4f0","sha256:7607c2a97fe2773cee0739a768475b0ff112881f0c2dea4da5d06068c965c1ff","sha256:82f28af31ecff9030677e5a0d67834e0d52fc44c0ae88519603ec94306dec29b"]
  - id: altura-por-sombras
    tier: 1
    type: numero
    sig: 10
    prompt: |
      A la misma hora, un palo vertical de ${{h}}$ m da una sombra de ${{s}}$ m y un edificio da una sombra de ${{S}}$ m. ¿Cuánto mide el edificio?
    variants:
      - values: {"h":"2","s":"3","S":"27"}
        answers: ["sha256:6a7ed23fd3b30e2efb61519c90308e5adb9826618cce4563e89191eca9a14a84","sha256:dc728db23ccacdc7d94215e23c344272948845d78ab635154cd6d821dee652a7","sha256:984df4fe2b508c6278f487597371080041ec478810019a6c803106188056ada5"]
      - values: {"h":"1{,}8","s":"1{,}2","S":"14"}
        answers: ["sha256:892a3cc8c454d23d732da149972c1f53f7d629439d98db99da49463175a21bee","sha256:7cf080b3e64f76d0070840d40f642024ea4604e8c03bd87f531fada4f8502138","sha256:683b804bf91c25ddb19b6e886014b0c7f1340184a538813f58f135b249340c1a"]
      - values: {"h":"1{,}5","s":"2{,}5","S":"40"}
        answers: ["sha256:20168e7e8ced54ac4db2c66cd23d3357ef03f6c1e6f680281f1c0e9391ea54b0","sha256:289cd3590a4f6386ec9e1b691a5e1ace35e8967c8d8d1eebb5dec15e94b84272","sha256:16ee12fa227b03a8f17be2997e1ce597cbc0d715f840d5717513fd7713fca814"]
      - values: {"h":"3","s":"4","S":"22"}
        answers: ["sha256:958a74b9bafd75ba194799b0e591aa6f989c74ecc85e55e45916fa2028e13c24","sha256:106a0d0394caf15afe99ced397a4ccacf39eb36ce7b7402dbb88bc177aa69dda","sha256:a6df39009074f9997498d874703d57b3ae09cabd8b2940e0d4650c09bb636175"]
      - values: {"h":"0{,}8","s":"0{,}5","S":"9{,}5"}
        answers: ["sha256:87b0ed9b8ff26446b745607788d6115a6365ec55ae2210d75a80da2ab4004636","sha256:795ed2299c669584ea76100a0fb58c080e0c7339b0de1fabdb719c6d6238f41e","sha256:4bb1bea95efd5fa5708ec4faf6053935733d6c4fc972d40f00328a74808a353a"]
      - values: {"h":"2{,}4","s":"1{,}6","S":"31"}
        answers: ["sha256:1e734c0493d42e380b97313ba97e26af5947532b50a94d884b35f56ea7087957","sha256:4f801715b91f5f748f3a31e76f6764b1553dcf26f6b702a5822364976a0e6002","sha256:f91f873182ede7a1b1ea86f486b58cd5cce976afe6234512005f5cdb5da2de52"]
  - id: escala-de-un-mapa
    tier: 1
    type: numero
    sig: 10
    prompt: |
      En un mapa a escala $1 : {{E}}$, dos puntos están a ${{c}}$ cm. ¿Qué distancia real hay entre ellos, en km?
    variants:
      - values: {"E":"25\\,000","c":"8"}
        answers: ["sha256:db675e6a17b9eeae433904d86e8436a071eff0314c1ff73728b9c4902ee6d23c","sha256:27db4fdb13ac3207b439b592d03c5f21e39fd90bb4ad9343241e38ecc972fa28","sha256:588ce47b054f2476151b719f28ef9c49dd658060698d21e9b47e65ff5b2d9eb8"]
      - values: {"E":"200\\,000","c":"3{,}5"}
        answers: ["sha256:e4e03e512c6283f40b0f1623a5acabec05562874a3496882dd4402cf6c3fcdd9","sha256:2c335772d891e124575f51e4ebdc5cc02fbfb4a85df0e00a42515e12bd72e48c","sha256:ea41e6f57f365634eace0aea16a6ad55dade1327c46b8e45892453a9c531cf67"]
      - values: {"E":"1\\,000\\,000","c":"12"}
        answers: ["sha256:1de1341a720dbf6a6b7c841b491896278231034c11112d2c7735c16e6a4e2ee4","sha256:d60c98653ac023e3830dc43cb9807cd35c3a06692d6d7f47488a6e9efc7706ca","sha256:82e8c5d3b8f4833311a73b4207400dd4cf4c52a8019a9493f07deab5bfa4a3a1"]
      - values: {"E":"50","c":"14"}
        answers: ["sha256:3c1543728c85cd300d3f6325472c72e04d158895a1e268dc9d128bba39888a13","sha256:67a1ebdac88a2d07bd8d00b486bd82604052ef104c16b70f46123bd2a9e92247","sha256:72857e2513ecadc21fea7659fda1d275d635ce1fd26f50264696bb7ad0de3dca"]
      - values: {"E":"75\\,000","c":"6{,}4"}
        answers: ["sha256:43ee8baf7f221dbaa8417d49b7245e04dc00c01261c04128ff282b04d379df07","sha256:8cf2eb8dfaa825906777d63abf819c05b9d9d6839657c7e06409530ceabd7848","sha256:115b7e138edfcb4886f8ed2b1b7f6157f881add9c09a9b1732a157a2d7a73d2b"]
      - values: {"E":"2\\,500\\,000","c":"2{,}2"}
        answers: ["sha256:a52c27c6080489c03d7cf9e4c307a4ee3040d452b3899b9486dff8f2ed31814f","sha256:92f750e7669b029e278d379701e5036847252183da68b368cb9eabf999fa9b35","sha256:5d33a3e6ac9d7c58b421ace17d14a84be4e2103ebeb5a1bdd0ae9c08040e4d8f"]
  - id: escala-y-superficie
    tier: 2
    type: numero
    sig: 10
    prompt: |
      En un plano a escala $1 : {{E}}$, una habitación ocupa ${{a}}$ cm². ¿Cuál es su superficie real en m²?
    variants:
      - values: {"E":150,"a":6}
        answers: ["sha256:3eb7a39c78d1285e00f9a5228fe4761fc4f3f4a623e7be0ef06d59517071c6b6","sha256:90460f1e86965763610d8265b85d3d9f1137b0ba3f3f4e4136b2646ac675eb9b","sha256:4b89b399f1ee48493a83c5d05df101267262c391d26a42e1db56de0ca3aadb56"]
      - values: {"E":200,"a":15}
        answers: ["sha256:f0cfaf4810befaad482d55a7c5728dc25fbea0997a0e6257ca2b84e460ad90eb","sha256:3690b66f550a068b75369d797e4c39611a3b99b91de8844ef17fcb2eba19c413","sha256:6983d3d9a72f6229b35357f979d203bd13369d4d2fab1bac894082588d628c75"]
      - values: {"E":50,"a":40}
        answers: ["sha256:bda03b56ebbf5746d45480791027cc3889bd09019835f103e74e8c331547dd8c","sha256:b4fecf6a0433d99095b77133f3ba292070f0fc5543d4055c90726c2e1459dce2","sha256:ba2fde6d85c540fe87684df1797e5fabb9c5c259e272145cfcdc5f84ecf11b25"]
      - values: {"E":500,"a":2}
        answers: ["sha256:0d8e7807fd2b593becc8ea14acb706d79920ecd08ac51094bb19ae8b99438622","sha256:4541059c133ee06f666f66246530420adad0673bb6f69a4187b511129ed4851a","sha256:8948ae02184acf38fe0254afbe631757e50e6c11f91c3218fdf24ed99f860028"]
      - values: {"E":250,"a":12}
        answers: ["sha256:38578ee2ca677cc7ad55d6ee1b7db0fb0824531c2ff3b46a65dee08893ac0f86","sha256:703c6619aad8c3b6d87c11ed061d44b9a86d52b2d84691760a156c14ed968e39","sha256:19feabdb67c430fc98c89cc178ad13d4a29a9153d82df98b6445c8431823720f"]
      - values: {"E":20,"a":30}
        answers: ["sha256:599ced2659af523e773b121dcb53b0db302b65a42b50933b9bb3ff6c12533bb1","sha256:bad874930c11bc4342d8700bd55c6930067dfc08a7b9b4f63989bfde397c4de0","sha256:a235cccf12d1146a21a94c6cbd34d9e5fc6982e2b272f9a0ade27aa789627864"]
  - id: calcular-la-escala
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un objeto de ${{R}}$ m se dibuja con ${{p}}$ cm. Si la escala es $1 : E$, ¿cuánto vale $E$?
    variants:
      - values: {"R":150,"p":"3"}
        answers: ["sha256:317baa187fb03e30db0f16a7751190d36b9e2269b7f4508e89dfeea9a00b76c9","sha256:094af464d706ada14c052f24418f5365cad79b53c50728c3341ee6c3f2b5ab20","sha256:159a84a45a4131a9a125f3c3d6d87c0db1129e981c935658307621fc9b700c98"]
      - values: {"R":8,"p":"4"}
        answers: ["sha256:33517711ed043625179c827627e2cace7c88fe43d5e7ae8c9c145506baaed0e3","sha256:f30dfca987516fb02e121a1a41e28817c9b94715b51b2f4103095b835add8214","sha256:7f8c1f470656f7c7b7f1c2b3578d68d140c8ba79be5f17e5706c13fced5235b1"]
      - values: {"R":2400,"p":"6"}
        answers: ["sha256:f00367577f865423dd04fd8c2ffcbe3e554a5e2e4d6141857374a2fa8e7db507","sha256:a700f765556206f19bea8a2619ee873a1d9224ded5b87125ff927b14e8f5731b","sha256:cc0f78d791e83743f4bfdd7589f6fe76bb63a2cb18bdbf1b07a7c2183f0b2def"]
      - values: {"R":45,"p":"6"}
        answers: ["sha256:29889fd830e28cb91ffaee07edde128a89be39fdc28a67f9afa4fd4438054593","sha256:0d275b3721105440f5661edaa7f86e8574c0e5819d44201b2a35071452aea2b7","sha256:03e54b7e7c908ec9675d68adf14390944982bb3582447c85dd797ea0b6bc04e2"]
      - values: {"R":12,"p":"3"}
        answers: ["sha256:3d056ac1a72db0358360784dab2ea922903159e171f28e9a832772dbd5774c70","sha256:921429693f1b57404c5621c1ed40f243653d860a70bd2fee7f2e9d43dc80d820","sha256:45950c5783bc6a35cfe2bfef60e09a5a781912114d438a953e6bd7f37b93333c"]
      - values: {"R":600,"p":"1{,}5"}
        answers: ["sha256:0d947dbed18d04ca0e8dd3bc7133d48da9969d5816da99fa6748852377a33737","sha256:447ad846deec444aa3e2caccc03b5bca4ffdb59c1129c2117310333e11d0179e","sha256:269709589f604b1f003c4b4c52c6568f98501044310607ae8bcac213ce9d25f6"]
  - id: teorema-de-la-altura
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En un triángulo rectángulo, la altura sobre la hipotenusa la divide en dos segmentos (proyecciones de los catetos) de ${{m}}$ cm y ${{n}}$ cm.
      ¿Cuánto mide esa altura? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"2","n":"8"}
        answers: ["sha256:7504d9a8c58864d1de2feeb257c8fe545d4ae504970f2bc0f67ed1c371060dc1","sha256:59219e2e04b4b4ab8bbbfe3b01b54abc10c31f54e39a75ec1d9d4f2f042e0d61","sha256:e9c522ea9818489f9f6b934b8808973776853774df1128a097d2c71cc707d7df"]
      - values: {"m":"3","n":"12"}
        answers: ["sha256:179f37d96fd2179634be76c6edd7320bc74cc9ecd39a6b1fdaf39a76ae121b02","sha256:e13e6662a4d04a3602ecf469f652125da6a22f0efcc1be0009d8d7aa294d2640","sha256:899c7c322434d020cfe4b9f0eabdfd7acffb0b0cf5128674ed026dc15c4c8a6b"]
      - values: {"m":"5","n":"7"}
        answers: ["sha256:5fe66d9e19de43f2cd6231043c78a2350a4e175f55fc90edae595b8ca5937b4f","sha256:ab1ec1a613227e28b2b907cb918e44cc3621bdbb8c51d2047b2bf1c0a1a1e37b","sha256:28d2d95b1e1d2927065444ead22e32ac2cb793c89b6b409efa2da4f2a19ea123"]
      - values: {"m":"1{,}5","n":"6"}
        answers: ["sha256:0731794ec8ac1a9cc7e080577116fd5c6a514689e0b83c76b683cebd7abf1959","sha256:1723db5d0fc4c1fa48504e195063c049ea25d1c872ed2954d76d9855ba43a418","sha256:d2f768425576cd72312db8c550bc57c3f05d9836815d36189fba7f102a8b27ee"]
      - values: {"m":"9","n":"16"}
        answers: ["sha256:92748ad4bb6f96ea6762c42b27417b1cec4164ff4d2d828de91805e36f7d3797","sha256:971be328aaf6bd96ee941f7d898acc278a17db5cf1e8882bad729434f5670ecc","sha256:c9c626d6db61e0ab5dc68bb8e557092baa070a585653d2cb5a0638bf9706c317"]
      - values: {"m":"4","n":"10"}
        answers: ["sha256:23142a3ca36b588852c7cb948e07b62146a7e8d9114f754387bc22034627ae18","sha256:96160e5e927272de2de065e28810b9f070b3d4b6df3760a11ec435dba0931f7c","sha256:86e02bd7bcb57e22be209f174de248e12b31b39c9f337a51cb654b7ae679b99d"]
  - id: teorema-del-cateto
    tier: 2
    type: numero
    sig: 4
    prompt: |
      La hipotenusa de un triángulo rectángulo mide ${{c}}$ cm y la proyección de un cateto sobre ella mide ${{m}}$ cm. ¿Cuánto mide ese cateto?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"c":10,"m":"3{,}6"}
        answers: ["sha256:e489b970c2979b74f93ce0bdfdf581cba5fb94cd712b0dc8768741ffc5ed3ff7","sha256:b7ed9f6f9528d31ab5a1b2f453cc50e94304fac707bf87b39311d072637d217b","sha256:1bd2ea1c779ce5dbd11c6e6ccf89bce340272e5d8475bfa18fd9521c6b6687b4"]
      - values: {"c":25,"m":"9"}
        answers: ["sha256:06a23259a39c890016ba3d2f971334601eee7c1f3f982ea923647037916d129e","sha256:3a382e0481dbfedd5dffdcd28530d6e1d3c6178ae088a472a4db6577107be6fd","sha256:3426a5910ca8e7089cea360ff7e8663a4e42008cceada1032c7f9165e910d07c"]
      - values: {"c":13,"m":"5"}
        answers: ["sha256:c199a2e6741ad8703c93a99775bab922c630e8fda83bc093c2ce31eb38e72bde","sha256:3b365a27c9e0fa86ce8baf1c1dab4147625d4410b461ecda4b2b2f239606dca8","sha256:93ee9d410f1a2782c0c3d5077654a8f65eb6514f32108a79e3b40af828f9efec"]
      - values: {"c":20,"m":"4"}
        answers: ["sha256:82fc684aaf53f68f99e17e66b82e1059f6ebf68e2b33eef1daaa0ca827a6f3cd","sha256:312801e6cfd49d24e4fa2fd450baed55ffe18c8be510e292acaa78490e8e4e86","sha256:2136e6b63b1b3181db0ec441998bf833bc643a0e6417eea940db212b65b59e34"]
      - values: {"c":17,"m":"8"}
        answers: ["sha256:55bb0f1262ca8cc749792ede97fc9ca2f30bc61123f1bd351745c54c2289a919","sha256:8082befea8b2c41de4e60b8b54c34f058d8324a32a58341d32c19acca0802e1e","sha256:7045ea90eb49712dbf4c25a548eadcf30e39f57575c564737901916ffb800cf7"]
      - values: {"c":15,"m":"6"}
        answers: ["sha256:f5ff13dc7328b854dfb36447bcabe590ebf3acbcc5b33984fab0fcb55b85b95c","sha256:d0c45294b45e4a1d571d0d48cb1b6072cb1a923b99c645555c81790955c7dbc4","sha256:edc0eef451b1ec898f04730e4eda35b98c858fba0187cf1a9d6e3fb3081ec92e"]
  - id: dividir-un-segmento
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Se divide un segmento de ${{L}}$ cm en dos partes proporcionales a ${{p}}$ y ${{q}}$. ¿Cuánto mide la parte mayor?
    variants:
      - values: {"L":"35","p":2,"q":5}
        answers: ["sha256:9ba8e9c1339a0fb0296ff4cdcd3e661addbf895545c5702ebc3e604446f56712","sha256:f33058fe8db3a47a3a0e0b61c4116472c9c3d66e6b6380b95e88aeee6a3327c1","sha256:ac19da44b5a1cf1695d3e7c75caab9af4d1f59ac362d6d7db52a0bac71e1a7ef"]
      - values: {"L":"48","p":3,"q":5}
        answers: ["sha256:90ee301db8c41feee058715af6c6eac1fe2b0e5101e55098e6455c84eeb313ae","sha256:d37063d7bb96736a8f30993441715ca2406c614768fe73d509f87fca2cb0bee0","sha256:80687161c335c80283d39bc35e3121b3fe78c6ab2a704ad0bd6398052bb588f8"]
      - values: {"L":"27","p":4,"q":5}
        answers: ["sha256:2438a4f85fb3a0c79658ba42a8a4d516e49f9e47d700112cbe1a5d396764ddb0","sha256:852063f18e6eced333bc98f6ab157dff2bc2aa9deb2a94de7d5fff9bac9af2b4","sha256:27325de0a56a1624f2a9a7e9c426a9f14be61c9c139b7648d1d6ce649fdced0e"]
      - values: {"L":"60","p":7,"q":3}
        answers: ["sha256:324f4a9461bcc2a708eb7302dd1db6c4e752382e5aa5dafb2898f6e5ebbcdd68","sha256:0d36135ddd2440d3d8bf4d8db5a0558b943424e90b5bc398421a8e807e9c820d","sha256:d4f297870c3efc744bbb782c1f621c38fa91aac86764eddbae35783b9134000d"]
      - values: {"L":"22{,}5","p":1,"q":4}
        answers: ["sha256:f4f34859d158a6e96140c54ac964b16a0a122091f5e71e7de1e8841fd6b8a20c","sha256:cc83dac401f0cdf94a36c9b2e30a539b7cc0d82bf953ebac3b357a3d221ef1ae","sha256:33299618f45fac57540755487315e1caf0b0426aa675712f5d6de63e2fefda03"]
      - values: {"L":"100","p":9,"q":16}
        answers: ["sha256:ea3ed4345978a3b5800fd652f1a5eae41bb72859a0833a0593111250b0141a7a","sha256:846ad07bda63d5ab33fd3284bd9c216955fe025099a023353b94ac58811c5b8a","sha256:00adadf6e19c2fee13d75d771b128c96eecfe105244d12574fa866161c8b1199"]
  - id: posicion-de-tales
    tier: 2
    type: numero
    sig: 10
    prompt: |
      En un triángulo $ABC$, una recta paralela a $BC$ corta a $AB$ en $D$ y a $AC$ en $E$. Si $AD = {{AD}}$, $DB = {{DB}}$ y $AE = {{AE}}$ (en cm), ¿cuánto
      mide $EC$?
    variants:
      - values: {"AD":"4","DB":"6","AE":"5"}
        answers: ["sha256:1c337d6aea462f6b0b6898eeb9859dd272f5106cd9c538da58865c7cd6a7a2c2","sha256:f94fcf1bc25a8148d2477dcb634df2a3dc7d97698b62da919caf1e8be18aba82","sha256:aa359989f813cff18b7dd9baeb25bd438038cddb00a9aaaccd6c245c5a1b51c7"]
      - values: {"AD":"3","DB":"9","AE":"2"}
        answers: ["sha256:2f7e028ba1978293a4587d2c48c85ce39b0df37e4e702ade7ddf8260a12e4db9","sha256:e6d8a9756d9257a6a0dc08f8099ff617d16e5cfb82cda096364bc312c9d7bd5a","sha256:e928db032928569bc0d8d1c253132a817c05c9d969adfa0fa1cdf065be285759"]
      - values: {"AD":"7","DB":"2","AE":"10{,}5"}
        answers: ["sha256:097b0cd1f349f6eab93463b49f972dbb6f133acef80ad82e937d761c1d4193f5","sha256:0382b86041d52627b504e62c5f2a3ec58c6f2748b550833655c45ccf2adfad0e","sha256:5745d5699311193bdead871fa8f506ef3a4372e551ce70a9cdfa766a39f240f3"]
      - values: {"AD":"5","DB":"7{,}5","AE":"8"}
        answers: ["sha256:6f52c7c0ac3a5dcbe9aca4fa379064acb7b85b0691848a2559d015bdbf345acb","sha256:39234c46719e21af3f33348a236aa7048c2280d997c84cd2f454a9d09bd6d7e4","sha256:243ff8fafd01dff61e57c61ff66d341b65a9e08a7b982d4ccf4fb2781088bb81"]
      - values: {"AD":"2{,}4","DB":"3{,}6","AE":"4"}
        answers: ["sha256:5c6df2e73eb4a8bb7215efd33371540d3d8e7be5468292af250e538d3bc69f72","sha256:27fa182f211ad966a21c61aa4e43bda171345c70effd07c2eee669286793939d","sha256:419c99750053992be4891fa0dd3105787d3b11890a3058d307b53bebc53c7159"]
      - values: {"AD":"6","DB":"4{,}5","AE":"10"}
        answers: ["sha256:5be3bc4782722c9594add8e622f79d9e7f5cbfcd2e20c2b048a88026451223a5","sha256:40ea612ccf8ee71288f9e5506744c18e078ef1cca50f48eab098736b7a134f11","sha256:71a0d065c143f7bb28345d2e6957ca60af00ca6e46dafd6dbab9b94eff837983"]
  - id: altura-y-areas-semejantes
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) En un triángulo rectángulo, la altura sobre la hipotenusa forma dos triángulos rectángulos más pequeños. Demuestra que
      son semejantes al original y deduce el **teorema de la altura** ($h^2 = m \cdot n$). (b) Explica por qué, si dos figuras son semejantes con razón
      $k$, sus áreas están en razón $k^2$ y sus volúmenes en razón $k^3$, y pon un ejemplo cotidiano.
    sealed: "gz64:H4sIAAAAAAACCn1Ty24aQRD8ldJqDni1QjG5YfkAyBKKcoiUYzZIw2wDY8/2rOdhhSA+xh+QU2658mNRLxDjKM4BCc1OV9VUVe+K6F1O1nMxLspyoK/KEp9JQ02mM4VAJh2eeZ2dBzHUTGELNVcgh84SGoLT0C7loBH9MpAMqgrGM9Rkjlu0qoKaT3ELln8zOduoIe4cUrBncDWZzxSSJSZkxvlY+IW5ZiHdwvi20yGR8L+MqhPddKZu0PmAREwBjY/nSxF2nbWjiOgZkVq615woYmCCTRSsx2RyNcRHj9bG1ovO6QUsBmdmhpqqq2HNn4RHczpr355m/iIgToEQDz8qbMVCcqKm/2kRaHwIFDvPjaV+oNEMVderoM1uMt/vZvM9bnE6mM33u/l0ryrITTI2VOfLaDd/7mHDCtua1WYxkghYDWuuuSwHyz5fi+QbLRJECq9tyo14Q2izS7Zz1mjunVQPqpJATNZN0I1N/ph544WXnFPodNTQJ8+PXx5On7Y4PAcp08Ni1B8tRupGQvQC6B6zpYCVXfftoZqdI9ZC8EIXqwutPdobOhcjNcTMi9TlcU5MfvLu8Kslfut1i/dSxXtqO+fHyKzR2e/fRUPNjT08t5SCR+OXjk7tLEuTdQq+LPFEhiLaw3NEzB2FlTWWbnqUVj9mSuILRaOdhrrGGNfvLjr+5F1uidFad0Yi9mFYVEXIy2BNMf6yK879LMbFhxyTXVmjZedOFeul9i99WabY9/Zf7RfsLnPysRiP9tUr9Ltogl32+9wF3/lg7OEnQzckYWhs4Ryt5UUXrfof3rfeaNnUPhypvzs63uu7iFgW+xgatmi0mEPHSF4TfN3/BjdSDX2vBAAA"
  - id: r-semejantes-def
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa que dos figuras son semejantes?
    options:
      - |
        Tienen la misma área
      - |
        Tienen los mismos lados
      - |
        Tienen la misma forma: ángulos iguales y lados proporcionales
      - |
        Son iguales
    answers: ["sha256:3ff26d1f8f5aae5db43ce5e55b2e0fc1ff0bcd964830d7f4a9bdc46007b80a8d"]
  - id: r-criterio-aa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Son siempre semejantes dos triángulos con dos ángulos iguales?
    options:
      - |
        Sí, siempre
      - |
        Solo si son rectángulos
      - |
        Solo si son isósceles
      - |
        Nunca
    answers: ["sha256:40cd61839587c229422441112f337ba7434fcfbabc7ecbc8141348ac2b0a953f"]
  - id: r-escala-area
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se amplía una foto al triple de ancho y de alto, ¿por cuánto se multiplica su superficie?
    answers: ["sha256:f0fc9836b5c8f7b4069654d1ff0b803a0051be5442a581f1ece9a7e1160164c7","sha256:5d9a7e0509eeaeb7e79c05203867fc0e8afb9e3d31f2ff156ed3ca6c1b67316a","sha256:5e16b2992d46675fa868728b36a53d6679d96e5dc66aab47fb1781864ac86e3c"]
  - id: r-rectangulos-no
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Son siempre semejantes dos rectángulos?
    options:
      - |
        Sí, siempre
      - |
        Sí, si tienen el mismo perímetro
      - |
        Sí, si tienen la misma área
      - |
        No necesariamente: los ángulos son iguales, pero los lados pueden no ser proporcionales
    answers: ["sha256:c5c5d14bd87bacb57bd7fccf7ba88facf02a242b333e67d523d5fd3adc11737a"]
  - id: r-escala-lectura
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa una escala $1 : 20\,000$?
    options:
      - |
        $1$ cm del mapa son $1$ km
      - |
        $1$ cm del mapa son $200$ m reales
      - |
        $1$ m del mapa son $20$ km
      - |
        $200$ cm del mapa son $1$ cm reales
    answers: ["sha256:3e821cfd894cd477556ba506991e4de04a355df7aedf17c2debf097efd520c73"]
  - id: r-volumen-maqueta
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una maqueta está hecha a escala $1 : 2$ respecto a otra. ¿Cuántas veces cabe el volumen de la pequeña en el de la grande?
    answers: ["sha256:31fac068495a65494e5ec6f2393f60f94ebeb8532a020ccc00502391f5016526","sha256:46e61f0fdf689bc9dfd78decac761a6e70cfa5d88360c96c72f0c8efc2664e12","sha256:b77be2fbfe38cfaef1d474d0c9f157a87301d7a8b76fd260cc0279dc9d791813"]
  - id: r-tales-rectas
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si varias rectas paralelas cortan a dos rectas secantes, ¿qué afirma el teorema de Tales?
    options:
      - |
        Que las rectas cortadas son paralelas
      - |
        Que los segmentos son iguales
      - |
        Que los segmentos que determinan en las dos rectas son proporcionales
      - |
        Que los ángulos son rectos
    answers: ["sha256:ef79d01e114b392597c04973de541109999506909b4557404e9ad28e39b29c37"]
---

# Semejanza: figuras semejantes, razón y escalas, áreas y volúmenes, teorema de Tales, criterios de semejanza y teoremas de la altura y del cateto

Según la tradición, Tales de Mileto midió la altura de la Gran Pirámide comparando su sombra con la de un bastón: en el mismo momento,
los rayos del sol forman con cada objeto vertical y su sombra triángulos con la misma forma, y por eso las alturas son proporcionales a
las sombras. Esa idea, la **semejanza**, permite medir lo que no se puede alcanzar, leer mapas y planos, construir maquetas y
entender por qué un animal el doble de grande necesita mucho más del doble de comida. Este nodo la estudia a fondo.

## Objetivos

Al terminar sabrás:

1. Reconocer figuras semejantes y calcular la razón de semejanza.
2. Usar escalas en mapas, planos y maquetas, también para áreas.
3. Relacionar las áreas y los volúmenes de figuras semejantes ($k^2$ y $k^3$).
4. Aplicar el teorema de Tales y los criterios de semejanza de triángulos.
5. Demostrar y usar los teoremas de la altura y del cateto.

## Qué debes dominar antes

[[mat-proporcionalidad]] (razones, proporciones, escalas) y [[mat-poligonos-circunferencia]] (áreas), además de los triángulos y Pitágoras
de [[mat-triangulos-pitagoras]].

> [!question] Test de entrada
> 1. Resuelve $\frac{3}{5} = \frac{x}{20}$.
> 2. Si en un plano $1$ cm son $2$ m, ¿cuánto miden en la realidad $7$ cm?
> 3. ¿Cuánto suman los ángulos de un triángulo?
>
> Respuestas: $12$; $14$ m; $180^\circ$.

## 1. Para qué sirve

- **Medir lo inaccesible**: alturas de edificios y árboles con sombras o espejos, anchuras de ríos.
- **Mapas, planos y maquetas**: toda la cartografía y la arquitectura trabajan a escala.
- **Fotografía y óptica**: la imagen de una cámara o de una lupa es semejante al objeto (el tema `fis-optica`).
- **Biología e ingeniería**: al escalar un objeto, su peso crece como $k^3$ y la resistencia de sus patas como $k^2$; por eso no hay
  hormigas gigantes y los puentes no se pueden ampliar sin rediseñarlos.

## 2. Figuras semejantes y razón de semejanza

> [!practico]
> Una foto ampliada es semejante a la original: todo se ha hecho más grande en la misma proporción, y la forma no cambia. Si la
> ampliación es al doble, cada segmento mide el doble; los ángulos no cambian (una esquina recta sigue siendo recta).

Dos figuras son **semejantes** si tienen los ángulos correspondientes iguales y los lados correspondientes proporcionales. El cociente
entre longitudes correspondientes es la **razón de semejanza** $k$: $k > 1$ es una ampliación y $k < 1$, una reducción. *Ejemplo:* un
triángulo de lados $2$, $4$, $5$ y otro de lados $6$, $12$, $15$ son semejantes con razón $3$.

**Escala**: es la razón de semejanza entre un dibujo y la realidad, escrita $1 : E$ («$1$ cm del dibujo son $E$ cm reales»). En un mapa
$1 : 50\,000$, $1$ cm son $50\,000$ cm $= 500$ m.

## 3. Longitudes, áreas y volúmenes

> [!practico]
> Si duplicas el lado de un cuadrado, caben $4$ cuadrados como el original; si duplicas la arista de un cubo, caben $8$ cubos. Las
> longitudes van con $k$, las superficies con $k^2$ y los volúmenes con $k^3$. Por eso una pizza de diámetro doble tiene cuatro veces más
> pizza.

Si dos figuras son semejantes con razón $k$:
$$
\frac{\text{longitudes}}{\text{longitudes}} = k, \qquad \frac{\text{áreas}}{\text{áreas}} = k^2, \qquad \frac{\text{volúmenes}}{\text{volúmenes}} = k^3 .
$$
Al revés: si las áreas están en razón $9$, la razón de semejanza es $3$. Con escalas: en un plano $1 : 100$, $1$ cm² del plano son
$100^2 = 10\,000$ cm² $= 1$ m² reales.

## 4. El teorema de Tales

> [!practico]
> Dibuja dos rectas que se cortan y crúzalas con varias rectas paralelas (como los peldaños de una escalera apoyados en dos
> largueros que se abren). Los trozos que las paralelas cortan en una recta son proporcionales a los que cortan en la otra.

**Teorema de Tales.** Si varias rectas paralelas cortan a dos rectas $r$ y $s$, los segmentos que determinan en $r$ son proporcionales a
los que determinan en $s$: $\frac{AB}{A'B'} = \frac{BC}{B'C'}$. *Ejemplo:* si en $r$ los segmentos miden $3$ y $5$ cm y en $s$ el primero mide $6$ cm, el
segundo mide $10$ cm.

**Triángulos en posición de Tales**: si en un triángulo $ABC$ se traza una paralela a $BC$ que corta a $AB$ en $D$ y a $AC$ en $E$, el triángulo
$ADE$ es semejante a $ABC$, y $\frac{AD}{AB} = \frac{AE}{AC} = \frac{DE}{BC}$ (y también $\frac{AD}{DB} = \frac{AE}{EC}$).

**Aplicaciones**: dividir un segmento en partes iguales o proporcionales con regla y escuadra; medir alturas con sombras. *Ejemplo:* si un
bastón de $1$ m da una sombra de $1{,}5$ m cuando un árbol da $12$ m de sombra, el árbol mide $\frac{1 \cdot 12}{1{,}5} = 8$ m.

> [!formal] Con rigor: una demostración con áreas
> En el triángulo $ABC$ con $DE \parallel BC$, los triángulos $DEB$ y $DEC$ tienen la misma base $DE$ y la misma altura (la distancia entre las
> paralelas), luego la misma área. Sumando a ambos el triángulo $ADE$: áreas de $ADE$ y $DBE$ están en razón $\frac{AD}{DB}$ (misma altura desde
> $E$), y las de $ADE$ y $DCE$, en razón $\frac{AE}{EC}$ (misma altura desde $D$). Como $DBE$ y $DCE$ tienen igual área, $\frac{AD}{DB} = \frac{AE}{EC}$ (Euclides,
> VI.2). El **recíproco** también es cierto: si $\frac{AD}{DB} = \frac{AE}{EC}$, entonces $DE \parallel BC$. $\blacksquare$

## 5. Criterios de semejanza de triángulos

Dos triángulos son semejantes si se cumple uno de estos criterios:

- **AA**: tienen **dos ángulos** iguales (el tercero lo es entonces también).
- **LLL**: sus tres lados son proporcionales.
- **LAL**: dos lados proporcionales y el ángulo comprendido igual.

El criterio AA es el más usado: lo dan las paralelas (ángulos correspondientes), los ángulos opuestos por el vértice y los ángulos
rectos compartidos. Para polígonos de más lados no basta con los ángulos: un cuadrado y un rectángulo alargado tienen los ángulos
iguales y no son semejantes.

## 6. Teoremas de la altura y del cateto

> [!practico]
> La altura sobre la hipotenusa parte un triángulo rectángulo en dos triángulos rectángulos más pequeños, y los tres tienen la misma
> forma (comparten ángulos). De esa triple semejanza salen dos fórmulas muy útiles.

En un triángulo rectángulo con hipotenusa $c$, la altura $h$ sobre ella la divide en las **proyecciones** $m$ y $n$ de los catetos $a$ y $b$:

- **Teorema de la altura**: $h^2 = m \cdot n$. *Ejemplo:* proyecciones $4$ y $9$ dan $h = 6$.
- **Teorema del cateto**: $b^2 = c \cdot m$ (cada cateto al cuadrado es la hipotenusa por su proyección).

Sumando los dos teoremas del cateto, $a^2 + b^2 = c(m + n) = c^2$: otra demostración de Pitágoras.

## 7. Errores típicos

- Emparejar mal los lados correspondientes (hay que emparejar los opuestos a ángulos iguales).
- Multiplicar áreas por $k$ en vez de por $k^2$ (o volúmenes por $k^2$ en vez de $k^3$).
- Olvidar convertir unidades al usar escalas (cm a km: dividir entre $100\,000$).
- Aplicar Tales sin rectas paralelas.
- Creer que dos polígonos con los mismos ángulos son siempre semejantes.

## 8. Resumen

- Semejantes: ángulos iguales y lados proporcionales con razón $k$; escala $1 : E$.
- Longitudes $\times k$, áreas $\times k^2$, volúmenes $\times k^3$.
- Tales: paralelas cortan segmentos proporcionales; posición de Tales; recíproco.
- Criterios AA, LLL, LAL.
- Altura $h^2 = mn$; cateto $b^2 = cm$.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué es la razón de semejanza y cómo se lee una escala.
2. Por qué las áreas van con $k^2$ y los volúmenes con $k^3$.
3. El enunciado del teorema de Tales y cómo se mide una altura con sombras.
4. El criterio AA.
5. Los teoremas de la altura y del cateto, y de dónde salen.

## Siguiente

[[mat-cuerpos-geometricos]] (áreas y volúmenes en el espacio) y, más adelante, [[mat-trigonometria]] (que se basa en la semejanza de
triángulos rectángulos).
