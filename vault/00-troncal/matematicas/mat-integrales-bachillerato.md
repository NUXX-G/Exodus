---
id: mat-integrales-bachillerato
title: "Integrales: primitivas, integrales inmediatas, cambio de variable, partes y racionales, integral definida, teorema fundamental, Barrow, áreas y volúmenes"
area: matematicas
trunk_level: 4
prerequisites: [mat-aplicaciones-derivada]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 10: «Integrales», secciones 1 (primitiva e integral indefinida), 2 (integrales de funciones elementales), 3 (cambio de variable, partes, racionales, trigonométricas) y 4 (área bajo una curva, integral definida, valor medio, función área, teorema fundamental, regla de Barrow y aplicaciones). Apuntes Marea Verde, autores Leticia González Pascual y Álvaro Valdés Menéndez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2010%20Integrales.pdf"
  - "M. Spivak, «Calculus», 4.ª ed., Publish or Perish (2008), capítulos 13 (integrales), 14 (teorema fundamental del cálculo) y 19 (integración en términos elementales)."
hints:
  - "Concepto: integrar es lo contrario de derivar (una primitiva F cumple F′ = f) y, a la vez, sumar infinitos trozos pequeñísimos (el área bajo una curva). El teorema fundamental une las dos ideas: ∫ₐᵇ f = F(b) − F(a)."
  - "Herramienta: primero, ¿es inmediata (tabla) o casi inmediata (falta una constante)? Si aparece una función y su derivada, cambio de variable; si es producto de un polinomio por exp, sen o ln, por partes; si es un cociente de polinomios, fracciones simples. Para áreas, separa los tramos donde la función cambia de signo."
  - "Documentación: Marea Verde Matemáticas II cap. 10; Spivak, caps. 13, 14 y 19."
