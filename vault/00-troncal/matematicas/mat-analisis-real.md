---
id: mat-analisis-real
title: "Análisis real: completitud, sucesiones, series, continuidad, derivada, integral y convergencia uniforme"
area: matematicas
trunk_level: 10
prerequisites: [mat-logica-demostraciones, mat-calculo-2, mat-conjuntos-numeros]
academic_sources:
  - "Fernández Novoa, J. Análisis Matemático I, 5.ª ed. UNED: texto base de «Funciones de una variable I» (61021022; temas 1-12: sucesiones, los reales, límites infinitos, topología de ℝ, límites y continuidad, derivadas, Taylor, límites superior e inferior, series) y «Funciones de una variable II» (61021074) de la UNED."
  - "Abbott, S. Understanding Analysis, 2ª ed. Springer (Undergraduate Texts in Mathematics), 2015."
  - "Tao, T. Analysis I, 3ª ed. Hindustan Book Agency / Springer (Texts and Readings in Mathematics, 37), 2016."
  - "Spivak, M. Calculus, 4ª ed. Publish or Perish, 2008, caps. 5-8 (límites, continuidad, los tres teoremas difíciles, supremo), 11 (valor medio), 13 (integral), 20 (Taylor), 22-24 (sucesiones, series, convergencia uniforme). Índice: https://mathpop.com/pages/calculus-spivak-4th-edition-table-of-contents"
  - "Graham, R. L.; Knuth, D. E.; Patashnik, O. Concrete Mathematics, 2ª ed. Addison-Wesley, 1994 (fórmula de Euler-Maclaurin)."
ctf_flag: "sha256:1592b9e69ae0a589f87baf46b443cf53f1b61d2cb4d4d0826239164499fa0e18"
hints:
  - "Sumar términos hasta que «dejen de cambiar» no demuestra nada: el error de truncar una serie es su cola, y hay que acotarla. Para una f decreciente, la cola está atrapada entre dos integrales. En (a), ¿cuántos términos harían falta sumando a ciegas para 12 decimales? En (b), la suma parcial crece como un logaritmo."
  - "Para (a): suma los primeros N términos con aritmética exacta o de precisión arbitraria (fractions.Fraction, decimal con prec=40, o mpmath) y añade la estimación integral de la cola; mpmath.zeta(3) sirve para contrastar. Para (b): estima N con H_N ≈ ln N + γ y confirma el valor exacto alrededor de la estimación; un bucle con double y suma compensada (Kahan) también llega."
  - "Abbott, capítulos de sucesiones y series; Spivak, capítulo de series infinitas. Fórmula de Euler-Maclaurin en Concrete Mathematics (capítulo de asintótica). Documentación de mpmath: mpmath.org/doc/current/. Sucesión A002387 en la OEIS para contrastar el método de (b) en casos pequeños."
