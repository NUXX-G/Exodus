---
id: fis-campo-magnetico
title: "Campo magnético: imanes, fuerza de Lorentz, cargas que giran, fuerzas sobre corrientes, motor eléctrico, campos creados por corrientes y fuerza entre hilos"
area: fisica
trunk_level: 3
prerequisites: [fis-corriente-circuitos]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 11: «Fuerzas magnéticas y campos» (magnetismo, campos y líneas magnéticas, movimiento de una partícula cargada en un campo magnético, fuerza magnética sobre un conductor, fuerza y torque en un bucle de corriente, efecto Hall, aplicaciones). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/11-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 12: «Fuentes de campos magnéticos» (ley de Biot-Savart, campo de un cable recto, fuerza entre corrientes paralelas, campo de un bucle, ley de Ampère, solenoides y toroides, magnetismo en la materia). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/12-introduccion"
  - "H. C. Ørsted, «Experimenta circa effectum conflictus electrici in acum magneticam» (1820); A.-M. Ampère, «Mémoire sur la théorie mathématique des phénomènes électrodynamiques» (1826)."
hints:
  - "Concepto: las cargas en movimiento (corrientes) crean campos magnéticos y sufren fuerzas en ellos. La fuerza magnética es perpendicular a la velocidad: no cambia la rapidez, solo la dirección, y por eso las cargas giran en circunferencias."
  - "Herramienta: fuerza de Lorentz F = |q| v B sen θ (dirección por la regla de la mano derecha, F = q v × B); radio r = m v/(|q| B); frecuencia f = |q| B/(2π m); hilo F = I L B sen θ; momento sobre una bobina N I A B sen θ; campo de un hilo μ₀ I/(2π r); centro de una espira μ₀ I/(2R); solenoide μ₀ N I/L; entre hilos F/L = μ₀ I₁ I₂/(2π d)."
  - "Documentación: OpenStax Física universitaria vol. 2, caps. 11-12."
