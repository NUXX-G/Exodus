---
id: fis-momento-choques
title: "Momento lineal y choques: impulso, conservación del momento lineal, choques elásticos e inelásticos, centro de masas y propulsión"
area: fisica
trunk_level: 3
prerequisites: [fis-trabajo-energia]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 9: «Momento lineal y colisiones» (momento lineal, impulso y colisiones, conservación del momento lineal, tipos de colisiones, colisiones en múltiples dimensiones, centro de masa, propulsión de cohetes). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/9-introduccion"
  - "D. Halliday, R. Resnick y J. Walker, «Fundamentals of Physics», 11.ª ed., Wiley (2018), capítulo 9 (centro de masas y momento lineal)."
hints:
  - "Concepto: el momento lineal p = m v mide la «cantidad de movimiento». Una fuerza que actúa durante un tiempo le comunica un impulso igual al cambio de momento. Como acción y reacción son opuestas, en un sistema aislado el momento total se conserva, también en los choques."
  - "Herramienta: impulso J = F_media Δt = Δp. Conservación: m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂' (por componentes en 2D). Totalmente inelástico: v' = (m₁v₁ + m₂v₂)/(m₁ + m₂). Elástico: además se conserva la energía cinética; en 1D, v' = 2 v_cm − v. Centro de masas: x_cm = Σ mᵢ xᵢ / Σ mᵢ."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 9; Halliday, cap. 9."
