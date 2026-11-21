---
id: mat-sistema-decimal-operaciones
title: "Números naturales: el sistema decimal, otros sistemas de numeración y las operaciones"
area: matematicas
trunk_level: 0
prerequisites: [mat-resolucion-problemas]
academic_sources:
  - "Ramos, F. Matemáticas 1.º de ESO (LOMLOE), capítulo 2: «Números naturales. Divisibilidad», secciones 1.1 (sistemas de numeración: decimal, romano, otras bases) y 1.2 (operaciones elementales: propiedades, división, jerarquía). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2002%20DIVISIBILIDAD.pdf"
  - "Ifrah, G. Historia universal de las cifras. Espasa, 1997 (sistemas de numeración antiguos y origen del cero y de la numeración posicional)."
hints:
  - "Concepto: en el sistema decimal cada posición vale diez veces la de su derecha; dividir es repartir en grupos iguales y lo que sobra es el resto, siempre menor que el divisor."
  - "Herramienta: descompón el número por posiciones (unidades, decenas, centenas…); para el resto con calculadora, multiplica la parte entera del cociente por el divisor y réstalo; para la jerarquía, resuelve primero paréntesis, luego productos y cocientes de izquierda a derecha, y al final sumas y restas."
  - "Documentación: Marea Verde 1.º ESO, cap. 2, secciones 1.1 y 1.2."
