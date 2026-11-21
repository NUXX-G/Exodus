---
id: mat-polinomios-factorizacion
title: "Polinomios: división, regla de Ruffini, teoremas del resto y del factor, raíces, factorización y fracciones algebraicas"
area: matematicas
trunk_level: 3
prerequisites: [mat-expresiones-algebraicas, mat-ecuaciones-segundo-grado, mat-divisibilidad]
academic_sources:
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 4: «Expresiones algebraicas. Polinomios», secciones 3.1-3.5 (fracciones polinómicas, división de polinomios, regla de Ruffini, igualdades notables, operaciones con fracciones algebraicas). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/04%20Polinomios%203.pdf"
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 3: «Polinomios. Fracciones algebraicas», secciones 3 (división, fracciones algebraicas) y 4.1-4.6 (factorización, raíces, regla de Ruffini, cálculo de raíces, factorización y fracciones algebraicas, productos notables). Apuntes Marea Verde. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/03_Polinomios_4B.pdf"
hints:
  - "Concepto: dividir polinomios es como dividir números: P = divisor · cociente + resto, con el resto de grado menor que el divisor. Si al dividir entre x − a el resto es 0, entonces a es una raíz y x − a es un factor: factorizar es ir encontrando raíces."
  - "Herramienta: teorema del resto (el resto de P(x) : (x − a) es P(a)); candidatos a raíces enteras: divisores del término independiente; para cada raíz, Ruffini baja un grado; al llegar a grado 2, fórmula o identidades notables. Antes de todo, saca factor común."
  - "Documentación: Marea Verde 3.º ESO cap. 4 (sección 3); 4.º ESO B cap. 3 (secciones 3 y 4)."
