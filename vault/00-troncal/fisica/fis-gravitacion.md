---
id: fis-gravitacion
title: "Gravitación: ley de la gravitación universal, campo gravitatorio, energía potencial gravitatoria, velocidad de escape, satélites y leyes de Kepler"
area: fisica
trunk_level: 3
prerequisites: [fis-trabajo-energia]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 13: «Gravitación» (ley de gravitación universal de Newton, gravitación cerca de la superficie de la Tierra, energía potencial gravitatoria y energía total, órbitas satelitales y energía, leyes del movimiento planetario de Kepler, fuerzas de marea). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/13-introduccion"
  - "J. Kepler, «Astronomia nova» (1609) y «Harmonices mundi» (1619); I. Newton, «Principia» (1687), libro III, «De mundi systemate»."
  - "NASA, «Planetary Fact Sheet» (masas, radios y parámetros orbitales de los planetas). https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
hints:
  - "Concepto: todos los cuerpos con masa se atraen con una fuerza proporcional al producto de sus masas e inversamente proporcional al cuadrado de la distancia. Esa misma fuerza hace caer las manzanas y mantiene en órbita a la Luna y a los planetas: un satélite está en caída libre permanente."
  - "Herramienta: F = G M m / r²; g = G M / r²; órbita circular: G M m / r² = m v² / r, así que v = √(G M / r) y T² = 4π² r³ / (G M); Ep = −G M m / r; escape: v = √(2 G M / R); energía de un satélite: −G M m / (2 r)."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 13; datos de la NASA."
