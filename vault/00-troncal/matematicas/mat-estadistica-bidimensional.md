---
id: mat-estadistica-bidimensional
title: "Estadística: frecuencias, datos bidimensionales, correlación y recta de regresión"
area: matematicas
trunk_level: 6
prerequisites: [mat-funciones-basicas, mat-numeros-reales]
academic_sources:
  - "Clausell, I. Matemáticas I, 1.º Bachillerato (LOMLOE), capítulo 10: «Estadística», secciones 1.5-1.10 (frecuencias, datos agrupados, parámetros de posición y dispersión), 2 (distribuciones conjuntas, marginales y condicionadas, independencia, nube de puntos) y 3 (covarianza, coeficiente de correlación lineal, recta de regresión, predicción y causalidad). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC1_10_Estadistica.pdf (CC BY-NC-SA 3.0)."
  - "Freedman, D.; Pisani, R.; Purves, R. Statistics, 4.ª ed. W. W. Norton, 2007, parte III («Correlation and Regression»), caps. 8-12."
  - "Abramson, J. et al. Precálculo, 2.ª ed. (en español). OpenStax, 2022, sección 2.4 («Ajuste de modelos lineales a los datos»). https://openstax.org/books/prec%C3%A1lculo-2ed/pages/2-4-ajuste-de-modelos-lineales-a-los-datos"
hints:
  - "Concepto: con datos de dos variables (x, y), la covarianza dice si suben juntas (positiva) o una sube cuando la otra baja (negativa); el coeficiente r, entre −1 y 1, mide lo bien que se ajustan a una recta. La recta de regresión de y sobre x pasa por (x̄, ȳ) y tiene pendiente s_xy / s_x²."
  - "Herramienta: organiza los cálculos en una tabla con columnas x, y, x², y², xy y suma cada columna. Fórmulas cómodas: s_xy = (Σxy)/n − x̄·ȳ y s_x² = (Σx²)/n − x̄². Comprueba con una hoja de cálculo (funciones COVARIANZA.P, COEF.DE.CORREL, PENDIENTE) o con Python (statistics.correlation, statistics.linear_regression)."
  - "Documentación: Marea Verde Matemáticas I, cap. 10 (secciones 2.6, 3.1-3.4); Freedman, Pisani y Purves, caps. 8-12; docs.python.org/3/library/statistics.html."
