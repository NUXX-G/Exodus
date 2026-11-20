---
id: mat-teoria-numeros
title: "Teoría de números: divisibilidad, congruencias, funciones aritméticas, residuos cuadráticos, primalidad y ecuaciones diofánticas"
area: matematicas
trunk_level: 9
prerequisites: [mat-matematica-discreta, mat-estructuras-algebraicas]
academic_sources:
  - "Hardy, G. H.; Wright, E. M. An Introduction to the Theory of Numbers, 6ª ed. (revisada por D. R. Heath-Brown y J. H. Silverman). Oxford University Press, 2008."
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
exercises:
  - id: mcd-y-bezout
    tier: 1
    prompt: |
      Con el algoritmo de Euclides extendido, halla $d = \gcd(1071, 462)$ y enteros $x, y$ con $1071x + 462y = d$ (los que da el algoritmo). Respuesta: `d;x;y`.
    answers: ["sha256:bac5a1502fb2df68d24eafe4f3e58ec506a0fd244794439eb357b6378b5b6b7d"]
  - id: funcion-phi
    tier: 1
    prompt: |
      ¿Cuánto vale la función de Euler $\varphi(360)$? Respuesta: un entero.
    answers: ["sha256:7b1a278f5abe8e9da907fc9c29dfd432d60dc76e17b0fabab659d2a508bc65c4"]
  - id: divisores
    tier: 1
    prompt: |
      ¿Cuántos divisores positivos tiene $360$ y cuánto suman? Respuesta: `tau;sigma`.
    answers: ["sha256:dfeba01aedd9a60c93fcfe4f69772ce018dfa7d7b1dcb1aa4377e6853a98bc7a"]
  - id: potencia-modular
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula ${{b}}^{{{e}}} \bmod {{p}}$ (${{p}}$ es primo: usa el pequeño teorema de Fermat). Respuesta: un entero.
    variants:
      - values: {"b":3,"e":100,"p":7}
        answers: ["sha256:874ce54ef1619cd479ea3dd29120f8e42fc44970451e56bab3c8c4d1c6ef0698","sha256:095372d8232fc8d946a8a4d6d08ba27059d131388a998e00a883da2ba22be48d","sha256:1fdeaff5354c94e3750fc61ab42af0d7a9adc7225e5bcae36e0803834765625e"]
      - values: {"b":2,"e":50,"p":11}
        answers: ["sha256:0f539e82934c09e403c19f7d380b4d5178e3875c3d212a4eeeddd84e3e6c5542","sha256:93f55b315c25663b0383bba40c48c5f136b13881c05b4abf67f2a281082d4a31","sha256:b136dc2d7f07e762f7be9d1669ef92958a82785af01c45caf1cab20bb91ebc63"]
      - values: {"b":5,"e":77,"p":13}
        answers: ["sha256:f4bea811733dd6a759a255dc3311266546e6d5696a65a42d28c200457bace4ae","sha256:25bc8a2218f9a0c679802d7cc4adcb9663066f08536c7777a3f7ffa8c34aaa14","sha256:47c09e375835e6926ccf34c9689b92b8bf9fa3ffa79a83303999e4f2594e41fe"]
      - values: {"b":7,"e":222,"p":17}
        answers: ["sha256:dcd4b9f97b90416524c780c10b5d2e089c6f1addf2e353a91eae9db68b816b7b","sha256:c0072d05f6c9f9ad753d08883925b66b346880cfbe3a2d63cc05673bb0613833","sha256:3c456b5dbd5f96d74d96df0f4d8d01cf72e186a9fb591f432c96bac6eaf7bacb"]
      - values: {"b":6,"e":1000,"p":19}
        answers: ["sha256:27cd2e3adfcc77076ab3f169f2da29ee8b5095ff5dafb14adf3be18cef8c75b1","sha256:b891fde389feead8b1f8146952470b3c30afb216c586eff4ad623c42a3c84bd2","sha256:6c1da0af8c17589e39751cd3ba39af1c811acfe3fd2c58a7aeaaf7cb4967fe4d"]
      - values: {"b":10,"e":123,"p":7}
        answers: ["sha256:3bd56200a05026dae4d3a3688d9279c93e8cc24ac690c71420231fc2f4261f57","sha256:38bd301184e6b2e21a8e2cfde85cc89f08ada4aa9f35bf9a2b3004af4be3b721","sha256:e86b7d1e04fc7655cacf7c7d2c5f909b171e4816e847c8f472edc75b639cb6e4"]
      - values: {"b":4,"e":85,"p":23}
        answers: ["sha256:f18e30d721630962259b3595cf9e3d171078c49d566fa155ea84566069385e9a","sha256:c6f64d2d4d16db9f35eb116c6b3814a7fac01a1bcbe4df1fa5ad54a3eaabcd76","sha256:6338301a0467f5343fb8667346bd8ff0dab83327593159383fbdcbb7872809e2"]
  - id: inverso-modular
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Cuál es el inverso de ${{a}}$ módulo ${{m}}$? Respuesta: un entero entre $0$ y ${{m1}}$.
    variants:
      - values: {"a":17,"m":3120,"m1":3119}
        answers: ["sha256:9a51c54c3c0437c85128dc3aa3a8490052fb48792dfc9a0a78f2284ee2ea132b","sha256:59307e97708842f39ec47406f1462742e4b135cb9b13d82d51f90fa65159e7eb","sha256:144c3c51b3a10184c559f7e98cb96772323bf8e315c2dc9c4fbb20b58c1fc4c5"]
      - values: {"a":7,"m":40,"m1":39}
        answers: ["sha256:1c093cc815822b4bbc0ec4c6b5e32f5993ce7bfaf5c2407267002d66e20f6d79","sha256:ed05b9282614cdc056cc368e775fe935f584bac0745c0de1a28b40d1c4968c2e","sha256:b90182083f22f012c6a6eff350994be13159adb295c68e767428c676918a9a29"]
      - values: {"a":11,"m":26,"m1":25}
        answers: ["sha256:9c8da2683cd3e60fcd8a06766e22a436cf63af778a048b64504d731013797284","sha256:20e43ccbcf3cd7912d5370f931c7ba09e5305bb243c8ee6bfe7e01621395ef44","sha256:94b1f9894998691e51f1edbf05a03e1f5eab94692a99d2247d09e6ff394469e3"]
      - values: {"a":23,"m":120,"m1":119}
        answers: ["sha256:8a34cb3316d23e1537133b094e6a0557aa9a072ff37349a5cba80375c34ceb1a","sha256:da78acbcb4ddaac9e46117f82aa95f46bd61d73fdcab9f2e940099c718f7638a","sha256:6ec9e2ee9ac12ecb94ee93566a80cc609c000632af579d9177a360d4460c9f6c"]
      - values: {"a":5,"m":72,"m1":71}
        answers: ["sha256:70ec2e137779dea9e5c21ff4871638510a8fed3653b52faad25c2c199973dbd5","sha256:49bcb7dc90c0604eb2f5075a34f19402e875c3b64e31ea4e5d7180f95053e414","sha256:eaa0cf503b36308d480ab21f7b0059aad08a08d49c34f39946a7ff8f4609d336"]
      - values: {"a":31,"m":100,"m1":99}
        answers: ["sha256:bf89801f3554c2eb7abf86c725710633e4e8d77a6d668c2ac505cca93614dc5b","sha256:2dd8b30e992baeaf68332920a053f30a2fd64737bd14b7f0e735cc46c846dd6e","sha256:4a593ba75485ccaf78765c9a58d10e6179f8fcf84624f3e6d978ec73e30c7875"]
      - values: {"a":13,"m":210,"m1":209}
        answers: ["sha256:d1dd7a47d8efe410204ffc6c733787eafd6ec9e6e615978f0c53cc7ed93c48df","sha256:0267296570724162e97f366392213d80b32eea2ab2f80b2acb8218a6e5b16618","sha256:3fc6ef44d5bcc52ee0bd02639cd244e30f90fd43fc376f3494c54108bf5bb979"]
      - values: {"a":19,"m":360,"m1":359}
        answers: ["sha256:2f4f5fdfb0b72b9937cb9eca29464e43b27fdb5e89d2c3b9c2bd2cfda725a0ea","sha256:35195eb2b34a938e05864fb6eb7fa6ceefc03a9f63661d7f14a7d63c9e40773d","sha256:7d94fabe716c86de9c26f08017034f4067efa1ea59f427562607a20099a0ccbd"]
  - id: teorema-chino-del-resto
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Halla el menor $x \ge 0$ con $x \equiv {{r1}} \pmod{{{m1}}}$, $x \equiv {{r2}} \pmod{{{m2}}}$ y $x \equiv {{r3}} \pmod{{{m3}}}$.
      Respuesta: un entero.
    variants:
      - values: {"r1":2,"m1":3,"r2":3,"m2":5,"r3":2,"m3":7}
        answers: ["sha256:99062693fc4a1bc9e3348877a762072f7c9f806be7694fc4efa741531027f401","sha256:ae5c0b7decc0e1e672bb007c36884928f8e45afefe4e54e42b9b23b24ebed4af","sha256:c2039e233784efe6be4633eb5e51b8fc6c701313e6343f1a7761d768d7c6ea29"]
      - values: {"r1":1,"m1":3,"r2":2,"m2":5,"r3":3,"m3":7}
        answers: ["sha256:1c543257a7d4e82ba6fae14989d972fdd57a5cd4abd4f7ee21e7df6840ffb6a1","sha256:6c1ed825726ca48652b257c0e433f1f1fee5a8aabfb98e50ec7eb366ef7099a0","sha256:0b07ac89c282fde9a0e3762849f76e6db3e7bba6d83aa2fc4dd891ed96434bb2"]
      - values: {"r1":3,"m1":4,"r2":1,"m2":5,"r3":2,"m3":9}
        answers: ["sha256:65254cfc99ae514243b72d63d4839d9f95f794303087c0aa1dc4baf8a775947c","sha256:f38dcb41fe2ab7451989e0efedc8e5cef5b5d90eda5a5b7497b8e6a995500cf9","sha256:cfb2928017d16ed8e19d9fc9ab69f343b153eb6a0a271b6c814520f6f4a572db"]
      - values: {"r1":0,"m1":2,"r2":2,"m2":3,"r3":4,"m3":5}
        answers: ["sha256:c75f72513f03f7167462715ef80661cdfbe12e007e5b240b207cc75831ce6494","sha256:b39897492bdf7975c25b2f37a1cbce8998fd17bd5354923dc603da8e9b35fc37","sha256:6ff87415af0a2d1ea0a5355978aaec8ccb34a96de94b70ecec8b880b62e01f4a"]
      - values: {"r1":5,"m1":7,"r2":3,"m2":11,"r3":1,"m3":2}
        answers: ["sha256:8c643e3c2c1567e6ef42e2d0228a6bdc515f56b6e506097215a8d789705b3ae5","sha256:6f96b79c3ecc3e4b6c07f771b414142e9f5b99bab258ec2b41bcc217dc2d673d","sha256:2a332a7d395589e8527fbf8c2013bdf9712f67fe13a319f922bcb55ee54d1cf8"]
      - values: {"r1":2,"m1":5,"r2":6,"m2":7,"r3":0,"m3":3}
        answers: ["sha256:297d154fc6e47aa8b1cc00ce71512a3d2da198f4f4d7e0470ddd4d58b852e2f9","sha256:3796139b53d8d5cafbe359015ba3d123e7db5b50f792d321ac7cb4a60882205e","sha256:7bbb587f8a5c2827edf8530d2a8e0fb60312c990c7f9b6febbf9c0e5918d6fb7"]
  - id: simbolo-de-legendre
    tier: 2
    prompt: |
      Calcula el símbolo de Legendre $\left(\frac{5}{97}\right)$ con la ley de reciprocidad cuadrática. Respuesta: `1` o `-1`.
    answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
  - id: orden-multiplicativo
    tier: 2
    prompt: |
      ¿Cuál es el orden de $2$ módulo $101$ (el menor $k > 0$ con $2^k \equiv 1$)? Respuesta: un entero.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: contar-primos
    tier: 2
    prompt: |
      ¿Cuántos primos hay menores o iguales que $100\,000$? Usa la criba de Eratóstenes. Respuesta: un entero.
    answers: ["sha256:454df0b799320283814e09c66752efdf334c0205f55f6334c40896e9a48f0712"]
  - id: raiz-cuadrada-modular
    tier: 2
    prompt: |
      Resuelve $x^2 \equiv 10 \pmod{13}$. Respuesta: las dos soluciones en $[0, 12]$, de menor a mayor, separadas por `;`.
    answers: ["sha256:8af91448144b426eeaed65df68130c9f2b151256469562d15bef6a26b0325170"]
  - id: ecuacion-diofantica
    tier: 2
    prompt: |
      ¿Cuántas soluciones con $x, y \ge 0$ enteros tiene $3x + 5y = 100$? Respuesta: un entero.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: numero-de-carmichael
    tier: 3
    prompt: |
      $561 = 3\cdot11\cdot17$ cumple $a^{560} \equiv 1 \pmod{561}$ para todo $a$ coprimo con él (es un número de Carmichael). ¿Cuánto vale la función de Carmichael $\lambda(561)$, el exponente mínimo que funciona para todos? Respuesta: un entero.
    answers: ["sha256:48449a14a4ff7d79bb7a1b6f3d488eba397c36ef25634c111b49baf362511afc"]
  - id: miller-rabin
    tier: 3
    prompt: |
      ¿Cuál es la menor base $a \ge 2$ con la que el test de Miller-Rabin demuestra que $561$ es compuesto? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: ecuacion-de-pell
    tier: 3
    prompt: |
      Halla la solución fundamental (la menor con $y > 0$) de $x^2 - 14y^2 = 1$, usando la fracción continua de $\sqrt{14}$. Respuesta: `x;y`.
    answers: ["sha256:6e4a051a81cc5871dbe4eda6013232c91cb87c41059319b9cdf15d7d2d13b889"]
  - id: sumas-de-dos-cuadrados
    tier: 3
    prompt: |
      ¿De cuántas formas se escribe $325 = a^2 + b^2$ con $a, b$ enteros (contando signos y orden)? Usa $r_2(n) = 4\,(d_1(n) - d_3(n))$. Respuesta: un entero.
    answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
  - id: raices-primitivas
    tier: 3
    prompt: |
      ¿Cuál es la menor raíz primitiva módulo $23$ y cuántas raíces primitivas hay? Respuesta: `menor;cuantas`.
    answers: ["sha256:6124945d516d5a8438fb0639a9a4da472eb42574a89934893040c4bf616adc30"]
  - id: r-sin-inverso
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Tiene $6$ inverso módulo $15$ (un $x$ con $6x \equiv 1 \pmod{15}$)? ¿Por qué?
    options:
      - |
        Sí, es $6^{-1} = 1/6$
      - |
        Sí, porque $15$ no es primo
      - |
        No, porque $\gcd(6, 15) = 3 \ne 1$
      - |
        No, porque $6$ es par
    answers: ["sha256:ac126fadf5591bee0283350900e4fcde2772acd1054bc8863f68f6b2e21ec21e"]
  - id: r-ultima-cifra
    tier: 2
    type: numero
    review: true
    sig: 10
    prompt: |
      ¿Cuál es la **última cifra** de $7^{{{k}}}$? (Pista: trabaja módulo $10$ y busca un ciclo.) Respuesta: una cifra.
    variants:
      - values: {"k":2026}
        answers: ["sha256:3ad6a48bbf6009997e44c37e88b6d587f6722fc9262021777f83a106b086d6ca","sha256:d81a375f63c72ca8b384f6e2f3e3d77650bfa30ec16a609d8f40c75964540dce","sha256:2a34e2cfa9f55345be1e29468dd2934c330dde152ff3dad51fb8af6347176466"]
      - values: {"k":100}
        answers: ["sha256:80e9eb0941ac6518594b8fad3bc7bfe5e547121c1a13e821ee5d027063f60d78","sha256:6436b1fecebf364ce469b6b96a3948f71fb0b1f1848a2ffa1a8446a46e68d552","sha256:07742c0f039857889d87830ddfa0ca6ea14f4e246f41f94abe8931cc268cf340"]
      - values: {"k":343}
        answers: ["sha256:acd0a35d06d51df13cf76bd80fda5a7452bfe22604ccbb480242f22973a5051c","sha256:3df383050233058abf61550730dcbd38e5104a245be430ee2bd7aa503f7e1450","sha256:815f75e944ab40c1b740b3ddf5d64c23e7ffdd893946644e031536c5fac46de8"]
      - values: {"k":999}
        answers: ["sha256:40048efbe56dcbe70ff688cbf8f8583a63201d783529fc2b1e95e63129e6eaac","sha256:a5800a8f9de839753cdde3ffc5a207300003923db95eff1228a4872d309f2f02","sha256:6e5df0f23a1ffa9d32eb039ee57cfc3873a81c2f51b6f9b57eb72dbff38160d1"]
      - values: {"k":58}
        answers: ["sha256:0dc4f82cb2b5eea8cad05a261a925191ece92f934aaef78d1b63d3390766e59e","sha256:6f40efce422e3572ee1ea0dbb1d6275903b6b21967a7c5f2ec68d2725d1c7a86","sha256:16dacbc7bc329b392afe32965368ee4b2186cba97055595ee5d149784049d0f7"]
  - id: r-mcd-mcm
    tier: 1
    type: numero
    review: true
    sig: 10
    prompt: |
      Calcula el mínimo común múltiplo de ${{a}}$ y ${{b}}$ usando que $\operatorname{mcd}(a,b)\cdot\operatorname{mcm}(a,b) = a\,b$.
      Respuesta: un entero.
    variants:
      - values: {"a":12,"b":18}
        answers: ["sha256:d6b072f3ed42caed687bd0112f977c4cb9c2afa809f4cb8df516ad2eaeff8d18","sha256:76cb1385b389db8612807abe25324cce4050874bcec17e56bdfe6f9a0c409dc5","sha256:81fb239aec7518a6aeab061f9b524162fd83c27d5b04bfd2cae2a80e1973cf90"]
      - values: {"a":21,"b":6}
        answers: ["sha256:b209c32f1028c33860a228556054769bdb9e2b9350bb9adb45b7eaf77ac08210","sha256:eb9c8cf119031007a0ef16924a399ad8378c50a476ea78991990bcd82d55fb1f","sha256:df1c6a8b11fa496d40d22d622b290d35c3be3395986c8823751f2146dc6f3618"]
      - values: {"a":35,"b":49}
        answers: ["sha256:33d4a11ce1fb300bfda3429ca2e62620c9169ff781ea696f6b4125e15a2aa499","sha256:4f09178623b020e1d0ede129d52fa6e095f7363b8409394a86b276e37fc2861e","sha256:118f8e74c252dfb929d396ba9f3016a429a30e46ee55eb6859c389ec98f40d41"]
      - values: {"a":8,"b":30}
        answers: ["sha256:b3f8ec6b7c42eb85ab3fd4828f024d37b84cedacae2ab68742e40e63900f1add","sha256:61104a8ee39d75d08e02856f0e329d5ae0bc2bb8ce841005520e85bff74b7fac","sha256:495ecf8acbebc2dd8a97b465c95575eb411186f5460dd173a580b0097a7ced32"]
      - values: {"a":44,"b":66}
        answers: ["sha256:9b8401613f1b69652825ed1247fab749c340730017d7a7bcaedbff2a1278ee3d","sha256:976286406098b38364695174a3fd09b21ba75a36edacab5e7a107ce6072781ed","sha256:a83548eeaa79d27b0785e5dbf9e7155f63c442adeda11049f20a284b14bd599e"]
  - id: r-fermat-condicion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se puede asegurar que $a^{p-1} \equiv 1 \pmod p$?
    options:
      - |
        Para todo entero $a$ y todo $n$
      - |
        Si $p$ es primo y $p$ no divide a $a$
      - |
        Solo si $a$ es primo
      - |
        Si $a < p$
    answers: ["sha256:8f2bc9ca76e72e892e5038904a34ba337440629717e2f64d91b7ffcfd2497c06"]