exercises:
  - id: fuerza-de-lorentz
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una partícula con carga de ${{q}}$ μC se mueve a ${{v}}$ m/s en un campo magnético de ${{B}}$ T; su velocidad forma ${{th}}°$ con el campo. ¿Qué fuerza magnética sufre, en mN? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"q":5,"v":2400,"B":"0{,}5","th":90}
        answers: ["sha256:e22671076985e6250b880d6a5b7c0d88fe82a4dbffe712baf0512c829d87ed10","sha256:6db74503a37a376c88f9e91bfc6e924e9b1b0a3e5826fb98ba98512d5f7eac1f","sha256:1ad8760f210f63158a8dc91fbbf1def5bc3d06b939505229c972be124861682f"]
      - values: {"q":2,"v":15000,"B":"0{,}08","th":30}
        answers: ["sha256:1d733d0be40f54ea924d1f1a18866a6bf6b1f2b78529c04445f5dc4c39231acc","sha256:0926438b8904769c7af1d0c8caeb41cfe428dffc4fef0f974968e70a85d99867","sha256:73c69e85880222d1a0e9bfb7d17ec58a2c0c7086c3b145194955647cc4ae1b84"]
      - values: {"q":10,"v":300,"B":"1{,}2","th":60}
        answers: ["sha256:058a6fb93fd303a566fe99d60adc38b8d5004008bca1d3ae778095f90f7a4cb5","sha256:b32a1356ca2a0a6e530a65927beb32812539d4af3960cc4a66de4ba9429c83f8","sha256:8ae6850e0bc889eea1b09a4b6e41505942154fa91f2f11914b6cab85b67ecd78"]
      - values: {"q":0.5,"v":50000,"B":"0{,}2","th":45}
        answers: ["sha256:bfadb85ce85cbfdb31a2251954dac22bf728ca028139076de2bcc2a807e7e57d","sha256:deaa22f2ab3c097caeba703d07bd9ab68d1709cd2196a06491b9c66b86f74598","sha256:b9146c2998d4faf106c9cfdf1b6969b3fffd353d63bdc01984753926a8fdcc60"]
      - values: {"q":8,"v":1200,"B":"0{,}35","th":90}
        answers: ["sha256:dc1c8c165bdc3965113bfb335a17deacbea86c69bb304d5944943a7a461fc8ba","sha256:3d266d9bfb283460ba76292390134cb432c2ba756cbc362443bc7972b4bdb177","sha256:9591d1cefdbf6856d8d5e61ab26a58d2fa7d2bc35b0b91b8df5d7b5f76f8b0ad"]
      - values: {"q":3,"v":8000,"B":"0{,}9","th":20}
        answers: ["sha256:6343e478a0b90a906a9b79d619cacafe3d7467837fcd6b9bb80ae115b53f66cd","sha256:cda5a6b70384da152cce0be19311aefa9561ba2f4b203bdfc35cd5297259df58","sha256:c238e5ca28deb7736d4ecfc986d262b4cd64a714babaee74803af862a76b1897"]
  - id: radio-de-giro
    tier: 2
    type: numero
    sig: 4
    prompt: |
      {{s}} entra a ${{v}}$ m/s perpendicularmente a un campo magnético uniforme de ${{B}}$ T. ¿Cuál es el radio de su trayectoria, en cm? ($e = 1{,}602 \cdot 10^{-19}$ C, $m_p = 1{,}673 \cdot 10^{-27}$ kg,
      $m_e = 9{,}109 \cdot 10^{-31}$ kg; al menos cuatro cifras significativas.)
    variants:
      - values: {"s":"un protón","v":"2 \\cdot 10^{6}","B":"0{,}4"}
        answers: ["sha256:c67b716196c88c130fc3407025913f5815c49590c3ae1416f41c75c3eb0daeb1","sha256:5a968b9d477103aad8068a4c74ce332623138932c4229b7917c30f23dbc23d6f","sha256:65c1c9760eb358e9937b4c2464a05ec566af4b9b350badc479bb677af3dbdb2d"]
      - values: {"s":"un electrón","v":"3 \\cdot 10^{6}","B":"0{,}001"}
        answers: ["sha256:5557c958e8346117fd1205deb081002f59fbd587f1ede7410204c76281535232","sha256:a225035b93b4f84d3a665ae405dcc21b3d542ad03a0fb4784aa98bedcc3de3c3","sha256:ed2f55be738db807dc314c1ce00f926f55de91f02babee9556e71877e598347c"]
      - values: {"s":"un protón","v":"5 \\cdot 10^{5}","B":"0{,}05"}
        answers: ["sha256:3ad4a7966eeb4d3cf11b1d5a3ba7b5543bd59b454b3da72a3c85fe0aaa55734a","sha256:7579fa203cf578956f3bf8243988ef2bbdb9b916ed105a4af5017bd87879a7f1","sha256:498ba9227485aa670a34e6936f1c6284c29e5fadc152e0e240b9810139eeadf7"]
      - values: {"s":"un electrón","v":"1 \\cdot 10^{7}","B":"0{,}002"}
        answers: ["sha256:8b62e8057a675c60ffccd1abc8761b2d85c28ede3c50fb614785397169934c96","sha256:e5c0dea7aaa32fef8fe3d96d8098b7342c864894d1a6daef13f6a640afae87f9","sha256:6b18679a39ca658d44fb80591123dc3627f052a00d9348a526b02c7f3891d7ce"]
      - values: {"s":"un protón","v":"8 \\cdot 10^{6}","B":"1{,}5"}
        answers: ["sha256:2bec13cf0e74165b92211a9279c2b4f6f23cd89b1175168f46c0f6a625f6480f","sha256:28937983b16baa60cd43b3a95c410a5b5450f37e121a4ebe88a04b2649f12c37","sha256:0a3e23f622c8bb7d9e6411f36ab000befdb8288f6133458664fa7d8e1a20cad2"]
      - values: {"s":"un electrón","v":"4 \\cdot 10^{5}","B":"0{,}0005"}
        answers: ["sha256:ec94360ed51383afc067aa5f0d0405fe329df4785b6ac2ee3aa9fa49fa9bd4ee","sha256:b517068f34afabe434232a2fc27a46e56fac959583edd46e44d75938db725bc5","sha256:84e8f017a1cd241b63ca0d5376b8a7cfda5140b9d8822d57566e131e10fce6e5"]
  - id: frecuencia-de-ciclotron
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Con qué frecuencia, en MHz, gira un protón en un campo magnético uniforme de ${{B}}$ T? ($e = 1{,}602 \cdot 10^{-19}$ C, $m_p = 1{,}673 \cdot 10^{-27}$ kg; al menos cuatro cifras significativas.)
    variants:
      - values: {"B":"1{,}5"}
        answers: ["sha256:e6a9de3f7b9a2765ea83cd0dfa663fce524a07cc72d6ed0c1ee646b112beb7cf","sha256:436eacb40e489a93308c1b8a44e7b81c49ca52fcd2e4a5317e55022c47897805","sha256:ae47f1584c493d83c2de2ac786f097370b7f14638ddaf85e47e063d273e2687e"]
      - values: {"B":"0{,}8"}
        answers: ["sha256:24059524ff8172c899403285110869bc492648c325ccc5eca3b71c64932551bb","sha256:41e59318702b1467c884ea3c3cbbf102d136eec6bd393a50b526217ee88ef6be","sha256:c7a79eaf8fc36792a8e511199ef33164bb9cb79bae4f6e0d1e87789a27729381"]
      - values: {"B":"2{,}2"}
        answers: ["sha256:122a0f474166bd48488b54c28bee2e81c4bacafd4e276ae17fabd10efbb02ea6","sha256:b150eb277a8c3bb75d3aee8b5b4a12b0766b2a36b420218df53c307e58c25e31","sha256:9ea082ea58a86ed5ee3d5ec2f7964c872b0af1ad072b00c7d38cb12418a3a1c7"]
      - values: {"B":"0{,}35"}
        answers: ["sha256:329b9eb86ae4a3e18cf4e5f7a9b3a98477962cc6109613ec4bf8135623ab7160","sha256:c781ca2af5d2faa0463190db06f87c8d2b49ff779a13ef830740180e6d67acd5","sha256:8e97d08a8ac1cf67c0d7952744e0c47acbbcd59c5568e847e422be8692964753"]
      - values: {"B":"1"}
        answers: ["sha256:bdcf6c0b18def346d82d6c867bca091961597c391f62ea73a49fe07770070dd4","sha256:9b2fcad5968c02fc73cc29216f36b0cdb089ef5ee7335982ba11cd3c3e7944d6","sha256:90bd1f2e16c6299fcfce58c883afe4de4d67cf061e3b644efa3fcfe5045e4f29"]
      - values: {"B":"3"}
        answers: ["sha256:03647f500af5a3fa701c7b7e5e83ad06de3ccf375aed1bf8fa8e272779b09c37","sha256:078df124b9aba6aee122bdcb9d9aa2dbcdd6cea65d54759613bf17026e838e23","sha256:9648da2ce5a923cdb558b308889e50ad97ff165d77ce6b2c3fc8f867fffbc3a8"]
  - id: espectrometro-de-masas
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un ion de carga $+e$ y masa ${{A}}$ u parte del reposo, se acelera con ${{V}}$ V y entra perpendicularmente en un campo magnético de ${{B}}$ T. ¿Cuál es el radio de su trayectoria, en cm?
      ($e = 1{,}602 \cdot 10^{-19}$ C, $1$ u $= 1{,}661 \cdot 10^{-27}$ kg; al menos cuatro cifras significativas.)
    variants:
      - values: {"A":12,"V":1000,"B":"0{,}2"}
        answers: ["sha256:44fe0d7530e4a8c11552aeb35cd21db83139ffb1327e064690c9c2986113893c","sha256:7c0c6dd26a11b7919cd37512473be616f0ef9c85127508bede392d20eb795efd","sha256:2c338bb6491ef874f6de096b89938839bf180b715884346b0ae61a5f7a32890d"]
      - values: {"A":35,"V":2000,"B":"0{,}5"}
        answers: ["sha256:af69557f8de1358899bfe03296d89604b45b13c71eb850b72d8f46180c981b39","sha256:ea903b5d6a4b624ce64e4d167273f75cfd50520bf7db90b413114658b73d1f37","sha256:f04b743348aa8f28c606b3980fe891523b20fe5bc33ccd332790437571590ba6"]
      - values: {"A":238,"V":5000,"B":"0{,}8"}
        answers: ["sha256:fa9cfca7531ae2f3cbc499ce95f730027b73f773aa70bc77d0edf6b7525eb5bc","sha256:871dcba08d1cbc87fa3d8748b345164aee21f032a3af1b3fa81f1fd984e08716","sha256:a1384c86461ab892ea5977424ddc431e5930f23d7cf5a3b9feebfff95a9087d0"]
      - values: {"A":4,"V":500,"B":"0{,}1"}
        answers: ["sha256:829a299a16f8cbefc6c4c1c11e68bb6cea7b8ffbb1583d6b05844e7498b3fba2","sha256:96478709aa76a7d4664132798a6252b8bad404e95448efbb2447338427ae9a19","sha256:4a394407bb16ef94136edf0736ce3084f0083faa5de273932b7116891cd23050"]
      - values: {"A":56,"V":3000,"B":"0{,}6"}
        answers: ["sha256:935541d4c13a081f81c7af02d195cde5209e8be318739e56b14b8bd6bbc2b6ac","sha256:a739da00aa785604c883cbc5a8252147fc697820b34675825bc0dc7d0a0278d1","sha256:2c57af95a2713f858f8064bbacfc87eda51cf423cafcec67858b2864f9ba2f66"]
      - values: {"A":16,"V":800,"B":"0{,}25"}
        answers: ["sha256:c4c71f24f51d32ef2c4a7e8ce366203a1aa344d5708cbe9afaf42468f3c04288","sha256:f2e18ec42e8dd7ab4db60f8e2ba33ead28c0c7eb303db2cb0d5ebf7f7abfb477","sha256:0a31a324d0d61fe64b73a4cc3ec35968b4b3062701de500325b0e393f8eb4763"]
  - id: fuerza-sobre-un-hilo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un tramo recto de ${{L}}$ cm de un hilo por el que circulan ${{I}}$ A está en un campo magnético de ${{B}}$ T y forma ${{th}}°$ con él. ¿Qué fuerza sufre, en N? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"I":"5","L":25,"B":"0{,}4","th":90}
        answers: ["sha256:cad424701a2924df39c8d36793a71e0b0bdb94f07289ba0afd04b98dcc19b4ec","sha256:86e0fa4b8d6c8844911d8961b5fa89f49bca8ba5ea2c2c063e7ddde16db485ee","sha256:fe6a3bad31a11cd827c70ec5066140bc406fa50be39bdfce810ca93bf229b95d"]
      - values: {"I":"12","L":50,"B":"0{,}05","th":30}
        answers: ["sha256:553f5adf05c4755272e90e291af54cc35e583349898960d0ada8e2c8511265d1","sha256:816ed4609d44c27a805bada6e7dfd51646492893ed2f61b13b494837cf13005e","sha256:4920015db0ef667344b68c2940b4f3cd40572dc1d0667a7f287fd549fea927af"]
      - values: {"I":"2{,}5","L":8,"B":"1{,}2","th":60}
        answers: ["sha256:9d664fcd6037c5b8ad6ca97b7f99dd5a6dc09a1997b59c29fb6d832b50a39d89","sha256:439ca8890c5dd4e5378d0ff8d01a84f338df2bb3841f1968775cc735d17b3012","sha256:af131cef9a1882fa73bff7ddfc85381a63d44a2103e3ecba66d27e69bd44f2e4"]
      - values: {"I":"30","L":100,"B":"0{,}002","th":90}
        answers: ["sha256:7f45d554fe7ec606431156e9bd791fa727a5bd51f354f17934e715812f4e888a","sha256:6b420f6fcf17ffa36442a2783326a746951f0842fa829ed69b7c87c1f4305a29","sha256:8eff14cfdb88ee6eadd79d2d65e9328e3fceabc4c0ccc30a399822f78758fc5d"]
      - values: {"I":"8","L":15,"B":"0{,}6","th":45}
        answers: ["sha256:b520552b3b0336e8d2db9841c0c4477b644198521841b6bb2a357605ecac2ffd","sha256:b728fdaf4fd48cf8f4f1c3be18485f2418ea9514c494c7244269d5cd4292f8a3","sha256:941f0ab2dac7e69748117e04ca5cecc0e534eaa2a6632e90250849f18e94acfd"]
      - values: {"I":"0{,}5","L":40,"B":"0{,}9","th":75}
        answers: ["sha256:5a48b906d230aa0f12464dbd4799a8bb4b6ded543670228e554a2db479c48b2e","sha256:7b948eb882d3d089c0844c35907f3a31f3549de3b6910723d749f66df1df3436","sha256:0b0b1ddc194a0fd0fbd1dae1ffb968aaa5c6455bbe7f3a56c57b2babf3161bec"]
  - id: campo-de-un-hilo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto vale el campo magnético, en μT, a ${{r}}$ cm de un hilo recto muy largo por el que circulan ${{I}}$ A ($\mu_0 = 4\pi \cdot 10^{-7}$ T·m/A)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"I":"6","r":"2"}
        answers: ["sha256:58fe31906ab377d48b4c47bd34e55aa5f4fc3a6d20dc8a17ca6ee64e33d671e6","sha256:889e6942759b0edeadf509d937fd70766cba0effc28e1921815ae4484b52dcf0","sha256:faf4712d6eecc1e62036506122e3fa7b4057eaba3d393f34f025372934a94aa7"]
      - values: {"I":"20","r":"7"}
        answers: ["sha256:6a74cac7cec224b8002d0532bf4f0ad48989517d615c8ae350eeefd987b063cd","sha256:d9453a6d91a7e45d0f8cadf1449c18ef1e739b5331d9eb6556c840717db0442c","sha256:d136a493176c66a0c339ee12d75bea10614fe72cd98bdc265e165343b6c85056"]
      - values: {"I":"1{,}5","r":"0{,}4"}
        answers: ["sha256:6a0aa792975aed96ffa73ca492a8363e7f00522b4e8800b8da5a2c0e7b4efe0a","sha256:3d1da6548e6e7813927610bdbeb0bc9aeb4ddc131c1d266cb4ea8b8c82a894b3","sha256:b4e6b329fc275163144240168f8beaf18c5505e64fdd77f13e2b9ef79f3a31e7"]
      - values: {"I":"100","r":"30"}
        answers: ["sha256:82913bc1d070b2a5f25dc907c03f02b37f339155ac485d65cce78bc310015267","sha256:e0ec4c046faf296717a2d75ed866cb801cafed78535f1d62e6bf579ac1756cc3","sha256:d1734e7780c00b8e50c5718264f1cdfd4d8e5a71b65b0381c6e023806f8f2127"]
      - values: {"I":"8","r":"5"}
        answers: ["sha256:ab0f15cab9ba6b742f5f06ce535fc8dae00b6e220ac37680e1be628de69b3898","sha256:05a33ee112c877999e7d702481e93bad9a77b374378083b2ba02ebe769f571bf","sha256:82eb700b617b07d6778e3a1e413d7ac7c51110a80cb5f7f604d8b180d78b0b47"]
      - values: {"I":"0{,}6","r":"0{,}25"}
        answers: ["sha256:6440aaffc566db1ee28dc67903f07ae38a444d12c61f202112644c9ad6e63127","sha256:2dd0a58ec686890578445168cc630782da9b2fb347c7da71de18ddc5c3b2660c","sha256:fcfa1191f1cf1fc214fb0511e9ad7a0f0af5565fe427c695437fe95d6f6dc828"]
  - id: campo-de-una-espira
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto vale el campo magnético, en μT, en el centro de una espira circular de ${{R}}$ cm de radio por la que circulan ${{I}}$ A ($\mu_0 = 4\pi \cdot 10^{-7}$ T·m/A)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"I":"3","R":"5"}
        answers: ["sha256:54b4441eb760c2f1f15ce23a5116280392477411418b802bfa538a6a36d7903c","sha256:5ccf16f424faf6fbd892510813fc3ef29075e1b533df23ecd7ecfbf67dcf8645","sha256:16b497ea4ffa50c43bcb4f66302ddc3e669595748d6b645f67d01f3bdc2d1308"]
      - values: {"I":"10","R":"16"}
        answers: ["sha256:01aab89ffe99a548a2b729e952c2538285dd20094f6126e15f6f4f3e80bb7355","sha256:2fbd1fb911c923775f17a2ff1651a39d408dd2718fd94c804e561f46f9f8f89d","sha256:c19da382bdeb592f8b9ffac9e41cac85fb7a83d6766c207f51cd1717eb5b9ed3"]
      - values: {"I":"0{,}5","R":"1"}
        answers: ["sha256:341865686b77319d41e35cff462c7698caba55dfb0dbe42075919392756543f5","sha256:8ca6fb2fcfaedd593a5946d8e09f9c501804d268e612e9e6817a2aa8025d90cd","sha256:26ab4156656d5e53036894eac041c60de0806c8330c93654fd924092bda1e025"]
      - values: {"I":"25","R":"15"}
        answers: ["sha256:0a4a9a8d9896efe0649fabfc41591fd0445f46082ce42a95b5b40477b4a987e3","sha256:7d5081ea84033097ad8a96b10bd1c42afa033141c20043865c18e83f0a0854c5","sha256:e9d7f98d02eb7806191065f2ef2d0df17922f25d41892b487c7d73705c7c3f3f"]
      - values: {"I":"2","R":"2{,}5"}
        answers: ["sha256:7693351fa0ae480820cd380647589cce0637e5399e78b914b35ddca8808c6026","sha256:f1437a628b76b1860da659f68901486a6904caeacc09c0ade8246c73e876c584","sha256:47b57307d5e4f144357ac8f301ce3a406d63e2001c3bae3639fdb431c50b41a2"]
      - values: {"I":"7","R":"12"}
        answers: ["sha256:145208896a2535ac5743be52364ba9f7a84b5852884e6d27a1ed0225f0e225d9","sha256:a116f967655e28763bd0ab83ef4867151e61ed9c29e5cd47db15ebd7299711b1","sha256:536ea995018067266a408ade4c4bfbadc11cf424b47ed6aa6ff20dbce9272e81"]
  - id: campo-de-un-solenoide
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un solenoide largo de ${{L}}$ cm tiene ${{N}}$ espiras y por él circulan ${{I}}$ A. ¿Cuánto vale el campo en su interior, en mT ($\mu_0 = 4\pi \cdot 10^{-7}$ T·m/A)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"N":500,"L":25,"I":"2"}
        answers: ["sha256:debf79724d5fe00b71687eebc31e4a0af4a4b4e8e8c8ef582425401c6fa48bab","sha256:c3d15aa15d1631c55c1bed4e9458d70af4e84b4af79bb89c8fa3a67f626d4b05","sha256:dd361b9f1745a0fce44721826dbbdb3a2bcb3a4d3f08d577e0cd3f8953faa97b"]
      - values: {"N":1200,"L":40,"I":"0{,}5"}
        answers: ["sha256:9c7f3a2291fa6dc8b2d1a81b5352abfe15e2ce604e059c315c016a093b0fa427","sha256:dd032c55189b4b12d2dd7bf026ddd1ac1627e38803dc0c91c7433f13304edb6f","sha256:c398afa02c1fef12a84f2a6524e43d516d218d03d77afb28c3f8045249c16bd0"]
      - values: {"N":200,"L":10,"I":"3"}
        answers: ["sha256:4faad303e30588d78ebb1d4075798b2dd086bc0be2a9becd2772ac4464779e93","sha256:2685dce3afd5bb4aae583545d3a319d3e5c050a887a421e6241e99881da0f125","sha256:8078b4a13588bed32a91f15f743e7a3640da3502ae848ec326faaac699f185d2"]
      - values: {"N":3000,"L":60,"I":"1{,}5"}
        answers: ["sha256:86ce4b6e92f32b32940d2eaaff4d90a31728e91da43dd1b7054a1b3832dc7366","sha256:6f7c83abcb0773a9de75002d76fcd8ea1b56f57874962da2c1262db613974977","sha256:1136ac633453b4b8358b1de9d52aa7ddf507e608b92d1d65bf212ca01b2906a2"]
      - values: {"N":800,"L":16,"I":"0{,}25"}
        answers: ["sha256:1ac737df854e3ec8e7b0254f88efe3c810032f17129b35bdd3a7955605040ade","sha256:541e79cb017293d9aede688960635662269cbecdfb2d64e1b9acfbebf60b7b3c","sha256:623c0437bd040d57bf323ee2841367a1467cc4c3b2cedf1bed8785c4a8739a83"]
      - values: {"N":150,"L":30,"I":"6"}
        answers: ["sha256:4dc277a29b979df89d2c14767cc66552d0768af2533fb2adb73219391ee54c69","sha256:4b01b53f3b60193f4065a5d62e903d7ef183cd3c2aa29c11bff83bbee00ef6e6","sha256:3476c42b3b83ac2d2dea7b4dc05d5f669e36339a5e5aa5de5e88098391233ef3"]
  - id: fuerza-entre-hilos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Dos hilos rectos, largos y paralelos, separados ${{dd}}$ cm, llevan ${{I1}}$ A y ${{I2}}$ A. ¿Qué fuerza por unidad de longitud se ejercen, en μN/m ($\mu_0 = 4\pi \cdot 10^{-7}$ T·m/A)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"I1":10,"I2":15,"dd":"5"}
        answers: ["sha256:c43c9cf19dc1f82ee8f73f018a352610c880a785db4165c1002c5bd47cc36837","sha256:6b38455617f3012fe62b45ebbffe276d782991b242e149766f6cdcc359bddbcd","sha256:8beb0aa858b9a6d7870491e00b57a6f583817dc13a36b568d89d1893e586007b"]
      - values: {"I1":2,"I2":3,"dd":"1"}
        answers: ["sha256:3194925765cd50201fc22a83e2b0234339258e60a08907677ba2be99d96e46aa","sha256:859bd5eccd7f2252d4458d2f7de471884f131404a1dff72c74ef76d5475af5ee","sha256:0e29148ba3503f2d3999597189a82f469b47ff2f831ce4ad3eadebcd1cdbe3d2"]
      - values: {"I1":50,"I2":50,"dd":"20"}
        answers: ["sha256:5c06ee9522faa91d28b66f8346355d422fa1810bc10c8e0738848fb212c67f43","sha256:b780714a8fa1a2980471e8befbb091db9fc5792e35b5af882b9f86481b929dc8","sha256:14de3cb6495e5485ee0b9fcb366ed27a2426df705898815d69da1c10f40b1248"]
      - values: {"I1":100,"I2":4,"dd":"25"}
        answers: ["sha256:8337d3b3b79165542c8a293245c73ac9132f148c43762d4ab2927bf2510c35ec","sha256:7e3752fd2805cc68a318a613ad0d85020c98d1da32b4a3363bf3835536394584","sha256:19beca425b383ab98ad5eff2572d4e614dd865474e3fd3c1cb1904a08511dbae"]
      - values: {"I1":6,"I2":8,"dd":"0{,}4"}
        answers: ["sha256:f42a9a1a7265bf9d08ea4dc713d3f4559a98316428bbd70c6e3a019bb402c0a8","sha256:375c4ff373f6469bd3d96e42ff05110c419cd6e56a29c67bbb4e7410399528bf","sha256:954ff84deae12405d2c94e07c6b3015fbec4fe1e7fdc2e21658316db86b1f77a"]
      - values: {"I1":30,"I2":12,"dd":"4"}
        answers: ["sha256:3f020caf8c9c2a0de79e53ac0c06d5440331fee695d6410e2cf9bbf6f2442fec","sha256:e2bef2e40699ed34d323d4eb2472cfbcc72c2bd0bce5f40dffdc0348a81fa458","sha256:4254132d51307ab46a8c0e46d70659d51c301ffc5ac47088833f5e16d7ca8cce"]
  - id: momento-sobre-una-bobina
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una bobina plana de ${{N}}$ espiras de ${{A}}$ cm² cada una, por la que circulan ${{I}}$ A, está en un campo de ${{B}}$ T; la normal a la bobina forma ${{th}}°$ con el campo. ¿Qué momento de fuerzas
      sufre, en mN·m? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"N":100,"A":20,"I":"0{,}5","B":"0{,}25","th":90}
        answers: ["sha256:951c8504273dce48bab6a41eb69dac8f4427a671ab95fa05ba6679791055c978","sha256:4b3eff38e2262697a781569e1daa69782a63ad0e83396c19bd9847de6c66ad48","sha256:942190eb3989b4282039956e128246c8c6aa0b8b48b05216a94831c07192cf4f"]
      - values: {"N":50,"A":10,"I":"2","B":"0{,}05","th":30}
        answers: ["sha256:58bceafa1a03740ed2eaeb5d0b082855215f4e33a7d59068b52c043167c5cbdc","sha256:d92e0d4048ad3c9133396d2751099210bc28bd19ef3124b1eb3d35f08f575d68","sha256:062431570e94031426ce06c9f977db0a24bb5ea9e17e86f3af1fa08f54f8f628"]
      - values: {"N":200,"A":4,"I":"0{,}1","B":"0{,}8","th":60}
        answers: ["sha256:072cbc0cc84100561d4da105b9dd4b3b1f9c967cb00c80b2a1600fe2b50c3d20","sha256:c7f421f686ae246df0c5f0736af5a95eeedbc72b94f0be00a886d60732dba142","sha256:3552d343c494986450b677930e31926eab044a8ba0013e8ea01b4157d60de0c6"]
      - values: {"N":20,"A":50,"I":"1{,}5","B":"0{,}3","th":45}
        answers: ["sha256:2807a4608f3514e8a8ca8394eb0ebebb7fefdedf26df4bda9347aea1e62c0b19","sha256:9e21020a4326177c92eacf6c64046737f11488f107b3497314871f59836cbec9","sha256:7ac634e7251d24f33767ad50498dbf5a32f40184c93eb84894f53e9c68146b40"]
      - values: {"N":500,"A":2,"I":"0{,}02","B":"1{,}1","th":90}
        answers: ["sha256:e70156f1a934104a997c7a1f8ad1bda2962cfb9e558b574ce0c8ba6a12f67c6c","sha256:69fb00b77f4e20f70cd695553d354ffe205cd894c6dc65a37bc863bc31c338ff","sha256:24a12c841ff1791a3a16e861e68b0e97b6c4423fff60b5b4f054fe411fe75a78"]
      - values: {"N":80,"A":12,"I":"0{,}75","B":"0{,}15","th":20}
        answers: ["sha256:3eba6a84e46f39daa293e33b715966cbef4ef7c9fafebf53098fbd27dcae2312","sha256:29efe20364369b92a195badff4682d5f75d7465aa8c7ba708acb911f3f0600a5","sha256:922f9bcaef6d9ba898ce37bd2cb08dd40d03d228de6af8c0355249689d6dbbe9"]
  - id: selector-de-velocidades
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En un selector de velocidades hay un campo eléctrico de ${{E}}$ kV/m perpendicular a un campo magnético de ${{B}}$ mT. ¿Qué velocidad, en km/s, deben llevar las partículas (perpendiculares a ambos)
      para pasar sin desviarse? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"E":50,"B":100}
        answers: ["sha256:bdebc15ddb95ccd8c7e7147b4f0f93dea4b565cc3b18bf0f3aa9b66de9bdf2c7","sha256:f8038a628a62d79385eca5edbe36760f65fd7731c330fb19a22af3bc7363068c","sha256:1388d32046583055c8c332d6e0c8bdf47bc0bd713b6ff084ed57fbe13c5f1eb6"]
      - values: {"E":12,"B":40}
        answers: ["sha256:bb7aa064c677f3363855561f440f211a2dcd3740015f72ffaec5dbce4c2ab9df","sha256:71804d1775e5d092fc0adcc72dce4b36766dfef65f9dff0acdb735f13a0c1fdc","sha256:5b313c5b4681fd70ad9f98b985f25fc4f5fec1f2585637ca4af6338f002162dd"]
      - values: {"E":200,"B":250}
        answers: ["sha256:111ac6d5c2102481f9663d6bd74499671f63aeda48cccc3b9d5a62539cc4e5f6","sha256:363ca56ce561ccdd59831d2413bae08d7a3495894f971f83954ee50a68b941e3","sha256:abc4c8cf2c620945bcda69de7b5db4cac68b771dfad111871d638aed78140caa"]
      - values: {"E":3,"B":16}
        answers: ["sha256:89f47cd2876401cf0fe38ae23eef578aaf9ec6550dc345d7a1fcbd84a988c03a","sha256:24c884cbdd965fdf4b460aec8fe04fa80766c41f1763389e9997e77557edb167","sha256:646538b5c9b02fa07db1ad271994e49e60bfc3529b16f6b56d1e13a01ee7fc54"]
      - values: {"E":80,"B":320}
        answers: ["sha256:f807637dba73f76d6b600156b11032665607133324f47fc6880ed1527fb4137a","sha256:1cd2732cc57894a540d9b130c22e7bd4431a833fdff0e0aa52ab4eeb079ed134","sha256:3ce78eb10fa829a41e9a416899c2e2c1863bc144e4bb2ebde7073770ab93a4be"]
      - values: {"E":150,"B":75}
        answers: ["sha256:d180ee7974570c2ec7aea90f92fad27501d7650bc7f2c09986b4287093363f0a","sha256:33bedccd2996a3cca7956954c92ec39db286a4a513b47ef39dbd3286a5f69805","sha256:03df2eef20c28d964f510907e04836d8f2b67884246b6e772bcbf83dd6a689a9"]
  - id: magnetismo
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué la fuerza magnética no cambia la rapidez de una carga y por qué una carga que entra perpendicular a un campo uniforme describe una circunferencia. (b) Explica
      el experimento de Oersted y qué demostró sobre la relación entre electricidad y magnetismo. (c) Explica cómo funciona un motor eléctrico de corriente continua.
    sealed: "gz64:H4sIAAAAAAACCn1UsW4jNxD9lQdBhb0QhMRVoMCFjbsDAhySAEGqbALMkmOLB+5wPSSFk219jLu4cOXu2v2xgFxJllNct0MO38x782YfZjH4nFyQ2WrWNGd03jT4TLjJrPcEy/gclCXdY962Gzb4hEvcTZ8btG1yPUdM8fUcHBEd94MyBtaBxTqTPSkInrBhH4yzZFeQgDUZRlLq6EtYgOL4grvMJY+F9XZ8IRgn43NyhrAt50qDs3xfHhvqO0fyM2Lwh6ikWKdsjBtfZYk/3KHp0mnp59joouROHFtJjoXRj682F6wgMZEkxvzx7nFzPccWNGRJdKS2JuMIWdC72AcYlqRhVchnOUpXT8eXgRMt9lC4RNveKJmHfvPPxe5Bd/PFxCwpbdmkoI4OMMapyXLDylKqWYaSdQFzPYXZPTzePV7v5stWWmmas67M76Pgx58ufsBvrDGxRegi62Z8rfoW7E7Hb1+yJ0SG5bhx1BHIgwyrIfWESs9Q5xlDULCvbweKJdMEVceSeIkP3IeYdI/dNJ7i23UE+/HZJHWmHCtTweyHENHT7TTaEJtmBfZc04o5sK23nIq4rXBM45NA2ZNxQciGiLNSxo8vwhSLMhW0fGTB2vmAGOR/AkYQYgZ5Zcs26PkSV/0w/quMLT6RkqVt0YJUg/ekQUo05PE5lgE5y4Q1xURFi6nd8NbmQX5T5P+zKBw6J1S181S1qe34E/EWsNU4sOzfMXD9+CQLxHyjNW6aPvQsqd5P7opNg7N52ybKuMSvv1xdt2100rZpzYnm54dNqjt265R0id9Jp07Yl6Pq9ORk/MaLqYoJ0udENmhBN8FXR2ILjiZ0znuK56042TjWVGEiS3K29nXKDCwl3mtgyBJ6to6wyewTLXFVlv100d98UixpwrGGoGczPokztJwtZpo7dWa2+uthZtQlVhdmq9nHr4MvT/ek9wvI8bv/IJRx22wqkWm19jTe+aZULdsf4mx1sVu8q/uBo1HXVQT+OrC645gOq7ctpjNBjM+x/pW+A3egwR6HgcfQKZ9ouS2XAw3sJ9ccJ/Ye9+/dfzNbFdPYBQAA"
  - id: r-tesla
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la unidad del campo magnético en el SI?
    options:
      - |
        El weber
      - |
        El tesla
      - |
        El henrio
      - |
        El gauss es la unidad del SI
    answers: ["sha256:37eacc5d9248aeb17839822cdd76ac7382db2204254fda315ab3d6fccd7cfd78"]
  - id: r-carga-quieta
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué fuerza magnética, en N, sufre una carga en reposo dentro de un campo magnético?
    answers: ["sha256:3b57d86e50094b0e1b6f0f00e97f53f2d6729854c2f4effff19dc5c660054c0e","sha256:3509b76ef37d66b4d75766f37631a5b56ff270557ddb70218a415a566e12ceaa","sha256:b655a30e8874e27b90001edb8a657631c8b3986fc4b7c010e99bd58173b5ea85"]
  - id: r-paralela-al-campo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué le pasa a una carga que se mueve paralela a un campo magnético uniforme?
    options:
      - |
        Gira en circunferencia
      - |
        Se frena
      - |
        Sigue en línea recta sin desviarse
      - |
        Se para
    answers: ["sha256:802d221dda60ac1b2733dfb11596ffbfcdcec2465192df1daa4d71b0e5cdee96"]
  - id: r-polos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué ocurre si se parte un imán por la mitad?
    options:
      - |
        Se obtienen dos imanes, cada uno con su polo norte y su polo sur
      - |
        Un polo norte aislado y un polo sur aislado
      - |
        Se pierde el magnetismo
      - |
        Solo uno conserva el magnetismo
    answers: ["sha256:c5bba933d536e7490cbbf2430f5bb36585d3a561ecc3ad05eed41573e687c779"]
  - id: r-corrientes-mismo-sentido
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué hacen dos hilos paralelos por los que circulan corrientes en el mismo sentido?
    options:
      - |
        Se repelen
      - |
        No interactúan
      - |
        Depende de la distancia
      - |
        Se atraen
    answers: ["sha256:6f6235e3f0d524d335bfd85e0c2ae698ecf91841505751a02627c8ff5635fc45"]
  - id: r-doble-velocidad-radio
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si una carga que gira en un campo magnético duplica su velocidad, ¿por cuánto se multiplica el radio de su trayectoria?
    answers: ["sha256:d9d8de177b421caa555204953409dd39bb6f972607840268ae8c6bed6e9191cd","sha256:e6df06a18882bb31dfcb288fbaf55800f80cca3b992ac664d7835a50c8714c52","sha256:bfe3a7af76eb4617e7d0bc0bddf003139d8694f19bec5b6939beed31adab77ec"]
  - id: r-periodo-velocidad
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si una carga que gira en un campo magnético uniforme va más deprisa (sin efectos relativistas), ¿qué le pasa a su periodo de giro?
    options:
      - |
        Aumenta
      - |
        No cambia
      - |
        Disminuye
      - |
        Se anula
    answers: ["sha256:1f15034b6bbf3c07fd7d7f68074afea5cf43ddc7234e750336e133c585322275"]
