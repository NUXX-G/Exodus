---
id: fis-medida-movimiento
title: "Medida y movimiento: unidades, error y cinemática"
area: fisica
trunk_level: 5
prerequisites: [mat-algebra-basica, mat-funciones-basicas, mat-trigonometria, mat-numeros-reales, fis-magnitudes-medida, fis-cinematica-rectilinea]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018, caps. 1 (medida), 2 (movimiento rectilíneo), 3 (vectores) y 4 (movimiento en dos y tres dimensiones)."
  - "Ling, S. J.; Sanny, J.; Moebs, W. Física universitaria, volumen 1 (en español). OpenStax, 2021, caps. 1 (unidades y medidas), 2 (vectores), 3 (movimiento rectilíneo) y 4 (movimiento en dos y tres dimensiones). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/1-introduccion"
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I. Addison-Wesley, 1963 (edición en línea: feynmanlectures.caltech.edu)."
  - "Taylor, J. R. An Introduction to Error Analysis: The Study of Uncertainties in Physical Measurements, 2ª ed. University Science Books, 1997."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019 (bipm.org/measurement-units)."
  - "Unión Astronómica Internacional. Resolución B2 de 2012: redefinición de la unidad astronómica (149 597 870 700 m exactos)."
hints:
  - "Concepto: en todo problema de movimiento, define un sistema de referencia con sentido positivo, anota los datos con sus unidades en el SI y escribe qué magnitud te piden. Elige la ecuación que contiene lo que sabes y lo que buscas, y comprueba que las unidades del resultado son las esperadas. En el tiro parabólico, trata los dos ejes por separado: el horizontal sin aceleración y el vertical con la gravedad."
  - "Herramienta: conversiones con factores de conversión encadenados (km/h a m/s: multiplicar por 1000 y dividir por 3600); comprueba cada resultado con una simulación numérica sencilla en Python (un bucle con paso de tiempo pequeño que actualice posición y velocidad) y compáralo con la fórmula."
  - "Documentación oficial: bipm.org/measurement-units (definición de las unidades del SI y valores exactos de constantes); Halliday-Resnick-Walker, capítulos de medida, movimiento en línea recta y en dos y tres dimensiones; Feynman, vol. I, capítulos sobre el movimiento."
