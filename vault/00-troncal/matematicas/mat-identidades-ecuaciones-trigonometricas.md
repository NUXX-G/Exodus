---
id: mat-identidades-ecuaciones-trigonometricas
title: "Fórmulas trigonométricas, identidades y ecuaciones: suma y diferencia, ángulo doble y mitad, sumas en productos, ecuaciones y su solución general"
area: matematicas
trunk_level: 4
prerequisites: [mat-resolucion-triangulos, mat-polinomios-factorizacion, mat-ecuaciones-segundo-grado]
academic_sources:
  - "Matemáticas I (Bachillerato, LOMLOE), capítulo 4: «Trigonometría», secciones 2.1-2.5 (razones de la suma y de la resta, del ángulo doble y del ángulo mitad, transformaciones de sumas en productos) y 3.1-3.2 (identidades, ecuaciones y sistemas trigonométricos). Apuntes Marea Verde, autores José Luis Lorente Aragón y Andrés García Mirantes. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_04_Trigonometria.pdf"
  - "I. M. Gelfand y M. Saul, «Trigonometry», Birkhäuser (2001): fórmulas de adición y sus consecuencias."
hints:
  - "Concepto: todas las fórmulas salen de una sola, cos(α − β) = cos α cos β + sen α sen β, y de sen² + cos² = 1. Una ecuación trigonométrica tiene, en cada vuelta, normalmente dos soluciones, y se repiten cada 360° (cada 180° para la tangente)."
  - "Herramienta: para una ecuación, deja una sola razón de un solo ángulo (con el ángulo doble o la relación fundamental), resuelve como una ecuación algebraica (cambio de variable) y busca todos los ángulos en [0°, 360°) con la circunferencia goniométrica. Nunca dividas entre una razón que puede valer 0: saca factor común."
  - "Documentación: Marea Verde Matemáticas I cap. 4 (secciones 2 y 3)."
