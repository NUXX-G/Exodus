---
id: mat-distribuciones-binomial-normal
title: "Distribuciones de probabilidad: binomial, normal e intervalos de confianza"
area: matematicas
trunk_level: 7
prerequisites: [mat-combinatoria-probabilidad-basica, mat-estadistica-bidimensional, mat-funciones-elementales]
academic_sources:
  - "Caro, R. Matemáticas II, 2.º Bachillerato (LOMLOE), capítulo 12: «Distribuciones de probabilidad», secciones 1.1 (media, varianza y desviación típica), 1.2 (binomial), 1.3 (desigualdad de Chebycheff), 1.4-1.5 (distribuciones continuas y normal), 1.6 (aproximación de la binomial a la normal) y 1.7 (intervalos de confianza). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2012%20Distribuciones.pdf (CC BY-NC-SA 3.0)."
  - "Grinstead, C. M.; Snell, J. L. Introduction to Probability, 2.ª ed. American Mathematical Society, 1997, cap. 3, sección 3.2 (distribución binomial), cap. 6 (esperanza y varianza; desigualdad de Chebyshev en 8.1) y cap. 9, sección 9.1 (teorema central del límite para ensayos de Bernoulli). https://math.dartmouth.edu/~prob/prob/prob.pdf"
  - "Freedman, D.; Pisani, R.; Purves, R. Statistics, 4.ª ed. W. W. Norton, 2007, cap. 5 (la curva normal) y cap. 21 (precisión de los porcentajes: intervalos de confianza)."
hints:
  - "Concepto: binomial B(n, p) = número de éxitos en n intentos independientes con probabilidad p: P(X = k) = C(n,k) pᵏ (1−p)ⁿ⁻ᵏ, media np, varianza np(1−p). Normal N(μ, σ): campana; se tipifica con Z = (X − μ)/σ y se usan los valores de Φ(z) = P(Z ≤ z)."
  - "Herramienta: dibuja la campana y sombrea la zona pedida antes de calcular. Simetría: P(Z ≤ −z) = 1 − Φ(z). Para aproximar una binomial por una normal (si np y n(1−p) son al menos 5), suma o resta 0,5 a los extremos (corrección por continuidad). En Python: math.comb, statistics.NormalDist(mu, sigma).cdf(x)."
  - "Documentación: Marea Verde Matemáticas II, cap. 12; Freedman, Pisani y Purves, caps. 5 y 21; docs.python.org/3/library/statistics.html#statistics.NormalDist."