exercises:
  - id: kmh-a-ms
    tier: 1
    type: numero
    sig: 6
    unit: "m/s"
    prompt: |
      Expresa ${{k}}$ km/h en m/s. Respuesta: un número (puedes escribir la unidad).
    variants:
      - values: {"k":72}
        answers: ["sha256:12e4942df75f186a864f30c41c5f97ac76e84dbbdd75c9dd490e13ffce3953bd","sha256:ff91743f1e1bd495a0f4dfd5c8d49ab27f02adf7047c4a70083485aff5f72a7f","sha256:04bc0e268434161f319656b3d78f0dd4c8ab3d858c521f5e9ae4a840f0aeb99a"]
      - values: {"k":36}
        answers: ["sha256:a735036646797ea1d81ea3f1e491b446dae569f1d3afc472a77cedaf6fdd2cf5","sha256:42e55394b995ea36bf1d4ea9e64fc4df3703d2f34f804998becfbe77c3812450","sha256:cf14755f3f5952785dc47617a667564994a70361b0d59eecab4e43cb53f672dc"]
      - values: {"k":90}
        answers: ["sha256:2429fdd51a3227b633b19b22f3b69e0c157c44d854e680ea5b96d940858528f9","sha256:ab6ec8d13aa56a365c11e213cc984cf5a3f0aadd2811d1ae9c7b5529a4e3ff9b","sha256:d277477648c9adaf797d719d0653284008d371087e135b7655aedee3ab6b5c1a"]
      - values: {"k":54}
        answers: ["sha256:afcd340293c3d132f819ab4a590a06702163669d06b175989c6f12fb59ea2053","sha256:dff116882c6acd12e4b68018fc60fd68e30884ad51b3382b191eefdfa0ad2a02","sha256:0068ddac6582fb787ef63f65f74e7e08c2b833e23b48e3cb766c74b8fdd9addd"]
      - values: {"k":108}
        answers: ["sha256:0d48d0bfe7a268e4c4c0a6948f8fbd9189a7c37d1c7d0eb467fb9d3688636286","sha256:fc24573de4b918d6f69fa545d0004f33d562d64be3d1c071afd5be2da2056e64","sha256:f8f77ed2bbc326d17c7eed3fa3a263da6a43bb98597a05cc1ef97580c7856c7e"]
      - values: {"k":126}
        answers: ["sha256:8306f28bd5b2898b8ff9cc06c8ef0328427777f78531841d0eb2d6d9d4c12e96","sha256:200705855f460234a153cf1701147529e1d44ebd5620c8feb596ae55eafac525","sha256:35ac1b0374a230a65e273f7b6ffe3704fbb998eefce5fb6c17e8b923e122ef28"]
      - values: {"k":18}
        answers: ["sha256:099ab32173f1737ab311a52443bf66d3e6b2c737e9c3ce7779e17397255420cf","sha256:70401ba2776c523a9d3855475859fd64ae8b9805374c14966aa106931f5b935e","sha256:4a0e7f628a253456ad28d96ad5b8bf9dd368c7b78984743decbeae8f05a91653"]
      - values: {"k":144}
        answers: ["sha256:9633fe07f5c31c27b884f7448770b7eecc77033eb93b0ead7ee0c5a4e861b210","sha256:6fa65f43e4238bd22256910bee3937be36353da3c917baec1a6f7e965ca6f842","sha256:a8ad2fff05376e8570974f423a7ccb55427f75f7ffa87a8a9b0cd85f39d966b2"]
  - id: densidad-unidades
    tier: 1
    type: numero
    sig: 6
    unit: "kg/m^3"
    prompt: |
      Una sustancia tiene una densidad de ${{r}}$ g/cm$^3$. Exprésala en kg/m$^3$. Respuesta: un número.
    variants:
      - values: {"r":"5"}
        answers: ["sha256:9ea35ff4012a888cb57922ec2d0b36fb46b0c90b2dc710f87fbd485e75547fce","sha256:e83de207cdf25173aa5026f36ae5f84b091f353f32a49c9f729a5c6a2afef014","sha256:b43a289bb7e82f132d2d005fc6e7650ecbd0179c603e845dba79aeb0ece91a71"]
      - values: {"r":"2{,}7"}
        answers: ["sha256:8a3a088d48f3e78b7bbabf12db28bd7a5aeffc879dc51c16b98cf1a16dd52bf2","sha256:5dbfe12506ebdd85e44abf8579e6eba8314c4e7b4ab93b323ab2e4b495e1565f","sha256:f5ec0887ab1340d72c0ad4a1b9a1113fe89196acf0fb89a1c473906304f3c22e"]
      - values: {"r":"7{,}9"}
        answers: ["sha256:d0132d412d7eabdd93ea38126fdc879a4f5ec3957d8b0131a82bbc1f82658b6c","sha256:f1be1693e420396491e0ffd5f6216d4d5e051a6fefc27ee3f0c8c2e96eb13174","sha256:e7c11d02f76f34bd7698ecb21010f22de91f43aca1857dbf790a3d02e91062a5"]
      - values: {"r":"0{,}8"}
        answers: ["sha256:06ef89963f4cb107fc98214585ea25ffe02a900c9cc3e69a0ed6c4dac6291f63","sha256:fcad9fedd32264da702aa1ca689821c137c75ee5ec5d3e32bfd301cd744af97e","sha256:ca5c6b6a77bc80d62512017a5b7189c586e86e79636c5387c76872714cb6190f"]
      - values: {"r":"11{,}3"}
        answers: ["sha256:a2544fe831898bbc752d4ae70d9d162f83c64233a5402577ea950f0adf273604","sha256:275bf09845f0c73c9f1080e5b21d3ebcd0fb4addc85769a7f7b86058857869fd","sha256:6bc1029b9117609a820dc7bc7fad641375b29c67b82b42b7935b08130a95099f"]
      - values: {"r":"19{,}3"}
        answers: ["sha256:a87ab124c4e90d95aaac7c54c4b5e150f2857d6d3696649962009f9ed52706c2","sha256:d15390821c5478965c7f38be76f3725cca98b37aed096dfd93c513fd0a09236d","sha256:6711e2e517f3b71f7e01a34eb96710aaa6d021f8af76498676dc958877bbd880"]
      - values: {"r":"1{,}2"}
        answers: ["sha256:32f70418a8612c7dda80311ae49a1da044bf304c20c3d5a4e2eaf6d20e283810","sha256:4d161119cbdbcc0a27bd9ab383ef240a7263285aadb471f5c8735cc64be94541","sha256:e1601a48d848441046e97997cf2db2db048d227cf2c1bbcfa76330a0afbd80cb"]
      - values: {"r":"8{,}9"}
        answers: ["sha256:9bae78844a034342362c697b67adc4924c7f7b8b0cb4c50741c38d279305b952","sha256:268ce7e416e7ff3617e4127821c7ef3de66c13ff49cb395d0c597abc57848a77","sha256:a7b3bcab42b4483c33c8cac979818fc0980a8b1f663a85fece485a55df21ccd1"]
  - id: aceleracion-media
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un coche pasa de ${{v0}}$ a ${{v}}$ m/s en ${{t}}$ s con aceleración constante. ¿Cuál es su aceleración, en m/s$^2$? (Si frena, sale
      negativa.)
    variants:
      - values: {"v0":0,"v":28,"t":8}
        answers: ["sha256:d2abcd3252636f312f83e53ca93c0c3a0de7985f3f4df86e29badae3aedf3a5e","sha256:bf424ad4d54a4bd36fd24e45e39def82f14f3c276c35dec3d80007cb367ad17e","sha256:45d8bc2d8271a1e44e71b820035dffc6f774430e404954b5f754e04280e37402"]
      - values: {"v0":5,"v":29,"t":4}
        answers: ["sha256:45a225d7295b567e8dbf18ee925b65736d010dfbc6263f025446e15ec51546c2","sha256:ee291473925d319f60725df1b043d3e2ae7af82d0d74411d089b9ed2b2526093","sha256:2ba647268acfaa8ccec341369c268fd3d99407f6f6dad9267770186927ac9588"]
      - values: {"v0":0,"v":30,"t":12}
        answers: ["sha256:e40830323f376c0b59db2b0e137aa8e80c966c0c2164d3f9832a4d65a6fc9965","sha256:abf2987117ad340d41164f064659f7f140d7ea828e06f321716a7b620a019d59","sha256:a7146d9b7736d58f9d03eeab127b747936e1da69e77fb59dfc14d86d5e4b67dd"]
      - values: {"v0":10,"v":4,"t":3}
        answers: ["sha256:ebea4d090836102e441bc73cb03a1c9cef8396df0a8da57bd71e78f063872de2","sha256:bc3afb6e1c736dceccbe913d846b72c137e1a160853751cdcf6b242f3bcbc2ff","sha256:565a60954d7b15f51ae236152ff886825ae5a60a295af975197c31e67c02bcb4"]
      - values: {"v0":12,"v":0,"t":4}
        answers: ["sha256:7393b16647306748ccdd7c80bc955a1dd0aada6ae8ec683cbbaf9469c8719d24","sha256:157a2e6ce5b228649b7a31eedeba0f3cbc664069e8a7967403c62b54cbd5cf7b","sha256:459aa7ef3d5a4e4c344406b156cf1650bba64838ceafa844ba3a15a6a758c1a1"]
      - values: {"v0":2,"v":20,"t":6}
        answers: ["sha256:f449ac9f568941f1da324291cebf943d89a6119f8f15233a3ba82e39ba4b9e06","sha256:2b8e2b3e0febb323ef1affe771c9f01f6194e722543beebb45a5bbbb8e0336d2","sha256:5effb198499f61c4de7eed486c56e5e578c6f42b26aa4d05637fd745f2b3bb01"]
  - id: persecucion
    tier: 2
    prompt: |
      Un coche A sale a las ${{sale}}$ a ${{vA}}$ km/h por una carretera recta. {{horas}} después sale un coche B por el mismo
      camino y en el mismo sentido, a ${{vB}}$ km/h. ¿A qué hora alcanza B a A? Respuesta en formato «H:MM» (por ejemplo «9:30»).
    variants:
      - values: {"vA":60,"vB":90,"sale":"8{:}00","d":"1","horas":"Una hora"}
        answers: ["sha256:17ea4724806c9a840104754d08730e3edd9fcd70f0f625fc6bc894f5ed433a42"]
      - values: {"vA":80,"vB":120,"sale":"9{:}00","d":"0{,}5","horas":"Media hora"}
        answers: ["sha256:b90e3a3de552ac608eeb9c69f44aded8e5cc55ca34fef8d05d37f85d25dd2080"]
      - values: {"vA":50,"vB":75,"sale":"7{:}00","d":"1","horas":"Una hora"}
        answers: ["sha256:90e1062f1578fa30baaf182388e88d3ec46bc202cfb800325c3fb225f0d7bc4d"]
      - values: {"vA":40,"vB":100,"sale":"10{:}00","d":"1{,}5","horas":"$1{,}5$ horas"}
        answers: ["sha256:d084e8de1dc34143e5e82872dd0a95e221f50c7dd0d952231a999a98eccd0e68"]
      - values: {"vA":70,"vB":105,"sale":"6{:}00","d":"2","horas":"$2$ horas"}
        answers: ["sha256:9616672e04ef79c5abe02054678ef0d0c766b2197e92364ffaaf64bb23c5ef12"]
      - values: {"vA":90,"vB":120,"sale":"15{:}00","d":"1","horas":"Una hora"}
        answers: ["sha256:dc00b9452ded3fc6ed3b5af940d0c995758e82c42c9d9ab0a18d918c2680bd17"]
  - id: distancia-de-frenada
    tier: 2
    type: numero
    sig: 6
    unit: "m"
    prompt: |
      Un coche circula a ${{v}}$ m/s y frena con aceleración constante de $-{{a}}$ m/s$^2$. ¿Qué distancia recorre hasta
      detenerse? Respuesta: un número en metros.
    variants:
      - values: {"v":25,"a":5}
        answers: ["sha256:4d8afde356ae993ccb096976e57cccfad8429c12fcf5e30502cb146e597c5e2a","sha256:2b9c76af65789ca1db0ed3deb185afcdf7be639519fbbedecf5c12a3653b4f4a","sha256:3716a53588a49b2fc5a5c496617247e22bab188adde13c33ab605b4aa0966c96"]
      - values: {"v":20,"a":4}
        answers: ["sha256:a63a9d6d276af5ec3d7014e0dff597120786b701051ab2e0d0d9b1b85cfa3346","sha256:d7af1c41f8e31392afff846a11ef5893bdef20ba272bc699ac27ef8465d14ccb","sha256:774039d3a523cc9d0ae7d7f3a5960a892023d786f8c6e9c0b6d08807e349db56"]
      - values: {"v":30,"a":6}
        answers: ["sha256:ca1375af4cac5606c4d1675a76bab655fa04a697409cf678dbf571dad741378d","sha256:5f0f20ebeed90485d1dbc9fc11ea361a7ef0dedc31a480ee5ad7a8957bf13c89","sha256:e658d42392e9317d1bf0dd48187a151cf12b85a481880cf438de3e05a72da071"]
      - values: {"v":15,"a":3}
        answers: ["sha256:ef26a28641f5265dbb27ae1e3c373b8e6ac57aa022daa98c5fc0a7810053b30c","sha256:024a635fecc68e440b59f3b48b44a76119d932a28c93642a7b4e5f0799475e41","sha256:49b8e864a984617cb322cf5de46cfef963fa68ad6b767bde3a34626df15fc3e9"]
      - values: {"v":24,"a":8}
        answers: ["sha256:7600d1b325b533c04b9b9d483b4077de2282ce3c487d9a95f840f13c52f57c5e","sha256:c59bd779cdd4a950cf6539771c675c53033653c16b1cb97183d9ff6d15f31129","sha256:0c8de837cd9e95ccfd467717dad24e3ab2b163a17673ba98e241ab4e3c5f47df"]
      - values: {"v":35,"a":7}
        answers: ["sha256:50c6bd814def5a60d8dc2f977e41f554f27a8cb745bd8c807105b53032a703da","sha256:312cfefe836bd69982c0b78fa6c6f4fd979bb003e01223fc710ee043df534be1","sha256:45b500020a7e39731049aff4851b17e17e51a39fa94ead8e5cae70489953ea60"]
      - values: {"v":12,"a":2}
        answers: ["sha256:8f7dc595d12c3562fa9d22e0d86465d3aa01d036fc11801230b2008ed1dfc5ca","sha256:346d18b632e4f1dc99594d18af6e830f1bf35f4c81862555b90424c7a7257bd0","sha256:271c507847dd0a531d9b69287f86d927923a541cd517a2715face68ceea2be65"]
  - id: caida-libre
    tier: 2
    type: numero
    sig: 6
    unit: "m/s"
    prompt: |
      Se suelta un objeto desde ${{h}}$ m de altura. Desprecia el rozamiento y usa $g = 10$ m/s$^2$. ¿Con qué velocidad llega
      al suelo? Respuesta: un número en m/s.
    variants:
      - values: {"h":80}
        answers: ["sha256:66967b8cf64f0ed1accff60273ebae87400d0d9c81ed10260e014db204c0fd30","sha256:44d2a09e1553cf005422ab346f06b559c5f193927bfdb94ff16e6a0fef7ecbc0","sha256:a808b8228324737abbadbd82c7d567f36de9708e3c5e29996610c8b6cee49473"]
      - values: {"h":5}
        answers: ["sha256:4436273a3fb8ab5ea18cd460ac0ef96f49fd1ef86a8fefd7b665f135e167d1f6","sha256:4c51d8f31f956701e9e7c21a5e34a7d7a9e1438f97c9191fbc3447eac489f14f","sha256:f37632f32a8cab2c9424009a740b124323df8e5e1b63aaf7daa6e4050d5eb4aa"]
      - values: {"h":320}
        answers: ["sha256:45a61b52d739a9839509372bbaf314a5e0d5a6e6e7bab9e076050a3f6a6d8d4c","sha256:2726f8543e4dcb9398e16a47484499e3c7f222ea8b68dc47ff57275bc33002a5","sha256:1c60e5a6919f6608d8abc013332f5d5bb2eb29b0b04bf054381bcfab69be756a"]
      - values: {"h":45}
        answers: ["sha256:b72bda94274920feda130d76f3ef2b312f299212cb9da6b802e67d1c6474eb1c","sha256:f582e47aa2dbf23bb537a48df554fca9150754901cf9d4f68d1b9cbbb71926e8","sha256:405dbd214166e9ec20e38cc5b589c27ab203a69f2c1eb8b69ed28e66ec1d14cf"]
      - values: {"h":125}
        answers: ["sha256:967710ad37037e6881d872719a871d0bb5c0768bb1752a01bb95dfd60efeaa06","sha256:b3f43e0e66756c7e8f64199311bbe54ab6c10097fc6da67c0613c6c38244baeb","sha256:4e1679d81edcf8d389127d41da0be18eb51324d5b8b3337b4c97474fdb94f567"]
      - values: {"h":180}
        answers: ["sha256:f1469ea2c86a8fff4362241a36a8ee6ace46abc277e2e793f1e09e1c3ba7edd1","sha256:56a0d0a817e479e13f4ceafe0f388221151df0871dfd6c3ce40864342d36a785","sha256:bedd82f2f4061daa9cbf93fa74e579525539565ac8b439b4653029759c5826c4"]
      - values: {"h":245}
        answers: ["sha256:4a185e4bf4f8dddf86c7418a50478008f49c2f9f91f9301fefc5a9ac032edecf","sha256:08f591c7c7e14bc014e1a27adb2168f0153c6aa43ce515b27d821218e5cdf593","sha256:a662eac1b386e5d52b1a49f4705e1f9f1a5da25375fc7849403eecf3b55e9193"]
  - id: lanzamiento-vertical
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Se lanza una piedra hacia arriba a ${{v0}}$ m/s. Con $g = {{g}}$ m/s$^2$ y sin resistencia del aire, ¿qué altura máxima alcanza,
      en metros? (Cuatro cifras significativas si no es exacta.)
    variants:
      - values: {"v0":35,"g":"10"}
        answers: ["sha256:973b155b7a57a2d86f173171a1f143ef5470c672ca867d2c783078b66596ecb8","sha256:106bfe9db12b8e7e08b22b3e68d443d76cc7ddbb015e24fdf5251d4db11fb097","sha256:c4d8622cd884b02f9eca1fb09b38c789152a1b049e1d80a079a48ce19be905e6"]
      - values: {"v0":24,"g":"10"}
        answers: ["sha256:a3175a0800e35f8d87a2cbf7f991417f1b6b49eaf4640fb99ea2edf5165bcf74","sha256:c233f95fe18d6635ae696dbb17c8a15e55164826a3fc1255f791d4c49f4f64e9","sha256:9dd780ff7bbe0fdff94a3002129bc69bf44695fbcf9b4305afd61d8f0250e0b4"]
      - values: {"v0":15,"g":"9{,}8"}
        answers: ["sha256:45c2ea378de2f3de42ae05fb8b90123d4edf466056f2354c7990488fa5d369da","sha256:2c283821764b12ee271437cf5b17a156eeacd694023cd20f337a9ced1da82d20","sha256:d7ab8507cfa0d2c946085cca9585b1ed72fe6e6e67d34c16c7dc53606b1a65c2"]
      - values: {"v0":25,"g":"10"}
        answers: ["sha256:4c09878305e77f5e77ace0f7396ab78d0be80b00cf03084ad889dee642e2efb6","sha256:47b82d70756c5dd51783211d34cdfad19df7f88d2bd33960e9e8db4998ad93bd","sha256:11ac13a19d206329db5d6377af88e1e7edefd08332d2be71bf6d8d9fb969e347"]
      - values: {"v0":12,"g":"9{,}8"}
        answers: ["sha256:88b45f55a51745043338f6bcd071ce091644e33b87efb5a85ed2b1e1d133bdd6","sha256:72c053d93f61fa77c37b0b392ce348d22bf18c8b0072a1a8759972a999f26465","sha256:4fd9fdce70001dc2d76c21eff4e76b96db81a77934a860e4fafd6724aa17ee26"]
      - values: {"v0":40,"g":"10"}
        answers: ["sha256:de9ccd37bfc90a4932f8641d63d461e869ffec3299879649ec19c671c9d14f65","sha256:901359423111f8ced3682a748f44bd83e0ef10203c44895529ee61177efa4c34","sha256:b6fc7a2e88b5e7e63bd6b388453173d4f4f4a67354d8552b39a49bc1efbd4da3"]
  - id: area-grafica-vt
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un tren acelera uniformemente de $0$ a ${{v}}$ m/s en ${{t1}}$ s, mantiene ${{v}}$ m/s durante ${{t2}}$ s y frena uniformemente hasta
      detenerse en ${{t3}}$ s. ¿Qué distancia recorre en total, en metros? (Pista: el desplazamiento es el **área** bajo la
      gráfica $v$-$t$.)
    variants:
      - values: {"v":20,"t1":8,"t2":12,"t3":4}
        answers: ["sha256:313b4e976e94b0aa72ceed407e6ab8840b62db0a313addf59a11d2782c425ecb","sha256:d0ddc223e480e14e26ad17164248cebe413089de265e8a9c377eaf734880c9e7","sha256:316b980b7497f6bcad96f2985a9c46f444c173237436c95f1a4c269561b228dd"]
      - values: {"v":10,"t1":4,"t2":20,"t3":6}
        answers: ["sha256:bc7edc7e93423bdd152b003fcb18cf34e17f0c09672e97232dd489cb704216f5","sha256:ec0c7a6cc17e5c87e1e94bd1128727317baf474a24f730c0ff1a5cf060153179","sha256:8ef1086ece84956eafa6f6536e254df2e1620e05263cce68014374acda6577b4"]
      - values: {"v":30,"t1":15,"t2":10,"t3":10}
        answers: ["sha256:9f2b828e7f0ac55c75885c0a87ce257fa3d76118199227705353643e0bbcd0a1","sha256:e50e88cacc6b9961a4237bdb3f2d1f7e5de15eaf6a0d047d49ee93391696dcc4","sha256:b1b1bc1c92eb392f0fac7f029cd38fdef86b1592b5f0643244ea13ccda4f3f61"]
      - values: {"v":15,"t1":5,"t2":30,"t3":3}
        answers: ["sha256:1c455f48a94f93339b205e391d8d3d0a0a86f711e14b6982f539c3f5c37a3be2","sha256:f4b36aff97b0004645ab85ba70fdb7324dc506aac72909096b060ad113271b63","sha256:f4e6b4f372880fc40924d888e834e2bbfcd9cfe8afc3256725167d6232837a24"]
      - values: {"v":25,"t1":10,"t2":40,"t3":5}
        answers: ["sha256:d718538dd53f866338ece6c0eca64a7a6b9038c3276bcca0c3d9b9b1b192556a","sha256:eff83def0da34fa008412313fd9caa9da64cf3b3371f177b926ab1a0f335a3c6","sha256:fae9801f45b929422175a0a1cc3c7e8f3bbeb15144bc5d37b645c3560e6ab0bc"]
      - values: {"v":12,"t1":6,"t2":8,"t3":4}
        answers: ["sha256:f1e3eb3086ba5c11afbf4891fb8b9055992cc5e3c4909090eedba79954c4a7c1","sha256:1353522f86f888bde6f60245fb0b2ff48046896631eafc2054e93be19ceec656","sha256:018cd84ef9525f722a8a08bd8e799518250611a9df63b1e907d7bf5ef8cc60a4"]
  - id: tiro-horizontal
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una pelota sale horizontalmente a ${{v0}}$ m/s desde el borde de una azotea de ${{h}}$ m de altura. Con $g = 10$ m/s$^2$, ¿a qué
      distancia horizontal del edificio toca el suelo, en metros?
    variants:
      - values: {"v0":9,"h":"20"}
        answers: ["sha256:beb5590da2b9c477502a4665cc81341cc5c4a205d8e1f00ed54a47147225d372","sha256:f6da6bd99608c6b98e48b1c0a02bc416fdd067ecffd0004710b2c6db4d3f2f73","sha256:57807b487fb186a828fb3c4b6beb08257a2901c851557e263e996eab05dfb4fc"]
      - values: {"v0":8,"h":"45"}
        answers: ["sha256:35830be0dfab256562f50e06c03a599363e97e144de85436bd8778e8296f16c0","sha256:4b2de44f3df44a70e737a92221ddd9e75c8dce169c465c884c81fb4763ede359","sha256:b9431b0c4cabe883f65a016405f1b0e5463ddecc319cf5f2c699af0cbd18b7ba"]
      - values: {"v0":15,"h":"7{,}2"}
        answers: ["sha256:ac14efa9ca6698f5776dbcc7920224bf07cf6549806721c02d27a714d81d90f1","sha256:d976bfc6dc1be1bbaba27f34a5839f66587b246a60446aef20185759f1467a30","sha256:dbe3634f09b11b39f4d6f32a969844ec10519773a08968d9cde7d62a0d6abba5"]
      - values: {"v0":22,"h":"80"}
        answers: ["sha256:d225767a069ac1f08e2ede4e922dec2382c48aae0fc81d7a1f0efa67404911e9","sha256:e7bc791e51bbf401dfd73ba78dea437a3eae4c21dcc28a50e2d80531a428b80c","sha256:79c9a2e1f5c07695dc61e85edc213c699c08bba8cc8770068de45a8bfe30ffe2"]
      - values: {"v0":6,"h":"1{,}25"}
        answers: ["sha256:fd87f6ca3089013a46166b7b046994a78a555ca1d41666e359cede4ec8c0b2fd","sha256:2d60cdd00ca11248883ff16087ce4d297d46f81be24c8bbcd2316237bc7e8ef6","sha256:aa4bbeaa52735d79c8cccefc5ae1a9f08a7206b10fbb08930373e5db5a1f64ee"]
      - values: {"v0":10,"h":"31{,}25"}
        answers: ["sha256:4d0eca136b21c51c5c09a0fcfa2f1df63d76324d3d899d9cf4e011a53e183455","sha256:cf127eab08a38a990bf45c45fe31fb2558a10c51da1650919726379e523a75b8","sha256:6a25a33de7e4e0da1d6a03a5fad993b1cf1a3d822530428a503dfac807a635b6"]
  - id: aceleracion-centripeta
    tier: 2
    type: numero
    sig: 3
    unit: "m/s^2"
    prompt: |
      Una rueda de ${{r}}$ m de radio gira a ${{rpm}}$ revoluciones por minuto. ¿Cuál es la aceleración centrípeta de un punto de su
      borde? Respuesta: en m/s$^2$, con **3 cifras significativas**.
    variants:
      - values: {"r":"0{,}4","rpm":450}
        answers: ["sha256:1f143590143c4c3ded271716981978238b7a925c2f6602d078039858de35c99f","sha256:d910654d1355a5f99b52a26bb4ce7ec23d42f6b887786c997efe142718fb6068","sha256:640effe2302572cb5829b27e3663519f765907894f1617e9d876a854016b9a56"]
      - values: {"r":"0{,}5","rpm":120}
        answers: ["sha256:a79e205d0b50882d8ddc1cbb2e16a28c74c0fb9eedf316ff3d1f9c10406a8d34","sha256:7803201c9cec9f514d014919b4a2a6a4a0fe16320fb98a165f4272c49b9f4292","sha256:dbf84c074864101fc1065b453680f376831ad9dbe44ccd48b2b922c8807d05ed"]
      - values: {"r":"0{,}2","rpm":1500}
        answers: ["sha256:ef2697d9bf9d326ce698a02b2e73f814deb84b4a2595bcf6afb881c0387e2374","sha256:07e91bd457738c424ebd6c6230b9d66f327ecd85ff027a051378caa52bcc6482","sha256:43f31fb405f7c3c9fdf7bfb0bfd17b3ff622acc1d1a52f269f048134f63ec95b"]
      - values: {"r":"1","rpm":30}
        answers: ["sha256:257faf052dede564fdbe3085c4de82d1bd7a274885cdde7940f889bf093082f6","sha256:2810e8f1bceb680eda0ba8cb776fdad16279dc8f7a432a29f578ed0ba0b365a1","sha256:f5cac9af709624dbb7c073d3a79f5860a74c01a7f11b9bfd2c6ef9a76a8de7c8"]
      - values: {"r":"0{,}35","rpm":300}
        answers: ["sha256:f9b6054debe0b7bb85b3b0a15733ced83f0fc9bc5eba134fb0db9182ea9f3f7e","sha256:6705651a2851691e893700bd2663e9ad811a099fad2096adc3a8412cdf48b11a","sha256:a733584a357a4338480f2f0872b3a516158d418e404f9738bbefeab1a9489106"]
      - values: {"r":"0{,}05","rpm":3000}
        answers: ["sha256:c7f8aaddaf9e0b90c0be0cbc7c56786d1108c6c904915fc71a8133973bae37b1","sha256:e71a01e4e8a2cc8bf2d98300c5873b52525d48a23525be988840957ca9edee92","sha256:b93bbd9ed2e68b9b55e54589a8589d6bdaabc58a4a04c42cad6cbe805a407c77"]
  - id: alcance-proyectil
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un proyectil sale del suelo a ${{v0}}$ m/s con un ángulo de ${{g}}^\circ$ sobre la horizontal. Sin resistencia del aire y con
      $g = 10$ m/s$^2$, ¿cuál es su alcance horizontal en metros? Respuesta: la **parte entera** del resultado.
    variants:
      - values: {"v0":30,"g":30}
        answers: ["sha256:80fbab5812192e724cf2a9ce17bef806ab9cec998ca4bc385e14ff6fbcd5fdf8","sha256:f3caf6c1c6fcf36cbf4479d0ec72aebf5c981f5a259dc6a4a620003804236a2d","sha256:9e087f67517f7cb3a63c48b83f46b53bea4d6c6d78e3b8e365362916c9bc4ba7"]
      - values: {"v0":25,"g":60}
        answers: ["sha256:05b347da5c7d4191dd6c2c6de5553396ea3358b36ec9408755ea7783ba1a1bf3","sha256:26a1534a739f742b59fd5a5063299a5693fb2d9384d06d99d52aa97f0c34a4ed","sha256:ba808bfb2180fb6f66ac5f4166495eea08b5bd625556166c2995c759a5fdf0a1"]
      - values: {"v0":30,"g":15}
        answers: ["sha256:ba015d2f67dfc6c7ec0d08e808021dd0ce0cda59df4e6db344b05fd87bb72493","sha256:c204ae2a034aa195a473be13abcc53629a098b59b78ad4da7f95b23202faed93","sha256:fd2f81cc1a7593139f7ef68288694abd31353ed14184cdc8cce8d62df060f37f"]
      - values: {"v0":50,"g":40}
        answers: ["sha256:53bf0b7d7807b1bac8a2ca3b58403aa9c747cbcddfe2743379347ff1cbd4ec20","sha256:9ddabd5885b1d31e85d94b135f0e7c23c1e62631c15767b2bcdb9b96ca9857c7","sha256:352ab6437c9515bcade38554c969e8fbb3ff44483ed3c31487ab6216892f3172"]
      - values: {"v0":20,"g":75}
        answers: ["sha256:306c7f24cdb99846e29bc2108ecc804b8bfccf4f0c08ecae6b2c6fd9b097f650","sha256:d047bb3ec12d81a3d41658b1a8ce81f26769fa445e7e746da8b285c96139edab","sha256:55a8f0b6261935b4bb48b8af70da76ca4bc1c9948ea970f5f381ffa50ce6a6bb"]
      - values: {"v0":35,"g":50}
        answers: ["sha256:1fdcfde9c2eae57f8079ff94f121e7e6b6b50b4778cffea8d6edb83cf167f880","sha256:480392f435d20166aaf13dcff94560be18ce45780f66fe2b0c883c512fc39bf1","sha256:a0c8c153b2cbf03a408632fcb520c96d2a6044fe28155ee7aa870294b9c2681c"]
  - id: dos-pelotas
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Desde una altura de ${{H}}$ m se suelta una pelota (sin velocidad inicial) y, **en el mismo instante**, se lanza otra hacia abajo
      con velocidad inicial $v_0$. La segunda llega al suelo ${{dt}}$ s antes que la primera. Con $g = 10$ m/s$^2$, ¿cuánto vale $v_0$,
      en m/s?
    variants:
      - values: {"H":"80","dt":"1"}
        answers: ["sha256:5e1feda391f9a476c4b88a9042d738fc561127b6b35ddca8d3447962929fc838","sha256:850ccf534792a8509c68a20a0123faed603f03a6b0a211ca536be4748fb0bc0f","sha256:04a6f8f24bbdbc5d540124d8433507980d8b511e3d5f411fe0116ebab8bb6d73"]
      - values: {"H":"80","dt":"2"}
        answers: ["sha256:5fc0f4ab9f430eff88c6dddf256d91ddb2738b33bed9b969052b03d43359a817","sha256:2dc65113250e4bab796358b717d4d53d16b30e7a016d7743ff6a08e88b8b83db","sha256:5f99883422546f5293a8ddafa602569b6e98761ede63933a146095618349f22c"]
      - values: {"H":"20","dt":"1"}
        answers: ["sha256:67bdbf47714445ab3e6610ccd21259a5b9fbba35c3ecd924a6e3e47c588ffb67","sha256:dc86e79db8b827e05b56dc05f5a36d03347ab33e6ad7f3900df667d4a012ebd4","sha256:8293bec44a3820f2b935f1819f3a1468b730cb26d2753c0bbb10b09626eee9d2"]
      - values: {"H":"125","dt":"3"}
        answers: ["sha256:f30adac50a7538787d8953bdfc10acec83d889a396be09b1e01f09620c07f846","sha256:9fe74048a333c9582521af2ebaa711c13188aeba1f4b518806b0801b238ea04c","sha256:fbddb7efde8866d18267701a27c45bea6743478f123eceab30e8743fb9109b75"]
      - values: {"H":"180","dt":"2"}
        answers: ["sha256:a7fcae5f31d9f15aae4267064a3c79f6a7d80f7e35e99c7a0045114f53bf9024","sha256:9e08e9da3cafc9326b5efb376d73a940b1d200e38e2b2b48d35f5443cfc59180","sha256:d3e7f5ba943bc1f160d60f6635301381c2a4843d49173bdc49587ea570bc8089"]
      - values: {"H":"31{,}25","dt":"1{,}5"}
        answers: ["sha256:eb2b05e55cbb456d00f8be49b459a55d309e2950b9600cef3c54aa6e5c142a7c","sha256:0a032bff67bbd64ff41b78f8f87f4543bbec7599a55e0d661b4275932af0fb0c","sha256:943221ad8e930df8a6d6cbc393f838b77eb15bdc4d4e0ef133082a23f3e6b6a0"]
  - id: distancia-seguridad
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un conductor que va a ${{kmh}}$ km/h tarda ${{tr}}$ s en reaccionar (durante ese tiempo no frena) y después frena con una
      aceleración de módulo ${{a}}$ m/s$^2$ hasta detenerse. ¿Cuál es la distancia total recorrida desde que ve el obstáculo, en
      metros? (Cuatro cifras significativas.)
    variants:
      - values: {"kmh":126,"tr":"0{,}8","a":"7"}
        answers: ["sha256:8bce10c18a6ed0e7b9d44123d572c0b2fb90c9964c0d34c449191f9b04a1236d","sha256:d817d08b5963f7b945a6bd4b65371d82f351fbcfa38e4a21633fbef6fd576cdb","sha256:9bceda311c277c37d8efeb7193fdb58b7e6dd12af34d7e2d9dc9a0fce4f96c86"]
      - values: {"kmh":90,"tr":"1","a":"5"}
        answers: ["sha256:3af8cc89ef55f0b6204c37bb96e497e8119a1918f35dd0808d77c01b39b1cffe","sha256:8ac402900dbb9db1d7cb227aee1f02ecb2eefc57f2cb84e73c43a52253cc13e3","sha256:d269fec4e596981cce3fd513b79d2175beb7d7e2f99bc63cc5d9e05dc8cd0936"]
      - values: {"kmh":72,"tr":"0{,}8","a":"8"}
        answers: ["sha256:f0751839566640ba6577b10ac4b784a3f5b2544a41b904fe31ea5824ec2db480","sha256:9c98b1479b03578fe1d4b72beff8db9964587f53fcb545a5dd24b4ed94bbe624","sha256:07cdf10d866d96469c9a4af0aaa515530ca7d8f51bb49da3b5816a2976816d58"]
      - values: {"kmh":120,"tr":"0{,}7","a":"7"}
        answers: ["sha256:44cb01055d99a750409a76405a3973bdc887fb0d9c71fecfc1875debce0beafd","sha256:73480dceffa84054e474871c38dc558f7ec2bcfadd9ae6638ada8b594f6267d1","sha256:64ac6eee2df31ea9950b374ddbad33153117a584b4f0821eae2174ba7f797ec2"]
      - values: {"kmh":54,"tr":"1{,}2","a":"4"}
        answers: ["sha256:f55930b092aed89a94871a696f7db043aa0f921ae9bbe6b424969d8e65463639","sha256:c552bbb9446db51fdea9b4ce642099f6295f6e234cee1a3826eccfeb827c0bab","sha256:ac89ed38a7e50b805266f5d8d8aa60ca5e35df498cc415ec3ffc4ce863fec234"]
      - values: {"kmh":100,"tr":"0{,}9","a":"6{,}5"}
        answers: ["sha256:19eebb886cdf50331996855dc425d505cdf43e844fd453b24cd9c4f9b4664332","sha256:bb743180242799a38e23d40f7542d47883724022364a43f0c8cbc16b7e0a1964","sha256:6ae9477bf2ebe6513d9a3e9345e9aa2537783d998cbdeea5e7adc9cde40fac76"]
  - id: barco-y-corriente
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un barco apunta perpendicularmente a la orilla de un río y avanza a ${{vb}}$ m/s respecto al agua; la corriente arrastra a
      ${{vc}}$ m/s. ¿Cuánto vale el **cuadrado** de su rapidez respecto a tierra, en (m/s)$^2$?
    variants:
      - values: {"vb":"5","vc":"3"}
        answers: ["sha256:bff487b0d9394797921bb9e0b9cc9730796497c15ce507eafb6a7864fcea66d9","sha256:d351f18bd67d7b53c600ff8abddcf92e19315620d54866b4ad301441f0a40809","sha256:26c099d85ebb2a94a683a7825b5bc901f08c39656e151509148b861e5ef10b2f"]
      - values: {"vb":"6","vc":"2"}
        answers: ["sha256:00838699a66f4b276572cf290246c1589d7470989eaccfb2a1c20303cc30529f","sha256:ab9a67d0e625392c6efeb6c1ff912424cd57e418a1f8a19a1d287e567d031583","sha256:feb10aed6be6ba6c87dc45b89b2a6ffdffe7a0ada28dd6ab2b0f40c7398fcdd6"]
      - values: {"vb":"2","vc":"1{,}5"}
        answers: ["sha256:8055360dc4ee6a44343ec5b49a8183105e61ed64de0a9f6b3d033ce6181f1d95","sha256:3f088f72e91d56ad21a6d42c65073ad3bc1bacb762f221367c97a222c48de442","sha256:5ccb26bbacbde477ebd17a642338531abbaf48de71a440d98164c9526258684a"]
      - values: {"vb":"8","vc":"6"}
        answers: ["sha256:5b2ece853760fce1530739ed260602ac385edac71eee52d90066cb57ea309294","sha256:10f4aa9aea1354674766bf8163f908852a652ad807d16a49b6c9d55d990d30c8","sha256:5478bb9c470365610777209913fa48d5f2d66800f4d759ddbdd4ba354fad8608"]
      - values: {"vb":"9","vc":"4"}
        answers: ["sha256:abb768edb6c439a47f656bf7c34bf27e4967dba594f79783da0bb4e4f488cf09","sha256:64fd754dcdbf668713441632beb99af7c52013b46d827bf286b0eb6c90398d11","sha256:551dd5e1b67da21398eafbe9328dbeb58f5aed6acb9bd65a61415627f7397b79"]
      - values: {"vb":"7","vc":"1"}
        answers: ["sha256:d5ef2be03a7584e9c85b309fc75672433a04e314736cb86c452ec59f2fe742e4","sha256:f7457bb20db79ba740a905edf44526c1f0362ce87a8c13fdb657c90c96fde0c3","sha256:66ed30fccfe0bb2cd0cade23403ddf279cf0a73dbf0f1d38c58fb4545f08ead4"]
  - id: luz-del-sol
    tier: 3
    prompt: |
      Una unidad astronómica (distancia media Tierra-Sol) vale **exactamente** $149\,597\,870\,700$ m y la velocidad de la luz **exactamente**
      $299\,792\,458$ m/s. ¿Cuántos segundos tarda la luz del Sol en llegar a la Tierra? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:db3defda18fafc0c197740438051c690d98b551a7e449d66390d38fa2db09b77"]
  - id: distancia-con-aceleracion
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un coche pasa de ${{k1}}$ km/h a ${{k2}}$ km/h en ${{t}}$ s con aceleración constante. ¿Qué distancia recorre en esos ${{t}}$ s, en
      metros? (Cuatro cifras significativas si no es exacta.)
    variants:
      - values: {"k1":36,"k2":108,"t":8}
        answers: ["sha256:30a631b18f3d325e049503e96c1425099549e7952442c9926dce2046c8102862","sha256:38a1e85e43bf37f9341dc7c744506f6523639c8feb4ac72825a3e8b54ac60458","sha256:f5562e7eeca5ff2eb99f11b7fc87e8aaf812f1d2315d902192a58fadaf8db479"]
      - values: {"k1":18,"k2":72,"t":10}
        answers: ["sha256:131a5518d8a91ea50e48ef77436ad8c0cf08c3eb1e51c33e792c99344cb86a6c","sha256:93ac7207a4096a1eaa9a89b806ba07e956b018a7f2d7b0e40154550810ac6705","sha256:af8dde078ee3588f4d6a28179df489d84026b18f6415ea782ac5be4cf254d946"]
      - values: {"k1":0,"k2":90,"t":12}
        answers: ["sha256:6e64cd1e0c5cfe2d9781cee9f6b13d70cf8e1a342ca29b5db558a3d8366e180e","sha256:877f19a876c3928cc1387edab9d9f64d6790a06b6dc47657061c1ec9a153be1d","sha256:60e4b785063369e95ed11bd20edb8ab017d487b23087ae782a1781612f774cf1"]
      - values: {"k1":54,"k2":126,"t":6}
        answers: ["sha256:7c708df2f98bae627ea146f7f0099cfd4b00f4cd8313cd9a8ab4e005f01191c7","sha256:b8233ac89ee6c45c35440c354dcd8d4eed0fc1c03cde4e2193f56b75b9ec6616","sha256:ce39854c3caef23c369df20b8e21033db1baa57bb1f10b689e84aee2831fd729"]
      - values: {"k1":72,"k2":36,"t":5}
        answers: ["sha256:156f9784d247ab9cbf803ab4bbaf87c7a6a2442c34642c22c241f2af691a4e80","sha256:26d199c671c81ac931f77d146b8bc317af7301fa85619761445193d9a5311104","sha256:8da8a141dceed60aefc28392a02f65c6c77580836fe4a07a3967dc1381a277b7"]
      - values: {"k1":30,"k2":90,"t":9}
        answers: ["sha256:188576fa5980ada479ca03d9110cd8216726e31f94211003819c11bc69e7e607","sha256:5864d3276e7442bfb08a1058ae23bff34e4350a77a2eedeadba153d9221efc9e","sha256:bb68c1cde3a3fb6d7c1e1c3dc7b7d4992b3f8c69b590786ecd75791785de8806"]
  - id: deduce-distancia-de-seguridad
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Un conductor circula a velocidad $v$, tarda un tiempo de reacción $t_r$ en empezar a frenar (durante ese
      tiempo no frena) y después frena con una deceleración constante de módulo $a$ hasta pararse. Deduce que la distancia total
      recorrida es
      $$
      d = v\,t_r + \frac{v^2}{2a}.
      $$
      Comprueba que cada término tiene dimensiones de longitud y explica qué término manda a velocidades altas y qué consecuencia
      práctica tiene.
    sealed: "gz64:H4sIAAAAAAACCn1UwW7jNhT8lYHAg60oTqKjiz0ECAoUKNAeFr2Ea+OFfI4JUKRLUkaCwB/jYw899RP8YwUl25J2g71R5PDNvMcZfRTR2zYZ74plUZa/UmQ8YBaYlDKn/9x8UZb4i61XRpOG8i4mcokh9gK6Df06rYNYovF70xh2yaN1ZuNDwxWEXj/gC/ZSVhm1kE66M0+N2SawI00dy6Niy4E62jHRLQlojrrn3FJMBHEvFvidsL8q4wixn6V55sItCElU+LtlRAa51hLYSSfSepMRd9Tf1yazKEPgKJ0Q0ul1fZW7wS2kTJtA6qHOJdebVT6VMm997Ff14YMOHWjYqOnwHaSmw6IvPvsD2gRWiRrOvSnvIPbnqvv1/arGDWpav0n5xDYR3sQS4j4frmrcoiYpK72uxWLez/GrT2Tz8ITGF+RR32DcQcANpNQTLZc3eDINu2i849hVeD5f+TbIl7KhtA0NmsOwjgcplfZp2OguXJDiFwgpLW/S83ROUgbzuk2fll/Vd0O5DB+OpgdTqnMnj4MPOIJsoliWaMhpAluk0z+hMc5DtaTD6ZiM8hD7VX03q2kuliAL7V8sBdiRpar8NRhEM66pQGTpdLuzRhF2HHwHZZztnD1Xlh1bjynLBf70ARz9D0Ujv7ahD1dgxWhatfVoTscIzbtgInU2HiuTbvaO3aWej7CnfxuTON8YReJ9ypXNxhbKqy1noGbbBcw0Ox8SOeS8+fmiqIrQvgSjiuXzR6GCSRyML5ZFF9rJGJRv/GexX/4Q+6Iqdq1LPhbLh0M1KfvVcLPz4/GNUlrBo40eyoecmw72SWKGvFzajObVdWhLoNGf5WdKnsbvchVzNQo06zaPFtE4cAg+9CPvuZzJ69PRvvJLoDFP/R3PozsdrYkmQl8ySHbSYn5U7ePVuvFnsn/T7JLZZC9mp2jfGDc1PruuDYF38FvvWtsZIrJquet4lhPAY/er9nTsDHydxXyq4tvhf/bBTQE+BgAA"
  - id: r-ms-a-kmh
    tier: 1
    type: numero
    review: true
    sig: 6
    unit: "km/h"
    prompt: |
      Un guepardo corre a ${{v}}$ m/s. ¿A cuántos km/h va? Respuesta: un número.
    variants:
      - values: {"v":28}
        answers: ["sha256:0fd1d5beb98607a8f9066566486989253deb989c4e2058714a220f82e426a8eb","sha256:3c3eacde9cae0bf5f9cc587fa181ea565ce6c7f749d00ce82f4bc558d986f75a","sha256:b9c6ee0b5d0b0831ae48e16b689825a2605d7a4eb764ceca5f729f5fec71a8aa"]
      - values: {"v":30}
        answers: ["sha256:c19de1ff9f5eaf9aa5b360ea893f18dab8587b9e92fbfc54e865977e327cd8d5","sha256:44a7f948765192b6c15839e7676d078d618ada530e836b296d731a89f387bf9b","sha256:92a81ac6fb13b2c00c2c5707c990d4467c19a2c3c164f521c0d9eb0b546a5c82"]
      - values: {"v":25}
        answers: ["sha256:6ea3f6b37361e991c94037c2a6e9238ab08f7ff6c3d5ecc18cdc9f10e139c065","sha256:b13dc7188deb5e77db653d5730a0918e6daf14540e35ca6675609a0f07e35376","sha256:632af65929da7a52d35bd1896c6a46c9b2943f6bbdbe26f27eb9aade6320cc32"]
      - values: {"v":20}
        answers: ["sha256:ea18fdf134f92b62bb5b83e4310ad288239756f5ed277f1bd6cc9fef2c79724b","sha256:599f1ab66cd03e84d5631e59059e1239545827bf58838425f3196173b391b690","sha256:0e0f2e367761b5d6c9f84e1b2550e605c36771635f0b2ef80545fb976f53d2b4"]
      - values: {"v":33}
        answers: ["sha256:ce3fec8815955b858b905a5f5ac2069d7c8d220a5aa17c5546ab1965c97b0d78","sha256:dbb4eed0b8bb38e78139a8730d25f81b54e7eb4b64217e370bc7349af2a55f3a","sha256:ec5b6ff4c746047609be4adad4f463deb075c1cdf1d121278e92bdd58ef873d3"]
  - id: r-pendiente-xt
    tier: 1
    type: opcion
    review: true
    prompt: |
      En una gráfica posición-tiempo ($x$ frente a $t$), ¿qué mide la **pendiente** en cada instante?
    options:
      - |
        La aceleración
      - |
        La velocidad
      - |
        La distancia recorrida
      - |
        El tiempo empleado
    answers: ["sha256:96995b33eb6f3105328c2b9e8a56c908b1a60e30a72e857b8fbe8f33222bceaf"]
  - id: r-area-vt
    tier: 1
    type: opcion
    review: true
    prompt: |
      En una gráfica velocidad-tiempo, ¿qué representa el **área** comprendida entre la gráfica y el eje del tiempo?
    options:
      - |
        La aceleración media
      - |
        La velocidad final
      - |
        El desplazamiento
      - |
        La fuerza
    answers: ["sha256:234be623ea84a8d7eeeffb1a223aec6f960ecb9ee9346c8a5ebe3da5f8b4e7ca"]
  - id: r-caida-cuadruple
    tier: 2
    type: opcion
    review: true
    prompt: |
      Sin rozamiento, sueltas un objeto desde una altura **cuatro veces mayor**. ¿Con qué velocidad llega al suelo, comparada
      con la de antes?
    options:
      - |
        Cuatro veces mayor
      - |
        El doble
      - |
        Dieciséis veces mayor
      - |
        Igual: todos los cuerpos caen igual
    answers: ["sha256:3bf598b7f7d60706bdf38fe45922c75e0325e23553553c0adbcc077e94461cb2"]
  - id: r-frenada-doble
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un coche frena siempre con la misma deceleración. Si circula al **doble** de velocidad, ¿por cuánto se multiplica su
      distancia de frenada? Respuesta: un número.
    answers: ["sha256:29afc8112acb4bd032cff76d25a71209bfac8d25231d859a55e074fd399a8b8f","sha256:d4759873a808b40af461b838ebe6d197dc61329993236ed381179f89d1f00190","sha256:0e77a2755b0399985dae61b4143586f61d6cd355d21d3007550c0ba38d3eef5b"]
  - id: r-desplazamiento-vuelta
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Un atleta da exactamente dos vueltas a una pista de $400$ m y termina donde empezó. ¿Cuál es el módulo de su
      **desplazamiento**, en metros?
    answers: ["sha256:c52ea4112822d6a6a876cd8dd3ce6038aa172e434d4efc5552560f6d73b99c3e","sha256:774d5dc3702981a32767aa3d33ebc498e9ad9e297b6ec2857dd7c72c4cfa96dc","sha256:4333d0191197c4960a562db5965ce0d3691059a93e926aff493138130f44d3d2"]
  - id: r-cifras
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántas cifras significativas tiene la medida $0{,}0405$ kg?
    answers: ["sha256:2a98a3c8da891afca7b98241f9357c612db66766d4dcd963b17b57ee9867b381","sha256:5926f44674f88eaf7dbf5d3ac5c5988ce792ccf7455fd7e864e7f96b4688a71a","sha256:f6c201d4d3a3abd2212d66124df589db4a7e42cdacafcc8071849a1b7e01bcb2"]
  - id: r-dimensional
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas fórmulas es **dimensionalmente correcta** ($x$ en m, $v$ en m/s, $a$ en m/s$^2$, $t$ en s)?
    options:
      - |
        $v = a\,t^2$
      - |
        $x = v / t$
      - |
        $x = v\,t + \tfrac12 a t^2$
      - |
        $a = v\,t$
    answers: ["sha256:c98e048142395ee4b76efc954e0880731cc225f84e1f2197423abc4e0fac43f8"]
