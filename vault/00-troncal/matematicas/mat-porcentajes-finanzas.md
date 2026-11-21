---
id: mat-porcentajes-finanzas
title: "Porcentajes y educación financiera: aumentos, descuentos, interés simple y compuesto, TAE, préstamos y comisiones"
area: matematicas
trunk_level: 3
prerequisites: [mat-proporcionalidad, mat-potencias-raices]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 10: «Magnitudes proporcionales. Porcentajes», secciones 2.3 (porcentajes) y 3.1-3.4 (interés simple y compuesto, hoja de cálculo). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2010%20Proporciones.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 6: «Proporcionalidad», secciones 1.4-1.6 (porcentajes, incremento y descuento porcentual), y capítulo 7: «Educación financiera», secciones 1.1-1.4 (intereses), 2.1-2.5 (préstamos, amortización con cuotas constantes, comisiones, medios de pago, banca ética) y 3 (divisas). Apuntes Marea Verde, rev. 27/08/2022 y 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/07%20Educacion%20financiera%203.pdf"
  - "Banco de España, Portal del Cliente Bancario: «¿Qué es la TAE?» y simuladores de préstamos y depósitos. https://clientebancario.bde.es"
hints:
  - "Concepto: un porcentaje es una fracción con denominador 100. Aumentar un p % es multiplicar por 1 + p/100 y disminuirlo, por 1 − p/100 (índice de variación); varias variaciones seguidas se multiplican, no se suman. En el interés compuesto los intereses se suman al capital y generan intereses."
  - "Herramienta: para el compuesto, C·(1 + r/100)^t; para la TAE, (1 + r/k/100)^k − 1; para duplicar, prueba años o usa la regla del 72 como estimación. Si dudas, simula año a año en una tabla."
  - "Documentación: Marea Verde 3.º ESO, cap. 7; Banco de España, Portal del Cliente Bancario (TAE)."
