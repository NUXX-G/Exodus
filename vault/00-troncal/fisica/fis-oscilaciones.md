---
id: fis-oscilaciones
title: "Oscilaciones: movimiento armónico simple, masa-muelle, péndulo, energía del oscilador, amortiguamiento y resonancia"
area: fisica
trunk_level: 3
prerequisites: [fis-trabajo-energia, mat-funciones-trigonometricas, mat-derivadas]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 15: «Oscilaciones» (movimiento armónico simple, energía en el movimiento armónico simple, comparación del movimiento armónico simple y el movimiento circular, péndulos, oscilaciones amortiguadas, oscilaciones forzadas). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/15-introduccion"
  - "D. Halliday, R. Resnick y J. Walker, «Fundamentals of Physics», 11.ª ed., Wiley (2018), capítulo 15 (oscilaciones)."
hints:
  - "Concepto: un sistema oscila cuando una fuerza lo devuelve hacia el equilibrio con más intensidad cuanto más se aparta. Si esa fuerza es proporcional al desplazamiento, el movimiento es armónico simple: una función seno o coseno del tiempo cuyo periodo no depende de la amplitud."
  - "Herramienta: x(t) = A cos(ω t + φ); ω = 2π f = 2π/T. Muelle: ω = √(k/m). Péndulo (ángulos pequeños): ω = √(g/L). v_max = A ω; a_max = A ω²; v(x) = ω √(A² − x²); energía ½ k A². Amortiguado: A(t) = A₀ e^(−b t/(2m))."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 15; Halliday, cap. 15."
