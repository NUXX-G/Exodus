---
id: fis-fuerzas-energia
title: "Fuerzas, energía y gravitación: las leyes de Newton"
area: fisica
trunk_level: 6
prerequisites: [fis-medida-movimiento]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018, caps. 5-6 (fuerza, leyes de Newton, rozamiento), 7-8 (trabajo, energía cinética y potencial, conservación), 9 (centro de masas y momento lineal) y 13 (gravitación)."
  - "Ling, S. J.; Sanny, J.; Moebs, W. Física universitaria, volumen 1 (en español). OpenStax, 2021, caps. 5-6 (leyes de Newton y aplicaciones), 7-8 (trabajo, energía y conservación), 9 (momento lineal y choques) y 13 (gravitación). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/5-introduccion"
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I. Addison-Wesley, 1963 (edición en línea: feynmanlectures.caltech.edu)."
  - "Newton, I. Philosophiæ Naturalis Principia Mathematica, 1687 (leyes del movimiento y gravitación universal)."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019."
hints:
  - "Concepto: dibuja siempre el diagrama de cuerpo libre (solo las fuerzas que actúan sobre el cuerpo elegido), elige ejes (uno a lo largo del movimiento), aplica la segunda ley en cada eje y comprueba el signo. Si el problema habla de alturas y velocidades pero no de tiempos ni de fuerzas, prueba con la energía: es más corta."
  - "Herramienta: resuelve con la segunda ley y comprueba con la conservación de la energía (o al revés); y compara con una simulación numérica sencilla en Python (bucle con paso de tiempo pequeño: a partir de la fuerza calcula la aceleración, actualiza la velocidad y luego la posición)."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de fuerza y movimiento, energía cinética y trabajo, energía potencial, centro de masas y momento lineal, y gravitación; Feynman, vol. I, capítulos de las leyes de Newton y de la gravitación."