---

# Campo magnético: imanes, fuerza de Lorentz, cargas que giran, fuerzas sobre corrientes, motor eléctrico, campos creados por corrientes y fuerza entre hilos

Las brújulas, los motores eléctricos, los altavoces, los discos duros, la resonancia magnética, los aceleradores de partículas y las auroras boreales
tienen algo en común: el **magnetismo**. Durante siglos se pensó que era un fenómeno aparte de la electricidad, hasta que en 1820 Ørsted vio que una
corriente desviaba una brújula. Hoy sabemos que el magnetismo es la otra cara de la electricidad: lo producen las cargas en movimiento. Este nodo estudia
las fuerzas magnéticas y los campos que crean las corrientes.

## Objetivos

Al terminar sabrás:

1. Describir el campo magnético de imanes y de la Tierra con líneas de campo.
2. Calcular la fuerza de Lorentz sobre una carga y analizar su movimiento circular (espectrómetro, ciclotrón, selector de velocidades).
3. Calcular fuerzas y momentos sobre corrientes y explicar el motor eléctrico.
4. Calcular el campo creado por un hilo, una espira y un solenoide.
5. Calcular la fuerza entre corrientes paralelas.

## Qué debes dominar antes

[[fis-corriente-circuitos]] (corriente eléctrica), con la fuerza centrípeta de [[fis-dinamica-aplicaciones]] y los vectores de [[fis-vectores-movimiento-plano]].

