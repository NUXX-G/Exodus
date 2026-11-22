---
id: mat-numeros-enteros
title: "Números enteros: negativos, recta numérica, valor absoluto y las cuatro operaciones con signos"
area: matematicas
trunk_level: 1
prerequisites: [mat-sistema-decimal-operaciones]
academic_sources:
  - "Lorente, A. Matemáticas 1.º de ESO (LOMLOE), capítulo 4: «Números enteros», secciones 1 (positivos, negativos y cero; dónde aparecen; valor absoluto; opuesto), 2 (representación en la recta y orden) y 3.1-3.7 (suma, resta, operaciones combinadas, producto, cociente, potencias, jerarquía y calculadora). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2004%20Numeros%20enteros.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 2: «Números» (repaso y operaciones combinadas con enteros). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_02_Numeros.pdf"
hints:
  - "Concepto: los enteros añaden a los naturales sus opuestos negativos. En la recta, a la derecha es mayor. Sumar un negativo es bajar; restar es sumar el opuesto. En productos y cocientes, signos iguales dan positivo y distintos, negativo."
  - "Herramienta: convierte cada resta en suma del opuesto, agrupa positivos y negativos por separado y resta los totales; para productos largos, cuenta cuántos factores son negativos (par: positivo; impar: negativo)."
  - "Documentación: Marea Verde 1.º ESO, cap. 4, secciones 1-3."
