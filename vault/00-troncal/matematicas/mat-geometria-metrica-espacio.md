---
id: mat-geometria-metrica-espacio
title: "Geometría métrica en el espacio: ángulos entre rectas y planos, proyecciones ortogonales, simétricos y distancias"
area: matematicas
trunk_level: 4
prerequisites: [mat-rectas-planos-espacio]
academic_sources:
  - "Matemáticas II (Bachillerato, LOMLOE), capítulo 6: «Geometría métrica en el espacio», secciones 1 (ángulos entre rectas, recta y plano, planos; paralelismo y perpendicularidad), 2 (proyecciones ortogonales), 3 (puntos simétricos, posiciones relativas de dos rectas) y 4 (distancias entre puntos, rectas y planos). Apuntes Marea Verde, autores Leticia González Pascual y Álvaro Valdés Menéndez. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/Bachillerato/BC2%2006%20GMetrica.pdf"
  - "OpenStax, «Calculus Volume 3» (2016), sección 2.5 (distancia de un punto a una recta y a un plano, ángulo entre planos). https://openstax.org/details/books/calculus-volume-3"
hints:
  - "Concepto: los ángulos y distancias del espacio se reducen a productos de vectores: el ángulo entre rectas o planos sale del producto escalar de directores o normales; las distancias, de proyectar un vector sobre una normal o de dividir un área (o un volumen) entre una base."
  - "Herramienta: d(P, plano) = |Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²); d(P, recta) = |AP × v| / |v|; d(rectas que se cruzan) = |[AB, u, v]| / |u × v|. Proyección sobre un plano: recta perpendicular por P (director = normal) y corte con el plano; el simétrico es 2H − P."
  - "Documentación: Marea Verde Matemáticas II cap. 6; OpenStax Calculus Volume 3, sección 2.5."
