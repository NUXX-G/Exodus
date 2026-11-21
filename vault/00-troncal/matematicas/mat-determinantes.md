---
id: mat-determinantes
title: "Determinantes: definición, Sarrus, propiedades, desarrollo por adjuntos, inversa por adjuntos, rango por menores y significado geométrico"
area: matematicas
trunk_level: 4
prerequisites: [mat-matrices]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 2: «Determinantes», secciones 1 (concepto, orden dos y tres, regla de Sarrus), 2 (propiedades), 3 (desarrollo por los elementos de una línea, adjuntos, matrices triangulares, matriz adjunta), 4 (matriz inversa) y 5 (menores y rango). Apuntes Marea Verde, autores Leticia González Pascual y Álvaro Valdés Menéndez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2002%20Determinantes.pdf"
  - "G. Strang, «Introduction to Linear Algebra», 5.ª ed., Wellesley-Cambridge Press (2016), capítulo 5 (propiedades de los determinantes, permutaciones y cofactores, regla de Cramer, inversas y volúmenes)."
hints:
  - "Concepto: el determinante de una matriz cuadrada es un número que dice cuánto multiplica áreas (o volúmenes) la transformación; si vale 0, la matriz aplasta el espacio y no tiene inversa."
  - "Herramienta: 2 × 2: ad − bc; 3 × 3: Sarrus; mayores: haz ceros con operaciones de filas (sumar a una fila un múltiplo de otra no cambia el determinante) y desarrolla por la fila o columna con más ceros. det(AB) = det A · det B; det(kA) = kⁿ det A."
  - "Documentación: Marea Verde Matemáticas II cap. 2; Strang, cap. 5."