---

# Teoría de números: divisibilidad, congruencias, funciones aritméticas, residuos cuadráticos, primalidad y ecuaciones diofánticas

La teoría de números estudia los enteros, y durante siglos fue la rama «pura» por excelencia. Hoy es la base de la criptografía de clave pública
([[sec-criptografia]]), de los códigos correctores, de los generadores de números pseudoaleatorios y de buena parte de la algoritmia. Este nodo
recorre lo esencial con una idea guía: cada teorema viene con un **algoritmo** que lo hace útil, y cada algoritmo se puede comprobar contra una búsqueda
exhaustiva.

## Objetivos

Al terminar sabrás:

1. Usar la división euclídea, el algoritmo de Euclides extendido y la identidad de Bézout; factorizar y razonar con primos.
2. Trabajar con congruencias: inversos, sistemas lineales y el teorema chino del resto.
3. Calcular funciones aritméticas ($\varphi$, $\tau$, $\sigma$) y usar los teoremas de Fermat, Euler y Wilson.
4. Usar órdenes, raíces primitivas y la función de Carmichael.
5. Decidir si un número es residuo cuadrático (Legendre, reciprocidad) y extraer raíces cuadradas modulares.
6. Aplicar tests de primalidad (Fermat, Miller-Rabin) y resolver ecuaciones diofánticas lineales, de Pell y sumas de dos cuadrados.

