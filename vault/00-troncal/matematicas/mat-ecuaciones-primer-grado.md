---
id: mat-ecuaciones-primer-grado
title: "Ecuaciones de primer grado: ecuaciones equivalentes, paréntesis y denominadores, casos especiales, fórmulas y problemas"
area: matematicas
trunk_level: 3
prerequisites: [mat-expresiones-algebraicas, mat-fracciones]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 11: «Álgebra», secciones 2.1-2.2 (el lenguaje de las ecuaciones, ecuaciones equivalentes, resolución) y 3 (resolución de problemas mediante ecuaciones). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2011%20algebra.pdf"
  - "Matemáticas 2.º de ESO (LOMLOE), capítulo 10: «Álgebra», secciones 2.1-2.2 (ecuaciones de primer grado con una incógnita) y 3.1-3.4 (procedimiento, problemas numéricos, de geometría y otros). Apuntes Marea Verde, rev. 10/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/2ESO/2_10_algebra.pdf"
  - "G. Pólya, «How to Solve It», Princeton University Press (2.ª ed., 1957): las cuatro fases (comprender, planificar, ejecutar, comprobar) aplicadas al planteamiento de ecuaciones."
hints:
  - "Concepto: resolver es transformar la ecuación en otras equivalentes (con las mismas soluciones) cada vez más sencillas: sumar o restar lo mismo a los dos miembros, o multiplicar o dividir los dos por un mismo número distinto de cero."
  - "Herramienta: orden seguro: quitar paréntesis, quitar denominadores multiplicando por su mínimo común múltiplo, pasar las x a un lado y los números al otro, reducir y despejar. En un problema, escribe primero qué es x y comprueba al final en el enunciado."
  - "Documentación: Marea Verde 1.º ESO cap. 11 (secciones 2 y 3); 2.º ESO cap. 10 (secciones 2 y 3)."
