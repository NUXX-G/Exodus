---
id: mat-distribucion-normal
title: "Variables continuas y distribución normal: densidad, tipificación, tablas, aproximación de la binomial e intervalos de confianza"
area: matematicas
trunk_level: 4
prerequisites: [mat-distribucion-binomial, mat-integrales-bachillerato]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 12: «Distribuciones de probabilidad», secciones 1.4 (distribuciones continuas), 1.5 (distribución normal), 1.6 (aproximación de la binomial a la normal) y 1.7 (intervalos de confianza). Apuntes Marea Verde, autora Raquel Caro. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2012%20Distribuciones.pdf"
  - "C. M. Grinstead y J. L. Snell, «Introduction to Probability», American Mathematical Society (2.ª ed. revisada, 1997), de libre acceso en https://math.dartmouth.edu/~prob/prob/prob.pdf: densidades continuas, distribución normal y teorema central del límite."
hints:
  - "Concepto: en una variable continua las probabilidades son áreas bajo la función de densidad. La normal N(μ, σ) es la campana de Gauss centrada en μ; restando la media y dividiendo entre σ toda normal se convierte en la estándar N(0, 1), cuyas áreas están en la tabla Φ."
  - "Herramienta: tipifica z = (x − μ)/σ y usa Φ(z) = P(Z ≤ z); P(Z > z) = 1 − Φ(z); P(Z ≤ −z) = 1 − Φ(z). Para la binomial con n grande, normal de media np y desviación √(np(1 − p)) con corrección por continuidad (± 0,5)."
  - "Documentación: Marea Verde Matemáticas II cap. 12 (secciones 1.4-1.7); Grinstead y Snell."
