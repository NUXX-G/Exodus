---
id: mat-ecuaciones-segundo-grado
title: "Ecuaciones de segundo grado y reducibles: fórmula, discriminante, incompletas, suma y producto, bicuadradas, racionales y radicales"
area: matematicas
trunk_level: 3
prerequisites: [mat-ecuaciones-primer-grado, mat-potencias-raices]
academic_sources:
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 5: «Ecuaciones y sistemas», secciones 2.1-2.6 (ecuaciones de segundo grado completas e incompletas, número de soluciones, suma y producto de raíces, grado superior sencillo) y 4.2 (problemas). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/05%20Ec%202%20grado%203.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 4: «Ecuaciones y sistemas», secciones 1.1-1.5 (segundo grado) y 2.1-2.3 (ecuaciones bicuadradas, racionales y radicales) y 5.1 (problemas). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/04_Ecuaciones_4B.pdf"
hints:
  - "Concepto: si un producto vale 0, alguno de los factores vale 0. Toda ecuación de segundo grado se puede escribir como un cuadrado igual a un número (completando el cuadrado); de ahí sale la fórmula, y el discriminante b² − 4ac dice cuántas soluciones hay."
  - "Herramienta: incompletas sin fórmula (factor común o despejar x²); completas con x = (−b ± √(b² − 4ac)) / 2a; bicuadradas con el cambio t = x²; racionales multiplicando por el mcm (y descartando lo que anula un denominador); radicales aislando la raíz, elevando al cuadrado y COMPROBANDO."
  - "Documentación: Marea Verde 3.º ESO cap. 5 (sección 2); 4.º ESO B cap. 4 (secciones 1 y 2)."