exercises:
  - id: ecuacion-sencilla
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Resuelve la ecuación ${{iz}} = {{de}}$.
    variants:
      - values: {"iz":"7x - 4","de":"3x + 16"}
        answers: ["sha256:c0844913f3aa61559edf78bdc23cbe6e0a8e95790ed61e09f987f248ad98d3a8","sha256:86d28873a56bcbb1be88cc38bd3e6276592be490b4fb4cbab0b22e4ae71a3ee7","sha256:2f66abe4f44fed89bc59ce6c5adc88df3324035c8531c1fb72b6c3d1e1c02f57"]
      - values: {"iz":"2x + 9","de":"5x - 3"}
        answers: ["sha256:c972f1d6bd61f68b906078c9e09f94ab57b95cd4eb2be53bf94c1af0446adafc","sha256:3ac20491b3f2cfcfccde329eb082bc149202c00ec4f862346da4382b9b1f7bf5","sha256:39d9773fe82ba964155254f0a8054a2c3fd83689bb862edd68719b3a4668f6c7"]
      - values: {"iz":"-3x + 8","de":"x - 12"}
        answers: ["sha256:10a21fa62629026589ac73fbd2e47fc91e735ab01c49493e3f3722895e697690","sha256:b2159fae270d208ba992e8ceaada4d102025694e3662990dfe8c6af66a436ef8","sha256:2cfdfdd3fc3825e41b42497a6fbc764145b1378e53b2321a6a07f05912042e2b"]
      - values: {"iz":"6x + 1","de":"2x - 1"}
        answers: ["sha256:96173651bd243fbe4a9d16743ac6dcf0dad83483d52e0a2fc74cf81e04411062","sha256:8af4df80ce69c0c0058c8eca87b3ca6849b069b17d0f52590cb8f99cad75e1d5","sha256:b9f63b2c807ecc801e4a852d6a47a5291240ee47c43361bcc6e6c35e1c7978d6"]
      - values: {"iz":"4x - 15","de":"-x + 10"}
        answers: ["sha256:66482dc9190daefc907c4ff1ad17510db9508c35a18adfd9e9ee6db6d43d3842","sha256:b18ba3d69b2f8a98b9234de46b80326a4ee8dfbbc64961b565b38235e753d5d6","sha256:2471359822a2156e75b9545b8e5b6de0160a8acba6924a775b002edd54c73a30"]
      - values: {"iz":"9x + 2","de":"5x"}
        answers: ["sha256:7be376cf68372d603f52663b94f4d760165342d757630ceefd00c8531a48636f","sha256:f175480efdedd6a623301e50c541a5ae96dc84af9f5323191e5a07c612710ffe","sha256:b5d04535636c02347cced23399b5e2bb1029183ee26194fd9cd7b44f91c47463"]
  - id: ecuacion-con-parentesis
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Resuelve la ecuación ${{e}}$.
    variants:
      - values: {"e":"5(x + 2) - 3(x - 1) = 20"}
        answers: ["sha256:eb54ec587ddae895a9a9646f90b8de923c0d90a55cea24116b8e5d73208bed0b","sha256:6b9391a061f1963a523874193c7db3dcc8f7785e9f684cc555ee332cdafacf75","sha256:808ab54000db473967a7f7d066acd7e1dd32f51f339d7e9af566e52d7aec912e"]
      - values: {"e":"4(x - 3) - 2(x - 5) = 6"}
        answers: ["sha256:d6e02334d92da829e1f79998a868263b0857194625d52d85d51f11dac51b9961","sha256:734d355952fc481f922665481278b3fda3442a5c8ebb698fb2ca3762e878540b","sha256:9d514f641221d9c86dbb79995e93d1e262002a8f69eaf38345184eba4258670f"]
      - values: {"e":"6(x + 1) - 2(x + 2) = 26"}
        answers: ["sha256:d0207cb74554dce260652133af64821535b1313f72b2e2f35724767e5677ec70","sha256:1f7edbf980d9a862ca3cb24bd52b99d5bffecc726fdace5ef68e9f695271a975","sha256:04cc133c41d6b435acc0ff0e217e7cd2b1ae12798f7783103e163e47a953d345"]
      - values: {"e":"3(x + 4) - 5(x - 2) = 0"}
        answers: ["sha256:d5e23b666ad4d0c26025bfe93743b08062134d06d8bf0efa7acc2a6ec2c252ce","sha256:e97b9c3a42ec4930ca02f76a9fcbfb37df460663a34828cc219a573ab88a88f4","sha256:5f56071d4b30e975769fbbab2381de98fbef699bf7e895c0cff7ab37b38cc1e0"]
      - values: {"e":"2(x - 1) - 7(x - 3) = 18"}
        answers: ["sha256:f5c87cc50d9e4c58fa0bc24f7cd7c1872ef193c8775ab0a8086a83fc11506dac","sha256:23a093e28581361d6080c2ad7c4e1025b0af8e944c6ba0a2feac204b80e53fb4","sha256:c77c2e63203667c253624f57c4eb9e7619c52afcdc69ace9b629cdf43c36cdca"]
      - values: {"e":"8(x + 2) - 3(x + 4) = 1"}
        answers: ["sha256:326f0c737887d71435b3ef14ae065cf75b42aeae87793d2d86b6beaeb88e7ef1","sha256:1ec64f1e07cc4f41d52439fa0c9c8e52e8480a01b84e7791d64d721655941dac","sha256:ed4473d2728b55b468fb0827a96540bbdd02d01ad9155ad615cfeea82da3d145"]
  - id: ecuacion-con-denominadores
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Resuelve la ecuación $\dfrac{x}{{{a}}} + \dfrac{{{num}}}{{{c}}} = {{d}}$.
    variants:
      - values: {"a":3,"num":"x - 1","c":4,"d":5}
        answers: ["sha256:594365a4a3033fb35b5d7b69ae5bfa30e5264cf881c37b91772c5c596748b04c","sha256:8dcaaa574bf497a520c1eae78a9b8e2f2a4a28527b075025d8c45f5fcec5a414","sha256:86ab8e5901c006b0b85970ef24b9089aeca081202fba4aadb6652171eee8d9b3"]
      - values: {"a":2,"num":"x - 3","c":5,"d":5}
        answers: ["sha256:8f4716c8fa056046b1ae510220d157bd87219c4cf55513f49eb7dfacfcb72ecd","sha256:15f8526c304b30638721934181da92de172c5cd881cb9f2a5af688b6846532e5","sha256:d3bcd3c2dffed51f2a80160d6cc09a8247f3145e8e1ad5b692cac15ad31ae182"]
      - values: {"a":4,"num":"x - 2","c":6,"d":3}
        answers: ["sha256:69439ae146e35d436859ce634dd5bf46b928bba43f7b75f0681bdbe0cafc85b0","sha256:980754e066c35136b0d90b1bbca298a20763124db3b736853a125ce7f6570a99","sha256:b39573a685ee71e8ceb32d0fd502fe9bfcc98959af8873a96e4862d678c72678"]
      - values: {"a":5,"num":"x + 1","c":2,"d":11}
        answers: ["sha256:5fc5fad92e9c0f565828a6888ad7336364f1356c6899527f43651a71090dd856","sha256:5045c357a5def6c2d8d212e3eeec3896c62661b554b325629e83884fec659998","sha256:dbb6d669569cd592570bd68c1efea9e0310e93bfce1b3836463b9d2849399580"]
      - values: {"a":6,"num":"x - 3","c":3,"d":4}
        answers: ["sha256:2c424dff7714ac744e963677b4e4daa9bb0dc3faaddd2944ec2185978bd03915","sha256:1c2f62dec822e7f191e6269a22f02d793afb911308696e64832c6661eb00270d","sha256:174603ead5adba3fc0afd3d13939f84b13d886d7c1efd4fa93d128fcde6c75b6"]
      - values: {"a":3,"num":"x - 6","c":9,"d":4}
        answers: ["sha256:a5abf19de43ae2b7c6f33c1cb4daccb2fccb02b1fae69d8fd82134660fc409ab","sha256:6d65bdf8a33132a0a15cbde53db668e629b0253ae07e2e8e09cfa3203dc92e06","sha256:70d6073f6054b60efd82f36fac5989596cf09ef04e5d4ea89ebf98cf7fd936b0"]
  - id: cuantas-soluciones
    tier: 2
    prompt: |
      Resuelve la ecuación ${{e}}$. Si tiene una única solución, escríbela; si no tiene ninguna, responde `ninguna`; si cualquier
      número es solución, responde `infinitas`.
    variants:
      - values: {"e":"3(x + 2) = 3x + 6"}
        answers: ["sha256:a724ba6c23d80d6773443f76c73e9266fc4df303d11b45f6f27de0de6ef2e2e6"]
      - values: {"e":"4(x - 1) = 4x + 5"}
        answers: ["sha256:308b666bfd216587c69de1a2b90c5ed164a22ca51866e6624a3ac9f0c7bfe560"]
      - values: {"e":"2(x + 5) = 3x + 10"}
        answers: ["sha256:5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9"]
      - values: {"e":"5(x + 3) = 5x + 14"}
        answers: ["sha256:308b666bfd216587c69de1a2b90c5ed164a22ca51866e6624a3ac9f0c7bfe560"]
      - values: {"e":"6(x - 2) = 6x - 12"}
        answers: ["sha256:a724ba6c23d80d6773443f76c73e9266fc4df303d11b45f6f27de0de6ef2e2e6"]
      - values: {"e":"3(x - 4) = 4x + 1"}
        answers: ["sha256:59100e1b869f778eb1d0975e653f881efd13fa8ccb0678cd1856156b3de6207e"]
  - id: numeros-consecutivos
    tier: 1
    type: numero
    sig: 10
    prompt: |
      La suma de tres {{tipo}} es ${{S}}$. ¿Cuál es el menor de los tres?
    variants:
      - values: {"tipo":"números enteros consecutivos","S":78}
        answers: ["sha256:5bcd5531fc8760e05011eb1c89a9dcd27459fee3c607bf8dde6555a2ab971585","sha256:c86a83045941254e9fdab44cc059ca27129824412512e11313aea7f08a8b0a59","sha256:a805ea6eeb7357ecdeed3310406cdc7493f5fda21ffbafeb605949230bd4c6c5"]
      - values: {"tipo":"números pares consecutivos","S":114}
        answers: ["sha256:05fb3ce843652196fdc8295bd52dd6a388f1486985934e4e6df4b06a40912cf0","sha256:5c942a73f80cdaeeff8a8926e9aa3316998a1fc5f5c7aafa31fc646770265050","sha256:b0bd5b25c46979ea7e274282f18ff9060c6c3dd04b4ba81a071a182939e994a6"]
      - values: {"tipo":"números enteros consecutivos","S":120}
        answers: ["sha256:9b356320f3cedda76af0478e21fa377546f932d8e600807bbfc75abdc8afd967","sha256:41f2374f9eaea9759da16ef76dce9c69b4160237670348bdbd5f131482e803b4","sha256:37d43bd6fa99505ab8a36899ea5d65137807de10991642714870b7000a8cb723"]
      - values: {"tipo":"números pares consecutivos","S":66}
        answers: ["sha256:c667293b5f7203e93440e91be504583280903d1a30e2c37ff9ceae966450c5dc","sha256:486b974955be705b8acce9a7cf5eaaa8926257974976a3cb12599274978b6cdc","sha256:3fcaa0f74e9109e88af904ca64aee218411964548c4b08f4a941590c8da61f92"]
      - values: {"tipo":"números enteros consecutivos","S":-33}
        answers: ["sha256:15c9ece13f1ca2e49b313d99a8225f12fc862e3358d71d763f727146a8ed321d","sha256:70fe1947dcb2f0eecdcaa0688862d74e0faa13d725e133efd76dca0247981d5d","sha256:a9d81f2a4b44f8af144bb9146843a67a8281ad7e6aa77ce35f04494e6f14aa17"]
      - values: {"tipo":"números pares consecutivos","S":222}
        answers: ["sha256:87b238798390f4b83c0fef39bd4442ce598b76f73ab2f419969ccc642fd2cb78","sha256:d73b2c811539ed351926152fd9f330f411dbc2556933329c2acf9cb645fd38f2","sha256:fd3cb88c9d69a25feb018401badec22c2acdce71941adf738ba636f547603821"]
  - id: problema-de-edades
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Un padre tiene ${{P}}$ años y su hijo ${{H}}$. ¿Dentro de cuántos años la edad del padre será {{k}} de la del hijo?
    variants:
      - values: {"P":36,"H":6,"k":"el triple"}
        answers: ["sha256:a19722df6ec25d73d9cc59f619464c0aca890abc95bc820a512dcdcc3ac04e99","sha256:4fecb8d9c5f270df5a17174e70a614cfb030be55be6f2d7ce8fdee9addaa2f9b","sha256:2c2bf54871c7e7f54d891baddd0dbbfd5075a0bfc9354061ae0c5da98412b218"]
      - values: {"P":45,"H":14,"k":"el doble"}
        answers: ["sha256:3257eed84417b2ee1d63d7022f19d37fa5d685321058a33af46833a853a4d4d9","sha256:6d5aff8bdb4d64afbb6f6b3bfc46755e3b0969ef0964240f0d5dcf2ab15194ff","sha256:e6617d388bafd3900dc49b507a20585d530109106edcbab0ee6591529efe0160"]
      - values: {"P":50,"H":8,"k":"el triple"}
        answers: ["sha256:5695c2621e526d71d776ad38fb60716d21106c5e2aeaf9b8880426abcf18bda3","sha256:3a205419362922a773b2b9f313772deb3bf828f12c28ce76709b8dfbf4c48082","sha256:e0059ae86981aa6753c52c49bede41edaf08300f54065e1c3dba30b903cc2e8e"]
      - values: {"P":33,"H":3,"k":"el cuádruple"}
        answers: ["sha256:e0eeb23d8b79d0f26b1c77456d8c11a83f00971fcb44336e78c5ff46ae28cf1b","sha256:cb2493111790439243a20db614365498cbc93de77a1952c50bf9104399d80e79","sha256:144ab2e840b86617bf825d08e952f4f393923057ff1406292e1cd5463df7f357"]
      - values: {"P":42,"H":11,"k":"el doble"}
        answers: ["sha256:fa7097c7a0d7805066a23df15021a96861808cab6baf356affae8894817dedd9","sha256:7a420bfabb31a517a87bb4500b0abc7f063c9166c3690c3bd1f960f095065233","sha256:a7308a0b81f242e6c492f0a76c70e580bca4ae330af5c8b4a3ebcdf0fbe5a17b"]
      - values: {"P":64,"H":13,"k":"el cuádruple"}
        answers: ["sha256:a44d231c039926d05a6631b14571adaabde98608368ba57282a8350e274f9f40","sha256:f30249792a9aa3f1f10d32dec994bf6bcce961bad0a3365f882e106df2abde7c","sha256:64e6f3e4932186edae278bdd2c5c3752689ce1f00778c40da17c9aea9700bc58"]
  - id: rectangulo-por-perimetro
    tier: 1
    type: numero
    sig: 10
    prompt: |
      El perímetro de un rectángulo es ${{P}}$ cm y el largo mide ${{d}}$ cm más que el ancho. ¿Cuánto mide el ancho, en cm?
    variants:
      - values: {"P":46,"d":"5"}
        answers: ["sha256:49e577fe230c798fcda24a69e69cc29ed718d9a6e9bad6589abaf9950a49d257","sha256:19edd536da767a960cd806b5216573892f349c5087d2497fb6137758f4a4d446","sha256:47865a2f9203231b143218bbd55ec5aed5e003aa0f906e6c8a571816c70902a0"]
      - values: {"P":60,"d":"8"}
        answers: ["sha256:0d2f0a5f490eceb653c200e7fbb9b12cd95c4826f0fa7c59bebb061c2c1824b3","sha256:29405da9559be402714fc700238835200f10cf6d77a407d889a052489add6786","sha256:15c79e75500d473b43595f615a2ace29ed336094f35b4af3088fa65b30613450"]
      - values: {"P":38,"d":"3"}
        answers: ["sha256:e91cc62be8aebd82936dfd49085ad1d78c072de9cf4b60236a2c8862e5b2475e","sha256:55f7380b741deda996c27b33e50f76d31510894ddc01b3916546f2fd1c69d47d","sha256:6626f736d53b166212240e5c337cad9b7dd7f35025f9149557592a40079ae1b2"]
      - values: {"P":100,"d":"14"}
        answers: ["sha256:3095121a36902e34fc824465c4bf2b2dd58e769b8c38cb427e493817746ca119","sha256:bb2497704dcf4330cfea35803f2b2531d70ba8882cbb7a0745c2f9dde6f761d5","sha256:bf10ed750dce5b48eb35cc4bfbe107a92b2c795ff00382e370ec70efb8eeb045"]
      - values: {"P":27,"d":"2{,}5"}
        answers: ["sha256:161706ff83f7a9fe2e5484e0e5563bd7f5e0e5c8d9772662d5b79d58bd97114e","sha256:c2eada7d68e2f2614ef53d33dae6d5fc23da39b42fa4882a060cb7c261e0d6c3","sha256:999d0ad011b5800abd490212ef95e63751e9ca01a39887033acbcdb3b1cd0628"]
      - values: {"P":84,"d":"20"}
        answers: ["sha256:443dee0a5a33c849c75c6bbf11e61c7dae314c90ae9db4eb73eff804b405fadc","sha256:dfaeff534fe82189b2832b114cdf1f6bb4ffcda3400b2d59e445380a19e3ef43","sha256:5a24cb2d6e111dd34970819a7a2fed368256832ca19fa42b39e2adf797c15cee"]
  - id: problema-de-monedas
    tier: 2
    type: numero
    sig: 10
    prompt: |
      En una hucha hay ${{n}}$ monedas, unas de $2$ € y otras de $50$ céntimos, que suman ${{V}}$ €. ¿Cuántas monedas de $2$ € hay?
    variants:
      - values: {"n":20,"V":25}
        answers: ["sha256:25dfb2ba5c2cca47495c6ec0b54daabaf1a4603b99ec1afb3ab9dd129967994e","sha256:f2c401394dc80fa7ee5def5cd313574c537b96149ca8d9ee0b751922d9f9ddc7","sha256:c807010b4194fc9d266fb99e8b2ac15de9d67afbd6263f75ce6cea771babc069"]
      - values: {"n":15,"V":18}
        answers: ["sha256:5fd674a80db174c35cf38ae4daa533111ee8001738e6e137474ac19848abf73e","sha256:d48bc92ab024984dc08cede042445bc261f67b6f6a85c2e9b11837c2465b86ed","sha256:06196301d50a9404dd7594b2b18f530219b00d3cfed38c61d935279956700512"]
      - values: {"n":30,"V":33}
        answers: ["sha256:09bc01ff06f08211df3445c248ca272922cdea6e779068123ce2852d7632a2ad","sha256:616337a03bd584a47ec12b82f9b0cbc87dfa84b34e1b8be80709c9d900eb6b9f","sha256:d115515cde73cc0359725c05c5f2300ae7ab9d3e948b24f190e40334c69f680e"]
      - values: {"n":12,"V":15}
        answers: ["sha256:f2867f3df1efad80d9c951c8e4e3de82303e0f4e5d65f9b2eedb58ccd01fc23f","sha256:af279b5fd00a967fdd8c809234199c29bd671deb7c64ea98bf8439d51013e630","sha256:9946ad7686d3fc69c395e31a6abd7117cf6f51e33b1506b5eea9e150c7a99a50"]
      - values: {"n":40,"V":50}
        answers: ["sha256:1f1176f772c381bc8bf31dfc79e6dcb67703c7947cd8a650300c33a2611c5164","sha256:c90e5cb024196c0db326d68759a0f9d2ea3a6412ae9b477c80d7cd6ddc4e950f","sha256:51b88e6ed1236150638ec895bc4bc15be8d97b5f1fb5e41aee020a61a738c0c1"]
      - values: {"n":25,"V":41}
        answers: ["sha256:dad28022afe9a1325a4d1c64b60bac943dcd464b5f8505eb76d061ceb2cd8535","sha256:4cec7507e75e60169397fae03b17f00f9a6bff25da5ee9ae16580d38e9fdbb0f","sha256:004cad460a0512c9d0c30206ea07b57edae2d6a85619dd4b5bfb22ec7215e7ea"]
  - id: moviles-que-se-cruzan
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Dos ciudades están a ${{D}}$ km. A la vez salen un coche de cada una, hacia la otra, a ${{v1}}$ km/h y ${{v2}}$ km/h. ¿Cuántas horas
      tardan en cruzarse?
    variants:
      - values: {"D":300,"v1":70,"v2":80}
        answers: ["sha256:3458b7c04be91342c7de7da6ef075eb7ebef06c4362ab3b694945280839b9a6b","sha256:10493aaa7dd83fceb26d1b6c213b0ae04ec7968951d123fe2f21151480b5bdc0","sha256:324e865dc3b7222252c235bbf26f50978bc8ccc790d24865060560a459db2f65"]
      - values: {"D":450,"v1":90,"v2":110}
        answers: ["sha256:07bc62f18261dcaff649f2c77c9ef65706b2152618601b24175da297e6f0bea2","sha256:502e098f7a2f67f200cb59832b3f5bb3cdc2a391680a7a46099d1ff9e8bc4cdc","sha256:07d675fe2b797432d32d63f0c5ab9f010596474131133eb8633f0fad7600502a"]
      - values: {"D":210,"v1":60,"v2":80}
        answers: ["sha256:c946009beeb3bd01785e07e26f6a92e9d89e63b8a92c2644cf55bbe1ee5091e8","sha256:30c8e0b726797dfab16a826827ee8c8f09a259337001b1ec485b96207a3ad38e","sha256:c47b01aa494cef9fa7f7c5aa3f782cadfa4ca97ae15faf3b310231ba77f41278"]
      - values: {"D":96,"v1":50,"v2":30}
        answers: ["sha256:e4a3de405d41c978134f49a6da9f7871b3a972557d5ec4834b068c53e4a7c935","sha256:edcdf8a5f2d45d45f25d7b297e3abcf6e1d056ddf8180e07ff677945117e821a","sha256:fbd197334af0af18b6fe5a3e566edf45e263837fd4cd535112b4fb50a683bf92"]
      - values: {"D":330,"v1":100,"v2":120}
        answers: ["sha256:970753d3489148087f017d4458d7aa1e9ec1948274176167ccf550a3430aa890","sha256:a27bd96706e145ec59830650b9f6a1339013903cf6c947a268659a8fa490dda1","sha256:2bf7189a4aed684b6d3560ec917d433dbe89cb936bafccd27dd788db3bfd227a"]
      - values: {"D":175,"v1":45,"v2":55}
        answers: ["sha256:0ead8089153eb7604ee1e7b2b10f974dcde04c3762f39d281139cc9b0646233e","sha256:2234dd2cd49c7b245fcf22b8f31b6c73e212250e7803a3066be6b0306737c1d2","sha256:ba59654143db1ecb92fa17bc091855405bdb03301a1de9eb32447f3369cc262c"]
  - id: dos-grifos
    tier: 3
    type: numero
    sig: 10
    prompt: |
      Un grifo llena un depósito en ${{a}}$ horas y otro lo llena en ${{b}}$ horas. ¿Cuántas horas tardan abriendo los dos a la vez?
    variants:
      - values: {"a":3,"b":6}
        answers: ["sha256:1681e74f7e7934a3d92325f6cfb292f728b1fb7245171b237b4221e61de75f0a","sha256:b225305920096ffd66077064ae741cb9f3b00de8798bde50a378877c3deeee1f","sha256:69c705354ba53b854e6da506e6f5386b61a19dbd20894382f9bb591f7e1826a9"]
      - values: {"a":4,"b":12}
        answers: ["sha256:0ce9b84b73a5f841be8bec013718253c9f68c225be462e033808055cb31a3bdc","sha256:a0a95b435b4728158b8e8e21033405352f81eacbadc2d67c462d563bc548ddd8","sha256:6ae62f6219704e276c79189211fea51279b7344700527479f9017b281b0e85d5"]
      - values: {"a":2,"b":3}
        answers: ["sha256:b41e0a1eee0f95be005920a75617df5ffe5477313b6d0958a46ccb53d16f3eb3","sha256:36ca0b97b76e5f3ae125754fb2ef364a068644d0b82409cfb57fbd4be4aaa939","sha256:1f487e304efda2fdc9604aaf8190cfdd6a13f59087508998ce1fc70193a46345"]
      - values: {"a":5,"b":20}
        answers: ["sha256:7aab772bce826a11dcaecc6dabc7f3afeee742246f938e9ed63f249702d539b9","sha256:40f19dc3057de893f535cfdf9879ebf77922ede2c5267c709026b44f9aa92383","sha256:b7df6fbf0e11cb6c5c73d07874900a61d4466643e53d1b20199962c7af6182d8"]
      - values: {"a":6,"b":10}
        answers: ["sha256:75efa926dd29cbfa95f01f4e7ee48d607767b9430986b2b69d36c038a876957d","sha256:fe9ea383edf2fb871077ce12c6c68283ef43c4793fe142308ea7110416407cc3","sha256:c64bbfd6bc94876e77f263ddbf6fdd8132ccd1194ef5133685315e4353c29fcd"]
      - values: {"a":10,"b":15}
        answers: ["sha256:fe5a171fa3bab2d417750ed8294cbcb2f039fbd1d59836789ffa3371250421cd","sha256:4a66d670d64d5b1c7482ddadfee0745abbbb370f5b32b14721df6f3778862f32","sha256:b378b4c4393826ed179b2b70a1885a32eb2c0398ba97569561b2217206702f08"]
  - id: despejar-en-una-formula
    tier: 2
    type: numero
    sig: 10
    prompt: |
      La temperatura en grados Fahrenheit es $F = 1{,}8\,C + 32$, con $C$ en grados Celsius. Despeja $C$ y calcula la temperatura en °C
      que corresponde a ${{Fh}}$ °F.
    variants:
      - values: {"Fh":"212"}
        answers: ["sha256:efe2e42bab50b9f7f4e5335cb6d370bfbcc97ff068030b431ab6df64b70671e4","sha256:2c72352d0e4d4167b2deded591750ddf631240e14838bca92b39f7d83e16f6b6","sha256:e761d13d7972c5e54f1188fcd68c0b7db604abd47048b4c494c20c211cf2a7fa"]
      - values: {"Fh":"98{,}6"}
        answers: ["sha256:e251dd188abdc546b1148cff809cf4f88e7a78165eb24f6a6f684ef408234b9e","sha256:13f582ff8f5fb8eb5b4406b29d2fe29ff7301fe9fd94052cc5e4d36c636f2851","sha256:db0e9f9637a2509f5799b890cf9c9e0783b81bb1fdf7401ddff0030c9050c2cd"]
      - values: {"Fh":"50"}
        answers: ["sha256:efd9d8c32986a04c3895032424622f714a2279265235d9bcf5f2fda166d92fac","sha256:851032ea00a8619c1827e40d3fcad5cb7064a870fee44c1bb1263877ecf0daff","sha256:c5ed96f7a94fb5119fe90e2d77437a28e10df62e93c26ec3971abbde422aaa86"]
      - values: {"Fh":"77"}
        answers: ["sha256:195d38fd122e4647cbefc412d27ab23fc7fe63ae2341d4802a16c6e1fe57c732","sha256:d8fe39a7b01406f777c4df596d1686d0e72a5aa295340cc6408aedf8032cc47b","sha256:1fd909bfd67426e7c12ad9452bd24a90bb2fbd9911f6358f2ed4e49ca7e34a00"]
      - values: {"Fh":"113"}
        answers: ["sha256:c7ef937f5a89240a3b61a6922b3da06531b3bd72d088bb179ac3b66be563c7fc","sha256:113c76887e84a51aa8a3db4ba75a436a8c4b3d5b0c1b6967b07bd58789dd0c42","sha256:d9a1cde188795d7ef456ecd8426f82f21c1f8a794ad0b2d2bb509b6dc7d13ce6"]
      - values: {"Fh":"14"}
        answers: ["sha256:587241c9311b5bd554267c13e6d5b41b6a39caaa7f7df161b1c4c3f05471100d","sha256:487434b904616ddfe7322c08e8d3157bbce8967a25740ac6c2695e3ea151beac","sha256:f33a9e1ef72243a93478219baa1cae730a208ea8f07a54a40d912c30e4c4dc9c"]
  - id: reparto-con-condiciones
    tier: 2
    type: numero
    sig: 10
    prompt: |
      Se reparten ${{T}}$ € entre tres personas: B recibe el doble que A, y C recibe ${{m}}$ € {{masmenos}} que B. ¿Cuánto recibe A?
    variants:
      - values: {"T":530,"m":"30","masmenos":"más"}
        answers: ["sha256:b56f81dc2ef0220eaccbd09139b8f3c2fd3b82521b3ba6f494c81d5438b99cc5","sha256:d6de2536dd095d504a0ace1c606ed9f8e54487a3170b639069506fdf85d767c3","sha256:c7dec1174688ab98a27af53b031a005a89390ee81ea876cd54f0d4958e32d451"]
      - values: {"T":1010,"m":"10","masmenos":"más"}
        answers: ["sha256:a26ae97dcb586014903855aca07228712a6104f70a646791ffa84b35e8fa4d9c","sha256:c68ce8ba5ce1f6b7105682794e8ceac951973392c69092c4b23bb2f6beb17ca2","sha256:8872d4588eaa76bd9b245c67ff8250ceb4753094dae23a033bca537a2d303391"]
      - values: {"T":775,"m":"25","masmenos":"más"}
        answers: ["sha256:1014df658907a8ff700db80a235495151e298bc242e9dd80a9ca9095a91130a9","sha256:0429b791a17bd4b6827ce6f7e6106a50b559c5a36ad9044863b68419847df318","sha256:38857e8e400c2df9d2fa295c83a376d2da8f20d5ecb177f3edabe3d830bca52a"]
      - values: {"T":2060,"m":"60","masmenos":"más"}
        answers: ["sha256:d9e6d659399f6f8b70bac0785a42cd8825cecf07860708665aaeedb2c008962c","sha256:b4ebf6147d92519101d81c1df0d3c53f40bdb159c4d19fb561cdd5f0f385e609","sha256:b275ae70ebb52ebc1110831fae3f2d7bd333ea82911f559c18ae5155f3a42043"]
      - values: {"T":345,"m":"5","masmenos":"menos"}
        answers: ["sha256:b3b3e2010965cd8567824ac9649f2d959ded143edde7effcfa15c25e349b5a48","sha256:f00108dfa4dcc848667271efc9cb909e6df6cb2c27d6a54dcf8e6b600728acb0","sha256:30b2c1008b674dbd87047cd56225be376f224429665acb6c5fd6e4817289fbc3"]
      - values: {"T":1240,"m":"40","masmenos":"más"}
        answers: ["sha256:6dcd9323ebdf12eb0ba1d99f22447fcf4851ab60879af52500343f65f5e30b1b","sha256:ed0c41e28fd0cdd7c391760ff029ee5584e952d5207e88e79ae38ba98887c68d","sha256:6d9420170b800921bd8ec0d44751e2f100df55336601732cfd8ab04558a07b25"]
  - id: ninguna-o-infinitas
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Resuelve $4(x - 1) + 2 = 4x - 2$ y $4(x - 1) + 2 = 4x + 1$, explicando qué ocurre en cada una al pasar todas las $x$ a un
      miembro. ¿Por qué no se puede «dividir entre $0$» para despejar? ¿Qué significa cada resultado con palabras?
    sealed: "gz64:H4sIAAAAAAACCo1Ty27bMBD8lYHAg604gvM4Ccgx1yJIeqt6oMm1sYW0lEkxcBDkg3rOLVf/WLF04qZNA/QigFzuzszO6LFKoc8TB6naqq5vIg8UbVPXMJc7nOISJzjHFcrh3CxACZ4cx9f6u1qDW0qTFR+0ZlqYU62ealdAIguzRNc5HybscIWlaXCd4JjiZFHXo40WLtt+m5miMtiZtpPeJviQQLsxUuIglJCCoLcYOA0WlFzkycJTebcOcbAJsyw6lD3JxN76up43+MokBJY1C09W5/TZlZFNJ53U9R1tsvh3+l/1neDsM31nn8i7MA2+sGz2LwLZvwwUA4bcTzz27KwPGEOEWRp4C3NhWtS1BEzKsJMDsf2z1DVm/9wAwfOaIoljK0hMwxgJJDpr/qrmJkRs8/4nJBwa7tnrmymSIqvKG126pzTSDxt147pGY1XAyvxuEvThQGJgGlZR2RzGWLPAAygFXWZQMbp4ctkW/p3QNvO97UkmQmIYi04vi/135axRWKifxy5NmVkWDgtsM6kATyOJekwlGAj66J6it/4of2ZWZdocAZLF2XLzhjdvqkUV8yqyq9pvj5XGhiKHqq1uyWdHymE8/AH4mFY8wAVxfX6gwukY1aO99Jao/bMo1phlCqlqz58Wn6ClQ97wMTyYhWPA5n9DvwXl/+CudyVypbPYyfGjncU99UlNor48TCEqVDGj2FzClHgjvNaBznr9pPAn+venXxt9Gh1WBAAA"
  - id: r-es-solucion
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estos valores es solución de $5x - 4 = 2x + 5$?
    options:
      - |
        $x = 1$
      - |
        $x = 2$
      - |
        $x = 3$
      - |
        $x = 4$
    answers: ["sha256:c274700dcdebcfd5a50ee1c4cab977bee651f463ccc92fd0ddd4270d9dd5261c"]
  - id: r-equivalentes
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué transformación da siempre una ecuación equivalente?
    options:
      - |
        Multiplicar los dos miembros por $0$
      - |
        Sumar el mismo número a los dos miembros
      - |
        Sumar $3$ solo al primer miembro
      - |
        Elevar solo un miembro al cuadrado
    answers: ["sha256:ecbaab26312af47f6950d9c6b9e411be98cd6c406303a796a80e73dca7f41359"]
  - id: r-signo-al-pasar
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Resuelve $3 - x = 5$.
    answers: ["sha256:43642348c2002aab1d49ee330f8f35ad86ec3c0f4ab31a8c2c1cb3f47ab517c5","sha256:027b1d38b4fafb1493af0fbf06d68060c9947f9838efabf7ea9e5f6c46d61ba8","sha256:515e2751752101f53a45936060602e3f9a2fdde45497b3be082deed08a2f73fc"]
  - id: r-traducir-ecuacion
    tier: 2
    type: opcion
    review: true
    prompt: |
      «Dos números consecutivos suman $35$». ¿Qué ecuación lo expresa?
    options:
      - |
        $x + (x + 1) = 35$
      - |
        $2x = 35$
      - |
        $x + 1 = 35$
      - |
        $x \cdot (x + 1) = 35$
    answers: ["sha256:4a867087db38371c67335364e8514a1e03dab7697e36fdae377bc6b70558eb2a"]
  - id: r-comprobar
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál es la manera segura de comprobar la solución de una ecuación o de un problema?
    options:
      - |
        Repetir las cuentas igual
      - |
        Mirar si es un número entero
      - |
        Ver si es positiva
      - |
        Sustituirla en la ecuación (o en el enunciado) y ver que se cumple
    answers: ["sha256:b1230d252b7600ddef2ae2148da3968163dff822b808a9c11bec5b21b2a51de3"]
  - id: r-denominadores
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Para quitar los denominadores en $\dfrac{x}{2} - \dfrac{x}{5} = 3$, ¿por qué número conviene multiplicar los dos miembros (el más pequeño posible)?
    answers: ["sha256:8f7968b00dbf1074026248f2c55819853616386594050351d1e68f1bb9cde34d","sha256:aa86e1695d455f1e0d37e8d07c161f33ff24993ea4caf5d878848399fcabd5a8","sha256:12f1d26f3af39d8eb005b45d698718da62acd63f830ece95cbe54834edc65483"]
  - id: r-despejar
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si $d = v \cdot t$, ¿cómo se despeja $t$?
    options:
      - |
        $t = v \cdot d$
      - |
        $t = \dfrac{d}{v}$
      - |
        $t = \dfrac{v}{d}$
      - |
        $t = d - v$
    answers: ["sha256:0433628f496a9a994c6372b96edf3b068a131b39472c26775285c888339ade65"]