exercises:
  - id: normal-estandar
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Si $Z \sim N(0, 1)$, calcula $P(Z \le {{z}})$ (con la tabla o la calculadora; al menos cuatro cifras significativas).
    variants:
      - values: {"z":"1{,}25"}
        answers: ["sha256:e7f034e432fc8de19dfaa05f783da2d141b165706006c6744549c580b4d63d56","sha256:835454d27739c2159e8d34320fdc5b4704d478b1463167f49612effbe14e3889","sha256:04178d181d3d66296d012d3bb044d2fd8e7f4e55cae096aadd094aa7809dd6bd"]
      - values: {"z":"-0{,}84"}
        answers: ["sha256:08788d5f04f12d73e5d4a6e43588d14c5a16105e2320962eec0c3e24566903e4","sha256:29127e5f820466c475fd27f544663b8e1d94e566de6c1bde766cfacbc3be1388","sha256:195797f92683ce5fb5b7b9e98a5afcd8c3ca6692f9bd372ba193a6136146e913"]
      - values: {"z":"2{,}33"}
        answers: ["sha256:38b2b7aa770bde2ea305c9a046bf3fb468b99f957e59ff5628f7ec049a005018","sha256:5cf2f0e7483a86c20176d7ff2ece4a0df1130198be8bb5868137a60cf4bd853d","sha256:37b5088694a1878e114e980f9e5a315b4bead2d30dc6485187d62e18a2b146ef"]
      - values: {"z":"0{,}5"}
        answers: ["sha256:57efa6b2124ceb5695e75947d20dddb5d6f26b93023921a76a681ecbd51616f8","sha256:2ea69d7bcf02c52c2387bee18deb871ad7bc4fa4ad876952301c7d9f043b3ef3","sha256:221d21af530749fb1fb6d5835aef827f7314ecf2b4ac879446aad8509d9b94f0"]
      - values: {"z":"-1{,}5"}
        answers: ["sha256:37803fadfe1263a21d53c8572fb2b97ddb5b893f1b69e1e8e103986f6e69a155","sha256:e89813f5f52d02948bb213095d72cfe5ae17ee4cd70f0a7ef869ff0d0011eee7","sha256:df08f8bfeb3ee307a38a8fabb271760fa3dc3fcd3dfcf70a6b1662fd77dae569"]
      - values: {"z":"2{,}05"}
        answers: ["sha256:5680dbe5a56671633436befa4a854562ec9430f1e3c4b601741c194b782bd2db","sha256:c9d10cc003eacea404bcd63a2de01fdbacb2e7f36d824c36e38a8f9d75dcdbcf","sha256:27cda9672fc46aff44bd3895ac39842fe19cf618cc0381b9e0f2a6004ec77430"]
  - id: normal-entre-dos-valores
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Si $Z \sim N(0, 1)$, calcula $P({{a}} \le Z \le {{b}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"a":"-1","b":"1{,}5"}
        answers: ["sha256:7e6bd08f2b48e3606223eb26c2416bd83ae274fc83275597d87d18515f4b67da","sha256:00a5909d98bd631446bb9a687df0810524407b57069749f1f3182f51eecf423b","sha256:001e7dd9163f86c82d4d864fd9d95344cbf814d5c9f36181c784439ea76f9bbb"]
      - values: {"a":"0{,}3","b":"1{,}8"}
        answers: ["sha256:312da324f1fcbf9b9e3b510e08ee8bcb27f9e7c999f02470ad0ddcc67829370f","sha256:fa0143b30121a351aa985f4451c037096839d657fbe19e443461fcb1ea6b0c90","sha256:04894c5a2217425ac89fc012eb3a105838c1035d4b1513e9ae32bd799d04a81c"]
      - values: {"a":"-2{,}1","b":"-0{,}4"}
        answers: ["sha256:8aef353014a1df955edd6d09b5ba85d38e489d31b0c8483274b8240697c3f3a4","sha256:41a10cd19813b96dd77961451b0ee98eb0ca0ed00677231233f72625c732a7b4","sha256:fe8910357c89a995159824371224f2088a029f3c93c8b57ea78cac57c09679ac"]
      - values: {"a":"-0{,}5","b":"0{,}5"}
        answers: ["sha256:6c00584a1482f17ae122c4a9be325cd60580e60c7278ad815cb0d6fcdbaf5b52","sha256:40291b4b6ec1b59a760fedc154b6959da1b28065f33629bb9afa9be419b5bfef","sha256:761931f3de127f2cb25711d56218c5cec3b2da682505e5ccac0f769f7b3632d7"]
      - values: {"a":"1","b":"2{,}5"}
        answers: ["sha256:7d74f252ff2757045dfce203c58ee87f9c4bcc7fea094cbec0e501cab2c7aca5","sha256:8d4b2fdca7614933c3471dc1d678ccf14bf265f73cf315ef50b0194ae85974de","sha256:4ca51a2d965e6f33020ed578555dd2e56226a7ccfcd42ad663294689d9cd2b20"]
      - values: {"a":"-1{,}2","b":"0{,}7"}
        answers: ["sha256:4001803e0312317d938c1c091cf57dbb1fba6d9909851dd4bfa4c2da7352c95c","sha256:68ce616efc0c2e9c0ef9a572bb4e9a14143f7e0e21d3c18681179b6dbaaa5756","sha256:28adf76d3c18732848602e583e3a62f4c6414e50e84cfab903068f4cb9d8ccf2"]
  - id: tipificar
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Si $X \sim N({{m}}, {{s}})$ (media ${{m}}$, desviación típica ${{s}}$), calcula $P(X \le {{x}})$ tipificando (al menos cuatro cifras significativas).
    variants:
      - values: {"m":"100","s":"15","x":"120"}
        answers: ["sha256:b9d5f9380f19ecd70666bbfd27f50a62b159b0b871a4c47a94f41d9e63f5823f","sha256:bacdfff187e1e9ace0f4ff1e6190466ee18a100037d10157318398017aa6b455","sha256:221b47e600737905da00d4f3bda3c3a92dc819ce97bb04ad40488d602e24f8c0"]
      - values: {"m":"50","s":"4","x":"47"}
        answers: ["sha256:1a5fc2be39e0bd8d37697500d4cf0a60579d1d950db6a80f1a22ef49051c5e69","sha256:d027c54eb3becf6bdfb460e5bd5c3aa4e6e1ef846be6ea9ac7e7039e1e80b946","sha256:960595f356cd56b26fde1c2b8b4864388ee5e4f4dafeca8c6e4b36ce6e178dec"]
      - values: {"m":"3{,}2","s":"0{,}5","x":"4"}
        answers: ["sha256:ab2e239d6a3ff10eaa342f6ed3adda275f61debc6e3252652db672ba73d7108c","sha256:be0877865d419527955084b989626040d3511ee598b1311672778d4d86244c48","sha256:f870c190ad5fba7058414fcb58eb4b1ef168a3b8a32a39dbae5179f7e58ad699"]
      - values: {"m":"600","s":"80","x":"500"}
        answers: ["sha256:7e4c77503f84f52025ddf071933cc6ab1cca043e01b969399ae67ca051ab2239","sha256:21dae329dcc8e9e3d6e63ec8db20c1cbefd89d6bd1c458b79ce9a332383f94c7","sha256:461428ef99fc8e3978964235fc9f2059fd78df68b2adc5e0cef98a4d5b1970f5"]
      - values: {"m":"25","s":"2{,}5","x":"30"}
        answers: ["sha256:672fc7c9b23148a6368f0cfc4b46a4f5ff25bb0b3c372817b286235394111947","sha256:bf686886e638058b2f03d361f802d80f29307379ed3e5c53328d1e80fc3b6abe","sha256:5426d6d5445c5656c929f75fb24b8a3867b8fedb3dde66c1423dbbcb002f561c"]
      - values: {"m":"70","s":"10","x":"82"}
        answers: ["sha256:877e83223a08bf01e37f2541dce0e548e390e68807ed040c57052dae232ea264","sha256:a0d3f181edce62a7614ecffac6da6092db770053a24a1290890f4b5abd25e1e7","sha256:4ea5399634fcf3eb42f096900ff61d1ec2cd9ac3d94263351b49ea1118567c96"]
  - id: cola-superior
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $X \sim N({{m}}, {{s}})$, calcula $P(X \ge {{x}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"m":"500","s":"100","x":"650"}
        answers: ["sha256:c7b4d88b0af1980a78506ba4e563f9611d4c93d9e3dd53bce6fa55e5366a41af","sha256:cfde60f0a694b29be69d72032c677d93a9a99e60df43a7a9ad6ff20f76c527f1","sha256:95e46f2aa9df378fbc71914795ae417a3d743bac9671be658d2ccfa2a2dcacb4"]
      - values: {"m":"12","s":"3","x":"10"}
        answers: ["sha256:e0e4bacc727c32a3df23b8a4d853cd1c9c975bac5a8548ffa590f77c657e0a1a","sha256:b9f1ea9b12d706070ec8a69d3d24470c9012bf97ad00f4917dc587a6f3ff0df8","sha256:2c2d6a96f72934a7e33e083b7ac103cb13b6c7af380461d7d4a7c76fb7de4f1c"]
      - values: {"m":"1{,}8","s":"0{,}2","x":"2{,}2"}
        answers: ["sha256:008cc898b9e1b230b53b7438d06b6aff6d4acebd9e35ff5cddcc7aff780eac92","sha256:323bf3eebd3a4bfdb93396918247b59832b8f68e37c1c007eaf339aca17f0780","sha256:8a995c3a61d7488a809cec2c8450a26d77371f522d4d730961d898ced61bf9a6"]
      - values: {"m":"40","s":"6","x":"50"}
        answers: ["sha256:438d480c7c16c5ceda0daecc921bacaa26ab362f8c94cba374b2204682cf5f47","sha256:0bcc2e2dfee04c620d02fdd117e5edf18b1cd5a398a40709ce2113df7b511faa","sha256:d99f64d81b851a4ecac5b42a2e614210b54223e45ad9cfcfd0fcc0e393477994"]
      - values: {"m":"1000","s":"50","x":"980"}
        answers: ["sha256:d9fb64f6d5544ce375973448647a094ba81e769d6a8144f038cffd74db1a939b","sha256:09d3eda6b3503799bd0ecd138bd4c3004b3d0033b88fa9f1e58b2cf45d149679","sha256:f745b0d4a5a7a1205aac8ca1df02cd431277a973dfda4ef56553adfce1870c42"]
      - values: {"m":"7","s":"1{,}5","x":"9{,}4"}
        answers: ["sha256:56e8f12753e962150f9249df97879563a34a6a4b580366ef85f6788f8124ed97","sha256:ec0c6dd9c7fdff63eef0b237f48b04bb0b1b309c84898b9726a1eabc34010d97","sha256:6b1aa7df2ce8f7fc193743ad87eaa42e6abb1f498669920a3726097581647809"]
  - id: percentil-normal
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $X \sim N({{m}}, {{s}})$, ¿qué valor deja por debajo el ${{q}}\,\%$ de la distribución? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"100","s":"15","q":"90"}
        answers: ["sha256:10c1e5a397482329e4e7dedd66706d72d2abe2334c3f4f646da49b208f83b17d","sha256:b193aadbca663408a414de1b4409e0b066b0a3237b2457e79516a06a42031908","sha256:ac4b71cf8c09db23507a2bade267791b6d23a17fe8e79314d7ed4af54e31738b"]
      - values: {"m":"60","s":"8","q":"25"}
        answers: ["sha256:504e99503b04be0663d189407dc2dc8af5919ac4ef4149655be8034a0ab87825","sha256:bb31dec23f4a0d4a7d35ea14c5e369d64c3ea1d205eec25cde03209267faf25b","sha256:4cd53c1c7e4e095cb4816e14c0efdb90cdde3905db9e8a741e26bcb39384577f"]
      - values: {"m":"1500","s":"300","q":"95"}
        answers: ["sha256:0b04715fcb1c58cbf037aacdc15acd6eea046a784beb13230d83ca0fc81e446f","sha256:f06c487bcae2fb70d8645f66d034ceed2301f85f34abd959740ead02d7cf90ea","sha256:46413e82f05ad07ca04e1e317a06ec92fcc092d24272efe231fc9f775a39b1b3"]
      - values: {"m":"20","s":"5","q":"60"}
        answers: ["sha256:90cd2270d6ae34a24026b846429f261fcfdc8c6e308fc76f4cb72edf8169d29f","sha256:d6ba3c3452162cb2776434a4288dcab02d3fec291aff5fb8542974fa55a28505","sha256:02c903c52705d561caad2cd8c0b711f0dbac2bdb535c3a26f4938410e8b21a8c"]
      - values: {"m":"8","s":"1{,}2","q":"5"}
        answers: ["sha256:65960594fedfd2efaee75f634f0916d0fb25e23c5689689465f865a17da1c7c6","sha256:6d5eb552565946ecab84e8011a23ad7da33678cb9df67e7c31ce77e733bff7b3","sha256:d9220daef694f780defb7fb993c011f85e997503be9a11fa11cef0a7b0b7720c"]
      - values: {"m":"72","s":"6","q":"99"}
        answers: ["sha256:3e47335f623e851b8cddd4e0d0cb7404cf07de67acf1da68628623c74b999ce0","sha256:65d45163dc2204fbdc905ca11e758aca73626338c0c827ad6f652bc9ce33ed15","sha256:568de4b6c2218e87c4a9a8e755c4b5bf53202d3203d8598fee70583668919630"]
  - id: proporcion-entre-valores
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una variable sigue $N({{m}}, {{s}})$. ¿Qué proporción de los valores está entre ${{a}}$ y ${{b}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"65","s":"5","a":"60","b":"72"}
        answers: ["sha256:33ac792c2e09f8669b1b38fb1540b29a169338c70549d6830869058ddaf3737b","sha256:2246cb54f42f2ba58b975afeb9c6754b84f8c97aa40f4303dbd7fcd9ca3e465d","sha256:5a207d94f5a6ed6dc35d11ba3c842f17331eac6e065fde2a72f6515cf3fa09f2"]
      - values: {"m":"200","s":"25","a":"180","b":"260"}
        answers: ["sha256:ea5e1e34f53d4d2ea1e5ad0e8919fe8a2dfb2dc1444b9145e2458f141259fe34","sha256:c47e65faf21454534be7ad341a49e30d7f13a46583222c7a1a4823196ba2e8e3","sha256:f6c6e2431c61f6fde13d7d7a15c0b9aec1eb103b97a493b1e537af6d7515d69e"]
      - values: {"m":"3{,}5","s":"0{,}4","a":"3","b":"4"}
        answers: ["sha256:a494e2e646c0c689d5053056b2bfdd3ea71421bef856bb4e3688ebb5e7bb4f04","sha256:865124dae1eb2f9a69c330e1dfcb07191f9f5339a1e40b3b4e4f28eff81d67bb","sha256:65c248559cc9c70d6e07f9b7569b7a6bfd3357040f047575202c2fc227cf9f44"]
      - values: {"m":"80","s":"12","a":"90","b":"110"}
        answers: ["sha256:b2fa321e08fd9e3901615fc1d12cea54a54502de717e5b09d97df2e224ad261c","sha256:2c2bd4f7ae6dd0b468f2ecc308f302b6afb606daa5d8844150c5215a23a1ec95","sha256:5a584283c1798cee3453e5b644a90b26eb6097eab81603feff49933b35da14aa"]
      - values: {"m":"12","s":"2","a":"9","b":"13"}
        answers: ["sha256:2a64af276b94d18ad0262081c857f69102c1f91ae8a65169acc6d58e3b8106cd","sha256:0518a11c205a3a0b044da0b98b0ed8799d725f5bca7b2f207084f2101ce2b993","sha256:4b063c50a7de5779502fef4866a14d162d6e890de4fed845bc704534198c19c1"]
      - values: {"m":"500","s":"60","a":"400","b":"520"}
        answers: ["sha256:4915fc1b9b47d41ee1edf22d4645e302660d52bab74493477d1c1b17fe9dfa9f","sha256:938e1ac7c32c3e32148ca20ad8e0c010c0137d2f542e461e8cbede277bcf4bc0","sha256:14ecd0477b7855a0871bf4dd856b20cf18d7c7b9f004ee70b7d93c3eba6954c1"]
  - id: aproximar-la-binomial
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Si $X \sim B({{n}}; {{p}})$, aproxima $P(X \le {{k}})$ con la normal de la misma media y desviación, usando la corrección por continuidad (${{k}} + 0{,}5$). (Al menos
      cuatro cifras significativas del valor aproximado.)
    variants:
      - values: {"n":200,"p":"0{,}3","k":66}
        answers: ["sha256:c4125874507fc66b07bfaacd5edc256bb81ba0e973c72cbab67b768b64cdc549","sha256:256ac78aa95b4003dbdc38622a23cd9d0910b39ab0d0227b77d93d11a19cb98f","sha256:0578f1b485e5d8ac62dbb1f19a11ae3a633407593adf1b00b359e700afe6b8ab"]
      - values: {"n":80,"p":"0{,}5","k":35}
        answers: ["sha256:3c84d3d6d1ace26c297012b36fb5292c68e2c14ec510f913707e01de517e7581","sha256:58cb9968548693476e54155b0433e9be39b4c1bb1c9d182faa844c7dd63d4280","sha256:061a60b50b4a61a5e9e9a60889bf9973e6c2d5233c29e937ddec3ece368b8668"]
      - values: {"n":400,"p":"0{,}1","k":45}
        answers: ["sha256:a16f657ceaada76599e9f07ed68589501bdba08e4657cc4b641b6eadc3704a8b","sha256:20498cfa82569a1aee64531676e7784a79fa9a786142c63729152e8ab0653d4e","sha256:f9ff27bdad2bb6b1f9556f3b916e4ec15413d9b83e98cdb896e875da1cecd4b8"]
      - values: {"n":150,"p":"0{,}4","k":55}
        answers: ["sha256:5b7c39c73d8973ac599897d1323992d5d7548f39b2a4ee348d232006a9dccef0","sha256:36fa848a5b784fce487d53324f9f8876e999b6665b555f2b3d9c214e79322bc7","sha256:6c8de9fde6a6734d017cff958c629a1e4bd9492ba15f427239600215c1edcaa1"]
      - values: {"n":300,"p":"0{,}2","k":50}
        answers: ["sha256:08c404340cdf89354d5820511d81c4669fa461159b944cecdc007940ae901b62","sha256:0aabef78893f86cf8056db60e8fefc153f4a53009ffbd5e044c560f4df8280bb","sha256:a010069ec788ef3bf7d2a3b7de03f4a17a2ccb28237cd3dd29e69fe34932f47e"]
      - values: {"n":120,"p":"0{,}6","k":80}
        answers: ["sha256:baaf777dfd324ea1890483f1148ec71e957876f1c5380ec37ef41b3225d27163","sha256:c56baa618c4883fa8d4b76054d15c98680f8ac98d56e233aee03a626a1f7ed47","sha256:b5170ff5ef88edb08eab0fb656e35a25322ebaac2371305cb9e36197e36d0e02"]
  - id: uniforme-continua
    tier: 1
    type: numero
    sig: 6
    prompt: |
      $X$ sigue una distribución uniforme continua en $[{{c}}, {{dd}}]$. Calcula $P({{a}} \le X \le {{b}})$.
    variants:
      - values: {"c":0,"dd":10,"a":"2","b":"5"}
        answers: ["sha256:10b77a19bfb4b7f234fa059218894c9adbba2ebe4468eaf0ffaf02334d32a9f9","sha256:885860159e248cc98daf450867d772d4fc77640999eedde117615c6631216c2c","sha256:13e754736843fe4c3677902e9604099389a9f942feead4253162f0c0c14d238c"]
      - values: {"c":3,"dd":8,"a":"4","b":"7{,}5"}
        answers: ["sha256:3a5877f3f8124f8c557af4c57fd4a3522edf14b4bc755f86ccb9e53b113b9b70","sha256:9a32ecf0c0c2191d8c944aa181140d3d0fa79194fa989425ec28b095670873cc","sha256:388dfe45f6559bb42e19cffa3d30a74d869c3907a0e3ae1f20eca2380aec6dff"]
      - values: {"c":-1,"dd":1,"a":"-0{,}5","b":"0{,}25"}
        answers: ["sha256:f048dd65a0d6f0b2a7c8fdbe0e159d7a938b7c6701a1758873cd6eefc6bc8e48","sha256:bdbe5e2a6aa8232483e565a609438806838eda5ae64e96091a6e51d7c1e82537","sha256:182e28d396d90530ae7cc82eff6c195ff3bcf7f160bb398b174a5be92d4a3ea7"]
      - values: {"c":10,"dd":30,"a":"12","b":"15"}
        answers: ["sha256:1061624cffcb6056c1281f38be542eae837da871f7e0ecdcfc515c5a12244378","sha256:f5bc428f87d80bad8c37b3f68bcd06c2505ddaf10b76107dfa7ac9a1100fd63d","sha256:58ae6ba5b1aa593aa47e120e1b86776a20d1cdfacfeca08a7c5d6936d79e0fe7"]
      - values: {"c":0,"dd":4,"a":"1","b":"4"}
        answers: ["sha256:0998baac3f91f57767e679bd9fc3d891052c14e61c3a7e6c153fc30c3630109f","sha256:8dd68f97d38403abf805ef68fa7ce4c6aa3d0bc3c9215d904406d468f655da91","sha256:28a7432cdd8b646e566412d17e3257753732dad697288e0d81c187e0510a524f"]
      - values: {"c":5,"dd":9,"a":"6{,}5","b":"8"}
        answers: ["sha256:2f1a77c18cbf54cc6527b027172af688050ee568e8e56533fa656c86ae83173b","sha256:38c0377a4a3e61e68e6e8423c59d44b54ebf65908f6b52389e4c24473c0aa38a","sha256:01309dc1fd7b7ef62323da81833c92dd2a4916cf7ab9872e8dc61c12274b6248"]
  - id: intervalo-de-confianza-media
    tier: 3
    type: numero
    sig: 4
    prompt: |
      En una muestra de ${{n}}$ individuos de una población normal con $\sigma = {{s}}$, la media muestral es ${{x}}$. ¿Cuál es el extremo superior del intervalo de
      confianza al ${{c}}\,\%$ para la media? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"x":"172","s":"8","n":64,"c":"95"}
        answers: ["sha256:b6c061d802bbc7163fd1269dc62a642b7e6f18b99e4036d94afb7d2172b1af2e","sha256:8ffab2ba59552e8f9260eb41cd0d2f158168a9bab642a69a5537cb7a1023978d","sha256:ccddd8e3ae0216f339cc69dd168781231324357e8d8f169f55d0b5b07338b8a8"]
      - values: {"x":"50","s":"10","n":100,"c":"90"}
        answers: ["sha256:d7175988e09a6d8539a5b30e20bdbdd4b0113c71e4162146b67ed4f2555661e6","sha256:510b1d6c2028b76b0b2c99a440dd10320835cdc4cb389c9a288f73f86f914f65","sha256:d46424ad9e948f29704d38aca5e10d4b408f081ed976b8363a073616bc64d86d"]
      - values: {"x":"3{,}4","s":"0{,}6","n":36,"c":"99"}
        answers: ["sha256:76635b230314a978647b4a9d3c6b7408b3b1d23ce61c340efdd5734b33b7e6ed","sha256:3da81d6c314a9220e59c9cfa891b38696d0f684f10803e1dd6e2c0e042885e84","sha256:52d0d3d4018ea1db716d94a307ba81767b28ca1d451bb0f6ae6acd8abcce891a"]
      - values: {"x":"250","s":"40","n":25,"c":"95"}
        answers: ["sha256:619dce8191823858b74ad5e27885b6afdc7179c8a4dd6ee0b594acac52477d25","sha256:c90bab3b86f583862b1a44f2a1727033289e92356afa327e80fd13be0a7ca121","sha256:3ea9721278debf947d3a4ddb8e89ee4ce059142651a0c6013933cad13be61cd1"]
      - values: {"x":"12{,}5","s":"2","n":49,"c":"90"}
        answers: ["sha256:6ff045a601dd65281fb5f53769e020ec11a0eb09adf5c4e54ba68a9620b58fb5","sha256:f6f9b60dbf0740bd71c4365cb9f396708c94bc09f9e58aa4d9272b65e593f6e2","sha256:a1755296872d5d8a3e37a027e825c29302db87246feb39385dfa453857c50cd9"]
      - values: {"x":"80","s":"15","n":225,"c":"99"}
        answers: ["sha256:75f13d27dad580637ecf5135ea250dcc9e008230e65933a404e0cf93c7c81245","sha256:8c77fe343153ce1118137dfd8edb28151d56da242fc4cefb0016a08cb3b3887a","sha256:504fd7f39140039fc45605ef784438e6a5ba44d649e31b5f965ca25931921509"]
  - id: tamano-de-la-muestra
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Con $\sigma = {{s}}$, ¿qué tamaño mínimo de muestra hace falta para estimar la media con un error máximo de ${{E}}$ y una confianza del ${{c}}\,\%$?
    variants:
      - values: {"s":"10","E":"2","c":"95"}
        answers: ["sha256:3ed05abeaf32e63c994b27c9e0752cab237bcaa1cd10cd8a163d7e6a0850fb65","sha256:bd089153bb72a78b9fa3c75920cc753b17a9a8b4fac79c6787037ca23365d9d2","sha256:6506d5a0e37f14af161f9966f2926ba794e1f28cb44aac5eb078746531d969bd"]
      - values: {"s":"5","E":"1","c":"99"}
        answers: ["sha256:e25f573ab2db9e4f43a25f1e904f8e3c8cd6a3c717275415905d351aa469e228","sha256:58e7d8d6f2d1d14043e1dc124b9708f4da419f84288ae19d622c39a17e79a0ac","sha256:79ab79e06ef1d1065ae962d389819106aa41d61a3689f35517165daf78990063"]
      - values: {"s":"20","E":"3","c":"90"}
        answers: ["sha256:f16a48d22836e1978247a379eeebb2d2cb6bcc9e1c69fd64c060ac7e4b78a965","sha256:bf429f537affc04d44a4c7286bf294f102e27e21c43e85fa6ab29689fe8204e6","sha256:002bb53fce8200979b8db53cd1524077cb200d975fa4d9afab8e0e54f42d3501"]
      - values: {"s":"0{,}8","E":"0{,}1","c":"95"}
        answers: ["sha256:169f426e0b87f8328c13c0d8a07d612c483e15869dd1bc722266397c4f1ad4ce","sha256:67dc861462a503390866af1962499d5e7e21d06ea9b0cbfed211bf397ba29460","sha256:1a886ee34d184fcc9f88e7d65b7d2245741f4b856e3775bc7a1b77ad76e4c2da"]
      - values: {"s":"15","E":"2{,}5","c":"99"}
        answers: ["sha256:22afa1e83f299814a46f7552fae63064c765cc1fdc2fb4b677dcb5887f69aba4","sha256:55781e9b01eaa75af997520645266d1cf5ac75ef619bca85ff6e175709e8414b","sha256:5180381b7c0e4de06962077ea65591feeae7b44c20c371cfe745afb496ba020c"]
      - values: {"s":"40","E":"5","c":"90"}
        answers: ["sha256:f8a14b1f6c9c4207b4ea42ce543026c236f32f7dfee95c05e7db591703245bb3","sha256:76bb6dde938a50d6ce57de2e4177250f18aa378dd376319a301858c3e889017b","sha256:8c58160e9df915219013f4ccf82550485703be365713b407ed2accc55707f785"]
  - id: intervalo-para-una-proporcion
    tier: 3
    type: numero
    sig: 4
    prompt: |
      En una encuesta a ${{n}}$ personas, el ${{p}}\,\%$ responde que sí. ¿Cuál es el extremo inferior del intervalo de confianza al ${{c}}\,\%$ para la proporción de la
      población? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p":"40","n":400,"c":"95"}
        answers: ["sha256:f37f525c0027c946d4a663a5cd365512467969a66b76dd44f57a3218485be838","sha256:c4a18b18fb887663133d2965c9c51ee3cb842c5d055e017b839efaeeeaa59326","sha256:49fb29bcfc9c008074a5512f339683eee40dda0378af79d5f47b173c21889012"]
      - values: {"p":"25","n":200,"c":"90"}
        answers: ["sha256:1f365868a0778f4e42eb7f45fd35fa2fff35f59d2a7904040e723b8232db09b0","sha256:f5171ceb570608130f205e7659169bf475dfb7abb5c7e47cd3e2dba84d709cef","sha256:02f829fbf95253452130c59c3ea07476cd6b24859efc16950d62973121b4b55a"]
      - values: {"p":"60","n":1000,"c":"99"}
        answers: ["sha256:2d2354e97dcfa734041d6e96971fa5414d697d01b31f290f0981e6449fda34e3","sha256:5a916e98d96f93e2a05aa442f9044661a4b1ac94dcfb708f8de094000370d766","sha256:2f2ac692314fdf4907eb6894f1a68ab2b92606a3234ce53d984a2f98c27dab6d"]
      - values: {"p":"12","n":500,"c":"95"}
        answers: ["sha256:89cb58770338e4d16e2b5d3a2ff3c6ca2b614837420d39d362ecd906b8d69f0c","sha256:28690cca267803abadf78377e6360a97ca533b5a49b7befa6ad649170345f720","sha256:d0fb434bc5bf87bb1a8da48c8c6959cb21a7669a3e0fafc1112a353804050ee1"]
      - values: {"p":"50","n":1200,"c":"95"}
        answers: ["sha256:750f166a0855cb85bc73ce6119fc949137fc016abdb41d2e66d28c9a7f46bd06","sha256:e1fdb3f05dbe5251e6a6795eaa0ce0583f505e0455a817eaa3e183ef3cf757ad","sha256:4d0e74b48eac87c16e7589a62a069d130b612e8f65b4f4c839de40af3876d30e"]
      - values: {"p":"75","n":300,"c":"90"}
        answers: ["sha256:6a4589dcd5d39258dd8712dc054721186d5968b5e20e183834a398ecab197045","sha256:22cd4f18214a25fff9193f361302ad42e262160d37a283cd3bcf1de89a53e449","sha256:598ccac5246ad9a6e16c958ad486315e4bf6f9f8c902d2d7bb99ff10d72f4b81"]
  - id: densidad-y-tipificacion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué en una variable continua $P(X = a) = 0$ y las probabilidades se calculan como áreas bajo la función de densidad. (b) Justifica que
      si $X \sim N(\mu, \sigma)$, entonces $Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$, y por qué basta una sola tabla. (c) Explica por qué, para $n$ grande, la binomial se parece a una
      normal, y qué es la corrección por continuidad.
    sealed: "gz64:H4sIAAAAAAACCn1UTW/bRhD9Kw/EHiiWFpwCuTjNJUUuPQkBCrQN02JIjqypl7P0fhiWBf2YHHvIKT9Bf6xYkpLjQ3Ligrsz7817M3MogrMpitPipqiqklZVhfeKpIQH8kKtZXROo2giWMLoXUutWOmpR89ICtHI/oGsAwewxemzZ0JL/7oc0LOG6bHZGrCCAz9H1DCbktA0lvHH/GlXeIumEY3/0N8ttmaN3xXBWYcxaZxAkjb6jNozSLtd8oSOvavRpT0tLDjAXJs1Ns6Dg0NPkNtEFiaDGdwnhvnFrBtttKrKNpf/gUMkn18MyaDnMFp6morvaBhJCSNNWBo9eUu5KnNtauzRy4P04pGvOGcIcjuQybEcouduR3BgDZkwYUchZoXCg1Anp68K88q8ya+3zg+EILeJEYS1d9D8y67xqxtco2ZTLoI9ZsE2+biN5V/zv6bZeuoOj7hCruJ4WJgcm8bL7S6uTFaJ7H0S9ktmBIbnPnUMWgifPmtPPhfWTkwtIVI7mZqL2+ykfJrQz7hPq4uUXZbSZI5BBrwrtca4MrN7hJCGOYuaS58FiPY8svbCGjnk+3fs1SVr5Q3GbKFFVUV2noezARY9W9jTl0EiV1WdSZ6zD6nbUfg+QOBGR/I8lZxpzUrUueNznkHCQBi4F4LR0WSHvzWracK9jwcdy1e4wrg6GpTbpJ04JbTCiiDnQKPLI4PgFAPtnecwN+Brs5p9zaCtqBuEbJaql9B5joR9o/ZM7zKPddYjj4CHuTOzf6PnwBrpLNfzmJiPd7jC9aE+vq5xh5/m4ydzAwqnL3huqLsVmobG0btHbMo/l5/ngJVZF3XhU+ulK24+HorOS2Qvrrgp3j+OVrrcJ+HFouCALlc3zWTAfiJ3n07/5fUxT3UUVn65XfLgFnUx3Yfi5udj/QLstxSibGc4RBmn82zMPleegpsXFOXtsXTujxJ+YEuzdd+6sLTCIn15bq1LY9b4QT+uMpWLKOic99xNHF8S+XT8Hw8agZOJBQAA"
  - id: r-simetria-normal
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $X \sim N(\mu, \sigma)$, ¿cuánto vale $P(X \le \mu)$?
    answers: ["sha256:0c22a98486e5091f217b76070841b151a7a4de28eb5daba6f930d6b057707e5f","sha256:9a88543e76abea280b562d4babcffbac7e598e83c93bb8950477a38882662518","sha256:a02f04fda04c4459fed88b83e7d4c518966def451e15078ce4ba50820d814e6e"]
  - id: r-regla-95
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué porcentaje de una normal queda, aproximadamente, a menos de dos desviaciones típicas de la media?
    options:
      - |
        El $68\,\%$
      - |
        Aproximadamente el $95\,\%$
      - |
        El $50\,\%$
      - |
        El $99{,}7\,\%$
    answers: ["sha256:6c9d09432248122987582bcd694bec91e9ff94a84af31cd3e33492d29dd7dc1b"]
  - id: r-tipificar
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $X \sim N(50, 5)$, ¿qué valor tipificado $z$ corresponde a $x = 60$?
    answers: ["sha256:1c76c27799dd545f3977792db81ffdb25793a76afc51b9b9e06b6aad506629d4","sha256:0f1dac799fd6a7d2fdd2d8e784044d303b879cb1bdbd02c378b744872cc5b183","sha256:faae645cb34031279f720a474ab5c66db4c3e7cd1082f1701178929370ea792a"]
  - id: r-complementario-normal
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿A qué es igual $P(Z > z)$?
    options:
      - |
        $\Phi(z)$
      - |
        $\Phi(-z) - 1$
      - |
        $1 - \Phi(z)$
      - |
        $2\Phi(z)$
    answers: ["sha256:4416dea4e0b5b30f605cdffbdc7454a6eaef8f4a00ced1ca54cf484c6683a9f1"]
  - id: r-punto-continua
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $X$ es una variable continua, ¿cuánto vale $P(X = 3)$?
    answers: ["sha256:b81733183cc895d33065a74825103334770bc2e6c4f45cadff2d348e06401667","sha256:2e37102c5285017988e9f47bc29065a0e7c333600dc7cf0cbb4a9f3539d69e32","sha256:7daaab4447f798e8a5959e6b5f46aa84e5603fd52cd1923e841dbddd35f686fc"]
  - id: r-mas-muestra
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si aumenta el tamaño de la muestra (con la misma confianza), ¿qué le pasa al intervalo de confianza?
    options:
      - |
        Se estrecha
      - |
        Se ensancha
      - |
        No cambia
      - |
        Se desplaza
    answers: ["sha256:6de7b9e3c3a1848ea67acbb0588baf4b69f043a76f460d672b62f9685195a22d"]
  - id: r-mas-confianza
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si aumenta el nivel de confianza (con la misma muestra), ¿qué le pasa al intervalo de confianza?
    options:
      - |
        Se estrecha
      - |
        Se ensancha
      - |
        No cambia
      - |
        Se desplaza
    answers: ["sha256:a42e449504df095cc20a3ac1551d8268871a8a5b226803c28c6fd0873db9f5c4"]
