---
id: mat-geometria-euclidea
title: "Geometría euclídea: métricas, axiomas, isometrías, inversión, construcciones, poliedros y un primer vistazo a la hiperbólica"
area: matematicas
trunk_level: 9
prerequisites: [mat-logica-demostraciones, mat-movimientos-plano, mat-trigonometria, mat-geometria-analitica]
academic_sources:
  - "Costa, A. F.; Buser, P. Geometría Básica. Sanz y Torres (ISBN 9788416466801): texto base de «Geometría básica» (61021105), 1.º del Grado en Matemáticas y del doble grado de la UNED. Guía 2026-27: tema 1 (espacios métricos), temas 2 y 11 (axiomas de la geometría euclídea plana y espacial), temas 3 y 12 (isometrías del plano y del espacio), temas 4-7 (ángulos, Tales, Pitágoras, semejanzas), tema 8 (circunferencias e inversión), tema 9 (geometría hiperbólica), tema 10 (polígonos y construcciones con regla y compás) y tema 13 (poliedros)."
  - "Hartshorne, R. Geometry: Euclid and Beyond. Springer (Undergraduate Texts in Mathematics), 2000, caps. 1 (geometría de Euclides), 2 (axiomas de Hilbert), 5 (área), 6 (problemas de construcción y extensiones de cuerpos), 7 (geometría no euclídea) y 8 (poliedros)."
  - "Coxeter, H. S. M. Introduction to Geometry, 2.ª ed. Wiley, 1969, caps. 3 (isometrías del plano), 6 (inversión) y 10 (poliedros regulares)."
ctf_flag: "sha256:9bee6aa1840709c1aab56f63c992bc73e6f754d71a18d6cb3e4a693074fcc685"
hints:
  - "Concepto: (a) un n-gono regular es construible si y solo si n = 2^k por un producto de primos de Fermat distintos (3, 5, 17, 257, 65537). (b) Con solo pentágonos y hexágonos y vértices de grado 3, la fórmula de Euler obliga a tener exactamente 12 pentágonos. (c) En curvatura −1, el área de un triángulo es su defecto angular, π menos la suma de sus ángulos en radianes."
  - "Herramienta: (a) recorre n de 3 a 10 000 y comprueba la condición quitando los factores 2 y dividiendo por cada primo de Fermat como mucho una vez. (b) Cuenta aristas con E = (5p + 6h)/2 y vértices con V = 2E/3. (c) Suma los ángulos y conviértelos a radianes antes de restar."
  - "Documentación: Hartshorne, caps. 6 (construcciones y extensiones de cuerpos) y 8 (poliedros); Coxeter, caps. 6 y 10; el texto base de la UNED, temas 9, 10 y 13."