exercises:
  - id: binomial-exacta
    tier: 1
    type: numero
    sig: 3
    prompt: |
      Una variable sigue $B({{n}};\ {{p}})$. Calcula $P(X = {{k}})$. Respuesta: con tres cifras significativas.
    variants:
      - values: {"n":8,"p":"0{,}5","k":3}
        answers: ["sha256:7f6c1111742064086cb8fc176e4658fe33a4940cda7d1c0f8c35eb75ca9d1d6c","sha256:f5d0397181f32363b05a6af01d26b9897da08ceacd29b8c5f1598abe49b1b47d","sha256:d5d4f18a47e71da48ec032357cb1d23f8816723aaa749dfebd3a6e9e68e78da5"]
      - values: {"n":6,"p":"0{,}3","k":2}
        answers: ["sha256:42c69b325dcb6fb4ac11170c615979e50ed911194820af9d4e00bdcb4df62039","sha256:89f332cf19f08b48129f1444ad13a7490334cb9d506ce0104db7874565672da2","sha256:0c5cc73be552e4e231cb51a511b26edec72fd40dfb556de2a57a6a025dd9618e"]
      - values: {"n":12,"p":"0{,}25","k":4}
        answers: ["sha256:2284a8814ff368f669cc823fd642b0c0dbf2a9bd7da819d05daa7eeb37d813ea","sha256:62b45463769988998fa208a996d01e5fe5718eb1f30bce45ce833df6f421ce45","sha256:b587e25ff0c9800cf6b3acfeb2dd29e8e0c68dd044368158c7df8e578021cc83"]
      - values: {"n":5,"p":"0{,}9","k":5}
        answers: ["sha256:4c20f8542ae43b4f68d23e7936cc5284625fe0d405f2f09187d34f2dd9bd3181","sha256:89a46747575bcd47d6862d3a2bf1ec45efbbddf4c2f3344311e6db192a10ed0b","sha256:e5c2fbba7efbe356f207b48d88768288cab966cb053ee9e32d2324658e4fc2b0"]
      - values: {"n":10,"p":"0{,}6","k":7}
        answers: ["sha256:a37c3fbdc0c33270f47e88ee7ac7d6357d898a6d3514bec613c9a0a0fc6db875","sha256:90c2662f9bf78f8b7f54ff6ec7f12c2b6fe15b11b0206d380b4d5ea4dafed56f","sha256:ff2641a06fa98713ec7155c0ed35c9fcbae1ea2873783fe7901edf3b2782ef9b"]
      - values: {"n":15,"p":"0{,}2","k":2}
        answers: ["sha256:56a0a7b075f204dd8e7dd5994a1f91c8523852e1032b8f3f79d2dd208619188a","sha256:21d5aa9623e9333fc32f3e52d65f261e08253e8be3dbab7aa6613525a2266d39","sha256:c16409a7a234ca88f8e6666409666db30506842b766f30b46c09f0d7351b3023"]
  - id: media-discreta
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Una variable aleatoria tiene esta distribución:

      {{tabla}}

      Calcula su media (esperanza).
    variants:
      - values: {"tabla":"| $x$ | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| $P$ | 0{,}1 | 0{,}3 | 0{,}4 | 0{,}2 |"}
        answers: ["sha256:8e3bc864a6591f584a97e8148f4aa8b7c4d37d668fb1ba22156718e31504f95e","sha256:bb1a8160adb7a61ff6ec515f1bfb0d4dcb4fa2fc5a4f36fedbd44f5ca325c747","sha256:94d71abfa0935b8b1d3f5407d811f61acf222fcaa3eca8b6cad7ae3ea7e87c21"]
      - values: {"tabla":"| $x$ | 1 | 2 | 3 |\n|---|---|---|---|\n| $P$ | 0{,}5 | 0{,}3 | 0{,}2 |"}
        answers: ["sha256:02192f91e5c751d2f4e30bab233c631dc95df9a25bdcb9811a94399f44bb0997","sha256:38fd77fbbdaf05b09c532be272de6a6c7ecc1f5775bbae659e8a93f7ade64983","sha256:f4d041d9fce969b16201b8d657c88680f2eb76bd44d2a8663acc894f0251fc2c"]
      - values: {"tabla":"| $x$ | 0 | 5 | 10 |\n|---|---|---|---|\n| $P$ | 0{,}6 | 0{,}3 | 0{,}1 |"}
        answers: ["sha256:9594beceeabcb9f4096b130b0cb5888ad3b00e06ebeb20855158e592d725ce08","sha256:5ead1236e7d53c351e03c46a69f8949ee2b3ae951e8ab7cff6082a259844b56b","sha256:e167100f42903de81925b1982b2d236004278c66f2ae54fcecb0a4eef002ba38"]
      - values: {"tabla":"| $x$ | -1 | 0 | 2 |\n|---|---|---|---|\n| $P$ | 0{,}2 | 0{,}5 | 0{,}3 |"}
        answers: ["sha256:7b441fc93804920b93907187f2d091eea34585850454029a0d87c73013bc501d","sha256:e0c206a3fc177e20deaf3ab055076063bc756704b9c0f051434d149f0c0c6fdb","sha256:b598298ff727d24ebc0f3728d8295941300fd0efee695a7cff3fa0fbacf28d91"]
      - values: {"tabla":"| $x$ | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|\n| $P$ | 0{,}25 | 0{,}25 | 0{,}25 | 0{,}25 |"}
        answers: ["sha256:a3c0359b64aa6b36c5b0318f24b87df008aa049dbae0a918d5aab7f6edab5c5d","sha256:1404988fd4d910cb41ab24593a33626f220d962cda7cbd6977e715a4d98f5da4","sha256:a2781767f2d08b4b77a83a89b82a44cf296b2557103cc1ad77cfed44454ea115"]
      - values: {"tabla":"| $x$ | 0 | 1 | 4 |\n|---|---|---|---|\n| $P$ | 0{,}3 | 0{,}5 | 0{,}2 |"}
        answers: ["sha256:dde2a19af1314760419f195b6a5635d1f4b16ce04936f5b6ab82e501ff8fa237","sha256:1c2e79c2c4953721fc123f4fbae21ef61a57fc3b9c62f465287b7e95f00a2c62","sha256:8db9229df64256dca4aae72adabca7ae54346559d1de649e20dbb6fae6e8e6c1"]
  - id: es-binomial
    tier: 1
    type: opcion
    prompt: |
      ¿Cuál de estas situaciones sigue una distribución **binomial**?
    options:
      - |
        Sacar $5$ cartas de una baraja sin devolverlas y contar los oros
      - |
        Lanzar un dado $20$ veces y contar los seises
      - |
        Contar cuántas personas entran en una tienda en una hora
      - |
        Medir la estatura de $30$ alumnos
    answers: ["sha256:40a569fd80fb8d914911c58bb1b006ffde8384c337d6f74934aacd6e292c541f"]
  - id: al-menos-uno
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Un componente falla con probabilidad ${{p}}$ (un ${{pct}}\,\%$), de forma independiente de los demás. En un aparato con ${{n}}$
      componentes, ¿qué probabilidad hay de que falle **al menos uno**? Respuesta: tres cifras significativas.
    variants:
      - values: {"n":5,"p":"0{,}2","pct":"20"}
        answers: ["sha256:0a90a240c44d266422a4091181a81f12cbfd61c94c2cfcbb3a065372037d8090","sha256:db29a4315eaf5ea51e3e080d2d5f98633939957029ce872712f6a267ac7a9785","sha256:053d06c8e6543599e063cc76e0c3815383e9a690d246245c3a8d7ab7edac6841"]
      - values: {"n":8,"p":"0{,}1","pct":"10"}
        answers: ["sha256:c08c2fbfba513e9d9bc081a72f19391f177736414d772ec54465e622b5b53283","sha256:2dda5a8569da634d8aa359c54f110d93c90447de10c7928d975f3466f6857290","sha256:56304b8b9fbf91b9f7284256d468b05bd53adff8a8738408ffdacbcc40ff3513"]
      - values: {"n":4,"p":"0{,}5","pct":"50"}
        answers: ["sha256:1bc094f18d7ebc326b0741d1f33e87471f1412c459e959f23e8e57d836423cac","sha256:15190bfd30b03ad37e394648b3cc671f052526cad89279dd47660112be40b515","sha256:58001e8bb6aa013694c7f5e649d3ec3f42db61b520d0815a0aa10d98027f1609"]
      - values: {"n":10,"p":"0{,}05","pct":"5"}
        answers: ["sha256:5ab2d6bca7ea37852531a37c329304f1a434f6e18d6ea0a044d3b3fe3896eb8e","sha256:04eabdac1a63d38b20d796b00a63e44645f69fc6d234ce465b8a8cefc9481ea8","sha256:41fab22aa1560e1c3afb6b9ab21849209dc1cf6fa8eb568183de80e97b098535"]
      - values: {"n":6,"p":"0{,}3","pct":"30"}
        answers: ["sha256:dcfc84d4ea9f988de60a1ce93b39ae358db5da9aad2ae21a269267db8b3cdc17","sha256:cb5a51875987ef9ac90cab74fe859249faa2955b1dda6267a22330e828d899ea","sha256:1c392f19a347a760b9ef316974c03f4e9bb39c50f4f7411cbf1d6b2778e279be"]
      - values: {"n":20,"p":"0{,}1","pct":"10"}
        answers: ["sha256:9c3f7c57e05d46b73a80e7e539852ef3e7dbda96e68b1a2bd81e9c71246d0f75","sha256:43e6f2739c87f7436afaee0c9c449026be3a1f0cfaf7c2d804e87f7cc90ec9b7","sha256:8ec9c5a51a2cfe09831439912f68d07d130149e28ca9b735a78c13a71ab7a6f3"]
  - id: desviacion-binomial
    tier: 2
    type: numero
    sig: 3
    prompt: |
      ¿Cuál es la desviación típica de una variable $B({{n}};\ {{p}})$? Respuesta: tres cifras significativas.
    variants:
      - values: {"n":50,"p":"0{,}2"}
        answers: ["sha256:be2c4a2731044cfda54f3ff0c758dc8c40ff90f158d0f5fab55e4e2ad01d30b0","sha256:893cda5c0c8d9884d8482b250ab6f750276f8f250506e02e7e8ac0d36b667baf","sha256:ad48c7d74324baa2e7a5bc0565535bb9bddf4cf488e7c43b31d8235caea7d4d5"]
      - values: {"n":200,"p":"0{,}5"}
        answers: ["sha256:dd43ebd22259fb5e1d7e3187bc3ef28aa25f315e5a3f9aaf710a880427aa842a","sha256:d2ea635ef354f30ac13c9bd0ccac9ba6f30abfd89e08fee253c857e6e7ec43a8","sha256:1a84ea7be90f530a4564b23eda0608bdcacc8676ed2a3d13785d21c56d508f41"]
      - values: {"n":80,"p":"0{,}25"}
        answers: ["sha256:a9d48f0e98cd3a0de9c3fee45f12fe4d8b8326f830fa4076821c500f1c764bc0","sha256:ba70d0efa340499d33bd071ea13e3c1233098353e7d2cccfe118ee4909c02347","sha256:10abd1b1c0fd2cace277cd6feba30cd30765a64761c3e19af588699fc10ca6c2"]
      - values: {"n":400,"p":"0{,}1"}
        answers: ["sha256:ec2858ad028497e567cd427688a1b6f1c8338e899f0474e7be526728079d537c","sha256:9efb4a69b1ce0f6d22c72c6ee13a22b13f119a1da345a1a855db7204502044bd","sha256:297179ca01d1f69804d2d824d201e3b52ab0f9dc31b5b80857042feb3fd33b41"]
      - values: {"n":36,"p":"0{,}5"}
        answers: ["sha256:a6468abd5f42fd85b547fb570527cbcf6a53e79ec6fe0683b7b4b49a3aa8a5f5","sha256:5ba9923ef1e85632ee2093423ff0de5635d188dca25a05b7369cfa00bfceef42","sha256:b676ef3fd163a86fe9f0e9b883d69fe03e27e8de2b173cdd455adee157f4f95a"]
      - values: {"n":600,"p":"0{,}4"}
        answers: ["sha256:8f99ccb4598f45e211ffaeff800c46f744ffd45fec3ecde21088e80610231c3d","sha256:4d6c6518264b6421b3711cba15240a52f68f767cbe03ed878de0ae9bfb637a4e","sha256:82e6786f0b55b2aaa29127422108e4905e48e885e2f765571230d4e8376f0393"]
  - id: normal-menor
    tier: 2
    type: numero
    sig: 3
    prompt: |
      $X$ sigue una normal $N({{mu}}, {{s}})$. Calcula $P(X \le {{x}})$. Respuesta: tres cifras significativas (con la tabla o la
      calculadora).
    variants:
      - values: {"mu":170,"s":8,"x":178}
        answers: ["sha256:bd6469cfcbb8b2aae7237d55f2b7339d90d5304a3797a081a3edd368afac4df9","sha256:17c31e30cddca3071f432ee9e1d18cff455f5c5c3fa7f949f9a481f19b055361","sha256:bbc4938186097761a4b82439e8f0c91d31ab90ba5017f64efdde42f6e5e77c62"]
      - values: {"mu":100,"s":15,"x":130}
        answers: ["sha256:c3f84744920c3c6acd93f105cf2d00be70ae35d2a7a311efa5b2835d68f12086","sha256:0150ca8e7c28933d77e5d17b97db5a1c1b2529c77b0ce01b3b5059739bb339c7","sha256:201561be3b88f79782bddc6273df7e3fa0584629853c76ef464e9e504d9b387b"]
      - values: {"mu":50,"s":4,"x":56}
        answers: ["sha256:1e4bab5b148b7fd70a7ef7e74141c062285b0f5efff2260b59eaad03d5ac0d13","sha256:3ae7daeb58d3a4fd00a7e1445ec9f374132c197a6f8ef61b7a66ca7f42a5353a","sha256:2bec33a78886742586ff2e4f0bd1b38988100e7bef377f0b1d08dfd2fc1851a9"]
      - values: {"mu":500,"s":20,"x":470}
        answers: ["sha256:02e12d64ca8c48ba158b667ac86ece4cd870105e9cfebb352ba61a370c7efc98","sha256:4dfc299a3b37ba9994dec9bd34ce2797b77000f9a8bdb2b994c81ceeb3804472","sha256:f904b7aff425818530a0168afdfe50df7809d976594123efc2e3e0a6d955d529"]
      - values: {"mu":12,"s":2,"x":15}
        answers: ["sha256:8fa4679eeac1d8695dc978706640b46cf02965d738b77093fd53415fad666f2f","sha256:250abeb17c1f8d97eabc3960ce8bdab1505cc44daf31742026fb6cbd0ddcf2a2","sha256:9268867aa634690ef8e20a3ef48d57bd54a1912a7b1a9d581e99906da8fd7eb1"]
      - values: {"mu":65,"s":10,"x":85}
        answers: ["sha256:cc46797b884b4c7e4b3036fdb532ea697256a302293ce2c6afb33c94b268988e","sha256:749071a428a3074b17ed4e7ecbe50cf07168708d6a3e9dfccbb1f4460c4cef36","sha256:19c6cccff419e29e60f61efcbdc314aed17608a0dfa9a1a3fff045c3bd4c210b"]
  - id: normal-entre
    tier: 2
    type: numero
    sig: 3
    prompt: |
      $X$ sigue una normal $N({{mu}}, {{s}})$. Calcula $P({{a}} \le X \le {{b}})$. Respuesta: tres cifras significativas.
    variants:
      - values: {"mu":100,"s":"15","a":85,"b":130}
        answers: ["sha256:889b7fbe993fd4155268efe4662dab897e558553586f63745a350f78249740d5","sha256:c246c47998016e27862da434c65cf23f7c07ea328e42de16fa5d3496e2c0cbde","sha256:592238f432970bdc8c5fd395e6318eef559441ec3d6f1a0aab417d64202a4c84"]
      - values: {"mu":50,"s":"5","a":45,"b":55}
        answers: ["sha256:07c9c4b1025cb2d5775a15b1aa42679dbb337c2169107e4c3e9500d40872da71","sha256:51cde73a1d52e905e12825652f7b3fc4a64cbe5c7abe7c290a9fda64ef3bd24f","sha256:14f240597d722890342ae5c7416c56c0b7d816f314412f77eecc61baa4e50576"]
      - values: {"mu":20,"s":"4","a":14,"b":26}
        answers: ["sha256:1d47b02796ebb244fd44380d0a07d49d07e180e6f04f48c07682a5ffe87a9de5","sha256:bfad9cf580af46015c068153b4980277d96ac68086f348e99305c716fe642627","sha256:8225b7f8b9905dd952ebf73bb5b38c06f631ca503564c77a8ca1da3c3356de87"]
      - values: {"mu":70,"s":"10","a":60,"b":95}
        answers: ["sha256:3020d9b94a9c457062ba642ddba17f934a7f5edb036f3f3dd9e7f1831a20c76c","sha256:b83f3059b2dd4c86de67919a7a24c984afd0496ff8a361684e2e5678cce3dec4","sha256:b2c594f0fdb8df796c14316fd779f67edd103f879658476786e570a07b2dc390"]
      - values: {"mu":3,"s":"0{,}5","a":2,"b":4}
        answers: ["sha256:4654198c035cb1e410a9ac96c19f65ef4b29d0a59b724af4a29a470837102164","sha256:b862bed2c6a37e3bdd815142ce54d582b112bf748a557632b542061450d6f42a","sha256:325e1a1d0c88874faa5de34afd7d3715a83069552dd5aa5f64e40d194ff6110f"]
      - values: {"mu":250,"s":"25","a":200,"b":300}
        answers: ["sha256:d631bc9ed8f4b2fbf7abe322a724a9b62f2750c43490758037aa3f5456dd0ac9","sha256:796ee502adf1aaa92034ef84dddd9f5374e3252f1498903800aff816f7109532","sha256:1051b8bb5502c72b838564c6b0c590140c09c3f574e64d0226b96b144aef9d1e"]
  - id: normal-mayor
    tier: 2
    type: numero
    sig: 3
    prompt: |
      $X$ sigue una normal $N({{mu}}, {{s}})$. Calcula $P(X > {{x}})$. Respuesta: tres cifras significativas.
    variants:
      - values: {"mu":100,"s":15,"x":125}
        answers: ["sha256:524f50a927cdba38523f4ad314659b0d18f571fdc583faa8c4f3740fe4c639d8","sha256:8d0eef67ed4d594b8eeb587bc718785feaaa77e858bd5a753b28cc77abe67ed5","sha256:b13a71dbae3198e6af7d19a02c8a9674133ce373d4c9f341cb23a593202f6478"]
      - values: {"mu":500,"s":100,"x":650}
        answers: ["sha256:d98d4b4c1b20099e2a937c175f6fdbd158b72cb3e229543a4df7f1b5286d8568","sha256:8083c4b12c342d360437c48d7d86e5de06044c6ae32b2401ddff859c86a2de92","sha256:2a8294f4c62996d3df298968c3ac211572f523f76a598ad06c7d847ec5b94abe"]
      - values: {"mu":36,"s":4,"x":42}
        answers: ["sha256:8c46ca0cbe479029b2eb6f2d6c146f0e889a0338287450d5805915fc54ec5e1c","sha256:55e64d8d094407305216a6efaf1368f7858c7bdaa67f8c2f7b624ca80713b652","sha256:cbc0c7cc6c2d9f0d49450d8eb0be5c8551ed628c337ca769775a1cfa4fe3c68a"]
      - values: {"mu":1000,"s":50,"x":1100}
        answers: ["sha256:b1b9ae35465678e4de2b0413779dcb9692645e372355c27f6480341c468c5e86","sha256:11d36348ca6dead32a81988d67a8bf7e4ce288d77b578b9200616ebd938fc8d3","sha256:5a1ca28a5ad49ec53ad70cbb2a4c171d85c0d8490e5e528107105238ad91b956"]
      - values: {"mu":80,"s":6,"x":89}
        answers: ["sha256:f22c95601c2cb79c88cb24547210438e1adc2a23a5d7abf72c88292a23c28931","sha256:6077a34e09dbf4865c80cb56009ed4ab4b0a92fb4c627d08b5a2bc48e6d5f90f","sha256:b1fe5f5d801545b3510b9a3316149f1831b8a46f74500925faf79ad3e6e4f1a4"]
      - values: {"mu":20,"s":2,"x":21}
        answers: ["sha256:c66c17154b65ef2c054853b208bacbe651c21c8969405b47f1960c2fdc591fad","sha256:5acd2d4361e30aaff2b29d5b0a8ce6f41dc94fd2c04cd757f0b16de84290101d","sha256:c1281d63295766457f6ff2c07b00156a37d766c743c9f78549217a2c7a38be1d"]
  - id: chebyshev
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Según la desigualdad de Chebyshev, ¿cuál es la cota superior de la probabilidad de que una variable se aleje de su media
      ${{k}}$ desviaciones típicas o más? Respuesta: un número entre $0$ y $1$ (tres cifras significativas).
    variants:
      - values: {"k":"2"}
        answers: ["sha256:001d59656a4e395af887a5e6b4b6b175680c8dca4016fab551475543cc71743d","sha256:2ff2c5b31631e3bac2eb76f5f15cd65ad89085ad1ffd97d84c733769deb56bf2","sha256:6873810acfb89d0eb3b399ac8cff1cd60fc2fe6abd8b83b4c7519795e942bd86"]
      - values: {"k":"3"}
        answers: ["sha256:3e3b91416f6521312583f48887180d0fdec337de3a57b5592c384703ab26c7b3","sha256:08139e435ef9fdb9c108c5a400dbbd07f4ffd228a0be97b740b1f9fc0a8764ea","sha256:7564982f3be7ff0440f09246ccb4d0344612d104f7b7c7ca58e1301821c1216b"]
      - values: {"k":"4"}
        answers: ["sha256:b18cc7c60967934d6184a58f56244096a2ee67c6b193f07f6840ce826c3f4290","sha256:21986440edf945ccd7e15722c76327dfb452a0557915c36d86f931651ce9516e","sha256:e302205b7a6cc89ef7dfeede5b0c7b2f383b29cdff1db446c13776c0e86e9325"]
      - values: {"k":"1{,}5"}
        answers: ["sha256:0646336a5eb0e24de10bf911f9824a73d479f19db5dc81dda44afca631265bd5","sha256:1d994ff3d523ea01cc5b28f21e3f8447d14e77729ef98c0e51861e5963f9fb4f","sha256:04994489f9599b48ca7fa198cf84d8d50a5607403ad4839286cb34542bbe3843"]
      - values: {"k":"5"}
        answers: ["sha256:cf9624ed391ca15ed7b678992f6decde9de0d0a2df413865ac84acade75b3145","sha256:9353e11a8c0b067670123f40798ef57b55ca3c72dcbfe31fd14429d97826f86a","sha256:a0853dd01f640dddfb5e4e4f692c2c17450e649d8fb66f6a8e3035226022522e"]
      - values: {"k":"2{,}5"}
        answers: ["sha256:058800ad1d974ddeebbc1fd29ead6ca8c44b3a37dba779776a7878a1ca61f9a1","sha256:f74a46a9625dce568aa13087ef7ee63602be47f98bd36e092043d5a424ef155b","sha256:8bad104e4f466fa2226901dfb92fce60d29345f55087ce81a249e60ef2362816"]
  - id: aproximacion-normal
    tier: 3
    type: numero
    sig: 3
    prompt: |
      $X$ sigue $B({{n}};\ {{p}})$. Aproxima $P(X \le {{k}})$ con la normal de la misma media y desviación típica, **con** corrección por
      continuidad. Respuesta: tres cifras significativas.
    variants:
      - values: {"n":100,"p":"0{,}5","k":55}
        answers: ["sha256:4ed299960249ffffb8107ba546d21dcbfad9ec1284232408c8500f285359f425","sha256:838e3de799f00ff0142f1b99d0ca42a1e3d7ebf381c7438758d52ef3b1c9fe23","sha256:cbd0cfb5c42776f9cdf7260af29a112ea52b792de4a5c023de234958cf47c203"]
      - values: {"n":200,"p":"0{,}3","k":70}
        answers: ["sha256:ed4cfd1759e3ab3095218c7022c0d1aeceb76d6f64b6b97f98bb839834768089","sha256:a674c2f2f9faa87ec5ceb166f9eb995e34b096d8b50784ed178a172eaa9926d9","sha256:ba0055013985e1eb4f98d83e05190ac4771e354efe256b5a048ebf4ab498cdb3"]
      - values: {"n":400,"p":"0{,}1","k":30}
        answers: ["sha256:328d3c75e0518cb3d6b7172aeea074cc7dc83f63a6e2cb7cd84b109f7d4269fd","sha256:af8f4b8e8e2e44439e55dfea604a0b1fcf8a60d642cf6cb78af9d5e0bb74559d","sha256:74ffd67b786aa5bdac7928a7b1d0845a0f0d7ed6e166341afc4cfb2693a86fab"]
      - values: {"n":150,"p":"0{,}4","k":70}
        answers: ["sha256:3a37fc16938e20d4e7a52b5b0adece09af947b76ca6f7ac6ef1405c6af7e3ded","sha256:fea0fa3fa571420343d341115df2ed4d7cf11e873e6164fe212703c1496b188b","sha256:2cbab39786df4fe9e05df7d9a4d1a692b15a07db233e28119855fc8bad07279c"]
      - values: {"n":300,"p":"0{,}2","k":50}
        answers: ["sha256:b8a66b9d6b5588761e4273f0df27a56f31682fd112c567b5c669d1b9e0fd6c6d","sha256:6c102d54d661d7585e573eaac28de2c7da7a81fbbdd3d9e9b3a7121e4bec83d3","sha256:7f1802cfa407ed61baedbdd41da2abea8ae260934f38050da9f44d24dc894da5"]
      - values: {"n":64,"p":"0{,}5","k":40}
        answers: ["sha256:0fbfd6470dada43679eaf2a8f16e6aa66b0f7138587e1538e735263ec92ef00f","sha256:50f31598be81567bd75fcad59e29e10254d83e13fe2ebc3e88e47023bc6aa8eb","sha256:76f2d49b1273d07a9ea81116988596988a832a77eedac584a79f4722e77175d6"]
  - id: margen-de-error
    tier: 3
    type: numero
    sig: 3
    prompt: |
      En una encuesta a ${{n}}$ personas, el ${{pct}}\,\%$ responde «sí». Calcula el error máximo (margen de error) del intervalo de
      confianza al ${{conf}}\,\%$ para la proporción, con $z = {{z}}$. Respuesta: como proporción (no en %), tres cifras significativas.
    variants:
      - values: {"n":500,"p":"0{,}3","z":"1{,}96","conf":95,"pct":"30"}
        answers: ["sha256:dc859f01374295ed9dc3e67672abeaa482489bbbf90e6e311ef762ced4fd2b64","sha256:c91dd67e5f07a689bd8855e78b869b001795f2f272bde1493050ab4481a626db","sha256:5145f85f6ab6bf41c49d7bf9a504f979f64714ec73ba2d2d9848dc93a54ae146"]
      - values: {"n":1200,"p":"0{,}55","z":"1{,}96","conf":95,"pct":"55"}
        answers: ["sha256:120ce8fa8fa99a7ffa65f5493d3cd5ae6114790fb092628f34f110160b0eff05","sha256:7d56559a99f83795268dd224e6e0b4244d58e2991ec09061431da46fa8ad80eb","sha256:cd69265f4147514e93d307155ddbe1972a3805d4ddb4a691d94c0555041b20bb"]
      - values: {"n":400,"p":"0{,}2","z":"2{,}576","conf":99,"pct":"20"}
        answers: ["sha256:b99765193c9169cee3df190bc9233402f341194189507f1afb2cffd86873acf9","sha256:37c64237e7cc559c50795ae013e99d1e2dc71388bad1574e0fcbc5027cda91d4","sha256:804f735c164d63f3c7212d6561bf028c3035e7cb8e4f431938a21d3ff2617f2d"]
      - values: {"n":2000,"p":"0{,}5","z":"1{,}96","conf":95,"pct":"50"}
        answers: ["sha256:8278543d7a9a41d16c1d3820daa342a3cf9f4fc20685a94e1b1202fef4e700b7","sha256:22737c411fe163db0f5dcbff8e15e5c066324059cef626a36f50519de3d551bf","sha256:2c01ce9153cead13681c6266e4730ae4817898b597b95134f6cf8c4b0f8d7f7b"]
      - values: {"n":800,"p":"0{,}35","z":"2{,}576","conf":99,"pct":"35"}
        answers: ["sha256:f401d2c9c5fbec4312fd5f8923ded7a2cdc11dbf2dafc98cc772d02e89b0d018","sha256:2c2e98504e61365da2ca6cd0b14bfa3c1a3ecd7f23e97a9c54617fa9ca7be238","sha256:2af9f3648087f221bca1d8d94e36177fc11b80a63f47d1d103db774a11440975"]
      - values: {"n":600,"p":"0{,}6","z":"1{,}645","conf":90,"pct":"60"}
        answers: ["sha256:1a3eccab02c8b5b3eaaa6cc08a79cfaaf360dae3aeeeee4dcc5530a223f49e00","sha256:4eae4cb91de5f5e8238347633f3d05b3ff02d5b01b008e8997275bb022a3161e","sha256:597cbef4394f077376777eb1531b16c8eaa597f68faf0d6b96726aea875db1be"]
  - id: interpretar-confianza
    tier: 3
    type: opcion
    prompt: |
      Una encuesta da el intervalo de confianza al $95\,\%$ $(0{,}37;\ 0{,}43)$. ¿Cuál es la interpretación correcta?
    options:
      - |
        Hay un $95\,\%$ de probabilidad de que la proporción real esté entre $0{,}37$ y $0{,}43$
      - |
        El $95\,\%$ de los encuestados opina entre $0{,}37$ y $0{,}43$
      - |
        Si se repitiera el muestreo muchas veces, el $95\,\%$ de los intervalos así construidos contendría la proporción real
      - |
        La encuesta tiene un $5\,\%$ de errores de transcripción
    answers: ["sha256:e617b6bb53b9dd4ad92412eeeb1e6fedf0b5965e5c0ae379b6e8627a7ab13271"]
  - id: binomial-media-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que la fórmula de la binomial da probabilidades que suman $1$ y que la media de $B(n, p)$ es $np$.
      (Pista: binomio de Newton para lo primero; para lo segundo, escribe $X$ como suma de $n$ variables que valen $1$ o $0$.)
    sealed: "gz64:H4sIAAAAAAACCoWTTW7bMBCFr/IgcOEf2bC6NOBFkGbXdpONgSg2xtIgIEQPaZFMmwo6UBc9RS5WULYTGynajSSIo3lv3nzqMm9NDNpKtswmk/u4J6hCzScT3FqBOmCFAjM4lcPZFmyw02L32qJmfOPvwUpeiipLH/fbrlkt+k0nfVkOVZ30XdO7TXPYdDJreqwwcpjiMN5Iany8qnkppUwmX7nWlJTvmaDWW61gCM/UatoZxiEynslw8gevkxUtgSVYKK3AHq+/fuhg8QK1GCrEznEnwUrFHmqNFdbbAlOUZVXb4DHFeisKVWQJBGPPHfy8lFuqzybeRCsrcK3d0U4bXVMN5dRJ7ePRQeUg//p78K3uHtZb/ZimPYojxbA4PaeQnZrjC4G945bkJ6V4o1ApPq2EfYpieKwZhvx7ocfIM6q4d4bhNe9dyzkoStJNlecAPcTCMwm01OxYas0S2I9zmMhPtpTkMnlMZovHq6DSK0ln4o7rGt2YwK1Q0M8Er+VCRkutK6ptS36JExkNmhMTkAZXRIg7w1OWT1y8szMr+q6ZFb3bDLfLL0ZuehhvhpKjpxzRk9RpiEuhFeRDOzUfZ3nWxl2rq2z50GVVqwO32mbL7MYZXdFfKQdBvcGb1l5ZqUx8OYKZViPDn5PlmYsSrM+Wn/r8qvtn9pXdOysMtVZguYwKI5tmSHvWNUs4UvTfYcb/ErwlU0VDF/gNwJ5kjBamI60DVBfwjSySU8OBzuCN4agl2F1g4RYqgXAl/dj/AQt5K/RNBAAA"
  - id: r-tipificar
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      $X$ sigue $N(60, 4)$. ¿A qué valor $z$ de la normal estándar corresponde $x = 70$?
    answers: ["sha256:cfca6fde5a0b0ac944ca062ab97477f2b1df1dd3e95bf9d2b459586d033193c3","sha256:034fa221c2304a9d2abc02ee0d1a28a57bd9297308925e5d7e584ef086cf8317","sha256:e9d1bed69f477c0324c6eb76985980b9bc7f763d605eb3fe12b07ee6a4883d44"]
  - id: r-simetria
    tier: 1
    type: numero
    review: true
    sig: 4
    prompt: |
      Sabiendo que $\Phi(1) = 0{,}8413$, ¿cuánto vale $P(Z \le -1)$?
    answers: ["sha256:c45e2843819d27ad2aa7de26ddc5046f82373e11576f0c4371493cd9402fd6ce","sha256:8bbdf81f36c729a7bcbfb90594d155e55c33e04356e1138f880cc20cc73bf846","sha256:d529780c71e37360ece66a39bdff21526a6600996b91f39af2fdcdb5d3a5297f"]
  - id: r-regla-95
    tier: 1
    type: opcion
    review: true
    prompt: |
      En una normal, ¿en qué intervalo está aproximadamente el $95\,\%$ de los valores?
    options:
      - |
        Entre $\mu - \sigma$ y $\mu + \sigma$
      - |
        Entre $\mu - 2\sigma$ y $\mu + 2\sigma$
      - |
        Por encima de $\mu$
      - |
        Entre $\mu - 3\sigma$ y $\mu$
    answers: ["sha256:6c9d09432248122987582bcd694bec91e9ff94a84af31cd3e33492d29dd7dc1b"]
  - id: r-media-binomial
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la media de $B(60;\ 0{,}25)$?
    answers: ["sha256:6b67d7fc645963cb47ec21f526eb82399789234de48925c9a6b4e70e60ce0bfa","sha256:9ee7eaac3a027223d37482d5e401bde1eddbe85569401547f76d9178187aae8e","sha256:8157e3394ed91d67c0e7864f69ce913d54454666009971b107a803c0325480cd"]
  - id: r-continua-exacto
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $X$ sigue una normal, ¿cuánto vale $P(X = 3)$ exactamente?
    answers: ["sha256:37e7e19ab93e3fa87a6d9dfc31025eec00190d6e21339c5f4e9f91e9e8fff5c1","sha256:1f26e2cce20919eb5b78ea18d4aa2cadba838e64b6bbcf529aea4521b4853ca3","sha256:c72ba2a1959f832d6925548e118292e8b681541ec4a5bedb5e43b5c0dec0754f"]
  - id: r-cuadruple
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Para reducir a la mitad el margen de error de una encuesta (con la misma proporción y el mismo nivel de confianza), ¿por
      cuánto hay que multiplicar el tamaño de la muestra?
    answers: ["sha256:c7026852a247e6058cc8f6355233909bb2bfa6ce40fe5f54716a621f1f3106f8","sha256:d48af143f81d8d59ce93384f08d4a21c275b16d83b0b0497cbec5fd82dd565e8","sha256:25e97f485bb67272d3f600942dd7317ebc9545ac7cd60179985ff7505a7dab6d"]