exercises:
  - id: momento-lineal
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el módulo del momento lineal, en kg·m/s, de un cuerpo de ${{m}}$ kg que se mueve a ${{vk}}$ km/h? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m":"1300","vk":72}
        answers: ["sha256:3ccb7e9df7ac932d850e925cfa6357b4ac393bdb95a72da94af33ea282ffede0","sha256:44fba0be22f21c8fa4540b0d27315781d8f8f48305f66308ab5a304a8a54babc","sha256:af4cc42a453e4a7e5e344415e2dee8ca05398364ff8b7a280dca7de36174e185"]
      - values: {"m":"0{,}43","vk":108}
        answers: ["sha256:0ebcde1085d3e5e356b6b3d53ed28e44a3ccee50ab9f747b49dc94a0f9d17636","sha256:ba0332a0f9bde4f7e20ba2ab0b15eb12374069e5be85a13221cf64b7afc831a8","sha256:d98adbe5b455649df1469f954730c419a87fbc9e489c7398a660581d590d0604"]
      - values: {"m":"75","vk":18}
        answers: ["sha256:c59948fb001540ec0b0172b2f1df39e094b401bb023cccdb7aa3f156809662fa","sha256:18b19855a7e480adb161907546755037c9d8dddf60f683fcf5b4d383b26c83b9","sha256:81a4e46ed5297f8809a3c4a8f0e77b5990fa2a455a1e15847aebd944d6077832"]
      - values: {"m":"12000","vk":54}
        answers: ["sha256:251268764813baa425649d1a832c8cd4f799b95ec33a3f1c5b5d0953a355cea1","sha256:811e4d827ced7504045312a665ca087820fb29f7705edd6ba3c62b970415b73c","sha256:c4e866ef38756fd38a8d23d99874643bd452d08e8f9117197805ac70a2f0ed4f"]
      - values: {"m":"0{,}0042","vk":1260}
        answers: ["sha256:09188bb9eb7334a4fb6dbda795a0e681bd7c251b8c941f2374e788b190c5d154","sha256:3941a10fe43c19f2ef31079cdd164ddf09c6c83c4a657a087f98fa5788ca47b0","sha256:e3935fc0e27048f335fbed5f3c3dd7f1115c043a40a848a88711f4ba5c331f6a"]
      - values: {"m":"250","vk":90}
        answers: ["sha256:e9355ae7adb9cf8661bdb4b66f1df21edb0bb4e20c9e88cee0feedace48bb273","sha256:e433c4efe8a80d836e1f5a8fc3da4cd36190938c840ab115b02a436131550895","sha256:1cf6a3eeb5c14f8cfdc5a519a97993aa8da7b8bc86205500e48b23e5b69736c5"]
  - id: fuerza-media-en-un-rebote
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una pelota de ${{m}}$ kg llega a una pared a ${{v1}}$ m/s y rebota en la misma dirección, en sentido contrario, a ${{v2}}$ m/s. El contacto dura ${{dt}}$ s. ¿Cuál es el módulo de la fuerza
      media que la pared ejerce sobre la pelota, en N?
    variants:
      - values: {"m":"0{,}45","v1":20,"v2":15,"dt":"0{,}008"}
        answers: ["sha256:7049023ea8fa64d0fdefb2f62ccc55c222eb5a219995059c232029a47c2969c0","sha256:2f8c41cd083e1e2817a8a032123860f81277914cd64aa577c65ec6a5b13c932f","sha256:65d4d13e90dc46fc2040383ca996e7fbdda14a00f0c976b39e8581e315af44e7"]
      - values: {"m":"0{,}16","v1":30,"v2":25,"dt":"0{,}002"}
        answers: ["sha256:7429ab085e9bb2907a6590fdb307db52a8736a7b33bb3ebdcee901ddab701b3a","sha256:f9648396ddc33815c73cb327d5c8262f31fe7aee754ccb3c2620a95e3bb689e6","sha256:2f1f0c7904ba7d51af0d2db02c1855b48421dae2327a431460cc4ca241ccd135"]
      - values: {"m":"0{,}057","v1":40,"v2":35,"dt":"0{,}005"}
        answers: ["sha256:64a7090a92cbbaa990fbac994366aa9ecc52f3cc4f7880457c496c5669b86cc0","sha256:8bc9ad7eb60c6d98ac2c627d8f3d8373696ca647757387cc898505ead6923989","sha256:d3c6e43222d82b13eb7a7086d42c018fb28f9c6da36a02c27a0ae7dd55c49851"]
      - values: {"m":"0{,}6","v1":8,"v2":6,"dt":"0{,}04"}
        answers: ["sha256:b6d125668c6a194ab7b848de43d4dc19913e1cf5e5310bd8abc6ed8a5e995b8e","sha256:96ba74f18e76acc11dabd6b7545dfb477c47817cc180e03cf537cb32461132e6","sha256:0545e481a9b9b1eea72b4158c18069a4a73165939887ec34995a5e1426993e66"]
      - values: {"m":"0{,}27","v1":12,"v2":10,"dt":"0{,}01"}
        answers: ["sha256:034dddec1649de097866ea6a54ebc56b2a35e4a7e7761296d353473e795c6eb8","sha256:ff98778f4a822f81939840ab33a221cf34962611f7abd23caf2b5b2fd12bde96","sha256:79ae9532e901c75b2fb47f8db29b113503b352dc528b44e1f161fd63c5d0a3d6"]
      - values: {"m":"1{,}2","v1":5,"v2":3,"dt":"0{,}05"}
        answers: ["sha256:40a207386ce9b3bf29bf1aee1ac9f6fc9f96a9771c8e4937a0c98639703bd842","sha256:79dceb2e91dd305d65c7da1ccb9c9209a025398caac82fd9bf77e723672fc9ba","sha256:df7a7c6b0cefce1e2c4569da2843cca2636959b2eab0e87d13d8ba7bd29fa9ed"]
  - id: retroceso
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un cañón de ${{M}}$ kg, en reposo y libre de moverse en horizontal, dispara horizontalmente un proyectil de ${{m}}$ kg a ${{v}}$ m/s. ¿Con qué velocidad retrocede, en m/s?
    variants:
      - values: {"M":1500,"m":"10","v":300}
        answers: ["sha256:c14b903dd03b7d405ff8ba93c30f108c4a54159a51dfd1c7c3ce0f10b2a0afe2","sha256:35938bd962c6f5acd9c4eb027de176c81392e250cdef3843fdd385e3eb5c5b60","sha256:ee085d15b30728cc0358973218f136f52e49c869c41918685f7e89454fc801d9"]
      - values: {"M":3.5,"m":"0{,}008","v":900}
        answers: ["sha256:03073951d96146cd57a20413402feb8d93ddc211f495f879dc8b194e3232d49c","sha256:89e494268f8b02bb0bfa7f87ef5702202bd7fde71ef5bbbe8597147345c32262","sha256:db743efc53a008c5f5c55982e72216c053acc61081c6f4f1c36294f6514fe266"]
      - values: {"M":800,"m":"5","v":250}
        answers: ["sha256:2e03bd2c883813afc304e9801722d09392a2d4aadca476baf26e65980d02be7b","sha256:c9f940bffd2c54d736aa515b82324e735f9be5d621ef0ae05fd466caaf6307f6","sha256:16910994d49dc840fd9df92c72755bb1bfa62315663991e7fad5f761eb699f73"]
      - values: {"M":2.2,"m":"0{,}015","v":600}
        answers: ["sha256:3efe06e1cc1540aef0283adf4c6977b06a4cb74ca6ac561523146062ca24e7de","sha256:583d427ee0eda8dda25a0dae17856ea1d279cfea2814c1a2214e99fac8a5d26c","sha256:6703331220b3e350bb23d4d3b020c3e7fd8293d8767ca0713c682db4ec69e646"]
      - values: {"M":60,"m":"0{,}5","v":30}
        answers: ["sha256:04637883d2a4bbc8b6ac3097ebbf72eb1a88c900ebceda28a8fa59140ae8607f","sha256:d1998d526de43e9a32cbf8dc868c5a312b6eed1f1d196895126d3d07607c3b22","sha256:b40ab72d36e5029a89d6fdb3f00289fcd389fcc5e70453c5610dc393d3d1f7a6"]
      - values: {"M":5000,"m":"40","v":450}
        answers: ["sha256:52a2af65728a1ef18a4bf407df8f462dca3d41390812122543d4cd600e46b21a","sha256:666e3803cce7e8ae41294bbe4a21200ee67d738476898f3d773ba79f28032d56","sha256:38cadf0eb40e960d8167920e33ca30ff648b367689f4fd15969e5368b39c45a5"]
  - id: choque-totalmente-inelastico
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un cuerpo de ${{m1}}$ kg que va a ${{v1}}$ m/s choca con otro de ${{m2}}$ kg que va a ${{v2}}$ m/s (velocidades con signo, en la misma recta) y quedan unidos. ¿Con qué velocidad
      (con signo) se mueven juntos, en m/s?
    variants:
      - values: {"m1":2,"v1":6,"m2":3,"v2":-1}
        answers: ["sha256:e08416602d74ac31bbfa7087063ef9dc2abffb1194eba279e34e393665381d74","sha256:1f31516d8eb3014d4647531ceb8515ec9842b764cd3abb64b59084be06a85eb9","sha256:f7353b0360cba49ed188bb013b2a0ff4194430875354c1caa54765bcef6ffc0f"]
      - values: {"m1":1200,"v1":15,"m2":800,"v2":0}
        answers: ["sha256:2d26e8399effdcc66b58d4857b5612dbd3aead98a4655d91059284a6bb509ff1","sha256:916d9f77e4cd9e9716c910e2255cef436d4968a41e98fd794666ae5b9d9e9556","sha256:25171aa8ea954a397e71216ee137f7ae3bc78e05f7eb703d139921a4e68eaf9e"]
      - values: {"m1":0.5,"v1":4,"m2":1.5,"v2":2}
        answers: ["sha256:1ec69ab5c880eb27b9125d7d1c2872e3833c2fcb160df962b7dc0307aa64d301","sha256:528002d5d3cc36152f0210b2bba39340d2c1fddcf8333fe6150bb58a60d5d055","sha256:eb6b2549f19bb481730ca0fc434b12a715f7f43d7691c4e43ac05ba61dfe37f3"]
      - values: {"m1":70,"v1":3,"m2":50,"v2":-6}
        answers: ["sha256:a0d2364443e0ff4a87d6fb42aea9f1d19e1f86f94eb8cfa1f7b93cee871b7133","sha256:817da56cec70b23124398f49d26cdfde551791836651115a4a23a3e8cbdf5392","sha256:1fadba07da4c3a7fe64c9662c84022c1218c622595c0b7b68e9bacaf2e525a24"]
      - values: {"m1":9,"v1":-2,"m2":3,"v2":10}
        answers: ["sha256:7207cd45247231bb298e0e43783790969c19bc4e3c12163a3c56e9da86055980","sha256:93cee51c20493a779117fe6f72ea6d4e8265ff36e8e242b90117d886449f29ab","sha256:2e1fd5cdf14e98818de3f33357162909c0570ea1f9ed7675ba89e3382f6c5bad"]
      - values: {"m1":1000,"v1":25,"m2":1500,"v2":-10}
        answers: ["sha256:001241dddc70206d1ce370d184365b613440ee3a34bb94019f318109fda8f666","sha256:debe6f9db22db255784b1718e5d0acc692a64cd0ead3aa68b181878b8d923b41","sha256:c134244b7187a19dbecff8128d48b8ed21a9bd18501af7dfa69aae95c9832691"]
  - id: energia-perdida-en-un-choque
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un cuerpo de ${{m1}}$ kg que va a ${{v1}}$ m/s choca con otro de ${{m2}}$ kg que va a ${{v2}}$ m/s (con signo, en la misma recta) y quedan unidos. ¿Cuánta energía cinética se pierde
      en el choque, en J?
    variants:
      - values: {"m1":"4","v1":5,"m2":"6","v2":0}
        answers: ["sha256:3047510ee4987a69293bcbc87a9b82759df48ed9c5d285bcf7f01934ba122c92","sha256:40e1731c8299991d1725bd0fef218e73488d142f0c54a0d2d439ec5431b89c4f","sha256:2d9ea6dfdfd31fe131183939e6ec7b5428241fc1e37067defa0599d2e28153c9"]
      - values: {"m1":"1200","v1":20,"m2":"1800","v2":0}
        answers: ["sha256:1d15199f1f4c1f6134d366b679ace9847464d7c44c36f333dcf6a51d511932e6","sha256:053af7c8d7189caada4d8214b86e8f8cc2f98e8d1755f42b35352c7ef7d2fe9a","sha256:189d15283cbc404a210365fb69f3735b4a7a6ddb92d8349bcf210d6e95485e80"]
      - values: {"m1":"0{,}2","v1":10,"m2":"0{,}3","v2":-5}
        answers: ["sha256:75d5c7f2e6e8ee62d31099647d0532a3d3ab07d2ff4ecc1a2f5f9823cf55cd0e","sha256:9a477b0fd9333fea0858388a7b8295dcdc2327d5dd0ee3718773900e8e8dad54","sha256:4c70b988b305852da3f0f5ebe297d0a3baa2c45e7db3890dd7ad0bebbf2090a8"]
      - values: {"m1":"50","v1":4,"m2":"30","v2":2}
        answers: ["sha256:555f2104b7d47762f7fd7065091a9280b263157571df52a44f9760e9941f7cc8","sha256:0498327e09d0f6c188e5ddd101061e809eed606ac05208e9c61b9d1cc4be3191","sha256:408aea41a288cbd627b406f3686e5f579f4cdfdb7e2a0abbf21a52cc160fddea"]
      - values: {"m1":"3","v1":8,"m2":"1","v2":-4}
        answers: ["sha256:2bba7f15baf912dafc7b9c3d72f29ab79ddfd2f65c7ad0ab3e6b6bf5e99e9636","sha256:054b8419237665c5618dc921ebb43ef299d410f3148c20d1ecfe5dbffa633332","sha256:a5be46c7c0b5618e964b0a512fba37dca64747ffb96f09eb629e49104f7dda84"]
      - values: {"m1":"800","v1":15,"m2":"1200","v2":5}
        answers: ["sha256:3834ab2d77f582955793d4b155de3ff62efc5148344458080ee36b4c0a45f0ac","sha256:88bd4b3a8bb015b334cfb311636aae387ea142fde6844b5444f580cd7ede441c","sha256:fd557ecbf51b0590623e522bd27f61b91a717b14cc681181104d7f7335160c3e"]
  - id: choque-elastico-primer-cuerpo
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un cuerpo de ${{m1}}$ kg que va a ${{v1}}$ m/s choca **elásticamente** con otro de ${{m2}}$ kg que va a ${{v2}}$ m/s (con signo, en la misma recta). ¿Qué velocidad (con signo) tiene el
      **primero** después del choque, en m/s?
    variants:
      - values: {"m1":"2","v1":5,"m2":"3","v2":0}
        answers: ["sha256:0b5bc2d68366abb84baa22bf38bdc9858701a6e12a99fcf0f3186d6377829e89","sha256:4ae072aa5e661871426e92a39d0584950fea24915d44d891bb08e060e811ebeb","sha256:a341b9c1a08c41304b098b990eb31461733794b591bb734f3bc56c5405c1eafe"]
      - values: {"m1":"1","v1":6,"m2":"4","v2":-2}
        answers: ["sha256:e8c030603e3c36e4cafbc36db6f1e200b03faa8ccae2378d460c370e08e94f75","sha256:6266d9afccb58f6d7762b51189d1c45fd527ee57660fa43db93bc3d9dde7d487","sha256:ae1021d9a3e58dafc28c74849d8f106de3bd2aab1f087ce028d8ca913e176ae6"]
      - values: {"m1":"5","v1":3,"m2":"1","v2":0}
        answers: ["sha256:75502bc49408cb9f514e48cfe5ae87075a91a301641b0b3ebd0de821cd6b1cfd","sha256:bec348befef1aba8f8c2b6736f95240f78833ba3a38e83c903d9d46b49577b81","sha256:4d4c27cd8dd1c2ff40f37c7f524afd0fdc2e34804f264d7a59a65d24d57f246d"]
      - values: {"m1":"0{,}5","v1":8,"m2":"1{,}5","v2":-4}
        answers: ["sha256:40d5860e985abe6bc5cdadd9d2a3e185af95a571c5e0c79c11bc28e233ccec03","sha256:086dbb7826ca92ef58998ba4b303192403faa3dedcc707f44cea2f5422400de8","sha256:01940edd9b604a7114785be96f30076e7a0f014dda47d1b51110cb7b36c4f254"]
      - values: {"m1":"3","v1":2,"m2":"6","v2":-3}
        answers: ["sha256:9eff0235c14893e6507caba616b3908e82460f140019b18c62bc291f0d9853b1","sha256:c0ea71b7f513a2fd55241ec8a09cf386951f94c6ed77580d01830512545bcde6","sha256:642983a9f477c322c7109a72ccf49907098262524adc11565e332652381d1f1e"]
      - values: {"m1":"10","v1":1,"m2":"2","v2":7}
        answers: ["sha256:afc70ef823ff5980b03bca3da23d5badd889eb8aa9d5be385821826a8c160b4f","sha256:098c75d0e211db756bc6becfe1037fc4269b2fa85cccd139528e0807e0c87b6f","sha256:879df267185ca3554970f14a9ca3f2561c797579093243ed048787405719f9b7"]
  - id: choque-elastico-segundo-cuerpo
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un cuerpo de ${{m1}}$ kg que va a ${{v1}}$ m/s choca **elásticamente** con otro de ${{m2}}$ kg que va a ${{v2}}$ m/s (con signo, en la misma recta). ¿Qué velocidad (con signo) tiene el
      **segundo** después del choque, en m/s?
    variants:
      - values: {"m1":"4","v1":3,"m2":"1","v2":0}
        answers: ["sha256:a37bc34c374ba89e2b3033d97cae5ca0843613b48c5eb4425df53484927d4543","sha256:b36f4ad2d63fd76f20f424e32dc3393897c2403e002ca8e08b477ed374edd5b9","sha256:f3511cad778d9d744240a80e02062065577d5acc3048f2c30ca3e868a1be3a1c"]
      - values: {"m1":"2","v1":7,"m2":"5","v2":0}
        answers: ["sha256:856d138722309834d8a7e225d501cfa1354165cc3ebea2c66e34c472defed7cc","sha256:013a04d3e546eb3a24fd2d5baa4fecdd2f2f40ed47aaab3234c6f32c2d889549","sha256:8851fd2a35c73f28b175742dcaee4de22a7c42e65bf854736473d24ecb52f9f5"]
      - values: {"m1":"1","v1":12,"m2":"3","v2":-2}
        answers: ["sha256:1995ed89bc9bb10c31c3bf44a7d5d09ce8f1f9eb8daa06923de16b7c964624d1","sha256:cc971e7e508d08b6772c1a923682e6ecab49a550562c0de4d8b5aa5f6c3cd4d4","sha256:d5c58fe5c1e3b88b45bdd79c1058b1f0c9d691d7e6f4404bb15180246c5c4600"]
      - values: {"m1":"6","v1":-1,"m2":"2","v2":5}
        answers: ["sha256:abb2a0473061574734faf5faf4bb83ff616a7a63d177e906cc408d4a15048a84","sha256:dbadb0ab6a08bc0f70460a26ed11747995f307ae42277b1d89804bc418166387","sha256:150541cbfb881ad21f2d5d853981fd26c81e912d11521e25016847dcc08ab7be"]
      - values: {"m1":"0{,}8","v1":4,"m2":"1{,}2","v2":-1}
        answers: ["sha256:32ee718a0e9067f9b799bb798beddf18cc1256ca03199ee6a6bb563937c6e590","sha256:d51c22590fb224e4ae029e4bc37a05f5f54a703847df133ee1e519d90cc2c371","sha256:ab942c8fc26491ca60ccad9a83259a815d2591604e87707937bf5fd73b38a3fe"]
      - values: {"m1":"3","v1":9,"m2":"4","v2":2}
        answers: ["sha256:044ded56ea9454bd07978d559709e3c74c0afe5366cbc4a96ca913f9a0e0dbf5","sha256:3382c7efbea74c2d3f236153d791ccf4fe16a01350a2c98c1e877c2df2d4944a","sha256:ce9f84ee805197cfaf686b56718589d8c67cb4fe4479a28f42e6796a4cda23bf"]
  - id: centro-de-masas
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿En qué posición $x$ (en m) está el centro de masas de estas tres partículas situadas sobre el eje $X$?
      $$
      {{L}}
      $$
    variants:
      - values: {"L":"2\\ \\mathrm{kg}\\ \\text{en}\\ x = 0\\ \\mathrm m;\\quad 3\\ \\mathrm{kg}\\ \\text{en}\\ x = 4\\ \\mathrm m;\\quad 5\\ \\mathrm{kg}\\ \\text{en}\\ x = 10\\ \\mathrm m"}
        answers: ["sha256:0774aed70acf9c9dc4d92ce817501ec7bf3da52bc37ba11c6a211b3ad850ae68","sha256:6d22e94d5df1e363eb093674fc086895da4ef9bf577e49fe25dfd49fad1861e8","sha256:b8782b0e783d155073abb05b6070d7fc5d0770e81c49560239c524d21cc98b8c"]
      - values: {"L":"1\\ \\mathrm{kg}\\ \\text{en}\\ x = -2\\ \\mathrm m;\\quad 4\\ \\mathrm{kg}\\ \\text{en}\\ x = 1\\ \\mathrm m;\\quad 1\\ \\mathrm{kg}\\ \\text{en}\\ x = 7\\ \\mathrm m"}
        answers: ["sha256:2e53bae8f882526d504f1551378b57c19d5d10b4e42d7b6fca004dbc02147d87","sha256:41a78b9e8698a0bb74062c1db6ed0ddb6629ffc339a92f94bd9b5eb8d34f1c40","sha256:fe5dfd2e3a9dff1f10da4e76e975ea12c3ce11e3cedc42f5010cc35a94d721b9"]
      - values: {"L":"6\\ \\mathrm{kg}\\ \\text{en}\\ x = 0\\ \\mathrm m;\\quad 2\\ \\mathrm{kg}\\ \\text{en}\\ x = 3\\ \\mathrm m;\\quad 2\\ \\mathrm{kg}\\ \\text{en}\\ x = 8\\ \\mathrm m"}
        answers: ["sha256:e94c791f995f3c2a5bef30ea7629543c9f1949198207b7cb147957c3decd1206","sha256:ca14c54a0a2db0643ef411a448958768ded8a97ca1e5c0c55d470e18cf2dc4df","sha256:67dd7f5fa274a3e8440bd64785fd3ddca835aa8bd0be2a454404e448bb6e6d11"]
      - values: {"L":"0{,}5\\ \\mathrm{kg}\\ \\text{en}\\ x = 1\\ \\mathrm m;\\quad 1{,}5\\ \\mathrm{kg}\\ \\text{en}\\ x = 5\\ \\mathrm m;\\quad 3\\ \\mathrm{kg}\\ \\text{en}\\ x = 2\\ \\mathrm m"}
        answers: ["sha256:32b0b14250f50e1c6530b88c3fee7b627aa9ebc3f32e796ab7e62da56a38ff05","sha256:34a4417e7054f9a7a0be3ec53a5885af2302b40af434d8e54544a99052cafd06","sha256:3618e467ff59aa0131e83acb39b11d15dd499e117a08f650d92d0a8c4f037c0c"]
      - values: {"L":"10\\ \\mathrm{kg}\\ \\text{en}\\ x = -1\\ \\mathrm m;\\quad 5\\ \\mathrm{kg}\\ \\text{en}\\ x = 2\\ \\mathrm m;\\quad 5\\ \\mathrm{kg}\\ \\text{en}\\ x = 8\\ \\mathrm m"}
        answers: ["sha256:1637eb5562bb9a8a53a78ad913a1b633ef89cf4ece1bfbaf173dbda4eef435b7","sha256:55bc2c9d9bfb5113176617961b5ca493b1e2b4df2e6575c6d14e4b81e1dc4745","sha256:1dc85c2d54ca097b5ef96e921b8414bdc054b7513ccd38e8006a7037b39cfb20"]
      - values: {"L":"3\\ \\mathrm{kg}\\ \\text{en}\\ x = 0\\ \\mathrm m;\\quad 3\\ \\mathrm{kg}\\ \\text{en}\\ x = 2\\ \\mathrm m;\\quad 4\\ \\mathrm{kg}\\ \\text{en}\\ x = 9\\ \\mathrm m"}
        answers: ["sha256:0c20f5abd4ef8c8d6d0c8f486c9c1611f613602f16cbce4896eaa1c99c4024ea","sha256:c6bc28b1dceb1b601b6ca6b88d25ec1fb9b6e87b549330b6ad544bb1c8759893","sha256:6b7a177f136c104cd6893b0c9b77ce2f0c1c25d01c1e5a8ab2876ebdf4e9c81d"]
  - id: pendulo-balistico
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una bala de ${{m}}$ kg se incrusta en un bloque de ${{M}}$ kg que cuelga de unas cuerdas, y el conjunto sube ${{h}}$ m ($g = 9{,}8$ m/s²). ¿A qué velocidad iba la bala, en m/s? (Al menos
      cuatro cifras significativas.)
    variants:
      - values: {"m":"0{,}01","M":"2","h":"0{,}12"}
        answers: ["sha256:4a8f3d63b8ab49d621de82a55e9d6e28be205d7e0c3836cc8bd189cbdb1c9648","sha256:ed77dab443aa107f74ba4a87b2a720b7ce8a6671a8e81d41c7a781f112a8a124","sha256:db0ed5b6cb824fc4e6f2b2c6ae602c36bf8c252f660d2ac7ed4c9f4b832d917b"]
      - values: {"m":"0{,}005","M":"1{,}5","h":"0{,}05"}
        answers: ["sha256:f3a460d1f6da2296eb02f5d0ae366a2f212e004001932736d46a6ca576843325","sha256:a8f0f078632fc02722d70bbb7a21ef11d2495cc6e257d27c96707ddac00c72cb","sha256:bea3ef6b81228d355d6ab25a6e76333c3db8c8a16f1d4108867052f126b813a9"]
      - values: {"m":"0{,}02","M":"4","h":"0{,}2"}
        answers: ["sha256:fed9d9f8d72d3191cb844c5b4a2136b8c256afba310cd61ce7991bda4612eb9e","sha256:8cfb87c6919da45d94949c347210ec914cf67d4de48bdc74fbe23804b2e357ad","sha256:1d885bb4f982bafc39f19483ff1cc1ec02fce878aac06f2061912682609dd1e4"]
      - values: {"m":"0{,}008","M":"2{,}5","h":"0{,}08"}
        answers: ["sha256:a002c926fc6ef6319cc5e577d448d57e7fcc89c781e765eff8766ad482dd9848","sha256:d7bc4657b0eca91c03da81a8151ae613eef7b3ed1781449a816a26fe3d811ea6","sha256:7b74634bc7604efd48a3ec3217b655e8db7881dd0cd52e269084b9cd50f2dd0f"]
      - values: {"m":"0{,}015","M":"3","h":"0{,}15"}
        answers: ["sha256:8570db58030e45a7dd044179b68e3fbe6e8b63c66e83040a91d4a452e4f4a4cc","sha256:71c32b002d4ae8a9b3b35a6da43932373eaa5c26f92c9806f093291640082bc7","sha256:6bd7108e47f89356acdbe1ea1185278a84e4d30ab056f79d60c37a0d302a6592"]
      - values: {"m":"0{,}012","M":"5","h":"0{,}03"}
        answers: ["sha256:5b652b130dc38fcb1c297428e3063465fe265773672abb5db68fd7fa629f88e0","sha256:87537b8bdb9b6a3ab9646b6c3075ebdb7aacda4f115767edae564f01208ee364","sha256:bada7014777e96f0ff65155b900fba0d65eac76e5d61ddcd48cbd28a3a148d17"]
  - id: choque-en-un-cruce
    tier: 3
    type: numero
    sig: 4
    prompt: |
      En un cruce, un vehículo de ${{m1}}$ kg que va hacia el este a ${{v1}}$ m/s choca con otro de ${{m2}}$ kg que va hacia el norte a ${{v2}}$ m/s, y quedan enganchados. ¿Con qué velocidad
      (módulo, en m/s) sale el conjunto justo después del choque? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"m1":"1000","v1":20,"m2":"1500","v2":15}
        answers: ["sha256:9d823c6268c53d9d7af787717e3561d218b274044643fbe41d9af29f97650d5c","sha256:5afd173fba3e3c9bbb400e28f192437a79365c3ce3c02fe71f5d17a1afb62f88","sha256:857ad3499a3a3a48bf3caaf1ac54b72807d79784e721eef055fe465a3b1bbe43"]
      - values: {"m1":"80","v1":6,"m2":"100","v2":4}
        answers: ["sha256:8ba47242b7585b1a532c8493e6491f58f12854e09e1ea400ca08f5e453a0e7e3","sha256:fefd86f8609d9e413d0e7830e7fb63e99f3e9477d8e198b23cbb86eac7f611e4","sha256:7929c949cee5062616d5361ec3377e65e10ee13bc0a7f240bf32368ea425a6f0"]
      - values: {"m1":"2","v1":3,"m2":"2","v2":4}
        answers: ["sha256:3531d3b79695c15c94c381817fecfe93f3ca46f793ba140dca0a56f117e9cb89","sha256:6662b802d859352f5634ba6497c0395c961e74e8107ea207a0422bf9781a77e9","sha256:50af135d35dbb92062f8a5a74f6f93620681b46f821eeb2708576a1c918db8f3"]
      - values: {"m1":"1200","v1":25,"m2":"900","v2":30}
        answers: ["sha256:61d3a35cb78cefed6a09a229cc1638b31a931ebbc83b14cace3dd895d4d60ffc","sha256:0e72f49352ed22b981364d4660926dcf043fb0d15488cbe5b7a333b63b4de043","sha256:a081887b8fa14c766b9e7250a395fd736675fefa4024811d8418eff68bd79f70"]
      - values: {"m1":"60","v1":5,"m2":"90","v2":2}
        answers: ["sha256:2bfbfd4609184884ba5835421763bd59a5eb84c3c024c1ac55269b5cdfca11de","sha256:b754e6cb64e79ad011f7e51f5d93c22aa4ead891a6ed599dbb8a65a55dd7ba9b","sha256:da182d695e74875883a9d603197e13f653451ee02865afd5c5a717dad38e8e15"]
      - values: {"m1":"0{,}3","v1":10,"m2":"0{,}2","v2":12}
        answers: ["sha256:5382978f44244f97496732a45fe70d2b92a4d818bf3e16fd94938cdcc05a89d4","sha256:4dc3a32e67c389c42f60e20b0c06120e35f89e2af107f5a778f17b96592cee9a","sha256:a63249514073aa08609dd0b16323322199c4d6e8b1299f5061c2d75ffd4450eb"]
  - id: impulso-de-una-fuerza-variable
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Sobre un cuerpo de ${{m}}$ kg en reposo actúa una fuerza que crece linealmente desde $0$ hasta ${{Fm}}$ N y vuelve a $0$ también linealmente, en un tiempo total de ${{t}}$ s
      (gráfica $F$-$t$ triangular). ¿Qué velocidad tiene al final, en m/s?
    variants:
      - values: {"m":"0{,}45","Fm":2000,"t":"0{,}01"}
        answers: ["sha256:931f23f5c1e7f1deb7d3fa3b1c7816ea96bed5d899d2606c0d203573ab91d3c8","sha256:4ec0bb06c1a96efebc55fd2b359782912e5ef54454ee7726b978975cc15de655","sha256:0a2ff564cdbaaf9516cb4e3b2b1cb598eb3cfc072ae271be78fd5a2ec5cfe74b"]
      - values: {"m":"0{,}06","Fm":600,"t":"0{,}004"}
        answers: ["sha256:b6da76dd0e32f7212194270264fff9bb10903a21de1bb4a56d100946028465cc","sha256:6355e6ccff0a6c65e41351619dd2b4a299b46587b1693372000d52d8c27e1ae4","sha256:3b3e31ecf8b09e6483bfc06eccccf3138c6aabe613d0c3c53feb54cc6979a37e"]
      - values: {"m":"70","Fm":1800,"t":"0{,}3"}
        answers: ["sha256:05f15077380a92577cf68db6e878b8694b95888f909f0b457a6a5858038015d5","sha256:8591c44f9371f609135ef75c82352e44125f1941259981adb88585c46cf9565f","sha256:44ddf003571d5e599e8f0d497752495cf629b18bdcd7293dd72241654daa81e3"]
      - values: {"m":"0{,}15","Fm":900,"t":"0{,}006"}
        answers: ["sha256:6e20bf9cb9e46209714990fe6c28dbf7da10b0971d550ffed7a55c73024de779","sha256:945eabfe7976ec6f1bcc12ec4d97405bdc1e2660132351dfe756752909ec543c","sha256:c76484f43b27906ac10f4880897b27a93d8e28a1ae833eebd1efb4fa951d0080"]
      - values: {"m":"2","Fm":400,"t":"0{,}05"}
        answers: ["sha256:4b166be69246755c941b146f0ca6b5eaec844ea1ae23c7b84fafe5508cd148d6","sha256:8255108ee78b52a8fd2a689fd1027f9b6a1c1f82f84da9aa09794ff91672a2d7","sha256:2c459fce39aa7c85b2d0a1b338bb3c183e7af6712200e2be0c61e7c11f31abe2"]
      - values: {"m":"0{,}4","Fm":1500,"t":"0{,}012"}
        answers: ["sha256:f0623fb63ad433c1b77e245ddd5a1db8f701363edbe9f87df397a963ef4a2e08","sha256:533ec364722ce7ad1fe6f606eceef31ee1e378efb66a3ab868ad5c05a25ec4d8","sha256:2658ea313915031b200d210c2c673638830934852eade4eda9882061ab620b4a"]
  - id: conservacion-del-momento
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) A partir de la segunda y la tercera ley de Newton, demuestra que en un choque entre dos cuerpos aislados el momento lineal total se conserva.
      (b) Explica la diferencia entre choques elásticos, inelásticos y totalmente inelásticos, y qué se conserva en cada uno. (c) Explica, con el impulso, por qué
      los airbags y los cascos reducen las lesiones, y cómo avanza un cohete en el espacio, donde no hay nada en lo que «apoyarse».
    sealed: "gz64:H4sIAAAAAAACCn1UPY8bNxD9Kw8LFdJGEYKUMlxIObt2kyobGCNypKPB5eyR3IMUQT/mykOQKmU6648Fw9Xn2XBH7s68eXzzZvZVEt9nJ6GaV3U9pkld46GPFDKDPcyjPPU8xQL8haNhJFlFxhJ9IKx7jn8RRk3zzAYfP+8Xy8MIOyxPUYsSdf29XBzwHj/fh4+z4kaC590EHGDIElxIWTnM8EkiPCHxpg+2RGmQJ6wltld0vEfTrCOZvR2+dIe9zYfRFF4SXNv1PklqQpIA6XpOWdJcsx/YZzqlfF4O/O6+LUYDCeUjl4zx5Td+wiV9Umjo5ZfRXPVrpWVNy5LJIwgMtStHGCent0fanVRM4G3mGChBoCQtpy6ycbTynGDftmQya0IT6nq80o59CKjrLFZSXSMxjITE8ZluKXgXmPxMY9mjrtkfX1J2Rt6kkOX2+JJUYg4cN8d/CMaF42t2hjBeiacEy1g57ylOQV2UrWvJktbhybWCC7c1OoqZNdFTE76DnBg5UkhDX1kVKEfjjv+GKQx5idipNs7KtUhRtlTGfT3tu+k5dpLw1LOlgF5TE3b6tu74Gq2zpIy+w4aLAO3xRZ8GI21H2a180akJni56FXqwV6HPjTGlMf7svZs5aJrM27xv2To6HE6GQi7eubXeSFms3RfBWI3y1DM6ShQHEfHMXoyzZEv1wRYgGI4yeYfkVB9ycUUbSDEOJSMgT3FDRbzsuO1E0daRA9mru5F1cC4TXpg2wbrUutDv+DSBrUstoYvSSSwyzPB7gJFHVqdu9dmEDSVOIGwihRvKj2QcgXI8vqR3qq98Oy7lWQOakYDUpxPajV2nuAZtKFATzhhDBcteB2euOV//pk529PW/wl/OaCrbie1Uh5LDSTmeVdMq9qvoTDX/Y1+Z6DJHJ9W8euBWd4iurbdWUKpkhvMOkc9nvmyhywJS/K4PWVI1//Uwvavwm6fk1mrFYuTSXbWudYbx1B9f7+f8tDez6+RHqB+2nVfMwReKV1yRCmu+mnUYkSh6uxj8phc/HIC7+n8e/gcxWlztZAYAAA=="
  - id: r-unidad-momento
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué unidades se mide el momento lineal?
    options:
      - |
        $\mathrm{kg\,m/s^2}$
      - |
        $\mathrm J$
      - |
        $\mathrm{kg\,m/s}$
      - |
        $\mathrm W$
    answers: ["sha256:a2a2155004d3342432b1730d9c0cea7784858c0c407b2dd5aa61a93b05489b47"]
  - id: r-impulso
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿A qué es igual el impulso de la fuerza neta sobre un cuerpo?
    options:
      - |
        El cambio de momento lineal
      - |
        El cambio de energía cinética
      - |
        La fuerza máxima
      - |
        El trabajo
    answers: ["sha256:599519b112f2088e8c92aa437f3f1f2c98410ac7dc063b68c02d7da9a8055fd3"]
  - id: r-siempre-se-conserva
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué se conserva en cualquier choque entre dos cuerpos aislados?
    options:
      - |
        La energía cinética
      - |
        El momento lineal total (sistema aislado)
      - |
        La velocidad de cada cuerpo
      - |
        Nada
    answers: ["sha256:78e548a1a06514b2370bf0b3c3658ae5217b2e471253c3f4e35522290846d8b8"]
  - id: r-masas-iguales-elastico
    tier: 2
    type: opcion
    review: true
    prompt: |
      Una bola de billar choca elásticamente y de frente con otra igual en reposo. ¿Qué pasa?
    options:
      - |
        Rebota con la misma velocidad
      - |
        Siguen juntas
      - |
        Se paran las dos
      - |
        Se intercambian las velocidades: la primera se para y la segunda sale con la velocidad de la primera
    answers: ["sha256:bed95c3e51513346f2ce3b8db36162ee1fd71285ce1d78273cd0b8c6166e54f1"]
  - id: r-patinadores-reposo
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Dos patinadores en reposo se empujan y se separan. ¿Cuánto vale el momento lineal total del sistema después del empujón, en kg·m/s?
    answers: ["sha256:39a67b9d767e2baac56d70449df15db4221e41c52e87b133b08bfb257fc5e58e","sha256:5cf0f6a828777ef5e374fae6344bffa9cb40136b8141e6507d5e97095c6e49f2","sha256:03234dec86a038132308849624f1a3fa041f6eb6d517731d8df89ccc209dc429"]
  - id: r-retroceso-numero
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una persona de $60$ kg, de pie sobre hielo, lanza horizontalmente una piedra de $3$ kg a $10$ m/s. ¿Con qué velocidad retrocede, en m/s?
    answers: ["sha256:3ff624f98192d1c0d743c61610f0089c812783a4f7e50bb1865099d8180fab7a","sha256:c3432ba193dc964212c51f7990f64a16c9ec7937a9aba5674ceb0491e0a70061","sha256:f033c2e4734bb4572cf5fd791ede05bc6fb4c622507da27fb1fa6b784bc5e905"]
  - id: r-doble-tiempo
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si el tiempo que dura un frenado (con el mismo cambio de velocidad) se duplica, ¿por cuánto se multiplica la fuerza media?
    answers: ["sha256:ef0b848b2e35f1bf059022aec82811970fe55829dcd047e06422d7c6c7c62012","sha256:82052527784ae9cc17e8d5053299b1cd38122ccb8411979d757e5ffc52be7779","sha256:2bd08e8d2b7152ae7ad8c3a4310947682a8d954e4fa20285869c500d2c776dcd"]
