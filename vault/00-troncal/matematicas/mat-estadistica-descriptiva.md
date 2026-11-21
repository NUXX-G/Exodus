---
id: mat-estadistica-descriptiva
title: "Estadística descriptiva: población y muestra, variables, tablas de frecuencias, gráficos, medidas de centralización, posición y dispersión"
area: matematicas
trunk_level: 3
prerequisites: [mat-decimales, mat-porcentajes-finanzas, mat-funciones-graficas]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 14: «Estadística», secciones 1 (fases de un estudio estadístico), 2 (población, muestra, individuo, variable), 3 (tablas de frecuencias), 4 (diagramas de barras, histogramas, sectores, análisis crítico de gráficas en los medios), 5 (medidas de centralización y de posición) y 6 (medidas de dispersión). Apuntes Marea Verde, autora Raquel Caro. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/14_Estadistica_4B.pdf"
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 13: «Estadística y probabilidad», secciones 1.2 (frecuencias absolutas, relativas y acumuladas) y 2 (gráficos estadísticos). Apuntes Marea Verde, autora Nieves Zuasti. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2013%20Estadistica.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 12: «Estadística». Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_12_Estadistica.pdf"
hints:
  - "Concepto: la estadística resume muchos datos en pocos números: uno que diga dónde está el centro (media, mediana, moda) y otro que diga cuánto se separan los datos de ese centro (rango, desviación típica, rango intercuartílico). Ninguno basta solo."
  - "Herramienta: ordena los datos y haz una tabla de frecuencias (con frecuencias acumuladas); media = Σ xᵢ fᵢ / N; mediana = dato central de los ordenados; varianza = media de los cuadrados menos el cuadrado de la media."
  - "Documentación: Marea Verde 4.º ESO B cap. 14; 1.º ESO cap. 13."
