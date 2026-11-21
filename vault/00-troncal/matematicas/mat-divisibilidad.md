---
id: mat-divisibilidad
title: "Divisibilidad: múltiplos, divisores, criterios, números primos, factorización, mcd y mcm"
area: matematicas
trunk_level: 1
prerequisites: [mat-sistema-decimal-operaciones]
academic_sources:
  - "Ramos, F. Matemáticas 1.º de ESO (LOMLOE), capítulo 2: «Números naturales. Divisibilidad», secciones 2.1-2.3 (múltiplos y divisores, criterios de divisibilidad por 2, 3, 4, 5, 6, 9, 10 y 11, obtención de todos los divisores) y 3.1-3.6 (primos y compuestos, criba de Eratóstenes, descomposición en factores primos, máximo común divisor, mínimo común múltiplo). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2002%20DIVISIBILIDAD.pdf"
  - "Euclides. Elementos, libros VII (algoritmo para el máximo común divisor, proposiciones 1-2) y IX (proposición 20: hay infinitos primos). Edición de D. E. Joyce, https://mathcs.clarku.edu/~djoyce/java/elements/elements.html"
hints:
  - "Concepto: a es divisor de b (y b múltiplo de a) si la división b : a es exacta. Un primo tiene exactamente dos divisores. Todo número se descompone de una única manera en producto de primos, y con esa descomposición salen el mcd (primos comunes con el menor exponente) y el mcm (todos los primos con el mayor exponente)."
  - "Herramienta: para encontrar divisores, busca por parejas (1 y n, 2 y n/2, …) hasta la raíz cuadrada; para factorizar, divide por 2, 3, 5, 7… mientras se pueda; para el mcd de números grandes, el algoritmo de Euclides (mcd(a, b) = mcd(b, resto de a entre b))."
  - "Documentación: Marea Verde 1.º ESO, cap. 2, secciones 2 y 3; Euclides, Elementos, VII.2."