exercises:
  - id: periodo-masa-muelle
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una masa de ${{m}}$ kg oscila unida a un muelle de constante ${{k}}$ N/m. ¿Cuál es el periodo, en s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"0{,}25","k":40}
        answers: ["sha256:183f55b5ed972afc10e4b4230d45747869de101170672ccfc935a7ae3ea64ecc","sha256:21a764165b99a71ad3f74178fabe6b238eb282b0e866b8e9ef576e0844c0d261","sha256:79254f612cedc516fd99341a64332f19a2ad05f721e3752162ea7312b6bfa744"]
      - values: {"m":"2","k":900}
        answers: ["sha256:cb0fa248b8f50094342a2b8f91a73f38095cc018fb78256692fa3c0042f919c4","sha256:5c6ecfb19bb20f2d8ed8113ca77ce21340076085822072ff16efc535f2138420","sha256:622f7ed2f88dea9dbedc10603acecf2d0fcb9a7bd8f45d3f35d5933c975902c0"]
      - values: {"m":"0{,}8","k":50}
        answers: ["sha256:a573692f29c546f3ccd6bc313ab0c63f74a765e248321180656626bbf658e043","sha256:fdfbc87032fdd4e8518eef3e1a48c4418e4016ec0a2d4c5fb733bd5074084b70","sha256:5e09a9ab65afaf3d2555dffd5c57af7fe387dcd09d85ab9e8db3324e1d9fef6a"]
      - values: {"m":"5","k":1800}
        answers: ["sha256:580767b8b9040cf8176dad225c557ce38d44f878e7bbd21c1c9fa949f5499949","sha256:56b7bc581be92e8b31a2ff62f61b24e023d86c3590d229e80a1bb607bd5612b2","sha256:45903ea649302c6a48d7defbc894ae626d957bc08bce7dce3819b986e035a7b8"]
      - values: {"m":"0{,}12","k":30}
        answers: ["sha256:f2a14733524c14dd2e4adacc59845135e38245e62bb088499579a286f60164d3","sha256:5bb7b712a72a8fd1c82077cbb941c9eb80eba6811f783a00f8567354e865b1da","sha256:bfbdb995aff8e2be87faa0b543a1078a875ab228130dc536d8e1aaf61eb0484a"]
      - values: {"m":"1{,}5","k":700}
        answers: ["sha256:1bfcf8fc7dab24b774f9183e9beea3538f6db81fa6a85d80e548b6432c7f3267","sha256:36ddb0a71876aef463291317f9ec9381479ef58b769909854e23965ce5c99fa1","sha256:173010d0d236a3ccd70764122d8691aa55cea70b2bf46c352ad2b4d14461002f"]
  - id: frecuencia-por-el-alargamiento
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Al colgar un cuerpo de un muelle, este se alarga ${{dx}}$ cm hasta el equilibrio. Si se aparta un poco y se suelta, ¿con qué frecuencia, en Hz, oscila ($g = 9{,}8$ m/s²)? (Al menos
      cuatro cifras significativas.)
    variants:
      - values: {"dx":"2{,}5"}
        answers: ["sha256:81cf83da93e71db5c2d2442ab8deb786242b8d363e7c6376504352e1bcfdb793","sha256:66a10e81b25be247e81f5659a0280c073498515479d034a76cd24ad0fa2bb97b","sha256:58870a285fc408b665f324b739eaa5a97392a240194083dc5ceb8888bfa5479f"]
      - values: {"dx":"10"}
        answers: ["sha256:e592f9fc48fdfd5412b9ffa71dc01592fd8702b205fee324813893b097a8705c","sha256:a4ae754dfa892060b905a0350d1ccc5a7cde2d8aafdd0391e6edad0baa1b695b","sha256:ddf2853e5f7dbb3a5e850237128dba3ca7455947c9a7a7a699f625d9e6881fde"]
      - values: {"dx":"4"}
        answers: ["sha256:a5b6a2806cdec5d003fedf2b8ca54274fadeaec171e699d144db8d35a1fed1be","sha256:1ff9d5ee9803a4159f21d51b7e7cff3f06811e9d28ff711896003b1c313b8cf0","sha256:fb00b5fde81501e8097d8825105182fc09412402eed39feb5c369451fddefc2d"]
      - values: {"dx":"0{,}8"}
        answers: ["sha256:9e03e011f1283f3121e28dc4116918d5de73c71cf8775832aad38dcd7e67ca5a","sha256:32d2c662f6ac7a05b68e74cfac9aefe906b90e7eefc8377eb1aa2edefd5815c4","sha256:b39de299e204c5636fa63938d02a7af41846ca59854f37e529fa95b6348e953a"]
      - values: {"dx":"15"}
        answers: ["sha256:6807c9bbc175eb11a1449f38355fbd9b6dbda6309a6ac394e8db0fdc85db2f48","sha256:0ab6d03abb296c084d71c4c748791be18b2fddc8123986b0b8c2fa91b628f518","sha256:23449b1cca0862881b5e6476dec5174651172745ecb0328bab00eb81dc205f94"]
      - values: {"dx":"6{,}2"}
        answers: ["sha256:a14f82592e5bc3b671483443893fe5ddc00721a42c7ecc15dbc41f70e573118d","sha256:1667966625e25548c1dbd94ab9082c1a8d8e452407a26c6f0ee9e659cf9e77aa","sha256:0d60926ec6807119c5cf0a8082c1155e867052aedc819b93284eeaf2ad410243"]
  - id: periodo-del-pendulo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el periodo, en s, de un péndulo simple de ${{L}}$ m de longitud que oscila con amplitud pequeña ($g = 9{,}8$ m/s²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L":"0{,}5"}
        answers: ["sha256:0e7260dc0f91ce9012d420b0d1a8f2ef47b8b9005ee7a39cb8ebcbd4e40ebe52","sha256:5fea3de9d0e06cb04804db8efb58627005e1f223ef169d12b3323ff9b07159fe","sha256:dcaadc394b8f94c25749f81f83d053c65ac9f822fedcba44243b3ca1db314536"]
      - values: {"L":"2{,}4"}
        answers: ["sha256:10db698811a4a74ee418136c5c7819083f1eac745efe5e3a6cf24b254cd9e4c9","sha256:1c89b4848e782d989e39c3c1d22df6f5dbdfeabfc290ba2a6404f33247e81621","sha256:379f33575f7bc6e90d3d4d1d7e87da3ae137018020cef806b36a3633f0603ada"]
      - values: {"L":"0{,}25"}
        answers: ["sha256:eb5ce0f58d447ef78662c35ee81c0d9a667c6864fd4e3266a8277f6856a19277","sha256:3d8f56ed2ae68195ff8b8d09edd6148bbffd5c792d1c061e1000dcaaa3ac57b9","sha256:2ef64baeaf76d40ef4867e046e9b6de63aa436c081fd11b2efc2ca26dc7091b9"]
      - values: {"L":"9{,}8"}
        answers: ["sha256:8e704353a606b9dc7d73c9321ca4bf2d2ce445ca66a54ba47e948f2c41404328","sha256:809c1ee195a74f8622b2f8cadb704a77d5996c9bbdbc8547ddc7bf442797f3ec","sha256:d4c72180bf8efdcd0b0aac4bdf53329eb30c963c39d1a667806ae90ce98d139c"]
      - values: {"L":"0{,}8"}
        answers: ["sha256:2bfe7bf7e301809f477439b3ba93df5b333eb5485958103b97e5991ed72274ec","sha256:87755f8d9bac7926ef1cecec8822092628a6e4030b1ab921da1f3256c9e8969e","sha256:54951a535b8947bfacd553b25dd25d525a664ae75bd8555c3d15a8878d22f683"]
      - values: {"L":"3{,}6"}
        answers: ["sha256:47cb833ef31e7a40164c1d3dd46eef09009ac77e3002fb70db5a1e37dcf41d8d","sha256:b65b87da692cb7227554d7092b43ceed261952ea85304b3c8fb629669921dfa8","sha256:2a358b43f5aaf068285ee4f87c2c23b4a696b7f2f1402c73aeb4af67953843ad"]
  - id: longitud-de-un-pendulo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué longitud, en m, debe tener un péndulo simple para que su periodo (oscilaciones pequeñas) sea de ${{T}}$ s ($g = 9{,}8$ m/s²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"T":"1{,}5"}
        answers: ["sha256:f367613d4b8e9b598e7359623a44a9c20a7a96214e316e19b4df75ef2afebec4","sha256:9a53f8abb19eade5a57888584205b4e936c4e1cf02d0e60369dbc570dd9403ea","sha256:08ba79c4852c6de266924bd01030c744001cf322e32e85dd4b9d790401d16cf3"]
      - values: {"T":"0{,}5"}
        answers: ["sha256:c5cf5cd78e32da5105719b78eeabd542d8da2c17c2c96f2543a92298c069e08c","sha256:b49116189fcd9713b44bf27130fe68ef130f903888e988c59f703711b8116737","sha256:922f4e0bffd5a350f345934466cdaaf086ef72b26d99715146d9c50f61fae176"]
      - values: {"T":"3"}
        answers: ["sha256:ee6007a3ce325b5830b242937f3a34f4f763ebb68d7074445f87ccd8e140ff40","sha256:91f582df884636ac8a70b511b934b5c5ec9ee533a165e84ea8bda255743577ef","sha256:ff7325427ae8e39814b859b544f036092f15fab37175368c24b60c8108cfd657"]
      - values: {"T":"2{,}5"}
        answers: ["sha256:c8f80fd6bc41cd9603d45d6bf2fb7ebbbd087dacdacc49cfd066e4152f5d6922","sha256:e6caa172a00f2af32002c781725c40755e3b0fdd60d97a01749c3921fa70f078","sha256:f9587aa8a0d534e678b90cf2b7277e2b89ee10acc3c1c3150339d70676167d4a"]
      - values: {"T":"4"}
        answers: ["sha256:e88d8e74d93e1f5b2b5dd33c33e5bb4cdcf8f5ab0098b4130a2d8c1b2c17365e","sha256:5377da68f308b65f3802a916cde483d1949a33cc4f96b51fa4d5c78e8067a087","sha256:12962ce88c3ab9084f859dc3c6040b414ec25685d58299fac520284a3456a257"]
      - values: {"T":"0{,}8"}
        answers: ["sha256:9b00f193159f3b3fcf2750b96a0fa448acd97606c36d6a08592341f4e65846b0","sha256:f8532d82e1b713a1dd0cb4144707c66a7a005fa1aa01b26affcbbe44b70be1d5","sha256:30b831b9976a780f17eb5448029d7308240d35961fbb32208321daf4066b8fa9"]
  - id: velocidad-maxima-mas
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un cuerpo describe un movimiento armónico simple de amplitud ${{A}}$ cm y frecuencia ${{f}}$ Hz. ¿Cuál es su velocidad máxima, en m/s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":"5","f":"2"}
        answers: ["sha256:f43b587dacbb4ff3014d9a51dce7450669d74433155c5ade14991e0e5a4aa889","sha256:ea443ef526733ad32d342e98ba879d4aa6e2bcc4704bd9d442fb9166cc0c1703","sha256:44eb1a88d1841a89aa59d76bba90fa8fe58d572f53f3d5bd2d965dba75ab6a99"]
      - values: {"A":"12","f":"0{,}5"}
        answers: ["sha256:16daa8d837fe4c729bc2cd578c9ac66a6a0dbb952f507f9c09856240db01dcf9","sha256:807dbdbab9a989523e9c5fab5142b1c120ac2e8db7623e93059c93dd527e9a32","sha256:d6e31093be891b9b5495413dcd7a3bee5e5cef801846f2202f1469f9d0f11819"]
      - values: {"A":"0{,}8","f":"50"}
        answers: ["sha256:d57125ce8885164ddaa17dc3d3ac47ca6288ba4bdca6b896ca69fc7170e175b9","sha256:b8ee837a40da71bd1768147ea0c4d3c9ea49df9f1ea907f5aaa7532c4cf11ce8","sha256:af0f8456f5400fc9fadcca145a75373431970ad083d976c6138c132649a8b5ad"]
      - values: {"A":"3","f":"4"}
        answers: ["sha256:059a8c8fe615ba8371d5c682dc1ebee6a23a073c3772bbd5140bbabb8c6e3305","sha256:b77ad5467340dbac10756b63a57c9d5d7e50921b3ed8dc29f6138cddfbb6f8a2","sha256:f3b1140a776d72e7a40a96d4e9657c0d97d58e8cc98c2f5587cc266219502717"]
      - values: {"A":"20","f":"0{,}35"}
        answers: ["sha256:759c5f1986ea4f67897d9e15f189eefaa6ead621c5e27bd6fefe4e8f462501ba","sha256:c13da7600920a7d116fc3cf24bd044b985d935c71110aeda117ff2426a2c59b8","sha256:8459542301f2a3f986251b4ef4b18b0c2ccac72b70fb8e1fc862a3f20eca42d2"]
      - values: {"A":"1{,}5","f":"10"}
        answers: ["sha256:e7e98e4900bd71ccc11b85f50deff64c6a46e21f072af8a95b616fc9f1359ad3","sha256:ff27d4f0cac8d413c69462e33ccfaa4af39da7ac4dde7d8ec1e1c92d4ad0af34","sha256:8d9f45b8ffc05721260db6e1c427d2487779480161dd5f9d90583e8eac68ffba"]
  - id: aceleracion-maxima-mas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una pieza vibra con un movimiento armónico simple de amplitud ${{A}}$ mm y frecuencia ${{f}}$ Hz. ¿Cuál es su aceleración máxima, en m/s²? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":"2","f":25}
        answers: ["sha256:22522053d32b77099370f78044cbaf2423966df732e1fe024e328ab99092642c","sha256:5a695d8996e11246db1808cc0e105f85f6ae53e1e5d86f9741c70ff2637093e2","sha256:c11fd9c8d893b2bdc0d9a9f88b52fe8420fd33a357973b8491c73ac79bd38d5c"]
      - values: {"A":"0{,}5","f":100}
        answers: ["sha256:3f2c7520b6898962c7b2c19ba4f178648e99e0b2191db0c6ce55e6bf3c5a1034","sha256:fb0f94a046ae57c879d564c0a856f5346408934f196afaea43c68a12407226a8","sha256:12bb61d11022ba6021f07037c08ff15c792e22ff8054ddf610c97bcbb9632a41"]
      - values: {"A":"10","f":5}
        answers: ["sha256:374a62466d8527f926bede25c690df0fb9d9529ac45816068add679b27e52189","sha256:01f96929062e3c8b3330c6d1567fe612212bd0305f91a6eef0b249b80c68dd59","sha256:1d362ec2c64e051853475db41960f5629a9f5586fa83976a522f2c67dda6ae2f"]
      - values: {"A":"4","f":12}
        answers: ["sha256:50f8e8400acdcc329f5a0b719daa52092ff9ffa351c82346f5f0b317372fd2e3","sha256:738be2828fa0ce28398abec65eb725c80c2c6ed2de9335d61854a03768e9e22d","sha256:6ad792c3ddc50ed0a1e2f75050c5a8e9c3a10fba2635c18bce0a317d43857fc1"]
      - values: {"A":"1{,}2","f":60}
        answers: ["sha256:c60643100bd78be5dcd0f2d831228bbdd63a1e12c32e1d0315c1b08b533be784","sha256:93ee95eaa29da8a0601a3e8b1f18ca75afdc6ec7855e57cd9c9ca20e795e806a","sha256:83a9adfd427a9d4a43e8fbe7013488a389f778f61d96e3feb62abfd151aa039d"]
      - values: {"A":"25","f":2}
        answers: ["sha256:b3dcc8c5df5c24e97fe9b1b6110b9cb2d0c36c27a55236c360c96318e6a7b14d","sha256:55fc16450b3ed8b069356bc56b201527c29c4bd6fe174cd87fd5a313d59f5fc2","sha256:4f3b88a2f680df78e3e7e72fdd0401377a0cbd183aa82e910d7b2c426b3eb00d"]
  - id: posicion-en-un-instante
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un oscilador armónico de periodo ${{T}}$ s se suelta desde $x = {{A}}$ cm en reposo en $t = 0$, de modo que $x(t) = A\cos(\omega t)$. ¿Dónde está (en cm, con signo) en $t = {{t}}$ s? (Al menos
      cuatro cifras significativas.)
    variants:
      - values: {"A":8,"T":"2","t":"0{,}25"}
        answers: ["sha256:6b1aff6d79b9132f56dd722dbd2680ef0095d61c879fc03b5b9491f562ec75b6","sha256:13d7d8dda69838f6c80579153f8505ae2cbda6b820036ea31b9ce20bd03a8508","sha256:20c07bc287d5ad7c12d255f0c6735cb73a5cdd3e6ac6be773ab08ff34872bb3b"]
      - values: {"A":5,"T":"1{,}2","t":"0{,}5"}
        answers: ["sha256:5398859b3155ec2edb9f7ce417c20215bd4235925bfad621933210361cae0b58","sha256:fb2234456b367ca9651f01b15b6d492f829a57d1d565a1bf9a63089820ac357d","sha256:5a4abca2d97e86ac7b3e1760f74fd31b22dcc68e26153435293fa22dfe5d0ec1"]
      - values: {"A":10,"T":"4","t":"3{,}5"}
        answers: ["sha256:53be3d4babb643ab85b6c1cf20871ceb87a3b7b475fd82e58d16b236ef2d5d49","sha256:980a816883c17f4946930864f5f87203e05fc691d8c316942163ec49e6a769be","sha256:dc546a3aec4d814cb4b88f6d663ea22b4a5b5fb7ee16736d74eb533447484fa7"]
      - values: {"A":6,"T":"0{,}8","t":"0{,}1"}
        answers: ["sha256:0e3ddd083ce8addb815b1232584a2fcc3c0dfd747c1b6ab1f3b450fd21bcea28","sha256:9f7a165573e76473b83103ef3ee8d82ea8f77eff0e2f8a4ee8927bb65e40e4ba","sha256:c2264edb05047428a219f7893ebcf1812522a92d23ece542aa7243459ed6b2ea"]
      - values: {"A":12,"T":"3","t":"1"}
        answers: ["sha256:0feb3289335b86d13fecc4e404c6b86f2d5dd912b74c0836aa297054cae3bc75","sha256:484743f25f6392377f332b155aee10630651988b85e73293a080c2fa95fe3e41","sha256:f29d182a7f00feb3542260fb9046f786a0a795ade0409bf928b5b3288488dd87"]
      - values: {"A":4,"T":"1","t":"0{,}375"}
        answers: ["sha256:076b248d52f373ac6d3b9b89c42498a138f7a4d0c214a674c10fea66e90ea026","sha256:061f618ba7265d0b80884c220875c92e4516bf2eda903bae6bc0d5ca0cc738e3","sha256:d5b468946d6a011d435a2146071f5d185af664f5e7dcdbc6378840eba984cab6"]
  - id: velocidad-en-una-posicion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una masa de ${{m}}$ kg unida a un muelle de ${{k}}$ N/m oscila sin rozamiento con amplitud ${{A}}$ cm. ¿Qué velocidad, en m/s, lleva al pasar por $x = {{x}}$ cm? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"0{,}5","k":50,"A":10,"x":6}
        answers: ["sha256:4bf8cac4e69587f2425793df133aa62817d0dc85d12854dd69986f42dbd4a4cb","sha256:67f3310ce380bf058e6af0d7f538737ed47b87e5c5286391fbc83c1388e65ac2","sha256:39158e9288ffe42e0d0282bd55dda1a6a2ec17604498b0073c47d6f7bffc6a11"]
      - values: {"m":"2","k":200,"A":8,"x":4}
        answers: ["sha256:f6c9e41a648fc9a2bdaa0f77e593477e800a17fdd892e1fad4c2e8a034a47ab0","sha256:ba23be127358601cb98ac18b6229c505ff3554678f2785454b3b95f77938d543","sha256:9ab96762c7d008e8657d94f2ba5dcc412c663bb40e83027dfa3a8a76f26a6e6a"]
      - values: {"m":"0{,}2","k":80,"A":5,"x":4}
        answers: ["sha256:cbc035d5946d5cbb1d2c630e643efc2330fc3a44e62eaccc3be4dd49f5e48003","sha256:7d8aef7f042b7d46d2eaac888a5ecae8bf10ee2bb905a06cbdca54ddcd7e6053","sha256:772cc7bae2a21ab605c95d23e59b2cace27091ef140758ec70a9ca0add29422c"]
      - values: {"m":"1","k":400,"A":6,"x":2}
        answers: ["sha256:c61c01e1e42e80e3033b25e818d0d3df63ffce604ef18dffcdbb8fe7d0fcb2c5","sha256:5548d7b978047c17452c94e89960099b06169a5f430e18c4469c24ec3ad6177c","sha256:4764a196b134316522e35edade3bc0b0109914ef7c48d3ada8167217ae00836a"]
      - values: {"m":"4","k":100,"A":12,"x":9}
        answers: ["sha256:49e9f859a3454160c27f61c980b9934f7e8523ba32b803fc3d63db3941ea565f","sha256:33254f7621b93e35d0266212454155b4d6144a3eb6f510ddd1b9dbf63a8a0f9e","sha256:dcef26f7c318ca418d2672c063d448221791d4ee380aa04e4dcbda7a00f68e10"]
      - values: {"m":"0{,}8","k":320,"A":4,"x":1}
        answers: ["sha256:4d3a843ebaac3934c5c70e2da8c524242aaf4b44ac68ed9a41020d99561824d1","sha256:fd6b1046a21b1e13923bf27e50815a15d4742021f1cf8fe59fcab47f7c551513","sha256:ea64f580551fbbefee1109fc966d90a90f079df7b8324382e181b0298f368070"]
  - id: pendulo-en-otro-astro
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un péndulo tiene en la Tierra ($g = 9{,}8$ m/s²) un periodo de ${{T0}}$ s. ¿Qué periodo tendría en {{s}}, donde $g = {{gp}}$ m/s²? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"T0":"2","gp":"1{,}62","s":"la Luna"}
        answers: ["sha256:e951082ab5febd43e01f56c016e0904513a770e44c44e7143b905e6c94b61124","sha256:872e07eadaf55e75174b607ff2d9759fca78ab2284204b04d045b677f067eb91","sha256:3433c15956b31be2194a5a1573db03f9bfae8adac9c6528194eef63c086d6143"]
      - values: {"T0":"1{,}5","gp":"3{,}71","s":"Marte"}
        answers: ["sha256:8cc13d27cde3c650ef905796ed329891f7dac9fd56e3b4315548b9c4dd75322f","sha256:f36401c37c16b4c48dcd3601597d5952ea236717cc36747a38aef31181debf97","sha256:65f9b3073ab88a7a84dee1c6cb91b7903636c44c32f3e6bd5ddfbe0b02bb2614"]
      - values: {"T0":"3","gp":"24{,}79","s":"Júpiter"}
        answers: ["sha256:5d49a2f6ff81e318ee2f29938296f8cfd4d1bbe9f938f62c8fa26315aae0bdb7","sha256:35cf3259ef9c313b321ce999a2c1ab53ffe7769f8cb5f6dd3248251568d364d6","sha256:c523ca0d76b7ec368b1bf4821a4c6b94bf40faf6094889c36c567f020a0741f3"]
      - values: {"T0":"1","gp":"8{,}87","s":"Venus"}
        answers: ["sha256:60d9db14c6855f4e619f4ff28553208d15e73af9baa26c830f70f5e52d34dd46","sha256:a250deb0dce523dff32f252dbda8a3c8c45bad5aa226871faafc560744fd9d9a","sha256:c37c74aa1244effe32c6a200dee817c04dfbc60d3655e888174b70f099f0ab0d"]
      - values: {"T0":"2{,}5","gp":"1{,}35","s":"Titán"}
        answers: ["sha256:e93220a8eaa8c32a399360c9bab259bed3fe6af17ddf6846733a1f7fa1b12822","sha256:73081b7064bb82da228cbfae1239170a91ed8558224871ff70cf75f962d25ae6","sha256:12456b7b7fb6bb2cedf12c275bce532ad31b7732bebe18146fe2e3cbafd332fa"]
      - values: {"T0":"0{,}8","gp":"11{,}15","s":"Neptuno"}
        answers: ["sha256:b219c36b324c7f63345b6c86f31abf131a29abac2a1dd7e2e73d397359247dd1","sha256:2a595a92821eaf21b79e35749a5f3aa31f409d492b24e04563f788b5064c5a1a","sha256:d0a5d7abe2d7a552d383e9204163f9e1dc2a5d8553a321046e08325874085770"]
  - id: amortiguamiento
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un oscilador de ${{m}}$ kg sufre un rozamiento viscoso $F = -b\,v$ con $b = {{b}}$ kg/s, de modo que su amplitud decrece como $A(t) = A_0\,e^{-bt/(2m)}$. ¿Cuántos segundos tarda la amplitud en
      reducirse a la mitad? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"2","b":"0{,}5"}
        answers: ["sha256:3718f35553ede90d38017df278d74ecff58011c7cbe484caa04c745e20122262","sha256:2cd960c60559b840ab88bdf868836e9c319cf7bbf718ac97ed28a5c56378e980","sha256:57612e4a595b579f15511ff6bb0880f1229dcc3f71da7f96a9967e92e771ebf2"]
      - values: {"m":"0{,}5","b":"0{,}1"}
        answers: ["sha256:51b0b340874156043822ff87563104468664ccf62692f2bc482c8c7722713902","sha256:ccd2c23fc4036736b819ce805bc3d7d48e86a24819146ba1a3a38e1d553cf3cb","sha256:a056ae7dd578f8055a6ac34b2b9bbeb8ef64fe765a3bb75e359237de98f5b4ed"]
      - values: {"m":"10","b":"4"}
        answers: ["sha256:d7a0faae1c5d3f58b9590e1e4fdbb9d6590c3f4de494ec03e475a05ad7edaf1f","sha256:cd19f55b6082fbcbab765ac0cea5e292914ef08ef7312dd97dcc812bc0ac30e1","sha256:77875c86dd5bfd7f3976d1862d63115bb06061e08d25e9c7dddf6d9c798e384a"]
      - values: {"m":"1","b":"0{,}05"}
        answers: ["sha256:ec1ae5b196b56c7ebfaaf256e30d3340933ed2615dd6c7d5d58b802c2b0cecc2","sha256:02447bf25a405661a98da515423a457f5e6991799d5bf857c07d2fd6f84bff42","sha256:fe978e531258698a377a39495f8383ae335b785f051314f3c402eb8e24c59cca"]
      - values: {"m":"5","b":"1{,}2"}
        answers: ["sha256:85ef06cca9add73b903e200761a51e2f43028d345bda61fd1228fe2a43912417","sha256:107302a4bff7144bbc74ac17cc395f2cc862cb6d93c6db99d6b6e8c0c269fe62","sha256:7acb3238b6911b3cd68c444ac22a8c9bb8d883e516309b42462073e5ad729a15"]
      - values: {"m":"0{,}2","b":"0{,}06"}
        answers: ["sha256:7e10c263d7c59148ad59e644c3e33715b7e93ab7355252d1330da937084680e6","sha256:f8fbe4b13ff2e378c46e04d496142bc6861725d5fdc253d38919774ace672534","sha256:733005123b8be3da3f9774070c0984e6bbe7c8931b028370195c03aa9ec2e0a6"]
  - id: frecuencia-natural
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un vehículo cuya masa suspendida es de ${{m}}$ kg descansa sobre unos muelles de constante total ${{k}}$ N/m. ¿Cuál es la frecuencia natural de oscilación vertical, en Hz? (Al menos
      cuatro cifras significativas.)
    variants:
      - values: {"m":300,"k":30000}
        answers: ["sha256:82cd62f214b17aabef743bf3499fae020f4b394ad935812292ad0dcddd8de416","sha256:6f3dbb4495f0a7cdb80cece8630f62e3e8416a0f71d6217bf413d41b476022e0","sha256:0d9935528485819fc71262d9be3aae18fbf92e4314f1fda99fb049335c8662ff"]
      - values: {"m":1200,"k":90000}
        answers: ["sha256:fcdcd56950d2d8ca0bd73ba9b74ca2dcf771f5678cd68c86e0a4fdd507d203e6","sha256:741743d938715993d57231aea80d58c86c6005ade2ecf4567ad15a165f9318b4","sha256:907379c5a675be90ccbdd106089b855c51f911c1a6e302ca883244ded1619d3c"]
      - values: {"m":80,"k":12000}
        answers: ["sha256:fe45778e2a6421fe4871a65918258ce928cdaf755e50a431f827880858a9e43f","sha256:1704b7394a6d34a41d4e99762d2ad34823a5d274b724f026420e2f9ab791d8d6","sha256:83f7bfb9ebcfbdba66d9336c1984f15aed276952b1a53040d54ef69c5821a6e3"]
      - values: {"m":450,"k":20000}
        answers: ["sha256:901df56c86fe65598fabb62ada73bebb86936ea7a0709e7cf29809fd52905f2f","sha256:75b8763f21a7240bade41a1ad00e94ec80b9fb7e66786265e6978daaab443096","sha256:6c3284e99abfc6a2d6b77fa50a2cf6d08ff4d72f30051126937f266a0604b3c5"]
      - values: {"m":2500,"k":400000}
        answers: ["sha256:3574da573a49b47c7be93edf345f953cddbf80dbcb43ecf5b54b16dd38cc66be","sha256:0a811f6cd11cc7acdf4e3521c567b9c083bbf4267f4a648f6a6c9eb8046e0bb1","sha256:e3a93560e0e393728abd4278c0bde9d92b0acc1088eb9b67a6656cc34b306f0c"]
      - values: {"m":150,"k":9000}
        answers: ["sha256:2e10d3ad55ac6bcc60a647869e7a6559880d0009c669ccc5b364def816feab98","sha256:689d8e248ff1865f37bb15ddb8531f1657e3e5f65251935c8a021834dd628b8c","sha256:d5d4617e533bd9eed16facf6af2027277a8d9e9853b5a375f8cf165f58eda073"]
  - id: movimiento-armonico
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Comprueba que $x(t) = A\cos(\omega t + \varphi)$ cumple $m\,x'' = -k\,x$ si $\omega = \sqrt{k/m}$, y explica por qué el periodo no depende de la amplitud. (b) Deduce el periodo del
      péndulo simple para oscilaciones pequeñas y explica qué significa «pequeñas». (c) Explica qué es la resonancia y pon un ejemplo útil y uno peligroso.
    sealed: "gz64:H4sIAAAAAAACCoWUTU8kNxCG/8qrUUcZSDMQlA9pEAek7I2VkNhbnEiFuxgMtqvxB2IWzR/JjSNaRdrV3nZv038ssueDQKLk1u4qu6r8vK8fRlFsTkb8aDra3R3Tzu4umvtvcYy9E6XE8YyUisaP1wskfAel7ij0V2anaUvyi+zfD5XSEv89vyRu8+6bCc5zTCblOftOWjR77jlacm/uG0SGzq63jGjQbOM4hlKXgTRuXDPBG4ueg5FO0Lzbxh4OlerN4mG9a4Fj1D9KxduQHtz+zaKBF2jxybBnNCfNtKzghseoPLnempS7FmwRWEsIphNwhKO5hLbUFFjCZebwnjDug/QStBFPFmTRcewtvSdn2CfZQSJ3YYYn32IOSxGdRGiJFOuY4nr2kTzGJooO4k10sjNRXvnd3fFFYXMuF4FLRUeR2vJRdolnnxgdl1uIAoItbYWZ1H8UdG262XOzSlOpdMWJmqM6axNxjNPNvxaN2yxWaF9tmuC8glityrk932YePgnG7BGoM+Q57rQl6XkflKK+D3KP50pz3GbuaHvaqt6a62zb0lT57PH25HzV7kZahXLlONs/XZS+373ie7o/WzQTLD+crRqkuPyKaGbeXBpNGB79LFuJ6Bi9aImYBSpExoTm+x+XH5uCnUOQUKbsGNmjOXhoFz8o1Sr1TXMEQvPTwfJj027CP69DW2y6YjPIfiuTotThc1d6IJ2GL1TnqgmBdWavDUFz0OSpsCR4SjlUPVlEExM7aqGpI7Dr8/Xw2cPacifLD4Rk2PWy/Fo1ho2GoQNrhsv6SqYIHMVTKTTB8Ecydlq612Kz640oX4+lrkgpZgSTnFS1ReOT+OFPWs1LFfcq9HwkHM388JSMpgnO2JpZkChT9LnINELAXUFgJBYBQKI2lny9Bba4q2ZBtSUKn55ioVLUnbdCf2sse1MErvyp+C5wBHscHhwc7LS4MxeBig9X4NzweJuNp1W9UI2G3vB7ikfoK18pFqThE3UMchKSmeW1byejdhTyRTB6NP31YaSDSeWtGU1Hv3Awd1RtfMeaI+aQi/VT8g+Z3uy7IlO+763R5MtDYvE3p5cyffZJ4mh6uGhfFDqz5BNXLbDOpE1BXv0+PPkuW8Ec1+Uxrcou2IvVjFtn/o8T/6vym1W7rwivBAu+ZtdbwfAlGVuGT0HQb4i/PPa3xV9brDvvbgYAAA=="
  - id: r-fuerza-recuperadora
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo es la fuerza en un movimiento armónico simple?
    options:
      - |
        Constante
      - |
        Proporcional al desplazamiento y opuesta a él
      - |
        Proporcional a la velocidad
      - |
        Nula en los extremos
    answers: ["sha256:1c2cac7d807307afaac812e635af54ea3525da29fc33b7e2aab02f32dd101c31"]
  - id: r-velocidad-maxima-donde
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Dónde es máxima la velocidad de un oscilador armónico?
    options:
      - |
        En la posición de equilibrio
      - |
        En los extremos
      - |
        A mitad de camino
      - |
        Es constante
    answers: ["sha256:a8c86fee26d2a7541337b163e35fbf84d0dc3707aa5f5857ddb8ea3fa6e2e12a"]
  - id: r-pendulo-masa
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si se duplica la masa de un péndulo simple (misma longitud), ¿qué le pasa a su periodo?
    options:
      - |
        Aumenta
      - |
        Disminuye
      - |
        No cambia
      - |
        Se duplica
    answers: ["sha256:bbc0f58d3329c61bf65985a7ac3e87c1c3d82932b1cfad963e258a33956b0b64"]
  - id: r-pendulo-cuadruple
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se multiplica por $4$ la longitud de un péndulo, ¿por cuánto se multiplica su periodo?
    answers: ["sha256:7bba5c2a383df80bcdf1cbaef3ef3f72ae39abd345302ce2197c9eeb05ff0782","sha256:4e0434455bc5437793cadac5000a85a380a2dce5fef75dcc6ab2228d22f6ae78","sha256:6956afec54f702b9b16f56d5b03a4879807a7ba06ba0ba96c32daed845410310"]
  - id: r-muelle-masa-cuadruple
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si la masa unida a un muelle se multiplica por $4$, ¿por cuánto se multiplica la frecuencia de oscilación?
    answers: ["sha256:1c1ecc53e786bf6b6095340136c64ff71466987032103412143623e913722049","sha256:c4657cbc07baa1874fb389208205e06a932dd4eda497223bcfc556719f2235cb","sha256:4d20a513fec79c79d5b19043ea3f2abf8b14c880df91d742a3d51025c31470fc"]
  - id: r-energia-amplitud
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica la amplitud de un oscilador masa-muelle, ¿por cuánto se multiplica su energía?
    answers: ["sha256:12cd58006980e1c0baa12ff939cd4356b4e5b5c2c8035987fc6dc4e42aa7f1c0","sha256:d0368258823dd1c5a546f453d3e6b1e5ffc9ebb57e5d130072a5bce833ae47fe","sha256:5c0bcc3fbd2f1cbd4614984c95bdcf169434e412e1c6ac69e7b95ea5c6b4e728"]
  - id: r-resonancia
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se produce la resonancia?
    options:
      - |
        Cuando no hay rozamiento
      - |
        Cuando la amplitud es pequeña
      - |
        Cuando la masa es grande
      - |
        Cuando la frecuencia de la fuerza externa coincide con la natural
    answers: ["sha256:f471790ec0009197fc8f5de886e7fcc4dc41272499d3cea320f1c77356642085"]