> [!question] Test de entrada
> 1. Aceleración centrípeta de algo que gira a $4$ m/s en un círculo de $2$ m de radio.
> 2. Intensidad que circula si pasan $6$ C en $3$ s.
> 3. $\sin 90°$ y $\sin 0°$.
>
> Respuestas: $8$ m/s²; $2$ A; $1$ y $0$.

## 1. Para qué sirve

- **Máquinas eléctricas**: motores, generadores, transformadores (el tema `fis-induccion`), altavoces, relés.
- **Medicina**: resonancia magnética, separación de isótopos para diagnóstico.
- **Ciencia**: espectrometría de masas, aceleradores, fusión nuclear (confinamiento magnético).
- **Información**: discos duros, tarjetas magnéticas, sensores Hall en móviles y coches.

## 2. Imanes y campo magnético

> [!practico]
> Espolvorea limaduras de hierro sobre un papel encima de un imán: se ordenan en líneas que salen de un polo y entran en el otro. Esas líneas dibujan el campo
> magnético. Una brújula no es más que un pequeño imán que se alinea con esas líneas; en la Tierra, con las del campo terrestre.

- Un imán tiene polo **norte** y polo **sur**; polos iguales se repelen y opuestos se atraen. No existen polos aislados: si partes un imán, obtienes dos imanes.
- El **campo magnético** $\vec B$ se representa con líneas cerradas que salen del polo norte y entran en el sur. Unidad: el **tesla** (T). El campo terrestre es de unos $50$ μT; un imán de nevera, unos
  milésimos de tesla; una resonancia magnética, entre $1{,}5$ y $3$ T.