---

# Variables continuas y distribución normal: densidad, tipificación, tablas, aproximación de la binomial e intervalos de confianza

Las estaturas de una población, los errores de medida, las notas de un examen numeroso o el peso de los paquetes de una máquina siguen casi siempre la
misma forma: una **campana** simétrica, con la mayoría de los valores cerca de la media y cada vez menos al alejarse. Es la **distribución normal**,
la más importante de la estadística, porque aparece siempre que un resultado es la suma de muchos efectos pequeños e independientes (teorema central
del límite). Este nodo presenta las variables continuas, la normal y su manejo con tablas, y las dos aplicaciones clave: aproximar la binomial y
estimar con **intervalos de confianza**.

## Objetivos

Al terminar sabrás:

1. Entender las variables continuas, su función de densidad y por qué las probabilidades son áreas.
2. Calcular probabilidades y percentiles de cualquier normal tipificando y usando la tabla de $N(0, 1)$.
3. Aproximar una binomial por una normal con la corrección por continuidad.
4. Construir intervalos de confianza para una media y para una proporción, y calcular el tamaño muestral necesario.

## Qué debes dominar antes

[[mat-distribucion-binomial]] (variables discretas, media, varianza, binomial) y [[mat-integrales-bachillerato]] (áreas como integrales).

