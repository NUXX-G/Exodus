---
id: fis-electricidad-magnetismo-1
title: "Electricidad y magnetismo I: campos, potencial, inducción"
area: fisica
trunk_level: 11
prerequisites: [fis-mecanica-newtoniana, ing-electricidad-basica, mat-calculo-2]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018, caps. 21-25 (carga, campo eléctrico, ley de Gauss, potencial, capacidad), 28-30 (campo magnético, fuentes, inducción) y 32 (ecuaciones de Maxwell)."
  - "Ling, S. J.; Sanny, J.; Moebs, W. Física universitaria, volumen 2 (en español). OpenStax, 2021, caps. 5-8 (cargas, Gauss, potencial, capacitancia) y 11-13 (fuerzas magnéticas, fuentes, inducción). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/5-introduccion"
  - "Purcell, E. M.; Morin, D. J. Electricity and Magnetism, 3ª ed. Cambridge University Press, 2013."
  - "Griffiths, D. J. Introduction to Electrodynamics, 4ª ed. Cambridge University Press, 2017."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. II. Addison-Wesley, 1964 (edición en línea: feynmanlectures.caltech.edu)."
  - "Tiesinga, E.; Mohr, P. J.; Newell, D. B.; Taylor, B. N. CODATA recommended values of the fundamental physical constants: 2018. Rev. Mod. Phys. 93, 025010 (2021)."
hints:
  - "Concepto: la carga crea un campo; el campo ejerce fuerza sobre otras cargas. Con simetría (esfera, hilo, plano) usa la ley de Gauss; sin simetría, suma (integra) las contribuciones de cada elemento de carga o de corriente, recordando que el campo es un vector."
  - "Herramienta: comprueba cada resultado por un segundo camino: la fórmula cerrada frente a una suma o integral numérica (Simpson o suma de miles de elementos) y las unidades (N/C = V/m, T = N/(A·m))."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de campo eléctrico, ley de Gauss, potencial eléctrico, capacidad, campo magnético, ley de Ampère e inducción; Purcell-Morin, capítulos 1 a 7; Feynman vol. II, capítulos 1 a 17."
