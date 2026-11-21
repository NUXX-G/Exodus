---
id: mat-razones-trigonometricas
title: "Razones trigonométricas: grados y radianes, seno, coseno y tangente, relaciones fundamentales, triángulos rectángulos y circunferencia goniométrica"
area: matematicas
trunk_level: 3
prerequisites: [mat-triangulos-pitagoras, mat-semejanza-tales, mat-funciones-graficas, mat-sistemas-dos-incognitas]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 8: «Trigonometría», secciones 1 (sistemas de medida de ángulos: sexagesimal y radianes), 2 (razones de un ángulo agudo, relaciones fundamentales, razones de 30°, 45° y 60°, resolución de triángulos rectángulos y aplicaciones) y 3 (circunferencia trigonométrica, razones de un ángulo cualquiera, reducción al primer cuadrante). Apuntes Marea Verde, autoras Mª Fernanda Ramos Rodríguez y otras. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/08_Trigonometria.pdf"
  - "I. M. Gelfand y M. Saul, «Trigonometry», Birkhäuser (2001): definiciones en el triángulo rectángulo y en la circunferencia unidad."
hints:
  - "Concepto: en un triángulo rectángulo, sen α = opuesto/hipotenusa, cos α = contiguo/hipotenusa, tg α = opuesto/contiguo. No dependen del tamaño del triángulo (son semejantes). En la circunferencia de radio 1, el coseno es la x del punto y el seno, la y."
  - "Herramienta: sen²α + cos²α = 1 y tg α = sen α / cos α para pasar de una razón a otra; para ángulos mayores de 90°, busca el ángulo de referencia en el primer cuadrante y pon el signo del cuadrante. Comprueba que la calculadora está en el modo adecuado (DEG o RAD)."
  - "Documentación: Marea Verde 4.º ESO B cap. 8 (secciones 1-3)."
