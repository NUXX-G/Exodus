---
id: mat-calculo-multivariable
title: "Cálculo multivariable: derivadas parciales, optimización, integrales múltiples y cálculo vectorial"
area: matematicas
trunk_level: 10
prerequisites: [mat-calculo-2, mat-algebra-lineal-1]
academic_sources:
  - "Marsden, J. E.; Tromba, A. J. Cálculo Vectorial, 6.ª ed. Pearson (en inglés, Vector Calculus, W. H. Freeman): texto base de «Funciones de varias variables I» (61021080; guía 2026-27: tema 1, geometría del espacio euclídeo, coordenadas cilíndricas y esféricas; tema 2, continuidad; tema 3, diferenciación, cadena, gradiente; tema 4, derivadas de orden superior, Taylor, máximos y mínimos) y «II» (61022027) de la UNED."
  - "Apostol, T. M. Calculus, Vol. II: Multi-Variable Calculus and Linear Algebra, with Applications to Differential Equations and Probability, 2ª ed. Wiley, 1969."
  - "MIT OpenCourseWare. 18.02 Multivariable Calculus, otoño de 2007 (Auroux): apuntes, problemas y vídeos gratuitos."
  - "Stewart, J. Calculus: Early Transcendentals. Cengage Learning (varias ediciones), capítulos de cálculo multivariable."
hints:
  - "Concepto: una derivada parcial es una derivada ordinaria con las demás variables congeladas; el gradiente reúne todas y apunta hacia donde la función crece más deprisa; en una integral múltiple, elige las coordenadas en que la región es un rectángulo y no olvides el jacobiano (r en polares, ρ² sen φ en esféricas). En cálculo vectorial, antes de parametrizar mira si el campo es conservativo o si un teorema (Green, divergencia) convierte el problema en otro más fácil."
  - "Herramienta: comprueba cada derivada con una diferencia centrada (f(x+h) − f(x−h))/2h con h ≈ 1e-5, cada integral con una suma de Simpson en Python, y los extremos evaluando la función en una rejilla alrededor del punto. sympy (diff, integrate, hessian) hace el cálculo simbólico para contrastar."
  - "Documentación: MIT OCW 18.02 (ocw.mit.edu), con apuntes de cada lección; Marsden y Tromba, capítulos de diferenciación, extremos, integrales múltiples, cambio de variables e integrales de línea y de superficie; docs.sympy.org (calculus) y docs.scipy.org (integrate.dblquad, tplquad)."
