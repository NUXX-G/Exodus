---
id: mat-funciones-exponencial-logaritmica
title: "Funciones exponenciales y logarítmicas: gráficas, el número e, composición e inversa, y modelos de crecimiento y decrecimiento"
area: matematicas
trunk_level: 4
prerequisites: [mat-exponenciales-logaritmos, mat-funciones-lineales-cuadraticas]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 6: «Funciones», secciones 1.3 (funciones exponenciales y logarítmicas), 2.1-2.3 (operaciones, composición y función inversa) y 3 (dominio, recorrido, simetrías, cortes, signo). Apuntes Marea Verde, autor José Gallegos Fernández. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_06_Funciones.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 12: «Funciones exponenciales, logarítmicas y trigonométricas», secciones 1 y 2. Apuntes Marea Verde, autor Miguel Ángel Paz. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/12_Exponencial_4B.pdf"
hints:
  - "Concepto: y = aˣ (a > 0, a ≠ 1) es siempre positiva, pasa por (0, 1) y tiene el eje X como asíntota; crece si a > 1 y decrece si 0 < a < 1. y = logₐ x es su inversa: su gráfica es la simétrica respecto de y = x, pasa por (1, 0) y solo existe para x > 0."
  - "Herramienta: para un modelo P(t) = P₀·aᵗ, usa los datos para hallar P₀ y a (dividiendo dos datos se elimina P₀); para despejar el tiempo, toma logaritmos. Para la inversa, despeja x en y = f(x) e intercambia las letras."
  - "Documentación: Marea Verde Matemáticas I cap. 6 (secciones 1.3 y 2); 4.º ESO B cap. 12."
