---
id: fis-optica
title: "Óptica: naturaleza de la luz, reflexión, refracción y ley de Snell, reflexión total, dispersión, espejos, lentes delgadas, el ojo e instrumentos ópticos"
area: fisica
trunk_level: 3
prerequisites: [fis-ondas-sonido]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 3 (en español), OpenStax (2021), capítulo 1: «Naturaleza de la luz» (propagación, ley de reflexión, refracción, reflexión interna total, dispersión, principio de Huygens, polarización). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/1-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 3 (en español), OpenStax (2021), capítulo 2: «Óptica geométrica y formación de imágenes» (imágenes en espejos planos, espejos esféricos, imágenes por refracción, lentes delgadas, el ojo, la cámara, el microscopio y el telescopio). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/2-introduccion"
  - "P. de Fermat (1662), principio del tiempo mínimo; W. Snell (1621) y R. Descartes (1637), ley de la refracción."
hints:
  - "Concepto: la luz viaja en línea recta en un medio homogéneo, más despacio en los medios materiales que en el vacío. Al cambiar de medio se desvía (refracción): se acerca a la normal si entra en un medio más «lento». Espejos y lentes desvían los rayos para formar imágenes reales o virtuales."
  - "Herramienta: n = c/v; reflexión θᵢ = θᵣ; Snell n₁ sen θ₁ = n₂ sen θ₂; ángulo límite sen θ_L = n₂/n₁; λ_medio = λ₀/n; espejos y lentes: 1/s + 1/s' = 1/f (espejo: f = R/2), aumento m = −s'/s; potencia P = 1/f (dioptrías, f en m); lupa 25 cm/f; telescopio f_obj/f_oc."
  - "Documentación: OpenStax Física universitaria vol. 3, caps. 1-2."