exercises:
  - id: ecuacion-completa
    tier: 1
    prompt: |
      Resuelve ${{p}} = 0$. Escribe las soluciones de menor a mayor separadas por `;` (con punto decimal si hace falta).
    variants:
      - values: {"p":"x^{2} - 7x + 10"}
        answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
      - values: {"p":"2x^{2} + 5x - 3"}
        answers: ["sha256:aaee3bf5f531081b91fb7e50610a0cf8f965bba2dad40b478249bf4792a21772"]
      - values: {"p":"x^{2} - 2x - 24"}
        answers: ["sha256:05e6d5f03ef2176b07e7c58f65ec40696c3d596dec74525863606f9a35b31f43"]
      - values: {"p":"4x^{2} - 8x + 3"}
        answers: ["sha256:f9525b3c8a3d1d934171eff46f8b1580c6131dee1a75800113d2bdde1bd712e8"]
      - values: {"p":"x^{2} + 9x + 14"}
        answers: ["sha256:6d4b49853a03c44780078d35858b99ce2335a4a4590e41afe888950666320d9b"]
      - values: {"p":"5x^{2} - 2x - 3"}
        answers: ["sha256:1000de3819ae708f0d04656291539ef27aac8f38ebf3afbcccefa877b5823ca6"]
  - id: incompleta-sin-termino-independiente
    tier: 1
    prompt: |
      Resuelve ${{p}} = 0$ sacando factor común. Soluciones de menor a mayor separadas por `;`.
    variants:
      - values: {"p":"3x^{2} - 12x"}
        answers: ["sha256:0c5aebaeaad18e1d61fc9baec15f323e37bb289583a9df82fc4119378603f378"]
      - values: {"p":"5x^{2} + 10x"}
        answers: ["sha256:cf7658449d48372050528143acb8a1b7ee1ae714c0183ec82d665c157ce5f684"]
      - values: {"p":"2x^{2} - 14x"}
        answers: ["sha256:4fdb3515a4601cad71bf132941cf4ab421f89e1592c19534eee4e7560d04cbfd"]
      - values: {"p":"4x^{2} + 2x"}
        answers: ["sha256:57166449fa2b1a15d5e83d5c5052655cf818dfc47dcc0bb598c18c82765e4ed3"]
      - values: {"p":"6x^{2} - 9x"}
        answers: ["sha256:586e3c0a52e395836ed03657707b94f9d99c7d8cf2d0dac2cd85be101562d2bb"]
      - values: {"p":"x^{2} + 9x"}
        answers: ["sha256:ece9a1c67cfe16ab718cb30ffbb26160c56d34188a0510159d9459c923537770"]
  - id: incompleta-sin-termino-en-x
    tier: 1
    prompt: |
      Resuelve ${{p}} = 0$. Soluciones de menor a mayor separadas por `;`; si no tiene ninguna real, responde `ninguna`.
    variants:
      - values: {"p":"2x^{2} - 18"}
        answers: ["sha256:1414789ebe1937eb0117546f99695e50c16d418338ca44b2e904dbfb6dcd1f94"]
      - values: {"p":"5x^{2} - 20"}
        answers: ["sha256:91989f54f40d32cdc575b24f74bcadfdbfe0c6be82319c2714e31cd5e58c7047"]
      - values: {"p":"4x^{2} - 25"}
        answers: ["sha256:824f9618a0b15ffacefa825649189cedb1a604714f97fd4c27ab74ecee27ef44"]
      - values: {"p":"9x^{2} - 9"}
        answers: ["sha256:0fb6cfb21a559369b7285fab68096966b9835b190c99b3918a5b808aca6f04b7"]
      - values: {"p":"x^{2} - 144"}
        answers: ["sha256:db42774c24c6a2aacbc520bd0b10635e28b8f59a4990ca6d530cf5b59e3c84af"]
      - values: {"p":"2x^{2} + 8"}
        answers: ["sha256:308b666bfd216587c69de1a2b90c5ed164a22ca51866e6624a3ac9f0c7bfe560"]
  - id: discriminante
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Sin resolverla, ¿cuántas soluciones reales tiene ${{p}} = 0$?
    variants:
      - values: {"p":"x^{2} - 6x + 9"}
        answers: ["sha256:f11721c9f94f5d1b8437040d1d78882f22f6c042de09c71b5314bf300be53dbd","sha256:ecdf05e5034e11d9ecb648a7dffb897e14048d4f36fbde6720e35a56fde8cc40","sha256:eae0bcfe63e2211c3a49d19e0a0388516a7b7a5338967580633b8d1b60273765"]
      - values: {"p":"2x^{2} + 3x + 5"}
        answers: ["sha256:12b11fc18ad4bfe4a949b7a05dc0fec6e3a74fcb5527c63f5aa56e5eaa663ce8","sha256:6a765aff57118cdc7ed7ad21b0c661775765dcb6ea932c43b0f684b0a18ae05e","sha256:fb5ed239e5a9502533f0ad37ebc03524acb02e7aec3219c2459c430b1ae87e1b"]
      - values: {"p":"3x^{2} - 7x + 2"}
        answers: ["sha256:c8a12c712fd43249650afbffd8f8c608e6ab089dcedc2214b336785d5a33ecf3","sha256:7fb05ce3186c67a510653c0d712a49766d3301632edf6e58d6f4307a64a456d9","sha256:26e292db338daaa273db951b877a7847ba3be2505f7c70d07b47f9e0ff526db9"]
      - values: {"p":"4x^{2} + 4x + 1"}
        answers: ["sha256:3cc55b263a4e3834a7cceaa6928d92ba40431b8b333a87b84ed7c06e70814979","sha256:0f96bd57c0b0871c1d5b367a5aca8ff6ef062522270da7cb4bb2eb154ab967b0","sha256:175939081315479a49c80acc9d2547ceedb6a70b06129de233746b72987716de"]
      - values: {"p":"x^{2} + x + 1"}
        answers: ["sha256:4d741a94b67e90604026af36c62f218abde90c3d8205a1982387938058eddc8e","sha256:e8c7955075007623d64d2d352b772d7d2b1e4dba9a962dac48ccb2b574ef6116","sha256:7dda7c6413f7a3c3077e0632956ac9ceffbda085c40d1deb0afc075fedc7e901"]
      - values: {"p":"5x^{2} - 2x - 1"}
        answers: ["sha256:5ffe6dacfb0316f3c6a5fb85835b7c8111bb19290fd816d6f7062e9af7c284da","sha256:85f93b837a14b81cdd2a24b94890d4f5aca0cb7801c8c4a615d090ba744e9b41","sha256:10cde4464f11c7aa1dccdf4782ca4cf337a8564004606673b4d8b06d5a226ca8"]
  - id: suma-y-producto
    tier: 2
    prompt: |
      Sin resolver la ecuación ${{p}} = 0$, calcula la suma y el producto de sus soluciones. Respuesta: `suma;producto`.
    variants:
      - values: {"p":"2x^{2} - 10x + 12"}
        answers: ["sha256:fd784e5ada599c9e961ab94431c8551d642c33df00ddaebee2d9fb8a152123e0"]
      - values: {"p":"3x^{2} + 9x - 12"}
        answers: ["sha256:58d1f49b0d4e4a104f05e882ac015efcb35a9b353f110c41689c897b3743ed84"]
      - values: {"p":"4x^{2} - 2x - 6"}
        answers: ["sha256:3b7a86bd786d9db501e84cd2ff7aa92cc86f32aa4546a364710fb78c5a6ab70f"]
      - values: {"p":"5x^{2} + 15x + 10"}
        answers: ["sha256:85855cd78ff369de1bd910dfeab9fe0afaabba6cb580765b74941c1d35bbb774"]
      - values: {"p":"2x^{2} + 7x - 4"}
        answers: ["sha256:ae91cefb30d4564b7b2ddfd0786a3c466269b4769501ae43e9b41c8e83473a8b"]
      - values: {"p":"10x^{2} - 3x - 1"}
        answers: ["sha256:8f4ba024c5d58b62a0e5f6fdb0082f306e68bb58471a19d14931ec57d2709f90"]
  - id: ecuacion-con-raices-dadas
    tier: 2
    prompt: |
      Escribe una ecuación $x^2 + bx + c = 0$ cuyas soluciones sean ${{r}}$ y ${{s}}$. Respuesta: `b;c`.
    variants:
      - values: {"r":"3","s":"8"}
        answers: ["sha256:35af0ba70b5f4fae5259ecf0df0b1f98cdc818fea53196de6f5c6f70b2700435"]
      - values: {"r":"-2","s":"5"}
        answers: ["sha256:1aaba06729e9a5d08e2f4440aba10f52e8eaba1d561a27f001941c1c5d5bb354"]
      - values: {"r":"-4","s":"-6"}
        answers: ["sha256:d68376827257c8bc3575c944d0c8aa3e2909ef8e5c9e458f281d95aca78c477e"]
      - values: {"r":"0{,}5","s":"2"}
        answers: ["sha256:9f29b1dcc374530624a116dd442307e718d4c4878c141e4d368a0164730aece6"]
      - values: {"r":"7","s":"-7"}
        answers: ["sha256:5b58f92ff11ccae06cbec519cfcee120b4c9b79146ec4cff3519b3d377e6a2d2"]
      - values: {"r":"1{,}5","s":"-4"}
        answers: ["sha256:f9c821bc284df78148fd3349d3f4ba43c961b9a99ff2675af7361a8c8ae0692e"]
  - id: parametro-con-una-solucion
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Se sabe que $x = {{r}}$ es solución de $x^2 + kx {{c}} = 0$. ¿Cuánto vale $k$?
    variants:
      - values: {"r":3,"c":"- 6"}
        answers: ["sha256:50b36d11fa24b3a5f1f5d8a6d3067e1ac7b046ba9b8f0600546c2efbf6d83c95","sha256:6bb54e8b033b337fcdbdff14adeea3c7e3a95a1f53fe6debad71efdbb41347d7","sha256:38bf3156b56c2fb99eb27d1b71c6b399f299fb4d5c83f02f470f6a9c1e9320ba"]
      - values: {"r":2,"c":"+ 8"}
        answers: ["sha256:d098e15b2ed5d5ddc34888ee4ad643f5fe9d71552a1827ddf151e2edfc29abea","sha256:2e657fc60945b0f01e79ccb3fe34e69d26cacc005a7341c82c032df1e2ecff29","sha256:f4e962ded53ec39a252581e9c4d83ff7b7c3c11b4facfab87aa3db60240dc6fc"]
      - values: {"r":-4,"c":"+ 12"}
        answers: ["sha256:1e99fd599fea849de4604f873a88b5e443723f8a2c0c65277a6ed0ec3cc6716f","sha256:085ff7f4b2155d399a59e469fed8dce9e4c859ee6596d8e06f0ee95317b4040d","sha256:0fea93872ffed8809f7601ffe82b88814e384c09cc552e26b58133425e920ad8"]
      - values: {"r":5,"c":"- 15"}
        answers: ["sha256:c94e5a16826bf566fda68a919fb1d754b8661e260b9e723f4da2a6d6a7dde118","sha256:46bb60eb437cf919dc84d93c8089f19249751b4674815727d66ab532d497f014","sha256:0dd2b8c4636903df0b9e7331e934f6d74cc08162aa7df4d6938b1f9f360ffcc0"]
      - values: {"r":-1,"c":"- 8"}
        answers: ["sha256:fe8757b23f2a070fc35ed5ea57d816ca25278ebedbc75e804152dc498aaf4025","sha256:8da4298db382716eb6efd4edac0a4a5555a4d8f57b3c66fb8903342b3c6c2f64","sha256:99d715bbd84e3cb668586b1b5f3a43e3ce73f0ee5d9de240b83212d7eb3d7d69"]
      - values: {"r":6,"c":"+ 6"}
        answers: ["sha256:a87268e9b7e6fc0fb4956c1764972894a1a79b41ff4dd7c5c2a7549d5d17c558","sha256:ba47890d612ba046a8cf1acdcc48a36821f55c5c77e1c4de15d2d1931bc6a9c1","sha256:8cd1959570fccb0d8a8372e1173d45bcb18074b31251ec832c7a770b98c405c7"]
  - id: ecuacion-bicuadrada
    tier: 2
    prompt: |
      Resuelve la ecuación bicuadrada ${{p}} = 0$. Escribe todas las soluciones reales de menor a mayor separadas por `;`, o `ninguna`.
    variants:
      - values: {"p":"x^{4} - 13x^{2} + 36"}
        answers: ["sha256:df59ae9f0bc4b7cdbebf9ce0e2bdfeba0c1e96ca0c7f7e7c21fb68731abff1cc"]
      - values: {"p":"x^{4} - 17x^{2} + 16"}
        answers: ["sha256:1e97551c7ff3ddd8c528e7bd2c3c4592ed0cb42960a309fc5f74f29aeeb26f13"]
      - values: {"p":"x^{4} + x^{2} - 20"}
        answers: ["sha256:91989f54f40d32cdc575b24f74bcadfdbfe0c6be82319c2714e31cd5e58c7047"]
      - values: {"p":"x^{4} - 24x^{2} - 25"}
        answers: ["sha256:f2f90a75ea2c0922eaddce9c6f8723528d9000a93ac08ccb22082781ca5f1805"]
      - values: {"p":"x^{4} - 9x^{2}"}
        answers: ["sha256:5dd99d95dcdb05ce144cdf1b04588f1817d7c0cbab58c3e2f00a0ec3eda3d813"]
      - values: {"p":"x^{4} + 9x^{2} + 14"}
        answers: ["sha256:308b666bfd216587c69de1a2b90c5ed164a22ca51866e6624a3ac9f0c7bfe560"]
  - id: ecuacion-racional
    tier: 2
    prompt: |
      Resuelve $x {{k}} = {{m}}$. Soluciones de menor a mayor separadas por `;`.
    variants:
      - values: {"k":"+ \\dfrac{6}{x}","m":5}
        answers: ["sha256:1083d1bbccb71d5ab61b1e29e2dc0fc5c5d89c5659e8ef4a8496761c2659b5f0"]
      - values: {"k":"+ \\dfrac{4}{x}","m":5}
        answers: ["sha256:2192dfe7c072e51bc665f3cf7966dd5260acafe140c94ddbd3e647a592956039"]
      - values: {"k":"- \\dfrac{10}{x}","m":3}
        answers: ["sha256:a51d9b712489823e55107f918de66becfc484639e6adc72b2fdcab25183ffd5b"]
      - values: {"k":"+ \\dfrac{6}{x}","m":-7}
        answers: ["sha256:1602395dccf4e2c49f43d4b4c2cff2625fbfa06a129032a47528ccdb2427b382"]
      - values: {"k":"+ \\dfrac{16}{x}","m":10}
        answers: ["sha256:583c12aae4e6d48b8f11ffb94cdbe8bd5cc05249d4c97508d43dae91200296f8"]
      - values: {"k":"- \\dfrac{12}{x}","m":1}
        answers: ["sha256:682acd6a9ce15dbd8c553f8124cb22bf0afa570b2f9f7b716c37452b819298ab"]
  - id: ecuacion-radical
    tier: 3
    prompt: |
      Resuelve $\sqrt{{{iz}}} = {{de}}$. Comprueba las soluciones y escribe solo las válidas, de menor a mayor separadas por `;`.
    variants:
      - values: {"iz":"2x + 10","de":"x + 1"}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"iz":"3x - 2","de":"x - 2"}
        answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
      - values: {"iz":"3x + 4","de":"x"}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"iz":"2x + 14","de":"x + 3"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"iz":"5x - 9","de":"x - 1"}
        answers: ["sha256:e9cc9ba12e19f3d98eadee95dca279f4062d8d873e1c9b10318c20b91a718d73"]
      - values: {"iz":"7x + 32","de":"x + 2"}
        answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: rectangulo-area-perimetro
    tier: 2
    prompt: |
      Un rectángulo tiene ${{A}}$ cm² de área y ${{P}}$ cm de perímetro. ¿Cuánto miden sus lados? Respuesta: `menor;mayor`.
    variants:
      - values: {"A":24,"P":22}
        answers: ["sha256:688f28fc79dc3a786afef03cc18d185e47e71d5c677b4827e3d7ab51a3105338"]
      - values: {"A":40,"P":26}
        answers: ["sha256:ddc5f07acffc1086adab714f524fce9c0a6e827245d94d29e14c56f1d1820838"]
      - values: {"A":60,"P":34}
        answers: ["sha256:fadf064a1cbeb0c0c2636d3829683d8a29136054ed441b5dc0ae00892b4021b9"]
      - values: {"A":18,"P":18}
        answers: ["sha256:b00744b5a50b67c51ba9f6257456807bcf7970df0f191d73e6fd18aaf20646d9"]
      - values: {"A":91,"P":40}
        answers: ["sha256:f768cd7638330fc3a3da12436b9962d1b216ecc12e750f634dc0530ec0cab802"]
      - values: {"A":45,"P":28}
        answers: ["sha256:8ac3c9a91991b05ea547203fb10700a74e8d95b8686d37116686b5acc23f6dc1"]
  - id: consecutivos-producto
    tier: 1
    type: numero
    sig: 10
    prompt: |
      El producto de dos números naturales consecutivos es ${{N}}$. ¿Cuál es el menor?
    variants:
      - values: {"N":156}
        answers: ["sha256:1ee8014ac7fbe82f59b922accb13b58b3fa96a8f574f3c77440e26c24f7c9f2f","sha256:25db3fc70b8e1910ff2d33ae6b7fd77bd427d8ec180b446a1eb7c7c4da334cea","sha256:58c3536004a421ec70024785e7701243f01555cf0794e4d6212de37e4f430911"]
      - values: {"N":306}
        answers: ["sha256:1be36456ce971e19bd5a587aeca570167b688bfe1622390994aa6a784bf3b162","sha256:67549052c42d597d8656307025497caadcb6eeca076454d52b7e557cfa43010d","sha256:cf688b8f174e63c6a4195d0360ab7ac538dcb70fc0610d7f081434d145835a9b"]
      - values: {"N":552}
        answers: ["sha256:a89b0307c51cc8d01c8147da05ab2f96fc18e48761405b441a2f99bd6f0a1609","sha256:21bb612841326889a8498bc1f4d80020d9f59f28bf6349290e9a2fc6f568fd26","sha256:c37145fcb9332bfefc8f284af0c0806376359540f5395b5e58d0a4f76887a9d7"]
      - values: {"N":42}
        answers: ["sha256:ef9ddcff4173d1dd655f52aa76a812802bc98c1cddd820ebc65baf2bcd14f318","sha256:83e59f4b14d2d7fc26fb17162f33077e3643ad4bc8d0858a93f1e21847b19655","sha256:6465d7243dac84fcc917ca439aca35ddb9bc64f7c4755a881727018159e8e277"]
      - values: {"N":930}
        answers: ["sha256:57c162a7133fe2edd70e9ed581b3344461b8de8d6c46d04166abf3ad2825d275","sha256:80f94912a008f18af877487853fde004402f2f3d657eeecabc60648eee7e72a4","sha256:e93d4469cf050813a1f8f576d7c7fa78d45d38a91999c9265263496a401d679d"]
      - values: {"N":1056}
        answers: ["sha256:4df2d9b677f46b20844273f62dbc5073e2b7cd7afcfd1f512092971e4e43c4ea","sha256:c062aa9151d927de3ce69f20f660bfbcd01645668e4b7140cc504ad4896fa285","sha256:1e79dd11d55c07ae49a678dcac65626650f40ec052dac3f532000a68813ca7bf"]
  - id: lanzamiento-vertical
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Se lanza una pelota hacia arriba; su altura en metros a los $t$ segundos es $h = {{v}}t - 5t^2$. ¿En qué instante (en segundos) alcanza
      por **primera** vez los ${{H}}$ m de altura?
    variants:
      - values: {"v":30,"H":40}
        answers: ["sha256:e823fddf0a63812aa0462b2bb60f534e509c266c942c1bec7dd82f41472243ff","sha256:a8c10eaf44bda3dfcb7805f9f73fc1fe38e333132bc146734d421b1d6d1b74f6","sha256:1d071c90fcd4ca4db383ee4be17e973899e86b41852e8af1fc3349edac2deb5c"]
      - values: {"v":20,"H":15}
        answers: ["sha256:37976238127fe99f5da7977b8885a83cc52b04d6375f87e40f8b56d77a6614e1","sha256:b0686ff04881aaf50773e7dfab8ff02f69cb49ef9909ef4092d5a8f579d2ab43","sha256:2b16ae27798bf9e753be79251980bb238113a8f84cbefaaa76a95363029f3190"]
      - values: {"v":40,"H":75}
        answers: ["sha256:f822fac8f42f8610d4183b1f8cee2957a0924164b75d6accb47a018f4e1bb7da","sha256:ab4f946f950ba0819ab43eb02fd1cd484a3263c56036f05b8f0c467bed27109f","sha256:ff4101c50031bec9882fe5ace952bf163eb50a8c4077afc4446bbb990e055206"]
      - values: {"v":50,"H":120}
        answers: ["sha256:ca508585aece6319482fe89d9da234cb914c35b92612c9a4dbbe56314f3a0ae7","sha256:b952082da63768cbd4c5ae04b684f0805fa130994171586ff2f61ab369822cb8","sha256:24053f19e956ebd2a022394e10315415d9725056fff49b205f515543363fbcec"]
      - values: {"v":35,"H":50}
        answers: ["sha256:26a6a33d69380471099af1efb575c86d64901f26f7639b1b1a3ac1c194689b18","sha256:0a2e729f1ad8df0b85111e09d1ad17fc7bb37de6eb15b3c855d29ed67c43869c","sha256:f7f0758cbe645d2a943d47bae2085217d5bd630fcd9dffb705463080dd181e58"]
      - values: {"v":45,"H":90}
        answers: ["sha256:a260e7613affac14d88e457941d794bd646f2a10cbbcef5f62a0a0a3d113a6c4","sha256:36bca2f1e4d0f2d97a1367eb067c91becc4102c063bc87b957c691638e9445b6","sha256:9008546721312a2fe758af523f9fa722c15e5456b913303751ef73fc110fa49d"]
  - id: deducir-la-formula
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Deduce la fórmula de la ecuación de segundo grado $ax^2 + bx + c = 0$ ($a \neq 0$) **completando el cuadrado**, y explica a
      partir de ella por qué el signo de $b^2 - 4ac$ decide el número de soluciones reales.
    sealed: "gz64:H4sIAAAAAAACCpWSvW7bMBSFX+VA4GCjsmEImYS6S5ItW8eyBijqRiVAXTokFTgQ9EidumX1ixWUFauOkaLd+HPPd8/96bPgbBeN46zM7syzqU3rAoijJwglSojDrsAnSPnolUalcJhvWmGLjVjj1rUOQkpLj3ExB/TV0BdqkNKb5kdc7gps8TGur3bF0N+oXTGIHKFrVbLyAk8hjkdxHVdKFkLyP2W+UmN1Ucj8jxVulH6LWp9y3FsEajquHVpDbeUdoiEmkEUwDTvUlCzekY0Jd+YILMiiJnatYVU7D5HAAhSwd8FE8+yWa8mSV/hqZsQXbMb+vy9qtLpvpzcpw5OP/SQaxgiRo3YBabTaOKaQKOcCV9Wox6Sc6z1p1+99bD/2sRE5OlYpk5rSHX8xFrWrLC1PWVcXomv85xHfMXSnaq9qh0hc++NPhaeOEMiDqVGpSzlMmzpWWYJ2DD6+tuRdgCdlKZRgw83kZ7KSftZZnvmu8kZn5bc+095E8sa9bTzN644XaNfuLUWVxnp2pJ33pKNqiSMl3L7j6EJWFkN+AXyw1Cio/+r3X3D3h701WsG6gOgpQKuQBkvN8ZX/XDyL2gTtTdqwK4vfh99i/RO45wMAAA=="
  - id: r-producto-cero
    tier: 1
    review: true
    prompt: |
      Resuelve $(x - 6)(x + 1) = 0$. Soluciones de menor a mayor separadas por `;`.
    answers: ["sha256:5fad9a0ca2d609a69959f8a2492fc9086ae8195614bc7202f81fcbcb50cc2b1a"]
  - id: r-no-dividir-por-x
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué no se debe resolver $x^2 = 7x$ dividiendo los dos miembros entre $x$?
    options:
      - |
        Porque $x$ es siempre negativo
      - |
        Porque la ecuación deja de ser de segundo grado
      - |
        Porque si $x = 0$ es solución, se pierde
      - |
        No hay ningún problema
    answers: ["sha256:2897237b4800a6a29088a651d4b7ba05e6b611532f284832a224a56fd4d67b24"]
  - id: r-discriminante-negativo
    tier: 1
    type: opcion
    review: true
    prompt: |
      Si el discriminante de una ecuación de segundo grado es negativo, ¿cuántas soluciones reales tiene?
    options:
      - |
        Ninguna solución real
      - |
        Una solución doble
      - |
        Dos soluciones
      - |
        Infinitas soluciones
    answers: ["sha256:64cb21b464b48b4a6054822f15e07ab0573cdb47e40667131d5e365c0c7f943f"]
  - id: r-comprobar-radical
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué es **obligatorio** comprobar las soluciones de una ecuación con raíces cuadradas?
    options:
      - |
        Porque la fórmula falla
      - |
        Porque las raíces cuadradas son siempre enteras
      - |
        Por costumbre
      - |
        Porque elevar al cuadrado puede añadir soluciones falsas
    answers: ["sha256:41b35f5a2103bfc11defcbd68273409e031760566cb9f540c25174e18961ded3"]
  - id: r-cambio-bicuadrada
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué cambio de variable convierte $x^4 - 29x^2 + 100 = 0$ en una ecuación de segundo grado?
    options:
      - |
        $t = x$
      - |
        $t = x^2$
      - |
        $t = x^4$
      - |
        $t = \sqrt{x}$
    answers: ["sha256:2d8ff9c30827fb1ee23f8115f97b4697780494996ffa0387b7c137255c0709de"]
  - id: r-raiz-doble
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      La ecuación $x^2 + 10x + 25 = 0$ tiene una solución doble. ¿Cuál es?
    answers: ["sha256:8f3aafe6f82e1a6dad1bbc00af83d204676c81896cfd14f1ba62bd8c814a5a69","sha256:bb5ef07449c4ec1337b3e61b794394357e56c287284dd7ffbaed9a7ecbda6ba1","sha256:3572a6b55b3dcc1f3d97bdb60aa35d28cad628ac70c380a91bdffb96d8c962c8"]
  - id: r-suma-raices
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto suman las soluciones de $3x^2 - 12x + 7 = 0$?
    answers: ["sha256:7cc54d78efbca15410d5d988240f0f11c6730b819e2d6da30f8a28a0b10219c6","sha256:b2aee7605883957904b4696ff92069f590e115293b519c17d8a60705976e70e2","sha256:b387fc928ed403f3dc3c713f6c71dcefca29b40147ddf9b2d42f35d2f49d2357"]
