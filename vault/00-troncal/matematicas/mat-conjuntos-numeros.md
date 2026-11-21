---
id: mat-conjuntos-numeros
title: "Conjuntos y números: relaciones, aplicaciones, cardinalidad y construcción de ℕ, ℤ, ℚ, ℝ y ℂ"
area: matematicas
trunk_level: 8
prerequisites: [mat-logica-demostraciones, mat-numeros-reales, mat-numeros-complejos]
academic_sources:
  - "Delgado Pineda, M.; Muñoz Bouzo, M. J. Lenguaje matemático, conjuntos y números, 3.ª ed. Sanz y Torres, 2025, temas 3 (relaciones y aplicaciones), 4 (operaciones internas y estructuras algebraicas), 5 (naturales y enteros), 6 (racionales y reales) y 7 (complejos): texto base de «Lenguaje matemático, conjuntos y números» (61021039), 1.º del Grado en Matemáticas y del doble grado de la UNED."
  - "Hammack, R. Book of Proof, 3.ª ed. (3.4, 2025), caps. 11 (relaciones: equivalencia, particiones, aritmética modular), 12 (funciones: imagen, preimagen, composición, inversa) y 14 (cardinalidad: numerables y no numerables, Cantor-Bernstein-Schröder). Gratuito en https://richardhammack.github.io/BookOfProof/"
  - "Spivak, M. Calculus, 4.ª ed. Publish or Perish, 2008, cap. 8 («Least upper bounds»: axioma del supremo y propiedad arquimediana) y caps. 28-30 (cuerpos ordenados y construcción de los reales)."
ctf_flag: "sha256:8fa0614b62dd8d801f8f300c52c7fe5996a34e01f191d1a3720252576ffaccfb"
hints:
  - "Concepto: (a) es contar aplicaciones con f∘f = f: decide primero cuál es la imagen (un subconjunto de k elementos, que han de quedar fijos) y adónde va cada uno de los demás. (b) Un par (p, q) representa 12/18 si y solo si p/q = 2/3 tras simplificar. (c) Dos números están en la misma clase si sus cubos coinciden módulo 91: cuenta cuántos cubos distintos hay."
  - "Herramienta: (a) suma sobre k de C(n, k)·k^(n−k). (b) (p, q) = (2t, 3t): ¿hasta qué t cabe en el rango? (c) 91 = 7·13: por el teorema chino del resto, un resto módulo 91 equivale a un par de restos (módulo 7, módulo 13), y el cubo se calcula en cada componente."
  - "Documentación: Hammack, cap. 11 (clases de equivalencia y aritmética modular) y cap. 12 (funciones); el teorema chino del resto está en [[mat-matematica-discreta]] y [[mat-teoria-numeros]]."