exercises:
  - id: derivada-parcial
    tier: 1
    prompt: |
      Sea $f(x, y) = x^{{{a}}} y {{c}}xy^{{{b}}}$. Calcula $\dfrac{\partial f}{\partial x}({{p}}, {{q}})$. Respuesta: un número.
    variants:
      - values: {"a":3,"c":"+ 2","b":2,"p":1,"q":2}
        answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
      - values: {"a":2,"c":"+ 5","b":3,"p":2,"q":1}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"a":4,"c":"+ 1","b":2,"p":-1,"q":3}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
      - values: {"a":2,"c":"- 2","b":3,"p":3,"q":1}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"a":3,"c":"+ 4","b":1,"p":2,"q":2}
        answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
      - values: {"a":2,"c":"+ 3","b":2,"p":1,"q":-2}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: modulo-del-gradiente
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Sea $f(x, y, z) = {{f}}$. ¿Cuánto vale $\lVert \nabla f{{P}} \rVert$? Respuesta: un número (seis cifras significativas si no es exacto).
    variants:
      - values: {"f":"x^2 + 2y^2 + z^2","P":"(2, 1, 1)"}
        answers: ["sha256:80e22e7fb4ed3ebf227899aa14f974c3eab17392fe435eac6061fa9d1c27b2da","sha256:7d300a51e49b920e81dd2254516ae64cf9936eee55d3c84bf20db993149ee07d","sha256:8a9f1b1c02a297197245ac08a9cfe7726e43fe02a35241ca1bf5350a293dfbc5"]
      - values: {"f":"2x^2 + y^2 + 3z^2","P":"(1, 3, 1)"}
        answers: ["sha256:e1ceb88c7df54c04549885e0aaaa6d2292ae5f9a1a9f900e3889558dfed9ef1c","sha256:969085e5bf483b67c5f5f363dbd1eae06303447755dec4bd39ef0742bc60bfdf","sha256:b91d295bb7b94467f8c738a88afbdeed7c85fa689064100102b83696112de8f7"]
      - values: {"f":"x^2 + y^2 + 2z^2","P":"(3, 4, 0)"}
        answers: ["sha256:a2fd761cc0a65b7311353788c0e657bb68e15012bbc023641a4e8f80567e475f","sha256:bc69e3cacb8999709135227eedbc490a0147f727f1dfcf1ca18e2ea8441f1fb2","sha256:3626b0bf2829eaf4567a67d8dee783fd95ee37693fd48bc329b5a2f1ae42a134"]
      - values: {"f":"3x^2 + 2y^2 + z^2","P":"(1, 1, 2)"}
        answers: ["sha256:de18a5df457c66eb0b4760ee9671719a46998a426ef2022dd30c0428e43df5e6","sha256:602852261fe60d06265e9375a6396230b1acb624ab936dcce59c5879a6bb2984","sha256:d722616c3b487541bb4bcff0c6214c3134878d4e0c19059ec28ca87f31fade66"]
      - values: {"f":"x^2 + 3y^2 + z^2","P":"(2, 1, 3)"}
        answers: ["sha256:827c2bc4853225de3550c812ed8654a5b7baffc9fd5524202d4004746656a2be","sha256:18380920c698d51e1282d95bfb089c990abe79e2b5fbeea46520ee6b040fad10","sha256:c4eeee4af1839df9adaf92364ed7cd10476f3da3c03693552c0762c2075572b5"]
      - values: {"f":"2x^2 + 2y^2 + 2z^2","P":"(1, 2, 2)"}
        answers: ["sha256:7c6cf7c5951812fa07de92dc00aa9634d6ce4d46830fc4aaabfd32758defd9cc","sha256:9bde1fd13bcc0d7497b2fe3fa91422177c6294e7e7d08982bf9be107ed1b4a50","sha256:caa4169f73671bcf8dc2cbf1ac7347f60b619fa821df8ed36044a2f35be846b2"]
  - id: derivada-direccional
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Sea $f(x, y) = x^2 y$. Calcula la derivada direccional de $f$ en $({{p}}, {{q}})$ en la dirección del vector $({{a}}, {{b}})$ (normalízalo). Respuesta: un número.
    variants:
      - values: {"p":2,"q":1,"a":5,"b":12}
        answers: ["sha256:711724e59d0c860382cc8ca80eb5b3fca25b6e7ffd56d5c63153a6e3daa4fece","sha256:12ccb66641ee91260240ff2fb035083d98c0da61e5118bd25a4dd4fa57b7d437","sha256:d2816a9f3f558a698458f704ebc6143bef037e5c3a072824c9dc1a00b9c88afa"]
      - values: {"p":1,"q":2,"a":8,"b":6}
        answers: ["sha256:34ddde23a21fb3e5282d91ae788198cccb411f1e3aa120ec32491bbd94c650b2","sha256:96cd1500ef7da316681af50411f66ec8ce2c5be1dd440c0a3401b09d59c7f02a","sha256:2fbac736579a61e581c9a05a9ef6bc54b8d6c829a48344578ce306588d1d2f71"]
      - values: {"p":3,"q":1,"a":3,"b":-4}
        answers: ["sha256:23716ad0e5c1a27815a14b4e7dfcedd473f4928bdd223938df9bdd6ccb4f0476","sha256:811e35b8143352c9a257833e7b25a0b30a4a485c8b39f441cc8860516959069b","sha256:08919443e0e2334cf1642f9626f0c276ccd604a3be734b4e3a61ad42eab644e5"]
      - values: {"p":1,"q":-1,"a":12,"b":5}
        answers: ["sha256:fc9a2cb9837ebba5cdc397086deeb34dbcd891690644ec8dcce1d83c5a1dd87c","sha256:3a727d69afd763337eb400582282baa6930dbacb1277107f189636ef3edb50bd","sha256:a0d7c5d58475f4d135428719899f053b2496913b23eeb27867cb2fe9cd186c9d"]
      - values: {"p":2,"q":3,"a":-6,"b":8}
        answers: ["sha256:efcd6604ae1ad51593cdc8be6d929198d93426f7350371dd899275ede4af16d0","sha256:c76e1a2813f761c229b1b40790ca6a1c0dcf2b6aadc48f82351d5d64f3b9b040","sha256:198887e392db6793f61344bc62e5c39e8351e0c8ec0de02c9e7a76bd8c5b28cb"]
      - values: {"p":1,"q":4,"a":4,"b":3}
        answers: ["sha256:41b6187e9f1fa3e8f8c82c22d7096a0167d3e48a16ae450261947bf0a3db5525","sha256:683e997da702cab9f2775e5c134d53bdb4ac42bac89f8a5526748dc267e0c0ca","sha256:4cb0b5bd73aa69fd3b6bbb16fc6eaee7d0507445064334c16e89c182bfdbcbbd"]
  - id: integral-doble-en-rectangulo
    tier: 1
    prompt: |
      Calcula $\displaystyle\int_0^{{{A}}}\!\!\int_0^{{{B}}} (x + y^2)\,dy\,dx$. Respuesta: una fracción irreducible `a/b` (o un entero).
    variants:
      - values: {"A":2,"B":1}
        answers: ["sha256:5bdb15b49f6ce00d8f14a9b691a06657c8983dde480ba2a5066d89ff7a5e53a3"]
      - values: {"A":1,"B":3}
        answers: ["sha256:e1aedd33338920126478744cbea5384cdd833274e3765ec167ce44ab80444888"]
      - values: {"A":3,"B":2}
        answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
      - values: {"A":2,"B":2}
        answers: ["sha256:7c7bbe4ac91694e49ba08c65de7c9e58a518a78dcdac9d8ba9988431173697e6"]
      - values: {"A":1,"B":1}
        answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
      - values: {"A":4,"B":1}
        answers: ["sha256:7c7bbe4ac91694e49ba08c65de7c9e58a518a78dcdac9d8ba9988431173697e6"]
  - id: plano-tangente
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Sea $f(x, y) = x^2 + xy$. Usa el plano tangente a la gráfica en $({{a}}, {{b}})$ para aproximar $f({{x}};\ {{y}})$. Respuesta: un número.
    variants:
      - values: {"a":2,"b":1,"x":"2{,}1","y":"1{,}2"}
        answers: ["sha256:115b6c1c848978d5a237de536fef1b644cbaddc89e38cac06a9feef2ce1d6bcd","sha256:788d9ade3e7b27896a864893ffb08b9a63ae982cd2deec26eef39b08fd3a4bf8","sha256:a8326b1dd08b11171399370915d230acf70ebd9e71f8301b9adc3a775c9da15d"]
      - values: {"a":1,"b":3,"x":"0{,}9","y":"3{,}1"}
        answers: ["sha256:c5fa40527a730511fb6509a3e1bd4991683a8e257af900acb260daa6bbc208ee","sha256:8225fbedd2d46c1147859a9bf7efbd9de4020e7a48afe2cfb6f15ccae11ba7f0","sha256:d5d0ed4c764e67a532d59d8dcad3edc8860b9629e1003e78d70514dace73bb0d"]
      - values: {"a":3,"b":-1,"x":"3{,}2","y":"-1{,}1"}
        answers: ["sha256:42fe03d14b1a55e315843c6d1ca9a5f3a76ac4b020a2a3fae0dd7bcd84d0a918","sha256:cf55d28a9ccb2e4b2aaa74b534b67aab3eb1735a35b79a2331de37c58e544ed3","sha256:c997f15f5829baf8101789c77ca87df3b43ee106ad1723d640f4df268ddb9f49"]
      - values: {"a":1,"b":1,"x":"1{,}05","y":"0{,}95"}
        answers: ["sha256:c5128c6b1ceedbc40dc690643d8e1456b7b3db964e1b602fd096c9d9b1436b4c","sha256:fdaa55e5f218206d588305366035c783626de2aabff1325ee056f13c225a22fa","sha256:11ccef815ec75f09de93f7ed79d73a1030352b3175df204e6b012a530d6f035a"]
      - values: {"a":2,"b":2,"x":"1{,}8","y":"2{,}3"}
        answers: ["sha256:ef65537fcd3d8dbb66aea3cd96f3e57083036e72bedd2cb80eed2c246c565014","sha256:fc1dbebdd0d4f57eca393aa16bdfd298b698c9c1563cec735c641d3851b797b0","sha256:a5493360108255c5a70850983e474da8a7b7a7d72f145f91bf5e26c341cbe719"]
      - values: {"a":-1,"b":2,"x":"-0{,}9","y":"2{,}1"}
        answers: ["sha256:c1bdb9d39a7edbcef2d4faac202e8f46ac1b59cdce3cc7433d13ffc0a8f12d36","sha256:ed831e09cc4806ba8eab25af15ab37378e7c0581b69b6012987eb8f75fbed200","sha256:3c73479d725625ef12ae9474472efb055e1be55b103d63b9c0a820ed06c5d257"]
  - id: regla-de-la-cadena
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Sea $z = x^2 y$ con $x = \cos t$, $y = \sin t$. Calcula $\dfrac{dz}{dt}$ en $t = {{t}}$. Respuesta: un número (seis cifras significativas si no es exacto).
    variants:
      - values: {"t":"\\pi/6"}
        answers: ["sha256:8de9ce6243903943ab5412983f005c6ab4257d476a382ad95dd525520ce0b1ea","sha256:10aba32fdcbde8344a018987da2ac220d7b603febcf4dee594091180ac86915e","sha256:2a23d64f65e5557c11b1a6894401ebb953469de5dc93f920b823e0e937c7bb1f"]
      - values: {"t":"\\pi/4"}
        answers: ["sha256:0673061db028638d24f5ac52d45c24f713a6d5dfb34cedbe8a1e5c4ce8582635","sha256:6b8eee3c449ff364ebb6b19fb3ef8f26de1e63cfd10e89fbe2ce1e840449cd57","sha256:d15adcc436c5eed72970606139f246b2b5103701f18859d61feabd6bccdf7cde"]
      - values: {"t":"\\pi/2"}
        answers: ["sha256:28f47e24ed2e0790a4188a8008007cdc65454253d83be1347146f86ead60a3c1","sha256:1c371d3bd5560422d859dec48d87f134fdf4f327330c3a60f77365273c95130a","sha256:a79f4f6804f4469d7ad4319e6b198912d947b146b665e368ec60ade1a4d7daa8"]
      - values: {"t":"0"}
        answers: ["sha256:70b3a8564e98222f93a9efb6d8b68a985669e131ddd7703f58e257a85a776ed2","sha256:f6e0c847e84506f1bf88d56f2b1d3cdd937b9386714e7184ffebe5bffd1819cf","sha256:5b2a2d679e8ea86e1a2729f8c87e3f98966c8eb7d907a3d919505126913fa39b"]
      - values: {"t":"\\pi"}
        answers: ["sha256:410ca519c78d952c7bf7b818b84b67e5dee3497683c87288d9dbe06002de0b42","sha256:79e509f28693c9605bf4fab9cdee55e9551acb59fd1b8a728789dd64a946b73b","sha256:e4e0260f10c3c334e1c854b03b610ba9b7f4a86786928880d9ea5c3e34fe91b7"]
      - values: {"t":"2\\pi/3"}
        answers: ["sha256:05278ac37e210cd5756aa33a89c1b7b47b4a1606121c3280d2ac380469d4954f","sha256:fa7967b4521fc6896c4029fe3b4aeff073b3ecbdac8c21938c9e35113549c32f","sha256:fe25cfc0870ef97d32e199c24e6655f256193936ad91eccad35316f171a5cb80"]
  - id: clasificar-puntos-criticos
    tier: 2
    prompt: |
      Sea $f(x, y) = x^3 - {{a}}x + y^2{{d}}$. Halla sus puntos críticos y clasifícalos con el criterio del hessiano. ¿Cuánto vale $f$ en su **mínimo local** y cuántos **puntos de silla** tiene? Respuesta: los dos números separados por `;`.
    variants:
      - values: {"a":12,"d":""}
        answers: ["sha256:542bde0fca6120f1e0b0eca8d33e127f6a58290d8969bc815b3e98b8cce20fc6"]
      - values: {"a":27,"d":""}
        answers: ["sha256:ef6ea8c2b11d640e3c1e19e285d0c4e6928a0df0498ea9be58cbd7b561c1a088"]
      - values: {"a":3,"d":" + 5"}
        answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
      - values: {"a":12,"d":" + 10"}
        answers: ["sha256:40b6f0b5bbb4687b89d7920356b6129e5cc0f1ab48916b5fa6d019204e24faab"]
      - values: {"a":48,"d":""}
        answers: ["sha256:7fe502908ab6b9fd1a03e148fbcb57e10a23436f5e170a34c00f0be68048b801"]
      - values: {"a":27,"d":" + 50"}
        answers: ["sha256:0834233093bec287f06bd85842a2c6f2428fbb38d7f470914eb85250735af3fd"]
  - id: multiplicadores-de-lagrange
    tier: 2
    prompt: |
      Halla el valor **máximo** de $f(x, y) = xy$ sobre la recta ${{g}}$ (con $x, y > 0$), usando multiplicadores de Lagrange. Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"g":"x + y = 12"}
        answers: ["sha256:76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"]
      - values: {"g":"2x + y = 8"}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"g":"x + 3y = 18"}
        answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
      - values: {"g":"3x + 2y = 24"}
        answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
      - values: {"g":"x + 4y = 20"}
        answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
      - values: {"g":"2x + 5y = 30"}
        answers: ["sha256:12198f20f1d8928b5656a2b27c4613a1ff7be6d1b87bb4377bbc31f55366f65d"]
  - id: integral-en-polares
    tier: 2
    prompt: |
      Calcula $\displaystyle\iint_{x^2 + y^2 \le {{R2}}} e^{-(x^2 + y^2)}\,dA$ pasando a coordenadas polares. Respuesta: un número redondeado a **3 decimales**.
    variants:
      - values: {"R2":"1"}
        answers: ["sha256:07b608f49267c9b96cd96170bafa6beef60a2d2c444121a41cf0ba67962818e0"]
      - values: {"R2":"9"}
        answers: ["sha256:a4f7ba76db1a09f402a4c5061f8ad16c038f6515dc7ad2a200ec68941f27440c"]
      - values: {"R2":"2{,}25"}
        answers: ["sha256:2febe0f7aaf04d70fa7723e40574560f577edfbb2c47284dfb34ee198a2159a0"]
      - values: {"R2":"0{,}25"}
        answers: ["sha256:957b4675a7db67e821ba9f89c66e3d146e2ecb664a6ba97c8f688dd416b878a7"]
      - values: {"R2":"6{,}25"}
        answers: ["sha256:737abdfe3ddfdc6213191632fdeed851af20e79b47d7cc5a834131e9d8c570fd"]
      - values: {"R2":"16"}
        answers: ["sha256:c4578e4d1e6f9ba54947a300a6a763f4af91e286b823a4b67863ce08337aa12f"]
  - id: cambio-de-variables-lineal
    tier: 2
    prompt: |
      Sea $R$ la región $0 \le x + y \le {{a2}}$, $0 \le x - y \le {{b2}}$. Calcula $\displaystyle\iint_R (x + y)\,dA$ con el cambio $u = x + y$, $v = x - y$ (calcula el jacobiano de la inversa). Respuesta: un número.
    variants:
      - values: {"a2":4,"b2":2}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"a2":8,"b2":2}
        answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
      - values: {"a2":6,"b2":2}
        answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
      - values: {"a2":4,"b2":6}
        answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
      - values: {"a2":4,"b2":4}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
      - values: {"a2":6,"b2":4}
        answers: ["sha256:76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"]
  - id: aproximacion-de-segundo-orden
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Escribe el polinomio de Taylor de **segundo orden** de $f(x, y) = e^x \cos y$ en $(0, 0)$ y úsalo para aproximar $f({{x}};\ {{y}})$. Respuesta: un número (decimal exacto).
    variants:
      - values: {"x":"0{,}2","y":"0{,}1"}
        answers: ["sha256:80d35d9b557ba44c2414fb27b5ad1ad479631def595651419eb9656a9d037151","sha256:50bb5873dbff60dd89a10985ab8c3c153c18b93a69d5bd8dff27bafeb966efc3","sha256:0cf98a167f502f072fa0df99b520c06c9f793bbf86be44104374d884b9152dbd"]
      - values: {"x":"-0{,}1","y":"0{,}3"}
        answers: ["sha256:c1cda7fca7300235a288d5144e1d4d98a84defce38ea8342f22dfdee3abcf27e","sha256:78df7729ad0991c4ae16bfa32550318ae0fbafbadf80cdabebf68daca4372b94","sha256:a94eb29e61969eb260fc61605afea2934680fb95b0da96df9143f3c44aa255a0"]
      - values: {"x":"0{,}1","y":"-0{,}1"}
        answers: ["sha256:58f65178007dd7bca2d7d6d9895d61d7ed5475cac9d0a2737587d3a4124be62e","sha256:5b35fcd4c733da10dd7ce0c04538aa6bf366ed41501b52a6048d3338b00f9547","sha256:58c1874c08a98c62e0ff4e4f13c2c6dfaae28c9a79656b5a4efc2cacb62c165b"]
      - values: {"x":"0{,}3","y":"0{,}2"}
        answers: ["sha256:f94df0eba146cb288d046a5e26db452e7a880ca695156d05ce15fa6c4b39e36d","sha256:c3f0c642180c381b7b2f07731ead9bbf95f6cce382f95fadbbbb31c35c24f79a","sha256:ce3b083eb080e4743ec23f1a25c492aedffc962c5c0467c9cf27a0f1dab2e969"]
      - values: {"x":"-0{,}2","y":"-0{,}2"}
        answers: ["sha256:5843345d523ecaa49455b441b1e41a4cabeaedea708689cf3ad6989f739a312d","sha256:8704058b8a5d5fd906e5dcc908ef26766406dbd6eba8ca3e172449fe5d826d63","sha256:50cbe92b6d86c4a5168852713c8864cdbd9a8da7ecc9beb0fe6aa6f78a9e199c"]
      - values: {"x":"0{,}05","y":"0{,}4"}
        answers: ["sha256:fc88a8c9cc9264d0c05b0eb5d70ba02943f98dbe2d1e5aa4e5b6e536163334c8","sha256:5f3940e6ad3942db77f8f363c855550619137e8adbfd81e62a2b6b1d5a8ba243","sha256:6d3e2461b01a9503f2e031d24b3ee712bc08842f5a46d2eed9a594ef3b29943f"]
  - id: volumen-en-esfericas
    tier: 3
    prompt: |
      Calcula el volumen del sólido que está dentro de la esfera $x^2 + y^2 + z^2 \le {{R2}}$ y en el cono $\varphi \le {{al}}$ (en esféricas, $\varphi$ es el ángulo con el eje $z$). Respuesta: un número redondeado a **3 decimales**.
    variants:
      - values: {"R2":9,"al":"\\pi/4"}
        answers: ["sha256:9577f0872df6acd5000679bc8cfae8810477cfe242cc0da70b168bff3d56e069"]
      - values: {"R2":4,"al":"\\pi/3"}
        answers: ["sha256:a8075aa2d495ea00c756ebfccc649bc958ce74b8b7ef6102e61d19e693db1536"]
      - values: {"R2":1,"al":"\\pi/6"}
        answers: ["sha256:ff58cf13d426628570038e568b01a7bd247e806b16612b6743e6d29e6637f5aa"]
      - values: {"R2":4,"al":"\\pi/6"}
        answers: ["sha256:99475f194853a9f9039c40905c887486f5f1d79dcf835d81b6004393bea0a952"]
      - values: {"R2":9,"al":"\\pi/3"}
        answers: ["sha256:78f1f09b363742334154063a521ef2d79381adba940edb9ceaace4f5bcad251d"]
      - values: {"R2":1,"al":"\\pi/4"}
        answers: ["sha256:3db1a95928b71a4d834a1e8b9006a4aded8ff21b64933ecd0275a784e6b3d2e9"]
  - id: integral-de-linea
    tier: 3
    prompt: |
      Calcula $\displaystyle\int_C \mathbf F \cdot d\mathbf r$ para $\mathbf F(x, y) = (y, x^2)$ a lo largo de la curva $y = {{m}}$ desde $(0, 0)$ hasta $(1, 1)$. Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"m":"x^3"}
        answers: ["sha256:d21e521c96083228ab147b640af1b09353e24f2c39b15b36bcf1a19dc9933944"]
      - values: {"m":"x^4"}
        answers: ["sha256:5692f1cf872d088aad44323c8e2f0878811ec2e6240b4aa7fc6ceec051457763"]
      - values: {"m":"x"}
        answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
      - values: {"m":"x^5"}
        answers: ["sha256:079a0803a6302c44ba3bce68d893f18e7d4354a8b32d67e9902f1c422eb07555"]
      - values: {"m":"x^6"}
        answers: ["sha256:ecc984ff4d443ca2d8211ed0e4787f83eaf64b7d08bb7ade0b11a8cb52336edf"]
      - values: {"m":"\\sqrt x"}
        answers: ["sha256:5692f1cf872d088aad44323c8e2f0878811ec2e6240b4aa7fc6ceec051457763"]
  - id: campo-conservativo
    tier: 3
    prompt: |
      Comprueba que $\mathbf F = (2xy + z,\ x^2,\ x)$ es conservativo, halla un potencial y calcula el trabajo $\int_C \mathbf F\cdot d\mathbf r$ a lo largo de **cualquier** camino de $(0, 0, 0)$ a ${{P}}$. Respuesta: un número.
    variants:
      - values: {"P":"(2, 1, 1)"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"P":"(1, 3, 2)"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"P":"(2, -1, 4)"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"P":"(3, 1, -2)"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"P":"(1, 1, 1)"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"P":"(2, 2, 3)"}
        answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
  - id: teorema-de-green
    tier: 3
    prompt: |
      Usa el teorema de Green para calcular $\displaystyle\oint_C (-y^3\,dx + x^3\,dy)$, donde $C$ es la circunferencia de radio ${{R}}$ centrada en el origen, recorrida en sentido antihorario. Respuesta: un número redondeado a **3 decimales**.
    variants:
      - values: {"R":"2"}
        answers: ["sha256:b1c1594830f51a471ab7c51927b2f8915d9bf690ec3f5ba1be1f8bb71901ad24"]
      - values: {"R":"0{,}5"}
        answers: ["sha256:1b63c5ed5ca82e938f27bb5506d77411b2b4e483c534d45ee345b024e2355b87"]
      - values: {"R":"1{,}5"}
        answers: ["sha256:1884523e8e1fdc4d4f752864d289671dbc6507ca37e783cc57088b6d8d793239"]
      - values: {"R":"3"}
        answers: ["sha256:47dd607bbafd00bd0558f393600370007cb44ecffba123ff29d0cbe8d6ff9cb8"]
      - values: {"R":"0{,}8"}
        answers: ["sha256:9c469c02124c150c4826e8265080b63de03547a394eeea158e00323c1ad0b44e"]
      - values: {"R":"1{,}2"}
        answers: ["sha256:89426118449913af1b4961fcffabff1e050ab821829b1fa7264d49a0e4a4df56"]
  - id: teorema-de-la-divergencia
    tier: 3
    prompt: |
      Calcula el flujo del campo $\mathbf F = {{F}}$ hacia fuera de la esfera $x^2 + y^2 + z^2 = {{R2}}$ con el teorema de la divergencia. Respuesta: un número redondeado a **2 decimales**.
    variants:
      - values: {"F":"(x,\\ y,\\ z)","R2":9}
        answers: ["sha256:e43d31bcb6b413fd4572021dab86b7b41470c6ece3a3c182aebc978c19079b04"]
      - values: {"F":"(2x,\\ y,\\ 0)","R2":1}
        answers: ["sha256:44da643946708499b646fee51ec494a19799fdc5acc53d79a8af9b6071427f1f"]
      - values: {"F":"(x,\\ 2y,\\ 3z)","R2":4}
        answers: ["sha256:a09b0e97531a394c2aa8aaa3b5012ad313b6129a0e661f71964af3b18ac0df02"]
      - values: {"F":"(0,\\ 0,\\ z)","R2":4}
        answers: ["sha256:7b1982ceec46467abeecaca0c8aab3cc6c2004a0a1543ec04efc246568963088"]
      - values: {"F":"(3x,\\ y,\\ z)","R2":1}
        answers: ["sha256:28c09c40f6efa63a212c9426bd9417de11179c3f87562183efe28b48590c3bee"]
      - values: {"F":"(x,\\ -y,\\ 2z)","R2":4}
        answers: ["sha256:5f7e497c16eacfdf4367fa33feb9f5c90ce0338525b5dbc05591f10933418568"]
  - id: r-gradiente-direccion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Hacia dónde apunta el gradiente $\nabla f$ en un punto donde no se anula?
    options:
      - |
        La de máximo crecimiento de $f$
      - |
        La de máximo decrecimiento de $f$
      - |
        Tangente a la curva de nivel
      - |
        Siempre el eje $x$
    answers: ["sha256:66af1997a30269750b8d355721e75588b248e6c72391b0360e689815caec70b1"]
  - id: r-silla
    tier: 1
    type: opcion
    review: true
    prompt: |
      En un punto crítico, $f_{xx} = 2$, $f_{yy} = -3$, $f_{xy} = 0$. ¿Qué es?
    options:
      - |
        Mínimo local
      - |
        Máximo local
      - |
        Punto de silla
      - |
        El criterio no decide
    answers: ["sha256:f1c74321d9a96a76a1bec223aa86b8d79033d5960fa6f9b3fb3290b36bdd6e48"]
  - id: r-jacobiano-polares
    tier: 1
    type: opcion
    review: true
    prompt: |
      Al pasar a coordenadas polares, ¿cómo se escribe el elemento de área?
    options:
      - |
        $dA = dr\,d\theta$
      - |
        $dA = r\,dr\,d\theta$
      - |
        $dA = r^2\,dr\,d\theta$
      - |
        $dA = \sin\theta\,dr\,d\theta$
    answers: ["sha256:eba702143af2ba512493ed6995c7ebbd969b387d403381f6fb5f46c2a9cd67b8"]
  - id: r-parciales-no-bastan
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si una función de dos variables tiene derivadas parciales en un punto, ¿qué se puede asegurar en ese punto?
    options:
      - |
        Que sea diferenciable
      - |
        Que sea continua
      - |
        Que tenga plano tangente
      - |
        Nada de lo anterior: puede ni siquiera ser continua
    answers: ["sha256:97df68a0edec93bccd22708e1d0129f28c5b0edc4cd98e565618a8c5febffd9c"]
  - id: r-curva-cerrada
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale el trabajo de un campo conservativo a lo largo de una curva **cerrada**?
    answers: ["sha256:6aec5b21762ca2c070d49c01f9b8eebc81d1be9d43cb7fae83af838350678f08","sha256:130d905dcf0579af5a1c2ea9ce6c847eebd78f80b02b514489c23d830e9662f4","sha256:d29948dab1d4f5eb82b5e6ad1bf64d818cb083054713bd4f24b6b77e9f8cf29c"]
  - id: r-volumen-esfera
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué integral da el volumen de la bola de radio $R$?
    options:
      - |
        $\int_0^{2\pi}\!\int_0^{\pi}\!\int_0^R \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$
      - |
        $\int_0^{2\pi}\!\int_0^{\pi}\!\int_0^R \rho\,d\rho\,d\varphi\,d\theta$
      - |
        $\int_0^{2\pi}\!\int_0^{2\pi}\!\int_0^R \rho^2\,d\rho\,d\varphi\,d\theta$
      - |
        $\int_0^{\pi}\!\int_0^R r\,dr\,d\theta$
    answers: ["sha256:d5dece242b2dee6457fed6dbdaf16adf686cae5f6012a674ad0ad61a2851ec29"]
  - id: r-lagrange-idea
    tier: 2
    type: opcion
    review: true
    prompt: |
      En un extremo de $f$ restringido a $g = c$ (multiplicadores de Lagrange), ¿qué condición se cumple?
    options:
      - |
        El gradiente de $f$ se anula
      - |
        Los gradientes de $f$ y de $g$ son paralelos
      - |
        Los gradientes son perpendiculares
      - |
        $f = g$
    answers: ["sha256:dfa2a4de67880e3844c23c66085ae14decf8e397231bd64af13076b4e72a76e3"]
