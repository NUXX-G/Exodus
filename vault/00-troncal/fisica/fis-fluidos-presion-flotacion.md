---
id: fis-fluidos-presion-flotacion
title: "Fluidos: densidad, presión, hidrostática, presión atmosférica, principio de Pascal, principio de Arquímedes, continuidad y ecuación de Bernoulli"
area: fisica
trunk_level: 3
prerequisites: [fis-dinamica-aplicaciones, fis-trabajo-energia]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 14: «Mecánica de fluidos» (fluidos, densidad y presión, medición de la presión, principio de Pascal y sistemas hidráulicos, principio de Arquímedes y flotabilidad, dinámica de fluidos, ecuación de Bernoulli, viscosidad y turbulencia). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/14-introduccion"
  - "Arquímedes, «Sobre los cuerpos flotantes» (siglo III a. C.); B. Pascal, «Traité de l'équilibre des liqueurs» (1663); D. Bernoulli, «Hydrodynamica» (1738)."
hints:
  - "Concepto: la presión es fuerza por unidad de superficie y en un fluido en reposo actúa en todas direcciones y crece con la profundidad. Todo cuerpo sumergido recibe un empuje igual al peso del fluido que desaloja. En un fluido en movimiento, donde la sección es menor la velocidad es mayor y la presión, menor."
  - "Herramienta: p = F/A; p = p₀ + ρ g h; Pascal: F₂ = F₁ A₂/A₁; empuje E = ρ_fluido V_sumergido g; flota si ρ_media < ρ_fluido, con fracción sumergida ρ_cuerpo/ρ_fluido; continuidad A₁ v₁ = A₂ v₂; Bernoulli p + ½ ρ v² + ρ g h = constante; Torricelli v = √(2 g h)."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 14."
