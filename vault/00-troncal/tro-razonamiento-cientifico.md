---
id: tro-razonamiento-cientifico
title: "Razonamiento científico: método, experimentos, incertidumbre, estimación y lectura crítica de la evidencia"
area: troncal
trunk_level: 7
prerequisites: [tro-aprender-a-aprender, fis-medida-movimiento, mat-combinatoria-probabilidad-basica, ing-electricidad-basica, fis-ondas-calor-fluidos, mat-estadistica-bidimensional]
academic_sources:
  - "Popper, K. R. The Logic of Scientific Discovery. Hutchinson, 1959 (versión inglesa de Logik der Forschung, 1934)."
  - "JCGM 100:2008. Evaluation of measurement data — Guide to the expression of uncertainty in measurement (GUM). BIPM, 2008 (doi.org/10.59161/JCGM100-2008E)."
  - "Open Science Collaboration. Estimating the reproducibility of psychological science. Science, 349(6251), aac4716, 2015."
  - "Ioannidis, J. P. A. Why Most Published Research Findings Are False. PLoS Medicine, 2(8), e124, 2005."
  - "Wasserstein, R. L.; Lazar, N. A. The ASA Statement on p-Values: Context, Process, and Purpose. The American Statistician, 70(2), 129-133, 2016."
hints:
  - "Concepto: antes de calcular, pregunta qué afirmación se pone a prueba y qué observación la refutaría. Para las incertidumbres independientes: en sumas y restas se combinan en cuadratura las absolutas; en productos y cocientes, las relativas. Para la evidencia: separa la probabilidad de un resultado dada una hipótesis de la probabilidad de la hipótesis dado el resultado (tasa base)."
  - "Herramienta: escribe las unidades en cada paso (el análisis dimensional caza errores); comprueba una propagación de incertidumbres derivando numéricamente o simulando muchas medidas con random.gauss; para una estimación de Fermi, calcula con la cota baja y con la alta y quédate con la media geométrica; dibuja los datos en escala lineal y logarítmica."
  - "Documentación: GUM (JCGM 100:2008) en bipm.org, apartados de incertidumbre típica y ley de propagación; declaración de la ASA sobre los p-valores (2016); Ioannidis (2005) y Open Science Collaboration (2015) para la reproducibilidad; Popper sobre la falsabilidad."
