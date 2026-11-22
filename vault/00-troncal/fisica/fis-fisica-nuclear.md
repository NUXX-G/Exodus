---
id: fis-fisica-nuclear
title: "Física nuclear: el núcleo, isótopos, fuerza nuclear, energía de enlace, radiactividad, ley de desintegración, fisión, fusión, efectos de la radiación y partículas"
area: fisica
trunk_level: 3
prerequisites: [fis-cuantica-introduccion, mat-funciones-exponencial-logaritmica]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 3 (en español), OpenStax (2021), capítulo 10: «Física nuclear» (propiedades de los núcleos, energía de enlace nuclear, decaimiento radiactivo, reacciones nucleares, fisión, fusión, efectos médicos de la radiación nuclear). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/10-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 3 (en español), OpenStax (2021), capítulo 11: «Física de partículas y cosmología» (introducción a la física de partículas, leyes de conservación, quarks, aceleradores, modelo estándar). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-3/pages/11-introduccion"
  - "Consejo de Seguridad Nuclear (CSN), «Dosis de radiación» y «Protección radiológica» (información pública sobre dosis, unidades y límites). https://www.csn.es"
hints:
  - "Concepto: el núcleo está formado por protones y neutrones unidos por la fuerza nuclear fuerte; su masa es menor que la de sus partes y esa diferencia es la energía de enlace. Los núcleos inestables se desintegran al azar, pero una muestra grande lo hace con un ritmo exponencial fijo. Partir núcleos pesados o unir ligeros libera energía."
  - "Herramienta: A = Z + N; R ≈ 1,2 A^(1/3) fm; energía de enlace E = Δm c² con Δm = Z m(¹H) + N m_n − M; 1 u = 931,5 MeV/c²; N = N₀ e^(−λt) = N₀ (1/2)^(t/T½); λ = ln 2/T½; actividad A = λ N (Bq); Q = (Σ m_reactivos − Σ m_productos) c²; dosis equivalente (Sv) = (E/m) · w_R."
  - "Documentación: OpenStax Física universitaria vol. 3, caps. 10-11; CSN."