exercises:
  - id: presion-hidrostatica
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la presión absoluta, en kPa, a ${{h}}$ m de profundidad en un líquido de densidad ${{rho}}$ kg/m³, si en la superficie hay presión atmosférica normal ($101\,325$ Pa; $g = 9{,}8$ m/s²)?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"h":"25","rho":1025}
        answers: ["sha256:a45708cf5a779bb0d6eed6e6679b6d19eaa8524d25615f5d809f869db7b8b6dc","sha256:bc476b8009402216aa166daabc7f712cde1113c6139a0582a5d7de565002f96b","sha256:7e0d4f31be668d9d58d170e2ce6c389155faccd79fb0adda80a07b74983e11f6"]
      - values: {"h":"4","rho":1000}
        answers: ["sha256:80483f29594e1667e71e145b47dc5fba5ff851e8628bad795754d51d61f6c444","sha256:882f70d86c1ec4a20fd08b2174150b31be7eeca6b365408a3505cff4f19d5d8c","sha256:92a1593f0fcc0fbd8a46d7b089ec331339b1ecbb1d391b34134fbdd4f42e4a6c"]
      - values: {"h":"110","rho":1030}
        answers: ["sha256:f63921809601a0dc92841a77709d0b0a306eae689cab40f8f061baa4904cfeaf","sha256:9319233898416879d0e599dca84b7833322e9ec3e9912c4a1eff86fe8b8ac55b","sha256:9d1be5c3a683c4dfc77c64d6a194dce4287bc8a74503a9b05d371a2285a21b6e"]
      - values: {"h":"1{,}5","rho":13600}
        answers: ["sha256:071dd6bc176b517845ad2990582f0f0ec8c26ff5cc9f6d841dc2590c01b961c7","sha256:ff96d7c41025337aa5f5381d3e4b89ca144aafc37344389eab105d5cd3f248f4","sha256:0b3915ca6b4e4bd3d000a44d2e8fdbbb639caf77a9d1cf5c70c2148bb2c9df05"]
      - values: {"h":"60","rho":1025}
        answers: ["sha256:fb950df9ec6d42cfc5a57b94a8c987fb68c56e7ac3b9c71ea9cec3f76fc696ea","sha256:876a3210789f92fe1c4a916d092e041b5d646941436dc737663f7ac5fac94c4f","sha256:d56b245cf96540c2560cb88cd8d292595e91f226d94eab2391bf592ffc1f8815"]
      - values: {"h":"3","rho":800}
        answers: ["sha256:f0911ac7ca4f6c89ca5e6df57bf8bd1e7ea15166f443f644641639c11f1b1eec","sha256:50c4545a1bed78001cfa8d77da3fce858f24a886127cddec4b5a45cfb54d763b","sha256:21f2bef71cc819262b432943fa4fda744cadf890a718f43e1959272659fb8ad7"]
  - id: fuerza-sobre-una-ventanilla
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un submarino tiene una ventanilla circular de ${{D}}$ cm de diámetro a ${{h}}$ m de profundidad en el mar ($1\,025$ kg/m³, $g = 9{,}8$ m/s²). Dentro hay presión atmosférica. ¿Qué fuerza neta, en kN,
      ejerce el agua sobre la ventanilla? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"D":30,"h":50}
        answers: ["sha256:c06fbc64e53f817f8b5e53e5217bd3aef042b067679cd15c674eba1cf7df6b94","sha256:921699b6f7f233879035c4c442973c4350ba839ecd8c026e4e7b9d142734c7cf","sha256:a766e5b19eaad7b2bf3dcde2df3c49b04008fcb33eab148837d16f3fa05588d1"]
      - values: {"D":20,"h":200}
        answers: ["sha256:6f75393e93047dc22e616b8c2d1aa337bfcc50dc5d08627c91a2cf2f2d5fe94f","sha256:040286bdef21bfcdf3c210ef06138df66e531c001344fd4b2ddb2795e94e8dca","sha256:65f4c5c2a24b4b2ec796a1c74a996b0c7c48ecb3ca449304ae5587f71480a58a"]
      - values: {"D":45,"h":15}
        answers: ["sha256:105483bb951f20c0790e0a4d734fa9062710f554d67f9224878d8e6e64d19ac1","sha256:300d7faafa43b5cb4f0682034f1379e7cdfc8a45d8c32de755ef41c66612ec3f","sha256:1bc99875cb635db49f06f352552d58d98a9e4243052acd939769e018cce1f556"]
      - values: {"D":25,"h":1000}
        answers: ["sha256:eb88025adcec6d30446bf34f02499eda040b3b8b7a6997eeff42303a78485365","sha256:242aa41751af9eaa090c40cf9cf2b8873dae8be6e50f1148ed43a9da7ed3c6dd","sha256:440ecf2fd7fba8b7c89cb2da5ed7ec38525d30e6148302e1bc3afdcbb555653f"]
      - values: {"D":60,"h":8}
        answers: ["sha256:b350f5c3ae8deec3c5ae790bdcc264c2a83b362b05b7b482b9664cf2d7cc8015","sha256:793d21fbdb4cb3ff1f85a57e0ef3061e5490e488ab02f34e45248c3db07de50a","sha256:4b07d1c556e68cc7e00d90e1539e3ff1cfc1b97f4cbada322d4fdbe2bb78cf52"]
      - values: {"D":12,"h":300}
        answers: ["sha256:c234eed9865fb23b49b25476d048fd8e858ff7803e041638a1fff23b29139308","sha256:6d5a92cfddec5948e70942159967e34b51822914d90d215bd83d8c589b966463","sha256:c4748066dfee250def493ea22ad8cc55d124c91091d74ba9e498f2490a4c8925"]
  - id: prensa-hidraulica
    tier: 1
    type: numero
    sig: 6
    prompt: |
      En una prensa hidráulica, el émbolo pequeño tiene ${{d1}}$ cm de diámetro y el grande ${{d2}}$ cm. Si se empuja el pequeño con ${{F1}}$ N, ¿qué fuerza, en N, hace el grande?
    variants:
      - values: {"F1":100,"d1":"3","d2":30}
        answers: ["sha256:2fdd59a1e3587dd3ed26d4ef6c9166d307a53bfcda4d61f28069b252a06c6298","sha256:0dcfe64bcc6edce7de2be9373c8e33fd0cb4e29190985f5f6755a1e77d670118","sha256:b2547a1f114cdeb0b1bd2bb6d30cebf80ca9d339f953c24b70c335feb7db594a"]
      - values: {"F1":50,"d1":"1{,}5","d2":24}
        answers: ["sha256:c64feaa54a39a42e61595ad6a2d775a8fa8e931a8687c2d784a2ffca3dc63013","sha256:78a27b246528cf964d7aea53a9973e3cef87b8af71b1e199a2295605a5e91981","sha256:5202c4d5b6eec5fe1a0a223163ba3554e10376c2c57f368da740d9a7c10bc319"]
      - values: {"F1":250,"d1":"4","d2":36}
        answers: ["sha256:2a6f5b9dcd2e1e936bddce89f7b220811d10fdf6170805e23c5763e701370703","sha256:024d93d9f25fcf9e05321a69118da337fa55f145f90a93281717e06f0167e0b4","sha256:c229bd997b95660781c477fb887312c8fffbc90ee195b6cda198c26fbc95c4da"]
      - values: {"F1":80,"d1":"5","d2":40}
        answers: ["sha256:0c159004e7b3c7ee94a98ecf7c079c352429e0a2f2d10d39ec9065ac97fab7d1","sha256:1bd66b9ae4b99cc071e357d837205c2b11855a8338b158c5592e01de8601af99","sha256:281814ec4fa8def9b2d059036b41369986e83574693b2e0ce0483e71d26bccf0"]
      - values: {"F1":120,"d1":"2{,}5","d2":15}
        answers: ["sha256:49232ce78bbb41034330dece08905e7b3433a80516327d6ef4e466488ec402ce","sha256:1f394cfaff71d313fbca3d7245930b4529e979c69d91008e548eb5cfb2bb310b","sha256:71ebd403c5bb098fe2e8a5544ea55433c5d5d2fe37dce307bafc380eb213c2c0"]
      - values: {"F1":40,"d1":"1","d2":12}
        answers: ["sha256:ca33799e246cef8577f0cc6801e30c6220f62ea14391899b50a73537dbf5226a","sha256:47bd5b7c13630e3ef9091c4ca79f858182ab0221ede896e9e1df8801e3800dac","sha256:67b1129278796cefc0a735ba1d61fd4d4385b9017bb4faa998236036f840b78d"]
  - id: barometro-de-otro-liquido
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Se construye un barómetro como el de Torricelli pero con un líquido de densidad ${{rho}}$ kg/m³. ¿Qué altura, en m, alcanza la columna a presión atmosférica normal ($101\,325$ Pa, $g = 9{,}8$ m/s²)?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"rho":1000}
        answers: ["sha256:71d16f35c0cdec2e0d96e67ba91f33ee396812492abb6a3a69d026b46573b002","sha256:62ed8f762ac1de6ce4f37c82515f6904f2884fc120a01c017269cd9dd30c5d6c","sha256:66e6b3be4962cb1d904ba7e19641b96faedaaf3aacab339a175f431334b62f56"]
      - values: {"rho":800}
        answers: ["sha256:4951b8b9d16abff0de98e7c5acd9f0a6b5038478397b08c0e9727d68c93bff63","sha256:b2c4be8639e598229704d857a846700bf0662f04e18387b870fd2da417d4be99","sha256:6a3deceb42e9710cf7cb99fb59535ba14ed1603218ba58e0dbae3f07747973fe"]
      - values: {"rho":1260}
        answers: ["sha256:4e378da6a960208fcda0a4d2239447339583fdba87c7bee5d238f51b621fc3ac","sha256:d0c9250fcb92dd2e02891518229189198f432aa6227a4b398f59f1d840d1cea4","sha256:92520ef2045f2d199a17c3b62a350345f521168b2ba43638805d2ff6145a7f41"]
      - values: {"rho":13600}
        answers: ["sha256:91cdd8a132520622b7377f361fd56481cc0347a15c014d3dd7547856b5d63413","sha256:89cc5a1faaaf0363a994847929c62ab832ae1bcabb7f9173668243e9113bc173","sha256:96baf0ab677bb5a9d1beb368ed4404c84ee2f09ad29e261a205a9827fb0d5f0d"]
      - values: {"rho":1030}
        answers: ["sha256:d58813db6c542c6d85d3d7d52fd73c58a14edd78f926a6c6e73fd1013ba40547","sha256:da02716f5ed361d4c2b12fb2882c5b2b4207ec34e9715ead7dfe6c9023ce1268","sha256:345e94d8a47253815a6776a6769ea70ba83c519bfceb0288bd49d4495d60f8e2"]
      - values: {"rho":680}
        answers: ["sha256:1e084ffe9d95006e3c350529f3b2c67aa86c1024342ee8a6807cd4dca8cfcaa3","sha256:36c8f40264b7d7053474f1ec0ce59aef0f251571c2a273704a0f9e2d66e9b697","sha256:fd12de1b62671aff0153376dc32ff853c1ff668910a0dad316fb23475081bf55"]
  - id: peso-aparente
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un objeto de ${{m}}$ kg y ${{VL}}$ L de volumen se sumerge por completo en agua dulce colgado de un dinamómetro ($g = 9{,}8$ m/s²). ¿Qué marca el dinamómetro, en N? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"5","VL":"0{,}8"}
        answers: ["sha256:a11009e1a0145c07126a0be275759e078fabc3b32229ff6f167a122b402fbd65","sha256:36bfc77e2de225a5dc2437a797ccf4b50cc2ca572cc668942052881660cee9ec","sha256:b290ebbc167903a0cb46cb301ce3cecffcfe9f062753a40f3e2fe98562df8c91"]
      - values: {"m":"12","VL":"1{,}5"}
        answers: ["sha256:dd2b122acd705837537da6cb5196bdc79379a01e11db1dfe9d2564bf0991bba7","sha256:abe4ef0dab491ce87aa61d74cfd012d30f015fd9ebbe8ed89baec7dc95d03f74","sha256:84cc26082605c5db10c1905b5b027ad5d57c4b902365d33726b505c8384bc5ec"]
      - values: {"m":"2{,}7","VL":"1"}
        answers: ["sha256:8336a1afafe57e233f744d8cac2cd45172c55f763ff72c4eca8046635047f710","sha256:5d4f410f0f512493bc89d1cd3cc958b07d24320b5cea839d1a0d9a0c7c173efe","sha256:2cc1042342eedc42f3c01445504454cc02b1b145fe6940853bf9ac9268eba704"]
      - values: {"m":"80","VL":"10"}
        answers: ["sha256:f47bd61370fd5a8ac66dc0a422ab5f34428b1073b51361fee9b39dc809535ef9","sha256:2afb4dffc10bebeedb4a638e37fa9b1bdb3f78ec0373e1cd6b00e54606891575","sha256:6eca267dcce9a06b987090f2e8fb6e7fb089a0a75fa554af6f6ce98633f6f3ce"]
      - values: {"m":"0{,}5","VL":"0{,}06"}
        answers: ["sha256:6dfbf23f0e9d239155cc1bd43ddb8189e8d45da93e099bed3d27735a2fe652fd","sha256:1c23199f30c9badc54c99c69851eea9c0233f2ac72a4cfd7a5ff3a7aa569770c","sha256:93ea2e02f468d09b252a4f474fae7b70668f47eff97d0198bc14af5a12ff8b05"]
      - values: {"m":"30","VL":"4{,}2"}
        answers: ["sha256:64439d646b28f6b8387508e28a8bc59f7186d2f6285386a8bb067d1a212bcd8d","sha256:d49422a301956026b3d751ea5e8d49a8bd946630438b903721624457c9160d3c","sha256:641f03a506e5eec2541e191369e5d9be597453d990014485ae9bb8e2d24d121a"]
  - id: parte-sumergida
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un trozo de {{s}} flota en equilibrio. Si la densidad del cuerpo es ${{rc}}$ kg/m³ y la del líquido ${{rl}}$ kg/m³, ¿qué porcentaje de su volumen queda sumergido? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"rc":600,"rl":1000,"s":"madera"}
        answers: ["sha256:b35eababeb3a59d235a68b9c8474877c1e80e3beb09780a24b6a823f8c0ef228","sha256:058689c0326466c561e491830393c3ea2f0b7532bb89b5894a6ca02d5cbf07a7","sha256:93ab0c4f90f980913f7d6f904bcc43d24a66d02449b50235f9b566419cb4dc24"]
      - values: {"rc":920,"rl":1000,"s":"hielo en agua dulce"}
        answers: ["sha256:e63a6d09504bc3472dbb15a7f24695dfb16029b30fa2ee2717ac6fe9b9599688","sha256:e7e357a82514c014d3c2cb7fa3c3574adc295829ee1fec9c380cf597a4c9d0d1","sha256:40d1b8ecc8deb711e341672644370f3652091ea64e15c630830ba5abe41486c9"]
      - values: {"rc":250,"rl":1000,"s":"corcho"}
        answers: ["sha256:7f88804c5e3da2a5995fc5b657d195b8f84362de2cc4c95da51f6d6e3d2bfa7e","sha256:7d24d2e1767bb1916b392b9b903fd5e4687925d5c40c12b7134baeb9d94194fb","sha256:d9a61eb8deefe4231a7b3b2c2b4e358b7c1339a60d9e914dc1581d268d37d276"]
      - values: {"rc":7870,"rl":13600,"s":"hierro en mercurio"}
        answers: ["sha256:85696bd230fde84b0d6d62fe6768a861a9f94f6d565d7ab50a75a48d724dbacf","sha256:5c03eb4d8e971e70a5374c211e0d791c81991f00dc7878b4d30cb6cbb831a7d9","sha256:738ab4607a35c211435c4ee16a4e0d74c400324b970b2a54d4dfd004fbbf8b12"]
      - values: {"rc":700,"rl":1025,"s":"un tronco en agua de mar"}
        answers: ["sha256:ea9267f135831722874069877a0bb447bef0c649b6c4667cba01ca09731927c2","sha256:53d0edadf8ee28e6e64443e622df13b22907b8f7ba7c08e3019f9669661cf741","sha256:361758f10549f63eb3104860976b1134e3e883ba7a27c5681c990696e3a6b6e6"]
      - values: {"rc":950,"rl":1260,"s":"polietileno en glicerina"}
        answers: ["sha256:1e1cf748fe1b44f36b59626571b5f3b498490a3e8f8771fab7d3a2ab0c34508e","sha256:52bca18ba83649a40fd9fc3f0f5f93fdb1bc11892b3d2b223cddf4332bd2794a","sha256:2f51efc2164611af37a7d7a5a855bbc5a98b38be89fffaefd6e03e434b7bd66c"]
  - id: densidad-por-arquimedes
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un objeto pesa ${{Pa}}$ N en el aire y ${{Pw}}$ N sumergido del todo en agua dulce ($1\,000$ kg/m³). ¿Cuál es su densidad, en kg/m³? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"Pa":"19{,}6","Pw":"17{,}15"}
        answers: ["sha256:faff330f294dadfff4638e66db842777ecf2b526870240200d400495d606298e","sha256:7428f0643c9dca083443c230c227107b7668bdb044c1abbf5270ee056dd0a435","sha256:9119944eff4de1abb0651c53444c7b2eed73ddba8bfc7753b4ac26d1c2719a80"]
      - values: {"Pa":"9{,}8","Pw":"6{,}3"}
        answers: ["sha256:9c80295ffb000a85213f5ee85925ff11d05aa87f99c6da336995d83ea98c1636","sha256:7702eadd4f65d76070d6d343d60d18715999338ce7afd8a951243d7418e13c62","sha256:c6f56da68ffc977be40bc8fb63f6c0c2a1df58f7f63b8421de532296f26d92ac"]
      - values: {"Pa":"50","Pw":"45{,}5"}
        answers: ["sha256:e2ccfc6fcfd78a0ca4d25c4c68221ca7bf48cf2cb6767810f8ba3bdfb3775490","sha256:fefe32e657c2f0edbfaa28b60d3849950a0039bdc6e3a042498c9903615758d9","sha256:764328f1c6ccb3a714cf47f8a7db861ab902d074e5725a85c56d17b694995ef6"]
      - values: {"Pa":"7{,}35","Pw":"4{,}9"}
        answers: ["sha256:89937cc62b501857b4babc37e398986325561fec36ff4d7999f5d21c0aa28f69","sha256:b96611adfface3cec52cba07ad1ce7c3303c17b6aa37945c6a0cb5229582fbd8","sha256:4bf320099849813c1d655a463e6e31b0b3f74faad917124e18cf6ddd28ec8a9d"]
      - values: {"Pa":"30","Pw":"18"}
        answers: ["sha256:f1627a0826ed6a74c24b63d9eb6dbcdd19e12775dd7302f6931ea043a10c16a1","sha256:162c22628d725830c533c6c0341afcc03b9a94d9ff8884c64ff9675b5e3e4954","sha256:814d0fd58ca5cac18161d8ae4dbef01df3115fa6fc454dac79b06e2bda9f836d"]
      - values: {"Pa":"12{,}4","Pw":"10{,}84"}
        answers: ["sha256:dba8bdb13c6de5254bcc6a653c736670410d7808dadd8c34a85fd4ff952c7a5c","sha256:40cd4648b0569e48628deb48f70f4acbd5f2a5a531a6450d5771a9b8d16e8d08","sha256:2913b243ce07dd16438e19e76ef0e371f71efe9eb0b4a4ac4ef82b27f60035d8"]
  - id: estrechamiento
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Por una tubería de ${{d1}}$ cm de diámetro circula agua a ${{v1}}$ m/s. ¿A qué velocidad, en m/s, circula por un tramo más estrecho de ${{d2}}$ cm de diámetro? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v1":"1{,}2","d1":4,"d2":"2"}
        answers: ["sha256:d11cb79b06573232d4dd1de5fb8786d960ca63a922a024eda13c79c4b0e2db95","sha256:89da82b345ed142a1bab5b9c4d7158c12a39e5344c4923d69602c950696f81f2","sha256:a049e25c242c33ef75f66589ff6900bc3b9a4db128c7c43de2ff7b26336c663d"]
      - values: {"v1":"0{,}5","d1":10,"d2":"4"}
        answers: ["sha256:bccd1bfe6f4d7b3df10b817440d3b6f89716a3e57b237fa8812ba56f3e7e67b7","sha256:ca53fdd19d75695366e8bd0ca71827064b857c30d87e7ef3ace1996ec5e97346","sha256:61ae977d759f8b1317fe59750c6ed94f72de0734a20eaae7ceca357a3a8e3b29"]
      - values: {"v1":"2","d1":3,"d2":"2{,}5"}
        answers: ["sha256:2f8ce820b239bdec83a51814fee2f1ee19f2260d717482193799130db01bdccd","sha256:44c2827fecfa1164ea19c13c07410746f06694819112ac0b79152a6b277bf179","sha256:87b13ccb1e0155fef28f4dc82d134acfac2add50b82aafbbf7d2b7ed2bd67b04"]
      - values: {"v1":"0{,}8","d1":6,"d2":"1{,}5"}
        answers: ["sha256:be39b73cb8dbfb7b572e1aea82d3370e883ceb4fdb001a78e0a3a0494e473cb2","sha256:1f848251d55aedfc8eeaee62ae9ec84801d6e0e91252c6437a5031685bcd0660","sha256:6f5f5c81bcf96cf9a3ab96af67b40c76f9a0238e0b937c50b834b54db116220e"]
      - values: {"v1":"3","d1":2,"d2":"1{,}6"}
        answers: ["sha256:885670e83570f81169579466ace698c6a3603c0e606f3b93df2fa363c78b6ce5","sha256:388c0d326456b01b4df84a9b07a6fa711d1ded5d66bcb50ae9e2bef6e38215a5","sha256:0b645675d0b6a9f033753b093b8821a15a907722d940c3a36e0c586561d75c48"]
      - values: {"v1":"1{,}5","d1":8,"d2":"5"}
        answers: ["sha256:cbbe01caa9b59f66340a690ee7062879fb92d470a85714b434c967abd6da7f89","sha256:291763be5460a7d8e245cc1d7a20b2187b8f3ef99d13f54582d4b7f84b462d27","sha256:092d04b9ff62d56ff68ad0d31dc264c2bb1128f923184ae97d4b66c9aeee2a5a"]
  - id: bernoulli
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Por un tubo horizontal circula agua ($1\,000$ kg/m³) a ${{v1}}$ m/s con una presión de ${{p1k}}$ kPa. En un estrechamiento la velocidad sube a ${{v2}}$ m/s. ¿Cuál es la presión allí, en kPa?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p1k":200,"v1":"1{,}5","v2":"4{,}5"}
        answers: ["sha256:f3e1eebf753f27e67dff7514fac3ba3edb5b6fbbb1ff0919b91972d16ae4ac73","sha256:6a6eb8a245655aedb32eeef32e39eb1f6e14deb6ab4be509cc715c9f41e1f0a5","sha256:2af4cd4afe5de7ae1b1adcf2b01d69b3bd0b8af3be5675208f6fa11a8074b8df"]
      - values: {"p1k":150,"v1":"2","v2":"6"}
        answers: ["sha256:4749f547be67d22d25011a4ccd9264f1de00795bdde4ae55c5266778af38112a","sha256:cb6232e211005e0cebac46d1dbab8a75c40fb6a0ef66341313aca433384f484f","sha256:99dce38978b2fd024576a8cf1c47113de671a9aca744fabdbb2f9f332181a0cc"]
      - values: {"p1k":300,"v1":"0{,}8","v2":"5"}
        answers: ["sha256:a47bb65334f58ad24a6ef97615e7cd71aab9814655a82b454a1bf83a93ed6ec3","sha256:e8ccf56283e3666224bc47858c5f98fac7fba5678d195fb93dee436472d35246","sha256:3ee696b645a61d9cf134c80f41d81532a82a4c27faf880dc48b023e4ac388dee"]
      - values: {"p1k":120,"v1":"1","v2":"3"}
        answers: ["sha256:daf59f46f6c0dffb4531c92acf4fd2b38dbbdf7a603830db1465d1870145e34b","sha256:deec8f49aac42826cca5d014b7257ac0e661d4b263957acd88d73ec4270f1427","sha256:d5ba5e17fb6533abae1e1e8c359f980ef4fdb735d3201a172e8871144690dfbb"]
      - values: {"p1k":250,"v1":"2{,}5","v2":"7"}
        answers: ["sha256:8984f153bceb521c6615de03538b58aae3d31cb92f0f593fd355d4c95a39e1cc","sha256:9605ca5391804f50a4641eaa7b9c0187b87c8fe154a7434028ad09853a55ff79","sha256:3726067c87ab33abff1c123b259f65ea6dca9ff3c3f1e63f9e0f3e86d9ab44fa"]
      - values: {"p1k":180,"v1":"0{,}5","v2":"4"}
        answers: ["sha256:6e61b6208387da41a607637373892a41e7728787c8c598083bd78fd4b26a2d74","sha256:05b233b0e31d581215a7722df3d123171165ab1cd1b5dbee9ad2b04cb9b1d43c","sha256:587eef026790e653f3dbe86a0992c1711cd546f39ac29ccf803f16bb34e758ea"]
  - id: torricelli
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un depósito abierto tiene un orificio pequeño ${{h}}$ m por debajo de la superficie del agua ($g = 9{,}8$ m/s²). ¿A qué velocidad, en m/s, sale el agua? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"h":"2{,}5"}
        answers: ["sha256:25798151a59bf0314c22a41502472d438bb1c505588e7540736a375fe0d09ff5","sha256:7b6ec7b632b0caf8f13be14e2e4e2668af3ecbe1dece3c706105c2a8d127f140","sha256:ada415fcbd133a93683a24967a72abdd9fc528e21cfef44096e50a21e5fc7f4d"]
      - values: {"h":"0{,}8"}
        answers: ["sha256:b348594a9d95dc592976004b6ecb13bd71dbd64cc948a8a6f67ef4e919208cf6","sha256:7655100aa5bb7496ed6efa9f2dcd53277670cafb7c6cfe381978eb2314d15d35","sha256:80a51e409f06a9a41234ea479f110f4a5c2eb84d5657d3a809eb747fcc61f16b"]
      - values: {"h":"12"}
        answers: ["sha256:57ad7ecc743af3a82e11788e4f37b4354098e3a39f3d90d53d1833c8e7a12ce5","sha256:24f483d84cbb486ef78b70d3e1f68e7df50a11262c4e0d5fbf56dc92de68d919","sha256:41b4702051a842d4bc1c675e4eb4270bafd1dc47131af3874b0f9c34a28f41ce"]
      - values: {"h":"5"}
        answers: ["sha256:628249a6a11499a9432198adbe63e36d19673f7a8e3d0ff109e9249715b2d993","sha256:9e9659d15c956776f5e9253fc72f8cec462ad03ae17ef899879af00466592bbc","sha256:d987a11c0f63620444cdeceae659251ebfc61e8937615c6d228eabee0a24bcd4"]
      - values: {"h":"0{,}45"}
        answers: ["sha256:1a6747ba0de6bc41c30cb8957a99e82e99916e4aaefd5f717f163762aa63af6b","sha256:307124b5c7fa21a3dc83e3b5023c8c4c236f51194430bbc58b2dbec7bd80572e","sha256:7e5efa007ce75d0a99d7df741e274b7b4877ff5410055ea3a03a31b5df5a42b6"]
      - values: {"h":"7{,}2"}
        answers: ["sha256:133fdb6ed5befa10e7c74d10690f8e7a1bec1183e7b14594f988fc9df6c51f0b","sha256:4486c054df87e2ddab760a78e283d2ef8e4ddb6283e03b03f1e733e5b2d8ea01","sha256:7b684ef406c711e1eb2aba951cd64e9e179e1126ef2691389462b424c1cceeb2"]
  - id: llenar-un-deposito
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una manguera de ${{D}}$ cm de diámetro interior echa agua a ${{v}}$ m/s. ¿Cuántos minutos tarda en llenar un depósito de ${{VL}}$ L? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"VL":500,"D":"2","v":"1{,}5"}
        answers: ["sha256:5a9f420af22df2f03333766eecc9957f26791a8f220e475fd0e7b3a41159b429","sha256:9101095691f55773d4532c2dcd50c630c6bcb3354a14bcbd6e19284cebfff0df","sha256:dd1ddb99b5ec7dcd645efe3435ce0aff063ef86fd51092eb81a3bfc16b4f44b5"]
      - values: {"VL":1000,"D":"2{,}5","v":"2"}
        answers: ["sha256:48caa6cf71306ccf427ff3a9971500e2738142369f180932c26510aec128c49f","sha256:dd80970845f9034a64a759864e92437cf7a75956584d1856070f9819f5b80c4e","sha256:3e6d24170afcebfc1dc8fba375b96269b468d704d219a88b877a09de9c8d27b8"]
      - values: {"VL":200,"D":"1{,}5","v":"3"}
        answers: ["sha256:21774d103937db33e5cd5d7f0455f55a23bea69b3ef1b1882a260426e2152232","sha256:fcf7e4bd4d8a0f24e044d0486521179a90143e2d8bff22dfec39396111400766","sha256:9f96bc0d85b30cb948eed777336802f109a7404ba1709d852648f10e844c57e8"]
      - values: {"VL":5000,"D":"5","v":"1{,}2"}
        answers: ["sha256:d3728fb09a797fdcbda24e4bb7abe4a60f6307cba0bda17bc62480a93d1aee75","sha256:a1c84e779ce28ba1ef5011fcbbf6ce713196f0722b0139cd60ee90d9a6111212","sha256:656862a0147ae72d02545ae33fe8d1179198b64e450584fcea23442167d55788"]
      - values: {"VL":80,"D":"1","v":"2{,}5"}
        answers: ["sha256:5ad23b70d8bd7f472a6263fbf1966d193eee80ce07d8587ff300e4edef8f37a5","sha256:a7bdcc15a173bc9df0309fc422a9840c1485800af8595bdc41180995eb57611b","sha256:c8e6a4e656e838e8d030802ca6bfd58916a258b9bfa03037b13930a291dad084"]
      - values: {"VL":1500,"D":"3","v":"2{,}2"}
        answers: ["sha256:540acfcadca00180890e54ed429279dcbe6669d1779b67a9c1e91ec55c9e5e33","sha256:43a6938bee8af10269af2c73752653e8536b25ab9bc3435408c676bbcf10f6b7","sha256:201dbc33756311123979bb906bcd499813b8732c2a65af0d9f30a3a5f1f4f3f7"]
  - id: flotacion-y-bernoulli
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Deduce el principio de Arquímedes a partir de la diferencia de presiones entre la cara inferior y la superior de un cilindro sumergido. (b) Explica por qué un
      barco de acero flota y una bola maciza de acero se hunde. (c) Explica con la ecuación de Bernoulli por qué al tapar parcialmente la boca de una manguera el agua sale más rápido y
      por qué dos barcos que navegan muy juntos tienden a acercarse.
    sealed: "gz64:H4sIAAAAAAACCoVUwW4bNxD9lYfFHqTtVkB8ChT0oBYOfAiQU3rppsGIOysz4JLrGVKwYuhj/AE+9RP0YwW5si0f0t6kJWfem/fm8aHS4FK0wVfrqmkWtGwaXHskD2Od9b0E9IwtKaPe1DiAXExCqG/qFiZ4OIIhIWiaWGwQECYJQ/K97alHfVu3+c4krPb0jwdt6XsAK0Y6BFmjnr49dF3k+/hg/XA84le8ftE0HY/4DV0nt+HbgN1NvcInUgyJ5QcpHEUWcqxQBvnkyH/IcPM5PEfq/C0ZSyARu6WMXC/+F3O5uUTtunZzc/nhz3oNdphYszwOg0u2zz+VXPhOfcBiEuuNnWzRbyN36fQ0cs+6XOGPRO4uWRYMQUbK1KfEPaO3e9tbAb+qrxisD4o9S7QmT7rqfOebZrHNVn10IRJcwF3iF/js3pkaaJcIdpfIgRw0HQLIR9Z8pmlk2VlRLkPE0IcW5chYaaEWmtCz1+Jk04zcW2qaYh77IAXUUSnOOCtcO2xJTPE3eYI5PWrZjszEsAQ4xz7/7TxZ4XVG2AeXRvaIIZLLlbn3yDi8gS/g7c+APxG2wRFGMvYHIVr25xvn8nK1MFgkT4r6fY09G9bLPksc4MOzGWc1BZoGayz7OMv5bIApWXEwlHpyqDf7OltpgleWPa2z4MJ9MlYyiLIxJQH1Zo7Enl0whRzl+WPWz0dh9EFnGRVnYjBWTMrznR6zP5NYJSzyCpLOacoHrFHY3IblB0xB8DuLD8k526Ke8Au6bhAy767KGmP/91UN1s5nwpHKdHmTHMmurE420J2ePBf7TBApGrQgPT09W/CSay7U2bnM+nJB2CN/M0Ej5cn4PpaHgrXFoahvBxb2OaOleJxS2eGAObjsEKKEVdVWkrZiTbX+66EyYkufal193s5+s5uLM9kxXPbteSYaPGuRhh1Oj8LUvmbj52HOyFPyMWi1vjq2b7Cv7ydnDZU3J2dxtvj8ML5d3v9q80UpF0XrUyk4vJqHKQeo7LbfJRbKqr1syNumX4//AqMxvYTRBQAA"
  - id: r-pascal
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos pascales son $1$ N/m²?
    answers: ["sha256:b84da0d15e5e943e166b145ee6d3662d88301a7a7959c98a78edee3f5e1abc9d","sha256:e07a1a952955d485044746e965f27f4f608f530d2f7a81927e90da85fc671fab","sha256:a78c98495572c7c7dee0bbe1936a7313d35984ad02c880db8f8e320dd9c0fc98"]
  - id: r-presion-forma
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿De qué depende la presión en el fondo de un recipiente con un líquido en reposo?
    options:
      - |
        De la forma del recipiente
      - |
        Del área del fondo
      - |
        Solo de la profundidad, la densidad del líquido y g (y la presión en la superficie)
      - |
        Del volumen total
    answers: ["sha256:ae08f9882848befc29bb26933cfa6fa5aeeec6b5af3027076b1179dfebf473c6"]
  - id: r-empuje-profundidad
    tier: 2
    type: opcion
    review: true
    prompt: |
      Un objeto ya totalmente sumergido baja más hondo en el agua (que no se comprime). ¿Qué le pasa al empuje?
    options:
      - |
        Aumenta
      - |
        No cambia
      - |
        Disminuye
      - |
        Se anula
    answers: ["sha256:84fa2fb926bd4e809c28fbb3c69223694877f4a187dbafeb7b2074fbd063bbc3"]
  - id: r-flota-densidad
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo flota un cuerpo en un líquido?
    options:
      - |
        Cuando su densidad media es menor que la del líquido
      - |
        Cuando pesa poco
      - |
        Cuando es grande
      - |
        Cuando está hueco, siempre
    answers: ["sha256:01f224c9afa31d070156d8f11bdf16a346483d154d637cc1e5780f3176310510"]
  - id: r-mitad-diametro
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si una tubería se estrecha a la mitad de diámetro, ¿por cuánto se multiplica la velocidad del agua?
    answers: ["sha256:ef54e6b6cd2378daad93d16d993a897e24fb15607888063e2392f4f7f2f7c7aa","sha256:522e9d36d049e4c8a94170dee499bfb010562819c262d43953ce2746694a3684","sha256:bd56d6a83858eaa2441de8ffc99559526037fe468398c6b62c48f9c83ee3f108"]
  - id: r-velocidad-presion
    tier: 2
    type: opcion
    review: true
    prompt: |
      Según Bernoulli, en un tubo horizontal, donde el fluido va más deprisa, ¿qué le pasa a la presión?
    options:
      - |
        Aumenta
      - |
        No cambia
      - |
        Se duplica
      - |
        Disminuye
    answers: ["sha256:c31e81f6bc9f0b02997e5b186bfd6ded733d151295bcc40e0c16254d16b7a598"]
  - id: r-10-metros
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué altura de columna de agua equilibra, aproximadamente, la presión atmosférica?
    options:
      - |
        Unos 10 cm
      - |
        Unos 76 cm
      - |
        Unos 10 m
      - |
        Unos 100 m
    answers: ["sha256:162232dad3b77f1d1c9f53f275f6ec4640ada59a1418d110b6a7666ba608fbd1"]