---

# Medida y movimiento: unidades, error y cinemática

La física empieza con dos preguntas: **¿cómo se mide?** y **¿cómo se mueve?** Una buena parte de la ciencia y la ingeniería consiste en
medir bien, con las unidades correctas y sabiendo cuánto fiarse del número, y en describir con precisión cómo cambian las cosas en el
tiempo. Este nodo lo hace desde cero y deja listas las herramientas para estudiar después las causas del movimiento.

## Objetivos

Al terminar sabrás:

1. Usar el Sistema Internacional de unidades, hacer conversiones y comprobar fórmulas con el análisis dimensional.
2. Expresar una medida con su **incertidumbre** y las cifras significativas correctas, y estimar órdenes de magnitud.
3. Distinguir escalares y vectores, y sumar vectores.
4. Describir y resolver movimientos rectilíneos (uniforme y uniformemente acelerado) y la caída libre.
5. Resolver el tiro parabólico y el movimiento circular uniforme.
6. Pasar de un sistema de referencia a otro (movimiento relativo).

> [!question] Test de entrada
> 1. ¿Cuántos metros son $5$ km? 2. Un coche va a $60$ km/h durante $2$ h: ¿qué distancia recorre? 3. Si dos magnitudes son
> directamente proporcionales y una se duplica, ¿qué pasa con la otra?
>
> Respuestas: $5000$ m; $120$ km; se duplica.