exercises:
  - id: radio-nuclear
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Con la fórmula $R = 1{,}2\,A^{1/3}$ fm, ¿cuál es el radio, en fm, de un núcleo con ${{A}}$ nucleones? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":27}
        answers: ["sha256:63da46c145ecd9b163d64194d12bb44678d8990dda291abea27acdd91f82bcab","sha256:6a4467e72efca1f2387dd3addd1f340daf5d715d82e7f85ef69b8084e0aaa352","sha256:68154bec9c68f7327f96d9b94b8a6dd220a14278fc4894c1d6886ae6075bad8d"]
      - values: {"A":64}
        answers: ["sha256:e71d7d70a286be3ff664f2081961e63590e6da4307b59af3695fd2b987619699","sha256:df016ec494f4c8d74bc07182345253d72f439100a4b99872f525e3b4cf7ca601","sha256:e62a73256465f3aff2e56685ad378c6c3ddad67d187419d2e5953df3bf2b3287"]
      - values: {"A":125}
        answers: ["sha256:112f638760221226a13bafb9a40fc903656f9be22cdfbf755b15ce0ee1f411bb","sha256:4f2d710b237830d877995e5099204ac6b2a9790b2d12a83d7347f4c69169611b","sha256:09f4139cd3912b68c0d81eb570785fe8a54175f45bc6646b5b77814581901155"]
      - values: {"A":208}
        answers: ["sha256:f8fad7a792e68f2b79f78c6f32821927b136133c4e6692b87dc4ac3894e878f4","sha256:14975775d7bb0f6d7b65d9d8eabc0aeb6fc7dd00852ef32ad00c113796fb8891","sha256:c156648db378374d003c9eb07757d4da4a6a0bcaf8b318246293c4a4114512b3"]
      - values: {"A":8}
        answers: ["sha256:d7c738601f44573cbd74b90d4123f4805ddf888bae40e7d0fd1435d88cb24680","sha256:6e7a238c41be4c12cebf32e4566d98671148a9b0cf1f58fa5757fdb65e5f99b8","sha256:0171cbe76ec1e7f1e1c762822056b881c0cc573d54681b0a4bf6633dade3cab6"]
      - values: {"A":238}
        answers: ["sha256:818e62692d3434e71c1443bc2ad16442fdc924ad6865031091f5fe18f5a5d791","sha256:0d08a4b1ece008f1124cb540f87cdd41cfde99b34bb7308d014fd9d2eab9bc2c","sha256:431161eb6ad8b4f589c4087ef6d1a21266f781537f8c79278e546b41456337de"]
  - id: energia-de-enlace
    tier: 2
    type: numero
    sig: 4
    prompt: |
      El {{s}} tiene ${{Z}}$ protones y ${{N}}$ neutrones, y su masa atómica es ${{M}}$ u. Con $m(^1\mathrm H) = 1{,}007825$ u, $m_n = 1{,}008665$ u y $1$ u $= 931{,}5$ MeV/$c^2$, ¿cuál es su energía de enlace total, en MeV?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":"helio 4","Z":2,"N":2,"M":"4{,}002603"}
        answers: ["sha256:e50ee9cc74d3ca8670d52ab01850d9da161e45c78a5bec6da6465f15006ba033","sha256:5e2769377659b3982c338985fcd75516be7c72cfa9bf4fd7fc36c88a1f457c68","sha256:25bc242aad919c2d5bd18960fc154a02f9c733e9366bff0bdf589a45998a0507"]
      - values: {"s":"carbono 12","Z":6,"N":6,"M":"12"}
        answers: ["sha256:3c6e6926e00165da97ef1479063ba217d7906ab4186a6f9bf31935c23d934711","sha256:886b00ddc132939d9f4bf576768b74aa72376be5cd5ec80c45975e66b98ac726","sha256:ba5e2c3d08dc6b82db40c569727cf5b41b9ee051903a4334b3a18a7c8b2f307c"]
      - values: {"s":"oxígeno 16","Z":8,"N":8,"M":"15{,}994915"}
        answers: ["sha256:3c35efb9ab398dd2c86210af6262878210b2942dfd688694a7b88bdc71ee6644","sha256:e738a766076c82df20ed654c30c4d0d235749b43b6cb63920a12c5762d4a7a49","sha256:0390b6de2dc42d32f2a66a043a867b768272687812d4bc9bb2859cad22e40861"]
      - values: {"s":"litio 7","Z":3,"N":4,"M":"7{,}016004"}
        answers: ["sha256:d45b49afceb873ee1fd77ce5009536724d5c637a809944534ab970feef0cdcd7","sha256:86a38a02e09114c0ef8c853bb37b05a2c8c9ee1e6fdb207c52e5972705fe9b96","sha256:1e6c1dad1a263bfaa6ac00e897d8d51ce5f9a5b24317e14bbeb2c7e687169f68"]
      - values: {"s":"uranio 238","Z":92,"N":146,"M":"238{,}050788"}
        answers: ["sha256:9b495a91c5da3f313c930b7a22d5cee5bf3f80395659bc500a0bf0a1fe01c8f1","sha256:6ad6edc2b97a20ae358b87df5ba8fe18f4829a56b13a86adddf3ed6a6f7615e7","sha256:a16784cb7dff08a73117ef291e46e27e325fcb44c6021956276b61c65d4c8b0f"]
      - values: {"s":"níquel 62","Z":28,"N":34,"M":"61{,}928345"}
        answers: ["sha256:f6df812b54440d55349cfe000243b2a6b9f6fea01d3c70cee640d72fd8c6ec04","sha256:fab459cb0bf62047905fc71fc75cec9dd09a6ae3229373f8d33e372e83076be5","sha256:ba91c150bc28fa78b26622db045787c1f498a656fda74289db275083d93e2465"]
  - id: energia-de-enlace-por-nucleon
    tier: 2
    type: numero
    sig: 4
    prompt: |
      El {{s}} tiene ${{Z}}$ protones y ${{N}}$ neutrones, y su masa atómica es ${{M}}$ u. Con $m(^1\mathrm H) = 1{,}007825$ u, $m_n = 1{,}008665$ u y $1$ u $= 931{,}5$ MeV/$c^2$, ¿cuál es su energía de enlace por
      nucleón, en MeV? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":"deuterio (hidrógeno 2)","Z":1,"N":1,"M":"2{,}014102"}
        answers: ["sha256:8f4e7085e7dfb3c704b0bf29c2db66ea45090600abdb1f176d922a00b5039dc8","sha256:27d5eb0fdb51dec3058db50cedda9fb593a060d1467da5249f88a5b759fa242e","sha256:727ea35f61987d6014f6896fdb3335fa0ed792dc25f20fafcd422bf501d453ec"]
      - values: {"s":"nitrógeno 14","Z":7,"N":7,"M":"14{,}003074"}
        answers: ["sha256:4437edaf60cd98cc4a6d2a3105828af139502ad0249c467c9003424ab5e51b5d","sha256:f2129c9c1174710f9d0cc6abc0ba0ab09ff6e0aecba4d05a6539309194cd8fe8","sha256:af6e58cbcf21c27ea657efcc78baea53f73c8b915e517178ad17ea5839272dad"]
      - values: {"s":"helio 4","Z":2,"N":2,"M":"4{,}002603"}
        answers: ["sha256:88dcdff1e294863f97dff04c5487d2cd97d2b412f5f4f675585a4ca0979d3895","sha256:35d389c94f8a5b049b87c8d07b5f40886b8435dde9ea7b65fe8ba0e833f17fe1","sha256:c795f4926d87f42d3d348fad66ae4ba910d1b8440d884dfcc10ddc596f3246e0"]
      - values: {"s":"plomo 208","Z":82,"N":126,"M":"207{,}976652"}
        answers: ["sha256:8de4c907a4112d77bdec5a088736ee95b322eb23a5fe19128fbdd8c1af973b8f","sha256:0eb25a067640422ff6e16293bae208ddc32a55cee987efefbe8ea1c139d29fc3","sha256:6297e36ceaf2d651554190c3da48e06430b44830ebc871ffe5a735de62772735"]
      - values: {"s":"neón 20","Z":10,"N":10,"M":"19{,}99244"}
        answers: ["sha256:52b4a64e8d09c75aa5bef23f32c7bb29afa3e4b94e8ad597329ea511d7c108f1","sha256:31904b54c30450ee769c5e82567456e72f3ea00297c6eb581a17fd554e4e463f","sha256:15ee0909310d6259a406f2b586c692dc3ace78aaf399b6cc02d12b40bbdda2df"]
      - values: {"s":"calcio 40","Z":20,"N":20,"M":"39{,}962591"}
        answers: ["sha256:78c40580a0b18ee6f952193f415fcb55b14ff4109ef5a8e32340220d1b591000","sha256:1c83fbf7404918f21213e825d1469461fd48aa8864c1b5df8a3de4a9251672b7","sha256:0266ba2a6a0fe373ba865e1178e41e039141bdfa01fb6c87b063c1dfb6f71538"]
  - id: masa-que-queda
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una muestra de ${{m0}}$ g de un isótopo con periodo de semidesintegración de ${{T}}$ {{un}}. ¿Cuántos gramos quedan sin desintegrar al cabo de ${{t}}$ {{un}}? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m0":80,"T":"8{,}02","t":20,"un":"días"}
        answers: ["sha256:10b2f4b22263e0fc5bd643e4e256576974c86c2c1b33de7bdfcde58f8f2639eb","sha256:68f7dab0909eda48157a16f50543c61685ffdc2f1663b5b2447c42d20401bc8a","sha256:208cc5ff3acc8fdc8104f26a9acb4830103047e4e10bde2a9011e149dbd8c054"]
      - values: {"m0":50,"T":"28{,}8","t":50,"un":"años"}
        answers: ["sha256:2ec02efdc805e9152cf2b43ffc114bc11ae32ec2b8b894fbbf956a0e6117f5a1","sha256:303b3ee18fdd6877a2f2877c13db75bf8532642bb360e4f5d4a9f687ce006358","sha256:ebde59c553f67adf19c10bf6ce0303bdbeb5a11cf143823cb8140e686437e4ba"]
      - values: {"m0":200,"T":"10{,}7","t":12,"un":"años"}
        answers: ["sha256:84efab0f4a5e92c8b8fb50cbff76ff242a139e4cb37b9264449addcad913bb3a","sha256:967e36afd22d7d70df46278b226c73302757f1081e26c0a185c3cc05ca77c466","sha256:f847efdc446c8aa83f852152f301a91bfa1411651702297f2ef7974d06e051fc"]
      - values: {"m0":10,"T":"3{,}8","t":10,"un":"días"}
        answers: ["sha256:34809855b9a658d28c59d3b68eb6a879bb7b2844cbfa6800a425b7d975a063d5","sha256:682f104a1d750e356a888deb6a3be9c860ef9713df8470649a6a794e0d1c48e7","sha256:991dd6965ea50e141804fba6f81fe4467427fb36113b5f14618ba5a74a51f471"]
      - values: {"m0":64,"T":"12{,}3","t":30,"un":"años"}
        answers: ["sha256:6e8f340466a84b77e833e057259dc6aea686633ddba14631b48adaa239ec908f","sha256:8e009f20b7a5c734ed6588cee9a42ce1cb2030f7685cd0d2c679cada3977c2cd","sha256:992bc055d250b7e374d404bb2fce889ead57bf7baa90f98b7185dcf1cad18d46"]
      - values: {"m0":1,"T":"1600","t":1000,"un":"años"}
        answers: ["sha256:cf8e9ae30db37024331812a9b165ad0625b5e3c75fae634e960d547225454689","sha256:d8ba1c8d6fa699c92adb86dfb179adcc3339c87a9666a7faa155204198636316","sha256:241f059005f77023ca1fb80471740467f77597a9f24b1946c769eff297041822"]
  - id: actividad
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la actividad, en MBq, de ${{mug}}$ μg de un isótopo de masa molar ${{M}}$ g/mol y periodo de semidesintegración de ${{Td}}$ días ($N_A = 6{,}022 \cdot 10^{23}$ mol⁻¹)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"mug":"1","M":131,"Td":"8{,}02"}
        answers: ["sha256:a6e38eb89efd075b67d6af34f24f271791515af87c77a2d3c048dd6ae6744476","sha256:f3f2cd59cd2bdd4853bec732e18be29106f83927a05aa7ddff83e375dc7d9460","sha256:4d22b7679e05d5d0486d03d80e7e0e97cc1a631d3d47733bf3e9ad6ee802a5fd"]
      - values: {"mug":"10","M":32,"Td":"14{,}3"}
        answers: ["sha256:d47e34bef0b4e8da2d91b4868bf3415112013dc865e3bc54af77662fd98488b8","sha256:fe3a22d5bbbc53968397f398a5ea7b153ad4c5b866c96ef4231c864926e007b3","sha256:45ae08679f4d2264c42391851aa998885d1f717168f3724a781f51f1ba3654a4"]
      - values: {"mug":"0{,}5","M":99,"Td":"0{,}25"}
        answers: ["sha256:5875bfd5c85e021b5e09c341c7db5695aee360c5b534c4d20962f2c23cf313ca","sha256:56e40d9d39f1676db3b98f987cf2e3f4be46f097aaf98acebdeb2267b121ef73","sha256:929d6ae217ec01861296d8f7e2be25c1f514d5bad2f1fc3d4d06c9d6d5e57f92"]
      - values: {"mug":"100","M":60,"Td":"1925"}
        answers: ["sha256:768824e48baa91bb3504c40b6e90d4e13722fed60f6689ff951a7bf8e79bad7e","sha256:56acbe09a64348dc015076935d40b55e13b6fa488ddd41e56b7c316b77e9174d","sha256:0aeba3e4c93e581aff4d0086f459dbc7897ede35e7101821aa6d0b1c407dd0eb"]
      - values: {"mug":"2","M":18,"Td":"0{,}0762"}
        answers: ["sha256:761811ee95f6a87b92952a5937e0e9466fe3e5cb82cbb28252278fba42cdd820","sha256:976c48f9c267634ab76242ac337b0892a43d8b0a6a5d76c17bea84b05cfc87b3","sha256:73f6f5bbe9048b05d64f952dc9ab9d09f9b1aca7c78e1d59c4e45e6afc86b22b"]
      - values: {"mug":"5","M":90,"Td":"10456"}
        answers: ["sha256:e027a3a3604830efd306605f57d6632b57a3fc261b3a625a14d18328ba997989","sha256:3a2b86c8c17d49530b82bb6a82538e11e24dc14595d15fdcb992f6ce592253cb","sha256:34d72e7985b1b1ad9f25c7bd317114749d7eaf95d86aabdfc4581fef740ef2f5"]
  - id: tiempo-para-una-actividad
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un isótopo tiene un periodo de semidesintegración de ${{T}}$ años. ¿Cuántos años tarda su actividad en bajar al ${{p}}\,\%$ de la inicial? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"T":"30{,}1","p":10}
        answers: ["sha256:6f0c04f1118cbc9ab63c1a0e67bd4bfb94040cbb9a097533b1b9a2148a691f0b","sha256:e9af805270fa9f7bef9e01fccb5b12a33a434a188d85f1527f13da97e182881c","sha256:57f5f5554790b584f10f862df23d45c6e015e28fcc15de1e79352edd37c96f04"]
      - values: {"T":"10{,}7","p":1}
        answers: ["sha256:f84afa8859ecd7bc24cc1f7544d6507e3bbb1f59312969577148f0933c5390cb","sha256:1f0974ccb3e2838a180ced5eacdc726b448374225cc705e13d981c88c3bd41bd","sha256:c8c8e2c8d64418c7ec14c30dab350db37835f5c7421aec399663eea8f0edd390"]
      - values: {"T":"12{,}3","p":25}
        answers: ["sha256:43c1c9734b7ef520e40c8aa603f686e017be8c692c4de49f452fc4c4308d4812","sha256:d3813c175d2bd2ef245483dc969801568a751d51c6604a3cf65a0920a1918434","sha256:7ee54cd7f5ddf7a531874867261c33e64b68c459866e4f5666c355f251e2f283"]
      - values: {"T":"432","p":20}
        answers: ["sha256:abc6907ad9e8c582bcf4dd13d77d7739e0b74804371b404ef049c0c2496752d8","sha256:420c4db7def723a2c44c0e55625f01a108f5860f5dfa234f50a0e7686c83972d","sha256:ba992423a449382b77b9a0b4c6493c4f5d49a0c9aaa23d09a78fd1e594201282"]
      - values: {"T":"28{,}8","p":5}
        answers: ["sha256:de8bbfe0fba984209873dbe5f962e05929abfd01b90f6aca18b2f0e65a3c60a8","sha256:136f014f0a71f4376c1a2f6d4616085118f3ccc01f67de941f0bdc61369e324c","sha256:fa924c4f479d0dcea4f10f53fd3eb15ae2ead2b637cfed39ae8089254e5158f9"]
      - values: {"T":"1600","p":80}
        answers: ["sha256:a3a49d5965c93c5f02da5566d33e2acc211a5851694033779d344f6409bbc6b2","sha256:1fd6d099081d32ca01643575b9e27bca1b36031c7c6ccdf68e5cfd7192e1f2e8","sha256:376ef9db3eb3614883a61a2495cadbaec090feee6a85295595a5baaa2b487e94"]
  - id: carbono-14
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En un resto orgánico queda el ${{p}}\,\%$ del carbono 14 que tenía en vida. ¿Qué antigüedad tiene, en años (periodo del carbono 14: $5\,730$ años)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p":40}
        answers: ["sha256:4dc6b9d7979d4ef9dcff0ca65dc114f8a91fb163d529a51b2f418f9d1618fffe","sha256:a4eb76c55d273cb5a60a6cdb28067453f4e9d7d578285659dd65fe4ccea33a55","sha256:394ad5605fb6b1dfe87c9f4a0f9c5316c0f1784104d2866b7e7cfa2f18512910"]
      - values: {"p":70}
        answers: ["sha256:20a86e25532d9042b6dab9e4fc5c207340321a69052c9803f882e252db6b81ff","sha256:a245b4d854dd52bf03cefed6112cb86bd91f2c6de20be28698bfba60f8a47f1f","sha256:52b0f546852c3f3eadf61c2aa28852161fa6aa4a3f40ef5ecbb8a9a874e69f93"]
      - values: {"p":15}
        answers: ["sha256:e32911420efcd4bfcce3835b3f21e74c9abc044193db38c7302b4ed11d9f50c4","sha256:bc434bc08b5a5746c9dd1c3e56a10fb66eb09ccd22380ea0a53e3ff63993ea55","sha256:7584c5905857fee4266a0f02a48a97e4782869e188f0d41156d754476b9fd83a"]
      - values: {"p":90}
        answers: ["sha256:0c75634a49e0776a0352ef230f95a99f7cd743696d1363e9a804d4a2c663f7b5","sha256:2c7551dabef0beca75ba91e03d4c3b48a8ab1be85902ed79c9c713297684a4fb","sha256:da7c0f52e98f06738a365cce210e33056622ffc83896ae6dc991ae5415a34fa2"]
      - values: {"p":30}
        answers: ["sha256:8af7ba3f3870277961701a58a52e86a5d30fb3a81f3441473203ced25c905f9d","sha256:6487450aabea93a1cd42307e40f2b35b747c925ae761926faacca127f29995c1","sha256:a422e77cb5b0a04303fe582bd256405f94ef031d4d2db9996370969dc25c29e7"]
      - values: {"p":5}
        answers: ["sha256:e40baf6112d8349c6c9f5fba7699963de98743088befbec325195da9dc5cf0e6","sha256:ae32cda44f6a456416bfe4e13a0a3e32c8d40cb41524995d869df1378b0d5cae","sha256:74cbf0d2e2780db9d9faf46aa993ccdfd1ddf11b8fd0c419302130e5e9afeb67"]
  - id: constante-de-desintegracion
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la constante de desintegración, en h⁻¹, de un isótopo cuyo periodo de semidesintegración es de ${{T}}$ horas? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"T":"6"}
        answers: ["sha256:8e0ededf1ef491f142c3eb2093cdb6e2a992e8d42ddea9d45a369908c7502f16","sha256:1ef8aed7c2c802ec9d455a36f4486f30ab6271bd9c1e0e268ee6f1652d3ec585","sha256:4723bd306fc17a5b566e0ea13d81de4b4b0fd7c19a9ef6817ccc999d79d37c1a"]
      - values: {"T":"15"}
        answers: ["sha256:7a9caddfc4e287641f8335a671d31f5d09f0f0670b3ea6b742b1983dffa76c35","sha256:8e9b945e00bf5463806ddcea8719b618ab75823f5de35ba54681d96e511a0f6d","sha256:96008452cb9843387b26fc1ad6e0ff3ee601f72fded90e4ef740ce27c4faab1a"]
      - values: {"T":"109{,}8"}
        answers: ["sha256:a9ef16fff7e414daa941bf6c534c1e840ea08ee1c5bf789542163be75ea8d6e5","sha256:1b447ee7d7bd7a8f607a3efe650aef66a0ac96e241d4ec30254f4cd7ca930843","sha256:3cbefcd33ff5cf846c2b7dedda26618ac3dc0fcf16a119d16307d2f85875f49e"]
      - values: {"T":"2{,}6"}
        answers: ["sha256:0f029ce907e261c4d680956ee871bab528d277810fe7ba2dea7f378b5e15a8e7","sha256:08b0520a0745951c4856ebc43f3c3bea47dd85e751a138321148420b0131e2c3","sha256:30bea73a9a98441dd28c3a757c813027f59d890e36bc824d12b0e5e6354adae8"]
      - values: {"T":"64"}
        answers: ["sha256:f8c168996efadd0fd3c4fb64b3ff3d65bbf28c229ed3b4d0ffd315449443048e","sha256:b8a98a4b4bc85c47f1cb2d0b86b7fb41b49c6e5a195919782f99281b7641fc06","sha256:9b1849fa7b9e64435f59d52c1141b9046d06d302f6eddb1a129d9a346e691d4f"]
      - values: {"T":"0{,}5"}
        answers: ["sha256:6d4128264a8bcf5914a766126de814e92a3019ffacdac4cf93d1e1c1702c2fa8","sha256:3b634a9778fc8ab9a1c3d6bb8386bfe57b4f1618c308f987b36d1fd4ede7b944","sha256:2989166bf9b3b38440fd70b2cda0d5b377b4b546885a2cc07729f9e5e8e771e5"]
  - id: energia-de-una-reaccion
    tier: 3
    type: numero
    sig: 4
    prompt: |
      En la reacción de fusión {{r}}, las masas de los reactivos son {{mi}} u, y las de los productos, {{mf}} u. ¿Cuánta energía se libera, en MeV ($1$ u $= 931{,}5$ MeV/$c^2$)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"$^2_1\\mathrm H + {}^2_1\\mathrm H \\to {}^3_2\\mathrm{He} + n$","mi":"$2{,}014102$ y $2{,}014102$","mf":"$3{,}016029$ y $1{,}008665$"}
        answers: ["sha256:86d1ca66c468f9c4e97e1b5e59474459938b495ce3fe62cdf4976360497ea58c","sha256:fc1dedcb258a7ce6c1ac4a5b5545150e6a34297b228063244f89401209ae8a2d","sha256:5740767dce91327586a815f2ee9a905902f0f45ae12b4ebb2c472fd6bd3476dd"]
      - values: {"r":"$^2_1\\mathrm H + {}^2_1\\mathrm H \\to {}^3_1\\mathrm H + {}^1_1\\mathrm H$","mi":"$2{,}014102$ y $2{,}014102$","mf":"$3{,}016049$ y $1{,}007825$"}
        answers: ["sha256:933b11cf5c415add8c1d2a4e5982759e0eaa72cb726c4a95506320a86e21a245","sha256:44699a71a1552285765e1f663f0071190a575b4972ac886f58f91106a38fb462","sha256:bf305a4d1c5aac7b10cd7ab53021f645ff5e06534a212853bc7b264348903de0"]
      - values: {"r":"$^2_1\\mathrm H + {}^3_2\\mathrm{He} \\to {}^4_2\\mathrm{He} + {}^1_1\\mathrm H$","mi":"$2{,}014102$ y $3{,}016029$","mf":"$4{,}002603$ y $1{,}007825$"}
        answers: ["sha256:f34eba04ca8b1fe979bf0a55e8969c9ea3df858819b2b306f148f6fc9c4004cf","sha256:dc176b2b18a8796b5ed93c86b2082d434345c9a9b02a97fe581e8991fe771e2d","sha256:9738cad4bac6f9a17561223c92d6bab12ef5baf1b6c4fe3689b192b388fe98b4"]
      - values: {"r":"$^6_3\\mathrm{Li} + n \\to {}^4_2\\mathrm{He} + {}^3_1\\mathrm H$","mi":"$6{,}015123$ y $1{,}008665$","mf":"$4{,}002603$ y $3{,}016049$"}
        answers: ["sha256:c7520bce1488ed6f1aac491be6c2f7d5e47ff86b2d663798a25653aa1be29a5d","sha256:e69c23fd92068d0a5b538228bc4b14cb918cbab519f69e4308a890fab4ec0624","sha256:7450ac6ada4f40e71c355beab33da54e058f85fbd106aee6f83c29cc345f15a7"]
      - values: {"r":"$^{7}_{3}\\mathrm{Li} + {}^1_1\\mathrm H \\to 2\\,{}^4_2\\mathrm{He}$","mi":"$7{,}016004$ y $1{,}007825$","mf":"$4{,}002603$ y $4{,}002603$"}
        answers: ["sha256:413f257f51a26d79f8a54c290f066b3989fa95d1a38de4cd9c210d68b8a55c1a","sha256:bf97b4ff1c02d011497a69e86a4a2fefadf7f22d0b121144dca09f48546100e6","sha256:26eb1e2cc64bb337787a3606a138397b2a0745b0c0432b6747c91c8fa112fe44"]
      - values: {"r":"$^{3}_{2}\\mathrm{He} + {}^3_2\\mathrm{He} \\to {}^4_2\\mathrm{He} + 2\\,{}^1_1\\mathrm H$","mi":"$3{,}016029$ y $3{,}016029$","mf":"$4{,}002603$ y $2{,}01565$"}
        answers: ["sha256:5405a5bbc68fc1462d1d0038b2a159d565eab745812be0d05249b39bed2454f5","sha256:ffaa0975e69da0b48b991341f0db11d76f0f63c61b9d62c371ed0a9651c0fb04","sha256:3f61543e8b60b28f575b4fe4a9987f4e0d24255827ebbd9462178b2d99846f7c"]
  - id: desintegracion-alfa
    tier: 2
    type: numero
    sig: 4
    prompt: |
      El {{p}} (masa atómica ${{mp}}$ u) se desintegra por emisión alfa en {{h}} (${{mh}}$ u). Con $m(^4\mathrm{He}) = 4{,}002603$ u y $1$ u $= 931{,}5$ MeV/$c^2$, ¿cuánta energía se libera, en MeV? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p":"polonio 210","mp":"209{,}982874","h":"plomo 206","mh":"205{,}974465"}
        answers: ["sha256:d038dea6b2085ffb4bbac215d15802beeb0133a604b84077f05adf31903631bf","sha256:88c724d5a8ac92df37c927ea8b935f2225a732caec4fe60f5869503feef99eec","sha256:46c5c949325084a067bffaa5037c7b0c3358bb767dc637dd4b3ce78d8e2b3710"]
      - values: {"p":"radio 226","mp":"226{,}02541","h":"radón 222","mh":"222{,}017578"}
        answers: ["sha256:ae5f164ad3a25bc30f84c79bfd5b34c9151b9d9a05889bc075c7513e06915959","sha256:a8d079f348155c1049858f8cda77019f2ddcf1ef3d57d00ddbd967c13a9e6c8e","sha256:d694f72ea91127026be292012ce627c88a7dbee113df52d58c2e5a422fefbd02"]
      - values: {"p":"uranio 238","mp":"238{,}050788","h":"torio 234","mh":"234{,}043601"}
        answers: ["sha256:dd9393601f36968a497b528cb9224873dccff980406a3e390d28278b4882f66e","sha256:dcbd9ebe1fc156d40d09c19b38919bb415b4b1e241c7727fa24329cc35d0a979","sha256:50c8724d2a27de481b5759ff0713039aeac95bb103f5e2384959fac92868b01d"]
      - values: {"p":"americio 241","mp":"241{,}056829","h":"neptunio 237","mh":"237{,}048173"}
        answers: ["sha256:caccec9e3b6b2f95280029ed17d9b96812456e3a3b0650287d0845ffeb7dfe79","sha256:3906ce98b23560dcf66733aace5a976800b7830091898ec42fa75d83147f4d7f","sha256:c6e6fd1a2712c68df5fc3667d9fa7db1ccf4d57bc06a34d0bdb0bd22e5d93186"]
      - values: {"p":"plutonio 239","mp":"239{,}052163","h":"uranio 235","mh":"235{,}043929"}
        answers: ["sha256:7f120295296c3fdda11c04d19ca1071c696aae7a4a92b00f5f4e3abd332d4822","sha256:fcde7c3d7d1128395da3b9eec7ca3139a41463dce229df12988ddbd860db8c02","sha256:d804d83da3da8ba775fe649c382021ec760dc1e04d17052190fd3ec83c186aa5"]
      - values: {"p":"radón 222","mp":"222{,}017578","h":"polonio 218","mh":"218{,}008973"}
        answers: ["sha256:4b8398ac46f30de44e7496bbc098dfed1f294001a1c762c622970dc624249cf7","sha256:af18aa2167d0bb10a863c216b509ed630e2f7f6842c06425b931cae751187934","sha256:40e63b2fed28de37e0c78cd798874a386119494003f93db3168221cf0d449a2b"]
  - id: dosis-equivalente
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un tejido de ${{m}}$ kg absorbe ${{E}}$ mJ de una radiación con factor de ponderación ${{w}}$. ¿Cuál es la dosis equivalente, en mSv? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"E":"1{,}4","m":"70","w":1}
        answers: ["sha256:19a41d344b41538888d9153714547803e72e6929ebfff9759e4be86451819ab5","sha256:8ef8985fa14f5f655e17044a8af6bffbf49360333b914505f2e5d2ab641562d0","sha256:a6788d8584fefb70ea0640d545f8aae1ff173671d453130041cc753f273fd916"]
      - values: {"E":"0{,}05","m":"0{,}5","w":20}
        answers: ["sha256:ac96e3e589bd13cff2627b91d2bce19070a8596d84f6d6f776959bd3358d9ab2","sha256:e7595e8d9f876021e3353899462b3ec84cd48756891e177115f9115e3cad2378","sha256:404f2006749d94c66e23d80710fc9c921496193fd099898866765b592d06e9cf"]
      - values: {"E":"3{,}6","m":"80","w":1}
        answers: ["sha256:7693896d536a82bac5c070b1d5c736e3927847c0802b7a21e4108cccdf723569","sha256:303584cef8cdb19d70a50acb6b88a0c1fc7b4301affdaa208f52071fa6bf6097","sha256:db0731459f79f462e84efb9ffc9521a41b1f62c3795d552d3ba97fa39fb34930"]
      - values: {"E":"0{,}2","m":"2","w":10}
        answers: ["sha256:999c39dfbb45481f749434e8001f08e4ab737e9a5bea283d49027d5d4927dc80","sha256:3a47128fb36960d3f33d71c978d0eee7789c18c81a8a3cee62b3b0a06dccad47","sha256:6df185f31b3358282c61449d17b9e0d864e217368816001e450aefc1df5b3ccd"]
      - values: {"E":"12","m":"60","w":1}
        answers: ["sha256:7f68b9ff191ee99ed77bb151b91583ec976afa703f8aeeee52f04d1b058940d6","sha256:4030c5bf9d1c64c53556fd0aae597224008671f93931cac7b26133a151e81bfd","sha256:ccdb5adf5dc3af236d23c3de756aac84a942df7cffa193446c153d0aa763b638"]
      - values: {"E":"0{,}08","m":"1{,}6","w":15}
        answers: ["sha256:cdc0f9497050c8c725dfa1d3bf50548f076183c8442b0fa1632492d263671891","sha256:5a59b2e1a90a4fd12fe7553d226bbfab7fec70a252ced6fe905fd018c1c41d2a","sha256:d94a001eb4695dc97b7bc592e4ba6105a1448f7160258ee23874ed6887ddca6a"]
  - id: energia-nuclear
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica qué mantiene unido el núcleo a pesar de la repulsión eléctrica entre protones y qué es la energía de enlace. (b) Con la curva de energía de enlace por nucleón,
      explica por qué la fisión de núcleos pesados y la fusión de núcleos ligeros liberan energía. (c) Explica qué es el periodo de semidesintegración y por qué los residuos radiactivos de larga vida
      son un problema.
    sealed: "gz64:H4sIAAAAAAACCn1UPW8jRwz9K8RChbQQhIurg1IFiLtLlY8mmwOoGWpFYIazN5w5WDH8Y1xe4SK4Lu3+sYAjyZYDw9V+zfI9Pr7H+05TqIWTdNuu75e46nv4lCCiFCYhCAh9v6+U/0aQ6gJhBnss1Pdr+FIJsGQkICmZQOcnQJhyKklI4QhCteR275JArO6AEOdHBZZCouzRtyIBIdNUg/L8XYDC/M2VzA7XMFFOoCkkQPCsBcUxKsR6BJdyQYVllaQwJZcU9nG1GeQTQkRF8ARVQOZ/XaAEpND3kSTlvr+Aao3tWEC1i1Y9dWmUfwSyGrynTAYKS097ciXZSau/glhD4SmwQ48wpQwL9/lmYUhNNxLK4/zUEEgCOur7rX16/mA0DrjLl3ucrKcME2YEJbvkkHQzyCB9v9y18Vz9/1y4oTfqJqDL5Ag8qbWW9CKBQuCRclI4oBY0ceL8eMcxgaPsrFyAA1POCY5AAWR++lIpnCVefLxfP3xcwC/0xwqOECqNyWYSWeqRIJAUjCSFNvArXys/kaJPsKwZhdMKlAbx/JUbe/BJIZJnNIxl3++5uaDvV+tGfsrJV1eSAmmZH+VkoMAj+qRbUILAO8powl5P68T55sOHxrgJdC69agT9W8KoWYak8agvPCg804CCccfzNznRuWYzyPUUrqk9D2yJlpFd5hBQmu1IS6YQUFcbuBXAuEsKDjU1EzUfl1QwvCh9cYMzN9wGiwgn32ypFNmTWrrGjO6UJjX6hSlOyfQ2n2lzx/lYw+GCHv5vlxYghFiNJMJSDGQi8XQKDTjbExZi4UuMXBLPjlvo6a5QltbabxkVFrK4sFXj4XGQxTAE2pflMOwzuh9uhiHzeCirz7LYwE9hbGPMpOzriVFoz+hKyqTQ1pS8VLVsciAFo+pI8OqVJ8D5n2YaHisJUGT73yfI6Pms10SBx5ws+2bYQm1vzU/KERVGGyWe+zuCpx0JIGvArGbnQTBENODIJObakVKYv4/smr3GmpNuunWX6y6z67Z/3ncuczH+3ba7vWvrxLR9c+ta7t7Mv0vROn61oAxmqkai2948rF8B/a4NxNX89Vzm/ZXSNtI5P3CEczjeQ/iZ9izUovO+QY9A565PMdsFOm/lq8m/Rvrr4T/BMqcSugYAAA=="
  - id: r-isotopos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué tienen en común dos isótopos de un mismo elemento?
    options:
      - |
        El mismo número de neutrones y distinto de protones
      - |
        El mismo número de protones y distinto de neutrones
      - |
        La misma masa
      - |
        Distinto número de electrones
    answers: ["sha256:e6d8e5421d69d89e24a0c6094444dd86dcec6367beaf027e95c656a6c119ff75"]
  - id: r-alfa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es una partícula alfa?
    options:
      - |
        Un núcleo de helio 4 (2 protones y 2 neutrones)
      - |
        Un electrón
      - |
        Un fotón
      - |
        Un neutrón
    answers: ["sha256:47f57de3adc18a46e9526884736e2abfdf722d2a8db1c219a520968c22b0abf0"]
  - id: r-penetracion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué radiación es la más penetrante?
    options:
      - |
        La alfa
      - |
        La beta
      - |
        La gamma
      - |
        Todas igual
    answers: ["sha256:cdc27cdbdb187510bcd21cfbfe07670a724f46ff6ffc374913b56ffb3bd54f7f"]
  - id: r-tres-periodos
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué porcentaje de una muestra radiactiva queda sin desintegrar al cabo de tres periodos de semidesintegración?
    answers: ["sha256:32c6797af59c30354b5dcb78ef5083d49d9f88719d5ed3883140963bcc0bcd13","sha256:2f86efd99b9d2a95b91c2ff92fb5995981a8f026a72e80e133d5d2d1c89eaeca","sha256:3d1aa4c86bb2cd79e914de97a9ad6faca442eaadd93aa6a2503f491064db0bbe"]
  - id: r-beta-menos
    tier: 2
    type: opcion
    review: true
    prompt: |
      En una desintegración beta menos, ¿qué les pasa al número atómico y al número másico del núcleo?
    options:
      - |
        El número másico disminuye en 4
      - |
        El número atómico disminuye en 1
      - |
        No cambia nada
      - |
        El número atómico aumenta en 1 y el másico no cambia
    answers: ["sha256:5b11e9a76b88feac15da6da2ffc19e41380aeb213495faf88a3807411003e89d"]
  - id: r-becquerel
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es un becquerel?
    options:
      - |
        Una unidad de dosis
      - |
        Una desintegración por segundo
      - |
        Una unidad de energía
      - |
        Un gramo de radio
    answers: ["sha256:8797494467672199ff4119e5309f6a5e9e01d59967c5c2fccfae26e359e540db"]
  - id: r-fusion-sol
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿De dónde obtiene el Sol su energía?
    options:
      - |
        Fusión de hidrógeno en helio
      - |
        Fisión de uranio
      - |
        Combustión química
      - |
        Desintegración alfa
    answers: ["sha256:334c6aee886c45ad1246e60d00b5af9c2c0ecccf637d6cf7591b4134eed589f1"]