exercises:
  - id: division-larga
    tier: 2
    prompt: |
      Divide $P(x) = {{p}}$ entre ${{d}}$. El resto es de la forma $ax + b$. Respuesta: `a;b`.
    variants:
      - values: {"p":"x^{4} + 2x^{3} - 3x + 5","d":"x^{2} + 1"}
        answers: ["sha256:5e65fb69cf15e9b415267655ef869e8d78cf75f733ff88f18c01b7b0fc90298d"]
      - values: {"p":"2x^{4} - x^{3} + 3x^{2} + x - 4","d":"x^{2} - x + 2"}
        answers: ["sha256:93114b41863ff1e986406f8be307b11923c3734f377f78af11fa7b06ed0d5156"]
      - values: {"p":"3x^{4} - 2x^{2} + 7","d":"x^{2} + x - 1"}
        answers: ["sha256:8f9e1958fbfe5f9acad3ce47a8f98b4caa24e86a0bb7172a943c2e7e15d9b895"]
      - values: {"p":"x^{4} + 4x^{3} + 3x^{2} + 2x + 1","d":"x^{2} + 3"}
        answers: ["sha256:ffabf8ca168824c73975dd664888eef2fe1cbd9af3c5234d95c7874300c17d31"]
      - values: {"p":"2x^{4} + 5x^{3} + 2x^{2} - 6x","d":"x^{2} + 2x + 1"}
        answers: ["sha256:85855cd78ff369de1bd910dfeab9fe0afaabba6cb580765b74941c1d35bbb774"]
      - values: {"p":"x^{4} - 3x^{3} + 4x + 9","d":"x^{2} - 2"}
        answers: ["sha256:eaceb3eb00af9ea223e7d136bd5c22eb6291869896c938e9d0bcf91ddf39258a"]
  - id: regla-de-ruffini
    tier: 1
    prompt: |
      Divide ${{p}}$ entre ${{d}}$ por la regla de Ruffini. Escribe los coeficientes del cociente de mayor a menor grado y, al final, el
      resto, todo separado por `;`.
    variants:
      - values: {"p":"3x^{3} + 4x - 1","d":"x - 2"}
        answers: ["sha256:9433d5dead423e200a424afcdecdf66600b502d871ccf11039d51298084fc997"]
      - values: {"p":"x^{3} - 5x^{2} + 6","d":"x + 1"}
        answers: ["sha256:3ddb8d130f56607c4f7e6ba585b486c8b3dfd69c930c01976febecb565271dc2"]
      - values: {"p":"x^{4} + x^{2} - 3x + 2","d":"x - 3"}
        answers: ["sha256:987c8580024cfc8e17bad98908b8277ad5b7f408ea3731e56afcedf981e320d3"]
      - values: {"p":"2x^{3} + 2x - 8","d":"x + 2"}
        answers: ["sha256:69d33ec3886b2701b89b2942a874b92b47ab8e8164dd019ca11ef25d39f4d55c"]
      - values: {"p":"2x^{3} - 4x^{2} + x + 5","d":"x - 1"}
        answers: ["sha256:a283d74c9182e70f3479e6016d31ffde654c1dbffbce55ab972ffdbeb186b04d"]
      - values: {"p":"x^{3} + 3x^{2} - 7x","d":"x + 3"}
        answers: ["sha256:97d357040851b0b95e623b78d14bd6b1b738a0528abe2c3050c4cdcf15fe97ca"]
  - id: teorema-del-resto
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Sin hacer la división, ¿cuál es el resto de dividir $P(x) = {{p}}$ entre ${{d}}$?
    variants:
      - values: {"p":"2x^{4} + x^{3} - 2x + 3","d":"x - 2"}
        answers: ["sha256:3bdeca30f4eb00f33cb82c6d21e476946ea2669f7f6e9fce4681a75699151835","sha256:fa37f065b5543bc05d69c95fe31e2f483ea62fe5c29a46fb226a837d49cc3b18","sha256:f2dfebaccbf401138391711fdd7bf724282d0f895cc39cbef7446b3aeb962665"]
      - values: {"p":"-x^{3} + 4x^{2} - 5","d":"x + 3"}
        answers: ["sha256:b52c62eaf5b2abf5a44adc69ee908fb4db8751655dd692bf1fde28bc667e6404","sha256:7ee115d1d769dbfa9b09359553316fa367baa2e10add242fa1958d980282ea76","sha256:44054df2b2f854ab3f530769984c86d8e82ab363d6200f2688018f086a6c4f31"]
      - values: {"p":"x^{5} + x^{4} + x^{3} + x^{2} + x + 1","d":"x + 1"}
        answers: ["sha256:447465e9cf523071f303e353293dc250c4e11039df498d53ddc3474e2f528cdc","sha256:e2d6c96250641743bc549ad4cb5879da1d8e878877c062ac25b043698891e2ee","sha256:aefd4319f7dd05c80d695284c70ffcbb67cf2331158f4337c03edd87eb217737"]
      - values: {"p":"x^{4} - 6x + 10","d":"x - 3"}
        answers: ["sha256:e53f0c119d0ec888f99510ce9fcd4fd1611891f432264c0cb9384bca81277ad6","sha256:34d8a8d40199087f7808581a8c3586ea54074d9b6070ddc39cbc506b8fa62f83","sha256:f1fa12df1062626a482ea350409d6c97b6474155f327f66006006d81ffc002c3"]
      - values: {"p":"2x^{3} - 3x^{2} + 7x - 2","d":"x - 0{,}5"}
        answers: ["sha256:845da56cff2ab83b2c64764a8223fbec603439e234429944a59e2c19eb5c6417","sha256:7a1eb5fcc7039c965626add88ce3695b0841cd58dbecc1270c1ba568786b5f5a","sha256:46b54c8fc59ad35fabbb3809744d2070d3d182628a802e0f638e2e5e4c1aad6c"]
      - values: {"p":"2x^{4} - 9x^{2} + 4","d":"x + 2"}
        answers: ["sha256:b02692f74fed707e9e31891ba23b5aff538690fe94a0a9c60e2aa72d22127215","sha256:079b59d3e602474bbcff31408c72c14f444242356c4647a02a76ffc80e85926a","sha256:64f0f0541ce7756be59603f7c8c0426d85c5841f17a5856e19d0e596883c936b"]
  - id: parametro-divisible
    tier: 2
    type: numero
    sig: 10
    prompt: |
      ¿Qué valor debe tener $m$ para que ${{p}}$ sea divisible por ${{d}}$?
    variants:
      - values: {"p":"x^{3} + 2x^{2} + mx + 6","d":"x - 2"}
        answers: ["sha256:4f8b697fd78851acd1f8422ad9c9b2b47bcbf717196a18097dc3a0ae2bd9061f","sha256:c98c76e143540d899a3787a1cdb7a1fa545fdca07f9c43c590adf253e8926b92","sha256:c40c392b73baf77da0ba34241ac25597fc50629238c63c6820bde952e4dbd954"]
      - values: {"p":"x^{3} - x^{2} + mx - 4","d":"x + 2"}
        answers: ["sha256:4f80c32e1fd231d8f16767e207d1b9f1fa6d8276b4b087cffa184ce85f50f78c","sha256:bdcc112f68171580678e9ff7ba09fc7bc8cb7b445b1ba290e78b9b0b2edf9f69","sha256:fe4d1fafbed597fade93889f57603d2d3ab137944c67c00fff9058df42d7c154"]
      - values: {"p":"x^{3} + mx + 12","d":"x - 3"}
        answers: ["sha256:da807b7f4dd9a56592830a76ea8b438b2b55354199f8dbfa5e34c53ba9a4c4fe","sha256:43c36698b031d830c8ed15dfc316f119e153eb7b0bcdfd31b661feac67dc4d16","sha256:b5885a060b424afe11600e1a26fa0f3c39f266925b46c724fecab667740c5985"]
      - values: {"p":"2x^{3} + 3x^{2} + mx - 9","d":"x - 1"}
        answers: ["sha256:708a826cf8e17fc4fabc9af2859410da284445327d512efec179e5ffb99ace27","sha256:4f2d64451ad371a2be03c841213e0bf33f015088643df496c0b6dbf0192476cc","sha256:93823ec51b602818104e410948eb54c4de36870c146ffe70f8c6ed22bb43f290"]
      - values: {"p":"x^{3} - 2x^{2} + mx + 5","d":"x + 1"}
        answers: ["sha256:c431ffef98c2d1d2d01f3100ac2b299e916e4a23812d970105cab55d4e70f50c","sha256:a8f30a8ff5da2d0d2da0ce07576d877abc8ed64b89d3ffe0822184a85f35eb70","sha256:e18161fdf01ecdc42ab3078caaf46e6ccdfbaf3fb194b953acd34b2551c2a88b"]
      - values: {"p":"x^{3} + x^{2} + mx - 15","d":"x - 5"}
        answers: ["sha256:00c0f5d3106ea235bc68316666b6062a5ca7f7b8b369a799a097f414354facaf","sha256:1d774575e21fdac4454c1ad9e47dd496e0ef6132ae9c0e7350c65cdd946d889b","sha256:ae40efb5348582a08736d92dfda9c4d0aa4539c263557917e99e9104a0d74913"]
  - id: raices-enteras
    tier: 2
    prompt: |
      Halla las raíces enteras de ${{p}}$ (prueba con los divisores del término independiente). Escríbelas de menor a mayor separadas por `;`.
    variants:
      - values: {"p":"x^{3} - 5x^{2} + 2x + 8"}
        answers: ["sha256:97c4eb651f46cc994da6abd164a146506ff06cb29265d215ce172f09b93a778f"]
      - values: {"p":"x^{3} + x^{2} - 17x + 15"}
        answers: ["sha256:9fdffcb3d9927854b196a25d95228a706dcc29bbfc33f7c49ad4ee63781e1c93"]
      - values: {"p":"x^{3} - x^{2} - 24x - 36"}
        answers: ["sha256:4d133918b9f41493364ac6e5a5fdcd8e48e76e6598b414301cca510c54a08bb1"]
      - values: {"p":"x^{3} - 21x - 20"}
        answers: ["sha256:8e88d37a954769ea0adeaef007c38e2dba8a63431951519830d028228b128bfa"]
      - values: {"p":"x^{3} + x^{2} - 24x + 36"}
        answers: ["sha256:969ab3a2554f3653d36a3eaf03439d775396f0568b8615aee39dd625a8cbe2ce"]
      - values: {"p":"x^{3} - 10x^{2} + 17x + 28"}
        answers: ["sha256:44eb1b41ecba7b3ff16cc100eb22f30791705271973be9f42550b557758cdf77"]
  - id: raiz-doble
    tier: 2
    type: numero
    sig: 10
    prompt: |
      El polinomio ${{p}}$ tiene una raíz doble. ¿Cuál es?
    variants:
      - values: {"p":"x^{3} + x^{2} - 16x + 20"}
        answers: ["sha256:c72e8e156634853c755800232c4465cb2bc2732a2315bab8ea61ab8ae7e454c2","sha256:4b5e50072a4761b74f96583eab70988717577a3e10855a32f69b9972e604ea68","sha256:b0e12b2b7a5dd458b5955ae774ed803b451f4563ef14a72080a20f3633be56fc"]
      - values: {"p":"x^{3} - 2x^{2} - 7x - 4"}
        answers: ["sha256:0e76f3e4f6bf2273b6b9ada572ed60e42fd0fbd6274920a489bfb1a1b7a641d2","sha256:3cdc9ff347d02d206637ee16563cc599ec6f6b0fa8284159354ee09761f96779","sha256:4f7db8cd0f650464f84642a19ad167a62cebd92d5025dda576fecea932a5495c"]
      - values: {"p":"x^{3} - 7x^{2} + 15x - 9"}
        answers: ["sha256:cfc8c63e9c1c2ea0516c23df59378d72b68755df3ab073623b928323a15d0541","sha256:fa79c6057ca51252ca631a9f68331f6e83955fc612d6423d0bdb5e7db1bf6321","sha256:7a07b4fa947d38f343775c6d3d2ab2b784f4a07f27236b8ce0852f52614208da"]
      - values: {"p":"x^{3} + 4x^{2} - 3x - 18"}
        answers: ["sha256:ca37c18215836f9219206682d243927bff24b2120ba3fb186728b64cfb8dd7a0","sha256:11c9f527b0c74f73ed9f37b86aab4b0c041a34215ebad17ced63d5b31e9d63a6","sha256:0422cbdf9f3cce662658f454d1b18c48d45f1b28786948c3b156819f2f71bc86"]
      - values: {"p":"x^{3} - 6x^{2} + 32"}
        answers: ["sha256:59efdb9b3efaf90556c4caa7851c435dd5281e545379996ad91d953767921877","sha256:964ba7137ef7bf5a685fbc7746e602ceee996495c3d8b6c108359117dda7807f","sha256:6f8c7ebdbec5b0fdc57f1779683f3f45cfa0207a9d0c2e424dc2fd003a5dd89c"]
      - values: {"p":"x^{3} - 2x^{2} - 20x - 24"}
        answers: ["sha256:ea5b7a1bdf94550c72741c48221ff97a9260369084b155ba66b9627fd52840de","sha256:348861905390dd7153e4cc8f6d91b7572077dbb22d33d87457ba6442aba79d01","sha256:c84c6735afc66ef0b54731a67e33a6cab033ee596edd19fce12e411c8886b83c"]
  - id: raices-racionales
    tier: 3
    prompt: |
      Halla todas las raíces de ${{p}}$ (alguna es fraccionaria: prueba también $\pm\frac{\text{divisor del término independiente}}{\text{divisor del coeficiente principal}}$).
      Escríbelas de menor a mayor separadas por `;`, las fraccionarias como `p/q`.
    variants:
      - values: {"p":"2x^{3} + x^{2} - 5x + 2"}
        answers: ["sha256:b6d58893e79f9220705ec8e265fe54a30b4f70276a03469403476d4a4620ed8c"]
      - values: {"p":"3x^{3} - 4x^{2} - 5x + 2"}
        answers: ["sha256:f31f04212f56048ebd26d5c6638493d7a250525ed99a1142efcb17e0e9405e91"]
      - values: {"p":"2x^{3} - 3x^{2} - 5x + 6"}
        answers: ["sha256:8d4d84b3a4feb5a775af8550b9a7d49235de4e31c8014d945b7facf84fae776d"]
      - values: {"p":"4x^{3} + 3x^{2} - 9x + 2"}
        answers: ["sha256:3c4ad566fa887380a833100d89b6754258bce7fc0f771a765ef0479ced66ff22"]
      - values: {"p":"2x^{3} - 3x^{2} - 5x"}
        answers: ["sha256:dc09bb2ae00847ad0c6556749ea9dff1b370e0515e88e3108dd72175dd92ceef"]
      - values: {"p":"3x^{3} - 10x^{2} + x + 6"}
        answers: ["sha256:4fd1dde562e0f4c0198b96988dff97b086e7ef9954511f1ce4c72473c2aee68c"]
  - id: factorizar-y-contar-raices
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Factoriza ${{p}}$ todo lo posible con números reales (factor común e identidades notables). ¿Cuántas raíces reales **distintas** tiene?
    variants:
      - values: {"p":"2x^{3} - 18x"}
        answers: ["sha256:11e2bb6562c003645ab67a7f6300af29edb290b755cdc7abaaf521772fb56de8","sha256:6cb5eead9c2de3e75fdbaaf9c1c33b1ac674a903488fa8c156b86ba7e0f3d515","sha256:abccbed766ad04a621f63364869166b975049cfb8175fabde7d79a19039d072e"]
      - values: {"p":"x^{4} - 10x^{3} + 25x^{2}"}
        answers: ["sha256:2cd7e24ec4084ddc5ffb9d4266c2f58a0b1b656ac58b04eb6517acee687eade2","sha256:5a43bb9bbeeed98c1023287995ea3664d315a84bf38053a8da79043b0d93b920","sha256:b8800369fd40c03ab5aa57f08bc8836f8da17dc8fd4c7f0893cf7fb15d345f95"]
      - values: {"p":"x^{4} - 16"}
        answers: ["sha256:5242ce06dd94910b15bc0296a99ba9516840ee30429a9bacf7e2695046a55595","sha256:0edcd5b0f7fb0154d6cf4eb5aface524ef20e23c1c0aa41fa6e23b843f9eacc5","sha256:5b1bd83dc326449636af58127e70d462f22114ef95f770c7b1d4439b228aa8a2"]
      - values: {"p":"3x^{3} + 12x^{2} + 12x"}
        answers: ["sha256:0d6475d45c05e1b7099024fc92d2e07f604a29f6f5d9ede117eebd8c39327b11","sha256:5e99874b35140182a130272880f9a8c12c7f6eeecdee218f386c11aec9ba8ab2","sha256:6d5621332d5cf4227782313a84539cc72552bf0214a21179ae353871de47522a"]
      - values: {"p":"x^{4} - 49x^{2}"}
        answers: ["sha256:f8eb39250fd01ba5f092a78fb43ffcddfed581912f061085590ba6a4b695bb93","sha256:70582381277458f0fd5fae8c8c7952b917826d7d173f6985c86e896d427111f2","sha256:c7527bd3a6a14479794b03f45d00ee4fb811aea8ef61d68ff0e3843d8f6957b1"]
      - values: {"p":"x^{3} + 4x"}
        answers: ["sha256:07c50746b603bdf9efadae741d78a9becc92c4c28acecdc23c155237cbc65cf1","sha256:1c2d7b9d387161c5e1713ea95fcedfe686705f5cd2fbeb2cf6d721571eaf3978","sha256:2a94ff5689bbab9a2ea7e908fd999269a553077625fa633413a877986b7d92c4"]
  - id: simplificar-fraccion-algebraica
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Simplifica la fracción algebraica $\dfrac{{{n}}}{{{d}}}$ factorizando numerador y denominador. La fracción original no está definida
      en $x = {{a}}$, pero la simplificada sí: ¿cuánto vale la simplificada en $x = {{a}}$?
    variants:
      - values: {"n":"x^{2} - 4","d":"x^{2} - 6x + 8","a":2}
        answers: ["sha256:fa0c2ad9b9ee78b56b69a39790f6bb956e6c87b8be994fc0a88fedacf5412d5b","sha256:0c7dc27099cea40d3d8325eca69128dd855ac5b41aa583d8c08d8a18e7279bca","sha256:8844329412869910e84ce27a3c794b35415ec4c44ec7249f834769d75922463b"]
      - values: {"n":"x^{2} - 16","d":"x^{2} + 3x - 4","a":-4}
        answers: ["sha256:fa302970cdeaf382427c091dc59dac0aa74e8eb810be45abb8db6b009835acfa","sha256:04c29e956279a62decc71611aca0847b90f417a3ea18fcee27622c178b7faed5","sha256:fb98c933c31616114f26f9b49a79f14d592474bcb387072d44a4fa4df66c8fde"]
      - values: {"n":"x^{2} - 9","d":"x^{2} - 2x - 3","a":3}
        answers: ["sha256:f38bfe7758f8854c33966b0f7ea7d1edffb55a5afa6105a6dac4295ed246ccc0","sha256:2b13c3cd979cd36f35e24c98a245e12ccb36d0727f634f793383d59636b0e525","sha256:8d5a3b36829bffd1bdfe78bdcc663068490a73da28a8693ff718562d33819f7f"]
      - values: {"n":"x^{2} - 1","d":"x^{2} - 6x + 5","a":1}
        answers: ["sha256:a01863f1f314aadc2219f079b623f86b252004ba6299a4abcd291825242ddd45","sha256:14381c6f64a9ea382533ba05ed5b3ddb337a73c56d922cb7589768bcc3eb399d","sha256:b41ce87ba27c93714d68577b950ac94bf94234ebd8aa195b39b461e309728ee6"]
      - values: {"n":"x^{2} - 25","d":"x^{2} - 6x + 5","a":5}
        answers: ["sha256:bbbbf9713f0a3154d85356a77f60a2a8434b714ec4c6b011e625dca9dbedaf60","sha256:3cd522017238381e043efd5dff7cb7b4b90dc09f0e225ad5e187c4c1203e1b11","sha256:93135c21f97cdb8bbfa29a18fce971121e6cf5687b274b5c25d92b6fd43d6667"]
      - values: {"n":"x^{2} - 4","d":"x^{2} + 8x + 12","a":-2}
        answers: ["sha256:d6f50878f01deb49525e11f721c2b7e047200de65eb4e3c8385c4a97fa95aeec","sha256:422850e27fabe8fa6909dea175ef8a5c5b0102286373840ae9bc4d038da9c08b","sha256:82b9565fe3a0538563dc35564e47108a57f7b51ecc3ca71d494cec2946a493bc"]
  - id: coeficiente-principal
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un polinomio de grado $3$ tiene raíces ${{r1}}$, ${{r2}}$ y ${{r3}}$, y $P(0) = {{k}}$. ¿Cuál es su coeficiente principal?
    variants:
      - values: {"r1":1,"r2":2,"r3":3,"k":-24}
        answers: ["sha256:7464bc99c4a62465e562525e3d768ac1776c9d3dc27fe9979e734eb88c245dc0","sha256:b05e9823881336a6ea29835d5cd4fd497c6ead0c4b15a4926475cc22226fd143","sha256:c61a4e14accc37c77746d5c8899d104062680d287a376e651820dcaff709cea6"]
      - values: {"r1":-1,"r2":2,"r3":4,"k":24}
        answers: ["sha256:0db62b73a2d707cc98d203e12253333ed526265158e984186d07e9338562894f","sha256:627d21e2365b99b6ddd884da5b1e2e51ebfde5307976550b24119358a694e8d3","sha256:eb834c659018b67f651ff4a6a0063eb343c10ec5fb08da394fb0a4a401130b8e"]
      - values: {"r1":1,"r2":-3,"r3":5,"k":45}
        answers: ["sha256:987b9a0988750d6b4ceeb48ab206c85cde99958657bc2a38c3c86ffc275feff2","sha256:4a99f25caab80bf7609854e22cf833d09d6ad512884113735385d1e4130ec861","sha256:aab19fec4355c08326976e03ab66dea0b460cdeed37761031101153e77d8c5ad"]
      - values: {"r1":2,"r2":-2,"r3":1,"k":20}
        answers: ["sha256:f3d97720425493b5cec77456de2972045019394b56ffbf85b3bd6c8f65a370d7","sha256:4b7cfeb6965926ed96690602d0f8cf6fe989e601fb8a74488141efd443767c79","sha256:05fc77be47f4ecf6bd172bc116237324fbe2944cc4beeff5c4de0869d82b0a5c"]
      - values: {"r1":-1,"r2":-2,"r3":-5,"k":30}
        answers: ["sha256:4709187f1e7d8424e97e318d941f6ed7bdb1f9066cd850a0fa053b66bab119a5","sha256:59ac2fd851d6682b2bdd1c79a5eecbfed299d9bb74edbe4bf0eb6580611484cd","sha256:ffa76b2df9250fdb783a58df958eea500eed764a8096e335b240a9a2ecdfc490"]
      - values: {"r1":3,"r2":4,"r3":-1,"k":-24}
        answers: ["sha256:50fed10bef69d427cca48c3c7066fe4f09657cd6d72b92a4c6f52fd2233cd9e0","sha256:c9514ef4be5053a94cd676da3d3b11fda3864c5e1a914396a61cf5200ccdf66b","sha256:d35cd6c5ff02886adc76660aecedc55b4dfd93e6526260f4203a535ebe474570"]
  - id: resto-de-potencia-grande
    tier: 2
    type: numero
    sig: 12
    prompt: |
      ¿Cuál es el resto de dividir $x^{{{n}}} {{c}}$ entre ${{d}}$?
    variants:
      - values: {"n":50,"c":"- 3","d":"x + 1"}
        answers: ["sha256:9b4682704ce2b4ac8713a7a694aacfde3f518c9bd3ce3731a87dd81ffa4f3b09","sha256:89acbd74ba4240184efdd0f5c1e5e61b3bfb89b783f2f4dd5b1d5145c2dc8238","sha256:b1d4b120c12ae12843095feff43ee95ac4bd71b172dac318325a8b2af76c68ef"]
      - values: {"n":37,"c":"+ 2","d":"x + 1"}
        answers: ["sha256:04f61c2751970d07d7ef7423507cccb556f83d9c81a7d27f8d51cb749dc42958","sha256:d43ecdff31e251c5d1950005ab9c4dc54efb24c21742e6feab493a5eabcd3d36","sha256:b7bbbd970337962dff3276ad683cd977b8880a6b39d9afec774d51e2604fccdd"]
      - values: {"n":21,"c":"- 5","d":"x - 1"}
        answers: ["sha256:4dc540ef5658b81c18df73406331ab3b43222a8b2d49ce02fca0401bdc9d582c","sha256:d8e112e48e40e49b5c311fc38b3b6aee1cfea95a843a1be1a1c548336c7acbe9","sha256:f0d52129ea45b54f05cf2c0b0b002b0a2511afcdc2d0abf99ebd301e12681bb8"]
      - values: {"n":100,"c":"+ 4","d":"x - 1"}
        answers: ["sha256:7d83f5d67ee484b7ec5a58122dc622fe3ed5ec9efa1457160db00713c54bf27f","sha256:2e5595c8871e9eb4560bc799b9ac2a86d04e133acb89468d04e1b663414f5c2f","sha256:907c0ad08b177a09a2df69e453a33e60aa18d9173425f8210d9f55aef9d2d5ed"]
      - values: {"n":15,"c":"- 1","d":"x - 2"}
        answers: ["sha256:0dc2452d62c07dfe7620f037a7334cf0631543745b85237d625bddb9fbd68865","sha256:ad8e8d1273f2e7bc334cecd88dfd97d32e19637d88f43a3edf08d598271cc23f","sha256:932dd6891450a5fa35e2e2881cd988c20e8a42eceff259066faef39977a3d88e"]
      - values: {"n":64,"c":"+ 9","d":"x + 1"}
        answers: ["sha256:df41685977a7f33da5b25796d35ee7fb561ce953fb31b7f5642254e4bdd78ff7","sha256:fd90d8195200cea14e139a780d6be5c690e39d664a70da2fbc2055331a41a47a","sha256:1c63ea0a27f0d7082dae7e914671c58f8bca135cd6e8b141a3765b0f615935e0"]
  - id: demostrar-teorema-del-resto
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra el **teorema del resto** (el resto de dividir $P(x)$ entre $x - a$ es $P(a)$) y deduce de él el **teorema del factor**
      ($x - a$ divide a $P(x)$ si y solo si $a$ es raíz de $P$). Explica por qué, si un polinomio con coeficientes enteros tiene una raíz entera,
      esa raíz divide al término independiente.
    sealed: "gz64:H4sIAAAAAAACCn1Sy27bMBD8lYHAgx+yYPdowIcgzaWnoOmtbIM1tS4IyFx3SRVOjXxQDv6BXvVjBRXZzgPIieByOLOzO4ciStMmL6FYFpPJNxblLaHmBsoxSTWZ4KpB7f/42ivM7Wg/NuCQlGH2mIEMRr+UaoFZmHGJ00ckz4Hx/LTlIIrfLWfQEhzRBoTu35ZVYNRUuIrd0YaeHiuMeuaxteV1LkyhBjtSQpIstDcV7tqYfGofOPQVrEBmmfujTDCHta6WhOt8n0KxgprKBhtem9yQS6LZ5clNb5VBMLcGxlq/2ZiLK44w80v9rPeiRCajlLrj30HwK3VHxzGPjZViVrvzOJml+4D9z4AprK0lRUxB9wvs+3Nu4CTACW+885lgoJGIh0yhg3xGGTXDY5lPCY6jDYbu51hhNspC+l6oZ5ipteWAOITZ4vENamwq3DR5Cd1TbsJHnDspQbE7Pq9XXw4wt1/hVhQcBWuKibBTWZOikWhDRkZRjv0qUvekWx8EPtS841D3dquiLLRdq3fF8vuhcOoTq5diWdxEp37NeBOaS2JOI3ESYqKQGA+Ip9icMpP5d21IEovlp8fylcJnrlvHefnpXWR69oYiaonw213jHTkvgeNHjF+y/MY76qfVBnrOyZCM8+g+GsaF+sfjf71xeV2+AwAA"
  - id: r-grado-resto
    tier: 1
    type: opcion
    review: true
    prompt: |
      Al dividir un polinomio de grado $5$ entre uno de grado $2$, ¿qué grado puede tener el resto?
    options:
      - |
        Grado 3
      - |
        Grado menor que 2
      - |
        Grado 2
      - |
        Siempre 0
    answers: ["sha256:5339a57e7b7007146aed9987e28f4d957f062645e405f82152c4bcbeb99a857e"]
  - id: r-raiz-significa
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa que $a$ es una raíz del polinomio $P$?
    options:
      - |
        Que $P(0) = a$
      - |
        Que $a$ es el coeficiente principal
      - |
        Que $P(a) = 0$ y $x - a$ es un factor de $P$
      - |
        Que $P$ es de grado $a$
    answers: ["sha256:cfd6a6a2caed851205a15044079f0ecfa5bbd90f33cda6f100ab7d8e54881f00"]
  - id: r-candidatos
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué números enteros pueden ser raíces de $x^3 + 3x^2 - 7x + 10$?
    options:
      - |
        $\pm1, \pm2, \pm5, \pm10$
      - |
        $\pm1, \pm3$
      - |
        Cualquier entero
      - |
        $0$ y $10$
    answers: ["sha256:0f1f5c133afc0eda8e9b2848ea9c0960fd944b8df382a0126568c0b00c44514d"]
  - id: r-resto-rapido
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuál es el resto de dividir $x^2 + x + 1$ entre $x - 2$?
    answers: ["sha256:85845e0a970b91e986c4a42b913fb3044dc2dbcf0d5ef4539877411a6aa0d9eb","sha256:f98ebac51e4f107aca04abf900b5ed81dbd1593d4af02ce6a06091e027d10c1b","sha256:a6378665e2756e91cd76acc9626df19e7fd8be4d933ce6a5ec0dc8977559e7a5"]
  - id: r-diferencia-cuadrados-4
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la factorización de $x^4 - 16$ con números reales?
    options:
      - |
        $(x^2 - 4)^2$
      - |
        $(x - 2)^4$
      - |
        $(x - 2)(x + 2)(x - 4)$
      - |
        $(x - 2)(x + 2)(x^2 + 4)$
    answers: ["sha256:f79bba23dba6ac6f3a2c6a405bc9c7bf77e85182e5a6494851992e755815465d"]
  - id: r-simplificar-sumas
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Es correcto simplificar $\dfrac{x + 3}{x + 5}$ tachando las $x$ y dejando $\dfrac35$?
    options:
      - |
        Sí, siempre
      - |
        No: solo se simplifican factores, no sumandos
      - |
        Solo si $x > 0$
      - |
        Solo si $x$ es entero
    answers: ["sha256:b2b147bef0d4e45a5155ce2fefea1f57e9b4ea8226b7deabc837644131079b4e"]
  - id: r-sin-raices
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos polinomios **no** tiene ninguna raíz real?
    options:
      - |
        $x^2 - 1$
      - |
        $x^2 - 2x$
      - |
        $x^2 + 1$
      - |
        $x^3 + 1$
    answers: ["sha256:171a08428656cb3acc42fa27e293d0864ef050cbd12dcde7bcd332d3d9722809"]
