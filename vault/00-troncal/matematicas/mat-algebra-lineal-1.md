---
id: mat-algebra-lineal-1
title: "Álgebra lineal I: sistemas, matrices, determinantes y autovalores"
area: matematicas
trunk_level: 8
prerequisites: [mat-geometria-analitica, mat-algebra-secundaria, mat-estadistica-bidimensional, mat-matrices]
academic_sources:
  - "Borobia, A.; Estrada, B. Álgebra Lineal y Geometría Vectorial, 2.ª ed. Sanz y Torres, 2019, caps. 1-4 (matrices, sistemas, espacios vectoriales, aplicaciones lineales): texto base de «Álgebra lineal I» (61021016), 1.º del Grado en Matemáticas y del doble grado de la UNED."
  - "Strang, G. Introduction to Linear Algebra, 5ª ed. Wellesley-Cambridge Press, 2016, caps. 1 (vectores), 2 (sistemas y eliminación), 3 (espacios y subespacios), 4 (ortogonalidad y mínimos cuadrados), 5 (determinantes) y 6 (autovalores). Índice: https://math.mit.edu/~gs/linearalgebra/ila5/indexila5.html"
  - "Axler, S. Linear Algebra Done Right, 4ª ed. Springer, 2024."
  - "Gelfand, I. M. Lectures on Linear Algebra. Interscience / Dover (reedición)."
hints:
  - "Concepto: un sistema lineal es una pregunta («¿qué combinación de las columnas da el vector b?»), y la eliminación gaussiana la responde sin cambiar las soluciones. El determinante mide cómo una matriz escala áreas o volúmenes: es cero exactamente cuando aplasta el espacio, y entonces no hay inversa. Los autovectores son las direcciones que la matriz no gira, solo estira."
  - "Herramienta: numpy (`np.linalg.solve`, `det`, `inv`, `eig`, `matrix_power`) para comprobar; con fracciones exactas, sympy.Matrix (`rref`, `det`, `eigenvals`). Para resolver un sistema no inviertas la matriz: usa `solve`. Comprueba siempre sustituyendo la solución en las ecuaciones originales."
  - "Documentación oficial: numpy.org/doc/stable/reference/routines.linalg.html y docs.sympy.org/latest/modules/matrices/matrices.html; Strang, capítulos de ecuaciones lineales, determinantes y autovalores; Axler, capítulos de operadores lineales y autovalores."