---

# Física nuclear: el núcleo, isótopos, fuerza nuclear, energía de enlace, radiactividad, ley de desintegración, fisión, fusión, efectos de la radiación y partículas

En el centro de cada átomo hay un núcleo cien mil veces más pequeño que el átomo, que contiene casi toda su masa y una energía enorme. De ahí sale el
calor de las estrellas, la electricidad de las centrales nucleares, las técnicas de diagnóstico y tratamiento del cáncer, la datación de fósiles y,
también, el poder destructivo de las armas nucleares. Este nodo explica cómo es el núcleo, por qué algunos núcleos se desintegran, cómo se calcula el
ritmo de esa desintegración y cómo se libera la energía nuclear.

## Objetivos

Al terminar sabrás:

1. Describir la composición del núcleo, los isótopos y la fuerza nuclear fuerte.
2. Calcular defectos de masa y energías de enlace, e interpretar la curva de energía de enlace por nucleón.
3. Describir las desintegraciones alfa, beta y gamma y escribir sus reacciones.
4. Aplicar la ley de desintegración: periodo, constante de desintegración, actividad y datación.
5. Calcular la energía de reacciones de fisión y fusión, y conocer los efectos biológicos de la radiación.

## Qué debes dominar antes

[[fis-cuantica-introduccion]] (fotones, energía en eV), [[fis-relatividad-bach]] ($E = mc^2$ y defecto de masa) y [[mat-funciones-exponencial-logaritmica]] (exponenciales y logaritmos).

