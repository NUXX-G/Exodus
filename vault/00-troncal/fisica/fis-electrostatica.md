---
id: fis-electrostatica
title: "Electrostática: carga eléctrica, ley de Coulomb, campo eléctrico, potencial y energía potencial eléctrica, conductores y condensadores"
area: fisica
trunk_level: 3
prerequisites: [fis-trabajo-energia, fis-vectores-movimiento-plano]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulo 5: «Cargas y campos eléctricos» (carga eléctrica, conductores, aislantes y carga por inducción, ley de Coulomb, campo eléctrico, líneas de campo, dipolos). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/5-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 2 (en español), OpenStax (2021), capítulos 6 («Ley de Gauss»), 7 («Potencial eléctrico») y 8 («Capacitancia»). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/7-introduccion"
  - "C.-A. de Coulomb, «Premier mémoire sur l'électricité et le magnétisme», Histoire de l'Académie royale des sciences (1785)."
hints:
  - "Concepto: la carga eléctrica es una propiedad de la materia que se conserva; cargas del mismo signo se repelen y de signo contrario se atraen. Una carga crea a su alrededor un campo que ejerce fuerza sobre otras cargas, y un potencial que mide la energía por unidad de carga."
  - "Herramienta: Coulomb F = k |q₁ q₂|/r²; campo E = F/q, de una carga puntual E = k q/r²; superposición (suma vectorial); potencial V = k q/r (escalar, se suman con signo); trabajo del campo W = q (V₁ − V₂); campo uniforme ΔV = −E d; condensador C = Q/V, plano C = ε₀ A/d, energía ½ C V²; paralelo C₁ + C₂; serie 1/C = 1/C₁ + 1/C₂."
  - "Documentación: OpenStax Física universitaria vol. 2, caps. 5-8."