exercises:
  - id: supremo-e-infimo
    tier: 1
    prompt: |
      Sea $A = \left\{ {{A}} : n \ge 1 \text{ entero}\right\}$. ¿Cuánto valen $\inf A$ y $\sup A$? Respuesta: `inf;sup` (fracciones «a/b» si hace falta).
    variants:
      - values: {"A":"\\tfrac{2n + 1}{n + 1}"}
        answers: ["sha256:b7342c050a460ce65d699d49528c9b12dddca5616eac4d194f5a489c372164d7"]
      - values: {"A":"\\tfrac{n + 3}{n + 1}"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
      - values: {"A":"\\tfrac{3n}{n + 2}"}
        answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
      - values: {"A":"\\tfrac{5n - 3}{n}"}
        answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
      - values: {"A":"\\tfrac{2n + 5}{n + 1}"}
        answers: ["sha256:cfd62f9b18746fde45a236120b80dc24a42f82d406a093790339f6857f8e60c2"]
      - values: {"A":"\\tfrac{4n + 1}{n + 3}"}
        answers: ["sha256:b50be268e07d30c7e3a116447b2df7558d3389c5dec0bc6d622751d65c58939e"]
  - id: epsilon-n
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Para $a_n = 1/n^{{{p}}}$ y $\varepsilon = 10^{-{{k}}}$, ¿cuál es el menor $N$ tal que $\lvert a_n\rvert < \varepsilon$ para todo $n \ge N$? Respuesta: un entero.
    variants:
      - values: {"p":3,"k":5}
        answers: ["sha256:be6d840b0ed3a7c8ea87ca73073f243acc5b193917b5b1d03dedc3a1d7b47eef","sha256:486098a500a91b5e54a5be89478dc3860c6bd383bab58ac0296a67d3f1267a76","sha256:5b6684bf90a17a2d4a8d716b0bcb1697a3915af5db8e252572e35a5e0e339c46"]
      - values: {"p":1,"k":3}
        answers: ["sha256:4680454457354fba944bb609e2fbaa1a658504cd699297ab604e5dd179256362","sha256:f60c17b0dacb29433174f7674c97ffa69371806e04526aea23c3ae1f644a7249","sha256:73f811fd9994738e5ef6e885c6c2bb47ff9cb168e262a70b9c19d1e48c8df9c6"]
      - values: {"p":2,"k":5}
        answers: ["sha256:7136ae8ab059324530cc9928b0ecdeaac0a22fc78c0308d0f5d0bf82ef85f23f","sha256:315816bf2179efd2ed576cbdd80e59762a7336a9917f444fb5c905bab9863421","sha256:a1ae7196f9139391101ce4171504a18121072b481604f9f8d5c58ee7e6c1fcdc"]
      - values: {"p":3,"k":4}
        answers: ["sha256:a92273cdc2d6dadf4558607f74720c525a30cf2e4a08958fc7f13ab32fd40e2c","sha256:8608c35dbbd51051256ea82072c40fe9cbfdeef695defc9e319ae4ecb35e6cdf","sha256:3e6af5032968470b5e9a7e89be5b0a40164da661ae02ef119a2956364254103a"]
      - values: {"p":4,"k":6}
        answers: ["sha256:9de00fd5b037fde8d6314521c4ef4244a9f7d258fff351b992ba3055770cbedd","sha256:cc04a8a4450409f7601f6d5afb55a00684f88a8ce334d9172b0ffb5b15cd0915","sha256:e4da6aa94732a3a8d47c54da6ae938ec1750011443abbe22fb9b03155b708218"]
      - values: {"p":3,"k":9}
        answers: ["sha256:48572b89eab81f18ac837b89a83b28ed54f912f4b3c7b25a5d34a3acc26d9c7f","sha256:5fa50a795c97f848c24a633522396b18edbfc84bb697e646f63f9ac68481c835","sha256:dc01c7b622dbe3599b863b0d2c64f4d640d0866998599a13c09630e7e01de3f9"]
  - id: limite-con-raices
    tier: 1
    prompt: |
      Calcula $\displaystyle\lim_{n\to\infty} n\left(\sqrt{n^2 + {{a}}} - n\right)$ (multiplica y divide por el conjugado). Respuesta: una fracción `a/b` (o un entero).
    variants:
      - values: {"a":3}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"a":5}
        answers: ["sha256:06a89c05b4eae0f2acac44075fe7d5dcde1e2d1a23aeb7270b11556c42a39315"]
      - values: {"a":7}
        answers: ["sha256:1b8b6b56bf9bf6b77e128ddc9222f3b6a2ef26a5bec8d95906fab50a31125e31"]
      - values: {"a":4}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"a":9}
        answers: ["sha256:8eb625d3c0595535af2fa65cf5d8ae6d1d8ac4d43c08d2db3350778a3e4ca47e"]
      - values: {"a":6}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: serie-geometrica
    tier: 1
    prompt: |
      Calcula $\displaystyle\sum_{n=0}^{\infty}\left(\tfrac{{{p}}}{{{q}}}\right)^n$. Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"p":3,"q":5}
        answers: ["sha256:06a89c05b4eae0f2acac44075fe7d5dcde1e2d1a23aeb7270b11556c42a39315"]
      - values: {"p":1,"q":3}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"p":2,"q":5}
        answers: ["sha256:fdfc31f701148d549f3f9896f8f8f0f5a931199186715bf4a8557d1c266dc139"]
      - values: {"p":5,"q":9}
        answers: ["sha256:aceea65272192df3e9cee56f5c2b5e7bc88abad6a54dc4b3c98254d079fc5242"]
      - values: {"p":5,"q":7}
        answers: ["sha256:1b8b6b56bf9bf6b77e128ddc9222f3b6a2ef26a5bec8d95906fab50a31125e31"]
      - values: {"p":3,"q":8}
        answers: ["sha256:59890c6bca99fbc7ef05f3a97d3ae04271295805839f25ab8e6b74793b50dc26"]
  - id: criterio-del-cociente
    tier: 2
    prompt: |
      La serie $\sum_{n\ge1} n^2/{{k}}^n$ converge por el criterio del cociente. Calcula su suma (usa $\sum n^2x^n = \frac{x(1 + x)}{(1 - x)^3}$ para $\lvert x\rvert < 1$). Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"k":3}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"k":4}
        answers: ["sha256:c169635b60e0ded51ce1546653e8d37e969abca99ca1bebe8726d3cb9284663c"]
      - values: {"k":5}
        answers: ["sha256:4b53eaa9f1be89ed40cd3892d7a639bb52647289ec7eca52c34f1ff4281ab905"]
      - values: {"k":10}
        answers: ["sha256:f36879b57227b9e365fe9bcc5e4113365da8a362953947fbe170d26dc13beed2"]
      - values: {"k":6}
        answers: ["sha256:d359cfff203259f553204de219fdc2ea026eb77e9a6013b032b0e67589674e8b"]
      - values: {"k":8}
        answers: ["sha256:dee04d3d9db3f046de985083402a6afe6635018ed2c74022afc5831ddc1c1079"]
  - id: error-de-una-serie-alternada
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Para la serie alternada $\sum_{n\ge1}(-1)^{n+1}/n{{p}}$, el error al truncar tras $N$ términos es menor que el primer término omitido. ¿Cuál es el menor $N$ que garantiza así un error menor que $10^{-{{k}}}$? Respuesta: un entero.
    variants:
      - values: {"p":"","k":5}
        answers: ["sha256:5216d4a32014056d989e7d4f9a219017359428e982b03ee01661805d44dce8d4","sha256:3f8ea119729e6f64f50c249c80b04d6090e98495df0462c5a0ee6e6fe67153f3","sha256:1a93f871affde135f6d473e57bf22e98a861ab612aa8e41b233830e4a72df1b0"]
      - values: {"p":"^3","k":7}
        answers: ["sha256:f9e3601510c0136759e49a7f72ba5307d4059364e33a47670f21d5b89606d5db","sha256:5df44e0376d16616c5961dca313104684dd8f5f9b14b9e9f6d423d509f6285f5","sha256:619300af7c97b8a64eeda8cd8a068dd7c4fc7c08dbfa6f35d108ae96213c9a30"]
      - values: {"p":"^2","k":5}
        answers: ["sha256:9bad07ca9808b2ec85532beb30455843b7b8cff7e67e9ba3e7b5ac81b2eb2f57","sha256:752402bdcb830e841fc7eda049953430800f1ba2829da44feb8e313e1b8a31fb","sha256:f06fe1d6cde74c02045e64632326670ecf78f585596675ca5806c9763c8f4294"]
      - values: {"p":"","k":4}
        answers: ["sha256:2a8c28aa8768a99148e034411ab419d8b4b35b69f50a4f1790719941da96fd46","sha256:2fa31e88cd53f093a14502c628e7c113374ea2a3d521cd8a59fbc53ff98c18b8","sha256:7835aec38e1d74fac352c8e108e76857e882f46a8c4f9b86f2e207d87b2dbc50"]
      - values: {"p":"^2","k":7}
        answers: ["sha256:86fedf117100ddb9fbea8e511c17c6e4288e1cf111bedd4c2122ba8eda23f6cf","sha256:d704a68d4dcfa44b89c6e66b8d5ca81ad8498bfc10219079ab84f4c745c01cb1","sha256:0ed910663e4438e4e2f6f2b8005312f73de8d7752caab32ef89150135075d246"]
      - values: {"p":"^4","k":10}
        answers: ["sha256:1639f424b8f0c1477960a5ff79604d3472766a6bebd147afac5a5d45d2e5b0fb","sha256:e8c30e419ef933057aa4f3f54a82c1c503695850a03f84b1bd7276ab325e3634","sha256:cde9dfe861db57ad4078656aaa94fdc02e88bf2c1d21366d584cf5fa2d60ddc6"]
  - id: serie-telescopica
    tier: 2
    prompt: |
      Calcula $\displaystyle\sum_{n=1}^{{{M}}}\frac{1}{n(n{{k}})}$ (descompón en fracciones simples y observa qué se cancela). Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"k":" + 1","M":49}
        answers: ["sha256:15159cba30311b438472946c8b8b5abab1fad8d2adc72b1dad6dd320e288a63c"]
      - values: {"k":" + 2","M":50}
        answers: ["sha256:6ad76b118655dce69f39c830f1211233d6d807e8bc0900bed1527e08d7f61388"]
      - values: {"k":" + 3","M":30}
        answers: ["sha256:1817d2d9ec662faff793ed3dec27c7d9db58db0a93608ed732b28a72b55cc345"]
      - values: {"k":" + 1","M":199}
        answers: ["sha256:8b6a94d465f4d7aefc231ed3c062145ffd18bdf9694fc146a0c6cf0d87c1a5bc"]
      - values: {"k":" + 2","M":20}
        answers: ["sha256:75f971286e8767f240280dc68086ece76b92cd375ce9964a52c34d581d045560"]
      - values: {"k":" + 4","M":40}
        answers: ["sha256:a3db60381ce27ee0bc076443e7503a5c0d752d8829a76cb8a49188ad8a7c8f9f"]
  - id: limites-superior-e-inferior
    tier: 2
    prompt: |
      Para $a_n = {{a}}$, ¿cuánto valen $\liminf a_n$ y $\limsup a_n$? Respuesta: `liminf;limsup` (fracciones «a/b» si hace falta).
    variants:
      - values: {"a":"(-1)^n\\left(2 + \\tfrac3n\\right)"}
        answers: ["sha256:91989f54f40d32cdc575b24f74bcadfdbfe0c6be82319c2714e31cd5e58c7047"]
      - values: {"a":"(n \\bmod 4) + \\tfrac1n"}
        answers: ["sha256:29146eb203a325319fce1b33a3812e9fd3662bf8589143019f76c13a2901b0cf"]
      - values: {"a":"\\left(2 + (-1)^n\\right)\\dfrac{n}{n + 1}"}
        answers: ["sha256:b4920aa4262beeff689fdaa95a18e8cb1188ca0093a566f759619f97564d47ce"]
      - values: {"a":"(-1)^n\\,\\dfrac{3n + 1}{n}"}
        answers: ["sha256:1414789ebe1937eb0117546f99695e50c16d418338ca44b2e904dbfb6dcd1f94"]
      - values: {"a":"\\dfrac{(-1)^n n^2 + n}{2n^2}"}
        answers: ["sha256:2dbb2f26477e149717ff702a2fa8eb3d26fcfcac01be160a46e00a621f3e4c92"]
      - values: {"a":"\\cos\\left(\\tfrac{n\\pi}{2}\\right) + \\tfrac{1}{n}"}
        answers: ["sha256:0fb6cfb21a559369b7285fab68096966b9835b190c99b3918a5b808aca6f04b7"]
  - id: punto-fijo-contractivo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La iteración $x_{n+1} = \cos x_n$ en $[0, 1]$ es contractiva con constante $L = \sin 1$. Con $x_0 = 1$ y la cota a priori $\lvert x_n - x^*\rvert \le \frac{L^n}{1 - L}\lvert x_1 - x_0\rvert$, ¿cuál es el menor $n$ que garantiza un error menor que $10^{-{{k}}}$? Respuesta: un entero.
    variants:
      - values: {"k":4}
        answers: ["sha256:f8307491c022b1aae933340071817d46233593dfcb385edc15a69c3b055050ba","sha256:b1aba082c4493477622fb0bb923cee7ca7b8b2f06147005ab90ef0e0b1f0b4a9","sha256:9bd58f8ff51520f1e9485c88530566205b6de335d42b45fa79955a3318885e44"]
      - values: {"k":8}
        answers: ["sha256:07222c772cc4f18acebcad2ef2ea0ba42804f02142e35fe5e2527ee6bba85dc3","sha256:33f63d37f99274b663e230b78f93c54ae22132114176f5e06789acc52e1758ed","sha256:c728c6cb4700a5cbda76fed1eaf1a9ce12e626a63e051da2a305fdf0824bda48"]
      - values: {"k":10}
        answers: ["sha256:215e8a5e7d1b02acf7ee9144adbddc2739521d593d0ee3055daa1c25312c1f80","sha256:0ea197d114ef647285d0d3eb55e7cef40a83c5f2a26210ddbe40f4f4d919a46e","sha256:cc4b06ea4d2a38bda617cda4a22823f398c557b63c5a5aa47bfac573c6c0ca56"]
      - values: {"k":5}
        answers: ["sha256:4ee1215a35983d44dc4b22336476a0dd05a9c771a7f3eedb4883e2ee7e51b37e","sha256:40be1eacd36112f87cad75a46c5874231947ad57d978d58e3553cdc764372ddf","sha256:1057ec6d09084d04f3f8458cccd30e529099ce4124fc798b4c35fd24539f6722"]
      - values: {"k":12}
        answers: ["sha256:acb54cee74f50aa53f9c192b2b3126a97a661007ab7a14d345e12bfcc383e38d","sha256:aad1197ccdc7b9cd21635578cce4f65b968841ef17f2283ddc12a8965cf059e5","sha256:37088de52244287ea598595518396d72a9357ef73a82b5141c382ef0d24a0ab2"]
      - values: {"k":3}
        answers: ["sha256:025c760bbfa94ccf3cdf6af2457093e25c3529deaa5ac2e6f7b5b3345c452ad1","sha256:159e7816d177f561c9755a7ba6a78efa0a16181418c85e618e2188c2e03104b6","sha256:d16614f64edde9e89edb832eacce805d7f4e58ffa7b5d659840ce6264e05fdd1"]
  - id: continuidad-uniforme
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Para $f(x) = x^2$ en $[0, {{c}}]$ y $\varepsilon = {{e}}$, usando $\lvert x^2 - y^2\rvert = \lvert x + y\rvert\lvert x - y\rvert$ y acotando $\lvert x + y\rvert$ en el intervalo, ¿qué $\delta$ (el mayor que da ese argumento) garantiza $\lvert f(x) - f(y)\rvert < \varepsilon$ si $\lvert x - y\rvert < \delta$? Respuesta: un número.
    variants:
      - values: {"c":"3","e":"0{,}03"}
        answers: ["sha256:c05fba5813a217d1217dd75feffe31bef3bce3117af28e681fe557504b559c50","sha256:199456c8a0ac5a6ba65de9ee690ad7615843bccbbec3e64465cb1b5e97f3e6be","sha256:139cf4bc423a78adf372ea15060567eb897d01f05ff09be3796832cc4c4ae4d9"]
      - values: {"c":"5","e":"0{,}1"}
        answers: ["sha256:5cd69e437126f9c000959b8086d4c324e507d7f75d0d411de4768d986951cc5d","sha256:e517fb2aad793764d51a0b512a370a409d4a9c1545811151fc56728426271ca5","sha256:59c80daeeec3725af21de2b9bf8a68da0328979b0e0ceef374dce4cfbd6d0b7b"]
      - values: {"c":"1","e":"0{,}002"}
        answers: ["sha256:6592f5e694baf7a3f74e79f79894907ac1882f244bccc30e628035f87b899ed6","sha256:7dd4ca28bdbaa16a99d070a9cf47be6f870e27795e240781d2d750c770b5e8a2","sha256:c4a09cc781bb08a7e994d4e70a437cd0abeac609206e30469eac471acdfbe945"]
      - values: {"c":"4","e":"0{,}04"}
        answers: ["sha256:85a115d61ce685ca789c4a97811e76616e67af5b793a6b2bf9cd02477adac6d8","sha256:3e836f03dfa39899364905690d294e9e171ce5a824f5df4d4a4de7d81eafb625","sha256:e0e90399ae1d629b38057e738ec445d72254cd8a180d885cc807320036bde945"]
      - values: {"c":"10","e":"0{,}5"}
        answers: ["sha256:f9f49f0e0068f84b800e20a60e944384c7b75c6bf075b2a9db8849fe17f4c09e","sha256:5250bd2a297a98db60aa0730cf164cee47920977a4acb1fafe563990ba53b95e","sha256:04c7476f877d15833f26b4d4d9c6c139a62027b2ae76270ea0f5df8a4ec30492"]
      - values: {"c":"2{,}5","e":"0{,}01"}
        answers: ["sha256:c1d3eade04c7b7d081070f76c4b29cbd766f7708c8f0e259ca234ef5e519f04f","sha256:3b720611fc8ad996929147df97040b55f4c626313b5004e6549298252f397c52","sha256:5a09f3486ff0987145280111e6241f6c80d44e3ead10499ce166be559f55c123"]
  - id: resto-de-taylor
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se aproxima $e$ con el polinomio de Taylor de $e^x$ en $0$ de grado $n$. El resto de Lagrange cumple $\lvert R_n\rvert \le \frac{3}{(n + 1)!}$ (pues $e < 3$). ¿Cuál es el menor $n$ con esa cota por debajo de $10^{-{{k}}}$? Respuesta: un entero.
    variants:
      - values: {"k":6}
        answers: ["sha256:20a45898c873e90565e1aa30bb85b0ac79373fb8694455b12de1fb553c58f3b1","sha256:a97686c232f93925eb4678c746991d849711914b86791ff921bc137989fbfebe","sha256:c0aa7fd6be2244fc57800187ffff4252afcd9a64cc361428689ac807ca6a34bf"]
      - values: {"k":8}
        answers: ["sha256:8c721e68cd482242ef5cfbcd6583d01b4bb9b85de2477bb61e4d0937d32dcdd2","sha256:80564d94c80c084f455eac6a603f36529a7ac5dce2ce07e8033743e355036065","sha256:fadeeccfd9445f4b040a9fe34e4204a7441b669a44ca7f10dfc2f58b4dfc030a"]
      - values: {"k":12}
        answers: ["sha256:bd1738c5b41cb2ae530a0f7609fe6f666bd4db84e4bab20fccc9b68c64d63613","sha256:7665895341f6dec40bcdc22bad7ca131991b0a69e885307f368f22ea3911438b","sha256:9a0d28afb1c64480bcaca79d7627588954bd0301c17a8c8ab95cb9ef3194aa02"]
      - values: {"k":15}
        answers: ["sha256:54d0123d33d8c091742d9c966b28f3552a1acbda5616dd45586739defa76eb2b","sha256:8b55ec314746d6bb9d5b4dd6a6d3623edf8bd5f9f08724fe52c660ade1956296","sha256:f3e0cdbde84ce13549f6dff2aad1e8e3001c20c4a5842606cf85c744807ce8c0"]
      - values: {"k":4}
        answers: ["sha256:cb94fb95feba81da4c6d552214dc22c7f1ce36fa0cf962750e635c2f9953b0d9","sha256:66ea268ae42b970119ac1229d24e0737f6f81281b444e2723cddb2b45e87e0f7","sha256:136e71d41fdcbbdc5941f256fa4e5baa04edaac322701fb147ac572d301737db"]
      - values: {"k":20}
        answers: ["sha256:2e7d1c282284d15ca4b24eb92e699f589db14692fcac2c83b534ae8d00721017","sha256:d9bf59fd8200488556a928417969eec22fb7965c29464e3c365a683aab94777b","sha256:3d35b1ddc1eef6ac5e475814ab600db7effe5632563d31e1c30fe9bfa152f3de"]
  - id: sumas-superiores-e-inferiores
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Para $f(x) = {{f}}$ en $[{{a}}, {{b}}]$ con una partición en $n$ subintervalos iguales, la suma superior menos la inferior vale exactamente $\frac{(f(b) - f(a))(b - a)}{n}$ ($f$ es creciente). ¿Cuál es el menor $n$ con diferencia menor que $10^{-{{k}}}$? Respuesta: un entero.
    variants:
      - values: {"f":"x^3","a":0,"b":2,"k":3}
        answers: ["sha256:0f2dcd2b6593dda5a6f1314c84de1103b7565d20f587575d51a6832f6b68beb3","sha256:f01438f8a9c2191fee215b8ccb0725791a9ee1a9383c956ab285ebb9edaeb543","sha256:13d1e879d5fd3192ea06fc2f292bbece142f319bc810b8378b4ca93358014bf4"]
      - values: {"f":"\\sqrt x","a":0,"b":4,"k":2}
        answers: ["sha256:a765f94a5bdfb76c4d579e5bdcda2fca0947cc84c4d43bb39766b059a58931bf","sha256:6704f09ae071039cceacb33404a09e990becbcf08455b230b6eeb99367ca392c","sha256:d6de498d28c94b3ce888eb2e2526dda1fd05405c37d391d49b5ae45a65696754"]
      - values: {"f":"e^x","a":0,"b":1,"k":4}
        answers: ["sha256:78c04132c37f8f31a843741dc57b885296e0c1ff2e422e4df162fb53c879023a","sha256:ba8bc258725310c5e85a67497f2adee017cdbbc30dea80d6f19bf4cd17f6d49a","sha256:b7aaba01e606d16aaf941a50b65211d16a9fc4c3b048276c3df91356dbcef1e7"]
      - values: {"f":"x^2","a":1,"b":3,"k":2}
        answers: ["sha256:23caf8b6f56f3a2661c68816412492bcc38b7b10c6b29bce668149ac4ee23fe4","sha256:d7a466b6577524c52c12f032dbef5f7ae665727f1e2d5f7d10bd1a0eff9951de","sha256:aa946f3f41f57596cccfc765e13356288e8721093cade5660a6d30476f0f945e"]
      - values: {"f":"\\ln x","a":1,"b":10,"k":3}
        answers: ["sha256:536df8720bf6035e54220db34f8306583826806ea928a7ba578f3d91a66192a8","sha256:53f305719d8c95f96f3281d8b9224049b12bcd24f87b737f2d009059858453b0","sha256:b8dc2660cf38ebeb3c7857ed609f38246286dccb02372d9e5f2a9c2f12281048"]
      - values: {"f":"2x + 1","a":0,"b":5,"k":3}
        answers: ["sha256:1dd72245240d957ce52271a32679969a690ef5661fd0a8645e5f54c9e8ff5d77","sha256:7b730d6d574e22a7fb3a09ba04e4af11b6e09aac046de8b283f5afbf76412225","sha256:749a654197bf18027004de56becd87204bd0c6e8362a2dc25cbddc5c2ff9bee8"]
  - id: acotar-la-cola-con-integrales
    tier: 3
    prompt: |
      Con $S_{{{N}}} = \sum_{n=1}^{{{N}}}\frac1{n^{{{p}}}}$ y el criterio de la integral, $S_{{{N}}} + \frac{1}{{{p1}}\cdot {{N1}}^{{{p1}}}} < \zeta({{p}}) < S_{{{N}}} + \frac{1}{{{p1}}\cdot {{N}}^{{{p1}}}}$. Calcula $\lfloor 10^{{{k}}}\cdot(\text{cota inferior})\rfloor$ y $\lfloor 10^{{{k}}}\cdot(\text{cota superior})\rfloor$. Respuesta: los dos enteros separados por `;`.
    variants:
      - values: {"p":2,"N":200,"k":4,"p1":1,"N1":201}
        answers: ["sha256:359191683a172ed829f92cb9708546a1b2eb2c55576a5e46f10dc8f3074e0d96"]
      - values: {"p":3,"N":50,"k":6,"p1":2,"N1":51}
        answers: ["sha256:cf625c0dc1ce686971d86dc3720dd94a68e69e72a41f9442baacedf706006f9f"]
      - values: {"p":2,"N":1000,"k":6,"p1":1,"N1":1001}
        answers: ["sha256:e1c8afeb2370fac7144757c985c8c385021ce4093384b27b9de5b26934bbf610"]
      - values: {"p":3,"N":100,"k":7,"p1":2,"N1":101}
        answers: ["sha256:4dc12fd40c07f34b925b2f29314adacae0312af3fe3c82ad7f0eb6ef26b95ef8"]
      - values: {"p":4,"N":20,"k":7,"p1":3,"N1":21}
        answers: ["sha256:1f4bed45af2a2ec3bd3bfe8045a556f9713040256c0c45a6b901c54e2492a1ee"]
      - values: {"p":2,"N":50,"k":3,"p1":1,"N1":51}
        answers: ["sha256:8412e764d79858c2e2dcd07848292d791dbc950be5d5e09252559d8a3697b5b6"]
  - id: convergencia-uniforme
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Las funciones $f_n(x) = x^n$ convergen uniformemente a $0$ en $[0, {{r}}]$. ¿Cuál es el menor $n$ con $\sup_{[0, {{r}}]}\lvert f_n\rvert < 10^{-{{k}}}$? Respuesta: un entero.
    variants:
      - values: {"r":"\\tfrac{1}{3}","k":4}
        answers: ["sha256:bbd0a5b6a2afa222e1832995e439d292579948637c2df0add41640996c1bb986","sha256:e8c073c000553bad851b92fcf69dfddbe51bfb7dd7915e9c92886301a5949607","sha256:1f31701f110ee27b497a23e540ce889aba6d0788f6ac7fe3d32656de4f5efae1"]
      - values: {"r":"\\tfrac{9}{10}","k":2}
        answers: ["sha256:a039adf2fe843d2eba18769509d61f7254ff5f59fca867fb194d8cea69da3dc8","sha256:c10fb395c0a7fc5474597be71e2de6a722d97ef327b4f1b542839ec32bc9ab72","sha256:0070e33fd0e89eb9c12bb7f914423b7e26e406c0eb95bda35be92f78dd759e0b"]
      - values: {"r":"\\tfrac{1}{2}","k":6}
        answers: ["sha256:23acca973e67ec01ecfdbb79b91ff7cdec2d2c4d7b3b2df0bef74f53534154af","sha256:06710a008c14f2527ed37621e180cdbee46e66dde010574d76e1006ab1fe4b68","sha256:66767fd41f0c6689784cedee6c8426f8415a6fb2d7c7e098cd4d008ce25c6701"]
      - values: {"r":"\\tfrac{99}{100}","k":1}
        answers: ["sha256:ef218b5095acae3f8a25ccf5ae37dd84a32187ffeefc69509d8254333428235f","sha256:a9434164c72adba4670713fddc83d7acd02ecb608a979e69c5729b0205e24048","sha256:2a6c69b669d715c1ef257b92e7731cdae251a6c0c9968a084382626230e91489"]
      - values: {"r":"\\tfrac{1}{10}","k":8}
        answers: ["sha256:9c6612634c73117c06d1cf84f6515433950f4f70108ce6ea93ec5f70a2b15c72","sha256:4f41199acbbef8a05046f0f048f4680c0bc37d92415931c2f3e20c7657700e20","sha256:d45ebdae5ba16be494a280307d8b38ac8252c486a0f5608cedd9b148d364db89"]
      - values: {"r":"\\tfrac{4}{5}","k":3}
        answers: ["sha256:1596c6984a51e33e79220a716abff2cad4829779a0f0ea65920fbafee6b309de","sha256:d337c8de2568a5c4065b9621d415123bc92e0740947699a7a3ad2d7d75c08187","sha256:9c930349e7371e47c289908f3f7d4cf089df03dd9869cffabd1146058b1ed9e7"]
  - id: radio-de-convergencia
    tier: 3
    prompt: |
      ¿Cuál es el radio de convergencia de $\sum_{n\ge1}{{c}}\,x^n$? Respuesta: un número con **3 decimales**.
    variants:
      - values: {"c":"\\dfrac{(2n)!}{(n!)^2}"}
        answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
      - values: {"c":"\\dfrac{n^n}{n!}"}
        answers: ["sha256:7d0feca7c504ef49b5d5d12a7e6bf6939abec5b6e5ebf9775d557628ce11e6f7"]
      - values: {"c":"\\dfrac{(n!)^2}{(2n)!}"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"c":"\\dfrac{2^n}{n^2}"}
        answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
      - values: {"c":"\\dfrac{n^3}{3^n}"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"c":"\\dfrac{(n!)^3}{(3n)!}"}
        answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
  - id: raiz-por-bolzano
    tier: 3
    prompt: |
      $f(x) = {{f}}$ cambia de signo en $[{{a}}, {{b}}]$, así que (Bolzano) tiene una raíz ahí. Calcúlala. Respuesta: con **5 decimales**.
    variants:
      - values: {"f":"x^3 - 3x - 1","a":1,"b":2}
        answers: ["sha256:21af854ec579a1e4a765043287e6e83315e5e2c536bb5a32c76fb8a6310da9bd"]
      - values: {"f":"x^3 + x - 3","a":1,"b":2}
        answers: ["sha256:b72f21308c6857902c3653f401a6f14556db94b22b6ad640f4d9c52fb0686f4f"]
      - values: {"f":"x^3 - 7","a":1,"b":2}
        answers: ["sha256:10c64241cfd97ad71cd7e0e15c8ec72653f17b7122f4c3c1ec02bd700df9a8b5"]
      - values: {"f":"x^5 - x - 1","a":1,"b":2}
        answers: ["sha256:9e630c19ad1ce0b9de10f9c7b42cb2dc1476f38829c6d57aa8415ca38244edba"]
      - values: {"f":"x^3 - 2x^2 - 1","a":2,"b":3}
        answers: ["sha256:471a842a32502f38e8607cca82c4975d0607715978a6ae2d9ec1c2882f5a048d"]
      - values: {"f":"x^4 - 2x - 7","a":1,"b":2}
        answers: ["sha256:8fb9754eb59518681d5c044189e4bb54a0783a956326ce23469beab6fb6339e6"]
  - id: compacto-o-no
    tier: 2
    type: opcion
    prompt: |
      ¿Cuál de estos subconjuntos de $\mathbb R$ es **compacto**?
    options:
      - |
        $(0, 1]$
      - |
        $[0, \infty)$
      - |
        $\{0\} \cup \{1/n : n \ge 1\}$
      - |
        $\mathbb Q \cap [0, 1]$
    answers: ["sha256:05821124e08c8f4459cea5b7078f76884694791cd1b9bf417343de48d5fb3fd5"]
  - id: r-sup-no-max
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En cuál de estos conjuntos el supremo **no** es un máximo?
    options:
      - |
        $[0, 1]$
      - |
        $(0, 1)$
      - |
        $\{1, 2, 3\}$
      - |
        $[0, 1] \cap \mathbb Q$
    answers: ["sha256:20a7235f945189daa96118a594aa431a129bac7c2bf766c0426d531992386923"]
  - id: r-armonica
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué ocurre con la serie $\sum_{n\ge1} \frac1n$?
    options:
      - |
        Converge a $2$
      - |
        Converge a $\pi^2/6$
      - |
        Diverge, aunque sus términos tienden a $0$
      - |
        Converge porque sus términos tienden a $0$
    answers: ["sha256:194a397000551917b36cbf72f496502a58c395645094efc557782512d0bcde3a"]
  - id: r-p-serie
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Para qué valores de $p$ converge $\sum_{n\ge1} 1/n^p$?
    options:
      - |
        Si $p > 1$
      - |
        Si $p \ge 1$
      - |
        Si $p > 0$
      - |
        Nunca
    answers: ["sha256:fbcd879b05c7420114a55e0f9c653fcc51a35d3d0e9a0cef47c7c90ad4b1c28b"]
  - id: r-weierstrass-falla
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿En cuál de estos casos una función continua **no** alcanza su máximo?
    options:
      - |
        $x^2$ en $[0, 1]$
      - |
        $\sin x$ en $[0, \pi]$
      - |
        $e^x$ en $[-1, 1]$
      - |
        $1/x$ en $(0, 1]$
    answers: ["sha256:ed09bdfa0fb228232ff555e17ba79a198eaef55a0ab6a416d5f9327a40213515"]
  - id: r-uniforme-conserva
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué tipo de convergencia de funciones continuas garantiza que el límite sea continuo?
    options:
      - |
        La convergencia puntual
      - |
        La convergencia uniforme
      - |
        Cualquier convergencia
      - |
        Ninguna
    answers: ["sha256:4944bcc0c14bc0521d3ca7f8f2618d0d798cc5799004f0f8a9e152135127331b"]
  - id: r-leibniz-error
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Para $\sum_{n\ge1}(-1)^{n+1}/n$, ¿cuál es el menor número de términos $N$ cuya suma garantiza, por el criterio de Leibniz, un error menor que $0{,}002$?
    answers: ["sha256:480ffb055a1fda1096a5b0fa73829ccbc417091d4a102d203982693df7b9ed77","sha256:cf1ce08326b7de386ddb7342b6b2c79284a4ac4e4fa19cd2002d6cf9c58e2cbb","sha256:16ec364c275bb316d9c766f3968d15c45a68ef4789783ebdd22ad28277c557d0"]
  - id: r-valor-medio
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      $f(x) = x^2$ en $[2, 3]$. ¿En qué punto $c$ se cumple $f'(c) = \frac{f(3) - f(2)}{3 - 2}$?
    answers: ["sha256:b75e10c347be33aeb9274fb399160c1387f11f9b0fde023862bbe00a12a8db9b","sha256:863d1dd5d7b9ccfbc609a58000b9be5362189926c0d95a24d2fe3f67b2672a51","sha256:eaf98ff052a8ecae36d6159c2033886416c0c46b5c135c54fa6ac832d6a77110"]