## Qué debes dominar antes

[[mat-matematica-discreta]] (divisibilidad, aritmética modular básica, inducción) y [[mat-estructuras-algebraicas]] (grupos, anillos $\mathbb Z_n$, cuerpos finitos).

> [!question] Test de entrada
> 1. ¿Cuánto es $17 \bmod 5$ y $-17 \bmod 5$?
> 2. ¿Es $91$ primo?
> 3. ¿Qué orden tiene el grupo $(\mathbb Z_7^*, \cdot)$?
>
> Respuestas: $2$ y $3$; no, $91 = 7\cdot13$; $6$.

## 1. Para qué sirve

- **Criptografía**: RSA, Diffie-Hellman y las curvas elípticas viven en $\mathbb Z_n$ y en cuerpos finitos; su seguridad depende de factorizar y del logaritmo discreto.
- **Informática**: tablas *hash* con módulos primos, generadores congruenciales, sumas de comprobación, aritmética de enteros grandes.
- **Códigos**: los códigos de Reed-Solomon (QR, CD, comunicaciones espaciales) usan aritmética en cuerpos finitos.
- **Matemáticas**: una escuela de rigor: enunciados sencillos, demostraciones profundas, y la puerta a la teoría analítica (primos) y algebraica.

## 2. Divisibilidad, Euclides y primos