exercises:
  - id: integral-definida-de-un-polinomio
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula $\displaystyle\int_{{{a}}}^{{{b}}} \left({{f}}\right) dx$ con la regla de Barrow.
    variants:
      - values: {"f":"3x^{2} - 2x + 1","a":0,"b":2}
        answers: ["sha256:26f992cb9474bad13330f2aef0fa15217edabb0520f1366eccc941489e1a394e","sha256:08ef25c09e40943522e8f7d7b89afe056240fd39d25ed55f3f213657a8a89fda","sha256:d4ecb257c31022859b10d4477dc2d9506abbddeb6c34acc8017a312001b6f218"]
      - values: {"f":"-x^{3} + 4","a":-1,"b":1}
        answers: ["sha256:20986282a8603631fdd4f5ae4f613da4226ce615fdd6109456559b5115b6289c","sha256:2c3ab95521b5be1cffe8d6daf09596cdebcbbaec1da3425f3ee0eecb068e0263","sha256:92e7e517c7b59783beae1844ea721e853f0cdb3631d98fe22eb8b258e4abfa74"]
      - values: {"f":"-3x^{2} + 6x","a":1,"b":3}
        answers: ["sha256:7111958e5233e08058d9833d4f5a345f6d5de6dc396f5b886058aa233580b9a4","sha256:5586b14306ee946da9d078f95c0dc1a744ffb91bade8a8482dd1dbabbc9c45a1","sha256:37baecb6d36e5a988a93d107a2fb53bcaae0ee553fee4fbabba145951c3bf235"]
      - values: {"f":"x + 2","a":-2,"b":4}
        answers: ["sha256:aa5c816a566e89af466c13bf240fd2a5eccf29c0c3112e2d056cb7d2a36d2034","sha256:9b294f7e41c2b8743cc9006dbd97340f7b948caca182506979b823a5222f7a9d","sha256:3c5229b83960b72cfd91bd213d65046c05ba6393936bb6c508ad59f54076dd19"]
      - values: {"f":"x^{4} + 2x^{2} - 5","a":0,"b":1}
        answers: ["sha256:8ebd7258d11d5762792bea3a6edc4299c45001f115abd63b1087522525c2d7ab","sha256:e12a10a2c06caf01a7d28d6fd161306685e98c2b441a1185bb514ce1712593bb","sha256:c3a8f05ccaa3f0936f86ec2b6e218c8a2ddd6418a676ad0ec021a0e1b0bc381b"]
      - values: {"f":"4x^{3}","a":1,"b":2}
        answers: ["sha256:e0f8f57aba388531fb321087046708b939f0dff9f676115145bee918eec1ae94","sha256:d7048edd80f194e683d05ada4e7873dc517540d42d69b77e2e43b0ef732b8263","sha256:fba21e7875a974e4c1d3161882fde53e6d1ca69bb421ba04d619303eb9c009cb"]
  - id: primitiva-con-condicion
    tier: 1
    type: numero
    sig: 6
    prompt: |
      $F$ es la primitiva de $f(x) = {{f}}$ que cumple $F({{x0}}) = {{y0}}$. ¿Cuánto vale $F({{x1}})$?
    variants:
      - values: {"f":"6x^{2} + 3","x0":0,"y0":5,"x1":2}
        answers: ["sha256:02731398523f471839f9f46616a0348efae1944950cd496a87e2fca18e95ca89","sha256:361d5bf4d6ce750d3013b72522cfe71368a1f595b2d812d9138a25bb9afa20f0","sha256:b995659284796d3a34fa8097b1dd223f5636417fa03a139ba7d3d96a49e80122"]
      - values: {"f":"4x","x0":1,"y0":-2,"x1":3}
        answers: ["sha256:12c8eab39b8c8a33ac19a7d61cee92bdf3f49ae87e79ad6aef9034998e8f55f8","sha256:8d49f2cc39657a39788824caf95b5376dde9b1548b2eed5c8945fa22709a4da2","sha256:4c66d5fe05e8cb79e1a6c721aa68275b809a508aef8c8a807c941c49ceda7a9c"]
      - values: {"f":"4x^{3} - 2x + 1","x0":0,"y0":3,"x1":1}
        answers: ["sha256:bc35807b7a3aff386b720a2047076b77212f4bc35219a91b9fda7db32045bd5c","sha256:fbc0e99e7ebe48ec0b7b888ec4b4a1caa3ce5e5c33ac17b9320c433e5a0d6129","sha256:2b0beb84209a2c6aa42dae9d6be9f096840261bb036bd68cd424bb2e1040b08b"]
      - values: {"f":"3x^{2} - 1","x0":2,"y0":10,"x1":0}
        answers: ["sha256:658b36fcd739bf6424a036ad6bcee0fa0f6297703f9911f8492ceb18a6b021d9","sha256:39c3a46fd8a1808e163ed6158998105d07425c3fb1343babf52a60809967392e","sha256:87717542e2de56225b70e84ce5fa503065816decba1e01df8a4372aaff39b07f"]
      - values: {"f":"2x + 2","x0":-1,"y0":4,"x1":1}
        answers: ["sha256:c8819d25412dfed234b5fab0ca2aa7073d310959feb029b98cc20acdfea36b7e","sha256:19327127d15201e348590f11b02fdce1229f2321af2a7c546904dd6071dd35b2","sha256:deb6afadeab8018f0bef7f8abab0d44cf399c13a69cff2bcf02f9a865a156b3f"]
      - values: {"f":"5x^{4}","x0":1,"y0":1,"x1":2}
        answers: ["sha256:250d7ea39ec1751d5a3d5b3d900a15b6d4df572641b6ec10dabfa700308b3b35","sha256:5ee8a292b383e295804be6c4aaef0d0d81721caf458709936afb732c02e8364d","sha256:06042554f9316f69d1155c0a1ac541c7fef5d2b361caa212c07b9ebfe1c64b21"]
  - id: cambio-de-variable
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\int_{{{a}}}^{{{b}}} {{f}}\,dx$ con un cambio de variable (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"2x(x^2 + 1)^4","a":"0","b":"1"}
        answers: ["sha256:a1012ef1a2394f6f2eb673884e8feb55f461669386bc9314e30f892b5a83a210","sha256:de5d29898f30d16a7bb73b41ba7f9d3c509d35fc6e5911422ba80331975c3911","sha256:963e31af636ec2540af52f4a9b3ee60f5098b338868089d10e9e8b23f55a5c1b"]
      - values: {"f":"3x^2 e^{x^3}","a":"0","b":"1"}
        answers: ["sha256:2e60fbf61590613a7e61cca5d68ae5d1892d528487b0503a147711c58b4f7b2d","sha256:d0d86b6133d5abb90a7ec3bf3d1e01f7430a5feb4e26056675528e2768bab90f","sha256:fb181eea2d7be3b6c2afd138e0fb7531a4d2990b55b931b028b6f0a098ae22f8"]
      - values: {"f":"\\cos x\\,\\operatorname{sen}^2 x","a":"0","b":"\\frac{\\pi}{2}"}
        answers: ["sha256:d94c2eb7eaa1fc91df6b775ff71ffdc6c87c4e8430f1165cd2a6e17c3cc0e3ba","sha256:137bc297919c49255408503765a0ea283f69ebeec7e50c0ac79fa25f8bef91eb","sha256:f4013686f9cf416e7c860a38f05f67b3d0e3d6c68cfeb522e4d8654d8c0ac91c"]
      - values: {"f":"\\dfrac{x}{x^2 + 4}","a":"0","b":"2"}
        answers: ["sha256:ed20b37565133876d974b9435d0277ae5eee5463b2eb0786559c52046b29a004","sha256:7b2fb32f674cac4e7890bf629363ad43e931999e0d308b697febb417f5092555","sha256:196f2fdb1106ee82f8352bcea4e8ca3511365c257096a340c3206663ed85066b"]
      - values: {"f":"(2x + 1)\\sqrt{x^2 + x}","a":"0","b":"3"}
        answers: ["sha256:b382b2f2f02259c3dd46cea28ef15f28f2aab17906a5fbe82c4f8ecd8fbb6331","sha256:c3f1616e9d41fe96c771eec498b26f7f3a9678655166771a8f5d40bfc376c485","sha256:f55962b3da29eec46836386276ffcfaf553a236ffde43c40b026402812f89d3e"]
      - values: {"f":"\\dfrac{\\ln x}{x}","a":"1","b":"e^2"}
        answers: ["sha256:5eb2df8bf99414e61bd66e72a3f3bcf3ac2c98ddba7b1a72f112bc95fcdc2ecd","sha256:4ac1bfc2884f4eb71bb553ef48641c271200953f4f7c04f494a46c9a114dbeca","sha256:197e1146c82c61e0b54ad12b81dfb7580f2956e11076781491403e69e0a33251"]
  - id: integracion-por-partes
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\int_{{{a}}}^{{{b}}} {{f}}\,dx$ integrando por partes (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"x\\,e^{2x}","a":"0","b":"1"}
        answers: ["sha256:c494d2e3d2624fa694d32794c3758861064ac9938fcdc51acee215c8f8be3b9a","sha256:4615c773eae29b6ba8d9c1a457b9c615ba57804eb8b74d88e51716597c67b179","sha256:a4b0068f65332126818b9f6f33e16f76787006fbba7321d25f713b0ab24ac02f"]
      - values: {"f":"x^2\\ln x","a":"1","b":"e"}
        answers: ["sha256:66c3bd3e1a81aa647ccaa14dde87b1f813f7a872b208e3c6560ff1380d87e6d9","sha256:f5f9189c51a030986f4d5d5c5574d13fc524e556253ef3d869b58eabf1dc651d","sha256:0c8d8f5d5b1a27c5ff8dec3da858842d56f489eda3d6ac0652cc94d9803fbc5a"]
      - values: {"f":"x\\operatorname{sen}x","a":"0","b":"\\pi"}
        answers: ["sha256:4127235a1f03ba3c0cdf721bef469b4d250ce9ac6b407836712a32284411f5e7","sha256:87b865352318a8a2caad463e65ade3c8c443d606236e631f86faf6352ce30b32","sha256:fc66097f717213034a26b43100c4d3cbd32f3901e4e7fc24746c852089d39cfe"]
      - values: {"f":"x\\cos x","a":"0","b":"\\frac{\\pi}{2}"}
        answers: ["sha256:2da2593b0b764e9374c393467587aa54da88a4db1a84774cd2586edbb19c2671","sha256:1e177c7bc84a2d27d0428d9437189105b4b51718055da7206f921040e453166b","sha256:5375d080f7fd1b15d2f6304af75509fa3eba086487589d5ab76d67ee54f14980"]
      - values: {"f":"\\ln x","a":"1","b":"e^2"}
        answers: ["sha256:d2dd9046f6ce04ca8f101da5938f88137a7f8e7a79f18937d91d8a2fc6f03173","sha256:e5a6ccf0a87e0f05ff5a7d820a7de2e66fbd26959b815d54e3ae30454ac77e9b","sha256:2a8a7bfccfa018e59809bb3c3a056866fce69ea01598ddd5d311952f85f33347"]
      - values: {"f":"x^2 e^{x}","a":"0","b":"1"}
        answers: ["sha256:f010317aaedc15c52003d85997c9312107d3e182a9b1e034334f55aed405b720","sha256:c5ef74bc417eb19db7851159684e03946c3fd1590461ecee144d67d853ee41c2","sha256:5e9bf753aedfbec2b8177c5523605e25c43b662f3d5a66fa0acee0c8aa0144ef"]
  - id: integral-racional
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\int_{{{c}}}^{{{e}}} \frac{dx}{{{den}}}$ descomponiendo en fracciones simples (al menos cuatro cifras significativas).
    variants:
      - values: {"den":"x^2 - 4x + 3","c":4,"e":6}
        answers: ["sha256:d18a7e54fe8ca0e0857b4c7924b7e62bba02ba3d46093454173f951191fa7add","sha256:f85d08590d10d5734189eabc1ccf2d0a94be5bf6911c48974e0bdd9ed2e1179a","sha256:43da7861367139909800bb1558eb36fdbb0edb7fe6acffe7fb11bf7acad00fc9"]
      - values: {"den":"x^2 + 1x - 2","c":2,"e":5}
        answers: ["sha256:eb176d332316ecf938003afd8c633d70c2f56622b3f8b8ae4869dae934a6af71","sha256:8835b2a616f42f1dbd001e260d939838b7570d4ce2657091ca1b1860b736b7a3","sha256:4e7c7173d089c36cf0b349ebde4599dc4dc86123e90c7bbcbe1f8c4fa6135210"]
      - values: {"den":"x^2 - 2x","c":3,"e":4}
        answers: ["sha256:8932f7642ef2d92db3fd9fa7edc01b8989bb43bbeca48c4df63025d65e5d740d","sha256:4d30435c42aa5425959492eadba643c1bdfd21df347d3fbe63cb93fc22482bc0","sha256:737b44603abb54fbe9e137f045914e532e7c282bf03b196a3ded1359a14d9fc0"]
      - values: {"den":"x^2 + 4x + 3","c":0,"e":1}
        answers: ["sha256:0a0c2554d876d3b93f1a00f87c1f2c424ba4eed51ef3f5d296fe68f579286e2b","sha256:a492d777eb62a5b9e154383d658a93d07a1f29014a27be48157b6c05ad7039dd","sha256:06ace4cc03342f620d1dd4bc167e8beb07f0078f72051f99422f5ec2e0f0dbe6"]
      - values: {"den":"x^2 - 7x + 10","c":6,"e":10}
        answers: ["sha256:e7d6cdb3ec713d3015d34c031f09d27d995b398e52e562e0e102f8ee44e35833","sha256:2bf070dc3c1e6482b5ce8719f7507056ee751c76dc6c8c6b7feb2793f0f32719","sha256:7223a0614a1a3586cd3a8adf3bfdf6b0b754e4df282e42ce02ccaa641452683e"]
      - values: {"den":"x^2 + 4x","c":1,"e":2}
        answers: ["sha256:c126aaa2412bde65bebb1f3e27cd343ab4b9acd2f48ec5a13ea88590ff50259b","sha256:f89f32ef745084b5834290c0db4d58c0b431735a5882243afb968ac73866a63a","sha256:c9d2954a462dd17d6025014136b5bc8936de7404aa6519e23800899662477d8e"]
  - id: integral-trigonometrica
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula $\displaystyle\int_{0}^{{{b}}} {{f}}\,dx$ (usa identidades trigonométricas o un cambio de variable; al menos cuatro cifras significativas).
    variants:
      - values: {"f":"\\operatorname{sen}^2(2x)","b":"\\frac{\\pi}{2}"}
        answers: ["sha256:37892a72c012f50bcbdb834349b47c11dba95485adc0b42aa29669de5fae6257","sha256:9433b29a5ac903db501d989d13e14a5548dca6119fa8608d8c450c17bfe02240","sha256:deb1b045400e6bf33f178ce98f28b1bf49512128c44bb59b626491d884b5aa8e"]
      - values: {"f":"\\cos^2 x","b":"\\pi"}
        answers: ["sha256:f1e76a53f5d509bb5939fd96a6e8d1d5d1d18d08137a785200141c5be7383a97","sha256:e6d9d8f16c752745fcc92f921425ee3e78db8f01d68be49449e46c3822e2c727","sha256:78732ac091c9309416bd2df49d3e256358426af95605af722837f90a57e524c7"]
      - values: {"f":"\\operatorname{sen}(3x)\\cos(3x)","b":"\\frac{\\pi}{12}"}
        answers: ["sha256:d6aa0f78219ba2fb29509bbee625d45b381e63f6ee2885ddc748a80a767df28d","sha256:e2c66960966f61641fe55f1a803b615cef2d7c99cfdc8fe5e0bee76ab03c52b5","sha256:7489d0cbf90f522ccc2b7ade741f6a849c87571ae46f44a2e5e6dccc350d2e09"]
      - values: {"f":"\\operatorname{sen}^3 x","b":"\\pi"}
        answers: ["sha256:8a771643fccf72351c0a13a4de2d0aa65136ccedbc6b52776f98c87c520284e2","sha256:de23e3c89800f249b2e420b363dc847a9643a0d91e57c315a2cc8e9545b4ef5b","sha256:66f4de48e43af2e295a69c9f418318273d461e30b2b92832ca247dd55638afa6"]
      - values: {"f":"\\cos(4x)","b":"\\frac{\\pi}{8}"}
        answers: ["sha256:7d45add514c362febe01567892156e98ca92dc6b46a48388cd731fbd35fd69a0","sha256:b226a6055072bde617be6110db719453e1a502fc6813d1ae8538f947cb722c92","sha256:a9ca6ac14ec0bd9ad915d57e17af51468376d3d79d260a7ef343d3a597133cdc"]
      - values: {"f":"\\operatorname{sen}^2 x\\cos x","b":"\\frac{\\pi}{6}"}
        answers: ["sha256:8407b81f97a0bc9bd4fb8f5d47b5fc6bc412a27fe9cafd91530546f82f7aa2cb","sha256:1cad8da50cc152e36fcf60ec4529168895d64bd98a325e7cb37d5148cecb228d","sha256:131718282ce2a8ee9bfc386bd0946f3928315ea45f1c9887921c73127d54839e"]
  - id: area-con-el-eje
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula el área de la región limitada por la gráfica de $f(x) = {{f}}$, el eje $X$ y las rectas $x = {{a}}$ y $x = {{b}}$ (cuidado con los tramos en que $f$ es
      negativa; al menos cuatro cifras significativas).
    variants:
      - values: {"f":"x^{3} - 4x","a":-2,"b":2}
        answers: ["sha256:7b9856e301da4cf38504492e96d8d2582fd4c37bf54f446933cf9725f8142e43","sha256:ae0d57289cb557c471d7151d3df2c2e45861b95818f44b10acb8a798473ea95f","sha256:20334b8966273002a9a47860c45b94f18778beea86b7cf368c0f5a9bfcbc4489"]
      - values: {"f":"x^{2} - 2x - 3","a":0,"b":4}
        answers: ["sha256:176d61dfe79edfb8a2f67d728f127320bee3bf37318f97b2b980a1bcf654d233","sha256:c30868e5a6a2b1e885c478c73a1e308406d71e329beddcfe64c89773b9606588","sha256:4746aa62b9f5ca5b8fd051631834abec1a8753d5bf3d4acf8a4d0224c76bec27"]
      - values: {"f":"-x^{2} + x","a":0,"b":2}
        answers: ["sha256:5657412bea69b6e1ff72432c6d02136c94f35004bed7a9b36ed9079e0b0c8dee","sha256:11796c464efd51a21f9e01d53a11b1df701bf06e51ef5485f24273e2ed08fbc8","sha256:87a1743b761663cd2722b5c9f9333ca3e32b16e003fa8cf2249d23cdaa44d11f"]
      - values: {"f":"x^{2} - 5x + 6","a":0,"b":4}
        answers: ["sha256:efbc40e809db62047a4ca83f269e2cb9637dafa0f8ec623f0f6c95fe95f13ac5","sha256:65e1efe9dfc90518a5e5f28224f2cc9a8db44ce881d48ca50badc1e1de7aecac","sha256:8cebc7e001c935d306e6ab1049de585122bd9dcd10760fa8d811078485b3d8cd"]
      - values: {"f":"x^{3} - x","a":-1,"b":2}
        answers: ["sha256:63c7c6e5dc552aa172c29a7ad824604524f31d4c65fa50bdb8ce231f1319bb8e","sha256:bac4756b03aa1425b0aa72e1ce320a7bdb162a695b808374c90218f88e72c36a","sha256:c134b2759b6e72e38fc1538dfe4a1b337c668e98dacc2b773a8db3a3764bac3c"]
      - values: {"f":"x^{2} - 1","a":-2,"b":2}
        answers: ["sha256:d979636892911f7b2edc2e40a6b250d3245381ae4474a9c5b3d1fc39d5c5bb3b","sha256:21ccb822aa8d49a02c3dea75b5c4a3e2ccc5c34ce0ef5d1609dfbb48868c583d","sha256:75ab475632f80eaded39f25d90f61d2e9c58297c18171e3204c307dad4ed61e4"]
  - id: area-entre-curvas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula el área de la región encerrada entre la parábola $y = x^2$ y la recta $y = {{rec}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"rec":"3x"}
        answers: ["sha256:fb6fcc22e5e3689c44a28f2b1f3dc1965e7ff9d854eb01ea26a3708fb72f9af9","sha256:9cc31cf56bdec527d235ba207ad4e238bf30b8d786f51613a24fa1caf237920f","sha256:f8afa04c3221bfc8a8044edb3a10fe66ea4ebc689bed585f8b63b3e7192c2bfa"]
      - values: {"rec":"2x + 3"}
        answers: ["sha256:a7b49a608acedb83904973eeb8fd6b279da46b7a2d6e90bf7452241a9c15b013","sha256:3fe2683cbddce69d4cbe1d9264f44ca83a409b172eb600bd7759f6a364e0fda2","sha256:823e5c7a3844368a53526e47bf3c55951cc30bd46894e4ee2479de43fb24d68c"]
      - values: {"rec":"7x - 6"}
        answers: ["sha256:6fcdb5af8743497e83c718239efe79570a6ad6f72dab266806c2ddf32c439db6","sha256:a1a6a88a5f0caa81d6a552febd6a1ee99770a94139a51118be7cca73668241ba","sha256:8542635e3da972cdafc47cef3f09c892d8d47c11ef1adec330129936b051f736"]
      - values: {"rec":"-2x"}
        answers: ["sha256:32a904a32a34ad3ede1535975d301019b06a23506f7ffae9ec152bbce1b30a7f","sha256:929cb009921efecaee8d78f437190676c3b5da169d84067e327a8772dc9a7ec2","sha256:9d7bef3d5c37c1f9b80006d6407c9f4a71e77fa65da901d7fb25c28f12d12349"]
      - values: {"rec":"2{,}5x - 1"}
        answers: ["sha256:b59c474d3dd1655ec10eca201b54800117c984b6e602cf70560d0ff8ca9a0b7f","sha256:74b3dec9128200441cd0ff0ec2d39b1ce5c492eba798cbfb1ca67eea844b5b68","sha256:2c88a59b582808131002c4063a309e628b984f4023f28436a5540e1681a93fae"]
      - values: {"rec":"9"}
        answers: ["sha256:1523ab5a3e28b33ba1ec12e448acb06d33447834aeadcdf4130be34807438bc2","sha256:d62daeefa237ffe6138579ee72d174ee5bba153a6d4dc7abe62a2880dd7fc7da","sha256:0eeaac025bb4ad1c4823d9dc46154a6fb44018a5a95b8d74c2e6a3977df22fd4"]
  - id: valor-medio-de-una-funcion
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el valor medio de $f(x) = {{f}}$ en $[{{a}}, {{b}}]$, es decir, $\frac{1}{b - a}\int_a^b f$?
    variants:
      - values: {"f":"3x^{2}","a":0,"b":2}
        answers: ["sha256:127adfd162a71d8e11fe0a53ee8a201144c3d420f039120e77d75ce69b1fb24e","sha256:7ed73bc875800bf1f41f912de131f770caf4c2fce54a40bb9ff08b0dd678f7e9","sha256:6c7b0e6ce348b4fcd3e84cfacf3e594c7ad3e41a4d9906815d9bf472b2242057"]
      - values: {"f":"2x + 1","a":0,"b":4}
        answers: ["sha256:1456925c2a01738a8a8d99d5376555e55d61509e1a867ede972a91604da24f0d","sha256:e0016e07a924601657e42db9ec17b99b1435d00036afdfed8cc2d249ed2c1ddf","sha256:9680c092f15594b260d269a30ead73cb2807c3d44bdaa7f50b6dfe5965838109"]
      - values: {"f":"x^{3}","a":1,"b":3}
        answers: ["sha256:ccd3a786a88dafce23420e61f2f5f6629fedd61d50418d95f1167b0d57a73272","sha256:ea51089f07a80e4221f77b4e75fd50003cd754c38ef02720d109609d2926eb3a","sha256:050438a2b4b1555173a823c922a94bd8fe26a817cf5e6e468cdcef479f4de17d"]
      - values: {"f":"-x^{2} + 5","a":-1,"b":2}
        answers: ["sha256:731dc401690cf0352eb6a57e1d31999ab9c70d24f6cfd42222c3e203b0a551c0","sha256:52d36874511f4aa32ea4dbe47faf58e23104073ba7820a264ad7957668ec0b54","sha256:97446f5907651b87d356e20a06aa3b243198736c46ddd85419c9a390d69192c7"]
      - values: {"f":"x^{2} - 3x + 2","a":1,"b":5}
        answers: ["sha256:2e650fd805d78ee6bf4c2a3c5ffabdb19cdfd6a4713ac85a056b38989984b17f","sha256:c7ac22aa4edddafe8c191cea8cf6b67fdcc4844a760daa3d0a91e74c31bb8734","sha256:ef292a1bc9dd7fe4683eb7b3b9ce5854f2f9ba9fa4af809dc192316d27eb6bf4"]
      - values: {"f":"-x^{3} + 4x","a":0,"b":3}
        answers: ["sha256:1e51cfe600f079c69772fb5f91ec4dbcfbb27ce2849a710c4a60e586338a1c80","sha256:830632a43929817006286ec0ac3005bec82e9a4108399f52cdb90fb4d7f11a8d","sha256:2e22bcd7154526e8a7bd382a1ec8be848b4cb600d3d25a8399e7425ea8ce8cee"]
  - id: volumen-de-revolucion
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Calcula el volumen del cuerpo que se obtiene al girar alrededor del eje $X$ la gráfica de $y = {{f}}$ entre $x = {{a}}$ y $x = {{b}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"\\sqrt{x}","a":0,"b":4}
        answers: ["sha256:8d2939a8381d0762ad51769a3bbf80ab73e5a063db639f7ff57a61836e53eb51","sha256:e310df687e652a76c4820f1da99c8badec97419dfb9c137ef94effce24ed6287","sha256:f3a9b86d7d2e7216df18f47e19357013e45aeff12744f03a03103cb1235f299b"]
      - values: {"f":"x^2","a":0,"b":1}
        answers: ["sha256:201fac99e473f2a64ff5161d3872cad0ab5a101c5bd7a7e66b2ecbdb5e297b63","sha256:8816d48864f1c580e2e9e766dff1c992789b3dae5a3c20bc4272bdfa6b572ad2","sha256:0bbc52ebd8f3e9406e5f7d493b5e93a6472982bbc35a0e6e1e70f5e5df8b2fd8"]
      - values: {"f":"2x + 1","a":0,"b":2}
        answers: ["sha256:1f43596baea3d4b7247e4b5936408c5968baac5c7632b28d300b49c1570667f9","sha256:7aee419d33b04da6418bf63d4805b4481a8e5e1d50925e2336e3a4063d6af0a2","sha256:a0c1163571dfe60ff1313e2436f77a2da81e870c65ad089d59e3307bb1afc6e7"]
      - values: {"f":"\\sqrt{9 - x^2}","a":-3,"b":3}
        answers: ["sha256:25bc0a94a20e325fefd79144782a7ff5c4de3eb9acfb77600908802469da93de","sha256:0f97293b45791d5d78666836ac8271da365d0aee08e8f2d08108b9331b29b9b7","sha256:62df9b05b57df97a3506dc5a297629e30709fa8d627a1761dcb007131fc29c60"]
      - values: {"f":"e^{x}","a":0,"b":1}
        answers: ["sha256:6d46fe6d0a90869d4d79b30159bfe7e46ca97e540e6f450c8e97fa416d3a5ce0","sha256:95cb70bea9bf721f563fc4cc09525a307d402c463456c5b4c85e071938a3870d","sha256:a39fe474a8b27b952c650a3f7689f3d411e3993eedc5c0b008a73a75ee2f5fc4"]
      - values: {"f":"\\dfrac1x","a":1,"b":3}
        answers: ["sha256:d8b28deee024cf58d28d3d617a69261160cab1493effc2424bb3605ff431927e","sha256:ebd92239d4448dbb7b16078d4bb7dec4fdebe18e1de1f88fc967265e352aef2d","sha256:616fcdbdf72a69b159a4fda1e939f6a223ba6d7e2d7185b1855e34f507fa4942"]
  - id: teorema-fundamental
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Si $F(x) = \displaystyle\int_{{{a}}}^{x} {{g}}\,dt$, ¿cuánto vale $F'({{x0}})$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"g":"\\sqrt{t^2 + 9}","a":0,"x0":4}
        answers: ["sha256:713ea413b095f8f2c3c967ca5f0e9ed3c22d7babb36e8801e52fe94a3623c053","sha256:ace0a07c98b947e5df8682414e22a2f2df6034998f7756a04cbc72ade668b7f0","sha256:9e7293a83f12cc5ec56986e86a0041003509937dbdba468c9159e84ed7d31c15"]
      - values: {"g":"e^{-t^2}","a":0,"x0":1}
        answers: ["sha256:ba5419336f74de109c615e7c810613b655bdaa5487019877dce6ce4a7c1a4602","sha256:6b59080b6cbb7abcfd4efaf58f3e59a8c973e71fbc5a751fb774458b5ca8fb1e","sha256:6e24710dc0f21cf17f3876e9cd273e94c395f7343665e94b24bf5dabe9c65cca"]
      - values: {"g":"\\dfrac{\\operatorname{sen} t}{t}","a":1,"x0":"\\frac{\\pi}{2}"}
        answers: ["sha256:cb19fcf3233351943746e6c619aaa8947581d2c0e592185cbb8334458a2e52a1","sha256:5dc8ed5a7de7d61488f03587b120dca7368abd4f2e6136fbb9b18b83a394b4ed","sha256:70a227f6f5b47d648b3127b4dd49653be60ed965b57e2aca29aef881a0efa7c9"]
      - values: {"g":"\\ln(1 + t^2)","a":0,"x0":2}
        answers: ["sha256:99dd5b012f056a5cf4426067583fd83b01fac510088aa5aa450fd3c90880206c","sha256:37e343647a38165559694ea6488883b24fb057afc08ba0e7f5bef10097334f70","sha256:4f3002114d4d1bc16c30eb4234d31c7af56a8cf0f8bc7727336b0a1e3aeecb18"]
      - values: {"g":"t^3 - t","a":-1,"x0":2}
        answers: ["sha256:82d0d5676eac2d9e9b1ec29469edaa190f35434fc9a86548a595f796f67e82b5","sha256:e99242e5cd25a82ab8222fff2e180b97500e6074e781c2cbd40ed97ba811f813","sha256:b34ae3b20cb96acae5fe6221cb28be89e8b16de1f0c05dc7936bef7fd3d295ed"]
      - values: {"g":"\\dfrac{1}{1 + t^4}","a":0,"x0":1}
        answers: ["sha256:37a2817600b9557bb030d542eac0d43cec1a018755e7d3eee12414f2ac1d3210","sha256:1178d3969e722187ac3dd899b497e72dbd3088f5a6a27bff0211809d17085f55","sha256:6630a8455ec14de88573c9cf60ce7cfd79cfd1d7072446d286766d6c2bf0acb8"]
  - id: distancia-recorrida
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un móvil tiene velocidad $v(t) = t^2 - {{k}}t$ (m/s). ¿Qué distancia total recorre entre $t = 0$ y $t = {{T}}$ s? (Cuenta los tramos en que retrocede; al menos cuatro cifras significativas.)
    variants:
      - values: {"k":4,"T":6}
        answers: ["sha256:6a37e77cd9908329c6b35723438ba6e8d7ace0bdb5a7ef0a310fc340bb8d0eb5","sha256:7aa93d44ecc374ab05d1c91d6582296424b72804395790b6a9903bb788f29707","sha256:142d7dbf13050277cd9ccf374eee38c9e896cb329cb58fc8a3b2a6a0cc315453"]
      - values: {"k":3,"T":5}
        answers: ["sha256:e2d103b558726c8d77345061ba8df489706b15f33902ae4da47b96c5c47fd601","sha256:b2bbb60936d2e984b25759c0b1b0c2f8e0abbc2eedc24e6990a157bdd37db2d7","sha256:2544b01c992089849aed00b928e0a4ef782cf87c3585257f2b8683829415df81"]
      - values: {"k":6,"T":8}
        answers: ["sha256:7c8f3f793ce95ea4c741e95ebe3bc9c7249b3b41ce6713c6edefc40341c58668","sha256:592b407686984525d0ed8d814ae779d9875f75391b3fdf477726aa0d3132c5e0","sha256:12d72f97f3fb9fcfe38c0afcf480ac0f4f412449f54b29353fa645a155054d66"]
      - values: {"k":2,"T":4}
        answers: ["sha256:34a5f5ec680a4090b0334aa3876e53eb3088a4a66e2f9e12e54ed7665ab29b30","sha256:843851e4616b88c446be7cb419782c28a007e7d79d7500adc5f01042d8100129","sha256:d31fa0914b40e41b95551a868e6035363d059cf18346c6dce25415e81b564b4c"]
      - values: {"k":5,"T":6}
        answers: ["sha256:ed2dd76b9252f664654a6816160dc292c9d1cc2d8885310c31f2b671040ca855","sha256:1b70251ffa5830ac381ab2fc31a81109f7a3514467b64e04beaed7aeb4ccce23","sha256:26177f7fca7606f0bc6c7a5ec5275d7b111198c43709cc3e9433c6b8c25bd700"]
      - values: {"k":8,"T":10}
        answers: ["sha256:9fd974448f0fb4d64f0d922e44402108bcdaf331ae8eb90cfe1214e1ffb622c1","sha256:8836e8a55313b9bcb2e7b72a00c7be898bd7145f5425bd74865930f7ff739a60","sha256:021c434b3b63d674bd7e8c73d5275efde76ad62e9aee8e30e9b8859386ef1d57"]
  - id: area-y-barrow
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica cómo se define el área bajo una curva como límite de sumas de rectángulos y aplícalo a $f(x) = x$ en $[0, 1]$ con $n$
      rectángulos. (b) Enuncia el teorema fundamental del cálculo y explica por qué la función área $A(x) = \int_a^x f$ tiene derivada $f(x)$. (c) Deduce de ahí la
      regla de Barrow.
    sealed: "gz64:H4sIAAAAAAACCn1Ty27bMBD8lYFAoLajGLGPLnxIk+ZctMcoKdYUFTOglg4frl1DH9MP6Kmf4B8rSMlpXKA9iVouZ3dmdg+FtyYGbblYFJPJiMaTCb4o1HqrawVxTyVWDwKKIVggOPvdetQKxHIdHUFU1a0ygbAT2Kc0STUhsoVXMGpLHNIvnJLh+IOforH5uQn5dZOhI2MTOaQb09d4D0PwsaWU7KPH8YdT5CumjbM73RKU6WMl9ilXc1BPjgyUT1fm+LPVQUFG4tpCMKoqWFSV5ibsxRSfKJcf7cZYpt4TwfurErMHUUJaHjr06cJYD7ULTrWZu1Nybf2iYlFVPrZfD3o56x5ThcaRhE4nWdswBGaM5XA8zLoDP867/n6I8Yhxgdm4O8y7P5k51h3m3J06z1hzUb4yH9TSg6zTiiueTEarbKHutfWJS9AcCXuI655uUiF8pccdmlEYV1VZhwTLwbJUHuL6XZ+X1BFTfKbvx1+8yM9xgfUYl0hIYtD61AwiExpH/ExnE7JOkzEYLsnrXnbxHhvrKk4clHWq7flsyViHVtXa/vF0S0alVzI1uxbZHyGTacEpiDx6IvcmprhNo6tVsn24zw2sSfZBse4VvRIlhOzPPcI570FOeZLzrpczknmJWjlsnG510NtMVjQJ7TrD3AkErTgNDqHVPjNzeks1lSB//ImXqNJ61LpRTrHUxP0WUGLmA3FQi1e37tLnAjdiihvb2hSnFL8SZcXiBktc3o1oLNIiiJO1KzRY4nq06hFWybOcNS3KwsWV07JY3B8K6XRQTttiUdwqL51eKRjyefXynr/ZW489JBkZDb1dMfE6mticL1WqlffaF4t5V55V+8gxEccb+5vINbWKAxns8Rx90I2W9Jcv2Xzzj0H7X8VbVUep8IGcs99OKK96J6Bh3qQ+/uJ+XQahz2Efut8RzFJsNgUAAA=="
  - id: r-primitiva
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es una primitiva de una función?
    options:
      - |
        Su derivada
      - |
        Una función cuya derivada es la dada
      - |
        Su gráfica
      - |
        Su valor en $0$
    answers: ["sha256:8b16c02f543e0ecfd089d2d8133be34af9cc811df0dfe76c9b5cc35500ca592d"]
  - id: r-constante
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Por qué se añade $+ C$ en una integral indefinida?
    options:
      - |
        Porque es obligatorio
      - |
        Porque la integral es un número
      - |
        Porque todas las primitivas se diferencian en una constante
      - |
        Por la regla de Barrow
    answers: ["sha256:00d892dc8c914680bfc77bb6f5de513555bbd6ce63b029e20389892190f9ced0"]
  - id: r-integral-1-x
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es $\displaystyle\int \frac{1}{x}\,dx$?
    options:
      - |
        $\ln|x| + C$
      - |
        $\frac{x^0}{0} + C$
      - |
        $-\frac{1}{x^2} + C$
      - |
        $e^x + C$
    answers: ["sha256:aaebddfb66d0fc77155858a3f0363edfefbbea7d0e0804e27a00632e3c86982f"]
  - id: r-area-negativa
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si $f(x) < 0$ en $[a, b]$, ¿cómo es $\int_a^b f(x)\,dx$?
    options:
      - |
        Es igual al área
      - |
        Es siempre positiva
      - |
        No existe
      - |
        Es negativa: el área es su valor absoluto
    answers: ["sha256:e8b2e6df888b67c70006ffd7feaa33154c377cf002fbf4dea93358b11e59cffd"]
  - id: r-barrow-rapido
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\displaystyle\int_1^4 2x\,dx$?
    answers: ["sha256:a02ae086371db713ffa870d38e2110eadcef63578c80c0ae82feca48126afd6a","sha256:9c45fc0bf2ecc77f3a11ac6df36f0a14d17c9af9d4c256178d902e36cab73ac2","sha256:b92c617314fbe8a98ec1446e7ac634b4c3996c49265ac25ae0f8ba498273dc03"]
  - id: r-partes
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la fórmula de la integración por partes?
    options:
      - |
        $\int u\,dv = uv + \int v\,du$
      - |
        $\int u\,dv = uv - \int v\,du$
      - |
        $\int u\,dv = u'v'$
      - |
        $\int uv = \int u \int v$
    answers: ["sha256:23b27ddf0c27ad72e7856f117d3695217af65dd7f68893a2611e92c0c0841f50"]
  - id: r-lineal
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\displaystyle\int_{-3}^{3} x^5\,dx$? (Piensa en la simetría.)
    answers: ["sha256:327fc2d4aaba886c494c988dd67ee896bffbc529edfb893b55c98620b0a9b11f","sha256:1da9adb24f802c69c8d4c5462f4424ef6a6919197228baed5e7912530b322066","sha256:9bd6d76ee29a501fccddf1fabd6a9af06266a431dd8549ddc4b26e30308b0280"]
