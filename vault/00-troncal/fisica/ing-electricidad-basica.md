---
id: ing-electricidad-basica
title: "Electricidad básica: corriente, tensión, Ohm y circuitos sencillos"
area: ingenieria
trunk_level: 7
prerequisites: [fis-fuerzas-energia, mat-algebra-basica]
academic_sources:
  - "Halliday, D.; Resnick, R.; Walker, J. Fundamentals of Physics, 11ª ed. Wiley, 2018, caps. 21 (carga eléctrica), 25 (capacidad), 26 (corriente y resistencia) y 27 (circuitos)."
  - "Ling, S. J.; Sanny, J.; Moebs, W. Física universitaria, volumen 2 (en español). OpenStax, 2021, caps. 8 (capacitancia), 9 (corriente y resistencia) y 10 (circuitos de corriente continua). https://openstax.org/books/f%C3%ADsica-universitaria-volumen-2/pages/9-introduccion"
  - "Horowitz, P.; Hill, W. The Art of Electronics, 3ª ed. Cambridge University Press, 2015."
  - "Feynman, R. P.; Leighton, R. B.; Sands, M. The Feynman Lectures on Physics, vol. II. Addison-Wesley, 1964 (edición en línea: feynmanlectures.caltech.edu)."
  - "Bureau International des Poids et Mesures (BIPM). The International System of Units (SI), 9ª ed., 2019 (el amperio y la carga elemental)."
hints:
  - "Concepto: en un circuito, la corriente es la misma en todos los elementos conectados en serie y la tensión es la misma en todos los conectados en paralelo. Reduce la red por partes (series y paralelos) hasta una resistencia equivalente, calcula la corriente total con la ley de Ohm y vuelve hacia atrás repartiendo tensiones y corrientes."
  - "Herramienta: comprueba con la conservación de la energía: la potencia que entrega la fuente debe ser igual a la suma de las potencias disipadas. Para redes con varios nodos, escribe la ley de corrientes de Kirchhoff en cada nodo y resuelve el sistema (en Python, numpy.linalg.solve). Un simulador gratuito como ngspice, LTspice o Falstad sirve para contrastar."
  - "Documentación oficial: Halliday-Resnick-Walker, capítulos de corriente y resistencia, y de circuitos; Horowitz y Hill, capítulo 1 (fundamentos) y los apéndices sobre código de colores de resistencias y series E; Feynman, vol. II, capítulos de electrostática y circuitos."