---

# Ecuaciones de primer grado: ecuaciones equivalentes, paréntesis y denominadores, casos especiales, fórmulas y problemas

«Pienso un número, lo multiplico por $3$, le sumo $7$ y me da $25$. ¿Qué número pensé?» Se puede resolver deshaciendo las operaciones
de cabeza ($25 - 7 = 18$, $18 : 3 = 6$), pero cuando el número aparece en varios sitios eso ya no funciona. Una **ecuación** escribe el
enunciado con una letra, $3x + 7 = 25$, y la resuelve con unas pocas reglas que valen siempre. Este nodo enseña esas reglas, por qué
funcionan, cómo tratar paréntesis y fracciones, qué pasa cuando no hay solución o hay infinitas y, sobre todo, cómo convertir un
problema con palabras en una ecuación.

## Objetivos

Al terminar sabrás:

1. Reconocer las partes de una ecuación y comprobar si un número es solución.
2. Resolver ecuaciones de primer grado con paréntesis y denominadores usando ecuaciones equivalentes.
3. Distinguir ecuaciones con una solución, sin solución y con infinitas (identidades).
4. Despejar una letra en una fórmula.
5. Plantear y resolver problemas: números, edades, geometría, monedas, móviles, trabajos y repartos.

## Qué debes dominar antes