exercises:
  - id: valor-de-posicion
    tier: 1
    type: numero
    sig: 8
    prompt: |
      ¿Cuánto **vale** la cifra ${{d}}$ en el número ${{N}}$ (no qué cifra es, sino cuánto aporta al número)?
    variants:
      - values: {"N":"7\\,385","d":7}
        answers: ["sha256:1baac2c12766f0b99e139b6654559a5701efa19a91dbaa5a4a44894d448276a2","sha256:741d2efa32bb8be219ba034fb063287a137ee0e08fbbf4e017569bba55525a62","sha256:0a15c2c3763997f879514a6a5b0a2bbcfbf6acc1e8453dd5d8cf2d51c8da5f8b"]
      - values: {"N":"508\\,744","d":5}
        answers: ["sha256:596964761009c8573f9a0f3ef32bf0b8dfcc9c9da39dfe227ce012c7770a3ecc","sha256:4884c07d883e1a3893b29a900eeb4332cff9082922eb56a25af78a22cfaba026","sha256:e684fd5f7b2e5e73ebec29e709ba1b188669dde6f6e62dbc44832047a88dc2ba"]
      - values: {"N":"9\\,210","d":2}
        answers: ["sha256:6a8773002427533a5fc9ee9b1abe66332a493d88fb21037b20a35c8b90416b0e","sha256:77f4d2975ebaaf39f5395e16a5d491ca94ad51198ba7617f583d5c96ef00f783","sha256:10a4ab71805045d7da7605d2a5b4e21770bb3d9df4437fe1ce25a9b73199d1f8"]
      - values: {"N":"36\\,047\\,152","d":6}
        answers: ["sha256:151783b05eee4b30bbe164d7995af8bc5a31ab59f949367ab26e9d6d780e6742","sha256:698a8b6e4c3042277f99290ed59aa945ac8bc30dec3ec49a56f113daf338cba4","sha256:333f21f4316cf872765176b61e91c53517615c631d57317eac9699f67943ce6c"]
      - values: {"N":"480","d":8}
        answers: ["sha256:8232bec383cedc477a3ba9d5d79bd2cddd5412c62e6bf47e4cf5a221aeacda49","sha256:155900b884a921deddfa136fda6a132c8ab348297c8771e69d70acc28512959a","sha256:911bd2df20292feed24d1321a48cd9cefce5f6afc867de1849a37cb2ba5abc42"]
      - values: {"N":"1\\,903\\,657","d":9}
        answers: ["sha256:17aed001e83a5c2f158f419aab41d72a5cae6f8f21afb037c34812dae6180a4b","sha256:a31caef2f985dc2fb1edb2955672022d61aa92113fe1331d110fe68466ee2716","sha256:9c36ff630886399348bd73a0964a1a8864d9ba35dc353011a28b2ba35bd5bad7"]
  - id: unidades-completas
    tier: 1
    type: numero
    sig: 8
    prompt: |
      ¿Cuántas {{nombre}} completas contiene el número ${{N}}$? (Por ejemplo, $3\,450$ contiene $34$ centenas completas.)
    variants:
      - values: {"N":"4\\,873","nombre":"centenas"}
        answers: ["sha256:4222b30a22c346208b90e16f46e53d0fcfdefcce162a10c15b3136df279335f3","sha256:c137a4c09a70c9e6683c3f48403c819388e499bfa94ff007d6f5fff4ab2db81a","sha256:e58b2a96f9ec230f16f1491595d3a992d209fea8fe4be18714c4a6c64cb26510"]
      - values: {"N":"52\\,019","nombre":"millares"}
        answers: ["sha256:75692787e3a7843f224e8ecdca1cb923921ed28805da1b2d658dfa0de5f25f5b","sha256:b9519f5c20683a4c8926ddbffdf85b1843191fbd0a469d87fdb19035cd5ae5f7","sha256:3284019e409260d8ff7a4f76443443b2ca7a5c516a12c78343a71e28e97e7837"]
      - values: {"N":"999","nombre":"decenas"}
        answers: ["sha256:0d0c602b751bbf435dfa0794810ad221b46f87fe104828dc1608eb502cb50457","sha256:03a2786c54115b2ddf50e01909d8214e40633848df551c27f2b0788ddf4a92f5","sha256:f9b07cc9abddc46f3807c00c3975d6fef69f75e0384ebe22997aaf3794a4178b"]
      - values: {"N":"1\\,200\\,450","nombre":"millares"}
        answers: ["sha256:f071ab1a686b062aaaa60e76ac6e0e5dbac1bd2385e63fe7fc609d42efe44836","sha256:b973fab881933ffaf2c8a1f90a12102ebcea0d3c3624658cb3953bfc37c9f7c0","sha256:288f57eb9f913666b669ff3fb1e4fac2d87f0ce8bfc5c24a3b67999a5b859209"]
      - values: {"N":"30\\,705","nombre":"centenas"}
        answers: ["sha256:f4e9e8baf7855b51a037f3a84fa9b68028727f68d134201dfda3b0036728ed1d","sha256:53a6f110351fb28956b5622739adb4dd16b7ecd5d483a87d38c7e9d24a0d8a92","sha256:bd5afba02e1e3118f5f867dd57cea3b562330e8dffba179f27c314ceafccb5fd"]
      - values: {"N":"8\\,008","nombre":"decenas"}
        answers: ["sha256:8518241b5758c34ade8f2ebc90d5f0814bb8012ebc4ea41de0fd34133cdde4d3","sha256:905e7f9acd0d1d30606bac515a38d69cb807e4f610ac8f7525d48b9ba1a47096","sha256:17a6118ca265931b51a880e2549605192f55a031c79e7713de4e472fa5f8ff7a"]
  - id: romano-a-decimal
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Escribe en el sistema decimal el número romano **{{s}}**.
    variants:
      - values: {"s":"MCMXLVII"}
        answers: ["sha256:fb36d8c41b6a4e4810851822f685474688adaf24706c1c81c967921b965878c7","sha256:932242de377df9c30040f2315c76a423173c8f00aa22ab6dad4384cf049a3c0c","sha256:62125ac49370263bffa040176418748c7272cea2cb40bf40700f652aefe1c3ff"]
      - values: {"s":"CDXLIV"}
        answers: ["sha256:2f3721eadff3bf28291e5f65822e9fa7c32d0913c7b668c163eb2dc8fa5886a0","sha256:a5f27a4d6ad4f72e87dfbc70c2fec05e8cc4034c35c76a675f927f66570b225a","sha256:ba6c6ea20c99b4510b5e4f123c046ac90c601b9456e835434ee4b4cf76d2d149"]
      - values: {"s":"MMXXVI"}
        answers: ["sha256:26983a30b5a0d44c346aa1715950e67989de6ce7f6651d17878058905eca1326","sha256:fd2e10f2ba3bcfcab15234ffaca258d9c8d33faea8abb85bef39cb17815cdc79","sha256:b573af3c8e09ae33a85e06619baf97d6a80a6bb703bb0120acff24179d459d8e"]
      - values: {"s":"DCCLXXXVIII"}
        answers: ["sha256:954f17ac9efb8332056a78f9f7b3c022f2ef4b9787bbdc63dbcd7f94839d5bbb","sha256:8c664d059dd1d1bca4931f181d035512c55e11f14d478c7b0135e55171408f6b","sha256:a13694b2095448d72f19767153e951f8454dd6f0b4c23594c2be675222f9934d"]
      - values: {"s":"XCIX"}
        answers: ["sha256:a9904ba24e209bd263ba0301e261c4b4b6d70a424010a1ed51705e2115c3043e","sha256:34eaf87a6d3a2c2976a03c4cd623b72218bd43ae4699ad6b34a8ea2e8bf1200c","sha256:c25a7397b647a5ec9f154bf15f06b9dcf326100a46e1d991abf20220058bd3f0"]
      - values: {"s":"MMMCMXCIX"}
        answers: ["sha256:234e04e06c5b6728f6b63fe03e7ee6930f1decdcdb28ec55566ccd6aa0e5b5d6","sha256:80972ef072b14ee7457b7c92b4bdf439e6f8cb4c9d5cbff07b8665bac39428ba","sha256:3b1d30f212475807d8a51438d7965e01e9ffbdb0fc049180fc089a616d288fa8"]
  - id: decimal-a-romano
    tier: 2
    prompt: |
      Escribe ${{n}}$ en números romanos (letras mayúsculas, sin espacios).
    variants:
      - values: {"n":"2\\,024"}
        answers: ["sha256:855cdba272342bb5ddb4600e8df82986a6403b7a3fa5eae706612fab8b2d932b"]
      - values: {"n":"49"}
        answers: ["sha256:6594d25e648c69449707671327f9221c8dc568ff0ece61997e234f8a80c785d4"]
      - values: {"n":"3\\,888"}
        answers: ["sha256:67e182f96d5b04068f0020d59cae5ab1ccf1673d78e1a2391e49511eb142652c"]
      - values: {"n":"444"}
        answers: ["sha256:52ed21dddeecd7d6094f0524d67ada4ecb578723b17b41f056e64281ae4612e4"]
      - values: {"n":"1\\,492"}
        answers: ["sha256:b50376f902063ec2299703aebe572179a6b2a7a3689ad1c530dab525707bb467"]
      - values: {"n":"2\\,999"}
        answers: ["sha256:b494d4229d1a8d54704aca1982b3d9bae9b46ff8a0e20399f9eddd71a0e6d813"]
  - id: decimal-a-binario
    tier: 2
    prompt: |
      Escribe ${{n}}$ en el sistema binario (base $2$). Respuesta: las cifras seguidas, sin espacios.
    variants:
      - values: {"n":22}
        answers: ["sha256:db757b73dcd501203e0148fb2ac8cb90c76be44c207d981bcc2dcf9c3c78d5d0"]
      - values: {"n":37}
        answers: ["sha256:9273c499a75ff31fcd1444f6b1bac768ab93ed86475a4202c7ad5466363f0cfe"]
      - values: {"n":64}
        answers: ["sha256:6cce36d9f8a9e151b100234af75cca89d55bcb94c153f51847debdf1f39cae45"]
      - values: {"n":100}
        answers: ["sha256:c2346193c633a6b2314f6fb6f2bc5ee06350c584096610532ab59403b4e7adb6"]
      - values: {"n":255}
        answers: ["sha256:ee79976c9380d5e337fc1c095ece8c8f22f91f306ceeb161fa51fecede2c4ba1"]
      - values: {"n":9}
        answers: ["sha256:fe675fe7aaee830b6fed09b64e034f84dcbdaeb429d9cccd4ebb90e15af8dd71"]
  - id: binario-a-decimal
    tier: 2
    type: numero
    sig: 8
    prompt: |
      ¿Qué número del sistema decimal es el binario ${{s}}$?
    variants:
      - values: {"s":"10110"}
        answers: ["sha256:b6ba8515c82331d71ab5ab5fb9abc145c4fa4c7c13e2d4e3ab3197bc941a136c","sha256:077a5e4ebdffb57bb83eb3787dcafc09c6dfaf1347c40eb11e4a261fe6ec9ec0","sha256:fa03521e89ad5029b2547fd724128ae2e3a05817456930dad298baf7037f8753"]
      - values: {"s":"111111"}
        answers: ["sha256:eca9b4dda85508bcf95bb04aadd0bf7bf6ef75c70e2e14f452756a2be617f329","sha256:acc40da7483723c7d1147e63c216545f81a112654e6dc6a9d2c07931f7d6b748","sha256:801db943c4b94454053c6dddf12b158fb05ac43c87ae76d2c954a825358132f8"]
      - values: {"s":"100000"}
        answers: ["sha256:65290f57c88f8f8b292ba4dc57032e647d510b30942f7abf4140619420d52d76","sha256:2539fc3d103f3c4e66de0cfb9260b504844a61f2fa00d71f65665d7e9075813a","sha256:e300da152d5890b3662b947748ad03e82e03496b0824e1bb710c84b1746dd269"]
      - values: {"s":"1010101"}
        answers: ["sha256:3695ac3c52e92587cf2d25d2f0f818405d96cf6f148a219305821edba453ceb7","sha256:5f9249e54db6590fce8fb3aa98b1176fe8df98abeeb5420a9419c3c300383810","sha256:6832e6525a586a144b8dcaca6dc929bb4869b0a886ed25304ddf18a52a039967"]
      - values: {"s":"11001"}
        answers: ["sha256:c7a8b3318c480dd3601f8e561a5c797272b4f8c5d96853a27b3b32b79f1b8f8c","sha256:3d4b7546fe495bc2f1007c9e00adf904e5636ec645e862f5bbcbc82184d47015","sha256:66b76e20a6e93cc90d2a3406d420d0cdc175116b546817553d4d0c084a85b14b"]
      - values: {"s":"1111101000"}
        answers: ["sha256:c60f36c880b55ca3dfada9f3e54cc0543e9645fa98e456ac78f6045045061e7d","sha256:7236d140aa06de48ba7aff1884ee837477398a98262eb9557f7a4ede1a1ebfb9","sha256:fed5fb71f2085320f7c29e310b49dcb69de8a36ccac581eefaa691477fce7ea3"]
  - id: redondear-naturales
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Redondea ${{N}}$ a {{u}} más próxima (si está justo en medio, hacia arriba).
    variants:
      - values: {"N":"4\\,876","u":"la centena"}
        answers: ["sha256:bcc2d2ffa6b78b6af2f595f94448bfad4e6503ad37a1298d38077767baa9a77c","sha256:acb36024c0eb1e5fbba16b60908a75889d94904c0603d251b51f22bf7d467f15","sha256:de2f70af809045b68aca8fbbfa19e5dd3077af0b784054232085c0ee2255a532"]
      - values: {"N":"31\\,950","u":"el millar"}
        answers: ["sha256:599228e4a37088930593bf6f6b7b0f7f0513f67b17e9aaab94baae0803e55771","sha256:de6f9f6593e55ebc9d9bdd6cdfffa3f34b9a15291d2139e3a63a98b45d3e8e32","sha256:def6a741761558a23f477fe9c462bc2413aa5acdba4a0b41c2cf814788282217"]
      - values: {"N":"149","u":"la decena"}
        answers: ["sha256:9aef4caee031f15c7646ef2a8558590e581b36df5cce41132bc64e2ee0babaaf","sha256:037114cd88ad0cb5259ddf807a5e707347c9f9630ee39ddb61ed7279d3f68ea5","sha256:363c0c803b2f0c88cbdf7e93788e4e5fbac3e3b6ddfda0e3c72b00788861fa3f"]
      - values: {"N":"72\\,500","u":"el millar"}
        answers: ["sha256:01c2665608833699460c8e5307bfc9f213c612c7e75dbf1fe8c0750b02e3db4d","sha256:b3ad3f03f4e54cfc319eb88daf4379de573a9766b3d4c5b22e7c349f370c9080","sha256:2b5f88ee87625688929ede748649ac72f43236d8711c2af1a3267ae2212ac470"]
      - values: {"N":"995","u":"la decena"}
        answers: ["sha256:c38abeafae664f5dab7c7867aa8e3bf97e47a32e9eaa0110ce5cbfeeece9a0bb","sha256:b4a74e27f9e6f7187142d2f1db875c15ee961baeaea8611a5289c02f9f22692c","sha256:31e11ae0bbc68ba26c9f7d61ca6eb38d99589b79352578c32ddf37646a28b9b6"]
      - values: {"N":"2\\,449","u":"la centena"}
        answers: ["sha256:6dd22e94a2d341434975214a9ee645d15d2096324026c7320be8c29e4cb10bb5","sha256:f95010cabdb9d6cfd63583b9ff7d35dcdc142b9373718ce4c9aec6aaf884d2f7","sha256:5e5195a2096287ab1ceff08df969e0cc096939ad490bedec1a574189aa91e2d7"]
  - id: factor-comun-mental
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Saca factor común y calcula mentalmente: ${{a}} \cdot {{b}} {{op}} {{a}} \cdot {{c}}$.
    variants:
      - values: {"a":37,"b":8,"c":2,"op":"+"}
        answers: ["sha256:2c2068b715a319f4ad354e6aa310ea14eafbf77e1595ef1d9f91a21051d83d3b","sha256:f830fdb6f33852f6e581de7c76463feddd1d4f7448456a232c5b3764d16dd894","sha256:9f3e0a96d54fb990ca51cb4468ca8c3fad34aa54aa6930901cc7a8f2f3d77760"]
      - values: {"a":125,"b":9,"c":1,"op":"-"}
        answers: ["sha256:9a7ccc0d6a134cd5e415de07c350d8e982273447328485e559ed71ede0472665","sha256:9cd3d3f2649030f8fb6c40f2ea11f2b6964567dc5660861c13c25379d1309ae4","sha256:494a4af1e63d5d0467461f841c9a9a174860d1ac319f7e8cb01f468e1eb716f8"]
      - values: {"a":64,"b":7,"c":3,"op":"+"}
        answers: ["sha256:06ca3f3d84a4a5a6c7df5d37fb139251589728eaadaf36a0d3f0df106a094c93","sha256:e841546e8f52e3fd66edd52af526635a0233352b293c8cd4f77a3234577934f9","sha256:0396808520f47e8074a19f212791be6e812000a32871036604f6770c2920c240"]
      - values: {"a":250,"b":13,"c":3,"op":"-"}
        answers: ["sha256:06505e1bc544a687e6b297c1552954b4f9f15116ea5121c95b6be447798cb76c","sha256:474b2bee45f751d1192cf4d657cca9fd7ba87d5f24f35d54dc7d2a7a6a53d16c","sha256:0ac2fc2fa3a828c842304f8b4b482d3234fbfbb107cf8308876bc6acc767e33c"]
      - values: {"a":48,"b":15,"c":5,"op":"+"}
        answers: ["sha256:6442589cc9f86ce86f689b7fe4d6c642cb7073fc0e03aa552ccae48989846538","sha256:3df733249119fe0d3be36a29a7a2e3e6f0dde2f1656534a3bc02f140b6ab1ec1","sha256:49eed85d98a96b5004919fcb0902cac57c03d7a559b49eb984bc5c8ebc85ddef"]
      - values: {"a":99,"b":12,"c":2,"op":"-"}
        answers: ["sha256:05444baed6c4b1f5ba0e850936b93aaeda794d4235872a6778801876d465c82b","sha256:a943de9f6640abca236f4ec1618dd617cb46913614bac47c7320a4b3977326ca","sha256:753860940644c432eccfb0f410626bbc96dfc0309f2e4f1b547cef6c6df54167"]
  - id: numero-que-falta
    tier: 1
    type: numero
    sig: 8
    prompt: |
      ¿Qué número hay que poner en el hueco para que la igualdad sea cierta? ${{a}} \cdot \square = {{a}} \cdot {{b}} + {{a}} \cdot {{c}}$
    variants:
      - values: {"a":37,"b":20,"c":4}
        answers: ["sha256:8d41ea6ab34e24a9ec81aceb6faea6051aba3fcb8e7caafd0f57b8425e75c45d","sha256:2174141ac6ea0c7d5d4b3e7b056c5d8986da779f7a877c590f04df24b094c53f","sha256:b7fd6a64b7ce25dec56716fd71528ef9c9b8910bbf2c7a92ae1fdc4ce651b442"]
      - values: {"a":12,"b":50,"c":7}
        answers: ["sha256:03cf61a8d34955b43a227f5b5311b7b5a88a4c17bf7d3da6e63a92f5bb367258","sha256:5c409139a6edfad618376bd05f1d4c12b1d443b8e962246fa931215208c6f959","sha256:5aa298ea7efb32f796ad294c42ce9d6ba42e62877bfc2d16b82eb355f63c5119"]
      - values: {"a":8,"b":100,"c":25}
        answers: ["sha256:6e0cded10ff0e6f8b66047ae94452f3d020b9b5f3bb430f77c8ea698878b96ac","sha256:627a48414882a3c70becf013ddcafaa1b224945bdfda3c29ee3df3be3a63877d","sha256:0f145f8e10969e0dded250e31523758932923f5966ebf1234e0a6e983fb2d2bb"]
      - values: {"a":45,"b":30,"c":3}
        answers: ["sha256:359ffc4545e1b50923d7e7bddd66575b1d3e5c6b6cde49ae87bf1bc006d20d25","sha256:919605c9e3d2d0a75a27fc2a143d8a2ddd972aea4e3dbd13ed33b2d0c341d503","sha256:369a7df503d09dd1f135f5dce805db4c74b579afd9195aaf690e5316e4cecb3e"]
      - values: {"a":19,"b":40,"c":6}
        answers: ["sha256:e0d44b7c84c2961a53096a0ff90508e7518543a8f6c36b4cbe718d36f8ec80ee","sha256:fbb07dcd8f0a56735ff5c1e7de84216d607ff2bd561db0ab67a4b4193b4ab2d3","sha256:aa52cf66a7fba755e8ae8518ebb7a26cd3f56c026aef14f4af3a64790ef435fa"]
      - values: {"a":6,"b":200,"c":15}
        answers: ["sha256:6bec7fe1c88844eb0951736641949283476962496b07cc1a0447c5f855970f6a","sha256:a2383e0c141029a326fd46678acd02fd8a899af78c74936161e97d2338a00bf3","sha256:001a239009903be0ebee7bfc8aa7f8e90c5789555973cf9897a156dbedf90267"]
  - id: division-entera
    tier: 1
    prompt: |
      Haz la división entera ${{D}} : {{d}}$ y comprueba que $D = d \cdot c + r$. Respuesta: `cociente;resto`.
    variants:
      - values: {"D":"6\\,738","d":456}
        answers: ["sha256:06c2f945a6570c3ba22fe9c383cbd3ae9d6b19f725c5ec331a122d060013fe99"]
      - values: {"D":"34\\,540","d":30}
        answers: ["sha256:8ca0c2dd96accb0a5146c4bd34785428e9300fb8bfad0968a1d25724d8f94218"]
      - values: {"D":"397","d":45}
        answers: ["sha256:7b9abbb1ff19f64836b4c9f5a5c01691e4b1c3c9f0b0dfd34d20ebf7c46b4e22"]
      - values: {"D":"1\\,000","d":7}
        answers: ["sha256:a763dc3ab9ca56ac9a6c73e32a38a80c466f5332166f00fc59480d475a7bbd20"]
      - values: {"D":"9\\,999","d":99}
        answers: ["sha256:c100b1a0f00e5f3e142e3e291e929113b969dbf19c5eef1036fa180be21370f4"]
      - values: {"D":"24\\,015","d":128}
        answers: ["sha256:f54a8a75165eed9c163ff63d060e4807eb426a5088f9cf8c99e00ff8ef8f7c70"]
  - id: resto-con-calculadora
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Con una calculadora que solo da decimales, ¿cómo obtienes el **resto** de ${{D}} : {{d}}$? Calcúlalo.
    variants:
      - values: {"D":"500","d":13}
        answers: ["sha256:ba10bbdcc9134bef275031e2c83d4124f28ce2e72f513c8734964054ac8191e4","sha256:cfdc4b54e18ec537a499972ad9e07643889d0c90082b3fe00d35e049f08bc9fe","sha256:015798ed8f956cc974e153d8801468877b383f162d6e4c7e0b95cec6aed9aa50"]
      - values: {"D":"2\\,025","d":17}
        answers: ["sha256:6c244046b4c302bbeae3d79a02070467eaab60b76e968783a5086a78cc83bb8a","sha256:cc82dc7503ff73aeb0b915941597d4f5874d81d00401f2cf2d08f147e651183e","sha256:b52fd0b1c2a46731f9ada04c01b590c9efcdbf823ba2d1f7b9093e39fddf3b04"]
      - values: {"D":"7\\,777","d":25}
        answers: ["sha256:d2668f8f8ab9b33281d09959662cdfc41683354e2b1ccf213e0e346b07ded48b","sha256:722a0f75a8608928cac5f8bc075481a2bfb08d424f1f98c7f364c7122ca1c680","sha256:aa9767ef3479c12ed6b41a9615c8a93fe7725347cc4a91b13c696bd8e4d23ab3"]
      - values: {"D":"1\\,234","d":56}
        answers: ["sha256:1e413ffcd992d97e5055585b380c4f535561486a5954dede5c2110f4b4f975c9","sha256:988f158430c560c1bffe5ff5de5ec1dfbe1e0da5ada0d28b62da0484b035632e","sha256:21131936d5e14f7f76f6f1c8e3c0b0594b9f483a8b7cb5d2bdf0c2ecb7d132a3"]
      - values: {"D":"600","d":35}
        answers: ["sha256:c0be7858ff01bbdd0f0237b38f7f9aa5ca4794fafdcde5c8d91887a4462cebba","sha256:0aa89a690902b4bf5b37718ab2491879db80449293eb056c093e98cbffff3211","sha256:5b8826349408f5f24800f5f105101571d5350e81a7b60ee59e7d4ebd31d72396"]
      - values: {"D":"10\\,000","d":37}
        answers: ["sha256:b19d93e555408306d119be5874e89bcff6b81b24dab4874dbb8e54a3e92e97a0","sha256:22e541aecd920cff272710f2a3c4a2089f4cfd201e56266f3ac0bc27600a49a4","sha256:04a67397c9c5ff29fea5e22fa2e5876f1df5fe700feab86d1f296d51d8cc9cfa"]
  - id: jerarquia-de-operaciones
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Calcula respetando la jerarquía de las operaciones: ${{e}}$
    variants:
      - values: {"e":"20 - 4 \\cdot 3 + 2"}
        answers: ["sha256:07524bbb84cadad2286bb61f7393180eddc0207ee29064598f27f86b7837ade4","sha256:ae435ed0007be0cb9e27e57aeb5264f127935ac9f82c1cf384c5837faf025a42","sha256:38dc1c138e84e4f96ac33d3e72ac643964c740dd2a45369fcdb4566551396814"]
      - values: {"e":"(20 - 4) \\cdot 3 + 2"}
        answers: ["sha256:13d433ab8716f01f7fb9c8b85d99d59971ea486edbedfe9f9857f97a1bb895ec","sha256:cf004c461e132a0b63b92b93eeb71a3edc1ece375819a0d350cdd3fc84ccfb36","sha256:9305be26773e09b3dc74ae5ea1ea459ab5f41532151130bfcd15ccdf9d840190"]
      - values: {"e":"36 : 4 \\cdot 3"}
        answers: ["sha256:13a172abc7c2f1bd0a3a9791649195664d0524a9b4d4292f0430049394d8e3df","sha256:322aa79cff8de01318bb0b1da7bbd286cef8e145792758e80536d1fd86122d96","sha256:f2b236d5d0e0c96507c79232b8214e1d5bd1f661e34d8c75c4d143f885761069"]
      - values: {"e":"36 : (4 \\cdot 3)"}
        answers: ["sha256:ed520d515ffcca8235f87ce9a4dc8b0a19d3ef4d6d1059fce1157009f23ec79c","sha256:9c8c59531711e4081350b3344d2ac73f1efe974ac6dae151de1cae2f7b2bda87","sha256:0dc7dee1304002a33eecd1fc2d3eefe182a707ad8f9c2c414bdae07180b3dbe3"]
      - values: {"e":"5 + 3 \\cdot (8 - 2) : 6"}
        answers: ["sha256:69994a30150f8f810506a2115c19506c10f92b868593a6bb779a702f0471fd7f","sha256:4228ec77dc6db04b7727abe9d2a6eaa5481a1417cf260171f1b639cad2ca5d55","sha256:466431641000003eba1b3245e3c89cbe8d555db86af015e94f9384ebb43622a5"]
      - values: {"e":"100 - 2 \\cdot (15 + 5 \\cdot 3)"}
        answers: ["sha256:31db1fa8145a6d9b6454663c0bba7986bf57b2729e96be00671577c23ef0def6","sha256:2cdc10c29dd8ccb00012c6a533623b2bc2ab146b5eb9f15773ce92c3f3c440be","sha256:ed0ca2e75d1d2ef86804bdbcdcc87bed95f610fd1569347ac487bc702e25e55e"]
  - id: cuantos-hacen-falta
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Hay que llevar a ${{n}}$ personas en {{cosa}}. ¿Cuántas hacen falta como mínimo?
    variants:
      - values: {"n":45,"cosa":"mesas de 8 plazas"}
        answers: ["sha256:1884c659a3ff275febef0cdac0ed0d9de2d0d7699ba1c55bf8f2977aefdc27f8","sha256:9c4fecee8d7af556ee67d6b7af3243f1ac6dd46df3c75664565872b3ea8ede6f","sha256:96877a1bf4d033b72ef5bddd0ad2f6a67837a45f03f0b15e2718f4a232f6e31a"]
      - values: {"n":100,"cosa":"furgonetas de 12 plazas"}
        answers: ["sha256:074743da64efd4b2e4c65d88faadec624afb3d4da3f102bd8ec20b06a0de66c6","sha256:6e7c23b201781dc6da00e66c30b960eca288e2b2fe14bec538c0d64fcc1514a8","sha256:cc0a02d9ff450786181da065c928e57acc4e8d0deefb29021a103eccd258da1a"]
      - values: {"n":64,"cosa":"mesas de 4 plazas"}
        answers: ["sha256:33fa95b7457905c2bffa623d61e176bc4bb155d18aa255ea710c7cf9a4b7d4cc","sha256:c509bf30f700fbee46f9e545c463de53ab336955c6025f1ff6ca624c28e6c2e2","sha256:b53fd0f67662cac93b39d85b147f5a7a2cfeedff0249bffaf1141c719dd6a526"]
      - values: {"n":250,"cosa":"autobuses de 55 plazas"}
        answers: ["sha256:5c83f55fb7ba106dd9829988034c8d8bf806e4b0d17a18223b7f5b87c25b71bf","sha256:5d9bdacbaf6eb8fefe9cf483bfdf8222329be154c81daeaeeff091bf4ccf17b9","sha256:133e31396a00acd59a12ac94b9d286e11d6045e6e73c24f0a8ed16826219c264"]
      - values: {"n":31,"cosa":"barcas de 6 plazas"}
        answers: ["sha256:934435d93f8f0c6cd2ab39db5e6773a69c24e63dfa3c817277e24c1942bd6190","sha256:9ba99620177513853b57f6de6f32ae3327c47b68a38371cc1366cbaaf92e5e3d","sha256:d7d2c224feca18ea73c99287ad7093c361fde689a5a2f4ec5939ee8b8a5da4e9"]
      - values: {"n":1000,"cosa":"autobuses de 48 plazas"}
        answers: ["sha256:3463721c89f44321e36681a44f262828ad8f2461d5b65c090bc1017b3bd0c5c5","sha256:2f26022d68d0e371470b91be143e951982b1a757882cdc0b5c5afd989c1626d8","sha256:e94c77029a4315406ed60ce4cb55751cbcf1a5b35a67d5889560ab31ef893722"]
  - id: numeros-de-k-cifras
    tier: 2
    type: numero
    sig: 8
    prompt: |
      ¿Cuántos números naturales tienen exactamente ${{k}}$ cifras? (El primero no puede ser $0$.)
    variants:
      - values: {"k":2}
        answers: ["sha256:50b9041f642d3696d7fba7b39447f90052ffb26709a9ad79bd2a20853bb0e4f5","sha256:c842dd2f365fe083483a20c87110f92895c87e5b4149784b50a2b662de049968","sha256:b139b4c3cd8efe0dc900a328d6eccd32d60fc11867995c8848e22faa7d13c08c"]
      - values: {"k":7}
        answers: ["sha256:a91a9c2445777acac01f929a860de84a1d51cc005776e5da717a551c6acb7dfc","sha256:907a2041ca910d4c89dcfc985c23136936e0c220da6ad0f7c3dd5f40fa2b871a","sha256:443ae75be05e92aaf0cd384fc9d282828393e07988ec144c21a96954b517d4f1"]
      - values: {"k":4}
        answers: ["sha256:593d97141dcc324e860de51dd96ee41c1f9128967ffac7039b01b6eba6e3ec31","sha256:5152bc90609f97c475f01f018e53160cab1f748c96b90f8c613f64c2db8d2bce","sha256:aa26ae577a8099d4a6779c4d64ff9013988a8bd45a21ab3835432b6161dc0e34"]
      - values: {"k":5}
        answers: ["sha256:588ff5b5eeb48e53b3e0976801ba1a91cc30c4df3fd1d8aed96f31ba5890db62","sha256:cc9831a199374c4bf408a68bb4edb0dbb64483867822720183e24127292cddb5","sha256:676162e7780add029c0b3350137ac6936a30baf86b1721f47ed058ef767c2cc1"]
      - values: {"k":6}
        answers: ["sha256:a11f0b287a1514c41be35cef6d2c601580644d15340b817ffc4afdf0d0ab0761","sha256:f3e86d1e04ef33078049e612352ff33ebac3ac4ecd3c405ef66991d781014994","sha256:cdb16616d48e6369798311d2ccb93bd8a026bf71f5a28c32b68f6be9b0b21528"]
  - id: producto-maximo
    tier: 3
    type: numero
    sig: 8
    prompt: |
      Con las cifras ${{a}}$, ${{b}}$ y ${{c}}$, usando cada una una sola vez, se forma un número de dos cifras y otro de una cifra, y
      se multiplican. ¿Cuál es el **mayor** producto posible? (Prueba todas las colocaciones de forma ordenada.)
    variants:
      - values: {"a":1,"b":2,"c":3}
        answers: ["sha256:ea56e456e526dff1d222cb697e194a860611cbca2d31ff50bbbe5d4477b5fa98","sha256:06326408177a9a7716c50336b04a5006c06b7dd7b781216b913a9ddc73b8ad95","sha256:2d1334892df9c57b51d35320270e9fb29d07f9e5ea8fc238cfc66bfd52712bb7"]
      - values: {"a":7,"b":8,"c":9}
        answers: ["sha256:5c55a3d45ea7030975ef4951ca191f5d4fe4c6dbbe4dd7c97d1f75d760b13f79","sha256:cf00f8ef41bf6b3547068d15bb68d555ed97425e178880b930f74474df6480b3","sha256:8cbc46304f77b07d652cdf18589ec598750ec0c2ae0b01e2c11d265f4d883f31"]
      - values: {"a":2,"b":5,"c":9}
        answers: ["sha256:d550b467c71725355361e9b71faceac0df0571c41e910419f5cd334dfe580b2c","sha256:3ae360be504a8867328154c78c82d7b4d91d751fcd39479fc4ce054528c6554c","sha256:a0a220363c766e54e948275778966fbddba476a3e50eac18d83dccb961f32929"]
      - values: {"a":3,"b":4,"c":8}
        answers: ["sha256:42c0c138d1fc06668915acafe28674eed0d5d4bc39b848b4064796ed1f1b9a96","sha256:f21d5fc17d2b6153e14d81f33d524df54a3dced32e87140c23b1a1f7868f9a45","sha256:364a9eaa8bb1ea942e3e9607484e24fa462803f8687ee75c1142658349c8bc62"]
      - values: {"a":1,"b":6,"c":7}
        answers: ["sha256:c28d429d4db66c89182c02b73333da6c18d8cdf79b43a2ea5e4a849769dcbf45","sha256:7fb29402525215596a7f8222e36cee6bf5227f316d8e298e634f88f5841c91bb","sha256:782de310fbc0f15e2d5e1b7f6547d2d9659adbc65ada761e70c696660266cd46"]
      - values: {"a":2,"b":3,"c":5}
        answers: ["sha256:070c77f3fa9d268ccb813c75cc710e8afcc09698873f39246af0a86ed144a08c","sha256:7408daf4c2c445f39f809bf3486fefd6867347eda534cac3e1e90136a993e3a7","sha256:ab272176c6c10acefe64819e4205143f95ac01f535bf927c88800900e8192439"]
  - id: por-que-funciona-multiplicar
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Al multiplicar $34 \cdot 26$ «en columna» se calcula $34 \cdot 6 = 204$, luego $34 \cdot 2 = 68$ escrito una posición a
      la izquierda, y se suma: $204 + 680 = 884$. Explica **por qué** funciona este procedimiento usando el valor de posición y la
      propiedad distributiva, y por qué el $68$ se escribe desplazado.
    sealed: "gz64:H4sIAAAAAAACCn1SsWocMRD9lcei4o4sy93lOI4FFyFxlyKQMptiThobgaRZSyuT2PiLUgWX6ewfC9I6sc+OU0kzmnlv5uldN0lcnqyEpm8+SQQ7XJKTCMMYJVlt729DC7XZ4QSbFd6gXoZBG5nWNVYdSqcjjFFGy4YMjE1TtIc82Utqh6DUEN5uMXehYj2Gixl2eZSsucdwh25GOXVIfJ6DEaTsqZycoJ5Wljm3qsOpwxit5/i8ZLM6pvpzWZf8bv8sXKkePrvJjs5qihglQq1XCobT6OiKhqDJELQ9i4Qc6FE3UFHFXl1ky9EQFrUwB1skGikRCIljbTKsOdCyxffKwEnKX6jdXiExOOloDwwtMVojyAEun1PEQpB4CI5B9z/JcHlRK7Xs8HmWpy0YRczNaosT7Pdb1Q2hCknuXKKdvIADtLjsA4FTWweYKEzSvv6roKrH38UfzhZaQpn8jzrecpgEF5nhKWoCuyG8tFiHxUdKuPvhHF+SoXT3q7xXgjGKyXoSjBS1JYc0U3ibvOCMw/2t5yD9/C2zvJxwJtFTgFqrB3G7ZdM2MR+i1U3/5brR0U4crTR984GTFj9K4GJ1BS1eoGZjKixezrvsmrYZc5gkNf36pj1Ce1eleV27vrhxdtmR+efUg/XnYKeeEm2eEZ1+m5le6l0X+Jdt/wf3XvwYMx8qYOSU3URGoKppjvb9evMbh6eHTjoEAAA="
  - id: r-posicional
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa que el sistema decimal sea **posicional**?
    options:
      - |
        Que cada cifra vale siempre lo mismo
      - |
        Que el valor de una cifra depende del lugar que ocupa
      - |
        Que solo se usan diez números
      - |
        Que se escribe de derecha a izquierda
    answers: ["sha256:7fe267be5547c62a49d0eeda20831ee3f638dccda696454bceed8e9be4bf62d7"]
  - id: r-resto-menor
    tier: 1
    type: opcion
    review: true
    prompt: |
      En una división entera, ¿cómo es el resto?
    options:
      - |
        Siempre igual al divisor
      - |
        Puede ser cualquier número
      - |
        Siempre menor que el divisor
      - |
        Siempre menor que el cociente
    answers: ["sha256:a0ba8bf8f4df6dc97406598cdc0d016f25a6003ac52aaff06c82b924c95d64c5"]
  - id: r-jerarquia
    tier: 1
    type: numero
    review: true
    sig: 8
    prompt: |
      Calcula $2 + 4 \cdot 6$.
    answers: ["sha256:82cc69f2f2f23dbac9e7b73b066ccd4e616dbb8ee46c780d30b91ca91bd4c5d9","sha256:3773f6f4a4cfe63bdf101b0cc241e2d0828f7b77cff14d8dbb57e3f955e84321","sha256:32c8a9db7143c553992fdf7111b5c65c8b6d405a1e4bf2e5c9bb64e849b76414"]
  - id: r-mismo-nivel
    tier: 2
    type: numero
    review: true
    sig: 8
    prompt: |
      Calcula $30 : 6 \cdot 3$ (multiplicaciones y divisiones del mismo nivel, de izquierda a derecha).
    answers: ["sha256:21f0df3ab57cae3fae556b97c37ff29036a4ad5f0e3ddb6debd5ac6feeecd054","sha256:e1f8a30546cabe05d9802d8fb747858f9015663a04b925b1081d1dd668391b5a","sha256:c7e2b58c89f2465f5d3a9a4e26f2aad01702dab6e4fb9f0a888a3527fb2ac0de"]
  - id: r-dividendo
    tier: 2
    type: numero
    review: true
    sig: 8
    prompt: |
      En una división, el divisor es $12$, el cociente $13$ y el resto $7$. ¿Cuál es el dividendo?
    answers: ["sha256:894b7ff1432c9239982b54457ecf4555207cf0bf857729d6e39fe730a366c786","sha256:dfdbb52119be78b59b4d32d39462b8174aabc023f42f293ea9fb1530599d42b5","sha256:605e83239546033f4d2bd39cee6ece3d541062ad64af7f0129f2f3fcec96a1b9"]
  - id: r-binario-8
    tier: 1
    review: true
    prompt: |
      Escribe $8$ en binario.
    answers: ["sha256:40510175845988f13f6162ed8526f0b09f73384467fa855e1e79b44a56562a58"]
  - id: r-romano-xl
    tier: 1
    type: numero
    review: true
    sig: 8
    prompt: |
      ¿Qué número es el romano **XL**?
    answers: ["sha256:c6270071edb154a2073241849a4398dd996d8d6af4e71f0d102e897befcf3ec8","sha256:627dd167e0d8c3d5d3d5ff7228e860f12f9f41167455aad2741b94b31ff38957","sha256:11ac8ab774fa8fdb209154fba69ceb695b3c055877ac110fea1bd567c99b5e97"]
