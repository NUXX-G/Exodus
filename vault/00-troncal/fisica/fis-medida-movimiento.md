---
id: fis-medida-movimiento
title: "Medida y movimiento: unidades, error y cinemática"
area: fisica
trunk_level: 5
prerequisites: [mat-algebra-basica, mat-funciones-basicas]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018."
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
    prompt: |
      Un coche pasa de $0$ a $27$ m/s en $9$ s con aceleración constante. ¿Cuál es su aceleración, en m/s$^2$? Respuesta: un número.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: persecucion
    tier: 2
    prompt: |
      Un coche A sale a las $8{:}00$ a $60$ km/h por una carretera recta. Una hora después sale un coche B por el mismo camino y en el mismo sentido, a
      $90$ km/h. ¿A qué hora alcanza B a A? Respuesta en formato «H:MM» (por ejemplo «9:30»).
    answers: ["sha256:17ea4724806c9a840104754d08730e3edd9fcd70f0f625fc6bc894f5ed433a42"]
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
      - values: {"h":20}
        answers: ["sha256:f55aed9f7891d4faf0f186896677611837dd8b01bf14721bababd3ddcb3fabbe","sha256:2e11a098a886bfc36faca5cdface3e30809d7b3feb659d2f3d8eaaf0bbf1ea30","sha256:711175dd5c5e940452c89374608fc3bea24f952a6061ecae34ca811d99f58f81"]
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
    prompt: |
      Se lanza una piedra hacia arriba a $30$ m/s. Con $g = 10$ m/s$^2$ y sin rozamiento, ¿qué altura máxima alcanza, en metros? Respuesta: un número.
    answers: ["sha256:811786ad1ae74adfdd20dd0372abaaebc6246e343aebd01da0bfc4c02bf0106c"]
  - id: area-grafica-vt
    tier: 2
    prompt: |
      Un tren acelera uniformemente de $0$ a $20$ m/s en $10$ s, mantiene $20$ m/s durante $15$ s y frena uniformemente hasta detenerse en $5$ s.
      ¿Qué distancia recorre en total, en metros? (Pista: el desplazamiento es el **área** bajo la gráfica $v$-$t$.) Respuesta: un número.
    answers: ["sha256:83151157c10d85af7c84657c71c3e3603d955160f0526fce672481da83a2e090"]
  - id: tiro-horizontal
    tier: 2
    prompt: |
      Una pelota sale horizontalmente a $12$ m/s desde el borde de una azotea de $20$ m de altura. Con $g = 10$ m/s$^2$, ¿a qué distancia horizontal
      del edificio toca el suelo, en metros? Respuesta: un número.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: aceleracion-centripeta
    tier: 2
    type: numero
    sig: 3
    unit: "m/s^2"
    prompt: |
      Una rueda de $0{,}3$ m de radio gira a $600$ revoluciones por minuto. ¿Cuál es la aceleración centrípeta de un punto de
      su borde? Respuesta: en m/s$^2$, con **3 cifras significativas**.
    answers: ["sha256:437a3b39ac30fd45156741b4943502f4e20b9c9df49c14cfde6a3d0b3c994293","sha256:213e3136a0197efc1fea42e33458adbdcd6463dc4e095857c5efcdb7a02ef08e","sha256:792a3dfbaa70d485fa369512dffebc9325fdb1ca0203caf3ec10d1c8f7f21198"]
  - id: alcance-proyectil
    tier: 3
    prompt: |
      Un proyectil sale del suelo a $40$ m/s con un ángulo de $30^\circ$ sobre la horizontal. Sin rozamiento y con $g = 10$ m/s$^2$, ¿cuál es su alcance
      horizontal en metros? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:d6a4031733610bb080d0bfa794fcc9dbdcff74834aeaab7c6b927e21e9754037"]
  - id: dos-pelotas
    tier: 3
    prompt: |
      Desde una altura de $45$ m se suelta una pelota (sin velocidad inicial) y, **en el mismo instante**, se lanza otra hacia abajo con velocidad inicial $v_0$.
      La segunda llega al suelo $1$ s antes que la primera. Con $g = 10$ m/s$^2$, ¿cuánto vale $v_0$, en m/s? Respuesta: un número.
    answers: ["sha256:b902cc4550838229a710bfec4c38cbc7eb11082367a409df9135e7f007a96bda"]
  - id: distancia-seguridad
    tier: 3
    prompt: |
      Un conductor que va a $108$ km/h tarda $0{,}75$ s en reaccionar (durante ese tiempo no frena) y después frena con una aceleración constante de
      $-6$ m/s$^2$ hasta detenerse. ¿Cuál es la distancia total recorrida desde que ve el obstáculo, en metros? Respuesta: un número.
    answers: ["sha256:74fd4905d88b958e628bd91f9ec27a773b9b25b870b031232de24a5cb2c504ad"]
  - id: barco-y-corriente
    tier: 3
    prompt: |
      Un barco apunta perpendicularmente a la orilla de un río y avanza a $5$ m/s respecto al agua; la corriente arrastra a $3$ m/s. El **cuadrado** de
      su rapidez respecto a tierra, en (m/s)$^2$, es: respuesta, un número.
    answers: ["sha256:86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef"]
  - id: luz-del-sol
    tier: 3
    prompt: |
      Una unidad astronómica (distancia media Tierra-Sol) vale **exactamente** $149\,597\,870\,700$ m y la velocidad de la luz **exactamente**
      $299\,792\,458$ m/s. ¿Cuántos segundos tarda la luz del Sol en llegar a la Tierra? Respuesta: la **parte entera** del resultado.
    answers: ["sha256:db3defda18fafc0c197740438051c690d98b551a7e449d66390d38fa2db09b77"]
  - id: distancia-con-aceleracion
    tier: 3
    prompt: |
      Un coche pasa de $36$ km/h a $108$ km/h en $8$ s con aceleración constante. ¿Qué distancia recorre en esos $8$ s, en metros? Respuesta: un número.
    answers: ["sha256:a512db2741cd20693e4b16f19891e72b9ff12cead72761fc5e92d2aaf34740c1"]
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
---

