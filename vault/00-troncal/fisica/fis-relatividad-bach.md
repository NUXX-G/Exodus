---
id: fis-relatividad-bach
title: "Relatividad especial: postulados de Einstein, simultaneidad, dilatación del tiempo, contracción de longitudes, suma de velocidades, momento y energía relativistas, E = mc²"
area: fisica
trunk_level: 3
prerequisites: [fis-momento-choques, fis-optica]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 3 (en español), OpenStax (2021), capítulo 5: «Relatividad» (invariancia de las leyes físicas, relatividad de la simultaneidad, dilatación del tiempo, contracción de la longitud, transformación de Lorentz, transformación relativista de la velocidad, efecto Doppler, momento y energía relativistas). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/5-introduccion"
  - "A. Einstein, «Zur Elektrodynamik bewegter Körper», Annalen der Physik 17 (1905) 891-921; «Ist die Trägheit eines Körpers von seinem Energieinhalt abhängig?», Annalen der Physik 18 (1905) 639-641."
  - "E. F. Taylor y J. A. Wheeler, «Spacetime Physics», 2.ª ed., W. H. Freeman (1992), capítulos 1-3."
hints:
  - "Concepto: la velocidad de la luz es la misma para todos los observadores inerciales. Para que eso sea posible, el tiempo y el espacio dependen del observador: los relojes en movimiento atrasan, las longitudes en movimiento se acortan y nada con masa alcanza c. La masa es una forma de energía."
  - "Herramienta: γ = 1/√(1 − v²/c²); Δt = γ Δt₀ (tiempo propio Δt₀); L = L₀/γ (longitud propia L₀); suma de velocidades w = (u + v)/(1 + uv/c²); p = γ m v; E = γ m c²; Ec = (γ − 1) m c²; E² = (pc)² + (mc²)²; E₀ = m c²; 1 u = 931,5 MeV/c²."
  - "Documentación: OpenStax Física universitaria vol. 3, cap. 5; Einstein (1905); Taylor y Wheeler."