---

# Oscilaciones: movimiento armónico simple, masa-muelle, péndulo, energía del oscilador, amortiguamiento y resonancia

Un columpio, la cuerda de una guitarra, el péndulo de un reloj, la suspensión de un coche, los átomos de un sólido, el cristal de cuarzo de un reloj
digital: el mundo está lleno de cosas que van y vienen. Casi todas, cuando la oscilación es pequeña, siguen el mismo patrón matemático, el **movimiento
armónico simple** (MAS). Entenderlo es la puerta a las ondas, al sonido, a la electrónica (circuitos oscilantes) y a la física cuántica.

## Objetivos

Al terminar sabrás:

1. Describir un MAS con su amplitud, periodo, frecuencia, frecuencia angular y fase.
2. Calcular posición, velocidad y aceleración de un oscilador, y sus valores máximos.
3. Calcular periodos de sistemas masa-muelle y péndulos.
4. Analizar la energía de un oscilador.
5. Explicar el amortiguamiento, las oscilaciones forzadas y la resonancia.

## Qué debes dominar antes

[[fis-trabajo-energia]] (energía potencial elástica y conservación de la energía), [[mat-funciones-trigonometricas]] (seno y coseno como funciones del tiempo)
y [[mat-derivadas]] (derivar senos y cosenos).

