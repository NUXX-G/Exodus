---
id: fis-cinematica-rectilinea
title: "Movimiento rectilíneo: posición, desplazamiento, velocidad media e instantánea, aceleración, MRU, MRUA, caída libre y gráficas"
area: fisica
trunk_level: 3
prerequisites: [fis-magnitudes-medida, mat-ecuaciones-segundo-grado, mat-funciones-lineales-cuadraticas]
academic_sources:
  - "S. J. Ling, J. Sanny y W. Moebs, «Física universitaria», volumen 1 (en español), OpenStax (2021), capítulo 3: «Movimiento rectilíneo» (posición, desplazamiento y velocidad media; velocidad instantánea; aceleración media e instantánea; movimiento con aceleración constante; caída libre; velocidad y desplazamiento a partir de la aceleración). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-1/pages/3-introduccion"
  - "D. Halliday, R. Resnick y J. Walker, «Fundamentals of Physics», 11.ª ed., Wiley (2018), capítulo 2 (movimiento en línea recta)."
hints:
  - "Concepto: la velocidad es lo que cambia la posición por unidad de tiempo, y la aceleración, lo que cambia la velocidad. En el MRU la velocidad es constante; en el MRUA lo es la aceleración. Velocidad media = desplazamiento / tiempo total (no la media de las velocidades)."
  - "Herramienta: MRU: x = x₀ + v t. MRUA: v = v₀ + a t; x = x₀ + v₀ t + ½ a t²; v² = v₀² + 2 a Δx. Elige un sistema de referencia y un sentido positivo, y respeta los signos. En una gráfica v-t, el área es el desplazamiento y la pendiente, la aceleración."
  - "Documentación: OpenStax Física universitaria vol. 1, cap. 3; Halliday, cap. 2."