exercises:
  - id: media
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula la media de los datos ${{L}}$.
    variants:
      - values: {"L":"3,\\ 8,\\ 5,\\ 10,\\ 4"}
        answers: ["sha256:6f020ca5c5047e444ec879c6fd9f610bc93352d28df0d91bc532e959cc460165","sha256:c6f8fdc98a29fad1cf721e64fd1304757a2cc301deaa550566e766ec24b5c51e","sha256:8dc6697c53ce5071fd69b408c80b36a1697a85cb7783202d9b81c8414e5c0e14"]
      - values: {"L":"12,\\ 15,\\ 11,\\ 18,\\ 14,\\ 20"}
        answers: ["sha256:479e5d67f6f3f097764d68ca86672796e3c16609f3a32fdd6ef6667cec5a5972","sha256:6295d5328c53475d3cfacbb25aeef4d64a9583b2f0f10aa5d6f70ed975bc4361","sha256:733b8cb35b1b86ac09944adbfcdda3b027ba7a98bfb4e21ffcccd71afb681e03"]
      - values: {"L":"2{,}5,\\ 3,\\ 4{,}5,\\ 6,\\ 1"}
        answers: ["sha256:b832a8cec2b9d64cadcdbeec1832c636a78ca17924a6000c851e463b02595e56","sha256:efe32c7ae394c07a1eb5a0f06fa5632e1ff776cf73d9194a82602acc4b9363c1","sha256:5b08a48eb579f856136fd5dcac6a91e46dd89ddc398cd4e6d2b874182d0d9fe0"]
      - values: {"L":"-3,\\ 5,\\ 0,\\ 8,\\ -2,\\ 4"}
        answers: ["sha256:176f7976303c6917085942196d772e9f77145129511ff07f5f6fa5dd12d68ea8","sha256:b05dd39d32d996dadaf194deb7adc4ec2700e7da97a34ad7382e5df8abd5477b","sha256:3809f020ef4cd50c6836254391c686b7f2771f21943aef7e7aee341551eed68b"]
      - values: {"L":"102,\\ 98,\\ 106,\\ 98"}
        answers: ["sha256:4ed1a517a676775d9153a38c55b2e778fc847474fd6ad159f1cd18bf5819f68d","sha256:dc367503dda4b5d3c80266b4f1eeb3501f770530bab86df34fe81d6559f864e2","sha256:4d15f684bb831df127c5d5c11a5c6f0a8bd21229236dbc071a364f52e2234b80"]
      - values: {"L":"7,\\ 7,\\ 7,\\ 9,\\ 10,\\ 2,\\ 7,\\ 3"}
        answers: ["sha256:bd3cc14279b7f3ea2632189da0a320c63cb9a537211ac7109b554815cee7ef0d","sha256:297689d09d13eb1fc15a07b9cd76df411acd797137515f459ff927d140df9963","sha256:4a45fd65a08c9d162f8cf7cd149a1abbad7016f9481c4389e45ed53920e65ce5"]
  - id: mediana
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula la mediana de los datos ${{L}}$.
    variants:
      - values: {"L":"9,\\ 2,\\ 7,\\ 4,\\ 11"}
        answers: ["sha256:41b2903f8ba7d6de6d6d2ac25f392a993fc7b68f9125c1d344dddce1a85928dd","sha256:0e9eeff846237b18f98afeec846017263acf7a7acd191672afae9df9894f4b07","sha256:ac441082d49bf7b39a0d931650ae447cbd766db4e72e8d3f884f44f92f674d9c"]
      - values: {"L":"15,\\ 3,\\ 8,\\ 12,\\ 6,\\ 10"}
        answers: ["sha256:60481d9196dab5a0d745566f2bfa3a163c5262c81063fe9734cb1b5f18c4435e","sha256:aafa218e17616ea77d8455227b67301d361b1d630bf0e9bc5c5e869776280fb5","sha256:7c04ec41ad71c677aa2ba29251ad68675fd0fc3147c5c25cbd83e88f68b9e23f"]
      - values: {"L":"1{,}2,\\ 0{,}8,\\ 2{,}5,\\ 1{,}9,\\ 0{,}4,\\ 3{,}1,\\ 2{,}2"}
        answers: ["sha256:fed19ec6fb3cc2d9ba04393a4c572666846e0d7436c45528995276cc69615573","sha256:f878b2cc8cd7dfc97edc6ed4a2d344e28b6c90faa66cb42d389399bca5760fcd","sha256:cbf319cf225f6129eceffe7298961cfd535d9f4e25933976f1776753545c160c"]
      - values: {"L":"40,\\ 35,\\ 52,\\ 47"}
        answers: ["sha256:6ed75c8580d7bcab69d719d297d5fc3166b210d0c901cc17d8b7c2e9167ac53f","sha256:011ff83eef7ff2984c611494e377d3ee7aba468e38bb2a26d4b95794515c3229","sha256:0ac1531527a4a5a5cf57918094287b2d107361e6ecfbe267bf2c7159ab52379e"]
      - values: {"L":"5,\\ 5,\\ 6,\\ 8,\\ 9,\\ 9,\\ 9,\\ 10"}
        answers: ["sha256:3c4f6c0ce4569c896509a0dbb784adbf8e49c0a991b748cf58ae656f2fa7770a","sha256:0e6f87b2d6162cf29496c050605841c4b93c515655499a3fa7f56a97e838cbf1","sha256:7adba94f99b89d8d115c996e9ac69d77c76cfc424c67719f59044a3f38b994fd"]
      - values: {"L":"-4,\\ 2,\\ -1,\\ 0,\\ 6"}
        answers: ["sha256:4f9984aa256093a0196af833d8e6b3abba8166cea6c75895514eb6b55401b699","sha256:39bd3e4cbb921bd0eff26bd0871a1609e857ff1f406affebea7283b88e755b76","sha256:5eb4ab15cce37ad77f1b5d7b2aedc9cb6082f505aa664b58cf09914a36fd71ba"]
  - id: moda
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Cuál es la moda de los datos ${{L}}$?
    variants:
      - values: {"L":"3,\\ 5,\\ 3,\\ 8,\\ 5,\\ 3,\\ 9"}
        answers: ["sha256:14506da137048b87a751ad6d6d3abf7531388304cee8dd75df249095e7927d59","sha256:dbe2f76b76d5b03263de8fdfc1e1f760e30657174c5e015a7a0059f40fd82c36","sha256:85fe4fd639f1cee965ed5d8afd49b542d7929f05552fc90bba908973d9658e21"]
      - values: {"L":"12,\\ 14,\\ 14,\\ 15,\\ 16,\\ 14,\\ 12"}
        answers: ["sha256:6a5c6e5c322a3a6bf7343a20aa7fabd9b8455b475b6dc9be09d2d4bb2e27c40c","sha256:3e4d64c0d57399f29bed846b12230f80541a54bb112e005dfbc50248a0758de6","sha256:3eb527740a9d2b612abdc270fa39c8e79aeedf1ff7ff4046f15f3af42a6161e1"]
      - values: {"L":"0,\\ 1,\\ 1,\\ 2,\\ 2,\\ 2,\\ 3,\\ 2"}
        answers: ["sha256:fc6cca07eef3ecf389bc5cbb6118517dbd6bfa28d57088905e3a879c1762ffbc","sha256:f13ec439b22713ed5409e576cd4c40e5d37b090b497547199c1d6cb3b07146c7","sha256:3ea8af4c7f58de2ab6a1168eb1b9a61cd4c5b8d0ed3d8344b3bee6ebd26de945"]
      - values: {"L":"7{,}5,\\ 8,\\ 7{,}5,\\ 9,\\ 6,\\ 7{,}5"}
        answers: ["sha256:37b8a197892737cb3d4732e4ab711b0e528c8427b60cb4c061ea3c4ec166e3a4","sha256:e45b201c6b9c51c4be427e8a63f9d3a8581210007b4ae660d67fb48081d35866","sha256:a6423bb60b64b6b17f0194e170e9b8fb1e4823e21185358145d8688e0a31fe36"]
      - values: {"L":"21,\\ 23,\\ 25,\\ 23,\\ 20,\\ 22"}
        answers: ["sha256:69ca68e8c72dbfa4c9347cbd0cd29826d155b3774636cc11fac715dc5c26e520","sha256:6884f8949100edb8cdbc769b6e7bbf47b1ed9db9dfb90f264f1c31270f13295f","sha256:4d585e58409058c85436f5adce958420dfac99574916457693df1982f6eb7de6"]
      - values: {"L":"4,\\ 4,\\ 1,\\ 1,\\ 1,\\ 6,\\ 6,\\ 4,\\ 1"}
        answers: ["sha256:04d3a46789c8edbf47019003921538d9b7cb7d0b165321a794c412f6dc9932b3","sha256:12d687543022b4d44b62fc197eda27b48fdab6784cc993886150e8b6b087fa36","sha256:b252520dbeef7613687f3c5cd20e21ce12ab9e97909e759e41df691e4444e753"]
  - id: media-de-una-tabla
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula la media de la variable de esta tabla de frecuencias:
      $$
      \begin{array}{|{{cols}}|} \hline x_i & {{x}} \\ \hline f_i & {{f}} \\ \hline \end{array}
      $$
    variants:
      - values: {"x":"0 & 1 & 2 & 3 & 4","f":"4 & 7 & 5 & 3 & 1","cols":"cccccc"}
        answers: ["sha256:7063c0830c979d9207c72f0e69a8206fc2c437155cbcdd32f5ef11034acbc5dd","sha256:21d688d02c8d24a7e7bd9651ebc70e2314c88ac55d420cbe65b00a576dce16a8","sha256:c726f5042c9b8751f7e8934af99b0e132a5d3ffc21de2334b039c631381b2b3a"]
      - values: {"x":"5 & 6 & 7 & 8 & 9","f":"2 & 6 & 8 & 3 & 1","cols":"cccccc"}
        answers: ["sha256:35d270220cb9b960c8186a439e4241dcbeaeee69573a4ec3442abaf6443d220d","sha256:8fd240970671e9caac201d0c2cbf0bda326c726da5c868e5646ecdea2e2758a1","sha256:31a39c6992466c44f91d0b376f06643bf57e4a5452365ef72d7e14b3eeba43c1"]
      - values: {"x":"1 & 2 & 3 & 4","f":"10 & 15 & 15 & 10","cols":"ccccc"}
        answers: ["sha256:09db9b1e20f2d016c3d53714dfbb4aca05df22d5f25bebebdb5310a0953515a1","sha256:ee28a832444ea49378dfb91cc78ab830c9ffd297fb578db5372748ebec78a052","sha256:5e6838de7bc5a8d782fd30d2b1bf888531cab37b5d623543f4267636e4b2383b"]
      - values: {"x":"10 & 20 & 30","f":"3 & 5 & 2","cols":"cccc"}
        answers: ["sha256:91561e061591c9153df8544a54b4ad13ad7f57fb7885428bc9241eb19a30c78f","sha256:e46d0802e610bd7b9510da9cf0e7a745081411b25cad63abf74fc6129a7799eb","sha256:f6dfd3ab587b251428b9fd33b2492e5feb7c4950fd1fae8cf3082b351ceb4905"]
      - values: {"x":"0 & 1 & 2 & 5","f":"12 & 20 & 6 & 2","cols":"ccccc"}
        answers: ["sha256:e15b10b09afe3b6f7a26e861f356d3b2d3339777e552d2f5cb34f1b2b3435e03","sha256:8de1743c9be329a8fc51bb764b364520427ab9a2755440f6feda555d8f05e6aa","sha256:d3f9fa4b912cca73ca76d471fa7af7b1812a532b7d30535cbb07efc46c8ba44b"]
      - values: {"x":"36 & 37 & 38 & 39","f":"5 & 9 & 4 & 2","cols":"ccccc"}
        answers: ["sha256:c1309c242d78890ce3cafa8e908726de414f6b12faef2cf0de57118148b3265e","sha256:a652745ae1e7bf5e42f210c6174bc8d4e1e6a81e65e530e7768b8630968a0e42","sha256:60b07d773b2905bf1c73f750db0e1733a754ef8f24ea665c02f5de30985ddb8c"]
  - id: frecuencia-relativa
    tier: 1
    type: numero
    sig: 10
    prompt: |
      En una encuesta a ${{N}}$ personas, ${{f}}$ eligieron cierta respuesta. ¿Qué porcentaje es (su frecuencia relativa en %)?
    variants:
      - values: {"f":13,"N":52}
        answers: ["sha256:0f1ffbae28e257376887f1040e28788f018f77eb72e41d1c09ebddbf9479c388","sha256:51fab11d8c6015f18819ec40326b1962aa4c787e402c6ee31aeb2481ab1064d2","sha256:84e57f3a1ffee87c201b1dc2390121d0372f9d50717a44ffaa17c6458803019f"]
      - values: {"f":9,"N":36}
        answers: ["sha256:ec024021d713d9785e092f9b9a852b7a39c4685f65bb49edd8fd032144127834","sha256:c626f22965f25bda7f4b637823a6382e1176ad408b26c198a9daf702641d4aad","sha256:1d0163e6f1bc466acb40295ad4b99904eb7b5279b29e43bb2c6f98b956a5af91"]
      - values: {"f":27,"N":120}
        answers: ["sha256:c69227af74de288717548a2802d8bbf47de12fe72f034f71130752612664feb4","sha256:f22e859f2ffe80a22211f4cfa7b5847d4f8e650da7b127e5fdf2cc3b1784b371","sha256:562b81e47ad10d22d356bb20e0a73df001483b40fc222989cb91e7e250519eac"]
      - values: {"f":45,"N":250}
        answers: ["sha256:8073904489baa87967eecc7dc0666c6d3b97d279a3162a14a967f3954d42c732","sha256:cfba2c5728c3c089e752f43a6372657137d84867b063300dceef8d00faee6e72","sha256:b12ff114e8bf085be42577b54272ead2ed04cfa62023dc8d02c8d9cf89a7ba5d"]
      - values: {"f":7,"N":40}
        answers: ["sha256:5681aa3fef8f47d59d367745c4e5a3cadff3cb217b1631be59cf87e83d7fd21c","sha256:c8e99946544c12bcc51b237cad52ddda3ab3cd0bd706801f7067ce4bbcb2dfef","sha256:51feca09e40587ee542ce51e5ac59631d5ba4bdad8fbedd21e238839d7dfc8e6"]
      - values: {"f":18,"N":64}
        answers: ["sha256:6af40af73541117512b598daa8fdb20f37c01410f4040b8d6d0d7ae3b12b79af","sha256:911c9b6d510dfe58977be51f25b7d824620fcb7b03453166c15dd828faa71f8b","sha256:6f42bf9cda46013671ad500a1134d57cc9df59ada6d001d6399d5ba0d4783f8d"]
  - id: diagrama-de-sectores
    tier: 1
    type: numero
    sig: 10
    prompt: |
      En un diagrama de sectores de ${{N}}$ datos, ¿cuántos grados le corresponden a una categoría con ${{f}}$ datos?
    variants:
      - values: {"f":15,"N":60}
        answers: ["sha256:e22c38b6add282e8dcfc74d27193e043f9ea309b934ad4f08b92de3ccaae73bb","sha256:780a279b8d4bb6e990f120fb2f8ada7745a29ebf4aedd2e98dd1ed0461b69506","sha256:8517ed417fea16aa00a5c7fdd2e12f447c0db611a551767afb5244feb05d75bb"]
      - values: {"f":7,"N":28}
        answers: ["sha256:7d3116f36d3f845a78fc2eede52a293fdd4e32b0dd8359738a0483cebf2e5327","sha256:18d9853042622c29e21e3fc74a50bb6e9dc3dd7505d488b1f804b11d4a20de00","sha256:1a85fd532fe27b7ed942d96c181cb4287d6c51d58ee10ee7807f918cd6904a57"]
      - values: {"f":33,"N":120}
        answers: ["sha256:9e57f249085dff879c976a112f5e86313af83f928da5293db89f970af79a6eb0","sha256:ffaab611b1ca7c70f950bb529015702baaea9cece39650aba41e884090c04480","sha256:5fa8ec8ceb2769e540a5111282301c75dade71c2a068ba77be1ab2e06f8b6ec7"]
      - values: {"f":11,"N":40}
        answers: ["sha256:e5577a06fee597b81dac3f70abc5281b826d485413675ecfc29b5d01b142024a","sha256:1be18d5ea45b57a93f1224afd0a1983524d43e1c636a84000db0267223fe7aa6","sha256:51bc83f2de32e6e1ed6ba5eb60d32f16c91d03f82076e2d3956a41be9dc2d1e9"]
      - values: {"f":45,"N":200}
        answers: ["sha256:98abf4b1209bbb894e0b3ba7c1b7baa9c7d5cabf6771bacd55dcf05ee22a1b27","sha256:26c2ee152df506e8f47ee0eeae3f46810ed8934a457a09c5e637d0867d7582c4","sha256:e5c3419151e235f58de561f8bf7ae53ab2664a8557b322c07e112e555296a5c1"]
      - values: {"f":9,"N":72}
        answers: ["sha256:a56ccb6400b551cd32f430871b336cce118198744ee47b491f85e8579e46a63e","sha256:b91302ff58578f2c4a64ae76144e393074511634a1b117d31051b12047066683","sha256:2363ed90d0234507333bc370e2bb815ce8491c8c291d975091a57fbe0ac33a65"]
  - id: varianza-y-desviacion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula la varianza y después la desviación típica (de la población, dividiendo entre el número de datos) de ${{L}}$. Da la
      desviación típica con al menos cuatro cifras significativas.
    variants:
      - values: {"L":"2,\\ 5,\\ 8,\\ 9"}
        answers: ["sha256:18ff14fa6cbb28751279ed5e33227ab693a5ab50e13fa2773c7bf4bd35549968","sha256:d37f34ecd381ed1d70866e791a599d782009cd4d30bf5077b13d7c6e49f20ab0","sha256:49906f3145017c886eb45c532853fb7acd4b2d02009a73fbe04778d2bd47c605"]
      - values: {"L":"10,\\ 12,\\ 14,\\ 16,\\ 18"}
        answers: ["sha256:09d9bf923330a9314e084e30f6b9a0f9732ec747e5b90c3fc3d7ebeedcb7e48c","sha256:a84bee850c367c15967d4da1254725a73053d5ae43a6ff77c434e05138e9d831","sha256:01847ee05d1be30cb9417297ee8f370fbe3395a2b5cac5e9213d85096be19739"]
      - values: {"L":"1,\\ 1,\\ 4,\\ 6"}
        answers: ["sha256:77c7525b4dc95cb261e32c1ff812ce32338c13470bb40c670df9fb704f72ca8a","sha256:5ee2f3f926f68483ed88c9715c694a9a0abbb406aaffa8fab74cc457f4f1e217","sha256:66a7524d2d3e4957e3acc05d9938ebe5b53d96e8259a7e08a7e6d33276695f92"]
      - values: {"L":"3,\\ 7,\\ 7,\\ 9,\\ 14"}
        answers: ["sha256:d97646f707c010600b057b7551e2296d15c3faa5b449988e84d948bb36a01ce5","sha256:56d39c1481756f2ede0fec0339be251260076a7f6bad4b80ee2a1b0819d68f01","sha256:de5312a151e692a40a36de71a43a89c4654f3023c1fa3320acc8eca4dbaf0a7a"]
      - values: {"L":"20,\\ 24,\\ 26,\\ 30"}
        answers: ["sha256:301c9e8055f7f63291c125a285d74e7cf1f16d2ab1c8c1d0822c5f6b8f568337","sha256:8b120501754c9dd56b485f2acdea96d18bf5569b6d3ecf8e996ad2f2ad17b8e2","sha256:8fe23d4d264e76626fe5d6357f6206c0d1f2ab0bdbbff9a3365ceb1eeccdabce"]
      - values: {"L":"0,\\ 5,\\ 10"}
        answers: ["sha256:21e88af523e6e9eea99ccc1ece323f94082190e9bcf79b690148cee45d537dd6","sha256:98ae305dc3fb94db630edea2d3847a02399341f053e5dfdcf565b83edea8b625","sha256:f8f39e74fcce2a3e3ad7a69b5613675d7bdf3f4b52ab5c8840ba8212bc7804a1"]
  - id: rango-intercuartilico
    tier: 2
    prompt: |
      Para los datos ${{L}}$, calcula el rango (recorrido) y el rango intercuartílico $Q_3 - Q_1$ (toma como $Q_1$ el primer dato ordenado cuya
      posición alcanza o supera la cuarta parte del número de datos, y como $Q_3$ el que alcanza o supera las tres cuartas partes). Respuesta:
      `rango;RIC`.
    variants:
      - values: {"L":"3,\\ 7,\\ 8,\\ 5,\\ 12,\\ 14,\\ 21,\\ 13,\\ 18,\\ 10,\\ 6,\\ 9"}
        answers: ["sha256:c97cd787ca0df928b594b8cc294e1c8d1e80cb0fc17362e3139c5c61126f8826"]
      - values: {"L":"45,\\ 52,\\ 38,\\ 61,\\ 49,\\ 55,\\ 40,\\ 58"}
        answers: ["sha256:e0cd505b3a001471851a04b9ed1411ba620e9cd3f905beff38cf827da7e64b45"]
      - values: {"L":"2,\\ 4,\\ 4,\\ 5,\\ 6,\\ 7,\\ 9,\\ 9,\\ 10,\\ 11,\\ 12,\\ 15,\\ 16,\\ 20,\\ 22,\\ 25"}
        answers: ["sha256:3ffe208928c3ddb0d521c27ab7845f8ab7ca582fa5e88895760a5dce247914f0"]
      - values: {"L":"1,\\ 3,\\ 3,\\ 4,\\ 5,\\ 6,\\ 8,\\ 9,\\ 9,\\ 12"}
        answers: ["sha256:65b3ac3c4617dc62ae9b4b187667e619f8b7d52892d1ecad09a8bc2db834a2f9"]
      - values: {"L":"70,\\ 65,\\ 80,\\ 72,\\ 68,\\ 90,\\ 85,\\ 75"}
        answers: ["sha256:ee20bf6ba7044b5ea1ee622c722ed312b3a268612f3baaa9a35f8f33407b62e0"]
      - values: {"L":"11,\\ 14,\\ 9,\\ 20,\\ 17,\\ 13,\\ 16,\\ 12,\\ 15,\\ 10,\\ 19,\\ 18"}
        answers: ["sha256:65b3ac3c4617dc62ae9b4b187667e619f8b7d52892d1ecad09a8bc2db834a2f9"]
  - id: media-datos-agrupados
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula la media de estos datos agrupados en intervalos, usando las marcas de clase:
      $$
      \begin{array}{|c|c|} \hline \text{intervalo} & f_i \\ \hline {{filas}} \\ \hline \end{array}
      $$
    variants:
      - values: {"filas":"[0, 10) & 4 \\\\ [10, 20) & 9 \\\\ [20, 30) & 5 \\\\ [30, 40) & 2"}
        answers: ["sha256:859ac9e0b5deaf462fcc87963f0ad3794abc560b4a851fc6e00d24709259f850","sha256:fe5ef4865056a90eb49f893a6aad4af1f1d37aaf7719e43cf4466ea450f1f63e","sha256:deca19e7eb2bb4756ba8761255c736b5e398596d1534933162b4f7d0c9fdedbd"]
      - values: {"filas":"[150, 160) & 3 \\\\ [160, 170) & 10 \\\\ [170, 180) & 6 \\\\ [180, 190) & 1"}
        answers: ["sha256:c247b1584f4438616af266c4b36db93c90b5d65c1e6b7aaaf58c784055f7ce37","sha256:24caac2bd8294049eba3aa2bf3bc0d5087554bd5eb3ab6c2893c37c5d8e5968b","sha256:63fe8cb049ef341ba70f69ba18714cfdfa30e593d32f7845a6630deb36c65a28"]
      - values: {"filas":"[0, 2) & 12 \\\\ [2, 4) & 8 \\\\ [4, 6) & 5"}
        answers: ["sha256:1eb54d512bda0026b01389b8be165b9640c95aef179fda444675c78d8b075ca9","sha256:353c3b05fa9043fbfe72ea89f2b9d3b368c7123f97c4013e67f848c764ce68c6","sha256:1abe49f9b6992e29807bfceed6a56f9db93db66b4b02f6ffa3f733017caa23f1"]
      - values: {"filas":"[20, 30) & 6 \\\\ [30, 40) & 10 \\\\ [40, 50) & 8 \\\\ [50, 60) & 1"}
        answers: ["sha256:e0ceb5bfb31b46ce7fff65289d05eceb419c1680a744ecf3d6a51c695f84ed93","sha256:0747a7af9baba20b5d3f2ff47b0621f7c3f5ef9d92e5feae1da8890ebd215abd","sha256:c9cf84df515fe058793263da67ce69cb2cce898ddabcc9fe643de6683fe0d885"]
      - values: {"filas":"[1, 3) & 2 \\\\ [3, 5) & 6 \\\\ [5, 7) & 8 \\\\ [7, 9) & 4"}
        answers: ["sha256:c7bb67e528f73527e285db662edf42d0e14c39bc2b425dff6da347efe4f5c20e","sha256:075a0083a1c13286e189c181e4f690a17255a07d1396eecd9ddd682682c327e7","sha256:1a3c0741159426ccf8037c5187780ef2634f419707624a4535f08f59e1295743"]
      - values: {"filas":"[100, 200) & 5 \\\\ [200, 300) & 3 \\\\ [300, 400) & 2"}
        answers: ["sha256:8affba4adae9e61d8cf660d7e37097eafea87ee080fa4e5fefd641cfcfef4e6e","sha256:0ae37460c96200b96f98c7b51229c01967cd81a857d434891010e4cf5f7b9f15","sha256:ded63fe6ad8cf2725b50dfb6fe76aace56bbca6b297c78bfafb5d81dfbade65c"]
  - id: media-ponderada
    tier: 1
    type: numero
    sig: 10
    prompt: |
      La nota final de una asignatura se calcula con estas notas y pesos: {{N}}. ¿Cuál es la nota final?
    variants:
      - values: {"N":"$6$ (que vale el $40\\,\\%$), $8$ (que vale el $60\\,\\%$)"}
        answers: ["sha256:52181c553ddb0c6b1e717747ebcc6a34860eaa8d08f2c400fc4497d76da956f6","sha256:3fe592235659e9267aba3b37cc38e3b7566f5de3e7f81da28d07cd97e5ec00cc","sha256:d2a6ca9c470347217a0d37a1f267248c96816b0964c4ae81ccb80e7b143e693c"]
      - values: {"N":"$5$ (que vale el $20\\,\\%$), $7$ (que vale el $30\\,\\%$), $9$ (que vale el $50\\,\\%$)"}
        answers: ["sha256:554f618295be5b3dcbb2ee174ec11e43f59aeafa2dfea0079ca4b22cc2f78ae9","sha256:e5af9dd024f5c4ce2e26afae201e07fe69503f5d6a86083414f6e4d8d1a1911d","sha256:35392f3485dc14380aa3552efc316e476578a14ceda6e806d649f565eb5d89f8"]
      - values: {"N":"$4{,}5$ (que vale el $25\\,\\%$), $6$ (que vale el $25\\,\\%$), $8$ (que vale el $50\\,\\%$)"}
        answers: ["sha256:a69ed50e1ca0933b2ea0046b0a7fefe693a6f11f6db3d961b6e179a0e5f8aabc","sha256:2a25cb2698e77330e9d2a6a5a7c6990b590c6a4cded2e269e01190b3bd0b0a21","sha256:60b0334f2ff0edcd53d10141b64cc3ef7f35577c5d46437cac11426de956b628"]
      - values: {"N":"$10$ (que vale el $10\\,\\%$), $7$ (que vale el $60\\,\\%$), $5$ (que vale el $30\\,\\%$)"}
        answers: ["sha256:e216f400e4a26b5c74d09977f9f75f69885bd9411eed4a332c98799ede112172","sha256:98675ad12f0247f435a55b446d481878741cb54ce6b9fe34f78d5a7d0645c8c6","sha256:03dba4d22fb9cdad9fe6de44c4988bc2e9341baecaa53cc773a4b667a8a8a451"]
      - values: {"N":"$3$ (que vale el $50\\,\\%$), $9$ (que vale el $50\\,\\%$)"}
        answers: ["sha256:e91d07dc6b21ea28d7b30a94f0d8e276a21a3875ffe453f4747c31aa10cf8076","sha256:45aa18e9727baea46c1f301a364964c8dd009bc0e72d3ea0b207854396e09c06","sha256:d0ab4297f57286b292ded8095c470e101a258a7f191fbe7afab1b59ed951e681"]
      - values: {"N":"$6{,}5$ (que vale el $30\\,\\%$), $7{,}5$ (que vale el $30\\,\\%$), $5$ (que vale el $40\\,\\%$)"}
        answers: ["sha256:a88e373335926261567ed7f92bdb4084c09ab1939482a28da2517f6bb670ad63","sha256:247bbb27c0e1eff07d7cb0d866f9df45709c1195cfc806dee122908fb5eeafd1","sha256:67e474fb4e7fb0297b049764d712175de32e2b29b1d44d3504edac5934bd757a"]
  - id: transformar-los-datos
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Los datos ${{L}}$ se transforman con $y = {{a}}x {{b}}$. ¿Cuál es la desviación típica (poblacional) de los datos transformados?
      (Piensa primero qué le pasa a la media y qué a las distancias a la media; al menos cuatro cifras significativas.)
    variants:
      - values: {"L":"4,\\ 6,\\ 8,\\ 10","a":"2","b":"+ 5"}
        answers: ["sha256:43b8f202e228e7e9a5fa57b6df6cd8b70891a6533b13d9ca76606b35772344f1","sha256:68fd00bd4a5ed11e707d88ea7d5ffcfe8db1c390bb492ba180e99223e6d48728","sha256:3a6ad73d0e978a2d0b10a0c12b204df30e2001ec3e99d1dfbd1b948ce6813874"]
      - values: {"L":"1,\\ 3,\\ 5","a":"3","b":"- 1"}
        answers: ["sha256:f51155c91b7a33759e30eab0b392a823b8ebf9b25b54e10bde15e2c3fe4d5799","sha256:08eca508c9b1449e3889840e48b8eaa2a9dff6b253427fa4f05f55063bec7561","sha256:441ef991415800a5f6a94bcbadb1e166cb08ee9d8ac20306afb41c8a73c83025"]
      - values: {"L":"10,\\ 20,\\ 30,\\ 40","a":"0{,}5","b":"+ 0"}
        answers: ["sha256:3699fd20d4ec50df72ec515b52f270b49bae20a03fdbb7a4a1bc5b9d889d2fb1","sha256:b18c97b37c4e7176467df37b312fbc39ea39133993490c48ffb79a7906788a87","sha256:91b0b925685bbbd89d19899add6fb203e1162b120cae8db0a0ca350d2b40dacb"]
      - values: {"L":"2,\\ 2,\\ 5,\\ 7","a":"1","b":"+ 10"}
        answers: ["sha256:05d298f585d14de141a5585c9b97b95f8411535137d868c24ca69a8bb930a3f6","sha256:d382ad6dcd050b9baf67b72682e73e112a922857d4e8517c4759d88a5f892466","sha256:86d4ddb6796e420943a00279b7b7c03fce4aa0dd179fa1ef0f13bf4e0cc9cf7e"]
      - values: {"L":"0,\\ 4,\\ 8","a":"-2","b":"+ 20"}
        answers: ["sha256:a8f6511f68c7809f466c4948fafc63fb7221238bb91281c1bfe98c601a64ab8e","sha256:34185199bced768106cfd7a96236107c05458f3817e0638020b219b0b1e54eea","sha256:9cc56695d8f6da229dfb8dd03bbc1cf2f7112b4741a597f85238bfbdd29586db"]
      - values: {"L":"5,\\ 9,\\ 11,\\ 15","a":"10","b":"- 50"}
        answers: ["sha256:9fc0fc7927301ee7c7aa733a33aa8e46e2667530574e2a10e2ef3e5387890f54","sha256:5be56f13018068bb413fc7d75a16aaa33f0fed63db44a7e39e40b45d23eb655a","sha256:7dccc79225b69735495f9756c1348d83b75ab71e29a6e38308f027ead2e99489"]
  - id: coeficiente-de-variacion
    tier: 2
    type: numero
    sig: 6
    prompt: |
      El grupo 1 tiene media ${{m1}}$ y desviación típica ${{s1}}$; el grupo 2, media ${{m2}}$ y desviación típica ${{s2}}$. Comparando los
      coeficientes de variación, ¿qué grupo es relativamente más disperso? Responde $1$ o $2$.
    variants:
      - values: {"m1":"50","s1":"5","m2":"12","s2":"2{,}4"}
        answers: ["sha256:0fbecd09d4f8fac3beb6010860c21c27d5cd80c73e82d0fa989f55083cc8f089","sha256:c481408af2e4716b7fa4e9c4b2cf9f3cb47210ed2ff5a23071c9e2654b55c571","sha256:aa6a483f35ca8876c79a91d5bb248b337bb558ebec769a28fa7450265279aadb"]
      - values: {"m1":"170","s1":"8","m2":"60","s2":"9"}
        answers: ["sha256:93b3af462ecff6e7fbeddb7e4bc2f39768a3f3a58d5c1308954a76d7a21adbe8","sha256:add08b4e97e47c76f539d4cdb75704753f933424689726bada3ecfca82b58372","sha256:8b22259525097c4ad60c6daf2f0015453fc9ad3f9945225820972982867c7831"]
      - values: {"m1":"20","s1":"4","m2":"200","s2":"30"}
        answers: ["sha256:fb0d95e821a3a4a58afb84be402e238ecb4504569d82ef4c1176d2576c8b24f4","sha256:0dbccd75fd0aa7515a3647d7690e2c5cb48fdda8b690c25401fca28fe3bc1b87","sha256:a99f2e8d4c2cc78ef26171bd1cf914f5a8e5e04912eb240a4bd6e6efef4018f4"]
      - values: {"m1":"8","s1":"1","m2":"80","s2":"12"}
        answers: ["sha256:fdbc5d16caeff45a4224b068866d0d54311351345eb2aebca9fe484f2396e4ed","sha256:e4be71eba115629e2baa50a73d353246d6f9c1e37af26fc6eae4ab982b2b9e63","sha256:26ae2b55394570e7e63c113715ea7f23757137ad60e60e71764bc04ff4e3dc1a"]
      - values: {"m1":"1000","s1":"150","m2":"40","s2":"5"}
        answers: ["sha256:0e552596997bf5a40326a3ad6447fbd0b277e14e96b337a08b47bd6f480f829c","sha256:b988c843da1799c8a79feacfad71c02cdd22e263a55c8126e4ee9793cb3ce9d0","sha256:6cccbc98b29f8e0967e9c1e6905085811b5cbcadbc40a05c1cb6d7ca83fa0ee3"]
      - values: {"m1":"3{,}5","s1":"0{,}7","m2":"7","s2":"0{,}7"}
        answers: ["sha256:b4cc3a890122c0a986b6aa739da8d382a1c0816f5ae4fb96a36e35739666c1e1","sha256:edb6f0614d9cd02081251f89b84a0f77baf0a8596918d77da8cc44d74fb1c3d8","sha256:72303c497c295ffcd551a7cac012e22aaa09766937df7a55b76ac5aee2af4b17"]
  - id: media-mediana-y-atipicos
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** En una pequeña empresa, nueve empleados cobran $1\,400$, $1\,450$, $1\,500$, $1\,500$, $1\,550$, $1\,600$, $1\,650$, $1\,700$ y $1\,750$ € al mes, y la
      directora, $12\,000$ €. (a) Calcula la media y la mediana de los diez sueldos y explica cuál describe mejor el «sueldo típico» y por qué.
      (b) Explica por qué la varianza usa los **cuadrados** de las desviaciones y no las desviaciones sin más. (c) ¿Qué medida de dispersión
      resistiría mejor al dato atípico?
    sealed: "gz64:H4sIAAAAAAACCn2TwYrbSBCGX+VH6GB7FSMbZgcccliW3AIJ5JjeWcrdNaZDq1rpbgl7hrnkTXJcWJ/yCHqTPMnSkuxMwpKbUEl/Vf3/V49F9K5L1kuxK1arBS1XK7whxK4hcES5uVGq2tQ1fsNmq1RV1zVeYXs7vS0rNGwsocy1201d4tvnf9d4GwwLGR8rOB+hWVIgxxHRC8qNUtXNTV3iND3/XtflbhISmsu3N7PUG5pbcEzDF7Q+gEXbhmBYiXTcMwyPbYzlB8SOnfExf/ipY7CDoeRBaTi3Vnssysse5RLJhqwDdo5ewtF1iOidh+GWxWR5B583wgmGow52z2j4Yx7FzQ2VzA3WWLzLhegReSwyDIXn4i0Fus7p0QbWNo/P6G1vWQytl0qUrFaL/ZRHLsbekrZecirHvy1eQKk9BRxLRMtNG3hMTVDWJRaOsgXRJttThPZNyxJJQMgV4QONlWUFisMZ2arYzU6LR2MNQ8jQGn84sOOeQv6RnBLdkQlkPJI3NEX6vdNp1D8EEsMRLeeezfAlrrF4z2i9CcOZ0EUavevJ+QDajxD6lxMss3xEsiwsk9NZLPjWsiHDUQm5A+8DWU2xyuv5bPD98DU0nSOUSkV7aOhui1dQyvccnBV+PN5tn74bd7ct18sM2MXc4atgipGqrBdoOD+MdBF6CpbkgSr0HbueZyc7seNEVwYp+bie09M5vdcOgeTgYSVx0B2FNJyd1X53BWym7bJ+SNZxrMZQNEWbA9HU7C3JyH8nE9N8TIEbX6Gx44FFzMRP/XIUz1e7IEoZTGNjxlDWRVWEbh+sLnYfHgsdbOJgfbEr/iSnuwu1zw789D+XegIfW5el2YHvWSc/Xs3l6nKXtpPkY7HbPlU/9Hk9/5lndz+TPhGtOeR18u6fuuGfPP+IpIDclZdf9XgXfOvlmTc/Z5HN8vjYxWTvraYftf56+g9/kTKpJwUAAA=="
  - id: r-tipo-variable
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿De qué tipo es la variable «número de hermanos»?
    options:
      - |
        Cualitativa
      - |
        Cuantitativa continua
      - |
        Cuantitativa discreta
      - |
        No es una variable
    answers: ["sha256:f76f59f0d95788818e151eb2c72388e9a66ca977b615cd282fcd265004581e4d"]
  - id: r-muestra
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es una muestra?
    options:
      - |
        Todos los individuos que interesan
      - |
        Una parte de la población que se estudia de verdad
      - |
        Un dato
      - |
        Un gráfico
    answers: ["sha256:792df4f4652a0fc6ec33ef0d07694a1ab11c1f2195707808f7c3e11258e60140"]
  - id: r-histograma
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Para qué tipo de datos se usa un histograma?
    options:
      - |
        Datos agrupados en intervalos
      - |
        Datos cualitativos
      - |
        Porcentajes que suman $100$
      - |
        Evolución en el tiempo
    answers: ["sha256:efecbfad5fd6948ca907dadbc502e3de5a68f0616fe8cfea2f9b8bf36b428187"]
  - id: r-suma-frecuencias
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto suman todas las frecuencias relativas de una tabla?
    answers: ["sha256:0b174b2be2081ab0afeb03f2d45303283a9f0debd925065a77b9218ffda79a3c","sha256:4a6767ac71c8a316a1a3be0de6d9b42636ce15371408ff7564ac29d84038ee16","sha256:4fc96d9aa460bd1d12e22d78e66bfa2de0eacc7cd0a852a6873344c4873f0624"]
  - id: r-media-mas-constante
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si se suma $3$ a todos los datos, ¿qué les pasa a la media y a la desviación típica?
    options:
      - |
        La media no cambia y la desviación sube $3$
      - |
        Las dos suben $3$
      - |
        Las dos se multiplican por $3$
      - |
        La media sube $3$ y la desviación no cambia
    answers: ["sha256:2c0ec6d5bcf0a1971e5447360ae544cb26d01f7094ec094ec9c2c29e12e44c4a"]
  - id: r-mediana-posicion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es la mediana?
    options:
      - |
        El dato que más se repite
      - |
        El promedio
      - |
        El valor central de los datos ordenados
      - |
        El mayor menos el menor
    answers: ["sha256:7220fca40c6f0217b0bba56db8dbb47bb3ea88c982edd01f84f5844aac486d8f"]
  - id: r-cv
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo conviene comparar la dispersión de dos grupos con el coeficiente de variación en vez de con la desviación típica?
    options:
      - |
        Cuando tienen la misma media
      - |
        Cuando tienen medias o unidades muy distintas
      - |
        Siempre que haya datos atípicos
      - |
        Nunca
    answers: ["sha256:bb0ec430383b1010e5a1629240acb4ed5b5795959e556b83ab8e6a455e4399d3"]
