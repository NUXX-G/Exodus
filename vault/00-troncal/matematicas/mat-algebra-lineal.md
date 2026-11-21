---
id: mat-algebra-lineal
title: "Álgebra lineal II: espacios vectoriales abstractos, aplicaciones lineales, determinante, autovalores y producto interior"
area: matematicas
trunk_level: 9
prerequisites: [mat-algebra-lineal-1, mat-logica-demostraciones, mat-conjuntos-numeros]
academic_sources:
  - "Axler, S. Linear Algebra Done Right, 4ª ed. Springer, 2024 (acceso abierto, licencia CC BY-NC; linear.axler.net)."
  - "Borobia, A.; Estrada, B. Álgebra Lineal y Geometría Vectorial, 2.ª ed. Sanz y Torres, 2019, caps. 3-4 (espacios vectoriales, cociente, aplicaciones lineales, dual) y 5-9 (formas canónicas, subespacios invariantes, formas bilineales y cuadráticas, espacio euclídeo, isometrías): texto base de «Álgebra lineal I» (61021016) y «Álgebra lineal II» (61021068) de la UNED."
  - "Strang, G. Introduction to Linear Algebra, 5ª ed. Wellesley-Cambridge Press, 2016, caps. 3 (espacios y subespacios), 4 (ortogonalidad), 5 (determinantes), 6 (autovalores) y 8 (transformaciones lineales). Índice: https://math.mit.edu/~gs/linearalgebra/ila5/indexila5.html"
  - "Hoffman, K.; Kunze, R. Linear Algebra, 2ª ed. Prentice-Hall, 1971."
  - "Trefethen, L. N.; Bau, D. Numerical Linear Algebra. SIAM, 1997."
ctf_flag: "sha256:f06fe0752519c4a4624d895e64d4a175d13a9848457ba38a7c3fc13b1be70407"
hints:
  - "Los tres apartados son eliminación gaussiana o producto de matrices sobre un cuerpo distinto: ℚ en (a), 𝔽₂ en (b) y ℤ/pℤ en (c). En (a) la coma flotante puede darte un determinante casi entero: trabaja con aritmética exacta. En (c) no se itera 10¹⁸ veces: se eleva una matriz 2×2 a esa potencia por cuadrados sucesivos."
  - "En Python, fractions.Fraction da eliminación exacta sobre ℚ; para (b) representa cada fila como un entero y usa XOR como suma de filas. Con SymPy, Matrix(...).det() y Matrix(...).rank() sirven para contrastar (a), pero rank() trabaja sobre ℚ, no sobre 𝔽₂. Para (c), pow(base, exp, mod) no sirve con matrices: escribe la exponenciación por cuadrados a mano."
  - "Axler, capítulos de aplicaciones lineales y matrices y de determinantes. Strang, capítulos de eliminación y de propiedades del determinante. Documentación de fractions: docs.python.org/3/library/fractions.html."