exercises:
  - id: factor-de-lorentz
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto vale el factor de Lorentz $\gamma$ para una velocidad de ${{b}}\,c$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"b":"0{,}5"}
        answers: ["sha256:998c4a4304525a96cff464016b34a7b4baba2a74de796cc283bb38cb4c122958","sha256:46f15e9b5aaec709c5f2b7721bc74c7ecc7e96cb42ea295f38f692c44824bcc7","sha256:e0d3acd7732f6515bb03d21f49e36aa8b5f19e3fb9ffc5b52d96deee54beadcc"]
      - values: {"b":"0{,}9"}
        answers: ["sha256:535035bdc3dea86a7be17fcfde4356c5fc63f6fba50f7f3d77ab603c8d664ce4","sha256:20b735d6fd531dea0febac27b24795157854e90d2aabf005211568c8d7f734c3","sha256:fed1159eda4bfdbc2f2c94c681bb8dcddcf3017940fcd4bfe65f32f5007ce448"]
      - values: {"b":"0{,}99"}
        answers: ["sha256:9a43438f1a7b5f6725c761888c0ff1ce0b823bce9280ebb47b8e943273fc01c8","sha256:2b9f898acfd9094cb61d8e6f88cb83468e910934f17aa1700a3ae1d6120830d5","sha256:af8d5f9d09fa614163363ef467fe01e09ee4e03535034ccf32e5c2d82dbc0e85"]
      - values: {"b":"0{,}1"}
        answers: ["sha256:5a4e0ee5a9f26842764ba3a8297bc778adb00178705f61b727c1b097dd9304bb","sha256:d97733aaf5709860be6d0f9633d120ba96a0c8eb7148b56e7c2491c8d6b5ed1e","sha256:7ca49d455367412836e6e6e768f288a22a5421e3b0913b4b50dc19b4864a37ca"]
      - values: {"b":"0{,}95"}
        answers: ["sha256:7e663a3b31884cc1da01bc4acb24aed15f45529cbb634241ea5622afe022eb04","sha256:857314d51068c9e0af734e8e0e4993013ce9429e22abfc6de6ee1feed3b39e66","sha256:0489d1217215aad15bb069670108c38828f0564102c9d7db454637aecda913b8"]
      - values: {"b":"0{,}3"}
        answers: ["sha256:b38bb5da6d0c9ba246b829dcd3ee067c0ca62c442a73c404bf0b3fda60ca9e6d","sha256:6b00401e68a1deec16e4d33abfe109f6a20bccd91e8c3304da35acff1e53e910","sha256:cebee27c0beacdb91c5617d73501d36d8829dce50bb23c33c09b31eae46833be"]
  - id: dilatacion-del-tiempo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una nave viaja a ${{b}}\,c$ respecto de la Tierra. Para su tripulación pasan ${{t0}}$ años. ¿Cuántos años pasan, según los relojes de la Tierra? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"t0":5,"b":"0{,}9"}
        answers: ["sha256:c72e462f4c3c2107c257a2e2f155afeed7ad93cb46abc4f9e8bf1f4f4a7eccc7","sha256:4f064a224ad9a81aa155dac1b640cade527e6e9c3b529dc1045e7f8f9514949f","sha256:85a6558ff0481c98c55551c6c3d8a04e949058fae4ff5feffe9617c96041daf5"]
      - values: {"t0":2,"b":"0{,}99"}
        answers: ["sha256:a87cd1fd7e31f2b25ce4b77f5e7f5eaeddb02ae0a6dca9df32d3c16493592ff9","sha256:5dbe3ce41e80f3262bb81f469359a60d1138c42d36f68a897b0b812a2c111f59","sha256:c66449548e5b6c643a49ca9037d9a8e91549bc7a441cbf2dd1295ac0d9c9b51f"]
      - values: {"t0":10,"b":"0{,}5"}
        answers: ["sha256:86c74681e02d4040bb68b626ef44eb29b319c3df83131f7354c0194372a4deb8","sha256:4b7f2ae0dd7587806073ed848530e0ce049dd4f512a3ddce609cbc4b321ec2ac","sha256:f5e77a0277779214a4f41429b5d47b5c2f9fa7073ff8940349d8f2115c3c4505"]
      - values: {"t0":1,"b":"0{,}995"}
        answers: ["sha256:c5e65347a80028c3b988e19d4a4cf85b2b375accdebdb7bf45e672d10cf02786","sha256:1d7f8a8dd8c10db88590b9a98bd19e24b47fe41e79a2e56a7409fbeced6f3fe3","sha256:f0a2031e645f884e6f0cd21715455f1f238365ddd3f55738df13a077ad477e4f"]
      - values: {"t0":20,"b":"0{,}7"}
        answers: ["sha256:c49d6844da5f001a0c09908e4e7b57abd46d1a44836006ad9b78d09c0406e13e","sha256:63d28ad464f97a5a617aa9daa4086a98857ce5089bf61b32fc2f57185fafe6b0","sha256:58df619f998a7493747472864c092937ddc5f69c4e6dd236e5d7e66742231299"]
      - values: {"t0":3,"b":"0{,}95"}
        answers: ["sha256:c5fc81056460c839a2df78f3f5e10b5c46c6678628de361eb1b7ea843516f6b2","sha256:a2650d68e9831db5cd5c4f64ffa38d2f2f811e527f1282d881971fbd2d07d150","sha256:2e371c82f121a79b30b49b8f798a117eb46fbc35b2c85eb4dc5da22ba37e54c0"]
  - id: contraccion-de-longitudes
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una nave mide ${{L0}}$ m en reposo. ¿Qué longitud, en m, le mide un observador respecto del cual se mueve a ${{b}}\,c$ en la dirección de su longitud? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L0":100,"b":"0{,}6"}
        answers: ["sha256:331e412b54eca84d2cb71bfbe548e423ba2d0ef628d695f94073c3b739e2c838","sha256:5edfb515d57f0b2b94d39ceaf767f7135a70e9035f273cc479ceed9d774bc7a6","sha256:8251c17b575f4e0da1e910b5831a5c3f4f274a182406bf79ba3620e9edc4650e"]
      - values: {"L0":50,"b":"0{,}95"}
        answers: ["sha256:ec839a4053323cea92b23eb087a30c589a77115e64c88b499f512709a60a69c9","sha256:c7ae38023d8986c5d6647c603d96a552d8c969aa6c622a9ee11eef7d4a79e398","sha256:7cee1cdf6ef75468a8c738f02910d99ba3eb09c72aa0db69823d9fbd56ed0394"]
      - values: {"L0":2,"b":"0{,}99"}
        answers: ["sha256:12ef254137ec2126c8723a167afd1e378b7640aefb4d9d9dff397b2ec830e328","sha256:92c89f7e6bb8d3fe4a6074ff4d72d439e45c2f71af68bae3dd44a9c6c289b840","sha256:d8fbb79270b3468007550eedb7f7d5904b688a8745afa02faeeadd19d019edae"]
      - values: {"L0":400,"b":"0{,}3"}
        answers: ["sha256:710a8693f480271540219c9e3baf44ada721091d1562723bd35c4a697efdd942","sha256:bc0464b5ba29c8f1f7a1ed55c4c03e83c85ba2a4987c7eb16ba7ebc0747fbd82","sha256:75b44174705495d3b69beb1b7dbfc9121bcdc7b8fc75b2fb132df4590964aa16"]
      - values: {"L0":12,"b":"0{,}8"}
        answers: ["sha256:f2b97febd4c9854cb7d269d0e84db27b69248a60936114ff13662f7733492792","sha256:3af9454a1627375faf8227d1973534a2fb9504ca8e4ac826288ba905200e6173","sha256:d345733b76251652e92305093780d4a0ce746b87b012871d0b28cdc430072ca0"]
      - values: {"L0":1000,"b":"0{,}999"}
        answers: ["sha256:b17aa2209832463a1bb564e11fa90d78bf88922ecef6435418eadb2f64f04941","sha256:4e2cd402711d743da924c32eab58446bb927f4162690b4feec196f92bcba3ddd","sha256:8d10991dd7c33666e4045b4b0fe54ed8fb45c24bb742a3ac1270d69028da8dbd"]
  - id: muones
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Los muones tienen una vida media propia de $2{,}2$ μs. ¿Qué distancia media, en km, recorre en la atmósfera un muon que viaja a ${{b}}\,c$ antes de desintegrarse, medida desde la Tierra ($c = 3 \cdot 10^8$ m/s)?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"b":"0{,}99"}
        answers: ["sha256:d5d95461843d4d60997d975f96d885f6ce6df200c0ff1ebf97ec203a4a039c6d","sha256:8c82081c0bac07913c6edb4829bdda7181bd435b8a0642f462217a0b25fc3176","sha256:1811b471e909fcb0d262e62dd2f22cc23a533db05d2170998393831046c62cc8"]
      - values: {"b":"0{,}995"}
        answers: ["sha256:5272760ee1ef2870248b2ed460cd89bf06213868943ae250e865e99673f73984","sha256:f35017a030e8fbf3d136b014f8e96aff36c4597ed7323bd387cd7fb558bb0a66","sha256:4197ee2347a13efff00ced011663fce5c367dd22c1fce0fadb791630bd082e75"]
      - values: {"b":"0{,}95"}
        answers: ["sha256:312ede82c4397b91e6d7e1ea97b59a7cfe185994240bbdd3b6e4465b00c48e51","sha256:5b1aa0bffdfe710271184704692dd31006e7bbdd68769be6f6b159819a61f0fc","sha256:c1ccfb8c0592afa5a47ea5d1432926f3bfd96b77609f2fe68127e38f2817ab46"]
      - values: {"b":"0{,}9999"}
        answers: ["sha256:ce62ea556890d187d84cb6582dd3411398934cc07e39079c7f750f968fa1e771","sha256:80cca5ce1dcd74f2a4e50ac91345bd3de9ce2b6c9d480db233239ade41ff6d3d","sha256:bb1226a453ab9f3b710b90742ea55f21c85d462bf54d927b9b43dc2fd9f1b74a"]
      - values: {"b":"0{,}98"}
        answers: ["sha256:3fc0bd0c5cfb54f1bfcc1ca7e86fccec88a73ce3727330001956c1bec20e9596","sha256:d9ef9a0bf11fe0fea61dd7d2ab121e4f73abe21cf8b67514f431c54180d7c3a6","sha256:09b0ffc050e5d347769111980d603a579fd6662a64c864a7f156cb17f36cf23e"]
      - values: {"b":"0{,}9"}
        answers: ["sha256:55f2599e24d1d1cf7304ac7c78dc677cf15256c7f7f7be19d1aa454f5de8a440","sha256:7a64a7e226c300e5f297cc9c274494b96201f800b17f82555f7e54d28a2cd1d9","sha256:e140b900e95217ef369e9d32c5cae1f0a2ba0e8caa54070b93f95d19492d7a22"]
  - id: velocidad-para-un-gamma
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿A qué fracción de la velocidad de la luz hay que moverse para que el factor de Lorentz valga ${{g}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"g":"2"}
        answers: ["sha256:9834227d481f6390760dad29434bb3541ad116ed23b3437e92615f2e68ab21e0","sha256:f339b01a8cf3a84c3d356bd8563421d6c9c8225b68958c41ba494070f9d8beff","sha256:f761c1668af87470cd3a8e614c4d2b0eb04236f51fed04eff61816c7dd0cb82a"]
      - values: {"g":"1{,}5"}
        answers: ["sha256:69ee1695b999372c39a237c7f5b87dc30d14dd2769e929da964d69ab74815d12","sha256:f98228e97f7d73b2abae77fa3b88bc9e96d68f6f85a6180813c8be19a65baba1","sha256:9a3644cd000b2ed8bbd9affb8db4ddeadb9646b558554d156480f41efedc5dcc"]
      - values: {"g":"10"}
        answers: ["sha256:4ad7475c12f3558d4918dbc8554187223221c91ca4faa390f75d68fcdac900af","sha256:2e86fe8622115854ca10ecfdf165495b5cb0b31ff0217478bd01ccdbeb65f3b6","sha256:80bced2a915acab75e2a6b40ac929156998883320728f0f21a9038b670e01063"]
      - values: {"g":"1{,}01"}
        answers: ["sha256:a1a0ca9b0bedfac839b31d6338755a4608aaeb72c8f68b3c569ecf5fa67f95dd","sha256:0875b6946896b79fa8be0ce7d53d61692e26f01e5b9ca2572ab458ef1e4fedeb","sha256:49790a424472eba5352258cc4b8f65af92ab72f38d01d13f8c43521c0f54e04f"]
      - values: {"g":"3"}
        answers: ["sha256:c8e553a1e0a43c38ba296715bf706fc3c9cd9c06bbae6c9b37eb15b476d19804","sha256:53fd02da4a067f45c7b9454784386fb52e5b42aec6babfee3b5519867cf73488","sha256:6343396b9af9fd14441e71108c115459d65d04f7b607310f20f2908c7a1f25d9"]
      - values: {"g":"7"}
        answers: ["sha256:11d6eb4d9958cef8e53af1e1355ecca57e6fcf047fdbfd344056d16c441d1430","sha256:661e15aa1e95cdfd126cd1a5535b1167f6416ba19afe832a0a2282012398229f","sha256:5e16d64189c72fd6c13f6854f5f66a2d00e713decfb300a90ff41469d4e66047"]
  - id: suma-de-velocidades
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una nave se aleja de la Tierra a ${{u}}\,c$ y dispara hacia delante una sonda a ${{v}}\,c$ respecto de la nave. ¿A qué fracción de $c$ se mueve la sonda respecto de la Tierra? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"u":"0{,}5","v":"0{,}5"}
        answers: ["sha256:fc8671c0c9b78123a0e9796ab05e61b7518b38eb6086634fdca0ec739f8e1ea0","sha256:587148b5ddec3d2b249e32da757abde5db594970f77814d3308c543055a14ce8","sha256:4a32dc79a616c6f8b3dd70c8b0ab900a90c45c153db4b8f3631fb761cd1ce204"]
      - values: {"u":"0{,}9","v":"0{,}9"}
        answers: ["sha256:e21c0433c0ebf24254cd5e81b38d05f1de43a5ed23cc47f00e1f867db1e1ad7d","sha256:d2551869cbaed9bccfcdbde70a0854a7493462bd8f406a96cc5a709361a70222","sha256:fcab120a8d5fddc87135ec6e225438931de4b9fe770b4c383ce59b535d6acb73"]
      - values: {"u":"0{,}6","v":"0{,}3"}
        answers: ["sha256:fd755a474f90ecf8ea62fb10977a346e9e80a516c9c93756b94217f2cf8c483c","sha256:ff948c7dcba07adab2f991e6e9aa14cbcf1521693f0dd5249423ed7753fd6e1d","sha256:93153aaf3c1e4d854921eee64867ebfe7e964efc410c2aa92ed253eaaa940aca"]
      - values: {"u":"0{,}99","v":"0{,}5"}
        answers: ["sha256:39d78f3b2b3340f6eb022aa7f06ddc79483293f6163c40548deea96c45ba98c6","sha256:76c33ed5252ba5ab02e78c5dfb161bd466c3fdedacdd6db6bdada1dd75894424","sha256:222a72a97f93da5b4835aed235562c621632af291f2aeff8f4a27ea83f58ffd7"]
      - values: {"u":"0{,}2","v":"0{,}7"}
        answers: ["sha256:bdaa17defbebf94d3087bd34b6610f56312d03b2bfab23b0ef8193f46296bdb0","sha256:2f0fbb032d9491b4314796897a3d3bea8b0dacbbb1e86c2627c5d7d7eee174be","sha256:09c70fd8afb7a55c532b308f17a229fe9cbc6dd2bb327be7cfa924e28f855672"]
      - values: {"u":"0{,}75","v":"0{,}75"}
        answers: ["sha256:7269dda15b4cd1180fa1b99ec4ac4e8e27fc85dc7ccb84b2b76e7a09e33f88fa","sha256:a8d044ab0070c8d28971b08d66a5a2c107e99a690df3a260841b97579c5fd099","sha256:aeec350bceee46e1634b5d222c958c121309c046510a6a6416b3fa88e1e04c61"]
  - id: energia-en-reposo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánta energía, en TJ ($10^{12}$ J), equivale a una masa de ${{m}}$ g según $E = mc^2$ ($c = 3 \cdot 10^8$ m/s)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"2"}
        answers: ["sha256:ae34f86a73177a2dcfded8d49f53cdb04ef7fe2438b2cde1225807f86c9e76ec","sha256:b1bfe9d53b0d62dfaec94a9b4636f3dfe84c012bb6a0f91ca912794bcef81d70","sha256:88c6d6d49ec77fa56398f5975c116b3ae03416c7a9b8676d1ceacee6322c32e5"]
      - values: {"m":"0{,}5"}
        answers: ["sha256:92ad50abc926e34cc1cc2495a9e2d415171b90ef6b60132b89e358b9e8bd5101","sha256:d230e3781ca96b2a345dd071b942fef11ca822b70fdc3862c6d5df28231f239e","sha256:ccb7af1cf13def1a9df746805d231b257ebf1185f64db7af30aa924ad8cb1623"]
      - values: {"m":"10"}
        answers: ["sha256:2b8c015fabcf44fe2d2861bd3907a0ef19577833de3af8cabe4c950b1e1efff6","sha256:2b674d63f4db619bfded1b8649aef4e7c844af844a38a40a1027e38bbb30bae4","sha256:50fdf2ae107ae92c1b515ee350f305ad68bef6fac9ba5a7dd491904c3d550af5"]
      - values: {"m":"0{,}01"}
        answers: ["sha256:418ea41e684eb1869efaec0183348e653351446d9d3c217ae11168a3b2c8cb12","sha256:2149bc11db9c84da611c735042020d4d15314ef65c85a7a0439d05b2828c898c","sha256:cfb2fea1748499e90a8ec9bd10b9bb3864eb8eba61c8c6bf1a0d31b296f04ffc"]
      - values: {"m":"1000"}
        answers: ["sha256:07abad9886cb8220033fc38b6db28bd171dd30135b611c43ae6c3255417e8fa4","sha256:ffe9637c4d3f708d498dedab34465376fd22fcbed8dedab1b838459931ab0149","sha256:8359da510a911b387bfb378a379b8b892f0d654fe39db993a6f9e5e60b918753"]
      - values: {"m":"3{,}5"}
        answers: ["sha256:5f36e58e3c6dee3f139cb952edb35fdf32b2917b406d39d6b182ae0fce0fd544","sha256:e7907f6b4104fc1a147322d6a523fd4c4aba8a4153f4c654fccd2641a16d8459","sha256:3453f09ff7f7f4d71acd1915315a4fa1c473b233a0c0c16bea40d8e631eeaf38"]
  - id: energia-cinetica-relativista
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la energía cinética, en MeV, de un electrón ($m_ec^2 = 0{,}511$ MeV) que se mueve a ${{b}}\,c$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"b":"0{,}5"}
        answers: ["sha256:63d4eea861b35b8603e0fec708208f2852260dbc9d1b8753eb570668d48df264","sha256:c1f1d55479db8cbc3afdace3898e7b0657501fd4db1d7c4506256112627bab9f","sha256:9064e89bb0187b74d426d8e178099a4ebbecf6770af8adedf6f7ec222947e7bb"]
      - values: {"b":"0{,}9"}
        answers: ["sha256:e1a5c4e7674b788310e0581e5d7bf95ab8162e111b83ed2989a76f247c91ed79","sha256:32d269db093ba6f5db17c3c6314f7553887186bc96be5e6a4ff391df964c10f6","sha256:feac375414fecd086e3e060583bba5b6e40e611ad3e3a992a4942e487cd378ee"]
      - values: {"b":"0{,}99"}
        answers: ["sha256:01e80c8bed37707385d7a71cba867cbfa0bb906685693ee10da8065c6ec6e7c7","sha256:8fbac35e0e9219de3a96b5bb32de4b6a1cce78e51055f1f5c0966a568db7df5e","sha256:9140424d4bf6669a153ad2cedbb98c1f2be84631ac7df674472c8cce1929d88e"]
      - values: {"b":"0{,}2"}
        answers: ["sha256:9b116fdb5c251d09c13302eb0b42320c8e90c138f2d4192cc2d0064c07e72fad","sha256:8c442c247f4b2ef41c887b831042c8b0f051c0fbb21b60eaf35a15de77a0b90e","sha256:d2f8774156428fe56b0121c7e625fb4a676330d504597896377ff6dd4b95db51"]
      - values: {"b":"0{,}999"}
        answers: ["sha256:47f1378a9bc17c7eb801884645266000fe1738208a31111a672b59d60462fef1","sha256:259599c4a8ea631c550b14f7ea7b2b03eebff118d23abafa02c04a5c0de35097","sha256:bdf3e6d8c1ec3118d3ec298928aeade9d53a6ff5953dc795ce42f92d8f9b6e4e"]
      - values: {"b":"0{,}7"}
        answers: ["sha256:37cf2123c21282494a9ed56587ed422518fa5841abf976ae5124af63b5cbdc74","sha256:22fb2951f85f3d92e48332f08b0eb411ecbb512e8830fb16222a4ec4e029db8e","sha256:9c3e9bfd1adeeef787b3ee3fa8a4ea51c8ce460079edbc8b5e45b77694cb6240"]
  - id: momento-relativista
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el momento lineal, en MeV/$c$, de un protón ($m_pc^2 = 938{,}3$ MeV) que se mueve a ${{b}}\,c$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"b":"0{,}5"}
        answers: ["sha256:8d4815edb318bde123002c6333befce411283fe68b4728b03db3bde5d83fd5e4","sha256:9d9bd33ccae2ba70b6095b6ed4fb37de917570d739f5bf09b0abe51923883fb3","sha256:a506c144416ac3b24840edf654097218c00bd497841f49a74a5b5aaa6ff30852"]
      - values: {"b":"0{,}8"}
        answers: ["sha256:b7bcb6f3317795d37c7643c55dd3233e7fe3af4a6a77d202f728d72f4cdff5a2","sha256:7c10aef9fdf00a6c31471bc261eefd2e7bee2de1a94eaf72cc81a0501f976f35","sha256:2df3942c1ff5d0299eaf0327bb20eac9071eef7008355a6b6d29c0b6577a1763"]
      - values: {"b":"0{,}95"}
        answers: ["sha256:47f9ff56f8a2bc082148c018d4eafe1c75b296c6df67ad78f39b0132ac301383","sha256:c7950e1556eae47268e25996ddb23abd62010088d5f1d14292754f82ccbcf23f","sha256:366c3bfc2008cef728284cbc82ab7b09df4a80b46a233cf8d548423042ff4e86"]
      - values: {"b":"0{,}1"}
        answers: ["sha256:637b4f2878d93ee7016b9d3502afc0dcb5d8aaf5ecd4231ff7efb587ad70b157","sha256:c7339eeec95cda5b4e6f88c526d84362087d213a3e17091d27f3311394302ed5","sha256:f128b91df6cabc8aedc662608e27473bbefd4975a8e97941ac7609d268aa4498"]
      - values: {"b":"0{,}99"}
        answers: ["sha256:c3a8f2c71958486bdb1cb5cbedb0294a45b1052d7bc5763912aa09a66d19fdae","sha256:fe01b4d08a106e17a44abb3717413e34c410922de77af02d9644df7344c84902","sha256:39f48948c25b3f43f5a5f7e87c71b7e627fbfdb257cc4ef76d258657710af442"]
      - values: {"b":"0{,}3"}
        answers: ["sha256:b555212f43e81c9b04cf5dca62c8f51378b0e2dfb2dbe6f35778bc5f469fc08f","sha256:d1fd950f126281e46cb56f679548ad5bac71bb619b5f0ce12339df47fe83df8b","sha256:d0173db0596db9f985f360847e8a031a7a9f0d9163a7a2a25179e16a12b26af8"]
  - id: defecto-de-masa
    tier: 1
    type: numero
    sig: 4
    prompt: |
      En una reacción nuclear, la masa de los productos es ${{dm}}$ u menor que la de los reactivos. ¿Cuánta energía se libera, en MeV ($1$ u $= 931{,}5$ MeV/$c^2$)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"dm":"0{,}0304"}
        answers: ["sha256:5f4254b3e68fae944dd3e1119e906452b94e7e650f02e8b4b10b6f23dfb40989","sha256:96127f06e4193c7d906c7e9f6296eb6c70d296a531d56e1b14539e2c76fa7de1","sha256:6ec5746addcd2d5b11a80bac569ba6478a0063cfa23005e032050b55679abd9c"]
      - values: {"dm":"0{,}0186"}
        answers: ["sha256:1ddb1fc861238f2f7330ea2994a4b5dfbde42fe9a84eb18722bdcb8577a50ae3","sha256:c4f63a4716fd6113646a2b2196881c96665db2b22748211d8dce1508eac80a17","sha256:b562a745da095dde36b8ba9c3e7e6a3989fc8d43fd28d5cbdb68200f7e13e3c8"]
      - values: {"dm":"0{,}1868"}
        answers: ["sha256:e45621e13229bd49442b7b3be8415d51b864191a996da6ce51641c2bf2218e67","sha256:56d2604e4532ca88999a6ae62fec74260f1916e8b37cdd3a5786932af3c4cf40","sha256:9c535553bb6c99279c29cd4f2e3ada0a73921996c3782ad6102ee6d1a29d11de"]
      - values: {"dm":"0{,}00239"}
        answers: ["sha256:a1fea9e2a4a10a3aa548b33a14658a273c67d9505813b908118f032c7ba48126","sha256:fcf056d89460702fc12d2460310bbe7242ca90b458f470fe447bbdd89480dece","sha256:1d02a9a3e627e9f84df27ca0de6e40e95420f596eb1a5ae284bd8ccaf318aa07"]
      - values: {"dm":"0{,}5"}
        answers: ["sha256:a8450264cc46718b6a459535a003ba88450c03b580a8b069b30c855e2a93d9f8","sha256:be27f80f5990223338c990d78e01340151694749f87b50e9746b5984bd236d25","sha256:8d89fc0c730d77bd03b9f33f3831176cc2b9fe0ff23719ec8c382fd40174ee11"]
      - values: {"dm":"0{,}0092"}
        answers: ["sha256:de2760efb067928f7bd3128288d793c3f5c6639967ccced8bd7b26c31a69aff1","sha256:4f59c2b0297481990eaca4fdaa394257b358f567ba82cccf6a1e377243fc57a1","sha256:e399759625bc8399832ede8ba25fe5793a922590cd671ac06172527d7be47a2f"]
  - id: velocidad-de-un-electron
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un electrón ($m_ec^2 = 0{,}511$ MeV) tiene una energía cinética de ${{K}}$ MeV. ¿A qué fracción de la velocidad de la luz se mueve? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"K":"0{,}1"}
        answers: ["sha256:6572d59cc42e7ba4a244ede22463317b4fedb1febbd14004244bb97f0a9d1594","sha256:5b3abc94b31a525fa2b2c8ed9aeb25c61e4ff5c88eb8cc9f7e7fbc020f986456","sha256:7779aedba2cedbc2ec6d492dfbc05d07d0b079d00d5b33a3c8672807994f021f"]
      - values: {"K":"1"}
        answers: ["sha256:258647ac5d75d50b47880f47abdf117023d2200e383d6d20a50955e8e4bf2646","sha256:c8ef70ebf4b20239facb1a080b8608a90e9c9bc055c72f90d13250229c8e7e55","sha256:7ac504e6ea8fc1c65cce2a998461ad54b6d5b65bbea03497c7c49de58bbe565f"]
      - values: {"K":"0{,}511"}
        answers: ["sha256:18bc8ff486d7b98097e3bf7e9f730d7f8bd72b494f22ef6aeee3cc2a14139648","sha256:3f3890616a2bd66c4367c54561b25c42aeafcdf500ec847621c4188e97ec34b6","sha256:aa7d085c9b8fa2f1e6fddaf621ab2887b764ef5d973321ab5444ffbe0eb6f1a9"]
      - values: {"K":"5"}
        answers: ["sha256:50f3414ed22796ffe601f3022bacb707eec97aa6d55fba932ae932c20ad87812","sha256:008ca04937044a6e511896d50366e147bf995512f78670d13483e8ccf3a2db93","sha256:3be51b0ae978ab5eb64ccbbd5b26de9e09c5c8f4c2087eb853c53d1dd3079802"]
      - values: {"K":"0{,}02"}
        answers: ["sha256:7df031ac2570f192df54698643a91f1905ef9f497502196a9bc69475916c5a57","sha256:60a14acdc7387379c30eabe800143a10d9d929ee8bf2a5938000cf8fdc042865","sha256:52bc5096489cb81f5b987d9b0f979514f7f3ec93a750fa70d344361d423bf7c9"]
      - values: {"K":"2{,}5"}
        answers: ["sha256:49f5c214f314b4bed6efee1df65bf0f7bc210400cb9fd9a2fc661e5360a72609","sha256:d9a4b4aca1ab1a76b977f98b5d4e2d14f39cfef7d5558932523120394b769622","sha256:4af8420e9fd43179ae5a255a0468cf47fcfbc9d2343a29c613077877a6164285"]
  - id: postulados-y-consecuencias
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Enuncia los dos postulados de la relatividad especial y explica por qué el segundo choca con la intuición. (b) Con un «reloj de luz» (un pulso que rebota entre dos espejos),
      deduce la dilatación del tiempo. (c) Explica por qué ningún cuerpo con masa puede alcanzar la velocidad de la luz y qué significa $E = mc^2$.
    sealed: "gz64:H4sIAAAAAAACCn1UPW/bSBD9KwOBhaxjdIlKBa4SI43qNMfzYbQ7oidY7tD7QZws6Me4vMLVddfyjx1mKVkyHKQhiOXyvZk3b95hFsXlxOJn69liMcebxQLmn25ggxEc7SmCJXAIu/ElskGI4sFhhI5jhxHIQxIrEZxEiBwT6aklCLSjQN4wAnsKhtFRXMJ8pdAwkBPDFu0J3eUnhSIHA5rxRYCiHheSGipT1dBjwCsu2UYKA1oJFK8Y6sazt9STt0w+UacPsOSgk4E7PZNzR1m/LeHLgxgEU/oC9imz4fFfD72Ex0w1RGrH/8rHmDvUn1+rn9T5ho4dSQ2PmclDTyFymwmyh4D7iS4/gaUthfFFmw9OgAN047MCxB4Ny2ftPlKbvRXoJabs0ErjnUAf5GF82VINe6AoIFvHLQKCwW7LGMpA2NKkfGLqeilXC/Cy8Y1fLOZbHe1dETmQkx8qeKBeotTnEQQyEkJRx3JMWMZXrTYVkE+BFJF+SJl61TRfySWE9NdHuIWm2QU0h9XmeDDHagnfORahoy06nJxxmvFjpksVkaDLNBAgVEP1rpTstUv2ov8+cfuE7VpfDVoEtlg33iE8cC+JfI5lPtlDCjw++za7Ir/BREkiVJsK9lANp2pfWzgeVlr0F+nkzD+ovpWpIKnG4z9+MiDFRFfeq1UHR7s0Nz/DbJrA7UO6uV/BLWzuV/AbnK4Pv75e1Vq2FW/pSumLzlfiHw9NEx9DOnyCDzDcr34396vjsVxtsevw6mq1LqtTdKcyxaulwBQwoj+7xahbNjoxCq26dtLVZAp9Wc/q7sIBnSk177XYclKBCWQIIntw40vHicBkVG9XAzRNEjDVGh6wbMQOtcLsr+jY79hzwkl256jFME1kOVEXSpjr3lYD3MLH6gYsGyru0uzAqOMqqDsJ0+ae4deQfePPzZz3QFfH09s6yEvoCDCKYbWcpkDBrgtRJHC8pVCs3WNIylH2MRAaw+Ipgs/GEWpQzcmBpR2ZKYUU5wb2kCShm6Kq/A3o+TGzwymJOkwUGD+gT3x6X87qWcjbwGa2/uMwM4H1WGbr2Z3PZW110hqWr1ESNRL+7p2mODkNvJ1jLeQUfT9LN+PGZ419peuzTxJn69WxfkP4lWw272z6znuF5nXrp0z8FezdpdSzgXQZzAR08dm+5Ca3nnds0BZdLwZ5y/Dn8X/du30j8AYAAA=="
  - id: r-velocidad-luz-observador
    tier: 1
    type: opcion
    review: true
    prompt: |
      Una nave que va a velocidad $v$ enciende un foco hacia delante. ¿A qué velocidad mide la luz un observador en la Tierra?
    options:
      - |
        c + v
      - |
        c − v
      - |
        c
      - |
        Depende de la fuente
    answers: ["sha256:af5ef7d5465b9d9aa8f2dc8948415df99f3f81a3357d914bc537efde791544d0"]
  - id: r-relojes-que-se-mueven
    tier: 1
    type: opcion
    review: true
    prompt: |
      Según un observador en reposo, ¿qué le pasa a un reloj que se mueve muy rápido respecto de él?
    options:
      - |
        Atrasa
      - |
        Adelanta
      - |
        Va igual
      - |
        Se para
    answers: ["sha256:32f387ad5f56ffb12667336f4bbfd9bf3d44d8b2f4dc86fd4ed023d5fd830550"]
  - id: r-gamma-reposo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale el factor de Lorentz para un cuerpo en reposo?
    answers: ["sha256:3c9765d3095c1f25979ef46bcc6fe0c5ee408e7f3a903695346b3ec271c24247","sha256:81fd2ba8f0e36d3d07c9214a9cd4d7f57a60164e3192c5703b16061e8b211712","sha256:4141efcb72841b2f0bb35b6f85ca48c4d57f6892262438d16ba4b19255e1455b"]
  - id: r-contraccion-direccion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿En qué dirección se contraen las longitudes de un cuerpo que se mueve?
    options:
      - |
        En todas las direcciones
      - |
        Solo en la dirección del movimiento
      - |
        Solo en la perpendicular
      - |
        En ninguna
    answers: ["sha256:3e1e59a76bad9cadd840e6492864077aeeed2dff2b0d720535151e7f101867db"]
  - id: r-gemelos
    tier: 2
    type: opcion
    review: true
    prompt: |
      Paradoja de los gemelos: uno viaja a una estrella a gran velocidad y vuelve. ¿Cuál es más joven al reencontrarse?
    options:
      - |
        El que se queda en la Tierra
      - |
        Los dos igual
      - |
        Depende de quién mire
      - |
        El que viaja y vuelve
    answers: ["sha256:f9038b266f5fad8818e907c7351eb2081d376420ceaf4ec3eecaf624a5dc0f72"]
  - id: r-gamma-2-tiempo
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $\gamma = 2$, ¿cuántos años pasan en la Tierra por cada año de la tripulación de una nave?
    answers: ["sha256:e9841b269f946bcd3e64d83caaaaa9ea0dd5f288ca3caff7b6e1884ca8957c43","sha256:472cadc30c9510589048953238f9c936ed7f3d5ddbfc7f844224ba6a97fede15","sha256:218116206f450af82812a91113e8ca65b335dffc352ade553fcdfc3d7c97f832"]
  - id: r-gps
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué consecuencia práctica tiene la relatividad en el sistema GPS?
    options:
      - |
        No tiene ningún efecto
      - |
        Solo afecta a los relojes de la Tierra
      - |
        Los relojes de los satélites deben corregirse; si no, el error de posición crecería kilómetros cada día
      - |
        Hace más lenta la señal de radio
    answers: ["sha256:53dd01714b9b53873df2ba48261bef8196f369d2875867cedfb5a23336298212"]
