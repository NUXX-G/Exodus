---
id: mat-combinatoria-probabilidad-basica
title: "Combinatoria y probabilidad básica: contar, azar y Bayes"
area: matematicas
trunk_level: 6
prerequisites: [mat-algebra-secundaria, mat-enteros-fracciones]
academic_sources:
  - "Grinstead, C. M.; Snell, J. L. Introduction to Probability, 2ª ed. American Mathematical Society, 1997, caps. 1 (probabilidad discreta), 3 (combinatoria), 4 (probabilidad condicionada), 6 (esperanza y varianza) y 8 (ley de los grandes números). Gratis en https://math.dartmouth.edu/~prob/prob/prob.pdf"
  - "Apuntes Marea Verde (LOMLOE). Matemáticas 4.º B ESO, cap. 15 (combinatoria) y cap. 16 (probabilidad); Matemáticas II, cap. 11 (probabilidad y combinatoria). https://www.apuntesmareaverde.org.es/grupos/mat/index.html"
  - "Freedman, D.; Pisani, R.; Purves, R. Statistics, 4ª ed. W. W. Norton, 2007."
  - "Charig, C. R. et al. British Medical Journal, 292, 1986 (datos de la paradoja de Simpson; ver nodo de funciones y estadística)."
hints:
  - "Concepto: contar bien es decidir si el orden importa y si se pueden repetir elementos. En probabilidad, casi todo problema se resuelve como casos favorables entre casos posibles (si son equiprobables), o con el complementario («al menos uno» = 1 menos «ninguno»), o descomponiendo en una población imaginaria de 10 000 personas (Bayes)."
  - "Herramienta: verifica cada recuento de dos formas: la fórmula y una enumeración con un bucle de Python (itertools.product, permutations, combinations) o una simulación Monte Carlo con random; math.comb(n, k) y math.factorial calculan combinaciones y factoriales exactos; fractions.Fraction da probabilidades exactas."
  - "Documentación oficial: docs.python.org/3/library/itertools.html, docs.python.org/3/library/math.html (comb, perm, factorial) y docs.python.org/3/library/fractions.html; Grinstead y Snell, capítulos sobre probabilidad discreta, combinatoria y probabilidad condicional."
