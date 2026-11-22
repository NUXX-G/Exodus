---
id: fis-vectores-movimiento-plano
title: "Vectores y movimiento en el plano: componentes, suma, producto escalar, tiro horizontal y parabólico, movimiento circular y movimiento relativo"
area: fisica
trunk_level: 3
prerequisites: [fis-cinematica-rectilinea, mat-razones-trigonometricas, mat-vectores-rectas-plano]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 2: «Vectores» (escalares y vectores, sistemas de coordenadas y componentes, álgebra de vectores, productos de vectores). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/2-introduccion"
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 4: «Movimiento en dos y tres dimensiones» (vectores de desplazamiento y velocidad, aceleración, movimiento de proyectil, movimiento circular uniforme, movimiento relativo). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/4-introduccion"
  - "D. Halliday, R. Resnick y J. Walker, «Fundamentals of Physics», 11.ª ed., Wiley (2018), capítulos 3 (vectores) y 4 (movimiento en dos y tres dimensiones)."
hints:
  - "Concepto: un vector tiene módulo, dirección y sentido, y se maneja por componentes. En un tiro sin aire, el movimiento horizontal (velocidad constante) y el vertical (caída con g) son independientes y comparten el tiempo. En un movimiento circular uniforme la velocidad cambia de dirección: hay aceleración hacia el centro."
  - "Herramienta: componentes vₓ = v cos θ, v_y = v sen θ; módulo √(vₓ² + v_y²). Tiro: x = v₀ cos θ · t, y = y₀ + v₀ sen θ · t − ½ g t²; alcance v₀² sen 2θ / g; altura máxima (v₀ sen θ)² / (2g). MCU: v = ω r, ω = 2π/T, a = v²/r = ω² r."
  - "Documentación: OpenStax Física universitaria vol. 1, caps. 2 y 4; Halliday, caps. 3-4."
