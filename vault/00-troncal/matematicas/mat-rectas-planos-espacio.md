---
id: mat-rectas-planos-espacio
title: "Rectas y planos en el espacio: ecuaciones vectoriales, paramétricas, continuas, implícitas y generales, y posiciones relativas"
area: matematicas
trunk_level: 4
prerequisites: [mat-vectores-espacio, mat-sistemas-lineales-bachillerato]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 5: «Rectas y planos en el espacio», secciones 1 (ecuaciones de la recta: vectorial, paramétricas, continua, implícitas, por dos puntos), 2 (ecuaciones del plano: vectorial, paramétricas, general, segmentaria, por tres puntos, puntos coplanarios) y 3 (posiciones relativas de dos y tres planos, haces de planos, recta y plano). Apuntes Marea Verde, autores Leticia González Pascual y Álvaro Valdés Menéndez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2005%20RectasPlanos.pdf"
  - "OpenStax, «Calculus Volume 3» (2016), sección 2.5: «Equations of Lines and Planes in Space». https://openstax.org/details/books/calculus-volume-3"
hints:
  - "Concepto: una recta queda fijada por un punto y un vector director; un plano, por un punto y dos directores, o por un punto y un vector normal (perpendicular). En la ecuación general Ax + By + Cz + D = 0, el vector (A, B, C) es normal al plano."
  - "Herramienta: plano por tres puntos: normal = AB × AC. Posiciones relativas: forma el sistema con las ecuaciones y compara rangos (Rouché-Frobenius), o usa vectores: normales paralelas (planos paralelos), director perpendicular a la normal (recta paralela al plano), producto mixto nulo (rectas que se cortan)."
  - "Documentación: Marea Verde Matemáticas II cap. 5; OpenStax Calculus Volume 3, sección 2.5."