exercises:
  - id: ley-de-coulomb
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Dos cargas puntuales de ${{a}}\,\mu\text{C}$ y ${{b}}\,\mu\text{C}$ están a ${{r}}$ m. Con $k = 9\times10^9\ \text{N·m}^2/\text{C}^2$, ¿qué fuerza se ejercen,
      en newtons?
    variants:
      - values: {"a":4,"b":3,"r":"0{,}3"}
        answers: ["sha256:779f888848469b700c22404b815254b0ead318d5c93c92a67cc125c22d64c2c6","sha256:a92a0b07b62897d14fc1e1ee262a52888bf3c541e06ac303b4a74f3abc07c8f6","sha256:e01dae0fc197e2baffbe7ae667cdfeda82ef20b7179b02aab4c484cde84ac472"]
      - values: {"a":5,"b":4,"r":"0{,}5"}
        answers: ["sha256:995d9146d459066b08e39940c758189582b88956c9c1df52113eac9a8abc78ec","sha256:f56f281a9ac9556e42328a70dc33fa6a7b2e34604aa0a715bd330c070472b2e5","sha256:b05d8fbb092803c6812b65c64c619377ad84b1a7eb2978c66f5040d9e083c3a9"]
      - values: {"a":1,"b":1,"r":"0{,}1"}
        answers: ["sha256:5fbf1a796c9fe88486a5e6ee21f6d2a6c9ae85b46eec0c42ee03dee8837c0ad8","sha256:31567d200fb680da44d0be52cb00d93a59e2589f62cb3acdad56476236964404","sha256:a2bee9473b5e325e816a7ce25dac24f0c947c7453051c17b03609e4ce37a3760"]
      - values: {"a":8,"b":2,"r":"0{,}4"}
        answers: ["sha256:3429ac5efe7e23d39586c9007782b15c6a2cf8f0d4010b5af3ec9b834a2a1a73","sha256:8a193353baac6d28439699e8a6c0887aff08b73feb02e71801d3c54a2dc63d51","sha256:aca90161c9c34ca8fb7b137e19eaafb0c68640d682072913738c1fce4bc234dd"]
      - values: {"a":3,"b":6,"r":"0{,}2"}
        answers: ["sha256:e43ab7eee7a3d9a994ada0eca8045508b345abe6ac3aa628abef64ad6f90055c","sha256:a092ccc8d28ef2f9e458483ac2e8fd7b747eba085d697eb7c8880f37330ab403","sha256:82ebff0be138406d8cbf0ff7ec54e1809c2a036e85bf09d436eca59df644fe91"]
      - values: {"a":10,"b":10,"r":"1"}
        answers: ["sha256:cdbf379b10fa52d07b231851cecbe3309ba612d641ce5e795490f95616b46e4e","sha256:979f15c30a40739da55a446d480004769a0a8f5f350bb1c1b994b40b24d29fb9","sha256:7fd15488cccf0b64581fcc416687499409bfcd8fbddf37af764096dd04ad7d36"]
  - id: campo-de-una-carga
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Qué módulo tiene el campo eléctrico, en N/C, a ${{r}}$ m de una carga puntual de ${{nC}}$ nC? ($k = 9\times10^9$.)
    variants:
      - values: {"nC":5,"r":"0{,}5"}
        answers: ["sha256:d0dfc2ebc32b5e9cec505a78a4109338bac84b6dda707025b6e6eff2dd1fe4b0","sha256:4c20e0b2f0179a732fef468995c1d50b642d9c69e9f25739d651ac086c287bd9","sha256:f889d92399791a6fd14a25ae703bbb56c04bc267198b7790b0bd39cc940c62d7"]
      - values: {"nC":2,"r":"0{,}3"}
        answers: ["sha256:971e529e46d46d10629d27218567e7a2b24bff581299869500bccb22899b128c","sha256:13235b192fd569628832dd80e4abdcfa0e246787abcbe3e577bbc8355ff7fce4","sha256:b4d98c6c5a9e3b3d3914fb454a92df5a4c0b15eb28bfd68b77e0d874ed713aae"]
      - values: {"nC":10,"r":"1"}
        answers: ["sha256:3cc8158db167327e7150c6162edadaf3dfcb2844898d01ac61a8bb15eb7f37fa","sha256:57ac79958b3aa739eebaa6030578e10bdf6462fa4bdd4cabefe4d323546a2c6c","sha256:1d285b6e4f53006408b031aec132da0722ef18211fa3c27c95eae149487a674e"]
      - values: {"nC":1,"r":"0{,}2"}
        answers: ["sha256:1a33721e7836b490985fb24cd852ba1d61ae8dd56107caa3e1301e77994b509f","sha256:90e32099ad2698dcc5b484e9414981fe46927af2a72b35a769fa89a0b3fc42ad","sha256:141e9d7fa8ef67ca5be052175bc89eb4ed34349f801873f09c1b4dc2eb5216c5"]
      - values: {"nC":20,"r":"2"}
        answers: ["sha256:32eefe91160ebf101fdd5213a76580cc846dfc3b4702bf41abc14cebbd2dc176","sha256:e4c7d64b19c7afe728fbb138afd42a3231b95dccc422e7f3e6fc43ad79510d64","sha256:2f87b82e3eae5c1a3eb42862198b6312480dca5c512561b813f5d590f1e72b91"]
      - values: {"nC":4,"r":"0{,}6"}
        answers: ["sha256:79c874cd993a58090cd3b7c07331e7092bd16d0cd99d44fbbc2ad208da6f124d","sha256:7000bdcbf06fcdeb7712345d933203033f8ed818232af8603e03bbaa742dabab","sha256:6b2e31806ec819bbd2aaf940d46ca24fa549e724327f114687ac036fe6aeb635"]
  - id: capacidad-de-placas
    tier: 1
    type: numero
    sig: 3
    prompt: |
      Un condensador de placas paralelas tiene placas de ${{A}}$ m$^2$ separadas ${{mm}}$ mm, con vacío entre ellas. Con
      $\varepsilon_0 = 8{,}85\times10^{-12}$ F/m, ¿cuál es su capacidad, en picofaradios? (Tres cifras significativas.)
    variants:
      - values: {"A":"0{,}02","mm":"1"}
        answers: ["sha256:e0554791d7e3f5b00ad1018495bbeda32e61b5c0f61ebc2d1ccd1575a1d8741d","sha256:4da721ac08c0897c009dab66670688cba4dfd3ebadc4e0cfe0f356b14058603a","sha256:ca95aa6ca711709a5bfc5e5b1b596220f6a6049abed1e6a202eb6737fac14956"]
      - values: {"A":"0{,}01","mm":"0{,}5"}
        answers: ["sha256:838ab9a78e2d3a13d1ca97090a644fa82fe4935603d4e31b1db8c5cdde0e0054","sha256:1995c93e9b6e72862993cff714c0fae85fe619c2839c592d4e9af88dcb5b13d9","sha256:864cb5d7acac8839015197f4f8b096ecc99ff15e89aeae200d3f605179aac8b1"]
      - values: {"A":"0{,}05","mm":"2"}
        answers: ["sha256:033919cf1dae354c1eb4bd631133e7578320c9e145f936cbcce336c28c252dcd","sha256:50b0d01dd91038d89d6970904c9433be4c2b999038874d80269b97a0b56d6dba","sha256:212df153942cab7f9b7a7282780e9b06f6af5ddab2046128a34426b09f60e868"]
      - values: {"A":"0{,}1","mm":"0{,}1"}
        answers: ["sha256:10398d40636351db342b0c7c2c3cd2f5e30061597da1377d0b79323a006df810","sha256:652c32e504741e352dda65600eb291d49c392355782597588fc3d1803b73e6c5","sha256:bffa1f3e5ba81237ce0108bb2971511387cad34559d3232d37d74da067933767"]
      - values: {"A":"0{,}004","mm":"0{,}2"}
        answers: ["sha256:b214fdc7ab3071826b07c84bc25f56d4c780e19b93ae20c0f613e962584880da","sha256:235d8939274512d0f221ba161e15ce38bc7eccba2080dbd439f3092d82b908ec","sha256:11d28913a0ec322f6da279ca53b92dc568a4f052e5a90acfb169da2d0b36f165"]
      - values: {"A":"0{,}25","mm":"5"}
        answers: ["sha256:bd5411729b2717b9b893b92da10a56eccad1bd530cbdf54aff5d735eb355a1d1","sha256:3e4ece7a838fe91f52e4f260acf165437ee8d4cbf5c3398d6751dafd7dce883b","sha256:256a75a287f4b825eaef11d7d92c0a4c6fcbbe92a87fac5cd2c430ead7e0d9af"]
  - id: energia-del-condensador
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un condensador de ${{uF}}\,\mu\text{F}$ se carga a ${{V}}$ V. ¿Qué energía almacena, en microjulios?
    variants:
      - values: {"uF":"10","V":"12"}
        answers: ["sha256:ae97296db6a4f220dd6a08803aa4639b26e5792777ac57d65945ba3972ed3772","sha256:2e8e2e62ea534d1aa2a12cb644c727317272ad22ad39416b10c6fe24b6ffe401","sha256:6af513be56255f6de6fc5fe734ae22c34a121be58a62a92f894570231bd16d14"]
      - values: {"uF":"100","V":"9"}
        answers: ["sha256:93b573bd5657cdfd3b0ab3428ea91df41c34710be18b9948374d3115a9d357e3","sha256:39cd53aa55a79564654afe90d6664946f2ca6de3937a12a35702bd1f41684240","sha256:3e0492e8380375020b554d71136984dbe9f862bd0b5b4db6c95ec95198528b38"]
      - values: {"uF":"2{,}2","V":"50"}
        answers: ["sha256:efc842e25c47c9ba281123accc8832ea6e5715b9e351149df2a461607ef98177","sha256:b04390c2fdc8628976de12e6a43595429c048d0ce830d63a49a2a92262c8b5ab","sha256:c01af59c7bd312543da9f88a1d7509ec4f0bd7817bab765b906e8487f02c8b87"]
      - values: {"uF":"47","V":"5"}
        answers: ["sha256:525f28338807cda5942866fb9ac28ce24017f8ca2472f7fee19812edf84a872e","sha256:f0e2d9edd337e8bee538e7ecbed4bd1a84bf26cbd5a57d53229cc8005a2cbc1a","sha256:c59836f70a025ba2f7f575aaefafe6b9553fcee824c07779810714eabe032b84"]
      - values: {"uF":"1000","V":"3{,}3"}
        answers: ["sha256:645dcb67df0ef60c4dcb96aa0b1a07edb6868a1c14c409c177f94ff54c8ae1a0","sha256:b1259e6189a1b982216267979e38e9cc722f5b6e5d589cf74ce50a1fc82dccc4","sha256:da2120ba681e2c0d859c8f351a67ddf93e044a4e9fc431aef2f713da9f36f0d9"]
      - values: {"uF":"4{,}7","V":"100"}
        answers: ["sha256:9132aae74fa8583ad18718fc941b9338dbe5fc3af178add46598d2f2fc7d8e7b","sha256:701960c74bfdda644ee5a531b28d97d482e25dffc62048480d7c7fefa7f0769a","sha256:c13b34ce6d904132e4ff34f7a2eb8a29c9e4cf5c488f055bd9f9d4c47b2d60d9"]
  - id: condensadores-en-serie
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Dos condensadores de ${{a}}\,\mu\text{F}$ y ${{b}}\,\mu\text{F}$ se conectan en **serie**. ¿Cuál es la capacidad equivalente, en $\mu\text{F}$?
      (Cuatro cifras significativas si no es exacta.)
    variants:
      - values: {"a":"8","b":"24"}
        answers: ["sha256:a03b7835efef7db2dea2ba43c7743ba6e7080b4589710473a8e12fbd07c3911b","sha256:b98c2a5446145a33747283e73eb0afd494ab25be9cdd58d2f07be3840d000b9f","sha256:d2f7e8ecf261fc0a4ec007f9dd05f73e01a38e003b1cda2d925dc3c845364981"]
      - values: {"a":"10","b":"15"}
        answers: ["sha256:5ea65285b10fe753e1ec8419e4ca6afe0276ad0864dbc12c51eb17f5f87994c8","sha256:9efc4b798ba7ea5fee0311fd3a49682e0d3368ed33be8a4e4935c07e30b8d4b1","sha256:f8b0c1eb2035d40292825b56e90e427d058f83acf06e67f3fefad0339ee56ed4"]
      - values: {"a":"4","b":"4"}
        answers: ["sha256:58b52e8b03839e5f922f9fb2c50dac8181a8a2cec6c5156cdc4d69f9866b8a4d","sha256:39a86d7caae1273a01901b7e6b43414171b7cc97c02b63469876c78a8b4c60ee","sha256:28bbd082943721ca71bcbabce808c7cddaa8772bfdcc66003d3a62f116dddeac"]
      - values: {"a":"2{,}2","b":"4{,}7"}
        answers: ["sha256:68a4ac59df5fafa6debfaf3d38d996582c0a2cfcee1eb6d7d6177131089885cd","sha256:6d23add62a2d12abb9ab3281d6f9abc51781698a6a9bd30c68e6a0d99500f3c1","sha256:0810e143771a7ff2f7ba4c2db948437f1deab799cb919ddbf2f0040c66a7fb45"]
      - values: {"a":"100","b":"47"}
        answers: ["sha256:eb810f49067d6593f982a41d4734853595168b603df2afa0fdcb10ce9d5d472b","sha256:0d18cd40b7b1837b04f325a79f0008dc74a3b23424b53d66ead48e16a0f3a410","sha256:0c60ee6f8b02a227e2d0b8c88e26c28dd6f7c3bb1b53626023670e003423956a"]
      - values: {"a":"12","b":"6"}
        answers: ["sha256:1191db7b31a020e78c2fe3d5992584882d2f4ddd267b141fa13437001e6927fb","sha256:9f52569fe37df86c53b15a5a713e6cf89f5281f63019b89c6863684d8a9c3432","sha256:f1bd2b3dec3e6dd8f79b35049dee18a9f34952da432e00e71f8f21dc02975c0d"]
  - id: potencial-en-el-centro
    tier: 2
    type: numero
    sig: 3
    prompt: |
      En los {{n}} vértices de un {{forma}} de lado ${{l}}$ m hay cargas de ${{nC}}$ nC. ¿Cuánto vale el potencial en su centro, en
      voltios ($V = 0$ en el infinito, $k = 9\times10^9$)? Respuesta: redondeado a **1 decimal**.
    variants:
      - values: {"nC":2,"l":"1","forma":"cuadrado","n":"cuatro"}
        answers: ["sha256:300f9713326f4f33f30db58875ff6c0a3225484632b701d08a2f3c7e4f43c5d6","sha256:3171c31ec5f2ae10fde42911d4436724a471c2220466818ef47730cd0a09d859","sha256:3b9b0490edad7b9d2da41d19df25954e2672e3cae61f5d4a5cc5eabf85268f8b"]
      - values: {"nC":2,"l":"1{,}5","forma":"cuadrado","n":"cuatro"}
        answers: ["sha256:3ac66f58d4db0d817d56c6fe319f5fde537c151cdb6311493f6207cb0006a0f8","sha256:32a23d1b338d8e17fc1235dc65919921ad74843e12dd351652777362795be271","sha256:9d6060d9f36a8deb1802aecf271be10a35401e815cefdf10e4932a6df16e2c83"]
      - values: {"nC":1,"l":"2","forma":"cuadrado","n":"cuatro"}
        answers: ["sha256:67d26355074f539bc2638d43dc43e75765eb241208e9088a34748f96236b3bbc","sha256:579a69c29c0cfd1eac8ab8621016c3c73c8c29238c18d283b818df3cdec43944","sha256:42e2bfbe571b56f5b8d410077826a4a696b9172408f99fae209c04f9d9e5eb72"]
      - values: {"nC":3,"l":"0{,}5","forma":"cuadrado","n":"cuatro"}
        answers: ["sha256:6c12a9332d078c0bb8491b289a756773f838955548d5856579e26ccab5d294e4","sha256:ec030fc9278fbea090c8d2d253243951f75ae2810143be8236a0ec713259f422","sha256:7bd596675db9681b3cc2faeb4f4e6c7c7081c1e3853cbef747d499d3f6accba9"]
      - values: {"nC":1,"l":"1","forma":"triángulo equilátero","n":"tres"}
        answers: ["sha256:994ce5af438c6dfb7182ae0659d5024b6b166eeb6932c2bd8673db9a193dc1b8","sha256:7e58316cd41b021986c5f34e86e07f20eb2bd8e44a7e0bb39d67ed9445921a30","sha256:bc071b0f49249c7b74abd9b632d4ab98ee2677e5cdcd94f1f9f20fd1d4ad7b23"]
      - values: {"nC":2,"l":"0{,}6","forma":"hexágono regular","n":"seis"}
        answers: ["sha256:bd455588fc002744bb1a52ad0cd5bc2b06226ec3f9300179ec7ce084cdfff3c6","sha256:7e126bcd446fd6a0aa4fcb809e5d95c130b4de5a0ce3b3f6b3b475b98f227e1a","sha256:d1af4ac557d56bd9710347ffd7a766f41e2e7c47f8f8fd6bbe2ebc9958dafc36"]
  - id: campo-de-un-hilo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un hilo recto muy largo tiene una densidad lineal de carga de ${{nC}}$ nC/m. ¿Qué campo crea a ${{r}}$ m, en N/C? (Usa la ley de
      Gauss: $E = 2k\lambda/r$.)
    variants:
      - values: {"nC":2,"r":"0{,}4"}
        answers: ["sha256:1945158d12f3619cfb7bcfaf88d7483dd46e2434a1ef2d5973afb09254ff2649","sha256:ec0655ce86358c4ce7c8ebf9290965c667728c0af0c52e45eda45e79def9737d","sha256:52a5aff78e2ae5c4ae27f44ab9ccdb7d1a99c7e10923a9a16ef36c8898b635c7"]
      - values: {"nC":5,"r":"0{,}1"}
        answers: ["sha256:b0ca29a336b1c547afe9d2a54255c25060f3616f01a66d22c86725919b997dc5","sha256:a7f9c4c112221eb449aa542b4626df1a6ae2be41ce69bacb629669f8f1b2df40","sha256:6833971f1b7e259e2c71aeb263e799b1a7bf49f6c7b94ef85202ba680ad647fd"]
      - values: {"nC":1,"r":"0{,}2"}
        answers: ["sha256:d615cbdc8aa51308af1a2ad7781c6ee4416b3c6d29cadea6508624e48c668ae6","sha256:a6c1e58d19ed9e3bad4be6b5b98be0c4ac663e8f215945c4a59fcae16235c795","sha256:94fc51b33bb2e8f5edb24ffb378f79ab91be33c1f22c7784b5b1a334454d8413"]
      - values: {"nC":10,"r":"0{,}5"}
        answers: ["sha256:7d4edd06253b06995156e3561db715ce5e70b7305078d736fa185240ac27f86a","sha256:120ca1bd77a6fde290085575e3c5264b78f736db74a78c6863e95c935aeb59f8","sha256:8a7bb6faba6e500cb5f236ffeb87bac30ab76e96fcebd4d6be7dbd8b534d831f"]
      - values: {"nC":3,"r":"0{,}3"}
        answers: ["sha256:bc1ae240514d627ab7429463085729e10c40495872d9aa1d6dc7b9a8a6d23f41","sha256:606d88e5406bf07d93b5965a4877b92e8216ddbb28d66389859751c9f1cda220","sha256:28dc352ffcce5a6ce4bd7d14528136b4879e4ee8e63070ac6d8c221b212ab02d"]
      - values: {"nC":0.5,"r":"0{,}05"}
        answers: ["sha256:ca19e1f0f3c9ede07293d303a0d668a89df3fd9b77e2805cc482f750b27aa1cb","sha256:903c12456af37073867efedef46c6fc518e021424ec13a8674bae74fae44bf37","sha256:5b879e58c320bce12b414622609ae3a657e17c72e3d3b4dc5619669e98d507ac"]
  - id: esfera-uniforme-interior
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una esfera maciza de radio ${{R}}$ m tiene una carga de ${{nC}}$ nC repartida **uniformemente en su volumen**. ¿Qué campo hay a
      ${{r}}$ m del centro, en N/C? ($k = 9\times10^9$; cuidado: ¿el punto está dentro o fuera?)
    variants:
      - values: {"R":"0{,}2","nC":8,"r":"0{,}15"}
        answers: ["sha256:ead6f97c3c87bf585f959737ff9596a7160af57323065b8105477f5a0141ef61","sha256:a5b7cde50cfff8cd4a451334457533b609b1ee453076ed1b7e0bea127c3d8fbf","sha256:f8a5ce765681116c79441eb0fd47fe57375a7f7ede1059b9db740651692cc199"]
      - values: {"R":"0{,}1","nC":5,"r":"0{,}05"}
        answers: ["sha256:2a46d776018bbbe0a69755cda8f6de76a22c1607956a51f6c4f2b20d8c5524c8","sha256:50141ecc4a3e16777515920719ec768eb67e3f7e7a882a6bf9d8e1c51378ef3f","sha256:c750df293373cbeae24b1deb678acd740825bf8208950896bed573210df3c43a"]
      - values: {"R":"0{,}5","nC":20,"r":"0{,}25"}
        answers: ["sha256:1605cc8678726010db3a1364ea964880d202ea5b8ce3cf44aeba24d3f030513f","sha256:b07494a2689a9a3182818adb01228f0c585c55caf695f04273c9394a4c5aaaa2","sha256:a6a70f2eacf6414724ebf0babb17a42c89010971dcb5f1ef7b5f36282b254bd8"]
      - values: {"R":"0{,}3","nC":12,"r":"0{,}1"}
        answers: ["sha256:50dbd2e2de039bba188f88dd2457532b92c65a901a4b3b8e507aff538f257aa1","sha256:400974da79898e0e9b7d0372cdaadeccd4a308cab392fb663698eec427e3e015","sha256:817733db0ffcb4dcc4529c75956f52258c3a7d3e4260fb6b9e69b3dad6f850f5"]
      - values: {"R":"0{,}2","nC":8,"r":"0{,}4"}
        answers: ["sha256:7970b2880c9551edde0660f7e638e858827d36187056121a8e5986dbd755ec64","sha256:7b99e44c6eb7d48d09fc450958d45d8c56c810a7a8171fa2345190b0cea350d1","sha256:f7869a834a8435b3f1fd46c63fd2e4c4a1eed23900207ea04b96307a1a67a585"]
      - values: {"R":"1","nC":100,"r":"0{,}8"}
        answers: ["sha256:745af5bfd09bdde18d42879778104d53670969f490557995ae357e713c91b72f","sha256:89038de797b61287acc2c7abab978b949edaab64d9aea3cac8b7235a89c3142b","sha256:27be2b614d9e4315fdb57de9711d541b17740b6436b5f3e0de89d3b130dae196"]
  - id: radio-del-ciclotron
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Un {{p}} ($m = {{m}}$ kg, $q = {{q}}$ C) entra a ${{v}}$ m/s perpendicular a un campo magnético uniforme de ${{B}}$ T. ¿Qué radio
      tiene su órbita circular, en milímetros? Respuesta: redondeado a **1 decimal**.
    variants:
      - values: {"p":"protón","m":"1{,}67\\times10^{-27}","q":"1{,}6\\times10^{-19}","v":"10^{6}","B":"0{,}8"}
        answers: ["sha256:79b33e2fdb7e3edd4a4fdd19e4df3998fcbbd921a445ff345853ed7d2313597c","sha256:cfeb5290b1b571d81ac2e9608ea3549db6b2d8c7bf79af5f80df01882d1e8bdf","sha256:b2273f4e0f4b3d8420ac789c5a78b071b7e30cbfe8e2b65ced73917cb31c953a"]
      - values: {"p":"protón","m":"1{,}67\\times10^{-27}","q":"1{,}6\\times10^{-19}","v":"2\\times10^{6}","B":"1"}
        answers: ["sha256:af82bdd2be6a054f06809b0aafeafb963722ee8e6a143c5f8625ff703414b9f4","sha256:68fd0411de9f316eb66d33b780ffb2491676a051ad01fe85f48d7e45a1f562d1","sha256:7f6ec9f51ba3ad1b069bee914aeeffb4e1d35c501512c4026015e28a11e9645a"]
      - values: {"p":"electrón","m":"9{,}11\\times10^{-31}","q":"1{,}6\\times10^{-19}","v":"10^{7}","B":"0{,}01"}
        answers: ["sha256:26add1ef07b35870f51a24866fa189a06208651038c7e855daa74dea3ae1a4de","sha256:cbdaf7ea1cce5235ebb30f54af7cdc1f929bbf9a3161d0c7b5d38d8fe74139a6","sha256:26db5e2de73850736c40b2abc7e4db21eade6a007b8f304795253c614446dbcb"]
      - values: {"p":"protón","m":"1{,}67\\times10^{-27}","q":"1{,}6\\times10^{-19}","v":"5\\times10^{5}","B":"0{,}2"}
        answers: ["sha256:b926d75a940d508629f87c3e1c347f94b2bb8e92794c3747e28c6ffe40c69a65","sha256:0140780cb64491086daad53566cecb2a00d3cf6da96bafbf42f5e7f6b4b64db2","sha256:a57a92d479280949cfbb2ae8ef95953b6aeec640766b5d26b169d3d4d700c2c4"]
      - values: {"p":"electrón","m":"9{,}11\\times10^{-31}","q":"1{,}6\\times10^{-19}","v":"3\\times10^{6}","B":"0{,}05"}
        answers: ["sha256:2a2c4b5c46787cd593d8e4f137ba11291ab1f268832b33704c0edce4b7f06271","sha256:c27e5a5c978a192a18006e4803e85384a8136f151aec0d139a103309accb054f","sha256:270881d7ba86ba7e54ccb2dace0148872b7cdc54db9f042f07131d9ce7120e61"]
      - values: {"p":"partícula alfa","m":"6{,}64\\times10^{-27}","q":"3{,}2\\times10^{-19}","v":"10^{6}","B":"0{,}25"}
        answers: ["sha256:a0ab296a8f4f8a1e51968298bc6c9de5295bd2601ac5fb27bac19e4879a5bfff","sha256:052a4db184bf66fab02ea62893ae5e7abc188859f1dd9f4b9d5ca2cf0587224a","sha256:734278e170bdafe7f8b7a93149c6ec6c93ccea7aadba3f11c363b836eee1f0a5"]
  - id: hilo-en-un-campo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Por un hilo recto de ${{L}}$ m circula una corriente de ${{I}}$ A en un campo uniforme de ${{B}}$ T que forma ${{g}}^\circ$ con el hilo.
      ¿Qué fuerza magnética sufre, en newtons? (Cuatro cifras significativas si no es exacta.)
    variants:
      - values: {"L":"0{,}4","I":6,"B":"0{,}3","g":30}
        answers: ["sha256:371ee358f71bfefb90d1bb4bc1b845a6d7d4fa1aeaaadd7a2e536d4c564edb43","sha256:f35b9e962cc00c614b80c0844e3a8984dec497615b4bcc4f8bc725e82a45213b","sha256:0c21244e2e7fc91e0d759f6d68e772bc3aa7892cb2f903986b6200c080904022"]
      - values: {"L":"1","I":3,"B":"0{,}5","g":90}
        answers: ["sha256:52ce9a67a830abeda91c793f67cd36036cd29171977c61e7b871fd3a643c6217","sha256:fbaa080518b90295049a6830e031b4a7153e9a6ef99efe038e012ae92b2b0dbb","sha256:486c473cf396fa92d66324cc58e651003ddbe24b89db20381aa4585f9cc0a55d"]
      - values: {"L":"0{,}2","I":10,"B":"0{,}1","g":45}
        answers: ["sha256:ad6f11843541776ef922ecd3e2b863e6b851b0d0b9bbdd8486c6b2ff1682fad8","sha256:e7828ff25ec2e262b9a95e33e2e939a1ffa76bcdf395f9c7db12cab56ac77706","sha256:1f32bbf8b6f4c219a862fb00179255812ab0cf5bf177e7fbbe0bfc58424afd6c"]
      - values: {"L":"0{,}5","I":3,"B":"0{,}8","g":60}
        answers: ["sha256:1f4d203a86c1ff9250d4b3ee3e177f79180e132e07dd9092054cc0139389f68f","sha256:e44d9e438467fe223e86bcd85d91a012f0b0c441a658dd4b5356e284b07ea3a3","sha256:6afda1d4893e71501d5607d10bf20b609ee3365ee1e6e486032da2a1bd1f4f61"]
      - values: {"L":"2","I":1.5,"B":"0{,}05","g":30}
        answers: ["sha256:b7dce202b81bb00833982354421289b7573154ebe6e7ae30f0e7be52f1aa6019","sha256:517cd5c49653f1c71e325ae01f40f69909be36c7905285e3f98f25304abbed7f","sha256:d8f4bf3d7dc33bf34de0a42cf21b819534d2b6b1cc3873d7921d79f9db1f591d"]
      - values: {"L":"0{,}3","I":8,"B":"0{,}4","g":150}
        answers: ["sha256:51ca4cb5a2f36be20c215bcdc2bc9e9323abb22d9d566074d52c0953d1b42ee3","sha256:3caf7c90e2aa4c1222a0893ac69ccae31c61fd2e02751c6f3065704e3ced2b9a","sha256:a675cfcdc7f5e17b110535348e2251e35541b63d146dc90dabb7391fb85b749d"]
  - id: campo-de-un-hilo-largo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un hilo recto muy largo lleva ${{I}}$ A. ¿Qué campo magnético crea a ${{cm}}$ cm, en microteslas? ($\mu_0 = 4\pi\times10^{-7}$ T·m/A;
      ley de Ampère.)
    variants:
      - values: {"I":12,"cm":4}
        answers: ["sha256:06dbe8f7476ee48e70b251810503e937bd3c2dd8cf234969a1de3b2d60e76440","sha256:ae3565eac42333ff133229e129cd28a46e1f3039ee3145e0d678bff5af452c62","sha256:af859019b78297ac95e40e3878e592424018ae10814babf73a46de376b44b945"]
      - values: {"I":20,"cm":2}
        answers: ["sha256:11eb0394b13c3463769dfcbed4b26a16ccde2051d59b42355c332851119d2ab6","sha256:b1253cd2f83bc111b1518c25cf706ecb630f5f2655531b946218d53522c0b34d","sha256:be899f54067b559d68074beedc7fe17d73f77cf9aedf424d1224e330c43db97e"]
      - values: {"I":5,"cm":8}
        answers: ["sha256:946c0de5f549dd7a65c66e1cf82f9dca0b479793411ce3989fec9387959c8fff","sha256:39b0d9cceff943daec52c13f65aa2fedfc4170d01587cb9d2f25563c9299e074","sha256:2e3129917fcbc7a4d810e48b31dd076164ff299affaee65fd17c6c10f6494f88"]
      - values: {"I":1,"cm":1}
        answers: ["sha256:75c57903ee003456ed61ad29442e8cae29c75d23926578d89e93613be6517628","sha256:122ef6c3a56397dba3f18f23704c289b63e945a4fc3dcb240a3ee5c9ffac53f7","sha256:6182b0c2f9b841132441af1ead769c261e11be0a5c40aec14908e5456af1b485"]
      - values: {"I":50,"cm":25}
        answers: ["sha256:f53af395a925821a580b11df5f852c63838ba2ac124918828394c8f6ad4c2df0","sha256:82a0418bdbf2ef3409c81e3adba3a8295bf47fa97748def4802b84e688d7e0b0","sha256:953652e6bd6f2f5ae1406c50ce4446b590942a0f404feba69b310cc4ad09fcb5"]
      - values: {"I":15,"cm":3}
        answers: ["sha256:9271603e6aa4c51753d2e4ae54904606905bb430f17d266da383e4b8715aeaba","sha256:3ad5fe9bb75c42fd6dce47e63fbe2dad5799f7354967d02296a67ebbc4946517","sha256:ec54a82aec01fae5ca49e4f05cf4eb8400b90a3dbe200cb4012796d6fbbea255"]
  - id: solenoide
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Un solenoide largo tiene ${{n}}$ espiras por metro y por él circulan ${{I}}$ A. ¿Cuánto vale $B$ en su interior, en militeslas?
      ($\mu_0 = 4\pi\times10^{-7}$.) Respuesta: redondeado a **2 decimales**.
    variants:
      - values: {"n":1500,"I":"2"}
        answers: ["sha256:ccc13628335c03bac09e4704e788b160ca19f8c82116c1177991859e7f59e8f9","sha256:d5a66ca3a003db98f55595ce522ba067971292ded98f5a666c261cd671e0e643","sha256:a6f95b50b70b9f7808c03d1abf6051b562ec2fb9e87efb315d991506b46406f3"]
      - values: {"n":500,"I":"4"}
        answers: ["sha256:6d22d811ee7ba4eda0cc353d256738e0edb1506ada27ab651de4bf4f4a7e5439","sha256:d307c57a4836de26f12c4bbe26077068fc79efce904b5850c1f526411fa11bff","sha256:51ff9d59baeb1098c0edad46dfbffa9d0179f8d6680f602174694ff79f1c66b4"]
      - values: {"n":2000,"I":"0{,}5"}
        answers: ["sha256:e935f93a20eb848e3752d26d5c502f880c19ac6c1b24153be52516550c401eea","sha256:094609188c5591f6665357d6d646040195fbed805b09cd64c94c74fd29a635d2","sha256:cb9f305e68296f014219ee2d177a86f2a870ac581f117769fd5e3f0258dc9efb"]
      - values: {"n":800,"I":"1{,}5"}
        answers: ["sha256:7104daefee68385aff3d26c22d5d27e2d83ef9c069b42f387a2fbf97a73b270f","sha256:8e77212a662b21866ed816f40c10341cb6f9935b2e0c1ca6e6ed1460abc99bfc","sha256:09ef6dcf128c60d157bfba624f8d65b2930e3482f46d9f7d681123f5bd935dea"]
      - values: {"n":3000,"I":"3"}
        answers: ["sha256:63b315238a6c2f7c3f8b92e24e38a53b14f5afeb085d805682d18cc50575acd2","sha256:4bcaa16722b1762babbc7292e934af8d906e0de3b8865089625c602b58d349f2","sha256:0adfc98b502d6292760657f6ec5c4fb12e820d0e306b869cd9a3266c01061097"]
      - values: {"n":1200,"I":"0{,}25"}
        answers: ["sha256:ee7be613d963658aa1802e02ef929b346840e258fffc638c80f4281f71a57daa","sha256:1aac33f9eb6e53410cd759a5c5920e53bddf1bb3024d91b2a3c6f77dd27bfbd6","sha256:48dd303cd89a2bd14868bca02e080518a4b08b068f7ea25f7f5f0c2e74de3799"]
  - id: ley-de-faraday
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una bobina de ${{N}}$ espiras de ${{A}}$ m$^2$ cada una está perpendicular a un campo que crece ${{dB}}$ T en ${{dt}}$ s. ¿Qué fuerza
      electromotriz media se induce, en voltios (en valor absoluto)?
    variants:
      - values: {"N":150,"A":"0{,}01","dB":"0{,}5","dt":"0{,}25"}
        answers: ["sha256:321553dea76cf815fa4d604d75183d71bb70a83f3e00e5c9661e9371216a315f","sha256:20a441c0fe9963f30533d697b5fb5ec2aee2851d50ef37e5ad8ae72046ad88d9","sha256:42d7b4bc7ecabd1ad3ebc17c23a48be6b908616741cfda3964fb925396435a1d"]
      - values: {"N":200,"A":"0{,}005","dB":"1","dt":"0{,}5"}
        answers: ["sha256:aa87792c15661c03b2814262ad67d4930cab138923cbec1859cd220091464a34","sha256:76116bf5735a63189b0d957273f83b32d29a2103819a1f26547ed49f79650499","sha256:e8c271324dc8a13d30309e01719c5e3233b9ef011344ea5fe11998125defa228"]
      - values: {"N":50,"A":"0{,}02","dB":"0{,}3","dt":"0{,}1"}
        answers: ["sha256:fd722b33af7d978f3bc785300f58bde3a8d53329a746c5d084dd3816bff6fa27","sha256:0d222442ea1a2ea0c9272656200e7e5cae1434168287ba68487365f2a82ec0d8","sha256:bfd638318e4f2192900b664d99c900f64c0f50743fdb9996e934343920e3b649"]
      - values: {"N":500,"A":"0{,}001","dB":"0{,}8","dt":"0{,}4"}
        answers: ["sha256:4a4689069a3e7c854026436b926f956a26f1fcf716008625db8b873f53c1fdc5","sha256:79987d367bd3fe2c8b2b3fffcedf3c9c5464ba1afe063d01cf8c4ffcbc2edfe7","sha256:2fae644d0ceebb3665f056cb6dd03778dcc819575bff2e701e1f30fa929f5b2d"]
      - values: {"N":1000,"A":"0{,}002","dB":"0{,}25","dt":"0{,}05"}
        answers: ["sha256:61858bbc33f3651d866e97174d8744867a51d8551160a8ef88185bf888ac6c87","sha256:5fccfeaaaf0ce0aae6645059c5a462424f14e0ced22019df793b3adde3e3419d","sha256:350af9c429fe1cef78bc209f57db12aa1dabc5f1e2ad23b249dde2e4a52beb8f"]
      - values: {"N":80,"A":"0{,}03","dB":"0{,}6","dt":"0{,}3"}
        answers: ["sha256:d6c29675f1fdb48d8dba20902d7a8f587147de09808df128392b10bd20ae4380","sha256:6200d4073407676632a4af45d0ce1bec323e728e78e1e2bf5f979179602ecb46","sha256:583ea16ea799e363d88d597b4ad5c72d3e43eea058e6091dae6badd225493a44"]
  - id: fem-de-movimiento
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una barra conductora de ${{l}}$ m se desplaza a ${{v}}$ m/s perpendicular a un campo de ${{B}}$ T (y a su propia longitud). ¿Qué fem
      aparece entre sus extremos, en voltios?
    variants:
      - values: {"l":"0{,}5","v":"6","B":"0{,}8"}
        answers: ["sha256:a21facd8d77b78498dbe04d723bc8a4900269a5a39e7b6ae55edc2c4ffe4cd29","sha256:8e3f3fec44a4e53b59e192f002c6ace5e1599ff93002788ed912607839037719","sha256:11aefff6e4b5fccb221b8479fe8fb705b08d743181b1aabd89ac658965e59bab"]
      - values: {"l":"1","v":"3","B":"0{,}5"}
        answers: ["sha256:fd94673db3a10c15f5a8d5ad529eb983c4c8c9e30c8cf9b2b6258a04c90622c7","sha256:f593750a6f160f151a0d740d090e00158ca8c98f98bb86a0e8969d1b7feb7977","sha256:58e107794070e5b13becce0d0adbf73c0851ca66db7c68d602915d625f58f953"]
      - values: {"l":"0{,}2","v":"10","B":"1{,}2"}
        answers: ["sha256:3003b9593cb7b76f11d7af5e191c43438a6cfd71f817d7efdc03815a0ffb8331","sha256:e2aad13cd85c9d395053be6b50c966040def1d3555da1bf7dfe7e4d3ab81e884","sha256:4600975b3a18f8ca97b28dd819201d8850b1dfcb1db5424f53478ab6b93cd1a4"]
      - values: {"l":"0{,}3","v":"5","B":"0{,}4"}
        answers: ["sha256:314a90f52092749709eb11920e7fe7585068e205deac59511e0b622e7d33b4b1","sha256:24e87e3a9694a06477698c307d428c238a619bf834207d1f688c73a2d2f0aa3b","sha256:c53160fce2cac389223aa0691ebe5d08024d94b4ba1966da84e6120d22b16204"]
      - values: {"l":"2","v":"1{,}5","B":"0{,}1"}
        answers: ["sha256:c22015fa01050e57bea9c87ad95b08b596c0173547713f5728fd1e899afdd93b","sha256:72e63344db89d79df5492bd70848052f77253e847cb92404f424a7aff8234750","sha256:6e9662b16939b5e9d07d894c2d847d7697ae1dd32b647413b5e9eb9c95c5c02c"]
      - values: {"l":"0{,}6","v":"3","B":"0{,}25"}
        answers: ["sha256:0b342ed1496dd0a06301f2bde50cd760f8b56a4be5efe3328fba83eff99b00ab","sha256:2082a43bd2f0468f94f8132f0e58e96a8c4a7da3c6ed0e4a8d19960ef0b5176b","sha256:57c774d7dad9010488c8cff7f82c2958153eab47955ac81c39bb98a4fd24c28c"]
  - id: campo-en-el-eje-de-un-anillo
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un anillo de radio ${{R}}$ m lleva una carga de ${{nC}}$ nC repartida uniformemente. ¿Qué campo hay en el punto del eje a ${{x}}$ m del
      plano del anillo, en N/C? ($E = kQx/(R^2 + x^2)^{3/2}$, $k = 9\times10^9$.) Respuesta: un entero (redondeado).
    variants:
      - values: {"R":"0{,}1","nC":10,"x":"0{,}2"}
        answers: ["sha256:5a2a861b5a7f47ea8b2655a0d24e7bd1c38864affce78a2a9d13ed8d36067375","sha256:1cea14d90dcdc4249b66a56957d45fa8d261109da255d378213f6a259d164042","sha256:dc166576d6f05d10a23ac19e023fbbf466404914cd13ed630d20cc2d39ec7c69"]
      - values: {"R":"0{,}2","nC":5,"x":"0{,}1"}
        answers: ["sha256:740570d906dadc0c88120c456c8ea9a1587a2ee784cbc73cbbd9ae115dafd5f5","sha256:82afd6701c4f13fc34be67499b8c7292cd623ca8da8ec1cd1d999b9e79cea0f0","sha256:f6735ebd213f633fa3339cfc7c70d090b32698f6f10be763f1e433d72fc7ba62"]
      - values: {"R":"0{,}05","nC":20,"x":"0{,}05"}
        answers: ["sha256:816bd5e2390522ef5da0c61bf121915b4d8f126ff1483fc174823b40ead2e272","sha256:1c68e374cb98fce515dddf3849feb39591c3f959c71942ba038e3f04c897790d","sha256:b27e639bb7f200dda01c1513c99b9fa50176080a182eef6e987756ba3e781ebc"]
      - values: {"R":"0{,}1","nC":8,"x":"0{,}3"}
        answers: ["sha256:a38f52067cd4ed162b0f2a831cd95cfb2e3ddda95d09a9f30fab60a75c64ff19","sha256:1e8f439bc2af420a51f3b1e37f272b4d6923130ac3831c49664019a49b2a12da","sha256:b14e2f1b1b4317cb2c7c2c2a132e0e2adc193b1e398dc9bce7878f8cb0c3be44"]
      - values: {"R":"0{,}3","nC":15,"x":"0{,}4"}
        answers: ["sha256:2e7aef5c3d7857dd738d6d01859ede6d533a868dfaf62b880e044a4759d58cb8","sha256:72f31397547e0038f207e567f7059d861d289623421ae2ba04760e5b3c32967d","sha256:e1955615b801b5b00274206fcd8c4bbdf2169bd03cfdd03b4ef02b41fd205aba"]
      - values: {"R":"0{,}15","nC":6,"x":"0{,}15"}
        answers: ["sha256:13dd666fe1a742107b0555320fbe31155345fb0f527c7e63f1274eed5952eb52","sha256:a92f1d752d2f8709c37f4b5b334a332df2b49ee0d4422987952cf7a5c1f7051d","sha256:d62a193d02d206b69041b52897e3c04d61142cd3d3b227dc73975e6a1f627538"]
  - id: fuerza-entre-hilos
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Dos hilos rectos largos y paralelos, a ${{d}}$ m, llevan ${{I1}}$ A y ${{I2}}$ A en el mismo sentido. ¿Qué fuerza por metro de longitud
      se ejercen, en $\mu$N/m? ($\mu_0 = 4\pi\times10^{-7}$.)
    variants:
      - values: {"d":"0{,}15","I1":15,"I2":20}
        answers: ["sha256:933b25a71a531fb4c3f07d406b85bbed4ca2af7bdb101b905742e74326559bbb","sha256:34cdcc4df99e2f6a1aeb862f6e4fd3d78599638688422744db782b06fe653e7b","sha256:cfc17130d4acba05b5c65b41332449c05dc886425006995a2f0383e50951672b"]
      - values: {"d":"0{,}1","I1":5,"I2":8}
        answers: ["sha256:f1c9310405754340ad9a7098af646a0d90ad2ca223047d16376047e095e0aafc","sha256:cee1b3cfcf9db0931096b25c4e0888127ac576d0f595c01197e22b91b025b8d4","sha256:7fb2d17e7fdd0e77e25ed4df2a329bf870a727a637d0214d524fbb9b38931cfe"]
      - values: {"d":"0{,}2","I1":30,"I2":10}
        answers: ["sha256:986668f75ccb92d110198fc31dfb1b85be7e556ec535a19b3b248cc61ed992c6","sha256:7535485dee2b7cb8cba9b808803b7a38a096a011f4f0e3b501cefa749ccd7e33","sha256:2e9762d10d5a4dc0e4be68138f2f9ccd658cef148620e846b9d360824b8a97ad"]
      - values: {"d":"0{,}05","I1":2,"I2":3}
        answers: ["sha256:31225bcbc6bd12fe688700928302d1e734baf3e8a2e914cd780a121069049e4f","sha256:a951c9a1039ce43dacf167771118a4327ed34cff74bfba958f5b7760abe74d77","sha256:0eb6db73a509f5718da31639aced6a4a4c46ae0a6b270000aed8c8cc42eca7cc"]
      - values: {"d":"1","I1":100,"I2":100}
        answers: ["sha256:0179df539359ace4c9f0c60b8f4c22e9a4511839b85fc5604c08d4e31385c327","sha256:6ae2d7065d614dc412b3c3acd23ba472c2edbbe49969bf71a62e3667edc12cb2","sha256:f38b1c44263ce350303aa047224658b5be5178cf19be2f3d28ec749c92f8fe86"]
      - values: {"d":"0{,}3","I1":12,"I2":30}
        answers: ["sha256:e2c6445312154893f9651dbef2e54d082d2319f01e755a8aaf685859225d5ca4","sha256:d68235328d0b25b99d42e2e6c1490ab44159d96f9049aa6a4db01459546bb60e","sha256:39d337bf2194b275b13f7e26617a3909459a57b261379d5b331d2dc3e74bd129"]
  - id: velocidad-de-la-luz
    tier: 3
    prompt: |
      Las ecuaciones de Maxwell predicen ondas con $c = 1/\sqrt{\mu_0\varepsilon_0}$. Con $\mu_0 = {{mu}}$ T·m/A y
      $\varepsilon_0 = {{e}}\times10^{-12}$ F/m, ¿cuánto vale $c$ en unidades de $10^8$ m/s? Respuesta: un número redondeado a **3 decimales**.
    variants:
      - values: {"mu":"4\\pi\\times10^{-7}","e":"8{,}854"}
        answers: ["sha256:df13400dfae8fa6c536db0fdbd2f489a896c89b0b266fa55f15bd729afaed9c9"]
      - values: {"mu":"4\\pi\\times10^{-7}","e":"8{,}85"}
        answers: ["sha256:841fd01cb6586c97d57e6007077238b22b9edc402bf1a3af3a618cc8bacfa998"]
      - values: {"mu":"1{,}25663706\\times10^{-6}","e":"8{,}8541878"}
        answers: ["sha256:df13400dfae8fa6c536db0fdbd2f489a896c89b0b266fa55f15bd729afaed9c9"]
  - id: r-fuerza-magnetica-trabajo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué hace un campo magnético uniforme a una carga que entra perpendicular a él?
    options:
      - |
        La acelera en la dirección del campo
      - |
        La frena hasta pararla
      - |
        Cambia su dirección pero no su rapidez
      - |
        No le hace nada
    answers: ["sha256:04e8721a29b2766f12302c21653543c9f5baa433639b88dde0ea5aa6c2d0c1ac"]
  - id: r-potencial-cero
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si el potencial es $0$ en un punto, ¿el campo eléctrico es también $0$ allí?
    options:
      - |
        Sí, siempre
      - |
        No: el campo puede ser distinto de cero donde el potencial es cero
      - |
        Solo en conductores
      - |
        Solo si hay una carga
    answers: ["sha256:5250c15155a66bf720a8f48972b0486b62ed2a3bddb07040e9e9c58a45ab1de7"]
  - id: r-lenz
    tier: 2
    type: opcion
    review: true
    prompt: |
      Según la ley de Lenz, la corriente inducida en una espira…
    options:
      - |
        Se opone a la variación del flujo que la produce
      - |
        Refuerza siempre el campo
      - |
        Va siempre en sentido horario
      - |
        No depende del flujo
    answers: ["sha256:b80133eef7fdc89a23163f19db9b7da72fa8c0d69d36345e58fa5822c1b18bd4"]
  - id: r-coulomb-distancia
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si la distancia entre dos cargas se reduce a la tercera parte, ¿por cuánto se multiplica la fuerza entre ellas?
    answers: ["sha256:c29287cd308e23ae094c54cb0ebdf5b9f763c4b0d8772981ad01fee1793f2d29","sha256:41a962b652aa46dcb096140e173152db568ee06a7621a0261e7513b8bcf03c1d","sha256:9937495a6ffb6b0fc666fa0147a3b44aba9b3b2b741e65a0ef5205c986064fb0"]
  - id: r-condensador-paralelo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la capacidad equivalente, en $\mu$F, de dos condensadores de $10\,\mu$F y $5\,\mu$F en **paralelo**?
    answers: ["sha256:71e0cf8e7b86c77b60005fdeefef6a25bf93c63219020cad8baf83e6f05a7975","sha256:8c52b445d977e57d734f8f10b22b4e7a80459af5f10113750c662fc92d97a7cc","sha256:c48fc44e5c413811a13ecc498d2dddd06f2114a01f194812db47fde1eabee7b3"]
  - id: r-conductor-interior
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale el campo eléctrico, en N/C, en el interior de un conductor en equilibrio electrostático?
    answers: ["sha256:e316d457f42bbed4f738262c50230c42ee2d98dc8a36d78c26bdc4dfbd425eb4","sha256:437991cc43eb5fec397585b827d84200cae38d45b5c45f8314c28726bcdd7c9d","sha256:4269ee33b33835f26ef891e90fc04bd0c3a6adc33ff31a50aac4c71bed7fce02"]
