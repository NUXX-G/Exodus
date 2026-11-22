---
id: fis-ondas-calor-fluidos
title: "Ondas, luz, calor y fluidos"
area: fisica
trunk_level: 7
prerequisites: [fis-fuerzas-energia, fis-oscilaciones]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018, caps. 14 (fluidos), 16-17 (ondas y sonido), 18 (temperatura, calor y primer principio), 20 (entropía y segundo principio), 33-34 (ondas electromagnéticas e imágenes)."
  - "Ling, S. J.; Sanny, J.; Moebs, W. Física universitaria (en español). OpenStax, 2021: vol. 1, caps. 14 (mecánica de fluidos), 16 (ondas) y 17 (sonido); vol. 2, caps. 1 (temperatura y calor), 3 (primera ley) y 4 (segunda ley); vol. 3, caps. 1-2 (naturaleza de la luz y óptica geométrica). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/16-introduccion"
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. I (ondas, óptica, calor). Addison-Wesley, 1963 (edición en línea: feynmanlectures.caltech.edu)."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019 (constantes de definición: c, h, k_B)."
  - "Arquímedes. Sobre los cuerpos flotantes (principio de flotación)."
hints:
  - "Concepto: una onda transporta energía sin transportar materia; v = λ f vale para todas. Para calor, escribe un balance: lo que pierde un cuerpo lo gana el otro (Q ganado = Q perdido). Para fluidos, la presión solo depende de la profundidad, y el empuje es el peso del fluido desalojado."
  - "Herramienta: comprueba los resultados por otra vía (por ejemplo, calcular el calor por dos caminos, o integrar numéricamente la presión con la profundidad) y recuerda convertir las unidades al SI (cm a m, °C a K cuando haga falta, kJ a J)."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de ondas, sonido, temperatura y calor, primera ley de la termodinámica, fluidos y óptica; bipm.org (constantes exactas de c, h y k que fijan σ, la constante de Stefan-Boltzmann)."
