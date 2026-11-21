---
id: mat-trigonometria
title: "Trigonometría: ángulos, ondas y triángulos"
area: matematicas
trunk_level: 6
prerequisites: [mat-geometria-basica, mat-algebra-secundaria, mat-funciones-elementales, mat-movimientos-plano]
academic_sources:
  - "Gelfand, I. M.; Saul, M. Trigonometry. Birkhäuser, 2001."
  - "Abramson, J. et al. Precálculo, 2.ª ed. (en español). OpenStax, 2022, cap. 5 (5.1 ángulos, 5.2 círculo unitario, 5.4 triángulos rectángulos), cap. 6 (gráficas e inversas), cap. 7 (7.2 suma y resta, 7.3 ángulo doble, 7.5 ecuaciones) y cap. 8 (8.1 ley de senos, 8.2 ley de cosenos). https://openstax.org/books/prec%C3%A1lculo-2ed/pages/5-introduccion"
  - "Apuntes Marea Verde (LOMLOE). Matemáticas 4.º B ESO, cap. 8 (trigonometría) y Matemáticas I, cap. 4 (trigonometría). https://www.apuntesmareaverde.org.es/grupos/mat/index.html"
  - "Stewart, J.; Redlin, L.; Watson, S. Precalculus: Mathematics for Calculus, 7ª ed. Cengage Learning, 2016."
  - "Euclides. Elementos, libros I y III (triángulos y circunferencia). Edición en línea de D. E. Joyce, Clark University."
hints:
  - "Concepto: seno y coseno son las coordenadas de un punto de la circunferencia unidad; casi todas las identidades salen del teorema de Pitágoras (sen² + cos² = 1) y de la fórmula del coseno de una diferencia. Para triángulos que no son rectángulos, el teorema del seno relaciona lados con ángulos opuestos y el del coseno generaliza a Pitágoras."
  - "Herramienta: comprueba siempre que la calculadora (o Python) esté en el modo correcto: `math.sin` trabaja en **radianes**; usa `math.radians` y `math.degrees` para convertir. Para contar soluciones de una ecuación, dibuja las gráficas de ambos miembros o barre un intervalo buscando cambios de signo."
  - "Documentación oficial: docs.python.org/3/library/math.html (sin, cos, tan, asin, acos, atan2, radians, degrees, hypot); Gelfand y Saul, capítulos sobre el círculo unidad, identidades y resolución de triángulos."