exercises:
  - id: porcentaje-de-una-cantidad
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula el ${{p}}\,\%$ de ${{N}}$.
    variants:
      - values: {"p":"35","N":240}
        answers: ["sha256:df18dd3998949fc380bea5ab831068bc1a2529d2e3cca5204eb3452028004a13","sha256:fa37ae3ce54a29d95634bd88d4a7979138ac641ab9355009b36f8477138a59d3","sha256:3c56478f09e0cc4621828dc86fdbdfd38ba8abda6deb9cf1e0da592cfca86352"]
      - values: {"p":"12","N":850}
        answers: ["sha256:99208c507af9b37e42bfb90c4e5ee053dd1a3e8272c53bc897e11461484f7b4e","sha256:777afc88671bfdb853bf3354165b417471152572a073e8be0a5546db79c79397","sha256:7840c828a2d13adc0e163fbdcf6a683b93534de66b78e923b5a4c12fd6b33e0c"]
      - values: {"p":"7{,}5","N":400}
        answers: ["sha256:75f51fae67edc7e80ec43829fa3647ef4fe06064c9b398f4eb00bc98df251d20","sha256:a77c6678e66498337a8ebdcfc37623e8406b3ca951c67b45bebf356096e5a106","sha256:1485ba21b426291ebb313fba748267c2c15658742e8562df9399fd2773fabff2"]
      - values: {"p":"62","N":150}
        answers: ["sha256:9d2973f6309598e0aafa831d2224f6d5404f2241c092850a9ff165836dc81914","sha256:5dee78bacae74edf695082650208e08656a1952c92009ed0fac20f190bc05585","sha256:20c578afacaa597c4ba13ac2a5e0ac302d8313eca975505bc9fae4844fe2ef58"]
      - values: {"p":"0{,}5","N":3000}
        answers: ["sha256:8a58e568417d64c9b179e62879a59f46ed282ff01afa649d6efdadd09f215a5b","sha256:79edda3b1d2de24abd85ae111f01fcae70b815c8843888da9698b3d4a197c069","sha256:fc56307b2af6d47ac902c6a3d87cff3c4c8ca36b48351a43a694c9860d0f25b0"]
      - values: {"p":"125","N":64}
        answers: ["sha256:4729cd91e99599f2810122aeb6d8be3c6826756961527dfd5fd1d847962b7e10","sha256:f68a1a081322a93b3329cb9c61dd9116f1bcd8874f651ee8508f222c2245619a","sha256:3d7c92200c1e8441f8ae6d2bce06e6e33a8f1dde49d5c7ae821f09f7ea7e7611"]
  - id: que-porcentaje-es
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Qué porcentaje es ${{a}}$ de ${{b}}$?
    variants:
      - values: {"a":27,"b":180}
        answers: ["sha256:6682e1634fbc7a0a5585e372d1355012e071b1ea13b1b206a04c2925ca43114f","sha256:16c3ef8587dfd9dbeb2683fdd2f951c6d09a64070e22490164268d995738d892","sha256:d2c2623594f6b56ea0b6fac906fe8947e09c05f191c1fbfaaa2edbd9ac167b65"]
      - values: {"a":45,"b":60}
        answers: ["sha256:41d5bdf10b72aa352510d90d3f39cf2ea94522dcf629e2be31b2e0b705da43c1","sha256:28618aa57449c4aa84869dfabb6124d42580a2e7a34b8876f7bcd6e4a7381f75","sha256:e38742585d8f60a69de282005c01e9171adc001f84c68249e7ec2bd9979eef45"]
      - values: {"a":9,"b":120}
        answers: ["sha256:bba48acbea0ae0ca70b0b5af6fbcf96a1160c7e9474ada293d729c79d450c844","sha256:5eb2707103fb745f82272dd8e29b22ac0844f1a22c76d07e41c1caa6e79831c2","sha256:4f9b1f34971debc86582820a3580124e4af2493f3a55985d34c51d5084bce378"]
      - values: {"a":130,"b":104}
        answers: ["sha256:b9fdd7f9649e27ec2c03d39ff4b5bb3c33080964c29b03e95e1bb180726feed7","sha256:73a7a0e87d08269e5a93ffb1dfb7dbbe5a41d12e173c6199d010e5517de904c8","sha256:6cde8af5f90e5f643e721b476727574935cb06d85925e8f3a629c6b81a4f8f04"]
      - values: {"a":3,"b":400}
        answers: ["sha256:f05e3c8a26ef1349d1658e86cc99d78aec0b1d7b712a407bc10614385b6970e0","sha256:793e54082442dc8d94a54872793360c2a471a54e2029facb7f106851a7e44057","sha256:65f191c239ef9850d2d93e680786e750c6256b4abad94f6ff0f6b3c3e29d92fb"]
      - values: {"a":84,"b":70}
        answers: ["sha256:6e741dcada11ef8ce7734f90878e6cffd10353993efa5b4df631864503fec3b7","sha256:17113a90f5d0f6b986ed4ee25d146e93ea091218985feab1c93b39cb136e76c0","sha256:297985951b0c1b32cc3b551a65db9391bbb7b356074a47c18520a6ce74127161"]
  - id: total-a-partir-del-porcentaje
    tier: 2
    type: numero
    sig: 10
    prompt: |
      El ${{p}}\,\%$ de un número es ${{a}}$. ¿Cuál es el número?
    variants:
      - values: {"p":"30","a":54}
        answers: ["sha256:91a980144a4a4a728c3a8a6eb12dad97a087ae05bef188e189d3a637e41ac7f5","sha256:19cbbe026234add9e0846e41cd4314cc7596d2d50da0fe7268c334e95b6783fc","sha256:9ec1906098b10b8dff65edafdb91a82bcec1006e6c4d5186f7256d6b60f1ee68"]
      - values: {"p":"15","a":9}
        answers: ["sha256:dcc979849d4393154818f012ac451a34cde6342eaa02b0ca62e4b24d8b503f08","sha256:b437d62b61941bcea916fbefe07f20e3714e37f05d4a416d870568e730070fd3","sha256:0d884ec4872d4b4ce1a023b2bd4dcfe308fb93733a71d19a0208881a6ab0f0fc"]
      - values: {"p":"80","a":96}
        answers: ["sha256:78d89d1c58cf255c547e635159e605bd5ba9ff4616c56aa6e4473d18db602dfa","sha256:42ac2997fc00bce65605bbcdf5ddd40810d0f3759ccfb5a4b9f9a29862bfcd98","sha256:ff7540e9f5cb2d478d6fce3f3ebbd89befab9ec4395624b85b639a8411520011"]
      - values: {"p":"12{,}5","a":50}
        answers: ["sha256:c32913819aef40d1e3ca77a90e6372f7ec7b33e80d444dc711177b46e93f926f","sha256:2f4bd6ef3e51b91eb94e0c75656f87c1a57426de2b6ea69bcbd33e36e0b56a7b","sha256:2b9e40ce3e2a2aeaa511531d310dc56fb42e0c6f3ab4aee934094e7e440d1f04"]
      - values: {"p":"6","a":21}
        answers: ["sha256:87ec3852db2917d454419d6a3f8ef8ac358c5c616fb9ce2faf953fed0b2c7d42","sha256:1afcf443cddf552dfc812e9a89718172740c7a44a97e2ad68f936da0ff5ef72f","sha256:13cdd944e36111a4c545b40d164a8f5b215693740f46c047106ba76ff43a02ed"]
      - values: {"p":"150","a":375}
        answers: ["sha256:454ee6bdaa096a19288ddecc05e560a150b369c520d751597a303bd0beb46b16","sha256:2ad0ea32e15183c5f12b416b34268c1e2ab3c012a035f6b065d4c1281dabca96","sha256:224fe2b022e9aee08d5207c27eb63a63ca00ab88ec30ae2770aeebaae2e47dfd"]
  - id: aumentos-y-descuentos
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Un precio de ${{P}}$ € {{op}} un ${{p}}\,\%$. ¿Cuál es el precio final? (Usa el índice de variación.)
    variants:
      - values: {"P":"120","op":"sube","p":21}
        answers: ["sha256:b2c9d08a08a3946c514bdb9dcff4308ffdd8666a0100c32db5b118edb784b68e","sha256:8403c55cc40518434f9a35f74642c6751c99a503937a51df753f6bb6b723f6c6","sha256:8a79d80cd7e8101d765ab2b0f33a275ee8f2d2043c5eac36ec61b8620aeb9991"]
      - values: {"P":"85","op":"baja","p":15}
        answers: ["sha256:4081476fe917064e66c03a0585953b620ae83cac9f8347b1074f0b62e88162fd","sha256:2e8ac3d9260f77d236cde7358ca8f967c9f4c968432d77eab54fccae15768ef2","sha256:fa5efc6094bdf964f5ad8c8003a5b3d9697be4a4c96969840fe58c8aa6cde371"]
      - values: {"P":"2400","op":"sube","p":10}
        answers: ["sha256:53a6e8eeae553db65784abca77476c8ae8f62e1781b4832b3b46e39f5b97c15e","sha256:2f3ae97d845a91a0ef3b0a5a779555eee411efb17d11fcf3c20641e9ad7866ab","sha256:20aef3c879b4de2a55ae37743358e44a14a971a34bc19628fbc700f33719f0ea"]
      - values: {"P":"64","op":"baja","p":25}
        answers: ["sha256:e0bedc9d150a11f65f97d634936fa5decc329c9f2748ea2a8dc8d8db8b36175d","sha256:42adc24a47c63c371e2e158c5b62bb16808771562715d7dbee95bdd44a0cb2be","sha256:a9018c76aac4cdc2649fa801fe00569798d6109596efc8a37f34199663e4f2d9"]
      - values: {"P":"39{,}9","op":"sube","p":4}
        answers: ["sha256:708d20fa2a452413d844d92c2ceee5040456fbcf8db6287c4e9b99dc8342be77","sha256:3262af8d5e38f087fd3bc533b527696123f26eb62324779e3c269fc519997732","sha256:26d6e8b335f873baf5e44e79cdf22ca7d21975586b8da3844e2771857796c16f"]
      - values: {"P":"250","op":"baja","p":30}
        answers: ["sha256:13ec4716814060a33d483c4b19fee065e79681cc34a6608759c7acad9302c99c","sha256:98a4eb4040776394d75073faa373f3ec49571f1e78c53a69ba287728bd5f2d76","sha256:7e0ab140c86dc2de2e2c6931f4661c2730a8c1f7684d8c82fab99c0edd0c39d1"]
  - id: precio-original
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Después de {{op}} un ${{p}}\,\%$, un artículo cuesta ${{Q}}$ €. ¿Cuánto costaba antes?
    variants:
      - values: {"Q":"90","op":"bajar","p":25}
        answers: ["sha256:9f919695a7e63f58457cfbba6d1f4824037710ec5a998ad2a6257c44362139e6","sha256:6c5c1bc332c5f9ffd49cb12276de253a711a5cea6c98acd8621f3896b0a45aeb","sha256:24dd8bcf7a59bf3acc0d36b46f4d46188c1c254446a90a998642f01215d0c714"]
      - values: {"Q":"145{,}2","op":"subir","p":21}
        answers: ["sha256:db5367241f6ac2e4cef60918def960de8ff314afa9cb15a365f107dcaa9cc4b3","sha256:0db3eb62baf732225dfaf456c6f7afb9d848dedebfe8036c748c00469a5e5d8c","sha256:09474348d9e60763befdb81ae7788813622b28f39f69e25a541fb26352ca8d5f"]
      - values: {"Q":"56","op":"bajar","p":30}
        answers: ["sha256:688ed5c8d51357f92f547dcc3edf7c0a067cb3823cc5d43701968e0ab227c8fb","sha256:eb394d4ca5737ded2264f0fb584f73471933f7fedb64e502f435176b00e3eca4","sha256:d2ff1dfceb76b70f34a4f0db237098f943309acdf07fd4674c12b3755a6c9fff"]
      - values: {"Q":"132","op":"subir","p":10}
        answers: ["sha256:871ad7704d67c343b90ab6e32000d26a79b047f455658e029462d5e93a9bd540","sha256:47a905da290c9bb22640e431c4f361a737f50ee0f12e3647a5740f5c09b7a570","sha256:4b1d36223deca9a0763ec114584bcc54fb952b62bacf041e0e2f09725ebb4c31"]
      - values: {"Q":"68","op":"bajar","p":15}
        answers: ["sha256:8e84bdc5e32218cc3a82a164a38927ea423d53afac774699840bdd44ea472cb3","sha256:0ccc1834775af10d48036df96fc702f2b4b5cdabc9951e92f03cb41a13381ceb","sha256:ed1a76cebe80ae84c9df963c3cac9f9b530252c2e6108392ac24d89a06792c54"]
      - values: {"Q":"208","op":"subir","p":4}
        answers: ["sha256:edbb8b60d482b8d07a9cf9a0e8a293d469e67442ad19f8824ae42f0b3f2e8a57","sha256:ff28a1b013b3e0ae9e83bc43210c6df3936a5456ea9fa8d5bf2e784e774740e5","sha256:f98d2d202adb120609d572f2559e3d36c6fcbb839bddb43ec9a5e683b4443ca3"]
  - id: variaciones-encadenadas
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un precio sufre {{L}}. ¿Cuál es la variación total en porcentaje (positiva si sube, negativa si baja)?
    variants:
      - values: {"L":"una subida del $10\\,\\%$, después una subida del $10\\,\\%$"}
        answers: ["sha256:ccd201dcb265d6ab9a59acbc72a0bbfc9e9c3d4996dd6f9f69cb2baeb94d6058","sha256:2b4fdc070505fd2d0087c1804cade5a41e2c2dbfd9dd7432f5c8bc7cf338e7fb","sha256:c8028dc1e8bf895dab30dd63b759c22bf518e939261d97176104f68ffb91aaff"]
      - values: {"L":"una subida del $20\\,\\%$, después una bajada del $10\\,\\%$"}
        answers: ["sha256:aa2f0f8ecc227bfb956a6d0f44dc8b2b00fb2fb15cca8ece4006ac9ddedae50c","sha256:fffd6552a0049e7ebbe44625b9a6daebf5bbc40d286a02818d8d17de9f4d5c19","sha256:643d8972a1ff2e9f61730243657b1da8e2ea8c72a901fbac48bc51288038a2c6"]
      - values: {"L":"una bajada del $30\\,\\%$, después una subida del $50\\,\\%$"}
        answers: ["sha256:f398560c6f4fdfa210b9d13243551c9f61d709bf6069841fc4fbbfedadff005a","sha256:fdfbbe865e82df9cfb38b877fc8dd93c1bfe36c142ef5da9fdb6a663c71dbe5a","sha256:2415b4d892ca079c85df9d8dbf7bd4ecd03f62e31d771b59f90d1ba0c34d3d4c"]
      - values: {"L":"una subida del $25\\,\\%$, después una bajada del $20\\,\\%$"}
        answers: ["sha256:3df394066bf0a6cf08e03fff8b995c41c63051dce8749f28447b211cd74ddd02","sha256:2eaf223291de84224315c2451ab20f56f39502648c43ba5fd20acac13a83b0ec","sha256:f8b53094f0d6a17562a30f9d2c32bafd2d694236449130ace3eff2169a675459"]
      - values: {"L":"una subida del $5\\,\\%$, después una subida del $5\\,\\%$, después una subida del $5\\,\\%$"}
        answers: ["sha256:2521c3cca0a174c2275d9b9ce1120913472cf8615b651f49ef4a12c5f65f17ce","sha256:270209550c14baf275708e76ef68b91ec4edc6552e3159a9168938a97c5fe099","sha256:45fb1312aa624f7e3fba1769b1bba7aa389afe80fd9e8cd467f33f461ab94604"]
      - values: {"L":"una bajada del $10\\,\\%$, después una bajada del $10\\,\\%$"}
        answers: ["sha256:56182668a0a42b29e39af829350d12d2ed0dd726a56534ec5d57e8745f1cd9e8","sha256:ffc243a4cfde07354b133a23c061465a0049184de38f02659bfc8cf9de240cb6","sha256:854cb692d6eb2b39f6f8b34d1d733a5f72a405fa55fa7ca96496e1d1e1296037"]
  - id: interes-simple
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Qué intereses produce un capital de ${{C}}$ € al ${{r}}\,\%$ de interés **simple** anual durante ${{t}}$ años?
    variants:
      - values: {"C":5000,"r":"4","t":"3"}
        answers: ["sha256:5ab47ce1911c1290215a5c1a7096c37a76e402d1f0bb839a44279edab3b04f25","sha256:f276aee596689f028d6463653e057f7ca09220be0038f003743959e723b2184e","sha256:6e579c13cacd9b42f9730b329549752bb4dba09ed032d053a69777acd55f9835"]
      - values: {"C":1200,"r":"2{,}5","t":"4"}
        answers: ["sha256:87b115449e5a69a6fa4f8daee314c81fa3a9cab42b15025568b50abc226f9e49","sha256:eda9d6501d2cf501473c54b426dd2a44d1d5e5ca78285fdecd708be86c9c1526","sha256:db8f09f3ea5dcbbc09b2d20c16e8f575e0286aeda9e90e17ef497f376a5c885f"]
      - values: {"C":800,"r":"6","t":"2"}
        answers: ["sha256:dae0e7c504dd692600496f781329e72edc1215487c62328b88ece1ad4b8ea606","sha256:612684f2c85bd5c689083b5a42d20800731a33a3f9473dc19217fea0bbcaedc3","sha256:6114846ba9d669b10ca56a3ff50294bf8a2470cf23b45f1a96b96e03c50f3976"]
      - values: {"C":20000,"r":"1{,}5","t":"5"}
        answers: ["sha256:7c2ff7fe7bb8aba98930759100607ec087d0261d2e1522c70716a83bbff7bf10","sha256:1b9bb55d9619dcd2e0fa746beb379435a6c98005d23b4647604a9f9ef1d65ff8","sha256:e4bc46b5d8cc84c7b2dee217f0bb5b74b617efa0dcb687c4485bffcf9ff1cedd"]
      - values: {"C":3500,"r":"3","t":"6"}
        answers: ["sha256:d84a780848f44c9db1d31f1be6244eaa1f16ecfadbb051b31426f1ed2d735836","sha256:8b0c5db6ff34b24c2d47424ed3bb48ab2532c1b574a6be49222642a6560ea60d","sha256:8563a7cdaa2dfd469278ae58c17277e75b9126212422ddf4882016348a8eec45"]
      - values: {"C":600,"r":"5","t":"1{,}5"}
        answers: ["sha256:3585e33e07146c6fa1b690888c1fc6e92fd790c6dad01629c6a6260e608243b3","sha256:26a977c2061e8167957ac627cc5790a593942060cfc0c84e27fcd854145cf691","sha256:ad0bffcc3436b8c3ad4f1bea3bf763a943f362273ac3bc0aa94edc1c22dd9abd"]
  - id: interes-compuesto
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Se invierten ${{C}}$ € al ${{r}}\,\%$ de interés **compuesto** anual durante ${{t}}$ años. ¿Cuál es el capital final? Respuesta con
      dos decimales.
    variants:
      - values: {"C":2000,"r":"4","t":5}
        answers: ["sha256:e213feac523594c11e1ba70bfb46084d08ebaa385de0d56a0156c4070f639a19","sha256:19320bf7aa51c83e0fa72f32098ca638e823e575f2b9a32dda34357a99acc3e1","sha256:3dc0060a10665c9b31c952f3b1a26214f236493c3033417923de2ba2b7b2c0b7"]
      - values: {"C":10000,"r":"3","t":10}
        answers: ["sha256:01b1e7ded3a97775e8cac74239b61523da5b6683910f8defb88e0adc79f5bcf0","sha256:cf1504c5e2dfb3e21935fcc49d9ef709a69214300bb44d0ba93fe554d5ebc9f2","sha256:b507944c0b2029ba4868bfa0630861faa84ad87e61c49e5287806ab624eb363c"]
      - values: {"C":500,"r":"6","t":8}
        answers: ["sha256:540376321f127f0febb8f2ffb7c9d14a55cfcf174d057a04e0bc190824236478","sha256:0e34d7e25c1e646dfbba80dce1846c32f333b457a5f0983a4bdd5a8badc57960","sha256:18d8d6da75502a998f8de78ecd196fcf76ac95a826eda5cc45a23c1e6a8d5cf3"]
      - values: {"C":1500,"r":"2{,}5","t":4}
        answers: ["sha256:3fe9309b24e208a9bedfa2ed8f79e31a39e69314733b4eb30e8bd72e06c28e07","sha256:37a794ccf7f88374405ae0d2d697311640c95bcd0016682de2e61f500e8ea182","sha256:6bf9d6cece6f34643fe0692660784c6be25ceb5aa40948342fd4881cecca781f"]
      - values: {"C":8000,"r":"5","t":3}
        answers: ["sha256:cd7ed9822fd6b75a11a9599ab07f637cdc76911135acc05eb7b66718518a590c","sha256:615f5b24370083435efb3ef7c75dfa70dc0c02b89d391a6ad5d384a6a7338ee7","sha256:68235b27ba0e5eb8cb3bc7e84a90522e40cecfce1dbfb022680d97c950c73d41"]
      - values: {"C":3000,"r":"7","t":6}
        answers: ["sha256:60aabcf974b68c8878ffb4faf2ac00047249dcf515a9e156abc588ad3d9e1a93","sha256:73de1d5daa1bf492e2c4b526d64a85c058302ce72adad7efbddd907b239581b3","sha256:4bb960b1019a7e6d29ee4abe4053fb3c48b6fee62395ef0ec48791f3ecb9727c"]
  - id: tae
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un depósito ofrece un interés nominal anual del ${{r}}\,\%$ con capitalización ${{k}}$ veces al año (cada periodo se aplica el
      ${{r}}/{{k}}\,\%$). ¿Cuál es la TAE (el porcentaje que crece de verdad en un año)? Respuesta en porcentaje con dos decimales.
    variants:
      - values: {"r":12,"k":12}
        answers: ["sha256:582392ccef932b3ff72b3a5bbbe126062659cab77cb40f28351f0eba7ef2b311","sha256:90ba22ad1590378a2b18c564ed5422495e9051736de154b2a0558340dc266c82","sha256:d297ddcbe19df0121ef0edca9e6c2e0cab2557431e8b9915add8a94dd55bb06b"]
      - values: {"r":4,"k":4}
        answers: ["sha256:5116c783089f48991d4e374eca20f023439341d91f97adf19bdd99cb178744ba","sha256:c7100867530f115527963d92705aea6a50a6bfa600a5e7d2cf61c262ae040004","sha256:77f1aaa26d7e59b2d0f73d80c18038dd795acdfa565fb3ec9d3354affb7a9a86"]
      - values: {"r":6,"k":2}
        answers: ["sha256:92ba35f35f3ccd7566f7d1bf8a233cf96b8a951fe5256fc546f3dd5d08b238f4","sha256:7828b3b12e1d8764ae4ee2e2bbf780b61bc6d0fe913a3749112adb64bd3dff95","sha256:f355acb38c09f0d2516bdd161e505534db54b6b5c1c9e7ed83f8588229994d6d"]
      - values: {"r":8,"k":12}
        answers: ["sha256:6f810f9fd6cc56e21ff00252e3f7c87fdeb6208dbd4161a53a8369af537bf8a2","sha256:09572db29b8bd625b7bc0e3cd98cd254a277194a2d24f9106b46bf569079830a","sha256:ac36f713859ac6c5bcbe94bb1b3c9510264fc92b4eb9f7e5a177a867c6b7d05b"]
      - values: {"r":3,"k":365}
        answers: ["sha256:b4621d9ddd50dcf735009889cc692ae5e52f8dd46ca3259d6271112019a455a1","sha256:c028f81e3391b9116ae94bb417dec0b79def998e3455398b18a7d7c8c7b6de7b","sha256:b4d488384b0668266a750a63c33eca7ecaacba5700b39f043d780c4b7e160a18"]
      - values: {"r":10,"k":4}
        answers: ["sha256:c3521b3c8059ff985585dd7cbe2181f8445eb468e8cf9ec58d35f4b15f4197b2","sha256:c76e1b4dcf61ea34f6196df7f4accf021adb46714dd49783b5d6a2b0fa09363d","sha256:2d7633da0e1b2b35d9f27a81be10fff59f0c44c8150a2f392ded5eb7ccee448a"]
  - id: duplicar-el-capital
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos años completos hacen falta, como mínimo, para que un capital al ${{r}}\,\%$ de interés compuesto anual llegue al doble?
    variants:
      - values: {"r":3}
        answers: ["sha256:d3dfeedf89fa6ffd43d585de95ce6ad032c00aa56a0ba302b4bc70fb60ddb90c","sha256:56008f8a3d746dbb18e2c25a432deb89bc14e259081b5b52605ba23fcebe124d","sha256:0459cecc097332ea496a625047d38ab8efd62c2e41a857105a096a9038972fea"]
      - values: {"r":5}
        answers: ["sha256:c74394a79c8930f79e081ef8266d9e1d5545e41565a74ec3eb48a180bb057862","sha256:374b92a13c86f0e34e91de146fea938b2591e82f42376996ecfe640e6c6d6c22","sha256:b52e7f925e531944f85fcc1069184bca781fd221b281d31bec65cf7beeb8e16b"]
      - values: {"r":7}
        answers: ["sha256:128f714c86f12de816d7f4a785f6434844884eabc1cc66ff9d320625ca69da08","sha256:e6ea31f716c4dc18bb993735c3977f949070f81a8739112b750231afe059855c","sha256:6118cdd71a6e11c73ccb9fb84fa5fa0d258d057a3468deb1b122aa234aba0ac4"]
      - values: {"r":10}
        answers: ["sha256:c91863bdf39b439db89f1ba5351ec59b7b267a2765e04c8d6e95cc55ee439405","sha256:48301a1f5ff630328a1a8b507b333e1182d0c97e50b86fd2456c8eaf80da86b7","sha256:a5c19e8e3584914986230d81d0a4eae61bc9c54818cdcf91c749ce426705c9e7"]
      - values: {"r":2}
        answers: ["sha256:4621da88e7aefb1337d244f6490ea1c6a3cae7a096a353ff68807d2b3abfb07e","sha256:217ecb8c34b5291832f2e69e9896b0aeff46911e17000789c5439aec734a4917","sha256:3fbf61a66c3e3c1e1f2f139c7f7451f430c6c23916d1d87905e9ace3e4228d5f"]
      - values: {"r":12}
        answers: ["sha256:359905a8e777dc4e422e7b3db91f7258a01993d05c04a2f84a781361a8661960","sha256:501942ae50e668afb6e8f99fa2780d5e620a5a4e9bcc03ed2fc02435a335c988","sha256:1d449872492d4399772c0f0f526b30f6c70d1a63049d89b6f8b01740e35ce4a0"]
  - id: intereses-de-un-prestamo
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Se pide un préstamo de ${{C}}$ € al ${{r}}\,\%$ anual, que se devuelve en ${{n}}$ años con **cuotas de amortización constantes** (cada
      año se devuelve la misma parte del capital, más los intereses del capital que aún se debe). ¿Cuánto se paga en intereses en
      total? Respuesta con dos decimales.
    variants:
      - values: {"C":6000,"r":5,"n":4}
        answers: ["sha256:80b240d566d961d4cf5b6b090d59cc66526e3d4964f88a2fb732fffc700e8684","sha256:fbe433a4639ad0401d04ab3fe88140aaab79831390151093b0f89093c75510f7","sha256:3198a0cd70e829badd04607161115af6dfb7b2558906d62d23274adad0db0b66"]
      - values: {"C":12000,"r":4,"n":6}
        answers: ["sha256:780048e1391904890733fa4ecc4f24acc6125a2bca148945332e79b46da74d9b","sha256:0f89a2559891b8a130256ff3650d329d74d0c519326d55b218d6444cfe5d533f","sha256:6e9bdf56fa26e29bd3856679ba28358888ced96266a717705c036ae4e1855246"]
      - values: {"C":2000,"r":10,"n":2}
        answers: ["sha256:872cadf7d6ecfd5883f32e328922c92a290fa252342a62b9742c170c6d64f034","sha256:1ad5643d9424f268bfd3da56f3c154cdc4dad78e7706041d452284919a89dd2c","sha256:9f9c6a3323a1bb64f1500f0ea8a533fda5451f1ea204bf6d5652f7330e90c97e"]
      - values: {"C":9000,"r":6,"n":3}
        answers: ["sha256:7ea0be16e606cc157202598a52c58c9b6d51911bba81c94ae287119ee6c8d7e5","sha256:bc0680d5c921ba2929422f92aef025e4ffc5288683524b619dec649612ac06f3","sha256:2c460245dd8d080b2e43bdac23c249c32f9ce0f846a0fd227e40a6efae7dccdd"]
      - values: {"C":4000,"r":3,"n":5}
        answers: ["sha256:7b0b27dec62124621d5d4fdfb9f7cb48998657ac1b3cdb7da242068808475df5","sha256:c2d9e8749bc57f95a2fa103066e104c6da9bdb1960b9dc4a6f3464c2144fbd32","sha256:4636a93028f0184584a797f7ff67f6f76fd696fe48655bd2f074822ccce52307"]
      - values: {"C":15000,"r":8,"n":3}
        answers: ["sha256:a61bb845b8d81ead9565c1d9c1ab5c81e7ec9ea4e35af0db959d575caa05f702","sha256:cda73da0e68d9a7ee0f9561efb5db4d0909cd4dabae2e4aac112e57cc8c88cfc","sha256:7efc391fe33fc990fa43ac4f20fd98a21c7b77810b1a24259f9d9c86455fd779"]
  - id: comision-con-minimo
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un banco cobra por una transferencia una comisión del ${{p}}\,\%$ con un mínimo de ${{m}}$ €. Si se envían ${{Q}}$ € y la comisión
      se descuenta de lo enviado, ¿cuánto recibe el destinatario? Respuesta con dos decimales.
    variants:
      - values: {"Q":500,"p":"0{,}4","m":3}
        answers: ["sha256:cbe8d301840e6d4abe30f36182f471cac34856c164d75b7500aeb7a62cf50d56","sha256:53d2179a82893fa33a9621694f9c807c317f17609870aec1d04150323ed86e67","sha256:f41218b50885dff427ebfb7ebaa47ef3fafdf11829d496b1fe5767c9a6e52ee4"]
      - values: {"Q":2000,"p":"0{,}3","m":5}
        answers: ["sha256:1c8fc824515a965045ed8ed6856b62b5e8cd79a691ea223fd129dcdc1f9714fb","sha256:0d4144c5bc3017d5aa50a446fe3e53b982bf6c04de97e42186154dbf63979dbd","sha256:bd23624e9edb78da9df00487fc90cd770897a1759912acb17dfa370c4e9ca38f"]
      - values: {"Q":10000,"p":"0{,}2","m":6}
        answers: ["sha256:f923eeb36686646e62d30ff6cf67b938fe18476c7d5ad1e53b7639511ac005e2","sha256:df8805800ff417cc63b20e1035245d39786a874a64d7fbd4b6d8f510a1f433a9","sha256:fd0fcbe2db2976173d6874cac82467ddc7200a9e4bce412bbd3916d80c5dd6a5"]
      - values: {"Q":300,"p":"1","m":4}
        answers: ["sha256:9c28bd33c1b04c0241d3fbbeb80243544c35ddd0b102205a6d48b7feff5363b2","sha256:eae302833dd0f362c1d5ff515b28a8ea58432d4ed59daf71199f8412bde74628","sha256:7f507c0f60512be80843b277527890d437cbf2515b6e27af5bd1100d1df79648"]
      - values: {"Q":1500,"p":"0{,}5","m":6}
        answers: ["sha256:933a468f48402cbddc337c54b3f18967675655858ed705f263faf1684e072aa2","sha256:614ac2f3a0ce046b086c16a94b6a2604305a71d5edc7d1fb2b74e3a5fbb80f71","sha256:5ba871d80bf0b174bd85fe6d9614dc107a29872be7fd2c895e6014a61bf1be83"]
      - values: {"Q":50000,"p":"0{,}1","m":30}
        answers: ["sha256:b61d6e7f707bd239cf0f3ee2bd4537743b1aa4e4e2a5583c1fc95b00a62378b6","sha256:22656630b74d16a3c7fdbc88e6b271777c24a1a53d8aec11e66551205b8e1042","sha256:afeded901d63d6e8d7a6acf9d0afc4c78b35b09dd57ed8d954b52ae0e7402270"]
  - id: por-que-no-se-anulan
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Un precio sube un $20\,\%$ y después baja un $20\,\%$. Explica por qué **no** vuelve al precio inicial y calcula la
      variación total, usando índices de variación. ¿Qué bajada haría falta para volver exactamente al precio de partida?
    sealed: "gz64:H4sIAAAAAAACCn1STWvcMBD9K4NQIVmEa29bkxhyCr30UAI9Vj2MJYUoaCWvZC27GP+Y/oAcSn+C/1iR1s5+HHoTozdv3rx5AwnOxF47SxryI7baQ7RA1yXnjPMPFFSATTS97owW6KFzHmg1sHFdUjhAi6941cGOmHJg411JC/gWbY+BgTLQeSW0g21UEs9YpUst3M68wLmQrocjAzzkx31NmzwtD/s8zyrgu4OgAG00aBPLNqo06WwBqcBgbpWYsAKNiAYhuNarxDarWq02eHB+tYIbZeCA3IbYauluGWCY3pLq1L6NukfYTL9DZnZL/QXb6Q0Bpz8otXQFPDkP6lVtOuMY0KpMe/UOqvX8uK9pwS23T+gRds7slAc0oK1Oal5QKHhG0+eFpzcrtVBA9xSEs3Dl1B4eoKIs3UoqoT3QVOH82aMYqnHI6HF28o5zt1PeaKuGTyNtINp3e6Qy6Qz1wMYzVD0uXt5EC0Hte3dbwKPbdN61KPT01zZAq5Oe4+QvdZJVlrQgjPjYei1I83Mgwuteee1IQ74G4XWbbAzLjuE8XkuK4JAhp8g0x6/kIWGki7Z3gTTrkV3S7zM4n+giA3isLxFAEGh7LVFCzsD/OB/n+Jz4rBIqoNcItPqYtZ+dguW8XjkK9ZLfi0G/xn/xcc6BjgMAAA=="
  - id: r-indice-bajada
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Por qué número se multiplica un precio para aplicarle un descuento del $15\,\%$?
    answers: ["sha256:1c174d190f265a660b3875f8487b8e3756243e6e9fb0abe60bcf6c28344be7b4","sha256:430a902a48e69113a27cd1a5207063fd9eea75be77f69ef8de200cc56e26388c","sha256:e6dc2dde189e8f9cf1512001e5cffe2fe903bdbd7afc969ccdddc7e32efd1fb3"]
  - id: r-porcentaje-fraccion
    tier: 1
    review: true
    prompt: |
      ¿Qué fracción irreducible es el $25\,\%$? Respuesta: `p/q`.
    answers: ["sha256:f70b94aeb67de2a5eb4bd8c2ea85128f13776cb545a661abe422b378a6cf3099"]
  - id: r-simple-compuesto
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué diferencia hay entre el interés simple y el compuesto?
    options:
      - |
        En el simple los intereses también generan intereses
      - |
        En el compuesto los intereses de cada periodo se suman al capital y generan más intereses
      - |
        Son iguales siempre
      - |
        El simple siempre da más
    answers: ["sha256:f56f0de8a3b6915156ab98349b1d4e6b6e7c5b2e3866da5dea7e90ddade9cd03"]
  - id: r-tae
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué mide la TAE?
    options:
      - |
        El interés nominal sin más
      - |
        Un impuesto
      - |
        El porcentaje que realmente crece el dinero en un año, incluyendo el efecto de capitalizar varias veces
      - |
        La comisión del banco
    answers: ["sha256:cbd289d5dd53551516ed3587fe8d1bd1a26cab817ecf8a0535ed77a3ca6edfd3"]
  - id: r-sube-baja
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un precio sube un $10\,\%$ y luego baja un $10\,\%$. ¿Cuál es la variación total en porcentaje?
    answers: ["sha256:35583231a05dbfb86f6cdd3f4cd0eda29f8290bf96eff9deebcc8ca5c29b3cec","sha256:64ce806203e5d1dc78edd2caf46ccdf003c19ca9543acc0930103763833cac4a","sha256:1fed903de3d1a78d5b27d777dbfdf7ff7685cb52449295516c47cd91fbec3452"]
  - id: r-mas-de-cien
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto es el $250\,\%$ de $36$?
    answers: ["sha256:60cff01a5f5accdd24904cd32eb6655f47a8cfbf81128c76c07ded753f7ec44c","sha256:4c927e3990d3942107171bd08a45a96e11fbaa80bfdc4fa18adbee33cbae7a78","sha256:b3956f4ddd7c1737cf9ae502cb73dea237b30792cf7130e4a85564b62b443368"]
  - id: r-regla-del-72
    tier: 3
    type: numero
    review: true
    sig: 6
    prompt: |
      Con la regla del $72$ (años para duplicar $\approx 72 : r$), ¿cuántos años, aproximadamente, tarda en duplicarse un capital al $6\,\%$?
    answers: ["sha256:7f0f90af5b8fb868610c6da7750972c09c2065cfbd699f04df2e6b8c13c74da7","sha256:93e6e29a5fc924bf9282833363a8c658a0eb94a59c8c1e5ff136d87706c8dac3","sha256:34b3e35e9be56408baa4875d31ad6dcbec6c72c84b59447063893e96dd6a5eeb"]