---

# Distribuciones de probabilidad: binomial, normal e intervalos de confianza

En [[mat-combinatoria-probabilidad-basica]] calculaste probabilidades de sucesos concretos. Aquí se da un paso más: se
estudia de golpe **toda** la lista de resultados posibles de un experimento y sus probabilidades, su **distribución**.
Dos distribuciones aparecen en todas partes: la **binomial** (contar éxitos en intentos repetidos) y la **normal** (la
famosa campana de Gauss). Con ellas se calcula desde la probabilidad de que un lote de bombillas tenga demasiadas
defectuosas hasta el **margen de error** de una encuesta electoral.

## Objetivos

Al terminar sabrás:

1. Describir una variable aleatoria discreta por su distribución y calcular su media, varianza y desviación típica.
2. Reconocer situaciones binomiales y calcular sus probabilidades, su media y su varianza.
3. Usar la desigualdad de Chebyshev para acotar probabilidades sin conocer la distribución.
4. Calcular probabilidades con la distribución normal tipificando y usando valores de $\Phi$.
5. Aproximar una binomial por una normal con corrección por continuidad.
6. Construir e interpretar un intervalo de confianza para una proporción.

> [!question] Test de entrada
> 1. ¿Cuánto vale $\binom{5}{2}$? 2. Lanzas una moneda $3$ veces: ¿probabilidad de exactamente $2$ caras? 3. Media de
> $2, 4, 9$.
>
> Respuestas: $10$; $\frac{3}{8}$; $5$.