exercises:
  - id: cifras-significativas
    tier: 1
    prompt: |
      ¿Cuántas cifras significativas tiene la medida ${{x}}$ m? Respuesta: un entero.
    variants:
      - values: {"x":"0{,}000320"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"x":"12{,}30"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"x":"3{,}0\\cdot 10^{5}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"x":"0{,}0700"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"x":"1005"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"x":"6{,}022\\cdot 10^{23}"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: producto-con-cifras-significativas
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un rectángulo mide ${{a}}$ m por ${{b}}$ m. Expresa su área en m$^2$ con el número de cifras significativas que permiten los
      datos.
    variants:
      - values: {"a":"3{,}24","b":"2{,}1"}
        answers: ["sha256:ed8814c72bd491122c76ef27b9eb656c7a68da093105f316f6294a0ff8473af7","sha256:c79cd70a5f2996bbdaf74ff78742af63d673862b4ed9e2b416ed84ff7e72f8eb","sha256:fb89e2ab2079b9f014a9760b39226a3be3e2583f227747769476635eb530f91f"]
      - values: {"a":"12{,}5","b":"3{,}1"}
        answers: ["sha256:ef46c9fd42eb8b2d84ccae97302f15a11861438302efaa4791331838a962800d","sha256:3396d4a722c72d49187b1f9d7cc232999c2c310ccefdd2f5cfd79a01013847ba","sha256:e66d79c1c87b979deebbc57313b7a38e2271e63e3f761ceb95689d8a73ab9131"]
      - values: {"a":"0{,}82","b":"4{,}25"}
        answers: ["sha256:466d4b92c6fb18846e83af5767991f42e0f971f6bf023f5302bb7154febf802d","sha256:16d1be2cd1897be1ed8ebcd5500b80f5070d57a48a68dcf4a306c26d22f4f2ec","sha256:cec280df0d1ad4d9768b68bf3c05eeb582910aa07dced005656e374acd76af22"]
      - values: {"a":"7{,}00","b":"1{,}234"}
        answers: ["sha256:6f3274f8cbe89dcab5f3dd72e6941089da1aeab0a6460f820be8c16a1c2a4c60","sha256:737aa28541bc9e17e8055b162a0d63734dd8e58417d8b793d2861e3dedab6faa","sha256:4c6b65cf7701f93b0583df18221d8a2336f589c2144af9b0973063ae3f3509bb"]
      - values: {"a":"15{,}2","b":"0{,}0451"}
        answers: ["sha256:8378a96bd38680445d4ef338b449dde18eec1e693bc46e3b80b76c986296c145","sha256:176f17a4c9ea4078c0d5b3f9fa71630926cb500d3dbd3058bf571e818acedec9","sha256:21f1db4e0829d76a56cb80115d2c3baf79e8ebb680de31892a53785dc5bec381"]
      - values: {"a":"2{,}48","b":"9{,}6"}
        answers: ["sha256:692216af20088532e8ef66f9c3d2d2a84e5f9420cfcc58f2f8920d3b59246070","sha256:697c9bfe60cde5921592970420104cd7a96e4dd2c167c9eb2d38c020b4ab9aaa","sha256:2a19dc8bd75cba9d1cee3ed01bf5ae2bee4f15da709f5bd49aacaa1e5c011361"]
  - id: orden-de-magnitud
    tier: 1
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el orden de magnitud (el exponente $k$ de $10^k$, con la mantisa entre $1$ y $10$) del número de **segundos** que hay en
      ${{n}}$ {{u}}?
    variants:
      - values: {"n":10,"u":"años"}
        answers: ["sha256:44e9623a4c2659ee204d3d222d76f7292a56ee80693cb84a096e4348625c7b1d","sha256:90e8352ed75821e48f365f8649edef922fdc1ef608300b8899fd2b52d63a66b7","sha256:d463f632692e2bd2402fe785cbc7a792ad83c251d3a683acb881f0616d5bedb6"]
      - values: {"n":1,"u":"día"}
        answers: ["sha256:0d131822ba8ce13e224075e032c5d4253d36b7a3951149ebaef5acaa6ddfc496","sha256:5d11fa0de6251f3b76b516cc4dd202fdb9d90398cef9b32c916a3fd728766177","sha256:10d6ccdde34105f56c0a90f1f6a8b6c1d23f0a895c9a7ec6df9b55348cff9a6a"]
      - values: {"n":30,"u":"días"}
        answers: ["sha256:f7697e5169aefd57ddea4553fb3a3fd11df5b05d40a3a4bd49d30939b3e6cd15","sha256:a873582f261146aff5410cd01d3c3ce629c82fcecd0bf88a39dd2498ce506ab5","sha256:5f5b531622f1fda371eb73a727348a3b1f1b4803139baed5eb17e478fcb62454"]
      - values: {"n":1,"u":"año"}
        answers: ["sha256:d5971a804b0107268a7a7346e1f64556280d4076ca657327213ba064c180a858","sha256:9277e8b23784d527b947ce795fd1a476c1f638208780e4b11e56cefc7d784d83","sha256:f0f8c456721657b0e9397b3ec43d9b0e283915b0d6bd31639aadf906b885e552"]
      - values: {"n":100,"u":"años"}
        answers: ["sha256:caeb9ff4af5ab2acdf7b72dab9cc717167b7ef9689e237533939cbaea99bb1d1","sha256:9a1dea85a14043ab21a9f1e3f527581b35f3d6afe3ea60f64c2df75a544de4a7","sha256:9b52af149aad30a9e3695c3d9002bc33a1e18b4a843109e7a72b997c7b3d9fc6"]
      - values: {"n":7,"u":"días"}
        answers: ["sha256:0956c1948ce539a468ff6859357b6a1b9a021b04b37c5fe16316069d541b8f2d","sha256:a801ecd7a86798133467dfeff450024d8b7f9efe902f92a6235d42027a80f9d3","sha256:d1d95cad15d83814af38ea436f0e52190082c289f418d87f1cc662f08a20b737"]
  - id: media-geometrica-de-fermi
    tier: 1
    type: numero
    sig: 6
    prompt: |
      En una estimación de Fermi sabes que una cantidad está seguro entre ${{a}}$ y ${{b}}$. ¿Qué valor central tomas si usas la **media
      geométrica** de las cotas? Respuesta: redondeada a un entero.
    variants:
      - values: {"a":50,"b":"2000"}
        answers: ["sha256:da0a3cd666f3d0894f3749c79dd8ebc587645c64c797b7b474d69aa3af27ce63","sha256:bc3fafbb86564102bd079cc13d3a56f73cf169868fedd9ddc8c0e1f510220b76","sha256:0421a355002283a5b9e8163a1bd079c8b15daa478e7bb844bc3999d73c2f3c26"]
      - values: {"a":8,"b":"2000"}
        answers: ["sha256:99bd0a57dcd9a9a6c7d77acb0291bf68c7cd3ff934698fabaf37746efdde3998","sha256:9b6c1315e8d09e807472dac31afdef2c63f412bcd990f14a1670b523704fa548","sha256:e4c7c3e632874e8d74584349a771575a8f89e93cc85bbfdb23a4e242e030624d"]
      - values: {"a":3,"b":"300"}
        answers: ["sha256:2b697dccce60859b8be81b5f1cc7d5e5679114ecdf2ae9d39ba715e15b445e30","sha256:04ca410a9b494869e2f808c1f5896f55a08b8de04cbc69a53bf74ab427f4daa3","sha256:479911987b54e2265e310fdf70c93c181bb7c0bfa14c2226ea35de0f257f9ffa"]
      - values: {"a":40,"b":"6000"}
        answers: ["sha256:b503e164113e7362ae315102395bb18a2dd9daa65e40d1040c60dd2cb1a3e154","sha256:86dfd7423e5be9bb1c840ca220b3a8459b671f7ea77303861934dc2e357a27ee","sha256:5045d72eb4ee7eeced0aca8b107d3168fe4b579cc9517b84421b9b5763a4b49a"]
      - values: {"a":20,"b":"500"}
        answers: ["sha256:1147e5ad34228637e8e650a55375e73ab53a2ce2a134b283d1f5ac66ec83dbee","sha256:cd792cbedb85e604c6b0ed4e447e0fa1149b27abe27e7b3bdf33326a0ef6fbb1","sha256:37a0ae2c816d119b12ca7f4ea38cd4cf78731d975ef05badc97873a6cdf98939"]
      - values: {"a":1,"b":"1\\,000\\,000"}
        answers: ["sha256:2741f46397b9e02acd51a0c12378de2e5bf33466e2463c53d7a451b02405c5f7","sha256:8d639ae97e33de1d1d48dcd81bf62bb616bd3c6f302804e644e6b863bca1b3a5","sha256:c3f13cd3852fa90cf6fcaf0529192321c2157df2ee1757eee6cbcc6b8727c9f1"]
  - id: analisis-dimensional
    tier: 2
    prompt: |
      Se sospecha que {{que}} depende solo de {{deque}}: ${{f}}$ con $k$ adimensional. Halla $a$ y $b$ por análisis dimensional.
      Respuesta: `a;b` como fracciones o enteros.
    variants:
      - values: {"que":"el periodo $T$ de un péndulo","deque":"su longitud $L$ y de $g$","f":"T = k\\,L^a g^b"}
        answers: ["sha256:d44cf7fbcbd393c4da32675526f69815416b859011fba242b61a22e671fb357d"]
      - values: {"que":"la velocidad $v$ de caída desde una altura $h$","deque":"$h$ y de $g$","f":"v = k\\,h^a g^b"}
        answers: ["sha256:0e26d9b221464a3deac51717dfbffc5b384116605c9b5aeb50eee802ec41f5d0"]
      - values: {"que":"la frecuencia $f$ de oscilación de una masa $m$ en un muelle","deque":"$m$ y de la constante $k_m$ del muelle (N/m)","f":"f = k\\,m^a k_m^b"}
        answers: ["sha256:2dbb2f26477e149717ff702a2fa8eb3d26fcfcac01be160a46e00a621f3e4c92"]
      - values: {"que":"la velocidad $v$ de una onda en una cuerda","deque":"la tensión $F$ (N) y la masa por unidad de longitud $\\mu$ (kg/m)","f":"v = k\\,F^a \\mu^b"}
        answers: ["sha256:d44cf7fbcbd393c4da32675526f69815416b859011fba242b61a22e671fb357d"]
      - values: {"que":"el tiempo $t$ que tarda en caer un objeto desde una altura $h$","deque":"$h$ y de $g$","f":"t = k\\,h^a g^b"}
        answers: ["sha256:d44cf7fbcbd393c4da32675526f69815416b859011fba242b61a22e671fb357d"]
      - values: {"que":"la energía $E$ de un objeto de masa $m$ con velocidad $v$","deque":"$m$ y de $v$","f":"E = k\\,m^a v^b"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
  - id: propagar-una-suma
    tier: 2
    prompt: |
      Se suman dos longitudes medidas de forma independiente, $({{a}} \pm {{ua}})$ cm y $({{b}} \pm {{ub}})$ cm (incertidumbres típicas).
      ¿Cuál es la incertidumbre típica de la suma, combinando en cuadratura? Respuesta: un número con **2 decimales**.
    variants:
      - values: {"a":"15{,}6","ua":"0{,}3","b":"2{,}4","ub":"0{,}4"}
        answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
      - values: {"a":"5","ua":"0{,}3","b":"2{,}2","ub":"0{,}4"}
        answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
      - values: {"a":"100","ua":"0{,}5","b":"25","ub":"1{,}2"}
        answers: ["sha256:9c193c604ad7de942961af97b39ff541f2e611fdf0b93a3044e16dfbd808f41b"]
      - values: {"a":"8{,}4","ua":"0{,}05","b":"1{,}3","ub":"0{,}12"}
        answers: ["sha256:8843d0ae2f238c49c5462dbd9ececcd3ee5ddd341514c8018909de4e8c89a1ee"]
      - values: {"a":"50{,}2","ua":"0{,}6","b":"3{,}1","ub":"0{,}8"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"a":"7{,}7","ua":"0{,}15","b":"7{,}7","ub":"0{,}2"}
        answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: propagar-un-cociente
    tier: 2
    prompt: |
      Una pieza tiene masa $({{m}} \pm {{um}})$ g y volumen $({{V}} \pm {{uV}})$ cm$^3$ (incertidumbres típicas independientes). Calcula su
      densidad y la incertidumbre típica de la densidad (las incertidumbres **relativas** se combinan en cuadratura). Respuesta:
      `densidad;incertidumbre` en g/cm$^3$, ambas con **2 decimales**.
    variants:
      - values: {"m":"30{,}0","um":"0{,}6","V":"12{,}0","uV":"0{,}2"}
        answers: ["sha256:9cddb1358387f39c1a577313c501fd21fe603a38315d0f8026d6257a8833effb","sha256:35f21419304b7456bc92064e31748dfd71c01f2fb306f3d6b3a4413afa894477"]
      - values: {"m":"40{,}0","um":"0{,}8","V":"16{,}0","uV":"0{,}4"}
        answers: ["sha256:8e41e8d719c37c3c599b6ac857d767ebd8427ae7f78f6ac1b9cc74641e4d7485","sha256:581736bdb3d281ad59aec2ca45075675bdb62a13c9c51b8cab43db466ca8e563"]
      - values: {"m":"12{,}0","um":"0{,}2","V":"4{,}00","uV":"0{,}1"}
        answers: ["sha256:284a09aba730c712ba3f1e131731c02531aaf86c895b295b1b656b4617a4cd97","sha256:a0c9979f15db64ba3881502dc7a5614f2582db3b65c144d5dd530ed9534479df"]
      - values: {"m":"80{,}0","um":"1","V":"30{,}0","uV":"0{,}6"}
        answers: ["sha256:d52d9f069a755c5b74558118938b69c10f3397e05c0b51eee571e91645f767e7"]
      - values: {"m":"5{,}40","um":"0{,}1","V":"2{,}00","uV":"0{,}05"}
        answers: ["sha256:0a957a4fdb09dcf73eba7c4f60761875661a20dd87b7be5ef67ca2fd837364e3","sha256:95f6c5a943191da31bc48d0b0cd5ddede0ec1925ed8dac1ba4611e3ffc462dc1"]
      - values: {"m":"63{,}0","um":"0{,}9","V":"7{,}00","uV":"0{,}2"}
        answers: ["sha256:4e30a7a1c694624b14a3be7798da3d5cc31f6aaed8ff55667554ab3781f8226b","sha256:e12a1535bc70614b30025074a9848dec1ed391f022f872bfcf12de9464ec25dd"]
  - id: estimacion-de-fermi
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Estima cuántos afinadores de piano trabajan en una ciudad de {{hab}} habitantes con estas hipótesis: ${{ph}}$ personas por hogar,
      un piano en uno de cada ${{cada}}$ hogares, cada piano se afina una vez al año y un afinador afina ${{dia}}$ pianos al día durante
      ${{dias}}$ días al año. Respuesta: un entero (redondeado).
    variants:
      - values: {"hab":"$4$ millones","ph":"2{,}5","cada":20,"dia":4,"dias":250}
        answers: ["sha256:62c4a05e13a8c819ecf125445b206e7578eb3cfa89cbf6b7ca9d5f62df49e5d8","sha256:0ce91100ea3d8c6af23920535fe962ca661623cc22a15bfd36e1851bf845156a","sha256:ed4bb9ce54b25ad5a657a235cc10637b1a952a9f55cb526097cdc1f7aec906c6"]
      - values: {"hab":"$1$ millones","ph":"2{,}5","cada":25,"dia":4,"dias":250}
        answers: ["sha256:3a5535a8d8e5e11e147835d3a13e502be54bbe558aca707b1d957a7851c8e794","sha256:6103d07a81c5c5598fa0b27b546d3ed4957e37398eb7f12bed01ea477832ba2e","sha256:35093e25153804483b9d5f281369467feaac48f5351e16cbaef1be25543a9ac1"]
      - values: {"hab":"$600\\,000$","ph":"3","cada":15,"dia":5,"dias":220}
        answers: ["sha256:4d39b1e4f4cf528b1a0ec8bc30b81a9fab1555e806de1ab914e0c41ae33bbbd6","sha256:62147c05cc89036fd02b6557beaef03b5debd7ca3b9618c05e469579849eaebd","sha256:56fc1f0d6fe5b79226f6fd7be557439b11fc299c82f16c6c1f0ad9089c05434d"]
      - values: {"hab":"$5$ millones","ph":"2{,}5","cada":20,"dia":4,"dias":250}
        answers: ["sha256:102629ec5f376b927a6df80b1774d7c8d5e267b2e2f902a0415d3ceee52f2bdb","sha256:2d9449cf3e28910edd86902a920a02494a151f40358d304f3c7aa7c657eccb52","sha256:96534a0f9a70624aed33d38020f934033b80ec6eeaf6c4b70a2f17691f81d659"]
      - values: {"hab":"$200\\,000$","ph":"2","cada":10,"dia":3,"dias":200}
        answers: ["sha256:7d6f73eeec3ceabfb244494ea37a5cab90d26eadf8661715f2da5d4c9a748960","sha256:6693305c38bfa498a7017c38fb7f849a6720c837c6f4212cd01373703e36cc46","sha256:47419b5b1903cc1fbad15d1bd1de17df1e8c627f197f195cbfe409ad34f53518"]
      - values: {"hab":"$8$ millones","ph":"2{,}5","cada":40,"dia":5,"dias":250}
        answers: ["sha256:cbf7fe7fed61b03781704594011a5ecebcbd8dc24f80e2b9a98bb738521f11e1","sha256:3d427ce4e8b97f47aa8485c9b56fa896bfc04494437263b7bf3571654647aee9","sha256:df33cfd1c975ca3164f474a17c627f2ea54dffc5091b5ceb368726b39ad35acc"]
  - id: tasa-base
    tier: 2
    prompt: |
      El ${{p}}\,\%$ de las piezas de una fábrica son defectuosas. Un sistema de visión detecta el ${{s}}\,\%$ de las defectuosas y da
      falsa alarma en el ${{fa}}\,\%$ de las buenas. Si salta la alarma, ¿qué probabilidad hay de que la pieza sea defectuosa?
      Respuesta: un número redondeado a **4 decimales**.
    variants:
      - values: {"p":"2","s":90,"fa":5}
        answers: ["sha256:08ffc62cdba9393413be8a1c7f2f44a1116bf79dea9cb4b68333a5c851b9a0f7"]
      - values: {"p":"1","s":95,"fa":3}
        answers: ["sha256:bca4aca1038e88480c5ce1fc2dd10bfba8fab74d225c5456ef9d968019c2aaa5"]
      - values: {"p":"5","s":80,"fa":10}
        answers: ["sha256:21eb3a97dd361f44396ab4a37cbae24dd500650a346e95cf809707146bac7fa7"]
      - values: {"p":"0{,}5","s":99,"fa":1}
        answers: ["sha256:2db91ee4588c0fa9bdbdd075107491e7657a530e92c266005ba1a01b085e8dcd"]
      - values: {"p":"10","s":70,"fa":8}
        answers: ["sha256:752ebcd05c37ffcd415efcf4e94c6877346fd5afce319bd8e46644d83f8326e9"]
      - values: {"p":"3","s":85,"fa":4}
        answers: ["sha256:ce2029599ea0cbeaa096515a35ff85cda2c4c065ffab045a31320e025fbf0610"]
  - id: riesgo-relativo-y-absoluto
    tier: 2
    prompt: |
      Un fármaco reduce el riesgo de una enfermedad en cinco años del ${{a}}\,\%$ al ${{b}}\,\%$. ¿Cuánto vale la reducción **relativa** del
      riesgo (en %), la reducción **absoluta** (en puntos porcentuales) y el **número necesario a tratar** (cuántas personas hay que
      tratar para evitar un caso; si no es entero, con decimales)? Respuesta: los tres números separados por `;`.
    variants:
      - values: {"a":"3","b":"2{,}4"}
        answers: ["sha256:96a78efda97588c627a7af0433cdd998cf0f728dc068d5babe26b5330886ddfa"]
      - values: {"a":"4","b":"3"}
        answers: ["sha256:d028ebd72e47053ab216b9a800967f94b798fa4e15ac4963e01a92aed1472c12"]
      - values: {"a":"10","b":"8"}
        answers: ["sha256:b92778533807fbc5db2016606d488b0fe697ae6d94c8a6812d9a7f651e23e14c"]
      - values: {"a":"1","b":"0{,}5"}
        answers: ["sha256:79ba3218b40a2b4f4710df87cc03ec1e702e5a9175b0b2c2db5f8535d4efa4d5"]
      - values: {"a":"5","b":"4"}
        answers: ["sha256:93e0e7ef5c086a694b405feeab9c3b6af867566a93db1b9208268706589ddf3c"]
      - values: {"a":"20","b":"15"}
        answers: ["sha256:eed258db9a3e8f2283045837ce0035a87af385c6093b0ea6c9d2a73658bd6214"]
  - id: grafico-con-eje-truncado
    tier: 2
    prompt: |
      Un gráfico de barras compara ${{a}}$ y ${{b}}$, pero su eje vertical empieza en ${{base}}$. ¿Cuántas veces más alta **parece** la
      segunda barra y cuál es el cociente **real** de los valores? Respuesta: los dos números separados por `;`, el segundo con
      **2 decimales**.
    variants:
      - values: {"a":"60","b":"64","base":"58"}
        answers: ["sha256:8da8c73e4e8dcd7665b281ceb62de7d48ed2098d1acbd853d214fabf5a9ae8c8"]
      - values: {"a":"45","b":"50","base":"40"}
        answers: ["sha256:756d1211ac9e3bd22d2dc256e321de58edb7c6ffb9ff80b10e72770cd2f42021"]
      - values: {"a":"200","b":"210","base":"190"}
        answers: ["sha256:5ee513e415d9aa809866a4314c66d6808f7f89c71b77549e0b4e37a1ab685db9"]
      - values: {"a":"9{,}5","b":"10","base":"9"}
        answers: ["sha256:5ee513e415d9aa809866a4314c66d6808f7f89c71b77549e0b4e37a1ab685db9"]
      - values: {"a":"72","b":"75","base":"70"}
        answers: ["sha256:09da923bd1d47c5b26b8cdd82c73ab0902e52319c01deb530660c4aa6c21c74e"]
      - values: {"a":"1000","b":"1040","base":"980"}
        answers: ["sha256:7a8ceb34ae1c68c582a3a39985435b97cbf6aab90e710d6667b0ccda522a18e2"]
  - id: energia-cinetica-con-unidades
    tier: 2
    prompt: |
      ¿Qué energía cinética tiene un coche de $1500$ kg a $108$ km/h, en kilojulios? (Convierte primero a unidades del SI.) Respuesta: un número.
    answers: ["sha256:a440868cf4311953cb45c7ded9360009e1bb77775b6395a3e13aa9ef831794b1"]
  - id: regresion-a-la-media
    tier: 3
    prompt: |
      Las notas de dos exámenes, tipificadas, siguen una normal bivariante con correlación ${{r}}$. Un alumno saca en el primero
      $z = {{z}}$. ¿Qué $z$ se espera, de media, en el segundo? Respuesta: un número con **1 decimal**.
    variants:
      - values: {"r":"0{,}6","z":"2"}
        answers: ["sha256:77ac319bfe1979e2d799d9e6987e65feb54f61511c03552ebae990826c208590"]
      - values: {"r":"0{,}5","z":"3"}
        answers: ["sha256:9f29a130438b81170b92a42650f9a94291ecad60bd47af2a3886e75f7f728725"]
      - values: {"r":"0{,}8","z":"-2"}
        answers: ["sha256:c144de0e35924b4f87e815fa65c1679ea92dab75cce56ff7fbe58e0572763a46"]
      - values: {"r":"0{,}3","z":"2{,}5"}
        answers: ["sha256:1e9d7c27c8bbc8ddf0055c93e064a62fa995d177fee28cc8fa949bc8a4db06f4"]
      - values: {"r":"0{,}9","z":"2"}
        answers: ["sha256:a97b042d7bd59d92a46e8ab17f7dff7326067c74b938e6f6daabf1768932330d"]
      - values: {"r":"0{,}4","z":"-3"}
        answers: ["sha256:6c435e9072adbf41dc649d3df8334e0e952d38b44ef12f1043f8e81c2efbd743"]
  - id: escala-logaritmica
    tier: 3
    prompt: |
      En un gráfico con eje vertical logarítmico, una magnitud pasa de $10^{{{a}}}$ a $10^{{{b}}}$ en ${{años}}$ años creciendo a un ritmo
      constante. ¿Por qué factor se multiplica **cada año**? Respuesta: un número redondeado a **2 decimales**.
    variants:
      - values: {"a":2,"b":5,"años":6}
        answers: ["sha256:a2108a37a6605e337adae024a2134378f1a4e5854f1d2f023d413769518029e5"]
      - values: {"a":1,"b":4,"años":3}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"a":3,"b":6,"años":10}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"a":0,"b":3,"años":2}
        answers: ["sha256:3ae59a12ee18db3fbb9000f3a4b7a24f4bc3101f47821639ea26fbf830ccd829"]
      - values: {"a":2,"b":8,"años":12}
        answers: ["sha256:a2108a37a6605e337adae024a2134378f1a4e5854f1d2f023d413769518029e5"]
      - values: {"a":1,"b":3,"años":5}
        answers: ["sha256:a4daf61f8f0c49b57f137ca4f16255dca311ec2e3f55ccb80ddbf16ac6acf4f1"]
  - id: ley-de-potencias
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Dos medidas de una relación $y = c\,x^k$ dan $y = {{y1}}$ para $x = {{x1}}$ e $y = {{y2}}$ para $x = {{x2}}$. ¿Cuánto vale el exponente $k$?
      (En papel log-log, es la pendiente de la recta.)
    variants:
      - values: {"x1":2,"y1":5,"x2":8,"y2":40}
        answers: ["sha256:804ee28e32a050a655b0f18b91271c21958fac26b35122ea95c85792a2c297f5","sha256:f3fd8f11f820a39d54b08fd024ae7cd13d2f21a73a1a3fb3599552223c276dc1","sha256:cd6054a0dd7d39a1f50dd941ea0d0df9afd1a2e5b4ddfa31f2817cd345fd28b5"]
      - values: {"x1":1,"y1":3,"x2":4,"y2":48}
        answers: ["sha256:dff7238d7e9cc6df8e1a7c6ce16dfcd8535caf64779cdf13ebc52d2f35f15ea4","sha256:ba0b6da3e13d74ecc757fb9df330228b8b4c68fd3593ff4b9de5b2cedd89fb24","sha256:1aa8092d0dcc168dcbba29c212de72fe67d073aadca4934ab79c0ec041ff2514"]
      - values: {"x1":3,"y1":2,"x2":27,"y2":18}
        answers: ["sha256:326e414becdba1810d278b55f07fd30133f774886d65f061745ac064ce09630f","sha256:b13e65895714ffc5c7be60eafb373c4ae8bbbc112fdbd6e64c072455e439cff3","sha256:ed958922a07a626ab05881c9945500535c822400afbce2da4719046d2c7f9089"]
      - values: {"x1":2,"y1":10,"x2":32,"y2":160}
        answers: ["sha256:1053811c801b3acdfb5bb05b5940117880198eb1198f75197846b562c8af2ddc","sha256:385836c6ebb1969f7e9a1ae5e9351d438bcbd30165d3a03fd30d68e946a9c8e4","sha256:213401ea26eab5cbee491c2da590f456072e01cff0abbc3ec1c766e043d8e587"]
      - values: {"x1":4,"y1":1,"x2":64,"y2":64}
        answers: ["sha256:caae74de63f5d471288c1608a70ddff72d1fc4c43f0d2f2bba8bd0302dff2313","sha256:31304cb95e40fdc987b367ca30b7cc0e589403a71a21abfc28ba07a43c64dd2d","sha256:b41d8392f5066dc00f4f247a62a464507583288d73ad02de78a13c64ff724278"]
      - values: {"x1":5,"y1":3,"x2":20,"y2":48}
        answers: ["sha256:0a6b027db7138e4ec6f5a7a8dbc2c6825266888a6de2fff251b73155a34a929f","sha256:42f7384ee66e61683ccf19185ca38f1981f482f5e93350612ff95f23a24f2c73","sha256:a1987971540b3b92c3673ac796201ec4aa10d0b58f8058f9d0350d742ed739d0"]
  - id: valor-predictivo-de-un-hallazgo
    tier: 3
    prompt: |
      En un campo de investigación, el ${{pct}}\,\%$ de las hipótesis que se ponen a prueba son ciertas. Los estudios tienen potencia
      ${{pot}}$ y nivel de significación ${{alfa}}$. ¿Qué fracción de los resultados «significativos» corresponde a hipótesis ciertas?
      Respuesta: un número redondeado a **2 decimales**.
    variants:
      - values: {"pct":10,"pot":"0{,}8","alfa":"0{,}05"}
        answers: ["sha256:04bd088be6c6f4228903a04eab7817db13463da0b94cbbad21063f4216a49380"]
      - values: {"pct":50,"pot":"0{,}8","alfa":"0{,}05"}
        answers: ["sha256:119e73caef7730ccc4c080b14f716ece0b91fddf01b5b6bac2a57f54d3465157"]
      - values: {"pct":1,"pot":"0{,}8","alfa":"0{,}05"}
        answers: ["sha256:358e553bf44a364c4b9cf2ae457d0554b1e0605d6eba0239f6c682f456980791"]
      - values: {"pct":10,"pot":"0{,}2","alfa":"0{,}05"}
        answers: ["sha256:a3b9afe536de2b8b70c41e369961a7bbc1f7d656e3cdd8ffd309b916e1f90751"]
      - values: {"pct":20,"pot":"0{,}9","alfa":"0{,}01"}
        answers: ["sha256:bf5fac6e3a727da62db6ff6df60ddb6cac3f2acc0909ddbe6d221fd2c628ae01"]
      - values: {"pct":5,"pot":"0{,}5","alfa":"0{,}05"}
        answers: ["sha256:0bf56cc40e84014dc3401457a1bcb79a256e56c97cbf693f155b78bf815fd106"]
  - id: r-falsable
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas afirmaciones es **falsable** (se podría demostrar falsa con una observación)?
    options:
      - |
        «Las cosas pasan por algo»
      - |
        «Este amuleto da suerte a quien cree en él»
      - |
        «El agua pura a nivel del mar hierve a $100\ ^\circ$C»
      - |
        «Todo se equilibra al final»
    answers: ["sha256:34931153000899ed33bb5f5776c778fd30dc54435b93ff9a3047612733bc7427"]
  - id: r-control
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Para qué sirve un grupo de control en un experimento?
    options:
      - |
        Para tener más datos
      - |
        Para saber qué habría pasado sin el tratamiento
      - |
        Para que el experimento dure menos
      - |
        Para confirmar la hipótesis
    answers: ["sha256:41cab91134f501af4ce91816b4d3987a4f72da8ecf2fc705031c954fa4b1f71b"]
  - id: r-cuadratura
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Se suman dos medidas independientes con incertidumbres típicas $3$ y $4$ (mismas unidades). ¿Cuál es la incertidumbre típica de
      la suma?
    answers: ["sha256:63d081a789dafba8d2991a5a2fceb667ace3fa997cfcbe912fb53d5fe786f706","sha256:38cf92e0396735997808847f36649099ab8c6257d94a6d00b8f9c6909b10f695","sha256:e6ab62fcfa61225d4a76e1962d8da87db7808286c7f9854480715c9a9ce3b696"]
  - id: r-nnt
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un tratamiento baja el riesgo absoluto de un problema $1$ punto porcentual. ¿Cuántas personas hay que tratar para evitar un caso?
    answers: ["sha256:9f5bdfdc4e86dde41f9d344d9a3d1bfaaf550cbd452e337adb3166c6b5ac94e2","sha256:089601913efd15de68cd4ea47f1ada82cd2dabb9f4c7b51b99390e29aac91271","sha256:3d66bb55b1de31d0a7c7f14ffa7f851670bf3be94f18e1b6b759a4b5c0ff55cd"]
  - id: r-superviviente
    tier: 2
    type: opcion
    review: true
    prompt: |
      «Los aviones que volvían de la guerra tenían agujeros en las alas, así que hay que reforzar las alas.» ¿Qué error hay en ese
      razonamiento?
    options:
      - |
        Sesgo de anclaje
      - |
        Falacia del hombre de paja
      - |
        Regresión a la media
      - |
        Sesgo del superviviente
    answers: ["sha256:f5dc8fd0d33004fcf6742fd416d7d31349e33ad66ffc5ead06bd383037fc3053"]
  - id: r-log
    tier: 2
    type: opcion
    review: true
    prompt: |
      En un gráfico con el eje vertical **logarítmico**, una serie de datos forma una recta. ¿Qué tipo de crecimiento indica?
    options:
      - |
        Un crecimiento exponencial
      - |
        Un crecimiento lineal
      - |
        Una magnitud constante
      - |
        Una ley de potencias en escala lineal
    answers: ["sha256:3b66974f56514be375f89b37a9c7afad326530b759b93b3646c627b09e30d59b"]