> [!question] Test de entrada
> 1. ¿Cuánta energía, en MeV, equivale a $0{,}01$ u ($1$ u $= 931{,}5$ MeV/$c^2$)?
> 2. Despeja $t$ en $\frac14 = \left(\frac12\right)^{t/3}$.
> 3. $\ln 2$ con tres decimales.
>
> Respuestas: $9{,}315$ MeV; $t = 6$; $0{,}693$.

## 1. Para qué sirve

- **Energía**: centrales nucleares de fisión; la fusión como fuente futura (ITER).
- **Medicina**: radiodiagnóstico (PET, gammagrafías), radioterapia, esterilización.
- **Datación**: carbono 14 en arqueología; uranio-plomo y potasio-argón en geología.
- **Astrofísica**: cómo brillan las estrellas y cómo se formaron los elementos ([[fis-astrofisica]]).

## 2. El núcleo atómico

- Formado por **protones** ($Z$, número atómico) y **neutrones** ($N$); **nucleones**: $A = Z + N$ (número másico). Se escribe $^A_Z\mathrm X$.
- **Isótopos**: mismo $Z$ (mismo elemento) y distinto $N$: hidrógeno, deuterio y tritio; carbono 12 y carbono 14.
- **Tamaño**: $R \approx 1{,}2\,A^{1/3}$ fm ($1$ fm $= 10^{-15}$ m); todos los núcleos tienen casi la misma densidad, enorme (unos $2 \cdot 10^{17}$ kg/m³).
- **Fuerza nuclear fuerte**: atrae nucleones entre sí con gran intensidad, pero solo a distancias de unos pocos fm; vence la repulsión eléctrica entre protones. Por eso los núcleos grandes necesitan más
  neutrones que protones para ser estables.