exercises:
  - id: seno-y-coseno-de-la-suma
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Los ángulos $\alpha$ y $\beta$ son agudos, con $\operatorname{sen}\alpha = {{sa}}$ y $\cos\beta = {{cb}}$. Calcula ${{q}}(\alpha {{op}} \beta)$ (al menos cuatro cifras significativas).
    variants:
      - values: {"sa":"0{,}6","cb":"\\frac{5}{13}","q":"\\operatorname{sen}","op":"+"}
        answers: ["sha256:e70e36c3c48d7fdec420962a29dd04c62e221d11737525a76f345565905537b8","sha256:eb56f0170047d338d13ba8baa467f719c4d89284e9f42356adbb78cc749a8ec5","sha256:743a297584e699d2c5ac3b89c32ccdf87c943ebd85ea6f77d22cb428137f60f8"]
      - values: {"sa":"0{,}8","cb":"0{,}28","q":"\\cos","op":"-"}
        answers: ["sha256:f7c45a275bd6d4d5e8e2e7617d4fea67d053e84e2a65aa2515192b433375ba0c","sha256:f037af2d06c5ccd756c219ad3b14f7d6ef95001769ce3b9f3c5f377e97ced9e4","sha256:c8db2286039af1f41c0144d1433e93009f113807beba420dd1637345debe71a2"]
      - values: {"sa":"\\frac{12}{13}","cb":"0{,}6","q":"\\operatorname{sen}","op":"-"}
        answers: ["sha256:dbffaeac1797ad3b0c53f0bde8db8f66ff7ca57d4677bfc300226e794a83c987","sha256:d1fc45fe1fb41aaf87ccb8e72fcc91e90c4f7cd3d0da85addc1213ee35c6133a","sha256:436880e245d0abca3ba8995bd75cb5dfd318292854092282a38c22d23843b1e2"]
      - values: {"sa":"0{,}28","cb":"0{,}8","q":"\\cos","op":"+"}
        answers: ["sha256:5736b58d1ba9f7cabc6449cb03c1d2d6b57d304d387dd9601a6b3497c57440c6","sha256:8e829e0364439b3da83dc710d2e8cd6aaad5de8ec5d2fd503778375350e0db62","sha256:f980be0fcb9b7d4e0a4cbd0d80761ba706828f0f4b680a394df2e2401b64afc6"]
      - values: {"sa":"0{,}5","cb":"0{,}6","q":"\\operatorname{sen}","op":"+"}
        answers: ["sha256:5c8c00133c39271ecc9c6bb1dacc48c32f05a585acca42ae1df46d40b814808c","sha256:b8b72689d13bf9f2f7b39d18116f395cabfcafaa8cf75f4e048ebdcfd0a33a7b","sha256:fbda13f1efc74025675a02f13cbb0f32e4bca7f81d6277ee6af4c3d075fb119d"]
      - values: {"sa":"\\frac{5}{13}","cb":"0{,}6","q":"\\cos","op":"-"}
        answers: ["sha256:32d5970cb25d56e614563308397891ec003d2899c0bf885a0f808d03a21fa5b9","sha256:dcc9925d6614fb104fa0adb9659e76340d1429cc340f559ffcf2a3c2eaf2112a","sha256:d6c75a3be38a27f13d653e44d3306b6f83c7ced24aa313b6d44c6dfad8895c1a"]
  - id: angulos-no-notables
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula ${{e}}$ escribiendo el ángulo como suma o diferencia de ángulos notables (comprueba con la calculadora; al menos cuatro cifras significativas).
    variants:
      - values: {"e":"\\operatorname{sen} 15^\\circ"}
        answers: ["sha256:3e8113076fd44bb7ac93d02655332a6e5a0b22809e98bdd9777f0a85810a0029","sha256:e78ade39a10e7ca98b1566c49bcd10868e4b7857ddcb01860fe0a39db1dd77fd","sha256:79dee94b00bb865005838ea71a0f606eedac1a783d8c1ea615a19163cf22d5af"]
      - values: {"e":"\\cos 105^\\circ"}
        answers: ["sha256:cd6727c62eb62f508c467083af40137d538d1417d03b5f31a16c2d496c2d7740","sha256:4d79dceb9bf77e48594a4eff61d87ec4c7d91a8d78bdff863b91f9c240a0de45","sha256:3b024fb384cc60d1e0943cde492f086f5df463a1cd96095d451d91441ab47cdc"]
      - values: {"e":"\\operatorname{sen} 105^\\circ"}
        answers: ["sha256:5a39be8b3440104da5cd2f0ecc24477599173579ba89c90643f647656d5ae3a7","sha256:8cbf0bf144ea38e1006912fad7fd921862b2d718447c4c7f2a62cc5047da04aa","sha256:4453b97766d50111cd5294f09371ae63f1893c7e93ab9cd90ae0c898a0b9c543"]
      - values: {"e":"\\cos 165^\\circ"}
        answers: ["sha256:4c148d6b7855d2903050694abeeb081a3e433fec7a3394910eb2949d1af1283b","sha256:4e97820426fe8f5e1a89a8a104094c4edc9fecb5ed3f970e7eccbe31a37673a0","sha256:4e2426c62f67ba0531020aa7bdaafe7dc0b4f6b7506590669a82e76ebb587788"]
      - values: {"e":"\\operatorname{tg} 15^\\circ"}
        answers: ["sha256:aeffb94ad8fbe48d56e6a8d7eaeabb20de4d2aace09981a913a5f27459565f48","sha256:c20f4ae1839ccb78ef807a5d7b7295a9790931aba59259806d0a2e65e5d42f75","sha256:e76448de4bc85f45cd46335642dc1a62251e0ac758b9a6e1fc5b2eb3927789a3"]
      - values: {"e":"\\operatorname{tg} 75^\\circ"}
        answers: ["sha256:83a07afc57fdf70237ad2cd494f2ba402474e7ec48864fccd5669b8b6f0d22c6","sha256:3a3ecb881474c5e76bbc34e034c5ef39e71c948fd16e8cb395f0edebc954a3a6","sha256:2ed2a0f86328e7e4759f510655062e96a8e380ed036ae17c607796118e0caefc"]
  - id: angulo-doble
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $\alpha$ es agudo y ${{dada}}\,\alpha = {{v}}$, calcula ${{q}}\,2\alpha$ con las fórmulas del ángulo doble (al menos cuatro cifras significativas).
    variants:
      - values: {"dada":"\\operatorname{sen}","v":"0{,}8","q":"\\operatorname{sen}"}
        answers: ["sha256:23a17492858234705fe3fdbef7892593540dc35c5569f980e8fdf80970f65ced","sha256:a7513011b2f389c7a7fe34eedf2c6cc325cc48c8deabce7989a6b35cf2ba9e9a","sha256:a0e092136bd73416392f2d0a8c9943e6b8e3c89cd813fc8c4944af8b5ada51e3"]
      - values: {"dada":"\\operatorname{sen}","v":"0{,}28","q":"\\cos"}
        answers: ["sha256:fcf727cea5a34ee71cec33ec379fc2d9712d9f689cde0d1ba9f1faf2ac5c04d7","sha256:218d8a607714d3ad8278a8ab52d16d044f6cab9c2f2614fd9e6e04cb05beea50","sha256:ff291cdc5fe9f59c4c422bab039121d578574df491bf4dd146d5a267b6788781"]
      - values: {"dada":"\\cos","v":"\\frac{12}{13}","q":"\\operatorname{sen}"}
        answers: ["sha256:82d7fae1b1230a7aac211d7891ebfbc429da8e32ab70dd42b0629fe10710d2a7","sha256:056f3ae927b1603f79ae8bad73e08bfa4c550c6173b885c828f5d0788668776f","sha256:a054b88a479697d62b6d6df0597ee86d7fb313eb61f5b36dce533a5f148d3cc3"]
      - values: {"dada":"\\cos","v":"0{,}6","q":"\\cos"}
        answers: ["sha256:4a7ba211a3926bf6e6b2b0cd986ed93d473c3adb950faa61de025179a51f6910","sha256:7b284471dccb66a0ea18e41a9632bcb3a4f9be28cf35c3efef94a70135e2c173","sha256:03326c9a4a22a1bb990b440db65459f18ff2763035d59e116624ec3bb71d260c"]
      - values: {"dada":"\\operatorname{tg}","v":"0{,}5","q":"\\operatorname{tg}"}
        answers: ["sha256:2cac3e6b64dd05662333d6edf802e9658823503b05dbfa058b26881eee25d8b4","sha256:8955a65c52c2ec5dc7105a988970c9df4bda10aebc827c61bfedaf92a9f45891","sha256:ae1c1544fbc9ab26ad8fa930bf98b7a60d97d8ebf2247fc22e87385a8b92f5dd"]
      - values: {"dada":"\\operatorname{tg}","v":"2","q":"\\operatorname{sen}"}
        answers: ["sha256:c58b5f15eeb55e1320cdbf0b6ef123d6c6c207fa8710b4df630a600901eff235","sha256:d566b5b98907109aa0e78a19effe3516a928b0a60f5087cea840eddec231b08a","sha256:890bdd74f38d0fb1818568d171b3242f9fd5b645ba429bdbf7a84cb6665784b7"]
  - id: angulo-mitad
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $\alpha$ es agudo y $\cos\alpha = {{c}}$, calcula ${{q}}\,\frac{\alpha}{2}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"c":"0{,}8","q":"\\cos"}
        answers: ["sha256:60af8d51fd637f733de1ddb665917a6006e8b2f3674c91b027fa8ac0f1e444fa","sha256:630a82a350c6db41e4bc023be4d2e374a14f3eb5847436ef76d82b70036a79e7","sha256:8391d9e10bad77c6d72d2684685a40a526b8a618697558259058871c665d7089"]
      - values: {"c":"0{,}28","q":"\\operatorname{sen}"}
        answers: ["sha256:94cddbab924d300c996ac7decdfe9e1474a94bfa1ea80f2259fa08519a368680","sha256:25ee571129b91240ee3fc51c3cf31c502d73a9448213c03a7b7ae0c5f9d80732","sha256:3b2dbd8fdbf6f924bf34801ada6c4562d727aa0a6485659276b941ed2ab290cd"]
      - values: {"c":"0{,}5","q":"\\cos"}
        answers: ["sha256:647f9f874e9b40c24c392d7d03ea03492b0a42342dfe97b0826f2930d143c261","sha256:66b864bd74e81fede296ec848b9dde5ddf3100e97f04286aaacfd4cd33fcfb22","sha256:c8119396d848bfb2cd84d1107035d5b3f9c495e6131c75ce30fb38930536f411"]
      - values: {"c":"0{,}96","q":"\\operatorname{sen}"}
        answers: ["sha256:aeacbbc9e759c506a0ab1fba60e8575b0acfe419e68dd92b3784ee33bfcaf59d","sha256:5deada08cdbe9762e2cfdd20a0b32619cd645b03cbaaf3ec9a196a6ac3350477","sha256:42e353e651fd969b3107dad129fc439e4ea96ee6003f72ee234e9ab056f11d8b"]
      - values: {"c":"0{,}1","q":"\\cos"}
        answers: ["sha256:e3e9791d6543747ef9b66b0920b42c4b0c32d4bcfbf04fdc8dcb4151770bd7b1","sha256:65cb7072423dce105b238708de2ac44997a79a3a07c7e397b801e75d8671c4fb","sha256:b00ecddf4d5952b6ad81281c318617a317a6fa8945f391386c9d614239b513c4"]
      - values: {"c":"0{,}6","q":"\\operatorname{sen}"}
        answers: ["sha256:a3097c0c671d8d47473a7b58c70ff8505b8e3fe439cdca38e523ac1a0057c6b7","sha256:2bb84389a594617b2cd10189eb6d4023e519d2ac4f871d61bfd42e92ea38affd","sha256:f856074af5c3eb3dac641cd232cc6ec7f3707434c2dd0bbdb8517070601986aa"]
  - id: ecuacion-elemental
    tier: 1
    prompt: |
      Resuelve ${{e}}$ en $[0^\circ, 360^\circ)$. Escribe las soluciones en grados, de menor a mayor, separadas por `;`.
    variants:
      - values: {"e":"\\operatorname{sen} x = \\frac{\\sqrt3}{2}"}
        answers: ["sha256:05bb50ad801b6da91000cee04a6630257c2112520f1fa3d4c8e69c2306eba0e0"]
      - values: {"e":"\\cos x = -\\frac12"}
        answers: ["sha256:fe0aaa7b8001c34a94969caacdc727ab45862259d94991dd03bca36426b81fce"]
      - values: {"e":"\\operatorname{tg} x = 1"}
        answers: ["sha256:1ae2e6e9f53453868017ddd3cb7bb4ee4cf0f6a1f57b18ef8d953ec1af54c810"]
      - values: {"e":"\\operatorname{sen} x = -\\frac{\\sqrt2}{2}"}
        answers: ["sha256:032c286cd6409c2a9b998e4a9079519e6e72284ae9c678e3402a513cf460be90"]
      - values: {"e":"\\cos x = \\frac{\\sqrt3}{2}"}
        answers: ["sha256:a2f1f9541ee0ccc20b8fef1b6af7cf029f3499a664b2818104357e6e9e066ff0"]
      - values: {"e":"\\operatorname{tg} x = -\\sqrt3"}
        answers: ["sha256:cb2a8a4fce708b994f90e216d28e92fa9361ca1ad58e33a636fb998c5c12fd83"]
  - id: ecuacion-de-segundo-grado-trigonometrica
    tier: 2
    prompt: |
      Resuelve ${{e}}$ en $[0^\circ, 360^\circ)$ (cambio de variable). Soluciones en grados, de menor a mayor, separadas por `;`.
    variants:
      - values: {"e":"2\\operatorname{sen}^2 x - \\operatorname{sen} x - 1 = 0"}
        answers: ["sha256:578d661749063fe8bb80197a1c04b9452e554c84cbba7861d491be7c94a4ec5b"]
      - values: {"e":"2\\cos^2 x + \\cos x - 1 = 0"}
        answers: ["sha256:8eee3627d2c6489bbb32aed8bca748199090bcbc255524669aaf2a181babcc82"]
      - values: {"e":"4\\operatorname{sen}^2 x - 3 = 0"}
        answers: ["sha256:bbda0acec60578d6c71e6bfccbf88454c04384b7cab905e6077793ec6296e6ca"]
      - values: {"e":"\\operatorname{tg}^2 x - 3 = 0"}
        answers: ["sha256:bbda0acec60578d6c71e6bfccbf88454c04384b7cab905e6077793ec6296e6ca"]
      - values: {"e":"2\\cos^2 x - 3\\cos x + 1 = 0"}
        answers: ["sha256:ee71d3388cfd1629cfa1c309bb42ba4531c7cb4192e87c52e9dbafde771af446"]
      - values: {"e":"\\operatorname{sen}^2 x - \\operatorname{sen} x = 0"}
        answers: ["sha256:6d20007077c78eed1d9f50e393c2e97532d997e90c92e01938b37f304ebe0f23"]
  - id: ecuacion-con-identidades
    tier: 3
    prompt: |
      Resuelve ${{e}}$ en $[0^\circ, 360^\circ)$ usando una identidad para dejar una sola razón (o sacar factor común). Soluciones en grados, de menor
      a mayor, separadas por `;`.
    variants:
      - values: {"e":"\\operatorname{sen} 2x = \\operatorname{sen} x"}
        answers: ["sha256:81fbebe9897fd784b6d82e4fafd3c891270f0cc9f876566e6c3ab4ee8a6fe696"]
      - values: {"e":"\\cos 2x = \\operatorname{sen} x"}
        answers: ["sha256:832e3772e03208b54ccde240900263e4da0a075efa2205b6a97b1d34154cc22e"]
      - values: {"e":"\\cos 2x + \\cos x = 0"}
        answers: ["sha256:8eee3627d2c6489bbb32aed8bca748199090bcbc255524669aaf2a181babcc82"]
      - values: {"e":"2\\cos^2 x = 3\\operatorname{sen} x"}
        answers: ["sha256:031cab1c3002a3042e5d896cf90edd90b9e67ab97ca25df6fa55b852ebff8895"]
      - values: {"e":"\\operatorname{sen} 2x = \\operatorname{sen} x \\cdot \\sqrt{3}"}
        answers: ["sha256:92c3d9caaa0df1e530403ab7802ae3996aa5fa5e525798890e5b3a80b0ea8406"]
      - values: {"e":"\\cos 2x = 1 - \\operatorname{sen} x"}
        answers: ["sha256:638021dd610adc6e4d606a36065cb0832a7e1e599983e5d3ea8ca3ec7287edc8"]
  - id: ecuacion-no-notable
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la menor solución positiva, en grados, de ${{e}}$? (Al menos cuatro cifras significativas; piensa en qué cuadrante está.)
    variants:
      - values: {"e":"\\operatorname{sen} x = 0{,}3"}
        answers: ["sha256:132eb60928b1a2a11c39cd4fa74848da6aa9de2ae26a109c4028044b94135ee6","sha256:928141cfcbed8cc94b888751e52a5eb42ea6faba4fdb150ea69ddf3aeef4af67","sha256:63b3145258a0865e1cb28bad1baf9685f15fb7f17ec495a8cc78b42e5b99a39a"]
      - values: {"e":"\\cos x = -0{,}4"}
        answers: ["sha256:a279a3322cd304f7c4614d14f7cb714b3199da7d483c995ff54e313c29870131","sha256:9a870d5130730ac2d95a2d9b9fb06f8686c9dcdfd8cdbbc617a4a9f3d394e23e","sha256:7920e01a310d8f74b3730ecbe1b79bf5cc5168143893918efccf1f7a0d821e84"]
      - values: {"e":"\\operatorname{tg} x = 2{,}5"}
        answers: ["sha256:7e4c786a29e3a43f40e514922d1b473b2c41c2751222d2d9ba2775984db52d54","sha256:a21a957bce434a87318ba333ecfa06be139d44c7316729f68bf17904bbbbabde","sha256:f03a9067aa475a944a4bc814559167b7e246515a00f14de0ebc0f1086318050d"]
      - values: {"e":"\\operatorname{sen} x = -0{,}7"}
        answers: ["sha256:b99b10efdc3a2c521a379fd9b549508cda670b3475d36fc673e3c2ecb1115537","sha256:e3ab9977963648d291dd8a4646848d72cfc1d3998c075e6819563c816f0401c9","sha256:c2ce179f5bdc53ce58e57684b03ba6d189ee7310c316e70118a26f09d1085a48"]
      - values: {"e":"3\\cos x = 2"}
        answers: ["sha256:d4fe386093ca8c9a80614bd903bfdc526b1812e71d833b7d80ac09ebfef2c968","sha256:6f2f72a00f08227d877229ff1222aabb14aebf4670cd7a14c1c57da44a4a3c45","sha256:c4dddfcba6d95aa07222ec3140b931f26e3dd68334666193491bee7e6f94504d"]
      - values: {"e":"\\operatorname{tg} x = -0{,}2"}
        answers: ["sha256:fe313c85cdc1c241c4c6e08b1756147f50123c132e21b4d0fe41f18881fdc8e5","sha256:536796b94eeee347d2d3c17e055a8ce4c2c335b37f119d2707fe04703fde0c03","sha256:9f0ba1b340dcd986995cb627a0d5d1132bb2bf864310f82a55abf3b757ed9056"]
  - id: suma-a-producto
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Calcula ${{e}}$ transformando la suma en producto (y comprueba con la calculadora; al menos cuatro cifras significativas).
    variants:
      - values: {"e":"\\operatorname{sen} 75^\\circ + \\operatorname{sen} 15^\\circ"}
        answers: ["sha256:d33d1d275c31e3dda880507b95d5e993b35f270424b0a76f2f44735198de2884","sha256:7a839476362340549080427be51dc97e63a4b3aa9240386da5864951d79c1bd4","sha256:cff3024cf79d09b8539fb6c35a883744e2902f98a89ca8fe0f0d2efd6b65107e"]
      - values: {"e":"\\cos 105^\\circ + \\cos 15^\\circ"}
        answers: ["sha256:1504c49779e0b220c361c4111386f4e19def731a9d573a324af78c66a51d27b7","sha256:13749a9cef5a7103c60d1e85c38c0cd20b45763fc489423b9587f2171d8a1ad0","sha256:1c38414b688c751ddfd3eb6093a1e53bc2d20f2e6563ca7a708885cd6fd5490d"]
      - values: {"e":"\\operatorname{sen} 75^\\circ - \\operatorname{sen} 15^\\circ"}
        answers: ["sha256:954803d904961bea210c5ca88c8dfb6830d6f83c430c2caf84bb394a015a6678","sha256:8541931fd36a5c4c25e9ad08e97ba6122fbdc68eea4430cf6bd882568585d31d","sha256:b78541c2c5c34f99e679cf892ef9b0546eee7f61743fe3a60bc2c7437ba0d6c9"]
      - values: {"e":"\\cos 15^\\circ - \\cos 75^\\circ"}
        answers: ["sha256:791a4dbe62f8d2e65c62da05e5b7354bddbaab512ba52dbfc16d0d20b99a7d37","sha256:781921d2d05c0dadc8c9d441bfa475a9c2227f5a4aff3d62a5b0ac0d7bba37a6","sha256:02a7b5770c3009300da39c861224da1fc41d4d4d4654dd4746de5372af862952"]
      - values: {"e":"\\operatorname{sen} 105^\\circ + \\operatorname{sen} 15^\\circ"}
        answers: ["sha256:e625c0ce030c5cf638ddb9adebebfb384149d3669332f2a68ce48656fd5ad3fe","sha256:7ae49b24fc1d114217cf19b2eb3e1ef1829dd925d5248d921451c4230e85eb6f","sha256:104e9ae3cdb4d280200e2e6a6ae0f3192871b7e1440c899140c8c048bf70336a"]
      - values: {"e":"\\cos 165^\\circ + \\cos 75^\\circ"}
        answers: ["sha256:4ecf79339afa5a18c6ce5c1618b654c14261d745d8adbaec41450d1aaaa68b7e","sha256:177cf987f27e5873f3a73880e28600aa4ffca54b6408585e8d692d4b8f72cd85","sha256:e356d3c6217701085ef608dc3f2a97276cbcfb30c23e64f5aeffcaca63add9f4"]
  - id: demostrar-la-suma
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Demuestra $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \operatorname{sen}\alpha\operatorname{sen}\beta$ calculando la distancia entre los puntos de la circunferencia unidad
      correspondientes a $\alpha$ y $\beta$ de dos maneras. (b) Deduce de ella $\operatorname{sen}(\alpha + \beta)$ y las fórmulas del ángulo doble. (c) Explica por qué una ecuación
      trigonométrica suele tener infinitas soluciones y cómo se escriben todas.
    sealed: "gz64:H4sIAAAAAAACCp1VwW7TQBD9lSdrD3bqRE0qEETqARUOSEi0EpwwQePdbbp0vWvt2iih6sdw5NxPyI+h3cSpE5IgcYlkz5v3Zp5nJg+Jt7ptlDXJNBkMUsoGA3ywHnVrGuvhrQG7xiXSouDWFwXp+o5yFIWtpaPGOkOVfPDSPG5iGcMS7KaXUsrmWEYIZWyEK2vArXVCGhLkc7Drm9lkXxZD9Ciz2QRnAXCskgg/JhrZJxhisiPR48fZiS5PdVOY0I7UaKR1siIIqcGtl8ZCrgNOrX6Zeast2MfrG4ZUk7AebMzy8IMltvF+M0GAZdOtO7H+WHK6Dwuuvp+3pMkIC09aQhNuV0+uajWNClOYwSAtw+e+oqpUEcY2EqitAxtunqbhfV/jrNPAJY6ZN/wf89gIn31XyQFMcxeoN6Lp6/NZUXDleBSLsYxNC3Mo93jt6R7PeoiffYy4453sjkvfi+M9hvHYWB3ZY8La5r+SJl3hl+FL/6OONRGW0QNufS85Ps8mJ1djG2bdfPB4DsjD0U9r5Poe1NKp1ZNQnPwUXoEtvp0zxKBuuVo9mRxNmKnVbxODOMPFy63J9wwpu2eQppHOZjmWqMlRGM+GzDy8Rkm+IbDxq17WCG+ErFa/fB62iJMg/Gilbgi+lVoW5o5K6RD2aLM8Hny9iJXylUVcwJQt4oHqUQ+xYBnsM3Czqx10uGDZCJ+sIA9NXZvRDiEPfrRFNPzWER9PWB63SX6XVa1tHhwsDAuIi20F+/4sEQHjF8cQoyRPXFs6xZPpl4eEO9VIp2wyTa5I81ZHN4XyDRmuKNwLFr3o3VgsO3cOnSmoeDuCzvqfIJlOHvMdpbdStHznqkSGmC/ie99WhGX0LES6kyZsqeUp5neLWiseewizZoXiSpDAEtJzp8o1eTdsmEsjHekg2prO6F3+r49/AO0BDrTpBgAA"
  - id: r-sen-suma
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿A qué es igual $\operatorname{sen}(\alpha + \beta)$?
    options:
      - |
        $\operatorname{sen}\alpha + \operatorname{sen}\beta$
      - |
        $\operatorname{sen}\alpha\operatorname{sen}\beta - \cos\alpha\cos\beta$
      - |
        $\operatorname{sen}\alpha\cos\beta + \cos\alpha\operatorname{sen}\beta$
      - |
        $2\operatorname{sen}\alpha\cos\beta$
    answers: ["sha256:2a84a8f25f30330013189ae0e0ff2820aacf4486576e2bb570ac7997c3a84622"]
  - id: r-cos-doble
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿A qué es igual $\cos 2\alpha$?
    options:
      - |
        $\cos^2\alpha - \operatorname{sen}^2\alpha$
      - |
        $2\cos\alpha$
      - |
        $\cos^2\alpha + \operatorname{sen}^2\alpha$
      - |
        $2\operatorname{sen}\alpha\cos\alpha$
    answers: ["sha256:7dd312813eebc1c363bb2de0fffb03d875b674f8ccd8f6f89df5721183305e1a"]
  - id: r-periodo-tangente
    tier: 2
    type: numero
    review: true
    sig: 4
    prompt: |
      ¿Cada cuántos radianes se repiten los valores de la tangente? (Da un valor decimal con al menos cuatro cifras significativas.)
    answers: ["sha256:62ebc073bce2fb2a32b862eae2b847ed025aa369adaf19760dc250fa39dc6252","sha256:8780b962163471e8becabf6f488a04e197ee42bf38a39dc46696e461e0b740aa","sha256:27c8dd4078d7dcf81788d88a83abb93f60e3ef33933e88ef8480db8ed7852c9e"]
  - id: r-no-dividir
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué no conviene resolver $\operatorname{sen} 2x = \operatorname{sen} x$ dividiendo entre $\operatorname{sen} x$?
    options:
      - |
        Porque $\operatorname{sen} x$ es siempre positivo
      - |
        Porque cambia el periodo
      - |
        No hay ningún problema
      - |
        Porque se pierden las soluciones con $\operatorname{sen} x = 0$
    answers: ["sha256:39418448d6b55ce165e97ac69c136be0e894de0f0386bd3ef2a672cac71c2d15"]
  - id: r-dos-soluciones-seno
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Una solución de $\operatorname{sen} x = \operatorname{sen} 40^\circ$ en $[0^\circ, 180^\circ)$ es $40^\circ$. ¿Cuál es la otra?
    answers: ["sha256:67ce0d2f0fa434bb740b4483c4076490f30ebfcb648e5fc695e12a36530c3dfb","sha256:c044d22be55c7ce2441783f995e68866f27d979f70fcd0e24212c8265abffa9c","sha256:3dd7e72c4bc2a9c7fcde12eae13078f188257249244c85908e6e38cdd7aeeeda"]
  - id: r-identidad
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es una identidad trigonométrica?
    options:
      - |
        Una igualdad que se cumple para algunos ángulos
      - |
        Una igualdad que se cumple para todos los ángulos donde está definida
      - |
        Una ecuación sin solución
      - |
        Una fórmula del triángulo
    answers: ["sha256:b3f7aaaaf57599c33ac6a164999d50559b7b2c21998c7401d19c7de78bd41666"]
  - id: r-mitad-signo
    tier: 3
    type: opcion
    review: true
    prompt: |
      En $\cos\frac\alpha2 = \pm\sqrt{\frac{1 + \cos\alpha}{2}}$, ¿cómo se elige el signo?
    options:
      - |
        Siempre positivo
      - |
        Siempre negativo
      - |
        Depende del cuadrante de $\alpha/2$
      - |
        Depende del radio
    answers: ["sha256:8130d1808c39124ae78ed381275fc09e73e8f2b9e4686692cd9d3a61fce02816"]
