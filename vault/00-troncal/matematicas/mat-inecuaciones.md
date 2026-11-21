---
id: mat-inecuaciones
title: "Inecuaciones: intervalos, primer y segundo grado, sistemas, valor absoluto, racionales, tablas de signos y semiplanos"
area: matematicas
trunk_level: 3
prerequisites: [mat-ecuaciones-segundo-grado, mat-polinomios-factorizacion, mat-numeros-reales]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 5: «Inecuaciones», secciones 1.1-1.2 (intervalos y semirrectas), 2.1 (inecuaciones equivalentes), 3.1-3.4 (primer y segundo grado, sistemas, valor absoluto) y 4.1-4.2 (inecuaciones y sistemas de primer grado con dos incógnitas). Apuntes Marea Verde, autores Ana Lorente y Álvaro Garmendia. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/05_Inecuaciones_4B.pdf"
hints:
  - "Concepto: una inecuación se resuelve como una ecuación, con UNA diferencia: al multiplicar o dividir por un número negativo, el sentido de la desigualdad cambia. Las soluciones no son unos pocos números, sino intervalos."
  - "Herramienta: para grado 2 o más, o con la incógnita en un denominador, pasa todo a un miembro, factoriza, marca en la recta las raíces (y los ceros del denominador) y estudia el signo en cada trozo con una tabla de signos o probando un número de cada trozo."
  - "Documentación: Marea Verde 4.º ESO B, cap. 5."