exercises:
  - id: contar-multiplos
    tier: 1
    type: numero
    sig: 8
    prompt: |
      ¿Cuántos múltiplos de ${{a}}$ hay entre ${{L}}$ y ${{U}}$, ambos incluidos?
    variants:
      - values: {"a":7,"L":100,"U":"200"}
        answers: ["sha256:d53a95e7d6369473d6dd35a136e8d43d2dc18fb5b55bfbb958062bd9437f3ee8","sha256:b2ba1101360cda2f1195203d35b9268baea0178b39c272981db843e4d3773816","sha256:e697c6ba6e00d828c928eee6d7a4d275baae3572d6e7d43269019b793ad069f8"]
      - values: {"a":12,"L":1,"U":"500"}
        answers: ["sha256:2f33fb22ad323549d26895b86669cb9323c80bc9b4c09051f36eae234217d4b2","sha256:a876f93d5982550bf517b1aac5b5dd82a80264388ad7608ede44fc571fac0e86","sha256:dd9c163917d6e8ca21ebd37c34d7f9cdff0d14111da994ea215ae04a522dfb9a"]
      - values: {"a":15,"L":300,"U":"600"}
        answers: ["sha256:638c865349d7ae91bc71fb712b428f933bb053cf40bda09812a06bdadca71a80","sha256:024d191dc8f3dbe7b7eb6ac896d854a1d4e55a207b38c733ae5b5c5dcdb5a054","sha256:d66752905abcfad2e7765c6136dc5e710912df6202e402982bf1ce9174a03c72"]
      - values: {"a":9,"L":1000,"U":"2\\,000"}
        answers: ["sha256:cd1b41004f5adf69d119929abae4e6396bd3e8b43994c8dc8f7eb90a2f9720dc","sha256:e8bc6a16c1c3d19b349a3d08c7360baf92181503e7d12062aea2059793bbc384","sha256:5d6ad8a66c749b1a197b0e97b961b2a55db93efb399933e130e86f52ddc11bd1"]
      - values: {"a":25,"L":101,"U":"999"}
        answers: ["sha256:c6384bacbd7d97d19ff95efd69c63acded3d00f8ddcb050822560f51068437fc","sha256:8b8076d3b70caf0f268f8636072cfde734e2d0f7b2579e8b9a343fb6091016bb","sha256:f2779ac20c0cfe05db5d90e633a136ccced38fb478816690fc74bf9c910c786e"]
      - values: {"a":13,"L":50,"U":"150"}
        answers: ["sha256:813f3e4071c1f667b048b7d706ca23433aac4e5338c25b916f4f7b809082479a","sha256:00253cc9fa71afef7bc226f2f42cd835069c7b4eee626bc77847e0859625f073","sha256:8af86d096bfa3b4fc368048e888c73f4508f0654b0ef6f81d7984c7f347da133"]
  - id: criterios-de-divisibilidad
    tier: 1
    prompt: |
      Usa los criterios de divisibilidad para decidir cuáles de $2, 3, 4, 5, 6, 9, 10$ y $11$ dividen a ${{N}}$. Respuesta: los que lo
      dividen, de menor a mayor, separados por `;` (por ejemplo `2;3;6`).
    variants:
      - values: {"N":"6\\,930"}
        answers: ["sha256:d1bf2e4b0ebdb8bac2b182ceec9d463d3e9b1f4a4065fb3c4148c22d5d7ea452"]
      - values: {"N":"2\\,244"}
        answers: ["sha256:70718f0caf39b2d0f534ec9344ca45d64e8521d87a7288fd4268309b51b1da63"]
      - values: {"N":"5\\,115"}
        answers: ["sha256:614c238fc37eb802bc9b77a01de1feb506c5d959b5de1fc8d73ba9d62fb49fd2"]
      - values: {"N":"1\\,386"}
        answers: ["sha256:f54e65510385984a54a75c1b89cb3839739a986b7b108d124b73adac1420cc01"]
      - values: {"N":"8\\,415"}
        answers: ["sha256:5d703daa1f0d242c39617faab45fcbc07dbf545f3965acfeadd1c8f87a44c919"]
      - values: {"N":"4\\,268"}
        answers: ["sha256:3c32a8a9353cfa2a52729f806d78cca3e3ed14f81e2610c677608e90f282be22"]
  - id: cifra-del-hueco
    tier: 2
    type: numero
    sig: 8
    prompt: |
      ¿Cuál es la **menor** cifra que puede ponerse en el hueco para que ${{pat}}$ sea divisible por ${{d}}$?
    variants:
      - values: {"pat":"47\\square2","d":3}
        answers: ["sha256:123bface7014dd3c260370bb5dbec38f9c6be5658f6cf445b6a577d07d8704af","sha256:99c8f7f01db47066d710f5afb411530a355e3fe7be29c058e42653e9e6756d90","sha256:bcfea8b07d7aafcf88929757751ea8238928912c2b01cb6878dc30fd107826b4"]
      - values: {"pat":"1\\square35","d":9}
        answers: ["sha256:f5ef91a099e8c1749a0e01afc4ce267d5085eec2122e307f746250e547a66f42","sha256:ef1ab724c24bcc904dc658e2c3de03098c9c7f654295c929c24befb318a3e07a","sha256:f42aee47775784218a6b0600c16c5c35a7e1d9d82569f6c778d85d95385078fc"]
      - values: {"pat":"38\\square6","d":4}
        answers: ["sha256:63995701e7326e3f068dd7f5c747fe8fcc2e2d6d96289a16db3328db7ba22a38","sha256:96aca26efb3d0468d3bfb40027cb877a4da22f5dc885196c6bdaba0508d75d3c","sha256:c153c0085d2ed2c364be2cb15b3226dbe9432082c244f9e648f0c6772cccbef0"]
      - values: {"pat":"7\\square25","d":11}
        answers: ["sha256:06cfaaf25157cb54347887949ea4a858128567d153cb809986041a950461c6cb","sha256:267a6e8ab8334147798bcc875bb130f564f2a5e2df16d0f46da71553eee38cc9","sha256:d57af01ce6e4568e4eabe764454629acee71e17a2c8086f970925159f713f4bf"]
      - values: {"pat":"6\\square4","d":6}
        answers: ["sha256:c0ea002c5ecaa0dc50beb1998630d2025e389c5b20aeeccd4738683b7731fef1","sha256:bb8a400c0b979075eb2eaa891afe33f71c93652d97d973f246665d408a9ea483","sha256:1f763569d5d21bbdb8892fa82848575fafb49b2f1a41f4aa91d6ead9c28ac028"]
      - values: {"pat":"29\\square1","d":3}
        answers: ["sha256:7f226ed49792a99603b4ac8fe63c0033b7e1f9c560da6e2f327d775ebb02e807","sha256:c4da654b2dedf1d0f4d2c3ad9b03d6d0d38b33a7e1c159a6d638b7f49c58ff01","sha256:e3e9bc69180b98f8510ff0bfff7b8cc85c7edf0ad805c40db8ebcbe909cfc3e5"]
  - id: numero-de-divisores
    tier: 2
    type: numero
    sig: 8
    prompt: |
      ¿Cuántos divisores tiene ${{n}}$? (Factoriza y suma $1$ a cada exponente, o haz la lista por parejas.)
    variants:
      - values: {"n":72}
        answers: ["sha256:632692444a2eb9041cfaa778475a4a8d21c8e9aaa6555a43cee1ecc1ed737c22","sha256:1b8557ca7930c5346560c4137a70dd31fc5e2e91f73e52a85d0d5d01c4bf834d","sha256:5687cefe8747405508d0ef726d571c516872213250b92cada17ffd835be12600"]
      - values: {"n":100}
        answers: ["sha256:ab94b1f87bc459e72d7432cd8459b0fe22aa706c28dd2a0e6337a9d7a49104f0","sha256:3bab18b6f645918ac260595711171b908c2cbadfaf61ae3c5c3405675f2a4811","sha256:9d8a137b9c2849d87ee69b73adce48b4e80778d995b184e1c4a5ae4d485d8716"]
      - values: {"n":210}
        answers: ["sha256:f1bb789493064443349b2648e638d11420557a8badad15c74f6eb6ac18664f22","sha256:619b129e271b4120677bfbc8669a9c3becd1dc5ab977b143c9b6a2d7567a4420","sha256:b954f7a25722421161d4415683a906d15260983e307a0e206720b68ff97c86f2"]
      - values: {"n":144}
        answers: ["sha256:c95a6cad310672d828394e155cb49ac998fad84072f75dc2ae32a9eaeea3105f","sha256:e3844994c25730b7a9e3f787e80c03b34c2436ba143d3dc8399452563db27d19","sha256:79e062ac34fba487e618b1f79413cfedd85f05304686377218886a20e109fd69"]
      - values: {"n":96}
        answers: ["sha256:81be0dbcf675644eca229dd2a793a2302b9df8ff708b13cb07540f423b22a1aa","sha256:646247a551c26a2a19b289cecf9f53a68e4d0b5d119e6e407252c216b95a5cdc","sha256:a48db1e211896866c362145f8f21ce96f03e4961e117b0eeaf83470afec7dad9"]
      - values: {"n":180}
        answers: ["sha256:9b6fb0b417dc0604d6e1803e91faf9168c726637e7bfc3e988158323ebe0d980","sha256:37154d661a3cdbccaefeadcf89c142acfde2a49abb435294ec59b8fd57e8d374","sha256:ea65c1dece42961fd7875d9263cd165d8547e433378fc58f89068cbbc0127647"]
  - id: suma-de-divisores
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Escribe todos los divisores de ${{n}}$ (por parejas: $1$ y ${{n}}$, …) y súmalos. ¿Cuánto suman?
    variants:
      - values: {"n":28}
        answers: ["sha256:0f26dfa80116ad6583bf0ce2399755c78e0408e81dbef860a999331322d068fc","sha256:eb980bbba3fd5b492ba41ca11b583bcfef6a8021919203c2748e1f0d2378f416","sha256:90418485e21603096fb2f5f6e5de9132cef8243662b8f70ba495dbe83e61371a"]
      - values: {"n":36}
        answers: ["sha256:db8605cfbd8c4f6006081e6ac346a2311cefb590bafcfb15983eea6c1fa9c9c4","sha256:5758388eeb0142875616dc3f4d128821aaec28177bad4c87e0cfb9eb72822606","sha256:8278448665b62be718c4efd2d13a62147cce0bd188b677af446d455932d791e5"]
      - values: {"n":50}
        answers: ["sha256:ac40d59743db658b357b1bdbdc69a1b1e10e8a2a5d4daff94bec37997e4cd080","sha256:db2606c23bb44eac917f01eaa377a9051601b29114c1b829ab9cad897ca03277","sha256:e7bd9e24fb4edb1d531580fa03cc1594d78e6c3afaab2e930dcefa3e13e90599"]
      - values: {"n":60}
        answers: ["sha256:55f8a0d200631524e4372bac25fccdc5b79919df04b70c7f10ccfd603d10769d","sha256:08065d00df4c34f4bd0486b1ebf57167e7f4090e7cb86ab937ad6d6d5567bafb","sha256:5b09ee73fca31012f8f72ebf6dd257ec9e17875f15c5cb617a07a476c35874aa"]
      - values: {"n":100}
        answers: ["sha256:f2da92ac1fe19bf67deaa49ab4a821200d1b52c9f5cd53e516c19e86acdbb61e","sha256:f48480f4ae383c3bec844987439bf99e0158d18b371df00bdffbfe3626f058ad","sha256:7790d2b4b27323f243bb231070e7f5aef2ecc6f1b5dc8b2d61e172cdbea3f5cc"]
      - values: {"n":45}
        answers: ["sha256:006735cb38435ee005a2ab78fd6f8aa13882df301256872cbac57b6f02051a7e","sha256:f5c34a354e9af57164e22480627fa9cdb416dfd4be4c9d1e6308713089d7ab8d","sha256:56493b3b4b8c10b98defca63f045442798ca39ac0bebadeba86790a903abd940"]
  - id: criba
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Con la criba de Eratóstenes, ¿cuántos números primos hay menores o iguales que ${{N}}$?
    variants:
      - values: {"N":30}
        answers: ["sha256:de92547ad27f6985673f28f4f4ddc1013f72c302e0161af8785aa153ab8cafb1","sha256:97e8613122fe5ec87985dc7033bef8dd85e96449c1280a4980ed93caca1062e4","sha256:c782306c7866f7de94d1c5959897166280dd84f830ca704f4b7d6ab842ea2bc8"]
      - values: {"N":60}
        answers: ["sha256:b8de7a835dfb122fefb85540bcb2e2d02f78f379ae59c5cbf46318ca789619c1","sha256:e0673239b93787227006d912b198c61f21782c73c4f6f1d0e98977043f3b8222","sha256:47371d55d4c480608c6c8212edd40bdf2053b7b67d9a6980e0ed7496c127d8f7"]
      - values: {"N":100}
        answers: ["sha256:feef1da5ddee2e1d32af472019e5702e0591b45c4e8af46613868ccf49c97e95","sha256:6c134d01352d182b8c9199239e270e56077216693aee35284b0550ea51a82902","sha256:74036b17b8df4bd97bfea7d5a4f53fd26fd6fe500e35196524c017e559765347"]
      - values: {"N":120}
        answers: ["sha256:afe5fdd24457d781b3fa91122b0ec5c28ece0b22ba0b0ff4d92d7cec963c6eaa","sha256:5497c249fc5b8f6be4d5b13ed1e28e801eec72e46665ae76a4bb1180112e6de1","sha256:b7b5a82fb348ae77bd712f9c012bbea952897d87c777d397602628a07a0adff5"]
      - values: {"N":200}
        answers: ["sha256:86daf52883d2d488c330113235148c77f85b18a170b8e253a412f7af6b8381aa","sha256:b9844ba62696a833e86b117490d30e10be1423b89d9e7f58487c0a0d2b630c6f","sha256:37d4bf89d80d8560d07bc6b8f9fb15a86be1b8ccff6b871e4816cf81ce3fdc6d"]
      - values: {"N":75}
        answers: ["sha256:1379b613eb1e81f24e7ae512f5e2d82f918eebe3ad68cf1ab2f92eec45bb5717","sha256:61b0700a9410e5332a675e0439221eb0a243611be1897b16f179524d6f0ec9e0","sha256:c3783b24ee6b973d0d98cc494a94431744592abd2145ac9e9197331a3d16640f"]
  - id: menor-factor-primo
    tier: 2
    type: numero
    sig: 8
    prompt: |
      ${{n}}$ no es primo. ¿Cuál es su menor factor primo? (Prueba a dividir por $2, 3, 5, 7, 11, 13, \dots$; basta llegar hasta la
      raíz cuadrada de ${{n}}$.)
    variants:
      - values: {"n":91}
        answers: ["sha256:f7bc7fba9d886594b95deb517e27ee57983757437dbb248f0f31724ec45ac388","sha256:75a26645499fc5842d0d530e4a44de650be624931d645e15f680b10d1e16cdb2","sha256:2240f7ee70aec8dee508054e6966b8dd257b086f35e51e1f6ea8d1397acd7eda"]
      - values: {"n":221}
        answers: ["sha256:67986d4bd9bdb262669497ae226ee980acdf314624b07acf80a939faffd6a40b","sha256:773724a0578fff01d3634fffb542fe9c9888c4ee3f1656ba961f4ccb6e2ab754","sha256:6ce9867d89a7f0889a5f1d2ce1f69b5a90818ae18063454cadf4c6f841ed86e0"]
      - values: {"n":323}
        answers: ["sha256:c0d7c7d4fd630a1b06af6425019182b38753e484ed910c0381819cae28f3cddd","sha256:f3033800f945233b38782cc1021b999127b0650ca087fdc407cfbd977bdf064e","sha256:88a3fdf13006bff70bd6d41024c682ad5bdce4b492115193e9cb68c0b2b7ce27"]
      - values: {"n":391}
        answers: ["sha256:c74e39857e478e4b23e3096779bff58f18db22e8f238a2b6e339cbdfe5c8e034","sha256:0902ccd8912e5111f2cb078f502d94c89d205a37433c4070d55943fd384b98bd","sha256:770a34ac05cf2d7e21347a50d00e10951738b1d6f809f0621ae2cfb8983a51ec"]
      - values: {"n":437}
        answers: ["sha256:81767ef051e4646e466777b7d6885a85608ae133560e366f223a02ff193334d3","sha256:3d9afa9155871e1b07e5f64a775f660c70ebf1f59c667ee7c988f7d1447a8701","sha256:2828783d1986c7374f03768954a67fab9901193e0a3d1147ce51ba7803fcfa9f"]
      - values: {"n":899}
        answers: ["sha256:2a64a5bf73f2ee9ef2cee40d0213412e8ecaa25c252bb075a15a3984cb7e9490","sha256:afff913c94913254583cc8962f822667e507fda728f33b7b57add596d34381c8","sha256:2b49097b4e4725a0db3ac034b7022d1fe7d3b31dfcbd31ab3edc923b1d068826"]
  - id: factorizacion
    tier: 1
    prompt: |
      Descompón ${{n}}$ en factores primos. Respuesta: los factores con repetición, de menor a mayor, separados por `;` (por ejemplo,
      $12$ se escribe `2;2;3`).
    variants:
      - values: {"n":"84"}
        answers: ["sha256:a72eaf585fdd50f683feb54b3426dfe66623f10c6cb45397b9297eaa5547fd23"]
      - values: {"n":"252"}
        answers: ["sha256:993aad4f53d7b71e61163a3ba102b0e9991e7fc7ba41020c3cc5b3afa0e8bf29"]
      - values: {"n":"1\\,000"}
        answers: ["sha256:602b69568604c07d186cc6ff1671d691f2cbb5222669bc810ff7ec0e55377825"]
      - values: {"n":"594"}
        answers: ["sha256:1ba93a3460e4db606904741e0dfe341f37f56b9986cc1f81186b94ba7599e0ad"]
      - values: {"n":"1\\,225"}
        answers: ["sha256:9f86f70e7380d8250a0f8b2affccbb08967b92b3d98a5244e7545c60d55013a5"]
      - values: {"n":"3\\,528"}
        answers: ["sha256:62a59ea3abb8330166a53f22d8078dcc824d016a618163170054bf057347b39a"]
  - id: maximo-comun-divisor
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Calcula $\operatorname{mcd}({{a}}, {{b}})$.
    variants:
      - values: {"a":48,"b":180}
        answers: ["sha256:f49757415addb6613fc7774d69461ae1279c0c3dd9f45049b6854bde6c039e52","sha256:fc4635f05c5092bc305b848010ee4babe4d8312a8338b57caa5c2782b11b3e1b","sha256:d8454d14580e82ea9d54c657e7306c78db5cfb22d56177f9da5ca009eb7dadcd"]
      - values: {"a":126,"b":210}
        answers: ["sha256:f5c81eb215637302f0f4d9f1b0d29a2c3b729c36ef06debdbee02d95ab1d5679","sha256:72c5dd3fe447d0bf57bed828e0fc68184d0f903e8f7585a71bcde5b0d2f97e3a","sha256:9b26a16a064730d94a30b738adf025ec3a886104c134ac989330c9b3d6e15091"]
      - values: {"a":252,"b":588}
        answers: ["sha256:6b151e68ba6f3fc5e1f1d065a86dc5c0f2fb0996d6b9866a88067bb8cbcac174","sha256:1bb0db36ba64d7dc0b46dfeb448fc46a578591c8c7db7b7693efe60c99670bba","sha256:9b6aca8b2eb9bc12b54302cdf0ce2336c1837c2103d0281bc5b36f6979f5463e"]
      - values: {"a":1001,"b":770}
        answers: ["sha256:10e3e92b9bca7ccfc2cf6f00b26148a14d3e626299fba55ceefbdc6eba56c6b6","sha256:fd6456b659c293f8b33f302a6d5552c77cab461e17eee9592041719d749debe8","sha256:aa8f2b0594594eb57f6516b651ae9a7aeb5768d6191cf2121a1c1927700fe6fa"]
      - values: {"a":96,"b":144}
        answers: ["sha256:6540a92eddbb2079bfe0b3b1ce377bb22ca1654a6d1c1d8ad7d9fe8c7784c642","sha256:062d9749aa43cdf704dc58238beafc09143322d4aa9357f59d97d62dd1cbe1d7","sha256:9e7bb295e93955cd070acf6da872bc8625d1b3f4e3e946c0b39acb3afba7c153"]
      - values: {"a":385,"b":616}
        answers: ["sha256:09d746f05872758b1265cfc329d767f14d65619b2a0f6478e4e21a4246112ca3","sha256:cc3cd462bf1ee80b663b8e88abf071bcdcdaa7e9f9562b035e43329fc1f6610a","sha256:b7460dbd7598c179580e71f8126d4e7d6d997f1865679749836f7e9ad025108e"]
  - id: minimo-comun-multiplo
    tier: 1
    type: numero
    sig: 8
    prompt: |
      Calcula $\operatorname{mcm}({{a}}, {{b}}, {{c}})$.
    variants:
      - values: {"a":4,"b":6,"c":10}
        answers: ["sha256:1f795d15802982d2c540ea271e34e5d92f1de5b9e03eb152fa4dd5b772fedc57","sha256:0fa1376cc266b3083a26f37ad33eacfae9f244e4580c13105c87cb10747578ef","sha256:cc6a39ef3299a8c2033eec5da5f5ab98f570d00fef91e2bb377ca412d9d63757"]
      - values: {"a":8,"b":12,"c":18}
        answers: ["sha256:9df8cf083371c5aa0b2a0307f76c53fd3327e1a8102b4950e5d114789fc7f0bb","sha256:8971cd920547e12fe4ffed2d7edc26407b4751546f7c7263aae45cdad4e3f2ca","sha256:ab193cf9f5b84913314ca849ae505a99ec7e1a470fa6ae4ff957be175ddad8d7"]
      - values: {"a":6,"b":9,"c":15}
        answers: ["sha256:4c3bcc265a4acf3560fa9036e287b878baf7e35fd91a04183fcf66afa3f18001","sha256:eb5466e406ee558ca6dd4eff043d3f6b78a65fe4fa830d56cce6dc3953782328","sha256:2980b599567602f9d599627b817b375d7c2e6b0b1cb34ba72fda4a24381b9a06"]
      - values: {"a":5,"b":12,"c":20}
        answers: ["sha256:a895074897494e99eb4f1891f05b68dd7d9d6d72044fab51211a06952ae84aff","sha256:bc35367746e391361e70b2166b00bdf201ae7798d4bc8369463b421a80a7c402","sha256:e73faf0846d2f09de6673ae4d4a4326a8821c5fc61461b73c827001ff6ae752b"]
      - values: {"a":14,"b":21,"c":6}
        answers: ["sha256:6ed657785462ef534dd0a6d54ebd580c66bf52fa7fde4c3ed3c198070b82358f","sha256:c881c6042ea99a67364d761954a209fcdca973f1cd47571808b90130de4c331a","sha256:49cc7ec395cf41518e73aaeb37d5024805d0324914a32711467b1fe1dafbd93e"]
      - values: {"a":9,"b":12,"c":16}
        answers: ["sha256:6d328c8218f5393f80724c68438c5d63831a8a3fba1b5b0271641b6861ea0608","sha256:26dc38e0a5373f8a9134575c3d805f588910be42e073648e87fd39e018563cb8","sha256:3fba03afba654152dfc85cf81c7034dc3af640253ce75cea98d4a2b468c96039"]
  - id: volver-a-coincidir
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Tres faros se encienden a la vez. Después, uno se enciende cada ${{a}}$ segundos, otro cada ${{b}}$ y otro cada ${{c}}$.
      ¿Cuántos segundos pasan hasta que vuelven a encenderse los tres a la vez?
    variants:
      - values: {"a":3,"b":4,"c":6}
        answers: ["sha256:f78b72305c82a16aaa3a8efd72024a34690acb7fc791a7b35b967e14e0b490a2","sha256:464768903979853f60607966784e0ce9251b2270c03d2071e604ad54da110752","sha256:4425ebb0bc5bcb1bf35eb3b18df554915887456561cdebfb0bae7d5c168ff390"]
      - values: {"a":5,"b":6,"c":10}
        answers: ["sha256:0c88e9fad31db417fb587fb5bfc1790094b395690846c0c07724e2cf247487fb","sha256:09fdfd95478408f3bda0f005c83dba249fb820abfa3a1631598247243558f83b","sha256:6650f7941ac8502875aedcfe33341228e15a5de088ec95d98412c684f9fa6146"]
      - values: {"a":8,"b":12,"c":14}
        answers: ["sha256:4bd0740d804ace420a962d28fc9f4cfdc6b7dd3e7accb4fed7815d5581b04470","sha256:39f55bb74760991b3dbee5b8bf21d8f27af8c0c69909da3e9531d559b517575f","sha256:ab7a741e793c6150c16af5c31764ed48aa1dd937163d3cd269bafe588180211d"]
      - values: {"a":4,"b":10,"c":15}
        answers: ["sha256:91d3f505d2d5516967e346fc3ce0102f8b285d7dafc427c7c18e2c8e8ea0a503","sha256:c3897fbb7ad3cdf4a8694a288d4827620d7bad116e80c58d19efdfebf20db908","sha256:26659b04612d4f0af44132732a4644c8ea866b57fb277647f61fbb8f1c0cdc83"]
      - values: {"a":6,"b":8,"c":9}
        answers: ["sha256:4f36dd325b6e1a035dc99911ad169e4c25f6d8bf568e3d3e48d7f83ed529b779","sha256:1e2df2f402a80a2195ec513ea5718db40540911511864100c743a2aaecb087dc","sha256:cf034abe47c85bb7978b9f59fdd38c1d8087deac8a0b2ca481da45e045b79a75"]
      - values: {"a":7,"b":14,"c":10}
        answers: ["sha256:bf6c7d5e43c1e6865a05b438797ff9c7d4798796615189c5f44e6d791eb2bec9","sha256:1d5335ebe23f517845131075697a23b318bd0209c4e8345c4a0596068bec2f40","sha256:3b64a97c270e7c87cde13c3620d3025c0c28b06535c98f237d742d22711c82d1"]
  - id: trozos-iguales
    tier: 2
    prompt: |
      Se tienen tres cuerdas de ${{a}}$, ${{b}}$ y ${{c}}$ cm y se quieren cortar en trozos **iguales**, lo más largos posible, sin que
      sobre nada. ¿Cuánto mide cada trozo y cuántos trozos salen en total? Respuesta: `longitud;trozos`.
    variants:
      - values: {"a":36,"b":54,"c":90}
        answers: ["sha256:cc64fcd272aa73f65387ea12d8fadb688ff35109f53eaf1f683731a479376314"]
      - values: {"a":120,"b":84,"c":60}
        answers: ["sha256:5c985082e209ed1c94de7fc82d659d12c3d055a6f77741c078a7469651b020e3"]
      - values: {"a":45,"b":75,"c":105}
        answers: ["sha256:31aeaa49c8655ec51f23af1e12357273aa601e200cd1d75e92a80aa516228d2f"]
      - values: {"a":72,"b":96,"c":120}
        answers: ["sha256:5d79101eca22ab9b4fc0b52bb4e798225b2c0290b42a4869b46d178d461bdccf"]
      - values: {"a":150,"b":225,"c":375}
        answers: ["sha256:747c3b82df0d5326542d3644e3c1974001b37d1b37b7a9cced18296dad145143"]
      - values: {"a":64,"b":80,"c":112}
        answers: ["sha256:fa28192e43e8845c3a1db215687e5aa2ab9c9f77748e6412b9c67bb4eb6813d4"]
  - id: mcd-por-mcm
    tier: 2
    type: numero
    sig: 8
    prompt: |
      Sabiendo que $\operatorname{mcd}({{a}}, {{b}}) = {{g}}$, calcula $\operatorname{mcm}({{a}}, {{b}})$ sin factorizar. (Pista: el producto del
      mcd por el mcm es igual al producto de los dos números.)
    variants:
      - values: {"a":36,"b":48,"g":12}
        answers: ["sha256:3b11cb63ad75fd46aa29267876d6c50438fc10aaaad807ea7fe1d9c69eaef229","sha256:6b5235ae3a97fd1aa3c5772bb7f8432319b7bd525495732504f2d2a237b699a9","sha256:3ebbe5a3a3410a05c64d6b8df63707fb331ee055600d2839f6e37370b1da436d"]
      - values: {"a":90,"b":84,"g":6}
        answers: ["sha256:95e86746e606ddeee4cdec97d9b5968f58796026aa7489060eee29bb2a46f4a0","sha256:3fedcaf5d409a24c4b7d3ccea671bd1e1069596da493636b11e62d3d05cbc55d","sha256:a0c08ef4cacaa8b93b2f8ecf91895f35331bc0d272dc0bcef7068891096c9e26"]
      - values: {"a":45,"b":75,"g":15}
        answers: ["sha256:cc11fc6f72285153a1d4f1188ba1190301de162d32606a5904f3942055b5ddad","sha256:ec737b83b268f1e1d0d609145c59da5c418f7a19caaef35409d8a679c818a2a1","sha256:2218704a11023a8bb45f997fd7c6a03616af5cf3171be2e2441a38f1468fa5ad"]
      - values: {"a":28,"b":70,"g":14}
        answers: ["sha256:3694d92963c3b984c18778c2c887e81efc80d0edf7cac44589ee6ebd8b23021a","sha256:8b7294a564c19f10373a922cbc9c84d14214255dcdb6e079737f9e44267c17e8","sha256:2225c8637ccb8bac07f48a9d731fe0cffa9d8f65ded254b21eb83e3b24982e35"]
      - values: {"a":99,"b":66,"g":33}
        answers: ["sha256:82bf96fd46281fa9078b0f149b051944de59a8eac739f5eb95aa38c34362d107","sha256:9dcb2b7ed36c1fff899a7fb9ecf74342b9c84d55d56ab00d2dadb1420da674c8","sha256:a00b651e5963356cc16528cc03a93ff7f63d26ae9933001b92fddf6cbda5b4f1"]
      - values: {"a":120,"b":75,"g":15}
        answers: ["sha256:1d8b87a5a5ed12c7ee994643bc0d5423b788cd73063dc37bb4bf57689f9a3b2a","sha256:4fdc20b98d26b9891ca52ff1d6f8b8e87463c0404a41fc7d1cecc7d47e50ba22","sha256:8b247bd171ffdb0b9d34eddfb03a412e9254ede3e2af7e8026d62f047a017a22"]
  - id: menor-con-k-divisores
    tier: 3
    type: numero
    sig: 8
    prompt: |
      ¿Cuál es el **menor** número natural que tiene exactamente ${{k}}$ divisores?
    variants:
      - values: {"k":6}
        answers: ["sha256:47df7786e529c821bec133fce2b4ede9851a458b1789aaa28939279519c0c910","sha256:5a6333726fbcadddc07cfa3e800adb8b4d5de10e06bcdb63f5b821b8dc0935f6","sha256:2223a278d92df9425e121e3fe5761ea6bd5c9df5e253564c9ff1037942f2e2d3"]
      - values: {"k":8}
        answers: ["sha256:257e515d50da931faafb81da8edbe476644cf85d7dfdd765ebd70d75b89ca4a5","sha256:8f43925d3b2626b4fda98f9de38caffe9214b7d196d6ac57dac37f135d8473d6","sha256:a68d490bc033c2c74fb76d38947bfdbe5d65434b7ba039f9cf585b84ba41e4fa"]
      - values: {"k":10}
        answers: ["sha256:de893e02f964f2a7f194989b8ab945124d2ffbc59e7a74462d8ada6e95041e9e","sha256:02e7ee0f3456356d15456d2bec1adb3af4a38d239c97dc3219a843fe47a180ee","sha256:8302ce61d2ae73f9ae9c57dad848ad80fea6c5de49f92f1d922a01d2d4700324"]
      - values: {"k":12}
        answers: ["sha256:ac9b30653feb89a35e79c593b81e003ed2d1765b005e7eb4a0f6739bfb6e98fd","sha256:7d20e68fbb799bfcd2ff71969f1f4081319383e1bf0bd3430ba686dd5bfba6bd","sha256:01f4a4b21a1f474ab28a46c63fb2ff2a9629545164ac8bd13cbcb0ab3fe91395"]
      - values: {"k":9}
        answers: ["sha256:5b00de44759094f4eabe8d20a1551d80e72441d0b4ba2e17841495e598d17773","sha256:3165f480876f157195d1b713a4c7f3468ab9a72fe337cdff2440b45d9dacce63","sha256:1fa1fbcbe201ea04bce6b776c0a1ff5a1e4680dfa671167734d284cd9f44caf7"]
      - values: {"k":14}
        answers: ["sha256:1b22ac99a87633f054ff696a1677e474419ddf2ffd5169a32999e7aacd5a4aae","sha256:aa3b1f3acb44345d8e79da6b28a561b62652ae81100c8d9ea8fbbb1d46c83e4a","sha256:f663f74fa8c8cb5252b33d7a53231e65e202ace711d751821a7bdfa07d7ef610"]
  - id: criterio-del-3
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Demuestra el criterio de divisibilidad por $3$ para números de tres cifras: $N = 100a + 10b + c$ es divisible por
      $3$ si y solo si $a + b + c$ lo es. (Pista: $100 = 99 + 1$ y $10 = 9 + 1$.) ¿Sirve el mismo argumento para el $9$?
    sealed: "gz64:H4sIAAAAAAACCoVTTW/TQBD9K0/WHuLUjWKChByUA1J74RAhOGKQ1vYUrbof7o5dEVX9MT1WiD9QbvUfq3aLi9MUuO3M7Mx782bmKmGn+045m6yTU669qpRxDLHFBvlyKXGEfFnhCDU2mBVFsNPgnT0+J6HgLao0xMIzRlKxKG1pTzVarwx5tNIPt7YjVpxBjEnYoCjLbJbnMTMVGYhhhjvdqVY7NARRiAw7tM6jk7Zz6KSp1HBrY3AlFnjHw09c9ASxFSH9/kdvn9VYCZjhhksrnhiK+18LfFKYeA6xVyIbq3JvZPA1bvKJx+o7aAfit2A1JhxWIts5W9MeDWywxfFExpjbqDPyZGsVIV+Ce1Ih4i4gyrLSsj7ni156EkH8+fxUwyg2DtJ/602AByt/SWEaEqSDuPN5FsSN+o0kxEtTWI+NNepSsao0xaGIQoSmd2CnQ/lHQtByVKy03DNqdeYlLzDbHnB4LWDVH/ONmBAKrYqiELAO7OwzKUhrx4sUH0KuHe4Meceo47+bERNM6FmWNlbMl1/PcYw8bF5RlrpxHccOyLSeXup7kWSJ7yuv6mT9+SqpverIK5eskxPi2pnWWXq8m7/eQsC3jQvoywgcTii2lkc7mgGn7W3nOFm/us72kN733KkzVUv8b04rgdnuN/N0WjJ/VvKETE/ceQktOW61Mq1WtayVs8SYTYeaRlHDQBk7eOJO8v5m/ov9R+LW2YYi+XCsB0uIHeh7RI87ddEPt/vcv1w/AN9EXd2yBAAA"
  - id: r-multiplo-divisor
    tier: 1
    type: opcion
    review: true
    prompt: |
      Como $35 = 7 \cdot 5$, ¿qué es correcto?
    options:
      - |
        $35$ es múltiplo de $7$ y $7$ es divisor de $35$
      - |
        $7$ es múltiplo de $35$
      - |
        $35$ es divisor de $7$
      - |
        Ninguna, porque $35$ es impar
    answers: ["sha256:dff8707ebbdb3de2de1989253877b5469004655a0b36ddaee34ce8e03ff2536b"]
  - id: r-uno-primo
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Es el $1$ un número primo?
    options:
      - |
        Sí, porque solo es divisible por sí mismo
      - |
        Sí, es el primer primo
      - |
        No: un primo tiene exactamente dos divisores, y el $1$ solo tiene uno
      - |
        No, porque es impar
    answers: ["sha256:fcd1c508fdf822a5a86ab83acc09af527b97ff315cb03652510efa97058bd65a"]
  - id: r-criterio-4
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es un número divisible por $4$?
    options:
      - |
        Si termina en $4$
      - |
        Si el número formado por sus dos últimas cifras es múltiplo de $4$
      - |
        Si la suma de sus cifras es múltiplo de $4$
      - |
        Si es par
    answers: ["sha256:a3124b649ef81172caee073ced1111c77f62646b5b01baa9c3e898f78583a3ec"]
  - id: r-mcd-coprimos
    tier: 2
    type: numero
    review: true
    sig: 8
    prompt: |
      ¿Cuánto vale $\operatorname{mcd}(25, 36)$?
    answers: ["sha256:1b46db3e0fcdd53697f0191feceb264560a26d331264a93aa1e4e68818042905","sha256:749834acd337d293a80bd439344b5893d8d363ad4bbb566a5a6a3afe3f107225","sha256:cb8d259fbec823e021ce73b3e957011af455f577fc100ee2adc70c5ccd5a1ae3"]
  - id: r-mcm-multiplos
    tier: 2
    type: numero
    review: true
    sig: 8
    prompt: |
      Si $8$ divide a $24$, ¿cuánto vale $\operatorname{mcm}(8, 24)$?
    answers: ["sha256:7f4f7377d6c8c6db2a47fe08c000ea029645beec3a34831075d421372d6f27b1","sha256:f5d71945abfb98b37bfb97fa74ee77c0ec7e9ca50eb1590281e39e283152772e","sha256:4807e05185fa41506c004b15dd70b6963a8cb9a6b7a34693ecdb2b7bbf368315"]
  - id: r-mcd-o-mcm
    tier: 2
    type: opcion
    review: true
    prompt: |
      Se quiere cubrir un suelo de $360 \times 240$ cm con baldosas cuadradas iguales, lo más grandes posible y sin cortar. ¿Qué se calcula?
    options:
      - |
        mcd, porque se busca algo común
      - |
        mcm, porque se busca el mayor tamaño
      - |
        Ninguno de los dos
      - |
        mcd: el lado de la baldosa debe dividir a las dos medidas y ser lo mayor posible
    answers: ["sha256:d95e47a84de3a762f3c96a84001e175f427ee6dbb9f13881750c09de01453848"]
  - id: r-raiz-basta
    tier: 3
    type: numero
    review: true
    sig: 8
    prompt: |
      Para comprobar si $127$ es primo, ¿hasta qué primo basta probar como divisor? (El mayor primo menor o igual que $\sqrt{127}$.)
    answers: ["sha256:d3e13ed03500d9d53f27ce844c40eb4f15a75cc2721d33a846d36b5669b10c93","sha256:908db8185424e6cbcdad4fd97f5abde470752e0612d3ca7732ae123a4bad4f32","sha256:e9e2f78131cdef9ed2b5ee1301a7129c53ff9594d9a9257759f83d058480ab2e"]