exercises:
  - id: media-tabla
    tier: 1
    type: numero
    sig: 6
    prompt: |
      Calcula la media de los datos de esta tabla de frecuencias:

      {{tabla}}
    variants:
      - values: {"tabla":"| Valor | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frecuencia | 5 | 9 | 12 | 3 | 1 |"}
        answers: ["sha256:333c72106ca8805ce1a632eefa704c1ded24a7cc58ef6b267aa309df77648061","sha256:69679d69c0c7d699486e5e1d43f1150825bf1262c1e02d066ed99133acd67b5c","sha256:995b578384ec976e0fcffafd8c6d19c26c4bf4157bb36bc54985eaf92fb3d08f"]
      - values: {"tabla":"| Valor | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Frecuencia | 6 | 10 | 3 | 1 |"}
        answers: ["sha256:6f7455b036db44ec61b77c881f68633f96b85aa1b103e3fceacd8441ed71caf2","sha256:b6f0e75e656fea1c1d48eaae60c0027d27ad7b130944078b8ee2fd2dd9ce6076","sha256:01c9316ea8f75c4913d88d7f9d25d4b6a872902a730e364a9d40b2647b077afe"]
      - values: {"tabla":"| Valor | 10 | 20 | 30 |\n|---|---|---|---|\n| Frecuencia | 3 | 5 | 2 |"}
        answers: ["sha256:f64379ef48af2d9ec8eb300eead174a21022bd3d700c568f8199596b2ca035ab","sha256:33b28bedda8e9a9779d019a6ab1374dac8d9902e255fe53182146c89c96e0327","sha256:fce5be1916fedb54e1bd23dc4463fa143d7f65a33c3b92ac63688b7548365b24"]
      - values: {"tabla":"| Valor | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|\n| Frecuencia | 1 | 4 | 4 | 1 |"}
        answers: ["sha256:11d8fa0ae3aac510c893b4b5b2a34bb7386f14e4b3da8289deb4f5600cbdded8","sha256:bed68828cabe1ce460a2f392f10431c7d0d571158c5a616335ca9c41ca0dd5a3","sha256:9573b5f0dd9384d38695d01a088b002a4fe30d49e3dbd8441b8cdeb3ff0ccc21"]
      - values: {"tabla":"| Valor | 0 | 1 | 2 |\n|---|---|---|---|\n| Frecuencia | 12 | 6 | 2 |"}
        answers: ["sha256:2e1cb1dafa05560f4aa43564c09ea4b308042a0969e779b5d672d458cbdba51c","sha256:b0218deac87981068fd0cac3da3c578f60ea316deddf171a8ba19ea2c68c4caf","sha256:f6cb686050a78b38cccd3dafa049d3671f5289a15c8fac8fecbcc9d9328b3e93"]
      - values: {"tabla":"| Valor | 5 | 6 | 7 | 8 | 9 |\n|---|---|---|---|---|---|\n| Frecuencia | 2 | 3 | 8 | 5 | 2 |"}
        answers: ["sha256:2c88033160d6c1ce248db5055652229c127579fb710a4c8886756d7e970a42b9","sha256:0d60b6a4b47ec6e7a4746fd071ce6ccc92a8160575adc32dff35832997f91658","sha256:1b9aed7a8c243190e3eeebb2ca791e2eb5226f185a9118786ff9a0aa6f69b0af"]
  - id: tipo-de-variable
    tier: 1
    type: opcion
    prompt: |
      ¿De qué tipo es la variable «tiempo que tarda cada alumno en llegar al instituto»?
    options:
      - |
        Cualitativa
      - |
        Cuantitativa discreta
      - |
        Cuantitativa continua
      - |
        No es una variable estadística
    answers: ["sha256:422adb21c0c721b05543501293e6b6e5ea716f041bde7bc0f35dd75621761cf6"]
  - id: signo-correlacion
    tier: 1
    type: opcion
    prompt: |
      En un estudio, cuanto más años tiene un coche, menos cuesta en el mercado de segunda mano. ¿Cómo es la correlación entre
      antigüedad y precio?
    options:
      - |
        Positiva
      - |
        Negativa
      - |
        Nula
      - |
        No se puede saber
    answers: ["sha256:8819456f1d0776e5f170370cce9c6b98ba4cbbde15c1cf7471114b76236d3c8d"]
  - id: varianza-tabla
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula la varianza (poblacional, dividiendo entre $N$) de los datos de esta tabla:

      {{tabla}}
    variants:
      - values: {"tabla":"| Valor | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Frecuencia | 2 | 3 | 3 | 2 |"}
        answers: ["sha256:038f5756da4037a291de360055a59fcd21e033913c6aa4ae9e42bd4d2096e3e4","sha256:a930f468e4aa2af5b4412577877f80b2f49538ce7eb83446bcabf05aa9c5a82a","sha256:2b3ffcb0013249136fb7ded400fe31456ecc5be8118171a62d9ad2a42d323a3a"]
      - values: {"tabla":"| Valor | 0 | 2 | 4 |\n|---|---|---|---|\n| Frecuencia | 1 | 2 | 1 |"}
        answers: ["sha256:45c8fdfd7fdbae328c7fcf82450a2627d8edf30657b642721c6fe8fe67245c16","sha256:453b92b66f7fb1e7e831d0990a30c9319440f56a2eb8c5fb609225a9e57ef79e","sha256:e4e7c564a2d7b12237a9e2460edeacde1c58a275686126cc931423679115415d"]
      - values: {"tabla":"| Valor | 1 | 3 | 5 | 7 |\n|---|---|---|---|---|\n| Frecuencia | 1 | 3 | 3 | 1 |"}
        answers: ["sha256:9d74ee22fc82aa9f4c487be124459a234c7155b0b8e05d99a89a90ce67e9ff0c","sha256:9a2d4dc67564697a8fa68f89dc9ef23d3f958a25ec94d706776a05678f775530","sha256:34fab98180d006788faf5b3e333a18fdb8ccfd2b60fcf177c38f68a1dcacdf3f"]
      - values: {"tabla":"| Valor | 10 | 20 | 30 |\n|---|---|---|---|\n| Frecuencia | 1 | 2 | 1 |"}
        answers: ["sha256:b9e9545a128a897c38aef14224e315f4926158aed57830e36e3f6981e9c4b1b5","sha256:ff39e37ae21cffb2cb29ed4c239f5b5b7f4af6debd815500f9507b2036dd6a29","sha256:f1700dbe8f2acbf66dc96865ab833c31e9641e8212fe7bcf9647eede1f71580d"]
      - values: {"tabla":"| Valor | 2 | 4 | 6 |\n|---|---|---|---|\n| Frecuencia | 3 | 4 | 3 |"}
        answers: ["sha256:75109317c7ed0a209286fd04754585886a6ed53a37f2577fcad18a6214fc351c","sha256:3ed7d41ddf9fef11bb86aa3bbf7e90d24e935f5e30e17b0c1810265607789e3b","sha256:dd92ff78b1cc0b988607c73eb098105cb59ec55fdbd90124b6adb11acf9d370d"]
      - values: {"tabla":"| Valor | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| Frecuencia | 4 | 0 | 0 | 4 |"}
        answers: ["sha256:edd6d157eaafc0190946aefc5155783cf4af5893ae63e9a1e25243d1f6cf936e","sha256:6305d2ae211dcca343c2c25e56948461cd6d6001b8b7555ffce56d4d0ffe6485","sha256:5a4c00a745384e5e64d42a89f34fc1c4023462d8032dd2197b91d5cb813a9f7c"]
  - id: mediana-tabla
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula la mediana de los datos de esta tabla de frecuencias (usa las frecuencias acumuladas):

      {{tabla}}
    variants:
      - values: {"tabla":"| Valor | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| Frecuencia | 7 | 10 | 9 | 3 |"}
        answers: ["sha256:044413218a7ce1cab110a80f5200c5e56a7d246e4acbdb340773a396c81e49d6","sha256:113c84c542c8b3f77b3c411a498c5c0bad7d259cdd536ada30ae9e3003953283","sha256:e2f515d45e7b74e2ec34b02ce73808a4b12ee3af58d555f08c66dfcdf97b07d4"]
      - values: {"tabla":"| Valor | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| Frecuencia | 2 | 3 | 5 | 6 | 5 |"}
        answers: ["sha256:4cd6da4f6072cb815dfaf685befbd032f0b814c92c64548872019a1f3ea979df","sha256:3e3d45e56936a2ec584808108aa3136b24c25ecf82d2ed28750707623ddbacf8","sha256:7bbcad00807b1fd8a17ec51f214229e617fc80e1d9712f027a68a027d6f826fb"]
      - values: {"tabla":"| Valor | 10 | 11 | 12 | 13 |\n|---|---|---|---|---|\n| Frecuencia | 4 | 8 | 5 | 2 |"}
        answers: ["sha256:ff77ff5f21d42e167d7ecc3136445ccb4b86eb36176fb9e9e1154c52f78babcc","sha256:223c401b1aaf0ea99f412d88cdd4c364c02e7b8715b581390933f82c29fd0a19","sha256:e60a5707d7dca0af433625ac34e72693c06f27aa04eb954776f2d3d008be804f"]
      - values: {"tabla":"| Valor | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frecuencia | 1 | 2 | 3 | 7 | 8 |"}
        answers: ["sha256:e9e7cc96ce0c8fd23557a299c33b912129d02ca98fdeba14c96950197525fcb9","sha256:e392d68b7b634f5bda081c1d37f40914a2a000f309943462c3ad73f2f660f5f2","sha256:e6f8a6bfb0898f53258d9c4aa98147d16f43e5daa9145f63d68a2f95ddce8ab2"]
      - values: {"tabla":"| Valor | 5 | 6 | 7 |\n|---|---|---|---|\n| Frecuencia | 10 | 3 | 8 |"}
        answers: ["sha256:4897df941567e35b031556fb56bdeaa8c991875a884718f976af42402664ed82","sha256:df7d38a5f5bb4413090671f4de61c7576868d7ee075e55be8695f83b29831e5d","sha256:c5eb96118bdd16168270f33b21d577865b778fc87d4ec8fce23b3dd6223af1ec"]
      - values: {"tabla":"| Valor | 1 | 2 | 3 |\n|---|---|---|---|\n| Frecuencia | 3 | 3 | 9 |"}
        answers: ["sha256:326abc96ff95b9752b05f8626ff8bcd25d656c352a13d41f17e3eb4349a0be74","sha256:4bd13bed61f94d6212574fd96055d95704a5eded152c76555a4bbfe28d8341f5","sha256:2c633ef4a4a09d0c86c0c4638033d6e83c7310155232a01da63e63f2da3786c4"]
  - id: covarianza
    tier: 2
    type: numero
    sig: 6
    prompt: |
      Calcula la covarianza $s_{xy}$ (dividiendo entre $n$) de los pares ${{d}}$.
    variants:
      - values: {"d":"(1, 2),\\ (2, 4),\\ (3, 5),\\ (4, 4),\\ (5, 7)"}
        answers: ["sha256:8d9dc4560d169ae2528fd6403196619392bdd5064805aa34219b45b5ffe41da7","sha256:17ea08bef6f3b694476c95625f66b48c376ddcc31eef5c13a4d30223a63a130d","sha256:e7826d6e928718dad68c69cc98fe6b667c2df9e77fd127f4d5ed5324b3c0a07e"]
      - values: {"d":"(2, 10),\\ (4, 8),\\ (6, 7),\\ (8, 3),\\ (10, 2)"}
        answers: ["sha256:24c18dc5cbf58aba77095d72ed368fa04c9e4498d793d639af9594ccb90dbabe","sha256:dcd778007f2c1b4ad1a99a78ab60a46a813ca3456497cfede5d28eb7d5b1df7a","sha256:8152fe8e425a4224ade42002b6fff0061dbf1bfbc394494173a143017e5a3320"]
      - values: {"d":"(1, 1),\\ (2, 3),\\ (3, 2),\\ (4, 5),\\ (5, 4),\\ (6, 6)"}
        answers: ["sha256:67808bab0d2e03ec100f03f60b1a4769dbdc8562275c9e7a44572fb59a26df89","sha256:abfac78809a2ebccfa053c01dcf44f586f0e5bc4c9a216aa1abb38c6d27795aa","sha256:d84b91b4f7bfc6c42e822546f24241e28306489ccc07a8f4e90353ca2200ccbd"]
      - values: {"d":"(0, 5),\\ (1, 4),\\ (2, 4),\\ (3, 2),\\ (4, 0)"}
        answers: ["sha256:8511fcb22cbf088e9fb3b004922cee9004287c9e9a351bab2f8fb065dd9ee8b5","sha256:fc3c39168d47bf857f8c59a11a8c1dac395e4447086485f48df293968a2a6298","sha256:39b005a00c670a336f24d0da71e27784c995c1a47f78083a13853c32b8d5cb3f"]
      - values: {"d":"(10, 20),\\ (20, 35),\\ (30, 40),\\ (40, 60)"}
        answers: ["sha256:88986f6d31e904c44891dc63ec53d0a96725ff4cd0b65bec7e7d3786e595dc52","sha256:cabe19d79ec9c29cbc43e93db7824c4417285a430ce97a8fa8af6472c016e4db","sha256:eaa80c98a097e625a9638a3765959bb9d0242c39adf4cac0650df9665310ea1d"]
      - values: {"d":"(3, 7),\\ (5, 9),\\ (6, 12),\\ (8, 13),\\ (9, 16),\\ (11, 17)"}
        answers: ["sha256:8516fba49fa7e63be48e41b5afe050d6d8fd74f182ab6266597e9f7c10a21b03","sha256:362d351768a71170caf6af98641e1af230d2c66f7f6f8d0143d4b365b3c53e71","sha256:48b4155857726594df50292f2a7c836902e5066677462a6004d1d7d2a084deb4"]
  - id: coeficiente-correlacion
    tier: 2
    type: numero
    sig: 3
    prompt: |
      Calcula el coeficiente de correlación lineal $r$ de los pares ${{d}}$. Respuesta: con al menos tres cifras significativas.
    variants:
      - values: {"d":"(1, 2),\\ (2, 4),\\ (3, 5),\\ (4, 4),\\ (5, 7)"}
        answers: ["sha256:edeed5b4ab2a3216a2f04920e19dfcabca5b4b072e53f70af419ef649a59fddf","sha256:c4e7deb3077dcecf53d869db64df000f3a72138b59aaed32fe796c223f23c76e","sha256:53a940ae6e7deb64267333118da877e7ba64d82313df53f79e946959ab0f68f6"]
      - values: {"d":"(2, 10),\\ (4, 8),\\ (6, 7),\\ (8, 3),\\ (10, 2)"}
        answers: ["sha256:7be763d04a8acb71e2cc976b1e1e7feaf70bb5efb59b6fb5c2de539e6bd87ec1","sha256:dc649dfc866d00dc6c29974634cc81202dfb7861288af20d5eadfa2bae226527","sha256:74a00c31e1987aea3a366c06390f4aaef53f4d12455e03e5ec7a9625171fcdba"]
      - values: {"d":"(1, 1),\\ (2, 3),\\ (3, 2),\\ (4, 5),\\ (5, 4),\\ (6, 6)"}
        answers: ["sha256:6921ab4d98dbcd52ed4c016067ca5c8c0fd466ec17f261da1ac69fa53a5c0cf9","sha256:d9d77d7436b7b90fcbd51bfd2642896b595e87bb6600900ffaff46bfaf6103c4","sha256:436c45b1fa66fcb1decf7d2c22c1ba8bff557500c03f267204ed210e35539983"]
      - values: {"d":"(0, 5),\\ (1, 4),\\ (2, 4),\\ (3, 2),\\ (4, 0)"}
        answers: ["sha256:9be0ba8c3ede64727fc0b2130e15ea2deb5942881c8d76b02f57ecd6c4e36397","sha256:886722d3748d16b13af5156bed7626f36f8bd58570f3c66d0437ff2b2e796e46","sha256:241fc15ab1243e312e6335cadc023b31164281bc65590248c9051cbf43c85467"]
      - values: {"d":"(10, 20),\\ (20, 35),\\ (30, 40),\\ (40, 60)"}
        answers: ["sha256:00652db71dc96118a25eadb1ed9ae88753e581f477b13bc55a0993a71721d443","sha256:1253954222c920eefb1fd1a8af7bf4056490764dce72caccabf77d9dc637b8ed","sha256:c3bfb49fdd2582de5bc1ae1660ab248610ab302b6be6f47ac073f822ce790556"]
      - values: {"d":"(3, 7),\\ (5, 9),\\ (6, 12),\\ (8, 13),\\ (9, 16),\\ (11, 17)"}
        answers: ["sha256:65f998745029209bbe7f0a5f7d7f18d068515558bad77bda50f7e8013625ca5a","sha256:9c1d9b0eb7c5a2877b7ddacaebd994b7b0341fd81aacd2bcd269f12261f8d6a6","sha256:1217a4ae0a8839703fce1f6915af426192212914e61734cdbd2a08833574f676"]
  - id: pendiente-regresion
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En unos datos, $s_{xy} = {{sxy}}$ y $s_x^2 = {{sx2}}$. ¿Cuál es la pendiente de la recta de regresión de $y$ sobre $x$?
    variants:
      - values: {"sxy":"2{,}4","sx2":"2"}
        answers: ["sha256:da37f4c84a4436ac67770f391d74d5e40d69a6b6d82609c5f53ce7fd31283e6e","sha256:7bb02a39387e524e8712510a09f3f6b89c6f150c4bcd5bd3dd953e8d6a0c9c09","sha256:b27a16604da92ee7a81dc3eb64aaf9b603cdf7f9dcd7f20438d06037f1f20c2d"]
      - values: {"sxy":"-3","sx2":"4"}
        answers: ["sha256:8737a91d9883da1b3eeaa06f6fb2013fc7a5848579774972cc2c39c8956deb73","sha256:71eeee9b06ce9c6abe6083843d4b15f7d50d6b4f0f6c5ccc9aab80b3c50b9214","sha256:89a8994a5162a70978d3b3b26ec60d92a9a987c920e42ae7c405c79376300920"]
      - values: {"sxy":"5","sx2":"2{,}5"}
        answers: ["sha256:e13b86126301e8942f1b3b20174778392fb17f85af4db6f1b2557bd3c9d3b6b0","sha256:55306390252bf12110d0e337affca196fa6c26906c589fe40f43ca83d133ca9c","sha256:21001085f1b5921528a6cb7276bb51a23a5926416c17d428793382c13d6c8cc8"]
      - values: {"sxy":"1{,}5","sx2":"0{,}5"}
        answers: ["sha256:dd49a5bbef7d20090b69e6d85b7ead1031f10922c5470d059f76222cd2c70ec6","sha256:f14561fe9f0b25ad8d78cd0f6cf2936a96bfe59bf11d2508f2f9b7d76891a5bb","sha256:ff97088e24cc3dcecacb17d00c7a690544eabe52248e50716ccbd1c02249e129"]
      - values: {"sxy":"-0{,}8","sx2":"1{,}6"}
        answers: ["sha256:81e06793f35f6481e1fd286ea6c6914e3c09ca23b4deb97984af099bb22e6c2d","sha256:117148e2bda725b52a779e184fb183b054741d2ce72b6103b2e5a7bdbafd79df","sha256:b0dfad92262d316540fce9cc90dfe4c3f462d0b704fe233c7fd9411b2c0bfd37"]
      - values: {"sxy":"12","sx2":"8"}
        answers: ["sha256:b74c8b041fb91355f29a980141f1600dfb2384572fd4176aa27885b51dd91f6f","sha256:b0a4cea35816dedfa938ab4a3d6f56368404456c1b781e6f21903a240c95706c","sha256:34cb88da0b84dca9920216c2c407a6a432695f09a17b3059d8f841524107f13d"]
  - id: independencia-esperada
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En una encuesta a ${{N}}$ personas, ${{nA}}$ tienen la característica A y ${{nB}}$ la característica B. Si A y B fueran
      estadísticamente independientes, ¿cuántas personas tendrían a la vez A y B?
    variants:
      - values: {"N":200,"nA":80,"nB":50}
        answers: ["sha256:9d3856d7757ad059cac35e01481b43b23f132c657a72ce35b501b874bd464efd","sha256:4d9e4e10b0a083577824ee52e355514b7b7b48af0a2480fccb76cbfab212fa33","sha256:1bcdddf0e8cf364f4b5ff899867a9c15a07ed8f0886f601c727b7698c4062a81"]
      - values: {"N":500,"nA":300,"nB":120}
        answers: ["sha256:d040b09e4019ca550a6e0356835455b9857712544657e93d35b0d11b717e28b9","sha256:84ace63d9ad02af258405492ec23ce250758b83269ea2e4a3939463fa095e193","sha256:ff5eb6eded66c88ed34687f3e9685891b366b1acb7097b2f8d471eba464d37e0"]
      - values: {"N":120,"nA":30,"nB":40}
        answers: ["sha256:044171c950e44bf02dde345a9f85fba1ce6a894aa4f36937a32529d388b5b9c3","sha256:32d7bb2b65b2743243d0d1d5cf1fa302ccfd9da6979c0ad53346e44bd5206003","sha256:2e0cfc0851af318d4f47892b7e6e0137fc9c8e9ea23134fbff227bdf85382611"]
      - values: {"N":1000,"nA":250,"nB":360}
        answers: ["sha256:804a4b9db40e43cbcf22c30b7aa589f20d9a990535d32da1b1ffc9ef46a01a3b","sha256:af5056a4d57a81b035a7e9dc6e5dd64fb3a402519bf3db9a3223370842d31209","sha256:6e0ab02db5d5e0e82adf6fe59dc794a702c89da0e3b672224c84355385913f0d"]
      - values: {"N":80,"nA":20,"nB":60}
        answers: ["sha256:0f25527f510f40bbd06a824f0515cb89fedf97f91eaeddc599e921823d187be0","sha256:1877db8dc9481f2e9167369b932d67cb5c4f7234492f69558fe63926ca3695e2","sha256:ea4d445e4aa82b12acc54cb2f03cd169e1ac979857a6b5792f18210db45d5bf6"]
      - values: {"N":300,"nA":150,"nB":90}
        answers: ["sha256:f09b5d112b971cbba8af357a92a05329b11dfbcaf2e6c94631e2e15c0974e987","sha256:a8bbf1b67f3290fbb4fb135f75a76344d2184bffb0206f444bb7b3fb0e56059f","sha256:4dca59c3f4a41714b7145a0adfe6075da250b85b8bfa258c67c91a8d4bdf5034"]
  - id: condicionada
    tier: 2
    type: numero
    sig: 6
    prompt: |
      De ${{N}}$ alumnos, ${{n1}}$ hacen deporte y, de ellos, ${{a1}}$ aprueban todo; de los ${{n2}}$ que no hacen deporte, aprueban
      todo ${{a2}}$. ¿Qué porcentaje de los que **no** hacen deporte aprueba todo?
    variants:
      - values: {"n1":50,"a1":35,"n2":70,"a2":28,"N":120}
        answers: ["sha256:9757f1c705fef24b40afd84a1a9dc019255f864bb82f97296fd23a4650b5f4f2","sha256:53e2724ddc556bcf200966944e33bcb886a9ca51464f1eeeeb1dd5ca093d5678","sha256:487a5b462ee52e615295843f234c8554b5374753eebb440950a4005af54cfaff"]
      - values: {"n1":40,"a1":10,"n2":60,"a2":30,"N":100}
        answers: ["sha256:f5baba910803f142c5f24730ff8357c2cc5eb737a49f32f55b917d05a2f9b807","sha256:1c649cc2b681f1b0e86053ef59937f1e8da1524ea5c0c1986bdc16831ddc3e6d","sha256:580c711f0b06145ec9b10f38cee35e0096cb049ba91404bc43cceb2c9b5b8aa1"]
      - values: {"n1":120,"a1":90,"n2":80,"a2":20,"N":200}
        answers: ["sha256:386497947475d4616b75bb46e3278c47b5b180c76cfd2f79560592e848677dab","sha256:af09338f79b33f6a5c3b4915f24a326bca53cf88ec8f49916da35b2205160f21","sha256:cdc6cffaa2375d4dc618eaed855ac64ee3fc4906ab4fdb5f467df121d6d1a1d2"]
      - values: {"n1":25,"a1":5,"n2":75,"a2":45,"N":100}
        answers: ["sha256:ccd7f879ae3c0f7e45e1bc25a68a2b7d4d8c295f0573b0f918994e04644272fd","sha256:74b756f68862057e6adfad5b24617203c4b0b8971a79843a2f18be7d6334d656","sha256:2d13efb355da195da13dfec1d4226fd57bb71a1eca3b9d84c100e0d5ddb6254c"]
      - values: {"n1":200,"a1":150,"n2":80,"a2":36,"N":280}
        answers: ["sha256:a1b91a93bee8cf078ca6e3ea321464d289534dfad22a3bd4f934eb8da5c82cd2","sha256:afa77c27c23cb1704e1e3b024441411c2ab8528023fca45ae6f5f5ed6873cde6","sha256:496ca008e261dba10aa41f93333d34ea436b6e70cf0fd75c2e2397a7344f6cba"]
      - values: {"n1":60,"a1":45,"n2":40,"a2":10,"N":100}
        answers: ["sha256:dc740f60738244b71366a30a2ee101cdf3d44a14ffe42f48d7b22fdab9b7a003","sha256:38a590824f8214849a97e6ebe9c9bbe290a3cdbdcc69c4d9b28153cc1d8b711b","sha256:aff632fe42ba53901f04278a98e61ecb98e870b83153cc4a15ce0a7b229fedb2"]
  - id: prediccion
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Con los pares ${{d}}$, calcula la recta de regresión de $y$ sobre $x$ y úsala para predecir $y$ cuando $x = {{x0}}$.
      Respuesta: con al menos cuatro cifras significativas.
    variants:
      - values: {"d":"(1, 2),\\ (2, 4),\\ (3, 5),\\ (4, 4),\\ (5, 7)","x0":"3{,}5"}
        answers: ["sha256:f551975450c01a71ab454754860fa7f128bb0eb76a158b6b4c3365b5044d20a8","sha256:f3013a3bf78123e3e62f5fd3150dcd48b299c6b542dd9e0cf54eb12f642af078","sha256:f6fc09341f7dd9445e23efa802376ffb7e8de2d00ad09c67910dea45f9355414"]
      - values: {"d":"(2, 10),\\ (4, 8),\\ (6, 7),\\ (8, 3),\\ (10, 2)","x0":"5"}
        answers: ["sha256:a37a8a40012ffff426c1b1f9d2405c55fe238e0aa1419fc8e975de47b0008ced","sha256:37e9080c9804ed2b453f2cf86e1fcbeae0a93bca4ea5ac539278a3afd1021db6","sha256:de5df6d921f5a27d7add279f98b20db13cf619d0d74b07708664ba7efe403a45"]
      - values: {"d":"(1, 1),\\ (2, 3),\\ (3, 2),\\ (4, 5),\\ (5, 4),\\ (6, 6)","x0":"7"}
        answers: ["sha256:c601877a6b03453a9f78b0b2e75a4e5e8a56006bab7d2b6e5366029124634258","sha256:75e61324dd921d736571b36eb59046cd83d27d2357139ffd3cb04638de04507f","sha256:833d49a5b9f4240d896be1ec67991682555ec04903a7e47fd467f687bce0a15c"]
      - values: {"d":"(0, 5),\\ (1, 4),\\ (2, 4),\\ (3, 2),\\ (4, 0)","x0":"2{,}5"}
        answers: ["sha256:cf5898b9656bf35953b8d9813b0f2360114237f11b24bb6d01cc5ce8f037e6e7","sha256:70c20d561eabd60b67858eb5b14417c3872dd939f679a016fc4450de0727ed29","sha256:889658bfe5ac8e19d94903c76bbf1c9e27b51c4caab1c91f1e48a482a7d99791"]
      - values: {"d":"(10, 20),\\ (20, 35),\\ (30, 40),\\ (40, 60)","x0":"25"}
        answers: ["sha256:87fc6cbf0bc36cff4c2f3cc015e9c8b14e3c5811a608fcbb90bb9baed5732476","sha256:c82574b807d4025a1529bc4f278955e57a2f1dd5f88ab8860200c730538c6734","sha256:e07bbfb3077fc195a74fd5a404205680317c1bbd20b5e635b4a6fb6d07ed9513"]
      - values: {"d":"(3, 7),\\ (5, 9),\\ (6, 12),\\ (8, 13),\\ (9, 16),\\ (11, 17)","x0":"7"}
        answers: ["sha256:b747f5a6b4689a71b0a1a348720db4c2d31f35552d643c4a0c1be9910504e98e","sha256:bb6c5d7a04d109af021a11401b50e1e3b0dd72f58888a286bdccec6039218445","sha256:49cc8cf430701492029a0426caa762b4658c7a9ba59e15f384c3468824d265c5"]
  - id: r-cero-curva
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Calcula el coeficiente de correlación de los pares $(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)$ (todos cumplen $y = x^2$).
      ¿Qué enseña el resultado?
    answers: ["sha256:3013d605acf18699a4b0ce3d21bf84f6099d08705b12b742ac9855124ff39551","sha256:dbf754cb3065be205521be750205ddedd4167bcfeb6a047a527c21f48e1f7878","sha256:3cf258c29a1ce7b60dcc7eba2506938e8fb18589dbdb6cc5b9af9b851e23b93b"]
  - id: causalidad
    tier: 3
    type: opcion
    prompt: |
      Un estudio encuentra una correlación alta ($r \approx 0{,}8$) entre el consumo de chocolate por habitante de un país y su
      número de premios Nobel por habitante. ¿Qué se puede concluir?
    options:
      - |
        Que el chocolate hace ganar premios Nobel
      - |
        Que ganar premios Nobel hace comer chocolate
      - |
        Que $r$ está mal calculado
      - |
        Nada sobre causas: puede haber una tercera variable (como la riqueza del país) que influya en ambas
    answers: ["sha256:c1e95dd622b5f252a6bba080209247ea6162f01dfe2fab1d6b6eb6719e3d039b"]
  - id: minimos-cuadrados-demostracion
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra que la recta $y = a + bx$ que minimiza $\sum (y_i - a - bx_i)^2$ pasa por el punto $(\bar x, \bar y)$ y
      tiene pendiente $b = \dfrac{s_{xy}}{s_x^2}$. (Pista: para $b$ fijo, la suma es una parábola en $a$; después, una parábola en $b$.)
    sealed: "gz64:H4sIAAAAAAACCn1Ty27bMBD8lYHAg+QoLuKjAR+KoOcGyLGqhSVNtxtYpEpShlVDH9NjDjn1E/xjBaX4IdjNidJyuTOcGe4TbzdNYGuSeTKZPJG3eEAqSEBZAyEF1vxis+lkAvGcUoYFisI3FdK2ZNxD7vqFsuUMCxjQcoZ7zOiqKcPd9clsORM5anKHP9JuCNpAkCjMr0aDpNP4SYoJ5BxLyntK28OrC6z00NvTWTtS+4dub7obqLFBkkMbK8PnTkzx2R/ecojj3gKEu/P+HBuC0yoQDn/rwBUVpiZPqK2DSN/b8uPoTEwLU5h3/WZIhRS9ZI/2RPKKQw5FK0I4vLqKjYX2EAPxi+Z0d1HZxdtsh7uhKVkMioimZCww6hRoCyO2/cZoqJjiiwnWqAj3nMqzoduSB+/k8B+nxgF3kMvZqXTDMClw0y+knmFsYYJdWY+N9RC7kgW8NeAfDW20z65MLYwQhZFnY0dsuv0Fk+6yKS4P5j0AY9XSkQJZ93H3aK4v97u26/a+3MX6dGD3aCsbr94bWEfPvUawFUFvUB3eDFcWK43G0FmrPG7WFPNDOWQmYGXQhlcWFRuu+DfF1PmmommSJ66RjlUy/7ZPlOOgHdtknjyRo9OrzM8Hh4eD9CRkxHe8pRVlaCMSa6P/m8UIWDcmWJ/MZ10+gnxufODQtBottFeOpT7yhIpCXKUhOrohj5X2WybF1sSwDYGNmfwQ7uuRaozAIP+nXn2BFi+Ry5oV9YnTHo056Z0qq9esWJugUVvPgbc2G0N97/4B0D9Yr/EEAAA="
  - id: r-rango-r
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Entre qué valores está siempre el coeficiente de correlación lineal $r$?
    options:
      - |
        Entre $-1$ y $1$
      - |
        Entre $0$ y $1$
      - |
        Entre $0$ y $100$
      - |
        Cualquier número real
    answers: ["sha256:cde891631c5bd75f62d4b5e9657c3b174ce7bcca4ec7c5b3857dcae19179393a"]
  - id: r-centro-gravedad
    tier: 1
    type: opcion
    review: true
    prompt: |
      La recta de regresión de $y$ sobre $x$ pasa siempre…
    options:
      - |
        Por el origen
      - |
        Por el primer y el último dato
      - |
        Por el punto $(\bar x, \bar y)$
      - |
        Por el dato con mayor $y$
    answers: ["sha256:25522f36c88be24d7eaad1e95ed4a04578cc14bd5d2d3d89d7140d79ffeeb2f9"]
  - id: r-extrapolar
    tier: 2
    type: opcion
    review: true
    prompt: |
      Una recta ajustada con alturas de niños de $2$ a $10$ años ($r = 0{,}98$) predice la altura a los $40$ años. ¿Qué te parece la
      predicción?
    options:
      - |
        Muy fiable, porque $r$ es alto
      - |
        Poco fiable: está muy fuera del rango de los datos
      - |
        Exacta
      - |
        Imposible de calcular
    answers: ["sha256:cda89b2a148a8afe14a0cc5ee42891b28b2e9e665ee0827018eae30fcc77151e"]
  - id: r-frecuencia-relativa
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      En $40$ datos, el valor $3$ aparece $14$ veces. ¿Cuál es su frecuencia relativa?
    answers: ["sha256:32c3e0cb25ac8df314e3a9dd1fa5431d0caf54ca2d78918c0ff83d5fb136a9de","sha256:1740e9dfd2feb0df7226a6d1619a1123351370f0c6704b2fd6d73ca4495597c9","sha256:10cbc090a223c6817ab05022c6ad01b6a693eded4ea0f40265c8a57e04d00eea"]
  - id: r-varianza-abreviada
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      De unos datos se sabe que la media de sus cuadrados es $29$ y su media es $5$. ¿Cuál es su varianza?
    answers: ["sha256:2eb2143422fe3c9e6458d0c41c2626c1f4e487c72b566c13f94c14a242d32421","sha256:d42ff696c2275425eff8b6213bd62422f5650eb4b2534d55372faf3bc5091a9b","sha256:c45b49b827c8089cac088ec8d23ff2f903cb9fdd2a74006debf01fc699fa919b"]
  - id: r-r-igual-uno
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué significa $r = 1$?
    options:
      - |
        Que $x$ causa $y$
      - |
        Que las dos variables son iguales
      - |
        Que no hay relación
      - |
        Que los puntos están exactamente en una recta creciente
    answers: ["sha256:f23f8eb391c871bf6e85812c5b73be881479ca7e2bf2059fcc4485039daf6fe8"]