exercises:
  - id: longitud-de-onda-fm
    tier: 1
    prompt: |
      La señal de {{que}} tiene una frecuencia de ${{MHz}}$ MHz. Las ondas electromagnéticas viajan a la velocidad de la luz
      ($299\,792\,458$ m/s). ¿Cuál es su longitud de onda, en metros? Respuesta: un número **con tres decimales**.
    variants:
      - values: {"MHz":"104","que":"una emisora de FM"}
        answers: ["sha256:ca15bea23c2f05bbf662f999ef3f24ba2aa47c1922e7f81763756b86edc94e4d"]
      - values: {"MHz":"2400","que":"un router wifi"}
        answers: ["sha256:52c003e77e74cbacd60930b997433027175ca60b20b7fbb4ec6073b2c4932bb9"]
      - values: {"MHz":"5000","que":"un router wifi de 5 GHz"}
        answers: ["sha256:bb1a364b44db63819dccae493a7d0cf92a7015ead0d9a92e48c643320aa064ca"]
      - values: {"MHz":"900","que":"un móvil (banda de 900 MHz)"}
        answers: ["sha256:9b7483b9cce483802f467c912a262a2618ec36cb00ff364e62839f87a1a575c9"]
      - values: {"MHz":"88","que":"una emisora de FM"}
        answers: ["sha256:ab319a46a65f7a4910fec3113fd81e5aee61f687565e7edfee507a148e9ebe35"]
      - values: {"MHz":"1575{,}42","que":"la señal L1 del GPS"}
        answers: ["sha256:38628535bbf6650110eedc5d2d3b0f44f87cf686244bba0eb4f6c42405076555"]
  - id: decibelios-x100
    tier: 1
    type: numero
    sig: 4
    prompt: |
      El nivel de intensidad sonora es $\beta = 10\log_{10}(I/I_0)$ decibelios. Si la intensidad de un sonido se multiplica por ${{k}}$,
      ¿cuántos decibelios **cambia** el nivel? (Negativo si baja; cuatro cifras significativas si no es exacto.)
    variants:
      - values: {"k":"100"}
        answers: ["sha256:a1a29b69901cbf935229ead4b0d757f9884cdaa5f05461a36d4cb9ca43c5451c","sha256:e56fb05b8da6ad71bbb997bfabaef72f4fa9a02f379fe3ef8cadab6baecbe372","sha256:2f98bf1c8bf7ea3a98d94c0201e18c79936309bc040b3a6b83b8dca1e472df00"]
      - values: {"k":"1000"}
        answers: ["sha256:213f03a3e558cc1b8116d245463244c806528a70983d3d9de4bb64734d344d48","sha256:9a6034629dc62d159fc5dcef9cc05d9ffd783f855e81d260058b3d78d85b58f0","sha256:3459142d55a469bac1abc2141cbd80c1a18705bb5c522a72929863547d9228d7"]
      - values: {"k":"50"}
        answers: ["sha256:dc7df5b64601aa7723e8c84416ec622159d5f3aa01d1251b8dafc3dda3783743","sha256:39f1007881a42b01ce333ee1a135fa0628ccc59ed3a96cc0e8b715179eed4254","sha256:f0705402a3c80a99b78a2129b81fc215c7fe12b1998697a08c1cc6c67441152b"]
      - values: {"k":"4"}
        answers: ["sha256:a9bae67f1f80ff46ac5f1a0c1323407f0d41024710d589b01d600c5f7506e872","sha256:c95ea14f5fd8e166b1078bc4aa92f92c2148fa93f8f4b43fce91507e0902446e","sha256:deb2cd9c6e953bcc8b0abffd65f058a1be5bb6493412b94f3f4a65cf55a23821"]
      - values: {"k":"10^6"}
        answers: ["sha256:b229013c0afaf0f33efa35f5c98e4eed00c63095787235fd8e92a60b9896bb0a","sha256:b4f329d72f16c3445f8d68f4a64580141a17fcec11bd844b02cff83e711f1d91","sha256:4c7182e2befba87890afdfc069a250a07160615795ef5518b3d620d1f0b061e7"]
      - values: {"k":"0{,}01"}
        answers: ["sha256:f17389b034072e361ab013cb625bcf552faecc513ba0bf8c80047620fdf5afdf","sha256:7f9259981a4bce2a3f020eb012c795ef2df422568986779d2d0e208db06cb2b4","sha256:ba050f8e4e4de1b6a4e0a280f7900b12c466d3aa3cf25582e7c4defe39e25644"]
  - id: calor-agua
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuánto calor hace falta para calentar ${{m}}$ kg de agua de ${{t1}}\ ^\circ$C a ${{t2}}\ ^\circ$C? Usa $c = 4186$ J/(kg·K). Respuesta:
      julios.
    variants:
      - values: {"m":"2","t1":20,"t2":70}
        answers: ["sha256:ebf84f2154df886c76073f2ace299b963ddf07e2882a9cdc3eb7ea95191c3c7e","sha256:810fb3f513915f35a35f12e9035ecd143afe6ae3cf5b9dbccf11b208051c1bd7","sha256:2da39b0fe74430d47b6bec3a7f2600bba1523c8f365e03c95448e67d6df91044"]
      - values: {"m":"0{,}5","t1":15,"t2":95}
        answers: ["sha256:86b3f566adfebf087facbea45c3038e15aeec4c6a32f9f366bfa2bed3e8be7a3","sha256:25e7a79c4c22a39b0d0e98e1b885a7b02667bb0344d137586eea116b4f7eca98","sha256:e9733c189a44c7ef7fad236ea6f1f9f25576bb4cec608e0f706e8afc8e9c653a"]
      - values: {"m":"3","t1":10,"t2":40}
        answers: ["sha256:0adc67a0c56c7e41262da92b18a94f88ead7dbf220b8c21db8cfe9a45be4ee88","sha256:c819a3ad936ab9d1a9733e4f5bbbeff9dbf59bb77593aecd332cfd9f44c3dda0","sha256:03205a0dd8c3a5fde4645ddf1e1f741f6400ec38109ad22e3893831c02b1dcb8"]
      - values: {"m":"1{,}2","t1":25,"t2":100}
        answers: ["sha256:c3a875c41fc84fe41bb018f30e53fd698ab695baded71a93a73672b5f70e2df0","sha256:b2b5b0544e416d5afa5619f0ff144948bd02156c93a33592bfb8e95348596483","sha256:77e30d7fea61a00825f955bd56637b50ac89ee0a337d919e2a97732b1762fcff"]
      - values: {"m":"0{,}25","t1":4,"t2":84}
        answers: ["sha256:c2d26429c67b0f9e17ef740be1211217dc0121728b319844348a1587d83aca13","sha256:ff072782408c326a3fe69dd4e2bebc489384195c8e954d936fd2dbaa7ca11a27","sha256:7a9ba1b26d756d2eeddeecdb5f605be70a1ebe5031a556565ca93e52c18edccd"]
      - values: {"m":"5","t1":12,"t2":37}
        answers: ["sha256:f44aa0355b0fcc4105fef0ef5d098026b18c1c80922f932b0185334ccca179d2","sha256:3f15c5a808afd9d8b0c154d4d99d4652ddc5e6878263df4e93197e3be41538f3","sha256:3fdd2cfdbf788e6ba7f5e181fa7f0889b82ab6275a7a55f7f795544a9fe33710"]
  - id: ley-de-snell
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Un rayo de luz pasa del aire ($n = 1{,}00$) al {{medio}} ($n = {{n}}$) con un ángulo de incidencia de ${{g}}^\circ$ (respecto a la
      normal). ¿Cuál es el ángulo de refracción? Respuesta: grados, **con un decimal**.
    variants:
      - values: {"n":"1{,}33","medio":"agua","g":40}
        answers: ["sha256:75d5683d83c911f8ad15aacf21a6ffd92fa5761bdff81859f1cc7fbaa48bc6e5","sha256:c2f19b1461c56ce1a1d35d38b8a74e454f94479a3ee141d198d70a8b103cc241","sha256:1d8c82b43cc39713d8bcdf3d7dae23250b0210292bd67b8bf99bdcb96ed3d737"]
      - values: {"n":"1{,}5","medio":"vidrio","g":50}
        answers: ["sha256:ba7f41129f7f4ad606d0f39f5fde8a7f863c423fe119cf00325cc78ffb942009","sha256:1937792221166f3248774d51120f78ecf0dae7b4fa11fb563f6fae8609b882b4","sha256:32eca31c320553d6a37f060229292edafc8f194fcff8029f3785fe274f1228bf"]
      - values: {"n":"1{,}33","medio":"agua","g":25}
        answers: ["sha256:f5ffc227e757103bab9d1cd027ec687d64b207940877fb3b28244e227f7bc38a","sha256:a9c39704e9500a9f365d03d688ca2cc5376beccb8e822025c8968e1903ea6f72","sha256:85081b3e59e532634a5694de59d457d568738d0a63b9e5c20403412964f525b1"]
      - values: {"n":"2{,}42","medio":"diamante","g":45}
        answers: ["sha256:dd4eef6ace94402447a5df7950acf0c3a11cf9b470961a32c56e73361fa781ba","sha256:f6f48b84b5436ff78a246404a9afb7a135966923b11e3926b9b325b4cc902b0b","sha256:042c815c5a544c0313414a2ab775a8f244feeeb23530e84be09b11b95eb18fc1"]
      - values: {"n":"1{,}5","medio":"vidrio","g":15}
        answers: ["sha256:0a4fd47e7670da2722126b8c80eca8d3e355b44bb536f87c681d32220585288a","sha256:1e98f45381135ab781536ebfcb4d19133c8255a11e79cf4f5da5eb312e06f350","sha256:783f92fde772ca5bbc780e35a25456c232de5e1e63a35756ccabc4294d406a12"]
      - values: {"n":"1{,}33","medio":"agua","g":70}
        answers: ["sha256:720680ef9096289fce928b9f053c38854c7c54a4267973d7a339159a77671c2f","sha256:b8840d7889dfb077fe9a227afd48d08e628138fbe9280b18b088bd85b919c9ab","sha256:217121dddfad84253e52ad3a40d5ba224a182f9df20f4ac9a8d2e5a67651b5df"]
  - id: angulo-critico
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Para la luz que va del {{m1}} ($n = {{n1}}$) al {{m2}} ($n = {{n2}}$), ¿cuál es el ángulo crítico a partir del cual hay reflexión total
      interna? Respuesta: grados, **con un decimal**.
    variants:
      - values: {"m1":"vidrio de ventana","n1":"1{,}52","m2":"aire","n2":"1"}
        answers: ["sha256:a4f2aa954084b6ca27be3f461ec288d06585fbe48076bdca908f1869b13b9544","sha256:4a8fc58f642c35aaf675d60c0abcd0b515763f6fcff7f7eecb4bf69f460f4250","sha256:7953b55462e9c30b4f95ac1257ece2a82acfc151aa3b7c8bc983a5e9aa0b7019"]
      - values: {"m1":"agua","n1":"1{,}33","m2":"aire","n2":"1"}
        answers: ["sha256:8d16cccd610162695dee78f87aff58296b8ef59940c2171146cd2a7a04e3bdd0","sha256:456d2be9086c57326502390faba8aae11376e5a213933480414fa95559bf8041","sha256:c6331f2dc4455047da3493be4aa6f8819f8fa36afd6169023a5369dcbb211220"]
      - values: {"m1":"diamante","n1":"2{,}42","m2":"aire","n2":"1"}
        answers: ["sha256:f4f3be4c8e5baefb35791d1f43e55b4395882367d77c943438759db3a76c91a9","sha256:6e96b8c5cac06a60bf1af1674ffc75805f638726f8648547d1731e06b423de1c","sha256:5f1d6e1b94563e8182792745a1c72233823ef57749551be4179c9deeb2a381aa"]
      - values: {"m1":"vidrio","n1":"1{,}5","m2":"agua","n2":"1{,}33"}
        answers: ["sha256:c95231c155eafebe8eb1dbff99717383df7e96e9c1fe0d72c6b45f3b55a5fcb5","sha256:818f0abe6ce7883e8ef8efe0d79a4531e611c5055ae52374e367898ce0338676","sha256:b95b9d87090e2d59c699560d414b6aa4c296b8524eece3b1f3565eb1cba36d58"]
      - values: {"m1":"vidrio denso","n1":"1{,}6","m2":"aire","n2":"1"}
        answers: ["sha256:ad40ca8301ec3f830eb0b7f61aaa39ffbe69decba9b93b1ad3a121de21595f1d","sha256:fe89bf60cf2cc3cc2cc60c31f5736ec47a2da73045ea1f9d8a6f74de02b8d68b","sha256:a24cbbdd039a24e275dadcfbdf93e679bb5a9deb751f8d437e10c6a449cc2c1c"]
      - values: {"m1":"sílice (núcleo de fibra óptica)","n1":"1{,}46","m2":"aire","n2":"1"}
        answers: ["sha256:d212db17dde037ab5ea2f723ae01036530dd64b840b76970412e458c05101163","sha256:675499789ee5cc117359362450d5e492067839625a243077404c076f4692d4e6","sha256:1e424afd41a683b0469bdc7f4cb8bedd66b500ffaf988a795feb875e86d8cf62"]
  - id: eco
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Emites un sonido frente a una pared y oyes el eco ${{t}}$ s después. Con la velocidad del sonido en {{medio}} a ${{v}}$ m/s, ¿a qué
      distancia está la pared, en metros?
    variants:
      - values: {"t":"2{,}4","v":343,"medio":"el aire"}
        answers: ["sha256:6bea7c4399bd2b4d1ba2ac73706fbcbd66a63c0a481e6dd088be4e7bbf33dc02","sha256:d83097748c6b258252d13398837f83e9ef81934dc0980230f8169e066c4563d6","sha256:bb4ae9e214a4adc8e7b9381e5d6478d4a9033c9bcb3fae116c3f6a6e29f81deb"]
      - values: {"t":"0{,}8","v":343,"medio":"el aire"}
        answers: ["sha256:ea84aad908458b39e678af1529fffa8749409124695262db5450b12493104901","sha256:2e9d2cfd49eb4edebad7dd81556ff065a6499ce54d88cea8232ed1b4117a83f1","sha256:ae753a464acaff01c5d34982b2a7bc204c9872c45bf7cc8861668e005d61d761"]
      - values: {"t":"3","v":340,"medio":"el aire"}
        answers: ["sha256:cfb7dcc6dffcdfe148d173c499fca2cc071bce9cd1a2a3b1455f2b1cbbd135c3","sha256:faa190fac512230b1874d76205ee0fae2949852e23b1e6cc9c82042d07a5cd4b","sha256:d7da86a3aa3bba3980b024f14c4da3b16fc45fe852d89f22ce64c279039bebf1"]
      - values: {"t":"1{,}5","v":1480,"medio":"el agua (un sonar)"}
        answers: ["sha256:d249ee505fc695125c41f19376b3d159086732b8b44e39bf896c05f5da7ce463","sha256:38e793f55d9059e71fe94dd47c7ac42eab4006f2530b64e1aea6854df9a52395","sha256:63d3b8bda36f905901fd4cdc0da6908afcc3d130d05ced1ad56d660be82b2bb8"]
      - values: {"t":"0{,}6","v":343,"medio":"el aire"}
        answers: ["sha256:1e44063e42123a8348d5a262cf628a059317f88c49c3d4495fb80346a77f19c7","sha256:3dac6b4dfbe4def17f1397e87cd4fd9c127293adfd5c79df56c1df52008d76fc","sha256:1507ee859647ed949ebd7111413606f23c274e19364187daab9e7a11b236c493"]
      - values: {"t":"4{,}2","v":331,"medio":"el aire"}
        answers: ["sha256:85c594293d2dbab3bad59aa2548a5d4ac68ba94afd4c962da4193122e6f48d2b","sha256:ba629874641011d0e6fb3c43158db8f6f91ac1344345883157cb3d691e5c2170","sha256:d33be63ecc2ca954a05d07daee977cd1dfd246f1091dc31121f0ccb8dbbb2add"]
  - id: cuerda-fija
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Una cuerda de ${{L}}$ m, fija por los dos extremos, transmite ondas a ${{v}}$ m/s. ¿Cuál es la frecuencia de su modo fundamental
      ($f_1 = v/2L$), en Hz? Respuesta: la **parte entera** del resultado.
    variants:
      - values: {"L":"0{,}65","v":300}
        answers: ["sha256:534e00f466b5151ba11977daed3239f049e2bff748fea85ed8f1d5a8e4600636","sha256:2abf0ec7057e4c7bd18f2956eeff22f38edd76fabf46f883bd54f3c0503ed543","sha256:28e6cbc6365282f8bf63dcb454a313b82a8d79a34a44748711c75acaaa4c7de8"]
      - values: {"L":"0{,}4","v":250}
        answers: ["sha256:71fef96b325a4cd57694b017be705b502221534535a5913612f54960bb6f577c","sha256:a8a47e5b5e1f76972d8408d015818513fc08e620d3bd7632adff0d2fb9188c6c","sha256:c838686530c5cb3c98102c2afa5033329c54cec971621c8bea7a45a54074a6eb"]
      - values: {"L":"0{,}33","v":400}
        answers: ["sha256:979bc0f17a83edd79861375c2c06028d4fb4e40d7cdd26598991a59102efb0db","sha256:65a9313debfaf02a2ff8427daebbb13c165096793281caa83b37352418613d7e","sha256:5ddf0f3743b267a86e80cab89cdef0a4022edbd9072cab53523374ccfb301782"]
      - values: {"L":"1{,}2","v":180}
        answers: ["sha256:927145743cf31c83cdf7dbc54216d6dde696144ec480aff7b7f8c818cd7838f6","sha256:c7feedc5966218265b2a12df0c86abbfac6f14cbe51eb2cb5c8f337a55e94a49","sha256:76dc95d1e5895ac3e6d12eb329a3803b29838a57fb4efd4edbde1a91cdf8bda3"]
      - values: {"L":"0{,}75","v":330}
        answers: ["sha256:c6ada885263fb46a27c78e01cb1671da6587e12c4a756749931a55711757c683","sha256:e854cfcabee7c415692b769bf8c7962d05eb2eef7a40d7e60c0a18fb4fd0a902","sha256:796ee79801452d65c4635e4b4cc99caf563cf9f3f81d11656de3183542305898"]
      - values: {"L":"0{,}9","v":450}
        answers: ["sha256:e6c9b35f6a2ff4c36d7f06eed73842946f9ac7f3f058a03b6ded858f96250d45","sha256:59339dd5971cb92c5a9183af0d62047230f12f756787ab72ab98d6773cbffa0d","sha256:38399bed3cd41bee5dfffc8aacecb54ef523404e6be0e9d9abcb2cdbb62a3c3b"]
  - id: fusion-de-hielo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuánto calor se necesita para {{acc}} ${{m}}$ kg de {{que}}? El calor latente {{nombre}} es ${{L}}$ kJ/kg. Respuesta: julios.
    variants:
      - values: {"m":"0{,}3","L":334,"acc":"fundir","que":"hielo a $0\\ ^\\circ$C","nombre":"de fusión del hielo"}
        answers: ["sha256:0bba5f69787333a29c369bd68c20f0195bb31ddaecc4eeb476d5b10d654d0c31","sha256:e4dc25f65ed492336a32320856dff84f4fa95afdc96c3512040e4f364aa25dba","sha256:755e1ea20b1992581a579c994dbffbdd5c865082cfd81dba0c1a85aa6ffa5101"]
      - values: {"m":"2","L":334,"acc":"fundir","que":"hielo a $0\\ ^\\circ$C","nombre":"de fusión del hielo"}
        answers: ["sha256:bad47b67af6fab845eb01602a4b09c513af1f9814caa7808d464c36ed8b714c1","sha256:9c5c65cae48ebf4175d55371408d0219f568843e9719c70e8b8db3f2ccfaba00","sha256:20a3a22fed73ed68d300afa6780e595c138b0c8618c26ef80c96c6586cc092fc"]
      - values: {"m":"0{,}2","L":2260,"acc":"vaporizar","que":"agua a $100\\ ^\\circ$C","nombre":"de vaporización del agua"}
        answers: ["sha256:296506173bb00729e60001831144fb87d6fd60db7dce15d667647c533f3b5ad7","sha256:22697ad0e227fcea4037a09fd6c47c2bd8beadfb0c6710f86befc0cba2fb9d7d","sha256:b671de72b5f9bcca0e9a4851ffab6e55a75b64c3158bb649e09794b2066634ac"]
      - values: {"m":"1{,}5","L":2260,"acc":"vaporizar","que":"agua a $100\\ ^\\circ$C","nombre":"de vaporización del agua"}
        answers: ["sha256:a2713a628cd0200e28adbe4d2f3f88f05c359f193f5b39f25416e77e533a606f","sha256:b3481cefdf9d0d9e70ea14661bd0408b4645f8b259a29a308ad5c1a0d1298183","sha256:100950e6f8a6de21090a644d9939340d0bcb1b94ed18c7593a27274ad9bcc069"]
      - values: {"m":"0{,}8","L":334,"acc":"fundir","que":"hielo a $0\\ ^\\circ$C","nombre":"de fusión del hielo"}
        answers: ["sha256:130d88f2fc2e503a6a6cf332e55414d6db05fa1a15a37e37b1a8c8219164bde8","sha256:ffdeec7e47281307cdddbbc582ac57de6575c058601c5b3b848f8cc7d6beb299","sha256:2bf49a49dde2a06541c2f3978ea0ba6e39dea18338e37dddf6166ac7a0b795cd"]
      - values: {"m":"0{,}05","L":2260,"acc":"vaporizar","que":"agua a $100\\ ^\\circ$C","nombre":"de vaporización del agua"}
        answers: ["sha256:ebb000d6e2103e0248a575f0fa0951d0d040d75f00896f2c720c52fe40204f1c","sha256:513c84ee3066671808f8c209184c5cfb00f6576eff51cf0049925771343fec42","sha256:93fdc1ddb4f0eda85c1a006a672a778c089d3dd61402f37381bbc227aeae2ea7"]
  - id: presion-bajo-el-agua
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es la presión **absoluta** a ${{h}}$ m de profundidad en {{fluido}}? Usa $g = 10$ m/s$^2$ y una presión atmosférica de ${{P0}}$
      kPa. Respuesta: kilopascales.
    variants:
      - values: {"h":25,"fluido":"agua dulce ($\\rho = 1000$ kg/m$^3$)","P0":100}
        answers: ["sha256:c26bdfe84efd49dd3c947eac88731eff782b6ebad358db1fb428b35a3a14310d","sha256:c62415eb670be37b1764d782c2403b3b4a637a312e0321ab3bea3a613de3291b","sha256:172b1b9a72c200ee32c588446226884f4bf1924b304b435b967730c2d9ed8870"]
      - values: {"h":12,"fluido":"agua dulce ($\\rho = 1000$ kg/m$^3$)","P0":100}
        answers: ["sha256:5e43e41d4b2a56a2c10250b48d616edbccc4635a407869ce45ec6e74dc2f6c07","sha256:462e9b84d91679ff09a8cca90f76dfa4b3299e69bd20555426e04b231a6fbade","sha256:fe527ea2bb973fea20c2f2d148d797e5a0df3793349e166c66ee8ef434134436"]
      - values: {"h":45,"fluido":"agua de mar ($\\rho = 1025$ kg/m$^3$)","P0":101}
        answers: ["sha256:44732c2f11f7d39b1b603a3ec73f198eeea176b1305f7aa80938366b11b96f10","sha256:ed7c56982f03daa17f4fd1f68aa8db2ba176b6bb73c36725808aaca4b5fcb6b9","sha256:3b2f699f0280414ebca6a49b777847dfc11317b412392321bc4a20861caae81f"]
      - values: {"h":5,"fluido":"agua dulce ($\\rho = 1000$ kg/m$^3$)","P0":100}
        answers: ["sha256:0e0ed8d4c3e09c2f0145da51a7c3e40ca579e8d1c35d27076e175e292aa3d032","sha256:ff52a34f67604553a40c0dc1a441161346afa13d4d083f5971b8aa78108ddbe3","sha256:7165ed29e465836f1713d0d75db219e1730ad8c2babc22955c02c12518607341"]
      - values: {"h":100,"fluido":"agua de mar ($\\rho = 1025$ kg/m$^3$)","P0":101}
        answers: ["sha256:3001eb36ba9fe79c50b7ae28a4ec8f223b21072b4f00a2b29cd652bed7bae461","sha256:93b5785bfe1f27a38a814f25fbc0bbed3c4e98a460da0970824998d34d381aca","sha256:cdf6146344106d4dc358b15a05e27a4f2015867925414f2fa9c34a2a98445b5e"]
      - values: {"h":8,"fluido":"mercurio ($\\rho = 13\\,600$ kg/m$^3$)","P0":100}
        answers: ["sha256:cb2e5fe167d9cd866569227b07b1bae61368378f3c80444aaf68e4e27c1f3cbf","sha256:338ffdf2d69b5df959b73cb0bc206389c777ebc7a0006bdf9349d5152b35f4c9","sha256:e84276b693c2efd6d9b7717cda09466191a56abb7a74b362b682504916fec4ee"]
  - id: flotacion-madera
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un bloque de {{obj}}, de densidad ${{r}}$ kg/m$^3$, flota en un líquido de densidad ${{rf}}$ kg/m$^3$. ¿Qué porcentaje de su volumen
      queda sumergido? Respuesta: un número sin el símbolo % (cuatro cifras significativas si no es exacto).
    variants:
      - values: {"r":800,"rf":1000,"obj":"madera de roble"}
        answers: ["sha256:0994bf5cdb669696adf2470e1718d4fbce920565a7ab91a4d674bb3a3add8166","sha256:3b74a7012c73d352897d3c49b8500b16c5dcd82712fc5b110844393d4642e873","sha256:ef5dfa8511a05ae82cfed5cfd393ddebdfa80b123db9e3c8187f94603633b2dd"]
      - values: {"r":600,"rf":1000,"obj":"madera de pino"}
        answers: ["sha256:748db7b7f79c1b0101450b36bdedbadce4a74ad192c50de71d8cc0bc090025ad","sha256:e936ed0bb7de7a4b239c3da25822eb6640a790b3350ad6f2df064d0de523f1b7","sha256:286bcb55dfcb2e46e0e8da4ab505cd39160d7907c7cceff5fe55b23f5db47380"]
      - values: {"r":917,"rf":1025,"obj":"hielo"}
        answers: ["sha256:593760b222ac8d38670a925bc08311e032b9c493c1098fe4c2baecbf0c6f247a","sha256:c117d3d84dcaf4f0090a86a6162176cc40f6ae8f70a89de756a627af5e9b5742","sha256:ad2b9800aaa0d1ebd5a4e850d680b7c65975860a45d296a679cf16bf2e0c802c"]
      - values: {"r":500,"rf":1000,"obj":"madera de chopo"}
        answers: ["sha256:aa86f17fc55229b24468c1a98c1bc94795551b1c378e4354b66b5f296164eb95","sha256:a32b35550e566e1b95db0d2871e8df2935f3b42226ae7002139385f078b1ec4e","sha256:715d5d53ae89077461bb2ad18b63e776e237bb8284640d5ef04e2092b044921b"]
      - values: {"r":250,"rf":1000,"obj":"corcho"}
        answers: ["sha256:75025a60fa2049afd2374a09c1adcb06f9e300851f6f2028a195cf3eb31a3d97","sha256:714351c331b1e8b5eb2aec3bfe009554191e01edf2090f8c60ef83dc407d9a1d","sha256:1fe6a1af989eb99d0560e5772a2c0df70a077b0af673ca35b0719ad2d8fdb93c"]
      - values: {"r":750,"rf":1000,"obj":"madera de haya"}
        answers: ["sha256:55d1308b890a1676e4889cec01b50f2bf4a76416f959aa13fd7466397db83830","sha256:a0b23a4592d417ca7dd4c97acc70a3c03539a5d534c2ff0782c8fe34818c15e4","sha256:970c19697e018e67f02ad7dab3dfe6eac33a0d65e21b018f602157f73e641888"]
  - id: nivel-sonoro
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una fuente sonora puntual emite ${{P}}$ W de forma uniforme en todas las direcciones. ¿Cuál es el nivel de intensidad a ${{r}}$ m,
      en decibelios? Usa $I_0 = 10^{-12}$ W/m$^2$. Respuesta: el **entero más próximo**.
    variants:
      - values: {"P":"0{,}5","r":10}
        answers: ["sha256:a2ad6b95a8d9c71701bf3b5115180dd5b98f0bc61d0b22c702c333d7b3ceeb18","sha256:635567213c0bdcade9c15af019fbdb1b5c78c7c3e2fa40c1b1d00e0264bf5cb3","sha256:41c994e6e3102eb3ed1326424205eadc37458ecd2a2a1dc3eff12f255d70c958"]
      - values: {"P":"1","r":2}
        answers: ["sha256:7686c14918c4e5922d970f17bc12ea798ba31a1595f71ebc119ec601ca1476c0","sha256:0abe04ad7ef03e811d77959b880b39014386a6fd08a05a01db47bdd986f761f4","sha256:fcaa86ddf7e23f18b9bb45301370311e94626229b965d1b9c87d82f4106061c1"]
      - values: {"P":"0{,}01","r":1}
        answers: ["sha256:e413b053aadb76decb9a0f943aee4601ee11db72ea91ce30c6f7000efad144b3","sha256:b039f49983184cda4c8d39e9241a221bfbc11fdece49ea1717f1f14dedadc4e2","sha256:d2450925537f9271377ced3bbf7a75e711637418ef7b1b61921d8f07d5638675"]
      - values: {"P":"10","r":50}
        answers: ["sha256:ab069a1f84f08fa731f19e36f589af4ead15fa2910dc456fc769d816aa8b5c91","sha256:309db832c35ab5d6c920aa3f91b3cd185310bbcfa640451dd64f85d3ce93dc53","sha256:6987425337cbcda0c2eb5330248dc56b74634c09051de70358d097a2b38636cb"]
      - values: {"P":"0{,}1","r":5}
        answers: ["sha256:eeaea9908ac067e9cec9e7bf6995633d6babac3742c3cebbbb4c616e165cd524","sha256:867d34483d64f261e6a713de765370bd0e758fd58fc3c574622a512dc8cc99d9","sha256:11bcbf9a8e380481fbcc82808f01e4e944b68ff6e5a692eef86eaaeb738f46cd"]
      - values: {"P":"2","r":20}
        answers: ["sha256:ba821e23c4034dcf1bd3a777367ce703a93c306787452e5771f032f8675587cb","sha256:9478f5a18fea956fe90a4af118fb79b3c2a31a951d05a29cb5616a73495fa033","sha256:311723f78678779ce1f560adcb77834e01a4e0c6e737883f336ca63e8e5e45ef"]
  - id: efecto-doppler
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una sirena que emite un tono de ${{f}}$ Hz se {{s}} a un observador en reposo a ${{vs}}$ m/s. Con el sonido a $343$ m/s, ¿qué
      frecuencia oye el observador, en Hz? (Fórmula: ${{formula}}$.) Respuesta: la **parte entera** del resultado.
    variants:
      - values: {"f":1100,"vs":"20","s":"acerca","formula":"f' = f\\,\\dfrac{v}{v - v_s}"}
        answers: ["sha256:88326ef7b1f9d97cc4bb248b37e6ab0c6eb733524d23d87ddb05318d77ff042e","sha256:4377c8b2067270be3481188658000baff89bddc1496b0007bcfe67beabed0dec","sha256:10478bd0855a650d634cd061ab27bcae18f89fe194615cc6fd7728f793724d08"]
      - values: {"f":700,"vs":"30","s":"acerca","formula":"f' = f\\,\\dfrac{v}{v - v_s}"}
        answers: ["sha256:6f5849653e6db9b2743e7c35ba1d0f7912b64539a54d00a9062267a01a89b71f","sha256:6afc1ba5d28fea2dfeede2369bb820dfd341812655087bae2bef94556e75171d","sha256:9b4e7f3eb127934f120147f974a5114176e99f75a59eb23f9be27156b135e151"]
      - values: {"f":500,"vs":"25","s":"aleja","formula":"f' = f\\,\\dfrac{v}{v + v_s}"}
        answers: ["sha256:bbeeb1e6656a58a4708b11168f503f07f3f2a406d92b4afbbc656f870f213159","sha256:4523fb24a773a3f02ccdc9a64da1b83768e637389491b370ea86bacee863bb64","sha256:0e54c9d66aea618932154d6c4aca3ac0acdf6d1a8f270bb30e1cf4dca0055f30"]
      - values: {"f":1200,"vs":"15","s":"aleja","formula":"f' = f\\,\\dfrac{v}{v + v_s}"}
        answers: ["sha256:4e4f2766863bb0513a4be2ff17cd4235a861dfd286ae5146d08e95b5dfd355ee","sha256:6b8544291e876b72d5d73fec18c43f481970d64193201ec74cef350bd379b854","sha256:bea712c98e49eb54cdb0cb24249f556fb2c182d22658d129b3a5a0a8335e861e"]
      - values: {"f":880,"vs":"34{,}3","s":"acerca","formula":"f' = f\\,\\dfrac{v}{v - v_s}"}
        answers: ["sha256:42b4a990771bffab716cb0584b60fb0d4ec10a64c5dcaf56f0f6cdeb5a1b845e","sha256:1d887bbdf19403a04fb47abb77a9362fa93a17c25f7b89c96c8b612efe0edb8a","sha256:a536adbf4f80722de916215c14a589636fa329f55c8465454212b2e83687e713"]
      - values: {"f":600,"vs":"40","s":"aleja","formula":"f' = f\\,\\dfrac{v}{v + v_s}"}
        answers: ["sha256:22c6aeda32b7f0e18b520bccde3e4e3a09a305abe23f3fccb130945aafccba72","sha256:021b78facebf21ca21cb9c0f48d0a1e0175cdaf78f63fbcd0ae5bfd5343d6161","sha256:7bacdfda51a7317d6b64bffb301a90adffd64d50e1b4e7bf0e0bf0216cd055ef"]
  - id: potencia-del-sol
    tier: 3
    prompt: |
      La estrella {{nom}} tiene un radio de ${{R}}\cdot 10^{{{eR}}}$ m y una temperatura superficial de ${{T}}$ K. Tratándola como cuerpo negro
      ($P = 4\pi R^2\,\sigma T^4$, con $\sigma = 5{,}670374419\cdot 10^{-8}$ W/(m$^2$K$^4$)), ¿cuál es su potencia, en unidades de
      $10^{{{e}}}$ W? Respuesta: **dos decimales**.
    variants:
      - values: {"nom":"Sirio A","R":"1{,}19","eR":9,"T":9940,"e":26}
        answers: ["sha256:b98b66d71e9c55f8282fc4f7e9abc02faa3733af75d3572dba110e5a4d4c400d"]
      - values: {"nom":"Próxima Centauri","R":"1{,}073","eR":8,"T":3042,"e":23}
        answers: ["sha256:44ff80f32e6faf64a242a28fafdedc76aa15be0eae7ad9f7060937baf71363b8"]
      - values: {"nom":"Betelgeuse","R":"5{,}315","eR":11,"T":3600,"e":31}
        answers: ["sha256:4682e00c7eb68355719dcabeb7b5a8e8063c8801fc01377e0c33c7822413f512"]
      - values: {"nom":"Rigel","R":"5{,}489","eR":10,"T":12100,"e":31}
        answers: ["sha256:8bf40d0515e8461bd30866c2eb8ac250ad268195b2f141cc4e8b640d5c81d406"]
      - values: {"nom":"Vega","R":"1{,}642","eR":9,"T":9602,"e":27}
        answers: ["sha256:26a4176157a0ef2773bce67501ebc1ccfb107b816cfe733fcd0cef3702f6262c"]
  - id: conduccion-pared
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Una pared de {{mat}} de ${{L}}$ m de espesor y ${{A}}$ m$^2$ de área (conductividad $k = {{k}}$ W/(m·K)) separa un interior a ${{dT}}$ K más
      caliente que el exterior. ¿Cuánto calor pasa por segundo (potencia, en vatios) por conducción, $P = kA\,\Delta T/L$?
    variants:
      - values: {"L":"0{,}25","A":"10","k":"0{,}8","dT":15,"mat":"ladrillo"}
        answers: ["sha256:916d9a2f0b4bf51501845a933591807c33277c7f58a1f31d4db749ddf5c10857","sha256:63d7524353b50495643cd4e9c42ef51014c4e1a17c264762aa3d39ab5832e9c0","sha256:613522721f5c74641c29d83212856e274b4733758961ad8ed368859698ed82e8"]
      - values: {"L":"0{,}1","A":"12","k":"0{,}04","dT":20,"mat":"lana de roca"}
        answers: ["sha256:32b2b350a29343cffe901a9da6e098c05bb72f6c0ca24348061c30931e565c1f","sha256:2e7db4e85df3d56bdc3ea66768780b2ed2f6ef3491590595fbb947668912d7d1","sha256:09c4fe3b33597ed19c03f33987112ec2e74689269126ccf60ec9e3362be30ba4"]
      - values: {"L":"0{,}3","A":"8","k":"0{,}8","dT":25,"mat":"ladrillo"}
        answers: ["sha256:2ae45048a755fc827f9a66a3b14903a56df7e7ac8ad50e5e8156673be4feffd6","sha256:883a319d6a99cfe0f8ded8230498fdd0768c879116494d100f33341f63163786","sha256:569c1533126ef4b1c6ac0c817297723ec01f3d996bef89396c3830c205154379"]
      - values: {"L":"0{,}05","A":"2","k":"1","dT":30,"mat":"vidrio"}
        answers: ["sha256:0cf8e983c130e09d7a6882ea7add982fd746adb1ea93f1f4ca544a1e8e6741b9","sha256:4fd990f26b429c33a87c208013db683e8331d9526f368f803dcc958f4e6218a1","sha256:bf7f1784a565c0a81c9681570cf6e2afdf0803a259d8acb7f5bb6f26b40e3b98"]
      - values: {"L":"0{,}2","A":"15","k":"0{,}12","dT":18,"mat":"madera"}
        answers: ["sha256:40650a8c9d77c377ef1da33639a7f1d2c3fcacec08c1f5302d87841107e0059a","sha256:2e4991e1636029a50f415dbea043b6942b24acb9ae9d5b11b9a85059fb91ddb9","sha256:eb876f244db5230394425284fd4282fca2aa98be06329aaac50d5a3fffcb67bd"]
      - values: {"L":"0{,}004","A":"1{,}5","k":"0{,}8","dT":20,"mat":"ladrillo"}
        answers: ["sha256:d525a7cfd81aafc2d2c9cb14e67dfc21299f7c4fb2e1cda75fcde9ef25895868","sha256:d14db00ea420423f5640f6cb4269e8541a3fc0c101738f7434a357b05cdc9a19","sha256:63959862d66db560474c5e45a6d832f18592d483405ef3b75f72ac4c94cb2fa0"]
  - id: rendimiento-de-carnot
    tier: 3
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es el rendimiento máximo (de Carnot, $1 - T_f/T_c$) de una máquina térmica que opera entre una fuente caliente a ${{Tc}}$ K y
      una fría a ${{Tf}}$ K? Respuesta: en %, sin el símbolo (cuatro cifras significativas si no es exacto).
    variants:
      - values: {"Tc":750,"Tf":300}
        answers: ["sha256:ec4171c6f70cde8486c1e18080f233f380343e07205819a4393c10dc8a694ff7","sha256:43479cf920a24f6a9319873527362c20311224adbe0f71bed9e3cff5b784c6a9","sha256:a69764354f3176104f01b2a61246048fc15d3be45e06857823dfb7d6f7f3f091"]
      - values: {"Tc":800,"Tf":300}
        answers: ["sha256:7c430caf1bcafbd4dbe2c9d3bd7a1686366c00b584e0ecdae25efd1e8ddd3cf8","sha256:6790123c9d5c952d32d138432445b3ea10f481ac69fd736c5084fa4f8a891123","sha256:e4e1fd82113cc3ef5752cc2ffb28813892f859671a7df421ef2f746563efb6f4"]
      - values: {"Tc":500,"Tf":350}
        answers: ["sha256:44b413f87a36da00121fba24e2c4c2f0a3bf8226ad396464a03120013c3d431c","sha256:e91dca95dac6fc900b71df62b47d5c2591f37d2414b48f3be47d3f16949485d7","sha256:53adaca0cde8c465448a3948774d219f08a6c7ec6d3b76031abdd815874e71ce"]
      - values: {"Tc":1200,"Tf":300}
        answers: ["sha256:b7bd5d2cf435506c513a7e5ece5b0bff351a878cce9045506f890cd21f65d660","sha256:4446d9a87beff0c705e46dfb8fb085664910862be8bfd64b77daca0cec5f8bb2","sha256:6940480dcea50cc22394fc0281725d0b3a9c88827515f1d40aeaabfd4550bcee"]
      - values: {"Tc":373,"Tf":293}
        answers: ["sha256:5e0e90b387849b7cde238087f7a67d7ee4d6f5f55302ba14ea8590c3f5ff706e","sha256:74381a9aeb683b873f1148067e16093545fe8c4a09de1347eb0b7991d37e5bde","sha256:859aff2436cc8f31f98b00438b8cdd000c808a3e06a87fa82c0ae54ae3a513b9"]
      - values: {"Tc":900,"Tf":450}
        answers: ["sha256:8e027ace18f4bf9a7e1739d4ad1c4e3203104bf092688a4258fecbc937b31b88","sha256:15ee26775dd610126034cc045a9c94bea8aff96093934867dce162ba0300a784","sha256:5d5dcad79831d6083b3a2c40b21f7c3b029f2e6ac752cc2444553fe718190735"]
  - id: mezcla-de-aguas
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Se mezclan ${{m1}}$ g de agua a ${{T1}}\ ^\circ$C con ${{m2}}$ g de agua a ${{T2}}\ ^\circ$C (sin pérdidas al exterior). ¿Cuál es la
      temperatura final de equilibrio, en $^\circ$C?
    variants:
      - values: {"m1":200,"T1":80,"m2":300,"T2":20}
        answers: ["sha256:d06e7baca8d5e9efcd9790b13f4d204435802f36286aa881c234b7d757630313","sha256:52301c518ac7256ba8de3686590c70a5073b8a09164acbfddb98810ab2ba5ccb","sha256:3571191e672ff8e640f43c707a1cb5a6977c5e9d3694d93320962460a070db33"]
      - values: {"m1":100,"T1":90,"m2":400,"T2":15}
        answers: ["sha256:f33918d345de379f75f8ffcb34a1913b8d2a248aa690779067c910caeb5026af","sha256:6d6467c0fe203a5d2d1a33a67e4c6ea601a44bdc8411a69fd1876fa74b67af47","sha256:a25778940ce47b61b434f9c03480d1865f1a24cb1e362232b937c09a1093d6dc"]
      - values: {"m1":250,"T1":60,"m2":250,"T2":20}
        answers: ["sha256:ea0bf292b1d800ffa4bdcfd35694499fc52147d2b0a170d1d12226a8bcc4af66","sha256:5131862aee577b2acd69283bd01f4f702f9b4ec856d46d91a3460446576959f5","sha256:fbdbddf72de6fcf9b3c1a050046d1fd0cd6602719b32ab25d69e91994b15ea50"]
      - values: {"m1":150,"T1":70,"m2":350,"T2":10}
        answers: ["sha256:0b16f2415fd312d6f2376e7e386ead6dc5a8fea55c2b6b4b15ed2ec737158a47","sha256:3aeda4fd55a9d709b2d9b571e3b2827f316de5606a124e014ee7ba7f359bc0e8","sha256:82fe7b62b95d3781fb51a688325db3c48277d349ebae24e902efeb6ccb23ead1"]
      - values: {"m1":500,"T1":40,"m2":100,"T2":4}
        answers: ["sha256:83dc0d12f76b2017033ad09a570ce10af6a2b090127184efd607914e941130fb","sha256:1402315fd40c30e1e6312010679618b41405cbe580aae53f2b868f5fd57d0b0b","sha256:2cda231cdfccf877033791d9302477de401c4176ee737c5e97c9ecb58b3fe1a7"]
      - values: {"m1":300,"T1":95,"m2":200,"T2":25}
        answers: ["sha256:672cc2339af07fbd876010ee9fc1eed0d0e9b99520077260fc021ff1d7daefc0","sha256:4b52b327e457c06770a0d237f81dc8590b2d1fc4bd7f9a86b53d3a975c722695","sha256:7debfc6e4f49f894d9c269a84f61e49d987e6d2fd9ee4d1e8a2a6e0054594fe6"]
  - id: r-onda-materia
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué transporta una onda?
    options:
      - |
        Materia y energía
      - |
        Energía, pero no materia
      - |
        Materia, pero no energía
      - |
        Ni materia ni energía
    answers: ["sha256:835144c4f79b66fc5e2a59eb539acac9cd5643a39a73c1d639bbe2163ff2ec72"]
  - id: r-sonido-vacio
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se propaga el sonido en el vacío?
    options:
      - |
        Igual que en el aire
      - |
        Más rápido que en el aire
      - |
        No se propaga
      - |
        Solo si es agudo
    answers: ["sha256:cfe806f51974ae7377fb2893e5ed85cae42bb0a433708446927dd9dcfccff8d8"]
  - id: r-calor-temperatura
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué diferencia hay entre calor y temperatura?
    options:
      - |
        Calor es energía que se transfiere; temperatura mide la agitación de las partículas
      - |
        Son lo mismo
      - |
        La temperatura es una forma de energía
      - |
        El calor se mide en grados
    answers: ["sha256:ce63c1b0682bb32e829bd169b6e13b95f5d3adfa8f2c3b1730396f6c1ed3d6ef"]
  - id: r-kelvin
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos kelvin son $25\ ^\circ$C?
    answers: ["sha256:c19d72f4f24df349a944c199088c8cfdc9f835c2453cff196438ac32386c6c6b","sha256:5e6171a7925f8d0bfb056dcfce52365a40ce34b816c25c2d049fccb97a6ab1b1","sha256:674707f607b059198e24647c92b7b2978d55717c2664214a90b62e9a2721afa1"]
  - id: r-tres-db
    tier: 2
    type: opcion
    review: true
    prompt: |
      Una máquina produce $60$ dB. Si se enciende otra igual al lado, ¿qué nivel total se mide aproximadamente?
    options:
      - |
        $60$ dB, el doble
      - |
        $90$ dB
      - |
        $31{,}5$ dB
      - |
        Unos $63$ dB
    answers: ["sha256:804c0989ef6c880831b82bc001a7d73e5837b38de10ffc0809ced93798559c39"]
  - id: r-empuje
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿De qué depende el empuje de Arquímedes sobre un objeto sumergido?
    options:
      - |
        Del peso del objeto
      - |
        Del volumen sumergido y de la densidad del fluido
      - |
        De la profundidad a la que está
      - |
        De la forma del recipiente
    answers: ["sha256:16ad81e2d18f87441c67053463001cc0a015a781ff13cad5087057ffd36639d4"]
