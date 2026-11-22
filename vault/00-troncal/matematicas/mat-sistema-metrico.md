---
id: mat-sistema-metrico
title: "Sistemas de medida: magnitudes, Sistema Internacional, cambios de unidad, superficie, volumen, capacidad, masa y tiempo"
area: matematicas
trunk_level: 2
prerequisites: [mat-decimales, mat-potencias-raices]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 7: «Sistemas de medida», secciones 1 (magnitud y Sistema Internacional), 2.1-2.7 (el metro: longitud, superficie, unidades agrarias, volumen y cambios de unidad), 3.1-3.3 (el litro y su relación con el m³) y 4.1-4.2 (el kilogramo). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2007%20Unidades%20medida.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 5: «Sistemas de medida» (incluido el sistema sexagesimal). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_05_Medida.pdf"
  - "BIPM. The International System of Units (SI Brochure), 9.ª ed., 2019, secciones 2 (unidades básicas) y 3 (prefijos). https://www.bipm.org/en/publications/si-brochure"
hints:
  - "Concepto: en el sistema métrico cada unidad es 10 veces la siguiente en longitud, capacidad y masa; 100 veces en superficie (son dos dimensiones) y 1000 veces en volumen (tres). Un litro es un decímetro cúbico."
  - "Herramienta: dibuja la escalera de unidades (km, hm, dam, m, dm, cm, mm) y cuenta los escalones: bajar multiplica, subir divide. Para el tiempo, recuerda que se cuenta de 60 en 60."
  - "Documentación: Marea Verde 1.º ESO, cap. 7; 2.º ESO, cap. 5; folleto del SI (BIPM), secciones 2 y 3."