---

# Porcentajes y educación financiera: aumentos, descuentos, interés simple y compuesto, TAE, préstamos y comisiones

«Rebajas del $30\,\%$», «IVA del $21\,\%$», «TAE del $3{,}5\,\%$», «comisión del $0{,}5\,\%$»: los porcentajes están en cada etiqueta, cada
contrato y cada noticia económica, y entenderlos bien protege el bolsillo. Este nodo parte de lo que es un porcentaje (una
proporción sobre $100$) y llega a las decisiones financieras básicas: cuánto rinde un ahorro, cuánto cuesta de verdad un préstamo y
por qué dos subidas y bajadas del mismo porcentaje no se anulan.

## Objetivos

Al terminar sabrás:

1. Calcular el porcentaje de una cantidad, qué porcentaje es una cantidad de otra y el total a partir de un porcentaje.
2. Aplicar aumentos y descuentos con el índice de variación, encadenarlos y deshacerlos.
3. Calcular intereses simples y compuestos y comparar ofertas con la TAE.
4. Entender la tabla de amortización de un préstamo y el coste de las comisiones.
5. Leer críticamente un anuncio financiero.

## Qué debes dominar antes

[[mat-proporcionalidad]] (proporciones, reparto, regla de tres) y [[mat-potencias-raices]] (potencias, para el interés compuesto).