exercises:
  - id: velocidad-media-de-un-viaje
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un coche recorre ${{d1}}$ km en ${{t1}}$ h y luego ${{d2}}$ km en ${{t2}}$ h. ¿Cuál es su velocidad media en todo el viaje, en km/h? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"d1":150,"t1":"1{,}5","d2":90,"t2":"1"}
        answers: ["sha256:753e9632797ea863fd7035ae0631af863beae49f2670faadf95435605c43013f","sha256:44ddf9fca7d2e37831ce45870276658d72f25660fe5707d1e3aa4c9164921dfe","sha256:dd18b4a601d194c2051bac810485315a3465f0bf13167fa714286b7bdf909d80"]
      - values: {"d1":60,"t1":"1","d2":60,"t2":"1{,}25"}
        answers: ["sha256:fcce8d4c1bac28e81997cb668d67d871291d176773e8ffa6e54d396a92deac7b","sha256:18c192fbe60e33caff59c77cddd9e1e859d7e3513531616afb16604a00f5ff4f","sha256:515d2fee1ab5f0f04976b34c4073040a8e2336b807a7c6a7d2441b6429ff41b0"]
      - values: {"d1":200,"t1":"2","d2":100,"t2":"3"}
        answers: ["sha256:f27339549c86e2a8f38ad678257062ffc5be6e7594cc53ba1e81d9105dfe7860","sha256:e35905547cb99656cca254bcabcc45f79cbe6d5bb66615e7fab2c2e643ec7ba2","sha256:5665acb246f7ccd7dfce51f81520fd047c903addf0e6227b945e5f6527cac3e2"]
      - values: {"d1":45,"t1":"0{,}75","d2":30,"t2":"0{,}25"}
        answers: ["sha256:53ff36d19a79da92290be3fad83921c8e091a420f47b7b1fe01acb16e5cbc349","sha256:9ae87ef8db83c6245950046ea784567dc6325cea85ecd0cde699c9977aa0ffd7","sha256:b1240a768173be38b333a0097bca1c1b619211226c082a7af820c6af7e0b1497"]
      - values: {"d1":300,"t1":"3","d2":150,"t2":"2"}
        answers: ["sha256:3986076574a8ae8b8b6b21edbfef21fcb72d925c960fa02a5471d7fe53808c49","sha256:f0d7c818ccf0f0d996ae5d92dc6783c882d45a972ee133ad468d2733c95730bf","sha256:10f6243f039c11a5d24d4b64c0ea4e92519a6d37c1cf33f4bc9dfdcfe002f0dd"]
      - values: {"d1":10,"t1":"0{,}5","d2":20,"t2":"0{,}25"}
        answers: ["sha256:6b9948461eb98a5739eaf3aa2640c0ee8964ba2f38b967efb5e7944ceea81e8e","sha256:29ee4f5a56d923f33136241a69afe0b1d24c916e6eb9ccfa40e8283e39e2d167","sha256:c0a5185d23ac279c1392d2f3bd4b6c1ac1e83ad2a9de373c3e932af615d5ae6d"]
  - id: encuentro-de-dos-moviles
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Dos móviles con movimiento rectilíneo uniforme están en $x = {{x1}}$ m y $x = {{x2}}$ m con velocidades ${{v1}}$ m/s y ${{v2}}$ m/s (con signo, según el eje).
      ¿En qué instante están en el mismo punto? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"x1":0,"x2":500,"v1":15,"v2":-10}
        answers: ["sha256:2103216554d7ccc4794a8802cb8d51c022aaa328e171bee5ee4b5f26a3b1673f","sha256:164e06e8e7498be0e13bb2bc52de13705b0a711843a270fac0e6e2f50e82a03c","sha256:451611d8cb30b8d96f86c19485cc02dbf2be4739371c6becfcfb9cbe354e1942"]
      - values: {"x1":0,"x2":1200,"v1":25,"v2":-15}
        answers: ["sha256:63af6a40f59185001f09720c305b267a4b47479d663332ab8a9aa6d986bba4bd","sha256:e9d61d579aa10e7f856b0092ed5a9a95b189ceefb37cd9a069dc1d9b8ac3878e","sha256:8d15cf00193680b26826298a489a7148bc055fcb24c988a1132ca56375e25313"]
      - values: {"x1":100,"x2":0,"v1":-5,"v2":15}
        answers: ["sha256:77e6c47f130fef0f7e69b077e1a1bb2cb067c2a1c692d1569dd91c6fca6369a9","sha256:987204146e5d3fc5abee16b841086426d6c7106fe2d28107add971fc0a389de4","sha256:b399e03b07e698ce144808c46a6395e3be486d9150e814671e3446d0c5b99280"]
      - values: {"x1":0,"x2":300,"v1":10,"v2":4}
        answers: ["sha256:416b28fb7d9a993705a80568f8cd6ee834599de0f20a6d8655d89c1dfef9af9d","sha256:9cec9c5fdf737c8952c703fb2088470dcd7457ae3d070f4213154d7f05326d2c","sha256:fd86940ad6f65266c5a5ffb7cd4aa791a5004761ab63438f9ec67dc31103fbbd"]
      - values: {"x1":-200,"x2":400,"v1":25,"v2":-10}
        answers: ["sha256:0a49e4cec472a87b18e03030f1faf624beb348765a1189e7a3742c2bb38bee6d","sha256:2093ec7aaf1577d2e9751b27f9f8d0d85a98201d88359169120da005f5638b59","sha256:cebed02ba149ae47ac630104cdf4e242ba2b68921d9c509718b8b8df30439af5"]
      - values: {"x1":0,"x2":90,"v1":12,"v2":3}
        answers: ["sha256:fd6a3f2404c142e5a48f6b6c7ca77cbd63129b53a0a1fad4600057dd3da25bd0","sha256:230e858346781aab069b5a64128ca81c416832b9f50a6751243b193444f18d86","sha256:b294531b304d0890fd573605fa8d9e72a5690b4687ba509239cd120c5cf529a6"]
  - id: velocidad-final-mrua
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un móvil tiene velocidad inicial ${{v0}}$ m/s y aceleración constante ${{a}}$ m/s². ¿Qué velocidad tiene a los ${{t}}$ s?
    variants:
      - values: {"v0":5,"a":"2","t":8}
        answers: ["sha256:a6aca4bd4c67e680f96b54ae0dd0018037e09a41ee8ca3ab422b00a3780ceaf3","sha256:000a66b0e305bb8b532bd8645f5ce2dbccdf736731760d8354d5e09016b4d1b8","sha256:b6a8ddffc97a4033c649da2119ce3f428779b36461dd66e9c71daaf23911de2c"]
      - values: {"v0":0,"a":"3{,}5","t":6}
        answers: ["sha256:372d96d730c7f17d0f9b83bb3d414765d30f426d7464acf1ee0675baec006f69","sha256:c26f2475948797a3468f4d74dcfd366e7284f8da0ab06f3c0087563c185d9412","sha256:7472f5673635bfc020ea7676cbbef78618d46690b7f8662a13ebd026f3a6346a"]
      - values: {"v0":30,"a":"-4","t":5}
        answers: ["sha256:ec8243514e6d1c012a6f35e56d3c1facd93aa17d530e56ebc6c9b498a096e728","sha256:0bce8fe11f8378078f1bdb4db0c44542f6b99d8b81fd6ea45780e99f237ba9d8","sha256:064eb5a7222cdbed009850b10f72adfda196881c36a25d3c0dbb3f20b4ef8e6e"]
      - values: {"v0":12,"a":"0{,}8","t":15}
        answers: ["sha256:9173ba74acb8f6413ee516d437190df23544fbc869f2f0467944ba0b1bca4188","sha256:95a0f2104c43ecb0f6ff5c059009d415bf39f7b1ef6c8c6139b53c54c3ba3f0c","sha256:80c105cb5a9215dc9e354feb3e58898cd0cf6bc9b9a919affd0cf5448282e197"]
      - values: {"v0":-10,"a":"2","t":12}
        answers: ["sha256:752976da1ded6d6e75c394380e1bbd1f7a2945eff77ec71e08e00eef32073de1","sha256:fc798e21580177c4caafaaf04f0153430b501e20005cda0b670478bd5b8dfe6e","sha256:0c107fd2a70d38ecedbcd3b327a1933ec36d5dacd270fda678a4cdf5e2f59f66"]
      - values: {"v0":25,"a":"-2{,}5","t":4}
        answers: ["sha256:14e39c7b0f8916aff485f2297f3048ec596256847a9ae96a34b385520cbaba5f","sha256:e7f3b55dc960ed1c51a4bece43f638a7c24af0f679d80b478e0612e29559bbdd","sha256:b1f730355fb4f9430d1b20adc74cc073faced53afc163b2ce7b6c860e2489cf6"]
  - id: desplazamiento-mrua
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un móvil parte con velocidad ${{v0}}$ m/s y aceleración constante ${{a}}$ m/s². ¿Cuánto se ha desplazado a los ${{t}}$ s, en m?
    variants:
      - values: {"v0":4,"a":"1{,}5","t":6}
        answers: ["sha256:bad1530fbedecf7d5eab1f43ba450f6ecc658bb6f2b5d11eacc4e0a99ec7ca95","sha256:492f347c06cf61815c93f5a393bee646a5c29fb0c130de4149432bb62e6b159f","sha256:17b1595fe2b78a3ca6af73de64642cd54a2dcf2834926b8fe63c2669927c331a"]
      - values: {"v0":0,"a":"2","t":9}
        answers: ["sha256:119d8c99edb84d80aa7bad1e0c72ff3d5f7820afb9b802baf70efe7da8cef87f","sha256:5f844889f6d50df04a79b0ee71857f77b298d39279dac7d04cd4238e09d165e9","sha256:c6667b931209d04c9a14beecc7ed05df7628e7fd72c04732243bf70850f61979"]
      - values: {"v0":20,"a":"-3","t":4}
        answers: ["sha256:47ddc06feeb9a8483977b863c188256e8adbda66dd8feeb79040a97f45c38f7c","sha256:43bfb9f83e0691c11cdf2c1cf39168fde1279f17013390f0eb1a8147f82629e4","sha256:10d05c14e8d4fa4918bcb2864e17b9355efbd7849d7a0c2d81d4c67012b77f5f"]
      - values: {"v0":8,"a":"0{,}5","t":12}
        answers: ["sha256:2900954e7afcde5860bbb371cdc8348684af422248fba6d2b90d1101bb36c2bb","sha256:84f13a0b7955a4e87650ce94ca2bde92b18aa1fab4b13d752255fb9f65b912a4","sha256:0437c5600cc5a6d5371edfa28522fdce644a95a59f4bf6f8d949ea9872e543a3"]
      - values: {"v0":15,"a":"-1{,}2","t":10}
        answers: ["sha256:871f4277def682104e0a84733b88d091c5379e463f0b8f77e5c3a4a2b7190903","sha256:723e52e1b8d4ee1670964eccc15d40574c2b50a311646e2ce4e124296debc4cc","sha256:57eae330677a551b0132fdab03332aa3e6686943fa2b06462065f2b7119c074e"]
      - values: {"v0":0,"a":"9{,}8","t":3}
        answers: ["sha256:a29724870f888eaa1b8ba82528d72948212704b050da6e7f5431dd3b61bb778e","sha256:1c9a7a6b778e43828e342b1ac327fc46da9a9707d34dcf8aea8403d2e98b0dd2","sha256:edc1f103296fdd282ccc956ca363a051f52f0bf53329162a3a68b54292bcc4a7"]
  - id: distancia-de-frenado
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un coche circula a ${{vk}}$ km/h y frena con una deceleración de ${{a}}$ m/s². ¿Qué distancia recorre hasta pararse, en m? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"vk":90,"a":"6"}
        answers: ["sha256:6e94cf32b162f13f6dbd51d12114467478e0d2de0ca59e26342f36102a43c00a","sha256:f6292f644810483db806ef8aa9979a92f66266366f62466d7894c297976d5f81","sha256:e028be4d39ef6063b3e68f1cda09a4ab3bbbfc27e638c487adef431a448716f7"]
      - values: {"vk":50,"a":"4"}
        answers: ["sha256:e28050575774b99239a58586fc4a94641950dcd604dc59e1642245a3076d8d54","sha256:fb2ee739c9a68b2dd429a79066e0cc1725953b6de62a7be6ada701ed76fdd330","sha256:675ddf1571be798b07924fcde27888a0583b0c095a4710bee8a47bb2b01422ac"]
      - values: {"vk":120,"a":"7"}
        answers: ["sha256:73916cd51bfb70c7664bf2ca830a1b740afff7821d88f074ccdf52a1929eebdb","sha256:e8733471bc4a33adb822db980bf70e6a77270e44778b9d704fb6f91a4134362d","sha256:6266fdce32995bcb003f99345c70e7983f57ffd7c78a3a6cfffe5043e1517c90"]
      - values: {"vk":72,"a":"8"}
        answers: ["sha256:a65e48a4e1c97b3244a4a59c6ee9b7c0390c545c1a15d6e2d003c4e9bc276ea9","sha256:bf473665612cf8bd631f7895501d5192d744e56ef7283a562adc5261877cfc27","sha256:f51c260d8fe7ecb220231141fdbba51b726771d7e252ff48daf3bb946f7b5164"]
      - values: {"vk":36,"a":"2{,}5"}
        answers: ["sha256:822336929e56f631f9c565645338855e960e418514e4074553b1bb5cca9ba149","sha256:21b9097787d3563b7ceb0eb2401a7061f910ff5edd9b29b23add822fbd49fec2","sha256:bf123fa76ce23c73966a6c9b957ce33bb7b34329008eeeab5b8d741d91a2a83f"]
      - values: {"vk":108,"a":"9"}
        answers: ["sha256:3f89a75261fa3e90409ec14eb7954a935d5a8cb2ea1750af440a5a103d326d52","sha256:bb36fb3af1a9a3bd755acd7b9144d31d34b0bdbe9b750e0b7eb3d4a29459e422","sha256:4c8f915136b73a9c2447c8d58c112f813712a7e8f6102923ddb727836b0ef3e6"]
  - id: caida-libre
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Se deja caer un objeto desde ${{h}}$ m de altura ($g = 9{,}8$ m/s², despreciando el aire). ¿Cuánto tarda en llegar al suelo, en s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"h":"45"}
        answers: ["sha256:a328a606645e7eae3f679fff547d8d40889ccb50b04bf9f41e369120fab32506","sha256:66a0af2037d6321f1f2d6245b462c7d69414f64a5bc919882a587e5a471ee397","sha256:7e44a373e866a0a8902e3fafc83cc73241260992f76b9d7b94a23d8fb4eb3f93"]
      - values: {"h":"20"}
        answers: ["sha256:3dd581f5c2c577613a6f382f5310b0f303eced6bbbf7a14a584b2cc06ae97f9e","sha256:6d571fa81d6b1cb7fc4130d2a2114a516bda43636454837d2f06546383617fb5","sha256:1ba9d342cb1c8282b1aaa282341d1a38fbde410269b7bb2701876869987f4151"]
      - values: {"h":"80"}
        answers: ["sha256:7b51ee1f7c6bc7634c93bb3195b929ac4d28b33851948a98642b20b085b7e01c","sha256:309bdafafe40929a182a42b764d6e726b82eb396520ece5767866810fd8a58d4","sha256:8af19ec9cf7a5357165e4be3f6b49b6ad79d79f2a1ed3c06c84613fb3d4e9cf4"]
      - values: {"h":"5"}
        answers: ["sha256:3437d538eb2a7bcce6c512e435838af2ed73e6abbafd50e9f24072ba1bec809e","sha256:2017448540b7a8a452f674666d649c60fbcac7c427c2ca3a98300dad67983a6b","sha256:f78ea04e808d023ef6a918a6e8b997f5569aede8911208c089da40894d766503"]
      - values: {"h":"122{,}5"}
        answers: ["sha256:39c47ea51ed162d0176d11c70b36c7ed493784bb3952d5593b522d125823d883","sha256:14abee3cd20d3135a2a637d781b9cc4a31136755201b5dce43223c08c872063a","sha256:9db8ab58dbc57811338f1aba23c60865e69ae0f34cfb7374ab2914e9ccd6a953"]
      - values: {"h":"11{,}25"}
        answers: ["sha256:f1160b740cac00c5bf7c5b3fdf34e5904a4c27933f2f050905c01b07ab8b2457","sha256:48f83154186b5bbc5bc2ab9e86f105b253a8583461727353021708ac6b64cb9e","sha256:6211575c6836eae2f42f33069ea093d50906221bdb684c9c84d8b42e1ff248a2"]
  - id: altura-maxima
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Se lanza una pelota verticalmente hacia arriba a ${{v0}}$ m/s ($g = 9{,}8$ m/s²). ¿Qué altura máxima alcanza sobre el punto de lanzamiento, en m? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v0":"21"}
        answers: ["sha256:34537da465bcbf98465b211f71c6b99c4e5c32f26f809d3f61bf479b2294b608","sha256:6515728a20d962a957d9d4132876743fd8476824bd664f83690100f6c2826dd5","sha256:bfc09974827d87ee5329276220a1594e241b7749a2bc4c02d50f0622fad73f69"]
      - values: {"v0":"9{,}8"}
        answers: ["sha256:a068cf3aca1cb9c649ba555c56d2b4a955cb2af4b50f7d1b3dabe5cfa5a5edbe","sha256:962a1c54328a2c9c7fcebfa7378f72a8b75b14310a1d7cd098804d7927a54cf0","sha256:ca9ff3ddee7625b1a144e5103c86efca92beb8b843835e9b98b7fb668bdfedec"]
      - values: {"v0":"25"}
        answers: ["sha256:c1fa059acec384b0970068739ef546212dc2c412855ae61f7dcfedcea70512be","sha256:71a7e406fdda68bc1306ac988e2da086527f138ab3d2fbb6644cf58b3379e66d","sha256:faf7b90bacbd8a39203a57d23fa3681d332e2ba89f98afef889568921b39d7c9"]
      - values: {"v0":"7"}
        answers: ["sha256:674e4311537dfd70ed88eb57a0b786f94f313eb132d3480c24bc8b7018d06fbf","sha256:c6ce1a7f43456b296d855603dd2fcb54e0e0fb515f2e5d5c53ec2f677a5f3c50","sha256:cc77a9762883567b2d21ceeabbbcdf986c7987a737000167272d2112cdd0f6be"]
      - values: {"v0":"30"}
        answers: ["sha256:c53ceb270f0a936a65dfc8fbe7afb6ecca736aa5ac272b137565d4e24f0128cc","sha256:039f3202bc912ff1704b4c3f11b84917054eccd09b9d7d0ba87079da6e54fb5e","sha256:deb24d7ec16e84a523ed3421ff560b2191e9e7febed434379e95fc80df953289"]
      - values: {"v0":"12{,}5"}
        answers: ["sha256:fb959200556117641efd4db99b36507786e797b78be848151659e149109dd937","sha256:991d38f1a1fffd7129c946a15622cc5d9a33242d7cd394b61b7bf817ea4c1a69","sha256:0377c606b37cd1b0589de49fe770097e236a7f6a46e48d2ba00c0437cc9581ca"]
  - id: area-de-la-grafica-v-t
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La velocidad de un móvil varía de forma lineal entre los instantes de la tabla ($t$ en s, $v$ en m/s). ¿Cuál es su desplazamiento total, en m?
      $$
      \begin{array}{|{{cols}}|} \hline t & {{t}} \\ \hline v & {{v}} \\ \hline \end{array}
      $$
    variants:
      - values: {"t":"0 & 4 & 10 & 14","v":"0 & 11 & 11 & 0","cols":"ccccc"}
        answers: ["sha256:2cd970e0a132c6b627e8162b526d976b86b3e107e14f68cfa54d5afb1f5bb864","sha256:fe13f4b2ca32ca0b5fa9e32e7d9ab169f59433a505aa64ea6ebaa867c90b0d29","sha256:009c6fb777b4b4038531d3d2fe5dcdc146daae380904c37095370b71ba3ad1ad"]
      - values: {"t":"0 & 3 & 6 & 8","v":"5 & 5 & 11 & 11","cols":"ccccc"}
        answers: ["sha256:620e0730a9e8b533bd2f139f493860cbf36a1206709644a0a84b1dccfa51ca92","sha256:77f2bbf90104cc96c08482853ddcf851be59826c74d69107d20f4dc24a3018b5","sha256:5de81d74666e154dd2f7c086b5a85c64a45a914e6a789114e1e384745bf3a0d5"]
      - values: {"t":"0 & 5 & 8","v":"10 & 0 & -6","cols":"cccc"}
        answers: ["sha256:d7b97948af9a17ff276543bd1fc7cc67d68520680c190f76ba8f1b12a4b36bdd","sha256:23b61242d009a76dcbd491c95b3a201d1bf32656c41c5dfdd67d96f6b63c6722","sha256:10d76b564943713bc0717dd27f15f8eadc6739a08430e0e3ed7bea93b6caee2c"]
      - values: {"t":"0 & 2 & 6 & 7 & 9","v":"0 & 8 & 8 & 0 & -4","cols":"cccccc"}
        answers: ["sha256:228a48727e884a6b1fd8a80d9a34c0d41bbd5dfe9936ab29628ba685401b0812","sha256:7ef5e990f9a47f74a3ed87acc0640bc2c5322fda9a6f6cb54e48c056e3b3e6bb","sha256:c35043739a06472bb1def6e17abd58a83f50f44c3cdae3b1cd0eb11d5ab7245e"]
      - values: {"t":"0 & 10 & 15","v":"20 & 20 & 10","cols":"cccc"}
        answers: ["sha256:337cf7d9e33aafd64f248dedb1dfa0d3417c9aecdb5e4bf3f3d517d195adee27","sha256:374f0917396da4fe1cfec37f436a12da878ae08516af92c68a7ec39b73851b15","sha256:7ab526cd1df7cdee12c8922a85f55ccd1b76a410ce06a728b31422f307715185"]
      - values: {"t":"0 & 4 & 6","v":"-3 & 5 & 5","cols":"cccc"}
        answers: ["sha256:3fd5a9bde189c3718e2f7ac28473b0bb3ac4f6d6388caf9f44224d1170db9d53","sha256:97a81eaae7e780c9384531130a1ec72fa705d290e05138738b0f27ff1af27911","sha256:580c103b8b4b59d40538af5fc91f14c8d231d900f28702d045955d40ab2cbd68"]
  - id: aceleracion-media
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Un vehículo pasa de ${{a1}}$ km/h a ${{a2}}$ km/h en ${{dt}}$ s. ¿Cuál es su aceleración media, en m/s²? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"a1":0,"a2":100,"dt":9}
        answers: ["sha256:d3c7a0caaf663257e88f2be7706c213bb74d19c634e5fbfcda819ace9dc91725","sha256:2ff9c753974fe11c0b8a8c71666702f992d785ba797aea15fff4e6554eb47308","sha256:fbc21fe586a512dc5559796864e90091bbb2cbc3457db33a2e2004fc623fa493"]
      - values: {"a1":120,"a2":0,"dt":5}
        answers: ["sha256:7a773ea5989aa75ab4891caa2d56b467c21ee677031c3c7a938e3afd2f00af7a","sha256:7928fd09ad5a2ea284aa66ce797ee116203e962c193cecde540c0193ad5d83b8","sha256:b8171b3cded6f2b5b1236f10192503ea98cb720e63d7bf8a5edff68d5d873970"]
      - values: {"a1":50,"a2":90,"dt":4}
        answers: ["sha256:33c35459dadcbb118f18dbf568847c752cca38f7b74cca63ccd2b4ef17878646","sha256:b8969894268c983654d01d3e2656fd4f67e9a68f232a49d90c4995666150c9fd","sha256:5f39011d9ebf72e10f877006377da9a8f22a032dbc1ed719ba3360baaadcef7b"]
      - values: {"a1":0,"a2":54,"dt":6}
        answers: ["sha256:22b2a46dc9426038d00e35be3458eb0edf697d232709a33dbe3899cdcfe4f80e","sha256:ae8092344519af82a7824a8d0888935f05d71c513e3a424e413c8edb8d88d786","sha256:4091508601e72e15e1fca7911226f916e0c3a1073441e256bcedc1d766ab0fec"]
      - values: {"a1":90,"a2":36,"dt":3}
        answers: ["sha256:34ac0234b39377999a3e7a2bea6c235fe5d363e9273379963ca3f02972ba7e69","sha256:6a8265300774fe593ae81556d2c438e5cb6b468eb3bdebfebee2b34e796c1958","sha256:a81ec68224a5a73edbc1e2d8d798912e4559e70f65a3c23cb0a504e23ac18386"]
      - values: {"a1":30,"a2":120,"dt":10}
        answers: ["sha256:c273595fe55ffd1663533f1ce2e385b050749001f92eea17e2c9f8eec3d7b6a7","sha256:3fad118ead66aa0efc078abc09cd2e9151fd5c09da21b770b23cc24f57f81e68","sha256:58cec8904bb9a50b34766439039915bd18df23802c403e44136d0cdbab67f2d5"]
  - id: persecucion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un coche arranca desde el reposo con aceleración ${{a}}$ m/s² justo cuando una moto pasa a su lado a ${{v}}$ m/s constantes. ¿Cuántos segundos tarda el coche en
      alcanzar a la moto?
    variants:
      - values: {"a":"2{,}5","v":13}
        answers: ["sha256:2f706e54a6c3280cf6ef6ef966f5e2bd87a8c6823c79451e82abf0f40bfef42f","sha256:776a8846e570019bd4df0bcc55baa07e0c2f94cf840c7efdca1cfdf7d35d550d","sha256:0c70d91b0b67fb7fa7c17b063c8e4bb6abb94275ac1af7e22f970970029ef1e0"]
      - values: {"a":"3","v":15}
        answers: ["sha256:e8139fbc2daabe1d3010c632f63848f6b60007c4665432d19bfcf824a4c5b42d","sha256:c570f2a7c071f5c2d51dcfe78955f6388e298890f1d5924bd7d511496fa80ba6","sha256:96228962f5b0a40b306d85f4721bfac0d6617fd5f46ec31385d86be8adefd55e"]
      - values: {"a":"1{,}5","v":9}
        answers: ["sha256:19824d3b35032af1a5febc05ab57bdc5a122bddbbc3194a715738b1e7314f19c","sha256:94253730682c44db30015e33ef1bd2852a4b39f6b23fb28835314af8135aab3e","sha256:8c8514fc47aeec5d1747c7a347e0afd18dbb802ff8613bf79d7a98280c5c1344"]
      - values: {"a":"4","v":20}
        answers: ["sha256:5b83afa8f3cdf02c7bd738ea67d054200a270b1f9a001e3ce4d46af504d3882a","sha256:b7f8de22ff38167c9574d7272caa349acc9619e479039c431c5523ffa45d40d6","sha256:8cbcfbf6becf6460d3249ef3897b4f34a92ccbd41c6b20914a864204935ae60d"]
      - values: {"a":"2{,}5","v":10}
        answers: ["sha256:7afa13ed799e4818570b819637b3943a04322c69f8a11630b0cfacfc8e1441b2","sha256:68f14b636f830d40fc94c87ae218076dd1e7b9bc29da8a4f8e2bf1775a5e93f1","sha256:1e6a7db4f1e6c3a819878331b95e5b09dbe681902486dc6c688c833596eb8f34"]
      - values: {"a":"1","v":7}
        answers: ["sha256:f702a4079fc3707eaf0d15ceb4ac05fc95ab142f6ca8e7b0cb79bfe92b019be1","sha256:3f02ca9155cc08f2f060219ef1005f38c716ab6b61ff66b7ab76a7d58ef809ed","sha256:4d4675254f69ad8c840988d8eeca2e9521f08e810d977117e2fccb7206c401a0"]
  - id: distancia-de-parada
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Un conductor que va a ${{vk}}$ km/h ve un obstáculo y tarda ${{tr}}$ s en reaccionar; después frena a ${{a}}$ m/s². ¿Qué distancia total recorre desde que ve el obstáculo hasta
      pararse, en m? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"vk":72,"tr":"0{,}8","a":"7"}
        answers: ["sha256:91c1664f394c875385827f391da33c69cd437897800fb2e6c89557ec85a32715","sha256:2eda148627b259f1ac63ac525391760e558ab4c0e296f7e12a08900db606750d","sha256:c2a86985a9df9cbe86e8ff2748d6df5d981f9e305c1c4cabb03e8e8a630d64f6"]
      - values: {"vk":90,"tr":"1","a":"6"}
        answers: ["sha256:f69c26c38dab2c13e46b1f8e560849d9316c4f8ddb08933fe9566f7659aa5fad","sha256:9f7cec10cdd5093aa0120a119e0caf67200925246e84599889c919e52ea2be60","sha256:72e02462d7ec8a5884638a16137424446f4c95344e6a9a401848f702a083b9b7"]
      - values: {"vk":50,"tr":"0{,}7","a":"5"}
        answers: ["sha256:d33393f4ca2b38eb4ebc0a101ad48b4dadc211275ae703a690238492c530b7f0","sha256:b9cecc139cbc287f358007ac0bdd82200d8bd93c753e989792c90340ea7513b0","sha256:3f5be7c814a1c87ec6683c4a8d7df9cb2dd3055cde11c9d3b216bae88d501806"]
      - values: {"vk":120,"tr":"1{,}2","a":"8"}
        answers: ["sha256:0719008d20716a0e813e59ba41342ee75c0a0333752e63b4cb11d74712ffe27d","sha256:3fcfae0062c933b750bf96d35e9ac6598959a4591cd4a8010fa6139518b1cc9c","sha256:3c23d88ff3f7870109ea86d6d1de1b5fe8e80ec67e9e697a5894209ba272826c"]
      - values: {"vk":30,"tr":"0{,}5","a":"4"}
        answers: ["sha256:05c85d1a3f8f8fe3f824a66753a5181b6d99f2053e84694f410a21ff198edb91","sha256:c62c42f6278431b720789d615646602620b757a662d73dd96180344c7a8ad5ae","sha256:a79cb4daa6f8fe022e5dc6361118900601487f581ca8073889077c41f2f88cab"]
      - values: {"vk":100,"tr":"1{,}5","a":"7{,}5"}
        answers: ["sha256:a4ba1f0c064b2bdc62b31f037d7c8c9880914b53e8be5f6cd1a797aecb619b28","sha256:d49d42c859ff1f01f2c029ce75da7bf0544f623936ebd8bcfd338f4107604228","sha256:1dd3ae76987dd1f58b9ab01d1bef96615f90b442177fe01dd66e930d1bca4460"]
  - id: deducir-mrua
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) A partir de la gráfica velocidad-tiempo de un MRUA (una recta), deduce $x = x_0 + v_0t + \frac12at^2$ calculando el área bajo ella. (b) Elimina el tiempo entre
      las ecuaciones del MRUA para obtener $v^2 = v_0^2 + 2a\,\Delta x$. (c) Explica por qué, al doblar la velocidad de un coche, su distancia de frenado se multiplica por $4$, y qué
      implica para la seguridad vial.
    sealed: "gz64:H4sIAAAAAAACCn1Ty24bMQz8lcFCh2SzMdxFTwZ8KJLcC+RY1wEtMYkKrbTVY2HX8MfkA3oo+gn+sUIrx7GbohcdNCSHHA63VXAmRe1sNavq+oIu6xp3Fobw5Pcvj1oSxCCuRRQN2EBx6A39oE6zjQ4c8uf+xTNhRd9czvMsI4Ft9AwxFdhARDFDsoieepbaQTFWFDhADA8lYsAcw8MUV6CYP8jE5AkjreIDg1gsHj3J7UWJfI2/XCyauNu2u1Ij4gol8ENLcdmKycLep46sGtvrXdBS739baKulJtNArDHH+rXmv/IXtq4vVlmbW/6r2QYiYn7I2A64ztBuSzsxwX0KUce0YavcLLd/yyYS1iX/fcop83HWAl8u292WluOQB6gdHqZHGFc4C23pJHJYtgU6IHmXAYql9hAZnBcQV8jEzbHR4+wyz37jbBl+KpospdIhkpWa8ooePVtSoyVe93RCOIPinq1iKDaoa5lIeVKurnOuIQxsnNSK1ASfDJRbGfLFHg0Co0sm6t5kO/bOQ3wUE3x2HhxcdlbP3xPvf7mFpdSNzlT8VhJkyD8RuiSf3XnjliUH8prQky+Pb7CBcQFm/7PTcRTqpNbm3eSBn5IfseAsIlnornc+ko0cJlVT+bTyWlazL9tKeh3Za1fNqhsyMhl6O6CszPFEzq/pcILYwK2iZjtKxjJRcXKR8OjszNknG12oZu2uOWO9M7rTdmSNmrveQTo/kmTdGM8URr53pjg64n/F12VFWaGy7lGjcdn7l5ih0uo/nbNBSJDOBpZpTDyn+rr7A1NmlJ6tBAAA"
  - id: r-desplazamiento-distancia
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué diferencia hay entre desplazamiento y distancia recorrida?
    options:
      - |
        Son siempre iguales
      - |
        El desplazamiento es el cambio de posición y puede ser menor que la distancia recorrida
      - |
        La distancia puede ser negativa
      - |
        El desplazamiento siempre es mayor
    answers: ["sha256:a6e077dc00cbe8478ce92817370c4595a4a604323d568ed47c25e847a85e771c"]
  - id: r-pendiente-x-t
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué representa la pendiente de la gráfica posición-tiempo?
    options:
      - |
        La aceleración
      - |
        La distancia
      - |
        La velocidad
      - |
        El tiempo
    answers: ["sha256:c93fa46639b3f628b3abe55c9b592f7d3a809755a183d0453d38e0a843943d8b"]
  - id: r-area-v-t
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué representa el área bajo la gráfica velocidad-tiempo?
    options:
      - |
        El desplazamiento
      - |
        La aceleración
      - |
        La velocidad media
      - |
        La posición inicial
    answers: ["sha256:80e08f146e1e5060041aa8538a0ba89951e147cf29eec03730a46cf05258abd4"]
  - id: r-caida-masa
    tier: 1
    type: opcion
    review: true
    prompt: |
      Se sueltan a la vez desde la misma altura una bola de hierro y otra de madera del mismo tamaño. ¿Cuál llega antes al suelo (despreciando el aire)?
    options:
      - |
        Cae antes la más pesada
      - |
        Cae antes la más ligera
      - |
        Depende del color
      - |
        Caen a la vez si se desprecia el aire
    answers: ["sha256:c778414e0543df05d5789f1c6969555a15a1a0b2e1b602a9a919073115017577"]
  - id: r-punto-mas-alto
    tier: 2
    type: opcion
    review: true
    prompt: |
      En el punto más alto de un lanzamiento vertical, ¿qué pasa con la velocidad y la aceleración?
    options:
      - |
        La velocidad y la aceleración son cero
      - |
        La velocidad es cero y la aceleración sigue siendo $g$ hacia abajo
      - |
        La aceleración es cero
      - |
        Ninguna de las dos es cero
    answers: ["sha256:1c810057d4fec839ef5ecb154c8a2e181ebed36091decc58bdbc4ad42485a043"]
  - id: r-velocidad-media-viaje
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un coche va de A a B a $40$ km/h y vuelve de B a A a $60$ km/h. ¿Cuál es su velocidad media en el viaje de ida y vuelta, en km/h?
    answers: ["sha256:463bfa495c5da4f8bbd38602707071cdde3c3e9f25697928dd759418bb7ca25b","sha256:920e4d5c22e88d5b017d8623c68529fcbd469e3cb181149370e7faf92b23cbef","sha256:2b972755dad67e8f4ba11a648ad185fa8da31a84234577e87847171f37fcaacf"]
  - id: r-frenado-doble
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si un coche va al doble de velocidad y frena con la misma deceleración, ¿por cuánto se multiplica su distancia de frenado?
    answers: ["sha256:a0a594999206abde412f9e74c1ab5440f229ec47a4df14817e57db483c89fc8d","sha256:1d0e5507d58b6e2a616417a497429ce9e6dc7c0bf4206e237000f6aa901001d3","sha256:660d0aaf1ed82c1fda5376271e61a5924e10157b17137ff5f68da32fe5a42af5"]