---

# Razonamiento científico: método, experimentos, incertidumbre, estimación y lectura crítica de la evidencia

La ciencia no es una lista de datos, sino un **método** para no engañarse: proponer explicaciones que puedan resultar falsas, ponerlas a
prueba con experimentos bien diseñados, medir con incertidumbre conocida y aceptar lo que digan los datos. Este nodo enseña ese oficio,
común a la física, la ingeniería, la medicina, la seguridad informática y la vida diaria: cómo se formula una hipótesis contrastable,
cómo se diseña un experimento sin sesgos, cómo se expresa y propaga la incertidumbre de una medida, cómo se estima cualquier cosa con un
orden de magnitud razonable, cómo se leen gráficos sin caer en sus trampas y cómo se juzga la calidad de una afirmación o de un estudio.

## Objetivos

Al terminar sabrás:

1. Distinguir afirmaciones **falsables** de las que no lo son, y separar hipótesis, predicción, ley y teoría.
2. Diseñar un experimento con grupo de control, aleatorización y cegamiento, e identificar variables de confusión.
3. Expresar una medida con su **incertidumbre típica** y propagarla en sumas, productos y funciones generales (GUM).
4. Hacer **estimaciones de Fermi** y comprobar fórmulas con **análisis dimensional**.
5. Leer escalas logarítmicas y log-log, detectar ejes truncados y reconocer la **regresión a la media**.
6. Evaluar una afirmación: tasa base, riesgo relativo frente a absoluto, número necesario a tratar, reproducibilidad, sesgos y falacias.