exercises:
  - id: orden-en-fila
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿De cuántas maneras distintas pueden colocarse ${{n}}$ personas en una fila? Respuesta: un entero.
    variants:
      - values: {"n":8}
        answers: ["sha256:d564930d6ada83d82e71453747b561c60190dac7067408fe27c2ebd429264668","sha256:823f78592274427d4c07a97782fcdf1d1652066fb791ec73923cd586f8ebee1d","sha256:c7cbf4619dc401314d76e1b74a2a76ab3cda8dc7460d45a2bd08a2eb02807e93"]
      - values: {"n":11}
        answers: ["sha256:8b2631a6b87ddd07b556703faff011f823f9b096c97c817edc1c896c864cf2d1","sha256:a0ab2443fb6e94628633e9d6f7651aa7457af3db6a49991db679d603dd9db258","sha256:9c08e175cefc1ec9cd645331b1e55a183ad53cb0d0beaafc3d40325bb7c56243"]
      - values: {"n":12}
        answers: ["sha256:85f5aad00d486a1cf57348c8c7467b61d264ee7e3d168a7924abc896afdb6162","sha256:15b0493ef60e5dcaa08d8ded21d7c9d4292adc395df8a7ed8ffc247b886aa93a","sha256:85ad9d42c5952ba2e0a8490d31a49fb121de7b45d6cb63c148c5121cd3935c68"]
      - values: {"n":9}
        answers: ["sha256:a1a66644e7d2e53b16f6391ca32210c461216986713a6ff373b8acd9fd4021bd","sha256:47bd9984b50f218faba4b9f82b1782d2dc12bc77eb3042e6d16917f63ce6e36c","sha256:7e94442dd2f5d04b6e201a38e658e24222b0d9bbb4f1c675172e49768cbc710a"]
      - values: {"n":5}
        answers: ["sha256:ca43898558794594cee442cbf1a77ff993a8cb22dcda41ae4264fc8c5eb43c08","sha256:53fee75a09221e97a0279ab39c865162c7829610515c238e8758a3619cb3c1a0","sha256:e4b0cf203c3e5e475cbcce327b569b1ebe39bc909c190d11592a47fd2d992a86"]
      - values: {"n":10}
        answers: ["sha256:934589b36d05f190ac880b1fbd6d2cebd580c3dede8205f9c1eb172ef76b630c","sha256:cccda0f5663c2865144aa50f48ef9311d624ab04e9a481fdca3d28ca62693189","sha256:a90b534d753986394df10da863c422945c31c2fc248358cee16da8bea4a1921f"]
  - id: combinaciones
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿De cuántas formas se pueden elegir ${{k}}$ personas de un grupo de ${{n}}$, sin importar el orden? Respuesta: un entero.
    variants:
      - values: {"n":10,"k":3}
        answers: ["sha256:f0b8ef3ffebf8a26bdc0bc20ecd5d6a271a1ec95e47605ba70dc0bbacf8ca63b","sha256:458a4b8c7a001a7c7ae834dab09111e0dfd4084cab04eb8614aba81188bcb7fc","sha256:5acdb643c2747e54197b320356f45219e14f5adeb6c81a6c3edabccebdada636"]
      - values: {"n":12,"k":4}
        answers: ["sha256:91f03ad7f7713de481e6e27be73a5150c5715a6c8872ce6620dbd6b5683d2496","sha256:04f110ecfe97310fd4ea339a612e3d2a49fdc89f10d13e4c5d04ab6c677a902c","sha256:3633d3ccbccf074c61668dda45546d0af20c452d2bba936b4c0196bc5bd4358f"]
      - values: {"n":9,"k":5}
        answers: ["sha256:41b6c101c6d8a9dae69b39acb0941b5f45d695b3714186fe55a128b386fa097f","sha256:2636ca1852fb361b59d77e8f75042de70a470c3d747637afdac29fcef54568a9","sha256:3f3a5b5358945267942e22c4c913b2fa5d45f53c2b1dd9075dfc22e229bb0e7e"]
      - values: {"n":15,"k":2}
        answers: ["sha256:a49436978fe8a39e251281e3b1f4576478822db62803eb118932598d2c271b9d","sha256:be39b65f6256b6866736a77ec6be03050d315f62a2e6bdba0e0857c537189924","sha256:66f69ee84d5d34c56b053eaa7d3e5b537f8d1758e0c1ec7a8290c0a0b82fdb6a"]
      - values: {"n":11,"k":6}
        answers: ["sha256:145bc7fa783da3df331dd63b272cacbfe0290a8a5a49ebdae2b6c61971fe27a6","sha256:0501c904d5f061de5f0b6ea67b592a067ae89d2d50d31a73b94a77c3483939bd","sha256:de55d660fb1bfb26d3217306c8a6dc09994fe3d050176acaac7ec1983385f544"]
      - values: {"n":13,"k":4}
        answers: ["sha256:4d2ec22fb6d80b6b082a7a27a78a89a4aff1da99fc235dbf443f9e4460adeb67","sha256:8dc38e42a103e98ea94d29ba1d32edbaff6adac972740775b2058e6d1634d166","sha256:593190432503549f6cf588728d30c8e66981f37fbbaf617bdd8954b72e4a7c6e"]
  - id: dos-dados
    tier: 1
    prompt: |
      Se lanzan dos dados equilibrados. ¿Cuál es la probabilidad de que sumen ${{s}}$? Respuesta: fracción irreducible «a/b».
    variants:
      - values: {"s":7}
        answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
      - values: {"s":8}
        answers: ["sha256:c425d5c10241852f11637a5fbe423beeed9fb9c95befb74ff5d57f66ff8501ee"]
      - values: {"s":5}
        answers: ["sha256:7dbf57a3ed617234cd386b0f2042474ab8a0f152f17305ad0d1f8e62412a2629"]
      - values: {"s":10}
        answers: ["sha256:47ba35745effadff9e578cbc46df1652bbf082998fb90393de64b5c1f5bd1fa6"]
      - values: {"s":3}
        answers: ["sha256:142bd7f8865666d65368717226453ee888b41b2a828d9dfb89dc9b01b0c32887"]
      - values: {"s":6}
        answers: ["sha256:c425d5c10241852f11637a5fbe423beeed9fb9c95befb74ff5d57f66ff8501ee"]
  - id: contrasenas
    tier: 2
    prompt: |
      ¿Cuántas contraseñas de exactamente ${{L}}$ caracteres se pueden formar con {{desc}} (${{S}}$ símbolos), pudiendo
      repetirlos? Respuesta: un entero (todas las cifras).
    variants:
      - values: {"S":62,"L":8,"desc":"las $26$ minúsculas, las $26$ mayúsculas y las $10$ cifras"}
        answers: ["sha256:588722a648f91b2eda32506d3f78eda6527697a50db9035f1a0e7ad7a33cdeb5"]
      - values: {"S":26,"L":6,"desc":"las $26$ letras minúsculas"}
        answers: ["sha256:0f43d000d9808d801f33662c9ed2829baa551693fbc3d4d8f9df5237a0a2245a"]
      - values: {"S":36,"L":5,"desc":"las $26$ minúsculas y las $10$ cifras"}
        answers: ["sha256:31af14ba5df5f6a94d5f6cf25cf046ef274b9844591e1ef51313e534ea24eea8"]
      - values: {"S":10,"L":9,"desc":"las $10$ cifras"}
        answers: ["sha256:52a5d4a071d82caea87329868d22f6b8390ac3d227c6fde0d4525e69510ec479"]
      - values: {"S":62,"L":4,"desc":"las $26$ minúsculas, las $26$ mayúsculas y las $10$ cifras"}
        answers: ["sha256:d0a68aa8539420f42b49421c99124ff5088582e889f5aeaacc8dd75863572eca"]
      - values: {"S":52,"L":5,"desc":"las $26$ minúsculas y las $26$ mayúsculas"}
        answers: ["sha256:652e17b5a924f24245c8c6762616a218b64a4943ea5bec06f11a714a17e08e70"]
  - id: pin-sin-repetir
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Cuántos códigos de ${{k}}$ {{que}} tienen **todos sus símbolos distintos** (el orden importa)? Respuesta: un entero.
    variants:
      - values: {"n":10,"k":5,"que":"cifras (de $0$ a $9$)"}
        answers: ["sha256:aefaeba89de4e64a329c51d76fd8be7c9de31b79e67b1b2c290e0becfe8104cf","sha256:9a9ca0741a4b1ab884a487963b2317755eae3053a3d2ac468a3c896d5cab4cd6","sha256:a36337664c9507071d3159cfc7cf3b8a462c5908aa1b3e30cb71f298d653b19a"]
      - values: {"n":6,"k":4,"que":"símbolos (de un teclado de $6$)"}
        answers: ["sha256:f1c2cea6dfbd46f9a6e4118f5484c30dcc2b81ad0dcaee4c149feedd894954c3","sha256:95482c37dc55021bd59b428f7a0efe16dcb9d064af2d0c7d0d154ac069ef6ac2","sha256:cca397f80c7daffc0fe5f880276808544d9f607f9a14ba5aaa835447fb885ba6"]
      - values: {"n":10,"k":6,"que":"cifras (de $0$ a $9$)"}
        answers: ["sha256:c8ba1e5e1cdf90fcc426004d363189596b1c791339aa42d948300ad2664b61c2","sha256:7fe40e5da74679a7ef2e11762d6eeb03ebb7309d1305572efe5bc1a1feeba7b3","sha256:93bd11efedd314850caea479cf8d35beacfa03f571367af771cf205ba5a57b09"]
      - values: {"n":26,"k":3,"que":"letras (de un alfabeto de $26$)"}
        answers: ["sha256:88385726404b36bd3dae4d3424b3dbfb274117d2c9fab16ab91595c4c83baf8a","sha256:1a1c341ccb09dd1c5d3668fbb3698551313a1fdb12f4876ac977eb4d79b5b097","sha256:d1b8ad7c6248f414772fa751ef21af1f9b59bbed1e9ec6b1a901aee16d852e7b"]
      - values: {"n":8,"k":4,"que":"símbolos (de un teclado de $8$)"}
        answers: ["sha256:68cb5b9daeeacf3b8dd886ed4965e1cad19d1c0e6eb1c0f8a4afcf72382b3a2e","sha256:7de0162cbb03b7d21b91f52e786b88991fcf3cab9f1b433ed72c16c67e2e4490","sha256:db8a172454807348099a161b895195359e5517c7986d2641d53e9b595597647f"]
      - values: {"n":9,"k":5,"que":"símbolos (de un teclado de $9$)"}
        answers: ["sha256:4fcafc57f888e09727a6276365c13ef7fa0db86b73e9b5e4b63da58358545404","sha256:ff7bbc5c560696404e94dff23f57526318867b56d5b173651fb8c6844a119741","sha256:d3e5a3a09f02222176fe1885f34f7f9a1fa0ad67055d1a99c5dffd7413353631"]
  - id: anagramas
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Cuántas ordenaciones distintas (anagramas, tengan sentido o no) se pueden formar con todas las letras de «{{w}}»?
      Respuesta: un entero.
    variants:
      - values: {"w":"MISSISSIPPI"}
        answers: ["sha256:5b2c6a83d2e9a778fbe48f00f14fcc73daf543c0bb38f0717931cc74fe168cc6","sha256:a18db31c6488799c3e9722f0903936bff8696f57385dedb79cdb82a58dc1fa9c","sha256:6f9203c8c130099edcb615c45e30afd51a8903d5f6ae4e6e3e981e73be4c0e22"]
      - values: {"w":"BANANA"}
        answers: ["sha256:cf4c92c9bcdfaf8354db48d112b3c647da1740cf265d4295479123f5a830386a","sha256:6e528e68a9bdab2553dd8d035e480b568b22e3c0078988bc8108c7ece91bd31e","sha256:0ef12afebcbeb6e8154fde72b96a85b43769b2c1e76c35a1c249d1b4e9d5e15a"]
      - values: {"w":"ESTADISTICA"}
        answers: ["sha256:e6d5d7c53f5865a90c47077a90a44eb93371ed9925122c2f7ff9b1645f0dc3d1","sha256:5bafef364dc828c10365a3b4e48d3c9bfe0c854a18af5a80b5e9f079132aa23b","sha256:4baeefc896258aa998a1047ab0eef24dab52fc039cca02e7ffb905ae1704cbd8"]
      - values: {"w":"CARRETERA"}
        answers: ["sha256:5dad2f9e1c3165a5b06caf765b39bfc0ab67bac02effce88fb0e6efad876fbac","sha256:a48fec7f8bf29915d3a5076c365564d29f6bc0039d3439fa69bd87fc9f074ad2","sha256:4b10f58aa4f0d5f5251e1e7f97e77faf2435c970936c01260f15377eae2a1768"]
      - values: {"w":"PAPAGAYO"}
        answers: ["sha256:ac1a3951432beb08aa2911b3d9759c32416cf686677c9687449c3eb33314f182","sha256:b72d47c04113a9a8dd925a53da0c6462520111e75e4edce5e3cd2c1565f1de32","sha256:2f7f9738cdeb7b6e56111eaa198aa757f5d7db0208101107d4c6c0fe6b0b7361"]
      - values: {"w":"MATEMATICAS"}
        answers: ["sha256:d96bc9cb2859b3d1bdb5901e619213f51e7fd1dea14c0f321f0ef1ffb776d0a6","sha256:f7d953e63bb6b411dffb0bd15914ce7d5cab1b139816ba9c26aacd12b8058c4a","sha256:2396e9c43b2cf61d7509d7d11d1435d24b0575c4a9cd0625afa06c26d3130073"]
  - id: cuatro-ases
    tier: 2
    prompt: |
      Se reparten $5$ cartas de una baraja francesa de $52$. ¿Cuál es la probabilidad de recibir los **cuatro ases**? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:7d9afa61f0902caf2dabda6e939662dd1c1cd15d0f7fcdf25a3f824cd153bbb8"]
  - id: al-menos-un-seis
    tier: 2
    prompt: |
      Se lanza ${{n}}$ veces un dado equilibrado de ${{caras}}$ caras (numeradas del $1$ al ${{caras}}$). ¿Cuál es la probabilidad de
      obtener **al menos una vez** el ${{caras}}$? Respuesta: fracción irreducible «a/b».
    variants:
      - values: {"n":4,"caras":6}
        answers: ["sha256:c46ad4a38aaf421e3fed6c11237cb2543e73df9b45d63eaff27c2b21c961d992"]
      - values: {"n":3,"caras":6}
        answers: ["sha256:b2cacba082d2e4157dfa6623a9126ce417639dd7793002585fbf37bfdb02b9c3"]
      - values: {"n":5,"caras":6}
        answers: ["sha256:5458b44a7c00398a46c0309ee8258725bb7f4332f10bbb79d2ff147f51d7a568"]
      - values: {"n":2,"caras":4}
        answers: ["sha256:248fbc03282617ae5b1700d532ce64429efb261fd51b29c9d0f3dc483157d8cb"]
      - values: {"n":6,"caras":6}
        answers: ["sha256:45173a28b3f44a36614de10d3d6e993c3c586fe1dec091595aac352ceabcab37"]
      - values: {"n":3,"caras":8}
        answers: ["sha256:764a27f864327b88ad24707d841f00325e85652fef1d9ff9482dbc01806b6909"]
  - id: bayes-test-medico
    tier: 2
    prompt: |
      Una enfermedad afecta al ${{p}}\,\%$ de la población. Un test da positivo en el ${{s}}\,\%$ de los enfermos (sensibilidad) y
      negativo en el ${{e}}\,\%$ de los sanos (especificidad). Si una persona elegida al azar da **positivo**, ¿cuál es la
      probabilidad de que esté realmente enferma? Respuesta: fracción irreducible «a/b».
    variants:
      - values: {"p":"1","s":99,"e":95}
        answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
      - values: {"p":"2","s":90,"e":95}
        answers: ["sha256:b80344b9351288030807ba4fa97f954d00c7d439e4c4e366faae8a4c9b31748c"]
      - values: {"p":"0{,}5","s":98,"e":99}
        answers: ["sha256:f08a93f8af07e27e7d58cfc1624d7acf0bba78bc77256500df848e6cc7c990c9"]
      - values: {"p":"5","s":80,"e":90}
        answers: ["sha256:78f3b00a60974691ed9853414dfddd6663a7b63e6397d8ce94cba3e2033fc143"]
      - values: {"p":"10","s":95,"e":98}
        answers: ["sha256:9ab816c85487ad68d6375607918ef12f84634dcc54c371ed8f86d1e69f94d87c"]
      - values: {"p":"0{,}2","s":99,"e":99}
        answers: ["sha256:c279fff483697508a43c7f3cf548a8453c0081e92471b534ddffb4e266f4f0d2"]
  - id: cumpleanos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Suponiendo $365$ días equiprobables, ¿cuál es el menor número de personas para que sea {{txt}} que al menos dos cumplan
      años el mismo día? Respuesta: un entero.
    variants:
      - values: {"txt":"más probable que no"}
        answers: ["sha256:fb3d4a47fe97c2da5634109499efe6b3aa75f8ea9291dc96afe8b3d86c1450fb","sha256:e7cd0709580ff8e913a4369ac5cc25981303f5ebff219079471f73455bb986d9","sha256:98780964013ca17a1a12a57f2651edd4e73d07cd0af08d3acd03d87336bdd457"]
      - values: {"txt":"al menos un $70\\,\\%$ de probable"}
        answers: ["sha256:5edac7ad0465a19eef717e25b0cc6a05a0032822ac108eccdef90865c5d21054","sha256:a4ce10d77ad3eac986f8a7f9f0a51841a07be8be1756f68f25b800cb749737a0","sha256:73efd454f2c42a7d2522a0f348d30149f02dc69cb588585fe7f7c6de0cbbe49c"]
      - values: {"txt":"al menos un $90\\,\\%$ de probable"}
        answers: ["sha256:1d8d3d37a2f3c0feaa42145d252ba9eda3bc919ce50898a53fea337e95b02f0e","sha256:481cc29f111118f54ac4a54dced7083dd4b0ee0d3cacbe2c7eaefd31afdaf604","sha256:eddec5314ea66d5a9e5e54e5d6035f19bbb29a601c6a6a21c27110d3913b800c"]
      - values: {"txt":"al menos un $99\\,\\%$ de probable"}
        answers: ["sha256:83e02ec424f6fdda2e36f986009309deb8b97c142f69211b52318ccdcff427c9","sha256:3a2451bb47c28f97f6a27a9af72e1fc487ba603c2b799c44c180b0699607311f","sha256:de0a748128118d5db27ec2af33a2daaf43b872026cdfa376c42cafb075751579"]
      - values: {"txt":"al menos un $25\\,\\%$ de probable"}
        answers: ["sha256:bc0f8a3d90364b1c1343a5fb3d951d0bfc7fc120ed16340e9a6a24ccfe45a02e","sha256:89cf58f98e6a3d9287dbdb7c4696a1d33a805d64cb536a72578b5949c0ecda5f","sha256:133a5327e3d19ec18d533adee211ec66a6142afc49064eab0f7cc2118dc57c26"]
      - values: {"txt":"al menos un $80\\,\\%$ de probable"}
        answers: ["sha256:ce8ebacc2fca3751f48228a69367df1001fb3ffd2676e98a2a670abc0526cc09","sha256:7226ad7d1342d75c74a7d0fb36cbd52f890fc1198d7e66dde45f87747231df64","sha256:a00ddd4a6ebc11f2acb4e92937a2ad56a9cd1061cae046d7c60b1144df7f4665"]
  - id: monty-hall-100
    tier: 3
    prompt: |
      Hay ${{N}}$ puertas y un premio tras una de ellas. Eliges una; el presentador, que sabe dónde está el premio, abre otras
      ${{abre}}$ **sin premio** y te ofrece cambiar a la única otra puerta que queda cerrada. ¿Cuál es la probabilidad de ganar **si
      cambias**? Respuesta: fracción irreducible «a/b».
    variants:
      - values: {"N":100,"abre":98}
        answers: ["sha256:adda290c53eda62a0d8f44a131302a84651364227fcc02f7ed70159e8fc5f6ba"]
      - values: {"N":3,"abre":1}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
      - values: {"N":10,"abre":8}
        answers: ["sha256:e1df727a224cdcb375a5f0b80d0b88416466bcb18817aa28ad784c60114823a1"]
      - values: {"N":50,"abre":48}
        answers: ["sha256:15159cba30311b438472946c8b8b5abab1fad8d2adc72b1dad6dd320e288a63c"]
      - values: {"N":20,"abre":18}
        answers: ["sha256:f6c8736635e02e4e59b5400dc18b9fc5a3da6e56aeda4899c79b8bc03779c515"]
      - values: {"N":1000,"abre":998}
        answers: ["sha256:e46a127d13a719be75945988b380b6162ceb2fb2870d0f31f07e9bee808445d5"]
  - id: ruleta
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una ruleta tiene ${{casillas}}$ casillas equiprobables (del $0$ al {{max}}). Una apuesta «a pleno» a un número paga $35$ euros
      por cada euro apostado (y se pierde la apuesta si no sale). ¿Cuántos euros se pierden **de media** por cada ${{M}}$ euros
      apostados? Respuesta: con dos decimales.
    variants:
      - values: {"M":1000,"casillas":37,"max":"36"}
        answers: ["sha256:102d65e46422749f145a97a5ae82bb20821b5df5ea46f2a6f02baf36904c1933","sha256:51944e02eb636d98a62826191ec9a41417c231bbcd42ac22e4212b7c2fd79997","sha256:23da6e576a4e66cd08f472437cb26783179101fc0e7dd64496988f774374c3dc"]
      - values: {"M":500,"casillas":37,"max":"36"}
        answers: ["sha256:e3996c54d87a0bd491805b6de2ffa3a8068843127d528b86a3f1330f5aa515d5","sha256:b1d2a257270c05fb1ed23a3af5665ad8f9aaae3a1d1e56951e05f2d8b44c641a","sha256:bd8dca790cbed887c4b0fe79df38d603d8feed8383ea359c0625f2df2ad35c4d"]
      - values: {"M":3000,"casillas":37,"max":"36"}
        answers: ["sha256:05f02950fda6828cc8f1ecdb179e69c9dbf3f4fea6f41f3062175619a7a0428d","sha256:560f506492a3d57ca74ce20e7288e65cb21712b54179f6026da4fffa29d2960e","sha256:cf0b54f26bf80111c792a4d6129e8892331cb7bf0e61b36ed73592bf3eab67a7"]
      - values: {"M":1000,"casillas":38,"max":"36, más el 0 y el 00"}
        answers: ["sha256:06053c8c8371241e17929bb44963f2570ec6134f753f94062a7e784730b7225e","sha256:03d550db787ae3b133073fe2ffb6192066b892e39c1f38ed9349b865966953f5","sha256:30b43727d36f040a341d8fa77bb4106adfa8f878b2d9caa57c0a3d922ef40c67"]
      - values: {"M":2000,"casillas":37,"max":"36"}
        answers: ["sha256:2c0f1680539b59f7e23672d86fc2c91476d38031af135adaeb7937a9f530317e","sha256:4785f3d8f8d01411be95618d7a0bd8d72bd55d81ce56ea21692cd34897a8a640","sha256:1b5543340dc0370ea5e490a5be70f428bd1d9522c2b3330420b8b66f9fbd42d5"]
      - values: {"M":7600,"casillas":38,"max":"36, más el 0 y el 00"}
        answers: ["sha256:d1097da8c845034e395e403f4dc8c1a020043af3a160a578e49002ab4f17e62b","sha256:22142ecdcff0cdf64efb068fc0ba20157825dcb1310f2b530c5a774e7fa42280","sha256:8ae55c6d3ab053aa54160096104f4d3098ca61629790f0621cb1ea7e8df42647"]
  - id: diez-monedas
    tier: 3
    prompt: |
      Se lanzan ${{n}}$ monedas equilibradas. ¿Cuál es la probabilidad de obtener **exactamente ${{k}}$ caras**? Respuesta: fracción
      irreducible «a/b».
    variants:
      - values: {"n":10,"k":5}
        answers: ["sha256:23ba51225d75fc7b486cb8c5fe150be7996c5e54a49ad75d8026912b5dc10e06"]
      - values: {"n":8,"k":4}
        answers: ["sha256:45340c97143556c0a7a3209dc1fa454617e582f90ddd95c22e6533068acbc9d0"]
      - values: {"n":6,"k":3}
        answers: ["sha256:f331957a62292c73355411dfc69ba9518d25d6b986d2013b277dc725a0ddf748"]
      - values: {"n":12,"k":6}
        answers: ["sha256:d9715c268383fb8015c8ed8262969a2c47b10f3498c1d2cf05ac96199689e157"]
      - values: {"n":10,"k":3}
        answers: ["sha256:7faada0333b2a459d9fb20307610041b6114af4f07fa1992998f64924d7cc4a4"]
      - values: {"n":9,"k":2}
        answers: ["sha256:4907d67ef52bd47fd7a24cb85d5c5d28c467f86266c538ff81bd1fb40f897421"]
  - id: inclusion-exclusion
    tier: 3
    type: numero
    sig: 8
    prompt: |
      ¿Cuántos números enteros de $1$ a ${{N}}$ son divisibles por ${{a}}$, por ${{b}}$ **o** por ${{c}}$? Respuesta: un entero.
    variants:
      - values: {"N":1000,"a":2,"b":3,"c":5}
        answers: ["sha256:4fafe0c58959e0173b95f358d759d2291216ce07e30a3dd5b3e4a2198ed6788b","sha256:9c0b8813e9eef097fb296e5460f023f81f2ab05bcd59dd28f31b253029e0619f","sha256:7cdc24874dfa74c1ad89d1a754304e0d38e6357256d2b1256c186782c9836fc5"]
      - values: {"N":500,"a":2,"b":3,"c":7}
        answers: ["sha256:eaeb435ffbd83742a4334d87ad626882b0c45b2a79822c1107681f1586644345","sha256:796170e92cac7118d2a1017ad3fe5a621dc8c572c182cfad6851b999e29a4305","sha256:ca6b04437073daa92cc4d37be5bb2b3ed7075f4be45ccfa9b59aa67aeabe5d02"]
      - values: {"N":1000,"a":3,"b":5,"c":7}
        answers: ["sha256:194ba9a25de8d14c7bc875222969d803a9fd228228e4fa2077cd3390ed376d91","sha256:3c97a3752b73ae4aeda0b75904df3d53e7814fd137f9f9acf0f92d14babac299","sha256:b780a147cb7d97acc4039b044010facf1a04cf30005c48c3a530ff29090e7f95"]
      - values: {"N":600,"a":4,"b":6,"c":9}
        answers: ["sha256:60ebd887bfdcf99c8d669927f731f06f9ca197b5b7a927c162d15117631d7029","sha256:2b68bb7bd7c579eae3be0e61794926735a2e0fe09801f145c497560d8ea4447d","sha256:7688bc8d10bbfe6648ed869fca6d16b7428807bb97e0c4fb61c967b669c8d073"]
      - values: {"N":300,"a":2,"b":5,"c":7}
        answers: ["sha256:d1dedf6011eb631817656b8963973eb2493a548f64557dbb5697c652a8fb0fbc","sha256:d63bfb2e3669ad02f2c57df18621ed277b60664c032ae8b988e17507c922a1e7","sha256:5e50b47bef597a289d256b2c678c93d050772aa4318489d01a456ea559d8658a"]
      - values: {"N":2000,"a":3,"b":4,"c":5}
        answers: ["sha256:44b71fb20013ae0bb10df93aeac85e1990e917e034cfed4de9afe509c39ff668","sha256:efe3974c06fa03abfd626a933c90e4856230f56e63252dde305b84b2d3b46fc5","sha256:3bbde22b463db8eb8830f16a6211ffefc761a9799e37939877ef0a1f76f68074"]
  - id: palomar
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos números hay que elegir, como mínimo, del conjunto $\{1, 2, \ldots, {{n}}\}$ para **garantizar** que entre ellos hay
      dos que suman ${{s}}$? Respuesta: un entero.
    variants:
      - values: {"n":20,"s":21}
        answers: ["sha256:456af811ddc2d49025cfdb51dd7dad300c86122751ddb22a8f16454ff57223e1","sha256:abad47cb7ef15f6da45b5a30e9c4f114008f2d81e54ec1f372a4e67fdb4f72fe","sha256:89b9293d67089433b83988e40bb1be6c141623e091ad11bcab70cd383049749f"]
      - values: {"n":10,"s":11}
        answers: ["sha256:b5bcd9e8d1793ffabc7a7f4a592f0c22976f5a66e0a55a60a3426a2de7c2ab89","sha256:2da2e21bf9e5597f52c64b21c2c64afa668125a04feef07c5e46766727250238","sha256:288fea2c209ca28b5b9b9deca77fc589d8c51e6358bf9ada42234e242f2e05d3"]
      - values: {"n":30,"s":31}
        answers: ["sha256:9c213964b4d426d842d2ab4cd121f579f7f426316f2a40bb8102e99a5801a438","sha256:9b230bfc96858e90ea69c8600195f3cc374b4ad1e5f1b9ace566c21367381700","sha256:1a800798ab9aca491e193dc93c9b904d43a443b167f527f9962fa8269559102e"]
      - values: {"n":16,"s":17}
        answers: ["sha256:363adafe47e8d53765af61b5d721597713d720d07d8717b3668bc66282e6a604","sha256:ae9ca564ae3e72bd37552153ba6d7899da474d91f4f2d79906053b0b7fc3f6f0","sha256:10b7b45ed296437263fd0069b0760e4c74354d08eb842ecdadde9952b1f9e821"]
      - values: {"n":40,"s":41}
        answers: ["sha256:23f16193998b43df7c0af5df2b5b0fb34143bb0c54d54beb2fb3c7bb109f1c95","sha256:cdfced1eef3e8b70ca5698886f17e73ce4747906749dafdd662cf54a83fbbf59","sha256:cc7e0a469eab5e2d4762d8c627a151f9cf1ade8391a35d61625b4935ff349c04"]
      - values: {"n":24,"s":25}
        answers: ["sha256:1cd41ff07f88d8cec4de1251fce2e3dad3ea8ee3f5e4adc814fd7de930e9a884","sha256:c638f144fa3b82ae8bbe1c42e37be17eb08b1e2f0aa3874a79b8eef63bf140f6","sha256:eebb6d34b09ba090e23e1c83c550258c62f98d1c9005d86c18b899ce0ed6d836"]
  - id: estrellas-y-barras
    tier: 3
    type: numero
    sig: 8
    prompt: |
      ¿Cuántas soluciones en enteros **no negativos** tiene ${{vars}} = {{n}}$? Respuesta: un entero.
    variants:
      - values: {"n":10,"r":4,"vars":"x + y + z + w"}
        answers: ["sha256:cf38e89e12ae16a2d02d49b15b6ea88d7ece0fd7f94dc614393de67f72323d3d","sha256:86501100bec6d4830e473dcf8617746482ecfacf20d6198f9c274f93d0dc3125","sha256:0289b778f122bc512398314eebf8662a5a00daf78dfd2c2813c54e63af54d343"]
      - values: {"n":8,"r":3,"vars":"x + y + z"}
        answers: ["sha256:63f87bc7f5e125e40d90dd07f00feacb2a89c2ed8825b98b82d1f566dfdb2d8e","sha256:dcdf9c45d4c47e369f01741584fa6035b6f2d81c26421b1d14bbb31c7e1f617a","sha256:edde72d76cbb83cfff385dfc1cf20cb259ed9562cfc6616f3c36a646d2531372"]
      - values: {"n":12,"r":3,"vars":"x + y + z"}
        answers: ["sha256:716ab6f1535916328ce18635c4f45d0df46eb09c24fcda639fefbf34d0804a2d","sha256:263da9fcb44bbe42285d188e165da3e3db63a0297b2c59c213d782b91a6bc861","sha256:c7353f07d74306b3b51329aca3fecb5c87629adf76cdfc0e92048878ebc10998"]
      - values: {"n":6,"r":4,"vars":"x + y + z + w"}
        answers: ["sha256:8f2ee12835cf72e70dc51dc7bb2c63d76272ef1c0a8999427a87a2ac709f1429","sha256:70cf6015857c0274497aaec9710b9e1c0ca05571b5482b3a989ae8952ef85e7f","sha256:64b1f3a94c080b514a636b35435a111f05722d563d905ff3f88fccebf8aff235"]
      - values: {"n":15,"r":2,"vars":"x + y"}
        answers: ["sha256:aafeb323ecf87e026adb44d0d941c162f2fb7760414509f7bfc35d73fe1fc4f2","sha256:0606653092271f7a5ef4a0a2005b74fee3f167c1976f5d83bd5608239c61a4f5","sha256:715cb21e814432a39f410b2de63772108d22c741f6b1a073af6199272d3101ef"]
      - values: {"n":7,"r":5,"vars":"x + y + z + w + v"}
        answers: ["sha256:87647abf46cafb3ffac361a0a32688764fd71e8a90138fbf3653aa6561dfa932","sha256:ccea6cb5a5afdae568c366cf8fc5b482145b16d57bd01b078f4392089f021b11","sha256:35d23ebb690199a6d132c73b0951df4cc4cd98e013059ddef23fe81eea50278d"]
  - id: r-orden-importa
    tier: 1
    type: opcion
    review: true
    prompt: |
      En una carrera de $12$ corredores se reparten oro, plata y bronce. ¿Qué tipo de recuento da el número de podios
      posibles?
    options:
      - |
        Combinaciones: el orden no importa
      - |
        Permutaciones con repetición
      - |
        Variaciones sin repetición: el orden importa y no se repite
      - |
        Variaciones con repetición
    answers: ["sha256:9a3b550d436bc4484258c14709cbf0c95bfd096e977e7751f1746cd92e5b6d93"]
  - id: r-contrario
    tier: 1
    review: true
    prompt: |
      Se lanzan $3$ monedas. ¿Cuál es la probabilidad de obtener **al menos una cara**? Respuesta «a/b».
    answers: ["sha256:fc5755dd88ccc67dae22b275accd73534cff79d13189ef7c90da6db72f075178"]
  - id: r-sin-memoria
    tier: 1
    type: opcion
    review: true
    prompt: |
      Una moneda equilibrada ha salido cara $7$ veces seguidas. ¿Qué probabilidad hay de que la siguiente sea cruz?
    options:
      - |
        $\frac{1}{2}$: la moneda no tiene memoria
      - |
        Más de $\frac12$: «toca» cruz
      - |
        Menos de $\frac12$: está en racha
      - |
        Depende de la hora
    answers: ["sha256:84871fb4aa5d3792aad67624606881dbbd900e248e429efd6a206f9eccc97b80"]
  - id: r-condicionada-inversa
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué relación hay entre $P(A\mid B)$ y $P(B\mid A)$?
    options:
      - |
        Son siempre iguales
      - |
        $P(A\mid B) = 1 - P(B\mid A)$
      - |
        $P(A\mid B) = P(A)P(B)$
      - |
        En general son distintas; se relacionan con el teorema de Bayes
    answers: ["sha256:918e734501908a30f90e229ff55e1bfddd634142048f214e7af5f4cff248615f"]
  - id: r-pascal
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      En el triángulo de Pascal, $\binom{6}{2} = 15$ y $\binom{6}{3} = 20$. ¿Cuánto vale $\binom{7}{3}$?
    answers: ["sha256:02840994a4f7d616d83fc3d74218efec6f6513291993d8a1f86ad1bfe200760c","sha256:843ee6ba1c07658fd09fd8a923a855a7a1cd179f18204cb4229430ec7a1f3c35","sha256:9557a6e7efe9dc314e083437098bfe5e5ab96bbcf46fe47eeb8299e6fe415b62"]
  - id: r-esperanza
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la esperanza del resultado de lanzar un dado equilibrado de seis caras?
    answers: ["sha256:ae1566e571d3c79bf3c6c6c41a4ac60c844498845c7961844608efbc83f2c95e","sha256:18f54cc015d88a63fe355c003f282764169bfbd61208a3627d39d92ad6364097","sha256:406dbcdf2bad169031bb05747ee8659e70b1529345a2d5e7960f398053f5b193"]