exercises:
  - id: velocidad-de-la-luz-en-un-medio
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿A qué velocidad, en km/s, viaja la luz en {{s}} (índice de refracción ${{n}}$; $c = 3 \cdot 10^8$ m/s)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n":"1{,}31","s":"el hielo"}
        answers: ["sha256:a8daf0b8885db2adef8e7438927e43aebe068dad6ae546569fa427c40fee8fa0","sha256:23ae071116adcc6a9762f7967ab6637c3482b079efd940f26d08dfed638e22ca","sha256:492fb60b8c37059d96ae2b49f7983e49bed9b638ac5aa1398b2b7929f3674ded"]
      - values: {"n":"2{,}42","s":"el diamante"}
        answers: ["sha256:849113399f8f11cc6fede64031c18fb24ce62556aee791258cefd363add99d92","sha256:402c60fd02b25739c134a7439340e3d9ca1f0c1933016b33f5fbedf5c5c18365","sha256:8abc636cf4b3bfd819d6193945620a492e281fb338598f3f6088146b767e5c23"]
      - values: {"n":"1{,}36","s":"el etanol"}
        answers: ["sha256:3fbad3718eb08e02a39f25ae645e6bff66079473a8d5245b33545a523430f052","sha256:b4e3a89a1970a3326c82b3d4007629ca75ade12f0913a02640245f37f9ab6f78","sha256:74cfd4fb58f73350a5681d63c9ecf11ee54b0859b01bb343a9d9be764c1c7e01"]
      - values: {"n":"1{,}47","s":"la glicerina"}
        answers: ["sha256:a8407655f14b6b1dc742268f98a7d19d1b22ca1b767eac1de89b2a7f250fca78","sha256:e3fd3b650bc081acf233817c865eaa3b92ed2e78906889f1b17dbf8aa04e6d5b","sha256:c036377a841a022338839fc98a4fe07187d2dde1de5ae982d84f3d1504a67cc4"]
      - values: {"n":"1{,}0003","s":"el aire"}
        answers: ["sha256:24e53d84fc9ed3b583860bfb0b03a6a8d222b9d112fbfa26b252cfed9ec0bb0f","sha256:85a626417c8ee9962a016b66bb7adc090edbd42eaac0142a339184a764aa3c78","sha256:6aa1e8e951d3a5dcccc0776f1b669f6f7313f73e5933562d01453f8fdca42d18"]
      - values: {"n":"1{,}65","s":"un vidrio flint"}
        answers: ["sha256:b51efc65d445526b33c498ac339ac7071185a1a1027b9a91316f2c384f78c0fa","sha256:8692bb4ffa758d56a1fd34b439a3415d5a8ba5dc458e3bbf4ff66e2d6697ece8","sha256:49c32686c532d5bcd7300478a783d817c6dddb40422994fa7311689fade2f194"]
  - id: ley-de-snell
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un rayo de luz pasa de un medio de índice ${{n1}}$ a otro de índice ${{n2}}$ con un ángulo de incidencia de ${{th}}°$ (medido desde la normal). ¿Qué ángulo de refracción forma, en grados?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n1":"1","n2":"1{,}5","th":40}
        answers: ["sha256:fba7a6fa5adc7307af5734a6241a741305b1f99fc2129349e352cd1b2e2f92bb","sha256:aa338eb38ab8444a8d7eb8ff8dc27aa7794096299c336d47cb250df457aaaf74","sha256:40c629cb178b7a4821d2423cb93465d4db0fd5129ee9fcb75e73fccab28e631b"]
      - values: {"n1":"1","n2":"1{,}33","th":60}
        answers: ["sha256:20601ce7147c788f3e0231a296288f08a96c5efbaad42c88d3308747b4f2a85b","sha256:1386c8616b10c61c4d805d5352c3705f794c4282acb56215784bfee18df1a98f","sha256:649a079fbf26def3c70f70fdfc56322c092238ea8e3c3833bcac8ef8db32e0d8"]
      - values: {"n1":"1{,}5","n2":"1","th":25}
        answers: ["sha256:34741f39da911509d8de6b3d59eca0030b277c1da458332b348b4ce96ddf384a","sha256:c3711eb896d8afe2fec3f6d1596bee7845283ccc6b16082aee209f46eb9291c8","sha256:e80a549aa88fcf3de35f1c19d357f81eb85d5dbd05f7b41f537b2982f8239da0"]
      - values: {"n1":"1{,}33","n2":"1{,}5","th":35}
        answers: ["sha256:6ade3b65436c3e344289f5188f079ed60af9b6b3a215495afc68b5309c4381d6","sha256:505b0d71b2c32158a6ec1df16dea356b9050657105417be618967649654c371d","sha256:2c0fc6e8bceabcb8bebafaf37ae4fd51210ac92d03f793d3fee07f06c67aed6b"]
      - values: {"n1":"1","n2":"2{,}42","th":50}
        answers: ["sha256:e9e898b3600f96356f5c0df90a591ce1d7a15f7833d34dcc67c777ef9f76da2e","sha256:e2dd2b63ca2347692b1e5af395c1ab377065e82ea1132a2aa2e4eb28cdd6a2e7","sha256:a231d07012640c3870391b85da01accb1d4d5befeab5482dcfbb7ec2f16f82ae"]
      - values: {"n1":"1{,}6","n2":"1{,}33","th":30}
        answers: ["sha256:e231f0a42127305ab0db2786e93b2c8346e7bb43f050e56aebfaaf9e50e9abb1","sha256:19297efd3b7169a861a16a6a897e205006d9ea042b2ecbe6c0d88af6e328a25b","sha256:da89cb776f87a91fa0829ddeaab98119af5b3b0802fc92968b4afe76992dc301"]
  - id: angulo-limite
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el ángulo límite, en grados, para la luz que pasa de un medio de índice ${{n1}}$ a otro de índice ${{n2}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n1":"1{,}5","n2":"1"}
        answers: ["sha256:25f274cf215e3a9dfc51a2e2a6e5996e060474778cff59947fccdffb0f2c7697","sha256:06f3e950cf1eef0ac8c16d10064ebef8246c4fc36fbf74201e1b35c7226546f3","sha256:17271b8570d089b3c73d06264884dcc90c6729c5131ddcc6648ae0b0c1141a47"]
      - values: {"n1":"2{,}42","n2":"1"}
        answers: ["sha256:cf8602062dd1b5cec24c1a155fb97b65362760c5b64a1356f036406158010955","sha256:bc57f48d08cae0c8eca8315fd894584494f2d8ffbde0386b3a478be1a2130631","sha256:7372753a0e6fd00889e31052793d8fcea37962d90399aca807c1abd017f9267e"]
      - values: {"n1":"1{,}6","n2":"1{,}33"}
        answers: ["sha256:673dd584259973a32424d3f852125d33d63960150087af8f7540ece0426ad0b8","sha256:dd91938ff0ba52d00a1ff6d10142c94cc3c8f65afbd231a94f0c7e283087924a","sha256:65dcbb7e83acd402d53211886833f146a490377aa9f6facfe42da3768bcc6c6f"]
      - values: {"n1":"1{,}46","n2":"1"}
        answers: ["sha256:0838bcb7932ed37d706da9f09a0f1388fb96481d493ef8509c8687c148965c9e","sha256:0a0f3746e8e96e6ffa6ce65633adcf1c81b7caa2182b04be52fcbc4b28187d3c","sha256:4fed5f79d6390687f5bbee2ee6351b09da3319c5748d6d283255e251480ff807"]
      - values: {"n1":"1{,}5","n2":"1{,}33"}
        answers: ["sha256:76fafb95579f370c137994388ef35cb18331de1521af1d3ec7eddcefaeb3a04c","sha256:cad53c64b5c9a80d08adc30db7b9fb11bf815b05d21a59b461dde2a9fc088e69","sha256:b0ff60f3923eb2cadaa9144c2a2946d75cc0a02a57cc6b28c90f3cdde6245929"]
      - values: {"n1":"1{,}31","n2":"1"}
        answers: ["sha256:8c02b91027750874ad81f86cebeb71e6ba630d014a94ad88f1e271389e2eceb3","sha256:7a804c10359ed676f8f7eac6b40b623d7480316e599e7c4000240783cd2077f4","sha256:d469aa73e42ab43cfaaf474db543b5ae7a49cba735da020f83462073d25eb0a1"]
  - id: longitud-de-onda-en-un-medio
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una luz de ${{l}}$ nm de longitud de onda en el vacío entra en un medio de índice ${{n}}$. ¿Qué longitud de onda tiene dentro, en nm? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"l":589,"n":"1{,}33"}
        answers: ["sha256:fbe98f871c664c633d98980afe6e57d3be949e1580e1a9988fedddec6ef21995","sha256:e4ecbd03ff79ce4b6c5f02ebe15abe423f64569e89cfeaadfcfb93bd99d0ae03","sha256:4fa10d77039835697b70cac86f1cf8168192f0196d57182d8b685bcddcfdc1ec"]
      - values: {"l":633,"n":"1{,}5"}
        answers: ["sha256:649bbab831a88d8f521d97acadac156413077b175bf269cd21386df0ee87d884","sha256:0c232f23bc443978038b219019b59f8a7451451a842f4017fa0be276e332a4ba","sha256:2871c9d7af11d7a45218f21ccbd4b74bed9e48dda3392d9ce31da18e2fb8aecf"]
      - values: {"l":450,"n":"2{,}42"}
        answers: ["sha256:223e33c7f838a2b9723024d58333819db6b29c62db15a9d7cce00b3dd0069da3","sha256:bfe5c130c2592fc7e07dd6c8f698ac8730a61ca8ee68a41637acf288209b26f4","sha256:c4580bea7a84df1d6fb9da07b4f4802d0f9c399b94c904e4e48ee751cf486e0e"]
      - values: {"l":700,"n":"1{,}31"}
        answers: ["sha256:71e177103e35d917acecd5b4325c71f92202ecdc2f48708bd323274da983d893","sha256:f8746e4a9f113b88dbffed1314030fa1cb4c389e3f706b0e64ed23e5aa5edb2f","sha256:b1feaa38d21dfebef42308f1e60f71e3d447f7e0d40a4d8e6d0d205009bcf739"]
      - values: {"l":532,"n":"1{,}46"}
        answers: ["sha256:ee7e6b922ade1b1676b9884c1a4fcd87929106d85f3605974be69ce8fffec037","sha256:e2ee2b49a55487cbc39deae53b667780e37372d2ff4997b5ebd25f81771d35fa","sha256:90faaa2426d6abc69aef9fccbbb9f625fe373b910110395f1f0728b42817db5c"]
      - values: {"l":405,"n":"1{,}6"}
        answers: ["sha256:644909973398bb7de37b5d556a946e6e4d431bc13b17ddb669082a8a94f6851f","sha256:3ac1a85a136abd4883c84b722b4281e88840cf88e89e20e41d2329fe48112710","sha256:565ca44b9044a1bb568992b92f069e7448f070b6e173fc324b9deccae2eccf29"]
  - id: espejo-concavo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un objeto está a ${{s}}$ cm de un espejo cóncavo de radio de curvatura ${{R}}$ cm. Con el convenio $\frac1s + \frac1{s'} = \frac1f$ ($s'$ positiva si la imagen es real, delante del espejo), ¿dónde se forma la
      imagen? Da $s'$ en cm, con signo. (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":40,"R":30}
        answers: ["sha256:ddef6e4496b6328b98deb869c281d718c73e2cd128c3430c789eaba151cca45e","sha256:17d7a9e25a83aad153dc1ee28966546949a9c91a191b6e94cde34b9ef47f70c1","sha256:1bf8e114a5741d35dd058bac1dd041aee1b5440ee17522426fae2b1b104d4ff4"]
      - values: {"s":25,"R":40}
        answers: ["sha256:47ace7d0815ba129c220eb8dd805a34712849b641e09b1a8794014c4b238b5cb","sha256:495a9c4960e86f1475dd72d4dc83aae17b0efaf42b399148717c003640af9abc","sha256:fd8ddeb4732fd9f846d59fd52da34cc17771eeec9dc77c0ccabab33b32600551"]
      - values: {"s":15,"R":20}
        answers: ["sha256:b3ff856cdbf60708d9a8fdba91c06a2e8220168a54c456df12d116c6d8b5bd45","sha256:e7f4c81dd555404ec0bdc08831a38dc91875d21a19f615e857129919b1d2967f","sha256:acf79367c785682e26b315b94780e7239f56e6b0e64c19b5f4e925677b72e62d"]
      - values: {"s":60,"R":50}
        answers: ["sha256:8494cfebeaec0f86f8ebcee57dff3cd752716c459cead054cb425ed73f6cb5a1","sha256:890717a12d274ddff46c434206fbdc3dd5d6787d48cae05cfc572e6a6af3afc7","sha256:1a770541b2daa605378635287769ddbb79e1d6cbcb455e6b0ab7db64226968bf"]
      - values: {"s":12,"R":30}
        answers: ["sha256:7d43bb678adef72c34e57019d65732bbde7ec74f9de46a8aaa40dca2306d2bc1","sha256:572a7b16052d51019cc5bde943ed365f1e04a7d3894b2629af303515c440448b","sha256:7e4e744dfbaca161be39f60182259f31db70ce841033286c2d4373495094ccce"]
      - values: {"s":90,"R":40}
        answers: ["sha256:26806b9a91e3bf6938f6b5eec45367a7b5b94adcda5409707fcc0f9dd272912d","sha256:8c022d8c8612f8d2cf175982ef2ad81efe441870c320e47fbba5a1ec72658e77","sha256:ec7ce947cc56428e273dfa5904562372101d285fd30293d96f68441f9e97ccdc"]
  - id: aumento-de-un-espejo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un objeto está a ${{s}}$ cm de un espejo cóncavo de focal ${{f}}$ cm. Con $\frac1s + \frac1{s'} = \frac1f$ y aumento $m = -\frac{s'}{s}$, ¿cuánto vale el aumento lateral (con signo)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":40,"f":16}
        answers: ["sha256:82f34cef6b330a2ace71c86f6c9995d854b58c2ccdc27bd340062ee7c5ce1039","sha256:5cac5ada70519f043a1fd80adc9e0c54c9b851a31047189d556c3b1d96ed005f","sha256:e7e849cd4e839ce6c99804e75b068185b3bbea2917dff294843c09f0f2fe3c45"]
      - values: {"s":9,"f":12}
        answers: ["sha256:42c196641902330c28f14e1d46a8ccb6fd18701f029924d6c2528539b6869f31","sha256:ad119895b03788c9d5351d8a838ea50140443a097ee6c9f9f407a2056c8511d1","sha256:0ad6435b074b7932043ac06099d9ec2be73a74150c90dc8d1aec7fd710d1030e"]
      - values: {"s":50,"f":15}
        answers: ["sha256:8e14778f32aa793d241dd4d11ae174cf843afe1e73ece3d20b06fd5845978c90","sha256:e0e572b0fe8ee312ae7b78cc29605e2e58728024a283f63106971a34eaa60d82","sha256:99e856b985800c6ad4c62768de009f5e1aad158c428b41372cc2f3733366fc69"]
      - values: {"s":5,"f":8}
        answers: ["sha256:cc44c5b32fc4c88dc721beee0b1646fc0bc583ff4ef817448e593604fd1201eb","sha256:d558f913ca7fea6ef6bf90323c13669732e5effd728a9fd01c7a4f846375dabb","sha256:c49dbfa16c5a19236333ca19ea999fd86c913f5c465becc4a061c5d6f8f26a46"]
      - values: {"s":36,"f":24}
        answers: ["sha256:88e414edaeec1138458cbec73ad89400046d3a2272d6a1b331aa626329c0e187","sha256:4b6eb589ab666a47ce571906354b79f8fd12876bf5082e7749195c77bbf85105","sha256:492224c3eed8e4d40bdb06151b683811ad97beb80fef72818581c266a96b3d97"]
      - values: {"s":70,"f":30}
        answers: ["sha256:f8f2bb6d19a3f3fc2200a3d1fa9f3d131c61d25e219689c13f13cbc085df3765","sha256:14e3a8acebe23b55c45b612ad85efea1ccac49f429b4cbb0b0649463cf2a0143","sha256:d9acbe39f112b5da483f2190e3cdf77672c17c0657a13be9f7ebb68c7a5ea788"]
  - id: lente-convergente
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un objeto está a ${{s}}$ cm de una lente delgada convergente de ${{f}}$ cm de focal. Con $\frac1s + \frac1{s'} = \frac1f$ ($s'$ positiva si la imagen es real, al otro lado de la lente), ¿dónde se forma la imagen?
      Da $s'$ en cm, con signo. (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":25,"f":20}
        answers: ["sha256:085d2405428849407f2e3496be8f8bef77fc1712f9ac05773b3f030840fe4bde","sha256:bc0bac225fc952caa4f8d4dcbf995cfb141c2000755c9e0bf2e2bd8431ced9f0","sha256:cc83c53ea39bab582299c7f5055f2eab93c0303eb9e4bdd835493edf101e849b"]
      - values: {"s":60,"f":15}
        answers: ["sha256:82d024ec96a19f0f6bd551c56178a58bb3e7469c5d56c841cef7875fdf3a55dd","sha256:801bf7701eef2031a3f31a3cc398fc90190cec38601b19c051181e93356ecc7a","sha256:6656ecc03a1f7aedda189044f90f1b7e240886240c4af76649fb3a54dade2c65"]
      - values: {"s":8,"f":12}
        answers: ["sha256:8fd0a645ff5d621385dcb26d6efb5a12629da50e5037692afeb6eba8a4112ffa","sha256:926930209cde019b1d29a7a10b2bf724620558ebb743bd10e1a82806f4a93e49","sha256:d1eddd2a2b6ee0da181698d1420635362dd96b07ae1e3d7c31ff034f3fcf90d7"]
      - values: {"s":45,"f":30}
        answers: ["sha256:bf28726112aabd88b9359bcdea81a8030f815e4774467a49e34e31f65fe9dbce","sha256:ff26affae5191405d9d7f2ba2e1488c7c51127801831fd2087739543bbcee8e0","sha256:c8d75b18f0736b7128d7d0fef2cd6defc518f3ef09eac5d2e47a52ad388edf57"]
      - values: {"s":100,"f":25}
        answers: ["sha256:d559a4c97f7c48f1f45e80b985c06dc2c7ffae930eb1f274b0be06c41106efac","sha256:7a8ca84da3f37079ae924cad758c11fd1e3eaf66f2d7ce0924f36c8befa9a735","sha256:a25fe545516666c7d9302d7d06daa0c2ad498867d547a4c3756cd2764fef3ca5"]
      - values: {"s":5,"f":10}
        answers: ["sha256:da1e843fe65e135b84fe0f1c6f700ff401c85d9a46da4a5496e89e4c4f9ea483","sha256:9953591c69c15e85ff0fe1756a5a71dfdc506b64a65c63af3f21a85668ca913a","sha256:912ab7e92b7654de3fa9a50d2b9218ddaead7dc2f119b622d4bcb20fd3b75864"]
  - id: dioptrias
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es la potencia, en dioptrías (con signo), de una lente de distancia focal ${{f}}$ cm (positiva si es convergente)?
    variants:
      - values: {"f":"40"}
        answers: ["sha256:700441b325c57e6defefcb6fd2c1a3306eb3f4992cee1a63b2e28e6be5239381","sha256:5f0c82ebf809100cde6f178909ec7c5200a487ddd6991e2e4f61fcfde358b5ad","sha256:248df84e66ad6091d5ff873b899ae448623848d52d26f5a027b56b9655394ea7"]
      - values: {"f":"-25"}
        answers: ["sha256:43d33cba50716cd75a114fafc3c92b239a708b402d3c9ea252c4969a33dbf16d","sha256:4f7193543bef7f9576a2f5d662361f1892368b32dc02f33a77160b2d692fa88d","sha256:1fc5c107b49ccff2e40891b6df462ac46d6228e8817db24dfc19ce4681c3eb4a"]
      - values: {"f":"12{,}5"}
        answers: ["sha256:9de4ab3d247b51d640cf12e9c666de7dd08d0c8aa0bc773727bd915b41abebc7","sha256:68e97e2e09380c670cb204125e370b9d96443f946834bd86c5443b933e7e8de1","sha256:26d21c2370efc8a4dfbc41b2c49c1085e3430cab0ff65d42da55971798b323b4"]
      - values: {"f":"-50"}
        answers: ["sha256:026c9b75ba70d507210d8e9911bd367bccdb67418091c6aabaf9f1f474cb6c7d","sha256:c69ce07f12fad8b16ddecc97d2a30c69c1aacea3582b08e7662b9931ac50107d","sha256:d48caec58d733f1acdc29a001021dfbd2526166f35c676c6e9568a3a3dfd9b2d"]
      - values: {"f":"8"}
        answers: ["sha256:8a2fb65df9fedccb7f10b82bdc27f7bc9d7a067a895d2b2a43b9398a8f1125f9","sha256:de3a4be18b5868fbfbe6ca04d4973c94cac82a7ee61b8d8fafdc8663a32120d5","sha256:03420fe975002cb36295363ff762b9875a7a9b7a937b8e9c58a20926848b3543"]
      - values: {"f":"-80"}
        answers: ["sha256:ff45c86463674ac3a6c5ee5f11e4c88ff90da543705136ea8c88dabb2f3a700b","sha256:e6018c0251f99eb46d5c6f2f7f43c91f65b596f13920157bbc0bb9c091f7b2d0","sha256:5d2095dbc4afa11344de8a52fb6ff86701c06cb197dca54aec0a6bb739da36f5"]
  - id: lupa
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el aumento angular de una lupa de ${{f}}$ cm de focal si se observa la imagen en el infinito (punto próximo del ojo a $25$ cm)?
    variants:
      - values: {"f":"3{,}2"}
        answers: ["sha256:a1f806b3ed74be493c316533f2aa78169a8c954366b3aee36b6464c35909a6d2","sha256:fb559f6ea64d1a4ca051f373e12b967caf3583ba3d78d41f55c5bc799b4f39e0","sha256:d5687238f83f3dd892fec6a876300ee9731c69846434ff090684913abaf826ec"]
      - values: {"f":"8"}
        answers: ["sha256:8c77018b0daef6d3835788fc10ca47f76ed65d9756e13f3adf6b8142ca974965","sha256:754457d3fcecec6221eb566a8a229ea25cda69b350fe570032e26332a076e619","sha256:1f5f22728e83db205d26f4ac96953a7d025587c5dcd6512f664385634072b4e8"]
      - values: {"f":"2{,}5"}
        answers: ["sha256:f600e7157d132c6a07db217db25e069ed6ae029a3b88c40dc130dc824695e1c3","sha256:1e2f168b2f00bd4f5c1715630bffe5a1789d94540c2b7db29a7f0bfc7f733dae","sha256:39bb8a19a4ac689fbaf4eca4626f694e7a75942415a962383ba815f928014110"]
      - values: {"f":"12"}
        answers: ["sha256:470b2d93d5d2832d4eb699c576a771cff072bcd9368fe7ee8108582621494baf","sha256:6240b296982038b89fca6fcc0b781e8d2a1a1b676069b643a49c92b0cdaced80","sha256:b04e7b13027eac7b2048ac1b9fabf8bc19527a713e8bd99a915dd11a4888adb2"]
      - values: {"f":"4"}
        answers: ["sha256:3f64b2678a3b487a9555514b9f21800b64a5fcd52b2b2806e63e702aa79c7647","sha256:9b7a81b9336d34f3581c03b0b34b3ef9f19f80c3864b80a4a6c25badf01b87e9","sha256:f5e0a85e5d1c7ff23091ce40663f1a1a227a368cc78032b40f94a43e89727bf3"]
      - values: {"f":"6{,}25"}
        answers: ["sha256:9d9ece14233a5d7ecb3ed05e8034b64fcdf793387e15624cc1d4575c6538a1b2","sha256:2014541492709829403051c06a14bc937be6eff2cc516b3f41a38260f7660ca7","sha256:3626e0fddb8626a105f197dc794eccfb714cc0a073e2e69596582ee2a8721c75"]
  - id: profundidad-aparente
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una moneda está a ${{h}}$ cm de profundidad en un líquido de índice ${{n}}$. Mirándola desde arriba en vertical, ¿a qué profundidad parece estar, en cm? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"h":200,"n":"1{,}33"}
        answers: ["sha256:31ea2438534c5014929a7b8e517d5b97145db49e55b0578152b8ce10e0a7e4d6","sha256:752bd761869ba3b70a56fb95c301816310d0eba0ac41867474b9a7461d3a8891","sha256:d80ecab62c0fd2b41fc907f0127a03763e12732f72e278dc23b00b8776413730"]
      - values: {"h":120,"n":"1{,}33"}
        answers: ["sha256:e643c2217bbc018e1271a2f135872c28e37d1cc65b2b10336846fff1fb2b08f1","sha256:9f241555395b3be8de68992cbb3680723da445a58089acef95973eaf5bb0519e","sha256:d4e4209837fb6d8199aaa743140239d59936c2b0948bd15bba925b5c9453c4f9"]
      - values: {"h":50,"n":"1{,}5"}
        answers: ["sha256:3150223a07991414b94b6e37e3911c4dd74435c06c59b98f79a5dd117b728863","sha256:a11d94cfcbb62c23e0528b061653a141384e7503009a9db474dd10c0a3d9ab5f","sha256:d417506fa314a95fc236dc74a3a90b33d15c43696e53d1355126292319c5811d"]
      - values: {"h":300,"n":"1{,}33"}
        answers: ["sha256:7908fc85b9c1dcb4a1bc0909be596f1f365161110e8176d1cae0ba7629fff381","sha256:a3f1b912fe78e59f8b79ea818c29e3927deb9a695db41d6bcdefabf403f0a172","sha256:bf8127b033ce51c2ee23aeae98ab283496c158e40528e8fb2e06ade773663661"]
      - values: {"h":80,"n":"1{,}46"}
        answers: ["sha256:9dc6805a601f75e6287b137105b6dec22444d5d6b684559b11ec7ddb6b9f9c38","sha256:b71701596d297e0970c8c4a015c036fb47b261494797078ea73c0dd09d9be2ef","sha256:99e408c3ebe64901debacd2d03db51d4b5eeee0aeb7f4a0e67e5e625db68924f"]
      - values: {"h":160,"n":"1{,}31"}
        answers: ["sha256:15495933acb696e8b8a6666867ec89b32f2d8ced5758b9a1467e3b83b0364989","sha256:f8265d9abcc6f8971a865c96fba29fb08e33c27cf889045f893d91892a5ccd24","sha256:e37563ac11629b445096d356808e4aa1ce6d37d88b282191d40710e2577b3edf"]
  - id: aumento-de-un-telescopio
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un telescopio tiene un objetivo de ${{fo}}$ mm de focal y un ocular de ${{fc}}$ mm. ¿Cuál es su aumento angular (en valor absoluto)?
    variants:
      - values: {"fo":900,"fc":25}
        answers: ["sha256:a5ca7f8237bdc02382056be8a86375c16194d733bd9a4f1f5d45f1e0bced0345","sha256:af85bb4fc10995a2aab6e0d03ae41bc363f5fbeb2311c06532c6282d5941f6f5","sha256:799075df16f24955acc5f6f8d14260ccc1e12fc92bf0a2810f7060b173b49199"]
      - values: {"fo":1200,"fc":10}
        answers: ["sha256:f4c5083b3537b6abcce1616b4659a09d14709447ef163123b04849d634d8d0a4","sha256:c762525f2d74a79f552cfa07274b69376adbd93b1c3978d30c2968eade5d1fef","sha256:7846b93f9adc95b1935ec4490614a140f8abe0f0b5f95d8f1dab9fcfa536bed3"]
      - values: {"fo":650,"fc":20}
        answers: ["sha256:7632ab41de27868090da563cb50cbab27315a7c76cd101e598e25c9f83924ea2","sha256:811d41c041db26280cd1b56198eb0d64d8629b49082d855facc7cb9d0fe31b24","sha256:70d0259429dc4c96be04ec99a1f69c98b1b54b85b3b02d9275a9e08ce5754131"]
      - values: {"fo":2000,"fc":32}
        answers: ["sha256:670ad8333d5a5d1191f370f1b96907c937c9410fdc8f214fd2ca891bad7ce1fa","sha256:61e44d6e200478e64513bf65c7c99546f5ffd431c4cef861e060d11aaf52a1f1","sha256:a23ee81bc63be712d403b4ba646a5156e59c7d45e338584a6a44d3d16a9b353b"]
      - values: {"fo":400,"fc":6}
        answers: ["sha256:47f151084fa1177f2c4d4d276928d65fa89d1ed03b4e6d46a0557a164274ac43","sha256:af866d7426388d0e1739b5da5629b26a69126827cbea3537b4847ed6fd0d41c6","sha256:a2f1771d5f8c27f30df863c5c9c65e6ff94362628dca58d3177aa84461d863b0"]
      - values: {"fo":1500,"fc":9}
        answers: ["sha256:8f48b7a5e1c2c520208e04de91dfa056984de8e255f8027243b468808a010df6","sha256:f9857714fd48bbd93cd2bcc0c95adaf0cd8ef517af342f6756ae9aa8feb8f951","sha256:e80ced96f38025b9f717e01116edd3c7b76214e528a9412d2dcf378bdb896114"]
  - id: luz-y-lentes
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué una pajita parece quebrada dentro de un vaso de agua y cómo funciona la reflexión total en una fibra óptica. (b) Explica, con un trazado de rayos, cómo forma
      una lente convergente la imagen de un objeto situado más allá del foco y de otro situado entre el foco y la lente. (c) Explica qué es la miopía y qué tipo de lente la corrige.
    sealed: "gz64:H4sIAAAAAAACCn1UvW7jRhB+lQGhQiIEBXYpI2kCAymuuzIMhNFyTK+ynGFml4J1hh5GD6DKXVq+WDBL0pauSCNI+6Pvd+e9iBL65IWLbVGWS1yVJXxDCP0P+KcniBgIagqATY/wis4j2C+vBJFA6UXRJQQMdBguXEu04xAQWLTFAMsF7x6qKnquqvRKCXcP8Cvw7vFu7XEBThgWvHuvqkRv6d3wzmf4DW6WvNL5vFg9GQM5CHQqQbhBCBJB8SQRiCEMVyYEJeN1gmNm06Emgti3pI2vEdrhEgFV/R4rrglqsU+KabisAeNwzerzxYNP+T45ssW9Yo0b+O5t12w6oinuGVqqvdj34cq1dwQtnkQBQZIKtMSiWWXPMFy46YNMJwyKghFvfSJYLu68+Tb69QvvHharNbDAK54m550fPng7JRHogJCkxk3FzwaD8OL3ijB8dMk7XBsID/+6QALJE2fW92QnKkpHism3njgJnGapSnsxM0RHvDeDhyQJA1gKEFCbbMHfPgwfLSWVuKm44rJc7q1a3wn6iAz1nNjW4LLXgZrsMwYKAhiADlP/OozItWRcCvAiTsC32BA/zbftyLzviM1wFshljMfhihv4XTj3Zn+gJFP+IQyX3G77y7Udd6IJ2dBzaAFr2U5YJkLJeIHnI2nyNZYlLDuVE7kkugY3XFpUXP2MZoTok/poJ3Gi9U1zTSlD7Y+kje3FJ4h9/Oy488IUbyga7dbHdiQ5BzcCzpShLI9eU49hDTUpuVeEU8U5aqMe+g5Xcz7O8nnm+XG1XjrKlXHqY8LgeaLuhg+1FxbFWLQYvRFwwp/Uc4xZpXDjU19ntnKQrS1O3GxMSJwYR7D2smSFLzY67ApymseJUvJs7zkSHIlhL6oSJW6sUk5UfUMVj89rchfK8svOnJQkYptgTA0mf8TVehxylPn2DJ3l85UJZjE2GDgpqk2XUcemWBfa79W7Yvvne+HUJ1IvxbZ4fuuCd3gzOoxTFvD5YEcbx7f5tXv/nE6GNI+JaTIYatdzklhsH8/rO9w/0OUCJMUfFkdNk4YT1D4mz01Ps/O5xZ8dtqNTS+aS/B/QjUCryHDNofQ5A5r0ZVE5gq8A7v/zr/N/bljiI3oGAAA="
  - id: r-reflexion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué dice la ley de la reflexión?
    options:
      - |
        El ángulo de reflexión es igual al de incidencia
      - |
        El de reflexión es el doble
      - |
        Dependen del color
      - |
        El de reflexión es siempre 90°
    answers: ["sha256:7c3979c7241efdef16854ec99844f4e71e9dbffa7ff3411fc42a09f9ec62da62"]
  - id: r-indice-mayor
    tier: 1
    type: opcion
    review: true
    prompt: |
      Al pasar la luz del aire al vidrio (índice mayor) con incidencia oblicua, ¿cómo se desvía?
    options:
      - |
        Se aleja de la normal
      - |
        No se desvía
      - |
        Se acerca a la normal
      - |
        Se refleja siempre
    answers: ["sha256:953ba606f50b1f44178652732ae2347fdbc25fda1708ecd77bbeef8865a9dfb3"]
  - id: r-reflexion-total
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se produce la reflexión total?
    options:
      - |
        Del aire al agua
      - |
        Del agua al aire con un ángulo mayor que el límite
      - |
        Siempre que hay refracción
      - |
        Solo con luz blanca
    answers: ["sha256:a834a0a9846a10356373dd6a74b66ebe545b8f61b494a0e9310c806337b886dc"]
  - id: r-dispersion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué un prisma descompone la luz blanca en colores?
    options:
      - |
        Porque el prisma tiene colores
      - |
        Por la reflexión total
      - |
        Porque la luz se frena por igual
      - |
        Porque el índice de refracción depende de la longitud de onda
    answers: ["sha256:410719ddf2ee0bcf0777316ffb102fdac2f83988ef17fe9e9b92ad497457f2c9"]
  - id: r-objeto-en-2f
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un objeto está a una distancia $2f$ de una lente convergente. ¿Cuánto vale el aumento lateral (con signo)?
    answers: ["sha256:fabb360e6175c7cbe482dd1b2c665fad89077fb30d33fa4c681289814b13b842","sha256:b97ee6a9f3a130c7938d05dba13fbc6535b31034c795ddbc433d63e051198d14","sha256:570372e32b0e9f1a60fd78f478d9532e51c7b7f1a8a36d8e40cee864dddcf4e0"]
  - id: r-dioptrias-2
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la focal, en m, de una lente de $2$ dioptrías?
    answers: ["sha256:e53034be4832eb4aef0586495f9cae447dc1088231bab5f8329bcccd3870ca8a","sha256:9a435cb5c7a3b7bd66bf81dac946bae744931e6461eded40603a1840e5cfffd8","sha256:6f656e2aebc61695f00edc16ccee78b6dea7978f920ef54705970920d2bb742b"]
  - id: r-hipermetropia
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué tipo de lente corrige la hipermetropía?
    options:
      - |
        Convergente
      - |
        Divergente
      - |
        Plana
      - |
        Cilíndrica siempre
    answers: ["sha256:6012d08980af178bb03275b7fc6492c71992141e067da882f28f3fba229debfd"]
