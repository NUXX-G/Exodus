---
id: fis-fisica-moderna-bach
title: "Física moderna de Bachillerato: relatividad, fotones, átomo y núcleo"
area: fisica
trunk_level: 12
prerequisites: [fis-electricidad-magnetismo-1, fis-ondas-calor-fluidos]
academic_sources:
  - "Ling, S. J.; Sanny, J.; Moebs, W. Física universitaria, volumen 3 (en español). OpenStax, 2021: cap. 5 (5.1-5.4 invariancia, simultaneidad, dilatación del tiempo y contracción de longitud; 5.9 energía relativista), cap. 6 (6.2 efecto fotoeléctrico, 6.4 modelo de Bohr, 6.5 ondas de De Broglie, 6.6 dualidad onda-partícula), cap. 7 (7.2 principio de incertidumbre), cap. 10 (10.1-10.6 núcleos, energía de enlace, desintegración, fisión y fusión) y cap. 11 (11.1, 11.3 y 11.5: partículas, cuarks y modelo estándar). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/5-introduccion"
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9.ª ed., 2019: valores exactos de c, h y e. https://www.bipm.org/en/publications/si-brochure"
  - "Tiesinga, E.; Mohr, P. J.; Newell, D. B.; Taylor, B. N. CODATA recommended values of the fundamental physical constants: 2018. Rev. Mod. Phys. 93, 025010 (2021) (masas del electrón, protón y neutrón; unidad de masa atómica)."
hints:
  - "Concepto: la luz llega en paquetes (fotones) de energía E = hf = hc/λ; el efecto fotoeléctrico solo arranca electrones si hf supera la función de trabajo. A velocidades cercanas a c el tiempo se dilata (γ = 1/√(1 − v²/c²)). En el núcleo, la masa que «falta» (defecto de masa) es la energía de enlace, E = Δm c². La actividad radiactiva se reduce a la mitad cada periodo de semidesintegración."
  - "Herramienta: trabaja en electronvoltios cuando puedas: hc ≈ 1240 eV·nm, 1 u ≈ 931,5 MeV/c². Para la radiactividad, N = N₀·(1/2)^(t/T). Comprueba siempre los órdenes de magnitud (energías atómicas: eV; nucleares: MeV)."
  - "Documentación: OpenStax Física universitaria vol. 3, caps. 5, 6, 10 y 11; constantes en physics.nist.gov/cuu/Constants."
