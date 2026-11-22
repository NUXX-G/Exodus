---
id: fis-cuantica-introduccion
title: "Introducción a la física cuántica: cuerpo negro y cuantos, fotones y efecto fotoeléctrico, espectros y átomo de Bohr, dualidad onda-partícula e incertidumbre"
area: fisica
trunk_level: 3
prerequisites: [fis-relatividad-bach, fis-induccion, mat-probabilidad-elemental]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 3 (en español), OpenStax (2021), capítulo 6: «Fotones y ondas de materia» (radiación de cuerpo negro, efecto fotoeléctrico, efecto Compton, modelo de Bohr del átomo de hidrógeno, ondas de De Broglie, dualidad onda-partícula). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/6-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 3 (en español), OpenStax (2021), capítulo 7: «Mecánica cuántica» (funciones de onda, principio de incertidumbre de Heisenberg, ecuación de Schrödinger, partícula en una caja, efecto túnel). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/7-introduccion"
  - "M. Planck (1900); A. Einstein, «Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt», Annalen der Physik 17 (1905); N. Bohr (1913); L. de Broglie (1924); W. Heisenberg (1927)."
hints:
  - "Concepto: a escala atómica, la energía se intercambia en paquetes (cuantos). La luz llega en fotones de energía h f; los átomos solo tienen ciertos niveles de energía y emiten fotones de frecuencias concretas al saltar entre ellos; y toda partícula se comporta también como una onda de longitud h/p."
  - "Herramienta: fotón E = h f = h c/λ, p = h/λ; fotoeléctrico E_c,max = h f − φ, umbral λ₀ = h c/φ; Wien λ_max T = 2,898 · 10⁻³ m·K; Bohr E_n = −13,6/n² eV, h f = E_i − E_f; De Broglie λ = h/p (electrón acelerado por V: p = √(2 m e V)); Heisenberg Δx Δp ≥ ħ/2."
  - "Documentación: OpenStax Física universitaria vol. 3, caps. 6-7."
