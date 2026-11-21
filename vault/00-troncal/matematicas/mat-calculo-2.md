---
id: mat-calculo-2
title: "Cálculo II: integrales, series y polinomios de Taylor"
area: matematicas
trunk_level: 9
prerequisites: [mat-calculo-1, mat-numeros-complejos, mat-integrales-bachillerato]
academic_sources:
  - "Fernández Novoa, J. Análisis Matemático I, 5.ª ed. UNED: texto base de «Funciones de una variable II» (61021074; guía 2026-27: integral de Riemann, teoremas fundamentales, exponencial, logaritmo y trigonométricas, primitivas, integrales impropias, integrales eulerianas, sucesiones y series de funciones, series de potencias)."
  - "Spivak, M. Calculus, 4ª ed. Publish or Perish, 2008, caps. 13-14 (integral y teorema fundamental), 18-19 (logaritmo, exponencial e integración en términos elementales), 20 (aproximación por polinomios) y 22-24 (sucesiones, series, series de potencias). Índice: https://mathpop.com/pages/calculus-spivak-4th-edition-table-of-contents"
  - "Apostol, T. M. Calculus, vol. 1, 2ª ed. Wiley, 1967."
  - "Stewart, J. Calculus: Early Transcendentals. Cengage Learning (varias ediciones)."
  - "Courant, R.; John, F. Introduction to Calculus and Analysis, vol. 1. Springer (Classics in Mathematics)."
hints:
  - "Concepto: la integral definida es el límite de sumas de áreas de rectángulos y, por el teorema fundamental, se calcula con una primitiva: F(b) − F(a). Para encontrar primitivas, piensa «¿qué derivada produce esto?»; si hay una función compuesta, sustitución; si hay un producto de dos tipos distintos (polinomio por exponencial, logaritmo), partes. Una serie converge si los términos decrecen lo bastante deprisa (compara con la geométrica o con 1/n^p)."
  - "Herramienta: comprueba cualquier integral con una cuadratura numérica (regla de Simpson con muchos subintervalos en Python) y cualquier suma con una suma parcial de muchos términos; sympy (`integrate`, `summation`, `series`) sirve para contrastar a mano."
  - "Documentación oficial: docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html (integrales y series); docs.scipy.org/doc/scipy/reference/integrate.html (quad, simpson); Spivak, capítulos sobre integrales, series infinitas y series de Taylor."