[[mat-expresiones-algebraicas]] (lenguaje algebraico, reducir términos semejantes, quitar paréntesis) y [[mat-fracciones]] (mínimo
común múltiplo, operaciones con fracciones).

> [!question] Test de entrada
> 1. Reduce $5x - 2 + 3x + 9$.
> 2. Quita el paréntesis: $-3(x - 4)$.
> 3. ¿Cuál es el mínimo común múltiplo de $4$ y $6$?
>
> Respuestas: $8x + 7$; $-3x + 12$; $12$.

## 1. Para qué sirve

- **Problemas cotidianos**: cuánto cuesta cada cosa conociendo el total, cuánto falta para ahorrar algo, cuándo se alcanza a alguien.
- **Fórmulas**: la misma fórmula sirve para calcular cualquiera de sus letras si se sabe despejar ($d = v \cdot t$ da la distancia, la
  velocidad o el tiempo).
- **Ciencias e ingeniería**: casi todos los cálculos de física y química de los primeros cursos son ecuaciones de primer grado
  ([[fis-medida-movimiento]]).
- **Es el primer peldaño**: de aquí salen los sistemas, las ecuaciones de segundo grado y, mucho más adelante, el álgebra lineal.

## 2. El lenguaje de las ecuaciones

> [!practico]
> Una ecuación es una balanza en equilibrio: lo que hay a la izquierda pesa lo mismo que lo que hay a la derecha. La letra es
> una caja de peso desconocido. Resolverla es averiguar cuánto pesa la caja sin romper el equilibrio.