exercises:
  - id: ley-de-ohm
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Una resistencia de ${{R}}\ \Omega$ está conectada a una fuente de ${{V}}$ V. ¿Qué corriente circula, en amperios?
    variants:
      - values: {"R":60,"V":"12"}
        answers: ["sha256:a2a9d86652466e587d6b69b052a1dd6784546858d4dfb69d9a9d43b9306262f9","sha256:debe67ba5a9e4621ae375d6542092500a3a0b0eed2e3032805e803f95fbb41b2","sha256:462ecbc8d95e3daab24e5bd54558402d8862b9787829104a214aaca31f9ece20"]
      - values: {"R":220,"V":"5"}
        answers: ["sha256:5811e5c49b1caffa322384a807684ac28fd3654e61a3f0e39722ba73199288d9","sha256:68d2216a4376f419c78622c041b38721d058fc4998c846ade4d1679aee6af784","sha256:e3b3120695508b0e44a08292cdaa39bbd6b2c4a84e0cee767c79a3190f779df5"]
      - values: {"R":1000,"V":"9"}
        answers: ["sha256:b2f26801d66ce1a9693db1d629121d9153a961970db235d3c7a2b100d41ccc13","sha256:2d66407c8aafa17472fb72b4b16165a5c618c1540730e6bec52c30795cee197c","sha256:ac30014a1434330e726e4a5c4770d6e497ff5a21bcf7eb0d81d2a4904ac6c055"]
      - values: {"R":8,"V":"24"}
        answers: ["sha256:6b8584317130a42efb6f4f8c4a437b91ad198affb7d20dd8016b75d834047024","sha256:5d987f8022fb69ed62bed5db00d9fac9aaf775fc608a334840a2f002fd1414d0","sha256:09ce545d36959651d844033835af7c709945ce6a4504af89e762be7e1f3c4a03"]
      - values: {"R":33,"V":"3{,}3"}
        answers: ["sha256:435902b0c31d02ff380a7fc87264f2227c026bbcfb2cbec195ede21205752942","sha256:b78d866fe1c2e4de8ac1000262141f38e8b31219e4452f0c08b10eea053d2f33","sha256:a116a9b9f9d2a477ca3d936cb7261260ccd963add888fe34871df12daabcb258"]
      - values: {"R":470,"V":"12"}
        answers: ["sha256:ef76a3f540129584ef50c6d5a01c24da128002574c67af4023508ac96494c739","sha256:b0034e51e2686f30023e2b92741bffb0d27dbdc1b4be1ea7c2c39fe58e95f1c8","sha256:0aca97d966b4d2d5acb09f6ec13fd53472baae4af284f7fb0567651762426714"]
  - id: potencia-i2r
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Por una resistencia de ${{R}}\ \Omega$ circula una corriente de ${{I}}$ A. ¿Qué potencia disipa, en vatios?
    variants:
      - values: {"R":"10","I":"3"}
        answers: ["sha256:00fd39371ca540f9a27e7369c6410339f942f4e720ac0d456348e7ae2bfa4ae5","sha256:7abf59ea37d1cfd7a1e1dd25a71a0ea122dc6340994862948c62681f20c72a63","sha256:dfeaefd688295cf923062be628d8b5d9e4a8be475dbecd3f2b946f2bd932a740"]
      - values: {"R":"4{,}7","I":"2"}
        answers: ["sha256:48125b9ff07f0418ec38f4a745838a6a00edfdc71ef6edebc06657d6963eeec4","sha256:eaed50fe3c569c13ff7497ca683f9702e0ec9972884ea2592636fcdc74595ec9","sha256:bcef6584ffc39d70a61526d06422ec2befdcdba5419ef6ac15531af243288206"]
      - values: {"R":"100","I":"0{,}5"}
        answers: ["sha256:f926e36e8ce55985f201834749d090789c071b4727378ffba42f53b6267ca3ac","sha256:2bf038464951798b905cd24edbfa44279a84edc74dcacfe32d20d8dfb2d124f3","sha256:77f9f4d9fee47a98772a5a8ff3b5ba939a49e7245d5c219b318b04469138233b"]
      - values: {"R":"22","I":"1{,}5"}
        answers: ["sha256:a754c9dddc11779c6015d3d35e93ccbec5d394669bcf6ba596491e28a6ada3fb","sha256:8a25b42cf9d3e2198c038ab86200bd3daba1077310e7789fd92a4e287f5d04ef","sha256:1399ece9caf1287cecfcfd0cd97e43c932b3d67635fcf4afd277908a9869bf2f"]
      - values: {"R":"1000","I":"0{,}02"}
        answers: ["sha256:588592f6de0cbc179c2cf9196d58365f9eaacc8ae86d6ffd0d212f2782128a02","sha256:287c450e8e87315f232ba5e5b0ac7f8a0bb453f557c1921d53a2ff903bd4693a","sha256:391e50f9aa2c8bfb4d77eb9dc0951cee8fb6039c96412293b5b73ed3a258a961"]
      - values: {"R":"8","I":"4"}
        answers: ["sha256:81177d08613e5e6a8aaccecf82f05038b2af8b7135ec2758dc077e44c4302dc0","sha256:352dc0ab8f754f6cb622cab26e204813c02eced85fcf60e6ca750e63dca2a0ea","sha256:9493fd3845378d891b0476423aa009bd65f9d8be38be6871d3c66cc7ce38a659"]
  - id: factura-estufa
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Un aparato de ${{kW}}$ kW funciona ${{h}}$ horas. Con la electricidad a ${{p}}$ euros por kWh, ¿cuánto cuesta, en euros?
    variants:
      - values: {"kW":"1{,}5","h":"4","p":"0{,}2"}
        answers: ["sha256:f5fb6edcc6d2d517159b129bf7a08cbbc62f1bd21eccb4d931fda535577fe9bb","sha256:f5b86a2748340650a43e9fbf3f37c49a5e2f2ce3da2f8fc34fec8baddb673ae1","sha256:32f3414fa56aec4aff54487abc6e2835e4ac384e0ecb2c504f0476d386fbf379"]
      - values: {"kW":"2","h":"1{,}5","p":"0{,}15"}
        answers: ["sha256:a029e2bf104f20275b2f2024e568523b94417c9735db1d47bf7388cd5dcf84cd","sha256:1c5997ac0c8732e4d4973c8e2cee4ae58410182c7fedfd552764a1ae4e8231db","sha256:a6413caf2a01c60b8e728138f06d3f46777996edd4e27da90f103927c5d5a4de"]
      - values: {"kW":"0{,}06","h":"300","p":"0{,}18"}
        answers: ["sha256:b633666036a04ad10d77b19796df367f8a60338a2d2293606bb823211f04aa8c","sha256:422ed473cfdad93cb37ffec8c5dc35e328ad3a6a987e3067314b3571a7664185","sha256:4d3aa7134118c87222ab7bf4a6c2bb1dae6ed5991294d2f0ca90a4949616871b"]
      - values: {"kW":"3{,}5","h":"0{,}5","p":"0{,}22"}
        answers: ["sha256:4234026d8be96e6b29709f4169ea16347f8a9691f3f5b5281bc49b76c1fef525","sha256:3e661d10cc278a763bc4550a8e98c04ae7c42ea98a6d9d7cbb90847b613de88b","sha256:60f193cc0b9beeb16cd3ff956bb8eba29cf3066878d52a62e06cdf6bad93b0b5"]
      - values: {"kW":"0{,}8","h":"6","p":"0{,}12"}
        answers: ["sha256:f100f2b828f5f26cc116d7bef893a5b6745f06e7cad6334475d66b5adcebbd82","sha256:7ce474fec343fa7115d7c83d8d6f96896bc6c4c82d7ec50ae655e26960e7b38f","sha256:fda58c3a315435de9225b488f02db2985f9aa4fa458140de9e9977df5b4e62c4"]
      - values: {"kW":"9","h":"0{,}25","p":"0{,}25"}
        answers: ["sha256:c7fc5df6cc852def10f339862d626eecc11fabd77fd5e4b14fd8b0e9bb218958","sha256:f42b5d6cb81818083f80211fdf0df6fa5577e13fb3cfa9908ce6024916c09e8c","sha256:623622aa395b5cea38ad0a2cecfcdfac4b5c793fccbd04eb1ce9846063103cb1"]
  - id: resistencias-serie
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Las resistencias {{lista}} están en serie. ¿Cuál es la resistencia total, en ohmios?
    variants:
      - values: {"lista":"$100\\ \\Omega$, $220\\ \\Omega$, $330\\ \\Omega$"}
        answers: ["sha256:3b7144fc7211067f191c01839ae727ad8993e969bfe6a3e9667de7c98c4a1b2c","sha256:f3f012bb8214e506593db3ec3e205d439185d82c20e51925f977c91f81236785","sha256:384411a40786f56145fa130961af92e2eeba4f166957639d8840ab90b2874969"]
      - values: {"lista":"$47\\ \\Omega$, $68\\ \\Omega$, $1000\\ \\Omega$"}
        answers: ["sha256:bf165dd33c4e0bb48df74ed5a5ae58ec3531e054ed3be4e987eb7cd2de38b9e3","sha256:adbb79d33eeb6327b4dee8fd9b37c07e2db07fc327d3e8c3e9bd2e68e6cb06d2","sha256:9ef279a6efc85cb977bfd7a542b954c1fb7a1d50afcce79490ef6cd306cebcc6"]
      - values: {"lista":"$1000\\ \\Omega$, $2200\\ \\Omega$, $4700\\ \\Omega$"}
        answers: ["sha256:e1693c5c7d6e6ee76264b1bc6f8b7eafcf9315f92aaa2520d7787ac65b9c1a6d","sha256:8bf49fccc9d01e1a83ebba777558550af9c435f0354e00fea03a4c5cf0c3407f","sha256:af5e7115d5fea8433f32e975b480ca2d40cc941cf2ffd74742fb09f76c6693c2"]
      - values: {"lista":"$10\\ \\Omega$, $10\\ \\Omega$, $10\\ \\Omega$, $10\\ \\Omega$"}
        answers: ["sha256:7a7c5832dc3076e249002d5ebdd61765d62512636e2a2628c9e5fbf6c5493a71","sha256:42d0fc33a7c439c0b4a3544b5c6a11f1bd99d0f582e652e33f0d04aeae60a4af","sha256:00cf636a9a32a2a05e830bf5a88e17a6c183e915a09131b6b4f010d2a64e09e7"]
      - values: {"lista":"$560\\ \\Omega$, $1200\\ \\Omega$"}
        answers: ["sha256:1e0316d7845436c34546f6bcb8ec548fbc8a12356416519f2864da14f98381b6","sha256:ae78c59df6b799cf27169bffa7b023140df68f69a6c97bf45d46d1a56b8cdeb2","sha256:6e92464ee529f8e62e630426366969f37b04e32ca7a06046ea34e5c2f9b15e91"]
      - values: {"lista":"$33\\ \\Omega$, $47\\ \\Omega$, $82\\ \\Omega$, $150\\ \\Omega$"}
        answers: ["sha256:5b2801f3c21caab6f0690a932cf598d0981c12e6d098fa7f3f8090b067ca796f","sha256:98883a5fa8aa3f6906ac3661ae94e3afeacb37cd2f4b9b2340f508d2ce4639db","sha256:bd03cedcc258bd47ba1e7419d3d3ed15182bd861ecd0f1d7e6c91a33fe6ffea8"]
  - id: resistencias-paralelo
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Dos resistencias de ${{a}}\ \Omega$ y ${{b}}\ \Omega$ están en paralelo. ¿Cuál es la resistencia equivalente, en ohmios?
    variants:
      - values: {"a":60,"b":30}
        answers: ["sha256:c29a7b5f8e1a21d6e903a2e3a4058469c6a46fc32ca0e3a12f0fdb3fc78c0b24","sha256:8ddecc6a89c491bbc5eea49978f1ff89ddc9b00f50ddfb7ae9cf159b476eb659","sha256:5d6e7793eaffbc678fd92a186971bd916dad7b648c1e37991bc6ebfee46ff8f9"]
      - values: {"a":100,"b":100}
        answers: ["sha256:4ba2608fcc7953e3cc41c1a81a5c06da4fd212c37a0e5dbadfc46cb5a5e2e0c1","sha256:4eb174e115d168fe49d64e9ff122037a7e207ba959bc41ad6edd4900fc69d43c","sha256:51c53999734f88b8167a0d1a1222851c3801fa8b245e44e9601384b92d22e813"]
      - values: {"a":12,"b":6}
        answers: ["sha256:d5bf980e3e0e5a3154779cec30e654a22a157c38507943e63ccdcad5a860fa76","sha256:55b301bee489f1fc36cc874fd09a3da56b2e4136413fc2962e7fe3ba03424112","sha256:8a4a62b564432d5066586d1c3cac5cb8effe8a8e741bbf0608db91e7c46491fc"]
      - values: {"a":1000,"b":1500}
        answers: ["sha256:14b755011cc5ce7c6fd8c5c385a482d57deff58c80e2750c1ab3bbc550f21c4b","sha256:9aa872922642b49dee2c438b4751e83cfcf3ee7eb6d4af1bfd24e2aee7cb01a9","sha256:f9c7d9b94f4c163974e82c5e076d67d475e399dff01104aa7071cdb13a36b92c"]
      - values: {"a":20,"b":5}
        answers: ["sha256:31228729908315f51966777f36ecd49ffb5875f0b89e4cd6694f5977ffcd1e15","sha256:b3404f5bab5c0f4c0ed9e71ef027298603752ba34b543612fbfef36291a8ecf4","sha256:c0295fc3a711feb9df1c5df6a8d81fc08a22b6a59b57860d20539f9e5edeee48"]
      - values: {"a":330,"b":220}
        answers: ["sha256:08e597c60ecf9f1f17d9061a5cef9fecc35ea81ffa85b62fb42d9711334030ed","sha256:fe397f5d8ed1dc1630f567a0a87de7efad3f8bdaa1462fe7e744167434afeceb","sha256:359744daa0fd01fae6f518263bcd405d6f312f6b07a220a9eeb75fd5cc0e1e5a"]
  - id: divisor-de-tension
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Se aplican ${{V}}$ V a dos resistencias en serie, de ${{R1}}\ \text{k}\Omega$ y ${{R2}}\ \text{k}\Omega$. ¿Qué tensión cae en la de
      ${{R2}}\ \text{k}\Omega$, en voltios? (Cuatro cifras significativas si no es exacta.)
    variants:
      - values: {"V":"9","R1":"2","R2":"1"}
        answers: ["sha256:8b9c93c0e8376ed5cb867d4e299326d86b69e989fc872feedd4ca7137985a18f","sha256:bef8995161eea0bf225bb3983306266e410b01d3180ea02f5383c83db349321e","sha256:7884186fb71f06988624b6d289842d11a8b3fa112df462a2fa2bf493bcdb9530"]
      - values: {"V":"12","R1":"1","R2":"2"}
        answers: ["sha256:f3fcb4f97cb41c4e7e2fbe9561f6dbc611cd485ba97cc3ea49812e812c24a255","sha256:9a3a8117db0b2bf138d5d0f1dfe85c42b0ea064eb91a2c879ea1b911d76011c8","sha256:b7a8fde694a533cbb3f54d1ec79316dcaf895630d9085213c1314b292423d5bd"]
      - values: {"V":"5","R1":"4{,}7","R2":"10"}
        answers: ["sha256:b3c9532d6e74b9be7505f1a7191bc86adae6b90822930f1b29f1c8e596a39e65","sha256:8ba12b880464b09a8c21de4628f460bde74d331e35eedfaf11d1d4edc9db2015","sha256:dc7c0305d0c786129893e6af18330422f29f60be881a86368c1dff8f6aa392de"]
      - values: {"V":"3{,}3","R1":"10","R2":"10"}
        answers: ["sha256:fa5e72f2c24b0483e15bdbcb9f5773b9836543b70bdd71cd981c5cbd1d4fefb5","sha256:65714f760137c3107832e6c3143b74b4d121c07b5418c815e00dde5dce5adac8","sha256:245186829689722375c6f2a73d6313f70336f28d15d45d4bc2a0b38afd818588"]
      - values: {"V":"24","R1":"6{,}8","R2":"3{,}3"}
        answers: ["sha256:15e1416a9422b48dccf4c7c81c397b9e864e7bf802a1f9f8227062e09948be74","sha256:31dc95949d51064c2f9a35c896172b05748500156ae8950d61bda5c91fdc7759","sha256:20fc977558a77012346b6a9fab1dbe91dbbcf5e5488f54f8f315a8117b6b80ca"]
      - values: {"V":"10","R1":"1","R2":"4"}
        answers: ["sha256:f6b3b5ecb84c31b6701a6cc800f60bf8a0d48b533eca9f6dfcdbffcd45d814e8","sha256:9fea6c987a939080188e0c45cd93d536e6e4af67a78f87d9de40f0cdab81ffbe","sha256:37e05bc66892550a4083757252e50867ecdaa9556591b73eb28541bd95a48877"]
  - id: resistencia-led
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Un LED necesita ${{mA}}$ mA y tiene una caída de tensión de ${{Vf}}$ V. Se alimenta con ${{Vs}}$ V a través de una resistencia en serie.
      ¿Qué valor debe tener esa resistencia, en ohmios?
    variants:
      - values: {"Vs":"5","Vf":"2{,}0","mA":10}
        answers: ["sha256:5baf2da558c4b4bb54c6b3a2564de6d8257153119c2206cc8f15070554f3623f","sha256:8321ba52dcd8d73bbab8d9e4ab695b981bed92fa0f67f80a7246008bce75749c","sha256:8fa4c1a503410ee1f3bc2effa7b5c3165d6801a8f1fafe0ae9b4663d9f7435dc"]
      - values: {"Vs":"5","Vf":"3{,}2","mA":20}
        answers: ["sha256:c16a9186a6abfacab305182400b2f7d89773c500784faa472756a68c5d79cd9a","sha256:3acca97352438af1994e15869326fb44ff25fb566247afed9857ab150dedafc2","sha256:af024dbf6975428c28355b2e4bcf2b608aa2b74b5390148cb609c72654674152"]
      - values: {"Vs":"12","Vf":"2{,}1","mA":15}
        answers: ["sha256:2a016d17e3c1acfbfd88db801e8dceaec1812f9c6b803f213cc478b1ba862857","sha256:c266415f35d8cf911eef2bd3431e4600d4bf0bc0999ecd29dcdac8753b32e213","sha256:6758bf6b7a39b622aa4c0aecaccdb5470a6ad24f76544f437b395f0c4bf2b1b2"]
      - values: {"Vs":"3{,}3","Vf":"2{,}0","mA":5}
        answers: ["sha256:5100d0dcb58987a547a14aa9834ad74274052d07db84290393cc47c4f01e5303","sha256:50b16635eb1af3d30b90f78e75fa0e5e7dca95281294a8231c3b741efad30d22","sha256:118a0895eadf19de9be1aa2fa9c0df14a8448bf7dc2be48b6365adc61f3905f4"]
      - values: {"Vs":"9","Vf":"3{,}0","mA":20}
        answers: ["sha256:de2559a6ea1cde5bcf220b2d9be9921d1aa76f41093ffe30c20dbf56f53acc7b","sha256:33cd5de2cf0a63257cc7c326a74f93e5e0de9cb052dc09d8f77e1588452ac1aa","sha256:bab19d234bac044c8ccb92b214a057d79e07537b1bf2bc833d5bcb0291146cab"]
      - values: {"Vs":"24","Vf":"3{,}2","mA":10}
        answers: ["sha256:ca9ee8ccc998bd54aa40e9eb488cba83a5f0918dae425b3ba4550e93c88a8108","sha256:0333d49df718d64abe4858a017d0e39b29762bb2a9b5008f72ed3d31ce0ca995","sha256:8987a69ad66d3ac0bc226c9b45649b12961f62dc5adb893766b6c3e31bfcf66d"]
  - id: resistencia-del-cable
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Un cable de {{mat}} ($\rho = {{rho}}\cdot 10^{-8}\ \Omega\cdot\text{m}$) mide ${{L}}$ m y tiene una sección de ${{mm2}}$ mm$^2$. ¿Cuál es su
      resistencia, en ohmios? (Cuatro cifras significativas.)
    variants:
      - values: {"L":50,"mm2":"2{,}5","rho":"1{,}68","mat":"cobre"}
        answers: ["sha256:330d2c55d2426dfc793dfcc0f9379a98ca4f12c99901f219f5b73b6cc2d3cfc0","sha256:6d55cfb61e0c597e2a05a6ec48bbbf9b8910e4c6a6b8d38b30a1315b937e1bc9","sha256:f7ba5f7efaae74de4bbb2b7f9fa065f9cad79e99e08c9e897e0b880fba18afe4"]
      - values: {"L":100,"mm2":"1{,}5","rho":"1{,}68","mat":"cobre"}
        answers: ["sha256:6025cb062be7da888fada8e820d587ac99274da51a436b6db5d8015354115eb0","sha256:d450af273fdc240fa904a84a7d89c79ef6beae61f57d484adcdc7e34726cc9bc","sha256:35c079c5da11a6cf9da782ba4a6080b17db894e1425ebbb77da62e0473d22087"]
      - values: {"L":20,"mm2":"0{,}5","rho":"1{,}68","mat":"cobre"}
        answers: ["sha256:36ddc6c5a00f94fe5ce37f606a5d2a8f569f614608289dbe52f6e240d3da56af","sha256:3e1228a9bc2ad0dc888383594792dff669d72c64a7d1deec9ba8f7c2a0aadb48","sha256:5986a40d45336333cf3ac561101b5aa7604acdd22dd568b34a33d138518cf0f7"]
      - values: {"L":200,"mm2":"6","rho":"2{,}65","mat":"aluminio"}
        answers: ["sha256:71888e0c7ce2106faf569e2cbb2239d46ca87e7e7f536cea0799835e277dc83b","sha256:e733191044b023622fef0120350de4b0b8cb03692d43b80a88e477d287237e47","sha256:fbd679b73274106792b3c813bb59ff0d5a7a51f2565d4ea1253765d68f16e8cd"]
      - values: {"L":10,"mm2":"0{,}25","rho":"1{,}68","mat":"cobre"}
        answers: ["sha256:fd6f2a8dd882052416027e6761a640af8a9e47765f31c2d205d9e72bdcabbf30","sha256:2b233c4c9135b61484b74eea7352fc53767e832c5e9ce6e39ada045f99f61d8f","sha256:e075e429e992846900386930b446a0f2b0b9214a46dc6883c5f1915d282dc872"]
      - values: {"L":1000,"mm2":"35","rho":"2{,}65","mat":"aluminio"}
        answers: ["sha256:f77ff62f9b1ca82bb75ce902e94e00751d59f59b7505dc6e0e021aff46218fee","sha256:e7a59ba32dff93f0e0ad96c2346d2a0b9c233efed44225061753b5c2d4269f16","sha256:9fb108ad33ac1794aa70b586ddacc46bea19f5c7b56477db5b07f029ec37c155"]
  - id: bateria-real
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una batería de ${{E}}$ V con una resistencia interna de ${{r}}\ \Omega$ alimenta una carga de ${{R}}\ \Omega$. ¿Qué tensión hay en sus
      bornes, en voltios?
    variants:
      - values: {"E":"12","r":"0{,}5","R":"7{,}5"}
        answers: ["sha256:a439343c755ffc0b637f32fe9cc4842300348b8cb963c7844e52667dd5adf079","sha256:f798b42104d182d87c81460261941e928ea0378a98c362d01143e1912d35dbde","sha256:26633803ee9cc8a303e64d83d5d99325a2f7c420cb1a8a50a06fd26e394e68eb"]
      - values: {"E":"9","r":"1","R":"11"}
        answers: ["sha256:914bc4ce912707cd664c4b14de73b39d6efeef67fb5e5a5c272d22fc735df458","sha256:98ff37c82b848d5119bf4cda2ef8a49bd5307c5eedefeae922c7272c28ebc135","sha256:9fcadabcc1692097156daa602b0b71536a18c6ab3a317036dd8f8311f9463778"]
      - values: {"E":"1{,}5","r":"0{,}2","R":"2{,}8"}
        answers: ["sha256:f4c68e0330967e0522d1cdbef313c20590121d5ac9b3723da27f24562825e1a5","sha256:fbe9ac8dc09bfbbca49f345981d09f5ab9e95467da81ca030e33f6bc09062989","sha256:085ee030e6550eba9df9abeb4e7927d888f5358f75ac9c04f19cb380ed3afe21"]
      - values: {"E":"12","r":"0{,}05","R":"0{,}95"}
        answers: ["sha256:37ccb696f8c0d898cc2e517b6ce29b89eca5574fd87fad7670d3362e05abcc89","sha256:dc9d5ae8726db755d1f44ec7b34f3e535be688a6e23b0b2822f6d3db876afc08","sha256:06c3781e7330a81b82063ee3ee95dbba16cb34c7352ef6d953628f0e68003af2"]
      - values: {"E":"3{,}7","r":"0{,}1","R":"1{,}9"}
        answers: ["sha256:1cab594c49459e2715e2566e2af4bf5dac7e2d53a0d37dccef512b4c85861ffe","sha256:5a305fbc4ad6eab495aa4ddc2bde589aff39f6678b9bd51d6b392e1d7b189d3a","sha256:6dfeebfca37d0fa98b35b7d5dd4ea299fca463ea475e440fb978686098f7f12c"]
      - values: {"E":"24","r":"0{,}4","R":"7{,}6"}
        answers: ["sha256:ba59cec45d6329f8c3b8e697f4baaaa55d855eb62b800ef2ea43b97378acefc9","sha256:8acecac1f12db67e2151abdb2ef72b92794fdb7d08fce9e079d1d2d1ae9febac","sha256:77dc95e459411a2336ffd5358ea484aab1561ccf7ea5a07684947c825e3385df"]
  - id: valor-de-pico
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La red doméstica de {{pais}} da ${{V}}$ V **eficaces** con onda senoidal. ¿Cuál es su tensión de **pico**, en voltios?
      Respuesta: la **parte entera** del resultado.
    variants:
      - values: {"V":120,"pais":"Estados Unidos"}
        answers: ["sha256:28815a2b27b53160b2d5c6e6f4870daf810afe5d587d8000de5f41a23b90d8d7","sha256:98e900338b3c033c04cae66a2ef15f96bf8aad7076faf994c7beb8ca182cc60e","sha256:f1de9c6ebda4a9d9190ccb4d94c240b1d50357f2b7b20908dcf9d67da1b52efe"]
      - values: {"V":110,"pais":"Cuba"}
        answers: ["sha256:2384258c7ac00bb1337823d109173ea83d1310877a0bd88da40d76e610d15086","sha256:8129430df7638b71027ed2b204f84dd64befe5240482153e869ec802e655e4fb","sha256:45ae2cbf136de0c7ecfb1335531704e626427feb5e53c77696a65a365aad8a50"]
      - values: {"V":100,"pais":"Japón"}
        answers: ["sha256:fb2bd94e4099f41f9dbb804ac3a9627f2f97a8e952b068224f66572db5b477cb","sha256:6fbee4fe4b2fb4838b5018d08fc1720ba285d749fbbc2b0fd5743d195b7d0aea","sha256:7418b8d7489739c0243eeb5f24c91860a9b2e8b494abd6ff7f0418727cff2bb8"]
      - values: {"V":220,"pais":"Corea del Sur"}
        answers: ["sha256:00be37b67f854cce92755f872302c5281ae163ba1d882bebc8fec7826489c454","sha256:c690242cad23eeed26cab5530fea9b26f266e31c72464c6e64c8d7e1d96e9126","sha256:4dd649a2c40b1aa06e6511998b0dc2a87049316ae67f019cb7e34169f2bca03e"]
      - values: {"V":127,"pais":"México"}
        answers: ["sha256:556f4522dde73b24986630e2aaece49cd051d980c7594a7ce6c436ff61105636","sha256:88f5d9778acd16aba3563324d7e80c57a6af82884155bb0c7a17510f55b1485e","sha256:b80b46c273991e1426cb9f418b62ea8e2b4689f57982bc997b8d3cd826f8dab5"]
      - values: {"V":240,"pais":"Australia"}
        answers: ["sha256:201145bddbe644f73bfdcbc67bee3868f28fad0d35cfb03a979d2f5ac6be9935","sha256:ac10c9af37205c6f20337141fa88f40faaee4d215a5e846c9aa33f33dffefdc8","sha256:97a5ea1c0ad71f5c97db2f075fedb96ce0a48717624955d40497545c3aa686f0"]
  - id: red-mixta
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una fuente de ${{V}}$ V alimenta una resistencia de ${{R1}}\ \Omega$ en serie con el conjunto formado por ${{R2}}\ \Omega$ y ${{R3}}\ \Omega$ en
      **paralelo**. ¿Qué corriente circula por la resistencia de ${{R3}}\ \Omega$, en amperios? (Cuatro cifras significativas.)
    variants:
      - values: {"V":12,"R1":4,"R2":6,"R3":12}
        answers: ["sha256:73049af753138452b13adc412e094c93a5420ccdaaf1e6fe0ed70c7e3679a316","sha256:14b1d06e60f1ee4cbc6cb04399d2084776499b732a436e401c6935a4521b0ee5","sha256:779607e9296fa1aa2243cc8c4d5eb5f3eee819e619052f9f1e6202f574a0944c"]
      - values: {"V":36,"R1":10,"R2":20,"R3":30}
        answers: ["sha256:2cb6a4091e18028bb5f30db42b4b2ffc7da77e766e39495ad2bef011c371844f","sha256:9b2e95e40bfeda8e822da5b5f0fee536ef3e54395116f9ab1a75d742714719a9","sha256:22c0cf5c632fa00131947fd7466bcffbc6ac3d24ddc0f437e8c7b875a90b193e"]
      - values: {"V":12,"R1":1,"R2":3,"R3":6}
        answers: ["sha256:5fa55ac216540872aa8776c1af03dad8bb86e4b317edc34f5254bfadeb683a68","sha256:f150b89139f82535888f0100a14f9548206cf70a99e261a67e48cda0adcf8c27","sha256:a9cd5eafd04ac36e48a197326bdc4a70152482a1931e13f9a573edcfee170b12"]
      - values: {"V":12,"R1":2,"R2":4,"R3":12}
        answers: ["sha256:f8c7c6e2054b20779cce16654a8555a7053c26581213ac3aff08e09240d60569","sha256:b336a640a8334ef523ea220b2b624e9365ff17db649d9abd1254be8964b08788","sha256:071c8de91fb09f9d3cf14d7d056090054039bb2d8bf9ee8efe5efb3d09d7e3a4"]
      - values: {"V":30,"R1":5,"R2":10,"R3":40}
        answers: ["sha256:96bee8d0db0412787845fe601e93be49cb91b1b3fd50e7dbfdc565479f7b1d80","sha256:fae67185188ed907b7be4211209e04f1b3e5cd94c159be6695b16ba4a146b629","sha256:9a731347d4b5452004e239392360084052ead8c8783948cd619e75eb09e5d205"]
      - values: {"V":5,"R1":1,"R2":2,"R3":2}
        answers: ["sha256:4cb4e14d8a6c4803233da510278ff0cf531a0be74f9a3df3e8ab011823923a24","sha256:11f3f54c338d660f0e3ff75f8567e543839fb5d1757e6a363000bd39297f12cd","sha256:e41b76e8ab0294bd7a71d9deeaa2fc06d7e1913a6335c3e32be76440e7a19991"]
  - id: puente-wheatstone
    tier: 3
    type: numero
    sig: 4
    prompt: |
      En un puente de Wheatstone, $R_1 = {{R1}}\ \Omega$ y $R_2 = {{R2}}\ \Omega$ forman una rama, y $R_3 = {{R3}}\ \Omega$ y $R_4$ la otra. El puente
      está **equilibrado** ($R_1/R_2 = R_3/R_4$). ¿Cuánto vale $R_4$, en ohmios? (Cuatro cifras significativas.)
    variants:
      - values: {"R1":100,"R2":200,"R3":150}
        answers: ["sha256:45dda8e089e2b2aae5389868562e510b1893f51f123f0e9ce430bd438093cb14","sha256:8c836985bb18aa2b06f60062633091e7f8cf9098002df8cdb523eb9af43ce296","sha256:2815ac6a64de0146ba5f1899be4ecf498cd98394231627baafbc9a719b47463d"]
      - values: {"R1":1000,"R2":2200,"R3":470}
        answers: ["sha256:8943f9d5e46bad5b8bd2a2902f0f16e2bce98511297f6a46f3bb745fc2a077cf","sha256:12e0089e6a0326d60850c59cb2f394ff13d5efbedc60eef5283929cec1a04a0a","sha256:8d9e20ae447d5540866f16e3de71971d624f5d40ad20c7e78896ce2f82e6d096"]
      - values: {"R1":330,"R2":680,"R3":1000}
        answers: ["sha256:da2ea2bcd7c31cb2d549c515bd3e12da13e778284f4c39c85e9412d964e95b37","sha256:4a853262da72779ee9bf79b9125041e08de39ee1c7e0062dad0644a689679197","sha256:c3d73f3dc8fe993cb5a0216a8733b26b60bc23759d2e36042648b218af433ed9"]
      - values: {"R1":50,"R2":75,"R3":120}
        answers: ["sha256:ebc94c8358c9048492421de1cc20f21c47ae550978fbf143e63a060145426256","sha256:d1407a9357f6c692c4f4fb8eb39efffc48fa384cd308bc9e820af1f320be3631","sha256:9fdaf5aa324d8577bf2a614677e8b3521acbe29c05f4d878b6f11c798629b55f"]
      - values: {"R1":2,"R2":5,"R3":10}
        answers: ["sha256:4ec7dc3d335ab1404682f0b548425506658e9474c1865bbb407bb539619ba854","sha256:f9547742a1851d91181ee45a556b3c669ba1778ba1f8e5d8991c5f35b2251e63","sha256:89a26729ab214f5776553fb11079c557cf77423f515da066b032facb8785ae6d"]
      - values: {"R1":470,"R2":1000,"R3":220}
        answers: ["sha256:fda003ec69c083545750cc00f27981b7a5c92b910f04fb2f50fceac8b2aa7bea","sha256:aaedcc1c7548d44bde647825346e245c2495905d33f0777527ee20ab6f2adfec","sha256:4de835228f5ff5495070af8a2e1d37692a5fece3e8dc01bda0f1678469ea35bc"]
  - id: carga-rc
    tier: 3
    type: numero
    sig: 3
    prompt: |
      Un condensador de ${{uF}}\ \mu$F, descargado, se carga a través de una resistencia de ${{kOhm}}\ \text{k}\Omega$ desde una fuente de
      ${{V}}$ V. ¿Qué tensión hay en el condensador al cabo de ${{t}}$ s? (Pista: $v_C = V(1 - e^{-t/RC})$.) Respuesta: voltios,
      **redondeado a dos decimales**.
    variants:
      - values: {"uF":220,"kOhm":"10","V":"5","t":"3"}
        answers: ["sha256:8ad8e367b01f3989a1516b38770a835622f81546b2215e7f72fea95debc93cb5","sha256:0525335fb2ad5c060db92742a1dee32bfc88114d1a232ca21bd3315216bf2f17","sha256:19f42a0aa2c111a6ff0d9bef03a74b97601b33e5faea4db4c3a7aaf584d4b86f"]
      - values: {"uF":47,"kOhm":"10","V":"9","t":"0{,}47"}
        answers: ["sha256:cba914f9d09ab84014551a1ea603d43524cd7f359d4e19495e01faf17c64e70a","sha256:5d32de0ffbaa5d5f0419650cba97a27d37ed0c5bdff8503e53a081ab03f6482c","sha256:9bd8d4864ef68ed4b3fb2bb09207c5d43a95d20b924998e4c3cb3344f60616b2"]
      - values: {"uF":220,"kOhm":"4{,}7","V":"12","t":"1"}
        answers: ["sha256:4fe449f6211d91d805630021f7cd88352416174c2de0b1ce4f3132c316c40e4f","sha256:d71e909370699045b746064c9246aac250adc6fff29225a80895da24520ab587","sha256:67bdc9fec8be515133c31407c1a8eb00ccf3fce65fc598b8030ace2561b450fc"]
      - values: {"uF":10,"kOhm":"100","V":"5","t":"0{,}5"}
        answers: ["sha256:20e9c3d3f01bc2e84ff41129e0d222289b231fc1de106e3b0876b6ffe10ecbf0","sha256:c71c63cc2c08735737c2bca5e53ba60820a2d7573786a17d47cf21dd6b913760","sha256:ee25b79ae3000dd43518a5db405190443e0e93dd69f85ae91cf29bb102dcfdec"]
      - values: {"uF":1000,"kOhm":"1","V":"3{,}3","t":"2"}
        answers: ["sha256:334354397794c96eea0c8049414ba2a3f3a9973e4e6b852d845a33f69fdd62e3","sha256:3056af110f0165ad32b282db8c06326c1cb48d4590b5d0ce29bb55df30db17fb","sha256:82d8130a17c277b30b9c52b15cf7381e1b02879c86c4fc7aca2ee44893ab61c6"]
      - values: {"uF":470,"kOhm":"2{,}2","V":"24","t":"1{,}5"}
        answers: ["sha256:795851825349ee91505f1782922c284e82d9ba3f3d9e5db05e696302cacadc1f","sha256:1f3dc535318853a7ad25d4810966d62b03f6bfac6e235f877c5338595e46c131","sha256:26d5ef61f990e1f25268fde4bb3d1067535ebc7a0ccfcb2f94cf47adca0d4114"]
  - id: energia-condensador
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Cuánta energía almacena un condensador de ${{uF}}\ \mu$F cargado a ${{V}}$ V, en milijulios?
    variants:
      - values: {"uF":470,"V":"16"}
        answers: ["sha256:89a3d1bfec9e7b61a1ff4f3c67046488bac107cd2742405a391eaa8eb121db8a","sha256:ad58f0bd9991658765d63fe1498b07599e42a9be629f9c383c12c46157ad2e85","sha256:0f6feaf319b81d823e9e3d8c52c7eb815817382de2f11ab2617e03dbea697460"]
      - values: {"uF":1000,"V":"25"}
        answers: ["sha256:31399c2d5ad4b9c43b4153f28de82f66e8388d8bc9cb0f5407116e05670b855c","sha256:bacd3d8bff24f5ce3a4f978a944eec86ed22c097201420707066c9700f2391a6","sha256:35818a95913022813867aabcf728797d87fe23e742a3e05990e4ed3cab8f86a3"]
      - values: {"uF":100,"V":"50"}
        answers: ["sha256:9efbeb806cc0d635166ca1316dfecaa579e4f834ec1f99acbd39f30297c9a8b0","sha256:0b99cf0f8bc861599e83f324a0e7b3a10a8a1888ec7b6180763424c154cd0180","sha256:b5c1b2d7723c8525c4865784d3f4007f9d2c360963f63ee8011fe5fb68aff426"]
      - values: {"uF":2200,"V":"6{,}3"}
        answers: ["sha256:426fcb47d0f1dfa7697b1df1d81472fbfb12c7a30cad2a5df8f05c7e51eded29","sha256:27e7f869d16fd77e87b0b7110593449fc59e7cbf5be00133c001d2eb4318cdd4","sha256:59b0c776c1be5f20f2d7e65ebb050ee377adb7c4f4a1d8220c0fb4d0e8ed7e17"]
      - values: {"uF":10,"V":"400"}
        answers: ["sha256:4fc463e4d77d4b95e4a5f8138138d8f7716d96f70535460805bfbca00cee0835","sha256:e10286a267cc847afd1580867fefb9d2ce515897340895b0a5122a30bbecb258","sha256:26f84656b2cbb7273b3e8150c76e1d30b8d44f7ad349e86b028afdbbe035a181"]
      - values: {"uF":4700,"V":"12"}
        answers: ["sha256:4b8059e877e3ea8baf10134200e213c43432d1d832ca59a595771c7d9525c7d5","sha256:db9b9d05dfbd2ae22c8731ae2a1870dce4e345a4b842e2b7d65b716a6fd59c29","sha256:a618a1cce1a7ac33c42404f9303bb960427e7aae46215332c3fe178161e47dc8"]
  - id: potencia-en-divisor
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Se aplican ${{V}}$ V a dos resistencias en serie, de ${{R1}}\ \text{k}\Omega$ y ${{R2}}\ \text{k}\Omega$. ¿Qué potencia disipa la de
      ${{R2}}\ \text{k}\Omega$, en milivatios? (Cuatro cifras significativas.)
    variants:
      - values: {"V":12,"R1":"1","R2":"2"}
        answers: ["sha256:77a98eb9b68253b08df6942652631ddc766b91ed5b2eeda8a7d245996580b9fd","sha256:a264f7a4be74fca7be3e6aa6163033f95ca62b020eb22d137a7052c770e65141","sha256:4e8a2eebc0ceeabdd976fc3cacf630cb1c05cbb4fc54c7680998b5703cae0fab"]
      - values: {"V":9,"R1":"4{,}7","R2":"4{,}7"}
        answers: ["sha256:147acab1cf61ac7c3a1044288220319b3242d0e86371a7652fbc779209b1245c","sha256:fb829addc489e549e5c2672f41ef8550e4f3fe6ee0af9558fc585e319b4923fe","sha256:d2c50d248ad36a61b89247593966be6cc02796cc1640a650a52f8dfb06d40a4a"]
      - values: {"V":24,"R1":"10","R2":"2"}
        answers: ["sha256:88030d3c9902a1516c015ee797b9e3936a9bda6fb7794360175df8dd1d604de0","sha256:e507161d1a0fa0d445cababee351b6dcf332a51be231efdc965dc41d7a04f1c8","sha256:315d9aea3ce89cb7ecc74e4f27d0e994790432fcbc081862a7b82d03a406aa6e"]
      - values: {"V":5,"R1":"1","R2":"1{,}5"}
        answers: ["sha256:01399ed7992be7e4a9fbe6c188ac29e5a72936bd6980a121f78d9917b41cd10f","sha256:e9005602fdcffd90c5cb73e269a5d99cab039d33c57deaea804d1bac3b6e638d","sha256:5b5c9ed0331690a038a5d59539d1b652cad6fc75f129a30b958342cc30ae7533"]
      - values: {"V":15,"R1":"3{,}3","R2":"6{,}8"}
        answers: ["sha256:bd2f2680f9b8a42343470f9800af9eac7b27763db665e22e39c92b06ab116b9a","sha256:1ad2e5ed089339cebbec110b580ace076d42a1f4d5836a192d7d8457787b5693","sha256:78b0266900e7a4f96abc456c961f47f1a0cfbe57a45c88b80e104700ce530b82"]
      - values: {"V":48,"R1":"22","R2":"10"}
        answers: ["sha256:60cba31665b03077e1c881cb04ac516fd9a02dac3dea214f89624bac6842645e","sha256:c7ecf668b0ff158ea89faf6f19bf14d4c04e42a8915c93227753534c3879d90b","sha256:7be1dbe7623636dfbe600dfb34a0680eff1ebcdbacce2cad95f69357da4bacdc"]
  - id: carga-del-movil
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Un móvil tiene una batería de ${{mAh}}$ mAh a ${{V}}$ V. Se carga con un cargador de ${{W}}$ W y un rendimiento global del ${{ef}}\,\%$
      (potencia entregada a la batería $=$ rendimiento $\times$ potencia del cargador). ¿Cuántos minutos **enteros** se necesitan como
      mínimo para cargarla del todo desde $0\,\%$? (Redondea hacia arriba.)
    variants:
      - values: {"mAh":4000,"V":"3{,}85","W":20,"ef":85}
        answers: ["sha256:0b0897b778cb721a48a65ba2183be1aa353d6fc28e414c5cfe68f6442f0bc646","sha256:75a05a409d4c57a9acddfe351e91170e55545a1517d1b21116b616b2eb05fd9d","sha256:c2ec11161a720198effad025e27f6b520bc4bb3301aa0c2680300cd2e58648d8"]
      - values: {"mAh":5000,"V":"3{,}87","W":18,"ef":85}
        answers: ["sha256:e73d80fd7f44b08318e1a6412db0b51a801bbcd2dbbc64550f1176eb86854bbe","sha256:56493b18281576e5187205bea26a618c8f436bd250447fd0c78449f0a4681560","sha256:e45346883c8961257b91abc27607edd8607715a90c04e3ab4200e78ae86ee90c"]
      - values: {"mAh":3000,"V":"3{,}8","W":10,"ef":90}
        answers: ["sha256:cf6cd14bd0a6b3bf11e764b3b7c8c43d33d16fbf8c4b881a18917076b223f267","sha256:913ee5d13a4a6d318bbc0d4a2a6b96b6cd9c3d3e2d148a8a049c2134b5533abb","sha256:5dbd6b95b45822fea37bd825c89517c1d997e320879d4f2dc78bc98c24926b2c"]
      - values: {"mAh":4500,"V":"3{,}89","W":45,"ef":82}
        answers: ["sha256:411cd991ce331b5b5e3a5800a3b08100dc783f65f2cae30e838150ee63a0d288","sha256:916ae2601a90b0920517f1c8cb7ef58210c2827e92e9d580df26e2ab0d3f1aa4","sha256:2ce6c27cd14d75145f9f32c7ba9548b039d3ffd52ea31ff3a82a9f88644daf90"]
      - values: {"mAh":2500,"V":"3{,}7","W":5,"ef":88}
        answers: ["sha256:f2bbfe3c2d71004732b237f40cb1b03693d18884aa925efe46d8a8208e03bb57","sha256:caf95af3fd6d9398c854a733e42c2b19a2adc4e93b37942b46bbc3fd833d5095","sha256:1ff2c11b9a8c250dcf9d067aebcdd6c336ff0debe007ff74cc53a42663220d69"]
      - values: {"mAh":6000,"V":"3{,}85","W":65,"ef":85}
        answers: ["sha256:a585e4b153ef4e62eb579cae1aab9df2c6dd29036813b4bc76b10eefb1d6952b","sha256:baebbe922ce6ae5f1adaf501f0150e801a38413ad5f70f95218fbfcc0f8e212d","sha256:221d005f8326a5ce5727266bab078357137510bfd5e6f967645bd1d8ab6e35a2"]
  - id: r-amperimetro
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se conecta un amperímetro para medir la corriente que pasa por una bombilla?
    options:
      - |
        En paralelo con el elemento
      - |
        En serie, abriendo el circuito
      - |
        Entre los dos bornes de la pila
      - |
        Da igual
    answers: ["sha256:fa213f3789d85e887805a5390d129580382bf7680ce8aba621cf569846b6e879"]
  - id: r-paralelo-menor
    tier: 1
    type: opcion
    review: true
    prompt: |
      La resistencia equivalente de dos resistencias en paralelo es siempre…
    options:
      - |
        Menor que la más pequeña de ellas
      - |
        Mayor que la más grande
      - |
        La media de las dos
      - |
        La suma de las dos
    answers: ["sha256:1eedef1dfa56d3377d0b485b2e9b050dd59d5af154e3a78c909da8deec8f3e0d"]
  - id: r-kwh
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos julios son $1$ kWh?
    answers: ["sha256:3ed621b0e6d738662de5f9f7f614fb04fe5ecb00ccb719b0c8cd387d11eec5c5","sha256:4866f8bc685b98485fe02418ca6a035a49345b24f381878d784b9094919ce73a","sha256:7d215fb9169b4c0dbfe05f635df30168a46112314e16ef58787d7f97b266be7a"]
  - id: r-tau
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es la constante de tiempo $\tau = RC$, en segundos, de un circuito con $R = 5\ \text{k}\Omega$ y $C = 100\ \mu$F?
    answers: ["sha256:d60c179853c8b8da567b0974155c2b3638237930416652ae2176ab24dca1d8cb","sha256:b23ed2c935de34fd156a3b128cc1cffcbab8ed17931cbaa9039fca0ba635d1e0","sha256:9cac7892ece7f8d86882f565028e1502291013cb56d2866a8156940b6644a860"]
  - id: r-potencia-doble-tension
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Si se duplica la tensión aplicada a una resistencia, ¿por cuánto se multiplica la potencia que disipa?
    answers: ["sha256:279f86b979229beda49230c7d30ce3bf54368d43640b796a0e46d90c597cdf98","sha256:32514197aa8069977dc2ae7d4c16ce28d5df9f747d9acfeb7ecc99dc28cc7150","sha256:afbd4f3c9fad720e13375e1efd2b391cbf795d4ba35c516176fd70dda51954c2"]
  - id: r-diferencial
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo salta un interruptor diferencial?
    options:
      - |
        Cuando la corriente total supera los $10$ A
      - |
        Cuando la tensión baja de $200$ V
      - |
        Cuando parte de la corriente se fuga a tierra (no vuelve por el neutro)
      - |
        Cuando un aparato se calienta
    answers: ["sha256:18da9dc2632d235f5102308d20fdcce450caae2ce541886f2b7e1508b3cf020c"]