- La Tierra se comporta como un gran imán (su polo sur magnético está cerca del polo norte geográfico); su campo nos protege del viento solar, y las partículas atrapadas producen auroras.

## 3. Fuerza sobre una carga en movimiento

Una carga $q$ que se mueve con velocidad $\vec v$ en un campo $\vec B$ sufre la **fuerza de Lorentz**
$$
F = |q|\,vB\sin\theta, \qquad \vec F = q\,\vec v \times \vec B,
$$
perpendicular a la vez a $\vec v$ y a $\vec B$ (regla de la mano derecha; al revés para cargas negativas). Una carga quieta, o que se mueve paralela al campo, no sufre fuerza.

- Como $\vec F \perp \vec v$, la fuerza no hace trabajo: **no cambia la rapidez**. Si $\vec v \perp \vec B$, la carga describe una **circunferencia**: $|q|vB = \frac{mv^2}{r}$, así que $r = \frac{mv}{|q|B}$ y la frecuencia de giro
  $f = \frac{|q|B}{2\pi m}$ no depende de la velocidad. *Ejemplo:* un protón a $10^6$ m/s en $1$ T gira con un radio de algo más de $1$ cm.
- **Espectrómetro de masas**: iones acelerados por la misma tensión giran con radios distintos según su masa ($r = \frac1B\sqrt{2mV/q}$); así se separan isótopos.
- **Ciclotrón**: aprovecha que la frecuencia no depende de la velocidad para acelerar partículas con una tensión alterna.
- **Selector de velocidades**: con un campo eléctrico $E$ perpendicular a $B$, solo pasan sin desviarse las partículas con $qE = qvB$, es decir, $v = \frac EB$.

