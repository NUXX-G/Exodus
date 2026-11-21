---
id: mat-rectas-angulos
title: "Elementos del plano: puntos, rectas, ángulos y su medida sexagesimal, paralelas y secantes, mediatriz y bisectriz"
area: matematicas
trunk_level: 2
prerequisites: [mat-resolucion-problemas]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 8: «Figuras planas», secciones 1.1-1.10 (puntos, rectas, semirrectas y segmentos; paralelas y secantes; ángulos, tipos y medida; suma y resta en el sistema sexagesimal; complementarios y suplementarios; ángulos entre dos paralelas y una secante; ángulos en la circunferencia; perpendiculares y mediatriz; bisectriz). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2008%20FigurasPlanas.pdf"
  - "Euclides, «Elementos», libro I: definiciones, postulados (incluido el de las paralelas) y proposiciones I.13-I.15 (ángulos adyacentes y opuestos por el vértice) y I.27-I.29 (paralelas y secante). Edición de D. E. Joyce, Clark University: https://mathcs.clarku.edu/~djoyce/elements/bookI/bookI.html"
hints:
  - "Concepto: dos ángulos adyacentes (que juntos forman una recta) suman 180°; los opuestos por el vértice son iguales; y si dos paralelas se cortan con una secante, los ocho ángulos que aparecen solo toman dos valores, α y 180° − α."
  - "Herramienta: para operar en grados, minutos y segundos, opera cada unidad por separado y luego «lleva»: cada 60'' son 1', cada 60' son 1°; para restar, pide prestado 1° = 60' o 1' = 60''. Si te lías, pásalo todo a segundos."
  - "Documentación: Marea Verde 1.º ESO cap. 8, sección 1."