exercises:
  - id: longitudes
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Expresa ${{x}}\ {{de}}$ en ${{a}}$.
    variants:
      - values: {"x":"4{,}7","de":"\\mathrm{km}","a":"\\mathrm{cm}"}
        answers: ["sha256:c48f7e9dc61249e3c357b32b025815cdb7aa793ea9ca655c69bf1bbe225497dd","sha256:7316643163340679bfff466a2bbd9e786ec625a53f1bb3d23c3f6535b0ba8bce","sha256:f687df4349d6594b68ddd8b62c23acfa1ce415b8d06b8135a3e17e246d08115a"]
      - values: {"x":"365","de":"\\mathrm{mm}","a":"\\mathrm{m}"}
        answers: ["sha256:6498e8082a669dc0dfb57e313cdc78c307f291f376ac7532d27033a377902d57","sha256:ac9e672b6c6bc71f2856725c7c26cdafdd1a08734af7202cd7fde6a71b356b6a","sha256:f57a2c02a935acf5a1da497f9420e16683440c0e19e7e95cee455035c1d36cac"]
      - values: {"x":"0{,}08","de":"\\mathrm{hm}","a":"\\mathrm{dm}"}
        answers: ["sha256:f1ac6a1bda44030f7bf8aad30fde853f85a5cb1ee61d5f0cd309053cce913a65","sha256:09a861ab96d771a3655add5417ccfb8fd4ec867b2a6659690bd278e8c5174f5e","sha256:2c08915319a077ce8417df58b56ba3bf826b9a3dd8ceae1e396db2a4a7be1ca2"]
      - values: {"x":"12500","de":"\\mathrm{cm}","a":"\\mathrm{km}"}
        answers: ["sha256:d36aba2138865e6688224c0976c61861293a0b560808099f66f682dd8cf31a2d","sha256:847233f1530c468b4a5ab5d2bbbf5b912b1e5dc5a73f761acb04f7f3a6c7a595","sha256:01c88fe6f5530dae323b62f431a7aa5f0f651f94fef0c92cff5d66ba8f34ef5c"]
      - values: {"x":"3{,}04","de":"\\mathrm{dam}","a":"\\mathrm{mm}"}
        answers: ["sha256:9a701a526d0a17a2237879f6bcdd449c664e60493caf5f7ae232dc7c7eea10c5","sha256:8dc0974fb3ab38d9aee84282b16ccba0da45552120272994c846b08913598f11","sha256:aa36a7fd184510fe689ad1c33de371b4c9edb05f80f85a2c4c0855fcb0254f02"]
      - values: {"x":"9","de":"\\mathrm{dm}","a":"\\mathrm{hm}"}
        answers: ["sha256:9ac87630fbc79f0b3874f6e0177732ee0094151189391a599beca4c041305e2c","sha256:d0ee570673c838b7227821aa4d6fb0ff4b55905e503c267e1d9c25105802d909","sha256:a333f398f2fc05f5820f1d02f1728d0387b680d94dc76e95bbe6a2d544916e85"]
  - id: superficies
    tier: 2
    type: numero
    sig: 12
    prompt: |
      Expresa ${{x}}\ {{de}}$ en ${{a}}$ (en superficie, cada escalón vale $100$).
    variants:
      - values: {"x":"3{,}2","de":"\\mathrm{m^{2}}","a":"\\mathrm{cm^{2}}"}
        answers: ["sha256:4f742abf951e8daa34b6ce8cba3e2970efff157295bdb9ae25bf45db276b6cd0","sha256:34042f743073bc83035bc91ad7961c79e47903e26847aff5c4d0b7f70045129a","sha256:3cab44d7d77579cd766faaed8b441c98a7eb5ed5ad259157bdf1e9ae5f72c89f"]
      - values: {"x":"45000","de":"\\mathrm{cm^{2}}","a":"\\mathrm{m^{2}}"}
        answers: ["sha256:5883d6e5d3721b535233f4358f5b88e1cae203b31265a9753a278b9af0981c43","sha256:5dad92f3e9467e881de23549c3dc4a7b8fb8b90b59586b5b7b2f77acc59f4a77","sha256:c4b80d49bfbd211454e12d4ce1b885861eb305e69de8513060fc60dddc82922c"]
      - values: {"x":"0{,}75","de":"\\mathrm{km^{2}}","a":"\\mathrm{dam^{2}}"}
        answers: ["sha256:1a28c354428b6cad21a50fe11e6e41f4db1a591cbf6a9ce8781d64fe38daf592","sha256:344796f0bf30f5daba399ec3d9454ec6b141ca35302b7214e78afc886ec118f4","sha256:aea5384db923fee73ab83fa23d3234e598940f85401a00e60f1b7e36e12f4bd4"]
      - values: {"x":"8","de":"\\mathrm{dm^{2}}","a":"\\mathrm{mm^{2}}"}
        answers: ["sha256:cf19cc5acaf3414d672ee9243b0168e0253fb0fc1206551635288bc57a04fd1a","sha256:61197a20fd62c1cbc1d9c1e532238ccb2db4e1519a960ea285d5b38626653b24","sha256:e5720c60288f70139c893e88ff82dd8aa00f52fc6b08d2a879abb1a79d1c36ff"]
      - values: {"x":"250","de":"\\mathrm{m^{2}}","a":"\\mathrm{hm^{2}}"}
        answers: ["sha256:105926f2dc54ed1a03b903d632cf8cb2e9b16a9e3140671fc37f939e26915157","sha256:76f91ec385d52350f7a559edd7ba49af1e2170e922cecd0d364dfcdb3ee1b618","sha256:c6f333f98410dc42755fe3797066fa5294450c8e58476b170f03ffd832e69ede"]
      - values: {"x":"0{,}006","de":"\\mathrm{hm^{2}}","a":"\\mathrm{dm^{2}}"}
        answers: ["sha256:0be65e2e6049028f7b7709791a6b0c5ab01c0b0fe9551c2904e6b6aa03cf5f4c","sha256:ea6f7c524f7bc65b2659c3e5106fa6ee108145843a1800713f158fd82c3b1aaa","sha256:d82456e9be9449b98ad8f511e0c3a314d079e4247ee0c0b3b1b2b302841b102c"]
  - id: volumenes
    tier: 2
    type: numero
    sig: 12
    prompt: |
      Expresa ${{x}}\ {{de}}$ en ${{a}}$ (en volumen, cada escalón vale $1\,000$).
    variants:
      - values: {"x":"1{,}5","de":"\\mathrm{m^{3}}","a":"\\mathrm{dm^{3}}"}
        answers: ["sha256:a85bba9f4bb8e019d5bfc4f34f40187552b2f85ed747e2b8766aebd8de2625bf","sha256:bccff438e0442fb4d02996b3e35d0e67968a22ee955782dadc63d8d6f10805c4","sha256:445e7ca81c4c7e056d0d6524f529ff7ecef96e6a9dcaeb23e073afcd60b9de6f"]
      - values: {"x":"2500","de":"\\mathrm{cm^{3}}","a":"\\mathrm{dm^{3}}"}
        answers: ["sha256:e9f09a000c663631fe6c3d0c2026586cb4e28a6518ec5498d45a37e105a4e529","sha256:3ea3f5ca788306ea975a947729e5ce9cf0545af1a45bc221f0bb5d347cdb7f35","sha256:957d8d245677d34f63ab4777cb65fced7f77f0b34d849b22e609c4a8400f38f8"]
      - values: {"x":"0{,}02","de":"\\mathrm{dam^{3}}","a":"\\mathrm{m^{3}}"}
        answers: ["sha256:6a7e36ca6b3248d09f33a636366a3eda0b99ac3fe2dc9d86530f09013b8883a0","sha256:b3b067a94e77433dc2f2127a58efbda8bcd3b0581f25d9bfbef5b4ad7227cb80","sha256:095ac97f118bb4d1c399be3224a4996517a980e5196ed3932f259ad50f42128a"]
      - values: {"x":"480000","de":"\\mathrm{mm^{3}}","a":"\\mathrm{cm^{3}}"}
        answers: ["sha256:bf77298946b8c81ea92079958cd45956dba129b5831ccd83f95b91afd1aeb473","sha256:53853a6fd246d7c326cedd3727ccb3882135c1d29a3e4059b45954cc2cb10f75","sha256:dae8eda9a454157bf8187943cd189eeef854a12fff0604c49cfcf6cde262d52b"]
      - values: {"x":"4","de":"\\mathrm{dm^{3}}","a":"\\mathrm{cm^{3}}"}
        answers: ["sha256:142e226719737e80952a59871357faae16a6f0d401f1eedbcb12395bdfc2fe57","sha256:61e27d0c2b9a37241656555e04a4530ea6969456d2a0eb9870f71643a3695f3a","sha256:27a8f351d121ba51f9fdbc8b7a6b053cd8150faec369d274e9a2121ca655570f"]
      - values: {"x":"0{,}3","de":"\\mathrm{m^{3}}","a":"\\mathrm{cm^{3}}"}
        answers: ["sha256:54d5b78d8744d9a58720fb95d172cfdd64d37cf6f864159d78a0e11361a5c9b1","sha256:8086ca26ed32a1d16363d62663af587d6451aa84a24aaf14f89f52b9bccf5e74","sha256:081b2114f91c7e39a5330df1ffd2294afceded5c74a1443042fb7253b4a2f813"]
  - id: capacidades
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Expresa ${{x}}\ {{de}}$ en ${{a}}$.
    variants:
      - values: {"x":"2{,}5","de":"\\mathrm{L}","a":"\\mathrm{mL}"}
        answers: ["sha256:4015f9cc504175570ee4180e226be573f6112d8172db11dab3a21fda7b2c82cf","sha256:509f52b8dafa6504822f9ee2449ef71c73c2fcc39a1acb8705207b28de824306","sha256:97111795842afc9b91bc2eaad66cc46ab9a67f512d940ab2cc97ad1f7266b144"]
      - values: {"x":"350","de":"\\mathrm{cL}","a":"\\mathrm{L}"}
        answers: ["sha256:6e1c727e6ab957bf3b7e8704a8da0a603537a110ada96a2c6e63858badae050c","sha256:ba2519e2415e76e22b27877769fbaf80df9ea7ca67c9bd4117b837d4468a23c2","sha256:0aeba1690c17697106b37c4f8588a8280f6ac599dd45a31ff265330d850f622e"]
      - values: {"x":"0{,}04","de":"\\mathrm{kL}","a":"\\mathrm{dL}"}
        answers: ["sha256:171f2911dc4e3ba834c9bac26708ffa45d6963077f53e3bf452a15334f19450b","sha256:3316000397d6253596a4c7be782083e5c2d3baca0eef64ed7545c5c3a531f156","sha256:67571c10e2f04a724f3d582a225a22d733a30dfb06505c31f613369b43283ba1"]
      - values: {"x":"75","de":"\\mathrm{mL}","a":"\\mathrm{dL}"}
        answers: ["sha256:fa680a329c980c8f5e893b4c518049b4902dc6ee1aac656828d10baf374d442d","sha256:092b93a9a292c0423809cfbd121e98d22403afc34967f6cb3bfd6df779379d05","sha256:c4bfc722367f4a163f2fa4ef71991d88840113cb5a8966ae3ee907e4385e8e15"]
      - values: {"x":"1{,}2","de":"\\mathrm{hL}","a":"\\mathrm{L}"}
        answers: ["sha256:6c1b05b5bd09eb867f13846916a1af5b0f4a4d9f5a077c13924b7f3fb284ce10","sha256:cb72601ec5f102a441cdc1720d0da386900bbd3028a845592a9a992519c943c5","sha256:ed793c26b1fb84b81c4b280cd637fa91f2d1cf0c0ba97fb3ac344d8f9945f1e4"]
      - values: {"x":"900","de":"\\mathrm{dL}","a":"\\mathrm{daL}"}
        answers: ["sha256:db7b9ce6355e275376295917ff374fc6c7edb925f752ef30e45d61840adddfc0","sha256:a78d7d6dc38f27a8958c3a9401d6f136c158a3201558169f3d6550652034fea6","sha256:bcc0a7ef1e1932d2bd1e5c26b9b3da376a0a2787045c516519e978e81641c67d"]
  - id: masas
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Expresa ${{x}}\ {{de}}$ en ${{a}}$.
    variants:
      - values: {"x":"2{,}35","de":"\\mathrm{kg}","a":"\\mathrm{g}"}
        answers: ["sha256:f4caf7aedb673649803f8c3ded383aade6fd81ad572e6f7b530dbff9a57e6a48","sha256:6e7ea555db7cd0432612f13599937265cae11d06a00c73b30850402c566fe8f7","sha256:62c651e217bd3902ea7a4080eb9f860999d5ba295b49e83e3d480b94319ce4b9"]
      - values: {"x":"480","de":"\\mathrm{g}","a":"\\mathrm{kg}"}
        answers: ["sha256:e7fcf06da33e24fa90639994538ffd7f66dc57545a16bb76b047ce5a11946c5c","sha256:7de62a0756c973b00a5d2d44affda4234684a19e721357c2a828a5384d011c9f","sha256:7dbfbaee691f861f75b1bc7706f6d425fa0aa11930dd1553629a0da3eede7ae4"]
      - values: {"x":"0{,}6","de":"\\mathrm{hg}","a":"\\mathrm{cg}"}
        answers: ["sha256:3c32facbba100fe7d49b897f2c8c92aa56de2f0088480c71369fbfba6f33f075","sha256:216f92bdf744aaeb7f63e5a021feb8439f1b98d940aeae36f7fda39d54b897de","sha256:2374a0bfbde87291346713e4c6a0ba19b6c850acfedd03c0e2024e245f131395"]
      - values: {"x":"5000","de":"\\mathrm{mg}","a":"\\mathrm{dag}"}
        answers: ["sha256:9a87a6b30489a4ff69f69ebeea31d99541b2382208deb2c1a7212aadfb2b587a","sha256:1f8b1e495e9f75e3ba83c9aea14e3872ab7313340f27895b91a063998f11086f","sha256:d7e5edc3aa12726549b840b554cc8aa3d19de52fe86c7af40a987d5a03ccb429"]
      - values: {"x":"12","de":"\\mathrm{dg}","a":"\\mathrm{g}"}
        answers: ["sha256:9e1149dfba84a1d391c7c9c7f149543065f7c95b1e4478b026c6c7e0cfca5a38","sha256:43d1655b3f0ee289b6c1d763611c8733929e7273d53c471a1e820f24a0bd184d","sha256:9b766160fc7122b9606f46ea84834571e6a5743b8ce54bc0623130f8777bf75c"]
      - values: {"x":"0{,}085","de":"\\mathrm{kg}","a":"\\mathrm{dg}"}
        answers: ["sha256:183f49ad7896c7c6636807d3a95d68823863bc0cd6d32cf656d50859b7631fc7","sha256:f54e551309c4f8c1ed3015970a4105e907618c72b4c5fd178ebe73e81aa36c39","sha256:ac52cf7703a063234a86bf324b3f537cb88dd1141b45caa902ead184f8346f35"]
  - id: unidades-agrarias
    tier: 2
    type: numero
    sig: 12
    prompt: |
      Expresa ${{x}}\ {{de}}$ en ${{a}}$ ($1\ \mathrm{ha} = 1\ \mathrm{hm}^2$, $1\ \mathrm a = 1\ \mathrm{dam}^2$).
    variants:
      - values: {"x":"3{,}25","de":"\\mathrm{ha}","a":"\\mathrm{m^{2}}"}
        answers: ["sha256:8fbcf0f42c5d4b86b291130599134943325b4f81984721401b250a93881eaec1","sha256:426aa1f265bcf209a7c81d6fad77ca631aff2dd3df254c5d91b474f1e109209a","sha256:bd15d4a8e2cfe5ed0da88fd16412580b310d272b8d59db3ee86146ead7f7807e"]
      - values: {"x":"15000","de":"\\mathrm{m^{2}}","a":"\\mathrm{ha}"}
        answers: ["sha256:8a1545505967258eebfa73b01c1fd8ecf132c7cf6896dcb89f553d1db9021ff6","sha256:6abceace52f3a74db00fbe6bc70000b845a483ac4eefe06b6ede8fe3647fe68b","sha256:4c7023b8e21546882b800514af55316c4a2174ec59e5f2d591bf4769581ce34c"]
      - values: {"x":"480","de":"\\mathrm{a}","a":"\\mathrm{ha}"}
        answers: ["sha256:3a48169d4195072d87e52ab4c0e84a704fbb815848645bea27ca40cd518a14a3","sha256:146767eda044de1aa54ab2e311eb98d929487889e590f3c5ede2bf9b95b75036","sha256:f2414acb0b090f167608644dff5fcdbb07e02057724d02a29acdc45bf1a6204b"]
      - values: {"x":"2{,}5","de":"\\mathrm{ha}","a":"\\mathrm{a}"}
        answers: ["sha256:568355a28cced3508f719f6366da1bd61f78949b4de54d9463535812684ea49b","sha256:5d118eb03710afc615db333bea8f171389caa074a10af253e6b1c10fc6c02f4c","sha256:7e5c4741bb04bd4238977e7f3c068026e53759117c40cb1d12f416aed01aac81"]
      - values: {"x":"7","de":"\\mathrm{a}","a":"\\mathrm{m^{2}}"}
        answers: ["sha256:1fd53d8f6d5316658ed19620e89fcbf6fdc3ac63b2c437dd221df2d94152208f","sha256:c13f7f15801c18c92d740da89f157b25730be1269229c1451cd2a93247435517","sha256:4342d482ede6ce4272d61ab85308a98b6d40ac4433dbd4e6e61daccd5b724776"]
      - values: {"x":"0{,}4","de":"\\mathrm{ha}","a":"\\mathrm{m^{2}}"}
        answers: ["sha256:62ab990e4ee30dc355f41af8e3e4448812e417b60ea074e349243967e910b76a","sha256:06bc57a2b8312df64f26491415eee9bc06da9e0654adb5126410bc8b27cbce9c","sha256:e599604e58b599120a2f604dcc86fd843be880e4a7487c9d0842307b5c2aa288"]
  - id: litros-del-deposito
    tier: 2
    type: numero
    sig: 12
    prompt: |
      Un depósito con forma de prisma rectangular mide ${{a}}$ m de largo, ${{b}}$ m de ancho y ${{c}}$ m de alto. ¿Cuántos litros caben?
    variants:
      - values: {"a":"2","b":"1{,}5","c":"0{,}8"}
        answers: ["sha256:e7782da2fa66425afb807f69474dc533d6e6c89eaf3ef0cde4aa100b36ef9120","sha256:dc920f4d86edc0ec9d43bf9ad9f375d1fe8ffe14654a3bc8eb68ec3bf08ce9f8","sha256:7294b64e4a3d72d178a935ec5b34fc4a6533db7f2ee5f2cf362e0a229b3ba87e"]
      - values: {"a":"3","b":"2","c":"1{,}25"}
        answers: ["sha256:5f5bf6c9455434f74729e80e8d0cab5dc366538b4086b0d392d8aa6c94a87229","sha256:429e49d0cdeede937c6873a8776a5b299ccd979bbc1f76b27ebb147063266f68","sha256:4cc8e505f187e27638a0bd6496fa197cd398ef12fae5fb1c41bd9cd19f556649"]
      - values: {"a":"0{,}6","b":"0{,}4","c":"0{,}5"}
        answers: ["sha256:e539d70aab3cf11bdc830d032c852571702c5d406e6951d7278c7a5afe2507a0","sha256:6f0d9396c2b370a7a974ca24e8f8e767becd3369e13d01348e49bc82e8a182da","sha256:94ed76f6edf6a796381fcb51464498d11a88437a831e63ec21271c560f801ebe"]
      - values: {"a":"10","b":"4","c":"1{,}8"}
        answers: ["sha256:03c72e5bf0ec6fa4a0b794bd33257f20f269b0557b916ed8cdf71609632b117b","sha256:47ca5e350f7d9028318f2d5c64cc52b62b9d545fd37686e8e6df386e3f30e913","sha256:538e1cac4bea3008a1e83cc604ceae836c44c0ed8eb91702a47ad099f8465c9c"]
      - values: {"a":"1{,}2","b":"0{,}75","c":"0{,}6"}
        answers: ["sha256:71298316e01f1ec5655fa531d2e3e13cbe26827ba2163d38d91c1ec6e9608475","sha256:778b0a9fed9a6309d5ff6d228234934d8c8b18ce084eb038522ac28b3a7c80ab","sha256:b78d42b310448300972bc66e298f978e8b1245becbb71929c4a813c201a83af8"]
      - values: {"a":"25","b":"12","c":"2"}
        answers: ["sha256:098db32857d2fa1e3380a30f9eb413e08eb0c15747789a9a0a4254106abf37a2","sha256:09513f72eb2d35f42eee2d6bba1f02ef30cd1d3ff15188e6daaca8fa1f66254b","sha256:a4c55a1dee5e94e6ad5945134c0829953affba76bc5cf403f4fd286f6577e8e0"]
  - id: kilos-de-agua
    tier: 2
    type: numero
    sig: 12
    prompt: |
      Una pecera mide ${{a}}$ cm por ${{b}}$ cm de base y ${{c}}$ cm de altura. Llena de agua, ¿cuántos kilogramos de agua contiene?
      ($1$ litro de agua pesa $1$ kg.)
    variants:
      - values: {"a":"50","b":"30","c":"40"}
        answers: ["sha256:2ee2ac02edba564912f5642299fbfd2fc36a5c6c511fdadcfee1032a927f3bf1","sha256:4675b3252f437b2eeb0319d4e5ec3023ff054a3b2d76fd42b9d509c707e8b639","sha256:0b19c06429319f75626a5d350ef3023969895e325fcf612146713c8336c99215"]
      - values: {"a":"80","b":"35","c":"45"}
        answers: ["sha256:c9f043d8fa3a8db8e03b8220bd27390c2358974c21325bc1b186329516c1ff57","sha256:eaa07ba0c72b1e9b35e66a95b5721d2445d892cc17d96a3deb4e8287cfcb9cc8","sha256:0b85398328f8dc030c2de4427f50c69d08cad1cf2aa590f2d5fbcdf64514e0e4"]
      - values: {"a":"60","b":"25","c":"30"}
        answers: ["sha256:0d69574d7e20d6630e612e88ce95e18447b2417fa955278a707b7bfc72273be0","sha256:7a67abbae20f448f574ff9bbdc6078922223fd9c5ecf7a71f7fefd6866d24e87","sha256:a01caaf4ffb1e6a2e74cfabc807069602722def1af11aed3828a9f9154082a7c"]
      - values: {"a":"100","b":"40","c":"50"}
        answers: ["sha256:81c5603ccf0f14de7a782122e4eff8cb4148a9d5bdc30695097e2441aeec37ab","sha256:4436a70145bc82d0ff92b09440df8201b0826513f15766ec15b69291fcb948dd","sha256:07bf6837edfc245a6789ac5a9cc602eec5c1c071a8eecab2d9d515367420940c"]
      - values: {"a":"45","b":"20","c":"25"}
        answers: ["sha256:5c383c4a6d61b56c69d9c0360bf37cb71dbd92ff5a29f425a027b9c2304d7a9e","sha256:544c35f0ac4eccebb6177a6bc9c7478900683b6c586fb742681d57594e61315d","sha256:b06c6fa7349975eabd8902bf023c5662868a060a51c10c234daafe01dea24b41"]
      - values: {"a":"120","b":"50","c":"60"}
        answers: ["sha256:73d563abb4f119616db1a4fccabdedb71876c9c2a926f226f0f694b7c4d940ba","sha256:33cbd46043f828220213f9a365619a704490bf7f903b7460b93c384bfba4bced","sha256:1f836a8e4380db32ff6a003d9d3d51ba8a60802f600d26385dd420bac6f1a4a4"]
  - id: horas-decimales
    tier: 2
    prompt: |
      Expresa ${{h}}$ horas en horas, minutos y segundos. Respuesta: `h;min;s`.
    variants:
      - values: {"h":"2{,}4"}
        answers: ["sha256:77e969326f3690e29bb80df1f8c534698cf2deeabce37169f60f1c1d88b0c458"]
      - values: {"h":"1{,}125"}
        answers: ["sha256:3aaa585b962decd28889eb03e54157953fbe1debe9ee5019250f3af599095ffd"]
      - values: {"h":"3{,}65"}
        answers: ["sha256:a5a0fb1ab1578e41533c72df16444a233eeebd73dd8aacd3a5ab39fca3b26595"]
      - values: {"h":"0{,}8"}
        answers: ["sha256:42339d207542b624d577b40faaf161943112f9433d17198086105f66f848a421"]
      - values: {"h":"5{,}0125"}
        answers: ["sha256:b117aeb223fc10edb7cc8aa7192f59e43c703b43759d73202402f7bb1beaacdb"]
      - values: {"h":"1{,}75"}
        answers: ["sha256:97ae01c5a902d4c6ae35acc8dc9420df8b9e943f7e6d7529e7726a7391dffe34"]
  - id: sumar-tiempos
    tier: 1
    prompt: |
      Suma ${{A}}$ y ${{B}}$. Respuesta: `h;min;s` (con minutos y segundos menores que $60$).
    variants:
      - values: {"A":"1\\ \\mathrm h\\ 45\\ \\mathrm{min}\\ 30\\ \\mathrm s","B":"2\\ \\mathrm h\\ 30\\ \\mathrm{min}\\ 45\\ \\mathrm s"}
        answers: ["sha256:597e4f89e00b303c758deffff5e5bdfa3baf2683bda923726896d2702ef68dce"]
      - values: {"A":"0\\ \\mathrm h\\ 50\\ \\mathrm{min}\\ 50\\ \\mathrm s","B":"0\\ \\mathrm h\\ 25\\ \\mathrm{min}\\ 25\\ \\mathrm s"}
        answers: ["sha256:a7600a7da85b2406bc6d90cdb3437b5cf4be65ce4762dce98eca342d89b7cd62"]
      - values: {"A":"3\\ \\mathrm h\\ 15\\ \\mathrm{min}\\ 0\\ \\mathrm s","B":"1\\ \\mathrm h\\ 59\\ \\mathrm{min}\\ 59\\ \\mathrm s"}
        answers: ["sha256:ef31ee8be974866f3e51de80549b99bc7594e217e8718417c38a04b785fccc84"]
      - values: {"A":"2\\ \\mathrm h\\ 0\\ \\mathrm{min}\\ 35\\ \\mathrm s","B":"4\\ \\mathrm h\\ 59\\ \\mathrm{min}\\ 30\\ \\mathrm s"}
        answers: ["sha256:29a5d757bd0f8616a7bdb639ba09de775a3a5163252a374e4c6a0db2e0725e81"]
      - values: {"A":"0\\ \\mathrm h\\ 0\\ \\mathrm{min}\\ 45\\ \\mathrm s","B":"0\\ \\mathrm h\\ 59\\ \\mathrm{min}\\ 20\\ \\mathrm s"}
        answers: ["sha256:b6655a3ed576a38f7a204bce32c2513b426cb6c3cfdebcbc965d544c237354bf"]
      - values: {"A":"5\\ \\mathrm h\\ 40\\ \\mathrm{min}\\ 10\\ \\mathrm s","B":"6\\ \\mathrm h\\ 25\\ \\mathrm{min}\\ 55\\ \\mathrm s"}
        answers: ["sha256:44d00ed9724f5c8fd344128c4ca0aa22cd5a50dd2b59c933b630abfe1a3091ff"]
  - id: kmh-a-ms
    tier: 2
    type: numero
    sig: 12
    prompt: |
      Expresa ${{v}}$ km/h en m/s.
    variants:
      - values: {"v":"90"}
        answers: ["sha256:2a4249ec4b52f4c9b946d971c132cb6372bad7a7b925c143b4c3248f6cd829e7","sha256:4511d7fbc6b4cf9c724160fa4f3fedfa06b4a145cc405ab8d4e0f6d0013be3ca","sha256:fb949dca3ec7f3f6354a56127803a0f8e3ee8617c3b0c5d032bdac00857383d4"]
      - values: {"v":"54"}
        answers: ["sha256:8179b0ebf03d85178dc3bafd54078981ca6f173817a110ea71d820449e9246bd","sha256:267ec78ad1190c94af49375e25d03c7d834881950f836696f03ba494e3ebc0b3","sha256:375d7ca55ef5ae39d3790756f52f23c831f5c7839470e771427566cd6eb75c10"]
      - values: {"v":"108"}
        answers: ["sha256:8aa794f94ebcdcea321f243cc79e992e1ee7736d5d8c4b3e8ee79c830140fc9f","sha256:cf2023d3ffe16c1abebac038746ea1e7a8c1bb55f1e6a36fc86a7586f3bd5b38","sha256:99fa66c396abe384439ddd1d625865a30fff8360bda437820c294cdae905f418"]
      - values: {"v":"36"}
        answers: ["sha256:bebb2259c08a63c7c65aff0edb47b21659a177ee2fc17b69c3743c694a4a908d","sha256:1251b127b325e67f289a57e4f65d73a9cbbcec6c16c0eed74d73cd818cf21df2","sha256:156f3a07e2a4fbf2150dd4435b282206bc1aae4abb4d5889aff22da8faea2241"]
      - values: {"v":"18"}
        answers: ["sha256:af718a3e17eefd0ee26997fbaa52df1277101f0fb33bf9415678b49a3d1f89a9","sha256:65619025f341d4ca1720ef455e780cbfe862b8c94a530cfc80f6f4706400f947","sha256:3917af452f095415c23985cd3a4dccdc517086606aac0f5d3a02d046ff157a14"]
      - values: {"v":"144"}
        answers: ["sha256:44bfe5a3fe2bfdb2ce09f3e928e8a3d56b7d2f5adf8ea912e136566339ccb19f","sha256:da0e2960dd6c19669656fef257c1633cb6438c924d4380a4b0334d2bedb7ce3d","sha256:3ca777e6c77b027d26736912361a81db869f54c3e1e4dd7fb2740f9d9ac66b13"]
  - id: escala-del-mapa
    tier: 2
    type: numero
    sig: 12
    prompt: |
      En un mapa de escala $1 : {{E}}$, dos pueblos están a ${{cm}}$ cm. ¿A qué distancia real están, en km?
    variants:
      - values: {"cm":"3{,}5","E":"50\\,000"}
        answers: ["sha256:d6387031b62ad3940e1ad822f5b96365128ecd62a9859fbbbb00da7f9c391061","sha256:e3a60cba24a2a70fc7e897eb24741eda18293c287036d0917e1167b0fb143fb2","sha256:79997f637f560c29af1026afdef45ffa2371123df47d6b2c6d3206daebaaaa76"]
      - values: {"cm":"12","E":"200"}
        answers: ["sha256:8ba357744dd2282a8177fa872c7865741abda4e3d41d30d63ce206967fde529a","sha256:5885d2e1c1aac6fdc7a601705b5456ad65b38173cc1d5a539854dc1490f90d2b","sha256:316e1252789c05d7748a1f2f8f97e991b34f97d6a0af09a3062ee0fe0429dc9b"]
      - values: {"cm":"7{,}2","E":"25\\,000"}
        answers: ["sha256:b83c9645b9ac3851bd72975e5e41255b6a75eadd6baea063dbb06e8a0a2d4b13","sha256:0ee531b4036ef044b200e6e6e336fa31a69d10662fedf121fca6425df0eaf702","sha256:e08f25281511ee9b2f3dcaba1d3118c2118889269a873aeff8b67687dd6942e6"]
      - values: {"cm":"4","E":"1\\,000\\,000"}
        answers: ["sha256:06f5bf0f0ec517382ca4cc9da5caa7f4cfe2dec8cf48c7092f98051aa300a863","sha256:9044d22a067fe484f56d9e5e3dc7ffa6e29a90b29f0a45419fd3517803a682c3","sha256:06ca31cfffbd2107f35fea9fa644a7f22a28d69eeafc7ceb07fb1a9852183fb9"]
      - values: {"cm":"15","E":"500"}
        answers: ["sha256:a896f7ecef113e0e4be2368356b91d487d0e1b5fa72dcc76416b5b2b5802cba4","sha256:dbd1d20567e52918567800497aa21fbd974738d9f279fc40229af668fdccd00b","sha256:ffa7685fcea7f480337084e05d2beec7f1057df7b7b9f6b9da5fdb9a98b61934"]
      - values: {"cm":"2{,}8","E":"75\\,000"}
        answers: ["sha256:50e16c03ab744c9277d4b910543b3e2c4f5b452eea3beddb64a051e69481c256","sha256:9d45042458278d4d505f245f4369d616e94c4422355a9d55c8f69739c66a47b8","sha256:098f977a2386758031691b357dd7db6fc2cd01afa49aa74f6edfd5b9db8a3f2a"]
  - id: por-que-cien
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Explica por qué $1\ \mathrm{m}^2 = 10\,000\ \mathrm{cm}^2$ y no $100\ \mathrm{cm}^2$, y por qué $1\ \mathrm{m}^3 = 1\,000\,000\ \mathrm{cm}^3$.
      Usa un dibujo o un razonamiento con cuadrados y cubos.
    sealed: "gz64:H4sIAAAAAAACCn2SPW/bMBCG/8pB0GAbgiGnm4BOQbYMXTqVDXAmzwUB6k7lh1EnyJ+Kt472HytIyZGNAt7I++C99/B9q4K4FK1w1VXfGXqKXkAnNB6NAAVIPF8NQb2poc8Hh0bW8Ci9TLH6K2zatgbdN0CB5q7elr4xB4P4z0sDBwgEQyJD4Mk5YvSKtfBUsrMOA8zt45M2Srho0Z9iulIESmkjMUuBLEipph2HnT7W8IxAv5PdoyPWFkur8C8bk6EAi1qpaHsKZZFlloaDsxoVr1aJEfb0WvRrNAjG9sTBno+8WnVgJMCeNAUghpAG8jurLTVQLzZtu3x5qPOy0Y8Fe3GpJ14rVjxTP//dWj1D3wpcgzME6G2I2F1iOMxwrvbOnLa3jE7HJo+NEtGV8pcvmc4I5wrRca34m3igILneIVDQ6MgXVImtwQyq7F8y5yNDppkfrUvLhLOZRN7QgAPUm8u4KwxVU/m09VZX3Y+3SnsbyVupuuopaG+3BOQujEa/TUgOJXH6GMP/ObVQmT8UdJ8nDYmjhKp7eG9uZj0m4oj3TXTlvwU52KGO4mefjMxCMcNkD2EKy3tjn/5ES2zKjh5fhbG3xFEA3YVPd//Lbh7/+f4PdK4CN9MDAAA="
  - id: r-unidad-si-masa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la unidad de **masa** del Sistema Internacional?
    options:
      - |
        El gramo
      - |
        La tonelada
      - |
        El kilogramo
      - |
        El litro
    answers: ["sha256:e7c0a626f5d02ee617a4bbfd3fe75195b561230f0256ff353400d4e13797d376"]
  - id: r-litro-dm3
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿A qué volumen equivale un litro?
    options:
      - |
        $1\ \mathrm{dm}^3$
      - |
        $1\ \mathrm{m}^3$
      - |
        $1\ \mathrm{cm}^3$
      - |
        $10\ \mathrm{cm}^3$
    answers: ["sha256:cc69419df371e0650abdf1d9f2bbacdfae7a4c285f0f881423ad962e76e9fef3"]
  - id: r-ml-cm3
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos cm³ ocupan $250$ mL de agua?
    answers: ["sha256:2b8e8c0a62c83d42c57d730b08f8bc12af29583587f26a07788972a5cd423c92","sha256:3818e46c098b4c4048bfa96233cfe5f3593c7615d928a565fd69622a9abcdbb3","sha256:aef511ad0d61d6d4fa1c9e7201f05d7a18f5936f4644150b7db84c775e5cf5c3"]
  - id: r-escalon-superficie
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Por cuánto se multiplica al pasar de m² a cm²?
    answers: ["sha256:8de2eb23678941c97c3a7bd0cd33ae447466614997e2fad419d0e7eeb6a02584","sha256:522b1b218497397c5c448c9c584b4666f8f8578e37912fcd83fc76538703c348","sha256:33d73b434e1e657bc74d625932aa253fce7bc4ecc1ed250e8f2336f3c3306adf"]
  - id: r-minutos-decimales
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos minutos son $0{,}\overline{3}$ horas (un tercio de hora)?
    answers: ["sha256:2b06b69671eb7328eb6a44599ca0028101bfb353ece3cbdc2b2e3f3414647969","sha256:f87de33318215039204edf29e9bca48eb9e9448a0c7cef3c8c70a0275e287092","sha256:a7cc3f4ac353dfd46d517cabce74459f47f901ac898949453368dec78aba5e1b"]
  - id: r-km-m
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos metros son $1{,}25$ km?
    answers: ["sha256:c5debb87eda15e6d1f18e47c3d2cafbecf7e6e0b6f11112f15e355de4270f2b8","sha256:69bf984dbd7ca8f6d2fe8fa169eadfbaef36c94c92c25953b1f98c6a1d42b872","sha256:47bacebfd753eae5599fbd6aa8e453cc7209c55b18c7da6bbfe447cfa1e500cf"]
  - id: r-tonelada
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos kilogramos son $3{,}5$ toneladas?
    answers: ["sha256:dd3242a8aa8a34dac43e276e6900ec0c875bf615fee394d3fba44ca78e37be3b","sha256:2e76e3d63acac7627e19450fc71ff8a1efc9f2f6a8f03ebe95a08ba8ddaa109e","sha256:55a7dacc130d324c47dcd58b4bcbb371f39025a1313e05d27629b3fd34ca74c0"]
