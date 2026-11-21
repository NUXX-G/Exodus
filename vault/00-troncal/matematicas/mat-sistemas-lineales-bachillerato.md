---
id: mat-sistemas-lineales-bachillerato
title: "Sistemas de ecuaciones lineales: método de Gauss, expresión matricial, teorema de Rouché-Frobenius, regla de Cramer, homogéneos y discusión con parámetros"
area: matematicas
trunk_level: 4
prerequisites: [mat-determinantes, mat-sistemas-dos-incognitas]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 3: «Sistemas de ecuaciones», secciones 1 (repaso de sistemas de dos ecuaciones), 2 (sistemas generales, homogéneos, equivalentes), 3 (método de Gauss) y 4 (expresión matricial, resolución con la inversa, teorema de Rouché-Frobenius, análisis por Gauss, regla de Cramer). Apuntes Marea Verde, autores Leticia González Pascual y Álvaro Valdés Menéndez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2003%20Sistemas.pdf"
  - "G. Strang, «Introduction to Linear Algebra», 5.ª ed., Wellesley-Cambridge Press (2016), capítulos 2 (eliminación) y 3 (espacios columna y nulo, solución completa de Ax = b)."
hints:
  - "Concepto: un sistema es compatible si y solo si el rango de la matriz de coeficientes es igual al de la ampliada; si además ese rango es el número de incógnitas, la solución es única; si es menor, hay infinitas, con tantos parámetros como incógnitas menos rango."
  - "Herramienta: escalona la matriz ampliada por Gauss (operaciones de filas); una fila 0 = c con c ≠ 0 indica incompatible. Con parámetros, anula el determinante de la matriz de coeficientes para encontrar los valores críticos y estudia cada uno por separado."
  - "Documentación: Marea Verde Matemáticas II cap. 3; Strang, caps. 2-3."