exercises:
  - id: factor-gamma
    tier: 1
    type: numero
    sig: 3
    prompt: |
      Calcula el factor de Lorentz $\gamma = 1/\sqrt{1 - v^2/c^2}$ para $v = {{b}}\,c$. Respuesta: tres cifras significativas.
    variants:
      - values: {"b":"0{,}6"}
        answers: ["sha256:8c435792b8dc1c87ab8eb8d4a9fe5f2081174990752dc91a89b545aff3dbd842","sha256:2867ab155a7df9595a9354361b14e8c5a28d525a88250626f635b229c4504050","sha256:5bfbe7d43d4a4c9d43f3556d31d93680f4e542c79d7b66b4be8213f66514dc2c"]
      - values: {"b":"0{,}8"}
        answers: ["sha256:4aa8efce27c5fba65d917ed908402e8ff78bba4467c23bd5c60b049a53be7374","sha256:fd98b7ba79ba6fd286cdeeeaf8f440987ba8ffc24e1ca87ea378508278a405ea","sha256:2eade8e1da432f74a08e527b8d3e9bbff7b0fe94de5ade8dc190ce8ae2af7833"]
      - values: {"b":"0{,}5"}
        answers: ["sha256:28ce36e26f34475a29669671073a95e44056382ff40d7074ba30f0b5b9e99a32","sha256:39882f6acd69468ecb9a14f50412ea1956aca65aa0069dd8bd8031d64df6648b","sha256:ad4bad4a18251c57cf1e632e60d396dddb656e28abc109855498c1fd9e68f6b3"]
      - values: {"b":"0{,}9"}
        answers: ["sha256:e0c12f26bb6d08a736490f7e8ff709bb2690832b673c44aea7cf67348b86b81e","sha256:ecad63ec1d63e194772cfa91e8be8018fe8b352e733d714c07db99fc36faac1b","sha256:971430296b9c019e0b78817909344a8dcaa07fbd3451a793a17c7ea7313844a8"]
      - values: {"b":"0{,}99"}
        answers: ["sha256:ad3af8e154028380209a869b70ddac9c1883f0dd65901cd0d6d7dcd0545781fd","sha256:4fbdb6e30f1101cf3958915edea2b865778a9d0e7b14e3dba0882dbc1426619d","sha256:09bdb4a6915dc840e8b371d683c46debaf977a0c19721c62eda3851b91bfcb6a"]
      - values: {"b":"0{,}28"}
        answers: ["sha256:658b30d5b21457742e3813496f5e773f9444f4a4ddc5a6e41ef929f13b47475b","sha256:5057c2b9820ece0cb805e3352560d4458578359e9bdbc2a5c761c874cd35ee99","sha256:62738ab94bc6e3c309ec65de4206b128836b1dd48cc1d68a82cc0396088e8bc1"]
  - id: energia-foton
    tier: 1
    type: numero
    sig: 3
    prompt: |
      ¿Qué energía tiene, en electronvoltios, un fotón de luz de ${{nm}}$ nm? ($h = 6{,}626\cdot10^{-34}$ J·s, $c = 3{,}00\cdot10^8$ m/s,
      $1$ eV $= 1{,}602\cdot10^{-19}$ J.) Respuesta: tres cifras significativas.
    variants:
      - values: {"nm":500}
        answers: ["sha256:a44c4ffd8924a22863c2892280bd1cda1a3fe05980592c21399b028c68ee0c4a","sha256:31faab441e4f71078863e057f8f02a691b07c6f25a30e84435f747a9774bdd26","sha256:f76bc3030372722696648dcee7d8bd0accdaa0c34159dcf935059421c5b7f6cc"]
      - values: {"nm":650}
        answers: ["sha256:5c26a2a203afe134b12a4b3e08f7b3281ead0751ff01ef2a34314361e9154497","sha256:3adb3adc264a29b41ebb0cc9c1d8bc5a30b983cc5e07e17a443d8c2779e4b8f6","sha256:2a35779ccf54fce8a6231004a99933b87524ff39ea861ff3ddcf3d15ea433bf9"]
      - values: {"nm":300}
        answers: ["sha256:8c8b6ac458a654c4748674df05ee109e43da3309e115edde10a32428be90edcb","sha256:b387c7ef07d400a681de91f27d744e7449defb74d12712535c234b5e52e1b250","sha256:513013d2a967813d6135cdbd769b4b8560473c8b9eff2b2a71c9612ca64d23c6"]
      - values: {"nm":450}
        answers: ["sha256:ae0bf33e1094ae497849e7fd4f5e9de9ceac31e88cb553f4775178e941eec238","sha256:8f7c9b273aafe530fd5eec260f28982230c674eaf82da3b06617aab306f2c0ef","sha256:b61ba9b90d72a11d85bdd30f4d0764655e36e046c7d134c39ca52366c0d7d5c3"]
      - values: {"nm":1000}
        answers: ["sha256:295f887cd7cda98d47ad9c4d8ebf9cfe002c75aaea63190e938daf5b86c756b3","sha256:f2062ad615a4089a3e6b768dcc08546b970879ff8fa4ef1921cd5f722ae9c134","sha256:0ce6213063c1ff18dededff17069dbf3465768418f246090f172c24efdf266fb"]
      - values: {"nm":254}
        answers: ["sha256:76117efd70c03809500ead9f4e0f11344dd20f2270802793e435f150c9ff77ab","sha256:ad58437d67bfb30dcfaa2f8858b97c2ad08c955ca18aadca87be9c3b4daccaf3","sha256:47eb0e8a0eb4f33d0bf89925487fa590c5398905f1c8c823aeeac526b829045a"]
  - id: intensidad-o-frecuencia
    tier: 1
    type: opcion
    prompt: |
      Una luz roja muy intensa no arranca electrones de un metal. ¿Qué hay que cambiar para conseguirlo?
    options:
      - |
        Aumentar la intensidad de la luz roja
      - |
        Iluminar durante más tiempo
      - |
        Usar luz de mayor frecuencia (más azul o ultravioleta)
      - |
        Calentar la luz
    answers: ["sha256:5705fa10dd1168405e8092eee0a81d648b8947bef700afeaa9ecec617f1d1fe6"]
  - id: dilatacion-tiempo
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Una nave pasa junto a la Tierra a ${{b}}\,c$. Un proceso dura ${{t0}}$ s medido dentro de la nave. ¿Cuánto dura medido desde la
      Tierra, en segundos? (Tres cifras significativas.)
    variants:
      - values: {"b":"0{,}8","t0":"10"}
        answers: ["sha256:87504d8e7c87469d1bfb84690054750a58fff689c0e800f7751b5ae4f2510de3","sha256:3ccedffeb283c1e4c4911c8b375355194b0aa538b55b4194c8ede9db4df9b5fb","sha256:805d05d7ad71de28451a32d09158da7c83a5ae4bf08e9fafbfe64893cf00773b"]
      - values: {"b":"0{,}6","t0":"30"}
        answers: ["sha256:110e596b960efc20901dbfd7518803bf9d6e0685498f51faa6fa959af103189a","sha256:12e50b6d8d35f3fe7d017eeead3c97c6e592e8248f4a01ddab0228ebb520545b","sha256:27adbe0949ddb1953579bcbf26622a87b80d52095faba64e291b77bc83e29054"]
      - values: {"b":"0{,}99","t0":"2{,}2"}
        answers: ["sha256:9e636b06ee237a94c3652b5e393972e6768b0f35d7f5b2f49fd9e7a8ef0622ac","sha256:3585e504873998e3f18538f4de22fb03d1ca190905a391e4b90b4b27c9fb9912","sha256:22ca76ad784b482203093152489ae96dd0851c894af8393267c9b3616121ade6"]
      - values: {"b":"0{,}5","t0":"100"}
        answers: ["sha256:d702faa9523b8a20abc2b8ec0c55b6c8a07c6178f4a2d2f26ec69e612e2dda62","sha256:a7b30f5f7612bbed06a92b4fea2ba0bce7c241c4752bce2155f95d9f0bc7e492","sha256:8ec47eed642acc0663d23f8c838f25c7edc6cd1305cb76a27a94bf2014961ea1"]
      - values: {"b":"0{,}9","t0":"12"}
        answers: ["sha256:c9cef7565370afcc9e78350117f32194a0aa8d54e72549c6c21bb3d009b5cfe8","sha256:6dd1bf4d00c32fba84ba6c08b7de32488a39ae92e41ffd532513e6f62288b529","sha256:66d96d34a9ddb6d3631aadc9a4c0ad4f0bcf5a544ad3451559df6f0679498da4"]
      - values: {"b":"0{,}98","t0":"1"}
        answers: ["sha256:860574f9eef44f9b2c2e606fc3a73262128271758b690fe37d2d34abde7c0494","sha256:aa8ab171097a7e3dc9af95a194cde46524333d660cc2655f22bc9ef891b3f974","sha256:f782dd04a9273880572add5be23d6fdb1cb44f80111b9c2a949ec29b26c8a9d5"]
  - id: contraccion-longitud
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Una nave mide ${{L0}}$ m en reposo. ¿Cuánto mide, en la dirección del movimiento, para un observador respecto al que va a
      ${{b}}\,c$? (Tres cifras significativas.)
    variants:
      - values: {"b":"0{,}6","L0":100}
        answers: ["sha256:a021145c4d7a98b8cda9c09df9dedcd9a26434e57311807cdfc344eb9fecc353","sha256:508ede1812f0ba1364a10b74925832f1ba338e0868fbaf3aea5962246b2d791a","sha256:8bdb2153b4fb1da968d11302bf9d33db32067e52e1d03f57fe4b1a1bbe22b1e0"]
      - values: {"b":"0{,}8","L0":50}
        answers: ["sha256:3f5beeb190bcc5ddbb2f7a136853417410f9f8f97c01e07bcd1dd881dbf4ee14","sha256:56b4f55195231cdbb7910f2b8f86c92369f17a7e06a1bda8c1af60dd419b23fe","sha256:f513a54a4276bf23990649f6babcb180eab3d2c2bc38487bbfecefcda3334df7"]
      - values: {"b":"0{,}95","L0":20}
        answers: ["sha256:7e28dbb2c9a137f5cc4a752b6781031ad0588c8eec3654bf5750e9b244fdf052","sha256:c7db6b821483a811f47062301ce7f505955e441170ed809676875dceeae908bd","sha256:2cab93b5fc29b1250f8487a11169df1351f1f114452dbc0ce802d84cfd7017c3"]
      - values: {"b":"0{,}5","L0":4}
        answers: ["sha256:c39c9dc6f0e082a716dbde779d3b45214a458800eaee32e10a06e2b131748b56","sha256:1742f99939795ed99e94a56a5a178b2c06321593cc230078709fe4965fd7e78f","sha256:29816f4b017168f96efc239f37b6d7a45892f5aec4a2e73f886307511634b7e1"]
      - values: {"b":"0{,}99","L0":1000}
        answers: ["sha256:21e6c55befeb3d978f345dfaa53b964ad59579262fe46faa3b3718e9d7ea6339","sha256:46336a31b490d259b82f9e97cb8673041b822a18e0d8e1f4ce11c731b70f5946","sha256:0ea09960934a5cdce47a4409ff1db238c688d2c7f18754192ed7ec3c4e1b1680"]
      - values: {"b":"0{,}3","L0":10}
        answers: ["sha256:64d737a8e29ed82e3716e27096580ff2093a9ec9861ea5d682dca01858179e07","sha256:0c37312b86087c3f0bbe4499f036c96158fec388e71ceabffe0021fa1d472c5a","sha256:59b75753002b8f783c7780987c0bb9084a21360cc6dc45879efc21bb66409c56"]
  - id: energia-en-reposo
    tier: 2
    type: numero
    sig: 3
    prompt: |
      ¿Cuánta energía en reposo ($E_0 = mc^2$) contiene {{txt}} de materia? Escribe el resultado como $a\cdot{{unidad}}$ J y responde
      $a$ con tres cifras significativas ($c = 299\,792\,458$ m/s).
    variants:
      - values: {"txt":"un gramo","e10":13,"unidad":"10^{13}"}
        answers: ["sha256:5d49464027e12be715448d0fdfb44e27e42898d0131c14a5a4ecdc9eac8d79bc","sha256:d758b5785f9f1d5e8048038bbf98cf7b5f6f3bdbf108e2f5d428452fab404788","sha256:04edc5f7d9d464e21496cc79a349fff6c3557af5a92fa71e0d6d37115a4d9608"]
      - values: {"txt":"un miligramo","e10":10,"unidad":"10^{10}"}
        answers: ["sha256:d8ec15699983394797cc942fbf22733385c63d8be51917ea9f26bd58b5580b62","sha256:3c4b3b6a106cda9b1b57495eb442b36f2f5987e27c92ddee92bec1b5dfb40fc2","sha256:33334400f4c4d04e8521b215421ca83ccfae9e54fdf9e18ee65d51376eb779eb"]
      - values: {"txt":"un kilogramo","e10":16,"unidad":"10^{16}"}
        answers: ["sha256:b4d8a94d0d214b08c2d8d002e0a6ad341b2f4f7f23de5b8a41fff21ee349c50a","sha256:c1c849e6a64110db8c881090f1d1cd3a9fdf51f8e006392185275a83633af8fe","sha256:b9c8f5f2020c65d4a18d7bf23d691fdd4f1f601ce31437a1e3e0e2725a7895df"]
      - values: {"txt":"medio gramo","e10":13,"unidad":"10^{13}"}
        answers: ["sha256:5f6062582ea3b69621477c599cd048cdb4c6d6c4e60fee05c430fd4c387218b0","sha256:094a6c4ad1a057d59e60c9f9883f23a93a91870279dbe560581252a63f00faf8","sha256:964075234f7dd4e424d98e77333ed7a05b570a0de9a8dcd064f4b6fee7043174"]
      - values: {"txt":"diez gramos","e10":14,"unidad":"10^{14}"}
        answers: ["sha256:f92d54c1a7ac83d3c6d3c024cfabb086150ae90a8d67c15299f78360bfe6f3d0","sha256:31a4786bdac6860ef0e9af59c8c559077c5c2ed329a86a5a50969beb1a9ed2de","sha256:149ca280eea42bedbe0be2960cd35c9f1934d775886410ced449a317dcdcefd6"]
      - values: {"txt":"un centigramo","e10":11,"unidad":"10^{11}"}
        answers: ["sha256:2224298b6a93378506d9e407cb1882f9362d7f12b48e4cbe5db136354c7c9c32","sha256:be4e42d4b6f056febed57c91f272bc12bdaf95e57b14c9fb4bbbbbd37e6d0ffe","sha256:072464f9f08c4582b276e906ff5b72c661ad444bad42c6aba8f3ed432c405aa3"]
  - id: fotoelectrico
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Luz de ${{nm}}$ nm ilumina un metal con función de trabajo ${{W}}$ eV. ¿Cuál es la energía cinética máxima de los electrones
      arrancados, en eV? ($hc \approx 1240$ eV·nm; tres cifras significativas.)
    variants:
      - values: {"nm":420,"W":"2{,}3"}
        answers: ["sha256:c9c8744450a0c508423eb5b21f917ee94e4c054a875d4757c537fc741a6b1ca6","sha256:930f6cb71a6a3187b4c98ab16dbfd63e17341857120b8fcaf7ac1254fbf089bc","sha256:907195ec5c1275c16cb1ef8b7d11c64721e590c8026b2c377e0a407950d93153"]
      - values: {"nm":230,"W":"4{,}3"}
        answers: ["sha256:ee0565a1a4abfe340c172e4e9123230818a14d0d4d677bef10ec10df74167522","sha256:929f7a017e4a354f10f43539e8875bc4545ea1efc140231bf426ea8b9b547fcc","sha256:d0e7b17346d10fa6596eea4fc50247db2613590b4e12ec2c1ae3892341c62260"]
      - values: {"nm":250,"W":"4{,}5"}
        answers: ["sha256:bb5803e4a144f8c2a90e5ccfbb1fec8d178809f38c1f09fbbb86e4d5eb1716a7","sha256:0458f2fddb32dd15b1768e9e80cd61ea9bc2b44e225ca4045c3f80b8eca33ca3","sha256:3d6b69897dde33d55837fe407878c28d7cea642514003ab86633f900901d393a"]
      - values: {"nm":300,"W":"2{,}75"}
        answers: ["sha256:f16a18d74a731fbd8befffaf3c41b56e47255b506c61bb7134661b1ede152b74","sha256:b044f4f2d782eef6dcc4122c960902549d7a19bcb2f70b12a144ff001bdf6f99","sha256:714e2e1be52177e9569178563cb248553a253d876021b495a731ee6f4fe249b9"]
      - values: {"nm":500,"W":"2"}
        answers: ["sha256:2b5a2d1d6c40e5828b6e9d45338d606e516007286d790c9d74b31059f25a17cb","sha256:bdf53bfc7ed5a481a452d2e8f25a1e2c3560eff0351647f33925b5a55ae76bd2","sha256:4d71e8b8f91dc1f6c5e0f23298ce897eaeda84b895b3a323401a144c0295bd21"]
      - values: {"nm":200,"W":"5{,}1"}
        answers: ["sha256:f3f7e3a35536ca708556edc3943739964d9a99395e058391f8b9656c87d9cb43","sha256:281ce4acf4e111d7884b60365d61fe2e6b8b89b85cf8e6e778129ef435616ee0","sha256:7aa70a9fa7a89ba05b894ff7848c5c33a5191db5638aa4ffd34267822ae4fc01"]
  - id: longitud-umbral
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Un metal tiene una función de trabajo de ${{W}}$ eV. ¿Cuál es la longitud de onda **máxima** de la luz que puede arrancarle
      electrones, en nm? ($hc \approx 1240$ eV·nm; tres cifras significativas.)
    variants:
      - values: {"W":"2{,}3"}
        answers: ["sha256:32cd13aa4b53b57d23d36766ceb2f4933fa717b9edbadce67c26bd6bc48a6fb6","sha256:fd1243da2864bac96aa94cf7f5619c6d45d263bb0d1cd7c05ef665c1ff554f7c","sha256:5e0fc2ff7e8fae2b43e31d2eaadfb0e9f166d72496efa28f3c9d337780c50f6c"]
      - values: {"W":"4{,}5"}
        answers: ["sha256:5ebf8aa48511efa82825726861f99d70c9ce9a0d88087067d290174707e8c4ff","sha256:9e6a117f5b64222ba5c299b3b05ce2e131da4ccda1f9017a322682cbf4d30a6d","sha256:433322f4e81e9b0f6513e01abb2167246427ce9a7abb08611a4388d3c7bcf5b5"]
      - values: {"W":"2{,}75"}
        answers: ["sha256:4ae67caf8bc82efd32570140bd7bcd9923df8a10940b5b1c8c411c26cadcaf1c","sha256:c1399eaaf60e06125df2c4622a597497185fe483677d04e1f343b2d44eb1672f","sha256:df628f98eef312642e2e05f6f73aab5a2ff63876d4c138231d7ac2469647cdcd"]
      - values: {"W":"5{,}1"}
        answers: ["sha256:5e1729174d6ab628fde8bb326a4248083fd0ac8fa7b3be28dd74c56768e93a0e","sha256:2a8e76d680a7ab0f0cb5ae0bc8708a59bfe7c6e4ce2f8cd55935745abda5348f","sha256:6f6e2d38c37be6c2b6ebb39907c31fc98ddc9ee54e4b732b4e8c3651cb17eb21"]
      - values: {"W":"1{,}9"}
        answers: ["sha256:d2f7b163bcfc08612c6b8c9493ea1232390ccd2d3a26925ac597b0d8cb697326","sha256:77b0cd89295d75dc4d8caffb5d814f31ca107cf671004e96c807a7a74dae5a52","sha256:a9e3fa2c94099d564c34aa7e2428c9e74d284ef0ab7e3f8b76d647be597efe91"]
      - values: {"W":"4{,}3"}
        answers: ["sha256:2295486ef796229297d97604291fb41f1e218f54471192f745d751ca322d84b3","sha256:f2bf81b77298b900768f8fc79a6c37fea96b6d463f1bc259e499ce77c7994121","sha256:16d0bc8d2ec4e7396aacdec2bb2a41f59128c33d52d95cc5f70f0a938c187d1f"]
  - id: de-broglie
    tier: 2
    type: numero
    sig: 3
    prompt: |
      ¿Cuál es la longitud de onda de De Broglie de {{p}} que se mueve a ${{v}}$ m/s, en picómetros ($1$ pm $= 10^{-12}$ m)? Usa
      $h = 6{,}626\cdot10^{-34}$ J·s y las masas $m_e = 9{,}109\cdot10^{-31}$ kg, $m_p = 1{,}673\cdot10^{-27}$ kg, $m_n = 1{,}675\cdot10^{-27}$ kg.
      (Tres cifras significativas.)
    variants:
      - values: {"p":"un electrón","v":"2\\cdot 10^{6}"}
        answers: ["sha256:e481792fe622488edf3de2246341b0ac723108c726e87fe291564c8da2ee63e5","sha256:fa8063504aec89530beda7cf9ab144d6c1aecf5b3bf98eb9f6b6363db1151be4","sha256:e6a6cb7c44bc9109383ea2f03308de29895773737b6ce996a796dc32c41f2a11"]
      - values: {"p":"un electrón","v":"5\\cdot 10^{5}"}
        answers: ["sha256:610a53bbc91d023e797e21e6b6dd0aa8f83d4c9383695c6f3c49da9997001005","sha256:c116f00cc6ed85b394b1a3c047965beac341eaa8fb4ffc8cf4564bd3ccc1fc6c","sha256:eb5f34048cf1c2179583b73dad3bd16b0158a378dc97a2ffd55f201975111aa9"]
      - values: {"p":"un protón","v":"10^{4}"}
        answers: ["sha256:ed85aec1b23b1e3bfdad849b52b86324a4c1c6080f07b2bd6f2c00e46b05b16d","sha256:3809e6bb6c45cd5e30ed062831810b8fa9cfbf1bfaf2ca912bb59767d97e28cb","sha256:f68f777d89c376c0b7d4bdc794e40919d7dfa5e80a0a2053b3f06f48aa45fc91"]
      - values: {"p":"un protón","v":"3\\cdot 10^{3}"}
        answers: ["sha256:9275e03ce1ba066b11a0798e18d88103aff88b08919a3ad9fd241abaa9a82532","sha256:ccf2fd072ad7f4df02c0d09594115b476f4e91636f73f905f37e39f92640d027","sha256:49fa0f34d24166f907f9bdbfe654509ea639dae6733decf22237c3e7b1239981"]
      - values: {"p":"un electrón","v":"10^{7}"}
        answers: ["sha256:42533019225495f634b5431c161e4359bfd93717ef85d258edebeab0d43aacf1","sha256:0c197f82b93039765ca4773b045e343d09c0c5d2be6bac4ce6b0a19c1561ab57","sha256:726873b60a8b7bc331140221faa40dc64d74b13d7abe1144c2740beb4361cdbf"]
      - values: {"p":"un neutrón","v":"2{,}2\\cdot 10^{3}"}
        answers: ["sha256:d4db2d2be9ff4971a4985b12274ed24b2ccffb92a87babfaa7e8ab4d08df7825","sha256:1ff5787dcb21e11f8fe6a68eb6b137c7403e6c364785d3315cc4be3af63dd038","sha256:232970c5f7637034ca6644e7b8dc5ef7dce502f2f637315d16aa6e3e77208467"]
  - id: bohr-energia
    tier: 2
    type: numero
    sig: 3
    prompt: |
      En el modelo de Bohr del hidrógeno ($E_n = -13{,}6/n^2$ eV), ¿qué energía tiene, en eV, el fotón emitido al pasar el electrón del
      nivel $n = {{ni}}$ al $n = {{nf}}$? (Tres cifras significativas.)
    variants:
      - values: {"ni":4,"nf":2}
        answers: ["sha256:483df4c95cc17dad90d2ea33cef402fbc8556c6004f8bcfce65ab90ccfe8c9d7","sha256:3c8d6e353c41a5d17c9977759f1ef0939a9b12894875abe8d1822f50680f70eb","sha256:eb7f7e3ff65eb0ca13d1bf9876c27296ad12e82c0d4ef0f7043962e514c94037"]
      - values: {"ni":3,"nf":1}
        answers: ["sha256:90fd990ebc5bdf4de331d0ad96210313e59b16292795f39ad470370cc1663c8b","sha256:b64a21c20b0fcc2fb9516344c9ad664418734e5d0795a993e637f556528e3fef","sha256:d668172ecc95c4545c3d459e7d7a49b2e4c1e13d952631e8d71370858d557498"]
      - values: {"ni":2,"nf":1}
        answers: ["sha256:aea5da347f5554069216ea28285d7c78bf1223f4298074ac5050fbe8458d6b25","sha256:dd509ed008e68b172c405341b7b2b36b0c77b664de8d5d0839759e7e52bd94dc","sha256:0fc359a7836ee068bf341c074bdf0f39aa443a58ce5e1a79906ca6555a127a53"]
      - values: {"ni":5,"nf":2}
        answers: ["sha256:24ee324f2caabc2ba5df09bba7c5f35c48f5a7b504d7238dd5da9b33f0feffb2","sha256:4bb48b8d8906244d3e66866115049ea3c7fb0f0063798da008ae633019570500","sha256:8fedd12c9525c683ab4a0f2355dee5f4150a069a9debe0d8f921febc2d5070a1"]
      - values: {"ni":4,"nf":3}
        answers: ["sha256:df9c4747dd8e8809942118842506aca12647f4f49d4c0210bddd771eb2c15b09","sha256:470821564494b373f401e57485b0e1cd265a6f84d935a13dbbd4c438f85998f2","sha256:aafa80f095463a804f1941d8873972e058cc94ae8d31de7bdc154856f452139a"]
      - values: {"ni":6,"nf":2}
        answers: ["sha256:9f4c645aba274cb8cc16784fb97116e8d488d5b2a39a4f2d25ed1caffe76c768","sha256:598f994fa704406328a543225e9ce6d8c2057a4523e23898b2298755c4597064","sha256:a2e7a675a2d3e4884a81ef43005ee97812123ca612f4959e546a4c075d307b65"]
  - id: bohr-longitud
    tier: 3
    type: numero
    sig: 3
    prompt: |
      ¿Qué longitud de onda, en nm, tiene el fotón emitido por el hidrógeno al pasar de $n = {{ni}}$ a $n = {{nf}}$? Usa
      $\frac{1}{\lambda} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$ con $R = 1{,}097\cdot10^7$ m$^{-1}$. Respuesta: un entero (redondeado).
    variants:
      - values: {"ni":4,"nf":2}
        answers: ["sha256:3367ec4a2dd8c578d88df61465d9cb1b67aca02a212e4aab4082e3d7bff9ff4f","sha256:3196835b65b09d2958dab4d1b59da91b5ccb0c93b83f09f7b12d11882bc6b537","sha256:6e92bf0d7f2ce062f90f36641993cf860b7bc2505e1e026bd24c66f999ac7575"]
      - values: {"ni":3,"nf":1}
        answers: ["sha256:c5d64cb0c3da4ba87220ce14e37bba1fc18d3e5cc955b4435e07c25b3534394e","sha256:836aee19bb0644ba91173b25fad938b6b846a2e5a162ae2fb1c48dd43418a5bb","sha256:4f7db1d7ba747d45083e38bc4a826bd9ad6fd50dcfccada395aa90fe862f2d3d"]
      - values: {"ni":5,"nf":2}
        answers: ["sha256:7987deefdf90e650f8e76aa8b6ade29c8e068e22218993883dc93e38146c980e","sha256:fe69d597928c43a06345579e1100272a69e8d7312f1beabadbfcc21979b30a11","sha256:f7c48cc41170f9fdda6b99471b58a278cb5f97fe77bc2df7ffc487097517affd"]
      - values: {"ni":6,"nf":2}
        answers: ["sha256:7591eb4a276b156b7d5eee817b13befa6c1cd4e9a5a3cfa3a2122c3126256657","sha256:0d051cc6fae19ae423cdc79b1dd5324abd0c859746e5a0a831395f01007910d2","sha256:6f49b6f9424a586906e7791c6c9e54c80a83a4d92e7531a12860d7ea7cad0b16"]
      - values: {"ni":5,"nf":3}
        answers: ["sha256:ed2862309ff8d57d145ee0187f4ea19adbbc9aa1654fb044d8bd0bb8cdb8a581","sha256:d975cdfa90c33013504aa3dc71f7ade279c4a6dc1ee7081f4f9c8f9cc2cb6dfd","sha256:f46105671a696ff77cbbb2111b788e3fd78780839f16078e901c562b2a40a7af"]
      - values: {"ni":2,"nf":1}
        answers: ["sha256:eb14bd714db082cd13cc45229250063f583b97fa117a2bd493743a5011a6c9a8","sha256:b182191555674588e322f9827b783951a4736aa5e9efc3e121c0e823a9d7c7e0","sha256:1fc1bf51b19ef5d7d3680b58335868d81ad0b5906f82761a3e64905165bd4341"]
  - id: energia-de-enlace
    tier: 3
    type: numero
    sig: 3
    prompt: |
      Calcula la energía de enlace, en MeV, de {{nom}}: $Z = {{Z}}$ protones, $N = {{N}}$ neutrones y masa atómica ${{m}}$ u. Usa
      $m(^1\text{H}) = 1{,}007825$ u, $m_n = 1{,}008665$ u y $1$ u $= 931{,}5$ MeV/$c^2$. (Tres cifras significativas.)
    variants:
      - values: {"nom":"el deuterio ($^2_1$H)","Z":1,"N":1,"m":"2{,}014102"}
        answers: ["sha256:6eecce14fe821fbf351d89eb5cf87acc3583774adae8e586581b28c818dfded4","sha256:f746aaf12061cd0b8801a68b0a77c63d6fda291e39359349caf3677cbd8c4de7","sha256:782b89a7bc14f8ddf542be9e60cfa0e02004421b94c3e37e85c132247202cc3a"]
      - values: {"nom":"el litio-7 ($^7_3$Li)","Z":3,"N":4,"m":"7{,}016003"}
        answers: ["sha256:b28d3c6f6f5d8468db9298f8aa57dde3338e62df3c685b3712108658a32d3c72","sha256:ecbebabfcfa42eac2d4a4f7954b98ee87ef5aa5714f31a7487c191010472c047","sha256:388a55a39cadcc97b4e3a83a724108025cd1f82bd265b660800df7cc1f9c12a8"]
      - values: {"nom":"el carbono-12 ($^{12}_6$C)","Z":6,"N":6,"m":"12"}
        answers: ["sha256:bba2bc58d07e78c8ed22185beae9ea9174ed19b6789a2c320eeeb7805c7e37ca","sha256:0b0f8ad2f644ccc1e123f1a0b1cfe64e8be211c6f8862da738bc7b28500b148d","sha256:d15613ca8d668e4edf70b2d67c9ce1a65f0a5790c747271e762c3e6a43f7c0d4"]
      - values: {"nom":"el oxígeno-16 ($^{16}_8$O)","Z":8,"N":8,"m":"15{,}994915"}
        answers: ["sha256:7933873b38561c8afbba9334c85ac431fb56ee72b5b9e37087edb802bc6e6deb","sha256:50a415a71cd6a3c8bc1345bc0e9bac472d7ba6318317b3d0367c8621ba381c02","sha256:cebe4f16a4563f22929959083700ed8b019f1b84d93cddabd880c6d15f5df686"]
      - values: {"nom":"el hierro-56 ($^{56}_{26}$Fe)","Z":26,"N":30,"m":"55{,}934936"}
        answers: ["sha256:7ab0bb565e483d2ed232665b9b0f278a84fa62ca10b653307dd57c5ddb5e8f75","sha256:d193b24ac809dbfb6c245e0a04e1769ad73fb6d7acc2dd4c5bd9bbfbb52dcc90","sha256:163aa8912bcfc1bba2f83cd61a9947fb76f4af7893da92776bd9404b0600a043"]
      - values: {"nom":"el tritio ($^3_1$H)","Z":1,"N":2,"m":"3{,}016049"}
        answers: ["sha256:7cda0b1fd340dcc0a86816c12f96cbfb8301c7f7edab4d40eb6ab722fb79eb55","sha256:6b3d057f5a39e532f4e2689bfe680ee711b738d63a49a7d91a0e93de93b0adb8","sha256:2783e04803a7c874c63a6e68ebdbc6330bea8c3660f44a6622623f7b82ce03d6"]
  - id: semidesintegracion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      {{nom}} tiene un periodo de semidesintegración de ${{T}}$ {{ud}}. ¿Qué porcentaje de una muestra queda al cabo de ${{t}}$ {{ud}}?
    variants:
      - values: {"T":"8","t":"3","nom":"el yodo-131","ud":"días"}
        answers: ["sha256:a98e9e39814b9080bd08860e3e3ec9c02e8e4a64aea18f8a468373c6c3ba29ed","sha256:dc1b24d39146c733413689857206972fab6a1c822d49f748b227a394777dedb0","sha256:1f576716cceaa82732764fa2f52184293b6a0627caf82a2d4a63bc4e86bf8ea1"]
      - values: {"T":"5730","t":"17190","nom":"el carbono-14","ud":"años"}
        answers: ["sha256:423753e49dae230a54022c9fb3e29724cde41ef52b2db92c2078c98ea293369e","sha256:9972b8d72fa53c05783943360fc927c7820e7a32f97722d379083811818587bb","sha256:bc1b2f990be59ddd7d95346e51155d1a36a1a3daaa28c15c219051832d1a0025"]
      - values: {"T":"30","t":"90","nom":"el cesio-137","ud":"años"}
        answers: ["sha256:05803a562990d29a9535b64929f7d251e6a6c010766565ae65c1bf960b2fc5c9","sha256:702d0d0b2b5587466fbc434291e2b6151c78f85d132b1ccf0f2e8c5686ff47b7","sha256:61a4970af689505175bb2d9bc933d943f3d00d19c3076ac30715c672decd6a98"]
      - values: {"T":"12{,}3","t":"36{,}9","nom":"el tritio","ud":"años"}
        answers: ["sha256:cc5b589f3ca13a2c0cf01915c8c09a6fcc57e2845d3a6379cceec9ecd4b49491","sha256:8e0931621073e346b0b9f5f00f1793d45ae9f6a090618710d81edd689cb353a0","sha256:8d7b8a245c68869164e8231241dd0c3450ff39136005e7d378eff5c220386d0a"]
      - values: {"T":"1600","t":"4800","nom":"el radio-226","ud":"años"}
        answers: ["sha256:69d62f2fe68c049c60504687a7b89d545ccd50ebc5586f528311784dc70dc9ac","sha256:7a821de9870634a5ccd446ab32a09b196b1509737b3422e87087dd6078bb5c0f","sha256:19c31dadf1471c2220424196d0ca2c5a5e690807b1626bfae46e51e95b4e01e1"]
      - values: {"T":"2","t":"10","nom":"un isótopo de laboratorio","ud":"horas"}
        answers: ["sha256:7e5e9266b8881ef551403743d9faf47a65f768c650db63fdf486b60d26b75c46","sha256:52e864abca69a687429f6cb44fbc3dc48225e8e38b3931f2f6bb7a3876e896de","sha256:b8ca9df9f0ce43b8b0d9e7dc0dd07a9d65db6d57327838cdc0157aaf53285cfd"]
  - id: datacion-c14
    tier: 3
    type: numero
    sig: 3
    prompt: |
      Un resto orgánico conserva el ${{pct}}\,\%$ del carbono-14 que tenía al morir ($T_{1/2} = 5730$ años). ¿Qué edad tiene, en años?
      (Tres cifras significativas.)
    variants:
      - values: {"pct":"12{,}5"}
        answers: ["sha256:ca7cc71e0ad528bc5d16e9c0bf7c17a0c6056f91181a1c8e3c7839e6016c119f","sha256:7ec599d6488924f630f4c63b021231e7b7b991585ff94ffdde9561d4f90fd0bc","sha256:e71140715f57b801ae8cd5ea93f556b35b51d6c8b4bca967f2d314b8632d5a47"]
      - values: {"pct":"40"}
        answers: ["sha256:dde2ee94db540ff030b92a1d2285cb2ad0c6d224ee7685e03de9e38d5c79812b","sha256:60adf016aa48688b4c832c8531075e043a34178f9d24e9c0b6ba8bf0186a11dc","sha256:b3e610de8699cdc36a7217bc465755cce17dec2b7201a1f416fb4242f0bc0b88"]
      - values: {"pct":"6{,}25"}
        answers: ["sha256:1e612786016d888fb00e54d8c16572b889e9da4745cf5ba9ffeb4b60e0495fdb","sha256:4dc32122f14aa7a50fc45a71353f059cd6202113d5a6b09adb41714a38967edc","sha256:dbf036b851fb3458cfa5dfb11f139ac04d3e0754fc80695aa9b698d35e73e031"]
      - values: {"pct":"70"}
        answers: ["sha256:98d2d93e750d08f41d4b3bc730afc279f827d4b6b2b3c6955bbadbb143aa8180","sha256:1a67874d4a39dde3d6bd22978962f20cad76ba26cdca5d464e3264d03d33635b","sha256:5ccdde0197fd6f11a17fb65bed3193d95453a7b8b85adeb7d37b7cd0f98224c2"]
      - values: {"pct":"10"}
        answers: ["sha256:2028c6196a4f037d01c5cc6fba1d5f54812feff805208e5ed8ea25d929710844","sha256:bf3edbf58267ea208ec4b6d4b3a48222f379065a0037a49adeaba6c679292876","sha256:9db0b3c2e2339594e65dba102007dcb650438ab509e6b29e8d8bc39f5cfe1a27"]
      - values: {"pct":"80"}
        answers: ["sha256:bc67e966f68af2c0a598db411dbb3c6abd4c6c8e2a2ef747a5fc47382c9899f8","sha256:3c8264e2377f033b860b7a60dafbd038d79de2f8f659ea21ce676c9ce8d2aefb","sha256:24dea1e31686d673b33ea21573a772e15edc3e65f1200c660b72f937c16ab716"]
  - id: desintegracion-alfa
    tier: 2
    prompt: |
      El uranio-238 ($^{238}_{92}$U) emite una partícula alfa. ¿Qué número atómico y qué número másico tiene el núcleo resultante?
      Respuesta: «Z;A».
    answers: ["sha256:f6d9a1a6429508966dc60ccfeb590166583cba8a7ce9048229aced5d821a7da5"]
  - id: quarks-proton
    tier: 2
    type: opcion
    prompt: |
      ¿De qué cuarks está hecho un protón y por qué su carga es $+e$?
    options:
      - |
        $uud$: $+\frac23 + \frac23 - \frac13 = +1$
      - |
        $udd$: carga $0$
      - |
        $uuu$: carga $+2$
      - |
        un electrón y un neutrón
    answers: ["sha256:0eee360f6289a9fac7c5ff40622403151929d33718b547b24b0e6cf04d199a3c"]
  - id: dilatacion-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Con un «reloj de luz» (un pulso que rebota entre dos espejos separados $d$, perpendiculares al movimiento) y los
      postulados de la relatividad, demuestra que $\Delta t = \gamma\,\Delta t_0$. Explica qué es $\Delta t_0$ y por qué el resultado
      exige que la velocidad de la luz sea la misma para los dos observadores.
    sealed: "gz64:H4sIAAAAAAACCoVUu24jRxD8lQaxASmvdXeEIx4u8ENw4kCAQ495aM60Vi3MTq/msTZF7MdcqMCRP4E/duhdkiJ1gp3O9KOqu6p3syS+ZJYwW81uApCHxClTi+DIQyQvDzCnAJE6SQKRUkc2CyDsn/0CPIIvT5DKhmALG3xAfXKcMgbLCJWrVlACZLbgSkSojPmFfEbIn9/DJzDmLqLdLd2ws0N1DTcJyJtwdZWZ2k6gi9KxXF2tFNljIWjZkRackOkLpbz/AjRibzm1Ar40GMc/LwlSsZQkwTyhZ4ewBe+pQTcx7IpPsrg2wYRbjKilZZMo9ugkntGdup9GkgjaQj0BQtVX9cgtZDpSPcVhj+FJY4ypT8yrWkFMk4tkJUYCJ8kEx9hIQE/pGm4CtORYtF49DXX6nEZQ2cPoTlWH3XKoYJ6oKcEJdJJy8ehkdWzVo6K1FWRsN7x/DtApY92jNjABfdYVUdK1wVZZKH5LcC+RnyRk9COVNxpfw61EuOW8/9JIxFSbUFUmGPMTN3M7sv82a/xdrJfwCdx6Cd/BFN7/X7gxH435TUITubnPGKP8ZcxHeJ2zXg67H4a5XS/he+jXy8Whz9vpCvaQeC7Md3bYGZMeY959mMq8s+vlMIwxDbYtnq/283u4npj/zjr3nrxYdujA0XEPd4USjR7hkHFaglU9nglv3kkEeqC281KraUYAdhxSv14OVQ1WWoFUWoz7fxB+Rc+eZNzkhZJUqgeRaWC4cMrBZaNVFGzMbNHDFoLAPW7Gyo49ZrS8/zesVBsegUOPkSeHj1qs9FWryMZzg4DehENt5dZuGOOkELVc5Jbii0BrsAX9Y2GKx4MTBJJ40WidW3lagKMNAeaICSNwU9DXIEquE3fAqQNtCqv1988mHA/Z0avXs3oWyyayna3+2M1s5EyRZbaa/YzeFo/abnTv6dy9ulaqhgoI2FHIfMf2kHJ2qrRJV0KWNFt9GOqLNrdeb8R4IXPErR6WyGfG3kJJeFzGhWNHjZAHyVEuZPKN2xfnAJavAPzYecX84lLYgtMT93B+mM+VfWJfQeIAFKNESv/V4+bvqYkKWPcw3cJUfEYn4Kij4Ojghjd0NN/WIJ1lHUhLIVP9UqlHTwe7XApmcTn1P4evxX+ug9cGAAA="
  - id: r-tiempo-propio
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es el tiempo propio en relatividad?
    options:
      - |
        El que mide el observador que ve moverse el reloj
      - |
        El que mide un reloj que acompaña al fenómeno; es el más corto
      - |
        El más largo posible
      - |
        El tiempo en la Tierra
    answers: ["sha256:2c463bbdb17695f3059d05bdb55b7aab7d99ca8adce1ca067496048a32ad435e"]
  - id: r-dos-periodos
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué porcentaje de una muestra radiactiva queda tras dos periodos de semidesintegración?
    answers: ["sha256:3431946514df6dabe100b53e14322890d1f51994403aa1722bc824afe4231cf6","sha256:76925142126338827d4980ca256848945738f701539fda565da26048a4422ed4","sha256:d5ad5b4f2d608954c002aeee35e691c0266f5b50a61c3ef0c44a1ee28bf7f420"]
  - id: r-ev
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es un electronvoltio?
    options:
      - |
        La energía que gana un electrón al atravesar una diferencia de potencial de $1$ V
      - |
        Una unidad de tensión
      - |
        Una unidad de carga
      - |
        La energía de un mol de electrones
    answers: ["sha256:754773e427e57933456a5ab893c5774be0175d4fd9f633fb619fcdf3d4b27c9f"]
  - id: r-beta
    tier: 2
    review: true
    prompt: |
      El carbono-14 ($^{14}_6$C) sufre una desintegración beta menos. ¿Qué número atómico y qué número másico tiene el núcleo hijo?
      Respuesta «Z;A».
    answers: ["sha256:f080a41ee58c93d54bac811e1cef61646c4636f048b2cfcb5910548413b23d76"]
  - id: r-fusion-fision
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Con qué núcleos liberan energía la fisión y la fusión?
    options:
      - |
        Ambas, solo con núcleos pesados
      - |
        La fusión con pesados y la fisión con ligeros
      - |
        La fisión con pesados (uranio) y la fusión con ligeros (hidrógeno)
      - |
        Ninguna libera energía
    answers: ["sha256:fc320d4eee60ab0d7441ee27cc5bc9580614a6220339da634bce5a9846cbdd1d"]
  - id: r-color-energia
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué fotón de luz visible lleva más energía?
    options:
      - |
        Rojo
      - |
        Amarillo
      - |
        Verde
      - |
        Violeta
    answers: ["sha256:a772e35d5a6f4f195a16ac131186fde3f1067dc066b558edb18a48589fb9a429"]