---

# Estadística: frecuencias, datos bidimensionales, correlación y recta de regresión

En [[mat-funciones-basicas]] aprendiste a resumir una lista de datos con la media, la mediana y la desviación típica. Pero
muchas preguntas interesantes son sobre **dos** variables a la vez: ¿las horas de estudio se relacionan con la nota?, ¿el
precio de una casa con sus metros?, ¿la temperatura con el consumo eléctrico? Este nodo enseña a organizar datos con
tablas de frecuencias, a medir si dos variables van juntas (**correlación**) y a trazar la recta que mejor las resume
(**regresión**) para hacer predicciones, sin caer en la trampa de confundir relación con causa.

## Objetivos

Al terminar sabrás:

1. Construir tablas de frecuencias (también con datos agrupados) y calcular media, varianza y cuartiles a partir de ellas.
2. Leer tablas de doble entrada: distribuciones conjuntas, marginales y condicionadas, e independencia estadística.
3. Dibujar e interpretar una nube de puntos.
4. Calcular la covarianza y el coeficiente de correlación lineal, y saber qué dicen y qué no.
5. Obtener la recta de regresión por mínimos cuadrados, usarla para predecir y conocer sus límites.

> [!question] Test de entrada
> 1. Media de $2, 4, 6, 8$. 2. Pendiente de la recta $y = 3x - 1$. 3. Si dos cosas suben a la vez, ¿una causa la otra?
>
> Respuestas: $5$; $3$; **no necesariamente** (ese es el tema de la última sección).

