---
id: fis-ondas-sonido
title: "Ondas y sonido: ondas mecánicas, ecuación de una onda armónica, energía e intensidad, interferencia, ondas estacionarias, decibelios y efecto Doppler"
area: fisica
trunk_level: 3
prerequisites: [fis-oscilaciones, mat-exponenciales-logaritmos]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 16: «Ondas» (ondas que viajan, matemáticas de las ondas, rapidez de onda en una cuerda estirada, energía y potencia de una onda, interferencia de ondas, ondas estacionarias y resonancia). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/16-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 17: «Sonido» (ondas sonoras, rapidez del sonido, intensidad del sonido, modos normales de una onda sonora estacionaria, fuentes de sonido musical, pulsaciones, efecto Doppler, ondas de choque). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/17-introduccion"
hints:
  - "Concepto: una onda es una perturbación que se propaga y transporta energía sin transportar materia. Si la fuente oscila con un MAS, la onda es armónica: se repite cada longitud de onda en el espacio y cada periodo en el tiempo. El sonido es una onda longitudinal de presión."
  - "Herramienta: v = λ f; y = A sen(k x − ω t) con k = 2π/λ, ω = 2π/T; cuerda: v = √(T/μ); cuerda fija o tubo abierto: f_n = n v/(2L); tubo cerrado: f_n = n v/(4L) con n impar; nivel β = 10 log(I/I₀) dB con I₀ = 10⁻¹² W/m²; Doppler: f' = f (v ± v_o)/(v ∓ v_f), con el signo de arriba cuando se acercan."
  - "Documentación: OpenStax Física universitaria vol. 1, caps. 16-17."