## 4. Fuerza sobre corrientes y motor eléctrico

Un hilo recto de longitud $L$ con corriente $I$ en un campo $B$ sufre $F = ILB\sin\theta$ (la suma de las fuerzas sobre sus cargas móviles). Sobre una **espira** o **bobina** de $N$ vueltas y área $A$, las fuerzas
forman un par: el **momento** vale $\tau = NIAB\sin\theta$ ($\theta$, ángulo entre $\vec B$ y la normal a la bobina) y tiende a orientarla perpendicular al campo, como una brújula. Es el principio del **motor eléctrico**:
un conmutador invierte la corriente cada media vuelta para que el giro continúe. También funcionan así los galvanómetros y los altavoces.

## 5. Campos creados por corrientes

> [!practico]
> Pon una brújula cerca de un cable por el que pasa corriente: se desvía. Las líneas del campo de un hilo recto son circunferencias a su alrededor (regla de la
> mano derecha: el pulgar en el sentido de la corriente, los dedos indican el campo). Si enrollas el cable en espiral, los campos de todas las vueltas se suman
> dentro y tienes un electroimán.

- **Hilo recto largo**: $B = \frac{\mu_0I}{2\pi r}$, con $\mu_0 = 4\pi \cdot 10^{-7}$ T·m/A. *Ejemplo:* $10$ A a $1$ cm dan $200$ μT, cuatro veces el campo terrestre.
- **Centro de una espira** de radio $R$: $B = \frac{\mu_0I}{2R}$.
- **Solenoide** largo de $N$ espiras y longitud $L$: campo casi uniforme en su interior, $B = \frac{\mu_0NI}{L}$. Con un núcleo de hierro, el campo se multiplica cientos de veces (**electroimán**).
- **Fuerza entre dos hilos paralelos**: cada uno está en el campo del otro: $\frac FL = \frac{\mu_0I_1I_2}{2\pi d}$. Corrientes en el mismo sentido se **atraen**; en sentidos opuestos se repelen. *Ejemplo:* $1$ A en cada uno, a
  $1$ m: $2 \cdot 10^{-7}$ N por metro (así se definía el amperio hasta 2019).

