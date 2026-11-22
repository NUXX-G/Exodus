---
id: mat-conicas
title: "Lugares geométricos y cónicas: circunferencia, elipse, hipérbola y parábola, sus elementos, ecuaciones y propiedades"
area: matematicas
trunk_level: 4
prerequisites: [mat-vectores-rectas-plano]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 5: «Geometría», secciones 2.1 (lugares geométricos) y 3.1-3.5 (circunferencias y elipses, hipérbolas, parábolas, cónicas generales, la hipérbola equilátera). Apuntes Marea Verde, autor Andrés García Mirantes. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_05_Geometria.pdf"
  - "Apolonio de Perga, «Cónicas» (siglo III a. C.), y su presentación moderna en D. A. Brannan, M. F. Esplen y J. J. Gray, «Geometry», Cambridge University Press (2.ª ed., 2012), capítulo 1 (cónicas)."
hints:
  - "Concepto: cada cónica es un lugar geométrico: circunferencia (misma distancia al centro), elipse (suma de distancias a dos focos constante), hipérbola (diferencia constante) y parábola (misma distancia a un foco y a una recta, la directriz)."
  - "Herramienta: de la ecuación general a la reducida, completa cuadrados. Elipse: a² = b² + c²; hipérbola: c² = a² + b², asíntotas y = ±(b/a)x; parábola x² = 4py: foco (0, p), directriz y = −p. Para saber qué cónica es Ax² + Cy² + … = 0: A = C circunferencia, mismo signo elipse, signos opuestos hipérbola, uno nulo parábola."
  - "Documentación: Marea Verde Matemáticas I cap. 5 (sección 3)."