exercises:
  - id: fuerza-gravitatoria
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Con qué fuerza se atraen, en micronewtons ($\mu$N), dos cuerpos de ${{m1}}$ kg y ${{m2}}$ kg cuyos centros están a ${{r}}$ m ($G = 6{,}674 \cdot 10^{-11}$ N·m²/kg²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m1":"1000","m2":"2000","r":"3"}
        answers: ["sha256:7e818cb6d17bf6865bfb37bb278dda32bfb821d63be5cd5cc0d017cc2a0c5344","sha256:609b29af57e83c88c198a7c08799f96e7ecea8658c3b2d7a47879395349f398f","sha256:55cf64d91737d3a70a174995a67d7a6d0659f481076a297a9ac3fddd18f69eb0"]
      - values: {"m1":"50","m2":"80","r":"0{,}5"}
        answers: ["sha256:8fcf083e9f5f0418dba61e67b822e487b9ecf5c6c501ff55decd47d8b000a9e8","sha256:78743511445a7f2d96d7dc746230a5621f998b3761776339a2b9efc0a5752c4f","sha256:f4b552657e12f812d6792aa29796e4063868ee8f7680c2315345566def0a5b38"]
      - values: {"m1":"7{,}3","m2":"7{,}3","r":"0{,}2"}
        answers: ["sha256:2fbf357f3f5ad37f4ba393005ac484faa5008a305ff86f8628e6fb9c4c093d5c","sha256:b9d9eed53f593f3df2b935b90efcf0f01c371478deb53ea1293ae77d07c2877d","sha256:a7f6ee2185ad785e76c6f326dfb05e812fb371709e31bea77c6b79033ff668c8"]
      - values: {"m1":"12000","m2":"35000","r":"25"}
        answers: ["sha256:ace2d7d93bfad6a357ee0775794074bb0bf6b9aaf4b9fa89e950030b2b06f139","sha256:e70898242f6ef757a6f43bfb2bca436ae26cf84872d9a8acd9eed044121fdccc","sha256:8fc9809bcbb806d2d1a5710b6af63e3fc6ad085471f60e3ffa9b3f41fd674007"]
      - values: {"m1":"60","m2":"75","r":"1"}
        answers: ["sha256:2bf0c984ba68fac5333951cc303f221a408252a5828abd34ec5ef4f4fc700532","sha256:023c8f91eea61fc0ae63437e73243b98e0bb29e8888032786364fcda61148afb","sha256:15faabce11de227573a9185e200adad5e0a54fe7ede46e167051631cfde2de57"]
      - values: {"m1":"5000","m2":"5000","r":"10"}
        answers: ["sha256:b03e8bb0db6af67d8ad2c08db82ccff46162b948642b1d0fa6a0cca8544caaa3","sha256:4cdf7273c2d1f849d2e357d0939043ac7ed75c3995e26ea6c4e725c85600e1b9","sha256:3d19537857e1eb4da61ddc133013e49509e4f5a98fd1d0f2c2a59cfbb1f3ea72"]
  - id: gravedad-en-otro-astro
    tier: 2
    type: numero
    sig: 4
    prompt: |
      {{s}} tiene una masa de ${{M}}$ kg y un radio de ${{R}}$ km. ¿Cuánto vale la gravedad en su superficie, en m/s² ($G = 6{,}674 \cdot 10^{-11}$ N·m²/kg²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"M":"6{,}42 \\cdot 10^{23}","R":3390,"s":"Marte"}
        answers: ["sha256:5f36384e5f0a31cb87b7cf6f33a6d53376e687d70a1dcf365bcf3a65c95b0e7d","sha256:edd8ba1be62567fa1e43dc0dd497cd790eefa6b7190ab1ae906fde49b933331c","sha256:bd2a24f1db30047b18e67ae28599482a5d65fb380add12ceedc4b6aa0f399628"]
      - values: {"M":"7{,}35 \\cdot 10^{22}","R":1737,"s":"la Luna"}
        answers: ["sha256:38e27e6677c3dc2a552f7be768078d6fa3592bd4f37b28883bb0b8fd9ae0982b","sha256:8fc3d00663b406a5a623f65914b97c133ac02adf382b1bee9a603dfa471746ac","sha256:3259492e71aafd8633f84d62e59a135baddd1807ed6e1e8315ae9bf10c8d44a5"]
      - values: {"M":"1{,}9 \\cdot 10^{27}","R":69911,"s":"Júpiter"}
        answers: ["sha256:9f585e576192127bc2c3d0ad9bfe98012665df0a8332e58ca12fdfa9e106e7d1","sha256:852dc69a8eec31c500873b304f4d255c2d0eb6544e58f5848b69c7e850243752","sha256:d1451cb0c6dbef0a863dd2b97c05240189f1136321a1d04a3038814da6190502"]
      - values: {"M":"4{,}87 \\cdot 10^{24}","R":6052,"s":"Venus"}
        answers: ["sha256:c7abcd65665f80bf254a94dd83ca6569f95da4be1a12e563e3f55779689e1b28","sha256:d46eb6d8fe11711c5075bd296fe29324a10cf1fb025692598a0e4f7c5457e2de","sha256:ce562e2a97daa3d815cd1dff5866d88bd4a9bcc3a4faecc678d161ad412659e9"]
      - values: {"M":"3{,}3 \\cdot 10^{23}","R":2440,"s":"Mercurio"}
        answers: ["sha256:67ce37ec664eff9befd52f1f1892a5c4f4ea7aafcfa6c56f4e6b9d361c087a41","sha256:fea4eaf1e8abc8c62f2f819b25aa96b144165502a0c314759d1ed91c7d2a659e","sha256:218469a7f8ebb59f961dbea696e8c228d5447abab688ba58b27a997d21e87ec2"]
      - values: {"M":"1{,}35 \\cdot 10^{23}","R":2575,"s":"Titán"}
        answers: ["sha256:64d53e1f5025a3c667abb9f9689e1b51cf811990de5b538b2605536301b5eea3","sha256:fc5f4a99d3d4fb010a294fe9aeacb0f6324e647df9d2c3cefeb64af146d83e82","sha256:c210e2b73c28fc110177de8211312a3c1b2bd15d16919fef128bf55303462832"]
  - id: gravedad-con-la-altura
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto vale la gravedad, en m/s², a ${{h}}$ km sobre la superficie terrestre? Usa $G = 6{,}674 \cdot 10^{-11}$ N·m²/kg², $M_T = 5{,}97 \cdot 10^{24}$ kg y $R_T = 6\,370$ km. (Al menos cuatro cifras
      significativas.)
    variants:
      - values: {"h":300}
        answers: ["sha256:b0092377e9cc1837ab34c6606a34212d106ac8630ded6dc516662e650add4ba0","sha256:51b03101758bfa6764d353efb28378fa992d60b8e76b0aca56398e90c003a648","sha256:20fe2708aab80083875999ad13008c56e2846ee46bc776edc952f942631c58ed"]
      - values: {"h":1000}
        answers: ["sha256:3c075bff1f914fd24a7f7d3813622dc0a21b7b1be60df5191ea505a93cf860bf","sha256:9c058a0f62956531e3effdfaea44b6103d5e25054450b361a1ca4986e5427dd9","sha256:68c1f5ccd10dc717b2379f9f7a57e33e8b132834f1141849b8c930dbd26fda63"]
      - values: {"h":6370}
        answers: ["sha256:d4027396d61b8bd3fb72546ac8a523c671174521fafae6c85ecd00ed9b2b16c5","sha256:75835c2c04c4de9b772556bcdde23c1d49df0eb237034ad54a480c5145b1ae78","sha256:90a4019e850b5bdf23b261280370b5696b43e9b71a0aa5f1111ffedf24e42cf1"]
      - values: {"h":20200}
        answers: ["sha256:8623f3dc0884b867427f2ad22b340cc36adbb3fcbea671107530bb9a5737c4f3","sha256:0493b4a8938fd5ebf3b59c4b0c9d43f86cba93a54244864f30047ecf80e1d61a","sha256:fa906d82e5dec1ea3e1ab935a2b397df2934ee3b76e2032ccad4483d9bf2caf1"]
      - values: {"h":100}
        answers: ["sha256:77baf6499a1cc6589c3044138ee9aef8ccda19a40e471a527c3f4e5de7d7040b","sha256:488d9c24476f81184d06236c5f0ae4b0c17de123a3d59ebebf2aa61e1be6cee0","sha256:e54db1fadedd0161b5ae40b9a78fcdde2b5a47386fc2bb5175e92c0c49a56b2e"]
      - values: {"h":3000}
        answers: ["sha256:63c7710a8e428a4a9edf529b33ea2512a9dbdfcc2ffced4c0c86eb65af5fa93b","sha256:bb2c4ca8b3534e54ff6d2067d2822023ccf15963699e05e7f96ff87e68d2e5d6","sha256:26077b85c13b57fa7f036cd0f885732a6b02f40da951c6d35c25fc885da335ac"]
  - id: velocidad-orbital
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿A qué velocidad, en km/s, se mueve un satélite en órbita circular a ${{h}}$ km sobre la superficie terrestre? ($G = 6{,}674 \cdot 10^{-11}$ N·m²/kg², $M_T = 5{,}97 \cdot 10^{24}$ kg, $R_T = 6\,370$ km;
      al menos cuatro cifras significativas.)
    variants:
      - values: {"h":550}
        answers: ["sha256:f99f0f7f8aae135066a6d2f0cff28d1f8ce1a517a8e2fe0c2146dd86e0a312da","sha256:c9c9580695da0964a4f53735dda3c920448cef498e2833f19931a6e3e9fed203","sha256:570e0af1ab030b75c9a52474924d0f2b3c11c1e5ec03f469d8ccd465f7fafb49"]
      - values: {"h":800}
        answers: ["sha256:1b959f4d2481e0f34d1c28a8ced3b473616d9814eeb1604a15335a359a38b7a2","sha256:4a083c51b4760c95da7210b9ee4b73cc1bc8496ad54be6273a876812c955d9e2","sha256:6c54fa02d5508dea619819ea01045fedbabdac63fb142d0c78d66f075bde99b9"]
      - values: {"h":2000}
        answers: ["sha256:7d58e326e941f1c7f272be9f25262e3d2e6fd406833c07f70b468b24b98bcd9b","sha256:2cf3b55746cdf159caea317a985ab30defb7c02a6ccb602d48ad2856b1d8fbbc","sha256:faaee162f70a51e3137c873661913fa9160de703971af052b92fcdb28dd00469"]
      - values: {"h":20200}
        answers: ["sha256:8646a4f6f9292c593d2c927bbbf1d8b7bd2a4c0ad143e57023bec9b92bca4c90","sha256:0dbc73c23da647ae3571d42aff3929de5580a1a1c73affa9364964eb4337d699","sha256:0f8310547e306f56700de7666521670360d05842ef88bba939bce6ce67747d65"]
      - values: {"h":250}
        answers: ["sha256:b00e29c2fb9a8526f6a980f4b624bc77f7506815278e5a0236e39f13a127999a","sha256:c57032e98432d9097a77f00a825bbbe58109fc2cd097a92547baff4d60e526dd","sha256:587a6ac881b00244d74c38049c435afc8fbb097d4ee21fb2cc15bf5b109ae4dc"]
      - values: {"h":1200}
        answers: ["sha256:953367e18f46f30e6dbe7c4fcbd402d9c8ea197e9494c5c94051ebc1474b081a","sha256:8d7974b2e6e7c00d35014a7fcf6a2619577e8a42488c86beaeac04414b7ca7a8","sha256:23269cd0dd50fdee3e591326ddfebde3255f9fbc14f7072fd085f193916f7441"]
  - id: periodo-orbital
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuántos minutos tarda en dar una vuelta a la Tierra un satélite en órbita circular a ${{h}}$ km de altura? ($G = 6{,}674 \cdot 10^{-11}$ N·m²/kg², $M_T = 5{,}97 \cdot 10^{24}$ kg, $R_T = 6\,370$ km;
      al menos cuatro cifras significativas.)
    variants:
      - values: {"h":550}
        answers: ["sha256:698cae5f24520cd33bfee95027488f8921a96b679bc8e8e23bd16c69e6b78214","sha256:0bf7f263dea31c11d75657c321b9a709a6bed87136af9155a4de0131e948c8ab","sha256:fae3034cf7906c0747129f229eb5215e6fb57186187aa3d25648f5b1339827ab"]
      - values: {"h":800}
        answers: ["sha256:c73d3b7cfe381ef19516781d5e411501c3a9f0198558ec6e6a3eb5ff704c1da6","sha256:48031183f43c4315bb4edc564c06fd54e2014c68b4c43604c0ed0fe2f5500158","sha256:2f706368e88aa9d37ba6b8fbaa70f1e0e9ded37c264bda009c04ab598515b366"]
      - values: {"h":2000}
        answers: ["sha256:7a33f950c2ab10d5cbc2a2ceab8187e5e1c68af93ea9011915c1048a7b59769a","sha256:f773b457296f7f227be4ce41fb0a662e0b6c6f1de0c02c175c71535148b74a0f","sha256:a3af9e09802ad64975ce28cfc5ad93a4d50d07f9f2e9286867f434774ec4a9e3"]
      - values: {"h":1500}
        answers: ["sha256:4d9aa483848c2d5d0e62e9a37f24619a59145bf8fc13bb0f86b94b75e0627996","sha256:a319aa837adbe5b74a71904f3546a1a9ceefc28a2377486f45dd811aa59a4a1b","sha256:19ea8a31ea6e48bf2be14468ed35e308635a876042fd4958609a8ba0d15eb811"]
      - values: {"h":250}
        answers: ["sha256:f0c5de5d2dfd8e5d8f2c48e455d4c2c6c57fe3e77c3351635904dc563dcc1599","sha256:ba80b9ff23dc9d9e9d9d7e018b71bad23766fc0a0f9aa8cdc7c270c705c4087e","sha256:c9d58cde7fb3f159983032c640df62c746e333da8d5c09efd7878cf70069b175"]
      - values: {"h":1200}
        answers: ["sha256:3236d496439ddd4a5df7a8d4b463dc767551410c84947b52772733521b1f038c","sha256:38020f81468e77badea18f63b56fb3c100d764d905194d722e595953bab9fb4f","sha256:688fc88fb46028eeaf6049123ec58588618aa94834cc196881c13552eb99dffd"]
  - id: radio-de-una-orbita
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuál debe ser el radio (en km, medido desde el centro de la Tierra) de una órbita circular para que el satélite dé una vuelta cada ${{Th}}$ h? ($G = 6{,}674 \cdot 10^{-11}$ N·m²/kg²,
      $M_T = 5{,}97 \cdot 10^{24}$ kg; al menos cuatro cifras significativas.)
    variants:
      - values: {"Th":12}
        answers: ["sha256:a68f65e60a809385dd2b226d13d307e66286be5590c219541f1aa4f700c9d37a","sha256:00a4ad797edd9fe37f00dba6adad1da86c7f28451f3d12590f0f40ec9bd9e8ec","sha256:4440dd512f7da0706e6503559dfef4c3b32ebb960f91860f389d1398d37c0e2a"]
      - values: {"Th":6}
        answers: ["sha256:76ad3d1dea1236d1132ec3aba361a4eeacf8058b5899d1fff664aa3b4679b5c4","sha256:6d87a3ed852fdac357c3450900e3f4da47db89c33517708f70b04c6fb24f8a49","sha256:d5773ffeef7d807c27bed98f920eabb66f63fbe8c42a71e8f86e04ddab826fa2"]
      - values: {"Th":3}
        answers: ["sha256:5ce8db739f84b3234d2867193ae8db45c26cdf04e009c048f09d644123463bbd","sha256:10c258cf720bc7c56408559bf07c7c3aebff00b18035646afe4f69d43c0cbccf","sha256:9824c599eb49faa366d8b9cd87cacb4e82cf3acd76282ccc9daa2bde777dc4f1"]
      - values: {"Th":48}
        answers: ["sha256:cefa94a7d5975dabcd974463d877372288fffd550cd3c455ab5c63514de40fa4","sha256:4f07e548f3097e7adee1c9b6560bb2d71ec1c982677f4cbd3dfbe4500771fb34","sha256:e6823175a08bfceedfbf5e96fde96d1c85f8ada9317a7bcd1c473560154e4e47"]
      - values: {"Th":8}
        answers: ["sha256:9263ab01c5d4b3fe4b4198723ad98b16902906f34baf679cd09fc0465b099713","sha256:c9e7e4c04a4778076c00a450d3b06a4b28f16d6993ac6990ad0e102bae0711af","sha256:d1144825786f2029d08143ea797fc4135be9304c9e25ad5d1e2b776ac5064e1c"]
      - values: {"Th":2}
        answers: ["sha256:eae7c9fa1983058633001bb19b09cdc3a0e24dd8edb4806552c0576065a4f76e","sha256:8c9fe880b5548e4d265a62ff07f0cfc96f55bbb1b4cbf999cbf9e0f8df45b934","sha256:cdc110f7bd2a0b0bcb9bf52712f89bcb493ee4fcaf0cfc3dcbcc400c3c183211"]
  - id: velocidad-de-escape
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la velocidad de escape, en km/s, desde la superficie de {{s}} (masa ${{M}}$ kg, radio ${{R}}$ km; $G = 6{,}674 \cdot 10^{-11}$ N·m²/kg²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"M":"6{,}42 \\cdot 10^{23}","R":3390,"s":"Marte"}
        answers: ["sha256:befbd28dc24dd8ce66a80b5cb673f41a7f0785b394e5c0873e1dda084382bd17","sha256:2c86d9d9ce7d4db8ac2cc22402e56567a6cffa24fe343be82fc6d6c622e72323","sha256:9c1a1fa88a96c9d9a038c7864817535eaf47d6de2198a680dbb7aeb138acc357"]
      - values: {"M":"7{,}35 \\cdot 10^{22}","R":1737,"s":"la Luna"}
        answers: ["sha256:371622486440263c08bce6d9554bd58928f20852d0daf88fb941b8f4a5bd5c01","sha256:bc3daaf210ea7595ecc92d7d41b3914b34f61de15164e3fcb396e4aee4d8d91f","sha256:14b46be1dd6954bab694a49336eaa8f9fb88ba0fb0472535629a2661d16487b4"]
      - values: {"M":"1{,}9 \\cdot 10^{27}","R":69911,"s":"Júpiter"}
        answers: ["sha256:203af1fabecb25b5b6c00bd47bae45ebe5c29b1224a0722e600881cccec15972","sha256:012f4425ad8d412ba3e0bf65703adaf06a1e8daf86661cb11c507ca0869dfae7","sha256:efa4901d6bec1d3067b862b9bcf7e8cfae824620a8326e29f7b25b36912bcc64"]
      - values: {"M":"4{,}87 \\cdot 10^{24}","R":6052,"s":"Venus"}
        answers: ["sha256:d63f568de7fff0a66a6678d72fc53f19d5077c593c3514e2542e224ee5e0c653","sha256:4a50256523032e4a315b90c1caf0e3e5fa3f625e3f2bfe4609595ebc6aa8dd0b","sha256:092c6ea0570e0cfa9000a594bd69c40ebea87f4c6e7541dc4d6751fc7818bcba"]
      - values: {"M":"5{,}68 \\cdot 10^{26}","R":58232,"s":"Saturno"}
        answers: ["sha256:08231f413841b94834a429516fba8e495f80f51ae3849437c91d4cd5ab5a796e","sha256:a43fac6fd2a9d2a8c69b656e764361cfe07a05b8f5d1a260fcf2f9c4b85738fd","sha256:3483a9382384b4aa6685509eed9f6fa496b5ae17f6024b4d15089b8a399f1557"]
      - values: {"M":"1{,}31 \\cdot 10^{22}","R":1188,"s":"Plutón"}
        answers: ["sha256:063c3216c793bc7ac4c693fa26ef7ef601ddde64fe35b351418cb5156704ccbd","sha256:6e7a369dd3b913aa5bdc178abea5aac8d3bbc751ae84717e43961290ce75d99f","sha256:69e30fc5d0740c168cd4026b0f6ebac1814fc1af7656845732e357e3ad200a48"]
  - id: tercera-ley-de-kepler
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un cuerpo gira alrededor del Sol en una órbita de semieje mayor ${{a}}$ UA. Con la tercera ley de Kepler (la Tierra: $1$ UA, $1$ año), ¿cuántos años tarda en dar una vuelta? (Al
      menos cuatro cifras significativas.)
    variants:
      - values: {"a":"5{,}2"}
        answers: ["sha256:7eb07a8a8025b057c4baa5ca72da9c372b6bba92f125ce3a03cfc057da1fb189","sha256:f4dd7b8930e45d6a7ab632a6efe9e47a2d738e66c15809e87e55d37d6bef4ba1","sha256:584712f39a5813a09711f018512dfaf806057c17e7db7152fd9802bf0cf17d32"]
      - values: {"a":"0{,}387"}
        answers: ["sha256:eb198ece7e008b7002db816c9d17b6a18a008d781cac5ca31788216fd380960d","sha256:000e1624a653c60a34e049b78a428f48f62fade837908ed12ada9db74e157267","sha256:e57c3f7f5289d50e3a629f1918f34fdbc1a8eb69d451f07ac211955dcf967eb6"]
      - values: {"a":"9{,}58"}
        answers: ["sha256:c35abee99d656b11ed6d37934e8497986d014182fd3ac001ba1d1d1e43c42425","sha256:f004cbe4f705d2cd708b4e4f7210dcd3e976aaa08eae046613e03473e8135143","sha256:00d8075b2034360468f23bf0b9fd560f7c8173a5d83038e2e73a6c3ecbb9ae1e"]
      - values: {"a":"2{,}77"}
        answers: ["sha256:c7d58226e3babba1fb4faf9e697a3d41a1c4ed0ce5415db9403e42fe8e6177a7","sha256:2dc492ab7ad03d3dc2d84b16090dc3b50c2b4f6b3426526246f31e9f5a51092f","sha256:336d4f5a4326656210aa27da17dd7a6a9cd23dae48f1a648ac94fa62c3b2fcdd"]
      - values: {"a":"0{,}723"}
        answers: ["sha256:e1f220471fcc5f84cf90822e017cbffa4c1829a18dae22207ab0ec0f0be579e7","sha256:015fc1982132d99e21d2f4e25c378938d095bb9fa6f572f21de75bda11218408","sha256:c2499949768cb0690a78ebadc476f61878029893327fe5a86f462c31a523c531"]
      - values: {"a":"30{,}1"}
        answers: ["sha256:557db97082b636ebd53524e6c068926d1e62158d046faf0a74d244cc17a7bf05","sha256:c2c8e96ece67418682b95b062a6be79138a8e1a7c8e731e621fba77d6b8cff9e","sha256:1e8034b536d4c1cd7fc51de6850bff1d810bdc5f9dc6c71105e6466bbdb47d3b"]
  - id: punto-de-gravedad-nula
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Entre {{s}}, cuyos centros están a ${{D}}$ km y cuya razón de masas es $M_1 = {{k}}\,M_2$, hay un punto en la línea que los une donde sus atracciones se anulan. ¿A qué distancia del
      centro del más masivo está, en km? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"k":"81{,}3","D":384400,"s":"la Tierra y la Luna"}
        answers: ["sha256:262ea639ad3ea8dc3d7bc384661a4d927ac44b3c91d05a11ed59719d413df2e7","sha256:a2864a28714a7c651dc9fa47bf091bfe116bb860352bafd8121a222567207d43","sha256:540bd755a71405aa8f494a734a188737ab72e94a8cf02d14d0a535ec0a78ec1d"]
      - values: {"k":"9{,}3","D":9400,"s":"Marte y un satélite hipotético"}
        answers: ["sha256:4d72ff6538341a40a2e7baf325e6e72028d46936c78a1e78843059231d04d03d","sha256:6df51a3b2611986a55cd2ec3e7c81d1b4ed62c3ac3453e09385571a61d4516be","sha256:44bb6a467142b5dde41d4c05090e6f117b16fa667118e160529f91cb2fa2a110"]
      - values: {"k":"100","D":200000,"s":"dos estrellas"}
        answers: ["sha256:3e5ce26c9a286b2cc6c3ee9ef849dee4703c0b1722d0d617df8a7f6e15854ab6","sha256:78f6055549d15a889a37ba2f0f64f86d08b152e4538a55fc9e8baa8cdb4a11fc","sha256:708e5ee33feb07f37500dd00d791c9ed43c7769becf5cd1b5fcc93ad0b08ecb9"]
      - values: {"k":"16","D":50000,"s":"dos planetas"}
        answers: ["sha256:cd64f2c7fbf38fad5022074428c45bdc6b035de89d65e1c16cf550c1fc03f8f9","sha256:62ce625c7279377a7213236c651e11daa755cb5c7668044f2011d06ec0067fa4","sha256:5b3f4ccefe709e414c90a4211f021f53362e8c8d14c501382f0db1a5de9d0869"]
      - values: {"k":"4","D":30000,"s":"dos asteroides"}
        answers: ["sha256:d888da63bf4b5f27aa90ed9517bde34f012909aad7de10026ab001d42decc168","sha256:aa285bbeeddb5d4943e08bf91252db938665e6c39b7f16b064e4fdc4b97199b1","sha256:ee6f5709f9eecb6b32e2175b31144bed78506fe693940548bbccc4cc719d7cb4"]
      - values: {"k":"49","D":120000,"s":"un planeta y su luna"}
        answers: ["sha256:f92eaae5119cdfb2a6363bf7dc5db1ec491b77854769ca82c9cc6d04e613bb0b","sha256:c547adc440fbcf9b65b13984f27b7c58af5866a206e294b765020599d19f23ed","sha256:e052260219bbe4dfdbc6ba079b90a0acb2aa50c789cf576f804d80dc3671f6f1"]
  - id: energia-de-un-satelite
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la energía mecánica (cinética más potencial gravitatoria, tomando la potencial nula en el infinito), en GJ, de un satélite de ${{m}}$ kg en órbita circular a ${{h}}$ km de altura?
      ($G = 6{,}674 \cdot 10^{-11}$ N·m²/kg², $M_T = 5{,}97 \cdot 10^{24}$ kg, $R_T = 6\,370$ km; al menos cuatro cifras significativas, con signo.)
    variants:
      - values: {"m":500,"h":400}
        answers: ["sha256:3c3dbdb4e39c19d2b781ebac7b6ab949b803c3448541f743d292a1b84f5e0a35","sha256:ee4af32c3a68c52545fe82a89c398082eb1405bb0c3771e053e220c914db3fdc","sha256:e2d378cfdf9f807c0e1be712f06496a447058d9878e87e4664aafe482f7ef35f"]
      - values: {"m":1200,"h":800}
        answers: ["sha256:3c369b27ef1b098667e2e839e3f0f52adb231b8ead16849243f2514fb369f8a8","sha256:eeea426433202961ce26dd7f8849bd2132c48389563ff5b4f3ac8697b3981da0","sha256:7e0781bef50d573f79526d96d3d6cf78f5279ff8004e691a9271f1f4319c060b"]
      - values: {"m":80,"h":300}
        answers: ["sha256:35516a2a965e2064e14c6cc1479cf71e9f81bc5de105aa4cb54e060d5d2b0dc6","sha256:295c0f17c35d7eef8c7a175fea91ebcae3d83e3c2bbea85c785f7ea2e40e6521","sha256:550128d227d4bf23c2c41d7b25137b99088037cfc0a3f278328ce88ad8704540"]
      - values: {"m":3000,"h":35786}
        answers: ["sha256:d13592a909035c5b4d72e598c27468da17d4d2e4f575ecdb268c174ad926cbe3","sha256:be8e7fc011bb41b9fca2a6c58e8a01d06d2e4cd035e6260a4d190a22787665c1","sha256:ecfacd937f0bfe82086733da214962173ff2e48febe90fc5abddcc580c91a9c9"]
      - values: {"m":250,"h":1500}
        answers: ["sha256:db804a003721be6daabd9bb98de609b62736d2fe58c852115d42bb1d838e7ddf","sha256:8348b450433a8ac452d105a148065b62b7f005beef8512ac5b16a51f7a72defb","sha256:53ccf21a25ec2540d6a5272bb4b1b47c81b45396d3d71892ad112644606f8a71"]
      - values: {"m":900,"h":20200}
        answers: ["sha256:3a1bae571b11aa957923e4f398c93b984d076353e9b02cec06b371c57d1e9cee","sha256:3292acafee582a44a2fa990a3ef5386cdbe8ed31b65e39451f1e86020a77910e","sha256:df766b10d28c007f3168e3082db904e983657e04612f6c9e5056750ad3e73cbf"]
  - id: masa-de-un-planeta
    tier: 3
    type: numero
    sig: 3
    prompt: |
      {{s}}: el satélite describe una órbita prácticamente circular de ${{r}}$ km de radio con un periodo de ${{Td}}$ días. ¿Cuál es la masa del planeta, en unidades de $10^{24}$ kg?
      ($G = 6{,}674 \cdot 10^{-11}$ N·m²/kg²; al menos tres cifras significativas.)
    variants:
      - values: {"r":421700,"Td":"1{,}769","s":"Ío (Júpiter)"}
        answers: ["sha256:db9e2fccf33fd085895dee4b86b3ced58bf11967c3df82078c5781ba5ee6b6b2","sha256:3f364cd8ad761266f83bddbab4aa1a288ca15aa84733b802d2737f00cda65ebd","sha256:de5110595b5e64b97c3d6cfa414006754b43c00f1f2d2518ed08c0a11f5e72a2"]
      - values: {"r":1221870,"Td":"15{,}945","s":"Titán (Saturno)"}
        answers: ["sha256:215cb3a72cdf1ce03cf0c42e68ded60c37aa516f0087d954e58cce43edd75d9f","sha256:2deeda7c76b14a99d13a8919abfe359b21cd45f174dc5d488afc501009d85713","sha256:ad62a41c2d49970062afd8917df6bbbc366a78a1b755c8c506492a5b74dc5fd7"]
      - values: {"r":9376,"Td":"0{,}31891","s":"Fobos (Marte)"}
        answers: ["sha256:4bc1506d1bee07c04684987cfa92a98d76c7f42171e1e3ee44d8961257f4364a","sha256:6b4cbe819c6d09bd535be215ecdb318c6f503f677139b5e41e67413d22f5550e","sha256:2ae4e5a250af8587cd8669747f29b02b894d657b7500de0e24f3a394f72a7574"]
      - values: {"r":354759,"Td":"5{,}877","s":"Tritón (Neptuno)"}
        answers: ["sha256:282c7b06fa047f65a0cb66f62d1ab67485fbda6e941d1e0e820bfc7ee3f3de07","sha256:d12bee85da96e9f0fa05d49f34a14aa031720d0ad96238325599d6af8243e3b8","sha256:33bd80ca717dfe061baad3db2658f0e4ba742b9a7e7b60b3c56458b1a35460ed"]
      - values: {"r":435910,"Td":"8{,}706","s":"Titania (Urano)"}
        answers: ["sha256:e5eaa3a76313773d1e108845c9acfec9f9dac2f13dd6f656b8017b25103837ac","sha256:b2ed0090576f06169b436d057207e3d01acbb71effd20333b2b62b5df4d4336d","sha256:662ea347f8d4c1bc53213be1f9f451d90618c872a5db7a40cadc3b0aa60e1b0a"]
      - values: {"r":384400,"Td":"27{,}32","s":"la Luna (Tierra)"}
        answers: ["sha256:173b9b6f605f64ec3086a8a8be53fda86430f575548eb3042372c04bd492ba05","sha256:bdf1fa783b7ffe7510999c9483fbd177ed892ba21ef75fad2fac69804a1976f6","sha256:b8aa9cad43de8f25426868dcf381f01353fb99dde04367e6c9459bd757c33241"]
  - id: gravitacion-universal
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica cómo Newton relacionó la caída de una manzana con el movimiento de la Luna (la Luna está unas $60$ veces más lejos del centro terrestre que la
      superficie). (b) Deduce la tercera ley de Kepler para órbitas circulares a partir de la ley de la gravitación y de la aceleración centrípeta. (c) Explica por qué los
      astronautas de la Estación Espacial «flotan» aunque allí la gravedad sea casi el $90\,\%$ de la de la superficie.
    sealed: "gz64:H4sIAAAAAAACCn1UwYobORD9laLpg900E8cTJllDTmEIYZO97NzSayhLFUdBXeqU1Es8TX9MzmEuO8fc7B9bSrbHnjAEDI1R6dV7r15pKGLwfXKBi0VRVROcVhX87cAjYBI0xu3uGSwZIUNgAgN5MD1aQRvAkhZaFxOycVgDQnk1K0HQuhAhkQjFJBQzniFPgkfEFcnuDiGSQNk0nwTN8MdQj6/G4Wq2nI/QNNh1Er7BbKjH2Wz+soT2Wdz+dwHvf8EyxEl2dx0lPDB63zPWDRv0pvdoMROP/Z4XBFm5hB4m5aU2fAFNY2xI8Hy2fFVCO4WN1nYkLtgAk3L+cqjHyxLs7g7jtAaKD4xfNE3nlnMZh5vfc34THBtniRfKr3WxRfjUk9wifO0JPqO6iyT5FPkWOX+TIybAoyYgbnh3n/nDZPvDIG1/qrjkuMeWOGUoly/cOBJBiI7Be1qjAPdscHrRcMNVNVnpqK8ZFPeIaZyoY1IrwFrwX7JoYT+/A90ztxcPPrz90I6DqAWvoX3Sm7IG39M6QHmznMNreFw0Dm8/jLK8LC/g2oMJxmUtR3gFGGR5OZbKhXw2MECHgpCCDRF8iGB6ki7EbOjaCXLD6IUs2SBgH25hTBJgkkgMCYKnjabmT+o8ybSGjU6+dYmgJesEWowYtSLfi0f3jLr3V1A+2o8DfMbNybM8ZorpENFNJpgRGPuEUc923xmIoaoM7u4sgncroarK/ZGzAef8TzOtc54fcnS+DJq0NmiUGL70nEKsgdFiw0qA2q7/krchCaqPsSd/XOMT24lH4CAtepVnSMJ0cQjBvuP2h2NV6izdbn9mA6L+OLm81KSpAoyGOAbRv+cSL4q6kH4lzhSLj0NhxCXdtWJRvAltnumvrwXFjkT3GOFqdnxdDh48vf3ao8v6i8V8rB91ebfu8TzemyeiDRsIq/325cA2TSehSwFySH8Dfv2t885kCSePwOyHcvJA2et8sNbo5GPsI+krqiqO3B53+mf8H52BAEGvBQAA"
  - id: r-doble-distancia
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si la distancia entre dos cuerpos se duplica, ¿por cuánto se multiplica la fuerza gravitatoria entre ellos?
    answers: ["sha256:41b388efbae5035c98fbc604837426d764062cda40acc961c6f757a12b4eb4a6","sha256:a69c7dee712deae020e41c7c3e88450c37df256621e4795905e6fe15bef7b7d4","sha256:0a0a51163377bf5c622e01bf067bb0913475cf302d49fd465fcd686320324de6"]
  - id: r-g-no-depende-masa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿De qué depende la gravedad en la superficie de un planeta?
    options:
      - |
        De la masa del cuerpo que cae
      - |
        De la masa y el radio del planeta
      - |
        De la velocidad del cuerpo
      - |
        De la forma del cuerpo
    answers: ["sha256:1b7d0afb3f792b2350ba298ed36030cdbd617f174cc821a85e5fa567a6830282"]
  - id: r-primera-kepler
    tier: 1
    type: opcion
    review: true
    prompt: |
      Según la primera ley de Kepler, ¿qué forma tienen las órbitas de los planetas?
    options:
      - |
        Circunferencias centradas en el Sol
      - |
        Rectas
      - |
        Elipses con el Sol en uno de los focos
      - |
        Parábolas
    answers: ["sha256:6f02e41a4b20e125d58e0fee9da0fda0c2692697a59c8eaed9b397955501661b"]
  - id: r-segunda-kepler
    tier: 2
    type: opcion
    review: true
    prompt: |
      Según la segunda ley de Kepler (áreas iguales en tiempos iguales), ¿cuándo se mueve más deprisa un planeta?
    options:
      - |
        Más deprisa cerca del Sol (perihelio)
      - |
        Más despacio cerca del Sol
      - |
        Siempre a la misma velocidad
      - |
        Se para en el afelio
    answers: ["sha256:7b6e74f09160316a465f43944a47d6c8799b9bd7c8a5396086f62160cdb783e4"]
  - id: r-escape-masa
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo depende la velocidad de escape de la masa del objeto que se lanza?
    options:
      - |
        Es mayor para cuerpos pesados
      - |
        Es mayor para cuerpos ligeros
      - |
        Depende de la dirección del lanzamiento
      - |
        No depende de la masa del cuerpo lanzado
    answers: ["sha256:c29f3e9f0db86cb70db88be3a4859db24f4b14f0f1bd2401d32670c36ca7bfec"]
  - id: r-energia-ligada
    tier: 2
    type: opcion
    review: true
    prompt: |
      Tomando la energía potencial nula en el infinito, ¿qué signo tiene la energía mecánica de un satélite en órbita (ligado al planeta)?
    options:
      - |
        Positiva
      - |
        Negativa
      - |
        Cero
      - |
        Infinita
    answers: ["sha256:3f38608167254b60ecc328bff090bd2f51c094600d83993b1c487c378f9c09d5"]
  - id: r-kepler-4-ua
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Con la tercera ley de Kepler, ¿cuántos años tarda en dar una vuelta al Sol un asteroide a $4$ UA?
    answers: ["sha256:83f56a146e5059adf16c637ea96e692d7cf66b7b9497e7853fc43c96a877fea0","sha256:952c8c14ad25b8c386aacdbbe52ca3f425b7af634d9ef7b8c0d2457c3e41be58","sha256:01ed3743694d1db0ec9db509f37e6239c0c3d518456ca2f1eb3328da6e0f8049"]