---

# Estadística descriptiva: población y muestra, variables, tablas de frecuencias, gráficos, medidas de centralización, posición y dispersión

Encuestas electorales, el paro, la nota media de una clase, la duración de una batería, la eficacia de una vacuna: cada día se
toman decisiones a partir de datos. La **estadística descriptiva** enseña a organizarlos en tablas, a representarlos con gráficos
honestos y a resumirlos en unas pocas medidas que dicen dónde está el centro de los datos y cuánto se dispersan. Es la primera
herramienta para entender el mundo con datos y para no dejarse engañar por ellos.

## Objetivos

Al terminar sabrás:

1. Distinguir población, muestra, individuo y tipos de variables.
2. Construir tablas de frecuencias (absolutas, relativas y acumuladas), también con datos agrupados.
3. Elegir y leer gráficos (barras, histogramas, sectores, líneas) y detectar gráficos engañosos.
4. Calcular e interpretar media, mediana, moda, cuartiles y media ponderada.
5. Calcular e interpretar rango, rango intercuartílico, varianza, desviación típica y coeficiente de variación.

## Qué debes dominar antes

[[mat-decimales]] y [[mat-porcentajes-finanzas]] (porcentajes) y [[mat-funciones-graficas]] (leer gráficas).

> [!question] Test de entrada
> 1. ¿Qué porcentaje es $12$ de $48$?
> 2. ¿Cuánto es $\sqrt{16{,}81}$?
> 3. Ordena de menor a mayor: $3{,}2$; $2{,}9$; $3{,}05$.
>
> Respuestas: $25\,\%$; $4{,}1$; $2{,}9 < 3{,}05 < 3{,}2$.