> [!question] Test de entrada
> 1. Media y desviación de $B(100; 0{,}5)$.
> 2. Área bajo $f(x) = \frac12$ entre $x = 0$ y $x = 2$.
> 3. Si una variable tiene media $70$ y desviación $10$, ¿a cuántas desviaciones de la media está el valor $85$?
>
> Respuestas: $50$ y $5$; $1$; a $1{,}5$.

## 1. Para qué sirve

- **Ciencia**: los errores de medida se modelan como normales; los resultados se dan con su margen ([[tro-razonamiento-cientifico]]).
- **Industria**: control de calidad y especificaciones (qué proporción de piezas queda fuera de tolerancia).
- **Encuestas y estudios**: estimar una media o una proporción con un intervalo de confianza ([[mat-estadistica-inferencia]]).
- **Finanzas, biología, IA**: muchos modelos suponen ruido normal.

## 2. Variables aleatorias continuas

> [!practico]
> Si eliges al azar una persona, la probabilidad de que mida **exactamente** $1{,}7500000\ldots$ m es cero; lo que tiene sentido es la probabilidad de un
> intervalo, por ejemplo entre $1{,}70$ y $1{,}80$. Se dibuja una curva (la densidad) y esa probabilidad es el área bajo ella en ese tramo, como en un
> histograma con columnas infinitamente estrechas.