## 1. Para qué sirve

- **Seguridad vial**: la distancia de frenado crece con el **cuadrado** de la velocidad; por eso a $120$ km/h no se frena «un poco más» que a $60$.
- **Deporte y videojuegos**: trayectorias de balones, saltos, proyectiles.
- **Ingeniería**: dimensionar un freno, el recorrido de una cinta, el tiempo de reacción de un sistema.
- **Ciencia**: toda teoría se contrasta con medidas; sin entender el error no se sabe si una teoría falla o si se midió mal.

## 2. La física y el método científico

La física construye **modelos** (descripciones simplificadas) y los contrasta con **experimentos**. Un buen modelo hace **predicciones
cuantitativas** que pueden resultar falsas; si no puede equivocarse, no es ciencia. Todo modelo tiene un **rango de validez**: despreciar la
resistencia del aire funciona para una piedra y falla para una pluma. Saber **cuándo** un modelo es aceptable es parte de saber física.

## 3. Magnitudes, unidades y el Sistema Internacional

> [!practico]
> Decir «la mesa mide $2$» no sirve: ¿$2$ metros, $2$ palmos, $2$ pies? Medir es **comparar con un patrón** acordado por todos.
> El Sistema Internacional es ese acuerdo mundial (metro, kilogramo, segundo…), y desde 2019 sus patrones ya no son objetos
> guardados en una caja, sino constantes de la naturaleza que cualquier laboratorio puede reproducir.