---

# Ondas, luz, calor y fluidos

Las **ondas** transportan información y energía: el sonido, la luz, la radio, el wifi, los terremotos. El **calor** y la **temperatura** explican desde por qué se enfría el café hasta
el clima de un planeta. Los **fluidos** (aire y agua) explican por qué flotan los barcos y vuelan los aviones. Este nodo reúne las ideas centrales de cada uno, con las demostraciones
sencillas y las cuentas que usan los ingenieros.

## Objetivos

Al terminar sabrás:

1. Describir una onda con amplitud, longitud de onda, periodo y frecuencia, y aplicar $v = \lambda f$.
2. Entender el sonido (decibelios, eco, Doppler) y la luz (espectro, reflexión, refracción, fibra óptica, lentes).
3. Distinguir temperatura y calor; calcular calor sensible y latente y hacer balances térmicos.
4. Conocer los mecanismos de transferencia de calor y la idea de rendimiento (Carnot).
5. Calcular presiones hidrostáticas y empujes (Arquímedes), y entender continuidad y Bernoulli.

> [!question] Test de entrada
> 1. Si el sonido recorre $343$ m en $1$ s, ¿qué distancia recorre en $3$ s? 2. ¿A cuántos grados Celsius hierve el agua a nivel del mar? 3. ¿Por qué flota un barco de
> acero si el acero se hunde?
>
> Respuestas: $1029$ m; $100\ ^\circ$C; porque su **forma** desaloja mucha agua y la densidad **media** del barco es menor que la del agua.

