---
id: mat-matrices
title: "Matrices: tipos, operaciones, producto, potencias, traspuesta, inversa por Gauss-Jordan, rango, ecuaciones matriciales y grafos"
area: matematicas
trunk_level: 4
prerequisites: [mat-sistemas-dos-incognitas, mat-fracciones]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 1: «Matrices», secciones 1 (concepto, dimensión, igualdad), 2 (tipos), 3 (suma, producto por un escalar, producto, inversa, traspuesta, rango) y 4 (grafos y matrices). Apuntes Marea Verde, autores Leticia González Pascual y Álvaro Valdés Menéndez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2001%20Matrices.pdf"
  - "G. Strang, «Introduction to Linear Algebra», 5.ª ed., Wellesley-Cambridge Press (2016), capítulo 2 (eliminación, reglas de las operaciones con matrices, inversas)."
hints:
  - "Concepto: una matriz es una tabla de números. Se suman elemento a elemento, pero se multiplican «fila por columna»: el elemento (i, j) de AB es la fila i de A por la columna j de B. El producto no es conmutativo."
  - "Herramienta: antes de multiplicar, comprueba dimensiones (columnas de A = filas de B). Para la inversa 2 × 2, intercambia la diagonal, cambia el signo de la otra y divide entre el determinante; en general, Gauss-Jordan con [A | I] → [I | A⁻¹]. El rango es el número de filas no nulas tras escalonar."
  - "Documentación: Marea Verde Matemáticas II cap. 1; Strang, cap. 2."