---

# Electricidad y magnetismo I: campos, potencial, inducción

[[ing-electricidad-basica]] trataba la electricidad como **circuitos**: tensión, corriente, resistencia. Detrás de cada circuito hay **campos**: las cargas crean un campo eléctrico, las corrientes crean un campo magnético, y la variación de uno genera el otro. Este nodo construye esa teoría con cálculo, de la ley de Coulomb a la ley de Faraday, y es la puerta a [[fis-electromagnetismo]] (las ecuaciones de Maxwell completas y la luz) y a [[ing-circuitos]].

## Objetivos

Al terminar sabrás:

1. Calcular fuerzas y campos de cargas puntuales y de distribuciones continuas (superposición e integrales).
2. Aplicar la **ley de Gauss** con simetría (esfera, hilo, plano).
3. Relacionar campo, **potencial** y energía; calcular la capacidad y la energía de condensadores.
4. Calcular la fuerza magnética sobre cargas y corrientes y el campo de corrientes (**Biot-Savart**, **Ampère**).
5. Aplicar la **ley de Faraday** y la ley de Lenz, y entender por qué la luz es una onda electromagnética.

> [!question] Test de entrada
> 1. ¿Cuánto vale $\int_0^1 \dfrac{dx}{(1+x^2)^{3/2}}$? 2. ¿Qué potencia disipa una resistencia de $10\ \Omega$ con $2$ A? 3. ¿Cuál es el producto vectorial $\hat x \times \hat y$?
>
> Respuestas: $1/\sqrt2 \approx 0{,}707$; $40$ W; $\hat z$.