exercises:
  - id: centro-y-radio
    tier: 1
    prompt: |
      Halla el centro $(a, b)$ y el radio $r$ de la circunferencia ${{e}}$ (completa cuadrados). Respuesta: `a;b;r`.
    variants:
      - values: {"e":"x^2 + y^2 - 2x + 4y - 4 = 0"}
        answers: ["sha256:b264043efb574ff39402fc41373d679216e61457fee5cff3f43153b2308445de"]
      - values: {"e":"x^2 + y^2 + 8x - 10y + 5 = 0"}
        answers: ["sha256:5411ea941eeb1f4df180a5aacf517dd4866f10311b9b42a368a44785ff9d303e"]
      - values: {"e":"x^2 + y^2 - 6y + 2{,}75 = 0"}
        answers: ["sha256:213d41397336a54f60bfd2510c20cad44e245f8a65e54f8ba6c299261e03c3e1"]
      - values: {"e":"x^2 + y^2 - 6x - 6y - 31 = 0"}
        answers: ["sha256:6ebd6f36194c8687ba36f286931b1d7ae1102d04bd20e9e5e3edf811f0070ec4"]
      - values: {"e":"x^2 + y^2 + 2x + 12y + 21 = 0"}
        answers: ["sha256:e7442ca69a061fa732b39938e7afaeff57ee1215a5fa21fa6c8a7cb5bc4dc06f"]
      - values: {"e":"x^2 + y^2 - 10x + 22{,}75 = 0"}
        answers: ["sha256:7109ced0d2d591d5d8d22beffbb28f1d33e92ed9a98d376968a8b4f0e9beabe1"]
  - id: circunferencia-por-un-punto
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Escribe la circunferencia de centro ${{C}}$ que pasa por ${{Q}}$ en la forma $x^2 + y^2 + Dx + Ey + F = 0$. ¿Cuánto vale $F$?
    variants:
      - values: {"C":"(2, 1)","Q":"(5, 5)"}
        answers: ["sha256:cdb67968dfbc1d7d0d9d45fbd6e7d9662490d1874ee0ce74125e7a0b1069067f","sha256:7334c7899e2b7ff19a16b00959e673afa766e6a717509fca4610d36282a1f297","sha256:bce300997ef83f8e7475387111778aaa992fc02e9c2294d9738cbb2653a2b227"]
      - values: {"C":"(-3, 0)","Q":"(0, 4)"}
        answers: ["sha256:18682da84bc2ca0a03aad0af4d5a4d94eb55e153b97ca48be9398e3cbac539b5","sha256:0422e5a17921a4a14f5250bddc8ad783c2f278845b1ead1e5ddda3df3acce87e","sha256:da00507b5207f6034f2e604265915429f0d0cf90e9aa5d47c78488e5fafebd2f"]
      - values: {"C":"(0, -2)","Q":"(6, 6)"}
        answers: ["sha256:f921b7d0ec9ec64b3d982b47be965e5c2566f235e0dfd0708932b64ba281eac4","sha256:fbfb7708d43c68d37d6246916cbea66c5cdf320d113999b342f5986e7a11d1b5","sha256:778ea89435c57f14eb3cbd89bd030221aa1402e38b857788e15bdd8fcf5bcc58"]
      - values: {"C":"(4, -4)","Q":"(1, 0)"}
        answers: ["sha256:f0558eb990937e19d991efdd1bae1435085bf170030a907dcdeffe749469d606","sha256:3347cdcf2a4515b2feb0339e6ac5d539e80b67a8a8a43dadc6c59e68dc49c2dd","sha256:aa2cc4e3a368ddb975a942e8a0a251f59a45addadb7da3447d185d7687e0f622"]
      - values: {"C":"(-1, 2)","Q":"(-1, 9)"}
        answers: ["sha256:418e3c6f556c20811f447083ba647fac5d4a3af00ea4622c5ac6545cb91daca2","sha256:329093709389205baf81343deec5b9a89f64e304962f38d0b9ee24feead6ba3e","sha256:b430af7e63a53e45bc7a56ca1ad92b4b643d34071e11ebcdfbaaf75680f54244"]
      - values: {"C":"(3, 5)","Q":"(8, 17)"}
        answers: ["sha256:032d16b5b60c0887513094e83056f9a982ebbf2e359badc74821a6fad25b5943","sha256:81a5bef7a52a7b6275ce6c1f3d83628b6d412795c3209ff4c95672da93b2c237","sha256:61a81ed9b0ab2709bd5d7acc5a3bced4d56a3239055859d592dbeb66e602e3da"]
  - id: punto-y-circunferencia
    tier: 1
    prompt: |
      ¿Dónde está el punto ${{Q}}$ respecto de la circunferencia ${{e}}$? Responde `interior`, `sobre` o `exterior`.
    variants:
      - values: {"e":"(x - 1)^2 + (y - 1)^2 = 25","Q":"(4, 5)"}
        answers: ["sha256:6919d6353a2a0be00c39828def564cead2cb7f28d51be0e1141d0a88f98418f8"]
      - values: {"e":"x^2 + y^2 = 100","Q":"(6, 7)"}
        answers: ["sha256:6b6b85aed8adda90f7a71069f651b0be8cdfcaab56b645a3c065319f6e5d4dcf"]
      - values: {"e":"(x + 2)^2 + (y - 3)^2 = 16","Q":"(1, 7)"}
        answers: ["sha256:a123a777ca1a5b437abfa9e88c1be0cfc36365f125dcaeeacb1f2d762450d1fa"]
      - values: {"e":"(x - 3)^2 + (y + 1)^2 = 4","Q":"(5, 1)"}
        answers: ["sha256:a123a777ca1a5b437abfa9e88c1be0cfc36365f125dcaeeacb1f2d762450d1fa"]
      - values: {"e":"x^2 + (y - 5)^2 = 169","Q":"(12, 0)"}
        answers: ["sha256:6919d6353a2a0be00c39828def564cead2cb7f28d51be0e1141d0a88f98418f8"]
      - values: {"e":"(x + 4)^2 + (y + 4)^2 = 9","Q":"(-1, -1)"}
        answers: ["sha256:a123a777ca1a5b437abfa9e88c1be0cfc36365f125dcaeeacb1f2d762450d1fa"]
  - id: recta-y-circunferencia
    tier: 2
    prompt: |
      ¿Cuál es la posición de la recta ${{rec}}$ respecto de la circunferencia ${{e}}$? Responde `secante`, `tangente` o `exterior`.
    variants:
      - values: {"e":"x^2 + y^2 = 25","rec":"3x + 4y - 25 = 0"}
        answers: ["sha256:41188dfa98d1c8cbd16e57b33edc76fe4d75c778c715e78aac06760eec5db583"]
      - values: {"e":"(x - 1)^2 + (y - 2)^2 = 9","rec":"x - 5 = 0"}
        answers: ["sha256:a123a777ca1a5b437abfa9e88c1be0cfc36365f125dcaeeacb1f2d762450d1fa"]
      - values: {"e":"x^2 + y^2 = 4","rec":"x + y - 1 = 0"}
        answers: ["sha256:cfe3782dd477c1a4d13304d76df25aadb5aab004dab64fafdb88935b2455b858"]
      - values: {"e":"(x - 2)^2 + (y + 1)^2 = 16","rec":"y - 5 = 0"}
        answers: ["sha256:a123a777ca1a5b437abfa9e88c1be0cfc36365f125dcaeeacb1f2d762450d1fa"]
      - values: {"e":"(x + 3)^2 + y^2 = 1","rec":"x - y = 0"}
        answers: ["sha256:a123a777ca1a5b437abfa9e88c1be0cfc36365f125dcaeeacb1f2d762450d1fa"]
      - values: {"e":"x^2 + y^2 = 100","rec":"6x + 8y + 50 = 0"}
        answers: ["sha256:cfe3782dd477c1a4d13304d76df25aadb5aab004dab64fafdb88935b2455b858"]
  - id: focos-de-la-elipse
    tier: 2
    type: numero
    sig: 4
    prompt: |
      La elipse $\dfrac{x^2}{{{A}}} + \dfrac{y^2}{{{B}}} = 1$ tiene los focos en $(\pm c, 0)$. ¿Cuánto vale $c$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":169,"B":144}
        answers: ["sha256:c28b92dfb69bb077b25a6e937f4cb56a1b2642b86c63c222fe998785e32b8a2a","sha256:910527fc71f6df84862d91bffab54fccdfa956e42c9742983e963abb70b99a96","sha256:9b3949a3ee7c5052b7dff54a9ac120aee041b1d5f271ff94713ddb50f5335541"]
      - values: {"A":100,"B":36}
        answers: ["sha256:9b4996fd064b22a3a5833f4fe3a4ec10e87f71ae10adcf3033360c9290ae4870","sha256:454d38a4bf29f7e41543df0f59ecca1b3f01456427017b2d4de80e21b18ae982","sha256:4e0046d47d9aa908b9aec1201437c5fc401b5cb4077e635125f46c90d6881ba2"]
      - values: {"A":36,"B":9}
        answers: ["sha256:11cace19725d485e05261ac6d1134455c9675244d9a5be399e94cc9e0f849924","sha256:a9852d705fbfe651bbf42e01f52b495f90e2e3915c82625a90a4a72dae172699","sha256:80f2f56ec278c5e8e546873dda77b32b8ccc54e3b2a238d070df1c108a1e384d"]
      - values: {"A":16,"B":4}
        answers: ["sha256:4962dde30456fde2e2f5101d88176d964cee19948475c755169a09528c827738","sha256:2862f009c4b1bdaf39545220bf05f13a1f2b7ecaed7f9c480d9bc8fe088e919e","sha256:3f408e17c9a66b0493b1631eea3bf940f0d66760955de30859f97bd3fe8c0d1b"]
      - values: {"A":289,"B":64}
        answers: ["sha256:4a2efb528135628ea5b98d6fcf43d02cc1e13bf28d0fc808272fbeafb23361ee","sha256:e2129637dde63e76c7dafcb89ee4302a1be46bd046b2e094e915e2a1d09f0089","sha256:72e84b8066a6357c76f21003d2c0c9cb47cdf1651cda721a3f30b7e67a81976f"]
      - values: {"A":49,"B":25}
        answers: ["sha256:80e37a3b3e605604c4bb260c3ced88cb8f8995f5abe8411e921ae3d3f0c20fae","sha256:7c1c348cde0c88451182c6db1a7c85efcf743e2c51e334797079bc8584b1b77a","sha256:343aff8d768d0765fd5ec8843d9bad71da356630eead4b16ecf50dc5a0f98fbe"]
  - id: excentricidad
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la excentricidad de la elipse $\dfrac{x^2}{{{A}}} + \dfrac{y^2}{{{B}}} = 1$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":"25","B":"16"}
        answers: ["sha256:7377c4eac9ea3ff7469b15d4bde66f90691aad7e1fc68b5e77457eb7138c4b2f","sha256:032391d490318976bba08920c083f22ed2b15a54074031cb7cc1fb86b6914292","sha256:2b85d082ad821a868ad3e3ad4b55f785a0f608537098608edc8cf6cb9fef4927"]
      - values: {"A":"100","B":"49"}
        answers: ["sha256:7098e680f7754d5b7ce15d06a44e0e750dd56b5a00c54dbe82e537899f9d8799","sha256:db6697945dcdc58adfab1df2d7f97090a6a94ef2632896758c9fc3877bc88e81","sha256:a983664652269112a9a814622e3b98a6a7ef8477f65e0203ebafc4d7192e0f30"]
      - values: {"A":"36","B":"4"}
        answers: ["sha256:ceea0ff18976fa108de305bee34c40c777571fcf26353dc576a1e0905a70d9f2","sha256:280f43610c70db3f4f8d5f30c8fb0de6c54c6e83ee8755850e12cfa3cb747abf","sha256:bf46c80ad9984e527569d3963f68b023e8336c68d4c3604678cdc7bc54fe77ea"]
      - values: {"A":"625","B":"49"}
        answers: ["sha256:dc1d712b7784ebf6e06be533a546eaf47201817f65ebffb930d757dbaf378c45","sha256:dfccbea82775ec833673123fa33d293cad578d023a4d79ef45c0f04fb3264128","sha256:bfc3728c7b883657f67a27cc5ea120fc7cede9f10815080add5499d9c2df023a"]
      - values: {"A":"9","B":"1"}
        answers: ["sha256:c8974420935104a33ff8899e58942cfff10acaa9cca25d80f3288532ae006ae4","sha256:aa89f2559fcda618b0c94b99c5f77920854f3658f36472036e2cd0b0848df407","sha256:6774bc9c026b06ffe16a3f7fd075423e255b1c4c25e18f2db63c37226063c44b"]
      - values: {"A":"81","B":"60.75"}
        answers: ["sha256:a8d2ad312c84818a8e4f85c6330dc318464ad3bf6ab07e5c892a9041113507bb","sha256:f9f5a7b42451d8b4ea057ecac89794cda62810cdadcb179ae0e69ac694013538","sha256:adbd3db548204a4ebd5ccfb93b9e959786e8486f1a8d34ed7fe845bd0995f737"]
  - id: hiperbola-focos-y-asintotas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      La hipérbola $\dfrac{x^2}{{{A}}} - \dfrac{y^2}{{{B}}} = 1$ tiene los focos en $(\pm c, 0)$. ¿Cuánto vale $c$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":"9","B":"4"}
        answers: ["sha256:1268e581b281629f499cb7df09119fc6f35e869109bf1f9ef200a95cc38f8ef1","sha256:fe75a1308e05ae36b82ce20d0aaf1d96e1b22754fc24e611e1d71f2411aa7449","sha256:b6950f49320d7429ad4adfba0425f2b5f8d7649fe9d46f3b2f4c004f6b94b967"]
      - values: {"A":"25","B":"144"}
        answers: ["sha256:8c3fccde8ca6b5431912a86fb41c5076d5a5602876840d4efc41efbb01d040c0","sha256:bc590fdbddcd47b656f5cbf5db6ce5964ab11bf03a577ea71beb9448a8645b53","sha256:5c8a501faa82be2cb1d9b0a36e083f2249b83a831bb3d6f2219b2defdc3b8792"]
      - values: {"A":"4","B":"1"}
        answers: ["sha256:295b8407b95f88f1aac5745aa4501f98868ab58b23515b76034cb671819cdb12","sha256:75a734db87037b92ab47ab1d7a9b7dac3a56ffa5c1d57cdcf0982d0967779a5e","sha256:b8d6c91858983af6c32bf0826e155c64b243fc0ecf58544504fe4ae675beed16"]
      - values: {"A":"64","B":"36"}
        answers: ["sha256:5aedd3b1b290e50bc58d84bd9f22f786ce795b120920c382690c5533a44bfa5c","sha256:7c885d5bcd159e329da6979d7b0d80b0993cd502cd29479ec6dfecd1dfddfb53","sha256:44aa3da6700a717d7b5ab0f58272e0f4b43a26e323c6f0901a7b2f338061f26e"]
      - values: {"A":"1","B":"1"}
        answers: ["sha256:b31e264ca41a3fbc649db27a74b4edc7286903dad29710e8e033ef768fc1cb9e","sha256:7281fa51f734874169b4d8622f482572c8aa950212f67a3fc043ad49f13e4996","sha256:be4760745dae28c814506c5786d5352c036b338092b7039a51344dd9c29d3cd0"]
      - values: {"A":"36","B":"6.25"}
        answers: ["sha256:c1252dc2abfc0f0a9c81f542217200e0c3113e87f8080d0816833145e80ff350","sha256:80bccfafb893d397a0eabb7e087d358d55bc2a1ca444ac23cf7af8c962f0c407","sha256:e3ae876d423461941c817d7fb417ce0df542eec235f5993936a68302da7dcd17"]
  - id: foco-de-la-parabola
    tier: 1
    type: numero
    sig: 10
    prompt: |
      La parábola $x^2 = {{k}}y$ tiene su foco en $(0, p)$. ¿Cuánto vale $p$?
    variants:
      - values: {"k":"12"}
        answers: ["sha256:69f34ecd0f4de6543dccdbd1a3fcba37e772f8849f24c6bdd9530493b007470d","sha256:44b2a09f0013b3fc9f6b61ff48418ef50c4a59956849688c73341874cc4a7887","sha256:c3c7e62f2e8f7e493fc4047b3372c05dd91341f5db1a8a53220509b01ee843c6"]
      - values: {"k":"4"}
        answers: ["sha256:f1e7e41c397ed4849cd9387f5f7ead9a86ee73cf0d52069fd863a3b1b17e3db4","sha256:02cb2174266c872c16a9f8cb17ac9a2419d40809852426fd26f5eaa1dde258f2","sha256:e6a46c99fbceff3229aeb87b847847301c602a47ded754f8f90a6e543693d440"]
      - values: {"k":"-20"}
        answers: ["sha256:7c7b72dacbd2f757535a8642f984fd8ee106d1afa7b9f5e6ac98c7f7f1f5d0ba","sha256:5a448b5a919f2e7636d00700ffa5205689a15f0204ad02454923254499d0140e","sha256:705b02ffcadc57f5f9669cb4564900bfdfa1905824d4747ad2907e091856b2f6"]
      - values: {"k":"2"}
        answers: ["sha256:03bb9d7ecd1763bf8905449125320db5511e4b009c063f5d0ff8524295420e81","sha256:a87ca888b0462de8bb6eaf4d9109da20b3bb2a4552ab2ede97e85b1523b1086e","sha256:127f86047ec401ee209c03b10d9ed68acfbed77d3137c5362a3908dbc37a393f"]
      - values: {"k":"10"}
        answers: ["sha256:17d00d665c4e233dfb1ac00db5d9394215e175fbdb1e42f931a342e5f2c8163a","sha256:821b853205ed46c7b7a4d05980874f23f3714aa38ef7c8233360c7ccdb708c25","sha256:3ab9b7c3c9228c1053caf26e6c11158ec01d526927c9bd2814f5fe89f1a4b013"]
      - values: {"k":"-6"}
        answers: ["sha256:0b0786743b36f5c14d9f6441329a9b8abbaa0a81e087ebca8128be441b60c261","sha256:189996fbea4fe6b2cf97d450e34b336c6f3d84621c201f13e7cb71426713bfd9","sha256:7c0970d35bb13c0e096315ebfaf283f9e649fe097af66cdc0bdc71d9fd1be5f2"]
  - id: distancia-al-foco
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En la parábola $x^2 = {{k}}y$, ¿a qué distancia del foco está el punto de la curva con $x = {{x}}$? (Usa la directriz; al menos cuatro cifras significativas.)
    variants:
      - values: {"k":"12","x":9}
        answers: ["sha256:5d34fa1c81331a0e294e4e1807a80ed2201dd9a58adbd2ea54537546873827ff","sha256:b4b753f7e08f709c6aa65e629152a75a98674e0dc1a9deb9b3b04a063027335a","sha256:f5c5582b7af2bca099818133b274418bb0c4ab267c5a983808bad9991523e611"]
      - values: {"k":"4","x":4}
        answers: ["sha256:b81ff3a3b79b11bb118f34acd90c0e2dd2dbde63a1807316c80c54769c42075e","sha256:9212cd32bf904b813bf11bb6c287c31e1ca8aa9ad09594ec1e853eda9258715e","sha256:01d18000e586c461ba3871ab23fbc710134fc3487bc960d149218796f710ece0"]
      - values: {"k":"8","x":-2}
        answers: ["sha256:9ac2bb85d99c3024e63ed791819ed5c3175a4aadd68af15d944500ce2f81ecd6","sha256:8cf271b143a745f55f397c3a434ff5ec46b74feba133df4fc80193e814e44451","sha256:2691989eac592e086694ae18d1632524a3f37ed19b9c50f50cbf01ab30905e87"]
      - values: {"k":"20","x":4}
        answers: ["sha256:1215a224866ba966f5cdab8a53a1b16493c9f1eaabb2803c3faee6c1cd156e87","sha256:49772c772ef8e5de2e28278cb13774a85e92c66855eac96516d674ed4c576d80","sha256:9fada012e097cbe24abc045b815f1ec6c94e3bb2a09b1f0ad1d5e0530230f2ae"]
      - values: {"k":"2","x":3}
        answers: ["sha256:0ccd2ff86aad35c5dad568119a6dc3a8f6bc99ed264a33102db2be6e78dba3fa","sha256:53d025c92d47f21ad2292b21e1a5313e1e459e93c32111563487d7119433c1d2","sha256:91ffdd571a9ffb610f771c5382c85507a5f0f9bc891bb8ab96d41280922e25b2"]
      - values: {"k":"16","x":-4}
        answers: ["sha256:3f886cfc1649f78a9e8cf57b28e80a7e06ea0adba8a7ae8739877a3fb8af69b9","sha256:2e4012f00fa45428170260c964248d13adbe344eb34c9438efcbdb04e03f8e6a","sha256:3645452ddfc6aeb8d94da5119738b2b446cc1f126ca51cab79efc0fc2e0a58b3"]
  - id: suma-de-distancias
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto suman las distancias de cualquier punto de la elipse $\dfrac{x^2}{{{A}}} + \dfrac{y^2}{{{B}}} = 1$ a sus dos focos? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":36,"B":20}
        answers: ["sha256:9eee96e3f0ed615cc61f32a3a4f8ab84fcb9f3d351102bd61a407f9d3f3b08ec","sha256:389edd88308618008c8c597dd1d38f08f0f48592bacd2950066add42faf40b54","sha256:85af9cbbb3f7b8d0e92e1d32ebb5251e5f4050854940d6c283f06fa2c3c526aa"]
      - values: {"A":100,"B":64}
        answers: ["sha256:a069bc959c9f089586ec8a9840656482e75643bc7783b4a8a090bf524681259b","sha256:001c2ed0d409849655ac15615e6c71f63ab0c0b4b78de53de3d47492b2b60012","sha256:7c8ff19420b62df744dd028c4b1c6bcc105fc1785aeb1e3461beb85662006ca9"]
      - values: {"A":49,"B":24}
        answers: ["sha256:d7511786d8bbf67344008c224b01598fd84851d6d9cbb8fb6a50f4304195892b","sha256:e62ef9ba6ef9f01da318d93fb11000bc3060b3f425377564612ab6ed9643e559","sha256:edd8f31a5d381dd4b032087c53c3c51fed9a5293e606fcc78961834cc15fe690"]
      - values: {"A":16,"B":7}
        answers: ["sha256:bc5e863fc8333ba7b7ad2fd23faaee4cf0bc348b00c53c388f3a36733b0122e7","sha256:44c65974a3aa1525168c03d723cad54947ab443fa2ad50c5724f83700e207e59","sha256:326ed736d3f90ce4e8d5e273a8bffac9f58caffb86f1a2d14ec9dadf2af03cd8"]
      - values: {"A":81,"B":45}
        answers: ["sha256:3a386a733e4834c0e257c2713c649e9b16d1b6c1e31a4dc2653913a05c12f69a","sha256:553edfe1e39fc54320515404e6c3d754fccdb3d182ec39e49537af01723d2f46","sha256:ae5e705bd033be0dadee9d339580ba926bfdd92464b5a7e208cb15b9b17826fa"]
      - values: {"A":64,"B":15}
        answers: ["sha256:ce12c6f69ce9cbf284132e62afce851071e29f352aabae9ac7542502b026842f","sha256:ba767ccbee91af10b9aefd86b53223a2e51a8883263fc20d3d62c7be50e47290","sha256:d709389b18fdc3792ff10e7f81f59f5325391de1de5b1238dacd0f707fbf7b04"]
  - id: identificar-la-conica
    tier: 2
    prompt: |
      ¿Qué cónica es ${{e}}$? Responde `circunferencia`, `elipse`, `hiperbola` o `parabola` (sin tildes).
    variants:
      - values: {"e":"4x^2 + 4y^2 - 8x - 5 = 0"}
        answers: ["sha256:101caebd059111c7efef54e677966749152912242aed9544d499971bec046669"]
      - values: {"e":"9x^2 + 4y^2 - 36 = 0"}
        answers: ["sha256:dff4b7891615bc0c5051f771c00a3c0fc9d3b82a5a7e7cafa824f856785eec70"]
      - values: {"e":"x^2 - y^2 + 2x - 3 = 0"}
        answers: ["sha256:5429b31b00163942d28eca3c8916fc55858cc9e1b200cc4bdfe05049696c50f1"]
      - values: {"e":"y^2 - 6x + 9 = 0"}
        answers: ["sha256:d548d9d07ab0b0fbd76e870c96902db9c51ebca887f0f3eff368c8fe2e878d98"]
      - values: {"e":"3x^2 + 7y^2 + 14y - 2 = 0"}
        answers: ["sha256:dff4b7891615bc0c5051f771c00a3c0fc9d3b82a5a7e7cafa824f856785eec70"]
      - values: {"e":"-2x^2 + 5y^2 + 10 = 0"}
        answers: ["sha256:5429b31b00163942d28eca3c8916fc55858cc9e1b200cc4bdfe05049696c50f1"]
  - id: tangente-a-la-circunferencia
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Cuál es la pendiente de la recta tangente en el punto ${{T}}$ a la circunferencia de centro ${{C}}$ que pasa por él?
    variants:
      - values: {"C":"(0, 0)","T":"(3, 4)"}
        answers: ["sha256:f6195e8c3e9283b669f4e49619724802691b31af5aa3f0ce72cfa62fb01b5a83","sha256:58f3c224d48ac321a0a4e8ae96541c0188dee0430663cc9d7e85018121b9d03d","sha256:df1471fb5173e47f539595c571d6b5ea920e657a86c9367433457e6551ea0a52"]
      - values: {"C":"(1, 1)","T":"(4, 5)"}
        answers: ["sha256:93e0e187dd265f98f565c5a8ab13a44b735de33793881dce4f859689208b029a","sha256:ee39f8cda37b85b6c46132746435e3a1199e553f5081a8862dad4454eff08e63","sha256:eb6542a0851d937890071a4e877e7e79383eccb13e3c490412a4b4c311a6ce0e"]
      - values: {"C":"(-2, 3)","T":"(2, 6)"}
        answers: ["sha256:695a3173c329847feec982dfbbe026d6c41b7a7c3cb8867212a10786313352a0","sha256:ccb7f4763cb295117b7fdc514d0f8218fbbb9a2215396b0bfb16c1f125ba2e3e","sha256:4a12e1df913f8dddbdd71d4af5d6e20a44ab95bed44ec52381e7e9482c8824bc"]
      - values: {"C":"(0, 0)","T":"(-5, 12)"}
        answers: ["sha256:b1da368399587d627be472b99d07fb71141fb90741838c1c700fc1e5173c5c9a","sha256:98982232efc6c393f86fc8e324b38b3e0f1965899f296f7bb1300b06528d7a4b","sha256:269598280fcf322b6084fba4f5860084c21f87b4e0d7ec94c7f953fe4fd61f8d"]
      - values: {"C":"(2, -1)","T":"(4, 3)"}
        answers: ["sha256:82c96ca9b91d8e65f14ae80b3703fc1a26e09d147a6b89d3f9c767bf826bdf35","sha256:323ed00f45f111df043e6d586e255ec85cdde78e366cc953a09c28685594efba","sha256:baacbdbf832079947cb90216e3afca04337f7fa5ec62a620c53530cebc688e22"]
      - values: {"C":"(3, 3)","T":"(0, 7)"}
        answers: ["sha256:a712317f23f7b837b3222474612b0d7e53bc9384e1fd54036233c24d760c993e","sha256:afb46f42e7fea8fddf4c4b87880169adf3142880a633f8647d04da5c4bd29bb8","sha256:773db174458ae000cfb18f88f8d8ab467fa31ae4da18f211e9dbbbe89efacf12"]
  - id: elipse-como-lugar
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Partiendo de la definición de elipse como lugar geométrico de los puntos cuya suma de distancias a los focos $F(c, 0)$ y
      $F'(-c, 0)$ vale $2a$, deduce su ecuación reducida $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ con $b^2 = a^2 - c^2$. (b) Explica cómo se dibuja una elipse con dos chinchetas y una
      cuerda, y qué pasa cuando los focos se acercan. (c) ¿Por qué se llaman «secciones cónicas»?
    sealed: "gz64:H4sIAAAAAAACCn1UvW4jNxB+lQ+LLVayTkgWrhS4OATXH3JlNguMhmObATXcI7mCdIIfxmWKq9yl3RcLyJVs64BLyRnOzPcz5KmK3o3Jeq021XLZ0GK5RN118WtIp+aAD+BF3+IGx759wg3eMjdXmTu0VK/x0UZHajxGJQSavn/DEeJkX4LkwCOZQMZvUP/QA3e4pb7FB9zSz+f/EKpXnX4dBdHuBmfvLRMI9U/r7zBP4EO9xqcLLJ8CYS/fNqipb5tDudJygXepXZTa25yg/jV3yAggEUbYhlWndXMe0LeLQ6mlvp3J5dZvyXqN372i3l5yc7zGEcburbGSkYmmIAXVtm/rTTbmPhCfDn37dKKLIyWU+Z22M8lf63WnnS6XzTbb+UXAjvakMD6CH63yoySKEIXzEfeefcQRUUCJinU8SjAEI3BeH2waDeqW6t+QROP0rMY7AnuFOLjpebDZ5wcbsp4rOEIcd6Xc2JhI2VIEderoen5EtLIbguSS10mmHGcIa3yx70BmiCyBSdHUjK5LHr/UizJSnB2i5CsDBWEBkym+Yjc9RxRinbINPOq9BMmo0MiBs8qWrSGDWnB3VhRMr/0vcnKW87MPZeW8ovAZw54iSkjgt8mKipZd9yFRwKhZKY/G+K2TBQZfYoMj9RtEeZj+zZ1glZ1VYju9KIy4+cYK14hXZ56rTgcK0/M2O+HxaIfpn1AOzcfBO6/WZyE/S3igglNiGo2dXkBx+r5YV6sqjNtgudr8eao42CTB+mpTfYoc7Ha2wKuxMx4+s80b9M7TY/H67fGxD0E40U40CR4pJirW8HjmFcSMWeo8fxg1+Vht2qfVNYLD4HKzGUFMYeQ3Uf6mYKxK8OVjwUCDuPPGXFn5fwP+EEdsvdLZQErBg6cXtZzPfn4W2b7ytF8dfO/cdf+/nv4Df13o1UkFAAA="
  - id: r-lugar-circunferencia
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué lugar geométrico es una circunferencia?
    options:
      - |
        Los puntos a la misma distancia de un punto fijo
      - |
        Los puntos con la misma suma de distancias a dos puntos
      - |
        Los puntos equidistantes de un punto y una recta
      - |
        Los puntos de una recta
    answers: ["sha256:b57bb1bb2e7fceba52d26fc59f2195f2654ad52e63405d6c5198d01993de5c60"]
  - id: r-parabola-lugar
    tier: 1
    type: opcion
    review: true
    prompt: |
      Los puntos de una parábola están a la misma distancia… ¿de qué?
    options:
      - |
        De dos focos
      - |
        Del centro
      - |
        De un punto (foco) y una recta (directriz)
      - |
        De dos rectas
    answers: ["sha256:1dec1312e3255ce41a02de905971c1867121183f57948fccfaef0d02e1b5c5b7"]
  - id: r-hiperbola-diferencia
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es constante para los puntos de una hipérbola?
    options:
      - |
        La suma de distancias a los focos
      - |
        El valor absoluto de la diferencia de distancias a los focos
      - |
        La distancia al centro
      - |
        El producto de distancias
    answers: ["sha256:e60a7e1643dce927aee61d138f843b4d91d925fa562943d1067184131cbda338"]
  - id: r-excentricidad-rango
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Entre qué valores está la excentricidad de una elipse (que no sea circunferencia)?
    options:
      - |
        Mayor que $1$
      - |
        Igual a $1$
      - |
        Negativa
      - |
        Entre $0$ y $1$
    answers: ["sha256:20339333146f9cbf0ae3e452f27791cfe955348678c1c88a2fba7a8cbc5bf463"]
  - id: r-radio-rapido
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el radio de la circunferencia $(x - 1)^2 + (y + 7)^2 = 36$?
    answers: ["sha256:88369617dfb1f38f575c85d186fe714d6031694f47e656e5b2815f8c85ec77a0","sha256:188eb78f16ee0b099de3893dbde5ef7fdbd0d92cf1e192811e7f5dd5c4fc983a","sha256:1c761d4755554c7b9ca283e58a2566d839511c348eccf80db761498345ed3186"]
  - id: r-asintotas
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuáles son las asíntotas de la hipérbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$?
    options:
      - |
        $y = \pm\frac{b}{a}x$
      - |
        $y = \pm\frac{a}{b}x$
      - |
        $x = \pm a$
      - |
        $y = \pm b$
    answers: ["sha256:c559f9111b1cedb227d223726d6038369372692f1aa356239a9d3a7ca53b1acd"]
  - id: r-orbitas
    tier: 1
    type: opcion
    review: true
    prompt: |
      Según la primera ley de Kepler, ¿qué forma tienen las órbitas de los planetas?
    options:
      - |
        Circunferencias perfectas
      - |
        Parábolas
      - |
        Elipses con el Sol en uno de los focos
      - |
        Hipérbolas
    answers: ["sha256:efaf6916e623b0230bb9826a1484179b0f008e4ac1bb0b786041d4e8810a4532"]