exercises:
  - id: metodo-de-gauss
    tier: 1
    prompt: |
      Resuelve por el método de Gauss: ${{S}}$ Respuesta: `x;y;z`.
    variants:
      - values: {"S":"\\left\\{\\begin{array}{l} x + 2y - z = -4 \\\\ 2x - y + 3z = 17 \\\\ 3x + y + z = 9 \\end{array}\\right."}
        answers: ["sha256:5437dba5adca418acc3a98c94cc68d430a5f65f7339777030dea9fdad4be3f70"]
      - values: {"S":"\\left\\{\\begin{array}{l} x - y + z = 1 \\\\ 2x + y - z = 8 \\\\ x + 2y + 3z = -3 \\end{array}\\right."}
        answers: ["sha256:2143423da7428976985b18e909b9258d964591b62f6903b3993cce3b4360a685"]
      - values: {"S":"\\left\\{\\begin{array}{l} 2x + y + z = 4 \\\\ x + 3y + 2z = 1 \\\\ x + y + 4z = 5 \\end{array}\\right."}
        answers: ["sha256:8be20af3c48c639ee62e37f1958ce8efb15083be5529bd145526f5f6ffe7ad5c"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + y = 3 \\\\ y + z = 2 \\\\ x + z = 9 \\end{array}\\right."}
        answers: ["sha256:b92f6c17b4e67751b13ceb0bbbf431389f31ce65811251274970e3ad8592ad9a"]
      - values: {"S":"\\left\\{\\begin{array}{l} 3x - 2y + z = -9 \\\\ x + y - 2z = -1 \\\\ 2x + 3y + z = 12 \\end{array}\\right."}
        answers: ["sha256:bb228b95235682fafb8734cb40597b1f8f4fcd1cc393b39c519d63be917f0868"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + 3y + 2z = 21 \\\\ 2x + 5y + z = 21 \\\\ x + y - z = -3 \\end{array}\\right."}
        answers: ["sha256:a6af21e50f839ec6aacc343226f7b2a8976b4c5922c7189a857e038fced526d2"]
  - id: regla-de-cramer
    tier: 2
    prompt: |
      Resuelve con la regla de Cramer el sistema ${{S}}$ ¿Cuánto vale ${{v}}$? (Fracción como `p/q` si hace falta.)
    variants:
      - values: {"S":"\\left\\{\\begin{array}{l} 2x + y + z = 4 \\\\ x - y + 2z = 1 \\\\ 3x + 2y - z = 3 \\end{array}\\right.","v":"y"}
        answers: ["sha256:653e83e7d95bb7be2685ebb3549dd4fb8525591259ef65a5385a9ba172e43537"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + 2y + 3z = 1 \\\\ 2x + y = 2 \\\\ y + z = 3 \\end{array}\\right.","v":"x"}
        answers: ["sha256:cf3bae39dd692048a8bf961182e6a34dfd323eeb0748e162eaf055107f1cb873"]
      - values: {"S":"\\left\\{\\begin{array}{l} 4x + y = 5 \\\\ x + 3y + z = 6 \\\\ y + 2z = 7 \\end{array}\\right.","v":"z"}
        answers: ["sha256:f0a6b23687d59962968a40684a1c21250ec05d84750dd5518c19171dbbf46df1"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + z = 2 \\\\ x + 2y + 4z = 3 \\\\ x + 3y + 9z = 5 \\end{array}\\right.","v":"y"}
        answers: ["sha256:348be5d7ad06601460048f7f7162d298f72cc79c121cc856069a90b22928ac4b"]
      - values: {"S":"\\left\\{\\begin{array}{l} 3x + z = 1 \\\\ x + 2y = 1 \\\\ y + 3z = 1 \\end{array}\\right.","v":"x"}
        answers: ["sha256:7762cec0379f0c8d3dfbc52bd597d3673222f685658ef519bd6eb035890479bd"]
      - values: {"S":"\\left\\{\\begin{array}{l} 2x - y = 1 \\\\ -x + 2y - z = 0 \\\\ -y + 2z = 1 \\end{array}\\right.","v":"y"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: rouche-frobenius
    tier: 2
    prompt: |
      Clasifica con el teorema de Rouché-Frobenius el sistema ${{S}}$ Responde `determinado`, `indeterminado` o `incompatible`.
    variants:
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + z = 3 \\\\ x - y + 2z = 1 \\\\ 2x + 3z = 5 \\end{array}\\right."}
        answers: ["sha256:62a8b13dcc5471418358086b4a60ef38dd3c269976f5e8339c77e3afdb1a324a"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + 2y - z = 1 \\\\ 2x + 4y - 2z = 3 \\\\ x + z = 2 \\end{array}\\right."}
        answers: ["sha256:62a8b13dcc5471418358086b4a60ef38dd3c269976f5e8339c77e3afdb1a324a"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + y = 2 \\\\ y + z = 3 \\\\ x - z = -1 \\end{array}\\right."}
        answers: ["sha256:42eff26416d8850bbe3e2e302b7eec5abd959f2cbc00e0cd540eef0a26f9e620"]
      - values: {"S":"\\left\\{\\begin{array}{l} 2x + y + z = 4 \\\\ x + y + z = 3 \\\\ x + 2z = 1 \\end{array}\\right."}
        answers: ["sha256:239783e5e82d72dc988e5b88bcb59db5b96c7e4d309bcc13277816b9241423cb"]
      - values: {"S":"\\left\\{\\begin{array}{l} x - y + 2z = 2 \\\\ 3x - 3y + 6z = 6 \\\\ 2x + y + z = 3 \\end{array}\\right."}
        answers: ["sha256:42eff26416d8850bbe3e2e302b7eec5abd959f2cbc00e0cd540eef0a26f9e620"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + 5z = 4 \\end{array}\\right."}
        answers: ["sha256:62a8b13dcc5471418358086b4a60ef38dd3c269976f5e8339c77e3afdb1a324a"]
  - id: discusion-con-parametro
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Para qué valor de $a$ es incompatible el sistema ${{S}}$?
    variants:
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + z = 1 \\\\ x + 2y + az = 2 \\\\ x + 3y + 4z = 4 \\end{array}\\right."}
        answers: ["sha256:dfe6b1a535be93a86556d8195d71c477611d4369aafd6ab0d1052bea4242b6a3","sha256:05d2736994926ec9c0cfff6e3f4471339ebd7a5a32db6ab45b1826718ecb7783","sha256:b32ec6dae26eae9477bd74a27ea6d583ad0e4a212a29dfe0b533ef60bfb05d27"]
      - values: {"S":"\\left\\{\\begin{array}{l} ax + y + z = 2 \\\\ x + y + z = 1 \\\\ x + 2y + 3z = 3 \\end{array}\\right."}
        answers: ["sha256:531afedd43800823538066dcc2f8e84dc8bb24cd69496a809d50a1503d9aeffa","sha256:1d242792cefed6f783124d8caad7d462197fd6b5c4a63e2ff43d65cfe8a207d3","sha256:b23f219eef93c92ef9a5756ced658b669c7194eefa0132bf836fb64e32f6fb75"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + 2y + z = 1 \\\\ 2x + ay + 2z = 3 \\\\ x + y + 3z = 2 \\end{array}\\right."}
        answers: ["sha256:fa0ac25199240235d4acd36d1f44d70cc7b4b64382c7ea15ad9457f7a107a3f7","sha256:e263dad3a0335178f89a04bd2164f3b86a015d070436556f1d4b5cd101805d34","sha256:d40102aca00a24832512a23b29a2ca1ac2cff6ef6e8cc72248b6b3fa891ee330"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + 2z = 1 \\\\ x + 2y + 3z = 1 \\\\ 2x + 3y + az = 3 \\end{array}\\right."}
        answers: ["sha256:54ae4b3f8b65b68da258e519f533bf5c3895cccfafb598c184b02bc76b84d247","sha256:5dea0fee2954af241ed8e6f78b6e56830a31df0284c8c1ebb3a75818c053898c","sha256:b7f7d1e47cc8ee42bc5b031558fb575df073349273bdb357d3bbfb778f034f39"]
      - values: {"S":"\\left\\{\\begin{array}{l} x - y + 2z = 2 \\\\ x + ay + z = 1 \\\\ 2x + y + 2z = 3 \\end{array}\\right."}
        answers: ["sha256:783b12148acfdf587f1512cb1d27e710ea0248ce3f97a10f619e650934cb4a4e","sha256:7b77cc87b906099347d615142d3e5e79fd04ea5f281f04be1bdfd153e21f548c","sha256:edd5b48e16bc55aacd0df0e3cf327e83ff477cb6742d5e55b7d2990323c4e33f"]
      - values: {"S":"\\left\\{\\begin{array}{l} 3x + y + az = 1 \\\\ x + y + z = 2 \\\\ 2x + z = 0 \\end{array}\\right."}
        answers: ["sha256:69633917008e2775a54d26112ecc08e23a7355e3a554193c12f84db732fb46f0","sha256:c66ce3d0f3fa43efbe49eb4e0f61012d065eafc3a2bb9ea23649585c4b01c934","sha256:fe544daadcee43fb9fea0531fec76e32da5568c2f842ba0620465a321817ce19"]
  - id: sistema-homogeneo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Para qué valor de $k$ tiene soluciones distintas de $x = y = z = 0$ el sistema homogéneo ${{S}}$?
    variants:
      - values: {"S":"x + y + z = 0,\\ x + ky + z = 0,\\ x + y + 2z = 0"}
        answers: ["sha256:183d5f866790b29a948f175bf8a60b77db8f55df31e24778d455343940b68805","sha256:468847e8bcd3273e68293986670ba9cb44e5d0a1d9f47d9047648ef02c7133e3","sha256:9521aa57b6ccfc08af6fe38373a7c601aec83b0dfafba105b817f9864d7772f4"]
      - values: {"S":"kx + y = 0,\\ x + y + z = 0,\\ y + 2z = 0"}
        answers: ["sha256:2276037a6702113abd52298d351e79c578864d1501394d95ec901162e6b5f43f","sha256:48c23216e20a21e87ab2d744d15d8bc47e077dedb84dbb535fa51ef05b37c6ce","sha256:293afe56dbbf6384663188cb200c3a13f96ef1f9950dc63cf84f810b5aebe40f"]
      - values: {"S":"2x + y + 3z = 0,\\ x + ky + z = 0,\\ x + 2z = 0"}
        answers: ["sha256:3f301f88baf3638757d9e446115bd87bbb65fadb6261855d9d37aa5dd8065fd7","sha256:067bb4cc40977ba962e6cb5c6e130192d32cc1c4b1568b9b7dd2613b5253e4e6","sha256:c1446ad7a39299ac0b654423bbb1018ef3799305d12d56e2f71b5efc6ca5b12d"]
      - values: {"S":"x + 2y + kz = 0,\\ 3x + y + z = 0,\\ x - 3y + z = 0"}
        answers: ["sha256:cd92be75a86c1a59e614bbdf2a759039aa3e9e186a2115c4b373f0d7e6e621c8","sha256:41fd832d03b60741fa1d2b8c6ffd5dd324afa6d72148da5e02e6509de6461b7e","sha256:14a7711d5b7576fee3dd9453f3330e183b098b141c888a3d627e0db841262d0d"]
      - values: {"S":"x + y + z = 0,\\ 2x + y + kz = 0,\\ x + z = 0"}
        answers: ["sha256:1ce2132b0c7b4b4faaf21b6bb8b88e6f018a52b905d7fb595498ab5f15a72bb0","sha256:7ceda748a1f0ea2f52c747cf2abf142e39b3407e4a1d62e3e5a9113bde4806f9","sha256:f45a54c0ad5025bdf2b6495b2a295d3e8a73338a8aba1fef642897810d01a541"]
      - values: {"S":"kx + 2y + z = 0,\\ x + y + z = 0,\\ 2x + y = 0"}
        answers: ["sha256:473f782ac41ddab8ac0b2f15271d3bbc0b9f4cc283553a76bd84dfd564bd920c","sha256:bc2cfeb8c2202ce31fd12d930df443b720b25cc79938cc9d4f8bfd5adbbf8ee5","sha256:71b82f54a7ac73d990a24b3b58f2f24e07530e88cb1d6756248a83ab571091fc"]
  - id: solucion-con-parametro
    tier: 2
    prompt: |
      El sistema ${{S}}$ es compatible indeterminado. Tomando $z = \lambda$ como parámetro, ¿cuánto vale $x$ cuando $\lambda = {{l}}$? (Fracción como `p/q` si hace falta.)
    variants:
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + z = 6 \\\\ x - y + 3z = 2 \\end{array}\\right.","l":"2"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
      - values: {"S":"\\left\\{\\begin{array}{l} 2x + y - z = 3 \\\\ x + y + z = 4 \\end{array}\\right.","l":"2"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + 2y = 5 \\\\ y + z = 3 \\end{array}\\right.","l":"-1"}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
      - values: {"S":"\\left\\{\\begin{array}{l} x - y + 2z = 1 \\\\ 2x + y + z = 5 \\end{array}\\right.","l":"3"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"S":"\\left\\{\\begin{array}{l} 3x + y + z = 7 \\\\ x + y - z = 1 \\end{array}\\right.","l":"0"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + z = 4 \\\\ x + y + 3z = 9 \\end{array}\\right.","l":"2{,}5"}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
  - id: problema-de-tres-productos
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En una tienda, {{c}}. ¿Cuánto cuesta una unidad de C, en €?
    variants:
      - values: {"c":"2 de A, 3 de B y 1 de C cuestan $12{,}6$ €; 1 de A, 1 de B y 2 de C cuestan $11{,}7$ €; 3 de A, 0 de B y 1 de C cuestan $11{,}5$ €"}
        answers: ["sha256:6ad8e0c1e95d1882b0000e053b9ef51d3f9503a3b3d58ebf751729520e61b4ee","sha256:f33fef650b9599b11a87c7a2a9d6833f592648a05b6f7d3bebe0e05c5d1756a0","sha256:8ab01b45053188cebdbcbd04dfec5471c39f13b36081ef85887918f2ad71c210"]
      - values: {"c":"4 de A, 1 de B y 5 de C cuestan $13$ €; 2 de A, 2 de B y 2 de C cuestan $10{,}6$ €; 0 de A, 3 de B y 1 de C cuestan $9{,}8$ €"}
        answers: ["sha256:fdd4fe1668beae237e4dab97531c5cdf1a781b03893cac139ef710119c1806c3","sha256:dcc484356375b07485112d2e8edcbebc9babd800cf30d6582c0157ddee0fa915","sha256:6eb216bc2e195fb08068fe3fdf624560142977e63b51b0f0235f46f4d8f8f17b"]
      - values: {"c":"1 de A, 2 de B y 3 de C cuestan $14$ €; 2 de A, 0 de B y 5 de C cuestan $17$ €; 1 de A, 1 de B y 1 de C cuestan $9{,}5$ €"}
        answers: ["sha256:8e909527432c839f6f2adb9e98873f577c0b7d92b70c95abf1862ccc46cbc770","sha256:96b2e686367d69487effee87845469ef5a450114057af42c3ea3482edeefe5ff","sha256:61db6952c34191fc2ddf34b1268a0d0cffc369ab29c49320d417a675849006d5"]
      - values: {"c":"5 de A, 2 de B y 1 de C cuestan $9{,}9$ €; 1 de A, 4 de B y 2 de C cuestan $11{,}7$ €; 3 de A, 3 de B y 3 de C cuestan $14{,}1$ €"}
        answers: ["sha256:a62c601d16c0dcc5492a1b8d0141a359eab51bcc2d7c28d26b5909b41260ffce","sha256:93110e9d0ed8642df4188b55f367f6a9e76783f428895df482052cde7a15adc5","sha256:712344a1c722ba3c7f1d7e4c449a46c6e3770b2a08afadc71080fb23c6763f5f"]
      - values: {"c":"1 de A, 1 de B y 2 de C cuestan $26$ €; 2 de A, 1 de B y 0 de C cuestan $31$ €; 0 de A, 3 de B y 4 de C cuestan $35$ €"}
        answers: ["sha256:15888e2737dadd64e7a8d7433ba1f4c350080b20e7dc35b184a6116d348bbd0e","sha256:29d2852b981f523cd311ca430ea09d9cad31f5fcdfa39e0208ed3119ad8d1e18","sha256:b57107c8b2174052c93117981260e793ceecba409c5cff96318d385fd9fc5f28"]
      - values: {"c":"2 de A, 4 de B y 1 de C cuestan $10{,}4$ €; 1 de A, 6 de B y 3 de C cuestan $12{,}2$ €; 3 de A, 2 de B y 2 de C cuestan $14{,}6$ €"}
        answers: ["sha256:395f281a4f0e9b474f1756afdfd24908d9a98dcc0f51d8bd11e13d658f98ee9e","sha256:1b8744a1d31ac97e0398ba53be7ce6e2539837b7dd7483ca6a39ecf9e3fdefac","sha256:f3ba8efd280b691e7c9a7cbe483493228cec758f60c331a81900d16beb5de61e"]
  - id: grados-de-libertad
    tier: 2
    type: numero
    sig: 6
    prompt: |
      El sistema ${{S}}$ es compatible. ¿De cuántos parámetros depende su solución (incógnitas menos rango)?
    variants:
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + z + t = 3 \\\\ 2x + 2y + 2z + 2t = 6 \\end{array}\\right.","n":4}
        answers: ["sha256:32f4832b309531de31e48baae7e5210c1de003b45139ca478b4c0d8a4cf81e84","sha256:f6a58174393fcbbf345d71131bca6035bd0a14d82b50091bcefb3d6762b7b7da","sha256:3bc3a8db99c0ba3f0a5a1aa66b364d686c7bd0930276d3dfecfc0d200845e305"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + 2y + t = 1 \\\\ y + z = 2 \\\\ x + 3y + z + t = 3 \\end{array}\\right.","n":4}
        answers: ["sha256:6e628d883b36855047617ffb559b1947086c12e6f756133cd9d1a85e4971db05","sha256:f28684efe44feb4fae29a9ec9920c9244d474702ac5cdeb8f4616866e2965658","sha256:6ba194d85558b3a733a0ec6600a315259f33a70da30ed39db8c3745332d7ad5b"]
      - values: {"S":"\\left\\{\\begin{array}{l} x - y = 0 \\\\ y - z = 0 \\end{array}\\right.","n":3}
        answers: ["sha256:a935fc89518379245bf46c30d046bfb3272a69ff3cbad5b2e60b5b55a8934c64","sha256:c9dbecf1618f755cf6b948fd37b80bd029438cf002d3392a0352f1dfb8fba991","sha256:3bd8b33cba2b3f528e6797b9e28bdea15442e0d0c13cede3acbcc6d56015041b"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + y + z = 2 \\\\ z + t + u = 3 \\end{array}\\right.","n":5}
        answers: ["sha256:5849b4576137b9110e3febd1cd77a651c52c9b67d7f16dd6bd94ba7b45b74d59","sha256:882f87ca7478930b88844aef538e22376bf2a62d96fe36ef76f5b51225377b73","sha256:73751f02bd8c689cce75ea91f2926311ec0fcc8215fdf5fc3af686d10970b980"]
      - values: {"S":"\\left\\{\\begin{array}{l} 2x + 4y + 6z = 2 \\\\ x + 2y + 3z = 1 \\\\ 3x + 6y + 9z = 3 \\end{array}\\right.","n":3}
        answers: ["sha256:c6cbb59eae31fba3aaca420ae9309f16825ab48dc4d737e3bf6338e1396e4c6d","sha256:b80a7a66870bff2a0a78d3fab5df72eaadf9cec179204f0981adcb862434ad5c","sha256:d6aae548373279aa2b3f161907ffa59d4b8b5e1c2690f6196117906982bcf102"]
      - values: {"S":"\\left\\{\\begin{array}{l} x + z = 1 \\\\ y + t = 2 \\\\ x + y + z + t = 3 \\end{array}\\right.","n":4}
        answers: ["sha256:01f546dff75eefba9cda4222c86c785b02ba6dd32de0fedf65c59094bd69e3ae","sha256:7919a44667f2c199e7b8998f329c2bc0ab0ab201f97d1de829e84b2004ea573b","sha256:b73537fdd756b66b2a5d833052ecc91ee3059d2c348e068826f5aea3445214ad"]
  - id: rouche-y-cramer
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Enuncia el teorema de Rouché-Frobenius y explica con el método de Gauss por qué, si $\operatorname{rg}A < \operatorname{rg}A^*$, aparece una ecuación imposible, y por
      qué, si los rangos son iguales y menores que el número de incógnitas, quedan incógnitas libres. (b) Deduce la regla de Cramer para un sistema $2 \times 2$
      a partir de la expresión matricial $X = A^{-1}B$. (c) ¿Por qué un sistema homogéneo es siempre compatible?
    sealed: "gz64:H4sIAAAAAAACCpVUy25bNxD9lYMLwpAFSXC8VOKFk6brog+gQNkAI3KksOAd3vBhWBH0MV5m0VV23erHClLRw24cpJuLiyF5zpkzj02Xgi/ZBenm3Xg8osvxGL8JkkuZewInmNAPlN3CM5LDGin4UP+U1mHgSDlEoZ43cbW9xQ2+En03Vi8rkuXMsXdCtgGQ5X73kMCJEUlWod5xq0Ie5CG7f3qOAZbhxOw+r8RlSlCiJqihJ2Cc0LOEONNy68HJkA9CEZ7QU47uI6gfvCNLk2fFv3pGPD4UtoQihKXzBDW6gtYvsf9qbUNOx0DvLMylggkCZaC18AdcVdHVAOPiBOoKNzBqDtcPIVVnZ/jFwYe09yEhBdk7wQmkRUW8Qk28CRGoqMCmkHFBOB2ztZT2tKLOPZvDN+MwRWy5QEJjGNxdyIzEGApbFrDnlYvwbhG5Z8mM0UBx99BzjiFdzrRoGY9Hi9okbyrRvuALXjnZDM3n+y0IF1hAa61hcAELrVns8VxhDfX6aw95/2j59MEE6nfc4PbdZvpiu3+5jGQ2L7YbsphiYbb/wbK4wPSLimmVQU9Q/wc7pd3f1Tct6v7Ezo16edJwOjpg352wj5Yszyw5nG83WlvOuN0qMNT6hERLTGH4u0iq73zyffk8yRyGLJ31SG1O9jDBuFZ2lhy5Ro5TVqO1t1LRYoIvvRBSSdnl4ixhCLH1b959qtdDahM6sNgGmGrNv9CrQxuZ2kY/hVg7shlb8/6IG1wpJMf9UCXUWfDFuN1nwcgTDtyWn+fiBCmeJnvS719SlzP86lgYbS3teduAne89Lc/sDqlLTlBOy9MUspFsOGycln7Lb9ZNulgW0Zlu/semM9Flji508+6tFDGO8HMo5v3u0/THGBYsrlQHfcBf1fKlM9SK4QnLENuaPmyAijwUySF18+vt5BH2D2yLYbyJ1HNEm3cYSgHqGlpn13PCtYLlZPnRyKlvob69H3wVVMvo6axcObo7Rx58X/04lnQNU3YPYgPe0xohR0qP4f/c/gteEtCAlgYAAA=="
  - id: r-compatible
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es compatible un sistema de ecuaciones lineales (Rouché-Frobenius)?
    options:
      - |
        $\operatorname{rg}A = \operatorname{rg}A^*$
      - |
        $\det A = 0$
      - |
        $\operatorname{rg}A < \operatorname{rg}A^*$
      - |
        Tiene más ecuaciones que incógnitas
    answers: ["sha256:63a80683f5626de07a669eaf452f72912f8dfb6d05e662d2e2a1bce7bab7cc11"]
  - id: r-cramer-condicion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se puede aplicar la regla de Cramer?
    options:
      - |
        Siempre
      - |
        Si es homogéneo
      - |
        Si es cuadrado y $\det A \neq 0$
      - |
        Si es indeterminado
    answers: ["sha256:cf74594e1c367e14196a4741e54a6f100a8401a87dcc7600e4aaa8de495534f2"]
  - id: r-operaciones-gauss
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas operaciones da un sistema equivalente?
    options:
      - |
        Multiplicar una ecuación por $0$
      - |
        Sumar un número solo a un miembro
      - |
        Elevar una ecuación al cuadrado
      - |
        Sumar a una ecuación un múltiplo de otra
    answers: ["sha256:1ecf3d53b75a0a21957e6be2ce47c1e533659755bcce3aa217bc5624a756b994"]
  - id: r-homogeneo-trivial
    tier: 1
    review: true
    prompt: |
      ¿Qué solución tiene siempre un sistema homogéneo de tres incógnitas? Respuesta: `x;y;z`.
    answers: ["sha256:30413c14fa60d7f98e99d7880cb98547031cb81c2f538229fb93fa54a3b79cd5"]
  - id: r-grados
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Un sistema compatible de $5$ incógnitas tiene matriz de rango $3$. ¿De cuántos parámetros depende su solución?
    answers: ["sha256:e1501855657cd1a758a2f39ab0be7159c9ea40f7392394fda0684a9df52071db","sha256:4c7f3d2252df9ec1ca16b07ff2df649fdc2b9376741a0421b407fb631ea61990","sha256:19c7813b849125747f55f4ff047a12d7309874914b247c65cd820398af5a142d"]
  - id: r-matricial
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si el sistema se escribe $AX = B$ con $A$ invertible, ¿cuál es la solución?
    options:
      - |
        $X = BA^{-1}$
      - |
        $X = A^{-1}B$
      - |
        $X = AB$
      - |
        $X = B - A$
    answers: ["sha256:7e395a10d065cffffcbaf349b65d6422f2165d4a9cd030fc94748f78d63492c1"]
  - id: r-fila-imposible
    tier: 2
    type: opcion
    review: true
    prompt: |
      Al escalonar un sistema aparece la ecuación $0x + 0y + 0z = 7$. ¿Cómo es el sistema?
    options:
      - |
        Determinado
      - |
        Indeterminado
      - |
        Incompatible
      - |
        Homogéneo
    answers: ["sha256:7f8d04468a95cba23a8aea5accde537ce0a6e269b9dc8d3a4a57d52891c7a942"]
---

# Sistemas de ecuaciones lineales: método de Gauss, expresión matricial, teorema de Rouché-Frobenius, regla de Cramer, homogéneos y discusión con parámetros

Repartir la producción de una fábrica entre varias máquinas, ajustar una reacción química, calcular las corrientes de un circuito, interpolar
datos, equilibrar una dieta: todo acaba en **sistemas de ecuaciones lineales**, muchas veces con decenas o miles de incógnitas. Este nodo generaliza
lo que se aprendió con dos incógnitas ([[mat-sistemas-dos-incognitas]]): el método de **Gauss**, que funciona siempre y es el que usan los
ordenadores; el teorema de **Rouché-Frobenius**, que dice de antemano si hay solución y cuántas; la **regla de Cramer**; y la discusión de sistemas
que dependen de un parámetro.

## Objetivos

Al terminar sabrás:

1. Escribir un sistema en forma matricial $AX = B$ y resolverlo con la inversa cuando se pueda.
2. Resolver cualquier sistema por el método de Gauss, también los indeterminados (solución con parámetros).
3. Clasificar sistemas con el teorema de Rouché-Frobenius.
4. Aplicar la regla de Cramer.
5. Estudiar sistemas homogéneos y discutir sistemas con un parámetro.

## Qué debes dominar antes

[[mat-determinantes]] (determinantes, rango por menores, inversa) y [[mat-sistemas-dos-incognitas]] (métodos y clasificación con dos incógnitas).

> [!question] Test de entrada
> 1. ¿Cuál es el rango de $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$?
> 2. Calcula $\begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix}$.
> 3. ¿Cuántas soluciones tiene $x + y = 3$, $2x + 2y = 7$?
>
> Respuestas: $1$; $2$; ninguna.

## 1. Para qué sirve

- **Ingeniería**: corrientes en circuitos (leyes de Kirchhoff), estructuras, flujos en redes ([[ing-electricidad-basica]]).
- **Química**: ajustar reacciones (un sistema homogéneo cuyas soluciones son los coeficientes).
- **Economía**: modelos input-output, mezclas y repartos con varias condiciones.
- **Computación**: todos los métodos numéricos acaban resolviendo sistemas lineales; Gauss es el núcleo de muchas bibliotecas ([[mat-algebra-lineal-1]]).

## 2. Sistemas y expresión matricial

Un **sistema de $m$ ecuaciones lineales con $n$ incógnitas** se escribe $AX = B$, con $A$ la **matriz de coeficientes** ($m \times n$), $X$ la columna de incógnitas y $B$ la de
términos independientes; la **matriz ampliada** es $A^* = (A \mid B)$. Es **homogéneo** si $B = 0$. Clasificación: **compatible determinado** (una solución),
**compatible indeterminado** (infinitas) o **incompatible** (ninguna). Si $A$ es cuadrada e invertible, $X = A^{-1}B$.

## 3. El método de Gauss

> [!practico]
> La idea es la del método de reducción, repetida con orden: con la primera ecuación eliminas la primera incógnita de todas las demás; con la
> segunda, la segunda incógnita de las que quedan… El sistema queda «en escalera» y se resuelve de abajo arriba. Funciona igual con $3$
> incógnitas que con $3\,000$.

Con las **operaciones elementales** (intercambiar ecuaciones, multiplicar una por un número no nulo, sumarle a una un múltiplo de otra) se obtiene un
sistema **equivalente** escalonado. Se trabaja con la matriz ampliada.

*Ejemplo.* $x + y + z = 6$, $2x - y + z = 3$, $x + 2y - z = 2$:
$$
\left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 2 & -1 & 1 & 3 \\ 1 & 2 & -1 & 2 \end{array}\right) \to \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 1 & -2 & -4 \end{array}\right) \to \left(\begin{array}{ccc|c} 1 & 1 & 1 & 6 \\ 0 & -3 & -1 & -9 \\ 0 & 0 & -7 & -21 \end{array}\right)
$$
De abajo arriba: $z = 3$, $y = 2$, $x = 1$.

Al escalonar: si aparece una fila $(0 \; 0 \; 0 \mid c)$ con $c \neq 0$, el sistema es **incompatible**; si quedan menos ecuaciones útiles que incógnitas, es **indeterminado**
y las incógnitas sin pivote se toman como **parámetros** (por ejemplo, $z = \lambda$), expresando las demás a partir de ellos.

## 4. Teorema de Rouché-Frobenius

Un sistema $AX = B$ con $n$ incógnitas es:

- **compatible** si y solo si $\operatorname{rg}A = \operatorname{rg}A^*$;
  - **determinado** si además $\operatorname{rg}A = n$;
  - **indeterminado** si $\operatorname{rg}A < n$, con $n - \operatorname{rg}A$ parámetros (grados de libertad);
- **incompatible** si $\operatorname{rg}A < \operatorname{rg}A^*$.

> [!formal] Con rigor: por qué los rangos deciden
> $AX = B$ dice que $B$ es una combinación lineal de las columnas de $A$ con coeficientes $x_1, \dots, x_n$. Hay solución si y solo si $B$ es combinación de esas
> columnas, es decir, si añadirla no aumenta el número de columnas independientes: $\operatorname{rg}A = \operatorname{rg}A^*$. Si $X_p$ es una solución, todas las demás son
> $X_p + X_h$ con $AX_h = 0$; las soluciones del homogéneo forman un espacio de dimensión $n - \operatorname{rg}A$, que es el número de parámetros
> ([[mat-algebra-lineal-1]]). $\blacksquare$

## 5. Regla de Cramer

Si el sistema es cuadrado ($n \times n$) y $\det A \neq 0$, es compatible determinado y
$$
x_i = \frac{\det A_i}{\det A},
$$
donde $A_i$ es la matriz $A$ con la columna $i$ sustituida por $B$. Es cómoda para sistemas pequeños o para hallar una sola incógnita; para sistemas grandes,
Gauss es mucho más eficiente. (Si el sistema es compatible indeterminado, se puede aplicar Cramer al subsistema de un menor no nulo, pasando las
incógnitas libres al segundo miembro.)

## 6. Sistemas homogéneos y discusión con parámetros

- Un sistema **homogéneo** ($B = 0$) siempre es compatible: tiene la solución **trivial** $X = 0$. Tiene soluciones no triviales si y solo si $\operatorname{rg}A < n$; si es
  cuadrado, si $\det A = 0$.
- **Discutir** un sistema con un parámetro $a$: (1) calcular $\det A$ (si es cuadrado) y hallar los valores que lo anulan; (2) para los demás valores, el sistema es
  compatible determinado; (3) para cada valor crítico, sustituir y estudiar los rangos de $A$ y $A^*$ (o escalonar). *Ejemplo:* si $\det A = a(a - 1)$, se estudian
  aparte $a = 0$ y $a = 1$.

## 7. Errores típicos

- Operar con columnas en lugar de filas al escalonar.
- Olvidar aplicar las operaciones también a la columna de términos independientes.
- Concluir que un sistema con $\det A = 0$ es incompatible sin estudiar los rangos (puede ser indeterminado).
- En un indeterminado, dar una sola solución en vez de la expresión con parámetros.
- Aplicar Cramer cuando $\det A = 0$.

## 8. Resumen

- $AX = B$, matriz ampliada $A^*$; si $A$ es invertible, $X = A^{-1}B$.
- Gauss: escalonar con operaciones de filas; incompatible si aparece $0 = c$; parámetros para las incógnitas sin pivote.
- Rouché-Frobenius: compatible $\iff \operatorname{rg}A = \operatorname{rg}A^*$; determinado si es igual a $n$; $n - \operatorname{rg}A$ parámetros.
- Cramer: $x_i = \frac{\det A_i}{\det A}$ si $\det A \neq 0$.
- Homogéneos: trivial siempre; más soluciones si $\det A = 0$. Discusión: valores críticos de $\det A$.

## Repaso: lo que debe quedarte dentro de un mes

1. Las operaciones permitidas en el método de Gauss.
2. El enunciado de Rouché-Frobenius y cómo se cuentan los parámetros.
3. La regla de Cramer y cuándo se puede aplicar.
4. Por qué un sistema homogéneo siempre es compatible.
5. Los pasos para discutir un sistema con un parámetro.

## Siguiente

[[mat-algebra-lineal-1]] (espacios vectoriales y aplicaciones lineales) y [[mat-vectores-espacio]] (geometría en tres dimensiones).