exercises:
  - id: integral-de-x2
    tier: 1
    prompt: |
      Calcula $\displaystyle\int_0^{{{a}}} x{{n}}\,dx$. Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"n":"^2","a":6}
        answers: ["sha256:8722616204217eddb39e7df969e0698aed8e599ba62ed2de1ce49b03ade0fede"]
      - values: {"n":"^3","a":2}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"n":"^2","a":5}
        answers: ["sha256:f6d9adb50c957d563d785cd540e684f13bd3685e7c41043350503d932ef6c060"]
      - values: {"n":"^4","a":1}
        answers: ["sha256:bd82a28b1f088b3a186737712fb16fe7323aecb3abc234b38c9534349aaa1757"]
      - values: {"n":"^3","a":3}
        answers: ["sha256:9d1c4db7e720bb0fa36d61c9007f9b75639c3acb1dddc63243bff724931472c4"]
      - values: {"n":"","a":10}
        answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
  - id: integral-de-polinomio
    tier: 1
    prompt: |
      Calcula $\displaystyle\int_{{{a}}}^{{{b}}} ({{f}})\,dx$. Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"f":"6x^2 - 4x + 2","a":0,"b":3}
        answers: ["sha256:73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049"]
      - values: {"f":"3x^2 + 2x - 1","a":1,"b":2}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"f":"x^2 - 6x + 5","a":-1,"b":2}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"f":"9x^2 + 4","a":0,"b":1}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"f":"2x^2 + 3x + 1","a":-2,"b":1}
        answers: ["sha256:8eb625d3c0595535af2fa65cf5d8ae6d1d8ac4d43c08d2db3350778a3e4ca47e"]
      - values: {"f":"4x^2 - 2x","a":1,"b":3}
        answers: ["sha256:722ea6bd09ec10de9f98d131d26d0963e8de0a2e27b5c968066bc989ee2b864d"]
  - id: area-bajo-el-seno
    tier: 1
    prompt: |
      Calcula el área bajo $y = {{f}}$ entre $x = 0$ y $x = {{b}}$ (la función es positiva en ese intervalo). Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"f":"\\cos x","b":"\\tfrac{\\pi}{2}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"f":"\\sin x","b":"\\tfrac{\\pi}{3}"}
        answers: ["sha256:d939926f05444b0f4495fb9629ecbfa80d99a8ec1a20d06800ca5a3d5f4fd276"]
      - values: {"f":"\\sin\\tfrac{x}{2}","b":"\\pi"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"f":"\\sin 2x","b":"\\tfrac{\\pi}{2}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"f":"\\cos 3x","b":"\\tfrac{\\pi}{6}"}
        answers: ["sha256:0d7f0e336166042f8cc9e4c20ae427ba367c279d6e3dfd1bd7247b0fbce61d50"]
      - values: {"f":"\\sin x + \\cos x","b":"\\tfrac{\\pi}{2}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: sustitucion
    tier: 2
    type: numero
    sig: 5
    prompt: |
      Calcula $\displaystyle\int_0^{{{a}}} x\,e^{x^2}\,dx$ (haz $u = x^2$). Respuesta con cinco cifras significativas.
    variants:
      - values: {"a":"0{,}5"}
        answers: ["sha256:208b9801b61bae76ac24205bd5ad34e1b45cc9e1006f922cfdad2b243bb6e23e","sha256:a595117696afa38ebe0ba593052c21637d82c00426db24cd94ef28e08e3e345b","sha256:ed1859d6a7840dc2676369da31c058ecccce5150682da27e6ee5caaeed71908b"]
      - values: {"a":"1{,}5"}
        answers: ["sha256:33efc6b0ed614f4d69ce681383a97aaee55d3fb0ca08ceeba465b14e65294b1c","sha256:92d06b47ad6019708e7d567216734958cb649e898f87d338784a9be25564cfcc","sha256:9b4f727a290df07d79f30fe359728b35c60d930d18096ed249cb0c5f6abeea15"]
      - values: {"a":"0{,}8"}
        answers: ["sha256:b164b09c123afe75086c03a37b9e214dbc224af50abdab74275c45edbfbc96db","sha256:05f968866282d3c3055445ddd06156a0d1a2297d3273152a8cd5f1c9a464f5b7","sha256:4ba64c85ffd29efe12da4ca00456a0b3bf60a4111e5598d133afd0f4522e19d5"]
      - values: {"a":"1{,}2"}
        answers: ["sha256:2ccf2fba553e8aacb1a047c6302a4343ff15a3b7b8f9f01914dfff62cf8ff314","sha256:f194c5ec5c873bea1c6dc2b5351ea80d415edb8b21e2594e1482353ac927c3fb","sha256:60842c58fdd59c4d59063bf74b781e7dab909ee7adffee3bf251fde7be91f1ab"]
      - values: {"a":"2"}
        answers: ["sha256:227eb5802a84b9007540540f2be9219e82d89aae866fcbeb8afda9903f6fd54a","sha256:d4e1eaeb784fad43e672df056627aa70285bcd14301961c9d4c852da66af4251","sha256:8581fa95e3c7084e391a81145729d2b4e7eb193451a29ddeeab36bc66f1492b8"]
      - values: {"a":"0{,}3"}
        answers: ["sha256:812a0eb617c04676f4172ddcb85e336839783ebecbcd660460b99d20f3617537","sha256:516b35bc5c6db6ee7cbc70ec280840afaea47df0887090b4463624aeb3e6dc3e","sha256:b1002a5b745a16b342e4af040f0062261243d1b1f1d1b9239607f5489f1b4418"]
  - id: integral-de-ln
    tier: 2
    type: numero
    sig: 5
    prompt: |
      Calcula $\displaystyle\int_1^{{{b}}} \ln x\,dx$ (por partes). Respuesta con cinco cifras significativas.
    variants:
      - values: {"b":"2"}
        answers: ["sha256:f5e44916aa2160cbe01cdac006f76b446fad3daaf5c72cb58e494ab909e47b63","sha256:da4a2b42a4478127c4487342ba8e1aadf34c385988d4c3205cd061147abbee0f","sha256:01bc8b805fe1bf265cf4c9f808570f1b25c1bb578de150919bf9144a800133d7"]
      - values: {"b":"3"}
        answers: ["sha256:62834802002d65a92fa7c19250c58e89f839d70a7b61a9d5398f3ba14df45733","sha256:88776b48a6a6256603d131e4f1c6504808ed4f39cef61464cd3998c36461a88f","sha256:bd5c6b8cdd9f35d9652b281020bb40585cc87cc39951f62436b86bedf5335d15"]
      - values: {"b":"e^2"}
        answers: ["sha256:fcf73fc53b84db8e7a3f5caa40be19e7f1488b5953cc8d18ccb3bea95109f7f7","sha256:97a7ed4245bb468deff04ffd2c7a6580860fe8ebeace71ddb32033df28859765","sha256:7989b26c801ce04053aad77425c93abf168138b90abe43a234aea49a32ed5cd6"]
      - values: {"b":"5"}
        answers: ["sha256:3f295fcd6498a8facacb9ca3afd792e299707ef01bb1005a8244a30e9eb4c55b","sha256:b6e484344f0ea64fb5fd8bdf02f02418f57f2606f744cbe6b8bfd6a0c4334781","sha256:61e178c9ff1ae1a04a991fe8b9b411926fbbd5a90c206e877638540876e87840"]
      - values: {"b":"10"}
        answers: ["sha256:5efce341bd1b0569be7f17620905add868773885a17ee0b108d0d658be87eec0","sha256:42e19626527e4fa7722d18ea7029b9f533bab0ccd9820026bd3564bc06719768","sha256:6eb1821ca950dd6a4c590e3389660b17340f128e9077e7b31839210b32c36b12"]
      - values: {"b":"e^3"}
        answers: ["sha256:8f6cb89835ef8b8ce8b8ba76c89fa64d3de99fb65aad68ef60aa3a17a93f30dc","sha256:3ca97e2f02a178877850b51e1e108ca1b041f7e1b5bb84aadc62b20c16f5216a","sha256:f0ae5fb85b3f9b19aa2f7f8c5d27548d626c805cdfcc5e0889ec278a7e0eee5c"]
  - id: por-partes
    tier: 2
    type: numero
    sig: 5
    prompt: |
      Calcula $\displaystyle\int_{{{a}}}^{{{b}}} {{f}}\,dx$ (por partes). Respuesta con cinco cifras significativas.
    variants:
      - values: {"f":"x\\sin x","a":"0","b":"\\pi"}
        answers: ["sha256:056e10af76ce64f38401f5cd163e89db55849d366e4f592795eba4189cecfe9d","sha256:fe1536b82ea9a8601b026af353a41867263e3032aa76664c55719d9187c55631","sha256:416e9e68b7bd6018e046574754fd01c117781efbb70072de01d92aa19e295f88"]
      - values: {"f":"x e^{x}","a":"0","b":"2"}
        answers: ["sha256:3d37e10f49b1804f0fb0694a0a960526201fa32aa7a54d13d1b5081ac597804e","sha256:3633923c535097f4696e25547167df90db1cdfdbac6dd8ea60d8d98f0ebaafac","sha256:61c38c127d1bc3b634f8ce43e560f0a395cbc23df28dd74c82763da34fb3c912"]
      - values: {"f":"x e^{-x}","a":"0","b":"1"}
        answers: ["sha256:3d0dfa0d548f120fccd5a8a1873028f8a8f9cacbb2219aa5cb3ddd562452d6e6","sha256:5145baee5bffa3b8f4823415efebb6323881496f4a1805b6a25512f7e92afac2","sha256:e2e56b6d7eeb8b1280bf99740f743be12153cba19af61695b74e8498dc230aec"]
      - values: {"f":"x\\sin x","a":"0","b":"\\tfrac{\\pi}{2}"}
        answers: ["sha256:fc6b8227e39e62f5b3d5bd8df8a4d856726fda07842a2254926c9c335a1903b3","sha256:131b66a0388315f13b11dd9bbf7526345d7e52746cbfe5c290264fe7befde8e6","sha256:696670815f1ad386bc3300dbe8c7c9de84a85b857df7ebdec539d13d665dc677"]
      - values: {"f":"x\\ln x","a":"1","b":"e"}
        answers: ["sha256:b209538952a0e00dccbb3fa1691561091c4da4d4fb7a14450425b2007e293425","sha256:932f6dcd0df28e57a8c51960966b6a1d317847c4f1dd39bc94c77cb8a0f89aad","sha256:62b6bdbab174a27e4f649d88cdbbf9d75b87cf66da767fbc295b19035beeb24e"]
      - values: {"f":"x\\cos x","a":"0","b":"\\pi"}
        answers: ["sha256:12df833ab9fe566bfb9af771e8ee25dc825c172c29b69534105ddbe022a6d92f","sha256:dcd7f77a736b7fe8658c29be13e49c765a6b5dea9cf978f98e8317fec86cb94e","sha256:8bed85ef4c6200f13c1acc68d4f06a2cdb8ef4c394e97915bc58f89f0e88936a"]
  - id: area-entre-curvas
    tier: 2
    prompt: |
      Calcula el área de la región encerrada entre $y = {{k}}x$ e $y = x^2$. Respuesta: fracción «a/b» (o un entero).
    variants:
      - values: {"k":"2"}
        answers: ["sha256:88a09c48f589386b2d18d8be987cffe6a938c9e22314f3542082f7f6243efdb5"]
      - values: {"k":"3"}
        answers: ["sha256:8eb625d3c0595535af2fa65cf5d8ae6d1d8ac4d43c08d2db3350778a3e4ca47e"]
      - values: {"k":"4"}
        answers: ["sha256:27a27566ed800d3efc02e0a1ef96ec52be5e8ef928370bba41e9fc7d1517fc7d"]
      - values: {"k":"5"}
        answers: ["sha256:8a89447100deadef92797386c35c494fe4a1dd1c326690c1d10078bd9cc6a6b3"]
      - values: {"k":"6"}
        answers: ["sha256:76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"]
      - values: {"k":"0{,}5"}
        answers: ["sha256:f63627d56ce2c1122a2be2422a419679d7b516ebcbe868c861a752c625507169"]
  - id: volumen-de-revolucion
    tier: 2
    prompt: |
      Se hace girar alrededor del eje $x$ la región bajo $y = \sqrt{x}$ entre $x = 0$ y $x = {{a}}$. El volumen del sólido es $k\pi$. ¿Cuánto vale $k$? (Pista: $V = \pi\int y^2\,dx$.)
      Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"a":6}
        answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
      - values: {"a":7}
        answers: ["sha256:63b10af7e27cf454715919eb5afe2a6b91b3d08a165f27f7257ba19ead89840c"]
      - values: {"a":10}
        answers: ["sha256:1a6562590ef19d1045d06c4055742d38288e9e6dcd71ccde5cee80f1d5a774eb"]
      - values: {"a":5}
        answers: ["sha256:55057b27c260eba8c70a6a83f49824eb4848aea5510e15fd27cfdc914b965087"]
      - values: {"a":3}
        answers: ["sha256:8eb625d3c0595535af2fa65cf5d8ae6d1d8ac4d43c08d2db3350778a3e4ca47e"]
      - values: {"a":8}
        answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: integral-impropia
    tier: 2
    prompt: |
      Calcula $\displaystyle\int_0^{\infty} e^{-{{k}}x}\,dx$. Respuesta: fracción «a/b».
    variants:
      - values: {"k":"3"}
        answers: ["sha256:0d7f0e336166042f8cc9e4c20ae427ba367c279d6e3dfd1bd7247b0fbce61d50"]
      - values: {"k":"4"}
        answers: ["sha256:f70b94aeb67de2a5eb4bd8c2ea85128f13776cb545a661abe422b378a6cf3099"]
      - values: {"k":"5"}
        answers: ["sha256:bd82a28b1f088b3a186737712fb16fe7323aecb3abc234b38c9534349aaa1757"]
      - values: {"k":"7"}
        answers: ["sha256:2da190e578ddcfcde27e772094a620aacca6b6b5f26f3ce58a42640b4363b509"]
      - values: {"k":"9"}
        answers: ["sha256:7dbf57a3ed617234cd386b0f2042474ab8a0f152f17305ad0d1f8e62412a2629"]
      - values: {"k":"\\tfrac{3}{2}"}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
  - id: serie-geometrica
    tier: 2
    prompt: |
      Calcula $\displaystyle\sum_{n=1}^{\infty}{{c}}\left(\tfrac{{{p}}}{{{q}}}\right)^n$ (ojo: empieza en $n = 1$). Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"c":"5\\cdot","p":1,"q":2}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"c":"3\\cdot","p":2,"q":3}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"c":"","p":3,"q":5}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"c":"7\\cdot","p":1,"q":3}
        answers: ["sha256:1b8b6b56bf9bf6b77e128ddc9222f3b6a2ef26a5bec8d95906fab50a31125e31"]
      - values: {"c":"4\\cdot","p":2,"q":5}
        answers: ["sha256:5bdb15b49f6ce00d8f14a9b691a06657c8983dde480ba2a5066d89ff7a5e53a3"]
      - values: {"c":"10\\cdot","p":3,"q":7}
        answers: ["sha256:2a873d587af23c030e609fa2b3fa0db5a4c2fb433222b497b0d0e0819da2d3a6"]
  - id: serie-telescopica
    tier: 3
    prompt: |
      Calcula $\displaystyle\sum_{n=1}^{\infty}\frac{1}{n(n+{{k}})}$ (pista: $\frac{1}{n(n+k)} = \frac1k\left(\frac1n - \frac1{n+k}\right)$; ¿qué términos no se cancelan?). Respuesta: fracción «a/b».
    variants:
      - values: {"k":2}
        answers: ["sha256:5132a20379415fe98f3a0700afc2a901e9b01af839b5454a8659152f0782c223"]
      - values: {"k":3}
        answers: ["sha256:240aba76e7b16aef4fcca9d89a4612f3eed6b587c17a981b536a039653d23a40"]
      - values: {"k":4}
        answers: ["sha256:9eef28dc0535e4455cbe4d2ec1e0b93ed283e31cd6d3d17f1fa26ec9875d767a"]
      - values: {"k":5}
        answers: ["sha256:cb7cbe84e86e61f443c4523b0cc7263ec5a0f7b836fc7e3e8adf001caa48494a"]
      - values: {"k":6}
        answers: ["sha256:1d7e5570f99610cb898b660a1a27ef888f8c6619ca943b34634d02f1f98aac32"]
      - values: {"k":10}
        answers: ["sha256:536e2b6f32f4d221324bb62483f70b783ed5431c000a8bf9dd3a9decaaf1ef0d"]
  - id: valor-medio
    tier: 3
    prompt: |
      Calcula el **valor medio** de $f(x) = x{{n}}$ en el intervalo $[0, {{a}}]$, es decir $\frac{1}{{{a}}}\int_0^{{{a}}} f(x)\,dx$. Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"n":"^2","a":6}
        answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
      - values: {"n":"^3","a":3}
        answers: ["sha256:6667ce351fd1d83561a2b928c4c7d500cddc786c43222fa3244886e28b518d57"]
      - values: {"n":"","a":8}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"n":"^2","a":5}
        answers: ["sha256:a285503116eb8bfca2c3a2e0e4d645217248060501c7b3aa1b8fa85c62abfab0"]
      - values: {"n":"^4","a":2}
        answers: ["sha256:56a7807f638a5cca9d9112a11663e126ced1efad870fb8fe8c82b20ed84a23a3"]
      - values: {"n":"^3","a":4}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: serie-de-taylor-de-e
    tier: 3
    prompt: |
      Aproxima $e^{{{x}}}$ con la suma parcial de su serie de Taylor $\sum_{k=0}^{{{N}}}\frac{x^k}{k!}$ en $x = {{x}}$. Respuesta: **cuatro decimales** (redondeando).
    variants:
      - values: {"x":"1","N":7}
        answers: ["sha256:47ae1d78f6ec2212555a67d2bf8a842f1a0e9f35b5ede1e9a814897444966aa7"]
      - values: {"x":"0{,}5","N":4}
        answers: ["sha256:2d1a116b8850877975d822ff68507e5c10e090a11bc2d04fb2cbaa068406aaa2"]
      - values: {"x":"2","N":6}
        answers: ["sha256:c105e10c940854fd695d72ae1a3b605019a36bad1ed2e287b4afdb83a7b4a7be"]
      - values: {"x":"-1","N":5}
        answers: ["sha256:fedf0233151c9d7fa2c3dde652dce303bcde379ca47ca8f93726d3258c9e3580"]
      - values: {"x":"1","N":3}
        answers: ["sha256:2b0deac4c6f0536cc3de3ade1e1e2f24b2461d3bdacdad2ce8d8b447f6fa1e64"]
      - values: {"x":"0{,}2","N":3}
        answers: ["sha256:22baf3a22a71b3f4c94f6c8fafbecb093301c3acd10edc8253a18c8f46c87af4"]
  - id: regla-de-simpson
    tier: 3
    prompt: |
      Aplica la regla de Simpson con $n = 4$ subintervalos a $\displaystyle\int_{{{a}}}^{{{b}}}{{f}}\,dx$.
      $\left(\int_a^b f \approx \frac h3[f_0 + 4f_1 + 2f_2 + 4f_3 + f_4],\ h = \frac{b-a}{4}\right)$. Respuesta: **cuatro decimales** (redondeando).
    variants:
      - values: {"f":"e^{x}","a":"0","b":"1"}
        answers: ["sha256:4123b1386f271b128cac2b15d9f3dfa5b8140a87c48ee8f75ad89aea5424829d"]
      - values: {"f":"\\dfrac{1}{1 + x}","a":"0","b":"2"}
        answers: ["sha256:b05e244762b1e472be89a93800cc3ee326743cecb55984bf12813addb8de66d0"]
      - values: {"f":"\\ln x","a":"1","b":"2"}
        answers: ["sha256:9da0b6ad3ccde7a574ab99266a5768e6696f01e73eb3e4f92b1d429ebfa9bc35"]
      - values: {"f":"\\sin x","a":"0","b":"\\pi"}
        answers: ["sha256:c00a1836b5472c1f7dfa1bbb79f4eb1fd8343f2209858e4e47a8ad6588ec713c"]
      - values: {"f":"\\sqrt{1 + x^2}","a":"0","b":"1"}
        answers: ["sha256:115c35f2beae6140f7368cd3f8272e4d98327438ef0861ee2a17a9feeebb7180"]
      - values: {"f":"e^{-x^2}","a":"0","b":"1"}
        answers: ["sha256:3861ce9fce1321f7298285b5e15ffd3536718a192c957491bf8810474119f982"]
  - id: radio-de-convergencia
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el radio de convergencia (en $x - 1$) de la serie de potencias $\displaystyle\sum_{n=1}^{\infty}\frac{(x-1)^{2n}}{n\,{{k}}^n}$? (Aplica el cociente a la variable $t = (x - 1)^2$.) Respuesta: un número.
    variants:
      - values: {"k":4}
        answers: ["sha256:778bc1b1b2103af660100b91a0359a5324b6e63b90f720d3d5fcd2293ba16cbb","sha256:d014b7be6ac095ca8cdb42be5e2f7f1e927784d8738d43e4a1fda0e7a310d69a","sha256:e88ad5cad8ea0d141ec9ba6bedef60555d34ebf054141144ef43f89ce64499e3"]
      - values: {"k":9}
        answers: ["sha256:4a765d7f68f4591f83d72bf4c0102385e2dd54fc5ebaa81c8bdc830e17ada3da","sha256:c51e79650247374a057f1081971a09ce63bf624dc84a70968817b299c55c1f35","sha256:6278fbdc93de49c807af64c957cfc89b23d65d5bee5e39e774c63e3f935634d8"]
      - values: {"k":16}
        answers: ["sha256:9814c9e69aab8a9327dfd6a7ecee52d0703f487afbb8ba4a0a50a91c6059aa8f","sha256:66d3fce8fc66d55ae562932e3f2c1b57afa1cc6b96b3f4bcc3c72ce9155a49d9","sha256:a881d0999cf404f42b351499b73e898b100a04bf4809592e97bdad2f7aa3695a"]
      - values: {"k":25}
        answers: ["sha256:2715dd3636edf36b88039abcb6506fcaac8464a5e88b09f07952ee8cceedd0ed","sha256:fff69e663db1a94dcd9e289fdacc8d8be0fd055b2381a2a635f86caefcc48875","sha256:941742d345d8d10947ae0de8d9d9ecd6567a982357cc4d0771154d1882cc06b7"]
      - values: {"k":49}
        answers: ["sha256:b6d0e9873449a9a59f206b8b1f076affda11918fec3b509927af1bbb3cde50d8","sha256:80b8ea64971b4988443eeaffcc8ac54560320c1f8a870e06000c664ba2807b87","sha256:1331db072ca43b4b89b275a760b263d47a2b88e8730e54227e85457f3bc6b969"]
      - values: {"k":100}
        answers: ["sha256:63efbd66073db0ca26a4193879308bf9e8d345a798c8fb95a3dde92ce3d79946","sha256:3544319cad76cfa9c44e385764e0eb1f9c78e9f0d05feb327dc524d8b95f782c","sha256:3c1700a516aaccdfc4c254378c44bcbc98a00af6e1fcddd94293d63a8f231b4c"]
  - id: integral-de-polinomio-2
    tier: 3
    prompt: |
      Calcula $\displaystyle\int_0^1 x^{{{a}}}(1 - x){{b}}\,dx$. Respuesta: fracción «a/b».
    variants:
      - values: {"a":4,"b":""}
        answers: ["sha256:da951ee49d260d3c37eb7a33d91276ed34ed549194f5eb632bee50b5d68f1f0e"]
      - values: {"a":3,"b":"^3"}
        answers: ["sha256:d0d5d9279bb44de008b650115a56819923d95e5c1df96ea4c01953f8df908557"]
      - values: {"a":1,"b":"^5"}
        answers: ["sha256:73cfd0ff7ed12b4104a97edb03154e288ac057d31c53a651ac589b5a2b91d734"]
      - values: {"a":5,"b":"^2"}
        answers: ["sha256:e5af620c2742f27730671400ec018efb217254d838049b8ab5e0b1910bb6c540"]
      - values: {"a":4,"b":"^4"}
        answers: ["sha256:40d7874dd61777282576216c166e25e05f11b6d3faa494129cdb40dff7446304"]
      - values: {"a":6,"b":""}
        answers: ["sha256:2fd4b940faebed1829bf46c3a91f77144d4011a72b32bcdf4873778a6bdf3647"]
  - id: funcion-gamma
    tier: 2
    prompt: |
      Usa $\Gamma(n + 1) = n!$ y el cambio $u = kx$ para calcular $\displaystyle\int_0^\infty x^{{{n}}}e^{-{{k}}x}\,dx$. Respuesta: fracción «a/b» (o un entero).
    variants:
      - values: {"n":4,"k":""}
        answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
      - values: {"n":3,"k":"2"}
        answers: ["sha256:896af01783cc4ba66a114b2b1cc0284bad63a52fca0571dafbbed491c95972c5"]
      - values: {"n":5,"k":""}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"n":4,"k":"3"}
        answers: ["sha256:3a14ecd70b95c2ee8871d764bb95507ff92f6c40817160b5869649156a10e23f"]
      - values: {"n":2,"k":"3"}
        answers: ["sha256:59a52ff82b48dc8797bf2e28d9cb4c8cefb46876083208f07d2ba9011a223707"]
      - values: {"n":6,"k":"2"}
        answers: ["sha256:c47de210fada979a0fb543921f59efa3165dab6684d6df0af5a8da07c172d446"]
  - id: gamma-de-semientero
    tier: 3
    prompt: |
      Con $\Gamma(s + 1) = s\,\Gamma(s)$ y $\Gamma(\tfrac12) = \sqrt\pi$, se tiene $\Gamma(\tfrac{{{p}}}{2}) = c\sqrt\pi$ con $c$ racional. ¿Cuánto vale $c$? Respuesta: fracción «a/b» (o un entero).
    variants:
      - values: {"p":3}
        answers: ["sha256:d939926f05444b0f4495fb9629ecbfa80d99a8ec1a20d06800ca5a3d5f4fd276"]
      - values: {"p":15}
        answers: ["sha256:17ed4f98700a47795e5dae822d96e2ac36891b727f171fdaeff047f56f79743f"]
      - values: {"p":9}
        answers: ["sha256:47bec871e1ca4fe76270c1805ae333aa31c211343822f617ef1f4e8c9deff629"]
      - values: {"p":11}
        answers: ["sha256:6dee55c30a66b9248542edb9ab9a6012b8971913ef3fea6934ada8fe0d9b2561"]
      - values: {"p":13}
        answers: ["sha256:4e2f67a37129ce7430da4cd811d38d8ecb965d07b841552cb03c8044623d6078"]
  - id: r-tfc-derivada
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si $F(x) = \displaystyle\int_0^x \sin(t^2)\,dt$, ¿cuánto vale $F'(x)$?
    options:
      - |
        $\cos x$
      - |
        $\sin x^2$
      - |
        $2x\cos x^2$
      - |
        $\cos t$
    answers: ["sha256:0addb7a8b8e9d0be9b5dab83c850369bb3738253dc94c4639400f622ddd0289f"]
  - id: r-area-neta
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\displaystyle\int_{-2}^{2} x^3\,dx$?
    answers: ["sha256:5af5c9b8e5ed6bb33a116f26b2419b6b6a193c6bf409971307923c1c42165fe0","sha256:d1a8b2ed18cc468aae89b494bf51bf124cd104be20eed71c85ae01c315049a30","sha256:4b8b81040bf3317d623cb4fbf1131890a7f4bf0d3084a1dd50be46788c6da59e"]
  - id: r-tecnica
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué técnica conviene para $\int x\,e^{3x}\,dx$?
    options:
      - |
        Fracciones simples
      - |
        Sustitución $u = x$
      - |
        Por partes, con $u = x$
      - |
        No tiene primitiva elemental
    answers: ["sha256:4cd10d287d8bf36a2e4385ccb60ade69ebf1183c98d8d5a18a7b73a1a655c99f"]
  - id: r-impropia-p
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué ocurre con $\displaystyle\int_1^\infty \frac{dx}{x^3}$?
    options:
      - |
        Converge, porque $p = 3 > 1$
      - |
        Diverge, porque $p > 1$
      - |
        Converge a $3$
      - |
        Diverge porque el intervalo es infinito
    answers: ["sha256:ba6208bba4d02aed42a839d83788fc6709a195913b88fbb11f087b06ec147dc4"]
  - id: r-gamma-entero
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\Gamma(7)$?
    answers: ["sha256:e81a66a1e8b5dac28f254c9aa9a8f72993f9a1a57394533733a33bfff7f30ba3","sha256:3dff7f179fe669f49f66582ad241b7ca597e27b4d70eda7cd9f9fbdb50a0bd2f","sha256:6fe9536bd48d1e8871fbcfe99974210a5d4041462d1cccf554bc2c8d15305f3c"]
  - id: r-taylor-seno
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál es el polinomio de Taylor de grado $3$ de $\sin x$ en $0$?
    options:
      - |
        $x + \tfrac{x^3}{6}$
      - |
        $1 - \tfrac{x^2}{2}$
      - |
        $x - \tfrac{x^2}{2}$
      - |
        $x - \tfrac{x^3}{6}$
    answers: ["sha256:edcc7c9990a057146cb1462bb666973918c636e319a7dc8e92e27a0c26daefce"]
  - id: r-cambio-limites
    tier: 2
    type: opcion
    review: true
    prompt: |
      Al hacer una sustitución $u = g(x)$ en una integral **definida**, ¿qué pasa con los límites de integración?
    options:
      - |
        Se dejan igual
      - |
        Se cambian a los valores de la nueva variable: $u(a)$ y $u(b)$
      - |
        Se cambian a $0$ y $1$
      - |
        Se invierten
    answers: ["sha256:6d9d08da3ea56bba49fb9517d9da5bf9f4e729d67fc90bbd87732195b3c73492"]