---

# Combinatoria y probabilidad básica: contar, azar y Bayes

Casi todo lo que no se puede predecir con certeza se maneja con probabilidad: el tiempo, un diagnóstico médico, el riesgo de un seguro, la seguridad de una contraseña, un algoritmo
aleatorio, un modelo de inteligencia artificial. Y la probabilidad empieza **contando**: ¿cuántos casos hay? Este nodo enseña las dos cosas, y sobre todo **a no dejarse engañar** por la intuición,
que en probabilidad falla con frecuencia.

## Objetivos

Al terminar sabrás:

1. Contar con los principios de la suma y del producto, permutaciones, variaciones y combinaciones.
2. Usar el triángulo de Pascal, el binomio de Newton, el principio del palomar y la inclusión-exclusión.
3. Calcular probabilidades con la regla de Laplace, el suceso complementario y las reglas básicas de Kolmogorov.
4. Usar probabilidad condicionada, independencia, probabilidad total y el **teorema de Bayes**.
5. Calcular esperanzas y entender la distribución binomial y la ley de los grandes números.
6. Reconocer falacias típicas: el jugador, la tasa base, la coincidencia sorprendente.

> [!question] Test de entrada
> 1. ¿Cuántos resultados posibles hay al lanzar un dado y una moneda? 2. ¿Cuál es la probabilidad de sacar un número par en un dado? 3. Si lanzas una moneda y sale cara cinco veces seguidas, ¿es más probable cruz en el sexto?
>
> Respuestas: $12$; $\frac12$; **no**: cada lanzamiento es independiente (sigue siendo $\frac12$).