---

# Movimiento rectilíneo: posición, desplazamiento, velocidad media e instantánea, aceleración, MRU, MRUA, caída libre y gráficas

Un coche que acelera en una incorporación, un tren que frena al llegar a la estación, una piedra que cae a un pozo: todos se mueven en línea recta, y
con unas pocas ecuaciones se puede predecir dónde estarán y con qué velocidad en cada instante. La **cinemática** describe el movimiento sin
preguntarse aún por sus causas (eso será la dinámica). Este nodo define con precisión posición, velocidad y aceleración, estudia los dos movimientos
básicos (uniforme y uniformemente acelerado), la caída libre y la lectura de gráficas.

## Objetivos

Al terminar sabrás:

1. Distinguir posición, desplazamiento y distancia recorrida, y velocidad media de rapidez media.
2. Definir velocidad y aceleración instantáneas y leerlas en gráficas.
3. Resolver problemas de movimiento rectilíneo uniforme (MRU), incluidos encuentros y persecuciones.
4. Resolver problemas de movimiento uniformemente acelerado (MRUA): frenadas, arranques, caída libre y lanzamientos verticales.
5. Obtener desplazamientos y aceleraciones a partir de gráficas.

## Qué debes dominar antes

[[fis-magnitudes-medida]] (unidades y conversión km/h ↔ m/s), [[mat-ecuaciones-segundo-grado]] (para despejar el tiempo) y
[[mat-funciones-lineales-cuadraticas]] (rectas, pendientes y parábolas).