exercises:
  - id: segunda-ley
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un cuerpo de ${{m}}$ kg acelera a ${{a}}$ m/s$^2$. ¿Qué fuerza neta actúa sobre él, en newtons?
    variants:
      - values: {"m":"1100","a":"2{,}5"}
        answers: ["sha256:61b86edfaacbb4228178bbd5d1bdc49f6ff31559f5841428f3dac3e1708fec15","sha256:bd169a07deeb5026e3827fbf7d6927b409fb0fd8ddd2a7d12e0d3f9110008028","sha256:bf9f349afdd08a80a849652eacd756863cb0f7508559da98cbc8ec287e42c1bc"]
      - values: {"m":"900","a":"3"}
        answers: ["sha256:365285840dd18c34d391748c0209936a8db45e0ad6e6517c48121df2eae0659d","sha256:4b1b34e369b836ae1059a7d97b312a17648d258bea28a8aef88ac5b11cb64028","sha256:d614ca9b6f324cd12f3b6f9ec2e6a17105223f3464abf8ecccdb21eb0e28bd20"]
      - values: {"m":"1500","a":"1{,}8"}
        answers: ["sha256:5314594b3b26a499fc5cc8ec9092d0fd4472b3efff628f68592ba10b5f97b0e3","sha256:89f59e986d4d4f2461b31b28970a35e1c516cb4808b2863ab8d3c0f9bfd4b94e","sha256:970cd9fce472a9309b3c3b122046609af2694e1f2521146bde4bc4698dfa2005"]
      - values: {"m":"60","a":"4{,}5"}
        answers: ["sha256:62fafb62c5de0de95e7789d6cea96e1a6abde2fca956b447d8d65b0a5aea359a","sha256:8489d136d1e4c0d987a6a7470d9f2bba94b59f586562aa496127db031a137025","sha256:a635f0f5c424343a0c4822d78493911a9bed991cfb2b2718f8515093feb5b0d1"]
      - values: {"m":"0{,}5","a":"12"}
        answers: ["sha256:22881c1559b3dd1b2b9f3a5864c308c1bf8e671b9d3d0b36ca8c9eadd17980d7","sha256:c410a6b4f1ea0fada0b2b5317354011bfd78de45370a3220dd09267183593b3c","sha256:f68f5662ab0ce77dcf53f80764e4315fc43c48014392698c104f6c8ee04dc67a"]
      - values: {"m":"2500","a":"0{,}9"}
        answers: ["sha256:4e2dd56d7ce0a3c357990991db619bd84b8762e4f80f52bea2353908752c849b","sha256:14693eeef500c1afa69e4c329234a4358e1d49e4dfa9ebf2808e68fff2e72ea4","sha256:7cdfc424c53cbc6de24ae67c8c7675d4aa9b52827338cd68d99d74c923c1b297"]
  - id: peso-en-la-luna
    tier: 1
    type: numero
    sig: 4
    prompt: |
      En {{d}} la aceleración de la gravedad vale ${{g}}$ m/s$^2$. ¿Cuánto pesa allí, en newtons, una persona de ${{m}}$ kg de masa?
    variants:
      - values: {"m":65,"g":"1{,}62","d":"la Luna"}
        answers: ["sha256:5ad7ff663281f853adbe369d25837683fddfb9d1198fee94a7f0258d871ab57d","sha256:6383db94e5745b941281f283a0c1c1223ec3dc878a20783afbae25306437eae4","sha256:254c10454bdbd22d8af23720c5397a40dcf0de1445b53f1d83289946f1af20af"]
      - values: {"m":85,"g":"3{,}71","d":"Marte"}
        answers: ["sha256:6f3e54e50a6d655ec1a2ab24842e7e88bfda3be016891d6ce9b9d277e2039730","sha256:3ce5d25ac3340363f5ccec77b43e43d6643a4aa24ce1a7d0193c98dd07555d8c","sha256:932ccbaec2e767dadba56fd0a51bb9235c32ab9286de1cf7030db939fd056a16"]
      - values: {"m":60,"g":"24{,}79","d":"Júpiter"}
        answers: ["sha256:efae0c94687af7f8a2fb7db683f2d3917c90d061f2f332777b5b200c535ec59d","sha256:194bf7698c66e6a718087c9290c12248fecfe53dbf14306054c2a6804095872c","sha256:cca8a9911c6b7829d56d2cf4c747c4fea6f14abeaa7515a09eb404f6d0159a53"]
      - values: {"m":50,"g":"1{,}62","d":"la Luna"}
        answers: ["sha256:d92987352684208de7ce4216cf681bc6420283084aad6e7080c4594dfbf3427a","sha256:92b7d9b99ba063ebb863cbda6947b7303962c310a9aabad5272509fc8688e28b","sha256:5f2b04b11acecd06d8f4717bec14a86a08229da775f1cddaa492d613a6336937"]
      - values: {"m":75,"g":"8{,}87","d":"Venus"}
        answers: ["sha256:52165c0ea616c5e199d10db27cbceccc14b3689441d780aba5151b62347cb3ee","sha256:f3cf57e6f1ad1f50c90fb7e54a3e1109e9a59e1b9b9afc84d76ee17c49a339d7","sha256:ee14fa871ffa5d981c62f983ccfe9c9079dfaa8e8bdde6cb13db9c85888b5fb7"]
      - values: {"m":90,"g":"3{,}71","d":"Marte"}
        answers: ["sha256:90fec88bf3b3d96b4de3b0a00c2f24cf0a8cd469d70f8eb0d1a9951e70b73111","sha256:63ebbbf48c5666ab94e94b996a0be1dae57080eb549bd01c7b34ced85a5850cf","sha256:8e4d2fffb52e7d93f529fe18371c4c714d137fdd8db97c4057dc76348d72a1fe"]
  - id: trabajo-con-angulo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Se arrastra una caja ${{d}}$ m tirando de una cuerda con una fuerza de ${{F}}$ N que forma ${{g}}^\circ$ con el suelo. ¿Qué trabajo
      realiza esa fuerza, en julios? (Cuatro cifras significativas si no es exacto.)
    variants:
      - values: {"F":50,"d":12,"g":60}
        answers: ["sha256:2a967a132d79cd75fab448b174ea32c4f83349a59cecba78d77b5b1ccb14c524","sha256:abf06d694790cc31b1a746fd7a7cf03db5f13ab3d4672c0fd6e611ad4e0769ee","sha256:ecebbf59a18fe8b93d89d3dcbee593b46349d3eaf30ed989c2b02c2d81cf1a02"]
      - values: {"F":80,"d":5,"g":30}
        answers: ["sha256:e01c4f9739f7bfbc3d9354420b611aabe413a76363ba2d7f5253018e447c9d3f","sha256:d64ab66d30f9dde5adb9653f433f6138d788c8f6966039f2660298f04388a20b","sha256:4f1105d6392e1f2148d5162c52f8c2ece8a3dbed5ec786c4ae6f898f64e07f33"]
      - values: {"F":30,"d":20,"g":45}
        answers: ["sha256:3fd2ff301f2e4b1e98d0020a8e6cda5db51393984858171202f22c4a6b9c9434","sha256:a14758dd3a5aae5d5f22ea86fd9d305cf829c818dd947d295c07328a703c9dfa","sha256:80ad4449b11d51e69a289986d49a5e09891fd702bdf11e84065d9354206b0766"]
      - values: {"F":100,"d":8,"g":0}
        answers: ["sha256:a8b5ff0861e74df1bc38512d70326aa74c5190fe449c121ee1e35f0adf5db783","sha256:f006a58c340172650d14c3d580132c17fc96808f290574b35be499fc94a1743b","sha256:ee48e6c920f13369707788da6054cbfcaa5157422b2337ab76fdf5f5f6c522a2"]
      - values: {"F":40,"d":15,"g":37}
        answers: ["sha256:31fd42cb0eb35eacb4bcf9e7bee0fcf10528c7cd8345d854800859a8f0a257e0","sha256:f19b4426bac40ec5e2011934d531b13323e2785eecfce57a345dbc2acc8d9e26","sha256:e53c4dffffa32c1015e0359701495b5d9a14ff8c5c30d6b31917ea30f2999040"]
      - values: {"F":25,"d":6,"g":90}
        answers: ["sha256:0365bb790fdc4f96fe0ca15b0bb6f8603d04071f49fa80045bcea7a622573023","sha256:2de0c19306848945c8b6800ed9e6cea9573a3c3496a554cdfc8b682f75bf7867","sha256:2d3e8091dc4612af0412e63b3296e27176801259de7e3c016970141f1be21a2e"]
  - id: plano-inclinado
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un bloque resbala por un plano inclinado ${{g}}^\circ$ sin rozamiento. Con $g = {{gg}}$ m/s$^2$, ¿cuánto vale su aceleración, en m/s$^2$?
      (Cuatro cifras significativas si no es exacta.)
    variants:
      - values: {"g":30,"gg":"10"}
        answers: ["sha256:aeaaf33ea12ab34e46d7cd0dcaed15385cfafde293216c1d390f8d8135598808","sha256:f25980ad3e608354608291e6acbceaa48470328f3066b5fadf17cf5c49cee231","sha256:de800707784d5d7a9de4f09a6f4168d44af903abfc2f7b608edfbe5fbd34458d"]
      - values: {"g":45,"gg":"10"}
        answers: ["sha256:1e22d1bee3862654f788361049877d8ec3b8c250d5ae7c09be694ed9783264a9","sha256:e9082198b2e10bf95c52e7a64a62a4b16e685fd311a49a4449be07637bdc45f4","sha256:37268e15ad6a0bd5e6fb6d5f25f90872cbed387083df8dd0f7d94f6bce010f0b"]
      - values: {"g":60,"gg":"10"}
        answers: ["sha256:0b1ed2ecee779f45f592ddf651fd48ed2de1e3d05ca1f1ab62d463f042b9542e","sha256:4ea7df4d1a8f2604e1f7b5bcfe704a60842c0bf451c222d5c00bb43d0466c457","sha256:7dd11536a1c26a34b310467cedcb21d4eb8697dfd0cf0255874aaae6f496af2d"]
      - values: {"g":20,"gg":"9{,}8"}
        answers: ["sha256:8a7de817c7589cb2ab9f9a9614f07cbc2c15f51530c96b2bb61c2d07b874c4f4","sha256:8b2e3cccbbf4894e3ce835e930ee4ef6096ce100b2cefdf9290804df12e5a34f","sha256:9f4d0d49461e8750905565a13bec209e3fbe39cde0fe68d3cd9dd1bf4e4768de"]
      - values: {"g":53,"gg":"10"}
        answers: ["sha256:56cc22b718c05fb327ddb7b1e5bff2b80984a19b439e6b1dca75e9e39de6639e","sha256:6f42e14fc652c3a353b418ff583cc7086cdcc70df9c384661777338e4cc1fb55","sha256:53383ff188b863f6bfa839e4b6c9639b13966e510c38b48f40ce54a4983ee9d7"]
      - values: {"g":10,"gg":"9{,}81"}
        answers: ["sha256:ad6498b4569047ba3d860350cde1d77403f5e54a127ebf6b8c21005448498f90","sha256:e941caa56a9042d027bc78e9f8c6563b43577c2e3d17b545e83221223aa5f134","sha256:c737e350b5513bd502c75e2f9e29971a7761c4b8c23838e8066700d36386b7f3"]
  - id: aceleracion-con-rozamiento
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una caja de ${{m}}$ kg se empuja con una fuerza horizontal de ${{F}}$ N sobre un suelo con coeficiente de rozamiento cinético
      $\mu = {{mu}}$. Con $g = 10$ m/s$^2$, ¿cuál es su aceleración, en m/s$^2$?
    variants:
      - values: {"m":20,"F":80,"mu":"0{,}25"}
        answers: ["sha256:8eeac158d64d4921a355487f7f78e486f7a0a771fbcffbb103b6f2d9df11c4d6","sha256:a39d94b4fae65e99daa957a7b1d5ab2a450ce635098313983aee5bc877a5c50e","sha256:b7b86499822d3c667ee68a1c4318e60e386b93b887a9351e947f7119a39a8739"]
      - values: {"m":10,"F":60,"mu":"0{,}3"}
        answers: ["sha256:e2e51da0c63cb7bf645841531646df4117f6df2dc398300d5fca378f01b965f8","sha256:5cdf862752f6d1c05eab4d4aca7b0f2aa756dad0f1b7b3956e6ec67a0e96b716","sha256:cbb84cf5a085c84afaaeb14b06ff58d5afcdb00e31a67aa1f97278913c485460"]
      - values: {"m":50,"F":300,"mu":"0{,}4"}
        answers: ["sha256:482c2f784b76114ba7fc5ee88e742e876e810c135b1551f08bfa099038da9126","sha256:194efc8026e35f102e1accba12e220a2eb4f8ca580a65d21924ce48e927fafd8","sha256:4c96cbd54d4812521a408c16a2a1de17f6bac8b7ae815b8b457cd0f9440ca8df"]
      - values: {"m":5,"F":30,"mu":"0{,}2"}
        answers: ["sha256:983151de0bae7763928f4b6bdc1acd8a6ba9080a23d52ade6ef6bb0498ea2db8","sha256:c7e7e53f4e9d0b670b8a126b9dc7f19cea07a321b1ac7f9ccbcbdc7b8c35a9f2","sha256:8aa35c967c9d3438753aa7166aa794c985254ac86dab3688527f19c36b0fa4ea"]
      - values: {"m":30,"F":200,"mu":"0{,}5"}
        answers: ["sha256:69b9fccfd1841690e09a5acb56ec88ed353048345b7803c3b0771a560e549c9c","sha256:b461b2ea5ae4bfc21f8e3f7bdded4d7168e3704d5972c1176290bae772d38ec8","sha256:d6809f4b2b8dbf6f3e40441898dbd0218957c35e0f58abea3f960231e2759778"]
      - values: {"m":8,"F":50,"mu":"0{,}35"}
        answers: ["sha256:d899e2dccb3c922ca56cc34e0d323d6b12f2c038bd75e8102f8a86bf96a19b2a","sha256:9e933873001d3e873e9909aceeb216e765978aa137d0c478245ebdbb5394d388","sha256:80b983ec094c5f27251694d9f5fbfda7e468f1e43f2ea0ffd928023df0a83bbe"]
  - id: ascensor
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una persona de ${{m}}$ kg va en un ascensor que {{s}} con una aceleración de ${{a}}$ m/s$^2$ (en el sentido del movimiento). Con
      $g = 10$ m/s$^2$, ¿qué fuerza ejerce el suelo sobre ella (su «peso aparente»), en newtons?
    variants:
      - values: {"m":80,"a":"2","s":"sube"}
        answers: ["sha256:a0cd19029590c207cc31df822f623d61e12de355e2118a70448d4c89d6efef63","sha256:f4f4279b85020b4ef065d9c3530e59116f7d6312b4cbf5d8b54ab8fee7a60f1c","sha256:56676b3263a75e931922feb8700620f51cb7ead752ad6bdfa68f3ba86ff54a45"]
      - values: {"m":60,"a":"1{,}5","s":"baja"}
        answers: ["sha256:2868be9198e3f609d7b0ad29b8e40cfa5aeb9642b331fd209560f42d2b3ad904","sha256:7f948a22e7087581c504c68db47b7bd845d802d6cb1359a17ccad2a0cd41e22d","sha256:b0820e170edf497783e7a49bbc3286aba8e867e7ee916e5f213d7b9d0f1383ef"]
      - values: {"m":90,"a":"3","s":"sube"}
        answers: ["sha256:98aa5011c563a6fbbba609b6923f5c7a1c8fabbdb97ca307b75eb13a0c4482ba","sha256:4a16d28d99b4961b831736f36996bc49ffb6c536d6a0b94361e47e8652d5bb3e","sha256:e49d10216b2412f6a9ea65c6a8c71fcdebc25ff3050c62024b480a91d9e92cec"]
      - values: {"m":50,"a":"2{,}5","s":"baja"}
        answers: ["sha256:bae77d31c50405a83cb5262946233d87e71fe3c89d7bf10f33740852a13faaa0","sha256:4886b7f991448c6b11b7dca448dce83e79b84ddf67da4ed34a7a98c7f8148446","sha256:9bf29c26a0c2454c9d2f805ecc3ca70ce8e04ac73c02f0b820b330726b6b050e"]
      - values: {"m":75,"a":"0{,}8","s":"sube"}
        answers: ["sha256:66c84dbc6f2adf39a801b1128ad736036aebcb5872df3ec06f82ef21896fb46e","sha256:6afeb1035c86e830ecd9f194b11abda79d2d2b19db650df7308d18de5cd93a90","sha256:b4242bfb4b33bf16d575dd77d088cdb0b4ad40aff096bd36e5611999039febc5"]
      - values: {"m":100,"a":"4","s":"baja"}
        answers: ["sha256:d061d81c84d592db67f7965eeea4fecdc17fd0a6a79988895ed6c4438da3239a","sha256:94a6f63593c328a600cd5dec9eed6f3b3861c22c899f2d8f3d82ef52787035e7","sha256:c5603dc6a117ab9b634fdffccef9bb78235dc5d511f31d2244695cbdc108f8ba"]
  - id: maquina-de-atwood
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos masas de ${{m1}}$ kg y ${{m2}}$ kg cuelgan de los extremos de una cuerda ligera que pasa por una polea sin rozamiento. Con
      $g = 10$ m/s$^2$, ¿cuál es la tensión de la cuerda mientras se mueven, en newtons?
    variants:
      - values: {"m1":"3","m2":"7"}
        answers: ["sha256:1042ae25f7886d9432af69ef028b18dcb1e48b240f97c0d8c6df275eb118a570","sha256:5e8ad660a78318f05958c7a96a1ef47947bff91c7b763d3e267133f003b3cfa6","sha256:79bd974c074809c32eb59389457c1cd404b5d8958a531354bc674b11b1a75e1d"]
      - values: {"m1":"2","m2":"6"}
        answers: ["sha256:139f46b542d4fcbbed364b152976d8f5814f0bbc465380322c382e630c4fe626","sha256:ddb0355af50c25288875797160f7caeef8eb7c5de182fd940e1cacbc150d2e3f","sha256:177b0403fb6937e6bc0dff24c0986c25019c295d28c7be6e0d01d97a3cb7912f"]
      - values: {"m1":"4","m2":"4{,}5"}
        answers: ["sha256:2d06777510ced237f9dae74c4c9c63b2ed9bdb48adc1eb10f2af6cc3f5d7dfe1","sha256:9d69b434343fa2aabb18faeea11204080944d83df939ee29a1fd2e4a5b4e3796","sha256:32136248d42ccef77082c3c2c9498994eccab4aa4ecd45e38c991237d6f6e72c"]
      - values: {"m1":"1","m2":"9"}
        answers: ["sha256:88966ed637298ae15bd999cfb4766aca43405c029bb9e0ce24ef2844c5ba00f1","sha256:d2ac588f81a46c107d8da7c5716a0c4f794f82f812b3654f63bd2fc5ef9d3cf7","sha256:b7627825f96e5a1479acbb9e53efd6e662b1b42589f0bcd36096c25490fc07be"]
      - values: {"m1":"5","m2":"7"}
        answers: ["sha256:11d13103e8d401e8fab289ec4cfa63dd01003a5083e4bd32413e082fee6211dd","sha256:b4e969a2489399c03b000f0c833b3bdd55443fefe84419d3acee1bdd63eaf737","sha256:e2a6669238f03b87927e73b0fd7a308bcbcece979a56c5fe0b887d38d9798850"]
      - values: {"m1":"2{,}5","m2":"7{,}5"}
        answers: ["sha256:27164c9b5abbb272804e89392cf9c3fd2c924f15fe636e69b4f5de8f6064d016","sha256:2807ccc4d06c78edc4cc286ad0e5d4e99885e6791441e26d0d0e8d4ea3fabdb7","sha256:4f135bf779a37491877df0ed2026070d6def2beda0f21ad03d2ef7f06526c75d"]
  - id: energia-elastica
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un muelle de constante $k = {{k}}$ N/m se comprime ${{x}}$ m. ¿Cuánta energía elástica almacena, en julios?
    variants:
      - values: {"k":200,"x":"0{,}15"}
        answers: ["sha256:09769fbbceb38da0e7a639d743f33d3273e1a9dc7655721a3a2da9c016fade10","sha256:e9fe1a1b8d4e0472bd039442383e55b1e5f51a9d81cc496ac19327d9a0d46e81","sha256:b24e2c9f8ba90fe35b34a86a933ca236938ef4656979170eba0e759eb9312d08"]
      - values: {"k":500,"x":"0{,}1"}
        answers: ["sha256:d69b21743ecd732f9adb5c833b56bd66f227d951a5b2eeb1d38a9ea5584cf3de","sha256:babb020a33102c796da5ac4eb20adb0bcec820bb4e6c94a8cc94abe62dfd3ee6","sha256:904e26ee29977add9d88fa2e59f0c8cd51802b08e0b945e31afa923dcfb15b85"]
      - values: {"k":80,"x":"0{,}25"}
        answers: ["sha256:4467b7f8d60f9b07bff62225ab1caa5cc12870b39fe96834ba5257d7efe51197","sha256:19ccc79600330585dc8e284450b8a0f28ea53edcae5d2f4d0fb8093467ef4373","sha256:9d94d16e558728a4ee12e214f161e1f0c9604fc528add8689a6efddfa489f824"]
      - values: {"k":1000,"x":"0{,}04"}
        answers: ["sha256:f24abc6b2cb46bb03f50ffc67779bf9946d4c450b50afa182fdd442553ffc329","sha256:f5c6e16296a6973d37a0862977e1702ac5c146a90892b3c84e9937948e390d6a","sha256:87a57dfab8989e0257a1902b75e4d3b6569dc2eb709994f92426e27fd76e9193"]
      - values: {"k":150,"x":"0{,}2"}
        answers: ["sha256:8b164ec034ee664f3ee05397079833883b05b4492404ea0c2e6092c3968b84ff","sha256:9f0e8f378d66d7e4871883aeefbf372fce3a0fd79da3980a1a45a317bb4db903","sha256:0e57974b7de483da1dd3d3a9de0a9b8b7d9a057ded8ab49131a745d7a5e8a9ff"]
      - values: {"k":300,"x":"0{,}12"}
        answers: ["sha256:85b060cbc1495b69802dd937199b0dda72d192febf2153eaa8892dd03f4339d1","sha256:615a658cedac0d85d3d44029446e9d77155aef9065b1b00fdd17a9f86b9b5527","sha256:18e66114d602fba117717a55c60544625018440efe0aca847bcd4ba080b67dfe"]
  - id: rampa-sin-rozamiento
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un carrito parte del reposo en lo alto de una rampa a ${{h}}$ m de altura y baja sin rozamiento. Con $g = 10$ m/s$^2$, ¿con qué
      velocidad llega abajo, en m/s?
    variants:
      - values: {"h":"7{,}2"}
        answers: ["sha256:a12331bc57dc4b816cc9f9857ef3729f7b3d30d309dae8e207297b0c6a645287","sha256:d88573fd37d110b5edef0cce97fed4b8f7b883f9733f3919bc2b05bbcd5c800e","sha256:0a3441791023f896d3ed9ab796d5b91da638ccf792232c74af3e97f25d74246d"]
      - values: {"h":"24{,}2"}
        answers: ["sha256:f42ffe0fe1f06629d747074a0783d158a9b9cb1bf881fb2ab40b2825bf4745dc","sha256:59da91db78af80b6c1447f63ae6db24bf7c4814e56066a10d174e5a63afd196c","sha256:1fa1fa7190e556c3cf534824b662590f881c85b2c6bc8e7e9b245211897b1380"]
      - values: {"h":"1{,}8"}
        answers: ["sha256:64fed69441110a12f25de4d53bc447fdc143ea6d3adba6e1ba2c4f712851130d","sha256:5ec632bb5bb4238bea6273b704dee58fe8392841232e3f773fa22a86df20d3b7","sha256:1a79994743ed05e92d35aaf00a278a15e8f957e64c9e0fdd8f3b98bcf5aa3c8f"]
      - values: {"h":"45"}
        answers: ["sha256:917336194ca6a5a40fcd9b83a994668df9b411b0778956d42f60591b1f746f57","sha256:5160e71efd967f06a3cd50e213c97b0cd1dd4ebf55262785186f091b6b916213","sha256:a4e784dfb2a51845e4050a369acda2641f44efe65dae9bc12d05ac8b2ecee001"]
      - values: {"h":"3{,}2"}
        answers: ["sha256:ec75553ee7e8143b2fe4f8a7b980f927ea4305d8974f9ae21f2d053ecd562cd8","sha256:36bec04436108959d3994572b42dc2befab3bf2247172c0cf55e327b8bd12d50","sha256:b1ea6173438c439ea85f8bdefe629a14bc7dd1edf4dec0877f8a368518d9914b"]
      - values: {"h":"12{,}8"}
        answers: ["sha256:48115f7e7fdcacd6d04ee0ea47153b7ffecc406daab8507304b9ed6171340adf","sha256:60a08e037020bfaeba882115c17413fbdc87ea7a3ac4fdc17de5abac573d19ab","sha256:58d87c166bbe774e692fbe21a76101f50208be7e59cbac036e07f40cc0740ae0"]
  - id: choque-inelastico
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un vehículo de ${{m1}}$ kg a ${{v1}}$ m/s choca contra otro parado de ${{m2}}$ kg y quedan **unidos**. ¿A qué velocidad se mueven justo
      después, en m/s?
    variants:
      - values: {"m1":1000,"v1":20,"m2":4000}
        answers: ["sha256:0a77b9ade0a05967f4c76341640800f4f5fd72ae2d9f36da356129c12ec65a56","sha256:4cddd3448c51413a9ccaf4ee8d1f4e7850c34d8ec554742eccd58f41adbf3c21","sha256:0337a874237f7e0ad1be5fe840fc8b054dbc837ae34d077dcdcc5c1157030b90"]
      - values: {"m1":1200,"v1":15,"m2":1800}
        answers: ["sha256:c63823989bfb8c0863226aa974bb2e06901a5739c16835d2794bfeffe5b3028c","sha256:f7834c3599ad5db521bfa9896ce3286f92d56a53604f7ad2ccaf7cfc226a2ae7","sha256:3750d30777df262c9f23bc3915c519a2dbb638400f871855971262763745d258"]
      - values: {"m1":800,"v1":25,"m2":1200}
        answers: ["sha256:01237bee89776d73490479bc6ab19254a5c1df0d9c9044f07be1163a9d54f90e","sha256:666d806d602127d6fd70a33dfde1d382e95b41a76c18f0542f75afa13fcebdde","sha256:50c6074979bb24afd2a14d3f1a2b43117dabeb29079a319b0845845690ec0d1c"]
      - values: {"m1":60,"v1":5,"m2":40}
        answers: ["sha256:cf1d2a1ac69b97003cfc7b144b87cf2a5aefe92b695df459d21d258a13753835","sha256:95bc6e97f442f01bea77add532c201f5afb9b9bf77296a8356178a009358227e","sha256:bdeca7c90aa01600405955c61f64dab3244037342ea68ed8dd8733001752d6da"]
      - values: {"m1":2000,"v1":10,"m2":3000}
        answers: ["sha256:da027f16c6fd5d802f7820878505a88b840f83d6cbe115fd7607a7e5136c1d04","sha256:70ca5a56b71d7c3d1123e1b0d18b90adb332b96deae39c8fde5b767c9e81bafe","sha256:a82b8ff1eb073b6aff37bee5f8f096f47ee31656536df75fcbed73a86049e10e"]
      - values: {"m1":500,"v1":18,"m2":400}
        answers: ["sha256:4f542fbc0b6d371f7881ba71794a30acf3947640362ab8e85e12b914468e0c70","sha256:fa3b22a75c2969cc13c2a5373d26dc7b836a3932a68892518148f7c09e1f631c","sha256:1fa7780f2398d715f3b3bf2067d8e64268017bae8f4ff9aaf72626255168c902"]
  - id: potencia-ascensor
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un montacargas sube una carga de ${{m}}$ kg a ${{h}}$ m de altura en ${{t}}$ s con velocidad constante. Con $g = 10$ m/s$^2$, ¿qué potencia
      útil desarrolla, en vatios?
    variants:
      - values: {"m":800,"h":30,"t":20}
        answers: ["sha256:8d08fae2819e4364c365e709db9b438bd7966aaad509ca73c6ca1124aa29c907","sha256:36d4cc36a25c55fa4bf8d7a997dcc6643bfd81ca97d5482861d4207d4817ba52","sha256:800d9a545b2bdbb80afc148f786e20ae1a8d5d461e7284a8c62ccd96af42a50d"]
      - values: {"m":600,"h":15,"t":12}
        answers: ["sha256:3f787b81f1994a28d4dd62188a85dec023c49934e909d49d820c0b859038df97","sha256:2fd16dbe3732017a7dfec388f938ccb68c16d33c25b4cf36097c06254b23bf6c","sha256:d571208721048a3129d89b80fd6577adf8d8bca22549d7ea8cdac971bc8c3572"]
      - values: {"m":1200,"h":20,"t":40}
        answers: ["sha256:c6c1f0b1d15796c41be251291546ee54f65023533c9a3bdfc1f0dd292cc223e2","sha256:5de5fc5fcad97dcbfff9a181656a3af66a45ca25a20ee1e5e45beec63f37df5b","sha256:ea8f6229a00b386d959854c26d939b8306d6b3070aca5017c538fc47324c5a08"]
      - values: {"m":300,"h":50,"t":25}
        answers: ["sha256:220353e9e69f0ef083ade28521e03dc8317d25a15ef043ab057b22e94884dc70","sha256:02774688b64754b3b86375919bc139a713b3963ec2dc64c8c1c62aebd92ca59f","sha256:f5684abc4160a10fb98d00a9689b28d7400d2d357692c6a39aedd7e8996fbd50"]
      - values: {"m":1000,"h":9,"t":15}
        answers: ["sha256:aa9e074083a3f2c842b1c317d886e35451637d169fc1a0cf57f15f07a2a9ffc3","sha256:004e0996779a768592fe930faa9c6f392af5ce5f1ccdaffae7033bc14322dc27","sha256:6cdd42bdc79911ec83098fdd31a01246e55f19b9584e8ebb61c2a8fb18055a17"]
      - values: {"m":450,"h":24,"t":18}
        answers: ["sha256:5ad85ff2921dda8462b7c80cb84ca0561043ad8324ed5e51acba83359ed0d172","sha256:b314d375a597d70c6b5e39e0f9bcfa7e52062b1b9d133f86f6bce0759fb0601f","sha256:837ee1627fc801ba1a967554644bea40088cb568e055920465d9ccaaffc3baf5"]
  - id: frenada-rozamiento
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un coche a ${{v}}$ m/s frena a fondo y el rozamiento con el suelo (coeficiente $\mu = {{mu}}$) es la única fuerza horizontal. Con
      $g = 10$ m/s$^2$, ¿qué distancia recorre hasta detenerse, en metros?
    variants:
      - values: {"v":30,"mu":"0{,}6"}
        answers: ["sha256:fc8b33727ce8ad2d80f042d01d7f921b632770e26e663d52f0ac6dafa9d8f3ce","sha256:e321c766cbf107e75ad5c4eddd6f6b9b97bb309479318b1c4c4995c3fbbefba6","sha256:5023bf52dccf68a7be01c6058238465c931a0a9b33a51600b74224f58147bd6f"]
      - values: {"v":25,"mu":"0{,}8"}
        answers: ["sha256:5f4ded5a2f3c50d63f85620e4b788397698a5c8cf59cd9f80c114a55a8031823","sha256:1027fac60fda32cb1b715eee9e4538450f447184cee58aa5f591ff03c516d7fb","sha256:28f0d2f70c0cc39607b1558f45ff9d3cf8234c587c8e99a1f2438969793f332c"]
      - values: {"v":20,"mu":"0{,}5"}
        answers: ["sha256:9882fca26def308fad9d134a2245b85807eddba86e619582bcda174b7d8878f5","sha256:bd58f8b76687556d5a32da6f438f76676212f9f353b3e1bff8dff9306cbbf19c","sha256:887f686af1104e49d565203aabeeb391b39ef56a7f51960719ff3a26092ccd09"]
      - values: {"v":15,"mu":"0{,}1"}
        answers: ["sha256:2b029ba9c45f31f28a3b5f0a18ade512f815f700c80025a004a9222f9f999ad1","sha256:94175a19c3866dd909a178b0441d9812c82bd44488f859fced7f85c57e1eec6b","sha256:19c81750914a472ea7748ddbef88d6522e8c7907bef23c790ed6b728b07b25d6"]
      - values: {"v":35,"mu":"0{,}7"}
        answers: ["sha256:8cd70fb7b7daaf0292166791cfe8f63c6af9807e0dc60affb0d5efcf977a450d","sha256:4b20b2403e43ff6a4f6a210be04b92bfe8a1d7f9960f615e8d7fb6283aa222a3","sha256:b5ad51d7536ff54b9076e7a75387e05b9efc7e1c5a70e111bf0432fb258b9501"]
      - values: {"v":10,"mu":"0{,}4"}
        answers: ["sha256:68cb2ed9ab267b5600a688426086e328967a7dd25ee96590d89b0ed7985d4546","sha256:ecc38f73f9870a882ab4568982d6018c2ab55ae48bb8a5cfc19beacea9aeab66","sha256:c7cc386f2d7a9cc508a59bf5c64d906efbd5a69e1c2bb7d53dd052fef2234fad"]
  - id: altura-gravedad-novena
    tier: 3
    type: numero
    sig: 6
    prompt: |
      La gravedad disminuye con el cuadrado de la distancia al **centro** de {{cuerpo}} (radio ${{R}}$ km). ¿A qué **altura sobre la
      superficie**, en kilómetros, la aceleración de la gravedad vale la {{parte}} parte que en la superficie?
    variants:
      - values: {"parte":"novena","cuerpo":"la Tierra","R":6371}
        answers: ["sha256:8ae0e8c42a5e47d9e1fa4278d10b165be10871a56ffa08291ea5a69d3f983eba","sha256:369cab92ddf44a2c675489ba0ae70a75f9d9a1a8540a2f0fd60c3ee73dffe52e","sha256:f19c97638d5a2543e3ed286baded582decaf0d32bb92cea06eae6f17ee124c41"]
      - values: {"parte":"centésima","cuerpo":"la Tierra","R":6371}
        answers: ["sha256:dfa6380cb582ca6bbedf575903762e43227f66324a978cce3caa38e7b7d0d903","sha256:6ed10fcafdfa8321f9165f60199b2d65875a41c990042d2c10dfad8089e2bb70","sha256:a010e88ce81ff3365a9f35f197d8cf44ad5a5505bccdcdca9864e311107d9ac4"]
      - values: {"parte":"decimosexta","cuerpo":"la Tierra","R":6371}
        answers: ["sha256:0b0e65d2c848435ee69c43284b9d7aeafa3c78ee69132f17d26cc69962c80ebf","sha256:066d4f6863e7cf7a8a661150844bed0b0f02807ec04437f10dc5f4922144b790","sha256:d9d80c3d48497d0bd1cbbcfb2e3a7bf5c2f2576705debdac61e0260bb4dfa325"]
      - values: {"parte":"vigesimoquinta","cuerpo":"Marte","R":3390}
        answers: ["sha256:0e4fd13625e43337bed982d2aab67757e298a9895aa01babae94366914e29db4","sha256:df09afec0f1456048745f4e460a93332d1b81c1d8ecb1ae40559b5a9bfb081bf","sha256:ce72d73e27c6e0c1cfd3bcf701f79ea5df21779388a0b90cd46f96d65c1a60da"]
      - values: {"parte":"novena","cuerpo":"la Luna","R":1737}
        answers: ["sha256:119a96a2e2db04be97e85f77ba9de9fe9d15f250475f42853ba3448a8d1b8d72","sha256:fb906c9b4bd32217845d30cb53b1eb97d447cf09ad652fde63e0f2e7c148697f","sha256:d5b66d7564eb24afd2cd0746275d36fe49716ca3da303b6b794ca662228f44ba"]
      - values: {"parte":"trigésima sexta","cuerpo":"Marte","R":3390}
        answers: ["sha256:0ecc2fa2f21c64b5df04b600d175f640b8067efe5273753afd46d8b3cb693ba9","sha256:68ba7865b84e057c955dc9addf8fcf9027e6444e2722f28b98da529ed6107f9d","sha256:25b943e6c9e3109aac1f92ab56d1b555ac9a7711b180353e8660fab3b70880fb"]
  - id: velocidad-orbital
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un satélite describe una órbita circular a ${{h}}$ km de altura sobre {{cuerpo}} (radio ${{R}}\cdot 10^6$ m;
      $GM = {{gm}}\cdot 10^{{{e}}}$ m$^3$/s$^2$). ¿Cuál es su velocidad orbital, en m/s? Respuesta: la **parte entera** del resultado.
    variants:
      - values: {"h":500,"cuerpo":"la Tierra","R":"6{,}371","gm":"3{,}986004418","e":14}
        answers: ["sha256:c5b0c02303a44d687d3633c9ba23c423e973b0ad1a37dac162e075753c90740d","sha256:6d5c936f2512ffaa1c5c528f85205755c00b8e20bf95caf6066e839ab9664980","sha256:25098f13363b81cfb3528bc0daa0a4eece8c187e16f229de859fa6c6a41bd6ae"]
      - values: {"h":800,"cuerpo":"la Tierra","R":"6{,}371","gm":"3{,}986004418","e":14}
        answers: ["sha256:394fccc5968c63ba0b47b2a1c9c6f10a69a3bef53ab984b90e79526ee8d6c638","sha256:6ef57f31a29acd08e7230ebfaddf93971b9121081eb566392e188261807b6fd3","sha256:9eba0f4b9cc7c35c3bad0ff1b6f298108271ba1e12842ec887284026c6ceb346"]
      - values: {"h":20200,"cuerpo":"la Tierra","R":"6{,}371","gm":"3{,}986004418","e":14}
        answers: ["sha256:7222f7126c0df86e19d9e353bf90c0816009dfc29e3efbe7937e7a1ae8e29780","sha256:2261a138802459de0b2d77764ff5126b2254f8e4f37dcd856ed16b208f3e0cdc","sha256:f86ab76834d8433851cfaacdaec8045160035e8323af791b7376cfcb59d42708"]
      - values: {"h":100,"cuerpo":"la Luna","R":"1{,}7374","gm":"4{,}9048695","e":12}
        answers: ["sha256:ea7165f4019a1be8b0660234f34d8a0891ea15f1f85cbba329ca609dcbad97fc","sha256:059661141ba8bf408bfe71619648cd78e3ddf22c9f13cf0e455a4e8c06cca324","sha256:d9f84fd2cced0265c20e74d2c52a03a251cc3288edbd6dbf2ec058c60d494831"]
      - values: {"h":250,"cuerpo":"Marte","R":"3{,}3895","gm":"4{,}282837","e":13}
        answers: ["sha256:0d6b4b1974906c284baf5dd17ba29d02a4eebfa990a574233c86f5f7601f70be","sha256:76cae2ea4ca1aa62e6380cf6b02ca744a8aa5ba9e5230364fdd085c82589c0bd","sha256:bf3dbd0c88f7d5537696009ec1e25b526735c1c6a7d679c513a127bc9bf8ac84"]
      - values: {"h":550,"cuerpo":"la Tierra","R":"6{,}371","gm":"3{,}986004418","e":14}
        answers: ["sha256:081739abccb081bb985104f4f219fa38cf87379b48491c0c02eb8c971d587a99","sha256:5fc4971191653ba3001b63b1f64201ace892e74903052f6cbee724b74ac6e037","sha256:90462750ed6cd3d8c80328c267cc709c45ae3f9b03646a89e8747fa52fdf2b9d"]
  - id: velocidad-de-escape
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Para {{c}}, $GM = {{gm}}\cdot 10^{{{e}}}$ m$^3$/s$^2$ y $R = {{R}}\cdot 10^{{{eR}}}$ m. ¿Cuál es la velocidad de escape desde su superficie, en
      m/s? (Es la velocidad que da energía total cero.) Respuesta: la **parte entera** del resultado.
    variants:
      - values: {"gm":"3{,}98600442","e":14,"R":"6{,}371","eR":6,"c":"la Tierra"}
        answers: ["sha256:8e5ee03e6286f87190ddb2cd67679ad0deb9577a1902a43cfd4f97981afcfd10","sha256:b7e75556debb629ddd60e263f451bf6fd4e06978949729c7a4c07d36311de523","sha256:6c8ba92675fb0a8038474f172c1bdd65886ca3fc55f2f29d9aa722a0c379eb49"]
      - values: {"gm":"4{,}9048695","e":12,"R":"1{,}7374","eR":6,"c":"la Luna"}
        answers: ["sha256:2253723479d41f68fb075b6f3f809e0160d413344cd42de58df919bb8ccb42fe","sha256:c0f7b7db8dfb6b4edf3a2fe8622248a1afba7544572f146e336998b8fab223f4","sha256:c866f3441546f55ef785ab7787f802ac7a365c0db15d87d45a82d5837f5ac7f1"]
      - values: {"gm":"4{,}282837","e":13,"R":"3{,}3895","eR":6,"c":"Marte"}
        answers: ["sha256:51148bcf4bb26a57a72a68dd586803f2ee25d859aed59533f6e88b941e635375","sha256:858c6acb727803e030b71e0320f55cb1a7afcabe89f9de92ae0c88e17756e0cb","sha256:a852a8f01335a85b4a8659a3fdb9f6863027c438855e3289055bfde7192d95a7"]
      - values: {"gm":"1{,}26686534","e":17,"R":"6{,}9911","eR":7,"c":"Júpiter"}
        answers: ["sha256:b30ae7bca67ac175414c7ecd162990de1c3a5ed253245999b527f3eda8085906","sha256:a0418c98805199af3615287089491651fcdf3008d1d3f1f9c44aaac1077e725d","sha256:19d35e9ebd0e620016aebea0e2caf4e09f2ef68780d60f107bfff41c76e165a3"]
      - values: {"gm":"3{,}24859","e":14,"R":"6{,}0518","eR":6,"c":"Venus"}
        answers: ["sha256:4011336f0f06a0d53f8f9593011201d858069f540e47cd4f6eab711daa89ffc3","sha256:6cd2200e3b6023527827910a14e1a3a0c1f4cf7ba7d59fdd8348058642c74559","sha256:a1d68ae24a914aa4bd36105953f5a9635c0da5181dde487943613092dae5db09"]
      - values: {"gm":"2{,}2032","e":13,"R":"2{,}4397","eR":6,"c":"Mercurio"}
        answers: ["sha256:693cccbdbbc772a02cc5408cd718b50ce98645704f55408adff45778315ef2b9","sha256:12fa918fd3436704809716893800ac5860105ea3d1bc5ac479a24f6072311967","sha256:83f8bc2c10c045597e9c9eac51d1ca475c9c865e8ee093995e5035c53271773e"]
  - id: altura-con-aire
    tier: 3
    type: numero
    sig: 3
    prompt: |
      Se lanza hacia arriba una piedra de ${{m}}$ kg a ${{v0}}$ m/s. El aire ejerce una fuerza de rozamiento constante de ${{Fr}}$ N **opuesta
      al movimiento**. Con $g = 10$ m/s$^2$, ¿qué altura máxima alcanza, en metros? Respuesta: **redondeada a un decimal**.
    variants:
      - values: {"m":"0{,}5","v0":20,"Fr":"1"}
        answers: ["sha256:0028081e5b7d67a1240e0b4422e9b9bba8e0286f2eada5110583f4691a5b913e","sha256:f64ec27dadc2cb35f027b0e3b2d249d6bf47704e2c207dd4589489f5e972261e","sha256:0c8107fddfc9b0a459440e3ec41371a82dd4db79cdb4c6ca2d98490f65c0b598"]
      - values: {"m":"0{,}2","v0":15,"Fr":"0{,}5"}
        answers: ["sha256:e88830c45dd15331f14b706a9e973116d27adaf9124c5c905408ca3f524be4a2","sha256:ffd491e37ab5bd5d69a3cf403124e57e6120c6e05db83705cff15debc97c580b","sha256:2e18a4feab4029331426202bcf5fc383c0cd5b0aa9362c18264b2bd3dc84b87e"]
      - values: {"m":"1","v0":30,"Fr":"2"}
        answers: ["sha256:7ce308565e67def4bdefba697bd64b1c62e0e19096c76c8e998ef7db2979b3bc","sha256:54bab2fa843f94e5ee5c73e3666539cd526a1978f77573176ef0dad1613654e0","sha256:28258cb024969c2c9083e4d10e60bc017d1ce6614b1b4d259792ba2a3e0f5417"]
      - values: {"m":"0{,}4","v0":25,"Fr":"0{,}8"}
        answers: ["sha256:df50486aa8162df5721224ba7d971686358c3562ba544444e2f8b57e37935adb","sha256:5998ca6a92e94c076bff139515e2b7f03dce3991be2079b446e34bc853bee309","sha256:6ba1bee66fe40d59c502227055ce48d6aebbb8b629797bf9bcc3b43257741f53"]
      - values: {"m":"2","v0":12,"Fr":"4"}
        answers: ["sha256:b12c6f01e67fa2f22291de8c22158355921bb5dbc629a92186557f429c0743c4","sha256:ab5f59a1f02e2a6dd490085206c0998b7cff2d31f308df5ebf3aa69671cbae83","sha256:0e9a0e1c6fe4f4169b026e53ea7e094a90ae34b830d7551dfe378a550c9c667b"]
      - values: {"m":"0{,}3","v0":18,"Fr":"0{,}3"}
        answers: ["sha256:22f900093d0ee48247268c7ffd96c4dd2980875141d736cd37155e408da49490","sha256:0afddccfc6b3856b1d27006c86648f01956c9ca066cbacde2c5336c67f0971d9","sha256:d0b273551e3392f7f9383e8d840820d56a010b28c1cb4b44bf88afbd0a084f6c"]
  - id: r-accion-reaccion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Por qué la fuerza que ejerces sobre una pared y la que la pared ejerce sobre ti no se anulan?
    options:
      - |
        Se anulan porque son iguales y opuestas
      - |
        La reacción es más débil
      - |
        No se anulan: actúan sobre cuerpos distintos
      - |
        Solo existen si hay contacto
    answers: ["sha256:219cec3e1c3f2c56326fc4002d5ab7284d7c459b042d31826025bde99a2e49a6"]
  - id: r-masa-peso
    tier: 1
    type: opcion
    review: true
    prompt: |
      Un astronauta viaja de la Tierra a Marte. ¿Qué ocurre con su masa y su peso?
    options:
      - |
        La masa sigue siendo la misma; el peso cambia
      - |
        Cambian las dos
      - |
        El peso no cambia; la masa sí
      - |
        No cambia ninguna
    answers: ["sha256:60858bffdf9df197be08ca7c8aee111bdf958667a1a9e26dafb2719727c60ac8"]
  - id: r-sin-fuerza
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si sobre un objeto en movimiento la fuerza neta pasa a ser cero, ¿qué hace?
    options:
      - |
        Se detiene poco a poco
      - |
        Sigue en línea recta a la misma velocidad
      - |
        Cae al suelo
      - |
        Acelera
    answers: ["sha256:e6e6ba3839f1acf044a16e1e2766f86604ce661a2288846524fec7f4edfe107e"]
  - id: r-energia-doble-velocidad
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si un coche duplica su velocidad, ¿por cuánto se multiplica su energía cinética?
    answers: ["sha256:8d7cf0cc4c74cf5eea2f773537bda67873043003e4df4f7a4e660e77b9f9e5c8","sha256:2596f30fe59d6dc922636005b41028735acb431cddb59bc7ed3b9ad09d3d0755","sha256:984ccba1a6d847ddc0083d3dbf31100c0a6c16e911fb9d6a6d824526458eb092"]
  - id: r-gravedad-doble-distancia
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si la distancia entre dos masas se duplica, ¿por cuánto se multiplica la fuerza gravitatoria entre ellas?
    answers: ["sha256:9018855a5982688ba1a1b4315fc13df72b586ce3911e126860fec2a2ac3b48b7","sha256:b0af634f5f37c943ce8eb70bd6a1f3fec8f4bf03212664aa946abecc1d0563f2","sha256:de6272018a5b39e2b19d642e1765cca293cd62d1a333157058c36ce52ce993cd"]
  - id: r-trabajo-normal
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto trabajo hace la fuerza normal sobre una caja que se arrastra $10$ m por un suelo horizontal?
    answers: ["sha256:2e97b0c571fc136052fd5fdcdd8ce62e781d22556a223009da6a56b786335686","sha256:c85af26f2a94b58eb38418260f7ff8f792589464b8be3954e4771fade753d0fe","sha256:7c4d5a57f00a048b5753736497e23786b6a92bbe18a73f96c070ed0cb97d4d4d"]
