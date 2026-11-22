---
id: fis-calor-temperatura
title: "Calor y temperatura: escalas termométricas, dilatación, calorimetría, cambios de fase, transmisión del calor, gases ideales, teoría cinética y primer principio de la termodinámica"
area: fisica
trunk_level: 3
prerequisites: [fis-trabajo-energia, fis-fluidos-presion-flotacion]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 1: «Temperatura y calor» (temperatura y equilibrio térmico, termómetros y escalas, dilatación térmica, transferencia de calor, calor específico y calorimetría, cambios de fase, mecanismos de transferencia de calor). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/1-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 2: «La teoría cinética de los gases» (modelo molecular de un gas ideal, presión, temperatura y rapidez media cuadrática, capacidad calorífica y equipartición). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/2-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 3: «La primera ley de la termodinámica» (sistemas termodinámicos, trabajo, calor y energía interna, primera ley, procesos termodinámicos). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/3-introduccion"
hints:
  - "Concepto: la temperatura mide la agitación media de las partículas; el calor es energía que pasa de un cuerpo a otro por diferencia de temperatura, hasta el equilibrio térmico. Durante un cambio de fase la temperatura no cambia. La energía se conserva: el calor que entra en un gas se reparte entre aumentar su energía interna y hacer trabajo."
  - "Herramienta: T(K) = t(°C) + 273,15; °F = 1,8 °C + 32; ΔL = α L₀ ΔT; Q = m c ΔT; Q = m L; equilibrio: Σ Q = 0; conducción P = k A ΔT/e; radiación P = ε σ A T⁴; gas ideal p V = n R T; trabajo a p constante W = p ΔV; primer principio ΔU = Q − W; v_cm = √(3 R T/M)."
  - "Documentación: OpenStax Física universitaria vol. 2, caps. 1-3."