Una **magnitud** es algo que se puede medir (longitud, tiempo, masa); una **unidad** es el patrón con que se compara. Una medida es
siempre un **número y una unidad**: «$3$» no es una distancia; «$3$ m» sí.

El **Sistema Internacional (SI)** tiene siete **unidades básicas**:

| Magnitud | Unidad | Símbolo |
|---|---|:---:|
| longitud | metro | m |
| masa | kilogramo | kg |
| tiempo | segundo | s |
| corriente eléctrica | amperio | A |
| temperatura | kelvin | K |
| cantidad de sustancia | mol | mol |
| intensidad luminosa | candela | cd |

Desde 2019 las siete se definen fijando el valor **exacto** de constantes de la naturaleza (BIPM): la velocidad de la luz es
exactamente $299\,792\,458$ m/s y de ahí sale la definición del metro. Las demás se obtienen combinándolas: m/s (velocidad), m/s$^2$
(aceleración), newton ($\text{N} = \text{kg}\cdot\text{m/s}^2$), julio ($\text{J} = \text{N}\cdot\text{m}$), vatio ($\text{W} = \text{J/s}$).

**Prefijos** (múltiplos de $10$): kilo $10^3$, mega $10^6$, giga $10^9$, tera $10^{12}$; mili $10^{-3}$, micro $10^{-6}$, nano $10^{-9}$.
**Notación científica**: $a\cdot 10^n$ con $1 \le a < 10$; por ejemplo, $0{,}000\,45 = 4{,}5\cdot 10^{-4}$.