---

# Física moderna de Bachillerato: relatividad, fotones, átomo y núcleo

A finales del siglo XIX la física parecía casi terminada. Pero unos pocos experimentos no encajaban: la velocidad de la luz
era la misma para todos los observadores, la luz arrancaba electrones de los metales de una forma imposible de explicar con
ondas, y los átomos emitían colores muy concretos. Para explicarlos hicieron falta dos teorías nuevas, la **relatividad** y la
**física cuántica**, que hoy están detrás del GPS, los láseres, los paneles solares, la medicina nuclear y la energía de
las estrellas. Este nodo las presenta al nivel de 2.º de Bachillerato; la rama de física las desarrolla con todo el rigor.

## Objetivos

Al terminar sabrás:

1. Explicar los postulados de la relatividad especial y calcular dilatación del tiempo, contracción de longitudes y la
   energía $E = mc^2$.
2. Usar la idea de fotón ($E = hf$) para explicar el efecto fotoeléctrico.
3. Calcular la longitud de onda de De Broglie y entender la dualidad onda-partícula y el principio de incertidumbre.
4. Describir el átomo de Bohr y calcular las líneas del espectro del hidrógeno.
5. Calcular energías de enlace nucleares, aplicar la ley de desintegración radiactiva y comparar fisión y fusión.
6. Nombrar los ingredientes del modelo estándar de partículas.