---

# Fuerzas, energía y gravitación: las leyes de Newton

El nodo anterior describía **cómo** se mueven las cosas. Este pregunta **por qué**. En 1687 Newton reunió en tres leyes y una ley de
gravitación lo que explica desde una pelota hasta la órbita de la Luna. Con la **energía** y la **cantidad de movimiento**, que se
conservan, se resuelven problemas que con fuerzas serían muy largos. Es la base de toda la mecánica, de la ingeniería mecánica y de
buena parte de la robótica ([[rob-control]]).

## Objetivos

Al terminar sabrás:

1. Enunciar y aplicar las tres leyes de Newton, y distinguir masa de peso.
2. Resolver problemas con **diagramas de cuerpo libre**: planos inclinados, rozamiento, poleas, muelles, ascensores.
3. Calcular trabajo, energía cinética y potencial, y aplicar la conservación de la energía.
4. Usar la cantidad de movimiento en choques.
5. Aplicar la ley de gravitación a pesos, órbitas y velocidad de escape.
6. Detectar errores conceptuales típicos (la fuerza no «mantiene» el movimiento).

> [!question] Test de entrada
> 1. Si empujas un carrito con más fuerza, ¿qué le pasa a su aceleración? 2. ¿Cuánto pesa en la Tierra una masa de $10$ kg (con $g = 10$ m/s$^2$)?
> 3. Un objeto se mueve con velocidad constante: ¿actúa una fuerza neta sobre él?
>
> Respuestas: aumenta; $100$ N; **no** (fuerza neta cero).