exercises:
  - id: tres-distancias
    tier: 1
    prompt: |
      Calcula la distancia entre $P = \{{P}}$ y $Q = \{{Q}}$ con la métrica del taxista $d_1$, la euclídea $d_2$ y la del máximo
      $d_\infty$. Respuesta: `d1;d2;dinf`.
    variants:
      - values: {"P":"(0, 0)","Q":"(3, 4)"}
        answers: ["sha256:35335f452e36885233e7f83a877203079ec74a1a264221ba1690bd1f9316a910"]
      - values: {"P":"(1, -2)","Q":"(6, 10)"}
        answers: ["sha256:1ee0244e4fcbb3f763e1ab0922cacff90b8ca1c79135bc9dc8fb6575926705cd"]
      - values: {"P":"(-3, 1)","Q":"(5, 7)"}
        answers: ["sha256:37163d1518d3ac74bdb0eddea49761a553ff90c9eb3746edcc44c363e0fd572a"]
      - values: {"P":"(2, 2)","Q":"(-7, 14)"}
        answers: ["sha256:9905594dce0b6603f3a1575d5567961c6323cce9826ae1776d0b5bdc2012fb68"]
      - values: {"P":"(0, 5)","Q":"(20, -16)"}
        answers: ["sha256:a7c5dc4ba235be5756ceaf57a2a10c042ddd3be6ec325307108cf704003b3f56"]
      - values: {"P":"(-1, -1)","Q":"(7, 14)"}
        answers: ["sha256:0e82d46ee48fa214577607ca51dd662dc58083871e3670bbfe760e5e0d7b05db"]
  - id: es-una-metrica
    tier: 1
    type: opcion
    prompt: |
      ¿Cuál de estas funciones es una **distancia** (métrica) en $\mathbb R$?
    options:
      - |
        $d(x, y) = (x - y)^2$ en $\mathbb R$
      - |
        $d(x, y) = x - y$ en $\mathbb R$
      - |
        $d(x, y) = \min(1, |x - y|)$ en $\mathbb R$
      - |
        $d(x, y) = |x^2 - y^2|$ en $\mathbb R$
    answers: ["sha256:79720bef1f1462ab5493405bcc6c5cdf0e86765dad1ad7644b91ab69f7bbfa09"]
  - id: composicion-de-simetrias
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se compone la simetría respecto a la recta por el origen de ángulo $\{{a}}^\circ$ (primero) con la simetría respecto a la recta
      por el origen de ángulo $\{{b}}^\circ$ (después). El resultado es un giro alrededor del origen. ¿De cuántos grados (entre $0$ y
      $360$, en sentido antihorario)?
    variants:
      - values: {"a":0,"b":45}
        answers: ["sha256:cf5534fb74f4e25afba8383c91d903b1e8802c8713ab1833bb2a228b44aed33c","sha256:eebacd6640c55ddf5cde16bb9d42547a78ae6e708609e1566b81261491245fa3","sha256:5f3a2ea79b4bc24fbaff90474e8f87b2637a00d2840ead53c290aeafa8513111"]
      - values: {"a":10,"b":70}
        answers: ["sha256:52ec8ccfccd4427e215174ddcd055a427e06bbdc9761f535f455952f72f1a8d4","sha256:c1debf718fe0d93b8d69f4ffb21fd68a6c9326f78203fa0e532dc39c11e1be52","sha256:478719fcc439061194d5cf3f135ac0649182831666cf8567d2987a8fffa6bc42"]
      - values: {"a":20,"b":35}
        answers: ["sha256:b73f66ff660e360b7360ce876dd0f53c3b11397a1af2ba8cf8c0872accd3ceaf","sha256:4dbf4e1077a306ffcfd810e227248aca5b158a613676bf11bc5bc1baa6c00801","sha256:976325cf8a6056db9fd7e707b15696bfe2bc38b4e9b8037c085e7fb9e9e2a2a3"]
      - values: {"a":0,"b":80}
        answers: ["sha256:c52d069765f2ae60d59b8189517996f6f87d583527a834724fe842a8b0670cbe","sha256:6ae8c256edcce1e88ea823e03fc56d357b69f05613840c4339d96e3e1ff23470","sha256:d18219223228e0e4d0a1f7a73321a90242a7590d2c0bf08ba0012e03e490eae7"]
      - values: {"a":15,"b":75}
        answers: ["sha256:6640777190dcce14c2bcd776f925a74ca455f2ab6422c5e093b0d660cc59619a","sha256:60b522bec7620cd73d1c444d5ef94f0ff7c785c8a31b78e3fedc314a43a3d4d8","sha256:6bbb7344873e2750c660c25f2298df4f3d083c474b286ca89c768b89d7d88412"]
      - values: {"a":40,"b":100}
        answers: ["sha256:c0e8ada325c9f6b0186264bae9adfae055914ee04f62990f5345b4009e3f9547","sha256:d70f76a9af3b195f229673accb00a69aca41abad4644d59a5b2a3e8a3d78a047","sha256:99e274c2fea0a2c65a1b0ace39ea57c5b854d86e62ee15fedc730ee338f109ed"]
  - id: tipo-de-isometria
    tier: 2
    type: opcion
    prompt: |
      Una isometría del plano invierte la orientación y no tiene ningún punto fijo. ¿Qué es?
    options:
      - |
        Un giro
      - |
        Una traslación
      - |
        Una simetría respecto a una recta
      - |
        Una simetría con deslizamiento
    answers: ["sha256:23814afaca4000d62df88d4afe61d364ee3b89c670ff7d16083f3b3a4a48cecc"]
  - id: sombras-de-tales
    tier: 1
    type: numero
    sig: 6
    prompt: |
      A la misma hora, un palo vertical de $\{{h}}$ m da una sombra de $\{{s}}$ m y un edificio da una sombra de $\{{S}}$ m. ¿Qué altura
      tiene el edificio, en metros?
    variants:
      - values: {"h":"1{,}5","s":"2","S":"18"}
        answers: ["sha256:c48ad6bc67831d9760f19c399d1a1068706e2fb4e7c08c5b5feb1ec5c723b173","sha256:b68843b4f643716ddbba0d72ad7a3fafa6e19572a967f244f07e4ee1e9e069a0","sha256:56b1d06170c4b369469bbaad202b2201657f398f4250c0c60b95f8bf912118db"]
      - values: {"h":"2","s":"1{,}6","S":"12"}
        answers: ["sha256:6521a09f650502c0ad5dc546ab64cb65fa4ee964717086f98f5a4958e9ef7c7b","sha256:131c8c9aac65266ebd5a67a451613a0102fd41ee738d9dc95509956f37f0b071","sha256:900a72d4742526cc2258d23369c353eb36ce75ad7fe4d8f8533770298cfe58cc"]
      - values: {"h":"1{,}8","s":"2{,}4","S":"30"}
        answers: ["sha256:16a454890a6f1cf55f8ce60ab800a7156293e890fb69ab95e911a036aeeae2aa","sha256:3d6b85750423f32c74973e4ebf0ee09b678360450202a838fea5d18af42bac0a","sha256:d0b06445ab7c5bbd0b3b60d87b527acb4ae7efe4fcfb601fddfa4df9885e09df"]
      - values: {"h":"1","s":"0{,}8","S":"9{,}6"}
        answers: ["sha256:497a7e8c16d49a9bacc42f8d510abacea1f2a1ce624cdfaf2c154bbd1639b9a1","sha256:0d2cd13cca00364d016420c2a8b167e50e077534c67fdfe1bc5daa07b92dccfd","sha256:d671ffdd279f3c40e52dcca1da081474c272d8362eae624a3a13986cfa993505"]
      - values: {"h":"3","s":"4{,}5","S":"21"}
        answers: ["sha256:84878c8d636b20a6856c442c79faf9ee139f1473b0340e7648f8af6892bc2d75","sha256:16a24f05c6149f208fee62f96942a8913e3c2a6028ee166b320128c3763e7095","sha256:552e0a5fdeea2e00a94e04862df4117cb3fb5e79e16b8cabafbdb9689f7e89d7"]
      - values: {"h":"1{,}2","s":"1{,}5","S":"40"}
        answers: ["sha256:89f4ef63987f874d5382b5dc04af64bf2c6baf35208d5ab04854a19905cb6e03","sha256:6b08ac03fcfe041827230f4d152efce312b833bfbf74349ae04d035700a712b9","sha256:99cfec215e2906ff01fd1453c22f50943e39476b21f6d02f046c3df12ea0b3d7"]
  - id: potencia-de-un-punto
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un punto $P$ está a distancia $\{{d}}$ del centro de una circunferencia de radio $\{{r}}$. Una recta por $P$ corta la
      circunferencia en $A$ y $B$, con $PA = \{{a}}$. ¿Cuánto mide $PB$?
    variants:
      - values: {"d":13,"r":5,"a":8}
        answers: ["sha256:eaf26c137ae177db92569c7eb4d9248da4d23f9c6451a2cfbd6a9bf1142dbe81","sha256:146a6d2f0658dd0b6db355564c56760c6dd6356142a0acd610f2754c774b48a8","sha256:8ed1ad048704c839b009ee19b6714a42cb59ff5963bf67c90a9e6b95d7424dce"]
      - values: {"d":10,"r":6,"a":4}
        answers: ["sha256:33101882b78158f4a3a786970526fc0f644db9daeb64e6f75a236b616467a947","sha256:e5047de5b08027a0d1006dacd268342905f497a80a9f9615a013c624f2f33f47","sha256:d34c81a82b31299e63233b5d46a2be1aedd9f87ece4d86e2abbde87f05b73e44"]
      - values: {"d":7,"r":3,"a":5}
        answers: ["sha256:b68f37be738af6de0a40e2cda724c9de7d06476befa5c7c5177096822282732d","sha256:82f7add413b57fd85b400779649ace8b56c4de3b9e407953c21c00113524900a","sha256:125d0a3d814ce53d43a02c3c6b107b2db81a57f0fbdce75694c7184fef28528a"]
      - values: {"d":15,"r":9,"a":8}
        answers: ["sha256:f52994455068d2a53bac82b0f1107f03e54746afb96b7171a8ea04dfc2488884","sha256:3e5fd67ff1488cb6a8e82853868e91381dc7ccb239348cf0e1dc2fc94f51ef6a","sha256:a1b900924a0cfdd1d8eabebcb89eef3c8890b79937c4f2673c03a05f451de888"]
      - values: {"d":9,"r":4,"a":5}
        answers: ["sha256:d449135b037e7cb0aedb2d67f496c3f51f8fc6d27ad1aab763783e70aa686c9b","sha256:26862c2956b4b5f8fafd903beb667e4c80675b37662b167e7c36bbb949b014d8","sha256:2436c90882a2f57178368fb2e4936e0eb228a028cddaa3332e26a94643d32468"]
      - values: {"d":11,"r":5,"a":6}
        answers: ["sha256:043c407589a1b6981ed384236f928a23acb972f198575f4600617f11bf41d48b","sha256:c8a806673e29e38ce13eab2b1bd4b319586d8ace2eab55b5fa6cd801bdd0a5db","sha256:7d962d24a8de9ad9908e4c9db06472d4e0d4bd544cfbb3a7b994c82c1dcf0fd3"]
  - id: inversion-de-un-punto
    tier: 1
    type: numero
    sig: 6
    prompt: |
      En la inversión respecto a la circunferencia de centro $O$ y radio $\{{r}}$, ¿a qué distancia de $O$ va a parar un punto que
      está a distancia $\{{d}}$ de $O$?
    variants:
      - values: {"r":3,"d":1}
        answers: ["sha256:20d3c66c7e209f6b7716904b329a2babd62370546cfeec450d06f0b382753a04","sha256:325d9ba1340c8bd35ccc3249f28c9c6110468874e6f9a9e9acd082aceb86687a","sha256:1ec57aeccb1330ba46b710a2e23819bda9685b18db7c378e7d031b906d5db0bc"]
      - values: {"r":5,"d":10}
        answers: ["sha256:28d832957016485f0df177a32e4a2d850ebfe59a68d5bd9414065f879d5346aa","sha256:c096f836f114e17aa01c396a74170aeb1c87b97493d0952efcbb8764812948f5","sha256:bb3d104fa5315c78a56a163523714057ed758055524146cbf7627dd7c8684d6a"]
      - values: {"r":4,"d":8}
        answers: ["sha256:fe11607f7ca34f8e647966d5e52a54b9d4e8427d83ceb3d6aaac1d5b3181d680","sha256:72d186b6162ef07790eb2cb111bb773972823a0a8b49354bce2b715c15823b43","sha256:5745452d007f841faf90e994683f20a9dcccd5f29353f041ee620059a599478b"]
      - values: {"r":6,"d":9}
        answers: ["sha256:bd26a4ab7c6600a987be1725b088c77080b4d00ecdd0ae1eba0ed3626bcdb021","sha256:ee245317292df8de858270561a921cc130072a2f4601273d440d42e435c131b2","sha256:1790a07ce1aeb1f0f328f505a5d4e3aca521775dbbffef0c9837cff9d123ea87"]
      - values: {"r":2,"d":5}
        answers: ["sha256:3d0ee5f17bbebaa427fd486976975d1cdbc5d9323b202ee507fbaec05b66f34c","sha256:49167101a2cd5bc3f368a3ff9101fd738b70bd4ef709a24c07531ecd168f2b1e","sha256:f007d576dcff11333e9845f7f4c45aa653428330e1f783b410ecb0a9674d5f50"]
      - values: {"r":10,"d":4}
        answers: ["sha256:5b0c53dd7b68e70013ec10b149164bdab18fcf5e0521821b688a6d33218a8ba1","sha256:eda6d9d0602ed6479f176477b1c88c1d5894a791d5bdde08a905c5ab85d3a27b","sha256:58f741e597792bbc8a66b0580abc3c0ea49b4883fe99836c64ff59753edbb943"]
  - id: inversion-de-una-recta
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una recta que no pasa por $O$ está a distancia $\{{h}}$ de $O$. Su imagen por la inversión de centro $O$ y radio $\{{r}}$ es una
      circunferencia que pasa por $O$. ¿Cuánto mide su **diámetro**?
    variants:
      - values: {"r":2,"h":1}
        answers: ["sha256:dbbd8362d431375da56f498c7281f47a882480f6d91681e18e95a35a92a6e191","sha256:1a0aeda4bb1b2dea20417d62622811706ed32088d4640b2edce56d2d9f029003","sha256:afab5821dcbf2c0637b5ee5a0b3c8b39a5990c3736ec0f119a044df6166283dd"]
      - values: {"r":3,"h":2}
        answers: ["sha256:dedb88384c0e6de3627997fc7c36e0268e49fae6ff3c13cf4b36979b544ab80a","sha256:4ab6bcb76116e33ffbe8f2692644d659ed9a1b18edac8852caa6971c68aeee2c","sha256:9ee0759fd62a2999500c8485faefc0e45ec47c7cf1813fd0f6d976cda36b1395"]
      - values: {"r":4,"h":8}
        answers: ["sha256:58074d96e3113ea837fc5a8db0488d26b3402416bea5d84e8caca8a9eb931494","sha256:f05442950fe2269da56e483405d80246e75cec3dc5ded6c2afc1b6b44f41655f","sha256:5e297c1c647bffb840db8360033c403ae46d429a61e9a241aa578126833af698"]
      - values: {"r":6,"h":4}
        answers: ["sha256:028063250a2a0d85e4cee6a1e9f28e974b9bb272ee93af368695ead3102ba20c","sha256:e3096d300c3193ccc1c3283554e5ba423c79648bc0bf8b7769627d566f69b0ac","sha256:670bf7066404b4184d7786e78adb8d0ae9e115a49fc60d80dc0054e0173d141e"]
      - values: {"r":5,"h":2}
        answers: ["sha256:581c53b35f2d1e41288d784ce945e6e702f6ba847b61a2a2ae31b7ca70954438","sha256:6eb15b21b1e48c8f4a8c7b224a436f2613136ec92ce4faab3bc90f08e8183c08","sha256:9c3909e622bf004794a714f1ab3cfcec40a70fad927e8bc1d5206473c95a0149"]
      - values: {"r":1,"h":4}
        answers: ["sha256:0145777b55807f8b80e211e0987b6a6e216bf10c60efa737c3c1438be6c4ea20","sha256:bee63cd378f8d419f02d6c176e17e731230a49ab33356a734dd8120bd6c4708e","sha256:699a8aed2752800bd150ef85fc4170456403922715b37caea9c6dbadbc7a41cb"]
  - id: area-hiperbolica
    tier: 2
    prompt: |
      En el plano hiperbólico (curvatura $-1$), un triángulo tiene ángulos $\{{a}}^\circ$, $\{{b}}^\circ$ y $\{{c}}^\circ$ (un ángulo de
      $0^\circ$ indica un vértice en el infinito). ¿Cuál es su área? Respuesta: en radianes con **cuatro decimales**.
    variants:
      - values: {"a":30,"b":30,"c":30}
        answers: ["sha256:52f67ab92235bbb0fc4da6e2e9eacc0ada687af43a98285e0967948796bb0836"]
      - values: {"a":45,"b":45,"c":45}
        answers: ["sha256:aa20b4e571194bca36b215fe93b19c3e11f9ce561ec6088a9938d3dd233694f7"]
      - values: {"a":20,"b":60,"c":70}
        answers: ["sha256:70a9a2926b9dfec3f2fa3356a6dc7edc32efdb0b0a2dfc85d0e5483e317a00bb"]
      - values: {"a":10,"b":20,"c":30}
        answers: ["sha256:4d77f6de1be28f8be61be2c328bf880365331794179946b6412a68348a316bd3"]
      - values: {"a":60,"b":60,"c":30}
        answers: ["sha256:70a9a2926b9dfec3f2fa3356a6dc7edc32efdb0b0a2dfc85d0e5483e317a00bb"]
      - values: {"a":45,"b":60,"c":0}
        answers: ["sha256:6e3c6b2cfd7122a873ed2127a2c2a458d6c29025107a0b681c5e0383bd1884e2"]
  - id: poligonos-construibles
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuántos polígonos regulares de $n$ lados, con $3 \le n \le \{{N}}$, se pueden construir con regla y compás?
      (Teorema de Gauss-Wantzel.)
    variants:
      - values: {"N":30}
        answers: ["sha256:babad19033952bbc4a0dfb41a415c9fbee799f0edbdfaa3134dd04248f32d4d7","sha256:458928af7ef668222c80178c3871e11a680beaf186623ccbf8331199868e90d0","sha256:35f385d44185080033553100475527d535f356ae47657c175c1c153b622375ac"]
      - values: {"N":50}
        answers: ["sha256:054642720f5ead1618983f2a98bf3831a330bfd0db7642ea5e46240387e9b332","sha256:a8c8f2d13894ca1063f4e20253aa2a1e6088a5fc555024616bc2674e68219fbd","sha256:61686690c1a574c04e47b78dc7c8930a8b712e220d38095e126d527f582a61c5"]
      - values: {"N":100}
        answers: ["sha256:99d2594e8ce83792ffba8ff9626e75dfdcc4d9fa01bcddf77da7ca9fa6868929","sha256:5537a3167b5544c21722e7bc3997fdb575e28bc2d858ddb3e6f0d3d9ab598b93","sha256:9a66b715ca5129125a0bceb50865fec4f5cfb50ab147085957d8c5cdb80afaaa"]
      - values: {"N":40}
        answers: ["sha256:7d3d6f1bf890bb4b2f3b29d539b2fe5792c2273bd1e395b3dff34a1983f4f9f6","sha256:9e389379e2afa96d0ed9cc4cb9b77e7e76aa85c03fad3471922d8f06bd7a8c61","sha256:9ed1a87b8a914404974859fe5513c11b58213f3322345ffc1ab225be2ec6be20"]
      - values: {"N":300}
        answers: ["sha256:055f7dd5812ebdb88ad35266c5bacae770d413aad225d114b75491bbe7a0b378","sha256:3ddfa6254f01996cf91a875152273f880b8e4e8b0acaa6f6bab8137f1b191646","sha256:6a48636bec0cbad2f238b9be1cd776007fda1aea865b62ec7d0e692d8cd1dc56"]
      - values: {"N":25}
        answers: ["sha256:c62edc9f0d8dda432fa4b2ce9a6fd1409328df6a934da972b3dc2190b258373d","sha256:2a345801cc51adbe3c14da3181e38d0699e17a16ec92f18f778c7c8b736ad45f","sha256:2f4bfdf2da60a51c88d59450e10823f7ac2156db1b0811a6dd78d81c27e12f93"]
  - id: balones-y-euler
    tier: 2
    prompt: |
      Un poliedro convexo tiene solo caras pentagonales y hexagonales, $\{{h}}$ de ellas hexágonos, y en cada vértice concurren
      exactamente $3$ aristas. Con la fórmula de Euler, ¿cuántos vértices y cuántas aristas tiene? Respuesta: `V;E`.
    variants:
      - values: {"h":0}
        answers: ["sha256:f4f22c032a7b18be7d624208dd18de530e7b2c3d84a2cf22edf38181e0893651"]
      - values: {"h":10}
        answers: ["sha256:7f6042a2afe8e6a8389b8f54dc6af8c937aee1b78b92afc4fef4e3f757a15fab"]
      - values: {"h":30}
        answers: ["sha256:51bc86569b17efae8e39815c2fb4bfd0a5921b0fe5fb39e45f00cf0019ec9db5"]
      - values: {"h":5}
        answers: ["sha256:b42acae0e71f7fd26f66a23a8664b4738cde68116afc213397ed272d6dd3363e"]
      - values: {"h":60}
        answers: ["sha256:54a529ddae18adafa7f1b6b5ab5ff76e1a753de3c8ce1c290222e06572c2c946"]
      - values: {"h":80}
        answers: ["sha256:6d6edc8117fb9f5ecfac46193fffc59eb48703e804c68740077c4bf66f785e54"]
  - id: areas-semejantes
    tier: 1
    prompt: |
      Dos figuras planas son semejantes con razón de semejanza $\frac{\{{a}}}{\{{b}}}$ (longitudes de la segunda partido por las de la
      primera). ¿Cuál es la razón entre sus áreas? Respuesta: fracción «p/q».
    variants:
      - values: {"a":3,"b":2}
        answers: ["sha256:aceea65272192df3e9cee56f5c2b5e7bc88abad6a54dc4b3c98254d079fc5242"]
      - values: {"a":5,"b":4}
        answers: ["sha256:af00a26e5dfeb043bee84944359ff2d82f68827bd866f214896e835607b29671"]
      - values: {"a":2,"b":5}
        answers: ["sha256:170f63c7b49fa44e1117f2e2f71d134223020e8517a165f55e041c68a626dd3b"]
      - values: {"a":7,"b":3}
        answers: ["sha256:2d8e76cfb8d601cdd8b2f2cf75024491a7ee910f95adf127b6e5a4990010a5f4"]
      - values: {"a":3,"b":10}
        answers: ["sha256:0d1c533053ccfb622dba9dc4d400ea702247a5bab6a8ffd75a7a68c9440db40a"]
      - values: {"a":9,"b":4}
        answers: ["sha256:c216a336abc09a52618cddf51440b4848f08694185a94855f5b367f72f493dfc"]
  - id: isometria-tres-puntos
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que una isometría $f$ del plano euclídeo que deja fijos tres puntos no alineados $A$, $B$ y $C$ es
      la identidad.
    sealed: "gz64:H4sIAAAAAAACCn2Tz4rbMBDGX2Uwgk2C8aFHlz2koYfCHgxLYaHuYSKN09nKo0R/CumyD7MPsKc+Ql6sSM5fKD3Zkkf6vvnN55cqOJsiO6na6pEQVKcgCWyTRAc6od0lJo+wB9XdwT0Ms26uGli50YEaFFAADm6k6A/vuWrgZwS1VDUoM1vW0N3N4R7MbJgt53U5Pa3zp7n6CLxJaEE76UV9UllmpRpYhsN7sVJks0o8vAkgWISRw4hgOEQUzQiGJr38LDfkl5VqeunlMW2dbHB0odjve6EddKqBBxemHgPQLvF0W6RQDl90B+dHlKy6WIxkGKPn34sFGLIQaDNSpqS67k7VsEuUaSRB8KQjNr18luhEUzgCOfV3aocEKByr28wgejSsNR/+SA1b5/OV4s7dWxZC40IDD4k27jiRTsEWPUJ0Jm+pOouUyfRiEdiQRDZoGlB9v7aof4ZdQk8qA5qtnATSiTLKtpi/GucukcmAI/mRBQ1mU2AxAI+Htw3JBCx6OtMUd+1z5QTMBfXAzy7AD9znzV62LvCabTZHoYVrs+DyMvDJiaewJR3dFIFCrAC3LhOnZl7VlU9rz7pqv71U2nMkz65qq69hqsxIdG7W/7pKT5jYuXUkIZ8z+3TJ7FPJ6FShnuAeljV8qmGlmqquppaq9sNrfaP3pbQwsC6yNQS+iV4NZMGmDfpM7p8RpFBiforbFMmcxtk5W/P/OVg50Tbt6Tisy0hKsM7/yyWOe6CgPa8pV+tyOpTSm1zdSn5//QuDtYpeOwQAAA=="
  - id: r-quinto-postulado
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué afirma el axioma de las paralelas (en la forma de Playfair), el que falla en la geometría hiperbólica?
    options:
      - |
        Que por dos puntos pasa una recta
      - |
        Que por un punto exterior a una recta pasa exactamente una paralela
      - |
        Que todos los ángulos rectos son iguales
      - |
        Que el todo es mayor que la parte
    answers: ["sha256:b7def220c5817e4a8605c0a18eb796e553be137dffbf56bee09f422f4afe3881"]
  - id: r-suma-angulos-hiperbolica
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuánto suman los ángulos de un triángulo en el plano hiperbólico?
    options:
      - |
        Exactamente $180^\circ$
      - |
        Más de $180^\circ$
      - |
        Menos de $180^\circ$
      - |
        Depende del lado más largo, sin cota
    answers: ["sha256:2c7e7927c8af00b9dcbf32b480a37227eec6bb62b5e5d7e6430f8f27e046cd76"]
  - id: r-isometrias-plano
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos tipos de isometrías del plano distintas de la identidad hay en la clasificación (traslaciones, giros, …)?
    answers: ["sha256:8bc67db54821f6e0228de73e85bf062f31d34c2c0ef7f180bc88de2b89a7812b","sha256:4a663ccd40f07c0cd4d785b2f083dfa3d8ca81efae50afa1476b976d86ee16f8","sha256:a28c495687890a3db651669102b960ab43085f7381c9b0a039b9d5a0ebeffc7f"]
  - id: r-trisecar
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Se puede trisecar un ángulo de $60^\circ$ con regla y compás?
    options:
      - |
        No: el coseno de $20^\circ$ es raíz de un polinomio cúbico irreducible
      - |
        Sí, siempre
      - |
        Solo con una regla graduada no
      - |
        Sí, con la inversión
    answers: ["sha256:0f22b2c41a229b4b3b035728d89e6b843f597bce248e89e524501aaf54cca613"]
  - id: r-platonicos
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos poliedros regulares convexos (sólidos platónicos) hay?
    answers: ["sha256:350063940d6877318ff43af3451b2342664f7bea3696bc29df67f6b30edf3e25","sha256:4dc9b1a47262fb4df35ecc70094d771c4dcc2eac92f32c8132e622398edba5ea","sha256:10d9f78049d05b556a5a358a3a7199a0b7419a3475fc0c1a10d457ca74c09143"]
  - id: r-cubo-euler
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Para un cubo, ¿cuánto vale $V - E + F$?
    answers: ["sha256:8138200268748c189e52828d0acf96f35f934adeb9298822b22ccd543de787cd","sha256:6044b52043211d41461d4d325314da3e5a903eb97ebae30283894bee99b5beba","sha256:a4f5aeecbe94af7be2c1216880769b8186075912b8f387e8fdbab58ec0b0f814"]
  - id: r-inversion-angulos
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué conserva la inversión respecto a una circunferencia?
    options:
      - |
        Conserva distancias
      - |
        Conserva rectas
      - |
        Conserva áreas
      - |
        Conserva ángulos (es conforme)
    answers: ["sha256:2d5b1ef4a5248d06e1bf24dc6996eb5bb858b7a8fcb016a6db09ae2e119114be"]