> [!question] Test de entrada
> 1. Relación entre velocidad, longitud de onda y frecuencia de una onda. 2. ¿Cuánta energía cinética gana un electrón al
> pasar por una diferencia de potencial de $1$ V? 3. ¿Qué fracción queda tras reducir algo a la mitad tres veces?
>
> Respuestas: $v = \lambda f$; $1$ eV $\approx 1{,}602\cdot 10^{-19}$ J; $\frac18$.

## 1. Para qué sirve

- **GPS**: sin las correcciones relativistas, los relojes de los satélites acumularían un error que desplazaría la posición
  varios kilómetros al día.
- **Energía**: paneles solares (efecto fotoeléctrico), centrales nucleares (fisión), el Sol y las estrellas (fusión).
- **Medicina**: radioterapia, PET, gammagrafías y datación; los rayos X.
- **Tecnología**: láseres, LED, microscopios electrónicos, semiconductores: todos son física cuántica aplicada.

## 2. Relatividad especial

> [!practico]
> Einstein partió de dos ideas sencillas: las leyes de la física son las mismas para todos los que se mueven a velocidad
> constante, y la luz va **siempre** a la misma velocidad, te muevas como te muevas. Si la velocidad de la luz no cambia,
> algo tiene que ceder: el **tiempo** y el **espacio**. Un reloj que se mueve muy deprisa respecto a ti va más lento, y una
> regla en movimiento se mide más corta. A las velocidades de la vida diaria el efecto es minúsculo; cerca de la velocidad de
> la luz es enorme.