exercises:
  - id: evaluar-un-modelo-exponencial
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Si $f(t) = {{C}} \cdot {{a}}^{t}$, calcula $f({{t}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"C":200,"a":"1{,}5","t":"4"}
        answers: ["sha256:f91ab993a8a9ad8f9e33bac3eae88c1565d615139a68b43d36fabb0e42e8f3dc","sha256:3eee56531bc52d592740969ad4193d18fbb59138a2a95a8f55fffc3b212e13f4","sha256:faf34487c01e2683beb884363926b844b6f2ac601b069ee36592dd2c2d778433"]
      - values: {"C":50,"a":"3","t":"2{,}5"}
        answers: ["sha256:03bdb69cc9e0e56355281cc0ca13a388bcbff3838b759532f7db5ca00e2132f7","sha256:4e2f789eba866ac5fb0521552758560592a9a223ce8f977c550e3ec5300d8d08","sha256:254f19e766336189aa7d075158e62d37ed391efed92976ce722414686bb19fa2"]
      - values: {"C":1000,"a":"0{,}8","t":"6"}
        answers: ["sha256:5d39dcee350c3efecd4598407c089775f3c8a2f83ce26714c80434a9d24a540d","sha256:6a5650d3a74d8924694a7222480df7376a5eceb6a6467610d33195da317fed46","sha256:d58d31b045cc6a4ba244397d1f4465acd0aab9b2a113601ae0628e3ad6ef0b04"]
      - values: {"C":12,"a":"2","t":"(-3)"}
        answers: ["sha256:2a860fd892f920c88ae90216ffb13787a716e889eacc6fb14c2fa3fd0506d6b9","sha256:89f32792306ded526594a595f4eb17ac8766b074c8f2ca7e5008e9ff2ae08e86","sha256:5836db2f3e87c345cd938bfe279855484b877b59482070ce08fafcd7cec1a173"]
      - values: {"C":5000,"a":"1{,}03","t":"10"}
        answers: ["sha256:5357eb5b365a78622b9afd7de8b58082527556524c418c32afa7601dee2c3158","sha256:f79884a67d88904cf55a70658e2b8b860592d990dfd254dba6c05720df1facea","sha256:c13c02beb80379dc80342895700eb44a423f2d7bc27aaf3f6d34dce50390ae80"]
      - values: {"C":80,"a":"0{,}5","t":"3{,}5"}
        answers: ["sha256:8d33f10493e09a3040a9e6543c3dabb942523a504d5c93811c13196e2502efc1","sha256:418aa59986773b6910079e1d80c9042363ff6f830d2c1bc9fde2582e6d186c64","sha256:79ac942f4e31b0fba4a37a7d5004e7230e8a559c408a665e6504bb328632128f"]
  - id: dominio-del-logaritmo
    tier: 1
    type: numero
    sig: 10
    prompt: |
      El dominio de $f(x) = \log({{arg}})$ es de la forma ${{lado}}$. ¿Cuánto vale $k$?
    variants:
      - values: {"arg":"2x - 6","lado":"x > k"}
        answers: ["sha256:83a2a4ca4345e73d32fd8a65d915a9b63a9e5ae5807e1e07a1140194b2ef7008","sha256:d6fa8ba840d64abefe5f7f2359895c01f026659abe0c53ce6d73a5346d3a54a5","sha256:8b09f4cbc539eab095b070d485512fbead143db513c41365a3fecf2d4118c203"]
      - values: {"arg":"x + 4","lado":"x > k"}
        answers: ["sha256:d4b802d5d2fada0a85ff4673d8130ead466e37c613ae61038581c8d5a3b13919","sha256:cb3802c67ffa47487a706bcfe53c258b4e302a5e6d828d393605409755db8210","sha256:7ef5138f2618e79c177fba1f8ddfeed8859baa4a165bbd0fea63970bec6ac13c"]
      - values: {"arg":"-3x + 9","lado":"x < k"}
        answers: ["sha256:b398e93598977eaf5e02dcb726e0af7c376d47bd1b81348764a3eb3c33a7354a","sha256:2be57bfb48c8d6d0baad45d4e6d2235d6e765acac51a90ba092e825af4c68605","sha256:320977f68ce162c01403f7da643e54387b8767d7157cf61c84ffa17e58a6d432"]
      - values: {"arg":"5x - 1","lado":"x > k"}
        answers: ["sha256:7f2359edc5db6223b9ffa7b591f6200089061d2e01ad6424d9b880f216184aac","sha256:d2131d5005cea2999cf03bab0ae2a0e5112aaaf99237e6d68121da6ce004d5ec","sha256:1099fdf0bccadbbcb186ef1f078e5a92b3a582c259c8d79f0a69682c09de3367"]
      - values: {"arg":"-x - 2","lado":"x < k"}
        answers: ["sha256:03c6c827f6d39ca8821323a5bb0bbc086ced5eb37cc6d94db0232bb983be30a4","sha256:356c0e5335a215e094b67e279e1f7fe61302d60ef6066d786807cc5b07f87429","sha256:1b3dd058c03a95c120ae4feb489c48bba4d4277c6204becca4058b1efada6b90"]
      - values: {"arg":"4x + 10","lado":"x > k"}
        answers: ["sha256:2246289bdc925bfefec4d39f7f0972974320d8229f8049eaf68e1abf52ccb9ef","sha256:3d208b01142a25fdfa551ec484bbeec6bbc0747ee7c2a804ff725d83969d636c","sha256:9b6ee8890a3437f9f6a58c6d9e55f0b687c5940828ef0f338b34a50dcf2d94aa"]
  - id: asintota-y-corte
    tier: 2
    prompt: |
      Para $f(x) = {{c}}\cdot{{a}}^{x} {{k}}$, halla la asíntota horizontal $y = A$ y el corte con el eje $Y$, $(0, B)$. Respuesta: `A;B`.
    variants:
      - values: {"c":"3","a":"2","k":"- 5"}
        answers: ["sha256:c2ba0393c219e75700d97abd53f4a60f4297fe50e045a8756f80e302fcaa0fcf"]
      - values: {"c":"","a":"0{,}5","k":"+ 4"}
        answers: ["sha256:37aa7858d15e526023c427fea4c89851844c80d860819a6f2f7b889d1539d0a2"]
      - values: {"c":"-2","a":"3","k":"+ 1"}
        answers: ["sha256:984edcdc9ca111eafbad4504594b28050012884d2dd3a67690f33c8d67ce1c99"]
      - values: {"c":"5","a":"1{,}2","k":"- 5"}
        answers: ["sha256:a431adae86c56d744e38afd0edd51511971d534e105c4001aa839032cfcc6ce7"]
      - values: {"c":"0{,}5","a":"10","k":"+ 2"}
        answers: ["sha256:366213e80d266c155f90d065bf6c44a6e4479370f8ee0b985f5c2eafff0cde2b"]
      - values: {"c":"-","a":"0{,}25","k":"- 3"}
        answers: ["sha256:58d1f49b0d4e4a104f05e882ac015efcb35a9b353f110c41689c897b3743ed84"]
  - id: modelo-con-dos-datos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una población sigue un modelo exponencial $P(t) = P_0\, a^t$. Si $P(0) = {{P0}}$ y $P({{t1}}) = {{P1}}$, ¿cuánto vale $P({{t2}})$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"P0":500,"P1":2000,"t1":4,"t2":6}
        answers: ["sha256:1cefcbc29891715dfc2246457774c560513efd1efc3eb359c38bb4cc9f1eaf28","sha256:cc4c0de8e2ee207c8a768f8ef31a2329c63d9bf1cd8ce1e1d8dbd081ffbab95a","sha256:72f721636358184d682822c0ec5918bce824fe2fa119a3210fdd075ac3095998"]
      - values: {"P0":1200,"P1":600,"t1":3,"t2":9}
        answers: ["sha256:aa017305e4f5142bcbf79edfe16f4b65f60ba36d1e1411df9eac4fa15b1f2cba","sha256:8bf99cd556f74e7643c6120da90ec33b5c8fd3cf7f399547b50a2c9d0c7d92e4","sha256:08908c65040f3d5ad83203ac291fb9c7fd4330293bda17c1fc6996d7ed3ae81b"]
      - values: {"P0":80,"P1":180,"t1":2,"t2":5}
        answers: ["sha256:2c2b2fcebb1f485d42e89c76465fd6455107ff144c0fdfe4312e46ad64300e39","sha256:d7e4e6fcda31bf116fe24eae5cae58dd61720673b8d5196f37ecba351d26d5ab","sha256:3244cc684bb353cad96b85750043d510d9bb91c921109875072f0567796f65d6"]
      - values: {"P0":10000,"P1":8100,"t1":2,"t2":7}
        answers: ["sha256:4cf37e138f7ada1872418c6f3057a89f0ac942401be80037b18b2ab4ec98f6a4","sha256:7c31b973af032e611cd93563e60bb060449ccda2a7351b46407650a17f114b39","sha256:906ab087974e5d858537cf660829207e14f1e62aa667e41780aa963774e52783"]
      - values: {"P0":30,"P1":270,"t1":4,"t2":3}
        answers: ["sha256:07cd3b94f0a3c109963235fa5b2af2715d8e2e9ddd01a3c2312f879d94985183","sha256:af587d4be9acd0c2963cd1d6cafed279969bc82596d16a370acccdfd064a1c89","sha256:a0dbb145487031598b45d47c646cccb21dc83bce86a19ab5207e40a013136398"]
      - values: {"P0":2000,"P1":2420,"t1":2,"t2":10}
        answers: ["sha256:924843575d695df90a741495857187ac5f171fff915c13413d9d9efbef6c356b","sha256:f8722b6fc1d13985a49e3785e364d722b2a801125a798d4dad9228d43d7ad7ca","sha256:7b48da09b8da4ed40abee828255308fe2ef03255907afc25fd43be7ff82ad2f2"]
  - id: tiempo-de-duplicacion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una cantidad crece según $P(t) = P_0\, e^{{{k}}\,t}$. ¿Cuánto tarda en duplicarse? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"k":"0{,}05"}
        answers: ["sha256:7d3f51d26283d2cabc2d6d53529c826eff1f49cd21f32588f5b4538804b40bc2","sha256:6ee0b94d0a316774bf6fb1ce6b362a06727171f928b4a9e3f091eb73c7eba8b9","sha256:eb5afa1c5d29fd6993a5668158fa2c55ce2cbc895fd697706aca48aca0166daa"]
      - values: {"k":"0{,}12"}
        answers: ["sha256:687c892052d49d4f3071440d2080daf8b3b4d68f9e1bf8f5d3ea0dac31840b7f","sha256:0e80684b61648e3d6f929e54ac831f254922e78f24c5bbe899f9a4f8f58ae5d4","sha256:39f5a6d27dc9cc44d43f55850fcddeaf4b4d4f1feb69ae2e405513e967578e0c"]
      - values: {"k":"0{,}023"}
        answers: ["sha256:bd0e545eae9d6996e82901fa0e02720ca1cd6e9d7d6800dc45874da1abcbd978","sha256:1a9c2d1f8972bb64604e05788feebb955aff408212bdb2b1bfa14c78d23e408f","sha256:5e5c112aa15b39c51309784af613a34bad04731fada7c820799ae7ea137da7ca"]
      - values: {"k":"0{,}3"}
        answers: ["sha256:2747bd5fbdf8c40d096c3ff095661f2c80d6cb0fd9094b4625cbba08c1611594","sha256:d9ca05d2c5f79bbc35f91aef76267a9fc1918d5a6f2c3c8894da77cf87d10739","sha256:acecb7672be8ac7343ef625e07861efd73fe3d8dd90540c8f9502cf45c751b97"]
      - values: {"k":"0{,}07"}
        answers: ["sha256:e807c7efb9c8639a12f6f475518c4fc931324cee9505bccc0cd884cff9cfdcb2","sha256:7e4bf46d4422137b77b368f0d4132190edbb819ba724cf236feb2cc100a2c238","sha256:1ed6b71cedf61517c8ba09010eab484c04332f42b7f74e246ffeb04a15318301"]
      - values: {"k":"0{,}015"}
        answers: ["sha256:4ac235cc8aad5d2b63f265f06bc32047e94046525d1cb944272b4f32bc23b0e7","sha256:d8d6fab98205202a832e55a4fb68e910e37676ee4a5abf1a4f0d499159f873b3","sha256:589b6eb00972912ca351d37d2e2cbc639772b43a091013c570de4e2120bbb361"]
  - id: inversa-afin
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Si $f(x) = {{f}}$, calcula $f^{-1}({{c}})$.
    variants:
      - values: {"f":"4x + 7","c":"31"}
        answers: ["sha256:2ac96ac498214a6840f99de48a2c9e2da258b0ed57cef7e571837f02978f211d","sha256:615dd70e16cabd0bf8b1a674c6e5bc84106e76a15a35c82b1950d81a2d7dee91","sha256:54bf573c508b2fe09aa25f2e0d6df65f2ae10c0fa5e8025c35fe41781ffc8201"]
      - values: {"f":"-2x + 5","c":"-9"}
        answers: ["sha256:8f883788bf9c3c1f9e22f1fbe63874e0f7827ec2afce349e6a3c23d5dafd482f","sha256:cc950058c8bdf5313a3d13b52f61292fa48eadd3fea8f32251378e0e4e9f1a10","sha256:a9c574f9b3f4af9cc18f6d0620319483cce5fe3eb07292d25b9daa9e0629b973"]
      - values: {"f":"0{,}5x - 3","c":"4"}
        answers: ["sha256:f25e54fd4dcd2d272432ebdf611987d2e36912e2a92564ddad136e82ce371132","sha256:bff74a80b9c6df3c7abb94306a4d9c26ec4cb54c57825ae1a711ed3c2a52d214","sha256:5d84e6f9ea27fc50a4d02a418658be524c132d5259b14c2a8827dbde2ca2a9d0"]
      - values: {"f":"6x","c":"21"}
        answers: ["sha256:e502ebb8d087ac84d26e4f1659dcf67500c9b9005c5a4b6686c052918822e366","sha256:a01c45f24b1e3fd3d8cd52a436a44750e9943cc4b16ed1a11acaa121d3913bc2","sha256:b1d30560de992e4d210a8fdadce62382812cb6ba999be82a39f9ff42544c844f"]
      - values: {"f":"-5x + 12","c":"-8"}
        answers: ["sha256:adfb87c96fa3e9133f1e688993583392cfa6bc47cfa5297be8c33eef481311d8","sha256:60eeca05e43710137c1da61f9353573eccf19471f8100386007afad4f263f49f","sha256:1242f0daebfb407ffcb55db5414fdc3130172338b3951c68badb75cf3c5c513d"]
      - values: {"f":"1{,}5x + 2","c":"11"}
        answers: ["sha256:e60691d2a4a3637a25554cdb4d2b5a9ef1af311ef9f20b25696a0ec4046c9372","sha256:98b1921822ae3105e4f63151e953adb32645449166dace6b7d10943843563334","sha256:2cce28f6f566fbc4f17d8bdbf92e3baba02ad1dadc83a4a625c091224bfda989"]
  - id: inversa-exponencial
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $f(x) = {{a}}^{{{h}}}{{k}}$, calcula $f^{-1}({{c}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"a":2,"h":"x - 1","k":" + 3","c":"35"}
        answers: ["sha256:cc72f1492dd4a3c3e18af3a6c8d5ac8ce7ac5bd452920fe7e7e0e9c51b7f5e2a","sha256:5ccce7ede9f352fc8910199ab2ade6dc394a4bf72376c66a78066e479c62a325","sha256:95ff7015ca23030a9b4c190d9c44a77d483dc822e72d4b0c1f2b6f96236abf37"]
      - values: {"a":3,"h":"x + 2","k":"","c":"81"}
        answers: ["sha256:d4058f13289130c65a0b1f969e6c93d3584695713e1e411a48566821f6e6b455","sha256:0eac314d004e89d396e5a8a886f3e3bd7472ea5d44dfd70f95fce2e8074fc472","sha256:83f7620ebb8e20960aefaf9bcaaa97ec10af6179296a5c5fb2aa50a8b7af4db7"]
      - values: {"a":10,"h":"x","k":" - 4","c":"96"}
        answers: ["sha256:b1aa955c07256dce06d2ed3f06d8fcc0ad246c8e8f0ddb6e12b1387e72d136dd","sha256:ab34548b8587ea1890f0813498e0b873dfa35f1922c7572d88a1263855674fd6","sha256:65ab3f68a6725dfb270bfde52128fd9b886423e795c184527e1a0facb0ba05ca"]
      - values: {"a":5,"h":"x - 3","k":" + 1","c":"126"}
        answers: ["sha256:2e3d4048655559e40975ce9479683d67e5a2c1819074b3fc41886881c8fc86ed","sha256:c6af03c44c4c5fe6d4918dfff8eadacba458ac57c29293dd94802527238c65e5","sha256:4b7d41d0177c3b5ea6c0304e1a42f1fd8ae448cfca6d7b75c8467436fcfa6117"]
      - values: {"a":2,"h":"x + 1","k":" - 1","c":"0{,}5"}
        answers: ["sha256:b46e7d96e68b9211695c8bf0b14fc9c804a0ba8097ab294986e0997d9a3ab5b2","sha256:7541953e28de1ba33e1710dfa32fa5948e9dc7e652b66004ea9c01ecb123c698","sha256:cb4bc6d90789d33dec50f99b7682d8727ccfb9889ff9c365f0b6cd7a28cf3b87"]
      - values: {"a":4,"h":"x - 2","k":" + 2","c":"66"}
        answers: ["sha256:9b30420780a2104bbaeba931be47777f05ddecf948880a6bc9932e9c6e6dc4ff","sha256:385dbaddf73ddf6e1e0587fc3e2bd633471a6564629b2fca796bf2711108c236","sha256:24dae1414b6167e216d70edbf43e609e0e60460472796a79c4d82d0dc7545c3a"]
  - id: composicion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Con $f(x) = {{f}}$ y $g(x) = {{g}}$, calcula $(f \circ g)({{x0}}) = f(g({{x0}}))$ (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"2^{x}","g":"x^2 - 1","x0":2}
        answers: ["sha256:0db56de34fcd46c2b485cf89c5ce77140cc329417fe85bf0c37fb6201b2a7312","sha256:87c3e66be0f4edf60358430d7c1fa208b70edb8bcfeffae2cdd11b77c1479a22","sha256:f5eeac61528d24049da0a50279f1ff790c82b764d7ff4142e8a24516130e26b8"]
      - values: {"f":"\\log x","g":"10x + 90","x0":1}
        answers: ["sha256:243b2b31f78d33cf6a0aaf6fa29da28fdaa09bac65a1ccfd528cf1545b93e2cd","sha256:bddcf2025ff6ccc45721114e80b224275d2ff6f8838d5596501416c39bb9c3f0","sha256:1867c57edfb2d7e09f084deca35393e0f05b6f7483da3119d2f2b45a3a5c0eff"]
      - values: {"f":"e^{x}","g":"2\\ln x","x0":4}
        answers: ["sha256:0049373aa0980a66c561e13e4a34443bdcf7f0a4367699c9da12fed15745760f","sha256:6e867f86b3135937d7bedf95c6c49a849e25df2b17c765a2a04a3a6f5d12a93e","sha256:5da263c4e6596e05548f1cdf13e7a70869104e928f151030c2227a3f674cb1c7"]
      - values: {"f":"3^{x}","g":"\\dfrac{x}{2}","x0":6}
        answers: ["sha256:804f8c6fba4b478a3937d3909b1f300b3fcef12fcb3f4b8e2c98d607bc9491ee","sha256:b713e61144382513547eb031a62643e53bb7c8fad910842f8d58624f071c34ac","sha256:3035970ac7a35ae0181dbe766accebd6fd556847bc0af63c030f7babf7aadb48"]
      - values: {"f":"\\log_2 x","g":"x^3","x0":4}
        answers: ["sha256:b3f5a4ae07f2b1d6974b62857ee586bb35a64cee7be6cc0a00ae91dec48008a5","sha256:1d38ce65d9c9ef3e4addcf2267d52dae41f0b43919e498080161475585f49217","sha256:8232a4c7aa2b3e65fca1fef532a11d7d6b2eceb27e1623a01b050ec9861d29ab"]
      - values: {"f":"5^{x}","g":"2 - x","x0":4}
        answers: ["sha256:bab6b82a02bed9f58024c32feea49f8b959ea009cac0458599fe07eff0d41686","sha256:452502b4629cf43aeadf719a753713de5bcc93e870db3a83c51fd4feb090b9ef","sha256:a84576cadb23590d38217696a048e54a6ee16325062c0a9f08570fdd49d43646"]
  - id: propiedades-de-e-y-ln
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Simplifica y calcula: ${{e}}$.
    variants:
      - values: {"e":"e^{\\ln 4 + 2\\ln 3}"}
        answers: ["sha256:cfebfeab2a1fa9d0979614762c025a062d2538e3e148e59e625f2ff07c3610c3","sha256:c397d65ec709e3dfe28de9c000dcf86c3df6405d83da0051f9628fee5721a1ef","sha256:48e4f1f06c2d3c21fae8569d58473072fd4ced7b75c0ea0afe8a0e0adeee1bee"]
      - values: {"e":"\\ln\\left(e^{5} \\cdot e^{-2}\\right)"}
        answers: ["sha256:6e46930a82fa3c2fd6891759a50d2c0efcbba64779d8258dc2f2dccc60de724b","sha256:f53c0e039058c233df70366e61b31485ee7158c178610a765e1c6c9ef2e9dc7e","sha256:2c9b7ac206c5f22560e4214e966c15077591413184256033497e7faf64bf8409"]
      - values: {"e":"e^{2\\ln 5 - \\ln 2}"}
        answers: ["sha256:4a6313e59828aa8ee6c16e9446afca5f5cae1e9d5935eaef24e62c850264c0b5","sha256:1350c77ef339feebc50582509fdfef3e15da2f2c2b8e6a001be2d4ed99ccaf2e","sha256:fae1bd8e431af7d872dbfe9f73f3ec4ace417ab2708b5211dc85728f8b885757"]
      - values: {"e":"\\ln \\sqrt{e^{6}}"}
        answers: ["sha256:d9c61f2b2973f58adf9630de3aa24396eb7c15becee9dbf10839838201b43fad","sha256:38c548e13f1cf36214a317467fa5d7d6d1fe5930cff3d748964e3a1271510058","sha256:4e4bc21caf68bedbd93345be19df3b20f5fa30ab1e94b6386623033fdd411f86"]
      - values: {"e":"e^{3\\ln 2} - \\ln e^{4}"}
        answers: ["sha256:d16b640dd8e06c6cb66d150db15195733ed58975a68232c97935bbd16f04ca30","sha256:5cea4fe9a89230c4eb502b635ba05d0690a69ca6ebe1eae883414d117370339c","sha256:862ef9dbfe76fef0888fd2e460780c671155f64061168401c60da351c54b1835"]
      - values: {"e":"\\dfrac{\\ln e^{9}}{\\ln e^{3}}"}
        answers: ["sha256:392e6ed1cd70adcf90c24ff74eb90f3b6738ea8c27ae35ab8137361fbf3aa051","sha256:fb8e8d7502acac403ba81de0992bcd7b602bf677e11a5711fbbd34aaa2f50d77","sha256:097edadb4d537f53f4d426d973a4cccce53c8ed4486e91119f5cea9238141c7b"]
  - id: exponencial-frente-a-potencia
    tier: 3
    type: numero
    sig: 10
    prompt: |
      ¿A partir de qué número natural $n$ se cumple $2^n > n^{{{k}}}$ para siempre (es decir, para $n$ y todos los siguientes)? (Haz una tabla.)
    variants:
      - values: {"k":2}
        answers: ["sha256:f37502d1724a583c5c8c79549a9f7a1c9eee5b9f091a0dba99a6f39a81d871b3","sha256:2aff53c8b23357109b08493ce0d06dfb486e48fe7fab618f8db59a954bf14eff","sha256:15b800af11ce98a03e338a51dbf54181c7dfdc3b498ff6d47a4ae766972725a1"]
      - values: {"k":3}
        answers: ["sha256:8215d212efeba8aef48015cb6285a4205205ea21536d01b7a54328accb2e1e14","sha256:a08c033861213de9ac768c0e8dfc2058d96af7b5b10f97745594fce0c950e850","sha256:d1aa3236b68bbb7c1416c2ad985709d43f40e6eba8be2ef04deb8ef1336fe02d"]
      - values: {"k":4}
        answers: ["sha256:28b9ec0607d1752aa9d8b38250031b7634cd771f64c77e3d758ad0327d579ef2","sha256:882e78e996ac56a5af0f5af11b975335ed26bb8543d342a781c2479fd160c718","sha256:8ee70c8e0003cea78c95e3a18b01e5700c65c11bbdf81870ad9ec9b943b90751"]
      - values: {"k":5}
        answers: ["sha256:ea9a36289ba1411d37394d582d9d9bedd85dd8c1ac7f29a0c43a2aa8eeb9cb71","sha256:6943d4d4e94cd5cb67f4109998c188b492f70815d13b37896c91c5b8ff19a655","sha256:d739d488e8b00d819b32fd3e3126bac2ea6a6fe98464c6348247d9b5c5f41b00"]
      - values: {"k":6}
        answers: ["sha256:c1036960d0fa44e7aa9658fa8902ca188081f7799d225055b6ff4c66262f3c65","sha256:3192b7b19a05a9d9108287e3375118de3bee9207361445fd502a3d6e185b23ac","sha256:e814983168359ea338f230942eb7a738d0dca174303d0c68a0a3fabcca019a88"]
      - values: {"k":8}
        answers: ["sha256:5674bf87da27a12f8a9004c56905099dc24628a5ab81e8fc8831a2c4858aefb9","sha256:c966736974e201175dda307eea58b53a460c395e1c1b965b83061ca1ba5fc52f","sha256:dcee2751400a16e2933b776f1a6e4c2829ddf432301157c6fe2659e9de70902f"]
  - id: constante-de-desintegracion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un isótopo tiene una semivida de ${{T}}$ años y se desintegra según $N(t) = N_0\, e^{-\lambda t}$. ¿Cuánto vale $\lambda$ (en años$^{-1}$)? (Al menos cuatro
      cifras significativas.)
    variants:
      - values: {"T":"8"}
        answers: ["sha256:1fbb5f5a6d96229c052a485656c83bd0c4707eb52fb01eb45de2a034f5bc8999","sha256:9d1bf4cc8c6e0a73c2149400148278269903bd2a21ff72dd4dcb1e9624e8ed3f","sha256:0e376519fa66b439213f71d93cd514f89d91695ae424ca724a361f043a65a40b"]
      - values: {"T":"12{,}3"}
        answers: ["sha256:c9f1aae12da1c936799a5cffd69104b47cd61b33367dbe9085377926bc4fe4fc","sha256:19f2a376f382a10a6131888306ae9e6d174ec85e5ef14c0414c5e6376f4c52ed","sha256:5798312837b9eaa1e0ff4e00c4cbef93a091fa6bde14a441b2bcff6ae05f60d5"]
      - values: {"T":"30{,}2"}
        answers: ["sha256:9a102f9d7aec315849e51e4bfbda6dcbb9ed450df947e9b1cd9c23fe5322b37f","sha256:e9671ad56383f9e4cab8125799109976374a0215a28fc12183ccfe6ce7cfdb92","sha256:8004bd24ed1f476a120e919813e91f7cea6bf5254d271f0b25a336fe52328d70"]
      - values: {"T":"1600"}
        answers: ["sha256:93f5ea593e3ed2dd2d00399661cce326022e303be67a40881241c192b7a68b52","sha256:78137c71212efb502f89795cc1f70cc0369059f5b0638fd2c955b13fdb2d005b","sha256:b447cdd0017c8a919eda6a6b0aa6b0d521dcbab55741565de48c53c885f9f692"]
      - values: {"T":"5{,}27"}
        answers: ["sha256:e5f822a2ec63e61f43c30d3640843e3c72b6f77dbc673fca925983d9b3e61061","sha256:77a822d4259dea9f94b26fa4da49e857f2ed41a0a5a679b55d4fcdd5d0cd5412","sha256:eb9b6b003169155f97445a3786edc48647b39fa9fa71b40f122058a5f65e2d37"]
      - values: {"T":"24100"}
        answers: ["sha256:843fa96686c0bcb2e66667b29805019ec955e19cf675512a1f6d83f810fc95cb","sha256:11df004e1fa51d1390f12b59bef4d87ebfef39f0179839557c45d2c7e1b7eeb4","sha256:3551a08ecc368490c1812c5cb24366150e426bb1ddb4c242d63d4be27ecc8579"]
  - id: interes-continuo
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Se invierten ${{C}}$ € al ${{r}}\,\%$ durante ${{t}}$ años. ¿Cuántos euros más se obtienen con capitalización continua ($Ce^{rt}$) que con capitalización
      anual ($C(1 + r)^t$)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"C":1000,"r":"5","t":10}
        answers: ["sha256:3d34a6fa6ba50a5830e6b5c7f6503774140476179f684d901a946c8ba6e70e8e","sha256:c8d73469e732370bb7f4bfc015a8f798c45ea9a5a55a1984938138f2106efd31","sha256:5ca5e6ac866f9ed6f73ba0f6a56fec6ce22a2c2b19f2cbfa49ab052cd792c65b"]
      - values: {"C":5000,"r":"3","t":20}
        answers: ["sha256:6a316571633df932f89302f3ef603b1bbd363bdc9bc578333f2cd95e2cd8013f","sha256:31ce33d9ef3942c5d1b6af63a9af3fb120c0a06ace14a7a6820627558c0985f2","sha256:6e9e899d206fd5cd173306b44355932c109b038d512a64b7d5c66d7262f21dc9"]
      - values: {"C":200,"r":"10","t":5}
        answers: ["sha256:065c7e4edd0ef1ff4db5172a8253d066768ff2749543217f81e56f3ad5db7354","sha256:9636be823395843972a75c8f3606be0efbecc559825cd84492c64ee0baf817ca","sha256:02901e9012df7323644c7efbd1befdd271976adca16ad539a1d03018eb66b025"]
      - values: {"C":10000,"r":"2","t":30}
        answers: ["sha256:cf307014119486fd2032163ff1181608c9ddc800e63241164f86f3d0bcf5f152","sha256:e46b74f9a865edc6aee867f34656f5924b10cb365455c0241aba03860fd83f9d","sha256:100a2077fd73d2a07d26a67d8e72cb20935f58216ec54e30ec3eb9baf12f0ab6"]
      - values: {"C":750,"r":"8","t":15}
        answers: ["sha256:2e0a3006ee17205bb262241fc612b0bb300b65dc8373a632fd94b4413d4941dc","sha256:01e75c550236cc21c579034953687e37b3634d2a43d1d218d9215e9e9b98dff7","sha256:dd7d1ed9458bfb2a329083dd7345a155c71eed96a168ca3fbc2df8ed56b9ab92"]
      - values: {"C":3000,"r":"4","t":25}
        answers: ["sha256:5ae70e09848b1b6d9e838d7f64ded07074ab329f2ff8c2c546f032815dd08255","sha256:b48ef40b71bf74c3e7a1a7ad615b610e3f4941fa0749885798380890e81aa635","sha256:cae3f34f3e53a0af5caa0dcde2ef22ef529d6a527e9ff03ac0070c3e8e2f657a"]
  - id: inversas-y-crecimiento
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué $\log_a x$ es la función inversa de $a^x$ y por qué sus gráficas son simétricas respecto de la recta $y = x$. Deduce de
      ahí el dominio y el recorrido del logaritmo. (b) Explica con un ejemplo numérico por qué cualquier exponencial de base mayor que $1$ acaba
      superando a cualquier potencia de $x$, aunque al principio vaya por detrás. (c) ¿Por qué no tiene inversa $f(x) = x^2$ en todo $\mathbb R$ y cómo se arregla?
    sealed: "gz64:H4sIAAAAAAACCn1UPY/jNhT8KwOBhe1TDNvYbAIv3OW6FEGuPGaDZ+rJy4NEyo+UYcfQj7nyiq3SpdUfCyiv1x8XpBJEcuYN38zjMQu+aqP1Lltmk8mIxpMJ1AEr0PMeWtuyxB4raF35zZ+Eg1qCK1R+Q2Jj7VFweCHDqAi8b7xjZyxVOGBnDe9YAmGkzujEucJe5VD0fDyv7rthcTzFJws1anJsxwocYv8V7BLzRvqvpTWEghMyEbCL3hkO2qnRNkdzhyiuRT7BushiqF5bEhjvpWBHBQVwgHBZ8RcSCIeGTfRDlcOgaYqPFQpfW2f9LWdCcgVh40VsMYAq0u6qCTnUaJbjg9bWlfEwVjkOCO0FkyeGC/tdD3MorWuKL+s1fldT7bSbTEbrZNBvXsBfuG4qn0Mtnp1CKewig6Dc83E+69QSxjsohxXmMzUcS+vpV+t8tni4xsxnJ9ATGhZ/QT6ekY+zDlpT04jfY37Mu/mP0NoUPmLA/txd0z2e6C6Ix2PezW4RP3VDPwgNSbSiXcGgl/71PkkbcsMZQrBcN8JT/EoQ+qv/2y1BFait2UUSKKeS+2qu8nuSwKjbKtqmSilqvEAtVI7asotCAduW3xv3/WHtUoK5jCOtSyFzdB/m3dF1WovdvMTxCZcPLNHycJMk4+yZefMs7bshOdYd2ES7oyVUOVqMsUI5+mH4PqgcFPpXvJ0OjEBr6V8JhG3bf4Pr/6mTSwXvfLVjSSlSD2qKTwwS4U1FKctRrNskNf46ZgT1+TaU2hU+SeYAI2xSS/gJVFX9a0qrdacp5pDyGLYS01xkeSbtWqzJlp+PmREbWazPltnH/altSf3tg3AZncDnZ8Ol9eRszXG44n/M4BMKepd/uExP0tC0LvqQLRddfqPiF0LrziMC19b9N7EmBVtkoB/KnkKEUUkm+vQuuBApRfg9yW8798aO/6/2uQNVgldxeLTOftuCirfag0HG2KTgO1Nu+f/o/gVc+0YJpwUAAA=="
  - id: r-pasa-por
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Por qué punto pasan todas las funciones $y = a^x$ ($a > 0$)?
    options:
      - |
        $(1, 0)$
      - |
        $(0, 1)$
      - |
        $(1, 1)$
      - |
        $(0, 0)$
    answers: ["sha256:fad1542bee804964cf6a7c2b551bd273643822cd5cc5fc89b70ac1412ae05da7"]
  - id: r-pasa-por-log
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Por qué punto pasan todas las funciones $y = \log_a x$?
    options:
      - |
        $(1, 0)$
      - |
        $(0, 1)$
      - |
        $(0, 0)$
      - |
        $(e, e)$
    answers: ["sha256:b5ba048c235be63ebb9fc99d20b609148491019ee7de20c24baa6bbd3d44299c"]
  - id: r-decreciente
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es decreciente la función $y = a^x$?
    options:
      - |
        Si $a > 1$
      - |
        Si $a < 0$
      - |
        Si $0 < a < 1$
      - |
        Nunca
    answers: ["sha256:fa9b665d90d8360db9a3a42107f06e6a0dd7fda549c49fdff90b41eab4df8e53"]
  - id: r-numero-e
    tier: 1
    type: numero
    review: true
    sig: 4
    prompt: |
      ¿Cuánto vale aproximadamente el número $e$? (Cuatro cifras significativas.)
    answers: ["sha256:1be7a554648c087b4bb16457fc0c32f32a4ade6329e5358165bdfec0f0eb7680","sha256:6bbcc4fd82321fdc734ee70e3c0fb00a82dcd274c78579bd8ab2e52c184e22b3","sha256:54864776627302f738886ad74489ad088f18e30314982c5cb56e8485952aacd5"]
  - id: r-inversa-def
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es la función inversa $f^{-1}$?
    options:
      - |
        $\frac{1}{f(x)}$
      - |
        $-f(x)$
      - |
        $f(-x)$
      - |
        La función $g$ con $g(f(x)) = x$ y $f(g(x)) = x$
    answers: ["sha256:e0557ee9ed296b2d4fd0885a9a59fced6584528e68947a9524af7d23382c5411"]
  - id: r-composicion-orden
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Es la composición de funciones conmutativa?
    options:
      - |
        Sí, siempre
      - |
        No, en general $f \circ g \neq g \circ f$
      - |
        Solo si son lineales
      - |
        Solo si son exponenciales
    answers: ["sha256:d81f5e3a02f0328ae2e47aa03755f0f8732d4abeba1d026b6714016be6b1a054"]
  - id: r-asintota-exp
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la asíntota horizontal de $y = 3^x$?
    options:
      - |
        $y = 0$
      - |
        $x = 0$
      - |
        $y = 1$
      - |
        No tiene
    answers: ["sha256:e0d657e8374020e6d00edb0e39621803f40f02c923f0a1c71b2d0f25b909c802"]