---

# Relatividad especial: postulados de Einstein, simultaneidad, dilatación del tiempo, contracción de longitudes, suma de velocidades, momento y energía relativistas, E = mc²

En 1905, un empleado de la oficina de patentes de Berna, Albert Einstein, publicó un artículo que cambió para siempre las ideas de espacio y tiempo. Partió de
un hecho experimental extraño: la luz va siempre a la misma velocidad, se mueva como se mueva quien la mide. Aceptarlo obliga a concluir que el tiempo no
transcurre igual para todos y que la masa es energía. Hoy la relatividad no es una curiosidad: sin sus correcciones el GPS fallaría por kilómetros cada día, y
los aceleradores de partículas y la energía nuclear la confirman a diario.

## Objetivos

Al terminar sabrás:

1. Enunciar los postulados de la relatividad especial y explicar la relatividad de la simultaneidad.
2. Calcular dilataciones del tiempo y contracciones de longitudes con el factor de Lorentz.
3. Sumar velocidades de forma relativista.
4. Calcular momentos y energías relativistas y usar $E = mc^2$.
5. Relacionar el defecto de masa con la energía liberada en reacciones nucleares.

## Qué debes dominar antes

[[fis-momento-choques]] (momento lineal y su conservación), [[fis-trabajo-energia]] (energía cinética) y [[fis-optica]] (la luz y su velocidad).