## Qué debes dominar antes

[[tro-aprender-a-aprender]] (estudiar con evidencia), [[fis-medida-movimiento]] (unidades, error, cifras significativas, orden de
magnitud) y [[mat-combinatoria-probabilidad-basica]] (probabilidad condicionada).

> [!question] Test de entrada
> 1. ¿Cuántos segundos tiene un día?
> 2. Si una magnitud se duplica cada año, ¿por cuánto se multiplica en 10 años?
> 3. ¿Qué unidades tiene $g$, la aceleración de la gravedad?
>
> Respuestas: $86\,400$; $2^{10} = 1024$; m/s$^2$.

## 1. Para qué sirve

- **En cualquier profesión técnica**: depurar un programa, diagnosticar una avería o investigar un incidente de seguridad es aplicar el
  método científico (hipótesis, prueba que podría refutarla, conclusión).
- **Ingeniería**: una medida sin incertidumbre no sirve para decidir si una pieza cumple una tolerancia.
- **Salud y dinero**: «reduce el riesgo un 25 %» puede significar medio punto; con una prueba que acierta el 99 % de las veces, la mayoría
  de sus positivos pueden ser falsos si la enfermedad es rara.
- **Ciudadanía**: distinguir un estudio sólido de un titular, un gráfico honesto de uno manipulado.

