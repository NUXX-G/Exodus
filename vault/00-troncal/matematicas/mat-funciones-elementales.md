---
id: mat-funciones-elementales
title: "Funciones elementales: hipérbolas, raíces, valor absoluto, funciones a trozos y transformaciones"
area: matematicas
trunk_level: 5
prerequisites: [mat-funciones-basicas, mat-algebra-secundaria, mat-movimientos-plano, mat-numeros-reales, mat-funciones-exponencial-logaritmica, mat-funciones-trigonometricas]
academic_sources:
  - "Miranda Suárez, D. Matemáticas orientadas a las enseñanzas académicas, 4.º B ESO (LOMLOE), capítulo 11: «Funciones polinómicas, definidas a trozos y de proporcionalidad inversa», secciones 1-4 (rectas, parábolas y traslaciones en el plano, proporcionalidad inversa e hipérbola y = k/(x − b) + a, funciones definidas a trozos). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/11_funciones_lineales_cuadraticas.pdf (CC BY-NC-SA 3.0)."
  - "Gallegos Fernández, J. Matemáticas I, 1.º Bachillerato (LOMLOE), capítulo 6: «Funciones», secciones 1 (racionales, raíz, exponenciales y logarítmicas, a trozos, valor absoluto, oferta y demanda), 2 (operaciones, composición, inversa) y 3 (dominio, recorrido, simetrías, periodicidad, cortes y signo). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_06_Funciones.pdf"
  - "Abramson, J. et al. Precálculo, 2.ª ed. (en español). OpenStax, 2023, cap. 1, secciones 1.5 («Transformación de funciones»), 1.6 («Funciones de valor absoluto») y 1.7 («Funciones inversas»); cap. 3, sección 3.7 («Funciones racionales»). https://openstax.org/books/prec%C3%A1lculo-2ed/pages/1-5-transformacion-de-funciones (CC BY 4.0)."
hints:
  - "Concepto: casi todas las gráficas de este nodo salen de unas pocas básicas (y = x², y = 1/x, y = √x, y = |x|, y = 2^x) moviéndolas: f(x) + a sube a unidades; f(x − b) desplaza b unidades a la DERECHA; −f(x) refleja en el eje X; f(−x) refleja en el eje Y; k·f(x) estira en vertical."
  - "Herramienta: haz una tabla con 5-7 valores, incluidos los puntos «críticos» (donde se anula un denominador, donde empieza una raíz, donde cambia un tramo). Comprueba en GeoGebra o Desmos escribiendo la función. Para saber si es par o impar, calcula f(−x) y compáralo con f(x) y −f(x)."
  - "Documentación: Marea Verde 4.º B ESO, cap. 11 (secciones 2.2, 3 y 4); Matemáticas I, cap. 6 (secciones 1.5, 2 y 3); OpenStax Precálculo 2ed, secciones 1.5, 1.6 y 3.7."