> [!question] Test de entrada
> 1. $\sqrt{1 - 0{,}36}$.
> 2. Energía cinética clásica de $2$ kg a $3$ m/s.
> 3. Un tren va a $30$ m/s y un pasajero camina hacia delante a $2$ m/s. Según la física clásica, ¿a qué velocidad va el pasajero respecto de la vía?
>
> Respuestas: $0{,}8$; $9$ J; $32$ m/s.

## 1. Para qué sirve

- **GPS**: los relojes de los satélites se corrigen por la relatividad especial y la general.
- **Física de partículas**: aceleradores, rayos cósmicos, vidas medias de partículas rápidas.
- **Energía**: $E = mc^2$ explica la energía de las centrales nucleares y de las estrellas ([[fis-fisica-nuclear]]).
- **Base de la física moderna**: electromagnetismo, física cuántica relativista ([[fis-relatividad-especial]]).

## 2. Los postulados de Einstein

> [!practico]
> Si persigues un tren a $100$ km/h desde un coche a $90$ km/h, ves que el tren se aleja a $10$ km/h. Con la luz no pasa: el experimento de Michelson y Morley (1887)
> y miles de medidas posteriores muestran que la luz se aleja de ti a $c$ vayas a la velocidad que vayas. Algo tiene que ceder, y Einstein mostró que son el
> tiempo y el espacio.