---

# Funciones exponenciales y logarítmicas: gráficas, el número e, composición e inversa, y modelos de crecimiento y decrecimiento

Una colonia de bacterias que se duplica cada hora, el dinero en una cuenta a interés compuesto, la cantidad de un fármaco en la sangre, la
temperatura de un café que se enfría, la radiactividad de una muestra: todos siguen el mismo patrón, en el que lo que cambia en cada
instante es **proporcional a lo que hay**. Las funciones que lo describen son las **exponenciales**, y sus inversas, las **logarítmicas**, permiten
despejar el tiempo. Este nodo estudia sus gráficas y propiedades, el número $e$, las operaciones de composición e inversa, y cómo se
construyen y usan los modelos exponenciales.

## Objetivos

Al terminar sabrás:

1. Dibujar e interpretar las gráficas de $y = a^x$ y $y = \log_a x$ y sus traslaciones.
2. Usar el número $e$ y el logaritmo neperiano.
3. Componer funciones y hallar funciones inversas.
4. Construir modelos exponenciales a partir de datos y resolver problemas de crecimiento y decrecimiento.
5. Comparar el crecimiento exponencial con el de las potencias.

## Qué debes dominar antes

[[mat-exponenciales-logaritmos]] (logaritmos, sus propiedades y ecuaciones exponenciales) y [[mat-funciones-lineales-cuadraticas]]
(gráficas, traslaciones, asíntotas).