exercises:
  - id: asintotas-hiperbola
    tier: 1
    prompt: |
      Halla las asíntotas de $y = \dfrac{{{p}}x {{q}}}{{{b}}}$: la vertical $x = u$ y la horizontal $y = v$. Respuesta: «u;v».
    variants:
      - values: {"p":2,"q":"+ 1","b":"x - 1"}
        answers: ["sha256:cbf6d3a344b6cdc05893f974cbab31c42bdafe2bf0acee2aa8f02f834e53a160"]
      - values: {"p":3,"q":"- 2","b":"x - 4"}
        answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
      - values: {"p":"-","q":"+ 5","b":"x + 2"}
        answers: ["sha256:d08bc3c05bd403980c213c0f164743bacba753fef61e1e8d45d8da87b3a109f2"]
      - values: {"p":4,"q":"+ 3","b":"x - 2"}
        answers: ["sha256:5c062f977e5d0e39b746d58304e9711596badda6c7fa054f415a197c006080d5"]
      - values: {"p":"","q":"- 6","b":"x - 3"}
        answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
      - values: {"p":5,"q":"+ 2","b":"x + 1"}
        answers: ["sha256:dda4ad566be33890416fd31aa7ad4f49af3898a0b8b5cc9bcb649ba8f00367fb"]
  - id: evaluar-trozos
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un aparcamiento cobra ${{A}}$ € la primera hora y ${{B}}$ € cada hora siguiente, con un máximo de ${{M}}$ € al día. ¿Cuánto se
      paga por ${{h}}$ horas?
    variants:
      - values: {"A":"2","B":"1{,}5","M":12,"h":5}
        answers: ["sha256:baa35fc0ce66994af7fb09a5adcb62745581153ffb526510a4beadd812001b8f","sha256:eb0432e016d75b5ddda1322f4af90092e51bca1d55e4230f9ed0e583446d9ef7","sha256:3b2de0380b99b592c1322e6b778ce8ba08441d186654dfb1b39b4be37f6043be"]
      - values: {"A":"3","B":"2","M":15,"h":4}
        answers: ["sha256:0af7b13d57f0489f6bf7d735fff4bbf89fc2b5e6489e0ffc72e62bf951134ad8","sha256:0371e71ee0294be6b4d823cafcf1ebe988c5393bc359eeee7926773fabe25223","sha256:8079e65d0b65a408728e63e1e2648e2e86d55abc7ce54f4c5bf90ce931992a79"]
      - values: {"A":"2{,}5","B":"1","M":10,"h":6}
        answers: ["sha256:f95b496a97aa1fd406695219dd62fcb7f62581020ca068dddb7a67e27c98d556","sha256:af507fc2e478e81f1669bd745b8a1d3dc3ff555d5259ad3d3ef66548eae769eb","sha256:7e033399c666241fcf596c90001b2a63e69d01054ecd815cf711e07d825afe6d"]
      - values: {"A":"1{,}8","B":"1{,}2","M":9,"h":5}
        answers: ["sha256:acaa9320ed7f45196b509deb372d1a9f87955fc8e4c6b1da6989709318dda361","sha256:9039317e5b252ca672ac5839314419d141d2d84dd782b3a57660f0e466b03d47","sha256:e074d6338db0109f54363e7a91a4005ea03f32acc87487ef588e185bc3fbb7bb"]
      - values: {"A":"4","B":"2{,}5","M":20,"h":6}
        answers: ["sha256:33dcaf38fc47b943daca1347e6ce417499dd69e2c68458e0de17690f80028e92","sha256:f23efa7ecd9a83680a93bfc862445cf058cced4047cf01e243bc4019cfab675d","sha256:8d0bb7eefa7065b6cdccedf18dd15af82137502cb1c81d5f4b0d91c85cd61827"]
      - values: {"A":"2","B":"1{,}5","M":12,"h":7}
        answers: ["sha256:ab8496dcd0a69f189bc447a00fb6d8ad09f59510c7dc8207fbc97dcbe6e93856","sha256:fe9a98e7accd3288a3d087a67e494cbca2e49bddd9fbe009370f4a060a0ada94","sha256:9933cde1832a99bd4509ff08f457495295e5e9c7f589556a27efbaf074b68245"]
  - id: traslacion-parabola
    tier: 1
    type: numero
    sig: 6
    prompt: |
      La gráfica de $g$ es la de $y = x^2$ trasladada ${{h}}$ unidades en horizontal (positivo: a la derecha) y ${{k}}$ en vertical
      (positivo: hacia arriba), es decir $g(x) = ({{hx}})^2 {{kx}}$. ¿Cuánto vale $g({{x0}})$?
    variants:
      - values: {"h":3,"k":1,"x0":6,"hx":"x - 3","kx":"+ 1"}
        answers: ["sha256:f44f2dc86198b3444880561bbbdb2641818dd514535ef6a514c0a5d2aae44ae8","sha256:09a0fdbeaa3862f05e231a4d1b5be8721102e0e076e5f6e486b1cd0a68df22be","sha256:6e0d8977e993d9fa12e26cedab6ec7695a7ecdbcd856101a0003e4f1a4faa921"]
      - values: {"h":-2,"k":4,"x0":1,"hx":"x + 2","kx":"+ 4"}
        answers: ["sha256:dd015713b489c169f475c133480efdf2b40026265a587ea0411c1740d0d8193c","sha256:427001bbfbeff70a622b514edc81bbe3dd5c40c1bc300719450e924ac7a2a1d4","sha256:754aa51ddd71f6880a9c0997c578708f497a5feffc255e33dc592e761573a8c7"]
      - values: {"h":1,"k":-3,"x0":-2,"hx":"x - 1","kx":"- 3"}
        answers: ["sha256:88602c6f112ec264219ff7d86d9b5f1fe6f48685c1041eb73e5ad9b4d3b73a3a","sha256:955116a8db0c109ddc815d87730f18b0c9612df7da0f2b2509195f59836ffd36","sha256:4ef9458b1a8f1c1ca6be459e15514ecda07dd224c1d278dbe49b7099a172cf15"]
      - values: {"h":5,"k":2,"x0":3,"hx":"x - 5","kx":"+ 2"}
        answers: ["sha256:f7393508ae2f2df4120c74dd81b97a6f906e729a4de904fe7c48048f514913f2","sha256:66f2fa110dcfe930a93ae6a4c9622cd5f92e7dbf028f0b8ceff0462e963103f5","sha256:d43599b1f597478d1bad7c05a150df54fde7b0e9bd32ad69b2ae898aced72580"]
      - values: {"h":-4,"k":-1,"x0":0,"hx":"x + 4","kx":"- 1"}
        answers: ["sha256:62341d098e31b56b225ab0c476a5c384b53ca2cff706bda2a08b46520d70fcff","sha256:2b9b3458c77f0d24ce7b36ce9c05ba91d1d7c9ef06209cd2a32f6288f47dc55e","sha256:a3e27c24790276a5ad5f34832d860ee7f71d1aa57369d8266ed95383780f2b37"]
      - values: {"h":2,"k":6,"x0":-1,"hx":"x - 2","kx":"+ 6"}
        answers: ["sha256:1892d3edf722ac1cec218f3f979966b24a15a697db079753f53d85934fa8561f","sha256:138dc05aa4a8303b8411c88b78a62c34d8fee29fe298f504e76df44c242e299f","sha256:749e2d686a0133c8edea079845c0e59656cdc92950fc4282a1e7df290b37cd41"]
  - id: impuesto-tramos
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Un impuesto cobra el ${{t1}}\,\%$ de lo que se gana hasta ${{L}}$ € y el ${{t2}}\,\%$ de lo que exceda de ${{L}}$ €. ¿Cuántos euros
      paga quien gana ${{x}}$ €?
    variants:
      - values: {"t1":10,"t2":25,"L":10000,"x":22000}
        answers: ["sha256:e64ed9540c61afc71e3f97ab6792481bd874ae7cd11a9df742c1c3161ae75a8c","sha256:1309b495280cf88921212e69030a9aba132bb3d1da31dbb594e55829ad506577","sha256:56d50b384970fdce297aa692de97df66425ab3b1275753c22fd6f85df66033b7"]
      - values: {"t1":15,"t2":30,"L":12000,"x":20000}
        answers: ["sha256:abe016e53939025256086986459d2e0f81cec4adba12e033ed9c9bea275d8cb9","sha256:36896e4b06fde61e84d2e54b97e3a93074ed850ccc09f76723957d42fd6246e4","sha256:ff16c62632b126b8b00f5af3d9d7a29ccb62a006241f3c3c2a1deada846165ca"]
      - values: {"t1":12,"t2":20,"L":8000,"x":8000}
        answers: ["sha256:afa7ddde5a917425e400c86c24826c2dc28ae4a8ca1292c097d38bd7f48c95d9","sha256:e432d6be01a20604e4b8cb4a959e0e0d769c72264559504e65ff7c76bb0db334","sha256:4359a2bd08e12906eaf18694d3289046db74a040e216bd35b01ea61656fadf6b"]
      - values: {"t1":20,"t2":35,"L":15000,"x":40000}
        answers: ["sha256:375dff44d3075ec10bcb0d7e39eefc9e9e3a4b7649facd6212cf1c158ad5bd1a","sha256:df8d4380c0a2617fcf456f8fc846b3cb0c778df1942b87e2a822c092b1e1ae19","sha256:a8abd5844ba275557f6dffb933c9771dd5442e11769676908e83a35a946ff80f"]
      - values: {"t1":5,"t2":15,"L":6000,"x":9500}
        answers: ["sha256:bd6f451f4702a31b06daab287289179c7169b1c8a5b46cd7f681aa651098fbf2","sha256:decccf7ff01124f8986dfbe08f7c0112f253462cf0c112d1b4567425912202d0","sha256:67b87c608f69af2dd9bea32b246c98559fb47b7d26e0a8e767179e5a06a6e198"]
      - values: {"t1":18,"t2":28,"L":20000,"x":35000}
        answers: ["sha256:4f290e4e30e84f3a6847b680ca1f90f9010391dbe306f4d330988ec32988e113","sha256:267cdc5d1396169af6268395bd8a2ee2bc1ccd2d0543fb430f87e0db8ad527af","sha256:3d113ea88b3ff9f758908e464eb523e67b774147bb6c806e841f1ff4c9f35bd8"]
  - id: vertice-valor-absoluto
    tier: 2
    prompt: |
      Halla el vértice (el punto más alto o más bajo) de $y = {{a}}|{{dentro}}| {{c}}$. Respuesta: «x;y».
    variants:
      - values: {"a":"-2","dentro":"x + 1","c":"+ 5"}
        answers: ["sha256:dda4ad566be33890416fd31aa7ad4f49af3898a0b8b5cc9bcb649ba8f00367fb"]
      - values: {"a":"3","dentro":"x - 2","c":"- 5"}
        answers: ["sha256:e64a9557d0c522ee92935d9ee76bf2e5383780bd52a7948e7f7b959b86f9acae"]
      - values: {"a":"-","dentro":"x - 4","c":"+ 7"}
        answers: ["sha256:303967d1437e85a0093d7a74e5a3acec2282fad4e534023ed0a8be8571b543cb"]
      - values: {"a":"2","dentro":"x + 3","c":"+ 1"}
        answers: ["sha256:514c055c3d77faf51a195fa5c0cdcd495cdafd0dc7e7b8338ad71054af111976"]
      - values: {"a":"-4","dentro":"x","c":"+ 6"}
        answers: ["sha256:b563aac6ff3d328a4e87ee81fbcd9184e666ec32937af739c8750571cc0af7b4"]
      - values: {"a":"","dentro":"x - 5","c":"- 2"}
        answers: ["sha256:383a9d6612e1f9863be85fa75da84636cdf1d55b5295c826354d32486213f0b3"]
  - id: cortes-valor-absoluto
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuántas veces corta al eje $X$ la gráfica de $y = {{a}}|{{dentro}}| {{c}}$?
    variants:
      - values: {"a":"-2","dentro":"x - 1","c":"+ 4"}
        answers: ["sha256:85a302d2f0133e4c010a6a3d173ae5fdff9c0754816f9c9df1d46526aaa0734b","sha256:b8e5777edec45e37ae75b7b8826af1f0fbeb5a649873ff937ac03374295d2912","sha256:1fd55cf03c1bcffd87a983d782f42348e33eafd4e3e61167255355ab05a95703"]
      - values: {"a":"3","dentro":"x - 2","c":"+ 5"}
        answers: ["sha256:2201a8785c022b9d382c32ebee4462d524ef60775d46782130351bc401a539a8","sha256:15bf05c7f477f68cb5f5febdf3e42f7dbac1ffb6cd3cc0ecb9825e16af2d4d5b","sha256:ade56442b0b3d987441d9e44c270f3c7f1739b4eb9b0b522951613f834fec4bf"]
      - values: {"a":"","dentro":"x + 1","c":""}
        answers: ["sha256:4deebab3cdd6aa5bac99a0fc2406e25d5b27e56f763e9d8c47370ae00c37d8d4","sha256:01584d24acd6bec3d30ffa50c8d3020d5526318a8d98679a3d01dc982759ccd1","sha256:bd5116117d6e3269a74d51100228a0c0902d082183f8f9c6ce89a27ad540d40e"]
      - values: {"a":"-","dentro":"x","c":"- 3"}
        answers: ["sha256:54a43d1b9d192a44382e30ae1581220990ba2a6a7cf7985d8294a2cf38bf058a","sha256:2141b2f147dad3aa74da920bb4592fbea68131da2d1604048e9044cffcac869d","sha256:26f1023ca7775c43877de491c3b6121086c4b52444bc5c20cfa53f1406c20fbb"]
      - values: {"a":"3","dentro":"x - 4","c":"- 6"}
        answers: ["sha256:7d78196b2b09c4678ada178379ebbab9b692b96de4844f96b0a47e3b753644a2","sha256:3e12ebab0fdd1b5eb9aa2eb9457e279c914e2b5d12edeba08267b5d42953eadb","sha256:b0dc08441131a07d743059ce2f28c98ff745455914c917f0ed56b87b49c39bd0"]
      - values: {"a":"-3","dentro":"x - 5","c":""}
        answers: ["sha256:1d93d31c8ed8b3bf467d3e1d183b7bd35250b3ded61c5345d62900a5405bb34e","sha256:ca66443a73188b68d6770bf54310245549f051b033424a4959807702d77afc16","sha256:7ca9a871fddd8d22796f6dc1ec158dd305476249e9708168247c75eb3e230576"]
  - id: dominio-raiz-cociente
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Sea $f(x) = \dfrac{\sqrt{{{raiz}}}}{{{b}}}$. ¿Cuántos enteros $x$ con $0 \le x \le {{M}}$ están en su dominio?
    variants:
      - values: {"raiz":"x - 2","b":"x - 5","M":15}
        answers: ["sha256:3f15edf9b342276679a211b78c6106c5d052c4fd4b59c4ee1d0a6894c47997a6","sha256:fc032fca06f7fa1f9aa181d6bfd86af2bdb441e0bbc2b2e904fa81ce2572c54e","sha256:a161d22d6c6649f7e8581e96c89cb390af422323383debf844df6a133d047dec"]
      - values: {"raiz":"x - 2","b":"x","M":10}
        answers: ["sha256:47c200a7a3d7b5704adeaad851b34c736961be5e2ef391e57b35ba54249b5335","sha256:ec2153527b6a2b00e708237eaaffa7f5ded9280f792ac09f14a454d6bc5dbe1a","sha256:20a8194c24de9601441d88f36967bf854384bef170d8d2836a625d0d6e0cfe19"]
      - values: {"raiz":"x - 4","b":"x - 4","M":12}
        answers: ["sha256:164cace142b9d0f912523c22c66e3f136b488b59b841b5f1a416a074aff7e292","sha256:84fcc874521a86394ef37c04c8634571cfa69ecfacb1854b434c78678acfa31f","sha256:4f8a6fabc5f8d366ae32bf87628644c15eed6f24d4d2e1417c8e366de1db74ac"]
      - values: {"raiz":"x - 1","b":"x - 9","M":20}
        answers: ["sha256:a9d2bb3f69651bf55d758f220ba7a41212259c907f758d7d6d1bd5d89b6ed70f","sha256:487eb6ff2639170c3def92ab1c00555fc8cdd51189cd88fffe3f921e88e322cd","sha256:58b846190c05a38248e3ce918b9d5b626afa8572ed75cb7d099f70e47ca8eb18"]
      - values: {"raiz":"x - 6","b":"x - 2","M":11}
        answers: ["sha256:2b029a4a3464ef9fcacad469ba9672a73eecb322939e44d7d0d5fda8e265c6c2","sha256:77d30a090a43682c931c460ece2419a07dd6c46fde31b0b71d0e31a37b2d0b9f","sha256:0d619272f675b59857ceb41f2bd0075dfca80d454b4b5ebf52e5853883543085"]
      - values: {"raiz":"x - 1","b":"x - 3","M":8}
        answers: ["sha256:c9376102956ee4c68b611da21d57e153c43e78e78926c541e79ce486bb26fdb7","sha256:b724591a6b60d0583c4689900ee39dd6e49db7ec15f5adf9b19177d88413d666","sha256:11dab3235f350987da4dc3d0c4acd071adf29c38d05939f44370cf5a74dfdac4"]
  - id: par-impar
    tier: 2
    type: opcion
    prompt: |
      ¿Cuál de estas funciones es **impar**?
    options:
      - |
        $f(x) = x^2 + x$
      - |
        $f(x) = x^3 - 5x$
      - |
        $f(x) = (x - 1)^2$
      - |
        $f(x) = 2^x$
    answers: ["sha256:13d92c46ba3413c5fb732399615740d856adecfb9441b664e2b3463d23acaec5"]
  - id: equilibrio
    tier: 2
    type: numero
    sig: 6
    prompt: |
      A precio $p$ (en euros) se demandan $D(p) = {{A}} - {{m}}p$ unidades y se ofrecen $O(p) = {{n}}p - {{B}}$. ¿Cuál es el precio de
      equilibrio?
    variants:
      - values: {"A":120,"m":3,"n":2,"B":35}
        answers: ["sha256:c2ec5f56d2df211a78bea6c9182e65ef5e948a64e28b8f73c14eeb8b40f247a7","sha256:90ff9efbff201280bc4d82249b80fd0c8233ae52e2421fdbb8c276cd98264d67","sha256:579a0920a75eec5accfb80d9cfadc5eb180b35893a0bed7961e45619b8132ca7"]
      - values: {"A":90,"m":2,"n":4,"B":24}
        answers: ["sha256:2440cfd0f6c472ca4211663560e939b95ee85127dae6c662e9ae7c1d9db111f5","sha256:5db0dd4025c2426d0beae0841a2e1c0969e7259b7203caff5f7d0f803015bb77","sha256:21a25cccbf3f9f9ac545da3f9716cc59ff98f6ebcaf031694f2913a3af1c65e3"]
      - values: {"A":200,"m":5,"n":3,"B":40}
        answers: ["sha256:b03214eb18b3850b757827e2164f40f4ba1fd2d696dcc45faea7a56a4d34facc","sha256:c5e673accdb147c1864e3543fb9c9df442548e70b001f9f54564d199a5a84ad7","sha256:5218b55f53df6322ae7dc8933aed0f271f4e806d222b3a828212a5ebfdf8eea9"]
      - values: {"A":60,"m":1,"n":2,"B":15}
        answers: ["sha256:1f72be42d2dab2596817aec33fac08b6a4626f24647edb6f1685d9c115d01c23","sha256:c7ee690aa55230e1691b23919831e242c7c450a58e957460c20555fedc648b42","sha256:69e4d76d5e3bd04fce3fb2853a9acd5571b943708b62317a716d15e04d7ea088"]
      - values: {"A":150,"m":4,"n":6,"B":50}
        answers: ["sha256:f8ee89dca84076d8a4baa1a9886d68a2d9446ba429b51010e3948522f4cec7ab","sha256:bcd39b2eb84c92e4cf32c3a98c11062e8b1823707967fe3cd042c31803002cda","sha256:bc932c88008018ce84209389aa0c7b9b00e7fc8ba2b424eb8c31566e2b058457"]
      - values: {"A":80,"m":2,"n":3,"B":25}
        answers: ["sha256:588a6f9ba53342c0421166c3ed2e6a7d5a6ffa570872e9140d0146e706c56754","sha256:989298d53782f309fe6b41cbb3085397f67deea52c964f104dfd5cc0a3479acb","sha256:15db97d005f0c5992974c819a20823729e55f6dc0386eaa62c4e0edb9af55b53"]
  - id: inversa-lineal
    tier: 2
    type: expresion
    vars: ["x"]
    prompt: |
      Halla la inversa de $f(x) = ({{a}}x {{b}}){{c}}$. Respuesta: $f^{-1}(x)$ como expresión en $x$.
    variants:
      - values: {"a":2,"b":"+ 3","c":"","ap":2,"bp":"- 3","cp":1}
        answers: ["sha256:9bc5188b534db4825939076f4a8aecfe2c24c671084fee2c6d3296420ecde4b9","sha256:f14a044c83d60500ccece7e6299453cf42fbcdb1b7afe2736669ff0a9fa6352c","sha256:02fb0dcfc34e81f197db37344a6ac6abd27ab44c896365904ad0b1917f1a1bc2","sha256:226c087e88db62cfd1b197172ae171efa3cfa40149b8eba1ccf9b661b9ad2e03","sha256:d77e9deb37a078df5a7a51244bb81483f5b0295a6f26560e8d200dec364cb945","sha256:24f1d035481eb1c151efa03cc2c53c6ed9327834761fbfafd28170feff9c5e40","sha256:8a20791ab8722e28826ef4dc964b54060d7ed54e591f46e159fd358418bb3eb6","sha256:5e9f62af1e5de3eeaf00a61c22f28dff6308968c00836f7d3d2a65d1faf4c70e"]
      - values: {"a":3,"b":"- 6","c":"","ap":3,"bp":"+ 6","cp":1}
        answers: ["sha256:f883ad19aacdb582d3e42482a5c70ce261accf5ba460cc509e69d03de0d83e8b","sha256:28abbac8f19fc8ba1728e7ac9d22b4ab5a73f577f024e84781a4b295e6a980c8","sha256:69a907ebbabd84ad50bd1823fc79c9db90d0d8ed946e386534e53cd1cc75c351","sha256:3b73f28b8921f3fde26ffac00df49fe05b0468637c0f5f4f4eb4bc445b89cb18","sha256:7a97a01d233f625e615e71988fbd754e9a2fb84c293e0d4bc1e9ac1d13957321","sha256:f724a82ad89abe72f7ecc48cec93b2a63b379a5e79722b04eb6ff5358727db19","sha256:61911a7ae57509f33015eefdc20fe3d2200fa51a63bfbbdf510513a041208993","sha256:d37691d81e9083867970b501a75f2ed638f51517e37b35b152df8b4b12293c12"]
      - values: {"a":5,"b":"+ 1","c":"/2","ap":5,"bp":"- 1","cp":2}
        answers: ["sha256:1acbd6982ef176fe643c510977ad8c2627ea0e0e363dac5f183880b3208adaa5","sha256:ac9be27e0d6aacf8d26ff50718517c51e37db751a3c58b9c7db1548a52d9b98c","sha256:04fe296e42f132ad9ea99345b763a5e1792df290c6f59966f85e1f60b298aea2","sha256:0c35f52b14abf422aa4426b33fb20ead090e54ad40d5aa0d593911fb41689f20","sha256:05d52e296709ec46be4d7698cb07237db6ecf78831b5a1468eb9269478ca75ea","sha256:68b95d49311b69d651af5bb19f74e23b2b5b623b026b916677ae6e3b5723cd3d","sha256:ea81e295e9c07f18c151e1350c33dce068ecd49ae49b220b9fcd38b1c8f6e9a7","sha256:d8975cc7171d1d5871a53ce74cea30d9e3a9735b91a93af3bf7c8515df645119"]
      - values: {"a":4,"b":"+ 8","c":"/3","ap":4,"bp":"- 8","cp":3}
        answers: ["sha256:2f6dc6bfddfb6b9c437aadcb08859f7e2c1ca57c3430de2f594e0a3f6d0a474c","sha256:a27a29978e1512cc3f4c3eddf981b6aad6c0c588e07a3868de8f9936e3bab8b6","sha256:cbf958d3b3349c9eb5b3e668ad962a4975daec91df825d1a26d85344e0a6d21a","sha256:599db40b5d74f76b68aa7f5f26be12bd8d83d7c47819d905a8dcc110b23ef8cd","sha256:3ca12344b2f38bb8f18357da6fb00ef77d3b86900170e5ea4035755fc7b76dd3","sha256:5863406a5df161908eb2ce67a40f2895c1d924d145306a97815be10f2e3c4e08","sha256:91f88004ecf2d9ddd8681d097138004b6f8603bdc11f9657d456a5e590fb83ea","sha256:abc11f3409b0ea5cc6fd4a1fd01ad9b95f137ee5bd2308a1e7c1de30158a89ab"]
      - values: {"a":1,"b":"- 7","c":"/2","ap":1,"bp":"+ 7","cp":2}
        answers: ["sha256:2a7b87d99b5e050b2b6c89c41b96ca529f8b1d75eba468cdf8c78285cdcf6520","sha256:c1b7a429a94264f9249b49d0304a91a6cf3978efc22d674322da17b6bd111092","sha256:c9e1239787a6fe5940681a93755104cc00b41d466ee4491481f2e0b6606d3d4c","sha256:86962cead1b420054e846c6f952c4398deadbc73e91a25c59f8ecc265352298f","sha256:97ca9752250ac5a6b7fbde915ad9ee3432bd2742f2d138852d203b82a39c04f6","sha256:b07576001033d1b11c7972da5bf56fec1c9292c829cc595982c370cb7d9329c3","sha256:be1e97335c9766f238bd52b7a145defc476dbeb22e12be4928b81d8eddfe5c57","sha256:30e0271e6e4436bf84c1d6285406a2e91254310fc87e236bafd81554211884af"]
      - values: {"a":6,"b":"+ 2","c":"/5","ap":6,"bp":"- 2","cp":5}
        answers: ["sha256:7c10e5056fc7ec07d1fabd8cc1708854ba92789400577ae75d471122eb9a82a0","sha256:cc4168ff0896872c8b9f06d90f30fc25ab6b80ba41e4b515cbbef7ae8a123ffd","sha256:d4c0210224411212f03c3986ec15ecfb10786e05cee2432592eb9e6ec52f2f15","sha256:5d7ed9b84d54c1158f035958c3405d95b3f0c5e510e844c0bb7cc4d8db3ae406","sha256:89e1295262492ec992142b15be20c8fc006c639810d52c6e7f1e8d57d6a17f1e","sha256:721483d2823a4bdd45dfe242409ac96b174a32c705878d8f3722e3882f8f10f6","sha256:d5cb15267702ad799c5e48cd2530c38650160587215f9de6274e8c5076a06470","sha256:e9730b53d4f296bc17b94716d70dbea400b991603cb67222deb3e91e2af515fd"]
  - id: transformacion-orden
    tier: 3
    type: opcion
    prompt: |
      ¿Qué transformaciones convierten la gráfica de $y = \sqrt{x}$ en la de $y = 2 - 3\sqrt{x - 1}$?
    options:
      - |
        Se sube $2$ y después se refleja en el eje $X$
      - |
        Se mueve $1$ a la izquierda y se refleja en el eje $Y$
      - |
        Se mueve $1$ a la derecha, se estira por $3$ y se sube $2$
      - |
        Se mueve $1$ a la derecha, se estira por $3$, se refleja en el eje $X$ y se sube $2$
    answers: ["sha256:0b53ace06cc444b9c37adb4086dffa572a45a265ac19105cda443298b61b664b"]
  - id: recorrido-hiperbola
    tier: 3
    type: opcion
    prompt: |
      ¿Cuál es el recorrido de $f(x) = 3 + \dfrac{2}{x + 1}$?
    options:
      - |
        Todos los reales salvo el $3$
      - |
        Todos los reales salvo el $-1$
      - |
        $(3, +\infty)$
      - |
        Todos los reales
    answers: ["sha256:87eb9f37583c2b5e6ad9d63f1e2e6c9d6e7301dedf145e6d39cb59d0e7c152fb"]
  - id: funcion-continua-parametro
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se define $f(x) = x^2 - 1$ si $x \le 2$ y $f(x) = a x - 3$ si $x > 2$. ¿Para qué valor de $a$ los dos trozos empalman (no hay
      salto en $x = 2$)?
    answers: ["sha256:4e8087f296b3a77f110efdb8fc3a1ab01f81e158d345e83f8a3c9ced239a5982","sha256:1287ac96a7869a6ca35b5914896338dc58141de200712fde4012efe4e07c2a09","sha256:e9680d83598bf45f56a8195c5529c1b0ac572d38c4fe08c726d5af2f54b1d815"]
  - id: tramos-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Un impuesto cobra el $10\,\%$ hasta $L$ euros y el $30\,\%$ de lo que excede de $L$. Escribe la cuota $I(x)$ como
      función a trozos y demuestra que **ganar más nunca hace que te quede menos dinero** después de pagar, es decir, que
      $x - I(x)$ es creciente. Explica por qué la idea «si paso al tramo siguiente pago el $30\,\%$ de todo» es falsa.
    sealed: "gz64:H4sIAAAAAAACCn1TwW7bOBT8lYHALSxX9druoYjb9FLksIWQPfRYFgZFvXgJSHwqSRVyg1z6J3ss0L/on/RLCpJOoiSLPRgypcd5M/PmXReeuzEYtsWuEH8tphLnWF9XN5u1lNUk4A3EGlJ2hCk/alGB8KS2xvN0eBkPiwkvUJf5+oS3qMUKNXu07BEcf2WPL6ojC3EPIBDPE85Ri520lvGPOsKrLvBKWmlrxueR4q9VCE55DOqgHMhDXGY2sW0kFu8LIe3ptZQNHYy91sqTv0k0z5I+PMMjcRWklDKVvMolWdY2a3yGpGYFKcm2J8Dc651KtPgrR0ajVXCkg0JLGMi2hmwgDOxNMF8UFiKzEDhmD16tRVnhOPMAqm8e+nSWfVrhQ7R1v8EbTPut2EWbO/bSRnvJh5//2ohDHXrje45m9Vwll/abEm8Q/2xLgYEdPLkZW+1IJ6qv8+z2m5Mxp14VyAa2mry0t3ip4HJR3+bhbB2rs6hpv71zsMb5XefFwC5OU9yXvT1dqUW5Qj3SgSEuRTTzjlTOgYJpSeFKdV5Bs70abUtRbTADY7nslTsYq7rlEgvqUmg8QQ2d0QqqA42O4c1hTJgVRMqslH+IMsLNkag1vFxKu0h5/3MSVYYbmzhLzVDpUa5w0c1w4LnjeVN0CoNyIcUXNGlqKSZD1OJ1moKO6UnEaApOpWhHi/NKCfz69gNHhFP8/V1m4odVURVubJzRxe7jdaGdCeQMF7viwmtnmtO2Cqjb3dPs0rj7FMpo0hPu3LjkaeTqucQRmvvBjdSorKEfVNerWV4jjWG0gX2x295UD4j83QRDlp4u6pyTvV8Uj//Yj3mDzaMG70cfzFX0OqXqUW4QVN+Yn98t9KhsyynYCTpmerYyaVM8WuODiY2wGH0anmYbjB1Nq9okOYb0f/ReTHnwnUJrrsiR1SZ6FRzlbN1mNA41nWPSKjDo82jSygd6qPfTzW/sBXijrQUAAA=="
  - id: r-derecha-izquierda
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se obtiene la gráfica de $y = (x - 4)^3$ a partir de la de $y = x^3$?
    options:
      - |
        4 unidades a la izquierda
      - |
        4 unidades a la derecha
      - |
        4 unidades hacia arriba
      - |
        4 unidades hacia abajo
    answers: ["sha256:ed2d5a0f5206bc6db49cf70e20fed56a96a22093dd5ea126c65bb8532f50dd5a"]
  - id: r-valor-absoluto-trozos
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Sea $f(x) = |x - 3|$. ¿Cuánto vale $f(-2)$?
    answers: ["sha256:69cbec326994bf2bff323b534057d6d587fb4b8a94d8f49bb703491283743055","sha256:b5e7fad869ed7ecb29facbed035e85fb349d2427cfac17cac7c99777efb10feb","sha256:82070aa6cb126cbd2457aa7889bcf3a07fcabe0aaa992d6cf391419efe432986"]
  - id: r-par
    tier: 2
    type: opcion
    review: true
    prompt: |
      Una función es **par** si para todo $x$ de su dominio se cumple…
    options:
      - |
        $f(-x) = -f(x)$
      - |
        $f(x + T) = f(x)$
      - |
        $f(-x) = f(x)$
      - |
        $f(x) \ge 0$
    answers: ["sha256:f478a0c667d118bd6ac3700196b3d3f4354df66cc39fad28e25105de1ddf8708"]
  - id: r-asintota-vertical
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿En qué valor de $x$ tiene la asíntota vertical $y = \dfrac{4}{x + 5} - 1$?
    answers: ["sha256:74a50e51f12b6d872903f0659f1f44b135ad7c97368fe3e233e2343fc92effb5","sha256:1f6001d29e3dfa1760771c5b59a75598bff5b4d3a500fcbf0adb1961e2699bbd","sha256:7d67e7259404d731bfe7a336d73c0b34906f6f53cb8ac239990f08fc014b704b"]
  - id: r-inversa-grafica
    tier: 2
    type: opcion
    review: true
    prompt: |
      La gráfica de $f^{-1}$ es la simétrica de la de $f$ respecto de…
    options:
      - |
        La recta $y = x$
      - |
        El eje $X$
      - |
        El eje $Y$
      - |
        El origen
    answers: ["sha256:f2c23b6a926962e3375033118d69a2f4705115e471fd33123c7b3e2932408282"]
  - id: r-trozos-evaluar
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Sea $f(x) = 2x + 1$ si $x < 3$ y $f(x) = 10 - x$ si $x \ge 3$. ¿Cuánto vale $f(3)$?
    answers: ["sha256:bf342f7489bc1493a7d93897267b50008960bc28f8828c5996ca94690f842160","sha256:84a29e2ba5e0822747d25ce92b4893c237cf05648512ea41fbee9184143a0c31","sha256:a3b676ab3ad0f71b95e163da319afb0315aa838556c3b42a5dd9f985df427275"]
  - id: r-tope-diario
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un aparcamiento cobra $3$ € la primera hora y $2$ € cada hora siguiente, con un máximo de $15$ € al día. ¿Cuánto pagas por
      $10$ horas?
    answers: ["sha256:e1cfcdeefd0c31f3cdd21652ea09f9999856460c64b1bb405e87cff07c334a64","sha256:cfc79b08f4cfd5b56b400a138c6d18bc55192c92bcc0e66b14c9ba387274b61e","sha256:760dd6d78862739538ece27a653e9cf6ba284b95904afe408981ec9f3cd84275"]