## 2. El método científico y la falsabilidad

> [!practico]
> Un buen detective no se fija solo en las pistas que confirman su sospecha: busca la prueba que **podría demostrar que se
> equivoca**. La ciencia funciona igual. Una idea es científica si dice algo que podría resultar falso al comprobarlo («si
> esta medicina funciona, los que la tomen se curarán antes que los que no»). Si una idea lo explica todo pase lo que pase,
> no se puede poner a prueba, y eso es un defecto, no una virtud.


El ciclo es: **observar** un fenómeno, proponer una **hipótesis** que lo explique, deducir de ella una **predicción** concreta,
**contrastarla** con un experimento u observación, y **revisar**. Una **ley** describe una regularidad (la ley de Ohm); una **teoría** es un
sistema explicativo amplio, muy contrastado, del que se deducen muchas leyes (el electromagnetismo).

**Falsabilidad (Popper).** En *Logik der Forschung* (1934; en inglés, *The Logic of Scientific Discovery*, 1959), Popper señaló una asimetría:
ningún número de confirmaciones demuestra una afirmación universal, pero **un solo** contraejemplo bien establecido la refuta (igual que en
[[mat-logica-demostraciones]]). Una afirmación es científica si **prohíbe** algo observable: «todos los metales se dilatan al calentarse» se
refutaría con un metal que se contrae; «hay energías invisibles que lo explican todo» no prohíbe nada y no es contrastable. Cuanto más
prohíbe una hipótesis, más contenido tiene y más arriesgada es su prueba.

