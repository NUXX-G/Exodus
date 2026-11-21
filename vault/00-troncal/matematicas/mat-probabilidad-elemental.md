---
id: mat-probabilidad-elemental
title: "Probabilidad: experimentos aleatorios, sucesos, frecuencias, regla de Laplace, propiedades, árboles, probabilidad condicionada, total y Bayes"
area: matematicas
trunk_level: 3
prerequisites: [mat-combinatoria, mat-fracciones, mat-estadistica-descriptiva]
academic_sources:
  - "Matemáticas 4.º de ESO, opción B (LOMLOE), capítulo 16: «Probabilidad», secciones 1.1-1.3 (ley de Laplace, extracciones, cartas), 2.1-2.5 (combinatoria para contar, nomenclatura, sucesos no equiprobables, diagramas de árbol, probabilidad condicionada) y 3 (cálculo de probabilidades, resultados sorprendentes). Apuntes Marea Verde, autor Fernando Blasco. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/4B/16_Probabilidad_4B.pdf"
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 13: «Estadística y probabilidad», sección 1 (fenómenos aleatorios, frecuencias, experimentos, probabilidad). Apuntes Marea Verde, autora Nieves Zuasti. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2013%20Estadistica.pdf"
  - "C. M. Grinstead y J. L. Snell, «Introduction to Probability», American Mathematical Society (2.ª ed. revisada, 1997), de libre acceso en https://math.dartmouth.edu/~prob/prob/prob.pdf: probabilidad discreta, probabilidad condicionada y teorema de Bayes."
hints:
  - "Concepto: la probabilidad mide de 0 a 1 lo esperable que es un suceso. Si todos los resultados son igual de probables, P(A) = casos favorables / casos posibles. Para varios pasos, se multiplica a lo largo de cada rama del árbol y se suman las ramas que interesan."
  - "Herramienta: «al menos uno» → contrario, 1 − P(ninguno); «o» → P(A ∪ B) = P(A) + P(B) − P(A ∩ B); «sabiendo que» → condicionada P(A|B) = P(A ∩ B)/P(B); para invertir una condicionada, árbol o tabla de frecuencias naturales (Bayes)."
  - "Documentación: Marea Verde 4.º ESO B cap. 16; Grinstead y Snell, capítulos de probabilidad discreta y condicionada."