---

# Ecuaciones de segundo grado y reducibles: fórmula, discriminante, incompletas, suma y producto, bicuadradas, racionales y radicales

«Un terreno rectangular mide $15$ m² y su perímetro es $16$ m. ¿Cuánto miden sus lados?» Al plantearlo aparece $x(8 - x) = 15$, es decir
$x^2 - 8x + 15 = 0$: la incógnita está **al cuadrado** y las reglas de las ecuaciones de primer grado ya no bastan para despejarla. Este
nodo enseña a resolver cualquier ecuación de segundo grado (con una fórmula que se deduce, no solo se memoriza), a saber cuántas
soluciones tiene sin resolverla, y a reducir a ella otras ecuaciones más complicadas: bicuadradas, con la incógnita en el
denominador o dentro de una raíz.

## Objetivos

Al terminar sabrás:

1. Resolver ecuaciones de segundo grado incompletas sin fórmula y completas con la fórmula general.
2. Usar el discriminante para saber el número de soluciones reales.
3. Usar las relaciones de suma y producto de las soluciones.
4. Resolver ecuaciones bicuadradas, racionales y radicales, comprobando las soluciones cuando hace falta.
5. Plantear y resolver problemas que llevan a una ecuación de segundo grado, descartando soluciones sin sentido.