### Conversión de unidades

Se multiplica por **factores de conversión**, fracciones que valen $1$, de modo que las unidades no deseadas se cancelen.
**Ejemplo resuelto:** $90$ km/h a m/s:

$$
90\,\frac{\text{km}}{\text{h}}\cdot\frac{1000\ \text{m}}{1\ \text{km}}\cdot\frac{1\ \text{h}}{3600\ \text{s}} = 25\,\frac{\text{m}}{\text{s}} .
$$

Regla práctica: **para pasar de km/h a m/s se divide entre $3{,}6$**. Con áreas y volúmenes los factores también se elevan:
$1\ \text{m}^2 = (100\ \text{cm})^2 = 10^4\ \text{cm}^2$; $1\ \text{g/cm}^3 = 1000\ \text{kg/m}^3$.

### Análisis dimensional

Las dos partes de una igualdad deben tener las **mismas dimensiones**. Sirve para **detectar errores**. Si alguien propone
$d = \tfrac{1}{2} a t$ para la distancia, las dimensiones de $a t$ son $\text{m/s}^2\cdot\text{s} = \text{m/s}$ (una velocidad, no una longitud):
la fórmula es falsa. La correcta, $d = \tfrac{1}{2} a t^2$, da $\text{m/s}^2\cdot\text{s}^2 = \text{m}$. $\checkmark$ El análisis dimensional no prueba que
una fórmula sea cierta, pero descarta muchas falsas en segundos.