## 3. Energía de enlace

> [!practico]
> Si pesaras un núcleo de helio y por separado sus dos protones y dos neutrones, verías que el núcleo pesa **menos** que sus partes. La masa que «falta» se fue
> como energía al formarse el núcleo, y es la misma energía que habría que aportar para romperlo. Es la energía de enlace, y es millones de veces mayor que la de
> los enlaces químicos.

- **Defecto de masa**: $\Delta m = Z\,m(^1\mathrm H) + N\,m_n - M_{\text{átomo}}$ (usando masas atómicas, los electrones se compensan). **Energía de enlace**: $E_B = \Delta m\,c^2$, con $1$ u $= 931{,}5$ MeV/$c^2$.
- **Energía de enlace por nucleón** $\frac{E_B}{A}$: crece rápidamente en los núcleos ligeros, tiene un máximo de unos $8{,}8$ MeV cerca del hierro 56 y el níquel 62, y disminuye lentamente en los pesados. Los núcleos del máximo
  son los más estables.

## 4. Radiactividad

Los núcleos inestables se transforman espontáneamente emitiendo radiación (Becquerel, 1896; Marie y Pierre Curie):

- **Alfa** ($\alpha$): emite un núcleo de helio 4; $Z$ baja $2$ y $A$ baja $4$. Poco penetrante (la detiene una hoja de papel), muy ionizante.
- **Beta menos** ($\beta^-$): un neutrón se convierte en protón y se emiten un electrón y un antineutrino; $Z$ sube $1$, $A$ no cambia. (La $\beta^+$ emite un positrón.) La detiene una lámina de aluminio.
- **Gamma** ($\gamma$): un núcleo excitado emite un fotón de alta energía; $Z$ y $A$ no cambian. Muy penetrante (hacen falta plomo u hormigón).
- En toda reacción nuclear se conservan la **carga** y el **número de nucleones** (además de la energía y el momento).