exercises:
  - id: longitud-de-onda-del-sonido
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la longitud de onda, en m, de un sonido de ${{f}}$ Hz en el aire (velocidad del sonido $340$ m/s)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"f":"256"}
        answers: ["sha256:c13c6a8d211b5a1d39eb8a3233f5dc5c9ef8f82fbfd041fe91d39d8e1eeaf415","sha256:892c6c0d8b248113b63a5c03ab6987c63e61835014a81b1f23f789f85b4a5381","sha256:d610be6c83e73ef9d7d1a7c42258dad1734d6e666405119296496004d3b51cf7"]
      - values: {"f":"1000"}
        answers: ["sha256:477e63f1482b4370661e8e9348e7d9bee262b7c91ff7959e4a58ab74cc62e942","sha256:c9fb1e3ed1c2580afedd1f296da16db7eddfc3406caf48f09e2a6d010d30f98c","sha256:c188b43b0b92b7d34741f5b813cf9a5024ff486ffd230695ce3a1e7b160d0b70"]
      - values: {"f":"85"}
        answers: ["sha256:8d4ae40f73c21d13cf2e6bbae0dea78dbca58165173133d4fd32e8f4ca01d889","sha256:953266b37c2be184216ac18ab2f36f94bf91cb94f8a9dccf7e210113ca51ed57","sha256:da07d745cb0ac065184c625cd98b900d03c6a683d38774f007f18994241fdd8a"]
      - values: {"f":"3400"}
        answers: ["sha256:6962fd1be9739d07d1732681dfbb61ea54ccfde318eb0fbd90421272b8873873","sha256:bfe03fed4e7be0a34111886d5ee8591daadab50b1fac1c8f001ecc9176da6e79","sha256:a6f2bedad0b0fcee9d83d59508dd0032f83f0a9ea6d2b886904fac4ceb252934"]
      - values: {"f":"523{,}25"}
        answers: ["sha256:88ade3203c7d9d1f9d21685086561bee8c3294b84c3c7ce515863b91de50aea8","sha256:259c3e7b4ad94b67b947147cf4b13cc98b48014ab45983671acb386d8b11ada5","sha256:5c838d13707aa3e6ab5ed5f995389a3045881619a9b19979490832b4c67b4a7b"]
      - values: {"f":"20"}
        answers: ["sha256:d50f799690946ac9f5a5d635c2e919a9a466c5600b57fc90fecd43d0bb5479ba","sha256:b4e6a68e01cf915660d691e75d0ba6656f9a684b8cc0bc0f184ef9bf8c5963d8","sha256:d05a8947abaa0f02d01bf56482f5820aabf1c851f2c0a50d00a33ac651a159ff"]
  - id: velocidad-en-una-cuerda
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una cuerda de ${{mu}}$ g por metro está sometida a una tensión de ${{T}}$ N. ¿A qué velocidad, en m/s, se propagan las ondas transversales por ella? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"T":80,"mu":"2"}
        answers: ["sha256:8f2fc8a228aecffc4a6a60818c1a559fd2c3cd58c0f9430fbb0f4e5d89404006","sha256:a375287550634b53c4aab0c7962781f4fa181e362b236559274bb5591f2619e9","sha256:c9a165d79ddd1c6239d99e169e0da9e100869db4b79a9b07b6927b71ea260d18"]
      - values: {"T":150,"mu":"0{,}6"}
        answers: ["sha256:76397ab9ad430725a9d7c7c5bc1d37f8a81066dc9717c84fcf58f040fbfafe97","sha256:a922002b0a6c6532112c0d008b3a8855c9625b26191dfad29c4cba0501c1f98e","sha256:f288b4ce8d02577e514e65be3607bf28479f56760917ecc75fea30300777bd00"]
      - values: {"T":45,"mu":"5"}
        answers: ["sha256:e30477dfbf9d93738077c0404da3d32ad5ad24837bab8dceacbf942c48e49c07","sha256:9fc261f1f14a5dd3425bf493dc9e128a75fc2cc2afbe002b02d6bf5127b64de6","sha256:a7c1e924f0bcb18946f4bf4251a6c8ae5b23fbcb8958ab19900bfdba55da3367"]
      - values: {"T":600,"mu":"12"}
        answers: ["sha256:813574cadf2ebb9951aa913b7eb2af238635e322a7659c210199eaefcc02a3e2","sha256:6a931c92de042b268018cc781280b4efdd794068af310b95b8add1763bf4a6d4","sha256:d01ba5b0cb505602bca70e179a21221b0b5f7bcf61398c62aa3818fdfd70049a"]
      - values: {"T":20,"mu":"0{,}8"}
        answers: ["sha256:0b39b74c73115b1fa0e5870f13c8c5c38363285a9b51c903924f5b7cc12a777a","sha256:48bf92a9db0af5fd35e30d0b3877eeeaa8c82a23018d69f82401e6f7fe1bb2d9","sha256:13fa079b6a1eeeb0a44f494716a7c11ba72ed067f396959aba861ddb314a583b"]
      - values: {"T":250,"mu":"1{,}5"}
        answers: ["sha256:cbff8a2d286bdc0119980e52c3fd82456f748ee551cd1242e7d8191a983671ea","sha256:85361f521fbcb610b78f0e172d05af0f72abfcd5c1d8147c9f0c921fe232f097","sha256:1e99a4051e6ab18e43c1919a4515aa5e66a9225ed1a2cfc41197a6c422f16375"]
  - id: armonicos-de-una-cuerda
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una cuerda de ${{L}}$ m, fija por sus dos extremos, transmite ondas a ${{v}}$ m/s. ¿Cuál es la frecuencia, en Hz, de su armónico número {{n}}? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L":"0{,}65","v":180,"n":"3"}
        answers: ["sha256:9bd5dcd2e984d599f2ae81690bab7a5ae08e01e8e0ecbc4c838cf7b742aeceaf","sha256:879ce8b55552ef4af50ad2b485c9f2c86b92349ecc1d3ff32e635cb9f34569c0","sha256:a62617a55f75accca764657af8e961440bc5ce4303de0f6fd210d08f6ce40ee6"]
      - values: {"L":"1{,}2","v":240,"n":"2"}
        answers: ["sha256:8d1c91498939090be1b6c8ec4088c011649643673947a524ca6d32bf074fb8ee","sha256:4c133214b1d87965d24fc59bb5c9c848b2d621fa4b6afd7ebb645fcfebfeea7d","sha256:fe164d8400b2d5cb7d65e3fd8aacebeebf34d1bd3fc77c25c518e8862907a9c8"]
      - values: {"L":"0{,}33","v":300,"n":"4"}
        answers: ["sha256:b2ac1a8ed6b51e55f498417a78964a883ea341daf29d9f603d1423e06ee582ec","sha256:ef23a36260cee5e2f5a63021ab53887523b323d11f5c120e535fc2df6882b33e","sha256:eae6af4df690006cf6ad7d3f3f654b8b235c566abc15a8d69d347bf704fdbd60"]
      - values: {"L":"0{,}8","v":400,"n":"5"}
        answers: ["sha256:23335528478b306df9865fc6e030198b5dfd7edffa4aded804b2ede0afb371a1","sha256:3b48b6551a0912467c26fb4472fa72f3d68b38465d791e74989fac38815cc158","sha256:d361a3da2a9aae39b5e26b6f85e52376b80d0c32729cb40cd46f66027667f3c6"]
      - values: {"L":"2","v":90,"n":"3"}
        answers: ["sha256:b31a15a4039025a7a29139fa72d67b36e3f9daff20073d9c42a9e920a0a1a506","sha256:11f765218555356091e0a224577226d2c1c089115767f3aaf54d9491a3084c87","sha256:8dc53bed75c65743711e0027baa4c5e07320aa26e6cf46d6e1ddde0c987a3ee9"]
      - values: {"L":"0{,}5","v":150,"n":"6"}
        answers: ["sha256:009cfe43ef1cf2ede8e6eb007e191c7772f41610db2a41c186ebb9fa62b77824","sha256:f834f66b6c59a732b3d0679c230ae7770589d4d7f9a3bcf730f47d3458270b06","sha256:c4090d151c10bd60b493e9108f84f086733281c95b8757c3fbe00ce933e8a7be"]
  - id: tubo-cerrado
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la frecuencia fundamental, en Hz, de un tubo de ${{L}}$ m cerrado por un extremo y abierto por el otro (velocidad del sonido $340$ m/s)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L":"0{,}2"}
        answers: ["sha256:6d4be970964ca35c1e6e79cc8ad1ea22b59ba07449d268307abc90b8879bfbd1","sha256:0bfeee3c7049194e795c937b70c1eb4fcc910fbe59ff0ce1061582ee003caaf1","sha256:fd7464c05704086010f3641b374a2c15be7f79f67aa344ffc856637b1a8c7854"]
      - values: {"L":"1{,}7"}
        answers: ["sha256:b75c0db992b3ac32f8238ef87bf3cef86d2b23a5b09602c44cf0f3cd3cc5ef42","sha256:19fbdd3ec268412a504887b5cdb976795b7fca6911da2cf8fffccd43de8b3727","sha256:55a5e05cd8316da8e5cc83bec238f165cec217841ac64ce784e08485693b9e4d"]
      - values: {"L":"0{,}6"}
        answers: ["sha256:d856d8fdf2f1fe9a3cef1adb8704f4f0ba0bc6e858bd7c94e5613dca4f9d6d0d","sha256:7e2a660b6fe2e368847097d506af3e13c21173398b98e71730ade5e373d26e94","sha256:f560853d06a25d552781a43fe276674a96eedc46c2922701e9df4ac054940919"]
      - values: {"L":"0{,}085"}
        answers: ["sha256:1e59dc187f5e81e6835fa42d33f069972820cf49079d801933fa9d87221bcf13","sha256:1089f98086698032cd8d56c6f78160d7dc51d766f4a031e0bfee07240b35f88f","sha256:0118daf175a64435bb93350d39899956f4da58895c7bb9c6af8b8f58b591dd7c"]
      - values: {"L":"3{,}4"}
        answers: ["sha256:ffcd2fda16f6beb9dbe5b1de40b37cdd49e991eb97f76bfe93b3dbbe8e915214","sha256:6663ef61aed6b801dc6f64094acf729059b118f7df89e38b3d795f126b8de54f","sha256:72bb4c65b877815d8fbba3905dbc3430307975bffd8a102a683570ac9375ad0a"]
      - values: {"L":"0{,}42"}
        answers: ["sha256:532be2f2050bca9adf1f3f7e58c27557b7e006e5b9058b11503ea78195624beb","sha256:fad8f87f5ac6e81ea4eaaf80b684b2d50732e243b3e45f4d3f8a1eaee7b88fe2","sha256:5fd3e34a9011cda3d0d751a14cbb514e88aeb0c9763abef1477d5c61c105d6a7"]
  - id: decibelios
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un sonido tiene una intensidad de ${{I}}$ W/m². ¿Cuál es su nivel de intensidad, en dB (umbral de audición $10^{-12}$ W/m²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"I":"3{,}2 \\cdot 10^{-5}"}
        answers: ["sha256:81dc44dba54b16b6185380d97f5f5e80a5f761bde76d70cf8f7abedb4cbd0879","sha256:f157c32093df7cf0913495900552db64ddb54d565bcfa3d7e1133200ecaa3e82","sha256:8d4bb98bf227141bfce7cdbb366fd37d326b5fe1e34e44fa3d5c3b245bf7d7f9"]
      - values: {"I":"1 \\cdot 10^{-9}"}
        answers: ["sha256:9f396973e649a6f928f263ab691fa2f48d5ac5a24336decf228cef9dbb3d1796","sha256:c6e640c3c10cc300ae81e4c0e3a2461222268922c88d46370e01d89b3a49988e","sha256:65dfa9855e5c95e91ae47b142e5e7470f80c31d4f19429dfd58e3a7bb6bd450e"]
      - values: {"I":"5 \\cdot 10^{-3}"}
        answers: ["sha256:04b8b1872e4dcafb74104ee8d7171fd007194f79de583d9aa9b15c75b4c0d631","sha256:32519d02dbdebed21a22f951707de71b52f575aa76c2ea01f2c737bda0e442ca","sha256:c2a9eda4955fa30b952f2acdfacda9424e6ccab963569ed2af6216c97f993359"]
      - values: {"I":"2{,}5 \\cdot 10^{-7}"}
        answers: ["sha256:c486c2f2e50e66c0b78ebf46253719ea02751beba64772444c93c3a0438b6839","sha256:b7390755a4df759cece143b0d611d2ae77b6d0fbbe91457ad2eb96a037154205","sha256:78f90a6a593185a77a9e36065d211f9b45d1b13ac9858fb57ada1b925268faa1"]
      - values: {"I":"8 \\cdot 10^{-2}"}
        answers: ["sha256:fa0c1a0c261dc27e7f8130b8fd5fa984da6b75b38a53ffeaaf930796e5b8f025","sha256:61e7f718add518e12a3c03890d95f06681ac83702e845f64042ee1dfdf37c1bc","sha256:103f26e1ef06d4eeb4eac55dfd96ce4719b2f7ba8853cbf5f0a7dbeb1af219f9"]
      - values: {"I":"4 \\cdot 10^{-11}"}
        answers: ["sha256:095c5c8a113f965d0f1279df68761be3bec7addeb05a16c80a95527635721363","sha256:2256523acdfd45885f72e7a5b34e64f787abac0998276bd90c4a94ae08791226","sha256:766440f51932b2e820447fb9d316453ac2a07543322070b7ab44cbadd8b7f02f"]
  - id: nivel-y-distancia
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una fuente puntual emite sonido por igual en todas direcciones. Si nos alejamos hasta una distancia ${{k}}$ veces mayor, ¿cuántos decibelios cambia el nivel de intensidad (con signo)?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"k":"2"}
        answers: ["sha256:4d8439fcfe1334930ddbbab64340b354d60d6c3cf21aebc099f3d56e039cd623","sha256:e19ef5eb52766efc9ac27ac75118f45ad42a9035955874165970db832534bacf","sha256:4ca61a4fb268602da58d3061822bbf29399a25a09c27f5e050f7437bc257e954"]
      - values: {"k":"10"}
        answers: ["sha256:c588d2fa44fb55867e4422e5b647d24132169032c67234e3de2484e313e20ce3","sha256:402d2b71dfe1ddf35765cff4a388e1f658146d8f5c2daee1b68b1761472b1920","sha256:30f72fd5249f8b2c55a72cdcc9436c1f11c099fedebf90ef2b9aa9a3787a0149"]
      - values: {"k":"3"}
        answers: ["sha256:df196cb48435f6be3179d6529a176066623bd39bbcc7ba93c7733657c71720d0","sha256:663cda8b1a2d18d316c6413f30da35748df6b22ba8f9872b7395510a36066265","sha256:8a244cd331c6f6cabf1f0e80323aecefd41a72f5569f84dc8e78a9e25928fd99"]
      - values: {"k":"5"}
        answers: ["sha256:9586678bf961b8d172c40faeaf88e54fd395ef9a511c00a6d9fd4f0c3ed07e47","sha256:2ca8bbd9ff6e579eb06c86015c6c2b8551e3736e543d1396848c68fa67762af5","sha256:b16e26c9b4b9cf40150bb4fd8c53bfe93784d7c8f5e5ac71c63c757540de56ff"]
      - values: {"k":"1{,}5"}
        answers: ["sha256:9425676e0c7cbec6384ef1d06feb1d92e1bf6c14ead548c1a147ba6f076db7a7","sha256:9e5a73d9d6357820e6a1cdf52599ad69c67b0b9cf0439d02d1a519dcc1c0e9d2","sha256:c2acc560c72e03a6aeafb1249d4df934c8fba2de133d108af283c7b374ba5b5b"]
      - values: {"k":"4"}
        answers: ["sha256:32c60635ab9c1c91867a6bb75ddfafdc0f524d39bcc5d44b1b30318a28f57849","sha256:8af6f4e51503e7361840d0913c152d6000f3d4b664e0d85a56f9023330c52f12","sha256:0cc41bfe96644cb65c973ef72b1b645bc82592c43ab1af16c7b97c4d0e837dff"]
  - id: doppler-fuente-que-se-acerca
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una sirena que emite a ${{f}}$ Hz se acerca a un observador quieto a ${{u}}$ m/s (velocidad del sonido $340$ m/s). ¿Qué frecuencia percibe el observador, en Hz? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"f":500,"u":25}
        answers: ["sha256:582063a338bd21fe3b79219833a1ed1634e9a48692e8ac2dd536aa696ac26bb1","sha256:e1eaaeebae04d748db839d2092ebc746c1bb0ef436938d3d27c22d11b10dcfe9","sha256:f037ce0222bd7ceebd1738965c399eb58fa4e7e111ee54560f51d95ca2e84d8e"]
      - values: {"f":1200,"u":40}
        answers: ["sha256:8cdb13c17b3f63a373f55e060889f6fda0a91bafa48cf5ab960fc503b64ddb62","sha256:a1d71dca609a05c093e5060dc338d09488a438ee8d5f349cf20da64943b65830","sha256:cd642143c67a2ffb00c4e63489dbb8f0c655dc570a2cae3ab602d0c95635b0f7"]
      - values: {"f":880,"u":15}
        answers: ["sha256:5c8102df07ec0298e483501ecb3aee8b7005fd5c4b4ebac56623e0ca51531b63","sha256:e301f44a75d0ce1d8b2b44be81e5ba5b6bad3329ba15bd7af2151b831f9be0c1","sha256:bf01fa8aa0988b781df19e9a1b8c2662ec8e6ab899e34fc3c713341d6a16537d"]
      - values: {"f":300,"u":60}
        answers: ["sha256:d2dbcadcf55e238b45e18f80d8aaa931bb00019babcea785de9f91f4f9e78a25","sha256:3aed32d98e3a0668ed0feedc570f10093520e4cc882d8cb2453c2b176835b877","sha256:46a500f67ceee37334235e299b1d6740a8a7a72b3079b7650e2543b853eee8f5"]
      - values: {"f":2000,"u":10}
        answers: ["sha256:3b65f202ea0fee245f86310aaacd964199f9548b1708909c8d0cf4b0fa3a3fc9","sha256:369a74b0d2ff27ee8d5ddaeda56dc3d5a049c4f0f1b11f338ca36ad4f46c5cd2","sha256:df7b5ab8487f753626fe0d42b1639cc5637a1deab5491c1380b8f0a71428407b"]
      - values: {"f":650,"u":34}
        answers: ["sha256:ab8a83385d849758612d05267618b65921169feabc8caf8b185599ff398fa29a","sha256:213e97edc11886759599576a35d1607eae9115a2376e8920a74ddad1615e2230","sha256:030f93f018a90aa9b14937e1542a98c6f31e6115ffb875395c6e23e0c0e42a7e"]
  - id: doppler-observador-que-se-aleja
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un observador se aleja a ${{w}}$ m/s de un altavoz quieto que emite a ${{f}}$ Hz (velocidad del sonido $340$ m/s). ¿Qué frecuencia percibe, en Hz? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"f":600,"w":20}
        answers: ["sha256:1d8030afa14a4698ec9cfafc5cea64b683eb4b0d4c63ba90cdc922a19e3a8a5c","sha256:50f2554dee542f64c4a4d0eeb86f4c87228a9c1b5b4c66a41cb921d830c019ab","sha256:d97403744080e714bfcef0d5eecc07243efc470f36b18697e48832bcc95c543f"]
      - values: {"f":1000,"w":34}
        answers: ["sha256:0cfd5c9a06ec3ebb66053be8c9a2267f14376a65997eafa769c4e5a8f103d6f8","sha256:937bbf02ac4332a47ae83fd7126b7e6118f45cfa19330634f3d2459c7098f54d","sha256:72ef81ccfc0346799c2a5c3fc40a4b2c80d86ad55e95da5f939a16e26facdbc9"]
      - values: {"f":450,"w":50}
        answers: ["sha256:e7b32e1394577a7fbdb52ab2a3b424aab456f335ff0fa71248fe55543fafd8c3","sha256:59000ecdc58e8bca54af61ad349e3d7647c044b0e58d7d13b49adcbc8a6447cd","sha256:7c2bf2f44108350e101f12b56b9dcfa202a84dbcf29316222b6c42564258e796"]
      - values: {"f":2400,"w":17}
        answers: ["sha256:8f67334b951b8ad6bc0809c4ae576c86ea3593fd752886662024517271d95d76","sha256:f548245a6d66597d55b9b1289211ee3bc7c6ace1680583d9316d321244a6266b","sha256:f3f3e48a5d4a6bf8f893c0fc1d96c7effc43557afa826be579035db8309ea82a"]
      - values: {"f":800,"w":85}
        answers: ["sha256:765b9cc695c199428507540f9de136ef41f8826670f99bdac52bc608a73934cd","sha256:d00d2e2925be9036d7d3510d3ae46f0774bc3bd24e270f753a3df85ec2f204a0","sha256:99751b813bf809d4a946684a3f3912b90eef3b86e6088bad1bd67ad59483cebf"]
      - values: {"f":520,"w":30}
        answers: ["sha256:4d7c63f958f8093965c9384196e4dac47398aee70cf44034876757b4e154804d","sha256:3ea4ecb97c0beb973a21a87ee310bf9d1b4a341fb15dc3eabf43e5f3a7903479","sha256:9cd17077b4e2e8ba58e72aeb89a9c97291a72940c9519250c8655a7eb11377b4"]
  - id: pulsaciones
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Dos tubos abiertos por ambos extremos, de ${{L1}}$ m y ${{L2}}$ m, suenan a la vez en su frecuencia fundamental (velocidad del sonido $340$ m/s). ¿Cuántas pulsaciones por segundo se oyen?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L1":"0{,}5","L2":"0{,}51"}
        answers: ["sha256:56c28aaa8c8fc54cd000b56b86b4bfdc2f4e2cc96c69ca6c5ac6ed82c75357c6","sha256:8a72ad97ca1c894e5d16c42b2df198bf5494a8eb9b401b95ff0fe34e9bdf5258","sha256:60c7fc224a2d8e97da2bc6c7a9dd192db5d2485fe2ebb72620c7d5cc9e090b68"]
      - values: {"L1":"1","L2":"1{,}02"}
        answers: ["sha256:7cc57b87eb4c3ab2a3a3ae17a8dfb4a333461222261580a23e6c42ff9ba78729","sha256:ca1b00f7755946ad5f73b29c9028535a4d338cd6f9f6f82307d2957afc0d7cd9","sha256:51f38e07e1d91d36fa8a940dc940c363e763c6b57fd1bfc2c7588a786d4811b0"]
      - values: {"L1":"0{,}34","L2":"0{,}345"}
        answers: ["sha256:5b02a765f49138fb4af49168d6f819141c1c8dfbe39613711d6be9d9223573b2","sha256:8e2c1d6aaad617574e46bce45ec088272e9b7bde2d5816bcf597cd94bda4dba0","sha256:f5313624ec8165d20939447b00ab080a99613bf698aac8a9ad25e63e06d14f6a"]
      - values: {"L1":"0{,}8","L2":"0{,}79"}
        answers: ["sha256:b23cd924a0889c71b16bb31656069a4514b6edb20e685cb62592d5b2ba4cb5be","sha256:17ad5931e61dc36c49be5cb7c8b357e03e118a6b4aebd743a14b4da6ebd45675","sha256:d8420ce7020c818f9260cdaee4573c445b86b0b644dd0b3d0a06f76cb2f09ad2"]
      - values: {"L1":"0{,}25","L2":"0{,}252"}
        answers: ["sha256:d1494f62a522a82d09a5e315daf810b6d22248d704492bd0e0e91aebe5cdb912","sha256:97edb399d57bddca811d8fab35c2c29058407e6685ce68252f6f885ef5128571","sha256:6171e5667869dd01bf5a58fb3e3c457cd274d344da0d35281f89e7195fb03ed1"]
      - values: {"L1":"1{,}7","L2":"1{,}75"}
        answers: ["sha256:0eaf44eadcd53909ffcfcf18c67a0a0843d3884f3e26fe2532080627f2d71ca0","sha256:ae0298d952b76373882b73ae9298deadf64389d80b23fd0c0afa2b2d4b51c154","sha256:471229db819427ba19b663cc0dcaa6c9b83b0bbe6da0332413a1513123e6e8b8"]
  - id: elongacion-de-una-onda
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una onda armónica viaja por una cuerda: $y(x, t) = A\sin(kx - \omega t)$ con $A = {{A}}$ cm, longitud de onda ${{lam}}$ m y periodo ${{T}}$ s. ¿Cuánto vale $y$ (en cm, con signo) en $x = {{x}}$ m y
      $t = {{t}}$ s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":5,"lam":"2","T":"0{,}5","x":"0{,}3","t":"0{,}1"}
        answers: ["sha256:96c5cc5fc42a65739ae5d4eccf29852df190bb799b8454ff756f81e7e609f4d7","sha256:2605a9564d132fa591f28f7f702f47c964a1f8e8935331a69ce678700349aabb","sha256:5fb26b6a17feddae11f3c73594fa9c26eec9acacf1190b7075d75ce1072f07e1"]
      - values: {"A":3,"lam":"0{,}8","T":"0{,}02","x":"0{,}5","t":"0{,}013"}
        answers: ["sha256:b796be28e8964a67d932980c379e77d3ec7fc44d62e3c088897fe865393c6c3f","sha256:f27953352d2be32bc1a9ed93a207be9b0c10df97d4c451c0b6f54e7150957431","sha256:66fd1f478968e467fdfcf8e8094d2591cc6738ef7441c89d771ff8254173c1b6"]
      - values: {"A":10,"lam":"4","T":"2","x":"1{,}5","t":"0{,}7"}
        answers: ["sha256:e99ee8010443584512aec70c3a1ce3c9f4272440c20942d06e50e9d2a1713f50","sha256:8e056ec9b8d90bd184e85d48980990d9830152007007920bee87c0badc2a7c1f","sha256:082303fe485c07806412547112e27700681987e5e429f605c080e7abbc51ad40"]
      - values: {"A":2,"lam":"1{,}5","T":"0{,}25","x":"0{,}2","t":"0{,}05"}
        answers: ["sha256:1df04fe4a1595532efceb30649ade87d1dfc416cf651ba732ff50e672062229d","sha256:af103dd2e0c0bb623e80a9cb0a967cf4ea5184cc8ae302ad1994d1824babbcb4","sha256:68ab94dbfb9016068821f79b78c614f6d058667ac90e6af36dd52fcbe5c9c73d"]
      - values: {"A":8,"lam":"3","T":"1","x":"2{,}5","t":"0{,}4"}
        answers: ["sha256:aea62fbde2b1763bd2d8d8318e9d4d63236e06c75bb49a9917eafe815b81c3d8","sha256:6b342085e0438dc67f318c9cd1a6e79ea75a1c4ba62027e5d73638ea67d51d9e","sha256:43247b461a7ee12b52f6c2fe9989d7a146d640c67c2a61be6c1488d624186482"]
      - values: {"A":4,"lam":"0{,}6","T":"0{,}1","x":"0{,}45","t":"0{,}07"}
        answers: ["sha256:69809a90864af9e94f3359b2f7b70cc0f31a0dd8b7dd5e56f1aa778e4a50a01e","sha256:4bd70241553010436481110bcd2ffa340bc76c67c29aa98bc87238be26e8a42b","sha256:5bf64b8b0586d1b5a6fcd51baf99c2c496aa570256886ad45b254ad64c277453"]
  - id: sonar
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un sonar emite un pulso hacia el fondo del mar y recibe el eco ${{t}}$ s después. Si el sonido viaja por el agua a ${{v}}$ m/s, ¿a qué profundidad, en m, está el fondo?
    variants:
      - values: {"t":"0{,}8","v":1500}
        answers: ["sha256:6ba26d10e638326e0c660c03df088417b57bc00076545e0e4ce8836e5e1b1c3b","sha256:f7982d104dfc8e0d8a2cc29a670839dbce8c6c80e4226d138f98d19c03be4e43","sha256:1e580045a8b4faef3e340e4875247dd328800ad44ebf43fe389ac1569265511f"]
      - values: {"t":"2{,}4","v":1530}
        answers: ["sha256:92deac03de0f478e453198219db896ec4dacfaecb75d17e3cf285639d168fed9","sha256:5a678ee6260af6b3725b443fb61ac0cf520f726690b5c99edb5b043a47d03a64","sha256:af559a8f6b96dd508cef56e3c7859dd25dc112fd8f97bb82b65e3e83665267c8"]
      - values: {"t":"0{,}12","v":1480}
        answers: ["sha256:7b4c88b8a0843800775dfd19bb56709f3ff2274bb31e9468cae641c8e2abb738","sha256:bcae32a7f1ac5c812d5327489ea9976d86610c1224ccc6e515239b8abc03c70b","sha256:c803033315f9e8398763904f597a1a27aa121dbb55683ad915d8d939d64c061f"]
      - values: {"t":"5","v":1520}
        answers: ["sha256:969ad221a4ff85f010acd5239f1830ea260b8bd74ffdae8bd5625b6156790a4e","sha256:5308c2f2d57f7698914425af0a9f6a224cd967013a89eb4b241574cc512efbcc","sha256:819daede0d602d5c1c7aceeace17fe5de1746f2713d5d2e3195f7d91bb3d6696"]
      - values: {"t":"0{,}035","v":1500}
        answers: ["sha256:c89195c34d6f2b56c0960f6c975332ca65d5e3162641e24824377d2972d8ba44","sha256:898265932576dd6f2b59d18ded8d720c873ce2a2915519770f42fd372aa29a01","sha256:f5be2cccf1bb0af1819689f414d7826dacf091fd565ba9045c054e660db59ef2"]
      - values: {"t":"1{,}3","v":1510}
        answers: ["sha256:37f3a3ef234c0cc20f449fac4da876a578de06d53553b4363dd6e0e76be0218b","sha256:8d1ab896d152459677c46ef372490d3e2e96426a5d8d3afcaf1c24f65aeafa50","sha256:6aac7439e2d99a3b4a2f6a1fcb2ce72bba2dddfa5fef0e3d05c2feb6fc1202cd"]
  - id: ondas-y-sonido
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica qué transporta una onda y qué no, y la diferencia entre ondas transversales y longitudinales, con un ejemplo de cada. (b) Explica cómo se forman las
      ondas estacionarias en una cuerda de guitarra y por qué al pisar un traste el sonido es más agudo. (c) Explica el efecto Doppler con frentes de onda y por qué la sirena de una
      ambulancia suena más aguda al acercarse y más grave al alejarse.
    sealed: "gz64:H4sIAAAAAAACCo1UsY7rRgz8lYFhILaguLjShysC5LprU0VBQO/SxhorUuFqjecY/piUKV71PsE/FlA655xLinSG6B0OZ4a8LIrmOiaVxXbRNCtaNw1+EoJKJIxGUga1kdA0LGyH21dqGqzO6LVnGXWNyKiCksakIOho2mJgUzSNKHoa2RI1zRaBJkT9XRE5o+eYFFpCygTKxpGjmsOVikFLCun2TTZ4FdQ7n6aZGJ3YCuWmwR2mk3ecgW1giSnUTOYEGQT/bjrQgSZIrBwvVLZILTKVCbuAM4fRtKeD3P4cU6CyfgbP3ZsmqxzSWGMS79x6IRP6VHpCTMZhwm4RVBC0H4xLUuGCM1iMjEPqkytWsOKMopKidsLiQ1Aybl3GvnLODO6HeqSo600nnTTNaue2vP1N9bfKOCU6kmBQcyLzOCgM431mrzhDLeAvo3GvBft0VKdTXGEXSr2783UNkoQUXbDyjKJZXcqSyshz2TuOif2FaHTYGT0+dNh2snzDC6Tr9kah6zL1u0hPyxZ741BZQqKC5f5XwQvmP13kdL08vV2XWO2rRHLPKOMMsv72TVLQst7gh4whFTKXaDQqI/sUFKZkZsLdHJzSzshdX74tW5y99tEajx2oTj+2706gv/1RQIca9a55mDXHvk454j6N7Giukcd0SmThgYxchSouWdKozyhp5scWqJ2DPz9Eocxzr6k4bYLuCtuJPP0us+dBfGvUWlC5fZ2+5swHkvnpsXqOtuhZ3P378JE7cVItejqrPU4+sIW0S15b7r/DC/bv8p+ulxO+R70uJ5XJo2OF28nc+7CPvT8G/qzujo60wWtGoH6XFDurJSgoYyD3jiCVy2iKTFHhuDqNVhh65s2iXVjdWQqL7c+XRbA0abDYLl6/DDkFmmX492W63yWc8XFw3PyYypjk4Mn9uBru3OMuTwvAR+6HrMU5DJO4i+3Ttf1PFr5s6idmuiWO9nFBykghqZB5zs/uJO85jH7w3tP6sKz/pxln/KjDkNkmnp/T95AG6Cd//gn/y/Uvn8OZJ+oFAAA="
  - id: r-sonido-longitudinal
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué tipo de onda es el sonido en el aire?
    options:
      - |
        Transversal
      - |
        Longitudinal
      - |
        Electromagnética
      - |
        Estacionaria siempre
    answers: ["sha256:f7b4a3738e0463f7c14e41fb719e8c4c9025fd771dfdcbd7d342caf62ce17972"]
  - id: r-vacio
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se propaga el sonido en el vacío?
    options:
      - |
        Más deprisa
      - |
        Igual que en el aire
      - |
        No se propaga
      - |
        Más despacio
    answers: ["sha256:76bd51590082775cfc82adb391d07d46c2099bf432d3ddafb2dad8a98bb0e9d0"]
  - id: r-frecuencia-medio
    tier: 2
    type: opcion
    review: true
    prompt: |
      Cuando un sonido pasa del aire al agua, ¿qué magnitud se mantiene?
    options:
      - |
        La frecuencia
      - |
        La velocidad
      - |
        La longitud de onda
      - |
        Ninguna
    answers: ["sha256:495701a395437a68c3e78d995f0db48320650580bd640c2acf1ffdc7620228e3"]
  - id: r-10-db
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si el nivel de un sonido aumenta $10$ dB, ¿por cuánto se multiplica su intensidad?
    answers: ["sha256:d349ea933d586c49180be69665833532ae39285919af79ae9d460fc79c0d5ef9","sha256:59c8b971b521a428c2fb386e739f39231274f80b04a9e3d1c008e4d743cafa40","sha256:7000b26b293931cdb07f783b5f3067bb736cf0b2c5eb5433ac06843a42de17f4"]
  - id: r-doble-frecuencia
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      En el mismo medio, si la frecuencia de un sonido se duplica, ¿por cuánto se multiplica su longitud de onda?
    answers: ["sha256:0088b8cc2afad6b40a09c97916e7e02d1e0e434fa782ddf26f50e871663b8efe","sha256:01b912128e255ab43b7e3ee2f7e2e5007618bf73286bd6ce97df5f103e8bef6b","sha256:996e970544296fdec3342f65d0d46f07f3548e5f634935e9ab1e587469e47b93"]
  - id: r-cuerda-tension
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si la tensión de una cuerda de guitarra se multiplica por $4$, ¿por cuánto se multiplica la frecuencia de sus armónicos?
    answers: ["sha256:842ca0df560733806cb42b062bd35fa035b5e9bbd20e73efe1d0b7470067f918","sha256:d46aa52cb3bc8158fd2dea7e28f21a981135780326bd36fbfcaae85272a3fc4f","sha256:949e2b8b0752c4522834e5a10a2df114471b8e5bb1481e3bd29428e5dc1c12e9"]
  - id: r-octava
    tier: 2
    type: opcion
    review: true
    prompt: |
      Una nota está una octava por encima de otra. ¿Qué relación hay entre ellas?
    options:
      - |
        Mitad de amplitud
      - |
        Doble de amplitud
      - |
        Misma frecuencia
      - |
        Doble de frecuencia
    answers: ["sha256:379cbeed38175dc76495ad12e8383caf608c138a985ae655a1f49e6b47837648"]