exercises:
  - id: determinante-2x2
    tier: 1
    prompt: |
      Calcula el determinante de ${{A}}$. Respuesta: un número.
    variants:
      - values: {"A":"\\begin{pmatrix}5 & 2\\\\ 3 & 4\\end{pmatrix}"}
        answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
      - values: {"A":"\\begin{pmatrix}-1 & 3\\\\ 2 & 7\\end{pmatrix}"}
        answers: ["sha256:59100e1b869f778eb1d0975e653f881efd13fa8ccb0678cd1856156b3de6207e"]
      - values: {"A":"\\begin{pmatrix}6 & -2\\\\ 4 & 1\\end{pmatrix}"}
        answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
      - values: {"A":"\\begin{pmatrix}2 & 5\\\\ 4 & 10\\end{pmatrix}"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
      - values: {"A":"\\begin{pmatrix}7 & 3\\\\ -2 & -1\\end{pmatrix}"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}0 & 4\\\\ -3 & 9\\end{pmatrix}"}
        answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: producto-de-matrices
    tier: 1
    prompt: |
      Sean $A = {{A}}$ y $B = {{B}}$. ¿Cuánto vale el elemento de la **fila {{i}}, columna {{j}}** de $AB$? Respuesta: un número.
    variants:
      - values: {"A":"\\begin{pmatrix}2 & 1\\\\ 0 & 3\\end{pmatrix}","B":"\\begin{pmatrix}4 & 1\\\\ 2 & 7\\end{pmatrix}","i":1,"j":2}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"A":"\\begin{pmatrix}1 & -1\\\\ 4 & 2\\end{pmatrix}","B":"\\begin{pmatrix}3 & 0\\\\ 5 & 2\\end{pmatrix}","i":2,"j":1}
        answers: ["sha256:785f3ec7eb32f30b90cd0fcf3657d388b5ff4297f2f9716ff66e9b69c05ddd09"]
      - values: {"A":"\\begin{pmatrix}3 & 0\\\\ 1 & 5\\end{pmatrix}","B":"\\begin{pmatrix}1 & 6\\\\ 2 & -1\\end{pmatrix}","i":2,"j":2}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}2 & 2\\\\ 1 & -3\\end{pmatrix}","B":"\\begin{pmatrix}7 & 3\\\\ 0 & 2\\end{pmatrix}","i":1,"j":1}
        answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
      - values: {"A":"\\begin{pmatrix}0 & 1\\\\ 6 & 4\\end{pmatrix}","B":"\\begin{pmatrix}2 & 5\\\\ 1 & 3\\end{pmatrix}","i":2,"j":2}
        answers: ["sha256:73475cb40a568e8da8a045ced110137e159f890ac4da883b6b17dc651b3a8049"]
      - values: {"A":"\\begin{pmatrix}5 & -2\\\\ 3 & 1\\end{pmatrix}","B":"\\begin{pmatrix}1 & 4\\\\ -2 & 6\\end{pmatrix}","i":1,"j":2}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: sistema-2x2-matrices
    tier: 1
    prompt: |
      Resuelve $\begin{cases}{{e1}}\\ {{e2}}\end{cases}$. Respuesta en la forma «x;y».
    variants:
      - values: {"e1":"3x + y = 9","e2":"x - 2y = 10"}
        answers: ["sha256:797d51480bf41ed921b2763a2c61f089d94da2c1d0d7adea3df77c741a061063"]
      - values: {"e1":"x + y = 3","e2":"2x - y = 12"}
        answers: ["sha256:383a9d6612e1f9863be85fa75da84636cdf1d55b5295c826354d32486213f0b3"]
      - values: {"e1":"4x - 3y = -29","e2":"x + 2y = 12"}
        answers: ["sha256:a35b554581573c0f4fd2a4bb64912ff5ad4d642ae4a88c9cdd8b66789053567a"]
      - values: {"e1":"5x + 2y = 32","e2":"3x - y = 17"}
        answers: ["sha256:18143c55023a0047def459854c19ba2234b3790ad71367bfb21e1a5778df626b"]
      - values: {"e1":"2x + 3y = 2","e2":"x - y = 11"}
        answers: ["sha256:6c527625c0295e21d0405dacd9a844c1a0e5b2a2ec6754a10fa70495e71e5a82"]
      - values: {"e1":"x - 4y = -23","e2":"3x + 2y = 1"}
        answers: ["sha256:bd830788d1a4024db5001f9ff5305dc4d14705f3ffbf44bec35dbc4cad186980"]
  - id: determinante-3x3
    tier: 2
    prompt: |
      Calcula el determinante de ${{A}}$. Respuesta: un número.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 0\\\\ 3 & 1 & 4\\\\ 2 & 0 & 5\\end{pmatrix}"}
        answers: ["sha256:d5c534fde62beb89c745a59952c8efed8b7523cbd047e682782e4367de9ea3bf"]
      - values: {"A":"\\begin{pmatrix}2 & 0 & 1\\\\ 1 & 3 & 2\\\\ 4 & 1 & 0\\end{pmatrix}"}
        answers: ["sha256:5e37b37c842d8df7106ee92e2e45beefef71ca60f51f7bb5cb50cb1e81c355a8"]
      - values: {"A":"\\begin{pmatrix}3 & 1 & 2\\\\ 0 & 2 & 1\\\\ 1 & 4 & 3\\end{pmatrix}"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"A":"\\begin{pmatrix}1 & -1 & 2\\\\ 2 & 0 & 3\\\\ -1 & 4 & 1\\end{pmatrix}"}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"A":"\\begin{pmatrix}5 & 2 & 0\\\\ 1 & 1 & 1\\\\ 0 & 3 & 2\\end{pmatrix}"}
        answers: ["sha256:d5c534fde62beb89c745a59952c8efed8b7523cbd047e682782e4367de9ea3bf"]
      - values: {"A":"\\begin{pmatrix}2 & 3 & 1\\\\ 4 & 1 & 5\\\\ 1 & 2 & 2\\end{pmatrix}"}
        answers: ["sha256:a30584d2420bfa43f4ae498d288fffab0f7ec60bdc05274198575aa0e2cd0e68"]
  - id: rango
    tier: 2
    prompt: |
      ¿Cuál es el **rango** de ${{A}}$? Respuesta: un entero.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 1\\\\ 2 & 4 & 2\\\\ 3 & 6 & 3\\end{pmatrix}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2\\\\ 0 & 1 & 3\\\\ 1 & 1 & 5\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}2 & 1 & 0\\\\ 1 & 3 & 1\\\\ 0 & 1 & 4\\end{pmatrix}"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"A":"\\begin{pmatrix}1 & 2 & 3 & 4\\\\ 2 & 4 & 6 & 8\\\\ 0 & 1 & 1 & 1\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 0\\\\ 1 & 0 & 1\\\\ 0 & 1 & -1\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 3 & 6\\\\ 2 & 5\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: sistema-3x3
    tier: 2
    prompt: |
      Resuelve $\begin{cases}{{e1}}\\ {{e2}}\\ {{e3}}\end{cases}$ y da $x + y + z$. Respuesta: fracción irreducible «a/b» (o un entero).
    variants:
      - values: {"e1":"x + y + z = 6","e2":"x - y + 2z = 5","e3":"2x + y - z = 1"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"e1":"2x + y + z = 5","e2":"x + 2y + z = 6","e3":"x + y + 2z = 7"}
        answers: ["sha256:8eb625d3c0595535af2fa65cf5d8ae6d1d8ac4d43c08d2db3350778a3e4ca47e"]
      - values: {"e1":"x + 2y - z = 2","e2":"2x - y + z = 3","e3":"3x + y + 2z = 10"}
        answers: ["sha256:f658e8592fcc3e3a9becb804c4b85c2a2f9dced3d725f446aed78de70398cf8d"]
      - values: {"e1":"3x - y + 2z = 4","e2":"x + y + z = 6","e3":"2x + 3y - z = 1"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"e1":"x + 2z = 7","e2":"3y + z = 5","e3":"2x + y = 4"}
        answers: ["sha256:855ac8a5f1f768ce63a82a2983a5f1ae690bad35fecc51212be6231b69b12597"]
      - values: {"e1":"4x + y - z = 3","e2":"x + 3y + 2z = 8","e3":"2x - y + 3z = 5"}
        answers: ["sha256:6c2c0f2f783f48a8c2d34db03864f491f237b9a7b7de56bf7ab6f684caa6823e"]
  - id: inversa-2x2
    tier: 2
    prompt: |
      La matriz $A = {{A}}$ es invertible. ¿Cuánto vale el elemento de la **fila 2, columna 1** de $A^{-1}$? Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"A":"\\begin{pmatrix}3 & 1\\\\ 5 & 2\\end{pmatrix}"}
        answers: ["sha256:37aa1ccf80e481832b2db282d4d4f895ee1e31219b7d0f6aee8dc8968828341b"]
      - values: {"A":"\\begin{pmatrix}4 & 3\\\\ 1 & 1\\end{pmatrix}"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}2 & 5\\\\ 1 & 3\\end{pmatrix}"}
        answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
      - values: {"A":"\\begin{pmatrix}7 & 2\\\\ 3 & 1\\end{pmatrix}"}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
      - values: {"A":"\\begin{pmatrix}3 & 4\\\\ 2 & 3\\end{pmatrix}"}
        answers: ["sha256:cf3bae39dd692048a8bf961182e6a34dfd323eeb0748e162eaf055107f1cb873"]
      - values: {"A":"\\begin{pmatrix}5 & 3\\\\ 3 & 2\\end{pmatrix}"}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
  - id: autovalor-mayor
    tier: 2
    prompt: |
      Halla los autovalores de ${{A}}$ (raíces de $\det(A - \lambda I) = 0$). ¿Cuál es el **mayor**? Respuesta: un número.
    variants:
      - values: {"A":"\\begin{pmatrix}5 & 2\\\\ 2 & 2\\end{pmatrix}"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"A":"\\begin{pmatrix}3 & 1\\\\ 2 & 2\\end{pmatrix}"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"A":"\\begin{pmatrix}6 & -2\\\\ 2 & 1\\end{pmatrix}"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"A":"\\begin{pmatrix}1 & 4\\\\ 2 & 3\\end{pmatrix}"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"A":"\\begin{pmatrix}7 & 2\\\\ 4 & 5\\end{pmatrix}"}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"A":"\\begin{pmatrix}2 & 3\\\\ 3 & 2\\end{pmatrix}"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: area-del-paralelogramo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula el área del paralelogramo formado por $\vec u = {{u}}$ y $\vec v = {{v}}$ (módulo del producto vectorial). Respuesta con seis cifras significativas.
    variants:
      - values: {"u":"(1, 2, 0)","v":"(3, 1, 0)"}
        answers: ["sha256:5c8fa19df1c60611e98d559e55727a46901943cb638264d29d317cac5ce835ec","sha256:651e82413ef6afce4121316647909912a98d0ac0d3f5dff28b5c3df297534238","sha256:236ac6cdd0c4144ce959e589a22536b55b3b1d83ecf041f7f510ab6e9e98ba85"]
      - values: {"u":"(2, 0, 1)","v":"(0, 3, 0)"}
        answers: ["sha256:6167d5f1d9f5c35f842d12f48125581b0c0de1b94889d7160056c9fc0293b2ed","sha256:33d9731bb13982b0952bef9ac724e46325f62bc2a3f5184542bb0432fbac7ba3","sha256:0c9d3d9d28a1f2f701a2831e74724adf5620a3cf03045090374fed093d1bb832"]
      - values: {"u":"(1, 1, 1)","v":"(1, -1, 0)"}
        answers: ["sha256:7ce996d22989e295bf1330ba198fcb7d6809c65e68ea914e3a698691e6a42708","sha256:fff463283558b627f3d24b7e8461efaec1a92baf5a401938a69bfc5b06cccfa2","sha256:6f4c4b458b7d12a74771c0eb51c5e646c6cba73dd167ed529e99b7ef11f77ef8"]
      - values: {"u":"(3, 0, 0)","v":"(1, 4, 0)"}
        answers: ["sha256:20b9acac16756c551e39e593a25d4bdd513a3a3c3ecb8b8bfda7f1f0054fef17","sha256:551ef5046398ff16849ff0520c099fd5c2011415906b0a55c23f29620a5998dc","sha256:f632f4db7487d259690d6eedb402726125f6bba9504c7a4b780e289ef8f0471e"]
      - values: {"u":"(2, 1, 2)","v":"(1, 0, 1)"}
        answers: ["sha256:5bffe35b8510641294f355ed4961c4081ebb1a1a27ab847456d418a9413aad1b","sha256:65ea804b927919a4a4e20356653799add92d81e54464279d5f302b9698940e07","sha256:bf3fcad88cf83eb123044bc4dccf0b33299c38b4d9ab906cb44c92e08bc029d7"]
      - values: {"u":"(1, 2, 2)","v":"(2, 1, -2)"}
        answers: ["sha256:c9775535f1b03cdbf1853a2834ed079ac1b7047aa4f6489f4a09a142fe8dff2f","sha256:f89db6bd0bd7c3a4e4f2bd5d4130af59908588359c296bfb9fef436567f511b0","sha256:0cf588e48991368a4f57442a940b2f7c15ca5232fc9acb0fa9b8e3288dba81d7"]
  - id: producto-escalar-3d
    tier: 2
    prompt: |
      Calcula $\vec u\cdot\vec v$ para $\vec u = {{u}}$ y $\vec v = {{v}}$. Respuesta: un número.
    variants:
      - values: {"u":"(2, -1, 3)","v":"(1, 4, 2)"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"u":"(1, 0, -2)","v":"(3, 5, 1)"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"u":"(4, 2, 1)","v":"(-1, 3, 2)"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"u":"(0, 3, -1)","v":"(2, 2, 6)"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
      - values: {"u":"(5, -2, 0)","v":"(1, 1, 7)"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"u":"(-3, 1, 2)","v":"(2, 6, 0)"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
  - id: fibonacci-con-matrices
    tier: 3
    prompt: |
      Se cumple $\begin{pmatrix}1 & 1\\ 1 & 0\end{pmatrix}^{n} = \begin{pmatrix}F_{n+1} & F_n\\ F_n & F_{n-1}\end{pmatrix}$. Usándolo (o iterando), calcula $F_{{{n}}}$ (con $F_1 = F_2 = 1$).
      Respuesta: un entero.
    variants:
      - values: {"n":25}
        answers: ["sha256:53a000093408dfa643af1af8b5937c33190c4181308817776e51ef994a232c04"]
      - values: {"n":35}
        answers: ["sha256:e25765e06274450504d965dc46cfd1130023e6c622d54e1602b437c83ddb6f3c"]
      - values: {"n":40}
        answers: ["sha256:10644921fbf8cd16d23d6d1b762f2f564f78a7e4ed7258aa6f23d698797cf49e"]
      - values: {"n":20}
        answers: ["sha256:39edd6529d30bf3454148be0f60deeb5300781a431ea1c273e4a85c831ad505d"]
      - values: {"n":45}
        answers: ["sha256:ce4b63be639eff9cc156cd7eca1a9297ec9a83fd62b638c9a3936ef2f71abde3"]
      - values: {"n":50}
        answers: ["sha256:124d5d90a650dbf4964dd44649ff4149f6390b4b8d20fc842acbade38d09791b"]
  - id: vandermonde
    tier: 3
    prompt: |
      Calcula el determinante de la matriz de Vandermonde $\begin{pmatrix}1 & x_i & x_i^2 & x_i^3\end{pmatrix}$ con $x_i = {{x}}$ (una fila por valor). Respuesta: un número.
    variants:
      - values: {"x":"1, 2, 4, 5"}
        answers: ["sha256:8722616204217eddb39e7df969e0698aed8e599ba62ed2de1ce49b03ade0fede"]
      - values: {"x":"0, 1, 3, 4"}
        answers: ["sha256:8722616204217eddb39e7df969e0698aed8e599ba62ed2de1ce49b03ade0fede"]
      - values: {"x":"2, 3, 5, 7"}
        answers: ["sha256:6af1f692e9496c6d0b668316eccb93276ae6b6774fa728aac31ff40a38318760"]
      - values: {"x":"-1, 1, 2, 3"}
        answers: ["sha256:98010bd9270f9b100b6214a21754fd33bdc8d41b2bc9f9dd16ff54d3c34ffd71"]
      - values: {"x":"1, 3, 4, 6"}
        answers: ["sha256:7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405"]
      - values: {"x":"0, 2, 3, 5"}
        answers: ["sha256:7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405"]
  - id: matriz-singular
    tier: 3
    prompt: |
      ¿Para qué valor de $k$ es **singular** (determinante $0$) la matriz $\begin{pmatrix}1 & 2 & 3\\ 4 & 5 & 6\\ {{a}} & {{b}} & k\end{pmatrix}$? Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"a":1,"b":4}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"a":2,"b":3}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"a":0,"b":1}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"a":5,"b":4}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"a":2,"b":6}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"a":1,"b":5}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: traza-de-potencia
    tier: 3
    prompt: |
      Sea $D = \begin{pmatrix}{{p}} & 0\\ 0 & {{q}}\end{pmatrix}$. ¿Cuánto vale la traza (suma de la diagonal) de $D^{{{n}}}$? Respuesta: un entero.
    variants:
      - values: {"p":2,"q":5,"n":6}
        answers: ["sha256:3782001a0a4289fa778de5c03d2ff27080afb3fc88a7242a96fe029b9c6dc336"]
      - values: {"p":3,"q":4,"n":5}
        answers: ["sha256:ec216fb204db213fecf8a4a72363a84fc97d5d1e3ec362eaf42a69ce6a025e16"]
      - values: {"p":1,"q":3,"n":8}
        answers: ["sha256:823fb2499b4e37d99acb65e7198e75965d6496fd1c579f976205c0e6179206df"]
      - values: {"p":-2,"q":3,"n":7}
        answers: ["sha256:bef7b4d1c3d67bc9afe768889cf3f250aff4eb21b587cc806e6f9f793ef86bcb"]
      - values: {"p":5,"q":1,"n":4}
        answers: ["sha256:87acb1e183a2b0f74c3b2008b8ef6975a95269bc490a8886f317fa4bd714b085"]
      - values: {"p":2,"q":2,"n":12}
        answers: ["sha256:864a936a35324151e1c79c44a2e903ff2497f52fa892282d340585f493c637f0"]
  - id: minimos-cuadrados
    tier: 3
    prompt: |
      Ajusta por mínimos cuadrados una recta $y = a + bx$ a los puntos ${{pts}}$ resolviendo las ecuaciones normales $A^\top A\,\mathbf{c} = A^\top\mathbf{y}$.
      ¿Cuánto vale la pendiente $b$? Respuesta: fracción irreducible «a/b» (o un entero).
    variants:
      - values: {"pts":"(0, 2), (1, 3), (2, 5), (3, 6)"}
        answers: ["sha256:23d7d6b21a48120eb366a43016d8e0e36d8ec0c9e5c7b88731c95914006c3e26"]
      - values: {"pts":"(1, 1), (2, 4), (3, 4), (4, 7)"}
        answers: ["sha256:7af8536c5a4c2206aea984bc1eff8081ee843156d0f70e25818fda435efbc5c2"]
      - values: {"pts":"(0, 0), (1, 2), (2, 3), (4, 7)"}
        answers: ["sha256:c5bc660c9be52785de41cb5f5001cb665f8f4d85e292ee8ddd67c9b697130c35"]
      - values: {"pts":"(-1, 1), (0, 2), (1, 2), (2, 5)"}
        answers: ["sha256:3fb6418f5c1704b1d076c8fa6ccb8294df7ecdb091a0429ab77a934cb301a628"]
      - values: {"pts":"(0, 5), (1, 4), (2, 2), (3, 1)"}
        answers: ["sha256:96063dcb5267bf40a737301722ccc63e83d2652e00ccd32d3f3426577ccaadb7"]
      - values: {"pts":"(1, 2), (2, 2), (3, 5), (5, 6)"}
        answers: ["sha256:af023f3123fe1b2d968102d43bce45769f78977cba371239f9ed3199c63fc75d"]
  - id: cadena-de-markov
    tier: 3
    prompt: |
      Un sistema salta entre dos estados con la matriz de transición $P = {{P}}$ (filas: de dónde sale; la fila suma $1$). La distribución estacionaria
      $\pi = (\pi_1, \pi_2)$ cumple $\pi = \pi P$ y $\pi_1 + \pi_2 = 1$. ¿Cuánto vale $\pi_1$? Respuesta: fracción irreducible «a/b».
    variants:
      - values: {"P":"\\begin{pmatrix}0{,}8 & 0{,}2\\\\ 0{,}4 & 0{,}6\\end{pmatrix}"}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
      - values: {"P":"\\begin{pmatrix}0{,}7 & 0{,}3\\\\ 0{,}1 & 0{,}9\\end{pmatrix}"}
        answers: ["sha256:f70b94aeb67de2a5eb4bd8c2ea85128f13776cb545a661abe422b378a6cf3099"]
      - values: {"P":"\\begin{pmatrix}0{,}6 & 0{,}4\\\\ 0{,}3 & 0{,}7\\end{pmatrix}"}
        answers: ["sha256:d016d339874fc1562fe41bdd5dc2606fdff3c9b627dc0351985a0cae3b4ea4e6"]
      - values: {"P":"\\begin{pmatrix}0{,}95 & 0{,}05\\\\ 0{,}2 & 0{,}8\\end{pmatrix}"}
        answers: ["sha256:1265c5694e904ac7a10d0eebd43894950b49cfda19a3dbacdc4db7c0a49f6f12"]
      - values: {"P":"\\begin{pmatrix}0{,}5 & 0{,}5\\\\ 0{,}2 & 0{,}8\\end{pmatrix}"}
        answers: ["sha256:55ba88e4b6928dfded4e47a08bd074de25cc6253504c6cc6669c4d7912418723"]
      - values: {"P":"\\begin{pmatrix}0{,}3 & 0{,}7\\\\ 0{,}6 & 0{,}4\\end{pmatrix}"}
        answers: ["sha256:b485ba57705fa67ccdc8c284b0880bd729a98ccef90882edfed5e36e84d76746"]
  - id: coordenadas-en-una-base
    tier: 2
    prompt: |
      En $\mathbb R^2$, $B = (\mathbf b_1, \mathbf b_2)$ con $\mathbf b_1 = {{b1}}$ y $\mathbf b_2 = {{b2}}$ es una base. ¿Cuáles son las
      coordenadas $(c_1, c_2)$ del vector ${{v}}$ en la base $B$? Respuesta: «c1;c2» (fracciones «a/b» si hace falta).
    variants:
      - values: {"b1":"(1, 2)","b2":"(1, -1)","v":"(3, 12)"}
        answers: ["sha256:383a9d6612e1f9863be85fa75da84636cdf1d55b5295c826354d32486213f0b3"]
      - values: {"b1":"(2, 1)","b2":"(1, 1)","v":"(-2, 1)"}
        answers: ["sha256:682acd6a9ce15dbd8c553f8124cb22bf0afa570b2f9f7b716c37452b819298ab"]
      - values: {"b1":"(1, 1)","b2":"(0, 1)","v":"(7, 9)"}
        answers: ["sha256:ff1c74546e2ece1ad6561574e39d6bc60cfb92c5af60ce241ca23a37bb5633ea"]
      - values: {"b1":"(1, 3)","b2":"(2, 1)","v":"(6, -7)"}
        answers: ["sha256:a1eafbfa439bb0f76303948ef0a0c1accb332df7b9b63d1870f638f4ab4f826a"]
      - values: {"b1":"(3, 1)","b2":"(1, 2)","v":"(17, 4)"}
        answers: ["sha256:6724f4dcf0f0334436b34629b4043d2ed5d8f35215da092da7c2b120a0101ca4"]
      - values: {"b1":"(1, -1)","b2":"(1, 2)","v":"(7, 20)"}
        answers: ["sha256:1537cbb4073a73bfe493b19fa4e6c6a5bf4838f932056d1004cbca269ea2e576"]
  - id: grassmann
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Sean $U$ el subespacio generado por ${{U}}$ y $W$ el generado por ${{W}}$. ¿Cuál es $\dim(U \cap W)$? (Usa la fórmula de
      Grassmann con las dimensiones de $U$, $W$ y $U + W$.)
    variants:
      - values: {"U":"(1, 0, 0, 0), (0, 1, 0, 0), (0, 0, 1, 0)","W":"(0, 1, 0, 0), (0, 0, 0, 1)"}
        answers: ["sha256:f364553a4baf9a16e9f085b8ab280e36220ee1ad0d03b1482556ee462297d35f","sha256:c411bf6abb682e8b13f1888615509959a23d021ca05e4e4a51fe18715831b2da","sha256:90009a31596336e68a4ed38962b675012717075273586d08490995bdce8c6ffe"]
      - values: {"U":"(1, 1, 0), (0, 1, 1)","W":"(1, 0, -1), (1, 2, 1)"}
        answers: ["sha256:f72c28d81c391d7e41238faa4f1f3341be1e866d90f3b930a6bb981caa084179","sha256:51100da9e27099abb0517a55a5c880b24815c3936dd1d433576285d319392ee5","sha256:583018802a7f8bcf6d63321da897afc172dcd0577f9ef35f8f69d3969b646703"]
      - values: {"U":"(1, 0, 0, 0), (0, 1, 0, 0)","W":"(0, 0, 1, 0), (0, 0, 0, 1)"}
        answers: ["sha256:f0260cf1f6f50abd40c2e3fe62d0c4a5a6cbf59ffb0a20c02d2715480605d24e","sha256:52ca3f923f7419204752311c96e4a6ad97b246001808e0e180723c2c515c11a1","sha256:1fba58ddc2ea29037b231a99b7eca5ca5b6237ec1dd966a948469bf1da70eebb"]
      - values: {"U":"(1, 2, 0), (0, 0, 1)","W":"(1, 2, 1), (2, 4, 0)"}
        answers: ["sha256:e4f215b952c582d2da60a0811a7665f7663e2ba4264e0f93d8e878c22cc36512","sha256:101cc708013966f99006f5c1cbfb38e6c01a841e75725c3c8497cc460fb6ed4f","sha256:1d15c5187145258f5752dd0a3809e9d12efbc99b7387e0214be2f5837d0278db"]
      - values: {"U":"(1, 0, 1, 0), (0, 1, 0, 1)","W":"(1, 1, 1, 1), (1, 0, 0, 0)"}
        answers: ["sha256:05cb41d3496936b43e8f55141aca930e9d47878a8abe9b154875701c1c00317d","sha256:1ce6d23d594f0f6c9a42069f4326f2cbb3170a24c37addb1158a32d8075b29b8","sha256:05eed0bca2fb6354ad39fd83d5812af3dcf725d42d8ba6452c3587dfe13e0e02"]
      - values: {"U":"(1, 1, 1)","W":"(2, 2, 2), (1, 0, 0)"}
        answers: ["sha256:03cdb3b7d8fbb54cc8880130e0129cc52e760e3f2bd5dd96ff9cf889f56ccd1a","sha256:d2290dee788300d0a261af86670c9def833d63e286f3f904b731213d6502962f","sha256:09319d5cc1c74e65c6f75d9ae40e2c47d403704cc1725a07bc0d7d6fcc19469e"]
  - id: r-ab-ba
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se cumple $AB = BA$ para dos matrices cuadradas?
    options:
      - |
        Siempre
      - |
        Nunca
      - |
        Solo en casos especiales (por ejemplo, si una de ellas es la identidad)
      - |
        Siempre que sean cuadradas
    answers: ["sha256:8eaa39a498c3360e2f4653432367fdec2f19f2228446ebf1ef476877d120d33e"]
  - id: r-det-escala
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Una transformación del plano tiene determinante $-4$. Si se aplica a un triángulo de área $3$, ¿qué área tiene la imagen?
    answers: ["sha256:5518256da0cfc53bbce39ee88206aa57bdad2a1080f03a2b8f995b004c124f81","sha256:14fbca7f83d9bf05f36ddbc3628ef9193d1b36ce734065571f87695086ab952a","sha256:8fe75ba775671cd6996b3f3b13793590a7650621e4af30bd439c0dd5291a16d9"]
  - id: r-det-producto
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si $\det A = 3$ y $\det B = -8$ (ambas $3\times3$), ¿cuánto vale $\det(AB)$?
    answers: ["sha256:d69b7386ea304fb602b8704e97b3f1f15a4cd6fc31af8c298a93d323770a884d","sha256:9bd3a35aa50cabadfbbffb54e92c0f55c1568ee1c6e4778aaf09ebb7e62e500a","sha256:34901dd626df5429e054e3e5d2c1b4f5368a48fa30e2f1d1069ab11ae051bb71"]
  - id: r-rouche
    tier: 2
    type: opcion
    review: true
    prompt: |
      Un sistema $A\mathbf x = \mathbf b$ con $3$ incógnitas tiene $\operatorname{rango}A = 2$ y $\operatorname{rango}[A\mid\mathbf b] = 3$. ¿Cuántas soluciones tiene?
    options:
      - |
        Una única solución
      - |
        Ninguna solución
      - |
        Infinitas soluciones
      - |
        Depende de $\mathbf b$ solo
    answers: ["sha256:ad513ccd86d1fc9a4cbabe66ab6698ec396e426cb7c0d7c383eb9a8eb0425317"]
  - id: r-nulidad
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una matriz $4\times7$ tiene rango $4$. ¿Cuál es la dimensión del conjunto de soluciones de $A\mathbf x = \mathbf 0$?
    answers: ["sha256:5e7d449fa8bf1906861028842403c9fc8fdcc25f971570bb0454900b899a7395","sha256:d72d20462315f8d7d0d1e55114b12f12a4ae4dbf7167bd2d41b1785ff14d3e58","sha256:96bdbae3b1549abdf026916191fcd77666f278dbc31bee433095fcac65413efb"]
  - id: r-traza-autovalores
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una matriz $2\times2$ tiene traza $5$ y uno de sus autovalores es $8$. ¿Cuál es el otro?
    answers: ["sha256:c7bfce4d2fe751b83ddebc9d5a3960c85749ca54d02cb354cc5c7c50674daf54","sha256:60978c98d4c0eaf41ee3d81ddba2f13499f1c0ce4002f155312f9dab39be54ba","sha256:62c59aa1f753c1e461c185523471a16958defed0ee15d6d5d8edc233ee6e271a"]
  - id: r-no-inversa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Por qué, para resolver $A\mathbf x = \mathbf b$ en un ordenador, no se calcula $A^{-1}$?
    options:
      - |
        Porque es más difícil de programar
      - |
        Porque la inversa no existe nunca
      - |
        Porque da otra solución
      - |
        Porque eliminar es más rápido y pierde menos precisión
    answers: ["sha256:25d61437f0d64a3607910fb5a52dd874fe91a5629251ca381c1d63f38fd0c6cf"]