---

# Divisibilidad: múltiplos, divisores, criterios, números primos, factorización, mcd y mcm

La tabla de multiplicar esconde mucha más estructura de la que parece. Hay números que se pueden partir en grupos iguales de
muchas formas ($12$ en $2, 3, 4$ o $6$ grupos) y otros que no se dejan partir de ninguna ($13$). Este nodo estudia esa estructura:
cuándo un número cabe exactamente en otro, cómo saberlo rápido, qué son los números primos (los «átomos» de la multiplicación) y
cómo se usan para resolver problemas de **repartir sin que sobre** (mcd) y de **coincidir otra vez** (mcm). Es también la base de
las fracciones y de la criptografía.

## Objetivos

Al terminar sabrás:

1. Decidir si un número es múltiplo o divisor de otro y hacer la lista de todos los divisores de un número.
2. Aplicar los criterios de divisibilidad por $2, 3, 4, 5, 6, 9, 10$ y $11$, y entender por qué funcionan.
3. Distinguir primos y compuestos, usar la criba de Eratóstenes y saber que hay infinitos primos.
4. Descomponer un número en factores primos y contar sus divisores.
5. Calcular el máximo común divisor y el mínimo común múltiplo (por factorización y por el algoritmo de Euclides) y elegir
   cuál de los dos resuelve cada problema.

