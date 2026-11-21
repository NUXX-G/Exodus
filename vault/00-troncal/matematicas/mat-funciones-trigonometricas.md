---
id: mat-funciones-trigonometricas
title: "Funciones trigonométricas: seno, coseno y tangente como funciones, periodo, amplitud y fase, funciones inversas y modelos periódicos"
area: matematicas
trunk_level: 4
prerequisites: [mat-identidades-ecuaciones-trigonometricas, mat-funciones-exponencial-logaritmica]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 6: «Funciones», sección 1.4 (funciones trigonométricas) y 3.4 (periodicidad). Apuntes Marea Verde, autor José Gallegos Fernández. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_06_Funciones.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 12: «Funciones exponenciales, logarítmicas y trigonométricas», secciones 3.1-3.2 (las funciones seno, coseno y tangente). Apuntes Marea Verde, autor Miguel Ángel Paz. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/12_Exponencial_4B.pdf"
  - "OpenStax, «Precalculus 2e» (2021), capítulo 6 («Periodic Functions»): gráficas de seno y coseno, transformaciones e inversas. https://openstax.org/details/books/precalculus-2e"
hints:
  - "Concepto: en y = A·sen(Bx + C) + D, |A| es la amplitud (media altura de la onda), 2π/B el periodo (lo que tarda en repetirse), −C/B el desfase y D la altura del eje central. Con x en radianes."
  - "Herramienta: máximo D + |A| y mínimo D − |A|; ceros de sen(Bx) en x = kπ/B; asíntotas de tg(Bx) en x = (π/2 + kπ)/B. Para un fenómeno periódico, identifica primero el periodo, el valor medio y la amplitud, y luego en qué punto del ciclo empieza."
  - "Documentación: Marea Verde Matemáticas I cap. 6 (secciones 1.4 y 3.4); OpenStax Precalculus 2e, cap. 6."