## 1. Para qué sirve

- **Control de calidad**: ¿cuántas piezas defectuosas cabe esperar en un lote, y cuándo hay que sospechar de la máquina?
- **Medicina**: la eficacia de un tratamiento se decide comparando con lo que daría el azar.
- **Encuestas**: el «margen de error de $\pm 3$ puntos» de un sondeo sale de un intervalo de confianza.
- **Ciencia de datos y aprendizaje automático**: la normal aparece en errores de medida, en ruido y en casi todos los
  modelos estadísticos.

## 2. Variables aleatorias discretas

> [!practico]
> Lanza dos dados y apunta la **suma**: es un número que depende del azar, una **variable aleatoria**. Su distribución
> es la lista de valores posibles ($2$ a $12$) con sus probabilidades ($\frac{1}{36}, \frac{2}{36}, \dots$). La **media**
> (o **esperanza**) es lo que saldría de media si repitieras el experimento muchísimas veces ($7$), y la **desviación
> típica** dice cuánto se suelen apartar los resultados de esa media.

Una **variable aleatoria discreta** $X$ toma valores $x_1, x_2, \dots$ con probabilidades $p_1, p_2, \dots$ que suman $1$. Su
**media** (esperanza) y su **varianza** son

$$
\mu = E[X] = \sum x_i p_i, \qquad \sigma^2 = \sum (x_i - \mu)^2 p_i = \sum x_i^2 p_i - \mu^2 ,
$$