exercises:
  - id: elemento-de-un-producto
    tier: 1
    prompt: |
      Con $A = {{A}}$ y $B = {{B}}$, ¿cuánto vale el elemento de la posición ${{pos}}$ (fila, columna) de $AB$?
    variants:
      - values: {"A":"\\begin{pmatrix}2 & -1 & 3\\\\ 0 & 4 & 1\\end{pmatrix}","B":"\\begin{pmatrix}1 & 2\\\\ -3 & 0\\\\ 2 & 5\\end{pmatrix}","pos":"(1, 2)"}
        answers: ["sha256:9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2\\\\ -1 & 3 & 1\\\\ 4 & 2 & 0\\end{pmatrix}","B":"\\begin{pmatrix}2 & 1 & 0\\\\ 0 & -1 & 3\\\\ 1 & 1 & 1\\end{pmatrix}","pos":"(2, 3)"}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"A":"\\begin{pmatrix}5 & -2\\\\ 1 & 3\\end{pmatrix}","B":"\\begin{pmatrix}0 & 4 & -1\\\\ 2 & 1 & 6\\end{pmatrix}","pos":"(2, 3)"}
        answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
      - values: {"A":"\\begin{pmatrix}3 & 1 & -1 & 2\\end{pmatrix}","B":"\\begin{pmatrix}1\\\\ 0\\\\ 4\\\\ -2\\end{pmatrix}","pos":"(1, 1)"}
        answers: ["sha256:37aa1ccf80e481832b2db282d4d4f895ee1e31219b7d0f6aee8dc8968828341b"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 3 & 4\\\\ 5 & 6\\end{pmatrix}","B":"\\begin{pmatrix}-1 & 0 & 2\\\\ 1 & 1 & -3\\end{pmatrix}","pos":"(3, 1)"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 2\\\\ 2 & -2 & 1\\end{pmatrix}","B":"\\begin{pmatrix}3 & 0\\\\ 1 & 5\\\\ -1 & 2\\end{pmatrix}","pos":"(2, 2)"}
        answers: ["sha256:e91592205d3881e3ea35d66973bb4898d7282126ab5afcb355c95d2fc17f3822"]
  - id: combinacion-de-matrices
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Con $A = {{A}}$ y $B = {{B}}$, calcula el elemento ${{pos}}$ de ${{p}}A {{q}}B$.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 3 & -1\\end{pmatrix}","B":"\\begin{pmatrix}0 & 5\\\\ -2 & 4\\end{pmatrix}","p":"2","q":"- 3","pos":"(1, 2)"}
        answers: ["sha256:5caea637f258975628561a1a5ebea41019374d5dffae63dd6807e79c13ad67a6","sha256:dd9cc83798d58f823a000b8778932d12b4dbbc137b87ec18a4848b8c2ed74f0e","sha256:3cc155c39709e69d2dbd9b96dfb4ef8624b29db1f75ce45b30f15a760b7db2cc"]
      - values: {"A":"\\begin{pmatrix}4 & 0 & 1\\\\ 2 & -3 & 5\\end{pmatrix}","B":"\\begin{pmatrix}1 & 1 & 1\\\\ 0 & 2 & -1\\end{pmatrix}","p":"-1","q":"+ 4","pos":"(2, 3)"}
        answers: ["sha256:8cfa1b53b7b0bf9f57238a0806f7ced5f49c8da9112580fc10cfd35a88aed210","sha256:738ab3fe87c3e302409625b71f4fd6fdde2c58a76f0f00618bae1fd4fed27423","sha256:fb5e83707163f4b34d183647fec8e0d29167c18059095f3bf10d64609234330d"]
      - values: {"A":"\\begin{pmatrix}6 & -2\\\\ 0 & 1\\end{pmatrix}","B":"\\begin{pmatrix}3 & 3\\\\ 1 & -1\\end{pmatrix}","p":"0{,}5","q":"+ 2","pos":"(1, 1)"}
        answers: ["sha256:ec731453bb84815fe876ebf48c1da1ec31a8aec253c0990108104bad7a9d658d","sha256:11056457da26af71fad79d1bad545bbbd33e6df4bc0cc6c3739127e08ccf3b6d","sha256:e9c0dc676c1b5d96172d3c84d97ed9fff4448e0f996f750135536f6e7021b404"]
      - values: {"A":"\\begin{pmatrix}1 & 0\\\\ 0 & 1\\end{pmatrix}","B":"\\begin{pmatrix}2 & -7\\\\ 5 & 3\\end{pmatrix}","p":"5","q":"- 1","pos":"(1, 2)"}
        answers: ["sha256:db70da1e46954bb2001c2be502c76377144e8908e13c099eb09185ce282321c4","sha256:a5c014efe7d73a724f6bbf8468afc1c10eb214a0f7ae96e2bbc575b387712a04","sha256:5f3cbd51d8c614764685f53b11c2597a49975df618fe48083143a097e384de1c"]
      - values: {"A":"\\begin{pmatrix}3 & 1 & 2\\end{pmatrix}","B":"\\begin{pmatrix}-1 & 4 & 0\\end{pmatrix}","p":"3","q":"+ 2","pos":"(1, 2)"}
        answers: ["sha256:7eb795488474e1929e9a592d5cf8d6062f25f7d174de91565d607ebe02526166","sha256:dee38562789ade91f398eb9ddeefe64270543803af2d7b36bf9f15862742aac0","sha256:071eb79d0ace9b6d141ab1fc3614e377d6994fce358c7a4eef2de0ef08a99c69"]
      - values: {"A":"\\begin{pmatrix}2 & 4\\\\ 6 & 8\\end{pmatrix}","B":"\\begin{pmatrix}1 & 0\\\\ 0 & 1\\end{pmatrix}","p":"-0{,}5","q":"+ 3","pos":"(2, 2)"}
        answers: ["sha256:b6737ad8ff37ae881526056f69b730c141e223fe07d4d8a0c480732d66af2767","sha256:a9eacb4a16299a3a29634c92311072053bb9144a113800c400cc3414629b47d2","sha256:efc49e2c3e6e63609d47c355ad7c77e25d43ceccbb4962225cd4f5bb504754ae"]
  - id: dimensiones-del-producto
    tier: 1
    prompt: |
      $A$ es de dimensión ${{m}} \times {{n}}$ y $B$ de dimensión ${{p}} \times {{q}}$. Si se puede calcular $AB$, ¿de qué dimensión es? Respuesta: `filas;columnas`, o `no` si no se puede.
    variants:
      - values: {"m":2,"n":3,"p":3,"q":4}
        answers: ["sha256:5c062f977e5d0e39b746d58304e9711596badda6c7fa054f415a197c006080d5"]
      - values: {"m":3,"n":2,"p":3,"q":2}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"m":1,"n":4,"p":4,"q":1}
        answers: ["sha256:ac4750dbb83d4a51542912ea8135f5e1107464ecc7892381c90b21d02d1b9d35"]
      - values: {"m":4,"n":1,"p":1,"q":4}
        answers: ["sha256:a144b4de125e0a4ee175a67a2ec1015e77d0aca4ba9105341519344aafccc184"]
      - values: {"m":2,"n":2,"p":3,"q":2}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"m":5,"n":3,"p":3,"q":3}
        answers: ["sha256:11b4e3d107c9ead370d5988313bdb607b2fa33279ce574f04f1f9091af18bc34"]
  - id: traspuesta-por-matriz
    tier: 2
    prompt: |
      Con $A = {{A}}$ y $B = {{B}}$, calcula el elemento ${{pos}}$ de $A^t B$.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 3 & 4\\\\ 5 & 6\\end{pmatrix}","B":"\\begin{pmatrix}1 & 0\\\\ 0 & 1\\\\ 1 & 1\\end{pmatrix}","pos":"(1, 2)"}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"A":"\\begin{pmatrix}2 & -1\\\\ 0 & 3\\end{pmatrix}","B":"\\begin{pmatrix}4 & 1\\\\ -2 & 5\\end{pmatrix}","pos":"(2, 1)"}
        answers: ["sha256:c171d4ec282b23db89a99880cd624e9ba2940c1d894783602edab5d7481dc1ea"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2\\\\ 3 & -1 & 1\\end{pmatrix}","B":"\\begin{pmatrix}2 & 2 & 0\\\\ 1 & -3 & 4\\end{pmatrix}","pos":"(3, 2)"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}5\\\\ -2\\\\ 1\\end{pmatrix}","B":"\\begin{pmatrix}1\\\\ 1\\\\ 3\\end{pmatrix}","pos":"(1, 1)"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"A":"\\begin{pmatrix}0 & 1\\\\ 1 & 0\\\\ 2 & 2\\end{pmatrix}","B":"\\begin{pmatrix}3 & -1\\\\ 1 & 4\\\\ 0 & 2\\end{pmatrix}","pos":"(2, 2)"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 2 & 0 & -1\\end{pmatrix}","B":"\\begin{pmatrix}0 & 3 & 1\\\\ 4 & 1 & 2\\end{pmatrix}","pos":"(1, 3)"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: potencia-de-una-matriz
    tier: 2
    prompt: |
      Con $A = {{A}}$, calcula el elemento ${{pos}}$ de ${{pot}}$ (busca la regularidad de las primeras potencias).
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 1\\\\ 0 & 1\\end{pmatrix}","pot":"A^{10}","pos":"(1, 2)"}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"A":"\\begin{pmatrix}2 & 0\\\\ 0 & 3\\end{pmatrix}","pot":"A^{4}","pos":"(2, 2)"}
        answers: ["sha256:5316ca1c5ddca8e6ceccfce58f3b8540e540ee22f6180fb89492904051b3d531"]
      - values: {"A":"\\begin{pmatrix}0 & 1\\\\ 1 & 0\\end{pmatrix}","pot":"A^{7}","pos":"(1, 2)"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 0 & 1\\end{pmatrix}","pot":"A^{5}","pos":"(1, 2)"}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"A":"\\begin{pmatrix}1 & 1\\\\ 1 & 0\\end{pmatrix}","pot":"A^{8}","pos":"(1, 1)"}
        answers: ["sha256:86e50149658661312a9e0b35558d84f6c6d3da797f552a9657fe0558ca40cdef"]
      - values: {"A":"\\begin{pmatrix}0 & -1\\\\ 1 & 0\\end{pmatrix}","pot":"A^{6}","pos":"(1, 1)"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
  - id: inversa-2x2
    tier: 1
    prompt: |
      Calcula la inversa de $A = {{A}}$. ¿Cuánto vale su elemento ${{pos}}$? (Si es una fracción, escríbela como `p/q`.)
    variants:
      - values: {"A":"\\begin{pmatrix}3 & 1\\\\ 5 & 2\\end{pmatrix}","pos":"(1, 2)"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}4 & 7\\\\ 1 & 2\\end{pmatrix}","pos":"(2, 1)"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}2 & 3\\\\ 1 & 4\\end{pmatrix}","pos":"(1, 1)"}
        answers: ["sha256:1265c5694e904ac7a10d0eebd43894950b49cfda19a3dbacdc4db7c0a49f6f12"]
      - values: {"A":"\\begin{pmatrix}1 & -2\\\\ 3 & 1\\end{pmatrix}","pos":"(2, 2)"}
        answers: ["sha256:2da190e578ddcfcde27e772094a620aacca6b6b5f26f3ce58a42640b4363b509"]
      - values: {"A":"\\begin{pmatrix}5 & 2\\\\ 3 & 1\\end{pmatrix}","pos":"(1, 2)"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}6 & 4\\\\ 2 & 3\\end{pmatrix}","pos":"(2, 1)"}
        answers: ["sha256:7eb36c00dadda2bd336936d19a7fe410da5b985f4fc200ce44a1069441200d4a"]
  - id: inversa-gauss-jordan
    tier: 3
    prompt: |
      Calcula la inversa de $A = {{A}}$ por el método de Gauss-Jordan. ¿Cuánto vale su elemento ${{pos}}$? (Fracción como `p/q`.)
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 0\\\\ 0 & 1 & 1\\\\ 1 & 0 & 1\\end{pmatrix}","pos":"(1, 3)"}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
      - values: {"A":"\\begin{pmatrix}2 & 0 & 1\\\\ 1 & 1 & 0\\\\ 0 & 3 & 1\\end{pmatrix}","pos":"(2, 2)"}
        answers: ["sha256:0b9db2ecfb8de65fb248232d099982a827055c98d6372e9b4e1fa81d98dc1cc2"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1\\\\ 0 & 1 & 1\\\\ 0 & 0 & 1\\end{pmatrix}","pos":"(1, 2)"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}3 & 0 & 1\\\\ 1 & 2 & 0\\\\ 0 & 1 & 1\\end{pmatrix}","pos":"(3, 1)"}
        answers: ["sha256:2da190e578ddcfcde27e772094a620aacca6b6b5f26f3ce58a42640b4363b509"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2\\\\ 2 & 1 & 0\\\\ 0 & 1 & 1\\end{pmatrix}","pos":"(2, 3)"}
        answers: ["sha256:1265c5694e904ac7a10d0eebd43894950b49cfda19a3dbacdc4db7c0a49f6f12"]
      - values: {"A":"\\begin{pmatrix}2 & 1 & 1\\\\ 1 & 2 & 1\\\\ 1 & 1 & 2\\end{pmatrix}","pos":"(1, 1)"}
        answers: ["sha256:5132a20379415fe98f3a0700afc2a901e9b01af839b5454a8659152f0782c223"]
  - id: rango
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuál es el rango de $A = {{A}}$?
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 1 & 0\\\\ 2 & 4 & 2 & 0\\\\ 0 & 1 & 3 & 1\\end{pmatrix}"}
        answers: ["sha256:167da2ee4d990fcfc74b7c80a3bfb9c2836856746376292b35b62bc716b81f6f","sha256:0691ac6e904a7b0c0c56785f6fae3f67d539e5f03263b79ff8986a19527b4df8","sha256:00d223a5a2dabcabf1c6bff1b723692427d694613a6355492ecca3f3bd1ccc52"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2\\\\ 0 & 1 & -1\\\\ 1 & 1 & 1\\end{pmatrix}"}
        answers: ["sha256:4802e910dd330c2ce38dc3b452d632e994e38a6026f2cc248ead600e0326f7c6","sha256:919b7ecbb65ac2b13846a78c0c0c46e8fb6e34ad6051b956e0f05d63d0062764","sha256:6257bdd2930a1eb8cd53b047285c2d883ccda2cb5ef5a7653cd2238b389d7ef3"]
      - values: {"A":"\\begin{pmatrix}2 & -1 & 3 & 1\\\\ 4 & -2 & 6 & 2\\\\ -2 & 1 & -3 & -1\\end{pmatrix}"}
        answers: ["sha256:754f9c303ba38abc31ec51b922a3cea8a37cf9869ecb30d2996f284bdc4d568c","sha256:2afe0b0e8daa8aa8ba61dcc59087e5808849341a3799fba0a4f96fb2b8bd66c5","sha256:2cb1b86a129c51261507d28bd38274b4bec3e3de63a11848aa3eb24e052d4e27"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 0 & 2\\\\ 0 & 1 & 1 & 1\\\\ 1 & 0 & 1 & 3\\end{pmatrix}"}
        answers: ["sha256:2eb3551a8ac5f3455f829e966907de196f8693b81ada749a714326b817c766e0","sha256:2fe785b2cb1b8d164eb17384b7a9f2a0d35ebbb59bd827a3368f14216f7d0474","sha256:f0ac21b9919f771f7362fe0cc0369ec0bf1f477273856e9c3676e2cdc1729cb6"]
      - values: {"A":"\\begin{pmatrix}3 & 6 & 9\\\\ 1 & 2 & 3\\end{pmatrix}"}
        answers: ["sha256:e1440e3459c0e77a672d2bcc340c8c54a0bedd34a82d3f30a35b5e3819717225","sha256:fb6fcda13bf6375fac4b977022dc608c0a3e462faaa3d7be78a2078cdc42718f","sha256:7bc5bcf15dec467b0c0eb0b53a1a47afbc1cdebc2100780b08ad7e835e2b63a3"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 3 & 4\\\\ 5 & 7\\end{pmatrix}"}
        answers: ["sha256:5a788e52f411c1e7bac81b84da40524bca87d4aceabcb9f4fdd1f9d48ead967f","sha256:749e2c50e3465e2a424fd12f628ff241cd52d3f14e627a0918c6d274bb92720d","sha256:6ea6e0064cb8457fea260fafe90ffa3c2995c178083491f7de1cb4ca95fcdd34"]
  - id: ecuacion-matricial
    tier: 2
    prompt: |
      Resuelve $AX = B$ con $A = {{A}}$ y $B = {{B}}$ ($X = A^{-1}B$). ¿Cuánto vale el elemento ${{pos}}$ de $X$? (Fracción como `p/q`.)
    variants:
      - values: {"A":"\\begin{pmatrix}2 & 1\\\\ 1 & 1\\end{pmatrix}","B":"\\begin{pmatrix}3 & 0\\\\ 1 & 2\\end{pmatrix}","pos":"(1, 1)"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 0 & 1\\end{pmatrix}","B":"\\begin{pmatrix}5 & 4\\\\ 2 & 1\\end{pmatrix}","pos":"(1, 2)"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}3 & 1\\\\ 2 & 1\\end{pmatrix}","B":"\\begin{pmatrix}1 & 0\\\\ 0 & 1\\end{pmatrix}","pos":"(2, 1)"}
        answers: ["sha256:cf3bae39dd692048a8bf961182e6a34dfd323eeb0748e162eaf055107f1cb873"]
      - values: {"A":"\\begin{pmatrix}1 & -1\\\\ 1 & 1\\end{pmatrix}","B":"\\begin{pmatrix}2 & 4\\\\ 0 & 2\\end{pmatrix}","pos":"(2, 2)"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}4 & 3\\\\ 1 & 1\\end{pmatrix}","B":"\\begin{pmatrix}7 & 1\\\\ 2 & 0\\end{pmatrix}","pos":"(1, 1)"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}2 & 5\\\\ 1 & 3\\end{pmatrix}","B":"\\begin{pmatrix}1 & 1\\\\ 1 & 1\\end{pmatrix}","pos":"(2, 2)"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: producto-no-conmutativo
    tier: 1
    prompt: |
      Con $A = {{A}}$ y $B = {{B}}$, calcula el elemento $(1, 1)$ de $AB - BA$.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 3\\\\ 0 & 2\\end{pmatrix}","B":"\\begin{pmatrix}2 & 0\\\\ 1 & 1\\end{pmatrix}"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"A":"\\begin{pmatrix}0 & 1\\\\ 0 & 0\\end{pmatrix}","B":"\\begin{pmatrix}0 & 0\\\\ 1 & 0\\end{pmatrix}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}2 & 1\\\\ 1 & 3\\end{pmatrix}","B":"\\begin{pmatrix}1 & -1\\\\ 2 & 0\\end{pmatrix}"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"A":"\\begin{pmatrix}5 & 0\\\\ 2 & 1\\end{pmatrix}","B":"\\begin{pmatrix}1 & 4\\\\ 0 & 3\\end{pmatrix}"}
        answers: ["sha256:e91592205d3881e3ea35d66973bb4898d7282126ab5afcb355c95d2fc17f3822"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 2 & 1\\end{pmatrix}","B":"\\begin{pmatrix}3 & 1\\\\ 1 & 3\\end{pmatrix}"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
      - values: {"A":"\\begin{pmatrix}4 & -1\\\\ 3 & 2\\end{pmatrix}","B":"\\begin{pmatrix}0 & 2\\\\ 5 & 1\\end{pmatrix}"}
        answers: ["sha256:2e42a91d2375f9a3afce88f766b097488c5ab1f5926798f59892394b77abdd5c"]
  - id: caminos-en-un-grafo
    tier: 3
    type: numero
    sig: 10
    prompt: |
      La matriz de adyacencia de un grafo es $A = {{A}}$ (el elemento $(i, j)$ vale $1$ si hay una arista de $i$ a $j$). ¿Cuántos caminos de {{lon}}
      van {{ruta}}? (Calcula ${{pot}}$.)
    variants:
      - values: {"A":"\\begin{pmatrix}0 & 1 & 1 & 0\\\\ 1 & 0 & 1 & 1\\\\ 1 & 1 & 0 & 1\\\\ 0 & 1 & 1 & 0\\end{pmatrix}","pot":"A^{2}","lon":"longitud 2","ruta":"del vértice 1 al vértice 4"}
        answers: ["sha256:01ca259ef10d638b5e105dab5d408da9c554e97830233b0307a2668507e4d4c8","sha256:f514322bcb35d2364d5f6dff472924d90128efb15c810d697aecbf1918ee4b87","sha256:70e879892e69d33275794653b3991f2486a46d53dc19a27120e68250723c6b32"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 0\\\\ 1 & 0 & 1\\\\ 0 & 1 & 0\\end{pmatrix}","pot":"A^{3}","lon":"longitud 3","ruta":"del vértice 1 al vértice 2"}
        answers: ["sha256:54927b21b73fa2a8aefe2bf43e510b2d57d0a09c1bf52c5281e60dc3fa79c16e","sha256:04064e501dccee12f3edb528ad9edc394390face280ac1e05e1fad0013ec8cc4","sha256:23328d161378c388e2eb9fe8423f5d5329a9cacde298b1f72c62aff10d6568c7"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 1 & 1\\\\ 1 & 0 & 1 & 1\\\\ 1 & 1 & 0 & 1\\\\ 1 & 1 & 1 & 0\\end{pmatrix}","pot":"A^{2}","lon":"longitud 2","ruta":"del vértice 1 al vértice 1"}
        answers: ["sha256:610b4a9ca606c16182d9cc5ff4650d5918342839104f4131b1305e0e347dd031","sha256:e001e9a211ac1a2e922e301dcc59be6661785e35241ef6a5ba8b8ce9a2d8d23a","sha256:aba45fa4f12650002d5a2c0c4e7dd729050c339557990f13d9b44d1de5abb777"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 0 & 0\\\\ 0 & 0 & 1 & 0\\\\ 0 & 0 & 0 & 1\\\\ 1 & 0 & 0 & 0\\end{pmatrix}","pot":"A^{3}","lon":"longitud 3","ruta":"del vértice 2 al vértice 1"}
        answers: ["sha256:79b28875d5c520a44e74c797c4f2e610d8fe7d84821127da5947512c121dac85","sha256:e32d983423d7deb251fe0a80092ca0ceb6be69faa234048e4fb4993a961b0cef","sha256:a7102a729fe957099236803dfe8f55555283cae4ed4590f42c37a6ef6b92e31c"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 1\\\\ 1 & 0 & 1\\\\ 1 & 1 & 0\\end{pmatrix}","pot":"A^{3}","lon":"longitud 3","ruta":"del vértice 1 al vértice 1"}
        answers: ["sha256:d16e661fdddb5f13e62079d25cd015adf43a2d3c0cad034f9b09da099e9f2b29","sha256:c38b6cf12f1fa60cd8b22447b82d9dcda3b01db9d0117dd00cd41ec843bbf284","sha256:55eac0514c06785979b13242c9fefc153623141084c37627c1eca9b8d40f91ec"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 0 & 1\\\\ 1 & 0 & 1 & 0\\\\ 0 & 1 & 0 & 1\\\\ 1 & 0 & 1 & 0\\end{pmatrix}","pot":"A^{2}","lon":"longitud 2","ruta":"del vértice 1 al vértice 3"}
        answers: ["sha256:1be43e9063005d0d3f1304df75cb2995af8e79da55b2e73d6f52f411e3dc3c98","sha256:e53e1151df71f5e9c3a16dc2ddc5cde728d012670780e72dcfa7efa0a56f198f","sha256:e18c4506abf6fd2374afe7eaf4fbe6824ae70d1120368f9aeff4dd4f4afd42ee"]
  - id: producto-e-inversa
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué el producto de matrices se define «fila por columna», con un ejemplo de aplicación (precios por cantidades, o
      composición de transformaciones). (b) Demuestra que si $A$ y $B$ son invertibles, $(AB)^{-1} = B^{-1}A^{-1}$, y que $(AB)^t = B^tA^t$ en el caso $2 \times 2$. (c) Da un ejemplo de dos
      matrices no nulas cuyo producto sea la matriz nula, y explica por qué eso impide «simplificar» en $AB = AC$.
    sealed: "gz64:H4sIAAAAAAACCn1Uy27bMBD8lYFAFJKhBE2PBnKw0x7aU4Eeq8agqXWwDrVU+DCSGv6YfkM/IT9WkHKMuGhzEailZnZ3Zlf7KjibIjup5tVsVutmNsM3RhKNyCS9xo6kJxgtkXvdU4B6WG0VSqzXGL3rk4kOT3+9Zzhh9GTYQY2rPW8PCiSwJ2rFqgVZsNx5Ci5znl0iZ+u6kIbVFhNDzj3Hhq1GT51M9AGj8zDOpkE0zqq9xCfBHQl5bVsEhloqRK8lbJwfNJJgRyY6jyfYRHcOanH2AVl4CslG3bu2lHe6M/z8WxBd1LZUuliqFk+dhBRgHG3YMEmkgOAEFHRASIMOucAXlcJlJ53MZvU6C6/qxbKpl7f7i6vDojwbXGNRL6dQM8Vy6HT6rFDr4AzryLvcctPmThwGDoPLcpOFi97B+Z5kXpSKWqKbsr3wvE6qLvFVe31sNoyJQtTZqE7I0kATmFtsmzIHE1EsdpGFqrct+HhVNDl6eA+92m/vD+vV/p4PqsVDIhjHYjh75mRCvyJe3sbFbXzNMGEnHvUininiLXCNrlvTHct+HHT0/HjAFd7hCl3XddOx60j603VmXv4PdnHEXfwLOM+t4Rrvs1jOg4Jrjw1nf24UaspOG/Yt1KJe4gI3TQE0EIdA6KlPhjopFdwoBG13rmiSRzCQBsuOfOS1JdRDspFHy0ZL74qL6ugWilP88yEx+V43l1Vb+bT2bKr5931lPEfy7Kp59SWFyBs2ZapPi1qW6fUCZSeSgLY0jLZspS6Jy7xn9jFJdKGafzi0Z/wfaciz4vUbs5WnU2Pz/NsPqSzx+Zi9Sa/Ru4BigaGQZZRkdSgFn9qRZPPPiB5LzTDp+VdWLBDGRD0h8DDaooI/T/bj8Afn/pCxDgUAAA=="
  - id: r-conmutativa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Es conmutativo el producto de matrices ($AB = BA$)?
    options:
      - |
        Sí, siempre
      - |
        No en general
      - |
        Solo si son cuadradas
      - |
        Solo si son de la misma dimensión
    answers: ["sha256:e3205d12ee5ab6f3ab2f0e67d063b5549c07c953c639ab715f14beab23c2da32"]
  - id: r-identidad
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es la matriz identidad $I$?
    options:
      - |
        La que tiene todos los elementos iguales a $1$
      - |
        La matriz nula
      - |
        La cuadrada con unos en la diagonal y ceros fuera
      - |
        Cualquier matriz simétrica
    answers: ["sha256:7110fa41dbe9788366d80c22fafec4d02846979ea8cb7ba1fa78f7af28816e91"]
  - id: r-inversa-existe
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo tiene inversa una matriz?
    options:
      - |
        Si es cuadrada y su determinante no es $0$
      - |
        Siempre
      - |
        Si es simétrica
      - |
        Si no tiene ceros
    answers: ["sha256:f3c264b6b7c64b91090d9cd7540d0db6a9c1d9d65591325c02158e71c221af47"]
  - id: r-traspuesta-dim
    tier: 1
    review: true
    prompt: |
      Si $A$ es de dimensión $2 \times 5$, ¿de qué dimensión es $A^t$? Respuesta: `filas;columnas`.
    answers: ["sha256:d5e99f33ed154aa11a2b8779e1bc7899d8e3139d700bee2cb1569a03a88411a4"]
  - id: r-rango-def
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es el rango de una matriz?
    options:
      - |
        El número de filas
      - |
        El número de ceros
      - |
        El mayor elemento
      - |
        El número máximo de filas (o columnas) linealmente independientes
    answers: ["sha256:d8bbd19605c5bdaa7d0a82a96e2e282827871ac3829467d06b61a9c37f645715"]
  - id: r-simetrica
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es simétrica una matriz cuadrada $A$?
    options:
      - |
        $A = -A$
      - |
        $A = A^t$
      - |
        $A^2 = I$
      - |
        $A = I$
    answers: ["sha256:1a3c9da7ae80a42516d4e84db947ae6c2a31acdcd6f74dcce54950c757df86f7"]
  - id: r-inversa-rapida
    tier: 2
    review: true
    prompt: |
      La inversa de $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ es $\begin{pmatrix} 1 & a \\ -1 & 2 \end{pmatrix}$. ¿Cuánto vale $a$?
    answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
---

# Matrices: tipos, operaciones, producto, potencias, traspuesta, inversa por Gauss-Jordan, rango, ecuaciones matriciales y grafos

Una hoja de cálculo, una imagen digital (una tabla de píxeles), los enlaces entre páginas web, las conexiones de una red social o los
parámetros de un modelo de inteligencia artificial: todo eso son **matrices**, tablas rectangulares de números con unas reglas de cálculo propias. Con ellas se resuelven
sistemas de ecuaciones enormes, se giran y escalan imágenes, se calculan rutas en un grafo o se ordena la web. Este nodo presenta las matrices,
sus operaciones (sobre todo el producto, que es la clave), la matriz inversa y el rango.

## Objetivos

Al terminar sabrás:

1. Reconocer la dimensión y los tipos de matrices.
2. Sumar matrices, multiplicarlas por números y multiplicarlas entre sí, sabiendo cuándo se puede.
3. Calcular potencias y la traspuesta, y usar sus propiedades.
4. Calcular la matriz inversa (fórmula $2 \times 2$ y Gauss-Jordan) y resolver ecuaciones matriciales.
5. Calcular el rango por el método de Gauss y usar matrices para contar caminos en un grafo.

## Qué debes dominar antes

[[mat-sistemas-dos-incognitas]] (método de reducción, que es la base de Gauss) y [[mat-fracciones]] (operar con fracciones).

> [!question] Test de entrada
> 1. Calcula $2 \cdot 3 + (-1) \cdot 4 + 5 \cdot 0$.
> 2. Resuelve por reducción $x + y = 5$, $x - y = 1$.
> 3. Calcula $\frac23 - \frac{1}{2}$.
>
> Respuestas: $2$; $x = 3$, $y = 2$; $\frac16$.

## 1. Para qué sirve

- **Sistemas de ecuaciones**: se escriben como $AX = B$ y se resuelven con matrices (el tema `mat-sistemas-lineales-bachillerato`).
- **Gráficos y robótica**: giros, escalados y proyecciones son productos por matrices ([[rob-cinematica]]).
- **Grafos y redes**: la matriz de adyacencia y sus potencias cuentan conexiones; así funcionaba el primer algoritmo de búsqueda de Google.
- **Datos e IA**: una tabla de datos es una matriz, y los modelos de aprendizaje automático multiplican matrices sin parar ([[mat-algebra-lineal-1]]).

## 2. Concepto y tipos

Una **matriz** de dimensión $m \times n$ es una tabla de $m$ filas y $n$ columnas; $a_{ij}$ es el elemento de la fila $i$ y la columna $j$. Dos matrices son iguales si
tienen la misma dimensión y los mismos elementos. **Tipos**: fila ($1 \times n$), columna ($m \times 1$), **cuadrada** ($n \times n$, con **diagonal principal** $a_{11}, \dots, a_{nn}$), **nula** $O$,
**diagonal**, **triangular**, **identidad** $I$ (unos en la diagonal y ceros fuera), **simétrica** ($A = A^t$).

## 3. Suma, producto por un número y producto de matrices

> [!practico]
> Una tienda vende $3$ productos en $2$ sucursales: la tabla de unidades vendidas es una matriz $2 \times 3$. Para saber lo que ingresa cada
> sucursal, multiplicas cada fila de unidades por la columna de precios y sumas: eso es exactamente el producto de matrices, «fila por
> columna».

- **Suma** (misma dimensión): elemento a elemento. **Producto por un número**: se multiplica cada elemento.
- **Producto** $AB$: solo si las **columnas de $A$** son tantas como las **filas de $B$**; si $A$ es $m \times n$ y $B$ es $n \times p$, $AB$ es $m \times p$ y
  $$
  (AB)_{ij} = \sum_{k=1}^{n} a_{ik}\,b_{kj} \quad \text{(fila } i \text{ de } A \text{ por columna } j \text{ de } B\text{)} .
  $$
- **Propiedades**: asociativa $(AB)C = A(BC)$, distributiva, $AI = IA = A$. Pero **no conmutativa**: en general $AB \neq BA$. *Ejemplo:* $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$,
  $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$: $AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$ (intercambia columnas) y $BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$ (intercambia filas). Además, puede ser $AB = O$ con $A, B \neq O$.
- **Potencias** de una matriz cuadrada: $A^2 = AA$, $A^3 = AAA$… A menudo se descubre una regularidad calculando las primeras.

**Traspuesta** $A^t$: cambia filas por columnas ($a^t_{ij} = a_{ji}$). Propiedades: $(A^t)^t = A$, $(A + B)^t = A^t + B^t$, $(AB)^t = B^tA^t$.

## 4. Matriz inversa

Una matriz cuadrada $A$ es **invertible** si existe $A^{-1}$ con $AA^{-1} = A^{-1}A = I$. Si existe, es única, y $(AB)^{-1} = B^{-1}A^{-1}$.

- **Fórmula $2 \times 2$**: si $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ y $ad - bc \neq 0$, entonces $A^{-1} = \dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$. *Ejemplo:* $\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$.
- **Gauss-Jordan** (cualquier tamaño): se escribe $[A \mid I]$ y con operaciones elementales por filas (intercambiar filas, multiplicar una fila por un número no
  nulo, sumarle a una fila un múltiplo de otra) se transforma la parte izquierda en $I$; a la derecha queda $A^{-1}$. Si en el proceso aparece una fila de ceros a la
  izquierda, $A$ no es invertible.
- **Ecuaciones matriciales**: de $AX = B$ se despeja $X = A^{-1}B$ (multiplicando por la **izquierda**); de $XA = B$, $X = BA^{-1}$. El orden importa.

> [!formal] Con rigor: por qué Gauss-Jordan da la inversa
> Cada operación elemental por filas equivale a multiplicar por la izquierda por una matriz elemental $E_k$ (la que resulta de hacer esa operación en $I$). Si
> $E_r\cdots E_1 A = I$, entonces $E_r\cdots E_1 = A^{-1}$, y aplicar las mismas operaciones a $I$ produce $E_r\cdots E_1 I = A^{-1}$. Por eso, haciendo las operaciones a la vez sobre
> $[A \mid I]$, a la derecha aparece la inversa. $\blacksquare$

## 5. Rango

El **rango** de una matriz es el número máximo de filas (o, equivalentemente, de columnas) **linealmente independientes**: las que no se pueden
obtener como combinación de las otras. Se calcula **escalonando** por Gauss (las operaciones elementales no cambian el rango): es el número de filas
no nulas que quedan. *Ejemplo:* en $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 0 & 1 \end{pmatrix}$, la segunda fila es el doble de la primera; escalonando quedan dos filas no nulas: rango $2$. El
rango decide si un sistema tiene solución (el tema `mat-sistemas-lineales-bachillerato`) y si una matriz cuadrada es invertible (rango máximo).

## 6. Grafos y matrices

La **matriz de adyacencia** de un grafo con $n$ vértices tiene $a_{ij} = 1$ si hay una arista de $i$ a $j$ y $0$ si no. Entonces el elemento $(i, j)$ de $A^k$ es el
**número de caminos de longitud $k$** de $i$ a $j$ (por la definición del producto, se suman todas las formas de ir de $i$ a algún $l$ y de $l$ a $j$).

## 7. Errores típicos

- Multiplicar matrices elemento a elemento.
- Multiplicar matrices de dimensiones incompatibles, o dar a $AB$ la dimensión equivocada.
- Suponer que $AB = BA$, o «simplificar» en $AB = AC$ sin que $A$ sea invertible.
- Despejar $X$ en $AX = B$ como $BA^{-1}$.
- En Gauss-Jordan, operar con columnas en vez de con filas.

## 8. Resumen

- Matriz $m \times n$; tipos: cuadrada, diagonal, triangular, identidad, simétrica.
- Suma y producto por un número, elemento a elemento; producto fila por columna, solo si encajan las dimensiones; no conmutativo.
- Traspuesta y $(AB)^t = B^tA^t$.
- Inversa: fórmula $2 \times 2$, Gauss-Jordan; $(AB)^{-1} = B^{-1}A^{-1}$; $AX = B \Rightarrow X = A^{-1}B$.
- Rango por Gauss; caminos en grafos con potencias de la matriz de adyacencia.

## Repaso: lo que debe quedarte dentro de un mes

1. Cuándo se pueden multiplicar dos matrices y la dimensión del resultado.
2. Cómo se calcula un elemento del producto.
3. Un ejemplo de que $AB \neq BA$.
4. La inversa de una $2 \times 2$ y el método de Gauss-Jordan.
5. Qué es el rango y cómo se calcula.

## Siguiente

el tema `mat-determinantes` (un número que dice si una matriz es invertible) y el tema `mat-sistemas-lineales-bachillerato`.