## 1. Para qué sirve

- **Comunicaciones**: radio, wifi, fibra óptica, radar, ecografías.
- **Energía y clima**: aislamiento de edificios, paneles solares, el balance de energía de la Tierra.
- **Ingeniería**: refrigeración, motores, calderas, presas, submarinos, tuberías.
- **Salud**: ruido y audición, termometría, imagen médica.

## 2. Ondas

> [!practico]
> Tira una piedra a un estanque: las ondas avanzan hasta la orilla, pero una hoja que flota solo sube y baja en su sitio. Una
> onda transporta **energía**, no materia. Se describe con lo alta que es (**amplitud**), la distancia entre dos crestas
> (**longitud de onda**) y cuántas crestas pasan por segundo (**frecuencia**). Y siempre se cumple: velocidad = longitud de
> onda × frecuencia.


Una **onda** es una perturbación que se propaga y transporta **energía y cantidad de movimiento sin transportar materia** (las partículas del medio oscilan en torno a su posición).

- **Transversal**: la oscilación es perpendicular a la propagación (ondas en una cuerda, luz).
- **Longitudinal**: la oscilación es paralela (sonido: compresiones y rarefacciones del aire).

Una onda periódica se describe con: **amplitud** $A$ (elongación máxima), **longitud de onda** $\lambda$ (distancia entre dos puntos iguales consecutivos), **periodo** $T$, **frecuencia**
$f = 1/T$ (Hz). En un periodo la onda avanza una longitud de onda, luego