**Postulados (1905).** (1) Las leyes de la física son las mismas en todos los sistemas de referencia inerciales. (2) La
velocidad de la luz en el vacío, $c = 299\,792\,458$ m/s, es la misma para todos ellos.

Con el **factor de Lorentz** $\gamma = \dfrac{1}{\sqrt{1 - v^2/c^2}} \ge 1$:

- **Dilatación del tiempo**: un intervalo $\Delta t_0$ medido por un reloj en reposo respecto al fenómeno (tiempo propio) se
  mide como $\Delta t = \gamma\,\Delta t_0$ desde un sistema en el que el reloj se mueve a $v$.
- **Contracción de longitudes**: un objeto de longitud propia $L_0$ que se mueve a $v$ mide $L = L_0/\gamma$ en la dirección
  del movimiento.
- **Energía**: un cuerpo de masa $m$ en reposo tiene energía $E_0 = mc^2$; en movimiento, $E = \gamma mc^2$, y su energía cinética
  es $E_c = (\gamma - 1)mc^2$, que para $v \ll c$ se reduce a $\frac12 mv^2$.

**Ejemplo resuelto (muones).** Los muones creados en la alta atmósfera viven $2{,}2\ \mu$s en reposo. A $v = 0{,}995c$,
$\gamma \approx 10$: para nosotros viven unos $22\ \mu$s y recorren $\approx 0{,}995c\cdot 22\ \mu\text{s} \approx 6{,}6$ km, así que
llegan al suelo. Sin relatividad recorrerían solo unos $660$ m. Es una de las pruebas experimentales de la teoría.