Una **ecuación** es una igualdad entre dos expresiones algebraicas que solo es cierta para algunos valores de las letras. Las letras
se llaman **incógnitas**; cada lado del signo igual es un **miembro** (primer miembro a la izquierda, segundo a la derecha); los
sumandos son los **términos**. El **grado** es el mayor exponente de la incógnita: $5x - 3 = 2x + 9$ es de **primer grado**.

Una **solución** es un número que, puesto en lugar de la incógnita, hace cierta la igualdad. *Ejemplo:* en $5x - 3 = 2x + 9$, para
$x = 4$ el primer miembro vale $17$ y el segundo también: $4$ es solución. Para $x = 1$, $2 \neq 11$: no lo es.

## 3. Ecuaciones equivalentes: las reglas para resolver

> [!practico]
> En la balanza puedes quitar o poner lo mismo en los dos platos, o partir los dos platos por la mitad, y sigue equilibrada. Esas
> son las únicas reglas. El famoso «lo que suma pasa restando» no es una regla nueva: es restar lo mismo en los dos lados.

Dos ecuaciones son **equivalentes** si tienen las mismas soluciones. Se obtiene una ecuación equivalente:

1. **Sumando o restando** el mismo número (o la misma expresión) a los dos miembros.
2. **Multiplicando o dividiendo** los dos miembros por el mismo número **distinto de cero**.