---

# Fórmulas trigonométricas, identidades y ecuaciones: suma y diferencia, ángulo doble y mitad, sumas en productos, ecuaciones y su solución general

¿Cuánto vale $\operatorname{sen}75^\circ$ sin calculadora? ¿Qué ángulos cumplen $2\cos^2x - \cos x - 1 = 0$? Las **fórmulas trigonométricas** relacionan las razones de
unos ángulos con las de otros (sumas, dobles, mitades) y son la herramienta para simplificar expresiones, demostrar identidades y
resolver ecuaciones con senos y cosenos. Aparecen continuamente en física (superposición de ondas, interferencias, batidos), en
electrónica (señales y corriente alterna) y en el cálculo (derivar e integrar funciones trigonométricas).

## Objetivos

Al terminar sabrás:

1. Usar y demostrar las fórmulas de la suma y la diferencia de ángulos.
2. Usar las fórmulas del ángulo doble y del ángulo mitad, y las de transformación de sumas en productos.
3. Demostrar identidades trigonométricas.
4. Resolver ecuaciones trigonométricas y escribir su solución general.

## Qué debes dominar antes

[[mat-resolucion-triangulos]] (teorema del coseno, circunferencia goniométrica y reducción al primer cuadrante, a través de
[[mat-razones-trigonometricas]]), [[mat-polinomios-factorizacion]] (factor común) y [[mat-ecuaciones-segundo-grado]] (cambio de variable).

