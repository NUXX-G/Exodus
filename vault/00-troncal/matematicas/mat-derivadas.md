---
id: mat-derivadas
title: "La derivada: definición, interpretación geométrica y física, reglas de derivación, regla de la cadena, recta tangente y derivadas sucesivas"
area: matematicas
trunk_level: 4
prerequisites: [mat-limites-continuidad]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 8: «Derivadas», definición, interpretación geométrica y física, reglas de derivación y recta tangente. Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_08_Derivadas.pdf"
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 8: «Derivadas», definición, derivabilidad y continuidad, cálculo de derivadas y regla de la cadena. Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2008%20Derivadas.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 13: «Derivadas» (tasa de variación e introducción). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/13_Derivadas_4B.pdf"
  - "M. Spivak, «Calculus», 4.ª ed., Publish or Perish (2008), capítulos 9 y 10 (derivadas y su cálculo)."
hints:
  - "Concepto: la derivada f′(a) es la pendiente de la recta tangente en a y la tasa de cambio instantánea: el límite de (f(a + h) − f(a))/h cuando h → 0. Si f es la posición, f′ es la velocidad y f″ la aceleración."
  - "Herramienta: tabla de derivadas (xⁿ → n xⁿ⁻¹, eˣ → eˣ, ln x → 1/x, sen x → cos x, cos x → −sen x) y reglas (suma, producto f′g + fg′, cociente (f′g − fg′)/g², cadena f′(g(x))·g′(x)). Tangente: y − f(a) = f′(a)(x − a)."
  - "Documentación: Marea Verde Matemáticas I cap. 8 y Matemáticas II cap. 8; Spivak, caps. 9-10."