---

# Integrales: primitivas, integrales inmediatas, cambio de variable, partes y racionales, integral definida, teorema fundamental, Barrow, áreas y volúmenes

Si un coche va a velocidad constante, la distancia es velocidad por tiempo. Pero si la velocidad cambia a cada instante, ¿cuánta distancia
recorre? Hay que **sumar** las distancias de infinitos intervalos diminutos: eso es una **integral**. La misma idea calcula áreas de figuras curvas,
volúmenes, el trabajo de un motor, la energía consumida o la cantidad total de fármaco absorbida.
Y, sorprendentemente, el problema de sumar se resuelve **deshaciendo derivadas**: es el teorema fundamental del cálculo, el resultado que une
las dos mitades del análisis.

## Objetivos

Al terminar sabrás:

1. Calcular primitivas con la tabla de integrales inmediatas y sus propiedades.
2. Integrar por cambio de variable, por partes y descomponiendo funciones racionales.
3. Definir la integral definida como límite de sumas y enunciar el teorema fundamental del cálculo.
4. Calcular integrales definidas con la regla de Barrow.
5. Calcular áreas (con el eje y entre curvas), valores medios y volúmenes de revolución, y resolver problemas de acumulación.

## Qué debes dominar antes

[[mat-aplicaciones-derivada]] y, a través de él, todas las reglas de derivación de [[mat-derivadas]].

