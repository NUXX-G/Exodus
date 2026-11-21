---
id: mat-matematica-discreta
title: "Matemática discreta: lógica, inducción, recurrencias, grafos y aritmética modular"
area: matematicas
trunk_level: 7
prerequisites: [mat-combinatoria-probabilidad-basica, mat-algebra-secundaria, mat-logica-demostraciones]
academic_sources:
  - "Bujalance García, E. et al. Elementos de Matemática Discreta, 3.ª ed. Sanz y Torres: texto base de «Matemática discreta» (61021051), 1.º del Grado en Matemáticas y del doble grado de la UNED. Guía 2026-27: tema 1, teoría elemental de números (Euclides, factorización, inducción, ecuaciones diofánticas, congruencias, sistemas de numeración); tema 2, grafos (eulerianos y hamiltonianos, exploración, mapas y coloraciones); tema 3, combinatoria (variaciones y combinaciones, binomio, inclusión-exclusión, recurrencias)."
  - "Rosen, K. H. Discrete Mathematics and Its Applications, 8ª ed. McGraw-Hill, 2019."
  - "Graham, R. L.; Knuth, D. E.; Patashnik, O. Concrete Mathematics: A Foundation for Computer Science, 2ª ed. Addison-Wesley, 1994."
  - "Lehman, E.; Leighton, F. T.; Meyer, A. R. Mathematics for Computer Science. MIT OpenCourseWare (2018, gratuito)."
  - "Diestel, R. Graph Theory, 5ª ed. Springer, 2017."
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
hints:
  - "Concepto: la matemática discreta estudia lo que se cuenta, no lo que se mide: conjuntos, grafos, restos. Casi todo se prueba por inducción o con un argumento de conteo; casi todo se comprueba con un programa que enumere los casos pequeños. Para una recurrencia lineal, busca soluciones de la forma r^n y resuelve la ecuación característica."
  - "Herramienta: enumera con bucles o con itertools (product, permutations, combinations) para comprobar tus fórmulas en tamaños pequeños; pow(a, b, m) calcula potencias modulares exactas y pow(a, -1, m) el inverso modular; math.comb y math.factorial para combinatoria."
  - "Documentación oficial: docs.python.org/3/library/itertools.html, docs.python.org/3/library/math.html (comb, gcd, perm); pow con tres argumentos en docs.python.org/3/library/functions.html#pow; Rosen, capítulos de lógica, inducción, recurrencias, grafos y teoría de números."