## 1. Para qué sirve

- **Electrónica y energía**: condensadores, bobinas, transformadores, motores y generadores son aplicaciones directas de este nodo.
- **Comunicaciones**: antenas y líneas de transmisión ([[ing-circuitos]]).
- **Instrumentación**: sensores capacitivos (pantallas táctiles), efecto Hall, espectrómetros de masas, aceleradores.
- **Base de la física moderna**: Maxwell condujo a la relatividad y a la cuántica ([[fis-electromagnetismo]]).

## 2. Carga, ley de Coulomb y campo eléctrico

> [!practico]
> Frota un globo contra el pelo y se pegará a la pared: el globo ha cogido **carga**. Las cargas iguales se repelen y las
> distintas se atraen, y la fuerza baja mucho con la distancia (al doble de distancia, la cuarta parte, igual que la
> gravedad). El **campo eléctrico** es una manera de describir esa influencia antes de que llegue otra carga: cada punto del
> espacio tiene una flecha que dice hacia dónde y con qué fuerza empujaría a una carga positiva colocada ahí.


La carga eléctrica $q$ (unidad: culombio, C) se **conserva** y está cuantizada en múltiplos de la carga elemental $e = 1{,}602\,176\,634\times10^{-19}$ C (valor **exacto** en el SI desde 2019). La **ley de Coulomb** da la fuerza entre dos cargas puntuales:

$$
F = k\,\frac{|q_1q_2|}{r^2}, \qquad k = \frac{1}{4\pi\varepsilon_0} \approx 8{,}988\times10^{9}\ \text{N·m}^2/\text{C}^2,
$$

repulsiva si las cargas tienen el mismo signo y atractiva si son opuestas. En los ejercicios se usa $k = 9\times10^9$ y $\varepsilon_0 = 8{,}85\times10^{-12}$ F/m, valores redondeados; el valor recomendado de $\varepsilon_0$ es $8{,}854\,187\,8128\times10^{-12}$ F/m (CODATA 2018). **Ejemplo:** dos cargas de $1\ \mu$C a $1$ m: $F = 9\times10^9\cdot10^{-12} = 9\times10^{-3}$ N.

El **campo eléctrico** es la fuerza por unidad de carga de prueba: $\vec E = \vec F/q$ (N/C = V/m). Una carga puntual $Q$ crea $E = kQ/r^2$ radial. **Superposición:** el campo de varias cargas es la suma **vectorial** de los campos. Para una distribución continua se divide en elementos $dq$ y se integra, $\vec E = \int \dfrac{k\,dq}{r^2}\,\hat r$.

> [!formal] Con rigor: el campo en el eje de un anillo
> **Ejemplo (anillo cargado, punto del eje).** Un anillo de radio $R$ y carga $Q$; un punto a distancia $x$ del plano sobre el eje. Por simetría las componentes perpendiculares al eje se anulan y solo queda la axial: cada $dq$ aporta $k\,dq\,\dfrac{x}{(R^2+x^2)^{3/2}}$, y
>
> $$
> E_x = \frac{kQx}{(R^2+x^2)^{3/2}} .
> $$
>
> Con $Q = 10$ nC, $R = x = 0{,}1$ m: $E = 9\times10^9\cdot10^{-8}\cdot0{,}1\big/0{,}02^{3/2} \approx 3182$ N/C. (Comprobación límite: para $x \gg R$ da $kQ/x^2$, el campo de una carga puntual.)