---

# Funciones elementales: hipérbolas, raíces, valor absoluto, funciones a trozos y transformaciones

En [[mat-funciones-basicas]] conociste rectas, parábolas y exponenciales. Este nodo completa el «catálogo» de funciones
de la ESO y el Bachillerato y, sobre todo, enseña un truco que ahorra mucho trabajo: **casi todas las gráficas son una
gráfica sencilla desplazada, reflejada o estirada**. Con eso y con las funciones definidas a trozos se modelan tarifas,
impuestos, termostatos y casi cualquier regla de la vida real.

## Objetivos

Al terminar sabrás:

1. Dibujar y analizar la proporcionalidad inversa y las hipérbolas $y = \frac{k}{x - b} + a$, con sus asíntotas.
2. Manejar las funciones raíz, valor absoluto, exponencial y logarítmica.
3. Obtener la gráfica de $a + k\,f(x - b)$, $-f(x)$ o $f(-x)$ a partir de la de $f$.
4. Definir, evaluar y dibujar funciones a trozos, y modelar tarifas por tramos.
5. Estudiar dominio, recorrido, cortes, signo, simetría (par o impar) y periodicidad de una función.
6. Componer funciones, hallar inversas y relacionar sus gráficas.

> [!question] Test de entrada
> 1. ¿Cuál es el dominio de $f(x) = \frac{1}{x - 2}$? 2. ¿Cuánto vale $|-3| + |2|$? 3. Si $f(x) = x^2$, ¿cuánto vale
> $f(x - 1)$ para $x = 4$?
>
> Respuestas: todos los reales salvo $2$; $5$; $9$.