---

# Electricidad básica: corriente, tensión, Ohm y circuitos sencillos

La electricidad mueve el mundo moderno: ilumina, calienta, comunica y computa. Entenderla bien, con las magnitudes, las leyes de Ohm y de Kirchhoff y
las reglas de seguridad, es imprescindible para quien quiera diseñar electrónica, programar microcontroladores ([[rob-microcontroladores]]), trabajar con hardware o simplemente
no electrocutarse en casa. Este nodo es la **entrada**; el análisis formal de circuitos está en [[ing-circuitos]].

## Objetivos

Al terminar sabrás:

1. Definir carga, corriente, tensión, resistencia y potencia, con sus unidades.
2. Aplicar la **ley de Ohm** y la fórmula de la potencia, y calcular energía y coste.
3. Reducir circuitos con resistencias en **serie** y en **paralelo**; usar divisores de tensión y de corriente.
4. Aplicar las leyes de **Kirchhoff** y medir con un polímetro sin dañarlo.
5. Entender corriente alterna, valor eficaz, condensadores y la carga RC.
6. Dimensionar la resistencia de un LED y conocer las bases de la seguridad eléctrica.

> [!question] Test de entrada
> 1. ¿Cuál es la potencia de una bombilla de $230$ V por la que pasa $0{,}1$ A? 2. Si tienes $12$ V y $4\ \Omega$, ¿qué corriente circula (ley de Ohm)?
> 3. ¿Qué pasa con la corriente en una cadena de bombillas en serie si una se funde?
>
> Respuestas: $23$ W; $3$ A; **se interrumpe en todas** (circuito abierto).