---

# Lugares geométricos y cónicas: circunferencia, elipse, hipérbola y parábola, sus elementos, ecuaciones y propiedades

Los planetas giran en **elipses**, el chorro de una fuente dibuja una **parábola**, las antenas parabólicas concentran las señales en un punto, y
el sistema de navegación LORAN localizaba barcos con **hipérbolas**. Las cuatro **cónicas** (las curvas que salen al cortar un cono con un plano)
son, después de rectas y circunferencias, las curvas más importantes de la geometría y de la física. Este nodo las define como lugares
geométricos, deduce sus ecuaciones y estudia sus elementos y propiedades.

## Objetivos

Al terminar sabrás:

1. Obtener la ecuación de un lugar geométrico a partir de su definición.
2. Manejar la ecuación de la circunferencia y estudiar la posición de puntos y rectas respecto de ella.
3. Reconocer la elipse, la hipérbola y la parábola, sus elementos (focos, ejes, excentricidad, asíntotas, directriz) y sus ecuaciones reducidas.
4. Identificar qué cónica representa una ecuación de segundo grado sin término $xy$.

## Qué debes dominar antes

[[mat-vectores-rectas-plano]] (distancia entre puntos y de un punto a una recta, rectas tangentes) y completar cuadrados
([[mat-ecuaciones-segundo-grado]]).