---

# Momento lineal y choques: impulso, conservación del momento lineal, choques elásticos e inelásticos, centro de masas y propulsión

Cuando dos coches chocan, las fuerzas durante el impacto son enormes, cambian en milésimas de segundo y es imposible medirlas. Aun así, se puede
calcular cómo salen los coches justo después: basta una magnitud que se conserva, el **momento lineal**. Con ella se reconstruyen accidentes, se
diseñan airbags, se entiende el retroceso de un arma y se explica cómo avanza un cohete en el vacío. Este nodo completa la mecánica de partículas junto
con la energía.

## Objetivos

Al terminar sabrás:

1. Calcular momentos lineales e impulsos, y relacionar el impulso con la fuerza media.
2. Aplicar la conservación del momento lineal a explosiones, retrocesos y choques.
3. Clasificar los choques (elásticos, inelásticos, totalmente inelásticos) y resolverlos en una y dos dimensiones.
4. Calcular el centro de masas de un sistema y describir su movimiento.
5. Explicar la propulsión de un cohete.

## Qué debes dominar antes

[[fis-trabajo-energia]] (energía cinética y su conservación) y [[fis-leyes-newton]] (segunda y tercera ley).

> [!question] Test de entrada
> 1. Energía cinética de $2$ kg a $3$ m/s.
> 2. Según la tercera ley, si A empuja a B con $50$ N, ¿con qué fuerza empuja B a A?
> 3. Suma de los vectores $(4, 0)$ y $(0, -3)$ y su módulo.
>
> Respuestas: $9$ J; $50$ N en sentido contrario; $(4, -3)$, módulo $5$.