> [!question] Test de entrada
> 1. Pasa $54$ km/h a m/s.
> 2. Resuelve $5t^2 + 10t - 40 = 0$ ($t > 0$).
> 3. ¿Qué pendiente tiene la recta por $(0, 3)$ y $(4, 11)$?
>
> Respuestas: $15$ m/s; $t = 2$; $2$.

## 1. Para qué sirve

- **Seguridad vial**: distancias de frenado y de parada, tiempo de reacción.
- **Deporte y transporte**: tiempos de llegada, adelantamientos, encuentros de trenes o aviones.
- **Ingeniería**: diseño de ascensores, frenos, trayectorias de robots ([[rob-cinematica]]).
- **Base de toda la mecánica**: las leyes de Newton explican qué causa la aceleración (el tema `fis-leyes-newton`).

## 2. Posición, desplazamiento y velocidad

> [!practico]
> Si sales de casa, caminas $300$ m hasta la panadería y vuelves, has recorrido $600$ m, pero tu desplazamiento es cero: estás donde empezaste. La
> velocidad media de ese paseo es cero, aunque te hayas movido. Por eso en física se distingue con cuidado lo que se recorre de cuánto cambia la posición.

- **Posición** $x$: dónde está el móvil respecto de un origen, con signo según el sentido elegido como positivo.
- **Desplazamiento** $\Delta x = x_f - x_i$ (puede ser negativo o nulo); **distancia recorrida**: la longitud total del camino (nunca negativa).
- **Velocidad media**: $\bar v = \dfrac{\Delta x}{\Delta t}$. **Rapidez media**: distancia recorrida entre tiempo. Ojo: la velocidad media de un viaje con varios tramos **no** es la media de las
  velocidades de los tramos (ir a $40$ km/h y volver a $60$ km/h da $48$ km/h, no $50$).