## 1. Para qué sirve

- **Informarse con criterio**: entender (y cuestionar) cifras y gráficos de noticias, anuncios e informes.
- **Ciencias**: todo experimento produce datos con variabilidad; la estadística dice qué es señal y qué es ruido
  ([[tro-razonamiento-cientifico]]).
- **Empresa y Estado**: control de calidad, estudios de mercado, censos, indicadores económicos.
- **Base de la inferencia y la inteligencia artificial**: los modelos aprenden de datos resumidos con estas mismas medidas
  ([[mat-estadistica-inferencia]]).

## 2. Conceptos básicos

> [!practico]
> Para saber qué opina un país no se pregunta a todo el mundo: se pregunta a unas pocas personas elegidas bien. Todo el país es la
> **población**; las personas encuestadas, la **muestra**. Si la muestra está mal elegida (solo gente de una ciudad, solo quien quiere
> contestar), el resultado puede estar muy sesgado, por grande que sea.

- **Población**: el conjunto de todos los elementos que interesan. **Muestra**: la parte que se estudia de verdad; debe ser
  **representativa** (elegida al azar). **Individuo**: cada elemento.
- **Variable estadística**: lo que se mide en cada individuo.
  - **Cualitativa**: no es un número (color favorito, marca de móvil).
  - **Cuantitativa discreta**: toma valores aislados, normalmente al contar (número de hermanos).
  - **Cuantitativa continua**: puede tomar cualquier valor en un intervalo, al medir (estatura, tiempo).