## 1. Para qué sirve

- **Casa y trabajo**: calcular qué cable y qué fusible necesita un aparato, cuánto cuesta usarlo, por qué salta el diferencial.
- **Electrónica y datos**: todo dato en un ordenador es tensión; los sensores dan tensiones; los robots mueven motores con corriente.
- **Energía**: baterías, cargadores, paneles solares y vehículos eléctricos se dimensionan con estas mismas fórmulas.
- **Seguridad**: saber qué es peligroso y qué no.

## 2. Carga, corriente, tensión

> [!practico]
> Imagina el circuito como un circuito de agua cerrado: la pila es una bomba que da **presión** (la **tensión**, en voltios),
> el agua que circula es la **corriente** (en amperios: cuánta carga pasa por segundo) y los estrechamientos de la tubería son
> las **resistencias**. Lo que circula son partículas con **carga eléctrica** (electrones, en un cable de metal). Sin un camino
> cerrado de vuelta, no hay corriente: por eso un interruptor abierto apaga la luz.


La materia tiene **carga eléctrica**, positiva o negativa; las cargas del mismo signo se repelen y las de signo contrario se atraen. La unidad es el **culombio**
(C). La carga elemental, la del electrón con signo negativo, vale **exactamente** $e = 1{,}602\,176\,634\cdot 10^{-19}$ C desde 2019.