exercises:
  - id: grados-a-radianes
    tier: 1
    prompt: |
      Expresa ${{g}}^\circ$ en radianes como un múltiplo de $\pi$: ${{g}}^\circ = k\pi$. Respuesta: $k$ como fracción irreducible «a/b».
    variants:
      - values: {"g":150}
        answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
      - values: {"g":120}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
      - values: {"g":210}
        answers: ["sha256:ec0d3d4a0dad533e94ac36b0f23cad3c7ac64af4136f99afa9e5889b7e3a1148"]
      - values: {"g":135}
        answers: ["sha256:5132a20379415fe98f3a0700afc2a901e9b01af839b5454a8659152f0782c223"]
      - values: {"g":330}
        answers: ["sha256:140dd1f22e07ee4f29ca402262b82b4064b5acb0f1dc177cbdb43aab3af217e8"]
      - values: {"g":75}
        answers: ["sha256:844f5767a56764778291ffe2dce3664e3c626df6f566633818c065f01b7d0067"]
      - values: {"g":40}
        answers: ["sha256:185b24d9b65771b0c597f1cb146a9aa5f45091ef88b25cfe570676c6a62e52eb"]
  - id: valores-notables
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula ${{e}}$ sin calculadora. Respuesta: un número.
    variants:
      - values: {"e":"\\tan 45^\\circ + \\sin 30^\\circ"}
        answers: ["sha256:acb1308a3038a0d095cf24aeb099b36ab7b754e587b61ba63450e08a7e2542d2","sha256:a8b5fa68204a9dc16035a4c8901d87ab85bb43e832d611c47941db2d69a8a54c","sha256:fb0e3f5450b5dee8988d6ddcd82d166d26807987d2334c0c9ba30a93cc7716d2"]
      - values: {"e":"\\sin 30^\\circ + \\cos 60^\\circ"}
        answers: ["sha256:1b75ed7a69d6753a1e4426158223861732a39da4cba80150c60465ee7f12a23b","sha256:dcacb82f18f1a42d29791aab9ac89317ec2857f47c82f45c069a174375362e04","sha256:4583359a3bc5d0396bb69ef05af12531dce2941a7bf889eb3a77fbc5cc8da807"]
      - values: {"e":"2\\cos 60^\\circ - \\tan 45^\\circ"}
        answers: ["sha256:ee8add3b084bd40a9ca502e534b31fd34a550d5acdbe6ca216483f693a7f16bf","sha256:f66062e7b6b7cc77416d7d9829a0540dc3fd63e320d66aac345efcdb7f4dd2c8","sha256:88bc781cf87b7d9f56f74a870ee3a9f157cf33c5392b27c93d3d8d7ea4463424"]
      - values: {"e":"\\sin^2 60^\\circ"}
        answers: ["sha256:d47da9fc0844f4ddf3aa03325eb31fe328ba9dc197be11b3fee8ec0005031e2b","sha256:ffa36be6ab0d6c6c96266d16ac8508487125c443e3a9c9bcb69acfcb6283009d","sha256:add4d3e2736949fcabd457cdeed044e946b3a83a05ff267089c37c11326d0074"]
      - values: {"e":"4\\sin 30^\\circ \\cos 60^\\circ"}
        answers: ["sha256:ecfc4a950f45dd166449d8455e3f731bb26d5b304dc5f81926045270c31bb6c7","sha256:6ff34e1ced23a85e1934ec55b5c409733091923ef0854a2f1ae6a4693433f085","sha256:627796755422c0303c8afc73db1a422bcdefda66573518e7e7c2e04cf28411ed"]
      - values: {"e":"\\tan^2 60^\\circ - 1"}
        answers: ["sha256:27d37a68b24491399d305f26c5e6d0901d3221cce717d50a796047e36a1fc51b","sha256:8e78b79cdb38a7fd8cea36276613534fdfa373d9da8ed9b777ba3a70a11ca34f","sha256:a723aad55b11e7a7fe79870c600bd7477b2dab3e56884bf98f6c03c862035f2a"]
  - id: hipotenusa-trig
    tier: 1
    type: numero
    sig: 6
    prompt: |
      En un triángulo rectángulo, los catetos miden ${{a}}$ y ${{b}}$. ¿Cuánto mide la hipotenusa?
    variants:
      - values: {"a":5,"b":12}
        answers: ["sha256:1ae16abf58b3eb0d806304c4425b090c6fb971477391cfe7adb2c10b38e2c20a","sha256:4d2c3ff424c88ce7896e35d0f6ffba2f2a72dd006722f4166aa053db48ea5788","sha256:fa10bb3c8d246172287234903d97c2d65b6c515be2fbed96c362b1b6cc27c677"]
      - values: {"a":8,"b":15}
        answers: ["sha256:7d5f0af38965838af948df704a4c23024ffc506d7ba39b906d39a21bc19a4d87","sha256:2999f8772a0d4aafaf1e32051748aa583e0bb8b7efe364751045e88b06db5ad8","sha256:fc36170fb0d1b51b8738ad53e2e8a12188ae115400c39660b65aba6c070951ab"]
      - values: {"a":7,"b":24}
        answers: ["sha256:1e6937b6393b9dcc723effc20d03e01b4cec925bfc02e1b206fafcf0ef5e8e09","sha256:b92abac77d870845ebec9bbbd3243b5443136fa9181cd57f5fd2912aa2a14d3a","sha256:b4f1c401a25e495074e5d6754782f22162bdb6cb13b7540fb1df4a88f8be00f9"]
      - values: {"a":9,"b":40}
        answers: ["sha256:f05008a54b6e242c7445691940cfa5c246645b8ab9787d8b5f519871a7223db9","sha256:eb1739add4e9576f7ef01ee767bf71090bde056ff4349f8c1ca642db22bf90c6","sha256:6e903466dc95eb4ee6999ecdeb18f91c235d68e5eae9140698b523d0d777f6b8"]
      - values: {"a":20,"b":21}
        answers: ["sha256:715f382d66a89666fd2f95a38dfedbf2c26f8a18e07dcfc2d9c313dde8261ba2","sha256:5ea8504552d8de3b0ddf43ddf2832aacf9829342833e1c0e6b3bddc59eb1dbf8","sha256:01ae93bd9d30cc9a6ba465363f0c4e4f003be723473c6f239bf9172f59d59fc2"]
      - values: {"a":11,"b":60}
        answers: ["sha256:5f3fe8f100acf51980b732edfb319db773b7706db88693fdef5718b3de361694","sha256:8f016ce41c990cad30393131ea9283e37fbeea16a4d3b7e9e01f7b56018365e0","sha256:e064e3c7f2d40e217481f63a39e863b976a2bcd4918c6fb625ff7c76b327e2a7"]
  - id: altura-edificio
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Desde un punto a ${{d}}$ m de la base de un edificio, el ángulo de elevación de su parte más alta es de ${{g}}^\circ$. ¿Qué altura
      tiene el edificio, en metros? Respuesta: **un decimal**.
    variants:
      - values: {"d":50,"g":37}
        answers: ["sha256:edc37f71c9f33132a7222b0a28e1419788b9f6a34dabe47bded4a2fb683acd77","sha256:db5c34383a8ac91a9a3b3f9d767dc3aad376e1d8a79ad2aae30369214cadccd9","sha256:aba1c0162b222e68ec2f710494f1a3bcb14cd2abcd786781c4d5f0d80aa53ece"]
      - values: {"d":30,"g":52}
        answers: ["sha256:a98b1d87d903cf5ec135e90bd37b2799f27328c3283075cf86a5e87530283dfd","sha256:869d51d1efe389bae76e518645f9fa1816860d7820d3ea45c1cc4dd4bebd37e3","sha256:4559052da7a5d9dc438ffc066c283b106bea0ae09e7696ada9e911ac2b261295"]
      - values: {"d":80,"g":25}
        answers: ["sha256:1f658fba85ab9642eb651e74fb9cea302fc9f691f5ba16aa7288564a82e8f3e1","sha256:e8ae62df0da75cc96af58f6a4de7c34b65bd9140d1147e337d4cd46fcf58e603","sha256:43613c14ec42b68feb67625ceb11664fb2895981892721e31af0f6be44ffa13a"]
      - values: {"d":45,"g":60}
        answers: ["sha256:767a2ce5baf7f3b5cd4f5213f2be537ae8a9094b0267dae8270d73eb2316128e","sha256:af26ba3f5cde04d5996f232439c771e8ed86be614ce6ea933cc33d20fd76f7bb","sha256:2c3a16bb942bcc565d858484a844686bbd981ecd6cb078e56da69ac8c3dc0709"]
      - values: {"d":120,"g":18}
        answers: ["sha256:e12f55b54816969e212098e7f9ea74e9cd001cd4b2228ca72f0605bab51b2461","sha256:75079249b0e5e5a22b259de07fd91ad7e26a8e0bfe4f5c5626e3812db60a8940","sha256:d7f1b99fd762dce49e739e9da57e60f2ae5d6047447413aeb01d813a26d945cc"]
      - values: {"d":65,"g":41}
        answers: ["sha256:b572246829000a5da86772f9a4980469580328e10a21d5e315b0f25e744a1030","sha256:db44fc8fec179d2b59da530ffc69531dc842407edc3825782194889c82b8193e","sha256:b14eb9b9613171ea5f4fc533d06d82aab4550442a7d8b162415453725c82dddd"]
  - id: ley-del-seno
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En un triángulo $ABC$, el ángulo $A = {{A}}^\circ$, el ángulo $B = {{B}}^\circ$ y el lado $a = {{a}}$ (opuesto a $A$). ¿Cuánto mide el
      lado $b$ (opuesto a $B$)? Respuesta: **dos decimales**.
    variants:
      - values: {"A":40,"B":60,"a":10}
        answers: ["sha256:14e07c26aebda09d20ac154be3d3d7dca20bbd0ce0d82cffb4f14409c38ac8c4","sha256:e1169b4b45239eeafd128f8509fabf577fc4567dc2117562cb33006f67a18aef","sha256:35f18f0ecfd13f71a191df20b751c4864315cca67f2600b523d64181dc0096e1"]
      - values: {"A":35,"B":80,"a":12}
        answers: ["sha256:f475662ddc336a53be8803a17fbfe0db06ac5e9a76d77d2df9924160b2402a2e","sha256:bfa974fff9316ce7e9206a42060e93fb74b3c82fb93cdc3b284736007919efa2","sha256:46c57cf55380614149af68d1554dc4bff844e5b326c6a61ee33ff2540fbf04dd"]
      - values: {"A":50,"B":65,"a":7}
        answers: ["sha256:b09ae02665325e3a50d6bab5bdf876f0d13fdd3222b7353fd19182a7437f19f1","sha256:1abe2de61c209b3c7614401ccb1261678e994f64dea4729178c0ebdc0347c092","sha256:ab9c81125027e5524081b53d77d149a0bc9f3a7a34931583c2d3a2021a93df23"]
      - values: {"A":25,"B":110,"a":9}
        answers: ["sha256:89b274d0cc7b44a8020080e75e619b92201925a65ca4ca6a26db393ca190351d","sha256:aac5ffdad1f975f655ad6cfbc856581b5f7db89661e8899ede0a14ca49da6e83","sha256:f3ac3634644641f2a9e702ec25bd13b2a7b178da5c1e5293948672fc86071f7a"]
      - values: {"A":70,"B":45,"a":15}
        answers: ["sha256:c55ade146c505408e9bcce193fa28bb58dc45a489e7911f7863256bf30125711","sha256:2e2edbddef3a4a007fb0e1b6047e6656bc7ef595a270cab5d4262ff901d9475e","sha256:b927299922cbed1cc0869e1e3e9c9adc06e5afedb4f0ded3496a32c4df4a8193"]
      - values: {"A":30,"B":100,"a":8}
        answers: ["sha256:925ab87e70ee007e42f04960f19e6e66ae10f2896831124d45451d81a704cb96","sha256:c6f24fd1c0c53351eb24a44320335a8d7c5d82c64ab32ceb59f739e30602a241","sha256:af6e8df0acd22a6b03cd2aadb98a3c9b4d70d09067d2ee7a4edc9fb17563f993"]
  - id: ley-del-coseno
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos lados de un triángulo miden ${{a}}$ y ${{b}}$ y forman un ángulo de ${{g}}^\circ$. ¿Cuánto vale el **cuadrado** del tercer lado?
    variants:
      - values: {"a":7,"b":8,"g":60}
        answers: ["sha256:707f6305429d2c52f72825c4963524f83adc1f894b759964619d3c73fd53fa6c","sha256:08cb576ec7e2cef87d2d3273fe27e57c3c08dd6cea14b2fae13e84a68080ffd3","sha256:17103ff9f700dc20cb1f81a0c6727cf683a118710f0aa464541c85164be335b4"]
      - values: {"a":5,"b":3,"g":120}
        answers: ["sha256:c3028404ba169d9b7bbaad0a28f77dd02f1d234dd44338278221e392a0c02c30","sha256:a387bf7f787f1becb8981657978f1f8e723df5e3243f4df7299145e6e94e54c1","sha256:80635795cc2400c0c66cba6203824f5af63cc95bc7d177dadc0ea9780e916d76"]
      - values: {"a":6,"b":10,"g":60}
        answers: ["sha256:5bada6ea164cd996afd1f7c2d73bcf525729d92a9462d6bdecdf60732d52cc62","sha256:3c4132e2047cb47e32e41ee02508a18cd5cec757ddcebc0dd15bff06d9618445","sha256:b873185d85a3e98d351ac7a01db0ff14d410a8b5adc682b5e5e17a138556e4d4"]
      - values: {"a":4,"b":7,"g":120}
        answers: ["sha256:12ad43e97c77272c1002b56a345d7caa0a6f1b134c52d18b171d0f2a3f3b90d5","sha256:2d81f3999fa1ec74b3256c62fb3d15dbe904606dfacfafccd498391f5fa4c21c","sha256:8e2faae27cede4d48f53effbe35dc6cbcf54c9bb3cf458b08f9c2dcf946552b0"]
      - values: {"a":9,"b":5,"g":60}
        answers: ["sha256:4159711b16f875e25597e165181f275f59f9e24d440131e474566f310b53fb8f","sha256:6cdf8396c70d0703a9b5311d6f6d512a7c7720c23dc4c9965b6ca1958c869d79","sha256:bde5438b2285afecd0bb89fe05a9c93776437431814cede0bbe328f21deaac1d"]
      - values: {"a":3,"b":8,"g":120}
        answers: ["sha256:a715a27a3b0c442b54c36c57fedf3681c55dc7ec761148bd15e6bf2caca8879d","sha256:63571c7fe65e866f3d50d2dd4deeb67d6ae6b2314a8c536af741b5cd5b3dddc9","sha256:7f70b2c1052839d71149223f71e6b1543673acc6a0e403114f2bbfec318ad107"]
  - id: area-con-seno
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un triángulo tiene dos lados de ${{a}}$ y ${{b}}$ que forman un ángulo de ${{g}}^\circ$. ¿Cuál es su área?
    variants:
      - values: {"a":10,"b":13,"g":30}
        answers: ["sha256:3cb61da3fc432f33a03913e14f1268b7bf977809db717046f71a2c710d0368c9","sha256:17bc4baa52d6d6cb043dbdca28192c4ab1bbdfc58bc40ee1fbf317946d472015","sha256:8070a11bb97cc20c7c683a375fd00a36bbe57de64c68b74f5497ef686c869fcc"]
      - values: {"a":8,"b":9,"g":150}
        answers: ["sha256:0f4ea1d1331ea3276ed64afda6731e19adaa4dbc7e6fd849d7709b17d2ded1e2","sha256:ffe2d070fbd219b68cf7538c88a9a4e7d8dcce74f8fb6d57b1411175df2f15dd","sha256:1a14c7dfbf0b9eb5c9c8201524868602bd50ec513db495c7b75b5f75f9707453"]
      - values: {"a":6,"b":14,"g":30}
        answers: ["sha256:12d59fb021a4ae85cec6e60fcf6baa0347de5f053c23ff202d6a5e81012286a5","sha256:d816e8c7a37f0d3276e5c2dd5e35da85a7a6be4cf9215a42f6ff9fc53da91297","sha256:08a7451f40cd4ea9003def5bd34078da1bf8fdaf1024b82727abc7db4b120efb"]
      - values: {"a":5,"b":7,"g":90}
        answers: ["sha256:36d9184ddbc3a42809c83adee7d171c33fd56f1187c336a2cba2fe6a247b18a8","sha256:eb409ffd1b05350ac11733b90b02e9afe2c2337f57cef70d2f88eaaf381ac2bf","sha256:acc47a0d2a3ad6403db6c3825b067a36583a9e9d0e69e79cf9ea98276b9fd6fb"]
      - values: {"a":12,"b":15,"g":150}
        answers: ["sha256:a4315781cc87981234987461ad4c61fea68fda157d56af2c0607f3bd6c590c20","sha256:0147b276ef30b45a8617468ce5ba04f7bcca76dc33b6c5b57125d22839722560","sha256:bc6b38654d779abbcf359446a6e1b1b2927703191e4a14ce5d1f09f24c464bd1"]
      - values: {"a":20,"b":3,"g":30}
        answers: ["sha256:4f682df4a3523cf8d0964161c07a6e620331d6a0c4334ceb286e1ee2f9ad49aa","sha256:cf0ae5f5d2269bdcca6e9c462dd1e5953a075d84e02de401c8947b381c6d35c5","sha256:332d33f19fd61294944b7c85035db276615c147382749b31c098690bea6f5f8e"]
  - id: ecuacion-seno
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Resuelve $\sin x = {{k}}$ para $0^\circ \le x < 360^\circ$. ¿Cuánto suman todas las soluciones, en grados?
    variants:
      - values: {"k":"\\tfrac12"}
        answers: ["sha256:47271e814f57fa3e2209320a36110b8cd2c7f8e564ca2976da94f2c24b9c0caa","sha256:222be3a4d110bbf374564131180ea474e03abaa57cdc3be08fe887d1f1d65ec8","sha256:e9f518178a850c8515ba94f5344e6bae87380ff9916cae1e1e6ac6a23320219d"]
      - values: {"k":"\\tfrac{\\sqrt3}{2}"}
        answers: ["sha256:ceb2adade4554f2227f30af913dc93ecd347f449c895cdaf6a40a09fbf47a90d","sha256:1eb738c6b1dfd87df7d84232339a1fafc6028a4affd035de637bb34deaa77cb3","sha256:e431e27302d9959910faa128476865aadd09ebd0a72468b25e2fecc12018a5bf"]
      - values: {"k":"-\\tfrac12"}
        answers: ["sha256:84d1b7a4e02a3b47375062ef008dd08257e0d351d8a22632a7b75ef8a233a129","sha256:1594797e39deae48d64446559e4cb01be19a4a5d59284fde3ebc55432a2cca38","sha256:3ee6096ecee7176e1ef2e8172c4cfef3c715df15ddb1553b3395b927a8a2e467"]
      - values: {"k":"-\\tfrac{\\sqrt2}{2}"}
        answers: ["sha256:f8b05beba473dbce92f3a1177a3391ef4c22f70f64788eca3ec5fa157dfe3859","sha256:5e3cc10c90f686b17b995be63d87ea046fbf0b543e262ca7ac0b496cd0d42043","sha256:c9c2b749c0966190558a8c0b4378a3bb0b15fb68208b6c5e018330abb1ce2045"]
      - values: {"k":"1"}
        answers: ["sha256:a6158e7d0de52f9e608a30f18f2f18f834a87c7561c661020f6f8ad810ddf4db","sha256:13e2db3b93aaab0877dcc52ed31491187df7cf85d2935e443aa6db9c35ba922a","sha256:e59f85c64b6492471953b05828e9e9ba285244ef9fb2ec2a6362eb157597d7a2"]
      - values: {"k":"0"}
        answers: ["sha256:56047ae8f9b569bb9245439f336c66ecc7c1dfad8aa6150aa9299add50e15b23","sha256:b62854cd13312d8b3a5e1e8f7c0b56a2a28e644f959ad43cf274d737101a5b4e","sha256:01cfc4ca8601fccd4f1890dd81a7f5974fb52e862d1b1875507701f4c9900607"]
  - id: ecuacion-coseno
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Resuelve $\cos x = {{k}}$ para $0^\circ \le x \le 360^\circ$. ¿Cuál es la **mayor** solución, en grados?
    variants:
      - values: {"k":"-\\tfrac{\\sqrt3}{2}"}
        answers: ["sha256:5cf5d08659cf27f850031526f710b9942737c97a2452cb51ea9cd26d4ec3d340","sha256:7b3def658bceab223451902d82d4babf4cc2021e9d2abe0cc65273a24953caed","sha256:b9ce1b152c9160619c9d2b32f000b82f4b47910393bd6daa426531afbe2fe85c"]
      - values: {"k":"\\tfrac12"}
        answers: ["sha256:32db1b2c609929c9fc6495d622213993e5d58e05af3dcbf781ee029000ac574c","sha256:e46e29b2d72951d94a7f0e559498982c7be7a1dd2fd59de6c570dc1528119639","sha256:50b31ba6839b527454c7699b4a847e01cfa09ec36293399cfe1b4f46e08e4a94"]
      - values: {"k":"1"}
        answers: ["sha256:89640c7dfc8bd5f77cbd0a4e397e15abebd4b1faeb350e7a57a0c0eb4490b846","sha256:8753e425835c41262290e276db4585b2357ac62c4a40a6592f09ccd21a92493e","sha256:68efeaea2635a25711527f754b24bc4dee60bbc5b3cfeb51d27e3f0faf73dd8f"]
      - values: {"k":"-\\tfrac12"}
        answers: ["sha256:8b0d9b57146f0ed3429b5e362cc6b0802a61135a02aab1114237ed6823f5706f","sha256:1b4d9f2408ddfa45ab264879948b4279fa6faf79db6cfceb62151a8705e2cb08","sha256:e0454146a28192e4bd8c3dfdaffb3c5a45cbd6a4501819433a6b5618c2063f5d"]
      - values: {"k":"\\tfrac{\\sqrt2}{2}"}
        answers: ["sha256:42dc4d71885a1f1ca4383ed4e0cb2e746c62077845e54e4aff9f5f99d0c00d53","sha256:d418629fac85d8fac170a9da740591df7aa4bfd075734401d34842d5c3188a1b","sha256:944c1bb1cf276912bd55c78891a08e595fac3236a2f10b2721d9ea2a9f12ecda"]
      - values: {"k":"0"}
        answers: ["sha256:04c5bb60deb2dbec11b9e6e7f9a45008208b0dcf5219a747638c01dd388f55e5","sha256:862b0b929f04cda5ae1cadbfcbc348874894ff02dbd40c5cf44137f0c76ef708","sha256:678159c440bfcbbceabcec16e8e68178f5f5481020fd86993812cd1826679547"]
  - id: frecuencia-de-red
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una señal es $v(t) = {{A}}\sin({{w}}\pi\,t)$, con $t$ en segundos. ¿Cuál es su frecuencia, en Hz?
    variants:
      - values: {"A":325,"w":100}
        answers: ["sha256:36735684e239c375e6c0ad32b97804da828bc48241085d8e5e74f3bd8a9cbfe0","sha256:abbc55ec4660e02416cb353452719f09cc272fd1de93bed9ff308c3580b99407","sha256:f63bbb75d6175b8026d3bbc2aea849ec545a1b048c6824e2c89f07b2c11c7b96"]
      - values: {"A":311,"w":120}
        answers: ["sha256:9699a853151b24fb2348e008c034ed0bf6714845f556cdf5a9fb117acc38c3a5","sha256:a779f4f87e86776766cc37408ea4d3071fa9343c9223843d05dee21b8d37ac5b","sha256:a061029b685d113b8c491e1c3c6f25eb6d56596d45f941e71cd0553521cb6113"]
      - values: {"A":5,"w":880}
        answers: ["sha256:d5f76e061e873596244ee8716010d0f5f93554ef3ee18e975d9f1e62f0e3d486","sha256:76e6fd08a4d192c9cba19ffc8e49763e1ef6faa65e783ff59044d0a186721978","sha256:242779ef00d012a2e3d1b8c06c876b3b6abe209cc19a77bf4ab12ebc57e29f45"]
      - values: {"A":12,"w":20}
        answers: ["sha256:90d6850c16038fe8157775e699fcb508090d8977277e314106a78ddfc5b9a6c6","sha256:1bfdea3704792d915f9c39ea82317b7f8785337241122a11cbe0d6c9230757d5","sha256:61f636d7dd1cc7b64b4cfcafc01ac8bd2ee6067ad286f4b1b40a59893c3df48a"]
      - values: {"A":2,"w":200}
        answers: ["sha256:8c68c5daec1b0dd5be0a5793d6d230c649babbcb67949c986b8dda97f615912c","sha256:961973785430f229c665aac3c2b0ee18eb94f7a8490924fd41bfa30d35dd58f0","sha256:9f39bc891c2cd7936c164eaba62c0f5d7507db8b50acd3e8ce28f26ed142fd5b"]
      - values: {"A":170,"w":1000}
        answers: ["sha256:e6df3537401a926ea29f10b82186cec461eac8076d1614ece749a928107fe416","sha256:2edb817bafcfa9802edcdd579f72265c48a4360de9342cf683dd3032502721c2","sha256:b24623c4a7bed9845151f7da7673994fc6ed1d3edf65663904f9eb9c24c806f2"]
  - id: seno-de-una-suma
    tier: 3
    prompt: |
      Si $\sin a = {{sa}}$ y $\cos b = {{cb}}$, con $a$ y $b$ en el primer cuadrante, calcula $\sin(a + b)$. Respuesta: fracción
      irreducible «a/b».
    variants:
      - values: {"sa":"\\tfrac{3}{5}","cb":"\\tfrac{5}{13}"}
        answers: ["sha256:38dcd8d377759bf13f44c909fc415afcfd16a7aa2cdb859206225f1df2572a53"]
      - values: {"sa":"\\tfrac{8}{17}","cb":"\\tfrac{3}{5}"}
        answers: ["sha256:2089217a9cbd16ebeaafc5cfc0b7c49c9218568accadebca401ab3fe4ea05cdc"]
      - values: {"sa":"\\tfrac{5}{13}","cb":"\\tfrac{4}{5}"}
        answers: ["sha256:3584f9d34ca4e368f489c61e10f19db45ecee6ece195d4cb27829f7bfff231cd"]
      - values: {"sa":"\\tfrac{7}{25}","cb":"\\tfrac{12}{13}"}
        answers: ["sha256:857b4742355a0804a3cf3300ad1907e6a556feeec950b0c1f5afbf65f5ff8d25"]
      - values: {"sa":"\\tfrac{12}{13}","cb":"\\tfrac{8}{17}"}
        answers: ["sha256:658a83223b8c23586925c74333a0691c1f08f89cb1a1405bbb6c8ea890b48aaa"]
      - values: {"sa":"\\tfrac{3}{5}","cb":"\\tfrac{7}{25}"}
        answers: ["sha256:5ecfd502d16ad5e59159e5b8a9155124919296bc92e9e9679c8dab4a0f3a8358"]
  - id: coseno-del-doble
    tier: 3
    prompt: |
      Si $\sin a = {{s}}$, calcula $\cos 2a$. Respuesta: fracción irreducible «a/b».
    variants:
      - values: {"s":"\\tfrac{3}{5}"}
        answers: ["sha256:16072344496c43f79e0280daa6b2bdeb2e76f7ce209551db03ca1a655eac714e"]
      - values: {"s":"\\tfrac{5}{13}"}
        answers: ["sha256:d8f7611788a2fdceeb63caad37b8f09116499979f683c632d7bc359097ab89c4"]
      - values: {"s":"\\tfrac{8}{17}"}
        answers: ["sha256:b40b567b8ceb6d7b95da0073dc26ac78838b64d7b5b74a34e205981cf0d67b2c"]
      - values: {"s":"\\tfrac{7}{25}"}
        answers: ["sha256:1ad93c14c86336e590dad8f2e6f7e95c3f818189c5312e0b7f8b704a02a7f8e6"]
      - values: {"s":"\\tfrac{12}{13}"}
        answers: ["sha256:3d782220eeae7872ff5e33c19ee4b0b38a7695058bf04fa7569d568667e8444a"]
      - values: {"s":"\\tfrac{1}{3}"}
        answers: ["sha256:a5d116fd4fec2d71c792aef02582a757260da97281ccd1f6043bd0aab41cc932"]
  - id: angulo-mayor
    tier: 3
    type: numero
    sig: 3
    prompt: |
      Un triángulo tiene lados de ${{a}}$, ${{b}}$ y ${{c}}$. ¿Cuánto mide su ángulo **mayor**, en grados? Respuesta: **un decimal**.
    variants:
      - values: {"a":7,"b":9,"c":12}
        answers: ["sha256:7ed3fe1da802305d3e8b321b5be79913b692f7b7b9c51bb935c556d59cb0d222","sha256:d6f296e42e6362442e0b028f0e4a06574fa16ef1fec5dfaccff5dc7b25d26f3f","sha256:4759051d98c24ac7d2b1b177a57124e1cf19fc703aec665091df5ae5cbd97a20"]
      - values: {"a":5,"b":6,"c":10}
        answers: ["sha256:94bb212acc4e3881ffa098d74b7f81c232edfe9222081afeee8a81d0e9ab7a54","sha256:3cd0016a25e63c50595c233f117a4c29398faeb74182e7f62d23a4d74b6c491c","sha256:6faece352b3f5cfbcab7e045cabd4c0dfa5dab4a4626088047d7bf22dc678ce7"]
      - values: {"a":8,"b":10,"c":13}
        answers: ["sha256:930574a43a4738418b4e24baa34ba846a099f9a28a7894cc0e6e6acf9dfc7710","sha256:8526c6a02f3e74b458f2152545e54ab8d7831483ea932e02f58d0be37d1a2bf8","sha256:7f82a0f951c909d8a1e5502f5a1910a253a9f889a007ca04ef9b86800c0ef78b"]
      - values: {"a":4,"b":5,"c":7}
        answers: ["sha256:331218ffe1c0ba2d3cbee37e76a694a0379a88434a3725f58fc25ee96ab3b8f9","sha256:64992a2e956e699e50cdb3ac90ca0c01c0643c6cb57cc1889b7e6c1a8986ee46","sha256:6eb2f36b4e50590cd66bfaba80b194837109aed8ec3c397955cce5629a256cf4"]
      - values: {"a":9,"b":11,"c":18}
        answers: ["sha256:7dbb40a9d0146df16038f3c61d119ff3a4e16dd013c55817da4e6709d0c35c4f","sha256:9c39d3684ccb8b6bfd84f91193780538c7b34a2ad7c77399ee97d94672ec6444","sha256:b34db367c595fa0458cbba370047688e590e89279a6c9ba6f2d3b73829ff8d61"]
      - values: {"a":6,"b":7,"c":8}
        answers: ["sha256:0686930a4fd942e732ca49fafceb8487bec32805fca4881a16869cfd19f6df13","sha256:294f084f0de278a9a5ab4e4f7836d81e18510f96a9cfc765471ddd1ba1d4e351","sha256:746fa99fe6b8285dab52e3fe0a700cbf7e505fd7d3308f66792c3a949e06d63d"]
  - id: caso-ambiguo
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un triángulo tiene un lado $a = {{a}}$, otro lado $b = {{b}}$ y el ángulo $A = {{A}}^\circ$ opuesto a $a$. ¿Cuántos triángulos distintos
      cumplen estos datos? Respuesta: $0$, $1$ o $2$.
    variants:
      - values: {"a":7,"b":10,"A":30}
        answers: ["sha256:da29b11101d2002c2d3d9802c0bf95fe8e75d2990c447b809faec5b6de0e68cb","sha256:740c31a230570a100960f9b32a84e6cfcf353e36a963ff81d9a76054a8764988","sha256:96392429c024aa8653dd4f310e5b8c587c5129b9e80a2162e1d1a0b66f51433d"]
      - values: {"a":4,"b":10,"A":30}
        answers: ["sha256:9df8e839b9c9786fb120023579bc680ea3ca679a56f141dcb50cf0fa01fd6fb8","sha256:5b1d06f139f903702ea723ec416a214fc96a69b08ff7549a43cb362c9607adb9","sha256:e7fff99bf9d0689107373f56f34283268abb7748b3583f7ecfa5b722a6252f15"]
      - values: {"a":5,"b":10,"A":30}
        answers: ["sha256:78a4b81d6aa33902cdf2bd48c98c22b2696f0905c7880490a981973b0f4d94f1","sha256:0d6c01e11abcfa1105df3be0dcf2aeff1987c84ade4915e61e7ad6f1c8d66ecf","sha256:3328d56478f388598ba0ebb0fdba9bbd05e54316cc78e6f92899245162dc556d"]
      - values: {"a":12,"b":10,"A":30}
        answers: ["sha256:dd755324bf9bbde8b5d2c8cd2b0f1c5af19041e5d497a606642cc650ca89e0a0","sha256:afc11786bd13dacb7dbd9f0fd4588b8db2a7fe7f96204cff845bb252c99990f2","sha256:553d3f5d139a54ce71c6ff61ca28d453afc38bf22027d2553411f7ad33f7f4e9"]
      - values: {"a":8,"b":10,"A":45}
        answers: ["sha256:f1cb12085254ccdc2023681da6bbb67465b41934793da9bf987407564aa44b89","sha256:6c87f4241a0b7df04d6b12ea1f4745b226e8f8f41fc85d854bea136f71b195c7","sha256:5a17e981be57e63dd2b3e09a058787b7177bce3a06a73e77965ace7bb6eceaa1"]
      - values: {"a":6,"b":9,"A":60}
        answers: ["sha256:5d8682ed801448087943ffc8bcf981913dfae0da64b07bfd84f3735a18252d01","sha256:46f8a61bbf983c34d33add207042f68c8df096513fc33369c351e6b7b1b16da0","sha256:4abd5bdab67393b4c5c95bf2e62239e1059ee58dbd3822c24b5c4a6d976a139e"]
  - id: rumbo-y-componentes
    tier: 3
    type: numero
    sig: 3
    prompt: |
      Un barco navega ${{d}}$ km con rumbo «Norte ${{g}}^\circ$ Este» (a ${{g}}^\circ$ del norte hacia el este). ¿Cuántos kilómetros se ha
      desplazado hacia el **este**? Respuesta: **un decimal**.
    variants:
      - values: {"d":12,"g":40}
        answers: ["sha256:0c2e75da3325f207436dafb7d18be3ef31e02ea2317cfd1b0c93a926c970e855","sha256:ce167a2df5e430c83a5ffaa1b4c08aaeee0557b93250e2359d05407238f831bb","sha256:c80b802ae985e439f07dbe8800b90c0b33518943417423ae0b93c151ed446708"]
      - values: {"d":20,"g":25}
        answers: ["sha256:b4fbcc3417e129fbd1a5ddfb274bbc94b2edaca60bf0132eaf5ae7241d8d1bf9","sha256:14a2c8a130d3279fa3ad365ad59dd4a05a2b37fddf4f319ea76330b2887bd7f1","sha256:4eae0cbce0bcb37c7185c472a4f6d2f9b77b89d49fdcaab5981ad19a60830a2f"]
      - values: {"d":8,"g":63}
        answers: ["sha256:14cf4c1e50148a348048f0dd672fd78ff282ea46a3afeae0166adb059c38ff1a","sha256:1c3b75fcb3bb52652be30da60fadd3e1fbd552a3d2b420667eb8a53602c6871c","sha256:e5f38bb50e3d4991b5ca9815cd385598216fb79419dc188213efc26e068c10b7"]
      - values: {"d":15,"g":50}
        answers: ["sha256:a6551a18be88ecf5b598911c070337ca6f4abc520e1b1fa6b163cda21523a192","sha256:2724f68869df9ac85e8c5a3e3743b9b3bb2f2daf14a432762b5b74464d290ea9","sha256:81749919b53d3847ec70e02349d914efc633e8fcdae2aaf63eedc05179bef545"]
      - values: {"d":30,"g":12}
        answers: ["sha256:6ac4113c5b749c621ed2b57eac2f21ba1fdf0a3d4b93ed7f1812dce77a9eff2c","sha256:79f65ce5425298751c84a62f627d53316377977dc7a6d8afcf2292222d267497","sha256:497c7f0a8d972f83653742ee84c6f113094d8ee22256e08ad60edd6c2361dc8e"]
      - values: {"d":9,"g":75}
        answers: ["sha256:bfc63b9cd9fb98e8872424d95fd0020aa64e6752892bb55756af438678015287","sha256:5a8deaa39ec682cefca1b116fa5abac1609ea255b1c2740eaab56ba9498b9cf8","sha256:6171f3f82ce7d608f3827a54e3ab54b7f9652eadc688ffec42c8576debfad999"]
  - id: soluciones-en-dos-periodos
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántas soluciones tiene $\sin x = {{k}}$ en el intervalo $0 \le x \le {{fin}}$ (${{vueltas}}$ vueltas completas)?
    variants:
      - values: {"k":"0{,}3","vueltas":2,"fin":"4\\pi"}
        answers: ["sha256:f2e58329d732e73ee55c9dbcd8a7bbad4e53c61f5eaaf476c8bd619c6669b844","sha256:50f46634a356951864786582f1d777be612a5291f746679da300eda7164cb956","sha256:a9777d909e35b6b08c12ea751511cfe57e5a500d0a9c86275dc31f92a35d7175"]
      - values: {"k":"-0{,}6","vueltas":3,"fin":"6\\pi"}
        answers: ["sha256:42363ee0144137e898c9566baa8ba66fe343ac2e973416871b42d63a654e6b6b","sha256:891dbe9f33086746ead539a7c820d848c500fbd7fcbb32d3c5238d4060f50e6d","sha256:c04652d9cc5e20e15896a42ee42168948b4a047341a7ce313611bbc6e1c92632"]
      - values: {"k":"0{,}9","vueltas":1,"fin":"2\\pi"}
        answers: ["sha256:323276c88ee8c09767ced94473c855919d3875d50733fdf53b81e2e4f7799a40","sha256:6b84978fea33ade7c5462afa3c9827c4a71c758d0eca5a0ecd8328814fc0b5d3","sha256:909dc816f21eb04686954ffa7fb8c18c3e6196cb18a9866a83236aa92135431a"]
      - values: {"k":"0{,}5","vueltas":4,"fin":"8\\pi"}
        answers: ["sha256:646159fce606782bded024bee188f7960fc7297c461a825969f3681d0f7d76f8","sha256:a7eb7631310149858434ebb628ed52ca4c933409002c4f23c1b41c8b3d1a2d02","sha256:263aa201610ade88807d99a3fe46f3136cbc8742b0fe82f34b328a2043d70243"]
      - values: {"k":"-0{,}2","vueltas":2,"fin":"4\\pi"}
        answers: ["sha256:8d293627bb6c7768cbb5a7fe4ede2cf244d3fe0074ca29c9422be4f825b11624","sha256:4fe2a53cb371f084ee54fb161fbd58b95c531ad6555cc5609e580f9ee1c7cb19","sha256:1322ee8db64b8beb1e065d2f527e777322e3e959df6642d1ee9ada8552b0ebf9"]
      - values: {"k":"0{,}75","vueltas":3,"fin":"6\\pi"}
        answers: ["sha256:7b6a94e380eff142daf3ea02adac26ac1d2f086fb3b05fb4eab4c86ca8db0700","sha256:022b78847f7cef7b379e8a2517a1cffae60e52ae8347a57324c9b43fdf63c2d7","sha256:3f43753f931ee12f3aeebbde283765fed34d1253434ce05733aa58012dc1572b"]
  - id: r-modo-calculadora
    tier: 1
    type: opcion
    review: true
    prompt: |
      Escribes $\sin(30)$ en la calculadora y obtienes $-0{,}988$. ¿Qué ha pasado?
    options:
      - |
        La calculadora está estropeada
      - |
        Está en modo radianes y $30$ se interpreta como $30$ radianes
      - |
        El seno de $30^\circ$ es negativo
      - |
        Hay que usar $\arcsin$
    answers: ["sha256:c953a60e99bd737c0e90e59760dcf3e87b7b02873ec556acc7d509d44a30b22b"]
  - id: r-cuadrante
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué signos tienen $\sin 130^\circ$ y $\cos 130^\circ$?
    options:
      - |
        Seno y coseno positivos
      - |
        Seno negativo y coseno positivo
      - |
        Seno positivo y coseno negativo
      - |
        Ambos negativos
    answers: ["sha256:0c9f62975f938142ca3bb968d9ad8a0496c70293f335a1e3df46273f222ec498"]
  - id: r-periodo
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el periodo, en grados, de $y = 5\sin(3x)$ (con $x$ en grados)?
    answers: ["sha256:9305d1c0f4cb65eb6eacd872be77e4588f00748657465bbb0e8d709d578cee93","sha256:3e064391947c263521071f2d8f1826f8a30d9e99a3c0e9e34b2539b4d26236c0","sha256:99c78b23c63746cbb38b58af197bc9673306300b327860ae3a67bf2061a19982"]
  - id: r-identidad-fundamental
    tier: 1
    review: true
    prompt: |
      Si $\cos\theta = \tfrac{12}{13}$ y $\theta$ es agudo, ¿cuánto vale $\sin\theta$? Respuesta «a/b».
    answers: ["sha256:8bcc5e834c35fef4f3ed6f9a31eb8b285a74eabd47930d24fe757d6e16cb9cca"]
  - id: r-arco
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      En una circunferencia de radio $4$ cm, un arco abarca un ángulo de $1{,}5$ rad. ¿Cuánto mide el arco, en cm?
    answers: ["sha256:1bec7a08d0306e5b6f22dd587d882aa4a8973a63039000f54e4d9e1859ab7877","sha256:0ad5b07823328e184b82d78da4c24d1486aab47453351ff709433a68244bacc8","sha256:1efbee99f6f7c070b6d0ec41968a1b08c295a2c0fa85906888f430c561af74a2"]
  - id: r-pitagoras-generalizado
    tier: 2
    type: opcion
    review: true
    prompt: |
      Conoces dos lados de un triángulo y el ángulo **entre ellos**. ¿Qué usas para hallar el tercer lado?
    options:
      - |
        El teorema del coseno, porque se conocen dos lados y el ángulo que forman
      - |
        El teorema del seno
      - |
        Pitágoras directamente
      - |
        No se puede resolver
    answers: ["sha256:67fad5b92947f0fa67e4fb7a27cbbc976902449e2a7e260cca0a34c1395f848d"]