> [!question] Test de entrada
> 1. Distancia entre $(1, -2)$ y $(4, 2)$.
> 2. Completa el cuadrado: $x^2 - 6x + \_\_ = (x - \_\_)^2$.
> 3. Distancia de $(0, 0)$ a la recta $3x + 4y - 10 = 0$.
>
> Respuestas: $5$; $9$ y $3$; $2$.

## 1. Para qué sirve

- **Astronomía**: leyes de Kepler (órbitas elípticas con el Sol en un foco); cometas en órbitas parabólicas o hiperbólicas ([[fis-gravitacion]]).
- **Óptica y telecomunicaciones**: los espejos parabólicos concentran en el foco los rayos que llegan paralelos (antenas, hornos solares, faros);
  los elípticos reflejan lo que sale de un foco hacia el otro (litotricia, salas de susurros).
- **Física**: tiros parabólicos; la ley de Boyle da una hipérbola.
- **Arquitectura e ingeniería**: arcos, cúpulas, torres de refrigeración hiperbólicas.

## 2. Lugares geométricos

Un **lugar geométrico** es el conjunto de puntos que cumplen una propiedad. Para hallar su ecuación se toma un punto genérico $P(x, y)$, se escribe la
propiedad con distancias y se simplifica. Ya conoces dos: la mediatriz (igual distancia a dos puntos) y la bisectriz (igual distancia a dos
rectas) ([[mat-vectores-rectas-plano]]).