## 1. Para qué sirve

- **Ciencia**: casi todo experimento mide cómo cambia una magnitud con otra y ajusta una recta (o una curva) a los datos.
- **Economía y empresa**: prever ventas, precios o demanda a partir de otras variables.
- **Salud**: estudiar si un hábito se asocia con una enfermedad, y por qué eso no basta para decir que la causa.
- **Inteligencia artificial**: la regresión lineal es el primer modelo de aprendizaje automático
  ([[ia-aprendizaje-estadistico]]).

## 2. Tablas de frecuencias

> [!practico]
> Si preguntas a $30$ compañeros cuántos hermanos tienen, no hace falta escribir $30$ números: basta una tabla «$0$
> hermanos: $8$ personas; $1$: $14$; $2$: $6$; $3$: $2$». Esa tabla de **frecuencias** contiene la misma información. Para
> calcular la media, cada valor «pesa» tantas veces como se repite.

Una **variable estadística** es **cualitativa** si sus valores son categorías (color, marca) y **cuantitativa** si son
números: **discreta** si toma valores aislados (número de hermanos) y **continua** si puede tomar cualquier valor de un
intervalo (estatura). Para cada valor $x_i$:

- **frecuencia absoluta** $n_i$: cuántas veces aparece; $\sum n_i = N$, el total de datos;
- **frecuencia relativa** $f_i = \frac{n_i}{N}$ (suman $1$; multiplicadas por $100$, porcentajes);
- **frecuencia acumulada** $N_i = n_1 + \cdots + n_i$: cuántos datos son menores o iguales que $x_i$.