---

# Análisis real: completitud, sucesiones, series, continuidad, derivada, integral y convergencia uniforme

El cálculo funciona porque los números reales no tienen huecos. [[mat-calculo-1]] y [[mat-calculo-2]] usaron límites, derivadas e integrales
con la intuición por delante; el **análisis real** los define con precisión ($\varepsilon$ y $\delta$) y **demuestra** por qué funcionan. Eso no es
un lujo: es lo que permite saber cuándo se puede intercambiar un límite con una integral, por qué un algoritmo numérico converge y, sobre todo,
dar **cotas de error** que convierten un cálculo aproximado en una afirmación demostrada. Es la puerta de entrada a la matemática de grado
superior (topología, medida, análisis funcional) y el lenguaje riguroso de la física y de la teoría del aprendizaje.

## Objetivos

Al terminar sabrás:

1. Usar el axioma de completitud (supremo e ínfimo), la propiedad arquimediana y la densidad de los racionales.
2. Demostrar convergencias con la definición $\varepsilon$-$N$, y usar la convergencia monótona, Bolzano-Weierstrass, Cauchy y límites superior e inferior.
3. Decidir la convergencia de series (comparación, cociente, raíz, integral, Leibniz) y **acotar el error** de truncarlas.
4. Trabajar con continuidad ($\varepsilon$-$\delta$), continuidad uniforme, y los teoremas de Bolzano y de Weierstrass.
5. Enunciar y aplicar el teorema del valor medio, el de Taylor con resto y la integral de Riemann (sumas superiores e inferiores).
6. Distinguir convergencia puntual y uniforme, y saber qué se conserva con la uniforme; calcular radios de convergencia.