exercises:
  - id: clases-cuadrados
    tier: 1
    type: numero
    sig: 6
    prompt: |
      En $A = \{0, 1, \dots, {{N}}\}$ se define $x \sim y \iff x^2 \equiv y^2 \pmod{{{m}}}$ (es decir, ${{m}} \mid x^2 - y^2$). Es una
      relación de equivalencia. ¿Cuántas clases tiene el conjunto cociente $A/\!\sim$?
    variants:
      - values: {"m":7,"N":40}
        answers: ["sha256:5767eee5ce3b0deaf4a944d001ad3ba5ea6ead43a4963d46760a3aa7b8f490e9","sha256:8e682cd0eb7d7d17a4c25a559f01def0388d7349385cf23f34e8e0a1729efd39","sha256:937f1f7e0b5a16f8835d916f22588ee772758893491c7e92fb0d2f279c24035b"]
      - values: {"m":11,"N":50}
        answers: ["sha256:3a1f60b2b92e486333ce9c2977a8093f734b2c6143d75875229b2a38767e8fa8","sha256:d148f38a9f2e5dff3e8be05be2e15fd84766794eff8488f16abcfb64ac056306","sha256:17ecd0a2be24df971f8862acbc328bc3c977b8c26670c0bc95eba309a62aa51c"]
      - values: {"m":13,"N":60}
        answers: ["sha256:f9dcc907b1a52c3240275deb570cad5c527a50238699aada1f2b11b02f03a935","sha256:4e45bf74b3154f88e16dd42d7346891a9cfb9b862efc65ac0087a5e4bd93f8e0","sha256:5052667107729b18031aee2497350e13686fbf00177976fa29a78d27faecb899"]
      - values: {"m":8,"N":30}
        answers: ["sha256:39baed302529a0614c4a39e0d3fab16d2ede95b023253afb21c8996d2f09d5b8","sha256:dd7cc9ab09ef82a225051042e29f621f1893d9b997a4f787f28b74ae41325919","sha256:f8f243b75eeec172d0154aa3205463ec3e146fe6cd538365b71d703011e05abc"]
      - values: {"m":12,"N":100}
        answers: ["sha256:4abdf83c4d7124238930ccceb3aebd94d9e5c94d4e39a9e7dbb84adac6f2307e","sha256:6803a777bc5367ee2834cecc29492c1af7baceb8b81e9f4ebac4f1c228bd0dd3","sha256:e90be8f2bfd35ca5e73a3df8f3361b5678f1f2b42e7a98320fad0d060a785422"]
      - values: {"m":9,"N":45}
        answers: ["sha256:3cb0a45af8cda581ff676bb547aaeec9b3dff2d0db7a705e32f98ca4795f0864","sha256:18395cb9b6d32c87b1b836e94c1918ed2b126167810a2cce5b8b47cc86807bbb","sha256:0b549c9b1f067315f654e0f9e3b09a8dafb1ac30825720edf57f46f9cfe0a90f"]
  - id: cual-es-equivalencia
    tier: 1
    type: opcion
    prompt: |
      ¿Cuál de estas relaciones es de **equivalencia**?
    options:
      - |
        En $\mathbb Z$, $x \mathrel R y \iff x \le y$
      - |
        En $\mathbb Z$, $x \mathrel R y \iff x \mid y$
      - |
        En $\mathbb R$, $x \mathrel R y \iff x - y \in \mathbb Z$
      - |
        En $\mathbb R$, $x \mathrel R y \iff |x - y| < 1$
    answers: ["sha256:3e4be74a3e68cde3bf91931df5ed4b215e2e45cd42be35e8354f2cb343c82b07"]
  - id: maximales-divisibilidad
    tier: 1
    type: numero
    sig: 6
    prompt: |
      En $\{2, 3, \dots, {{N}}\}$ ordenado por la divisibilidad ($a \preceq b \iff a \mid b$), ¿cuántos elementos **maximales** hay?
    variants:
      - values: {"N":20}
        answers: ["sha256:2f4ea145fcfacb063ace50917b001ea217c415b7664e5d853ca5a507a7a1fce0","sha256:50cd260e365aa879b0c957632182d3c8f125b67cd7ca99744db1f65d73b9a83c","sha256:f5bb26881ff940401e5a17a9b9d913a17a5c024455d3c868617ab35c52912493"]
      - values: {"N":30}
        answers: ["sha256:ca6bf25a3877a0ca1860ec7ce9387499143da48c99813444adda689a92e65b78","sha256:3b025de9898a68b13f0e07c1b892c92bd70546e11beb3962ac8f978634346f0b","sha256:7885c67ef2864eff3e1c04ec7a3d98af30b100bdbbe927449cc7b106a50a475c"]
      - values: {"N":50}
        answers: ["sha256:77a1294a22206ede787cbe2bb28c91b26ddc4f2d1bdde178aa5a68932c4c132c","sha256:7b63393e13f1d9b10a44d311f5d7a4086a4a2117dd05a638781f1bc6d6f1f55e","sha256:66314dd0ec9c2844cf61d78ced281aa4f8534704a74f17e748be1333b37ca75b"]
      - values: {"N":17}
        answers: ["sha256:368e18fd5c37e477d4fb78b66eb0cbca230861428db9485cfb2a5d9d766b0f5a","sha256:7016873751f7b63586f7388c60dc92e64f0a2649a6c275e16ab054e0b4be24e2","sha256:6d896b2e8b217468d521e618f6f545ed43d4e5a4383a00c58acb438d2da7f18f"]
      - values: {"N":100}
        answers: ["sha256:42c3064c63529284d0e96caf849c362398163d7b18a6cf2f50577d5980188354","sha256:ac25dc3d5e08ba5d3c74269915fcc392c6d781cffdf766c55cb8c40c372db1ba","sha256:acae6f3a51e4aca62e02cc7919f05427055b8c95a803edb5b9f0220c0896f2e1"]
      - values: {"N":41}
        answers: ["sha256:1c8bf735a14e20a5228fee0487a99b2f119f196c83472ee3ab236ec9f33b0de6","sha256:87ca7830f1ca93254f133678fd447285bdd64cd4ed328193f82d42730bd1ba30","sha256:f8ff4686c6c0dfa3e1b00d5abb1d353e5f5118743e6f1faacc67e2396015afac"]
  - id: infimo-n-mas-k-entre-n
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula el ínfimo del conjunto $\left\{ n + \dfrac{{{k}}}{n} : n \in \mathbb N,\ n \ge 1 \right\}$ (aquí es un mínimo). Respuesta
      con al menos seis cifras significativas.
    variants:
      - values: {"k":10}
        answers: ["sha256:b07b3a2b7d2d4f94de2b033b95f9511892964e30372b720dfb409d1f6d09fd67","sha256:4cbb0b0b2870e2c7736fdefbd105ae73d400a8e86fc241ec21be54476303136b","sha256:56806466278490aeed19ddd6c8ae509c26733356bad84e753fd98220e214ba03"]
      - values: {"k":20}
        answers: ["sha256:0a44c3dfe0299d5c2ede85c49e656d89c361d73826d0803922914eb707927ea5","sha256:960434d1b7e23b71ff224975c1a9faf8f26a9d71e3797a95239e0861f9b3edea","sha256:c273c6b298c5878ddff15f038e1caf6adabef1e351bffdbc6d47bcabf25ac5de"]
      - values: {"k":30}
        answers: ["sha256:11fc608d2ddf8db91ea01a6c327073f998ff4e3a660e22e39e3051dfb91bc116","sha256:96c23165ada49a5ecb6bba769254926e5b3979f0465ef367a542892513d4effd","sha256:23d347310477e49ca0a54ff4152d609f5376c2b379419d4b886342514e7360ad"]
      - values: {"k":50}
        answers: ["sha256:efbd1830e71e2a5a0d3ddd0975df91eb6668a8a5318fa4111cd5acd5a07fe5c3","sha256:6435334f7bff02daf8631ba55fe2ffb24f1a26e7be7978bce767ab5628e68cff","sha256:26bf20d5f00b35dbf2be305cdbf6a2cbab97936d429e3e7ceec95394e9e0577c"]
      - values: {"k":7}
        answers: ["sha256:a795bedc18542a6ae00a5bf1fbfe252b1414a1a3cb36a284b323dd477ab82e85","sha256:a8d840f805f66f438dd19a2cf9dac1ec9b3f8b784c13395b0ac04c6c800ef2f2","sha256:b2799ccebc5e0103e918bc9d240687c8a562ad9d1214335848cbd7e98ab39e3a"]
      - values: {"k":90}
        answers: ["sha256:656c8e2205dc581bd8a62d2c347548ff00142a188f21a10038b380329051e2d2","sha256:eab0178c6f67188a96754479a8c8e134b836d31a781455128c1894b7176a9b3c","sha256:5af409f7b4a218ce2f429cca91e0355b3405b5f2b9632bb35798ee989ddeebdd"]
  - id: preimagen-cuadrado
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Sea $f : \mathbb Z \to \mathbb Z$, $f(x) = x^2$. ¿Cuántos elementos tiene la preimagen $f^{-1}([{{a}}, {{b}}])$?
    variants:
      - values: {"a":10,"b":50}
        answers: ["sha256:89ab4be09a2c00ffeb40bcb542fec8bb45bafda3e5759c92ce42d64ba0701d6c","sha256:b107f908305a7ac95f494ad92b87d8e95f2163271b7e523ee38f2379d23d9791","sha256:214d8336e2b64f53c8d4648a0c1e959672d6dec7d50e7f5a8400bfc0ec94086a"]
      - values: {"a":1,"b":100}
        answers: ["sha256:1e50285b46a2f686b95dee655fc9ea8379651bb4b64fd03f3d926dd0f55802b1","sha256:6e1f169a302c33a790bd5ed155247d441f1aaa5a5a8bad931bfcced287e9f182","sha256:1f20e41f1f9aa290133b5d8592f61fd32e2be3874d4496ee3792c239f0d1d643"]
      - values: {"a":26,"b":80}
        answers: ["sha256:120d0a718868714dd787aa902a3aaf4b795a478bd1c025f4936882e4ac7836e2","sha256:355a38b3b951bc441b1b729c10222ba5f16e9cbb4eb602578b525d8af4946795","sha256:4d52ccba3861ed68ac282b0f7493d195815dbbe969652a582734cb06a4fb743b"]
      - values: {"a":0,"b":30}
        answers: ["sha256:1c3462236b4126796134ef2703199029708be95bcfe5e82a2e4b955fa420d06e","sha256:b4934ede8bf895a03c1a9370600242023191bb1da42a20a2b0764fe6844f2620","sha256:7684e54dd67daadbaa96d6c34692ebe6c4abd014d5e2caf119a88d3f6822980b"]
      - values: {"a":49,"b":64}
        answers: ["sha256:55775428ca2fccbbae0d1e7e72822572ade8fbc87fe4462b4716850dbe43caad","sha256:fb9c07fece387834b24c282fbce8be3e34ccd87a7ede75927698a8df7d43d4f7","sha256:9ae46fe056da7e55941c7f949c4bcbd25895883a5f1ddc68b1bb7c9eaa329dff"]
      - values: {"a":17,"b":200}
        answers: ["sha256:11d5051a0d9f1e898cb5118f739a8fa5ed10921df0f0fc4662619f83dfab518b","sha256:d038461566e572f64989f50244c389a83d9ccc1ffef161ae8413704c725c09e8","sha256:3c6286729f525ac8485979a0a888f52078561c01da2bf54f609bc150e119012d"]
  - id: imagen-interseccion
    tier: 2
    type: opcion
    prompt: |
      Sea $f : X \to Y$ y $A, B \subseteq X$, $C, D \subseteq Y$. ¿Qué afirmación es correcta?
    options:
      - |
        $f(A \cap B) = f(A) \cap f(B)$ para toda $f$
      - |
        $f(A \cap B) \subseteq f(A) \cap f(B)$ para toda $f$, con igualdad si $f$ es inyectiva
      - |
        $f(A) \cap f(B) \subseteq f(A \cap B)$ para toda $f$
      - |
        $f^{-1}(C \cup D) \subsetneq f^{-1}(C) \cup f^{-1}(D)$ para alguna $f$
    answers: ["sha256:409e98bb482b906031a254667080ca8f5fccb2138fb04ce21d63135812366664"]
  - id: inversa-composicion
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Sean $f, g : \mathbb R \to \mathbb R$, $f(x) = {{a}}x {{b}}$ y $g(x) = {{c}}x {{d}}$. Calcula $(g \circ f)^{-1}({{y}})$.
    variants:
      - values: {"a":2,"b":"+ 1","c":3,"d":"- 4","y":23}
        answers: ["sha256:db3c4a113df2598496ee414e9938f6b6761209f2bbfa13fdac26ea1ce5442af5","sha256:c8daacfc9b532ee3129a5b178df98bbb6301eca502d7ef13abcad01f8091ff97","sha256:a2e560f2d5f4691962cb0b82fac581d794a27c6143128f64cc37fb63660821cd"]
      - values: {"a":5,"b":"- 2","c":2,"d":"+ 1","y":7}
        answers: ["sha256:a9a8e89b81ae8bc077d1cef43cb593c44d657aab272da5a80824a19369217be2","sha256:8b6e72641160e590c1529d9eee146e8d45773c5a6bf34b9d3df0d210bf81fac3","sha256:c11d79f5907baf3e8d531fdb544504acbafaab88ed0e5b7fc50cb3cdd659864a"]
      - values: {"a":-3,"b":"+ 4","c":2,"d":"+ 5","y":-1}
        answers: ["sha256:b027ddcdcd74ba148b217e20060aadff40d73f15143543c25fa5ea0d805c61cd","sha256:d30149f3a3eae39b0a7f255b8407142ad0f8cb524571c3e5aa236f4362c0b6d4","sha256:fe0d8c752a1ca4d26865c783ea3bdb4d113aa0afb13fbc39b8dffb22ef2612ec"]
      - values: {"a":4,"b":"+ 0","c":-1,"d":"+ 6","y":-14}
        answers: ["sha256:727d03064c869d60b8b3fc4224762ec8b3c342035351163086fbc463e871fbf7","sha256:2bfe42bfc533b5070fd873a1d5b4ad241dee13e722740f6b4c1a33fb3f716b8a","sha256:c7fdf767bed49d971310c654195f571736e879b24af73933ef0a881fba7a1192"]
      - values: {"a":3,"b":"+ 7","c":3,"d":"- 1","y":20}
        answers: ["sha256:0254b6c94419087a5522bba69d28398a5e329bdccb3a422ebd4cd24bc43a92d7","sha256:e6155c9e34b81412d7b9386fde94550df6d7f129f6a68933a415d1efddbc1a5d","sha256:96db6f8e6c06a48f81d1b792eeb9feada3fe861e464cf61f5c0c0d0ff197799a"]
      - values: {"a":-2,"b":"- 1","c":5,"d":"+ 3","y":33}
        answers: ["sha256:0bb9f5f6ee7f5541fffe0312e2a75634997ba46a6994f923eb784c6917a62fbe","sha256:378fdad5e2db951cca8af6c9438e88921b6a5b7a2bbc15fe396169b906caaf41","sha256:92da6007f253a4638f1baeb14e0f9c12bb0c6896192dabea681148b9d6f3c799"]
  - id: partes-del-producto
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Si $|A| = {{m}}$ y $|B| = {{n}}$, ¿cuántos elementos tiene $\mathcal P(A \times B)$?
    variants:
      - values: {"m":2,"n":3}
        answers: ["sha256:9dead0a3ac6fb115b9ce14959ca50fb3e71eb49ce6f4d577d2c7d8b223bdc522","sha256:6345a7b7143375d3705d8f68d77393f274a851a4910ff6826126ae416600c08d","sha256:bde6659458c9251ba5a1ccc089bdfae0d1afc094768e998171984cfdf2d59eb6"]
      - values: {"m":1,"n":5}
        answers: ["sha256:8b2ae466874da45cd8ea25ceed5caa72c1d326b3c0632b0b8e04621b09448c2c","sha256:46393aaecaf366b5b3b7289b02bb917a11a385261268bbcba0debce6658c6efa","sha256:f8086c6f6ced3992c17f1a541c7e0647c18968fdb91331f45c9f69846c101cae"]
      - values: {"m":3,"n":3}
        answers: ["sha256:37501cd034034c8da45ce5b40459977e870f0f1f072e39b15a4f3feff7fa740a","sha256:6292bc6742e4256f0802c8085a7d4d6764037bef8bfab9228b15ff88f693a321","sha256:07d1e1eec362a59e4b8c4f7941915628f96071a73ed45818941b900bb972dc3b"]
      - values: {"m":2,"n":5}
        answers: ["sha256:42772c741698c5421be77ab58c0a3df0e444f4b9726bed960e6e88946236b644","sha256:402ac812fb5b6773408658a5a3620c0731736381ba28076958e5ba250040eb60","sha256:d6be2051a191862844458e25e687304f1e4daeb26592ef69eea7233ca0b852bc"]
      - values: {"m":4,"n":4}
        answers: ["sha256:5c72f0e4082e2e8e847e26524efc43f7ffea366edab48176430b6225df039116","sha256:99e3583994f0420de27441d592fa912d78f99398c75b87802527dadeae44bd46","sha256:e9eb74f4891e0291c53e413385a6d10db72f6cbc904b13161c4cc65cf5b9bd41"]
      - values: {"m":3,"n":1}
        answers: ["sha256:3d46a63795c93925021a76f29ddcfc59212f4533223e5e0b6ac7f1455d5217ed","sha256:d55e9af0e7438b7481147789c96090b0c2516f8a46cf521e589500004b322c7a","sha256:b889b5aaf53f17060ee904ea63d9f76d1df35bc0e2aad4411dbe739377137e04"]
  - id: representantes-entero
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En la construcción de $\mathbb Z$ como clases de pares de naturales, $(a, b) \sim (c, d) \iff a + d = b + c$, y la clase de
      $(a, b)$ representa el entero $a - b$. ¿Cuántos pares $(a, b)$ con $a, b \in \{0, 1, \dots, {{N}}\}$ representan el entero
      ${{k}}$?
    variants:
      - values: {"N":10,"k":"3"}
        answers: ["sha256:819a7d428396abafa55188d725f539a057141c3dc4809324cf8a8b77038eb439","sha256:7aea9838ab7b647b9fb1c19a4b644223f202d257a69138a3e0279ea910b3e26a","sha256:1217e8a8e6e2d876d3cd7c202d23687b8792fd342c46e3fe6b562066c032ea8e"]
      - values: {"N":20,"k":"-5"}
        answers: ["sha256:810ba914b671388ad2d0e3944d39288de99a3f945496d077022cfd8967c2fb68","sha256:0f13dadb0b3500768faaa6eabfdc30140afedd569bcd13283019de7f35177e0a","sha256:9cbcb852d87c434af0e27f08c808b30f773dadee6b54fa70d3ad8ae1ae5101b5"]
      - values: {"N":15,"k":"0"}
        answers: ["sha256:7aa7c58bf39ac5d4246775a63506aaaf4dc1e3700a3b6f94613bfe0bed7a3749","sha256:0bbb510cd3c05a5932d3bea18031287640a23ffd1b3174beb1fd73155bd47796","sha256:ea50cfde1fb82fa065f913ebc902cdd3ffde5a3929707d37e2af25b902372ccc"]
      - values: {"N":8,"k":"-8"}
        answers: ["sha256:7baaf8df7bba1a94870ae99c10546f8e4fe18abf0225cc316df6cc97e57815ab","sha256:9ff13025053ee4dce5ba2a0b251a4a5ee883396585eb3fdbc40e61f16e6e8a41","sha256:df421f6f568429f741e421ac36ace8fb4cc8c03ee4986707d134e9494d7f7832"]
      - values: {"N":30,"k":"12"}
        answers: ["sha256:96e98eea7c2371f65b4106f1c1fdbcbeeba143b2f1abeee082483ef6e489fbad","sha256:61d6d2db8246318ca56c68fed1f12ec38a2738bb1b4ec004499133fc0f8ca2a5","sha256:3ec3862966226c812395ad780df182c23cc3a7db24eaa6251ed6218c470a37f3"]
      - values: {"N":12,"k":"7"}
        answers: ["sha256:1bbb32931e38695ad7d08d3db46a5c73f2d2bb6fa74ed2250ff46bb7bc1e9363","sha256:1bdb6b15af90ce990129bfb64e220ef516afe2b08353f04ff5326015af212f6a","sha256:4b95efc25d3e7f8450a33d4db739525decb5d40239cf8c81df3385f4542050e5"]
  - id: representantes-racional
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En la construcción de $\mathbb Q$, $(p, q) \sim (p', q') \iff pq' = p'q$. ¿Cuántos pares $(p, q)$ con
      $1 \le p, q \le {{N}}$ representan el racional $\dfrac{{{a}}}{{{b}}}$?
    variants:
      - values: {"a":3,"b":7,"N":100}
        answers: ["sha256:e2b48a3960568d91b26735c69da13ae8b9a2413df79dd30a8bde4de929892071","sha256:72ccdaf33edcaa46e76e78793789ee33e19f84aa012babaab48e571cbb99a42a","sha256:5aa5fd788ac403c2ca40b2159838c77b9bf0bf87d4d070c0d34ee784c24ad3ae"]
      - values: {"a":5,"b":2,"N":60}
        answers: ["sha256:690d526e279c373d862b7eaed51cf6c358ae121657ae216e00b7f70645a1b28f","sha256:507f9dde86ecbb5bdefea9db4b8cf7990d6d044a5c7d1d000f99a8addcbd45a0","sha256:5879db773e2ada156747b673465e4f8a488459fa1fc13e89f1042b2aa4450fb7"]
      - values: {"a":1,"b":2,"N":30}
        answers: ["sha256:ba847d416e7219224213ccfb869ed27fed22ecb4c2a7a18420a34fe010b78da9","sha256:08b99c1afc029abd63ebbf5319345d38f2d18c7a3879714a48fc80c9f5daeef1","sha256:580cd7e20c2925ec4bb434681cbe10cb09b77c1ed1644d03c8f6dd57350ef0ae"]
      - values: {"a":4,"b":9,"N":200}
        answers: ["sha256:f2b628ad79e80a61710fc7d43a7a8e50a47807a7bbedaf06e77a956a38463bcf","sha256:eec4fcc9468cd8e72b2db860fc148de0c3dfd6fc8e03a82164e9a9bcba430e27","sha256:a05e75bb85a7b5d7b6219f886bbf4e4b10afc4151e89197cbe383957aafa4b1a"]
      - values: {"a":7,"b":3,"N":80}
        answers: ["sha256:ae5458bc1f5df070d3d1e837107fb80fc0ba1f34b87a1c33c48e67ac0cc90bf0","sha256:12b8a94f2bc44ce6924800a46c42ec6a96a8cd84607c67d2304dcbcfc0ce886d","sha256:f4a18a9656a8e3749a68dc21779418c3783898e5addf77390bd9fd6cbe49eab9"]
      - values: {"a":2,"b":5,"N":1000}
        answers: ["sha256:bec5c1ac1aec6fcdb2075059f2714383deb78b386173bc2dcd3cf54491bc4590","sha256:d1ae42e712f31c50cb1c62d1ff777c02a2203bff9f1939c29acff9187de1589b","sha256:f8fb0c6980e52f16237e499533fe86c6fe3c6cd201cafa49815d498bc1eb6ab3"]
  - id: bezout
    tier: 2
    prompt: |
      Calcula $d = \operatorname{mcd}({{a}}, {{b}})$ y los enteros $x, y$ con ${{a}}x + {{b}}y = d$ y $0 \le x < {{b}}/d$ (con esa
      condición son únicos). Respuesta: `d;x;y`.
    variants:
      - values: {"a":252,"b":198}
        answers: ["sha256:1b9be9867e99b528ccd425eadbe7dbd5671a134266d055ef4c0c37913e46a84c"]
      - values: {"a":161,"b":28}
        answers: ["sha256:57c713f928cbbb34aa2cc8c7bf5d69a2ea4103e24963d8d257eb544bb4f6df68"]
      - values: {"a":1071,"b":462}
        answers: ["sha256:22f1919ebcdf2fc51b63e20549d0c2e01c9313ec852b088564af855f347cb02b"]
      - values: {"a":99,"b":78}
        answers: ["sha256:dd1b9cfda4ff04e2b5f048373fa5e77a27884ab14a120b6a60bfcbc686f0c643"]
      - values: {"a":385,"b":168}
        answers: ["sha256:ce59491719cdb4498c0ee404d0e3ea6ad639ff46ca55d4c50886557be5e6d607"]
      - values: {"a":610,"b":377}
        answers: ["sha256:80eff52e72ad83d92b36fe0a0fb279006ba2da10071bb3ec04b35a90620ed163"]
  - id: complejos-como-pares
    tier: 1
    prompt: |
      Con $\mathbb C$ definido como $\mathbb R^2$ con el producto $(a, b)\cdot(c, d) = (ac - bd,\ ad + bc)$, calcula
      $({{a}}, {{b}})\cdot({{c}}, {{d}})$. Respuesta: `p;q`.
    variants:
      - values: {"a":3,"b":2,"c":1,"d":4}
        answers: ["sha256:5859e2e479d374660228b11559ffa7f0526fd1a9e9c5eafddd77c353ffa604aa"]
      - values: {"a":-1,"b":5,"c":2,"d":-3}
        answers: ["sha256:4c1e2cd3ac15b29f931e8de5098bd28283a211af3926b47a8608b1c6db7116a1"]
      - values: {"a":4,"b":-1,"c":-2,"d":-2}
        answers: ["sha256:f9f91048fa6625eede06c7c44879c76ca047e1ec436482861f4468982ab03120"]
      - values: {"a":0,"b":3,"c":5,"d":1}
        answers: ["sha256:ae7fd29254313e426ea1eece5babf5a791c9fe610b88691044dd277d404896f8"]
      - values: {"a":2,"b":2,"c":3,"d":-3}
        answers: ["sha256:bc87c4e239eecc2e3a62eada8d0a15d9b5cd2abc9a19078b6c55ae8407d07808"]
      - values: {"a":-3,"b":-4,"c":1,"d":2}
        answers: ["sha256:3661c358454c8110479c11f83cf9cb25f8eccfbc8d97abaa295c145ce16c7558"]
  - id: arquimediana
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La propiedad arquimediana dice que, dados $\varepsilon > 0$ y $M$, existe un natural $n$ con $n\varepsilon > M$. Con
      $\varepsilon = {{eps}}$ y $M = {{M}}$, ¿cuál es el **menor** $n$ que lo cumple?
    variants:
      - values: {"eps":"0{,}003","M":7}
        answers: ["sha256:c0e0a35a6a96604a22f8f5a61db85b7f7f08b77b267bf51442a6a142bda36990","sha256:7ab5fae7c92ec5bd7000f9de86a614a89203e1a103e30807959246cc8bc59528","sha256:ca686c3bb7981f24cdc77a9c20478da82a2c9e3efa74b58bb8e40193dcf97dfc"]
      - values: {"eps":"0{,}005","M":5}
        answers: ["sha256:5570f6d4418e2a6e2f8a6b681609aab42bf82875fb971b6b81e532bb8c9c27a6","sha256:899ce5722c69602d672641523f38efeecdd26409cedec9e16d29413025508737","sha256:ad57679b35bf734f2f1d854e140f39c61af875824466aff5e9123f16e8b1e20d"]
      - values: {"eps":"0{,}07","M":12}
        answers: ["sha256:41884c45d02ca571c3429ee6af58c5b465fc1fca19ce7d2e7a7a027d6475e8db","sha256:b2d5f5ee20c185f94b40295fa58c88a4608ae2369c216fc61a3ea43594734531","sha256:848fb470527d57e87501d5921260a0cf9149bb79bffa6456740a10f4e69e3437"]
      - values: {"eps":"0{,}3333333333333333","M":50}
        answers: ["sha256:0230ed98fe00705552a9e6bc004e167bac49f20d814148ac82b70693d4f47edc","sha256:ce0946cc0e80b251094f66de5ea6fdaf073a26860bd6642ce49667a4fde8ea3b","sha256:502e76f01c072d580ce10bf50464e64076bbd56c208a07958a7229476cd45a99"]
      - values: {"eps":"0{,}0009","M":2}
        answers: ["sha256:ddf0d1c7529f3ab5d4d2d2298a1026269b2d6879c08c709b15200ee86ed9d36b","sha256:371bb3c305c0b1f1cf37685f7e998e90ac80c0211ab11572043aa3e26b366b58","sha256:78220bf3e04fbc32ff5a062354239c21e07aa1e6995168d55a546b8b8c3c5a25"]
      - values: {"eps":"0{,}013","M":40}
        answers: ["sha256:92f4b94a867f43434ae559fc2e11a6190d90262290a79b59456af3d089ef64c0","sha256:6db1b3166d92854f083da69676f321b04ec586f8fd32df2332d0def98de597ca","sha256:d65751f6f54f7500f534fe291bc3509757ac8c5eb5244ff50e473c1346ec91e7"]
  - id: q-sin-supremo
    tier: 3
    type: opcion
    prompt: |
      ¿Cuál de estos subconjuntos de $\mathbb Q$, acotados superiormente, **no** tiene supremo **dentro de** $\mathbb Q$?
    options:
      - |
        $\{x \in \mathbb Q : x < 1\}$
      - |
        $\{1/n : n \ge 1\}$
      - |
        $\{x \in \mathbb Q : x^2 < 4\}$
      - |
        $\{x \in \mathbb Q : x > 0,\ x^2 < 3\}$
    answers: ["sha256:e1cd7b0099f6b788430d238ca6a61889c4dc25e73748baa9d9b66a546620a98d"]
  - id: transitividad-racionales
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** En $\mathbb Z \times (\mathbb Z \setminus \{0\})$ se define $(a, b) \sim (c, d) \iff ad = bc$. Demuestra que
      $\sim$ es **transitiva** e indica exactamente dónde se usa que los segundos componentes no son $0$.
    sealed: "gz64:H4sIAAAAAAACCo1TQW7bMBD8ykDgwTZYw85RgA9F2mOBFrm17IEiVw5TiiuTYhA3yGP6gB6K3Hr1xwpKcWKnQNEbuVzNzO6M7qvEPg+OQ1VXV7nnsNUdJ4iZlmjmUCq5DjMjYecCe4jpeKyTRDsXEpRgybgoIbTFBo0Zm02LDSwJCcMBopGwEi2UCrTDSizxKVOkjpMKQpfehsRSBRU+ZD+43jszivEafXQdRQ23zdpbbdFzhGhFXQjHL00rlvjIsXQn2uZgtTxV4DNtGaIZK41S0pJY4m06/CzkE8bYeDKLVUrOdIs3aGiOTZFc1F1yxxD2eY4yqlKdHq6bBp8FAmNwFAjW3brEcUSEociYJQdxtx+xJCgMHAwliLuxAoaY3uYSu0xWQzzRj9VahVfGTAYsC3/jtfmWdllHEkXlYvHu8BgsIRFy0ovFqeQaFEAeh99+cB2j14kleh01kut671pndISwYokrVyB6ip0bXDFB2Cf9rfZe1xCztcT6WdNKYlXCUsSO5+PDRekSmPW5jLxWylgeVtjgeBw3uZou68IxHS/KOvqyvhemwMMZ6uQ9JS5TiZUokunO+LwnVZbguZgQuHNB22LJspJVzE10pqq/3FcmuoGi46qu3icTXUPwOuHa9YfHgZJLL8k+iRX2hY6bGxrcLeMlxJWs+hwGTlW9fpBn8JfcNS7oEf4YZ0q41mnQ8J62OqLs+Dx4SC6AYjxKP6Jf/IUexqGL5cG+juku0/9G9V8kV3T4pb2GnQI2xmD6xadkYFYuOZTaEDXdUNd7BiPq7xwOP4Jlz/PzJX19+AO+m65WjAQAAA=="
  - id: r-clase-mod-3
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas clases tiene en $\mathbb Z$ la relación «$a \sim b \iff 3 \mid a - b$»?
    answers: ["sha256:937e150cb47f05699ba836f05eaae7b2e67f4f09231a422a4ed4129710afe951","sha256:20766df0ab0888a260991fe527006e5fa304f4135301a12731b79e002c4ac241","sha256:e885853aa33eef4b132ac8e55cf5617ae5e388ede9069660e00a70bdb18a6f81"]
  - id: r-orden-total
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos órdenes es **total** (dos elementos cualesquiera son comparables)?
    options:
      - |
        $\le$ en $\mathbb R$
      - |
        La divisibilidad en $\mathbb N$
      - |
        La inclusión entre subconjuntos de $\{1, 2\}$
      - |
        Ninguno de los anteriores
    answers: ["sha256:39792a0ff541aab28399b6ee6b88099b99edaf3dde2bd8ef38290eee3f7dba5d"]
  - id: r-supremo-no-maximo
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el supremo de $\left\{ 2 - \dfrac{1}{n} : n \ge 1 \right\}$? (¿Es también máximo?)
    answers: ["sha256:86c09c43a816a9a161b350de17daf480fc2a1e1d5c6ff17166aa770e5ab567a6","sha256:c120158a263c46ef206d9d9e2d75b8eef8c3effd772b09e85a9b506cb685e484","sha256:bad5a24f9589cf2b6dd388ccd95ab9f265ca34af3a99a03e73b4dd48beb9cd91"]
  - id: r-sucesor-peano
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué afirma el **axioma de inducción** de Peano?
    options:
      - |
        Que todo número tiene un anterior
      - |
        Que si un conjunto contiene al $0$ y al sucesor de cada elemento suyo, contiene a todos los naturales
      - |
        Que la suma es conmutativa
      - |
        Que hay un número máximo
    answers: ["sha256:019055c72e472b760a32e0a3be7ed95547bf51c7982a9c290f392f722851a324"]
  - id: r-q-numerable
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es cierto sobre los cardinales de $\mathbb Q$ y $\mathbb R$?
    options:
      - |
        $\mathbb Q$ no es numerable porque es denso
      - |
        $\mathbb R$ es numerable
      - |
        $\mathbb Q$ es numerable y $\mathbb R$ no
      - |
        Los dos tienen el mismo cardinal
    answers: ["sha256:e75d9086eacfffe130c52f4a941ea8cebd0d96d87052e41a90f31a9077a102e1"]
  - id: r-i-cuadrado-pares
    tier: 1
    review: true
    prompt: |
      Con el producto de pares $(a, b)(c, d) = (ac - bd, ad + bc)$, calcula $(2, 1)\cdot(2, 1)$. Respuesta: `p;q`.
    answers: ["sha256:2b2ae0ddb1ad07ad30f68dbf8869395377eb9bc264d7da773d28f5934f0f5e59"]
  - id: r-c-no-ordenado
    tier: 3
    type: opcion
    review: true
    prompt: |
      ¿Por qué no se puede definir en $\mathbb C$ un orden compatible con la suma y el producto (un cuerpo ordenado)?
    options:
      - |
        Porque $\mathbb C$ no es un cuerpo
      - |
        Porque $\mathbb C$ no es numerable
      - |
        Porque $|z|$ no es un número real
      - |
        Porque en un cuerpo ordenado todo cuadrado no nulo es positivo, e $i^2 = -1$
    answers: ["sha256:a927476c41b71c7b5a39a12803d54c51f44ebcad42bb753e3a8a3ff85ee563d9"]