exercises:
  - id: fahrenheit-a-celsius
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Expresa ${{F}}$ °F en grados Celsius.
    variants:
      - values: {"F":176}
        answers: ["sha256:b5d155a7442a6cde08517913aeea627f168a7ea56c1898fd5a6d9adff71c252d","sha256:9c21ccba200db02746deec2aae816eab8e8dbd4b343c57796bbd05308cad49b2","sha256:a46141001c608f66cd052c3e5b356afc99e68c16c35fabf5882186906fbf793f"]
      - values: {"F":0}
        answers: ["sha256:591532031c99a5fde14ae301569466bd396bb6a19d589e76bb06d7967c8fe46a","sha256:101deaa52b79afe77437afa762ce33ea522e1148a3a6f7faa25812887c46eb96","sha256:f0eb75ade66a98105b48ac3d3d978713954e531b6bebc1c0e2e0d18e9594f447"]
      - values: {"F":50}
        answers: ["sha256:1ed18f9faaa5ae6179b8813dde13501d583f73cc8aedc7e150a0f7b5c3447a23","sha256:2b264b57dbbe20ea08d9f76e9cec3a2e831ce824a581fccd7f0e551e49d41907","sha256:ea7fdc65e56786051d920199964c6c786b5b7458a554c4343da5790c6f4e9d61"]
      - values: {"F":451}
        answers: ["sha256:0262fb088c15551f2c7fbd2d58adeccd23589fce757541b50bf4165a969f8abb","sha256:42ab0207d3eccdf79ab09c61007f75a00dd0f3fa4fbff09a89b4dc37450db75e","sha256:fcb1a619a20d6ae8f2967206f769a43c0c8f7a9b308408c1dd8311c023a4de03"]
      - values: {"F":-4}
        answers: ["sha256:a0943b314eecd16bcdb025629d3644918e418f7d7c26f0ea3f0d515639154021","sha256:115954d0f1246dc26587d7683f0328c915b3e77d097d3dfee3867c36b62ab39d","sha256:4a7d55fb234ab7faff2f7fb768df0a90c750370158166d3183afa63661dfdb2f"]
      - values: {"F":104}
        answers: ["sha256:287851053a865d3e70c632f541227f227066629971b0486e5d395978a6c0b51f","sha256:9d24b13dc5ccb16dfb355f798e5103e76bed2b0042b338af0ec79df2d7801e81","sha256:a3ca422228f53b799395aac5593eb826a7f10f5e7ff195db770ee8cc47d173cf"]
  - id: dilatacion-lineal
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una pieza de ${{L0}}$ m tiene un coeficiente de dilatación lineal de ${{a}} \cdot 10^{-6}$ K⁻¹. ¿Cuántos milímetros se alarga si su temperatura sube ${{dT}}$ K? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L0":1500,"a":"12","dT":40}
        answers: ["sha256:8d80645fb33667b9a867a5ff203e64ada79939fb7c334432d5dc70c115dcb0a8","sha256:d1e2b90bbb16cc323856fd4102190d4bb02dd04d8f01ff13bc2a4d9adb92f7e1","sha256:f22a2ece926c8840d96f559ba7ec5b0949efac40b242e669573afa073744f67d"]
      - values: {"L0":2,"a":"23","dT":80}
        answers: ["sha256:d321ea45d77f11b353b0bb56fd6edd8700491011339ff1a71e494fed85d5f33f","sha256:971d1872f3aa51472505777e026c3766b849df1cd38293d1bfc43a00d1a9233c","sha256:233f55bf43712a8e8e3936f7f84fb88f394624bae22da33cfb8481ba3e029374"]
      - values: {"L0":0.5,"a":"9","dT":150}
        answers: ["sha256:5ada611d3adee597f055e9d13d34d5775415042480909f87a2fc49d66b74acc2","sha256:ea25d9444613259e2955cc3d971b1af05011d976f004e6287516e0dcb5cdfe55","sha256:e6468f77590ded6390d81412507fa302ebf6d30541b3e57362742c9400a5e46a"]
      - values: {"L0":100,"a":"12","dT":35}
        answers: ["sha256:797ebe98ff0e34d5cc22766f6ef6ebe39b4c643ae295b8adf7d2261033f0128d","sha256:94959702db618fc8e2607a3f59cce8da5d1ddf88437a03e8ac9fa829eaaf387c","sha256:2ccc4d50812fd2dd65c772be24cf04d22ab449f24ea88ec3f1261f221d069f78"]
      - values: {"L0":3,"a":"17","dT":60}
        answers: ["sha256:b8964284c1e7df79e13bdcaa0b1334d02fa807aaa37ab71a5d7c847bc5e6b45c","sha256:04ef46b41f9cb34ea8f9bff427862430d39d1b67bd05fc47555c4280990b1361","sha256:f82e960bbca36dd7edab01329aa52689b94ba8b000ee0d211ee1ac65fc534676"]
      - values: {"L0":25,"a":"1{,}2","dT":500}
        answers: ["sha256:427c147c70fed5ae0125454e50cdf8b94bfc6868d4730912c3ddfe4c2cd73de1","sha256:1a48da72dcedef907ce5634f8292623109ddcba71766324da896f02f7bd37756","sha256:1a392d365f3f2781de2fbe04748fd666c36c1696cabf6a09310151cb93a07908"]
  - id: calor-sensible
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuánto calor, en kJ, hay que dar a ${{m}}$ kg de una sustancia de calor específico ${{c}}$ J/(kg·K) para subir su temperatura ${{dT}}$ K?
    variants:
      - values: {"m":"2","c":4186,"dT":70}
        answers: ["sha256:f9b7a91ab86249c8e4a85cfaf3c36d2260729028ba6a2932acb32515c0576904","sha256:4dd337649c44c6feb38bbf12b469299b34d59025d91661d018edcb189f0cec28","sha256:c1c1b204226bef7bc893b10a068a47f762ca990e8594c6e20a3352d75b7b162b"]
      - values: {"m":"0{,}5","c":900,"dT":180}
        answers: ["sha256:d5e91711067bea5c1f4358d48da5d9041d63ec4e3e5c283db0f2ae15903e1816","sha256:7eda996739f807786c1ef1fb12792be07c8b4e798b4d8511067bd5edb5f261cf","sha256:9404cbba45db5e07f8d7896a5c17d93007d3e2331e79a3125ca59b0273c85020"]
      - values: {"m":"10","c":450,"dT":25}
        answers: ["sha256:e115299c776aebc4a372860a82abf3b11165d6ad7923bea4589a44a10ec9e820","sha256:264e9a8ee00d0815216965f455c7afa44acbb97bf3d61db478d3390fc2f23919","sha256:dfb985f23ec72757d60a826b5b8f82679b700c4ac4d258b3c30c1d1b29391cad"]
      - values: {"m":"0{,}25","c":385,"dT":300}
        answers: ["sha256:c2ef68d80ee450a134e60e57947a6f0e7b008a5bdc37cf610c62ea2ce00a16e1","sha256:c1d6d360608bde88a13200181f672480dcfa24c0c715f3bb6edd756963575332","sha256:04d7ae5f2ad15288a19da2d401aae81f2237c699835660990dcbaa1849d4a2f6"]
      - values: {"m":"1{,}5","c":2400,"dT":45}
        answers: ["sha256:5174f27f5dcb263e27af0bc3523ef56a5bd458527a450ccf59a937a6712d30a2","sha256:aa875f4d95a31286e090bb09695d1e0840359e01c3644ee1bfe24926b20823c6","sha256:13ce0c59e125d8a24ae5efdb4a0faf7c328a1b9a02f89a572333ecc6d6e4c632"]
      - values: {"m":"80","c":4186,"dT":3}
        answers: ["sha256:a80b0a7953187c24482ad8b5c6b60d7e249a7fe51f67d049d1a332798d4ae205","sha256:315b6626c5561d8f892290eb6b1dbc9feedd1754c1595df9cc3b7284cbc22ab7","sha256:f1389864854460d75b9c978f6163e1b89231c6d7157e3f790e63d4e6052907e3"]
  - id: temperatura-de-equilibrio
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una pieza de ${{mm}}$ kg de un metal de calor específico ${{cm}}$ J/(kg·K), a ${{Tm}}$ °C, se echa en ${{mw}}$ kg de agua a ${{Tw}}$ °C ($c = 4\,186$ J/(kg·K)), en un recipiente aislado de
      capacidad calorífica despreciable. ¿Cuál es la temperatura final, en °C? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"mm":"0{,}2","cm":450,"Tm":150,"mw":"0{,}5","Tw":20}
        answers: ["sha256:f83c9278c39c1eedce967578b7ac13f360bb46b3e6f9928234e98ba66fa61eeb","sha256:a0ac207100209acca9c9390ca6d2e4252790beccbccaf08866cb9fc0076a0f36","sha256:ee093944a4997e68265b0e7e1f60c63b1d2d5d5a5b528a5f7eb6f59a3a92e3f5"]
      - values: {"mm":"0{,}5","cm":900,"Tm":100,"mw":"1","Tw":15}
        answers: ["sha256:b4f72b0d07892660faf24b00e403c8824ff48b3c9f0676aa5d9d3ea9a659ca50","sha256:74cec5308d8409e5603a7677e0cc6a6695edbce916c267627442f3d809543d5f","sha256:f6c0fbd047ee2e591f8e82bffd6373c06d0334a6702bcd7992e4168055590e01"]
      - values: {"mm":"0{,}1","cm":385,"Tm":300,"mw":"0{,}3","Tw":25}
        answers: ["sha256:7b825c98555a37874c20b6237f9c971f078b60df94e4e0a79bcfb26cc816449e","sha256:96c3622d4eb65965f3cd7d4753c44b492bf8145de3f83a01578fcafbf677412e","sha256:ad9156219b0503e509c44d7622056869222547cd244a16e11c239e7282e5b118"]
      - values: {"mm":"1","cm":130,"Tm":200,"mw":"0{,}8","Tw":18}
        answers: ["sha256:4a94a96a4362b58ab78adc57b421ff9461a381f6ff7bd9bdaf6cfba9f1034063","sha256:851de8a9fc7299734909e0b16e0445f36e2bdd2844b780b380bbe48d8237753a","sha256:a7555dd3be9f6639b772c09cae4a6359a3794bf20dce666218e64d7dc4577446"]
      - values: {"mm":"0{,}35","cm":450,"Tm":90,"mw":"2","Tw":10}
        answers: ["sha256:e2f3f76f5cb70039c9de7ea48c56fd3a131d4ed1133837fae879b840760877e8","sha256:10d141e8fbf5bea80f55fd1e939a0fdda0b83400c60e86ec0d0dde6686515b7d","sha256:fbf4c61abbfd67d768153b58382829a60c4a30c7cf15f25423297d26e15ca752"]
      - values: {"mm":"0{,}05","cm":235,"Tm":500,"mw":"0{,}15","Tw":22}
        answers: ["sha256:cfc59bf128d86b59f90d95c04df105ceea40182fd338656161f44fff9e1e5414","sha256:de3d91fec24554227400c161937360a73b32d76ae9cf4d632ed3e6833c944e37","sha256:ece24bb8a42f17e3d47a5b8bf4235b4638cfbdf88a580df5b5b116f3297f4021"]
  - id: hielo-a-agua
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto calor, en kJ, hace falta para convertir ${{m}}$ kg de hielo a ${{T1}}$ °C en agua líquida a ${{T2}}$ °C? ($c_{\text{hielo}} = 2\,090$ J/(kg·K), $L_f = 334$ kJ/kg, $c_{\text{agua}} = 4\,186$ J/(kg·K); al menos
      cuatro cifras significativas.)
    variants:
      - values: {"m":"0{,}5","T1":-10,"T2":40}
        answers: ["sha256:e46011e39b51b8c4e723ec26d72742d83dd05419f5ace322590b5bc1f9106eff","sha256:17ebea94a31daf2062d776fd5693e9de66ee3a46e6d72b4cb10789876f8154e8","sha256:6737d94d378c09f4bdfcb750e903669d1f3453b608a445c824f6296b8af9443e"]
      - values: {"m":"2","T1":-5,"T2":20}
        answers: ["sha256:bef6da5eed1530c8a904895365ccee268b6f80493eacd589dd55078e4819b099","sha256:6ccbcc14dba9a37df159170f6e393f4a08beb88e5d0524af829dfd5ff17e73ae","sha256:44ed2d399c26be25b9af97d82a02c1d94378820bc91f588eb63417b37d7e2a4e"]
      - values: {"m":"0{,}1","T1":-20,"T2":80}
        answers: ["sha256:c6f23c0a50b1ff63c4c679875cfe6eea1340de89cae4019398b1af7cbe33abbc","sha256:7816b6b5183b6bc482c3ecc1a5752cda170d29b8da21403a03443f8ea6e07a97","sha256:807fa4a3a5ba677ccb5a040e506f42ee7f70df5d2706bdf54d0a1f6187713f2e"]
      - values: {"m":"1","T1":-15,"T2":10}
        answers: ["sha256:4ec53976eda2c40766e6dc061a8f94e1ef168fbfb9346a324e5f0edef5d4f2e7","sha256:f151d73b96987109ae565299ba0e0f1c80ec7c41d87e04cd797f2feb93756b50","sha256:a2d524bd8a3a14df3f9d2bf64f4ecc966924faf2ae6487b2be34e3a10c062b7f"]
      - values: {"m":"0{,}3","T1":-2,"T2":60}
        answers: ["sha256:4da8dd12e74374b6836511dcc46869418bda949f41c656901566f218f1dc2ce6","sha256:5923cc6e124dd66d0020a2d32c9498fa1ebaee41dc5d9d7f1cd83d0c45e409b6","sha256:1c4bad8b74f0d601ee01e9a1241938db06f26b29eb9a0808e58866f3cb351204"]
      - values: {"m":"5","T1":-8,"T2":25}
        answers: ["sha256:80e823651c07169e620a28b53e1fc57af478a6c551a15089f9b2a27b61e87752","sha256:66900757889e8e20bfd7586260bc58de201bb35cbc8ebb630c7a99e418b5c2ec","sha256:fe3c505d3870bce1cd428b25956ce4dd98dc0d5a33d462b7910563c91ab9add8"]
  - id: conduccion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una pared de ${{A}}$ m² y ${{e}}$ cm de espesor, de conductividad térmica ${{k}}$ W/(m·K), separa dos ambientes con ${{dT}}$ K de diferencia. ¿Qué potencia térmica, en W, la atraviesa?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"k":"0{,}8","A":"12","e":"20","dT":15}
        answers: ["sha256:1f65cccbe38eb073360e39a4d908fbce6258d4903183ff7c66d57c0da4d74123","sha256:4858bc334ef46b17d13261911c460394aa63d90ea783a04824f4260346898824","sha256:f7da4ac908b52b1ebc6d80ffe98facb9b630903621e49fc74112b8ce5a520ff8"]
      - values: {"k":"0{,}04","A":"30","e":"10","dT":25}
        answers: ["sha256:4b7185bd81013373df67549020e00cba95b1c0de1757b1b8d36cc7da6d3fe2e9","sha256:fd2995ceb0814cf43d39faacf526f6c20ab068045dc87d587628fb230554a1ab","sha256:0a2e5bd9cdf472c988f171c6a8216183f19269a43e3eb055989730623489fdc4"]
      - values: {"k":"1{,}7","A":"2","e":"0{,}5","dT":30}
        answers: ["sha256:ce4c6e7af8d36f5485c9ec626f6af51bccf0dcab8741f6e72ed10bc200b3dd20","sha256:b5dc47543cf7a6c832a2bd52447cf69ad2fc5b67def2a30e4b4d56e06c0d26fc","sha256:d7ee910ccbb47b495b97f2e9a7f82016a11229a3563a8daed9e3ab850df3455b"]
      - values: {"k":"205","A":"0{,}01","e":"50","dT":80}
        answers: ["sha256:230f12792110caae06095fb6bec6a5ef48c6bdaca763ceadc5f69aad629e1a71","sha256:80143845cbba71d0e74d0d325bd9b57c46a5c6edf280f632297e7369f7d17131","sha256:a920f27557e1fb0eb26bdfdad62e47b76d8d3d494fc0119b78d86675c07bb2fe"]
      - values: {"k":"0{,}6","A":"9","e":"25","dT":12}
        answers: ["sha256:59c5694e55ecd86ce40e6de9fa7f735210c7e27c68e587892c1d1be00354b6cf","sha256:cda38d58cfb29b534e6b601e815783e2aec3d653ead5fd2e611e391942443c1e","sha256:22cf668b90c1d4a601ce120c866f4d2681c9e24d49fd2afebad1ac8a61f2e65e"]
      - values: {"k":"0{,}025","A":"50","e":"8","dT":20}
        answers: ["sha256:5171c1014c18708eea4477413bf000f119d3dade864b158a937ca91f33acef7d","sha256:cdabe28206bfa8d1fa1f5a0678dd051ef631028bfadc85beb9d738eb4acf6fbd","sha256:f6228f7cfef2ebe5c7a88744305fdd268f32873f4be5b5678e142da82129ad70"]
  - id: radiacion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué potencia, en W, radia un cuerpo de ${{A}}$ m² de superficie, emisividad ${{e}}$ y temperatura ${{T}}$ K ($\sigma = 5{,}67 \cdot 10^{-8}$ W/(m²·K⁴))? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"e":"1","A":"1{,}8","T":310}
        answers: ["sha256:4fab2b555bc71174ed3c9d2b25a2fc08dcb8dfefc1a10428d401e21ff1dd2624","sha256:b035fbeca2478302b0be6b3d5a4dace84e907c506611da6996e7a3c27f849cc9","sha256:642e238cdb17acd69184837fda999e646a6e6299e61b6d36ea11537cfe27c7ce"]
      - values: {"e":"0{,}95","A":"0{,}5","T":600}
        answers: ["sha256:ee5be75519e35eb19d0142c0a4a8383a23a398f43f7b374e4f2774cfe741238c","sha256:3b94f725cbc763eaf79c115bba00ed142c7620f50a88bcda6d77fd505388d1f5","sha256:34574966b2f552c6bc9b5f394dd15829f586c3a94a37b568787b8a033aee22ed"]
      - values: {"e":"0{,}3","A":"2","T":400}
        answers: ["sha256:53731a21a0f937d6d7d73762988d4aec7e0c031d9cb18110ea6a1967e17aeeb8","sha256:485d741b6d1198989970914b2fdb9a38c7f551c6d147f8fa9db7f844514d9533","sha256:13b202868ebe97f3cb32be7f5c5a3164d5480031823384c71146f72824163e88"]
      - values: {"e":"0{,}8","A":"0{,}01","T":1500}
        answers: ["sha256:d23afabcda1affcea53a7494ae3f916680369b519563dfb131bda5072481a533","sha256:3373708c80a596aecdcb5588752194fb8c05f71eb358cc02c61aa5a457fd20b1","sha256:20f436ed5bd50ea041118f10341ca42c014fa4ff2bec7a2cff064190d93cb8f6"]
      - values: {"e":"1","A":"0{,}25","T":1000}
        answers: ["sha256:99b761778f2806e4cad36a0bfa179969f6e57283ff3268f36d53405628aadd3b","sha256:e2fd7462d71d64d57da2f88405986baa68a6b26f6ca4a0a2fb028bb3ca24cf34","sha256:40a374e71e4387f7d5377f53bd28e409ed0a257c1387b61d19aaf9ba72ea0800"]
      - values: {"e":"0{,}6","A":"3","T":350}
        answers: ["sha256:2e91aa50168a6cf9881b3c62893f392eebc204ae38ad842dcf22c17976d387db","sha256:18ec8061c62af7b5c5135618d2bcb0d52b63cbe9733718e64dcd37e85f33c032","sha256:b2d14e8afbf71d97a314be737b6183244e239cc6bbe0c0e0b4a0a6a21e6c1b55"]
  - id: gas-ideal
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una cantidad fija de gas ideal está a ${{p1}}$ kPa, ocupa ${{V1}}$ L y está a ${{T1c}}$ °C. Si pasa a ${{p2}}$ kPa y ${{V2}}$ L, ¿cuál es su temperatura final, en °C? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p1":"100","V1":"2","T1c":20,"p2":"150","V2":"1{,}5"}
        answers: ["sha256:1b04165c925d72a6b8777aa6799ce3b03d5926a4adcf291536a829038fefaf87","sha256:5bf8cabd9135665cdf9d23c5d83141d605361368ff04c50c9696d07669d49c00","sha256:7ceb9606fe55ad1aabf6b54552c40e47fa744e860410e7b34886df0cde5e83fe"]
      - values: {"p1":"200","V1":"5","T1c":27,"p2":"100","V2":"12"}
        answers: ["sha256:7e126d591ea33e9c4846b4034ce45a84ab294702412391abae365ce2c10e2c68","sha256:13c2a81afaf955056fc441ab2fd1d66cd50d4f7d2df9794a7ae48f68744e3d82","sha256:b35799ecd33dd0f3f739b0b1a1db0fe1cd1c75ce0a9ccd88d0594b4e2d78e8f0"]
      - values: {"p1":"101{,}325","V1":"20","T1c":0,"p2":"202{,}65","V2":"15"}
        answers: ["sha256:74d72a682c5130ef6e26b08abdb46ff0b194f460883dbab4f424690937da9f2c","sha256:d9f41926fbc593b669a1b1df64c84458397ccd263d532c07c37061d9e3c809b7","sha256:141e1b0977a2d50d6c41388558e78764bc6b48ecfac6595f7b14d08bacfd157c"]
      - values: {"p1":"300","V1":"1","T1c":100,"p2":"150","V2":"2{,}5"}
        answers: ["sha256:8de9f5c899f9ac1a6a4a699b625b0ff5c9401f697f3b4cb44495eaf7b6e1f4e6","sha256:f74829206fe98f6291eb56249b4b62af617713dc0ca9b3b60e4e5f61a7d86dea","sha256:d93d2280986d03c44c6e2fe8a948e781f9ab2d89a65f4312407d8ad50eb38419"]
      - values: {"p1":"80","V1":"10","T1c":-10,"p2":"120","V2":"8"}
        answers: ["sha256:7dd92fddd18f68e26a16c7f94260e4ea7b61536942f817b3a30328ff64b19c6f","sha256:bb690e37d037f72c83c7992809924766169fdd9ad08cbf91a577400874c772fc","sha256:e41f5ecc4a4aa7da1f1681f393d3c295face77c120a94940d433858cb379b956"]
      - values: {"p1":"500","V1":"0{,}4","T1c":50,"p2":"250","V2":"1"}
        answers: ["sha256:4affc43db3d080bfc28cedb23214041de601027ad6a18850294c9a106eabfd81","sha256:1004b27a229e09599b2a2ef66ad6e3d747734d09945bcf8f058e43efcb0bb1fc","sha256:8f7a42bf2d3a85bba8f04e338a72ef90fd23b4cce838f148849be0cd274d891c"]
  - id: trabajo-a-presion-constante
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un gas se expande a presión constante de ${{p}}$ kPa desde ${{V1}}$ L hasta ${{V2}}$ L. ¿Qué trabajo, en J, hace el gas?
    variants:
      - values: {"p":"150","V1":"2","V2":"5"}
        answers: ["sha256:b95f6e42b790bcac477db7a62a9485a63a678cc40d4e1d6276e2aad051171df3","sha256:6df11e8e8d69b39e1e34c491bbccd257495a1acb0c39420505043a8ff16617df","sha256:26440ad2394bc32affa31cb9440f786a464cfe393f5a713fd20577f25a7566d7"]
      - values: {"p":"101{,}325","V1":"10","V2":"12{,}5"}
        answers: ["sha256:4d7f26a6f6a50be6a8f1339f0407990bf74ebce9bf7226807a9946798da59c90","sha256:7301feb6f0ecebb9e776bbe043a93982ce36a3f1ab6ce895bcd35fc3d9ccb279","sha256:8549c21d53a8567c4e94f205480314758cffe92e38220ae8abe8901b3c404e5f"]
      - values: {"p":"300","V1":"0{,}5","V2":"2{,}2"}
        answers: ["sha256:dc4dab0731ca3a07fcc1c0474f9d616faca07eb97e54813c9780b6840f019d50","sha256:acfb3dabe7291e29a78e76d7f72183f434f8460ed2931a9ca81fb601bd1cc7bc","sha256:e385c1f364fedac3fca9a6de0aa8ae88ee7c87695c4f96123bbc929a687fddba"]
      - values: {"p":"80","V1":"20","V2":"35"}
        answers: ["sha256:b0bbd9eade62d91cb06dd363dc2594157645745825b04abd7744c6523a0ca506","sha256:aebf5414b2b3930684054bf0816ce834daa31fe7f4ba0f2ba6fee34b6d9815f1","sha256:beca04b462c41e967a8f30b738805022c93f624660618d3f47b120ff9de135ea"]
      - values: {"p":"250","V1":"1{,}2","V2":"1{,}8"}
        answers: ["sha256:35170a45e1cb2bb04d92316ef745ad172ab7a57689c6c60064f22a499d4b8eb2","sha256:96c99c17f9c2931e8bfb39cfab49fdb31df9ac527df01012e745f6060e001e1b","sha256:808118d65b147e1807b3c0e3fba625fa26a5af3ac55056e326096ff0fd377e52"]
      - values: {"p":"500","V1":"3","V2":"3{,}5"}
        answers: ["sha256:4a927583f446f0eb100be925c88b9d6833cf58f9691ccc06ae399389ddfcb615","sha256:15cba0e32ffbb663d97ea4a4900cfdbf72782ff591a3d07e384490c17b26bc1c","sha256:2a508b886e71c4af5b93c450db1c43a0d4c69e2b47e8b8b966490cb2533eafb4"]
  - id: primer-principio
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un gas absorbe un calor $Q = {{Q}}$ J y hace un trabajo $W = {{W}}$ J sobre el exterior (con signo: $Q < 0$ si cede calor, $W < 0$ si se hace trabajo sobre él). ¿Cuánto varía su energía interna, en J?
    variants:
      - values: {"Q":500,"W":200}
        answers: ["sha256:779ea364a705ddcb8d81837edfb82ac3193d1582d621d893c555c65ec35ffe04","sha256:6541098a3d4de335abf36ee3383dcce33cdcf3821fb51159b3bc6e2e05581c11","sha256:20341bc422e2ca5372163a8d8e76fdeb0dd4987b4d2add9cf67660692bba552b"]
      - values: {"Q":1200,"W":1500}
        answers: ["sha256:749c5bcbe9a9a692de1ebd820b85c5e4bb38f4d4402bd6d5f43965c4766e0d94","sha256:15b56fbfcf49d5845fe7aae4dac59804887afa3c9b25791584e35d5db585e02b","sha256:d94728d129eea98fb459eb45a91b82df6582f7124265797fc3c7eb4c8dea5be4"]
      - values: {"Q":-300,"W":-100}
        answers: ["sha256:77841b33e4b04f46f1cb869385a67102b726b41e41536f5a9c1e2ba6dde471c5","sha256:0e693c23fc8ff362237022962ebad96c12d5a5cdd0c51c5a0283cf59660135b9","sha256:9e82a7072252e97b15570e62762363162cd18eb80e2277cab864d797c18f478e"]
      - values: {"Q":800,"W":250}
        answers: ["sha256:a6cc05d8e8bae579f4ce6b23df32129f589c1f09a4938bf430c665c4fad15e59","sha256:96f8371c21b5b27732f6b69662ea38f3077f792b4aed51a437293feebae9d66b","sha256:e6233ffc3d937c392608c4a447352261adc6d99939ae99d1aa6785edd9b4c4e8"]
      - values: {"Q":0,"W":-450}
        answers: ["sha256:9f6ffe154363d6b04fce57ea32d6a1e921fd36d5a1e2c3c5b1b128cc68384018","sha256:67db704a8b6f7a58f800e979df7759e8a6b08210975610723ea8e6a3e7c0f695","sha256:dd134151f0f4c4aa3d53c9dba5b637bd1c2107bf71b88cb3adfdfb14b840e24e"]
      - values: {"Q":2500,"W":900}
        answers: ["sha256:f5806751f6123a41568c79dfe49bbfdfc0700417bf986dd93c0c07878ed3785e","sha256:797a41f6bf002d46396032531f06d80f259f2dcfa2f04e89c8b798137c3aae9a","sha256:8f6c95e284324b80ec3b84e83541b412ef7381b88650cbf0897128e933ab51a1"]
  - id: velocidad-de-las-moleculas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la velocidad cuadrática media, en m/s, de las moléculas de un gas de masa molar ${{M}}$ g/mol a ${{T}}$ K ($R = 8{,}314$ J/(mol·K))? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"M":28,"T":300}
        answers: ["sha256:d23f5a99ca039bd0543c225ff1eb2e0ff6bc2fbc6064bca4ad31fe2c69689d89","sha256:b15a66f6c32a2fd43232f30de895ddffd938ffb6691b2685ac95e2edbd370672","sha256:10f2bbc8f4f97cc54ba69057a571d10d386a77412cb692505b6791a9d6c3eb40"]
      - values: {"M":32,"T":273}
        answers: ["sha256:7b3d444a0e9b7150be4d8503e8e9f43d63010c7157d1ecfa3cb0f6666b05e01a","sha256:90eacdbfc2208d4785b817c3f6b943e4f7d2696962ff9b966b84398db72932af","sha256:643f541b444d3e10937cff513c337065dac9acad0a7ba67d83e83f43473019c4"]
      - values: {"M":2,"T":300}
        answers: ["sha256:cdc59249f34c3214fddf339dda89e4af2b576f67e916a25f0d7928f5aab38704","sha256:306467267a90e35ef1cae6e5195f14ae4b81c8bcabe46425674f00f0ba26a517","sha256:0c775939799091c61cd0ee7c19a92d46ac53c03bf6ce261bdfcb868f799f3ae1"]
      - values: {"M":4,"T":1000}
        answers: ["sha256:b138c902cd8d39552fe341a2ca7ff4be165af1cea466a8d9b76998b88bc95267","sha256:79272de340e818cab1262a734f2de1af6f4b7a0d23c6de07ff725107533f32e1","sha256:11e0abc5e2779d6228e71bbacbdf0bbc1d7effdca21c1c3ff7583526619faf84"]
      - values: {"M":44,"T":310}
        answers: ["sha256:f7efa83a60f896a6522d342f3cafc0be331b6aee3b175317e9e1ba7f28384e94","sha256:31cf6ffa52afad73827aeaaf08cafffb86aa8cc1a874c0ddebc85fe28e153cd7","sha256:48d51c57135459c5a82f5dec0a9459ba4d02909940acd0c8aaaf24b3287e7f4c"]
      - values: {"M":18,"T":373}
        answers: ["sha256:be28053a00c7521f5ffce8062c09e234e7e0b0069055f6ef834e62574bd23462","sha256:d5a7286baab1a2b569f20a1407f2c4550c6e06f9de13054f10a70bf627fdc233","sha256:3977220498d95fac1bbd942ee03b0892daae4780563fbbd8bad57e5c0de075ef"]
  - id: calor-y-temperatura
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica la diferencia entre calor, temperatura y energía interna, y qué es el equilibrio térmico. (b) Explica por qué el agua de una olla deja de subir de temperatura
      mientras hierve aunque se siga calentando, y por qué una quemadura con vapor a $100$ °C es peor que con agua a $100$ °C. (c) Explica los tres mecanismos de transmisión del calor con un
      ejemplo de cada uno en una casa.
    sealed: "gz64:H4sIAAAAAAACCo1UTYsbRxD9K8WggzQMirOQHBRy8voSfEqOUQil7pK21j1Vs/0hshj/GB+FWQj46Jvmj5nqkXalEINv6pnp9169V0/vm6ShZFZpVk3bznHRtvAWoW0z9QNFzCVi20LPniAgkFDcjU8IjmU8ZHYIPXlGqK8TDBjz+OSK/Z4HheMnh4FJMh2/LJYT8jMGS6YoBk8Jsnq8YujZRU1u/DwYi6cArlAcFOaeBhJPkLHf8HgQI08Feky4WMKbsJa2dRg0TsjPiCSQ4/hREme1O0XOkAiao8KgETxvKZK4aaYLF34BUYPDsFN4KJfXj58yyQ6PX5Zwq+n01IjBqWR0WadZnQlGgSoO7jBlBN4VDBghlbSWC7q0MqseCgfeRFbI4yH27LRtYT5EFscDKziKuliuxUaebyy82xJRMoH5ZXR10i0m6q7cxUFjRo+QCEqq3iQaMGKsOfYaxsMpxkltwGwxdjB7+/cefoWb9bq7+ennGbz77Yd3u0VX3RHA0pPkOs83l6UDTONT9TDgpcVrSQQ9SmYSMrTZj69ezeD47+uTWXYlEdDe5KPtjFrgUM8dYDDDPUnCmAiSbmKlGJhCB448ASVNMLsWD22LnvrxY2rbadHqxIkk8SaQwZJsIxvoCvri7hTs6yqHAuCuINTl7Tn1eBXjORtn2bTtaxVfnOPxs7Ttqi7ceUU6C+qlP4AXhw4SC/S6597KVDPtMVNkhPmz4LM7yeFg93PE/XhIUzcNjTzoNGDklDFMJUDYW2Ri5akK93SlcC1XxAGGqLZ721DYazdt2lRySGVD8GiPtnF8UtjgPcK8CET0jN7GnT7FahxHOqm7ww1nrLRVxu/2/ZVPKh4TUCCXo/a4O61UOnlDnvXCC9P5h4YXF9YyEZ1m7erglHLZ1qKzbCPGqPeaFsuma2LZRHbN6s/3jYtsTmuzam45ZZZdoYmlu1xeG/s//2wdPIKnLUtdk/8pszENRbKmZnXzobvievPPEKwyzyOdGmi9sCZvSghcHYJHe/BQqEdvQpzK1IjvgXcvG9nZ4Rw+PE6ZTQeDpHvqh6DpGvWvD18BCMmNjkQGAAA="
  - id: r-cero-absoluto
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿A cuántos grados Celsius está el cero absoluto ($0$ K)?
    answers: ["sha256:c814abcd934297b3c06f21c257ec74991c78b3880ea4ea479ed540dc9335c759","sha256:cad66f57d475e86a46cde72d4c5310f2e95041dc2049086da9c8e00606f1dbe1","sha256:67c9f02544121cfa69774df5ef28c3ed39f5a7f4baf13677e61f3efeaba756d8"]
  - id: r-mismo-salto
    tier: 1
    type: opcion
    review: true
    prompt: |
      Una diferencia de temperatura de $1$ °C, ¿cómo es comparada con una de $1$ K?
    options:
      - |
        Es mayor en kelvin
      - |
        Es el mismo
      - |
        Es mayor en Celsius
      - |
        No se puede comparar
    answers: ["sha256:edf59e63881dca995e85abea69cab69ef812376e52d2a5f862f4c353a1d8256e"]
  - id: r-calor-especifico-agua
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué el mar tarda mucho más en calentarse que la arena de la playa?
    options:
      - |
        Porque el agua tiene un calor específico muy alto
      - |
        Porque el agua es transparente
      - |
        Porque la arena es más densa
      - |
        Porque el agua refleja la luz
    answers: ["sha256:3e989101fe838329805b294e1df8cae9990b91f8216d9b8a10a798cbdbb877e5"]
  - id: r-vacio-termo
    tier: 2
    type: opcion
    review: true
    prompt: |
      El vacío entre las paredes de un termo, ¿qué formas de transmisión del calor impide?
    options:
      - |
        La radiación
      - |
        Ninguna
      - |
        La conducción y la convección
      - |
        Solo la convección
    answers: ["sha256:9e9ed017294e0fa589d2b76a58a0027faedba8eff6ac661cc4364500497aee4c"]
  - id: r-doble-temperatura-kelvin
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un gas ideal a volumen constante pasa de $300$ K a $600$ K. ¿Por cuánto se multiplica su presión?
    answers: ["sha256:f5af15c0bc1688f498d9801812c96b01ecd27fdf04a063f7fcf06cb99ef24245","sha256:071be39822576ce60b76ddfbf3e27c0e0e0c9ad2c9ae3d4a14f6a34a58058aa7","sha256:18b012979ee1728738e003c3b4d4fa5b6a649ae524bdd2d4bb2d030f4deb23dc"]
  - id: r-isoterma
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      En un proceso isotermo de un gas ideal, ¿cuánto vale la variación de energía interna, en J?
    answers: ["sha256:8aec5a500ed63ff53277df45289618ffa4fb0b9d0155ffc1c1d594f6f75262d4","sha256:e5c5d1150ef5b3834563542c168598843b626d36e70924c25064a9794158d7df","sha256:b7c988ec76331dfeb638c5849a20bf07b06850a5c2c5fafe67d571a01a4228f6"]
  - id: r-radiacion-doble
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si la temperatura absoluta de un cuerpo se duplica, ¿por cuánto se multiplica la potencia que radia?
    answers: ["sha256:26a45bcac0309dc7fe10a1f585d29d3e119239d8e37b792e03cd45bacf114f2f","sha256:72ba9a510d699183d4949c30fda6c69af00b9bf9ab4356e5d09fd198ee613502","sha256:fe704cd0ef89af8c6c1a9ded84eb7d874dc19ba5eb57e93d9f3f7553a56a7f8e"]