## Qué debes dominar antes

[[mat-logica-demostraciones]] (cuantificadores, demostraciones, inducción) y [[mat-calculo-2]] (series, Taylor, integrales).

> [!question] Test de entrada
> 1. Niega «$\forall\varepsilon > 0\ \exists N\ \forall n \ge N:\ \lvert a_n - L\rvert < \varepsilon$».
> 2. ¿Converge $\sum 1/n$? ¿Y $\sum 1/n^2$?
> 3. ¿Cuánto vale $\lim_{x\to0}\frac{\sin x}{x}$?
>
> Respuestas: $\exists\varepsilon > 0\ \forall N\ \exists n \ge N:\ \lvert a_n - L\rvert \ge \varepsilon$; la primera diverge y la segunda converge (a
> $\pi^2/6$); $1$.

## 1. Para qué sirve

- **Matemática avanzada**: topología, teoría de la medida, análisis funcional, ecuaciones en derivadas parciales y probabilidad rigurosa se
  construyen sobre este nodo.
- **Computación científica**: garantizar que un método converge y acotar su error ([[mat-analisis-numerico]]); saber cuántos términos de una serie
  bastan para $12$ decimales correctos.
- **Aprendizaje automático y optimización**: convergencia de algoritmos iterativos, continuidad de Lipschitz, contracciones y puntos fijos.
- **Física**: intercambiar límites, derivadas e integrales sin justificarlo produce resultados falsos; la convergencia uniforme dice cuándo se puede.