exercises:
  - id: variacion-de-temperatura
    tier: 1
    type: numero
    sig: 8
    prompt: |
      A las $8$ de la mañana el termómetro marcaba ${{a}}$ °C y a mediodía marcaba ${{b}}$ °C. ¿Cuánto ha variado la temperatura (con
      signo: positivo si ha subido, negativo si ha bajado)?
    variants:
      - values: {"a":"-7","b":"+4"}
        answers: ["sha256:ab79ee14b582bb91432f0c8794c21b49c9fe448501f565414c3b6a5dc178cc55","sha256:b2154431e49ef7b275814d2f27276050e033d5211d627d7c3159844ccbe74648","sha256:fea442b8b40a838a30962d6c37badef4e136c373d1645570b21791c123edd15f"]
      - values: {"a":"+3","b":"-8"}
        answers: ["sha256:9ab84d26c387ccc9df334d11cea89571b25d5ae697e7bb253f61d914240c7077","sha256:74a58312ebcce04f135eec75ee313ece80018dfbfff6b92ffe6c03194916d150","sha256:ed46da20d2f11384c977ae32cfd00ec2fd86b469ef82db4fb2b6ac33ba5a32e3"]
      - values: {"a":"-12","b":"-5"}
        answers: ["sha256:02b0c796bae3db090de4ee315e9b1093438bae15c43d4834dbf7731a59734803","sha256:e410f1c4dda13d8b559350d3f53a81897822bfd150826b9a15c6dfe5c043b721","sha256:687e6795c50247629a48c7aeed439b24ef8953dd28c51e3af639782079c8d884"]
      - values: {"a":"-2","b":"-16"}
        answers: ["sha256:6a9b0fb938fb994ac8822e8d32b564e083f68ee885ac64eb2f5d6a18cd0f5f29","sha256:18e0275d612cdaceba279638dd4d836ca18669a0d5ca4a79390b1ffc6a6ad60c","sha256:865c9f22e8961578a668c8831ae703c3d3d6502ed99365f64ed754ac6820e68d"]
      - values: {"a":"+8","b":"-3"}
        answers: ["sha256:85595e7cff9d54d1b655175d6ab94a1b8b2244de13e35875ce9f5415df0019ac","sha256:7de7cea3b132dd3aa6af9288851832bb78f1760c33f3539187e65ac0e496e618","sha256:6e0d089f39bb90b79edc407b81bbebed433a67795cddc2a34afde32d83b36726"]
      - values: {"a":"-20","b":"+6"}
        answers: ["sha256:ed50b456133efbbc76ffb7bd563d3f565a7a8c9235e909bbfd84c8d8ab702916","sha256:a13bdec106d3a3eafd04be9aeed4232f7162785fd81fba1248f886cd318bf37f","sha256:7e90d621feb5ae488d0e32320c3ba687b81354899d5194d036564d8402f40ef0"]
  - id: valor-absoluto-y-opuesto
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Calcula $|{{a}}| + \operatorname{op}{{b}}$, donde $\operatorname{op}(x)$ es el opuesto de $x$.
    variants:
      - values: {"a":"(-8)","b":"(+5)"}
        answers: ["sha256:408f26b42c4a23d391ac12ce28a3c58fbc0ce0efb39211a7db7d1c5822533ab2","sha256:13805d6071a597e3da6dafd74112fdfc97e1707b34e56c890a4ef94271653f3a","sha256:8e3c532eb6936eb097755e695e0f6f6858295e2c91e366d7e56b81033e6d92b0"]
      - values: {"a":"(+12)","b":"(-3)"}
        answers: ["sha256:5ed2477411d5e96e7c63f6c15c987e9f1518d727111bbc617efac403098fb193","sha256:ce441b1930e39604e2f2755a99382d927cffa943be38f41a951541d89d4cb8d4","sha256:d12302a7a74f6d53edd064f9bf1a195cc7811034c783bc303f16a7f3085cb6b2"]
      - values: {"a":"(-15)","b":"(-6)"}
        answers: ["sha256:1a5964f2f619ed05c6c6f909a96c29314a9ff84141aae8cb4994fcdf69e81798","sha256:62afbdef1d09291f0120bc5038b2407c4ace577c24e79aa4b90da9673b5ffdf7","sha256:e7e4fad5c91db6f8fa218ce7130affec94d778664618c12ba81ad3300421b5a0"]
      - values: {"a":"(+0)","b":"(+9)"}
        answers: ["sha256:74f4daa4f58a92441b029b5be1962369e96cf3ee86c48df5f8c3408a6cbae958","sha256:42080c349185655f574e76ba9c38f59d058a559a6966c29efd5e04a26a58e100","sha256:12b7079024058db0b2cadcbb409e91b311ebb5970bbdcf1e52c2b1abc0ddd245"]
      - values: {"a":"(-1)","b":"(+1)"}
        answers: ["sha256:ef289fc21aaea2411848b620f8a932c39187d953a2b74ca35020415598607efe","sha256:cef5621bda24f15e02dd2deeaaf71dc5eb4ad848202fea3816f51a2ef80c5a4b","sha256:c8e076931393e97c07225605f05ef3dc91df5755e8f3c3b268d3fea84caef786"]
      - values: {"a":"(+7)","b":"(-11)"}
        answers: ["sha256:3b87cec12a091c29d15a30f421f5ee0ef36ef690a91ef91115dc888a2d445452","sha256:a412d06d22b22d008ec57b870bbd9043fc41d095752093d173bd531019fa07e8","sha256:e694d34b1b5c9456954e48906f307a8f97a807a70699713604013aabc10a7681"]
  - id: ordenar-enteros
    tier: 1
    prompt: |
      Ordena de menor a mayor: ${{L}}$. Respuesta: los números separados por `;` (por ejemplo `-3;0;2`).
    variants:
      - values: {"L":"+3,\\ -5,\\ 0,\\ -2,\\ +7"}
        answers: ["sha256:d65d3d656e86eec609064a0462071f442a07aacd2a6bbf0ca8b9bc6492984e9b"]
      - values: {"L":"-8,\\ -12,\\ +4,\\ -1,\\ 0"}
        answers: ["sha256:da0050f3e1a482530256936e2731eebdef4948b427ceb53093f042be5e5fd8db"]
      - values: {"L":"+10,\\ -10,\\ -3,\\ +3,\\ -7"}
        answers: ["sha256:0a9f2aad46c8b2cf5847b354d335ac32c2ca0bd40c88300da9308e0c422b933f"]
      - values: {"L":"-4,\\ +6,\\ -6,\\ +1,\\ -9"}
        answers: ["sha256:98e667df5000a1a9eec7a4ec76c7e44750a304424587ed18afcab86c76baa26a"]
      - values: {"L":"0,\\ -15,\\ +2,\\ -2,\\ +5"}
        answers: ["sha256:4f33970836b0a0b59bb7ca3174463ce23bfee025dc4a73de575752f0baf1d471"]
      - values: {"L":"-1,\\ -11,\\ +11,\\ -5,\\ +8"}
        answers: ["sha256:4aa77a041b3bf1b42d3b80ada2c2bbff0754238ff48651d982758deafe5376ed"]
  - id: distancia-en-la-recta
    tier: 1
    type: numero
    sig: 8
    prompt: |
      ¿Cuántas unidades hay entre ${{a}}$ y ${{b}}$ en la recta numérica?
    variants:
      - values: {"a":"-7","b":"+5"}
        answers: ["sha256:c3c152221bdc9bd919175d267e611ea237525dbda00312f3eed54fa6a2637146","sha256:7d13f425ed4ebc49831764c548294dd5d7465ab352cce8521b7c01b5351068ad","sha256:29c470e3c344bc2f0ac1851cfb90ddd39f3ec167a5484b57d94ac83bb1816c35"]
      - values: {"a":"-12","b":"-3"}
        answers: ["sha256:aa8dbdfa02d926478318e9dfba583a2fb09e4090af37d25eed1e9c8c25be18ef","sha256:0090f2dbb3e621bbac8d2637e35fe9102b37be8baf4f3004ba6c116d9dc21a57","sha256:5b376d3c191b07cf2a486023bb4580853a5586616e46cd812a62aeef4f3d5ff6"]
      - values: {"a":"+9","b":"-9"}
        answers: ["sha256:ae24b541b447a2e2d5f2e230883ba48ab76e2066b4007224bb01bed9a1a4b64e","sha256:4305fe9a3fb124a38e74c85cc80dab1a7af8d1856bf76beb4b79905df114e73a","sha256:65bd8780390f1d1c106a35ac80350cf1836c848e80a2d3990061aff29d8cfa18"]
      - values: {"a":"-20","b":"+4"}
        answers: ["sha256:e054a4edcc2e56062fd828718d98c47dd16bf2283fe64f2887645bcaadbb83eb","sha256:b16a1077c45a447fc5c4d6ee6075cd3b45c872edfd63e39e8c57f7e0b7609307","sha256:3a31e01c52eb97f7fe164e6f08e03dba2c5004032024b1391c2a4c67c5a89053"]
      - values: {"a":"+6","b":"+15"}
        answers: ["sha256:0654da9980fdb5aeb03b615234c66dbc32f3367a6700ab07c03dad1a40668359","sha256:290dd729da912b1a80b632d0b806845f658d30cb12eb1bc24305ecc8ac070d6f","sha256:1d0b6546575d93179cfc26ab3ab0ffc72909dab4f3e3d8b474ca983f28da36a7"]
      - values: {"a":"-1","b":"-18"}
        answers: ["sha256:f0417656b186d5e57908f35c2a1a861f509c152a03f6a33170417ee7c7bd4954","sha256:92a43627ea93c1b5e5db26e8e1f99c0ab289ec5f295ab92210ba9435106fe43d","sha256:1279d50b51f923818e1d46b06f5c3ad6527285b519c4f5109b595c515a7d7832"]
  - id: sumas-y-restas
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Calcula ${{e}}$.
    variants:
      - values: {"e":"(-8) + (+5) - (-6)"}
        answers: ["sha256:88a1b183ae5ec5bb38aba5610b2998341275ffe96d32f9b78e6768a46baed55c","sha256:272f38b3ff16c23fab072f160e6f51edf58ca51f672c7f6473083caa7a766dfb","sha256:40d4df06b0d9892b61f8cc7d803bca29fc57d3e36a3f88cfa39d87d5b8ec8f4b"]
      - values: {"e":"-12 - (+7) + (-3) - (-20)"}
        answers: ["sha256:87bce269635c43c6b09567e5ec4ca96ec994b36ce5e588fcb300d84e4c832438","sha256:c0f9542bcee6d778eaf79c6457a35473fe177a8c33d9ad4fdbb619ec3b11ea86","sha256:fefd2816a3e1f545dd0b8d02971cb887c336f9d7fc6c61f424bbec98a03be8fb"]
      - values: {"e":"15 - \\left[4 - (-6)\\right] + (-9)"}
        answers: ["sha256:1b9c7fd9e311752964ed65f2b54bccacd4650ccaff5a559c42ab005fbeb8e799","sha256:2f0067c0698822c35c302ad20f2e6121a659dce4cc26500648594535bdda0513","sha256:05e948447627e730cb32dac2f387a4131273414ac50f3c6c2f66c2fb4bab4003"]
      - values: {"e":"-(-10) - \\left[-(+3) + 8\\right] - 4"}
        answers: ["sha256:eb94c9180be3d453e6358544a5b30c6168dab991c15db38ff5157c15a17fb699","sha256:e7016967e440a15028a66b307e086a482676adffdc09951e39b12845d9b99fed","sha256:8588f8860ea55ba63b9ffba2e68933f38975f8444e68acf9aedb2577ba7626cf"]
      - values: {"e":"\\left[(-6) - (+4)\\right] - \\left[(-2) - (-11)\\right]"}
        answers: ["sha256:9a732ca5ba9239a59ee1238699413ec536f9ed3349f15f3cb27d87776b8c6dce","sha256:97eb4965215186ac1dbe4c6cdeb570e082d1c70b87be0a745366881f7575ebe7","sha256:3c8ef1f2e8dec8e1ade903d6b0c6ea5a5c669bbc8b21c01799bbbfc6819c7c46"]
      - values: {"e":"7 - (-3) - \\left[5 - (-2 - 6)\\right]"}
        answers: ["sha256:a25f679c2da94ac561e27cde8c532d8d294885b10972ba09699dd8ca5b0889e3","sha256:22b409f680afb50175bb131d135b580748cdbb35a24b951d1f07e808d5a3f996","sha256:456c0c544f1819e8992bc934b9d7361596e738e4033578e1ccc7aacf08acd709"]
  - id: productos-y-cocientes
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Calcula ${{e}}$ (de izquierda a derecha, aplicando la regla de los signos).
    variants:
      - values: {"e":"(-6) \\cdot (+4) \\cdot (-2)"}
        answers: ["sha256:a27ec3d76769deeb1a570ffe77c7eaae86d0119696ee69eb87cd2bcf0b32caaf","sha256:e12bc5f0c74e8077bb2448087ab1506c435e862a4de70d3a49e4b4e1c84491c2","sha256:26d3d9734978fd25d4e4f5057457b13a449dae7200950d70c8350d0e9c4a0b38"]
      - values: {"e":"(-48) : (+6) \\cdot (-3)"}
        answers: ["sha256:ddbc296644211b5457d2b6331f0b73bea5cf157b6c65c619bbf2c5347f44c911","sha256:9053e54a86146df1ce496ac0f757456305c8e607c9c99adb0ca7647effce34e4","sha256:49e6f3bd8295d271f6ae8fe572e66cc3b8046cc7328d7740b71e47f7f97fe2df"]
      - values: {"e":"(+5) \\cdot (-3) \\cdot (-2) \\cdot (-1)"}
        answers: ["sha256:ea4f1a58d93351e6bd04bb3fcc634dacf732cb36d12e215e929ab138be108147","sha256:97ae165424205ddef5eff398159101c54dce6091f73d732ebb5d25d382fce339","sha256:816f63a98f67fc70b733b644e0528a664336b80b24f783ea2e7dbb26858d3a7a"]
      - values: {"e":"(-90) : (-5) : (+3)"}
        answers: ["sha256:36d5d4d26cae8285b27416b5822a0cbca04bb095f5a1fcef60c9fd7b6ff871ab","sha256:acac8a7e178718057688a08f92bcdd2157052611d038b71ea1475826aa6fd1e8","sha256:6cb7cdc0fae2cc75de1d7f85030e14f0c73789cd01bd5b19ffafc5981c2a5cc9"]
      - values: {"e":"(-7) \\cdot (-7) : (-1)"}
        answers: ["sha256:651876e3d43c078be134981dbc38a383c8585e5e45087aa7d080150a706bf5e8","sha256:764a7f6b9c30ca20e81f07484de98f05bfe8a51ede50ef79903735007cca39fe","sha256:af14bc6c1a5e879839ef631ba0d4453b75893c8e3bcf13eea80f1fb08e88653b"]
      - values: {"e":"(+120) : (-8) \\cdot (-2)"}
        answers: ["sha256:b94aca9a19da01ad305d5a9a06dd9434ee08a7ea0f27426d7dfc2432aede37d0","sha256:b4f52d32533acee0fb3cffc16865bb9fb797ad236f82e0a8006701ca7a7fc7eb","sha256:2665d2401c2336899d0f0f5cb6543577b183bf11e9bae9030aab0bad6400e27e"]
  - id: potencias-de-enteros
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Calcula ${{e}}$ (fíjate en si el signo está dentro o fuera del paréntesis).
    variants:
      - values: {"e":"(-3)^4"}
        answers: ["sha256:94316a3e5598daf2e813b449bb90b7e7eb249e71e1e9c13eda14b8d8368113bd","sha256:8beb76f5ff20d9b1f01784c820b0d294baaaeb1478eb1711df4a399d47b2c2a7","sha256:ac5aada9e22ed21f168f54374913b9b5879cf881c5cf635989fb5b2d9e4b183e"]
      - values: {"e":"-3^4"}
        answers: ["sha256:4612c49c9a3a4592e843fb370c406660b8ebc11f09b6f03c4bab6aabbbd229df","sha256:376387ed3d28d7ab7c3d18911416ea47b00194ccd2852d374b1ed056dd679a7c","sha256:b765f1f2b15197fc07bf9c199ec3d3bd6596fbf710b9f9518b5f4196c13d9906"]
      - values: {"e":"(-2)^5"}
        answers: ["sha256:be1466a66a616e3f761692efd61aa367cd5df7638a1b3e3300f425716fe8051f","sha256:9a5d472b00d088099ba84f55f81d3941e0880951c1ad2d8f700f8a86a236e0e4","sha256:e90df36aa9611e10ce0620547a532e1a440a6b42e83d3947d3e5254a77747635"]
      - values: {"e":"-(-2)^6"}
        answers: ["sha256:9ae701610c9761096663684ce7c68d72c864bb5354f00a152889e5679880094b","sha256:51eb4f29c7ba2b2c3bc636e17094e9eabfe60c4280a54821864a7aa9208b79cc","sha256:2b1d6df00115393e8cc99a055dde44fab81b20578c20fa4e1f903733487fc092"]
      - values: {"e":"(-1)^{100}"}
        answers: ["sha256:21a3df49359078784a296a4158ad052750fc343db1f3e9aff424d2220da7caac","sha256:c5b4a3ec3f8ddfcea724af9b2c72db7de94fdfc320f9bfb90041fd6031bbd57b","sha256:5f9b041546e29f1b99fc377b12f1b9fe2ab9909c3d27f5b8cb869ee2f31d7cf6"]
      - values: {"e":"(-5)^3"}
        answers: ["sha256:3f8912e9f5d82e11d68a740f3515a0cb4a9c7eed89cd7c5205f3e452922aefb1","sha256:d9c32aa03192f02aca7f98cb091d82f9061c95ca57f749b8bc7336fe31081fc9","sha256:97056a64f505fc4db41264a0502da3700948ea6cffb11f9339cef318cb962fb6"]
  - id: operaciones-combinadas
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Calcula respetando la jerarquía de las operaciones: ${{e}}$.
    variants:
      - values: {"e":"5 - 3 \\cdot (-4) + (-12) : 3"}
        answers: ["sha256:0b9a3e5668b4765c65aa449e29fcfb2a9e74732a61417916a35dd8fb80dc82f8","sha256:b4663b07cda1c421ea8970bef4e92d4bf535d0314f0a960ef7cd85915eacba68","sha256:9037e897c5b90f4863d0fb41a675cf9edd554ba21d80bcbafe534e34e5516624"]
      - values: {"e":"-2 \\cdot \\left[6 - (-3) \\cdot 2\\right] + 10"}
        answers: ["sha256:794c7c72669f4520de85a25baee01cfb34cc44dbeeadeb70afe4f74a9efef5dc","sha256:6d5ffa43549e97204c1506cb539f887d84294c9bfc9d6f1d7fe23226e978fc57","sha256:5c954dfb9e8b753bb8986ef2a8802c810b698fac398b030567e7bc838552c133"]
      - values: {"e":"(-3)^2 - 4 \\cdot (-2) - 5^2"}
        answers: ["sha256:c69100475e17aafe51ac5e259be75f87c6683cedc4c12e34b6be938e3da99a5d","sha256:3b591b183d1d9cd9733ada13be8c2be22492caf07a98e3d4ee40e0627ef2964e","sha256:e8e805493d29720ba719f25c1d68a29ae364d41babc7aa49f6fda98411bca0e2"]
      - values: {"e":"\\left[(-8) + 2 \\cdot 3\\right] \\cdot (-5) - (-7)"}
        answers: ["sha256:3676bd684da819c8f4c91bd874bb1a2521b3c582484d160da10b64b8f2ff2f4f","sha256:c9200b923161dff3c6611bea4f175cb80b8708655b5bfcd33d751228ad4b95ec","sha256:af98a932ecb4ce2e2ce2d79ac1338da8dafb9dfffb2de76bab5dce2930d0a1e6"]
      - values: {"e":"20 : (-4) - (-6) \\cdot (-3) + 1"}
        answers: ["sha256:5b3c28a7c9580dd7c9f1fedd4b14a51395c44ccac03c9a7df8a2c1a9da7dee76","sha256:da615fe78eaae39e607fa5cf88ff504fab7199f952d3de3c8475c74915fc45c4","sha256:5a0ad63ca4bb7a948da23b4c58c92df0d38bb1f41d946d1c968c3174b699c962"]
      - values: {"e":"-(4 - 9)^2 + 3 \\cdot (-2)^3"}
        answers: ["sha256:8f9574f4206bc1b0a97afefb5ed1b626f957adc1b448db37862b62385cb77d95","sha256:4bc8d5b4c520a3029697b9addd644d53d9689cb23f4cb49ac1f401f94ea35c00","sha256:faf05484c53f49157c5cbae78565b921de27b2eba60e0a9b171cc8b208f3aed1"]
  - id: saldo-de-la-cuenta
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Una cuenta tiene un saldo de ${{s0}}$ € y después tiene estos movimientos (ingresos positivos, cargos negativos): ${{mov}}$. ¿Cuál es
      el saldo final, en euros?
    variants:
      - values: {"s0":"+120","mov":"-75,\\ -60,\\ +40,\\ -90"}
        answers: ["sha256:541d9d8a2651f1b85fc1aad1b56588e070e5557c57196b83bb084cec69de52a4","sha256:e0cbc9b1f1bd33284720a3d93dbfd93727c6d386ff0f3da3d5130bed274aaeb9","sha256:0a8eb7a3692f7e8f702a1ec14dd76bafb7c6e52e2fef0cbce479db4171299b46"]
      - values: {"s0":"-30","mov":"+100,\\ -45,\\ -20,\\ +15"}
        answers: ["sha256:74180807cc8cb30328d9070d6d4e8a429d2a9d5fae415c35cb06ec29c693b173","sha256:a76228452fcb550a713262767f72e0c95163a758ce4418663c7e372b17a55c2d","sha256:57e43ab90e9378de8895b7f9d4181dbd76625bb378d1db4a2a31bc1e69e4d518"]
      - values: {"s0":"0","mov":"-50,\\ -25,\\ +80,\\ -10"}
        answers: ["sha256:cd22cfdfad4881bb45031cd906f09a4c01f4cfeb46122e3f7b3fcceada328bd1","sha256:0695f5b0ffbbb6e9fa3538b583b17aa3807721958dc042b3f5aaaec6e4818ccb","sha256:e9794a41c077bc537ffdf7d03b36e0ca590c53968f86b97c47a6999953e4e48d"]
      - values: {"s0":"+500","mov":"-320,\\ -250,\\ +60,\\ +5"}
        answers: ["sha256:ec41ca508ae2ca924624c58947df00b55e6f20d72e1f92d570029c549eedad16","sha256:113d1ee0d44837d9de4c54fefc3079ea818f92938c88379ada22753e3d9ae43b","sha256:3419aeded5b620ea097b257ac4fa5dcfab74c11ea3411e5fcbad70e4b66bb235"]
      - values: {"s0":"-80","mov":"-20,\\ +150,\\ -60,\\ +5"}
        answers: ["sha256:8f15e4796b314dff51636ae3864430f8500f7b2b03f1cb4292dfad1ed03f3fbc","sha256:2baf91d78c61a2efb2167ef9b1af72678eafd4a8a5f678906321ca1246a03c06","sha256:5795592e744768575232e2dd3f458049bb543b0db1d7f46dcd191813cb9c1416"]
      - values: {"s0":"+45","mov":"-45,\\ -45,\\ +90,\\ -12"}
        answers: ["sha256:59423a66a50236e6cf8dce6df10b8b8c51b07366c20abbb6ce7a405216c05129","sha256:6279cb69b3ae05a314c9b8ed562aa6b9d9b3c27e0f9297e1f56625037d1036a6","sha256:76f6c09dea6780c365caaef134243d29424a36e8c7b0152086a36117b2891d29"]
  - id: anos-antes-y-despues
    tier: 3
    type: numero
    sig: 8
    prompt: |
      ¿Cuántos años pasaron entre el año ${{a}}$ a. C. y el año ${{b}}$ d. C.? (Cuidado: en el calendario no existe el año $0$; después
      del $1$ a. C. viene el $1$ d. C.)
    variants:
      - values: {"a":387,"b":2024}
        answers: ["sha256:c12e487d87db908bda7b5ead8215c8361bb11f23f2179eb8205316f43fa428d8","sha256:8bcfc444d233fc8a9e86eb565fc1745108af3d0877bb3c56e2c031c807b591b5","sha256:4e2ab8cadd4d63bd939b14565be2771885957af6f4f181a12476f03d3db00434"]
      - values: {"a":44,"b":14}
        answers: ["sha256:8cd50b35004deb9b5c5cd5584a22fa6bc50b5cdc81678e272897a248729e6103","sha256:0f6549fd70f1295af9254f3dd607659f8ee603def903dfd6ac10bcd83f396700","sha256:d313353a6b39a78bab18b93cef9ee0fea5bfb4fd094cbc7641d8d0d271db1511"]
      - values: {"a":753,"b":476}
        answers: ["sha256:1bb099a1358f8f4a40b5a90ef1d8423e2ee1ab34e4c2f3c5e048e8cfdb692a73","sha256:80d28e66ffe8248920946f38dcd5b28510bd35276da642ad810b3fb0136d368e","sha256:1a3e345940905f039c4bb2ecc3311ec15a7eef9e9259aa173632685ce3ace36a"]
      - values: {"a":2,"b":2}
        answers: ["sha256:52bc6aff2bbb85cbe0971a3b47201fc9ecacc641f24ec3dc3ce1121e329d18bc","sha256:fce6f3cfa4141ea9414ca4a3511685a7ae68677f2fee3070966d6fd8ae77ccff","sha256:ef5324c63d40e061ab9b4b6316a05faa0a798cbb1fc9d5ab472da013d15e2c18"]
      - values: {"a":480,"b":1492}
        answers: ["sha256:69be329419d47173409859b5ca8dcf7e257d403436c4bc436bce67edc815a193","sha256:85b23405a68c5176f4194e654c034436707e0175594a449fe7d9cb3d7b36c9ec","sha256:9f7b000e2ce130b533646be0270fef7f19ec21316b8abe1c21034eebfabe1ad2"]
      - values: {"a":212,"b":1687}
        answers: ["sha256:3f0efdcc3c84b29d0e927a173cc68e7f1c416cfeaadcf4b36fce8c5156eed951","sha256:12a9f9cd28e9390ea47ab34daf7bf024611107eb41e999ed334b66ccd1e6ce3e","sha256:0a57c31b15f2e0fb74d225c1c37afaa01eccb7fe13085a4087a671f437eb70de"]
  - id: el-ascensor
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Un ascensor está en la planta ${{p}}$ (las negativas son sótanos) y hace estos desplazamientos, en plantas: ${{mov}}$. ¿En qué planta
      termina?
    variants:
      - values: {"p":"-3","mov":"+7,\\ -5,\\ +4,\\ -8"}
        answers: ["sha256:87f2ad3c5a8c286fce04e666f701946b807046183d85aed2b285e883a8cdd453","sha256:3820a1b8994203e3b95929fa63c6540581eac42f3026ec04ae35f44e6800a5f1","sha256:6f203f8a77e6cac3b426cfcb340ba1db52cce04877bba9a919ce8873ffcfbea8"]
      - values: {"p":"+5","mov":"-6,\\ -2,\\ +9,\\ -10"}
        answers: ["sha256:d9e91b9b0f6e7705c78e9ea54cfee12435da9ace4b45a27de3381a80619baf92","sha256:7111910f92311b1146dfefe26cd7ce2221bd3c8471c2c7c2879f4dea0e94729e","sha256:8b5ce3d2090cd456dab30576148feb7fcf425efefc47f3aba7d6797faab473fd"]
      - values: {"p":"0","mov":"-4,\\ +12,\\ -15,\\ +3"}
        answers: ["sha256:721d3a85e797b55ec156c2ad39485b3042261eb44e0b66961227ad47189de79f","sha256:b0b3ad0a7bfe4552795239c54d1859c646a01dbdacc15db58a2726c3e311055a","sha256:b2880a0e31cad00d8e3acdbe76216df54b7d4dc1cbd581ad39c9f2dc90d414f8"]
      - values: {"p":"-1","mov":"-2,\\ +6,\\ +6,\\ -11"}
        answers: ["sha256:7a078a2e7552e9ce598b4ae5974f03ea42d82f6ea26a5fe463d328ecfd3ca540","sha256:eaa049d277619111c1933c3b613b4d9e0d1daeb1977cdc40c6e5f653b2fccebe","sha256:b6f8146e1b40a9b99dceb53a52c8688f7afb7850e1f5eb5393fe9d129a4b7eea"]
      - values: {"p":"+8","mov":"-9,\\ +1,\\ -3,\\ +5"}
        answers: ["sha256:af3507124dd570d5606b19752865e2728dcb341b42fc3ae1be89ed4f64057640","sha256:976ae749b7c1a35861dd5925c2f1acf6b5fb93fef6bcad72bade6233b854cc12","sha256:9acba7274d60e2286449266745087abcd5570c1a08a1ecc417e49653bc6d6a3b"]
      - values: {"p":"+2","mov":"-5,\\ -1,\\ +10,\\ -7"}
        answers: ["sha256:606155e7b30f18a8f9c423ce10239abccb704057a980240f1b6c1accf83b721d","sha256:08f17bb3e552679f2bc6daf6f5e669f01d823df9f4a93d3f2332a26f047c85f7","sha256:7811f20907af45ef816e5a9946adcff64f41b5211de7893b0b7ddfdc1f4c62ed"]
  - id: signo-de-un-producto
    tier: 2
    prompt: |
      Un producto tiene ${{neg}}$ factores negativos y ${{pos}}$ positivos, todos distintos de cero. ¿El resultado es `positivo` o
      `negativo`?
    variants:
      - values: {"neg":7,"pos":3}
        answers: ["sha256:9a1a0382675c4ee59a8e764ebb1478b3e8b13b1031ddf2c5610ae427add45128"]
      - values: {"neg":12,"pos":0}
        answers: ["sha256:3dfffc07b1b320450a31dcd508b3f254d8be773956005b35beba66379540f9dd"]
      - values: {"neg":5,"pos":5}
        answers: ["sha256:9a1a0382675c4ee59a8e764ebb1478b3e8b13b1031ddf2c5610ae427add45128"]
      - values: {"neg":20,"pos":9}
        answers: ["sha256:3dfffc07b1b320450a31dcd508b3f254d8be773956005b35beba66379540f9dd"]
      - values: {"neg":1,"pos":0}
        answers: ["sha256:9a1a0382675c4ee59a8e764ebb1478b3e8b13b1031ddf2c5610ae427add45128"]
      - values: {"neg":9,"pos":4}
        answers: ["sha256:9a1a0382675c4ee59a8e764ebb1478b3e8b13b1031ddf2c5610ae427add45128"]
  - id: menos-por-menos
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Usa la propiedad distributiva para explicar por qué $(-3) \cdot (-4)$ tiene que valer $+12$. (Pista: calcula de dos
      formas $(-3) \cdot \bigl(4 + (-4)\bigr)$.)
    sealed: "gz64:H4sIAAAAAAACCo2SsW7bMBCGX+WHwMFBZCNxMgnoEGQrMnSvOpypq0OU4ik80mgR5GE6F32BdItfrKBkN7ETBJ2k45Eff/7331cqPicnoWqqTxKRAzx1UsNc4hSz+eUJPuDM1CDd/sZdZpjZ/OIEbWs7SWjblVv72X7vWMZy5OWmsxGxaEMbyhWSotRQV2iRe9ER6wlDlMFxRx06pym6VU5uQ1C3JmzIOw6dwEqAF0XgNSW3Ea3bYEwb/lvVbs/U3Je7h87Pl6+XF9MFN6ToRMHfh8jqJLBCJcCtM3nWGj7zWmDeZEwesqJj62I9mfjcN6XFHmH72HOU0RDNPXUCGokGHcGcmaYN7CFDZk2CjqdmPR5ghTk9X5oFTNuuPNlvepcpsinGz65CKoIZWel5jv/MGN++AymDQyp2M6z0MkqJsJlSFGzYlpvmF6bZZWF67dFnAi5wQ4i89oSnXz0H0TYMEjH+FsX99qc+/UGQUuQAS0N09laaUnvC9jE4OwnuaRT1TlQWJ1VdxbyKzlbN5/vKRpc4Oqma6pq8zZ4OjN/nYxoPBomjLwfBX1R1NeSQRKvm/KE+YF4NvmjzdCCiOXL2OAsHyOUR8mPW5L4W6lvjeU/MtQTr8w8+nu3LeL3OzT6RMEf45cOXh78OuRFxHQQAAA=="
  - id: r-mayor-negativo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué número es mayor, $-10$ o $-3$?
    options:
      - |
        $-10$, porque $10 > 3$
      - |
        $-3$, porque está más a la derecha en la recta
      - |
        Son iguales
      - |
        Depende del contexto
    answers: ["sha256:51513ad779a26cc2b867a32e82cc0ed4bd65d0f0e0c6e502eb6c7cf158dbae71"]
  - id: r-restar-negativo
    tier: 1
    type: numero
    review: true
    sig: 8
    prompt: |
      Calcula $8 - (-7)$.
    answers: ["sha256:df9e67f994a9cb9ea6d8b331e779ad7a0a1c5f62a41014fd4a73ae1335aae07d","sha256:4f3f1fd8978f3118715605257e6e3310714b8a08fc60b37663cee55fa9ad5e59","sha256:f5ba5d9329f4524fdb144032def731e4ff31701182c808ddeff36a2a7d2643b2"]
  - id: r-valor-absoluto
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es el valor absoluto de un número entero?
    options:
      - |
        Siempre negativo
      - |
        El mismo número con el signo cambiado
      - |
        La distancia del número al cero, que nunca es negativa
      - |
        Su cuadrado
    answers: ["sha256:1b5a05dab9c2b4f4b08a87fed20f11cd56bcc67226f18b29f909e46d10819657"]
  - id: r-signo-cociente
    tier: 1
    type: numero
    review: true
    sig: 8
    prompt: |
      Calcula $(+42) : (-7)$.
    answers: ["sha256:18648b4c7c48a41b075306a566e7034441589de613f84b2e7bb282a7f5ca1c16","sha256:cef367e2a2c7ec59252dd40cd98df18ee4e8f813caa3dfbf49d9e67c33b23b6f","sha256:092c40c9c91c73b56d0324f5a6ec7af5b82e367897301819b91ad155a3ec2d04"]
  - id: r-parentesis-potencia
    tier: 2
    review: true
    prompt: |
      Calcula $(-2)^4$ y $-2^4$. Respuesta: `primero;segundo`.
    answers: ["sha256:f82f23319a6221162dfe232a0ee0b551749bcffbcf0c62a9833b82479bcedc0c"]
  - id: r-jerarquia-negativos
    tier: 2
    type: numero
    review: true
    sig: 8
    prompt: |
      Calcula $3 - 2 \cdot (+2)$.
    answers: ["sha256:c2eb2d22ed3f183d8c8aa00eb3b38390f7a1e5515699b798988d44457f17adfc","sha256:c1f4f91e9b1190cd29c6b035ca5a34d067b8ab4f791ebc1b0409dc4790fb7bf0","sha256:a74b1ac8e6a23fa8b62a0d706c86c2f7475a93e3f655acd264cb968b631dc0b0"]
  - id: r-sotano
    tier: 1
    type: numero
    review: true
    sig: 8
    prompt: |
      Estás en la planta $3$ y bajas $4$ plantas. ¿En qué planta estás?
    answers: ["sha256:970307dded099ac4f9cff055124de401ea0ee194f81aadc77f1521395a733337","sha256:2cab8c792126b6006e45dc6f772beac02f1ee5f0bcb02c0fa3bbbc30e19d6c1b","sha256:56c59c5212e8dabe72fb30609a54809b49c5f5e41b863042ebff2e04d0754084"]