- **Velocidad instantánea**: el límite de la velocidad media en intervalos cada vez más cortos, $v = \dfrac{dx}{dt}$: la pendiente de la tangente a la gráfica $x$-$t$
  ([[mat-derivadas]]).

## 3. Aceleración

La **aceleración media** es $\bar a = \frac{\Delta v}{\Delta t}$ y la **instantánea**, $a = \frac{dv}{dt}$ (unidad: m/s²). El signo indica el sentido: si $a$ y $v$ tienen el mismo signo, el móvil
acelera; si tienen signos opuestos, frena. *Ejemplo:* un coche que pasa de $0$ a $100$ km/h en $8$ s tiene $\bar a = \frac{27{,}8}{8} \approx 3{,}5$ m/s².

## 4. Movimiento rectilíneo uniforme (MRU)

Velocidad constante: $x = x_0 + vt$. La gráfica $x$-$t$ es una recta de pendiente $v$; la $v$-$t$, una recta horizontal.

**Encuentros**: se escribe la posición de cada móvil con el **mismo origen y sentido**, y se igualan. *Ejemplo:* dos trenes salen a la vez de dos estaciones separadas
$300$ km, uno hacia el otro, a $80$ y $120$ km/h: $80t = 300 - 120t$, $t = 1{,}5$ h.