## Qué debes dominar antes

[[mat-ecuaciones-primer-grado]] (ecuaciones equivalentes, planteamiento de problemas), [[mat-potencias-raices]] (raíces cuadradas) y
los productos notables de [[mat-expresiones-algebraicas]].

> [!question] Test de entrada
> 1. Desarrolla $(x - 4)^2$.
> 2. ¿Qué números al cuadrado dan $49$?
> 3. Saca factor común en $5x^2 - 15x$.
>
> Respuestas: $x^2 - 8x + 16$; $7$ y $-7$; $5x(x - 3)$.

## 1. Para qué sirve

- **Geometría**: áreas de rectángulos, cuadrados y triángulos con un lado desconocido; el teorema de Pitágoras con una incógnita
  (el tema `mat-triangulos-pitagoras`).
- **Física**: un objeto lanzado hacia arriba sigue $h = v t - 5t^2$; saber cuándo está a cierta altura es una ecuación de segundo grado
  ([[fis-medida-movimiento]]).
- **Economía**: beneficios que primero crecen y luego bajan con el precio; puntos de equilibrio.
- **Matemáticas posteriores**: factorizar polinomios, estudiar parábolas, resolver inecuaciones y sistemas no lineales.

## 2. La idea clave: un producto que vale cero

> [!practico]
> Si multiplicas dos números y te da $0$, uno de los dos tiene que ser $0$: no hay otra forma. Por eso, si consigues escribir una
> ecuación como «algo por algo $= 0$», la partes en dos ecuaciones fáciles. Es el truco que hay detrás de casi todo este nodo.