exercises:
  - id: angulo-entre-rectas-3d
    tier: 1
    type: numero
    sig: 4
    prompt: |
      ¿Qué ángulo agudo, en grados, forman dos rectas de vectores directores ${{u}}$ y ${{v}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"u":"(1, 2, 2)","v":"(2, -1, 2)"}
        answers: ["sha256:6e4d8b7cdc2db831d2f868fd0975a8bf64b251387158181043ba4caed6dc93e4","sha256:37412a8343135d141da91e6fdfc3fec715f15b7757547bb1490e8099982cd7cb","sha256:cd6c6b5987265704e546cb6df34e0b0853f6cf82b2da1b3001545ef3d5eb901d"]
      - values: {"u":"(1, 0, 1)","v":"(0, 1, 1)"}
        answers: ["sha256:699f3a74791dcf569f016e27f3e996066e6f09cb3cdcf9c5bacf6d2edf394206","sha256:c4d7e0636ab295b59aeebac51eaf7676ac8c6369d5bb02b40b3a3ea02f057343","sha256:9ede3150ecf8e2af6aa8ac540ef7beb47184dc95bc52036875050a4d6300f4a4"]
      - values: {"u":"(3, 1, -1)","v":"(1, -2, 4)"}
        answers: ["sha256:60f7b365b661b59cb82ab76881f2cb9eec4c60f834cc91b6859a13732747ff91","sha256:1fb9620642977d550d5520066f7f5773a32fc46744cfa33ec8d9fad920d5f89c","sha256:499d5f36333298ff7cb0e945ba65901a7604e9370e57239d05b3e97bdfd7f26b"]
      - values: {"u":"(1, 1, 1)","v":"(1, -1, 0)"}
        answers: ["sha256:b77d6f6e57a005b05552ccded4a6e0428d3d33aa56dc769af2a9c132e4b632d6","sha256:5cdd2a23002df7a9da0cc4b1424878bc8956d0af2334d9f25bcc8f8c7f8f29fd","sha256:18ef800c05d7f030c70cabbecd65ce5946d9512c65ad97ba5514b8f5cb232ff7"]
      - values: {"u":"(2, 2, 1)","v":"(4, 0, 3)"}
        answers: ["sha256:6a7d5e3986c09820656b95094fdd9d16773b9c4214ba380d01e6b0985fc12297","sha256:b91780f428531223445aa664f934f16ba956f51417efe3e33178e3345eeca271","sha256:3364d17660cb9ac3b2ad13233daecfed983767eae17a7f2472db67e91fc185eb"]
      - values: {"u":"(1, -2, 3)","v":"(-2, 1, 1)"}
        answers: ["sha256:d83841f0f7420d2af2df9b0a5707ac7e6a3087f93424061170375ab3c8f794b2","sha256:7c622490c46408c8a9297f2c9fa80075ff7bf07d67662e6b31a2dee5efba7d29","sha256:f6f40c9438e8320b3b298e902cd4f1f40912c98a14c80e3cb66a93f86174b7a4"]
  - id: angulo-recta-plano
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué ángulo, en grados, forma la recta de director ${{v}}$ con el plano ${{p}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"v":"(1, 1, 0)","p":"z + 2 = 0"}
        answers: ["sha256:366abed6d5595866c1c6a7b43512962d86dee5afb92b0646759955212f8de4d8","sha256:47366becc3e10a8ad6a4067f722636baa9ed6f97f6999852a9f5a4af8f63a038","sha256:df7fd3ae285fa1e538da2b030b40caa84a2ad776619ebcdf05aa9648a078e8f8"]
      - values: {"v":"(1, 2, 2)","p":"2x - y + 2z = 0"}
        answers: ["sha256:cb7a327ffaa648bc7eb378a7c4c88b371eb2a4dff695e95ac7d55dae0ef95653","sha256:5595a9eae998bf224dfd11999b3176dc3abe267890d3fecc470fd6449febbf53","sha256:b49c1466a5a5dc5fe2e9ee40a383173236fca141a4c6873308b067b00c7f6edd"]
      - values: {"v":"(0, 1, 1)","p":"x + y - 3 = 0"}
        answers: ["sha256:ef0df53c44d3b6f297ee89fa56248bc1b21b42815fe56f3716deaf65b078ee52","sha256:e0e40a19272ff93f79ad83365e44cd7af7eee64350519505ae05206d6b361a51","sha256:3a365decd32f11395ec596424cbfeb07ebe3f8a3d801165786ccdc7e639ba10e"]
      - values: {"v":"(3, 1, 4)","p":"y + 1 = 0"}
        answers: ["sha256:8d477b84740ce69ae3b1ad5d725d858e02b9990dd3c64f094d40a7ba856326e6","sha256:c3d303323dd03ef04dfdf44dae4c7ea605ff865233a5c034661d7cb42a693f24","sha256:15f29d284a0c2615d59c1d4f9341b289f1343b0d24e6790f1ccb44367784616c"]
      - values: {"v":"(1, -1, 1)","p":"x + 2y + 3z - 6 = 0"}
        answers: ["sha256:5429efbc67a5dae0daaafc36c4dd07ad850ee028bcb06dd5481a80e5f4ee0b13","sha256:3486510b08907ab92b42e6ec6ae36a9d1a894e9dc1f1b42ff5220a5341ed7f02","sha256:2016be092b1b07d6825d216a3cfac455324d7b35a7327c96f6d7e01732bafa15"]
      - values: {"v":"(2, 1, 2)","p":"x + z + 4 = 0"}
        answers: ["sha256:59a2a2ca66cf14d2329ad3e87b062022e5bda8591686cf67d9eabb88ad7a85b3","sha256:5e9568943e8b70f6cd54bca997407192aa6e7dfd1500ae41f21b6d11aad30ba6","sha256:f7d07f29b3775eb9c8a066a9d6ff7c5d498e17bf01729cc66f15c7337f7df8e9"]
  - id: angulo-entre-planos
    tier: 2
    type: numero
    sig: 4
    prompt: |
      ¿Qué ángulo agudo, en grados, forman los planos ${{p}}$ y ${{q}}$? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"p":"x + 2z = 0","q":"x + y - 2 = 0"}
        answers: ["sha256:8b3c86c35c15345ccb53a2ec7f73372ebbda9447b907d7cb96ef13a3f02632ee","sha256:aeb5914dbd7cdcad127c26a649887c685b46075790640ce2e2daec70744af119","sha256:304bb82ddc72647008bded5381dc7cc5710bcc65a269026ef43debe3e8c30c5c"]
      - values: {"p":"2x - y + 2z + 1 = 0","q":"x + 2y + 2z = 0"}
        answers: ["sha256:673dc364744dce25f4ed60a6fd894580c31b2bb464fbf0b16f2475932cccc114","sha256:59fab7a9a37483bfc68f2c46abc5003044134bd62dfc208e1260456807c339ae","sha256:4d0079179e92eddfea0b55747230ea6dd5245f4a499b4639ad2a35206ecc4b5b"]
      - values: {"p":"x + y + z - 3 = 0","q":"x - y + 4 = 0"}
        answers: ["sha256:e20a2155c167255041e79a311dd40458d9ae915ca54667d6ab3f01a090f49b36","sha256:bf648295832382bfba6aba198e65ba7b295d9a5150877b08196209089df2750f","sha256:1552413ef0ed2fe16706149ae3d66f890283df77a2b57a5e3976efddb9bdfbcc"]
      - values: {"p":"3x + 4y = 0","q":"4y + 3z - 1 = 0"}
        answers: ["sha256:cdcda494b6d754c42fc18c6bc297ecd0d2c5ec47d2a8eef920d13c35e05e4be8","sha256:c5dd4e00590be515e67f56ee922ffd694882a22f87190d20c799a3b4003ebb6e","sha256:3591148f843e73ca3400091056dd577d0b91366c8e6b73239d6f02afdbf19576"]
      - values: {"p":"x + 2y - z = 0","q":"2x + y + z + 5 = 0"}
        answers: ["sha256:b29a86ee33c6cf2549d4e1317c8bb4f3bb8925e24ba72ed5e4826220e853eb28","sha256:463430f166ff751d7a9b6994bf14aea7c7319a0620207fe4b2a0ae293377dec7","sha256:f4fa5a19a118a4e9cc7a3d1b63be93d2e6db88938c6ca7db7e4c980eab8114d1"]
      - values: {"p":"z - 2 = 0","q":"x + y + z = 0"}
        answers: ["sha256:3f6f170186eccd3811f3281917492d0c55370c61add08820c819fc75a51b7e0a","sha256:213951868fa8e5cfa812591bfd0931a7cc2b4172b7331728d0b4db2319adc649","sha256:9f6764283fd56c2982649730b1a43cdd37a39bb849b67a3b1762b19d2fda2fbb"]
  - id: distancia-punto-plano
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula la distancia del punto ${{P}}$ al plano ${{p}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"P":"(5, 1, -2)","p":"x + 2y + 2z - 4 = 0"}
        answers: ["sha256:2c12e7788ae7c81a9cf03330422c551bb74192898007236dfce4af45bc4ff8b8","sha256:d64333a065e0141c348ed56fa1636297ef7291643f913bc8b941f2383350338d","sha256:9b5401aea6d97507c5bd67398c8b537f7b212261fc3be5df89e503ba4c220357"]
      - values: {"P":"(0, 0, 0)","p":"2x - 3y + 6z + 14 = 0"}
        answers: ["sha256:a7ab817bde0ccf9aa1f70aaabf6df13b30a7444e7a1ee210ab1655f9c6162272","sha256:c4730855e5e096f91ebad26d84267af60c4850d39a23a6b6874f9fe1997f593d","sha256:72f8efe8f3d0fae5b5abf9ab0401cde4387f7f17993ccc7629ffdbea1602a89b"]
      - values: {"P":"(1, -1, 4)","p":"4x + 3z + 1 = 0"}
        answers: ["sha256:235a32b3c7b264f6a8e57f75d10884378324ef4be263dbc0166c1f3503409693","sha256:1dd47388d789154781099b44aaca9ccf850fa3519c29edcc3a44e6a41e839195","sha256:154648d55fd7b5b364d339e021befe915a3ad3c1f4e90fb025a95ba96a05ff8f"]
      - values: {"P":"(2, 5, 1)","p":"x + y + z - 2 = 0"}
        answers: ["sha256:8eb81ff96da26e7485a8418826ae2705e1a1157804f6582ee74e1f828fe5f412","sha256:f575209e75c188e422e3c15a55fb4bf140b865196e8abc2f9c2c1d6c19bc775d","sha256:1efa6e72586987476abdefba95994c0ee8bff260a615be7ffa43cac7f899d011"]
      - values: {"P":"(-1, 2, 3)","p":"6x + 2y - 3z = 0"}
        answers: ["sha256:36f999d92d1338145196994407f495d0524dbe850837f19725adaba38cd63632","sha256:0677b2dceafa823901c4f52d6ea66a88c5247a71733d9f1df3ab02395a85db4b","sha256:71242459a98370549e6c804e2cb2a21b8d23ba45a91e314e4c92aedc0825b7fe"]
      - values: {"P":"(4, 0, -2)","p":"3y + 4z - 10 = 0"}
        answers: ["sha256:9d41dc7044d2b81b67d282d275e07b72554a7b09d954ca01534a259b699026a7","sha256:beb3be9be92dea6d4942f6b8803b6a9b13293da366f031ebe151f38a308f2acf","sha256:ef4d2dd268ef4fd39e392a1bbae9bf8464aa253c5e18f971afb88e3b7ef2ac7c"]
  - id: distancia-punto-recta-3d
    tier: 2
    type: numero
    sig: 4
    prompt: |
      Calcula la distancia del punto ${{P}}$ a la recta que pasa por ${{A}}$ con director ${{v}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"P":"(1, 2, 3)","A":"(0, 0, 0)","v":"(1, 0, 0)"}
        answers: ["sha256:af5ce3ad6df5c4d5f7c6629294586270f322ff8699bea9af2ca93fcd4037f575","sha256:3a0dd76e0e7ad3d92a4a24b758b58fec4b6ea6833ffc712bbeb7c247e9c15083","sha256:dc8aaa913dd521a82c0de220f56537bcba5fd34f32a5ae36f36c7dfbdfe1b8ff"]
      - values: {"P":"(3, 1, 0)","A":"(1, 1, 1)","v":"(0, 1, 2)"}
        answers: ["sha256:625f46ba05776e2af899e8a807e5033c8d00782b6e02dc34fa01fc2bc4b03590","sha256:43ff2aa6cbc6bc5978527fedc9d8a03a609153c04bc9463b0ce0fce9214f481a","sha256:002ed5a13f4c024a363cf1653ffa6a5aa87f9ab939655f323ccc0898be07bab2"]
      - values: {"P":"(0, 4, 1)","A":"(2, 0, 1)","v":"(1, 1, 0)"}
        answers: ["sha256:bee4f64277f3afa1efe9ff7bb667c42334f475755b7670002a98f0e9ece67a87","sha256:b56280d6bd2168e365969c43a31d88673dffb6f281b8520337ec463d835178d2","sha256:558f9f0413ad79a2a4777dfad71df18ecf8dda5adba6d791694b936ce891be3c"]
      - values: {"P":"(2, -1, 5)","A":"(0, 1, 1)","v":"(2, 1, 2)"}
        answers: ["sha256:67a6ab07995fd40514ec2ee95f6f3b5a535304d1539c6af36aa1aa7363c9b6a1","sha256:37288d64a970ceba3cf21bd135daf0a53ddad6298b9e42d704889f051ce8707f","sha256:44e9a99318daa26ba41ccd39eb6f68bca2a468f43414e05982de4f0f2cc0d46f"]
      - values: {"P":"(5, 5, 5)","A":"(1, 0, 2)","v":"(1, 2, 2)"}
        answers: ["sha256:36349b6b186db8d69a5b6be03e2922f891deadd53e9625f830a4815a5fa81996","sha256:2f1eddbef9a663e18aff69f9bc557c4d927ee38e79bdfa37055676dee4366108","sha256:0e89f7f1aa57063b6ac910778666b2994c859d9a54871d0adec52072231adec5"]
      - values: {"P":"(-1, 0, 3)","A":"(1, 1, 1)","v":"(3, 0, 4)"}
        answers: ["sha256:77aeb7e5969dfdf9d8370cdaa4199f716397fd6c093f936765dceb3c94f08c51","sha256:3b36dfbe460243880d32ad0a6d2659332641b87ae03f9c709aa7d716425d4e02","sha256:627b90a43ae84d0d027910a2b2fe75687956f62f0313b43553bb7d0e5bfb1c0a"]
  - id: distancia-entre-planos
    tier: 1
    type: numero
    sig: 4
    prompt: |
      Calcula la distancia entre los planos paralelos ${{p}}$ y ${{q}}$ (al menos cuatro cifras significativas).
    variants:
      - values: {"p":"2x - y + 2z + 3 = 0","q":"2x - y + 2z - 6 = 0"}
        answers: ["sha256:c46ba818b2ff44d381439aa878bfa24edb5fed6ddac7b994285e65179f4cc770","sha256:2d7d79f77fe6259814a5c926f6d8ec38ced204b5a99e913143b2e188048c8246","sha256:8f4c41d3b47b1a2409bc939c5c29a93f15fd57f1ba3d5f9abaefda092e0c0f68"]
      - values: {"p":"x + 2y + 2z - 1 = 0","q":"x + 2y + 2z + 11 = 0"}
        answers: ["sha256:760b08c99716fb076acdddaec725c98a58097c54178dc484f65da796d77986c6","sha256:9e35e99bcea538d9e1e4ec6bdb59e58437f6a8a8a96bc57048aee4e7b36f8d84","sha256:cc797f15431e89f22aaeb326dd88c5ffda12312c877a49a7b26321dd0fb32efe"]
      - values: {"p":"3x + 4y + 5 = 0","q":"3x + 4y - 20 = 0"}
        answers: ["sha256:6d57a4b65a76077e98472752167b208dde4e6df9c9b3609ea382bc0267b16582","sha256:6b584c6267de99acdca45cbf9809306cb455dfb88f58f2743d6ae299c19cc21f","sha256:8e9220132c9a93cd922c9e162c703aa1da7fffeee54ac515f29a5a24ab8e593b"]
      - values: {"p":"x + y + z = 0","q":"x + y + z + 6 = 0"}
        answers: ["sha256:faabb2584036ba94b7f3a3eb17ba413a4fefe61313525d34c43b57815e55eeeb","sha256:cf0a87deea479d43eb17e98c97b0ca483c820bb6dbbb09ed226d72f20068b533","sha256:3ecd0efe3717a87336e7b9b9bcd34b9a82e3de170ea6bf8678ad45bf958758e4"]
      - values: {"p":"6x + 2y + 3z - 7 = 0","q":"6x + 2y + 3z = 0"}
        answers: ["sha256:6052b43b620d5886b9a91fec216e543365c3c583939ef77d3601ec58cf851a24","sha256:830f90d83164b3e7133f8988749ebd0378cd6661069f55255cdf89f0df6a822a","sha256:632d1ef03c1ed0f26bb0f74b2c1fb91bcd141a920fae63cf4d170c2b5fd34b8a"]
      - values: {"p":"2x + 3y + 6z + 1 = 0","q":"2x + 3y + 6z - 13 = 0"}
        answers: ["sha256:fac6074e8409af13ff1a9e06c2a7045c9524eb4dc8146244e2eef2b521a969f1","sha256:8d83ef34922abf06447b0fb3fcf6795dc304d4894ded5ea86dee93c54a458ecf","sha256:4832788a3a755794e8a21457492470e111dffb54832f0f889e64b9419fab21ad"]
  - id: distancia-entre-rectas
    tier: 3
    type: numero
    sig: 4
    prompt: |
      Las rectas $r$ (por ${{A}}$, director ${{u}}$) y $s$ (por ${{B}}$, director ${{v}}$) se cruzan. ¿Cuál es la distancia entre ellas? (Al menos cuatro cifras significativas.)
    variants:
      - values: {"A":"(0, 0, 0)","u":"(1, 0, 0)","B":"(0, 1, 1)","v":"(0, 1, 0)"}
        answers: ["sha256:28e19b6cc2c86a2295f5a55767f116b1f814cb076907f27c90ac9c5cee916480","sha256:c97ef7d7db23dbbb63d41f0e40961ac6be9d25c2de6d79bd5aacce37c58c941a","sha256:daa413154ddab67f8a2621f3ed991346358e0ac5f1259ebba7028f5368cacdf0"]
      - values: {"A":"(1, 0, 0)","u":"(1, 1, 0)","B":"(0, 0, 2)","v":"(1, -1, 1)"}
        answers: ["sha256:8bf534f53e49f49115081cc2fcd0674f05ee8cb8d5137622de9ba23662641ab0","sha256:54cc3112d474d42dabf7625499f00290d9a00cfc894cdc5dcb982be535dc2ee0","sha256:534fcd95b3713507635acb9232fc8be2b2b119e9f1b0d78c7c665be378587990"]
      - values: {"A":"(0, 1, 2)","u":"(1, 2, 0)","B":"(3, 0, 1)","v":"(0, 1, 1)"}
        answers: ["sha256:3bef439ffc930781c07755190da0386c13692c1e80630e8e4b2ba7ead840456a","sha256:0e2c09634d10d97163f3206c3141ae17225676a5a7b118e34a6b2b127fe60a89","sha256:62e1d44e9dfdf27d194e525018f83d997decc2aa5f2711c01b48a78d2dd874b9"]
      - values: {"A":"(1, 1, 1)","u":"(2, 0, 1)","B":"(0, 2, -1)","v":"(1, 1, 0)"}
        answers: ["sha256:e7991476365984abb610d6f934e73e2f4db9e5ed40f51755cda65eba79be532e","sha256:b4404f0696a7dc6b7abea7752e9ab7d666066e68e5bd55652d0606a0aab7c3ae","sha256:b8d83c308ab0c53058d1e1614654cbecab78bb80e2a8403ef6d95235ebe1dbc5"]
      - values: {"A":"(0, 0, 1)","u":"(1, 2, 3)","B":"(2, 1, 0)","v":"(3, 1, 1)"}
        answers: ["sha256:dd966b9c1bd1e689af57ac842cb9641c75d58df5529a77cf9c6f16ec3d525a99","sha256:74c12d3c529601e827ae8f6ff3dea673d969bb8f10417a92ff727a08f73e7b8b","sha256:57d01f0428cdfd3e87608234b32db3c10346acc2a215eed356dcf9628a13b1c2"]
      - values: {"A":"(2, 0, 0)","u":"(0, 1, 2)","B":"(0, 3, 0)","v":"(1, 0, -1)"}
        answers: ["sha256:ddf4f915a78fd56ca5cecfef7223fa9a6715de1a16e9ec3d2f08bee5135ec273","sha256:d5bf789c0756d08525c0bca6094cbd4e29b000c9979348e5382db7dfa1a4cd3b","sha256:8c1f81b6abff54148cf4a4390ff795983678af0a9f9ed8fae57680095fb8742d"]
  - id: proyeccion-sobre-plano
    tier: 2
    prompt: |
      Halla la proyección ortogonal del punto ${{P}}$ sobre el plano ${{p}}$. Respuesta: `x;y;z`.
    variants:
      - values: {"P":"(3, 5, 1)","p":"x + 2y - 3 = 0"}
        answers: ["sha256:e379918b61baa071221661fd547c7fd5f8fb63fb3b3425281d7943804256c8fd"]
      - values: {"P":"(-2, 3, 0)","p":"2x - y + z + 1 = 0"}
        answers: ["sha256:119c2cc8219802abbaf50761d9bc71d51151c581a7b5fcea09d76ba760f3b0fa"]
      - values: {"P":"(6, 3, 5)","p":"x + y + z - 5 = 0"}
        answers: ["sha256:c34ab74dba11adb4301eba40b2bb16139c672fec71f9665611840c44ed003167"]
      - values: {"P":"(2, 3, 2)","p":"y + 2z - 2 = 0"}
        answers: ["sha256:7b82f1fa073660eb316549b318755706b47bbbd78a97316171237af19818036e"]
      - values: {"P":"(7, -1, 0)","p":"3x - z - 1 = 0"}
        answers: ["sha256:3f0f1abbc16d7867bd88af9fa151e5085e5718216bf1f1f1a4af3370a447f665"]
      - values: {"P":"(-2, -4, 0)","p":"x + 2y + 2z - 8 = 0"}
        answers: ["sha256:3704ee3941918368e6cb23af6a901a12f7f9ce1f2ad028028e691a0ef22e3b29"]
  - id: simetrico-respecto-de-plano
    tier: 2
    prompt: |
      Halla el simétrico del punto ${{P}}$ respecto del plano ${{p}}$. Respuesta: `x;y;z`.
    variants:
      - values: {"P":"(3, 1, 2)","p":"x + y + z - 3 = 0"}
        answers: ["sha256:60c27b23834cff9d3a0357a63751e2337d3b682e5430bffc0380a2c6d23cea4f"]
      - values: {"P":"(-1, 2, 2)","p":"2x + z - 5 = 0"}
        answers: ["sha256:92719c22ddc7b058ee730e26d8269b8e94582f3caa22da84f9ecbbe350b28eeb"]
      - values: {"P":"(0, 4, 4)","p":"3y + 4z - 3 = 0"}
        answers: ["sha256:74eeb86d3e9144e1f498dfb662d75d166e09f60097a0502f874ef864bf36a1e8"]
      - values: {"P":"(3, -1, 6)","p":"x - y + 2z - 4 = 0"}
        answers: ["sha256:31153053b674431b6ed572211a8c83adb34663bc2aa65a551e99b010a8d4551f"]
      - values: {"P":"(3, -2, 2)","p":"x + 2y - 2z - 4 = 0"}
        answers: ["sha256:1be9621af3e61edae4a42de70880f41ec00cb8925e32503782ca3b47ef8d335d"]
      - values: {"P":"(2, 1, 3)","p":"2x + y + 2z - 2 = 0"}
        answers: ["sha256:326ed9043eeceb2b2c57f99b7e29adf2c764fdd25d000bbf8503671240511779"]
  - id: proyeccion-sobre-recta
    tier: 3
    prompt: |
      Halla la proyección ortogonal del punto ${{P}}$ sobre la recta que pasa por ${{A}}$ con director ${{v}}$. Respuesta: `x;y;z`.
    variants:
      - values: {"P":"(4, 1, 0)","A":"(1, 0, 0)","v":"(1, 1, 0)"}
        answers: ["sha256:d932b833cce033ba7c5810454388acf276843c55811f23d3db3d33fe38b604d0"]
      - values: {"P":"(-1, 0, -2)","A":"(0, 1, 1)","v":"(2, 1, 2)"}
        answers: ["sha256:46c89829ca9a4e303a4f53054662541c6f9fe505e2a11ec8db17c1a171b58562"]
      - values: {"P":"(3, 5, 3)","A":"(2, 2, 2)","v":"(1, 0, 1)"}
        answers: ["sha256:92014cf8f1f8a55351c976f13242acaf6d72ff901a91e56aa44a54931a70bfb8"]
      - values: {"P":"(3, 5, 1)","A":"(1, 2, 0)","v":"(0, 1, 1)"}
        answers: ["sha256:93c014d3ca7480cb670dce07ae3c06ca42e4626107b6ed1ce9dfbc2ce6c5b9d6"]
      - values: {"P":"(1, -3, 1)","A":"(0, 0, 3)","v":"(1, 2, 2)"}
        answers: ["sha256:f40285e0039bc1d4ac672cf7a2e10ab397fdd38e8a0722bae0e87c14c39fdb04"]
      - values: {"P":"(5, 0, 3)","A":"(3, 1, 1)","v":"(1, 1, 1)"}
        answers: ["sha256:25d810bed25d359e92d706096a9520a0356ea99ab7ad2c39ff0504c520a1b75e"]
  - id: plano-perpendicular-a-recta
    tier: 1
    type: numero
    sig: 10
    prompt: |
      El plano perpendicular a la recta de director ${{v}}$ que pasa por ${{P}}$ tiene ecuación $Ax + By + Cz + D = 0$ con $(A, B, C) = {{v}}$. ¿Cuánto vale $D$?
    variants:
      - values: {"v":"(1, 2, -1)","P":"(3, 0, 2)"}
        answers: ["sha256:9bc76ad3d6283fc6061efbd06675ff297d217956123e5cdd3013a20e4a0c694f","sha256:de058592f230c80e3766a352eb48c68d337d9c2961ce94e2f1cc1164429600f1","sha256:1d99aa0c0aee1008a1b06c85d19d56cf442509013402cdea94838d89698f5530"]
      - values: {"v":"(2, 1, 1)","P":"(1, -1, 0)"}
        answers: ["sha256:9155f8250afe53fca37d942626c20d94c802dad9198044289ab7b46675205b6b","sha256:c131e47c0d2525340628d45db9a441977d68d4cc99dcf53d796c7efef15a9f47","sha256:e459add4d7967501d3b6f5e82abaa3f34518175a9bab32f6b2a4c6d2f83840bb"]
      - values: {"v":"(0, 3, 4)","P":"(5, 1, 2)"}
        answers: ["sha256:706d908d7f5910e7b73c5e3ed2611b289acdc571761308d36fbdd800e4882ed0","sha256:6404063af499cffefe76c0aa5a7482001d298d509043ba4259267876c97f8341","sha256:dd2f090cd93b593e3b2b73b66abf2416211af45186b851dfb2086ee491d97ccc"]
      - values: {"v":"(1, 1, 1)","P":"(-2, 4, 1)"}
        answers: ["sha256:8da6e9e9229d7ded844ecdd711795f6b2b500dd71fcc29b995d5541a5f572fab","sha256:6b13a9322d74dbc3bf56bd3febdfd93c49ae5ad454464acd915a7bf6f8689217","sha256:ab06e13eb8cd300fc03dfb431cf4b49d44fc538c705a7adcf6ac1109ebe948bc"]
      - values: {"v":"(4, -1, 2)","P":"(0, 0, 3)"}
        answers: ["sha256:2c02919dd49cd22c12dc96e1c666759c6f2aa83383ce35255aac283204cf5a75","sha256:b586d5f1fb3fe3b35bf0d780ea013a1e1623ad78a323f7ce2fb28a9c46027f40","sha256:e16d7da5c13e2995e1538a2c86fb4d3b7872d93e13e56856ee0460ffef83bf2b"]
      - values: {"v":"(3, 2, 1)","P":"(1, 1, -2)"}
        answers: ["sha256:dcf1f2e0576b55b508fe429b0511bdf7b8383a3af96576b8ec3014191813dd8b","sha256:98546b8209ad4d9843b197cef42f000aa4b5b3bd01aa6ea8a6224ca2e99e15b0","sha256:028e963c3829f00b7dc0242b3fc2df9db2848fadb3942d25286ce26c8897b3bc"]
  - id: distancias-con-vectores
    tier: 3
    type: desarrollo
    prompt: |
      **Desarrollo.** (a) Deduce la fórmula de la distancia de un punto $P_0$ al plano $Ax + By + Cz + D = 0$ proyectando un vector sobre la normal. (b) Explica por qué la
      distancia de un punto a una recta es $\frac{|\overrightarrow{AP} \times \vec v|}{|\vec v|}$ usando el área de un paralelogramo. (c) Explica por qué la distancia entre dos rectas que se cruzan es
      $\frac{|[\overrightarrow{AB}, \vec u, \vec v]|}{|\vec u \times \vec v|}$ usando el volumen de un paralelepípedo.
    sealed: "gz64:H4sIAAAAAAACCp1Ty27bMBD8lYHAg+MqbpKjAR8c+1TkYCDHMDFoapMSkEmHD7eOpY/JB/TUT/CPFaSkNE5ltOhFFMnh7M7s7j5zpgxeGZ2Ns+FwIM6GQ9wqsMXykoGcP7yCNKjEphTa5CgFCuW80FIJkIv70ugn5UOBguJ2Y82OpFSHnzqeMM7NlqxVT1+9sNZ82y+Wl4vlRc3gzMomwJYkNCYYTHNc55idsTFYgQk4f7RC7qsOwrksjMcpyqp+g1Y1G2Fm1uY3f/t4sbzEBOdzlnPN/pEYE0y/Ly/wCde7tMxe0jJnOXbHqfbjqnrPuXu2fj99uIrX6Tt7uKprNuKa6+FwsIre3xiHLUlvLLke76aLmsWITd5bhkdj10IjaGyEFSWV5smKtYnOH14tCbCqjwSce7Umh5aoYiPcBqyEo1hVVr2dYwcXIEofrPhQ/ljdBYOIp5akF+MWh0kb/HNi7ATKKLBH03XN8k5S+Is82hx+bKhIAremDGvSYNVdH2neigvdz/a+Yjlk2IlG6CC29UfXevM4g1ek31uaMH0u3ojOLK67BBsb8nZe3s2P9pZQGofCuGbC3FtGDs+BII1OoTUEpChao/N0d4JOuAbkRlme2bCySmbju30mrfJklcnG2ZyKIOn49SZob85TEjHqx1FuhrUU0LEkZeROL1w2vqrzI/YvwXn1qKToC5BSg4yT2TZLQX+073+wN+Ib4ckdR5A2vAh9OljXTMfh7utffunrZxYFAAA="
  - id: r-angulo-recta-plano
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué razón trigonométrica da directamente el ángulo entre una recta y un plano a partir de $\frac{|\vec n \cdot \vec v|}{|\vec n||\vec v|}$?
    options:
      - |
        El coseno del ángulo entre director y normal
      - |
        El seno, porque es el complementario del ángulo entre director y normal
      - |
        La tangente
      - |
        Siempre $90^\circ$
    answers: ["sha256:3b9c76a8131456a16502f04fc71c583c0bc97677cc607bcb81612c681937b4c9"]
  - id: r-planos-perpendiculares
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo son perpendiculares dos planos?
    options:
      - |
        Si sus normales son paralelas
      - |
        Si tienen el mismo término independiente
      - |
        Si el producto escalar de sus normales es $0$
      - |
        Nunca
    answers: ["sha256:2fe9f67e034dd7c36cc70804c70fa0bf91a3526f4de674ce6e2a47c61935e026"]
  - id: r-distancia-origen
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿A qué distancia del origen está el plano $2x + y - 2z - 9 = 0$?
    answers: ["sha256:5591a266b933c84ab009e534f3d499621b6350c9522e0d005e9821d2c7d88d52","sha256:7072b0b0c657f40ea7c35f538af7af8cce70aacd6b702c54602b5c370fa16b9c","sha256:67b3a5b2db54d43ffb697d5896e1cfe1b114f0601ba442d0d94392f3bbb24017"]
  - id: r-simetrico-punto
    tier: 1
    review: true
    prompt: |
      ¿Cuál es el simétrico de $(1, 1, 1)$ respecto del punto $(2, 3, 0)$? Respuesta: `x;y;z`.
    answers: ["sha256:6ad30e1681b6322946833a386f6332e4b457c56ba9729c0b1a98b51e2aae6149"]
  - id: r-recta-perpendicular-plano
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué vector director tiene una recta perpendicular a un plano?
    options:
      - |
        El vector normal del plano
      - |
        Cualquier vector del plano
      - |
        El vector $(1, 1, 1)$
      - |
        El producto vectorial de dos normales
    answers: ["sha256:43f6dd54fc3a3778bd5235b4a5ab068b35e1019374b0a7be91d4644f86b1578c"]
  - id: r-distancia-paralela
    tier: 2
    type: opcion
    review: true
    prompt: |
      Si una recta es paralela a un plano, ¿cómo se calcula la distancia entre ellos?
    options:
      - |
        Es $0$
      - |
        No se puede calcular
      - |
        Es la de dos puntos cualesquiera
      - |
        Es la de cualquier punto de la recta al plano
    answers: ["sha256:93e9e62c475ff36891241976d35a55806cbe392eea71ce3fe8ed3eb768fbb0f1"]
  - id: r-paralelas-rectas
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo se calcula la distancia entre dos rectas paralelas?
    options:
      - |
        Con el producto mixto
      - |
        Como la distancia de un punto de una a la otra recta
      - |
        Es $0$
      - |
        Con el ángulo
    answers: ["sha256:80693a971a6ebbad03377def8e2b3615083d14b883c559d9812023c5017c661d"]