exercises:
  - id: filas-tabla-de-verdad
    tier: 1
    prompt: |
      ¿Cuántas filas (combinaciones de valores de verdad) tiene la tabla de verdad de una fórmula con ${{n}}$ variables proposicionales? Respuesta: un entero.
    variants:
      - values: {"n":7}
        answers: ["sha256:2747b7c718564ba5f066f0523b03e17f6a496b06851333d2d59ab6d863225848"]
      - values: {"n":3}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"n":10}
        answers: ["sha256:e39eef82f61b21e2e7f762fcc4307358f165757f2e77ec855d6992f7e0191932"]
      - values: {"n":4}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
      - values: {"n":12}
        answers: ["sha256:8b926d75599a618e21f1341318e66517be26e18cc7496783d2b59758c1333be8"]
      - values: {"n":6}
        answers: ["sha256:a68b412c4282555f15546cf6e1fc42893b7e07f271557ceb021821098dd66c1b"]
  - id: partes-de-un-conjunto
    tier: 1
    prompt: |
      Si $A$ tiene ${{n}}$ elementos, ¿cuántos subconjuntos tiene $A$ (contando el vacío y el propio $A$)? Respuesta: un entero.
    variants:
      - values: {"n":8}
        answers: ["sha256:51e8ea280b44e16934d4d611901f3d3afc41789840acdff81942c2f65009cd52"]
      - values: {"n":4}
        answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
      - values: {"n":10}
        answers: ["sha256:e39eef82f61b21e2e7f762fcc4307358f165757f2e77ec855d6992f7e0191932"]
      - values: {"n":3}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"n":12}
        answers: ["sha256:8b926d75599a618e21f1341318e66517be26e18cc7496783d2b59758c1333be8"]
      - values: {"n":5}
        answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: apretones-de-manos
    tier: 1
    prompt: |
      En una reunión de ${{n}}$ personas todas se dan la mano **una vez** con cada una de las demás. ¿Cuántos apretones hay? Respuesta: un entero.
    variants:
      - values: {"n":16}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"n":20}
        answers: ["sha256:2397346b45823e070f6fc72ac94c0a999d234c472479f0e26b30cdf5942db854"]
      - values: {"n":9}
        answers: ["sha256:76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"]
      - values: {"n":30}
        answers: ["sha256:5f2703a5211db19a9020f7443f6a440fbc95cda90b7c2d53912f5ce47d050056"]
      - values: {"n":7}
        answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
      - values: {"n":50}
        answers: ["sha256:6ecf763ff6e7cef7b47e6611e1bf76fe2608a2e32a97b2d88b083ae1d8d02c82"]
  - id: implicacion-logica
    tier: 2
    prompt: |
      ¿En cuántas de las $8$ asignaciones de valores de verdad a $p, q, r$ es **verdadera** la proposición ${{f}}$? Respuesta: un entero.
    variants:
      - values: {"f":"(p \\land q) \\rightarrow r"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"f":"p \\rightarrow (q \\lor r)"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"f":"(p \\rightarrow q) \\rightarrow r"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"f":"(p \\lor \\lnot q) \\rightarrow r"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"f":"\\lnot p \\rightarrow (q \\land r)"}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"f":"(p \\leftrightarrow q) \\rightarrow \\lnot r"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: suma-de-cuadrados
    tier: 2
    prompt: |
      Calcula $\displaystyle\sum_{k=1}^{{{n}}}k^2$ (se demuestra por inducción que vale $\frac{n(n+1)(2n+1)}{6}$). Respuesta: un entero.
    variants:
      - values: {"n":50}
        answers: ["sha256:c973fc1ce47162f954e6fd36deec493abbc51e54dfea131efc29a62a13b259a7"]
      - values: {"n":25}
        answers: ["sha256:c89fe5b7a007332d70f5e983d19b73c176c33eb478cff948466163aeff9e3016"]
      - values: {"n":100}
        answers: ["sha256:7b683a1ee3dbf9bc30529b3c2c9e5e8e48c05c91f45551b2869712fb38b9f561"]
      - values: {"n":12}
        answers: ["sha256:2099a9b5f777e242d1f9e19d27e232cc71e2fa7964fc988a319fce5671ca7f73"]
      - values: {"n":60}
        answers: ["sha256:cde5e7417382c60c48a4cf2555383ed86276cab1a1d6e2e9900b59ea92a35292"]
      - values: {"n":35}
        answers: ["sha256:a0082f39b13a624648454b6efc4084c606923ddc45176614bafcfb23d98fed02"]
  - id: recurrencia-lineal
    tier: 2
    prompt: |
      La sucesión cumple $a_n = {{c1}}a_{n-1} {{c2}}a_{n-2}$ con $a_0 = {{a0}}$ y $a_1 = {{a1}}$. ¿Cuánto vale $a_{{{N}}}$? (Pista: la ecuación característica tiene raíces ${{r1}}$ y ${{r2}}$.) Respuesta: un entero.
    variants:
      - values: {"c1":4,"c2":"- 3","a0":2,"a1":5,"N":10,"r1":1,"r2":3}
        answers: ["sha256:42cfad4b5145bb272d54a3bac447135d441816e0cfed69b9dc8843722c1341b4"]
      - values: {"c1":5,"c2":"- 6","a0":1,"a1":4,"N":8,"r1":2,"r2":3}
        answers: ["sha256:d89d49dcbce018f644ff558dd464689251c909b3fb03b181efffc12a4c205ea8"]
      - values: {"c1":5,"c2":"- 4","a0":0,"a1":3,"N":9,"r1":1,"r2":4}
        answers: ["sha256:40d314f15bb6afc3fb91cbc1a8bda927f22e6b74f2aa20900a0806588552e68c"]
      - values: {"c1":7,"c2":"- 10","a0":1,"a1":1,"N":7,"r1":2,"r2":5}
        answers: ["sha256:e6950ff3af0faba770c31530543c462bda91a7400d1f75a11c7a40391449886f"]
      - values: {"c1":3,"c2":"- 2","a0":3,"a1":4,"N":15,"r1":1,"r2":2}
        answers: ["sha256:b6674a8585ad9e471318ab51012886e494bd47b926344911f8026e4faac8183f"]
      - values: {"c1":7,"c2":"- 12","a0":2,"a1":7,"N":6,"r1":3,"r2":4}
        answers: ["sha256:90b303a74db7b55640caa82bce2ab14397571a314027aa78430e2cd91c3c4c23"]
  - id: relaciones-de-equivalencia
    tier: 2
    prompt: |
      ¿Cuántas **relaciones de equivalencia** distintas existen sobre un conjunto de ${{n}}$ elementos? (Cada una corresponde a una partición del conjunto.) Respuesta: un entero.
    variants:
      - values: {"n":5}
        answers: ["sha256:41cfc0d1f2d127b04555b7246d84019b4d27710a3f3aff6e7764375b1e06e05d"]
      - values: {"n":3}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"n":10}
        answers: ["sha256:f806927e48c183e3401a6cb1442fefda559f0a9565c111a9b69e44e199aa63a7"]
      - values: {"n":7}
        answers: ["sha256:30e26cef13a6dbbf0e3035f8c16f55670f4e468e97ac7dad43798621da636abf"]
      - values: {"n":9}
        answers: ["sha256:1660a73afbecbfda18356e0d31c7b8cf311e9cc2fbc3639386752dc1066b6309"]
      - values: {"n":8}
        answers: ["sha256:1f74494f923e9bf4bedc9968f0418824c2b298bd83009812a45e547f6733ac7b"]
  - id: funciones-sobreyectivas
    tier: 2
    prompt: |
      ¿Cuántas funciones **sobreyectivas** hay de un conjunto de ${{m}}$ elementos a uno de ${{n}}$ elementos? (Usa inclusión-exclusión.) Respuesta: un entero.
    variants:
      - values: {"m":7,"n":3}
        answers: ["sha256:a78000a5ff6306012360b87357e93eb04bd07897b57167459c36c70215ddbc70"]
      - values: {"m":5,"n":2}
        answers: ["sha256:624b60c58c9d8bfb6ff1886c2fd605d2adeb6ea4da576068201b6c6958ce93f4"]
      - values: {"m":6,"n":4}
        answers: ["sha256:c649b15e769148e6b199b7a671140d60c77847fce6fe17277723dc91f0b27d4c"]
      - values: {"m":7,"n":2}
        answers: ["sha256:65a699905c02619370bcf9207f5a477c3d67130ca71ec6f750e07fe8d510b084"]
      - values: {"m":5,"n":4}
        answers: ["sha256:6af1f692e9496c6d0b668316eccb93276ae6b6774fa728aac31ff40a38318760"]
      - values: {"m":8,"n":3}
        answers: ["sha256:f516cec15df8e1a5659ddf3514d68d98d2fd24f5b667dd495678968e296f69e8"]
  - id: aristas-de-k8
    tier: 2
    prompt: |
      El grafo completo $K_{{{n}}}$ tiene una arista entre cada par de sus ${{n}}$ vértices. ¿Cuántas aristas tiene? Respuesta: un entero.
    variants:
      - values: {"n":10}
        answers: ["sha256:811786ad1ae74adfdd20dd0372abaaebc6246e343aebd01da0bfc4c02bf0106c"]
      - values: {"n":6}
        answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
      - values: {"n":14}
        answers: ["sha256:1da51b8d8ff98f6a48f80ae79fe3ca6c26e1abb7b7d125259255d6d2b875ea08"]
      - values: {"n":20}
        answers: ["sha256:2397346b45823e070f6fc72ac94c0a999d234c472479f0e26b30cdf5942db854"]
      - values: {"n":5}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
      - values: {"n":12}
        answers: ["sha256:3ada92f28b4ceda38562ebf047c6ff05400d4c572352a1142eedfef67d21e662"]
  - id: hojas-de-un-arbol
    tier: 2
    prompt: |
      Un árbol tiene exactamente ${{k}}$ vértices de grado ${{d}}$ y todos los demás son hojas (grado $1$). ¿Cuántas hojas tiene? (Usa que la suma de los grados es $2(n - 1)$ en un árbol de $n$ vértices.) Respuesta: un entero.
    variants:
      - values: {"k":2,"d":4}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"k":4,"d":3}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"k":6,"d":3}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"k":3,"d":4}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"k":5,"d":3}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
      - values: {"k":2,"d":6}
        answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: inverso-modular
    tier: 3
    prompt: |
      Halla el inverso de ${{a}}$ módulo ${{m}}$: el entero $x$ con $0 < x < {{m}}$ tal que ${{a}}x \equiv 1 \pmod{{{m}}}$. Respuesta: un entero.
    variants:
      - values: {"a":5,"m":26}
        answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
      - values: {"a":7,"m":30}
        answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
      - values: {"a":3,"m":40}
        answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
      - values: {"a":17,"m":100}
        answers: ["sha256:2858dcd1057d3eae7f7d5f782167e24b61153c01551450a628cee722509f6529"]
      - values: {"a":9,"m":28}
        answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
      - values: {"a":23,"m":60}
        answers: ["sha256:31489056e0916d59fe3add79e63f095af3ffb81604691f21cad442a85c7be617"]
  - id: pequeno-teorema-de-fermat
    tier: 3
    prompt: |
      Calcula ${{a}}^{{{e}}} \bmod {{p}}$. (Pista: ${{p}}$ es primo, así que ${{a}}^{{{p1}}} \equiv 1 \pmod{{{p}}}$ si ${{p}} \nmid {{a}}$.) Respuesta: un entero.
    variants:
      - values: {"a":2,"e":101,"p":7,"p1":6}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"a":5,"e":200,"p":11,"p1":10}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"a":3,"e":1001,"p":13,"p1":12}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"a":10,"e":77,"p":7,"p1":6}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"a":6,"e":123,"p":17,"p1":16}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"a":4,"e":50,"p":5,"p1":4}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: desarreglos
    tier: 3
    prompt: |
      Un **desarreglo** es una permutación sin puntos fijos (ningún elemento queda en su sitio). ¿Cuántos desarreglos tiene un conjunto de ${{n}}$ elementos? ($D_n = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}$.) Respuesta: un entero.
    variants:
      - values: {"n":6}
        answers: ["sha256:768b84ef05f655d57fe22d488451f075365f6cd18a13073466aa826cc0ebdbfb"]
      - values: {"n":5}
        answers: ["sha256:71ee45a3c0db9a9865f7313dd3372cf60dca6479d46261f3542eb9346e4a04d6"]
      - values: {"n":7}
        answers: ["sha256:f7ec2d2600c8998dd7ebb42ea2367dc30615d60a801383b4bcb319a5b376e6aa"]
      - values: {"n":3}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"n":9}
        answers: ["sha256:3b5af05b757b693c9ef7ff46596c5d438c186b36776795f24aec44fc044a3904"]
      - values: {"n":10}
        answers: ["sha256:ec199b60bdb1fca588112f89d6dc6aa589f8e646fc4954a22f0c35e01371a46d"]
  - id: cadenas-sin-unos-seguidos
    tier: 3
    prompt: |
      ¿Cuántas cadenas binarias de longitud ${{n}}$ **no** contienen dos unos consecutivos? (Sale una sucesión de Fibonacci.) Respuesta: un entero.
    variants:
      - values: {"n":10}
        answers: ["sha256:5ec1a0c99d428601ce42b407ae9c675e0836a8ba591c8ca6e2a2cf5563d97ff0"]
      - values: {"n":8}
        answers: ["sha256:02d20bbd7e394ad5999a4cebabac9619732c343a4cac99470c03e23ba2bdc2bc"]
      - values: {"n":20}
        answers: ["sha256:bb0c30cc3cd79a7b954b6a58338b43ab5c258562b868a12e26fa432eed432da9"]
      - values: {"n":6}
        answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
      - values: {"n":18}
        answers: ["sha256:39edd6529d30bf3454148be0f60deeb5300781a431ea1c273e4a85c831ad505d"]
      - values: {"n":25}
        answers: ["sha256:67906f8c3ddc6247011464228f6f8fb0f14303d7e1f20ccd8c4a95be5ef3a461"]
  - id: rsa-de-juguete
    tier: 3
    prompt: |
      RSA con $n = 3233$ ($= 61\cdot53$) y exponente público $e = 17$. Se cifra el mensaje $m = {{m}}$ como $c = m^e \bmod n$. ¿Cuánto vale $c$? (Es un ejemplo de juguete: con $n$ tan pequeño se factoriza al instante.) Respuesta: un entero.
    variants:
      - values: {"m":100}
        answers: ["sha256:7880bd7fe5dcd28637eade8b95c42961c6c5acffa946a671aa0f01ce3a3479bc"]
      - values: {"m":7}
        answers: ["sha256:1ee4e10c0c7e1bd5ff9cd70d1f3c03521abf21ea7ee45aa92deab16f87af4dbb"]
      - values: {"m":2024}
        answers: ["sha256:afbfb89027a4dae87c6033eaa07896e93f3f1ddc2214ca43658982e8aa74b4d4"]
      - values: {"m":999}
        answers: ["sha256:764228040735fc9457b382a4e4533ff9306c6d1372fc5b143ae54eca265fd706"]
      - values: {"m":1234}
        answers: ["sha256:bc83cbb2d6dcba934deedb695609dd3ae689a72b210a8f1b86f6b1bc4c68d348"]
      - values: {"m":3000}
        answers: ["sha256:d8d0dedb4bda4204d0b5e1de5a990a00757aa2d80a64bd97699cad3b3d6fbf5f"]
  - id: teorema-chino-del-resto
    tier: 3
    prompt: |
      Halla el menor entero positivo $x$ con $x \equiv {{a}} \pmod 3$, $x \equiv {{b}} \pmod 5$ y $x \equiv {{c}} \pmod 7$. Respuesta: un entero.
    variants:
      - values: {"a":1,"b":4,"c":3}
        answers: ["sha256:e3d6c4d4599e00882384ca981ee287ed961fa5f3828e2adb5e9ea890ab0d0525"]
      - values: {"a":2,"b":1,"c":6}
        answers: ["sha256:3d914f9348c9cc0ff8a79716700b9fcd4d2f3e711608004eb8f138bcba7f14d9"]
      - values: {"a":0,"b":2,"c":5}
        answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
      - values: {"a":1,"b":3,"c":4}
        answers: ["sha256:8b940be7fb78aaa6b6567dd7a3987996947460df1c668e698eb92ca77e425349"]
      - values: {"a":2,"b":4,"c":0}
        answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
      - values: {"a":1,"b":0,"c":1}
        answers: ["sha256:b4944c6ff08dc6f43da2e9c824669b7d927dd1fa976fadc7b456881f51bf5ccc"]
  - id: soluciones-diofanticas
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Cuántas soluciones en enteros **no negativos** ($x, y \ge 0$) tiene la ecuación ${{a}}x + {{b}}y = {{c}}$? (Si no tiene
      ninguna, responde $0$.)
    variants:
      - values: {"a":6,"b":15,"c":210}
        answers: ["sha256:e8c86e82c45155f51ee6727d4475e0677720a8362e581fd69b453c5b6f053bea","sha256:15225d2bbaf47f362714499420b573802100557b8933937cc9c98e289e3a7795","sha256:8a20ee3a9ecb510979efe199147d0611486b1dcdbb2a98553d5def8471ac8181"]
      - values: {"a":7,"b":11,"c":200}
        answers: ["sha256:985dbd30289ee7a12c6f98c24422db378f1d3efbc3d719111d28baf8ea8ac126","sha256:8fd17643e0eb3914afb75c9d141c59e3f8be957d9bfd96a2392348cf4469f594","sha256:6872ae73be38193e1c4f714906063340875bf235cb65dab5923fe91afdcd3ca6"]
      - values: {"a":12,"b":18,"c":300}
        answers: ["sha256:4c4adad22f56ad86a93367910416dd78ba4d3a48a3e60341a6fc3d51c2af3761","sha256:848d15fce7619a5435a3f4a982139aec2c0ab5841d86c9b7006ab4856b9ec97e","sha256:fb961a4314bf5f5c03f3f6e24a0af4a287fdeb1c01a114e13b712e8c53c0b1d0"]
      - values: {"a":5,"b":8,"c":101}
        answers: ["sha256:9f13dff1fa7179ec386ccee5bed43d0843d5583a97ee43a81d96d8ee6ef22d47","sha256:743b8757d0bb833677834942fff33ae7db4fc888e23424af254804d3e2db936e","sha256:3ec2d3fe04a8ee5e94970aba641576c23afac0e8602e57b56117115ac50b7dc5"]
      - values: {"a":9,"b":21,"c":501}
        answers: ["sha256:317a4efba695837729d79c552a947999069417be83d2e0088cbe6c52d525c11d","sha256:a57e7e065dc8473577e9f1cb8a9b5aed2b2781b1c866f9b100cd61bfc02399e3","sha256:41f103d7b90a0051e42f025a5f4cf11d709d84b1bdf6ba52b23b225f2f991047"]
      - values: {"a":4,"b":10,"c":97}
        answers: ["sha256:194b828870af8c59298e8703adfbd014e6067ad6b822258b00daa328f67ef03f","sha256:ec42b7ebb230820b199a85d0a025816a81fb9f5ce3af680bd74626cbd5db5fc3","sha256:a92d1f1f531b16d36054a32fe6f15f34f5ae15d9c47abbcf0079ff0d2817646c"]
  - id: cambio-de-base
    tier: 1
    prompt: |
      Escribe ${{n}}$ (en base $10$) en base ${{b}}$. (En base $16$, usa las letras A-F en mayúscula para las cifras $10$-$15$.)
      Respuesta: las cifras seguidas, sin espacios.
    variants:
      - values: {"n":200,"b":3}
        answers: ["sha256:28f0a9ef50ef654cdf8d50a99abc77671cbfaf5424429cab978f453d169d1223"]
      - values: {"n":1000,"b":7}
        answers: ["sha256:305800b71062b49b350208327a02ec378199b4cf35e60eeb971611bef4928394"]
      - values: {"n":255,"b":16}
        answers: ["sha256:05a9bf223fedf80a9d0da5f73f5c191a665bf4a0a4a3e608f2f9e7d5ff23959c"]
      - values: {"n":99,"b":2}
        answers: ["sha256:5074be9a8bde74df47c7de760c8af259dc5603a2d3cd1d092c2c26fb9b51aa9a"]
      - values: {"n":500,"b":5}
        answers: ["sha256:b090147020e033534635010c4f7eb6fc270d44e5df67ea9e744a8087df9ca106"]
      - values: {"n":777,"b":8}
        answers: ["sha256:90dbca35cc682d5b4c2e53bd171e6cfba19168539c6f0799df31613fd5638a0f"]
  - id: combinaciones-con-repeticion
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿De cuántas formas se pueden elegir ${{k}}$ objetos entre ${{n}}$ tipos, si se puede repetir tipo y no importa el orden?
      (Equivale a contar las soluciones de $x_1 + \cdots + x_{{{n}}} = {{k}}$ con $x_i \ge 0$ enteros.)
    variants:
      - values: {"n":4,"k":10}
        answers: ["sha256:87d75c8c846be5c35a427678aa51a186ca8c1b0bea36041c95d9612447705f59","sha256:5265ef59c95a7da03c2469efa4ada40775e1e9e871d0b65a1d9d782dec904d8d","sha256:bedfa49a58e2ee798f4c6c4de8b1dd9323f8937dcb32fcc2f72ab5ac40b7e525"]
      - values: {"n":3,"k":8}
        answers: ["sha256:5440e90d5bd0e51392a74a2d1cb31e7086d217214349eae920db9f854a013938","sha256:5d2215c02b1a2fc03e8d1fbf1fd9838610f889b56e49723087335d7cd9cdbbf9","sha256:eba164aa473c08a80aba12be8d6bb6ad2f1087c7ea144c159c9a1c65c67a031c"]
      - values: {"n":5,"k":6}
        answers: ["sha256:dc3b9c2f59e7b5ef40d4d1f912955d0d204cc2deb61c18bd89a1a24e418e063d","sha256:084db0be24b09f5aba7e90ee882e5c98cdf968bb81c772cde7b418139be3c1fe","sha256:46f84ff4e6b8250a050d6de8885dd2491189f641550f778c1be56f656e977f19"]
      - values: {"n":6,"k":3}
        answers: ["sha256:fc2723d8e3cc8e0031195c0b07e4e34e735b007306c85b00f15a246bbb447294","sha256:311bd8fc16f3489d692a474a94c77ec92d76fad01581caad308aff68e9f9ad61","sha256:b36f18e34dd5927ad2ca2a24cdd090f9cdf286d72c3bcc416a44f6684af8a542"]
      - values: {"n":2,"k":15}
        answers: ["sha256:406074a9270bdf4a4d51c121373f98500dc7ca39f3879daa17b82d204555ca82","sha256:a2ef05a0b031e5b631d71b6ed038c024f28e8611b51157ab443f223144ec6e79","sha256:9099689d31a17fe9989ebbe4b1b3818ab6581e1d62bd4d297d9ea765f223db09"]
      - values: {"n":4,"k":7}
        answers: ["sha256:0ace94f1e53b9aa73c0c8fed5daec8efca1db4c002faa5f4631802f17dae7495","sha256:90ea1e6e23f174e6255b64bc5b6ef92a982edb326a0b85db09febec9232677d4","sha256:a182331b85988c2a2647f9bc1e1a14329db72140ad8c46ea37d5d12815c088fe"]
  - id: r-orden-repeticion
    tier: 1
    type: opcion
    review: true
    prompt: |
      Compras $6$ bolas de helado eligiendo entre $4$ sabores (puedes repetir sabor y no importa el orden en que te las sirvan).
      ¿Qué tipo de recuento es?
    options:
      - |
        Variaciones sin repetición
      - |
        Combinaciones sin repetición
      - |
        Variaciones con repetición
      - |
        Combinaciones con repetición
    answers: ["sha256:7843b2cbc567be6f15a82185943e0b914342b2a3d63759792dea4a1daf63ec36"]
  - id: r-grado-impar
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Puede un grafo tener exactamente $3$ vértices de grado impar?
    options:
      - |
        Sí, si el grafo tiene muchas aristas
      - |
        No: el número de vértices de grado impar siempre es par
      - |
        Solo si el grafo no es conexo
      - |
        Solo en grafos dirigidos
    answers: ["sha256:f6933c20ef8faed091b9077a94eaa0650db248fb2a26656255983686be27a77a"]
  - id: r-euleriano
    tier: 2
    type: opcion
    review: true
    prompt: |
      Un grafo conexo tiene $6$ vértices, todos de grado $4$. ¿Tiene un circuito euleriano?
    options:
      - |
        Sí: es conexo y todos los grados son pares
      - |
        No: tiene demasiados vértices
      - |
        Solo un camino, no un circuito
      - |
        No se puede saber sin dibujarlo
    answers: ["sha256:d7fa67c8026eb44ccfe52bec2ca7db4d6fc85be60272942f0a50cc2b7fe0d79f"]
  - id: r-diofantica-sin
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas ecuaciones **no** tiene soluciones enteras?
    options:
      - |
        $3x + 5y = 7$
      - |
        $4x + 9y = 1$
      - |
        $6x + 10y = 7$
      - |
        $2x + 3y = 100$
    answers: ["sha256:88903abe556fa280a67fcbf340237e859c312f42a3ac52ae7aa4e703179176d1"]
  - id: r-binario-13
    tier: 1
    review: true
    prompt: |
      Escribe $13$ en base $2$.
    answers: ["sha256:36ab771eba23f49d7ae43af88c601f3de8fccb201250906a4085444ae765f2db"]
  - id: r-cromatico-ciclo
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el número cromático de un ciclo con $7$ vértices?
    answers: ["sha256:a97457879c615d9bc02d7ca37040e54b7846aded85ca15c0e2684415ffe11d33","sha256:b3d3d05f245c1133e4122175fffd80c92b95e7865ee6e7a6bf6f933279dca9c2","sha256:119a87914d005586983839bb7735cc35695db0265be90f56f2e10ff0c6e54bdf"]
  - id: r-suma-binomiales
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\binom{10}{0} + \binom{10}{1} + \cdots + \binom{10}{10}$?
    answers: ["sha256:4dc7ca6cff636e38e44f9eb666ab68d3a3c533ab78cf7d5f4ca242b1a7898d8b","sha256:da02d1b417694be59f1eca59a9c0102e8664fcf062984a2b47f99fa6379d513c","sha256:5b678abf9e305c8ee38d55a897c032ca83be242ea41cdffee0bcd12f995df055"]
  - id: r-mod-9
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué resto deja $123\,456$ al dividirlo entre $9$? (Usa la suma de las cifras.)
    answers: ["sha256:131b6dce4d3fdf406ebcddfcdecaa0870e7be88212398dc79f1f3ebdc75f59e4","sha256:2587e435e77f309bdfe13d34ff9d51f6fde04bb617f7809f126e8c220b838c98","sha256:dc30e6b08b6e6c7d5c8361bb1e8cfdcca8d2d369357be82643940817bd89b676"]