**Propiedad:** $A \cdot B = 0 \iff A = 0$ o $B = 0$. *Ejemplo:* $(x - 3)(x + 5) = 0$ da $x = 3$ o $x = -5$.

Una **ecuación de segundo grado** es la que se puede escribir como $ax^2 + bx + c = 0$ con $a \neq 0$. Si falta $b$ o falta $c$, es
**incompleta**; si están los tres coeficientes, **completa**.

## 3. Ecuaciones incompletas

- **Sin término independiente** ($c = 0$): $ax^2 + bx = 0$. Se saca factor común: $x(ax + b) = 0$, así que $x = 0$ o $x = -\frac ba$.
  *Ejemplo:* $3x^2 - 12x = 0 \Rightarrow 3x(x - 4) = 0 \Rightarrow x = 0$ o $x = 4$.
- **Sin término en $x$** ($b = 0$): $ax^2 + c = 0$. Se despeja $x^2 = -\frac ca$. Si es positivo, hay dos soluciones opuestas; si es negativo,
  ninguna real. *Ejemplo:* $x^2 - 16 = 0 \Rightarrow x = \pm 4$; $x^2 + 16 = 0$ no tiene solución real.

**Error grave**: en $x^2 = 7x$, dividir entre $x$ da $x = 7$ y **se pierde** la solución $x = 0$. Nunca se divide entre una expresión que
puede valer $0$ ([[mat-ecuaciones-primer-grado]]); se saca factor común.