## 1. Para qué sirve

- **Tarifas e impuestos**: el precio de la luz, las tarifas de taxi o los tramos de un impuesto son funciones a trozos.
- **Física**: la presión de un gas a temperatura constante es inversamente proporcional a su volumen ($pV = k$), una
  hipérbola; la intensidad de una luz decrece con el cuadrado de la distancia.
- **Economía**: oferta y demanda son funciones del precio; donde se cortan está el precio de equilibrio.
- **Programación**: una función a trozos es un `if` / `elif` / `else`; las transformaciones de gráficas son las de los
  gráficos por ordenador.

## 2. Proporcionalidad inversa e hipérbolas

> [!practico]
> Si un viaje de $120$ km lo haces a $60$ km/h tardas $2$ h; a $120$ km/h, $1$ h; a $30$ km/h, $4$ h. Velocidad y tiempo son
> **inversamente proporcionales**: su producto es siempre $120$. La gráfica no es una recta, sino una curva que baja cada
> vez más despacio y nunca toca los ejes (a ninguna velocidad tardas $0$ horas, y para tardar «infinito» haría falta ir a
> velocidad $0$). Esa curva es una **hipérbola**, y las rectas a las que se acerca sin tocarlas son sus **asíntotas**.

La función de **proporcionalidad inversa** es $f(x) = \frac{k}{x}$ con $k \ne 0$. Su dominio son todos los reales salvo el
$0$. Si $k > 0$, la gráfica ocupa el primer y el tercer cuadrante y es decreciente en cada rama; si $k < 0$, el segundo y el
cuarto. Los ejes son sus **asíntotas**: al crecer $|x|$, $\frac{k}{x}$ se acerca a $0$; al acercarse $x$ a $0$, $|f(x)|$ crece sin
límite.