**Corriente eléctrica** $I$: cantidad de carga que atraviesa una sección del conductor por unidad de tiempo, $I = \dfrac{Q}{t}$. Su unidad es el **amperio** ($1\ \text{A} = 1\ \text{C/s}$,
unos $6{,}24\cdot 10^{18}$ electrones por segundo). Por convenio histórico, el **sentido convencional** es el de las cargas **positivas**: del positivo al negativo de la fuente
(los electrones reales van al revés; para el cálculo da igual si se es coherente).

**Tensión** (o diferencia de potencial) $V$ entre dos puntos: la energía que gana o pierde cada culombio al pasar de uno a otro, $V = \dfrac{W}{Q}$. Su unidad es el **voltio**
($1\ \text{V} = 1\ \text{J/C}$). La tensión es la «presión eléctrica» que empuja la corriente; **se mide siempre entre dos puntos**, no «en» un punto.

*Analogía hidráulica (útil, con límites):* tensión $\leftrightarrow$ presión del agua, corriente $\leftrightarrow$ caudal, resistencia $\leftrightarrow$ estrechamiento de una tubería.

**Fuentes.** Una **pila o batería** mantiene una tensión (1,5 V una pila AA; 3,7 V una celda de ion-litio; 12 V una batería de coche). La **red doméstica** es corriente alterna a 230 V en Europa
(120 V en América).