---

# Geometría euclídea: métricas, axiomas, isometrías, inversión, construcciones, poliedros y un primer vistazo a la hiperbólica

En el instituto la geometría se **usa**: Pitágoras, Tales, áreas y ángulos. En el grado se **funda**: se fijan unos axiomas,
se demuestra todo a partir de ellos y se descubre qué pasa si se cambia uno (aparece la geometría hiperbólica). Este nodo
sigue los temas de la asignatura «Geometría básica» de primero de la UNED: distancias, axiomas, movimientos que no deforman,
semejanzas, inversión, construcciones con regla y compás y poliedros.

## Objetivos

Al terminar sabrás:

1. Reconocer una distancia (métrica) y comparar la euclídea con la del taxista y la del máximo.
2. Explicar por qué hacen falta axiomas (Hilbert) y qué papel tiene el de las paralelas.
3. Clasificar las isometrías del plano y del espacio, y componerlas.
4. Demostrar Tales y Pitágoras y usar semejanzas, la potencia de un punto y la inversión.
5. Calcular áreas de triángulos hiperbólicos por su defecto angular.
6. Decidir qué es construible con regla y compás y aplicar la fórmula de Euler a los poliedros.

## Qué debes dominar antes

[[mat-logica-demostraciones]] (demostrar), [[mat-movimientos-plano]] (traslaciones, giros y simetrías en la ESO),
[[mat-trigonometria]] y [[mat-geometria-analitica]] (coordenadas, rectas y circunferencias).