---

# Fluidos: densidad, presión, hidrostática, presión atmosférica, principio de Pascal, principio de Arquímedes, continuidad y ecuación de Bernoulli

¿Por qué flota un barco de acero de miles de toneladas? ¿Por qué duelen los oídos al bucear? ¿Cómo levanta un coche un gato hidráulico con el empujón de
una mano? ¿Por qué un avión se sostiene en el aire? Los líquidos y los gases (los **fluidos**) obedecen las mismas leyes de Newton que los sólidos, pero se
describen mejor con dos magnitudes nuevas: la **densidad** y la **presión**. Este nodo presenta la hidrostática (fluidos en reposo) y una introducción a la
hidrodinámica (fluidos en movimiento).

## Objetivos

Al terminar sabrás:

1. Calcular densidades y presiones, y la presión a una profundidad.
2. Explicar la presión atmosférica, cómo se mide y la diferencia entre presión absoluta y manométrica.
3. Aplicar el principio de Pascal a sistemas hidráulicos.
4. Aplicar el principio de Arquímedes: empuje, peso aparente, flotación y medida de densidades.
5. Usar la ecuación de continuidad y la de Bernoulli en fluidos ideales en movimiento.

## Qué debes dominar antes

[[fis-dinamica-aplicaciones]] (fuerzas y equilibrio) y [[fis-trabajo-energia]] (energía cinética y potencial, para entender Bernoulli).