*Ejemplo resuelto 1.* $5x - 3 = 2x + 9$. Restamos $2x$ a los dos miembros: $3x - 3 = 9$. Sumamos $3$: $3x = 12$. Dividimos entre $3$: $x = 4$.
Comprobación: $5 \cdot 4 - 3 = 17$ y $2 \cdot 4 + 9 = 17$ ✓.

> [!formal] Con rigor: por qué estas reglas no pierden ni añaden soluciones
> Si $A = B$ es cierta para un valor de $x$, también lo es $A + c = B + c$; y al revés, restando $c$ se vuelve a la primera. Así que las dos
> tienen exactamente las mismas soluciones. Con la multiplicación pasa lo mismo si $k \neq 0$: de $kA = kB$ se vuelve a $A = B$ dividiendo
> entre $k$. Si $k = 0$, $0 \cdot A = 0 \cdot B$ es cierta para todo $x$ y no se puede volver atrás: por eso multiplicar por $0$ (o dividir entre
> una expresión que puede valer $0$) está prohibido; podría añadir o perder soluciones. $\blacksquare$

## 4. Paréntesis y denominadores

> [!practico]
> Con ecuaciones más largas conviene seguir siempre el mismo orden, como una receta: primero se «limpia» la ecuación (fuera
> paréntesis, fuera fracciones), luego se agrupan las $x$ en un lado y los números en otro, y al final se despeja.