---

# Trigonometría: ángulos, ondas y triángulos

«Trigonometría» significa *medida de triángulos*, pero hoy es mucho más: es el lenguaje de todo lo que **gira y oscila**. El seno y el coseno describen ondas (sonido, luz, corriente
alterna), rotaciones (robótica, gráficos 3D, navegación) y la forma de cualquier señal periódica ([[ing-senales-sistemas]]). Y a la vez permiten resolver cualquier triángulo,
que es lo que usaron durante siglos topógrafos y navegantes para medir lo que no se puede alcanzar.

## Objetivos

Al terminar sabrás:

1. Medir ángulos en grados y radianes y convertir entre ambos.
2. Definir seno, coseno y tangente con triángulos rectángulos y con el círculo unidad, y conocer los valores notables.
3. Dibujar y usar las funciones trigonométricas (amplitud, periodo, fase) para modelar ondas.
4. Usar las identidades fundamentales y las fórmulas de la suma y del ángulo doble.
5. Resolver cualquier triángulo con los teoremas del seno y del coseno.
6. Resolver ecuaciones trigonométricas y aplicar todo a problemas de medida, navegación y rotaciones.

> [!question] Test de entrada
> 1. En un triángulo rectángulo con catetos $3$ y $4$, ¿cuánto mide la hipotenusa? 2. ¿Cuántos grados tiene una vuelta completa? 3. Si dos triángulos tienen los mismos ángulos, ¿qué
> relación hay entre sus lados?
>
> Respuestas: $5$; $360^\circ$; **son proporcionales** (triángulos semejantes).