## 1. Para qué sirve

- **Seguridad**: cuántas contraseñas o claves posibles hay decide cuánto tarda en romperse una (por fuerza bruta).
- **Medicina**: interpretar un test positivo (¿cuántos «positivos» están realmente enfermos?).
- **Juegos y seguros**: calcular la esperanza de ganar o pagar.
- **Informática**: algoritmos aleatorios, colisiones (dos datos distintos que producen la misma «huella»), simulaciones.
- **Vida diaria**: no caer en la falacia del jugador ni confundir coincidencia con causa.

## 2. Contar: los principios básicos

> [!practico]
> Tienes $3$ camisetas y $2$ pantalones: ¿cuántos conjuntos distintos? Para cada camiseta hay $2$ pantalones: $3 \cdot 2 = 6$.
> Contar bien es sobre todo hacerse dos preguntas: **¿importa el orden?** (no es lo mismo el podio oro-plata-bronce que «los
> tres primeros») y **¿se pueden repetir elementos?** (en un PIN sí; en un podio, no). Con esas dos respuestas se elige la
> fórmula.


**Principio de la suma.** Si una tarea se puede hacer de $m$ maneras **o** de $n$ maneras **y no a la vez**, hay $m + n$ posibilidades.
**Principio del producto.** Si una tarea consta de pasos **sucesivos** con $m$ y $n$ opciones (independientes), hay $m\cdot n$ en total. Un menú con $4$ entrantes, $5$ platos y $3$ postres: $4\cdot 5\cdot 3 = 60$ menús.