> [!question] Test de entrada
> 1. ¿Cuánto mide la hipotenusa de un triángulo rectángulo de catetos $5$ y $12$?
> 2. ¿Cuánto suman los ángulos de un triángulo (en el plano)?
> 3. ¿Qué movimiento resulta de aplicar dos veces la misma simetría?
>
> Respuestas: $13$; $180^\circ$; la identidad.

## 1. Para qué sirve

- **Matemáticas**: es el primer contacto con un **sistema axiomático** completo, y el modelo de cómo se construyen el álgebra,
  la topología o la geometría diferencial (la geometría lineal de 2.º la generaliza con álgebra lineal).
- **Gráficos y robótica**: los movimientos rígidos (isometrías) son las transformaciones de las piezas y las cámaras
  ([[rob-cinematica]]).
- **Física**: la geometría no euclídea es la del espacio-tiempo curvo de la relatividad general; la inversión aparece en
  electrostática (método de las imágenes).
- **Cultura**: tres problemas griegos (trisecar el ángulo, duplicar el cubo, cuadrar el círculo) tardaron dos mil años en
  resolverse, y la respuesta («imposible») vino del álgebra.

## 2. Espacios métricos

> [!practico]
> Medir distancias depende de cómo te muevas. En línea recta, la distancia es la de la regla; en una ciudad de calles en
> cuadrícula, un taxi tiene que ir por las calles y la distancia es «calles a lo ancho más calles a lo largo»; y un rey de
> ajedrez, que se mueve en cualquier dirección casilla a casilla, tarda tantos pasos como la mayor de las dos diferencias.
> Las tres cumplen las reglas que esperamos de una distancia.