exercises:
  - id: plano-por-tres-puntos
    tier: 2
    prompt: |
      Halla la ecuación general $Ax + By + Cz + D = 0$ del plano que pasa por ${{P}}$, ${{Q}}$ y ${{R}}$, con coeficientes enteros sin factor común y el primer
      coeficiente no nulo positivo. Respuesta: `A;B;C;D`.
    variants:
      - values: {"P":"(1, 0, 2)","Q":"(2, 1, 0)","R":"(0, 3, 1)"}
        answers: ["sha256:7a439b11f36c50b60047952b0a8395359a1072918b1c4b7172f57cd5bdaf604d"]
      - values: {"P":"(0, 0, 0)","Q":"(1, 2, 3)","R":"(2, -1, 1)"}
        answers: ["sha256:58668466caa5938c86e676d648c4cc079bd03417de154a2aa23bf03f73e0a2c9"]
      - values: {"P":"(1, 1, 1)","Q":"(2, 0, 3)","R":"(0, 2, 2)"}
        answers: ["sha256:1fc54147a88af5547896bc21dea62d5ff11439d52524c1eb49f4b8c0af304589"]
      - values: {"P":"(3, 0, 0)","Q":"(0, 2, 0)","R":"(1, 1, 1)"}
        answers: ["sha256:3d341dd945876353733be13ba015c82d303a0f6d0c1a7956f33d6978da4a81ac"]
      - values: {"P":"(1, -1, 0)","Q":"(0, 1, 1)","R":"(2, 0, 3)"}
        answers: ["sha256:51af3180e56001be9e63b91c1e30d8dcaa2f1306671926f4d910a8416e122004"]
      - values: {"P":"(2, 2, 1)","Q":"(1, 0, 0)","R":"(0, 1, 2)"}
        answers: ["sha256:e4e53e30bda55bb46892c00c1ce7c43f43d1b20ef4cdf0c084f431b5d80d1bd2"]
  - id: plano-por-punto-y-normal
    tier: 1
    type: numero
    sig: 10
    prompt: |
      El plano que pasa por ${{P}}$ con vector normal ${{n}}$ es $Ax + By + Cz + D = 0$ con $(A, B, C) = {{n}}$. ¿Cuánto vale $D$?
    variants:
      - values: {"P":"(2, -1, 3)","n":"(1, 4, -2)"}
        answers: ["sha256:1ccb25928efb1f5cdc875317fa97fc7ae3e2278024d810224e0233f5328b3568","sha256:f6c61ac2cb519d92d4c9e27f765997433b00ae5604d392dde376f8f73376ce7d","sha256:4c41444d191780a06d81948208ebe65ec2a8987b46fd5e544dfbb6b280d87c08"]
      - values: {"P":"(0, 5, 1)","n":"(3, 0, 2)"}
        answers: ["sha256:835cd202af3bb5122a05eec50d83bfe7c787e69848ff2ce856b4d269183a70a1","sha256:8e8fd6aa560c3b5c3a0ac7a08648a1d95bba46b267ef3cae3e97dd21b564e675","sha256:c680d7bd4eb81fe49dd12aed90feededd129eec14185d8e3898a97b2ff8bb472"]
      - values: {"P":"(-1, -1, 4)","n":"(2, 2, 1)"}
        answers: ["sha256:fd644874d153c25022a47894dd9072049e403a75ec36c8d4280e29d3375f88d4","sha256:bf15e889eb078f10219eca721b5b95ce60ca20929af9a940175095608ba3bbb6","sha256:821ba847e6170a98074e9a6636f45bbabd9900c35d6f5cea6002074424410658"]
      - values: {"P":"(1, 0, 0)","n":"(6, -1, 5)"}
        answers: ["sha256:d306dc72048cd853f30a446c218af9ea890084f23854cb089f2d56ab337b97a0","sha256:076af17976f8a05fd0d1658f99e5820ba70ff1d05da71ab7d941775f4808ac50","sha256:9c6703cd3b1e77f8a1899408dde26f76f951c77927a39e2a9cbe3090b8b22140"]
      - values: {"P":"(3, 2, -2)","n":"(0, 1, 1)"}
        answers: ["sha256:08ec61de03319937512e9f6fe83bfbeb8fc6ea9925e124e5b118759fc39ba35e","sha256:1fce75eb8c2cfcf3d58d37007db9e520fb81085404c8d86087894ee79af6d07c","sha256:fed32c9cb121395d39bdbf43b4e02918266ccf87eb6e6a36695c3cea9db669a6"]
      - values: {"P":"(4, -3, 1)","n":"(1, 1, 1)"}
        answers: ["sha256:7d60b9d8c665143997070ee89c54288d2bea9d4c7ed101edff98adfd50f74a18","sha256:577b24af910a9c2d66bf5b0084266d69a2e5b0f93195a13feec5040143459021","sha256:2394bd38165a4e69957ece03795457f2b14d3ef0ed637650d011a21a3362d607"]
  - id: punto-de-la-recta
    tier: 1
    prompt: |
      La recta $r$ pasa por $A{{A}}$ y $B{{B}}$; en forma vectorial, $P = A + \lambda\,\overrightarrow{AB}$. ¿Qué punto corresponde a $\lambda = {{l}}$? Respuesta: `x;y;z`.
    variants:
      - values: {"A":"(1, 0, -2)","B":"(3, 1, 2)","l":"2"}
        answers: ["sha256:8c409ace44c4239402ee4e34d91dccc32f93ad6a8bb58f23b6e11dc925e04cff"]
      - values: {"A":"(0, 4, 1)","B":"(1, 1, 1)","l":"-1"}
        answers: ["sha256:03fbe854a7b0b1da65af2b012c748434a83444d79037cb9f642d62a02358b050"]
      - values: {"A":"(2, 2, 2)","B":"(5, -1, 0)","l":"0{,}5"}
        answers: ["sha256:862898ef2757b608a7634fbf49157b9447b73127585be680ba06918e8558af0e"]
      - values: {"A":"(-1, 3, 0)","B":"(1, 3, 4)","l":"3"}
        answers: ["sha256:6bb9502bb2a14587c1b418d2acfbdf6a9bc50830aa9b021adbb6fc619eaf21cb"]
      - values: {"A":"(4, 0, 1)","B":"(2, 2, 3)","l":"-2"}
        answers: ["sha256:b508e188b15a732b7683f4a9f6fdee39b076903ca9140ac4e79dcfbfba51be81"]
      - values: {"A":"(0, 0, 5)","B":"(1, 2, 3)","l":"1{,}5"}
        answers: ["sha256:9ebbbafd24aaab90db3a1b4152a15c46b3752eb73157ce6275189de76e87169f"]
  - id: punto-en-el-plano
    tier: 1
    prompt: |
      ¿Pertenece el punto ${{X}}$ al plano ${{p}}$? Responde `si` o `no`.
    variants:
      - values: {"p":"2x - y + 3z - 4 = 0","X":"(1, 1, 1)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"p":"x + y + z - 6 = 0","X":"(1, 2, 3)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"p":"3x - 2z + 1 = 0","X":"(1, 5, 3)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"p":"x - 2y + z = 0","X":"(2, 1, 1)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"p":"4x + y - z - 3 = 0","X":"(1, 1, 1)"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"p":"2y + 3z - 7 = 0","X":"(5, 2, 1)"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
  - id: dos-planos
    tier: 2
    prompt: |
      ¿Cómo son los planos ${{p}}$ y ${{q}}$? Responde `secantes`, `paralelos` o `coincidentes`.
    variants:
      - values: {"p":"x + 2y - z + 3 = 0","q":"2x + 4y - 2z + 1 = 0"}
        answers: ["sha256:7aa883db0a0198e3d871c2ae5d78637cb09b6d825d0623f89bb63260315c08a0"]
      - values: {"p":"x + y + z - 2 = 0","q":"x - y + 2z = 0"}
        answers: ["sha256:d52989c1ac76670ef7cf710cd5709189e582e2a70f4507071528f01820298115"]
      - values: {"p":"3x - y + 2z + 1 = 0","q":"-6x + 2y - 4z - 2 = 0"}
        answers: ["sha256:40f10a1d0bb1b8edcda76c58a69f317573b381d3999228623711e7132ff972b7"]
      - values: {"p":"2x + z + 5 = 0","q":"4x + 2z + 7 = 0"}
        answers: ["sha256:7aa883db0a0198e3d871c2ae5d78637cb09b6d825d0623f89bb63260315c08a0"]
      - values: {"p":"x + 2y + 3z = 0","q":"3x + 2y + z = 0"}
        answers: ["sha256:d52989c1ac76670ef7cf710cd5709189e582e2a70f4507071528f01820298115"]
      - values: {"p":"x - y + z + 4 = 0","q":"2x - 2y + 2z + 8 = 0"}
        answers: ["sha256:40f10a1d0bb1b8edcda76c58a69f317573b381d3999228623711e7132ff972b7"]
  - id: recta-y-plano
    tier: 2
    prompt: |
      La recta pasa por ${{A}}$ con vector director ${{v}}$. ¿Cuál es su posición respecto del plano ${{p}}$? Responde `secante`, `paralela` o `contenida`.
    variants:
      - values: {"A":"(1, 0, 2)","v":"(1, 0, 1)","p":"x - 2y + z - 3 = 0"}
        answers: ["sha256:cfe3782dd477c1a4d13304d76df25aadb5aab004dab64fafdb88935b2455b858"]
      - values: {"A":"(0, 1, 1)","v":"(2, 1, 0)","p":"x - 2y + 3z - 1 = 0"}
        answers: ["sha256:2d3e0c4ff867f28b8f2ad4f18f81696477fbee4fe19accaedd9f6fbeca913156"]
      - values: {"A":"(2, 2, 0)","v":"(1, 0, -1)","p":"x + 3y + z - 5 = 0"}
        answers: ["sha256:8ab2fb88029f5c5e7445663324dbbb5416158b4e1c889fc17883aaea85007131"]
      - values: {"A":"(1, 1, 1)","v":"(1, 1, 0)","p":"3x + 2y - z - 4 = 0"}
        answers: ["sha256:cfe3782dd477c1a4d13304d76df25aadb5aab004dab64fafdb88935b2455b858"]
      - values: {"A":"(0, 0, 0)","v":"(1, 2, 3)","p":"x + y - z + 2 = 0"}
        answers: ["sha256:8ab2fb88029f5c5e7445663324dbbb5416158b4e1c889fc17883aaea85007131"]
      - values: {"A":"(3, -1, 2)","v":"(2, 2, -2)","p":"x + z - 5 = 0"}
        answers: ["sha256:2d3e0c4ff867f28b8f2ad4f18f81696477fbee4fe19accaedd9f6fbeca913156"]
  - id: interseccion-recta-plano
    tier: 2
    prompt: |
      ¿En qué punto corta la recta que pasa por ${{A}}$ con director ${{v}}$ al plano ${{p}}$? Respuesta: `x;y;z`.
    variants:
      - values: {"A":"(1, 2, 0)","v":"(1, -1, 2)","p":"2x + y + z - 10 = 0"}
        answers: ["sha256:9d2d9e48b8c89c3e1ac229caa1cd5de9b1432c7e5c4c3fa7171b7dd3000efa20"]
      - values: {"A":"(0, 0, 1)","v":"(1, 1, 1)","p":"x + 2y + 3z - 15 = 0"}
        answers: ["sha256:3589ff0b3bf15ca56aca1977c9887579dd058d02871dde0db99125cc58c86830"]
      - values: {"A":"(2, -1, 3)","v":"(0, 2, -1)","p":"x + y + z - 7 = 0"}
        answers: ["sha256:5362cba3fbb748dc24f608785f9dd97fd7b93044e719d9ce2021bcfa5b19ee05"]
      - values: {"A":"(1, 0, 0)","v":"(2, 1, 1)","p":"x - y + 2z - 4 = 0"}
        answers: ["sha256:b6786c4598c3b3684aa8a14d0e3db4c6700500ed7fa3524f9a21ae4e5494b881"]
      - values: {"A":"(-1, 2, 1)","v":"(1, 0, 2)","p":"3x + y - z - 2 = 0"}
        answers: ["sha256:f3772d843022f92707ee1a7441ea469b4033786824cad6045e829859bffa2b6e"]
      - values: {"A":"(3, 3, 0)","v":"(-1, -1, 1)","p":"x + y + z - 5 = 0"}
        answers: ["sha256:6d5526b2a45904ebfe90e8212873d8e593607c227d0b18b3b821800491eb4d42"]
  - id: dos-rectas
    tier: 3
    prompt: |
      La recta $r$ pasa por ${{A}}$ con director ${{u}}$ y la recta $s$ pasa por ${{B}}$ con director ${{v}}$. ¿Cómo son? Responde `secantes`, `paralelas`,
      `coincidentes` o `se-cruzan`.
    variants:
      - values: {"A":"(1, 0, 0)","u":"(1, 1, 0)","B":"(0, 1, 1)","v":"(1, 0, 1)"}
        answers: ["sha256:0a607c9dab84e3b5cd516fa864e688229185ad726bee0e48e50ce6d51244115b"]
      - values: {"A":"(0, 0, 0)","u":"(1, 2, 3)","B":"(1, 1, 1)","v":"(2, 4, 6)"}
        answers: ["sha256:e5552e56022fef6010ad5eebfdec832baf941973d03a70c93f25a9b36cbe9ebe"]
      - values: {"A":"(1, 2, 3)","u":"(1, 0, -1)","B":"(3, 2, 1)","v":"(1, 1, 0)"}
        answers: ["sha256:d52989c1ac76670ef7cf710cd5709189e582e2a70f4507071528f01820298115"]
      - values: {"A":"(0, 0, 0)","u":"(1, 1, 1)","B":"(2, 2, 2)","v":"(-3, -3, -3)"}
        answers: ["sha256:40f10a1d0bb1b8edcda76c58a69f317573b381d3999228623711e7132ff972b7"]
      - values: {"A":"(1, 0, 0)","u":"(0, 1, 0)","B":"(0, 0, 1)","v":"(1, 0, 0)"}
        answers: ["sha256:0a607c9dab84e3b5cd516fa864e688229185ad726bee0e48e50ce6d51244115b"]
      - values: {"A":"(2, 1, 0)","u":"(1, -1, 2)","B":"(3, 0, 2)","v":"(2, 1, 1)"}
        answers: ["sha256:d52989c1ac76670ef7cf710cd5709189e582e2a70f4507071528f01820298115"]
  - id: cuatro-puntos-coplanarios
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Para qué valor de $k$ son coplanarios los puntos ${{P}}$?
    variants:
      - values: {"P":"(0, 0, 0),\\ (1, 0, 1),\\ (0, 1, 2),\\ (1, 1, k)"}
        answers: ["sha256:69c2e7187074da8d6282abe3392863e0ed70ec5c9bd963760dcc268a4d7b0f90","sha256:8736df7d901d5995fbe572b4e4e13baf9442a0d1160635268bae7cbe4518e85e","sha256:0bb28c1f1b47e2a935dcc8745dea206d4c284ceea72687207ec1996b46e26ae4"]
      - values: {"P":"(1, 1, 1),\\ (2, 1, 0),\\ (1, 3, 2),\\ (k, 2, 1)"}
        answers: ["sha256:6d5df4a7acd660c380246f23d76183e31968af92cfd28df598c695227ebf1c18","sha256:a61a09995c32a9d9dabd7f01dbb56670b82ac335f5dda4b9656faf3bbaac7c06","sha256:de4a372ea358c232c556a7c6021d50bce84bfb8a28b995d84360b9b3cb583b3a"]
      - values: {"P":"(1, 0, 0),\\ (0, 1, 0),\\ (0, 0, 1),\\ (2, 2, k)"}
        answers: ["sha256:85dfcfda25fd1709b03c06147d7b24165cd70e881019e97d37864e034383dad8","sha256:9dac3c155f1eaf7f8d981c88a341855b41fd4c7c50403ee8a2d0708a454e9d37","sha256:24672561225665cf543aa1cb54706a1cc67c1eb5367e796b163e050500586d3d"]
      - values: {"P":"(0, 1, 2),\\ (1, 3, 1),\\ (2, 0, 0),\\ (k, 1, 3)"}
        answers: ["sha256:936e2f950321fa172dc9b4426c0d38c8a19a9548993e88a1b8e9151af34a0693","sha256:c191eb522b81602fd322c7e16385ac605232e883ddca5adfc4695e0c832d30ab","sha256:ea85fee37df869fa2a4ca9b2d97c5210261ebd57e710f5f5699cb33a03487c98"]
      - values: {"P":"(2, 0, 1),\\ (1, 1, 1),\\ (0, 2, 3),\\ (k, 1, 0)"}
        answers: ["sha256:03ed29e200f58c1d8a4dbd9ddffb4be095528888f738143e0df80647230e7a31","sha256:236622337b26366d690b1b714764a688011887e4693cd9113114249768d97348","sha256:4f1d90c42f1eb56e80dc9e8be98d6c342cd89e1b960001c8e6b7db1e7ec661b7"]
      - values: {"P":"(1, 2, 0),\\ (2, 3, 1),\\ (0, 0, 2),\\ (k, 1, 1)"}
        answers: ["sha256:c98363e0a94c8b039fde959b8d8cfd3eabc28cdff34a6a60f0427dd8f60311df","sha256:40942406be76ebe882e62f8b7a0d18fb8dbded494735498007b2220d1a95886d","sha256:bcd477decdc29b220a3301ca62e26ec163f40992b2665b527ae87f2c9e0c1994"]
  - id: corte-con-el-eje-z
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿En qué valor de $z$ corta el plano ${{p}}$ al eje $Z$? (Piensa en la ecuación segmentaria.)
    variants:
      - values: {"p":"2x + 3y + 6z - 12 = 0"}
        answers: ["sha256:dc00d4c4fae67a6308dc9a52af8c72fdca8facd003ddf2ea2932fae40cef986a","sha256:0576a70b80468205d5ce30112123d4562430970c186f620b5cf3baf2ad3f7f6b","sha256:610e376afd79e01a0f68d7316454b3c7b38fc1c7707913b24b049a94438edc2e"]
      - values: {"p":"x + 2y + 4z - 8 = 0"}
        answers: ["sha256:3311cdb9d30a6606e60c14177fe790af4d2ea300f14267790958d7085506a840","sha256:1db9738b2be926b0aaf94a1d6ff2766f5f792d7407b07e8b25a3b3d113bedfb7","sha256:0ddff9df4eb9fff5703b528ffb85b1e8df8d922d462ef39097b87d5dae6583fd"]
      - values: {"p":"3x - y + 2z - 6 = 0"}
        answers: ["sha256:4df6374e44d62069b40a5dc52823ed34aa2981e436c51aff447a76eb114f2c28","sha256:5be9d365792b897d2622700c803c4af3a4c70415a469bd2f2c0266888132964c","sha256:de429e7dfa663957f90f8de77d6e32aa3839da35a3fc2f99378a47c319af8bd3"]
      - values: {"p":"5x + 4y - 10z + 20 = 0"}
        answers: ["sha256:c06b9354ad35dd1c98adedda71ef45e844f462304273b729ab57150f355886cd","sha256:0d204a5ffd196d0e6da488c3d8da06150484118256fa051c254d334a33bc6574","sha256:91745f44f89dedf2e4f49a0367d80da0cbb552d132d8bfd08fc635370b576f98"]
      - values: {"p":"x + y + 3z - 9 = 0"}
        answers: ["sha256:01a44a99788f6c6ef87ea6a4dae84e0e7458d496a21b8217f06c00e813b0e825","sha256:b5f357f1f596bf1c31a67eec3b7af6464362ddabe185518c40e73369b844d061","sha256:cb69617256b077ec763478a75a9ade0ff3d8c70c0d3492343763f82282397eba"]
      - values: {"p":"2x - 3y + 5z - 15 = 0"}
        answers: ["sha256:e38a3a36fe414ddc395469af45728fd24e71713225584216e0ee4ab00a019cc9","sha256:64fcee750569974efb2ded706301027a1fa2a70a8279d626097af428aa71c3ac","sha256:4c273893fe7d18ba56fe8bd875e143788875b887204e2196799f13f1cf169926"]
  - id: tres-planos
    tier: 3
    prompt: |
      Para los planos ${{p1}}$, ${{p2}}$ y ${{p3}}$, calcula el rango de la matriz de coeficientes y el de la ampliada. Respuesta: `rango;rango ampliada`.
    variants:
      - values: {"p1":"x + y + z - 3 = 0","p2":"x - y + z - 1 = 0","p3":"2x + 2z - 4 = 0"}
        answers: ["sha256:5705c50ceb73f721ce58fb003ec62d0c0c4e40f93298505f7dc6b7f3e475cc84"]
      - values: {"p1":"x + y + z - 1 = 0","p2":"x + 2y + 3z - 2 = 0","p3":"x + 3y + 5z - 4 = 0"}
        answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
      - values: {"p1":"x + z - 2 = 0","p2":"y + z - 2 = 0","p3":"x + y - 2 = 0"}
        answers: ["sha256:3408e9fd6e48e92d05663967f874a5cd74807dbafa56ee764edcddeddc948c0b"]
      - values: {"p1":"x + 2y + z - 1 = 0","p2":"2x + 4y + 2z - 3 = 0","p3":"x + z - 2 = 0"}
        answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
      - values: {"p1":"x + y + z - 1 = 0","p2":"2x + 2y + 2z - 2 = 0","p3":"3x + 3y + 3z - 3 = 0"}
        answers: ["sha256:ac4750dbb83d4a51542912ea8135f5e1107464ecc7892381c90b21d02d1b9d35"]
      - values: {"p1":"2x + y + z - 4 = 0","p2":"x + 2y + z - 4 = 0","p3":"x + y + 2z - 4 = 0"}
        answers: ["sha256:3408e9fd6e48e92d05663967f874a5cd74807dbafa56ee764edcddeddc948c0b"]
  - id: director-de-la-interseccion
    tier: 2
    prompt: |
      Halla un vector director de la recta en que se cortan los planos ${{p}}$ y ${{q}}$, con componentes enteras sin factor común y la primera no nula
      positiva. Respuesta: `a;b;c`.
    variants:
      - values: {"p":"x + y + z - 1 = 0","q":"x - y - 2 = 0"}
        answers: ["sha256:0e85b74b6f0dedff1cc32dc35977c9fc9b52bd6bc89d84a4f92a15d971de368d"]
      - values: {"p":"2x + z - 1 = 0","q":"y - z - 2 = 0"}
        answers: ["sha256:401a34eab9a64c8c276e4bc0b3bed9956d71d91b1cdf82f0343c36ec40604357"]
      - values: {"p":"x + 2y + 3z - 1 = 0","q":"3x + 2y + z - 2 = 0"}
        answers: ["sha256:37296bfafcc6a9cdb0c584df2399443a98d3f661583960debacab3f479f3da56"]
      - values: {"p":"x - y + 2z - 1 = 0","q":"2x + y - 2 = 0"}
        answers: ["sha256:8f1afc70810a9be1d6fb77f844d0681c96bb471a68f43d0d0f87771ce147c88e"]
      - values: {"p":"y + z - 1 = 0","q":"x + z - 2 = 0"}
        answers: ["sha256:619be5389fc4f489b9681e4c9f778b536f5b5a1c1655e3a46a9789050307774c"]
      - values: {"p":"3x + y - 2z - 1 = 0","q":"x + y + z - 2 = 0"}
        answers: ["sha256:1a6fca4e302b504065bfbce9bb6c773cb4a0fd6a549a2f7ebfe3a4d36e84fbda"]
  - id: posiciones-con-rangos
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica cómo se obtiene la ecuación general de un plano a partir de un punto y dos vectores directores, y por qué el vector $(A, B, C)$ es
      perpendicular al plano. (b) Clasifica las posiciones relativas de dos rectas en el espacio y explica cómo distinguir con el producto mixto si se cortan o se
      cruzan. (c) Usa el teorema de Rouché-Frobenius para clasificar las posiciones relativas de tres planos según los rangos de $A$ y $A^*$.
    sealed: "gz64:H4sIAAAAAAACCo1UTWvcQAz9K8L4sGuGpUlvG3rIR88tlEKgTkAZq9uBWcnVjNNuQ35Mf0NvveaPFY3X+0G30IONGUt6ek9v9FQliUMOwtWyapoZzpsGPjL0A2eB+rYGSvnlJxADRegjskBHUL+vwQtDF5R8FqUEdds+kofBwfjxWEMKdiqPpBpWXzKqyren97fPtdtF17CZvi1BGLwYCmqQtLRfHeXZqSITzh5wDm/gVe3g60BACSIC+QF9ePnFsCImxbho+YaS1YgRO3SQhgRe6HPwgTgbjdmlgysH1/OxnalRaNsc1pR27Bz0pD1xF/wQUQEhSoLOnr0oG+hFIaOJiVv9FvD26xAeMRrg2l47ORja1neS4RThwm7RcstNM3uwOd1IAoPCBP1AHTEkUmgaL4F96AqhpnHQND0qRoqYmgZmB/1tzyXNLSqRxzEHZonAi2ZkG/2wNcQcxMrr8AM1kYWxwD6SQ5FsBzZfwIfQcjzW5IRRrMo+UZKzolnWuEM203nscOTroL4szrmqlwf4KcAGkkQ57bzLqyPnuX8bz5l/OvJBXcv1p1OV/rbfXRnQhWGzFAZFKJ5G5m1k12YphTc24Z4Usyjjmp509Twy0vvm9N/7pl6OqWPI69rBySFdHEad/x211RBmX/CHyVpMmeZHaWe1g52LirGzUrpoucRY0XrfBQvkQEzTqLysX37zoYXsVmB5E+8cO7nEgZRfRw6Aje2bTOpJpTRQSk1dnu07KAwPU1ueYVwNLOOlmHgELRtLssp8UblKhwcNvlp+eqq8hkwapFpW7x4KlePlYXkUoaNMug5sdwTETlh0jfHfO8JwiiapWp4/uyOk64gpfA4eIWICP2BWgV5S8EG42K+oslVrA0PCsoJVusFngXX4nqWwHqXRZE1Nd/P/kHPZAWX+kGhlUzOpFXkl6bjE3fMfcIP4WisGAAA="
  - id: r-normal
    tier: 1
    review: true
    prompt: |
      ¿Cuál es un vector normal del plano $2x - 3y + 5z - 1 = 0$? Respuesta: `a;b;c`.
    answers: ["sha256:5af8b07caa51e2321688f0667941d2439986c54b3b04f750c34f9934fd5b6ba4"]
  - id: r-planos-paralelos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué tienen dos planos paralelos?
    options:
      - |
        Sus términos independientes son iguales
      - |
        Pasan por el origen
      - |
        Sus vectores normales son proporcionales
      - |
        Sus normales son perpendiculares
    answers: ["sha256:fd317f278393ecc1de974a9d524a13de6f7e636b0f0fe2f63c367d6ac02ca1c9"]
  - id: r-cruzan
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué significa que dos rectas del espacio se cruzan?
    options:
      - |
        Que son paralelas
      - |
        Que no se cortan y no son paralelas
      - |
        Que son perpendiculares
      - |
        Que se cortan
    answers: ["sha256:748d3bcc7721f13fe1157043db9c5a44225551533c1f5f0128f1574f2b0b7862"]
  - id: r-recta-dos-planos
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se obtiene un vector director de la recta intersección de dos planos?
    options:
      - |
        El producto vectorial de los vectores normales
      - |
        La suma de los normales
      - |
        Cualquier normal
      - |
        El producto escalar de los normales
    answers: ["sha256:3de03419964d7bf2c47b7e3d1695181d5405dfc12b125f8afae7613a34eb26cf"]
  - id: r-segmentaria
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      El plano $\frac x2 + \frac y3 + \frac z4 = 1$, ¿en qué valor de $z$ corta al eje $Z$?
    answers: ["sha256:45ee4c9796279b24d4d8f7584104cc4c2469041c31c9f4e35db1ed92a1e997e0","sha256:11940f6a2c90c271d9eb582f94ea1725380404c40eeab2e3570ccebd622f7b20","sha256:98810ed7d6a95e74af38186b976ba0dab96d2e578d99e5040d1f1aaf7ebbee8c"]
  - id: r-tres-puntos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué determina un único plano?
    options:
      - |
        Dos puntos
      - |
        Un punto
      - |
        Tres puntos alineados
      - |
        Tres puntos no alineados
    answers: ["sha256:63fcf4281594e9d6e7b50e09c400d3588445a5daf5ec70501f3508b6106b8e79"]
  - id: r-recta-plano-paralela
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es paralela (sin estar contenida) una recta respecto de un plano?
    options:
      - |
        El director es paralelo al vector normal
      - |
        El punto está en el plano
      - |
        El director es perpendicular al normal y un punto de la recta no está en el plano
      - |
        Siempre
    answers: ["sha256:e5e0b654969fe6b902be14c005f2d14d12f3af15bda343f3c1dcb73603526d9e"]
---

# Rectas y planos en el espacio: ecuaciones vectoriales, paramétricas, continuas, implícitas y generales, y posiciones relativas

En el plano, dos rectas o se cortan o son paralelas. En el espacio pasan cosas nuevas: dos rectas pueden **cruzarse** sin tocarse y sin ser paralelas
(como dos carreteras a distinto nivel), y aparecen los **planos**, que pueden cortarse en una recta. Este nodo enseña a escribir las ecuaciones de rectas y
planos en sus distintas formas y a decidir cómo están colocados unos respecto de otros, usando vectores y el teorema de Rouché-Frobenius. Es el
lenguaje de la arquitectura, el diseño 3D, la robótica y los gráficos por ordenador.

## Objetivos

Al terminar sabrás:

1. Escribir la recta en forma vectorial, paramétrica, continua e implícita, y pasar de una a otra.
2. Escribir el plano en forma vectorial, paramétrica, general y segmentaria, también por tres puntos.
3. Decidir si cuatro puntos son coplanarios.
4. Estudiar las posiciones relativas de dos planos, tres planos, una recta y un plano, y dos rectas.
5. Calcular intersecciones.

## Qué debes dominar antes

[[mat-vectores-espacio]] (productos escalar, vectorial y mixto) y [[mat-sistemas-lineales-bachillerato]] (rangos y Rouché-Frobenius).

> [!question] Test de entrada
> 1. Calcula $(1, 2, 0) \times (0, 1, 3)$.
> 2. ¿Son perpendiculares $(2, -1, 1)$ y $(1, 3, 1)$?
> 3. ¿Qué dice Rouché-Frobenius cuando $\operatorname{rg}A = 2$ y $\operatorname{rg}A^* = 3$?
>
> Respuestas: $(6, -3, 1)$; sí (el producto escalar es $0$); el sistema es incompatible.

## 1. Para qué sirve

- **Diseño y arquitectura**: cubiertas, rampas y fachadas planas; intersecciones de planos (aristas).
- **Gráficos 3D**: los objetos se modelan con triángulos (trozos de plano); trazar un rayo es cortar una recta con planos.
- **Robótica y visión**: trayectorias rectas, planos de trabajo y de cámara ([[rob-cinematica]]).
- **Física**: trayectorias de movimiento uniforme, planos de incidencia en óptica.

## 2. La recta en el espacio

> [!practico]
> Para describir la trayectoria de un dron que vuela en línea recta basta saber por dónde pasa en un momento (un punto) y hacia dónde va (una
> dirección). Cada instante $\lambda$ le corresponde un punto $A + \lambda\vec v$.

Con un punto $A(a_1, a_2, a_3)$ y un vector director $\vec v = (v_1, v_2, v_3)$:

| forma | ecuación |
| --- | --- |
| vectorial | $(x, y, z) = (a_1, a_2, a_3) + \lambda(v_1, v_2, v_3)$ |
| paramétricas | $x = a_1 + \lambda v_1$, $y = a_2 + \lambda v_2$, $z = a_3 + \lambda v_3$ |
| continua | $\dfrac{x - a_1}{v_1} = \dfrac{y - a_2}{v_2} = \dfrac{z - a_3}{v_3}$ |
| implícitas | dos ecuaciones lineales: la recta como **intersección de dos planos** |

Por dos puntos $A$ y $B$: director $\overrightarrow{AB}$. *Ejemplo:* la recta por $(1, 2, 3)$ con director $(2, -1, 1)$ tiene paramétricas $x = 1 + 2\lambda$, $y = 2 - \lambda$, $z = 3 + \lambda$.
De las implícitas se pasa a un director con el producto vectorial de los dos normales.

## 3. El plano en el espacio

Con un punto $P$ y dos directores $\vec u, \vec v$ no paralelos: $X = P + \lambda\vec u + \mu\vec v$ (vectorial y paramétricas). Eliminando los parámetros (o exigiendo que $\overrightarrow{PX}, \vec u, \vec v$ sean
coplanarios) se obtiene la **ecuación general**
$$
Ax + By + Cz + D = 0, \qquad \vec n = (A, B, C) = \vec u \times \vec v \ \text{(vector normal)} .
$$
- **Por un punto y su normal**: $A(x - p_1) + B(y - p_2) + C(z - p_3) = 0$.
- **Por tres puntos** no alineados $P, Q, R$: normal $\overrightarrow{PQ} \times \overrightarrow{PR}$. *Ejemplo:* por $(1, 0, 0)$, $(0, 2, 0)$, $(0, 0, 3)$ sale $6x + 3y + 2z = 6$.
- **Segmentaria**: $\frac xa + \frac yb + \frac zc = 1$, donde $a$, $b$, $c$ son los cortes con los ejes (el plano anterior es $\frac x1 + \frac y2 + \frac z3 = 1$).
- **Cuatro puntos son coplanarios** si $[\overrightarrow{PQ}, \overrightarrow{PR}, \overrightarrow{PS}] = 0$.

## 4. Posiciones relativas

> [!practico]
> Para saber cómo están colocados dos objetos, junta sus ecuaciones en un sistema: si tiene solución única, se cortan en un punto; si tiene
> infinitas, comparten una recta o un plano; si no tiene, no se tocan. Los rangos de Rouché-Frobenius lo dicen todo.

**Dos planos** (con $A$ la matriz $2 \times 3$ de coeficientes):

- $\operatorname{rg}A = 2$: **secantes** (se cortan en una recta).
- $\operatorname{rg}A = 1$, $\operatorname{rg}A^* = 2$: **paralelos** (normales proporcionales, términos independientes no).
- $\operatorname{rg}A = \operatorname{rg}A^* = 1$: **coincidentes**.

*Ejemplo:* $x + y + z = 1$ y $2x + 2y + 2z = 5$ son paralelos.

**Tres planos**: $\operatorname{rg}A = \operatorname{rg}A^* = 3$, se cortan en un punto; $= 2$, en una recta (forman un **haz**); $= 1$, coinciden; $\operatorname{rg}A = 2$, $\operatorname{rg}A^* = 3$, no tienen punto común
(forman un «prisma» o dos son paralelos y el tercero los corta); $\operatorname{rg}A = 1$, $\operatorname{rg}A^* = 2$, paralelos.

**Recta y plano** (recta por $A$ con director $\vec v$; plano con normal $\vec n$):

- $\vec n \cdot \vec v \neq 0$: **secante** (un punto de corte, que se halla sustituyendo las paramétricas en la ecuación del plano).
- $\vec n \cdot \vec v = 0$ y $A$ no está en el plano: **paralela**.
- $\vec n \cdot \vec v = 0$ y $A$ está en el plano: **contenida**.

**Dos rectas** (por $A$ con director $\vec u$, por $B$ con director $\vec v$):

- $\vec u \parallel \vec v$: **paralelas** o **coincidentes** (coincidentes si $\overrightarrow{AB}$ también es paralelo a $\vec u$).
- $\vec u \nparallel \vec v$ y $[\overrightarrow{AB}, \vec u, \vec v] = 0$: **secantes** (se cortan en un punto).
- $\vec u \nparallel \vec v$ y $[\overrightarrow{AB}, \vec u, \vec v] \neq 0$: **se cruzan** (no están en un mismo plano).

> [!formal] Con rigor: por qué el producto mixto distingue cortarse de cruzarse
> Si dos rectas no paralelas se cortan en $X$, ambas están en el plano que pasa por $X$ con directores $\vec u$ y $\vec v$; como $A$ y $B$ también, $\overrightarrow{AB}$ está en ese plano y
> $[\overrightarrow{AB}, \vec u, \vec v] = 0$. Recíprocamente, si $[\overrightarrow{AB}, \vec u, \vec v] = 0$, entonces $\overrightarrow{AB} = \alpha\vec u + \beta\vec v$ (porque $\vec u, \vec v$ son independientes) y el punto
> $A + \alpha\vec u = B - \beta\vec v$ está en las dos rectas. $\blacksquare$

## 5. Errores típicos

- Tomar como director de una recta un vector normal de un plano (o al revés).
- Escribir la continua con un denominador $0$ sin entenderlo (significa que esa coordenada es constante).
- Concluir «paralelos» comparando solo dos coeficientes de los normales.
- Olvidar el caso «se cruzan» en dos rectas.
- Al cortar recta y plano, sustituir la ecuación continua en lugar de las paramétricas.

## 6. Resumen

- Recta: punto + director; vectorial, paramétricas, continua, implícitas.
- Plano: punto + dos directores, o punto + normal; general $Ax + By + Cz + D = 0$; segmentaria; por tres puntos con el producto vectorial.
- Coplanariedad con el producto mixto.
- Posiciones: rangos o criterios vectoriales; dos planos, tres planos, recta-plano, dos rectas.

## Repaso: lo que debe quedarte dentro de un mes

1. Las formas de la ecuación de una recta y de un plano.
2. Por qué $(A, B, C)$ es normal al plano $Ax + By + Cz + D = 0$.
3. Cómo se halla el plano que pasa por tres puntos.
4. Cómo se decide si una recta corta, es paralela o está contenida en un plano.
5. Cómo se distingue si dos rectas se cortan o se cruzan.

## Siguiente

[[mat-geometria-metrica-espacio]] (ángulos, distancias, proyecciones y simétricos).