exercises:
  - id: dimension-de-un-subespacio
    tier: 1
    prompt: |
      ¿Qué dimensión tiene el subespacio de $\mathbb R^{{{n}}}$ formado por los vectores con {{cond}}? Respuesta: un entero.
    variants:
      - values: {"n":3,"cond":"$x_1 + x_2 + x_3 = 0$"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"n":5,"cond":"$x_1 = x_2$ y $x_3 = x_4$"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"n":4,"cond":"$x_1 + 2x_2 = 0$ y $2x_1 + 4x_2 = 0$"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"n":5,"cond":"$x_1 + x_2 + x_3 + x_4 + x_5 = 0$, $x_1 = x_5$ y $x_2 = x_4$"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"n":4,"cond":"$x_1 - x_2 = 0$, $x_2 - x_3 = 0$ y $x_1 - x_3 = 0$"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"n":6,"cond":"$x_1 + x_2 = 0$, $x_3 + x_4 = 0$ y $x_5 + x_6 = 0$"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: rango-de-una-matriz
    tier: 1
    prompt: |
      ¿Cuál es el rango de la matriz ${{A}}$? Respuesta: un entero.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 1 & 2 & 0\\\\ 2 & 2 & 4 & 0\\\\ 0 & 1 & 1 & 1\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & 2 & 1\\\\ 2 & 1 & 0\\\\ 3 & 3 & 1\\\\ 1 & -1 & -1\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}2 & 4 & 6 & 8\\\\ 1 & 2 & 3 & 4\\\\ 3 & 6 & 9 & 12\\end{pmatrix}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 1 & 0\\\\ 0 & 1 & 0 & 1\\\\ 1 & 1 & 1 & 1\\\\ 1 & -1 & 1 & -1\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & 2 & 3\\\\ 4 & 5 & 6\\\\ 7 & 8 & 10\\end{pmatrix}"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"A":"\\begin{pmatrix}0 & 1 & 2 & 3\\\\ 1 & 0 & 1 & 2\\\\ 1 & 1 & 3 & 5\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: coordenadas-en-una-base
    tier: 1
    prompt: |
      ¿Qué coordenadas tiene el vector ${{v}}$ en la base $\{{{b1}},\ {{b2}}\}$ de $\mathbb R^2$? Respuesta: `a;b` (fracciones «p/q» si hace falta).
    variants:
      - values: {"v":"(4, 13)","b1":"(1, 2)","b2":"(2, -1)"}
        answers: ["sha256:6724f4dcf0f0334436b34629b4043d2ed5d8f35215da092da7c2b120a0101ca4"]
      - values: {"v":"(7, 11)","b1":"(1, 1)","b2":"(1, 2)"}
        answers: ["sha256:2b2ae0ddb1ad07ad30f68dbf8869395377eb9bc264d7da773d28f5934f0f5e59"]
      - values: {"v":"(9, -3)","b1":"(2, 1)","b2":"(1, -1)"}
        answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
      - values: {"v":"(9, -11)","b1":"(1, 3)","b2":"(1, -2)"}
        answers: ["sha256:b1b35c85eb0dd71b95d87a4253bf472d8e08d8c5ad49cf3c8fd5bb388ac22cab"]
      - values: {"v":"(5, 7)","b1":"(3, 1)","b2":"(-1, 1)"}
        answers: ["sha256:2b2ae0ddb1ad07ad30f68dbf8869395377eb9bc264d7da773d28f5934f0f5e59"]
      - values: {"v":"(-1, 12)","b1":"(1, -2)","b2":"(2, 1)"}
        answers: ["sha256:942ccb9b9204dd180ac05c2feb759d724aff1695ca262ffc57984fd20eb31c70"]
  - id: subespacios-de-matrices
    tier: 1
    prompt: |
      ¿Qué dimensión tiene el espacio de las matrices **simétricas** ${{n}}\times{{n}}$ reales, y cuál el de las **antisimétricas**? Respuesta: los dos enteros separados por `;`.
    variants:
      - values: {"n":4}
        answers: ["sha256:f022656d6bbd370899eee53f0aa4ab3e5218736671acec9526ea960d4a39c1e9"]
      - values: {"n":2}
        answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
      - values: {"n":5}
        answers: ["sha256:ea92e52a8e317c33bd233805ed41cbab339f723c31e2fd7fe515971467c60dba"]
      - values: {"n":6}
        answers: ["sha256:fc43a57809fb4e6237c3fc0d6aa81c769ca6490164a53002a6e7c241cf1e498d"]
      - values: {"n":7}
        answers: ["sha256:ae7a135af7c7ad5ee09c653a77db95b56c0b058dd119b3c0f3b0c351a459e909"]
      - values: {"n":10}
        answers: ["sha256:1f94b7f7c89dd6dbf6437755bba79c6676a975ba03deff628d3c546ebb309918"]
  - id: dimension-del-nucleo
    tier: 2
    prompt: |
      Por el teorema del rango, ¿qué dimensión tiene el núcleo de la aplicación lineal $\mathbb R^4 \to \mathbb R^4$ dada por ${{A}}$? Respuesta: un entero.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 1 & 0 & 2\\\\ 2 & 2 & 1 & 5\\\\ 1 & 1 & 1 & 3\\\\ 0 & 0 & 1 & 1\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 1 & 1\\\\ 0 & 1 & 1 & 1\\\\ 1 & 1 & 2 & 2\\\\ 2 & 1 & 3 & 3\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & 2 & 3 & 4\\\\ 0 & 1 & 1 & 1\\\\ 1 & 3 & 4 & 5\\\\ 0 & 0 & 0 & 1\\end{pmatrix}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 1 & 1\\\\ 2 & 2 & 2 & 2\\\\ 3 & 3 & 3 & 3\\\\ 1 & 2 & 3 & 4\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}2 & 0 & 0 & 0\\\\ 0 & 3 & 0 & 0\\\\ 0 & 0 & 0 & 0\\\\ 0 & 0 & 0 & 0\\end{pmatrix}"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"A":"\\begin{pmatrix}1 & -1 & 0 & 0\\\\ 0 & 1 & -1 & 0\\\\ 0 & 0 & 1 & -1\\\\ -1 & 0 & 0 & 1\\end{pmatrix}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: cambio-de-base
    tier: 2
    prompt: |
      Sea $T(x, y) = {{T}}$. Escribe la matriz de $T$ en la base $\{{{p1}},\ {{p2}}\}$ (es decir, $P^{-1}AP$ con $P$ la matriz que tiene esos vectores en columnas). Respuesta: sus cuatro entradas por filas, separadas por `;` (fracciones «a/b» si hace falta).
    variants:
      - values: {"T":"(4x + y,\\ x + 4y)","p1":"(1, 1)","p2":"(1, -1)"}
        answers: ["sha256:cf334241ff67f8903954322fc1dd80c092ee2852ae3fdeb597685cbab21d6436"]
      - values: {"T":"(2x + 2y,\\ x + 3y)","p1":"(1, 2)","p2":"(1, -1)"}
        answers: ["sha256:5f2f8fd4a0abbe91dbf1e385a9a30d348815b57dccf7f9b28e26c8f4dca39916"]
      - values: {"T":"(4x - y,\\ 2x + y)","p1":"(1, 1)","p2":"(1, 2)"}
        answers: ["sha256:8063185c16568195275ed3e78804beefee3a526ec9b5014bbb0568559a5c4614"]
      - values: {"T":"(5x + 4y,\\ x + 2y)","p1":"(4, 1)","p2":"(1, -1)"}
        answers: ["sha256:9828e0427a46bbcf9843c1b00f3f31458f777d7eeeade33efbfc9edae32460d7"]
      - values: {"T":"(x + 2y,\\ 2x + y)","p1":"(1, 0)","p2":"(1, 1)"}
        answers: ["sha256:fbc2c5084d0aac4624a73dde7775bb02cf9d44a5e8d354ddf0ea6cbaab097189"]
      - values: {"T":"(y,\\ -2x + 3y)","p1":"(1, 1)","p2":"(1, 2)"}
        answers: ["sha256:c0b4c0942c09ce97050321097b97546eb6a4cb8b2664b727d23b6bf48a99a461"]
  - id: determinante-4x4
    tier: 2
    prompt: |
      Calcula el determinante de ${{A}}$. Respuesta: un entero.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 0 & 1\\\\ 0 & 1 & 3 & 2\\\\ 2 & 0 & 1 & 1\\\\ 1 & 1 & 1 & 0\\end{pmatrix}"}
        answers: ["sha256:5e37b37c842d8df7106ee92e2e45beefef71ca60f51f7bb5cb50cb1e81c355a8"]
      - values: {"A":"\\begin{pmatrix}3 & 1 & 0 & 2\\\\ 1 & 0 & 2 & 1\\\\ 0 & 2 & 1 & 3\\\\ 2 & 1 & 1 & 0\\end{pmatrix}"}
        answers: ["sha256:59e19706d51d39f66711c2653cd7eb1291c94d9b55eb14bda74ce4dc636d015a"]
      - values: {"A":"\\begin{pmatrix}1 & 0 & 2 & 0\\\\ 0 & 3 & 0 & 1\\\\ 2 & 0 & 1 & 0\\\\ 0 & 1 & 0 & 2\\end{pmatrix}"}
        answers: ["sha256:5e37b37c842d8df7106ee92e2e45beefef71ca60f51f7bb5cb50cb1e81c355a8"]
      - values: {"A":"\\begin{pmatrix}2 & 1 & 1 & 1\\\\ 1 & 2 & 1 & 1\\\\ 1 & 1 & 2 & 1\\\\ 1 & 1 & 1 & 2\\end{pmatrix}"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 0 & 0\\\\ 1 & 2 & 1 & 0\\\\ 0 & 1 & 3 & 1\\\\ 0 & 0 & 1 & 4\\end{pmatrix}"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"A":"\\begin{pmatrix}4 & 0 & 1 & 2\\\\ 0 & 2 & 0 & 1\\\\ 1 & 0 & 3 & 0\\\\ 2 & 1 & 0 & 1\\end{pmatrix}"}
        answers: ["sha256:59100e1b869f778eb1d0975e653f881efd13fa8ccb0678cd1856156b3de6207e"]
  - id: regla-de-cramer
    tier: 2
    prompt: |
      Resuelve con la regla de Cramer el sistema ${{A}}\begin{pmatrix}x\\y\\z\end{pmatrix} = {{b}}$. Respuesta: `x;y;z` como fracciones irreducibles o enteros.
    variants:
      - values: {"A":"\\begin{pmatrix}1 & 2 & 1\\\\ 2 & -1 & 3\\\\ 1 & 1 & -1\\end{pmatrix}","b":"\\begin{pmatrix}9\\\\ 4\\\\ 4\\end{pmatrix}"}
        answers: ["sha256:8b17e7d9bc07b2f5eba2b51f49479855e3ec8b3931472ccf21b81cef0fbde5fc"]
      - values: {"A":"\\begin{pmatrix}3 & 1 & 0\\\\ 1 & 2 & 1\\\\ 0 & 1 & 4\\end{pmatrix}","b":"\\begin{pmatrix}5\\\\ 6\\\\ 9\\end{pmatrix}"}
        answers: ["sha256:62877ddeb1a777607d208d6730df052636dac8f5e0b722e857deb5dc2cd254a0"]
      - values: {"A":"\\begin{pmatrix}2 & -1 & 1\\\\ 1 & 1 & 1\\\\ 3 & 0 & 1\\end{pmatrix}","b":"\\begin{pmatrix}1\\\\ 6\\\\ 5\\end{pmatrix}"}
        answers: ["sha256:fe36280cc4db439acca2607c1f9df312bf685e4f51640ad5f2c84fd6a3eba196"]
      - values: {"A":"\\begin{pmatrix}1 & 1 & 2\\\\ 2 & 3 & 1\\\\ 1 & 0 & 3\\end{pmatrix}","b":"\\begin{pmatrix}4\\\\ 5\\\\ 7\\end{pmatrix}"}
        answers: ["sha256:c05ac976d66d6de47b9cf0173bebb41ba09185cc2359d280c3a72b9d06c689e4"]
      - values: {"A":"\\begin{pmatrix}4 & 1 & 2\\\\ 1 & 3 & 0\\\\ 2 & 0 & 5\\end{pmatrix}","b":"\\begin{pmatrix}7\\\\ 4\\\\ 9\\end{pmatrix}"}
        answers: ["sha256:06cf3e1c96f84d2c454e407cc19b4bae263c846bf726a4f8354f56098654da69"]
      - values: {"A":"\\begin{pmatrix}1 & -1 & 2\\\\ 3 & 1 & 1\\\\ 2 & 2 & 1\\end{pmatrix}","b":"\\begin{pmatrix}5\\\\ 6\\\\ 2\\end{pmatrix}"}
        answers: ["sha256:3fef7a95d846a318594fc503556fbcd7eba4912db6f76f059ae615f7e684a5e7"]
  - id: autovalores-con-multiplicidad
    tier: 2
    prompt: |
      Halla los autovalores de ${{A}}$, repetidos según su multiplicidad. Respuesta: de menor a mayor, separados por `;`.
    variants:
      - values: {"A":"\\begin{pmatrix}4 & 1 & 1\\\\ 1 & 4 & 1\\\\ 1 & 1 & 4\\end{pmatrix}"}
        answers: ["sha256:a52e8ff8e35afed936e253eb0cb7e2538376c8d099a6c5667744309d0d4aa891"]
      - values: {"A":"\\begin{pmatrix}3 & 2 & 2\\\\ 2 & 3 & 2\\\\ 2 & 2 & 3\\end{pmatrix}"}
        answers: ["sha256:645cbe0f4b2e117ef0b057550538f5c62bd1902900240edaff751ad27f4320df"]
      - values: {"A":"\\begin{pmatrix}3 & -1 & -1\\\\ -1 & 3 & -1\\\\ -1 & -1 & 3\\end{pmatrix}"}
        answers: ["sha256:ad3fbacabafdfc123525875a155472d0ebbf04e5f4f6d94ab04ee251df3d8962"]
      - values: {"A":"\\begin{pmatrix}3 & 1 & 1 & 1\\\\ 1 & 3 & 1 & 1\\\\ 1 & 1 & 3 & 1\\\\ 1 & 1 & 1 & 3\\end{pmatrix}"}
        answers: ["sha256:a477eb3a6483fd3e314091f5327798440889200945a85881888e43d442e4ad16"]
      - values: {"A":"\\begin{pmatrix}2 & 2 & 2 & 2\\\\ 2 & 2 & 2 & 2\\\\ 2 & 2 & 2 & 2\\\\ 2 & 2 & 2 & 2\\end{pmatrix}"}
        answers: ["sha256:62944b5b0be6b0a9a508bfd7d83b1f0af382e200a2525dbc60f68bb30cadbfc7"]
      - values: {"A":"\\begin{pmatrix}7 & 2 & 2\\\\ 2 & 7 & 2\\\\ 2 & 2 & 7\\end{pmatrix}"}
        answers: ["sha256:1007f42c73016ace28a99091fcc52b20dd3d8c4876be0c5dabc24b1777e87b23"]
  - id: propiedades-del-determinante
    tier: 2
    prompt: |
      Sea $A$ una matriz real ${{n}}\times{{n}}$ con $\det A = {{d}}$. ¿Cuánto valen $\det({{c}}A)$, $\det(A^{-1})$ y $\det(A^{\mathsf T}A)$? Respuesta: los tres valores separados por `;` (fracción `a/b` si hace falta).
    variants:
      - values: {"n":3,"d":4,"c":3}
        answers: ["sha256:2342528364f325da957cea5803af79721053c5e250d1d887c126c9a2be20f5b3"]
      - values: {"n":2,"d":-3,"c":5}
        answers: ["sha256:62457aa7f9ec89a3fe3fc7cf9c7bf3152834f8d3e24d8f95d04438ac1977e8d0"]
      - values: {"n":4,"d":2,"c":2}
        answers: ["sha256:549e17b9a7d7ec85fe2876cd754342933626b8748ac59211c8e0497a91d5d723"]
      - values: {"n":3,"d":-2,"c":4}
        answers: ["sha256:cc0d5258060316683088eb3e28eb9a338a51625e6c3bdda5204d18c975099475"]
      - values: {"n":2,"d":7,"c":3}
        answers: ["sha256:c3a16e02d38b2d63261c1e2bd3ef55b33d68297fe1b840e24d8f85f2b537959f"]
      - values: {"n":4,"d":3,"c":-1}
        answers: ["sha256:6b254cbdfc318bd097fe44e7d5466a218d27933ae9f1143466ea3c6471ec0bdf"]
  - id: rango-sobre-f2
    tier: 3
    prompt: |
      Sea $B$ la matriz ${{N}}\times{{N}}$ con $B_{ij} = 1$ si $\gcd(i, j) = 1$ y $B_{ij} = 0$ si no ($1 \le i, j \le {{N}}$). ¿Cuál es su rango **sobre** $\mathbb F_2$ (aritmética módulo 2)? Respuesta: un entero.
    variants:
      - values: {"N":5}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"N":7}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"N":8}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"N":9}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"N":10}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"N":12}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: proyeccion-ortogonal
    tier: 3
    prompt: |
      Calcula la proyección ortogonal de ${{v}}$ sobre el plano de $\mathbb R^3$ generado por ${{u}}$ y ${{w}}$. Respuesta: sus tres coordenadas como fracciones irreducibles (o enteros), separadas por `;`.
    variants:
      - values: {"v":"(2, 1, 4)","u":"(1, 0, 1)","w":"(0, 1, 1)"}
        answers: ["sha256:70d309b285470487b46ed934ebd6c4db70f095ba0e9109a52b860fedab10c2a3"]
      - values: {"v":"(3, 0, 1)","u":"(1, 1, 0)","w":"(0, 1, 1)"}
        answers: ["sha256:8945f981c3c7847e5bb416158b23ee48607035a8c08ffac2e1b2f8eca782ad5c"]
      - values: {"v":"(1, 1, 1)","u":"(1, 2, 0)","w":"(0, 1, 2)"}
        answers: ["sha256:12a510ee42c8ca1d7f934c4b04681d3e9d213a06e06c0baff1ed2194b2d8ebd6"]
      - values: {"v":"(4, 2, 0)","u":"(1, 0, 0)","w":"(1, 1, 1)"}
        answers: ["sha256:3a01c93dd5e3a1f4434278a7e10cca6b0d9f7c352b14cd135ed5aefee3149b19"]
      - values: {"v":"(0, 3, 3)","u":"(1, 1, 0)","w":"(1, -1, 1)"}
        answers: ["sha256:fd084e527403f060a679d4db6193e909b15d8f88d51622af7ea6541afad199b2"]
      - values: {"v":"(2, 2, 1)","u":"(1, 0, 2)","w":"(0, 1, -1)"}
        answers: ["sha256:46c4b539db9d42cabe585a5299031b28cbd6c9375667553674592fd98444e4f6"]
  - id: fibonacci-por-potencias-de-matrices
    tier: 3
    prompt: |
      Con $\begin{pmatrix}1 & 1\\ 1 & 0\end{pmatrix}^n = \begin{pmatrix}F_{n+1} & F_n\\ F_n & F_{n-1}\end{pmatrix}$, calcula $F_{{{n}}} \bmod {{m}}$. Respuesta: un entero.
    variants:
      - values: {"n":60,"m":1000}
        answers: ["sha256:728bf33aab1d32d4dca8fcc6a020d8baeb6b9910104541aa68c2d408154734fc"]
      - values: {"n":100,"m":997}
        answers: ["sha256:b3dfdc6efe322a6feccb0d081e88ffac20b0f28e8495efa76188c8dc3ada6181"]
      - values: {"n":75,"m":10000}
        answers: ["sha256:abdc523261827dded2363da66a6b318d467c7b1aea2e9c5fbdc7ed684012a037"]
      - values: {"n":200,"m":1009}
        answers: ["sha256:8cd2510271575d8430c05368315a87b9c4784c7389a47496080c1e615a2a00b6"]
      - values: {"n":90,"m":100}
        answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
      - values: {"n":150,"m":9973}
        answers: ["sha256:485419d81203cab12d4ca99c7f567f62b0c54ca876dcd3b9e6fce67862fa668d"]
  - id: inversa-modulo-7
    tier: 3
    prompt: |
      Halla la inversa de ${{A}}$ sobre el cuerpo $\mathbb Z/{{p}}\mathbb Z$. Respuesta: sus cuatro entradas por filas (entre $0$ y ${{p}} - 1$), separadas por `;`.
    variants:
      - values: {"A":"\\begin{pmatrix}3 & 1\\\\ 4 & 2\\end{pmatrix}","p":7}
        answers: ["sha256:6b6cc8e57052dee0f72ed2141c395e17b3ea5127d5bd01576b30b97b203ecbd7"]
      - values: {"A":"\\begin{pmatrix}2 & 5\\\\ 1 & 3\\end{pmatrix}","p":11}
        answers: ["sha256:53ec9605b69034082e4dd7e9f0046147f837990d15b782bae935da7cefe405ae"]
      - values: {"A":"\\begin{pmatrix}1 & 2\\\\ 3 & 4\\end{pmatrix}","p":5}
        answers: ["sha256:40a3c554f1da737d69a067acb1ab58e8a34bbad406426da619d75f44eca8e89b"]
      - values: {"A":"\\begin{pmatrix}4 & 1\\\\ 2 & 3\\end{pmatrix}","p":7}
        answers: ["sha256:a54e036275454820c9a1e5d21258856815a900f2b7c1410fef0c7fb638e46396"]
      - values: {"A":"\\begin{pmatrix}5 & 2\\\\ 3 & 1\\end{pmatrix}","p":13}
        answers: ["sha256:e828cefc471e3ca4b4fd1e542bf5ab2938a0a0b8532d2bc4e902d50158bf29a4"]
      - values: {"A":"\\begin{pmatrix}2 & 3\\\\ 5 & 6\\end{pmatrix}","p":7}
        answers: ["sha256:2d2ad3c162f74259bb6cd067f259c2389225a5acc7033036f1e08efd9f0c345f"]
  - id: dimension-del-cociente
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Sea $W \subseteq \mathbb R^{{{n}}}$ el subespacio generado por ${{gen}}$. ¿Qué dimensión tiene el espacio cociente $\mathbb R^{{{n}}}/W$?
    variants:
      - values: {"n":5,"gen":"(1, 1, 0, 0, 0), (0, 0, 1, 1, 0), (1, 1, 1, 1, 0)"}
        answers: ["sha256:f5e213b073ef8993caaab842d315d34d856eaceb523b80710a2b6388b6930e91","sha256:d0211e1d96a5a912ce107177ee9359af74c43b92f2b01d0b23315796f210c237","sha256:d0c273521ad6bf9c0ac8a637b47e2e94c42f40daa1cc5c892fd4f93baae4f279"]
      - values: {"n":4,"gen":"(1, 0, 1, 0), (0, 1, 0, 1)"}
        answers: ["sha256:6e3ccdb90d976561b2e27cf76bac9597a2e9461c287287971c036c2f8975350f","sha256:66f750f4e2321d0dee49733e582b9a11aa6a390ef9eba703393c46777a355d6f","sha256:edd3192095b57fcf643b265791f00b3f5d038c62ff9c30f02662a36164dea507"]
      - values: {"n":6,"gen":"(1, 1, 1, 1, 1, 1)"}
        answers: ["sha256:14fa67fa676643e0a83f6f53dafd1e4a9a90a7f7c67cfe89cc5d7913a0fd3689","sha256:59cb566dd749eae9abcb06a973ca61149562344b2ba1b06203dd4adbf44bba67","sha256:819304822cb9fac0faba0a5faafd9fb6b249a0c621987d1f3a2e492c744ef5b6"]
      - values: {"n":4,"gen":"(1, 2, 3, 4), (2, 4, 6, 8), (0, 1, 0, 1)"}
        answers: ["sha256:27d8b563b58d53a6422e1ed44bb857536694ade974cbecde0bccbf32ac75d21f","sha256:b8b4a3977b2627f77306742b8807da4187194fc9a1853dbd49d7b31ff22ce4e4","sha256:8c18a792c01b6d067b18074cd01412c863e11cc5421999b8a4001d6aa489f105"]
      - values: {"n":5,"gen":"(1, 0, 0, 0, 1), (0, 1, 0, 1, 0), (1, 1, 0, 1, 1), (0, 0, 1, 0, 0)"}
        answers: ["sha256:9a44e1bd772f79dad20de13f6249f3a76c74621af607633fc8df8a52406723aa","sha256:b244d1e36457620eb99f5324e11b28eda5ea0bbf4f955e3a72be80453d5e3375","sha256:509944d462b44d0baf85285e09e0e6dc7c3761470bbc946c7ac22ad170055fd0"]
      - values: {"n":3,"gen":"(1, 1, 1), (1, 2, 3), (2, 3, 4)"}
        answers: ["sha256:d54c9b28b2611562f1e50d0658a00859456ab01ec39fd269a101d94d46f1e028","sha256:dcbd9ee1d88d08a90755b3f3e9bcbe6c7e924603bd0df05b34a4c8f8d857de16","sha256:546f25bed87b17a18091e799441c32ffea78cf156cf73c25898ab898cb0ffb00"]
  - id: base-dual
    tier: 2
    prompt: |
      Sea $(\varphi_1, \varphi_2)$ la base dual de la base $\mathbf b_1 = {{b1}}$, $\mathbf b_2 = {{b2}}$ de $\mathbb R^2$ (es decir,
      $\varphi_i(\mathbf b_j) = 1$ si $i = j$ y $0$ si no). ¿Cuánto vale $\varphi_1{{v}}$? Respuesta: un número (fracción «a/b» si hace falta).
    variants:
      - values: {"b1":"(1, 2)","b2":"(1, 3)","v":"(5, 4)"}
        answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
      - values: {"b1":"(2, 1)","b2":"(1, 1)","v":"(3, 7)"}
        answers: ["sha256:e5e0093f285a4fb94c3fcc2ad7fd04edd10d429ccda87a9aa5e4718efadf182e"]
      - values: {"b1":"(1, -1)","b2":"(2, 1)","v":"(6, 0)"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"b1":"(3, 1)","b2":"(2, 1)","v":"(1, 2)"}
        answers: ["sha256:615bdd17c2556f82f384392ea8557f8cc88b03501c759e23093ab0b2a9b5cd48"]
      - values: {"b1":"(1, 1)","b2":"(2, -1)","v":"(4, 10)"}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"b1":"(1, 4)","b2":"(0, 1)","v":"(3, 5)"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: signatura-forma-cuadratica
    tier: 3
    prompt: |
      Clasifica la forma cuadrática $q(x, y, z) = {{q}}$ en $\mathbb R^3$: ¿cuántos coeficientes positivos y cuántos negativos tiene
      una diagonalización (por congruencia)? Respuesta: «positivos;negativos».
    variants:
      - values: {"q":"x^2 + 2y^2 + 3z^2 + 2xy"}
        answers: ["sha256:1b7e2800905196e47689a52a858bf56d29ec93260d62dc5eeecef2a67fe34ed3"]
      - values: {"q":"x^2 - y^2 + 4yz"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"q":"x^2 + y^2 - z^2 + 2yz"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"q":"x^2 + y^2 + z^2 + 4xy"}
        answers: ["sha256:4f40b4a9de5bc65c1e2de0a3645d117978097dde8d2abca26d171dd7de985436"]
      - values: {"q":"-x^2 - 2y^2 - z^2 + 2xz"}
        answers: ["sha256:4678a16a156b8b96e70f49eb04791bcbb641f47e8000b01a5abd834c58bf319f"]
      - values: {"q":"x^2 + 6xy + 9y^2 + z^2"}
        answers: ["sha256:fed72a7858bfce28d12a8e53f92f0b10be7eb2f55a663356fd26e1a0d51695f1"]
  - id: angulo-de-una-isometria
    tier: 3
    type: numero
    sig: 4
    prompt: |
      La matriz ortogonal $Q = {{Q}}$ tiene determinante $1$, así que es un giro alrededor de un eje. ¿Cuál es el ángulo del giro,
      en grados (entre $0$ y $180$)?
    variants:
      - values: {"Q":"\\begin{pmatrix}1 & 0 & 0\\\\ 0 & 0 & -1\\\\ 0 & 1 & 0\\end{pmatrix}"}
        answers: ["sha256:47a060cb6f87d7069c50c6a2aee98b5d714f6e0e5f237d99ead4da772b4a2e00","sha256:2ff01b341ee4f101f8b3c2efb227abc6bbe8d55fa2cf0d69d835e9cac94fb454","sha256:eda3d8127b3704e99b23e44566d04b9573792db480cda342c87f9a951a2461b0"]
      - values: {"Q":"\\begin{pmatrix}-1 & 0 & 0\\\\ 0 & -1 & 0\\\\ 0 & 0 & 1\\end{pmatrix}"}
        answers: ["sha256:6dc55114ae04f177f981108ae43ad594dc5efa70b6bbc00a57f9c7aabc92c3b4","sha256:68f2f1835e0b138304ac8cba1e7a44eb3f8faa9d8c8824df1792ea10c10476e6","sha256:324b82d2675cfb2b77dcfbe09326adce53cb630bc0b2332b62cd010a9d995c63"]
      - values: {"Q":"\\begin{pmatrix}0 & 0 & 1\\\\ 1 & 0 & 0\\\\ 0 & 1 & 0\\end{pmatrix}"}
        answers: ["sha256:0a81cfeb766f0305e9338d12b6e36098f091d28a14f3c335a4297c1d64599e47","sha256:910eb4696df7afeff734f6fa0247405a968485d29abd34c3ac8e4b905b97a8c9","sha256:86703e21237530ac63ce5fcaf6f65fcb5c9ef2ee0734e43155356e99a7d9a04f"]
      - values: {"Q":"\\begin{pmatrix}\\tfrac12 & -\\tfrac{\\sqrt3}{2} & 0\\\\ \\tfrac{\\sqrt3}{2} & \\tfrac12 & 0\\\\ 0 & 0 & 1\\end{pmatrix}"}
        answers: ["sha256:9eb3855567c85cd0722c45877d4c9966ff27955eb46f4231601e4a2b0dcc487c","sha256:3f95ef45e0d14f12837e0de9917c6f4ddac94c17f69522768b03312b54d1ff5c","sha256:97f29cb36ecea002f93e1f0e1ffa565d4e9e8fe71a907ac9753595efb2778c53"]
      - values: {"Q":"\\begin{pmatrix}1 & 0 & 0\\\\ 0 & -\\tfrac12 & -\\tfrac{\\sqrt3}{2}\\\\ 0 & \\tfrac{\\sqrt3}{2} & -\\tfrac12\\end{pmatrix}"}
        answers: ["sha256:379f4ec038b4dce8dd8ccc5acc292004549d54c6553e78c2428374920537edc9","sha256:493872c2a852cb17e68e410b75a6e8d02337e4bb1a5b28c3fe22018f2885ef40","sha256:790688ab49fa0138890d4d60b93c1e0d68a53f6c5740648e82d1f2cf5cf407bd"]
      - values: {"Q":"\\begin{pmatrix}0 & 0 & 1\\\\ 0 & 1 & 0\\\\ -1 & 0 & 0\\end{pmatrix}"}
        answers: ["sha256:4b2c201374c885d78f92c0c57d36560a5581fc93dc1cb68147c3ad8185146500","sha256:14011d6bef1f00749cc26480c68126f70a00e9fa26157c87b53620cb10941aed","sha256:b43de1c242ae7112d37412d226d6e4071e3f34ddb96a27be56d1a9284c494103"]
  - id: r-subespacio-cero
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos conjuntos **no** es un subespacio vectorial?
    options:
      - |
        Las soluciones de $x + y = 0$
      - |
        Las soluciones de $x + y = 1$
      - |
        Los polinomios de grado $\le 3$
      - |
        Las matrices simétricas $2\times2$
    answers: ["sha256:85da1adcad378b3b715197769dede95414a8e08705b797a088f5fe01475743d9"]
  - id: r-dim-polinomios
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué dimensión tiene el espacio de los polinomios reales de grado menor o igual que $5$?
    answers: ["sha256:a62bfac682d9ced595a61e75a161d92e62036bc90b31fc0f90a044fee03887af","sha256:24e998a14908fdf9b0a7438a9ac4b178cd14a658fe884a1e5cd12463d40b98d7","sha256:af4889056ec91de89ac0d11a0ebc7e88e45cb81a16593d00d133fea9ff617912"]
  - id: r-rango-inyectiva
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Puede ser inyectiva una aplicación lineal $\mathbb R^5 \to \mathbb R^3$?
    options:
      - |
        Sí, siempre
      - |
        Solo si es sobreyectiva
      - |
        No: el núcleo tiene dimensión al menos $2$
      - |
        Depende de la base
    answers: ["sha256:ab7aa836ce6100b194a9b8f8114dc9268493055e9b98728d91fe0f0f698d0570"]
  - id: r-no-diagonalizable
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas matrices reales **no** es diagonalizable?
    options:
      - |
        $\begin{pmatrix}2 & 1\\ 0 & 2\end{pmatrix}$
      - |
        $\begin{pmatrix}2 & 0\\ 0 & 3\end{pmatrix}$
      - |
        $\begin{pmatrix}1 & 2\\ 2 & 1\end{pmatrix}$
      - |
        $\begin{pmatrix}0 & 1\\ 1 & 0\end{pmatrix}$
    answers: ["sha256:3cdae280783fe4d31f7dd73c490c71e6282eb1d5250e32ffb697d7f17509cd53"]
  - id: r-congruencia
    tier: 2
    type: opcion
    review: true
    prompt: |
      Al cambiar de base con la matriz $P$, ¿cómo cambia la matriz $A$ de una **forma bilineal**?
    options:
      - |
        $P^{-1}AP$
      - |
        $PAP^{-1}$
      - |
        $A^{\mathsf T}P$
      - |
        $P^{\mathsf T}AP$
    answers: ["sha256:d271c0e7dcfd3f9a8d5ea359bfc7467a7c5f0d2c579445f5bb2129e541b8fa6c"]
  - id: r-det-ortogonal
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué valores puede tener el determinante de una matriz ortogonal ($Q^{\mathsf T}Q = I$)?
    options:
      - |
        Cualquier número positivo
      - |
        $1$ o $-1$
      - |
        Siempre $1$
      - |
        Siempre $0$
    answers: ["sha256:eef5d68bab711460e6899592bd602285c0ae92dbdba88b711e4a8fd2f6aeb5cf"]
  - id: r-cartan
    tier: 3
    type: numero
    review: true
    sig: 6
    prompt: |
      Según Cartan-Dieudonné, ¿cuántas simetrías respecto a rectas hacen falta, como mínimo, para obtener un giro no trivial del plano?
    answers: ["sha256:e50575766d543c5159cc2c4d0adb3a50888a25a563fd60bda811443a577aee37","sha256:47b8fedbb75605d12f6931202663aa3deb6aeb5592e4a0c86893df27fcee3523","sha256:67aab3e43395f063c70a8bfd391e235334cde16ba74f4b237b6dfd606a67805f"]
