---
id: mat-potencias-raices
title: "Potencias y raíces: exponentes, propiedades, notación científica, raíz cuadrada y radicales"
area: matematicas
trunk_level: 1
prerequisites: [mat-sistema-decimal-operaciones]
academic_sources:
  - "Lorente, A. Matemáticas 1.º de ESO (LOMLOE), capítulo 3: «Potencias y raíces», secciones 1.1-1.5 (concepto, cuadrados y cubos, potencias de 1, de 0 y de 10), 2.1-2.3 (producto, cociente y potencia de potencias) y 3.1-3.6 (cuadrados perfectos, raíz cuadrada, raíz n-ésima, introducir y extraer factores, suma de radicales). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2003%20Potencias.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 3: «Potencias y raíces», secciones 1.5 (notación científica) y 2.4-2.6 (potencia de un producto y de un cociente, potencias de números enteros). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_03_Potencias.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 2: «Potencias y raíces», secciones 2.1 (exponente negativo), 3 (notación científica de números grandes y pequeños) y 4.6 (raíces cuadradas). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/02%20potencias%203.pdf"
hints:
  - "Concepto: una potencia es un producto de factores iguales; las propiedades salen de contar factores (al multiplicar con la misma base se suman los exponentes; al dividir, se restan; al elevar una potencia, se multiplican). La raíz cuadrada pregunta lo contrario: qué número multiplicado por sí mismo da el radicando."
  - "Herramienta: escribe las potencias como productos si dudas; para extraer factores de una raíz, factoriza el radicando y saca de dos en dos los primos repetidos; para estimar una raíz, busca los cuadrados perfectos que la rodean y prueba decimales."
  - "Documentación: Marea Verde 1.º ESO cap. 3 (secciones 1-3), 2.º ESO cap. 3 (1.5, 2.4-2.6) y 3.º ESO cap. 2 (2.1, 3, 4.6)."