exercises:
  - id: regla-de-laplace
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Una bolsa tiene ${{r}}$ bolas rojas, ${{v}}$ verdes y ${{a}}$ azules. Se saca una al azar. ¿Cuál es la probabilidad de que sea {{q}}?
    variants:
      - values: {"r":4,"v":6,"a":5,"q":"roja"}
        answers: ["sha256:5c2015ac63f7b7a52bd99d576f4a46f811d6d843648e1edc6a6d85affc4e354b","sha256:cadb69bedc0c442e0e224c079f12ec9d3702b82bf2b25e9ba971635d2225b9b8","sha256:af710030e76e5ff3c7e75f8e16e20e047a4d4876bbe37f7d4b8243925a8dc3af"]
      - values: {"r":7,"v":2,"a":3,"q":"no azul"}
        answers: ["sha256:3cab50924e9b72ea47752293496b90bafb6ffd6e8f500adf3be8321ad081554b","sha256:085b9c2d0156ffd368ec4bd415d67a1e51d12094bff320e9bede7d693e061424","sha256:1397ff15d4fd4a18b1f5bb9812c9cfc23ff1a7d14cf6e677aa9da09a20d7f85f"]
      - values: {"r":1,"v":8,"a":3,"q":"verde"}
        answers: ["sha256:0450cd894cd9d12d2260d2a2225f226acaef500e3ad2a1b577af23107579551a","sha256:5ce0c535d1b090bd87baac66d0b5ad5d334bdeedf752fe39ebde77fb8e0c4a43","sha256:be4f970af424b05715196553f0b4b1e66096f9f640f0aff23a5a32c05480fce7"]
      - values: {"r":5,"v":5,"a":10,"q":"no azul"}
        answers: ["sha256:cba2834fcd68d7dfaf671107549ab6701c23c543a5916aa8c92d76ad2f38e115","sha256:35a1cdc0d513b0899c43469f6f4bdd334180c7930bc81d4ef6e6d17aca03a549","sha256:14398f4e2b4baaa51dec1538f244b39fc91794c01e893dd2602b9587c49f46ef"]
      - values: {"r":9,"v":4,"a":2,"q":"roja o verde"}
        answers: ["sha256:75a30c4183b2158d2081a46c1aa406e3d9bde75d7da5ea7e438942930913cc39","sha256:2f57de5b920e401f46089f8a79b85e97a0d8de903934c0bc76bb186624fa9660","sha256:a5ab56c2af0174df7fac9b7aefea74fe00f5a0c1f1b9bf474b383daf72166914"]
      - values: {"r":3,"v":3,"a":6,"q":"azul"}
        answers: ["sha256:6381a7e5915907f4523c76c9d4ddf003fa48a50c216f720fd191c499e5a97da7","sha256:fa84a5554513cc5fae7b1aa35d2ed755107dd4a5bb8b92637447fbee237b20e6","sha256:abab9c15b1c583b93f538300f7461b43139dab361753994bedd5a8d224091bc9"]
  - id: dos-dados
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Se lanzan dos dados. ¿Cuál es la probabilidad de que la suma {{op}} ${{s}}$? (Haz la tabla de los $36$ resultados.)
    variants:
      - values: {"s":8,"op":"sea"}
        answers: ["sha256:222348561ed2ee5c188c1ffe20655d20e702ed612e3460e2edf2afee417bc899","sha256:7578d9feb6202d921f767423abbf3a4f70457a64250ff2f15673fe648e59540d","sha256:e63a1bf8dcb305c486cd2d1c59a378466af2d69bef6f0e125acc7bbdfcb36d2a"]
      - values: {"s":10,"op":"sea al menos"}
        answers: ["sha256:94fe61be194d43f1e772b5110b653859bdb28cafd7c02bb331212d9ad97ea88a","sha256:908bc2d1f2ad5fba0b2decf632c98e76188006ded9ecbf0cbba0bdce5af31f05","sha256:856b0eca32fd70193955c42836a3737fa84a0c1ff3a265cdb093bf91ee0690f9"]
      - values: {"s":4,"op":"sea"}
        answers: ["sha256:a742c7d34d36a5c30176745b0f181bedcc08a723d9cf7bc49fd4c5b554a380c9","sha256:fe7f7da6c67ae511fef5c9a944ebf1eee538198e84a0f2a33f9d8f0912592b63","sha256:f88d317e14bd361802d1adccf08cf40ab1bedc74287fb58e15b112b0f775f328"]
      - values: {"s":11,"op":"sea al menos"}
        answers: ["sha256:5fcc85c49ca2f8064643ff8361457fc40a0fc493fc34d90252c7eb0c0a886471","sha256:23c1e62542ebabbc152756c018844dcdf809ccc2f34eb08e86dcef8d196d5279","sha256:39a7ac2587d7eeaaf2b64b90ce93b6f15daf2722308f1a54cbde81a1aa61fce7"]
      - values: {"s":6,"op":"sea como mucho"}
        answers: ["sha256:a36c33ac622e72cf50f962456c7eb33c6577f7f904d8f29a9419a26d613460dd","sha256:aaba83a06603f61caa3e2848c37541e84e07c3a597745cc8aee7c2ff774494fc","sha256:8d1d7e34a38d959064082b1b51b0f789487b7158144e969632405d85ca43cd57"]
      - values: {"s":9,"op":"sea"}
        answers: ["sha256:4e4a91c270ce09289c8ba35d0abafc885968b3f35a9b4e5a5e11fc39f6d36d33","sha256:7b00bc6a670d8bff7be3a78d47bde3c386a032cabbc357f7512124ce11b192b4","sha256:a1070fd6408f3a54144cf040bfd9292a1b5ae36c29fd1871d9e55c5099338373"]
  - id: suceso-contrario
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Cuál es la probabilidad de que {{txt}}, en ${{n}}$ intentos independientes? (Calcula primero la del suceso contrario.)
    variants:
      - values: {"n":3,"txt":"salga al menos una cara al lanzar una moneda"}
        answers: ["sha256:58af94eab30923bf26b94c0ba88b4f9bf1efc9ea7cd1a900099164abc0f6e0d6","sha256:88a40f1a8f9d33fbd846a1c24c83389e7194f4c50e1b7e86a2f490c4b6bbcb75","sha256:4918f4201be3ada88c19276180599e3691d5241140f75a5d675066a9085cc6c8"]
      - values: {"n":5,"txt":"salga al menos un 6 al lanzar un dado"}
        answers: ["sha256:59bb94e47fb06738a8a3069d73f29614c80fe8cd9334a2dcc36c791f05981174","sha256:bf4a0c071219240338a4937d5a71fb5270bece630df7a393ec8bc2b50df3396d","sha256:591014fee592be14a4440b738a4163bc417c979a8e3bfc7ce6ce9979822b5901"]
      - values: {"n":2,"txt":"acierte al menos una vez un concursante que responde al azar preguntas de 4 opciones"}
        answers: ["sha256:bfcc71a022c81e84afa5dd4790f1e521f5fb5993dda583103be660be79319fc6","sha256:3f15c64db8a0b18b458175dedc65ebda1077aa1a8b7b6beffb4e9b07fd3424fb","sha256:4ede60d8835cd6cb7604ad1580c5e3e35b5c8ed19f8c4b073264d53a8913d024"]
      - values: {"n":10,"txt":"falle al menos una de 10 piezas, si cada una falla con probabilidad 0,1"}
        answers: ["sha256:142a4457634ffbe74e06a5c4b9facc0af701254b19ab8d51d5b8313089613855","sha256:2087096aa727a4e3fae991cab9f815f8ca8b3569395e8f72b91ac6d608404b38","sha256:254558ae46b569cf2d38396b43d51af33cbd8d0bff2575431fde4b921cb6db6d"]
      - values: {"n":6,"txt":"nazca al menos una niña entre 6 bebés (probabilidad 1/2 cada uno)"}
        answers: ["sha256:a9c38ca8ae92c2f918a21e9b5bfdf40666e3257a83f782a73cf9f21b9941478f","sha256:515386c56ead8389751571fcb3a65196311d2137410c682e8736a21709b15d65","sha256:2f7aff41a105d0f6d6acaaa9b3a7c6f0f77af9a5f50fa7a533032ab3ffae3ea9"]
      - values: {"n":8,"txt":"haya al menos un día de lluvia en 8 días, si cada día llueve con probabilidad 0,05"}
        answers: ["sha256:8c32fba3dcb81a73b0973750d578664c793e64f615a42cedfaf629bd1676ad06","sha256:2ae1d7ba089156087a15877609578c61b9d017c04ac6c4ee62a890f2bd197808","sha256:c215fc1950f68086e8b54717281fdb496db40532030e4fb2b1aee68c60ad29dc"]
  - id: probabilidad-de-la-union
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Si $P(A) = {{a}}$, $P(B) = {{b}}$ y $P(A \cap B) = {{c}}$, ¿cuánto vale $P(A \cup B)$?
    variants:
      - values: {"a":"0{,}5","b":"0{,}4","c":"0{,}2"}
        answers: ["sha256:2694fd2f279cdd34212325bc0b640e6aaa1a87abe532aa7beaea31871326e985","sha256:6a4fb55176ca2231d4e67f16886d62d2f295c7996b286ea795ebbf49bc7efc10","sha256:461a53a4576c4a25bfa068fa20ccc2ea98db5063ffc36ad95ef2de3ae16bae83"]
      - values: {"a":"0{,}3","b":"0{,}45","c":"0{,}1"}
        answers: ["sha256:2581983521df1de3d4745b7f93988ca6710d682a0939fd1f08c058db8f059d41","sha256:9cabd857aa91d40f9ac12524a329b4f712c500b567e3ed21ac26a072da21218a","sha256:524cfcb2d7cf326642b614a500975c8c9563d312f2f68113eb4f5958d00a3532"]
      - values: {"a":"0{,}6","b":"0{,}25","c":"0{,}15"}
        answers: ["sha256:1d4486babcfbe634b90a0fcaf140bcf77cc49a0b46ba0f63a9a81bc16cac058f","sha256:3f1b82b36e10423576ae5486b1aac8f932be213b9a522d38fd5e83144de3ca20","sha256:971a2affe053a4632bb72651c257b65086f061d9ea0f1f7f43a9b1312175f815"]
      - values: {"a":"0{,}2","b":"0{,}2","c":"0"}
        answers: ["sha256:ce9f5151d76ac6744ef25a085fb85d5bc62a1b7cd4fdcecdd6d0a0ff70055cf6","sha256:d0afcc5d2fb9b4633333fed81d6686792ad9d98657cd22470ce438b0522a5827","sha256:52598bc9fb6015319d8965a7ab6cafee17b176ad4d6ef280d29b366f7c05dc0b"]
      - values: {"a":"0{,}7","b":"0{,}5","c":"0{,}35"}
        answers: ["sha256:61af38432052008e45e580ed9b566f706550acc138a50810adc56fe9984eb502","sha256:ce8d56e7e4339c7aef04694fff1db447576528898760db00a2fccf994bea6573","sha256:791908bddc055e784ea5a1e3436a24568f378052981e6876d0058722f35e4fa5"]
      - values: {"a":"0{,}35","b":"0{,}4","c":"0{,}05"}
        answers: ["sha256:4f97a3a909fb78674c1d89fd00975f98ca361e6965ee7d9f5e4c0a66ff3a15a1","sha256:d5d9f16d8580d15f8e8dd48df3709baa9232b94ffff831e90df21191a0fb10e9","sha256:dd6eb9ee6636da08f815c4f58ebd44e44b072d21577339cf13077af3fa5301a8"]
  - id: sin-reemplazamiento
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Una caja tiene ${{r}}$ bolas rojas y ${{a}}$ azules. Se sacan dos, una tras otra, sin devolverlas. ¿Cuál es la probabilidad de que sean del
      mismo color? (Usa un diagrama de árbol.)
    variants:
      - values: {"r":4,"a":6}
        answers: ["sha256:08047fbb1e641928314dd80e777c062f1c3faf98b7b8e0e61719fe968237c18f","sha256:9e1795a91a7e1cde8034c8ca12e14695c9a518e3c192e796e2150e737d327279","sha256:33a7cba51c01852d27ca06903b60e69d40e3b1a79c2877c46a03b44b7533ec8e"]
      - values: {"r":5,"a":5}
        answers: ["sha256:80acc9026845d193d02b0838a1772cb51d3a15436e6d9e397f2c69ae65daf708","sha256:d2c2c452eddef328ad20ece3b900e2bd6ffefb026768028492b8d5ef3d2ae416","sha256:984c7c5a01ae5130e22efb6804c2352157293cc19827cead700c322525033ef1"]
      - values: {"r":2,"a":8}
        answers: ["sha256:1898fc6276969348c3bb587480c2c96d4e29406284e03d672fb8ce4aaed389e6","sha256:deb2eaf80f9fbccfae32fd70c8aaba514e86a233c7c0c48355a381465af75e2f","sha256:b818526716df90f65edbfa754954ffdc5327f16e0d1b8326e15f97347ae4ce26"]
      - values: {"r":7,"a":3}
        answers: ["sha256:ddc9192f478cafb6836169f50ddd717071f331f72db6f21c4296c5c0a31b2657","sha256:f74af398668190652849f71fc957f2be59f537a1c49d66ded2edbc64075a087d","sha256:db74fef9056b725c27793948c735d0e7bc7af8075883f87ed91e429948f36f6f"]
      - values: {"r":3,"a":9}
        answers: ["sha256:9abcbe230126aa40a6ff14c201c6d15ef02ad4ac423601c09d4cb0d8670bff2f","sha256:9ed2dbd5d91b9a04a73e65ebe0808710dbadf0ddaf4876a13523ad2f43d9fda7","sha256:9f30800086b9462a634e5b359ae6b9160daec10d396d9be8551b76fe3db5f3a2"]
      - values: {"r":6,"a":6}
        answers: ["sha256:953eae113561c45b88a96d377ec885a57ab6f6744e1855f6695e8711204732bf","sha256:84cbd2e6b19dcc8ef903f63afbb2795c19c80d56b3afc382978f6dc6965f3e61","sha256:08bc0ce22faf0c55444293a764735cb9475714d23cdbbe659ca0e35a5378c76b"]
  - id: baraja-espanola
    tier: 2
    type: numero
    sig: 4
    prompt: |
      De una baraja española de $40$ cartas (cuatro palos: oros, copas, espadas y bastos; en cada uno, del $1$ al $7$, sota, caballo y rey) se
      saca una carta. ¿Cuál es la probabilidad de que sea {{A}} o {{B}}? (Las figuras son sota, caballo y rey; el as es el $1$.)
    variants:
      - values: {"A":"oro","B":"figura"}
        answers: ["sha256:44446f9d3635da77522ab390758cd01da21a67b918a1aab086625eb761672e45","sha256:934114984685468274da3f0e3650f406cba9b02c4fae9c7a73c914a50f8c5ab2","sha256:e00de36cb96e2e26617d5a787beedcd0c7193d2980ac62f6ceca98a2b911f252"]
      - values: {"A":"as","B":"espada"}
        answers: ["sha256:bdcbfc8edb5e621c6d7943e5200990aeca5f3f0ccbc16b74196579a4aefb5639","sha256:6600419f4457c85ec3e8199f725acae608592eb31b888b78cf17d4f18c3c092a","sha256:56f8a1a8d31e766759806bcfa9b40df59db0d605ba28514f826423232ef8758f"]
      - values: {"A":"rey","B":"oro"}
        answers: ["sha256:6e79cdc12cde9e9684e71538ec57390bdda97cace1d993fd35253050136bc8a3","sha256:e9e0b3ad327be0162f39e5672c2bced48d3ef334aeeb51246f4a8a4a7e00a2da","sha256:48bbb8f182f6b9d985697f01236047499d21aa1de64e16ba0c989c85c2ebe9b7"]
      - values: {"A":"número par","B":"espada"}
        answers: ["sha256:24aba518b6b0b61749465a988ea29ea725610288b83934cc4451a150a5b0271d","sha256:002c2d79616bbfd5603aed2cb6cb7b8f1adc0a94e8de58ea69c9b6d92e1a0c64","sha256:7c8fcc3a0fa657b9483eb0ae9b5a43e780f3e02170944e71eec9982f4ceda154"]
      - values: {"A":"figura","B":"as"}
        answers: ["sha256:942e982ea794e2bac68409cb79d1ba230fa639447fcc2ca2ccdfb09ed3eaef09","sha256:5b7b2b9ce1c84a5b64d16e7b3605a1595d00405307ad77d3d90d0826962f0bd3","sha256:316e449d0bba48095a4893a44650decfc5ec103e19aa0886c4c4ad8e9b168945"]
      - values: {"A":"número par","B":"figura"}
        answers: ["sha256:6cfa19fe18bb9a73c1e95fb6f10eb627ec571c52a2e15f92019a0fef3df71e81","sha256:cacfe4fc1a0da54e0f38c6caa35aae49386b89aedbad6d1cbf0ef7aa1af2534d","sha256:8424045062bdf2739dbd40ab7c96d3fa9936c0e1221fbfc25663a315adef72d7"]
  - id: probabilidad-condicionada
    tier: 2
    type: numero
    sig: 4
    prompt: |
      En una encuesta, las personas se clasifican según dos características $A$ y $B$:
      $$
      \begin{array}{|c|c|c|} \hline & B & \text{no } B \\ \hline A & {{ab}} & {{anb}} \\ \hline \text{no } A & {{nab}} & {{nanb}} \\ \hline \end{array}
      $$
      Se elige una persona al azar y se sabe que tiene la característica $B$. ¿Cuál es la probabilidad de que tenga también $A$?
    variants:
      - values: {"ab":30,"anb":20,"nab":10,"nanb":40}
        answers: ["sha256:53e38e6ac3fdcf033795f3a9d9420eeda44ae52bd9fc53f58ada24e96117066f","sha256:8cb9f9b951fbb7c14091b30d0231dc7d41561c51bc83a072948cca79285ab80c","sha256:db6336a88314f47954ff3055acc41dfe2b95aac0affe251daaa2667dc420ef99"]
      - values: {"ab":12,"anb":18,"nab":28,"nanb":42}
        answers: ["sha256:4ffa584b5fefc6f894b26061b54717db0faf96774f09e6b7f9b24f3c435dcaaf","sha256:7bce0fdfbfdf9df5fbe570b8c441c256b6d44e65f74926a4a5b67f9d75cad242","sha256:4c77eb7245d5ffd33706018232f882034fa45c10162041baffeaf47deca829c8"]
      - values: {"ab":45,"anb":15,"nab":25,"nanb":15}
        answers: ["sha256:cecb4cde22a1ee30f67e5d6a5bb24907381450bfb847354cfdf6bbcf09ed19c1","sha256:e0c1fa95423bb71ac2ea9cdf0bc059f81bfaee4ad0374afa69bdfe8294bdd0ba","sha256:180783ebbba0386b960b5eab2b88c83ee81dfa356770b3b4d5876ce38c02f964"]
      - values: {"ab":8,"anb":32,"nab":12,"nanb":48}
        answers: ["sha256:cb45e2a6ae6bf78b907bff18a87430d545376148af62dc0351d6f66edbd918dc","sha256:017cc55453b92fdbe42b70e3dbfc6727d339a9c896906d4eaa1c5c9410b3bda8","sha256:f83d8d3a666f53f0bc0b944fdc1713e8d2b943e429c90b288e8b0303c6e39af8"]
      - values: {"ab":50,"anb":10,"nab":30,"nanb":60}
        answers: ["sha256:565257a4ce5d12579cfb2c70db85001acc19162cd1279c28480b38b2b111cd9a","sha256:9130340e25b9a98724efcd9b3d6abcc8a3c96508a002871ea685d5c90a53eb94","sha256:4c539b1188927b8d33cb0c1a0377d47201c2fabf2481f4c9dd56c6c4ef0fc8cc"]
      - values: {"ab":22,"anb":18,"nab":33,"nanb":27}
        answers: ["sha256:b96d7efcb9552b8982adb4af99d4d7d3313172e6f4434eaefe35e4b792cf78c2","sha256:a41fccd40a9eb27a3becc89fa822a8be07b5332eef7859f7a2d4e7880e5e0032","sha256:48c064985b18ce081010343500c528f50e4eff7cdb775fea10b51dcb89485757"]
  - id: independencia
    tier: 2
    prompt: |
      Si $P(A) = {{a}}$, $P(B) = {{b}}$ y $P(A \cap B) = {{c}}$, ¿son $A$ y $B$ independientes? Responde `si` o `no`.
    variants:
      - values: {"a":"0{,}5","b":"0{,}4","c":"0{,}2"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"a":"0{,}3","b":"0{,}6","c":"0{,}2"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"a":"0{,}25","b":"0{,}8","c":"0{,}2"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"a":"0{,}7","b":"0{,}1","c":"0{,}05"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
      - values: {"a":"0{,}4","b":"0{,}5","c":"0{,}2"}
        answers: ["sha256:97a62ad21d79c01cceb7767952acec4fec86bfe909b06e5f3f6963365cf91ab8"]
      - values: {"a":"0{,}9","b":"0{,}3","c":"0{,}3"}
        answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: probabilidad-total
    tier: 3
    type: numero
    sig: 4
    prompt: |
      La urna 1 tiene ${{r1}}$ bolas rojas y ${{a1}}$ azules; la urna 2, ${{r2}}$ rojas y ${{a2}}$ azules. Se elige la urna 1 con probabilidad ${{q}}$ y
      la 2 con probabilidad ${{q2}}$, y se saca una bola. ¿Cuál es la probabilidad de que sea roja?
    variants:
      - values: {"r1":3,"a1":2,"r2":1,"a2":4,"q":"0{,}5","q2":"0{,}5"}
        answers: ["sha256:db7d1729c7f25711fb56f8877d0629adc6db2c31f25ead39bc0ebb223befbc2c","sha256:d8f9f25d4e56c6a547c4ad794ee0bb1d214f38b9c96538785d0c0c8ade0df8d2","sha256:f28a9408c4ce6bf228d52e124b2672be2f1a53b0d574b5237d61b2fa00e724ca"]
      - values: {"r1":5,"a1":5,"r2":2,"a2":8,"q":"0{,}5","q2":"0{,}5"}
        answers: ["sha256:3b0fcb718adffc6aa113736660de3fb1f935f2a5ab0b1e3f260c557101b0793f","sha256:0b73732d8621782f5cf72e7945cb754b0c673c701a4e7502ff4e6510feccc316","sha256:9920207b3cceb528cb86ae096b96f556c418b5aa8f68f2bf8805338308d3dff9"]
      - values: {"r1":1,"a1":3,"r2":3,"a2":1,"q":"0{,}25","q2":"0{,}75"}
        answers: ["sha256:f06e4f896a0708f510058154c14edeadfb28497245adbf492bc54f0fa8a27530","sha256:6839afe0b8237ce6768a39f197404fc1f8eee01efa4e2617455a0343031aa939","sha256:b99fb9cf795d902339afecce1ee88702b94d6a2ea8946905cf31c753185cba02"]
      - values: {"r1":4,"a1":1,"r2":2,"a2":3,"q":"0{,}6","q2":"0{,}4"}
        answers: ["sha256:be24598aa08ab9d18612463c7e009f212bac0cd2f8d9348ac409253abc439b66","sha256:c1222b67d2ed502460b272f41ee9af899250d1a64d4eb9457ba11473bc171064","sha256:47e2045834e49a48e8f50e03765d5aeaf4cd016065cc022856bdf56f0606d021"]
      - values: {"r1":6,"a1":4,"r2":1,"a2":9,"q":"0{,}3","q2":"0{,}7"}
        answers: ["sha256:025c7f099f03f0f73e7975db48eb40000af834434b224ef90632419944aa8e76","sha256:e81f94b071130dca6015130d09bb55161c8823923f20a95d15f3e8337c77159f","sha256:bd2972b4ee82a4e00850af2baa2730c12a267f9d79b2621fb2dce4720e65e8c7"]
      - values: {"r1":2,"a1":2,"r2":7,"a2":3,"q":"0{,}5","q2":"0{,}5"}
        answers: ["sha256:f667441eeab1680afa18af5662cf96d133f22446defd693843477353af389a43","sha256:31c344a5bda446dc38a65352a1c038a65a59cc87cd196c48c713d358ea3947d5","sha256:3f71353cae6b9fbe429adf5fb3d1302889ef681b7d12c41ad57775cba85cbbf5"]
  - id: teorema-de-bayes
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Una enfermedad afecta al ${{pr}}\,\%$ de la población. Una prueba da positivo en el ${{se}}\,\%$ de los enfermos (sensibilidad) y negativo en el
      ${{es}}\,\%$ de los sanos (especificidad). Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma?
    variants:
      - values: {"pr":"2","se":"95","es":"90"}
        answers: ["sha256:696458f3669d4b5de4b416fab6e152d98c8552c76ad41ec2320af5c5435b8399","sha256:bc3e41212ee3d4ffe86ec846e8322f6cb1e5ce2b7d77e144c789fb699ea7ddfb","sha256:ccefb1823f000f95a5a7530d925930fef3cddaf0e501544cd527c009177e9cf1"]
      - values: {"pr":"10","se":"90","es":"90"}
        answers: ["sha256:db887c42351702aa822e521d568196a4e3ebf9aca2ced8f467ac6a59f0e32b89","sha256:8e5b37e8d1a066f280e896d8b01b1adc3d3b424d9fe926a3d26e43324e390b93","sha256:2c3b8917f5e8a7a2cc2a2626fc6811d492fbba89756445ee0ace3e6adc68d654"]
      - values: {"pr":"0{,}5","se":"99","es":"98"}
        answers: ["sha256:47c763c4ce21e901769aa93912635ba576a1bea0ad2162bb8223b9d0dc509b27","sha256:6cd66207d48fe2f3d925791d3ad16927c360691840f58ff05bd0504e158a811e","sha256:77a447e1cc74e41cdb61fd2603e2860db0433670fa115817c507424289731b8a"]
      - values: {"pr":"30","se":"80","es":"85"}
        answers: ["sha256:d9429e6f6be49af537937e93b9c8c7c8eb39c31e8a8b181983e1f39bfa43ce0d","sha256:247685e433066fc6914465d0dc4009229b6ee1e2bc0809bb9a1efe7c71215545","sha256:e7cd3109d2579a6b1a4318fdd118fce4c3bda979cb89630719f65d657cfb2115"]
      - values: {"pr":"5","se":"98","es":"95"}
        answers: ["sha256:da0f3cf599f5a1562810757ce1c9a2f695933ccd1bf3ee8c31459389cbde3895","sha256:a4c57d95f643fcd2cd6ed449ddea3968ffb340eb0b6cf30a9488ccb337b40bb6","sha256:7714ab1de50e3d4a26cd359d8d43d41033ceb05a1750e0debb544c089b149f19"]
      - values: {"pr":"0{,}1","se":"99{,}9","es":"99"}
        answers: ["sha256:352cfafbac2612b6f1d4908ff75305d387c03df95a74c68d3c349c455aaa84ca","sha256:f9139b70fd6d446ac54de39213ad35a10a8467bb501b4f5fccfd926f2fc1777b","sha256:4c8a07f3761f2f8e0accd15347f8ce37005e36287d22a2abad214f1e07a6b8eb"]
  - id: premiados-en-un-sorteo
    tier: 3
    type: numero
    sig: 4
    prompt: |
      De ${{n}}$ papeletas, ${{m}}$ tienen premio. Se cogen ${{k}}$ al azar. ¿Cuál es la probabilidad de que exactamente ${{j}}$ tengan premio?
      (Cuenta con números combinatorios.)
    variants:
      - values: {"n":10,"m":4,"k":3,"j":1}
        answers: ["sha256:e4e2b78d628751ef3d1d4b50864d99dc27428346476605895906b52ba44002e9","sha256:3e2de4fc57a5aa006edc7aac7119fff698561f349ba3f3bff31a31f987af7d5d","sha256:8ca3be37ff4e7a127a102ce7059cd7214e12b543e695c3ecc330b9883ea4b631"]
      - values: {"n":12,"m":5,"k":4,"j":2}
        answers: ["sha256:3ac93e0446a2f283d1848500c6f6a8165f48a1adefcb7cf49a8380085337960f","sha256:134813dc0e3673f051c9df1cd4feaaadf7f1f36bf12860b28ff329ad599715bc","sha256:6a56e8e78a9b37c6a626b0d0cfc3bef440d439498bb8dccdf17ecdd69a52295a"]
      - values: {"n":20,"m":6,"k":3,"j":0}
        answers: ["sha256:8b05d7787eb492214521051d11bcf211083a8569de40bfafaf5a8bf7ba23eee6","sha256:10b33e4d0b3cc8d09dca486d26e795f2e7409a6a46beff5d0cda0bf753c95bd1","sha256:76ee2f1464f84aedd95860047225c96818cbb4495fb90f4e8a7122d17b63fad6"]
      - values: {"n":15,"m":3,"k":5,"j":1}
        answers: ["sha256:3e74bbb3f2834c0c3fb325a91150ce0280faa4cddcd081efa8314edd6a74e1b5","sha256:3f31d0734359118935fff6ca2cd1ea55a10339c91fa6a954a0c7678bdd7e737e","sha256:535666531e54770f1a0d7e20a36e27df95dd82ecf9aeaadc0a34acda57a380fc"]
      - values: {"n":9,"m":4,"k":4,"j":2}
        answers: ["sha256:5ce79257b5599b81ca9e38accc0f8cb74dc927c89ad69e259e86e698d5667277","sha256:21b329a3f14fd21f5ac6403b9c0fe0acecc1530d435a241da6254e825c185331","sha256:e4058dbd67d6926ab85f5c35a493fced43bb93737a9e99cdd8d67b275eddfc30"]
      - values: {"n":30,"m":10,"k":2,"j":2}
        answers: ["sha256:186e6beba46ff73a77ae0bec75e8264540edf597cb2bca7624ee2ce5981dc761","sha256:6e26a340af2f2df880bdc3b4bf094f6a71b72920e1e4c46d2e9dd720541f4fe2","sha256:c92d35b5cc9b5db0ee3075e8a66ab9110e8528f5df9b0f122a5eabd152c08fb2"]
  - id: problema-del-cumpleanos
    tier: 3
    type: numero
    sig: 4
    prompt: |
      En un grupo de ${{n}}$ personas, ¿cuál es la probabilidad de que al menos dos cumplan años el mismo día? (Supón $365$ días igual de
      probables; calcula primero la de que todos sean distintos.)
    variants:
      - values: {"n":10}
        answers: ["sha256:2a1d19efea3379e387a4ac402d902e7f5902ecbe205d89fc99ee3c43ff47c25f","sha256:94c76131003c78ec2dcad6156d192f257b9d1f1173c529822d227c808f4aa343","sha256:6c03922df6502f484aa5a8921f02d3f710f1da0bde85ad55f34addf5cf31de57"]
      - values: {"n":30}
        answers: ["sha256:70ca9db56ef5ff351d187f141288e6472c2e4852524938fdefec4164fe04c95e","sha256:7df5d4a2084fc73326be2c32a65077c95a8a0d3471b0fdd5decff19b46a4a1da","sha256:92ba02533aabea77aa310f5554f521a4b1f3b63eda82ddf7f589d04a3833115e"]
      - values: {"n":15}
        answers: ["sha256:809261054f313b015c89107a2c3ab68d197e3585b7ffb6572b7a5b681b69d3b5","sha256:30767a3f30845de22b45cf49594bbef261fc9cf51050ff87644477c51115556b","sha256:7149b5d8a7960d3a14bc0f2f50f7eb9c1f36acbf87de3f7bc4313455e972479a"]
      - values: {"n":40}
        answers: ["sha256:fdd26665f8647589d5c13fa0056d98c3155662b5b51e40ddbf71a5c8b045c4cb","sha256:2bdb9c43a103ad16b7a727145f23b43607c202266ad167d22b5f24bb84bd2f9e","sha256:211c7e8a53b047151fb7f2607dd9c9d9bdb0f869bb5d7845ce94bcc5f6c03194"]
      - values: {"n":50}
        answers: ["sha256:1102c0a8f9b1bce99f1ccd7e9ae2a0612f216cf3baaaea0110e2db78a7d18d01","sha256:945dbec94b0a654714490e556a5dc1b45eb63867d7bd30d50167b6293b18ac03","sha256:766947d8a6c8e39cb0102f153e4d136f07fcda56ac57069ffc37de5c7a2b68de"]
      - values: {"n":5}
        answers: ["sha256:5cb6f719c4d1a5715f1859faf0c0b2dbf0116927ea8ccaddd0cdb0b3358ccc0e","sha256:72acc75ba5def9ec051adf697a13a583fb9ef2d76e41b6c5a36ccc616ca1f6f4","sha256:962671213eeaecd8574feb01e5a5f289dd57d24b871cd897793b27d85052aa35"]
  - id: paradoja-del-test
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** Una enfermedad rara afecta a $1$ de cada $1\,000$ personas. Una prueba detecta al $99\,\%$ de los enfermos y da falsos positivos en el
      $2\,\%$ de los sanos. (a) Calcula, con un árbol o con una tabla de $100\,000$ personas, la probabilidad de estar enfermo si se da positivo.
      (b) Explica por qué el resultado sorprende y qué error de razonamiento lo explica. (c) ¿Qué pasaría si se repite la prueba a quien dio
      positivo (suponiendo resultados independientes)?
    sealed: "gz64:H4sIAAAAAAACCn1TwW4TMRT8lafVIiXpKtoWqpJFHKDkXsERc3i7fqFGXr+tvY4aotzhM3rmhDj21vwJX4Kes22Tgrjt+tkz45nxOgtsY2/YZVU2mYxwPJnAO4L8uCyVKsqyzKEjH9hhKNJqDhT67Y0DcgvyLQZYQT6b5aDRQcfB9GbJr0ATWAwyUaqYybGACYMs5CdKFUo9ywVRxrOXeXFwfgoXw1eodtvL2ZnsIbAc4CqScjt+DhDYJQUV5BejOSjVGg1HY3gNSi08NuvZbLMeMDagFHad52so18WmfCGoLTkOoEXZ6aBsqpxyk8moFj8+EPSGnCZAaNgtotPGC9nRQDYXMsETHxqRsy8kn8I5twwWB89IowYK0MYVePRYpEst0AYODxYEGEUxxDfkevxC0NFVpO1PFhOiQ+U6ri02ZvtLsmDfkkwCOg5jCLEjjy6JaWNzyYCJZEleoybPYQrzIJLufixQYHAXGfQYEGoMdHdbwSWuxGzoyZEHctBEUSP7Os811sYajVo5+TfsDYzSiJZoyTUGx/dGNmLkBXqEq2jIgTb8cNVC8FykpajZO3x3Ky7l90GJjQ6ig0Cfo9OP5yvIh6SHraBUo7kfItn8exmOdh+nz/fXy5MnFTk7zqfwnjrqjQcrtvtINQLGNlmxc9diUuXFDRh17IECQ6DUF+NbdMn+x3CbdBUc7iKeCep4mhWZj7U3TVZ9XGeNNz15w1mVnbMLvY+rIaTaIrA8pu2Nr9nCCriWktKTR/BX3YWhi67nkFUnm+KAY37dWdOkeFPPw1Cu3tNh3XN59Acdh5WI6bAjOxRpL8j/cb7ZUb7FFckbTD3gZM+TkgE2fURrvqJGGP3+/m3XjLPjfHyI/2nzB1iygCzWBAAA"
  - id: r-espacio-muestral
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Cuántos resultados tiene el espacio muestral de lanzar tres monedas (distinguiéndolas)?
    answers: ["sha256:4600085590d4226200cd684f6e30091725eae47b9378008d7cc7e05fe8d0d2ad","sha256:de7ec47d4da080856bbafe500034c4aecc220e1e541232abbf252b83f99bfa33","sha256:0f8242f9b461606ecd67e51878824186b483f4e11a136b01fe065604dc2c8c0b"]
  - id: r-imposible
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué probabilidad tiene el suceso imposible?
    options:
      - |
        $0$
      - |
        $1$
      - |
        $0{,}5$
      - |
        Negativa
    answers: ["sha256:1cd6d574b84066c01eb9dceb1ebbb9a747dd966a445745dc059ba6e9a18a3f91"]
  - id: r-incompatibles
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué significa que dos sucesos son incompatibles?
    options:
      - |
        Que tienen la misma probabilidad
      - |
        Que uno es el contrario del otro
      - |
        Que no pueden ocurrir a la vez
      - |
        Que son independientes
    answers: ["sha256:1f604bd9687ea8db4820ea364e575fc89d0f0772ab7d4bd6c0e422340c1a7ffd"]
  - id: r-condicionada-def
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se calcula $P(A \mid B)$?
    options:
      - |
        $P(A) \cdot P(B)$
      - |
        $\dfrac{P(A \cap B)}{P(B)}$
      - |
        $P(A) + P(B)$
      - |
        $\dfrac{P(A)}{P(B)}$
    answers: ["sha256:41e21371aaff8fcee83768c6adb93796e7fc314d2a9491ce2dbf765615cb31e8"]
  - id: r-laplace-condicion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cuándo se puede usar la regla de Laplace?
    options:
      - |
        Siempre
      - |
        Cuando hay pocos resultados
      - |
        Cuando los resultados son números
      - |
        Cuando todos los resultados son igual de probables
    answers: ["sha256:7fea4e13abf8ca9554632c21ab66904a60063ac9d733c407d617f479ff9e419a"]
  - id: r-grandes-numeros
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué dice la ley de los grandes números al lanzar una moneda muchísimas veces?
    options:
      - |
        La frecuencia relativa se acerca a la probabilidad
      - |
        Salen exactamente la mitad de caras
      - |
        Las caras y cruces se alternan
      - |
        La probabilidad cambia
    answers: ["sha256:ef7f50c31f0bc4055742416d266aaf098709417ed53451bdbed82be4c331d48f"]
  - id: r-moneda-memoria
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Una moneda equilibrada ha salido cara $6$ veces seguidas. ¿Cuál es la probabilidad de que en el siguiente lanzamiento salga cara?
    answers: ["sha256:8911c1b57c9784b6b4f672acefd1b96c3f339436d8ebc79e7b74d504be5a67cc","sha256:667dcff86cc2a789fdcf8065491eeac2d6f489f0912b129c822d5991b1f8e8d8","sha256:3eb6c9a2f7bc40a42f59999068242293c344b7ab46eff12830674dccfb487ad6"]
---

# Probabilidad: experimentos aleatorios, sucesos, frecuencias, regla de Laplace, propiedades, árboles, probabilidad condicionada, total y Bayes

Nadie sabe qué saldrá en el próximo lanzamiento de un dado, pero sí sabemos que, a la larga, cada cara sale más o menos la sexta parte de
las veces. La **probabilidad** convierte esa regularidad en números: permite decidir con incertidumbre (seguros, medicina, juegos,
predicciones del tiempo), evitar errores de intuición muy comunes y es la base de la estadística, la física cuántica y la inteligencia
artificial. Este nodo construye las ideas básicas, desde la regla de Laplace hasta el teorema de Bayes.

## Objetivos

Al terminar sabrás:

1. Describir experimentos aleatorios, su espacio muestral y operar con sucesos.
2. Relacionar frecuencia relativa y probabilidad (ley de los grandes números).
3. Calcular probabilidades con la regla de Laplace y la combinatoria.
4. Usar las propiedades: contrario, unión, incompatibles.
5. Resolver experimentos compuestos con árboles, probabilidad condicionada e independencia.
6. Aplicar la probabilidad total y el teorema de Bayes, y entender las paradojas más comunes.

## Qué debes dominar antes

[[mat-combinatoria]] (contar casos), [[mat-fracciones]] (operar con fracciones) y [[mat-estadistica-descriptiva]] (frecuencias).

> [!question] Test de entrada
> 1. ¿Cuántos subconjuntos de $2$ elementos tiene un conjunto de $5$?
> 2. Calcula $\frac23 \cdot \frac34$.
> 3. Si en $200$ lanzamientos salen $58$ seises, ¿cuál es la frecuencia relativa del seis?
>
> Respuestas: $10$; $\frac12$; $0{,}29$.

## 1. Para qué sirve

- **Decidir con riesgo**: seguros, inversiones, apuestas (y por qué la banca siempre gana a la larga).
- **Medicina**: interpretar pruebas diagnósticas y ensayos clínicos.
- **Ciencia y tecnología**: errores de medida, control de calidad, criptografía, física estadística y cuántica.
- **Estadística e IA**: estimar con muestras y tomar decisiones con datos inciertos ([[mat-probabilidad]], [[mat-estadistica-inferencia]]).

## 2. Experimentos, sucesos y frecuencias

> [!practico]
> Un experimento es **aleatorio** si, repetido en las mismas condiciones, puede dar resultados distintos y no se puede predecir cuál
> saldrá (lanzar un dado). Si siempre da lo mismo (dejar caer una piedra), es **determinista**. Aunque cada resultado sea imprevisible,
> al repetir muchas veces las frecuencias se estabilizan: eso es lo que mide la probabilidad.

- **Espacio muestral** $E$: el conjunto de todos los resultados posibles. Al lanzar un dado, $E = \{1, 2, 3, 4, 5, 6\}$.
- **Suceso**: cualquier subconjunto de $E$ («sacar par» $= \{2, 4, 6\}$). **Seguro**: $E$; **imposible**: $\emptyset$; **elemental**: un solo resultado.
- **Operaciones**: unión $A \cup B$ («$A$ o $B$»), intersección $A \cap B$ («$A$ y $B$»), **contrario** $\bar A$ («no $A$»). $A$ y $B$ son **incompatibles** si
  $A \cap B = \emptyset$ (no pueden ocurrir a la vez).
- **Frecuencia relativa** de $A$ en $n$ repeticiones: $\frac{n_A}{n}$. **Ley de los grandes números**: al aumentar $n$, se estabiliza alrededor de un
  número, la probabilidad de $A$. (No dice que los resultados «se compensen»: una moneda no tiene memoria.)

## 3. La regla de Laplace

Si los $n$ resultados de $E$ son **igual de probables**,
$$
P(A) = \frac{\text{casos favorables a } A}{\text{casos posibles}} .
$$
*Ejemplos:* sacar par con un dado, $\frac36 = \frac12$; sacar roja de una bolsa con $3$ rojas y $2$ azules, $\frac35$; que dos dados sumen $7$: hay $6$ casos
favorables de $36$, $\frac16$. Para contar casos se usa la combinatoria ([[mat-combinatoria]]).

**Cuidado**: si los resultados no son equiprobables, Laplace no vale (al sumar dos dados, el $7$ es más probable que el $2$; contar «sumas
posibles» del $2$ al $12$ como $11$ casos iguales es un error).

## 4. Propiedades

> [!practico]
> Las probabilidades se comportan como proporciones de un todo: el todo vale $1$, lo que no ocurre es lo que queda, y para sumar dos
> trozos que se solapan hay que no contar dos veces la parte común.

- $0 \le P(A) \le 1$; $P(E) = 1$; $P(\emptyset) = 0$.
- **Contrario**: $P(\bar A) = 1 - P(A)$. Muy útil para «al menos uno»: $P(\text{al menos un 6 en 4 tiradas}) = 1 - \left(\frac56\right)^4 \approx 0{,}518$.
- **Unión**: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$; si son incompatibles, $P(A \cup B) = P(A) + P(B)$.

Estas propiedades son las reglas de partida que eligió Kolmogórov (y sus consecuencias) para dar a la probabilidad una base rigurosa ([[mat-probabilidad]]).

## 5. Experimentos compuestos, árboles y probabilidad condicionada

> [!practico]
> Si sacas dos bolas de una bolsa sin devolver la primera, la segunda extracción depende de lo que salió antes. Un árbol lo
> organiza: en cada rama se escribe la probabilidad de ese paso **sabiendo lo que ya ha pasado**; la probabilidad de un camino es el
> producto de sus ramas, y la de un suceso, la suma de los caminos que lo forman.

**Probabilidad condicionada** de $A$ sabiendo que ha ocurrido $B$ ($P(B) > 0$):
$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)} , \qquad \text{de donde} \qquad P(A \cap B) = P(B) \cdot P(A \mid B) .
$$
*Ejemplo:* bolsa con $3$ rojas y $2$ azules, dos extracciones sin devolución: $P(\text{dos rojas}) = \frac35 \cdot \frac24 = \frac{3}{10}$.