**Comprueba tu idea.** ¿Puede el campo de un dipolo ($+q$ y $-q$) anularse en algún punto de la recta que une las cargas? No: entre ellas los dos campos apuntan en el mismo sentido y se **suman**; fuera, el de la carga más cercana es siempre mayor en módulo y no se compensan.

## 3. Ley de Gauss

> [!practico]
> Imagina una bolsa cerrada alrededor de unas cargas: lo que «sale» de campo por la bolsa depende **solo** de la carga que hay
> dentro, no de la forma de la bolsa. Cuando la situación es muy simétrica (una esfera, un hilo largo, una lámina), esa idea
> permite calcular el campo sin integrales difíciles, eligiendo una bolsa con la misma forma.


El **flujo** del campo a través de una superficie es $\Phi = \oint \vec E\cdot d\vec A$. La **ley de Gauss** dice que, para cualquier superficie cerrada,

$$
\oint \vec E\cdot d\vec A = \frac{Q_{\text{enc}}}{\varepsilon_0}.
$$

Es equivalente a la ley de Coulomb (con la dependencia $1/r^2$) y es **siempre** cierta, pero **solo sirve para calcular** $E$ cuando la simetría permite sacar $E$ de la integral. Los tres casos clásicos:

| Distribución | Superficie gaussiana | Resultado |
|---|---|---|
| Esfera (carga puntual o corteza) | esfera concéntrica | $E = \dfrac{kQ_{\text{enc}}}{r^2}$ |
| Hilo infinito, $\lambda$ | cilindro coaxial | $E = \dfrac{2k\lambda}{r}$ |
| Plano infinito, $\sigma$ | cilindro que lo atraviesa | $E = \dfrac{\sigma}{2\varepsilon_0}$ |