---

# Sistemas de medida: magnitudes, Sistema Internacional, cambios de unidad, superficie, volumen, capacidad, masa y tiempo

Medir es comparar con una unidad: «esta mesa mide $1{,}2$ metros» quiere decir que el metro cabe $1{,}2$ veces en ella. Para que
las medidas sirvan entre personas y países hacen falta unidades comunes; el **Sistema Internacional** las fija, y el **sistema
métrico** las organiza de diez en diez, lo que hace que cambiar de unidad sea correr la coma. Este nodo enseña a pasar de unas
unidades a otras sin errores, también en superficies y volúmenes (donde la mayoría se equivoca), y a trabajar con el tiempo, que
se cuenta de sesenta en sesenta.

## Objetivos

Al terminar sabrás:

1. Distinguir magnitudes y unidades y conocer las unidades básicas del Sistema Internacional y sus prefijos.
2. Cambiar de unidad en longitud, capacidad y masa.
3. Cambiar de unidad en superficie y volumen, entendiendo por qué los escalones valen $100$ y $1\,000$.
4. Relacionar volumen, capacidad y masa del agua ($1\ \mathrm{dm}^3 = 1$ L, que pesa $1$ kg).
5. Operar con horas, minutos y segundos, y pasar velocidades de km/h a m/s.
6. Usar escalas de mapas y planos.