$$
v = \lambda f .
$$

Esta relación vale para **todas** las ondas. La velocidad depende **del medio**, no de la fuente: la frecuencia la fija la fuente y al cambiar de medio cambia $\lambda$, no $f$.

**Superposición e interferencia.** Dos ondas que coinciden en un punto se **suman**. Si están en fase hay **interferencia constructiva** (amplitud suma); en oposición de fase,
**destructiva** (se anulan). Los auriculares con cancelación de ruido usan la interferencia destructiva: emiten una onda de signo opuesto al ruido.

**Ondas estacionarias.** En una cuerda de longitud $L$ fija por ambos extremos solo caben ondas con un número entero de semilongitudes: $L = n\frac{\lambda}{2}$, es decir, frecuencias
$f_n = n\,\dfrac{v}{2L}$ ($n = 1, 2, 3, \dots$): el **fundamental** y los **armónicos**. Así funcionan las cuerdas de una guitarra: al acortar la cuerda con un dedo ($L$ menor) sube la frecuencia.

**Reflexión, refracción y difracción.** Una onda se **refleja** en una superficie, cambia de dirección al pasar a otro medio (**refracción**) y **rodea** obstáculos y aberturas de tamaño comparable a su
longitud de onda (**difracción**): por eso oyes tras una esquina, pero no ves.