## 1. Para qué sirve

- **Medir lo inaccesible**: la altura de un edificio, la anchura de un río, la distancia a un barco (topografía, geodesia, astronomía).
- **Ondas y señales**: sonido, radio, corriente alterna ($v = 325\sin(100\pi t)$), todo es suma de senos.
- **Rotaciones**: girar un objeto en un videojuego, el brazo de un robot ([[rob-cinematica]]), la orientación de un móvil.
- **Ingeniería**: descomponer un empuje inclinado en su parte horizontal y vertical, estructuras triangulares, antenas,
  óptica.

## 2. Ángulos: grados y radianes

> [!practico]
> Coge una pizza y un trozo de cuerda tan largo como el radio. Si pones la cuerda sobre el borde, el trozo de pizza que
> abarca tiene un ángulo de **un radián** (unos $57^\circ$). Como el borde completo mide «$2\pi$ radios» (algo más de seis
> cuerdas), la vuelta entera son $2\pi$ radianes. Los grados son un invento humano (360, por los babilonios); los radianes
> salen del propio círculo, y por eso las fórmulas de la ciencia son más sencillas con ellos.


Un ángulo se mide en **grados** ($360^\circ$ una vuelta) o en **radianes**. Un **radián** es el ángulo que abarca un arco **de longitud igual al radio**. Como la circunferencia mide $2\pi r$,
una vuelta completa son $2\pi$ rad:

$$
180^\circ = \pi\ \text{rad}, \qquad \theta_{\text{rad}} = \theta_{\text{grados}}\cdot\frac{\pi}{180} .
$$

Así, $90^\circ = \frac{\pi}{2}$, $60^\circ = \frac{\pi}{3}$, $45^\circ = \frac{\pi}{4}$, $30^\circ = \frac{\pi}{6}$ y $150^\circ = \frac{5\pi}{6}$. **Por qué radianes:** con ellos, la longitud de un arco es simplemente $s = r\theta$ y el área de un
sector, $\frac12 r^2\theta$, y las fórmulas del cálculo no llevan factores $\frac{\pi}{180}$. Programación y ciencia usan **siempre radianes**.

## 3. Razones trigonométricas

> [!practico]
> Una rampa sube $1$ m por cada $10$ m de recorrido: su inclinación queda fijada por ese cociente, no por lo larga que sea.
> Seno, coseno y tangente son exactamente eso: **cocientes entre lados** de un triángulo rectángulo que solo dependen del
> ángulo. Si conoces el ángulo y un lado, calculas los demás; si conoces dos lados, calculas el ángulo. Así se mide la altura
> de un árbol sin subirse a él.


En un triángulo rectángulo con ángulo agudo $\theta$:

$$
\sin\theta = \frac{\text{cateto opuesto}}{\text{hipotenusa}},\quad
\cos\theta = \frac{\text{cateto adyacente}}{\text{hipotenusa}},\quad
\tan\theta = \frac{\text{opuesto}}{\text{adyacente}} = \frac{\sin\theta}{\cos\theta} .
$$