## 5. Movimiento rectilíneo uniformemente acelerado (MRUA)

> [!practico]
> Si un coche acelera siempre lo mismo, cada segundo su velocidad aumenta la misma cantidad, y la distancia recorrida en cada segundo es cada vez mayor: la
> posición crece como una parábola. Al frenar pasa lo contrario, y la distancia de frenado crece con el **cuadrado** de la velocidad.

Con aceleración constante $a$:
$$
v = v_0 + at, \qquad x = x_0 + v_0t + \tfrac12at^2, \qquad v^2 = v_0^2 + 2a\,\Delta x .
$$
La tercera, sin tiempo, es la más cómoda para frenadas. *Ejemplo:* un coche a $20$ m/s que frena a $5$ m/s² se para en $\frac{20^2}{2 \cdot 5} = 40$ m, tras $4$ s.

**Distancia de parada**: la recorrida durante el **tiempo de reacción** (a velocidad constante) más la de frenado: $d = v\,t_r + \frac{v^2}{2a}$.

**Persecución**: un coche que arranca desde el reposo con aceleración $a$ alcanza a una moto que pasa a velocidad constante $v$ cuando $\frac12at^2 = vt$, es decir, en $t = \frac{2v}{a}$.

> [!formal] Con rigor: las ecuaciones del MRUA salen de la gráfica (o de integrar)
> Si $a$ es constante, $v(t) = v_0 + at$ (recta). El desplazamiento es el área bajo la gráfica $v$-$t$ entre $0$ y $t$: un trapecio de bases $v_0$ y $v_0 + at$ y altura $t$, de área
> $v_0t + \frac12at^2$ (equivalentemente, $x(t) = x_0 + \int_0^t v$, [[mat-integrales-bachillerato]]). Eliminando $t$ entre las dos ecuaciones se obtiene $v^2 = v_0^2 + 2a\Delta x$. $\blacksquare$