**Independencia**: $A$ y $B$ son independientes si saber que ocurre uno no cambia la probabilidad del otro: $P(A \mid B) = P(A)$, o lo que es lo
mismo, $P(A \cap B) = P(A)\,P(B)$. Los lanzamientos sucesivos de un dado son independientes; las extracciones sin devolución, no. No hay que
confundir independientes con incompatibles: dos sucesos incompatibles con probabilidad positiva **nunca** son independientes (si ocurre
uno, el otro ya no puede).

**Tablas de contingencia**: cuando los datos vienen en una tabla de doble entrada, $P(A \mid B)$ es la proporción de $A$ **dentro de la columna** $B$.

## 6. Probabilidad total y teorema de Bayes

Si $B_1, \dots, B_n$ son incompatibles y cubren todos los casos (un **sistema completo**: por ejemplo, «urna 1» y «urna 2»):

- **Probabilidad total**: $P(A) = \sum P(B_i)\, P(A \mid B_i)$ (sumar las ramas del árbol que llevan a $A$).
- **Teorema de Bayes**: $P(B_i \mid A) = \dfrac{P(B_i)\, P(A \mid B_i)}{P(A)}$. Permite **invertir** una condicionada: de «probabilidad de dar positivo si se está
  enfermo» a «probabilidad de estar enfermo si se da positivo».