Una **distancia** (o métrica) en un conjunto $X$ es una función $d : X \times X \to [0, \infty)$ con: $d(x, y) = 0 \iff x = y$;
$d(x, y) = d(y, x)$; y la **desigualdad triangular** $d(x, z) \le d(x, y) + d(y, z)$. $(X, d)$ es un **espacio métrico**. En el
plano, para $P = (x_1, y_1)$ y $Q = (x_2, y_2)$:

$$
d_2(P, Q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}, \quad d_1(P, Q) = |x_1 - x_2| + |y_1 - y_2|, \quad d_\infty(P, Q) = \max(|x_1 - x_2|, |y_1 - y_2|).
$$

*Ejemplo:* entre $(1, 2)$ y $(4, 6)$: $d_2 = 5$, $d_1 = 7$, $d_\infty = 4$. Siempre $d_\infty \le d_2 \le d_1$. La «circunferencia»
de radio $1$ es un círculo con $d_2$, un rombo con $d_1$ y un cuadrado con $d_\infty$. Las ideas de este nodo dependen de
$d_2$; las de [[mat-topologia]] valen para cualquier métrica.

## 3. Los axiomas de la geometría euclídea

> [!practico]
> Euclides intentó demostrar toda la geometría a partir de unas pocas verdades evidentes. Dos mil años después se vio que
> le faltaban piezas (usaba, sin decirlo, que dos circunferencias que se cruzan se cortan) y que una de sus verdades, la de
> las paralelas, no se podía deducir de las otras: se puede negar y sale otra geometría igual de coherente.