---

# Conjuntos y números: relaciones, aplicaciones, cardinalidad y construcción de ℕ, ℤ, ℚ, ℝ y ℂ

Hasta ahora has **usado** los números. En el grado se **construyen**: se parte de muy poco (los naturales y unas reglas) y,
con dos herramientas, las relaciones de equivalencia y el axioma del supremo, se fabrican los enteros, los racionales, los
reales y los complejos. Así se sabe exactamente qué se puede afirmar de cada conjunto y por qué. Es la segunda mitad de la
asignatura «Lenguaje matemático, conjuntos y números» de primero de la UNED; la primera (lógica, demostración, conjuntos)
está en [[mat-logica-demostraciones]].

## Objetivos

Al terminar sabrás:

1. Trabajar con relaciones de equivalencia (clases, conjunto cociente) y de orden (máximo, maximal, cotas, supremo).
2. Calcular imágenes y preimágenes de conjuntos y demostrar propiedades de la composición y la inversa.
3. Comparar cardinales: numerables y no numerables, y la idea del teorema de Cantor-Bernstein.
4. Reconocer las propiedades de una operación interna y las estructuras de grupo, anillo y cuerpo.
5. Explicar cómo se construyen $\mathbb Z$ y $\mathbb Q$ como conjuntos cociente y por qué la definición de sus operaciones
   es correcta.