---

# Geometría métrica en el espacio: ángulos entre rectas y planos, proyecciones ortogonales, simétricos y distancias

Una vez colocadas rectas y planos en el espacio ([[mat-rectas-planos-espacio]]), toca **medir**: qué ángulo forma una rampa con el suelo, a qué distancia
pasa un cable de una pared, dónde cae la sombra perpendicular de un punto, cuál es la menor separación entre dos tuberías que se cruzan. Todas estas
medidas se calculan con los productos escalar, vectorial y mixto. Este nodo cierra la geometría del espacio de Bachillerato y prepara la geometría
y el cálculo en varias variables.

## Objetivos

Al terminar sabrás:

1. Calcular ángulos entre dos rectas, entre una recta y un plano, y entre dos planos.
2. Calcular la proyección ortogonal de un punto sobre un plano o una recta.
3. Calcular puntos simétricos respecto de un punto, una recta o un plano.
4. Calcular distancias entre puntos, de un punto a una recta o a un plano, entre planos paralelos y entre rectas que se cruzan.

## Qué debes dominar antes

[[mat-rectas-planos-espacio]] (ecuaciones y posiciones relativas) y los productos de [[mat-vectores-espacio]].

> [!question] Test de entrada
> 1. Vector normal del plano $x - 2y + 3z = 7$.
> 2. Producto escalar de $(1, 0, 1)$ y $(0, 1, 1)$.
> 3. Módulo de $(2, 3, 6)$.
>
> Respuestas: $(1, -2, 3)$; $1$; $7$.