---

# Álgebra lineal I: sistemas, matrices, determinantes y autovalores

El álgebra lineal es, junto con el cálculo, el idioma común de la ciencia y la ingeniería. Cualquier problema en que varias cantidades se relacionan **proporcionalmente** (circuitos, estructuras, economía, gráficos, redes
neuronales, cifrado, control) se escribe con **matrices**, y los ordenadores resuelven problemas con millones de incógnitas porque saben hacerlo. Este nodo desarrolla el núcleo práctico: resolver sistemas, calcular con matrices,
entender el determinante y los autovalores, con aplicaciones reales. El tratamiento abstracto (espacios vectoriales en general, formas canónicas) está en [[mat-algebra-lineal]].

## Objetivos

Al terminar sabrás:

1. Resolver sistemas lineales por **eliminación gaussiana** y decidir cuántas soluciones tienen (rango).
2. Operar con matrices (suma, producto, transpuesta, inversa) y entenderlas como **transformaciones**.
3. Calcular e interpretar **determinantes**.
4. Trabajar con vectores de $\mathbb{R}^n$: producto escalar, ortogonalidad, producto vectorial.
5. Entender independencia lineal, base, dimensión y rango.
6. Calcular **autovalores y autovectores** y usarlos (potencias de matrices, Fibonacci, cadenas de Markov).
7. Aplicar el álgebra lineal: mínimos cuadrados, circuitos, gráficos.