exercises:
  - id: calcular-potencias
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Calcula ${{a}}^{{{n}}}$.
    variants:
      - values: {"a":3,"n":5}
        answers: ["sha256:2d1eec1dd5b78f1f36a63c5a51b4008dd024c97e217a7640ef8e688c6ba80dc8","sha256:2b0dad60d5bbec6dc1e7a31ecaf78404a00f83d7675d9d0c22123cf2c312c01a","sha256:3826034c441ee01e167d6091dde60a6b52d131972b42f5eed69e178e69e3a688"]
      - values: {"a":2,"n":10}
        answers: ["sha256:89d57664421fcdff0ba31ce78539494013ebac1575c7de136cd733d2413219d5","sha256:ac1c32e07a7258d117573d2a2d3badd14b07158cf5b77e983caa7791b689553a","sha256:b7842da211b440ff326f5fc999b688ce833679febe96ec9871be0219f0a0b6d5"]
      - values: {"a":7,"n":3}
        answers: ["sha256:d0e6a55a3f2c2b95e7f292778c14d8e29a5691ea120863e05cc77676e4bb84b5","sha256:43f32f7893e4b4e002bc312868a532554e74302d2a519c31e75172a3d3358298","sha256:187b679349f58db9cc17a5cc8da9dee366e960dd51f812228cbbfb75a2f1b492"]
      - values: {"a":10,"n":6}
        answers: ["sha256:d470e1bde2906b4c13e7b41cadf09effd660549b27bd5878b8c6d17811617a43","sha256:6c29c59bd1cc829cbcbdeb72632181a5c22dd674919bd50711db4b3147047eff","sha256:bab3155b99301053b472957ded8151603d12f3183d329c9e7b0ac6caf7e704b8"]
      - values: {"a":4,"n":4}
        answers: ["sha256:11db4115e040e4ea3870e1d976636eff8ffee0c7edde326dc14a90eacd77c0cc","sha256:c1e9a97739a337a96f4dd69144f286ede889a7e0c29d52bd896696093c2f855b","sha256:4fe8dfd7a0d0ae62634bf5bacb55411d19a08b8ce8999a1a102c9149d5f3bc5f"]
      - values: {"a":5,"n":5}
        answers: ["sha256:001212533dfd007eadc9bb6cf5b1170b351b71d5ae733dfb9ba601c0efefb85c","sha256:6b9248e8e7b9d2f6466347ae9f73446b3a0eceaa9a23b4d73f0d4f515369e36f","sha256:0163bcd85fb5acb77578e55115337657b26e1fd2c94fb250779e7e8730143c95"]
  - id: cuadrados-y-cubos
    tier: 1
    prompt: |
      Un cuadrado tiene ${{l}}$ cm de lado y un cubo tiene ${{l}}$ cm de arista. ¿Cuánto miden el área del cuadrado (en cm²) y el volumen
      del cubo (en cm³)? Respuesta: `area;volumen`.
    variants:
      - values: {"l":7}
        answers: ["sha256:bf9f76e96c5abbc97e5094414ec2fd200668d106e7d17f6d539aa820708a3600"]
      - values: {"l":12}
        answers: ["sha256:6757c21950409db16aafabc294693427f8c05c23ec77a1eb24de932b7d37f198"]
      - values: {"l":15}
        answers: ["sha256:0c976e61e09e58adf0108195ed7e82697077ef011ac02ef135016ecaeb1a17a4"]
      - values: {"l":9}
        answers: ["sha256:a8f07406b5e3391c6153b0e17627496b3c727c7495ecfba3b714f27652181b68"]
      - values: {"l":20}
        answers: ["sha256:56156bf53745188caa248e247a4d43d60c95e5371d39dff4247d71ae98f54a4e"]
      - values: {"l":11}
        answers: ["sha256:117c61b3bb05ff07f99bf1a74bfe1159e4650b7d05209adfeae78583adc111d5"]
  - id: producto-misma-base
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Escribe como una sola potencia ${{a}}^{{{m}}} \cdot {{a}}^{{{n}}} \cdot {{a}}^{{{p}}}$. ¿Cuál es el exponente?
    variants:
      - values: {"a":5,"m":2,"n":4,"p":3}
        answers: ["sha256:d94b94f178f8b88fe07ad4a92f51acdad3fe29cc48a2d5395d94e5253c5aa488","sha256:82c5ec995e0e3df51a375b20810669b76c39ea082ae5b7c2a052e480e7b78b35","sha256:c199323e2ad3fc8e968ffdd464c9b9d5d8e6ed6203b133556aa70345b71425f9"]
      - values: {"a":7,"m":3,"n":1,"p":5}
        answers: ["sha256:b470c47fc203773fb7749d088e71ef5bd017de3933111721f73a50ba86671313","sha256:7edb5703705435ededb7ea17c744824d25dda8151c195b17e2daa50d4d52e108","sha256:ba6b64c278f30daa1329e297767907c91e880fdce54f2a5f240973a067263892"]
      - values: {"a":2,"m":6,"n":6,"p":2}
        answers: ["sha256:8443a9a142a9d6aa16382ccf027f8278d8d70a831e4137b7e8b9651bf7044195","sha256:2e3454ce607a760cda6f7ffebe3fd8ba443a4435909c567890ee8de0bc9fb1a7","sha256:7c21afa1c7f5beac9b3bf84c9a339713a529af587becc777a25e4d20c890d242"]
      - values: {"a":11,"m":2,"n":3,"p":4}
        answers: ["sha256:219880c3a4fa08a3837ad7c1b89350973368a31f63cfa8a4898b011516132dd5","sha256:c7f410359de71347388d8a42dffd0c0ff6639f2792dea6814abdbcee88f7d726","sha256:016ebeb940edf4b590ffbb603672ab23d6c4bcd5e351783da8466f6ab9638128"]
      - values: {"a":3,"m":1,"n":2,"p":3}
        answers: ["sha256:5856e4a61c74a64d760dd29bd8ab01b5c43076448628ffd8ff7efe4be5136873","sha256:bc9c573c582fe04bda41840d955f363f07f70082f0433582d30f51541a8f665f","sha256:44001efe27f5449f6b6fea304e1c45e9fc9505541c2e5767518f30fa0e2dd475"]
      - values: {"a":10,"m":4,"n":5,"p":2}
        answers: ["sha256:e697e1b9e65c5c6a17a8f851d0fabe3938fd67b03c5d1d8f36f6b70ff0df8722","sha256:46414326684e9e6b695a04524d4a366c0b92784bc9e14a84bb1c4050f22a3f97","sha256:bf65d2915c3e828172d9fb540d48982af2166f28c18101abfaf243a0fc214f93"]
  - id: cociente-misma-base
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Calcula ${{a}}^{{{m}}} : {{a}}^{{{n}}}$ (primero como una sola potencia, después su valor).
    variants:
      - values: {"a":2,"m":9,"n":4}
        answers: ["sha256:4f1dcd3af69ef3f80638a2ee031198692806e6c4d73effcd826a998a78daf420","sha256:a5492ab28bc9328b98b66e95b5b3ffa3e001140af6214891260308ece109b52a","sha256:6494dcb7e657cce79110fccaa1d3b6a1ed8cba01c5247d08cc0227aeecb72fda"]
      - values: {"a":3,"m":7,"n":3}
        answers: ["sha256:e452e43546c72f2dde2184baac56d715198181d80e75873643c95b895bef86e2","sha256:ed27bd7ffc93b1bfc0ea7d55d44e4cb476ed0b2d03583a9569adea512012508b","sha256:ab41fa44e25f2d02aaff790db2d2124b7a6da183fde68e1dd37673050d5e81a8"]
      - values: {"a":10,"m":8,"n":5}
        answers: ["sha256:756defcca21509476162cdb25cca3cd558d47b4212865226ae18cb93ffe7cbe4","sha256:aef44c3de8535d99d8155c300f742f03f197e9db1af742b00fb5afff85f1f5f9","sha256:04e5b336b3c608bf140f16764bf2b327ff3d2f33bd24aee9bbe9e043cefd16a2"]
      - values: {"a":5,"m":6,"n":4}
        answers: ["sha256:6b68bed152edb857cfbc2ef9bebb7cc4fcd3721d59728313c5ec08954e8fb9be","sha256:08c83ba428fba11cf40e6cc9cedb8fa5b51e5c36189b1a418968ee32bf895482","sha256:cb2250c8feaa188bb529096903d4317e4ee8824a8173f59e38dd8be6c3b96721"]
      - values: {"a":7,"m":5,"n":2}
        answers: ["sha256:8aadb718afb09fff22c6781307951049df22027eab42729e617ae24b79dc783b","sha256:d20710c02ab0ee629101c17d35b66da7548f0f84d845071b421fcdcf555c9251","sha256:79d02b858194bd47654a914707902347e9311ff71cc7bf17df828c6955419327"]
      - values: {"a":4,"m":6,"n":3}
        answers: ["sha256:486c0ed300b1d1e41148b029f9fc8d3774348626358ca75cdc73b7bc16604f90","sha256:d337444190658832882c9d020ea1fa9b93b6131e9eee2d17d614e6a7ce326ae6","sha256:1970536763e14dbe3eb6e21233295d4dddec835e94244668f324b4c1540347d0"]
  - id: potencia-de-potencia
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Escribe $\left({{a}}^{{{m}}}\right)^{{{n}}}$ como una sola potencia de ${{a}}$. ¿Cuál es el exponente?
    variants:
      - values: {"a":3,"m":4,"n":2}
        answers: ["sha256:da21a29dd22a2d871b6465775c6c05ea8b2331fd41e3e7774f948eada12e2bfe","sha256:d07e09f97481cc42caa99dd6a60334ee1c2b7afb17154ed7593bb0051dd95af0","sha256:7aa30197c86b452357640dd7284b938bf45b14f659c1c7b252d2218783992f02"]
      - values: {"a":5,"m":2,"n":6}
        answers: ["sha256:ed0b310c7b572a03b0347aa79139ecfedf8762cfc8aa4216983e0087b11b0d83","sha256:b7bc35d32d6d5336d88b37fecd909586c39238f9116c629837e2077abd913300","sha256:8480eab22a119a57d86cb1be6677e5ab882730500646268a5572c86b9616988c"]
      - values: {"a":2,"m":5,"n":3}
        answers: ["sha256:4e266004af1c6e1cd3741a94b8c770c2e1671f109018dda752b7ecd8cddd0974","sha256:f77112dc38843a6c448816310c654378b4a97f9cf46555d6a55df69e888bc5c4","sha256:d4823cf811fbc8701e521311e89c5ed9f87b8b55dff561d40c7b52cfa7e738f3"]
      - values: {"a":7,"m":3,"n":3}
        answers: ["sha256:fb3fd149147513ecf97904235e2843443e851ef2c36ba70f42cd70180ebebb70","sha256:74d13f3b2ce8823ab67289609660a7c095748422ddcd7cca2f4ba02744d13808","sha256:da003544c35d4a1c0c4bf516895366993556db90c41b739e697fd003ea68aea3"]
      - values: {"a":10,"m":2,"n":4}
        answers: ["sha256:7604984280ccfaf0377ab4bb5abf78edcdc88beaeebd81d9b908d25769b1ac3b","sha256:2cf72ae216bfcb37fdb177cfc7aaa442920f211f5aeebadd9de2212cda2bd3b7","sha256:30c06248251ca3c160592ebdb53dc814f8e62cea6d8a4e377404854db2a4f3c4"]
      - values: {"a":6,"m":4,"n":5}
        answers: ["sha256:f1726a9d1a74c837c86de6938db92ac3ed094d428e2ab0fab1759d6cea410d90","sha256:47830e930474279062b9d0b9e0b1156981d75b0df748e42b9fee9092ad2ded83","sha256:ff6b9c40df9fa8ec464b54a69f1af636e6ac64a7f4d22c0e4dfbea5b2204631d"]
  - id: simplificar-potencias
    tier: 2
    type: numero
    sig: 12
    prompt: |
      Simplifica y calcula $\dfrac{{{a}}^{{{m}}} \cdot {{a}}^{{{n}}}}{\left({{a}}^{{{p}}}\right)^{{{q}}}}$.
    variants:
      - values: {"a":2,"m":7,"n":4,"p":3,"q":2}
        answers: ["sha256:1037629cc5b23e847272252e9a5b8c3ef925726663bc5f95a32e330264f4e3ec","sha256:38a6a96420a0908ac17e39864e8c1033ea69a493d973ac572b74e0b4f44ffe13","sha256:90abf88aea2a95ccc753824386b04576ed559dea0b71df6a4b9abb29192b216d"]
      - values: {"a":3,"m":5,"n":6,"p":2,"q":4}
        answers: ["sha256:924ebe8e00c55a834055e9afc34ef4582401ca6602ba2caba9c6ac8fe27162d4","sha256:d2844320c016108ec2d3312d70c74d33c42e23e492b12c2cebd82589ed393fba","sha256:bf260e0558405ed089bc2250259fbf03fee15caf164dc4d47f22a0be2acf9e94"]
      - values: {"a":5,"m":5,"n":3,"p":2,"q":2}
        answers: ["sha256:596f9b708f52a2355e5461bdea9f3b20f535372e79bed8c3228fd8224788f2a7","sha256:2680cf6bedb0910dc45d7612400ad95caf3223aef6760516d3a531cd946854ca","sha256:a2aa9e49d88f2ef176dddcf79dcba2df74cbd91fe286f20a523a189ae6c08f6d"]
      - values: {"a":10,"m":6,"n":3,"p":2,"q":3}
        answers: ["sha256:1bf4300d4775fd03a5ce72d5fe27d7655e7299c06ec10ec40f0c7475c5d5d422","sha256:97ffe1bbdd4f5985bb797590999048bd7d8c141412896cb700b2ad27ca5912f5","sha256:6da7aaac731e42f60a6935efcd54887340c5d910a27f4a00752b7b7e77ba107c"]
      - values: {"a":2,"m":9,"n":2,"p":4,"q":2}
        answers: ["sha256:2db8a95508afb9fed890d06dd7f329c74f1a989aa80fc8eb87163f9cf63651c2","sha256:7192b76af94ceada5f14389835545e4e2ff7fd75f978e2adb572844a628e6207","sha256:432a27461f658a02ae3dde8926807ea8fd85b918bc10b744fadea015cf477d4c"]
      - values: {"a":7,"m":5,"n":4,"p":2,"q":3}
        answers: ["sha256:3b413ad8b4fb16075d1a85932323e0b741105a1ca97fa3db45b72cb435df9fca","sha256:dfb318e0072a86da47fd7f7836cd0a3dc489581a4836997fe8eb8bde552b444e","sha256:b90361096aaa3d028924978f7bc363fe27eec0d569c1b6af5025ad24cb78e15a"]
  - id: potencia-de-un-producto
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Calcula ${{a}}^{{{n}}} \cdot {{b}}^{{{n}}}$ (pista: es $({{a}} \cdot {{b}})^{{{n}}}$).
    variants:
      - values: {"a":2,"b":5,"n":4}
        answers: ["sha256:18a0b80e3d07f0c9f99085223eff525056c040c8f7b1d21957e0c6fc6c0f9fbd","sha256:0147bd8bba78531de7d7960d90128def01252376a9780d6e53183b0fe6e0a18b","sha256:2394568b695497a6c20272a0af31f71edb177b5a2264304ebd329a1c3468f51a"]
      - values: {"a":3,"b":4,"n":3}
        answers: ["sha256:65df82d2315689f5a34b52ecb6ed538fc6b44774ee7de90405849106c31a24f7","sha256:338e56474edefcb43885f39ae1be381a2ceb3a82eb9d142b09636404d046586e","sha256:ac131e484373cade7f51c2413d29d4f23970aba563430f3f7e9913f11eea8e1a"]
      - values: {"a":4,"b":25,"n":2}
        answers: ["sha256:fb8a7e2e7c023131b1c67ccb683b61a93271dd668995c325007be50c3aff9873","sha256:0efa162f41528da46c4c919b27c0762e3e94256c81ec3f4ca4a9d285640a4bd7","sha256:b32991ee7d9a2e7e4af2d06cb65f95e5d1c85c3fb6f68bb12524adbabbe5b47d"]
      - values: {"a":6,"b":5,"n":3}
        answers: ["sha256:2dbebabc419e65d9d642824fe12edd8d972b431aeea2e923230a65c775ac69b1","sha256:a11deace62d6602338e39ae26b0554f056bed9b612a22893976e83880d178633","sha256:d408d40ea2bff7aa1a7e10469e7cbb92e5f22389854c809cf790b873fbf59b7f"]
      - values: {"a":2,"b":3,"n":5}
        answers: ["sha256:f6f952859cfa64bf2a885bb5e7174f69a2a3f553f0b18a130d3186f99fc2617e","sha256:577f79abb7973ee59a81203e82a9b984d15e220f9e8597f12077258657be59bd","sha256:3f993269a94e9ad80f997c6a23ccb5586134acb68fd5b259924618a315f0c209"]
      - values: {"a":8,"b":125,"n":1}
        answers: ["sha256:f06d14bc634808d95ca8247703ab6048ceaf9674aaad4e303c5a78173c30b7b3","sha256:121f6b42b5a327094cdbc870d7def62c4e2c61b38b1a8cedef10badd53e927aa","sha256:f8ec956625787cffeaa713b411ebb36b5d0ebf94274ee935bdf2d134b951e0bd"]
  - id: notacion-cientifica
    tier: 2
    prompt: |
      Escribe ${{n}}$ en notación científica, $c \cdot 10^{e}$ con $1 \le c < 10$. Respuesta: `c;e` (con punto decimal, por ejemplo
      `2.5;6`).
    variants:
      - values: {"n":"149\\,600\\,000"}
        answers: ["sha256:02e09db04748e23051feba88584a0f0b8a0f1a5bc4033e9f4e9ff6d3fb4cc4dc"]
      - values: {"n":"6\\,022"}
        answers: ["sha256:e3cd90c9cc25ad60364338625c5a56ac1eeb3eb030612454f755cfd156e51634"]
      - values: {"n":"7\\,800\\,000\\,000"}
        answers: ["sha256:a237626272f414a34c73902b0cf0373cf2672d738d3aac491963057eabf129c5"]
      - values: {"n":"384\\,400"}
        answers: ["sha256:27b82c2e59573fe6bbadbe9b55eb39b761efa78add912da678d6268f72d1c768"]
      - values: {"n":"93\\,000\\,000"}
        answers: ["sha256:63b87789a8c7e7fa26c36f0c545f139c39fd4824949b3e817f780bea10c0aac5"]
      - values: {"n":"1\\,000\\,000\\,000\\,000"}
        answers: ["sha256:425c64be92149e8d7d3e11c5b69e5eb60bf5ef284298ce4cf301d99370d320cf"]
  - id: producto-notacion-cientifica
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Calcula $({{a}} \cdot 10^{{{m}}}) \cdot ({{b}} \cdot 10^{{{n}}})$ y escríbelo en notación científica. ¿Cuál es el exponente de $10$?
    variants:
      - values: {"a":"3","m":5,"b":"4","n":2}
        answers: ["sha256:e116645a6aebb0f6c093930f66cc34a9accf0153c7bf2370a373fe33fdb77f8d","sha256:ae5a572820b3074270c7b00ca2221429be35d36a928eeb3926a1aa1706ca8a2f","sha256:126e7a3508cf3f7adb079fbefb78cd5f26367a8b04e4e281e3e541dfa24b24ab"]
      - values: {"a":"6","m":7,"b":"5","n":3}
        answers: ["sha256:2d51201cd11b98270dc2421f2391f002101b8f7be536ac0419ebbd238d068bc7","sha256:e43bbf3e38c053d20bf35e11c1327dc730d76f9dfc4918d23ca9d43a4575de72","sha256:9153a5c3558884499b69a7308950f71b109bfa584dacae3b9f936d0fdb96cd00"]
      - values: {"a":"2","m":8,"b":"3","n":4}
        answers: ["sha256:a62a3709e14a41fa8654c8ca480cfd8136e67bd173d026e69e9960ebe5eeb1f9","sha256:8158c2cd5aa0975e66ab636d6d123806b807c2372b7ae5312c7687436dd0923a","sha256:d31fbb17bd2cf54e4e62ffbd723c47046b8bb38bcf133dfb5ab79e4b9b1b2192"]
      - values: {"a":"7","m":6,"b":"8","n":2}
        answers: ["sha256:8b33adc52fae3427c7f79cef92e93197365f91feb4a49621023fef48e0e1ae41","sha256:ad5902be111bb6e2b3bc64d5c2513e6f4c2c969a517589b4ef7157d80d6c1efc","sha256:bc6965b2eb6a998f531cf86ab6209779c8b53089f6ec8317a231bfe7afb5453b"]
      - values: {"a":"1{,}5","m":4,"b":"2","n":9}
        answers: ["sha256:a40d426b654de41376e7278976317b09d52b8bff1dd079852c041772b0ca617c","sha256:675f39c81d87c2b36c1e3a1437d0210c74da31aafe0cd361bf5ed01ef6df956d","sha256:1f447c7f216969be6019f2adc05702261396cd1a056cf22dcee76148492e5bea"]
      - values: {"a":"4","m":3,"b":"2{,}5","n":5}
        answers: ["sha256:82a42730ab627aedbe7f5b0db8708554cf9f5ebea76f6c32413134e881a2bf51","sha256:60c720d99c3a8bb628566081dea64a03565bf875e1390a1819505f21b4c172fc","sha256:6750f095dbc52b9e8fd13c6aee5c6f8ca6380f895e045e809cce0546082c614e"]
  - id: exponente-negativo
    tier: 2
    prompt: |
      Escribe ${{a}}^{-{{n}}}$ como una fracción. Respuesta: `1/número`.
    variants:
      - values: {"a":3,"n":2}
        answers: ["sha256:7dbf57a3ed617234cd386b0f2042474ab8a0f152f17305ad0d1f8e62412a2629"]
      - values: {"a":2,"n":5}
        answers: ["sha256:3e73599650206e2796fa5fc8897cc0dda0f7ac4527437f218ccdddfe274c565d"]
      - values: {"a":10,"n":3}
        answers: ["sha256:47b28fcf2ee2869b6d58e34730c0b1d2cf32ddc95d4526de4fdd85b92dc9dd66"]
      - values: {"a":5,"n":2}
        answers: ["sha256:f4c4a538074d228998c97603b1c8d66449c8b1988b36b9ea748fec04b2000a2c"]
      - values: {"a":4,"n":3}
        answers: ["sha256:67724395556a4671828193b7da450fe1c4fdfe9f736688855289ec363b31f9a5"]
      - values: {"a":7,"n":1}
        answers: ["sha256:2da190e578ddcfcde27e772094a620aacca6b6b5f26f3ce58a42640b4363b509"]
  - id: cuantos-cuadrados-perfectos
    tier: 1
    type: numero
    sig: 8
    prompt: |
      ¿Cuántos cuadrados perfectos ($1, 4, 9, 16, \dots$) hay menores o iguales que ${{N}}$?
    variants:
      - values: {"N":"100"}
        answers: ["sha256:8a6dbe5ed52c2dec3a1a04cb53158258140173a88b90e1047f46f8d973690ff0","sha256:9f95fafc15c5a708e40fd9bcf27c969ee8ea835ba4c1825058e6fdc06169d2dd","sha256:a53a4d600d3ed0da1bc551457d153c7867984b558672b7af1fb4ab03109dc742"]
      - values: {"N":"500"}
        answers: ["sha256:0864f4510829193a51443c80dba867a7fe1f80923ea1e393d51d13ec7f7a2cd2","sha256:a9d330fb6eecea5bb666019b3f6861ae9304c5f94c17be124fcc5cecc643828e","sha256:d91d08200c6bb6637b81e375b7af257b95d6bff6492b5ac35ad27d5a7567188d"]
      - values: {"N":"1\\,000"}
        answers: ["sha256:2dcd0ea04799c5121ea2a5c42e1cfeca357fd91b4754ef8b7094e5f6a9eaabf3","sha256:6aab1bce27209a3fc39ee3b0e8680c40de0df1b1914f0792456a326e1ce50c67","sha256:9a7a8baa31899d9dcc070910dba6dba2031a4526e7fb2f131b3d63d4e93fc04f"]
      - values: {"N":"2\\,025"}
        answers: ["sha256:162a98958ff5a04615f9749acf74d2526265d9eb46ab6cf8b06836cc3e73f6f6","sha256:51559df9c64c61b9ce7d922b266e777e1f57d435e4f4318c3bf3397d23267a59","sha256:99fa8cf97249c014a221221b09cc93aa33b3b0c129dd95a68373219fbd123edf"]
      - values: {"N":"50"}
        answers: ["sha256:cb61752ec965c2e6ea63bf935ab2dfd306990b88a03dc41cd19a2c409614a5c9","sha256:d6ef6f0a186d6bc5fd7890e5bd4880422c5cd3e5448d0bd99b891fd9590bd8fe","sha256:b63a62edadf7beb2dd52d2b9a59ed8ec4ffe7cdcb8eb26c315ef0c97a61a13d0"]
  - id: raiz-entera-y-resto
    tier: 2
    prompt: |
      Calcula la raíz cuadrada entera de ${{N}}$ (el mayor $r$ con $r^2 \le {{N}}$) y el resto ${{N}} - r^2$. Respuesta: `raiz;resto`.
    variants:
      - values: {"N":"70"}
        answers: ["sha256:594afc7f18b9611840799e1d0972344675350ad72baeff04b102509647fafcbf"]
      - values: {"N":"150"}
        answers: ["sha256:229332cbacec2543a18223040cd4c9e7a448bb4ddba23f0c7b9a8fa241868dd3"]
      - values: {"N":"333"}
        answers: ["sha256:b1ad4773a6baced610a1b79acff239c6f6f610c8246ed79dcee74cc506cff1df"]
      - values: {"N":"999"}
        answers: ["sha256:6ace589ace550d4d4a6771d658f73ebdb006e9599ed5dcdb43ab7172558364c1"]
      - values: {"N":"1\\,234"}
        answers: ["sha256:9edf8d456fd7ef093fec80e65920c09ca1c2d03c1c48ac0c0cc8b3faa08f8a42"]
      - values: {"N":"2\\,025"}
        answers: ["sha256:3e53bed106a51da3f630d9f8e836038092707b1776d3ede42407d61e0c5997e0"]
  - id: raiz-con-un-decimal
    tier: 2
    prompt: |
      Aproxima $\sqrt{{{N}}}$ **por defecto** con una cifra decimal (el mayor número con una cifra decimal cuyo cuadrado no pasa de
      ${{N}}$). Respuesta con punto decimal, por ejemplo `3.4`.
    variants:
      - values: {"N":20}
        answers: ["sha256:9e6dccf291cf48fa7e7688b7529a724d6010362ea92dd8e852530f7c23830a20"]
      - values: {"N":60}
        answers: ["sha256:0b0c075442625b5e2137cd38007a6036de0662cc491d10ad1d15f17d0e219d26"]
      - values: {"N":90}
        answers: ["sha256:2b640621567d2a99502a5360c501dabf48c83144bda7829b9f7378f357b452fb"]
      - values: {"N":130}
        answers: ["sha256:a35e6e7a8b5f3a4a3e6a33e7adbf160c6ab28dedb585d6dcee4d870c89f7aa63"]
      - values: {"N":200}
        answers: ["sha256:fca61c35cab065b1582a6759a0e4f3177773c76586c38bc33a4da61b3599bea7"]
      - values: {"N":7}
        answers: ["sha256:af3266e6d0f3bba206c2e954c21ff72182e440557702a3f79f4c6bdfb577fed5"]
  - id: raiz-n-esima
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Calcula $\sqrt[{{n}}]{{{N}}}$ (es exacta).
    variants:
      - values: {"n":3,"N":"343"}
        answers: ["sha256:3c0fde82f32a0065ee55e917c682554010cb4c1a8360e90d5e38efbb460c4c51","sha256:85ee7bb42173b98f1d83ae1ba3cda4adb99d9ddb85776c707f18a4b2cec9858c","sha256:70257262d1739fef70b06c199b8ea4d1590ece15c2a5149fa1cc868ffbfb2783"]
      - values: {"n":3,"N":"1\\,728"}
        answers: ["sha256:dc719e137eab2dec2a0bf5c605314ea52437bfb5ee9a7938dadb9071713186fa","sha256:655d633f81d0f39d6f316a1f043bf295bb593534de5701cec2dbf231af5df2ed","sha256:c5c9b8cfbe030f6493314062d7b6052c3894e0f7ab92529ed51b4e55efbb704a"]
      - values: {"n":4,"N":"625"}
        answers: ["sha256:fe1494f414703f82c1195ee0764505d1c8c32a5a3f1998877302d1ba177c194a","sha256:7d1dd179a4a45514c09e781db23f33ba90049f2d5455ff9f82f6db18ba220d6f","sha256:af7c052aabbefce11d06e9ad66be9202c561cd1bc119983587546708b300ecd3"]
      - values: {"n":5,"N":"32"}
        answers: ["sha256:f2ea9fb58715f0d3f734cd4e7e980a228d0eb02640b1de2438823cef32dbc303","sha256:0f14fed27e93dc5ab13c444fc4eb6440802064b132fb1171bd07bb674de19517","sha256:fbf09a8a9cdeeb53772d473ecc114f0e3ad0f1f317a99726707fda4fb18d18c6"]
      - values: {"n":3,"N":"15\\,625"}
        answers: ["sha256:d95e298093f13681e935b5c4478c1bcb9054dda98ad272ed8be113ff90b9d15f","sha256:c2eabe8ba098eef17ee97799a53deda81d6534b4f87da0b275fb9c49f9537e51","sha256:52cd4a78a514a08c39b677d76ddbb24dc5e33b4caa979aec4a39620172d9ef49"]
      - values: {"n":4,"N":"4\\,096"}
        answers: ["sha256:3e1583bb5f37f17c4127c0673ba5d170f76753601687fd470f2ac17c784a5797","sha256:a2387fe3fb484ec4d03f973075d6ae736b711cd044770a75e8236b3b030b9787","sha256:2443c992a2997d25977933fb43cbce89c08729154cfabb3f630a788c884a87d3"]
  - id: extraer-factores
    tier: 2
    prompt: |
      Extrae factores del radical: escribe $\sqrt{{{N}}} = a\sqrt{b}$ con $b$ lo más pequeño posible. Respuesta: `a;b`.
    variants:
      - values: {"N":48}
        answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
      - values: {"N":75}
        answers: ["sha256:11b4e3d107c9ead370d5988313bdb607b2fa33279ce574f04f1f9091af18bc34"]
      - values: {"N":200}
        answers: ["sha256:3ccee360e61de9cce694eb0fddea777df93acc93e405b69d6d34822df7c81b6a"]
      - values: {"N":98}
        answers: ["sha256:ff1c74546e2ece1ad6561574e39d6bc60cfb92c5af60ce241ca23a37bb5633ea"]
      - values: {"N":180}
        answers: ["sha256:852d67a1c4dce9756ad0ff93bdd48460b98c50d683afc2b6177790edd407378f"]
      - values: {"N":245}
        answers: ["sha256:27d5035446fd7debd92dd7e0db440f25d9b2de7e6a1662a4ab2f9b12f1d55047"]
  - id: sumar-radicales
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Simplifica ${{p}}\sqrt{{{b}}} + {{q}}\sqrt{{{kb}}}$ y escríbelo como $c\sqrt{{{b}}}$. ¿Cuánto vale $c$?
    variants:
      - values: {"p":3,"b":2,"q":"","kb":18}
        answers: ["sha256:18306be8eb57945a26e686926ec41c42591768ec201785c3a9a3d08f1deb0fbb","sha256:edfd2ba39ec554041a7db64447f27a08b98f950d725d9db023a90e5e3877e24c","sha256:a614ff2445e588e7ed7345a1af6c3cc437fcd72f1b9022edf6083e07a090a2c9"]
      - values: {"p":4,"b":5,"q":2,"kb":20}
        answers: ["sha256:15ddb5ec49fe6840645cbe2e8501c82dace229bdc116e893c979ea553cf96649","sha256:0bf79736e5f4136c4706c785050577388e2812b817776ac1d93e9ba050922d66","sha256:587ca6158e575d14f155532b40ce24247bff758d3597a498ac9d3cf60b9b8534"]
      - values: {"p":"","b":3,"q":3,"kb":48}
        answers: ["sha256:38c7c3f87c232ef9398d64702684bade07705dc830aeb1104ab648935ca91437","sha256:7c599e4cf80536d826fa33c9cdcd720698efa54d22a90a722356f38f160f5da1","sha256:4483b5972f26e98f4f949ae21a34f4b49ddaa06f00207cccd3bd334ee82ba5f5"]
      - values: {"p":2,"b":6,"q":"","kb":150}
        answers: ["sha256:da579619acbfefa119bbe3ce3befdaaadb11ad37ac41aa54df5fef7ef6b82f6b","sha256:8de59330379d0e2112b4fcbf3d7aab7841e8f14418f8eac02dafff2549b23c15","sha256:f090e6f2483f8d1ac5b4872651a91013285926b2d6428571f891f5469d95878d"]
      - values: {"p":5,"b":2,"q":2,"kb":50}
        answers: ["sha256:49b981b9cda172b992b031dbf7b91daf969dbb46c239d67abb4c0ac763d2f49f","sha256:0601fe417c23f0f5a3fb647accf1b7a09e62b756a1172a037538fd1f54dd8cf4","sha256:5be6c6a07c996400ce1702412265389145de2883e5c7afcd3e2cd9a051777a68"]
      - values: {"p":"","b":6,"q":4,"kb":24}
        answers: ["sha256:88f24ef6dc48eb583b6097083332901b5b66f1effc4e61b4ae77c8c309f5b873","sha256:09d1adc677c42149abb9d257e7b212912b04086758ac350fd1fe14f2edb725f6","sha256:2f377a3b22d505bc1711ffb1faaa9b6c2ea706df0e4e042b2227adcca625eb9d"]
  - id: ultima-cifra
    tier: 3
    type: numero
    sig: 8
    prompt: |
      ¿Cuál es la última cifra de ${{a}}^{{{n}}}$? (Calcula las primeras potencias, mira cómo se repiten sus últimas cifras y usa ese ciclo.)
    variants:
      - values: {"a":7,"n":"100"}
        answers: ["sha256:d8476951522d6806a96dbc033410658fd4948f2104ffc8bf3187decfc17427e0","sha256:651a8bd16ad58a1727f316de93f43fc6bf02f2d3641cf083565ba2c8e9dc79e5","sha256:929db3dd877474052e64942623898f66cd0a44dd3823c8c82cdd0be52638dade"]
      - values: {"a":3,"n":"2\\,026"}
        answers: ["sha256:72dc90dd35e5796f794e791000ee0516b34aa1028982be6f0ce88bbc0214a252","sha256:4a91a606f920c9999c342ba32beaa6001959c032a85150bb05973db5d44abccf","sha256:806baa39af0041980b791b0d5b5f89e8b60b6af8252761c844addcd81a1572e7"]
      - values: {"a":2,"n":"50"}
        answers: ["sha256:c6a3fce933cab1f79d3a2385bc4d21af65ff42784fd24d11a18e6fd4b349eead","sha256:1b1deec51e2f72e0a447e268c494f0e1543f0969cb87f1c140817dd13e1f42d8","sha256:d8324df1f12df45c3f452e7fcaa97736bbd52d18ee196926cf96ffc9ec36ef9b"]
      - values: {"a":9,"n":"78"}
        answers: ["sha256:ea3b32ed5794e9cb88e435b9f25d613a649a0cf5e09b3ca06f3afb4c440ad477","sha256:4669160fc1b8af3aa7d5c7f0b8909c140614def90f8f9c1cdfd5fbc675b1f05d","sha256:b80ce988b4b9e3aa0aba81e3da9e4a62db5812c056ec9a7be292beff2bc1a8e8"]
      - values: {"a":8,"n":"1\\,000"}
        answers: ["sha256:70b19b49f98dc33ef7eef2b4b94ea95e3465f1be7fc4abece2b4dafe6b1c081c","sha256:b8fffc95391b438caa0f0e195c42b779d45d9b80b9d13737b4d404cddb6ff560","sha256:cb7b8cba56e9acaba61f3555e966d2b162f35e1e0bbf7c5767755b55a8c73ab9"]
      - values: {"a":4,"n":"334"}
        answers: ["sha256:dd8fea517c8a91d6569408e1183a628f71f2acd395d44b6a269c3872507848d5","sha256:7be794cda6775e0c436ecd51b8de9ac99358ba688be6f0bca9cb4a9edf0dbe66","sha256:f382f1deb77494506f97f74ab5e2381ffa97c578ac18d096a5c1acd80dc2d199"]
  - id: base-negativa
    tier: 1
    type: numero
    sig: 12
    prompt: |
      Calcula ${{a}}^{{{n}}}$.
    variants:
      - values: {"a":"(-2)","n":5}
        answers: ["sha256:fbc57a93c9a63602e36de70e8ec4d42c52bb0808e5b4f72918a225549dba88fe","sha256:86598fc267ef85a5ef9d9fbfae359125d91c90502175e3df83ad9808e5d95091","sha256:cfe25d28f6c34da82187ad63ad5972bdfd15f0bab2351251242eb58d96b0738e"]
      - values: {"a":"(-3)","n":4}
        answers: ["sha256:9d54690b2510b78f651de3e58717bad66ecee55f1584e1e4d96eb611af66cec9","sha256:641998d624e7cc9f8333bc1b3e81818c27110534d2b628db816fbd938d799bea","sha256:d2c479d0e34356b3c913df64e4634127e35e4ee97e5519908ad078a3fb975223"]
      - values: {"a":"(-1)","n":101}
        answers: ["sha256:b409d00479243412b0b635760eb2e6de4d0123fe9c5a9d552d2fbc65ecfc7a3d","sha256:b413e92f39da2f1fb2549b3efbf8cc9683d49f51cf37e72bec773286b56a1cbd","sha256:a0a03a66234ec2c0a8f2dd191a24e6dbc8046bc6538eb2b614b45c490f1493b7"]
      - values: {"a":"(-10)","n":3}
        answers: ["sha256:14a407dd40244e6d9b2d746cb0f94356efe358a51b6f39c7288caf68003b42ec","sha256:ab64733b471ec551657dd35ffa774e85f445258491d535d802f5137d7b231c95","sha256:30d235054ffc132a2154fa07d67d1f13a52c1577329551f1db30fd8d4d374ead"]
      - values: {"a":"(-5)","n":2}
        answers: ["sha256:5eda75d9dc75d1f83d10d7de80822dd4359e9e3024be2d7f90723a715d6b5f3a","sha256:e049f546d7f8265cc8671b933df2d53d57bda61c165cdf23081d831811740ad1","sha256:0bfcbd12e3cb614c74609bddd3e9437f0fd3581e872db5b50898ecd52ffb747e"]
      - values: {"a":"(-2)","n":8}
        answers: ["sha256:7aac85a708fc327a0be2f11914e67601f615115499fe7c737c2207ff7c9f0db4","sha256:dab5418cbe8572e8c773358ca765ccf68b9d1690c61c0caf1e7fdb22c3f1e27c","sha256:25be14772039e1b3e222e3aa4b28df7fce545be68c17cb925ce74572e064b0ca"]
  - id: por-que-las-propiedades
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Explica, contando factores, por qué $a^m \cdot a^n = a^{m+n}$ y por qué $\left(a^m\right)^n = a^{m \cdot n}$. Después
      explica por qué, para que la regla del cociente $a^m : a^n = a^{m-n}$ siga funcionando cuando $m = n$, hay que definir $a^0 = 1$
      (con $a \neq 0$).
    sealed: "gz64:H4sIAAAAAAACCn1Tu27bMBT9lQOBg+0qgqOgHQx4KIosnQp0rCqAIa9dGtSlQlJBDMOflKlbV/9YQUp2Hmi6iOJDh+elQxGcHaJxXKwKIdtOgAIGRu+dHlR00ATRCWykis5TgNkO0lKAhJCixB5CtizyMRYVPlt0g42mt0ZJb11AIOwGjpIhOnwAv491PxAoNCxke+g+8FFUWNzuqOutWy0g6vYGTaO0i6jbGmvM6nF6HubjeFmeY426/SiqhhsWTWNpE2ey7ZrGm+2vOE+8KWCU/cxaO/TOI5ye0JnQuSQMD6QorBAc5+nWD70Lb80pQYzoorRJ68SVX+2nb5Txk8jzkbdSJ651e3PhWmcxLxy4yQufRnXfpJcgC+WUIY5UQlpo82C08ZNA4uhpSisQgul6azZGyVHRJRRNkN6bOwnlGClBMeYr7+TOYZ9i0mOaV0iRfzfpfQ0WZZbVYYX0XONaYBadduDTn468gzYhGh5bpcaFRFG7id2z51pCXIt5KpiV8LS1Etr401PqSnvorroj1pDtUlTI4lN5zicbDmYrEQyxdlCGfJQlFotA0LQxTItFQllmihVmX1KqEmssBdgld/qBNJ0NzC1ftsvsm6ZdQuYRyXjI++H0VM2LsvDDnTeqWP04FMqbSN64YlV8HULMPuccpvhky5n+2PPkdJSJ6yWFWTLf5Yto7MW8KsqiHzi6UKzqY/neJanh8wv8iD6V+N+t/R/u7WP+JbK7F8dSi1Mc2QBlTr8573eSoyGmF4G9aCT6lNJUFOxBj8oOezr7/prEz+NfO+lE2pkEAAA="
  - id: r-base-exponente
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa $5^3$?
    options:
      - |
        $5 \cdot 3$
      - |
        $5 \cdot 5 \cdot 5$
      - |
        $3 \cdot 3 \cdot 3 \cdot 3 \cdot 3$
      - |
        $5 + 5 + 5$
    answers: ["sha256:1eb726bfc07dd437251d3e0ab1c1df5dfab4b58a93a91116f7cea9d4fa242a95"]
  - id: r-cero
    tier: 1
    type: numero
    review: true
    sig: 8
    prompt: |
      ¿Cuánto vale $2026^0$?
    answers: ["sha256:7cd509549a6771b8a71620e1e055efb6520485c225048c084e64da86edf84ef1","sha256:d7e35f99345766a2dbfaed29b430fbd62d4e4c01595a25a94b6f23cdae7b2bbd","sha256:ba49723459a0b9259f12873db722683702f7af059f481eaf5e9592093e21a97b"]
  - id: r-suma-no
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se simplifica $2^3 + 2^4$?
    options:
      - |
        $2^{3+4} = 2^7$
      - |
        $2^{12}$
      - |
        $4^7$
      - |
        Ninguna: $2^3 + 2^4 = 8 + 16 = 24$ no se escribe como una sola potencia de $2$
    answers: ["sha256:b11cd9d35645cdfac1744daf3700a168f46501f811ba5f68f37e74098439b64b"]
  - id: r-signo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué signo tiene $(-3)^5$?
    options:
      - |
        Negativo, porque el exponente es impar
      - |
        Positivo, porque el exponente es impar
      - |
        Cero
      - |
        Depende de la calculadora
    answers: ["sha256:bf1edc6e4db4d1fcc3b24b884f90d501af7948db80d2e133bbd4fd8e7e4cffde"]
  - id: r-raiz-negativo
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuánto vale $\sqrt{-25}$ en los números reales?
    options:
      - |
        $-5$
      - |
        $5$
      - |
        No existe ningún número real cuyo cuadrado sea $-25$
      - |
        $\pm 5$
    answers: ["sha256:3bc3b02e99e8dff78bbd8078a0d7f099dfacdc6072c4d86b0c0790bff17aea46"]
  - id: r-notacion-pequena
    tier: 2
    review: true
    prompt: |
      Escribe $0{,}004$ en notación científica $c \cdot 10^{e}$. Respuesta: `c;e`.
    answers: ["sha256:797d51480bf41ed921b2763a2c61f089d94da2c1d0d7adea3df77c741a061063"]
  - id: r-raiz-entre
    tier: 1
    review: true
    prompt: |
      ¿Entre qué dos números naturales consecutivos está $\sqrt{90}$? Respuesta: `a;b`.
    answers: ["sha256:1d5790e08fbafa4ace1456f27b2b7e301c02a9c562723d8e106ddbda1d305030"]