## 3. Resistencia y ley de Ohm

> [!practico]
> Con la misma pila, una resistencia el doble de grande deja pasar la mitad de corriente; con el doble de tensión pasa el
> doble. Eso es la ley de Ohm. Y toda la energía que «se pierde» en una resistencia se convierte en calor: así funcionan una
> estufa, un tostador o un fusible (que se funde si pasa demasiada corriente).


La **resistencia** $R$ mide cuánto se opone un elemento al paso de la corriente. Se mide en **ohmios** ($\Omega$). La **ley de Ohm** relaciona los tres:

$$
V = I\,R \quad\Longleftrightarrow\quad I = \frac{V}{R} \quad\Longleftrightarrow\quad R = \frac{V}{I} .
$$

No es una ley universal, sino una propiedad de los materiales **óhmicos** (casi todos los metales a temperatura constante): una bombilla de filamento o un diodo **no** la cumplen
(su resistencia cambia con la temperatura o con la tensión).

**Resistencia de un conductor.** $R = \rho\,\dfrac{L}{A}$, con $\rho$ la **resistividad** del material, $L$ la longitud y $A$ la sección. El cobre tiene $\rho \approx 1{,}68\cdot 10^{-8}\ \Omega\cdot\text{m}$.
**Ejemplo resuelto (caída de tensión en un cable):** un cable de cobre de $2{,}5$ mm$^2$ y $30$ m: $R = \frac{1{,}68\cdot 10^{-8}\cdot 30}{2{,}5\cdot 10^{-6}} = 0{,}20\ \Omega$. Como la corriente
va y vuelve (ida y vuelta, $60$ m), $R_{\text{total}} = 0{,}40\ \Omega$ y con $10$ A la caída es $4$ V ($1{,}7\,\%$ de $230$ V): aceptable. A mayor longitud o menor sección, la
caída y el **calentamiento** crecen; por eso se dimensiona la sección según la corriente.

