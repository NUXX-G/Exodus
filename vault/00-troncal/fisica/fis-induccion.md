---
id: fis-induccion
title: "Inducción electromagnética: flujo magnético, leyes de Faraday y Lenz, fem de movimiento, generadores, corriente alterna, autoinducción y transformadores"
area: fisica
trunk_level: 3
prerequisites: [fis-campo-magnetico, mat-funciones-trigonometricas]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 13: «Inducción electromagnética» (ley de Faraday, ley de Lenz, fem de movimiento, campos eléctricos inducidos, corrientes de Foucault, generadores eléctricos y fuerza contraelectromotriz). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/13-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulos 14 («Inductancia») y 15 («Circuitos de corriente alterna»: fuentes de CA, circuitos simples, circuito RLC en serie, potencia, resonancia, transformadores). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/15-introduccion"
  - "M. Faraday, «Experimental Researches in Electricity», Philosophical Transactions of the Royal Society (1832); H. F. E. Lenz, «Über die Bestimmung der Richtung der durch elektrodynamische Vertheilung erregten galvanischen Ströme» (1834)."
hints:
  - "Concepto: un campo magnético que cambia (o un circuito que se mueve en un campo) induce una fem, y la corriente inducida siempre se opone al cambio que la produce. Así funcionan los generadores de todas las centrales y los transformadores que adaptan la tensión."
  - "Herramienta: flujo Φ = B A cos θ (Wb); Faraday-Lenz ε = −N ΔΦ/Δt; fem de movimiento ε = B L v; generador ε = N B A ω sen(ω t), ε_max = N B A ω; valor eficaz V₀/√2; transformador V₂/V₁ = N₂/N₁ e I₁ V₁ = I₂ V₂; pérdidas I² R; solenoide L = μ₀ N² A/l; energía ½ L I²."
  - "Documentación: OpenStax Física universitaria vol. 2, caps. 13-15."