*Ejemplo:* una enfermedad con prevalencia del $1\,\%$, una prueba con sensibilidad del $99\,\%$ y especificidad del $95\,\%$. En $10\,000$ personas: $100$
enfermas, de las que $99$ dan positivo; $9\,900$ sanas, de las que $495$ dan positivo. $P(E \mid +) = \frac{99}{99 + 495} \approx 0{,}167$: ¡solo un $17\,\%$! Contar con
**frecuencias naturales** (personas en lugar de porcentajes) es la forma más segura de no equivocarse.

> [!formal] Con rigor: de dónde sale Bayes
> Por la definición de condicionada, $P(A \cap B_i) = P(B_i)\,P(A \mid B_i)$ y también $P(A \cap B_i) = P(A)\,P(B_i \mid A)$. Igualando y despejando,
> $P(B_i \mid A) = \frac{P(B_i) P(A \mid B_i)}{P(A)}$, y $P(A)$ se calcula con la probabilidad total, porque $A$ es la unión incompatible de los $A \cap B_i$. $\blacksquare$

## 7. Resultados sorprendentes

- **Cumpleaños**: con solo $23$ personas, la probabilidad de que dos cumplan el mismo día supera $\frac12$ (se calcula con el contrario: todos
  distintos, $\frac{365 \cdot 364 \cdots 343}{365^{23}}$).