## Qué debes dominar antes

[[mat-sistema-decimal-operaciones]] (división entera, $D = d \cdot c + r$; propiedad distributiva).

> [!question] Test de entrada
> 1. ¿Es exacta la división $84 : 7$?
> 2. ¿Cuál es el resto de $50 : 6$?
> 3. Escribe tres números que estén en la tabla del $9$.
>
> Respuestas: sí ($84 = 7 \cdot 12$); $2$; por ejemplo $18$, $27$ y $36$.

## 1. Para qué sirve

- **Repartos y medidas**: cortar sin que sobre, hacer grupos iguales, cubrir un suelo con baldosas enteras (mcd).
- **Calendarios y ciclos**: cuándo vuelven a coincidir dos autobuses, dos turnos o dos planetas (mcm).
- **Fracciones**: simplificar es dividir por el mcd, y sumar fracciones exige un denominador común, el mcm
  (el tema `mat-fracciones`).
- **Criptografía**: el cifrado RSA se apoya en que multiplicar dos primos grandes es fácil y factorizar el resultado, no.

## 2. Múltiplos y divisores

> [!practico]
> Si tienes $35$ caramelos y puedes hacer bolsas de $7$ sin que sobre ninguno, se dice que $7$ es **divisor** de $35$ y que $35$ es
> **múltiplo** de $7$. Los múltiplos de un número son su tabla de multiplicar, que sigue para siempre; los divisores son los
> tamaños de grupo con los que el reparto sale exacto, y son pocos.