---

# Potencias y raíces: exponentes, propiedades, notación científica, raíz cuadrada y radicales

Multiplicar muchas veces un número por sí mismo es tan frecuente (áreas, volúmenes, intereses, bacterias que se duplican,
distancias astronómicas) que tiene su propia notación: la **potencia**. Y su operación contraria, la **raíz**, responde a
preguntas como «¿cuánto mide el lado de un cuadrado de $49$ m² de área?». Este nodo explica las dos, sus reglas (que salen de
contar factores, no hay que memorizarlas a ciegas) y la notación científica con la que se escriben los números muy grandes y muy
pequeños.

## Objetivos

Al terminar sabrás:

1. Leer y calcular potencias, incluidos cuadrados, cubos, potencias de $10$, de base negativa y de exponente $0$.
2. Aplicar y justificar las propiedades: producto, cociente y potencia de potencias de igual base, potencia de un producto.
3. Entender qué significa un exponente negativo.
4. Escribir y operar números en notación científica.
5. Calcular raíces cuadradas exactas, enteras (con resto) y aproximadas, y raíces de índice $3$, $4$, …
6. Extraer e introducir factores en un radical y sumar radicales semejantes.

## Qué debes dominar antes

[[mat-sistema-decimal-operaciones]] (multiplicación y división, valor de posición). La factorización de [[mat-divisibilidad]]
ayuda en la sección 7.