---

# Ondas y sonido: ondas mecánicas, ecuación de una onda armónica, energía e intensidad, interferencia, ondas estacionarias, decibelios y efecto Doppler

Cuando hablas, tus cuerdas vocales empujan el aire, ese aire empuja al de al lado y la perturbación llega al oído de quien te escucha, aunque ninguna
molécula haya viajado de tu boca a su oreja. Eso es una **onda**: energía que viaja sin que viaje la materia. Las olas del mar, los terremotos, la
música, las ecografías y (con otra naturaleza) la luz y las ondas de radio comparten las mismas ideas. Este nodo estudia las ondas mecánicas y su caso más
cotidiano, el sonido.

## Objetivos

Al terminar sabrás:

1. Distinguir ondas transversales y longitudinales, y describir una onda armónica con su amplitud, longitud de onda, periodo, frecuencia y velocidad.
2. Escribir y usar la ecuación de una onda armónica.
3. Explicar la superposición, la interferencia y las ondas estacionarias, y calcular los armónicos de cuerdas y tubos.
4. Calcular intensidades y niveles sonoros en decibelios.
5. Aplicar el efecto Doppler y explicar las pulsaciones.

## Qué debes dominar antes

[[fis-oscilaciones]] (MAS, frecuencia, periodo, resonancia) y [[mat-exponenciales-logaritmos]] (logaritmos decimales, para los decibelios).