1. **Principio de relatividad**: las leyes de la física son las mismas en todos los sistemas de referencia inerciales; ningún experimento distingue el reposo del movimiento uniforme.
2. **Constancia de la velocidad de la luz**: la luz en el vacío se propaga a $c \approx 3 \cdot 10^8$ m/s para todos los observadores inerciales, sea cual sea el movimiento de la fuente.

**Relatividad de la simultaneidad**: dos sucesos simultáneos para un observador pueden no serlo para otro que se mueve respecto de él. Si en el centro de un vagón se enciende una luz, llega a la vez a
los dos extremos para quien va en el vagón; para quien lo ve pasar desde el andén, llega antes a la pared trasera, que se acerca a la luz.

## 3. Dilatación del tiempo y contracción de longitudes

El **factor de Lorentz** es
$$
\gamma = \frac{1}{\sqrt{1 - v^2/c^2}} \ge 1 ;
$$
a $0{,}6c$ vale $1{,}25$; a $0{,}8c$, $\frac53$; a velocidades cotidianas, prácticamente $1$.

- **Dilatación del tiempo**: el **tiempo propio** $\Delta t_0$ es el que mide un reloj que está en los dos sucesos (que se mueve con ellos). Cualquier otro observador inercial mide un intervalo mayor:
  $\Delta t = \gamma\Delta t_0$. Los relojes en movimiento atrasan.
