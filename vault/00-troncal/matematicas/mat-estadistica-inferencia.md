---
id: mat-estadistica-inferencia
title: "Estadística e inferencia: estimación, intervalos de confianza, contrastes, regresión e inferencia bayesiana"
area: matematicas
trunk_level: 12
prerequisites: [mat-probabilidad, mat-estadistica-bidimensional]
academic_sources:
  - "García Pérez, A. Estadística Básica con R, 2.ª ed. UNED, 2023, temas 5-10 (estimadores y muestreo, intervalos, contrastes, no paramétricos, análisis de la varianza, regresión y correlación): texto base de «Estadística básica» (61021045) de la UNED."
  - "Vélez Ibarrola, R.; García Pérez, A. Principios de Inferencia Estadística. UNED: texto base de «Inferencia estadística» (61023104; guía 2026-27: tema 3, muestreo de poblaciones normales; tema 4, intervalos; temas 5-7, estimación puntual; temas 8-10, contrastes, razón de verosimilitudes y χ²)."
  - "Wasserman, L. All of Statistics: A Concise Course in Statistical Inference. Springer, 2004."
  - "Casella, G.; Berger, R. L. Statistical Inference, 2ª ed. Duxbury (Wadsworth), 2002."
  - "NIST/SEMATECH. e-Handbook of Statistical Methods (NIST Handbook 151), itl.nist.gov/div898/handbook."
  - "Wasserstein, R. L.; Lazar, N. A. The ASA Statement on p-Values: Context, Process, and Purpose. The American Statistician, 70(2), 129-133, 2016."
  - "Python Software Foundation. statistics — Mathematical statistics functions (NormalDist, linear_regression), docs.python.org/3/library/statistics.html."
hints:
  - "Concepto: un estadístico es una variable aleatoria: si repitieras el muestreo, cambiaría. Toda la inferencia se apoya en su distribución muestral; en la media, normal con desviación σ/√n (teorema central del límite) o t de Student si σ se estima. Un intervalo es «estimación ± cuantil × error estándar»; un p-valor es la probabilidad, si H0 fuera cierta, de algo al menos tan extremo como lo observado."
  - "Herramienta: en Python, statistics.mean, variance (n−1), pvariance (n), NormalDist().inv_cdf(0.975) para cuantiles normales y statistics.linear_regression; para la t y la χ² sin SciPy, integra la densidad con Simpson y busca el cuantil por bisección. Comprueba cualquier intervalo o contraste con una simulación: repite el muestreo miles de veces con random y cuenta."
  - "Documentación: NIST e-Handbook, capítulos 1.3 (análisis exploratorio) y 7 (comparación de productos y procesos); Wasserman, capítulos de estimación, intervalos, contrastes, regresión y bayesiana; declaración de la ASA sobre los p-valores (2016); docs.python.org/3/library/statistics.html."