## Qué debes dominar antes

[[mat-decimales]] (correr la coma al multiplicar por potencias de $10$) y [[mat-potencias-raices]] (potencias de $10$).

> [!question] Test de entrada
> 1. ¿Cuánto es $3{,}45 \cdot 100$?
> 2. ¿Y $72 : 1\,000$?
> 3. ¿Cuántos minutos hay en $2$ horas y media?
>
> Respuestas: $345$; $0{,}072$; $150$.

## 1. Para qué sirve

- **En casa y en la tienda**: recetas en gramos y mililitros, pintura por metros cuadrados, agua por metros cúbicos en la factura,
  la gasolina en litros.
- **En ciencias**: toda medida física lleva unidad, y un resultado con la unidad equivocada está mal aunque el número sea correcto
  ([[fis-magnitudes-medida]]).
- **Errores famosos**: la sonda Mars Climate Orbiter se perdió en 1999 porque un equipo usó unidades inglesas y otro métricas.

## 2. Magnitudes y el Sistema Internacional

> [!practico]
> Se puede medir lo que se puede comparar con una cantidad fija: la longitud (con una regla), la masa (con una báscula), el
> tiempo (con un reloj). La belleza o la simpatía no son magnitudes: no hay una «unidad de simpatía». Antes cada región tenía
> sus varas, palmos y arrobas; el sistema métrico se inventó en Francia en el siglo XVIII para que todo el mundo midiera igual.