> [!question] Test de entrada
> 1. Periodo de una oscilación de $50$ Hz.
> 2. $\log_{10}(1\,000)$ y $\log_{10}(10^{-4})$.
> 3. $\sin(\pi/2)$ y $\sin(\pi)$.
>
> Respuestas: $0{,}02$ s; $3$ y $-4$; $1$ y $0$.

## 1. Para qué sirve

- **Música y acústica**: instrumentos, salas de conciertos, aislamiento acústico.
- **Medicina**: ecografías (ultrasonidos), medida del flujo sanguíneo con Doppler.
- **Ingeniería y ciencias de la Tierra**: sonar, ondas sísmicas, ensayos no destructivos, radar Doppler meteorológico y de tráfico.
- **Base de la física moderna**: luz (el tema `fis-optica`), ondas electromagnéticas y mecánica cuántica (la materia también se comporta como onda, el tema `fis-cuantica-introduccion`).

## 2. Qué es una onda

> [!practico]
> En un estadio, la «ola» recorre las gradas aunque cada persona solo se levanta y se sienta en su sitio. Eso es una onda: lo que viaja es el movimiento, no la
> gente. Si las personas se movieran de lado a lado en la dirección en que avanza la ola, sería una onda longitudinal, como el sonido.

- **Ondas mecánicas**: necesitan un medio (cuerda, agua, aire, roca). Las **electromagnéticas** no: viajan por el vacío.
- **Transversales**: el medio oscila perpendicularmente a la propagación (cuerdas, ondas en el agua de forma aproximada, luz). **Longitudinales**: en la misma dirección, con compresiones y
  enrarecimientos (sonido, ondas sísmicas P).