Una variable **continua** toma valores en un intervalo. Se describe con una **función de densidad** $f \ge 0$ con área total $1$, y
$$
P(a \le X \le b) = \int_a^b f(x)\,dx .
$$
Por eso $P(X = a) = 0$ y da igual usar $<$ o $\le$. La **media** y la **varianza** se calculan con integrales ($\mu = \int x f$, $\sigma^2 = \int (x - \mu)^2 f$). *Ejemplo:* la
**uniforme** en $[c, d]$ tiene densidad constante $\frac{1}{d - c}$, y $P(a \le X \le b) = \frac{b - a}{d - c}$.

## 3. La distribución normal

La normal $N(\mu, \sigma)$ tiene densidad
$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x - \mu)^2}{2\sigma^2}} :
$$
una campana simétrica respecto de $x = \mu$ (media, mediana y moda coinciden), con puntos de inflexión en $\mu \pm \sigma$ y que tiende a $0$ en los extremos.

**Regla 68-95-99,7**: aproximadamente el $68\,\%$ de los valores está a menos de $1\sigma$ de la media, el $95\,\%$ a menos de $2\sigma$ y el $99{,}7\,\%$ a menos de $3\sigma$.

**Tipificación**: si $X \sim N(\mu, \sigma)$, entonces $Z = \dfrac{X - \mu}{\sigma} \sim N(0, 1)$. Así todas las probabilidades se leen en la **tabla** de $\Phi(z) = P(Z \le z)$, que da
las áreas de la normal estándar (no tienen fórmula elemental; se calculan numéricamente). Reglas de uso:

- $P(Z > z) = 1 - \Phi(z)$; $P(Z \le -z) = 1 - \Phi(z)$ (simetría); $P(a \le Z \le b) = \Phi(b) - \Phi(a)$.
- *Ejemplo:* estaturas $X \sim N(170, 8)$ (cm): $P(X \le 180) = \Phi\!\left(\frac{10}{8}\right) = \Phi(1{,}25) \approx 0{,}894$.
- **Percentiles**: se busca $z$ en el interior de la tabla y se deshace la tipificación, $x = \mu + z\sigma$. *Ejemplo:* $\Phi(1{,}96) \approx 0{,}975$.

## 4. Aproximación de la binomial por la normal

> [!practico]
> Si dibujas el diagrama de barras de $B(100; 0{,}5)$, ves una campana casi perfecta. No es casualidad: una binomial es la suma de muchos intentos
> independientes, y las sumas de muchos efectos independientes se parecen a una normal.

Si $n$ es grande (como regla, $np > 5$ y $n(1 - p) > 5$), $B(n, p) \approx N\!\left(np, \sqrt{np(1 - p)}\right)$. Como la binomial es discreta, cada valor $k$ ocupa el intervalo
$[k - 0{,}5,\ k + 0{,}5]$ (**corrección por continuidad**): $P(X \le k) \approx P(Y \le k + 0{,}5)$. *Ejemplo:* $B(100; 0{,}5)$, $P(X \le 55) \approx \Phi\!\left(\frac{55{,}5 - 50}{5}\right) = \Phi(1{,}1) \approx 0{,}864$
(el valor exacto es $0{,}864$).