---

# Números enteros: negativos, recta numérica, valor absoluto y las cuatro operaciones con signos

Con los naturales no se puede expresar «$5$ bajo cero», «debo $30$ euros» o «tres plantas por debajo de la calle». Para eso
existen los **números negativos**. Juntos, los naturales, el cero y los negativos forman los **números enteros**. Este nodo explica
cómo se representan, cómo se comparan y, sobre todo, cómo se opera con signos: por qué restar un negativo es sumar y por qué
«menos por menos es más», sin trucos de memoria.

## Objetivos

Al terminar sabrás:

1. Expresar situaciones reales con números enteros y representarlos en la recta.
2. Comparar y ordenar enteros, y calcular su valor absoluto, su opuesto y la distancia entre dos de ellos.
3. Sumar y restar enteros, también con paréntesis y corchetes.
4. Multiplicar, dividir y elevar a potencias con la regla de los signos, y justificarla.
5. Resolver operaciones combinadas respetando la jerarquía.

## Qué debes dominar antes

[[mat-sistema-decimal-operaciones]] (operaciones con naturales y jerarquía).

> [!question] Test de entrada
> 1. ¿Cuánto es $25 - 18$?
> 2. ¿Y $18 - 25$, si te dejaran «pasar del cero»?
> 3. Calcula $4 + 3 \cdot 5$.
>
> Respuestas: $7$; $-7$ (siete por debajo de cero); $19$.