# Medida y movimiento: unidades, error y cinemática

La física empieza con dos preguntas: **¿cómo se mide?** y **¿cómo se mueve?** Una buena parte de la ciencia y la ingeniería consiste en
medir bien, con las unidades correctas y sabiendo cuánto fiarse del número, y en describir con precisión cómo cambian las cosas en el
tiempo. Este nodo lo hace desde cero y deja listas las herramientas para las fuerzas y la energía.

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
cuantitativas** que pueden resultar falsas; si no puede equivocarse, no es ciencia. Todo modelo tiene un **rango de validez**: despreciar el
rozamiento del aire funciona para una piedra y falla para una pluma. Saber **cuándo** un modelo es aceptable es parte de saber física.

## 3. Magnitudes, unidades y el Sistema Internacional

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
exactamente $299\,792\,458$ m/s y de ahí sale la definición del metro. Las demás unidades son **derivadas**: m/s (velocidad), m/s$^2$
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

Una magnitud **escalar** queda definida por un número y una unidad (masa, tiempo, temperatura, rapidez). Una **vectorial** necesita
además **dirección y sentido** (desplazamiento, velocidad, aceleración, fuerza). Se representa con una flecha, y se descompone en **componentes**:
un vector de módulo $v$ y ángulo $\theta$ sobre el eje $x$ tiene $v_x = v\cos\theta$ y $v_y = v\sin\theta$. Recíprocamente, $v = \sqrt{v_x^2 + v_y^2}$.

**Suma de vectores**: se suman **componente a componente**. **Ejemplo:** $3$ N hacia el este más $4$ N hacia el norte dan una fuerza de módulo
$\sqrt{3^2 + 4^2} = 5$ N, con ángulo $\arctan\frac{4}{3} \approx 53{,}1^\circ$ al norte del este.

**Distancia no es desplazamiento.** La distancia recorrida es un escalar (lo que marca el cuentakilómetros); el **desplazamiento** es el vector
que une el punto inicial con el final. Si das una vuelta completa a una pista, la distancia es $400$ m y el desplazamiento es **cero**. Análogamente,
**rapidez** (escalar) frente a **velocidad** (vector).

## 7. Cinemática en una dimensión

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

Aceleración constante $a$. De la definición, $a = \frac{v - v_0}{t}$, se obtiene

$$
v = v_0 + a\,t .
$$

El **desplazamiento** es el **área bajo la gráfica $v$-$t$**. Con la velocidad variando linealmente, esa área es un trapecio:
$\Delta x = \frac{v_0 + v}{2}\,t$. Sustituyendo $v$:

$$
x = x_0 + v_0\,t + \tfrac{1}{2}\,a\,t^2 .
$$

Eliminando el tiempo entre las dos primeras relaciones (despejar $t = \frac{v - v_0}{a}$ y sustituir) se obtiene la tercera ecuación, muy útil
cuando no interesa el tiempo:

$$
v^2 = v_0^2 + 2\,a\,\Delta x .
$$

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

Un proyectil lanzado con velocidad $v_0$ y ángulo $\theta$ se mueve a la vez horizontal y verticalmente, y **los dos movimientos son
independientes** (Galileo): horizontalmente, sin aceleración (MRU); verticalmente, con $g$ (MRUA).

$$
x(t) = v_0\cos\theta\,t, \qquad y(t) = v_0\sin\theta\,t - \tfrac12 g t^2 .
$$

*Alcance.* El proyectil vuelve al suelo cuando $y = 0$, es decir en $t = \dfrac{2v_0\sin\theta}{g}$. Entonces

$$
R = v_0\cos\theta\cdot\frac{2v_0\sin\theta}{g} = \frac{v_0^2\sin 2\theta}{g}
$$

(usando $2\sin\theta\cos\theta = \sin 2\theta$). $R$ es **máximo para $\theta = 45^\circ$** y, a igual velocidad, los ángulos $\theta$ y $90^\circ - \theta$
dan el mismo alcance. La **altura máxima** es $H = \dfrac{(v_0\sin\theta)^2}{2g}$.

**Ejemplo resuelto:** $v_0 = 20$ m/s a $45^\circ$, $g = 10$: $R = \frac{400\cdot 1}{10} = 40$ m; $v_0\sin\theta \approx 14{,}14$ m/s,
$H = \frac{14{,}14^2}{20} = 10$ m; tiempo de vuelo $\frac{2\cdot 14{,}14}{10} \approx 2{,}83$ s.

**Límite del modelo:** con aire, el alcance es menor y la trayectoria deja de ser una parábola exacta; el rozamiento importa para pelotas rápidas o
proyectiles reales.

**Tiro horizontal.** Si se lanza horizontalmente desde una altura $h$, el tiempo de caída es $t = \sqrt{2h/g}$ (**no depende de la velocidad horizontal**) y el alcance
es $v_0\,t$.

## 9. Movimiento circular uniforme

Un objeto recorre una circunferencia de radio $r$ con **rapidez constante**. Se definen:

- **Periodo** $T$: tiempo de una vuelta. **Frecuencia** $f = \frac{1}{T}$ (en hercios, Hz).
- **Velocidad angular** $\omega = \dfrac{2\pi}{T} = 2\pi f$ (rad/s). $1$ revolución $= 2\pi$ rad; $\text{rpm} \times \frac{2\pi}{60} = $ rad/s.
- **Rapidez** $v = \omega r$.

Aunque la rapidez es constante, la **velocidad** (vector) cambia de dirección: hay **aceleración**, dirigida **hacia el centro**:

$$
a_c = \frac{v^2}{r} = \omega^2 r .
$$

*Justificación.* En un pequeño intervalo $\Delta t$ la velocidad gira un ángulo $\Delta\theta = \omega\Delta t$ sin cambiar de módulo, así que
$|\Delta\vec v| \approx v\,\Delta\theta$ y $a = \frac{|\Delta\vec v|}{\Delta t} = v\,\omega = \frac{v^2}{r}$. $\blacksquare$

**Ejemplo resuelto (la Luna).** La Luna da una vuelta en $T = 27{,}3$ días $= 2{,}36\cdot 10^6$ s a un radio de $3{,}84\cdot 10^8$ m. Su rapidez es
$v = \frac{2\pi r}{T} \approx 1023$ m/s y su aceleración hacia la Tierra, $a_c = \frac{v^2}{r} \approx 2{,}7\cdot 10^{-3}$ m/s$^2$. Comparada con $g = 9{,}81$:
$\frac{9{,}81}{2{,}73\cdot 10^{-3}} \approx 3600 = 60^2$, y la Luna está a unos $60$ radios terrestres: es la prueba que usó Newton para
sostener que la gravedad **disminuye con el cuadrado de la distancia**.

## 10. Movimiento relativo

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

Con el movimiento descrito, el nodo `fis-fuerzas-energia` pregunta **por qué** se mueven las cosas: las leyes de Newton, el trabajo y la energía.