exercises:
  - id: flujo-magnetico
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una espira plana de ${{A}}$ cm² está en un campo magnético uniforme de ${{B}}$ T; la normal a la espira forma ${{th}}°$ con el campo. ¿Cuánto vale el flujo magnético, en mWb? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"B":"0{,}5","A":200,"th":0}
        answers: ["sha256:9f77bb12b6e7cc5e9b59676eaf9409fce566080fd6fbd3aa2ee6b1850b4abd68","sha256:07536030bbb678477b52ee9f36e158e4f0b0db7301dc6578bbb0d4e9930f82af","sha256:a8378b5a87124b9c36ca0a630196a3036200eefbd403c34b3ce4da283025a9b8"]
      - values: {"B":"1{,}2","A":50,"th":60}
        answers: ["sha256:0e63dfc33de7828284e2be321892a6e2e23bda37ed4840226bc0ff84804b9efb","sha256:15f7cfbe87424fee16adb545eb2bf80bfbf7780d3f712122db02dae1dceb5019","sha256:767bdbb44e82816d7a0f1b2c7b1aa001abef6f04928f29bad7840c1ee7ded1ed"]
      - values: {"B":"0{,}08","A":1000,"th":30}
        answers: ["sha256:73cb0f18b976043a43ebed635ab380b367fd50dfb0eb1286ad1fc4377535d549","sha256:4076d7efccfb7e72a85818a7a157039933685822221204c374dec2a643c0de97","sha256:555dc90324ea58bdf71f5d99454ab08174fbff2782533a47fb7a40584165df75"]
      - values: {"B":"2","A":15,"th":45}
        answers: ["sha256:b57576228e9a3e5b6a55c4a0c25688df7c002f21f400e1fa0dd1d0ddf52dd100","sha256:165452e6eb29ceed1f21ce17b68504f95c02ec24bc3c91cffef0f09e556ba3cf","sha256:4f2131817d305c41366d750c5b9cfcfec6f1a48cc249530d368cce3d62ccf86e"]
      - values: {"B":"0{,}3","A":400,"th":80}
        answers: ["sha256:3d5746cb10cd9a32549484540baf69e60e99d5b1e684317807d2df4bf5cbc5e9","sha256:6a0d9687cc08f9b68296bfdc5564352948c0e21d6abc2605f8c4fd4059e7f6cc","sha256:7664988393247dc6cddd967462b6c72356776cb1a9c34ec3838bca758fc0f005"]
      - values: {"B":"0{,}9","A":120,"th":20}
        answers: ["sha256:5117f0cfb32f156d6f84b2aa3695fd43ef9b17f3159770f1c3bb9dd408be0016","sha256:724001b1e1541b908f3b20d61eb4483bebbbf31c3d2ef1ef32c6573a1e7b29cf","sha256:da1ba7a943bc3feb31bead233354153842956d92ba51eb27946cd69ff07d5dad"]
  - id: ley-de-faraday
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una bobina de ${{N}}$ espiras de ${{A}}$ cm² está perpendicular a un campo magnético que pasa uniformemente de ${{B1}}$ T a ${{B2}}$ T en ${{dt}}$ ms. ¿Qué fem media (en valor absoluto, en V) se induce?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"N":200,"A":50,"B1":"0","B2":"0{,}6","dt":30}
        answers: ["sha256:27cc5cb43b42d53b4bb589cc553727296d18a242b2d96dba3b47c6eb6d79913b","sha256:d803a0f574fd0fbf42753135df5195982a1ec335a72b6e12ba573cfe63bc45ce","sha256:edd3d684c5d21acd747b10fa4746f107c33d24687e2b5d2e6e7124cbfa3445f8"]
      - values: {"N":50,"A":100,"B1":"1{,}5","B2":"0","dt":200}
        answers: ["sha256:942e2643f91cc5d12f05383935045f24bef4309b1f5f0caac1a20b6d8fc587e0","sha256:b1f96c9609ed916f7f6380570f9a1669de5db321fab7dfe8b60025bf14b27c53","sha256:5151ad47049e70710fb1cc3dd39f97851ad5e5d7c1a4a3dcf06a585125d38a8b"]
      - values: {"N":1000,"A":4,"B1":"0{,}2","B2":"0{,}8","dt":50}
        answers: ["sha256:64455639a7601b724b2856d69f92c226b927fc6bb1c18d3633676594db92b349","sha256:696561817ac0abb74ce0d9c7a286ed59078ab30ebe3a148e7c128a2b795726a2","sha256:9d6c2aceec55ef55c97abf2dc8c5b3ceca022f07f314dc6c901d826e161c422d"]
      - values: {"N":20,"A":300,"B1":"0{,}4","B2":"1","dt":10}
        answers: ["sha256:6cf2236eaf5721c63ca49f156314517eb0ba2e64aa7ab290ed7d3de0f917088e","sha256:45306a2feeb15fa862ac0b4d35cda061467da8358df501701d1ce70b2fd2220c","sha256:5dc8cdea7907d298f56c525f6df9296628a2b3f32c7573c9992f1692c56a4ef5"]
      - values: {"N":500,"A":10,"B1":"1","B2":"0{,}25","dt":75}
        answers: ["sha256:df67d44b8605e0c85f445358e9e61a374ef936ecb962aa7d6aa7d0c330ab81bf","sha256:1cb83e9a85931259b1f30da5bba7051bfbfc567b509dd030ca743e98bfa2d647","sha256:1d16701df35827b77ddd33e3a717b5ab0280ff608af2bb46cc14b08981022fbf"]
      - values: {"N":100,"A":80,"B1":"0","B2":"0{,}05","dt":4}
        answers: ["sha256:6fd585b6e8bb89c32da12acfa9216699740316a7735657559e0eec0d440e09b8","sha256:aaffe083376f3681ad815eca129c3c1a1fbf6778d51bf46433611620b4e4aa01","sha256:69b0202409337efb58bfec6b4182212444c508a644515def75af6e444ede0910"]
  - id: fem-de-movimiento
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una varilla conductora de ${{L}}$ cm se mueve a ${{v}}$ m/s, perpendicular a sí misma y a un campo magnético de ${{B}}$ T. ¿Qué fem se induce entre sus extremos, en V? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L":50,"v":"3","B":"0{,}4"}
        answers: ["sha256:b86420cb00e9882af5230eb59f87af49a7d0f9be7732d4049203b98221771214","sha256:44fcc64605001f0fa4dedaad69b8e8067dfdcdb7fa46b1fb2255793c18b97ece","sha256:a45592e7b455bef1825810a7766036824ea31a9bf302a932e629d9eb1417412e"]
      - values: {"L":20,"v":"12","B":"1{,}5"}
        answers: ["sha256:c73b951cb081a30a8f4e898f259e346a6ce2b6c643c633ea69193d529c80702a","sha256:b220dbbb5304307987f4a53359e1f68c5eb69c81bf634b2ee94fd69ff5cd982c","sha256:f97fb52ef4a2aec1d02a6b75c231d3c3f6cf855bcc541220b57f2ccff13ebb49"]
      - values: {"L":120,"v":"0{,}8","B":"0{,}25"}
        answers: ["sha256:e385c5156267dd0d5e83432df13eb169046d1fcf0c46054b41607e584928b199","sha256:ecf74afedf85f6f7400edb29177555c2ebdbc93a3f88af0b0748efa05b01c76b","sha256:8937ee4c1ce736b4d0e70a9b8956a8d2cd98c4b93490c493ca2af1a23b2627eb"]
      - values: {"L":8,"v":"25","B":"2"}
        answers: ["sha256:20c075e3c25973fa93ea647f2108cf6b406647b9c0002f4611ab3613245c541c","sha256:994cfdd55b4329b0959e1ae1c697b9b48c9d446f1199bd875a00ae9101e1873b","sha256:d656783efc73c32f3b7d141de932e5dbf17a205989d4443f8c56b3889859568f"]
      - values: {"L":35,"v":"6","B":"0{,}6"}
        answers: ["sha256:d0bb511c600159849e944cfd18b8cccd94ab5f3702e767121ca6206441e730b9","sha256:992b84532ef7328b22c933814fed132ef7d18b334fb8ca035281f80ceadd562b","sha256:10c531c870c7fbe243c9634762534dde7c891d4f0767c19d98c25872bfca9383"]
      - values: {"L":200,"v":"1{,}5","B":"0{,}05"}
        answers: ["sha256:c0e3826ad400e6fbc5655b90e222e75e5f934dbff9c0c8e6fbd42f3d4fa50d64","sha256:26df615c3c872ac513260a5c4f13cb0fd804e164f1acd9a16751ac0ce7bbc8bc","sha256:9252b54de6d524085dea32f910decdfbc89f7aeaed5b31789517a5ca9e3bbf81"]
  - id: corriente-inducida
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una varilla de ${{L}}$ cm desliza a ${{v}}$ m/s sobre dos raíles unidos por una resistencia de ${{R}}$ Ω, en un campo de ${{B}}$ T perpendicular al plano (resistencia de la varilla y los raíles
      despreciable). ¿Qué intensidad circula, en mA? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"L":40,"v":"2","B":"0{,}5","R":"5"}
        answers: ["sha256:899049b6c62fc5e7224138808f55a2b0c4b82f68695ec52fa600c57710a4ee89","sha256:f2d1f1f52b80c51f57217c5369e4d09d8b12df099975f980300656de07541ce0","sha256:24f6def25e17b0284ece21509309ebaa56364218faba23c12141fb4d3a58e2d3"]
      - values: {"L":25,"v":"8","B":"1{,}2","R":"15"}
        answers: ["sha256:ccfbf3c2beba4d0acc734aa4766717b1a0d4a19ec1db49fc94e1730cf63e1ebb","sha256:6d70e4bac5f507e3f8123c2a594dfde03ed7f599e11e2d806082d795e094c8ba","sha256:e45eae5469010cbe9c2e7539ac1b3fd8e9807e39a449a947c8552c7520cbcd16"]
      - values: {"L":60,"v":"1{,}5","B":"0{,}3","R":"2{,}5"}
        answers: ["sha256:fd1ccec99173fef7f4cd243be869e23d481ce578b5f82054ae3ac288428bbe81","sha256:2597204a14319ff7e2053b7b4851abd468d1d8663ab1869e33e44fc3a7287117","sha256:9ef24383fb200a7a344c8e5085b1aa83e9ef37c8f374b07674c35ce5fc660b82"]
      - values: {"L":10,"v":"20","B":"0{,}8","R":"1{,}6"}
        answers: ["sha256:60484fde324c34723ea4a28c09e74ea560af6a4712ab1fd2a4d1e9e9d4914885","sha256:5800617a34a5b0e92ab3adc8c039c80abfd68dbe2b657b5dc5d5cd817d22d499","sha256:8e8f34d88bb4478620303d354c416072a470c023653faf72378e1a2334da11b6"]
      - values: {"L":80,"v":"0{,}5","B":"2","R":"12{,}5"}
        answers: ["sha256:1eff70c7678fafd85e1ae6b7d95abd26edb1165e14deb18dfd21027c326469cb","sha256:4aa72b829cc54d8f4c75d8f5681483f4cd0c8fe64e779fd728ba9d250cfdcd37","sha256:1fd7715565a75456267944833228d5b901aac7c26b9ac2dbaac55ef8f8d452d0"]
      - values: {"L":15,"v":"6","B":"0{,}9","R":"0{,}75"}
        answers: ["sha256:c1b9d108b15d2bcd3b1c43eaf6bbf7b180185edb83673f16e90ae02033fdb96e","sha256:5c0498f797a3401cb2a6e2dd328b1026290e0c2765cbec9c7df8643e8535ed65","sha256:37e8868e1614309c3791979b96887c1e54ccecac0f7f3e6a07d73f9643e46ceb"]
  - id: generador
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un generador tiene una bobina de ${{N}}$ espiras de ${{A}}$ cm² que gira a ${{rpm}}$ revoluciones por minuto en un campo de ${{B}}$ T. ¿Cuál es la fem máxima, en V? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"N":100,"A":200,"B":"0{,}5","rpm":1500}
        answers: ["sha256:7a790c39878c16a8e0aa845bdac5332ee8c114a201da070c9442fe26eb0c4e6c","sha256:81190ed483a5a3a15aeea9c489c46876442a34ebd979b63334ad675f72c73d65","sha256:4540fb02f1b2b7eae107cc11b90733b0ba9808a5d20e76779b654e4d830c551d"]
      - values: {"N":500,"A":50,"B":"0{,}25","rpm":3000}
        answers: ["sha256:9ca12a02cca84dc4097bb4bc43bfb24822273927187eaf483656c63f4d485ebf","sha256:935d2470cd19ff835bb3d14d4b73d56b60febfdc0ba4dfa16cecbf093f2004a4","sha256:0bbbf4eeef7f0727a7709b05ae063725828fc851e882586086225909b4d85f36"]
      - values: {"N":50,"A":400,"B":"1","rpm":600}
        answers: ["sha256:e689e8514c35df9d81f1b412a0ab30bbf91ac3444a911cc6cd613fc39f58be3e","sha256:30f6f9b3896391577532de0d630cba996d8a7abcf7e4caaafe0f91c9e919f629","sha256:5d0aad5ceb71b227207aa835afb8ff96bdfdd042b23e5e9a33865d5cd25182bc"]
      - values: {"N":1000,"A":10,"B":"0{,}1","rpm":1800}
        answers: ["sha256:79d90deff97c1511766a6e4fd1401cae5982e82ba428b4846a71cbebcb6fcf38","sha256:00e777d276b82676bae7667253c3f7341da12f414b1bbcb5e54e0bbacf09354d","sha256:3bf0b1bf479b8161d89ba37ebc23184db166c2070f0edbfc899db8e3141c172f"]
      - values: {"N":200,"A":150,"B":"0{,}8","rpm":900}
        answers: ["sha256:c5c42313f17a1abf3d78b19bade8e8d45d8d5851c4397ba6e361de4cc6b34bf4","sha256:5c95b7be22c52350caf8f3e37b759e45a1d9b668649d9d3df4e88c4c21dcd0a2","sha256:2bdb98c2c6353ef134a5c32f11c9641cb77e331bbf05d2a8e5a6b7c861aca8d0"]
      - values: {"N":20,"A":800,"B":"0{,}35","rpm":3600}
        answers: ["sha256:732f367a2170c89ef3bf3edb4dbb9f306eeb1ec1750c80bcb73c0defd45f4acc","sha256:951d2037bb74994d454c81357ff2b2fa04220c8a208258a7139a474074649f69","sha256:6a5ee767442511b3842cd1fccb0bb87e1b0c573e90f59f372ef7a6a4a558acea"]
  - id: valor-eficaz
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una tensión alterna sinusoidal tiene un valor de pico de ${{V0}}$ V. ¿Cuál es su valor eficaz, en V? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"V0":100}
        answers: ["sha256:c52154be5eb1a71fc5b98a0d7eae5121b370a00c1f086212f25db67b4572dc0b","sha256:8356726d56c6be493504f995645ea8853a83d535af82dc302f7e40dbe1f754e3","sha256:3952a4c2308cdf2feb213788deff06e65920d0ec36c201938102e358325558df"]
      - values: {"V0":170}
        answers: ["sha256:91e291730c12abea189ce9f157e630235274eaf26684ace8b9a365c6dad27253","sha256:92d71fe71c69f3ad8e5313b56504c192fb2bb9e7b4cee1a84e06d8689f745650","sha256:b9b6f0302db387eef699b868fc80a113f18de7c57025549f1d8d65af10b60717"]
      - values: {"V0":12}
        answers: ["sha256:8ae3fe97bcc5ff84f71174864497025dff71ccf6c3c508c4e9ab6b06d8643307","sha256:a72c7ce0c5ccaf70d6e5dd6e786dcee6ac40cfe9f3e28cdf3709871e026ea5c8","sha256:b3a86ae70281728c61e8cd5288559445483f6522abbb5d44711418cd01774dd8"]
      - values: {"V0":565}
        answers: ["sha256:6f783e7d80d0b4f79a5779547742757923013edbf5668240645cd0bdd9aeaab4","sha256:0749642e2c45602a0837aa903a5740d2ae1fea79b572191e2d2fe27553f97f03","sha256:f62d9f0cb9b6c03c4ce5941a1db65330467b0c7261a290978baf57b9ea172a87"]
      - values: {"V0":33}
        answers: ["sha256:738dd612bdc3d1836f7402f8434ef68a6f0fa3ded0af6a8aa002c4d9344cbd2d","sha256:ac7fe2c7c3a273c4afe2cdd85a6500bf7f95207300f3d221c89c3bb3644b5d58","sha256:afb69443d5ad480e6f2d4c11b93a93ad312aba21585362b4e219edf1c901d8d9"]
      - values: {"V0":1000}
        answers: ["sha256:3d4e7ea06f8d19ed011f13b938a619ee1776a0c198157c4bac223fbddc5512a6","sha256:2cabc5e8ac22115e7a7e5f57dd38c2610591a30f1cc0f20312e9c029c4538ece","sha256:87b5fd1e6d24c69222ad71f2aab77d0a1121e1c60ef999c5b7871b19348ea5cb"]
  - id: transformador-tension
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un transformador ideal tiene ${{N1}}$ espiras en el primario y ${{N2}}$ en el secundario. Si el primario se conecta a ${{V1}}$ V eficaces, ¿qué tensión eficaz hay en el secundario, en V?
    variants:
      - values: {"V1":230,"N1":1000,"N2":50}
        answers: ["sha256:3012a421e52094ffa5042a7b9c110ba9a2ff02799e75e68fd266fea2c2208f07","sha256:59665622fb47777d072945671589b12d5bd597ef8e7e17207d4b0481666d0332","sha256:afedd7da2cd3693b6e4927a41faa31a7f4337931c6e1cf83c2434cb1b7c026f1"]
      - values: {"V1":400,"N1":200,"N2":3000}
        answers: ["sha256:9603af2ffc6e72313d9766bbde2d5db20cad5544f5702491c5936aae39677968","sha256:d99acee0266f298c175e092cda75b0a2e98ed6baee0812825bb2389bafd6d053","sha256:1d684f1ba70b4a30a612e35e18903dd92695b96505220a6d3b298140166fd115"]
      - values: {"V1":120,"N1":600,"N2":25}
        answers: ["sha256:7b87dd5bfbc222a6756d13ba6a705d1726276ccd1542109ca9831fedb4ab5af7","sha256:f1c3a8c4229e24bc623ad0bbfa5bc6abf493aad88f0e55aff86b686c5f5e4d49","sha256:a18eda5b160c16ee5bd18dfc348af3542dec072ff29345888e2c1b189ad90a8c"]
      - values: {"V1":15000,"N1":6000,"N2":160}
        answers: ["sha256:7356c81c4dd5b4974ecec41a0ed3f20873331cf65900784c7986e07a0a8a77a6","sha256:b7afd95e4b75ed9192e4948cdeae0b5c1db06754fc44bb164c39a2ca55d6ae00","sha256:3a3b39b1437935505148c914e14fe517a937386f5b71b528b9c7b36c6986ce6b"]
      - values: {"V1":230,"N1":2300,"N2":90}
        answers: ["sha256:0a243dc1ae9e2509f3f24f552625bda2b1f977ecea7ddd23210bd13951ce4e42","sha256:56007be5e7c7067e5e70571be9ebf9a311a000d1c93d8056c81a5bd9d40a858e","sha256:900236b282906035e472737dbbc02e2a339375c69b0bb93f7305df62790f3c85"]
      - values: {"V1":24,"N1":100,"N2":750}
        answers: ["sha256:0f3fcff8cc02d4856235bc90fe2e6b0a6348b34199f5c1f59c3c8e114a94f56e","sha256:26968fc7f63481d18c96d59362c50fe1e65639d99e6be94d86a87462b83020d9","sha256:a415db50bd6e96cb720a5251afa2f75d2323a8bf87435c738c0078ff88d675db"]
  - id: transformador-intensidad
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un transformador ideal reduce ${{V1}}$ V a ${{V2}}$ V, y el secundario entrega ${{I2}}$ A. ¿Qué intensidad circula por el primario, en A? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"V1":230,"V2":9,"I2":"2"}
        answers: ["sha256:2228b37c206f32520a72ee4795788ca47c2005623f3dc96a7974008b08727232","sha256:9b540b034ee760b0c1b5435431a22390b16144cfaa44c0eed19d5c59faf3f878","sha256:fbc7cf8ebf02c004535b5485deaf6b61aff6bccbe6075c221c513e564d48b8e4"]
      - values: {"V1":230,"V2":24,"I2":"5"}
        answers: ["sha256:2e0255143d9f13e0b3b8d7fd6bd409679fd3cbdfa3d9e178849d664717144634","sha256:503fbf2e82528a64ff258cded5d04c94e014f0f3dc534666cb96368ceb8d8cb6","sha256:7424b183c0508431d8fc23102adb6ba644f0671984f4773216221c97dfc17aa0"]
      - values: {"V1":400,"V2":110,"I2":"30"}
        answers: ["sha256:48cb5115390b7d552254a51c3734ca98e57731123e296198e67bf89d4ddcd54e","sha256:158781abb0f7a6175766c3730512dad7670adb88666b7e389b7f27ff8e56b66b","sha256:52ebfc1df6b5c254085e2147e11adcc29f5c16ceb581a49d0df9af41a960d0e7"]
      - values: {"V1":120,"V2":6,"I2":"1{,}5"}
        answers: ["sha256:133c80315969b4b0f21104f97ec38151153ce182f71fc4abecebe47ab80f192d","sha256:6ee03a6511a4773b5dd85c1bec2e010284d6a5d8deb999a0935ad2f68f075e2f","sha256:442e2b53decbb7f9625d06a4ed59b4256214bf2fb2570830f47113356dcacf19"]
      - values: {"V1":11000,"V2":400,"I2":"250"}
        answers: ["sha256:57e9fcaea67313dd5f9bdff8a806255840598b412d1adfd51be6ce564094bae3","sha256:5a0f113dd8cf275d2b5d71f2a4dfa7b48674faf48b073361f9879361d4d1082d","sha256:ed64ee3327169ab6bfdbacdcef5fbfe423d705d61e28859112d9e6463eede601"]
      - values: {"V1":230,"V2":5,"I2":"0{,}8"}
        answers: ["sha256:7c5786a3e5b58ccf94b709764db3ab22045ab75b39f7ee5a8299d97af6151688","sha256:291dd4c94bbe71deb3d38d3733609c40bb30868752b607503ed1f50aa2b96826","sha256:289b924bc36d78d2fe74630f3c37068f5cb8dcd8b6b5f9b29f81beb77c62ffe7"]
  - id: perdidas-en-una-linea
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Se transportan ${{P}}$ MW por una línea de ${{R}}$ Ω de resistencia total a una tensión de ${{V}}$ kV (trátalo como corriente continua equivalente: $I = P/V$). ¿Cuántos kW se pierden por efecto Joule?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"P":10,"V":20,"R":"5"}
        answers: ["sha256:4b8f9021818fba33e47c1a54065f7a1c5f63db9b5e10750fb1313aae3ad3ee70","sha256:76233c64d6ff3060d4b7775190e34e0db14f2663ff9dfb659c8d36d48c8901b8","sha256:a6701c23bb93a9bbeabb300738a67e54ab9abd2abcdc5d142328da3a63f9320f"]
      - values: {"P":10,"V":200,"R":"5"}
        answers: ["sha256:b77492ca201a9b2fa472f5fa079dd7f01543a252ac966322f069160cdaf0f68b","sha256:a6c537ff8eeaa5677c816cf61a36d60b55c440e0fa8fafebdda82dc39085b683","sha256:088942a2c09c408d0cd1e5054635e28d8a29149f7936f7f86d0cc6f3e290baf2"]
      - values: {"P":50,"V":400,"R":"8"}
        answers: ["sha256:2aa55e14b72117223f0aa8c359f8a28fd46549e5fb2327f904a7d5fe274e27e2","sha256:9c25c533f0534289a056addc9c0fd0e7d7662d8e9f47ef7207a7a63ff8f2ef86","sha256:0d5a3f78b14d78ce40cbf3a4a2b56e4de34a9f9f460d74dd57494e48751ce04d"]
      - values: {"P":2,"V":15,"R":"1{,}2"}
        answers: ["sha256:5c833bc7b46f2bb35e8fe230dc7ad837db4eab5db44a99c75afe50853793048b","sha256:b401fd9ac055f4c5f1c12b6404afcbb4b8097d581caba3bd7b8e14eda8e536ad","sha256:61a22c5764dccbf4ac74b60747aa4b61585bc8beadbd59ea27cdc293b2ec1614"]
      - values: {"P":100,"V":380,"R":"12"}
        answers: ["sha256:21a683a973113d0a48d6c434f1b2dfe0a367ee1bd0859ee9f48bef35d263ea49","sha256:fee18c1be70ad57409ee6674b9637172afa97bba7a8af6459dc40c8f577e84c2","sha256:bae79032dea3d87b0b38bdde212b1ea32e35e772a63c86f0c9323fc730b23d8f"]
      - values: {"P":5,"V":66,"R":"3"}
        answers: ["sha256:a0f8da7b6c7d147ce5bea062243963a7a85d3bfb1866e48c4d0f2eaaf3ac70be","sha256:f016b9e4543b5235545c54c05e25040f5d6bf6a4ead4bb89ed6defa0db8208cb","sha256:b5024cb1a39f2dc961a7635c983b122587baf042d566f4e6355b8e6761847e32"]
  - id: inductancia-de-un-solenoide
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la inductancia, en mH, de un solenoide largo de ${{N}}$ espiras, ${{l}}$ cm de longitud y ${{r}}$ cm de radio, con núcleo de aire ($\mu_0 = 4\pi \cdot 10^{-7}$ T·m/A)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"N":500,"l":20,"r":"1"}
        answers: ["sha256:9777c3b5ee6b414b0197aaf13302e550f7c198ddca0b90c5028bedbabc464d11","sha256:349e2ac7ad0847092fdd56df9ba8ddc1e8ef64c82f47996c818126d6f27bfd98","sha256:a63134602f895231342f113debe44fca2b8d5bc43fb21a2b8688824c33339a51"]
      - values: {"N":1000,"l":50,"r":"2"}
        answers: ["sha256:44fdf6da131f6ed38ce365c9d132b5c32dd4745071c8e02f638673dc681f26cf","sha256:d9634b66b302e09a8df7735ef00ab31aa1bcbb01dfcc4e902af83e23ce4f5144","sha256:8e98b9641aa39b6d9bd4229ec5bf3d1f7a290b3f925e1971c51f41634b23ceaf"]
      - values: {"N":200,"l":10,"r":"0{,}5"}
        answers: ["sha256:dd3d518b1b0a24f7048f3bd5ce92ddf8feae117962d2732d0eb3c9008b2a9cd1","sha256:eeeb62f2497bb806c66ac597dd4ad1772f591fa0b6b26f680641aff4a71fc96b","sha256:ba062841e9f7406d093bfdd5ad1e29fc76018a750cc536ca8ee3faad81442d0e"]
      - values: {"N":3000,"l":30,"r":"1{,}5"}
        answers: ["sha256:898942171e27243f3b6a8e18dbf3bcac6e63c8e729ec989292d3d5deaab531d5","sha256:e078c39248561670cfc2a09919bfa0d2d65a6e3b747533b0dedd6097fba2d8eb","sha256:d64921ea8d564b3054ed8b95af9377227cb3f2e0bb707afcf1312d62b7cd1ff1"]
      - values: {"N":800,"l":40,"r":"3"}
        answers: ["sha256:e8e276220b02f03f29bf6a967486f669e5c6b7b2129b24d7d9db53c9ce48523c","sha256:7c52a091db17367190d3091a6878b7ce0acd803e7986c1c0cd45fb8125aa608d","sha256:f7c06454f6570640255583fa2e5bde18ebf1b7b95e3c56cce3d1d7b09ab876ab"]
      - values: {"N":150,"l":5,"r":"0{,}8"}
        answers: ["sha256:85379450eb080083830f108b9d045639f1a98734311b0c2f01c9f1ca7d6cffcf","sha256:bfa9532343d35b707f3092760b0c13751f1894e8f6f1ce945dd0627681a41182","sha256:32cbbeb0aec34423de29d8c0e026abec4f2a8d4a43ba3c8b13a009d9915c1498"]
  - id: energia-de-un-inductor
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánta energía, en mJ, almacena una bobina de ${{Lm}}$ mH por la que circulan ${{I}}$ A? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"Lm":"50","I":"2{,}2"}
        answers: ["sha256:22bde66bcdd52382731328d1d254ffd077d887f33443c13f25e15d059c97e5fa","sha256:796488d8e38dfef9786f5f36ef5b21579865d9a5eebac2aa13d601c87d923557","sha256:27ce7cd8a71e6a5e5828a26df4bd1996bd2106f32178a149662e3a6a6171a483"]
      - values: {"Lm":"200","I":"0{,}5"}
        answers: ["sha256:96e0ebdb8b3538d3b48d6bfb0e6791aca53629f6e130a8ad62102c198f6efebf","sha256:6d7443457dc120bef7740a31edbb405576f8ae5629036b7e2aae37bc2e046b8f","sha256:fedce531cce2c400d7706682f0a696acf8933296f08644d84081e244837ce12d"]
      - values: {"Lm":"10","I":"6"}
        answers: ["sha256:fd62135d2047bc6b68aef89db4e17c88947a970e0d290ae7e78eb4f978b13d4c","sha256:1e108461027870c756d4fc7a98aaf0dcf4b61d91c4dd58c03551e89b5336531b","sha256:2b328573343fcd5bb6ab5c59a00794c98b003e2de49783eff9f12928105cde38"]
      - values: {"Lm":"1{,}5","I":"20"}
        answers: ["sha256:56b2359a6722698a788b76d345e412453702bc9e0c64b139a6bde271313de5ff","sha256:eaac0c71dd94a772e0dbb4007932c71ae74b137a742fe158e64e6fa4b27ccdfd","sha256:2aea3389aaa8a98f19a5c9a48d40afaf6dc96e4b6203519ec61ff036b442d29f"]
      - values: {"Lm":"500","I":"0{,}3"}
        answers: ["sha256:7467be8fd5acd2def5499164a0feeab770644d74337f6b7c407039fdc13cd1ba","sha256:8b6cd2139205056dee0b0989796361709f8d7e7acd2d2cbf73849baa66a8366d","sha256:9c8c266de2d9a486324eaa3d31950e580ddd6990d819827523be1736ac4514c0"]
      - values: {"Lm":"80","I":"1{,}25"}
        answers: ["sha256:aff7af3baf5ccad397add5a0e40755db1af639730e0466a85d19fa859843ee3d","sha256:22158babc75bb6e0d00133b53e443fa89e4ac9fdace8e8711e032b9e6e5ad228","sha256:a00ecb95b3d179c68f06a411f2836b2dce006b52fc190ce64f9792c1777bbb99"]
  - id: induccion-electromagnetica
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Enuncia la ley de Faraday-Lenz y explica el signo menos con un imán que se acerca a una espira. (b) Explica por qué la energía eléctrica se transporta a muy alta
      tensión y qué papel tienen los transformadores. (c) Explica por qué un imán cae muy despacio dentro de un tubo de cobre.
    sealed: "gz64:H4sIAAAAAAACCn2Uz44bNwzGX4UY+OAdOD7s0UUOAboBUiyKRQvkkkkAWqIdJhpqQklGvYt9mBz3kEPRR/CLFdT4z7gIerMlm/z48ffpqUkxlMxRmlXTtnO8aVu4R9hQDyy+OPYIJFAEHKsrnCNQAt4WDIDQk8QEAUFxYE+P4KLAt0LgsF8zAgXYhPIlQo9bObxkdrFehwiYFXdMCVcw67odKg2JQxR4Da9+77qNonvqul8pZOy6h8/8fPoG+Xm2hLsAibcSjxLmbRtoD57gnuSxbW9MPTscuyG4qMokmTo5j+WUsA6G/TDKattEEIcoBBjGGWLbWtU6xQoS20hDDBEkaia7KgLcH74LJAJ0pA7ByiJQGlhxcTEBS0+ScQH7K0kXo12UHZPVtXtUtPrhVOm4h0n3b4U6URooVMFVxhL+ZNgUUrQjpd3hJVUNU5GBFPXwAyFZsb2dmhv1iIR0ax/G3oIel5100rbz9UhHguHwop49JtMUYgKH60AJUhSYvft0+8dsCQ+m33zoOfUIQ8wkjhFmD/Aa3r+bLUxfX0LmIbBDtWaZJPHhHxtSYfZ1Zmcs9dSjN5med+wJSLJS/YV5ORG0OF99ujURUYFStH9SoB1eNUFwtoCYbNSv72FAxU4oQFaUNFSLqzdr/FLdt06prClldByFEuxPBtS/bKL26KNSrbhGVY5LuP/JdfV9U8TKoNTYXHhoWwyZVLBtYS7kKHHGuvuRox0qm983i+pv3VMCxccqyayz70fylTxQ6uRY8rRKZ6t8Y5CTTvD4jI7G+jrh1uQbR9bKoUdA4RAiePOqrOMvZlKlmCZzJJh7grexOCwh35igxVEdTMK6qOgdYzjKPqXQVpQK9HHHfd3UCjZKZljNx+GHx6W9VidkOzlRFirS5ziZLAzGgthYLq61HoayRYXK04V7x+NThUu4SzXvyuJ44FitjqmKiGnyqFVnstKIRB8l4+Fv20lJmJbNotGyVnbN6sNT45QzKcdm1dxJqZF4i4oe96/MDkPqr5oIa51IMvt4zOLPn4zz9qzRUAzoZnX7vLhq9VtJmTfHqhO+7ZXIk0xYvatAHfNssgIMOFA4ufAfpv+v+91lorpAP7IzMncFfzqPlsZnckLKdYePz/8CtXi3570GAAA="
  - id: r-weber
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué unidad se mide el flujo magnético?
    options:
      - |
        Tesla
      - |
        Henrio
      - |
        Weber
      - |
        Faradio
    answers: ["sha256:5ba745f6518ee059e3275727458859caa5d37b8407d93ecaecdbc3489beca774"]
  - id: r-iman-quieto
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Un imán está quieto junto a una espira quieta. ¿Qué fem se induce, en V?
    answers: ["sha256:6da1d0a783252e833e8b09d6c1cc9486bd1492b9adf8bffa585a2276a25ced5a","sha256:d935c5a1e53f6aecf7a0cd83a9e01397e26f76f2568c14c91c9502efeb5973e3","sha256:41e6e5b754cc345d929d339a6ea14eb66af5881ada8f1544ea301364c5b917ef"]
  - id: r-lenz
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué dice la ley de Lenz sobre la corriente inducida?
    options:
      - |
        Se opone a la variación del flujo que la produce
      - |
        Refuerza siempre el campo externo
      - |
        Va siempre en sentido horario
      - |
        No tiene un sentido definido
    answers: ["sha256:b80133eef7fdc89a23163f19db9b7da72fa8c0d69d36345e58fa5822c1b18bd4"]
  - id: r-transformador-continua
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si se conecta el primario de un transformador a una pila (corriente continua), ¿qué tensión aparece en el secundario?
    options:
      - |
        La misma que en alterna
      - |
        Ninguna (en régimen estacionario)
      - |
        El doble
      - |
        Depende del número de espiras
    answers: ["sha256:a0d8c8599577dcf97f48aa46ef97a1401d8be4cfe6cafac7f059bae9868bbfd2"]
  - id: r-doble-tension-perdidas
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica la tensión de transporte (misma potencia y misma línea), ¿por cuánto se multiplican las pérdidas por efecto Joule?
    answers: ["sha256:3fe14d30aa03c735b5e6ade10f9c46b68b346ffea89dc153667cfa6d17464e56","sha256:8c050eb96d02550981f19b3eba7f678441a111d37798ed5c01ccc9ef5d2e8c8b","sha256:68dbb0748e6cedb102844a4ffda50cdf9f511f8929a597d4f477f454d2a7faaf"]
  - id: r-doble-giro
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si un generador gira el doble de rápido, ¿por cuánto se multiplica su fem máxima?
    answers: ["sha256:fe4f111e4e246ea108076be5e333feca899068355d29d28f3b5c7ba63e25163c","sha256:cef6806a4bcba7f00480dcb1e7e5e09fb75c0f8edd689bf8e0c5e6a233242fb7","sha256:26f84779bb2efcd3bd1ceb5400d5f75dc2cfb9a54bfbd7e18de10a64ac57291b"]
  - id: r-inductancia-espiras
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica el número de espiras de un solenoide (misma longitud y radio), ¿por cuánto se multiplica su inductancia?
    answers: ["sha256:cb6c6b2e1842ff6f83e92597ff0600c94ea1aaf00292fda448120afa2ba58c46","sha256:8b6a4d993f0a0a6a912726e2175ec6a65190c8f08fe3a7914ffd0681b5f165f2","sha256:aa4cc84c551eddcdeb500720e4f4445bdb59a48c4ae108aff5e0ef641e495f15"]