exercises:
  - id: modulo-de-un-vector
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el módulo del vector $\vec v = {{v}}$ (en metros)?
    variants:
      - values: {"v":"(6,\\ 8)"}
        answers: ["sha256:ab870ad0044943a254bb5073deb41d45aaea2ffd194841f36f33bf6acac0383d","sha256:20435e8fa4bc1f3e837c11b916e72b0686bc7abdcd491aa3290b6626c69f97c7","sha256:b12ad5af85b9a04bfd646eb9950c644473885e79f08f2d9cd6ffdef346c8cd89"]
      - values: {"v":"(5,\\ -12)"}
        answers: ["sha256:89253b401b4bea527550b35f3e9f80fc53272b0b61cbe714a9bc9d9372452ef1","sha256:33d38cec477d254a165e70ff6a7e73cb8a948eadcdaed6ffcf4bf50aa0498887","sha256:a1df0b41472875e6a547b1ea56397d8cf04e44badfc4ed3b277e5579dcdf4413"]
      - values: {"v":"(-7,\\ 24)"}
        answers: ["sha256:9953ce715d83dd4bb4c08437a59652ca01657decae55a16d2baee454b3611289","sha256:c5d89ee5d722027cbcdd50a238bd798349e9072f4da3193d44cf13dde43b3eda","sha256:d4aa406457b650d2d95632d8f696de8be48ec99ec54f0c0ad9bc84a24481f95d"]
      - values: {"v":"(2,\\ 3)"}
        answers: ["sha256:7896a12df86ab65322e15d8399d1318fb98b69ad1c79dff3e1c4623968b61e81","sha256:bcded5bd4605bf7151f27b251ce05ab8e4548d343a9a2e3c25822fea09157fd6","sha256:2f155b39c32f8a8758fcec5fd43c6be1b2124491af2a5cdc2793201a1b494b74"]
      - values: {"v":"(-4,\\ -1)"}
        answers: ["sha256:1130237d7ef787787ee236661a525b9f83e184497f3a1678214addcc9b75223b","sha256:675c35a3e15a6665c622030fa42915a65fc2698146d4dbae79c9a94081765fde","sha256:00b14c4386e4eacf5738f2bbb69268ba9b1be2822c1aeb7590008b80f88998b5"]
      - values: {"v":"(9,\\ 12)"}
        answers: ["sha256:1be05a14c231ccbb8afd6efff9f563a22a7966fc231b944e0f03c1e6f13eaa85","sha256:859ed4a2bfdbafade3196d4ea196e45bbd4f23d3f4a5b8f6d178991f8d4250ba","sha256:998165fb300e8e6b93f1702772fb58d56b322850ed40d44143b48f93306f8d13"]
  - id: direccion-de-un-vector
    tier: 1
    type: numero
    sig: 5
    prompt: |
      ¿Qué ángulo forma el vector $\vec v = {{v}}$ con el semieje $X$ positivo, medido en sentido antihorario, en grados entre $0$ y $360$? (Al menos cinco cifras significativas.)
    variants:
      - values: {"v":"(1,\\ 3)"}
        answers: ["sha256:10e63cec85d23d40bd837b5532bd3c31644b2dd3eb137234a02ee8446c70b351","sha256:8e8d71c9c82e7c11ebd681b6f1595939715a899740043559ecd8b80d9d264d73","sha256:2eb450a6ac8fd258ef274684bb1662ed8118514a45494b860f607939b619390e"]
      - values: {"v":"(-2,\\ 2)"}
        answers: ["sha256:53dae3f25926a79a193fc9cbd540cafcaf8ec1764b646dd01714f0b84bd1d93e","sha256:d79ad7a9fccbce7b94a4e261d0149a993dcc4e90a30ccf35c6ef4a507b44654e","sha256:9d6f97f09e35ad4c9ece2a4c5e7f96f1b140061a4a1c3004a9237657735d2e66"]
      - values: {"v":"(3,\\ -3)"}
        answers: ["sha256:fa11b7905908f46fa756b689366e5bc66283c0b9e436ede21f16ea632d38af0e","sha256:8832e91ae6d85ce3e3336f5dd99bfd3b7d155de47b6746b9eadd814ced8fe108","sha256:bf25ef9f595bbc8a30e865a1319a1c7f71254f670128d76020f22fb453f1ca0d"]
      - values: {"v":"(0,\\ -5)"}
        answers: ["sha256:a05904504030c193f679889242034e49cec0d9f1e10eb6096e6e4a6ccc342a50","sha256:69ea2f2b8a82206f9d3ffaf9b4b794a1754318c898ece7478d7ee0eadb3833dc","sha256:ca2592df70ca82cd3a1d8c85761c664221dfa36f3a545b3602ac868f59114933"]
      - values: {"v":"(-1,\\ -1{,}732)"}
        answers: ["sha256:bcc55ef14389017eb04691ce93ce1f8bdd24abfc00b7da16fb14950060f24bf8","sha256:531498603f3f29dd5e273ebf8994f56cf8180277651ba8afb77fa2404ba2df43","sha256:2f286a18179ac7c978e6c09c852f902a6c30632b21bba1db7a5a9a315eb95c1e"]
      - values: {"v":"(2,\\ 1)"}
        answers: ["sha256:a39fbf0bbe99fd77093df43431c268afe08714b70ab8dde743cf7489faede7e7","sha256:25a8cd1fa4d8d68912aa0f196915ed19cbd55e87da63508e7c60e51b4fe47f66","sha256:b51fb3b2c178218973d1a49c5dcb8666f3aab6772a5881481e08bd7e82e5cc74"]
  - id: suma-de-desplazamientos
    tier: 2
    type: numero
    sig: 5
    prompt: |
      Un dron se desplaza ${{a}}$ m en la dirección que forma ${{ta}}°$ con el eje $X$ y después ${{b}}$ m en la dirección de ${{tb}}°$. ¿A qué distancia del punto de partida termina?
      (Al menos cinco cifras significativas.)
    variants:
      - values: {"a":5,"ta":0,"b":12,"tb":90}
        answers: ["sha256:6461672a1c7f7e1c941552f015879501ed1d095ddd886b96d21d7c8f44ea2e7c","sha256:5d66d69a1d21452ebc360e9cce9ab16720cdd0aaf8e7227fa9bd93aed840cc7c","sha256:e6213ca93187d84df59cca32b2084a48806d8971251501d872ea0f378d009d86"]
      - values: {"a":10,"ta":30,"b":8,"tb":150}
        answers: ["sha256:6637b9284b39a730cd7fca7a047f247c03f8508f7b436be54d8aa732fc17a746","sha256:f068c79d4c4100cef0854196f15bbaa455bbf38c51a774527f0b55b96aa3a14e","sha256:754806c56fad15cd42b29ec90b3654fbe0c8f5065fd69c3df3687677fa0b43b1"]
      - values: {"a":8,"ta":0,"b":6,"tb":60}
        answers: ["sha256:af909cb304c7140e5b15b44f0e221665a41b5eb36893e7f42d05ea4cc68cce84","sha256:39e6f8b68d2292924223b3a1d37d62d2ddf7862fb9a681b83be2127c856912cb","sha256:6bd0fb0c195b40b18132b0963741bb493a1a1730945374725338dfe1ff16c841"]
      - values: {"a":20,"ta":45,"b":15,"tb":135}
        answers: ["sha256:d99d48d9a1c849a912eb72d295b7552abfe605b1c47895003ede04d7332cc2fa","sha256:ca8ecc3d05332e0671e4e4d6c64babeaa48c3ca7e66956b6817f7690acf440f8","sha256:131380fbc3b39485ec50314c2735e7c91f8b3ae9afc0f2cc84a34dd63d0ec94c"]
      - values: {"a":7,"ta":10,"b":7,"tb":70}
        answers: ["sha256:76802d9f485abb72fccf691ea7da7c908ed4014752fa73e9e7ac8fe24d790354","sha256:dc48b30ae68e31d45c62bdd2c87af304f37d3916901f4040f927212a7718b3aa","sha256:ac8054c1061c4f7ca14da84b2b7aeb0631931993907b07681c42c53c77f238b7"]
      - values: {"a":12,"ta":0,"b":9,"tb":120}
        answers: ["sha256:833fadb7b76248a7fef388718b3a41cef1f76bb3a60d6d4096e455e5234e04c7","sha256:3f74c1c3370ceb2c9b41c61e332478e543e9c2f95586e92ba80a0ff7cb5602c8","sha256:f6cab51cd835363220ef2280fd52a232c430f18ce0c3ba589b89712f97677bff"]
  - id: angulo-entre-vectores
    tier: 2
    type: numero
    sig: 5
    prompt: |
      Con el producto escalar, calcula el ángulo (en grados) entre $\vec u = {{u}}$ y $\vec v = {{v}}$. (Al menos cinco cifras significativas.)
    variants:
      - values: {"u":"(1,\\ 0)","v":"(2,\\ 1)"}
        answers: ["sha256:ce9e9bbf1cee6dacdecb85248c024831eece8f9a2afd9a9dcb8b8803e647ff3e","sha256:53e10554015c1ccc67169694d70d7bb485bf3a6da0d0a4590ada0ba22fb61207","sha256:7ce0e48656bd795a04bb6a3a2128e128570c9f1985839f59c007818eebb8c0ad"]
      - values: {"u":"(2,\\ 1)","v":"(-1,\\ 2)"}
        answers: ["sha256:6d81ca5d1cce28fca23bfcd17e95dc023cebf38f1b00fcc5f4e9b436e3421b1d","sha256:6a142d8133639bcca6330036ed21c9fa2005388aa90ebd67c517804a8e5782b3","sha256:1910fb5a3cfce4470b6783a6877609e8eebd40b930783f8b7e0b8230dabfa073"]
      - values: {"u":"(3,\\ 1)","v":"(1,\\ 3)"}
        answers: ["sha256:6456bbd17e2b0da16c87d454535809bd227673b828ecd56aa2900342b572cb83","sha256:ddd21dd148511eedcd25f5f70b43253d4eceddc157b1a8ca3d2d447c85b9ff24","sha256:3fb8336df453017bddd2eb5c2af0b98cf861aa72ad94b34f3392bc90aac1262b"]
      - values: {"u":"(1,\\ 2)","v":"(-3,\\ -1)"}
        answers: ["sha256:d8433fe679fad869a77f57b5bd10964af4af072539c80d9b43bc525a3c36ee6f","sha256:e210e6a28284560441e8ccd5d5df722b8cc66bde625ecb0dd21a7e72ea0e7370","sha256:c192486ed6d5b9a98b6616b604b276106d75158ddaad74eff0221aa1a45b7017"]
      - values: {"u":"(4,\\ 0)","v":"(-2,\\ 3)"}
        answers: ["sha256:37176968137e709b6ed24573a2371433d3dcbe0abad29cc158c2289c05eab9c9","sha256:f1e5d26f0c76da901b6d42c3bbddb730355d765e818a1aeaf0d68b5f124f0382","sha256:8102b17470d850c93a4a3c028ea38794a38a0b3deb17ec88139253c4bf2b266a"]
      - values: {"u":"(1,\\ 4)","v":"(3,\\ 1)"}
        answers: ["sha256:d328ebfa198c8299b10ab182270676bab9123e227088cb79671015c5febbca5f","sha256:0f033931cc132f324c1c503e97a7879f67382e5a33b3c90634448e0fb0611037","sha256:033596a4cb0655c1cb1e4af0cee04258d49e364d4915d4edecb6312e05fd3304"]
  - id: tiro-horizontal
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una pelota sale horizontalmente a ${{v0}}$ m/s desde una altura de ${{h}}$ m ($g = 9{,}8$ m/s², despreciando el aire). ¿A qué distancia horizontal del punto de salida toca el suelo, en m?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v0":5,"h":"1{,}2"}
        answers: ["sha256:cdef5b1ede4aa1a675cd63cc80da5ddbc90e6a7454af90980244bee8c1ee6b47","sha256:7a8561a013b8d5009be6dd32c765bda572aa8c9865ef1a9e965e13ab733a1583","sha256:8492338071ea50e45cebe82d150319148ca526ca195379524b177598a24f6a47"]
      - values: {"v0":8,"h":"20"}
        answers: ["sha256:0ec990e73a06dd04e7303daa3261822a03197bac4337a1b8058b3c2f2d175c2f","sha256:492d536315a4f4fbcf4f486e3a74e829693ec95ef3b8018ed4a95e4fd0c0f118","sha256:609c6f7070d0993a4eb60b75a00ce3e15c8f62fe7a17040ce93fa5ad975fdb4b"]
      - values: {"v0":15,"h":"45"}
        answers: ["sha256:a40eda761a4b35615453cb45242a8662e96d88ba478f78a450e40e90b1158ae2","sha256:7124d397b6782c7c1cad1a8cd0f3502ccad537aa6822df4874d207e518325010","sha256:b008d913ff3701ff1d9b512e7c4f9b6b20adb20c5a4631a7fcc30f6ee0844cb6"]
      - values: {"v0":3,"h":"0{,}8"}
        answers: ["sha256:19127c90fc8d8572a3e83db5dbd76a0d72e82b9b3a64ed110cb1749aafde09cd","sha256:964aae577041bd1393fb8e0f26a9b3e4d9eda27bfcc6b18fc53052de97253fd5","sha256:1d3433216567c30858424522a6c7976fd679e34c60c2858697b922906cd51caa"]
      - values: {"v0":25,"h":"80"}
        answers: ["sha256:dd15722b56ec95201431e151f8472fa56ea05f8ff78195b2e68150fce7348ca0","sha256:efb8fe08f899b25ba1c4b73dfab4f8fdedbe1ef0b4bf9013392df4c137973057","sha256:f3e77d4ca564b4204b5b4fd8965e584cddbd723f4730e9166c506519a95901e0"]
      - values: {"v0":12,"h":"2{,}5"}
        answers: ["sha256:47e2b9cecc770a02cd6e960cd7345747b47dfe231998df07d7130f2ad0d2b791","sha256:30481121e27b1d90fbe56f99f29d3a36fc31765d87eba66ee818e98ee731f3b5","sha256:e61742b9b476f6a945cec261c27507021e14c5b3906401ccd9ab0eed60eb438c"]
  - id: alcance-de-un-tiro
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Se lanza un proyectil desde el suelo a ${{v0}}$ m/s con un ángulo de ${{th}}°$ sobre la horizontal ($g = 9{,}8$ m/s², despreciando el aire). ¿Cuál es su alcance, en m?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v0":15,"th":30}
        answers: ["sha256:31e701a86151a946b9ffaee9cbdda3c3e13105b0d53884781cc3bc7739c907aa","sha256:3576780eddacaa4963bca55993301d175a5ae7a803d169609f9abe9c352cf939","sha256:d1f047186de3d1369999ffd04b865294f3929d0183c745cd263c21b8cddf8401"]
      - values: {"v0":25,"th":60}
        answers: ["sha256:cb1dbead65bf370ed648b02600eec54a17ee9d6f29c3aec948c53c836bc5bc68","sha256:b14727ef66c133ec1b3ac6eb1c33c65836c04ba3d128dee45040af81e68ae7dd","sha256:acc00bbd97820dc4b9a06efce0ec7a14d785c81aba697eb82f5a4060a2752b6c"]
      - values: {"v0":10,"th":45}
        answers: ["sha256:7c2432aecbc453ef96bc4769af2c4062ff09eda125b6a3ccf9dbdf359adce65f","sha256:e46d78c004cb7091d62ccabcbfffd65ee1df3bdb0e365bbb1f9b41d5dc952b5e","sha256:45f81799d92ce914749989805f58a8fcbeaf804e400278a4a07d8855338225bc"]
      - values: {"v0":30,"th":20}
        answers: ["sha256:df8af70e6c855cd35ced39a45e99233d800cf0134b444a3724c05f15bbe94b10","sha256:b4fa98bdfb04904e3ee252909dab366a4f4069243d4d92e512632ba3734b7ea5","sha256:4fcf0b6aad42762cbfc205a761c17110ee104fb04f7ebff8cd73ea8679b89c26"]
      - values: {"v0":18,"th":75}
        answers: ["sha256:940e2ca1c5aedb6257d7566d584369e13fe7f07263bbcd09d57cea193e0fb520","sha256:13b00c4f74b4848ac3e3ed33bd0d6a7838b57c41ec3877558d473376e57e3c63","sha256:098f25e81eec469bdb0f3a29ad92336497157bbcd7bcb3c564d09b6942f054f8"]
      - values: {"v0":22,"th":40}
        answers: ["sha256:33df34fc2104356feda52c6f4ee15f3be0eb9599c773a172b27f54b5642c89f9","sha256:e66a827f491a4ff8754945eda33fa55a69645a296229c49378c296b60541420f","sha256:d10f06bd5c7de597ab0020bc4b80691aff14e2d5d46041b1a2d582629965c308"]
  - id: altura-maxima-de-un-tiro
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Se lanza un proyectil desde el suelo a ${{v0}}$ m/s con un ángulo de ${{th}}°$ ($g = 9{,}8$ m/s²). ¿Qué altura máxima alcanza, en m? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v0":24,"th":30}
        answers: ["sha256:d0e6cf5b60dad69b0e8d0e48cc7b1b29e25a5ca6e65e5f7355ce980bc3a4d119","sha256:e4dabf45b53ed1cfd6d202b308780fdc66e75a8c5d1afdd68a5396d15ea18e5e","sha256:b30776f6f11fbcbfa1f98fcc6453f1597606ca491e15a57f03f1bc7f36ec4b2d"]
      - values: {"v0":16,"th":60}
        answers: ["sha256:96888a54db388a7cbb69bb5172fd492f965a89345621a981e7b1e09ce6b9db6f","sha256:43062bb3bbf93aead46cafc8842a4c7bdc7cb182021618d4c2abdcbe70b1b5e8","sha256:c52b512189df77d4d3dd116dd8dc2001c381908a0273d2bc94a86ba3fa6438f1"]
      - values: {"v0":35,"th":45}
        answers: ["sha256:0ae62c47bc15cee3fa8c3341106b3c0cc9329d0ce3ce9042e21e4ae97e0542a9","sha256:2c9cdd0cfa32fc75f445b27c5bf4604741eee35c1a4500e28e89e787ce5848a0","sha256:e802ce002ce6be0aeb2e79ae55982dc3cefea6a3d42ba69fb822b3f7a13ae483"]
      - values: {"v0":12,"th":80}
        answers: ["sha256:2a05a5898594b45408fb3b02f58bc664af99f9e5ccbed9e298f0cc98b1a47aa2","sha256:1dce6e4780e854c4a04e185b8256bdf96bad4d528fce482f72f8b3c60c6380d6","sha256:cfec6a6e89b49b1b656317ac9afd162e547c1f2549e6a2cce630cdf95e4e98ca"]
      - values: {"v0":28,"th":25}
        answers: ["sha256:1ff19a1f594ecdb996cf86f3a46a8b1638de886589c1862ede98b27a37685323","sha256:536cbdbaebdb868d094094321712c5fd919182e81b4714b3e18e98c35720272d","sha256:179faedab5e9dc6d1620af615589e9144f2c9a62b5f3a33d64c1f6ac72f71a6f"]
      - values: {"v0":40,"th":50}
        answers: ["sha256:698c8b3060bbcd93f4b698de8b712c4d83dead7236116f9d07c65c802fff14a1","sha256:ec1da143f7bee95906f9b565244e5eee2eff3184a9105a99cf09c961efa0214c","sha256:8b0f5f526a5f71f42730680f020b66e21085eb2384085d41e4c5168bd74b0ed6"]
  - id: tiempo-de-vuelo-desde-una-altura
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Desde lo alto de un muro de ${{h}}$ m se lanza una piedra a ${{v0}}$ m/s con un ángulo de ${{th}}°$ hacia arriba ($g = 9{,}8$ m/s²). ¿Cuánto tarda en llegar al suelo, en s?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v0":10,"th":30,"h":"5"}
        answers: ["sha256:23c6eca6099096dfaf071c1792ba7e9d992c4a6958a8ecc9a7ab16dbbf56baad","sha256:30de76d05321b55719f7b8e05769b06e79511d3bb0a213597ef549c38732fb9c","sha256:b8aa6e53075044108a87d2fed55925fda0f402747a2a8379b51143a26f59bf17"]
      - values: {"v0":20,"th":45,"h":"10"}
        answers: ["sha256:e7d65a5c18c65df541a71067b6556c38bd690271337c50b92ac98e5ca058446e","sha256:dfda3333027632b772f4883f256d376a05021e168b60536f9f8bfe69b5fee6ff","sha256:058c1bb589e9983945cb38b487f9e75cef3b56478872d8f396751778e773a8b8"]
      - values: {"v0":15,"th":60,"h":"2"}
        answers: ["sha256:509531d5f73570b640ae015201f0c500eeffe935568ed3e354fa0653a0e26211","sha256:5ccc23e5abaa1d8aa4af3a4fbc5781e1ec476c4c4b57b25bf1add38df8d4d3c9","sha256:dcfd9a264ec75e13758c9cf51eb9a502fb39bae2e04289e8232fc3d923adf830"]
      - values: {"v0":8,"th":20,"h":"15"}
        answers: ["sha256:6da2f20ef391e320da365238ed791015af063414ad4cbf1ff38a87d1fa1b1e75","sha256:d2cac9defbb6494a0da543279cfba6935c78b2f56d0664613f3e4866751d5248","sha256:e2573bc3a64078c8f8647c189a5c6850ebc72c3442761bfccd473b35ba030056"]
      - values: {"v0":25,"th":35,"h":"30"}
        answers: ["sha256:9f6bdacad6f7f1fb2e22da92c46ebf2bd8e9cafca768aea2e5c199134a79f19c","sha256:6ff7dd0522393204585047bcb10f855e157e30d9ebd1b65ab4c7c2b278b77100","sha256:4ef80674bbdd7fcad18a3af3c265012f397b64c7f10a55666fd0e027775f0300"]
      - values: {"v0":12,"th":50,"h":"1{,}5"}
        answers: ["sha256:27e8e68348f6df95a0baa1e0facd7cb38efae3f641b02769db8ebe157eaa0db8","sha256:5c0f35494a8b0ba629c290a026a9aabd21c58e419757737ee94e568d3fa3f942","sha256:485e835159d51dce62f88af3bc8b0fa0f8df48dc36900b5c99430da903b4cffa"]
  - id: aceleracion-centripeta
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un objeto gira en una circunferencia de radio ${{r}}$ m con movimiento circular uniforme y da una vuelta cada ${{T}}$ s. ¿Cuál es su aceleración centrípeta, en m/s²?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"r":"2","T":"4"}
        answers: ["sha256:9d5a72d2fa0fafe71012ef4a56cf13ccc0c429f63e6cf339f9556db39c23771a","sha256:10118721afdcb63c5058857fc2e01607191d2aea5cd490a292e6231fe7624ff5","sha256:8cecf1e2858f862d261aad970472893d6f3de856d13cd209bd17a2390734c852"]
      - values: {"r":"0{,}5","T":"1"}
        answers: ["sha256:dff8b9cdf3dd7a751d59590f6ce7be7fcd8231bf2498bf14f0a0effc2b4ad755","sha256:2be519af40a7233c49e3136834640e0b2e5d5e76d8fd7afa6e540be21d7c1695","sha256:fe955b80eb46ca920d8e1b4117a4d5f86453a9d38faf0ac979c3b867bc2d9aff"]
      - values: {"r":"6","T":"12"}
        answers: ["sha256:db7b6b55214114703a36b4976db83bc40055fc682ae84213d713040cb4136230","sha256:12d56f7df99a394ae3afc7c260ad7ff9a049374e3bf00fe8f0e23422ed8044f3","sha256:7e5f8014db368e7437b7f6825f82fb2be825c8fb51a512504ac2e40c1d3ac6a9"]
      - values: {"r":"0{,}3","T":"0{,}6"}
        answers: ["sha256:2ca17214908f11a11b7004fd94e23de61fae1d443c69e0d298c06b8f4e16c95c","sha256:5602f774bad0f35b4a4df89d0e97ca9a58974bfbac45fc4a81e17b402dc6e78b","sha256:854aa10d5cde4a168fcfa8fec1edc15ed178fe6f491347d72d8b2ce67b59714d"]
      - values: {"r":"50","T":"30"}
        answers: ["sha256:ddeabaaf4298ec65bcf8ab4113283ce3096d5598d4b20efccd203466a0ac8358","sha256:e7969dc26aa17f0172f84b021b77ffc79959c7edbbb78767565ec53484224641","sha256:2058a76fc3c639d9176deea556f2be9a92eb94e2eeff81af2d3ac518da610e68"]
      - values: {"r":"1{,}5","T":"2"}
        answers: ["sha256:d1dd9ed32524b7386621e13180b89b3b7c59ddb5d31f895baf51c25e94e436f4","sha256:c0af91a5970b4dbd90756e24dc3f30c871146a712532810d7bbc5438e0394f3f","sha256:833f9c7e16f2423bf87031580b658729cef2cd4ddfc0525c9b732231072b5ff5"]
  - id: revoluciones-por-minuto
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un disco gira a ${{n}}$ revoluciones por minuto. ¿Qué velocidad lineal tiene un punto de su borde, a ${{r}}$ m del eje, en m/s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"n":33,"r":"0{,}15"}
        answers: ["sha256:47ba14d80e148969bb7ee9656ed691776c5f0330a51c818576c7738612e4886a","sha256:f77e2e85d856a808a30be65c6c51ece653cd81cab923ea6f837d9944285747a3","sha256:7ebdcec723466a42faa9d324e6b93c8a64efb3ce8a69a2b67597ef656b6aea2b"]
      - values: {"n":1200,"r":"0{,}05"}
        answers: ["sha256:909a65595ffb31d657901493fba1faee380b39e2f5bed2ce2263f7dc25c49187","sha256:f9ae8573079339239fff6d811265715dd47a974798637d9816ba1626f62536d6","sha256:ba3ac1aac1a84a3b9a9b2a7ab45d9e60c5f72ef5bab7bdfc1cdfe39db56783f8"]
      - values: {"n":3000,"r":"0{,}12"}
        answers: ["sha256:764aa8a7bff4ab5f995e7a07875fc6c1ac4e71b4fade6405c5a43f59a24ac495","sha256:c66462cdfc044a9206f4d46c20ac6e8259b3a059cbdfe2ce108b052d0996fe63","sha256:27aca82f33c50bfc1f09e9e1ed7f4c31d6bbd153aca7f7bc5e6a01e634cb1d4a"]
      - values: {"n":45,"r":"0{,}09"}
        answers: ["sha256:8b7587267887773cee1fab2cbef118ae016e0bc17208a0e03bd2ca65ea6a9566","sha256:569d549d10462c9ca440a1961ab29bdf837e76832efd9fc10df7dcd6382ab276","sha256:60510ccdb60474698355b92931694cf563c416c259a2535b8993ce29247eb9f3"]
      - values: {"n":600,"r":"0{,}3"}
        answers: ["sha256:58be260b61e36e577074c09eb1aef156feb5c4565b87e7282fd1b1d46c4bf277","sha256:2c5b9da2a56d4d9968dc9b9502bdeed0c127d5547890f51e4112bc2c6036236b","sha256:49d6e4c930d3d0f97dfedd29b3049c831a31c0a5a948a6e37db8741ae8c88d2e"]
      - values: {"n":7200,"r":"0{,}0475"}
        answers: ["sha256:128dd617b4b0ab244d5cf71a8199e94150495de9c5c9a43823dbc3ac4c4ae2a2","sha256:4b1e29454f0c587893dbd1ce10de0ddcca7acfda651de4fc754b1e964fac00c5","sha256:9f1057fdaa7a32b794962ca425de118831a5470e7a44bdcce6d5dd5841da6167"]
  - id: cruzar-un-rio
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una barca cruza un río de ${{L}}$ m de ancho apuntando perpendicularmente a la orilla a ${{vb}}$ m/s respecto del agua; la corriente va a ${{vr}}$ m/s. ¿Cuántos metros
      río abajo llega a la otra orilla?
    variants:
      - values: {"vb":"2","vr":"1{,}5","L":70}
        answers: ["sha256:5c22d19200de59a84581bec4f777f9bdfff714d5847596d91b497299305bc2a2","sha256:47ee0f432764b6995be426d041e94dac0ed0a1268aad9a524f439f54d25fcfbb","sha256:1d6129c4950deda90c0cab8f908275207d2509591739bf357eb2f25b02fa9f00"]
      - values: {"vb":"5","vr":"2","L":120}
        answers: ["sha256:f9573a9367852ed11c203e316bd7b82560c6c828ad94f27000d08a4e615c7985","sha256:4be1d00b8285d42b3bc4e2ea9cfbb895b1e85934e4a93ed223935cf81918176a","sha256:4c23e3a62517a1b53d66ee78a2327e237e2fa23b5ca08be2f104e621f2f126ad"]
      - values: {"vb":"1{,}5","vr":"0{,}5","L":30}
        answers: ["sha256:7b1a17385d14dfdc8227045fefcaeb35538bfb28d569167ed78baa5d5dd72d47","sha256:ed762ed3984a90f666c7fc7a1d7523e841e5682cead88e3066624e11ea8607c5","sha256:c2d8c5762d305849cc823cf328a793ee96f8ef103868731b23014f48f832df23"]
      - values: {"vb":"4","vr":"3","L":200}
        answers: ["sha256:b4b3e4f7567ff65e8dadc711de53e26a43fbd5e63b8b4e8f98185faf2da8bbcf","sha256:d3f111a427513bfcd2c0a3f60181768027fa81d52aa34264754e14523de4daf8","sha256:202ccc2c02f5b3fbc7d3e964e8b46712c409a7dd4fe7ea52b60b350d970622f1"]
      - values: {"vb":"2{,}5","vr":"1","L":45}
        answers: ["sha256:591cd7833345e393f23f90a62adbe3f471a8203554613b403e0d41f5d8ee725a","sha256:0beeff4cef7f050e67ad888aea0e6e2900b0e048b3ac86cdb6f2f38db58df2f9","sha256:f8043a0cba265e9c5872cbab9ae662c7fd3613c3449f16df55452eeb007d6ed5"]
      - values: {"vb":"6","vr":"1{,}2","L":150}
        answers: ["sha256:98e3d858a7a05e607259c2e6c3df2fcf0e87d98368d2bbae56e0eba038e5a764","sha256:6da4880f1f401c496722459fffb07a512e6e66486ad8d0e0be9bd1d4308cd2f7","sha256:eddf1d27589ea588f1210d9892dec345cd558b36d4d49f3153ff61a83821a16f"]
  - id: independencia-de-movimientos
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica el principio de independencia de los movimientos en un tiro parabólico y deduce la ecuación de la trayectoria $y(x)$ para un
      lanzamiento desde el origen con velocidad $v_0$ y ángulo $\theta$. (b) Deduce el alcance $R = \frac{v_0^2 \sin 2\theta}{g}$ y explica por qué el máximo se obtiene con $45°$ y por qué $30°$ y
      $60°$ dan el mismo alcance. (c) Explica por qué en un movimiento circular uniforme hay aceleración aunque el módulo de la velocidad no cambie.
    sealed: "gz64:H4sIAAAAAAACCn1Ty27bMBD8lYXAgy0ohqM+gLrIKcmtPQU9FGUdrKmNw4BaqiRlWBX8MfmAAAHyB/GPFZT8kAskJ0G7w5nh7LJNvDV10JaTWZKmIxynKdxoBtSOMiADpV3pUhMHC/fW6b+WAxoY+YhRZMih0tsXHkMT0StyQasIGDZBnC3FGLxl0FxQRVxERvIzEGu4gNXtVEplvZThngJKmQWRgWj2La950IIzkPLOoTrPl2Geiwlcka/oAbmwkkWAi12/XW/a/6g3AhrwtQ861A1xYWe9zFrKgHuRg0C73LT56nY6zzuO+OlZ1vNcZFAzQoVu+7iwBieSJafpaBET7DinInaxv+I0Ch9/d/x78uEFB2bb5eaIPULzQV9M4NKWFsRJB6Q0BOein+D2ca1LC+RBWQZxAF3Al+nrc0z6WPn46fVZTODnjvDz9PW5s+A1n+c9Gv32Cf7UBOJDLEADIsKE5NH2kZe1sVGorAyVxAGdtn4MBXLnRfvSAhqFrGgfmYqRfcOTfYJSFxRPKCwX2kJBBtJ0RSpYl6awImOVLrDIgC14ayICfA3l9qWojZ3ANUPN8P3yBxiEQjtSPW9BsXA43/NjTCZorjFapq9AnnbKkrGqOSDco9LYOSIOzs5O7XbF7VMVUxQ4mNo837SuH6MtaYnz3IlJkiWuXjitktmvNlFOB3LaJrPkhrodiREeH54fvrzm+MYasIugibsbHRYRRDNajzuNaNz6ZJZvshOVKypq1aW7mwQ08BAfxZ1Wvbjo9gCayKyXNZoYVWftrRG/p3e9rkxkjktj8O3gPEFBCwIcjP2d2Z1K/t78A2geSWHNBAAA"
  - id: r-escalar-vectorial
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas magnitudes es vectorial?
    options:
      - |
        La masa
      - |
        La temperatura
      - |
        La velocidad
      - |
        El tiempo
    answers: ["sha256:20c5c4270fedee7121c36df5eabc03c8b0670c825a9ef287bf8183e6f05dea15"]
  - id: r-modulo-5-12
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el módulo del vector $(5,\ 12)$?
    answers: ["sha256:932d1879e2bffa12cc92e9bece3727dc58760aa87b400bb0d580af2f788df909","sha256:21bc389cb7f46c8fcadd4e3d3c2902acbfcfba55f22535d21aff7d74220d6581","sha256:1d9008b07673b1f74f9a7d3818304eb54567a3671628e6170fe34ca57f082860"]
  - id: r-componente-horizontal
    tier: 1
    type: opcion
    review: true
    prompt: |
      En un tiro parabólico sin aire, ¿qué le pasa a la componente horizontal de la velocidad?
    options:
      - |
        Se mantiene constante
      - |
        Aumenta
      - |
        Disminuye
      - |
        Se anula en el punto más alto
    answers: ["sha256:3222fb7b4f7a328dc63f960ea4dc2e1208d37a0026dbd018da304da695000f7f"]
  - id: r-angulo-maximo
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Con qué ángulo (en grados) se consigue el máximo alcance en un tiro desde el suelo sin aire?
    answers: ["sha256:69681b9ded03a008fb5a918d73d93f949fe373f7e72f917fc32291f7f6e6f794","sha256:103a329cba18102d6d0bcad7cf4c0555321762275c318bfcad6ed04ffc630123","sha256:2a5eb0684a1a6e0ae42eb4ab6022002e6db483f047edd2a20be306bb1a3eae4d"]
  - id: r-centripeta-direccion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Hacia dónde apunta la aceleración en un movimiento circular uniforme?
    options:
      - |
        Tangente a la trayectoria
      - |
        Hacia el centro de la circunferencia
      - |
        Hacia fuera
      - |
        No tiene dirección
    answers: ["sha256:b13d59b8b4ca1f642eb7ba7a44c9cf317f3f2b0c8d8c94766b36f4a18f8b99b1"]
  - id: r-doble-radio
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Dos puntos de un disco que gira están a $r$ y a $2r$ del eje. ¿Cuántas veces mayor es la velocidad lineal del segundo?
    answers: ["sha256:30bcfec6992f21f5f7d8f4b3b7cf36d9c838a8ed17b606247dc8dc72f59d0595","sha256:94cc2bce284bf9890ac56360f299c8c59661b5de4a7c5130e989088f32eee878","sha256:c04541ff37ef743fe82db5e7a6dbab8d94d57b98704aefb57f52cf58e48fee74"]
  - id: r-misma-caida
    tier: 2
    type: opcion
    review: true
    prompt: |
      Desde la misma altura, una bala se dispara horizontalmente y otra se deja caer a la vez. Sin aire, ¿cuál llega antes al suelo?
    options:
      - |
        La lanzada horizontalmente
      - |
        La que se deja caer
      - |
        Depende de la velocidad
      - |
        Llegan a la vez
    answers: ["sha256:40908c16192c98d81bb103452d7ca2f3cb6e560d721d5527f022051d5db1689a"]
