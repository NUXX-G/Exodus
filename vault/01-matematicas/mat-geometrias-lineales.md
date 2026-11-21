---
id: mat-geometrias-lineales
title: "Geometrías lineales: espacios afines, euclídeos y proyectivos; cónicas y cuádricas"
area: matematicas
trunk_level: 10
prerequisites: [mat-algebra-lineal, mat-geometria-euclidea, mat-geometria-espacio]
academic_sources:
  - "Costa, A. F.; Lafuente, J. Curso de Geometría Afín y Geometría Euclidiana (GAGE). Sanz y Torres; y Outerelo, E.; Sánchez Abril, J. M. Nociones de Geometría Proyectiva. Sanz y Torres: textos de «Geometrías lineales» (61022010), 2.º del Grado en Matemáticas y del doble grado de la UNED. Guía 2026-27: espacios afines y subespacios, aplicaciones afines y teorema fundamental, clasificación de endomorfismos afines, geometría euclídea, isometrías y semejanzas; espacios proyectivos, dualidad, razón doble, homografías y cuádricas proyectivas y afines."
  - "Audin, M. Geometry. Springer (Universitext), 2003, caps. I (geometría afín), II-IV (geometría euclídea: generalidades, plano y espacio), V (geometría proyectiva) y VI (cónicas y cuádricas)."
  - "Coxeter, H. S. M. Projective Geometry, 2.ª ed. Springer, 1987."
ctf_flag: "sha256:ee0824a4ba390a413c011612e902a98cab966cd2e2e4b6edf23630a93b726fe1"
hints:
  - "Concepto: un punto de Pⁿ(F_q) es una recta vectorial de F_q^{n+1}: hay (q^{n+1} − 1) vectores no nulos y cada recta tiene q − 1 de ellos. Una recta proyectiva de P³ es un plano vectorial de F_q⁴."
  - "Herramienta: (a) y (b) salen de la fórmula (q^{n+1} − 1)/(q − 1). (c) Cuenta pares de vectores independientes de F₃⁴ y divide por el número de pares que generan un mismo plano: (3⁴ − 1)(3⁴ − 3) / ((3² − 1)(3² − 3)). Compruébalo generando todos los planos por fuerza bruta (solo hay 81 vectores)."
  - "Documentación: Audin, cap. V (espacios proyectivos); Coxeter, Projective Geometry (planos finitos); el texto de Outerelo y Sánchez Abril de la UNED."