## 2. Los reales: un cuerpo ordenado completo

> [!practico]
> La recta de los racionales está llena de agujeros diminutos (donde estaría $\sqrt 2$, o $\pi$). Los reales son la recta sin
> agujeros, y todo el análisis depende de esa única propiedad: si una cantidad crece sin pasarse de un tope, se acerca a
> **algún** número concreto. Sin ella, no estaría garantizado ni que exista $\sqrt 2$.


$\mathbb Q$ es un cuerpo ordenado, pero tiene **huecos**: el conjunto $\{q \in \mathbb Q : q^2 < 2\}$ está acotado superiormente y no tiene supremo
racional. Lo que distingue a $\mathbb R$ es un único axioma adicional.

**Axioma de completitud.** Todo subconjunto no vacío de $\mathbb R$ acotado superiormente tiene **supremo** (mínima cota superior).

El supremo puede no pertenecer al conjunto ($\sup\{1 - 1/n\} = 1$) o sí (y entonces es el máximo). Simétricamente existe el **ínfimo** de todo conjunto
acotado inferiormente. Una caracterización útil: $s = \sup A$ si $s$ es cota superior y, para todo $\varepsilon > 0$, hay un $a \in A$ con $a > s - \varepsilon$.

**Teorema (propiedad arquimediana).** Para todo $x \in \mathbb R$ existe $n \in \mathbb N$ con $n > x$.