6. Usar el axioma del supremo, la propiedad arquimediana y la densidad de $\mathbb Q$, y ver $\mathbb C$ como $\mathbb R^2$
   con un producto.

## Qué debes dominar antes

[[mat-logica-demostraciones]] (conjuntos, relaciones, funciones, inducción), [[mat-numeros-reales]] (racionales e
irracionales, valor absoluto) y [[mat-numeros-complejos]] (forma binómica).

> [!question] Test de entrada
> 1. ¿Qué tres propiedades definen una relación de equivalencia?
> 2. Si $f(x) = 2x + 1$, ¿qué $x$ cumple $f(x) = 9$?
> 3. ¿Es $\sqrt 2$ racional?
>
> Respuestas: reflexiva, simétrica y transitiva; $x = 4$; no.

## 1. Para qué sirve

- **Leer el resto del grado**: análisis ([[mat-analisis-real]]) empieza por el axioma del supremo; álgebra
  ([[mat-estructuras-algebraicas]]) por grupos, anillos y conjuntos cociente; topología por aplicaciones y preimágenes.
- **Programar con números**: los enteros de un ordenador son clases módulo $2^{64}$, los racionales exactos de una
  biblioteca son pares $(p, q)$ simplificados, y los flotantes son un subconjunto finito de $\mathbb Q$ (no de $\mathbb R$).