> [!question] Test de entrada
> 1. ¿Cuánto vale $\operatorname{sen}150^\circ$?
> 2. Resuelve $2t^2 - t - 1 = 0$.
> 3. Si $\cos\alpha = 0{,}6$ y $\alpha$ es agudo, ¿cuánto vale $\operatorname{sen}\alpha$?
>
> Respuestas: $\frac12$; $t = 1$ y $t = -\frac12$; $0{,}8$.

## 1. Para qué sirve

- **Física de ondas**: sumar dos ondas (interferencias, batidos) es sumar senos; la fórmula de suma en producto lo explica
  (el tema `fis-ondas-sonido`).
- **Electrónica y señales**: corriente alterna, modulación de radio, análisis de Fourier.
- **Geometría y gráficos**: rotaciones en el plano (las coordenadas de un punto girado usan $\cos(\alpha + \theta)$ y $\operatorname{sen}(\alpha + \theta)$).
- **Cálculo**: simplificar antes de derivar o integrar ([[mat-funciones-trigonometricas]]).

## 2. Suma y diferencia de ángulos

> [!practico]
> Que $\operatorname{sen}(30^\circ + 45^\circ)$ no es $\operatorname{sen}30^\circ + \operatorname{sen}45^\circ$ se ve enseguida: eso daría $1{,}21$, y un seno nunca pasa de $1$. Las razones no se
> «reparten» en las sumas; hay fórmulas precisas, y todas se deducen de una.