- **Falacia del jugador**: tras muchas caras seguidas, la siguiente sigue teniendo probabilidad $\frac12$.
- **Tasa base**: una prueba muy buena para una enfermedad muy rara da muchos falsos positivos (sección 6).

## 8. Errores típicos

- Usar Laplace con resultados que no son equiprobables.
- Sumar probabilidades de sucesos compatibles sin restar la intersección.
- Calcular «al menos uno» sumando casos en lugar de usar el contrario.
- Confundir $P(A \mid B)$ con $P(B \mid A)$.
- Confundir sucesos independientes con incompatibles.
- Olvidar que en una extracción sin devolución cambian los totales.

## 9. Resumen

- Experimento aleatorio, espacio muestral, sucesos; frecuencia relativa y ley de los grandes números.
- Laplace: favorables / posibles, si son equiprobables.
- $P(\bar A) = 1 - P(A)$; $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
- Árboles: producto por ramas, suma de caminos; $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$; independencia $P(A \cap B) = P(A)P(B)$.
- Probabilidad total y Bayes; frecuencias naturales.

## Repaso: lo que debe quedarte dentro de un mes

1. Cuándo se puede usar la regla de Laplace.
2. El truco del contrario para «al menos uno».
3. La fórmula de la unión.
4. La definición de probabilidad condicionada y la de independencia.
5. Cómo se calcula la probabilidad de estar enfermo tras un positivo.

## Siguiente

[[mat-combinatoria-probabilidad-basica]] repasa el bloque; más adelante, [[mat-probabilidad]] (resultados numéricos al azar y sus distribuciones).