### Potencia y energía

La **potencia** eléctrica es la energía por segundo, $P = V\,I$ (vatios). Con la ley de Ohm: $P = I^2 R = \dfrac{V^2}{R}$. En una resistencia, **toda** la potencia se convierte en **calor** (efecto Joule).

**Ejemplo resuelto:** un hervidor de $2$ kW a $230$ V: $I = \frac{2000}{230} \approx 8{,}7$ A y $R = \frac{230^2}{2000} \approx 26{,}5\ \Omega$. Por eso un enchufe de $10$ A está al límite con él.

La **energía** consumida es $E = P\,t$. La factura usa el **kilovatio-hora**: $1\ \text{kWh} = 3{,}6\cdot 10^6$ J. Un hervidor de $2$ kW durante $3$ minutos ($0{,}05$ h) consume
$0{,}1$ kWh; con la luz a $0{,}20$ €/kWh, cuesta $0{,}02$ €.

**Baterías:** su capacidad se da en **mAh** o **Ah** (carga) y la energía es $E = V\cdot Q$ en **Wh**. Una batería de $10\,000$ mAh a $3{,}7$ V almacena $37$ Wh. Un móvil de $5000$ mAh a $3{,}87$ V
almacena $19{,}35$ Wh; cargarlo con un $80\,\%$ de rendimiento a $25$ W lleva, como mínimo, unos $58$ min.

## 4. Circuitos en serie y en paralelo

> [!practico]
> **En serie** los elementos van uno detrás de otro, como vagones de un tren: la misma corriente pasa por todos, y si uno se
> rompe, todo se para. **En paralelo** van uno al lado del otro, como los carriles de una autopista: cada uno recibe la misma
> tensión, y abrir más carriles deja pasar más tráfico (la resistencia total **baja**). Los enchufes de tu casa están en
> paralelo.


**Serie** (un solo camino): **la misma corriente** por todos; **las tensiones se suman**. Por tanto, las resistencias se **suman**:

$$
R_{\text{eq}} = R_1 + R_2 + \cdots + R_n .
$$

**Paralelo** (varios caminos entre los mismos dos puntos): **la misma tensión** en todos; **las corrientes se suman**. Entonces las **conductancias** $G = 1/R$ se suman:

$$
\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots, \qquad\text{para dos: } R_{\text{eq}} = \frac{R_1 R_2}{R_1 + R_2} .
$$

> [!formal] Con rigor: demostración
> *Demostración (paralelo).* Con tensión $V$ común, cada rama lleva $I_k = V/R_k$ y la total es $I = V\sum 1/R_k$; como $I = V/R_{\text{eq}}$, se obtiene el resultado. $\blacksquare$

La resistencia en paralelo es **siempre menor** que la menor de las ramas (añadir caminos facilita el paso). **Las bombillas de una casa están en paralelo** (cada una a $230$ V y
una fundida no apaga las demás); las antiguas luces de árbol de Navidad, en serie.

**Ejemplo resuelto:** $R_1 = 10\ \Omega$ en serie con ($20\ \Omega \parallel 30\ \Omega$), a $24$ V. El paralelo vale $\frac{20\cdot 30}{50} = 12\ \Omega$; total $22\ \Omega$; $I = \frac{24}{22} \approx 1{,}09$ A.
Tensión en el paralelo: $1{,}09\cdot 12 \approx 13{,}1$ V. **Comprobación:** $24 - 1{,}09\cdot 10 = 13{,}1$ V. $\checkmark$

### Divisor de tensión y de corriente

Dos resistencias en serie reparten la tensión **en proporción a su valor**:

$$
V_2 = V\,\frac{R_2}{R_1 + R_2} .
$$