## 1. Para qué sirve

- **Temperaturas, altitudes y plantas**: $-5$ °C, el mar Muerto a unos $-430$ m, el sótano $-2$.
- **Dinero**: saldos negativos (deudas), pérdidas, cargos en una cuenta.
- **Tiempo histórico**: años antes de Cristo; **física**: velocidades con sentido (hacia delante o hacia atrás) ([[fis-cinematica-rectilinea]]).
- **Álgebra**: sin negativos no tiene respuesta una pregunta tan sencilla como «¿qué número sumado a $7$ da $3$?».

## 2. Los números enteros y la recta

> [!practico]
> Un termómetro es una recta numérica en vertical: el cero en medio, los positivos hacia arriba y los negativos hacia abajo.
> Cuanto más abajo, más frío: $-10$ °C es menos que $-3$ °C. Lo mismo en horizontal: en la recta, el número que está más a la
> derecha es siempre el mayor.

Los **números enteros** son $\dots, -3, -2, -1, 0, 1, 2, 3, \dots$ (el conjunto $\mathbb Z$). Los positivos se pueden escribir con signo
($+3$) o sin él ($3$); el cero no es positivo ni negativo. Se representan en una recta con el cero en el centro, los positivos a la
derecha y los negativos a la izquierda, a distancias iguales.