- **Fases de un estudio**: plantear la pregunta, recoger los datos, organizarlos, analizarlos y sacar conclusiones (con prudencia).

## 3. Tablas de frecuencias

Para $N$ datos:

- **Frecuencia absoluta** $f_i$: cuántas veces aparece el valor $x_i$. Suman $N$.
- **Frecuencia relativa** $h_i = \frac{f_i}{N}$ (suman $1$; multiplicadas por $100$, son porcentajes).
- **Frecuencias acumuladas** $F_i$, $H_i$: suma de las frecuencias hasta ese valor (solo tienen sentido si los valores se pueden ordenar).

Con muchos valores distintos (variables continuas) se **agrupan en intervalos** o clases, $[a, b)$, y cada uno se representa por su **marca de
clase** $\frac{a + b}{2}$.

## 4. Gráficos estadísticos

| gráfico | para qué |
| --- | --- |
| diagrama de barras | variables cualitativas o discretas; la altura de cada barra es la frecuencia absoluta |
| histograma | datos agrupados en intervalos; rectángulos contiguos cuya **área** es proporcional a la frecuencia absoluta |
| diagrama de sectores | partes de un todo; el ángulo de cada sector es $\frac{f_i}{N} \cdot 360^\circ$ |
| polígono de frecuencias, gráfico de líneas | evolución o forma de la distribución |