---

# Inducción electromagnética: flujo magnético, leyes de Faraday y Lenz, fem de movimiento, generadores, corriente alterna, autoinducción y transformadores

Si una corriente crea un campo magnético, ¿puede un campo magnético crear una corriente? Faraday lo buscó durante años y en 1831 encontró la respuesta: sí,
pero solo cuando el campo **cambia**. Ese descubrimiento movió el mundo: casi toda la electricidad que usamos sale de generadores que giran en campos
magnéticos, viaja por líneas de alta tensión gracias a los transformadores y llega a casa como corriente alterna. Las placas de inducción, los cargadores
inalámbricos y los frenos magnéticos usan el mismo principio.

## Objetivos

Al terminar sabrás:

1. Calcular el flujo magnético a través de una superficie.
2. Aplicar las leyes de Faraday y de Lenz para calcular fem inducidas y su sentido.
3. Calcular fem de movimiento y explicar las corrientes de Foucault.
4. Explicar el generador de corriente alterna y usar valores de pico y eficaces.
5. Explicar la autoinducción, la energía de una bobina y el transformador, y por qué la energía se transporta a alta tensión.

## Qué debes dominar antes

[[fis-campo-magnetico]] (campo magnético, fuerza sobre corrientes, solenoides) y [[mat-funciones-trigonometricas]] (la función seno como función del tiempo).