## 3. Sonido

> [!practico]
> El sonido es aire que se aprieta y se afloja muy deprisa: por eso no hay sonido en el espacio. Va a unos $343$ m/s (en un
> segundo recorre tres campos de fútbol y medio), mucho más despacio que la luz: por eso ves el relámpago antes de oír el
> trueno. El oído funciona «por multiplicación»: un sonido diez veces más intenso no nos parece diez veces más fuerte, y por
> eso se mide en **decibelios**, una escala logarítmica.


El sonido necesita un **medio material** (no se propaga en el vacío). En el aire, a $20\ ^\circ$C, $v \approx 343$ m/s; depende de la temperatura ($v \approx 331 + 0{,}6\,T_{^\circ\text{C}}$ m/s)
y es mayor en líquidos ($\approx 1480$ m/s en el agua) y sólidos. El oído humano percibe aproximadamente de $20$ Hz a $20\,000$ Hz.

**Eco y distancias.** El eco tarda $t = \frac{2d}{v}$ (ida y vuelta): con $t = 1{,}2$ s, $d = \frac{343\cdot 1{,}2}{2} \approx 206$ m. Así funcionan el **sonar** y la ecografía. La **tormenta**:
cuenta los segundos entre el relámpago y el trueno y multiplica por $343$ m/s.