Es la base de los potenciómetros y de muchos sensores: con $5$ V sobre $R_1 = 10\ \text{k}\Omega$ y $R_2 = 5\ \text{k}\Omega$, $V_2 = 5\cdot\frac{5}{15} = 1{,}67$ V. En paralelo, la corriente se reparte
**inversamente** a la resistencia: la rama de menor resistencia lleva más.

**Aviso:** el divisor solo es exacto **sin carga**. Si conectas algo con resistencia comparable a $R_2$, cambia el resultado (**efecto de carga**).

### Las leyes de Kirchhoff

- **Ley de nodos (KCL):** la suma de las corrientes que entran a un nodo es igual a la suma de las que salen (la carga no se acumula).
- **Ley de mallas (KVL):** la suma de las tensiones a lo largo de un lazo cerrado es **cero** (la energía se conserva).

Con ellas se resuelve **cualquier** circuito de resistencias y fuentes; su aplicación sistemática (análisis nodal) está en [[ing-circuitos]].

**Puente de Wheatstone.** Cuatro resistencias en forma de rombo con una diferencia de tensión entre sus puntos medios: el puente está **equilibrado** (tensión cero) si
$\frac{R_1}{R_2} = \frac{R_3}{R_4}$; sirve para medir una resistencia desconocida con mucha precisión.

## 5. Medir con un polímetro

- **Voltímetro**: se conecta **en paralelo** con el elemento; tiene una resistencia interna **muy alta** para no alterar el circuito.
- **Amperímetro**: se conecta **en serie** (hay que abrir el circuito); tiene una resistencia **muy baja**.
- **Ohmímetro**: se usa con el elemento **sin alimentar** y desconectado del resto.

**Error grave y frecuente:** poner un amperímetro **en paralelo** (como si fuese un voltímetro) hace un **cortocircuito** y puede dañar el aparato, quemar el fusible o provocar un accidente.

**Código de colores de resistencias:** bandas de color que dan dos o tres cifras, un multiplicador y una tolerancia. Los valores comerciales siguen **series** (E12: $10, 12, 15, 18, 22, 27, 33,
39, 47, 56, 68, 82$ y sus múltiplos de $10$, para $\pm 10\,\%$; la E24 es la de $\pm 5\,\%$ y la E96 la de $\pm 1\,\%$, según IEC 60063): el valor calculado se redondea al más próximo.

## 6. Corriente alterna

> [!practico]
> La corriente del enchufe no va siempre en el mismo sentido: cambia de sentido $100$ veces por segundo (es una onda de $50$
> hercios). Los «$230$ V» son un valor equivalente: los que daría una pila para calentar igual una estufa. En los picos de la
> onda, la tensión llega a unos $325$ V.


En **corriente continua** (CC) la tensión es constante; en **alterna** (CA) varía senoidalmente, $v(t) = V_p\sin(2\pi f t)$, con $f = 50$ Hz en Europa.

> [!formal] Con rigor: de dónde sale el $\sqrt 2$
> Para comparar su efecto calorífico con el de la CC se define el **valor eficaz**: el de una CC que disiparía la misma potencia en una resistencia. Como el valor medio de $\sin^2$ es $\tfrac12$,
>
> $$
> V_{\text{ef}} = \frac{V_p}{\sqrt{2}} .
> $$

Los $230$ V de la red son **eficaces**: el pico es $230\sqrt2 \approx 325$ V. Los transformadores permiten elevar o reducir una tensión alterna con pocas pérdidas, y por eso la red
transporta a alta tensión (menos corriente, menos pérdidas $I^2R$) y se reduce cerca del consumidor.

## 7. Condensadores y carga RC

> [!practico]
> Un **condensador** es un pequeño depósito de carga, como un cubo que se llena de agua a través de un grifo (la resistencia):
> al principio se llena deprisa y cada vez más despacio. Con un grifo más cerrado (más resistencia) o un cubo más grande
> (más capacidad), tarda más. Por eso sirve para hacer temporizadores, como el que apaga la luz del rellano al cabo de un rato.


Un **condensador** almacena carga: $Q = C\,V$ (la capacidad $C$ se mide en **faradios**, F; lo habitual son $\mu$F, nF y pF). Almacena energía $E = \tfrac12 C V^2$. Cargado a través de
una resistencia $R$ desde una fuente $V$, su tensión crece según

$$
v_C(t) = V\,\bigl(1 - e^{-t/RC}\bigr),
$$

con **constante de tiempo** $\tau = RC$: al cabo de $\tau$ alcanza el $63{,}2\,\%$ de $V$; tras $5\tau$, más del $99\,\%$. Con $R = 10\ \text{k}\Omega$ y $C = 100\ \mu\text{F}$,
$\tau = 1$ s. Se usan como temporizadores, filtros y para **desacoplar** la alimentación de circuitos digitales. Un condensador grande cargado puede dar una descarga peligrosa:
**descárgalo** antes de manipular una fuente.

## 8. Diodos, LED y la resistencia limitadora

> [!practico]
> Un LED se quema si le dejas pasar toda la corriente que quiera: es como un grifo sin tope. Una resistencia en serie hace de
> tope. Se calcula viendo cuántos voltios «sobran» (los de la pila menos los que gasta el LED) y repartiéndolos para que pase
> la corriente adecuada.


Un **diodo** deja pasar la corriente en un solo sentido. Un **LED** es un diodo que emite luz y exige **limitar la corriente** con una resistencia en serie (si no, se quema). Si la
fuente es $V_s$, el LED cae $V_f$ (de $\approx 1{,}8$ V para un LED rojo a $\approx 3{,}2$ V para uno azul o blanco) y se desea una corriente $I$ (típicamente $5$–$20$ mA):

$$
R = \frac{V_s - V_f}{I} .
$$

**Ejemplo resuelto:** LED rojo ($V_f = 1{,}8$ V) a $10$ mA con $5$ V: $R = \frac{3{,}2}{0{,}01} = 320\ \Omega$; se usa el valor E12 más próximo por **encima**, $330\ \Omega$ (corriente $\approx 9{,}7$ mA).
Potencia disipada en la resistencia: $0{,}0097^2\cdot 330 \approx 31$ mW, muy por debajo de un cuarto de vatio.

## 9. Seguridad eléctrica

> [!warning] La corriente puede matar
> Los efectos dependen de la corriente que atraviesa el cuerpo y del camino que sigue. Del orden de **1 mA** ya se percibe; de **decenas de mA** puede provocar contracción muscular
> sin poder soltar y fibrilación cardiaca. Una instalación doméstica da **mucha más** corriente de la necesaria para causar daño.

Normas básicas:

- **No manipules la instalación de red ni aparatos conectados** sin formación; desconecta y comprueba la **ausencia de tensión**.
- Los **fusibles** y los **interruptores magnetotérmicos** protegen contra sobrecorriente (cables que se calientan); los **diferenciales** ($30$ mA en protección de personas) cortan si detectan una fuga
  a tierra, es decir, una corriente que no vuelve por el conductor neutro.
- **Nunca** puentees un fusible ni uses uno de mayor calibre del indicado.
- Humedad y piel mojada **reducen** la resistencia del cuerpo y aumentan el peligro.
- En electrónica de bajo voltaje (pilas, USB, $\le 12$ V) el riesgo directo es bajo, pero las baterías de litio pueden **incendiarse** si se cortocircuitan o se cargan mal.
- Para trabajar con **más de $50$ V** de alterna o $120$ V de continua (tensiones de seguridad habituales), se necesita **formación y normativa específica**.

## 10. Errores típicos

- Medir corriente con el polímetro en paralelo.
- Sumar resistencias en paralelo como si estuvieran en serie.
- Olvidar la **resistencia interna** de las baterías y de las fuentes cuando la corriente es grande.
- Usar un LED **sin** resistencia limitadora.
- Confundir potencia ($\text{W}$) con energía ($\text{Wh}$).
- Mezclar valores de pico y eficaces en alterna.
- Suponer que la ley de Ohm vale para cualquier elemento.

## Repaso: lo que debe quedarte dentro de un mes

1. $V = IR$; $P = VI = I^2R = V^2/R$; energía $= Pt$ (kWh).
2. Serie: misma corriente, $R$ se suman. Paralelo: misma tensión, conductancias se suman.
3. Divisor de tensión: $V_2 = V\frac{R_2}{R_1+R_2}$.
4. Kirchhoff: corrientes en un nodo suman cero; tensiones en un lazo suman cero.
5. $V_{\text{ef}} = V_p/\sqrt2$; RC: $\tau = RC$, $63\,\%$ en un $\tau$; LED: $R = (V_s - V_f)/I$.

## Siguiente

[[fis-electricidad-magnetismo-1]] explica de dónde salen la tensión y la corriente (campos eléctricos y magnéticos), y
[[ing-circuitos-dc-ac]] formaliza el análisis de circuitos (nodos, mallas, Thévenin y régimen transitorio).