exercises:
  - id: periodo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el periodo, en radianes, de $y = {{f}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"f":"2\\operatorname{sen}\\left(4x\\right)"}
        answers: ["sha256:effda172fcb8c3b014b3b811200b016cc979ec841c352d9bb790538bedc915aa","sha256:04de768fd8763220b6e8a51298ce5e4791c4c87d6161ef52cbfeaa517deed025","sha256:02612b5f2afc680cc9a413bea5ae9b4e27c2e27521ee4841425f32c68f43af20"]
      - values: {"f":"\\cos\\left(0{,}5x + 1\\right) + 3"}
        answers: ["sha256:4fa6b06079e64af85fc2e1626112966e7bbfefc75f173abb565c440540719127","sha256:c51ca8c25df913a198a26d97b9746b0facfd61bf5a4d1e53af9ebddd8cc4ead8","sha256:a608d5d092286b20c5cac966444c1f69c8a8904da8c6cfee2666e5a577446124"]
      - values: {"f":"5\\operatorname{sen}\\left(3x - 2\\right)"}
        answers: ["sha256:0f0b218e0eb3c49a63a9540c24f9c8138b2477a970415d3378f2c8fa556d721f","sha256:44ae968af7be73c75aa6e096b7d7a58e4cec4166949d5cd1b6b53ff9fb6a8703","sha256:67c7840b3ea705c3e40f97dbe2ae551a229b77be334b34429967f468087a1dce"]
      - values: {"f":"0{,}5\\cos\\left(\\pi x\\right) + 1"}
        answers: ["sha256:567689ab0020da7520764ffc5968f588e367786d058a7d9d39769fb2281a12df","sha256:4678d8f0a09c98ca94daa7faee508ae344e303e1daa3a0cf4051afec81afb044","sha256:a08cd5cfa42ef353d17e6a07125cec1157340b0ddb555e568436dd8686a4737c"]
      - values: {"f":"4\\operatorname{sen}\\left(\\frac23x\\right) - 2"}
        answers: ["sha256:c9a5b7c9d7628a2bdfeb926a5627fa6d109e13e7ea2f4b88b275f8f1b7c7c0b9","sha256:74d7d329486fdc09bd935f089acac1cf156304c68dffa4b9549b2b08f34b5817","sha256:f08ab629206f57de0b435bb6f4e032489baebb94b0f980ce5c950fbded2fef14"]
      - values: {"f":"1{,}5\\cos\\left(6x + 0{,}5\\right)"}
        answers: ["sha256:1d2e60ea1374cbfaf307d7d97ebb1129c9ff8ab2e0f79427cfeeff89176bcb48","sha256:30bdf0dd4747d555d5f196d38ac6bd0ca8a8ff1f212730aa21e67d95c51780ae","sha256:d4df99d9ef3857d8d5ece0697fd4619bed02340891aeb710b1652fa6e16a6df4"]
  - id: maximo-y-minimo
    tier: 1
    prompt: |
      ¿Cuáles son el valor máximo y el valor mínimo de $y = {{f}}$? Respuesta: `máximo;mínimo`.
    variants:
      - values: {"f":"3\\operatorname{sen}\\left(2x\\right) + 1"}
        answers: ["sha256:ba370f8efee3c8a520bd74c9be3ea0ee7cd66c32f56f1883c003cde0f33c86bd"]
      - values: {"f":"5\\operatorname{sen}\\left(x\\right) - 2"}
        answers: ["sha256:bc73b00215906dc00e09ba98094b0467bb71f78aa2c2ef2aa5d3ade0ca6f8d64"]
      - values: {"f":"0{,}5\\operatorname{sen}\\left(4x\\right) + 3"}
        answers: ["sha256:b720b1b45ecbac166f4616f527b842318cd3c80ee546c0c69ee416128b948432"]
      - values: {"f":"2\\operatorname{sen}\\left(3x\\right)"}
        answers: ["sha256:2f6f5f24734eb41a14264419bb6e1265335041d117581205b284d3e3fbad7313"]
      - values: {"f":"-4\\operatorname{sen}\\left(x\\right) + 6"}
        answers: ["sha256:3ccee360e61de9cce694eb0fddea777df93acc93e405b69d6d34822df7c81b6a"]
      - values: {"f":"1{,}5\\operatorname{sen}\\left(2x\\right) - 1"}
        answers: ["sha256:60825a93a7dc5c0a37eef8334d6de6c2bad45a818fb34bba59a522ff9980eb2d"]
  - id: evaluar-en-radianes
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula $f({{x}})$ para $f(x) = {{f}}$ ($x$ en radianes; al menos cuatro cifras significativas).
    variants:
      - values: {"f":"2\\operatorname{sen}\\left(x\\right)","x":"1{,}2"}
        answers: ["sha256:a9732c61fdb3b97e0e20c34adc83ddf94e5271e6001ea3a1f6f4ad7b635303ac","sha256:6c783abfa827e139c12ab14945e6b3898309ad034cea16649587caca7558616b","sha256:a8ec9f83214c57283dee123e67884728d598bf76afec0a28d66a7721880b8ad2"]
      - values: {"f":"3\\cos\\left(2x\\right) + 1","x":"0{,}4"}
        answers: ["sha256:52361097f8934c0e9527e7c7cd106798ffe6c4cd3f7736b9d849d7fa6ea0eb53","sha256:22f56e9a0f3b770ef1e3b55b5adc51e4fb7aae0ec55224b65bead70bd5aa70cc","sha256:135ec1243ab2f09bb8c4145f17b543513db52d92f5f4d1757c2d95b8d5440e94"]
      - values: {"f":"\\operatorname{sen}\\left(0{,}5x\\right)","x":"5"}
        answers: ["sha256:f6df0cab5aa0b50246eae02c5530fd882c313e4ddb20db1b9cdb190e6bd6a974","sha256:6e51cbd3b1ae4e67cbeb57de2c012019994dccb77ddd8b83dec416935938dc90","sha256:3bf34f9f68505e79df8e5545c2f3f1f39a003e377b7a7f20240430a6c47fcbb7"]
      - values: {"f":"4\\cos\\left(x + 1\\right) - 2","x":"2"}
        answers: ["sha256:b476ff5d7ab6c877c285cab3069e20ff56dfcf83657f41e2df52c95fa3780c7d","sha256:e1a9fd310e09dd6f6a9811b26bff7a4f9381facd686f0d9fc946268373f931ad","sha256:7ead1ab0a42308a9f39ea52a2ad64eb8c3bfbf133eae2b20d64cd3340d6a8ff3"]
      - values: {"f":"0{,}5\\operatorname{sen}\\left(3x\\right) + 2","x":"(-1)"}
        answers: ["sha256:cea84d9ff71bdbaabaa70e59125a1787b951bd869dd4694aad3d50817587c20d","sha256:220883e0b8df2c03b507b6a1a57cbe4f8b8ab8f831629e02349bbc97f6bbd1f6","sha256:ffa5a7d04a51a3d1a7734369c8939df50d9fbbe7cd2510babb28d8517c75e517"]
      - values: {"f":"\\cos\\left(\\pi x\\right)","x":"0{,}25"}
        answers: ["sha256:fa7ba10b1bd454601e9293fce07b314b056d3108488d5423444fd9ea74427493","sha256:d8eab6276c3d764d4070664f2657b0aa714f21e463cb9f600706f25bff87e6c8","sha256:2ee3d840783adecfc645734271ac61c878901480b121ebd9eb1c06cc9366317d"]
  - id: numero-de-ceros
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Cuántos ceros tiene $y = \operatorname{sen}({{B}}x)$ en el intervalo $[0, 2\pi)$?
    variants:
      - values: {"B":"1"}
        answers: ["sha256:932e3a450b3947b989f05574a9c30b336af6e06d99b7ad7c5825762ee44b6de9","sha256:80f4efb48029ff6b91ee9d315515ed7352d529c3595739757b63d8f8d3d066f2","sha256:68ec240f5675b06bc4e96d6f79d91d8205947b2c108f90f5afcbe5184228ad95"]
      - values: {"B":"3"}
        answers: ["sha256:f86ed42bb57656211a2f702000a0adf8730b63236f93d039eb4629ee685312ab","sha256:624ca743497198468b552e0bac2e731cf78f63a7b6c567bdf24808db5d10dc3c","sha256:a041ebec8672eb6900b3613f31ac45f12a7699c5998552801f29a04ffb962462"]
      - values: {"B":"0{,}5"}
        answers: ["sha256:5f0e3095381dcdf56a7c1693c6ea18461488e99fadac5a797935e15a7f16fd31","sha256:262da73abc0fe220acc00709cf552a9a51778c2d27da6478efbea769f500e613","sha256:b09d64b90b4ab66b3e96e20ed0b0f2316cc130163bb6c796efebe499e1f8a1a6"]
      - values: {"B":"4"}
        answers: ["sha256:b24dba47d866f7c2cb44c3ac05ec41b02b48335e791f28ed57ab57dfc477b184","sha256:c85f32b07faa5910a7892a2cae028c13129850035619a9c7232a027fd31132c2","sha256:5f8bd7e7fa8330c9d09b1df6f62b9801940a9016cf3d4ceab7658fee99690ef0"]
      - values: {"B":"2{,}5"}
        answers: ["sha256:8c7f277a6bfa1150e9e732dd4d08546ea4c7f4cd0e8025a23f3feb243fb9309c","sha256:0724072f79a447f134fa7a04775e1457a6a3aab43c883266c8b0bcdd1b35feb3","sha256:46013eed9fd611eac450e18429bea06384148779d656363b02d746c7c2d50d99"]
      - values: {"B":"6"}
        answers: ["sha256:62d808f745be59b858d809e3bc97e44d2208ed399a2d50c94adc5673f599c3a7","sha256:d7ab2d30a345c066070eb6a87d0948f5bf8d832109d54ee2b2e18e6546fbe6b9","sha256:cf47edcc892f8d64de8c91b63928249b347e5a1d99d7f5fe4b866d63027ba32e"]
  - id: pulsacion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una señal sinusoidal tiene un periodo de ${{T}}$ s. ¿Cuál es su pulsación $\omega = 2\pi f$, en rad/s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"T":"0{,}02"}
        answers: ["sha256:8abbe44c79d93362f0ff75415b661d6afb3372cc446a5907b51bb9d2af2c8ce6","sha256:c654b06e663b7a0df865d1c0536785aeb20252049a4b0ad92ffe5e5db7bdf2d1","sha256:abddbcdd2eb1309eea9d0bab4598a8389aba901db1b4835a883a621dd2cee059"]
      - values: {"T":"0{,}5"}
        answers: ["sha256:5cc120983e51e69e64ed841059e35463f8ed6217926f9c3598ce79534e442a40","sha256:4247c363ecca7ceaf0bacffed094c3ca2cf1beefc51a96180bcb9ad9cbb70ef3","sha256:c2408b7ca998b694ca8abe03ebb0fceaed192bbc2d274deb3679925dcccc037d"]
      - values: {"T":"2{,}5"}
        answers: ["sha256:6749b27af73fa6b025d29b250c9be28dbfaa036161b55dce00d2156a4f7a0565","sha256:94ae51a9ece370a924313b024c5db57dbcfa360fd64ee5591bf2d52f1915b616","sha256:10efc99d5187e2d62af82e158e2f29f45f88b75461d6c4b45618c9235f6e0bdd"]
      - values: {"T":"0{,}004"}
        answers: ["sha256:d13045ab26a1b8bc349d6f5ffac8aa8fc90621cf6666b7488498de6b30ed0e50","sha256:e408d8d79e6925f56860afad075a5d58d2eac3d4fc24a350b36c7221dbd76701","sha256:d777ebff8a2f73395372f00f8ad3122b24a469e25556a705c77ca0cd584c885c"]
      - values: {"T":"8"}
        answers: ["sha256:3e4a3812e882765d831eb8eb07698c329ccde7249d8c4579da28fadf043142dd","sha256:413a64f953f5b15d2b81225465a917bf1ad6f8df4104097acb0802a5f11f45a7","sha256:0ecdbed1f04066176c3a2dd4a43291c438b5c75cd9c974e94fa16768ee604d37"]
      - values: {"T":"0{,}1"}
        answers: ["sha256:b70a3a0e8730214b36025e49868d4b62b9e227b74105e9026a240b5ac04c9932","sha256:387f5b8b3dbda223f5f34df92142e4b62a617184569638129800a792ac6dc144","sha256:01ae67eac22b6894dab5006805a2fe3206a61b5ec6e5dad1595b43edbf999a7d"]
  - id: modelo-de-mareas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      La altura del agua en un puerto (en m) sigue $h(t) = {{D}} + {{A}}\cos\left(\dfrac{2\pi t}{{{T}}}\right)$, con $t$ en horas desde la pleamar. ¿Qué altura hay a las
      ${{t}}$ h? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"D":"3","A":"1{,}2","T":"12{,}4","t":"3"}
        answers: ["sha256:6128f49619e39102b51a08c55d52dc1a7d9ad39e0fdf73c5124083cf6fc59ece","sha256:4eb2c82f5db9cb463d810135c4e47dd7071d2f8fd4c24018f2617a865ecb4f88","sha256:0ed5a659b4692c18f9c9e111e134f20dd7591066377d9bbab3eef40850a1ae39"]
      - values: {"D":"5","A":"2","T":"12{,}4","t":"6{,}2"}
        answers: ["sha256:e4d285f5da50dd1e51f94acfd15a376c5a4e3d4e28bd4a613fd4721b66cd9044","sha256:0a51fe48f78e30a5373c595c1593454f26fb3011d5ba0eea48503cbbd600a7e1","sha256:e5b03319d9a546bf3c6fe758e8340ef4847462d147bbc24fede9b1333ed85be0"]
      - values: {"D":"2{,}5","A":"0{,}8","T":"12{,}4","t":"9"}
        answers: ["sha256:c609ba9695f2dcf12dd82c9911866f83c25adb93a497a3fe6a0c75a3633c38a7","sha256:961b701ab1f160ea72ae84393ab4a8dc0c83f097882a9d4f052eae3d3f6da750","sha256:6db3324c48226e87eb6861c2f9a924a9f2ea772f79b0963e0ddeb6654027707d"]
      - values: {"D":"6","A":"3","T":"12","t":"4"}
        answers: ["sha256:7bd77e867159504e73a03d94971e4bbcc1f4364b6bdc05f58fbbd401b0d92514","sha256:60e822f40e3f85d718855a7f7a131883ed92002f4dd469f11d60db3c2721faed","sha256:57d1b969fd69e4fa8c37576ea80c25af08762359c3dccb1489fbacab7f98ce4a"]
      - values: {"D":"4{,}2","A":"1{,}8","T":"12{,}4","t":"1{,}5"}
        answers: ["sha256:e8653c08ad061c8e75eff3cc05fdbd4ef94024a3c87ca1e37eca169ecd216248","sha256:436b48d541bc235cc1575562839889e72396a16980c6fe7273b4279631c352f6","sha256:3b8b5c551d26eb122ef61e829a112057b3c1f69eb05273271ed552d2fac03efa"]
      - values: {"D":"3{,}5","A":"1","T":"12{,}4","t":"15"}
        answers: ["sha256:5d701cf54e3efc90bef883726dc9a0c074056d2dd85d5b7235944ce0a5b6bb49","sha256:c51d3a73637f49e1b85d1353c6e4c6d2b4624c27130aef5d68ff5674dc31afe1","sha256:ec09482c5e20002252245e1af410e5cadb869783666b99d7931bdeb0437c817e"]
  - id: funciones-inversas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula ${{e}}$ en radianes (valor principal; al menos cuatro cifras significativas).
    variants:
      - values: {"e":"\\arcsin 0{,}5"}
        answers: ["sha256:bc7363c5789f3b220c858ca5287897bb44ad196a3d74c680a173951219c724e0","sha256:b496893b69832748cd32f26f5f49ba9cffbea59358e470a8b6c599d8895f20e3","sha256:f9e782380c5cc348187cd6843d75ff5753def95b25a6d1842925fcc3f3302144"]
      - values: {"e":"\\arccos(-0{,}5)"}
        answers: ["sha256:4758612f5b2780c464546ceb519ec16ee30046d493abe0a88ad1788f2962355f","sha256:886d2612e1de2715f05ab248a45ba1735480b9d4f4d9f9e4baeb0f9d071aa41c","sha256:ab6487c95f412f4c17e5526387c698a07194f23c3d48967d35107629ac23f90d"]
      - values: {"e":"\\arctan 1"}
        answers: ["sha256:5cb772a13fd2592f6018c4243be23ced9bd0b87772bda821b94422cda5199605","sha256:6691ee360adfeb453313ff452a24f5a759a25401d89b9dcd15574fbb423a5e8c","sha256:fefdb0ebc58a56f417ba58caab8a7c0d25f0eb2d47771a8c056a453cc81ff479"]
      - values: {"e":"\\arcsin(-0{,}8)"}
        answers: ["sha256:a6d83a8bd13ccfb9026f5f484482649816af745f26665c224651166eaae45c84","sha256:64addb36611ff944d47972ef3abe84159e8a703c43441d28474fce9a2c3d045c","sha256:54d611d34f85947b84202ae3c6441d975cadb4ea327e1f958d372ef3a4047594"]
      - values: {"e":"\\arccos 0{,}3"}
        answers: ["sha256:b4f58f13b7bd8558318cb306b178051309bbb83b36b2d638c5556bf947784fef","sha256:1333e1b866f7beac7ca5875ebbf6c9119da3c2bcaca1aaef601ab15fed1f4eeb","sha256:2991abcafede847c116c27db51bc4e0b1cb0c995703988a1bb70a0b9962d707f"]
      - values: {"e":"\\arctan(-2)"}
        answers: ["sha256:85fc5822558598f571c70340a6385c01746f3a7f0c0fdd7191749a183e0163e4","sha256:63f078cc0dfa68fa2399030ffa7180c880c6fefe5e834e400d91f0b0dc990320","sha256:2a6ff4606ab0c4384461cc09fa8bd1a243e86467452e1df2e5196ec3d0f7ee46"]
  - id: asintotas-de-la-tangente
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Cuántas asíntotas verticales tiene $y = \operatorname{tg}({{B}}x)$ en el intervalo $(0, 2\pi)$?
    variants:
      - values: {"B":"1"}
        answers: ["sha256:20cb6e25d1c98386ced31d7d9dc3f4de9b25d9fc103aa1f68c1e769c8caf0ab3","sha256:b94b5db388ed9b1211c92f2de3310ec933629fcfbaffd4c264ee7a2759410554","sha256:e8199d583e704a7787f4c878291a423da3b2511e335b51af0550ceacf52922e7"]
      - values: {"B":"2"}
        answers: ["sha256:7e1b7bff5c4cfe9360b98aecb181aa4e930ba56c8c6bb21c1b9c94bb407b47fb","sha256:5e45d57b776332ee30b34878fd2be3f39b7a7e5dbaf6a7b4b72c97756be18b6c","sha256:44c1b9b907a432d99129daa388fd2a0ef06a837ff06f389811f1b4d16fb9b3ac"]
      - values: {"B":"0{,}5"}
        answers: ["sha256:a105a1c2c76553a7e9379f9dfef340f99f4eac32690cdb5ee32f0f0f5ca3f0ef","sha256:7fc80c872daaa128f574279c7976de70b9b162a7aaf0643546f1b5b991651ef8","sha256:8c532f44ab7376f1cb6e79f9622db132ff6bd562c9555c33298dc277b7d1cd04"]
      - values: {"B":"3"}
        answers: ["sha256:cba7dc74da4aa95f5c6e8521bbe826b397c6032d9d5a4a396ebd3576fca524ee","sha256:3184d29f9c4ecbd287d336a7d4f188fe4902046ee96d2a2d6ffb3f0d29be416d","sha256:a10eddcdd0e05de2929e88e05ff01da3671f01e72a2766da0a7f7e8aa65f42f5"]
      - values: {"B":"1{,}5"}
        answers: ["sha256:7d8cbfaf7c2dd804942686d555bac35ca85261152c529817d2de84f50331ae6b","sha256:e2c9e191fddf068d3a0a313eb570edf59411b7ed26a72642e7c0cf7c1a015c2a","sha256:88694dcc687fd31487b3eaf49ebf2c4e754e4e20e5046ce8139c2ef5c72ec226"]
      - values: {"B":"4"}
        answers: ["sha256:840c2967141de19589c85b560c11a6dc2654254202cafe9e5ad750c766a14562","sha256:2b7e9807f329fabcde1f7014c12058d20db5c099c9146a8a551498bb426087af","sha256:ec22bae351c275c82740bc758b90b4413aebd4b0fe1a82c3a5eb16f0ac447b69"]
  - id: desfase
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿En qué valor de $x > 0$ alcanza por primera vez su máximo la función $y = \operatorname{sen}\left(x {{op}} {{phi}}\right)$? (En radianes; al menos cuatro cifras significativas.)
    variants:
      - values: {"phi":"\\frac{\\pi}{3}","op":"-"}
        answers: ["sha256:f1822da79f366468eec3703f2335f6440b7aab363521c6c0908c890f49afbdbe","sha256:44d8efc570f1becc3903202541bacacf15a5629482c90a66681d0b0df2666d3d","sha256:6f90d52998a5845910c88e9584480272c8d241f944643b3404443ecfcd291269"]
      - values: {"phi":"\\frac{\\pi}{6}","op":"-"}
        answers: ["sha256:bb34d1f191262019d015d2db39d9c45b297bf340b327d07c8c1b5dab0d4d7fcd","sha256:36bcb03c03f75fe7b85b330dc363414c9110ab14572dd7db52abb5a136528d75","sha256:4df2775872d5a7dce6d506b532dba9d9f76e70bba1890e399ab909d1ebe6d742"]
      - values: {"phi":"\\frac{\\pi}{4}","op":"+"}
        answers: ["sha256:96aa96e98800dd68e7dfd749e2a457da5155cfd56fe132f1ed110718f42443d0","sha256:4dbd78b5e50c522e16d502411b236c819c94a1b3cf744dc130b2cf8cbda3e61a","sha256:97205c74ef33a9aba08c8d4bb5eafabcd9bd7a026de98f83b4b2e7bd20a3f852"]
      - values: {"phi":"1","op":"-"}
        answers: ["sha256:c37a7177b6e7ee320a2996e0930c5b107cfed0b327a67340b1881ebe80b30902","sha256:98f25dcb7333f2b856069a1ed57667d0136a4cb725c080c6c99af7c4a331d367","sha256:d937c6cee0ec17e7455b6cd404609ab43ee748d7ca64317b85c6374a0b296ced"]
      - values: {"phi":"\\pi","op":"-"}
        answers: ["sha256:846bdf3c9f1644455468093fdfe202a3afe8d108e62a0081944990b65e5d49c8","sha256:0b919945b66c8dfb688f7c00e7d37cf740f063c6689461012da84dbead5c1bd3","sha256:697c2574f1956bbbb3656a007ec82765551047629f117e7f2af8ebf87edd4d19"]
      - values: {"phi":"1","op":"+"}
        answers: ["sha256:89ba99907c7d0c0a6cdf3ac1267ba362f36171aab1121dee4eadf12dfcb6602d","sha256:fdab5d2f223c76fa9094f2560f0cf32ee4903f9f59788a92c7923fb0b3adbafe","sha256:72de72447a204722218be9703455fc54a6d55e83f4f49487d3c450c1713e9f41"]
  - id: noria
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una noria tiene el eje a ${{H}}$ m de altura y ${{R}}$ m de radio, y da una vuelta cada ${{T}}$ minutos. Una cabina está en el punto más bajo en $t = 0$. ¿A qué
      altura está a los ${{t}}$ minutos? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"H":15,"R":12,"T":8,"t":"3"}
        answers: ["sha256:715be9ea5626d01ac7c571e6959643ebb601ff3937f4e0b71e662d17f2edd59f","sha256:e2b1257700ac6aca4626ace61f06dba19ba73551bbede951f55461cd3189ad67","sha256:a4f573b6eb094ff1ff828f83e177205e4346789db6f264f372c145c531684931"]
      - values: {"H":30,"R":25,"T":12,"t":"2"}
        answers: ["sha256:93553aff769f0a9ababbd462c6cddeff68cce9030ae7da3a4815c9bdd329fc0b","sha256:02fb8d2c0bec2f3f560f0d26d3a41219e5a80b289783640453a0bcced1ea2917","sha256:e6264c2771c619f1eab5c5044133630af9e34ebb0dbc1afbdf92ee9bc5e702a2"]
      - values: {"H":10,"R":8,"T":5,"t":"4"}
        answers: ["sha256:3e0321d5874e7d79b6dfb9cad06de533ca2f7e0b9c7d15aca8935f35dfd5600c","sha256:37a4b78e023dbadd34fff1c35fd13547385c24694e799efd3244b88a08c971de","sha256:6fcf3b56353c5afe62d1e7050b5fcb3e378f9da94700752069977f2f5b41d02a"]
      - values: {"H":40,"R":35,"T":15,"t":"10"}
        answers: ["sha256:d1858935a565a86ab370f13480fe0cee54fbcf5d2642a927b5ace504879368fb","sha256:2f2c151cfba62c8c56a7c891beb19b2f28ded4655821331404d017726cd189d3","sha256:ff3c0b4cf0776c46a34c7cf6d75115f05aeb649463f72555ee2d890bfac5c556"]
      - values: {"H":20,"R":18,"T":6,"t":"2"}
        answers: ["sha256:c6deb52b0ec902d0aa1a7da39f63fca94dd75d77eda285e47d5f1f5898036d22","sha256:13e07f036b4bec3505218e007e157c316401445df13558d8d981a48b94988665","sha256:f9764e87e7b5cb2bd6e232677808cf1cdf2bd5e02fdd2823758008c6165bfc29"]
      - values: {"H":60,"R":55,"T":20,"t":"7"}
        answers: ["sha256:08905098bcae2456c3578623d1b5727c2445fc344018b051fc097d732a782d99","sha256:26d70d228c95500e4d22ded3da8a1b48b65290dadfc9d5be9e72c3ae9ebab018","sha256:6f92f17066c4a0e085cba79fbade99e43b66611ded163b8769cb4b5780cff2c8"]
  - id: graficas-trigonometricas
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica cómo se obtiene la gráfica de $y = \operatorname{sen}x$ a partir de la circunferencia goniométrica y por qué es periódica de periodo $2\pi$.
      (b) Explica qué hacen $A$, $B$, $C$ y $D$ en $y = A\operatorname{sen}(Bx + C) + D$ (amplitud, periodo, desfase, desplazamiento vertical), con un ejemplo. (c) ¿Por qué la
      función $\arcsin$ solo da valores entre $-\frac\pi2$ y $\frac\pi2$?
    sealed: "gz64:H4sIAAAAAAACCn2Uz27bOBDGX+WDwIPtqAbq3ZODHpI0L9DdW9XDmBy7E1BDlaQMq24eJueipz32Fr/YglKy6xTZvYki599vvpljlYLvswSt1tViMaP5YoErj51EiugVXa85oAsRnmAl2l63HFmtEBwjkpMA89bUSD3I5z4SOME0Teg4Ug5RqeVjYr0/mBo2KMzBgD1OD7rrfQDr6IWUE2ae4IPuJPcOjj0o2oDINsQoLsyX+EOQuNHH744Tawze0+PPc3cpbCKXH3zH+ByifA2ayWNAYjjZ9HdUSplSrZHIczkHdTRGTKxhiT8jJfRK2PfsM2FmVk3TiZkXzxOTcrNnkEcrqQ1IkiVgaNSHhD35EDmVmJE7yazrV5nMDrjA6HqOd/gPaAM0nHkCaea0bLTRxWK2KR0z366+mcK9VNZ2fuQ3ey5rP7bKvMcbjO+ofF+M3/NLmGsDG9ouSnsOrGXNXKPjKMGFkvw2kj2Oud4fr+/NJcyNgePUefpKv1pi5jhtKTHMm8kUN9dmftmoeW+Q+g0jYENTM0qWS9zecdv5sIYZ8A6/vUZrdZjjAm8NQrLiCaw5lggrgwHmdzPq6yzlTswzJ1s43U79LTw5QXRgm2UfMLM0cvIh/gsaoltRyZSwZ8tpXoPS6Qe+9IyOIiGzcoTonmOiyS7lKLpjUJkd0cyxOIUL6hiJCTaylRHQ0GgOLSMHFxJS/49oRqV43uaPT+RKHasaZ4emibL7nD+ZZSmpDMlYluMnUZ7Ng2Nw4rNcZuzx+H2qtYuiVjryjz/nlyjCddyeHkbdhk0WVtZGC1RPSNJyjqcfhKEcJ8xixZFbVnUV+00UW60/HisbJZfbal3dBE059sM4ZLt4etiKLXJMjl/ZKAPu+pRlfFMG7bmT0/CVKOPspWq9uq9fxLk9dL5YlU3BNtMkwrIGtmzziMFcmbqovR6FO6AIsZTWa9kVRXr/F+ADe7ISdEzsF3p4IjT131o5/aWvS+BpwbxQ38uon+7/Bp87HlOUBQAA"
  - id: r-periodo-tangente
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el periodo de $y = \operatorname{tg}x$?
    options:
      - |
        $\pi$
      - |
        $2\pi$
      - |
        $\frac\pi2$
      - |
        No es periódica
    answers: ["sha256:f8a86c28e2d08fa1300415be52630e8c54a0a3c47f4ce80b4bcad60db2c1f5b9"]
  - id: r-coseno-par
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo es la función coseno respecto de la simetría?
    options:
      - |
        Impar
      - |
        Par
      - |
        Ni par ni impar
      - |
        Periódica de periodo $\pi$
    answers: ["sha256:f12b5c712753e7fcc237efce08b73603defd52b96b94dd75f1396b2b6932a1ac"]
  - id: r-recorrido-seno
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el recorrido de $y = \operatorname{sen}x$?
    options:
      - |
        $\mathbb R$
      - |
        $[0, 1]$
      - |
        $[-1, 1]$
      - |
        $(0, +\infty)$
    answers: ["sha256:5f1935e731e06bbf5fe239ed167e9a4bac71fce34d21e694c9a7d98feaf4e7b5"]
  - id: r-desplazamiento-coseno
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué expresión es igual a $\cos x$ para todo $x$?
    options:
      - |
        $\operatorname{sen}(x + \pi)$
      - |
        $-\operatorname{sen}x$
      - |
        $\operatorname{tg}x$
      - |
        $\operatorname{sen}\left(x + \frac\pi2\right)$
    answers: ["sha256:019951e5f22619b2974afa81c14d975998f832f24f3bc5d12a81ab7f7602a8e4"]
  - id: r-amplitud
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la amplitud de $y = -7\cos(3x) + 2$?
    answers: ["sha256:e9f176319af13547ba90f46c49822c3bc87401658f22b06c7635cf957b7d8473","sha256:555076cf19148c5d9c885a4f0833519b82925320731a295ce2df0f8e6d76fabd","sha256:fd1938d196880777bd87000f96ccea5e4300d163bb7167f59e577b9bfb252c61"]
  - id: r-radianes-calculadora
    tier: 1
    type: opcion
    review: true
    prompt: |
      Para evaluar $\operatorname{sen}(2)$ como función (con $x = 2$), ¿en qué modo debe estar la calculadora?
    options:
      - |
        En radianes
      - |
        En grados
      - |
        Da igual
      - |
        En porcentaje
    answers: ["sha256:b52a4ece1fd37d576063b6de5e254b746fccf137a92492b2a2580f118f9d49b3"]
  - id: r-frecuencia
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una corriente alterna tiene un periodo de $0{,}02$ s. ¿Cuál es su frecuencia en hercios?
    answers: ["sha256:eb0f51808defc6eab972bd4a72a31344fa0f501b9f1b3573276d32cca809450d","sha256:5e2d1cce1c4940c19407c0192bff14effc4abfb22594f583ba1b75e5110b7cc8","sha256:bf33b5bac4efa1bfc559c3b131d7ecc8bd99f23f48d190f9891e4d3a601c16e9"]