> [!question] Test de entrada
> 1. ¿Cuánto vale $\log_2 32$?
> 2. ¿Cuánto es $8^{-1/3}$?
> 3. Si $y = (x - 2)^2 + 1$ es $y = x^2$ trasladada, ¿hacia dónde se ha movido?
>
> Respuestas: $5$; $\frac12$; $2$ a la derecha y $1$ hacia arriba.

## 1. Para qué sirve

- **Biología y medicina**: poblaciones, epidemias en su fase inicial, eliminación de fármacos.
- **Física y química**: desintegración radiactiva, ley de enfriamiento de Newton, descarga de un condensador, absorción de la luz
  ([[fis-ondas-calor-fluidos]]).
- **Economía**: interés compuesto y continuo, inflación ([[mat-porcentajes-finanzas]]).
- **Informática**: algoritmos de coste logarítmico frente a exponencial; escalas logarítmicas en gráficas de datos.

## 2. La función exponencial

> [!practico]
> Dobla un folio por la mitad una y otra vez. Tras $10$ dobleces tiene $2^{10} = 1\,024$ capas; tras $42$, si se pudiera, su grosor llegaría a la Luna.
> Así crece una exponencial: lentamente al principio y luego de forma explosiva. Si en vez de doblar se reparte (la mitad cada vez), la
> cantidad cae cada vez más despacio, sin llegar nunca a cero.