---

# Gravitación: ley de la gravitación universal, campo gravitatorio, energía potencial gravitatoria, velocidad de escape, satélites y leyes de Kepler

Durante milenios se pensó que el cielo y la Tierra seguían leyes distintas. Newton mostró que no: la fuerza que hace caer una manzana es la misma que
mantiene a la Luna girando alrededor de la Tierra y a los planetas alrededor del Sol. Con una sola ley se explican las mareas, las órbitas de los
satélites de comunicaciones y GPS, el viaje de las sondas espaciales y el descubrimiento de planetas que nadie había visto. Este nodo presenta la
gravitación universal y sus consecuencias.

## Objetivos

Al terminar sabrás:

1. Aplicar la ley de la gravitación universal y calcular la gravedad en la superficie de un astro y a cierta altura.
2. Describir el campo gravitatorio y la energía potencial gravitatoria en general.
3. Calcular velocidades y periodos de satélites en órbita circular, y la energía de un satélite.
4. Calcular velocidades de escape.
5. Enunciar y aplicar las tres leyes de Kepler.

## Qué debes dominar antes

[[fis-trabajo-energia]] (energía potencial y conservación de la energía), con el movimiento circular de [[fis-vectores-movimiento-plano]] y la dinámica circular de
[[fis-dinamica-aplicaciones]].