> [!question] Test de entrada
> 1. Resuelve $x + y = 5$, $x - y = 1$. 2. ¿Cuánto vale el área de un paralelogramo de lados $(3, 0)$ y $(1, 2)$? 3. ¿Cuánto es $\begin{pmatrix}1&2\end{pmatrix}\cdot\begin{pmatrix}3\\4\end{pmatrix}$?
>
> Respuestas: $x = 3,\ y = 2$; $6$; $11$.

## 1. Para qué sirve

- **Resolver redes de relaciones**: el análisis nodal de un circuito es un sistema $G\mathbf v = \mathbf i$ ([[ing-electricidad-basica]], [[ing-circuitos]]).
- **Gráficos y robótica**: rotar, escalar y proyectar es multiplicar por matrices ([[rob-cinematica]]).
- **Datos y aprendizaje automático**: ajustar un modelo por mínimos cuadrados; cada capa de una red neuronal es una matriz ([[ia-redes-profundas]]).
- **Internet**: el algoritmo original de **PageRank** de Google es un autovector.
- **Criptografía y códigos**: cifrados por bloques, códigos correctores, aritmética sobre cuerpos finitos.

## 2. Sistemas de ecuaciones lineales

> [!practico]
> Un sistema lineal es un problema de varias incógnitas con varias pistas: «dos cafés y un bollo cuestan $5$ euros; un café
> y dos bollos, $4$». La eliminación de Gauss es el método de siempre hecho con orden: usar una pista para quitar una
> incógnita de las demás, hasta que quede una sola. Puede pasar que haya **una** solución, **ninguna** (pistas
> contradictorias) o **infinitas** (una pista repetía lo que ya decían otras).