---

# Números naturales: el sistema decimal, otros sistemas de numeración y las operaciones

Los números naturales ($0, 1, 2, 3, \dots$) sirven para **contar** y para **ordenar**. Parecen lo más sencillo de las matemáticas,
pero la forma en que los escribimos (el sistema decimal posicional, con el cero) tardó miles de años en inventarse y es la razón
de que podamos hacer cuentas con lápiz y papel. Este nodo explica cómo funciona ese sistema, cómo son otros (romano, binario,
base doce) y qué propiedades tienen las operaciones, que son las reglas que usarás en todo el álgebra.

## Objetivos

Al terminar sabrás:

1. Leer, escribir y descomponer números grandes según el valor de posición de cada cifra.
2. Convertir entre el sistema decimal, los números romanos y el sistema binario.
3. Redondear y estimar con números naturales.
4. Usar las propiedades de la suma y el producto (conmutativa, asociativa, distributiva) para calcular mejor.
5. Hacer divisiones enteras, entender la relación $D = d \cdot c + r$ y obtener el resto con calculadora.
6. Aplicar la jerarquía de las operaciones y usar bien los paréntesis.

## Qué debes dominar antes

[[mat-resolucion-problemas]] (las cuatro fases) y las tablas de multiplicar.

> [!question] Test de entrada
> 1. ¿Cuántas decenas hay en $70$?
> 2. ¿Cuánto es $8 \cdot 7$?
> 3. Si repartes $17$ caramelos entre $5$ niños a partes iguales, ¿cuántos sobran?
>
> Respuestas: $7$; $56$; $2$ (a cada uno le tocan $3$).