**División euclídea.** Para $a, b$ enteros con $b > 0$ existen únicos $q, r$ con $a = bq + r$ y $0 \le r < b$.

**Algoritmo de Euclides.** $\gcd(a, b) = \gcd(b, a \bmod b)$, y $\gcd(a, 0) = a$. Termina en $O(\log\min(a, b))$ pasos (el peor caso son dos Fibonacci consecutivos,
teorema de Lamé).

**Identidad de Bézout.** Existen enteros $x, y$ con $ax + by = \gcd(a, b)$, y el **algoritmo extendido** los obtiene arrastrando las combinaciones lineales.

> [!example] Ejemplo resuelto 1: Euclides extendido a mano
> $\gcd(240, 46)$: $240 = 5\cdot46 + 10$; $46 = 4\cdot10 + 6$; $10 = 1\cdot6 + 4$; $6 = 1\cdot4 + 2$; $4 = 2\cdot2$. El mcd es $2$. Volviendo atrás:
> $2 = 6 - 4 = 6 - (10 - 6) = 2\cdot6 - 10 = 2(46 - 4\cdot10) - 10 = 2\cdot46 - 9\cdot10 = 2\cdot46 - 9(240 - 5\cdot46) = 47\cdot46 - 9\cdot240$. Comprobación:
> $47\cdot46 = 2162$ y $9\cdot240 = 2160$.