> [!question] Test de entrada
> 1. Área de un círculo de $10$ cm de diámetro, en m².
> 2. ¿Cuántos m³ son $250$ L?
> 3. Peso de $3$ kg ($g = 9{,}8$ m/s²).
>
> Respuestas: unos $0{,}00785$ m²; $0{,}25$ m³; $29{,}4$ N.

## 1. Para qué sirve

- **Ingeniería**: frenos y gatos hidráulicos, presas, depósitos, redes de agua, tuberías.
- **Transporte**: barcos y submarinos (flotación), aviones (sustentación), globos.
- **Medicina y biología**: presión arterial, circulación de la sangre, buceo.
- **Meteorología**: presión atmosférica, borrascas y anticiclones, altímetros.

## 2. Densidad y presión

> [!practico]
> Con zapatos de tacón fino hundes la arena; con raquetas de nieve no te hundes en la nieve, aunque pesas lo mismo. Lo que cuenta es cómo se reparte la fuerza: la
> **presión**. Y al bucear notas en los oídos que la presión crece al bajar: es el peso del agua que tienes encima.

- **Densidad**: $\rho = \frac mV$ (kg/m³). Agua dulce: $1\,000$ kg/m³; agua de mar: unos $1\,025$; aire: unos $1{,}2$; mercurio: $13\,600$.
- **Presión**: $p = \frac FA$, fuerza perpendicular por unidad de superficie, en **pascales** ($1\ \mathrm{Pa} = 1\ \mathrm{N/m^2}$). En un fluido en reposo actúa por igual en todas direcciones y siempre perpendicular a las
  paredes.