> [!formal] Con rigor: el teorema central del límite
> Si $X_1, \dots, X_n$ son independientes, con la misma distribución, media $\mu$ y varianza $\sigma^2$ finita, entonces la suma tipificada $\frac{X_1 + \dots + X_n - n\mu}{\sigma\sqrt n}$ tiende,
> cuando $n \to \infty$, a la normal estándar (sus probabilidades se acercan a las de $\Phi$). La binomial es el caso de sumas de variables de Bernoulli (teorema de
> De Moivre-Laplace). Por eso la normal aparece en tantos fenómenos: cualquier resultado formado por muchas pequeñas contribuciones independientes
> ([[mat-probabilidad]]). $\blacksquare$

## 5. Intervalos de confianza

Para estimar la media $\mu$ de una población normal (con $\sigma$ conocida) a partir de una muestra de tamaño $n$ con media $\bar x$: la media muestral sigue $N\!\left(\mu, \frac{\sigma}{\sqrt n}\right)$, y
el **intervalo de confianza** al nivel $1 - \alpha$ es
$$
\left(\bar x - z_{\alpha/2}\frac{\sigma}{\sqrt n},\ \ \bar x + z_{\alpha/2}\frac{\sigma}{\sqrt n}\right),
$$
con $z_{\alpha/2}$ tal que $\Phi(z_{\alpha/2}) = 1 - \frac\alpha2$ ($1{,}645$ al $90\,\%$, $1{,}96$ al $95\,\%$, $2{,}576$ al $99\,\%$). El **error máximo** es $E = z_{\alpha/2}\frac{\sigma}{\sqrt n}$, y para no superarlo hace falta
$n \ge \left(\frac{z_{\alpha/2}\sigma}{E}\right)^2$. Para una **proporción** $\hat p$ en una muestra grande: $\hat p \pm z_{\alpha/2}\sqrt{\frac{\hat p(1 - \hat p)}{n}}$ (el «margen de error» de las encuestas).