> [!question] Test de entrada
> 1. ¿Cuánto es $4 \cdot 4 \cdot 4$?
> 2. ¿Qué número multiplicado por sí mismo da $64$?
> 3. ¿Cuántos ceros tiene un millón?
>
> Respuestas: $64$; $8$; seis.

## 1. Para qué sirve

- **Geometría**: el área de un cuadrado es $l^2$ y el volumen de un cubo $l^3$ (de ahí los nombres «cuadrado» y «cubo»).
- **Ciencia**: la distancia de la Tierra al Sol ($1{,}496 \cdot 10^8$ km) o la masa de un electrón ($9{,}11 \cdot 10^{-31}$ kg) solo se
  manejan con notación científica (el tema `fis-magnitudes-medida`).
- **Crecimiento**: una bacteria que se divide cada hora da $2^{24} \approx 16$ millones en un día; el interés compuesto y los
  virus siguen la misma ley (el tema `mat-porcentajes-finanzas`).
- **Informática**: un byte son $2^3$ bits y un kilobyte binario $2^{10} = 1\,024$ bytes.

## 2. Qué es una potencia

> [!practico]
> Si una noticia se reenvía a $3$ amigos, cada uno la reenvía a otros $3$, y así, en la quinta ronda la reciben
> $3 \cdot 3 \cdot 3 \cdot 3 \cdot 3$ personas. Escribirlo así es pesado: se escribe $3^5$ («tres elevado a cinco»). El número de
> abajo es el que se multiplica y el de arriba dice cuántas veces aparece.