**Orden.** $a < b$ si $a$ está a la izquierda de $b$: $-10 < -3 < 0 < 2$. Cualquier negativo es menor que cualquier positivo, y de dos
negativos es mayor el que está más cerca del cero.

**Opuesto.** El opuesto de $a$, $\operatorname{op}(a)$ o $-a$, es el que está a la misma distancia del cero al otro lado: $\operatorname{op}(5) = -5$,
$\operatorname{op}(-7) = 7$. Un número y su opuesto suman $0$.

**Valor absoluto.** $|a|$ es la distancia de $a$ al cero, y nunca es negativa: $|-8| = 8$, $|8| = 8$, $|0| = 0$. La **distancia** entre
dos enteros es $|a - b|$: entre $-2$ y $4$ hay $|-2 - 4| = 6$ unidades (de la planta $-2$ a la $4$ hay $6$ plantas).

## 3. Suma y resta

> [!practico]
> Piensa en dinero: los positivos son lo que tienes y los negativos lo que debes. Si tienes $7$ € y debes $3$ €, en realidad
> tienes $4$: $(+7) + (-3) = 4$. Y restar es «quitar»: si te perdonan una deuda de $9$ € ($-(-9)$), es como si te dieran $9$ €.

**Sumar con el mismo signo**: se suman los valores absolutos y se pone el signo común: $(-5) + (-8) = -13$.
**Sumar con signos distintos**: se restan los valores absolutos y se pone el signo del que tiene mayor valor absoluto:
$(+7) + (-3) = +4$; $(-9) + (+4) = -5$.