> [!question] Test de entrada
> 1. Deriva $x^4 / 4$.
> 2. Deriva $e^{3x}$.
> 3. Descompón $\frac{1}{x(x + 1)}$ como $\frac Ax + \frac{B}{x + 1}$.
>
> Respuestas: $x^3$; $3e^{3x}$; $A = 1$, $B = -1$.

## 1. Para qué sirve

- **Física**: distancia a partir de la velocidad, trabajo, energía, centros de masas ([[fis-medida-movimiento]]).
- **Geometría**: áreas de regiones curvas y volúmenes de cuerpos de revolución.
- **Estadística**: en las distribuciones continuas, las proporciones de datos son áreas bajo una curva ([[mat-distribucion-normal]]).
- **Economía y ciencias**: acumulados (producción total, consumo total, dosis total) a partir de ritmos.

## 2. Primitivas e integral indefinida

> [!practico]
> Si sabes la velocidad de un coche en cada instante y quieres su posición, haces la operación contraria a derivar. Pero la velocidad no
> dice desde dónde salió el coche: hay infinitas posiciones posibles, que se diferencian en una constante (el punto de partida). Por eso
> aparece el $+ C$.

$F$ es una **primitiva** de $f$ si $F'(x) = f(x)$. Todas las primitivas de $f$ se diferencian en una constante, y el conjunto se escribe $\int f(x)\,dx = F(x) + C$
(**integral indefinida**). Propiedades: $\int (f + g) = \int f + \int g$ y $\int kf = k\int f$.