---

# Funciones trigonométricas: seno, coseno y tangente como funciones, periodo, amplitud y fase, funciones inversas y modelos periódicos

Las mareas suben y bajan dos veces al día, la corriente de un enchufe cambia de sentido $100$ veces por segundo, una noria lleva a sus
cabinas arriba y abajo, el sonido es una vibración del aire. Todo lo que **se repite** se describe con las **funciones trigonométricas**, que son
las razones del seno, el coseno y la tangente vistas ahora como funciones de un número real (el ángulo en radianes). Este nodo estudia sus
gráficas, cómo se estiran y desplazan (amplitud, periodo, fase), sus inversas y su uso para modelar fenómenos periódicos.

## Objetivos

Al terminar sabrás:

1. Dibujar y describir las gráficas de $\operatorname{sen}x$, $\cos x$ y $\operatorname{tg}x$ (dominio, recorrido, periodo, simetrías, ceros, asíntotas).
2. Interpretar y usar los parámetros de $y = A\operatorname{sen}(Bx + C) + D$.
3. Usar las funciones inversas $\arcsin$, $\arccos$ y $\arctan$ y su valor principal.
4. Construir modelos periódicos (mareas, norias, señales) y calcular frecuencia y pulsación.

## Qué debes dominar antes

[[mat-identidades-ecuaciones-trigonometricas]] (razones de cualquier ángulo, radianes, ecuaciones) y [[mat-funciones-exponencial-logaritmica]]
(transformaciones de gráficas y funciones inversas).