> [!question] Test de entrada
> 1. Energía potencial de un muelle de $k = 400$ N/m estirado $5$ cm.
> 2. Periodo de $f(t) = \cos(4\pi t)$.
> 3. Derivada de $\sin(3t)$.
>
> Respuestas: $0{,}5$ J; $0{,}5$; $3\cos(3t)$.

## 1. Para qué sirve

- **Medida del tiempo**: péndulos, volantes de relojes mecánicos y cristales de cuarzo oscilan con un periodo fijo.
- **Ingeniería**: suspensiones, amortiguadores, aislamiento de vibraciones, edificios antisísmicos.
- **Música y sonido**: cuerdas, membranas y columnas de aire vibran (el tema `fis-ondas-sonido`).
- **Electrónica y física moderna**: circuitos oscilantes, osciladores de radio, vibraciones de moléculas, el oscilador armónico cuántico.

## 2. El movimiento armónico simple

> [!practico]
> Cuelga una masa de un muelle, estírala un poco y suéltala: sube y baja una y otra vez, siempre con el mismo ritmo. Si la estiras el doble, recorre el doble de
> camino, pero tarda **lo mismo** en cada vaivén, porque el muelle tira el doble de fuerte. Si dibujas su posición en el tiempo, sale una curva seno.

Un cuerpo describe un **MAS** si la fuerza que actúa sobre él es proporcional al desplazamiento desde el equilibrio y opuesta a él: $F = -kx$ (ley de Hooke). Entonces
$$
x(t) = A\cos(\omega t + \varphi),
$$
con:

- **Amplitud** $A$: desplazamiento máximo.
- **Periodo** $T$ (tiempo de una oscilación completa) y **frecuencia** $f = \frac1T$ (oscilaciones por segundo, en hercios); **frecuencia angular** $\omega = 2\pi f = \frac{2\pi}{T}$ (rad/s).
- **Fase inicial** $\varphi$, que fija dónde está el cuerpo en $t = 0$ (con $\varphi = 0$, en $x = A$).

Derivando: $v(t) = -A\omega\sin(\omega t + \varphi)$ y $a(t) = -A\omega^2\cos(\omega t + \varphi) = -\omega^2x$. La velocidad es **máxima** en el equilibrio ($v_{\max} = A\omega$) y nula en los extremos; la aceleración, al
revés ($a_{\max} = A\omega^2$ en los extremos).

**Relación con el movimiento circular**: la proyección sobre un diámetro de un punto que gira con MCU de velocidad angular $\omega$ describe un MAS de la misma $\omega$.

## 3. Masa-muelle y péndulo

- **Masa-muelle**: $m\,x'' = -kx$ da $\omega = \sqrt{k/m}$, $T = 2\pi\sqrt{m/k}$. *Ejemplo:* $0{,}5$ kg con $k = 200$ N/m: $T \approx 0{,}314$ s. En vertical, el periodo es el mismo (la gravedad solo desplaza el
  punto de equilibrio, un alargamiento $\Delta x = \frac{mg}{k}$, de modo que $\omega = \sqrt{g/\Delta x}$).