> [!question] Test de entrada
> 1. Campo en el interior de un solenoide de $1\,000$ espiras y $50$ cm con $2$ A ($\mu_0 = 4\pi \cdot 10^{-7}$ T·m/A).
> 2. Potencia disipada en $10$ Ω con $3$ A.
> 3. Valor máximo de $5\sin(100\pi t)$ y su frecuencia.
>
> Respuestas: unos $5{,}03$ mT; $90$ W; $5$ y $50$ Hz.

## 1. Para qué sirve

- **Energía**: generadores de centrales (hidráulicas, eólicas, térmicas, nucleares), alternadores de coches, dinamos.
- **Red eléctrica**: transformadores para elevar la tensión en el transporte y bajarla para el consumo.
- **Tecnología**: placas de inducción, cargadores inalámbricos, micrófonos dinámicos, guitarras eléctricas, lectores de tarjetas, detectores de metales.
- **Electrónica**: bobinas y circuitos de alterna ([[ing-circuitos-dc-ac]]).

## 2. Flujo magnético

El **flujo magnético** a través de una superficie plana de área $A$ en un campo uniforme $B$ es $\Phi = BA\cos\theta$ ($\theta$, ángulo entre $\vec B$ y la normal a la superficie), en **webers** (Wb $=$ T·m²). Mide
«cuántas líneas de campo» atraviesan la superficie: es máximo con la superficie perpendicular al campo y nulo con ella paralela.