---

# Polinomios: división, regla de Ruffini, teoremas del resto y del factor, raíces, factorización y fracciones algebraicas

Igual que $60 = 2^2 \cdot 3 \cdot 5$ descompone un número en factores primos y permite simplificar fracciones o hallar divisores, un
polinomio como $x^3 - 2x^2 - 5x + 6$ se puede descomponer en factores sencillos, $(x - 1)(x + 2)(x - 3)$. Esa descomposición dice de
golpe dónde se anula el polinomio (en $1$, $-2$ y $3$), simplifica fracciones algebraicas y es la herramienta básica para resolver
ecuaciones de grado alto, inecuaciones y, más adelante, el cálculo de límites y de áreas. Este nodo enseña a dividir polinomios, el atajo de
Ruffini, los dos teoremas que unen división y raíces, y un método ordenado para factorizar.

## Objetivos

Al terminar sabrás:

1. Dividir polinomios (división larga) y comprobar la división.
2. Dividir entre $x - a$ con la regla de Ruffini.
3. Usar el teorema del resto y el del factor.
4. Encontrar las raíces enteras y racionales de un polinomio y factorizarlo.
5. Simplificar y operar fracciones algebraicas.

## Qué debes dominar antes

[[mat-expresiones-algebraicas]] (operaciones con polinomios, productos notables, factor común), [[mat-ecuaciones-segundo-grado]]
(fórmula, suma y producto de raíces) y [[mat-divisibilidad]] (divisores de un número).