## 1. Para qué sirve

- **Ingeniería**: dimensionar estructuras, frenos, motores, cables, ascensores.
- **Seguridad**: por qué importan el cinturón y el airbag (alargan el tiempo de frenado y reducen la fuerza).
- **Energía y consumo**: cuánto cuesta subir un peso, qué potencia necesita un motor, por qué un coche gasta mucho más a alta velocidad.
- **Espacio**: órbitas de satélites, velocidad de escape, trayectoria de sondas.

## 2. Fuerza y leyes de Newton

> [!practico]
> Una **fuerza** es un empujón o un tirón. Las tres leyes de Newton dicen, en palabras sencillas:
>
> 1. Las cosas siguen como están (quietas o moviéndose en línea recta a velocidad constante) **mientras nada las empuje**.
>    Un disco de hockey sobre hielo casi no se frena porque casi no hay rozamiento. A esa «pereza» a cambiar de movimiento
>    se le llama **inercia**.
> 2. Cuanto más fuerte empujas, más acelera; y cuanto más masa tiene, menos acelera con el mismo empujón (cuesta más
>    arrancar un camión que una bici).
> 3. Si empujas una pared, la pared te empuja a ti igual de fuerte: por eso en patines retrocedes al empujarla.


Una **fuerza** es la interacción que cambia el estado de movimiento de un cuerpo. Es un **vector** y se mide en **newtons**
($1\ \text{N} = 1\ \text{kg}\cdot\text{m/s}^2$): la fuerza que da $1$ m/s$^2$ a una masa de $1$ kg. Cuando actúan varias, lo que importa es la **fuerza
neta** $\vec F_{\text{neta}} = \sum \vec F$ (suma vectorial).