Un **sistema lineal** de $m$ ecuaciones con $n$ incógnitas se escribe $A\mathbf{x} = \mathbf{b}$, con $A$ la **matriz de coeficientes** ($m\times n$), $\mathbf x$ el vector de incógnitas y $\mathbf b$ el de términos independientes.
Con $2$ incógnitas, cada ecuación es una **recta** y resolver es hallar su punto de corte ([[mat-algebra-basica]]); con $3$, cada una es un **plano**.

**Eliminación gaussiana.** Se transforma el sistema, sin cambiar sus soluciones, mediante tres **operaciones elementales**: intercambiar dos ecuaciones, multiplicar una por un número $\ne 0$, y sumar a una un múltiplo de otra. Se llega a una forma
**escalonada** (triangular) que se resuelve de abajo arriba. (Cada operación es reversible, por eso las soluciones no cambian.)

**Ejemplo resuelto.** $\begin{cases}x + y + z = 6\\ 2x - y + z = 3\\ x + 2y - z = 2\end{cases}$. Se elimina $x$: $E_2 - 2E_1$: $-3y - z = -9$; $E_3 - E_1$: $y - 2z = -4$. Se elimina $y$ de la tercera con $E_3 + \frac13 E_2$ (sobre las ya reducidas):
$-\frac73 z = -7$, luego $z = 3$; de $-3y - 3 = -9$, $y = 2$; de $x + 2 + 3 = 6$, $x = 1$. **Comprobación:** $(1, 2, 3)$ da $6$, $2 - 2 + 3 = 3$, $1 + 4 - 3 = 2$. $\checkmark$

**¿Cuántas soluciones?** El **rango** de $A$ es el número de filas no nulas en la forma escalonada (**pivotes**). Teorema (Rouché-Frobenius): el sistema tiene solución si y solo si $\operatorname{rango}A = \operatorname{rango}[A\mid\mathbf b]$; y es **única** si
además el rango es $n$; si es menor, hay **infinitas**. Ejemplo: $x + y = 2$, $2x + 2y = 5$: el rango de $A$ es $1$ y el de $[A\mid\mathbf b]$ es $2$: **sin solución**; con $2x + 2y = 4$, hay infinitas (una recta).