> [!question] Test de entrada
> 1. Calcula $P(2)$ para $P(x) = x^3 - 4x + 1$.
> 2. Escribe todos los divisores de $12$.
> 3. Resuelve $x^2 - x - 6 = 0$.
>
> Respuestas: $1$; $\pm1, \pm2, \pm3, \pm4, \pm6, \pm12$ (con signo); $x = -2$ y $x = 3$.

## 1. Para qué sirve

- **Resolver ecuaciones de grado mayor que dos**: factorizando, se parten en ecuaciones pequeñas (si un producto es $0$, algún factor lo es).
- **Simplificar** expresiones con fracciones de polinomios, como se simplifican las fracciones numéricas.
- **Estudiar el signo** de una expresión ([[mat-inecuaciones]]) y dibujar sus gráficas.
- **Más adelante**: límites que dan $\frac00$, cálculo de áreas con fracciones de polinomios (el tema `mat-integral-riemann`) y
  buena parte del álgebra lineal.

## 2. División de polinomios

> [!practico]
> Se hace exactamente como la división de números con lápiz: se mira cuántas veces cabe el término más alto del divisor en el
> término más alto del dividendo, se multiplica, se resta y se baja lo siguiente. Se para cuando lo que queda (el resto) tiene
> grado menor que el divisor.