## 1. Para qué sirve

- **En la vida diaria**: leer precios, kilómetros, poblaciones y presupuestos; saber si un número «es grande»; repartir y
  calcular cuánto sobra.
- **En informática**: los ordenadores guardan todo en **binario** (ceros y unos); la base $16$ aparece en los colores de las
  páginas web y en las direcciones de memoria ([[prog-pensamiento-computacional]]).
- **En el resto de las matemáticas**: las propiedades de las operaciones (sobre todo la distributiva) son exactamente las
  reglas del álgebra.

## 2. El sistema decimal posicional

> [!practico]
> Un cuentakilómetros tiene ruedas con las cifras del $0$ al $9$. Cuando la de la derecha pasa de $9$ a $0$, la siguiente
> avanza una: diez unidades hacen una decena, diez decenas una centena… Por eso un mismo $5$ vale cinco unidades, cinco
> decenas o cinco centenas según la rueda en la que esté: el **valor de una cifra depende de su posición**.

En el sistema decimal se usan diez cifras, $0, 1, \dots, 9$, y **cada posición vale diez veces la de su derecha**. Así
$$
3\,507 = 3 \cdot 1\,000 + 5 \cdot 100 + 0 \cdot 10 + 7 .
$$
Las posiciones, de derecha a izquierda, son unidades, decenas, centenas, unidades de millar, decenas de millar, centenas de
millar, unidades de millón… En español, los números grandes se agrupan de tres en tres con un espacio fino: $4\,652\,031$
(cuatro millones seiscientos cincuenta y dos mil treinta y uno).