---

# Calor y temperatura: escalas termométricas, dilatación, calorimetría, cambios de fase, transmisión del calor, gases ideales, teoría cinética y primer principio de la termodinámica

Por qué una olla de agua tarda en hervir, por qué los puentes tienen juntas de dilatación, cómo funciona un motor de coche o una nevera, por qué el
clima de la costa es más suave que el del interior: todo tiene que ver con el calor y la temperatura. La **termodinámica** estudia cómo se transforma la
energía cuando intervienen el calor y la temperatura, y su primer principio es la conservación de la energía en su forma más general. Este nodo
presenta la calorimetría, los gases ideales, la teoría cinética y el primer principio.

## Objetivos

Al terminar sabrás:

1. Distinguir temperatura, calor y energía interna, y convertir entre escalas termométricas.
2. Calcular dilataciones, calores sensibles y latentes, y temperaturas de equilibrio.
3. Describir y calcular la transmisión del calor por conducción, convección y radiación.
4. Usar la ecuación de los gases ideales e interpretar la temperatura con la teoría cinética.
5. Aplicar el primer principio de la termodinámica a procesos de un gas.

## Qué debes dominar antes

[[fis-trabajo-energia]] (energía, trabajo y su conservación) y [[fis-fluidos-presion-flotacion]] (presión).