> [!question] Test de entrada
> 1. ¿Cuánto es $\frac{1}{4}$ de $80$?
> 2. Escribe $0{,}07$ como fracción con denominador $100$.
> 3. ¿Cuánto es $1{,}05^2$?
>
> Respuestas: $20$; $\frac{7}{100}$; $1{,}1025$.

## 1. Para qué sirve

- **Compras**: comparar descuentos, saber el precio sin IVA, detectar rebajas engañosas.
- **Ahorro e inversión**: cuánto rinde un depósito, por qué empezar a ahorrar pronto multiplica el resultado (interés compuesto).
- **Préstamos e hipotecas**: el coste total de un préstamo depende del tipo de interés, del plazo y de las comisiones; la TAE permite
  compararlos.
- **Información**: los medios dan cifras en porcentajes; saber si un $50\,\%$ más es mucho o poco depende de la base.

## 2. Qué es un porcentaje

> [!practico]
> «El $15\,\%$» quiere decir «$15$ de cada $100$». Si en un pueblo de $100$ personas $15$ van en bici, es el $15\,\%$; si el pueblo tiene
> $2\,000$ habitantes y la proporción es la misma, son $300$. Un porcentaje es una fracción disfrazada: $15\,\% = \frac{15}{100} = 0{,}15$.