**Ejemplo resuelto 1.** En $4\,652\,031$, el $5$ está en las decenas de millar y **vale** $5 \cdot 10\,000 = 50\,000$; el $0$ de las
centenas vale $0$, pero es imprescindible: sin él, el número sería $465\,231$. El **cero** como cifra que marca «aquí no hay
nada» fue el gran invento de la numeración posicional (llegó a Europa desde la India a través de los matemáticos árabes).

**Contar unidades completas.** Un número contiene tantas centenas completas como indica el número formado por sus cifras
desde las centenas hacia la izquierda: $4\,652\,031$ contiene $46\,520$ centenas completas (y le sobran $31$ unidades).

> [!formal] Con rigor: cada natural se escribe de una sola forma
> Todo número natural $N$ se puede escribir de forma **única** como $N = c_k10^k + \dots + c_110 + c_0$ con cifras $0 \le c_i \le 9$ y
> $c_k \ne 0$. Las cifras se obtienen dividiendo sucesivamente entre $10$: $c_0$ es el resto de $N : 10$, $c_1$ el resto de dividir el
> cociente otra vez entre $10$, y así hasta que el cociente es $0$. Que sean únicas se debe a que el resto de una división es
> único (sección 5). Lo mismo vale con cualquier base $b \ge 2$ en lugar de $10$.