Una **potencia** $a^n$ (con $n$ natural mayor que $1$) es el producto de $n$ factores iguales a $a$: $a^n = a \cdot a \cdots a$. $a$ es la
**base** y $n$ el **exponente**. Se lee «$a$ elevado a $n$»; $a^2$ es «$a$ al cuadrado» y $a^3$ «$a$ al cubo». *Ejemplo:*
$2^5 = 2\cdot2\cdot2\cdot2\cdot2 = 32$. Además se conviene que $a^1 = a$.

- **Potencias de $1$ y de $0$**: $1^n = 1$ y $0^n = 0$ (para $n \ge 1$).
- **Potencias de $10$**: $10^n$ es un $1$ seguido de $n$ ceros: $10^6 = 1\,000\,000$. Por eso
  $4\,652\,031 = 4\cdot10^6 + 6\cdot10^5 + \dots$ ([[mat-sistema-decimal-operaciones]]).
- **Base negativa**: $(-2)^3 = (-2)(-2)(-2) = -8$ y $(-2)^4 = 16$. Con exponente par el resultado es positivo; con impar, conserva
  el signo de la base. Cuidado: $-2^4 = -(2^4) = -16$, no es lo mismo que $(-2)^4$. (Los números negativos se estudian en
  el tema `mat-numeros-enteros`.)