- **Onda armónica**: la que produce una fuente con MAS. **Amplitud** $A$; **longitud de onda** $\lambda$ (distancia entre dos crestas); **periodo** $T$ y **frecuencia** $f$; **velocidad de propagación**
  $v = \frac\lambda T = \lambda f$. La velocidad depende del medio; la frecuencia, de la fuente. *Ejemplo:* la nota de $440$ Hz en el aire ($340$ m/s) tiene $\lambda \approx 0{,}773$ m.
- **Velocidad en una cuerda**: $v = \sqrt{T/\mu}$ (tensión entre masa por unidad de longitud). **Sonido**: unos $340$ m/s en el aire a temperatura ambiente, unos $1\,500$ m/s en el agua, más en sólidos.

## 3. Ecuación de una onda armónica

Una onda armónica que viaja hacia $+x$ se describe con
$$
y(x, t) = A\sin(kx - \omega t + \varphi), \qquad k = \frac{2\pi}{\lambda}, \quad \omega = \frac{2\pi}{T}, \quad v = \frac\omega k .
$$
Fijado $x$, cada punto hace un MAS; fijado $t$, es una «foto» sinusoidal. Con $kx + \omega t$ viaja hacia $-x$. Toda onda que viaja sin deformarse cumple la **ecuación de ondas**
$\frac{\partial^2y}{\partial t^2} = v^2\frac{\partial^2y}{\partial x^2}$.