> [!question] Test de entrada
> 1. ¿Cuántos radianes son $90^\circ$?
> 2. ¿Cuánto vale $\cos\pi$?
> 3. ¿Qué le pasa a la gráfica de $f(x)$ si se dibuja $f(x - 2)$?
>
> Respuestas: $\frac\pi2$; $-1$; se desplaza $2$ unidades a la derecha.

## 1. Para qué sirve

- **Ondas**: sonido, luz y ondas en una cuerda son senos y cosenos (el tema `fis-ondas-sonido`).
- **Electricidad**: la corriente alterna es $I(t) = I_0\operatorname{sen}(\omega t)$, con $\omega = 2\pi \cdot 50$ rad/s en Europa ([[ing-electricidad-basica]]).
- **Movimientos que se repiten**: péndulos, muelles, ruedas, órbitas.
- **Análisis de señales**: cualquier señal periódica se descompone en suma de senos y cosenos (series de Fourier).

## 2. Las gráficas de seno, coseno y tangente

> [!practico]
> Imagina un punto que gira por la circunferencia de radio $1$. Si apuntas su altura mientras el ángulo avanza y la dibujas a lo largo del
> eje $X$, sale una ola: sube a $1$, baja a $-1$ y vuelve a empezar cada vuelta ($2\pi$). Eso es $y = \operatorname{sen}x$. La sombra horizontal del punto da $y = \cos x$:
> la misma ola, adelantada un cuarto de vuelta.