*Ejemplo:* si $8$ de $20$ alumnos son del grupo A, su sector mide $\frac{8}{20} \cdot 360^\circ = 144^\circ$.

**Gráficos engañosos**: ejes que no empiezan en $0$, escalas desiguales, dibujos en 3D que deforman áreas, sectores que no suman el $100\,\%$, o
pictogramas que agrandan en dos dimensiones algo que solo se dobla en una.

## 5. Medidas de centralización y de posición

> [!practico]
> Si en una clase de $5$ alumnos las notas son $4$, $6$, $7$, $7$ y $9$, la **media** reparte el total por igual ($33 : 5 = 6{,}6$), la **mediana** es la nota
> del alumno de en medio cuando se ordenan ($7$) y la **moda**, la más repetida ($7$). Si un alumno hubiera sacado un $0$ en vez de $4$, la media
> bajaría bastante y la mediana nada.

- **Media aritmética**: $\bar x = \dfrac{\sum x_i}{N}$, o con frecuencias, $\bar x = \dfrac{\sum x_i f_i}{N}$. Es el «punto de equilibrio» de los datos, pero la
  arrastran los datos extremos (**atípicos**).
- **Media ponderada**: si cada dato tiene un peso $w_i$, $\dfrac{\sum x_i w_i}{\sum w_i}$ (notas que valen distinto).
- **Mediana** $Me$: el valor central de los datos ordenados (con un número par de datos, la media de los dos centrales). Deja la mitad de los
  datos a cada lado y es **robusta** frente a atípicos: por eso se usa para sueldos y precios de vivienda.