**Primera ley (inercia).** Si la fuerza neta es **cero**, el cuerpo sigue en **reposo** o en **movimiento rectilíneo uniforme**. Un cuerpo no necesita
fuerza para **mantener** su velocidad; la necesita para **cambiarla**. (Aristóteles creía lo contrario, porque en la Tierra el rozamiento
detiene casi todo.)

**Segunda ley.**

$$
\sum \vec F = m\,\vec a .
$$

La aceleración es proporcional a la fuerza neta y **inversamente proporcional a la masa**: la masa es la **resistencia al cambio** de movimiento (inercia). Es una
igualdad vectorial: se aplica en cada eje por separado.

**Tercera ley (acción y reacción).** Si el cuerpo A ejerce una fuerza sobre el B, B ejerce sobre A una fuerza **igual y opuesta**. **Actúan sobre cuerpos distintos**, y por eso
**no se cancelan** (la confusión más típica). Un cohete avanza porque empuja los gases hacia atrás y los gases lo empujan a él hacia delante; un nadador empuja el agua.

### Masa, peso y fuerza normal

La **masa** $m$ (kg) mide la cantidad de materia y la inercia; **no cambia** con el lugar. El **peso** es la fuerza con que la gravedad atrae al cuerpo:
$P = m g$ (N), con $g \approx 9{,}81$ m/s$^2$ en la Tierra y $1{,}62$ en la Luna. Un astronauta de $70$ kg pesa $\approx 687$ N en la Tierra y $113$ N en la Luna, pero su masa sigue siendo $70$ kg.