Desplazando (sección 5) se obtiene la **hipérbola** general

$$
y = \frac{k}{x - b} + a ,
$$

con asíntota vertical $x = b$ y asíntota horizontal $y = a$. **Ejemplo resuelto.** $y = \frac{2x + 1}{x - 1}$. Dividiendo,
$2x + 1 = 2(x - 1) + 3$, así que $y = 2 + \frac{3}{x - 1}$: es $\frac{3}{x}$ desplazada $1$ a la derecha y $2$ hacia arriba.
Asíntotas $x = 1$ e $y = 2$; corta al eje $X$ donde $2x + 1 = 0$, en $x = -\frac{1}{2}$, y al eje $Y$ en $y = -1$.

## 3. Raíz, valor absoluto, exponencial y logarítmica

> [!practico]
> - La **raíz** $\sqrt{x}$ solo admite números $\ge 0$ y crece cada vez más despacio: para doblar $\sqrt x$ hay que
>   multiplicar $x$ por $4$.
> - El **valor absoluto** $|x|$ «quita el signo»: su gráfica es una V con el vértice en el origen.
> - La **exponencial** $2^x$ y el **logaritmo** $\log_2 x$ son una la inversa de la otra: lo que una hace, la otra lo
>   deshace, y sus gráficas son reflejos una de otra en la diagonal $y = x$.