- **No confundas** $a^n$ con $a \cdot n$: $3^4 = 81$, mientras que $3 \cdot 4 = 12$.

## 3. Propiedades de las potencias

> [!practico]
> Las reglas de las potencias no hay que aprenderlas de memoria: salen de contar factores. $2^3 \cdot 2^2$ son tres doses por dos
> doses: cinco doses en total, $2^5$. Si alguna vez dudas, escribe los factores y cuenta.

Para cualquier base $a$ y exponentes naturales $m, n$:

| propiedad | regla | ejemplo |
| --- | --- | --- |
| producto de igual base | $a^m \cdot a^n = a^{m+n}$ | $3^4 \cdot 3^2 = 3^6$ |
| cociente de igual base ($a \neq 0$, $m \ge n$) | $a^m : a^n = a^{m-n}$ | $5^7 : 5^4 = 5^3 = 125$ |
| potencia de una potencia | $\left(a^m\right)^n = a^{m\cdot n}$ | $\left(2^3\right)^2 = 2^6 = 64$ |
| potencia de un producto | $(a \cdot b)^n = a^n \cdot b^n$ | $(2 \cdot 5)^3 = 2^3 \cdot 5^3 = 1\,000$ |
| potencia de un cociente ($b \neq 0$) | $(a : b)^n = a^n : b^n$ | $(12 : 4)^2 = 144 : 16 = 9$ |