y la **desviación típica** es $\sigma = \sqrt{\sigma^2}$. Son las mismas fórmulas de [[mat-estadistica-bidimensional]] con
probabilidades en lugar de frecuencias relativas.

## 3. La distribución binomial

> [!practico]
> Un jugador de baloncesto mete el $70\,\%$ de sus tiros libres. Si tira $10$, ¿qué probabilidad hay de que meta
> exactamente $8$? Cada tiro es un intento independiente con la misma probabilidad de éxito: es una situación
> **binomial**. Hay que contar de cuántas maneras se pueden repartir los $8$ aciertos entre los $10$ tiros
> ($\binom{10}{8} = 45$) y multiplicar por la probabilidad de cada reparto.

Un experimento se repite $n$ veces de forma **independiente**, y en cada intento hay **éxito** con probabilidad $p$ (y
fracaso con $q = 1 - p$). El número de éxitos $X$ sigue una distribución **binomial** $B(n, p)$:

$$
P(X = k) = \binom{n}{k} p^k q^{n - k}, \qquad k = 0, 1, \dots, n, \qquad \mu = np, \qquad \sigma^2 = npq .
$$

> [!formal] Con rigor: de dónde salen la fórmula y la media
> Cada resultado concreto con $k$ éxitos y $n - k$ fracasos (por ejemplo, ÉÉFÉF…) tiene probabilidad $p^k q^{n-k}$ por la
> independencia, y hay $\binom{n}{k}$ de ellos (las posiciones de los éxitos). Sumando, se obtiene la fórmula. Por el binomio
> de Newton, $\sum_k \binom{n}{k}p^kq^{n-k} = (p + q)^n = 1$: las probabilidades suman $1$.
>
> Para la media, se escribe $X = X_1 + \cdots + X_n$, donde $X_i$ vale $1$ si el intento $i$ es éxito y $0$ si no. Cada $X_i$
> tiene media $1\cdot p + 0\cdot q = p$, y como la media de una suma es la suma de las medias, $E[X] = np$. Del mismo modo,
> cada $X_i$ tiene varianza $p - p^2 = pq$, y como los intentos son independientes las varianzas se suman: $\sigma^2 = npq$
> (esta última propiedad se demuestra en [[mat-probabilidad]]). $\blacksquare$