## 6. Caída libre y lanzamiento vertical

Cerca de la superficie terrestre y despreciando el efecto del aire, todos los cuerpos caen con la misma aceleración $g \approx 9{,}8$ m/s², **sea cual sea su masa** (Galileo). Tomando el eje
hacia arriba, $a = -g$:

- **Caída desde el reposo**: $h = \frac12gt^2$, $v = gt$. *Ejemplo:* en $2$ s cae $19{,}6$ m.
- **Lanzamiento vertical** con $v_0$ hacia arriba: sube hasta que $v = 0$, en $t = \frac{v_0}{g}$, a una altura máxima $H = \frac{v_0^2}{2g}$ (con $14$ m/s, $10$ m), y tarda lo mismo en bajar. En el
  punto más alto la velocidad es cero pero la aceleración sigue siendo $g$ hacia abajo.

## 7. Gráficas del movimiento

| gráfica | pendiente | área bajo la curva |
| --- | --- | --- |
| $x$-$t$ | velocidad | — |
| $v$-$t$ | aceleración | desplazamiento |
| $a$-$t$ | — | cambio de velocidad |

En una gráfica $v$-$t$ formada por tramos rectos, el desplazamiento se calcula sumando áreas de rectángulos, triángulos y trapecios (con signo negativo donde
$v < 0$).