**Integrales inmediatas** (se leen al revés en la tabla de derivadas):

| $\int x^n\,dx = \frac{x^{n+1}}{n + 1} + C$ ($n \neq -1$) | $\int \frac1x\,dx = \ln\lvert x\rvert + C$ |
| --- | --- |
| $\int e^x\,dx = e^x + C$ | $\int a^x\,dx = \frac{a^x}{\ln a} + C$ |
| $\int \operatorname{sen}x\,dx = -\cos x + C$ | $\int \cos x\,dx = \operatorname{sen}x + C$ |
| $\int \frac{dx}{\cos^2 x} = \operatorname{tg}x + C$ | $\int \frac{dx}{1 + x^2} = \arctan x + C$ |

Con la regla de la cadena al revés, $\int f'(x)\,g'(f(x))\,dx = g(f(x)) + C$: por ejemplo, $\int 2x(x^2 + 1)^3\,dx = \frac{(x^2 + 1)^4}{4} + C$.

## 3. Métodos de integración

- **Cambio de variable** (sustitución): si aparece una función $u = g(x)$ y su derivada, se cambia a $u$ con $du = g'(x)\,dx$. *Ejemplo:* $\int \frac{2x}{x^2 + 1}\,dx = \ln(x^2 + 1) + C$.
  En una integral definida, se cambian también los límites.