**La navaja de Ockham.** Entre explicaciones que predicen igual de bien, se prefiere la que menos supuestos añade (no porque sea
necesariamente cierta, sino porque es más fácil de poner a prueba).

## 3. Diseñar un experimento

> [!practico]
> Para saber si un abono hace crecer más las plantas no basta con echarlo y ver que crecen: habrían crecido igual. Hace
> falta un **grupo de control** (plantas idénticas sin abono), elegir **al azar** qué plantas reciben el abono (para no
> abonar sin querer las más sanas) y, si se puede, que quien mide no sepa cuáles son cuáles.


- **Variables**: la **independiente** es la que se manipula; la **dependiente**, la que se mide; las **controladas** se mantienen fijas.
- **Grupo de control**: idéntico salvo en el factor estudiado. Sin él no se sabe qué habría pasado de todos modos (mejoras espontáneas,
  **regresión a la media**, efecto placebo).
- **Aleatorización**: asignar al azar quién recibe el tratamiento reparte por igual las **variables de confusión**, incluidas las que no se
  conocen. Es lo que permite concluir **causalidad**.
- **Cegamiento**: si el participante (simple ciego) o también quien mide (doble ciego) no saben quién recibe qué, sus expectativas no sesgan
  el resultado.
- **Tamaño de muestra**: suficiente para detectar el efecto buscado (potencia), y fijado **antes** de mirar los datos.
- **Preregistro**: publicar la hipótesis y el análisis antes de recoger datos impide ajustar el análisis a lo que salga.

En un **estudio observacional** (no se asigna el tratamiento: se observa quién lo eligió) una correlación puede deberse a una tercera
variable. Quien toma vitaminas también suele hacer más ejercicio y fumar menos; la vitamina puede no tener ningún efecto. Con datos
observacionales se puede sugerir causalidad, pero se necesitan diseños cuidadosos (y modestia) para afirmarla.

## 4. Incertidumbre de medida