- **Criptografía**: aritmética modular, inversos y el algoritmo de Euclides extendido son la base de RSA
  ([[mat-teoria-numeros]]).

## 2. Relaciones de equivalencia y conjunto cociente

> [!practico]
> Una relación de equivalencia es una forma de decir «para lo que me interesa, estas cosas son iguales». Para un reloj, las
> 13:00 y la 1:00 son la misma hora; para un monedero, dos monedas de 50 céntimos y una de un euro valen lo mismo. Agrupar
> lo que es «igual» en montones forma las **clases**, y el conjunto de montones es el **conjunto cociente**. Así se
> fabrican objetos nuevos: «la hora del reloj» no es un número, es un montón de números.

Sea $\sim$ una relación de equivalencia en $A$ (reflexiva, simétrica y transitiva; ver [[mat-logica-demostraciones]] §7). La
**clase** de $a$ es $[a] = \{x \in A : x \sim a\}$ y el **conjunto cociente** es $A/\!\sim\; = \{[a] : a \in A\}$. Las clases
forman una partición de $A$, y la **proyección** $\pi : A \to A/\!\sim$, $\pi(a) = [a]$, es sobreyectiva.

**Ejemplo resuelto (congruencias).** En $\mathbb Z$, $a \equiv b \pmod m$ si $m \mid a - b$. Hay $m$ clases,
$[0], [1], \dots, [m - 1]$, y el cociente se escribe $\mathbb Z/m\mathbb Z$. Con $x \sim y \iff x^2 \equiv y^2 \pmod 5$ en
$\{0, \dots, 20\}$, los cuadrados módulo $5$ solo toman los valores $0, 1, 4$ ($0^2, 1^2 = 4^2 \equiv 1, 2^2 = 3^2 \equiv 4$),
así que hay **3** clases.