- **Por partes**: $\int u\,dv = uv - \int v\,du$ (sale de la regla del producto). Se elige como $u$ lo que se simplifica al derivar (polinomios, logaritmos). *Ejemplo:*
  $\int x e^x\,dx = xe^x - \int e^x\,dx = (x - 1)e^x + C$.
- **Funciones racionales** $\frac{P(x)}{Q(x)}$: si el grado de $P$ es mayor o igual que el de $Q$, se divide primero; después se descompone en **fracciones simples**
  según las raíces de $Q$. *Ejemplo:* $\frac{1}{x^2 - 1} = \frac12\left(\frac{1}{x - 1} - \frac{1}{x + 1}\right)$, cuya integral es $\frac12\ln\left|\frac{x - 1}{x + 1}\right| + C$.
- **Trigonométricas**: con identidades, por ejemplo $\operatorname{sen}^2x = \frac{1 - \cos 2x}{2}$ ([[mat-identidades-ecuaciones-trigonometricas]]).

## 4. La integral definida y el teorema fundamental

> [!practico]
> Para medir el área bajo una curva, la rellenas de rectángulos estrechos y sumas sus áreas. Con rectángulos más estrechos el error baja;
> en el límite, la suma da el área exacta. Lo asombroso es que ese límite se puede calcular sin sumar nada: basta una primitiva.