---

# Cálculo multivariable: derivadas parciales, optimización, integrales múltiples y cálculo vectorial

El mundo rara vez depende de una sola variable: la temperatura depende de la posición y del tiempo, el beneficio de una empresa
de varios precios, el error de una red neuronal de millones de pesos. Este nodo extiende el cálculo de [[mat-calculo-1]] y
[[mat-calculo-2]] a funciones de varias variables: cómo cambian (derivadas parciales, gradiente, jacobiano), dónde alcanzan sus
extremos (hessiano, multiplicadores de Lagrange), cómo se acumulan sobre regiones del plano y del espacio (integrales múltiples y
cambio de variables) y cómo se comportan los campos vectoriales (trabajo, flujo, teoremas de Green, Stokes y Gauss). Es el
lenguaje de la física de campos, de la ingeniería y del aprendizaje automático.

## Objetivos

Al terminar sabrás:

1. Calcular derivadas parciales, gradientes, derivadas direccionales y jacobianos, y aplicar la regla de la cadena en forma matricial.
2. Escribir el plano tangente y el polinomio de Taylor de segundo orden de una función de dos variables.
3. Encontrar y clasificar extremos con el hessiano, y resolver problemas con restricciones mediante multiplicadores de Lagrange.
4. Calcular integrales dobles y triples con Fubini y cambiar a coordenadas polares, cilíndricas y esféricas con el jacobiano.
5. Calcular integrales de línea, reconocer campos conservativos y hallar su potencial.
6. Aplicar los teoremas de Green, de la divergencia y de Stokes.