Con una tabla de frecuencias, la **media** y la **varianza** son

$$
\bar x = \frac{\sum x_i n_i}{N}, \qquad s^2 = \frac{\sum (x_i - \bar x)^2 n_i}{N} = \frac{\sum x_i^2 n_i}{N} - \bar x^2 .
$$

**Datos agrupados.** Con variables continuas se agrupan los datos en **intervalos** (clases) y se toma como valor
representativo la **marca de clase** (el punto medio del intervalo). Los resultados son aproximados.

**Cuartiles.** Con los datos ordenados, $Q_1$ deja por debajo el $25\,\%$, la mediana $Q_2$ el $50\,\%$ y $Q_3$ el $75\,\%$; se
localizan con las frecuencias acumuladas. El **rango intercuartílico** $Q_3 - Q_1$ mide la dispersión del $50\,\%$ central.

**Ejemplo resuelto.** Hermanos de $30$ alumnos: valores $0, 1, 2, 3$ con frecuencias $8, 14, 6, 2$. Media:
$\frac{0 + 14 + 12 + 6}{30} = \frac{32}{30} \approx 1{,}07$. Acumuladas: $8, 22, 28, 30$; el dato $15$.º y el $16$.º valen $1$, así
que la mediana es $1$.

> [!formal] Con rigor: la fórmula abreviada de la varianza
> $\sum (x_i - \bar x)^2 n_i = \sum x_i^2 n_i - 2\bar x\sum x_i n_i + \bar x^2 \sum n_i = \sum x_i^2 n_i - 2\bar x (N\bar x) + \bar x^2 N =
> \sum x_i^2 n_i - N\bar x^2$. Dividiendo entre $N$ se obtiene $s^2 = \frac{\sum x_i^2 n_i}{N} - \bar x^2$. $\blacksquare$ («La media de
> los cuadrados menos el cuadrado de la media.»)