## 4. Energía, intensidad y decibelios

Una onda transporta energía; la **intensidad** $I$ es la potencia por unidad de superficie (W/m²) y es proporcional al **cuadrado de la amplitud**. Para una fuente puntual que emite
por igual en todas direcciones, $I = \frac{P}{4\pi r^2}$: al doble de distancia, la cuarta parte.

El oído percibe intensidades de $10^{-12}$ W/m² (umbral de audición, $I_0$) hasta $1$ W/m² (umbral de dolor), y su respuesta es aproximadamente logarítmica. Por eso se usa el **nivel de
intensidad**
$$
\beta = 10\log_{10}\frac{I}{I_0}\ \text{dB}.
$$
Cada vez que la intensidad se multiplica por diez, el nivel sube la misma cantidad. *Ejemplo:* una conversación, $I = 10^{-6}$ W/m², tiene $60$ dB. La exposición prolongada a más de unos
$85$ dB daña el oído.

## 5. Superposición, interferencia y ondas estacionarias

> [!practico]
> Pulsa una cuerda de guitarra: las ondas van y vuelven reflejándose en los extremos, y solo «sobreviven» las que encajan exactamente, con un número entero de
> medias ondas en la cuerda. Por eso cada cuerda suena con unas frecuencias concretas: la fundamental y sus armónicos, que dan el timbre.