## Qué debes dominar antes

[[mat-calculo-2]] (integrales, sustitución, series de Taylor), [[mat-algebra-lineal-1]] (vectores, matrices, determinantes) y
[[mat-geometria-analitica]] (rectas, planos, producto escalar y vectorial).

> [!question] Test de entrada
> 1. Deriva $g(t) = e^{3t}\sin t$.
> 2. ¿Cuánto vale el determinante de $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$?
> 3. Calcula $\int_0^1 x e^{x^2}\,dx$.
>
> Respuestas: $e^{3t}(3\sin t + \cos t)$; $3$; $\tfrac{e - 1}{2}$.

## 1. Para qué sirve

- **Aprendizaje automático**: entrenar un modelo es minimizar una función de muchas variables siguiendo el **gradiente** en sentido
  contrario ([[ia-aprendizaje-estadistico]], [[ia-redes-profundas]]).
- **Física e ingeniería**: el campo eléctrico es menos el gradiente del potencial; la ley de Gauss y la de Ampère de
  [[fis-electricidad-magnetismo-1]] son los teoremas de la divergencia y de Stokes; la masa, el centro de masas y los momentos de
  inercia son integrales múltiples.
- **Economía y logística**: maximizar beneficio o minimizar coste con un presupuesto o una capacidad fijos es un problema de Lagrange.
- **Probabilidad**: la densidad conjunta de varias variables se integra sobre regiones; la integral de Gauss
  $\int e^{-x^2}dx = \sqrt\pi$ se demuestra con polares (sección 6).