## 3. Datos bidimensionales: tablas de doble entrada

> [!practico]
> Si a cada alumno le preguntas dos cosas (por ejemplo, si hace deporte y si duerme más de $8$ horas), los datos se
> ordenan en una tabla de **doble entrada**: filas para una variable, columnas para la otra. Los totales de cada fila y
> columna son las distribuciones **marginales** (cada variable por separado); fijar una fila y mirar solo dentro de ella
> es una distribución **condicionada** («entre los que hacen deporte, ¿cuántos duermen más de $8$ horas?»).

Con dos variables $X$ e $Y$, la **frecuencia conjunta** $n_{ij}$ cuenta los datos con $X = x_i$ e $Y = y_j$. Sumando una fila
o una columna se obtienen las **marginales** $n_{i\cdot} = \sum_j n_{ij}$ y $n_{\cdot j} = \sum_i n_{ij}$. La **condicionada** de
$Y$ a $X = x_i$ divide cada $n_{ij}$ de esa fila entre $n_{i\cdot}$. Las variables son **estadísticamente independientes** si
todas las condicionadas coinciden con la marginal, lo que equivale a

$$
\frac{n_{ij}}{N} = \frac{n_{i\cdot}}{N}\cdot\frac{n_{\cdot j}}{N} \quad \text{para todo } i, j .
$$