## 1. Para qué sirve

- **Seguridad**: reconstrucción de accidentes, diseño de airbags, cascos, zonas de deformación.
- **Deporte**: golpeo de pelotas, raquetas, artes marciales.
- **Espacio**: cohetes, maniobras con propulsores, asistencias gravitatorias.
- **Física de partículas**: en los aceleradores, los choques se analizan con la conservación del momento y de la energía ([[fis-fisica-nuclear]]).

## 2. Momento lineal e impulso

> [!practico]
> Parar un camión que va despacio cuesta tanto como parar una moto que va muy deprisa: lo que importa es la masa por la velocidad. Y para parar algo puedes
> hacer mucha fuerza durante poco tiempo o poca fuerza durante mucho tiempo: un portero que retrocede las manos al atrapar el balón se hace menos daño.

- **Momento lineal** (o cantidad de movimiento): $\vec p = m\vec v$, un vector, en kg·m/s. *Ejemplo:* una pelota de $0{,}057$ kg a $50$ m/s tiene $2{,}85$ kg·m/s.
- **Impulso** de una fuerza durante un tiempo: $\vec J = \vec F_{\text{media}}\,\Delta t$ (o el área bajo la gráfica $F$-$t$). La segunda ley en su forma original, $\vec F = \frac{\Delta\vec p}{\Delta t}$, da el **teorema del
  impulso**: $\vec J = \Delta\vec p$.