## 2. Funciones de varias variables

> [!practico]
> Muchas cantidades dependen de varias cosas a la vez: la altura de un terreno depende de dónde estás (dos coordenadas), la
> temperatura de una habitación, del punto y de la hora. Un mapa topográfico dibuja una función de dos variables con sus
> **curvas de nivel**: líneas que unen puntos de la misma altura.


Una función $f: \mathbb R^n \to \mathbb R$ asigna un número a cada punto $(x_1, \dots, x_n)$. Para $n = 2$ se visualiza con su gráfica
$z = f(x, y)$ (una superficie) o con sus **curvas de nivel** $f(x, y) = c$ (como las isobaras de un mapa del tiempo). Una función
$\mathbf F: \mathbb R^n \to \mathbb R^m$ (varias salidas) es un **campo vectorial** si $m = n$.

**Límites.** $\lim_{(x,y)\to(a,b)} f = L$ significa que $f$ se acerca a $L$ por **cualquier** camino. Para probar que un límite no
existe basta con dos caminos que den valores distintos: $f(x, y) = \frac{xy}{x^2 + y^2}$ vale $0$ sobre los ejes y $\tfrac12$ sobre la
recta $y = x$, así que no tiene límite en el origen (aunque sus restricciones a cada eje sean continuas).

## 3. Derivadas parciales, gradiente y derivada direccional