**Orden de trabajo:**

1. Quitar paréntesis (propiedad distributiva; cuidado con el signo menos delante).
2. Quitar denominadores: multiplicar **todos** los términos de los dos miembros por el mínimo común múltiplo de los denominadores.
3. Pasar los términos con $x$ a un miembro y los números al otro.
4. Reducir términos semejantes.
5. Despejar $x$ dividiendo entre su coeficiente.
6. Comprobar en la ecuación **inicial**.

*Ejemplo resuelto 2 (paréntesis).* $3(x - 2) - 2(x + 1) = 4 \Rightarrow 3x - 6 - 2x - 2 = 4 \Rightarrow x - 8 = 4 \Rightarrow x = 12$.

*Ejemplo resuelto 3 (denominadores).* $\dfrac{x}{2} + \dfrac{x}{3} = 10$. El mínimo común múltiplo de $2$ y $3$ es $6$; multiplicando todo por
$6$: $3x + 2x = 60$, $5x = 60$, $x = 12$. Comprobación: $6 + 4 = 10$ ✓. Si un numerador tiene varios términos, al quitar el denominador
queda entre paréntesis: $6 \cdot \frac{x - 1}{3} = 2(x - 1)$, y el signo menos que hubiera delante afecta a todo.

## 5. Una, ninguna o infinitas soluciones