Una **magnitud** es una propiedad que se puede medir (longitud, masa, tiempo, temperatura…); una **unidad** es la cantidad de
referencia con la que se compara (metro, kilogramo, segundo…). El **Sistema Internacional de Unidades** (SI) tiene siete
unidades básicas: el **metro** (m, longitud), el **kilogramo** (kg, masa), el **segundo** (s, tiempo), el **amperio** (A,
corriente eléctrica), el **kelvin** (K, temperatura), el **mol** (mol, cantidad de sustancia) y la **candela** (cd, intensidad
luminosa). Las demás se derivan de ellas (el m² de superficie, el m/s de velocidad…).

**Prefijos.** Los múltiplos y submúltiplos se forman con prefijos que indican potencias de $10$:

| prefijo | símbolo | factor | | prefijo | símbolo | factor |
| --- | --- | --- | --- | --- | --- | --- |
| giga | G | $10^9$ | | deci | d | $10^{-1}$ |
| mega | M | $10^6$ | | centi | c | $10^{-2}$ |
| kilo | k | $10^3$ | | mili | m | $10^{-3}$ |
| hecto | h | $10^2$ | | micro | µ | $10^{-6}$ |
| deca | da | $10$ | | nano | n | $10^{-9}$ |

## 3. Longitud, capacidad y masa: escalones de $10$