(Regla nemotécnica «SOH-CAH-TOA».) Dependen **solo del ángulo**, no del tamaño del triángulo, porque triángulos con los mismos ángulos son semejantes (ver [[mat-geometria-basica]]).

**Ejemplo:** el triángulo $3$-$4$-$5$ (cateto opuesto $3$): $\sin\theta = 0{,}6$, $\cos\theta = 0{,}8$, $\tan\theta = 0{,}75$ y $\theta = \arcsin 0{,}6 \approx 36{,}87^\circ$.

**Identidad fundamental.** Por Pitágoras, $\text{op}^2 + \text{ady}^2 = \text{hip}^2$; dividiendo por $\text{hip}^2$:

$$
\sin^2\theta + \cos^2\theta = 1 .
$$

**Valores notables** (de dos triángulos conocidos). Un triángulo rectángulo **isósceles** de catetos $1$ tiene hipotenusa $\sqrt2$, luego $\sin 45^\circ = \cos 45^\circ = \frac{1}{\sqrt2} = \frac{\sqrt2}{2}$.
Un triángulo **equilátero** de lado $2$ partido por su altura da un triángulo de lados $1$, $\sqrt3$, $2$ con ángulos $30^\circ$, $60^\circ$:

| $\theta$ | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $\sin\theta$ | $0$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ | $0$ |
| $\tan\theta$ | $0$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | — |

**Ejemplo resuelto (una escalera).** Una escalera de $5$ m se apoya en una pared formando $70^\circ$ con el suelo. Altura que alcanza: $5\sin 70^\circ \approx 4{,}70$ m; distancia del pie a la pared:
$5\cos 70^\circ \approx 1{,}71$ m. Comprobación: $4{,}70^2 + 1{,}71^2 \approx 25$. $\checkmark$

**Ángulos de elevación.** Desde $40$ m de la base de una torre, el ángulo de elevación de su cima es $48^\circ$: altura $= 40\tan 48^\circ \approx 44{,}4$ m.

## 4. El círculo unidad: cualquier ángulo

> [!practico]
> Imagina una noria de radio $1$ que gira. Una cabina que sale de la derecha (ángulo $0$) va cambiando de altura y de posición
> horizontal: su altura es el **seno** del ángulo girado y su posición horizontal es el **coseno**. Así seno y coseno tienen
> sentido para cualquier ángulo, también de más de una vuelta, y toman valores negativos cuando la cabina está por debajo
> o a la izquierda del centro.


En una circunferencia de **radio $1$** centrada en el origen, el punto $P$ que se obtiene girando $\theta$ desde el eje $x$ positivo (sentido antihorario) tiene coordenadas

$$
P = (\cos\theta,\ \sin\theta) .
$$

Así se definen seno y coseno para **cualquier** ángulo (incluso negativos o mayores de $360^\circ$). La identidad fundamental es ahora la ecuación de la circunferencia $x^2 + y^2 = 1$.

- **Signos por cuadrantes:** I: $\sin > 0,\ \cos > 0$; II: $\sin > 0,\ \cos < 0$; III: ambos negativos; IV: $\sin < 0,\ \cos > 0$.
- **Periodicidad:** $\sin(\theta + 2\pi) = \sin\theta$, $\cos(\theta + 2\pi) = \cos\theta$ (periodo $2\pi$); $\tan$ tiene periodo $\pi$.
- **Simetrías:** $\sin(-\theta) = -\sin\theta$ (impar); $\cos(-\theta) = \cos\theta$ (par); $\sin(\pi - \theta) = \sin\theta$; $\sin(\tfrac\pi2 - \theta) = \cos\theta$.

**Ejemplo:** $\sin 150^\circ = \sin(180^\circ - 30^\circ) = \sin 30^\circ = \frac12$ y $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt3}{2}$. Para cualquier ángulo se calcula su **ángulo de referencia** (el agudo equivalente) y se asigna el signo del cuadrante.

## 5. Funciones trigonométricas y ondas

> [!practico]
> Si dibujas la altura de la cabina de la noria a lo largo del tiempo, sale una **onda** que sube y baja sin fin: la gráfica
> del seno. El sonido de un diapasón, la corriente del enchufe o un columpio son ondas así. Basta con tres números para
> describirlas: cuánto suben (**amplitud**), cada cuánto se repiten (**periodo**) y cuándo empiezan (**desfase**).


Las gráficas de $y = \sin x$ y $y = \cos x$ son **ondas** de periodo $2\pi$ y amplitud $1$ ($\cos x$ es $\sin x$ desplazada $\frac\pi2$). La forma general es

$$
y = A\sin(Bx + C) + D :
$$

**amplitud** $|A|$, **periodo** $\dfrac{2\pi}{B}$, **desfase** $-\dfrac{C}{B}$ (desplazamiento horizontal) y **línea media** $D$. En física, una onda o una oscilación es
$y(t) = A\sin(2\pi f t + \varphi)$ con $f$ la **frecuencia** (cuántas oscilaciones completas hay por segundo, en hercios): la tensión de la red $v(t) = 325\sin(100\pi t)$ tiene $f = \frac{100\pi}{2\pi} = 50$ Hz. Y $\tan$ tiene asíntotas verticales en $\frac\pi2 + k\pi$.

**Funciones inversas.** $\arcsin$, $\arccos$ y $\arctan$ devuelven un ángulo a partir del valor: $\arcsin: [-1, 1] \to [-\frac\pi2, \frac\pi2]$, $\arccos: [-1, 1] \to [0, \pi]$, $\arctan: \mathbb{R} \to (-\frac\pi2, \frac\pi2)$.
Cada una devuelve **un** ángulo, pero las ecuaciones trigonométricas tienen **varias** soluciones (sección 8).

## 6. Identidades

> [!practico]
> Las identidades son igualdades que valen para **cualquier** ángulo, como las identidades notables del álgebra. La más
> útil sale de combinar dos giros: si conoces seno y coseno de $45^\circ$ y de $30^\circ$, las fórmulas de la suma te dan los
> de $75^\circ$ sin calculadora. Y una advertencia: $\sin(\alpha + \beta)$ **no** es $\sin\alpha + \sin\beta$.


**Coseno de una diferencia.** $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \sin\alpha\sin\beta$.
> [!formal] Con rigor: demostración con el círculo unidad
> *Demostración.* Sean $P = (\cos\alpha, \sin\alpha)$ y $Q = (\cos\beta, \sin\beta)$ en el círculo unidad. La distancia al cuadrado entre ellos es, por coordenadas,
> $(\cos\alpha - \cos\beta)^2 + (\sin\alpha - \sin\beta)^2 = 2 - 2(\cos\alpha\cos\beta + \sin\alpha\sin\beta)$. Pero $|PQ|$ solo depende del ángulo $\alpha - \beta$ entre ellos (giremos
> ambos hasta que $Q$ caiga sobre el eje $x$): vale, por las mismas cuentas con $Q = (1, 0)$, $2 - 2\cos(\alpha - \beta)$. Igualando se obtiene la fórmula. $\blacksquare$

De ella salen las demás (sustituyendo $\beta \to -\beta$ y usando $\sin\theta = \cos(\frac\pi2 - \theta)$):

$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta,\qquad
\sin(\alpha \pm \beta) = \sin\alpha\cos\beta \pm \cos\alpha\sin\beta .
$$

**Ángulo doble** (tomando $\beta = \alpha$): $\sin 2\alpha = 2\sin\alpha\cos\alpha$ y $\cos 2\alpha = \cos^2\alpha - \sin^2\alpha = 1 - 2\sin^2\alpha = 2\cos^2\alpha - 1$.