exercises:
  - id: complementario
    tier: 1
    prompt: |
      Calcula el complementario de ${{a}}$. Respuesta: `grados;minutos;segundos`.
    variants:
      - values: {"a":"42^\\circ\\, 15'"}
        answers: ["sha256:3a2ab05f73896edfb30245f06bc1a08641c1bc9a9b0a930d229f850dd21708f6"]
      - values: {"a":"17^\\circ\\, 48'\\, 20''"}
        answers: ["sha256:8720d85f95497218ac0775fa5f231d9b3acccc76f77d941588214346c548eda7"]
      - values: {"a":"63^\\circ\\, 5'\\, 45''"}
        answers: ["sha256:8db6ec154a81b9e9b5e38b235b581cb65aa92b9b832f0d5222a8a2fa4ce3cd6f"]
      - values: {"a":"8^\\circ\\, 59'"}
        answers: ["sha256:e0ede4d6373e4fd4bdd6cfb4e5cfc2347f08aed83dd323cb8fd2ecf2fc8205bc"]
      - values: {"a":"71^\\circ\\, 30'\\, 10''"}
        answers: ["sha256:bf3c3294286b6103ac35b5fc6a8cc66529fa2b32d18c627a5d8dd535b6c205de"]
      - values: {"a":"29^\\circ\\, 0'\\, 55''"}
        answers: ["sha256:e0edfa296f64dac5e0f5b0b3a4b6a703ddddb8a264224b9916c2092b88893724"]
  - id: suplementario
    tier: 1
    prompt: |
      Calcula el suplementario de ${{a}}$. Respuesta: `grados;minutos;segundos`.
    variants:
      - values: {"a":"132^\\circ\\, 27'"}
        answers: ["sha256:f022bc0a11d5d1d8585e155e5ef9f39ffa3d7b3c413b4bdd96b96f308dca042b"]
      - values: {"a":"48^\\circ\\, 36'\\, 15''"}
        answers: ["sha256:3268f4f6a574cf37d8a54b419e9e5bb8679018a7e994b00c35bf1586321bbc72"]
      - values: {"a":"95^\\circ\\, 12'\\, 50''"}
        answers: ["sha256:d303b7fb7dff3ca6bd64a8011908314fafd82dab92630cf7b40b8b0ae882b180"]
      - values: {"a":"160^\\circ\\, 0'\\, 5''"}
        answers: ["sha256:b79c44a245d35cc25a721c4406d8fa7f4e1ccfd0b4b611055ecfe9ed624292f4"]
      - values: {"a":"7^\\circ\\, 44'\\, 30''"}
        answers: ["sha256:5f54f1fa91061d9ca4e900cae98ac102c96ba3806b0ff22e982e57810d9e1cb4"]
      - values: {"a":"121^\\circ\\, 59'\\, 59''"}
        answers: ["sha256:07680816abe44b361f57145fc995edcd2ea6b0de7314cbeab8897451a46eb99b"]
  - id: sumar-angulos
    tier: 1
    prompt: |
      Calcula ${{a}} + {{b}}$. Respuesta: `grados;minutos;segundos`.
    variants:
      - values: {"a":"37^\\circ\\, 48'\\, 25''","b":"22^\\circ\\, 30'\\, 50''"}
        answers: ["sha256:f406f7ffc1692b44429f173536a307210fd718760463a98b958c2622e54e3a45"]
      - values: {"a":"105^\\circ\\, 17'","b":"48^\\circ\\, 55'"}
        answers: ["sha256:ca5e867147d62a2c44ecf55f744247c282bfd533bb79c04059053b5c1a43f2fd"]
      - values: {"a":"12^\\circ\\, 59'\\, 59''","b":"0^\\circ\\, 0'\\, 1''"}
        answers: ["sha256:36ec36d43023fea5bdc8ac4dcafb5c36d6f89fcef618a16a62f99419ddad7862"]
      - values: {"a":"64^\\circ\\, 35'\\, 40''","b":"25^\\circ\\, 24'\\, 20''"}
        answers: ["sha256:f8c994900c014155355f12646adf15728824aba71edefd8d89f5e56abdbcc4b2"]
      - values: {"a":"88^\\circ\\, 8'\\, 48''","b":"41^\\circ\\, 51'\\, 37''"}
        answers: ["sha256:850daf71bc418140ed9d026a1aa5d9fa0df3124a7808d8185d507f8009e0fb52"]
      - values: {"a":"5^\\circ\\, 45'","b":"19^\\circ\\, 45'\\, 30''"}
        answers: ["sha256:ecf828148c2fb382ffecaf54e4cfeb9751c068e7eeeb16ab19fc84826cc5c711"]
  - id: restar-angulos
    tier: 1
    prompt: |
      Calcula ${{a}} - {{b}}$. Respuesta: `grados;minutos;segundos`.
    variants:
      - values: {"a":"81^\\circ\\, 12'\\, 5''","b":"36^\\circ\\, 47'\\, 50''"}
        answers: ["sha256:c06a8d1eff272d39f4e63c2f14d4da8dde58f6a8090fb6359014cfc46884330d"]
      - values: {"a":"150^\\circ\\, 0'","b":"72^\\circ\\, 18'\\, 40''"}
        answers: ["sha256:ed182b8e2a3c0b1b13d292f86c6edddd1b3f65428a5020867d98dbc648e8d6a9"]
      - values: {"a":"45^\\circ\\, 30'","b":"19^\\circ\\, 45'\\, 15''"}
        answers: ["sha256:412e26775b337aeb547a346cbcc8053f80da496999cc165cf1d2dcd5c83c7b54"]
      - values: {"a":"100^\\circ\\, 0'\\, 20''","b":"99^\\circ\\, 59'\\, 50''"}
        answers: ["sha256:084de9d4448b3b6e73d11b8018afa23891ffeb37e9e1e0c65ee88478419eecc4"]
      - values: {"a":"63^\\circ\\, 25'","b":"28^\\circ\\, 40'"}
        answers: ["sha256:c17f529f28a341e9a21d4610f42ff188bbfc94d98bd1a7bc729dcacd5ab5938e"]
      - values: {"a":"17^\\circ\\, 3'\\, 2''","b":"9^\\circ\\, 4'\\, 3''"}
        answers: ["sha256:887c24d0f505eae38e46948c0b90c595c89d60c26a2c764f7179aef611760dac"]
  - id: multiplicar-y-dividir-angulos
    tier: 2
    prompt: |
      Calcula ${{a}} {{op}} {{k}}$. Respuesta: `grados;minutos;segundos`.
    variants:
      - values: {"a":"23^\\circ\\, 34'\\, 50''","op":"\\times","k":3}
        answers: ["sha256:be22f90bd23e304c13e94a7bd0760fcc2d833bbbc473b1534a249c3f805b8cba"]
      - values: {"a":"15^\\circ\\, 27'","op":"\\times","k":4}
        answers: ["sha256:846ae9ffdcc3ba878de47986c252563a90aa01bf275c4ddb2af8fd33fe7582d6"]
      - values: {"a":"38^\\circ\\, 45'\\, 25''","op":"\\times","k":2}
        answers: ["sha256:8f2b95a49a35256397716de6bcc6a9624f334b0371dfdfa8e5763e9cb70ec9dd"]
      - values: {"a":"100^\\circ\\, 30'","op":":","k":3}
        answers: ["sha256:ed0dab3b8ce18977177f6a71f9e8e72a06d5c598d8b96bddf5f8984868e06f0d"]
      - values: {"a":"71^\\circ\\, 15'","op":":","k":5}
        answers: ["sha256:2d03c867b5cfc660e47dceafc4ddf7a8dd128798744ae25ef0a22610ea2a2d97"]
      - values: {"a":"45^\\circ\\, 20'\\, 10''","op":":","k":2}
        answers: ["sha256:d4204ad8c2807ab88b258fd40c692652a2fb5ae016955bc70a535a2357dcf420"]
  - id: decimal-a-sexagesimal
    tier: 2
    prompt: |
      Expresa ${{d}}^\circ$ en grados, minutos y segundos. Respuesta: `grados;minutos;segundos`.
    variants:
      - values: {"d":"52{,}35"}
        answers: ["sha256:5956440c13cce121e4e238ffd9af4769842200f20751ad32aa3d597ec823657b"]
      - values: {"d":"17{,}8125"}
        answers: ["sha256:47e320bbd7b6966f471558d3dea13ba972a1e8b340601605d007ac91a6121910"]
      - values: {"d":"104{,}44"}
        answers: ["sha256:68ff9519fae8fd01ab8de8fdd90b94820de73ea50ac3d4a33cbde6368dc352fa"]
      - values: {"d":"8{,}05"}
        answers: ["sha256:393735f205fe9240d4c784ca1281ac026484620ba1e5cd4df502e4ce2486ab7b"]
      - values: {"d":"33{,}3375"}
        answers: ["sha256:0d60d0cf0daa3e26a7a695bc8bb9d4537dc16ab903467a10d3a3e11b5b8a82ea"]
      - values: {"d":"71{,}9"}
        answers: ["sha256:d6431097bcd365bc37c961111d026597aec34ba86c5b72ec446d02e60cc746f3"]
  - id: sexagesimal-a-decimal
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Expresa ${{a}}$ en grados con decimales.
    variants:
      - values: {"a":"41^\\circ\\, 24'"}
        answers: ["sha256:61a8dc11e9fb3d8c2c12854e2b9ecd8dace6d2d07e1eda926462439172ac628c","sha256:5c36ca16726b61c47c3606592992e66418f64ceaef47513a7d3f236e74bd3e74","sha256:1dcfe0aa1e8f6b2fc399b8ccae2741ce49326da95f1a22bd2129ab8c5d8cccc5"]
      - values: {"a":"12^\\circ\\, 7'\\, 30''"}
        answers: ["sha256:cadc70a02c868f269e07f26676b4328972201ad726c22c962f85a0980f2ff7bf","sha256:7d1058fdbf9fad14f08e58c28f0ef227e23ad5fa6e8c4620e16bd1215e617fed","sha256:cc6e89bcbdfcc1b1f944ecf5006fc374201771e300a48c4db513e70ca9a69c2f"]
      - values: {"a":"88^\\circ\\, 33'\\, 36''"}
        answers: ["sha256:1a87f4271e615db33656d91ff53536b96508daba3ace7ad712fa932b0894d4db","sha256:981d4c55f07c85c20e6f7df1c8fa20c0a5940f15ca27e42837b8c1d43af0be6f","sha256:c9ae867a3f80a3082a04e9b7fe5d9af61b7141b0c5ed4c2615743928b78bd730"]
      - values: {"a":"5^\\circ\\, 3'"}
        answers: ["sha256:334b3e33f56ee3d72b2a5c6268eb24582e8b6ffd0c947fc0e3c640a18c7201a7","sha256:451dbff6490bb28d1cef412c6ee6f36317fe20d6831d9a1f6fb366b0e5a2666d","sha256:4e0ca23524c1cd00c212b74e4c288005f8b0eed3b4e2409eaa3317c1f83fb954"]
      - values: {"a":"130^\\circ\\, 15'\\, 54''"}
        answers: ["sha256:bb811e3f2a4d347c42fae45f33a38d6db8666258c65ea3c7fb1e349b05a35b8c","sha256:1ea9ef0fd97e3f658dbe763aee82f6e5f18c195ddf69567f018f036b77ac6cc8","sha256:5c6018d439cce60f017ecd125cd890fda9adb8af5fdb81e13c8afbc503aebe3a"]
      - values: {"a":"60^\\circ\\, 0'\\, 36''"}
        answers: ["sha256:f8f8f7b4a9c31793f6f783ee5ef13b3dbf739157b1aadd192e528d93ff5a9565","sha256:3f08ab6ee5e79fbae6a7a75d18c56c8e21ec838f0949700e2a71905f2bfce38a","sha256:6a91dce3e38f7705e838c0eb752b802810986546442f2fb4d1be04816492b8a0"]
  - id: paralelas-y-secante
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Dos rectas paralelas son cortadas por una secante. Uno de los ocho ángulos que se forman{{tipo}} mide ${{a}}^\circ$. ¿Cuánto mide su ángulo
      {{nombre}}?
    variants:
      - values: {"a":72,"tipo":", interno (está entre las dos paralelas),","nombre":"conjugado interno (el otro ángulo interno del mismo lado de la secante)"}
        answers: ["sha256:6c942241d5eb2b90ec6c50e39088d3636772f208dab7f146ffd73667785a7fc1","sha256:b3d9d2d1fd32036a8e9c64e28bfc61366f1ae00a128a74b82c25e4ef0bbdab3a","sha256:8115a11ac9904004572d2765f7da3b730987bd526fbf546654478f6169291cb6"]
      - values: {"a":118,"tipo":", interno (está entre las dos paralelas),","nombre":"conjugado interno (el otro ángulo interno del mismo lado de la secante)"}
        answers: ["sha256:48ee2892436af89a6f7921f495f3f6d41d496e2c224826f437d90debaad36b27","sha256:e6434422ce5b4de9a33513489a398f1aef182d71880d16c2cca7aeb19ede5bef","sha256:bb1f80ee0d4ee9ac961c6f5afd2cfc2531d2a2d05bf84e8cf947c65463e9861d"]
      - values: {"a":54,"tipo":", externo (está fuera de la franja entre las paralelas),","nombre":"conjugado externo (el otro ángulo externo del mismo lado de la secante)"}
        answers: ["sha256:87a4fbe13ea136c7fd18864ee5a8e2de1e6acbe84c8d8d0aaa5dad880584b165","sha256:41644ac089867e21f755f94b98f223e46f7a84698d369a374f35061f66160c8f","sha256:6e3960b89a2bfee5d375ec705e4794db7d3bb14981969bb6e24af15fced84812"]
      - values: {"a":137,"tipo":"","nombre":"adyacente (comparten un lado y juntos forman un ángulo llano)"}
        answers: ["sha256:f4c2598225adb2281e48e34600cdb83ff7f655772cbf76782becec0806a857fc","sha256:5c79b4d9f863cbef44480aa0762cf4a4f5d47b1d4b3b9f0b1ee26f2ce930c8fd","sha256:eae4e5c4a64adec274068035a598026a432e7e9d51654d7b39e2fdb176289de2"]
      - values: {"a":81,"tipo":", externo (está fuera de la franja entre las paralelas),","nombre":"conjugado externo (el otro ángulo externo del mismo lado de la secante)"}
        answers: ["sha256:7e9da519d0c84b148500ecc343364d161c2f93b34b9369afab880505b91f7a77","sha256:d23e731c15108feae98067f592c8678fdac9b18c3467790f167e405b1df5a2b4","sha256:d9d88fdeb7ee77028379d5cb312453ed7b5421a9202f295bcad321bb1df1d460"]
      - values: {"a":29,"tipo":"","nombre":"adyacente (comparten un lado y juntos forman un ángulo llano)"}
        answers: ["sha256:a7fffd22dcd374163a9c61d06190bd24431fe6f95ee6e99ab81ad9e50df9e3ed","sha256:cdbbd8dabe697546a03ea5ab75865e0318644aff18cc41b5aa1a1c0cebd37c38","sha256:5a30e4253f9c4af746ee39daf854aeea22c7371cd02734d957734fba6597c898"]
  - id: angulos-con-expresiones
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Dos ángulos que miden $({{e1}})^\circ$ y $({{e2}})^\circ$ son {{tipo}}. ¿Cuánto mide el menor de los dos (o cualquiera, si son iguales)?
    variants:
      - values: {"e1":"3x + 10","e2":"2x - 5","tipo":"adyacentes (juntos forman un ángulo llano)"}
        answers: ["sha256:baa4f82f4f6f543ccea66fc5b2c84ee3bd573edea948c5cd0c14513cb68af824","sha256:0110e28feedf5673b8cc7f390182a226dd3cfee05d2f62c489731d9a10a13521","sha256:5d338b4cfb35d2f61dcd6e1343e24836fc3067bf0c3810026a4b812cb99dd9ee"]
      - values: {"e1":"5x - 20","e2":"3x + 30","tipo":"opuestos por el vértice"}
        answers: ["sha256:8ae5ed44fcd53e658d2b2beec26bf88a9f1f27f0187a0060eb7e0e9ed9739141","sha256:3f577d6093684f2976bbbc8651917e2a19e03aa1dc1c832a55c2d31803477420","sha256:881ddfd296ad697f72df7a05b5ecde0513eb4137879e09a7a6e8f39cd826b82a"]
      - values: {"e1":"4x + 15","e2":"1x + 45","tipo":"adyacentes (juntos forman un ángulo llano)"}
        answers: ["sha256:eb4e4b9e6ff5b93620c22914fbb53e4405c7fe8f6f6dd92c9ab853ac33fcfd6f","sha256:81764b608b6db6ddf06482c2e1aafa657820f543b3e2ccb37edd8eae3c3a3233","sha256:7bad4cf5543a6d28bfda22c69da0027c14c05b7874d9c0ac92e90e2070f38938"]
      - values: {"e1":"7x - 6","e2":"4x + 30","tipo":"opuestos por el vértice"}
        answers: ["sha256:585777a6bf6827cf399b94968e1ba8d01c1e14842439014becc22fa6b6b0c64e","sha256:22229091a20584091a31904c16a07f2f6e4eedc16e4a808ddc6596ce3f38f685","sha256:6088f40a10b7a700d45f6cffe9c0399cecdeaa7fd259660fe3246a7285278eed"]
      - values: {"e1":"2x + 30","e2":"6x - 10","tipo":"adyacentes (juntos forman un ángulo llano)"}
        answers: ["sha256:03984eeac96947bea3b234156b9212014ebe2db7590b56454acd8879620091f9","sha256:36b3509ea6dd05d3981d2011a9d7c5c174e0bc5a73f8430745b49d7a1a741db4","sha256:9f3d2ddca4e076cd46d3a09afb0110fc3cf0138ebabe686a70e10af5f1f4f63d"]
      - values: {"e1":"9x + 2","e2":"5x + 34","tipo":"opuestos por el vértice"}
        answers: ["sha256:5e3c901b234da8bf2bdf803a594e8e32d59af7cdd71c24563dcb769a3f94beb0","sha256:0c1d04f13fd5e4c649b65fe8178aa8887d873e505761194c64a97367985a3832","sha256:4f5fad60ba8f623062a4c1c22bd90a6ce2fc8b9aa9ef49a01a406e060ed1d96c"]
  - id: angulo-del-reloj
    tier: 3
    type: numero
    sig: 10
    prompt: |
      ¿Qué ángulo (el menor, en grados) forman las agujas de un reloj a las {{h}}:{{m}}? (La aguja horaria también avanza con los minutos.)
    variants:
      - values: {"h":2,"m":"20"}
        answers: ["sha256:99ce5fec2fa8ca4e078029c576ec864450ff001216139540f386258336f48763","sha256:bebcaebe87f2a54e4ebdb35be4fbc200c87f0195ca2ee91993c4526f712f85f4","sha256:45233fe43d2c8f286b5aa2bf12b1a402b3e0cb9630d836a763af723a08090592"]
      - values: {"h":9,"m":"45"}
        answers: ["sha256:5694929b2dc41b73d98e95d750ddf2fee9a8f2b427254055005f074a611ef659","sha256:f518afb0d133925cd1afe8e7d23acc4e16b134a06098f732fbc457b1dcc219ca","sha256:4187aa585aa75806f25d1cfc6234a982c3d9f7167308f5a0b0d567e531bdb05d"]
      - values: {"h":4,"m":"10"}
        answers: ["sha256:e2bc1eda1d1a29a4302519930d17d6b4164ecaf813922902ef08914a1999347f","sha256:975cbc3680e5e826f3548330ddc4884d9220c6078b241b15f3ad5502fbb15cb1","sha256:8f5462523a7b3fb269a82fa668ff1609792111bdf59e890d39e44b82e786fb25"]
      - values: {"h":7,"m":"30"}
        answers: ["sha256:b38f5643d8a0294a8e913d5c7937fbfe54dcb4c5f43789234bb36b1c517bfcbc","sha256:bcf57946cbcd20576604ee1fa143cf79a3105fdecafcb15effc6c80c91f2c8bc","sha256:aab78df1f2a58785db2b0444fe9d5483cc38555d8780b9f162a017eeb5357023"]
      - values: {"h":11,"m":"05"}
        answers: ["sha256:43fe29e8e0ad72807fc51fcef829be6336e8c13759c6d2be7f35fe2d9cc9dca2","sha256:0bacb895889f5ac9fa466a81429bdadfb09ea109d1e0db6b3066f61206d19927","sha256:edd682ac45e5a36e09f5bb3d39b7987eed41203c3a81be455f2ace8ab5cde3b0"]
      - values: {"h":6,"m":"48"}
        answers: ["sha256:342eca4e73aa2a6b4bae3d23a14c549f7710c6820d402455d1ae00caabf4eb62","sha256:faebef850f1ec12e6c8d71d412bd3569cc3984e4a9cacbb036375b8a37153b29","sha256:47aed87a21b84eba2a0ec82b4bacdb228416911063607354b5a31362dbe5db7a"]
  - id: punto-medio-mediatriz
    tier: 1
    prompt: |
      La mediatriz del segmento de extremos $A{{A}}$ y $B{{B}}$ pasa por su punto medio. ¿Cuál es ese punto? Respuesta: `x;y`.
    variants:
      - values: {"A":"(-3, 4)","B":"(5, 0)"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
      - values: {"A":"(1, -7)","B":"(9, 3)"}
        answers: ["sha256:383a9d6612e1f9863be85fa75da84636cdf1d55b5295c826354d32486213f0b3"]
      - values: {"A":"(0, 0)","B":"(-6, 8)"}
        answers: ["sha256:682acd6a9ce15dbd8c553f8124cb22bf0afa570b2f9f7b716c37452b819298ab"]
      - values: {"A":"(-5, -2)","B":"(3, -6)"}
        answers: ["sha256:93114b41863ff1e986406f8be307b11923c3734f377f78af11fa7b06ed0d5156"]
      - values: {"A":"(7, 1)","B":"(-1, 9)"}
        answers: ["sha256:dc43bb75e55bd1a41d407b63447508e12314ff83f23995acb7e87412cad54f0d"]
      - values: {"A":"(2{,}5, 3)","B":"(-4{,}5, -1)"}
        answers: ["sha256:0fb6cfb21a559369b7285fab68096966b9835b190c99b3918a5b808aca6f04b7"]
  - id: bisectrices-consecutivos
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Dos ángulos consecutivos (comparten un lado) miden ${{a}}^\circ$ y ${{b}}^\circ$. ¿Qué ángulo forman sus bisectrices?
    variants:
      - values: {"a":40,"b":70}
        answers: ["sha256:8be65c33adde53f6c9c8bb37ae2abbe9b5e78268c734728d016c7cc414c1a99b","sha256:5ddfbea88619298b8736c7bdab4985b6f8ff1c964e3622bd91014e008adbd1d2","sha256:f1093e8ccd502ff74dfebabb90600a691180fd35151afb12579287fe062bd02a"]
      - values: {"a":35,"b":145}
        answers: ["sha256:572d17843201e1de864f52c234497e7ee230abfa9b0b8c8dfab2920a87c444b2","sha256:61f6c2d829846b864ba0e160ca8987e64cc0ee33b9df541d7c9a68e9ab8e1bc2","sha256:f036121379b3365a0b8fbcbe77ec3b0749e29422c652dcd9a2d5576de5a1fa35"]
      - values: {"a":100,"b":80}
        answers: ["sha256:f885e4c9eb78b6f595fe60f025f508d02a37c284de86d92ba75301bb514d312d","sha256:49c0f11a88ef88e42d61471cebf43c4db8bec7c025e4adcefb3df5798c6e0ca7","sha256:a88f04170f7943d3ac90dff679c30557908c7be5533c030c0923915d4219ab94"]
      - values: {"a":24,"b":58}
        answers: ["sha256:4defa594e0c1d88e35f1be661a9bba93bee4ace21c35f907950e86e426b6b4fc","sha256:8c2708ca736337d11cf983b15de428ddde30dd59fe7677c9134dbb1a4055c08d","sha256:0157e519217eada07f6d72b5a8e92aff303c185926660ea278a80522e7dd265a"]
      - values: {"a":110,"b":30}
        answers: ["sha256:ab83ed895b5a02a1b2da937b8ba06636682e147d2a24bdbe3f00b01397ef9e2d","sha256:de92558a46dd633c98dc23c6436af4eb4d7c9e84887ef3927761ba7693de0c09","sha256:2b490c3b4799bd1b1caa28d01f644f003f3a2f4b7e8db5f07fb0de7c57841e58"]
      - values: {"a":15,"b":125}
        answers: ["sha256:7030a723de9ee338e8e552ceeb6c7d232e9ebbd27ca4234cadc634f9f8254209","sha256:b8ea53d585524bafc782334273e2d46c736236ac1addccaf1934f9d7ad370316","sha256:9b8adbbe09368bee5223e5e83f9874dc0473b7a865ed975f349dd45b7e868e24"]
  - id: opuestos-y-mediatriz
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Demuestra que dos ángulos opuestos por el vértice son iguales. (b) Demuestra que las bisectrices de dos ángulos
      adyacentes (que juntos forman un llano) son perpendiculares. (c) Explica por qué cualquier punto de la mediatriz de un segmento $AB$
      está a la misma distancia de $A$ que de $B$.
    sealed: "gz64:H4sIAAAAAAACCn1TzW4TMRB+lU8rH5KwjUpPEJRDop4QkSI4siDN2tNgyWsHj7dSifIwHDn0BbjmxZD3J035u1jyzHi+nxkfCgmuTTb4YlHMZhOazmb4YGGCILJOJBCGDjGRL6HJEE7f/a51AXchNoTWwznyATp4SIt71taHBVRVkdt/IbxAVdWcCEu8fHX9uaq0jVrhIVd08Vywo6b5raKECd7wudHwpKtUkOArH/YtSwqCfYhgh/vTj5is5jnesyTyJpRPPK4uYK7VBcHlmFDzyld+NpvUgwkuyKhWQOaBNPvEgsYa9s+JPRHvgPpECWkFtRXWKVrN0nvmO6/YwZHJvjWnn/4Jp5d8F0kPbW4G5Tl0+BvO8XBzVGXlv7YMaXP/P6tzDZZ4fbZ31Ko7rUxQG5U57VufAho2NmTYrcoT7oOG4ahLUYr22xzvgiBFe6autptVR3a7WSskyz7btFlhic1alWfJartRo+6HHB1Xin3lM4+8efnWTcAEeZPnDbtrybFgoqNNHG3oul0Nj6/yZVqC5PSIbIXaZuDtWs0xuQ21y/vQKaR9PkN8pqaEWiloYkioI0Ot1XxalEVs62h1sfh4KEbYYlHccpNXLxImNO3GOTDtP4N0BHRo9hQT+2zhwHJelEXnphSLm2P5r6b1tJ+kyRrzwiUyLP97/LaVZO+sJkx0z+hyMqN1/Td1BLENp3h6pOc9Px1/AdRY6AgRBAAA"
  - id: r-tipo-angulo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se llama un ángulo de $124^\circ$?
    options:
      - |
        Agudo
      - |
        Recto
      - |
        Obtuso
      - |
        Llano
    answers: ["sha256:f4bbfb9f27cf19b193da29c70148e500f4b1199fbb408abc93410dacee262fb0"]
  - id: r-minutos-grado
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos segundos tiene un grado sexagesimal?
    answers: ["sha256:ad1e74f1384b2e3db5c7daef95517ebda92d68d94860e97587cc7b0d24ffa404","sha256:4de1277491b0f6c090c514a16151505b2880bea0eef383a1a8ba031f8eb3be6e","sha256:6895d311d5ab9f4610d50a09d70e22d21471b14c4c4a4f6edc86ae88ce399329"]
  - id: r-alternos
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si dos rectas paralelas se cortan con una secante, ¿cómo son los ángulos alternos internos?
    options:
      - |
        Iguales
      - |
        Suplementarios
      - |
        Complementarios
      - |
        No hay relación
    answers: ["sha256:1f5024d41002177def6fb552427372f6b1dbd71802319d9facf4c4d90d549c85"]
  - id: r-mediatriz
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es la mediatriz de un segmento?
    options:
      - |
        La recta que divide un ángulo en dos iguales
      - |
        Cualquier perpendicular al segmento
      - |
        La recta que une los extremos
      - |
        La perpendicular al segmento por su punto medio
    answers: ["sha256:e5b193191f2369638c54b5178c883165388be05b440abfea3189796022b83e2f"]
  - id: r-bisectriz
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué propiedad tienen los puntos de la bisectriz de un ángulo?
    options:
      - |
        Equidistan de los extremos del ángulo
      - |
        Equidistan de los dos lados del ángulo
      - |
        Están en el vértice
      - |
        Están a $1$ cm del vértice
    answers: ["sha256:637a6bba15bd5bbb94594cf3fa897e7f253734aada51386c790943c7a99738f0"]
  - id: r-suplementario-complementario
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto más mide siempre el suplementario de un ángulo agudo que su complementario (en grados)?
    answers: ["sha256:c1095ebbc64f3323208d4fa7dc588a0fdb9f557d03e2575dc9bd6db1df4322a1","sha256:b09796f226094d470451464ce6c5cef8516dae0efe6f73610dc88007353ef089","sha256:33a54dc4d4a815d83ee86133a913e74a2123203f612179e0346244b9156a1cf0"]
  - id: r-sexagesimal-error
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuánto es la mitad de $25^\circ$?
    options:
      - |
        $12{,}5^\circ$
      - |
        $12{,}05^\circ$
      - |
        $12^\circ\, 30'$
      - |
        $12^\circ\, 50'$
    answers: ["sha256:146bab0d57771a6d2f1fbf5108fbcc52ce35043a6527839f1831e58ee806447b"]
---

# Elementos del plano: puntos, rectas, ángulos y su medida sexagesimal, paralelas y secantes, mediatriz y bisectriz

La geometría empezó midiendo tierras («geo-metría») y hoy está en los planos de una casa, en la navegación, en los videojuegos y en
la robótica. Sus piezas más básicas son puntos, rectas y ángulos. Este nodo fija el vocabulario, enseña a medir y operar ángulos en
el sistema sexagesimal (el de los grados, minutos y segundos), explica las relaciones entre los ángulos que forman dos rectas que se
cortan o dos paralelas con una secante, y presenta dos rectas especiales que aparecerán en todos los temas de geometría: la
mediatriz y la bisectriz.

## Objetivos

Al terminar sabrás:

1. Distinguir punto, recta, semirrecta y segmento, y rectas paralelas, secantes y perpendiculares.
2. Clasificar ángulos y reconocer los complementarios, suplementarios, adyacentes y opuestos por el vértice.
3. Sumar, restar, multiplicar y dividir ángulos en grados, minutos y segundos, y pasar de forma decimal a sexagesimal.
4. Calcular los ángulos que forman dos paralelas con una secante.
5. Construir y usar la mediatriz de un segmento y la bisectriz de un ángulo.

## Qué debes dominar antes

Las estrategias de [[mat-resolucion-problemas]] (hacer un dibujo, organizar la información) y operar con números naturales. Conviene
tener a mano regla, compás y transportador, o GeoGebra.

> [!question] Test de entrada
> 1. ¿Cuántos minutos tiene una hora?
> 2. ¿Cuánto es $180 - 64$?
> 3. ¿Cuánto es la mitad de $75$?
>
> Respuestas: $60$; $116$; $37{,}5$.

## 1. Para qué sirve

- **Construcción y diseño**: comprobar que una pared es perpendicular al suelo, cortar una moldura a $45^\circ$, trazar paralelas.
- **Orientación y navegación**: rumbos, latitud y longitud se dan en grados, minutos y segundos ([[mat-trigonometria]]).
- **Física e ingeniería**: ángulos de incidencia y reflexión, inclinación de rampas, articulaciones de un brazo robótico
  ([[rob-cinematica]]).
- **Base de toda la geometría**: triángulos, polígonos y semejanza se apoyan en estas relaciones.

## 2. Puntos, rectas y posiciones

> [!practico]
> Un punto es una posición sin tamaño (la marca de un lápiz muy fino). Una recta es una línea recta que sigue sin fin en los dos
> sentidos. Si la cortas por un punto, cada trozo es una semirrecta (sigue sin fin hacia un lado); si la cortas por dos puntos, el
> trozo de en medio es un segmento, que sí se puede medir.

- **Recta**: se nombra con una letra minúscula ($r$) o con dos de sus puntos ($AB$). Por dos puntos pasa una única recta.
- **Semirrecta**: parte de una recta a partir de un punto, su origen. **Segmento** $AB$: la parte entre $A$ y $B$; su longitud es la
  distancia entre $A$ y $B$.
- **Posiciones de dos rectas en el plano**: **secantes** (se cortan en un punto), **paralelas** (no se cortan nunca) o **coincidentes**.
  Dos secantes que forman cuatro ángulos iguales son **perpendiculares** ($r \perp s$).

## 3. Ángulos y su clasificación

> [!practico]
> Un ángulo mide cuánto «gira» una semirrecta para llegar a otra. Una vuelta completa son $360^\circ$; media vuelta, $180^\circ$ (ángulo
> llano: las dos semirrectas forman una recta); un cuarto de vuelta, $90^\circ$ (ángulo recto: la esquina de un folio).

Un **ángulo** es la región del plano entre dos semirrectas (los **lados**) con el mismo origen (el **vértice**). Según su medida:

| ángulo | medida |
| --- | --- |
| nulo | $0^\circ$ |
| agudo | entre $0^\circ$ y $90^\circ$ |
| recto | $90^\circ$ |
| obtuso | entre $90^\circ$ y $180^\circ$ |
| llano | $180^\circ$ |
| cóncavo (o entrante) | entre $180^\circ$ y $360^\circ$ |
| completo | $360^\circ$ |

**Relaciones entre dos ángulos:**

- **Complementarios**: suman $90^\circ$. **Suplementarios**: suman $180^\circ$.
- **Consecutivos**: comparten el vértice y un lado. **Adyacentes**: consecutivos y suplementarios (juntos forman un llano).
- **Opuestos por el vértice**: los que quedan enfrentados cuando dos rectas se cortan; **son iguales**.

## 4. El sistema sexagesimal

> [!practico]
> Los ángulos se miden como el tiempo: igual que una hora tiene $60$ minutos y un minuto $60$ segundos, un grado tiene $60$ minutos ($60'$)
> y un minuto $60$ segundos ($60''$). Este sistema viene de los babilonios, que contaban en base $60$.

$1^\circ = 60'$, $1' = 60''$, así que $1^\circ = 3\,600''$. Para operar se trabaja por columnas y se «lleva» o se «pide prestado» de $60$ en $60$:

- **Suma**: $25^\circ\, 40' + 18^\circ\, 35' = 43^\circ\, 75' = 44^\circ\, 15'$.
- **Resta**: $90^\circ - 35^\circ\, 20' = 89^\circ\, 60' - 35^\circ\, 20' = 54^\circ\, 40'$ (el **complementario** de $35^\circ\, 20'$). El suplementario de
  $110^\circ\, 45'\, 30''$ es $179^\circ\, 59'\, 60'' - 110^\circ\, 45'\, 30'' = 69^\circ\, 14'\, 30''$.
- **Producto por un número**: $2 \times 47^\circ\, 38' = 94^\circ\, 76' = 95^\circ\, 16'$.
- **División**: se divide los grados; el resto se pasa a minutos ($\times 60$) y se suma a los minutos; y así con los segundos.

**De decimal a sexagesimal**: la parte decimal de los grados se multiplica por $60$ para obtener minutos, y la de los minutos por $60$ para
los segundos: $23{,}45^\circ = 23^\circ + 0{,}45 \cdot 60' = 23^\circ\, 27'$. **Al revés**, se divide: $12^\circ\, 30' = 12 + \frac{30}{60} = 12{,}5^\circ$ (¡no $12{,}30^\circ$!).

## 5. Dos paralelas cortadas por una secante

> [!practico]
> Cuando una recta corta a dos paralelas, en cada cruce aparecen cuatro ángulos, y los dos cruces son «copias» uno del otro: la
> paralela simplemente traslada el dibujo. Por eso los ocho ángulos solo tienen dos medidas: un ángulo $\alpha$ y su suplementario.

Con las paralelas $r \parallel s$ y una secante $t$:

- **Correspondientes** (misma posición en cada cruce): iguales.
- **Alternos internos** (entre las paralelas, a distinto lado de la secante) y **alternos externos** (fuera de ellas, a distinto lado):
  iguales.
- **Conjugados** (del mismo lado de la secante, ambos internos o ambos externos): suplementarios, suman $180^\circ$.

*Ejemplo.* Si uno de los ángulos mide $\alpha = 65^\circ$, los otros siete miden $65^\circ$ o $115^\circ$.

> [!formal] Con rigor: de dónde salen estas igualdades
> Que los opuestos por el vértice sean iguales se demuestra con los llanos: si $\alpha + \beta = 180^\circ$ y $\beta + \gamma = 180^\circ$, entonces $\alpha = \gamma$
> (Euclides, I.15). La igualdad de los correspondientes es equivalente al **postulado de las paralelas** de Euclides (por un punto exterior
> a una recta pasa una única paralela): no se puede demostrar a partir de las demás reglas de partida de Euclides, y negarlo da lugar a geometrías no
> euclídeas, igual de coherentes ([[mat-geometria-euclidea]]). Con ella se demuestra que los ángulos de un triángulo suman $180^\circ$
> (el tema `mat-triangulos-pitagoras`). $\blacksquare$

## 6. Mediatriz y bisectriz

> [!practico]
> Si doblas un papel de forma que un punto $A$ caiga sobre otro $B$, el pliegue es la mediatriz del segmento $AB$: cualquier punto del
> pliegue está igual de lejos de $A$ que de $B$. Si doblas de forma que un lado de un ángulo caiga sobre el otro, el pliegue es la
> bisectriz: parte el ángulo en dos iguales.

- **Mediatriz** de un segmento $AB$: la recta perpendicular al segmento por su **punto medio**. Sus puntos son exactamente los que
  **equidistan** de $A$ y de $B$. Con compás: dos arcos de igual radio (mayor que la mitad de $AB$) centrados en $A$ y $B$; la recta que une
  sus cortes es la mediatriz. En coordenadas, el punto medio de $A(2, 1)$ y $B(6, 5)$ es $\left(\frac{2 + 6}{2}, \frac{1 + 5}{2}\right) = (4, 3)$.
- **Bisectriz** de un ángulo: la semirrecta que lo divide en dos ángulos iguales. Sus puntos **equidistan de los dos lados**. Con
  compás: un arco desde el vértice corta los dos lados; desde esos cortes, dos arcos iguales se cortan en un punto de la bisectriz.

Estas propiedades de «equidistar» son las que hacen que las mediatrices de un triángulo se corten en el centro de la circunferencia
que pasa por sus vértices y las bisectrices en el centro de la que toca sus lados (el tema `mat-triangulos-pitagoras`).

## 7. Errores típicos

- Escribir $12^\circ\, 30'$ como $12{,}30^\circ$ (son $12{,}5^\circ$).
- Al restar, pedir prestado $100$ en vez de $60$.
- Confundir complementario ($90^\circ$) con suplementario ($180^\circ$).
- Suponer que dos ángulos «parecidos» en un dibujo son iguales sin justificarlo; o aplicar las igualdades de las paralelas a rectas
  que no lo son.
- Confundir mediatriz (de un segmento) con bisectriz (de un ángulo).

## 8. Resumen

- Recta, semirrecta, segmento; rectas secantes, paralelas, perpendiculares.
- Ángulos agudo, recto, obtuso, llano, cóncavo; complementarios ($90^\circ$), suplementarios ($180^\circ$), adyacentes, opuestos por el vértice (iguales).
- Sexagesimal: $1^\circ = 60'$, $1' = 60''$; operar por columnas llevando de $60$ en $60$.
- Paralelas y secante: correspondientes y alternos iguales, conjugados suplementarios.
- Mediatriz (equidista de los extremos) y bisectriz (equidista de los lados).

## Repaso: lo que debe quedarte dentro de un mes

1. Cuánto suman los complementarios y los suplementarios.
2. Por qué los opuestos por el vértice son iguales.
3. Cómo se pasa de grados decimales a grados y minutos.
4. Las relaciones entre los ángulos de dos paralelas con una secante.
5. Qué propiedad tienen los puntos de la mediatriz y de la bisectriz.

## Siguiente

el tema `mat-triangulos-pitagoras` (triángulos, sus rectas notables y la relación de Pitágoras).