> [!question] Test de entrada
> 1. Trabajo de una fuerza de $200$ N que desplaza su punto de aplicación $3$ m en su dirección.
> 2. ¿Cuántos pascales son $2{,}5$ kPa?
> 3. ¿Cuántos m³ son $4$ L?
>
> Respuestas: $600$ J; $2\,500$ Pa; $0{,}004$ m³.

## 1. Para qué sirve

- **Energía**: motores, centrales térmicas, frigoríficos y bombas de calor (se completa con el segundo principio en [[fis-termo-estadistica]]).
- **Edificación**: aislamiento térmico, juntas de dilatación, climatización.
- **Cocina, industria y medicina**: tiempos de calentamiento, fundición de metales, termómetros, fiebre.
- **Clima y meteorología**: el agua modera el clima por su gran calor específico; la convección mueve la atmósfera.

## 2. Temperatura, equilibrio térmico y escalas

> [!practico]
> Si dejas una cuchara metálica y una de madera en la misma habitación durante horas, las dos acaban a la misma temperatura, aunque la metálica parezca más fría al
> tocarla (porque te roba calor más deprisa). Dos cuerpos en contacto intercambian energía hasta igualar sus temperaturas: el equilibrio térmico.

- **Temperatura**: medida de la energía cinética media de las partículas. **Principio cero**: si A y B están en equilibrio térmico con C, lo están entre sí (por eso funcionan los termómetros).
- **Escalas**: Celsius ($0$ °C fusión del hielo, $100$ °C ebullición del agua a $1$ atm), **Kelvin** (absoluta, $T = t + 273{,}15$; $0$ K es el cero absoluto) y Fahrenheit ($F = 1{,}8\,t + 32$). *Ejemplo:* $37$ °C son
  $310$ K y $98{,}6$ °F. Un salto de $1$ °C es igual a uno de $1$ K.