---

# Óptica: naturaleza de la luz, reflexión, refracción y ley de Snell, reflexión total, dispersión, espejos, lentes delgadas, el ojo e instrumentos ópticos

Vemos gracias a la luz, y casi todo lo que sabemos del universo lo sabemos por la luz que nos llega. Las gafas, las cámaras de los móviles, los
microscopios, los telescopios, la fibra óptica que lleva internet bajo los océanos y el arcoíris se explican con unas pocas leyes sobre cómo se
propaga la luz y cómo cambia de dirección. Este nodo trata la **óptica geométrica** (la luz como rayos), con una introducción a su naturaleza de onda.

## Objetivos

Al terminar sabrás:

1. Describir la naturaleza de la luz, su velocidad y el índice de refracción.
2. Aplicar las leyes de la reflexión y de la refracción (Snell), y explicar la reflexión total y la dispersión.
3. Formar imágenes con espejos planos y esféricos, y calcular su posición y su tamaño.
4. Formar imágenes con lentes delgadas, calcular potencias en dioptrías y analizar el ojo y sus defectos.
5. Explicar la lupa, el microscopio y el telescopio.

## Qué debes dominar antes

[[fis-ondas-sonido]] (ondas, longitud de onda, frecuencia, $v = \lambda f$) y la trigonometría de [[mat-razones-trigonometricas]].