---

# Matemática discreta: lógica, inducción, recurrencias, grafos y aritmética modular

Los ordenadores trabajan con cosas **discretas**: bits, enteros, cadenas, redes, estados. La matemática discreta es el lenguaje de la informática teórica y práctica: de ella salen la lógica de los circuitos, la
corrección de los algoritmos, el análisis de redes, la criptografía y las bases de datos. Este nodo reúne sus herramientas centrales con demostraciones y con comprobación por programa.

## Objetivos

Al terminar sabrás:

1. Manejar lógica proposicional y de predicados, y negar enunciados con cuantificadores.
2. Operar con conjuntos, relaciones (equivalencia, orden) y funciones (inyectivas, sobreyectivas, biyectivas).
3. Demostrar por **inducción** (simple y fuerte) y por el **principio del palomar**.
4. Resolver **recurrencias** lineales y plantear problemas de conteo recursivo.
5. Estudiar **grafos y árboles**: grados, lema del apretón de manos, caminos de Euler.
6. Calcular con **aritmética modular**: inversos, Fermat, teorema chino del resto y un RSA de juguete.

> [!question] Test de entrada
> 1. ¿Cuántos subconjuntos tiene un conjunto de $3$ elementos? 2. ¿Cuál es el resto de $100$ entre $7$? 3. Si «Todos los gatos son mamíferos» es cierto, ¿se puede deducir «Todos los mamíferos son gatos»?
>
> Respuestas: $8$; $2$; **no** (el recíproco no se deduce).