exercises:
  - id: ley-de-coulomb
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Con qué fuerza (módulo, en N) interactúan dos cargas puntuales de ${{q1}}$ μC y ${{q2}}$ μC separadas ${{r}}$ cm en el vacío ($k = 8{,}99 \cdot 10^9$ N·m²/C²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"q1":"2","q2":"3","r":10}
        answers: ["sha256:2aaf5a2e731b2134e14b273b92d49cb4c64363e892e261ac1a503b18096e639f","sha256:fbffb8c782b95d9640e3d99026a7e5fc78e9b25e0b78336dd152b0199f505b44","sha256:8c1cd3bbc9232bed6e42523fc9310fa43b99fe3959b1a0b7b027d623c29cb175"]
      - values: {"q1":"-5","q2":"4","r":30}
        answers: ["sha256:d98dbae054acd270449595850257640262be007146992d16e53a674d08f67d10","sha256:55d4417e023733c65d39f825ff7ef797e4b22dfb74a75a1cda5944bc37040545","sha256:ce6c4d0430d7767c0627bf31dd81af668492b80d65a586904defd96e62aa1d27"]
      - values: {"q1":"0{,}5","q2":"0{,}9","r":2}
        answers: ["sha256:75a6fe7a451c44eefd3ffc1cb245515c8fdb1f849888260fb93249a75dda2d88","sha256:7de4697c0285e3bb90d7c5b23a91c242062989757b9a33133c43db0cc8060b46","sha256:eb3cb487301e55a4bf7108bb7a4c69ff66643d7448e203b71e4bc22e6bb8012f"]
      - values: {"q1":"10","q2":"-10","r":50}
        answers: ["sha256:211b96ea7f288e149666b2a84c323ba65e1bfebeb63cde3cb736c0aac6f6b9a4","sha256:8318ef74930d0b5de30582174cf9113fa2d0fccde9ff8a49df6c42334ee65c2d","sha256:f80499f8c9dac7366ecf1420b89c88fef3fdb01bbe3815eb72afc7ddf359201e"]
      - values: {"q1":"1{,}5","q2":"6","r":25}
        answers: ["sha256:acd2c3d916b2dd7f6d12a70d7e92eaede3bae6183f93d22cfa58d67f5ce15910","sha256:5261a820a5daaa63ced40eef4fa6463363ac3039038a48ea833c82b51a54ae65","sha256:5bd3d9c66e610e59279d7c293131ec306f2439029fe6a65638f41d32e16cc988"]
      - values: {"q1":"-3","q2":"-7","r":15}
        answers: ["sha256:b5034e2a4cd204973dca54112199b04088194aefdd6081f4e8dc1a2dc21ef3e4","sha256:1968ab000185a72df73bfa24e515f83df3f274c1bfa6757ef34c13015b3616ad","sha256:0b19cc79dad71e9c869b720fecfaf00147a0232329825bc0fdf0586e4de3d97a"]
  - id: campo-de-una-carga
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto vale el campo eléctrico, en kN/C, a ${{r}}$ cm de una carga puntual de ${{q}}$ nC ($k = 8{,}99 \cdot 10^9$ N·m²/C²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"q":"5","r":"3"}
        answers: ["sha256:500bf7dbc2e585798ee27ae22825351a0e9a4c5fd98e8efa00ee3d21ab8867fa","sha256:816fe03547260e43cfc568b3fba080ec8cb39c47e550d3bfb47dec868f725b24","sha256:abdc16d0d2f3a9e1cfdc218395078561ae4e2342b2cde82049f20e907adc12e8"]
      - values: {"q":"20","r":"10"}
        answers: ["sha256:37083906fb4d04af6fd0338dfaea8ff310395a581a98cbc7237f41935e70f00d","sha256:1e30caeb20a75f4a9aa8f68967475af2ae89642f64b4dd8fba2fa5a16bfc4792","sha256:185f133afe87e2951da39ecaf7b4b75c5e8abbefbb84d41c0dc977ad76b95646"]
      - values: {"q":"2","r":"1{,}5"}
        answers: ["sha256:334fd3a7597e3e7ab6053f2195db2843d5d4d62b5563589627651ab0780c6822","sha256:85976e9cf96ad6bd75ce6a9ab2503184d766ba6082237e6ef8578113ebba5def","sha256:0a514058897b46ef9026bc53c7494c8bdba90e3f160c2ba4a0b2c9eff88357d0"]
      - values: {"q":"50","r":"40"}
        answers: ["sha256:1f68696a12ce5163aed42d1cef474edd340a0bfffa8d1ed6f53bd43b2fd06822","sha256:7faa9158c9ef9bcbb1231593a6bd9a8fbbc3e708018784a514b231ae5cbbc64b","sha256:b77d551910de4bb0e7819c7acd648cced917b282723f36e954a946431aff2d58"]
      - values: {"q":"0{,}8","r":"0{,}5"}
        answers: ["sha256:e5f6eafa0891b0230c342b891bca0b47ddc8cb3e59825d067f2f485fe8f253ed","sha256:cfa202198412687e28def10883c7682b0e6cb3fb3a895af3a3338120fda5993b","sha256:a240b9eca44552e4ad8d25c2facffa1edd33ef7b87d49cfb5ddc49639a2eb18d"]
      - values: {"q":"12","r":"6"}
        answers: ["sha256:c4a9b604adf45653c28892640712f4937a1e813529c404ca5df094ed1ad9accf","sha256:6f08eb96f3cf49234fcefe2eaf979afbf87506addd9f325f8277005c534af767","sha256:f05edd87d66ff41b2f57c209c9134db420bf9dfdf52b6025c19dcd9e36d84c25"]
  - id: campo-en-el-punto-medio
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una carga de ${{q1}}$ nC está en $x = 0$ y otra de ${{q2}}$ nC en $x = {{D}}$ cm. ¿Cuánto vale el campo eléctrico en el punto medio, en kN/C, con signo según el eje $X$ ($k = 8{,}99 \cdot 10^9$ N·m²/C²)?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"q1":4,"q2":-4,"D":20}
        answers: ["sha256:3872f90a51298dc1e1eb7356934ca7d0200a912824f8dc2590c11b2cd438ee35","sha256:bd49d4c482d26b120bac4eff1514a60cc1cb5bf160d3da805d4237d2c8ea72cf","sha256:7759f3547d6d14e17167e0955f56d1c66ca231f4e2c92d82d0d3b3417826a192"]
      - values: {"q1":10,"q2":2,"D":10}
        answers: ["sha256:e6ad6e8088cf238a77d7d4c991bc625fcc1cec9f70b3d65bd649c3f87efb2c94","sha256:12157f81a6cb5ece107a825816bae92de5669325f9978108bee0f1ac69945eb2","sha256:5f296e60c911b23699f45f12b4bd4ab6a7437516a081b49655569173917040bb"]
      - values: {"q1":-3,"q2":6,"D":30}
        answers: ["sha256:fdda9a5bcc490f8d1bcb10c48212cc4d61761c47006eae1ecc58217f8c4cc23a","sha256:6c6e8a2a63c765e7a081c8d0c184987c4db323c90959036be1dfab33f433b36a","sha256:c8c3274913d236adec4e1b256b15c9b4883653409eec9aa48ec78c467b62d3b9"]
      - values: {"q1":8,"q2":8.5,"D":40}
        answers: ["sha256:69ada9ae823bbba94dab6b4f769d8d1337c1b7a4761e1a1f84e76791b1bcd546","sha256:dcaebb2d647f0378b6d81719bd8ef7b81077155d785b4e7af1fe4fcfb49dc912","sha256:9cdfbf60d4e3146b2b2502bd6645a23bcad3c4eb088858625c14f39628a9e63d"]
      - values: {"q1":-5,"q2":-1,"D":12}
        answers: ["sha256:5a3a99b84f192e5884117d08eca3755ecf32ff9ff2a1e535a6a1322837bbfdd6","sha256:9914224dd63480a847b77d5c6a1dac7796f2e754fd6e13df672d176606118893","sha256:ba66b1180814bfa9eda344f153e1c8692980ed0c4e6c9373cb37748531ff6829"]
      - values: {"q1":1,"q2":-7,"D":16}
        answers: ["sha256:549f08eb0debe39a44efae07d167419c6204b2f1c01012d4aedd654473babb14","sha256:de0098a5b5c5bf7cbe0e22f1be46783925b93cdaa6da95aaeb5e696c7812abd5","sha256:26b747c38c184af42b297b40376c9266d4e5b72f7cdd421b44a9c1844eb2d294"]
  - id: fuerza-neta-sobre-una-carga
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Sobre el eje $X$ hay una carga de ${{q1}}$ μC en $x = 0$ y otra de ${{q2}}$ μC en $x = {{D}}$ cm. ¿Qué fuerza neta, en N y con signo según el eje, actúa sobre una carga de ${{q3}}$ μC
      situada en $x = {{a}}$ cm ($k = 8{,}99 \cdot 10^9$ N·m²/C²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"q1":3,"q2":5,"q3":2,"D":20,"a":8}
        answers: ["sha256:c5a26b7adfc201b3cd18abff4ea8885ba2d41cbf2edc15e213eaca25b97a31f3","sha256:de01fde96949a46f2a83a454f5bc43c366c61fad691852579efe9ae83f487a77","sha256:b5abd39c7810ed8d534a4f559151c816f042a72b5e14d7128c1786298567b5b7"]
      - values: {"q1":-2,"q2":4,"q3":1,"D":30,"a":10}
        answers: ["sha256:891fc937a558adafb1ae31689e3fa9d4d116b7f0296c7cd9432d4c2493906873","sha256:3032d2835dd6a9db05804e55a3d8d3b2fb2397404f3831fce0d66090e6af5a7d","sha256:90d305c8b0b2fbfe0c88918cf787463985ea3d43a77dbb42f2998acf83a1fcab"]
      - values: {"q1":6,"q2":-3,"q3":-1,"D":25,"a":15}
        answers: ["sha256:7953c125dc03f1ddfa528cce638c024a3bfa666ec84a5791b57f3ae38369f635","sha256:9eb41178c42d6d96698fe0aa231150476a77af046978bf3a5c53dab2589cff57","sha256:9cebdd039d6a05b6abd3aab559049c0520e6c267e0845414ab2c0f2e86344cb5"]
      - values: {"q1":1,"q2":1,"q3":5,"D":10,"a":3}
        answers: ["sha256:7f756625983ae0ac226e7a8a9b41a2ab1e6e98f1dafe461045192ca40c2a7cbb","sha256:128e62d455c3aae23649b27d9be14221e182ff8128468325d4391af1b3a81073","sha256:3f8e79c93c1b41015a2ea2f707f3a2a2e33f97a337297efcdee62ffa42fb487f"]
      - values: {"q1":-4,"q2":-2,"q3":2,"D":40,"a":25}
        answers: ["sha256:f62f6fc459ff7c8a5e108c7b8f46fea5c96ca0847201335bb7d95d41ae8cce81","sha256:477513cf3a1822987912dadac0e0aff2c3d731b67b2ac7eb1ac406434097cb7c","sha256:fdacc99e3057da2926605a558123236181cdd9db8d436f1ce7a4907596072e6c"]
      - values: {"q1":5,"q2":2,"q3":-3,"D":18,"a":6}
        answers: ["sha256:3c9e85b4163da64bc5d931a2dd16fb10e7569e6a6069b111e7a5aba8e08c42d2","sha256:611d642e909a4a413cfdeec82a5d455ea1877f3062d080d066d1db3d45606928","sha256:481befea31eff3e46fcc2e8d50aa332f31d37c365b9ac5edbdb134d7a08d6bba"]
  - id: potencial-de-una-carga
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuánto vale el potencial eléctrico, en V (con signo), a ${{r}}$ cm de una carga puntual de ${{q}}$ nC, tomando potencial nulo en el infinito ($k = 8{,}99 \cdot 10^9$ N·m²/C²)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"q":"3","r":9}
        answers: ["sha256:392056e4441827d05d98416d45bd102c518daba19f07d73d9ab13f4ae54864ac","sha256:4f1d5cc6601e8073feef2441207aec5b04378c35e258594b7651b2e9c0bca2d3","sha256:3fd8f0016995011bb8ae4793cb3b1e150cee08185cb3b5434f12d1e027b6b482"]
      - values: {"q":"-8","r":12}
        answers: ["sha256:9b4fbdce470e1af32e02499e039753df9f354c972de4c7608473653f0483ffac","sha256:c0a4901209dd565007238bb53c6d98be38329112173da6556ce62b6a71d37b0b","sha256:d899132f879a03f03648e96f875b068fb62db68b51126e58c83f6854824f90e9"]
      - values: {"q":"0{,}5","r":1}
        answers: ["sha256:157efe849f3a0dad7c83cb2fbaa7b2c6854eb1eb97bcfde2f61c44e70b2ddd91","sha256:bcaeb9ab3af5fa59c486dc38ceda16a3cae0bdbf40451649ab62fbcf7bbf9ea7","sha256:88fc5ee7f16f859391b96daf09cbd38839672259c9630a4662fbd7039e746260"]
      - values: {"q":"25","r":40}
        answers: ["sha256:d68a9fb685a95b096de6f03c9eb23708fbfe2613ec902b250ac9c9ab31ca3304","sha256:ccf0c92abc1d0821434a9957f4d5d311ca113f3a2e4c6e8fabd21a6894d7ac85","sha256:8dcd047727e71b279af1f2d4d6a4c497f9759bcee2e660a95608249752215238"]
      - values: {"q":"-1{,}2","r":2}
        answers: ["sha256:3e86ca4cd8081da8a156650daf6faf3918d016e73160b1b3130ff6351f983edf","sha256:6d3c9f4e23f32d2f68a73924b91c5c124327f4874c83a2d2477a7a84641d0421","sha256:76f57923285cf9f0227831b8a406ca333132fbec439990578503b3177ce824be"]
      - values: {"q":"6","r":20}
        answers: ["sha256:d276a4d65597713d5ce3e93c4b85e9bbc4d07a3eb826bf57958ae6790fb29f9c","sha256:9fbae477701be1407eea10109d3f403e8997fd8b17b60a79f65d99f8326555fc","sha256:3d210749d2a96fa27d1c2f44f2007faa41576e6b88613b59fa99894938ca3c2b"]
  - id: trabajo-del-campo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una carga de ${{q}}$ nC se lleva desde un punto a ${{V1}}$ V hasta otro a ${{V2}}$ V. ¿Qué trabajo hace el campo eléctrico, en μJ (con signo)?
    variants:
      - values: {"q":"5","V1":300,"V2":100}
        answers: ["sha256:e0d5cfe32f0abaec340cc2956e78e5bc5cbaa2cc927e9cf35d846a6c326fc532","sha256:60350cde9f83677d1cd7b734a596b5f61fb953a81725401a1ce13ae7ea93a1d9","sha256:73e698a340cbb391f6ef13168f611fa5f3e9a6f53475dfdd76c49fdc209e57e4"]
      - values: {"q":"-2","V1":50,"V2":400}
        answers: ["sha256:093860566413535663b2d56a905ce12c0abc4f1348690364d65aec37ff2254e9","sha256:7361c8c19fd42fac51187a3128741fb716b3f232c92cb11ba6f49c96bfd4e980","sha256:50c1e3702d8e7b9daf46555a954cf3c4a54408d37e2fe58e34c93d39837a84e9"]
      - values: {"q":"10","V1":-120,"V2":80}
        answers: ["sha256:93b8fe4c3a784f3d39ee20d860dd2946eba037f19758dfc7eb5848b7942febd1","sha256:ce1e1e79064096ca490dc86dbdbfee6c0f3e94e65d2b2718d8599c89de7c8625","sha256:04d570996a13f89deb183b51f90ad81167a9db7ce9d7534931fb3d9f56f56e50"]
      - values: {"q":"1{,}5","V1":1000,"V2":250}
        answers: ["sha256:fa916933d3b2a18b83be4634e1fbb9667dd442c73d1dd99927daa34c3b0620e6","sha256:8eba414a639973c75989c31819b8a591ebe1b033b604e4c72a75e812ad6ae537","sha256:6c5d18c7a76c44e30618995b295c82f1442e1849c02bf8c1ddd09d8a9ce21c6e"]
      - values: {"q":"-8","V1":-60,"V2":-300}
        answers: ["sha256:9812fa968a8e126c0240b273e738d3334d0fd0c350c4acb4d21cbeb6ebc26116","sha256:4019aff48c5562771cb20e4aa00af38b50202b95f476e8f4d24384e7fdd938a7","sha256:7efb25d8c941f09d102d21b93a61251f67a9ceb30cb1aeb6d7cda37af0479c4a"]
      - values: {"q":"4","V1":75,"V2":500}
        answers: ["sha256:2effcf019a0f285251df7f1933342016fe45e43d922dff03296dad2695a1eacf","sha256:6432d2be07db2458aaac0ff9a39f16279147c623489fa7ea96078f1401e5da9c","sha256:449b69bc22aab05b5ed8bc9bdafd38eae3811fcf8974edfca46dcd7701b0dea3"]
  - id: electron-acelerado
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un electrón parte del reposo y es acelerado por una diferencia de potencial de ${{dV}}$ V. ¿Qué velocidad alcanza, en km/s ($e = 1{,}602 \cdot 10^{-19}$ C, $m_e = 9{,}109 \cdot 10^{-31}$ kg; sin efectos
      relativistas)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"dV":"100"}
        answers: ["sha256:1d970b75c7a87159c81d321ea55759d5b3ae298bafcee4716ff41333c1690498","sha256:07ae0d9327c40f1f8a70ed4b8552391240458c862d0c707fe63c13c26693e24e","sha256:2fe5532ca5aaee716a8344ab47ce58ca62c3af103c731bdaf2426d0e95e862a8"]
      - values: {"dV":"5"}
        answers: ["sha256:9b5829da25cc7e46b05ff7ed1c67ffd100be166a1a0ef0710e9b9a8cdf589d8c","sha256:8a5460237b002c812e9f97b23b0e53eb95ec7780ab04bfe0416628fe97835119","sha256:8cac0ecfc70c359e55cc623892ac8b12db732024b29e48e910855e802af70dac"]
      - values: {"dV":"2500"}
        answers: ["sha256:0d27c27ec1f698f36ce9d4d805f1cb3e457a06f2bc5baeaf43a6a1d666738dec","sha256:eab6260b1878d4ccecd5a7e87dc3a8d17f9202f23d1aa429498944665c09bdb2","sha256:2a72f170b215936a5052d1911dc719e27d33d4a491d9659d04be061882daeda8"]
      - values: {"dV":"0{,}5"}
        answers: ["sha256:650c256543ce0f0e50cf9c218ed2a942560bba721915389748e79cb281d5db88","sha256:870e4691770a35acc2e64e390731726efeec95e9eb909b63fb41807d8f7df310","sha256:9406c225ce735cae26d3c673cb80cb8e2a78cdfd44a2c8a0b1e5f1cb6c730edb"]
      - values: {"dV":"40"}
        answers: ["sha256:ce30a6815ef49a9cc3ad03350d533c192168b0057a02ebbdfe2b4b516fa8ee7a","sha256:4179e0194b000cace92d2f4c6d5257b76f451ec9b5a32f6b4d15c592c10c918d","sha256:428edfa505d2d5f938e052de8242cc85ee0cf1d692e2b9d822fddb01df3578a0"]
      - values: {"dV":"750"}
        answers: ["sha256:3c32f840bd7955fabd261070046a2e0896e75e9d42c4b92a3ed06da6b567238a","sha256:dc1a7cce9da2f481e0c6a1770e7a3afbc2e9a55215e64e265e883f2f912b7851","sha256:a82e2d62a8ed1211597eef3fcb7709b1c3c4091ce53788c72e6dbea53de71579"]
  - id: condensador-plano
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la capacidad, en pF, de un condensador plano con placas de ${{A}}$ cm² separadas ${{dd}}$ mm por aire ($\varepsilon_0 = 8{,}854 \cdot 10^{-12}$ F/m)? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":100,"dd":"1"}
        answers: ["sha256:8444c5074421a2785e892e5bc40d15c99363a33c7384d29827a0cb3b1892ef22","sha256:732b2353b8d0fb8d4ef5d3d81bf8a61772b968b83102d76bedf4e93e3afc388e","sha256:923984fe1958f646f7feb9a9a1b08eb0a5a46f69ea4def6ffd98b444fad7a34e"]
      - values: {"A":25,"dd":"0{,}5"}
        answers: ["sha256:a58c429432d82de0c6d44ba9100a58724b27060b2e1346ed3d1e5cfe05cac58c","sha256:4f2db035d5d41e12b783e5852a9b00dcd4578e3ac491cb19190e33f46eab8000","sha256:ec51f85df3f6e454765809a07247230686098fa4f97264aaed472b4c90cc1cc6"]
      - values: {"A":400,"dd":"2"}
        answers: ["sha256:ef8d90f3058d8274ee44d4d8a59c0d55078916b9d02a9614e08089277d1c2aa7","sha256:b5d1ab6c924ee9cd5e8991002f76c48bccd3c5864eb8651d673f343a4d358370","sha256:d2bc6269ff6160b4217791cc5d4baea6d20af52da0a7eac9b3dee10fac712af3"]
      - values: {"A":10,"dd":"0{,}15"}
        answers: ["sha256:27a4c5d4d1815a8d8b778127608fbb2bcc5bc645a033363c601c258a2c428964","sha256:9aedff03167a0f57919674e02ac26b7a769fde941adb2fddc6f3ecb53468c779","sha256:e6e48c55da15d04d072f9c11f97d861ac83d831b6d02896f8892292e14281f56"]
      - values: {"A":900,"dd":"3"}
        answers: ["sha256:a4530984d8373d8d3e95fb3d2f55bdd27b845a52cb84ae74c1f76ce38373933f","sha256:b79a51078a2340f89a92f096078047993340094b75c952c403decd8b07eb34bd","sha256:41676b6140f0c6045836752480068515ddbbfb5ce8bf5888c4d85009db6c435e"]
      - values: {"A":50,"dd":"0{,}3"}
        answers: ["sha256:deee35c98bf9307d570e39847550ab7050d9186efc4f186c9b9b12e7985974a6","sha256:f0c6b0b34a5af696905193d13890de9bac1ed1508b11269c58e7bf031a492919","sha256:29ff8d5bd17058aa43ddeadec9298c4cf982315efdb5c1345c07b20be9ecdf7e"]
  - id: energia-de-un-condensador
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuánta energía, en mJ, almacena un condensador de ${{C}}$ μF cargado a ${{V}}$ V? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"C":"470","V":25}
        answers: ["sha256:89e442fd399757cd11dc90b29426042522c813e46eb77a31203c8cf8b4a25b8e","sha256:026284c9fa8ba99fb1a01fff9893d33ef890319a2ce944e900b418832b2ab206","sha256:a19660ab8fc011165dbb790538407963171df5ae1b5ec25a724013f19eba9a7e"]
      - values: {"C":"2{,}2","V":400}
        answers: ["sha256:25bdbe1712adb85b4c508abeb22568e0beb0e8eb6b9b5f8ff1f5b8a156a0261b","sha256:66f5534683051ac0f8744f82539516f4cd198ec5bbc5d28024197704dd4767fb","sha256:773a2e27c854e6133caf4d60c02c4fb143a6948c397065b63b1332e15df36663"]
      - values: {"C":"1000","V":16}
        answers: ["sha256:0e2711ef902ef70dee1c124a9f5beac27eac00ed44b0548043ff49acb8014667","sha256:cd2aa7bdd22d5894585f8f8a00d17e7ea27dc53571764c573caa3606d8514fa5","sha256:dc0e52f093bea1514ec4b5674a59534e7a5353ab8f4ac47086bcc62fc4e9a3f3"]
      - values: {"C":"10","V":150}
        answers: ["sha256:b2e9a7ec0a98d746faabe7e2ce8717d0303e6b551c815efc7df8534f6c97880a","sha256:35c1efaf6963991d64b37b28ca3e93702d1ea991bc6754710fa2c2053a7ddd1a","sha256:1b184fb887482b6ddc8c2a961c3ce7ac381d0f9db139a05b05427f5f6ffdac79"]
      - values: {"C":"47","V":63}
        answers: ["sha256:10a62c90991b3787317a18fb69067d9c4ce3724f6395078c74dc0f4b935af011","sha256:c23566a8de2659f4b3cfdccc157f855ff680376595e86a69028a64bdfbc80dba","sha256:30eeb6b307743d91173d2934278384f5ef53427a11131be87580665d2b645042"]
      - values: {"C":"0{,}1","V":2000}
        answers: ["sha256:98b1be3093e5915c968c6429c7d81d79fd5897cdf78db45175824ea8f7340f1d","sha256:750aac91777f54532494f08089067d0b35d41a46476dae0a01269b6b5905e9bd","sha256:2a274c5d4e303ea99a0875970150016133591ed0e55b84eda417d3c1a7379139"]
  - id: asociacion-de-condensadores
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un condensador de ${{C1}}$ μF está en serie con dos condensadores de ${{C2}}$ μF y ${{C3}}$ μF conectados en paralelo entre sí. ¿Cuál es la capacidad equivalente, en μF? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"C1":6,"C2":2,"C3":4}
        answers: ["sha256:c87ee0f714ffea40af12b5b07f09129b403f1aa2be2e90ec5d761c815eea806e","sha256:7f1d4591e8253cf64471ae07558a63b627353f7abf488032f009d5b2f9bc60bf","sha256:80a61740da4f585d431215e3f1c7a89d9db601207cb6f6f69898af2ed45108fc"]
      - values: {"C1":10,"C2":3,"C3":7}
        answers: ["sha256:d7aac2760d1d1b840dc4ad7fd6652a279cde6a2fa31f4f01ede9a57aeb79ec0a","sha256:b5591e8fbcc6143e6fb266431b8f38a52c447f05e9f81084d2e98fd5ed895c42","sha256:179134bade8959bad88b9073b29d8d0969f9f88fcd173dad112d6643c36663c2"]
      - values: {"C1":4,"C2":4,"C3":4}
        answers: ["sha256:f5416b8d5adbdeb71abaa32a0079e7b05be0bbfd7e7257fe5cd1a64195fed189","sha256:b386e11863c5595132fbf1a7c91f810ce41d39ac23ed02a1b1edfeb11e092514","sha256:8fc5ee715ea2719f685b1d7491cec74817f418332b39ab51b1e5ca06422d5b65"]
      - values: {"C1":12,"C2":5,"C3":1}
        answers: ["sha256:06eb31d3133b58fe4f07f08412c4939c0943895497a310cb37bb0c87e8ad79ae","sha256:330191a2ff091145fac81fd4656f3fe53ecbf049bb5926b9e7d76e9ad086999c","sha256:130f83b7bf757980623f3161821e60edd4bc8f19eb2ad90fa275e2cbe5e594ea"]
      - values: {"C1":3,"C2":1,"C3":5}
        answers: ["sha256:531dd4877f59eeaf77fb09f9b002294427c444a52ab14ee60dc752729bdb44fe","sha256:765c69bfa46c0ba3a793ed6ea36dfeb7d6ac061677e234aa9f53a50e14c6e88e","sha256:5eae48cd1434d771ddfbdbd6afb1fc8c6ed617614a896e3b2782a8cdae68d7e1"]
      - values: {"C1":20,"C2":8,"C3":12}
        answers: ["sha256:47bdad319efe7bbfda8d28608547d6fb30e0f22380b7e998481604868ae9534f","sha256:19ee3921e2e66fc7d25ab703642f9e8f6090295789dce9b90689e251184f5fae","sha256:3465ed69d3a8731f5d8c79604b24170bc1dce7e5ffb684b86cf67641f6ace980"]
  - id: punto-de-campo-nulo
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Dos cargas positivas de ${{q1}}$ nC y ${{q2}}$ nC están separadas ${{D}}$ cm. ¿A qué distancia de la primera, en cm, sobre el segmento que las une, se anula el campo eléctrico? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"q1":4,"q2":1,"D":30}
        answers: ["sha256:b452b087ce71a6b483400c6b098ba19ebd4264ead20094e58d0d6bc941711ff8","sha256:0ff3677cf6eeaa381386ae971a7b1251eee29aad0d494b2b3aa5828843dc6c83","sha256:2a19b5bf0bed882e09a35fe18dccd37a0fb442da343747bd18c17d90670beef7"]
      - values: {"q1":9,"q2":4,"D":50}
        answers: ["sha256:3d42b9f060e4ecdf18b60fc0cbd3123b2a2b254ce5cb3b358d4578cc0720e0c9","sha256:818bcba18ab34460d248369a6f84ed247f1a7f824bef6256519ea613babaae29","sha256:227862fd77703440613e545821fe5f7cee521b6fc9bf58c005d026ff3d61b8e9"]
      - values: {"q1":2,"q2":8,"D":12}
        answers: ["sha256:e225d5269965d6f7f2d69d73e5c8b87f13b8c4087f602a1bd278e4d126024f0e","sha256:587977acc9cc4fd1a024e9bc12d5a97a257738a735f654ba0f1a0118a8d28c60","sha256:57546f02240dacbb71eb344adfc33d1ac96eae759f1247bb5f2d7621f2312e9d"]
      - values: {"q1":1,"q2":16,"D":25}
        answers: ["sha256:0b2871780be23fad3febaa12a65deafa8f28a9b5d66025f63aaaa13b17de2d5d","sha256:4b93888ba59b1005eb6f67528b63af864973677107caa09b55a989333b68972e","sha256:250630f667be46faaed7d1ec1228e62d9a801f42d6ed13697d776f6c6f8842e2"]
      - values: {"q1":25,"q2":9,"D":56}
        answers: ["sha256:297c9ee6ff8ad077826733d2036e378455d8594d03a95a296be628d515e51aff","sha256:c1672bbd7858f67dfc4a3d43079024670cfe6213eae0df8c1eb3fc2945186c4f","sha256:799eeae6e4f11eecdc7fa20115d0f1d5904d7f6ad813ba090065f12afba1f78c"]
      - values: {"q1":3,"q2":12,"D":18}
        answers: ["sha256:bf3b7c6ef0df51e4b5e8a8863fe2120196f89231776b05df4e98124a57870f9c","sha256:3e7422eb3447c7ae47c8d3bbc7687fdd065ce5eee2516728033011337d489abc","sha256:e48e3b98cdbd7cd318bb3bdda11dcf230b89f26711a1c3b25bdafecea6a495c4"]
  - id: campo-y-potencial
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica la diferencia entre campo eléctrico y potencial eléctrico, y qué relación hay entre ellos. (b) Explica por qué el campo eléctrico dentro de un conductor en
      equilibrio es nulo, y por qué un coche es un buen refugio durante una tormenta eléctrica. (c) Explica cómo almacena energía un condensador y por qué al introducir un dieléctrico aumenta su
      capacidad.
    sealed: "gz64:H4sIAAAAAAACCo1Uu24jRxD8lQKxAbVYS7BCChcYOl5owMEx8dpGc6YpjTw7vZoHIZ6gj1HoQNFlTvljRs8uCd3hAkcEd2a6qquq+3mRxJfsJCxWi7Zd0kXbYu3RtoaGUdoWTd/v2WDdgBNKwJ5NlriCJ+wKxy+EUSJKcJYsLMNQvCNwgCFLGEvIguVc5BM+4PFUr9NLv17dQrC5Gi4uJ9hRMgfjyCv05gTKyZCnCZUDx7vjm+LOV3/IYNms/xoVbzMh7cVnJ6ni9KF2B1J6hHsyjmAlWAb7d3WtS4ML5cAYjq8JlsfoEnU4IBUMx6+2eFGG7BFdHkTROdHpnXHHr2Gl4CXox4FD0k8dmjU+4Ke+30Uyz3bz8myfXpqb6SYmbiW4ncSBO3XgI/tM2Oijdd93trnsQx/adrmtfk3PJNii3uCeDpMICd5tI6cbJAfLIUfBfdk6jjShdEiMQfYcj28UcE8pEx4La39jlNHVXnJ026kZeAGF4inSpcLyY3EK4aRTESbmLmSOTqIqYzgKDvCUToySbCOFzAmJ+5BcPv5LQTv3hFRGjjtnHF/ic1COMYqp5DBwPr56Zwhk9A2MDIK2faDiSYX/RJEsHdp2pWpEOgiMi0ZPNR/swU8zsYP+O9N8LKxJjZL5zlnBMkh94SUhcBmOr9kZTc6suVHNf/FTQ9FLVwVX1bznPcU5gJar7aMn5QzJKroE/TlLVaVm7AnqNQUrN+DEyJG29CAzNfIDGQ5kZWr6PAH2XEi95SpzxUsdms/4gClhP1/fbv68blRTtK117I//mByd0flWF0bxFN0XWiGVhEH0vGgxiY5DpnAyT8bCKVOaR2Ya8drgAZFtMRx+kIORIqm9g0sDTaU6UDq+TaIR8jwY2NID1bjA0EimTnRze24Ev20aUBmU0zwsO6qRb/r+bxpHai4X3SKWbXRmsfr9eWGiqyQWq8VHl7ILd4Vnestpk13g8G7il/Om0a/qf2RPxkmo1s1jazdX9qkC1e2WFqvrl+4bqPXTWJN6liLURfHdmNY+v4/v/yn7fgnWCOjmConsKdq809bq2Xu3v639x8t/n5HViP0FAAA="
  - id: r-cargas-iguales
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué hacen dos cargas del mismo signo?
    options:
      - |
        Se atraen
      - |
        Se repelen
      - |
        No interactúan
      - |
        Depende de la masa
    answers: ["sha256:243e8e18a212a0906bea0a618c3b5e71a1d4893812338fbd9cf14301a18aa5b5"]
  - id: r-coulomb-distancia
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si la distancia entre dos cargas se reduce a la tercera parte, ¿por cuánto se multiplica la fuerza entre ellas?
    answers: ["sha256:c29287cd308e23ae094c54cb0ebdf5b9f763c4b0d8772981ad01fee1793f2d29","sha256:41a962b652aa46dcb096140e173152db568ee06a7621a0261e7513b8bcf03c1d","sha256:9937495a6ffb6b0fc666fa0147a3b44aba9b3b2b741e65a0ef5205c986064fb0"]
  - id: r-conservacion-carga
    tier: 1
    type: opcion
    review: true
    prompt: |
      Al frotar un globo con el pelo, ¿qué pasa con la carga eléctrica total?
    options:
      - |
        Se crea al frotar
      - |
        Se destruye al tocar el suelo
      - |
        Se conserva: solo pasa de unos cuerpos a otros
      - |
        Depende de la temperatura
    answers: ["sha256:9066bc684e2523d3f1186ca9ed9a7e67761e0790b422e38dba5e3b4986395df2"]
  - id: r-unidad-campo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué unidades se mide el campo eléctrico?
    options:
      - |
        N/C, equivalente a V/m
      - |
        V
      - |
        C/m
      - |
        J
    answers: ["sha256:3e8350c45f2bef9d5fc3d79831a6cca59434fb8ff8a13a2c2d6e90c75b3a8d70"]
  - id: r-electronvoltio
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es un electronvoltio?
    options:
      - |
        Una unidad de carga
      - |
        Una unidad de potencial
      - |
        Una unidad de campo
      - |
        Una unidad de energía: la que gana un electrón al ser acelerado por 1 V
    answers: ["sha256:fd62e7817b720ff80b788da392c887ffa8a69986c713dc7acd5ac0df55bd90b0"]
  - id: r-paralelo-igual
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Tres condensadores iguales de $1$ μF se conectan en paralelo. ¿Cuál es la capacidad equivalente, en μF?
    answers: ["sha256:b737e810792b136b651cce5b373efdc6e9ee1f4c07cdff4036ee7bbf1a3ee695","sha256:018172e2f538e687f66492e0c97578401158827a77dec463751d34e561e4402a","sha256:175a725c8c449d71a3959eafd737a9c6492f1fc37aa4b64f998c433dbf445de3"]
  - id: r-doble-tension
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica la tensión de un condensador, ¿por cuánto se multiplica la energía que almacena?
    answers: ["sha256:90fcf5d5f35cfe699df76dbb7d8057c7e27f71e7d15a78efac6ad1625a51bb47","sha256:7ae7fbe2903c68a4405e522a1cb14e2f86f9d9c0252cbb2acc090ea7261c0052","sha256:8de89e5ab12316ce46174ed58b5dd320d7fbd1cbf7f1b68531a2810ef5de4117"]