$$
\begin{aligned}
\operatorname{sen}(\alpha \pm \beta) &= \operatorname{sen}\alpha\cos\beta \pm \cos\alpha\operatorname{sen}\beta, \\
\cos(\alpha \pm \beta) &= \cos\alpha\cos\beta \mp \operatorname{sen}\alpha\operatorname{sen}\beta, \\
\operatorname{tg}(\alpha \pm \beta) &= \frac{\operatorname{tg}\alpha \pm \operatorname{tg}\beta}{1 \mp \operatorname{tg}\alpha\operatorname{tg}\beta} .
\end{aligned}
$$
*Ejemplos:* $\operatorname{sen}75^\circ = \operatorname{sen}(45^\circ + 30^\circ) = \frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2} + \frac{\sqrt2}{2}\cdot\frac12 = \frac{\sqrt6 + \sqrt2}{4} \approx 0{,}9659$; $\cos15^\circ = \cos(45^\circ - 30^\circ) = \frac{\sqrt6 + \sqrt2}{4}$ (el mismo valor,
porque $15^\circ$ y $75^\circ$ son complementarios).

> [!formal] Con rigor: la fórmula madre
> Sean $P = (\cos\alpha, \operatorname{sen}\alpha)$ y $Q = (\cos\beta, \operatorname{sen}\beta)$ en la circunferencia unidad. Calculando $PQ^2$ con coordenadas:
> $(\cos\alpha - \cos\beta)^2 + (\operatorname{sen}\alpha - \operatorname{sen}\beta)^2 = 2 - 2(\cos\alpha\cos\beta + \operatorname{sen}\alpha\operatorname{sen}\beta)$. Con el teorema del coseno en el triángulo $OPQ$ (lados $1$, $1$ y
> ángulo $\alpha - \beta$): $PQ^2 = 2 - 2\cos(\alpha - \beta)$. Igualando, $\cos(\alpha - \beta) = \cos\alpha\cos\beta + \operatorname{sen}\alpha\operatorname{sen}\beta$. Cambiando $\beta$ por $-\beta$ sale la de la suma, y con
> $\operatorname{sen}\theta = \cos(90^\circ - \theta)$, las del seno; la de la tangente es el cociente. $\blacksquare$