---

# Álgebra lineal II: espacios vectoriales abstractos, aplicaciones lineales, determinante, autovalores y producto interior

[[mat-algebra-lineal-1]] trabajó con vectores de $\mathbb R^n$ y matrices concretas. Este nodo da el salto a la **estructura**: un espacio
vectorial es cualquier conjunto en el que se pueda sumar y multiplicar por escalares con las reglas de siempre, y con esa abstracción los
polinomios, las funciones, las señales, las imágenes o las palabras de un código corrector de errores se tratan con las mismas herramientas.
Se demuestran los teoremas centrales (dimensión, rango, determinante, diagonalización, Cauchy-Schwarz, proyección ortogonal) y se
practican sobre cuerpos distintos de $\mathbb R$: los racionales exactos, $\mathbb F_2$ y $\mathbb Z/p\mathbb Z$, que son los de la
informática.

## Objetivos

Al terminar sabrás:

1. Reconocer espacios vectoriales sobre cualquier cuerpo, subespacios, bases y dimensión, y demostrar que la dimensión está bien definida.
2. Calcular núcleo, imagen y rango de una aplicación lineal, aplicar el **teorema del rango** y escribir su matriz en cualquier base.
3. Usar el determinante (definición axiomática, propiedades, cofactores, Cramer) y su significado geométrico.
4. Hallar autovalores, autovectores y multiplicidades, decidir si una matriz es diagonalizable y calcular potencias.
5. Ortonormalizar con Gram-Schmidt y proyectar ortogonalmente (mejor aproximación).
6. Hacer eliminación gaussiana sobre $\mathbb F_2$ y $\mathbb Z/p\mathbb Z$.