| | $\operatorname{sen}x$ | $\cos x$ | $\operatorname{tg}x$ |
| --- | --- | --- | --- |
| dominio | $\mathbb R$ | $\mathbb R$ | $x \neq \frac\pi2 + k\pi$ |
| recorrido | $[-1, 1]$ | $[-1, 1]$ | $\mathbb R$ |
| periodo | $2\pi$ | $2\pi$ | $\pi$ |
| simetría | impar | par | impar |
| ceros | $x = k\pi$ | $x = \frac\pi2 + k\pi$ | $x = k\pi$ |

La tangente tiene **asíntotas verticales** donde el coseno se anula ($x = \frac\pi2 + k\pi$). Además $\cos x = \operatorname{sen}\left(x + \frac\pi2\right)$: la gráfica del coseno es la del seno
desplazada $\frac\pi2$ a la izquierda.

## 3. Amplitud, periodo, fase y desplazamiento

En $y = A\operatorname{sen}(Bx + C) + D$ (igual con el coseno), con $B > 0$:

- **Amplitud** $|A|$: la onda oscila entre $D - |A|$ y $D + |A|$ (si $A < 0$, además se refleja).
- **Periodo** $T = \dfrac{2\pi}{B}$: $B$ comprime ($B > 1$) o estira ($B < 1$) horizontalmente. La **frecuencia** es $f = \frac1T$ (ciclos por unidad) y la
  **pulsación** $\omega = 2\pi f = B$.