- **Principio de superposición**: cuando dos ondas coinciden, sus desplazamientos se suman. Si llegan en fase, **interferencia constructiva** (se refuerzan); en oposición, **destructiva**
  (se anulan: auriculares con cancelación de ruido).
- **Ondas estacionarias**: superposición de ondas iguales que viajan en sentidos opuestos. Hay **nodos** (sin movimiento) y **vientres**. En una cuerda fija por los dos extremos o en un tubo abierto
  por los dos: $L = n\frac\lambda2$, $f_n = \frac{nv}{2L}$ ($n = 1, 2, 3\dots$). En un tubo cerrado por un extremo: $L = n\frac\lambda4$ con $n$ impar, $f_n = \frac{nv}{4L}$.
- **Pulsaciones**: dos sonidos de frecuencias próximas $f_1$ y $f_2$ producen un sonido cuya intensidad sube y baja $|f_1 - f_2|$ veces por segundo; así se afinan instrumentos.

## 6. Efecto Doppler

Si la fuente y el observador se acercan, se percibe una frecuencia mayor; si se alejan, menor:
$$
f' = f\,\frac{v \pm v_o}{v \mp v_f}
$$
(signo superior al acercarse). *Ejemplo:* una ambulancia que emite $700$ Hz y se acerca a $30$ m/s se oye a $700 \cdot \frac{340}{310} \approx 768$ Hz. Si la fuente va más rápida que el sonido, los frentes se
acumulan en un cono: **onda de choque** («estampido sónico»). El Doppler de la luz permite medir la velocidad de las galaxias y el radar de tráfico mide la de los coches.