## 1. Para qué sirve

- **Programar con rigor**: razonar sobre bucles y recursión (invariantes e inducción: ver [[prog-algoritmos]]).
- **Circuitos y hardware**: la lógica booleana es la de [[ing-logica-digital]].
- **Redes y datos**: grafos para rutas, redes sociales, dependencias, bases de datos.
- **Criptografía**: la aritmética modular es la base de RSA y Diffie-Hellman ([[sec-criptografia]], [[sec-fundamentos]]).

## 2. Lógica

> [!practico]
> Este apartado es un repaso rápido: la lógica y las técnicas de demostración se estudian despacio en
> [[mat-logica-demostraciones]]. Lo esencial: «si $p$, entonces $q$» solo falla cuando $p$ pasa y $q$ no; lo contrario de
> «todos» es «alguno no»; y un ejemplo en contra basta para tumbar un «para todo».


Una **proposición** es un enunciado con valor de verdad (verdadero o falso). Se combinan con conectivos: $\lnot p$ (no), $p\land q$ (y), $p\lor q$ (o), $p\to q$ (si $p$ entonces $q$), $p\leftrightarrow q$ (equivale).
**La implicación $p\to q$ solo es falsa cuando $p$ es verdadera y $q$ falsa**: «si llueve, me mojo» no se contradice si no llueve. Una fórmula con $n$ variables tiene una tabla de verdad de $2^n$ filas.