**Ejemplo resuelto.** Tiros libres: $B(10;\ 0{,}7)$. $P(X = 8) = 45 \cdot 0{,}7^8 \cdot 0{,}3^2 \approx 0{,}2335$. Media $7$ tiros,
desviación típica $\sqrt{10\cdot 0{,}7\cdot 0{,}3} \approx 1{,}45$. «Al menos uno» se calcula con el contrario:
$P(X \ge 1) = 1 - 0{,}3^{10} \approx 0{,}99999$.

## 4. La desigualdad de Chebyshev

> [!practico]
> Aunque no sepas nada de la forma de una distribución, la desviación típica ya da una garantía: los valores **muy**
> alejados de la media tienen que ser poco probables. Por ejemplo, la probabilidad de alejarse más de $2$ desviaciones
> típicas es como mucho del $25\,\%$, sea cual sea la distribución.

**Desigualdad de Chebyshev.** Para cualquier variable con media $\mu$ y desviación típica $\sigma$, y cualquier $k > 0$,

$$
P\bigl(|X - \mu| \ge k\sigma\bigr) \le \frac{1}{k^2} .
$$

> [!formal] Con rigor: demostración (caso discreto)
> $\sigma^2 = \sum (x_i - \mu)^2 p_i \ge \sum_{|x_i - \mu| \ge k\sigma} (x_i - \mu)^2 p_i \ge k^2\sigma^2 \sum_{|x_i - \mu| \ge k\sigma} p_i = k^2\sigma^2\, P(|X - \mu| \ge k\sigma)$.
> Se quitaron sumandos no negativos y, en los que quedan, $(x_i - \mu)^2 \ge k^2\sigma^2$. Dividiendo entre $k^2\sigma^2$ se
> obtiene la desigualdad. $\blacksquare$