**Operaciones en un cociente: «bien definida».** Para sumar clases de $\mathbb Z/m\mathbb Z$ se define $[a] + [b] = [a + b]$.
Hay que comprobar que el resultado no depende de los representantes elegidos: si $a \equiv a'$ y $b \equiv b'$, entonces
$m \mid (a - a') + (b - b') = (a + b) - (a' + b')$. Esta comprobación aparece cada vez que se define algo sobre clases, y
olvidarla es el error más típico del tema.

## 3. Relaciones de orden

> [!practico]
> Un orden dice qué va «antes» o «debajo». En una lista de números, siempre puedes comparar dos (orden **total**); entre
> cajas, unas caben dentro de otras y otras no se pueden comparar (orden **parcial**). En una empresa puede haber varios
> jefes que no tienen a nadie por encima (**maximales**) sin que haya un jefe supremo de todos (**máximo**).

Un **orden** (parcial) $\preceq$ en $A$ es reflexivo, antisimétrico y transitivo; es **total** si dos elementos cualesquiera
son comparables. Para $S \subseteq A$:

- $M$ es **cota superior** de $S$ si $s \preceq M$ para todo $s \in S$;
- $m$ es **máximo** de $S$ si es cota superior y está en $S$ (si existe, es único);
- $m \in S$ es **maximal** si no hay ningún $s \in S$ con $m \prec s$ (puede haber varios);
- el **supremo** $\sup S$ es la **menor** cota superior, si existe. Del mismo modo, cota inferior, mínimo, minimal e
  **ínfimo** $\inf S$.

En un orden total, maximal y máximo coinciden; en uno parcial, no. Con la divisibilidad en $\{2, 3, \dots, 10\}$, los
maximales son $6, 7, 8, 9, 10$ (ninguno divide a otro del conjunto) y no hay máximo.

**Ejemplo resuelto (supremo que no es máximo).** $S = \{1 - \frac1n : n \ge 1\} = \{0, \frac12, \frac23, \dots\}$. Todo
elemento es $< 1$, así que $1$ es cota superior. Es la **menor**: si $c < 1$, tomando $n > \frac{1}{1 - c}$ se tiene
$1 - \frac1n > c$, luego $c$ no es cota. Así $\sup S = 1$, pero $1 \notin S$: no hay máximo. El ínfimo es $0$ y sí es mínimo.

## 4. Aplicaciones: imagen, preimagen, composición e inversa

> [!practico]
> Una aplicación es una máquina que a cada entrada le da una salida. La **imagen** de un grupo de entradas es lo que sale
> de ellas; la **preimagen** de un grupo de salidas responde a la pregunta inversa: «¿qué entradas acaban ahí?». La
> preimagen existe siempre, aunque la máquina no se pueda deshacer: con $f(x) = x^2$, las entradas que dan entre $1$ y $4$
> son $-2, -1, 1, 2$.

Para $f : X \to Y$, $A \subseteq X$ y $C \subseteq Y$:
$f(A) = \{f(a) : a \in A\}$ (imagen) y $f^{-1}(C) = \{x \in X : f(x) \in C\}$ (preimagen o imagen inversa). La preimagen
respeta todas las operaciones:

$$
f^{-1}(C \cup D) = f^{-1}(C) \cup f^{-1}(D), \quad f^{-1}(C \cap D) = f^{-1}(C) \cap f^{-1}(D), \quad
f^{-1}(Y \setminus C) = X \setminus f^{-1}(C),
$$

pero la imagen solo cumple $f(A \cup B) = f(A) \cup f(B)$ y $f(A \cap B) \subseteq f(A) \cap f(B)$. La inclusión puede ser
estricta: con $f(x) = x^2$, $A = \{-1\}$ y $B = \{1\}$, $f(A \cap B) = \varnothing$ y $f(A) \cap f(B) = \{1\}$.

> [!formal] Con rigor: la igualdad con $f$ inyectiva
> Si $f$ es inyectiva, $f(A \cap B) = f(A) \cap f(B)$. *Demostración.* Sea $y \in f(A) \cap f(B)$: $y = f(a) = f(b)$ con
> $a \in A$, $b \in B$. Por inyectividad, $a = b$, luego $a \in A \cap B$ e $y \in f(A \cap B)$. La otra inclusión vale
> siempre: si $x \in A \cap B$, $f(x)$ está en $f(A)$ y en $f(B)$. $\blacksquare$

**Composición e inversa.** $(g \circ f)(x) = g(f(x))$. La composición es asociativa pero no conmutativa. Si $f$ y $g$ son
biyectivas, $g \circ f$ también lo es y $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ (se deshace en orden inverso, como
quitarse los zapatos antes que los calcetines). *Ejemplo:* con $f(x) = 2x + 3$ y $g(x) = 5x - 1$, $(g \circ f)(x) = 10x + 14$
y $(g \circ f)^{-1}(y) = \frac{y - 14}{10}$.

**Aplicaciones idempotentes.** $f : A \to A$ es idempotente si $f \circ f = f$: aplicarla dos veces es como aplicarla una (un
redondeo, una proyección). Equivale a que $f$ deje fijo cada punto de su imagen. Con $|A| = 3$ hay $10$: si la imagen tiene
$k$ elementos, se eligen ($\binom 3k$ formas) y cada uno de los otros $3 - k$ elementos va a uno de esos $k$, así que
$\binom31 1^2 + \binom32 2^1 + \binom33 3^0 = 3 + 6 + 1 = 10$.