El **$p\,\%$** de una cantidad $N$ es $\frac{p}{100} \cdot N$. Hay tres preguntas típicas, todas con la misma proporción
$\frac{\text{parte}}{\text{total}} = \frac{p}{100}$:

- **Parte**: el $15\,\%$ de $80$ es $0{,}15 \cdot 80 = 12$.
- **Porcentaje**: $18$ de $72$ es $\frac{18}{72} = 0{,}25$, el $25\,\%$.
- **Total**: si el $30\,\%$ de un número es $45$, el número es $45 : 0{,}30 = 150$.

Un porcentaje puede pasar de $100$: el $150\,\%$ de $40$ es $60$ (una vez y media).

## 3. Aumentos y descuentos: el índice de variación

> [!practico]
> Si algo sube un $21\,\%$, pasas a pagar el $100\,\%$ que costaba más el $21\,\%$: el $121\,\%$, es decir, multiplicas por $1{,}21$. Si baja
> un $30\,\%$, pagas el $70\,\%$: multiplicas por $0{,}70$. Ese número por el que se multiplica es el **índice de variación**, y con él
> todo se resuelve en una sola multiplicación.

Aumentar un $p\,\%$ es multiplicar por $I = 1 + \frac{p}{100}$; disminuir un $p\,\%$, por $I = 1 - \frac{p}{100}$. *Ejemplos:* un artículo de $50$ € más
el $21\,\%$ de IVA cuesta $50 \cdot 1{,}21 = 60{,}50$ €; una rebaja del $30\,\%$ sobre $80$ € deja $80 \cdot 0{,}70 = 56$ €.