**Axiomas de Hilbert** (1899), para el plano: términos primitivos *punto*, *recta*, *estar en*, *estar entre* y *congruente*,
agrupados en cinco familias:

1. **Incidencia**: por dos puntos distintos pasa una única recta; toda recta tiene al menos dos puntos; hay tres puntos no
   alineados.
2. **Orden**: qué significa que un punto esté entre otros dos (y el axioma de Pasch: una recta que entra en un triángulo por
   un lado sale por otro).
3. **Congruencia** de segmentos y de ángulos, incluido el criterio lado-ángulo-lado.
4. **Paralelas** (forma de Playfair): por un punto exterior a una recta pasa **exactamente una** paralela.
5. **Continuidad**: Arquímedes y completitud (garantiza que las circunferencias que deben cortarse se cortan).

Con estos axiomas, el plano queda determinado: todo modelo es (isomorfo a) $\mathbb R^2$ con $d_2$. El quinto postulado de
Euclides es equivalente, con los demás, a que los ángulos de todo triángulo sumen $180^\circ$, a que existan triángulos
semejantes no congruentes, o a Pitágoras.

## 4. Isometrías del plano

> [!practico]
> Una isometría mueve una figura sin deformarla, como deslizar o girar una hoja de papel sobre la mesa, o darle la vuelta.
> En el plano solo hay cuatro tipos: desplazar (traslación), girar (giro), reflejar en un espejo (simetría) y reflejar
> desplazando a lo largo del espejo, como las huellas que deja alguien al andar (simetría con deslizamiento).

Una **isometría** es una aplicación $f$ del plano en sí mismo con $d(f(P), f(Q)) = d(P, Q)$. Es biyectiva y lleva rectas en
rectas. **Teorema de clasificación:** toda isometría del plano distinta de la identidad es exactamente una de estas:

| | conserva la orientación | invierte la orientación |
| --- | --- | --- |
| con algún punto fijo | **giro** (un punto fijo) | **simetría** respecto a una recta (una recta de puntos fijos) |
| sin puntos fijos | **traslación** | **simetría con deslizamiento** |