---

# Electrostática: carga eléctrica, ley de Coulomb, campo eléctrico, potencial y energía potencial eléctrica, conductores y condensadores

Un globo frotado que se pega a la pared, la chispa al tocar un pomo después de andar por una moqueta, el rayo de una tormenta: son manifestaciones
de la **fuerza eléctrica**, que es la que mantiene unidos los átomos, las moléculas y, en el fondo, todo lo que tocamos. Este nodo estudia las cargas en
reposo (electrostática): cómo se atraen y repelen, el campo y el potencial que crean, y cómo se almacena energía eléctrica en un condensador. Es la base de
toda la electricidad y la electrónica.

## Objetivos

Al terminar sabrás:

1. Explicar qué es la carga eléctrica, su conservación y cómo se electrizan los cuerpos.
2. Aplicar la ley de Coulomb y el principio de superposición.
3. Calcular campos eléctricos y describirlos con líneas de campo.
4. Calcular potenciales, diferencias de potencial y el trabajo del campo, y relacionar campo y potencial.
5. Calcular capacidades, cargas y energías de condensadores y de sus asociaciones.

## Qué debes dominar antes

[[fis-trabajo-energia]] (trabajo, energía potencial y conservación) y [[fis-vectores-movimiento-plano]] (suma de vectores por componentes); la ley de Coulomb se parece mucho
a la de la gravitación de [[fis-gravitacion]].