> [!question] Test de entrada
> 1. $\sin 30°$ y $\arcsin(0{,}5)$.
> 2. Si una onda pasa a un medio donde va más despacio con la misma frecuencia, ¿qué le pasa a su longitud de onda?
> 3. Despeja $s'$ en $\frac1s + \frac1{s'} = \frac1f$.
>
> Respuestas: $0{,}5$ y $30°$; disminuye; $s' = \frac{sf}{s - f}$.

## 1. Para qué sirve

- **Salud**: gafas, lentes de contacto, cirugía refractiva, endoscopios.
- **Tecnología**: cámaras, proyectores, pantallas, lectores de códigos, láseres.
- **Comunicaciones**: la fibra óptica transporta casi todo el tráfico de internet.
- **Ciencia**: microscopios y telescopios; espectroscopia (el tema `fis-cuantica-introduccion`).

## 2. Naturaleza y velocidad de la luz

La luz es una **onda electromagnética** (una vibración eléctrica y magnética que se propaga) que no necesita medio; la luz visible va de unos $400$ nm (violeta) a $700$ nm (rojo). En ciertos fenómenos se
comporta como partículas (fotones). En el vacío viaja a $c \approx 3 \cdot 10^8$ m/s; en un medio, más despacio: el **índice de refracción** es $n = \frac cv \ge 1$. *Ejemplos:* agua, $1{,}33$ (unos $225\,000$ km/s); vidrio, unos
$1{,}5$. Al pasar a otro medio la frecuencia no cambia, y la longitud de onda se reduce: $\lambda = \frac{\lambda_0}{n}$.