---

# Vectores y movimiento en el plano: componentes, suma, producto escalar, tiro horizontal y parabólico, movimiento circular y movimiento relativo

Un balón chutado, el agua de una manguera, un satélite girando, un avión con viento lateral: el movimiento real ocurre en el plano o en el espacio, y para
describirlo no basta un número con signo. Hace falta una herramienta que guarde a la vez cuánto y hacia dónde: el **vector**. Con vectores, el tiro de un
balón se descompone en dos movimientos rectilíneos que ya sabes resolver, y el giro de una rueda revela una aceleración que no se ve a simple vista.

## Objetivos

Al terminar sabrás:

1. Distinguir magnitudes escalares y vectoriales, y operar con vectores por componentes (suma, módulo, dirección, producto escalar).
2. Describir la posición, la velocidad y la aceleración en el plano como vectores.
3. Resolver tiros horizontales y parabólicos: alcance, altura máxima, tiempo de vuelo y trayectoria.
4. Resolver problemas de movimiento circular uniforme: periodo, velocidad angular, aceleración centrípeta.
5. Componer velocidades en movimiento relativo.

## Qué debes dominar antes

[[fis-cinematica-rectilinea]] (MRU, MRUA, caída libre), [[mat-razones-trigonometricas]] (seno, coseno y tangente) y [[mat-vectores-rectas-plano]]
(vectores en el plano y sus operaciones).