## 5. Cardinalidad

> [!practico]
> Para saber si en un cine hay tantas butacas como personas no hace falta contar: si cada persona se sienta en una butaca y
> no sobra ninguna, son tantas como tantas. Con conjuntos infinitos se compara así, emparejando. Lo sorprendente es que hay
> infinitos «más grandes» que otros: los números reales no se pueden emparejar con los naturales.

Dos conjuntos tienen el mismo **cardinal**, $|A| = |B|$, si existe una biyección entre ellos; $|A| \le |B|$ si existe una
inyección de $A$ en $B$. Un conjunto es **numerable** si tiene el cardinal de $\mathbb N$.

- $\mathbb Z$, $\mathbb N \times \mathbb N$ y $\mathbb Q$ son numerables ([[mat-logica-demostraciones]] §8).
- Una unión numerable de conjuntos numerables es numerable.
- $\mathbb R$ no es numerable, y $|\mathcal P(A)| > |A|$ para todo $A$ (Cantor).

> [!formal] Con rigor: $[0, 1)$ no es numerable (diagonal de Cantor)
> Supongamos una lista $x_1, x_2, \dots$ de todos los números de $[0, 1)$, cada uno con su desarrollo decimal
> $x_n = 0{,}d_{n1}d_{n2}d_{n3}\dots$ (sin colas de nueves, para que sea único). Definimos $y = 0{,}e_1e_2e_3\dots$ con
> $e_n = 5$ si $d_{nn} \neq 5$ y $e_n = 4$ si $d_{nn} = 5$. Entonces $y \in [0, 1)$, no tiene cola de nueves y difiere de
> cada $x_n$ en la cifra $n$-ésima, luego $y$ no está en la lista: contradicción. $\blacksquare$

**Teorema de Cantor-Bernstein-Schröder.** Si hay una inyección $A \to B$ y otra $B \to A$, hay una biyección $A \to B$. Es
la herramienta práctica: para ver que $(0, 1)$ y $[0, 1]$ tienen el mismo cardinal basta con $x \mapsto x$ (inyección de
$(0, 1)$ en $[0, 1]$) y $x \mapsto \frac{x + 1}{3}$ (inyección de $[0, 1]$ en $(0, 1)$), sin construir la biyección.

## 6. Operaciones internas y estructuras

> [!practico]
> Una operación interna toma dos elementos de un conjunto y da otro del mismo conjunto, como sumar dos enteros. Las
> propiedades de siempre (el orden de los paréntesis no importa, hay un elemento que no cambia nada, todo se puede deshacer)
> tienen nombre, y según cuáles se cumplan el conjunto se llama grupo, anillo o cuerpo. Es como clasificar juegos por sus
> reglas: si conoces las reglas, sabes qué jugadas valen sin mirar las piezas.