La **función exponencial** de base $a$ ($a > 0$, $a \neq 1$) es $f(x) = a^x$. Sus propiedades:

- Dominio $\mathbb R$; recorrido $(0, +\infty)$: **siempre positiva**.
- Pasa por $(0, 1)$ y por $(1, a)$.
- Si $a > 1$ es **creciente**; si $0 < a < 1$, **decreciente** (y $\left(\frac1a\right)^x$ es la simétrica de $a^x$ respecto del eje $Y$).
- El eje $X$ ($y = 0$) es **asíntota horizontal**: por la izquierda si $a > 1$, por la derecha si $a < 1$.
- Es **inyectiva**: $a^u = a^v \Rightarrow u = v$.

**Traslaciones**: $y = c\,a^{x - h} + k$ desplaza, estira o refleja la gráfica; su asíntota horizontal pasa a ser $y = k$.

**El número $e$**: la base «natural», $e = \lim_{n \to \infty}\left(1 + \frac1n\right)^n = 2{,}71828\ldots$ (el resultado de un interés del $100\,\%$ capitalizado
continuamente). La función $e^x$ es la que mejor se comporta en el cálculo (el tema `mat-derivadas`), y todo crecimiento continuo se escribe
$P(t) = P_0\,e^{kt}$ (con $k > 0$ crece; con $k < 0$ decrece). Su inversa es el **logaritmo neperiano** $\ln x = \log_e x$.