Interpretación: si se repitiera el muestreo muchas veces, el $95\,\%$ de los intervalos así construidos contendría la media verdadera. Más confianza o
menos muestra dan intervalos más anchos.

## 6. Errores típicos

- Tipificar dividiendo por la varianza en lugar de por la desviación típica.
- Olvidar que la tabla da el área a la **izquierda** ($\le z$).
- Olvidar la corrección por continuidad, o aplicarla al revés.
- Usar $\frac{\sigma}{n}$ en lugar de $\frac{\sigma}{\sqrt n}$.
- Interpretar el intervalo como «la media está ahí con probabilidad del $95\,\%$» (la media es fija; lo aleatorio es el intervalo).

## 7. Resumen

- Continua: densidad, probabilidades = áreas, $P(X = a) = 0$; uniforme.
- Normal $N(\mu, \sigma)$: campana, regla 68-95-99,7; tipificación $z = \frac{x - \mu}{\sigma}$ y tabla $\Phi$.
- $B(n, p) \approx N(np, \sqrt{np(1-p)})$ con corrección $\pm 0{,}5$; teorema central del límite.
- Intervalos de confianza para la media y la proporción; tamaño muestral.

## Repaso: lo que debe quedarte dentro de un mes

1. Por qué en una variable continua las probabilidades son áreas.
2. Cómo se tipifica y cómo se usa la tabla de $\Phi$.
3. La regla 68-95-99,7.
4. Cuándo y cómo se aproxima la binomial por la normal.
5. La fórmula del intervalo de confianza para la media y qué significa.

## Siguiente

[[mat-distribuciones-binomial-normal]] repasa el bloque; en la universidad, [[mat-probabilidad]] y [[mat-estadistica-inferencia]].