## 4. Medida, error y cifras significativas

> [!practico]
> Ninguna medida es perfecta: con una regla normal no distingues medio milímetro, y si mides tres veces el tiempo de caída
> de una pelota con el móvil, obtienes tres números distintos. Por eso un físico no dice «mide $12{,}3$ cm» sino
> «$12{,}3 \pm 0{,}1$ cm»: el valor y **cuánto te puedes fiar de él**. Dar muchos decimales no hace una medida mejor; solo
> la hace parecer más precisa de lo que es.


**Toda medida tiene incertidumbre.** Se escribe $x = (x_0 \pm \Delta x)$ unidad, donde $\Delta x$ es la **incertidumbre absoluta**; el cociente
$\Delta x / x_0$ es la **relativa** (suele darse en %). Una regla de $1$ mm de apreciación da, al medir una barra, algo como
$12{,}3 \pm 0{,}1$ cm.

**Exactitud y precisión no son lo mismo.** Una medida es **precisa** si repetirla da valores muy próximos; es **exacta** si está cerca
del valor verdadero. Una balanza mal tarada da medidas muy precisas pero inexactas (error sistemático).

**Repetir mejora.** Si se mide varias veces, la mejor estimación es la **media** y su dispersión se resume con la desviación típica (ver el
nodo de funciones y estadística). Con $N$ medidas, la incertidumbre de la **media** baja como $1/\sqrt{N}$ (Taylor, 1997).

**Propagación (reglas básicas).**

- **Suma o resta**: se suman las incertidumbres **absolutas**.
- **Producto o cociente**: se suman las incertidumbres **relativas**.

**Ejemplo resuelto:** un rectángulo mide $12{,}3 \pm 0{,}1$ cm por $4{,}5 \pm 0{,}1$ cm. Área central: $12{,}3\cdot 4{,}5 = 55{,}35$ cm$^2$. Errores
relativos: $\frac{0{,}1}{12{,}3} \approx 0{,}8\,\%$ y $\frac{0{,}1}{4{,}5} \approx 2{,}2\,\%$; suman $3{,}0\,\%$ y $3{,}0\,\%$ de $55{,}35$ son $1{,}7$. Resultado:
$(55 \pm 2)$ cm$^2$. **No tiene sentido dar $55{,}35$** si el error ya afecta a las unidades.

**Cifras significativas.** Son las que aportan información. Reglas: los ceros a la izquierda **no** cuentan ($0{,}00230$ tiene $3$:
$2, 3, 0$); los ceros finales tras la coma **sí**. En un **producto** el resultado tiene tantas cifras como el dato con menos; en una **suma**,
tantos decimales como el que menos tenga. Para una medida con incertidumbre, **la última cifra escrita es la dudosa**.

## 5. Orden de magnitud y estimación

Un **orden de magnitud** es la potencia de $10$ más próxima a un valor. Estimar con órdenes de magnitud (**problemas de Fermi**) permite
comprobar si un resultado es razonable y razonar sobre cosas que no se pueden medir directamente.

**Ejemplo (Fermi):** ¿cuántas veces respira una persona al año? Unas $15$ respiraciones por minuto: $15\cdot 60\cdot 24\cdot 365 \approx 7{,}9\cdot 10^6$,
es decir, **del orden de $10^7$**. Un resultado de $10^3$ o de $10^{10}$ delataría un error. Estima siempre **antes** de calcular.

## 6. Escalares y vectores

> [!practico]
> «La temperatura es de $20$ grados» está completo; «el coche va a $50$ km/h» no lo está si necesitas saber **hacia dónde**.
> Las magnitudes que necesitan dirección se representan con flechas (**vectores**), y para sumarlas no basta sumar números:
> andar $3$ km al este y $4$ km al norte te deja a $5$ km del punto de partida, no a $7$.


Una magnitud **escalar** queda definida por un número y una unidad (masa, tiempo, temperatura, rapidez). Una **vectorial** necesita
además **dirección y sentido** (desplazamiento, velocidad, aceleración). Se representa con una flecha, y se descompone en **componentes**:
un vector de módulo $v$ y ángulo $\theta$ sobre el eje $x$ tiene $v_x = v\cos\theta$ y $v_y = v\sin\theta$. Recíprocamente, $v = \sqrt{v_x^2 + v_y^2}$.

**Suma de vectores**: se suman **componente a componente**. **Ejemplo:** andar $3$ km hacia el este y luego $4$ km hacia el norte da un
desplazamiento de módulo $\sqrt{3^2 + 4^2} = 5$ km, con ángulo $\arctan\frac{4}{3} \approx 53{,}1^\circ$ al norte del este.

**Distancia no es desplazamiento.** La distancia recorrida es un escalar (lo que marca el cuentakilómetros); el **desplazamiento** es el vector
que une el punto inicial con el final. Si das una vuelta completa a una pista, la distancia es $400$ m y el desplazamiento es **cero**. Análogamente,
**rapidez** (escalar) frente a **velocidad** (vector).

## 7. Cinemática en una dimensión

> [!practico]
> En una gráfica posición-tiempo, una recta inclinada es velocidad constante, y cuanto más empinada, más rápido. En una gráfica
> velocidad-tiempo, el **área** bajo la línea es la distancia recorrida (si no cambia de sentido): a $20$ m/s durante $3$ s, el rectángulo mide
> $20 \times 3 = 60$ m. Con eso y la idea de que acelerar es «cambiar la velocidad cada segundo» se deducen todas las fórmulas de
> esta sección.


La **cinemática** describe el movimiento **sin** preguntarse por su causa. Se elige un eje con un sentido positivo y un origen. La **posición** $x(t)$ es
una función del tiempo (ver [[mat-funciones-basicas]]).

- **Velocidad media**: $\bar v = \dfrac{\Delta x}{\Delta t}$.
- **Velocidad instantánea**: la media sobre un intervalo que se hace tan pequeño como se quiera; es la **pendiente** de la gráfica $x$-$t$ en
  ese instante (el cálculo diferencial formaliza esta idea).
- **Aceleración media**: $\bar a = \dfrac{\Delta v}{\Delta t}$, la pendiente de la gráfica $v$-$t$.

### Movimiento rectilíneo uniforme (MRU)

Velocidad constante: $x(t) = x_0 + v\,t$. La gráfica $x$-$t$ es una recta. **Ejemplo:** un coche A va a $100$ km/h y otro B, $5$ km por detrás, va a
$120$ km/h. La velocidad **relativa** de acercamiento es $20$ km/h, así que lo alcanza en $\frac{5}{20} = 0{,}25$ h $= 15$ min.

### Movimiento rectilíneo uniformemente acelerado (MRUA)