$a$ es **divisor** de $b$ (y $b$ es **múltiplo** de $a$, o **divisible** por $a$) si $b = a \cdot k$ para algún natural $k$, es decir, si
la división $b : a$ es exacta. Se escribe $a \mid b$. *Ejemplo:* $7 \mid 35$ porque $35 = 7 \cdot 5$; $6 \nmid 35$ porque el resto es $5$.

- Todo número es múltiplo y divisor de sí mismo, y $1$ es divisor de todos.
- Un número tiene **infinitos** múltiplos ($a, 2a, 3a, \dots$) y **finitos** divisores (todos están entre $1$ y él).
- Si $a$ divide a dos números, divide a su suma y a su diferencia: $a \mid b$ y $a \mid c$ implican $a \mid b + c$.

**Todos los divisores, por parejas.** Los divisores van emparejados: si $d$ divide a $n$, también $n : d$. Basta probar hasta que
las parejas se crucen (hasta la raíz cuadrada). *Ejemplo:* divisores de $54$: $1 \cdot 54$, $2 \cdot 27$, $3 \cdot 18$, $6 \cdot 9$
(el $4$ y el $5$ no dividen, y en el $7$ ya nos hemos pasado de $\sqrt{54} \approx 7{,}3$). Son $1, 2, 3, 6, 9, 18, 27, 54$.