## Qué debes dominar antes

[[mat-algebra-lineal-1]] (sistemas, matrices, determinantes $2\times2$ y $3\times3$, autovalores de ejemplos) y [[mat-logica-demostraciones]]
(demostraciones, conjuntos y funciones). La aritmética modular de [[mat-matematica-discreta]].

> [!question] Test de entrada
> 1. ¿Son linealmente independientes $(1, 2)$ y $(2, 4)$?
> 2. Calcula $\det\begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}$.
> 3. ¿Cuál es el inverso de $3$ módulo $7$?
>
> Respuestas: no ($(2, 4) = 2(1, 2)$); $-2$; $5$ ($3\cdot5 = 15 \equiv 1$).

## 1. Para qué sirve

- **Física e ingeniería**: los estados de un sistema cuántico son vectores de un espacio abstracto ([[fis-mecanica-cuantica]]); las señales son
  vectores en espacios de funciones ([[ing-senales-sistemas]]).
- **Aprendizaje automático**: datos, pesos y activaciones son vectores y matrices; reducir la dimensión es proyectar ([[ia-aprendizaje-estadistico]]).
- **Informática**: los códigos correctores (en discos, QR, comunicaciones espaciales) son subespacios de $\mathbb F_2^n$; la criptografía y los
  gráficos por ordenador usan matrices sobre cuerpos finitos y transformaciones lineales.