**Equivalencias útiles:** $p\to q \equiv \lnot p\lor q$ (**implicación como disyunción**); **contrarrecíproco** $p\to q \equiv \lnot q\to\lnot p$ (¡**no** el recíproco $q\to p$!); **De Morgan** $\lnot(p\land q)\equiv\lnot p\lor\lnot q$ y $\lnot(p\lor q)\equiv\lnot p\land\lnot q$;
distributivas. Dos fórmulas son equivalentes si tienen la misma tabla. **Ejemplo:** $(p\lor q)\to\lnot r$ es falsa solo cuando $p\lor q$ y $r$ son verdaderas: $3$ casos de $8$, es decir, es verdadera en $5$.

**Cuantificadores.** $\forall x\,P(x)$ (para todo) y $\exists x\,P(x)$ (existe). **Negación:** $\lnot\forall x\,P(x)\equiv\exists x\,\lnot P(x)$ y $\lnot\exists x\,P(x)\equiv\forall x\,\lnot P(x)$.
«No todos los números primos son impares» es «existe un primo que no es impar» (el $2$). **El orden de los cuantificadores importa:** «para todo $x$ existe $y$ con $y > x$» es cierto en los enteros; «existe $y$ tal que para todo $x$, $y > x$», falso.

**Técnicas de demostración:** directa; por **contrarrecíproco**; por **reducción al absurdo** (suponer lo contrario y llegar a una contradicción, como la irracionalidad de $\sqrt2$ en [[mat-algebra-secundaria]]); por **casos**; por **contraejemplo** (para refutar un «para todo»); por **inducción**.

## 3. Conjuntos, relaciones y funciones

> [!practico]
> También es repaso ([[mat-logica-demostraciones]] y [[mat-conjuntos-numeros]]). Lo que más se usa en discreta es **contar**:
> cuántos subconjuntos, cuántas funciones, cuántas formas de repartir. Casi todo sale de dos ideas: si eliges en varios
> pasos, se multiplican las opciones (principio del producto); y si cuentas cosas que se solapan, restas lo contado dos veces
> (inclusión-exclusión).


Un **conjunto** es una colección de elementos sin orden ni repetición. Operaciones: unión $A\cup B$, intersección $A\cap B$, diferencia $A\setminus B$, complemento, producto cartesiano $A\times B$ (pares ordenados). Si $|A| = n$, entonces $|A\times B| = n|B|$ y el **conjunto de partes** $\mathcal P(A)$ tiene
$2^n$ elementos (cada elemento está o no en el subconjunto: principio del producto). Las leyes de De Morgan valen también para conjuntos.

**Relaciones.** Una relación $R$ en $A$ es un subconjunto de $A\times A$. Es **de equivalencia** si es **reflexiva**, **simétrica** y **transitiva**; entonces parte $A$ en **clases de equivalencia** disjuntas, y recíprocamente toda **partición** define una equivalencia. El número de relaciones de
equivalencia en un conjunto de $n$ elementos es el **número de Bell**: $1, 1, 2, 5, 15, 52, 203, \dots$ ($n = 0, 1, 2, \dots$); para $4$ elementos hay $15$. Es **de orden (parcial)** si es reflexiva, **antisimétrica** y transitiva (divisibilidad entre naturales, inclusión de conjuntos), y se dibuja con un **diagrama de Hasse**.
**Ejemplo:** «tener el mismo resto al dividir entre $m$» es de equivalencia y da las **clases módulo $m$** ([[mat-numeros-naturales]]).