exercises:
  - id: coordenadas-baricentricas
    tier: 1
    prompt: |
      Halla las coordenadas baricéntricas $(\lambda_A, \lambda_B, \lambda_C)$ del punto $P = {{P}}$ respecto a $A = {{A}}$,
      $B = {{B}}$, $C = {{C}}$ (es decir, $P = \lambda_AA + \lambda_BB + \lambda_CC$ con $\lambda_A + \lambda_B + \lambda_C = 1$).
      Respuesta: `a;b;c` (fracciones «p/q» si hace falta).
    variants:
      - values: {"A":"(0, 0)","B":"(4, 0)","C":"(0, 4)","P":"(1, 2)"}
        answers: ["sha256:fc0660ee2de45e40f403ffed64b2e15b6685eaef5d50125b8d97f9a84f42a27a"]
      - values: {"A":"(1, 1)","B":"(5, 1)","C":"(1, 7)","P":"(2, 3)"}
        answers: ["sha256:2fb3fb275a7d3c372691aa99ee01507e90f0ab8ad84187b919a7ca24adcb4a0c"]
      - values: {"A":"(0, 0)","B":"(6, 0)","C":"(3, 6)","P":"(2, 2)"}
        answers: ["sha256:778db71f52e0b0b466e039f009909d84f25e1d77dbbedd15953f42f1c91e6aee"]
      - values: {"A":"(-2, 0)","B":"(2, 0)","C":"(0, 4)","P":"(0, 1)"}
        answers: ["sha256:70224a71e81cd10fd35118438dcf320a0ad9ab36b61e03bc8931cf9191f7e40e"]
      - values: {"A":"(0, 0)","B":"(5, 0)","C":"(0, 5)","P":"(4, 3)"}
        answers: ["sha256:355a1d8579cdc31809d24d258db1ed6ba62bfeb45757343cc7dcdb5feefb5518"]
      - values: {"A":"(1, 0)","B":"(4, 1)","C":"(2, 5)","P":"(2, 2)"}
        answers: ["sha256:f3ac95be7817f8cc4e0dd29c711c4f79b53a59b0943d5f3ea5fcd44d38327b50"]
  - id: imagen-por-una-afinidad
    tier: 1
    prompt: |
      Una aplicación afín $f$ del plano lleva $(0, 0)$ a ${{O}}$, $(1, 0)$ a ${{E1}}$ y $(0, 1)$ a ${{E2}}$. ¿Cuánto vale $f{{Q}}$?
      Respuesta: `x;y`.
    variants:
      - values: {"O":"(1, 2)","E1":"(3, 2)","E2":"(1, 5)","Q":"(2, 1)"}
        answers: ["sha256:98b6417c1c7ba8003e9b2fbd5443a10c00f801f5215e2d7ee13d2543f03a7024"]
      - values: {"O":"(0, 1)","E1":"(2, 2)","E2":"(-1, 3)","Q":"(1, 1)"}
        answers: ["sha256:2192dfe7c072e51bc665f3cf7966dd5260acafe140c94ddbd3e647a592956039"]
      - values: {"O":"(2, 0)","E1":"(2, 3)","E2":"(5, 0)","Q":"(3, -1)"}
        answers: ["sha256:4372f692743f17b5084c2f2eb0e1955d73883e3338d3a5915e5a5ca48bc94fd8"]
      - values: {"O":"(1, 1)","E1":"(4, 2)","E2":"(0, 3)","Q":"(2, 2)"}
        answers: ["sha256:1ff0601aaac1c5e778e1aa23996f5f9c1046e89b50ed658052365b2ac5f878e7"]
      - values: {"O":"(-1, 0)","E1":"(1, 1)","E2":"(-1, 2)","Q":"(3, 1)"}
        answers: ["sha256:98b6417c1c7ba8003e9b2fbd5443a10c00f801f5215e2d7ee13d2543f03a7024"]
      - values: {"O":"(0, 0)","E1":"(1, 2)","E2":"(2, 1)","Q":"(4, 5)"}
        answers: ["sha256:9f04e6c05db808a8244fa333d4ef843b0436828c48b60946643909f9fc2a11b4"]
  - id: punto-fijo-afin
    tier: 2
    prompt: |
      Halla el punto fijo de la afinidad del plano $f(\mathbf x) = A\mathbf x + \mathbf b$ con $A = {{A}}$ y $\mathbf b = {{b}}$.
      Respuesta: `x;y` (fracciones «p/q» si hace falta).
    variants:
      - values: {"A":"\\begin{pmatrix}2 & 1\\\\ 0 & 3\\end{pmatrix}","b":"(1, 2)"}
        answers: ["sha256:5e62480d10ff4732832634eadff0b6b725b6f5222fa245563dc8caedec7e30e5"]
      - values: {"A":"\\begin{pmatrix}0 & -1\\\\ 1 & 0\\end{pmatrix}","b":"(3, 1)"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
      - values: {"A":"\\begin{pmatrix}3 & 0\\\\ 1 & 2\\end{pmatrix}","b":"(-2, 4)"}
        answers: ["sha256:ac1081fa47c31fe0a4c7d8d18d92f1140a042ad60b79ee617495ab36572743ee"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 2 & 1\\end{pmatrix}","b":"(2, 0)"}
        answers: ["sha256:5e62480d10ff4732832634eadff0b6b725b6f5222fa245563dc8caedec7e30e5"]
      - values: {"A":"\\begin{pmatrix}2 & 0\\\\ 0 & 2\\end{pmatrix}","b":"(-3, 5)"}
        answers: ["sha256:75c58b29ecf6ca7045586ae703cd048f05c13b970012daf3318bfaa5ba8afcb3"]
      - values: {"A":"\\begin{pmatrix}0 & 2\\\\ 1 & 0\\end{pmatrix}","b":"(1, 1)"}
        answers: ["sha256:4c9d6ce54526a49908e6941a1eab40b7a97746d243ca1a874dec8fbf9027cf67"]
  - id: centro-de-un-giro
    tier: 2
    prompt: |
      La isometría $f(\mathbf x) = R\mathbf x + \mathbf b$, con $R$ el giro de ${{th}}^\circ$ alrededor del origen y $\mathbf b = {{b}}$, es un giro
      de ${{th}}^\circ$ alrededor de otro punto. ¿Cuál? Respuesta: `x;y` (fracciones «p/q» si hace falta).
    variants:
      - values: {"th":90,"b":"(4, 2)"}
        answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
      - values: {"th":180,"b":"(6, -2)"}
        answers: ["sha256:f2f65cb33cc34b632dc25dba55cd86f9cfb769b206ba6fb4561982e69fd4a6ad"]
      - values: {"th":270,"b":"(2, 4)"}
        answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
      - values: {"th":90,"b":"(0, 6)"}
        answers: ["sha256:1414789ebe1937eb0117546f99695e50c16d418338ca44b2e904dbfb6dcd1f94"]
      - values: {"th":180,"b":"(3, 5)"}
        answers: ["sha256:296cef6bb54c8ca36c6dfc25440aba971bc7cbcaccba6ef5ea395cecb849bb77"]
      - values: {"th":270,"b":"(-4, 2)"}
        answers: ["sha256:6ab65dfa80b0287b56d70e892af9056c0c336aa1c51f9423752f47163d72db7d"]
  - id: razon-doble
    tier: 1
    prompt: |
      Calcula la razón doble $(a, b; c, d) = \dfrac{(c - a)(d - b)}{(c - b)(d - a)}$ de los puntos de la recta $a = {{a}}$, $b = {{b}}$,
      $c = {{c}}$, $d = {{d}}$. Respuesta: fracción «p/q» (o un entero).
    variants:
      - values: {"a":0,"b":1,"c":3,"d":4}
        answers: ["sha256:94bde72ac7ab146ef3b3e3e6d50e409ce32a02ce9bc62c1d6618ee7110f659b4"]
      - values: {"a":1,"b":2,"c":4,"d":7}
        answers: ["sha256:ff060f43ada244fcedb7073528f9137c7a181b5ad54fffa2c749988cc3f423b2"]
      - values: {"a":-1,"b":0,"c":2,"d":5}
        answers: ["sha256:ff060f43ada244fcedb7073528f9137c7a181b5ad54fffa2c749988cc3f423b2"]
      - values: {"a":0,"b":2,"c":3,"d":7}
        answers: ["sha256:1f725b2546ca139c94382324ff0edf34b96cb31f8ff7fa12b374ee37108d66db"]
      - values: {"a":2,"b":3,"c":5,"d":9}
        answers: ["sha256:7ed0a593a2d98187aa7e7b7609761d7871699cb9273e858026213f6efe920714"]
      - values: {"a":-2,"b":1,"c":4,"d":6}
        answers: ["sha256:ff060f43ada244fcedb7073528f9137c7a181b5ad54fffa2c749988cc3f423b2"]
  - id: homografia-de-la-recta
    tier: 3
    prompt: |
      Una homografía de la recta proyectiva lleva $0 \mapsto {{p}}$, $1 \mapsto {{q}}$ e $\infty \mapsto {{r}}$. ¿A qué punto lleva ${{x}}$?
      (Usa que conserva la razón doble, o escríbela como $t \mapsto \frac{\alpha t + \beta}{\gamma t + \delta}$.) Respuesta: fracción «p/q» (o un entero).
    variants:
      - values: {"p":1,"q":2,"r":4,"x":3}
        answers: ["sha256:22642ec82122f84c5ce20ca9a60a6851d5f04917f4bde0284c3938ea9666d056"]
      - values: {"p":0,"q":3,"r":1,"x":2}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"p":2,"q":5,"r":3,"x":4}
        answers: ["sha256:56a7807f638a5cca9d9112a11663e126ced1efad870fb8fe8c82b20ed84a23a3"]
      - values: {"p":-1,"q":1,"r":0,"x":2}
        answers: ["sha256:0d7f0e336166042f8cc9e4c20ae427ba367c279d6e3dfd1bd7247b0fbce61d50"]
      - values: {"p":3,"q":4,"r":6,"x":5}
        answers: ["sha256:2c0d6dcdf8e50b625ca32a0a0d7a9de7a1ca972057451fdece5efdfda79507e9"]
      - values: {"p":1,"q":-1,"r":2,"x":4}
        answers: ["sha256:2b593dd179568b67d91cace3321beb328273ebce17eef2198b0a13a06d5c2b6d"]
  - id: interseccion-homogenea
    tier: 1
    prompt: |
      Con coordenadas homogéneas (producto vectorial de los coeficientes), halla el punto de corte de las rectas ${{l}}$ y ${{m}}$.
      Respuesta: `x;y` (fracciones «p/q» si hace falta).
    variants:
      - values: {"l":"x + y - 3 = 0","m":"x - y - 1 = 0"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"l":"2x + y - 5 = 0","m":"x - 3y + 1 = 0"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"l":"3x + 2y - 17 = 0","m":"x - y + 1 = 0"}
        answers: ["sha256:2b2ae0ddb1ad07ad30f68dbf8869395377eb9bc264d7da773d28f5934f0f5e59"]
      - values: {"l":"x + 2y - 4 = 0","m":"3x + y - 2 = 0"}
        answers: ["sha256:4678a16a156b8b96e70f49eb04791bcbb641f47e8000b01a5abd834c58bf319f"]
      - values: {"l":"2x - y + 1 = 0","m":"x + y - 7 = 0"}
        answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
      - values: {"l":"x + 4y - 9 = 0","m":"2x - 2y + 2 = 0"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
  - id: tipo-de-conica
    tier: 2
    prompt: |
      ¿Qué tipo de cónica (no degenerada) es ${{q}} = 0$? Respuesta: `elipse`, `hiperbola` o `parabola` (sin tilde).
    variants:
      - values: {"q":"x^2 + 4y^2 - 2x + 8y + 1"}
        answers: ["sha256:dff4b7891615bc0c5051f771c00a3c0fc9d3b82a5a7e7cafa824f856785eec70"]
      - values: {"q":"x^2 - y^2 + 2x - 3"}
        answers: ["sha256:5429b31b00163942d28eca3c8916fc55858cc9e1b200cc4bdfe05049696c50f1"]
      - values: {"q":"x^2 + 2xy + y^2 - 4x + 1"}
        answers: ["sha256:d548d9d07ab0b0fbd76e870c96902db9c51ebca887f0f3eff368c8fe2e878d98"]
      - values: {"q":"2x^2 + xy + y^2 - 1"}
        answers: ["sha256:dff4b7891615bc0c5051f771c00a3c0fc9d3b82a5a7e7cafa824f856785eec70"]
      - values: {"q":"xy + x + y - 2"}
        answers: ["sha256:5429b31b00163942d28eca3c8916fc55858cc9e1b200cc4bdfe05049696c50f1"]
      - values: {"q":"3x^2 - 2xy + 3y^2 - 8"}
        answers: ["sha256:dff4b7891615bc0c5051f771c00a3c0fc9d3b82a5a7e7cafa824f856785eec70"]
  - id: centro-de-una-conica
    tier: 2
    prompt: |
      Halla el centro de la cónica ${{q}} = 0$ (el punto donde se anula el gradiente). Respuesta: `x;y` (fracciones «p/q» si hace falta).
    variants:
      - values: {"q":"x^2 + 4y^2 - 2x + 8y + 1"}
        answers: ["sha256:984edcdc9ca111eafbad4504594b28050012884d2dd3a67690f33c8d67ce1c99"]
      - values: {"q":"x^2 - y^2 + 2x - 3"}
        answers: ["sha256:40e770dd59fd22983777fc08cf5ab770de326760423ae503b5ab5c1350cfddbc"]
      - values: {"q":"2x^2 + xy + y^2 - 4x + 2y"}
        answers: ["sha256:bfb7255eb1e9a8e6c7fbe63e29f04ac101a2c8571eb84e0eccf90d8eef0b639f"]
      - values: {"q":"x^2 + 2xy - y^2 + 4x + 1"}
        answers: ["sha256:ee36d32dd597db6bf748084a494fc1aef5f9c4df9ae5b8430e83dabf3b68e4ac"]
      - values: {"q":"3x^2 - 2xy + 3y^2 + 4x - 12y"}
        answers: ["sha256:4678a16a156b8b96e70f49eb04791bcbb641f47e8000b01a5abd834c58bf319f"]
      - values: {"q":"x^2 + xy + y^2 - 4x - 5y + 1"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
  - id: distancia-entre-rectas-que-se-cruzan
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula la distancia entre la recta que pasa por ${{P}}$ con dirección ${{u}}$ y la que pasa por ${{Q}}$ con dirección ${{v}}$.
    variants:
      - values: {"P":"(0, 0, 0)","u":"(1, 1, 0)","Q":"(0, 1, 2)","v":"(1, 0, 1)"}
        answers: ["sha256:0006e0b4a49bd83a2097a3e237be81fc71cf29a01481497d42a1eaa61a58230e","sha256:e4f8b729341a5a2939f41e05e839de20fd6a54be78be82644042530b523d1de8","sha256:d25ae5cd2943b0368325b64a1c247d5b9a8dabcdc38d5152e048c7218d76dd96"]
      - values: {"P":"(1, 0, 0)","u":"(0, 1, 1)","Q":"(0, 0, 3)","v":"(1, 2, 0)"}
        answers: ["sha256:543e8e4312c38cf34a28f5f0ef9d132279b07d7b394efabc2c9949c4de20414a","sha256:bef14ee674ff6263dddb0b4e4b1c9032bed9398c93263666eed4b1f39484d2c5","sha256:158fddd3d0cf24ba0bf570f9db5332fd2d767c89b233f8c9eae6f3cdfc29d19b"]
      - values: {"P":"(0, 2, 0)","u":"(1, 0, 0)","Q":"(0, 0, 5)","v":"(0, 1, 0)"}
        answers: ["sha256:f6222ab319eb3529323c6ffbbc67c881ffb88545ac56effc7d61336196141abc","sha256:32ec8efc9b915df308ee4bb1a4421f2c78bf0dd3c31ae8fbdd81e76a917acb73","sha256:0ef48974a1438a00dd596175a6bcf7b6f976845b4854189df3dcd47315fb7c7f"]
      - values: {"P":"(1, 1, 1)","u":"(1, 2, 3)","Q":"(2, 0, 4)","v":"(0, 1, 1)"}
        answers: ["sha256:8a608038064afa15d8a4452f89c0a6d8b05703169d632f71fca38f91811c0d0e","sha256:49060dcaf4b068bd4eb7bb3e187d5acf3dbef2e9e799622c40ff2c8223d787ab","sha256:e4c6ae67b66e48b190c9e7a07c328dbf8e171ebc528ed25cb6adfea3c805a5f6"]
      - values: {"P":"(0, 0, 1)","u":"(2, 1, 0)","Q":"(3, 1, 0)","v":"(0, 0, 1)"}
        answers: ["sha256:985ab2b2ef9a1d927d98fa07606b60cd7f71c4b26a97a109161e20dec5928306","sha256:041d06165b54ad3a53a539535ffc6ecbdbea2535a2f07bda9376e2147e3ae257","sha256:189ce507e8ee3361fbdc1b4cf883e3349616eaa6ed66f9a9ffc2d38b7822060f"]
      - values: {"P":"(1, 2, 0)","u":"(1, -1, 1)","Q":"(0, 0, 3)","v":"(2, 1, 1)"}
        answers: ["sha256:520b14d71a48e80f722e309e5fa6348968eba28b1ddb03574273a45385e6da4e","sha256:b7908469746e6c724d94bbc80f86fc5111d74c94b3bd1e4df04a98ed3fa3a3b0","sha256:302222c86b408930cad1bc47a8cc82e520439be8e83a6e799ee4c127bf68e1bd"]
  - id: puntos-del-plano-proyectivo-finito
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos puntos tiene el plano proyectivo $\mathbb P^2(\mathbb F_{{{q}}})${{extra}}? (Cada punto es una recta vectorial de $\mathbb F_{{{q}}}^3$.)
    variants:
      - values: {"q":3,"extra":""}
        answers: ["sha256:1c3f49605245a079f37afd49ca368290f1ccd682e4a80acefc88b089e6ed6d53","sha256:17dd5b937e29c1290293e7f00f783b3d19657e7961c53bcc6f6dbfe0360363a2","sha256:faa1237aedadcb8516351baff266f1adcfb2e3229fcd35ab4afcecd5563a54fe"]
      - values: {"q":5,"extra":""}
        answers: ["sha256:b23eb02a266527135e5bd3e0f10047f2e757a05ac9e59ff72e91cfd8c26089dc","sha256:1c00ddfde446d12b8b82c9ca928260a033de10aae1ac440ce850766c66dafcd2","sha256:f1e4db8a654f0fb0fa627df3b4d02d5026c0ae3aa000dfa952aa20e6e7b17bbd"]
      - values: {"q":7,"extra":""}
        answers: ["sha256:94da6def28e8bff9f3ce93aa01910008e4dbdb7fcca9211c04466a9c205c7ce4","sha256:2c835b4db2213759004976661ede01cbc1d675c0cf87464848ad10dcf38cc6b9","sha256:37cbbafa6532a0281f65a8080e3d7fa050effcd97c193d1d183c636fb6d103da"]
      - values: {"q":11,"extra":""}
        answers: ["sha256:97ed955d103098a68b46ee595aeed637a352b21f014eaf3ac8a3d8de5d4f55da","sha256:8265a2727763334800a4eff79740cb8018e5bd0aceca333d732fbfb196d337bb","sha256:dc645b8132d8e52933a8b14f7259958b061e9e964f28a737a914dafe2aa6c207"]
      - values: {"q":13,"extra":""}
        answers: ["sha256:abd74f06432513eafc6e7a923998fb991db8c3487dab1433d3129d0bfcbb9ac5","sha256:7885668c09758fdf249d7ef1d7f63f1657143eceffa24edf5285c11b8f78309d","sha256:b31e9c29ca876f292557e6697bac557d3ba9191841dc02c1f1db8540206e887c"]
      - values: {"q":4,"extra":" (el cuerpo de $4$ elementos)"}
        answers: ["sha256:4b54250c829700ba9580036362308e135b53b6a5f3b1c7cd4d854b8284e2377a","sha256:d1389e6bb35602975f08fa46a99c324a82166936982a69b3d2a0c18ba3b87663","sha256:8f55816ae52569fbfc22724ff2bbfa297dbfc51fa8fb087e2a5b4ef6d838206e"]
  - id: afin-conserva-razon-simple
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que una aplicación afín $f(x) = \varphi(x) + b$ (con $\varphi$ lineal) conserva la **razón simple** de tres
      puntos alineados: si $C = A + t\,(B - A)$, entonces $f(C) = f(A) + t\,(f(B) - f(A))$. ¿Conserva también las distancias?
    sealed: "gz64:H4sIAAAAAAACCn1Su27cMBD8lYHAQpJ1V7hUkOJ8SZciSBobYYoVtSfToUiZD8OG4U9ylU+4Hwson853KVwR+5id5c48F8GZFLWzRVts3eggduVjhc+Q8oH8dKtzdIFONJjIE1Qiw+E+afYEcd3gRiAwombLGXtTYYVdeX02Yk4eo/9qWOG6Eign52G0ZTK6p75aS7t1FmKLz9jgArG8wgqbSrTSCiHtrty+UW3Oxm3nppOMlJ0eTLnA59Dnhihlc4RdLbC37AzZlVcLwwHVvFGbxMN8qG1GzBvk/U76K9GCDaZk46FRoNcPuuecDjyMfKhsqgwTYAtDGHUYCZN3k/NK7/9aiCjWEFJ2htSfcJ/Is5BW2rr+okMkqzSFtq5hXR4xsGVPZo3vzoPveJyMa46SXj4KcADt9q8WT+jTZLQiRNdTgKGA/jjy0xzfJ55f5Wxg/0AWweU9Q+bXwY0c/f6VQl2jVFms5Z4Czkc3OEumWuObmyeF/Wu2yjIMQfM4ec4rsUFdK6c028h1jZ5hnB10TD0HBNd5RrLLfTyrSNKW7lCZ4zD707ChUK2LpvCp81oV7a/nQnkd2WtXtMXXoLzuPnDqwY13KUS904ps7/LGWZx3c+b93v+a2WalQ9FevjRnfD/znJieOBt5hU122GJkPCGQoiwxzs2PWwqR4LqY9czcekhkcmXiXvf0EeUPDpOzPR/Ve1c1u+REAXtimWb+ZbL5iZ4O3jnn+f3yD3ZBYBwvBAAA"
  - id: r-paralelas-proyectivo
    tier: 1
    type: opcion
    review: true
    prompt: |
      En el plano proyectivo, ¿qué les pasa a dos rectas paralelas del plano afín?
    options:
      - |
        No se cortan nunca
      - |
        Se cortan en el origen
      - |
        Se cortan en un punto del infinito
      - |
        Coinciden
    answers: ["sha256:35c91ef3ec859cebee6b0ecb392d4257bff3b498a3a35b5ba6d753535c107c7c"]
  - id: r-afin-conserva
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué conserva **toda** aplicación afín biyectiva?
    options:
      - |
        El paralelismo y la razón simple
      - |
        Las distancias
      - |
        Los ángulos
      - |
        Las áreas
    answers: ["sha256:464aac0940bfb81d471e2816436857106c2e77a37c7ffd45066da71e29a89c88"]
  - id: r-proyectiva-conserva
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué conserva **toda** homografía?
    options:
      - |
        El paralelismo
      - |
        La razón simple
      - |
        Los puntos del infinito
      - |
        La razón doble de cuatro puntos alineados
    answers: ["sha256:7f1427b623c818b2c715024c621e72b05a4a69d917d031d1a15d16d5e61e5190"]
  - id: r-cinco-puntos
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos puntos en posición general determinan una cónica?
    answers: ["sha256:ed2a63fe7daba9e21efaec9ee0d3f0f663e472c5b0e8b5d0a0d0627ceceab942","sha256:55ed81fe82c7c0fff4e27f2c1b687891b506814ce58051fb60da1ce130b82eec","sha256:e220595f9cb381d0932826c9d7cf1cde7fcbe8978a9588fc0b921983f5bf9e97"]
  - id: r-fano
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos puntos tiene el plano de Fano $\mathbb P^2(\mathbb F_2)$?
    answers: ["sha256:ca82b114597acc06b441eda81ba763c8dd2b9b26ce2d6bf4e40dc14e7877f669","sha256:14c378575cc60a27b124bbc510c7bc62715550c5e70459a19a99d85cc42d3951","sha256:7888b58c47d2810bc4ddfcc71b109c33c74bfb93b823a6e4be50800ed4afd400"]
  - id: r-discriminante
    tier: 2
    type: opcion
    review: true
    prompt: |
      Una cónica no degenerada $Ax^2 + Bxy + Cy^2 + \dots = 0$ tiene $B^2 - 4AC > 0$. ¿De qué tipo es?
    options:
      - |
        Elipse
      - |
        Hipérbola
      - |
        Parábola
      - |
        No se puede saber
    answers: ["sha256:4e0cd8eef789b449bcf68ccd3a25db68979391d038eeb0cf86c488eb7032af2c"]
  - id: r-dimension-proyectivo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué dimensión tiene el espacio vectorial del que $\mathbb P^2$ es el conjunto de rectas vectoriales?
    answers: ["sha256:a0196152053b2de2645d40e9c4660d054038335f52aa89e9856c5796657d37ee","sha256:0cd01947d807b62f07aa776b4821e644e62a37292ed02287f4c3fbe471d0c283","sha256:b4b646909df06e20507c8a1a172dc4376cca1c16773006f5848b00ee5a04e2b3"]
---

# Geometrías lineales: espacios afines, euclídeos y proyectivos; cónicas y cuádricas

[[mat-geometria-euclidea]] construyó la geometría desde axiomas; [[mat-algebra-lineal]] dio el lenguaje de los vectores. Este
nodo los une: la geometría **afín** (puntos, rectas, paralelismo, sin medir), la **euclídea** (con distancias y ángulos) y la
**proyectiva** (añadiendo los puntos del infinito, donde las paralelas se cortan), y con ellas la clasificación de cónicas y
cuádricas. Sigue la asignatura «Geometrías lineales» de segundo de la UNED.

## Objetivos

Al terminar sabrás:

1. Trabajar con puntos y vectores de un espacio afín: combinaciones afines, coordenadas baricéntricas y subespacios.
2. Escribir y clasificar aplicaciones afines (traslaciones, homotecias, afinidades) y hallar sus puntos fijos.
3. Calcular distancias y ángulos entre subespacios euclídeos y reconocer isometrías y semejanzas.
4. Usar coordenadas homogéneas, la dualidad y la razón doble, y construir homografías.
5. Clasificar cónicas y cuádricas desde los puntos de vista proyectivo, afín y euclídeo.

## Qué debes dominar antes

[[mat-algebra-lineal]] (aplicaciones lineales, formas cuadráticas, isometrías vectoriales), [[mat-geometria-euclidea]] (axiomas,
isometrías, inversión) y [[mat-geometria-espacio]] (rectas y planos de $\mathbb R^3$).

> [!question] Test de entrada
> 1. ¿Cuál es el punto medio de $(2, 4)$ y $(6, 0)$?
> 2. ¿Es lineal la aplicación $x \mapsto 2x + 1$?
> 3. ¿Qué tipo de cónica es $x^2 + y^2 = 1$?
>
> Respuestas: $(4, 2)$; no (no lleva el $0$ al $0$), es afín; una circunferencia (una elipse).

## 1. Para qué sirve

- **Gráficos por ordenador y visión**: las cámaras se modelan con **coordenadas homogéneas** y matrices $4\times4$; la perspectiva es
  una transformación proyectiva, y por eso las vías del tren «se cortan» en el horizonte.
- **Robótica**: posiciones y orientaciones son aplicaciones afines (rotación más traslación) en una sola matriz ([[rob-cinematica]]).
- **Física y astronomía**: las órbitas son cónicas; las cuádricas describen superficies de nivel de energías y tensores.
- **Matemáticas**: la geometría proyectiva es la base de la geometría algebraica, y los planos proyectivos finitos, de códigos y
  diseños combinatorios.

## 2. Espacios afines

> [!practico]
> En el plano de una mesa, un **punto** es un sitio y un **vector** es un desplazamiento. Puedes restar dos sitios (el
> desplazamiento que lleva de uno a otro) y sumar un desplazamiento a un sitio, pero no tiene sentido sumar dos sitios
> («Madrid más Sevilla»). Sí tiene sentido una **media ponderada** de sitios: el punto medio, o el centro de gravedad de
> unas masas. Eso es la geometría afín: todo lo que se puede decir sin medir.

Un **espacio afín** sobre un espacio vectorial $V$ es un conjunto $\mathbb A$ de puntos con una operación «punto + vector = punto»
tal que, para cada par de puntos $P, Q$, hay un único vector $\overrightarrow{PQ}$ con $P + \overrightarrow{PQ} = Q$. Fijado un origen
$O$, cada punto tiene coordenadas, y $\mathbb A$ se identifica con $\mathbb R^n$; pero el origen no es especial.

**Combinaciones afines.** Para puntos $P_1, \dots, P_k$ y pesos con $\sum \lambda_i = 1$, el punto $\sum\lambda_iP_i := O + \sum\lambda_i\overrightarrow{OP_i}$
no depende del origen elegido. Con tres puntos no alineados $A, B, C$ del plano, todo punto se escribe de forma única como
$P = \lambda_AA + \lambda_BB + \lambda_CC$: son sus **coordenadas baricéntricas**. *Ejemplo:* el centroide tiene $(\frac13, \frac13, \frac13)$;
los puntos interiores del triángulo, las tres positivas. Cada $\lambda$ es un cociente de áreas con signo:
$\lambda_A = \frac{\operatorname{área}(PBC)}{\operatorname{área}(ABC)}$.

**Subespacios afines**: $P + W$ con $W$ subespacio vectorial (su **dirección**); su dimensión es la de $W$. Dos subespacios son
**paralelos** si una dirección contiene a la otra. En el espacio, dos rectas pueden cortarse, ser paralelas o **cruzarse** (ni lo
uno ni lo otro).

## 3. Aplicaciones afines

> [!practico]
> Una aplicación afín es una transformación que lleva rectas a rectas y respeta el paralelismo y los puntos medios, pero
> puede estirar, inclinar o encoger: la sombra de una ventana sobre el suelo a pleno sol, o una foto vista en un ángulo
> pequeño. Las distancias y los ángulos pueden cambiar; las proporciones a lo largo de una recta, no.

$f : \mathbb A \to \mathbb A'$ es **afín** si $f(P + v) = f(P) + \varphi(v)$ con $\varphi$ lineal (la **parte lineal**). En coordenadas,
$f(x) = Ax + b$. Conserva combinaciones afines, alineación, paralelismo y la **razón simple** de tres puntos alineados. Queda
determinada por las imágenes de $n + 1$ puntos en posición general (un **sistema de referencia afín**).

**Teorema fundamental de la geometría afín** (sobre $\mathbb R$, dimensión $\ge 2$): una biyección que lleva puntos alineados a
puntos alineados es una aplicación afín.

**Puntos fijos y clasificación.** Los fijos resuelven $(I - A)x = b$. Si $1$ no es autovalor de $A$, hay exactamente uno. *Ejemplos:*
$x \mapsto x + b$ es una **traslación** (sin fijos si $b \neq 0$); $x \mapsto kx + b$ con $k \neq 1$ es una **homotecia** de razón $k$
y centro $\frac{b}{1 - k}$ (en la recta, $x \mapsto 2x + 1$ tiene centro $-1$); $x \mapsto Rx + b$ con $R$ un giro no trivial es un
**giro** alrededor de su único punto fijo (con $R$ de $90^\circ$ y $b = (2, 0)$, el centro es $(1, 1)$).

## 4. Geometría euclídea

> [!practico]
> Añadir una regla y un transportador al espacio afín es añadir un producto escalar: ahora se pueden medir distancias y
> ángulos. Las transformaciones que lo respetan todo son los movimientos rígidos; las que respetan los ángulos y cambian
> todas las distancias en la misma proporción son las semejanzas (como ampliar una foto).

Un **espacio euclídeo** es un espacio afín cuya dirección tiene un producto escalar. La distancia es $d(P, Q) = \lVert\overrightarrow{PQ}\rVert$.
La distancia entre dos subespacios se alcanza en un par de puntos cuyo vector de unión es perpendicular a ambas direcciones
(la **perpendicular común**). Para dos rectas que se cruzan en $\mathbb R^3$, $P + s\mathbf u$ y $Q + t\mathbf v$,
$$
d = \frac{\lvert\overrightarrow{PQ}\cdot(\mathbf u\times\mathbf v)\rvert}{\lVert\mathbf u\times\mathbf v\rVert}.
$$
*Ejemplo:* las rectas $(1, 0, 0) + t(0, 1, 0)$ y $(0, 0, 1) + t(1, 0, 0)$ están a distancia $1$.

**Isometrías** (movimientos): $f(x) = Ax + b$ con $A$ ortogonal; su clasificación en dimensión $2$ y $3$ combina la de la parte lineal
([[mat-algebra-lineal]] §7d) con los puntos fijos (giros, traslaciones, simetrías, simetrías con deslizamiento, movimientos
helicoidales; ver [[mat-geometria-euclidea]]). **Semejanzas**: $f(x) = kAx + b$ con $A$ ortogonal y $k > 0$; si $k \neq 1$ tienen
un único punto fijo, su **centro**.

## 5. El espacio proyectivo

> [!practico]
> En una foto de unas vías de tren, los raíles paralelos se juntan en el horizonte. La geometría proyectiva toma eso en
> serio: añade un punto «en el infinito» a cada dirección, y entonces dos rectas cualesquiera del plano se cortan siempre.
> A cambio, deja de tener sentido medir distancias o decir qué está «entre» qué; lo que se conserva es la razón doble, la
> cantidad que no cambia al hacer una foto.

El **espacio proyectivo** $\mathbb P^n(K)$ es el conjunto de **rectas vectoriales** de $K^{n+1}$. Un punto se escribe en **coordenadas
homogéneas** $[x_0 : x_1 : \dots : x_n]$, definidas salvo un factor no nulo. Los puntos con $x_0 \neq 0$ forman una copia del espacio
afín $K^n$ (dividiendo por $x_0$), y los de $x_0 = 0$ son el **hiperplano del infinito**: una dirección por cada clase de rectas
paralelas.

**Rectas del plano.** Una recta es $\{a_0x_0 + a_1x_1 + a_2x_2 = 0\}$, de coordenadas $[a_0 : a_1 : a_2]$. Dos rectas distintas se cortan
**siempre** en un único punto, que se obtiene con el producto vectorial de sus coeficientes (las paralelas, en un punto del
infinito). **Dualidad**: cambiando «punto» por «recta» y «está en» por «pasa por», todo teorema del plano proyectivo da otro
teorema.

**Razón doble.** Para cuatro puntos de una recta con coordenada $a, b, c, d$,
$$
(a, b; c, d) = \frac{(c - a)(d - b)}{(c - b)(d - a)} .
$$
*Ejemplo:* $(0, 1; 2, 3) = \frac{2\cdot2}{1\cdot3} = \frac43$. Es el invariante básico: una **homografía** (aplicación inducida por un isomorfismo
lineal de $K^{n+1}$; en la recta, $t \mapsto \frac{\alpha t + \beta}{\gamma t + \delta}$ con $\alpha\delta - \beta\gamma \neq 0$) conserva la razón doble.

**Teorema fundamental de la geometría proyectiva.** Dados $n + 2$ puntos en posición general en $\mathbb P^n$ y otros $n + 2$, hay una
única homografía que lleva unos en otros. En la recta: tres puntos distintos se pueden llevar a otros tres cualesquiera, y la
imagen del cuarto queda fijada por la razón doble.

> [!formal] Con rigor: la homografía conserva la razón doble
> Con $h(t) = \frac{\alpha t + \beta}{\gamma t + \delta}$, se comprueba que $h(x) - h(y) = \frac{(\alpha\delta - \beta\gamma)(x - y)}{(\gamma x + \delta)(\gamma y + \delta)}$.
> En el cociente $\frac{(h(c) - h(a))(h(d) - h(b))}{(h(c) - h(b))(h(d) - h(a))}$, el factor $\alpha\delta - \beta\gamma$ aparece dos veces arriba y dos
> abajo, y cada denominador $\gamma x + \delta$ de $a, b, c, d$ aparece una vez arriba y una vez abajo: todo se cancela y queda
> $(a, b; c, d)$. $\blacksquare$

**Planos proyectivos finitos.** Sobre $\mathbb F_q$, $\mathbb P^2$ tiene $q^2 + q + 1$ puntos y otras tantas rectas, cada recta tiene $q + 1$
puntos y por cada punto pasan $q + 1$ rectas. El de $\mathbb F_2$ es el **plano de Fano**, con $7$ puntos y $7$ rectas.

## 6. Cónicas y cuádricas

> [!practico]
> Elipse, parábola e hipérbola son la misma curva vista de distintas maneras: las tres son cortes de un cono, y en el plano
> proyectivo son indistinguibles. La diferencia aparece al mirar cómo cortan la recta del infinito: la elipse no la toca, la
> parábola la toca en un punto y la hipérbola la corta en dos (sus dos direcciones asintóticas).

Una **cónica** es el conjunto de ceros de una forma cuadrática en tres variables homogéneas: $\mathbf x^\top Q\,\mathbf x = 0$ con $Q$
simétrica $3\times3$ (una **cuádrica** de $\mathbb P^3$, con $Q$ de $4\times4$). En coordenadas afines,
$Ax^2 + Bxy + Cy^2 + Dx + Ey + G = 0$.

- **Clasificación proyectiva** (sobre $\mathbb R$): por el rango y la signatura de $Q$ (ley de Sylvester, [[mat-algebra-lineal]]). Todas
  las cónicas no degeneradas con puntos reales son proyectivamente iguales.
- **Clasificación afín**: por la intersección con la recta del infinito, que depende de la parte cuadrática:
  $B^2 - 4AC < 0$ **elipse**, $= 0$ **parábola**, $> 0$ **hipérbola** (si la cónica no es degenerada, $\det Q \neq 0$).
- **Centro**: donde se anula el gradiente, $2Ax + By + D = 0$, $Bx + 2Cy + E = 0$; elipses e hipérbolas tienen uno, las parábolas no.
- **Clasificación euclídea**: un giro diagonaliza la parte cuadrática (sus autovalores dan los ejes) y una traslación lleva el centro
  al origen, hasta la ecuación reducida $\frac{x^2}{a^2} \pm \frac{y^2}{b^2} = 1$ o $y^2 = 2px$.

*Ejemplo:* $x^2 + 4xy + y^2 = 1$ tiene $B^2 - 4AC = 12 > 0$: hipérbola, centrada en el origen; los autovalores de
$\begin{pmatrix}1 & 2\\ 2 & 1\end{pmatrix}$ son $3$ y $-1$, y en los ejes girados $45^\circ$ queda $3u^2 - v^2 = 1$. En el espacio, las cuádricas
no degeneradas con centro son el elipsoide y los hiperboloides de una y de dos hojas, y sin centro, los paraboloides elíptico e
hiperbólico.

## 7. Errores típicos

- Sumar puntos como si fueran vectores (solo tienen sentido las combinaciones con pesos que suman $1$).
- Creer que una aplicación afín conserva distancias o ángulos (solo las isometrías y, los ángulos, las semejanzas).
- Pensar que dos rectas del espacio que no se cortan son paralelas: pueden cruzarse.
- Olvidar que las coordenadas homogéneas están definidas salvo un factor ($[1 : 2 : 3] = [2 : 4 : 6]$).
- Clasificar una cónica por el discriminante sin comprobar antes que no es degenerada.
- Usar la razón doble con los puntos en otro orden (cambia de valor).

## 8. Resumen

- Afín: puntos y vectores; combinaciones afines; baricéntricas; subespacios $P + W$; paralelismo y rectas que se cruzan.
- Aplicaciones afines $Ax + b$: conservan paralelismo y razón simple; puntos fijos $(I - A)x = b$; traslación, homotecia, giro.
- Euclídea: distancias y perpendicular común; isometrías ($A$ ortogonal) y semejanzas.
- Proyectiva: rectas vectoriales de $K^{n+1}$, coordenadas homogéneas, puntos del infinito, dualidad, razón doble, homografías;
  $|\mathbb P^2(\mathbb F_q)| = q^2 + q + 1$.
- Cónicas y cuádricas: matriz simétrica; proyectivamente iguales; afín por $B^2 - 4AC$; centro; forma reducida por autovalores.

## Reto

Calcula tres enteros:

- **a.** El número de puntos del plano proyectivo $\mathbb P^2(\mathbb F_{101})$.
- **b.** El número de puntos del espacio proyectivo $\mathbb P^3(\mathbb F_7)$.
- **c.** El número de rectas del espacio proyectivo $\mathbb P^3(\mathbb F_3)$.

Formato de la flag: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Un punto no es un vector: se combinan con pesos que suman $1$ (baricéntricas).
2. Afín = lineal + traslación; conserva paralelismo y razón simple; los fijos resuelven $(I - A)x = b$.
3. En el proyectivo dos rectas del plano se cortan siempre (producto vectorial de sus coeficientes).
4. Las homografías conservan la razón doble; tres puntos de la recta determinan la homografía.
5. Elipse, parábola o hipérbola según $B^2 - 4AC$ sea negativo, nulo o positivo.

## Siguiente

[[mat-geometria-diferencial]] (curvas y superficies), [[mat-algebra-conmutativa-galois]] (cónicas como ceros de polinomios, primer
paso de la geometría algebraica) y, en aplicaciones, [[rob-cinematica]].