> [!question] Test de entrada
> 1. Aceleración centrípeta de un objeto que gira a $2$ m/s en una circunferencia de $4$ m de radio.
> 2. Escribe $6\,370$ km en metros con notación científica.
> 3. Si $T^2 = k\,r^3$ y $r$ se multiplica por $4$, ¿por cuánto se multiplica $T$?
>
> Respuestas: $1$ m/s²; $6{,}37 \cdot 10^6$ m; por $8$.

## 1. Para qué sirve

- **Satélites**: comunicaciones, GPS, meteorología, observación de la Tierra (órbitas bajas y geoestacionarias).
- **Exploración espacial**: lanzamientos, transferencias entre órbitas, asistencias gravitatorias, velocidades de escape.
- **Astronomía**: medir masas de planetas y estrellas, detectar exoplanetas y materia oscura.
- **Geofísica**: mareas, variaciones de $g$ que revelan minerales o cavidades bajo el suelo.

## 2. La ley de la gravitación universal

> [!practico]
> Tú atraes a la persona que tienes al lado, y ella a ti, pero con una fuerza tan pequeña (millonésimas de newton) que no se nota. La gravedad solo es
> importante cuando al menos uno de los cuerpos tiene una masa enorme, como un planeta. Y se debilita rápidamente con la distancia: al doble de distancia, la
> cuarta parte.