- **Muones**: se crean en la alta atmósfera y viven $2{,}2$ μs en reposo; sin relatividad, recorrerían unos $660$ m y casi ninguno llegaría al suelo. A $0{,}998c$ su vida, vista desde la Tierra, se multiplica por unos
  $16$ y recorren kilómetros: llegan en gran número, como se observa.
- **Contracción de longitudes**: la **longitud propia** $L_0$ es la medida en el sistema en que el objeto está en reposo; en un sistema respecto del cual se mueve, en la dirección del movimiento,
  $L = \frac{L_0}{\gamma}$. Las dimensiones perpendiculares no cambian.
- **Paradoja de los gemelos**: el gemelo que viaja y vuelve (cambiando de sistema inercial) envejece menos; se ha comprobado con relojes atómicos en aviones.

## 4. Suma relativista de velocidades

Si una nave se aleja a $u$ y dispara hacia delante una sonda a $v$ respecto de ella, la sonda se mueve respecto de la Tierra a
$$
w = \frac{u + v}{1 + uv/c^2},
$$
siempre menos que $c$. Con velocidades pequeñas, el denominador es casi $1$ y se recupera la suma de Galileo; con $v = c$, resulta $w = c$, como exige el segundo postulado.

> [!formal] Con rigor: la transformación de Lorentz
> Si el sistema $S'$ se mueve a velocidad $v$ a lo largo del eje $x$ de $S$, las coordenadas de un suceso se relacionan por $t' = \gamma\left(t - \frac{vx}{c^2}\right)$, $x' = \gamma(x - vt)$, $y' = y$, $z' = z$. Es la única transformación lineal que deja
> invariante la velocidad de la luz; de ella se deducen la dilatación del tiempo, la contracción de longitudes, la relatividad de la simultaneidad y la suma de velocidades. Lo que todos los observadores
> comparten es el **intervalo** $(c\Delta t)^2 - \Delta x^2 - \Delta y^2 - \Delta z^2$ ([[fis-relatividad-especial]]). $\blacksquare$