## 1. Para qué sirve

- **Construcción y diseño**: inclinación de cubiertas y rampas, holguras entre conductos.
- **Robótica y CAD**: distancias de seguridad, detección de colisiones, proyecciones ([[rob-cinematica]]).
- **Física**: reflexión en espejos planos (el simétrico de un punto respecto de un plano), componentes perpendiculares.
- **Gráficos 3D**: sombras y proyecciones ortogonales.

## 2. Ángulos

> [!practico]
> El ángulo entre dos planos es el que formarían sus «perpendiculares». El de una recta con un plano se mide con la sombra de la recta sobre el
> plano: es el complementario del ángulo que forma con la normal. Por eso en un caso se usa el coseno y en el otro el seno.

- **Dos rectas** (directores $\vec u$, $\vec v$): $\cos\alpha = \dfrac{|\vec u \cdot \vec v|}{|\vec u||\vec v|}$ (el agudo).
- **Dos planos** (normales $\vec n_1$, $\vec n_2$): $\cos\alpha = \dfrac{|\vec n_1 \cdot \vec n_2|}{|\vec n_1||\vec n_2|}$. *Ejemplo:* $x + y = 0$ e $y + z = 0$ forman $60^\circ$.
- **Recta y plano** (director $\vec v$, normal $\vec n$): $\operatorname{sen}\alpha = \dfrac{|\vec n \cdot \vec v|}{|\vec n||\vec v|}$.
- **Paralelismo y perpendicularidad**: planos perpendiculares si $\vec n_1 \cdot \vec n_2 = 0$; recta perpendicular a un plano si $\vec v \parallel \vec n$; recta paralela a un plano si $\vec v \cdot \vec n = 0$.