- **Matemáticas**: el álgebra lineal es el lenguaje del análisis funcional, la geometría diferencial y las ecuaciones diferenciales.

## 2. Cuerpos y espacios vectoriales

> [!practico]
> Un espacio vectorial es cualquier colección de cosas que se pueden **sumar** y **multiplicar por un número** con las reglas
> de siempre. Las flechas del plano lo son, pero también los polinomios, las señales de audio o las fotos (se suman píxel a
> píxel). La ventaja de verlo así es que todo lo aprendido con flechas (bases, dimensión, proyecciones) sirve de golpe para
> todas esas cosas.


Un **cuerpo** es un conjunto con suma y producto que cumplen las propiedades habituales (asociativas, conmutativas, distributiva, neutros e
inversos; todo elemento no nulo tiene inverso multiplicativo): $\mathbb Q$, $\mathbb R$, $\mathbb C$, y también $\mathbb F_2 = \{0, 1\}$ con
$1 + 1 = 0$, y $\mathbb Z/p\mathbb Z$ con $p$ primo ([[mat-matematica-discreta]]).

Un **espacio vectorial** sobre un cuerpo $\mathbb K$ es un conjunto $V$ con una suma y un producto por escalares que cumplen ocho axiomas
(asociatividad y conmutatividad de la suma, vector nulo, opuestos, y compatibilidad del producto por escalares con las sumas y con el $1$).
Ejemplos: $\mathbb K^n$; los polinomios de grado $\le n$, $\mathcal P_n$; las matrices $m\times n$; las funciones continuas en $[0, 1]$; las
sucesiones; las soluciones de una ecuación diferencial lineal homogénea.