## 5. Ley de desintegración

> [!practico]
> Es imposible saber cuándo se desintegrará un núcleo concreto, igual que no sabes qué palomita va a explotar primero. Pero con billones de núcleos, la estadística
> manda: en cada intervalo de tiempo se desintegra siempre la misma **fracción**. Por eso la cantidad que queda decrece exponencialmente.

- **Ley**: $N(t) = N_0e^{-\lambda t}$, con $\lambda$ la **constante de desintegración** (probabilidad de desintegración por unidad de tiempo).
- **Periodo de semidesintegración** $T_{1/2} = \frac{\ln2}{\lambda}$: tiempo en que se desintegra la mitad. $N = N_0\left(\frac12\right)^{t/T_{1/2}}$. *Ejemplos:* yodo 131, unos $8$ días; cobalto 60, $5{,}27$ años; carbono 14, $5\,730$ años; uranio 238,
  $4\,500$ millones de años.
- **Actividad**: desintegraciones por segundo, $A = \lambda N$, en **becquerelios** (Bq); decrece con el mismo periodo.
- **Datación por carbono 14**: los seres vivos mantienen una proporción fija de ¹⁴C; al morir deja de renovarse y decae. Midiendo cuánto queda se calcula la edad (útil hasta unos $50\,000$ años).