**Exponente cero.** Para que la regla del cociente valga también si $m = n$ (y $a^m : a^m = 1$), se define $a^0 = 1$ para $a \neq 0$.

**Lo que NO se puede hacer:** no hay regla para sumar potencias: $2^3 + 2^4 = 8 + 16 = 24$, que no es $2^7 = 128$. Y no se pueden
juntar potencias de distinta base y distinto exponente: $2^3 \cdot 3^2 = 8 \cdot 9 = 72$.

> [!formal] Con rigor: la demostración es contar factores
> $a^m \cdot a^n$ es un producto de $m$ factores $a$ seguido de otro de $n$ factores $a$; por la asociatividad del producto, es un
> producto de $m + n$ factores $a$, es decir $a^{m+n}$. Del mismo modo, $\left(a^m\right)^n$ son $n$ bloques de $m$ factores, en total
> $mn$ factores; y $(ab)^n = (ab)(ab)\cdots(ab)$, que por la conmutatividad se reordena como $(a\cdots a)(b\cdots b) = a^nb^n$. La regla del
> cociente sale de simplificar $n$ factores iguales arriba y abajo. $\blacksquare$

## 4. Exponentes negativos

> [!practico]
> Bajar un escalón en las potencias de $2$ es dividir entre $2$: $2^3 = 8$, $2^2 = 4$, $2^1 = 2$, $2^0 = 1$… Si se sigue bajando,
> $2^{-1} = \frac12$, $2^{-2} = \frac14$, $2^{-3} = \frac18$. Un exponente negativo no hace el número negativo: indica que el factor está
> dividiendo.

Para $a \neq 0$ y $n$ natural, se define $a^{-n} = \dfrac{1}{a^n}$. Con esta definición, todas las propiedades de la sección 3 siguen
valiendo con exponentes enteros cualesquiera, y la del cociente ya no necesita $m \ge n$: $5^2 : 5^4 = 5^{-2} = \frac{1}{25}$. Las
fracciones se estudian en el tema `mat-fracciones`; aquí basta saber leer $a^{-n}$ como «uno entre $a^n$». Con base $10$:
$10^{-1} = 0{,}1$, $10^{-2} = 0{,}01$, $10^{-3} = 0{,}001$.

## 5. Notación científica

> [!practico]
> Escribir $300\,000\,000$ (la velocidad de la luz en m/s) o $0{,}000\,25$ (el grosor de un pelo en metros) con todos sus ceros es
> incómodo y fácil de equivocar. La notación científica separa «las cifras que importan» de «cuántas posiciones se corre la
> coma»: $3 \cdot 10^8$ y $2{,}5 \cdot 10^{-4}$.