- **Moda** $Mo$: el valor más frecuente. Puede haber varias; es la única que sirve para variables cualitativas.
- **Cuartiles** $Q_1$, $Q_2 = Me$, $Q_3$: dividen los datos ordenados en cuatro partes iguales. Un criterio habitual: $Q_1$ es el primer dato cuya
  frecuencia acumulada alcanza o supera $\frac N4$, y $Q_3$, el que alcanza o supera $\frac{3N}{4}$. Los **percentiles** generalizan la idea
  (el percentil $90$ deja por debajo el $90\,\%$).

## 6. Medidas de dispersión

> [!practico]
> Dos clases pueden tener la misma nota media, $6$: una en la que todos sacan entre $5$ y $7$, y otra en la que la mitad saca $2$ y la mitad
> $10$. La media no las distingue; hace falta medir cuánto se separan los datos del centro.

- **Rango** (recorrido): mayor dato menos menor dato. Muy sensible a atípicos.
- **Rango intercuartílico** $RIC = Q_3 - Q_1$: amplitud del $50\,\%$ central de los datos; robusto.
- **Varianza**: media de los cuadrados de las desviaciones a la media,
  $$
  \sigma^2 = \frac{\sum (x_i - \bar x)^2 f_i}{N} = \frac{\sum x_i^2 f_i}{N} - \bar x^2 .
  $$