> [!formal] Con rigor: por qué cambia la frecuencia
> Con la fuente acercándose a $v_f$, dos frentes consecutivos salen separados un periodo $T$; en ese tiempo el primero avanza $vT$ y la fuente $v_fT$, así que la distancia entre frentes es
> $\lambda' = (v - v_f)T$. Para un observador quieto, llegan con frecuencia $f' = \frac{v}{\lambda'} = f\frac{v}{v - v_f}$. Si es el observador quien se mueve hacia la fuente a $v_o$, la longitud de onda no cambia,
> pero los frentes le llegan con velocidad relativa $v + v_o$: $f' = f\frac{v + v_o}{v}$. $\blacksquare$

## 7. Errores típicos

- Pensar que la onda transporta materia.
- Creer que la frecuencia cambia al pasar de un medio a otro (cambian la velocidad y la longitud de onda).
- Sumar decibelios como si fueran intensidades.
- Equivocar los signos del Doppler: acercarse siempre sube la frecuencia.
- Usar $f_n = \frac{nv}{2L}$ en un tubo cerrado.

## 8. Resumen

- Ondas mecánicas, transversales y longitudinales; $v = \lambda f$; cuerda $v = \sqrt{T/\mu}$.
- $y = A\sin(kx - \omega t)$; ecuación de ondas.
- Intensidad $\propto A^2$, $\propto \frac1{r^2}$; $\beta = 10\log\frac{I}{I_0}$ dB.
- Superposición, interferencia, ondas estacionarias (cuerdas y tubos), pulsaciones.
- Doppler $f' = f\frac{v \pm v_o}{v \mp v_f}$; ondas de choque.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué transporta una onda y la diferencia entre transversal y longitudinal.
2. La relación $v = \lambda f$ y qué depende del medio y qué de la fuente.
3. Cómo se calcula un nivel en decibelios.
4. Los armónicos de una cuerda y de un tubo cerrado.
5. El efecto Doppler.

## Siguiente

[[fis-fluidos]] (presión, flotación y fluidos en movimiento).