**Funciones.** $f: A\to B$ es **inyectiva** si elementos distintos tienen imágenes distintas, **sobreyectiva** si todo elemento de $B$ es imagen, y **biyectiva** si es ambas (tiene inversa). Con $|A| = m$ y $|B| = n$: hay $n^m$ funciones; $n(n-1)\cdots(n - m + 1)$ inyectivas; y las **sobreyectivas** se cuentan por
inclusión-exclusión: de $5$ a $3$ elementos, $3^5 - 3\cdot2^5 + 3 = 150$. Dos conjuntos tienen el mismo **cardinal** si hay una biyección entre ellos; Cantor demostró que $|\mathcal P(A)| > |A|$ también para conjuntos infinitos, y que $\mathbb R$ **no es numerable**.

## 4. Inducción

> [!practico]
> La inducción es la fila de fichas de dominó: si la primera cae y cada ficha tira a la siguiente, caen todas. Para
> demostrar algo para todos los números basta comprobar el primero y ver que «si vale para uno, vale para el siguiente». El
> **palomar** es aún más simple: si hay más cartas que buzones, algún buzón recibe dos.


**Principio de inducción.** Para probar $P(n)$ para todo $n \ge n_0$: **(base)** $P(n_0)$ es cierta; **(paso)** si $P(k)$ es cierta ($k \ge n_0$), entonces $P(k+1)$ lo es. Funciona porque los naturales son el conjunto **bien ordenado** y «encadenado» por el sucesor: si $P$ fallase en algún $n$, habría un mínimo $n$ donde falla, y el paso lo contradice.

**Ejemplo 1.** $1 + 3 + 5 + \cdots + (2n - 1) = n^2$. *Base:* $n = 1$, $1 = 1$. *Paso:* si vale para $k$, entonces $1 + \cdots + (2k - 1) + (2k + 1) = k^2 + 2k + 1 = (k+1)^2$. $\blacksquare$
**Ejemplo 2.** $\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$: el paso es $\frac{n(n+1)(2n+1)}{6} + (n+1)^2 = \frac{(n+1)(n+2)(2n+3)}{6}$ (se comprueba desarrollando). Con $n = 30$: $9455$.
**Ejemplo 3 (divisibilidad).** $6 \mid 7^n - 1$: si $7^k - 1 = 6m$, entonces $7^{k+1} - 1 = 7(7^k - 1) + 6 = 42m + 6 = 6(7m + 1)$. $\blacksquare$

**Inducción fuerte:** el paso supone $P(j)$ cierta para **todos** los $j \le k$. **Ejemplo:** todo $n\ge2$ es producto de primos (si $n$ es compuesto, $n = ab$ con $a, b < n$ y ambos son productos de primos). **Cuidado** con las falsas demostraciones: «todos los caballos son del mismo color»
falla porque el paso no vale para $k = 1$. **Siempre se comprueba la base y que el paso valga desde ella.**

**Principio del palomar:** $n + 1$ objetos en $n$ cajas implican una caja con al menos dos. Generalizado: $m$ objetos en $n$ cajas dejan alguna con al menos $\lceil m/n\rceil$. **Ejemplo:** entre $11$ números de $\{1,\dots,20\}$ hay dos que suman $21$ (se agrupan en las $10$ parejas $\{a, 21 - a\}$).

## 5. Recurrencias

> [!practico]
> Una recurrencia describe algo paso a paso: «lo de hoy es el doble de lo de ayer más uno». Calcular el término $100$ a base
> de pasos es lento; **resolver** la recurrencia es encontrar una fórmula directa, como $2^n - 1$ para las torres de Hanoi.
> Aparecen al contar (cadenas, permutaciones) y al medir cuánto tarda un algoritmo recursivo.


Una **recurrencia** define una sucesión en función de términos anteriores. Aparecen al analizar algoritmos y problemas de conteo. **Torres de Hanoi:** para mover $n$ discos hay que mover $n-1$, mover el mayor y volver a mover $n - 1$: $H_n = 2H_{n-1} + 1$, $H_0 = 0$, de donde
$H_n = 2^n - 1$ (inducción). Con $64$ discos, $2^{64}-1\approx1{,}8\cdot10^{19}$ movimientos.

**Recurrencias lineales homogéneas de coeficientes constantes.** Para $a_n = c_1a_{n-1} + c_2a_{n-2}$ se prueban soluciones $a_n = r^n$: sustituyendo, $r^2 = c_1r + c_2$ (**ecuación característica**). Si tiene raíces distintas $r_1, r_2$, la solución general es $a_n = A r_1^n + B r_2^n$, con $A, B$ fijadas por las condiciones iniciales.
**Ejemplo:** $a_n = 3a_{n-1} - 2a_{n-2}$ con $a_0 = 1$, $a_1 = 3$: $r^2 - 3r + 2 = 0$, $r = 1, 2$; $A + B = 1$, $A + 2B = 3$: $A = -1$, $B = 2$: $a_n = 2^{n+1} - 1$ ($a_{10} = 2047$).
**Fibonacci:** $F_n = F_{n-1} + F_{n-2}$ da $r^2 = r + 1$, $r = \frac{1\pm\sqrt5}{2}$ y la **fórmula de Binet** $F_n = \frac{\varphi^n - (1-\varphi)^n}{\sqrt5}$ (la misma que sale de los autovalores en [[mat-algebra-lineal-1]]).

**Conteo recursivo.** Las cadenas binarias de longitud $n$ **sin dos unos seguidos**: si terminan en $0$, el resto es cualquier cadena válida de longitud $n - 1$; si terminan en $01$ (o son «1» solas), el resto es válido de longitud $n - 2$. Luego $c_n = c_{n-1} + c_{n-2}$ con $c_1 = 2$, $c_2 = 3$: son los **números de Fibonacci**: $c_{12} = 377 = F_{14}$.

**Desarreglos.** Permutaciones sin puntos fijos: por inclusión-exclusión, $D_n = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!}$ ($D_4 = 9$, $D_8 = 14\,833$). La proporción $D_n/n!\to1/e\approx0{,}368$: **al repartir al azar $n$ regalos, la probabilidad de que nadie reciba el suyo se acerca a $37\,\%$**, sea cual sea $n$.

## 6. Grafos

> [!practico]
> Un grafo es un dibujo de puntos unidos por líneas: ciudades y carreteras, personas y amistades, páginas web y enlaces. Con
> eso se responden preguntas como «¿puedo recorrer todas las calles sin repetir ninguna?» (Euler), «¿puedo visitar todas las
> ciudades una sola vez?» (Hamilton) o «¿cuántos colores necesito para que dos países vecinos no tengan el mismo?»
> (coloración).


Un **grafo** $G = (V, E)$ tiene **vértices** y **aristas**. El **grado** de un vértice es el número de aristas que le llegan. Ejemplos: $K_n$ (completo) tiene $\binom n2$ aristas ($K_8$: $28$).

**Lema del apretón de manos.** $\sum_{v}\deg(v) = 2|E|$ (cada arista se cuenta en sus dos extremos). *Consecuencia:* **el número de vértices de grado impar es par**, y en una fiesta el número de personas que dan la mano a un número impar de gente es par.

**Caminos y conexión.** Un grafo es **conexo** si hay camino entre cualquier par. **Árboles:** grafos conexos sin ciclos. **Teorema:** un árbol de $n$ vértices tiene exactamente $n - 1$ aristas.

> [!formal] Con rigor: un árbol de $n$ vértices tiene $n - 1$ aristas
> *Demostración (inducción).* Todo árbol con $n\ge2$ vértices tiene al menos una hoja (grado $1$); quitarla da un árbol de $n-1$ vértices con una arista menos; por hipótesis tiene $n - 2$ aristas. $\blacksquare$