> [!question] Test de entrada
> 1. Escribe $0{,}000\,003$ en notación científica.
> 2. Si una fuerza es inversamente proporcional al cuadrado de la distancia, ¿qué le pasa al duplicar la distancia?
> 3. Suma los vectores $(3, 0)$ y $(-5, 0)$.
>
> Respuestas: $3 \cdot 10^{-6}$; se divide entre $4$; $(-2, 0)$.

## 1. Para qué sirve

- **Electrónica**: condensadores en todos los circuitos, pantallas táctiles capacitivas, memorias.
- **Industria**: fotocopiadoras e impresoras láser, pintura electrostática, filtros de humos.
- **Seguridad**: pararrayos, jaulas de Faraday, protección frente a descargas en gasolineras y quirófanos.
- **Ciencia**: estructura del átomo, química (enlaces), aceleradores de partículas ([[fis-campo-magnetico]]).

## 2. La carga eléctrica

> [!practico]
> Frota un globo con el pelo: el globo se queda con electrones de más (negativo) y el pelo con electrones de menos (positivo); por eso el pelo se eriza hacia el
> globo. No se ha creado carga: solo ha pasado de un cuerpo a otro.

- Hay dos tipos de carga, **positiva** y **negativa**. Las del mismo signo se repelen; las de signo contrario se atraen.
- La carga está **cuantizada**: es un múltiplo de la carga elemental $e = 1{,}602 \cdot 10^{-19}$ C (el electrón tiene $-e$; el protón, $+e$). Unidad: el **culombio** (C); en la práctica se usan μC y nC.
- **Conservación**: la carga total de un sistema aislado no cambia.
- **Conductores** (metales: electrones libres) y **aislantes**. Un cuerpo se electriza por frotamiento, por contacto o por **inducción** (acercando un cuerpo cargado sin tocar).