**Coste.** Eliminar es $O(n^3)$ operaciones, y es cómo trabajan todos los programas.

```python
import numpy as np
A = np.array([[1, 1, 1], [2, -1, 1], [1, 2, -1]], dtype=float)
b = np.array([6, 3, 2], dtype=float)
x = np.linalg.solve(A, b)         # array([1., 2., 3.])  (usa eliminación; NO calcula la inversa)
```

## 3. Matrices y transformaciones

> [!practico]
> Una matriz es una tabla de números, pero lo importante es lo que **hace**: una máquina que transforma vectores, por
> ejemplo girando, estirando o reflejando una figura en la pantalla. Multiplicar dos matrices es encadenar dos
> transformaciones, y por eso el orden importa: girar y luego estirar no da lo mismo que estirar y luego girar.


Una **matriz** $m\times n$ es una tabla de números. Se suman y se multiplican por un escalar elemento a elemento. El **producto** $AB$ ($A$ de $m\times p$ y $B$ de $p\times n$) tiene como elemento $(i, j)$ el producto escalar de la fila $i$ de $A$ por la columna $j$ de $B$:

$$
(AB)_{ij} = \sum_{k} A_{ik}B_{kj} .
$$

Propiedades: **asociativo** $(AB)C = A(BC)$, **distributivo**, pero **no conmutativo**: en general $AB \ne BA$. $\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}5&6\\7&8\end{pmatrix} = \begin{pmatrix}19&22\\43&50\end{pmatrix}$ y en el orden inverso sale otra matriz.
La **identidad** $I$ cumple $AI = IA = A$. La **transpuesta** $A^\top$ intercambia filas y columnas; $(AB)^\top = B^\top A^\top$.

**Una matriz es una transformación.** Multiplicar un vector por una matriz lo transforma de forma **lineal**. El **producto** de matrices es la **composición** de transformaciones (primero la de la derecha), y por eso no es conmutativo: girar y luego estirar no es lo mismo que estirar y luego girar.
Ejemplos en el plano:

- **Escalado:** $\begin{pmatrix}2&0\\0&3\end{pmatrix}$ estira $\times2$ en $x$ y $\times3$ en $y$.
- **Rotación** un ángulo $\theta$ (ver [[mat-trigonometria]]): $R(\theta) = \begin{pmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{pmatrix}$. Se cumple $R(\alpha)R(\beta) = R(\alpha + \beta)$: al multiplicar, los elementos son
  justamente las fórmulas del seno y del coseno de una suma.
- **Reflexión** respecto al eje $x$: $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

## 4. La matriz inversa

> [!practico]
> La inversa es el botón de deshacer: si $A$ gira $30^\circ$, $A^{-1}$ gira $-30^\circ$. No todas las transformaciones se
> pueden deshacer: si una aplasta el plano sobre una recta, se ha perdido información y no hay vuelta atrás.


La **inversa** de una matriz cuadrada $A$ es la que cumple $AA^{-1} = A^{-1}A = I$ (deshace la transformación). No toda matriz la tiene. Para $2\times2$:

$$
\begin{pmatrix}a&b\\c&d\end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}\quad(ad - bc\ne0) .
$$

**Ejemplo:** $A = \begin{pmatrix}2&1\\5&3\end{pmatrix}$: $ad - bc = 1$ y $A^{-1} = \begin{pmatrix}3&-1\\-5&2\end{pmatrix}$; se comprueba que $AA^{-1} = I$. En general se calcula con **Gauss-Jordan**: se reduce $[A\mid I]$ a $[I\mid A^{-1}]$.
Además $(AB)^{-1} = B^{-1}A^{-1}$ (el orden se invierte, como al deshacer ponerse calcetines y zapatos).

**Teorema** (equivalencias para $A$ cuadrada $n\times n$): $A$ es invertible $\iff$ $\det A \ne 0$ $\iff$ $\operatorname{rango}A = n$ $\iff$ $A\mathbf x = \mathbf 0$ solo tiene la solución $\mathbf x = \mathbf 0$ $\iff$ $A\mathbf x = \mathbf b$ tiene solución única para todo $\mathbf b$.

> [!formal] Con rigor: por qué funciona la fórmula de la inversa $2\times2$
> Basta multiplicar: $\begin{pmatrix}a&b\\c&d\end{pmatrix}\begin{pmatrix}d&-b\\-c&a\end{pmatrix} = \begin{pmatrix}ad - bc & 0\\ 0 & ad - bc\end{pmatrix} = (ad - bc)\,I$,
> y lo mismo en el otro orden. Dividiendo por $ad - bc \neq 0$ se obtiene la identidad. Si $ad - bc = 0$, las dos columnas
> son proporcionales, la imagen de $A$ es una recta (o el origen) y ninguna matriz puede deshacer $A$: no hay inversa.

**Advertencia práctica:** para resolver $A\mathbf x = \mathbf b$ **no se calcula** $A^{-1}$: es más lento y menos preciso que eliminar. Se usa `solve`.

## 5. El determinante

> [!practico]
> El determinante dice **cuánto estira las áreas** una transformación (o los volúmenes, en el espacio). Si vale $6$, todo
> cuadrado se convierte en una figura de área seis veces mayor; si vale $0$, la transformación aplasta el plano y no se puede
> deshacer; si es negativo, además da la vuelta a la figura, como verla en un espejo.


El **determinante** de una matriz cuadrada es un número que resume si la transformación aplasta el espacio. Para $2\times 2$, $\det\begin{pmatrix}a&b\\c&d\end{pmatrix} = ad - bc$. Para $3\times3$ se desarrolla por una fila (cofactores):

$$
\det\begin{pmatrix}a&b&c\\d&e&f\\g&h&i\end{pmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg) .
$$

**Ejemplo resuelto:** $\det\begin{pmatrix}2&1&3\\0&1&4\\1&0&6\end{pmatrix} = 2(6 - 0) - 1(0 - 4) + 3(0 - 1) = 12 + 4 - 3 = 13$.

**Significado geométrico.** $|\det A|$ es el **factor por el que $A$ multiplica áreas** (en $\mathbb R^2$) **o volúmenes** (en $\mathbb R^3$); el signo indica si invierte la orientación. Los vectores columna $(a, c)$ y $(b, d)$ forman un paralelogramo de área $|ad - bc|$.
Una rotación tiene $\det = 1$ (conserva áreas); $\operatorname{diag}(2, 3)$ tiene $\det = 6$; una matriz singular ($\det = 0$) **colapsa** el plano en una recta.

**Propiedades:** $\det(AB) = \det A\,\det B$; $\det A^\top = \det A$; intercambiar dos filas cambia el signo; sumar a una fila un múltiplo de otra **no** lo cambia; si una fila es combinación de otras, $\det = 0$; y el determinante de una matriz **triangular** es el producto de su diagonal.
De ahí se calcula **eficientemente** (por eliminación, $O(n^3)$) en lugar de por la definición, que suma $n!$ productos. Un caso notable es la **matriz de Vandermonde**: $\det\begin{pmatrix}1&x_i&x_i^2&x_i^3\end{pmatrix}= \prod_{i<j}(x_j - x_i)$.

**Regla de Cramer:** si $\det A\ne0$, $x_j = \frac{\det A_j}{\det A}$ con $A_j$ la matriz con la columna $j$ cambiada por $\mathbf b$. Es elegante pero **muy lenta** para $n$ grande: sirve para entender, no para calcular.

## 6. Vectores en $\mathbb R^n$

> [!practico]
> Un vector de $\mathbb R^n$ es una lista de $n$ números: la posición en el espacio ($n = 3$), las notas de un alumno en $n$
> asignaturas, los píxeles de una foto. El producto escalar mide **cuánto apuntan en la misma dirección** dos vectores: cero
> si son perpendiculares.