> [!formal] Con rigor: demostración de la propiedad arquimediana
> *Demostración.* Si no, $\mathbb N$ estaría acotado y tendría supremo $s$. Entonces $s - 1$ no es cota superior: existe $n$ con $n > s - 1$, luego
> $n + 1 > s$, contradicción. $\blacksquare$

Consecuencias: para todo $\varepsilon > 0$ hay un $n$ con $1/n < \varepsilon$; y entre dos reales cualesquiera hay un racional (**densidad**).

## 3. Sucesiones

> [!practico]
> Que una sucesión «tiende a $L$» significa algo comprobable: elige la precisión que quieras ($\varepsilon$, por ejemplo una
> milésima) y, a partir de cierto término ($N$), todos están así de cerca de $L$. Demostrar un límite es dar una receta que,
> para cada precisión, diga desde qué término se cumple. Es como garantizar que una medida se estabiliza: no basta con verla
> quieta un rato.


$(a_n)$ **converge** a $L$ si

$$
\forall \varepsilon > 0 \;\, \exists N \;\, \forall n \ge N : \; \lvert a_n - L\rvert < \varepsilon .
$$

**Ejemplo resuelto 1.** $a_n = \frac{n}{n + 1} \to 1$: $\lvert a_n - 1\rvert = \frac{1}{n + 1} < \varepsilon$ si $n > 1/\varepsilon - 1$; basta tomar $N > 1/\varepsilon$
(existe por la propiedad arquimediana). Una demostración $\varepsilon$-$N$ consiste en **encontrar $N$ en función de $\varepsilon$**.

El límite es único; las sucesiones convergentes están acotadas; los límites respetan sumas, productos, cocientes (con denominador no nulo) y
desigualdades no estrictas.

**Teorema (convergencia monótona).** Toda sucesión creciente y acotada superiormente converge a su supremo.

> [!formal] Con rigor: demostración de la convergencia monótona
> *Demostración.* Sea $s = \sup\{a_n\}$. Dado $\varepsilon > 0$, $s - \varepsilon$ no es cota superior, luego existe $N$ con $a_N > s - \varepsilon$; para $n \ge N$,
> $s - \varepsilon < a_N \le a_n \le s$. $\blacksquare$ Así se prueba que existe $e = \lim(1 + 1/n)^n$ sin conocerlo de antemano.

**Teorema (Bolzano-Weierstrass).** Toda sucesión acotada tiene una subsucesión convergente.

> [!formal] Con rigor: demostración de Bolzano-Weierstrass por bisección
> Sea $(a_n)$ contenida en $[c, d]$. Una de las dos mitades de $[c, d]$ contiene infinitos términos: llámala $I_1$ y elige
> $a_{n_1} \in I_1$. Una mitad de $I_1$ contiene infinitos términos: $I_2$, y se elige $a_{n_2} \in I_2$ con $n_2 > n_1$. Así se
> obtienen intervalos encajados $I_1 \supseteq I_2 \supseteq \cdots$ de longitud $(d - c)/2^k$. Los extremos izquierdos forman una
> sucesión creciente y acotada, que converge a un $x$ (convergencia monótona), y $\lvert a_{n_k} - x\rvert \le (d - c)/2^k \to 0$.
> $\blacksquare$

**Límites superior e inferior.** $\limsup a_n$ es el mayor límite de subsucesiones (y $\liminf$, el menor); existen siempre en $[-\infty, \infty]$, y
$a_n$ converge si y solo si coinciden. Para $(-1)^n(1 + 1/n)$: $\liminf = -1$ y $\limsup = 1$.

**Sucesiones de Cauchy.** $(a_n)$ es de Cauchy si sus términos se acercan entre sí:
$\forall \varepsilon\, \exists N\, \forall m, n \ge N : \lvert a_m - a_n\rvert < \varepsilon$. En $\mathbb R$, **ser de Cauchy equivale a converger**: es otra forma
de la completitud, y la que permite probar convergencia sin conocer el límite.

**Teorema del punto fijo (contracciones).** Si $g$ lleva un intervalo cerrado $I$ en sí mismo y $\lvert g(x) - g(y)\rvert \le L\lvert x - y\rvert$ con $L < 1$,
la iteración $x_{n+1} = g(x_n)$ converge a un único punto fijo $x^*$, con
$\lvert x_n - x^*\rvert \le \frac{L^n}{1 - L}\lvert x_1 - x_0\rvert$. (Las iteraciones forman una sucesión de Cauchy: sus distancias decrecen como una serie
geométrica.) Es la base de muchos algoritmos numéricos y del teorema de existencia de soluciones de las EDO.

## 4. Series

> [!practico]
> Sumar infinitos números puede dar un resultado finito ($\frac12 + \frac14 + \frac18 + \cdots = 1$) o crecer sin fin aunque
> los sumandos se hagan diminutos ($1 + \frac12 + \frac13 + \cdots$). Los criterios dicen cuál de los dos pasa, y la parte más
> útil en la práctica es **acotar lo que falta**: cuántos términos hay que sumar para tener un resultado con las cifras que
> necesitas.


$\sum a_n$ converge si lo hace la sucesión de sumas parciales $S_N = \sum_{n=1}^{N} a_n$. Condición necesaria: $a_n \to 0$. No es suficiente:

**Teorema.** La serie armónica $\sum \frac{1}{n}$ diverge.