> [!question] Test de entrada
> 1. Un objeto cae desde el reposo durante $3$ s: ¿qué velocidad lleva ($g = 9{,}8$ m/s²)?
> 2. $\cos 60°$ y $\sin 60°$.
> 3. Suma los vectores $(2, -1)$ y $(4, 5)$.
>
> Respuestas: $29{,}4$ m/s; $\frac12$ y $\frac{\sqrt3}{2} \approx 0{,}866$; $(6, 4)$.

## 1. Para qué sirve

- **Deporte y balística**: trayectorias de balones, saltos, proyectiles.
- **Navegación**: aviones y barcos con viento o corriente (movimiento relativo).
- **Máquinas que giran**: ruedas, discos duros, centrifugadoras, curvas de carreteras y montañas rusas.
- **Robótica y gráficos**: posición y orientación de un brazo robótico o de un personaje se calculan con vectores ([[rob-cinematica]]).

## 2. Escalares y vectores

> [!practico]
> «Camina $500$ m» no basta para llegar a ningún sitio: hace falta decir hacia dónde. La temperatura o la masa se dan con un número (son escalares);
> el desplazamiento o la velocidad necesitan además una dirección y un sentido (son vectores). Se dibujan como flechas.

Un **vector** tiene **módulo** (longitud), **dirección** y **sentido**. En el plano, $\vec v = (v_x, v_y) = v_x\,\vec\imath + v_y\,\vec\jmath$, con:

- **Componentes** a partir de módulo y ángulo $\theta$ con el eje $X$: $v_x = v\cos\theta$, $v_y = v\sin\theta$.
- **Módulo** y **dirección** a partir de las componentes: $v = \sqrt{v_x^2 + v_y^2}$, $\tan\theta = \frac{v_y}{v_x}$ (mirando el cuadrante). *Ejemplo:* $(3, 4)$ tiene módulo $5$.
- **Suma** por componentes (equivale a la regla del paralelogramo o a poner las flechas una tras otra); **producto por un número**, que estira o invierte.
- **Producto escalar**: $\vec u \cdot \vec v = u_xv_x + u_yv_y = |\vec u|\,|\vec v|\cos\alpha$. Sirve para hallar el ángulo $\alpha$ entre dos vectores; si vale $0$, son perpendiculares.

## 3. Posición, velocidad y aceleración en el plano

La posición es el vector $\vec r = (x, y)$; la velocidad, $\vec v = \frac{d\vec r}{dt}$, siempre **tangente** a la trayectoria; la aceleración, $\vec a = \frac{d\vec v}{dt}$. Cada componente cumple
las ecuaciones de [[fis-cinematica-rectilinea]] por separado: el movimiento en el plano son **dos movimientos rectilíneos simultáneos** que comparten el tiempo.