La **fuerza normal** $N$ es la que una superficie ejerce **perpendicular** a ella. Sobre un suelo horizontal, sin otras fuerzas verticales, $N = mg$, pero **no siempre**:

**Ejemplo (ascensor).** Una persona de $70$ kg ($g = 10$) en un ascensor que sube con $a = 1{,}5$ m/s$^2$: $N - mg = ma$, luego
$N = m(g + a) = 70\cdot 11{,}5 = 805$ N: **se siente más pesada**. Si baja con $a = 2$: $N = 70\cdot 8 = 560$ N, más ligera. En caída libre
$N = 0$: **ingravidez** aparente (los astronautas en órbita están en caída libre, no «sin gravedad»).

## 3. El método del diagrama de cuerpo libre

> [!practico]
> Casi todos los errores en problemas de fuerzas vienen de olvidar una fuerza o de añadir una que no existe. El remedio es
> dibujar el objeto **solo**, como una caja aislada, y poner flechas únicamente para lo que lo toca o tira de él (la Tierra con el
> peso, el suelo, una cuerda, un muelle, el rozamiento). Después se suman las flechas en cada dirección.


1. **Elige el cuerpo** y aíslalo.
2. Dibuja **solo las fuerzas que actúan sobre él** (peso, normal, tensión, rozamiento, fuerzas aplicadas), no las que él ejerce sobre otros.
3. Elige **ejes**: uno en la dirección del movimiento (en un plano inclinado, a lo largo del plano).
4. **Descompón** las fuerzas en componentes y aplica $\sum F = m a$ en cada eje.
5. Resuelve y **comprueba** (signo, unidades, límites razonables).