- **Péndulo simple** (masa puntual en un hilo de longitud $L$), para ángulos pequeños: $T = 2\pi\sqrt{L/g}$, independiente de la masa y de la amplitud. *Ejemplo:* $L = 1$ m da $T \approx 2{,}006$ s
  (el «péndulo de segundos»: un segundo por cada media oscilación). Midiendo $T$ y $L$ se mide $g$.

> [!formal] Con rigor: la ecuación del péndulo y la aproximación de ángulos pequeños
> A lo largo del arco $s = L\theta$, la componente del peso es $-mg\sin\theta$: $mL\theta'' = -mg\sin\theta$. No es lineal; para $|\theta|$ pequeño (en radianes) $\sin\theta \approx \theta$ y queda $\theta'' = -\frac gL\theta$, un MAS. Con
> amplitudes grandes el periodo aumenta: $T \approx 2\pi\sqrt{L/g}\left(1 + \frac{\theta_0^2}{16}\right)$, un $0{,}4\,\%$ más a $15°$. Galileo descubrió el isocronismo observando lámparas que oscilaban. $\blacksquare$

## 4. Energía del oscilador

Sin rozamiento, la energía mecánica se conserva y pasa de potencial a cinética y al revés:
$$
E = \tfrac12mv^2 + \tfrac12kx^2 = \tfrac12kA^2 .
$$
De ahí, la velocidad en cualquier posición: $v = \omega\sqrt{A^2 - x^2}$. La energía crece con el **cuadrado** de la amplitud. *Ejemplo:* con $k = 200$ N/m y $A = 0{,}1$ m, $E = 1$ J.