Para $f$ continua en $[a, b]$, se divide el intervalo en $n$ trozos de anchura $\Delta x$, se toma un punto $x_i$ en cada uno y se forma la **suma de Riemann**
$\sum f(x_i)\,\Delta x$. Cuando $\Delta x \to 0$, las sumas tienden a un número, la **integral definida** $\int_a^b f(x)\,dx$. Si $f \ge 0$, es el área bajo la gráfica; en general,
es el área con signo (lo que está bajo el eje cuenta en negativo). Propiedades: linealidad, $\int_a^b = \int_a^c + \int_c^b$, $\int_a^a = 0$, $\int_b^a = -\int_a^b$.

**Teorema del valor medio integral**: existe $c \in [a, b]$ con $\int_a^b f = f(c)(b - a)$; el número $\frac{1}{b - a}\int_a^b f$ es el **valor medio** de $f$ en $[a, b]$.

**Teorema fundamental del cálculo**: si $f$ es continua, la **función área** $A(x) = \int_a^x f(t)\,dt$ es derivable y $A'(x) = f(x)$.

**Regla de Barrow**: si $F$ es una primitiva de $f$,
$$
\int_a^b f(x)\,dx = F(b) - F(a) = \big[F(x)\big]_a^b .
$$
*Ejemplo:* $\int_0^2 x^2\,dx = \left[\frac{x^3}{3}\right]_0^2 = \frac83$; $\int_0^\pi \operatorname{sen}x\,dx = [-\cos x]_0^\pi = 2$.