**Ejemplo:** un árbol con $3$ vértices de grado $3$ y el resto hojas: la suma de grados es $9 + L = 2(n-1) = 2(2 + L)$, luego $L = 5$ hojas y $n = 8$.

**Euler y los puentes de Königsberg (1736).** Un **circuito euleriano** (pasa por cada arista exactamente una vez y vuelve) existe en un grafo conexo **si y solo si todos los grados son pares**; un **camino euleriano** (sin volver), si hay **exactamente $0$ o $2$** vértices de grado impar.
Los $4$ sectores de Königsberg tienen grados $3, 3, 3, 5$: **cuatro** impares, luego no hay recorrido posible. Nació así la teoría de grafos.
**Grafos planos y coloreado.** Para un grafo plano conexo, $V - E + F = 2$ (fórmula de Euler); y todo grafo plano se puede colorear con $4$ colores (teorema de los cuatro colores, demostrado con ayuda de ordenador en 1976). Los grafos de dependencias, las redes de comunicaciones y los problemas de asignación (horarios, frecuencias) se modelan con coloreado.

**Grafos hamiltonianos.** Un **ciclo hamiltoniano** pasa por cada **vértice** exactamente una vez. A diferencia del
caso euleriano, no se conoce ninguna condición sencilla que lo caracterice (decidirlo es un problema NP-completo). Hay
condiciones suficientes: **teorema de Dirac**, si $G$ tiene $n \ge 3$ vértices y todos de grado $\ge n/2$, es hamiltoniano;
**teorema de Ore**, basta con $\deg u + \deg v \ge n$ para cada par de vértices **no** adyacentes. $K_n$ ($n \ge 3$) es
hamiltoniano; un árbol nunca lo es.

**Digrafos y multigrafos.** En un **digrafo** las aristas tienen sentido (de $u$ a $v$), y cada vértice tiene grado de
entrada y de salida, con $\sum \deg^+ = \sum \deg^- = |E|$; en un **multigrafo** puede haber varias aristas entre dos vértices
(Königsberg es un multigrafo).

**Coloraciones.** El **número cromático** $\chi(G)$ es el menor número de colores con que se pueden colorear los vértices
sin que dos adyacentes compartan color. Ejemplos: $\chi(K_n) = n$; un ciclo $C_n$ tiene $\chi = 2$ si $n$ es par y $3$ si es
impar; $\chi(G) = 2$ (con alguna arista) si y solo si $G$ no tiene ciclos impares (**bipartito**). El algoritmo voraz (colorear
los vértices en orden con el primer color libre) prueba que $\chi(G) \le \Delta + 1$, con $\Delta$ el grado máximo.

Los algoritmos de exploración de grafos (BFS, DFS, Dijkstra) están en [[prog-estructuras-datos]] y [[prog-algoritmos]].

## 7. Aritmética modular

> [!practico]
> La aritmética modular es la del reloj: en un reloj de $12$ horas, $9 + 5 = 2$. Solo importa el **resto** al dividir entre
> el módulo. Se puede sumar, restar y multiplicar como siempre; dividir solo a veces (cuando el número no comparte divisores
> con el módulo). Con ella funcionan las letras de control del DNI, los códigos de barras y el cifrado de internet.


Dos enteros son **congruentes módulo $m$**, $a\equiv b\pmod m$, si $m\mid a - b$. La congruencia es de equivalencia, y respeta la suma y el producto; los restos $\{0, 1, \dots, m-1\}$ forman el **anillo $\mathbb Z_m$**. En $\mathbb Z_m$ siempre se puede sumar, restar y multiplicar; **dividir** exige un **inverso**.

**Teorema.** $a$ tiene inverso módulo $m$ si y solo si $\gcd(a, m) = 1$.

> [!formal] Con rigor: existencia del inverso modular
> *Demostración.* Por Bézout (el algoritmo de Euclides extendido de [[prog-algoritmos]]), $\gcd(a, m) = 1$ implica $ax + my = 1$ para ciertos enteros, luego $ax\equiv1\pmod m$. Recíprocamente, si $ax\equiv1$ entonces $ax - 1 = mk$, y cualquier divisor común de $a$ y $m$ divide a $1$. $\blacksquare$

**Ejemplo:** $7^{-1}\bmod 26$: $26 = 3\cdot7 + 5$, $7 = 5 + 2$, $5 = 2\cdot2 + 1$; hacia atrás, $1 = 3\cdot26 - 11\cdot7$, luego $7^{-1}\equiv-11\equiv15$ (comprobación: $7\cdot15 = 105 = 4\cdot26 + 1$ $\checkmark$).

**Pequeño teorema de Fermat.** Si $p$ es primo y $p\nmid a$, entonces $a^{p-1}\equiv1\pmod p$.

> [!formal] Con rigor: demostración del pequeño teorema de Fermat
> *Demostración.* Los números $a, 2a, \dots, (p-1)a$ son, módulo $p$, una **permutación** de $1, \dots, p - 1$ (distintos y no nulos, por el teorema anterior); multiplicándolos todos, $a^{p-1}(p-1)!\equiv(p-1)!$ y se cancela $(p-1)!$, que es invertible. $\blacksquare$

**Uso:** $3^{100}\bmod7$: como $3^6\equiv1$, $3^{100} = 3^{6\cdot16 + 4}\equiv3^4 = 81\equiv4$. Para exponentes enormes se usa la **exponenciación modular rápida** ($O(\log n)$ productos).

**Teorema chino del resto.** Si $m_1, m_2$ son coprimos, el sistema $x\equiv a_1\pmod{m_1}$, $x\equiv a_2\pmod{m_2}$ tiene **una única solución módulo $m_1m_2$**. **Ejemplo:** $x\equiv1\pmod3$ y $x\equiv2\pmod5$: $x = 7$ (módulo $15$). Permite calcular con módulos grandes por trozos y se usa para acelerar RSA.

**RSA de juguete.** Se eligen primos $p = 61$, $q = 53$; $n = pq = 3233$; $\varphi(n) = (p-1)(q-1) = 3120$; un exponente público $e = 17$ (coprimo con $3120$) y el privado $d = e^{-1}\bmod3120 = 2753$ ($17\cdot2753 = 15\cdot3120 + 1$). **Cifrar:** $c = m^e\bmod n$. **Descifrar:** $m = c^d\bmod n$. Con $m = 42$: $c = 42^{17}\bmod3233 = 2557$, y $2557^{2753}\bmod3233 = 42$.
Funciona porque $m^{ed}\equiv m$ (consecuencia del teorema de Euler, generalización de Fermat). Su seguridad real exige $n$ de miles de bits, donde **factorizar $n$** para obtener $\varphi(n)$ es inviable; aquí cualquiera factoriza $3233$ a mano ([[sec-criptografia]]).

```python
p, q, e = 61, 53, 17
n, phi = p * q, (p - 1) * (q - 1)
d = pow(e, -1, phi)                       # inverso modular: 2753
m = 42
c = pow(m, e, n)
assert (n, phi, d, c) == (3233, 3120, 2753, 2557) and pow(c, d, n) == m
assert pow(7, -1, 26) == 15 and pow(3, 100, 7) == 4
```