**Esfera maciza uniforme** (radio $R$, carga $Q$). Fuera: $E = kQ/r^2$. Dentro, la carga encerrada es proporcional al volumen: $Q_{\text{enc}} = Q\,(r/R)^3$, de modo que $E = kQr/R^3$, **lineal** en $r$. Con $Q = 8$ nC, $R = 0{,}2$ m, $r = 0{,}1$ m: $E = 900$ N/C.
**Conductores en equilibrio:** el campo es **cero dentro** del conductor, la carga se queda en la superficie y el campo exterior es perpendicular a ella.

## 4. Potencial y energía

> [!practico]
> El **potencial** es como la altura en un mapa de montaña: las cargas positivas «ruedan» de potencial alto a potencial bajo,
> igual que una pelota cuesta abajo. La **tensión** de una pila es justo eso: la diferencia de «altura eléctrica» entre sus
> bornes. Y tiene una ventaja enorme: es un número, no una flecha, así que los potenciales de varias cargas se suman sin más.


El campo electrostático es **conservativo**, así que existe el **potencial** $V$ (unidad: voltio, V = J/C) con $\vec E = -\nabla V$; en una dimensión, $E = -dV/dx$ y $\Delta V = -\int \vec E\cdot d\vec r$. Para una carga puntual, $V = kQ/r$ (con $V = 0$ en el infinito), y los potenciales se **suman como escalares**: mucho más fácil que sumar campos vectoriales.
**Ejemplo (cuadrado):** cuatro cargas de $1$ nC en los vértices de un cuadrado de lado $1$ m; la distancia de cada una al centro es $\sqrt2/2$ m, así que $V = 4k q/(\sqrt2/2) = 50{,}9$ V. El campo en el centro es **cero** (se anula por simetría), pero el potencial **no**: potencial nulo y campo nulo son cosas distintas.