## 5. Amortiguamiento, oscilaciones forzadas y resonancia

> [!practico]
> Un columpio que nadie empuja se va parando: el aire y el rozamiento le roban energía. Pero si alguien lo empuja justo cuando llega atrás, una vez por
> oscilación, cada empujón suma y la amplitud crece mucho aunque los empujones sean suaves. Eso es la resonancia.

- **Amortiguamiento**: con una fuerza de rozamiento viscoso $-bv$, la amplitud decae exponencialmente, $A(t) = A_0e^{-bt/(2m)}$; tarda $\frac{2m\ln2}{b}$ en reducirse a la mitad. Con mucho
  amortiguamiento, el sistema vuelve al equilibrio sin oscilar (amortiguadores de coche, cierres de puertas).
- **Oscilación forzada**: una fuerza periódica externa de frecuencia $f_{\text{ext}}$ obliga al sistema a oscilar con esa frecuencia.
- **Resonancia**: si $f_{\text{ext}}$ se acerca a la **frecuencia natural** $f_0 = \frac{1}{2\pi}\sqrt{k/m}$, la amplitud se hace muy grande (limitada solo por el amortiguamiento). Útil en radios, instrumentos musicales,
  resonancia magnética; peligrosa en puentes, edificios y máquinas (por eso se diseñan con frecuencias naturales alejadas de las de las excitaciones y con amortiguadores).