## 5. Momento y energía relativistas

Para que el momento lineal se siga conservando en todos los sistemas inerciales hay que redefinirlo: $\vec p = \gamma m\vec v$. La **energía total** de una partícula libre es
$$
E = \gamma mc^2 = E_c + mc^2, \qquad E^2 = (pc)^2 + (mc^2)^2 .
$$
- **Energía en reposo** $E_0 = mc^2$: un gramo de materia equivale a $9 \cdot 10^{13}$ J, la energía de una gran central durante un día.
- **Energía cinética** $E_c = (\gamma - 1)mc^2$; a velocidades bajas se reduce a $\frac12mv^2$.
- Como $\gamma \to \infty$ cuando $v \to c$, acelerar un cuerpo con masa hasta $c$ exigiría energía infinita: $c$ es una velocidad límite. Las partículas sin masa (fotones) van siempre a $c$, con $E = pc$.
- En física de partículas se usan el **electronvoltio** y sus múltiplos: $m_ec^2 = 0{,}511$ MeV, $m_pc^2 = 938{,}3$ MeV, $1$ u $= 931{,}5$ MeV/$c^2$.
- **Defecto de masa**: en una reacción que libera energía, la masa final es menor que la inicial, y $E = \Delta m\,c^2$. Es el origen de la energía nuclear y de la de las estrellas.