**Ejemplo resuelto:** $\sin 75^\circ = \sin(45^\circ + 30^\circ) = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659$. $\checkmark$
**Otro:** si $\sin a = \frac{4}{5}$ ($a$ en el primer cuadrante), $\cos a = \frac35$ y $\sin 2a = 2\cdot\frac45\cdot\frac35 = \frac{24}{25}$.

**Importante:** $\sin(\alpha + \beta) \ne \sin\alpha + \sin\beta$. Para comprobarlo, $\alpha = \beta = 90^\circ$: $\sin 180^\circ = 0$, no $2$.

## 7. Resolver cualquier triángulo

> [!practico]
> Un topógrafo no puede cruzar el río, pero desde dos puntos de su orilla mide los ángulos hacia un árbol de la otra orilla y
> la distancia entre esos dos puntos. Con eso, el **teorema del seno** le da la distancia al árbol. El **teorema del coseno** es
> Pitágoras «corregido» para triángulos que no tienen ángulo recto. Con los dos se resuelve cualquier triángulo del que se
> conozcan tres datos (al menos uno, un lado).


En un triángulo $ABC$ con lados $a, b, c$ opuestos a $A, B, C$:

**Teorema del coseno** (generaliza a Pitágoras):

$$
a^2 = b^2 + c^2 - 2bc\cos A .
$$

> [!formal] Con rigor: demostración con coordenadas
> *Demostración.* Se coloca $A$ en el origen y $B = (c, 0)$; entonces $C = (b\cos A,\ b\sin A)$ y $a^2 = |BC|^2 = (b\cos A - c)^2 + (b\sin A)^2 = b^2 - 2bc\cos A + c^2$. $\blacksquare$
> Si $A = 90^\circ$ se recupera Pitágoras.

**Teorema del seno:**

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} \;(= 2R,\ \text{con } R \text{ el radio de la circunferencia circunscrita}) .
$$

> [!formal] Con rigor: demostración con el área
> *Demostración.* El área vale $\frac12 bc\sin A = \frac12 ac\sin B$; simplificando, $\frac{b}{\sin B} = \frac{a}{\sin A}$; igual con el tercer par. $\blacksquare$ De aquí además: **área** $= \frac12 ab\sin C$.

**Qué teorema usar:**

| Datos | Método |
|---|---|
| dos ángulos y un lado (AAL, ALA) | el tercer ángulo es $180^\circ - A - B$; después, **seno** |
| dos lados y el ángulo que forman (LAL) | **coseno** para el tercer lado; después **seno** (o coseno) |
| tres lados (LLL) | **coseno** para cada ángulo: $\cos A = \frac{b^2 + c^2 - a^2}{2bc}$ |
| dos lados y un ángulo **no** comprendido (LLA) | **caso ambiguo** |

**Ejemplos resueltos.** *Seno:* $a = 9$, $A = 35^\circ$, $B = 70^\circ$: $b = \frac{9\sin 70^\circ}{\sin 35^\circ} \approx 14{,}75$; $C = 75^\circ$ y $c = \frac{9\sin 75^\circ}{\sin 35^\circ} \approx 15{,}16$.
*Coseno:* lados $5$ y $6$ con ángulo $50^\circ$ entre ellos: $c^2 = 25 + 36 - 60\cos 50^\circ \approx 22{,}43$, $c \approx 4{,}74$.

**El caso ambiguo (LLA).** Con $a$, $b$ y $A$ conocidos, $\sin B = \frac{b\sin A}{a}$. Casos: si $a < b\sin A$, **ningún** triángulo ($\sin B > 1$); si $a = b\sin A$, **uno** (rectángulo);
si $b\sin A < a < b$, **dos** triángulos ($B$ y $180^\circ - B$); si $a \ge b$, **uno**. Ejemplo: $a = 5$, $b = 8$, $A = 30^\circ$: $b\sin A = 4 < 5 < 8$; $\sin B = 0{,}8$ da $B = 53{,}13^\circ$ **o** $126{,}87^\circ$, y ambos valen.

## 8. Ecuaciones trigonométricas

> [!practico]
> «¿Cuándo está la cabina de la noria a media altura subiendo?» tiene muchas respuestas: una en cada vuelta, y además hay
> dos momentos por vuelta a la misma altura (subiendo y bajando). Por eso las ecuaciones trigonométricas tienen **infinitas**
> soluciones, y en un intervalo concreto hay que buscarlas todas.


$\sin x = k$ tiene soluciones si $|k| \le 1$: $x = \arcsin k + 2\pi n$ **y** $x = \pi - \arcsin k + 2\pi n$ ($n$ entero). $\cos x = k$: $x = \pm\arccos k + 2\pi n$. $\tan x = k$: $x = \arctan k + \pi n$.
**Ejemplo:** $\sin x = 0{,}3$ en $[0, 4\pi]$: $\arcsin 0{,}3 \approx 0{,}305$ y $\pi - 0{,}305 \approx 2{,}837$ más sus copias $+2\pi$: **4 soluciones**. Cuando la ecuación mezcla seno y coseno, se
usa $\sin^2 + \cos^2 = 1$ para dejar una sola función y se **factoriza**. Siempre se **comprueban** las soluciones, sobre todo si se elevó al cuadrado.

## 9. Aplicaciones

**Navegación y descomposición de vectores.** Un desplazamiento de $d$ con rumbo (ángulo desde el norte) $\theta$ hacia el este tiene componentes: este $= d\sin\theta$, norte $= d\cos\theta$. 12 km a «N $40^\circ$ E»:
$7{,}7$ km al este y $9{,}2$ km al norte. Con un ángulo $\theta$ medido desde el eje $x$ las fórmulas son $(d\cos\theta,\ d\sin\theta)$.

**Rotaciones en el plano.** Girar el punto $(x, y)$ un ángulo $\theta$ alrededor del origen da

$$
x' = x\cos\theta - y\sin\theta,\qquad y' = x\sin\theta + y\cos\theta .
$$

(Es la fórmula de la suma aplicada al ángulo del punto.) Girar $(1, 0)$ $90^\circ$ da $(0, 1)$; girar $(3, 4)$ $30^\circ$ da $(0{,}598;\ 4{,}964)$, sin cambiar la distancia al origen ($5$). Esta fórmula es la base de los
gráficos 2D y de las rotaciones de la robótica (en [[mat-algebra-lineal-1]] se escribe como una tabla de números).

**Ondas y Fourier.** Cualquier señal periódica razonable se puede escribir como **suma de senos y cosenos** (series de Fourier); es la base del audio digital, la compresión y las telecomunicaciones.

## 10. Errores típicos

- Calculadora o programa en el **modo equivocado** (grados frente a radianes): $\sin 30$ da $0{,}5$ en grados pero $-0{,}988$ en radianes.
- $\sin(\alpha + \beta) = \sin\alpha + \sin\beta$ (falso); $\sin^2\theta$ significa $(\sin\theta)^2$, no $\sin(\theta^2)$.
- Olvidar la **segunda solución** de $\sin x = k$ ($\pi - x$) o los múltiplos de $2\pi$.
- Aplicar $\arcsin$ a un valor fuera de $[-1, 1]$.
- Usar el teorema del seno con un ángulo y olvidar el **caso ambiguo**.
- Confundir cateto opuesto y adyacente (depende del ángulo elegido).

## Repaso: lo que debe quedarte dentro de un mes

1. $180^\circ = \pi$ rad; arco $s = r\theta$; $\sin^2 + \cos^2 = 1$; $(\cos\theta, \sin\theta)$ es un punto del círculo unidad.
2. Valores notables de $30^\circ, 45^\circ, 60^\circ$; signos por cuadrantes; $y = A\sin(Bx + C)$: periodo $2\pi/B$.
3. $\sin(\alpha\pm\beta)$, $\cos(\alpha\pm\beta)$, ángulo doble.
4. Seno: $\frac{a}{\sin A} = \frac{b}{\sin B}$; coseno: $a^2 = b^2 + c^2 - 2bc\cos A$; área $\frac12 ab\sin C$.
5. Ecuaciones: dos soluciones por vuelta; comprobar; rotaciones $(x\cos\theta - y\sin\theta,\ x\sin\theta + y\cos\theta)$.

## Siguiente

[[mat-geometria-analitica]] une el álgebra con la geometría: rectas, circunferencias y cónicas con coordenadas.