Un **subespacio** es un subconjunto no vacío cerrado por sumas y por productos por escalares (contiene el $0$). Las soluciones de un sistema
**homogéneo** forman un subespacio; las de uno no homogéneo, no (no contienen el $0$).

Una **combinación lineal** de $v_1, \dots, v_k$ es $\sum a_iv_i$; su **envoltura** (*span*) es el conjunto de todas ellas, el menor subespacio que
los contiene. Son **linealmente independientes** si la única combinación nula es la trivial ($\sum a_iv_i = 0 \Rightarrow$ todos los $a_i = 0$).

## 3. Base y dimensión

> [!practico]
> Una base es un juego mínimo de piezas con el que se construye todo el espacio, sin que sobre ninguna. Puede haber muchas
> bases distintas, pero todas tienen **el mismo número de piezas**: esa es la dimensión. Los polinomios de grado como mucho $2$
> se construyen con $1$, $x$ y $x^2$: tres piezas, dimensión $3$.


Una **base** es una familia linealmente independiente que genera $V$. Todo vector se escribe **de forma única** como combinación de la base (si
hubiera dos escrituras, su diferencia sería una combinación nula no trivial): esos coeficientes son sus **coordenadas**.

**Lema de intercambio (Steinitz).** Si $u_1, \dots, u_m$ son independientes y $w_1, \dots, w_n$ generan $V$, entonces $m \le n$.

> [!formal] Con rigor: idea de la demostración del lema de Steinitz
> *Idea de la demostración.* Se sustituyen uno a uno los $w$ por los $u$: como $w_1, \dots, w_n$ generan, $u_1$ es combinación de ellos con algún
> coeficiente no nulo en cierto $w_j$, que se puede despejar y quitar sin perder la generación. Se repite con $u_2, u_3, \dots$; la independencia de
> los $u$ garantiza que siempre queda un $w$ por quitar. Si $m > n$, al acabarse los $w$ el siguiente $u$ sería combinación de los anteriores:
> contradicción. $\blacksquare$

**Consecuencia.** Todas las bases de un espacio de generación finita tienen el mismo número de elementos: la **dimensión**. $\dim\mathbb K^n = n$,
$\dim\mathcal P_n = n + 1$ (base $1, x, \dots, x^n$), $\dim\mathbb K^{m\times n} = mn$; las matrices simétricas $n\times n$ forman un subespacio de
dimensión $\frac{n(n+1)}{2}$ y las antisimétricas, de $\frac{n(n-1)}{2}$. En un espacio de dimensión $n$, $n$ vectores independientes ya son base.

## 4. Aplicaciones lineales

> [!practico]
> Una aplicación lineal es una transformación que respeta sumas y escalados: transformar una suma es sumar los transformados.
> Lo que se pierde (lo que va a parar al cero) es el **núcleo**, y lo que se alcanza es la **imagen**. El teorema del rango es
> una ley de conservación: las dimensiones que se pierden más las que se alcanzan suman las de partida.


$T: V \to W$ es **lineal** si $T(u + v) = T(u) + T(v)$ y $T(av) = aT(v)$. Su **núcleo** $\ker T = \{v : T(v) = 0\}$ y su **imagen**
$\operatorname{im}T$ son subespacios, y $T$ es inyectiva si y solo si $\ker T = \{0\}$ (pues $T(u) = T(v) \iff T(u - v) = 0$).

**Teorema del rango.** Si $V$ tiene dimensión finita, $\dim V = \dim\ker T + \dim\operatorname{im}T$.

> [!formal] Con rigor: demostración del teorema del rango
> *Demostración.* Sea $u_1, \dots, u_k$ una base de $\ker T$, ampliada a una base $u_1, \dots, u_k, v_1, \dots, v_r$ de $V$. Los $T(v_1), \dots, T(v_r)$ generan
> la imagen (los $T(u_i)$ son nulos) y son independientes: si $\sum a_iT(v_i) = 0$, entonces $\sum a_iv_i \in \ker T$, es combinación de los $u$, y por
> la independencia de la base ampliada todos los $a_i$ son $0$. Luego $\dim\operatorname{im}T = r$ y $\dim V = k + r$. $\blacksquare$

Consecuencias: un sistema $A\mathbf x = \mathbf b$ de $m$ ecuaciones y $n$ incógnitas con rango $r$ tiene, si es compatible, un espacio de soluciones
de dimensión $n - r$; una aplicación entre espacios de la **misma** dimensión es inyectiva si y solo si es sobreyectiva.

**Matriz de una aplicación.** Fijadas bases, la columna $j$ de la matriz de $T$ son las coordenadas de la imagen por $T$ del $j$-ésimo vector de la base.
Componer aplicaciones es multiplicar matrices (por eso el producto se define como se define). **Cambio de base**: si las columnas de $P$ son los
vectores de una nueva base, la matriz de $T$ en ella es $P^{-1}AP$. Matrices que representan la misma aplicación en bases distintas son
**semejantes**, y comparten traza, determinante y polinomio característico.

**Ejemplo resuelto 1.** $T(x, y) = (3x + y,\ x + 3y)$ en la base $\{(1, 1), (1, -1)\}$: $T(1, 1) = (4, 4) = 4(1, 1)$ y $T(1, -1) = (2, -2) = 2(1, -1)$, así que
la matriz es $\operatorname{diag}(4, 2)$: en esa base, $T$ solo estira cada eje.

## 5. Determinante

> [!practico]
> El determinante es el factor por el que una transformación multiplica los volúmenes, con signo según si da la vuelta a la
> orientación. De ahí salen casi todas sus propiedades: si aplasta el espacio (volumen cero) no se puede deshacer, y hacer dos
> transformaciones seguidas multiplica sus factores.


El **determinante** es la única función de las filas de una matriz $n\times n$ que es **lineal en cada fila**, **alternada** (cambia de signo al
intercambiar dos filas, y por tanto vale $0$ si dos filas son iguales) y vale $1$ en la identidad. De esos tres axiomas salen todas sus
propiedades:

- sumar a una fila un múltiplo de otra no lo cambia; intercambiar dos filas lo cambia de signo; multiplicar una fila por $c$ lo multiplica por $c$
  (así se calcula por eliminación: es el producto de los pivotes, con el signo de los intercambios);
- $\det A \ne 0 \iff A$ es invertible $\iff$ sus filas son independientes;
- $\det(AB) = \det A\,\det B$, $\det A^{\mathsf T} = \det A$, $\det A^{-1} = 1/\det A$, $\det(cA) = c^n\det A$ para $A$ de tamaño $n$;
- **desarrollo por cofactores**: $\det A = \sum_j (-1)^{i+j}a_{ij}\det A_{ij}$, y $A^{-1} = \frac{1}{\det A}\operatorname{adj}A$; **regla de Cramer**:
  $x_k = \det A_k/\det A$, con $A_k$ la matriz con la columna $k$ sustituida por $\mathbf b$ (útil en teoría y para sistemas pequeños; para sistemas
  grandes, eliminación).

**Significado geométrico.** $\lvert\det A\rvert$ es el factor por el que $A$ multiplica áreas (en $\mathbb R^2$) o volúmenes (en $\mathbb R^n$), y su
signo indica si conserva la orientación. Es el jacobiano del cambio de variables de [[mat-calculo-multivariable]].

## 6. Autovalores y diagonalización