**Teorema fundamental de la aritmética.** Todo entero $n > 1$ se escribe de forma única (salvo orden) como producto de primos. La unicidad se apoya en el
**lema de Euclides**: si un primo $p$ divide a $ab$, divide a $a$ o a $b$ (consecuencia de Bézout).

**Infinitud de los primos** (Euclides): si $p_1, \dots, p_k$ fueran todos, $p_1\cdots p_k + 1$ no sería divisible por ninguno. El **teorema de los números primos**
dice que $\pi(x) \sim x/\ln x$; la **criba de Eratóstenes** los lista hasta $x$ en $O(x\log\log x)$.

## 3. Congruencias y teorema chino del resto

$a \equiv b \pmod n$ si $n \mid a - b$. Las congruencias se suman y se multiplican como igualdades; dividir exige un **inverso**: $a$ es invertible módulo $n$ si y
solo si $\gcd(a, n) = 1$, y Bézout da el inverso ($ax + ny = 1 \Rightarrow ax \equiv 1$). La ecuación $ax \equiv b \pmod n$ tiene solución si y solo si $d = \gcd(a, n)$ divide a $b$,
y entonces tiene $d$ soluciones módulo $n$.

**Teorema chino del resto.** Si $m_1, \dots, m_k$ son coprimos dos a dos, el sistema $x \equiv r_i \pmod{m_i}$ tiene solución única módulo $M = m_1\cdots m_k$:
$x = \sum r_iM_iy_i$ con $M_i = M/m_i$ e $y_i \equiv M_i^{-1} \pmod{m_i}$. Equivale al isomorfismo de anillos $\mathbb Z_M \cong \mathbb Z_{m_1}\times\cdots\times\mathbb Z_{m_k}$, que es lo que acelera
el descifrado RSA.