## 3. Ley de Coulomb y superposición

Dos cargas puntuales $q_1$ y $q_2$ separadas una distancia $r$ se ejercen una fuerza a lo largo de la línea que las une de módulo
$$
F = k\,\frac{|q_1q_2|}{r^2}, \qquad k = \frac{1}{4\pi\varepsilon_0} \approx 8{,}99 \cdot 10^9\ \mathrm{N\,m^2/C^2}.
$$
*Ejemplo:* dos cargas de $1$ μC a $1$ m se repelen con $8{,}99 \cdot 10^{-3}$ N. Comparada con la gravedad, la fuerza eléctrica es enorme: entre un protón y un electrón es unas $10^{39}$ veces mayor. Si hay varias
cargas, la fuerza sobre una es la **suma vectorial** de las que le hacen las demás (principio de superposición).

## 4. Campo eléctrico

Una carga modifica el espacio que la rodea: crea un **campo eléctrico** $\vec E$, la fuerza por unidad de carga que sufriría una carga de prueba: $\vec F = q\vec E$ (unidad N/C). Para una carga puntual, $E = k\frac{|q|}{r^2}$,
radial (hacia fuera si $q > 0$, hacia dentro si $q < 0$). *Ejemplo:* $1$ nC crea a $1$ m un campo de $8{,}99$ N/C. Con varias cargas, los campos se suman como vectores.