> [!formal] Con rigor: la dilatación del tiempo con un reloj de luz
> Un «reloj» envía un pulso de luz entre dos espejos separados $d$, perpendicularmente al movimiento. En reposo, un tic dura
> $\Delta t_0 = 2d/c$. Visto desde un sistema en el que el reloj se mueve a $v$, la luz recorre la diagonal: en medio tic
> avanza $c\frac{\Delta t}{2}$ mientras el reloj avanza $v\frac{\Delta t}{2}$, y por Pitágoras
> $\left(c\frac{\Delta t}{2}\right)^2 = d^2 + \left(v\frac{\Delta t}{2}\right)^2$. Despejando,
> $\Delta t = \frac{2d/c}{\sqrt{1 - v^2/c^2}} = \gamma\,\Delta t_0$. La velocidad de la luz es la misma en los dos sistemas (segundo
> postulado): por eso es el tiempo el que cambia. $\blacksquare$ La deducción completa, con la transformación de Lorentz, está en
> [[fis-relatividad-especial]].

## 3. La luz en paquetes: fotones y efecto fotoeléctrico

> [!practico]
> Ilumina un metal con luz roja muy intensa y no pasa nada; ilumínalo con una luz ultravioleta débil y salen electrones. Con
> ondas no tiene sentido (una onda más intensa debería dar más energía). La explicación de Einstein: la luz llega en
> **paquetes** (fotones) cuya energía depende solo del color (la frecuencia). Un electrón absorbe un fotón entero: si ese
> paquete no da energía suficiente para arrancarlo, da igual cuántos lleguen.