> [!formal] Con rigor: la ley de Biot-Savart y la de Ampère
> Cada tramo $d\vec l$ de un hilo con corriente $I$ crea en un punto a distancia $r$ un campo $d\vec B = \frac{\mu_0}{4\pi}\frac{I\,d\vec l \times \hat r}{r^2}$ (**Biot-Savart**); sumando todos los tramos se obtienen los campos anteriores
> (en el centro de una espira, todos los tramos están a la distancia $R$ y perpendiculares, y la suma da $\frac{\mu_0I}{4\pi R^2} \cdot 2\pi R = \frac{\mu_0I}{2R}$). La **ley de Ampère** dice que la circulación de $\vec B$ a lo largo de una curva cerrada
> es $\mu_0$ por la corriente que la atraviesa; para un hilo, sobre una circunferencia de radio $r$: $B \cdot 2\pi r = \mu_0I$ ([[fis-electricidad-magnetismo-1]]). $\blacksquare$

## 6. Magnetismo en la materia

Los materiales **ferromagnéticos** (hierro, níquel, cobalto) tienen dominios que se alinean con un campo externo y lo refuerzan mucho; algunos se quedan imantados (imanes permanentes). Los
**paramagnéticos** se refuerzan débilmente y los **diamagnéticos** se oponen débilmente al campo. Por encima de la **temperatura de Curie**, un ferromagnético pierde su imantación.