> [!practico]
> Imagina una escalera: arriba los kilómetros y abajo los milímetros. Cada escalón hacia abajo multiplica por $10$ (hay diez
> metros en un decámetro, diez decímetros en un metro…) y cada escalón hacia arriba divide por $10$. Cambiar de unidad es
> contar escalones y correr la coma ese número de lugares.

$$
\mathrm{km} \xrightarrow{\times10} \mathrm{hm} \xrightarrow{\times10} \mathrm{dam} \xrightarrow{\times10} \mathrm m \xrightarrow{\times10} \mathrm{dm} \xrightarrow{\times10} \mathrm{cm} \xrightarrow{\times10} \mathrm{mm}
$$

*Ejemplos:* $3{,}5$ km $= 3\,500$ m (tres escalones abajo: $\times 1\,000$); $365$ mm $= 0{,}365$ m (tres escalones arriba: $: 1\,000$).
La **capacidad** (kL, hL, daL, **L**, dL, cL, mL) y la **masa** (kg, hg, dag, **g**, dg, cg, mg) siguen la misma escalera:
$750$ mL $= 0{,}75$ L; $2{,}35$ kg $= 2\,350$ g. Además, la **tonelada** es $1\,000$ kg: $2{,}5$ t $= 2\,500$ kg.

## 4. Superficie: escalones de $100$