Un vector de $\mathbb R^n$ es una lista de $n$ números. El **producto escalar** es $\mathbf u\cdot\mathbf v = \sum u_iv_i = |\mathbf u||\mathbf v|\cos\theta$ (ver [[mat-geometria-analitica]]). La **norma** es $|\mathbf u| = \sqrt{\mathbf u\cdot\mathbf u}$; $\mathbf u\perp\mathbf v \iff \mathbf u\cdot\mathbf v = 0$.
**Desigualdad de Cauchy-Schwarz:** $|\mathbf u\cdot\mathbf v| \le |\mathbf u||\mathbf v|$ (consecuencia de que $|\cos\theta|\le1$). **Ejemplo:** $(1, 2, 2)\cdot(2, 1, -2) = 2 + 2 - 4 = 0$: son perpendiculares.

**Producto vectorial en $\mathbb R^3$:** $\mathbf u\times\mathbf v = (u_2v_3 - u_3v_2,\ u_3v_1 - u_1v_3,\ u_1v_2 - u_2v_1)$. Es **perpendicular** a ambos, y su módulo $|\mathbf u||\mathbf v|\sin\theta$ es el **área del paralelogramo** que forman:
$(2, 1, 0)\times(1, 3, 0) = (0, 0, 5)$, de módulo $5$. Aparece en física (fuerza magnética, momento de una fuerza, [[fis-electromagnetismo]]).

## 7. Independencia, base, dimensión y rango

> [!practico]
> Unos vectores son independientes si ninguno sobra: no se puede fabricar ninguno combinando los demás. Una **base** es un
> juego mínimo de piezas con el que se construye todo, como los tres colores primarios de una pantalla; la **dimensión** es
> cuántas piezas tiene. El **rango** de una matriz cuenta cuántas de sus columnas son de verdad distintas (no sobran).


Los vectores $\mathbf v_1, \dots, \mathbf v_k$ son **linealmente independientes** si la única combinación $c_1\mathbf v_1 + \cdots + c_k\mathbf v_k = \mathbf 0$ es la trivial ($c_i = 0$); si no, alguno es combinación de los otros (redundante).
Una **base** de $\mathbb R^n$ es un conjunto de $n$ vectores independientes: cualquier vector se escribe **de una única manera** como combinación suya. $n$ es la **dimensión**. El **rango** de una matriz es la dimensión de su espacio de columnas
(el número de columnas independientes, igual al de filas independientes).

**Teorema de rango y nulidad:** para $A$ de $m\times n$, $\operatorname{rango}A + \operatorname{nulidad}A = n$, con la nulidad la dimensión del conjunto de soluciones de $A\mathbf x = \mathbf 0$. (Cada columna sin pivote es una dirección libre.)
> [!formal] Con rigor: por qué rango más nulidad es $n$
> Tras la eliminación, $A\mathbf x = \mathbf 0$ tiene el mismo conjunto de soluciones que la forma escalonada, con $r$ pivotes
> ($r$ = rango). Las $n - r$ incógnitas **sin pivote** se pueden elegir libremente y cada elección determina las de pivote (de
> abajo arriba). Dar el valor $1$ a una variable libre y $0$ a las demás produce $n - r$ soluciones, independientes (cada una
> tiene un $1$ donde las otras tienen $0$) y que generan todas las demás. Así la nulidad es $n - r$. $\blacksquare$

**Ejemplo:** $\begin{pmatrix}1&2&3\\2&4&6\\1&0&1\end{pmatrix}$ tiene la fila $2$ igual al doble de la $1$: rango $2$ y nulidad $1$.

## 7b. Subespacios, coordenadas y cambio de base

> [!practico]
> Un mismo punto se describe con números distintos según los ejes que uses, como una dirección se da en calles y números
> o en latitud y longitud. Cambiar de base es traducir las coordenadas de un sistema de ejes a otro, y una matriz hace la
> traducción.

Un **subespacio** de $\mathbb R^n$ es un subconjunto que contiene a $\mathbf 0$ y es cerrado para sumas y múltiplos: rectas y
planos que pasan por el origen, el conjunto de soluciones de $A\mathbf x = \mathbf 0$, el espacio de columnas de una matriz. La
**intersección** de dos subespacios es un subespacio; la unión, en general, no, y su lugar lo ocupa la **suma**
$U + W = \{\mathbf u + \mathbf w\}$, con la **fórmula de Grassmann**
$\dim(U + W) = \dim U + \dim W - \dim(U \cap W)$. *Ejemplo:* dos planos distintos de $\mathbb R^3$ que pasan por el origen
suman todo $\mathbb R^3$, así que $3 = 2 + 2 - \dim(U \cap W)$ y se cortan en una recta.

**Coordenadas.** Si $B = (\mathbf b_1, \dots, \mathbf b_n)$ es una base, cada $\mathbf v$ se escribe de forma única como
$\mathbf v = c_1\mathbf b_1 + \cdots + c_n\mathbf b_n$, y $(c_1, \dots, c_n)$ son sus **coordenadas en $B$**. Con $P_B$ la
matriz con los $\mathbf b_i$ en columnas, $\mathbf v = P_B\,\mathbf c$, luego $\mathbf c = P_B^{-1}\mathbf v$. *Ejemplo:* en la base
$\mathbf b_1 = (1, 1)$, $\mathbf b_2 = (1, -1)$, el vector $(5, 1)$ tiene coordenadas $(3, 2)$, porque $3(1, 1) + 2(1, -1) = (5, 1)$.

**Aplicaciones lineales.** Una aplicación $f : \mathbb R^n \to \mathbb R^m$ es lineal si $f(\mathbf u + \mathbf v) = f(\mathbf u) + f(\mathbf v)$ y
$f(c\mathbf u) = cf(\mathbf u)$; entonces $f(\mathbf x) = A\mathbf x$ con $A$ la matriz cuyas columnas son las imágenes de la base
canónica. Su **núcleo** $\ker f = \{\mathbf x : A\mathbf x = \mathbf 0\}$ y su **imagen** (el espacio de columnas) son subespacios, y
$\dim\ker f + \dim\operatorname{Im} f = n$ (rango y nulidad). $f$ es inyectiva si y solo si $\ker f = \{\mathbf 0\}$. Si en lugar
de la base canónica se usa una base $B$, la matriz de un endomorfismo pasa a ser $P_B^{-1}AP_B$ (matrices **semejantes**: la
misma transformación vista desde otros ejes). Las **proyecciones** ($A^2 = A$) y las **simetrías** ($A^2 = I$) son los
ejemplos típicos. El estudio abstracto (cualquier espacio, el espacio cociente y el dual) sigue en [[mat-algebra-lineal]].

## 8. Autovalores y autovectores

> [!practico]
> Cuando una transformación actúa, casi todos los vectores cambian de dirección. Los **autovectores** son los que no: solo se
> estiran o encogen, y el **autovalor** dice cuánto. Conocerlos es conocer el esqueleto de la transformación: repetirla muchas
> veces es fácil (cada dirección se estira siempre igual), y por eso sirven para predecir el largo plazo de poblaciones,
> cadenas de Markov o las páginas más importantes de la web.


Muchas matrices tienen direcciones especiales que **no giran**, solo se estiran: $A\mathbf v = \lambda\mathbf v$ con $\mathbf v\ne\mathbf 0$. $\lambda$ es un **autovalor** y $\mathbf v$ un **autovector**. Para hallarlos: $(A - \lambda I)\mathbf v = \mathbf 0$ tiene solución no nula
$\iff \det(A - \lambda I) = 0$, el **polinomio característico**. Para $2\times2$: $\lambda^2 - (\operatorname{tr}A)\lambda + \det A = 0$ (la **traza** es la suma de la diagonal): la suma de autovalores es la traza y su producto es el determinante.