## 4. Ecuaciones completas: la fórmula

> [!practico]
> En $x^2 - 6x + 9 = 0$ el primer miembro es un cuadrado perfecto, $(x - 3)^2$, y se resuelve al momento: $x = 3$. La fórmula general
> sale de forzar siempre esa situación: «completar el cuadrado», sumando lo que falte para tener un cuadrado perfecto.

Las soluciones de $ax^2 + bx + c = 0$ ($a \neq 0$) son
$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a} .
$$
*Ejemplo resuelto.* $2x^2 - 7x + 3 = 0$: $a = 2$, $b = -7$, $c = 3$; $b^2 - 4ac = 49 - 24 = 25$; $x = \frac{7 \pm 5}{4}$, es decir $x = 3$ o $x = \frac12$.
Comprobación con $x = 3$: $18 - 21 + 3 = 0$ ✓.

Antes de aplicarla, la ecuación tiene que estar en la forma $ax^2 + bx + c = 0$ (todo en un miembro, reducido y sin paréntesis ni
denominadores).

> [!formal] Con rigor: de dónde sale la fórmula
> Dividiendo entre $a$, $x^2 + \frac ba x = -\frac ca$. Sumando $\frac{b^2}{4a^2}$ a los dos miembros, el primero es un cuadrado perfecto:
> $$
> \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2} .
> $$
> Si el segundo miembro es $\geq 0$, se extrae la raíz con los dos signos: $x + \frac b{2a} = \pm \frac{\sqrt{b^2 - 4ac}}{2a}$, que es la fórmula.
> Si es negativo, ningún número real al cuadrado puede valer eso. $\blacksquare$