- **Presión hidrostática**: a una profundidad $h$ en un líquido de densidad $\rho$, $p = p_0 + \rho gh$, donde $p_0$ es la presión en la superficie. Solo depende de la profundidad, no de la forma del
  recipiente («paradoja hidrostática»); por eso los vasos comunicantes igualan su nivel.

## 3. Presión atmosférica

El aire también pesa. A nivel del mar, la **presión atmosférica normal** es $p_{\text{atm}} = 101\,325$ Pa $= 1$ atm. Torricelli la midió en 1643 con un tubo lleno de mercurio invertido sobre una cubeta: la
columna se queda en unos $76$ cm, porque la presión del aire sobre la cubeta equilibra el peso del mercurio ($p_{\text{atm}} = \rho_{\text{Hg}}gh$). Con agua, la columna mediría unos $10$ m: cada $10$ m de
buceo añaden aproximadamente una atmósfera (unos $98$ kPa).

- **Presión absoluta** (la total) y **manométrica** (la que excede de la atmosférica, la que mide un manómetro de neumáticos): $p_{\text{abs}} = p_{\text{atm}} + p_{\text{man}}$.

## 4. Principio de Pascal

Un cambio de presión aplicado a un fluido encerrado se transmite **sin disminuir** a todos sus puntos. En una **prensa hidráulica** con émbolos de áreas $A_1$ y $A_2$, la misma presión da
$$
\frac{F_1}{A_1} = \frac{F_2}{A_2} \quad\Rightarrow\quad F_2 = F_1\frac{A_2}{A_1} .
$$
*Ejemplo:* con émbolos de $2$ y $20$ cm de diámetro, la fuerza se multiplica por $100$. No se crea energía: el émbolo grande se mueve $100$ veces menos (el volumen desplazado es el mismo). Así funcionan
frenos, gatos y excavadoras.