> [!practico]
> En una montaña, la pendiente depende de hacia dónde mires. La derivada parcial es la pendiente si caminas solo hacia el
> este (o solo hacia el norte); la derivada direccional, la pendiente en cualquier rumbo. El **gradiente** es una flecha que
> señala la dirección más empinada cuesta arriba, y su longitud dice cuán empinada es. Por eso el agua baja en contra del
> gradiente, y los programas de aprendizaje automático también.


La **derivada parcial** $\frac{\partial f}{\partial x}$ (o $f_x$) es la derivada respecto a $x$ tratando las demás variables como
constantes. El **gradiente** las reúne en un vector:

$$
\nabla f = \left(\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_n}\right).
$$

La **derivada direccional** en la dirección del vector **unitario** $\mathbf u$ mide el ritmo de cambio al moverse según $\mathbf u$:
$D_{\mathbf u} f(\mathbf a) = \lim_{t\to0} \frac{f(\mathbf a + t\mathbf u) - f(\mathbf a)}{t}$.

**Teorema.** Si $f$ es diferenciable en $\mathbf a$, entonces $D_{\mathbf u} f(\mathbf a) = \nabla f(\mathbf a)\cdot\mathbf u$.

> [!formal] Con rigor: demostración de la fórmula de la derivada direccional
> *Demostración.* $g(t) = f(\mathbf a + t\mathbf u)$ es la composición de $f$ con la recta $t \mapsto \mathbf a + t\mathbf u$; por la regla de
> la cadena (sección 4), $g'(0) = \nabla f(\mathbf a)\cdot\mathbf u$, y $g'(0)$ es justamente la derivada direccional. $\blacksquare$

Consecuencias, por la desigualdad de Cauchy-Schwarz ($\nabla f\cdot\mathbf u \le \lVert\nabla f\rVert$, con igualdad si $\mathbf u$
apunta como $\nabla f$):

- el gradiente apunta en la dirección de **máximo crecimiento**, y su módulo es esa tasa máxima;
- el gradiente es **perpendicular a las curvas de nivel** (a lo largo de ellas $f$ no cambia: $D_{\mathbf u}f = 0$).

**Ejemplo resuelto 1.** $f(x, y) = x^2 + 3y^2$ en $(1, 1)$: $\nabla f = (2x, 6y) = (2, 6)$. La tasa máxima de crecimiento es
$\lVert(2, 6)\rVert = \sqrt{40} = 2\sqrt{10}$, hacia $(2, 6)/\sqrt{40}$. En la dirección $\mathbf u = (1, 0)$ la derivada es $2$; en la
dirección $(3, -1)/\sqrt{10}$, tangente a la elipse de nivel, es $(6 - 6)/\sqrt{10} = 0$.

## 4. Diferenciabilidad, plano tangente y regla de la cadena

> [!practico]
> Si miras un trozo muy pequeño de una superficie lisa, parece plano, igual que la Tierra parece plana desde la calle. Ese
> plano es el **plano tangente**, y sirve para aproximar la función cerca del punto. La regla de la cadena dice cómo se
> encadenan los cambios: si la altura depende de la posición y la posición del tiempo, el ritmo al que subes es la suma de
> lo que aporta cada dirección.


$f$ es **diferenciable** en $\mathbf a$ si se aproxima bien por una función lineal:

$$
f(\mathbf a + \mathbf h) = f(\mathbf a) + \nabla f(\mathbf a)\cdot\mathbf h + o(\lVert\mathbf h\rVert).
$$

(Si las parciales existen y son continuas cerca de $\mathbf a$, $f$ es diferenciable; la mera existencia de las parciales no basta: el
ejemplo $xy/(x^2 + y^2)$ las tiene en el origen y ni siquiera es continua.) La gráfica tiene entonces **plano tangente**

$$
z = f(a, b) + f_x(a, b)(x - a) + f_y(a, b)(y - b),
$$

y esa misma fórmula es la **linealización**, que aproxima $f$ cerca de $(a, b)$.

Para $\mathbf F: \mathbb R^n \to \mathbb R^m$ la derivada es la **matriz jacobiana** $J_{\mathbf F}$ ($m \times n$, con
$\partial F_i/\partial x_j$ en la fila $i$ y la columna $j$). **Regla de la cadena:** la derivada de una composición es el
**producto** de las jacobianas,

$$
J_{\mathbf G\circ\mathbf F}(\mathbf a) = J_{\mathbf G}(\mathbf F(\mathbf a))\,J_{\mathbf F}(\mathbf a).
$$

En el caso más usado, si $z = f(x, y)$ con $x = x(t)$, $y = y(t)$: $\dfrac{dz}{dt} = f_x\,x'(t) + f_y\,y'(t)$.

**Ejemplo resuelto 2.** $z = x^2y$, $x = e^t$, $y = t^2$: $\frac{dz}{dt} = 2xy\cdot e^t + x^2\cdot 2t = 2e^{2t}t^2 + 2te^{2t}$. Comprobación
directa: $z = e^{2t}t^2$ y $z' = 2e^{2t}t^2 + 2te^{2t}$. $\checkmark$ Esta regla, aplicada capa tras capa, es la **retropropagación** con la
que se entrenan las redes neuronales.

## 5. Extremos

> [!practico]
> En la cima de una colina y en el fondo de un valle el terreno es plano: el gradiente es cero. Pero también lo es en un
> **puerto de montaña**, que sube en una dirección y baja en otra (un punto de silla). Las derivadas segundas distinguen los
> tres casos. Y si solo puedes moverte por un camino (una restricción), el punto más alto del camino es donde el camino
> roza tangente a una curva de nivel: eso es lo que expresan los multiplicadores de Lagrange.