Es una cota **muy prudente**: para la normal, la probabilidad real de alejarse más de $2\sigma$ es solo del $4{,}6\,\%$.

## 5. Distribuciones continuas y la normal

> [!practico]
> La estatura de una persona no es «$170$» o «$171$»: puede ser cualquier número. Con variables así, la probabilidad de
> un valor exacto es $0$ y lo que tiene sentido es la probabilidad de un **intervalo** («entre $165$ y $175$ cm»). Se
> dibuja una curva, la **función de densidad**, y la probabilidad de un intervalo es el **área** bajo la curva en ese
> tramo. La curva más famosa es la **campana de Gauss**: muchas medidas (estaturas, errores de medida, notas de un examen
> muy grande) se reparten así.

Una variable **continua** tiene una **función de densidad** $f(x) \ge 0$ con área total $1$, y $P(a \le X \le b)$ es el área bajo
$f$ entre $a$ y $b$ (calcular esas áreas en general requiere [[mat-calculo-2]]). La **distribución normal** $N(\mu, \sigma)$ tiene
densidad

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{(x - \mu)^2}{2\sigma^2}} :
$$

una campana simétrica respecto de $\mu$ (su media, mediana y moda), más ancha cuanto mayor es $\sigma$. Regla práctica
**68-95-99,7**: entre $\mu \pm \sigma$ está el $68{,}3\,\%$ de la probabilidad, entre $\mu \pm 2\sigma$ el $95{,}4\,\%$ y entre
$\mu \pm 3\sigma$ el $99{,}7\,\%$.