- **Desfase** $-\frac CB$: desplaza la onda horizontalmente ($\operatorname{sen}(x - \varphi)$ va $\varphi$ a la derecha).
- **Desplazamiento vertical** $D$: el eje central de la oscilación (el valor medio).

*Ejemplo:* $y = 3\operatorname{sen}(2x)$ tiene amplitud $3$, periodo $\pi$ y oscila entre $-3$ y $3$; $y = \operatorname{sen}\left(x - \frac\pi4\right)$ es el seno desplazado $\frac\pi4$ a la derecha.

> [!formal] Con rigor: por qué el periodo de $\operatorname{sen}(Bx)$ es $\frac{2\pi}{B}$
> $\operatorname{sen}(B(x + T)) = \operatorname{sen}(Bx + BT)$ coincide con $\operatorname{sen}(Bx)$ para todo $x$ si y solo si $BT$ es un múltiplo de $2\pi$ (el seno tiene periodo $2\pi$ y ninguno
> menor). El menor $T > 0$ es, por tanto, $T = \frac{2\pi}{B}$. Del mismo modo, $\operatorname{tg}(Bx)$ tiene periodo $\frac\pi B$. $\blacksquare$

## 4. Funciones trigonométricas inversas

Seno, coseno y tangente no son inyectivas, así que para invertirlas se restringen a un intervalo donde lo sean:

- $\arcsin x$: el ángulo de $\left[-\frac\pi2, \frac\pi2\right]$ cuyo seno es $x$ (dominio $[-1, 1]$).
- $\arccos x$: el ángulo de $[0, \pi]$ cuyo coseno es $x$ (dominio $[-1, 1]$).
- $\arctan x$: el ángulo de $\left(-\frac\pi2, \frac\pi2\right)$ cuya tangente es $x$ (dominio $\mathbb R$).

Ese ángulo es el **valor principal** (el que da la calculadora); las demás soluciones de $\operatorname{sen}x = k$ se obtienen con la simetría y la periodicidad
([[mat-identidades-ecuaciones-trigonometricas]]). *Ejemplo:* $\arcsin\frac12 = \frac\pi6$, $\arccos\left(-\frac12\right) = \frac{2\pi}{3}$, $\arctan 1 = \frac\pi4$.

## 5. Modelos periódicos

> [!practico]
> Para modelar algo que se repite, responde cuatro preguntas: ¿cada cuánto se repite? (periodo), ¿alrededor de qué valor oscila? (valor
> medio), ¿cuánto se aleja de ese valor? (amplitud) y ¿dónde está al empezar? (fase). Si empieza en el máximo, usa un coseno; si empieza en el
> valor medio subiendo, un seno.