## 4. Tiro horizontal y tiro parabólico

> [!practico]
> Si dejas caer una moneda y a la vez lanzas otra horizontalmente desde la misma altura, llegan al suelo a la vez: el empujón horizontal no cambia la
> caída. La segunda avanza mientras cae, y la combinación de ambos movimientos dibuja una parábola.

Despreciando el aire, con $x$ horizontal e $y$ vertical hacia arriba:
$$
x = v_0\cos\theta\; t, \qquad y = y_0 + v_0\sin\theta\; t - \tfrac12 g t^2 .
$$

- **Tiro horizontal** ($\theta = 0$, desde altura $h$): tarda $t = \sqrt{2h/g}$ (lo mismo que en caída libre) y avanza $x = v_0 t$.
- **Tiro oblicuo desde el suelo**: tiempo de vuelo $\frac{2v_0\sin\theta}{g}$; **altura máxima** $H = \frac{(v_0\sin\theta)^2}{2g}$ (cuando $v_y = 0$); **alcance** $R = \frac{v_0^2\sin2\theta}{g}$, máximo para $\theta = 45°$, e
  igual para ángulos complementarios. *Ejemplo:* a $20$ m/s con $45°$, $R = \frac{400}{9{,}8} \approx 40{,}8$ m y $H \approx 10{,}2$ m.