## 3. Reflexión y refracción

> [!practico]
> Mete una pajita en un vaso de agua: parece quebrada en la superficie. La luz que viene de la parte sumergida se desvía al salir al aire, y tu cerebro, que
> supone que la luz va en línea recta, la «coloca» donde no está. Por eso las piscinas parecen menos profundas de lo que son.

- **Reflexión**: el rayo reflejado está en el plano de incidencia y forma con la normal el **mismo ángulo** que el incidente. En un espejo plano, la imagen es virtual, derecha, del mismo tamaño y
  simétrica.
- **Refracción** (ley de Snell): $n_1\sin\theta_1 = n_2\sin\theta_2$ (ángulos medidos desde la normal). Al pasar a un medio de índice mayor, el rayo se acerca a la normal; a uno menor, se aleja.
- **Profundidad aparente**: un objeto a profundidad $h$ bajo un líquido de índice $n$, visto en vertical, parece estar a $\frac hn$.
- **Reflexión total**: de un medio de índice mayor a otro menor, si el ángulo de incidencia supera el **ángulo límite** $\theta_L$ con $\sin\theta_L = \frac{n_2}{n_1}$, no hay rayo refractado: toda la luz se refleja. Del agua al
  aire, $\theta_L \approx 48{,}8°$. Es la base de la **fibra óptica** y del brillo de los diamantes.