exercises:
  - id: media-y-varianza-muestral
    tier: 1
    prompt: |
      Para la muestra {{d}}, calcula la media muestral $\bar x$ y la varianza muestral $s^2$ (con denominador $n - 1$). Respuesta: los dos números separados por `;`.
    variants:
      - values: {"d":"$3$, $7$, $5$, $9$, $6$"}
        answers: ["sha256:852d67a1c4dce9756ad0ff93bdd48460b98c50d683afc2b6177790edd407378f"]
      - values: {"d":"$10$, $12$, $11$, $15$, $12$"}
        answers: ["sha256:993ba36f4ca155388f0b5372a506632c37c1b25eb280bf22afc998a01c18519b"]
      - values: {"d":"$2$, $2$, $5$, $8$, $8$"}
        answers: ["sha256:8ac3c9a91991b05ea547203fb10700a74e8d95b8686d37116686b5acc23f6dc1"]
      - values: {"d":"$1$, $4$, $4$, $7$, $9$"}
        answers: ["sha256:c0f3955b9eb96e116f72eb98d4b3257014e726d5c9f8c041ad1665af0295b790"]
      - values: {"d":"$20$, $18$, $25$, $21$, $16$"}
        answers: ["sha256:b8e8808d7d4e5a4cd1d2f2be0192078cb7ee2535819058a83e44129396cc0369"]
      - values: {"d":"$6$, $6$, $6$, $9$, $3$"}
        answers: ["sha256:a8c59209abd621406203ef0a2471ee36ed843f7d33f4a711996d0b525eff90f0"]
  - id: error-estandar-de-una-proporcion
    tier: 1
    prompt: |
      En una encuesta a ${{n}}$ personas, el ${{p}}\,\%$ dice que sí. ¿Cuánto vale el error estándar estimado de la proporción, $\sqrt{\hat p(1 - \hat p)/n}$? Respuesta: un número decimal exacto.
    variants:
      - values: {"n":400,"p":50}
        answers: ["sha256:98fcc7a319ae18a5afb886159537cddd90fa882631187b9cc87f1da8f9173b7b"]
      - values: {"n":6400,"p":20}
        answers: ["sha256:07e17407c7918077774d46219a18f93114e778efe79c5e70ffffcc9784c2e75e"]
      - values: {"n":3600,"p":10}
        answers: ["sha256:07e17407c7918077774d46219a18f93114e778efe79c5e70ffffcc9784c2e75e"]
      - values: {"n":100,"p":90}
        answers: ["sha256:773a15ec53a8a09eadd719b7f5aa67aa87b2175e6ec3c92e9641ddba7e54fb63"]
      - values: {"n":100,"p":50}
        answers: ["sha256:0602d7c813c1f6e7351a5832730f29daf739674976caba8d9dd955be838d46ea"]
      - values: {"n":1600,"p":50}
        answers: ["sha256:fdae42d0e002c1f745cd8e1afd12264e29c67eb1c659243e814177237903f8b4"]
  - id: varianza-de-maxima-verosimilitud
    tier: 1
    prompt: |
      Con la muestra {{d}} de una normal, ¿cuál es el estimador de **máxima verosimilitud** de la varianza $\sigma^2$ (denominador $n$)? Respuesta: un número.
    variants:
      - values: {"d":"$3$, $7$, $5$, $9$, $6$"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"d":"$2$, $4$, $4$, $4$, $5$, $5$, $7$, $9$"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"d":"$1$, $3$, $5$, $7$"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"d":"$10$, $12$, $14$"}
        answers: ["sha256:64dec4e4e567d7c709550e831f73be261c30c34186578fcae75daade68cef683"]
      - values: {"d":"$0$, $0$, $6$, $6$"}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"d":"$2$, $8$, $5$, $5$"}
        answers: ["sha256:32209ccbf8a8e509b9027698cc173343a2695e8ecdbe899bf5335a3100c956fc"]
  - id: varias-pruebas-a-la-vez
    tier: 1
    prompt: |
      Se hacen ${{m}}$ contrastes independientes, todos con hipótesis nula cierta y nivel $\alpha = {{a}}$. ¿Qué probabilidad hay de obtener **al menos un** resultado «significativo» por puro azar? Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"m":10,"a":"0{,}05"}
        answers: ["sha256:8da57ece22cb358124059d13de656af59406667638dbd9a7bc8c3ceaad3839b7"]
      - values: {"m":50,"a":"0{,}05"}
        answers: ["sha256:92d08744dbd854f3eac638392719e20a6aa5464a54e4ab12ae546179e9372fe1"]
      - values: {"m":20,"a":"0{,}01"}
        answers: ["sha256:4a7aa426d07748f580f4d787e261a579e3881d86e32d279e5fe19f0998842def"]
      - values: {"m":100,"a":"0{,}01"}
        answers: ["sha256:e9f59eddfced6f0190c5f388808f99163162cfbe51ff068c52ba544b38c3004c"]
      - values: {"m":5,"a":"0{,}1"}
        answers: ["sha256:9d2ec5aa47e3bc2219a17b6ac278828dbe11b79b34606683e03ea7fcbc2525c9"]
      - values: {"m":30,"a":"0{,}02"}
        answers: ["sha256:6979d8e61fdfa843532db0205399fefd35491f17be9fa554249ae606c5c1908b"]
  - id: intervalo-con-sigma-conocida
    tier: 2
    prompt: |
      Una muestra de $n = {{n}}$ de una población normal con $\sigma = {{s}}$ conocida tiene media $\bar x = {{m}}$. Da el intervalo de confianza al $95\,\%$ para $\mu$ (usa el cuantil $z_{0{,}975}$ de la normal estándar). Respuesta: los dos extremos con **2 decimales**, separados por `;`.
    variants:
      - values: {"n":36,"s":12,"m":80}
        answers: ["sha256:c1097abc965a4c99ac0666504ed7682038bc19319d7d32050c5fdecaf9510367"]
      - values: {"n":16,"s":4,"m":25}
        answers: ["sha256:926d66d8c94fa4975ad9d6114d47edbe4368cfa1db813302d8b076764cef2263"]
      - values: {"n":100,"s":15,"m":120}
        answers: ["sha256:a2df3030c96bcd2f1e6d03e2d55207fa500769820606c00b9cb63bb6c37b92f6"]
      - values: {"n":49,"s":7,"m":10}
        answers: ["sha256:21467f6486fdee5f2504a656729f5f2d0eebf1dc5ad33994b3090caaaa723e4c"]
      - values: {"n":64,"s":20,"m":300}
        answers: ["sha256:f64888ffa149817164e0a72bd1820d90c3f087df5d5ad97c428aed5c08e8dd0d"]
      - values: {"n":9,"s":3,"m":5}
        answers: ["sha256:0e0937a5ba3486c4aa8147e82b3760f6a905763eef5422f9cf82066c84a108a7"]
  - id: intervalo-t-de-student
    tier: 2
    prompt: |
      Se miden ${{n}}$ piezas: {{d}}. Suponiendo normalidad con $\sigma$ desconocida, da el intervalo de confianza al $95\,\%$ para la media (con la $t$ de Student de ${{gl}}$ grados de libertad). Respuesta: los dos extremos con **2 decimales**, separados por `;`.
    variants:
      - values: {"n":6,"d":"$5{,}2$, $4{,}8$, $5{,}5$, $5{,}1$, $4{,}9$, $5{,}3$","gl":5}
        answers: ["sha256:10d897c75e2817ac4d5223968adf14be49025581f4a526134b79e0edd896c5b5"]
      - values: {"n":10,"d":"$101$, $98$, $103$, $99$, $100$, $102$, $97$, $104$, $100$, $96$","gl":9}
        answers: ["sha256:b370cc50b43e52e745b293d6c661e6ab8365dd0db17ff92ab1bc5e79e3fa0a7b"]
      - values: {"n":5,"d":"$2{,}3$, $2{,}7$, $2{,}5$, $2{,}9$, $2{,}6$","gl":4}
        answers: ["sha256:5d7f9fd20a4a6554b02816722403efbff3b629dfe4506340eaafa8b5ed12cb96"]
      - values: {"n":7,"d":"$12{,}4$, $12{,}1$, $12{,}6$, $12{,}2$, $12{,}3$, $12{,}5$, $12$","gl":6}
        answers: ["sha256:abe4ca18ed1e0154e08634102ca00c01f553c2b3488722cc380f13e68828d34b"]
      - values: {"n":8,"d":"$48$, $52$, $50$, $47$, $53$, $49$, $51$, $50$","gl":7}
        answers: ["sha256:883e71e04a21ae849e6f84cce15a53ad62954c38c8ff49ad467d7d0277ddfc0e"]
      - values: {"n":5,"d":"$0{,}8$, $1{,}1$, $0{,}9$, $1$, $1{,}2$","gl":4}
        answers: ["sha256:75e53cc23e1ae00f39aa927fbe38edadd7e0d38c9ea3b4d1a87b8962d5d56041"]
  - id: maxima-verosimilitud-exponencial
    tier: 2
    prompt: |
      Los tiempos entre fallos de una máquina (en días) son {{d}} y se suponen exponenciales de parámetro $\lambda$. ¿Cuál es el estimador de máxima verosimilitud $\hat\lambda$? Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"d":"$1$, $4$, $2$, $3$"}
        answers: ["sha256:0b9db2ecfb8de65fb248232d099982a827055c98d6372e9b4e1fa81d98dc1cc2"]
      - values: {"d":"$5$, $3$, $6$, $2$, $4$"}
        answers: ["sha256:f70b94aeb67de2a5eb4bd8c2ea85128f13776cb545a661abe422b378a6cf3099"]
      - values: {"d":"$2$, $2$, $1$, $7$"}
        answers: ["sha256:0d7f0e336166042f8cc9e4c20ae427ba367c279d6e3dfd1bd7247b0fbce61d50"]
      - values: {"d":"$10$, $6$, $8$"}
        answers: ["sha256:52e90ae24326591c8161e2e05a8f3b9b57287ca13aba3be7e84043691e160ba6"]
      - values: {"d":"$3$, $1$, $2$, $2$, $1$, $3$"}
        answers: ["sha256:d939926f05444b0f4495fb9629ecbfa80d99a8ec1a20d06800ca5a3d5f4fd276"]
      - values: {"d":"$0{,}5$, $1{,}5$, $2$, $1$"}
        answers: ["sha256:1265c5694e904ac7a10d0eebd43894950b49cfda19a3dbacdc4db7c0a49f6f12"]
  - id: contraste-de-una-moneda
    tier: 2
    prompt: |
      En ${{n}}$ lanzamientos salen ${{k}}$ caras. Con la aproximación normal **sin** corrección de continuidad, contrasta $H_0: p = 0{,}5$ frente a $H_1: p \ne 0{,}5$. ¿Cuánto vale el **p-valor**? Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"n":100,"k":58}
        answers: ["sha256:32644b1855bf70d2ae4c1d7a7610e9fa683ee144dc178bd64f15aac465c5aff7"]
      - values: {"n":200,"k":115}
        answers: ["sha256:24a13d8767eee1ebdd84653fc5e01593b9bf0a04772157e5e2769166f58cf5fe"]
      - values: {"n":50,"k":32}
        answers: ["sha256:86788cb32683b6edb53c34f6eff42736445b51e159bb5ca556afb4a45f0986df"]
      - values: {"n":400,"k":220}
        answers: ["sha256:7b96f14e7b56386cc700d9652f55845dd0724d806bbcc2552603d64e806ee5af"]
      - values: {"n":80,"k":49}
        answers: ["sha256:1ef12fa5a72a4afad3395fe19871ba4969cc0a0f87e0ca17240a1bec27ecbf0c"]
      - values: {"n":1000,"k":530}
        answers: ["sha256:39552778b31e347155ededb8d5e8fc9f10f0b3f1d5612e6034654403c097a18a"]
  - id: tamano-de-muestra
    tier: 2
    prompt: |
      ¿Cuántas personas hay que encuestar, como mínimo, para estimar una proporción con un margen de error de $\pm {{E}}$ puntos al $95\,\%$ de confianza en el peor caso ($p = 0{,}5$)? Respuesta: un entero.
    variants:
      - values: {"E":"6"}
        answers: ["sha256:8acc23987b8960d83c44541f9f0eb46454cea080ea94d916f56fccf033db866f"]
      - values: {"E":"4"}
        answers: ["sha256:36c1cc2f9d7022bf6beacb6248a89e7e677b3bf9a91e6457a5ffdbade55b76da"]
      - values: {"E":"2{,}5"}
        answers: ["sha256:6a27eece1c1658b237aede5c6c2b8af51d235ca08b2f7963b67d99caa7a12395"]
      - values: {"E":"5"}
        answers: ["sha256:131b0c35e2d7edef9dd63f48eff39341ef0a5f770538aa4e0017f41b9cdb135d"]
      - values: {"E":"1{,}5"}
        answers: ["sha256:d5358ec522f20c55c089c1c659977c1528566c9c9428ae56f7c415d1158ecbf9"]
      - values: {"E":"3{,}5"}
        answers: ["sha256:ff108b68b0e9bc1e5a744f80f9ef1b8575c7d041eeb3e8d2eae300347de6e7fc"]
  - id: potencia-de-un-contraste
    tier: 2
    prompt: |
      Se contrasta $H_0: \mu = {{m0}}$ frente a $H_1: \mu > {{m0}}$ con $\sigma = {{s}}$ conocida, $n = {{n}}$ y $\alpha = {{a}}$ (contraste $z$ unilateral). Si en realidad $\mu = {{m1}}$, ¿cuál es la **potencia** del contraste? Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"m0":"100","m1":"103","s":10,"n":36,"a":"0{,}05"}
        answers: ["sha256:a831892a6953f68fc2120e745c2cf96ebee5e074af5127ded4b6b2bd9dd8324c"]
      - values: {"m0":"50","m1":"52","s":5,"n":25,"a":"0{,}05"}
        answers: ["sha256:759b1238c030655958bb0b3fefb46b8a667cee5b3cd439fe79b83bfe9d9fe5f9"]
      - values: {"m0":"0","m1":"0{,}5","s":1,"n":16,"a":"0{,}01"}
        answers: ["sha256:09961da98362e7a634b0c9a29dd279f746d8dcb507ea185906b077e7c5830a2c"]
      - values: {"m0":"200","m1":"210","s":30,"n":49,"a":"0{,}05"}
        answers: ["sha256:1729d30ad813e449121747682d0ba0c389dbf21f674d8f88fe94e03041fae2a0"]
      - values: {"m0":"10","m1":"11","s":3,"n":64,"a":"0{,}1"}
        answers: ["sha256:8d09fb2271a1424e53cbde4cd2aa46ad555f741412314bffd22ad59169d53ac4"]
      - values: {"m0":"100","m1":"104","s":12,"n":100,"a":"0{,}01"}
        answers: ["sha256:ff7b023626eec04bd4733d7df109beb50c646fa60c4ea13895f03326ca758d59"]
  - id: paradoja-de-simpson
    tier: 2
    prompt: |
      Un tratamiento $A$ cura ${{a1}}$ de ${{a2}}$ casos leves y ${{a3}}$ de ${{a4}}$ graves; un tratamiento $B$ cura ${{b1}}$ de ${{b2}}$ leves y ${{b3}}$ de ${{b4}}$ graves. $A$ es mejor en cada grupo. ¿Cuáles son las proporciones **globales** de curación de $A$ y de $B$? Respuesta: las dos fracciones irreducibles separadas por `;`.
    variants:
      - values: {"a1":8,"a2":10,"a3":20,"a4":50,"b1":60,"b2":80,"b3":3,"b4":10}
        answers: ["sha256:fb79638fbbd89c33f1f04b2ab6a8b6d3c18f60f748f6048bbc0301574ed370c9"]
      - values: {"a1":18,"a2":20,"a3":10,"a4":40,"b1":70,"b2":90,"b3":2,"b4":10}
        answers: ["sha256:e231237a8c03637871a252123843676b4d0665b09fbca441aac86979c59a4753"]
      - values: {"a1":9,"a2":10,"a3":40,"a4":80,"b1":45,"b2":60,"b3":5,"b4":15}
        answers: ["sha256:1bf5a2375ea464b16886996ab99cd874817141edcd4096167139b99238f2e2ad"]
      - values: {"a1":5,"a2":5,"a3":12,"a4":30,"b1":40,"b2":50,"b3":1,"b4":5}
        answers: ["sha256:5e385460ab20b78d8669b1b62d7281aecc171235479c662a21cbd3629bde85af"]
      - values: {"a1":19,"a2":20,"a3":30,"a4":70,"b1":75,"b2":90,"b3":4,"b4":12}
        answers: ["sha256:0eb5f51d891c329f473af4b70a96ad474307bbd9c0ea77ac367e7bfb697b88fe"]
      - values: {"a1":7,"a2":8,"a3":22,"a4":60,"b1":66,"b2":80,"b3":3,"b4":10}
        answers: ["sha256:11a50af73db2dd100d51d03fe37cf77e1f3e7b3cb465ee4fc89c3ee6dc56e32a"]
  - id: bondad-de-ajuste
    tier: 3
    prompt: |
      Un dado se lanza $120$ veces y cada cara sale {{O}} veces. Calcula el estadístico $\chi^2 = \sum \frac{(O - E)^2}{E}$ para la hipótesis de dado equilibrado y su p-valor con $5$ grados de libertad. Respuesta: `chi2;p` con el p-valor redondeado a **4 decimales**.
    variants:
      - values: {"O":"22, 18, 20, 25, 15, 20"}
        answers: ["sha256:cbeb2db18a20a1f9731ddf811f6b9d145e5b0053f8d242c1f71fc35530353e56"]
      - values: {"O":"30, 12, 18, 20, 24, 16"}
        answers: ["sha256:0a5ca1c15cadf8d3c58ee79d216ae79e848f531fd6662b58366be4bc1341978b"]
      - values: {"O":"25, 15, 23, 17, 21, 19"}
        answers: ["sha256:5c1b7b2ed909da234eeb9e1a1e2c1c2d1605e19e7123ebeb612bb1d27ce973ff"]
      - values: {"O":"10, 25, 20, 30, 15, 20"}
        answers: ["sha256:de051b4d44415cd6999b6994d0def7c92e7e04482340b55a07bb92caf64187b1"]
      - values: {"O":"27, 13, 22, 18, 21, 19"}
        answers: ["sha256:bb1dd881102a41a4f6d7d8e48b64fd67885a1b1efae0e854a15ef7a6d8049410"]
      - values: {"O":"18, 24, 16, 26, 14, 22"}
        answers: ["sha256:a408dfa246df8e5d35f4b844c5610ee2b2d1962958e44da320a47d2022af1c42"]
  - id: t-de-dos-muestras
    tier: 3
    prompt: |
      Dos grupos de medidas: $A$ = {{A}} y $B$ = {{B}}. Calcula el estadístico $t$ de dos muestras con **varianza combinada**, $t = \frac{\bar x_B - \bar x_A}{s_p\sqrt{1/n_A + 1/n_B}}$. Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"nA":5,"nB":5,"A":"$4{,}2$, $4{,}8$, $5$, $4{,}6$, $4{,}9$","B":"$5{,}3$, $5{,}6$, $5{,}1$, $5{,}9$, $5{,}4$"}
        answers: ["sha256:3d0ae05f65444d107dfb1b4e95ca1b47c94fa81da740867838e1c3b1f01b1e25"]
      - values: {"nA":4,"nB":4,"A":"$10$, $12$, $11$, $13$","B":"$14$, $15$, $13$, $16$"}
        answers: ["sha256:012fd3329794e79ea74a73d230cdad09bb0295459016a7be9b17f595a4c3f15b"]
      - values: {"nA":6,"nB":6,"A":"$2{,}1$, $2{,}5$, $2{,}3$, $2{,}6$, $2{,}2$, $2{,}4$","B":"$2{,}8$, $2{,}6$, $3$, $2{,}7$, $2{,}9$, $3{,}1$"}
        answers: ["sha256:7324d502c0c90371585ebcf9c87f2699addade6e0f5b1af1ada05cceb3d91193"]
      - values: {"nA":5,"nB":5,"A":"$50$, $55$, $52$, $48$, $51$","B":"$53$, $58$, $56$, $54$, $57$"}
        answers: ["sha256:88d2edb674759ddf7631d4694fb0bd1cdf3d16ac4caee0f5fd4396805dfb0ace"]
      - values: {"nA":4,"nB":4,"A":"$1$, $1{,}4$, $1{,}2$, $1{,}1$","B":"$1{,}3$, $1{,}6$, $1{,}5$, $1{,}7$"}
        answers: ["sha256:19e25823ce1faa69ed27eda198999fdad2a31bbd347bfb1f77be8d853780d078"]
      - values: {"nA":5,"nB":5,"A":"$7$, $9$, $8$, $10$, $6$","B":"$9$, $11$, $10$, $12$, $8$"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: regresion-lineal-y-r2
    tier: 3
    prompt: |
      Ajusta por mínimos cuadrados la recta $y = mx + b$ a los puntos {{pts}} y calcula su coeficiente de determinación $R^2$. Respuesta: `m;b;R2` con $R^2$ redondeado a **3 decimales**.
    variants:
      - values: {"pts":"(1, 3), (2, 5), (3, 6), (4, 9), (5, 10)"}
        answers: ["sha256:74bd8b1f82291796a81eb62b9a60e369544e0372747438e7640a8599cb56c6a1"]
      - values: {"pts":"(0, 1), (1, 2), (2, 2), (3, 4), (4, 5)"}
        answers: ["sha256:9ddd5aa1e73d27cf99101ce207c75c66541b7ca667cc0bb8383e4f269731476b"]
      - values: {"pts":"(1, 10), (2, 8), (3, 7), (4, 5), (5, 2)"}
        answers: ["sha256:5ab7df39825f8b2f9ac9014b6e78991e72446a51b9d9cbe86f115b3288ffec65"]
      - values: {"pts":"(2, 1), (4, 3), (6, 4), (8, 4), (10, 6)"}
        answers: ["sha256:6e73ee39c9774f73713fa4a5039ccc0d797d20de6cb7695e47dd91d6705d0bc0"]
      - values: {"pts":"(1, 2), (3, 5), (5, 5), (7, 9)"}
        answers: ["sha256:e2a9bba60afc6cb990642fd598c177d21cf57b7a5a87351927cff577447564bc"]
      - values: {"pts":"(0, 4), (2, 5), (4, 7), (6, 6), (8, 9)"}
        answers: ["sha256:26d4df864be1a55fab6f58a12b7718c42bcb8285d769d73a11390ee8f373125c"]
  - id: inferencia-bayesiana
    tier: 3
    prompt: |
      La probabilidad $p$ de éxito de un proceso tiene distribución a priori $\mathrm{Beta}({{a}}, {{b}})$. Se observan ${{k}}$ éxitos en ${{n}}$ ensayos. ¿Cuál es la **media a posteriori** de $p$? Respuesta: una fracción irreducible `a/b`.
    variants:
      - values: {"a":1,"b":1,"k":6,"n":8}
        answers: ["sha256:9e3ee503c45042e78ba80825e71a1d2da1e5b37baf0a688cba1875fa94f1366f"]
      - values: {"a":2,"b":3,"k":4,"n":10}
        answers: ["sha256:0b9db2ecfb8de65fb248232d099982a827055c98d6372e9b4e1fa81d98dc1cc2"]
      - values: {"a":5,"b":5,"k":9,"n":20}
        answers: ["sha256:170b6fbc9474e95f607d477059c3c48ff15439a74041d912f83b384ab1e15820"]
      - values: {"a":1,"b":3,"k":0,"n":5}
        answers: ["sha256:7dbf57a3ed617234cd386b0f2042474ab8a0f152f17305ad0d1f8e62412a2629"]
      - values: {"a":3,"b":1,"k":12,"n":15}
        answers: ["sha256:4b5d6949b52c01332edc115a1741e8a054360d6a1dc10323fa441a6e20cd053a"]
      - values: {"a":2,"b":2,"k":30,"n":40}
        answers: ["sha256:adfbbf7e585ed7c826b841b84b7e4a812978e67f1c4cca5d6fb0184db8e5df4e"]
  - id: contraste-de-los-signos
    tier: 2
    type: numero
    sig: 3
    prompt: |
      De ${{n}}$ observaciones (ninguna igual a la mediana supuesta $m_0$), ${{k}}$ están por encima de $m_0$. ¿Cuál es el p-valor
      **bilateral** exacto del contraste de los signos para $H_0$: «la mediana es $m_0$»? Respuesta: con **4 decimales**.
    variants:
      - values: {"n":15,"k":12}
        answers: ["sha256:3d78be632072aa2e853c743c0f94eaccd75459a120dc3c47effda98f6dd4a235","sha256:9023c825264af9edb95617279ac3b704027ee93e9ae0dc41e8e01d5c46b539c5","sha256:34bc6ecc2ad328dbc607623214af713d09449e4d033828d666f7429e82507308"]
      - values: {"n":10,"k":9}
        answers: ["sha256:780fe0dfe11d069dcc949fc996423e10c6c06d86601496ef4739b196fb7c39c9","sha256:66494b5f495d0fa81c29f003442c3363f7e22a28bd118c34e7946c41456af50e","sha256:24f8a692ae7ae79cf5847fa8ac2b151fc98826ba18fe1609134723d171bfcf5f"]
      - values: {"n":20,"k":15}
        answers: ["sha256:14a190507e1d8b777f6561c39ebf6142d7ada6997512088ee217fdab36fb1e13","sha256:434b48124ebe2655d8bb5061feec4da0fa3201e947294bae5d061fbcdefe3f19","sha256:9a8cddedc1a20364356d6fad7b6924cdab92efd16a01e473b7fc932c9c471178"]
      - values: {"n":12,"k":3}
        answers: ["sha256:ae53978d6e6003952fab01a31de75d884550ad137714d6ec3b9d8da72f0623fb","sha256:e86c6986d4d7ea148988c92947395150ddb0ae9c8d5a0ad3ac37553681158150","sha256:11977ecbd5ca862cb886865eecbb257dd1b0228eda19f87d07f80e0eb3bcbe90"]
      - values: {"n":18,"k":14}
        answers: ["sha256:cb43679c80ca09a5a6b8dfdbf2225d613d307111654d1025ef4e5fd41c208065","sha256:cbead6fefed6a990374cde485264682fe387ff2edc2a293bdee1ef78a75c27e8","sha256:31680d49d0bfdef387613388ded9accfa787cdb1c7a996de3d52126a49e9a741"]
      - values: {"n":9,"k":8}
        answers: ["sha256:91fa83218cc215d9e0729d3a5994a14545c649c532a72f639aa7472dfba2a348","sha256:68aed6e3d45742a64525050097118f72eeb2a23fcf44d668d6d6200241eae93d","sha256:c8b532a136896ab9422d67cb4c508e0f76b9cd5db433f9bb5e3f480ff5ef237e"]
  - id: anova-un-factor
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Se comparan ${{k}}$ grupos ($N = {{N}}$ datos en total): {{G}}. Calcula el estadístico $F = \frac{SCE/(k - 1)}{SCD/(N - k)}$ del análisis de la
      varianza de un factor. Respuesta: con **4 decimales**.
    variants:
      - values: {"G":"grupo 1: 5, 6, 7; grupo 2: 8, 9, 10; grupo 3: 6, 7, 8","k":3,"N":9}
        answers: ["sha256:39b6943d9b3d94efe2011165eec606a8996d910d286ee6620fdb7b83ce7c125f","sha256:f6f4caffc6f54c4c7811780182d963dbf4ee61b743edb5216c2c8cd8458b0169","sha256:be2987b648f348460da13ed34334d091d62e27058470b055b93b30d826bba202"]
      - values: {"G":"grupo 1: 10, 12, 11, 13; grupo 2: 14, 13, 15, 16; grupo 3: 11, 12, 10, 11","k":3,"N":12}
        answers: ["sha256:4739527cc6160e40e55dfccd143a9d86c396133cf17fc2122d7aaee2d6dbbed4","sha256:e11b938d9279001d3a7935b8eab464076859c81ca7b6bd04d2a827bb3087a3a2","sha256:71ff20d693288fa91194c2f147e407aa645f88417726572d81dbb6ccf1d05536"]
      - values: {"G":"grupo 1: 2, 4, 3; grupo 2: 5, 6, 7; grupo 3: 8, 9, 7","k":3,"N":9}
        answers: ["sha256:674d2899b48e0fcc5508df327386b136e724bbd9c34773f3fdfec0e0b3a8b120","sha256:14b93be5d42989eb52107d42ff6d89eed7959716217d538ab11c3e9dd80ff87c","sha256:d5cdfab3a788031ff768a8799c04298cb18a4dd550428e0101a10ca5ed2b7813"]
      - values: {"G":"grupo 1: 20, 22, 21; grupo 2: 19, 20, 21; grupo 3: 25, 24, 26","k":3,"N":9}
        answers: ["sha256:fb0a382cbad1d65a49d628565a795a4aa1b7b063ee581d6b1c4bfea819a0a341","sha256:5dba0dc81131ed73ffe557ce21a18c0d3c56c653eb65cda32f3981186797abdf","sha256:e0c966f715fa05f89af4646e56d8c1021754baedba0a8015611336d04263fc5c"]
      - values: {"G":"grupo 1: 1, 2, 3, 2; grupo 2: 3, 4, 5, 4; grupo 3: 2, 3, 3, 4","k":3,"N":12}
        answers: ["sha256:904ceb6213c3631e5db25cc118ea6bc4571b81b0b346526c96d3dafbe01be6aa","sha256:57954b17b9fb3db8df96d4f2e4bf8e1ddd6017f43825afe52925af297d501633","sha256:3e661d243080f6a8a808abc53ab1c02ec99d2c7c9713c5f8eb45a1d3b4afb4ab"]
      - values: {"G":"grupo 1: 7, 8, 9; grupo 2: 7, 9, 11; grupo 3: 10, 12, 11","k":3,"N":9}
        answers: ["sha256:7dee5a967e444e64eead42e238c3e7bb2b3d4625a8a445eeb38ada7a89ab1724","sha256:946a74631dbba6b5118a6435ee607bc86b24fa5c6e752f4f745f407e343f1b25","sha256:10ec80671bcf3ce44585ad29c84aeb005b476e923074d26f013e373d7b41e31f"]
  - id: r-ic-interpretacion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa, en el enfoque frecuentista, un intervalo de confianza al $95\,\%$?
    options:
      - |
        Que $\mu$ tiene un $95\,\%$ de probabilidad de estar en este intervalo concreto
      - |
        Que el $95\,\%$ de los datos están en el intervalo
      - |
        Que el procedimiento acierta en el $95\,\%$ de las muestras
      - |
        Que la media muestral es exacta al $95\,\%$
    answers: ["sha256:5fae219033fd635b0feb596ffca4d12d70b98f843d392270b50384fd17bf0ac2"]
  - id: r-pvalor
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es un p-valor?
    options:
      - |
        La probabilidad de que $H_0$ sea cierta
      - |
        La probabilidad, si $H_0$ es cierta, de un resultado al menos tan extremo
      - |
        El tamaño del efecto
      - |
        La probabilidad de error de tipo II
    answers: ["sha256:f14944fdb89eb57aa0902f626e3fcc3e38d13dae9cfadc4e44cc72f8c1e80e63"]
  - id: r-error-tipo-i
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué consiste un error de tipo I?
    options:
      - |
        Rechazar $H_0$ cuando es cierta
      - |
        No rechazar $H_0$ cuando es falsa
      - |
        Usar la normal en vez de la $t$
      - |
        Equivocarse al calcular la media
    answers: ["sha256:b597dd005e1d9fd3632c2857f62110c2a4c45643bbbc65a6c6ef90defcd2bb23"]
  - id: r-cuadruplicar-n
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Por qué número se divide el error estándar de la media al multiplicar por $4$ el tamaño de la muestra?
    answers: ["sha256:9c5f9c3588f1b5171dea7e995b6f1cf54373cb6fefe38622e372864a488a342d","sha256:d7eee950598a5251add96c4835862cc71487b7af7ad5b99c3dfa6938a83c0fbe","sha256:1c427b38b9401bcecd9267f885a4b01ade55ff240a293aafbc2e682b0d0cf1ea"]
  - id: r-no-parametrico
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo conviene un contraste no paramétrico?
    options:
      - |
        Con muestras muy grandes y normales
      - |
        Siempre que haya más de dos grupos
      - |
        Para estimar una varianza
      - |
        Cuando no se puede suponer normalidad y se quiere un contraste basado en signos o rangos
    answers: ["sha256:6aa6abd8cbf41b75d8f3e6ba4d69d960193919dfba3ad66e4a3c37b14b48bb5f"]
  - id: r-anova-gl
    tier: 2
    review: true
    prompt: |
      En un ANOVA de un factor con $4$ grupos de $10$ datos cada uno, ¿cuántos grados de libertad tienen el numerador y el
      denominador de $F$? Respuesta: `num;den`.
    answers: ["sha256:65efad2160280406f7518159878972daf740a6ae89cec19fcec930d61d6dd9e3"]
  - id: r-bonferroni
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Con la corrección de Bonferroni, ¿qué nivel se usa en cada uno de $10$ contrastes para un nivel global de $0{,}05$?
    answers: ["sha256:bae8d7904f0906caf909267160d217d98c9500a1a74c47d5a6833aa10bce6b49","sha256:d69b9392899fd8aa09da3433d2f7d44104bafabb733148979e944b82d02da4a4","sha256:685c34a3935ddb26b1ba12b9949861e4960def38533c1ff4ba7c59760c843163"]
---

# Estadística e inferencia: estimación, intervalos de confianza, contrastes, regresión e inferencia bayesiana

La probabilidad ([[mat-probabilidad]]) parte de un modelo conocido y predice los datos. La **estadística** hace el camino inverso:
parte de los datos y aprende sobre el modelo, **cuantificando la incertidumbre**. ¿Funciona el fármaco? ¿Es el nuevo proceso más
rápido? ¿Cuántos votos tendrá un partido? Este nodo enseña los estimadores y sus propiedades, la máxima verosimilitud, los intervalos de
confianza, los contrastes de hipótesis con su interpretación correcta (y sus abusos), la regresión lineal y la inferencia bayesiana. Es
la base del método científico cuantitativo, de la ciencia de datos y del aprendizaje automático.

## Objetivos

Al terminar sabrás:

1. Distinguir población, muestra, parámetro y estadístico, y evaluar un estimador por su sesgo, su varianza y su error cuadrático medio.
2. Obtener estimadores por **máxima verosimilitud** y por el método de los momentos.
3. Construir e interpretar intervalos de confianza para medias y proporciones (normal y $t$ de Student) y calcular tamaños de muestra.
4. Plantear contrastes de hipótesis, calcular **p-valores**, distinguir errores de tipo I y II y calcular la **potencia**.
5. Aplicar los contrastes $z$, $t$ (una y dos muestras) y $\chi^2$, y corregir por comparaciones múltiples.
6. Ajustar e interpretar una regresión lineal ($R^2$), hacer inferencia bayesiana con distribuciones conjugadas y reconocer la paradoja de
   Simpson y la diferencia entre correlación y causalidad.

## Qué debes dominar antes

[[mat-probabilidad]] (esperanza, varianza, normal, ley de los grandes números, teorema central del límite) y la estadística descriptiva de
[[mat-funciones-basicas]] (media, mediana, desviación típica, gráficos). Los mínimos cuadrados de [[mat-analisis-numerico]] ayudan.

> [!question] Test de entrada
> 1. Si $X_1, \dots, X_n$ son independientes con varianza $\sigma^2$, ¿cuál es la varianza de su media?
> 2. Si $Z \sim N(0, 1)$, ¿qué valor $z$ cumple $P(-z \le Z \le z) = 0{,}95$?
> 3. ¿Qué dice el teorema central del límite?
>
> Respuestas: $\sigma^2/n$; $z \approx 1{,}96$; que la media de muchas variables independientes, tipificada, se distribuye aproximadamente
> como una normal estándar, sea cual sea la distribución de partida.

## 1. Para qué sirve

- **Ciencia y medicina**: un ensayo clínico decide si un tratamiento funciona con un contraste; un intervalo dice **cuánto** funciona.
- **Ingeniería y calidad**: control estadístico de procesos, tolerancias, comparación de proveedores (el NIST e-Handbook nació para eso).
- **Tecnología y empresa**: pruebas A/B (¿convierte más la versión B de una web?), estimación de métricas con muestras, detección de anomalías.
- **Aprendizaje automático**: entrenar un modelo es estimar parámetros (a menudo por máxima verosimilitud); validar es estimar su error
  con incertidumbre ([[ia-aprendizaje-estadistico]]).
- **Ciudadanía**: leer encuestas («margen de error de $\pm 3$ puntos») y estudios científicos con criterio.

## 2. Muestras, estimadores y sus propiedades

> [!practico]
> Para saber cuánto mide de media la gente de un país no se mide a todo el mundo: se toma una muestra al azar y se calcula
> su media. Esa media es una **estimación**: con otra muestra saldría algo distinto. Lo que la estadística añade es saber
> **cuánto puede fallar**: cuanto más grande y más aleatoria es la muestra, menos se equivoca.


Una **población** se describe con **parámetros** desconocidos ($\mu$, $\sigma^2$, $p$). Una **muestra aleatoria simple** son observaciones
$X_1, \dots, X_n$ independientes con la distribución de la población. Un **estadístico** es una función de la muestra; usado para aproximar
un parámetro, se llama **estimador** ($\hat\theta$). Es una **variable aleatoria**: otra muestra daría otro valor.

- **Sesgo**: $E[\hat\theta] - \theta$. Insesgado si es 0.
- **Error cuadrático medio**: $E[(\hat\theta - \theta)^2] = \operatorname{Var}(\hat\theta) + \text{sesgo}^2$.
- **Consistente** si $\hat\theta \to \theta$ cuando $n \to \infty$.

**Media muestral** $\bar X = \frac1n\sum X_i$: insesgada para $\mu$, con varianza $\sigma^2/n$ y **error estándar** $\sigma/\sqrt n$.

**Varianza muestral.** $s^2 = \frac{1}{n - 1}\sum (X_i - \bar X)^2$ es insesgada para $\sigma^2$.

> [!formal] Con rigor: por qué se divide entre $n - 1$
> *Demostración.* $\sum (X_i - \bar X)^2 = \sum X_i^2 - n\bar X^2$. Como $E[X_i^2] = \sigma^2 + \mu^2$ y $E[\bar X^2] = \operatorname{Var}(\bar X) + \mu^2 = \frac{\sigma^2}{n} + \mu^2$,
> $E\bigl[\sum(X_i - \bar X)^2\bigr] = n(\sigma^2 + \mu^2) - n\bigl(\frac{\sigma^2}{n} + \mu^2\bigr) = (n - 1)\sigma^2$. $\blacksquare$ Dividir entre $n$
> subestima: las desviaciones respecto a $\bar X$ son menores que respecto a la $\mu$ verdadera (porque $\bar X$ se ajusta a la muestra).

## 3. Máxima verosimilitud

> [!practico]
> Si una moneda da $7$ caras en $10$ tiradas, ¿qué probabilidad de cara es «la que mejor explica» lo observado? La
> máxima verosimilitud responde: el valor del parámetro con el que lo que has visto habría sido más probable. Aquí, $0{,}7$.


Dada una muestra $x_1, \dots, x_n$ de un modelo con densidad (o masa) $f(x; \theta)$, la **verosimilitud** es
$L(\theta) = \prod_i f(x_i; \theta)$: cómo de probables son los datos observados según cada valor del parámetro. El **estimador de máxima
verosimilitud** (EMV) es el $\theta$ que la maximiza; en la práctica se maximiza $\ell = \ln L$, que convierte el producto en suma.

**Ejemplo resuelto 1 (Bernoulli).** $k$ éxitos en $n$ ensayos: $\ell(p) = k\ln p + (n - k)\ln(1 - p)$; $\ell'(p) = \frac kp - \frac{n - k}{1 - p} = 0$ da
$\hat p = k/n$, la proporción observada.

**Ejemplo resuelto 2 (exponencial).** $\ell(\lambda) = n\ln\lambda - \lambda\sum x_i$; $\ell' = \frac n\lambda - \sum x_i = 0$ da $\hat\lambda = 1/\bar x$.

**Normal.** El EMV de $\mu$ es $\bar x$ y el de $\sigma^2$ es $\frac1n\sum(x_i - \bar x)^2$ (sesgado, aunque consistente). Bajo condiciones de
regularidad, el EMV es consistente y, para $n$ grande, aproximadamente normal con la menor varianza posible: por eso es el método por
defecto. El **método de los momentos** iguala momentos muestrales y teóricos ($\bar x = E[X]$, ...) y da estimadores sencillos.

## 4. Intervalos de confianza

> [!practico]
> Dar un solo número («la media es $170$ cm») esconde la duda. Un intervalo («entre $168$ y $172$ cm, con un $95\,\%$ de
> confianza») la hace visible. El $95\,\%$ se refiere al método: si repitieras el estudio muchas veces, $95$ de cada $100$
> intervalos acertarían. Para un margen la mitad de estrecho hace falta cuatro veces más gente.


Un **intervalo de confianza al $95\,\%$** es un procedimiento que, aplicado a muchas muestras, contiene al parámetro verdadero en el $95\,\%$
de ellas. **No** significa que el parámetro tenga un $95\,\%$ de probabilidad de estar en *este* intervalo concreto (el parámetro es fijo; lo
aleatorio es el intervalo).

**Media con $\sigma$ conocida.** Por el teorema central del límite, $\frac{\bar X - \mu}{\sigma/\sqrt n} \approx N(0, 1)$, luego

$$
\bar x \pm z_{1-\alpha/2}\,\frac{\sigma}{\sqrt n}, \qquad z_{0{,}975} \approx 1{,}96 .
$$

**Media con $\sigma$ desconocida.** Se sustituye $\sigma$ por $s$ y, si la población es normal, $\frac{\bar X - \mu}{s/\sqrt n}$ sigue una **$t$ de Student**
con $n - 1$ grados de libertad (más colas que la normal, porque $s$ también varía; los **grados de libertad** son los datos que pueden
variar libremente: al calcular $s$ alrededor de $\bar x$, las $n$ desviaciones suman $0$ y solo $n - 1$ son libres); el intervalo es $\bar x \pm t_{n-1,\,1-\alpha/2}\,\frac{s}{\sqrt n}$. Con
$n = 8$, $t_{7;\,0{,}975} \approx 2{,}365$ en lugar de $1{,}96$.

**Proporción.** $\hat p \pm z\sqrt{\hat p(1 - \hat p)/n}$ (intervalo de Wald; para $n$ pequeño o $\hat p$ cerca de 0 o 1 es mejor el de Wilson).
El margen de error es máximo con $\hat p = 0{,}5$; para un margen $E$ al $95\,\%$ hace falta $n \ge \left(\frac{1{,}96}{E}\right)^2\cdot0{,}25$. Para
$\pm 3$ puntos, unas mil personas, **sea cual sea el tamaño de la población**: lo que importa es $n$, no la fracción encuestada.

**Ejemplo resuelto 3.** 36 medidas con $\bar x = 20{,}4$ y $s = 1{,}8$: error estándar $1{,}8/6 = 0{,}3$; con $t_{35;\,0{,}975} \approx 2{,}03$ el intervalo es
$20{,}4 \pm 0{,}61$, es decir $[19{,}79;\ 21{,}01]$. Para la mitad de anchura harían falta cuatro veces más datos ($\sqrt n$).

## 5. Contrastes de hipótesis

> [!practico]
> Un contraste es un juicio con presunción de inocencia: se parte de que «no pasa nada» (la moneda es justa, el fármaco no hace
> efecto) y solo se rechaza si los datos serían muy raros en ese caso. El **p-valor** mide esa rareza. Como en un juicio, se
> puede condenar a un inocente (error de tipo I) o absolver a un culpable (error de tipo II).


Un contraste compara una **hipótesis nula** $H_0$ (no hay efecto: $\mu = \mu_0$) con una **alternativa** $H_1$. Se calcula un **estadístico de
contraste** cuya distribución se conoce si $H_0$ es cierta, y el **p-valor**: la probabilidad, **suponiendo $H_0$ cierta**, de obtener un
resultado al menos tan extremo como el observado. Si el p-valor es menor que el **nivel de significación** $\alpha$ (habitualmente $0{,}05$), se
rechaza $H_0$.

| | $H_0$ cierta | $H_0$ falsa |
|---|---|---|
| se rechaza $H_0$ | **error de tipo I** (probabilidad $\alpha$) | acierto (**potencia** $1 - \beta$) |
| no se rechaza | acierto | **error de tipo II** (probabilidad $\beta$) |

**Ejemplo resuelto 4.** ¿Está trucado un dado que da $25$ seises en $90$ tiradas? $H_0: p = 1/6$. Esperados $15$, desviación típica
$\sqrt{90\cdot\frac16\cdot\frac56} = 3{,}54$; $z = \frac{25 - 15}{3{,}54} = 2{,}83$; p-valor bilateral $2(1 - \Phi(2{,}83)) \approx 0{,}005$: se rechaza $H_0$ al
$5\,\%$ y al $1\,\%$.

**Contrastes habituales.**

- $z$ para una media con $\sigma$ conocida o una proporción con $n$ grande.
- $t$ de **una muestra** ($\frac{\bar x - \mu_0}{s/\sqrt n}$, $n - 1$ grados de libertad); $t$ de **dos muestras** independientes con varianza combinada
  $s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$ y estadístico $\frac{\bar x_1 - \bar x_2}{s_p\sqrt{1/n_1 + 1/n_2}}$ (con varianzas distintas, el de
  Welch); $t$ **pareado** para medidas antes/después en los mismos sujetos.
- $\chi^2$ de **bondad de ajuste**: $\sum\frac{(O - E)^2}{E}$ con $k - 1$ grados de libertad ($k$ categorías); de **independencia** en una tabla de
  contingencia, con $(f - 1)(c - 1)$ grados de libertad.

**Potencia y tamaño de muestra.** La potencia es la probabilidad de detectar un efecto que existe. Crece con el tamaño del efecto, con $n$ y con
$\alpha$. Un estudio con poca potencia casi nunca encuentra nada, y cuando lo encuentra suele exagerar el efecto.

**Lo que un p-valor no es** (declaración de la American Statistical Association, 2016): no es la probabilidad de que $H_0$ sea cierta ni de que
los datos se deban al azar; un p-valor pequeño no mide el **tamaño** ni la importancia del efecto; y las conclusiones no deben depender solo de
si $p$ cruza $0{,}05$. Hay que informar del tamaño del efecto con su intervalo de confianza.

**Comparaciones múltiples.** Con 20 contrastes independientes de hipótesis nulas ciertas al $5\,\%$, la probabilidad de algún falso positivo es
$1 - 0{,}95^{20} \approx 64\,\%$. La corrección de **Bonferroni** usa $\alpha/m$ en cada uno de los $m$ contrastes. Probar muchas cosas y publicar
solo lo significativo (*p-hacking*) produce resultados que no se replican.

## 5b. Contrastes no paramétricos y análisis de la varianza

> [!practico]
> Los contrastes $t$ suponen que los datos son (aproximadamente) normales. Cuando no se puede suponer, hay métodos que
> solo usan el **orden** de los datos o sus **signos**, y funcionan con cualquier distribución. Y cuando hay más de dos
> grupos que comparar (tres fertilizantes, cuatro proveedores), en lugar de hacer muchos contrastes $t$ por parejas se hace
> uno solo: el análisis de la varianza.

**Contraste de los signos** (para la mediana $m_0$): se cuentan las observaciones por encima de $m_0$; si $H_0$ es cierta, ese
número es binomial$(n, \tfrac12)$ (se descartan las iguales). *Ejemplo:* de $12$ datos, $10$ están por encima de la mediana
supuesta; el p-valor bilateral es $2P(X \ge 10) = 2\cdot\frac{\binom{12}{10} + \binom{12}{11} + \binom{12}{12}}{2^{12}} = \frac{158}{4096} \approx 0{,}039$.
El **contraste de rangos con signo de Wilcoxon** usa además el tamaño de las diferencias (ordenándolas), y el de **Mann-Whitney**
compara dos muestras independientes por los rangos de todos los datos juntos.

**ANOVA de un factor.** Con $k$ grupos de tamaños $n_i$, medias $\bar x_i$ y media global $\bar x$, la variación total se descompone
en variación **entre** grupos y **dentro** de los grupos:
$$
\underbrace{\sum_{i,j}(x_{ij} - \bar x)^2}_{SCT} = \underbrace{\sum_i n_i(\bar x_i - \bar x)^2}_{SCE} + \underbrace{\sum_{i,j}(x_{ij} - \bar x_i)^2}_{SCD},
\qquad F = \frac{SCE/(k - 1)}{SCD/(N - k)} .
$$
Si los grupos son normales con la misma varianza y $H_0$ (todas las medias iguales) es cierta, $F$ sigue una **$F$ de Snedecor** con
$(k - 1, N - k)$ grados de libertad; valores grandes de $F$ indican que las medias difieren. Con $k = 2$, $F = t^2$ (el contraste $t$
de dos muestras).

## 6. Regresión lineal

> [!practico]
> Con datos de dos variables, la regresión traza la recta que mejor resume cómo cambia una con la otra (el consumo de un coche
> con la velocidad, por ejemplo) y dice qué parte de la variación explica. Que dos cosas vayan juntas no significa que una
> cause la otra: puede haber una tercera detrás.


El modelo $y = \beta_0 + \beta_1x + \varepsilon$ se ajusta por **mínimos cuadrados** ([[mat-analisis-numerico]]):

$$
\hat\beta_1 = \frac{\sum(x_i - \bar x)(y_i - \bar y)}{\sum(x_i - \bar x)^2}, \qquad \hat\beta_0 = \bar y - \hat\beta_1\bar x .
$$

El **coeficiente de determinación** $R^2 = 1 - \frac{\sum(y_i - \hat y_i)^2}{\sum(y_i - \bar y)^2}$ es la fracción de la varianza de $y$ explicada por la recta; en
regresión simple coincide con el cuadrado de la correlación $r$. Con errores normales independientes de varianza constante, se pueden dar
intervalos y contrastes para $\beta_1$ con la $t$ de $n - 2$ grados de libertad. Mira siempre los **residuos**: un patrón en ellos indica que la
recta no es el modelo adecuado.

**Correlación no es causalidad.** Que dos variables se muevan juntas puede deberse a una tercera (la venta de helados y los ahogamientos crecen
en verano). Solo un **experimento aleatorizado** (o un diseño causal cuidadoso) permite concluir causalidad.

**Paradoja de Simpson.** Una relación que se cumple en cada grupo puede invertirse al juntar los grupos, si los grupos tienen tamaños y
composiciones distintas (un tratamiento mejor en casos leves y en graves puede parecer peor en total si se aplicó sobre todo a los graves).
Hay que estratificar por las variables que influyen a la vez en el tratamiento y en el resultado.

## 7. Inferencia bayesiana

> [!practico]
> El enfoque bayesiano trata lo desconocido como algo de lo que tienes una opinión previa, y la actualiza con los datos: si
> creías que una moneda era justa y ves $7$ caras de $10$, ahora crees que favorece algo a la cara, pero menos que si no
> hubieras tenido ninguna opinión previa. Cuantos más datos, menos pesa la opinión inicial.


En el enfoque **bayesiano** el parámetro es incierto y se describe con una distribución **a priori**; los datos la actualizan con Bayes:

$$
\pi(\theta \mid \text{datos}) \propto L(\theta)\,\pi(\theta) .
$$

**Conjugación Beta-binomial.** Si la a priori de una proporción es $\mathrm{Beta}(a, b)$ (densidad $\propto p^{a-1}(1 - p)^{b-1}$, media $\frac{a}{a + b}$) y se
observan $k$ éxitos en $n$ ensayos, la a posteriori es $\mathrm{Beta}(a + k,\ b + n - k)$: basta sumar éxitos y fracasos. Con $\mathrm{Beta}(1, 1)$
(uniforme) y $3$ éxitos en $4$, la a posteriori es $\mathrm{Beta}(4, 2)$, de media $2/3$ (frente al EMV $3/4$: la a priori «tira» hacia el centro,
y su peso se diluye al crecer $n$). Un **intervalo de credibilidad** sí admite la lectura «el parámetro está aquí con probabilidad $95\,\%$».

## 8. Comprobar con un programa

```python
import math
import random
import statistics as st

# Varianza muestral: insesgada con n - 1 (simulación con semilla fija).
rng = random.Random(7)
n, reps = 5, 40_000
con_n1 = st.mean(st.variance([rng.gauss(0, 2) for _ in range(n)]) for _ in range(reps))
assert abs(con_n1 - 4) < 0.15                      # σ² = 4

# Cobertura de un intervalo al 95 % con σ conocida: alrededor del 95 % de los intervalos contiene a μ.
z = st.NormalDist().inv_cdf(0.975)
aciertos = 0
for _ in range(20_000):
    muestra = [rng.gauss(10, 3) for _ in range(16)]
    m = st.mean(muestra)
    aciertos += abs(m - 10) <= z * 3 / 4
assert abs(aciertos / 20_000 - 0.95) < 0.01

# Ejemplo resuelto 4: dado con 25 seises en 90 tiradas.
zc = (25 - 15) / math.sqrt(90 * (1 / 6) * (5 / 6))
p = 2 * (1 - st.NormalDist().cdf(zc))
assert round(zc, 2) == 2.83 and 0.004 < p < 0.006

# Regresión: R² = r² en regresión simple.
xs, ys = [1, 2, 3, 4, 6], [3, 5, 6, 9, 12]
reg = st.linear_regression(xs, ys)
residuos = sum((y - (reg.slope * x + reg.intercept)) ** 2 for x, y in zip(xs, ys))
r2 = 1 - residuos / sum((y - st.mean(ys)) ** 2 for y in ys)
assert abs(r2 - st.correlation(xs, ys) ** 2) < 1e-12
```

## 9. Errores típicos

- Interpretar un intervalo del $95\,\%$ como «95 % de probabilidad de que el parámetro esté aquí» (en el enfoque frecuentista).
- Leer el p-valor como la probabilidad de que $H_0$ sea cierta, o «no rechazar» como «demostrar» $H_0$.
- Confundir significación estadística con importancia práctica (con $n$ enorme, diferencias diminutas son «significativas»).
- Usar la normal en lugar de la $t$ con muestras pequeñas y $\sigma$ estimada.
- Hacer muchos contrastes sin corregir; elegir el análisis después de ver los datos.
- Dividir entre $n$ al estimar la varianza cuando se quiere un estimador insesgado.
- Concluir causalidad de una correlación; agregar grupos heterogéneos (Simpson).
- Extrapolar una regresión fuera del rango de los datos.

## 10. Resumen

- Estimadores: sesgo, varianza, ECM; $\bar X$ con error estándar $\sigma/\sqrt n$; $s^2$ con $n - 1$ es insesgada.
- Máxima verosimilitud: $\hat p = k/n$, $\hat\lambda = 1/\bar x$, $\hat\sigma^2$ con $n$.
- Intervalos: $\bar x \pm z\sigma/\sqrt n$, $\bar x \pm t\,s/\sqrt n$, $\hat p \pm z\sqrt{\hat p(1 - \hat p)/n}$; $n \approx 1068$ para $\pm 3$ puntos.
- Contrastes: p-valor, $\alpha$, errores I y II, potencia; $z$, $t$ (una, dos muestras, pareado), $\chi^2$; Bonferroni.
- No paramétricos (signos, Wilcoxon, Mann-Whitney) y ANOVA: $SCT = SCE + SCD$, $F$ con $(k - 1, N - k)$ grados de libertad.
- Regresión: $\hat\beta_1$, $\hat\beta_0$, $R^2 = r^2$, residuos; correlación no es causalidad; Simpson.
- Bayes: a posteriori $\propto$ verosimilitud $\times$ a priori; Beta-binomial suma éxitos y fracasos.

## Repaso: lo que debe quedarte dentro de un mes

1. El error estándar de la media es $\sigma/\sqrt n$: cuadruplicar $n$ divide el error entre 2.
2. Qué significa (y qué no) un intervalo de confianza y un p-valor.
3. Cuándo usar $z$, $t$, $\chi^2$, $F$ (ANOVA) o un contraste no paramétrico.
4. Máxima verosimilitud: derivar el logaritmo de la verosimilitud e igualar a cero.
5. Correlación no es causalidad; cuidado con las comparaciones múltiples y con Simpson.

## Siguiente

[[mat-estadistica-matematica]] (suficiencia, Cramér-Rao, contrastes óptimos), [[mat-procesos-estocasticos]], [[ia-aprendizaje-estadistico]] y
[[fis-termo-estadistica]].