- Consecuencia: para un mismo cambio de momento, alargar el tiempo de contacto reduce la fuerza (airbags, cascos, colchonetas, flexionar las rodillas al aterrizar). En un
  rebote, el cambio de momento es **mayor** que al quedarse parado, porque la velocidad cambia de sentido.

## 3. Conservación del momento lineal

En un sistema **aislado** (sin fuerza externa neta), el momento lineal total se conserva:
$$
\sum \vec p_{\text{antes}} = \sum \vec p_{\text{después}} .
$$
Se debe a la tercera ley: las fuerzas internas aparecen por parejas opuestas y sus impulsos se cancelan. En un choque o una explosión, las fuerzas internas son tan grandes y
breves que las externas (peso, rozamiento) se pueden despreciar durante el impacto.

- **Retroceso**: un fusil de $4$ kg dispara una bala de $0{,}01$ kg a $360$ m/s; como el momento total era cero, el fusil retrocede a $\frac{0{,}01 \cdot 360}{4} = 0{,}9$ m/s.
- **Explosiones**: los fragmentos salen con momentos que suman cero (si el cuerpo estaba en reposo).

## 4. Choques

| tipo | momento lineal | energía cinética |
| --- | --- | --- |
| elástico | se conserva | se conserva |
| inelástico | se conserva | disminuye |
| totalmente inelástico (quedan unidos) | se conserva | disminuye lo máximo posible |