Dos cuerpos de masas $m_1$ y $m_2$ separados una distancia $r$ (entre sus centros, si son esféricos) se atraen con una fuerza
$$
F = G\,\frac{m_1m_2}{r^2}, \qquad G = 6{,}674 \cdot 10^{-11}\ \mathrm{N\,m^2/kg^2}
$$
dirigida a lo largo de la línea que los une (y por la tercera ley, la misma sobre cada uno). $G$ la midió Cavendish en 1798 con una balanza de torsión, «pesando la Tierra».

## 3. Campo gravitatorio y gravedad de un astro

Un cuerpo de masa $M$ crea a su alrededor un **campo gravitatorio**: la fuerza por unidad de masa que sufriría otro cuerpo, $\vec g = -\frac{GM}{r^2}\,\hat r$ (hacia el centro). En la
superficie de un astro de radio $R$, $g_0 = \frac{GM}{R^2}$; en la Tierra, unos $9{,}8$ m/s². A una altura $h$, $g = g_0\left(\frac{R}{R + h}\right)^2$: disminuye, pero despacio (a $400$ km aún queda casi el $90\,\%$). La gravedad
**no depende de la masa del cuerpo que cae**, como ya sabía Galileo.

## 4. Energía potencial gravitatoria y velocidad de escape