> [!formal] Con rigor: de la probabilidad a la exponencial
> Si cada núcleo tiene la misma probabilidad $\lambda\,\Delta t$ de desintegrarse en un intervalo corto, el número de desintegraciones en ese intervalo es $\lambda N\Delta t$: el ritmo de disminución de $N$ es
> proporcional a $N$. La única función con esa propiedad es la exponencial, $N = N_0e^{-\lambda t}$ ([[mat-ecuaciones-diferenciales]]), y de $\frac12 = e^{-\lambda T_{1/2}}$ sale $T_{1/2} = \frac{\ln2}{\lambda}$. $\blacksquare$

## 6. Fisión y fusión

- **Fisión**: un núcleo pesado (uranio 235, plutonio 239) absorbe un neutrón y se rompe en dos núcleos medianos más dos o tres neutrones, liberando unos $200$ MeV. Los neutrones pueden provocar
  nuevas fisiones: **reacción en cadena**, controlada en un reactor (moderador, barras de control) e incontrolada en una bomba. Los productos de fisión son radiactivos (residuos).
- **Fusión**: dos núcleos ligeros se unen en uno más pesado; por ejemplo, deuterio y tritio dan helio 4 y un neutrón, con $17{,}6$ MeV. Exige temperaturas de millones de grados para vencer la repulsión
  eléctrica; es la fuente de energía del Sol (hidrógeno en helio).