exercises:
  - id: energia-de-un-foton
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la energía, en eV, de un fotón de ${{l}}$ nm de longitud de onda ($h = 6{,}626 \cdot 10^{-34}$ J·s, $c = 3 \cdot 10^8$ m/s, $e = 1{,}602 \cdot 10^{-19}$ C)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"l":"400"}
        answers: ["sha256:30aa47239773c7f4a1fffa256d49f60f0515d78f432773250d0e8e7fa773b9a1","sha256:5e9853070ec67425dd1852ad3ae8a846af38b46997abea2a27177d0f3b5a8d90","sha256:00baddb9dfb1f11081718735fe810fab8f82bb1b4412542069e9b04b6f9a9730"]
      - values: {"l":"700"}
        answers: ["sha256:883a33fc9a2d3b33112cfe16d3ca40cf0409f7b283e1b8f7a756df4c72d3913f","sha256:377f3284449b21bc36e2ce0e1bf70fa1a7ef066008c5fe3f237049d712e8c98b","sha256:c9df2a591f67e206be263e1aa90e47afa22a5c049afd2f9b1fbd913734262dda"]
      - values: {"l":"254"}
        answers: ["sha256:b9dd721c3f62f4ae5d473def2a129c10c93988701bfd8b31ce886713740a5df2","sha256:ccef911d6fef578975364cd1e7da454456c02193ec77d750825e4ed289825ff6","sha256:95aee81f18e44876e20a8dd83f8f7ef4dfc9672c69ff648749e0be7f73f61079"]
      - values: {"l":"1064"}
        answers: ["sha256:c18c220539115598278ded661fd96d062437f5d12df2b970715af6581b486d80","sha256:983bc1289daed6be195b3a882e28adf8666f2961c970c8b01eaf889687067c8a","sha256:e9d30556b48375b5d153f245f22791fcb16074e556fcef415e97c90dfee3b1b2"]
      - values: {"l":"589"}
        answers: ["sha256:94c0fb9989ae3a3d4eea61795a89f02ab673b8c539573780fd78e0a597fa5d1f","sha256:a688551aa69c070cf12f2fe0f50767475f3d08a16ca7d564d3c9151c4950ea26","sha256:934c11986377061e6321315ff36f17b545013b3d8e05bf4845eecbb5a3a49529"]
      - values: {"l":"121{,}6"}
        answers: ["sha256:bd90fb5a611ad6aa2635c064c093386bd6c97a936c6b53e222518dcf33d41d96","sha256:efa63101277b02ac0adb305edf2f4385fdf6463b843f137f51ad8d4796549e47","sha256:552cf61fec3d11ac37f5552c1be982fd383e4ec5effadbc8fde6f8c45ad1424b"]
  - id: fotones-por-segundo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un láser de ${{P}}$ mW emite luz de ${{l}}$ nm. ¿Cuántos fotones emite por segundo, en unidades de $10^{15}$? ($h = 6{,}626 \cdot 10^{-34}$ J·s, $c = 3 \cdot 10^8$ m/s; al menos cuatro cifras significativas.)
    variants:
      - values: {"P":"5","l":650}
        answers: ["sha256:a71aa2800654422e187832de98f406a73f6449f08fb1e01e68b6c1c53409f3dd","sha256:5b34391a35af6fff80f963cb5ac8d56a98437e843f1d668b48fb764749de8528","sha256:d7c0bb168e8cb14b489ab6eefbee8c9e7fb9308444c05551a0d8846a1af98986"]
      - values: {"P":"1","l":532}
        answers: ["sha256:6037569146f79d166a7bbd58fd690aeea8c5f1d0a1b82218123b212eebdbbb71","sha256:dfd5b77a3ef338344967b95fba0093dc64432432b1cf26c2ffb20ec59f26ceff","sha256:3b908af3435708b2198b57a5253b4434017acf54c35b0c2c8ab06f300d3ddbe1"]
      - values: {"P":"100","l":1064}
        answers: ["sha256:6a3f3603df6909fd8e1ec7925dba1f4cb38fbf0e4d6b0c3d102620938616d5ac","sha256:6ca52d31305c737992d86ea94df5696fa3673924e8c14c0108c3a1959faff6f9","sha256:9c1a357a1be14799bb1a35eb74359c444b65532949eb5e3cc881ab65c161198d"]
      - values: {"P":"0{,}5","l":405}
        answers: ["sha256:3ea3c51e136eca73efa7055d4f8f8d5b4e84c485cd4048c8a982dd419a392236","sha256:88253bcd4fe661d49b3fe47268a077cdde806fdcfbb54550b3cff051450132e7","sha256:9ffa47c36dc8904461ff8726f292dbc1eb1416e2bad3cf3d3b59416fed350f0a"]
      - values: {"P":"20","l":808}
        answers: ["sha256:aa8460bf27a9b24281a29353ed5c07e6e4befe1dc355d4b451058f2d0425bbee","sha256:4eda9ed3b517090c15089e5a4f1ef3a115a7cb805dca168e7fab817adc5832c9","sha256:facaee4d3ecd0dfd3ce46559f79aec5a32c48f0c78523f11abfac4087fff3da2"]
      - values: {"P":"3","l":633}
        answers: ["sha256:fc2ca31cf728bf6b1b139334ba4125dbee2b383cf4e2798deafd4f7254f22768","sha256:bc90e0836e84f504184ccff80e0dab33d195b37ee25e1dc1745ba68462d3a9b4","sha256:77c5f9db1a0b7b30926bebd423b0cc07911b41dd0fec762fee6ffa9f66d4694d"]
  - id: efecto-fotoelectrico
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Sobre un metal con trabajo de extracción de ${{phi}}$ eV incide luz de ${{l}}$ nm. ¿Cuál es la energía cinética máxima de los electrones arrancados, en eV? ($h = 6{,}626 \cdot 10^{-34}$ J·s, $c = 3 \cdot 10^8$ m/s,
      $e = 1{,}602 \cdot 10^{-19}$ C; al menos cuatro cifras significativas.)
    variants:
      - values: {"l":300,"phi":"2{,}3"}
        answers: ["sha256:a449d164c5c6a2e9f6f1d4003fcdab5d163da32eca67dd23529ada4811fdd95c","sha256:eb27841b1bdb6d80995de7752ed5877212f353e35389449c4c2f6c4767aa5a7c","sha256:c4e2ee3b8bcccccf3670dede5d127121b85fcb3a86163541c69effcaf52eaabd"]
      - values: {"l":200,"phi":"4{,}3"}
        answers: ["sha256:616e087f596f741bb8f6bdf43d96bfa19497dc65220454b17912e33c81234a94","sha256:156fb45ca72937b6fa1bad4243d9b0510df619ac1a46c668a4749207a04d9588","sha256:8c85d2849ddc1b1459362970ec7bb85cf791ac62e1b7efa2083284aee7e5f86f"]
      - values: {"l":400,"phi":"2{,}1"}
        answers: ["sha256:6158d5c3dcdb1efc1a3f32bc5facb388455cc724d2b3cbc60732dca663d81630","sha256:349d4b2ffbc35a969b6235d86d924237febeb2bc25c039d694d28e3d2a7259f4","sha256:b4a6ee356a7ab9fa56bd2708591d5c634c0969a93cd4f07d2aca37e808f9f9d5"]
      - values: {"l":250,"phi":"3{,}7"}
        answers: ["sha256:3fac2e579cc82aa7273e8f4456c1e5a897c05f87b1b57111610c3631ac6eae6f","sha256:f413d907d93aa46386745b970f1b949f8b45417ae24017407def9299ac96c404","sha256:4aaaababbb3eacce93f058cf01bf9979368a1c6ee595d564ae2c08d16191594c"]
      - values: {"l":180,"phi":"5{,}1"}
        answers: ["sha256:793d580d5be37dc5b3f710c36be58dd50f17e966c4162e4bc16fd6c18a51c0c1","sha256:0e0b11e42010b51a5f4063c32cadb8e527808fb74d0dbe0f828d8e278e956c63","sha256:fcb4050a3c9f63f6afa6e8ed35c4d01f642ca439e7398c560eaae444aafb9cf3"]
      - values: {"l":350,"phi":"2{,}75"}
        answers: ["sha256:5ac8ea428db906eb4675d66296cc95669b16d265aae47ed5c5375e5da46f4419","sha256:11bfe3215bbd7db42d93483522b0b3815da28584d7dab914baa8fa4c06cb4b2b","sha256:7787a9d2c6474ef821775c96f90ff50fb42ca81fbf5fe693921d2490c42e041a"]
  - id: longitud-de-onda-umbral
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la longitud de onda umbral, en nm, para el efecto fotoeléctrico en un metal con trabajo de extracción de ${{phi}}$ eV? ($h = 6{,}626 \cdot 10^{-34}$ J·s, $c = 3 \cdot 10^8$ m/s, $e = 1{,}602 \cdot 10^{-19}$ C;
      al menos cuatro cifras significativas.)
    variants:
      - values: {"phi":"2{,}3"}
        answers: ["sha256:126d004e146cbed3ec9417727eb220203a78e65e774dab51c4f4761d7a7cf91b","sha256:19ea6b418e814a8088a4d25d5fb67836c1b4ba21656e1550b12f1e6da55bd367","sha256:af7183e1466676fd105f1c47a2a8e40a9bba1b0a477da4e4e55851a4439552c9"]
      - values: {"phi":"4{,}3"}
        answers: ["sha256:003079b25a61fe1c5cbf26a4a746e68a1cc9ca8a80302eb60cd9f6c5cb374886","sha256:e6322896e20ca532d8c6dfb8c4b4e8b2a2059af6ab174369fe286b069038d46b","sha256:0e3c652b89ce3f86fc54364576b2b489b810287fa5e66db658e6c457ab3432b1"]
      - values: {"phi":"2{,}1"}
        answers: ["sha256:f96a5cf629851bdb88fb2f49f327c811a8b4ed47d6a3603f391db218270d190a","sha256:bd81fdb4bc4640ab5b084f0c7d1f72f90ea5c34e942eee5747540f588aed828b","sha256:1d8c39754bef521a687447eb8628053e0d17bd5818f4fb1eec85aa681e04d66d"]
      - values: {"phi":"4{,}7"}
        answers: ["sha256:2cf8a11a1dc9f5dad142e9e929b79e2b8d72b1fbd75142f3e68ba3fb2a896d52","sha256:aada950bcaa691ada9547c54856745d4a156bdb5af55711805669bf0cab8a715","sha256:7e5340e43c655ba51288584984c7a94d74cca6537a38a1a36cd0a7e2aa69287f"]
      - values: {"phi":"5{,}1"}
        answers: ["sha256:0721a4dc05341456249f0cd071187d1f42a84f5176b102e98fa4ac2954893f95","sha256:a66ee20c97a2b060d0f43da1c372b9263768ff0fdec24b11731b63a150b8a29c","sha256:662a2f22792a83dcb74904be20cdcb3c9b7a9342b5eef3f22430ec78d5dc7e74"]
      - values: {"phi":"2{,}75"}
        answers: ["sha256:269dcd7dc455febae1eb754ea12d1aed1792c29ec200a04c824953b41032431b","sha256:a64601163c19b94832f547d812268dd46557b3ba9d2d14cc579dde58fd001001","sha256:2c4affd84050ef22414631d4a4a093cd1186ccc072f409016b79adc10e3e50f4"]
  - id: ley-de-wien
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿En qué longitud de onda, en nm, emite con más intensidad un cuerpo negro a ${{T}}$ K ($b = 2{,}898 \cdot 10^{-3}$ m·K)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"T":3000}
        answers: ["sha256:ec3ea11e7cf40b0234664e08503a7f08281e3847d05701fbd1119343e1d788b3","sha256:01b6884ca65e39da77b7e18aa0496dd6ecb48a16f0113a0d31d3906e50ee5efe","sha256:3b9395e06938dc073eb79e27d5a82be3c49037c85244cec484f34e959d47d5df"]
      - values: {"T":10000}
        answers: ["sha256:9a2ef8e6974ed60a96679e9f85156f79a6b41bc74bc72f5a43ff6325f689f200","sha256:0292fd9b97bf45501c5a908f4a3e8a26810c98b107bc83d43d5bcbfe3081b37e","sha256:6b13620e4091bbaa1682c0472b5eea302f738137b7508908357922533a416226"]
      - values: {"T":310}
        answers: ["sha256:b967bde5f841381b2b05b8d60cbb840bf74fb39e5094f593575ac0f0a907cce1","sha256:00ab955f7a1d382b02159453731ce38338b5736cd2260620316ba6800bc0321e","sha256:1fc7b1f90950789c145afa19e9155ad0b0cdc9e2db0a56ba57d950c108f81e2d"]
      - values: {"T":1500}
        answers: ["sha256:6331fbfd8e72a033d24d10a7ec41e00c204122b0f1a5a9490b3d0e8ffd30a061","sha256:5173e2978b5eb95d9297451fc4e5a695afea35131ae5ff4b3c3afa8f8ce8c2a1","sha256:12c7ecded12d35855a8ee4fd6d8bc44b11d1cf7247192f9a99ef55e131d8d325"]
      - values: {"T":25000}
        answers: ["sha256:d25c5da139af3341c499af344ae88d4ecdb4c9be592cf6202a5deb7d018ad5ac","sha256:4ebf8e1a7974e39877cc33e74cfd7114f03bd35c5c814e979bd843ee75536133","sha256:7ae817ebf920e3694c93479f6c72665e41eaaa4a54c43267d1947f473b0377f8"]
      - values: {"T":4500}
        answers: ["sha256:0b40db0029a9e4da993f2d9e8c666b13181f465bc86a4579055b64188e1f8ce8","sha256:8b089e7d214a7c5371276180c2e5ef072ba3f723ca373a7bef2fcf8193e971b1","sha256:f2e3d8b043f35871bd9d42aa6502e8b429775b4192d2627b66ce0239e17360b7"]
  - id: energia-de-una-transicion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En el modelo de Bohr del hidrógeno, $E_n = -\frac{13{,}6}{n^2}$ eV. ¿Qué energía, en eV, tiene el fotón emitido cuando el electrón pasa del nivel {{ni}} al nivel {{nf}}? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"ni":"4","nf":"2"}
        answers: ["sha256:cc83df6df5e07352093511dc2ac3f60e6f0fcb48a1e931e3817f2963ca1e120e","sha256:acc592501f775b6c573b3670364da06c58c21259207ee79f18298a066d0ba66b","sha256:45c291624ef89da0c789121a817e6533daf4b7e99b777050a9328ea2b3c37c73"]
      - values: {"ni":"2","nf":"1"}
        answers: ["sha256:60cd1936b80746123a750ce2e59269bf0269053bdbebfee95d1029a152bc1dc2","sha256:a66a0838cf0b4942c86a1ddae8ef04a1ff5624a2463022187149acef06e4e6c6","sha256:0da100c2e311f7f78d99de5496900a006847a35ae894a50e1560866c5c920f1a"]
      - values: {"ni":"5","nf":"3"}
        answers: ["sha256:3733a443a844fcc6895edbe379950064d0adeafcdd270a7d15d5ef1df2f2001b","sha256:5bb6b3a8d0266e176427b27b8e552c9acdacf9c32dd29827542b31c164eaaf7d","sha256:6e3e5fe844ecbca9bdd0bb20b15681032d4fd80aaa22c9546352718c4d1eb0da"]
      - values: {"ni":"3","nf":"1"}
        answers: ["sha256:6674d649a1af5204bc7f71c77d01c33770595e03317acbfd8aee6a10298b2f01","sha256:be20b926660681964bb5a636604a22966643cf6ef2715018126893849bd06f88","sha256:b62862383c712fa309d55179a4465767688c98795a445b08c771ec2b610d995e"]
      - values: {"ni":"6","nf":"2"}
        answers: ["sha256:193a487f51d0ec77af9cf52c19ebd2f23feb5b8eec5199b9254fa51c20c584a8","sha256:344d1351e1976cfc09e97e4094ce4bfc2bd3209e86004bad51ce7bb1e7a7af11","sha256:eb5180eba6fec199cfb332801c3d4d0797236aca75640d33732a7382bd80447c"]
      - values: {"ni":"5","nf":"4"}
        answers: ["sha256:fa16b96a4bad79fdaa5d95f41a2c945bf18ebb6285ad6ca2cf9c0c418eb0f042","sha256:3e2292572eacbe5e266edc00a5c9fa4d8fc2a75074f493a000af9bec5a6d754c","sha256:1809e5850cd71f676bf841e58e8688b3cef628e0756a847d768664ad6990eeca"]
  - id: longitud-de-onda-de-una-transicion
    tier: 3
    type: numero
    sig: 4
    prompt: |
      En el modelo de Bohr del hidrógeno ($E_n = -\frac{13{,}6}{n^2}$ eV), ¿qué longitud de onda, en nm, tiene el fotón emitido en la transición del nivel {{ni}} al nivel {{nf}}? ($h = 6{,}626 \cdot 10^{-34}$ J·s,
      $c = 3 \cdot 10^8$ m/s, $e = 1{,}602 \cdot 10^{-19}$ C; al menos cuatro cifras significativas.)
    variants:
      - values: {"ni":"4","nf":"1"}
        answers: ["sha256:b0aee437ab271d68a2910e2204e79d31d0b8aac8bdbfb02707bafe22b3432bdb","sha256:fda99e6abf5a28f176f22ea08a85e6e30d5f932755f0818f3266ca636e8e525b","sha256:3eda5e715a3e015c49f80b7d99dc914c931352b9cbce6b73574d52fa71becc67"]
      - values: {"ni":"4","nf":"3"}
        answers: ["sha256:3c0c80ee77ff0cc11ccdbf56b467f53b91da8edee42e4ed31704d14eb16c9a82","sha256:c4277ec4532e5e462916da077745383da4c4b72b95d4433d31e015b6c1e67190","sha256:ef2d7dec58af883ac969fff8c0db9bd1982d053cc19cd2165e86cd2964e31d5a"]
      - values: {"ni":"7","nf":"2"}
        answers: ["sha256:78137d861a4c6537df2c05d77ca8c8f6e6a70fe6d2b0a052a95c120da6e45f1b","sha256:d90f91b4ad175345ca7dfeb9177bbc204cad2465de5637c3a528d56d7ef3f3e1","sha256:e920edf33ba23261fff32afd7233d2f45d9e28c1297cb9f95268d22374747704"]
      - values: {"ni":"6","nf":"3"}
        answers: ["sha256:f121e20ff4cbb31d3576035299df51aa08c885ecd78ccdd8d458d1ae2d5c572c","sha256:aa8fb74611f392364980bde233c0999784069940cdfda52b435287578d9cafa4","sha256:03a2cad66c8006fdb80f83de563b5ce5588664a9145a8ea65468a03af17bba4b"]
      - values: {"ni":"2","nf":"1"}
        answers: ["sha256:de6c7fcaec0faff53cb66e1f91e960c1eec80e28973dbe5d2b52568580dbaf61","sha256:8a5d4e79df66bb80c6f617121d7c92b5855a91b85bed45153beee8f208a94ce4","sha256:a5bbd0db57218b5edc1aaa95e744ffddc4292a0915f0137f935c0a2330a9610d"]
      - values: {"ni":"5","nf":"2"}
        answers: ["sha256:bc792da0f8cc32d276e5eaf1d7b893c6efb215a9459c666b8205043650a51a33","sha256:187c2374ca8c5e05c4ed1371e6483874fc9a0b660e656138f35d5e6ae4ec3660","sha256:b2669bc92a9a7cc144363c90b1ea93564a24ab618899279456336dfb751a49e4"]
  - id: de-broglie-electron
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un electrón parte del reposo y se acelera con ${{V}}$ V. ¿Cuál es su longitud de onda de De Broglie, en pm ($10^{-12}$ m), sin efectos relativistas? ($h = 6{,}626 \cdot 10^{-34}$ J·s,
      $m_e = 9{,}109 \cdot 10^{-31}$ kg, $e = 1{,}602 \cdot 10^{-19}$ C; al menos cuatro cifras significativas.)
    variants:
      - values: {"V":50}
        answers: ["sha256:938f33b92b8cfffdf3afc3c996995b12ef9a0da2300c03740a1031a7789fe65f","sha256:713c853dcd28dcbf2be5aeba44da5d52186379b6eb174c0d5b6afa687a824604","sha256:9d96ef16def497e980122c950f5502f543a47d582927ce6a8bc49ce24e500a9c"]
      - values: {"V":1000}
        answers: ["sha256:825ddc25712152deb8cd52b4a6b43e00e7281c511087689c71ae9922495fbec7","sha256:24db49cfa9fc1861b87783a7a142ba3f59b6cb7d205c6fa8af8b22e9ca750f1b","sha256:3e14d24d9b42623d8eb7e26791e04aac7df58eef4f0626e4f8484a85f0edb5e8"]
      - values: {"V":12}
        answers: ["sha256:8acfb56e1b7a0ed6e811d62cd4b79b3169d64b7412e446135c9e07c8c4dcfd28","sha256:9d845316ab244070571586b698246651f6521f9146d649d461efdf92240937f0","sha256:5aca2ea1ab43b282e6a0d018e600c272d7bfa86c16c01fb8e31bc6e3187c11ac"]
      - values: {"V":400}
        answers: ["sha256:c2c1c4a67f7e934a5b776f9ca8ce4612fcb7e8d71d098aaf6d4e60b231f0b351","sha256:7123d8158cf4ed2458c19192364b72776a6f7cd042a942b14c72b9f397aadd61","sha256:839a6202e5c33af2197375dc767cb1c5a49cb5908aa304f9e465c6041fbc2886"]
      - values: {"V":2500}
        answers: ["sha256:9bb398ef5e5ddd06c4d5fd80d35cbdc0d550f3abd313a270602cda17e0dc19c6","sha256:a6dae11f72e533584b78e0c0eeafbf5680e69c498ad1c51c23a7abdb5493122a","sha256:e408e096a7b98cbd463e27892c53e7d18f5420538382ce9e842f919a6d16f21b"]
      - values: {"V":150}
        answers: ["sha256:41f430a86553eeb2de08883d942dc781f64c9c83118069fc66c94f7f0ac70083","sha256:5da8ebe1df4a8714f1deda785ba670fadecde625049e8d912f355445a481cebe","sha256:d98d2f5eed5fcf7f2bc3af5ad95c9b655e0eee522154817769725456504c1adc"]
  - id: de-broglie-macroscopico
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la longitud de onda de De Broglie de un objeto de ${{m}}$ g que se mueve a ${{v}}$ m/s, en unidades de $10^{-34}$ m ($h = 6{,}626 \cdot 10^{-34}$ J·s)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":57,"v":50}
        answers: ["sha256:b81454e753be00bf7a2f52cd874c2574ea361845c921d5a8b6252e5e205e6933","sha256:ef7492148703cbcaadffc30d00dc20a67b49dd9575a311c12539faccffd436ca","sha256:9eef569f7c1e4b78c4a3d82112f7ed601a1192d84e68b600ef48f04e91f9a7fe"]
      - values: {"m":145,"v":40}
        answers: ["sha256:0ec9ccd52b8ad6f19e7389834ffe57a0c1361c1eaca5ece57351650803eb8e10","sha256:3957096ec9e77ee70564ed213c87e5b0a87be5126193cec3bf872c3b6ed709ad","sha256:62b6c6f74e52d0d1da40f5d63deae0721800c64827eabe7b01456f075b46e6a6"]
      - values: {"m":5,"v":300}
        answers: ["sha256:69d8d5a7cf66384cae919b046443da2e0c6e2a7c4de2f0e727ce8171fe410fd6","sha256:9bddfda3dfd3440eea277f2f5abfe610687fb8dd884629038bc587cc8d8b55ec","sha256:7cecc51e38660391cf5f8cee021b9d68a3d3972384730d8d7805c76a07694d54"]
      - values: {"m":430,"v":25}
        answers: ["sha256:fecae7d42baa2d06117b7b862f72a53297e077bb46ff0620155531188cdef925","sha256:045143e6fe5c56ee2f6d34b4946f0f24749ce5b95744b6e2f4b7bdccae24667c","sha256:5cfeb0d7cbc5ca36d9782aff677d588ccefdec66e4a2017caf342ebd860a8fae"]
      - values: {"m":2.7,"v":10}
        answers: ["sha256:4094e550ba74bb3ace8eed155a0b36fc3c22f868a15f7d81aa5ae943dd87fef1","sha256:3dfb44001f6bc9aed1f3194d0c8589e16230917d9c58123b250c13e62f6649e0","sha256:3f1afea6c81cc41cfbc0389aec06acd0c31007dd44a1d1b9c9bec59282651bec"]
      - values: {"m":1000,"v":3}
        answers: ["sha256:372e6b2b4305eef5bbb1576b0657919ad1bf2e618f3358cb4cd268ea0a65169d","sha256:256f946269fdaa7e11510899786e718ef22336df5c2dc63c34e870024ffa4dc5","sha256:2d9cd37f01eeede3327d4c66036de6b45c4fc5427cfe992820e6d313b5f5a485"]
  - id: principio-de-incertidumbre
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un electrón está confinado en una región de ${{dx}}$ nm. Según el principio de incertidumbre ($\Delta x\,\Delta p \ge \frac\hbar2$), ¿cuál es la incertidumbre mínima de su velocidad, en km/s?
      ($h = 6{,}626 \cdot 10^{-34}$ J·s, $m_e = 9{,}109 \cdot 10^{-31}$ kg; al menos cuatro cifras significativas.)
    variants:
      - values: {"dx":"0{,}1"}
        answers: ["sha256:26e4871205386e1afd78237650b385d3b64d298e75c868ac73c5bc024a925177","sha256:f2957e37369f8e7dd4744e4e807b039c0b41bf57cdc9a618bde9294d25aa0526","sha256:45f1610389f9f83f9f77a47483b11ba3835d18078e00eb67368a1121f28a8291"]
      - values: {"dx":"1{,}3"}
        answers: ["sha256:c0eac51438c37fc0fe6010b1a547617a756cbafea6d521225ac00eaed20d2207","sha256:75495e7bf57c1b708b5bcdd6cfb65852e5487347b9f890c9b95e0a91b7b9a2fe","sha256:daf9be77af95295aa86a7e76928cece021534e60bebecc8815b0dc6ceaf90c46"]
      - values: {"dx":"0{,}05"}
        answers: ["sha256:9874a9c4fa43d32e9dd05d5c9d7e2b4fda55596825490bb68d366d6435b63a14","sha256:245f12dbdd4bfe61e2eb94a1fcaffe03eab62f5a157f48d6b542eff7659b9ef6","sha256:77f6260371a37da0e5ac72445e18fef38c4d593e4b890801884e0c5afd359b55"]
      - values: {"dx":"7"}
        answers: ["sha256:61eb23e92fc1a32e5536af4c8b620881a6928bd0fb02d08eb477a08c70bb910a","sha256:a08c7a902e62bc806a29e89732957430b37f805f7f1cafdf5fa2a4986d07820c","sha256:515ff476d80e350a0483c0321e373d0d4263c1823d3684128bd5d8e9bb866d19"]
      - values: {"dx":"0{,}6"}
        answers: ["sha256:81b6988c8ae340e082670f0a74828824ff65e9e3f729b914aa4229f825c656f8","sha256:1435d1680cd8c5f3de9fb86859f492dcf8a93ab5f579a5007727fdf234954206","sha256:cc9295b0376bf2c478926024432cd60bcf8d2098c1f522f16a1fb7ddf6c18b0f"]
      - values: {"dx":"2"}
        answers: ["sha256:f514ee2d311a7aa3f366b5f8505ebf97e246e8bdd064a0b75646269925383b4c","sha256:87effaf75a905f383e3c30b11dac1c52971b6003ad341db401c805a7080ed481","sha256:982dc41a6642dfc4178aeefa97bd2c322d916e2c04749fa1ae522fac2dbdb3f5"]
  - id: momento-de-un-foton
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el momento lineal de un fotón de ${{l}}$ nm, en unidades de $10^{-27}$ kg·m/s ($h = 6{,}626 \cdot 10^{-34}$ J·s)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"l":450}
        answers: ["sha256:fe58d71b5a62c36c8b7c46c0aaecdb0e5d3efc16e394a857326ac045984b591a","sha256:b40f883bb403f8aa5bb66f2c3836f11990552f0e8462b167f4a69813dee8046a","sha256:0153a3d9d339206117b6d9b2fe2dba908b92208d36311b859c6f1ff72da6744d"]
      - values: {"l":1.5}
        answers: ["sha256:77562ea24a684d5b84064e414fa1d8c7d05abdf88d45fdfbc6d9eff3dabe9f7a","sha256:65d5e2cf4293aade86eea610812610509442567fca9f0148a7a35676e2453f53","sha256:0dfffd2e75df634efe287d062607f043f1bda001a83209b0005fca29f738286f"]
      - values: {"l":0.12}
        answers: ["sha256:079dfa6562d4e0ac1c541012265ac7006d829712826ddc4cced6160c2836b6ab","sha256:4adaf5ec37f7b3f238e2b2cad6a3f94372dd75956dd2b41d344acd3c62e9f799","sha256:1c1f76426c46da09f631e2c8e34ea8bb19058f920c631c89bd2be758e388dad6"]
      - values: {"l":700}
        answers: ["sha256:a4a6eeaf90f5f084a11f9b00b00fa6cccd5e0bbd78421d9a3f03928672b4c84c","sha256:1dcb9894eec4b1e84f15014e300a54b72b144a03aa00643b859d247111c5dc6f","sha256:309079ead847cc10825f4c71517240a1ab48b9f68355184f500d217417cc2416"]
      - values: {"l":13}
        answers: ["sha256:7883c69df5fc308c185a24ca9681bf6d1bedefca3aa9c6e6c48bd1a883b57979","sha256:a75296f6885bdd3ad5560a71363dff345bb881c9cc515fc5f9de3c4f7c7dc8d2","sha256:c422d921313249c5c75697788e8e0aab91e9204536140bd58c1d10671696d7a3"]
      - values: {"l":300}
        answers: ["sha256:b3c8a7778aa58d9aeacd9cf3744bdd751becfdacc121e60c9ac579d0fbcf79ec","sha256:2e5b95683bbc1481cf3da5a4d17608d6db18e2ec93f54f1eef4d24152a00fd91","sha256:8c96af93378e24bf69608b3de79710a524f6f498583ae3780046c37568f2efad"]
  - id: dualidad
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué el efecto fotoeléctrico no se puede entender si la luz es solo una onda, y cómo lo explicó Einstein. (b) Explica cómo el modelo de Bohr explica que el hidrógeno
      emita solo ciertas longitudes de onda. (c) Explica qué es la dualidad onda-partícula y por qué no vemos comportamiento ondulatorio en una pelota de tenis.
    sealed: "gz64:H4sIAAAAAAACCo1UzW7bRhB+lQGhg0zQQpy0BarCh7r1zYcABXopG2O4HElrLGfo/QmsCAL6KrkUMAKffEtv4Zv0SYpZirbsU0+iyN2Z729mVwRxKVrhYlmU5RxPyhJ+s+AQXPoEq0QeIYgTSIwg3GIFIQEx+fXwgNBST9ySH5/1muVIHGyL7RKMcC7Tpe3hfT5lErrbZMmDESceAgF6j2xQ6zCQIxO9MIUKtk9F2uG+sQ422ORut4mAQk8ePYz/tIxJXXLoseYJ4gLekxf9KE0g/3E824uHlhq8EQWk3Mpy5ckkYmMRUtd4dGUJLBDQ0TGmfHdiM/bFg17VU20t0+HhLjqwHCJyJMDE052RkFLMb45UNZaH+2gNQjd8vrMd1nwQ+iDyM9RKIb5WfgGX2pAsw/zsxzffn0DvpU9BcqeDt87RGoFYmUtUZmWplZ5QzDar2RIMtggricMjTy6BkU6gS2ajsThIMzyyUpldXu9MVdcd3u3hHDYrOIW6/oi+39jZAq6OYY7BMtg1Vg1zwMPXTs1qCQ6QFjXXXJbzRnN5IRsPIT0RIffce6zVJ1IGIaJaAMOjb2zEcEwraKCMp4ihUrQM53Ba1yuPZnf2blftf9jv+MPb/Qzo98kbdNBjQD9lBUGiR6DORgIBbIL4Rj9NQh3LSHdoInak7tt1Qgc5Lq1dkc8WLlVpOIfLawuncHm9mi1q/kUldhKA7UdyFCAIQ2uDIpdQgcNwlIIAUVUc7nmZVQl9TitQpu6GByYMML9A15Gv4GrbIf/7198nVabz7csmkcuY1jai+/ZPnlI1nhwpcpl8MOrDVfoEW+gwkrcIXaIQPXLOmKUW27GrLguYq9t+Ylopa4/G2OGRT2Crx3r0cXgwyU2HxzzwkYAMPd4miroPgo5AJBPzCegTRwknC/gZorR4XC0QOAIMkgeaEZzw2sbUTuBqntW1w65pEc5hjABs+tkC3qPHF8lWIY10PXpstGiWv7U601l94ugJhs9ROgkwzxsg5KUzEo6ZhfF6w1E4+UmBjqh6chLzWozENoyWORDfUs7R7OzNh93pu+/2M+iqPHTDQ7A6f8Ticzyf96knbu0NgtSspiQTk8clsOX18JWBVmSiKPnkMIq3OSGHvdg4WhRV4VPjrSmWf+wK461aLMWyuLzrhSkHckNmIyPIQz2dVXLDvYnemnE0jXD02FpDrGGPJHlpP3dG2OoHuuudNZgDkTf9NPdFVYzeFsu3++o1Fr3zYjqeJkMly3ti+2IQnqfgf1VGaBO6vKMyzNfR0d9fCS68rJ3NS1mam9y+Q+MlmOGxt0ZeNftz/x9wajHSbwcAAA=="
  - id: r-foton-color
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué fotones tienen más energía, los de luz roja o los de luz violeta?
    options:
      - |
        El rojo
      - |
        El violeta
      - |
        Todos igual
      - |
        Depende de la intensidad
    answers: ["sha256:1a19d84624fadc646f13608eff4e4cb5e139fd1c933ed9f3cf3c06eb5405dc45"]
  - id: r-intensidad-fotoelectrico
    tier: 2
    type: opcion
    review: true
    prompt: |
      En el efecto fotoeléctrico, ¿qué ocurre si se aumenta la intensidad de la luz (misma frecuencia, por encima del umbral)?
    options:
      - |
        Aumenta el número de electrones, no su energía máxima
      - |
        Aumenta la energía máxima de los electrones
      - |
        No cambia nada
      - |
        Disminuye la frecuencia umbral
    answers: ["sha256:f32f76201ace5b0e9cd8107cb0c164b4c4d501ae34d14319d1ea209915be53a3"]
  - id: r-planck
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué propuso Planck en 1900 para explicar la radiación del cuerpo negro?
    options:
      - |
        Que la luz es una onda
      - |
        Que la energía es continua
      - |
        Que la energía de la radiación se intercambia en paquetes hf
      - |
        Que el átomo es indivisible
    answers: ["sha256:50127420b901bd7f9037c82d63802b9a60984b411bf49965a0031091e29f16da"]
  - id: r-nivel-fundamental
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánta energía, en eV, hay que dar a un átomo de hidrógeno en su estado fundamental para ionizarlo?
    answers: ["sha256:d38168c5c0e8b3a25a8d86a7449a0f562bda459cc4eff341fb6abae851b69ee0","sha256:7be6dbbb5e004cd6fc52e9db60e40a06e667abbebdf05079091c8bf99f69d4f5","sha256:6cd9a2f318aa00c19a0152d9a37f8bebfeab1835aadd8020bc7c6ceeed58b24b"]
  - id: r-de-broglie-doble
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica el momento lineal de una partícula, ¿por cuánto se multiplica su longitud de onda de De Broglie?
    answers: ["sha256:82ca8c4542962f57429c00f26fba28a3c85820865291fef13f8bc3abd8020bd9","sha256:5817e133b0fb893d12fe33fece11e71c547d632d85dbd1479d953400bce185fc","sha256:b66818eb780beceb358ca13e02de039da4c47912549f450e3936e7b1ae8f6f68"]
  - id: r-incertidumbre
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué afirma el principio de incertidumbre de Heisenberg?
    options:
      - |
        Que los aparatos son imprecisos
      - |
        Que no se puede medir nada
      - |
        Que la energía no se conserva
      - |
        Que no se pueden conocer a la vez con precisión arbitraria la posición y el momento de una partícula
    answers: ["sha256:00280e83ed7b0b176d8c99fe1910f99d121fc2dc0e2a0a4b2cec70790143e638"]
  - id: r-microscopio-electronico
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué un microscopio electrónico ve detalles mucho más pequeños que uno óptico?
    options:
      - |
        Porque la longitud de onda de los electrones es mucho menor que la de la luz visible
      - |
        Porque los electrones son más grandes
      - |
        Porque los electrones tienen carga positiva
      - |
        Porque usa fotones de rayos gamma
    answers: ["sha256:523ec44abd063647b738abc4c90b9fd39e2cf5fb3c67ecea88e867a6c3e2d5df"]