- **Dilatación**: casi todos los materiales se dilatan al calentarse: $\Delta L = \alpha L_0\Delta T$ (lineal), $\Delta V = \beta V_0\Delta T$ con $\beta \approx 3\alpha$. *Ejemplo:* un carril de acero de $30$ m ($\alpha = 12 \cdot 10^{-6}$ K⁻¹) se
  alarga unos $14$ mm con $40$ K más. El agua es una excepción entre $0$ y $4$ °C (por eso el hielo flota y los lagos se hielan por arriba).

## 3. Calor y calorimetría

El **calor** $Q$ es energía transferida por diferencia de temperatura (en julios; la antigua caloría vale $4{,}186$ J).

- **Calor sensible** (cambia la temperatura): $Q = mc\Delta T$, con $c$ el **calor específico** (agua: $4\,186$ J/(kg·K), muy alto; metales: cientos).
- **Calor latente** (cambio de fase, a temperatura constante): $Q = mL$. Agua: fusión $L_f = 334$ kJ/kg, vaporización $L_v = 2\,256$ kJ/kg.
- **Equilibrio en un calorímetro aislado**: la suma de los calores intercambiados es cero (lo que cede el caliente lo gana el frío), $\sum Q_i = 0$; de ahí sale la temperatura final.

## 4. Transmisión del calor