Toda isometría es composición de **como mucho tres simetrías** respecto a rectas. Componer dos simetrías da: si las rectas se
cortan formando un ángulo $\theta$, un **giro** de ángulo $2\theta$ alrededor del punto de corte; si son paralelas a distancia
$h$, una **traslación** de longitud $2h$. *Ejemplo:* la simetría respecto al eje $x$ seguida de la simetría respecto a la recta
por el origen de ángulo $30^\circ$ es un giro de $60^\circ$.

> [!formal] Con rigor: una isometría queda fijada por tres puntos no alineados
> Si $f$ y $g$ son isometrías que coinciden en tres puntos no alineados $A$, $B$, $C$, entonces $h = g^{-1}\circ f$ fija esos
> tres puntos. Para cualquier $P$, $h(P)$ está a la misma distancia que $P$ de $A$, $B$ y $C$; si fuese $h(P) \neq P$, los tres
> estarían en la mediatriz de $P$ y $h(P)$, que es una recta: imposible. Luego $h$ es la identidad y $f = g$. De aquí sale la
> clasificación: se cuenta cuántos puntos fija la isometría y si conserva la orientación. $\blacksquare$

## 5. Ángulos, Tales, Pitágoras y semejanzas

> [!practico]
> Tales midió la altura de una pirámide con su sombra: a la misma hora, la sombra de cada cosa es proporcional a su
> altura. Si un palo de $2$ m da una sombra de $3$ m y la pirámide da $210$ m, mide $140$ m. Esa proporcionalidad es la
> **semejanza**, y Pitágoras es su consecuencia más famosa.

**Teorema de Tales.** Si varias rectas paralelas cortan a dos rectas, los segmentos que determinan en una son proporcionales a
los que determinan en la otra. **Semejanzas**: aplicaciones que multiplican todas las distancias por un mismo $k > 0$; son
composición de una isometría y una **homotecia** de razón $k$. Conservan ángulos, multiplican longitudes por $k$ y **áreas por
$k^2$** (y volúmenes por $k^3$).

> [!formal] Con rigor: Pitágoras con semejanza
> En un triángulo rectángulo $ABC$ con ángulo recto en $C$, la altura $CH$ sobre la hipotenusa lo parte en dos triángulos
> semejantes al original (comparten un ángulo agudo y tienen un ángulo recto). De la semejanza de $ACH$ con $ABC$,
> $\frac{AH}{AC} = \frac{AC}{AB}$, es decir, $AC^2 = AB\cdot AH$; de la de $CBH$ con $ABC$, $BC^2 = AB\cdot HB$. Sumando,
> $AC^2 + BC^2 = AB\,(AH + HB) = AB^2$. $\blacksquare$

**Ángulos en la circunferencia.** Un ángulo inscrito mide la mitad del central que abarca el mismo arco (por eso todo ángulo
inscrito en una semicircunferencia es recto).

## 6. Circunferencias, potencia e inversión

> [!practico]
> La inversión es un espejo redondo: los puntos de dentro de una circunferencia se van fuera y los de fuera, dentro, más
> lejos cuanto más cerca estaban del centro. Deforma las figuras, pero tiene una propiedad mágica: las rectas y las
> circunferencias se convierten en rectas o circunferencias, y los ángulos se conservan.

**Potencia de un punto.** Si $P$ está a distancia $d$ del centro de una circunferencia de radio $r$, para **cualquier** recta por
$P$ que la corte en $A$ y $B$, $PA\cdot PB = |d^2 - r^2|$. *Ejemplo:* con $d = 5$ y $r = 3$, $PA\cdot PB = 16$; si $PA = 2$,
$PB = 8$, y la tangente desde $P$ mide $4$.

**Inversión** de centro $O$ y radio $r$: a cada $P \neq O$ le asigna el punto $P'$ de la semirrecta $OP$ con
$OP\cdot OP' = r^2$. En coordenadas con $O$ en el origen, $x \mapsto \frac{r^2}{\lvert x\rvert^2}\,x$. Propiedades: es una
involución (aplicarla dos veces da la identidad); fija la circunferencia de inversión; lleva rectas que no pasan por $O$ a
circunferencias que pasan por $O$ (y al revés), y circunferencias que no pasan por $O$ a circunferencias; y es **conforme**
(conserva ángulos). *Ejemplo:* con $r = 2$, un punto a distancia $4$ va a distancia $1$; la recta a distancia $h = 4$ de $O$
va a la circunferencia de diámetro $\frac{r^2}{h} = 1$ que pasa por $O$.

## 7. Un primer vistazo a la geometría hiperbólica

> [!practico]
> Si se niega el axioma de las paralelas y se permite que por un punto pasen **infinitas** paralelas a una recta, sale
> una geometría coherente en la que los triángulos son «flacos»: sus ángulos suman menos de $180^\circ$, y cuanto más
> grande es el triángulo, menos suman. Los grabados de Escher con peces que se encogen hacia el borde de un círculo son
> dibujos de ese mundo.

**Modelo del disco de Poincaré:** los puntos son los del disco unidad abierto, y las «rectas» son los diámetros y los arcos de
circunferencia que cortan el borde perpendicularmente. Cumple todos los axiomas de Hilbert salvo el de las paralelas, lo que
prueba que este no se deduce de los demás. (El **semiplano superior**, $y > 0$ con rectas verticales y semicircunferencias
centradas en el eje $x$, es otro modelo equivalente; los dos se relacionan por una inversión.)

**Área y defecto.** Con curvatura $-1$, el área de un triángulo de ángulos $\alpha, \beta, \gamma$ (en radianes) es su **defecto**
$\pi - (\alpha + \beta + \gamma)$ (teorema de Gauss-Bonnet, [[mat-geometria-diferencial]]). *Ejemplo:* ángulos de $30^\circ$,
$40^\circ$ y $50^\circ$ suman $\frac{2\pi}{3}$ y el área es $\frac{\pi}{3}$. Ningún triángulo tiene área mayor que $\pi$ (el que tiene
sus tres vértices en el infinito, con ángulos nulos), y no hay semejanzas que no sean isometrías: los ángulos determinan el
triángulo.

## 8. Polígonos y construcciones con regla y compás

> [!practico]
> Con una regla sin marcas y un compás se pueden hacer muchas cosas: bisecar ángulos, trazar perpendiculares, construir un
> hexágono o un pentágono regular. Pero no todo: los griegos no consiguieron dividir un ángulo cualquiera en tres partes
> iguales ni construir un cubo del doble de volumen, y en el siglo XIX se demostró que es imposible. La razón es algebraica:
> con regla y compás solo se pueden obtener longitudes que salen de sumar, restar, multiplicar, dividir y sacar raíces
> **cuadradas**.