Dados $P(x)$ (dividendo) y $D(x)$ (divisor, no nulo), existen polinomios únicos $C(x)$ (cociente) y $R(x)$ (resto) con
$$
P(x) = D(x)\,C(x) + R(x), \qquad \operatorname{grado} R < \operatorname{grado} D .
$$
*Ejemplo.* $(x^3 + 2x^2 - x + 5) : (x^2 + 1)$: $x^3 : x^2 = x$; $x(x^2 + 1) = x^3 + x$; restando queda $2x^2 - 2x + 5$. $2x^2 : x^2 = 2$; $2(x^2 + 1) = 2x^2 + 2$;
restando queda $-2x + 3$, de grado $1 < 2$. Cociente $x + 2$, resto $-2x + 3$. **Comprobación** con $x = 1$: $P(1) = 7$ y
$D(1)C(1) + R(1) = 2 \cdot 3 + 1 = 7$ ✓. (Cuidado: si al dividendo le falta algún grado, se deja su hueco con un $0$.)

## 3. La regla de Ruffini

> [!practico]
> Cuando el divisor es $x - a$, la división larga se puede hacer solo con los coeficientes, en una tablita: bajar, multiplicar por $a$,
> sumar; bajar, multiplicar, sumar… Es mucho más rápida y es la que se usa para buscar raíces.