Un número está en **notación científica** si se escribe como $c \cdot 10^{e}$ con $1 \le c < 10$ (una sola cifra no nula antes de la
coma) y $e$ entero. Para números grandes, $e$ es el número de posiciones que se corre la coma hacia la izquierda:
$300\,000\,000 = 3 \cdot 10^8$; $149\,600\,000 = 1{,}496 \cdot 10^8$. Para números pequeños, el exponente es negativo:
$0{,}000\,25 = 2{,}5 \cdot 10^{-4}$.

**Operar.** Para multiplicar se multiplican las mantisas y se suman los exponentes, y después se ajusta:
$(4 \cdot 10^5)\cdot(3 \cdot 10^2) = 12 \cdot 10^7 = 1{,}2 \cdot 10^8$. Para dividir, se dividen las mantisas y se restan los exponentes. Para
sumar hay que poner antes el mismo exponente: $3 \cdot 10^5 + 2 \cdot 10^4 = 3 \cdot 10^5 + 0{,}2 \cdot 10^5 = 3{,}2 \cdot 10^5$. Las
calculadoras muestran la notación científica como `1.2E8` o $1{,}2 \times 10^8$.

## 6. Raíces

> [!practico]
> Si un huerto cuadrado tiene $49$ m², ¿cuánto mide cada lado? Hay que buscar un número que multiplicado por sí mismo dé $49$:
> $7$. Eso es la **raíz cuadrada**. Si la superficie es $50$ m², el lado no es exacto: está entre $7$ y $8$ metros, y se puede
> afinar con decimales.

La **raíz cuadrada** de un número $N \ge 0$ es el número $r \ge 0$ tal que $r^2 = N$; se escribe $\sqrt N$ ($N$ es el **radicando**).
$\sqrt{49} = 7$ porque $7^2 = 49$. Los números como $1, 4, 9, 16, 25, \dots$ (cuadrados de naturales) son los **cuadrados perfectos**, y
solo ellos tienen raíz cuadrada natural.

**Raíz entera y resto.** Si $N$ no es cuadrado perfecto, su **raíz entera** es el mayor $r$ con $r^2 \le N$, y el **resto** es
$N - r^2$. *Ejemplo:* para $50$, $7^2 = 49 \le 50 < 64 = 8^2$: raíz entera $7$ y resto $1$. Así $7 < \sqrt{50} < 8$.

**Aproximar con decimales.** Se prueban décimas: $7{,}0^2 = 49$; $7{,}1^2 = 50{,}41 > 50$. Así $\sqrt{50} \approx 7{,}0$ por defecto con una
cifra decimal; con dos: $7{,}07^2 = 49{,}98$ y $7{,}08^2 = 50{,}13$, luego $\sqrt{50} \approx 7{,}07$. Las raíces de los números que no son
cuadrados perfectos tienen infinitas cifras decimales sin repetición: son **irracionales** ([[mat-numeros-reales]]).

**Raíz $n$-ésima.** $\sqrt[n]{N}$ es el número que elevado a $n$ da $N$: $\sqrt[3]{125} = 5$ (raíz **cúbica**) porque $5^3 = 125$;
$\sqrt[4]{81} = 3$. Las raíces de índice par de números negativos no existen en los reales ($\sqrt{-4}$ no es un número real,
porque ningún cuadrado es negativo); las de índice impar sí: $\sqrt[3]{-8} = -2$.

> [!formal] Con rigor: raíz y potencia son operaciones inversas
> Para $N \ge 0$, $\left(\sqrt N\right)^2 = N$ y $\sqrt{r^2} = r$ si $r \ge 0$. Pero $\sqrt{(-3)^2} = \sqrt 9 = 3$, no $-3$: en general
> $\sqrt{r^2} = |r|$, el valor absoluto (el tema `mat-numeros-enteros`). Por eso hay dos números cuyo cuadrado es $9$, $x = 3$ y
> $x = -3$, mientras que $\sqrt 9$ es solo $3$: la raíz cuadrada se define como la **no negativa**.

## 7. Operaciones con radicales

> [!practico]
> $\sqrt{72}$ parece difícil, pero $72 = 36 \cdot 2$ y $\sqrt{36} = 6$: así que $\sqrt{72} = 6\sqrt 2$. Sacar del radical los cuadrados
> perfectos es como sacar de una caja los objetos que vienen en parejas: lo que no tiene pareja se queda dentro.

**Raíz de un producto.** $\sqrt{a \cdot b} = \sqrt a \cdot \sqrt b$ (para $a, b \ge 0$), porque
$\left(\sqrt a\sqrt b\right)^2 = \left(\sqrt a\right)^2\left(\sqrt b\right)^2 = ab$.

**Extraer factores.** Se factoriza el radicando y se sacan los primos que aparecen dos veces (cada pareja sale como un solo
factor): $\sqrt{72} = \sqrt{2^3 \cdot 3^2} = \sqrt{2^2 \cdot 3^2 \cdot 2} = 2 \cdot 3\sqrt 2 = 6\sqrt 2$. **Introducir factores** es lo contrario:
$3\sqrt 5 = \sqrt{9 \cdot 5} = \sqrt{45}$.

**Sumar radicales.** Solo se pueden sumar radicales **semejantes** (mismo índice y mismo radicando), sumando sus coeficientes:
$2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$. A veces hay que extraer factores primero: $\sqrt{12} + \sqrt{27} = 2\sqrt 3 + 3\sqrt 3 = 5\sqrt 3$. Pero
$\sqrt 2 + \sqrt 3$ **no** se simplifica, y $\sqrt{9 + 16} = 5$ no es $\sqrt 9 + \sqrt{16} = 7$: la raíz **no** se reparte en sumas.

## 8. Errores típicos

- Calcular $a^n$ como $a \cdot n$ ($2^5 = 32$, no $10$).
- Sumar exponentes al sumar potencias ($2^3 + 2^4 \neq 2^7$) o multiplicar bases distintas juntando exponentes.
- Confundir $(-2)^4 = 16$ con $-2^4 = -16$.
- Creer que $a^0 = 0$ (vale $1$) o que $a^{-n}$ es negativo (es $1/a^n$).
- En notación científica, dejar una mantisa mayor que $10$ ($12 \cdot 10^7$ debe pasar a $1{,}2 \cdot 10^8$).
- Escribir $\sqrt{a + b} = \sqrt a + \sqrt b$, o sumar radicales que no son semejantes.
- Decir que $\sqrt 9 = \pm 3$ (la raíz cuadrada es $3$; las soluciones de $x^2 = 9$ son $\pm3$).

## 9. Resumen

- $a^n$: $n$ factores iguales a $a$; $a^1 = a$, $a^0 = 1$, $a^{-n} = 1/a^n$.
- Igual base: el producto suma exponentes, el cociente los resta, la potencia de potencia los multiplica; $(ab)^n = a^nb^n$.
- Notación científica $c \cdot 10^e$ con $1 \le c < 10$; para operar se tratan aparte mantisa y exponente.
- $\sqrt N$ es el $r \ge 0$ con $r^2 = N$; raíz entera y resto; aproximaciones decimales; $\sqrt[n]{N}$.
- $\sqrt{ab} = \sqrt a\sqrt b$; extraer factores de dos en dos; solo se suman radicales semejantes.

## Repaso: lo que debe quedarte dentro de un mes

1. Las propiedades de las potencias y que salen de contar factores.
2. Por qué $a^0 = 1$ y qué significa un exponente negativo.
3. Cómo se escribe un número en notación científica y cómo se multiplica en ella.
4. Cómo se estima una raíz cuadrada entre dos naturales y con decimales.
5. Cómo se extraen factores de un radical y cuándo se pueden sumar radicales.

## Siguiente

el tema `mat-numeros-enteros` (números negativos), el tema `mat-fracciones` y, más adelante, [[mat-numeros-reales]] (los irracionales como
$\sqrt 2$) y el tema `mat-exponenciales-logaritmos`.