- **Dispersión**: el índice depende de la longitud de onda (mayor para el violeta), así que un prisma separa los colores de la luz blanca; el arcoíris es dispersión con refracción y reflexión
  dentro de las gotas.

> [!formal] Con rigor: Snell a partir del principio de Fermat
> Fermat propuso que la luz va de un punto a otro por el camino que **tarda menos**. Con A a altura $a$ sobre la superficie y B a profundidad $b$, separados horizontalmente $L$, si el rayo cruza en $x$,
> el tiempo es $t(x) = \frac{\sqrt{a^2 + x^2}}{v_1} + \frac{\sqrt{b^2 + (L - x)^2}}{v_2}$. Derivando e igualando a cero: $\frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}$, y como $v = \frac cn$, $n_1\sin\theta_1 = n_2\sin\theta_2$ ([[mat-aplicaciones-derivada]]). $\blacksquare$

## 4. Espejos esféricos

Un espejo **cóncavo** (como el interior de una cuchara) concentra los rayos paralelos al eje en el **foco**, a una distancia $f = \frac R2$ del espejo. Con el convenio de distancias positivas para objetos e imágenes
reales (delante del espejo):
$$
\frac1s + \frac1{s'} = \frac1f, \qquad m = -\frac{s'}{s}
$$
($m < 0$: imagen invertida; $|m| > 1$: mayor). Si el objeto está más allá del foco, la imagen es real e invertida; entre el foco y el espejo, virtual, derecha y mayor (espejos de maquillaje). Un espejo
**convexo** ($f < 0$) da siempre imágenes virtuales, derechas y menores, con mucho campo de visión (retrovisores).