> [!practico]
> Un metro cuadrado es un cuadrado de $1$ m de lado. Como $1$ m son $10$ dm, ese cuadrado se puede llenar con $10$ filas de $10$
> cuadraditos de $1$ dm²: $100$ dm². Al medir superficies, el factor de longitud se aplica dos veces (largo y ancho), y por eso
> cada escalón vale $100$.

$$
\mathrm{km}^2 \xrightarrow{\times100} \mathrm{hm}^2 \xrightarrow{\times100} \mathrm{dam}^2 \xrightarrow{\times100} \mathrm m^2 \xrightarrow{\times100} \mathrm{dm}^2 \xrightarrow{\times100} \mathrm{cm}^2 \xrightarrow{\times100} \mathrm{mm}^2
$$

En la práctica, cada escalón corre la coma **dos** lugares: $2{,}4\ \mathrm m^2 = 24\,000\ \mathrm{cm}^2$ (dos escalones, $\times 10\,000$).

**Unidades agrarias.** Para terrenos se usan la **hectárea** ($1$ ha $= 1\ \mathrm{hm}^2 = 10\,000\ \mathrm m^2$, aproximadamente un campo y
medio de fútbol), el **área** ($1$ a $= 1\ \mathrm{dam}^2 = 100\ \mathrm m^2$) y la **centiárea** ($1$ ca $= 1\ \mathrm m^2$).