**Restar es sumar el opuesto**: $a - b = a + \operatorname{op}(b)$. *Ejemplos:* $(-4) - (-9) = (-4) + 9 = 5$; $3 - 8 = 3 + (-8) = -5$.

**Quitar paréntesis.** Un signo $+$ delante de un paréntesis lo deja igual; un signo $-$ cambia el signo de todo lo de dentro:
$10 - (4 - 6) = 10 - 4 + 6 = 12$. Con corchetes se empieza por dentro:
$15 - \left[4 - (-6)\right] = 15 - [4 + 6] = 15 - 10 = 5$.

**Estrategia para sumas largas:** suma por un lado todos los positivos y por otro todos los negativos, y al final resta:
$-12 + 5 - 3 + 20 - 7 = (5 + 20) - (12 + 3 + 7) = 25 - 22 = 3$.

**Ejemplo resuelto 1.** A las $7$ h el termómetro marca $-3$ °C y a las $14$ h marca $+5$ °C. La variación es
$5 - (-3) = 8$ grados (ha subido $8$ °C). Un ascensor en el sótano $-2$ que sube a la planta $4$ sube $4 - (-2) = 6$ plantas.

## 4. Producto y cociente: la regla de los signos

> [!practico]
> Multiplicar $(-3) \cdot 4$ es sumar cuatro veces una deuda de $3$: $-12$. ¿Y $(-3) \cdot (-4)$? Es «quitar cuatro deudas de $3$
> euros», lo cual te deja $12$ euros mejor. Por eso dos signos negativos dan positivo.