## 4. Funciones aritméticas y los teoremas de Fermat, Euler y Wilson

Con $n = \prod p_i^{e_i}$:

$$
\varphi(n) = n\prod_{p\mid n}\Bigl(1 - \frac1p\Bigr), \qquad \tau(n) = \prod(e_i + 1), \qquad \sigma(n) = \prod\frac{p_i^{e_i+1} - 1}{p_i - 1} .
$$

Las tres son **multiplicativas** ($f(mn) = f(m)f(n)$ si $\gcd(m, n) = 1$), y $\sum_{d\mid n}\varphi(d) = n$.

**Teorema de Euler.** Si $\gcd(a, n) = 1$, $a^{\varphi(n)} \equiv 1 \pmod n$. *Demostración.* $\mathbb Z_n^*$ es un grupo de orden $\varphi(n)$, y por Lagrange el orden de
cualquier elemento divide al del grupo. $\blacksquare$ Con $n = p$ primo es el **pequeño teorema de Fermat**, $a^{p-1} \equiv 1$, que permite reducir exponentes:
$a^k \equiv a^{k \bmod (p-1)}$.

**Teorema de Wilson.** $p$ es primo si y solo si $(p - 1)! \equiv -1 \pmod p$ (cada elemento se empareja con su inverso salvo $\pm1$). Bonito, pero inútil como test.

## 5. Órdenes y raíces primitivas