## 5. El discriminante: cuántas soluciones

El número $\Delta = b^2 - 4ac$ es el **discriminante** (porque «discrimina», distingue los casos):

- $\Delta > 0$: **dos** soluciones reales distintas.
- $\Delta = 0$: **una** solución doble, $x = -\frac{b}{2a}$ (el primer miembro es un cuadrado perfecto).
- $\Delta < 0$: **ninguna** solución real. (Sí las tiene en un conjunto de números más amplio, los complejos: [[mat-numeros-complejos]].)

*Ejemplos:* $x^2 - 6x + 9 = 0$ tiene $\Delta = 0$ (solución doble $3$); $x^2 + x + 5 = 0$ tiene $\Delta = -19$ (ninguna real).

## 6. Suma y producto de las soluciones

> [!practico]
> En $x^2 - 5x + 6 = 0$ las soluciones son $2$ y $3$: suman $5$ y multiplican $6$, justo los números de la ecuación (el $5$ con el signo
> cambiado). No es casualidad, y permite resolver de cabeza muchas ecuaciones sencillas o escribir una ecuación con las soluciones
> que se quieran.

Si $x_1$ y $x_2$ son las soluciones de $ax^2 + bx + c = 0$, entonces
$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a},
$$
porque $a(x - x_1)(x - x_2) = ax^2 - a(x_1 + x_2)x + a x_1 x_2$ debe coincidir con $ax^2 + bx + c$. En particular, la ecuación con soluciones
$r$ y $s$ es $x^2 - (r + s)x + rs = 0$; por ejemplo, con $4$ y $-1$: $x^2 - 3x - 4 = 0$.