*Ejemplo.* $(2x^3 - 3x^2 + 4) : (x - 2)$. Coeficientes (sin olvidar el $0$ de la $x$): $2, -3, 0, 4$; $a = 2$.

| | $2$ | $-3$ | $0$ | $4$ |
| --- | ---: | ---: | ---: | ---: |
| $2$ | | $4$ | $2$ | $4$ |
| | $2$ | $1$ | $2$ | **$8$** |

Se baja el $2$; $2 \cdot 2 = 4$, $-3 + 4 = 1$; $1 \cdot 2 = 2$, $0 + 2 = 2$; $2 \cdot 2 = 4$, $4 + 4 = 8$. Cociente $2x^2 + x + 2$ (un grado menos) y resto $8$.
Para dividir entre $x + 3$ se usa $a = -3$.

## 4. Teorema del resto y teorema del factor

> [!practico]
> Al hacer Ruffini con $a = 2$ hemos calculado, sin darnos cuenta, $P(2)$: el último número de la tabla es justo el valor del polinomio
> en $2$. Eso permite saber el resto sin dividir, y saber si $x - a$ es un factor con solo sustituir.

**Teorema del resto.** El resto de dividir $P(x)$ entre $x - a$ es $P(a)$. En el ejemplo, $P(2) = 16 - 12 + 4 = 8$ ✓.