## 3. Leyes de Faraday y de Lenz

> [!practico]
> Conecta una bobina a un amperímetro y mete un imán: la aguja se mueve. Déjalo quieto dentro: vuelve a cero. Sácalo: se mueve al revés. Mételo más rápido: se
> mueve más. No importa que haya campo; importa que **cambie** el flujo a través de la bobina, y cuanto más deprisa, mayor es el efecto.

- **Ley de Faraday**: la fem inducida en un circuito es proporcional a la rapidez con que cambia el flujo que lo atraviesa; con $N$ espiras, $\varepsilon = -N\frac{\Delta\Phi}{\Delta t}$.
- El flujo puede cambiar porque cambia $B$, porque cambia el área o porque cambia el ángulo (girando la espira).
- **Ley de Lenz** (el signo menos): la corriente inducida circula en el sentido que crea un campo que **se opone a la variación** del flujo. Es una consecuencia de la conservación de la energía: si
  favoreciera el cambio, se obtendría energía de la nada.

## 4. Fem de movimiento y corrientes de Foucault

Una varilla de longitud $L$ que se mueve a velocidad $v$ perpendicular a un campo $B$ tiene una fem $\varepsilon = BLv$ entre sus extremos: la fuerza de Lorentz empuja sus cargas libres. *Ejemplo:* $1$ m a $1$ m/s en
$1$ T da $1$ V. Si cierra un circuito de resistencia $R$, circula $I = \frac{BLv}{R}$, y la fuerza magnética sobre la varilla la frena: para mantener la velocidad hay que hacer un trabajo, que se convierte en
energía eléctrica.