## 7b. Ecuaciones diofánticas y sistemas de numeración

> [!practico]
> Una ecuación diofántica es una ecuación en la que solo valen soluciones **enteras**: «con billetes de $20$ y de $50$
> euros, ¿cómo pago exactamente $230$?». A veces no hay ninguna solución ($25$ euros no se pueden pagar así) y, cuando hay
> una, hay infinitas que se obtienen unas de otras con un paso fijo. Y un sistema de numeración es una forma de escribir los
> números: en base $10$ con diez cifras, en base $2$ con ceros y unos, como hace el ordenador.

**Ecuación diofántica lineal** $ax + by = c$ ($a, b$ no ambos nulos). Tiene solución entera **si y solo si**
$d = \gcd(a, b)$ divide a $c$. Si $(x_0, y_0)$ es una solución, todas son
$$
x = x_0 + \frac{b}{d}\,t, \qquad y = y_0 - \frac{a}{d}\,t, \qquad t \in \mathbb Z .
$$
*Ejemplo:* $20x + 50y = 230$. $\gcd(20, 50) = 10 \mid 230$; dividiendo, $2x + 5y = 23$, con solución $x_0 = 4$, $y_0 = 3$. Las
soluciones son $x = 4 + 5t$, $y = 3 - 2t$; con $x, y \ge 0$: $t = 0$ ($4$ de $20$ y $3$ de $50$) y $t = 1$ ($9$ de $20$ y
$1$ de $50$).

> [!formal] Con rigor: por qué esas son todas las soluciones
> Existencia: por Bézout, $ax' + by' = d$ para ciertos enteros; si $d \mid c$, multiplicando por $c/d$ sale una solución.
> Si $d \nmid c$, no hay ninguna, porque $d$ divide a $ax + by$ para todo $x, y$. Todas: si $(x, y)$ y $(x_0, y_0)$ son
> soluciones, $a(x - x_0) = -b(y - y_0)$; dividiendo por $d$, $\frac ad(x - x_0) = -\frac bd(y - y_0)$, y como
> $\gcd(\frac ad, \frac bd) = 1$, $\frac bd$ divide a $x - x_0$: $x = x_0 + \frac bd t$, y despejando,
> $y = y_0 - \frac ad t$. $\blacksquare$

**Sistemas de numeración.** En base $b \ge 2$, todo natural se escribe de forma única como
$n = c_k b^k + \cdots + c_1 b + c_0$ con cifras $0 \le c_i < b$ (por divisiones euclídeas sucesivas entre $b$: los restos
son las cifras, de la última a la primera). *Ejemplo:* $100$ en base $3$: $100 = 33\cdot3 + 1$, $33 = 11\cdot3 + 0$,
$11 = 3\cdot3 + 2$, $3 = 1\cdot3 + 0$, $1 = 0\cdot3 + 1$; leyendo los restos al revés, $100 = 10201_3$.

**Criterios de divisibilidad** (salen de las congruencias de las potencias de $10$): como $10 \equiv 1 \pmod 9$, un número
y la suma de sus cifras dejan el mismo resto entre $9$ (y entre $3$); como $10 \equiv -1 \pmod{11}$, entre $11$ cuenta la suma
alternada de las cifras empezando por las unidades.

## 7c. Contar: variaciones, combinaciones y el binomio

> [!practico]
> Contar bien es preguntarse dos cosas: ¿importa el **orden**? y ¿se puede **repetir**? Un podio de una carrera es con
> orden y sin repetir; un grupo de trabajo, sin orden y sin repetir; una matrícula, con orden y con repetición; y comprar
> $10$ helados de $4$ sabores, sin orden y con repetición (lo que cuenta es cuántos de cada sabor).

| | sin repetición | con repetición |
| --- | --- | --- |
| con orden (variaciones) | $V_{n,k} = \dfrac{n!}{(n - k)!}$ | $n^k$ |
| sin orden (combinaciones) | $\dbinom nk = \dfrac{n!}{k!\,(n - k)!}$ | $\dbinom{n + k - 1}{k}$ |

Las **combinaciones con repetición** se cuentan con «estrellas y barras»: elegir $k$ objetos de $n$ tipos es colocar $k$
estrellas y $n - 1$ barras separadoras en fila, es decir, elegir las posiciones de las barras entre $n + k - 1$:
$\binom{n + k - 1}{n - 1} = \binom{n + k - 1}{k}$. *Ejemplo:* $5$ helados de $3$ sabores: $\binom{7}{5} = 21$ formas. Es
también el número de soluciones de $x_1 + \cdots + x_n = k$ en enteros $x_i \ge 0$.

**Teorema del binomio.** $(a + b)^n = \sum_{k=0}^{n}\binom nk a^{n-k}b^k$: al multiplicar $n$ paréntesis, el término
$a^{n-k}b^k$ aparece tantas veces como formas de elegir en qué $k$ paréntesis se toma la $b$. Con $a = b = 1$ sale
$\sum_k\binom nk = 2^n$ (los subconjuntos), y con $a = 1$, $b = -1$, $\sum_k(-1)^k\binom nk = 0$, que es lo que hace funcionar la
inclusión-exclusión. La recurrencia $\binom nk = \binom{n-1}{k-1} + \binom{n-1}{k}$ construye el triángulo de Pascal.

## 8. Errores típicos

- Confundir una implicación con su **recíproco** ($p\to q$ no es $q\to p$); aceptar el contrarrecíproco, sí.
- Negar mal un cuantificador (olvidar cambiar $\forall$ por $\exists$).
- Una inducción **sin base**, o con un paso que no funciona para el primer caso.
- Contar **dos veces** (orden que no importa) o **olvidar casos** (inclusión-exclusión).
- Dividir en aritmética modular sin comprobar que el divisor es **coprimo** con el módulo.
- Aplicar Fermat con $p$ compuesto, o con $p \mid a$.
- Cuestión de **grafos**: contar una arista dos veces, o suponer que «sin ciclos» implica conexo.

## Repaso: lo que debe quedarte dentro de un mes

1. $p\to q\equiv\lnot p\lor q\equiv\lnot q\to\lnot p$; De Morgan; negación de cuantificadores.
2. $|\mathcal P(A)| = 2^{|A|}$; equivalencia = reflexiva + simétrica + transitiva = partición; sobreyectivas por inclusión-exclusión.
3. Inducción: base y paso; fuerte; palomar.
4. Recurrencia lineal: ecuación característica; Fibonacci; Hanoi $2^n - 1$.
5. $\sum\deg = 2|E|$; árbol $= n - 1$ aristas; Euler: grados pares; Hamilton: sin caracterización sencilla (Dirac, Ore); $\chi(C_n) = 2$ o $3$.
6. $ax + by = c$ tiene solución si y solo si $\gcd(a, b) \mid c$; $a^{-1}$ existe $\iff\gcd(a, m) = 1$; Fermat; RSA.
7. Orden y repetición: $n!/(n-k)!$, $n^k$, $\binom nk$, $\binom{n+k-1}{k}$; binomio de Newton.

## Siguiente

[[mat-analisis-real]] y [[mat-estructuras-algebraicas]] llevan estas ideas de rigor al análisis y al álgebra abstracta; [[mat-teoria-numeros]] profundiza en congruencias y primos; [[prog-algoritmos]] y [[sec-criptografia]] las usan a diario.