| Función | Dominio | Recorrido | Forma |
|---|---|---|---|
| $\sqrt{x}$ | $[0, +\infty)$ | $[0, +\infty)$ | media parábola tumbada, creciente |
| $\vert x\vert$ | $\mathbb R$ | $[0, +\infty)$ | V con vértice en $(0, 0)$ |
| $a^x$ ($a > 1$) | $\mathbb R$ | $(0, +\infty)$ | creciente; asíntota $y = 0$ a la izquierda |
| $\log_a x$ ($a > 1$) | $(0, +\infty)$ | $\mathbb R$ | creciente; asíntota $x = 0$ |

El valor absoluto es la primera función **a trozos**: $|x| = x$ si $x \ge 0$ y $|x| = -x$ si $x < 0$ (ver [[mat-numeros-reales]]).

## 4. Funciones definidas a trozos

> [!practico]
> Un aparcamiento cobra $2$ € la primera hora, $1{,}50$ € cada hora siguiente y como mucho $12$ € al día. Una sola fórmula
> no sirve: hay una regla para cada **tramo**. Eso es una función a trozos, exactamente un `if` de programación: «si
> $x \le 1$, entonces…; si no, …».

Una **función definida a trozos** usa distintas fórmulas en distintos intervalos del dominio:

$$
f(x) = \begin{cases} x + 3 & \text{si } x < 0, \\ 3 - x^2 & \text{si } 0 \le x \le 2, \\ -1 & \text{si } x > 2. \end{cases}
$$