**Deshacer una variación**: se **divide** por el índice. Si con IVA cuesta $60{,}50$ €, sin IVA cuesta $60{,}50 : 1{,}21 = 50$ € (y no
$60{,}50 \cdot 0{,}79$, que da otra cosa).

**Variaciones encadenadas**: los índices se **multiplican**. Una subida del $50\,\%$ y una bajada del $50\,\%$ dan $1{,}5 \cdot 0{,}5 = 0{,}75$: en
total, una **bajada del $25\,\%$**. Los porcentajes no se suman porque cada uno se aplica sobre una cantidad distinta.

> [!formal] Con rigor: por qué los índices se multiplican
> Si una cantidad $C$ sufre una variación de índice $I_1$, pasa a ser $C I_1$; si después sufre otra de índice $I_2$, aplicada sobre la
> nueva cantidad, pasa a ser $(C I_1) I_2 = C (I_1 I_2)$. La variación total tiene índice $I_1 I_2$ y su porcentaje es $(I_1 I_2 - 1)\cdot 100$.
> Solo si las dos variaciones son pequeñas, $I_1 I_2 = (1 + a)(1 + b) = 1 + a + b + ab \approx 1 + a + b$ y «casi» se suman (el término
> $ab$ es despreciable). $\blacksquare$

## 4. Interés simple y compuesto