## 3. La circunferencia

> [!practico]
> Una cabra atada a una estaca con una cuerda de $5$ m puede llegar, como mucho, a los puntos a $5$ m de la estaca: el borde de su zona
> es una circunferencia. Su ecuación no es más que el teorema de Pitágoras para la distancia de cada punto al centro.

La circunferencia de centro $(a, b)$ y radio $r$ es el lugar de los puntos a distancia $r$ del centro:
$$
(x - a)^2 + (y - b)^2 = r^2 \qquad \text{o, desarrollando,} \qquad x^2 + y^2 + Dx + Ey + F = 0 ,
$$
con $D = -2a$, $E = -2b$, $F = a^2 + b^2 - r^2$. Para pasar de la general a la reducida se **completan cuadrados**. *Ejemplo:* $x^2 + y^2 - 4x + 6y - 12 = 0$ se
escribe $(x - 2)^2 + (y + 3)^2 = 25$: centro $(2, -3)$, radio $5$. (Si al completar sale un número negativo a la derecha, no es una circunferencia real.)

**Posiciones**: un punto es interior, está sobre ella o es exterior según su distancia al centro sea menor, igual o mayor que $r$. Una recta es
**secante** (dos puntos comunes), **tangente** (uno) o **exterior** (ninguno) según la distancia del centro a la recta sea menor, igual o mayor
que $r$. La tangente en un punto $T$ es perpendicular al radio $\overrightarrow{CT}$.