Una **operación interna** en $A$ es una aplicación $* : A \times A \to A$. Puede ser **asociativa**
($(a * b) * c = a * (b * c)$), **conmutativa**, tener **elemento neutro** $e$ ($a * e = e * a = a$) y **simétricos** (para cada
$a$, un $a'$ con $a * a' = a' * a = e$).

- **Grupo**: operación asociativa con neutro y simétricos ($(\mathbb Z, +)$, las biyecciones de un conjunto con $\circ$).
  **Abeliano** si además es conmutativa.
- **Anillo**: $(A, +, \cdot)$ con $(A, +)$ grupo abeliano, $\cdot$ asociativa con neutro $1$, y distributiva
  ($\mathbb Z$, $\mathbb Z/m\mathbb Z$, los polinomios).
- **Cuerpo**: anillo conmutativo con $1 \neq 0$ en el que todo elemento no nulo tiene inverso para $\cdot$ ($\mathbb Q$,
  $\mathbb R$, $\mathbb C$, $\mathbb Z/p\mathbb Z$ con $p$ primo).

El estudio a fondo es [[mat-estructuras-algebraicas]]; aquí basta reconocerlas, porque cada construcción de este nodo
consiste en conseguir una estructura más rica que la anterior.

## 7. Los naturales: axiomas de Peano

> [!practico]
> Los naturales se pueden describir con muy poco: hay un primer número, el $0$, y cada número tiene un **siguiente**. Nadie
> tiene al $0$ como siguiente, dos números distintos tienen siguientes distintos, y si una fila de fichas de dominó cae
> empezando por la primera y cada ficha tira a la siguiente, caen todas. Con eso se definen la suma, el producto y el orden.

**Axiomas de Peano.** Hay un conjunto $\mathbb N$, un elemento $0 \in \mathbb N$ y una aplicación **sucesor**
$s : \mathbb N \to \mathbb N$ tales que: (1) $s$ es inyectiva; (2) $0$ no es sucesor de nadie; (3) **inducción**: si
$S \subseteq \mathbb N$ contiene a $0$ y $s(n) \in S$ siempre que $n \in S$, entonces $S = \mathbb N$.

La suma se define **por recursión**: $n + 0 = n$ y $n + s(m) = s(n + m)$. El producto, $n \cdot 0 = 0$ y
$n \cdot s(m) = n\cdot m + n$. Todas las propiedades (asociativa, conmutativa, distributiva) se demuestran por inducción a
partir de ahí, y el orden se define por $m \le n \iff \exists k\ (m + k = n)$. Se prueba además el **principio de buena
ordenación**: todo subconjunto no vacío de $\mathbb N$ tiene mínimo.

**División euclídea.** Para $a \in \mathbb Z$ y $b \ge 1$ existen $q, r$ únicos con $a = bq + r$ y $0 \le r < b$. (Existencia:
$r$ es el mínimo de $\{a - bq \ge 0\}$, que existe por buena ordenación.) De ella salen el **algoritmo de Euclides** y la
**identidad de Bézout**: $\operatorname{mcd}(a, b) = ax + by$ para ciertos enteros $x, y$.

**Ejemplo resuelto (Euclides extendido).** $\operatorname{mcd}(240, 84)$: $240 = 2\cdot 84 + 72$, $84 = 1\cdot 72 + 12$,
$72 = 6\cdot 12$. El mcd es $12$. Hacia atrás: $12 = 84 - 72 = 84 - (240 - 2\cdot 84) = 3\cdot 84 - 1\cdot 240$, es decir,
$240\cdot(-1) + 84\cdot 3 = 12$.

## 8. Los enteros y los racionales como conjuntos cociente

> [!practico]
> Un entero negativo es una deuda: «tengo $3$ y debo $5$» es lo mismo que «tengo $0$ y debo $2$». Los dos pares $(3, 5)$ y
> $(0, 2)$ describen el mismo $-2$. Del mismo modo, $2/3$ y $4/6$ son la misma porción de pizza escrita de dos maneras. Los
> enteros y los racionales se construyen exactamente así: como montones de pares que «valen lo mismo».

**Enteros.** En $\mathbb N \times \mathbb N$, $(a, b) \sim (c, d) \iff a + d = b + c$ (la idea: $a - b = c - d$ sin usar la
resta, que aún no existe para todos los pares). $\mathbb Z$ es el cociente; la clase de $(a, b)$ representa «$a - b$»: por
ejemplo, $[(3, 5)] = [(0, 2)] = -2$. Suma: $[(a, b)] + [(c, d)] = [(a + c, b + d)]$; producto:
$[(a, b)]\cdot[(c, d)] = [(ac + bd, ad + bc)]$ (piensa en $(a - b)(c - d)$). Se comprueba que están bien definidas, y
$\mathbb N$ se identifica con las clases $[(n, 0)]$.

**Racionales.** En $\mathbb Z \times (\mathbb Z \setminus \{0\})$, $(p, q) \sim (p', q') \iff pq' = p'q$. $\mathbb Q$ es el
cociente y la clase de $(p, q)$ se escribe $\frac pq$: $\frac23 = \frac46$ porque $2\cdot6 = 4\cdot3$. Operaciones:
$\frac pq + \frac rs = \frac{ps + qr}{qs}$ y $\frac pq\cdot\frac rs = \frac{pr}{qs}$. $\mathbb Q$ es un **cuerpo
ordenado**, y es el menor cuerpo que contiene a $\mathbb Z$.

> [!formal] Con rigor: la suma de racionales está bien definida
> Si $\frac pq = \frac{p'}{q'}$ (es decir, $pq' = p'q$), hay que ver que $\frac{ps + qr}{qs} = \frac{p's + q'r}{q's}$, o sea
> $(ps + qr)\,q's = (p's + q'r)\,qs$. Desarrollando, el lado izquierdo es $pq's^2 + qq'rs$ y el derecho $p'qs^2 + qq'rs$;
> como $pq' = p'q$, coinciden. (Basta cambiar un sumando; para el otro el argumento es el mismo.) $\blacksquare$

## 9. Los reales: el axioma del supremo

> [!practico]
> En la recta de los racionales hay «agujeros»: la diagonal de un cuadrado de lado $1$ mide $\sqrt 2$, que no es una
> fracción. Si te acercas a ella con $1{,}4$; $1{,}41$; $1{,}414$… todas esas aproximaciones son racionales, pero el punto
> al que se acercan no lo es. Los reales son la recta **sin agujeros**: todo lo que «tiende a algún sitio» tiene un sitio al
> que llegar.

$\mathbb R$ es un cuerpo ordenado que cumple el **axioma del supremo** (o de completitud): todo subconjunto no vacío y
acotado superiormente tiene supremo **en** $\mathbb R$. $\mathbb Q$ no lo cumple: $S = \{x \in \mathbb Q : x > 0,\ x^2 < 2\}$
está acotado por $2$, pero su supremo sería $\sqrt 2 \notin \mathbb Q$.

Consecuencias que se usan a diario en análisis:

- **Propiedad arquimediana.** Para todo $\varepsilon > 0$ y todo $M$ hay un natural $n$ con $n\varepsilon > M$. (Si no,
  $\{n\varepsilon\}$ estaría acotado por $M$; con $s$ su supremo, $s - \varepsilon$ no sería cota, así que
  $n\varepsilon > s - \varepsilon$ para algún $n$, y entonces $(n + 1)\varepsilon > s$: contradicción.) *Ejemplo:* con
  $\varepsilon = 0{,}01$ y $M = 3$, el menor $n$ es $301$.
- **Densidad de $\mathbb Q$.** Entre dos reales $a < b$ siempre hay un racional (se toma $n$ con $n(b - a) > 1$ y entonces
  algún $\frac mn$ cae entre ellos), y también un irracional.
- **Existencia de raíces.** $\sqrt 2 = \sup\{x > 0 : x^2 < 2\}$ existe en $\mathbb R$, y se demuestra que su cuadrado es $2$.

**Construcciones.** Hay modelos de $\mathbb R$ construidos desde $\mathbb Q$: las **cortaduras de Dedekind** (cada real es
el conjunto de racionales que quedan a su izquierda) y las clases de **sucesiones de Cauchy** de racionales (cada real es
una sucesión de aproximaciones, identificando las que se acercan entre sí). Ambas dan un cuerpo ordenado completo, y se
demuestra que es único salvo isomorfismo. En el grado basta con saber que existe y con usar el axioma.

## 10. Los complejos como pares de reales

> [!practico]
> Un complejo es un punto del plano, o una flecha desde el origen. Sumar es poner flechas una tras otra; multiplicar es
> girar y estirar. Para construirlos no hace falta «inventar» una $i$ misteriosa: basta tomar pares de reales y decir cómo
> se multiplican, y la $i$ aparece sola como el par $(0, 1)$.

$\mathbb C = \mathbb R^2$ con $(a, b) + (c, d) = (a + c, b + d)$ y $(a, b)\cdot(c, d) = (ac - bd,\ ad + bc)$. Es un cuerpo:
el inverso de $(a, b) \neq (0, 0)$ es $\left(\frac{a}{a^2 + b^2}, \frac{-b}{a^2 + b^2}\right)$. Los pares $(a, 0)$ se
comportan como los reales, y con $i = (0, 1)$ se tiene $i^2 = (-1, 0) = -1$ y $(a, b) = a + bi$. *Ejemplo:*
$(2, 3)\cdot(1, -1) = (2 + 3,\ -2 + 3) = (5, 1)$, es decir, $(2 + 3i)(1 - i) = 5 + i$.

> [!formal] Con rigor: $\mathbb C$ no es un cuerpo ordenado
> En un cuerpo ordenado, todo cuadrado no nulo es positivo: si $x > 0$, $x^2 > 0$; si $x < 0$, $-x > 0$ y
> $x^2 = (-x)^2 > 0$. En particular $1 = 1^2 > 0$ y $-1 < 0$. Pero en $\mathbb C$, $i^2 = -1$ sería positivo y negativo a la
> vez. Por eso no tiene sentido decir que un complejo es mayor que otro (se comparan sus módulos, que son reales).
> $\blacksquare$

## 11. Errores típicos

- Definir una operación sobre clases sin comprobar que **no depende del representante**.
- Confundir **maximal** con **máximo**, o **supremo** con **máximo** (el supremo puede no pertenecer al conjunto).
- Creer que $f(A \cap B) = f(A) \cap f(B)$ siempre (solo con $f$ inyectiva), o que $f^{-1}$ exige que $f$ sea biyectiva (la
  preimagen de un conjunto existe siempre).
- Invertir una composición en el mismo orden: $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$, no $g^{-1} \circ f^{-1}$.
- Pensar que «infinito» es un solo tamaño, o que $\mathbb Q$ no es numerable por ser denso.
- Usar el axioma del supremo en $\mathbb Q$: allí falla.
- Ordenar complejos con $<$.

## 12. Resumen

- Equivalencia → clases → cociente (y operaciones bien definidas); orden → cotas, máximo, maximal, supremo e ínfimo.
- Imagen y preimagen; la preimagen respeta $\cup$, $\cap$ y complementos; $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.
- Cardinal por biyecciones; $\mathbb N$, $\mathbb Z$, $\mathbb Q$ numerables; $\mathbb R$ no (diagonal); Cantor-Bernstein.
- Grupo, anillo, cuerpo. Peano y recursión; división euclídea, Euclides y Bézout.
- $\mathbb Z = (\mathbb N \times \mathbb N)/\!\sim$, $\mathbb Q = (\mathbb Z \times \mathbb Z^*)/\!\sim$; $\mathbb R$: cuerpo
  ordenado con supremo (arquimediana, densidad); $\mathbb C = \mathbb R^2$ con $(a, b)(c, d) = (ac - bd, ad + bc)$.

## Reto

Calcula tres enteros:

- **a.** El número de aplicaciones $f : A \to A$ con $f \circ f = f$ si $|A| = 8$.
- **b.** El número de pares $(p, q)$ con $1 \le p, q \le 10\,000$ que representan el racional $\frac{12}{18}$.
- **c.** El número de clases de la relación $x \sim y \iff x^3 \equiv y^3 \pmod{91}$ en $\{0, 1, \dots, 90\}$.

Formato de la flag, en decimal y sin separadores de millares: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Clases y cociente; comprobar siempre que lo definido sobre clases no depende del representante.
2. Maximal no es máximo; el supremo es la menor cota superior y puede no estar en el conjunto.
3. Preimagen: respeta todo; imagen: solo la unión. $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.
4. Mismo cardinal = biyección; $\mathbb Q$ numerable, $\mathbb R$ no.
5. $\mathbb Z$ y $\mathbb Q$ son cocientes de pares; $\mathbb R$ es el cuerpo ordenado completo; $\mathbb C$ es $\mathbb R^2$
   con un producto y no se puede ordenar.

## Siguiente

[[mat-analisis-real]] desarrolla el axioma del supremo (sucesiones, series, continuidad); [[mat-estructuras-algebraicas]]
estudia los grupos, anillos y cuerpos que aquí solo se han nombrado; [[mat-matematica-discreta]] lleva la aritmética
modular más lejos.