> [!practico]
> Si prestas dinero (o lo dejas en un banco), te pagan un **interés**: un porcentaje por cada año. En el **interés simple** te pagan
> siempre sobre lo que pusiste. En el **compuesto**, los intereses se quedan dentro y el año siguiente también producen intereses:
> «intereses de los intereses». Al principio la diferencia es pequeña, pero con los años se dispara: es la bola de nieve que hace
> crecer los ahorros (y las deudas).

**Interés simple**: un capital $C$ al $r\,\%$ anual durante $t$ años produce $I = \dfrac{C \cdot r \cdot t}{100}$. *Ejemplo:* $1\,000$ € al $3\,\%$
durante $2$ años producen $60$ €.

**Interés compuesto**: cada año el capital se multiplica por $1 + \frac{r}{100}$, así que tras $t$ años es
$$
C_t = C \left(1 + \frac{r}{100}\right)^{t} .
$$
*Ejemplo:* $1\,000$ € al $5\,\%$ compuesto durante $3$ años: $1\,000 \cdot 1{,}05^3 = 1\,157{,}63$ € (en simple serían $1\,150$).

**¿Cuánto tarda en duplicarse?** La **regla del $72$** da una estimación rápida: unos $72 : r$ años (al $6\,\%$, unos $12$). Para saberlo
exactamente se prueba año a año (o con la herramienta del tema `mat-exponenciales-logaritmos`).