## 6. Errores típicos

- Confundir frecuencia $f$ (Hz) y frecuencia angular $\omega$ (rad/s): $\omega = 2\pi f$.
- Usar la calculadora en grados con $\cos(\omega t)$ (el argumento está en radianes).
- Pensar que el periodo de un péndulo depende de la masa.
- Creer que la velocidad es máxima en los extremos (es nula).
- Aplicar $T = 2\pi\sqrt{L/g}$ con ángulos grandes.

## 7. Resumen

- MAS: $F = -kx$; $x = A\cos(\omega t + \varphi)$; $T$, $f$, $\omega$; $v_{\max} = A\omega$, $a_{\max} = A\omega^2$.
- Muelle $T = 2\pi\sqrt{m/k}$; péndulo $T = 2\pi\sqrt{L/g}$ (ángulos pequeños).
- Energía $\frac12kA^2$; $v = \omega\sqrt{A^2 - x^2}$.
- Amortiguamiento exponencial; oscilaciones forzadas; resonancia en la frecuencia natural.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué condición debe cumplir la fuerza para que haya un MAS.
2. Los periodos del sistema masa-muelle y del péndulo.
3. Dónde son máximas la velocidad y la aceleración.
4. Cómo depende la energía de la amplitud.
5. Qué es la resonancia.

## Siguiente

el tema `fis-ondas-sonido` (cuando una oscilación se propaga: ondas y sonido).