Para **evaluar**, primero se mira en qué tramo cae $x$: $f(-1) = 2$, $f(1) = 2$, $f(2) = -1$, $f(5) = -1$. Para **dibujar**, se
dibuja cada trozo solo en su intervalo, con punto relleno si el extremo entra y hueco si no. Esta $f$ no tiene saltos: en
$x = 0$ los dos trozos valen $3$ y en $x = 2$ valen $-1$. Cuando los trozos no «empalman», la gráfica da un **salto**
(la función no es **continua** ahí: se precisa en [[mat-calculo-1]]).

**Ejemplo resuelto (tramos de un impuesto inventado).** Se paga el $10\,\%$ de lo que se gana hasta $10\,000$ € y el
$25\,\%$ de lo que pasa de $10\,000$ €. Si $x$ son los ingresos,

$$
I(x) = \begin{cases} 0{,}10\,x & \text{si } 0 \le x \le 10\,000, \\ 1000 + 0{,}25\,(x - 10\,000) & \text{si } x > 10\,000. \end{cases}
$$

Con $16\,000$ €: $I = 1000 + 0{,}25\cdot 6000 = 2500$ €. Fíjate en que el $25\,\%$ solo se aplica **a la parte que excede**: ganar
un euro más nunca hace pagar más que ese euro (la función no da saltos). Es un error muy común creer lo contrario.

## 5. Transformar gráficas

> [!practico]
> Conociendo la gráfica de $y = x^2$, puedes dibujar $y = (x - 3)^2 + 1$ sin hacer tabla: es la **misma parábola movida**
> $3$ a la derecha y $1$ hacia arriba. Es la traslación de [[mat-movimientos-plano]] aplicada a una gráfica. El detalle
> que más confunde: $x - 3$ dentro **mueve a la derecha** (el vértice está donde $x - 3 = 0$, en $x = 3$).

Si se conoce la gráfica de $y = f(x)$:

| Nueva función | Efecto sobre la gráfica |
|---|---|
| $f(x) + a$ | traslación vertical de $a$ (arriba si $a > 0$) |
| $f(x - b)$ | traslación horizontal de $b$ (a la **derecha** si $b > 0$) |
| $-f(x)$ | simetría respecto del eje $X$ |
| $f(-x)$ | simetría respecto del eje $Y$ |
| $k\,f(x)$, $k > 0$ | estiramiento vertical de factor $k$ (compresión si $k < 1$) |
| $f(kx)$, $k > 0$ | compresión horizontal de factor $k$ (estiramiento si $k < 1$) |

> [!formal] Con rigor: por qué $f(x - b)$ se mueve a la derecha
> Sea $g(x) = f(x - b)$. Un punto $(x_0, y_0)$ está en la gráfica de $f$ si $y_0 = f(x_0)$. Entonces
> $g(x_0 + b) = f(x_0) = y_0$, es decir, $(x_0 + b, y_0)$ está en la gráfica de $g$. Cada punto de la gráfica de $f$ se
> traslada con el vector $(b, 0)$: la gráfica de $g$ es la de $f$ trasladada $b$ unidades a la derecha. Con el mismo
> razonamiento, $f(x) + a$ traslada con $(0, a)$; $-f(x)$ lleva $(x_0, y_0)$ a $(x_0, -y_0)$ (simetría de eje $X$) y
> $f(-x)$ lo lleva a $(-x_0, y_0)$ (simetría de eje $Y$). $\blacksquare$

**Ejemplo resuelto.** $y = -2|x + 1| + 4$: la V de $|x|$ se mueve $1$ a la izquierda, se estira por $2$, se refleja
(abre hacia abajo) y se sube $4$. Vértice en $(-1, 4)$, que es el **máximo**; corta al eje $X$ donde $|x + 1| = 2$, en
$x = 1$ y $x = -3$.

## 6. Características de una función

> [!practico]
> Antes de dibujar una función desconocida, se le hace una «ficha»: ¿dónde existe? (dominio), ¿qué valores toma?
> (recorrido), ¿dónde corta a los ejes?, ¿dónde es positiva?, ¿es simétrica?, ¿se repite? Con la ficha completa, el
> dibujo casi se hace solo.

- **Dominio** y **recorrido** (ver [[mat-funciones-basicas]]). Con raíces de índice par, el radicando $\ge 0$; con
  denominadores, $\ne 0$; con logaritmos, el argumento $> 0$.
- **Cortes con los ejes**: con el eje $Y$, $f(0)$ (si $0$ está en el dominio); con el eje $X$, las soluciones de $f(x) = 0$.
- **Signo**: los ceros y los puntos fuera del dominio dividen la recta en intervalos donde el signo no cambia (la tabla de
  signos de [[mat-algebra-secundaria]]).
- **Simetría**: $f$ es **par** si $f(-x) = f(x)$ para todo $x$ del dominio (gráfica simétrica respecto del eje $Y$: $x^2$,
  $|x|$), e **impar** si $f(-x) = -f(x)$ (simétrica respecto del origen: $x^3$, $\frac{1}{x}$).
- **Periodicidad**: $f$ es periódica de periodo $T > 0$ si $f(x + T) = f(x)$ para todo $x$; las funciones trigonométricas
  ([[mat-trigonometria]]) son el ejemplo principal.

**Ejemplo resuelto.** $f(x) = \frac{x}{x^2 + 1}$: dominio $\mathbb R$ (el denominador nunca es $0$); $f(-x) = \frac{-x}{x^2 + 1} =
-f(x)$, luego es **impar**; único corte con los ejes en $(0, 0)$; positiva si $x > 0$ y negativa si $x < 0$.

> [!formal] Con rigor: la suma de dos funciones impares es impar, y el producto, par
> Si $f(-x) = -f(x)$ y $g(-x) = -g(x)$, entonces $(f + g)(-x) = -f(x) - g(x) = -(f + g)(x)$, y
> $(fg)(-x) = (-f(x))(-g(x)) = (fg)(x)$. $\blacksquare$ (Por eso $x^3 + x$ es impar y $x \cdot x^3 = x^4$ es par.)

## 7. Operaciones, composición e inversa

Las funciones se suman, restan, multiplican y dividen punto a punto: $(f + g)(x) = f(x) + g(x)$, con dominio la parte común
(y, al dividir, sin los ceros del denominador). La **composición** $(g \circ f)(x) = g(f(x))$ y la **inversa** $f^{-1}$ se
vieron en [[mat-algebra-secundaria]]. Lo nuevo aquí es la gráfica: **la gráfica de $f^{-1}$ es la simétrica de la de $f$
respecto de la recta $y = x$**, porque si $(a, b)$ está en una, $(b, a)$ está en la otra. Solo tienen inversa las funciones
que no repiten valores (**inyectivas**): $x^2$ no la tiene en todo $\mathbb R$, pero sí en $[0, +\infty)$, donde su inversa es
$\sqrt{x}$.

**Oferta y demanda.** Si a precio $p$ los consumidores compran $D(p) = 100 - 2p$ unidades y los productores ofrecen
$O(p) = 3p - 20$, el **precio de equilibrio** cumple $D(p) = O(p)$: $100 - 2p = 3p - 20$, $p = 24$, con $52$ unidades.

## 8. Errores típicos

- Creer que $f(x - 3)$ mueve la gráfica a la izquierda.
- Olvidar excluir del dominio los ceros del denominador o los negativos bajo una raíz par.
- Evaluar una función a trozos con la fórmula equivocada (mirar primero el tramo).
- Pensar que en un impuesto por tramos «subir de tramo» hace pagar más por **todo** lo ganado.
- Confundir $f^{-1}(x)$ con $\frac{1}{f(x)}$.
- Llamar par a una función solo porque su fórmula tiene potencias pares: $(x - 1)^2$ no es par.

## Repaso: lo que debe quedarte dentro de un mes

1. $y = \frac{k}{x - b} + a$: hipérbola con asíntotas $x = b$ e $y = a$.
2. $f(x - b) + a$: mover $b$ a la derecha y $a$ arriba; $-f(x)$ y $f(-x)$, simetrías.
3. A trozos: primero el tramo, luego la fórmula; puede haber saltos.
4. Par: $f(-x) = f(x)$; impar: $f(-x) = -f(x)$.
5. La gráfica de $f^{-1}$ es la de $f$ reflejada en $y = x$.

## Siguiente

[[mat-combinatoria-probabilidad-basica]] cambia de tema: contar y medir la incertidumbre. Las funciones vuelven en
[[mat-trigonometria]] (periódicas) y en [[mat-calculo-1]] (el cálculo).