---

# Introducción a la física cuántica: cuerpo negro y cuantos, fotones y efecto fotoeléctrico, espectros y átomo de Bohr, dualidad onda-partícula e incertidumbre

A finales del siglo XIX parecía que la física estaba casi terminada: mecánica, electromagnetismo y termodinámica lo explicaban todo… salvo unos pocos
experimentos «pequeños»: el color de los objetos calientes, la luz que arranca electrones de los metales y los colores que emiten los gases. Intentar
explicarlos obligó a una revolución: la **física cuántica**. Gracias a ella existen los transistores, los láseres, los LED, los paneles solares, la
resonancia magnética y, ahora, los ordenadores cuánticos. Este nodo cuenta sus ideas fundacionales.

## Objetivos

Al terminar sabrás:

1. Explicar la radiación del cuerpo negro y la hipótesis de Planck.
2. Calcular energías y momentos de fotones y resolver problemas de efecto fotoeléctrico.
3. Explicar los espectros atómicos con el modelo de Bohr y calcular transiciones del hidrógeno.
4. Calcular longitudes de onda de De Broglie y explicar la dualidad onda-partícula.
5. Aplicar el principio de incertidumbre y describir la función de onda.

## Qué debes dominar antes

[[fis-relatividad-bach]] (energía, momento, electronvoltio), [[fis-induccion]] (la luz como onda electromagnética) y [[mat-probabilidad-elemental]] (para la interpretación
de la función de onda).