- **Totalmente inelástico**: $v' = \frac{m_1v_1 + m_2v_2}{m_1 + m_2}$. *Ejemplo:* un coche de $1\,000$ kg a $15$ m/s choca con otro de $1\,500$ kg parado y quedan enganchados: salen a $6$ m/s. La energía perdida se
  convierte en deformación, calor y sonido.
- **Elástico en una dimensión**: de las dos conservaciones se obtiene $v_1' = \frac{(m_1 - m_2)v_1 + 2m_2v_2}{m_1 + m_2}$ y $v_2' = \frac{(m_2 - m_1)v_2 + 2m_1v_1}{m_1 + m_2}$. Con masas iguales, **se intercambian las velocidades**
  (billar); si una masa muy pequeña choca con una enorme, rebota con la misma rapidez.
- **En dos dimensiones**: el momento se conserva **por componentes** ($x$ e $y$ por separado).
- **Péndulo balístico**: se mide la velocidad de una bala por etapas: choque totalmente inelástico (conservación del momento) y después subida del bloque (conservación de
  la energía).

> [!formal] Con rigor: el truco del centro de masas para los choques elásticos
> Desde un observador que se mueve con el centro de masas, $v_{cm} = \frac{m_1v_1 + m_2v_2}{m_1 + m_2}$, el momento total es cero; en un choque elástico frontal, cada cuerpo simplemente invierte su velocidad
> relativa a ese observador. Volviendo al suelo: $v_i' = 2v_{cm} - v_i$. Se comprueba que esas velocidades conservan el momento y la energía cinética, y que la velocidad relativa
> cambia de signo: $v_2' - v_1' = -(v_2 - v_1)$. $\blacksquare$