exercises:
  - id: derivada-por-definicion
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Calcula, con la definición $f'(a) = \displaystyle\lim_{h \to 0}\frac{f(a + h) - f(a)}{h}$, la derivada de $f(x) = {{f}}$ en $a = {{x0}}$.
    variants:
      - values: {"f":"2x^2 - 3x + 1","x0":"4"}
        answers: ["sha256:f865f5b159a272227299f8c9caae9c5fa512e3e8ea21ab07d638de771f449b7f","sha256:ee44a61b9a464c094787b5ad4a746db9cc1f0b319f454ce5d7c85e265d743e50","sha256:8506aff861a4d25fd2fa754087949baf67ef9756472784c4dcef65c687550687"]
      - values: {"f":"-x^2 + 5x","x0":"2"}
        answers: ["sha256:43a0bc12fa861df12049a51caab1cc5974af7c9778fd6af42a11acbd8a695bc5","sha256:554cd180cbaa2157c77afb74400bc757c88d98559105bffc37f74144d2f7bd68","sha256:f9ff17d9a277dddeeaf6b9dcc20e68a7a6ebe0dab3fd6a1b943aa4bdb3bd36cf"]
      - values: {"f":"3x^2 - 7","x0":"-1"}
        answers: ["sha256:7ed31834c376759bb3840e5d80e8b1af1bf445f6cb50254c87a50c74ea859e81","sha256:9e5a4aa444350e444cd77d1162bc20b820456f0ef32a0388e1570a8271b6c18b","sha256:b03bd4a43fd2833d7964fa4b87de1d99d2011064c9a745958a73373e15efbd4f"]
      - values: {"f":"0{,}5x^2 + 2x + 3","x0":"6"}
        answers: ["sha256:2674ba584200eaa79fbcf6521b9df963f2e44b4bdf19472411b2756979be52cf","sha256:d244b26eb16c332d6fd50b78c9c9365635cadf090c0e8a39ceb6dc43070785c7","sha256:631ca86b45398a222871dbd12a77d7337529e19133d51cd7eb90420ce64b9bf1"]
      - values: {"f":"-4x^2 + 1x + 2","x0":"0{,}5"}
        answers: ["sha256:ea62d8ab88c79e30c765a6a5c81b2fe1b3a25be85bafc52e84f1f70882ec5520","sha256:fb9663f78d8a04d76f64c72bd4f187654cb3dcd7ad223828726e111275405dba","sha256:42e78d6a82e3b838d6c3443d117a9af6e46bf33980edf79ad4fd863f4f9873dc"]
      - values: {"f":"x^2 - 6x + 9","x0":"3"}
        answers: ["sha256:97135f9863d03d9e2e510ae87ca55765aa5898e61e36a24e90508425895f8dd2","sha256:21a10b1fdbca594e10fcbe1a512043874c67463752243f474c6beb1e58ed181e","sha256:7169fe5c0b1a5d701307da008e4461b4d43d8679767caf6037e2d6611103de1d"]
  - id: tasa-de-variacion-media
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula la tasa de variación media de $f(x) = x^3$ en el intervalo $[{{x0}}, {{x1}}]$ (fíjate en que se acerca a $f'({{x0}})$ cuando el intervalo es pequeño).
    variants:
      - values: {"x0":"1","x1":"1{,}1"}
        answers: ["sha256:88d3f035b11633d7b988984ecd738ad35356f187c52c98817231b7db6e944cf1","sha256:496cb84fcaab27eb562365bd28315851bcf7c4a7ac51f3b115f4439d53ad7dec","sha256:3eec49f9a98625127fb4f4f2bc8c139f99859ae30d200c92cbc1c63b34a94dfc"]
      - values: {"x0":"2","x1":"2{,}01"}
        answers: ["sha256:be9062c4d50dac9f9c7bde4df01551739de8a2bc040883eb39e815a529dfb5da","sha256:58da21d5638a2c8248a9a1338a4e00bc312ec75fadee14857b07fa54d76a4498","sha256:e16adac1a179f5963c2b4d9c013a5b6fd5938f5a20608f34d1fab73d35c8ddb3"]
      - values: {"x0":"0","x1":"0{,}5"}
        answers: ["sha256:efa22320265da0820f815d01f43aec908477e6a914567031ac5b7a5f1a8fbd7e","sha256:18c8c8e50a966efe8e7c114657bd52420fc99419b16b7caefaeae3744a196e76","sha256:bb6ce9a7f0f91559a2e4d1fe1c26bd71538c757a1f8e9eeae2a2386a2731799a"]
      - values: {"x0":"-1","x1":"-0{,}8"}
        answers: ["sha256:192cb7c8a58b52e839716902be631818ba07394c07d3a5fc2877c1fb4df24dd4","sha256:798aee7d6a37a69f466a14afbbcc28c2d8950a3cdfc72e46a1a5426a11846c64","sha256:ab3384dc61c6b3c62176cbc1fd21f717a90bc5e3916a1cf2cecc70c1fee91eaf"]
      - values: {"x0":"3","x1":"3{,}001"}
        answers: ["sha256:f7d8681a7757116e4351a7557e58a7310867c80e5c997a4c66a6f7963e128405","sha256:aa14203cfd4fc74f87db29274c7d63a710f45da3b20988559d7e8002c2d2d6d5","sha256:8559cc5333b93d77e796986d9780b6d1833eece6851c38dfb7d981baca2b03e8"]
      - values: {"x0":"0{,}5","x1":"0{,}6"}
        answers: ["sha256:fba23729dcfb3353ff16917a66fdb6ed0abcde1825fca0f6265965a8dc515c61","sha256:66f6a24b2c53f000bb8d5a22da66ed5989d759d21e49fd26b52026150efe0aa5","sha256:0ca961173b15369ffc2f0e1a4a519ce998f56bb5bded50f97ce36f45620e5689"]
  - id: derivada-de-un-polinomio
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Si $f(x) = {{f}}$, calcula $f'({{x0}})$.
    variants:
      - values: {"f":"5x^{3} - 2x + 1","x0":"2"}
        answers: ["sha256:05eb40573e396be62193f68abc4b75e41cce98fdfeaff66f2f40a43690e1438e","sha256:593ed3cad11d6f7a1836961e56d1d8ac4c40aa5f0a1a843cc9c02b4a0e06a52e","sha256:33f98182e8bb5e15ecf8a73c12ad4a215410a773c78dff66867f177f55362860"]
      - values: {"f":"x^{4} - x^{2} + 4x","x0":"(-1)"}
        answers: ["sha256:287d74c5e5d821dd8ae4abf343da3e31ad4bd81df628b1cd1dd4979885f2adb4","sha256:37d37c6ec3e82e42bd9c1ea7f838c622f32b2598b462ee1a501ab7e26ac4477f","sha256:27aa10f71d06f9b5654978e78f0fc9afdd426e8723a530cb39d8265ac382759a"]
      - values: {"f":"3x^{2} + 7","x0":"0{,}5"}
        answers: ["sha256:2f822024b5c894b94d2da47f38a32fcc0c2541d91ea950b68268174afedaa9c7","sha256:769d059d46a2391009d82652b497f89ae44a0a94b7e378e0a356a7d6e5bd7e5d","sha256:1678c69bd82cf8a4f79323ed3a6029744092f4b11f51b34ae1c886c3af02f003"]
      - values: {"f":"x^{3} + x^{2} + x - 2","x0":"3"}
        answers: ["sha256:161404e92d18849876ce8ca612c246d709c1bea3fb4f276578dfb80f5bad107e","sha256:1853aeedc81ab6ffc6efe7770f7e1d51c2595f398b9d31aa9914c5b69c8c1731","sha256:24d233c4dfecad8c131cdb9eb2026f11f7886f8a67b3f0b7da21d794d90e922d"]
      - values: {"f":"2x^{5}","x0":"1"}
        answers: ["sha256:203eaca25441c2e19fd10885a184dcfac7e013c5683cfc398d4ba73bca215a18","sha256:51b513dd7bade75ef26be9daa0f0ef2e08264cbd9594dd731373feac384107ab","sha256:f087d0d62f69686bf7bd287d9a97b5388096154e708f4c1f874e4b27fac82a13"]
      - values: {"f":"-x^{4} - 3x + 5","x0":"2"}
        answers: ["sha256:e02ca83be3788681e73abc1e8130677a51c4af180c04318512229f6d1e4f2e5c","sha256:35bb9cb98f40b23ee38d5dcd34c77ac7266e65949694d72bbe1688dd2d7f05d5","sha256:d2e671e5b10bd1be2365fbf71a85cce1132ad03c67b95613199f632da93c5121"]
  - id: regla-del-producto
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Deriva $f(x) = {{f}}$ con la regla del producto y calcula $f'({{x0}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"(x^2 + 3)(2x - 1)","x0":1}
        answers: ["sha256:9c90dd78ce772eb198b63158f694fc475f36dcfef2486300112da8dbd5c1e28c","sha256:ba5c9c6e079e0dfcef7e80e01df0d6dd59702b43f2b1fcabf54cb8375400cd39","sha256:4fb921bd4405522aa7248af2353dbd1bf7028dbb9294312a812b641f2aed9d90"]
      - values: {"f":"x\\,e^{x}","x0":0}
        answers: ["sha256:e764b3191189fd819ee485b5a4a0da57689a34d337002a11ac03e794b0ba32aa","sha256:dc9f3e868ac22fe8b296c3365530464ff771737b06dd1c37f08888366698c30b","sha256:8606e9d89d5f93cf3f22067ffe5ef07426e59a5095714e8ec4cb92b7cafdf00a"]
      - values: {"f":"(x^3 - x)(x + 4)","x0":2}
        answers: ["sha256:6e8ba5aa913bb65f72c657b65d3d62650168464cf5a8df8acbd1e74a6fda2a06","sha256:ade1952879892ac220234a394abf5b0e549876fe5cc8817bbd1a52373d508c68","sha256:eec78c35f16a301d42ee721c445923f1e4fd95d3fd8430d7fc899cd4ec47999b"]
      - values: {"f":"x^2 \\ln x","x0":2}
        answers: ["sha256:37995397eb1e1b8bac9253e38014265d3a601d06e7fb2a228065cd6648a98497","sha256:47feac008e362c5201241cdc153e1962e01c203e5ffbafc3a149c574da505f5c","sha256:83f92d2a6df5cd0c52aa18900ceaa30747abedd024cfc9428aa52055ffa402c4"]
      - values: {"f":"(3 - x)\\sqrt{x}","x0":4}
        answers: ["sha256:dcf097b2db3da59233b3d68acfdf1ea63e1bde92561199fc77dfe03630a6bbbd","sha256:7354c27197ce499347a60e66a955bb748185dff8a868e6ffb269ad416d02d4e5","sha256:138e8ab36d16ed1b02afbff853db06a8eb1c8a6e6eb478be6fe54ce4bea7c5ed"]
      - values: {"f":"x \\operatorname{sen} x","x0":"\\pi"}
        answers: ["sha256:56483312736c4249e65e45a6acd8f577f757b5a9ecc2381af767cb0aafb5c4c8","sha256:88f23a3f30672731c63e090f517ad5462c2ecd000c0233f9ec62fc4df0a00a85","sha256:e91f51c6c34781a113def378883910085135f6fd3709129a172df72fb500c327"]
  - id: regla-del-cociente
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Deriva $f(x) = {{f}}$ con la regla del cociente y calcula $f'({{x0}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"\\dfrac{2x + 1}{x - 3}","x0":1}
        answers: ["sha256:e52b8701128aef20291e2c9b4f738a8704240a5b7c2a639648531f3192008149","sha256:9bfe3698a3f27d4fffd48fbfb2bae92ee7860ad6fd56ae374ea0c6e013155e4b","sha256:f72c7fef3ee32f865fa6bd56edce967983865bbd756570553f0d9b85916a6216"]
      - values: {"f":"\\dfrac{x^2}{x + 2}","x0":2}
        answers: ["sha256:d8272c7c46fa786300b0fdb67dcc43c1d08c80f4e08819c51f977fe44d857dfb","sha256:1c197dcc5819056021066176335961c690a869b75c03f7f6f44f1e9890ec89f2","sha256:5749fd4ed83c70dd586da2f3b69c5172a0b13d166a033dae82edca030751d0ad"]
      - values: {"f":"\\dfrac{e^{x}}{x}","x0":1}
        answers: ["sha256:8880d614247aa42c09e6082c88e3da422bc6da845186ed43891aa0fac1d83e86","sha256:c765589080e2bdf23f71faaf984d9c507fedf10488cc42417d0ed365756fcb7f","sha256:c16f930b9efeffdec943841b23197c2fe926c7eee5d9befdd9dc568f65e0667b"]
      - values: {"f":"\\dfrac{x - 1}{x^2 + 1}","x0":0}
        answers: ["sha256:59685477ebe3f6477eba3d45d36993b41a23f5c52b161aedd83cf59350d204a9","sha256:1deaa3a86e209bf428d0e0228816bbdba2faca83becbd6a21ea56392dbb75f16","sha256:ea2fe6eec2d96c40badd3311541de6706c3e4a5ab9058826f2a5f41e5ef2d572"]
      - values: {"f":"\\dfrac{\\ln x}{x}","x0":"e"}
        answers: ["sha256:d3b3929b177f0c510569c406d362baf784181c4844290269dfd29dff7009773c","sha256:1e778948b54f164ac893ffc5f3f3a6a4db16ccbf03919bf8f59bad0b93129328","sha256:04249f6e95fc68bbf1b98ae1781edb8ce13df645c79ee4d92a2ea67466840a23"]
      - values: {"f":"\\dfrac{5x}{2 - x}","x0":4}
        answers: ["sha256:3aa59ec85b2d72e9e0667f3f92b6afd59dde0c97aa2f5988180960d324ebfc92","sha256:7e3c3dfb9c40bcadce9e7f3ab6307e1cdcecd46361d0454a75b4d6c0e67662bd","sha256:f062b754dce487718d294aa8ed022ada56d13f22593d6a5077d1bcdce9fba864"]
  - id: regla-de-la-cadena
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Deriva $f(x) = {{f}}$ con la regla de la cadena y calcula $f'({{x0}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"(3x - 1)^{4}","x0":1}
        answers: ["sha256:68b2942f3ea200b4c8990c4df223ae090d344c0fe54f509dadbc2d6efd7a3fac","sha256:8f3f1c094216410fcf0f5cef8241b71d8d84cfbe4161ad7373b098c5fa44e946","sha256:c36f0180a614bcf30ace89877d49ede3435a0ce6ffd91a578e47bdc49ae1f6e1"]
      - values: {"f":"(2x + 5)^{3}","x0":"(-2)"}
        answers: ["sha256:34c1648692b1ed07463f51e884689ab791e0906676e56dd2aa4ca1e119af9018","sha256:1e42f6909bc40a806a40bc202c07f159e1c4dbdbd5347ed44afe4b4aaf55f419","sha256:fd5dd3a8f8fd7a9b830017b5c5f3ad8b35106432034ed2c41447c8a1a363bff1"]
      - values: {"f":"(x + 1)^{-1}","x0":2}
        answers: ["sha256:135d2abe7a8431a7f4deeb1077198fdaa601b7e752dd7d3cf63ca2a34108be23","sha256:66cd38b9d94a1bb7bdc30f273910a7ff8b641bca276b34efce1ba31ac1f6a5de","sha256:c7665c05ee0410ae5a8605b9c30662c2f9376b4de1cbdc71f7ce939d2eac52c9"]
      - values: {"f":"\\sqrt{4x}","x0":4}
        answers: ["sha256:0ad726f34365d49edb30c7135bd63e1621cc1cb4b53de8a7a344e1041d18ef40","sha256:21fa054653204b2b4ddeb6c09457da0fc56f8dcfe75230b46948f5e81b13c961","sha256:41f1bbc1a2e58e218763e184ab8ebe3323b9a3605b33a7969f7b32180f4963b9"]
      - values: {"f":"(-2x + 7)^{2}","x0":3}
        answers: ["sha256:0c9b6a4bd21ead51567cc1bc4e80a8eb5211b31d56b10fa0df8872800f825525","sha256:2171eb7adb084e5ee2edc9bc127e0f2b493b14535df58389dfd79e2a2a1c7a01","sha256:1bf940075f5dc825bff8acaa0046999d6c39e93b0efec31a88eaf7ad6543705d"]
      - values: {"f":"(0{,}5x + 1)^{6}","x0":2}
        answers: ["sha256:ecec0419b39a534bdc581d1effcb108a9b73927ed3451d620a0cc45646c43320","sha256:bca7111507afd248a5356acdf2c330c5eaa034eb44b380f3f8f775d81e409551","sha256:ef127279923e566a438d875f690f979a91c2f1809f9b2834d01308ef6d48a264"]
  - id: exponenciales-y-logaritmos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $f(x) = {{f}}$, calcula $f'({{x0}})$ (al menos cuatro cifras significativas).
    variants:
      - values: {"f":"e^{3x - 1}","x0":0}
        answers: ["sha256:1b36514548a17e6a6bb849d37ad1229d9e200f5d42422cc7698c0dcbdea7dd12","sha256:0d5d3781ec63e543a70a5cad3839069191d1ebce389ebb3555ae2196b27ed2c1","sha256:0331883a6237827f9cd25679e3f1c446c80019f7fd1abcb301f6988b07a84be9"]
      - values: {"f":"\\ln(2x + 5)","x0":1}
        answers: ["sha256:34e9070ab2f96cab0e59f68c605094f5396d9885036c262367c42756e5e5f582","sha256:e4afb94fb559fdc20dccd101707f76fc0fb94278de406c1540a5fdd7e5a3231b","sha256:406f0009454aae1a146c3bb5449e8ddde3283c703256fdd46975cb5a76672dd6"]
      - values: {"f":"2^{x}","x0":3}
        answers: ["sha256:89b2e4a4523afedfa505708a1a28ced2ab2fbe10168c54a881a244755b04c005","sha256:88b339b73effed7c4a1d2e3beea8624a06e27244584945a13146b050446b9a94","sha256:ec3d092ce61e53733a4b13656549fc05b1c58962f35a0bcba3f51c6860cfc430"]
      - values: {"f":"e^{-x^2}","x0":1}
        answers: ["sha256:d6fd9e644a48e9cbae0c3f0bb6935cc346a031987dda465fca9800171135acb9","sha256:b05bf396ed1ee9bae2d9fc976f72115520cb666ae0df72d134b6210964013f46","sha256:e05a09213f62f1eaf5576f6af1180e67a0f1388b1cdc5c100667dfc641bc79cd"]
      - values: {"f":"\\ln(x^2 + 1)","x0":2}
        answers: ["sha256:b5f4d33cc3907bdf7f804aa09d266d820aa218c69282ae094056f74818200a17","sha256:e7fc3949366768eb691d480d286e09f25392b0d4580b4a5ba85eeb499a414141","sha256:9156e1997a6cc16d809d9cc877b0011e95aef0fc8c3dc93bfba5770fe4826440"]
      - values: {"f":"10^{x/2}","x0":2}
        answers: ["sha256:edd476445b569b64eb1b69b85adbd4ea9680051fc9f009a14532f39ea49a1097","sha256:a23a7bfde17c2ce9493e509122b360c7f8e9df4949dc1102f4c3a7b4b4498dec","sha256:45d9ea1734c12ae111572d6db617fe1753698b6f8791d37d9d736f064f3db397"]
  - id: recta-tangente
    tier: 2
    prompt: |
      Halla la recta tangente a $f(x) = {{f}}$ en $x = {{x0}}$ en la forma $y = mx + n$. Respuesta: `m;n`.
    variants:
      - values: {"f":"x^2 - 4x + 1","x0":3}
        answers: ["sha256:7144b3705e501593f573ac7168f15980acc45ecaca918145d03387ad989c17ab"]
      - values: {"f":"x^3","x0":"(-1)"}
        answers: ["sha256:205face31a936c0a0fe3888497002f9ec1b5a52cf185d5f570605851c5a329b5"]
      - values: {"f":"2x^2 + x","x0":"(-2)"}
        answers: ["sha256:8ce22ae3ace4f540daf75b8b1b07d3e24520844e6f4d0bfa0f9299ff0d6a170a"]
      - values: {"f":"\\dfrac{8}{x}","x0":2}
        answers: ["sha256:e7589e4f082052a713cd75a5f28a17771561e14ed68097ff9b128818c99214e3"]
      - values: {"f":"\\sqrt{x}","x0":4}
        answers: ["sha256:ae09a112e5a8f89452727ad294b77dd51809e5a1e7b5f321b125bdfd99ce81e8"]
      - values: {"f":"x^3 - 3x","x0":2}
        answers: ["sha256:cb720be9e225e496a89db65e0e2a70c74a0be5b86fd75222c494df965b712733"]
  - id: velocidad-instantanea
    tier: 1
    type: numero
    sig: 4
    prompt: |
      La posición de un móvil es $s(t) = {{s}}$ (en metros, $t$ en segundos). ¿Cuál es su velocidad en $t = {{t0}}$ s, en m/s? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":"4{,}9t^{2} + 3t","t0":"2"}
        answers: ["sha256:160e86a1cefe38bd45fb597a4acc6e2a391d133a1dfe18fa371487ab4fbeffdf","sha256:e1c149ba80c105dada501f84d96279cec18c4d5f97d3178726108b3eeae41ba9","sha256:2b7cdb5f1a566a3c61d3cebba93ef83629b46b52c700bbc8fbdcbab45f02a0bb"]
      - values: {"s":"-5t^{2} + 20t + 10","t0":"1{,}5"}
        answers: ["sha256:547a145a1e51313e410ff551b9a42dae22a1cac18f61aeb8335ffc313cebe175","sha256:3d303e4afd2a4c01cdae819021210d1631a53b7606a62f2e01d81dd9a0eff274","sha256:d6cc52e66125cd7b7805c2a45a8cbad109c3e28a72a256181199f3200829fbc2"]
      - values: {"s":"2t^{3}","t0":"3"}
        answers: ["sha256:3f4865c78454999b7ed8d8e0557be3db6f3577b520ec125abc4add825bbfa24d","sha256:b7269818cb07b5a7400fa39b9b40f93f0a55855fb05ef13061dc558f72f6b47f","sha256:fdb9d6e5cc3a0bd72ec7680c480d386942a1ad816262488db418269913bde285"]
      - values: {"s":"0{,}5t^{2} - t + 5","t0":"4"}
        answers: ["sha256:ce7d982cfcd808b79a3ffc35bf68f03634d4e343e29fd568ceb3e34bd03b64a1","sha256:01e577b14c587f1d01f0866d89a63c999f3b1c3e63ea51df3efaeefe12bc0235","sha256:9540b105d50bc3c5b0fa00b07f27b78a00614cac1285721fea015dc824e0053b"]
      - values: {"s":"-4{,}9t^{2} + 12t","t0":"1"}
        answers: ["sha256:e12134870755fb9f4842d384dc31acf5c562bc4a8fc9d2bd426181def32bc2fa","sha256:a6fbc93bfdea58c439b66ae4182b76c8dc017c28f5351cefaf8dfc22fd14bea9","sha256:9a912f65c22ef390bd51dc381acab50cd67fbee7cb286f0941423c4587346bd5"]
      - values: {"s":"-4{,}9t^{2} + 100","t0":"3"}
        answers: ["sha256:c83749a2126d054d5ab9f50c5a87f712c40bf408b3fdc8bab3a21773fa6c7304","sha256:49126996195caffd0b5af77ddb5ee7dd18c52301fe41d2db854f991394b1a653","sha256:ea690b6a3c96a91c07e14bf8630aedf099dee3038a4af406c99e76073542fa82"]
  - id: tangente-horizontal
    tier: 2
    prompt: |
      ¿En qué valores de $x$ tiene tangente horizontal la gráfica de $f(x) = {{f}}$? Respuesta: de menor a mayor, separados por `;`.
    variants:
      - values: {"f":"x^3 - 3x^2 - 9x"}
        answers: ["sha256:6ab65dfa80b0287b56d70e892af9056c0c336aa1c51f9423752f47163d72db7d"]
      - values: {"f":"x^3 - 12x"}
        answers: ["sha256:91989f54f40d32cdc575b24f74bcadfdbfe0c6be82319c2714e31cd5e58c7047"]
      - values: {"f":"x^3 - 9x^2 + 24x"}
        answers: ["sha256:5c062f977e5d0e39b746d58304e9711596badda6c7fa054f415a197c006080d5"]
      - values: {"f":"x^3 + 3x^2 - 24x"}
        answers: ["sha256:d13d6668f7f296b4564c34af465ddaf3a42cddd9ab657262f88690bb1e6bbb36"]
      - values: {"f":"x^3 - 1{,}5x^2 - 18x"}
        answers: ["sha256:aaee0d07807a079803c3753362a7d79f1a4f0c5819deadc8d22501ea590464e2"]
      - values: {"f":"x^3 - 27x"}
        answers: ["sha256:1414789ebe1937eb0117546f99695e50c16d418338ca44b2e904dbfb6dcd1f94"]
  - id: derivadas-trigonometricas
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $f(x) = {{f}}$, calcula $f'({{x0}})$ ($x$ en radianes; al menos cuatro cifras significativas).
    variants:
      - values: {"f":"4\\operatorname{sen}(2x)","x0":"\\frac{\\pi}{6}"}
        answers: ["sha256:2e40553c4e438e17414df170e3a7500b594402919532777ea5e5f4ee0b1e2058","sha256:a9ef90a6d8b2c7da286de78d7a1101238b4037883db4cee52fde1fd1aedba9f9","sha256:9ff89c9de7327d41265ad6915f921623d4cf84e8d5d099ce76efab85d7861aaa"]
      - values: {"f":"\\cos^2 x","x0":"\\frac{\\pi}{4}"}
        answers: ["sha256:4a0ebb91a0e681b31115dc26123ea8f9db4b7704352d738ffc2dd27f9ebed6bf","sha256:1136c9b05f2597e85849032f41c0ad081edccbf4c8ee17c7112093fac80616d4","sha256:f2b3d70dc6792ef1379ca0e5d477008d7713f84b3fa9ebaa9bb17c009cca1114"]
      - values: {"f":"\\operatorname{tg} x","x0":"\\frac{\\pi}{3}"}
        answers: ["sha256:f416060d1b50101e284500513d0d5806e2da200eb232a2eec158668e3a4a1592","sha256:adde6f1506001e0d21c93e5959a96b9ab348ee92354affb1ec9a36b247533fa5","sha256:5a66c6635906baf656206baeb7370a38cd1fd271549a8bf9eec4a6fb20bd9cb4"]
      - values: {"f":"\\operatorname{sen}x\\cos x","x0":"0"}
        answers: ["sha256:e19446cca9a29346fb538eb85b6f9544ca68315e8eeff28598dc575ba91a6327","sha256:3bd0bf7ed1b3c71a834c773660134c743d79ba9368eb614f940ad94e812f1e99","sha256:b3f85ee64dd36755c50a095c00044142b534e1f0205ef1780d833fea8c2e2e4e"]
      - values: {"f":"3\\cos(5x)","x0":"\\frac{\\pi}{10}"}
        answers: ["sha256:3ec5c535324741c3fea06398061c83c928983522294cdbfa57a5b801450cdee1","sha256:c9c24c8c8d4527421139a1042e6740fcfc05bbb2a840fc8e10b25c4d36f3bc04","sha256:a98ee6c725866c7f23141fb08d60705bd163fb6f4bfa4404afc833a3df2913b8"]
      - values: {"f":"\\operatorname{sen}(x^2)","x0":"1"}
        answers: ["sha256:8b0559b69e07a90164c29a6300751598431c55978f49ba070e1356822b07bb16","sha256:2930f634e831f84903730dd4e7a34a7a76ad2fcf3e30a431dcedd46c6bb29273","sha256:6ec961eb1d11ae1ea797d994b5bf1b36b7185e6cbb46869ca77cb17420900c3e"]
  - id: aceleracion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      La posición de un móvil es $s(t) = {{s}}$ (m, s). ¿Cuál es su aceleración (segunda derivada) en $t = {{t0}}$ s, en m/s²? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"s":"t^{3} + 4t","t0":"2"}
        answers: ["sha256:940a89e8cc4b180a67789f71003390c24dbeb406ec3c37be83cb581bfd00c18a","sha256:303a0651048680f28eae302be4a17d20c06efb7752c29b08c3fb769e2779269b","sha256:2832e15aa465c12d10e9d93cf549c70d3837042ff168a00bfb280df9c359f58b"]
      - values: {"s":"5t^{2} + 3","t0":"1"}
        answers: ["sha256:e51ee1e869fc2d578b4f010a84c7747e5c67eb39f7719c829433e2333cb65f1f","sha256:a56880234721895c8e5cc770ff8939862a523d949d726407fc1896cbe11e33e7","sha256:91f90b560de58444464ff06622fa0679a1ad6d4e62724e550d2772b0a71fe643"]
      - values: {"s":"-4{,}9t^{2}","t0":"2"}
        answers: ["sha256:93752fe96010ccc0b187177c286d13d33b2f86ac72dfaa45dcb699ff67cbdbb3","sha256:8983ca739bc1b024c1e8d50b954f2bcfe4d49b3415a86596f4c594782c4a4e48","sha256:457852959e4b6364d40d8a67d59863d0bc7406fd580dc451fbd484c544169016"]
      - values: {"s":"4t^{3} + 3t^{2} + 2t + 1","t0":"0{,}5"}
        answers: ["sha256:2fe429311a477f7f3fdcf600cbff639006e875bfc6944a8448f880fd6d8090e0","sha256:0eca1f3f92955841a83b69fda43deb6cd9fb7fbf527ed9fa07eff3723925f0ff","sha256:711bcbff6ac9ec59ccfe7644b8a89d5e899ef53f1fbd1d3a7fd191e7412a3bc1"]
      - values: {"s":"t^{4} - 6t","t0":"1"}
        answers: ["sha256:d7fc24b5af18c0cc072afddccb4b9749cfc79db55874b5df3b573c948e62c9b2","sha256:5d253452c59845edccfa12ad40ca96e5743d1e56dff5204b42396b8857631fa6","sha256:b2de5dad4ea257aa1556a7f4202be0c1c00b71f79dae2f82f58facbe67b79932"]
      - values: {"s":"-t^{3} + 2t^{2} + 10","t0":"3"}
        answers: ["sha256:ab4035c1b7433767a1a1aa7aa9771427b0e038e81f92fa7945d644ad77bcea71","sha256:74c1c5a350b6d8e05e1725a88c36f9174856c4fa73622d65113aadd2c1135142","sha256:bdae1221a90019634c493a04169536254f247d6846762f6f176ffbd7ee0009a2"]
  - id: derivada-como-limite
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica la derivada como límite de pendientes de rectas secantes y como velocidad instantánea. (b) Demuestra con la definición
      que la derivada de $x^n$ ($n$ natural) es $nx^{n-1}$ y que la derivada de un producto es $f'g + fg'$. (c) Demuestra que si $f$ es derivable en $a$, entonces es
      continua en $a$, y da un ejemplo de función continua que no es derivable en un punto.
    sealed: "gz64:H4sIAAAAAAACCn1UQW7jOBD8SkEgEMlRjCRHBzksMLktFgH2GMVAm2zZHMhNLUllHDh+zDwgp32CP7YgZSd2MLMXw2x2dxW7q7QtguuGaJ0Us2IyKamaTPAnwbOOhH8GxiAMVVKNtqSqUnhNJ1xilSPpT4pGy8LoWYxliQzVNK0nvT2m4CrX77arnULZESIFgmG8kLek7f5fwZqNpWqKPzqsSLOHWqFposO1qtERAmtKvQMjXWsCoaNGIskyg74iDCccCKq9KKlSU/xtoVoFDqlP74LNiDW4g3Z6TB8vX7hz2hoyIx2wQD1RjfyMZzVidPv3tY1cnxdYCZEk7n8K07SRRiaTcpHm+eh8QlpYcWvr0qv/4h/RSQ1VbvJ45oIrbOaCe8hmvpWrm90Kl2iaXAO5RY7e7lbz2xw3LgZ1B+pg7Is11oMleoZaJYpfx5cWaQjq2FtN8UieEqneOzPo6OpGVFtuLlfVMv/mhW3SocI9ntrT4PMh5TKfnj4KUvKzujtQYjHujFV0a0qxw/QCSu0EaqmgnUQrA1UI1HFa2zI1X16o4xx1mqP6oibc4/cyQ9No4yIOQ8hKOMaucZ9FRWH/nkX+2XlMTqqZJUUcmU3x0CVT7N9777RLVy11wc2g3jZv6jQ1S+ZaoWfvEIbQyIckk8Iie+o4IKS3X91kQ92oGsaGaCVSOKElGciwty+06DgbZ+n3P1ur6WC5QdBb7appURd+WHiri9nTttDeRvbWFbPiYdN3Kf/EQal3KjecLYQTB/3CAl+zz3Re1EU/SHShmN3u6jPgb7weOERPSeZzqS5O1K1GKM/LLn0GPnUIw8EwcrS1Mhr1/1Ae/cCLkeTnoOx6fPPHTl6R9J9Xpd3a5QtP/J3Xfecygc/lnqM97/4DXq0pKSQFAAA="
  - id: r-significado
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué representa geométricamente $f'(a)$?
    options:
      - |
        El área bajo la curva
      - |
        La pendiente de la recta tangente en ese punto
      - |
        El valor de la función
      - |
        La asíntota
    answers: ["sha256:b6ea5ac2580e6b9a8e2507671878c55714224984498e632aa2332ea072fa28b4"]
  - id: r-derivada-exp
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la derivada de $e^x$?
    options:
      - |
        $e^x$
      - |
        $xe^{x-1}$
      - |
        $e$
      - |
        $\ln x$
    answers: ["sha256:a7605732aa9860674d63f5762a9d14344f523d593a342d584580d45dea8d5568"]
  - id: r-derivada-ln
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la derivada de $\ln x$ ($x > 0$)?
    options:
      - |
        $\ln x$
      - |
        $e^x$
      - |
        $\frac1x$
      - |
        $x$
    answers: ["sha256:d52e9d858cfe76b594a138b335c592f9aa4df83578a94c3076cfaa6273ff36fd"]
  - id: r-derivada-seno
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la derivada de $\operatorname{sen}x$?
    options:
      - |
        $-\cos x$
      - |
        $\operatorname{sen}x$
      - |
        $-\operatorname{sen}x$
      - |
        $\cos x$
    answers: ["sha256:d9d6e0b797796198d48bb675e6396dac5274c23f74901d37119a9641948cf118"]
  - id: r-constante
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la derivada de la función constante $f(x) = 17$?
    answers: ["sha256:c55687d8b87cf2627fb911da86d65c98b189bc2353e9fde99704644f98834361","sha256:da64df9f2e4ebfe238c555eb1409bc19dcbdf6802bf2ea824d0ce50f84c36f79","sha256:4061df6ca4889d3c76fbbaaf0eaf0f7d592314530896b2b99202647bbc2e4324"]
  - id: r-cadena
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la derivada de $f(g(x))$?
    options:
      - |
        $f'(g'(x))$
      - |
        $f'(g(x)) \cdot g'(x)$
      - |
        $f'(x) \cdot g'(x)$
      - |
        $f(g'(x))$
    answers: ["sha256:e3bd0a49827122160748d294b345c6d4478baf35b398dd56d939429bd0b626c2"]
  - id: r-valor-absoluto
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Es derivable $f(x) = |x|$ en $x = 0$?
    options:
      - |
        Sí, vale $0$
      - |
        Sí, vale $1$
      - |
        No: las pendientes laterales son distintas
      - |
        No, porque no es continua
    answers: ["sha256:1b5a05dab9c2b4f4b08a87fed20f11cd56bcc67226f18b29f909e46d10819657"]
---

# La derivada: definición, interpretación geométrica y física, reglas de derivación, regla de la cadena, recta tangente y derivadas sucesivas

El velocímetro de un coche no marca la velocidad media del viaje, sino la de **este instante**. Pero en un instante no se recorre distancia ni pasa
tiempo: ¿qué significa entonces? La respuesta de Newton y Leibniz (siglo XVII) es la **derivada**: el límite de las velocidades medias en
intervalos cada vez más cortos. La misma idea da la pendiente de una curva en un punto, el ritmo de crecimiento de una población, el coste
marginal de producir una unidad más o la sensibilidad de un modelo de inteligencia artificial a cada parámetro. Este nodo define la derivada, la interpreta y
enseña a calcularla con eficacia.

## Objetivos

Al terminar sabrás:

1. Definir la derivada como límite e interpretarla como pendiente y como tasa de cambio instantánea.
2. Calcular derivadas por la definición en casos sencillos.
3. Derivar con la tabla y las reglas de la suma, el producto, el cociente y la cadena.
4. Escribir la ecuación de la recta tangente y calcular velocidades y aceleraciones.
5. Relacionar derivabilidad y continuidad.

## Qué debes dominar antes

[[mat-limites-continuidad]] (límites, indeterminación $\frac00$) y, a través de él, las funciones elementales y la tasa de variación media de
[[mat-funciones-graficas]].

> [!question] Test de entrada
> 1. Calcula $\displaystyle\lim_{h \to 0}\frac{(2 + h)^2 - 4}{h}$.
> 2. Pendiente de la recta que pasa por $(1, 3)$ y $(4, 12)$.
> 3. Desarrolla $(x + h)^3$.
>
> Respuestas: $4$; $3$; $x^3 + 3x^2h + 3xh^2 + h^3$.

## 1. Para qué sirve

- **Física**: velocidad y aceleración instantáneas; todas las leyes del movimiento se escriben con derivadas ([[fis-medida-movimiento]]).
- **Optimización**: los máximos y mínimos de una función están donde la derivada se anula (el tema `mat-aplicaciones-derivada`).
- **Economía**: coste e ingreso marginales.
- **Inteligencia artificial**: entrenar un modelo de aprendizaje automático es ajustar sus parámetros siguiendo derivadas (el gradiente).

## 2. Definición e interpretación

> [!practico]
> Para saber lo empinada que está una carretera en un punto, mides la subida entre ese punto y otro cercano y la divides entre la
> distancia: es la pendiente de una recta secante. Si el otro punto está cada vez más cerca, esa pendiente se acerca a la de la recta que
> solo roza la curva en el punto: la tangente. Ese valor límite es la derivada.

La **tasa de variación media** de $f$ en $[a, a + h]$ es $\frac{f(a + h) - f(a)}{h}$ (la pendiente de la secante). La **derivada** de $f$ en $a$ es
$$
f'(a) = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}
$$
si ese límite existe y es finito (entonces $f$ es **derivable** en $a$). Geométricamente, $f'(a)$ es la **pendiente de la recta tangente** en $(a, f(a))$; físicamente,
la **tasa de cambio instantánea** (si $f$ es la posición, la velocidad).

*Ejemplo (por la definición).* $f(x) = x^2$ en $a = 3$: $\frac{(3 + h)^2 - 9}{h} = \frac{6h + h^2}{h} = 6 + h \to 6$. Así $f'(3) = 6$.

La **función derivada** $f'(x)$ asigna a cada $x$ la derivada en ese punto. Notaciones: $f'(x)$, $\frac{dy}{dx}$ (Leibniz), $\dot x$ (en física, derivada respecto del
tiempo).

## 3. Derivadas de las funciones elementales y reglas

| función | derivada |
| --- | --- |
| $k$ (constante) | $0$ |
| $x^n$ (cualquier exponente real) | $n\,x^{n-1}$ |
| $\sqrt x$ | $\frac{1}{2\sqrt x}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\frac1x$ |
| $\operatorname{sen} x$ | $\cos x$ |
| $\cos x$ | $-\operatorname{sen} x$ |
| $\operatorname{tg} x$ | $1 + \operatorname{tg}^2 x = \frac{1}{\cos^2 x}$ |

**Reglas**:

- Suma y constante: $(f + g)' = f' + g'$; $(kf)' = kf'$.
- **Producto**: $(fg)' = f'g + fg'$. *Ejemplo:* $[(x^2 + 1)(x - 2)]' = 2x(x - 2) + (x^2 + 1)$.
- **Cociente**: $\left(\frac fg\right)' = \dfrac{f'g - fg'}{g^2}$. *Ejemplo:* $\left(\frac{x}{x + 1}\right)' = \frac{(x + 1) - x}{(x + 1)^2} = \frac{1}{(x + 1)^2}$.
- **Regla de la cadena** (función compuesta): $[f(g(x))]' = f'(g(x)) \cdot g'(x)$: «la derivada de fuera, evaluada en lo de dentro, por la derivada de
  dentro». *Ejemplos:* $[(3x + 1)^5]' = 5(3x + 1)^4 \cdot 3$; $(e^{2x})' = 2e^{2x}$; $[\operatorname{sen}(3x)]' = 3\cos(3x)$; $[\ln(x^2 + 1)]' = \frac{2x}{x^2 + 1}$.

> [!formal] Con rigor: la derivada de $x^n$ y la del producto
> Para $n$ natural, por el binomio de Newton $(x + h)^n - x^n = nx^{n-1}h + \binom n2 x^{n-2}h^2 + \dots + h^n$; al dividir entre $h$ todos los términos salvo el primero llevan $h$ y
> tienden a $0$: $(x^n)' = nx^{n-1}$. Para el producto, $f(x + h)g(x + h) - f(x)g(x) = [f(x + h) - f(x)]\,g(x + h) + f(x)\,[g(x + h) - g(x)]$; dividiendo entre $h$ y usando que $g$
> es continua (por ser derivable) se obtiene $f'g + fg'$. La derivada de $\operatorname{sen}x$ sale de la fórmula del seno de la suma y de
> $\displaystyle\lim_{h\to0}\frac{\operatorname{sen}h}{h} = 1$. $\blacksquare$

## 4. Recta tangente, velocidad y derivadas sucesivas

**Recta tangente** a $f$ en $x = a$: pasa por $(a, f(a))$ con pendiente $f'(a)$:
$$
y - f(a) = f'(a)\,(x - a) .
$$
*Ejemplo:* tangente a $y = x^2$ en $x = 1$: $f(1) = 1$, $f'(1) = 2$; $y = 2x - 1$. Donde $f'(a) = 0$ la tangente es **horizontal** (candidatos a máximos y mínimos).

**Velocidad y aceleración**: si $s(t)$ es la posición, $v(t) = s'(t)$ y $a(t) = v'(t) = s''(t)$. *Ejemplo:* en una caída $s(t) = 5t^2$ (m), $v(t) = 10t$ y $a = 10$ m/s²
(aproximadamente la gravedad).

**Derivadas sucesivas**: $f''$, $f'''$, $f^{(n)}$; la segunda derivada mide cómo cambia la pendiente (la curvatura).

## 5. Derivabilidad y continuidad

Si $f$ es derivable en $a$, es continua en $a$ (porque $f(a + h) - f(a) = \frac{f(a + h) - f(a)}{h}\,h \to f'(a) \cdot 0 = 0$). El recíproco es falso: $f(x) = |x|$ es continua en $0$,
pero sus derivadas laterales valen $-1$ y $1$ (la gráfica tiene un pico) y no es derivable. Para funciones a trozos se estudian las derivadas
laterales en los puntos de unión.

## 6. Errores típicos

- Derivar un producto multiplicando las derivadas: $(fg)' \neq f'g'$.
- Olvidar multiplicar por la derivada de dentro en la regla de la cadena.
- Equivocar el signo de la derivada del coseno o el orden del numerador en la regla del cociente.
- Confundir la recta tangente $y - f(a) = f'(a)(x - a)$ con $y = f'(a)x$.
- Usar grados en lugar de radianes al derivar funciones trigonométricas.

## 7. Resumen

- $f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h}$: pendiente de la tangente y tasa de cambio instantánea.
- Tabla de derivadas; reglas de la suma, el producto, el cociente y la cadena.
- Tangente $y - f(a) = f'(a)(x - a)$; velocidad $s'$, aceleración $s''$.
- Derivable implica continua; $|x|$ es continua y no derivable en $0$.

## Repaso: lo que debe quedarte dentro de un mes

1. La definición de derivada y sus dos interpretaciones.
2. Las derivadas de $x^n$, $e^x$, $\ln x$, $\operatorname{sen}x$ y $\cos x$.
3. Las reglas del producto, el cociente y la cadena.
4. La ecuación de la recta tangente.
5. Por qué una función derivable es continua y no al revés.

## Siguiente

el tema `mat-aplicaciones-derivada` (crecimiento, extremos, optimización y representación de funciones).