Lejos de la superficie, $mgh$ deja de valer. La energía potencial gravitatoria general, tomando cero en el infinito, es
$$
E_p = -\frac{GMm}{r},
$$
negativa: hay que aportar energía para separar los cuerpos. Para $h$ pequeña respecto de $R$, la diferencia entre dos alturas se reduce a $mgh$.

**Velocidad de escape**: la mínima para que un cuerpo lanzado desde la superficie no vuelva. Por conservación de la energía, $\frac12mv^2 - \frac{GMm}{R} = 0$, de donde $v_e = \sqrt{\frac{2GM}{R}}$. En la
Tierra, unos $11{,}2$ km/s, sea cual sea la masa del objeto. Si un astro es tan denso que $v_e$ supera la velocidad de la luz, es un **agujero negro**.

## 5. Satélites y órbitas circulares

> [!practico]
> Imagina un cañón en lo alto de una montaña altísima (el «cañón de Newton»). Con poca velocidad, la bala cae cerca; con más, más lejos. Con unos $8$ km/s,
> la bala cae tan «lejos» que la curvatura de la Tierra la hace caer siempre sin llegar nunca al suelo: está en órbita. Un satélite es un objeto que cae
> continuamente alrededor de la Tierra.

En una órbita circular de radio $r$, la gravedad hace de fuerza centrípeta: $\frac{GMm}{r^2} = \frac{mv^2}{r}$. Por tanto:

- **Velocidad orbital**: $v = \sqrt{\frac{GM}{r}}$ (más lenta cuanto más lejos).
- **Periodo**: $T = 2\pi\sqrt{\frac{r^3}{GM}}$. La Estación Espacial Internacional, a unos $400$ km, da una vuelta en unos $92$ minutos; un satélite **geoestacionario**, sobre el ecuador a unos
  $35\,800$ km de altura, tarda un día y parece inmóvil en el cielo.
- **Energía**: $E_c = \frac{GMm}{2r}$, $E_p = -\frac{GMm}{r}$, $E = -\frac{GMm}{2r}$ (negativa: el satélite está ligado). Para subir a una órbita más alta hay que **aportar** energía.
- Los astronautas «flotan» porque están en caída libre junto con la nave, no porque no haya gravedad.

## 6. Las leyes de Kepler

Kepler las obtuvo hacia 1609-1619 a partir de las observaciones de Tycho Brahe, y Newton las dedujo de su ley:

1. **Órbitas elípticas**: los planetas describen elipses con el Sol en uno de los focos ([[mat-conicas]]).
2. **Ley de las áreas**: la línea Sol-planeta barre áreas iguales en tiempos iguales; el planeta va más deprisa cerca del Sol (perihelio). Es la conservación del momento angular.
3. **Ley de los periodos**: $T^2 \propto a^3$ ($a$, semieje mayor), con la misma constante para todos los planetas del Sol. En años y unidades astronómicas, $T^2 = a^3$. *Ejemplo:* Marte, a $1{,}52$ UA,
   tarda $1{,}52^{1{,}5} \approx 1{,}88$ años.