- **Líneas de campo**: salen de las cargas positivas y acaban en las negativas; son más densas donde el campo es más intenso y nunca se cortan.
- Entre dos placas paralelas con cargas opuestas el campo es **uniforme**.
- **Conductores en equilibrio**: el campo en su interior es nulo y la carga sobrante se queda en la superficie (jaula de Faraday). La **ley de Gauss** relaciona el campo que atraviesa una superficie
  cerrada con la carga encerrada ([[fis-electricidad-magnetismo-1]]).

## 5. Potencial eléctrico

> [!practico]
> Igual que una piedra en lo alto tiene energía potencial gravitatoria, una carga en un campo eléctrico tiene energía potencial eléctrica. El **potencial** (los «voltios»)
> es esa energía por unidad de carga: una pila de $9$ V da $9$ J a cada culombio que la atraviesa.

- **Energía potencial** de dos cargas: $E_p = k\frac{q_1q_2}{r}$ (cero en el infinito). **Potencial** de una carga puntual: $V = k\frac qr$, un **escalar** (con signo); con varias cargas, se suman.
- **Diferencia de potencial** (tensión) en **voltios** ($1$ V $= 1$ J/C). El trabajo que hace el campo al llevar una carga $q$ de A a B es $W = q(V_A - V_B)$: las cargas positivas van espontáneamente hacia potenciales
  menores.