**Intensidad y decibelios.** La intensidad $I$ (W/m$^2$) es la potencia por unidad de área. El oído percibe en escala **logarítmica**, y por eso se usa el **nivel de intensidad**

$$
\beta = 10\log_{10}\frac{I}{I_0}\ \text{dB}, \qquad I_0 = 10^{-12}\ \text{W/m}^2\ \text{(umbral de audición)} .
$$

**Cada $+10$ dB multiplica la intensidad por $10$; $+3$ dB, aproximadamente por $2$.** Dos fuentes iguales suman $3$ dB, no el doble. Una fuente puntual que emite $P$ en todas direcciones
da $I = \dfrac{P}{4\pi r^2}$: la intensidad cae con el **cuadrado de la distancia** (al duplicar la distancia, $-6$ dB). Como orientación: $\approx 60$ dB es una conversación, $\approx 85$ dB
exposición prolongada ya daña el oído, $\approx 120$ dB está cerca del umbral de dolor.

**Efecto Doppler.** Si la fuente se **acerca** a un observador con velocidad $v_s$, la frecuencia percibida **aumenta**: $f' = f\,\dfrac{v}{v - v_s}$; si se **aleja**, $f' = f\,\dfrac{v}{v + v_s}$. Es el
cambio de tono de una ambulancia que pasa, y el principio del radar de velocidad y, con un efecto análogo en la luz (con otra fórmula), de la medida del movimiento de las galaxias (el corrimiento al rojo).

## 4. La luz y el espectro electromagnético

> [!practico]
> La luz visible es solo un trocito de una familia enorme de ondas: las de radio, el wifi, el microondas, el infrarrojo
> de los mandos, el ultravioleta que quema la piel, los rayos X de las radiografías. Todas son la misma cosa, ondas
> electromagnéticas, y solo cambia su longitud de onda. Cuanto más corta, más energía lleva cada «paquete» de luz.


La luz es una **onda electromagnética** (campos eléctrico y magnético que oscilan, tema de [[fis-electromagnetismo]]) que **no necesita medio** y viaja en el vacío a
$c = 299\,792\,458$ m/s (valor exacto por definición). Se cumple $c = \lambda f$. El **espectro** ordena las ondas electromagnéticas por frecuencia:

| Región | Longitud de onda (orden de magnitud) | Uso |
|---|---|---|
| Radio | $> 1$ m | emisoras, TV |
| Microondas | $1$ mm – $1$ m | wifi ($2{,}4$ GHz $\to \lambda = 12{,}5$ cm), hornos ($2{,}45$ GHz), radar, telefonía |
| Infrarrojo | $\mu$m – mm | mandos, cámaras térmicas, calor |
| **Visible** | **$\approx 400$ – $700$ nm** | visión (violeta → rojo) |
| Ultravioleta | $10$ – $400$ nm | esterilización, bronceado |
| Rayos X | $< 10$ nm | radiografías |
| Rayos gamma | $\ll 1$ nm | medicina nuclear, astrofísica |

Cuanto menor es $\lambda$ (mayor $f$), **más energía por fotón**: los rayos UV, X y $\gamma$ son ionizantes; la radio, no. El wifi y el móvil emiten microondas **no ionizantes** de potencia
baja.

## 5. Óptica geométrica

> [!practico]
> Mete una pajita en un vaso de agua: parece doblada. La luz cambia de dirección al pasar del agua al aire porque va a
> distinta velocidad en cada medio (**refracción**). Y si intentas salir del agua con un ángulo muy tumbado, la luz no sale:
> rebota entera (**reflexión total**). Así viaja internet por fibra óptica, rebotando dentro de un hilo de vidrio.


Cuando los objetos son mucho mayores que $\lambda$, la luz se describe con **rayos** que van en línea recta.

- **Reflexión**: el ángulo de incidencia es igual al de reflexión (medidos respecto a la **normal**).
- **Refracción**: al pasar de un medio a otro, la luz cambia de dirección según la **ley de Snell**

$$
n_1 \sin\theta_1 = n_2 \sin\theta_2, \qquad n = \frac{c}{v}\ \text{(índice de refracción)} .
$$

Índices típicos: aire $\approx 1{,}000$; agua $1{,}33$; vidrio $\approx 1{,}5$; diamante $2{,}42$. **Ejemplo resuelto:** de aire a vidrio con $\theta_1 = 30^\circ$: $\sin\theta_2 = \frac{\sin 30^\circ}{1{,}5} = 0{,}333$,
$\theta_2 \approx 19{,}5^\circ$: el rayo se **acerca a la normal** al entrar en un medio de mayor índice (ópticamente más denso).

- **Reflexión total interna**: al pasar a un medio **menos** denso ($n_1 > n_2$) el rayo se aleja de la normal; a partir del **ángulo crítico** $\sin\theta_c = \frac{n_2}{n_1}$ no sale y se refleja del todo. Para
  vidrio a aire, $\theta_c = \arcsin\frac{1}{1{,}5} \approx 41{,}8^\circ$. Es la base de la **fibra óptica**: la luz queda atrapada en el núcleo y recorre kilómetros con pérdidas mínimas, llevando la mayor parte de internet.
- **Lentes delgadas**: $\dfrac{1}{f} = \dfrac{1}{d_o} + \dfrac{1}{d_i}$, con $f$ la distancia focal, $d_o$ la del objeto y $d_i$ la de la imagen. Una lupa ($f = 10$ cm) con un objeto a $5$ cm da $\frac{1}{d_i} = \frac{1}{10} - \frac{1}{5} = -\frac{1}{10}$,
  $d_i = -10$ cm (imagen **virtual**, derecha y ampliada $\times 2$). Los ojos, las cámaras, los microscopios y los telescopios son sistemas de lentes.

## 6. Temperatura y calor

> [!practico]
> La **temperatura** dice cuánto se agitan las partículas de algo; el **calor** es energía que pasa de lo caliente a lo frío.
> Para calentar agua hace falta mucha energía (por eso el mar tarda en calentarse y suaviza el clima), y para fundir hielo o
> hervir agua hace falta energía extra **sin que cambie la temperatura**: mientras el hielo se funde, el vaso sigue a
> $0\,^\circ$C.


La **temperatura** es una medida de la agitación de las partículas (en un gas ideal, es proporcional a su energía cinética media); el **calor** $Q$ es la **energía que se transfiere** entre cuerpos por una diferencia de temperatura. Un
vaso de agua caliente no «contiene calor»: tiene energía interna; el calor es la transferencia.

**Escalas.** Celsius ($0\ ^\circ$C fusión del hielo, $100\ ^\circ$C ebullición del agua a nivel del mar), Fahrenheit y **Kelvin**, la escala absoluta: $T_K = T_C + 273{,}15$. El **cero absoluto** ($0$ K $= -273{,}15\ ^\circ$C) es el límite inferior.

**Calor sensible.** Para cambiar la temperatura de una masa $m$: $Q = m\,c\,\Delta T$, con $c$ el **calor específico**: el agua tiene $c = 4186$ J/(kg·K), valor alto: por eso el mar modera el clima y
el agua se usa para refrigerar. **Ejemplo resuelto:** calentar $1{,}5$ L de agua ($1{,}5$ kg) de $15$ a $100\ ^\circ$C: $Q = 1{,}5\cdot 4186\cdot 85 = 533\,715$ J. Con un hervidor de $2$ kW: $\frac{533\,715}{2000} \approx 267$ s
$\approx 4{,}4$ min (sin pérdidas).

**Calor latente.** En un **cambio de fase** la temperatura no cambia mientras se absorbe energía: $Q = m\,L$. Fusión del hielo: $L_f = 334$ kJ/kg; vaporización del agua: $L_v = 2260$ kJ/kg (vaporizar
cuesta **casi siete veces** más que fundir). Por eso un golpe de vapor quema mucho más que agua a $100\ ^\circ$C.