## 5. Lentes delgadas

> [!practico]
> Con una lupa puedes concentrar la luz del Sol en un punto muy caliente: ese punto es el foco. Una lente convergente es más gruesa en el centro que en los bordes y
> junta los rayos; una divergente, más delgada en el centro, los separa.

- Las lentes **convergentes** ($f > 0$) y **divergentes** ($f < 0$) cumplen la misma ecuación que los espejos, con $s'$ positiva si la imagen es real (al otro lado de la lente). *Ejemplo:* $f = 10$ cm y objeto a
  $30$ cm: $s' = 15$ cm, $m = -0{,}5$ (real, invertida, la mitad).
- **Trazado de rayos**: el rayo paralelo al eje sale por el foco imagen; el que pasa por el centro no se desvía; el que pasa por el foco objeto sale paralelo.
- **Potencia**: $P = \frac1f$ en **dioptrías** ($f$ en metros). Lentes finas en contacto: las potencias se suman.

## 6. El ojo e instrumentos ópticos

- **El ojo**: la córnea y el cristalino forman una imagen real e invertida en la retina; el cristalino cambia su curvatura para enfocar (**acomodación**). **Miopía**: el ojo es demasiado convergente
  (ve mal de lejos), se corrige con lentes divergentes. **Hipermetropía** y **presbicia** (vista cansada): se corrigen con convergentes.