> [!formal] Con rigor: la armónica diverge (Oresme)
> *Demostración (Oresme).* Agrupando en bloques de longitud $2^k$, $\frac{1}{2^k + 1} + \dots + \frac{1}{2^{k+1}} > 2^k \cdot \frac{1}{2^{k+1}} = \frac12$, de modo que
> $S_{2^m} > 1 + \frac{m}{2}$. $\blacksquare$ (Diverge muy despacio: $H_N \approx \ln N + \gamma$, con $\gamma \approx 0{,}5772$.)

**Criterios** para series de términos positivos: **comparación** (si $0 \le a_n \le b_n$ y $\sum b_n$ converge, $\sum a_n$ también); **cociente**
($\lim a_{n+1}/a_n < 1$ converge, $> 1$ diverge); **raíz** ($\lim\sqrt[n]{a_n}$); **integral** (abajo). La serie geométrica $\sum r^n$ converge a $\frac{1}{1 - r}$ si
$\lvert r\rvert < 1$; $\sum 1/n^p$ converge si y solo si $p > 1$.

**Teorema (criterio integral con cota de error).** Sea $f : [1, \infty) \to \mathbb R$ positiva y decreciente. Entonces $\sum f(n)$ converge si y solo si
$\int_1^\infty f$ converge y, en ese caso, la cola $R_N = \sum_{n > N} f(n)$ cumple

$$
\int_{N+1}^{\infty} f(x)\,dx \;\le\; R_N \;\le\; \int_{N}^{\infty} f(x)\,dx .
$$

> [!formal] Con rigor: demostración del criterio integral
> *Demostración.* Para $n - 1 \le x \le n$, $f(n) \le f(x) \le f(n - 1)$; integrando en cada intervalo y sumando se atrapa cada término entre dos
> integrales. $\blacksquare$ Así, $\zeta(2) = \sum 1/n^2$ está entre $S_{100} + \frac1{101}$ y $S_{100} + \frac1{100}$: un intervalo de anchura $10^{-4}$ con solo cien
> términos. La fórmula de **Euler-Maclaurin** refina la cola con más términos y da docenas de decimales con pocos sumandos.

**Series alternadas (Leibniz).** Si $b_n$ decrece a $0$, $\sum(-1)^{n+1}b_n$ converge y el error de truncar tras $N$ términos es menor que $b_{N+1}$.

**Convergencia absoluta.** Si $\sum\lvert a_n\rvert$ converge, $\sum a_n$ también, y se puede reordenar sin cambiar la suma. Si converge solo
**condicionalmente** (como $\sum(-1)^{n+1}/n = \ln 2$), el teorema de Riemann dice que reordenándola se puede obtener **cualquier** suma: el orden importa.

## 5. Continuidad

> [!practico]
> Una función continua no da saltos: un cambio pequeño en la entrada produce un cambio pequeño en la salida. De ahí salen
> hechos que parecen obvios y no lo son: si a las $8$ hacía $-2\ ^\circ$C y a las $12$ hacía $5\ ^\circ$C, en algún momento hizo
> exactamente $0\ ^\circ$C (Bolzano); y en una excursión de un día hay un punto más alto y otro más bajo (Weierstrass).


$f$ es **continua** en $a$ si
$\forall\varepsilon > 0\ \exists\delta > 0\ \forall x:\ \lvert x - a\rvert < \delta \Rightarrow \lvert f(x) - f(a)\rvert < \varepsilon$ (equivalentemente, si $x_n \to a$ implica
$f(x_n) \to f(a)$).

**Teorema de Bolzano (valor intermedio).** Si $f$ es continua en $[a, b]$ y $f(a) < 0 < f(b)$, existe $c$ en $(a, b)$ con $f(c) = 0$. *(Se toma
$c = \sup\{x : f < 0 \text{ en } [a, x]\}$; la continuidad impide que $f(c)$ sea positiva o negativa.)* Es la garantía del método de bisección.

**Teorema de Weierstrass.** Una función continua en un intervalo **cerrado y acotado** alcanza su máximo y su mínimo. *(Bolzano-Weierstrass aplicado a
una sucesión que se acerca al supremo.)* En un intervalo abierto puede fallar ($1/x$ en $(0, 1)$).

**Continuidad uniforme.** $f$ es **uniformemente continua** si el $\delta$ sirve para todos los puntos a la vez:
$\forall\varepsilon\ \exists\delta\ \forall x, y:\ \lvert x - y\rvert < \delta \Rightarrow \lvert f(x) - f(y)\rvert < \varepsilon$. $x^2$ lo es en $[0, 2]$ (con
$\delta = \varepsilon/4$, porque $\lvert x^2 - y^2\rvert = \lvert x + y\rvert\lvert x - y\rvert \le 4\lvert x - y\rvert$) pero no en todo $\mathbb R$. **Teorema de Heine**: toda
función continua en un intervalo cerrado y acotado es uniformemente continua.

## 5b. Topología de la recta y límites de funciones

> [!practico]
> Para hablar de «acercarse» hace falta saber qué puntos están cerca de un conjunto. Un conjunto **abierto** no contiene su
> borde (como el intervalo $(0, 1)$: desde cualquier punto puedes moverte un poco sin salirte); uno **cerrado** sí lo
> contiene; y uno **compacto** es cerrado y no se escapa al infinito. Los teoremas fuertes de la continuidad funcionan
> justo en los compactos.

$U \subseteq \mathbb R$ es **abierto** si para cada $x \in U$ hay un $\delta > 0$ con $(x - \delta, x + \delta) \subseteq U$; $C$ es **cerrado** si
su complementario es abierto, o, equivalentemente, si contiene los límites de todas sus sucesiones convergentes. $x$ es
**punto de acumulación** de $A$ si todo entorno de $x$ contiene puntos de $A$ distintos de $x$; la **adherencia** $\bar A$ es
$A$ más sus puntos de acumulación. *Ejemplos:* $(0, 1]$ no es ni abierto ni cerrado; $\mathbb Q$ no es ninguna de las dos cosas
y su adherencia es todo $\mathbb R$; $\{1/n : n \ge 1\}$ tiene un único punto de acumulación, $0$, que no le pertenece.

**Compactos.** $K \subseteq \mathbb R$ es **compacto** si toda sucesión en $K$ tiene una subsucesión que converge **en** $K$. **Teorema de
Heine-Borel:** en $\mathbb R$, compacto equivale a cerrado y acotado (por Bolzano-Weierstrass). Weierstrass y Heine
valen, en general, para funciones continuas en compactos. La versión con recubrimientos (todo recubrimiento por abiertos
tiene un subrecubrimiento finito) es la que se generaliza a [[mat-topologia]].

**Límites de funciones.** $\lim_{x\to a}f(x) = L$ si
$\forall\varepsilon > 0\ \exists\delta > 0:\ 0 < \lvert x - a\rvert < \delta \Rightarrow \lvert f(x) - L\rvert < \varepsilon$ ($a$ punto de acumulación del
dominio; el valor $f(a)$ no interviene). Equivale a que $f(x_n) \to L$ para **toda** sucesión $x_n \to a$ con $x_n \ne a$: así se
prueba que un límite **no** existe, con dos sucesiones que dan límites distintos ($\sin(1/x)$ en $0$, con $x_n = \frac{1}{n\pi}$
y $x_n = \frac{1}{2n\pi + \pi/2}$). Los límites laterales y los infinitos ($\lim_{x\to\infty}$, $f \to +\infty$) se definen
igual, cambiando los entornos.

## 6. Derivada e integral

> [!practico]
> El teorema del valor medio dice que si haces $120$ km en una hora, en algún instante el velocímetro marcó exactamente $120$.
> Taylor dice cuánto te equivocas al sustituir una función por un polinomio, y la integral de Riemann es el área como límite de
> sumas de rectángulos por arriba y por abajo, que se acercan entre sí.


**Teorema del valor medio.** Si $f$ es continua en $[a, b]$ y derivable en $(a, b)$, existe $c$ con $f'(c) = \frac{f(b) - f(a)}{b - a}$. (De Rolle, que sale de
Weierstrass.) Consecuencias: derivada nula implica constante; derivada positiva implica creciente; y $\lvert f(x) - f(y)\rvert \le M\lvert x - y\rvert$ si
$\lvert f'\rvert \le M$.