**Contraseñas.** Con $62$ símbolos (letras mayúsculas y minúsculas y cifras) y longitud $8$, repetición permitida: $62^8 = 218\,340\,105\,584\,896 \approx 2{,}2\cdot 10^{14}$. Cada símbolo aporta $\log_2 62 \approx 5{,}95$ bits, así que son
unos $47{,}6$ bits. A $10^{10}$ intentos por segundo (hardware dedicado contra un hash muy rápido), agotarlas llevaría unas $6$ horas; con un hash lento diseñado para ello, mucho más. **La longitud pesa más que
la variedad de símbolos:** cada carácter extra multiplica por $62$.

### Ordenaciones y selecciones

- **Permutaciones** de $n$ objetos distintos (orden importa, usar todos): $n! = n(n-1)\cdots 1$. $6$ personas en fila: $6! = 720$. *(Por el principio del producto: $6$ opciones para el primero, $5$ para el segundo...)*
- **Variaciones** de $n$ elementos tomados de $k$ en $k$ ($k$ elegidos de entre $n$) (orden importa, sin repetir): $n(n-1)\cdots(n-k+1) = \dfrac{n!}{(n-k)!}$. PIN de $4$ cifras distintas: $10\cdot 9\cdot 8\cdot 7 = 5040$.
- **Con repetición**: $n^k$ (como las contraseñas).
- **Combinaciones** (orden **no** importa): $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$. *Justificación:* las variaciones cuentan cada grupo de $k$ elementos $k!$ veces (una por orden); dividir. $\dbinom{8}{3} = 56$.
- **Permutaciones con repetición**: ordenaciones de $n$ objetos con $n_1, n_2, \dots$ iguales: $\dfrac{n!}{n_1!\,n_2!\cdots}$. Los anagramas de «ANA» son $\frac{3!}{2!} = 3$.