> [!formal] Con rigor: deducción de las tres ecuaciones
> Aceleración constante $a$. De la definición, $a = \frac{v - v_0}{t}$, se obtiene
>
> $$
> v = v_0 + a\,t .
> $$
>
> El **desplazamiento** es el **área bajo la gráfica $v$-$t$**. Con la velocidad variando linealmente, esa área es un trapecio:
> $\Delta x = \frac{v_0 + v}{2}\,t$. Sustituyendo $v$:
>
> $$
> x = x_0 + v_0\,t + \tfrac{1}{2}\,a\,t^2 .
> $$
>
> Eliminando el tiempo entre las dos primeras relaciones (despejar $t = \frac{v - v_0}{a}$ y sustituir) se obtiene la tercera ecuación, muy útil
> cuando no interesa el tiempo:
>
> $$
> v^2 = v_0^2 + 2\,a\,\Delta x .
> $$

**Ejemplo resuelto (frenada).** Un coche va a $20$ m/s y frena con $a = -4$ m/s$^2$. Se detiene cuando $v = 0$: $t = \frac{0 - 20}{-4} = 5$ s, y la
distancia es $\Delta x = \frac{0 - 20^2}{2\cdot(-4)} = 50$ m. **Observa**: la distancia de frenado es $\Delta x = \frac{v_0^2}{2|a|}$, **proporcional al
cuadrado de la velocidad**: al doblar $v_0$, se **cuadruplica**.

**Tiempo de reacción.** Antes de frenar, el conductor recorre $v_0\,t_r$ (con $t_r \approx 0{,}7$–$1$ s). A $30$ m/s, con $t_r = 1$ s, son $30$ m
antes de pisar el freno. La distancia de seguridad es **reacción más frenado**.

### Caída libre

Despreciando el aire, todos los cuerpos caen con la **misma** aceleración, $g \approx 9{,}81$ m/s$^2$ (valor normal convencional: $9{,}80665$; varía algo con la
latitud y la altitud) dirigida hacia el suelo. Es un MRUA con $a = g$. En los ejemplos y ejercicios se indica el valor de $g$ que se debe usar
($10$ m/s$^2$ si se quiere un cálculo limpio).

**Ejemplo resuelto:** se suelta una piedra desde $20$ m ($g = 10$): $20 = \tfrac12\cdot 10\cdot t^2$, $t = 2$ s; velocidad al llegar: $v = g t = 20$ m/s.
**Lanzamiento vertical:** subiendo con $v_0$, la velocidad se anula en $t = v_0/g$ y la altura máxima es $\frac{v_0^2}{2g}$; el tiempo total de vuelo
hasta volver al punto de partida es $\frac{2v_0}{g}$ (simétrico).

## 8. Movimiento en dos dimensiones: el tiro parabólico

> [!practico]
> Si a la vez dejas caer una pelota y lanzas otra horizontalmente desde la misma altura, **llegan al suelo al mismo tiempo**:
> el movimiento hacia delante no afecta a la caída. Por eso un tiro se estudia como dos movimientos separados: uno horizontal
> a velocidad constante y uno vertical que es una caída libre.


Un proyectil lanzado con velocidad $v_0$ y ángulo $\theta$ se mueve a la vez horizontal y verticalmente, y **los dos movimientos son
independientes** (Galileo): horizontalmente, sin aceleración (MRU); verticalmente, con $g$ (MRUA).

$$
x(t) = v_0\cos\theta\,t, \qquad y(t) = v_0\sin\theta\,t - \tfrac12 g t^2 .
$$

> [!formal] Con rigor: el alcance y el ángulo de $45^\circ$
> *Alcance.* El proyectil vuelve al suelo cuando $y = 0$, es decir en $t = \dfrac{2v_0\sin\theta}{g}$. Entonces
>
> $$
> R = v_0\cos\theta\cdot\frac{2v_0\sin\theta}{g} = \frac{v_0^2\sin 2\theta}{g}
> $$
>
> (usando $2\sin\theta\cos\theta = \sin 2\theta$). $R$ es **máximo para $\theta = 45^\circ$** y, a igual velocidad, los ángulos $\theta$ y $90^\circ - \theta$
> dan el mismo alcance. La **altura máxima** es $H = \dfrac{(v_0\sin\theta)^2}{2g}$.

**Ejemplo resuelto:** $v_0 = 20$ m/s a $45^\circ$, $g = 10$: $R = \frac{400\cdot 1}{10} = 40$ m; $v_0\sin\theta \approx 14{,}14$ m/s,
$H = \frac{14{,}14^2}{20} = 10$ m; tiempo de vuelo $\frac{2\cdot 14{,}14}{10} \approx 2{,}83$ s.

**Límite del modelo:** con aire, el alcance es menor y la trayectoria deja de ser una parábola exacta; la resistencia del aire importa para pelotas rápidas o
proyectiles reales.

**Tiro horizontal.** Si se lanza horizontalmente desde una altura $h$, el tiempo de caída es $t = \sqrt{2h/g}$ (**no depende de la velocidad horizontal**) y el alcance
es $v_0\,t$.

## 9. Movimiento circular uniforme

> [!practico]
> En una curva, aunque el velocímetro marque siempre lo mismo, sientes que algo «te empuja» hacia fuera: es porque la
> velocidad cambia de **dirección** todo el rato, y eso también es acelerar. Esa aceleración apunta hacia el centro de la
> curva y es mayor cuanto más rápido vas y más cerrada es la curva.


Un objeto recorre una circunferencia de radio $r$ con **rapidez constante**. Se definen:

- **Periodo** $T$: tiempo de una vuelta. **Frecuencia** $f = \frac{1}{T}$ (en hercios, Hz).
- **Velocidad angular** $\omega = \dfrac{2\pi}{T} = 2\pi f$ (rad/s). $1$ revolución $= 2\pi$ rad; $\text{rpm} \times \frac{2\pi}{60} = $ rad/s.
- **Rapidez** $v = \omega r$.

Aunque la rapidez es constante, la **velocidad** (vector) cambia de dirección: hay **aceleración**, dirigida **hacia el centro**:

$$
a_c = \frac{v^2}{r} = \omega^2 r .
$$

> [!formal] Con rigor: de dónde sale $v^2/r$
> *Justificación.* En un pequeño intervalo $\Delta t$ la velocidad gira un ángulo $\Delta\theta = \omega\Delta t$ sin cambiar de módulo, así que
> $|\Delta\vec v| \approx v\,\Delta\theta$ y $a = \frac{|\Delta\vec v|}{\Delta t} = v\,\omega = \frac{v^2}{r}$. $\blacksquare$

**Ejemplo resuelto (la Luna).** La Luna da una vuelta en $T = 27{,}3$ días $= 2{,}36\cdot 10^6$ s a un radio de $3{,}84\cdot 10^8$ m. Su rapidez es
$v = \frac{2\pi r}{T} \approx 1023$ m/s y su aceleración hacia la Tierra, $a_c = \frac{v^2}{r} \approx 2{,}7\cdot 10^{-3}$ m/s$^2$. Comparada con $g = 9{,}81$:
$\frac{9{,}81}{2{,}73\cdot 10^{-3}} \approx 3600 = 60^2$, y la Luna está a unos $60$ radios terrestres: es la prueba que usó Newton para
sostener que la gravedad **disminuye con el cuadrado de la distancia**.

## 10. Movimiento relativo

> [!practico]
> Si caminas a $5$ km/h por el pasillo de un tren que va a $100$ km/h, para otro pasajero vas a $5$ km/h y para alguien en el
> andén, a $105$ km/h. La velocidad siempre es **respecto a algo**, y para pasar de un punto de vista a otro se suman las
> velocidades como flechas.


La velocidad depende del **sistema de referencia**. En la física de Galileo (velocidades mucho menores que la de la luz), las velocidades se suman como
vectores: $\vec v_{A/C} = \vec v_{A/B} + \vec v_{B/C}$.

**Ejemplo (río).** Un barco avanza a $4$ m/s respecto al agua, perpendicular a la orilla, y el agua se mueve a $3$ m/s respecto a tierra. Respecto a tierra,
su velocidad tiene componentes $(3, 4)$ y módulo $\sqrt{9 + 16} = 5$ m/s, con una trayectoria inclinada: la corriente lo arrastra **río abajo** mientras cruza.

A velocidades cercanas a la de la luz esta suma falla, y hace falta la relatividad (otro nodo posterior).

## 11. Errores típicos

- Escribir una medida sin **unidad**, o mezclar unidades (km con m, h con s) en una fórmula.
- Usar las fórmulas de MRUA cuando la aceleración **no** es constante.
- Olvidar el **signo**: una aceleración que frena es negativa respecto al sentido de avance.
- Confundir distancia con desplazamiento, o rapidez con velocidad.
- Creer que un cuerpo más pesado cae más rápido (en el vacío, no).
- En el tiro parabólico, mezclar las componentes: el tiempo de caída solo depende del movimiento vertical.
- Dar un resultado con más cifras significativas de las que justifican los datos.

## Repaso: lo que debe quedarte dentro de un mes

1. Unidades SI; convertir con factores; análisis dimensional para detectar errores.
2. Toda medida lleva incertidumbre; suma: errores absolutos; producto: relativos.
3. $v = v_0 + at$; $x = x_0 + v_0t + \tfrac12 at^2$; $v^2 = v_0^2 + 2a\Delta x$; la distancia de frenado crece con $v^2$.
4. Tiro parabólico: ejes independientes; $R = \frac{v_0^2\sin 2\theta}{g}$.
5. Circular uniforme: $a_c = \frac{v^2}{r} = \omega^2 r$ hacia el centro.

## Siguiente

Con el movimiento descrito, [[fis-fuerzas-energia]] pregunta **por qué** se mueven las cosas: las leyes de Newton, el
trabajo y la energía.