**Plano inclinado sin rozamiento.** Un bloque en un plano de ángulo $\theta$: el peso $mg$ se descompone en $mg\sin\theta$ (a lo largo, hacia abajo) y $mg\cos\theta$
(perpendicular, compensada por $N$). Entonces $a = g\sin\theta$. La masa **no** aparece. Para $\theta = 90^\circ$ da $g$ (caída libre) y para $0^\circ$, $0$.

### Rozamiento

> [!practico]
> Intenta arrastrar un mueble: al principio cuesta más **arrancarlo** que mantenerlo en movimiento. Es el rozamiento estático
> (antes de deslizar) frente al cinético (ya deslizando). Y cuanto más fuerte aprieta el mueble contra el suelo (más pesado),
> mayor es el rozamiento.


Entre superficies en contacto aparece una fuerza **paralela** a ellas que se opone al deslizamiento. El modelo empírico de Amontons-Coulomb:

- **Estático** (sin deslizar): $f_s \le \mu_s N$ (se ajusta hasta ese máximo).
- **Cinético** (deslizando): $f_k = \mu_k N$, con $\mu_k$ algo menor que $\mu_s$ y **independiente del área de contacto** y de la velocidad (en primera aproximación).

**Plano inclinado con rozamiento:** $a = g(\sin\theta - \mu\cos\theta)$. El bloque empieza a deslizar cuando $\tan\theta > \mu_s$: así se mide $\mu_s$ inclinando
el plano hasta que se mueve. Con $\mu = 0{,}5$ ese **ángulo crítico** es $\arctan 0{,}5 \approx 26{,}6^\circ$. Con $\mu = 0{,}3$ y $30^\circ$: $a = 10(0{,}5 - 0{,}3\cdot 0{,}866) \approx 2{,}4$ m/s$^2$.

**Frenada de un coche.** Si la única fuerza horizontal es el rozamiento máximo, $a = \mu g$ y la distancia de frenado es $\dfrac{v^2}{2\mu g}$: la que vimos en
cinemática, ahora con la causa. Con hielo ($\mu \approx 0{,}1$) es **seis veces** mayor que con asfalto seco ($\mu \approx 0{,}6$–$0{,}8$). El **ABS** evita que la rueda se bloquee,
porque el rozamiento estático (máximo mayor) frena más que el cinético.

### Tensión y poleas: la máquina de Atwood

> [!formal] Con rigor: las dos ecuaciones de Newton
> Dos masas $m_1 < m_2$ cuelgan de una cuerda ligera sobre una polea sin rozamiento. La cuerda ejerce la misma tensión $T$ en ambas. Para $m_2$ (baja): $m_2 g - T = m_2 a$;
> para $m_1$ (sube): $T - m_1 g = m_1 a$. Sumando, $(m_2 - m_1)g = (m_1 + m_2)\,a$:
>
> $$
> a = \frac{(m_2 - m_1)\,g}{m_1 + m_2}, \qquad T = \frac{2\,m_1 m_2\,g}{m_1 + m_2} .
> $$

Comprobación en un caso límite: si $m_1 = m_2$, $a = 0$ y $T = mg$. $\checkmark$

### Muelles: ley de Hooke

Un muelle ejerce una fuerza **proporcional a su deformación** $x$ y opuesta a ella: $F = -k x$, con $k$ (N/m) la **constante del muelle** (válida mientras no se deforme
de forma permanente). Un cuerpo de masa $m$ colgado de un muelle oscila con periodo $T = 2\pi\sqrt{m/k}$ (se justifica con el cálculo, en otro nodo).

## 4. Trabajo y energía

> [!practico]
> La **energía** es la capacidad de hacer cosas: mover, calentar, subir un peso. Un objeto en movimiento la tiene (cinética);
> uno en lo alto, también (potencial: al caer, la convierte en movimiento). El **trabajo** es la energía que una fuerza da o
> quita al empujar a lo largo de un camino. La idea más útil de toda la física: **la energía no se crea ni se destruye, solo se
> transforma** (en movimiento, en altura, en calor…).


El **trabajo** de una fuerza constante $F$ sobre un desplazamiento $d$ es

$$
W = F\,d\cos\theta ,
$$