| | positivo | negativo |
| --- | :---: | :---: |
| **positivo** | $+$ | $-$ |
| **negativo** | $-$ | $+$ |

Se multiplican (o dividen) los valores absolutos, y el signo es $+$ si los dos factores tienen el mismo signo y $-$ si lo tienen
distinto: $(-3)\cdot(+5) = -15$; $(-12) : (-4) = +3$; $(+20) : (-5) = -4$. En un producto de muchos factores, el resultado es positivo si hay
un número **par** de factores negativos y negativo si hay un número **impar**.

> [!formal] Con rigor: por qué menos por menos es más
> La regla no es un capricho: es la única que respeta la propiedad distributiva. Como $4 + (-4) = 0$, tiene que ser
> $(-3)\cdot\bigl(4 + (-4)\bigr) = (-3)\cdot 0 = 0$. Si la distributiva vale, esto es $(-3)\cdot4 + (-3)\cdot(-4) = -12 + (-3)\cdot(-4)$. Para que sume
> $0$, $(-3)\cdot(-4)$ tiene que ser el opuesto de $-12$, es decir $+12$. El mismo argumento sirve con cualquier par de números.
> $\blacksquare$

## 5. Potencias de números enteros

> [!practico]
> Elevar un negativo a una potencia es multiplicarlo varias veces, y cada par de negativos se convierte en positivo. Si quedan
> todos emparejados (exponente par), el resultado es positivo; si sobra uno (exponente impar), es negativo.