## 3. La función logarítmica

La **función logarítmica** $f(x) = \log_a x$ es la inversa de $a^x$:

- Dominio $(0, +\infty)$ (solo existe para positivos); recorrido $\mathbb R$.
- Pasa por $(1, 0)$ y por $(a, 1)$.
- Creciente si $a > 1$, decreciente si $0 < a < 1$.
- El eje $Y$ ($x = 0$) es **asíntota vertical**.
- Crece muy despacio: $\log_{10} x$ solo llega a $6$ cuando $x$ llega a un millón.

Su gráfica es la de $a^x$ reflejada respecto de la recta $y = x$. Para hallar el dominio de $\log(g(x))$ se exige $g(x) > 0$.

## 4. Composición y función inversa

> [!practico]
> Calcular $\sqrt{x^2 + 1}$ es hacer dos operaciones seguidas: primero $x^2 + 1$ y luego la raíz. Eso es **componer** dos funciones. La **inversa** es
> la operación que deshace a otra: si una máquina convierte euros en dólares, la inversa convierte dólares en euros.

- **Composición**: $(f \circ g)(x) = f(g(x))$: primero $g$, luego $f$. En general $f \circ g \neq g \circ f$. *Ejemplo:* con $f(x) = 2^x$ y $g(x) = x^2 - 1$,
  $(f \circ g)(3) = f(8) = 256$ y $(g \circ f)(3) = g(8) = 63$.