> [!practico]
> Si mides tu altura tres veces sale casi lo mismo, pero no exactamente: toda medida tiene una **duda**. Saber cuánta es tan
> importante como el valor: «$1{,}75 \pm 0{,}01$ m» y «$1{,}75 \pm 0{,}20$ m» no dicen lo mismo. Al combinar medidas, las dudas se
> acumulan, aunque menos de lo que parece, porque unos errores tienden a compensar otros.


El resultado de una medida es un valor **y** una incertidumbre: $L = (12{,}3 \pm 0{,}2)$ cm. La guía internacional (GUM, JCGM 100:2008) llama
**incertidumbre típica** a la desviación típica que describe la duda sobre el valor y distingue cómo se evalúa:

- **Tipo A**: estadísticamente, repitiendo la medida: la incertidumbre de la media de $n$ lecturas es $s/\sqrt n$.
- **Tipo B**: por otros medios: la resolución del instrumento, el certificado de calibración, la experiencia. Una resolución $d$ con lectura
  uniforme dentro de $\pm d/2$ da $u = d/\sqrt{12}$.

> [!formal] Con rigor: la ley de propagación de la GUM
> **Propagación.** Si $y = f(x_1, \dots, x_n)$ con entradas **independientes**, la ley de propagación de la GUM (aproximación lineal) es
>
> $$
> u(y)^2 = \sum_i \left(\frac{\partial f}{\partial x_i}\right)^2 u(x_i)^2 .
> $$
>
> Casos que salen de ella:
>
> - **Suma o resta**: se suman en cuadratura las incertidumbres **absolutas**: $u(a \pm b) = \sqrt{u_a^2 + u_b^2}$.
> - **Producto o cociente**: se suman en cuadratura las **relativas**: $\frac{u(ab)}{\lvert ab\rvert} = \sqrt{\left(\frac{u_a}{a}\right)^2 + \left(\frac{u_b}{b}\right)^2}$.
> - **Potencia** $y = x^k$: $\frac{u_y}{\lvert y\rvert} = \lvert k\rvert\frac{u_x}{\lvert x\rvert}$.
>
> Que se sumen en **cuadratura** (y no directamente) refleja que errores independientes tienden a compensarse en parte.

**Ejemplo resuelto 1.** Se mide el periodo de un péndulo cronometrando $20$ oscilaciones: $(36{,}4 \pm 0{,}2)$ s, luego $T = (1{,}820 \pm 0{,}010)$ s
(medir muchas oscilaciones divide la incertidumbre entre 20). Con $L = (0{,}823 \pm 0{,}002)$ m, $g = 4\pi^2L/T^2 = 9{,}81$ m/s$^2$, y
$\frac{u_g}{g} = \sqrt{\left(\frac{0{,}002}{0{,}823}\right)^2 + \left(2\cdot\frac{0{,}010}{1{,}820}\right)^2} = \sqrt{0{,}0024^2 + 0{,}0110^2} \approx 0{,}0113$: $g = (9{,}81 \pm 0{,}11)$ m/s$^2$. La
incertidumbre del tiempo domina: para mejorar, cronometra más oscilaciones, no midas mejor la cuerda.

**Expresar el resultado.** La incertidumbre se da con una o dos cifras significativas y el valor se redondea a la misma posición decimal:
$9{,}81 \pm 0{,}11$, no $9{,}8143 \pm 0{,}1127$. Dos medidas son **compatibles** si su diferencia es pequeña frente a la incertidumbre combinada.

## 5. Estimación de Fermi

> [!practico]
> ¿Cuántos litros de agua bebe tu ciudad en un día? No hace falta buscarlo para saber si son mil o mil millones: habitantes
> por litros por persona da una respuesta aproximada en un minuto. Ese truco de descomponer en factores razonables sirve para
> detectar errores enormes (un resultado mil veces mayor de lo esperado) antes de que causen problemas.


Enrico Fermi era célebre por estimar en segundos cantidades que parecían imposibles. El método: **descomponer** el problema en factores que
se puedan estimar, estimar cada uno con un orden de magnitud razonable y **multiplicar**. Los errores de cada factor tienden a compensarse.
Si para un factor solo sabes que está entre $a$ y $b$, la **media geométrica** $\sqrt{ab}$ es el valor central natural en escala logarítmica
(entre 100 y 10 000, el centro es 1000, no 5050).

**Ejemplo resuelto 2.** ¿Cuántas veces late un corazón humano en una vida? Unos $70$ latidos por minuto $\times\ 60\cdot24\cdot365 \approx 5\cdot10^5$
minutos al año $\times\ 80$ años $\approx 3\cdot10^9$. Orden de magnitud: mil millones largos. Una estimación así sirve para detectar errores de
cálculo groseros (si un programa da $10^{12}$, algo está mal) y para decidir si merece la pena medir con precisión.

## 6. Análisis dimensional

> [!practico]
> No se pueden sumar peras con manzanas, ni metros con segundos. Si al final de un cálculo te sale una velocidad en
> «metros por segundo al cuadrado», sabes que te has equivocado sin necesidad de rehacerlo. A veces incluso se adivina la forma
> de una fórmula solo mirando qué unidades tienen que salir.


Una ecuación física debe ser **homogénea**: los dos lados con las mismas dimensiones (longitud L, masa M, tiempo T…). Eso permite comprobar
fórmulas y hasta deducirlas.

**Ejemplo resuelto 3.** ¿De qué depende la velocidad $v$ de las olas en aguas profundas? Si solo de $g$ (L T$^{-2}$) y de la longitud de onda
$\lambda$ (L): $v = k\,g^a\lambda^b$ con dimensiones L T$^{-1}$ = L$^{a+b}$ T$^{-2a}$. Igualando: $-2a = -1$ y $a + b = 1$, luego $a = b = \tfrac12$:
$v = k\sqrt{g\lambda}$. (La teoría da $k = 1/\sqrt{2\pi}$; el análisis dimensional no da la constante, pero sí cómo escala: olas cuatro veces más
largas van el doble de rápido.) El **teorema $\Pi$ de Buckingham** generaliza la idea a muchas variables.

## 7. Leer gráficos sin engañarse

> [!practico]
> Un gráfico puede decir la verdad con los números y mentir con el dibujo: si el eje vertical empieza en $96$ en vez de en $0$,
> una diferencia pequeña parece enorme. Antes de mirar las barras o la curva, **lee los ejes**: dónde empiezan y si la escala
> sube de uno en uno o multiplicando por diez.


- **Escala logarítmica**: distancias iguales son **factores** iguales. Un crecimiento exponencial se ve como una recta; su pendiente da el
  factor por unidad de tiempo.
- **Escala log-log**: una ley de potencias $y = cx^k$ se ve como una recta de pendiente $k$
  ($\log y = \log c + k\log x$): así se reconocen leyes de escala en física, biología o redes.
- **Ejes truncados**: si el eje no empieza en cero, una diferencia del 4 % puede parecer del 300 %. Mira siempre dónde empieza el eje.
- **Regresión a la media**: si dos medidas tienen correlación $\rho < 1$, a una primera medida extrema le sigue, de media, una segunda menos
  extrema (en unidades tipificadas, $\rho\,z$). Quien sacó la peor nota y «mejoró tras el castigo» quizá solo regresó a la media: sin grupo de
  control no se puede atribuir la mejora al castigo.