---

# Cálculo II: integrales, series y polinomios de Taylor

El cálculo diferencial mide cómo cambia una cantidad. La **integral** hace lo inverso: reúne **infinitos** cambios o contribuciones pequeñas en un total: el área bajo una curva, la distancia recorrida a partir de la velocidad, el
trabajo de una fuerza variable, la probabilidad en una distribución continua. El **teorema fundamental** une ambas mitades, y las **series** permiten expresar casi cualquier función como un «polinomio infinito», que es como las calculadoras y
los ordenadores evalúan $\sin$, $\exp$ o $\ln$.

## Objetivos

Al terminar sabrás:

1. Definir la integral de Riemann y enunciar y aplicar el **teorema fundamental del cálculo**.
2. Calcular integrales por sustitución, por partes y por tablas.
3. Aplicar la integral a áreas, volúmenes, valores medios, trabajo y distancias.
4. Tratar integrales impropias y estimar integrales con métodos numéricos.
5. Decidir si una **serie** converge y sumar series geométricas y telescópicas.
6. Construir y usar **polinomios y series de Taylor**.

> [!question] Test de entrada
> 1. ¿Cuál es la derivada de $x^3$? 2. ¿Cuánto vale el área de un rectángulo de base $4$ y altura $2{,}5$? 3. ¿Cuánto vale $1 + \frac12 + \frac14 + \frac18 + \cdots$ si sigue indefinidamente?
>
> Respuestas: $3x^2$; $10$; **$2$** (lo demostrarás en este nodo).