## 4. La elipse

> [!practico]
> Clava dos chinchetas en un tablero, ata a ellas los extremos de una cuerda más larga que la distancia entre ellas y, con un lápiz que
> tense la cuerda, da la vuelta: dibujas una elipse. En cada punto, la suma de las distancias a las chinchetas es la longitud de la
> cuerda. Es el «método del jardinero».

La **elipse** es el lugar de los puntos cuya **suma** de distancias a dos puntos fijos, los **focos** $F$ y $F'$, es constante, $2a$. Con los focos en
$(\pm c, 0)$, su ecuación reducida es
$$
\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad a^2 = b^2 + c^2 .
$$
$a$ es el **semieje mayor** (los vértices están en $(\pm a, 0)$), $b$ el **semieje menor**, $c$ la **semidistancia focal** y $e = \frac ca$ la **excentricidad**
($0 \le e < 1$; cuanto más cerca de $0$, más redonda; $e = 0$ es una circunferencia). *Ejemplo:* $\frac{x^2}{25} + \frac{y^2}{9} = 1$: $a = 5$, $b = 3$, $c = 4$, focos $(\pm4, 0)$, $e = 0{,}8$.

## 5. La hipérbola

La **hipérbola** es el lugar de los puntos cuya **diferencia** de distancias (en valor absoluto) a dos focos es constante, $2a$. Con focos $(\pm c, 0)$:
$$
\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad c^2 = a^2 + b^2 .
$$
Tiene dos ramas, vértices en $(\pm a, 0)$ y dos **asíntotas**, $y = \pm\frac ba x$, a las que se acercan las ramas sin tocarlas. Su excentricidad $e = \frac ca$ es
mayor que $1$. *Ejemplo:* $\frac{x^2}{16} - \frac{y^2}{9} = 1$: $c = 5$, asíntotas $y = \pm\frac34 x$. La **hipérbola equilátera** ($a = b$) tiene asíntotas perpendiculares; girada $45^\circ$
es $xy = k$, la gráfica de la proporcionalidad inversa ([[mat-funciones-lineales-cuadraticas]]).