- **Relación con el campo**: el campo apunta hacia donde el potencial disminuye y su módulo es el ritmo de esa disminución por metro; en un campo uniforme, $\Delta V = -E\,d$ (por eso $1$ N/C $= 1$ V/m). Las
  **superficies equipotenciales** son perpendiculares a las líneas de campo.
- **Electronvoltio**: energía que gana un electrón acelerado por $1$ V: $1$ eV $= 1{,}602 \cdot 10^{-19}$ J. Una carga $q$ acelerada desde el reposo por una tensión $\Delta V$ gana $\frac12mv^2 = |q|\Delta V$.

> [!formal] Con rigor: el potencial de una carga puntual
> El campo de una carga puntual es conservativo, como el gravitatorio. El trabajo que hace al llevar una carga de prueba $q_0$ desde $r$ hasta el infinito es la suma de $k\frac{qq_0}{r'^2}\,\Delta r'$ a lo largo del camino,
> que vale $k\frac{qq_0}{r}$ (el mismo cálculo que da la energía potencial gravitatoria $-\frac{GMm}{r}$, [[fis-gravitacion]]). Por tanto $E_p(r) = k\frac{qq_0}{r}$ y $V(r) = k\frac qr$. $\blacksquare$

## 6. Condensadores

Un **condensador** son dos conductores (armaduras) separados por un aislante; al conectarlo a una tensión $V$, adquiere cargas $+Q$ y $-Q$ con $Q = CV$. La **capacidad** $C$ se mide en **faradios** (F; en la
práctica, μF, nF, pF).

- **Condensador plano**: $C = \frac{\varepsilon_0A}{d}$ (área de las placas $A$, separación $d$); con un **dieléctrico** de constante $\kappa$, $C$ se multiplica por $\kappa$.
- **Energía almacenada**: $U = \frac12CV^2 = \frac12QV$. *Ejemplo:* $1$ μF a $12$ V guarda $12$ μC y $72$ μJ. Los flashes de las cámaras y los desfibriladores descargan de golpe esa energía.
- **Asociaciones**: en **paralelo** (misma tensión), $C = C_1 + C_2 + \dots$; en **serie** (misma carga), $\frac1C = \frac1{C_1} + \frac1{C_2} + \dots$

## 7. Errores típicos

- Olvidar pasar μC, nC o cm a unidades del SI.
- Sumar los módulos de los campos en lugar de sumarlos como vectores.
- Tratar el potencial como un vector (es un escalar, con signo).
- Confundir campo nulo con potencial nulo.
- Invertir las fórmulas de condensadores en serie y en paralelo (al revés que las resistencias).

## 8. Resumen

- Carga: dos signos, cuantizada ($e$), conservada; conductores y aislantes; inducción.
- Coulomb $F = k\frac{|q_1q_2|}{r^2}$; superposición.
- Campo $\vec E = \vec F/q$, $E = k\frac{|q|}{r^2}$; líneas de campo; conductores y jaula de Faraday.
- Potencial $V = k\frac qr$; $W = q(V_A - V_B)$; $\Delta V = -Ed$; electronvoltio.
- Condensadores: $Q = CV$, $C = \frac{\varepsilon_0A}{d}$, $U = \frac12CV^2$; serie y paralelo.

## Repaso: lo que debe quedarte dentro de un mes

1. La ley de Coulomb y cómo depende de la distancia.
2. Qué es el campo eléctrico y cómo se suman los campos de varias cargas.
3. La diferencia entre campo y potencial.
4. Qué es un electronvoltio.
5. La capacidad de un condensador plano y la energía que almacena.

## Siguiente

[[fis-corriente-circuitos]] (cargas en movimiento: corriente, resistencia y circuitos).