## 6. Errores típicos

- Aplicar $\Delta t = \gamma\Delta t_0$ al revés (el tiempo propio es el **menor**).
- Contraer las dimensiones perpendiculares al movimiento.
- Sumar velocidades cercanas a $c$ con la regla de Galileo.
- Usar $\frac12mv^2$ a velocidades relativistas.
- Pensar que la «masa aumenta» con la velocidad (lo que crecen son la energía y el momento; la masa es invariante).

## 7. Resumen

- Postulados: relatividad e invariancia de $c$; relatividad de la simultaneidad.
- $\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}$; $\Delta t = \gamma\Delta t_0$; $L = \frac{L_0}{\gamma}$; muones y gemelos.
- $w = \frac{u + v}{1 + uv/c^2}$; transformación de Lorentz.
- $p = \gamma mv$; $E = \gamma mc^2$; $E_c = (\gamma - 1)mc^2$; $E^2 = (pc)^2 + (mc^2)^2$; $E_0 = mc^2$; defecto de masa.

## Repaso: lo que debe quedarte dentro de un mes

1. Los dos postulados de la relatividad especial.
2. Qué es el tiempo propio y cómo se dilata el tiempo.
3. Por qué los muones llegan al suelo.
4. Por qué nada con masa alcanza la velocidad de la luz.
5. Qué significa $E = mc^2$ y qué es el defecto de masa.

## Siguiente

[[fis-cuantica-introduccion]] (la otra gran revolución: fotones, dualidad onda-partícula e incertidumbre).