## 3. Criterios de divisibilidad

> [!practico]
> Para saber si $7\,560$ se puede repartir en $9$ grupos iguales no hace falta dividir: basta sumar sus cifras ($7 + 5 + 6 + 0 = 18$,
> que está en la tabla del $9$). Los criterios son atajos de este tipo, que funcionan por la manera en que escribimos los
> números en base diez.

| divisible por | si… | ejemplo |
| --- | --- | --- |
| $2$ | la última cifra es par ($0, 2, 4, 6, 8$) | $3\,578$ |
| $3$ | la suma de las cifras es múltiplo de $3$ | $4\,512$: $4 + 5 + 1 + 2 = 12$ |
| $4$ | el número formado por las dos últimas cifras es múltiplo de $4$ (o son $00$) | $7\,316$: $16$ |
| $5$ | termina en $0$ o en $5$ | $1\,235$ |
| $6$ | es divisible por $2$ y por $3$ a la vez | $1\,302$ |
| $9$ | la suma de las cifras es múltiplo de $9$ | $7\,560$: $18$ |
| $10$ | termina en $0$ | $930$ |
| $11$ | la diferencia entre la suma de las cifras de lugar impar y la de lugar par (contando desde la derecha) es múltiplo de $11$ (incluido el $0$) | $918\,082$: $(2 + 0 + 1) - (8 + 8 + 9) = -22$ |