**Ejemplos con números reales.** La lotería primitiva española elige $6$ números de $49$: $\binom{49}{6} = 13\,983\,816$ combinaciones, luego la probabilidad de acertar los seis es $\frac{1}{13\,983\,816}$. Una mano de póquer
de $5$ cartas de $52$: $\binom{52}{5} = 2\,598\,960$.

### El triángulo de Pascal y el binomio

$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} .
$$

> [!formal] Con rigor: demostración
> *Demostración (combinatoria).* Fija un elemento concreto. Los subconjuntos de $k$ elementos que **lo contienen** son $\binom{n-1}{k-1}$ (se eligen los otros $k - 1$ de los $n - 1$ restantes) y los que **no** lo contienen, $\binom{n-1}{k}$. $\blacksquare$

Así se construye el **triángulo de Pascal** (cada número es la suma de los dos de encima) y se prueba el **binomio de Newton**:

$$
(a + b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k .
$$

*Idea:* al multiplicar $n$ factores $(a + b)$, el término $a^{n-k}b^k$ se forma eligiendo $b$ en exactamente $k$ de los $n$ paréntesis, de $\binom{n}{k}$ maneras. Por ejemplo $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$. Tomando $a = b = 1$: la suma de una fila de Pascal es $2^n$, el número de subconjuntos de un conjunto de $n$ elementos.

### Estrellas y barras

¿De cuántas maneras se reparten $n$ objetos iguales en $r$ cajas (pudiendo quedar alguna vacía)? Es el número de soluciones en enteros $\ge 0$ de $x_1 + \cdots + x_r = n$: se disponen $n$ «estrellas» y $r - 1$ «barras»
separadoras, y se elige dónde van las barras: $\dbinom{n + r - 1}{r - 1}$. Con $n = 5$ y $r = 3$: $\binom{7}{2} = 21$.

### Principio del palomar

*Si se colocan $n + 1$ objetos en $n$ cajas, alguna caja contiene al menos dos.* (Si todas tuvieran como mucho uno, habría a lo sumo $n$ objetos.) Parece trivial y es muy potente: en una ciudad con más de $10^6$ habitantes y un máximo de
$300\,000$ pelos por cabeza hay dos con el mismo número de pelos. **Ejemplo resuelto:** de $\{1, \dots, 10\}$, ¿cuántos números garantizan que dos suman $11$? Las parejas $(1, 10), (2, 9), \dots, (5, 6)$ son $5$ «cajas»; con $6$ números, dos caen en la misma pareja: **$6$**.

### Inclusión-exclusión

Para dos conjuntos, $|A \cup B| = |A| + |B| - |A \cap B|$ (los comunes se contaron dos veces); para tres, $|A \cup B \cup C| = |A| + |B| + |C| - |A\cap B| - |A\cap C| - |B\cap C| + |A\cap B\cap C|$.
**Ejemplo:** de $1$ a $100$, los divisibles por $2$ o por $3$: $50 + 33 - 16 = 67$.

## 3. Probabilidad

> [!practico]
> La probabilidad es un número entre $0$ (imposible) y $1$ (seguro) que mide cuánto esperas que ocurra algo. Si en una bolsa
> hay $3$ bolas rojas y $1$ azul, y todas tienen la misma posibilidad de salir, la de sacar roja es $\frac{3}{4}$: casos que te
> interesan entre casos posibles. Truco que resuelve medio tema: cuando preguntan «**al menos uno**», calcula «**ninguno**» y
> réstalo de $1$.


Un **experimento aleatorio** tiene un **espacio muestral** $\Omega$ (todos los resultados posibles); un **suceso** es un subconjunto de $\Omega$. Kolmogorov (1933) axiomatizó la probabilidad $P$ con tres reglas:

1. $P(A) \ge 0$.  2. $P(\Omega) = 1$.  3. Si $A$ y $B$ son **incompatibles**, $P(A \cup B) = P(A) + P(B)$ (en la versión completa, para infinitos sucesos incompatibles dos a dos, la probabilidad de la unión es la suma de la serie).

De ellos se deducen el **suceso contrario**, $P(\bar A) = 1 - P(A)$, y la unión general, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

**Regla de Laplace.** Si todos los resultados son **equiprobables**: $P(A) = \dfrac{\text{casos favorables}}{\text{casos posibles}}$. Dos dados: hay $36$ resultados y $6$ suman $7$, luego $P = \frac{6}{36} = \frac16$.

**«Al menos uno».** Casi siempre se calcula con el contrario. Probabilidad de **al menos un seis** en $3$ tiradas: $1 - \left(\frac56\right)^3 = \frac{91}{216} \approx 42{,}1\,\%$. (Error típico: «$3\cdot\frac16 = \frac12$»; no, porque los sucesos no son incompatibles.)

### Probabilidad condicionada e independencia

> [!practico]
> Saber algo cambia las probabilidades. La probabilidad de que una carta de la baraja española sea el rey de oros es
> $\frac{1}{40}$; pero si ya sabes que es un rey, pasa a $\frac{1}{4}$: solo cuentan los $4$ reyes. Eso es condicionar: reducir
> los casos posibles a los que encajan con lo que sabes.


La probabilidad de $A$ **sabiendo que ha ocurrido $B$**:

$$
P(A\mid B) = \frac{P(A \cap B)}{P(B)} .
$$

Dos sucesos son **independientes** si saber uno no cambia la probabilidad del otro: $P(A \cap B) = P(A)\,P(B)$. Las tiradas sucesivas de una moneda son independientes: **la moneda no tiene memoria** (falacia del jugador:
creer que tras cinco caras «toca» cruz).

**Ley de la probabilidad total.** Si $B_1, \dots, B_n$ son sucesos incompatibles que cubren $\Omega$: $P(A) = \sum P(A\mid B_i)\,P(B_i)$.

### El teorema de Bayes

$$
P(B\mid A) = \frac{P(A\mid B)\,P(B)}{P(A)} .
$$

> [!formal] Con rigor: demostración
> *Demostración.* $P(A \cap B)$ se puede escribir de dos maneras: $P(A\mid B)P(B)$ y $P(B\mid A)P(A)$; igualar y despejar. $\blacksquare$

Sirve para **invertir** una probabilidad condicionada: pasar de «la probabilidad de un positivo si estás enfermo» a «la probabilidad de estar enfermo si das positivo». Y esa inversión **no es intuitiva**.

**Ejemplo resuelto (la falacia de la tasa base).** Una enfermedad afecta al $0{,}5\,\%$; un test detecta al $98\,\%$ de los enfermos y da falsos positivos en el $4\,\%$ de los sanos. ¿Qué probabilidad hay de estar enfermo si el test da positivo?
Imagina $100\,000$ personas: $500$ enfermas ($490$ dan positivo) y $99\,500$ sanas ($3980$ dan positivo). De los $4470$ positivos, solo $490$ están enfermos: $\frac{490}{4470} \approx 11\,\%$. **Un test «de un $98\,\%$» puede dar,
con una enfermedad rara, un positivo que es falso nueve de cada diez veces.** Razonar con **frecuencias naturales** (poblaciones imaginarias) evita casi todos los errores.

## 4. Paradojas famosas (y por qué no lo son)

**El problema del cumpleaños.** En un grupo de $n$ personas con $365$ días equiprobables, la probabilidad de que **todos** cumplan en días distintos es
$\dfrac{365}{365}\cdot\dfrac{364}{365}\cdots\dfrac{365 - n + 1}{365}$. Con $n = 23$ baja a $0{,}493$: **con $23$ personas ya es más probable que no que haya una coincidencia.** Parece increíble porque hay $\binom{23}{2} = 253$ **parejas**
posibles, no $23$. Es el mismo cálculo que **colisiones de hash**: con una función de $N$ valores, tras $\approx\sqrt{N}$ elementos ya hay una colisión probable (por eso, para resistir colisiones, los hashes necesitan el doble de bits que la seguridad buscada).

**Monty Hall.** Hay $3$ puertas, un premio y dos cabras. Eliges una; el presentador, que **sabe** dónde está el premio, abre otra con cabra y te ofrece cambiar. **Conviene cambiar**: ganas con probabilidad $\frac23$.
*Razón:* eliges bien con probabilidad $\frac13$ y entonces cambiar pierde; con probabilidad $\frac23$ eliges una cabra, y el presentador **te deja** la puerta del premio como única alternativa. Con $100$ puertas y $98$ abiertas, cambiar gana con $\frac{99}{100}$:
se ve mejor. La clave es que el presentador **no abre al azar**.

**Coincidencias.** En un número enorme de intentos, lo improbable ocurre: con $8\cdot 10^9$ personas, un suceso de probabilidad $10^{-6}$ le sucede a miles. «Qué casualidad» es a veces solo estadística.

## 5. Esperanza, varianza y la ley de los grandes números

> [!practico]
> La **esperanza** es lo que ganas o pierdes **de media por jugada** si juegas muchísimas veces. En la ruleta, de cada $37$
> euros apostados la casa se queda de media con $1$: por eso los casinos ganan siempre a la larga, aunque algún jugador
> gane una noche. Y la **ley de los grandes números** dice que, con muchas repeticiones, la proporción de veces que algo
> ocurre se acerca a su probabilidad (no que «se compense» en la siguiente tirada).


La **esperanza** (valor esperado) de una variable $X$ con valores $x_i$ y probabilidades $p_i$ es $E[X] = \sum x_i p_i$: lo que se obtiene **de media a largo plazo**.
**Ejemplo (ruleta europea, $37$ casillas, $0$ a $36$):** apostar $1$ € a un número paga $35$ € de ganancia si sale. $E = \frac{1}{37}\cdot 35 - \frac{36}{37}\cdot 1 = -\frac{1}{37} \approx -0{,}027$ €: la casa **gana de media un $2{,}7\,\%$**
de lo apostado, haga lo que haga el jugador. Los juegos de casino contra la banca tienen esperanza negativa para el jugador; la lotería, también (se paga solo una parte de lo recaudado).

La **esperanza es lineal**: $E[X + Y] = E[X] + E[Y]$ aunque no sean independientes. La **varianza** $\sigma^2 = E[(X - \mu)^2]$ mide la dispersión.

**Distribución binomial.** Si se repite $n$ veces un experimento independiente con probabilidad de éxito $p$, la probabilidad de **exactamente $k$ éxitos** es

$$
P(X = k) = \binom{n}{k}p^k(1 - p)^{n-k} .
$$

Con $n = 10$, $p = \frac12$, $k = 5$: $\binom{10}{5}\cdot\frac{1}{1024} = \frac{252}{1024} = \frac{63}{256} \approx 24{,}6\,\%$. Tiene esperanza $np$ y varianza $np(1-p)$.

**Ley de los grandes números** (enunciado): al repetir un experimento, la **frecuencia relativa** de un suceso se acerca a su probabilidad. **No** dice que los resultados «se compensen» (sin memoria): dice que
la proporción converge. Permite estimar probabilidades **simulando** (método de Monte Carlo): para aproximar $\pi$ se lanzan puntos al azar en un cuadrado de lado $1$; la fracción dentro del cuarto de círculo de radio $1$ tiende a $\frac{\pi}{4}$.

```python
import random

def pi_montecarlo(n, semilla=1):
    random.seed(semilla)
    dentro = sum(1 for _ in range(n) if random.random() ** 2 + random.random() ** 2 <= 1)
    return 4 * dentro / n

print(pi_montecarlo(1_000_000))   # ≈ 3.14 (el error baja como 1/sqrt(n))
```

## 6. Errores típicos

- **Sumar** probabilidades de sucesos que **no** son incompatibles (usar el contrario o inclusión-exclusión).
- **Falacia del jugador**: creer que el azar tiene memoria. Y su opuesta, «la mano caliente».
- **Falacia de la tasa base**: ignorar cuán frecuente es el suceso antes del test (Bayes).
- Confundir $P(A\mid B)$ con $P(B\mid A)$ (por ejemplo, «el $90\,\%$ de los conductores accidentados llevaba móvil» no es «el $90\,\%$ de quienes llevan móvil tienen accidente»).
- Contar mal: ¿importa el orden? ¿se puede repetir?
- Suponer **equiprobabilidad** cuando no la hay: con dos dados, la suma $7$ es más probable que la $2$.
- Tomar muestras pequeñas por prueba: la ley de los grandes números actúa con muchos datos.

## Repaso: lo que debe quedarte dentro de un mes

1. Producto y suma; $n!$; $\binom{n}{k} = \frac{n!}{k!(n-k)!}$; Pascal; binomio de Newton.
2. Laplace: favorables entre posibles (equiprobables); «al menos uno» $= 1 - $ «ninguno».
3. $P(A\mid B) = \frac{P(A\cap B)}{P(B)}$; independencia $\iff P(A\cap B) = P(A)P(B)$.
4. Bayes: razona con una población imaginaria de $10\,000$ personas.
5. $E[X] = \sum x_ip_i$; binomial $\binom{n}{k}p^k(1-p)^{n-k}$; cumpleaños: $23$ personas.

## Siguiente

La probabilidad se formaliza en [[mat-probabilidad|el nodo de probabilidad de grado]] (distribuciones, teoremas límite) y
alimenta la estadística inferencial y el aprendizaje automático. Antes, el troncal sigue con [[mat-trigonometria]].