- **Función inversa** $f^{-1}$: la que cumple $f^{-1}(f(x)) = x$ y $f(f^{-1}(y)) = y$. Solo existe si $f$ es **inyectiva** (valores distintos dan imágenes distintas).
  Para calcularla: se escribe $y = f(x)$, se despeja $x$ y se intercambian las letras. *Ejemplo:* $f(x) = 3x - 2 \Rightarrow x = \frac{y + 2}{3}$, así que
  $f^{-1}(x) = \frac{x + 2}{3}$. Las gráficas de $f$ y $f^{-1}$ son simétricas respecto de $y = x$.
- Si una función no es inyectiva, se restringe su dominio: $x^2$ en $[0, +\infty)$ tiene inversa $\sqrt x$.

> [!formal] Con rigor: por qué la gráfica de la inversa es la simétrica
> El punto $(p, q)$ está en la gráfica de $f$ si $q = f(p)$, es decir, si $p = f^{-1}(q)$, lo que equivale a que $(q, p)$ esté en la gráfica de $f^{-1}$.
> Intercambiar las coordenadas de un punto es reflejarlo respecto de la recta $y = x$ (el segmento que une $(p, q)$ y $(q, p)$ es perpendicular a esa
> recta y su punto medio está en ella). Por eso las dos gráficas son simétricas. $\blacksquare$