> [!question] Test de entrada
> 1. Frecuencia de una onda de $600$ nm que viaja a $3 \cdot 10^8$ m/s.
> 2. ¿Cuántos julios son $2$ eV?
> 3. Energía cinética de un electrón acelerado por $50$ V, en eV.
>
> Respuestas: $5 \cdot 10^{14}$ Hz; $3{,}2 \cdot 10^{-19}$ J; $50$ eV.

## 1. Para qué sirve

- **Electrónica**: semiconductores, transistores, diodos, LED y láseres.
- **Energía**: células fotovoltaicas (efecto fotoeléctrico).
- **Ciencia**: espectroscopia (composición de las estrellas), microscopios electrónicos, relojes atómicos.
- **Computación y comunicaciones cuánticas** ([[cua-computacion-cuantica]]) y la mecánica cuántica completa ([[fis-mecanica-cuantica]]).

## 2. El cuerpo negro y los cuantos de Planck

Todo cuerpo caliente emite radiación cuyo color depende de su temperatura: un hierro al rojo, luego amarillo, luego blanco. Un **cuerpo negro** ideal absorbe toda la radiación y emite un espectro que
solo depende de $T$. La **ley de Wien** dice que el máximo está en $\lambda_{\max} = \frac{b}{T}$, con $b = 2{,}898 \cdot 10^{-3}$ m·K (el Sol, a unos $5\,800$ K, tiene el máximo hacia $500$ nm; una persona, en el infrarrojo). La física clásica
predecía una emisión infinita en el ultravioleta. En 1900, Planck lo resolvió suponiendo que la energía se intercambia en **cuantos** de valor $E = hf$, con $h = 6{,}626 \cdot 10^{-34}$ J·s (**constante de Planck**).