## 5. Principio de Arquímedes y flotación

> [!practico]
> Dentro de una piscina puedes levantar a una persona con facilidad: el agua la empuja hacia arriba. Ese empuje es exactamente el peso del agua que ocupa su
> lugar. Si el cuerpo pesa menos que el agua que puede desalojar, flota; si pesa más, se hunde.

Todo cuerpo sumergido total o parcialmente en un fluido recibe un **empuje** vertical hacia arriba igual al peso del fluido desalojado:
$$
E = \rho_{\text{fluido}}\,V_{\text{sumergido}}\,g .
$$
- **Peso aparente** de un cuerpo totalmente sumergido: $P - E$.
- **Flotación**: un cuerpo flota si su densidad media es menor que la del fluido; en equilibrio, $E = P$, y la **fracción sumergida** es $\frac{\rho_{\text{cuerpo}}}{\rho_{\text{fluido}}}$. *Ejemplo:* el hielo ($917$ kg/m³) en el
  mar ($1\,025$) flota con un $89\,\%$ sumergido: solo se ve «la punta del iceberg».
- **Medida de densidades**: pesando un objeto en el aire y sumergido, la diferencia es el empuje, que da su volumen. Así comprobó Arquímedes, según la leyenda, si la corona del rey
  era de oro puro.