El **orden** de $a$ módulo $n$ es el menor $k > 0$ con $a^k \equiv 1$; divide a $\varphi(n)$, así que basta probar los divisores. Una **raíz primitiva** es un $g$ de orden $\varphi(n)$:
genera todo $\mathbb Z_n^*$. Existen si y solo si $n = 1, 2, 4, p^k$ o $2p^k$ ($p$ primo impar), y entonces hay $\varphi(\varphi(n))$ de ellas. Para comprobar que $g$ es
raíz primitiva módulo $p$: $g^{(p-1)/q} \ne 1$ para cada primo $q \mid p - 1$.

La **función de Carmichael** $\lambda(n)$ es el exponente mínimo con $a^{\lambda(n)} \equiv 1$ para todo $a$ coprimo: $\lambda(p^k) = \varphi(p^k)$ para $p$ impar y
$\lambda(n) = \operatorname{mcm}$ de las de sus factores. Un **número de Carmichael** es compuesto y cumple $\lambda(n) \mid n - 1$: engaña al test de Fermat para todas las
bases coprimas. El menor es $561 = 3\cdot11\cdot17$.

## 6. Residuos cuadráticos

$a$ es **residuo cuadrático** módulo $p$ (primo impar) si $x^2 \equiv a$ tiene solución. Hay exactamente $(p - 1)/2$. El **símbolo de Legendre** $\bigl(\frac ap\bigr)$ vale $1$, $-1$ o
$0$, y el **criterio de Euler** lo calcula: $\bigl(\frac ap\bigr) \equiv a^{(p-1)/2} \pmod p$.

**Ley de reciprocidad cuadrática** (Gauss). Para primos impares distintos,
$\bigl(\frac pq\bigr)\bigl(\frac qp\bigr) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}$, con los suplementos $\bigl(\frac{-1}{p}\bigr) = (-1)^{(p-1)/2}$ y $\bigl(\frac2p\bigr) = (-1)^{(p^2-1)/8}$. Permite calcular símbolos
reduciendo como en Euclides.

> [!example] Ejemplo resuelto 2: reciprocidad (con menos ayuda)
> $\bigl(\frac{3}{11}\bigr)$: como $3 \equiv 11 \equiv 3 \pmod 4$, $\bigl(\frac3{11}\bigr) = -\bigl(\frac{11}{3}\bigr) = -\bigl(\frac23\bigr) = -(-1) = 1$. En efecto, $5^2 = 25 \equiv 3 \pmod{11}$. Calcula tú
> $\bigl(\frac5{97}\bigr)$: como $5 \equiv 1 \pmod 4$, es $\bigl(\frac{97}{5}\bigr) = \bigl(\frac25\bigr)$, y $5 \equiv 5 \pmod 8$.

Hallar la raíz (no solo saber que existe): si $p \equiv 3 \pmod 4$, $x = a^{(p+1)/4}$; en general, el algoritmo de **Tonelli-Shanks**.

## 7. Primalidad

- **Fermat**: si $a^{n-1} \not\equiv 1 \pmod n$, $n$ es compuesto. Los números de Carmichael lo engañan.
- **Miller-Rabin**: escribe $n - 1 = 2^sd$ con $d$ impar; $n$ supera la prueba en base $a$ si $a^d \equiv 1$ o $a^{2^rd} \equiv -1$ para algún $r < s$. Un compuesto la supera
  para como mucho $1/4$ de las bases, así que $k$ bases aleatorias dejan una probabilidad de error menor que $4^{-k}$. Con un conjunto fijo de bases es
  determinista para enteros de 64 bits.
- **AKS** (2002) probó que la primalidad está en P; en la práctica se usa Miller-Rabin (y certificados para primos «demostrados»).

## 8. Ecuaciones diofánticas

- **Lineales** $ax + by = c$: tienen solución si y solo si $\gcd(a, b) \mid c$; si $(x_0, y_0)$ es una, todas son $x_0 + \frac bdt$, $y_0 - \frac adt$.
- **Pell** $x^2 - Dy^2 = 1$ ($D$ no cuadrado): tiene infinitas soluciones, generadas por la fundamental, que se lee en la **fracción continua periódica** de $\sqrt D$
  (es un convergente al final del primer periodo o del segundo). Para $D = 14$, $\sqrt{14} = [3; \overline{1, 2, 1, 6}]$.
- **Sumas de dos cuadrados** (Fermat): un primo impar es suma de dos cuadrados si y solo si $p \equiv 1 \pmod 4$; en general, el número de representaciones es
  $r_2(n) = 4(d_1(n) - d_3(n))$, con $d_j$ el número de divisores $\equiv j \pmod 4$.

## 9. Comprobar con un programa

Euclides extendido, la criba, Miller-Rabin, el teorema chino del resto y Pell, cada uno contrastado con una búsqueda directa.