## 3. Fotones y efecto fotoeléctrico

> [!practico]
> Ilumina una placa de cinc con luz roja muy intensa: no pasa nada. Ilumínala con un poco de luz ultravioleta: salen electrones al instante. No importa cuánta luz,
> sino de qué color. Es como intentar romper un cristal: mil pelotas de ping-pong no lo rompen, una piedra sí. Lo que cuenta es la energía de cada «proyectil».

- Einstein (1905): la luz está formada por **fotones** de energía $E = hf = \frac{hc}{\lambda}$ y momento $p = \frac h\lambda$ (sin masa). *Ejemplo:* un fotón de luz verde de $500$ nm tiene unos $2{,}48$ eV.
- **Efecto fotoeléctrico**: cada fotón puede arrancar un electrón si su energía supera el **trabajo de extracción** $\varphi$ del metal; el sobrante es energía cinética: $E_{c,\max} = hf - \varphi$. Hay una **frecuencia umbral** $f_0 = \frac\varphi h$
  (longitud de onda umbral $\lambda_0 = \frac{hc}{\varphi}$). La intensidad solo cambia el **número** de electrones.
- **Efecto Compton**: los rayos X que chocan con electrones salen con mayor longitud de onda, como en un choque de partículas: confirma que el fotón tiene momento.