Planck (1900) y Einstein (1905): la luz de frecuencia $f$ intercambia energía en **cuantos** o **fotones** de

$$
E = h f = \frac{hc}{\lambda}, \qquad h = 6{,}626\,070\,15\cdot 10^{-34}\ \text{J·s (exacta)} .
$$

Un resultado cómodo: $hc \approx 1240$ eV·nm, así que un fotón de $\lambda$ nm tiene $\frac{1240}{\lambda}$ eV (la luz visible,
entre $1{,}8$ y $3{,}1$ eV).

**Efecto fotoeléctrico.** Para arrancar un electrón de un metal hace falta una energía mínima, la **función de trabajo** $W_0$
(unos pocos eV). Un fotón con $hf > W_0$ arranca un electrón con energía cinética máxima

$$
E_{c,\max} = hf - W_0 ;
$$

si $hf < W_0$ no sale ninguno, sea cual sea la intensidad. La **frecuencia umbral** es $f_0 = W_0/h$. La intensidad solo cambia
**cuántos** electrones salen, no su energía. **Ejemplo resuelto.** Luz de $400$ nm ($3{,}10$ eV) sobre un metal con
$W_0 = 2{,}30$ eV: $E_{c,\max} = 0{,}80$ eV. Con luz de $600$ nm ($2{,}07$ eV) no sale ningún electrón.

## 4. Ondas de materia, dualidad e incertidumbre