## 7. Errores típicos

- Aplicar la fuerza magnética a cargas quietas o que se mueven paralelas al campo.
- Pensar que el campo magnético acelera las cargas (cambia la dirección, no la rapidez).
- Equivocar el sentido con la regla de la mano derecha, o no invertirlo para cargas negativas.
- Confundir el campo de un hilo ($\frac{\mu_0I}{2\pi r}$) con el del centro de una espira ($\frac{\mu_0I}{2R}$).
- Usar la longitud del solenoide en centímetros.

## 8. Resumen

- Imanes, polos, líneas de campo; tesla; campo terrestre.
- Lorentz $F = |q|vB\sin\theta$; $r = \frac{mv}{|q|B}$, $f = \frac{|q|B}{2\pi m}$; espectrómetro, ciclotrón, selector $v = \frac EB$.
- Hilo $F = ILB\sin\theta$; bobina $\tau = NIAB\sin\theta$; motor.
- Hilo $\frac{\mu_0I}{2\pi r}$; espira $\frac{\mu_0I}{2R}$; solenoide $\frac{\mu_0NI}{L}$; hilos paralelos $\frac{\mu_0I_1I_2}{2\pi d}$; Biot-Savart y Ampère.
- Ferro, para y diamagnetismo.

## Repaso: lo que debe quedarte dentro de un mes

1. Cuándo sufre fuerza magnética una carga y por qué no cambia su rapidez.
2. El radio de giro de una carga en un campo uniforme.
3. Cómo funciona un motor eléctrico.
4. El campo de un hilo y el de un solenoide.
5. Por qué se atraen dos corrientes paralelas del mismo sentido.

## Siguiente

el tema `fis-induccion` (campos magnéticos que cambian generan corrientes).