## 4. Espectros atómicos y modelo de Bohr

Un gas excitado no emite todos los colores, sino unas **líneas** concretas, distintas para cada elemento. Bohr (1913) propuso para el hidrógeno que el electrón solo puede ocupar niveles de energía
$$
E_n = -\frac{13{,}6\ \text{eV}}{n^2}, \qquad n = 1, 2, 3, \dots
$$
y que al saltar de un nivel a otro emite o absorbe un fotón de energía igual a la diferencia: $hf = E_i - E_f$. *Ejemplo:* de $n = 3$ a $n = 2$, $1{,}89$ eV, luz roja de $656$ nm (serie de Balmer, visible); las
transiciones a $n = 1$ (serie de Lyman) están en el ultravioleta. Para ionizar el hidrógeno desde el estado fundamental hacen falta $13{,}6$ eV. El modelo de Bohr es una aproximación: la descripción correcta es
la de la mecánica cuántica, pero da exactamente los niveles del hidrógeno.

## 5. Ondas de materia y dualidad onda-partícula

> [!practico]
> Si lanzas electrones de uno en uno contra dos rendijas, cada uno deja un punto en la pantalla, como una partícula. Pero al acumular miles, los puntos forman
> franjas de interferencia, como una onda. Cada electrón «pasa» de algún modo por las dos rendijas. Es el experimento que Feynman llamó «el único misterio».