## 6. La parábola

> [!practico]
> Si un espejo tiene forma de parábola, todos los rayos que llegan paralelos a su eje se reflejan hacia un mismo punto, el foco. Por
> eso las antenas parabólicas apuntan al satélite y tienen el receptor justo en el foco.

La **parábola** es el lugar de los puntos que están a la **misma distancia** de un punto, el **foco**, y de una recta, la **directriz**. Con el foco en
$(0, p)$ y la directriz $y = -p$:
$$
x^2 = 4py .
$$
El **vértice** es el origen y el **eje**, el eje $Y$. *Ejemplo:* $x^2 = 8y$ tiene $p = 2$: foco $(0, 2)$ y directriz $y = -2$. (Con los papeles de $x$ e $y$
intercambiados, $y^2 = 4px$, el eje es el $X$.) Su excentricidad es $1$, y la gráfica de toda función cuadrática es una parábola de este tipo,
trasladada y estirada.

> [!formal] Con rigor: deducción de la ecuación de la parábola
> Un punto $P(x, y)$ está en la parábola si $d(P, F) = d(P, \text{directriz})$: $\sqrt{x^2 + (y - p)^2} = |y + p|$. Elevando al cuadrado (los dos lados son
> no negativos, así que no se añaden soluciones): $x^2 + y^2 - 2py + p^2 = y^2 + 2py + p^2$, es decir, $x^2 = 4py$. Las ecuaciones de la elipse y
> la hipérbola se deducen igual, aislando una raíz y elevando al cuadrado dos veces. $\blacksquare$