## 5. Modelos exponenciales

Una magnitud sigue un **modelo exponencial** si en tiempos iguales se multiplica por el mismo factor: $P(t) = P_0\,a^t$ (o $P_0\,e^{kt}$, con $a = e^k$).

- **Con dos datos**: si $P(0) = P_0$ y $P(t_1) = P_1$, entonces $a = \left(\frac{P_1}{P_0}\right)^{1/t_1}$. *Ejemplo:* $100$ bacterias que se duplican cada hora:
  $P(t) = 100 \cdot 2^t$.
- **Tiempo para alcanzar un valor** (tomando logaritmos): $t = \frac{\ln(P / P_0)}{\ln a}$. **Tiempo de duplicación** en $P_0 e^{kt}$: $\frac{\ln 2}{k}$.
- **Semivida** (decrecimiento): si queda la mitad cada $T$, $N(t) = N_0 \left(\frac12\right)^{t/T} = N_0\,e^{-\lambda t}$ con $\lambda = \frac{\ln 2}{T}$. El carbono 14 tiene $T \approx 5\,730$ años.
- **Interés continuo**: $C e^{rt}$, algo más que el compuesto anual $C(1 + r)^t$.

**Exponencial frente a potencia**: cualquier exponencial de base mayor que $1$ acaba superando a cualquier potencia $x^k$, aunque al principio
vaya por detrás: $2^n$ supera a $n^{10}$ desde $n = 59$ (comprobado con una tabla). Por eso los algoritmos de coste exponencial se vuelven
inutilizables muy pronto (el tema `prog-algoritmos-complejidad`).

## 6. Errores típicos

- Pensar que $a^x$ puede valer $0$ o ser negativa, o calcular $\log$ de un número no positivo.
- Confundir $2^x$ (exponencial) con $x^2$ (potencia).
- Confundir $f^{-1}(x)$ (inversa) con $\frac{1}{f(x)}$.
- Componer en el orden equivocado.
- En un modelo, usar un crecimiento lineal ($+$ constante) cuando es exponencial ($\times$ constante), o al revés.

## 7. Resumen

- $a^x$: positiva, pasa por $(0, 1)$, asíntota $y = 0$, crece si $a > 1$.
- $\log_a x$: inversa, dominio $x > 0$, pasa por $(1, 0)$, asíntota $x = 0$.
- $e = 2{,}71828\ldots$, $\ln = \log_e$; crecimiento continuo $P_0 e^{kt}$.
- Composición $f(g(x))$; inversa despejando; gráficas simétricas respecto de $y = x$.
- Modelos: $P_0 a^t$, tiempo de duplicación $\frac{\ln2}{k}$, semivida y $\lambda = \frac{\ln 2}{T}$.

## Repaso: lo que debe quedarte dentro de un mes

1. Las propiedades de la gráfica de $a^x$ según su base.
2. Por qué el logaritmo solo existe para números positivos.
3. Cómo se calcula una función inversa y qué relación tienen las gráficas.
4. Cómo se construye un modelo exponencial con dos datos.
5. La relación entre semivida y constante de desintegración.

## Siguiente

[[mat-funciones-trigonometricas]] (las funciones periódicas) y, en el cálculo, [[mat-limites-continuidad]].