Para números que son producto de dos que **no comparten divisores** (como $6 = 2 \cdot 3$ o $15 = 3 \cdot 5$) basta comprobar los dos
criterios. Para el $12 = 3 \cdot 4$ también; pero no para el $8 = 2 \cdot 4$ ($12$ es divisible por $2$ y por $4$ y no por $8$).

> [!formal] Con rigor: por qué funciona el criterio del 4 (y el del 2 y el 10)
> Todo número se escribe $N = 100\,q + u$, donde $u$ es el número formado por sus dos últimas cifras. Como $100 = 4 \cdot 25$, el
> sumando $100q$ es múltiplo de $4$, así que $N$ es múltiplo de $4$ si y solo si lo es $u$. Con $N = 10q + c$ ($c$ la última cifra) y
> $10 = 2 \cdot 5$ sale igual el criterio del $2$, del $5$ y del $10$. El del $3$ y el del $9$ se demuestran en el ejercicio de desarrollo
> (usan que $10 = 9 + 1$), y el del $11$ usa que $10 = 11 - 1$. $\blacksquare$

## 4. Números primos

> [!practico]
> Un número primo es uno que no se puede partir en grupos iguales salvo de la forma tonta: un grupo con todo, o grupos de uno.
> $13$ caramelos no se reparten exactamente entre $2, 3, 4, \dots, 12$ niños. Los primos son las piezas básicas: igual que todas
> las palabras se escriben con letras, todos los números se fabrican multiplicando primos.

Un número natural mayor que $1$ es **primo** si sus únicos divisores son $1$ y él mismo, y **compuesto** si tiene algún otro. El $1$
no es primo ni compuesto (tiene un solo divisor). Los primeros primos son $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \dots$; el $2$ es el
único primo par.

**La criba de Eratóstenes.** Para encontrar todos los primos hasta $N$: escribe los números de $2$ a $N$; el primero ($2$) es primo:
tacha sus múltiplos; el siguiente sin tachar ($3$) es primo: tacha sus múltiplos; y así. Basta llegar a primos cuyo cuadrado
no pase de $N$: hasta $50$ se tachan los múltiplos de $2, 3, 5$ y $7$ ($7^2 = 49$) y quedan los $15$ primos
$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47$.

**Para saber si un número es primo** basta dividir por los primos hasta su raíz cuadrada: si $n = a \cdot b$ con $a \le b$, entonces
$a \cdot a \le n$, así que el factor pequeño no pasa de $\sqrt n$.