## 5. La TAE

> [!practico]
> Dos bancos anuncian un $6\,\%$ anual, pero uno abona los intereses una vez al año y el otro cada mes. El segundo te da más,
> porque los intereses de enero ya producen intereses en febrero. La **TAE** (tasa anual equivalente) traduce cualquier oferta a
> «cuánto crece de verdad el dinero en un año», para poder comparar.

Si el interés nominal anual es $r\,\%$ y se capitaliza $k$ veces al año (cada periodo, al $\frac rk\,\%$), en un año el capital se
multiplica por $\left(1 + \frac{r}{100k}\right)^k$, y la **TAE** es
$$
\text{TAE} = \left[\left(1 + \frac{r}{100\,k}\right)^{k} - 1\right] \cdot 100\ \% .
$$
*Ejemplo:* $6\,\%$ nominal con capitalización mensual: $1{,}005^{12} = 1{,}0617$, TAE del $6{,}17\,\%$. En España la TAE legal incluye
además las comisiones y gastos obligatorios, y por eso es el dato que hay que comparar entre productos (Banco de España).

## 6. Préstamos y comisiones

> [!practico]
> Pedir un préstamo es lo contrario de ahorrar: el banco te deja dinero y tú pagas intereses sobre lo que todavía debes. Cuanto
> más tardas en devolverlo, más intereses pagas en total, aunque cada cuota sea más pequeña.

**Amortización con cuotas de capital constantes.** Si se piden $C$ euros a devolver en $n$ años, cada año se devuelve $\frac Cn$ de
capital más los intereses del capital **pendiente**. *Ejemplo:* $3\,000$ € al $5\,\%$ en $3$ años:

| año | capital pendiente | intereses | amortización | cuota |
| ---: | ---: | ---: | ---: | ---: |
| 1 | $3\,000$ | $150$ | $1\,000$ | $1\,150$ |
| 2 | $2\,000$ | $100$ | $1\,000$ | $1\,100$ |
| 3 | $1\,000$ | $50$ | $1\,000$ | $1\,050$ |

Se pagan $300$ € de intereses en total. (Muchos préstamos reales usan cuotas **totales** iguales, el sistema francés; se calcula
con una fórmula que verás en [[mat-sucesiones-progresiones]].)

**Comisiones**: un porcentaje del importe, a menudo con un mínimo («$0{,}5\,\%$, mínimo $3$ €»). En pagos con tarjeta en el extranjero o
retiradas de efectivo pueden encarecer mucho una operación: conviene leer la letra pequeña.

## 7. Errores típicos

- Sumar porcentajes encadenados ($+20\,\%$ y $-20\,\%$ no dejan el precio igual).
- Quitar el IVA restando el $21\,\%$ del precio final (hay que dividir entre $1{,}21$).
- Confundir el porcentaje de la parte con el porcentaje de cambio («bajar del $10\,\%$ al $8\,\%$» es bajar $2$ **puntos**, un $20\,\%$).
- Usar la fórmula del interés simple cuando los intereses se acumulan.
- Comparar préstamos o depósitos por el interés nominal en vez de por la TAE.

## 8. Resumen

- $p\,\% = \frac{p}{100}$; parte, porcentaje y total con la misma proporción.
- Índice de variación $1 \pm \frac{p}{100}$; deshacer dividiendo; encadenar multiplicando.
- Interés simple $\frac{Crt}{100}$; compuesto $C(1 + \frac r{100})^t$; regla del $72$.
- TAE $= (1 + \frac{r}{100k})^k - 1$; préstamos: intereses sobre el capital pendiente; comisiones con mínimos.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se calcula el total a partir de un porcentaje.
2. El índice de variación y por qué dos variaciones no se suman.
3. Cómo se quita el IVA de un precio.
4. La diferencia entre interés simple y compuesto, y la fórmula del compuesto.
5. Qué es la TAE y por qué se usa para comparar.

## Siguiente

[[mat-numeros-naturales]], [[mat-enteros-fracciones]] y [[mat-proporcionalidad-porcentajes]] repasan el bloque de aritmética; después
empieza el álgebra con el tema `mat-expresiones-algebraicas`.