- En ambos casos, la energía liberada es $Q = (\sum m_{\text{reactivos}} - \sum m_{\text{productos}})\,c^2$, y sale de pasar a núcleos con más energía de enlace por nucleón.

## 7. Efectos de la radiación y partículas elementales

- La radiación ionizante daña las células y el ADN. **Dosis absorbida**: energía por kilogramo, en **grays** (Gy $=$ J/kg). **Dosis equivalente**: dosis absorbida por un factor de ponderación $w_R$ que tiene en
  cuenta el tipo de radiación ($1$ para gamma y beta, $20$ para alfa), en **sieverts** (Sv). La dosis natural media es de unos $2$-$3$ mSv al año. Protección: tiempo, distancia y blindaje.
- **Partículas elementales**: protones y neutrones están formados por **quarks**; los electrones y neutrinos son **leptones**; las interacciones se transmiten por partículas mediadoras (fotón, gluones,
  bosones W y Z). Todo ello forma el **modelo estándar**, completado con el bosón de Higgs (2012) ([[fis-fisica-nuclear-particulas]]).

## 8. Errores típicos

- Confundir número atómico ($Z$) y número másico ($A$).
- Pensar que tras dos periodos se ha desintegrado todo (queda una cuarta parte).
- Usar masas nucleares y atómicas mezcladas en el defecto de masa.
- Olvidar convertir el periodo y el tiempo a las mismas unidades.
- Confundir actividad (Bq) con dosis (Gy, Sv).

## 9. Resumen

- Núcleo: $Z$, $N$, $A$; isótopos; $R \approx 1{,}2A^{1/3}$ fm; fuerza fuerte.
- Defecto de masa y energía de enlace; curva por nucleón con máximo cerca del hierro.
- Alfa, beta, gamma; conservación de carga y nucleones.
- $N = N_0e^{-\lambda t}$; $T_{1/2} = \frac{\ln2}{\lambda}$; $A = \lambda N$; datación.
- Fisión y fusión; $Q = \Delta m\,c^2$; dosis (Gy, Sv); modelo estándar.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué son los isótopos.
2. Qué es la energía de enlace y qué indica la curva por nucleón.
3. Qué cambia en el núcleo en una desintegración alfa y en una beta.
4. Cuánto queda de una muestra tras varios periodos de semidesintegración.
5. Por qué la fisión y la fusión liberan energía.

## Siguiente

[[fis-fisica-moderna-bach]] repasa el bloque de física moderna; en la universidad, [[fis-fisica-nuclear-particulas]].