- **Desviación típica** $\sigma = \sqrt{\sigma^2}$, en las mismas unidades que los datos. *Ejemplo:* $2$, $4$, $6$: media $4$, varianza $\frac{4 + 0 + 4}{3} = \frac83$,
  $\sigma \approx 1{,}63$.
- **Coeficiente de variación** $CV = \frac{\sigma}{\bar x}$: dispersión relativa, sin unidades; sirve para comparar grupos con medias o unidades muy
  distintas.

(Cuando los datos son una muestra y se quiere estimar la varianza de la población, se divide entre $N - 1$ en lugar de $N$; se explica en
[[mat-estadistica-inferencia]]. Aquí siempre se divide entre $N$.)

> [!formal] Con rigor: por qué se usan cuadrados y la fórmula abreviada
> Las desviaciones suman siempre cero: $\sum (x_i - \bar x) = \sum x_i - N\bar x = 0$; por eso su media no mide la dispersión, y se elevan al cuadrado.
> Desarrollando, $\sum (x_i - \bar x)^2 = \sum x_i^2 - 2\bar x \sum x_i + N \bar x^2 = \sum x_i^2 - N\bar x^2$, y dividiendo entre $N$ sale
> $\sigma^2 = \overline{x^2} - \bar x^2$. Consecuencia: si se transforman los datos con $y = ax + b$, entonces $\bar y = a\bar x + b$ y $\sigma_y = |a|\,\sigma_x$ (sumar una
> constante mueve los datos sin separarlos). $\blacksquare$

## 7. Errores típicos

- Calcular la mediana sin ordenar los datos.
- Usar la media cuando hay datos atípicos y lo que interesa es el valor típico.
- Olvidar multiplicar por las frecuencias en una tabla.
- Confundir varianza y desviación típica, o dividir entre $N - 1$ cuando se pide la poblacional.
- Sacar conclusiones de una muestra no representativa, o confundir correlación con causa ([[mat-estadistica-bidimensional]]).
- Leer un gráfico sin mirar dónde empiezan los ejes.

## 8. Resumen

- Población, muestra (representativa), individuo; variables cualitativas, discretas y continuas.
- Frecuencias absolutas, frecuencias relativas y frecuencias acumuladas; datos agrupados y marcas de clase.
- Barras, histograma, sectores ($\frac{f_i}{N}\cdot 360^\circ$); cuidado con los gráficos engañosos.
- Media (sensible), mediana (robusta), moda; cuartiles; media ponderada.
- Rango, RIC, varianza $\overline{x^2} - \bar x^2$, desviación típica, coeficiente de variación.

## Repaso: lo que debe quedarte dentro de un mes

1. La diferencia entre población y muestra y por qué la muestra debe elegirse al azar.
2. Cuándo conviene la mediana en vez de la media.
3. Cómo se calcula la media de una tabla de frecuencias.
4. Qué mide la desviación típica y la fórmula abreviada de la varianza.
5. Para qué sirve el coeficiente de variación.

## Siguiente

[[mat-funciones-basicas]] repasa el bloque; después viene [[mat-combinatoria]] (contar de forma ordenada), y más adelante la estadística
bidimensional ([[mat-estadistica-bidimensional]]).