- **Mareas**: altura media $4$ m, amplitud $1{,}5$ m, periodo $12{,}4$ h, pleamar en $t = 0$: $h(t) = 4 + 1{,}5\cos\left(\frac{2\pi t}{12{,}4}\right)$.
- **Noria** de radio $20$ m con el eje a $22$ m y una vuelta cada $10$ min, empezando abajo: $h(t) = 22 - 20\cos\left(\frac{2\pi t}{10}\right)$.
- **Corriente alterna** de $50$ Hz: periodo $0{,}02$ s, pulsación $100\pi \approx 314$ rad/s.

## 6. Errores típicos

- Evaluar con la calculadora en grados cuando $x$ está en radianes.
- Confundir periodo y frecuencia, o calcular el periodo como $2\pi B$.
- Desplazar la onda hacia el lado equivocado (en $\operatorname{sen}(x - \varphi)$, a la derecha).
- Olvidar las asíntotas de la tangente o darle periodo $2\pi$.
- Pensar que $\arcsin$ da todas las soluciones de $\operatorname{sen}x = k$.

## 7. Resumen

- $\operatorname{sen}$, $\cos$: dominio $\mathbb R$, recorrido $[-1, 1]$, periodo $2\pi$; $\operatorname{tg}$: periodo $\pi$, asíntotas en $\frac\pi2 + k\pi$.
- $A\operatorname{sen}(Bx + C) + D$: amplitud $|A|$, periodo $\frac{2\pi}{B}$, desfase $-\frac CB$, eje $y = D$.
- Frecuencia $f = \frac1T$, pulsación $\omega = 2\pi f$.
- $\arcsin$, $\arccos$, $\arctan$ con sus intervalos principales.
- Modelos periódicos: periodo, valor medio, amplitud y fase.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo sale la gráfica del seno de la circunferencia goniométrica.
2. Qué hacen $A$, $B$, $C$ y $D$ en $A\operatorname{sen}(Bx + C) + D$.
3. El periodo de $\operatorname{sen}(Bx)$ y de $\operatorname{tg}(Bx)$.
4. Qué es el valor principal de $\arcsin$.
5. Cómo se construye el modelo de una marea o una noria.

## Siguiente

[[mat-funciones-elementales]] repasa el bloque; después empieza el cálculo con el tema `mat-limites-continuidad`.