- **Desde una altura**: se resuelve la ecuación de segundo grado $y(t) = 0$ y se toma la raíz positiva.
- **Trayectoria**: eliminando $t$, $y = x\tan\theta - \frac{g}{2v_0^2\cos^2\theta}x^2$, una parábola.

## 5. Movimiento circular uniforme (MCU)

Un objeto que recorre una circunferencia de radio $r$ con rapidez constante:

- **Periodo** $T$ (tiempo de una vuelta) y **frecuencia** $f = \frac1T$ (vueltas por segundo; las rpm son vueltas por minuto).
- **Velocidad angular** $\omega = \frac{2\pi}{T}$ (rad/s) y **velocidad lineal** $v = \omega r$: los puntos más alejados del eje van más rápido.
- **Aceleración centrípeta**: aunque el módulo de $\vec v$ no cambie, su dirección sí; esa variación apunta al centro y vale $a_c = \frac{v^2}{r} = \omega^2 r$. *Ejemplo:* una noria de radio $10$ m que da una
  vuelta cada $20$ s: $v = \pi \approx 3{,}14$ m/s y $a_c \approx 0{,}99$ m/s².

> [!formal] Con rigor: de dónde sale la aceleración centrípeta
> Con $\vec r(t) = r(\cos\omega t, \sin\omega t)$, derivando, $\vec v = r\omega(-\sin\omega t, \cos\omega t)$, de módulo $r\omega$ y perpendicular a $\vec r$; derivando otra vez,
> $\vec a = -r\omega^2(\cos\omega t, \sin\omega t) = -\omega^2\vec r$: apunta al centro y tiene módulo $\omega^2 r = \frac{v^2}{r}$ ([[mat-derivadas]], [[mat-funciones-trigonometricas]]). $\blacksquare$