> [!formal] Con rigor: por qué $A'(x) = f(x)$ y de ahí Barrow
> $A(x + h) - A(x) = \int_x^{x+h} f$, y por el valor medio integral vale $f(c_h)\,h$ con $c_h$ entre $x$ y $x + h$. Así $\frac{A(x + h) - A(x)}{h} = f(c_h) \to f(x)$ cuando $h \to 0$,
> porque $f$ es continua. Si $F$ es otra primitiva, $(A - F)' = 0$ y $A - F$ es constante (consecuencia del teorema del valor medio de las derivadas,
> [[mat-aplicaciones-derivada]]). Como $A(a) = 0$, $A(x) = F(x) - F(a)$ y $\int_a^b f = A(b) = F(b) - F(a)$. $\blacksquare$

## 5. Aplicaciones

- **Área entre la curva y el eje** $X$ en $[a, b]$: hay que hallar los cortes con el eje y sumar los valores absolutos de las integrales de cada tramo.
- **Área entre dos curvas**: $\int_a^b |f(x) - g(x)|\,dx$, con $a$ y $b$ los puntos de corte. *Ejemplo:* entre $y = x^2$ e $y = x$: $\int_0^1 (x - x^2)\,dx = \frac16$.
- **Volumen de revolución** al girar $y = f(x)$ alrededor del eje $X$: $V = \pi\int_a^b f(x)^2\,dx$ (suma de discos). *Ejemplo:* girando $y = x$ en $[0, h]$ se obtiene un
  cono de volumen $\pi\frac{h^3}{3}$.
- **Acumulación**: si $v(t)$ es la velocidad, $\int_a^b v$ es el **desplazamiento** y $\int_a^b |v|$ la **distancia recorrida**.

## 6. Errores típicos

- Olvidar el $+ C$ en la integral indefinida (o ponerlo en la definida).
- Usar $\frac{x^{n+1}}{n+1}$ con $n = -1$ (la de $\frac1x$ es el logaritmo).
- En un cambio de variable de una integral definida, no cambiar los límites.
- Calcular un área como una integral con signo cuando la función cruza el eje.
- Integrar un producto como el producto de las integrales.

## 7. Resumen

- Primitiva: $F' = f$; $\int f = F + C$; tabla de inmediatas.
- Métodos: cambio de variable, partes ($\int u\,dv = uv - \int v\,du$), fracciones simples, identidades.
- Integral definida como límite de sumas de Riemann; valor medio.
- Teorema fundamental: $\left(\int_a^x f\right)' = f(x)$; Barrow: $\int_a^b f = F(b) - F(a)$.
- Áreas (con signo y sin él), entre curvas, volúmenes $\pi\int f^2$, desplazamiento y distancia.

## Repaso: lo que debe quedarte dentro de un mes

1. La relación entre primitivas y el $+ C$.
2. Cuándo usar cambio de variable, partes o fracciones simples.
3. La definición de la integral definida como límite de sumas.
4. El teorema fundamental y la regla de Barrow.
5. Cómo se calcula un área cuando la función cambia de signo.

## Siguiente

[[mat-calculo-2]] repasa y amplía el cálculo integral; en estadística, las integrales miden las áreas bajo la curva de [[mat-distribucion-normal]].