La energía de una carga en un potencial es $U = qV$; la que ganan $e$ o un protón al pasar por $1$ V define el **electronvoltio**, $1\ \text{eV} = 1{,}602\times10^{-19}$ J.

## 5. Condensadores

> [!practico]
> Dos placas metálicas enfrentadas, sin tocarse, pueden guardar carga (una positiva y otra negativa) y con ella energía. Cuanto
> más grandes las placas y más cerca están, más carga guardan con la misma tensión. Están en todos los aparatos electrónicos
> y en el flash de una cámara, que acumula energía despacio y la suelta de golpe.


Un **condensador** guarda carga y energía. Su **capacidad** $C = Q/V$ (faradio, F). Para placas paralelas de área $A$ y separación $d$ con vacío:

$$
C = \frac{\varepsilon_0 A}{d}, \qquad U = \tfrac12CV^2 = \tfrac12QV = \frac{Q^2}{2C}.
$$

**Asociaciones.** En **paralelo** las capacidades se suman, $C = C_1 + C_2$; en **serie** se suman los inversos, $\dfrac1C = \dfrac1{C_1} + \dfrac1{C_2}$ (comparado con las resistencias, al revés). **Ejemplo:** $6\ \mu$F y $3\ \mu$F en serie: $C = 2\ \mu$F. Un **dieléctrico** de constante $\kappa$ multiplica la capacidad por $\kappa$.
La energía está **en el campo**: la densidad de energía es $u = \tfrac12\varepsilon_0E^2$.

## 6. Campo magnético y fuerza magnética

> [!practico]
> Un imán desvía las cargas que se **mueven**, pero de una forma rara: siempre de lado, perpendicular a su velocidad. Por eso
> no las acelera ni las frena, solo las hace girar. Así funcionan los motores eléctricos (un cable con corriente dentro del campo de un
> imán recibe un empuje) y las auroras boreales (partículas del Sol que el campo magnético de la Tierra desvía hacia los polos).


Las cargas **en movimiento** (corrientes) crean y sienten el **campo magnético** $\vec B$ (tesla, T). La fuerza de **Lorentz** sobre una carga $q$ con velocidad $\vec v$ es

$$
\vec F = q(\vec E + \vec v\times\vec B).
$$

La parte magnética es **perpendicular a la velocidad**: **no realiza trabajo**, solo curva la trayectoria. Una partícula que entra perpendicular a un $B$ uniforme describe un círculo; igualando $qvB = mv^2/r$:

$$
r = \frac{mv}{qB}, \qquad \omega = \frac{qB}{m}\ \ (\text{frecuencia de ciclotrón; no depende de } v).
$$

**Ejemplo:** protón a $10^6$ m/s en $0{,}5$ T: $r = 1{,}67\times10^{-27}\cdot10^6\big/(1{,}6\times10^{-19}\cdot0{,}5) \approx 2{,}09$ cm. Es el principio del espectrómetro de masas y del ciclotrón.

> [!formal] Con rigor: fuerza sobre un hilo con corriente
> **Sobre un hilo** con corriente $I$ y longitud $L$ en un campo uniforme: $\vec F = I\,\vec L\times\vec B$, de módulo $F = ILB\sin\theta$.

## 7. Fuentes del campo magnético: Biot-Savart y Ampère

> [!practico]
> No hacen falta imanes para tener campo magnético: **toda corriente eléctrica crea uno** a su alrededor (lo descubrió Ørsted
> al ver moverse una brújula junto a un cable). Enrollando el cable en muchas vueltas (una bobina) el campo se concentra y se
> obtiene un electroimán, que se enciende y se apaga con un interruptor.


La **ley de Biot-Savart** da el campo de un elemento de corriente: $d\vec B = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec l\times\hat r}{r^2}$, con $\mu_0 = 4\pi\times10^{-7}$ T·m/A (valor numérico muy cercano al recomendado actual, $1{,}256\,637\,0621\times10^{-6}$ T·m/A, CODATA 2018).
La **ley de Ampère** (válida siempre en régimen estacionario, útil con simetría): $\oint \vec B\cdot d\vec l = \mu_0 I_{\text{enc}}$. Dos resultados que conviene saber de memoria:

- **Hilo recto largo:** $B = \dfrac{\mu_0 I}{2\pi r}$. Con $10$ A a $5$ cm: $B = 40\ \mu$T. (Integrando Biot-Savart sobre un hilo finito muy largo se obtiene lo mismo.)
- **Solenoide largo** (con $n$ espiras por metro): $B = \mu_0 nI$ dentro y casi cero fuera. Con $n = 1000$ m$^{-1}$ y $2$ A: $B = 2{,}51$ mT.

**Fuerza entre hilos paralelos:** el campo de uno actúa sobre el otro. Con corrientes iguales en el mismo sentido se **atraen**, con fuerza por unidad de longitud $F/L = \dfrac{\mu_0I_1I_2}{2\pi d}$. Con $10$ A y $10$ A a $0{,}1$ m: $200\ \mu$N/m. (Hasta 2019 esta fuerza **definía** el amperio; hoy el amperio se define fijando el valor de $e$.)

## 8. Inducción electromagnética: la ley de Faraday

> [!practico]
> Al revés también funciona: si mueves un imán cerca de una bobina, o cambias el campo que la atraviesa, aparece una
> **tensión** en la bobina. Así se produce casi toda la electricidad del mundo: en una central, una turbina hace girar
> bobinas dentro de imanes (o imanes dentro de bobinas). Y la corriente inducida siempre se opone al cambio que la produce
> (si no, se crearía energía de la nada).


El **flujo magnético** a través de una espira es $\Phi_B = \int \vec B\cdot d\vec A$ (weber, Wb = T·m$^2$). **Ley de Faraday:** una variación del flujo induce una fuerza electromotriz

$$
\mathcal E = -N\,\frac{d\Phi_B}{dt}.
$$

El signo menos es la **ley de Lenz**: la corriente inducida se opone a la variación que la causa (consecuencia de la conservación de la energía).
**Ejemplos:** una bobina de $N = 100$ espiras de $0{,}01$ m$^2$ con $B$ pasando de $0$ a $0{,}5$ T en $0{,}2$ s da $\mathcal E = 100\cdot0{,}01\cdot0{,}5/0{,}2 = 2{,}5$ V. Una barra de longitud $\ell$ que se mueve a $v$ perpendicular a $B$ da la **fem de movimiento** $\mathcal E = B\ell v$ (con $0{,}8$ T, $0{,}5$ m y $4$ m/s: $1{,}6$ V). Los generadores y los transformadores funcionan así.

## 9. Hacia Maxwell y la luz

Las leyes anteriores, con la corrección de Maxwell (una corriente de desplazamiento en la ley de Ampère), forman las cuatro **ecuaciones de Maxwell**. Predicen **ondas electromagnéticas** con velocidad

$$
c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 2{,}998\times10^{8}\ \text{m/s},
$$

que coincide con la velocidad medida de la luz: **la luz es una onda electromagnética**. Este paso, que se estudia a fondo en [[fis-electromagnetismo]], unió electricidad, magnetismo y óptica.

## Errores frecuentes

- Sumar **módulos** de campos en vez de vectores (hay cancelaciones por simetría).
- Usar la ley de Gauss sin simetría: es cierta, pero no permite despejar $E$.
- Confundir potencial y campo: $V = 0$ en un punto no implica $E = 0$.
- Olvidar que la fuerza magnética no cambia la **rapidez** de la partícula, solo su dirección.
- Poner mal las unidades: $\mu$, n, p, y $\mu_0$ en T·m/A.

## Resumen

Coulomb y superposición dan el campo; Gauss lo resuelve con simetría; el potencial lo convierte en escalar y da energía y condensadores. Las corrientes crean $B$ (Biot-Savart, Ampère), $B$ curva cargas y empuja hilos (Lorentz), y un $B$ variable induce una fem (Faraday). Maxwell los une y predice la luz.

## Ejercicios

Resuelve los ejercicios de abajo. El nodo se completa con el $80\,\%$ de aciertos.