## 6. Movimiento relativo

La velocidad depende del observador: $\vec v_{A/\text{suelo}} = \vec v_{A/B} + \vec v_{B/\text{suelo}}$. *Ejemplo:* una barca que avanza a $3$ m/s respecto del agua, perpendicular a la orilla, en un río cuya corriente
va a $4$ m/s, se mueve respecto de la orilla a $\sqrt{3^2 + 4^2} = 5$ m/s; cruza en el mismo tiempo que sin corriente, pero llega río abajo.

## 7. Errores típicos

- Sumar módulos en lugar de componentes ($3 + 4 \neq 5$ salvo que sean paralelos; $(3, 0) + (0, 4)$ tiene módulo $5$).
- Usar mal seno y coseno al descomponer (depende de con qué eje se mide el ángulo).
- Pensar que en el punto más alto de un tiro la velocidad es cero (solo lo es su componente vertical).
- Creer que en un MCU no hay aceleración porque la rapidez es constante.
- Calcular $\tan^{-1}$ sin mirar el cuadrante del vector.

## 8. Resumen

- Vectores: componentes, módulo, dirección, suma, producto escalar.
- En el plano, dos movimientos rectilíneos independientes con el mismo tiempo.
- Tiro: $R = \frac{v_0^2\sin2\theta}{g}$, $H = \frac{(v_0\sin\theta)^2}{2g}$, trayectoria parabólica.
- MCU: $\omega = \frac{2\pi}{T}$, $v = \omega r$, $a_c = \frac{v^2}{r}$ hacia el centro.
- Movimiento relativo: las velocidades se suman como vectores.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se pasa de módulo y ángulo a componentes y al revés.
2. Por qué en un tiro sin aire el movimiento horizontal es uniforme.
3. Las fórmulas del alcance y la altura máxima, y por qué $45°$ da el máximo alcance.
4. Qué es la aceleración centrípeta y cuánto vale.
5. Cómo se componen las velocidades de una barca y de la corriente.

## Siguiente

[[fis-medida-movimiento]] repasa el bloque; después, [[fis-leyes-newton]] (las causas del movimiento).