> [!formal] Con rigor: la tercera ley y la medida de masas
> Para órbitas circulares, de $\frac{GMm}{r^2} = m\frac{4\pi^2}{T^2}r$ resulta $\frac{T^2}{r^3} = \frac{4\pi^2}{GM}$, independiente de la masa $m$ del satélite. Midiendo el radio y el periodo de cualquier satélite (natural o artificial)
> se obtiene la masa del astro central: así se conocen las masas de la Tierra, del Sol, de Júpiter o del agujero negro del centro de la galaxia. Para elipses vale lo mismo
> con el semieje mayor, y si las dos masas son comparables, con $M + m$. $\blacksquare$

## 7. Errores típicos

- Usar la distancia a la superficie en lugar de la distancia al centro.
- Aplicar $mgh$ con alturas comparables al radio del planeta.
- Pensar que en órbita no hay gravedad.
- Creer que la velocidad de escape depende de la masa del objeto lanzado.
- Olvidar elevar al cuadrado la distancia en la ley de Newton.

## 8. Resumen

- $F = G\frac{m_1m_2}{r^2}$; campo $g = \frac{GM}{r^2}$; $g$ con la altura.
- $E_p = -\frac{GMm}{r}$; escape $v_e = \sqrt{2GM/R}$.
- Órbitas circulares: $v = \sqrt{GM/r}$, $T = 2\pi\sqrt{r^3/GM}$, $E = -\frac{GMm}{2r}$; geoestacionarios.
- Kepler: elipses, áreas, $T^2 \propto a^3$; medir masas.

## Repaso: lo que debe quedarte dentro de un mes

1. La ley de la gravitación universal y cómo cambia la fuerza con la distancia.
2. De qué depende la gravedad en la superficie de un planeta.
3. Cómo se obtiene la velocidad de una órbita circular.
4. Qué es la velocidad de escape.
5. Las tres leyes de Kepler.

## Siguiente

[[fis-fuerzas-energia]] repasa el bloque; después, el tema `fis-oscilaciones` (movimiento armónico simple).