> [!practico]
> A veces, al pasar las $x$ a un lado, ¡desaparecen todas! Entonces queda algo como $5 = 5$ (siempre cierto: cualquier número vale)
> o $5 = 8$ (nunca cierto: ningún número vale).

Toda ecuación de primer grado se reduce a $ax = b$:

- si $a \neq 0$: **una solución**, $x = \frac ba$;
- si $a = 0$ y $b \neq 0$: **ninguna** (por ejemplo, $2(x + 3) = 2x + 5$ lleva a $6 = 5$);
- si $a = 0$ y $b = 0$: **infinitas**; la igualdad es una **identidad**, cierta para todo $x$ (por ejemplo, $2(x + 3) = 2x + 6$).

## 6. Despejar en una fórmula

Una fórmula es una ecuación con varias letras. **Despejar** una letra es aplicarle las mismas reglas hasta dejarla sola. *Ejemplo:* la
temperatura en grados Fahrenheit es $F = 1{,}8\,C + 32$. Restando $32$ y dividiendo entre $1{,}8$: $C = \frac{F - 32}{1{,}8}$. Así, $86$ °F son
$\frac{54}{1{,}8} = 30$ °C. Del mismo modo, de $d = v \cdot t$ sale $t = \frac dv$ y $v = \frac dt$.

## 7. Resolver problemas con ecuaciones

> [!practico]
> Lo difícil no suele ser resolver la ecuación, sino escribirla. El truco es nombrar con $x$ lo que se pregunta, escribir todo lo
> demás usando $x$ y buscar en el enunciado **dos maneras de decir la misma cantidad**: esa es la igualdad.

Las fases de Pólya ([[mat-resolucion-problemas]]) aplicadas a ecuaciones:

1. **Comprender**: leer, identificar datos y lo que se pide.
2. **Plantear**: «sea $x$ = …» (con unidades); expresar las demás cantidades con $x$; escribir la ecuación.
3. **Resolver** la ecuación.
4. **Comprobar en el enunciado** (no solo en la ecuación: si el planteamiento estaba mal, la ecuación «comprueba» igual) y ver si
   la solución tiene sentido (personas enteras, edades positivas…).

*Ejemplo resuelto 4 (números).* Tres números consecutivos suman $51$. Sea $x$ el menor: $x + (x + 1) + (x + 2) = 51$, $3x + 3 = 51$, $x = 16$.
Los números son $16$, $17$ y $18$, que suman $51$ ✓.

*Ejemplo resuelto 5 (edades).* Un padre tiene $40$ años y su hijo $10$. ¿Cuándo tendrá el padre el doble de edad que el hijo? Dentro de $x$
años tendrán $40 + x$ y $10 + x$: $40 + x = 2(10 + x)$, $40 + x = 20 + 2x$, $x = 20$. Dentro de $20$ años: $60$ y $30$ ✓.

**Tipos frecuentes y su idea clave:**

- **Geometría**: perímetro o área a partir de un lado.
- **Monedas o entradas**: si hay $n$ en total y $x$ son de un tipo, hay $n - x$ del otro; el valor total da la ecuación.
- **Móviles que se acercan**: las distancias recorridas por los dos suman la distancia inicial ($v_1 t + v_2 t = D$).
- **Trabajos o grifos**: en una hora, uno hace $\frac 1a$ del trabajo y otro $\frac 1b$; juntos, en $t$ horas, $\frac ta + \frac tb = 1$.
- **Repartos con condiciones**: cada parte se escribe a partir de una de ellas y se suman.

## 8. Errores típicos

- Cambiar de miembro un término sin cambiarle el signo, o cambiar el signo a un factor que está multiplicando.
- Al quitar denominadores, multiplicar solo algunos términos.
- Olvidar el paréntesis en un numerador compuesto con un menos delante.
- Pasar de $3x = 12$ a $x = 12 - 3$ (un $3$ que multiplica pasa dividiendo).
- Dividir entre una expresión que puede valer $0$.
- No decir qué es $x$ en un problema y no comprobar en el enunciado.

## 9. Resumen

- Ecuación: igualdad con incógnitas; solución: valor que la hace cierta.
- Equivalentes: sumar o restar lo mismo; multiplicar o dividir por lo mismo **no nulo**.
- Orden: paréntesis, denominadores (mcm), agrupar, reducir, despejar, comprobar.
- $ax = b$: una solución si $a \neq 0$; ninguna o infinitas (identidad) si $a = 0$.
- Despejar en fórmulas con las mismas reglas.
- Problemas: «sea $x$…», dos maneras de expresar lo mismo, comprobar en el enunciado.

## Repaso: lo que debe quedarte dentro de un mes

1. Las dos reglas de las ecuaciones equivalentes y por qué no se multiplica por $0$.
2. El orden de trabajo con paréntesis y denominadores.
3. Cómo se reconoce una ecuación sin solución y una identidad.
4. Cómo se despeja una letra en una fórmula.
5. Las fases para plantear un problema y la comprobación en el enunciado.

## Siguiente

el tema `mat-sistemas-dos-incognitas` (dos incógnitas y dos ecuaciones) y el tema `mat-ecuaciones-segundo-grado` (cuando la incógnita aparece al
cuadrado).