## 1. Para qué sirve

- **Física**: distancia recorrida $=\int v\,dt$; trabajo $=\int F\,dx$; carga $=\int I\,dt$; energía consumida $=\int P\,dt$ (kWh).
- **Geometría**: áreas, volúmenes y longitudes de curvas y sólidos que no son figuras simples.
- **Probabilidad y estadística**: la probabilidad en una variable continua es una integral de la densidad.
- **Ingeniería y computación**: señales, filtros, transformadas; evaluación de funciones por series.

## 2. La integral definida

> [!practico]
> Integrar es **sumar muchos trozos pequeños**. Si un grifo echa agua a un ritmo que cambia, el agua total es la suma de lo que
> echa en cada segundo; si el coche va a velocidades distintas, la distancia es la suma de lo recorrido en cada instante. En un
> dibujo, esa suma es el área bajo la curva del ritmo, rebanada en rectángulos cada vez más finos.


Se quiere el **área bajo** $y = f(x) \ge 0$ entre $a$ y $b$. Se divide $[a, b]$ en $n$ trozos de ancho $\Delta x = \frac{b - a}{n}$ y se suman las áreas de los rectángulos:
$\sum_{i=1}^n f(x_i)\,\Delta x$. Al hacer $n\to\infty$, si el límite existe (lo hace para toda función **continua**) se llama **integral definida**:

$$
\int_a^b f(x)\,dx = \lim_{n\to\infty}\sum_{i=1}^{n} f(x_i)\,\Delta x .
$$

Si $f$ toma valores negativos, esos trozos restan: es un **área neta** (con signo).

**Ejemplo (calculado con la definición).** $\int_0^1 x^2\,dx$ con $x_i = \frac in$: $\sum\frac{i^2}{n^2}\cdot\frac1n = \frac{1}{n^3}\sum i^2 = \frac{1}{n^3}\cdot\frac{n(n+1)(2n+1)}{6} \to \frac{2}{6} = \frac13$.

**Propiedades:** $\int_a^b(f + g) = \int f + \int g$; $\int_a^b cf = c\int_a^b f$; $\int_a^b f + \int_b^c f = \int_a^c f$; $\int_b^a f = -\int_a^b f$; si $f \le g$, $\int f \le \int g$.

## 3. El teorema fundamental del cálculo

> [!practico]
> Derivar y sumar son operaciones contrarias: la derivada de la distancia es la velocidad, y sumando la velocidad se recupera
> la distancia. Por eso, para calcular un área no hace falta sumar rectángulos: basta encontrar una función cuya derivada sea
> la de la curva y restar sus valores en los extremos.


Tiene dos partes que dicen que derivar e integrar son **operaciones inversas**.