**Teorema del factor.** $x - a$ divide a $P(x)$ (es un factor) si y solo si $P(a) = 0$, es decir, si $a$ es una **raíz** de $P$.

> [!formal] Con rigor: demostración de los dos teoremas
> Al dividir entre $x - a$, de grado $1$, el resto tiene grado $0$: es un número $r$, y $P(x) = (x - a)C(x) + r$ para todo $x$. Sustituyendo
> $x = a$ se obtiene $P(a) = r$. Por tanto $x - a$ divide a $P$ $\iff r = 0 \iff P(a) = 0$. Consecuencia: un polinomio de grado $n$ no nulo tiene
> como mucho $n$ raíces (cada raíz aporta un factor de grado $1$ y los grados se suman), que es lo que justifica comprobar
> igualdades de polinomios en unos pocos puntos ([[mat-expresiones-algebraicas]]). $\blacksquare$

*Ejemplo útil.* El resto de $x^{100} - 1$ entre $x + 1$ es $(-1)^{100} - 1 = 0$: es divisible, sin hacer ninguna división.

## 5. Buscar las raíces

> [!practico]
> No hay que probar números al azar. Si los coeficientes son enteros, una raíz entera tiene que dividir al término independiente:
> la lista de candidatos es corta. Se prueban con el teorema del resto o con Ruffini y, cada vez que uno funciona, el polinomio baja
> de grado.