Un número real es **construible** si se obtiene a partir de $0$ y $1$ con un número finito de construcciones. Los construibles
forman un cuerpo cerrado por raíces cuadradas, y todo construible $\alpha$ está en una cadena de extensiones de grado $2$, así que
su grado sobre $\mathbb Q$ es una **potencia de $2$**. Consecuencias:

- **Duplicar el cubo** exige $\sqrt[3]2$, de grado $3$: imposible.
- **Trisecar $60^\circ$** exige $\cos 20^\circ$, raíz de $8x^3 - 6x - 1$, irreducible de grado $3$: imposible (algunos ángulos sí se
  trisecan, como $90^\circ$).
- **Cuadrar el círculo** exige $\sqrt\pi$, y $\pi$ es trascendente (Lindemann, 1882): imposible.
- **Gauss-Wantzel:** el $n$-gono regular es construible si y solo si $n = 2^k p_1\cdots p_m$ con $p_i$ **primos de Fermat**
  distintos ($3, 5, 17, 257, 65537$). Gauss construyó el de $17$ lados con $19$ años. Con $n \le 20$, los construibles son
  $3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20$.

El fundamento algebraico (grado de una extensión) está en [[mat-algebra-conmutativa-galois]].

## 9. El espacio: isometrías y poliedros

> [!practico]
> En el espacio hay más movimientos rígidos: además de trasladar, girar alrededor de un eje y reflejar en un plano, está el
> **tornillo** (girar y avanzar a lo largo del eje, como una tuerca). Y hay exactamente cinco poliedros regulares: el
> tetraedro, el cubo, el octaedro, el dodecaedro y el icosaedro. Un balón de fútbol clásico, de pentágonos y hexágonos,
> tiene siempre $12$ pentágonos, y la razón es una sola fórmula.

**Isometrías del espacio** (que no son la identidad): conservando la orientación, **traslación**, **giro** alrededor de un eje y
**movimiento helicoidal** (giro más traslación a lo largo del eje); invirtiendo la orientación, **simetría** respecto a un plano,
**simetría con deslizamiento** y **simetría rotatoria** (giro seguido de simetría respecto al plano perpendicular al eje; la
simetría central es un caso). Toda isometría del espacio es composición de como mucho **cuatro** simetrías respecto a
planos.

**Fórmula de Euler.** Para todo poliedro convexo, $V - E + F = 2$ (vértices menos aristas más caras). *Ejemplo:* el balón con
$12$ pentágonos y $20$ hexágonos tiene $E = \frac{5\cdot12 + 6\cdot20}{2} = 90$, $V = \frac{2\cdot90}{3} = 60$ (cada vértice está
en $3$ aristas), y $60 - 90 + 32 = 2$.

> [!formal] Con rigor: solo hay cinco poliedros regulares
> En un poliedro regular con caras de $p$ lados y $q$ caras en cada vértice ($p, q \ge 3$), contando aristas por caras y por
> vértices, $pF = 2E = qV$. Sustituyendo en $V - E + F = 2$: $E\left(\frac2q - 1 + \frac2p\right) = 2$, luego
> $\frac1p + \frac1q > \frac12$. Las únicas soluciones con $p, q \ge 3$ son $(p, q) = (3, 3), (4, 3), (3, 4), (5, 3), (3, 5)$:
> tetraedro, cubo, octaedro, dodecaedro e icosaedro. $\blacksquare$ (Que los cinco existen se comprueba construyéndolos.)

## 10. Errores típicos

- Creer que una «distancia» cualquiera cumple la desigualdad triangular sin comprobarlo.
- Componer simetrías en el orden equivocado (el giro cambia de sentido) o duplicar mal el ángulo: dos simetrías con rectas a
  $\theta$ dan un giro de $2\theta$, no de $\theta$.
- Multiplicar áreas por $k$ en vez de por $k^2$ al aplicar una semejanza.
- Aplicar Euler a un poliedro no convexo con agujeros (un toro de caras planas tiene $V - E + F = 0$).
- Pensar que «imposible con regla y compás» significa «no se ha encontrado todavía».
- Usar intuiciones euclídeas en la geometría hiperbólica (allí no hay rectángulos).

## 11. Resumen

- Métricas $d_1$, $d_2$, $d_\infty$; axiomas de Hilbert; el de las paralelas es independiente de los demás.
- Isometrías del plano: traslación, giro, simetría y simetría con deslizamiento; como mucho tres simetrías.
- Tales y semejanzas (áreas por $k^2$); Pitágoras; potencia de un punto; inversión (conforme, rectas y circunferencias).
- Hiperbólica: infinitas paralelas, área = defecto angular.
- Construibles: grado potencia de $2$; no se duplica el cubo ni se triseca $60^\circ$; Gauss-Wantzel.
- Isometrías del espacio; $V - E + F = 2$; cinco sólidos platónicos.

## Reto

Calcula tres enteros:

- **a.** Cuántos polígonos regulares de $n$ lados, con $3 \le n \le 10\,000$, son construibles con regla y compás.
- **b.** El número de vértices de un poliedro convexo con solo pentágonos y $100$ hexágonos y vértices de grado $3$.
- **c.** $\lfloor 10^6 \cdot A\rfloor$, siendo $A$ el área de un triángulo hiperbólico (curvatura $-1$) de ángulos $20^\circ$,
  $35^\circ$ y $70^\circ$.

Formato de la flag: `EXODUS{a-b-c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Una distancia: positiva, simétrica y con desigualdad triangular.
2. Cuatro isometrías del plano; dos simetrías con rectas a $\theta$ son un giro de $2\theta$.
3. Semejanza de razón $k$: áreas por $k^2$; potencia de un punto $PA\cdot PB = |d^2 - r^2|$; inversión $OP\cdot OP' = r^2$.
4. En la hiperbólica, el área de un triángulo es $\pi$ menos la suma de sus ángulos.
5. Construible ⇒ grado potencia de $2$; $V - E + F = 2$.

## Siguiente

El nodo de geometrías lineales (tramo 2 de matemáticas) reescribirá esta geometría con álgebra lineal (espacios afines, euclídeos y proyectivos);
[[mat-topologia]] generaliza los espacios métricos; [[mat-geometria-diferencial]] trata la curvatura y Gauss-Bonnet.