**Teorema de Taylor con resto de Lagrange.** Si $f$ tiene $n + 1$ derivadas,
$f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x - a)^k + \frac{f^{(n+1)}(\xi)}{(n + 1)!}(x - a)^{n+1}$ para algún $\xi$ entre $a$ y $x$. Da la cota de error de toda
aproximación polinómica: para $e = e^1$, el resto de grado $n$ es menor que $\frac{3}{(n + 1)!}$.

**Integral de Riemann.** Para una partición $P$ de $[a, b]$, la **suma superior** $U(f, P)$ usa el supremo de $f$ en cada subintervalo y la **inferior**
$L(f, P)$, el ínfimo. $f$ es **integrable** si $\inf_P U = \sup_P L$, y ese valor es $\int_a^b f$. Toda función continua es integrable (por la continuidad
uniforme, $U - L$ se hace tan pequeño como se quiera), y también toda monótona: para $f$ creciente con $n$ subintervalos iguales,
$U - L = \frac{(f(b) - f(a))(b - a)}{n}$. El **teorema fundamental del cálculo** une derivada e integral.

## 7. Sucesiones y series de funciones

> [!practico]
> Cuando una sucesión de funciones se acerca a otra, puede hacerlo «punto a punto» (cada punto llega, pero unos mucho más
> tarde que otros) o «a la vez» en todo el intervalo (uniformemente). Solo la segunda conserva las buenas propiedades: el
> límite de curvas sin saltos podría tener un salto si la convergencia no es uniforme.


$f_n \to f$ **puntualmente** si $f_n(x) \to f(x)$ para cada $x$, y **uniformemente** si $\sup_x\lvert f_n(x) - f(x)\rvert \to 0$. La diferencia importa: $f_n(x) = x^n$
converge puntualmente en $[0, 1]$ a una función **discontinua** (vale $0$ en $[0, 1)$ y $1$ en $1$), pero uniformemente en $[0, \tfrac12]$ (el supremo es
$2^{-n}$).

**Teorema.** El límite uniforme de funciones continuas es continuo, y se puede integrar término a término: $\int f_n \to \int f$. (Para derivar término a
término hace falta convergencia uniforme de las derivadas.)

> [!formal] Con rigor: el límite uniforme de continuas es continuo (argumento $\varepsilon/3$)
> Sean $f_n \to f$ uniformemente, con cada $f_n$ continua en $a$, y $\varepsilon > 0$. Se elige $n$ con
> $\sup_x\lvert f_n(x) - f(x)\rvert < \varepsilon/3$, y $\delta$ con $\lvert f_n(x) - f_n(a)\rvert < \varepsilon/3$ si $\lvert x - a\rvert < \delta$. Entonces
> $\lvert f(x) - f(a)\rvert \le \lvert f(x) - f_n(x)\rvert + \lvert f_n(x) - f_n(a)\rvert + \lvert f_n(a) - f(a)\rvert < \varepsilon$. Con convergencia solo
> puntual, el $n$ dependería de $x$ y el argumento se rompe (es lo que pasa con $x^n$ en $[0, 1]$). $\blacksquare$

**Criterio M de Weierstrass.** Si $\lvert f_n(x)\rvert \le M_n$ para todo $x$ y $\sum M_n$ converge, $\sum f_n$ converge uniformemente.

**Series de potencias.** $\sum c_nx^n$ converge absolutamente si $\lvert x\rvert < R$ y diverge si $\lvert x\rvert > R$, con **radio de convergencia**
$R = 1/\limsup\sqrt[n]{\lvert c_n\rvert}$ (o $\lim\lvert c_n/c_{n+1}\rvert$ si existe); dentro de $[-r, r]$ con $r < R$ la convergencia es uniforme, así que la
suma es continua, derivable e integrable término a término. Por eso las funciones definidas por series de Taylor se comportan bien en su disco de convergencia.

## 8. Comprobar con un programa: cotas, no «parece que converge»

```python
from fractions import Fraction
import math

# ζ(2) con 100 términos y la cota integral: un intervalo garantizado.
s = sum(Fraction(1, n * n) for n in range(1, 101))
inferior, superior = s + Fraction(1, 101), s + Fraction(1, 100)
assert inferior < Fraction(math.pi ** 2 / 6) < superior
assert superior - inferior < Fraction(1, 10_000)

# Serie alternada: el error es menor que el primer término omitido.
ln2 = math.log(2)
for N in (10, 100, 1000):
    SN = sum((-1) ** (n + 1) / n for n in range(1, N + 1))
    assert abs(SN - ln2) < 1 / (N + 1)

# Punto fijo de cos: la cota a priori se cumple en cada paso.
L, x0 = math.sin(1), 1.0
x1 = math.cos(x0)
xstar = 0.7390851332151607
x = x0
for n in range(1, 60):
    x = math.cos(x)
    assert abs(x - xstar) <= L ** n / (1 - L) * abs(x1 - x0) + 1e-15

# La serie armónica supera 10 por primera vez en N = 12367 (valor de control del reto).
h, n = 0.0, 0
while h <= 10:
    n += 1
    h += 1 / n
assert n == 12367
```

## 9. Errores típicos

- Escribir un $N$ que depende de $n$, o un $\delta$ que depende de $x$ cuando se pide continuidad uniforme.
- Concluir convergencia de una serie porque $a_n \to 0$ (la armónica).
- Dar por bueno un valor numérico porque las sumas parciales «se estabilizan», sin acotar la cola.
- Reordenar una serie condicionalmente convergente.
- Aplicar Weierstrass o Heine en intervalos abiertos o no acotados.
- Intercambiar límite e integral (o derivada) con convergencia solo puntual.
- Confundir supremo con máximo.

## 10. Resumen

- Completitud: todo conjunto no vacío acotado tiene supremo; arquimediana; densidad de $\mathbb Q$.
- Sucesiones: $\varepsilon$-$N$, monótona y acotada converge, Bolzano-Weierstrass, Cauchy, $\limsup$ y $\liminf$, contracciones.
- Series: comparación, cociente, raíz, integral (con cota de la cola), Leibniz (error $< b_{N+1}$), absoluta frente a condicional.
- Topología de $\mathbb R$: abiertos, cerrados, acumulación, compactos (Heine-Borel); límites $\varepsilon$-$\delta$ y por sucesiones.
- Continuidad: Bolzano, Weierstrass, continuidad uniforme y Heine.
- Valor medio, Taylor con resto, Riemann con sumas superiores e inferiores.
- Convergencia uniforme: conserva continuidad e integrales; criterio M; radio de convergencia.

## Reto

Calcula dos enteros. En ambos, un resultado sin cota de error demostrada no es un resultado.

- **a.** $\left\lfloor 10^{12} \cdot \zeta(3) \right\rfloor$, donde $\zeta(3) = \sum_{n=1}^{\infty} \frac{1}{n^3}$. Valor de control: $\lfloor 10^{6} \cdot \zeta(3) \rfloor = 1202056$.
- **b.** El menor entero $N$ tal que $H_N = \sum_{n=1}^{N} \frac1n > 20$. Valor de control: el menor $N$ con $H_N > 10$ es $12367$.

Formato de la flag, en decimal: `EXODUS{a-b}`

## Repaso: lo que debe quedarte dentro de un mes

1. El axioma del supremo y la propiedad arquimediana.
2. Cómo se escribe una demostración $\varepsilon$-$N$ y una $\varepsilon$-$\delta$.
3. La cola de una serie decreciente está entre dos integrales.
4. Bolzano, Weierstrass y Heine exigen un intervalo cerrado y acotado (un compacto: Heine-Borel).
6. Un límite no existe si dos sucesiones hacia el punto dan límites distintos.
5. Solo la convergencia uniforme conserva la continuidad y permite integrar término a término.

## Siguiente

En las ramas: topología, teoría de la medida e integración, análisis complejo y análisis funcional; en el troncal, [[mat-calculo-multivariable]]
y [[mat-ecuaciones-diferenciales]] ganan con este rigor.