## 3. Redondear y estimar

> [!practico]
> Nadie dice que un piso cuesta «$187\,342$ euros» cuando habla rápido: dice «unos $190\,000$». Redondear es sustituir un número
> por el más cercano de una lista cómoda (las decenas, las centenas, los millares) para poder pensar y calcular de cabeza.

Para **redondear a las centenas** se mira la cifra de las decenas: si es $5$ o más, se sube a la centena siguiente; si es menor,
se deja la centena actual y se pone ceros. $4\,876 \to 4\,900$; $4\,836 \to 4\,800$; $4\,850 \to 4\,900$ (el caso justo en medio, por
convenio, hacia arriba). Redondeando los datos se **estima** el resultado de una operación antes de hacerla: $398 \cdot 21$ es más
o menos $400 \cdot 20 = 8\,000$, y si la calculadora da $83\,580$ sabes que te has equivocado (lo correcto es $8\,358$).

## 4. Otros sistemas de numeración

> [!practico]
> No siempre se ha contado de diez en diez: los romanos usaban letras que se suman, los babilonios contaban de sesenta en
> sesenta (de ahí los $60$ minutos de una hora) y los ordenadores cuentan de dos en dos, con solo ceros y unos. Ver cómo
> funcionan otros sistemas ayuda a entender el nuestro.