$(-2)^4 = (-2)(-2)(-2)(-2) = +16$ y $(-2)^3 = -8$. **Atención a los paréntesis**: en $-2^4$ el exponente afecta solo al $2$, así que
$-2^4 = -(2^4) = -16$. Las propiedades de [[mat-potencias-raices]] siguen valiendo: $(-3)^2 \cdot (-3)^3 = (-3)^5 = -243$.

## 6. Operaciones combinadas

> [!practico]
> Con negativos la jerarquía es la misma de siempre: paréntesis, potencias, productos y cocientes, y por último sumas y restas.
> Lo que cambia es que hay que cuidar el signo en cada paso. Ir despacio y escribir cada paso evita casi todos los errores.

**Ejemplo resuelto 2.** $5 - 3 \cdot (-2) = 5 - (-6) = 5 + 6 = 11$ (primero el producto).
**Ejemplo resuelto 3.** $-2 \cdot \left[3 - (-4)\right]^2 + 10 : (-5) = -2 \cdot [7]^2 + (-2) = -2 \cdot 49 - 2 = -98 - 2 = -100$.

**Con calculadora**: los números negativos se introducen con la tecla del signo (`(-)` o `+/-`), no con la de restar, y conviene
poner paréntesis en las bases negativas: para $(-3)^2$ hay que escribir los paréntesis, o la calculadora calculará $-3^2 = -9$.

## 7. Errores típicos

- Pensar que $-10$ es mayor que $-3$ porque $10 > 3$.
- Olvidar cambiar los signos al quitar un paréntesis precedido de $-$.
- Aplicar la regla de los signos a las sumas: $(-3) + (-4)$ es $-7$, no $+7$.
- Confundir $(-2)^4 = 16$ con $-2^4 = -16$.
- Calcular de izquierda a derecha sin respetar la jerarquía: $5 - 3 \cdot (-2)$ no es $2 \cdot (-2)$.
- Contar mal los años entre fechas antes y después de Cristo (no existe el año $0$).

## 8. Resumen

- $\mathbb Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$; más a la derecha, mayor; opuesto y valor absoluto; distancia $|a - b|$.
- Suma: mismo signo, se suman y se pone el signo; distinto signo, se restan y gana el signo del mayor valor absoluto.
- Restar es sumar el opuesto; un $-$ delante de un paréntesis cambia todos los signos de dentro.
- Producto y cociente: signos iguales, $+$; distintos, $-$ (la única regla compatible con la distributiva).
- Potencias: exponente par, positivo; impar, el signo de la base; $(-a)^n \neq -a^n$.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se comparan dos negativos.
2. Restar es sumar el opuesto.
3. La regla de los signos y su justificación con la distributiva.
4. La diferencia entre $(-2)^4$ y $-2^4$.
5. La jerarquía de las operaciones con negativos.

## Siguiente

[[mat-fracciones]] (partes de la unidad, también con signo) y [[mat-expresiones-algebraicas]] (las letras pueden valer números
negativos).