## 6. Fluidos en movimiento: continuidad y Bernoulli

Para un fluido **ideal** (incompresible, sin viscosidad, flujo estacionario):

- **Ecuación de continuidad**: el caudal $Q = Av$ (m³/s) es el mismo en todas las secciones de un tubo: $A_1v_1 = A_2v_2$. Donde el tubo se estrecha, el fluido va más deprisa (tapar parte de la
  boca de una manguera).
- **Ecuación de Bernoulli**: a lo largo de una línea de corriente,
  $$
  p + \tfrac12\rho v^2 + \rho gh = \text{constante} .
  $$
  Es la conservación de la energía por unidad de volumen. Consecuencias: donde el fluido va más rápido, la presión es menor (efecto Venturi, atomizadores, la atracción entre barcos que
  navegan juntos, una parte de la sustentación de las alas); un orificio a una profundidad $h$ bajo la superficie libre de un depósito deja salir el agua a $v = \sqrt{2gh}$ (**teorema de Torricelli**), como
  si hubiera caído desde esa altura.

> [!formal] Con rigor: la ecuación de Bernoulli es el teorema trabajo-energía
> Tómese un tramo de fluido entre dos secciones. En un tiempo $\Delta t$ entra por la primera un volumen $\Delta V = A_1v_1\Delta t$ y sale el mismo por la segunda (continuidad). El fluido de detrás hace un trabajo
> $p_1\Delta V$ y el de delante, $-p_2\Delta V$; el peso hace $-\rho\Delta V g(h_2 - h_1)$. Igualando el trabajo total al cambio de energía cinética, $\frac12\rho\Delta V(v_2^2 - v_1^2)$, y dividiendo por $\Delta V$:
> $p_1 + \frac12\rho v_1^2 + \rho gh_1 = p_2 + \frac12\rho v_2^2 + \rho gh_2$. Los fluidos reales tienen **viscosidad** (rozamiento interno) y, a velocidades altas, **turbulencia**: entonces la ecuación es solo una aproximación. $\blacksquare$