**Balance térmico (calorimetría).** Si dos cuerpos aislados intercambian calor, lo que pierde el caliente lo gana el frío: $\sum Q = 0$. **Ejemplo:** $0{,}1$ kg de agua a $90\ ^\circ$C con $0{,}4$ kg a $10\ ^\circ$C:
$0{,}1(90 - T) = 0{,}4(T - 10)$, luego $T = \frac{9 + 4}{0{,}5} = 26\ ^\circ$C.

**Dilatación.** Casi todo se dilata al calentarse ($\Delta L = \alpha L\,\Delta T$): por eso los puentes y las vías llevan juntas.

## 7. Transferencia de calor

> [!practico]
> El calor viaja de tres maneras: por **contacto** (una cuchara metálica en la sopa se calienta por el mango), **arrastrado por
> un fluido** (el aire caliente sube desde el radiador) y por **radiación** (el calor del Sol o de una hoguera, que llega
> sin tocar nada, incluso a través del vacío).


- **Conducción**: por contacto, sin movimiento de materia. $P = \dfrac{k\,A\,\Delta T}{L}$, con $k$ la **conductividad** del material ($k \approx 0{,}8$ W/(m·K) el ladrillo; $0{,}04$ la lana de roca;
  $400$ el cobre). Una pared de $10$ m$^2$ y $20$ cm de ladrillo con $\Delta T = 20$ K pierde $\frac{0{,}8\cdot 10\cdot 20}{0{,}2} = 800$ W: el **aislamiento** reduce $k$ o aumenta $L$.
- **Convección**: por movimiento de un fluido (el aire caliente sube; las corrientes del océano; los radiadores).
- **Radiación**: ondas electromagnéticas, **sin medio**. Todo cuerpo emite con potencia (**ley de Stefan-Boltzmann**, cuerpo negro) $P = \sigma A T^4$, con $\sigma = 5{,}670374419\cdot 10^{-8}$ W/(m$^2$K$^4$), una
  constante que sale **exactamente** de $h$, $k_B$ y $c$ ($\sigma = \frac{2\pi^5 k_B^4}{15\,h^3c^2}$). La potencia crece con la **cuarta potencia** de la temperatura absoluta.

**Ejemplo resuelto (el Sol y la Tierra).** El Sol ($R = 6{,}957\cdot 10^8$ m, $T = 5772$ K) emite $4\pi R^2\sigma T^4 \approx 3{,}83\cdot 10^{26}$ W. A la distancia de la Tierra ($1{,}496\cdot 10^{11}$ m),
la intensidad es $\frac{3{,}83\cdot 10^{26}}{4\pi(1{,}496\cdot 10^{11})^2} \approx 1361$ W/m$^2$ (la «constante solar»). Una Tierra **sin atmósfera**, que refleja el $30\,\%$ y reemite como cuerpo negro, estaría en equilibrio cuando
$\frac{S(1-a)}{4} = \sigma T^4$: $T = \left(\frac{1361\cdot 0{,}7}{4\sigma}\right)^{1/4} \approx 255$ K ($-18\ ^\circ$C). La temperatura media real es $\approx 288$ K ($+15\ ^\circ$C): los
**$\approx 33$ K de diferencia** son el **efecto invernadero** de la atmósfera, que retiene parte de la radiación infrarroja. Con unas pocas fórmulas se entiende por qué el planeta es habitable.

## 8. Primera idea de termodinámica

> [!practico]
> Ningún motor puede convertir todo el calor en movimiento: siempre se pierde una parte hacia un sitio más frío. Cuanto
> mayor es la diferencia de temperatura entre lo caliente y lo frío, mejor puede ser el motor, pero hay un tope que ninguna
> ingeniería puede superar.


**Primer principio:** la energía se conserva. $\Delta U = Q - W$: la variación de energía interna es el calor **recibido** menos el trabajo **realizado** por el sistema. **Segundo principio** (versión
de Clausius): el calor fluye **espontáneamente** del cuerpo caliente al frío, nunca al revés sin gastar trabajo. De él sale un **límite** al rendimiento de cualquier máquina térmica que opere entre
$T_c$ (caliente) y $T_f$ (fría), el **rendimiento de Carnot**:

$$
\eta_{\max} = 1 - \frac{T_f}{T_c} .
$$

Una central o un motor entre $600$ K y $300$ K no puede pasar del $50\,\%$, por buena que sea la ingeniería. Un frigorífico hace lo contrario: gasta trabajo para llevar calor de frío a caliente. La
**entropía** (a estudiar en [[fis-termo-estadistica]]) cuantifica esta irreversibilidad.

## 9. Fluidos

> [!practico]
> Al bucear notas presión en los oídos: cuanta más agua tienes encima, más pesa. Cada $10$ m de agua equivalen a una
> atmósfera más. Y un barco de acero flota porque, al ser hueco, **desaloja** mucha agua: el agua empuja hacia arriba con un
> peso igual al del agua apartada (Arquímedes).


Un **fluido** (líquido o gas) no mantiene forma propia. La **presión** es la fuerza por unidad de área perpendicular: $P = \dfrac{F}{A}$ (pascal, $1\ \text{Pa} = 1\ \text{N/m}^2$). La presión atmosférica a nivel del mar
es $\approx 101\,325$ Pa.

**Presión hidrostática.** En un fluido en reposo, a profundidad $h$:

$$
P = P_0 + \rho\,g\,h .
$$

> [!formal] Con rigor: demostración
> *Demostración.* Una columna de fluido de área $A$ y altura $h$ pesa $\rho A h g$; ese peso añade $\rho g h$ de presión sobre su base. $\blacksquare$ Solo depende de la **profundidad**, no de la forma del recipiente (la
> «paradoja hidrostática»). Cada $10$ m de agua añaden $\approx 1$ atmósfera. A $30$ m, $\approx 4$ atm absolutas: por eso la presión daña los oídos al bucear.

**Principio de Pascal:** un cambio de presión en un fluido encerrado se transmite **íntegro**; la **prensa hidráulica** multiplica fuerzas: $\frac{F_1}{A_1} = \frac{F_2}{A_2}$.

**Principio de Arquímedes:** un cuerpo sumergido recibe un **empuje vertical hacia arriba igual al peso del fluido que desaloja**: $E = \rho_{\text{fluido}}\,V_{\text{sum}}\,g$.

> [!formal] Con rigor: demostración para un cubo
> *Demostración (un cubo de lado $\ell$).* La presión en la cara inferior ($h_2$) supera a la de la superior ($h_1$) en $\rho g (h_2 - h_1)$; la fuerza neta hacia arriba es $\rho g(h_2 - h_1)\ell^2 = \rho g \ell^3 = \rho g V$. $\blacksquare$

**Flotación:** un objeto flota si su **densidad media** es menor que la del fluido, y la fracción sumergida es $\rho_{\text{objeto}}/\rho_{\text{fluido}}$: el hielo ($917$ kg/m$^3$) flota en agua con $\approx 92\,\%$ sumergido
(por eso «la punta del iceberg»); el acero de un barco flota porque el casco hueco baja su densidad media.

**Fluidos en movimiento.** **Ecuación de continuidad** (conservación de la masa, fluido incompresible): $A_1 v_1 = A_2 v_2$: en un estrechamiento, el fluido **acelera**. **Ecuación de Bernoulli** (conservación
de la energía, sin viscosidad): $P + \tfrac12\rho v^2 + \rho g h = \text{constante}$: **donde la velocidad es mayor, la presión es menor**. Explica parte de la sustentación de un ala y el funcionamiento de un
pulverizador. Las condiciones de validez (flujo estacionario, sin rozamiento) importan.

## 10. Errores típicos

- Confundir **temperatura** y **calor**, o decir que un cuerpo «tiene calor».
- Olvidar convertir a **kelvin** en las fórmulas de radiación y de Carnot.
- Usar $Q = mc\Delta T$ durante un cambio de fase (ahí la temperatura no cambia: $Q = mL$).
- Suponer que $3$ dB es el triple (es el **doble**), o sumar decibelios como cantidades lineales.
- Creer que el sonido se propaga en el vacío, o que la luz necesita medio.
- Confundir presión con fuerza; olvidar $P_0$ al hablar de presión **absoluta**.
- Pensar que el empuje depende del peso del objeto (depende del volumen **sumergido**).

## Repaso: lo que debe quedarte dentro de un mes

1. $v = \lambda f$; sonido $\approx 343$ m/s; luz $c = 299\,792\,458$ m/s; $\beta = 10\log_{10}(I/I_0)$.
2. Snell $n_1\sin\theta_1 = n_2\sin\theta_2$; reflexión total interna a partir de $\sin\theta_c = n_2/n_1$.
3. $Q = mc\Delta T$; $Q = mL$ en los cambios de fase; balance: lo que pierde uno lo gana el otro.
4. Conducción $kA\Delta T/L$; radiación $\sigma A T^4$; Carnot $1 - T_f/T_c$.
5. $P = P_0 + \rho g h$; empuje $= \rho_f V g$; $A_1v_1 = A_2v_2$.

## Siguiente

El siguiente escalón retoma el movimiento con **cálculo** ([[fis-mecanica-newtoniana]]) y la electricidad
([[ing-electricidad-basica]] y [[fis-electricidad-magnetismo-1]]).
