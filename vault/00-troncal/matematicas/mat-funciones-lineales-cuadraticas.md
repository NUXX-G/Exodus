---
id: mat-funciones-lineales-cuadraticas
title: "Funciones lineales, afines y cuadráticas: rectas y pendiente, parábolas y vértice, proporcionalidad inversa y funciones a trozos"
area: matematicas
trunk_level: 3
prerequisites: [mat-funciones-graficas, mat-ecuaciones-segundo-grado, mat-sistemas-dos-incognitas]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 11: «Funciones lineales, cuadráticas y de proporcionalidad inversa», secciones 1.1-1.4 (proporcionalidad directa, rectas y = mx e y = mx + n, pendiente), 2.1-2.3 (parábolas, traslaciones, y = ax² + bx + c), 3.1-3.2 (proporcionalidad inversa, hipérbolas) y 4 (funciones definidas a trozos). Apuntes Marea Verde, autor David Miranda Suárez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/11_funciones_lineales_cuadraticas.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 11: «Funciones y gráficas», sección 2.3 (función afín y cuadrática). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/11%20Funciones%203.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 11: «Funciones y gráficas», sección 3.3 (la función lineal o de proporcionalidad directa). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_11_graficas.pdf"
hints:
  - "Concepto: en una recta y = mx + n, m es la pendiente (lo que sube y por cada unidad de x) y n el corte con el eje Y. En una parábola y = ax² + bx + c, el signo de a dice si se abre hacia arriba o hacia abajo, y el vértice está en x = −b/(2a)."
  - "Herramienta: recta por dos puntos: m = (y₂ − y₁)/(x₂ − x₁) y después n sustituyendo un punto. Parábola: vértice, cortes con los ejes (ecuación de segundo grado y f(0)) y algún punto más a cada lado, usando la simetría."
  - "Documentación: Marea Verde 4.º ESO B cap. 11; 3.º ESO cap. 11 (sección 2.3)."