- De Broglie (1924): toda partícula de momento $p$ tiene asociada una onda de longitud $\lambda = \frac hp$. Un electrón acelerado por $V$ voltios tiene $p = \sqrt{2m_eeV}$; con $100$ V, $\lambda \approx 123$ pm, del orden de las distancias entre
  átomos, y por eso los electrones se difractan en cristales (Davisson y Germer, 1927) y sirven para los **microscopios electrónicos**.
- Para objetos macroscópicos, $\lambda$ es tan pequeña ($10^{-34}$ m) que ningún efecto ondulatorio es observable.
- **Dualidad**: luz y materia se comportan como ondas al propagarse e interferir, y como partículas al intercambiar energía y detectarse.

## 6. Incertidumbre y función de onda

- **Principio de incertidumbre** (Heisenberg, 1927): no se pueden conocer a la vez, con precisión arbitraria, la posición y el momento de una partícula: $\Delta x\,\Delta p \ge \frac\hbar2$, con $\hbar = \frac{h}{2\pi}$. No es un defecto de
  los aparatos, sino una propiedad de la naturaleza ondulatoria: una onda muy localizada contiene muchas longitudes de onda. Un electrón confinado en un átomo tiene necesariamente velocidades de cientos
  de km/s.
- **Función de onda** $\psi$: describe el estado de una partícula; $|\psi|^2$ da la **probabilidad** de encontrarla en cada lugar (interpretación de Born). Evoluciona según la **ecuación de Schrödinger**, y en un
  sistema ligado solo existen ciertas energías: de ahí la cuantización. Fenómenos sin análogo clásico, como el **efecto túnel**, explican la radiactividad alfa y los microscopios de efecto túnel.