## 8. Evaluar la evidencia

> [!practico]
> «Reduce el riesgo a la mitad» suena genial, pero si el riesgo era de $2$ entre un millón, pasa a $1$ entre un millón: casi nada.
> Antes de creerte un titular, pregunta: ¿cuánto en números absolutos?, ¿con cuántas personas se estudió?, ¿había grupo de
> control?, ¿lo ha repetido alguien más? Un solo estudio pequeño es una pista, no una prueba.


**Tasa base.** La probabilidad de que algo sea cierto dado un indicio depende de lo frecuente que era antes (Bayes, [[mat-probabilidad]]).
Una alarma muy sensible en un sistema con pocos casos reales produce sobre todo falsas alarmas.

**Riesgo relativo y absoluto.** Si un fármaco baja el riesgo del $2\,\%$ al $1{,}5\,\%$, la reducción **relativa** es del $25\,\%$ (titular
llamativo), pero la **absoluta** es de $0{,}5$ puntos, y hay que tratar a $1/0{,}005 = 200$ personas para evitar un caso (**número necesario a
tratar**). Para decidir hacen falta los dos, y los efectos secundarios.

**Jerarquía de la evidencia** (de menos a más fiable, en general): anécdotas y opiniones; estudios de casos; estudios observacionales;
ensayos controlados aleatorizados; revisiones sistemáticas y metaanálisis de buenos ensayos. Un estudio aislado, pequeño o sin grupo de
control es un indicio, no una conclusión.

**Reproducibilidad.** La Open Science Collaboration (2015) repitió 100 estudios publicados en tres revistas de psicología: el 97 % de los
originales tenía resultados significativos, frente al 36 % de las réplicas, y los efectos replicados eran en media la mitad de grandes.
Ioannidis (2005) mostró con un modelo sencillo por qué: si en un campo se ponen a prueba muchas hipótesis falsas, con poca potencia y
flexibilidad en el análisis, una fracción grande de los resultados «significativos» son falsos positivos. La declaración de la American
Statistical Association (2016) recuerda que un p-valor no mide la probabilidad de que la hipótesis sea cierta ([[mat-estadistica-inferencia]]).
Lo que aumenta la confianza: **réplicas independientes**, preregistro, muestras grandes, efectos grandes y mecanismos plausibles.

**Sesgos cognitivos** que afectan a todo el mundo, incluidos los científicos: **confirmación** (buscar y recordar lo que apoya lo que ya
creemos), **superviviente** (estudiar solo los casos que llegaron al final: las empresas de éxito, los aviones que volvieron), **disponibilidad**
(sobrestimar lo que se recuerda fácilmente), **anclaje**. **Falacias** frecuentes: *post hoc* («ocurrió después, luego por eso»), ataque a la
persona en lugar del argumento, apelación a la autoridad fuera de su campo, falso dilema, hombre de paja.

**Lista para leer una afirmación.** ¿Quién lo dice y qué gana? ¿Cuál es la fuente primaria? ¿Qué tipo de estudio es, con cuántos sujetos y qué
grupo de control? ¿Se dan efectos absolutos, con incertidumbre? ¿Se ha replicado? ¿Qué observación lo refutaría? ¿Encaja con lo que ya se sabe
o exige pruebas extraordinarias?

## 9. Comprobar con un programa

```python
import math
import random

# Propagación por cuadratura frente a simulación de muchas medidas (ejemplo resuelto 1).
L, uL, T, uT = 0.823, 0.002, 1.820, 0.010
g = 4 * math.pi ** 2 * L / T ** 2
ug = g * math.hypot(uL / L, 2 * uT / T)
rng = random.Random(3)
muestras = [4 * math.pi ** 2 * rng.gauss(L, uL) / rng.gauss(T, uT) ** 2 for _ in range(200_000)]
media = sum(muestras) / len(muestras)
sd = math.sqrt(sum((x - media) ** 2 for x in muestras) / (len(muestras) - 1))
assert round(g, 2) == 9.81 and abs(sd - ug) / ug < 0.02

# Regresión a la media: con correlación 0.5, los que sacan z > 2 en la primera prueba
# sacan de media bastante menos en la segunda.
primera, segunda = [], []
for _ in range(300_000):
    z1 = rng.gauss(0, 1)
    z2 = 0.5 * z1 + math.sqrt(1 - 0.25) * rng.gauss(0, 1)
    if z1 > 2:
        primera.append(z1)
        segunda.append(z2)
m1, m2 = sum(primera) / len(primera), sum(segunda) / len(segunda)
assert abs(m2 - 0.5 * m1) < 0.03                       # E[z2 | z1] = ρ z1

# Tasa base: una prueba buena, una enfermedad rara.
p = 0.001 * 0.99 / (0.001 * 0.99 + 0.999 * 0.01)
assert 0.08 < p < 0.10
```

## 10. Errores típicos

- Aceptar una hipótesis porque «encaja» con los datos sin preguntarse qué la refutaría.
- Sacar conclusiones causales de una correlación observacional; olvidar el grupo de control.
- Sumar incertidumbres absolutas en un producto, o no combinarlas en cuadratura cuando son independientes.
- Dar resultados con más cifras de las que justifica la incertidumbre.
- En una estimación de Fermi, usar la media aritmética de cotas que difieren en órdenes de magnitud.
- Leer un gráfico sin mirar dónde empieza el eje ni si la escala es logarítmica.
- Ignorar la tasa base; confundir riesgo relativo con absoluto.
- Fiarse de un único estudio pequeño, sobre todo si su resultado es sorprendente.

## 11. Resumen

- Hipótesis falsable $\to$ predicción $\to$ contraste; una refutación pesa más que mil confirmaciones.
- Experimento: control, aleatorización, cegamiento, tamaño de muestra fijado antes, preregistro.
- GUM: tipo A ($s/\sqrt n$) y tipo B; propagación $u_y^2 = \sum(\partial f/\partial x_i)^2u_i^2$; absolutas en sumas, relativas en productos.
- Fermi: descomponer, estimar, multiplicar; media geométrica de las cotas. Análisis dimensional para comprobar y deducir.
- Gráficos: log, log-log, ejes truncados, regresión a la media.
- Evidencia: tasa base, riesgo absoluto y NNT, jerarquía de estudios, reproducibilidad, sesgos y falacias.

## Repaso: lo que debe quedarte dentro de un mes

1. Una afirmación científica prohíbe algo observable.
2. Solo un experimento aleatorizado con control permite concluir causalidad con confianza.
3. Sumas: absolutas en cuadratura; productos: relativas en cuadratura.
4. La media geométrica de las cotas en una estimación de órdenes de magnitud.
5. Tasa base y riesgo absoluto antes de creerte un titular.

## Siguiente

[[tro-lectura-tecnica]] (leer manuales, estándares y artículos y verificar fuentes), [[mat-estadistica-inferencia]] (las herramientas
cuantitativas del contraste) y [[ing-medidas-laboratorio]] (la incertidumbre en el banco de trabajo).