## 5. Volumen: escalones de $1\,000$, y su relación con la capacidad

> [!practico]
> Un metro cúbico es un cubo de $1$ m de arista. Si lo llenas de cubitos de $1$ dm de lado, caben $10$ a lo largo, $10$ a lo ancho
> y $10$ a lo alto: $1\,000$ cubitos. Cada uno de esos cubitos de $1$ dm³ es exactamente un litro, como un brik de leche.

$$
\mathrm{m}^3 \xrightarrow{\times1000} \mathrm{dm}^3 \xrightarrow{\times1000} \mathrm{cm}^3 \xrightarrow{\times1000} \mathrm{mm}^3
$$

Cada escalón corre la coma **tres** lugares. **Relación con la capacidad:** $1\ \mathrm{dm}^3 = 1$ L, luego $1\ \mathrm m^3 = 1\,000$ L y
$1\ \mathrm{cm}^3 = 1$ mL. Para el agua, además, $1$ L pesa (casi exactamente) $1$ kg.

**Ejemplo resuelto 1.** Un acuario de $60$ cm $\times$ $30$ cm $\times$ $40$ cm tiene un volumen de $72\,000\ \mathrm{cm}^3 = 72\ \mathrm{dm}^3 = 72$ L, y
lleno de agua pesa unos $72$ kg (más el cristal). *Atajo:* pasar las medidas a dm antes de multiplicar ($6 \cdot 3 \cdot 4 = 72$ dm³).

> [!formal] Con rigor: por qué el factor se eleva a la dimensión
> Si una unidad de longitud $u$ equivale a $k$ unidades $v$ ($u = k\,v$), un cuadrado de lado $u$ tiene área $u^2 = (kv)^2 = k^2v^2$ y un
> cubo de arista $u$ tiene volumen $u^3 = k^3v^3$. Con $k = 10$ salen los factores $100$ y $1\,000$; con $k = 100$ (de m a cm), $10^4$ y
> $10^6$. Es la misma razón por la que, en una semejanza de razón $k$, las áreas se multiplican por $k^2$ y los volúmenes por $k^3$
> ([[mat-semejanza-tales]]). $\blacksquare$

## 6. El tiempo y los ángulos: el sistema sexagesimal

> [!practico]
> El reloj no es decimal: $60$ segundos hacen un minuto y $60$ minutos una hora (herencia de los babilonios, que contaban de $60$
> en $60$). Por eso $2{,}5$ horas no son $2$ horas y $50$ minutos, sino $2$ horas y $30$ minutos: el «$0{,}5$» es media hora.

$1$ h $= 60$ min $= 3\,600$ s. Para pasar **horas decimales** a horas, minutos y segundos, se multiplica la parte decimal por $60$ (minutos),
y la parte decimal de los minutos otra vez por $60$ (segundos): $2{,}75$ h $= 2$ h y $0{,}75 \cdot 60 = 45$ min. Al **sumar tiempos** se suman
segundos con segundos y minutos con minutos, y cada $60$ se lleva una unidad a la siguiente: $1$ h $50$ min $+ 25$ min $= 1$ h $75$ min
$= 2$ h $15$ min. Los ángulos usan el mismo sistema: $1° = 60'$ (minutos) y $1' = 60''$ (segundos).

**Velocidades.** Para pasar de km/h a m/s se multiplica por $\frac{1\,000}{3\,600} = \frac{5}{18}$ (o se divide entre $3{,}6$):
$72$ km/h $= 72 \cdot \frac{5}{18} = 20$ m/s.

## 7. Escalas

> [!practico]
> Un mapa es un dibujo «encogido»: en una escala $1 : 50\,000$, cada centímetro del mapa son $50\,000$ cm reales, es decir, $500$ m.
> Para saber una distancia real se mide en el mapa, se multiplica por el número de la escala y se pasa a la unidad cómoda.

En una escala $1 : E$, una longitud $d$ en el plano corresponde a $d \cdot E$ en la realidad (con la misma unidad). *Ejemplo:* $3$ cm en un
mapa $1 : 50\,000$ son $150\,000$ cm $= 1{,}5$ km. Las superficies reales, en cambio, son las del plano multiplicadas por $E^2$ (sección 5).

## 8. Errores típicos

- Usar escalones de $10$ en superficie o volumen ($1\ \mathrm m^2 \neq 100\ \mathrm{cm}^2$).
- Confundir capacidad y volumen sin pasar por $1\ \mathrm{dm}^3 = 1$ L.
- Leer $2{,}5$ h como $2$ h $50$ min.
- Mezclar unidades en una misma operación (sumar metros con centímetros sin convertir).
- Olvidar la unidad en la respuesta, o dar un número absurdo sin comprobarlo (una piscina de $3$ litros).

## 9. Resumen

- Magnitud y unidad; siete unidades básicas del SI; prefijos de giga a nano.
- Longitud, capacidad y masa: escalones de $10$; superficie: de $100$; volumen: de $1\,000$.
- $1$ ha $= 10\,000\ \mathrm m^2$; $1\ \mathrm{dm}^3 = 1$ L; $1\ \mathrm{cm}^3 = 1$ mL; $1$ L de agua $\approx 1$ kg; $1$ t $= 1\,000$ kg.
- Tiempo de $60$ en $60$; km/h $\times \frac{5}{18}$ = m/s.
- Escala $1 : E$: longitudes por $E$, áreas por $E^2$.

## Repaso: lo que debe quedarte dentro de un mes

1. La escalera de unidades y cuántos lugares se corre la coma en cada tipo de magnitud.
2. Por qué en superficie el escalón vale $100$.
3. La relación litro-decímetro cúbico-kilogramo de agua.
4. Cómo se pasan horas decimales a horas y minutos.
5. Cómo se usa una escala.

## Siguiente

[[mat-proporcionalidad]] (las conversiones y las escalas son proporciones) y [[mat-cuerpos-geometricos]] (volúmenes de cuerpos).