- **Conducción**: por contacto, sin movimiento de materia; a través de una pared, $P = \frac{kA\,\Delta T}{e}$ ($k$, conductividad térmica: alta en metales, baja en aislantes como el corcho o el aire quieto).
- **Convección**: por movimiento del fluido (el aire caliente sube); natural o forzada (un ventilador).
- **Radiación**: por ondas electromagnéticas, también en el vacío; un cuerpo a temperatura absoluta $T$ emite $P = \varepsilon\sigma AT^4$ (ley de Stefan-Boltzmann, $\sigma = 5{,}67 \cdot 10^{-8}$ W/(m²·K⁴)).

## 5. Gases ideales y teoría cinética

> [!practico]
> Infla un globo y mételo en el congelador: se arruga. Las moléculas del gas, más lentas, golpean menos y con menos fuerza las paredes. La presión de un gas no es más
> que el efecto de billones de choques por segundo de sus moléculas.

- **Ecuación de los gases ideales**: $pV = nRT$, con $T$ en kelvin, $n$ en moles y $R = 8{,}314$ J/(mol·K). Un mol ocupa unos $22{,}4$ L a $0$ °C y $1$ atm. Para una cantidad fija, $\frac{pV}{T}$ es constante (leyes de Boyle,
  Charles y Gay-Lussac).