- **Raíces enteras**: si $P$ tiene coeficientes enteros y $r$ es una raíz entera, $r$ divide al término independiente (porque
  $a_0 = -r(a_n r^{n-1} + \dots + a_1)$). En $x^3 - 2x^2 - 5x + 6$ los candidatos son $\pm1, \pm2, \pm3, \pm6$.
- **Raíces racionales**: si $\frac pq$ (irreducible) es raíz, $p$ divide al término independiente y $q$ al coeficiente principal. En
  $2x^3 + \dots$ hay que probar también $\pm\frac12, \pm\frac32, \dots$
- **Multiplicidad**: si después de dividir entre $x - a$ el cociente vuelve a anularse en $a$, la raíz es **doble** (el factor $(x - a)^2$).
- Si $0$ es raíz (falta el término independiente), se saca **factor común** $x$ antes que nada.
- Cuando queda grado $2$, se usa la fórmula; si su discriminante es negativo, ese factor ya no se descompone con números reales.

## 6. Factorizar paso a paso

**Receta:** (1) sacar factor común; (2) mirar si es una identidad notable; (3) buscar raíces con Ruffini hasta grado $2$; (4) resolver el
grado $2$ con la fórmula; (5) escribir $P(x) = a_n (x - r_1)(x - r_2)\cdots$ (más los factores de grado $2$ sin raíces).

*Ejemplos:*
- $2x^3 - 8x = 2x(x^2 - 4) = 2x(x - 2)(x + 2)$.
- $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$; el último factor no tiene raíces reales.
- $x^3 - 2x^2 - 5x + 6$: $P(1) = 0$; Ruffini da $x^2 - x - 6 = (x + 2)(x - 3)$; total $(x - 1)(x + 2)(x - 3)$.
- Si las raíces de un polinomio de grado $2$ son $r$ y $s$: $ax^2 + bx + c = a(x - r)(x - s)$ (¡no olvidar la $a$!).

## 7. Fracciones algebraicas

Una **fracción algebraica** es un cociente de polinomios, $\frac{P(x)}{Q(x)}$, que no está definida donde $Q(x) = 0$. Se trabaja igual que con
fracciones numéricas ([[mat-fracciones]]):

- **Simplificar**: factorizar numerador y denominador y tachar **factores** comunes (nunca sumandos).
  $\frac{x^2 - 9}{x^2 + x - 6} = \frac{(x - 3)(x + 3)}{(x - 2)(x + 3)} = \frac{x - 3}{x - 2}$, válido para $x \neq -3$ (la original no existe en $-3$, aunque la simplificada sí).
- **Sumar y restar**: reducir a común denominador con el mínimo común múltiplo de los denominadores factorizados:
  $\frac{1}{x - 1} + \frac{1}{x + 1} = \frac{(x + 1) + (x - 1)}{(x - 1)(x + 1)} = \frac{2x}{x^2 - 1}$.
- **Multiplicar y dividir**: como con números, factorizando antes para simplificar.

## 8. Errores típicos

- Olvidar los huecos (coeficientes $0$) en la división o en Ruffini.
- Usar $a$ con el signo equivocado en Ruffini (para $x + 3$, $a = -3$).
- Dejar de factorizar a medias, o perder el coeficiente principal al escribir la factorización.
- Probar candidatos que no dividen al término independiente, o no sacar antes factor común.
- Simplificar sumandos en una fracción algebraica ($\frac{x + 3}{x + 5} \neq \frac35$).
- Olvidar dónde no está definida la fracción original.

## 9. Resumen

- $P = D \cdot C + R$, con grado de $R$ menor que el de $D$; comprobar evaluando.
- Ruffini para dividir entre $x - a$; el último número es el resto.
- Resto $= P(a)$; $x - a$ es factor $\iff P(a) = 0$; grado $n$: como mucho $n$ raíces.
- Raíces enteras: divisores del término independiente; racionales: $\frac pq$ con $p \mid a_0$, $q \mid a_n$.
- Factorizar: factor común, identidades, Ruffini, fórmula.
- Fracciones algebraicas: factorizar y simplificar factores; común denominador con el mcm.

## Repaso: lo que debe quedarte dentro de un mes

1. Cómo se comprueba una división de polinomios.
2. La regla de Ruffini.
3. El teorema del resto y su demostración en una línea.
4. Qué números hay que probar como raíces y por qué.
5. La receta para factorizar y por qué no se simplifican sumandos.

## Siguiente

[[mat-inecuaciones]] (el signo de un polinomio factorizado) y el tema `mat-exponenciales-logaritmos`.