**Derivadas segundas.** Si las parciales segundas son continuas, el orden no importa (**teorema de Schwarz**): $f_{xy} = f_{yx}$.
La **matriz hessiana** $H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy}\end{pmatrix}$ da el **polinomio de Taylor de segundo orden**:

$$
f(\mathbf a + \mathbf h) \approx f(\mathbf a) + \nabla f(\mathbf a)\cdot\mathbf h + \tfrac12\,\mathbf h^{\mathsf T} H(\mathbf a)\,\mathbf h .
$$

**Puntos críticos.** En un extremo local interior, $\nabla f = \mathbf 0$ (si no, moverse según $\pm\nabla f$ subiría o bajaría). En un
punto crítico, el término cuadrático decide (**criterio del hessiano** en dos variables, con $D = f_{xx}f_{yy} - f_{xy}^2$):

- $D > 0$ y $f_{xx} > 0$: **mínimo** local; $D > 0$ y $f_{xx} < 0$: **máximo** local;
- $D < 0$: **punto de silla** (sube en unas direcciones y baja en otras);
- $D = 0$: el criterio no decide.

(En general, mínimo si $H$ es definida positiva, es decir, si todos sus autovalores son positivos: [[mat-algebra-lineal-1]].)

> [!formal] Con rigor: por qué funciona el criterio del hessiano
> Cerca de un punto crítico, $f(\mathbf a + \mathbf h) - f(\mathbf a) \approx \frac12 Q(\mathbf h)$ con $Q(h, k) = f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2$. Si
> $f_{xx} \neq 0$, completando cuadrados,
> $Q(h, k) = f_{xx}\left(h + \frac{f_{xy}}{f_{xx}}k\right)^2 + \frac{D}{f_{xx}}k^2$ con $D = f_{xx}f_{yy} - f_{xy}^2$. Si $D > 0$, los dos coeficientes tienen
> el signo de $f_{xx}$ y $Q$ tiene signo constante (mínimo si es positivo, máximo si es negativo); si $D < 0$, tienen signos
> opuestos y $Q$ toma valores de ambos signos (silla). El resto de Taylor es de orden $\lVert\mathbf h\rVert^3$ y no cambia el signo
> cerca del punto cuando $D \neq 0$. $\blacksquare$

**Ejemplo resuelto 3.** $f(x, y) = x^2 + xy + y^2 - 3x$. $\nabla f = (2x + y - 3,\ x + 2y) = \mathbf 0$ da $x = 2$, $y = -1$. $H$ es constante,
con $D = 2\cdot2 - 1 = 3 > 0$ y $f_{xx} = 2 > 0$: mínimo, de valor $f(2, -1) = 4 - 2 + 1 - 6 = -3$. En un dominio cerrado y acotado, los
extremos **absolutos** se buscan entre los puntos críticos interiores y los de la frontera.

**Multiplicadores de Lagrange.** Para optimizar $f$ sujeta a $g(x, y) = c$: en el óptimo, la curva de nivel de $f$ es tangente a la
restricción, así que sus normales son paralelas,

$$
\nabla f = \lambda\,\nabla g, \qquad g = c .
$$

El multiplicador $\lambda$ mide cuánto cambia el óptimo si se relaja la restricción (el «precio sombra» en economía).

**Ejemplo resuelto 4.** Punto de la recta $x + y = 2$ más cercano al origen: se minimiza $f = x^2 + y^2$ con $g = x + y$.
$(2x, 2y) = \lambda(1, 1)$ da $x = y$, y la restricción $x = y = 1$: distancia $\sqrt2$ (la de la fórmula punto-recta
$\lvert 0 + 0 - 2\rvert/\sqrt2$). $\checkmark$

## 6. Integrales múltiples

> [!practico]
> Una integral doble suma algo repartido por una superficie: la masa de una chapa de grosor variable, la lluvia caída sobre
> un campo, el volumen bajo un techo curvo. Se calcula por rebanadas: primero se suma a lo largo de cada fila y después se
> suman las filas. Cambiar de coordenadas (por ejemplo, a polares en un disco) es elegir rebanadas que encajen con la
> forma, sin olvidar que las rebanadas nuevas no miden lo mismo (el jacobiano lo corrige).


La **integral doble** $\iint_R f\,dA$ es el límite de sumas de $f(\text{punto})\cdot\text{área}$ sobre una partición de $R$ en
rectángulos; si $f \ge 0$ es el volumen bajo la gráfica. Se calcula como **integrales iteradas** (teorema de **Fubini**, válido para $f$
continua en una región acotada razonable):

$$
\iint_{[a,b]\times[c,d]} f\,dA = \int_a^b\!\!\int_c^d f(x, y)\,dy\,dx = \int_c^d\!\!\int_a^b f(x, y)\,dx\,dy .
$$

Si la región no es un rectángulo, los límites interiores dependen de la variable exterior: para $D = \{0 \le x \le 1,\ x^2 \le y \le x\}$,
$\iint_D f = \int_0^1\int_{x^2}^{x} f\,dy\,dx$. A veces conviene **cambiar el orden** de integración para que la integral interior se pueda
calcular.

**Cambio de variables.** Si $(x, y) = T(u, v)$ es una transformación biyectiva y diferenciable de una región $S$ en $R$,

$$
\iint_R f(x, y)\,dx\,dy = \iint_S f(T(u, v))\,\bigl\lvert\det J_T(u, v)\bigr\rvert\,du\,dv ,
$$

porque un rectángulo diminuto $du\,dv$ se transforma en un paralelogramo de área $\lvert\det J_T\rvert\,du\,dv$ (el determinante mide
cómo una aplicación lineal escala las áreas).

- **Polares** $x = r\cos\theta$, $y = r\sin\theta$: $dA = r\,dr\,d\theta$.
- **Cilíndricas** (polares más $z$): $dV = r\,dr\,d\theta\,dz$.
- **Esféricas** $x = \rho\sin\varphi\cos\theta$, $y = \rho\sin\varphi\sin\theta$, $z = \rho\cos\varphi$ ($\varphi$ medido desde el eje $z$):
  $dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$.

**Ejemplo resuelto 5: la integral de Gauss.** Sea $I = \int_{-\infty}^{\infty} e^{-x^2}dx$. Entonces

$$
I^2 = \iint_{\mathbb R^2} e^{-(x^2 + y^2)}\,dA = \int_0^{2\pi}\!\!\int_0^\infty e^{-r^2}\,r\,dr\,d\theta = 2\pi\cdot\tfrac12 = \pi ,
$$

luego $I = \sqrt\pi$. Ninguna primitiva elemental de $e^{-x^2}$ existe; el cambio a polares, gracias al factor $r$, hace la integral
inmediata. Es la constante de normalización de la distribución normal ([[mat-probabilidad]]).

**Ejemplo resuelto 6: centro de masas.** Semidisco $x^2 + y^2 \le R^2$, $y \ge 0$, de densidad uniforme. Por simetría $\bar x = 0$, y
$\bar y = \frac{1}{\text{área}}\iint y\,dA = \frac{2}{\pi R^2}\int_0^\pi\int_0^R r\sin\theta\cdot r\,dr\,d\theta = \frac{2}{\pi R^2}\cdot\frac{R^3}{3}\cdot2 = \frac{4R}{3\pi}$.