- **Teoría cinética**: la temperatura absoluta es proporcional a la energía cinética media de traslación de las moléculas, $\frac12m\overline{v^2} = \frac32k_BT$, de donde la **velocidad cuadrática media**
  $v_{cm} = \sqrt{3RT/M}$ ($M$, masa molar en kg/mol): cientos de m/s en el aire.

## 6. El primer principio de la termodinámica

La energía interna $U$ de un sistema cambia por el calor que recibe y el trabajo que hace:
$$
\Delta U = Q - W
$$
($Q > 0$ si el sistema absorbe calor; $W > 0$ si el sistema hace trabajo sobre el exterior). Un gas que se expande a presión constante hace $W = p\,\Delta V$; en general, el trabajo es el área bajo la curva
en el diagrama $p$-$V$. Procesos típicos: **isócoro** ($W = 0$, $\Delta U = Q$), **isóbaro**, **isotermo** (en un gas ideal, $\Delta U = 0$ y $Q = W$), **adiabático** ($Q = 0$, $\Delta U = -W$).

> [!formal] Con rigor: la presión de un gas a partir de los choques moleculares
> Una molécula de masa $m$ que rebota elásticamente contra una pared perpendicular al eje $x$ transfiere un momento $2mv_x$; vuelve a chocar cada $\frac{2L}{v_x}$ en una caja de lado $L$. La fuerza media de $N$
> moléculas es $\frac{Nm\overline{v_x^2}}{L}$ y la presión, $p = \frac{Nm\overline{v_x^2}}{V} = \frac{Nm\overline{v^2}}{3V}$ (las tres direcciones son equivalentes). Comparando con $pV = Nk_BT$ se obtiene $\frac12m\overline{v^2} = \frac32k_BT$: la temperatura
> mide la energía cinética media ([[fis-momento-choques]]). $\blacksquare$