con $\theta$ el ángulo entre la fuerza y el desplazamiento. Se mide en **julios** ($1\ \text{J} = 1\ \text{N}\cdot\text{m}$). Si $\theta = 90^\circ$ (como la fuerza normal o la
tensión de un péndulo), el trabajo es **cero**. Llevar una mochila horizontalmente a velocidad constante no realiza trabajo (físico) sobre ella.

**Energía cinética:** $E_c = \tfrac12 m v^2$.

**Teorema trabajo-energía.** El trabajo **neto** sobre un cuerpo es igual a la variación de su energía cinética: $W_{\text{neto}} = \Delta E_c$.
> [!formal] Con rigor: demostración del teorema trabajo-energía
> *Demostración (aceleración constante).* De $v^2 = v_0^2 + 2a\Delta x$, multiplicando por $\tfrac{m}{2}$:
> $\tfrac12 m v^2 - \tfrac12 m v_0^2 = m a\,\Delta x = F\,\Delta x$. $\blacksquare$

**Energía potencial:** gravitatoria cerca de la Tierra, $E_p = m g h$ (respecto a un nivel de referencia); elástica de un muelle, $E_p = \tfrac12 k x^2$.

### Conservación de la energía

Si solo actúan fuerzas **conservativas** (peso, muelle), la **energía mecánica** $E_c + E_p$ se conserva. **Ejemplo:** un objeto que cae desde una altura $h$ sin rozamiento:
$mgh = \tfrac12 mv^2$, luego $v = \sqrt{2gh}$, **sin necesidad de tiempo ni de la masa**. Con rozamiento, parte de la energía mecánica se transforma en **calor**; la energía
**total** se conserva siempre, pero la mecánica no. **Ejemplo:** una montaña rusa que parte de $40$ m de altura llega abajo con $\sqrt{2\cdot 9{,}81\cdot 40} \approx 28$ m/s ($100$ km/h) si no hubiera rozamiento.

**Cuándo usar fuerzas y cuándo energía.** Si te piden aceleraciones o tensiones, fuerzas. Si te piden velocidades finales a partir de alturas o deformaciones, energía, que evita
integrar un movimiento complicado.

### Potencia y rendimiento

La **potencia** es el trabajo por unidad de tiempo: $P = \dfrac{W}{t} = F\,v$ (para fuerza paralela a la velocidad). Se mide en **vatios** ($1\ \text{W} = 1\ \text{J/s}$; $1$ CV $\approx 735$ W).
**Ejemplo:** subir a velocidad constante una carga de $500$ kg a $12$ m en $30$ s requiere (con $g = 10$) $P = \frac{500\cdot 10\cdot 12}{30} = 2000$ W de potencia **útil**; si el motor tiene un
**rendimiento** $\eta = 0{,}8$ consume $\frac{2000}{0{,}8} = 2500$ W. La energía eléctrica se factura en **kWh**: $1\ \text{kWh} = 3{,}6\cdot 10^6$ J.

## 5. Cantidad de movimiento y choques

> [!practico]
> Parar un camión lento cuesta tanto como parar una moto rápida: lo que cuenta es la masa **por** la velocidad, la
> **cantidad de movimiento** (también llamada **momento lineal**). Cuando dos coches chocan, la que uno pierde la gana el otro:
> el total se conserva. Y un airbag protege porque, para la misma pérdida de cantidad de movimiento, alarga el tiempo del
> golpe, y así la fuerza es menor.


La **cantidad de movimiento** (o momento lineal) es $\vec p = m\vec v$. La segunda ley se escribe también $\vec F = \dfrac{\Delta \vec p}{\Delta t}$: el **impulso**
$\vec F\,\Delta t$ es el cambio de $\vec p$. Por eso un airbag **alarga** el tiempo de frenado: el mismo $\Delta p$ con mayor $\Delta t$ implica menor fuerza.

**Conservación.** Si sobre un sistema **no actúan fuerzas externas**, su $\vec p$ total se conserva (consecuencia de la tercera ley: las fuerzas internas son iguales y opuestas, y su suma es cero).

**Choque perfectamente inelástico** (se quedan unidos): $m_1 v_1 + m_2 v_2 = (m_1 + m_2)\,v'$. **Ejemplo:** una vagoneta de $2000$ kg a $6$ m/s choca con otra de $1000$ kg parada y quedan
acopladas: $v' = \frac{2000\cdot 6}{3000} = 4$ m/s. Energía antes: $\tfrac12\cdot 2000\cdot 36 = 36\,000$ J; después: $\tfrac12\cdot 3000\cdot 16 = 24\,000$ J. Se **pierden $12\,000$ J** (en deformación y calor):
**la cantidad de movimiento se conserva siempre en un choque; la energía cinética, solo en los elásticos.**

## 6. Gravitación universal

> [!practico]
> La fuerza que hace caer una manzana es la misma que mantiene a la Luna dando vueltas: la Luna también «cae» hacia la Tierra,
> pero va tan deprisa de lado que nunca llega a tocarla. Todas las masas se atraen, y la atracción se debilita mucho con la
> distancia: al doble de distancia, la cuarta parte.


Newton propuso que la fuerza que mantiene la Luna en su órbita es **la misma** que hace caer una manzana. Dos masas $m_1$ y $m_2$ a distancia $r$ (entre centros) se atraen con

$$
F = G\,\frac{m_1 m_2}{r^2}, \qquad G \approx 6{,}674\cdot 10^{-11}\ \text{N}\cdot\text{m}^2/\text{kg}^2 .
$$

En la superficie de un planeta de masa $M$ y radio $R$, $m g = G\frac{M m}{R^2}$, luego $g = \dfrac{GM}{R^2}$: para la Tierra, con $GM = 3{,}986\cdot 10^{14}$ m$^3$/s$^2$ y
$R = 6371$ km, $g \approx 9{,}82$ m/s$^2$. A una distancia $r$ del centro, $g(r) = g_0\,\frac{R^2}{r^2}$: **a una altura igual al radio** ($r = 2R$) **vale la cuarta parte**.

> [!formal] Con rigor: velocidad y periodo de una órbita circular
> **Órbita circular.** La gravedad actúa de fuerza centrípeta: $\frac{m v^2}{r} = \frac{GMm}{r^2}$, luego
>
> $$
> v = \sqrt{\frac{GM}{r}}, \qquad T = 2\pi\sqrt{\frac{r^3}{GM}} .
> $$

La segunda es la **tercera ley de Kepler** ($T^2 \propto r^3$). **Ejemplo (Estación Espacial):** a $400$ km de altura, $r = 6771$ km: $v \approx 7673$ m/s ($\approx 27\,600$ km/h) y
$T \approx 92{,}4$ min, es decir, unas $15{,}6$ vueltas al día. **Satélite geoestacionario:** el que tarda lo que la Tierra en girar ($86\,164$ s) tiene $r \approx 42\,164$ km, es decir, a
$\approx 35\,800$ km de altura, y parece quieto en el cielo.

**Velocidad de escape.** Para alejarse sin volver, la energía total debe ser $\ge 0$: $\tfrac12 m v^2 - \frac{GMm}{R} = 0$, luego $v_{\text{esc}} = \sqrt{\frac{2GM}{R}} = \sqrt{2}\,v_{\text{orb}}$.
Para la Tierra, $\approx 11{,}2$ km/s. (La energía potencial gravitatoria $-\frac{GMm}{r}$ generaliza $mgh$ para alturas grandes.)

## 7. Errores típicos

- «**Una fuerza mantiene el movimiento**»: falso; sin fuerza neta, la velocidad se mantiene.
- Creer que acción y reacción se cancelan: actúan sobre **cuerpos distintos**.
- Confundir **masa** (kg) con **peso** (N).
- Dibujar en el diagrama fuerzas que **el cuerpo ejerce** sobre otros, o la fuerza «de movimiento».
- Suponer $N = mg$ siempre (no en ascensores, planos inclinados o con fuerzas verticales extra).
- Olvidar el **signo** de la aceleración o usar $g$ con el signo equivocado.
- Aplicar la conservación de la energía mecánica con rozamiento sin contar el calor.
- Mezclar unidades (km/h con m/s).

## Repaso: lo que debe quedarte dentro de un mes

1. $\sum \vec F = m\vec a$; sin fuerza neta, velocidad constante; acción y reacción en cuerpos distintos.
2. Método: diagrama de cuerpo libre, ejes, $\sum F = ma$ en cada eje.
3. $W = Fd\cos\theta$; $E_c = \tfrac12 mv^2$; $W_{\text{neto}} = \Delta E_c$; $E_p = mgh$; conservación sin rozamiento.
4. Cantidad de movimiento $p = mv$ se conserva en todo choque; la energía cinética solo en los elásticos.
5. $F = G\frac{m_1m_2}{r^2}$; órbita circular $v = \sqrt{GM/r}$; escape $\sqrt{2GM/R}$.

## Siguiente

[[fis-ondas-calor-fluidos]] extiende la física a ondas, calor y fluidos, y [[fis-mecanica-newtoniana]] retoma todo esto con el
cálculo.