## 7. Cónicas en general

Toda ecuación de segundo grado $Ax^2 + Cy^2 + Dx + Ey + F = 0$ (sin término en $xy$) representa, si no es degenerada:

- una **circunferencia** si $A = C$;
- una **elipse** si $A$ y $C$ tienen el mismo signo;
- una **hipérbola** si tienen signos opuestos;
- una **parábola** si uno de los dos es $0$.

Completando cuadrados se obtiene el centro (o el vértice) y la ecuación reducida trasladada, por ejemplo $\frac{(x - h)^2}{a^2} + \frac{(y - k)^2}{b^2} = 1$. (Los casos
degenerados son un punto, un par de rectas o el vacío; el término en $xy$ corresponde a una cónica girada, que se trata con álgebra lineal.)

## 8. Errores típicos

- Al completar cuadrados, olvidar sumar lo mismo en el otro miembro.
- Confundir las relaciones: en la elipse $a^2 = b^2 + c^2$; en la hipérbola $c^2 = a^2 + b^2$.
- Tomar como $a$ el número bajo $y^2$ cuando es el semieje menor.
- Dar como radio $r^2$ (en $(x - 1)^2 + y^2 = 9$, el radio es $3$).
- Situar el foco de $x^2 = ky$ en $(0, k)$ en lugar de $(0, \frac k4)$.

## 9. Resumen

- Lugar geométrico: propiedad con distancias $\to$ ecuación.
- Circunferencia $(x - a)^2 + (y - b)^2 = r^2$; posiciones de puntos y rectas por distancias; tangente perpendicular al radio.
- Elipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $a^2 = b^2 + c^2$, $e = \frac ca < 1$.
- Hipérbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, $c^2 = a^2 + b^2$, asíntotas $y = \pm\frac ba x$, $e > 1$.
- Parábola $x^2 = 4py$, foco $(0, p)$, directriz $y = -p$, $e = 1$.
- Identificación por los coeficientes de $x^2$ e $y^2$.

## Repaso: lo que debe quedarte dentro de un mes

1. Las definiciones de las cuatro cónicas como lugares geométricos.
2. Cómo se hallan centro y radio de una circunferencia en forma general.
3. La relación entre $a$, $b$ y $c$ en la elipse y en la hipérbola.
4. El foco y la directriz de $x^2 = 4py$, y por qué las antenas son parabólicas.
5. Cómo se reconoce una cónica por su ecuación.

## Siguiente

[[mat-geometria-analitica]] repasa el bloque; las cónicas reaparecen como órbitas en [[fis-gravitacion]].