## 3. Proyecciones ortogonales y simétricos

- **Proyección de $P$ sobre un plano**: se traza la recta por $P$ con director el normal $\vec n$, y se corta con el plano; el punto de corte $H$ es la proyección.
- **Proyección de $P$ sobre una recta** ($A$, $\vec v$): $H = A + t\vec v$ con $t = \dfrac{\overrightarrow{AP} \cdot \vec v}{\vec v \cdot \vec v}$ (o cortando la recta con el plano perpendicular a ella por $P$).
- **Simétrico** de $P$ respecto de un punto $M$: $P' = 2M - P$. Respecto de un plano o una recta: $P' = 2H - P$, con $H$ la proyección.

## 4. Distancias

- **Entre dos puntos**: el módulo del vector que los une.
- **De un punto a un plano**:
  $$
  d(P_0, \pi) = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}} .
  $$
  *Ejemplo:* de $(1, 2, 3)$ a $2x - y + 2z - 3 = 0$: $\frac{|2 - 2 + 6 - 3|}{3} = 1$.
- **De un punto a una recta** (por $A$, director $\vec v$): $d = \dfrac{|\overrightarrow{AP} \times \vec v|}{|\vec v|}$.
- **Entre planos paralelos** $Ax + By + Cz + D = 0$ y $Ax + By + Cz + D' = 0$: $\dfrac{|D - D'|}{\sqrt{A^2 + B^2 + C^2}}$; entre una recta y un plano paralelos, o entre rectas paralelas: la de un punto
  de una al otro elemento.