En un bloque metálico que se mueve en un campo (o en un campo variable) se inducen corrientes en remolino, las **corrientes de Foucault**, que lo frenan y lo calientan: frenos magnéticos, placas de
inducción, detectores de metales. En transformadores y motores se reducen con núcleos laminados.

## 5. El generador y la corriente alterna

Una bobina de $N$ espiras y área $A$ que gira con velocidad angular $\omega$ en un campo $B$ tiene un flujo $\Phi = BA\cos(\omega t)$, y se induce
$$
\varepsilon(t) = NBA\omega\sin(\omega t), \qquad \varepsilon_{\max} = NBA\omega :
$$
una **corriente alterna** sinusoidal de frecuencia $f = \frac{\omega}{2\pi}$ ($50$ Hz en Europa). Los **valores eficaces** son los de la corriente continua que disiparía la misma potencia media: $V_{\text{ef}} = \frac{V_0}{\sqrt2}$, $I_{\text{ef}} = \frac{I_0}{\sqrt2}$.
Los $230$ V de un enchufe son eficaces: el pico es de unos $325$ V. Un motor eléctrico es un generador al revés (y al girar genera una fuerza contraelectromotriz).

## 6. Autoinducción y energía en una bobina

Una bobina por la que circula una corriente variable induce una fem en sí misma que se opone al cambio: es la **autoinducción**, $\varepsilon = -L\frac{\Delta I}{\Delta t}$. La **inductancia** $L$ se mide en **henrios** (H);
para un solenoide largo, $L = \frac{\mu_0N^2A}{l}$. Una bobina almacena energía en su campo magnético, $U = \frac12LI^2$ (por eso al abrir un circuito con una bobina puede saltar una chispa). En alterna, una
bobina se opone más a las frecuencias altas y un condensador, a las bajas: con ambos se construyen filtros y circuitos resonantes (sintonizadores de radio).