**Tipificar.** Si $X$ es $N(\mu, \sigma)$, entonces $Z = \frac{X - \mu}{\sigma}$ es $N(0, 1)$, la **normal estándar**. Sus
probabilidades $\Phi(z) = P(Z \le z)$ están tabuladas (o en cualquier calculadora). Algunos valores:

| $z$ | $0{,}5$ | $1$ | $1{,}5$ | $1{,}645$ | $1{,}96$ | $2$ | $2{,}5$ | $3$ |
|---|---|---|---|---|---|---|---|---|
| $\Phi(z)$ | $0{,}6915$ | $0{,}8413$ | $0{,}9332$ | $0{,}9500$ | $0{,}9750$ | $0{,}9772$ | $0{,}9938$ | $0{,}9987$ |

Por simetría, $\Phi(-z) = 1 - \Phi(z)$, y $P(a \le Z \le b) = \Phi(b) - \Phi(a)$.

**Ejemplo resuelto.** Las estaturas de un grupo siguen $N(170, 8)$ cm. $P(X \le 182) = P\bigl(Z \le \frac{182 - 170}{8}\bigr) =
\Phi(1{,}5) = 0{,}9332$. Y $P(162 \le X \le 186) = \Phi(2) - \Phi(-1) = 0{,}9772 - (1 - 0{,}8413) = 0{,}8185$.

## 6. Aproximar la binomial por la normal

> [!practico]
> Calcular $P(X \le 60)$ en una binomial con $n = 100$ obliga a sumar $61$ términos enormes. Pero cuando $n$ es grande, el
> diagrama de barras de la binomial tiene forma de campana, así que se puede usar la normal con la misma media y la
> misma desviación típica. Como las barras de la binomial ocupan medio punto a cada lado, se suma o resta $0{,}5$ en los
> extremos: es la **corrección por continuidad**.

Si $np \ge 5$ y $nq \ge 5$ (un criterio habitual; Marea Verde usa $npq \ge 9$, más exigente), $B(n, p)$ se aproxima por
$N\bigl(np, \sqrt{npq}\bigr)$, con la corrección $P(X \le k) \approx P(Y \le k + 0{,}5)$ y $P(X \ge k) \approx P(Y \ge k - 0{,}5)$. Es un
caso del **teorema central del límite**, que se estudia en la rama de matemáticas.

**Ejemplo resuelto.** $100$ lanzamientos de una moneda: $B(100;\ 0{,}5)$, media $50$, $\sigma = 5$.
$P(X \le 60) \approx \Phi\bigl(\frac{60{,}5 - 50}{5}\bigr) = \Phi(2{,}1) \approx 0{,}982$ (el valor exacto es $0{,}9824$).

## 7. Intervalos de confianza para una proporción

> [!practico]
> Una encuesta pregunta a $1000$ personas y el $40\,\%$ dice que votará a un partido. ¿Es exactamente el $40\,\%$ de toda la
> población? No: otra muestra daría un número algo distinto. El intervalo de confianza da un margen: «entre el $37\,\%$ y
> el $43\,\%$, con una confianza del $95\,\%$». Cuanto más grande es la muestra, más estrecho es el margen, pero para
> reducirlo a la mitad hay que preguntar a **cuatro** veces más gente.

Si en una muestra de tamaño $n$ la proporción observada es $\hat p$, el **intervalo de confianza** al nivel $1 - \alpha$ para la
proporción de la población es

$$
\hat p \pm z_{\alpha/2}\sqrt{\frac{\hat p(1 - \hat p)}{n}} ,
$$

con $z_{\alpha/2} = 1{,}96$ para el $95\,\%$ y $2{,}576$ para el $99\,\%$. El término que se suma y resta es el **error máximo** (margen
de error). **Ejemplo resuelto.** $n = 1000$, $\hat p = 0{,}40$: error $1{,}96\sqrt{\frac{0{,}4\cdot 0{,}6}{1000}} \approx 0{,}030$; intervalo
$(0{,}370;\ 0{,}430)$.

«Confianza del $95\,\%$» **no** significa que la proporción verdadera esté en este intervalo con probabilidad $0{,}95$: significa
que el **método**, repetido con muchas muestras, acierta en el $95\,\%$ de ellas.

## 8. Errores típicos

- Usar la binomial cuando los intentos **no** son independientes o la probabilidad cambia (sacar cartas sin devolverlas).
- Olvidar el coeficiente $\binom{n}{k}$ en la fórmula binomial.
- Calcular la probabilidad de un valor exacto en una variable continua (es $0$).
- Tipificar dividiendo entre la varianza en lugar de la desviación típica.
- Olvidar la corrección por continuidad, o aplicarla en el sentido equivocado.
- Interpretar el $95\,\%$ de confianza como «probabilidad de que el parámetro esté dentro».

## Repaso: lo que debe quedarte dentro de un mes

1. $\mu = \sum x_ip_i$, $\sigma^2 = \sum x_i^2p_i - \mu^2$.
2. $B(n, p)$: $\binom nk p^kq^{n-k}$; media $np$; varianza $npq$.
3. Chebyshev: $P(|X - \mu| \ge k\sigma) \le \frac{1}{k^2}$.
4. Normal: tipificar $Z = \frac{X - \mu}{\sigma}$; $68$-$95$-$99{,}7$; $\Phi(-z) = 1 - \Phi(z)$.
5. Binomial $\approx$ normal con corrección $\pm 0{,}5$; intervalo $\hat p \pm 1{,}96\sqrt{\hat p(1 - \hat p)/n}$.

## Siguiente

La física empieza en [[fis-medida-movimiento]], donde la estadística vuelve en el tratamiento de los errores de medida.
En la rama de matemáticas, [[mat-probabilidad]] y [[mat-estadistica-inferencia]] formalizan todo esto.