> [!formal] Con rigor: de dónde salen los niveles de Bohr
> Bohr impuso que el momento angular del electrón fuera un múltiplo de $\hbar$: $m_evr = n\hbar$. Con la fuerza de Coulomb como centrípeta, $\frac{ke^2}{r^2} = \frac{m_ev^2}{r}$, resultan radios $r_n = n^2a_0$ ($a_0 \approx 0{,}0529$ nm, radio de Bohr) y energías
> $E_n = -\frac{ke^2}{2r_n} = -\frac{13{,}6\ \text{eV}}{n^2}$. La condición equivale a que en la órbita quepa un número entero de longitudes de onda de De Broglie: $2\pi r = n\lambda$, una onda estacionaria ([[fis-ondas-sonido]]). $\blacksquare$

## 7. Errores típicos

- Pensar que más intensidad de luz da electrones más energéticos.
- Olvidar convertir entre eV y J o entre nm y m.
- Usar el signo de las energías de Bohr al revés (los niveles son negativos; el fotón emitido tiene energía positiva).
- Creer que el principio de incertidumbre se debe a la torpeza de las medidas.
- Aplicar $p = \sqrt{2meV}$ a electrones relativistas (miles de kV).

## 8. Resumen

- Cuerpo negro, Wien $\lambda_{\max}T = b$; Planck $E = hf$.
- Fotón $E = \frac{hc}{\lambda}$, $p = \frac h\lambda$; fotoeléctrico $E_c = hf - \varphi$, umbral; Compton.
- Bohr $E_n = -\frac{13{,}6}{n^2}$ eV; espectros de líneas.
- De Broglie $\lambda = \frac hp$; dualidad; doble rendija.
- Heisenberg $\Delta x\Delta p \ge \frac\hbar2$; función de onda y probabilidad; Schrödinger; efecto túnel.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué propuso Planck y qué propuso Einstein sobre la luz.
2. La ecuación del efecto fotoeléctrico y el papel de la frecuencia umbral.
3. Por qué los átomos emiten espectros de líneas.
4. La longitud de onda de De Broglie y por qué no vemos ondas en objetos grandes.
5. Qué dice el principio de incertidumbre.

## Siguiente

[[fis-fisica-nuclear]] (el núcleo atómico, la radiactividad y la energía nuclear).