> [!formal] Con rigor: traza y determinante en el polinomio característico
> Para $A = \begin{pmatrix}a&b\\c&d\end{pmatrix}$, $\det(A - \lambda I) = (a - \lambda)(d - \lambda) - bc = \lambda^2 - (a + d)\lambda + (ad - bc)$.
> Si sus raíces son $\lambda_1, \lambda_2$, el polinomio es $(\lambda - \lambda_1)(\lambda - \lambda_2) = \lambda^2 - (\lambda_1 + \lambda_2)\lambda + \lambda_1\lambda_2$;
> comparando coeficientes, $\lambda_1 + \lambda_2 = \operatorname{tr}A$ y $\lambda_1\lambda_2 = \det A$. $\blacksquare$

**Ejemplo resuelto:** $A = \begin{pmatrix}4&1\\2&3\end{pmatrix}$: $\lambda^2 - 7\lambda + 10 = 0$, $\lambda = 5$ o $\lambda = 2$. Para $\lambda = 5$: $(A - 5I)\mathbf v = 0$ da $-v_1 + v_2 = 0$, $\mathbf v = (1, 1)$; comprobación: $A(1, 1) = (5, 5)$. $\checkmark$
Para $\lambda = 2$: $\mathbf v = (1, -2)$: $A(1, -2) = (2, -4) = 2(1, -2)$. $\checkmark$

**Diagonalización y potencias.** Si $A$ tiene $n$ autovectores independientes, $A = PDP^{-1}$ con $D$ diagonal (los autovalores) y $P$ con los autovectores en las columnas. Entonces

$$
A^k = PD^kP^{-1},
$$

y elevar $D$ es elevar cada autovalor. Calcular $A^{100}$ pasa de $100$ productos de matrices a elevar números.

**Aplicación 1: Fibonacci.** $\begin{pmatrix}F_{n+1}\\F_n\end{pmatrix} = \begin{pmatrix}1&1\\1&0\end{pmatrix}^{n}\begin{pmatrix}1\\0\end{pmatrix}$; los autovalores son $\varphi = \frac{1 + \sqrt5}{2}$ y $1 - \varphi$, y de ahí sale la **fórmula de Binet**
$F_n = \frac{\varphi^n - (1 - \varphi)^n}{\sqrt5}$ ($F_{10} = 55$). Con potencias por cuadrados sucesivos, $F_{30} = 832\,040$ se calcula con $5$ productos de matrices $2\times2$.

**Aplicación 2: cadenas de Markov.** Si $P$ es la matriz de transición de un sistema (cada fila suma $1$), la distribución a largo plazo es el **autovector con $\lambda = 1$** (por filas, $\pi = \pi P$). Con $P = \begin{pmatrix}0{,}9&0{,}1\\0{,}5&0{,}5\end{pmatrix}$:
$-0{,}1\pi_1 + 0{,}5\pi_2 = 0$ y $\pi_1 + \pi_2 = 1$ dan $\pi = \left(\frac56, \frac16\right)$. **PageRank** es exactamente esto con la matriz de enlaces de la web.

## 9. Mínimos cuadrados

> [!practico]
> Con datos reales, las medidas nunca caen exactamente sobre una recta. Mínimos cuadrados elige la recta que **menos se
> equivoca en total**, sumando los errores al cuadrado. Es lo que hace una hoja de cálculo cuando le pides la línea de
> tendencia.


Si hay más ecuaciones que incógnitas (datos con ruido), $A\mathbf x = \mathbf b$ no tiene solución exacta. Se busca la **mejor aproximación** que minimiza $|A\mathbf x - \mathbf b|^2$: la solución de las **ecuaciones normales** $A^\top A\,\mathbf x = A^\top\mathbf b$.
**Ejemplo:** ajustar $y = a + bx$ a $(0, 1), (1, 3), (2, 4), (3, 8)$. Con $A$ de filas $(1, x_i)$: $A^\top A = \begin{pmatrix}4&6\\6&14\end{pmatrix}$, $A^\top\mathbf y = \begin{pmatrix}16\\35\end{pmatrix}$; resolviendo, $a = \frac7{10}$ y $b = \frac{11}{5}$: $y = 0{,}7 + 2{,}2x$.
> [!formal] Con rigor: de dónde salen las ecuaciones normales
> El vector $A\mathbf x$ recorre el espacio de columnas de $A$. El punto de ese espacio más cercano a $\mathbf b$ es la
> **proyección ortogonal**: el error $\mathbf b - A\hat{\mathbf x}$ es perpendicular a todas las columnas, es decir,
> $A^\top(\mathbf b - A\hat{\mathbf x}) = \mathbf 0$, que son las ecuaciones normales. Es el mínimo por Pitágoras: para cualquier
> $\mathbf x$, $|\mathbf b - A\mathbf x|^2 = |\mathbf b - A\hat{\mathbf x}|^2 + |A(\hat{\mathbf x} - \mathbf x)|^2 \ge |\mathbf b - A\hat{\mathbf x}|^2$,
> porque los dos sumandos son perpendiculares. $\blacksquare$

Es la base de la regresión lineal y del ajuste de modelos ([[ia-aprendizaje-estadistico]]).

## 10. En la práctica: precisión numérica

> [!practico]
> El ordenador redondea cada cuenta. Normalmente no se nota, pero algunos sistemas son tan sensibles que un redondeo diminuto
> cambia la solución por completo, como una balanza que se vuelca con un grano de arena.


Los ordenadores trabajan con flotantes, y algunas matrices son **mal condicionadas**: un cambio minúsculo en los datos produce uno enorme en la solución (la matriz de Hilbert es el ejemplo clásico). El **número de condición** `np.linalg.cond(A)` lo mide; si es del orden de
$10^{k}$, se pierden unas $k$ cifras decimales. Por eso se **resuelve** en vez de invertir, se evita restar números casi iguales y se comprueba el **residuo** $|A\mathbf x - \mathbf b|$.

## 11. Errores típicos

- Suponer $AB = BA$.
- Calcular $A^{-1}$ para resolver un sistema.
- Cambiar el orden en $(AB)^{-1} = B^{-1}A^{-1}$ o en $(AB)^\top = B^\top A^\top$.
- Olvidar que $\det(A + B)\ne\det A + \det B$ (el determinante **no** es lineal en la matriz entera).
- Dividir una fila por un pivote cero (hay que intercambiar filas).
- Confundir independencia lineal (sin redundancia) con ortogonalidad (perpendicular).
- Tomar un vector nulo como autovector.

## Repaso: lo que debe quedarte dentro de un mes

1. Eliminación gaussiana; rango y número de soluciones ($\operatorname{rango}A = \operatorname{rango}[A\mid\mathbf b]$).
2. $AB \ne BA$; producto = composición; rotación $R(\theta)$ y $R(\alpha)R(\beta) = R(\alpha + \beta)$.
3. Invertible $\iff \det\ne0 \iff$ rango completo; $\det(AB) = \det A\det B$; $|\det|$ escala áreas.
4. $\mathbf u\cdot\mathbf v = |\mathbf u||\mathbf v|\cos\theta$; $|\mathbf u\times\mathbf v|$ es el área del paralelogramo.
5. Subespacios, Grassmann, coordenadas $\mathbf c = P_B^{-1}\mathbf v$; núcleo e imagen de una aplicación lineal.
6. $A\mathbf v = \lambda\mathbf v$, $\det(A - \lambda I) = 0$; $A^k = PD^kP^{-1}$; ecuaciones normales $A^\top A\mathbf x = A^\top\mathbf b$.

## Siguiente

[[mat-algebra-lineal]] generaliza todo esto a **espacios vectoriales abstractos** (con demostraciones), y [[mat-calculo-multivariable]] combina el cálculo con el álgebra lineal para funciones de varias variables.