## 3. Ángulo doble y ángulo mitad

Con $\beta = \alpha$ en las fórmulas de la suma:
$$
\operatorname{sen}2\alpha = 2\operatorname{sen}\alpha\cos\alpha, \qquad \cos2\alpha = \cos^2\alpha - \operatorname{sen}^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\operatorname{sen}^2\alpha, \qquad \operatorname{tg}2\alpha = \frac{2\operatorname{tg}\alpha}{1 - \operatorname{tg}^2\alpha} .
$$
Despejando de $\cos2\alpha$ con $\alpha$ sustituido por $\frac\alpha2$ salen las del **ángulo mitad**:
$$
\operatorname{sen}\frac\alpha2 = \pm\sqrt{\frac{1 - \cos\alpha}{2}}, \qquad \cos\frac\alpha2 = \pm\sqrt{\frac{1 + \cos\alpha}{2}},
$$
donde el signo depende del cuadrante de $\frac\alpha2$. *Ejemplo:* si $\operatorname{sen}\alpha = \frac35$ y $\alpha$ es agudo, $\cos\alpha = \frac45$, $\operatorname{sen}2\alpha = \frac{24}{25}$ y $\cos2\alpha = \frac{7}{25}$.

**Sumas en productos** (útiles para ecuaciones y para la física de ondas):
$$
\operatorname{sen}A + \operatorname{sen}B = 2\operatorname{sen}\frac{A + B}{2}\cos\frac{A - B}{2}, \qquad \cos A + \cos B = 2\cos\frac{A + B}{2}\cos\frac{A - B}{2},
$$
$$
\operatorname{sen}A - \operatorname{sen}B = 2\cos\frac{A + B}{2}\operatorname{sen}\frac{A - B}{2}, \qquad \cos A - \cos B = -2\operatorname{sen}\frac{A + B}{2}\operatorname{sen}\frac{A - B}{2} .
$$
(Salen sumando y restando $\operatorname{sen}(x + y)$ y $\operatorname{sen}(x - y)$ con $x = \frac{A + B}{2}$, $y = \frac{A - B}{2}$.)