- **Entre dos rectas que se cruzan**: $d = \dfrac{|[\overrightarrow{AB}, \vec u, \vec v]|}{|\vec u \times \vec v|}$. Se alcanza en la **perpendicular común**.

> [!formal] Con rigor: las fórmulas son alturas
> Las tres fórmulas son «altura = medida / base». La del plano proyecta $\overrightarrow{P_1P_0}$ sobre la normal unitaria. La de la recta es la altura del paralelogramo de lados
> $\overrightarrow{AP}$ y $\vec v$: área $|\overrightarrow{AP} \times \vec v|$ entre base $|\vec v|$. La de dos rectas que se cruzan es la altura del paralelepípedo de aristas $\overrightarrow{AB}$, $\vec u$, $\vec v$: volumen
> $|[\overrightarrow{AB}, \vec u, \vec v]|$ entre el área de la base $|\vec u \times \vec v|$; esa altura es la distancia entre los planos paralelos que contienen a cada recta. $\blacksquare$

## 5. Errores típicos

- Usar el coseno en el ángulo entre recta y plano (es el seno, o $90^\circ$ menos el ángulo con la normal).
- Olvidar el valor absoluto y dar ángulos obtusos o distancias negativas.
- Calcular la distancia entre rectas con la fórmula de las que se cruzan cuando son paralelas (el denominador sería $0$).
- En el simétrico, dar la proyección en lugar de $2H - P$.
- Olvidar dividir por el módulo del vector normal.

## 6. Resumen

- Ángulos: rectas y planos con el coseno; recta-plano con el seno.
- Proyecciones: perpendicular y corte; $t = \frac{\overrightarrow{AP}\cdot\vec v}{\vec v\cdot\vec v}$ sobre una recta. Simétricos: $2H - P$.
- Distancias: punto-plano, punto-recta (producto vectorial), planos paralelos, rectas que se cruzan (producto mixto).

## Repaso: lo que debe quedarte dentro de un mes

1. Por qué el ángulo recta-plano se calcula con el seno.
2. La fórmula de la distancia de un punto a un plano.
3. Cómo se calcula la proyección de un punto sobre un plano y su simétrico.
4. La distancia de un punto a una recta como altura de un paralelogramo.
5. La distancia entre dos rectas que se cruzan.

## Siguiente

[[mat-geometria-espacio]] repasa el bloque; después, las distribuciones con el tema `mat-distribucion-binomial`.