## 7. El transformador y el transporte de la energía

> [!practico]
> Un cargador de móvil convierte los $230$ V de la red en unos pocos voltios. Dentro hay un transformador: dos bobinas enrolladas en el mismo núcleo de hierro. La
> corriente alterna del primario crea un flujo variable que atraviesa el secundario e induce en él una tensión proporcional a su número de espiras.

- **Transformador ideal**: $\frac{V_2}{V_1} = \frac{N_2}{N_1}$ y, como no pierde energía, $V_1I_1 = V_2I_2$. *Ejemplo:* de $230$ V a $12$ V hace falta una relación de espiras de unos $19$ a $1$. Solo funciona con **alterna**.
- **Transporte**: las pérdidas en una línea son $I^2R$; para una misma potencia $P = VI$, elevar la tensión reduce la intensidad y las pérdidas con su cuadrado. Por eso se transporta a cientos de kV y se baja
  en subestaciones.

> [!formal] Con rigor: la ley de Faraday en forma general
> La ley de Faraday dice que la circulación del campo eléctrico a lo largo de una curva cerrada es igual a menos la rapidez de cambio del flujo magnético a través de cualquier superficie que la tenga por borde:
> un campo magnético variable crea un campo eléctrico **inducido**, no conservativo (sus líneas son cerradas). Junto con la ley de Gauss, la de Ampère-Maxwell y la ausencia de monopolos, forma las
> **ecuaciones de Maxwell**, de las que se deduce que la luz es una onda electromagnética ([[fis-electricidad-magnetismo-1]]). $\blacksquare$