## 4. Identidades

Una **identidad** es una igualdad que se cumple para **todos** los ángulos en que está definida. Se demuestra transformando un miembro hasta
obtener el otro (o los dos hasta una misma expresión), con las fórmulas anteriores; no se «pasan términos» como en una ecuación, porque no
se sabe aún que la igualdad sea cierta. *Ejemplo:* $\frac{\operatorname{sen}2x}{1 + \cos2x} = \frac{2\operatorname{sen}x\cos x}{2\cos^2x} = \frac{\operatorname{sen}x}{\cos x} = \operatorname{tg}x$.

## 5. Ecuaciones trigonométricas

> [!practico]
> $\operatorname{sen}x = \frac12$ no tiene una solución, sino infinitas: $30^\circ$ y $150^\circ$ en la primera vuelta (dos puntos de la circunferencia a la misma altura) y
> todas las que resultan de dar más vueltas. Resolver una ecuación trigonométrica es encontrar las de una vuelta y añadir las vueltas.

**Método:**

1. Transformar la ecuación (con identidades) hasta que aparezca **una sola razón de un solo ángulo**, o un producto igual a $0$.
2. Resolver la ecuación algebraica que resulta (por ejemplo, con el cambio $t = \cos x$).
3. Para cada valor posible de la razón (los de fuera de $[-1, 1]$ en seno y coseno se descartan), hallar los ángulos en $[0^\circ, 360^\circ)$: para el
   seno, $x$ y $180^\circ - x$; para el coseno, $x$ y $360^\circ - x$; para la tangente, $x$ y $x + 180^\circ$.