**Ejemplo resuelto.** $100$ alumnos: de los $40$ que hacen deporte, $30$ duermen más de $8$ h; de los $60$ que no, $30$. Entre
los deportistas, el $75\,\%$ duerme más de $8$ h; entre los demás, el $50\,\%$. Las condicionadas son distintas: **no** son
independientes.

## 4. La nube de puntos

> [!practico]
> Cada alumno es un punto: horas de estudio en horizontal, nota en vertical. Si los puntos forman una franja que sube,
> hay relación **positiva**; si baja, **negativa**; si es una mancha redonda, no hay relación lineal. Antes de calcular
> nada, **mira la nube**: un solo dato raro o una curva pueden engañar a todos los números de las secciones siguientes.

El **diagrama de dispersión** (nube de puntos) representa cada par $(x_i, y_i)$. Se describe por su **forma** (lineal,
curva), su **sentido** (creciente, decreciente) y su **intensidad** (puntos muy pegados a una recta o muy dispersos). El punto
$(\bar x, \bar y)$ es el **centro de gravedad** de la nube.

## 5. Covarianza y coeficiente de correlación

> [!practico]
> Divide la nube en cuatro trozos con una cruz centrada en $(\bar x, \bar y)$. Los puntos de arriba a la derecha y de
> abajo a la izquierda indican que «van juntas»; los otros dos trozos, que van al revés. La **covarianza** hace esa
> cuenta: es positiva si dominan los primeros. El **coeficiente de correlación** $r$ es la covarianza «sin unidades»,
> siempre entre $-1$ y $1$: cerca de $\pm 1$, los puntos están casi en línea recta; cerca de $0$, no hay relación **lineal**.

Para $n$ pares $(x_i, y_i)$:

$$
s_{xy} = \frac{1}{n}\sum (x_i - \bar x)(y_i - \bar y) = \frac{\sum x_i y_i}{n} - \bar x\,\bar y, \qquad
r = \frac{s_{xy}}{s_x\, s_y} .
$$