## 8. Errores típicos

- Confundir desplazamiento con distancia, o velocidad media con la media de las velocidades.
- Olvidar convertir km/h a m/s antes de usar m/s².
- Mezclar signos: elegir un sentido positivo y mantenerlo (la gravedad, $-9{,}8$ si el eje va hacia arriba).
- Pensar que en el punto más alto la aceleración es cero.
- Creer que los cuerpos más pesados caen más rápido (si se desprecia el aire, caen igual).

## 9. Resumen

- $\Delta x$, distancia; $\bar v = \frac{\Delta x}{\Delta t}$; $v = \frac{dx}{dt}$; $a = \frac{dv}{dt}$.
- MRU: $x = x_0 + vt$; encuentros igualando posiciones.
- MRUA: $v = v_0 + at$, $x = x_0 + v_0t + \frac12at^2$, $v^2 = v_0^2 + 2a\Delta x$; frenado $\frac{v_0^2}{2a}$; parada con reacción.
- Caída libre con $g = 9{,}8$ m/s²; altura máxima $\frac{v_0^2}{2g}$.
- Gráficas: pendientes y áreas.

## Repaso: lo que debe quedarte dentro de un mes

1. Por qué la velocidad media no es la media de las velocidades.
2. Las tres ecuaciones del MRUA y cuándo usar cada una.
3. Por qué la distancia de frenado depende del cuadrado de la velocidad.
4. La altura máxima de un lanzamiento vertical.
5. Qué representan la pendiente y el área en una gráfica $v$-$t$.

## Siguiente

el tema `fis-vectores-movimiento-plano` (vectores, tiro parabólico y movimiento circular).