## 7. Errores típicos

- Confundir presión absoluta y manométrica.
- Pensar que la presión en el fondo depende de la cantidad total de líquido o de la forma del recipiente.
- Calcular el empuje con el volumen total de un cuerpo que flota (es el volumen **sumergido**).
- Creer que en la prensa hidráulica se gana energía.
- Olvidar pasar los diámetros a radios (o a metros) al calcular áreas.

## 8. Resumen

- $\rho = \frac mV$; $p = \frac FA$ (Pa); $p = p_0 + \rho gh$; vasos comunicantes.
- Presión atmosférica ($101\,325$ Pa, $76$ cm de mercurio, unos $10$ m de agua); absoluta y manométrica.
- Pascal: $F_2 = F_1\frac{A_2}{A_1}$.
- Arquímedes: $E = \rho_fV_sg$; peso aparente; flotación y fracción sumergida.
- Continuidad $A_1v_1 = A_2v_2$; Bernoulli $p + \frac12\rho v^2 + \rho gh$ constante; Torricelli $\sqrt{2gh}$.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo crece la presión con la profundidad.
2. Qué mide el barómetro de Torricelli.
3. El principio de Pascal y la prensa hidráulica.
4. El principio de Arquímedes y la condición de flotación.
5. Qué dicen la ecuación de continuidad y la de Bernoulli.

## Siguiente

el tema `fis-calor-temperatura` (temperatura, calor y el primer principio de la termodinámica); para ir más lejos, [[fis-fluidos]].