exercises:
  - id: inecuacion-primer-grado
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Resuelve ${{iz}} {{op}} {{de}}$. ¿Cuál es el {{cual}} número entero que la cumple?
    variants:
      - values: {"iz":"5x - 2","op":"<","de":"2x + 10","cual":"mayor"}
        answers: ["sha256:3e04c5f512c9ee9d7556edc41dfac7341da83c15977f6d0cf5499b0c52c4c933","sha256:015b527d192b7eb5cc9c6e24d53c03d3726b218e8e3c23f6547cf711304911ff","sha256:127124c7a5199f5e63a0b77cb127d777fb5fcd10801b5bac375f98b9df6f18aa"]
      - values: {"iz":"3x + 4","op":"\\le","de":"7x - 8","cual":"menor"}
        answers: ["sha256:fbd0bf4f9999e851a694e0129f8c35cc59405bf46b921b88a4c78dcc5d82e90a","sha256:1f7dd9bbd9b9634a6ac46958ebf04b96863d82ac103d7fd55e0ee2e095869125","sha256:8230ae82788dcc71527703ca00abd5281eb447721849864fbdfa5d9bccea82d6"]
      - values: {"iz":"-4x + 1","op":">","de":"2x - 17","cual":"mayor"}
        answers: ["sha256:0419d8978c5172d4f13a76531902218bcc65223f6ca88af3f5e385664bb1b1e1","sha256:473160bf01548f5c1ac0379ea0da7f0a04578d92ea097300fce49de9701a2f8b","sha256:b3d6a391e66b696d0cfa999c764f641947107add6c3e099f52bc265ad9788932"]
      - values: {"iz":"6x","op":"\\ge","de":"x + 23","cual":"menor"}
        answers: ["sha256:3fb2ecefb664d5f0d72af45c85cd94fa6868b3a3475c24477d3321900dd71f53","sha256:d9f524f533bac687a762cbe0c16577b2a86e93a3a60bd72398a998fd86873281","sha256:8ecbe052e72c8a4553aee9aff74c66e6e0152077c3ad197710fb4b8bfedd2931"]
      - values: {"iz":"-2x + 9","op":"\\le","de":"3x - 6","cual":"menor"}
        answers: ["sha256:41d51fb8d175156a95674503e110c5a29fa545f1df43bc0a5c94535c92b0aa26","sha256:c2ecd2b56ad7374688a05e93ff0b090665103b601e103aa6417fc4528a5c29fc","sha256:e1e208def8c324d01955da33cbd01e8c640bb89975e821f8f04c64990c37b9ee"]
      - values: {"iz":"x - 7","op":"<","de":"-3x + 5","cual":"mayor"}
        answers: ["sha256:2c0e0ce1544e22cdd199f45d573aeb0d05b11c3497ad49dbd7b2e0d922b922ab","sha256:be3ecda0b636c1cfdb2196904b409a5cdd97aa48f69ffe47f93b0e8b7c5ec526","sha256:96b8ebf61c512dc04cb26f268609810b21d88a857386fb0b80eea60e46cf3921"]
  - id: inecuacion-con-denominadores
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Resuelve $\dfrac{x}{{{a}}} - \dfrac{{{num}}}{{{c}}} {{op}} {{d}}$. ¿Cuál es el {{cual}} número entero que la cumple?
    variants:
      - values: {"a":2,"num":"x - 1","c":3,"op":"<","d":1,"cual":"mayor"}
        answers: ["sha256:1436316f00dbf17c1a57a2b14254b02be048d40fdc9d6538e0c8a377e5fdfa93","sha256:cb96e0832a11106be70a78c1af8063304d149211daeaa0879faaea602b08666f","sha256:4aaeb8175f4e6f82328717453891c1f165c9845835a24a4594df87af9dff5502"]
      - values: {"a":3,"num":"x + 2","c":4,"op":"\\ge","d":2,"cual":"menor"}
        answers: ["sha256:eddc80e69d61d736e931a4db7b0051b12c733363b282ea4b6f0b448086efa769","sha256:adcf59ba3f62049b6e86147301eb1c20fce9a26c9a99340b07d55b37b1e865be","sha256:1b7f6c7266aaf62125d769db1eba4679e06e753dc9b56fd2ce66a70433e20fb6"]
      - values: {"a":4,"num":"x - 3","c":2,"op":"\\le","d":-1,"cual":"menor"}
        answers: ["sha256:e1c9a5626cba19ffe2e0a1abe0931d0b4c3b79fa8558be64b03509b99bcdedd6","sha256:5b04a079ce7da192198d697547af745b1e95d1b927bca1ebef66e34f8356efc4","sha256:c1f9b3e8fe7594e392c8ef9ed691961290cfadeb6f7cd9584a17bbad1f98941a"]
      - values: {"a":5,"num":"x","c":2,"op":">","d":-3,"cual":"mayor"}
        answers: ["sha256:6cce4a4453a46ac8201dc5a3ca716f592f70f32402dbc1c5e70a4d7ad8c8474a","sha256:ac93d8af86e7e8294bbe829b8219863d0b37517b1bce08154f438652e852b30f","sha256:2c8da0661dcdc32df128acbda41ecfb8cfc3a4bb2217830cc0d9aebedcef2b2f"]
      - values: {"a":6,"num":"x - 4","c":3,"op":"<","d":2,"cual":"menor"}
        answers: ["sha256:b6d24fc835dfa68d8ef3e64fe98f962168be8ee10a7040f5de42f797a9807ba9","sha256:add708f653679b8bb5aba72d8eaed16a4b9619d0c1f823df9d7c498319c37fa6","sha256:5f9a9e3c4bb479bd5708ca27a9fbb7a0d33e798791d6d954ea6e502954d394ab"]
      - values: {"a":2,"num":"x + 6","c":5,"op":"\\ge","d":3,"cual":"menor"}
        answers: ["sha256:6ef05278126a13471a6e220566458f0ef0df7cb854555810689ac8aeb3000493","sha256:6a8eb15fab04310e4e26ce65592fafc46982bf2ec3a103e95f49aa050ccb8c45","sha256:70350c5fe0da85d429e0b12815c15dec239e4a49d112ac6ee561a9b5f1a66d7b"]
  - id: sistema-de-inecuaciones
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Cuántos números enteros cumplen a la vez ${{e1}}$ y ${{e2}}$?
    variants:
      - values: {"e1":"2x - 3 < 9","e2":"-x + 4 \\le 7"}
        answers: ["sha256:00afc044ee43acb6ff586129d9c5cbd1fd7d05a080418e8d1e5fda4dc0063eaf","sha256:1a5100493dbef981915e812200656521834c61b8e3ba65c95d7e665d91ec25e6","sha256:bef1a88393c4300f8ce9e1a4584885df7d781ccbba93532471ecde789a66f38d"]
      - values: {"e1":"3x + 1 \\ge -8","e2":"2x - 5 < 11"}
        answers: ["sha256:d8c6f2b4144300b2771eb71782e2ed59354548dec7b252bef1a6df126f3f5458","sha256:36d4692bf73b061ab9e1c1c9696680b9ddfd5e5ee1e4b992561d88e2ea6588d1","sha256:89dbb17aea88cc634c4b59e507c503b99f7d679af3c6a69d1d3f1c601faa1ac8"]
      - values: {"e1":"-4x + 2 < 18","e2":"5x \\le 31"}
        answers: ["sha256:12c7064952b185232889f6505171618cea04ee5379a63e0b3a3483c894326c8b","sha256:ac6bdd5c68bb6bef15752a880c05ffc9ecf04b191f50b9a24be9ac22958c76ec","sha256:248ec6bf64ef0bd95499c80d1a094fd2aafa3a91c4deb7fb731bb222f8c1801e"]
      - values: {"e1":"x + 6 > 2","e2":"3x - 1 \\le 14"}
        answers: ["sha256:337eb1814703596c265afef2c0da07de723b0968cb12c44ff1f4a9c6c353bb1c","sha256:93016914c4ffcedda2b7e31c713dd7c65553e9af27926aadc6a91ec340277210","sha256:750ee5ed4c98d5b2700cc687291ce8372fdd7e4d530f859873a445da472187ed"]
      - values: {"e1":"2x + 7 \\ge 1","e2":"-3x + 2 > -19"}
        answers: ["sha256:39e36b3fd1941adb8598d35a7946a646d2604150e728fb007bcd5a641ff9f4f5","sha256:5aa6817f1412185d30c1b0dcc5d6e51ac1f5c8bd2a0b44cc1041220e8a0795a3","sha256:d344588bd1ffe74bc92289933cdac0b23e8d7153492f754ea93e6d86ab1a3ab8"]
      - values: {"e1":"5x - 4 \\le 26","e2":"-2x + 3 < 15"}
        answers: ["sha256:6b584fe5971d6289806e4f7a5ea565fc9c04e062f9eac0f8753c009461692c82","sha256:6c7c9331a7f74fd36128a71ca0289f0c19d54d3f6de653bc22139115cb879a6c","sha256:8348c9bddf694ecb6bf16a6bdfc4907a58e469076a8432a7ff4e4ab98388ba99"]
  - id: inecuacion-segundo-grado
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Resuelve ${{p}} {{op}} 0$ (calcula las raíces y estudia el signo). ¿Cuántos números enteros {{que}}?
    variants:
      - values: {"p":"x^2 - 3x - 10","op":"<","que":"la cumplen"}
        answers: ["sha256:6f914a0cc857a7fe1866e744b4e8b4920712fb8e80e87608e798de3136809671","sha256:70242ffd051bc3b3aff6770724a95d2e44c944f82fb1f424b110953fee971beb","sha256:d8616abc4ea1d7b625d4703f06640e10652cd8f7c99e73c9bcd1963c6b44c317"]
      - values: {"p":"x^2 - 8x + 7","op":"\\le","que":"la cumplen"}
        answers: ["sha256:1977801fc749d3ebdc3df3c694e1e84734ae43f818096a437c95016dd7735341","sha256:cafb43b47f6067913458847f3125f6bcc2c99ebcbc2579862af8960bc8a5e96d","sha256:4777eb510586333438b72933ec6edd9dec031ee95b97c1154787cb6b9528d2e2"]
      - values: {"p":"x^2 + x - 12","op":">","que":"**no** la cumplen"}
        answers: ["sha256:3fc6ae6f861f8a081990c03213ebebf78bb2f6015f3b9e86661a7c2dd13d301b","sha256:5b6d5a4d3170baab4766342c744b99e8ef7d75fb5105b9bee4223c85bb50e92a","sha256:ee1db4fed68b4a29e47fd3e30ecec994ccb09d7af0de4f4e1064a4e60af31ba8"]
      - values: {"p":"x^2 + 7x + 6","op":"\\ge","que":"**no** la cumplen"}
        answers: ["sha256:295211c39e56bf1c49056657dc23a5a80925d46fcaadf16903575ab8d7eb39b2","sha256:a9179765751dadb2efdf33fdd224e408f253ad9e30f250da2c89e0c7d4241d48","sha256:3556d8eb92b01831601a0be600ddcc2f9efe8c5c22fdea9b7c583605171b4800"]
      - values: {"p":"x^2 - 9x","op":"<","que":"la cumplen"}
        answers: ["sha256:a9f42585a63f8dcae860e5cc72ddcacb2986f8a21d7ba991e2b77329a6d6b938","sha256:f78d165d4d26a5067619c5ee8ec010eff353aa50cf2c5b0858cfe6bc9564fbfe","sha256:306cb20b19040074053713b30e3646f14e0df0dd8765f4fe80a7ce1d50f38dc0"]
      - values: {"p":"x^2 - 9","op":">","que":"**no** la cumplen"}
        answers: ["sha256:794461d8519f1a695054a0cb58f058a363ebeb9ff7ef4a6d042bb376d1b177dc","sha256:4181b8869f897cf68ded708764b367d7b878a41644465b4aea8f762e55867da6","sha256:297028f555837b2dce5095f64693895e2d78899b2e36d465d18ef52c405f1a99"]
  - id: inecuacion-valor-absoluto
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Resuelve ${{e}}$. ¿Cuántos números enteros {{que}}?
    variants:
      - values: {"e":"|x - 3| < 4","que":"la cumplen"}
        answers: ["sha256:10910201de649f2167a7e2cc6d0c724768806ff66950e4edc5dc21a96aeae61c","sha256:286f49f5ba9d9695ce3dff83af3e26f4fffb6b44522446b5e15ee42cab8f09ee","sha256:50418d92febd858fedf89623457ca8c3aa7d645e58305ec88080b61226f3df37"]
      - values: {"e":"|x + 2| \\le 5","que":"la cumplen"}
        answers: ["sha256:1f656e3d397a5fcdbf8ae3fe7f6ede46be1429416b1bbc2fe1ba23f420b13358","sha256:3164b16f09516efc848ba46d082d5fcc82deb358d8be5ff873cf34b1c9f727a5","sha256:16ac0511cecf5d36e3713293ccc51eed9d484533cbf177a865f051a6bb1346d9"]
      - values: {"e":"|x| < 6","que":"la cumplen"}
        answers: ["sha256:e7ab8e0a1f3cd2fc5ed1da86e175ada90e43096c251c05759a3083932270ca87","sha256:b619b77e873d2952daab962dd3bdb6d0188c70d21fa0456e89a140166c05c189","sha256:f95bf05dacf44533af76dcb6fad639ce454ac77261e1f75fb8e8391dc7d10326"]
      - values: {"e":"|x - 7| > 2","que":"**no** la cumplen"}
        answers: ["sha256:f46162fe42ea589c63bd85ceb84e364a38b016509ce3db35214c94c1a9e30291","sha256:713b5e8fea9786aecc03988190421a15ba7d486becfca828a36724ce8a59cf3f","sha256:461ad2176af22316c8c816952d2940a25a6c94f56546d18a4616ac816b8559ec"]
      - values: {"e":"|x + 5| \\ge 3","que":"**no** la cumplen"}
        answers: ["sha256:f32e97aa36721ce483dc02ad5e30c0a1986252429b1a9d45806b985784997a37","sha256:e6d3c7c0fa748797afc36ab3cb5883421f22f85dd317b2ba70022ff46f33342d","sha256:c0a55f9e328fcdcf6be7c5f849c615d5461617ae4a752763bddd45c6f9e834e4"]
      - values: {"e":"|x - 10| \\le 0{,}5","que":"la cumplen"}
        answers: ["sha256:fd2a0c6c3da5cd3f6d250b47e7589801fabbc3471d5cd5c970c9d3d7856aba9d","sha256:d012d755448118767fc9e84128b8d5f3f3a7add731dbdbae6c7bdc6e1084acb1","sha256:d6545d2f20355853411ce61e542699a8ab802e6695f9bd2f5907652a30575a10"]
  - id: inecuacion-racional
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Resuelve $\dfrac{{{n}}}{{{d}}} {{op}} 0$ con una tabla de signos (¡cuidado con el valor que anula el denominador!). ¿Cuántos números
      enteros la cumplen?
    variants:
      - values: {"n":"x + 3","d":"x - 4","op":"<"}
        answers: ["sha256:6e4edc4f874072c6be706a7cf6a3846043cda7a59fb0ad2a53943ff380659f22","sha256:90e6f4fa13e19937e18d446bf17f40b9a6848c48c7e358c19139cc7eccc14916","sha256:15d4288722acbcecbf88370500dfb7bbff902ad7f2afc82958c1215b73d13e22"]
      - values: {"n":"x - 2","d":"x + 2","op":"\\le"}
        answers: ["sha256:c710e73c71f77f387ef53f4f545021dc2f1c61f62cff37f5f742b19a4614c51b","sha256:88dec319a996aae4a902b1e92ff9564306bc83f2f9d5633ccd31b08b6151f125","sha256:ea674538072b30de27204a3904da2ddeb6bf5e800823ad7a7127701cd7d68f54"]
      - values: {"n":"x - 5","d":"x - 1","op":"\\le"}
        answers: ["sha256:5492d5be823c557d245c7e05ea50dc57c74c7b1916b4718978c7e38255e32f80","sha256:9f28b07e4edf1690a756315005387b22b9764a479775b603355b17bd63a0709e","sha256:07fccd78ef7ff7962c3712a993d06cc7f2a00bf45bad486fe06a28df96f42203"]
      - values: {"n":"x + 1","d":"x - 6","op":"<"}
        answers: ["sha256:c9a52bfddfe9ebd4c5cd066cf3c543a270cf8805854c4f4952296040d7a63b13","sha256:4b1f2423261edd6bd8378d3b52eda77b34f26caab8fb32f65618fe79a265153c","sha256:f1a1a40b1773acfbfe92fb84369b5bf98510fd6ad673e43308d9449a1ae907db"]
      - values: {"n":"x","d":"x + 5","op":"\\le"}
        answers: ["sha256:bd2cb3f26afb6cd117f690fb7c153a69c86196dd98edfb5f310b3ea71d52dbc0","sha256:ed23049b1e4d397e7c669225bd975d12d5fa437780c87f8ca5497b2f6f7a4392","sha256:80bd200f7d8e41372d363e0f3b2aa3fe876780b75732a90b5eba2b01435799cf"]
      - values: {"n":"x - 7","d":"x - 2","op":"<"}
        answers: ["sha256:1871f4267b28542a53c5b3c8d60e18381b38a7b53b05892fd51885a0126f4fdb","sha256:6d6118eaa8c27b9836beb29de8b8cc8ca2d846ae22190edea78431d83436e61e","sha256:7572b691f88f3b86663da5ec6042ea005f692d89ed991aea16170a687f66e5b8"]
  - id: tabla-de-signos
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Resuelve ${{p}}$ con una tabla de signos. ¿Cuál es el **mayor** número entero **negativo** que la cumple?
    variants:
      - values: {"p":"(x + 4)(x - 1)(x - 6) < 0"}
        answers: ["sha256:a4b18306a4d888b62d37093045f732beb182ec2f62a408668c8840b960f70812","sha256:5ff86437d9034073821eaee31b995ca18af3b9e32fcc342ff77e60cfb60d4cbb","sha256:014883613b72a07a9b665fde1eb3c9a1239a1b2bd698cb638f5d675d9342ccc9"]
      - values: {"p":"(x + 2)(x - 3)(x - 5) < 0"}
        answers: ["sha256:89d212fda38def7bdaf272ef99df53c723ceee17dcd650c2eb7661ec4c42985d","sha256:e04944c28b2dc4874ca77ea45dd6044b277f2100d03a5ea06f1e4ea583b181cc","sha256:530b3f8d759c109b0b6272571da45a578216ffea46fa1c120c67ce791abb08af"]
      - values: {"p":"(x + 7)(x + 1)(x - 2) < 0"}
        answers: ["sha256:4d7d8a3a99a7ccd9ef4ac207c34be61555edca2315261d246839bbdcab580b2d","sha256:8d7243031a063cd10a5d12a587a46c8ec47f3d175b3a526b28e5cc9226024a63","sha256:b74aa25dce6c9818d49a6e30a0acb4a7d13f0dd2f812dea7f0f6ce7d10059863"]
      - values: {"p":"(x + 5)x(x - 4) < 0"}
        answers: ["sha256:d653546ccf82d46ec1b1840bd3372fcfabdd849787bcf2b632d97de731c53e5f","sha256:37302a586fea30a0916b42c4f407a0612a42a1e346e7b1878ddc11a33541a884","sha256:e63582fdd15b11963cfaffb271c905977666f89f8a0e42a17bd9a4ae28ad5ec9"]
      - values: {"p":"(x - 1)(x - 2)(x - 8) < 0"}
        answers: ["sha256:5b261c4c90360ab67a7b7097ffbace417155897fddd470ad96b567679d3da154","sha256:a2f6a88ffc3fdcb7a1f495b18fa42f4e615c4887105d99b3592e37f68efd1c2e","sha256:856e1df50cf891c4c41903fc4c773d73c9a704dc49e764d08c4658b3746a77f8"]
      - values: {"p":"(x + 9)(x + 6)(x - 3) < 0"}
        answers: ["sha256:915f0ba2257efcb82c37cb1919abc297416bb5e2d883f8112f9e6da3082271f4","sha256:8c5f45b67906b4cbb9b55521e15e23bf33ff73ed224e58e7226eb13495d48018","sha256:8e22c8493dd8e72c970cc6297171992d471960e88239c83311c2e1352e4fbc04"]
  - id: comparar-tarifas
    tier: 2
    type: numero
    sig: 10
    prompt: |
      La tarifa A cobra ${{F}}$ € al mes más ${{p}}$ € por minuto; la tarifa B no tiene cuota y cobra ${{q}}$ € por minuto. ¿A partir de
      cuántos minutos (enteros) al mes es **más barata** la tarifa A?
    variants:
      - values: {"F":12,"p":"0{,}04","q":"0{,}09"}
        answers: ["sha256:75ff57737af1bc63bb181da29d167201dbc30fa6d8af951aa894f7b319afb5f7","sha256:9f73d92dfed33829e5f93cc10b735d4ca0ea031de6b5ddd3b698cd1e93b1f84b","sha256:85d84ba5825531fdff46f9248deab072625e7b208c3911636389105bd1b012ef"]
      - values: {"F":8,"p":"0{,}05","q":"0{,}1"}
        answers: ["sha256:10022e1f0c7d3c28c7151874b46ed334fd6e7b14433f5ebbae97b5ecdf16a671","sha256:1e4d70990e49392f286672d239a936b5f8ba736f6739b523392adeebf7223079","sha256:329979978cae8319fa00e356f5955f826c84811c23695d77a088c2290bc24269"]
      - values: {"F":20,"p":"0{,}02","q":"0{,}07"}
        answers: ["sha256:7570cb727c7ab2485a26827fd2fb8aef525f4d3f49dd0a674d3648f0305ab914","sha256:bc84ce629592815637f841b647b42b7ab02e043350d57e2b3cdd00a16c12ada3","sha256:4b41c0ad3d2ae3f4ce67ab9572655657c431db0ef806fcd5794eae4e7c5f582b"]
      - values: {"F":5,"p":"0{,}15","q":"0{,}25"}
        answers: ["sha256:4f9972573775b5bbfeeaa262fef1d970ac5d2e52d15fe8ad52d5891b091ba991","sha256:62d6ea7bdf9da0809b78250d1e14d225be58e4ed39c8e0663523a27155f1f2f4","sha256:d14e588607da3a48c66b6da24fa8716b9057b02e68ab501a7b8456293b94a3aa"]
      - values: {"F":15,"p":"0{,}03","q":"0{,}08"}
        answers: ["sha256:bf42fa33db9fcbd87d4af0ded34799e43eca57804f7e537658a0690cbff5ba4b","sha256:5ea9ac7ea0c8c0b9927ef508fe090a2316a648991d94668ad7144d0eee31a866","sha256:d0d3310494aef47a55706b4b8d4b9ddccb15568fc079782417d59e61923070f3"]
      - values: {"F":9,"p":"0{,}06","q":"0{,}12"}
        answers: ["sha256:9a2e67f6e8416c4fd4d3f4d16cf498775581ec40f84679ea2044294723bfe9be","sha256:a4d8751ac1f877a85871efe7739ab9195f0888206985d2b1d70c5297b481a71c","sha256:1fd97bf50aeec8666beae8f7c0e82ffd8b6c44ff0caa1c6416a5777baffcf33d"]
  - id: nota-minima
    tier: 1
    type: numero
    sig: 10
    prompt: |
      En los exámenes anteriores has sacado ${{notas}}$. ¿Qué nota necesitas como mínimo en el siguiente para que la media de todos sea al
      menos ${{M}}$?
    variants:
      - values: {"notas":"6, 4{,}5, 7","M":"6"}
        answers: ["sha256:27ac2f20c42e21673cfdec6fe199da38cf9ff7badd70ac3e3c68b0385324cc5b","sha256:fabf01caf2de7c2a6b69e512689358a751aca5fefcc32151656cab4fba7e3e85","sha256:880c291294ecc5e1c85d1ece1f74c695e447bad5aaf0f8941d6fc57533ff0610"]
      - values: {"notas":"5, 5, 3{,}5","M":"5"}
        answers: ["sha256:56300a70989d8c8dd1d227e8e0e85313bc4822421714ffec30728ccf2703d235","sha256:feecc3ff08907ae1898671338c7ad135dfa5813ef89eaf5837130572edff8563","sha256:dbc443afa355875a2b1ea5128a2d016df056b77b3ef72ba146aa72de9595f000"]
      - values: {"notas":"8, 7{,}5","M":"8"}
        answers: ["sha256:b55303d451c8c556f42269b324e172ef15be531c5da28ac9b3d7415d4b4d2679","sha256:4b20b49776a3af4a48e1530f4155ee45493fb4b3ec021cc72306081f0205898e","sha256:b405662c2f2fb9ffbf2a47ac486e0b1873cafbfe92b0a474896f5e23d17145e0"]
      - values: {"notas":"4, 6, 5{,}5, 7","M":"6"}
        answers: ["sha256:d1ca4660538f1a98ec26e22928b77a96fd16021714dd7af42a3f392f606de8b1","sha256:732c06a6463927b3deeda8463e0ec3b04f2309b59e7b684a281d21658d23fb30","sha256:c8134dbd7161755da2719fc76f4ef79d61105aee34e81732ec3ca707d8482bec"]
      - values: {"notas":"9, 8","M":"8"}
        answers: ["sha256:123c598ab16c2baf0c5dcb0cef10afcbc5d151589b955aca83ade88b290426d1","sha256:e556da6e373b8942d6f6786cd6a83c53926f0cc0d48a23c1eb38d51287550969","sha256:12bbf9f900357a6ce5e21506612d4ef3c7d97dec11d7182561af7a73978917a3"]
      - values: {"notas":"3, 5, 6","M":"5"}
        answers: ["sha256:e5164a967af184d32a3757ffda23c8185e9c6cf4fef9f6b858270f6dbd43ccb0","sha256:0ec4fba261916f739477ec911ae0a581c2f1f7a7bb3e7c56ddc99c926b3790d6","sha256:0d71b968addc39ef2f28d26be4069b5db19b2288d53e48518f245d9755fde0c0"]
  - id: punto-en-semiplano
    tier: 1
    prompt: |
      ¿El punto ${{P}}$ cumple la inecuación ${{e}}$? Responde `si` o `no`.
    variants:
      - values: {"P":"(3, -2)","e":"2x + y \\le 5"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"P":"(-1, 4)","e":"x - 3y > -12"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"P":"(2, 2)","e":"4x + 5y < 18"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"P":"(0, -3)","e":"-2x + y \\ge -3"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"P":"(5, -1)","e":"x + 2y \\le 2"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"P":"(-2, -2)","e":"3x - y > -4"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: interseccion-de-intervalos
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Qué longitud tiene la intersección de los intervalos ${{I}}$ y ${{J}}$?
    variants:
      - values: {"I":"[-3, 5]","J":"[1, 9]"}
        answers: ["sha256:a7781723d243100849d8fcf94ac58405c2df739c8523735f22e0241c6314b52f","sha256:c59a008ab3695c34d8a34173ce9d4e2fe570bbab619e6ba346cf3f37d95bfd91","sha256:45ddfa99eacf5640c8d8dcc67b80abf8349761694c9a8a82e64583ee076fd2c3"]
      - values: {"I":"[-7, 2]","J":"[-4, 6]"}
        answers: ["sha256:07eda6229c15d7aabb5da614f562b9c4ca7ce16f4137a1b46b500a65d891f816","sha256:d8f31f48fd88947bef0713ac0446fc7de7e6676fd6140e60517a6f84296d1c85","sha256:8e8c51c8ece3a7d20156081d5b5c56caf64814348972fc955235f37ecb795ff9"]
      - values: {"I":"[0, 10]","J":"[2{,}5, 4]"}
        answers: ["sha256:9af0aa63ee8fff40ce7f0a8907438de1754bca372e47cbff512e929394243731","sha256:7e9431522235ade8b54284b3efd1fd804465981f5e85269edfde778e848e3eb5","sha256:6259b8878713889d0dc0bb8719ec1901d419a87e28731b82102095e03a83f9ff"]
      - values: {"I":"[-1{,}5, 3]","J":"[-6, 0{,}5]"}
        answers: ["sha256:cf90b6a9faebbb4025f8b508461efd5f34fba067288c0d1483b04f3d37865a5b","sha256:fa0dcaa5f4c9a90f4fda3e0bf3d4bf276e24d72d6e3cb207b3da732471a0d19a","sha256:5376dcc29ad7320220d201952d9d491e57a564426ece9c7982c2ae19a47f3098"]
      - values: {"I":"[4, 12]","J":"[-2, 7]"}
        answers: ["sha256:662fbb8eee77f107d841099a027813affe52e2b05762130bf8421f6113243d43","sha256:96ea6b174864798bf8a7a6b59ab33170fe084e768dba048c2afdb94c39dc21b2","sha256:69409b1306764a5e2b8d3c3b51d26d25c0f09129466488dff39fc994bb1bce7e"]
      - values: {"I":"[-8, -1]","J":"[-5, 3]"}
        answers: ["sha256:2029dc9273bfcb843cd8776aed349e49bcfd1ac0dc8e43661db9c3686c8b0757","sha256:b72fc4aa0d2426bdb31f4ab9cb9d51a42118e4ead7f50d2891dcf339fce174ea","sha256:007442843810d1a87d05876f1c3a6802600bdfd0e73552d0efbc3c298d4f0047"]
  - id: por-que-cambia-el-sentido
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Explica por qué al multiplicar o dividir los dos miembros de una desigualdad por un número **negativo** hay que cambiar
      el sentido, con un ejemplo numérico y con un argumento general. Después explica por qué la inecuación $\dfrac{1}{x} < 2$ **no** se puede
      resolver multiplicando sin más por $x$.
    sealed: "gz64:H4sIAAAAAAACCn1TsW7bMBT8lYPAwTZsI3aQRXUCFKiBominjlWHJ+rFZUyRCkkFcg1/TMei6NShQ7f4xwpStusEaBYturv37t5xm3mr26CsyfJsNFrecd1oOx2NIC6xwJUYo2FnUbc6qEYrSaayaKyDmMxEDjG5xA0mV2KKDyeIS4DWwPCKgnqwYA/Ht5rvyEETHMsQv75hGSxIQ1yIHNrivmWwD1QSqDCaoL7et4pdRWjIEyjSK3Ysv9C0MIUZjV67VVuzCf3WhAVKAa9WRt0qSUlRlJiARFyjsV7Flab4qCDWWOBCjCHWEbEmXGM9SOBhQg+ODoaPvwdH6hDiWpy8jaFbXtkkscCaxBjsC1OxVC4KE26wLkUO1vBsgqosJNWlouMKN2kF1micrdoYyNme2JwTPaMmExQbPrhfakjyFqIobh3JWYcF5iJGsdQpBYuKIbpkp2IvrbFSVTaHVxBdGn4uez5tIGZRrYsBReRhxFwMsTnQFwe6Mg+KXeDEuUmcwsToPUO2daMZXnHdOEZDjo7U4RRvaYMeGH84aOuTIw+bTu4QbGVBsU+14rp0dnx0u51hgnm323a7wyE3aCOlNYRAZepKn4Kf4j0VJrZdqv0vE+M47m+f2Xt1VneHxx9eGdT7b/7xT9/8TqAit/9J8FY/J2MTX0zF6X80cyyKn2bjzLWlUzLLP20z6VRgp2yWZ2+SO+4fH0xb7787JePldN+VdMTDWaJM05pgfZbPd+MnQu9aH/ra/2NKa9JRT104NfwlpWWX7PcP8sUmYQNb9t35X6BPB33e/QUy2a6WdgQAAA=="
  - id: r-intervalo-abierto
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se escribe en forma de intervalo el conjunto de los números $x$ con $2 < x \le 5$?
    options:
      - |
        $[2, 5]$
      - |
        $(2, 5]$
      - |
        $(2, 5)$
      - |
        $[2, 5)$
    answers: ["sha256:84c6e714cd614d4f636161e839d0d6c726f4408fd46a641195ee909f9cd31257"]
  - id: r-sentido
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la solución de $-2x < 6$?
    options:
      - |
        $x < -3$
      - |
        $x > 3$
      - |
        $x > -3$
      - |
        $x < 3$
    answers: ["sha256:8bb2a87954d658c35876ae2a9003c4c0bcfab5e4c4325a2bc930d373b4f7f591"]
  - id: r-cuadrado-negativo
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué números cumplen $x^2 + 1 < 0$?
    options:
      - |
        Ninguna
      - |
        Todos los reales
      - |
        $x > 0$
      - |
        $x = 0$
    answers: ["sha256:58299e96b03e7eb0609f4fddbceb7b513e66ff92f469044e7e6ba57d86cd1636"]
  - id: r-absoluto
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué significa $|x| < 4$?
    options:
      - |
        $x < 4$
      - |
        $x > -4$
      - |
        $x < -4$ o $x > 4$
      - |
        $-4 < x < 4$
    answers: ["sha256:fe836a0848ad3272875832eceaa4a4294a6e45031995aa0fac7c73ecfb073dce"]
  - id: r-semiplano
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué representa en el plano el conjunto de puntos que cumplen $x + y \le 3$?
    options:
      - |
        Una recta
      - |
        Un semiplano, uno de los dos lados de la recta $x + y = 3$
      - |
        Un punto
      - |
        Una parábola
    answers: ["sha256:63b8d093f4d60186a948759f3c9d589152afe4a407708f053ec0210aa8381db3"]
  - id: r-enteros-intervalo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos números enteros hay en el intervalo $(-2, 4]$?
    answers: ["sha256:4ecdefaf43d0d7b3775e4a911b19e15daa3caabe5e9ea479e1bc64eafd218d39","sha256:ac591ed0c9aff2aa79775eebca8989aaa9a12f209ee2263089f56a8059919e11","sha256:f917550d58f33651815d9712cfb1b55df92ccef2d0ed4dfc94b3f785e90fafcd"]
  - id: r-denominador-excluido
    tier: 2
    type: opcion
    review: true
    prompt: |
      En una inecuación racional, ¿se incluye en la solución el valor que anula el denominador?
    options:
      - |
        Siempre se incluye
      - |
        Se incluye si la desigualdad es $\le$
      - |
        Nunca se incluye, porque la expresión no existe ahí
      - |
        Depende del numerador
    answers: ["sha256:06305636b5c0b0ac76b1d1c1a9a9a011f03ce8ce24160e7d1fd1146c1a133550"]
---

# Inecuaciones: intervalos, primer y segundo grado, sistemas, valor absoluto, racionales, tablas de signos y semiplanos

Muchas preguntas reales no piden un número exacto, sino un **margen**: ¿cuántos minutos puedo hablar para que la tarifa me salga a
cuenta?, ¿qué nota necesito **como mínimo**?, ¿entre qué velocidades es seguro un tramo? Se escriben con desigualdades ($<$, $\le$, $>$, $\ge$) y
sus soluciones son trozos enteros de la recta: **intervalos**. Este nodo enseña a resolver inecuaciones de todos los tipos básicos con
una sola idea (estudiar el signo) y una sola precaución (el cambio de sentido con los negativos).

## Objetivos

Al terminar sabrás:

1. Escribir y representar intervalos y semirrectas, y operar con ellos (intersección y unión).
2. Resolver inecuaciones de primer grado, incluso con denominadores, y sistemas de inecuaciones.
3. Resolver inecuaciones de segundo grado, polinómicas y racionales con una tabla de signos.
4. Resolver inecuaciones con valor absoluto.
5. Representar el semiplano solución de una inecuación con dos incógnitas y plantear problemas.

## Qué debes dominar antes

[[mat-ecuaciones-segundo-grado]] (raíces), [[mat-polinomios-factorizacion]] (factorizar) y [[mat-numeros-reales]] (la recta real, el orden,
el valor absoluto).

> [!question] Test de entrada
> 1. ¿Es cierto que $-5 < -2$?
> 2. Factoriza $x^2 - x - 12$.
> 3. ¿Cuánto vale $|-7|$?
>
> Respuestas: sí ($-5$ está más a la izquierda); $(x - 4)(x + 3)$; $7$.

## 1. Para qué sirve

- **Decidir**: a partir de cuántas unidades sale rentable una compra, qué tarifa conviene, qué nota mínima hace falta.
- **Ciencia e ingeniería**: márgenes de seguridad y tolerancias (una pieza vale si $|x - 50| \le 0{,}1$ mm), rangos de funcionamiento.
- **Matemáticas posteriores**: el dominio de una expresión (dónde existe una raíz o un logaritmo), el crecimiento de una gráfica, la
  definición de límite ([[mat-limites-continuidad]]).
- **Optimización**: las regiones del plano definidas por varias inecuaciones son la base de la programación lineal.

## 2. Intervalos

> [!practico]
> Un intervalo es un «trozo» de la recta numérica. Los corchetes dicen si los extremos se incluyen: el corchete «abraza» el
> número, el paréntesis lo deja fuera. En un dibujo, punto relleno si está dentro, punto hueco si está fuera.

| notación | significado | |
| --- | --- | --- |
| $(a, b)$ | $a < x < b$ | abierto |
| $[a, b]$ | $a \le x \le b$ | cerrado |
| $[a, b)$, $(a, b]$ | un extremo sí y otro no | semiabiertos |
| $(a, +\infty)$, $[a, +\infty)$ | $x > a$, $x \ge a$ | semirrectas |
| $(-\infty, b)$, $(-\infty, b]$ | $x < b$, $x \le b$ | semirrectas |

El infinito nunca se incluye (no es un número). La **intersección** $\cap$ son los números que están en los dos (lo que cumple
dos condiciones **a la vez**); la **unión** $\cup$, los que están en alguno (una condición **o** la otra).

## 3. Inecuaciones equivalentes: la regla del sentido

> [!practico]
> $3 < 5$. Si sumas $10$ a los dos: $13 < 15$, sigue igual. Si multiplicas por $2$: $6 < 10$, sigue igual. Pero si multiplicas por $-1$:
> $-3$ y $-5$… y ahora $-3$ es el **mayor**. Multiplicar por un negativo da la vuelta a la recta, y la desigualdad cambia de sentido.

Se obtiene una inecuación equivalente:

1. Sumando o restando lo mismo a los dos miembros.
2. Multiplicando o dividiendo por un número **positivo**.
3. Multiplicando o dividiendo por un número **negativo y cambiando el sentido** de la desigualdad.

> [!formal] Con rigor: por qué cambia el sentido
> $a < b$ significa que $b - a > 0$. Si $k > 0$, $kb - ka = k(b - a) > 0$ (producto de positivos), luego $ka < kb$. Si $k < 0$, $k(b - a) < 0$, luego
> $kb < ka$: el sentido se invierte. Por eso **no** se puede multiplicar por una expresión de signo desconocido (como $x$) sin separar
> casos. $\blacksquare$

## 4. Primer grado y sistemas

*Ejemplo resuelto 1.* $2x - 3 < 7 \Rightarrow 2x < 10 \Rightarrow x < 5$: solución $(-\infty, 5)$.

*Ejemplo resuelto 2.* $-2x + 1 \ge 9 \Rightarrow -2x \ge 8 \Rightarrow x \le -4$ (al dividir entre $-2$ cambia el sentido): solución $(-\infty, -4]$.
Comprobación con un número del intervalo, $x = -5$: $11 \ge 9$ ✓; y con uno de fuera, $x = 0$: $1 \ge 9$ ✗.

Con denominadores se multiplica por su mínimo común múltiplo (positivo, así que no cambia el sentido).

**Sistema de inecuaciones**: se resuelve cada una y se toma la **intersección** de las soluciones. *Ejemplo:* $x + 2 > 0$ y $3x - 1 \le 8$ dan
$x > -2$ y $x \le 3$: solución $(-2, 3]$. Si las soluciones no se solapan, el sistema no tiene solución.

## 5. Segundo grado y tablas de signos

> [!practico]
> Un producto es positivo si sus factores tienen el mismo signo, y negativo si tienen signos distintos. Un factor como $x - 3$
> cambia de signo justo en $x = 3$. Así que basta marcar en la recta los puntos donde algún factor se anula: entre dos de ellos el
> signo no cambia, y se averigua probando un número cualquiera del trozo.

**Método:** (1) pasar todo a un miembro: $P(x) > 0$ (o $<$, $\le$, $\ge$); (2) hallar las raíces y factorizar; (3) dividir la recta por las raíces;
(4) estudiar el signo en cada trozo; (5) elegir los trozos que cumplen y decidir los extremos (se incluyen con $\le$ o $\ge$).

*Ejemplo resuelto 3.* $x^2 - 5x + 6 \le 0$. Raíces $2$ y $3$: $(x - 2)(x - 3) \le 0$.

| | $(-\infty, 2)$ | $(2, 3)$ | $(3, +\infty)$ |
| --- | :---: | :---: | :---: |
| $x - 2$ | $-$ | $+$ | $+$ |
| $x - 3$ | $-$ | $-$ | $+$ |
| producto | $+$ | $-$ | $+$ |

Solución: $[2, 3]$ (con los extremos, porque ahí el producto vale $0$).

*Ejemplo resuelto 4.* $x^2 - 4 > 0$: $(x - 2)(x + 2) > 0$ fuera de las raíces: $(-\infty, -2) \cup (2, +\infty)$. Si el polinomio de segundo grado no tiene
raíces (discriminante negativo), tiene siempre el mismo signo: $x^2 + 1 > 0$ para todo $x$, y $x^2 + 1 < 0$ no tiene solución.

## 6. Inecuaciones racionales

Si la incógnita está en un denominador, **no** se multiplica por él (su signo es desconocido). Se pasa todo a un miembro, se escribe
como una sola fracción $\frac{P(x)}{Q(x)}$ y se hace la tabla con las raíces del numerador **y** del denominador. Los ceros del denominador
**nunca** se incluyen (la expresión no existe ahí).

*Ejemplo resuelto 5.* $\frac{x + 1}{x - 2} \ge 0$: puntos $-1$ y $2$. Signo: $+$ en $(-\infty, -1)$, $-$ en $(-1, 2)$, $+$ en $(2, +\infty)$. Solución:
$(-\infty, -1] \cup (2, +\infty)$: el $-1$ entra (la fracción vale $0$) y el $2$ no.

## 7. Valor absoluto

$|x - a|$ es la **distancia** entre $x$ y $a$ en la recta. Por eso:

- $|x - a| < b$ (con $b > 0$) significa «a distancia menor que $b$ de $a$»: $a - b < x < a + b$.
- $|x - a| > b$ significa «lejos de $a$»: $x < a - b$ o $x > a + b$.

*Ejemplo:* $|x - 1| < 3 \iff -2 < x < 4$, el intervalo $(-2, 4)$.

## 8. Inecuaciones con dos incógnitas

Una inecuación como $2x + y \le 6$ tiene como soluciones los puntos de un **semiplano**: la recta $2x + y = 6$ divide el plano en dos
mitades y se elige la que cumple la desigualdad probando un punto que no esté en la recta (el $(0, 0)$ si se puede: $0 \le 6$ ✓, así que
es la mitad que contiene al origen). La recta se incluye con $\le$ o $\ge$. Un **sistema** de varias da la región común (un polígono,
por ejemplo), que es lo que estudia la programación lineal.

## 9. Problemas

*Ejemplo resuelto 6.* Una tarifa cobra $10$ € al mes más $0{,}05$ € por minuto y otra $0{,}10$ € por minuto sin cuota. La primera es más barata
cuando $10 + 0{,}05\,x < 0{,}10\,x$, es decir, $10 < 0{,}05\,x$, $x > 200$: a partir de $201$ minutos (si se cuentan minutos enteros).

## 10. Errores típicos

- No cambiar el sentido al multiplicar o dividir por un negativo.
- Multiplicar por una expresión con la incógnita (de signo desconocido).
- Resolver $x^2 > 4$ como $x > 2$ (falta $x < -2$).
- Incluir en la solución los ceros del denominador.
- Confundir intersección (sistema: «y») con unión («o»).
- Escribir $[3, +\infty]$: el infinito siempre va con paréntesis.

## 11. Resumen

- Intervalos abiertos, cerrados, semiabiertos y semirrectas; intersección e unión.
- Reglas: sumar lo que sea; multiplicar por positivo igual; por negativo, **cambiar el sentido**.
- Sistemas: intersección de soluciones.
- Grado 2 o más y racionales: todo a un miembro, factorizar, tabla de signos, decidir extremos (denominador nunca).
- $|x - a| < b \iff a - b < x < a + b$; $|x - a| > b$ son dos semirrectas.
- Dos incógnitas: semiplanos; se elige probando un punto.

## Repaso: lo que debe quedarte dentro de un mes

1. Cuándo cambia el sentido de una desigualdad y por qué.
2. Cómo se hace una tabla de signos.
3. Por qué los ceros del denominador nunca entran en la solución.
4. Qué significa $|x - a| < b$ en la recta.
5. Cómo se decide qué semiplano es la solución.

## Siguiente

[[mat-exponenciales-logaritmos]] (último tema del bloque de álgebra) y, más adelante, [[mat-limites-continuidad]].