```python
from math import gcd, isqrt

def euclides(a, b):
    x0, x1, y0, y1 = 1, 0, 0, 1
    while b:
        q, a, b = a // b, b, a % b
        x0, x1, y0, y1 = x1, x0 - q * x1, y1, y0 - q * y1
    return a, x0, y0

# 1. Ejemplo resuelto 1.
d, x, y = euclides(240, 46)
assert d == 2 and 240 * x + 46 * y == 2

# 2. Criba frente a división por tentativa hasta 10⁴.
def criba(n):
    es = [True] * (n + 1)
    es[0] = es[1] = False
    for i in range(2, isqrt(n) + 1):
        if es[i]:
            es[i * i :: i] = [False] * len(es[i * i :: i])
    return [i for i, v in enumerate(es) if v]

primos = criba(10_000)
assert primos == [n for n in range(2, 10_001) if all(n % k for k in range(2, isqrt(n) + 1))]
assert len(primos) == 1229

# 3. Miller-Rabin determinista para n < 3,3·10²⁴ con las 12 primeras bases primas.
def miller_rabin(n):
    if n < 2:
        return False
    for p in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
        if n % p == 0:
            return n == p
    d, s = n - 1, 0
    while d % 2 == 0:
        d, s = d // 2, s + 1
    for a in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37):
        x = pow(a, d, n)
        if x in (1, n - 1):
            continue
        for _ in range(s - 1):
            x = x * x % n
            if x == n - 1:
                break
        else:
            return False
    return True

assert all(miller_rabin(n) == (n in set(primos)) for n in range(2, 10_001))
assert not miller_rabin(561) and pow(2, 560, 561) == 1   # Carmichael: engaña a Fermat, no a Miller-Rabin
assert miller_rabin(2**61 - 1)                            # primo de Mersenne

# 4. Teorema chino del resto frente a recorrido directo.
def tcr(restos, modulos):
    x, M = 0, 1
    for r, m in zip(restos, modulos):
        x += M * ((r - x) * pow(M, -1, m) % m)
        M *= m
    return x % M

assert tcr([2, 3, 2], [3, 5, 7]) == next(n for n in range(105) if (n % 3, n % 5, n % 7) == (2, 3, 2))

# 5. Pell x² − 61y² = 1: la fracción continua da una solución famosa por lo grande que es.
def pell(D):
    a0 = isqrt(D)
    m, d, a = 0, 1, a0
    h0, h1, k0, k1 = a0, 1, 1, 0
    while h0 * h0 - D * k0 * k0 != 1:
        m = d * a - m
        d = (D - m * m) // d
        a = (a0 + m) // d
        h0, h1, k0, k1 = a * h0 + h1, h0, a * k0 + k1, k0
    return h0, k0

x, y = pell(61)
assert x * x - 61 * y * y == 1
print("Pell D = 61:", x, y)
```

## 10. Errores típicos

- Dividir en una congruencia sin comprobar que el divisor es invertible.
- Aplicar el teorema chino del resto con módulos no coprimos.
- Reducir el exponente módulo $p$ en vez de módulo $p - 1$ (o $\varphi(n)$).
- Tomar el test de Fermat como prueba de primalidad (Carmichael).
- Confundir el símbolo de Legendre con la existencia de raíz cuando $p$ no es primo (el de Jacobi puede valer $1$ sin que haya raíz).
- Usar coma flotante con enteros grandes.

## 11. Resumen

- Euclides y Bézout; lema de Euclides; factorización única; infinitud de los primos; criba.
- Congruencias, inversos, $ax \equiv b$; teorema chino del resto.
- $\varphi$, $\tau$, $\sigma$ multiplicativas; Euler, Fermat, Wilson.
- Orden, raíces primitivas ($\varphi(\varphi(n))$), Carmichael ($\lambda$, $561$).
- Legendre, criterio de Euler, reciprocidad; Tonelli-Shanks.
- Miller-Rabin; Pell por fracciones continuas; sumas de dos cuadrados.

## Repaso: lo que debe quedarte dentro de un mes

1. Euclides extendido da el mcd y el inverso.
2. El teorema chino del resto trocea un módulo en primos.
3. $a^{\varphi(n)} \equiv 1$: los exponentes se reducen módulo $\varphi(n)$.
4. Legendre por el criterio de Euler o por reciprocidad.
5. Para primalidad, Miller-Rabin; Fermat solo no basta.

## Siguiente

[[sec-criptografia]] aplica todo esto; en las ramas, `mat-algebra-conmutativa-galois` (cuerpos finitos y extensiones), `sec-criptoanalisis` y la teoría
analítica de números con [[mat-analisis-complejo]].