## 7. Errores típicos

- Usar grados Celsius en $pV = nRT$ o en $\sigma T^4$ (siempre kelvin).
- Confundir calor y temperatura.
- Olvidar los cambios de fase en problemas de mezclas con hielo o vapor.
- Equivocar los signos de $Q$ y $W$ en el primer principio.
- Calcular la conducción con el espesor en centímetros sin pasarlo a metros.

## 8. Resumen

- Temperatura, equilibrio térmico (principio cero), escalas Celsius, Kelvin y Fahrenheit; dilatación.
- $Q = mc\Delta T$, $Q = mL$, $\sum Q = 0$.
- Conducción $\frac{kA\Delta T}{e}$, convección, radiación $\varepsilon\sigma AT^4$.
- $pV = nRT$; $v_{cm} = \sqrt{3RT/M}$.
- $\Delta U = Q - W$; $W = p\Delta V$; procesos isócoro, isóbaro, isotermo y adiabático.

## Repaso: lo que debe quedarte dentro de un mes

1. La diferencia entre calor y temperatura.
2. Cómo se calcula una temperatura de equilibrio.
3. Por qué la temperatura no cambia mientras el agua hierve.
4. La ecuación de los gases ideales y qué significa la temperatura según la teoría cinética.
5. El primer principio de la termodinámica.

## Siguiente

el tema `fis-optica` (la luz: reflexión, refracción, espejos y lentes).