> [!practico]
> Si la luz, que parecía una onda, se comporta a veces como partícula, ¿podrían las partículas comportarse como ondas? De
> Broglie dijo que sí, y se comprobó: los electrones producen figuras de interferencia como la luz. No se nota con una pelota
> porque su longitud de onda es ridículamente pequeña, pero en un microscopio electrónico es la clave.

**Longitud de onda de De Broglie** (1924): una partícula de cantidad de movimiento $p = mv$ tiene asociada una onda de

$$
\lambda = \frac{h}{p} = \frac{h}{mv} .
$$

Un electrón a $10^6$ m/s: $\lambda = \frac{6{,}63\cdot 10^{-34}}{9{,}11\cdot 10^{-31}\cdot 10^6} \approx 7{,}3\cdot 10^{-10}$ m, del tamaño de un
átomo. Una pelota de $0{,}06$ kg a $30$ m/s: $\approx 3{,}7\cdot 10^{-34}$ m, imposible de detectar.

**Principio de incertidumbre** (Heisenberg, 1927): no se pueden conocer a la vez, con precisión arbitraria, la posición y la
cantidad de movimiento de una partícula: $\Delta x\,\Delta p \ge \frac{\hbar}{2}$, con $\hbar = \frac{h}{2\pi}$. No es un defecto de
los aparatos: es una propiedad de la naturaleza.

## 5. El átomo de Bohr y los espectros

> [!practico]
> Calienta un gas (como en un tubo de neón) y no emite todos los colores, sino unas pocas rayas muy concretas, distintas para
> cada elemento: es su «huella dactilar». Bohr lo explicó suponiendo que los electrones solo pueden estar en ciertas órbitas
> (niveles de energía), como los peldaños de una escalera. Al bajar de un peldaño a otro, el átomo suelta un fotón con la
> energía exacta de la diferencia.

En el modelo de Bohr (1913) del hidrógeno, los niveles de energía son

$$
E_n = -\frac{13{,}6\ \text{eV}}{n^2}, \qquad n = 1, 2, 3, \dots
$$

Al pasar de $n_i$ a $n_f < n_i$ se emite un fotón de energía $E_{n_i} - E_{n_f}$, es decir,
$\frac{1}{\lambda} = R\left(\frac{1}{n_f^2} - \frac{1}{n_i^2}\right)$ con $R \approx 1{,}097\cdot 10^7$ m$^{-1}$. **Ejemplo resuelto.** De $n = 3$ a
$n = 2$: $E = 13{,}6\left(\frac14 - \frac19\right) \approx 1{,}89$ eV, $\lambda \approx \frac{1240}{1{,}89} \approx 656$ nm: la raya roja $\text{H}_\alpha$.
Arrancar el electrón desde $n = 1$ cuesta $13{,}6$ eV (energía de ionización). El modelo de Bohr acierta en el hidrógeno pero
falla en átomos con más electrones; la mecánica cuántica completa ([[fis-mecanica-cuantica]]) lo sustituye.

## 6. El núcleo: energía de enlace y radiactividad

> [!practico]
> Si pesas por separado los protones y neutrones de un núcleo de helio, y luego pesas el núcleo entero, el núcleo pesa
> **menos**. Esa masa que falta salió en forma de energía al formarse el núcleo ($E = mc^2$), y es la que habría que devolverle para separarlo. Es una cantidad enorme: por
> gramo, millones de veces más que la energía química de quemar carbón. Algunos núcleos son inestables y se rompen solos
> (radiactividad), a un ritmo que se describe con el **periodo de semidesintegración**: el tiempo en que se desintegra la
> mitad.

Un núcleo $^A_Z X$ tiene $Z$ protones y $N = A - Z$ neutrones. El **defecto de masa** $\Delta m = Z m_p + N m_n - m_{\text{núcleo}}$ es la
**energía de enlace** $E_B = \Delta m\,c^2$ (con $1$ u $\approx 931{,}5$ MeV/$c^2$). **Ejemplo resuelto (helio-4).** Con masas
atómicas (los electrones se compensan): $2\cdot 1{,}007825 + 2\cdot 1{,}008665 - 4{,}002602 = 0{,}030378$ u, es decir
$\approx 28{,}3$ MeV, unos $7{,}07$ MeV por nucleón. La energía de enlace por nucleón es máxima cerca del hierro-56
($\approx 8{,}8$ MeV): por eso se libera energía **partiendo** núcleos pesados (**fisión**, el uranio de las centrales) y **uniendo**
núcleos ligeros (**fusión**, el Sol).

**Radiactividad.** Tipos principales: **alfa** (emite un núcleo de helio: $A - 4$, $Z - 2$), **beta menos** (un neutrón se
convierte en protón emitiendo un electrón y un antineutrino: $Z + 1$) y **gamma** (fotón de alta energía, sin cambiar $A$ ni $Z$).
La **ley de desintegración**: con periodo de semidesintegración $T_{1/2}$,

$$
N(t) = N_0 \left(\frac12\right)^{t/T_{1/2}} = N_0\, e^{-\lambda t}, \qquad \lambda = \frac{\ln 2}{T_{1/2}} ,
$$

y la **actividad** $A = \lambda N$ (becquerel, Bq $=$ desintegraciones por segundo) disminuye igual. **Ejemplo resuelto (datación con
carbono-14,** $T_{1/2} \approx 5730$ años): un hueso con el $25\,\%$ del C-14 original tiene dos periodos, unos $11\,460$ años.

## 7. Partículas elementales

> [!practico]
> Toda la materia ordinaria está hecha de solo tres piezas: electrones y dos tipos de **cuarks** (arriba y abajo), que forman
> protones y neutrones. Las fuerzas se transmiten intercambiando otras partículas, como el fotón para la electricidad y el
> magnetismo. Esa lista completa de piezas y fuerzas es el **modelo estándar**.

El **modelo estándar** clasifica las partículas elementales en **fermiones** (materia: seis cuarks y seis leptones, entre ellos
el electrón y los neutrinos) y **bosones** (portadores de las interacciones: el fotón para la electromagnética, los gluones para
la fuerte, los bosones W y Z para la débil), más el bosón de Higgs, asociado al mecanismo que da masa a las partículas y descubierto en el CERN en 2012. El protón es $uud$ y el neutrón
$udd$ (cargas $u = +\frac23 e$, $d = -\frac13 e$). La gravedad no está incluida.

## 8. Errores típicos

- Pensar que una luz más intensa arranca electrones más rápidos (lo que cuenta es la frecuencia).
- Confundir tiempo propio con tiempo dilatado: el propio es el del reloj que acompaña al fenómeno, y es el **menor**.
- Usar $\frac12 mv^2$ a velocidades cercanas a $c$.
- Creer que tras dos periodos de semidesintegración no queda nada (queda un cuarto).
- Mezclar unidades: J frente a eV, u frente a kg, nm frente a m.

## Repaso: lo que debe quedarte dentro de un mes

1. $\gamma = 1/\sqrt{1 - v^2/c^2}$; $\Delta t = \gamma\Delta t_0$; $L = L_0/\gamma$; $E_0 = mc^2$.
2. Fotón: $E = hf = hc/\lambda$ ($hc \approx 1240$ eV·nm); fotoeléctrico: $E_{c,\max} = hf - W_0$.
3. De Broglie: $\lambda = h/(mv)$; incertidumbre $\Delta x\Delta p \ge \hbar/2$.
4. Bohr: $E_n = -13{,}6/n^2$ eV; fotón emitido $= E_{n_i} - E_{n_f}$.
5. $E_B = \Delta m c^2$ ($1$ u $\approx 931{,}5$ MeV); $N = N_0(1/2)^{t/T_{1/2}}$.

## Siguiente

La rama de física desarrolla todo esto: [[fis-relatividad-especial]], [[fis-mecanica-cuantica]] y la física nuclear y de
partículas. En el troncal quedan las destrezas comunes: [[tro-lectura-tecnica]] y [[tro-razonamiento-cientifico]].