- **Lupa**: objeto entre el foco y la lente; aumento angular $\frac{25\ \text{cm}}{f}$ con la imagen en el infinito.
- **Microscopio**: objetivo de focal muy corta que da una imagen real aumentada, observada con un ocular que hace de lupa.
- **Telescopio** (refractor): objetivo de gran focal y ocular de focal corta; aumento angular $\frac{f_{\text{obj}}}{f_{\text{oc}}}$. Los telescopios reflectores usan espejos.

## 7. Errores típicos

- Medir los ángulos desde la superficie en lugar de desde la normal.
- Pensar que la frecuencia de la luz cambia al cambiar de medio.
- Mezclar convenios de signos en espejos y lentes.
- Calcular dioptrías con la focal en centímetros.
- Confundir imagen real (se puede proyectar) y virtual (no).

## 8. Resumen

- Luz: onda electromagnética, $c$; $n = \frac cv$; $\lambda = \frac{\lambda_0}{n}$.
- Reflexión; Snell $n_1\sin\theta_1 = n_2\sin\theta_2$; profundidad aparente; reflexión total $\sin\theta_L = \frac{n_2}{n_1}$; dispersión.
- Espejos ($f = \frac R2$) y lentes: $\frac1s + \frac1{s'} = \frac1f$, $m = -\frac{s'}{s}$; dioptrías.
- Ojo, miopía e hipermetropía; lupa, microscopio y telescopio.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué es el índice de refracción.
2. La ley de Snell y hacia dónde se desvía la luz.
3. Qué es la reflexión total y para qué sirve.
4. La ecuación de las lentes y cuándo la imagen es real o virtual.
5. Cómo se corrigen la miopía y la hipermetropía.

## Siguiente

[[fis-ondas-calor-fluidos]] repasa el bloque; después, [[fis-electrostatica]] (la ley de Coulomb y sus consecuencias).