> [!practico]
> Diagonalizar es encontrar los ejes en los que una transformación solo estira, sin girar nada. Vista desde esos ejes, es
> tan simple como multiplicar cada coordenada por un número, y aplicarla mil veces es elevar esos números a mil. No toda
> transformación tiene ejes así (un cizallamiento, como empujar de lado una baraja de cartas, no los tiene).


$\lambda$ es **autovalor** de $A$ si existe $\mathbf v \ne 0$ con $A\mathbf v = \lambda\mathbf v$, es decir, si $\det(A - \lambda I) = 0$: las raíces del
**polinomio característico**. El conjunto de autovectores de $\lambda$ más el $0$ es el **autoespacio** $\ker(A - \lambda I)$.

- **Multiplicidad algebraica**: multiplicidad de $\lambda$ como raíz; **geométrica**: dimensión de su autoespacio. Siempre
  $1 \le \text{geométrica} \le \text{algebraica}$.
- **Teorema.** Autovectores de autovalores **distintos** son linealmente independientes. *(Inducción: si
  $\sum a_i\mathbf v_i = 0$, aplicando $A - \lambda_k I$ se elimina $\mathbf v_k$ y queda una combinación nula de menos vectores.)*
- $A$ ($n\times n$) es **diagonalizable** ($A = PDP^{-1}$, $D$ diagonal) si y solo si tiene $n$ autovectores independientes, es decir, si la suma
  de las multiplicidades geométricas es $n$. En particular, si tiene $n$ autovalores distintos.
- $\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$ **no** es diagonalizable: su único autovalor, $1$, tiene multiplicidad algebraica 2 y geométrica 1.

**Para qué.** Si $A = PDP^{-1}$, entonces $A^k = PD^kP^{-1}$: así se calculan potencias, recurrencias lineales (Fibonacci) y sistemas de
ecuaciones diferenciales ([[mat-ecuaciones-diferenciales]]). La traza es la suma de los autovalores y el determinante, su producto.

**Ejemplo resuelto 2.** $A = \begin{pmatrix}4 & 1\\ 2 & 3\end{pmatrix}$: $\lambda^2 - 7\lambda + 10 = 0$, $\lambda = 5, 2$. Autovectores: $(1, 1)$ para $5$ y $(1, -2)$
para $2$. Con $P = \begin{pmatrix}1 & 1\\ 1 & -2\end{pmatrix}$, $A^k = P\operatorname{diag}(5^k, 2^k)P^{-1}$, y para $k$ grande $A^k\mathbf x$ apunta casi en
la dirección de $(1, 1)$ (el autovalor dominante): es el **método de las potencias** con el que se calcula el PageRank.

## 7. Producto interior y ortogonalidad

> [!practico]
> El producto interior permite medir longitudes y ángulos en cualquier espacio, también entre funciones o señales. Con él,
> «proyectar» es buscar la mejor aproximación: la sombra de un vector sobre un plano es el punto del plano más cercano a él.
> Comprimir una foto o una canción es, en el fondo, quedarse con la proyección sobre unas pocas direcciones importantes.


Un **producto interior** en un espacio real es una operación $\langle u, v\rangle$ simétrica, lineal en cada argumento y definida positiva
($\langle v, v\rangle > 0$ si $v \ne 0$). Además del producto escalar de $\mathbb R^n$, $\langle f, g\rangle = \int_0^1 fg$ es un producto interior entre
funciones. Define la **norma** $\lVert v\rVert = \sqrt{\langle v, v\rangle}$ y el ángulo.

**Desigualdad de Cauchy-Schwarz.** $\lvert\langle u, v\rangle\rvert \le \lVert u\rVert\,\lVert v\rVert$.

> [!formal] Con rigor: demostración de Cauchy-Schwarz
> *Demostración.* Para todo $t$ real, $0 \le \lVert u - tv\rVert^2 = \lVert u\rVert^2 - 2t\langle u, v\rangle + t^2\lVert v\rVert^2$. Un polinomio de grado 2 en $t$
> que nunca es negativo tiene discriminante $\le 0$: $4\langle u, v\rangle^2 - 4\lVert u\rVert^2\lVert v\rVert^2 \le 0$. $\blacksquare$ De ella sale la
> desigualdad triangular.

**Gram-Schmidt.** De una base cualquiera $v_1, v_2, \dots$ se obtiene una **ortonormal**: $w_1 = v_1$; $w_k = v_k - \sum_{j<k}\frac{\langle v_k, w_j\rangle}{\langle w_j, w_j\rangle}w_j$
(se resta a cada vector su componente sobre los anteriores) y se normaliza. Escrito con matrices, es la factorización $A = QR$.

**Proyección ortogonal y mejor aproximación.** Si $W$ es un subespacio con base ortonormal $e_1, \dots, e_k$, la proyección
$p = \sum\langle v, e_i\rangle e_i$ es el punto de $W$ **más cercano** a $v$ ($v - p$ es perpendicular a $W$ y Pitágoras hace el resto). Es la base de
los mínimos cuadrados ([[mat-analisis-numerico]]) y de las series de Fourier (proyectar una señal sobre senos y cosenos).

## 7b. Espacio cociente y espacio dual

> [!practico]
> El **cociente** consiste en «no distinguir» lo que difiere en un subespacio: si identificas todos los puntos de cada
> recta paralela a un eje, el plano se convierte en una sola recta (lo que queda es la otra coordenada). El **dual** es el
> espacio de las «reglas de medir» lineales: funciones que a cada vector le asignan un número, como «quedarse con la
> segunda coordenada» o «sumar todas las componentes».

**Cociente.** Si $W \subseteq V$ es un subespacio, $u \sim v \iff u - v \in W$ es de equivalencia ([[mat-conjuntos-numeros]]); la
clase de $v$ es $v + W$ y el conjunto cociente $V/W$ es un espacio vectorial con $(u + W) + (v + W) = (u + v) + W$ y
$a(v + W) = av + W$ (bien definidas porque $W$ es subespacio). Si $V$ tiene dimensión finita,
$\dim V/W = \dim V - \dim W$. **Primer teorema de isomorfía:** para $T : V \to U$ lineal, $V/\ker T \cong \operatorname{im}T$ (de
aquí sale otra vez el teorema del rango).

**Dual.** $V^* = \{\varphi : V \to \mathbb K \text{ lineal}\}$. Si $v_1, \dots, v_n$ es una base de $V$, las formas $\varphi_i$ con
$\varphi_i(v_j) = 1$ si $i = j$ y $0$ si no forman la **base dual**, así que $\dim V^* = \dim V$. *Ejemplo:* en $\mathbb R^2$ con
la base $(1, 1), (1, -1)$, la base dual es $\varphi_1(x, y) = \frac{x + y}{2}$, $\varphi_2(x, y) = \frac{x - y}{2}$: dan justo las
coordenadas en esa base. El **anulador** de $W$, $W^0 = \{\varphi : \varphi|_W = 0\}$, tiene dimensión $\dim V - \dim W$.

## 7c. Formas bilineales y cuadráticas

> [!practico]
> Una forma cuadrática es una «energía» o una «curvatura» escrita con cuadrados y productos cruzados, como
> $x^2 + 4xy + y^2$. Clasificarla es saber si siempre es positiva (un cuenco), siempre negativa (una cúpula) o cambia de
> signo (una silla de montar). Eso decide, por ejemplo, si un punto crítico de una función es mínimo, máximo o silla.

Una **forma bilineal** $f : V \times V \to \mathbb K$ es lineal en cada argumento; en una base, $f(u, v) = \mathbf u^\top A\mathbf v$, y al cambiar
de base con $P$ la matriz pasa a $P^\top AP$ (**congruencia**, no semejanza). Si es simétrica, $q(v) = f(v, v)$ es una **forma
cuadrática**. Sobre $\mathbb R$, toda forma cuadrática se diagonaliza por congruencia (completando cuadrados, o con una base
ortonormal de autovectores de $A$), y por la **ley de inercia de Sylvester** el número de coeficientes positivos, negativos y
nulos de cualquier diagonalización es siempre el mismo (la **signatura**). *Ejemplo:*
$x^2 + 4xy + y^2 = (x + 2y)^2 - 3y^2$: un cuadrado positivo y uno negativo, **indefinida**. Criterio de los menores
principales (Sylvester): $q$ es definida positiva si y solo si todos los menores principales $\Delta_1, \Delta_2, \dots$ son
$> 0$. El estudio completo, con el teorema espectral, está en [[mat-algebra-lineal-avanzada]].

## 7d. Isometrías vectoriales