exercises:
  - id: grados-a-radianes
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Expresa ${{g}}^\circ$ en radianes (con al menos cuatro cifras significativas).
    variants:
      - values: {"g":45}
        answers: ["sha256:a5090e409ec880c81686810859aeac319ddf9fbdf448510f0f7c23b8c74d55f8","sha256:d8cac8e56ac15244e40b4b073b202af301675b2a82c02b884518cf508f2ff877","sha256:b0ae1648ce5cbb7b0c9cfa9b54c9ef4c7d9cab29f26aadd10bbddb9d93a6cd2f"]
      - values: {"g":150}
        answers: ["sha256:92f8a7500f90f3757a8b57bb1476918ced41100f688fcfe363d3891b0a5d6777","sha256:23ac66fcb9c0bdac247b4b448474b741c30702a6b2155c2d2ae5f71543a1b843","sha256:2f795ebd9bf9b321dd6025d0e7124c32000618b8b07d3500595c32f70e9a8333"]
      - values: {"g":225}
        answers: ["sha256:7cbaf39f7dd4f889c9a0320e05764a22079f680db42ec6da9081fe5ee7553976","sha256:985b28afc8884e6106ac46b942e57137d54944364c5cc72c6d9dae8a8de4d886","sha256:6024c062353eb031f2051af1a6afb368d7c9054409b524ddc6532e2ab28727ab"]
      - values: {"g":10}
        answers: ["sha256:7e8a6391bdf65c0737dfbafbe23cc17ea566033b25fb321d479dcdaa59b14591","sha256:1b67b6509a7cd3d25c2d048063c81c3c435f51e1dce2d5f3fb57a61d04db2768","sha256:51344f6ba729a1ee5161b07f6cc65b39806066391d37bbbd52dc407d48d679d5"]
      - values: {"g":300}
        answers: ["sha256:630a9878119cae616e2d9620382fcb5b35851fbe324b14720ff4aa0f888a98a9","sha256:f6e266d103be771797ed0c846bc3b6bca792ac18555f5cdffe88b78b2ae6e283","sha256:41e7177e798aa36308cc3e06744cfc4b34d11bfef192647677aa5d4e97d9a020"]
      - values: {"g":72}
        answers: ["sha256:3eab5d384e59f0f21be120085e4611f44f36eab281a5d047bcd39bc7970d1f24","sha256:34962d48492e84251dd6bdfc7622610672a81c52a392ca195a3f9784a625baae","sha256:df598aebb782504d0013d0f7e8e2ef1454d1dfc8a7b2a085e9cd23de4773259b"]
  - id: radianes-a-grados
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Expresa $\dfrac{{{k}}\pi}{{{m}}}$ radianes en grados.
    variants:
      - values: {"k":5,"m":6}
        answers: ["sha256:43b2c5062581d4093406a095b9f2885c623490e599b01ca7d46387e108161da3","sha256:7f319378e5e4937e4c7c5cac91133c190e3228dd2339a0dbb0c76183a67e5688","sha256:0c4f010cf8ceb40988d8f917fbfbbebc7bfd577a7f3f24141589648ec9b3e6ca"]
      - values: {"k":3,"m":4}
        answers: ["sha256:b6021ce7ec7d0c2f65bfe5a93d36a59fc341a0d9e24b55f6eccd78deeddb47f8","sha256:f45e491b5d378a610d4987365b4a805a33f55491fda3b23d81ebc310b0532f6d","sha256:16d715e54a0522c364c3654bb461d7eac608076e4cf2743645ab599e98498abc"]
      - values: {"k":7,"m":4}
        answers: ["sha256:a3af3149c577d16a3b6d8fa88fbe72580c6218c2d14dd4cf4127e4baf6f1a8a3","sha256:7d32e83c73d758f7cf16f168de079e75d207b153f4e12271d09344060d144421","sha256:d3b471992f1b36736bf78da2d9e7e05252c65d62dd50752abde48956fc6549be"]
      - values: {"k":2,"m":3}
        answers: ["sha256:9294432cd2553d77dbbb348c4681f4070844bfbac54c185b9718309233901bf6","sha256:7a2da0eb803ed57c7ef9726fae5303ade84deac808f70b16e1c9a5a43d6b4d80","sha256:9086143f472183c769dcd49c852fbfb42b687b8d994312609a77e919259488e9"]
      - values: {"k":11,"m":6}
        answers: ["sha256:a6c4fe5d2cd665ab6b7850b7c8b91cd65b3d438ebb8c267025c62a4b2bcde472","sha256:b74810b5194aa068308e6336dcc33cd3c20c6c44ed912d045c712e97f4693395","sha256:7b37bd4845f999ce3ea8f66d68d7aaee27b937acb75e8400b8fc0cbba312b717"]
      - values: {"k":5,"m":12}
        answers: ["sha256:3f23489e1db8d514c3dab593e940a32fb0ed1e411ffcf110cb39b8a74554d3e8","sha256:0f4ca6eba3c31e528fa04dc2081666be9d4f54125b11bb397a0aea128f286543","sha256:2e2670e8beafc0c60fd996615f91815ca7360c9b72857dead1f182ff9326b93c"]
  - id: razones-con-catetos
    tier: 1
    type: numero
    sig: 4
    prompt: |
      En un triángulo rectángulo, el cateto opuesto al ángulo $\alpha$ mide ${{a}}$ y el contiguo ${{b}}$. Calcula ${{q}}\,\alpha$ (al menos cuatro
      cifras significativas).
    variants:
      - values: {"a":5,"b":12,"q":"\\operatorname{sen}"}
        answers: ["sha256:a3b978f9ebccb870ae0b583e32c792d3c46d7f1e93498b122e58bb32cc3518f9","sha256:41d573b725af9c45cecca01fd16568115d03864cc0955158311c2447fe662ecc","sha256:f6745d073e0e151f2fa889f1aefe468a565f2b4ea28e3f35dc188dedfb3b0bd5"]
      - values: {"a":8,"b":15,"q":"\\operatorname{cos}"}
        answers: ["sha256:515fbe6d02a1826064a8867f0fef41f9a52a59124373d7cc59bb7f4e9f868d8a","sha256:311e716fd7184277e1fa2703d2c594dcb24c249287ef8312db73bab56955b4bb","sha256:b716d23f178602a546ff45541bc45bedc1ed3d268286b3b60e1b37c6ee9c2511"]
      - values: {"a":7,"b":24,"q":"\\operatorname{tg}"}
        answers: ["sha256:7f7afb0d93c17a2144401002250283b927d78991169f2bfca9f368e893df1069","sha256:4c2d581098c6dbbb4a0c6bfa8f574a0f60c5482a302b359a2bcd990a4a7bb834","sha256:92e1cf013240d51e6d66bfceb2882f8aae36b560ed3c2198b94dc00e4bb97390"]
      - values: {"a":2,"b":3,"q":"\\operatorname{sen}"}
        answers: ["sha256:caf4f0800a39ecd1ba637213442411bc30c9dd261d02af2c3c61ca3bbf830b49","sha256:0ddc80767b19c7afdc49c6e33c4a0c3bad8d0439ae3c94ec68905b8c78b7dafc","sha256:ac9441ce785da402deb4638ac56a3b0ad44765226966dd4ba2220a7269338666"]
      - values: {"a":9,"b":40,"q":"\\operatorname{cos}"}
        answers: ["sha256:775513727594d1aa601daa67decb8dc8e0a83b9982ea4a0c2090726fec422ae3","sha256:bc44ed7ea403bf74262ef66e8469f5066c77f4659db593f1fe92ca5e54a37ffb","sha256:04dfc3e4ffea9dc5d5187223c644e44ebafcae39716ad8c9d9d88b9691855e29"]
      - values: {"a":1,"b":1,"q":"\\operatorname{sen}"}
        answers: ["sha256:82a8fe9379a7d23a22eb5ed984b7f1e7e427e77e72cdb1496244f80c5bdc070e","sha256:f8660d22a8e9853f03bc9c176bdf47402f0a329867407c1c1cecf9a2b322a1df","sha256:1ac0f6dae83affbf19240d42a197d52f0456117e647ab769b037e25fcf6cb5d6"]
  - id: coseno-desde-el-seno
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $\alpha$ es agudo y $\operatorname{sen}\alpha = {{s}}$, ¿cuánto vale $\cos\alpha$? (Usa la relación fundamental; al menos cuatro cifras significativas.)
    variants:
      - values: {"s":"0{,}28"}
        answers: ["sha256:e6cffa2288ed8c328c0dcea1aa29c953a4134aebc03db93dd015fde074cd7a68","sha256:55dd9d6803d2f158e88cf570d0569134b52852da5ddfeb5fdf5b2482746a69c8","sha256:e2e4b21d9e43266364d1879aa9e4a280347f81038ead750c6f4d80a7dc75bf5c"]
      - values: {"s":"0{,}75"}
        answers: ["sha256:6cbb12c68595abe609e9272d87b217408e0c0d4117d73b6987de094cb77a856d","sha256:292f1870230d01e1956f2aaec2344dbd737120ac15fdf8e9508b8b4175728253","sha256:aa2b4f60027f7fedc5cd10fdc9a2f6e7eec0eaacdeb9c7a87398db98638179a0"]
      - values: {"s":"\\frac{5}{13}"}
        answers: ["sha256:3f05729ea411c793d061d6a134a644703018d2939c23f42c075ba2984b4feca0","sha256:59c3f024c654d37c16ad29ca3b7631a332e70436a30d8edc811766039c1d61c2","sha256:563e655219a7a2a321f2f6bde14fa100e3755cec32bcddd45f3b9a2fe09d1b95"]
      - values: {"s":"0{,}5"}
        answers: ["sha256:86f10a89a86fa7e60000f60aff4209cd15d8328affce51b00a851061d4a042ca","sha256:ae8495f50cfb5ffdd196d1fa48e27f0c1d1b826552d51cdb888d2988955043f6","sha256:7bd99e33460db6cee5dad41c84977c2e74ea20ed15d56960172d74ecdba105f8"]
      - values: {"s":"0{,}96"}
        answers: ["sha256:aa1a40061a354af6c0f17325fcb63031e8f2a56853aaabbaf8cf433c53a958f8","sha256:bbdc1456cc7b7346ca8631402dfc9dbd758d977136f66dc05c8780256636bdcf","sha256:f7a25a6da43e1770847a0d99b61e66112a4da2fe24844159ff2c508c89fd8dc0"]
      - values: {"s":"0{,}1"}
        answers: ["sha256:519af6f29402edc06fb5a4ca52129b4560ad53ef9f20ef64f7a3e1a74f517ac1","sha256:7815ea26121f306cf58472bfe774d5138f9d586f89edee65b913971a1e7b41a6","sha256:f8b8a8c437e4fb6d298825af42aa51fc645f3504bbfd046e3e0919a0dd82bfa8"]
  - id: seno-desde-la-tangente
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Si $\alpha$ es agudo y $\operatorname{tg}\alpha = {{t}}$, ¿cuánto vale $\operatorname{sen}\alpha$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"t":"0{,}75"}
        answers: ["sha256:882db0265d7b6f7b91f19322fdbc35a32878429ae709aa2661639dcf86fc6402","sha256:57eca242e262a54047fd2b292889171fdc8ea4cc0f326f4e418d3e99574e1883","sha256:fa008e30b2e427e84a196c6fd51f294ee7a1908fcb0ae1c50bda867edebfb22e"]
      - values: {"t":"2"}
        answers: ["sha256:3f42faab0ed59289b25cf8cbcae0c51419a291c4ae91c240fee46a4aeb705052","sha256:6614f144edd2f207e0701029f88d0f25d91c19abed502171fec782d5d3f07724","sha256:1182c2dc035de1880d9f63a7cddbd4c3a6846e7eeb3ce751b1feed85a13aee2a"]
      - values: {"t":"\\frac13"}
        answers: ["sha256:566a8791fc2500336cc2aae3273f927b6825778d91c3c9f4df0b352d5a115241","sha256:96c686a64f73475800da374f554c319544e2b3af44253daaa8d50a07d0b29b6e","sha256:2a98c481980105e29f0d0a4152598ddfc76ee60099c7ca8de32ff1ba6703ae6e"]
      - values: {"t":"2{,}4"}
        answers: ["sha256:fdb598d9ebdc2658ab4fa211b0d61b6d843b3de5e9a268219ef5e847af9c51db","sha256:4c1eae06378871e8509d48a97115ccc4a6a70cd8e3b42e491db3a4a91349a68f","sha256:d812c6a8fabdfd7a05330c36a681ba2679ad254a0e1d510c561aa58ea7342a55"]
      - values: {"t":"1"}
        answers: ["sha256:1a4c9e6e5a7a25b1a47ba5ce88c30d1821aeab10b878b7b44f878ed3c2cac86b","sha256:a9fd2cd1df79fedf4d88362d94ab956c8ba8876d988aa3106a3e0510e6686b38","sha256:f17709ba7c07698399ad7beecb25bb72d12ab7106cef04d0c45eb5c8330c0d19"]
      - values: {"t":"0{,}5"}
        answers: ["sha256:69dee18c8e4f7effd8dc878084565e72539425f315a38eda843570eb613a953a","sha256:91b27aa64570bbe0cf56d6bf34d732bc827d85f96ed755055386a517e9ba055f","sha256:d2b7a3f23d6dc33c80e5b88a1265b9f999c56cfb5c368449ac322d4622cedf61"]
  - id: angulos-notables
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula sin calculadora, con los valores de $30^\circ$, $45^\circ$ y $60^\circ$: ${{e}}$. (Da el resultado con al menos cuatro cifras significativas.)
    variants:
      - values: {"e":"\\operatorname{sen} 30^\\circ + \\cos 60^\\circ"}
        answers: ["sha256:807666461570b835e3a014e2c41d74c3bf96ac299ca6477c64107056afe81334","sha256:75464dce86fe7bb51cd08a0d584fe3204dcb489762cfb052671eaf0c6ea324c6","sha256:172114fddca3935caa2f69d0458707f99602bc0fcc2e51db8bd120bd74713041"]
      - values: {"e":"\\operatorname{tg} 45^\\circ \\cdot \\cos 30^\\circ"}
        answers: ["sha256:90721a11b605ee6f9f9adf8b5c4f14bf4810df91aa3ff9943538ca28181eaf33","sha256:e026af4e948c482b97c2670d8f3abb56158bcb2d15c44dc0710d11f62e256db7","sha256:589b11998f8d7df4e5546be06908248a73939c7e6cd29a25165dbc76278e1030"]
      - values: {"e":"\\operatorname{sen}^2 60^\\circ - \\cos^2 45^\\circ"}
        answers: ["sha256:004d3fe0daf6bc4d34c97ff98b59e115615615b9608e905d9db3f8acad4a5ac0","sha256:84e31c8bfa47a2ef01a3c7f90d0bbad3df3b8f5ab0231f32c92bdfd15a8c854d","sha256:1675d2f5d7204c358a7aa9e54b4dbe8116181bb44142a9f9d9f7091ac9255653"]
      - values: {"e":"\\dfrac{\\operatorname{tg} 60^\\circ}{\\operatorname{tg} 30^\\circ}"}
        answers: ["sha256:d062348d70880484e8dab946d0337585d0dd8f7c36c1cfbb07012853801a1241","sha256:88138693b31c11fad6a7b3909981e99f4851f834370eb8f9db76dd606a51ca2b","sha256:562b55a15cb0619802634902d657f0f2fc987d6ef5834cccb1838d06e13b89c7"]
      - values: {"e":"2\\operatorname{sen} 45^\\circ \\cos 45^\\circ"}
        answers: ["sha256:697906378e3232229815a1d68e1bd0a6e95def16e69c2b05902843635609a473","sha256:019d38589766fc01970b9864e8ffb885e968babba138900f59db444fc385c5ea","sha256:557bdda1ff351add793cdca9dd482384e5993a1b9638236c1975ee70bd48aad5"]
      - values: {"e":"\\cos^2 30^\\circ + \\operatorname{tg}^2 30^\\circ"}
        answers: ["sha256:56345716c31fc8f796aa5e8116a6542237120f3dcc17cf453f408c3f1b56b3d1","sha256:e8c39051224437d7a2a7510a7dc2b81bd33dac68b3f172f757327addd5f1c54d","sha256:3c4f34962fc02ae73b2743b3a0879f8311d5ac71186ddb6257e1c7243fd29d26"]
  - id: resolver-triangulo-rectangulo
    tier: 1
    type: numero
    sig: 4
    prompt: |
      En un triángulo rectángulo, la hipotenusa mide ${{h}}$ cm y uno de los ángulos agudos ${{a}}^\circ$. ¿Cuánto mide el cateto {{q}} a ese ángulo?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"h":"10","a":35,"q":"opuesto"}
        answers: ["sha256:b0939d8bd426fcd6730de5b8d5d29d96dbdb66e8b6b96af4caa2a48c5ef02e0a","sha256:a39bbfdb40a3290093bb14ade4fcde21e72dc4a42245f38ee6dd4661b84ec41d","sha256:629097c2e070f17e3f7d90ab192f65b28f234407693000c8c8f973f923d6c26d"]
      - values: {"h":"25","a":62,"q":"contiguo"}
        answers: ["sha256:e3f2318868f9f05e32c0b7e7fca20842a0a54fcca1feafcc74185d910bc2b587","sha256:aff008bf64605d631729bbcb1448c63b14f647a30093cb02c5658b92bc28d60d","sha256:d025a6fcda8e198e544bedff2837e00265fb80760ffcce8b74410b761e96c8ac"]
      - values: {"h":"8","a":18,"q":"opuesto"}
        answers: ["sha256:f21b3b02e0ff9952e558040195b69a616aa9229def011182561aa2bc21e63544","sha256:f888b76453f4bdef5678b9c5a83bdd4c57894a762932d257f7c2ca9ba02e6727","sha256:a134c2e2fa4016efb26f85bbf64291f685d1d37db0be7f59a297feee85f3e300"]
      - values: {"h":"14{,}5","a":50,"q":"contiguo"}
        answers: ["sha256:8843fe7138f5c61ba75f8a18bb1cbc21737a48ea6b510266faaeb4eeccc386e2","sha256:d045593bc9fd4f6f01490d577930077cb6c3ffb8b5752b92989802715f12a555","sha256:ea837d6a0ee3cd6ceabbeb0abeec3b07dd64a65165e1893ce30c27126b7d6bfb"]
      - values: {"h":"30","a":73,"q":"opuesto"}
        answers: ["sha256:9cf0cc90d0f641bea82203377e7933c32c15d3a4d7a13f5138542130e9a22d4b","sha256:b338dd2bfb5ca925b2acc6ce55524d5282e037d4a4c04647d40c0fc102ea0578","sha256:bc5045701561aedfadfc0e65b2bdb0898355fb6dea5ff30b6f01a8648d693b91"]
      - values: {"h":"6","a":41,"q":"contiguo"}
        answers: ["sha256:017ef9002e50750fd08758ab59fd3c1b7fa4c27657b4d363c4696919cc5657ab","sha256:f6b357269ab9ba66a001cd3b8e86cb7fda33bd24cc14b0944cab18997aaec42e","sha256:11d0e07a8b728c74df6f99785eccf80b3fff17f3e02465cec5e0e0908cf4c283"]
  - id: angulo-de-elevacion
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Desde un punto situado a ${{D}}$ m de la base de un edificio, una persona cuyos ojos están a ${{o}}$ m del suelo ve el tejado con un ángulo
      de elevación de ${{b}}^\circ$. ¿Cuánto mide el edificio? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"D":30,"b":35,"o":"1{,}6"}
        answers: ["sha256:b71f5bd11cf8b824f4155dcebeea82ef589890942247b50e196c69a92c5211ee","sha256:22b322647c1aaba72ffa0c841de346107bf45a9d7a5da91f7ae92932a2441b56","sha256:6a885e36b06ea82baff35af7a880d58ff16df2c749724de4e4e81dc526ca9418"]
      - values: {"D":50,"b":22,"o":"1{,}7"}
        answers: ["sha256:7baf4be0311aef61a2b7ff1cbb689f877c80c95ccfb7d6fcd53fc4ae0912d1d5","sha256:71b11a71523eeec00a9d1814d2008228b0b10b15413faeb7e24544cd5e7c0b32","sha256:ad703b07c8049355d5423c5869cc89fd54506bceff90e5d77e4f947a16206d7c"]
      - values: {"D":12,"b":60,"o":"1{,}5"}
        answers: ["sha256:d6ef8f259ccce33bfca072db254c646a9a7d5cc300d639ffd91a061686b33fac","sha256:3dbb00ebce11090ffca8d1dfcf9eb05ab51fb11d78691c171281a75abd64cd2c","sha256:f71ce51f361a8c5fdf56a1c6b754560199f8ce50ba10a0add2972ed9bab2971f"]
      - values: {"D":80,"b":15,"o":"1{,}8"}
        answers: ["sha256:9e8e5a7be471eacfcdc18dbafcae4d4963920661dd5b875a3d617e2b83e80370","sha256:72ebcb1a6be503c59b75f1361db51ce46c510db4aa03cb99786a1c7686cc4365","sha256:427688d7b491cd3cc33b2463c8d694ec78f872526b90213ac05ca1910b7a60ef"]
      - values: {"D":45,"b":40,"o":"0"}
        answers: ["sha256:be42e5a66651cee2ba21f0bad8e00cf683e41ed3d7e7e64997b3e7ac5a61a95d","sha256:4b47ee51cf06811d6a42678325d46b00aff535e5209f69aeafb7de9fb3f33fe1","sha256:aa639e1695064577b6ebe28ff254106eabfbf9c4742e10709d278abe2e2819dc"]
      - values: {"D":20,"b":52,"o":"1{,}65"}
        answers: ["sha256:1ff9b6c278769a06767208097d4842f148c39fc2c6b20189e1f2209894fd3aa7","sha256:f5a3430ea1740b0fedf8c55f0440de2d0b06d39494af6c494cf6b0e2dd44a411","sha256:153cb59045a22068a67a269c67d0c511202ebf5e72b27e678c7e96da0ba3dcc9"]
  - id: doble-observacion
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Desde un punto $A$ se ve la cima de una torre con un ángulo de elevación de ${{a}}^\circ$. Acercándose ${{s}}$ m en línea recta hacia la torre,
      el ángulo pasa a ser de ${{b}}^\circ$. ¿Cuánto mide la torre? (Ojos a ras de suelo; al menos cuatro cifras significativas.)
    variants:
      - values: {"s":20,"a":30,"b":45}
        answers: ["sha256:a2ca91d2262af362a259bf1365a160d8aa7cae6c380f2a3ea6e5f146e95fccdf","sha256:a531784b7ea919a0007670e667bc41a9ce6b36b65ac48f387e42839cb5d8c618","sha256:9e6a9b3698427d8bfb14670b9455bb8ffe30d9d84a3b8fd2a9aa50326d2fa2dd"]
      - values: {"s":50,"a":25,"b":40}
        answers: ["sha256:2f22e184b77c982a7c37b3c96369a5b580abd05235ce415f21940a1dd5203237","sha256:7d415b666252c600282404de54848082b50d50210bf25671733d4e44f2f4dc05","sha256:148c709f99155c160972544048961791e0982c8e774f4d31b73fa7fb40e7140a"]
      - values: {"s":10,"a":40,"b":60}
        answers: ["sha256:3e8768766e79addf9404e52b5428ce9991bdb1fa82058e521a281cab669a6949","sha256:57fd4c5f609d698cbc4dbbd844660e62a2e4c76ff210ae00735dd888f9da97b0","sha256:dc364ea07065b36141a298ff05db31ff4c1298b528e5df1f5dd9a11a463755f6"]
      - values: {"s":100,"a":20,"b":35}
        answers: ["sha256:18b990e0141877dcc80e0c66de959d279486d817e3dd6f46fc725313d1700afc","sha256:179449bda1439621de9254229b57be7acbad6179d2208e8be99d3e9dc90e732c","sha256:6e653fc9709f327ed0dc5c6f2d877b73b5b74a1df446722a0571a72ebcfee21e"]
      - values: {"s":30,"a":35,"b":50}
        answers: ["sha256:90063d925a0ca1524f0701d0b9e16b1066dcf4ecfbf6207bce57685193b89c67","sha256:94255faefc17461e1067fb960d8abe92bcd494aad0ae773e386f82823eb6c2a6","sha256:353873368930fb2f51102053c735662b10b13ba7322ed26dfeef0f8209d6362c"]
      - values: {"s":15,"a":45,"b":70}
        answers: ["sha256:a4f5f276f2bf5f8dffd80052b77055f5fc3f3cf88c37fd7a0004578f385e331d","sha256:d6796771bebb2a86a46ffcef609dfc342deabb7d8fea8010d4243f12be04fb1a","sha256:b35a9f0a2f5ed148c0eb84c71eab5151cde302f11786c9d7be88b7191cb2fc82"]
  - id: reduccion-al-primer-cuadrante
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula ${{q}}\,{{g}}^\circ$ reduciéndolo al primer cuadrante (cuidado con el signo; al menos cuatro cifras significativas).
    variants:
      - values: {"g":135,"q":"\\operatorname{cos}"}
        answers: ["sha256:833b29a46ca48a57cdece1c10ed51641926bb9ebfa8463a2b1fc7398eba0c278","sha256:68324ce9a91842b9ae6d1cc50d8f2a3be0a3147bdb4cd21473aba801ffcba8d2","sha256:1878ecf569453ca9a2e335b05ee0774d38e1028a51c0c121ce59ed2e2e69f48b"]
      - values: {"g":240,"q":"\\operatorname{sen}"}
        answers: ["sha256:2bab7f6bc2af2a1ab7da93618bceb30e78748d7c75e891e7584ee27a8e9895ea","sha256:c2c05e69f5794f9d4ff7610220b648b5e0541e1ae5986a2b1a4378ca884e88f6","sha256:fe0340ce011812966d31e7953f0584c9a98897f3f19cdc522eabbd8d1daf88a0"]
      - values: {"g":330,"q":"\\operatorname{tg}"}
        answers: ["sha256:f19b757c93fd4aec982fdeb3f41d3bc0651aa5c7ad31c3ed08e264c1a5048c15","sha256:426a042ed48e5c433190cb3d2e13b9749fb2665ca3b621a6438074c9e19234b3","sha256:cdae2c4af269951c9545e82e1797a07525bf9f853f06520753be869567f962af"]
      - values: {"g":150,"q":"\\operatorname{sen}"}
        answers: ["sha256:9f3d061235ec071e1681ec673a6983aab316d1553be7ea0ea1ed83d405d38c2b","sha256:6d88b26bb21f3d7534a5f4456630448ba66847ce76ad333efdaa61ff55aaddba","sha256:0e82edc6ee9e7bd296d7d600bebc6c0c22661f8dab484922b070677b1d7a36ea"]
      - values: {"g":225,"q":"\\operatorname{tg}"}
        answers: ["sha256:26c6363e65c6e9413f3192ef6e83b80fe79c68eb80c49c2f0d38edf97e115497","sha256:7d27e9ecc02d5986148aab7cd874968bdbf704af795e520d1d78dccef1d960c3","sha256:307dc09e37b8cbb17d19c3a71db5c7a9b09b939fc53efc1ea5d0049641d2f2a9"]
      - values: {"g":300,"q":"\\operatorname{cos}"}
        answers: ["sha256:3134eeb65ba4ce0e34affe5a08af4f7c2193b46a03bb80f4d8736281f593a06d","sha256:3465be23ea9a7a3b557b7982240ac86843d49587ecfa70f98914905b4c239308","sha256:7cf2db73e75f289122f85d46afffa9b87c49b135702b772732216d0ad3436a0b"]
  - id: angulo-desde-una-razon
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Halla el ángulo agudo $\alpha$, en grados, tal que ${{q}}\,\alpha = {{v}}$. (Usa la calculadora en modo grados; al menos cuatro cifras significativas.)
    variants:
      - values: {"v":"0{,}42","q":"\\operatorname{sen}"}
        answers: ["sha256:80d4ab0c60402eaf627f01588451b198d3e4410d760b5a6483f9bd54ba64d7af","sha256:c20b787b9ea6fbeedbdddba609eeca951d48901ba0153d2cf4170c538b4917ee","sha256:480805c478dfe629091c8ac49fda1c4b5b1e2b1c1629d5a17322db1dbb1c3b16"]
      - values: {"v":"0{,}9","q":"\\operatorname{cos}"}
        answers: ["sha256:0c50f949eb0bdc38b18bf7d51c3248ac919c68e5792087f347930ac95cb3b4f1","sha256:1538d6e3a306e81ea7b303669fe89c6a6a19cb0e05ad7596eee1ae902cd631db","sha256:e5df1abe912cc2ba3a94374dc863372563790c76f8c99e53f383b2ecb1417f35"]
      - values: {"v":"3","q":"\\operatorname{tg}"}
        answers: ["sha256:2ac1a97c23cb16d5db744d678c9511f6a173eb135e75d60fa949aea0c015fe61","sha256:74d9cbd50a0c85b4a1e10165f09239ff64739495601ecd09349e8cf6228f0c29","sha256:88adc0face1d508fc8f17154327b964356147a82f34ffa633da5897077f57089"]
      - values: {"v":"0{,}25","q":"\\operatorname{sen}"}
        answers: ["sha256:e67c52cf5b763724836c8cf84b43fc6df5a397f46bc37f34b503fadd83497674","sha256:a7575671bb706536f8fed02111a7f7e747ae4b30d1a8ddc2c44a189a5c670ab3","sha256:7cdf491631b7004473f930060702661c1fc68859201c88149f9202e3b777e6cb"]
      - values: {"v":"0{,}5","q":"\\operatorname{tg}"}
        answers: ["sha256:3f13304c61bf4ba671354926c987768b43786e743067844d0493660232d2dce2","sha256:3c1eda7f2b4b359905c599f15c947002e61f879d12084d2f9a73db0dfc726b81","sha256:e2dca7bbc390984c8abffe7b029ce8a88675b524be0f7bf0b274d62035c96d20"]
      - values: {"v":"0{,}15","q":"\\operatorname{cos}"}
        answers: ["sha256:8801c9607251fbaa0374a88e4ea89677e8f30d1a36f11bd3498bfaa3988435a0","sha256:601db7f3b2b430e256f88ab679c65f769f5539b1f1d41321cb7630f97f101a41","sha256:8efb83ef88b48eea54e2996fabc4b51d6aed5dff268ef35895520edbcbf5199a"]
  - id: pendiente-y-angulo
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una carretera tiene una pendiente del ${{p}}\,\%$ (sube ${{p}}$ m por cada $100$ m en horizontal). ¿Qué ángulo forma con la horizontal, en grados?
      (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p":8}
        answers: ["sha256:8a8a3f17cacfee51535f3e0f3e9ef659b553c5609b8581ad9b1c171caae5b0a7","sha256:76cac5a489ae6ecd2f0f2678d0d68cee74ddcf18ae994a205a0ddb8d395c0afd","sha256:3d797ecd4dba928005011d80f0622382497f69957190936c24b7265819c80dac"]
      - values: {"p":12}
        answers: ["sha256:361229db859e29b8544e4465b84a798e03403aadc6f08c3d526ee51ac1dd2c92","sha256:54e29fefc4f0bd24d18c21946d561c3856f3d2b29fd5d3c5292fd0accae41288","sha256:ee6b12916f841e501a03f53a12d3ceb474b6cb4253a19e0979ead62b99ad02e9"]
      - values: {"p":100}
        answers: ["sha256:a650986ae312ba9ccce6ebafcc9a64a9caf402e34a568e009fe8f2cc4f6678ae","sha256:031ba1ff1004734ede871bc6964e9db3ad3ba7636c26e69ce5e369208cf4fbd1","sha256:95bf0764676054db55d6f05f6eafb456e579a70cd843b6c1d5ca4bc62b0c7347"]
      - values: {"p":5}
        answers: ["sha256:d3dd495794d6d6545203e833ab3f408a79c8eaf7f53c3bb2c393369362c70bad","sha256:bca70cb851139aeba07b6c4e597705ff9aa243bdfa0fc2db3c4381c550575259","sha256:44e39a01fb6d5de2a7cf8cd9b7440850fd5db3d6c52067e205e76190957316dd"]
      - values: {"p":25}
        answers: ["sha256:5bbd9d7ec0413f9cee707415eb88f11900624bd674c69a268f12642cd7cb314e","sha256:633a30acb69e51f6cc35e33a9da0417f40868c4c64d0b3c754768c89fb5bc667","sha256:db2e48dfc0d880e83c345567f92f3b9c525ac60694bd8fee18909c842ae6cb45"]
      - values: {"p":18}
        answers: ["sha256:ac813591c141f9b6eaec2a7982b98163b6993a741ed0b1377489adaabb7508ed","sha256:8b38799f190611b90913cbd6fac897b97b76e40c94bff52d45c2d6174a44d272","sha256:966282f3736f63552b1545b9573deb2076a924dd200d3225dd065d0cc4b2a532"]
  - id: por-que-no-dependen-del-tamano
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Explica por qué el seno de un ángulo agudo no depende del triángulo rectángulo que se use para calcularlo.
      (b) Demuestra que $\operatorname{sen}^2\alpha + \cos^2\alpha = 1$ y que $\operatorname{tg}\alpha = \frac{\operatorname{sen}\alpha}{\cos\alpha}$. (c) Deduce los valores exactos de las razones de $45^\circ$ y de $60^\circ$
      a partir de un cuadrado y de un triángulo equilátero.
    sealed: "gz64:H4sIAAAAAAACCn1UTW/TQBD9KyNrD0kwbeMCEkEcKnpCSHDHRJqsJ+6i9Y67H0ip5R/TIwdO/IT8MbSuvxKq3rwz4/fmzb7ZJnGsg1dskk2yWi1wuVrBLTvwVh0fTRk0O7Ak/XiQbIA0VMpVDH0UsAwFg8hz1PUdCvCKDBlwIQKRg/FvVQbU5GAh3l9t81wqK0U6+/EAUwJewxBfpoDu+AfuA4FjkxtHFf1E4yOUtMqTVQw3N0s4dKQaC3axEmrLNVup2ETeTWxdslRkPIFET56B60DOM1zCnarZkwkOgdykkgzE3gt2F7nJzWq12MUxfWLTQzgQKGDRAy1TEDsBC8nGqzLwEmiOLKTYRMVck0XP1mBFjSPTbrNeLryCPJfspsBHyPO9RdngNoNXsNtmbSO3WTsl5Cy0FlCzhW/KHx9Ltug+wCE3oq98hrmnaZuOdjjNWC9l2+wu5RQC3HXfJ1C+HJDEMCgZB/UFoVBYxiuAgiAYkAELiwXHY7wrEGsBlSooDsbdW59FK+zZVgjizdvBKc/Pbcx3HUl2p4FOwTpq64BnsoZIk7VPJjxXMwdai4soBLUPFnPzpIPug9LHR092JiUToBlqtJ6ideab1Ne4qDcdtF53ts9E2u3WWCuuxw2J+XdXL09hzJ/ru570SXb/l60zkXbuOFd/Wtp3ujgAarD06/jbRY0473N5kaSJDTurZLL53iTDZiab5HNwXu2VxE5kv74PeLa9cb81gsWH418DJg61pjjrgvRskJGmDsazSzZZm54Q3VIVt9BiB0QapYpY+2AKrMh41F0H03LAIVZ6NOXTo8AVj0/ES0Rfd90rBxpdbJgNdfc7s+vptQ0v5+j9QzzNHHRK9qP9B6kJdE2cBQAA"
  - id: r-radian
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es un radián?
    options:
      - |
        $1^\circ$
      - |
        $90^\circ$
      - |
        El ángulo cuyo arco mide lo mismo que el radio
      - |
        $\pi$ grados
    answers: ["sha256:56f161de8e14e250a09aeab4a3516220bc547ed5b6e34ab1415641b88f03f666"]
  - id: r-cuadrante-signos
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿En qué cuadrante el seno es positivo y el coseno negativo?
    options:
      - |
        Primero
      - |
        Segundo
      - |
        Tercero
      - |
        Cuarto
    answers: ["sha256:8524723e39c2611af70435ca13e76d0fe00943d69da9326b391ccf699c28909c"]
  - id: r-cos-60
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuánto vale $\cos 60^\circ$?
    answers: ["sha256:1e79479d4541bd0dfdcf266993853a80c9ad6ad3ac1408800ee95bfc372350f8","sha256:baea27cdf709253a90d935b472156fdfb1c3903540b6418945b67bddaa934471","sha256:27139b5a48fc3622db62e146e33b7586114d5b1afbeb8965f7920db2cc68f627"]
  - id: r-acotado
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Entre qué valores está siempre el seno de un ángulo?
    options:
      - |
        Puede valer cualquier número
      - |
        Siempre es positivo
      - |
        Está entre $0$ y $90$
      - |
        Está entre $-1$ y $1$
    answers: ["sha256:ff91b481a5b4c5f39757b524eaac669d56a1aa25c8b862534794e159d71d4bbe"]
  - id: r-complementarios
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿A qué es igual $\operatorname{sen} 70^\circ$?
    options:
      - |
        $\cos 20^\circ$
      - |
        $\operatorname{sen} 20^\circ$
      - |
        $-\cos 20^\circ$
      - |
        $\operatorname{tg} 70^\circ$
    answers: ["sha256:faa051c5be6d363805019027080d9532adfe055c5e58a3bde3d49e7318dc5b7a"]
  - id: r-vuelta-radianes
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuántos radianes tiene una vuelta completa?
    options:
      - |
        $\pi$
      - |
        $360$
      - |
        $2\pi$
      - |
        $\frac\pi2$
    answers: ["sha256:09927b20112400b43ab33827b99bffc8b2636242d9c339d035bb0234216cdd32"]
  - id: r-tangente-90
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuánto vale $\operatorname{tg} 90^\circ$?
    options:
      - |
        $0$
      - |
        No existe (el coseno vale $0$)
      - |
        $1$
      - |
        $\infty$ exactamente
    answers: ["sha256:69624b99f5acf8dc2b873b33e4ae2404d2a9793b4d06d53f057830362ac623e6"]
---

# Razones trigonométricas: grados y radianes, seno, coseno y tangente, relaciones fundamentales, triángulos rectángulos y circunferencia goniométrica

¿Cómo se mide la altura de una montaña sin subir a ella, o la distancia a un barco desde la costa? Con un ángulo y una distancia
conocida basta, gracias a la **trigonometría** («medida de triángulos»). Sus herramientas, el seno, el coseno y la tangente, relacionan
ángulos y longitudes, y después resultan ser las funciones que describen todo lo que gira u oscila: ondas, corrientes alternas,
péndulos, señales. Este nodo las define en el triángulo rectángulo y las extiende a cualquier ángulo con la circunferencia
goniométrica.

## Objetivos

Al terminar sabrás:

1. Medir ángulos en grados y en radianes y pasar de una unidad a otra.
2. Definir y calcular seno, coseno y tangente de un ángulo agudo.
3. Usar las relaciones fundamentales y los valores exactos de $30^\circ$, $45^\circ$ y $60^\circ$.
4. Resolver triángulos rectángulos y problemas de alturas y distancias.
5. Extender las razones a cualquier ángulo y reducirlas al primer cuadrante.

## Qué debes dominar antes

[[mat-triangulos-pitagoras]] (Pitágoras), [[mat-semejanza-tales]] (triángulos semejantes) y [[mat-funciones-graficas]] (coordenadas y
cuadrantes).

> [!question] Test de entrada
> 1. Hipotenusa de catetos $6$ y $8$.
> 2. ¿Son semejantes dos triángulos rectángulos con un ángulo de $35^\circ$?
> 3. ¿En qué cuadrante está el punto $(-2, 3)$?
>
> Respuestas: $10$; sí (criterio AA); en el segundo.

## 1. Para qué sirve

- **Topografía, navegación y astronomía**: alturas, distancias inaccesibles, triangulación, posicionamiento.
- **Física**: descomponer vectores (desplazamientos, velocidades) en componentes ([[fis-medida-movimiento]]); planos inclinados.
- **Ondas y señales**: sonido, luz y corriente alterna se describen con senos y cosenos (el tema `mat-funciones-trigonometricas`).
- **Gráficos, videojuegos y robótica**: giros, rotaciones y cinemática de brazos articulados ([[rob-cinematica]]).

## 2. Grados y radianes

> [!practico]
> Los grados dividen la vuelta en $360$ partes (una elección histórica). Los radianes miden el ángulo por la longitud del arco: un
> ángulo de $1$ radián abarca un arco tan largo como el radio. Como la circunferencia mide $2\pi r$, una vuelta completa son $2\pi$ radianes.

$$
360^\circ = 2\pi \text{ rad} \qquad\Longrightarrow\qquad 180^\circ = \pi \text{ rad}, \qquad 1 \text{ rad} \approx 57{,}3^\circ .
$$
Para pasar de grados a radianes se multiplica por $\frac{\pi}{180}$; al revés, por $\frac{180}{\pi}$. *Ejemplos:* $60^\circ = \frac\pi3$, $90^\circ = \frac\pi2$, $\frac{3\pi}{2} = 270^\circ$.
Los radianes son la unidad natural en matemáticas superiores (la longitud de un arco es simplemente $L = \theta\, r$).

## 3. Razones de un ángulo agudo

> [!practico]
> Una rampa sube $1$ m por cada $4$ m de recorrido horizontal. Si construyes otra el doble de larga con la misma inclinación, subirá
> $2$ m por cada $8$: la proporción es la misma. Las razones trigonométricas son esas proporciones fijas que caracterizan a un ángulo.

En un triángulo rectángulo con un ángulo agudo $\alpha$, cateto opuesto $a$, cateto contiguo $b$ e hipotenusa $c$:
$$
\operatorname{sen}\alpha = \frac{a}{c}, \qquad \cos\alpha = \frac{b}{c}, \qquad \operatorname{tg}\alpha = \frac{a}{b} .
$$
*Ejemplo:* en un triángulo de lados $3$, $4$ y $5$, el ángulo opuesto al $3$ tiene $\operatorname{sen}\alpha = 0{,}6$, $\cos\alpha = 0{,}8$, $\operatorname{tg}\alpha = 0{,}75$. Como los
triángulos rectángulos con el mismo $\alpha$ son semejantes, las razones solo dependen del ángulo. También se usan sus inversos: cosecante,
secante y cotangente.

**Relaciones fundamentales**: $\operatorname{sen}^2\alpha + \cos^2\alpha = 1$ (es Pitágoras dividido entre $c^2$) y $\operatorname{tg}\alpha = \dfrac{\operatorname{sen}\alpha}{\cos\alpha}$. Con ellas, conociendo una razón
se calculan las demás. *Ejemplo:* si $\operatorname{sen}\alpha = 0{,}6$ y $\alpha$ es agudo, $\cos\alpha = \sqrt{1 - 0{,}36} = 0{,}8$. Además, para ángulos complementarios,
$\operatorname{sen}(90^\circ - \alpha) = \cos\alpha$.

**Ángulos notables** (del cuadrado y del triángulo equilátero partido por su altura):

| | $30^\circ$ | $45^\circ$ | $60^\circ$ |
| --- | :---: | :---: | :---: |
| $\operatorname{sen}$ | $\frac12$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ |
| $\cos$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $\frac12$ |
| $\operatorname{tg}$ | $\frac{\sqrt3}{3}$ | $1$ | $\sqrt3$ |

## 4. Resolver triángulos rectángulos y medir alturas

**Resolver** un triángulo es hallar todos sus lados y ángulos. En un rectángulo basta conocer dos datos (uno de ellos un lado): con un lado y
un ángulo se usan las razones; con dos lados, Pitágoras y una razón inversa ($\alpha = \arcsin\frac ac$, tecla $\sin^{-1}$).

*Ejemplo (ángulo de elevación).* Desde $25$ m de un árbol se ve su copa con un ángulo de $40^\circ$ (ojos a ras de suelo): la altura es
$25 \cdot \operatorname{tg}40^\circ \approx 20{,}98$ m.

**Doble observación**: si no se puede llegar a la base, se miden dos ángulos $\alpha$ y $\beta$ desde dos puntos alineados separados una distancia $s$.
Con $x$ la distancia del punto cercano a la base, $h = x\,\operatorname{tg}\beta = (x + s)\operatorname{tg}\alpha$: un sistema de dos ecuaciones con $x$ y $h$
([[mat-sistemas-dos-incognitas]]).

## 5. Razones de cualquier ángulo: la circunferencia goniométrica

> [!practico]
> Dibuja una circunferencia de radio $1$ centrada en el origen y gira un radio desde el eje $X$ positivo un ángulo $\alpha$, en sentido contrario
> a las agujas del reloj. El punto al que llega tiene coordenadas $(\cos\alpha, \operatorname{sen}\alpha)$. Para ángulos agudos coincide con lo anterior, y ahora
> vale para cualquier ángulo, también mayores de $90^\circ$ o negativos.

Para cualquier $\alpha$, si $P$ es el punto de la **circunferencia goniométrica** (radio $1$) que corresponde a $\alpha$:
$$
\cos\alpha = x_P, \qquad \operatorname{sen}\alpha = y_P, \qquad \operatorname{tg}\alpha = \frac{y_P}{x_P}\ (x_P \neq 0) .
$$
Consecuencias: $-1 \le \operatorname{sen}\alpha, \cos\alpha \le 1$; las razones se repiten cada vuelta ($\alpha + 360^\circ$); $\operatorname{tg}90^\circ$ no existe.

**Signos por cuadrantes**: en el 1.º, todas positivas; en el 2.º, solo el seno; en el 3.º, solo la tangente; en el 4.º, solo el coseno.

**Reducción al primer cuadrante**: las razones de un ángulo valen, salvo el signo, lo mismo que las de su **ángulo de referencia** (el agudo
que forma con el eje $X$):

- 2.º cuadrante: $180^\circ - \alpha$; 3.º: $\alpha - 180^\circ$; 4.º: $360^\circ - \alpha$.
- *Ejemplos:* $\cos120^\circ = -\cos60^\circ = -\frac12$; $\operatorname{sen}210^\circ = -\operatorname{sen}30^\circ = -\frac12$.

> [!formal] Con rigor: por qué la definición en la circunferencia extiende la del triángulo
> Si $\alpha$ es agudo, el punto $P(x, y)$ de la circunferencia unidad, su proyección sobre el eje $X$ y el origen forman un triángulo rectángulo de
> hipotenusa $1$, cateto contiguo $x$ y opuesto $y$: $\cos\alpha = \frac x1$, $\operatorname{sen}\alpha = \frac y1$, como antes. Para cualquier $\alpha$, $x^2 + y^2 = 1$ da $\operatorname{sen}^2\alpha + \cos^2\alpha = 1$,
> y las simetrías de la circunferencia respecto de los ejes y del origen dan las fórmulas de reducción (por ejemplo, el punto de $180^\circ - \alpha$ es
> el simétrico de $(x, y)$ respecto del eje $Y$, $(-x, y)$). $\blacksquare$

## 6. Errores típicos

- Tener la calculadora en radianes cuando se trabaja en grados (o al revés).
- Confundir cateto opuesto y contiguo (dependen del ángulo que se mira).
- Olvidar el signo al reducir al primer cuadrante.
- Escribir $\operatorname{sen}^2\alpha$ como $\operatorname{sen}(\alpha^2)$, o creer que $\operatorname{sen}(2\alpha) = 2\operatorname{sen}\alpha$.
- Usar las razones de un triángulo que no es rectángulo.
- Pensar que $\operatorname{sen}^{-1}$ (arcoseno) es $\frac{1}{\operatorname{sen}}$.

## 7. Resumen

- $180^\circ = \pi$ rad; multiplicar por $\frac{\pi}{180}$ o $\frac{180}{\pi}$.
- $\operatorname{sen} = \frac{\text{op}}{\text{hip}}$, $\cos = \frac{\text{cont}}{\text{hip}}$, $\operatorname{tg} = \frac{\text{op}}{\text{cont}}$; no dependen del tamaño.
- $\operatorname{sen}^2 + \cos^2 = 1$; $\operatorname{tg} = \frac{\operatorname{sen}}{\cos}$; complementarios intercambian seno y coseno.
- Valores de $30^\circ$, $45^\circ$, $60^\circ$; resolución de rectángulos; alturas por elevación y doble observación.
- Circunferencia goniométrica: $(\cos\alpha, \operatorname{sen}\alpha)$; signos por cuadrantes; reducción al primer cuadrante.

## Repaso: lo que debe quedarte dentro de un mes

1. Qué es un radián y cuántos hay en una vuelta.
2. Las definiciones de seno, coseno y tangente y por qué no dependen del triángulo.
3. La relación fundamental y cómo se usa.
4. Los valores de $30^\circ$, $45^\circ$ y $60^\circ$ y de dónde salen.
5. Cómo se calcula la razón de un ángulo del tercer cuadrante.

## Siguiente

[[mat-resolucion-triangulos]] (triángulos cualesquiera: teoremas del seno y del coseno).