## 8. Errores típicos

- Pensar que un campo magnético constante induce corriente en un circuito quieto.
- Confundir el ángulo con el plano de la espira y el ángulo con su normal.
- Olvidar multiplicar por el número de espiras.
- Usar valores de pico donde se piden eficaces (o al revés).
- Creer que un transformador funciona con corriente continua o que «crea» potencia.

## 9. Resumen

- $\Phi = BA\cos\theta$ (Wb).
- Faraday-Lenz $\varepsilon = -N\frac{\Delta\Phi}{\Delta t}$; la corriente inducida se opone al cambio.
- Fem de movimiento $BLv$; corrientes de Foucault.
- Generador $\varepsilon_{\max} = NBA\omega$; alterna; $V_{\text{ef}} = \frac{V_0}{\sqrt2}$.
- Autoinducción, $L = \frac{\mu_0N^2A}{l}$, $U = \frac12LI^2$.
- Transformador $\frac{V_2}{V_1} = \frac{N_2}{N_1}$; transporte a alta tensión.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué hace falta para que se induzca una corriente.
2. La ley de Lenz y por qué se cumple.
3. Cómo funciona un generador de corriente alterna.
4. Qué significa que la red sea de $230$ V eficaces.
5. Por qué se transporta la energía eléctrica a alta tensión.

## Siguiente

[[fis-electricidad-magnetismo-1]] amplía el bloque con las ecuaciones de Maxwell; en la física moderna, el tema `fis-relatividad-bach`.