4. **Solución general**: sumar $360^\circ k$ (o $180^\circ k$ en la tangente), con $k$ entero. En radianes, $2\pi k$ y $\pi k$.
5. Comprobar en la ecuación original (algunas transformaciones, como elevar al cuadrado, añaden soluciones falsas).

*Ejemplo 1.* $2\operatorname{sen}x = 1$: $\operatorname{sen}x = \frac12$, $x = 30^\circ + 360^\circ k$ o $x = 150^\circ + 360^\circ k$.

*Ejemplo 2.* $2\cos^2x - \cos x - 1 = 0$: con $t = \cos x$, $t = 1$ o $t = -\frac12$; $\cos x = 1$ da $x = 0^\circ$, y $\cos x = -\frac12$ da $x = 120^\circ$ y $x = 240^\circ$.

*Ejemplo 3.* $\operatorname{sen}2x = \cos x$: $2\operatorname{sen}x\cos x - \cos x = 0$, $\cos x\,(2\operatorname{sen}x - 1) = 0$; $\cos x = 0$ da $90^\circ$ y $270^\circ$, y $\operatorname{sen}x = \frac12$ da $30^\circ$ y $150^\circ$. (Dividir
entre $\cos x$ habría perdido dos soluciones.)

Para valores no notables se usa la calculadora ($\arcsin$, $\arccos$, $\arctan$) y luego la simetría para la segunda solución.

## 6. Errores típicos

- Creer que $\operatorname{sen}(\alpha + \beta) = \operatorname{sen}\alpha + \operatorname{sen}\beta$ o que $\operatorname{sen}2\alpha = 2\operatorname{sen}\alpha$.
- Equivocar el signo en $\cos(\alpha \pm \beta)$ (va al revés: con la suma, menos).
- Elegir mal el signo de la raíz en el ángulo mitad.
- Dar una sola solución de una ecuación trigonométrica, u olvidar la solución general.
- Dividir entre una razón que puede valer $0$ (se pierden soluciones).
- Aceptar soluciones con $\operatorname{sen}x$ o $\cos x$ fuera de $[-1, 1]$.

## 7. Resumen

- $\operatorname{sen}(\alpha \pm \beta)$, $\cos(\alpha \pm \beta)$, $\operatorname{tg}(\alpha \pm \beta)$; todas salen de $\cos(\alpha - \beta)$.
- Ángulo doble y mitad; sumas en productos.
- Identidades: transformar un miembro en el otro.
- Ecuaciones: una sola razón de un solo ángulo, resolver, todas las soluciones de una vuelta, solución general, comprobar.

## Repaso: lo que debe quedarte dentro de un mes

1. La fórmula del coseno de la diferencia y cómo se demuestra.
2. Las tres formas de $\cos2\alpha$.
3. Cómo se halla $\operatorname{sen}15^\circ$ sin calculadora.
4. Los dos ángulos de cada vuelta con el mismo seno, coseno o tangente.
5. Por qué no se divide entre $\cos x$ en una ecuación.

## Siguiente

[[mat-trigonometria]] repasa el bloque; después, [[mat-vectores-rectas-plano]] y [[mat-funciones-trigonometricas]].