## 7. Ecuaciones que se reducen a segundo grado

**Bicuadradas**: $ax^4 + bx^2 + c = 0$. Con el cambio $t = x^2$ queda $at^2 + bt + c = 0$; de cada solución $t > 0$ salen dos valores
$x = \pm\sqrt t$, de $t = 0$ sale $x = 0$, y las $t < 0$ se descartan. *Ejemplo:* $x^4 - 10x^2 + 9 = 0 \Rightarrow t^2 - 10t + 9 = 0 \Rightarrow t = 1$ o $t = 9
\Rightarrow x = \pm 1, \pm 3$ (cuatro soluciones).

**Racionales** (incógnita en el denominador): se multiplica todo por el mínimo común múltiplo de los denominadores y se resuelve; al
final se **descartan** los valores que anulan algún denominador. *Ejemplo:* $x + \frac2x = 3$; multiplicando por $x$: $x^2 - 3x + 2 = 0$,
$x = 1$ o $x = 2$ (ninguno anula el denominador).

**Radicales** (incógnita dentro de una raíz): se aísla la raíz en un miembro, se elevan los dos miembros al cuadrado y se resuelve.
Elevar al cuadrado **no** da una ecuación equivalente (de $A = B$ sale $A^2 = B^2$, pero también de $A = -B$), así que pueden aparecer
soluciones falsas: **es obligatorio comprobar**. *Ejemplo:* $\sqrt{x + 7} = x + 1$; al cuadrado, $x + 7 = x^2 + 2x + 1$, $x^2 + x - 6 = 0$, $x = 2$
o $x = -3$. Comprobando: $\sqrt 9 = 3 = 2 + 1$ ✓; $\sqrt 4 = 2 \neq -3 + 1$ ✗. Solo vale $x = 2$.

## 8. Problemas

El planteamiento es el de siempre; la novedad es que salen dos soluciones y hay que **decidir** cuáles tienen sentido.

*Ejemplo resuelto.* Rectángulo de perímetro $16$ m y área $15$ m². Si un lado mide $x$, el otro mide $8 - x$; $x(8 - x) = 15$, $x^2 - 8x + 15 = 0$,
$x = 3$ o $x = 5$: los lados miden $3$ y $5$ m (las dos soluciones dan el mismo rectángulo). Si una solución sale negativa en una
longitud, una edad o un número de personas, se descarta.

En un lanzamiento vertical, $h = vt - 5t^2$, las dos soluciones de $h = H$ son el momento en que la pelota pasa por esa altura **subiendo**
y el momento en que pasa **bajando**.

## 9. Errores típicos

- Aplicar la fórmula sin pasar todo a un miembro ni ordenar.
- Equivocarse de signo con $-b$ cuando $b$ es negativo, o calcular $b^2$ como $-b^2$.
- Dividir entre $x$ y perder la solución $x = 0$.
- Dar una sola solución en $x^2 = 16$ (también $-4$).
- No comprobar en las radicales, o no descartar los valores que anulan denominadores en las racionales.
- En las bicuadradas, olvidar el $\pm$ al deshacer el cambio o no descartar $t < 0$.

## 10. Resumen

- $A \cdot B = 0 \iff A = 0$ o $B = 0$.
- Incompletas: factor común o despejar $x^2$.
- Completas: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, deducida completando el cuadrado.
- Discriminante $\Delta$: $>0$ dos, $=0$ una doble, $<0$ ninguna real.
- $x_1 + x_2 = -\frac ba$, $x_1 x_2 = \frac ca$.
- Bicuadradas ($t = x^2$), racionales (mcm y descartar), radicales (aislar, elevar, **comprobar**).

## Repaso: lo que debe quedarte dentro de un mes

1. Por qué un producto igual a cero se parte en dos ecuaciones.
2. La fórmula general y de dónde sale.
3. Qué dice el discriminante.
4. Cómo se escribe una ecuación conociendo sus soluciones.
5. Por qué hay que comprobar las soluciones de una ecuación radical.

## Siguiente

el tema `mat-polinomios-factorizacion` (factorizar polinomios usando sus raíces) e el tema `mat-inecuaciones` (desigualdades con la incógnita).