> [!practico]
> Una isometría es un movimiento que no deforma nada: conserva longitudes y ángulos. En el plano (fijando el origen) solo
> hay dos clases, los **giros** y las **simetrías** respecto a una recta; en el espacio, los giros alrededor de un eje, las
> simetrías respecto a un plano y la combinación de un giro con una simetría.

Una aplicación lineal $T$ de un espacio euclídeo es una **isometría** si $\lVert Tv\rVert = \lVert v\rVert$ para todo $v$; equivale a
conservar el producto interior, y en una base ortonormal su matriz es **ortogonal**: $Q^\top Q = I$, así que $\det Q = \pm1$.

- **Dimensión 2.** $\det = 1$: giros $\begin{pmatrix}\cos\theta & -\sin\theta\\ \sin\theta & \cos\theta\end{pmatrix}$. $\det = -1$: simetrías
  respecto a una recta, $\begin{pmatrix}\cos\theta & \sin\theta\\ \sin\theta & -\cos\theta\end{pmatrix}$ (respecto a la recta de ángulo $\theta/2$).
- **Dimensión 3.** Toda isometría tiene un eje en el que actúa como $\pm1$. $\det = 1$: giro de ángulo $\theta$ alrededor de un eje,
  con $\operatorname{tr}Q = 1 + 2\cos\theta$. $\det = -1$: simetría respecto a un plano, o giro seguido de la simetría respecto al
  plano perpendicular al eje (con $\operatorname{tr}Q = -1 + 2\cos\theta$).
- **Teorema de Cartan-Dieudonné.** En un espacio euclídeo de dimensión $n$, toda isometría es composición de **como mucho $n$
  simetrías** respecto a hiperplanos. (En el plano: un giro es la composición de dos simetrías cuyas rectas forman un ángulo
  $\theta/2$.)

*Ejemplo:* $Q = \begin{pmatrix}0 & -1 & 0\\ 1 & 0 & 0\\ 0 & 0 & 1\end{pmatrix}$ tiene $\det Q = 1$ y $\operatorname{tr}Q = 1$, luego $1 + 2\cos\theta = 1$:
es un giro de $90^\circ$ alrededor del eje $z$ (que queda fijo).

## 8. Otros cuerpos: $\mathbb F_2$ y $\mathbb Z/p\mathbb Z$

> [!practico]
> Nada de lo anterior exige que los números sean los de siempre: basta poder sumar, restar, multiplicar y dividir. Con solo
> $0$ y $1$ (y $1 + 1 = 0$), sumar es la operación XOR de los ordenadores, y el álgebra lineal se convierte en la de los
> códigos que corrigen errores en un QR rayado o en una transmisión desde una sonda espacial.


Todo lo anterior que no usa orden ni raíces cuadradas vale sobre cualquier cuerpo: eliminación gaussiana, rango, determinante, inversas. Sobre
$\mathbb F_2$, sumar filas es hacer **XOR** bit a bit, y una fila de $n$ bits cabe en un entero. Los **códigos lineales** son subespacios de
$\mathbb F_2^n$: el código de Hamming $[7, 4]$ codifica 4 bits en 7 (un subespacio de dimensión 4) y corrige cualquier error en un bit. Sobre
$\mathbb Z/p\mathbb Z$ se divide multiplicando por el inverso modular; así trabajan muchos algoritmos criptográficos y de cómputo exacto.

```python
from fractions import Fraction as F


def det(M):
    """Determinante exacto por eliminación sobre Q."""
    M = [[F(x) for x in fila] for fila in M]
    n, d = len(M), F(1)
    for c in range(n):
        p = next((i for i in range(c, n) if M[i][c] != 0), None)
        if p is None:
            return F(0)
        if p != c:
            M[c], M[p] = M[p], M[c]
            d = -d
        d *= M[c][c]
        for i in range(c + 1, n):
            f = M[i][c] / M[c][c]
            M[i] = [a - f * b for a, b in zip(M[i], M[c])]
    return d


def rango_f2(filas):
    """Rango sobre F2 con filas codificadas como enteros: la suma es XOR."""
    base = []
    for x in filas:
        for b in base:
            x = min(x, x ^ b)
        if x:
            base.append(x)
    return len(base)


assert det([[4, 1], [2, 3]]) == 10                       # producto de autovalores 5 · 2
assert det([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) == 0       # filas dependientes
# Matriz generadora del código de Hamming [7,4]: sus 4 filas son independientes sobre F2.
G = [0b1000110, 0b0100101, 0b0010011, 0b0001111]
assert rango_f2(G) == 4
assert rango_f2([0b110, 0b011, 0b101]) == 2              # 110 ⊕ 011 = 101 sobre F2 (sobre Q tendría rango 3)
assert det([[1, 1, 0], [0, 1, 1], [1, 0, 1]]) == 2
```

## 9. Errores típicos

- Llamar subespacio a un conjunto que no contiene el $0$ (soluciones de un sistema no homogéneo, una recta que no pasa por el origen).
- Confundir «generan» con «son independientes»; olvidar que una base necesita las dos cosas.
- Aplicar el teorema del rango con la dimensión del espacio de **llegada** en lugar de la de **salida**.
- Calcular un determinante grande por cofactores ($n!$ operaciones) en vez de por eliminación ($n^3$).
- Concluir que una matriz es diagonalizable porque su polinomio característico tiene raíces (hace falta que las multiplicidades geométricas sumen $n$).
- Hacer Gram-Schmidt sin restar las proyecciones sobre **todos** los vectores anteriores, o proyectar sobre una base no ortogonal con la fórmula de las bases ortonormales.
- Calcular el rango sobre $\mathbb Q$ cuando el problema pide $\mathbb F_2$ (pueden diferir).

## 10. Resumen

- Espacio vectorial sobre un cuerpo; subespacio; envoltura; independencia; base; dimensión (Steinitz).
- Lineal: núcleo, imagen; $\dim V = \dim\ker + \dim\operatorname{im}$; matriz en una base; cambio de base $P^{-1}AP$.
- Determinante: multilineal, alternado, normalizado; producto de pivotes; $\det(AB) = \det A\det B$; volumen; Cramer.
- Autovalores: $\det(A - \lambda I) = 0$; multiplicidades; diagonalizable $\iff$ $n$ autovectores independientes; $A^k = PD^kP^{-1}$.
- Producto interior, Cauchy-Schwarz, Gram-Schmidt, proyección como mejor aproximación.
- Cociente $V/W$ ($\dim V - \dim W$) y dual $V^*$ (base dual); formas cuadráticas por congruencia, signatura (Sylvester).
- Isometrías: $Q^\top Q = I$; giros y simetrías en dimensión 2 y 3; Cartan-Dieudonné.
- Mismos algoritmos sobre $\mathbb F_2$ (XOR) y $\mathbb Z/p\mathbb Z$ (inverso modular).

## Reto

Calcula tres enteros.

- **a.** El determinante de la matriz $8 \times 8$ con entradas $M_{ij} = (i^j + j) \bmod 11$, para $1 \le i, j \le 8$.
- **b.** El rango **sobre $\mathbb{F}_2$** de la matriz $16 \times 16$ con $B_{ij} = 1$ si $\gcd(i, j) = 1$ y $B_{ij} = 0$ en otro caso, para
  $1 \le i, j \le 16$.
- **c.** $F_{10^{18}} \bmod (10^9 + 7)$. Valor de control: $F_{100} \bmod (10^9 + 7) = 687995182$.

Formato de la flag, con los tres valores en decimal separados por guiones bajos y el signo de **a** si es negativo: `EXODUS{a_b_c}`

## Repaso: lo que debe quedarte dentro de un mes

1. Base = independiente + generadora; todas las bases tienen el mismo tamaño.
2. Teorema del rango: $n = \dim\ker + \operatorname{rango}$.
3. Las tres propiedades que definen el determinante y que $\det$ es el producto de los pivotes.
4. Diagonalizable si hay $n$ autovectores independientes; $A^k = PD^kP^{-1}$.
5. Gram-Schmidt y la proyección ortogonal como punto más cercano.
6. Matriz de una forma: cambia por congruencia $P^\top AP$; una isometría de $\mathbb R^3$ con $\det = 1$ es un giro con $\operatorname{tr} = 1 + 2\cos\theta$.

## Siguiente

[[mat-algebra-lineal-avanzada]] (teorema espectral, descomposición en valores singulares, forma de Jordan, exponencial de matrices),
[[mat-estructuras-algebraicas]] (grupos, anillos y cuerpos) y [[fis-mecanica-cuantica]].