**Números romanos.** Usan letras con valor fijo: $\mathrm I = 1$, $\mathrm V = 5$, $\mathrm X = 10$, $\mathrm L = 50$, $\mathrm C = 100$,
$\mathrm D = 500$, $\mathrm M = 1\,000$. Los valores se **suman** ($\mathrm{MDL} = 1\,000 + 500 + 50 = 1\,550$), salvo cuando una letra menor va
delante de una mayor, que se **resta** (solo en los pares $\mathrm{IV} = 4$, $\mathrm{IX} = 9$, $\mathrm{XL} = 40$, $\mathrm{XC} = 90$,
$\mathrm{CD} = 400$, $\mathrm{CM} = 900$). Una letra no se repite más de tres veces seguidas. *Ejemplo:*
$1\,994 = 1\,000 + 900 + 90 + 4 = \mathrm{M\,CM\,XC\,IV}$. No es un sistema posicional: en $\mathrm{MDL}$ y en $\mathrm{MDLV}$ la $\mathrm L$ vale lo mismo, y
no tiene cero; por eso es muy incómodo para operar.

**Sistema binario (base $2$).** Solo dos cifras, $0$ y $1$, y cada posición vale el **doble** que la de su derecha: $1, 2, 4, 8, 16,
\dots$ Así $1101_2 = 8 + 4 + 0 + 1 = 13$. Para pasar de decimal a binario se divide entre $2$ repetidamente y se leen los restos al
revés: $13 : 2 = 6$ resto $1$; $6 : 2 = 3$ resto $0$; $3 : 2 = 1$ resto $1$; $1 : 2 = 0$ resto $1$; se lee $1101$.

**Base doce y base sesenta.** Las docenas y las gruesas ($12 \cdot 12 = 144$) son restos de contar de doce en doce; el tiempo y
los ángulos ($60$ segundos, $60$ minutos) vienen del sistema sexagesimal babilonio.

## 5. Las operaciones y sus propiedades

> [!practico]
> Sumar es juntar; restar, quitar o comparar; multiplicar, sumar muchas veces lo mismo ($6 \cdot 5 = 6 + 6 + 6 + 6 + 6$); dividir,
> repartir en partes iguales. Las propiedades son atajos: te permiten cambiar el orden o agrupar de otra forma para que la
> cuenta sea más fácil, sin que cambie el resultado.

**Suma y producto.** Para cualesquiera naturales $a, b, c$:

| propiedad | suma | producto |
| --- | --- | --- |
| conmutativa (el orden no importa) | $a + b = b + a$ | $a \cdot b = b \cdot a$ |
| asociativa (agrupar no importa) | $(a + b) + c = a + (b + c)$ | $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ |
| elemento neutro | $a + 0 = a$ | $a \cdot 1 = a$ |
| | | $a \cdot 0 = 0$ |

**Propiedad distributiva** (une las dos operaciones):
$$
a \cdot (b + c) = a \cdot b + a \cdot c, \qquad a \cdot (b - c) = a \cdot b - a \cdot c .
$$
Leída de derecha a izquierda es **sacar factor común**.

**Ejemplo resuelto 2 (cálculo mental).** $15 \cdot 23 = 15 \cdot (20 + 3) = 300 + 45 = 345$. $870 \cdot 4 - 870 \cdot 3 = 870 \cdot (4 - 3) = 870$.
$25 \cdot 36 = 25 \cdot 4 \cdot 9 = 100 \cdot 9 = 900$ (asociativa y conmutativa).

**La resta y la división no son conmutativas ni asociativas**: $10 - 3 \neq 3 - 10$ y $(20 - 8) - 2 = 10$ mientras que
$20 - (8 - 2) = 14$. Por eso con ellas el orden importa (sección 7).

> [!formal] Con rigor: por qué funciona sumar en columna
> Al sumar $3\,507 + 2\,846$ en columna se suman unidades con unidades, decenas con decenas, etc. Es correcto por la asociativa,
> la conmutativa y la distributiva: $3\,507 + 2\,846 = (3 + 2)\cdot1\,000 + (5 + 8)\cdot100 + (0 + 4)\cdot10 + (7 + 6)$. Cuando una columna
> pasa de $9$ (como $7 + 6 = 13 = 1\cdot10 + 3$), las diez unidades sobrantes forman una unidad de la posición siguiente: es la
> **llevada**. El resultado es $6\,353$. Multiplicar en columna es la distributiva aplicada a cada cifra (ver el ejercicio de
> desarrollo).

## 6. La división entera

> [!practico]
> En el comedor hay mesas de $6$ y llegan $33$ alumnos: se llenan $5$ mesas y sobran $3$ alumnos, que necesitan otra mesa. Dividir
> es eso: cuántos grupos completos salen (el **cociente**) y cuánto sobra (el **resto**). Lo que sobra siempre es menos que un
> grupo completo; si no, se podría formar otro grupo.

Al dividir el **dividendo** $D$ entre el **divisor** $d \ge 1$ se obtienen un **cociente** $c$ y un **resto** $r$ que cumplen
$$
D = d \cdot c + r, \qquad 0 \le r < d .
$$
*Ejemplo:* $33 = 6 \cdot 5 + 3$; $3\,658 = 65 \cdot 56 + 18$. La división es **exacta** si $r = 0$; entonces $d$ es divisor de $D$
(lo estudiarás en [[mat-divisibilidad]]).

**El resto con calculadora.** La calculadora da $325 : 15 = 21{,}666\ldots$. La parte entera, $21$, es el cociente, y el resto es
$325 - 15 \cdot 21 = 10$. Comprobación: $15 \cdot 21 + 10 = 325$ ✓ y $10 < 15$ ✓.

**Cuántos grupos hacen falta.** Si sobra algo, hace falta un grupo más: para $33$ alumnos en mesas de $6$ hacen falta $6$ mesas
(«división por exceso»).

> [!formal] Con rigor: el cociente y el resto existen y son únicos
> *Existencia:* entre los números $D, D - d, D - 2d, \dots$ que no son negativos, el menor es $r = D - d\cdot c$; si fuese $r \ge d$, el
> número $r - d$ también sería no negativo y más pequeño, lo que es imposible. *Unicidad:* si $D = dc + r = dc' + r'$ con
> $0 \le r, r' < d$, entonces $d(c - c') = r' - r$, que está estrictamente entre $-d$ y $d$; el único múltiplo de $d$ en ese hueco es
> el $0$, así que $c = c'$ y $r = r'$. $\blacksquare$

## 7. La jerarquía de las operaciones

> [!practico]
> «$3$ más $4$ por $2$» ¿es $14$ o es $11$? Si cada uno lo calculara a su manera, una misma expresión daría resultados distintos.
> Por eso hay un convenio, como en las normas de tráfico: primero paréntesis, después multiplicaciones y divisiones, al final
> sumas y restas. Y, entre operaciones del mismo nivel, de izquierda a derecha, como se lee.

1. Primero lo que está **entre paréntesis** (de los más interiores hacia fuera).
2. Después **multiplicaciones y divisiones**, de izquierda a derecha.
3. Por último **sumas y restas**, de izquierda a derecha.

**Ejemplo resuelto 3.** $3 \cdot 4 + 2 = 12 + 2 = 14$; $(15 + 10) \cdot 3 = 25 \cdot 3 = 75$ pero $15 + 10 \cdot 3 = 15 + 30 = 45$;
$8 : 2 \cdot 3 = 4 \cdot 3 = 12$ (no $8 : 6$, porque van de izquierda a derecha). Las calculadoras científicas respetan la jerarquía:
si quieres otro orden, tienes que poner los paréntesis.

**Ejemplo resuelto 4 (con varios niveles).** $50 - 2 \cdot (3 + 4 \cdot 2) = 50 - 2 \cdot (3 + 8) = 50 - 2 \cdot 11 = 50 - 22 = 28$.

## 8. Errores típicos

- Confundir la **cifra** con su **valor**: en $508$, la cifra $5$ vale $500$.
- Olvidar los ceros intermedios al escribir un número dictado ($30\,050$ se escribe con tres ceros).
- En romanos, restar con pares no permitidos ($\mathrm{IC}$ para $99$ es incorrecto: se escribe $\mathrm{XCIX}$).
- Dar un resto mayor o igual que el divisor.
- Usar el cociente con decimales de la calculadora como si fuese el resto.
- Hacer las operaciones en el orden en que aparecen, ignorando la jerarquía, o hacer $8 : 2 \cdot 3$ como $8 : 6$.
- Contar mal los grupos necesarios: si sobra algo, hace falta uno más.

## 9. Resumen

- Sistema decimal posicional: cada posición vale diez veces la de su derecha; el cero marca posiciones vacías.
- Romanos (suma de letras con seis pares que restan), binario (posiciones $1, 2, 4, 8, \dots$), bases $12$ y $60$.
- Redondear mirando la cifra siguiente; estimar con datos redondeados.
- Conmutativa, asociativa, neutros y distributiva (sacar factor común); la resta y la división no son conmutativas.
- División entera: $D = dc + r$ con $0 \le r < d$; resto con calculadora: $D - d \cdot c$.
- Jerarquía: paréntesis, después $\cdot$ y $:$, después $+$ y $-$; mismo nivel, de izquierda a derecha.

## Repaso: lo que debe quedarte dentro de un mes

1. El valor de una cifra es la cifra por la potencia de $10$ de su posición.
2. Cómo se pasa de decimal a binario (restos de dividir entre $2$) y de romanos a decimal.
3. La propiedad distributiva y para qué sirve en cálculo mental.
4. $D = d \cdot c + r$ con el resto menor que el divisor.
5. El orden de la jerarquía de las operaciones.

## Siguiente

[[mat-divisibilidad]] (múltiplos, divisores, primos, mcd y mcm) y el nodo de potencias raices (multiplicar un número por sí mismo
muchas veces).