exercises:
  - id: pendiente
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Cuál es la pendiente de la recta que pasa por $A{{A}}$ y $B{{B}}$?
    variants:
      - values: {"A":"(2, 5)","B":"(6, 13)"}
        answers: ["sha256:cfaee4c2d274d97b8d00eeeb8ac5328ee23ff91650d5887c4b1bd9405a616b77","sha256:7e8d7e98125d867980303532cd02ec06aa5f523b42c1de0291357374589f2add","sha256:c89cff95110c753fed8fcbb03c302f5f2157ab1f008f55fecc8fe906241d33c3"]
      - values: {"A":"(-1, 4)","B":"(3, -8)"}
        answers: ["sha256:9d04078a4c00884849e3343f90c0edbe73036b5f0763722f51c42ec5cb7527bd","sha256:46abf9e603ec50844ffa110e12fab67516bd588170d280a2644b5a56a9f84463","sha256:efcb7f4f788e4858bb339561d017f2a4e887c615412e6abe92094578ac9fbd95"]
      - values: {"A":"(0, -2)","B":"(5, 0{,}5)"}
        answers: ["sha256:f7b597e52999adb3892c5e53cbd5173cc6fc34f92f132648d49f1b9968dae610","sha256:d15741398e20a3705de18671a5d385b23e25d0d69ef5fb333cf19f182d2092b5","sha256:498e5fee60824e134f636878329209861c02933d030b1a3ecd9d90a24497fa0e"]
      - values: {"A":"(-3, -3)","B":"(1, 7)"}
        answers: ["sha256:7f81331f37fabce7355497a15e8a9d39086e97ee0c5cd1bb49ff6e2fef4c8b8f","sha256:d9ff357aac593bbdeace4d30aa95823de506146982864b97f2b6447a6121f522","sha256:f9399e376cb8d8a5ab9933010eb81a9cf065c03d0b3e6b7c639f10d50b7e6c2a"]
      - values: {"A":"(2, 7)","B":"(8, 7)"}
        answers: ["sha256:d31759e3c786ba4f4374c21fd1cfc4e53099a9920f0851ede11694fe5f61acce","sha256:9e92d21ac42c54fa222cb4d1568bdf0828944b6570cb2b5dbfeb2070b6a1ec3b","sha256:6c6f5eb083943de411e05661e32801ca9c657d2654d288bb051acc76b0f14477"]
      - values: {"A":"(-4, 6)","B":"(2, -3)"}
        answers: ["sha256:8416b6190a24af622d03aa9c5e379c9465f589898160b97e873f393165d6395a","sha256:89800e39797c2adab729a58b38eb14f61aacb605be1bfbf8f55faf9b3d27c760","sha256:cb879b2cfd49a287e467024de9af54cd1d5415309ecd75164156015ee0bea522"]
  - id: recta-por-dos-puntos
    tier: 2
    prompt: |
      Escribe la recta que pasa por $A{{A}}$ y $B{{B}}$ en la forma $y = mx + n$. Respuesta: `m;n`.
    variants:
      - values: {"A":"(1, 1)","B":"(3, 7)"}
        answers: ["sha256:6556fc79cd5eeea33cdfb7bbdaff390983e7d5cbb965cae4258e94e638960faf"]
      - values: {"A":"(-2, 9)","B":"(2, 1)"}
        answers: ["sha256:a51d9b712489823e55107f918de66becfc484639e6adc72b2fdcab25183ffd5b"]
      - values: {"A":"(4, 0)","B":"(6, 5)"}
        answers: ["sha256:623328dde638faf079c7632a2e190759358cc032aa48f83f76393222c85dd7a2"]
      - values: {"A":"(-1, -6)","B":"(2, 3)"}
        answers: ["sha256:5b78695df2830ca1067fa19d82bd2be6f673d162c9d7f4e3aabf3ee04402e458"]
      - values: {"A":"(3, 4)","B":"(9, 7)"}
        answers: ["sha256:75d1764d5f4eb02a1b7748e0c58adddbb1fa0e284e25bb05db1c61ebda0783f0"]
      - values: {"A":"(-5, 2)","B":"(5, -2)"}
        answers: ["sha256:a0d5db90715de40f7916ed6a59aa6e525a80ebd41edc10e6251fbfaf49931631"]
  - id: recta-paralela
    tier: 2
    type: numero
    sig: 10
    prompt: |
      La recta $y = mx + n$ es paralela a $y = {{r}}$ y pasa por ${{Q}}$. ¿Cuánto vale $n$?
    variants:
      - values: {"r":"3x + 1","Q":"(2, 4)"}
        answers: ["sha256:da5e6e68d244985abf99614005b394d4f35be2ed3cef9e93ee11cede9f6e81ee","sha256:2b1565a3e6dc54debc089a921ff505bd8d394eb6308dc053bbacfb5d855460d4","sha256:c85087bada59b7bb11391ab2f17ab6ee868cc10d4b840b6f9cb5de0e9d809e09"]
      - values: {"r":"-2x + 5","Q":"(-1, 7)"}
        answers: ["sha256:057b7f2ebc75a8ae4380ba9e0c6f53b0e942dd41f560fcbf64cdbb5c5ac97903","sha256:2aa2ff8868a1dc47c37be30aa25d359ee189aca8e3f1d194f8421a9b8818cf60","sha256:d20f18516f7174e3ead342e01bfdb9c7cacefa75071f0ae7d0d231155cbc1ac2"]
      - values: {"r":"0{,}5x - 3","Q":"(4, 0)"}
        answers: ["sha256:e708510a7c2c5402340b2f5994aedfb46f3908d7b87966cea9faa198d9c30d8a","sha256:9444a04a890f2459a4405c30df43c21246c9f55b76ad1c7088ed55762cd93a42","sha256:ee9cc40202cf7b56f9a155fd3385e6879f53b3dff70b54f8289988892a6a0f72"]
      - values: {"r":"-x","Q":"(3, -6)"}
        answers: ["sha256:a5b7ffd7d15317498455bc420ab728886e023457842b0e3a98f989f46e9769e3","sha256:a30f21c984312bc2db1ac904be9661886fb38895ea52e09619156efe69fe9d39","sha256:df4a7ff6d17678808e960d57a047033326bd98566fc3aea3eefec109defe3b19"]
      - values: {"r":"4x - 2","Q":"(-2, -5)"}
        answers: ["sha256:79f59af62be1439aa9603c1c3c1ebd1f5ecad672f4b104da370ead2ce012094b","sha256:613012172270fb42e109d276e3c32ab5e76b41c8b23a584653372e12bc842024","sha256:fd550bdbbfe70819cb363a4b0338bf7257841464b131a44d63748cfd89b9febe"]
      - values: {"r":"1{,}5x + 2","Q":"(2, 9)"}
        answers: ["sha256:e618bde28dd2ea7baf924b976d0277d3beff57fbd33d61a664684af3e081670a","sha256:ae51640acbe0f4cd7b60bae95a7180d00bc352c93d991d380adbc0a70f6023a0","sha256:2d07f89806246d2c674d307825772f637c33aa59cb45a41e77372989e239114d"]
  - id: punto-en-la-recta
    tier: 1
    prompt: |
      ¿Pertenece el punto ${{Q}}$ a la recta $y = {{r}}$? Responde `si` o `no`.
    variants:
      - values: {"r":"2x - 3","Q":"(1, 5)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"r":"-x + 4","Q":"(3, 1)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"r":"0{,}5x + 2","Q":"(6, 3)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"r":"3x","Q":"(-2, 6)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"r":"-4x + 1","Q":"(-1, -3)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"r":"1{,}5x - 2","Q":"(4, 4)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: vertice-de-la-parabola
    tier: 2
    prompt: |
      ¿Cuál es el vértice de la parábola $y = {{f}}$? Respuesta: `x;y`.
    variants:
      - values: {"f":"x^{2} - 8x + 10"}
        answers: ["sha256:c5d4fe9a89dea9156eb3d2afa8138b9799fd326eb3c318b0a8a7c1624293028a"]
      - values: {"f":"-2x^{2} + 8x + 1"}
        answers: ["sha256:20a5b8e89d4892dbd37343584661e6a03ea946148c8474fb962e501872f5280b"]
      - values: {"f":"3x^{2} + 6x - 2"}
        answers: ["sha256:0a0de4dd6f1b160233edda878a10ae4fab035a9e243b51c234fa60e62724e75a"]
      - values: {"f":"-x^{2} - 4x + 5"}
        answers: ["sha256:1537cbb4073a73bfe493b19fa4e6c6a5bf4838f932056d1004cbca269ea2e576"]
      - values: {"f":"0{,}5x^{2} - 3x + 1"}
        answers: ["sha256:7f9e43274cffcb8ffba1ded5c318328ee1248838a32eafd9347530a16e84693d"]
      - values: {"f":"2x^{2} + 10x + 9"}
        answers: ["sha256:cdaf6965baa4c13023c06937a47e07edd3f8e627baab23159ac50a318e0506fb"]
  - id: cortes-de-la-parabola
    tier: 2
    prompt: |
      ¿En qué puntos corta la parábola $y = {{f}}$ al eje $X$? Escribe sus abscisas de menor a mayor: `x1;x2`.
    variants:
      - values: {"f":"x^{2} - 8x + 12"}
        answers: ["sha256:6355d91d8f5e1a96483239e451524953c412f4ca952c24cde3c78175c6cc3e32"]
      - values: {"f":"-x^{2} + x + 12"}
        answers: ["sha256:682acd6a9ce15dbd8c553f8124cb22bf0afa570b2f9f7b716c37452b819298ab"]
      - values: {"f":"2x^{2} - 3x - 5"}
        answers: ["sha256:2d7aa810cbdb18830b3afa1655b2487c167ba909bb08f1a2b900b17d659e0dd9"]
      - values: {"f":"-3x^{2} + 9x"}
        answers: ["sha256:29146eb203a325319fce1b33a3812e9fd3662bf8589143019f76c13a2901b0cf"]
      - values: {"f":"0{,}5x^{2} + 4x + 6"}
        answers: ["sha256:8599bbb027be04c80b63018a9f85e266379c014f38f0820389ac61776447786e"]
      - values: {"f":"4x^{2} - 4x - 3"}
        answers: ["sha256:f8819affc50e1846f2d08b2f9deb3cd04ab06e2c9078aac7839f3f93e68f9db6"]
  - id: parabola-por-vertice-y-punto
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Una parábola $y = a(x - h)^2 + k$ tiene el vértice en ${{V}}$ y pasa por ${{Q}}$. ¿Cuánto vale $a$?
    variants:
      - values: {"V":"(1, 2)","Q":"(3, 10)"}
        answers: ["sha256:d9b556f8b137ab83b5bfd3847cca5cd8ea96aaf6366fe585736b95be3df0b18f","sha256:53d731c60ee8b4d8d22dba8d102f65558f47277126d23eaf52f81e4e9ca697e2","sha256:c86694ab14a0d4e6300d53a486c4a4c95c16f6bd39261570ac4639fd6fef5a81"]
      - values: {"V":"(-2, 5)","Q":"(0, -3)"}
        answers: ["sha256:d1abcb6e00bb06cfa922918d44e128575c076fb68464f08ef2a67fdd63a3e4ca","sha256:eb5e50b36d3b89d17b19aaf02feba85217341de3ed0a47986e16c7f18df2899d","sha256:460e98f894fecb869a09bfdd39e11a19acc3e1ece558c42e3edf909accc5cc9c"]
      - values: {"V":"(0, -4)","Q":"(2, 2)"}
        answers: ["sha256:dc645476c506321af09b9f268a2bd137f309d54b264dd7bc990890ba9502ffee","sha256:bb09fd2c08593c3a97a77b8551379afbf1b8ff976490089361ced773b6b225b8","sha256:f891d323dfb7e94565b1d011b563d20054872f955ce0ea213c05fcb612304fd5"]
      - values: {"V":"(3, 1)","Q":"(5, -7)"}
        answers: ["sha256:2484aeb688010a2785545a7876533cfa21c0aa8b6693d8de500bb3fae8f86594","sha256:0f7d60e9cee0c6409ef76095eec5e345dda49993b5f655b9da306eea301e9a28","sha256:b1223e595461a9d109cc5e864c4c4ee1af9f644f10f77293702898e095cd7060"]
      - values: {"V":"(-1, -2)","Q":"(1, 0)"}
        answers: ["sha256:2f7b8ac4d7f12de46aba099a7d0a26067d822fe7ec2d8d0844d43b698c74226d","sha256:f4c6ac864d68cff843b8ead6065812d73dc2494a9425ec29b1522e9f449b8f79","sha256:aab5e18ce97f391403df89a2edec9cd9cc45e1006266719cceacaa98e1358e17"]
      - values: {"V":"(2, 6)","Q":"(4, 4)"}
        answers: ["sha256:3522b572b67fb7274cd74ba9f36cea9bbc4b63dbe5fe6b3a4745f3c48177017a","sha256:65149d1864a4d175e411425bba24852494659898c78213e59d5525b96ea0027b","sha256:bf62301bf539616b15ac53ce07d414f3a9d725cbc7d93248c7015ece52a24f2e"]
  - id: maximo-de-un-problema
    tier: 2
    type: numero
    sig: 10
    prompt: |
      {{e}}
    variants:
      - values: {"e":"Con $36$ m de valla se quiere cercar un terreno rectangular. ¿Cuál es el área máxima que se puede cercar, en m²?"}
        answers: ["sha256:bbfd45ef1905ea84174aee30dddcaff9beccf8cb63f749901ec7699f197a222c","sha256:41c517be32e5e4cc7ab33fdd62fedeae62230da56328aea5bea33bd299276ca4","sha256:dfe60e5783f2112978301bb4c289135731540239aa676ebea8786fad333dca01"]
      - values: {"e":"Con $50$ m de valla se quiere cercar un terreno rectangular. ¿Cuál es el área máxima que se puede cercar, en m²?"}
        answers: ["sha256:a02e601ff6d24df59da482865acddb9e7a61cee67f7acfea9187bf7f22efaee3","sha256:d9973ccbf028e859ab739d780a526d4cce6ed03a500bb2cb1679a895310de189","sha256:0abbde6df654d67da571a2f1179c08a215df7503e18e4cc8c42e94998509c886"]
      - values: {"e":"Si un producto se vende a $p$ €, se venden $120 - 2p$ unidades. ¿Cuál es el ingreso máximo posible, en €?"}
        answers: ["sha256:16f0b2445956c86c5d722a0370107256ad8d384b01e618e2fccdb6a05e67fa01","sha256:6d159846175636b94d2a07455a68c9dbb33dd72aa4289e632b0ed1bd3944d576","sha256:39bc22ea715f22fe8874b0666d50f91273efa5cbb9a397c7751ba2ed3db4a63c"]
      - values: {"e":"Con $14$ m de valla se quiere cercar un terreno rectangular. ¿Cuál es el área máxima que se puede cercar, en m²?"}
        answers: ["sha256:0a0200c485d681ac4c896888eabd4b11b21a833b3fde1ec0625e2f5759c00664","sha256:bd2052cd285a3cd895d52ec8a4e04661b39cd8270e5fa6fca5c114e7555ecbc9","sha256:aa00cb9b3de5a247fce4b69517b6cba9f9ef997b52bdc40d54bc095bb1492892"]
      - values: {"e":"Si un producto se vende a $p$ €, se venden $80 - 4p$ unidades. ¿Cuál es el ingreso máximo posible, en €?"}
        answers: ["sha256:5201a2a89068f649ff7a1f1de787a3efbfc5dde05ab9b8d96b2e2f72aafbc5ad","sha256:893279d6cab92f81f942d21d52678a3b49f242278b9311a6f3a480fa924477e3","sha256:ef6caea3ba51f1c17468e243839788bfdd066285098618dcf65588bdd88612b7"]
      - values: {"e":"Si un producto se vende a $p$ €, se venden $300 - 5p$ unidades. ¿Cuál es el ingreso máximo posible, en €?"}
        answers: ["sha256:ea0cd622afa5bbc9c113b1a64d92f9b3f8b0df73639132eb2f70d05cb81ad633","sha256:09fa88fd3b60f299ff43f29987c27b9870f5136c8afd23205e0d6449dff4faa9","sha256:0e682fd5474d47012be7d8208cbfbe687d25d1e03aedf340630a47fdbd4d6714"]
  - id: hiperbola
    tier: 2
    prompt: |
      Para $f(x) = {{f}}$: calcula $f({{x}})$, y da la asíntota vertical ($x = \dots$) y la horizontal ($y = \dots$). Respuesta: `valor;asíntota vertical;asíntota horizontal`.
    variants:
      - values: {"f":"\\dfrac{6}{x - 2} + 1","x":"5"}
        answers: ["sha256:b88d018e44835e5070e3737f2d4ca7f2c93a7a21c7d77c5fb7e789ec8f2023fa"]
      - values: {"f":"\\dfrac{-8}{x + 1} + 3","x":"3"}
        answers: ["sha256:fbcba7699020fbf970e3770ae6c381e63d2fb4cdaea256fd57e797d3151ae1ad"]
      - values: {"f":"\\dfrac{10}{x} - 2","x":"-5"}
        answers: ["sha256:1433746fe247c54ce9fe2bcab574969ee964e6a273bf516fdc785b21901b6a63"]
      - values: {"f":"\\dfrac{3}{x - 4}","x":"4{,}5"}
        answers: ["sha256:8dd7758ee3db6c5d8db63097ac5541a512367b4380dccd224728ed7e24d304cc"]
      - values: {"f":"\\dfrac{-12}{x - 1} + 2","x":"-2"}
        answers: ["sha256:9afcb60df82441c8bff80813c80c8b6c9384d78fd3ddeece3cc29e6872ad2277"]
      - values: {"f":"\\dfrac{5}{x + 3} - 1","x":"2"}
        answers: ["sha256:9947be49234a7b8ef13374c3c69b3ebccd184e6a9793e5a11c9f97ad6029d3bd"]
  - id: funcion-a-trozos
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Una tarifa cuesta ${{F}}$ € al mes si se consumen como mucho ${{L}}$ unidades, y cada unidad por encima de ${{L}}$ cuesta ${{p}}$ € más. ¿Cuánto se
      paga por ${{u}}$ unidades?
    variants:
      - values: {"F":15,"L":10,"p":"1{,}5","u":"14"}
        answers: ["sha256:d18eeb749fe26b9d810d0538e5457eb95d22a81cad2ce2968a9bdf4a46035c4e","sha256:7655b7251a5dc8412f509f6afae642f9a2187bc0ea9fb53ba72ed7432f2fea1b","sha256:59f615ff1c2a193a53d84f7e601e57d67e486a7b0da540b60ed803c2e2407343"]
      - values: {"F":8,"L":3,"p":"2{,}5","u":"7"}
        answers: ["sha256:95dab2b587ba1549bd0c4eab5acec36144058fb106afe1793f2adfed188edbf8","sha256:48788737985e6a072deb9a1da94907cbe01c03083d1322a1ed4adddb7a48151c","sha256:52a3f4b616a8d5baebfcbc68e04d595505dfaa8f617b820dc5908867d6b2a41e"]
      - values: {"F":20,"L":50,"p":"0{,}3","u":"120"}
        answers: ["sha256:ebe0f8cd7e6aa25a14557f854ccea51618b625b9a30b39cc8a302c39c5cb23cf","sha256:939dfe222f058c7958d42b2b15e282be5956722e1caf9759d8bda873a3060ce8","sha256:01458a90f9170c53e076bf5a90ae6cb61c23e0967acb9e1b35a7170a2fe76f94"]
      - values: {"F":12,"L":6,"p":"4","u":"9"}
        answers: ["sha256:1038be41a361528bf5f452ccea8e324ecbde2d187aa336c8ecfa79f892d62b50","sha256:5e2f91ff43b845b54dfe47110b660574b54ecb027be63932f3160db34eade4be","sha256:7b6a51e93982826fca66625d2457ceea8796a9b197fa580821c4d206decd3b60"]
      - values: {"F":5,"L":1,"p":"0{,}8","u":"9{,}5"}
        answers: ["sha256:cc2fb35d6065c384117c579d70b416b8e89bb4c24f23f3b1493c63d6eb09a702","sha256:a9f34d78b4e18a9584ff6b13682f4e75a27282dd219d6403dc88b00068ab6ec1","sha256:de3e391ba5a8a2172298839e72274f970e4d02955e1952f1744201c93157d264"]
      - values: {"F":30,"L":100,"p":"0{,}15","u":"260"}
        answers: ["sha256:abbc6e91d7aa6384616f2fdd5792baad6a1a92ed4bcea8d46ade5406ae82e69d","sha256:ac9bc216e79ed760c43540eb325aab8700decd79292d655d9b0a27ba7a3c0680","sha256:567116206aacfd80a8525e91b840879c03560150dc0a15ac7ce6924de4d1daa3"]
  - id: traslacion-de-parabola
    tier: 2
    prompt: |
      Se traslada la parábola $y = x^2$ ${{h}}$ unidades {{dir1}} y ${{k}}$ unidades {{dir2}}. Escribe la nueva parábola como $y = x^2 + bx + c$.
      Respuesta: `b;c`.
    variants:
      - values: {"h":"2","dir1":"a la derecha","k":"3","dir2":"hacia arriba"}
        answers: ["sha256:8584eb7ce977d25064dccf4eacf0a6805319ee97ebae3ec4762579391f417f3e"]
      - values: {"h":"1","dir1":"a la izquierda","k":"4","dir2":"hacia abajo"}
        answers: ["sha256:28bf16acee72a1c96175ab09bac6f9a3b521b5f3cb97b4d3bf3dffb6dcc9a14b"]
      - values: {"h":"3","dir1":"a la derecha","k":"0","dir2":"hacia arriba"}
        answers: ["sha256:817b044f56afa9fc9198b79de00c0168ea077deace2a0059ca2c3fe2a7886124"]
      - values: {"h":"2{,}5","dir1":"a la izquierda","k":"1","dir2":"hacia arriba"}
        answers: ["sha256:3c5ad6302c9900ad5a733e1b9fd6bd3116fcb8fc6b33fdb66c21f309636356c7"]
      - values: {"h":"4","dir1":"a la derecha","k":"10","dir2":"hacia abajo"}
        answers: ["sha256:7b2d49cef6b2e8ca5b402caf780c5c477fe2507243b46ec688e870cdbe9274dc"]
      - values: {"h":"0{,}5","dir1":"a la derecha","k":"0{,}75","dir2":"hacia arriba"}
        answers: ["sha256:0fb6cfb21a559369b7285fab68096966b9835b190c99b3918a5b808aca6f04b7"]
  - id: pendiente-y-forma
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica qué significa la pendiente de una recta, por qué es la misma entre cualesquiera dos de sus puntos y qué
      indica su signo; interprétala en $C(x) = 25 + 0{,}18x$ (coste de un alquiler de coche en euros según los km). (b) Explica, completando el
      cuadrado, por qué el vértice de $y = ax^2 + bx + c$ está en $x = -\frac{b}{2a}$ y por qué es un mínimo si $a > 0$ y un máximo si $a < 0$.
    sealed: "gz64:H4sIAAAAAAACCn1TwW4bNxD9lYcFD5IsG7bQAIUa9ZL2UKC3HLONMeKOZLrkUCa5wW4EXfonOgZNTrmlt+yf5EsCUoosA0ZvS87yvZn33myr6G2bjJdqXk0mIxpPJviTsGFpDEtiKKfAEdbjoWVQ61gSQfUKuiVpPFSnTtcsUDdqDuWwQF2vAultfzvDJfrbm922K5/d7c1OXeF3geqxgOtwAVFTsKTAaHzEppXkYyawHB9aw4FqUSeg/Gh0whqrKSgOn0p/bKG9PnQeDbtNRqQyxGjjAzh6WMI6DPuV0ZQna4UQWCea58rXf41oa4S0GT7L1/8gHprc0tAvsD4iBTPsZd1aH2vJjCsfHEF7AUdN1gtHRC+I7PieJHEcX+G1yZL8imuVOQobYrvkKWKpvMyVJd0T+uPNIt9wxJ0P5r2XRPag2KtRN8YCsxe4wPV2urv5uVNzaGoIf7tadMsx23MoKXz75yPcsI8YnRwdo8cd9VCzF4f6ytz7iJEPDUvGYcky+mDWLOOrWmqZTEbLHAxF3dsZLrDMlmksQHVteZVG+Xy0e7nbzmhX18Gs79K4/K5xeaq+ne22P1Hx32aDm0CNz4Oqul5zHrrHO7IMda0QvfUlUx0WuHxCoA6iUhF1mhveBOM4ILYux7KWM8yzgKge5fK5nqbFRrNuyTbUHHV4N3wIyWie5ybZwg2fxDj/g/7l8/THiexxojOcE8y+yzC15G2jMOyX3pY8RuOGDynkdAaOG9bJo+HH3DwrRjWtQrsMRlfzN9tKB5M4GF/Nq994ZaS8flxp7Z1/XJOGYUQHzhvsI3rctzGZsh1lo2JWJaYc5Uxz2M1qPttNnxD9IYnDJnA6Z+rxbKqOB+0lcVfGsyD70BrL4f84Xnm3sZmBz7LTI9B7L3RmDvwPfRF5PXwpbNGspSipSD0l+Wv3HXPI4dUHBQAA"
  - id: r-paralelas-pendiente
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué tienen en común dos rectas paralelas (no verticales)?
    options:
      - |
        Ordenadas en el origen iguales
      - |
        Pendientes iguales
      - |
        Pendientes opuestas
      - |
        Pasan por el origen
    answers: ["sha256:3b65683f50292ee3367fa5ca33c8cc2e363aa7ec7d9f16a482343f85d427960e"]
  - id: r-lineal-origen
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Por qué punto pasa siempre la gráfica de una función de proporcionalidad directa $y = mx$?
    options:
      - |
        Por el origen
      - |
        Por $(1, 1)$
      - |
        Por $(0, 1)$
      - |
        Por ningún punto fijo
    answers: ["sha256:8966b0b3b5c954206e53764b08ed3f4b4ccad15fcc4496b65bc304807c541952"]
  - id: r-signo-a
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Hacia dónde se abren las ramas de $y = -3x^2 + 5x - 1$?
    options:
      - |
        Hacia arriba
      - |
        Es una recta
      - |
        Hacia abajo, con un máximo
      - |
        Depende de $c$
    answers: ["sha256:78bb0aeebce258a5f61823c87dd0ec5555da3e7dc741a31415074a9ee05125be"]
  - id: r-proporcionalidad-inversa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué curva es la gráfica de $y = \dfrac{20}{x}$?
    options:
      - |
        Una recta
      - |
        Una parábola
      - |
        Una circunferencia
      - |
        Una hipérbola
    answers: ["sha256:03ed6ad10581bccec6eb00489b969dca3d381310420d1e805056fe22293f93a9"]
  - id: r-ordenada-origen
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿En qué ordenada corta al eje $Y$ la recta $y = 4x - 7$?
    answers: ["sha256:4ee79de65e470717c865f1c504292f42487f62b233548b069dc7771fade2a7be","sha256:22eb3da04c1f04ff8c7dfb8919778f19ceb509cfcf1b5fcf950efb54e67e53a0","sha256:c954a1dd1a4f9b6b23901086e54ce90b0b56281e2a8d85b70e56606bc3990794"]
  - id: r-eje-simetria
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el eje de simetría ($x = \dots$) de la parábola $y = x^2 + 4x - 3$?
    answers: ["sha256:f56232e9275e2a210266e722d1abf745474a578583e92d8794385d12b8e8df43","sha256:67a1c44917dab15a7207ceae5e058b5156c65cadd1ecac725ae6100216840abd","sha256:0ef171cc00cac331239f283c04b7686ab926e76deb8192355d0a837a88ac77c5"]
  - id: r-pendiente-cero
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo es una recta de pendiente $0$?
    options:
      - |
        Vertical
      - |
        Horizontal
      - |
        Creciente
      - |
        Pasa por el origen
    answers: ["sha256:28843ffc41fb376c8f8b9664b11c61a1f6b4668358f181bc7cf235998884edbf"]
---

# Funciones lineales, afines y cuadráticas: rectas y pendiente, parábolas y vértice, proporcionalidad inversa y funciones a trozos

Las rectas describen todo lo que cambia a ritmo constante: un precio por kilo, un depósito que se llena con un grifo, una tarifa con
cuota fija. Las parábolas describen la trayectoria de un balón, el área de un rectángulo de perímetro fijo o un beneficio que primero
crece y luego cae. Las hipérbolas, las magnitudes inversamente proporcionales. Este nodo estudia estas tres familias de funciones (las
más usadas de todas), cómo se reconocen sus parámetros en la fórmula y en la gráfica, y cómo se usan para resolver problemas de
máximos y mínimos sin cálculo.

## Objetivos

Al terminar sabrás:

1. Interpretar la pendiente y la ordenada en el origen y escribir la recta que pasa por dos puntos o por un punto con una pendiente.
2. Reconocer rectas paralelas y comprobar si un punto está en una recta.
3. Dibujar parábolas: vértice, eje, cortes y traslaciones de $y = x^2$.
4. Resolver problemas de máximos y mínimos con parábolas.
5. Manejar la proporcionalidad inversa (hipérbolas) y las funciones definidas a trozos.

## Qué debes dominar antes

[[mat-funciones-graficas]] (concepto de función y sus características), [[mat-ecuaciones-segundo-grado]] (cortes de la parábola) y
[[mat-sistemas-dos-incognitas]] (corte de dos rectas).

> [!question] Test de entrada
> 1. Si $f(x) = 3x - 2$, ¿cuánto vale $f(4)$?
> 2. Resuelve $x^2 - 5x + 4 = 0$.
> 3. Desarrolla $(x - 3)^2$.
>
> Respuestas: $10$; $x = 1$ y $x = 4$; $x^2 - 6x + 9$.

## 1. Para qué sirve

- **Economía**: costes fijos más variables (rectas), ingresos y beneficios máximos (parábolas), tarifas por tramos.
- **Física**: movimiento uniforme (recta posición-tiempo), caída libre y tiros (parábolas), la ley de Boyle $PV = k$ (hipérbola)
  ([[fis-medida-movimiento]]).
- **Modelización y estadística**: una recta que pasa «entre» los puntos de una nube resume su tendencia ([[mat-estadistica-bidimensional]]).
- **Ingeniería**: los cables de puentes colgantes y las antenas parabólicas tienen forma de parábola.

## 2. Funciones lineales y afines: la recta

> [!practico]
> Un taxi cobra $2$ € al subir y $1$ € por km: con $0$ km pagas $2$, con $1$ km $3$, con $2$ km $4$… Cada km sube el precio lo mismo. Esa subida
> constante por unidad es la **pendiente**, y los $2$ € de partida son el punto donde la recta corta al eje vertical.

- **Función lineal** (de proporcionalidad directa): $y = mx$. Su gráfica es una recta que pasa por el origen ([[mat-proporcionalidad]]).
- **Función afín**: $y = mx + n$. Su gráfica es una recta; $n$ es la **ordenada en el origen** (corta al eje $Y$ en $(0, n)$) y $m$ es la **pendiente**:
  $$
  m = \frac{y_2 - y_1}{x_2 - x_1} \quad \text{para dos puntos cualesquiera de la recta.}
  $$
  Si $m > 0$ la recta es creciente; si $m < 0$, decreciente; si $m = 0$, horizontal ($y = n$, una **función constante**). Las rectas verticales $x = k$
  no son funciones.
- **Recta por dos puntos**: se calcula $m$ y luego $n$ sustituyendo uno de ellos. *Ejemplo:* por $(1, 3)$ y $(4, 9)$: $m = \frac{6}{3} = 2$; $3 = 2 \cdot 1 + n$, $n = 1$;
  la recta es $y = 2x + 1$.
- **Punto-pendiente**: la recta de pendiente $m$ por $(x_0, y_0)$ es $y - y_0 = m(x - x_0)$.
- **Rectas paralelas**: tienen la misma pendiente. (Las perpendiculares tienen pendientes $m$ y $-\frac1m$: [[mat-geometria-analitica]].)
- **Corte de dos rectas**: se resuelve el sistema que forman ([[mat-sistemas-dos-incognitas]]).

## 3. Funciones cuadráticas: la parábola

> [!practico]
> Si lanzas una pelota, sube cada vez más despacio, se para arriba y baja cada vez más deprisa: su altura frente al tiempo dibuja
> una parábola. Es simétrica: tarda lo mismo en subir que en bajar desde la misma altura. El punto más alto es el **vértice**.

Una **función cuadrática** es $y = ax^2 + bx + c$ con $a \neq 0$; su gráfica es una **parábola**.

- **Forma**: si $a > 0$ se abre hacia arriba (tiene un mínimo); si $a < 0$, hacia abajo (tiene un máximo). Cuanto mayor es $|a|$, más cerrada.
- **Vértice**: en $x_V = -\dfrac{b}{2a}$, $y_V = f(x_V)$. El **eje de simetría** es la recta vertical $x = x_V$.
- **Cortes**: con el eje $Y$ en $(0, c)$; con el eje $X$, las soluciones de $ax^2 + bx + c = 0$ (dos, una o ninguna, según el discriminante).
- *Ejemplo:* $y = x^2 - 6x + 5$: $a = 1 > 0$ (mínimo); vértice en $x = 3$, $y = 9 - 18 + 5 = -4$, es decir $(3, -4)$; cortes con $X$ en $1$ y $5$
  (simétricos respecto de $x = 3$); corte con $Y$ en $(0, 5)$.

**Traslaciones**: $y = (x - h)^2 + k$ es la parábola $y = x^2$ desplazada $h$ unidades en horizontal (a la derecha si $h > 0$) y $k$ en vertical; su
vértice es $(h, k)$. Toda parábola se puede escribir como $y = a(x - h)^2 + k$ completando el cuadrado.

> [!formal] Con rigor: por qué el vértice está en $-\frac{b}{2a}$
> Completando el cuadrado, $ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 + c - \frac{b^2}{4a}$. El paréntesis al cuadrado es $\ge 0$ y vale $0$ solo en
> $x = -\frac{b}{2a}$. Si $a > 0$, $y \ge c - \frac{b^2}{4a}$ para todo $x$, con igualdad solo en ese punto: es el mínimo. Si $a < 0$ ocurre lo contrario y es el
> máximo. Además $f(x_V + t) = f(x_V - t)$ para todo $t$: la gráfica es simétrica respecto de $x = x_V$. $\blacksquare$

**Problemas de máximos y mínimos**: si una magnitud se expresa como una función cuadrática, su máximo o mínimo está en el vértice. *Ejemplo:*
con $20$ m de valla, un rectángulo de lado $x$ tiene el otro lado $10 - x$ y área $A = x(10 - x) = -x^2 + 10x$; el vértice está en $x = 5$: el área
máxima es $25$ m² (un cuadrado).

## 4. Proporcionalidad inversa: la hipérbola

Si $x \cdot y = k$, entonces $y = \dfrac{k}{x}$ ($x \neq 0$): **función de proporcionalidad inversa**. Su gráfica es una **hipérbola** con dos ramas, que se acercan
cada vez más a los ejes sin tocarlos: los ejes son sus **asíntotas**. *Ejemplo:* $y = \frac{12}{x}$ (el ancho de un rectángulo de área $12$ según su
largo). Si $k > 0$ las ramas están en los cuadrantes 1.º y 3.º; si $k < 0$, en el 2.º y el 4.º.

La hipérbola $y = \dfrac{k}{x - a} + b$ es la anterior trasladada: su asíntota vertical es $x = a$ y la horizontal, $y = b$.

## 5. Funciones definidas a trozos

Algunas funciones usan una fórmula distinta en cada intervalo: tarifas por tramos, impuestos por escalones, el valor absoluto
($|x| = x$ si $x \ge 0$ y $-x$ si $x < 0$). *Ejemplo:* una tarifa de móvil cuesta $10$ € hasta $5$ GB y $2$ € por cada GB extra:
$$
P(g) = \begin{cases} 10 & \text{si } 0 \le g \le 5 \\ 10 + 2(g - 5) & \text{si } g > 5 \end{cases}
$$
Para evaluarla, primero se decide en qué tramo está $x$. En los puntos de cambio de tramo hay que mirar si la función salta (si es
continua).

## 6. Errores típicos

- Calcular la pendiente con las restas en distinto orden arriba y abajo.
- Confundir la pendiente con la ordenada en el origen.
- Olvidar el signo menos en $-\frac{b}{2a}$, o calcular la $y$ del vértice sustituyendo mal.
- Desplazar la parábola en sentido contrario: $(x - 3)^2$ va a la **derecha**.
- Creer que la hipérbola corta a sus asíntotas o que $y = \frac{k}{x}$ existe en $x = 0$.
- Evaluar una función a trozos con la fórmula del tramo equivocado.

## 7. Resumen

- Recta $y = mx + n$: $m = \frac{\Delta y}{\Delta x}$ (pendiente), $n$ (ordenada en el origen); paralelas, misma pendiente.
- Parábola $y = ax^2 + bx + c$: abre según el signo de $a$; vértice $x = -\frac{b}{2a}$; eje de simetría; cortes.
- $y = (x - h)^2 + k$: traslación de $y = x^2$, vértice $(h, k)$.
- Máximos y mínimos en el vértice.
- Hipérbola $y = \frac{k}{x - a} + b$, asíntotas $x = a$, $y = b$.
- Funciones a trozos: elegir el tramo y vigilar los saltos.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué significan $m$ y $n$ en $y = mx + n$ y cómo se halla la recta por dos puntos.
2. Cómo se calcula el vértice de una parábola y por qué ahí está el máximo o el mínimo.
3. Cómo afecta el signo de $a$ a la parábola.
4. Cómo se lee una traslación $y = (x - h)^2 + k$.
5. Qué son las asíntotas de una hipérbola.

## Siguiente

el tema `mat-estadistica-descriptiva` y, más adelante, [[mat-funciones-elementales]] (más familias de funciones).