> [!formal] Con rigor: el teorema fundamental y su demostración
> **Parte 1.** Si $f$ es continua y $F(x) = \displaystyle\int_a^x f(t)\,dt$, entonces $F'(x) = f(x)$.
> *Demostración.* $\dfrac{F(x + h) - F(x)}{h} = \dfrac1h\displaystyle\int_x^{x+h}f(t)\,dt$, que es el valor medio de $f$ en $[x, x + h]$. Como $f$ es continua, ese valor tiende a $f(x)$ al hacer $h\to0$. $\blacksquare$
>
> **Parte 2.** Si $G$ es **cualquier primitiva** de $f$ ($G' = f$), entonces $\displaystyle\int_a^b f(x)\,dx = G(b) - G(a)$.
> *Demostración.* $F(x) = \int_a^x f$ y $G$ son primitivas de $f$, luego difieren en una constante: $F = G + C$. Como $F(a) = 0$, $C = -G(a)$ y $\int_a^b f = F(b) = G(b) - G(a)$. $\blacksquare$

Esto **evita calcular límites de sumas**: para integrar, basta encontrar una primitiva. **Ejemplos:** $\int_0^3 x^2\,dx = \left[\frac{x^3}{3}\right]_0^3 = 9$; $\int_0^\pi\sin x\,dx = [-\cos x]_0^\pi = 1 + 1 = 2$.

## 4. Primitivas y técnicas de integración

> [!practico]
> Buscar una primitiva es derivar al revés: «¿qué función, al derivarla, da esto?». Las técnicas son trucos para reconocer
> derivadas escondidas: la sustitución deshace la regla de la cadena y la integración por partes deshace la regla del
> producto. A diferencia de derivar, no siempre se puede: algunas funciones sencillas no tienen primitiva escribible.


La **integral indefinida** $\int f\,dx = G(x) + C$ es la familia de primitivas. Tabla básica:

| $f$ | $\int f\,dx$ |
|---|---|
| $x^n\ (n\ne-1)$ | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac1x$ | $\ln\lvert x\rvert$ |
| $e^x$ | $e^x$ |
| $\sin x$ / $\cos x$ | $-\cos x$ / $\sin x$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x$ |

### Sustitución

Es la regla de la cadena al revés: $\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$ con $u = g(x)$. **Ejemplo resuelto:** $\int_0^1 x e^{x^2}dx$: con $u = x^2$, $du = 2x\,dx$ y los límites pasan de $[0,1]$ a $[0,1]$:
$\frac12\int_0^1 e^u\,du = \frac{e - 1}{2} \approx 0{,}859$.

### Integración por partes

Es la regla del producto al revés: $\displaystyle\int u\,dv = uv - \int v\,du$. (De $(uv)' = u'v + uv'$ se integra y se despeja.) Se elige $u$ como lo que se simplifica al derivar y $dv$ como lo que se sabe integrar.
**Ejemplos resueltos:** $\int x e^x dx$ con $u = x$, $dv = e^x dx$: $x e^x - \int e^x dx = (x - 1)e^x$. $\int\ln x\,dx$ con $u = \ln x$, $dv = dx$: $x\ln x - \int1\,dx = x\ln x - x$.

### Fracciones simples

Para $\frac{P(x)}{Q(x)}$ se descompone en fracciones más sencillas: $\dfrac{1}{x^2 - 1} = \dfrac12\left(\dfrac{1}{x - 1} - \dfrac{1}{x + 1}\right)$, cuya integral es $\frac12\ln\left|\frac{x - 1}{x + 1}\right|$.

**Observación importante.** Derivar es **mecánico**; integrar **no**: hay funciones muy simples sin primitiva elemental, como $e^{-x^2}$ o $\frac{\sin x}{x}$. Para ellas se usan integrales numéricas o series.

## 5. Aplicaciones geométricas y físicas

> [!practico]
> Siempre que algo se pueda partir en trozos pequeños fáciles de medir, aparece una integral: un volumen como pila de discos,
> el trabajo de empujar un muelle como suma de empujones, el consumo de una casa como suma de potencia por tiempo.


- **Área entre curvas** ($f \ge g$ en $[a, b]$): $\int_a^b (f - g)\,dx$. Entre $y = x$ e $y = x^2$: $\int_0^1(x - x^2)dx = \frac12 - \frac13 = \frac16$.
- **Volumen de un sólido de revolución** (discos): girando $y = f(x)$ alrededor del eje $x$, $V = \pi\int_a^b f(x)^2\,dx$. La región bajo $y = \sqrt x$ en $[0, 9]$ da $\pi\int_0^9 x\,dx = \frac{81\pi}{2}$. *Comprobación con un cono*
  ($f = \frac rh x$): $V = \pi\frac{r^2}{h^2}\frac{h^3}{3} = \frac13\pi r^2h$, la fórmula conocida.
- **Valor medio** de $f$ en $[a, b]$: $\bar f = \dfrac{1}{b - a}\displaystyle\int_a^b f(x)\,dx$. La tensión eficaz de la red ([[ing-electricidad-basica]]) es la raíz del valor medio de $v^2$.
- **Trabajo** de una fuerza variable: $W = \int F\,dx$. Un muelle: $\int_0^x kx'\,dx' = \frac12kx^2$, la energía elástica de [[fis-fuerzas-energia]].
- **Distancia**: $s = \int v\,dt$; con $v(t) = 3t^2$ m/s, en $[0, 2]$ s recorre $8$ m.
- **Longitud de una curva** $y = f(x)$: $\int_a^b\sqrt{1 + f'(x)^2}\,dx$.

## 6. Integrales impropias

> [!practico]
> A veces hay que sumar hasta el infinito: el área bajo una curva que nunca llega a cero. Puede dar un número finito (si la
> curva baja lo bastante deprisa) o infinito. Es la misma pregunta que con las series: ¿lo que falta por sumar se hace
> despreciable?


Cuando el intervalo es infinito o la función se dispara, se define con un límite. $\displaystyle\int_0^\infty e^{-2x}dx = \lim_{M\to\infty}\left[-\tfrac12e^{-2x}\right]_0^M = \tfrac12$.
**Un resultado clave:** $\displaystyle\int_1^\infty\frac{dx}{x^p}$ converge (a $\frac{1}{p-1}$) **si y solo si $p > 1$**: para $p = 1$ da $\lim\ln M = \infty$ (diverge) y para $p = 2$ vale $1$. Otro, sin primitiva elemental:
$\int_{-\infty}^{\infty}e^{-x^2}dx = \sqrt\pi$ (la campana de Gauss).

## 6b. Integrales eulerianas: las funciones Gamma y Beta

> [!practico]
> El factorial $n! = 1\cdot2\cdots n$ solo tiene sentido para enteros. La función Gamma lo extiende a cualquier número
> positivo mediante una integral, de modo que tiene sentido hablar de «el factorial de $\tfrac12$». La Beta es su
> compañera, y con las dos se calculan de golpe muchas integrales que de otro modo exigirían repetir la integración por
> partes una y otra vez.

**Función Gamma.** Para $s > 0$, $\displaystyle\Gamma(s) = \int_0^\infty x^{s-1}e^{-x}\,dx$ (integral impropia convergente). Por partes,
$\Gamma(s + 1) = s\,\Gamma(s)$, y como $\Gamma(1) = 1$, resulta $\Gamma(n + 1) = n!$. Además $\Gamma\left(\tfrac12\right) = \sqrt\pi$ (con
$x = u^2$ se convierte en la integral de Gauss).

**Función Beta.** Para $p, q > 0$, $\displaystyle B(p, q) = \int_0^1 x^{p-1}(1 - x)^{q-1}\,dx = \frac{\Gamma(p)\,\Gamma(q)}{\Gamma(p + q)}$. Con enteros,
$\int_0^1 x^a(1 - x)^b\,dx = \frac{a!\,b!}{(a + b + 1)!}$.

*Ejemplos:* $\int_0^\infty x^3e^{-x}\,dx = \Gamma(4) = 3! = 6$; $\int_0^\infty x^4e^{-2x}\,dx = \frac{\Gamma(5)}{2^5} = \frac{24}{32} = \frac34$ (con $u = 2x$);
$\Gamma\left(\tfrac52\right) = \tfrac32\cdot\tfrac12\,\Gamma\left(\tfrac12\right) = \tfrac34\sqrt\pi$; $\int_0^1 x^2(1 - x)^3\,dx = \frac{2!\,3!}{6!} = \frac{1}{60}$.

> [!formal] Con rigor: la recurrencia de Gamma
> Integrando por partes con $u = x^s$ y $dv = e^{-x}dx$:
> $\Gamma(s + 1) = \bigl[-x^se^{-x}\bigr]_0^\infty + s\int_0^\infty x^{s-1}e^{-x}\,dx = 0 + s\,\Gamma(s)$, porque $x^se^{-x} \to 0$ cuando
> $x \to \infty$ (la exponencial gana a cualquier potencia) y vale $0$ en $x = 0$ si $s > 0$. Con $\Gamma(1) = \int_0^\infty e^{-x}dx = 1$,
> inducción da $\Gamma(n + 1) = n!$. $\blacksquare$

## 7. Integración numérica

> [!practico]
> Cuando no hay primitiva, se suma a mano con trocitos, pero con inteligencia: en lugar de rectángulos se usan trapecios o
> arcos de parábola, que se ajustan mucho mejor a la curva. Así lo hacen las calculadoras y los programas.


Si no se encuentra la primitiva, se aproxima. La **regla del trapecio** une los puntos con segmentos; la **regla de Simpson** ($n$ par, $h = \frac{b-a}{n}$) ajusta parábolas:

$$
\int_a^b f \approx \frac h3\bigl[f_0 + 4f_1 + 2f_2 + 4f_3 + \cdots + 4f_{n-1} + f_n\bigr] .
$$

**Ejemplo:** $\int_0^1\frac{4}{1 + x^2}dx = \pi$; con $n = 4$, Simpson da $3{,}1416$ (error $\approx 2\cdot10^{-5}$). Su error es proporcional a $h^4$, frente a $h^2$ del trapecio.

```python
def simpson(f, a, b, n=1000):          # n par
    h = (b - a) / n
    s = f(a) + f(b)
    for i in range(1, n):
        s += f(a + i * h) * (4 if i % 2 else 2)
    return s * h / 3

import math
print(simpson(lambda x: 4 / (1 + x * x), 0, 1, 4))     # 3.1415686...
print(simpson(math.sin, 0, math.pi, 1000))             # 2.0000000...
```

## 8. Sucesiones y series

> [!practico]
> Una serie es una suma que no acaba nunca. A veces da un número concreto: si recorres la mitad de un camino, luego la mitad de
> lo que queda, y así sin fin, recorres exactamente el camino entero. Otras veces crece sin límite aunque los sumandos se hagan
> diminutos.


Una **serie** es la suma de los infinitos términos de una sucesión: $\sum_{n=1}^\infty a_n = \lim_{N\to\infty}S_N$ con $S_N = a_1 + \cdots + a_N$ (suma parcial). **Converge** si ese límite existe y es finito; si no, **diverge**.

> [!formal] Con rigor: suma de la serie geométrica
> **Serie geométrica.** $\displaystyle\sum_{n=0}^\infty ar^n = \dfrac{a}{1 - r}$ si $|r| < 1$ (y diverge si $|r| \ge 1$).
> *Demostración.* $S_N = a(1 + r + \cdots + r^{N-1})$ y $(1 - r)S_N = a(1 - r^N)$, luego $S_N = a\frac{1 - r^N}{1 - r}\to\frac{a}{1 - r}$. $\blacksquare$

**Ejemplos:** $1 + \frac12 + \frac14 + \cdots = 2$; $\sum(\frac23)^n = 3$. **Aplicación:** una renta perpetua de $P$ euros al año con interés $r$ vale $\frac{P}{r}$ hoy; $0{,}\overline{9} = \frac{9}{10}\cdot\frac{1}{1 - 1/10} = 1$.

**Serie telescópica.** $\sum\frac{1}{n(n+1)} = \sum\left(\frac1n - \frac1{n+1}\right) = 1$ (los términos intermedios se cancelan).

> [!formal] Con rigor: la serie armónica diverge
> **Condición necesaria:** si $\sum a_n$ converge, entonces $a_n\to0$. **No es suficiente**: la **serie armónica** $\sum\frac1n$ **diverge**.
> *Demostración (Oresme).* Agrupando: $1 + \frac12 + (\frac13 + \frac14) + (\frac15 + \cdots + \frac18) + \cdots$; cada paréntesis suma al menos $\frac12$, y hay infinitos. $\blacksquare$
> (Aun así crece muy lentamente: hacen falta unos $10^{43}$ términos para pasar de $100$.)

**Criterios de convergencia** (series de términos positivos): **comparación** (menor que una convergente converge; mayor que una divergente diverge); **de la integral** ($\sum\frac{1}{n^p}$ converge $\iff p > 1$, por la integral
impropia anterior); **del cociente** de d'Alembert: si $\frac{a_{n+1}}{a_n}\to L$, converge si $L < 1$ y diverge si $L > 1$. Una serie alternada con términos decrecientes a cero **converge** (Leibniz):
$1 - \frac12 + \frac13 - \cdots = \ln 2$.

## 9. Series de potencias y polinomios de Taylor

> [!practico]
> Una serie de Taylor es un «polinomio infinito» que imita a una función alrededor de un punto: primero con una recta, luego
> con una parábola, y cada término añadido corrige el error del anterior. Con unos pocos términos ya se obtienen muchas cifras
> exactas, y por eso las calculadoras evalúan así el seno, la exponencial o el logaritmo.


Una **serie de potencias** $\sum a_n(x - a)^n$ converge en un intervalo $|x - a| < R$ (**radio de convergencia**), que se halla con el cociente: $R = \lim\left|\frac{a_n}{a_{n+1}}\right|$. Para $\sum\frac{(x - 1)^n}{n\,3^n}$: $R = 3$.

Si $f$ tiene derivadas de todos los órdenes, su **serie de Taylor** en $a$ es

$$
f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x - a)^n = f(a) + f'(a)(x - a) + \frac{f''(a)}{2}(x - a)^2 + \cdots .
$$

Los primeros términos son la recta tangente (aproximación lineal), la parábola osculatriz, etc. Series fundamentales (en $a = 0$):

$$
e^x = \sum\frac{x^n}{n!},\qquad \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots,\qquad \cos x = 1 - \frac{x^2}{2!} + \cdots,\qquad \frac{1}{1 - x} = \sum x^n\ (|x| < 1) .
$$

**Ejemplos.** $e \approx \sum_{k=0}^{5}\frac{1}{k!} = 2{,}71667$ (el valor real es $2{,}71828$; el error es menor que $\frac{1}{5!\cdot5}\approx0{,}0017$). $\sin 0{,}1 \approx 0{,}1 - \frac{0{,}001}{6} = 0{,}099833$ (real: $0{,}0998334$): con tan pocos términos se
obtienen seis cifras. **Así calculan las funciones los ordenadores.**
Derivando término a término $e^x$ se obtiene $e^x$, y de $\sin$ sale $\cos$: las series reproducen todas las propiedades. Además, sustituyendo $x \to ix$ en $e^x$ aparece la **fórmula de Euler**
$e^{ix} = \cos x + i\sin x$ (ver el nodo de números complejos).

**Error:** el resto de Taylor de orden $n$ es $R_n = \frac{f^{(n+1)}(c)}{(n + 1)!}(x - a)^{n+1}$ para algún $c$ entre $a$ y $x$ (resto de Lagrange): permite acotar cuántos términos hacen falta.

## 10. Errores típicos

- Olvidar la constante $+C$ en una integral indefinida; o ignorarla en una definida (se cancela).
- Cambiar de variable en una integral definida **sin cambiar los límites**.
- Pensar que $\sum a_n$ converge porque $a_n\to0$ (la armónica diverge).
- Usar la fórmula de la serie geométrica con $|r| \ge 1$.
- Aplicar «la integral del producto es el producto de las integrales».
- Confundir **área** (siempre positiva) con la integral definida (área **neta**, con signo).
- Una serie de Taylor puede no converger en todo punto: hay que respetar el radio de convergencia.

## Repaso: lo que debe quedarte dentro de un mes

1. $\int_a^b f = \lim\sum f(x_i)\Delta x$; teorema fundamental: $\int_a^b f = G(b) - G(a)$ con $G' = f$.
2. Sustitución (regla de la cadena al revés); partes ($\int u\,dv = uv - \int v\,du$).
3. Área entre curvas; volumen $\pi\int f^2$; valor medio; trabajo $\int F\,dx$.
4. $\sum ar^n = \frac{a}{1 - r}$ ($|r| < 1$); $\sum\frac1{n^p}$ converge $\iff p > 1$; criterio del cociente.
5. Taylor: $\sum\frac{f^{(n)}(a)}{n!}(x - a)^n$; $e^x$, $\sin$, $\cos$, $\frac{1}{1 - x}$.
6. $\Gamma(n + 1) = n!$, $\Gamma(\frac12) = \sqrt\pi$, $B(p, q) = \frac{\Gamma(p)\Gamma(q)}{\Gamma(p + q)}$.

## Siguiente

[[mat-analisis-real]] demuestra con rigor todo lo de este nodo (completitud de los reales, $\varepsilon$-$\delta$, convergencia uniforme); [[mat-calculo-multivariable]] y [[mat-ecuaciones-diferenciales]] lo aplican a varias variables y a la dinámica.