> [!formal] Con rigor: hay infinitos números primos (Euclides)
> Supongamos que hubiera solo un número finito de primos, $p_1, p_2, \dots, p_k$. El número $N = p_1 p_2 \cdots p_k + 1$ es mayor que $1$, así
> que tiene algún divisor primo $p$, que tendría que ser uno de los $p_i$. Pero $p_i$ divide a $p_1 \cdots p_k$ y a $N$, así que divide a
> su diferencia, que es $1$: imposible. Luego la lista no puede contener todos los primos. $\blacksquare$

## 5. Descomposición en factores primos

> [!practico]
> Descomponer un número es desmontarlo en sus piezas primas: se divide entre el primo más pequeño posible, y luego otra vez, hasta
> llegar a $1$. Lo sorprendente es que, empieces como empieces, salen siempre las mismas piezas.

Se divide sucesivamente entre $2$ mientras se pueda, después entre $3$, entre $5$, $7$, … y se anotan los primos usados:
$$
360 = 2 \cdot 180 = 2 \cdot 2 \cdot 90 = \dots = 2^3 \cdot 3^2 \cdot 5 .
$$
**Teorema fundamental de la aritmética** (un **teorema** es una afirmación que se ha demostrado): todo número mayor que $1$ se descompone en producto de primos, y esa descomposición es
**única** salvo el orden de los factores. (La existencia se ve por el procedimiento; la unicidad se demuestra en
[[mat-matematica-discreta]].)

**Contar divisores.** Un divisor de $2^3 \cdot 3^2 \cdot 5$ es un producto $2^a 3^b 5^c$ con $a \in \{0, 1, 2, 3\}$, $b \in \{0, 1, 2\}$,
$c \in \{0, 1\}$. Hay $4 \cdot 3 \cdot 2 = 24$ elecciones: $360$ tiene $24$ divisores. En general, se suma $1$ a cada exponente y se
multiplica.

## 6. Máximo común divisor y mínimo común múltiplo

> [!practico]
> Tienes una cinta de $48$ cm y otra de $60$ cm y quieres cortarlas en trozos iguales, lo más largos posible, sin que sobre nada:
> el trozo debe caber exactamente en las dos, así que buscas el **mayor divisor común** ($12$ cm). En cambio, si un autobús pasa
> cada $12$ minutos y otro cada $18$, y acaban de coincidir, la próxima coincidencia será en el **menor múltiplo común** ($36$
> minutos). Preguntarse «¿busco algo que quepa en todos o algo en lo que quepan todos?» decide cuál usar.

El **máximo común divisor** $\operatorname{mcd}(a, b)$ es el mayor número que divide a ambos; el **mínimo común múltiplo**
$\operatorname{mcm}(a, b)$, el menor número (distinto de $0$) que es múltiplo de ambos. Con la factorización:

- **mcd**: los primos **comunes**, cada uno con el **menor** exponente.
- **mcm**: **todos** los primos que aparezcan, cada uno con el **mayor** exponente.

**Ejemplo resuelto 1.** $84 = 2^2 \cdot 3 \cdot 7$ y $120 = 2^3 \cdot 3 \cdot 5$. $\operatorname{mcd} = 2^2 \cdot 3 = 12$;
$\operatorname{mcm} = 2^3 \cdot 3 \cdot 5 \cdot 7 = 840$. Comprobación: $12 \cdot 840 = 10\,080 = 84 \cdot 120$.

**Ejemplo resuelto 2 (la abuela).** Jaime visita a su abuela cada $2$ días, María cada $4$ y Raquel cada $7$. Si hoy coinciden, vuelven
a coincidir dentro de $\operatorname{mcm}(2, 4, 7) = 28$ días.

**Algoritmo de Euclides** (sin factorizar, útil con números grandes; un **algoritmo** es una receta de pasos precisos que siempre termina): $\operatorname{mcd}(a, b) = \operatorname{mcd}(b, r)$, siendo $r$ el
resto de $a : b$, y se repite hasta que el resto sea $0$. *Ejemplo:* $\operatorname{mcd}(120, 84)$: $120 = 84 \cdot 1 + 36$;
$84 = 36 \cdot 2 + 12$; $36 = 12 \cdot 3 + 0$. El mcd es el último resto no nulo, $12$.

> [!formal] Con rigor: por qué funciona Euclides y por qué mcd · mcm = a · b
> Si $a = b\,q + r$, todo divisor común de $a$ y $b$ divide a $r = a - bq$, y todo divisor común de $b$ y $r$ divide a $a = bq + r$: las dos
> parejas tienen **los mismos** divisores comunes, luego el mismo máximo. Los restos disminuyen, así que el proceso termina.
> Para la segunda propiedad, en cada primo el exponente del mcd es el menor de los dos y el del mcm el mayor; como
> $\min(x, y) + \max(x, y) = x + y$, el producto $\operatorname{mcd} \cdot \operatorname{mcm}$ tiene los mismos exponentes que $a \cdot b$. $\blacksquare$

Dos números con $\operatorname{mcd} = 1$ se llaman **primos entre sí** (o coprimos), aunque ninguno de los dos sea primo: $8$ y $15$.

## 7. Errores típicos

- Decir que el $1$ es primo, o que todos los impares lo son ($9$, $15$, $21$ no lo son).
- Confundir múltiplo con divisor ($35$ es múltiplo de $7$, no divisor).
- Aplicar el criterio del $4$ mirando solo la última cifra ($14$ termina en $4$ y no es múltiplo de $4$).
- Combinar criterios de números que comparten factores ($2$ y $4$ no bastan para el $8$).
- En el mcd, coger primos no comunes; en el mcm, olvidar alguno o no tomar el mayor exponente.
- Usar el mcm cuando el problema pide repartir sin que sobre (es el mcd), o al revés.

## 8. Resumen

- $a \mid b$ si la división es exacta; infinitos múltiplos, finitos divisores; divisores por parejas hasta $\sqrt n$.
- Criterios del $2, 3, 4, 5, 6, 9, 10, 11$ (y por qué funcionan: $100 = 4 \cdot 25$, $10 = 9 + 1$, $10 = 11 - 1$).
- Primos: exactamente dos divisores; criba de Eratóstenes; basta probar hasta $\sqrt n$; hay infinitos (Euclides).
- Factorización única; número de divisores = producto de (exponentes $+ 1$).
- mcd: comunes con el menor exponente; mcm: todos con el mayor; Euclides; $\operatorname{mcd}\cdot\operatorname{mcm} = a \cdot b$.

## Repaso: lo que debe quedarte dentro de un mes

1. La diferencia entre múltiplo y divisor, y cómo se hacen los divisores por parejas.
2. Los criterios del $3$, el $4$, el $9$ y el $11$.
3. Por qué el $1$ no es primo y por qué basta probar hasta la raíz cuadrada.
4. mcd para «repartir sin que sobre», mcm para «volver a coincidir».
5. El algoritmo de Euclides.

## Siguiente

[[mat-potencias-raices]] (los exponentes de la factorización son potencias) y el tema `mat-fracciones` (simplificar y sumar
fracciones con el mcd y el mcm).