exercises:
  - id: determinante-2x2
    tier: 1
    prompt: |
      Calcula $\det {{A}}$. (Si es una fracción, escríbela como `p/q`.)
    variants:
      - values: {"A":"\\begin{pmatrix}7 & 3\\\\ 4 & 2\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}-5 & 2\\\\ 3 & 6\\end{pmatrix}"}
        answers: ["sha256:fe64bc5494b5031c5f3093894cb52eb3f50e24d8da628627c30076fd3e2312fe"]
      - values: {"A":"\\begin{pmatrix}0{,}5 & 4\\\\ 1 & 10\\end{pmatrix}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}9 & -1\\\\ 8 & -1\\end{pmatrix}"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}3 & 12\\\\ 1 & 4\\end{pmatrix}"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
      - values: {"A":"\\begin{pmatrix}-2 & -7\\\\ 5 & 3\\end{pmatrix}"}
        answers: ["sha256:35135aaa6cc23891b40cb3f378c53a17a1127210ce60e125ccf03efcfdaec458"]
  - id: determinante-3x3
    tier: 1
    prompt: |
      Calcula el determinante de ${{A}}$ (regla de Sarrus).
    variants:
      - values: {"A":"\\begin{pmatrix}2 & 1 & 0\\\\ 1 & 3 & -1\\\\ 0 & 2 & 4\\end{pmatrix}"}
        answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
      - values: {"A":"\\begin{pmatrix}1 & -2 & 3\\\\ 4 & 0 & 1\\\\ -1 & 5 & 2\\end{pmatrix}"}
        answers: ["sha256:96061e92f58e4bdcdee73df36183fe3ac64747c81c26f6c83aada8d2aabb1864"]
      - values: {"A":"\\begin{pmatrix}3 & 0 & 0\\\\ 7 & 2 & 0\\\\ 1 & -4 & 5\\end{pmatrix}"}
        answers: ["sha256:624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 2 & 3 & 4\\\\ 4 & 9 & 16\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}0 & 2 & -1\\\\ 3 & 1 & 2\\\\ -2 & 0 & 1\\end{pmatrix}"}
        answers: ["sha256:80843f62e074cdde6622f9e68f409d489c44e0ae3fc59493c90df79705611947"]
      - values: {"A":"\\begin{pmatrix}5 & 4 & 3\\\\ 2 & 1 & 0\\\\ 1 & 1 & 1\\end{pmatrix}"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: determinante-4x4
    tier: 2
    prompt: |
      Calcula el determinante de ${{A}}$ desarrollando por la fila o columna con más ceros.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2 & 0\\\\ 3 & 1 & 0 & 1\\\\ 0 & 0 & 1 & 0\\\\ 2 & 1 & 4 & 3\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}2 & 0 & 0 & 1\\\\ 0 & 3 & 0 & 0\\\\ 1 & 0 & 1 & 2\\\\ 0 & 4 & 2 & 1\\end{pmatrix}"}
        answers: ["sha256:7ed00270e394c3e190d18a977f5d0e1ed889bdc03a637e8fe35f00946841b0bf"]
      - values: {"A":"\\begin{pmatrix}1 & 2 & 0 & 0\\\\ 0 & 1 & 2 & 0\\\\ 0 & 0 & 1 & 2\\\\ 2 & 0 & 0 & 1\\end{pmatrix}"}
        answers: ["sha256:5e37b37c842d8df7106ee92e2e45beefef71ca60f51f7bb5cb50cb1e81c355a8"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 0 & 0\\\\ 3 & 0 & 2 & 1\\\\ 1 & 0 & 1 & 0\\\\ 0 & 2 & 1 & 4\\end{pmatrix}"}
        answers: ["sha256:37aa1ccf80e481832b2db282d4d4f895ee1e31219b7d0f6aee8dc8968828341b"]
      - values: {"A":"\\begin{pmatrix}3 & 0 & 1 & 0\\\\ 0 & 2 & 0 & 1\\\\ 1 & 0 & 1 & 0\\\\ 0 & 1 & 0 & 2\\end{pmatrix}"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 0 & 0\\\\ 1 & 2 & 1 & 0\\\\ 0 & 1 & 3 & 1\\\\ 0 & 0 & 1 & 4\\end{pmatrix}"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: determinante-de-k-por-a
    tier: 2
    type: numero
    sig: 10
    prompt: |
      $A$ es una matriz cuadrada de orden ${{n}}$ con $\det A = {{d}}$. ¿Cuánto vale $\det({{k}}A)$?
    variants:
      - values: {"n":3,"k":"2","d":"5"}
        answers: ["sha256:05e5c2c986b57b3ef387ce27af8d35ec3b2d83961d1d9ffc389dd984973f6eb5","sha256:1c5347228e9481dfeb9623b685ea29fbdfa910b7a4686ba851ba3f27b5bcdd41","sha256:a86f8df4d01f5ba484cff80d16ade751fddb5b67f4496d57cb00878f194bbb32"]
      - values: {"n":3,"k":"-1","d":"4"}
        answers: ["sha256:abc00ef6577cea5102d18e95f56b0d0db4a9f926acc64962a8e6eb02d00a4593","sha256:96adecfb945045cd3c536b1cd5353a546bf4e4f4b6649142361d84949efe6dfd","sha256:38ff0472154786bcd22d7cee3d97ed9f8096bde0c18afe04f8b16ad82a2ea30a"]
      - values: {"n":2,"k":"3","d":"-2"}
        answers: ["sha256:b0bdba5f3c490a2e4a504dd4f49593bc679adf3282f9b8f0a7bc6df76d18c7a3","sha256:622fb31b34cb728aa233660ea1d2f7b59adb4ad96525ad13d4e5c79f277d7bac","sha256:07c8c5e7e89eda8a4574b44a0abcd219486273b55d83a9db119de51af319b782"]
      - values: {"n":4,"k":"2","d":"0{,}5"}
        answers: ["sha256:6d326e4a909878baf24659335acd7d818e2f9cb4f6cd2bca937cbd12a30d744b","sha256:b968b0c1f1271ce1c5318239ed366acbef396f505d166e1d30370a13b9216036","sha256:e86640c427642c2f1bc331b618bc13af13a62ffe5901b8b38d16fd8b94549308"]
      - values: {"n":3,"k":"0{,}5","d":"16"}
        answers: ["sha256:f0394be4d3fe859896b57522f5730991f53bd16c3e977c55f9e1b7847324de21","sha256:19f128213a735272532387d61c5d14ce947d987d1fa9699f0774fc3f2c31ac5b","sha256:4cffcc81b893da594ad43c2289e6eea7bc051bd0ba25b417266cbc15c16b4182"]
      - values: {"n":2,"k":"-2","d":"7"}
        answers: ["sha256:87366f24ab9d63fede9af6b6b72e252209bcf2092efef86c07886fc33840905c","sha256:335b6501281ccd288eecf207c972263833e052fe3b471094f9e7bd54e5d050cf","sha256:758cda626b831f44dbeb189ab9de605ad75b5aa0ae03c411723e5c2adb8b3ce1"]
  - id: determinante-de-productos
    tier: 2
    type: numero
    sig: 10
    prompt: |
      $A$ y $B$ son matrices cuadradas del mismo orden con $\det A = {{a}}$ y $\det B = {{b}}$. ¿Cuánto vale $\det({{q}})$?
    variants:
      - values: {"a":4,"b":"-3","q":"AB"}
        answers: ["sha256:31454078e860f63cc3909fc46c017e7b275e46e0d9336e288828ae94b589e60d","sha256:ed53352df1fc3f3e22f8fa1ba1d54635ce47ee6f92a2ba559ee82c5c6326e1c4","sha256:384ca22ffc7a8126cdd01bab2dd3b11a0510d5b569b91a86d1c72a1948a036bd"]
      - values: {"a":5,"b":"2","q":"A^{-1}"}
        answers: ["sha256:bd5608d5b3272037dbf9038aa5e1837e141f24899542eab1e24d1fdea665bba2","sha256:b7a3ee8bd86b3ec982f6731997f6a454b965759f36de29eb09239b15627ef238","sha256:662c09a1d0dd1f7ae55d1538c1ab1d67ff59626f842edcbfd5d759b38a76005a"]
      - values: {"a":-2,"b":"7","q":"A^t B"}
        answers: ["sha256:e09c4b5fa974f30ae9eb9f973d27e3a071645f501efec644fb1b18aad5205940","sha256:7e19b890e6160fef54e7da9873f35046292e6d3ddd9e32bf2692ec9ecb89d27b","sha256:08d6d1454d59d60025d184f100aac7cceacc49f2bf73e4817ed73de7790dd813"]
      - values: {"a":3,"b":"6","q":"A^2"}
        answers: ["sha256:4087be34c42fe3b9e299e784df502f8ea08bd66e7f82ffa8ad5b11be8eff4611","sha256:6514bb6b1f82df91ab8a2ff6619f48b4610a4e85f9d5a501ea23363fa4883ba8","sha256:9beef5846f17dbd2b73c3cdf6a5f97e978a95c6565c99386a41226ae15ac20cf"]
      - values: {"a":-4,"b":"0{,}5","q":"A B^{-1}"}
        answers: ["sha256:8c7c7b29318697b775512a9617b3facd9c2be3720a30d3b4ffca1dd23767635f","sha256:0b17372b9a2e29673f88cf16a5dac0e0520f0ef860c9fa9cf0a1effccccb2258","sha256:b1eb5b0581e400ec93ca58372ec71a6ce7ff50f0a3a36538e14cb15cdcb70670"]
      - values: {"a":2,"b":"-1","q":"A^3 B^2"}
        answers: ["sha256:b66e1ad4c67213e48fefa328758cef9427af40609cfee547890d789397b508af","sha256:30ec39ac3db29bf65eb72228f785cedfb48bc0888f312b7d238833014c6f01f1","sha256:d8dda43793196008e6405fdb406bf8e8e235254d12258c946d9579d29abc90d9"]
  - id: parametro-que-anula
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Para qué valor de $k$ no es invertible la matriz ${{A}}$?{{cuad}}
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 3\\\\ 0 & 1 & k\\\\ 2 & 1 & 0\\end{pmatrix}","cuad":""}
        answers: ["sha256:8f7d603e426446d7c74fddbc69b861409926f656f642f745c4c627dcfd494aee","sha256:93e4e57b24520fcc6ed9e6fe8762ea02ebc28bc6783e125ccfda2491dedc6c83","sha256:f785b4132f275c458943de84775302700529b37ce0f830acf0171a0d34c81137"]
      - values: {"A":"\\begin{pmatrix}k & 1 & 1\\\\ 1 & k & 1\\\\ 1 & 1 & 2\\end{pmatrix}","cuad":" (si hay dos, da el mayor)"}
        answers: ["sha256:3f8050c2edd9a057aad8b5fe66b509262c32b86b00beb0b7f48624bc47122a87","sha256:6b8a6a11e0c93be72ae9d0645866fd7769fc854d8e0a8900d44d1bd747c1c1c5","sha256:5d58c7deccc27827929044a20dac9be0bcf2b5a310d955251580d83883c40506"]
      - values: {"A":"\\begin{pmatrix}2 & k & 1\\\\ 1 & 0 & -1\\\\ 3 & 1 & 0\\end{pmatrix}","cuad":""}
        answers: ["sha256:fba6dc25fd234322d810d2060ee40737559d8374872cbdbb53c81281ca699cae","sha256:8454ce622ea6546babcf75dba3e04660abf523ba5532c1ee4894faebf94549cf","sha256:24f2fa8cc80c2f35f9d1c84f91250499c64dbc816077a107ac5e588d0a116f60"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 1 & 2 & 3\\\\ 1 & 4 & k\\end{pmatrix}","cuad":""}
        answers: ["sha256:1f0c8a7af92a515623a35e620b8dbf416eba0864c58407377d0be8df48f56d82","sha256:b442de282cbe9bd821c0fad88c4caebdd8543e2bcbf7aff1375a82414ec51d8d","sha256:3321d32e67da1ec203fb6b9296e839b07a6ae7e5648559412f7bc8ca8e4a47eb"]
      - values: {"A":"\\begin{pmatrix}k & 2 & 0\\\\ 3 & 1 & 1\\\\ 0 & 4 & 2\\end{pmatrix}","cuad":""}
        answers: ["sha256:afc57b47f7c85751bb7a334dd9e210a28792b5caaa248bffc0da56d69631733d","sha256:c9e5e4f8d775c4f0d2f8cd364780cfaba857ee1c498927e526de7456ca219101","sha256:ca863137756197e8a3504f6b9b65904237f24c346660a322b0c4cae9197a5291"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & k\\\\ 2 & 1 & 3\\\\ 1 & 3 & 5\\end{pmatrix}","cuad":""}
        answers: ["sha256:9c46b763be58d5453f14e945ca55f440a44a4d97fd39529314aa8c7e6eb1b080","sha256:75b86e57ffcf328a05821c2e99a138ac839e13f13fc59cdaa3f55f5015ac931f","sha256:774bb5c74078ed5061ddb0bbe4e4f0537ff9808fc1f400d9321346d3a377440c"]
  - id: adjunto
    tier: 2
    prompt: |
      Calcula el adjunto $A_{{{pos}}}$ (con su signo $(-1)^{i+j}$) de la matriz ${{A}}$.
    variants:
      - values: {"A":"\\begin{pmatrix}2 & 1 & 3\\\\ 0 & -1 & 4\\\\ 5 & 2 & 1\\end{pmatrix}","pos":"12"}
        answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2\\\\ 3 & 4 & -1\\\\ 2 & 1 & 1\\end{pmatrix}","pos":"22"}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
      - values: {"A":"\\begin{pmatrix}3 & -2 & 1\\\\ 1 & 0 & 2\\\\ 4 & 1 & 5\\end{pmatrix}","pos":"31"}
        answers: ["sha256:e5e0093f285a4fb94c3fcc2ad7fd04edd10d429ccda87a9aa5e4718efadf182e"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 1\\\\ 2 & 3 & 1\\\\ 1 & 4 & 2\\end{pmatrix}","pos":"23"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}1 & 2 & 0\\\\ 0 & 1 & 3\\\\ 4 & 0 & 1\\end{pmatrix}","pos":"11"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}2 & 2 & 1\\\\ 1 & 3 & 2\\\\ 3 & 1 & 4\\end{pmatrix}","pos":"32"}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
  - id: inversa-por-adjuntos
    tier: 3
    prompt: |
      Calcula la inversa de $A = {{A}}$ con la fórmula $A^{-1} = \frac{1}{\det A}\,(\operatorname{Adj} A)^t$. ¿Cuánto vale su elemento ${{pos}}$? (Fracción como `p/q`.)
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 1\\\\ 0 & 1 & 2\\\\ 1 & 0 & 2\\end{pmatrix}","pos":"(1, 2)"}
        answers: ["sha256:eb2097272d51bb516018aa4e4b2ed3b6d3960967ecc4ca30aed1e1c3747399da"]
      - values: {"A":"\\begin{pmatrix}2 & 0 & 1\\\\ 1 & 1 & 1\\\\ 0 & 1 & 3\\end{pmatrix}","pos":"(3, 1)"}
        answers: ["sha256:bd82a28b1f088b3a186737712fb16fe7323aecb3abc234b38c9534349aaa1757"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 0\\\\ 0 & 2 & 1\\\\ 1 & 0 & 3\\end{pmatrix}","pos":"(2, 3)"}
        answers: ["sha256:c6d09104f200d01376a0f9e25d2b2f6026453f730925e9a8f0fc1c7587cb1ddc"]
      - values: {"A":"\\begin{pmatrix}3 & 1 & 0\\\\ 1 & 1 & 1\\\\ 0 & 2 & 1\\end{pmatrix}","pos":"(1, 1)"}
        answers: ["sha256:f70b94aeb67de2a5eb4bd8c2ea85128f13776cb545a661abe422b378a6cf3099"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 1\\\\ 2 & 1 & 0\\\\ 0 & 3 & 1\\end{pmatrix}","pos":"(2, 2)"}
        answers: ["sha256:2da190e578ddcfcde27e772094a620aacca6b6b5f26f3ce58a42640b4363b509"]
      - values: {"A":"\\begin{pmatrix}2 & 1 & 1\\\\ 0 & 1 & 0\\\\ 1 & 2 & 3\\end{pmatrix}","pos":"(3, 3)"}
        answers: ["sha256:0b9db2ecfb8de65fb248232d099982a827055c98d6372e9b4e1fa81d98dc1cc2"]
  - id: rango-con-parametro
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el rango de ${{A}}$ cuando $a = {{a}}$? (Estudia los menores.)
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & a\\\\ 2 & 4 & 6\\\\ 1 & 0 & 1\\end{pmatrix}","a":"3"}
        answers: ["sha256:35b5a8f86322b68ebaaa1da4bb075003630fac4364d345d2b80eeda8c9a8449c","sha256:cba0e7dec7e3219e7db5d52339265e94a1beec00cb9c38de44e7d2f19df79f49","sha256:9f56282c84be18e26446486234580a24adfafa2918348c643958f8115b674ca2"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 1 & a & 1\\\\ 1 & 1 & a\\end{pmatrix}","a":"2"}
        answers: ["sha256:791077e54279b6e8d7e9f7e26bb6a0e0fad8702f6e943a4da61e1b6f72237c94","sha256:a1cf13634f318e5bbd0ea61e8b3522cb59f59a4598159a015b3b14fce76b3dbc","sha256:b11e2cee3a31af93e45057a3ac9d8af8d6ab1c574126fecd17819c5c1992c546"]
      - values: {"A":"\\begin{pmatrix}a & 2 & 2\\\\ 2 & a & 2\\\\ 2 & 2 & a\\end{pmatrix}","a":"-4"}
        answers: ["sha256:48fe067a7f4fce4649c55b6e2eaedd8a9cd5624dd722039cd69626cc8c7ea6ed","sha256:7cf06281fcc74f41fe5ba4b640022e02f04a60e913245d815e670524e6057c22","sha256:f210293aeb80deae064b9b7ce243fdf9992cdd97c6fc1558a28cf26e7b5093f4"]
      - values: {"A":"\\begin{pmatrix}1 & a & 2\\\\ 2 & 1 & 4\\\\ 3 & 1 & 6\\end{pmatrix}","a":"0{,}5"}
        answers: ["sha256:c3df4791711317d5260b2e2cc12bfdb81089bd87280e20e10374b09c736e6ba1","sha256:3512cba75ac6551aeb592391837d6dedbe4a660f1864e8a17a9f372b36e8a55b","sha256:51d18b60c4252394f88c3fda24c75d9ee409095067a31c0386c51ed5fae78c4e"]
      - values: {"A":"\\begin{pmatrix}2 & 4 & 1\\\\ 1 & 2 & a\\\\ 3 & 6 & 1\\end{pmatrix}","a":"1"}
        answers: ["sha256:246983c7475e609657a3ef87ada835779dd0d477a658b052fcc178afd10cf10e","sha256:3c5b69ab09ebe41fb57e998b50fae7b26cf22f20e2ebc57daaabfce82287332c","sha256:48d483625814e3998b1fdd5a105ddd225ba79ae088167ff80c4a1f6ad97d1e27"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 1 & 2\\\\ 0 & 1 & 1 & a\\\\ 1 & 1 & 2 & 3\\end{pmatrix}","a":"1"}
        answers: ["sha256:18d69dcd8fd8cb98d771533f26aee5faebf2ac8eba3741dcbadc7c7f60363545","sha256:49467b0c272e93a0b33d9a207ce8e5e468b5ae46c94175d6482c6d2c4b8d58cc","sha256:34b93877cfcc4c512e1f90a737e594b95602370d13225adf4d450c330044c808"]
  - id: area-con-determinante
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula el área del triángulo de vértices ${{P}}$ con $\frac12\left|\det\begin{pmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{pmatrix}\right|$.
    variants:
      - values: {"P":"(1, 2),\\ (5, 4),\\ (3, 8)"}
        answers: ["sha256:4c40efff77c66ff780a58fdad17c77dc0b0ccfd8c6c7c7df6061b65af4effe50","sha256:00c110b059d8caf2e9963ab63a12cc16f25e8866c23dd57e3b8c1dd49d3e19cb","sha256:37ff9bbefcc8bb3ad4111d5cdaeb5957deb4aa5efbf3df5ca50500b47c037a1e"]
      - values: {"P":"(0, 0),\\ (6, 0),\\ (2, 5)"}
        answers: ["sha256:66978e8f69af13fcca997ff0fe7e0856968f3f452a5f2e6e1b376cbd8a386887","sha256:eef9f8c49969ccd37ae11c5ed11fd1d81cea93b5fe4d3b3c961ddd22a90fe132","sha256:d2f66a728f6c05c1562e0c80ee29c89efc893bfc7b45f311ac107f2f2da88f55"]
      - values: {"P":"(-2, 1),\\ (3, -1),\\ (1, 4)"}
        answers: ["sha256:3bca313151447e9ad0e0af8923fbcd9a60e4efe43715ecac88b0e285916f83b9","sha256:a72365ad3cb0891e52733702d31292b23be353d988f5bc64dde96a62084b3524","sha256:7d0e0d2057403b41c5b194c2e21f8924d4ffb31a37193c77cf18c64361eacf7d"]
      - values: {"P":"(1, 1),\\ (4, 1),\\ (1, 7)"}
        answers: ["sha256:721f6a957cef8c9f5f6375d61db83d80951958fe37393378627904ac11af751b","sha256:a9811c8666f282ff3ea597fb17c53b300aa77dbf03467f4a55d373316157a389","sha256:5be7d28954ca39fc848780a54b08477a2e5626c1c2aa8037e32ba08bcc9cdd37"]
      - values: {"P":"(-3, -2),\\ (2, 3),\\ (-1, 4)"}
        answers: ["sha256:c9480f7e2a2e831b4b8b0323f1e454eb3395add74881cbd73380d3d59f2b9d90","sha256:4c22405585d7d0bd6a3cf4cbd81167a93a6420f6128bf81e02abcd67bb832eaa","sha256:4c2c03cda25f6ee6c1e8d404a78d2889a83bf59e86b4f8fa0d862d36c039f5e7"]
      - values: {"P":"(2, -1),\\ (6, 3),\\ (0, 5)"}
        answers: ["sha256:341469c208f5b8d16554dc8c5cc256cc597354bc9394d804b163a262595749f0","sha256:350cd550b5e9d23fc848e87fa1ff15fa94ec9b72fd3dcddb02db61556d85cb46","sha256:9c1b882d3e4e53f7214f8a1cf84a2f24948308ac2d95631dbb3da7216f3b2a6a"]
  - id: matriz-triangular
    tier: 1
    prompt: |
      Calcula sin desarrollar el determinante de ${{A}}$. (Fracción como `p/q` si hace falta.)
    variants:
      - values: {"A":"\\begin{pmatrix}2 & 5 & -1\\\\ 0 & 3 & 4\\\\ 0 & 0 & -2\\end{pmatrix}"}
        answers: ["sha256:7ed00270e394c3e190d18a977f5d0e1ed889bdc03a637e8fe35f00946841b0bf"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 0 & 0\\\\ 7 & 2 & 0 & 0\\\\ 3 & 1 & 4 & 0\\\\ 9 & 8 & 6 & 0{,}5\\end{pmatrix}"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"A":"\\begin{pmatrix}-1 & 3 & 3\\\\ 0 & -1 & 3\\\\ 0 & 0 & -1\\end{pmatrix}"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}5 & 0 & 0\\\\ 2 & 2 & 0\\\\ 1 & 1 & 2\\end{pmatrix}"}
        answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
      - values: {"A":"\\begin{pmatrix}3 & 9 & 9 & 9\\\\ 0 & 1 & 9 & 9\\\\ 0 & 0 & 2 & 9\\\\ 0 & 0 & 0 & 4\\end{pmatrix}"}
        answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
      - values: {"A":"\\begin{pmatrix}6 & 0\\\\ 100 & -3\\end{pmatrix}"}
        answers: ["sha256:a30584d2420bfa43f4ae498d288fffab0f7ec60bdc05274198575aa0e2cd0e68"]
  - id: vandermonde
    tier: 3
    prompt: |
      Calcula el determinante de ${{A}}$ (es de tipo Vandermonde: busca la fórmula $(b - a)(c - a)(c - b)$).
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 2 & 3 & 5\\\\ 4 & 9 & 25\\end{pmatrix}"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 1 & 4 & 6\\\\ 1 & 16 & 36\\end{pmatrix}"}
        answers: ["sha256:624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ -1 & 2 & 3\\\\ 1 & 4 & 9\\end{pmatrix}"}
        answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 0 & 2 & 7\\\\ 0 & 4 & 49\\end{pmatrix}"}
        answers: ["sha256:ff5a1ae012afa5d4c889c50ad427aaf545d31a4fac04ffc1c4d03d403ba4250a"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ -2 & 1 & 4\\\\ 4 & 1 & 16\\end{pmatrix}"}
        answers: ["sha256:2fca346db656187102ce806ac732e06a62df0dbb2829e511a770556d398e1a6e"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 3 & 5 & 10\\\\ 9 & 25 & 100\\end{pmatrix}"}
        answers: ["sha256:ff5a1ae012afa5d4c889c50ad427aaf545d31a4fac04ffc1c4d03d403ba4250a"]
  - id: significado-del-determinante
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica el significado geométrico de $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ como área (con signo) del paralelogramo que forman los vectores columna.
      (b) Usa ese significado para explicar por qué $\det A = 0$ si y solo si las columnas son proporcionales, y por qué entonces $A$ no tiene inversa.
      (c) Explica por qué intercambiar dos filas cambia el signo y sumar a una fila un múltiplo de otra no cambia el determinante.
    sealed: "gz64:H4sIAAAAAAACCn2Uv44bRwzGX4VYbCEJG8FIqcBFEFyRIFXcGIhSUDO8OwKz5Hg4u7Di88O4NAxX6ZLOerGAs/pjX4B0o9ndj/x+H6l3nWmaKqt0u26zWeF6s4Ff1WCmULWQQb/fzxRggpewwgHCuofj5XL2y8MAcd3DvZYRBSaBjAUTJX0oOOoWflKBAxpB/3SWeuoHsAkw1akgkEFCCDpmFZJKEOmq30OmkkkihylhAby20w9wBEpw+lAIoZBNqeJe+ieM8B0cwlP/gz82fhAFdgH0MlqYpGLg018Cq6zGlWcF46+qTv2tztyDETyw9ylgJJWjAkrlRy1YWNdbuBOoTirySGKsQjb495Fq7+4owaxpGkkgUrrgoXz6nCnqdi972WxWByd/dzHk4F/03tcRTFPr8PbtgtZfyglFBz9FClwGf+9m4/iVDbJ6+iDuIiGMbKNTCxV3kItmLYFVMJG5n6oSllhqQbEWbUO2l/417PcjZqsKP77uAXNCqwhVo7YOvSEwPRSCSc41PCu/JcgTRU/YHjFQgVVUgzxJVcdnldtpRgFMrUldD4B2+gxvJnKJRzwCy0zF8AIuOLifpVIJOB4YC7joPSc0WCkERy9oa1geP5+C3W2KFssLm6Bymx/NE1nVLbyaxjaF7uws7BM/nv5OlXNSnyKtBfcSyXLCP/G/qX35RLcd+fJPU4OEUWEVdNSmp1J9QCNBwFLRmn0jYAmJBdc7b7Qt1dFP500SPXsUB15xzBr0am/bDV2ZDoVDt/v9XRcKVyqs3a77jRK2+KE/b09/8b+A8R8LifjcjqsuAXa7798P3+jevc3J986bX/YBXsKLHujNxDMmgitEezaEcIRmp0Vd+cCJI8b/q/XLZJXvvdoD6Xj6WAsHHNv/CaUFS0tnsdGoscxYGCUwQtYC1sK9Zmnflvvj/b9Mk6scLAUAAA=="
  - id: r-det-identidad
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale el determinante de la matriz identidad de orden $5$?
    answers: ["sha256:c220fc353e4ac454568423937613a0828ce2d3250c7353857a7629ebb51cab99","sha256:5edb957c737721cba18fb2b02e81e50b90b601a66ff0ae3462e77f64699addd8","sha256:0ebb1d818d9fbb968aa8d212db84527c764eda5d82ddf1bcf2225fce06fd8afb"]
  - id: r-fila-ceros
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Si una matriz cuadrada tiene una fila de ceros, ¿cuánto vale su determinante?
    answers: ["sha256:cb8be685ed4d365cd91afc2bcfb0717d0b8a547b51dbbe6a26987941beed5d70","sha256:8c2b9bd5fd82ae24aac84c78a6b7df767192df109a2cd12c404d608cb7d34e1b","sha256:5dfd9c20253219f47a8ce710b6f06a4b1e47ec1cfe5027da9360c36a37e0cb6a"]
  - id: r-invertible
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo tiene inversa una matriz cuadrada $A$?
    options:
      - |
        Si $\det A = 1$
      - |
        Si $\det A \neq 0$
      - |
        Si $\det A > 0$
      - |
        Siempre
    answers: ["sha256:96d769aae21f77cd31a0e78a221605460910b63110b28fa0f236e4854d31f844"]
  - id: r-traspuesta
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué relación hay entre $\det A$ y $\det A^t$?
    options:
      - |
        Es igual
      - |
        Es el opuesto
      - |
        Es el inverso
      - |
        Depende del orden
    answers: ["sha256:feaa37830601bcf049f92518f68323d53e39e6d7732cf645e87d80e733f58ae5"]
  - id: r-intercambio
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué le pasa al determinante si se intercambian dos filas?
    options:
      - |
        No cambia
      - |
        Se duplica
      - |
        Cambia de signo
      - |
        Vale $0$
    answers: ["sha256:0cd279f51ce9a13eae513f1e04ca052aada4d109c4906aed40ef7a74af568070"]
  - id: r-det-2a
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $A$ es $3 \times 3$ y $\det A = 3$, ¿cuánto vale $\det(2A)$?
    answers: ["sha256:579314f41e1fa9c0bd4209beb43b081e95f14468fa10e089aeee2842acfcfc95","sha256:b915a533c73c07ff02f1ca85e77573288ab3f8b8c47ca4985432400bd6ec7fb2","sha256:164033f31cdafdbd7e3e059b045ad9ec53c9c66239ce66797f57befc1ae23e3f"]
  - id: r-filas-iguales
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale el determinante de una matriz con dos filas iguales?
    answers: ["sha256:cdae0653b839caf9ea9ef1c1c3f80718e86fecfa426cf187e5f5e2c9f83cef59","sha256:49e18401f533f6363d53c53d57f1d418065d58ed210ddb761a575d330fdbf892","sha256:daaf3985cff20ad7e7407283432c9e93e698e47c1e6dba61e66118a407fd8c9d"]
---

# Determinantes: definición, Sarrus, propiedades, desarrollo por adjuntos, inversa por adjuntos, rango por menores y significado geométrico

A cada matriz cuadrada se le asocia un número, su **determinante**, que resume mucha información: si es distinto de cero, la matriz tiene inversa y
el sistema de ecuaciones asociado tiene solución única; su valor absoluto es el factor por el que la matriz multiplica áreas y volúmenes; su signo
dice si invierte la orientación (como un espejo). Este nodo enseña a calcular determinantes de cualquier tamaño, sus propiedades, y cómo usarlos
para hallar inversas y rangos.

## Objetivos

Al terminar sabrás:

1. Calcular determinantes de orden $2$ y $3$ (regla de Sarrus) y entender su significado geométrico.
2. Usar las propiedades de los determinantes para simplificar cálculos.
3. Desarrollar un determinante por los adjuntos de una línea y calcular determinantes de orden $4$.
4. Calcular la matriz inversa por adjuntos.
5. Calcular el rango por menores, también con parámetros.

## Qué debes dominar antes

[[mat-matrices]] (operaciones, inversa, rango por Gauss).

> [!question] Test de entrada
> 1. Calcula $2 \cdot 3 - 5 \cdot 1$.
> 2. ¿Qué matriz es la traspuesta de $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$?
> 3. ¿Cuál es la inversa de $\begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}$?
>
> Respuestas: $1$; $\begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix}$; $\begin{pmatrix} \frac12 & 0 \\ 0 & \frac15 \end{pmatrix}$.

## 1. Para qué sirve

- **Sistemas de ecuaciones**: decidir si un sistema tiene solución única y resolverlo con la regla de Cramer ([[mat-sistemas-lineales-bachillerato]]).
- **Geometría**: áreas de triángulos y paralelogramos, volúmenes de paralelepípedos, ecuaciones de rectas y planos (el tema `mat-vectores-espacio`).
- **Cálculo en varias variables**: el jacobiano (un determinante) dice cómo cambian las áreas al cambiar de coordenadas ([[mat-calculo-multivariable]]).
- **Álgebra lineal**: los valores propios se obtienen anulando un determinante ([[mat-algebra-lineal-1]]).

## 2. Definición y cálculo en órdenes 2 y 3

> [!practico]
> Los dos vectores columna de una matriz $2 \times 2$ forman un paralelogramo. Su área es el valor absoluto del determinante. Si los vectores
> apuntan en la misma dirección, el paralelogramo es plano, el área es $0$ y la matriz «aplasta» el plano sobre una recta.

- Orden $2$: $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$. *Ejemplo:* $\begin{vmatrix} 2 & 1 \\ 5 & 3 \end{vmatrix} = 1$.
- Orden $3$ (**regla de Sarrus**): suma de los productos de la diagonal principal y sus dos «paralelas», menos los de la diagonal secundaria y sus
  paralelas:
  $$
  \begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix} = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} .
  $$
  *Ejemplo:* $\begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{vmatrix} = 0 + 40 + 0 - 15 - 24 - 0 = 1$.

En general, el determinante de orden $n$ es una suma de $n!$ productos (uno por cada forma de elegir un elemento de cada fila y de cada columna), con un
signo que depende de la permutación; por eso se calcula con propiedades, no con la definición.

## 3. Propiedades

1. $\det A^t = \det A$ (todo lo que vale para filas vale para columnas).
2. Si una fila es nula, o dos filas son iguales o proporcionales, $\det A = 0$.
3. **Intercambiar** dos filas cambia el signo.
4. **Multiplicar** una fila por $k$ multiplica el determinante por $k$; por tanto $\det(kA) = k^n\det A$ en orden $n$.
5. **Sumar** a una fila un múltiplo de otra **no cambia** el determinante (es la operación de Gauss).
6. $\det(AB) = \det A \cdot \det B$; $\det A^{-1} = \frac{1}{\det A}$.
7. El determinante de una matriz **triangular** es el producto de su diagonal.

**Estrategia**: con la propiedad 5 se hacen ceros hasta llegar a una matriz triangular, o hasta tener una fila con muchos ceros para desarrollar.

## 4. Desarrollo por adjuntos e inversa

- El **menor complementario** $M_{ij}$ es el determinante que queda al quitar la fila $i$ y la columna $j$; el **adjunto** es $A_{ij} = (-1)^{i+j}M_{ij}$ (signos alternos en tablero de
  ajedrez, empezando por $+$).
- **Desarrollo de Laplace**: el determinante es la suma de los elementos de cualquier fila (o columna) por sus adjuntos: $\det A = \sum_j a_{ij}A_{ij}$. Conviene elegir la
  línea con más ceros.
- **Inversa por adjuntos**: si $\det A \neq 0$, $A^{-1} = \dfrac{1}{\det A}(\operatorname{Adj} A)^t$, donde $\operatorname{Adj} A$ es la matriz de adjuntos. Así, $A$ es invertible si y solo si $\det A \neq 0$.

> [!formal] Con rigor: por qué funciona la inversa por adjuntos
> El elemento $(i, k)$ de $A\,(\operatorname{Adj}A)^t$ es $\sum_j a_{ij}A_{kj}$. Si $i = k$, es el desarrollo de $\det A$ por la fila $i$. Si $i \neq k$, es el desarrollo por la fila $k$ del determinante de la
> matriz que resulta de sustituir la fila $k$ por la fila $i$: tiene dos filas iguales y vale $0$. Por tanto $A\,(\operatorname{Adj}A)^t = (\det A)\,I$, y dividiendo entre $\det A$ se
> obtiene la inversa. $\blacksquare$

## 5. Rango por menores

Un **menor de orden $k$** es el determinante de una submatriz $k \times k$. El **rango** de $A$ es el mayor orden de un menor no nulo. Método: buscar un menor no nulo e ir
**orlándolo** (añadiendo una fila y una columna) para ver si hay alguno mayor no nulo. Con un **parámetro**, se calculan los valores que anulan los menores
máximos y se estudia cada caso aparte: por ejemplo, $\begin{pmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{pmatrix}$ tiene determinante $(a - 1)^2(a + 2)$: rango $3$ si $a \neq 1, -2$; rango $2$ si $a = -2$; rango $1$ si
$a = 1$.

## 6. Significado geométrico

$|\det A|$ es el factor por el que la transformación $X \mapsto AX$ multiplica áreas (orden $2$) o volúmenes (orden $3$); el signo indica si conserva o invierte la
orientación. Por eso el área del triángulo de vértices $(x_i, y_i)$ es $\frac12\left|\det\begin{pmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{pmatrix}\right|$, y por eso $\det(AB) = \det A \det B$: aplicar dos
transformaciones seguidas multiplica los factores.

## 7. Errores típicos

- Equivocar los signos de Sarrus o de los adjuntos.
- Creer que $\det(A + B) = \det A + \det B$ o que $\det(kA) = k\det A$.
- Multiplicar una fila por $k$ al hacer Gauss y olvidar dividir el determinante entre $k$.
- Usar la matriz de adjuntos sin trasponerla al calcular la inversa.
- En el rango con parámetro, no estudiar por separado los valores que anulan el determinante.

## 8. Resumen

- $ad - bc$; Sarrus; en general, $n!$ productos con signo.
- Propiedades: traspuesta, filas proporcionales, intercambio, factor común, sumar múltiplos, producto, triangular.
- Adjuntos $A_{ij} = (-1)^{i+j}M_{ij}$; Laplace; $A^{-1} = \frac{1}{\det A}(\operatorname{Adj}A)^t$.
- Rango = mayor orden de un menor no nulo; parámetros.
- $|\det|$ = factor de áreas o volúmenes.

## Repaso: lo que debe quedarte dentro de un mes

1. La regla de Sarrus.
2. Qué operaciones de filas cambian o no el determinante.
3. Cómo se desarrolla por una fila con adjuntos.
4. La fórmula de la inversa por adjuntos y cuándo existe.
5. El significado geométrico del determinante.

## Siguiente

[[mat-sistemas-lineales-bachillerato]] (Rouché-Frobenius, Cramer y discusión de sistemas).