- $r = 1$ o $r = -1$: los puntos están **exactamente** en una recta (creciente o decreciente).
- $|r|$ cerca de $1$: correlación fuerte; cerca de $0$: débil o nula.
- $r$ no cambia si se cambian las unidades (de cm a m) ni si se intercambian $x$ e $y$.
- $r = 0$ **no** significa que no haya relación: puede haber una relación **curva** (los puntos de $y = x^2$ con $x$
  simétricos alrededor de $0$ dan $r = 0$).

> [!formal] Con rigor: por qué $-1 \le r \le 1$
> Sean $u_i = x_i - \bar x$ y $v_i = y_i - \bar y$. Para todo número real $t$, $\sum (u_i t + v_i)^2 \ge 0$, es decir
> $\left(\sum u_i^2\right)t^2 + 2\left(\sum u_i v_i\right)t + \sum v_i^2 \ge 0$. Una parábola que nunca es negativa tiene
> discriminante $\le 0$: $4\left(\sum u_i v_i\right)^2 - 4\sum u_i^2 \sum v_i^2 \le 0$. Dividiendo entre $n^2$:
> $s_{xy}^2 \le s_x^2 s_y^2$, luego $|r| \le 1$. La igualdad se da solo si algún $t$ anula todos los $u_i t + v_i$, es decir,
> si los puntos están en una recta. $\blacksquare$ (Es la desigualdad de Cauchy-Schwarz, que reaparece en
> [[mat-algebra-lineal-1]].)

## 6. La recta de regresión

> [!practico]
> Si quieres predecir la nota de alguien que estudia $7$ horas, buscas la recta que pasa «lo más cerca posible» de todos
> los puntos. «Lo más cerca» se mide sumando los cuadrados de las distancias **verticales** de cada punto a la recta
> (los errores de predicción) y eligiendo la recta que hace esa suma más pequeña: es el método de **mínimos cuadrados**
> (Legendre, 1805; Gauss).

La **recta de regresión de $y$ sobre $x$** es

$$
y - \bar y = \frac{s_{xy}}{s_x^2}\,(x - \bar x) .
$$

Pasa por el centro de gravedad $(\bar x, \bar y)$ y su pendiente $\frac{s_{xy}}{s_x^2}$ tiene el signo de $r$. Para predecir $x$ a partir
de $y$ se usa la **otra** recta (la de $x$ sobre $y$, con pendiente $\frac{s_{xy}}{s_y^2}$ si se despeja $x$); las dos coinciden solo si
$|r| = 1$.

> [!formal] Con rigor: deducción por mínimos cuadrados
> Buscamos $y = a + bx$ que minimice $S(a, b) = \sum (y_i - a - bx_i)^2$. Para $b$ fijo, $S$ es una parábola en $a$ con
> mínimo donde $\sum (y_i - a - bx_i) = 0$, es decir $a = \bar y - b\bar x$: la recta pasa por $(\bar x, \bar y)$. Sustituyendo,
> $S = \sum (v_i - b u_i)^2 = \sum v_i^2 - 2b\sum u_i v_i + b^2 \sum u_i^2$, parábola en $b$ con vértice
> $b = \frac{\sum u_i v_i}{\sum u_i^2} = \frac{s_{xy}}{s_x^2}$ (ver el vértice en [[mat-funciones-basicas]]). $\blacksquare$

**Ejemplo resuelto.** Horas de estudio $x$ y nota $y$ de $5$ alumnos: $(1, 4), (2, 5), (3, 5), (4, 7), (5, 9)$.
$\bar x = 3$, $\bar y = 6$; $\sum x_i y_i = 4 + 10 + 15 + 28 + 45 = 102$, así que $s_{xy} = \frac{102}{5} - 18 = 2{,}4$;
$\sum x_i^2 = 55$, $s_x^2 = 11 - 9 = 2$; $\sum y_i^2 = 196$, $s_y^2 = 39{,}2 - 36 = 3{,}2$. Pendiente $\frac{2{,}4}{2} = 1{,}2$:
$y = 6 + 1{,}2(x - 3) = 1{,}2x + 2{,}4$. $r = \frac{2{,}4}{\sqrt{2}\sqrt{3{,}2}} = \frac{2{,}4}{\sqrt{6{,}4}} \approx 0{,}949$. Predicción para $x = 3{,}5$:
$6{,}6$.

**Fiabilidad.** $r^2$ (el **coeficiente de determinación**) es la fracción de la variación de $y$ que «explica» la recta;
con $r = 0{,}949$, $r^2 \approx 0{,}90$. Las predicciones son fiables si $|r|$ es alto y **dentro** del rango de los datos;
**extrapolar** lejos de él es peligroso (con $x = 20$ horas la recta predice una nota de $26{,}4$ sobre $10$).

## 7. Correlación no es causalidad

> [!practico]
> En las ciudades con más bomberos hay más incendios, y no porque los bomberos los provoquen: las ciudades grandes tienen
> más de las dos cosas. Una correlación puede deberse a una **tercera variable** (el tamaño de la ciudad), al **azar** (con
> muchas variables, algunas coinciden por casualidad) o a que la causa vaya **al revés**.

Para afirmar que $X$ causa $Y$ hacen falta **experimentos controlados** (asignar $X$ al azar y comparar) o un análisis
cuidadoso de las variables de confusión (recuerda la paradoja de Simpson de [[mat-funciones-basicas]]). La regresión
**describe** y **predice**; por sí sola no **explica**.

## 8. Errores típicos

- Calcular $r$ sin mirar la nube: un dato atípico puede crear o destruir una correlación.
- Concluir que no hay relación porque $r \approx 0$ (puede ser curva).
- Usar la recta de $y$ sobre $x$ para predecir $x$ a partir de $y$.
- Extrapolar fuera del rango de los datos.
- Confundir correlación con causalidad.
- Olvidar multiplicar por las frecuencias al calcular media y varianza desde una tabla.

## Repaso: lo que debe quedarte dentro de un mes

1. $\bar x = \frac{\sum x_i n_i}{N}$; $s^2 = \frac{\sum x_i^2 n_i}{N} - \bar x^2$; cuartiles con las acumuladas.
2. Marginales (totales), condicionadas (dentro de una fila), independencia (condicionadas iguales).
3. $s_{xy} = \frac{\sum x_i y_i}{n} - \bar x\bar y$; $r = \frac{s_{xy}}{s_x s_y} \in [-1, 1]$.
4. Recta de $y$ sobre $x$: por $(\bar x, \bar y)$ con pendiente $\frac{s_{xy}}{s_x^2}$; mínimos cuadrados.
5. Correlación no es causalidad; no extrapolar.

## Siguiente

[[mat-calculo-1]] empieza el cálculo. La estadística continúa en [[mat-distribuciones-binomial-normal]] y, ya en la rama,
en la inferencia estadística.