## 7. Cálculo vectorial

> [!practico]
> Un campo vectorial pone una flecha en cada punto: el viento sobre un mapa, la corriente de un río, la fuerza de un imán.
> Las preguntas naturales son cuánto **trabajo** hace el campo sobre algo que se mueve por un camino, cuánto **fluido** atraviesa
> una superficie, y si el campo **brota** de un punto o **gira** alrededor de él. Los teoremas de Green, Gauss y Stokes dicen que
> lo que pasa en el borde de una región se puede calcular con lo que pasa dentro.


**Integral de línea.** El **trabajo** de un campo $\mathbf F$ a lo largo de una curva $C$ parametrizada por $\mathbf r(t)$, $a \le t \le b$, es

$$
\int_C \mathbf F\cdot d\mathbf r = \int_a^b \mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt ,
$$

y no depende de la parametrización elegida (sí del sentido de recorrido: invertirlo cambia el signo).

**Campos conservativos.** $\mathbf F$ es **conservativo** si $\mathbf F = \nabla\varphi$ para un **potencial** $\varphi$. Entonces, por la
regla de la cadena y el teorema fundamental del cálculo,

$$
\int_C \nabla\varphi\cdot d\mathbf r = \varphi(\mathbf r(b)) - \varphi(\mathbf r(a)),
$$

que solo depende de los extremos (el trabajo de la gravedad o de un campo electrostático), y es nulo sobre curvas cerradas. En una región
sin agujeros, $\mathbf F = (P, Q)$ es conservativo si y solo si $P_y = Q_x$ (en tres dimensiones, si su **rotacional** es nulo). El potencial
se halla integrando: de $\varphi_x = P$ se obtiene $\varphi$ salvo una función de las demás variables, que se ajusta con las otras componentes.

**Divergencia y rotacional.** Para $\mathbf F = (P, Q, R)$: $\operatorname{div}\mathbf F = \nabla\cdot\mathbf F = P_x + Q_y + R_z$ (cuánto
«brota» el campo de cada punto) y $\operatorname{rot}\mathbf F = \nabla\times\mathbf F$ (cuánto «gira»).

**Teorema de Green.** Si $C$ es la frontera de una región $D$ del plano, recorrida en sentido antihorario,

$$
\oint_C P\,dx + Q\,dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dA .
$$

Con $P = -y/2$, $Q = x/2$ el integrando vale $1$: el área de $D$ es $\frac12\oint_C x\,dy - y\,dx$ (así mide áreas un planímetro).

**Teorema de la divergencia (Gauss).** Para una región sólida $V$ con superficie frontera $S$ orientada hacia fuera,
$\displaystyle\iint_S \mathbf F\cdot\mathbf n\,dS = \iiint_V \operatorname{div}\mathbf F\,dV$: el flujo que sale es lo que brota dentro.

**Teorema de Stokes.** Para una superficie $S$ con borde $C$ (orientados de forma compatible),
$\displaystyle\oint_C \mathbf F\cdot d\mathbf r = \iint_S (\nabla\times\mathbf F)\cdot\mathbf n\,dS$.

Los tres son la misma idea que el teorema fundamental del cálculo: integrar una derivada sobre una región equivale a evaluar en su
frontera. Aplicados a los campos eléctrico y magnético dan las formas integrales de las ecuaciones de Maxwell.

## 8. Comprobar con un programa

```python
import math


def simpson(f, a, b, n=2000):
    h = (b - a) / n
    return h / 3 * (f(a) + f(b) + sum(f(a + i * h) * (4 if i % 2 else 2) for i in range(1, n)))


# Integral de Gauss: ∫ e^(-x²) en [-8, 8] ≈ √π (las colas fuera son despreciables).
assert abs(simpson(lambda x: math.exp(-x * x), -8, 8) - math.sqrt(math.pi)) < 1e-9

# Centro de masas del semidisco de radio 1: ȳ = 4/(3π), con integrales iteradas en cartesianas.
area = simpson(lambda x: math.sqrt(1 - x * x), -1, 1, 20000)
momento = simpson(lambda x: (1 - x * x) / 2, -1, 1)          # ∫ (∫_0^√(1-x²) y dy) dx
assert abs(area - math.pi / 2) < 1e-5 and abs(momento / area - 4 / (3 * math.pi)) < 1e-5

# Gradiente numérico frente al analítico de f = x² + 3y² en (1, 1).
f = lambda x, y: x * x + 3 * y * y
h = 1e-6
grad = ((f(1 + h, 1) - f(1 - h, 1)) / (2 * h), (f(1, 1 + h) - f(1, 1 - h)) / (2 * h))
assert abs(grad[0] - 2) < 1e-6 and abs(grad[1] - 6) < 1e-6
```

## 9. Errores típicos

- Usar un vector **no unitario** en la derivada direccional.
- Concluir que una función es diferenciable porque existen sus parciales.
- Olvidar el **jacobiano** al cambiar de variables (el $r$ de las polares, el $\rho^2\sin\varphi$ de las esféricas).
- Poner límites constantes en una región que no es un rectángulo, o confundir el orden de los límites al cambiar el orden de integración.
- Aplicar el criterio del hessiano sin comprobar antes que el gradiente se anula, o darlo por concluyente cuando $D = 0$.
- Olvidar la frontera al buscar extremos absolutos en un dominio cerrado.
- Recorrer la curva de Green en sentido horario (cambia el signo) o aplicar «rotacional nulo $\Rightarrow$ conservativo» en una región con agujeros.

## 10. Resumen

- $\nabla f$: dirección de máximo crecimiento, perpendicular a las curvas de nivel; $D_{\mathbf u} f = \nabla f\cdot\mathbf u$.
- Diferenciable: plano tangente; jacobiana; regla de la cadena = producto de jacobianas.
- Extremos: $\nabla f = 0$ y hessiano ($D > 0$, signo de $f_{xx}$; $D < 0$ silla); Lagrange: $\nabla f = \lambda\nabla g$.
- Fubini; cambio de variables con $\lvert\det J\rvert$: $r$, $r$, $\rho^2\sin\varphi$; $\int e^{-x^2} = \sqrt\pi$.
- Integral de línea; conservativo $\Leftrightarrow$ potencial $\Leftrightarrow$ independencia del camino; Green, Gauss y Stokes.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se calcula y qué significa el gradiente; derivada direccional con vector unitario.
2. Criterio del hessiano en dos variables y multiplicadores de Lagrange.
3. $dA = r\,dr\,d\theta$ y $dV = \rho^2\sin\varphi\,d\rho\,d\varphi\,d\theta$.
4. Campo conservativo: el trabajo es la diferencia de potencial.
5. Green, divergencia y Stokes: la integral de una derivada sobre una región es una integral sobre su frontera.

## Siguiente

el nodo de cálculo vectorial del tramo siguiente (función inversa e implícita, cambio de variables, integrales de superficie y los teoremas de Green, Gauss y Stokes con detalle), [[mat-ecuaciones-diferenciales]] y, en física,
[[fis-mecanica-clasica]] y [[fis-electromagnetismo]], que usan este lenguaje en cada página.