## 5. Centro de masas

El **centro de masas** de un sistema es el punto $\vec r_{cm} = \frac{\sum m_i\vec r_i}{\sum m_i}$ (media de las posiciones ponderada por las masas). Su velocidad es $\vec v_{cm} = \frac{\vec p_{\text{total}}}{M}$, y se mueve
como si toda la masa estuviera en él y sobre él actuaran todas las fuerzas externas: $\vec F_{\text{ext}} = M\vec a_{cm}$. En una explosión en el aire, los fragmentos se dispersan, pero el centro de
masas sigue la misma parábola.

## 6. Propulsión de cohetes

Un cohete expulsa gases a gran velocidad hacia atrás; como el momento del sistema cohete + gases se conserva, el cohete gana momento hacia delante. No necesita aire en
el que apoyarse: funciona mejor en el vacío. Su **empuje** es la velocidad de los gases (relativa al cohete) por la masa expulsada por segundo.

## 7. Errores típicos

- Olvidar que el momento es un vector (signos en 1D, componentes en 2D).
- Suponer que la energía cinética se conserva en todos los choques.
- Usar la conservación del momento cuando hay fuerzas externas importantes durante todo el proceso.
- En un rebote, calcular $\Delta p$ con la diferencia de rapideces en lugar de con el cambio de sentido.

## 8. Resumen

- $\vec p = m\vec v$; impulso $\vec J = \vec F\Delta t = \Delta\vec p$.
- Sistema aislado: $\sum\vec p$ constante (retrocesos, explosiones, choques).
- Choques: elástico (conserva $E_c$), inelástico, totalmente inelástico ($v' = \frac{m_1v_1 + m_2v_2}{m_1 + m_2}$); en 2D, por componentes.
- Centro de masas: $\vec r_{cm} = \frac{\sum m_i\vec r_i}{M}$; $\vec F_{\text{ext}} = M\vec a_{cm}$; cohetes.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué es el impulso y por qué los airbags reducen la fuerza.
2. Por qué se conserva el momento lineal en un sistema aislado.
3. La diferencia entre choques elásticos e inelásticos.
4. Qué pasa en un choque elástico frontal entre masas iguales.
5. Cómo avanza un cohete en el vacío.

## Siguiente

[[fis-gravitacion]] (gravitación universal, campo gravitatorio y órbitas).
