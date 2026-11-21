---
id: prog-terminal-linux-git
title: "Terminal de Linux y Git: el taller del programador"
area: bajo-nivel
trunk_level: 2
prerequisites: [prog-pensamiento-computacional]
academic_sources:
  - "Shotts, W. The Linux Command Line, 2ª ed. No Starch Press, 2019, partes 1 (caps. 1-11: navegación, archivos, redirección, permisos, procesos) y 4 (caps. 24-36: scripts de shell). Gratuito en https://linuxcommand.org/tlcl.php"
  - "Chacon, S.; Straub, B. Pro Git, 2ª ed. Apress, 2014, caps. 2 (fundamentos de Git), 3 (ramas) y 7.7 (reset desmitificado). En español y gratuito en https://git-scm.com/book/es/v2"
  - "The Open Group. POSIX.1-2017 (IEEE Std 1003.1): Shell & Utilities."
  - "GNU Project. GNU Coreutils manual y Bash Reference Manual (gnu.org/software)."
hints:
  - "Concepto: en Unix cada herramienta hace una cosa y se combinan con tuberías (la salida de una es la entrada de la siguiente). Para predecir una tubería, ejecútala a mano paso a paso, mirando la salida de cada etapa. Los permisos son tres bits (r=4, w=2, x=1) para dueño, grupo y otros; el umask quita bits a 666 (archivos) o a 777 (directorios)."
  - "Herramienta: `man comando` y `comando --help` dan la documentación; prueba siempre en un directorio desechable (mkdir /tmp/prueba) y, para comandos peligrosos como rm, usa antes `ls` o `echo` con el mismo patrón. En Git, `git log --oneline --graph --all` dibuja el historial y `git reflog` es la red de seguridad cuando algo sale mal."
  - "Documentación oficial: man bash (secciones de redirecciones y expansión), man 7 regex, man chmod, man find; git-scm.com/docs (referencia de cada comando) y git-scm.com/book (Pro Git: capítulos 1 a 3, ramas y fusión)."
exercises:
  - id: peticiones-404
    tier: 1
    type: numero
    sig: 6
    prompt: |
      El archivo `acceso.log` (columnas: IP, método, ruta, código de respuesta, bytes) contiene:

      {{log}}

      ¿Qué número imprime `grep -c ' 404 ' acceso.log`?
    variants:
      - values: {"log":"```\n192.168.1.21 GET /p0.html 301 647\n192.168.1.21 GET /p1.html 500 584\n192.168.1.20 GET /p2.html 301 646\n10.0.0.7 GET /p3.html 200 859\n10.0.0.7 GET /p4.html 404 713\n192.168.1.20 GET /p5.html 200 348\n10.0.0.7 GET /p6.html 200 624\n192.168.1.20 GET /p0.html 301 618\n10.0.0.7 GET /p1.html 500 824\n10.0.0.9 GET /p2.html 200 660\n192.168.1.20 GET /p3.html 200 766\n172.16.0.3 GET /p4.html 200 231\n10.0.0.9 GET /p5.html 200 598\n192.168.1.21 GET /p6.html 500 228\n10.0.0.5 GET /p0.html 404 446\n192.168.1.20 GET /p1.html 200 857\n10.0.0.7 GET /p2.html 301 343\n10.0.0.7 GET /p3.html 404 180\n192.168.1.21 GET /p4.html 200 500\n192.168.1.21 GET /p5.html 500 485\n10.0.0.7 GET /p6.html 200 143\n10.0.0.9 GET /p0.html 200 783\n192.168.1.20 GET /p1.html 301 413\n10.0.0.5 GET /p2.html 200 206\n```"}
        answers: ["sha256:f89c43ff726cbe06bae7f132c57828933c1ae576340b9b264a87b3b71611abc2","sha256:42bd3a4b5e7a53779728a08ef6305e81e264ae8278cf61ed3c9036fa66a1cf00","sha256:1e62acdfe0df70a73aaf2f93f9fb631fd96ee90ccb8bc460166e1d8bcdc41208"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 200 302\n192.168.1.20 GET /p1.html 200 907\n10.0.0.7 GET /p2.html 404 770\n192.168.1.20 GET /p3.html 200 220\n192.168.1.20 GET /p4.html 200 238\n192.168.1.21 GET /p5.html 200 605\n10.0.0.5 GET /p6.html 301 797\n192.168.1.20 GET /p0.html 301 480\n192.168.1.20 GET /p1.html 200 666\n10.0.0.7 GET /p2.html 200 336\n10.0.0.5 GET /p3.html 200 365\n192.168.1.20 GET /p4.html 200 366\n192.168.1.20 GET /p5.html 200 439\n192.168.1.20 GET /p6.html 200 488\n192.168.1.20 GET /p0.html 404 657\n192.168.1.20 GET /p1.html 200 574\n192.168.1.20 GET /p2.html 404 279\n10.0.0.7 GET /p3.html 404 509\n172.16.0.3 GET /p4.html 200 274\n192.168.1.20 GET /p5.html 200 748\n192.168.1.21 GET /p6.html 301 891\n192.168.1.20 GET /p0.html 200 780\n192.168.1.20 GET /p1.html 200 411\n10.0.0.5 GET /p2.html 200 890\n10.0.0.7 GET /p3.html 200 107\n192.168.1.21 GET /p4.html 301 426\n```"}
        answers: ["sha256:83d7364b4e6590d1bb1da935748ddbd0ac4c3f127be9001fac4287dae17eab7d","sha256:874e72d1e75d593218997733fc347a4b7d4144653ede0e8692da52984f1edd9d","sha256:48a6364a3958ec5f41a93a32f06a7152742d7cc5cd61cda8d04159c0f84fdb4f"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 404 658\n192.168.1.20 GET /p1.html 200 837\n192.168.1.20 GET /p2.html 301 811\n172.16.0.3 GET /p3.html 200 827\n192.168.1.20 GET /p4.html 404 870\n192.168.1.21 GET /p5.html 301 214\n192.168.1.20 GET /p6.html 200 854\n192.168.1.20 GET /p0.html 404 606\n192.168.1.21 GET /p1.html 301 849\n10.0.0.9 GET /p2.html 200 714\n10.0.0.5 GET /p3.html 404 421\n172.16.0.3 GET /p4.html 500 592\n192.168.1.21 GET /p5.html 200 467\n192.168.1.20 GET /p6.html 301 855\n192.168.1.20 GET /p0.html 500 899\n172.16.0.3 GET /p1.html 301 899\n10.0.0.7 GET /p2.html 200 177\n10.0.0.7 GET /p3.html 200 671\n10.0.0.7 GET /p4.html 200 479\n10.0.0.5 GET /p5.html 404 886\n10.0.0.9 GET /p6.html 404 848\n172.16.0.3 GET /p0.html 200 604\n10.0.0.9 GET /p1.html 500 891\n192.168.1.20 GET /p2.html 200 117\n10.0.0.5 GET /p3.html 500 724\n10.0.0.9 GET /p4.html 200 962\n10.0.0.5 GET /p5.html 500 290\n10.0.0.7 GET /p6.html 200 573\n```"}
        answers: ["sha256:52ee27b79659be161033675626166f2a2ede700b056ae57ca165e9e4e64f8ae2","sha256:9c322dd32512418150f397625141a10de4ade3da5dbe0be1bbb4c599bc018675","sha256:1bc945d7adfc9fe0dfa75234a25b76e411655f5086163883ece7c8bb0c45ceb1"]
      - values: {"log":"```\n10.0.0.5 GET /p0.html 200 174\n10.0.0.5 GET /p1.html 301 545\n192.168.1.21 GET /p2.html 200 644\n10.0.0.9 GET /p3.html 200 110\n172.16.0.3 GET /p4.html 500 849\n192.168.1.20 GET /p5.html 200 660\n192.168.1.21 GET /p6.html 301 547\n192.168.1.20 GET /p0.html 500 175\n10.0.0.7 GET /p1.html 500 471\n172.16.0.3 GET /p2.html 200 640\n192.168.1.20 GET /p3.html 200 494\n10.0.0.7 GET /p4.html 200 106\n10.0.0.5 GET /p5.html 200 613\n10.0.0.7 GET /p6.html 200 658\n192.168.1.20 GET /p0.html 404 891\n172.16.0.3 GET /p1.html 200 526\n10.0.0.9 GET /p2.html 200 764\n192.168.1.20 GET /p3.html 301 808\n10.0.0.7 GET /p4.html 200 865\n192.168.1.20 GET /p5.html 200 269\n10.0.0.5 GET /p6.html 200 128\n192.168.1.20 GET /p0.html 500 983\n192.168.1.20 GET /p1.html 404 660\n192.168.1.20 GET /p2.html 301 760\n10.0.0.5 GET /p3.html 200 888\n192.168.1.21 GET /p4.html 301 234\n192.168.1.20 GET /p5.html 404 604\n192.168.1.20 GET /p6.html 200 894\n192.168.1.20 GET /p0.html 200 692\n10.0.0.5 GET /p1.html 404 282\n```"}
        answers: ["sha256:301177ac27e2ef69e608e258af3a5680316bc1fc85331faf34a7573b580d2d83","sha256:c0ac602891b1c76a2c38e3b400be36d05a4c5acebcd6aa4c97f3e9e18f40d12b","sha256:fbc1ab94efaf01172ab03e13e2d54503ac4a318daebec9054dbe6e26977fb41b"]
      - values: {"log":"```\n10.0.0.7 GET /p0.html 500 736\n10.0.0.9 GET /p1.html 200 298\n10.0.0.7 GET /p2.html 200 558\n192.168.1.20 GET /p3.html 301 445\n10.0.0.7 GET /p4.html 200 679\n10.0.0.7 GET /p5.html 200 171\n192.168.1.20 GET /p6.html 200 400\n10.0.0.5 GET /p0.html 200 853\n10.0.0.7 GET /p1.html 404 312\n192.168.1.20 GET /p2.html 200 121\n10.0.0.9 GET /p3.html 301 471\n192.168.1.20 GET /p4.html 200 944\n10.0.0.9 GET /p5.html 200 747\n192.168.1.21 GET /p6.html 200 996\n10.0.0.7 GET /p0.html 301 901\n10.0.0.7 GET /p1.html 200 782\n192.168.1.20 GET /p2.html 500 766\n192.168.1.20 GET /p3.html 200 468\n10.0.0.7 GET /p4.html 500 507\n10.0.0.7 GET /p5.html 200 157\n192.168.1.21 GET /p6.html 404 510\n10.0.0.7 GET /p0.html 200 429\n192.168.1.20 GET /p1.html 301 833\n192.168.1.20 GET /p2.html 404 716\n192.168.1.21 GET /p3.html 200 484\n10.0.0.9 GET /p4.html 404 844\n192.168.1.20 GET /p5.html 200 343\n10.0.0.7 GET /p6.html 200 837\n172.16.0.3 GET /p0.html 200 903\n172.16.0.3 GET /p1.html 200 755\n192.168.1.20 GET /p2.html 200 774\n10.0.0.9 GET /p3.html 301 861\n```"}
        answers: ["sha256:bb0a89f0b784b91d51b879474ae1a74167ce34707ef2480d500bc5e98271c3f1","sha256:00a852ff52f87fef368cb058a3fd4334dcbec56abd1721566f6616d31845fd30","sha256:bcfd5d1f81c5edbb5356ac33f4f129924d891cb184c17507bd9a0931195416e8"]
      - values: {"log":"```\n192.168.1.20 GET /p0.html 200 301\n10.0.0.9 GET /p1.html 301 877\n192.168.1.20 GET /p2.html 200 596\n192.168.1.20 GET /p3.html 200 115\n172.16.0.3 GET /p4.html 301 419\n10.0.0.5 GET /p5.html 500 436\n192.168.1.21 GET /p6.html 500 253\n192.168.1.20 GET /p0.html 404 799\n192.168.1.20 GET /p1.html 200 145\n10.0.0.7 GET /p2.html 200 494\n192.168.1.21 GET /p3.html 200 327\n192.168.1.20 GET /p4.html 200 369\n192.168.1.21 GET /p5.html 500 704\n172.16.0.3 GET /p6.html 404 233\n192.168.1.21 GET /p0.html 404 606\n10.0.0.7 GET /p1.html 301 839\n10.0.0.7 GET /p2.html 200 328\n192.168.1.20 GET /p3.html 200 874\n192.168.1.20 GET /p4.html 200 285\n10.0.0.5 GET /p5.html 500 854\n10.0.0.7 GET /p6.html 200 873\n192.168.1.21 GET /p0.html 200 486\n10.0.0.7 GET /p1.html 500 237\n10.0.0.7 GET /p2.html 200 335\n192.168.1.20 GET /p3.html 200 736\n192.168.1.20 GET /p4.html 200 309\n192.168.1.20 GET /p5.html 200 739\n10.0.0.5 GET /p6.html 500 617\n192.168.1.21 GET /p0.html 200 465\n10.0.0.5 GET /p1.html 200 595\n192.168.1.20 GET /p2.html 200 213\n172.16.0.3 GET /p3.html 200 450\n192.168.1.20 GET /p4.html 200 521\n192.168.1.20 GET /p5.html 200 586\n```"}
        answers: ["sha256:ee679d9e53eda57feecff098a14072b840ebc601543d255ab29b7b2b6d495d5d","sha256:aae15d600722886bf2ec0835a9a626f891d4d8983bb4b7acea878bb225fd7e28","sha256:03e7a32cf42564b149c3a67a3fcd1877da6f775ec097e216a090e54c408a98b8"]
  - id: permisos-640
    tier: 1
    prompt: |
      Tras ejecutar `chmod {{o}} fichero`, ¿cuáles son los **nueve caracteres de permisos** que muestra `ls -l` (sin el primer carácter del
      tipo de archivo)? Respuesta: nueve caracteres.
    variants:
      - values: {"o":654}
        answers: ["sha256:c6d6c3ce0478996ec2ed67d10805f83debbc7dff0996902a8b77631f42ba336d"]
      - values: {"o":755}
        answers: ["sha256:f233735b02684037e3cf83c768929b81401b06df7325829a64297c58166e37a2"]
      - values: {"o":600}
        answers: ["sha256:799d8c39e9c38a8c2ba17c65cea85e3ed87499203afe3aacd0f6d495e0f28876"]
      - values: {"o":711}
        answers: ["sha256:183babf8f26079fae729c20b9820e488a01f19bda72b1279453b9d14bb3e6078"]
      - values: {"o":444}
        answers: ["sha256:c9d285cfbf733426ee0907d93bf46d9db2ce8cd38fa3ad3ccdebddadc8506b95"]
      - values: {"o":750}
        answers: ["sha256:227aeaa46268b1bd762594ac26adf040f6b50133ebb0ad4ad04a4f0840fde4b8"]
  - id: aritmetica-en-bash
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Qué imprime `echo $(({{b}}**{{e}} % {{m}} + {{s}}))` en bash?
    variants:
      - values: {"b":2,"e":12,"m":1000,"s":5}
        answers: ["sha256:93e67f3524ec3fdff57fa1020ec85171458185181d84e7d7ee48a4e9e52f4d10","sha256:253324e36c50116c720621b6461366e16620ccce2af755ea01bdb6dc30384e37","sha256:b35f4eb9e448c55c706f6f8fab081351d6dedc8ec7404c159c6d50a9594a0216"]
      - values: {"b":3,"e":7,"m":100,"s":1}
        answers: ["sha256:a1e1a0d820f2f08620939fbde98e59c0795dc07504a67245071827f43fd1e0ca","sha256:63ba098da979970d3b9d2b3a5d53cfb6b82c0da0f45dbff756158edb20679d2a","sha256:7d1665764c148f74b7fb4ef885e13c4e9ec5dcc6379da7ab06eb7467cda28828"]
      - values: {"b":5,"e":4,"m":7,"s":6}
        answers: ["sha256:d3702dc18d37b9b96585aefaf1927546388d9a48d81515ca4b980e6c68e6df6d","sha256:13d9a7c63e633019500d6091926896438cc15777b89a5a647fe07a63410c3847","sha256:c2ef7adced88fda805591e59c660cbb6965e0fa358c4583d19d748c5872bd337"]
      - values: {"b":2,"e":16,"m":1000,"s":0}
        answers: ["sha256:142ad0f8ade09f6479b65768e0ec3153207772445068845aec173c8c11494279","sha256:fd3d2c17d0dadce570b61b2037c1ad770872d36dbc85bec6a6325d0e0b6d7458","sha256:9b48c36ba307e08237be9d132a2f5c29672699f3db13f909251a7224e5f66174"]
      - values: {"b":7,"e":3,"m":50,"s":9}
        answers: ["sha256:dc9f093893a3171b64acebfb2ff16275d30effc696b52cfe8a4ee5b5f329da46","sha256:c4548ad173ff1320d2732af03f18f2bb5d40311a245b0bcdf85166310e77f14d","sha256:5ddfbd00566b3c913f4374e123f1656d4bc15e0d97192c42c0b2551e561e9c3e"]
      - values: {"b":10,"e":5,"m":999,"s":4}
        answers: ["sha256:5d0783c263a799b6f5c032c64706d80d46f562be1b37ba0660941a2bb0ee4b8d","sha256:3fa34b0a70d12811dc311d7a5fd3f7f014fcb0fffb7e3322a883c21c95a77139","sha256:cb8a4862159c13cd46c4d4a1a05069f93f2860f9b0fcda52fd8de457ffc1ae9a"]
  - id: ips-distintas
    tier: 2
    type: numero
    sig: 6
    prompt: |
      El archivo `acceso.log` (columnas: IP, método, ruta, código de respuesta, bytes) contiene:

      {{log}}

      ¿Qué número imprime `cut -d' ' -f1 acceso.log | sort -u | wc -l`?
    variants:
      - values: {"log":"```\n192.168.1.21 GET /p0.html 301 647\n192.168.1.21 GET /p1.html 500 584\n192.168.1.20 GET /p2.html 301 646\n10.0.0.7 GET /p3.html 200 859\n10.0.0.7 GET /p4.html 404 713\n192.168.1.20 GET /p5.html 200 348\n10.0.0.7 GET /p6.html 200 624\n192.168.1.20 GET /p0.html 301 618\n10.0.0.7 GET /p1.html 500 824\n10.0.0.9 GET /p2.html 200 660\n192.168.1.20 GET /p3.html 200 766\n172.16.0.3 GET /p4.html 200 231\n10.0.0.9 GET /p5.html 200 598\n192.168.1.21 GET /p6.html 500 228\n10.0.0.5 GET /p0.html 404 446\n192.168.1.20 GET /p1.html 200 857\n10.0.0.7 GET /p2.html 301 343\n10.0.0.7 GET /p3.html 404 180\n192.168.1.21 GET /p4.html 200 500\n192.168.1.21 GET /p5.html 500 485\n10.0.0.7 GET /p6.html 200 143\n10.0.0.9 GET /p0.html 200 783\n192.168.1.20 GET /p1.html 301 413\n10.0.0.5 GET /p2.html 200 206\n```"}
        answers: ["sha256:942389e1fcae3e29a747a29cf6d70a808dcad99ae89a203293ae31cfbfb1b476","sha256:fa63ad60cada57e4ba9bb330bdcdffa3cde6f4d50d8e7786867c8f4aa2f690d7","sha256:2663bbca3d3ee98f40da429fa63e1ddcaa84fb4fd29e637fe76b4a4f85d66a5c"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 200 302\n192.168.1.20 GET /p1.html 200 907\n10.0.0.7 GET /p2.html 404 770\n192.168.1.20 GET /p3.html 200 220\n192.168.1.20 GET /p4.html 200 238\n192.168.1.21 GET /p5.html 200 605\n10.0.0.5 GET /p6.html 301 797\n192.168.1.20 GET /p0.html 301 480\n192.168.1.20 GET /p1.html 200 666\n10.0.0.7 GET /p2.html 200 336\n10.0.0.5 GET /p3.html 200 365\n192.168.1.20 GET /p4.html 200 366\n192.168.1.20 GET /p5.html 200 439\n192.168.1.20 GET /p6.html 200 488\n192.168.1.20 GET /p0.html 404 657\n192.168.1.20 GET /p1.html 200 574\n192.168.1.20 GET /p2.html 404 279\n10.0.0.7 GET /p3.html 404 509\n172.16.0.3 GET /p4.html 200 274\n192.168.1.20 GET /p5.html 200 748\n192.168.1.21 GET /p6.html 301 891\n192.168.1.20 GET /p0.html 200 780\n192.168.1.20 GET /p1.html 200 411\n10.0.0.5 GET /p2.html 200 890\n10.0.0.7 GET /p3.html 200 107\n192.168.1.21 GET /p4.html 301 426\n```"}
        answers: ["sha256:bc75c944b957f5fc063d6113b53fb510ce229aa5c74c6fbf2a7f28dac4528e97","sha256:c00dc8b3d92da44655d2ac8f94fbbf004f25d0b73d74a43a33b6cbf4ca9ee482","sha256:a13bcff6536a2551d3535a363adccd8474fc3ccc639c13e76bdc77f89a88565e"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 404 658\n192.168.1.20 GET /p1.html 200 837\n192.168.1.20 GET /p2.html 301 811\n172.16.0.3 GET /p3.html 200 827\n192.168.1.20 GET /p4.html 404 870\n192.168.1.21 GET /p5.html 301 214\n192.168.1.20 GET /p6.html 200 854\n192.168.1.20 GET /p0.html 404 606\n192.168.1.21 GET /p1.html 301 849\n10.0.0.9 GET /p2.html 200 714\n10.0.0.5 GET /p3.html 404 421\n172.16.0.3 GET /p4.html 500 592\n192.168.1.21 GET /p5.html 200 467\n192.168.1.20 GET /p6.html 301 855\n192.168.1.20 GET /p0.html 500 899\n172.16.0.3 GET /p1.html 301 899\n10.0.0.7 GET /p2.html 200 177\n10.0.0.7 GET /p3.html 200 671\n10.0.0.7 GET /p4.html 200 479\n10.0.0.5 GET /p5.html 404 886\n10.0.0.9 GET /p6.html 404 848\n172.16.0.3 GET /p0.html 200 604\n10.0.0.9 GET /p1.html 500 891\n192.168.1.20 GET /p2.html 200 117\n10.0.0.5 GET /p3.html 500 724\n10.0.0.9 GET /p4.html 200 962\n10.0.0.5 GET /p5.html 500 290\n10.0.0.7 GET /p6.html 200 573\n```"}
        answers: ["sha256:abe389fe012a94aa403993fddd1fb57d52e4163306b58c671675426ccf729b49","sha256:548ebbae9b37d05d0a15c73cacd4de4bb7b303dead653c4d4eb5ddd284d61fb2","sha256:04697ce6a87c2f188334492d0a6aa81ca1fac3236f0993dd24e12cd69c0f0134"]
      - values: {"log":"```\n10.0.0.5 GET /p0.html 200 174\n10.0.0.5 GET /p1.html 301 545\n192.168.1.21 GET /p2.html 200 644\n10.0.0.9 GET /p3.html 200 110\n172.16.0.3 GET /p4.html 500 849\n192.168.1.20 GET /p5.html 200 660\n192.168.1.21 GET /p6.html 301 547\n192.168.1.20 GET /p0.html 500 175\n10.0.0.7 GET /p1.html 500 471\n172.16.0.3 GET /p2.html 200 640\n192.168.1.20 GET /p3.html 200 494\n10.0.0.7 GET /p4.html 200 106\n10.0.0.5 GET /p5.html 200 613\n10.0.0.7 GET /p6.html 200 658\n192.168.1.20 GET /p0.html 404 891\n172.16.0.3 GET /p1.html 200 526\n10.0.0.9 GET /p2.html 200 764\n192.168.1.20 GET /p3.html 301 808\n10.0.0.7 GET /p4.html 200 865\n192.168.1.20 GET /p5.html 200 269\n10.0.0.5 GET /p6.html 200 128\n192.168.1.20 GET /p0.html 500 983\n192.168.1.20 GET /p1.html 404 660\n192.168.1.20 GET /p2.html 301 760\n10.0.0.5 GET /p3.html 200 888\n192.168.1.21 GET /p4.html 301 234\n192.168.1.20 GET /p5.html 404 604\n192.168.1.20 GET /p6.html 200 894\n192.168.1.20 GET /p0.html 200 692\n10.0.0.5 GET /p1.html 404 282\n```"}
        answers: ["sha256:59e078605952a399470bdb4a3fc2b46ae4b7baa80b8d006688096d66eec3854b","sha256:a6571e088b46230d50c97e3e1c23199c320fc04120fcb4885ddee98346859e46","sha256:9904bcd922483cf3087153b148dd8dfcb065480e5978d145d0d3a85d556e487d"]
      - values: {"log":"```\n10.0.0.7 GET /p0.html 500 736\n10.0.0.9 GET /p1.html 200 298\n10.0.0.7 GET /p2.html 200 558\n192.168.1.20 GET /p3.html 301 445\n10.0.0.7 GET /p4.html 200 679\n10.0.0.7 GET /p5.html 200 171\n192.168.1.20 GET /p6.html 200 400\n10.0.0.5 GET /p0.html 200 853\n10.0.0.7 GET /p1.html 404 312\n192.168.1.20 GET /p2.html 200 121\n10.0.0.9 GET /p3.html 301 471\n192.168.1.20 GET /p4.html 200 944\n10.0.0.9 GET /p5.html 200 747\n192.168.1.21 GET /p6.html 200 996\n10.0.0.7 GET /p0.html 301 901\n10.0.0.7 GET /p1.html 200 782\n192.168.1.20 GET /p2.html 500 766\n192.168.1.20 GET /p3.html 200 468\n10.0.0.7 GET /p4.html 500 507\n10.0.0.7 GET /p5.html 200 157\n192.168.1.21 GET /p6.html 404 510\n10.0.0.7 GET /p0.html 200 429\n192.168.1.20 GET /p1.html 301 833\n192.168.1.20 GET /p2.html 404 716\n192.168.1.21 GET /p3.html 200 484\n10.0.0.9 GET /p4.html 404 844\n192.168.1.20 GET /p5.html 200 343\n10.0.0.7 GET /p6.html 200 837\n172.16.0.3 GET /p0.html 200 903\n172.16.0.3 GET /p1.html 200 755\n192.168.1.20 GET /p2.html 200 774\n10.0.0.9 GET /p3.html 301 861\n```"}
        answers: ["sha256:9a0d1215240ef14005a0ed31a8d2c9680c8de919031ac8049297de302b1dca3d","sha256:f29c86ab2532ac56d9359bb2c7142a2bfbfa0e939e8e3a1012f1dbfcba284ea4","sha256:51b55b420f6f390ca1d855b03eb4d6a6aabd9f6bdb922a8470ab81002514daf3"]
      - values: {"log":"```\n192.168.1.20 GET /p0.html 200 301\n10.0.0.9 GET /p1.html 301 877\n192.168.1.20 GET /p2.html 200 596\n192.168.1.20 GET /p3.html 200 115\n172.16.0.3 GET /p4.html 301 419\n10.0.0.5 GET /p5.html 500 436\n192.168.1.21 GET /p6.html 500 253\n192.168.1.20 GET /p0.html 404 799\n192.168.1.20 GET /p1.html 200 145\n10.0.0.7 GET /p2.html 200 494\n192.168.1.21 GET /p3.html 200 327\n192.168.1.20 GET /p4.html 200 369\n192.168.1.21 GET /p5.html 500 704\n172.16.0.3 GET /p6.html 404 233\n192.168.1.21 GET /p0.html 404 606\n10.0.0.7 GET /p1.html 301 839\n10.0.0.7 GET /p2.html 200 328\n192.168.1.20 GET /p3.html 200 874\n192.168.1.20 GET /p4.html 200 285\n10.0.0.5 GET /p5.html 500 854\n10.0.0.7 GET /p6.html 200 873\n192.168.1.21 GET /p0.html 200 486\n10.0.0.7 GET /p1.html 500 237\n10.0.0.7 GET /p2.html 200 335\n192.168.1.20 GET /p3.html 200 736\n192.168.1.20 GET /p4.html 200 309\n192.168.1.20 GET /p5.html 200 739\n10.0.0.5 GET /p6.html 500 617\n192.168.1.21 GET /p0.html 200 465\n10.0.0.5 GET /p1.html 200 595\n192.168.1.20 GET /p2.html 200 213\n172.16.0.3 GET /p3.html 200 450\n192.168.1.20 GET /p4.html 200 521\n192.168.1.20 GET /p5.html 200 586\n```"}
        answers: ["sha256:9cfbe9771de2105f3c24d966e10cdae91ac012c8cd0a7f9fafec2df9661c09fa","sha256:3fad7b9e2ca77ef157cd6c28bb6fba07bcdb8217ec9c65f58c48ff1f662ab0c1","sha256:00a6e3f1b36b20161ecc6bebfb9245edcf1a4d47d55d91671b2d1316c8945080"]
  - id: ip-mas-frecuente
    tier: 2
    prompt: |
      El archivo `acceso.log` (columnas: IP, método, ruta, código de respuesta, bytes) contiene:

      {{log}}

      La tubería `cut -d' ' -f1 acceso.log | sort | uniq -c | sort -rn | head -1` muestra la IP con más peticiones y su número.
      Respuesta en la forma «IP;número».
    variants:
      - values: {"log":"```\n192.168.1.21 GET /p0.html 301 647\n192.168.1.21 GET /p1.html 500 584\n192.168.1.20 GET /p2.html 301 646\n10.0.0.7 GET /p3.html 200 859\n10.0.0.7 GET /p4.html 404 713\n192.168.1.20 GET /p5.html 200 348\n10.0.0.7 GET /p6.html 200 624\n192.168.1.20 GET /p0.html 301 618\n10.0.0.7 GET /p1.html 500 824\n10.0.0.9 GET /p2.html 200 660\n192.168.1.20 GET /p3.html 200 766\n172.16.0.3 GET /p4.html 200 231\n10.0.0.9 GET /p5.html 200 598\n192.168.1.21 GET /p6.html 500 228\n10.0.0.5 GET /p0.html 404 446\n192.168.1.20 GET /p1.html 200 857\n10.0.0.7 GET /p2.html 301 343\n10.0.0.7 GET /p3.html 404 180\n192.168.1.21 GET /p4.html 200 500\n192.168.1.21 GET /p5.html 500 485\n10.0.0.7 GET /p6.html 200 143\n10.0.0.9 GET /p0.html 200 783\n192.168.1.20 GET /p1.html 301 413\n10.0.0.5 GET /p2.html 200 206\n```"}
        answers: ["sha256:475c539a09cb6b9175d2163eeb55897ffe2423d74c2fa69ea892267764d8d1c4"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 200 302\n192.168.1.20 GET /p1.html 200 907\n10.0.0.7 GET /p2.html 404 770\n192.168.1.20 GET /p3.html 200 220\n192.168.1.20 GET /p4.html 200 238\n192.168.1.21 GET /p5.html 200 605\n10.0.0.5 GET /p6.html 301 797\n192.168.1.20 GET /p0.html 301 480\n192.168.1.20 GET /p1.html 200 666\n10.0.0.7 GET /p2.html 200 336\n10.0.0.5 GET /p3.html 200 365\n192.168.1.20 GET /p4.html 200 366\n192.168.1.20 GET /p5.html 200 439\n192.168.1.20 GET /p6.html 200 488\n192.168.1.20 GET /p0.html 404 657\n192.168.1.20 GET /p1.html 200 574\n192.168.1.20 GET /p2.html 404 279\n10.0.0.7 GET /p3.html 404 509\n172.16.0.3 GET /p4.html 200 274\n192.168.1.20 GET /p5.html 200 748\n192.168.1.21 GET /p6.html 301 891\n192.168.1.20 GET /p0.html 200 780\n192.168.1.20 GET /p1.html 200 411\n10.0.0.5 GET /p2.html 200 890\n10.0.0.7 GET /p3.html 200 107\n192.168.1.21 GET /p4.html 301 426\n```"}
        answers: ["sha256:4b38869428cf908de928d44b727a493d082ecf0821b8bf32754a0390e4933310"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 404 658\n192.168.1.20 GET /p1.html 200 837\n192.168.1.20 GET /p2.html 301 811\n172.16.0.3 GET /p3.html 200 827\n192.168.1.20 GET /p4.html 404 870\n192.168.1.21 GET /p5.html 301 214\n192.168.1.20 GET /p6.html 200 854\n192.168.1.20 GET /p0.html 404 606\n192.168.1.21 GET /p1.html 301 849\n10.0.0.9 GET /p2.html 200 714\n10.0.0.5 GET /p3.html 404 421\n172.16.0.3 GET /p4.html 500 592\n192.168.1.21 GET /p5.html 200 467\n192.168.1.20 GET /p6.html 301 855\n192.168.1.20 GET /p0.html 500 899\n172.16.0.3 GET /p1.html 301 899\n10.0.0.7 GET /p2.html 200 177\n10.0.0.7 GET /p3.html 200 671\n10.0.0.7 GET /p4.html 200 479\n10.0.0.5 GET /p5.html 404 886\n10.0.0.9 GET /p6.html 404 848\n172.16.0.3 GET /p0.html 200 604\n10.0.0.9 GET /p1.html 500 891\n192.168.1.20 GET /p2.html 200 117\n10.0.0.5 GET /p3.html 500 724\n10.0.0.9 GET /p4.html 200 962\n10.0.0.5 GET /p5.html 500 290\n10.0.0.7 GET /p6.html 200 573\n```"}
        answers: ["sha256:7b63a1252cad09c017e1067faff14633e7050fe91af3108dff0482d0897dad0e"]
      - values: {"log":"```\n10.0.0.5 GET /p0.html 200 174\n10.0.0.5 GET /p1.html 301 545\n192.168.1.21 GET /p2.html 200 644\n10.0.0.9 GET /p3.html 200 110\n172.16.0.3 GET /p4.html 500 849\n192.168.1.20 GET /p5.html 200 660\n192.168.1.21 GET /p6.html 301 547\n192.168.1.20 GET /p0.html 500 175\n10.0.0.7 GET /p1.html 500 471\n172.16.0.3 GET /p2.html 200 640\n192.168.1.20 GET /p3.html 200 494\n10.0.0.7 GET /p4.html 200 106\n10.0.0.5 GET /p5.html 200 613\n10.0.0.7 GET /p6.html 200 658\n192.168.1.20 GET /p0.html 404 891\n172.16.0.3 GET /p1.html 200 526\n10.0.0.9 GET /p2.html 200 764\n192.168.1.20 GET /p3.html 301 808\n10.0.0.7 GET /p4.html 200 865\n192.168.1.20 GET /p5.html 200 269\n10.0.0.5 GET /p6.html 200 128\n192.168.1.20 GET /p0.html 500 983\n192.168.1.20 GET /p1.html 404 660\n192.168.1.20 GET /p2.html 301 760\n10.0.0.5 GET /p3.html 200 888\n192.168.1.21 GET /p4.html 301 234\n192.168.1.20 GET /p5.html 404 604\n192.168.1.20 GET /p6.html 200 894\n192.168.1.20 GET /p0.html 200 692\n10.0.0.5 GET /p1.html 404 282\n```"}
        answers: ["sha256:00aa70b4e65da35399940c2500bd14412944fabb4fb172bc9563f12ba18040fe"]
      - values: {"log":"```\n10.0.0.7 GET /p0.html 500 736\n10.0.0.9 GET /p1.html 200 298\n10.0.0.7 GET /p2.html 200 558\n192.168.1.20 GET /p3.html 301 445\n10.0.0.7 GET /p4.html 200 679\n10.0.0.7 GET /p5.html 200 171\n192.168.1.20 GET /p6.html 200 400\n10.0.0.5 GET /p0.html 200 853\n10.0.0.7 GET /p1.html 404 312\n192.168.1.20 GET /p2.html 200 121\n10.0.0.9 GET /p3.html 301 471\n192.168.1.20 GET /p4.html 200 944\n10.0.0.9 GET /p5.html 200 747\n192.168.1.21 GET /p6.html 200 996\n10.0.0.7 GET /p0.html 301 901\n10.0.0.7 GET /p1.html 200 782\n192.168.1.20 GET /p2.html 500 766\n192.168.1.20 GET /p3.html 200 468\n10.0.0.7 GET /p4.html 500 507\n10.0.0.7 GET /p5.html 200 157\n192.168.1.21 GET /p6.html 404 510\n10.0.0.7 GET /p0.html 200 429\n192.168.1.20 GET /p1.html 301 833\n192.168.1.20 GET /p2.html 404 716\n192.168.1.21 GET /p3.html 200 484\n10.0.0.9 GET /p4.html 404 844\n192.168.1.20 GET /p5.html 200 343\n10.0.0.7 GET /p6.html 200 837\n172.16.0.3 GET /p0.html 200 903\n172.16.0.3 GET /p1.html 200 755\n192.168.1.20 GET /p2.html 200 774\n10.0.0.9 GET /p3.html 301 861\n```"}
        answers: ["sha256:d88db0d63a5a80adc1f3750ceded3031095033d600e2d4ca0858f6077d6006af"]
      - values: {"log":"```\n192.168.1.20 GET /p0.html 200 301\n10.0.0.9 GET /p1.html 301 877\n192.168.1.20 GET /p2.html 200 596\n192.168.1.20 GET /p3.html 200 115\n172.16.0.3 GET /p4.html 301 419\n10.0.0.5 GET /p5.html 500 436\n192.168.1.21 GET /p6.html 500 253\n192.168.1.20 GET /p0.html 404 799\n192.168.1.20 GET /p1.html 200 145\n10.0.0.7 GET /p2.html 200 494\n192.168.1.21 GET /p3.html 200 327\n192.168.1.20 GET /p4.html 200 369\n192.168.1.21 GET /p5.html 500 704\n172.16.0.3 GET /p6.html 404 233\n192.168.1.21 GET /p0.html 404 606\n10.0.0.7 GET /p1.html 301 839\n10.0.0.7 GET /p2.html 200 328\n192.168.1.20 GET /p3.html 200 874\n192.168.1.20 GET /p4.html 200 285\n10.0.0.5 GET /p5.html 500 854\n10.0.0.7 GET /p6.html 200 873\n192.168.1.21 GET /p0.html 200 486\n10.0.0.7 GET /p1.html 500 237\n10.0.0.7 GET /p2.html 200 335\n192.168.1.20 GET /p3.html 200 736\n192.168.1.20 GET /p4.html 200 309\n192.168.1.20 GET /p5.html 200 739\n10.0.0.5 GET /p6.html 500 617\n192.168.1.21 GET /p0.html 200 465\n10.0.0.5 GET /p1.html 200 595\n192.168.1.20 GET /p2.html 200 213\n172.16.0.3 GET /p3.html 200 450\n192.168.1.20 GET /p4.html 200 521\n192.168.1.20 GET /p5.html 200 586\n```"}
        answers: ["sha256:4b38869428cf908de928d44b727a493d082ecf0821b8bf32754a0390e4933310"]
  - id: suma-de-bytes
    tier: 2
    type: numero
    sig: 10
    prompt: |
      El archivo `acceso.log` (columnas: IP, método, ruta, código de respuesta, bytes) contiene:

      {{log}}

      ¿Qué imprime `awk '{s+=$5} END{print s}' acceso.log` (suma de la quinta columna)?
    variants:
      - values: {"log":"```\n192.168.1.21 GET /p0.html 301 647\n192.168.1.21 GET /p1.html 500 584\n192.168.1.20 GET /p2.html 301 646\n10.0.0.7 GET /p3.html 200 859\n10.0.0.7 GET /p4.html 404 713\n192.168.1.20 GET /p5.html 200 348\n10.0.0.7 GET /p6.html 200 624\n192.168.1.20 GET /p0.html 301 618\n10.0.0.7 GET /p1.html 500 824\n10.0.0.9 GET /p2.html 200 660\n192.168.1.20 GET /p3.html 200 766\n172.16.0.3 GET /p4.html 200 231\n10.0.0.9 GET /p5.html 200 598\n192.168.1.21 GET /p6.html 500 228\n10.0.0.5 GET /p0.html 404 446\n192.168.1.20 GET /p1.html 200 857\n10.0.0.7 GET /p2.html 301 343\n10.0.0.7 GET /p3.html 404 180\n192.168.1.21 GET /p4.html 200 500\n192.168.1.21 GET /p5.html 500 485\n10.0.0.7 GET /p6.html 200 143\n10.0.0.9 GET /p0.html 200 783\n192.168.1.20 GET /p1.html 301 413\n10.0.0.5 GET /p2.html 200 206\n```"}
        answers: ["sha256:a3c0952a79dbfb3bccf81e2c90865d8057cde02a2d883732fe5c511bdb021f1a","sha256:24ca28d496787fecb07ee7634a7f03009a9f1ed87100beedfc295f0e098b21fa","sha256:c24d12b1ce50f984df9c28668196bb39e2d508ea3df72b8422710516f02393aa"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 200 302\n192.168.1.20 GET /p1.html 200 907\n10.0.0.7 GET /p2.html 404 770\n192.168.1.20 GET /p3.html 200 220\n192.168.1.20 GET /p4.html 200 238\n192.168.1.21 GET /p5.html 200 605\n10.0.0.5 GET /p6.html 301 797\n192.168.1.20 GET /p0.html 301 480\n192.168.1.20 GET /p1.html 200 666\n10.0.0.7 GET /p2.html 200 336\n10.0.0.5 GET /p3.html 200 365\n192.168.1.20 GET /p4.html 200 366\n192.168.1.20 GET /p5.html 200 439\n192.168.1.20 GET /p6.html 200 488\n192.168.1.20 GET /p0.html 404 657\n192.168.1.20 GET /p1.html 200 574\n192.168.1.20 GET /p2.html 404 279\n10.0.0.7 GET /p3.html 404 509\n172.16.0.3 GET /p4.html 200 274\n192.168.1.20 GET /p5.html 200 748\n192.168.1.21 GET /p6.html 301 891\n192.168.1.20 GET /p0.html 200 780\n192.168.1.20 GET /p1.html 200 411\n10.0.0.5 GET /p2.html 200 890\n10.0.0.7 GET /p3.html 200 107\n192.168.1.21 GET /p4.html 301 426\n```"}
        answers: ["sha256:a740e6b39e7172951b9a514d8460759e4d04cdc6c0cd99a0d1f5cae2a9e6496d","sha256:6feeb237b590a750e490f888db1ff22e8db038bfdc51e8bbf1a3a961f5c08115","sha256:09d234517019f40a530535c45550bf555d2fa8e84814bd45bd7e769febc9a1b5"]
      - values: {"log":"```\n192.168.1.21 GET /p0.html 404 658\n192.168.1.20 GET /p1.html 200 837\n192.168.1.20 GET /p2.html 301 811\n172.16.0.3 GET /p3.html 200 827\n192.168.1.20 GET /p4.html 404 870\n192.168.1.21 GET /p5.html 301 214\n192.168.1.20 GET /p6.html 200 854\n192.168.1.20 GET /p0.html 404 606\n192.168.1.21 GET /p1.html 301 849\n10.0.0.9 GET /p2.html 200 714\n10.0.0.5 GET /p3.html 404 421\n172.16.0.3 GET /p4.html 500 592\n192.168.1.21 GET /p5.html 200 467\n192.168.1.20 GET /p6.html 301 855\n192.168.1.20 GET /p0.html 500 899\n172.16.0.3 GET /p1.html 301 899\n10.0.0.7 GET /p2.html 200 177\n10.0.0.7 GET /p3.html 200 671\n10.0.0.7 GET /p4.html 200 479\n10.0.0.5 GET /p5.html 404 886\n10.0.0.9 GET /p6.html 404 848\n172.16.0.3 GET /p0.html 200 604\n10.0.0.9 GET /p1.html 500 891\n192.168.1.20 GET /p2.html 200 117\n10.0.0.5 GET /p3.html 500 724\n10.0.0.9 GET /p4.html 200 962\n10.0.0.5 GET /p5.html 500 290\n10.0.0.7 GET /p6.html 200 573\n```"}
        answers: ["sha256:ce410f0c7aa89426963c3fb38c90ef9eea415afd22353ad11f823a7d2794fadc","sha256:ac84977c9fe5170a7a848178704c487a97e6792d9d1c3b502a9b8ba6d3dfd4c3","sha256:77d93d77218f97e253449bc23adef3a485304235127c0afa8480e72bf7a3a242"]
      - values: {"log":"```\n10.0.0.5 GET /p0.html 200 174\n10.0.0.5 GET /p1.html 301 545\n192.168.1.21 GET /p2.html 200 644\n10.0.0.9 GET /p3.html 200 110\n172.16.0.3 GET /p4.html 500 849\n192.168.1.20 GET /p5.html 200 660\n192.168.1.21 GET /p6.html 301 547\n192.168.1.20 GET /p0.html 500 175\n10.0.0.7 GET /p1.html 500 471\n172.16.0.3 GET /p2.html 200 640\n192.168.1.20 GET /p3.html 200 494\n10.0.0.7 GET /p4.html 200 106\n10.0.0.5 GET /p5.html 200 613\n10.0.0.7 GET /p6.html 200 658\n192.168.1.20 GET /p0.html 404 891\n172.16.0.3 GET /p1.html 200 526\n10.0.0.9 GET /p2.html 200 764\n192.168.1.20 GET /p3.html 301 808\n10.0.0.7 GET /p4.html 200 865\n192.168.1.20 GET /p5.html 200 269\n10.0.0.5 GET /p6.html 200 128\n192.168.1.20 GET /p0.html 500 983\n192.168.1.20 GET /p1.html 404 660\n192.168.1.20 GET /p2.html 301 760\n10.0.0.5 GET /p3.html 200 888\n192.168.1.21 GET /p4.html 301 234\n192.168.1.20 GET /p5.html 404 604\n192.168.1.20 GET /p6.html 200 894\n192.168.1.20 GET /p0.html 200 692\n10.0.0.5 GET /p1.html 404 282\n```"}
        answers: ["sha256:201af61fe36018448a19e9cd452c8f34326dd244281626aa16faf222bea77c1f","sha256:d5b428b543dd4e5fdfcd2abaf0bf4bca09c17de53efe3e0920e7f7df60eca776","sha256:1ccfe907e04e3145b9a87c5c9a80cb59613994e2766b086cd78ece1d5e332052"]
      - values: {"log":"```\n10.0.0.7 GET /p0.html 500 736\n10.0.0.9 GET /p1.html 200 298\n10.0.0.7 GET /p2.html 200 558\n192.168.1.20 GET /p3.html 301 445\n10.0.0.7 GET /p4.html 200 679\n10.0.0.7 GET /p5.html 200 171\n192.168.1.20 GET /p6.html 200 400\n10.0.0.5 GET /p0.html 200 853\n10.0.0.7 GET /p1.html 404 312\n192.168.1.20 GET /p2.html 200 121\n10.0.0.9 GET /p3.html 301 471\n192.168.1.20 GET /p4.html 200 944\n10.0.0.9 GET /p5.html 200 747\n192.168.1.21 GET /p6.html 200 996\n10.0.0.7 GET /p0.html 301 901\n10.0.0.7 GET /p1.html 200 782\n192.168.1.20 GET /p2.html 500 766\n192.168.1.20 GET /p3.html 200 468\n10.0.0.7 GET /p4.html 500 507\n10.0.0.7 GET /p5.html 200 157\n192.168.1.21 GET /p6.html 404 510\n10.0.0.7 GET /p0.html 200 429\n192.168.1.20 GET /p1.html 301 833\n192.168.1.20 GET /p2.html 404 716\n192.168.1.21 GET /p3.html 200 484\n10.0.0.9 GET /p4.html 404 844\n192.168.1.20 GET /p5.html 200 343\n10.0.0.7 GET /p6.html 200 837\n172.16.0.3 GET /p0.html 200 903\n172.16.0.3 GET /p1.html 200 755\n192.168.1.20 GET /p2.html 200 774\n10.0.0.9 GET /p3.html 301 861\n```"}
        answers: ["sha256:360e428eb5c041b259e52f16bd3f591e302b72caae06998425a99bfae7e6725d","sha256:3164d61a3f3d8bd6ca8fea30106605f5e949ea9eed27dcfa86f174fce4eee787","sha256:9a7081d0bd2421469e00f6edb201b543a3d716a3fcc08bfc3c46c6f165aae99d"]
      - values: {"log":"```\n192.168.1.20 GET /p0.html 200 301\n10.0.0.9 GET /p1.html 301 877\n192.168.1.20 GET /p2.html 200 596\n192.168.1.20 GET /p3.html 200 115\n172.16.0.3 GET /p4.html 301 419\n10.0.0.5 GET /p5.html 500 436\n192.168.1.21 GET /p6.html 500 253\n192.168.1.20 GET /p0.html 404 799\n192.168.1.20 GET /p1.html 200 145\n10.0.0.7 GET /p2.html 200 494\n192.168.1.21 GET /p3.html 200 327\n192.168.1.20 GET /p4.html 200 369\n192.168.1.21 GET /p5.html 500 704\n172.16.0.3 GET /p6.html 404 233\n192.168.1.21 GET /p0.html 404 606\n10.0.0.7 GET /p1.html 301 839\n10.0.0.7 GET /p2.html 200 328\n192.168.1.20 GET /p3.html 200 874\n192.168.1.20 GET /p4.html 200 285\n10.0.0.5 GET /p5.html 500 854\n10.0.0.7 GET /p6.html 200 873\n192.168.1.21 GET /p0.html 200 486\n10.0.0.7 GET /p1.html 500 237\n10.0.0.7 GET /p2.html 200 335\n192.168.1.20 GET /p3.html 200 736\n192.168.1.20 GET /p4.html 200 309\n192.168.1.20 GET /p5.html 200 739\n10.0.0.5 GET /p6.html 500 617\n192.168.1.21 GET /p0.html 200 465\n10.0.0.5 GET /p1.html 200 595\n192.168.1.20 GET /p2.html 200 213\n172.16.0.3 GET /p3.html 200 450\n192.168.1.20 GET /p4.html 200 521\n192.168.1.20 GET /p5.html 200 586\n```"}
        answers: ["sha256:93a731c1b418e4a4a0177258e3b26a97a0033e216700a731b365fcdc0df95269","sha256:83144f455cd76ba491e74411e4e5400e7568d4c247b242b444a0067ac680a0a2","sha256:e02d7a97425a4e04b6524eeb98278a13cc4d247f20c042c7789b29427c25b7c6"]
  - id: umask-027
    tier: 2
    prompt: |
      Con `umask {{u}}`, ¿qué permisos en octal tendrán un **archivo nuevo** creado con `touch` y un **directorio nuevo** creado con
      `mkdir`? Respuesta en la forma «archivo;directorio», por ejemplo «644;755».
    variants:
      - values: {"u":"026"}
        answers: ["sha256:62e3a1d886fce6152f345e70ab69b136fbcf1cac2e3e7125b5b7a4785b826281"]
      - values: {"u":"022"}
        answers: ["sha256:1ee729b0f98962232dea9ee465ce7c10838fe339d49cc5ca0408870b34a0d1f5"]
      - values: {"u":"077"}
        answers: ["sha256:758f54de476b27d83b4714450abf50e71a457d17ff7b7d92e9d7808beba3b34b"]
      - values: {"u":"002"}
        answers: ["sha256:b7f9e247317825fb429e2c74857c06f3cecda3d0f12047de3eedfd459d28e42a"]
      - values: {"u":"007"}
        answers: ["sha256:0f5cdf1c8afe20bc9c1b0b5f851094d7730254d47f6068e3db2d3e3d47d5d0cb"]
      - values: {"u":"037"}
        answers: ["sha256:5a9e6d150162c9d650996bc08d09f23b07bc41b093d8ec9b9225e8d914d5a78b"]
  - id: codigos-de-salida
    tier: 2
    prompt: |
      En bash, tras cada uno de estos comandos se imprime `$?`: `true`, `false`, `ls /noexiste` (directorio inexistente; GNU `ls`) y una orden que no existe. ¿Qué cuatro códigos salen, en orden?
      Respuesta separada por punto y coma.
    answers: ["sha256:6bffc15bc2fa0c9c60d13d880347dccf7055e9a31dc5fc13e55e58975bb2518f"]
  - id: multiplos-de-15
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Qué número imprime `seq 1 {{N}} | awk '$1%{{k}}==0' | wc -l`?
    variants:
      - values: {"N":120,"k":15}
        answers: ["sha256:46afa047f21179e33a806135c70dbee53a762d0f69a2dec2bcbe7951a49412e6","sha256:c0028d97e95b3025ad73e617b6f9abf673e1d56dbec72ce0e65b373ca8960c69","sha256:26a7ca1f9a2e01bbf478b0a7c92062bf8b1fef8bac876ac19373f4289185323e"]
      - values: {"N":200,"k":7}
        answers: ["sha256:60b1d61f81ae383493ab00bcc1c0775341435ffea7ffce11b6e7de1b890a0193","sha256:be8fd98f462ab370267360f9ffbb798a018ebc75212b21f8c9701a54f8e530ba","sha256:a24f47ae7f59b0f57ca199d16f5aa25afa1585e44721a4fc9be378f0f42e3bf2"]
      - values: {"N":1000,"k":37}
        answers: ["sha256:5c8185f23af9dd775b06586bee37cc74e2f13bd20230880db5187adeaadeabfe","sha256:4a01e18ec78f9bf3478a5d7140ae84caf2a377047cf0eb7feeb9cb3421fb072e","sha256:11ed8ba725c5346a4a3e7e08055afd95466a65ef509aa4a7b25d9b5555d9bc77"]
      - values: {"N":50,"k":6}
        answers: ["sha256:d6db65ea5ef98421beb006eaa5c506be1638ca11544477ba2be48ef4d3b33a5a","sha256:cd49ef1b15db2dc8662af55a80a89c4e0bfce1289643819640049673d50711a8","sha256:dde8b81d499f71decaacbb80a004bf8da8a788d9a905985c27b96babc4139dbc"]
      - values: {"N":365,"k":7}
        answers: ["sha256:54b17c79708979498370a72d172f29062e938a6ef358a5f80bcf9da63f9a7027","sha256:9768bac1ccc3b24875c6c3f465b7cb0e307e9d38ec7c041f76de5bccf1aa5ae8","sha256:4b2cd725167b4cf63322620c72133cf460dd81d69b1a9ac87c70d62a1fb124d8"]
      - values: {"N":999,"k":11}
        answers: ["sha256:0ae855e0a6ebda7883b9f7a52bdd5b5fbc61fa2beecc16b4c669e5d05f581b21","sha256:2c21e832664ec29ccaf6d14f31cf6715ade79b551a5c819977a20d41ad8b37c4","sha256:f99c726fc8aeee8a340afbe0d9432513b58d6d6f065da3e564b05691b89bbe20"]
  - id: entradas-de-find
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En un directorio vacío se ejecuta: `{{cmd}}`. ¿Qué número imprime `find a | wc -l`? (Cuenta directorios y archivos, incluido
      `a`.)
    variants:
      - values: {"cmd":"mkdir -p a/b/c; touch a/x.txt a/b/y.txt a/b/w.log"}
        answers: ["sha256:23de06a3efa31d49c5561acd49de9843de213f30c7a1b2e32867910d12812d0b","sha256:960659c23e0c4c3cc733c89e8395c9ce75adb1ca5b3e0190766d0fb82bfd50f6","sha256:727dfaaab86ebc8d6d9af80262ed4461e9aca28003ac726495c8f4ce3e85b435"]
      - values: {"cmd":"mkdir -p a/b; touch a/1 a/2 a/b/3"}
        answers: ["sha256:2bc1ddbf91fa105c92664db5dc7e47e0180ca4a9c3045fe0becdfaf99dff4357","sha256:3cd648b4899692e40ff632fcd970647dab56a1bfb9198f391c6324de9bf14a47","sha256:94268904111a310d2f1dbb33fc6601f3f365d60ec4c1a617151bd19004410075"]
      - values: {"cmd":"mkdir -p a/b a/c; touch a/b/x a/c/y a/c/z"}
        answers: ["sha256:20020aba3282b93b60bf2209a5d198aecc5fba9b98846027d59e90a2ebee1a46","sha256:acf49c6684fb6666bc246f6f8ab4f6fca56a3aa8a5e322ee2de410223b162936","sha256:35a00df7f6fb6e5d135c1e02f4067d46a8cd2ed17e7eacafc6e66819c0627569"]
      - values: {"cmd":"mkdir -p a/b/c/d; touch a/b/c/d/fin"}
        answers: ["sha256:6806b2ff30d9ea430d1fbe281d6dbb2ca453eff41744c626c8d99f2ecee8e941","sha256:5e443c44a02ba85fcb4b296a20003ce43e801bbedc291bf64c361c3ff1c964a8","sha256:e1f71cdb075b1317be3d6ae7d9d87af3db7a3caad0eb38f33b9e8e23e2b245c3"]
      - values: {"cmd":"mkdir a; touch a/p a/q a/r a/s"}
        answers: ["sha256:8e650accd5448cb2fbadfdaac4ef376f3b80aa04dc0de786e350d5cbac2efd72","sha256:1482cc093e3bb8941a09bfa4023cadb067a7edd2b138de4017ef2524f4e6c43c","sha256:ea6e8ba87e967821c4354cca25cc3320bf1e2b1d983a8e1b0167b0c702820fc0"]
      - values: {"cmd":"mkdir -p a/x a/y/z; touch a/x/1 a/y/2 a/y/z/3 a/4"}
        answers: ["sha256:427e97ba1b7c9c0d27205830974a2cebaaf20818d543ec2a90e528c6e17b3533","sha256:fcf5d61041e863f24e9f53a07376eb7e06c3715471588c36bc258a3ab50f808b","sha256:b4b082b1998ba7a9fb1935864c809f7e84e25841c029a5de32a8d5424b80d5bd"]
  - id: redirecciones
    tier: 2
    type: numero
    sig: 6
    prompt: |
      ¿Qué número imprime este bloque? `{{cmd}}`
    variants:
      - values: {"cmd":"echo uno > f; echo dos >> f; echo tres >> f; echo cuatro > f; echo cinco >> f; wc -l < f"}
        answers: ["sha256:76ac782b0a994ba382f9d6fa674a8ac8e596409ce7aa131db5ffe3e86459a76e","sha256:41489494e3addcffbd7585fc069dacc67bd3e4306a8b2068f1eb9f74d9fd47f6","sha256:f520d37df5acc96b60d67a7e07823ab5409e4244a5e68a091f899ad82cbd90b6"]
      - values: {"cmd":"echo a > f; echo b >> f; echo c >> f; wc -l < f"}
        answers: ["sha256:d6c1d225a9f5cb67b074d2061e1fed8359339aa36d7bb3c4923f7d76c582c807","sha256:4b2ae2728c514b891655033f64c89a9875238f31b04e31d4d0bfcfc38b63cee4","sha256:8924ad0ae61fc68b05b46ac62b1ae7927edb22ac0cafc43546745e32497efb0b"]
      - values: {"cmd":"echo x >> f; echo y >> f; wc -l < f"}
        answers: ["sha256:41229aaa1973b2452f4ac70d69247e57b2b6d3656d64268f8cb4a662846a9602","sha256:f8aaed7825e47bc91b900186f1459eb0a57a9795efbf7c0e4055a4d525befa8a","sha256:825d1686b4844d22c3db5b5a1ac674aaebf695bca176528805dee0448ba2ff3b"]
      - values: {"cmd":"echo 1 > f; echo 2 > f; echo 3 >> f; echo 4 >> f; wc -l < f"}
        answers: ["sha256:4f522a4e435c5beb11516aa9101eb27eb7494655e33114346bbeacfee07ee8d3","sha256:897cb6aa0c68ea63118452247bff22744be15d4c4008c3b257a78bcc7d1b9783","sha256:311781831b6f5a5c95a23a10766fc5086b5ba3b49b69335998a304a454112ad3"]
      - values: {"cmd":"echo hola > f; echo adios > f; wc -l < f"}
        answers: ["sha256:383b492a0d05a4ceea2d4d7c2a237df6b9e13e7fb0df16edb2cafde357aece15","sha256:ca81c1bb1558bb115d974cabe537d59e64f502bf81237358c01e47fd50eddab5","sha256:af0d915da42455ef109e15ca53de2bbf5f18df5d3e346e2b01b2364e9e47a9de"]
      - values: {"cmd":"echo p > f; echo q >> f; echo r > f; echo s >> f; wc -l < f"}
        answers: ["sha256:7c62b4d997cfbc0effc7ae73de3e96d129336c030b9f95d3166812c4f716efae","sha256:1319c3cd792f8be20c98f2aa302d2357cd4f17f64daae88a4f8876c5c3a2050e","sha256:12d7c9257d1805f36027011cd555df0d49cc33a96df56e4edca1608994dc1fca"]
  - id: palabra-mas-repetida
    tier: 2
    prompt: |
      ¿Qué imprime `printf '{{p}}' | sort | uniq -c | sort -rn | head -1 | awk '{print $2}'`? Respuesta: el texto impreso.
    variants:
      - values: {"p":"c\\nb\\nc\\na\\nc\\nb\\n"}
        answers: ["sha256:2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"]
      - values: {"p":"x\\ny\\nx\\nz\\nx\\n"}
        answers: ["sha256:2d711642b726b04401627ca9fbac32f5c8530fb1903cc4db02258717921a4881"]
      - values: {"p":"gato\\nperro\\ngato\\npez\\nperro\\ngato\\n"}
        answers: ["sha256:d4e8973e04e657a4c6166748380356dcecd142b56137bd3a9e6d0d75744a1482"]
      - values: {"p":"1\\n2\\n2\\n3\\n2\\n"}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
      - values: {"p":"sol\\nluna\\nsol\\n"}
        answers: ["sha256:8db59feb4d217f26c79d6e76eea6ff80398e8b823e376bb783be870a96cab9e7"]
      - values: {"p":"rojo\\nazul\\nverde\\nazul\\nrojo\\nazul\\nazul\\n"}
        answers: ["sha256:a4bd1d3a69aa0ea6ffb1298c8c26be4b333526cae7d27f2362f89857157701ce"]
  - id: quitar-vocales
    tier: 3
    prompt: |
      ¿Qué imprime `echo "{{s}}" | tr -d '{{del}}'`? Respuesta: el texto impreso.
    variants:
      - values: {"s":"exodus terminal","del":"aeiou"}
        answers: ["sha256:4d937fc71415edd81724b3365a99d9ab61b637bfa886ebe23324c150f5541b9e"]
      - values: {"s":"hola mundo","del":"o"}
        answers: ["sha256:4785e314b1bcd931dfbc64ed109da5ec146dbd6234e6165d36a92b61743191fe"]
      - values: {"s":"programacion","del":"aeiou"}
        answers: ["sha256:005cf5360fcc5527db45b824eb1ddee4375b2b4f20c06d6c810f34b9b44598ad"]
      - values: {"s":"banana split","del":"an"}
        answers: ["sha256:43ad02ad14de01ce40bb58cbe499946932e3e931db113747b8ce48f5d94e18e9"]
      - values: {"s":"terminal linux","del":"aeiou "}
        answers: ["sha256:001e2814c7d67361e706b3c2c88d781cf1351a2672eeeff6395d300365fbf2be"]
      - values: {"s":"mississippi","del":"s"}
        answers: ["sha256:c051ff3ee20237f2494376000a7ee7316d02ead0c83d5a694231c779e3cfe8f2"]
  - id: tail-y-head
    tier: 3
    type: numero
    sig: 6
    prompt: |
      ¿Qué número imprime `seq 1 {{N}} | tail -n {{t}} | head -n {{h}} | tail -n 1`?
    variants:
      - values: {"N":40,"t":6,"h":2}
        answers: ["sha256:c5f053114df8f874e09b3641c324dd1b174c5c6ee02f1c5fff37586aadcc2514","sha256:2fee0d1ea9709a917ce515ba15b29599a15e295f2c918f6b4168942bf2f0273d","sha256:14ed50302f3c1b724e3a1e6aad8d54d335b9c353e48922e44e8f828d61df9a62"]
      - values: {"N":100,"t":10,"h":3}
        answers: ["sha256:278bde704c19a416a108453f2129eb95096caa07b969105c89d3988191db8a83","sha256:1f7f805ff1ffb760bf8bebc6a7a3648533048f0eb33ef739288ee9581d92bab9","sha256:730a47fd032b3b5a055f4627c2aea6fc6dba290b5017a6d8f470fd1fb564b5ad"]
      - values: {"N":50,"t":4,"h":1}
        answers: ["sha256:7af31e59f3ea0eb5a6a5b9fc1af271d06b9865b03bf4cfb09ffdc7adf40a4464","sha256:bec127d3d63adafea0d948f2d7975d8ccba24e9e63ae4665ac2d997ac27b31cc","sha256:9f82385233bd75a64b6d3f517c0e8cac6a8a3e12f11bc7b89a401671de7c97eb"]
      - values: {"N":30,"t":7,"h":2}
        answers: ["sha256:aa8f98f06013b30a9f47fb40143b2874204c9e0cd0cdd30bc9961c24ed607b45","sha256:317096cec5d1e10081be3e7bd082f370e300a1c9a2a889189a6c8e1b1bbf10e7","sha256:e6e02b7f1768fcd3fac15f1209a442fe8d0fcb9aa14b0ea00ee73bf6cc5d6130"]
      - values: {"N":12,"t":10,"h":9}
        answers: ["sha256:d8714e73f24ef0f4cd3544c48a97004ff7ad6dfb676d18c9c1debf61e14ebbfd","sha256:dac1c985f693a5819a9eac6cd781ef5b748e0e7be7cf3361ef605a66cd4c7b97","sha256:0a8318b0373189b301f4219cafde5866c5ac924f4799c444b8b8b5e0ffbc18e7"]
      - values: {"N":1000,"t":3,"h":2}
        answers: ["sha256:0f67e75ae4baa47391fdf52c936c70080a3ad1b5a0ba475ffcb278ede3d37a92","sha256:38e9486b4b07fb6dd72b8c048106d043cb6d92efa5822af0396a0db6b3305ca8","sha256:ae9f68d857c772ed8a234eb9b575389b266839f6ec444fbc2678ddedecc0dee2"]
  - id: git-fusion
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se ejecuta esta secuencia en un repositorio nuevo (rama `main`):

      {{seq}}

      ¿Cuántos commits hay en el historial de `HEAD` (`git rev-list --count HEAD`)? (Si `main` no avanzó, la fusión es un avance
      rápido y no crea commit.)
    variants:
      - values: {"seq":"~~~bash\necho a > a; git add a; git commit -m A\ngit checkout -b feat\necho b > b; git add b; git commit -m B\ngit checkout main\necho c > c; git add c; git commit -m C\ngit merge --no-edit feat\n~~~"}
        answers: ["sha256:b5ee86859554de45a2ba19dffbf075024cbad4f6e328b540b600d4d6fdb38f28","sha256:57036dfa6c8af87772853409cb6a8d7942c28cd6fae43f4b9aef80129e9c444e","sha256:0166df3ad9230aff78021ef4b99d7a5eb3d2cddc34f0595013a00c593f7d0f26"]
      - values: {"seq":"~~~bash\necho a > a; git add a; git commit -m A\necho b > b; git add b; git commit -m B\ngit checkout -b feat\necho c > c; git add c; git commit -m C\ngit checkout main\necho d > d; git add d; git commit -m D\ngit merge --no-edit feat\n~~~"}
        answers: ["sha256:9588b90d2a7b9c63937700530a6f9118bf03b71f268aac88ea98cf30406049ce","sha256:032779959e3e33512f272a82a1b227ac66edd8fb51fc24cae306131c9142730d","sha256:9038bd1d7e8d699405011f987c354e0958a50efb32ac7a2a0319fc1888f5ea39"]
      - values: {"seq":"~~~bash\necho a > a; git add a; git commit -m A\ngit checkout -b feat\necho b > b; git add b; git commit -m B\necho c > c; git add c; git commit -m C\ngit checkout main\ngit merge --no-edit feat\n~~~"}
        answers: ["sha256:af5f757be6898610c98a93e23af2d791441cfa4ef67accaca973c432c31b4dee","sha256:48700a44b3a5ddcd629fe03a775f7714af25767a1584bf0b84588dd5b5f6bf69","sha256:5fe4bef9221f9968b6c398d515e2a950c810695909fab5d8181d2b53038e52ec"]
      - values: {"seq":"~~~bash\necho a > a; git add a; git commit -m A\necho b > b; git add b; git commit -m B\necho c > c; git add c; git commit -m C\ngit checkout -b feat\necho d > d; git add d; git commit -m D\necho e > e; git add e; git commit -m E\ngit checkout main\necho f > f; git add f; git commit -m F\necho g > g; git add g; git commit -m G\ngit merge --no-edit feat\n~~~"}
        answers: ["sha256:15ceea981c0b76bc21f97f85b092b67e2a3c9fb66284a9f570a2e65ef5a48739","sha256:f4fdbe301c790301142177b7a0399ff8cea80bc4e0bc7e2e3d930359c87fcb13","sha256:cfba1db1a109d5f2526ab3b9192c0c6a6416ab088cc2d894e23aea93b638c23f"]
      - values: {"seq":"~~~bash\necho a > a; git add a; git commit -m A\ngit checkout -b feat\necho b > b; git add b; git commit -m B\necho c > c; git add c; git commit -m C\necho d > d; git add d; git commit -m D\ngit checkout main\necho e > e; git add e; git commit -m E\ngit merge --no-edit feat\n~~~"}
        answers: ["sha256:652c169ab81929b3556c7f52b36d374fc3b6b001020b5be80493c84f6eaee171","sha256:2ae3178343e8450099951cb24cd8ac9aa98514f099227afe2e7e634b32514436","sha256:f88ad4fab333c87cdd33f16ecae450154ffc139a56dd20a9bd58f6d21701f924"]
      - values: {"seq":"~~~bash\necho a > a; git add a; git commit -m A\necho b > b; git add b; git commit -m B\ngit checkout -b feat\necho c > c; git add c; git commit -m C\necho d > d; git add d; git commit -m D\ngit checkout main\ngit merge --no-edit feat\n~~~"}
        answers: ["sha256:a01debff319f4386613971f687b85db9d1df0aff94c176ec31c34fb0986e669a","sha256:3d1158fda52f6d315f8b17ccea5364e5a576177d51cb6346cc1d9ffe4990a451","sha256:1decb105421665a3d29254b9ba3c59cf53d341e21bf7b68af07f3fe1eaa9edcc"]
  - id: git-reset
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Se hacen ${{n}}$ commits seguidos en `main` (el primero sin padre) y después se ejecuta `git reset --hard HEAD~{{k}}`. ¿Cuántos
      commits tiene el historial de `HEAD` ahora (`git rev-list --count HEAD`)?
    variants:
      - values: {"n":5,"k":2}
        answers: ["sha256:a6a26edb4ddd61c1978ea960f818af5e954f4785fa86079a0f3c987ff1a58e02","sha256:711310bdedb5c530b5ea86a897ec7152f9e97d2579983e815779848e6b66888b","sha256:299777fff024d773f447b915a74d492d6c6e058b56c89e0b1a9fe553982df367"]
      - values: {"n":8,"k":3}
        answers: ["sha256:2ff8a47f11ac9b621bce17aa1f37a68edff8b2d73d18efc3fb3db0fc7ebe1648","sha256:4b109f97829227c0563aa9ba61e3b0a3f5c3701decb14afa685f267a2ae70150","sha256:2c1f7c244e7a8e9c3f50a9c0086b27d4b97cefbb5fe0d720fd78a01c8b373e98"]
      - values: {"n":4,"k":1}
        answers: ["sha256:9b620f793cc0d8546920ef291ed49d2e6f326332ed9a28bb679c72b2533bd53b","sha256:5ad1503ffce48ea16328070dc51327a256f10108b9d76c64753dcd9842ddfc77","sha256:72f294f93c52dd6ba1c30ea46a6336d131c86171fa9b85e1e6f27f2472e7db79"]
      - values: {"n":10,"k":9}
        answers: ["sha256:4d4f6f30f00fbfb2350bff2d2bcb3b0b7a07ba2d6fcc04b60b7a9d5118eb4f8a","sha256:99fe1d3880d2280056faf0482383eef094ada04754721a11e9d3cc3635847e09","sha256:311b68342a6ffa78ed3dc1b3b739578c8c1898ab19c19261cb9f535be84e36ba"]
      - values: {"n":6,"k":4}
        answers: ["sha256:781762016b0f031593e92b678a43e884f6182f092e0756c97fbf2ba5c6d2c74f","sha256:b9d59e78ad5f164ec1fc53cfd1770ec37b83b84cebdab7796b9752c9b85b763f","sha256:257ac5cbca6bd2dd3a7b12490c87663b9bf6616bee112061cdcd6b733f9adc3a"]
      - values: {"n":3,"k":2}
        answers: ["sha256:fc70c03b27cb0d4cc48496d7b48e05a4a68c670bcb3283694e6bedb648e5766e","sha256:2fd3f9071a9395fbe8df79ab70473380dd46564e52ade9b9982e0dc0bdbf8d1b","sha256:8ff5fa2de2ec002370546f33fe23a07be536d1ba6cf098c4eda36cd64d2af029"]
  - id: r-ruta
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuál de estas rutas es **absoluta**?
    options:
      - |
        `docs/a.txt`
      - |
        `/home/ana/docs/a.txt`
      - |
        `../a.txt`
      - |
        `./a.txt`
    answers: ["sha256:0579d17d32f437c1ee431e128617d99a56289a3dca44bb9410865021021fb7e6"]
  - id: r-rm
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué pasa con los archivos borrados con `rm -rf`?
    options:
      - |
        Se envían a la papelera
      - |
        Se pueden recuperar con `undo`
      - |
        Se borran sin papelera ni confirmación
      - |
        Solo se ocultan
    answers: ["sha256:2663bcfc6ecfd27de3238e5ae1f85aa010917792f5d28df6cde10fa27f7f9d66"]
  - id: r-octal
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      ¿Qué número octal corresponde a los permisos `rwxr-----`?
    answers: ["sha256:0354c1b2ae02f1344ecdfcb884fc4b8ff7fe79de39b8f7b291ea060b304d8a41","sha256:f7a56dc73412b7a133b11ea165e108c6eaa194b7ebc9e573c2c6d45c9d3828c7","sha256:293eec232c366f3fb0c4903b18e5f79cb3a977353fda45dd839fbe32b37c3a28"]
  - id: r-tuberia
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué hace el símbolo `|` en la terminal?
    options:
      - |
        Conecta la salida de una orden con la entrada de la siguiente
      - |
        Guarda la salida en un archivo
      - |
        Ejecuta dos órdenes a la vez sin relación
      - |
        Redirige los errores
    answers: ["sha256:ddca4b0b0726df3620c83a13b8c2ee857b848624df46100efa30fab24dcdfb58"]
  - id: r-commit
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué hace `git commit`?
    options:
      - |
        Sube los cambios a GitHub
      - |
        Crea una rama
      - |
        Borra los cambios
      - |
        Guarda una instantánea de los cambios preparados en el historial local
    answers: ["sha256:05530bdf03ff59557cff8ec2f9a86c27855d53bbd15cebdfd03d6150a3af6aa0"]
  - id: r-comillas
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Por qué conviene escribir `"$f"` y no `$f` en un script?
    options:
      - |
        Para que se vea más claro
      - |
        Para que un nombre con espacios no se parta en varios argumentos
      - |
        Para que se ejecute más rápido
      - |
        Son obligatorias siempre en bash
    answers: ["sha256:94388d14d317f33b2db56bfe752aec0cf09947e9f2547621c38e4f807dfcdadb"]
---

# Terminal de Linux y Git: el taller del programador

La interfaz de línea de comandos es la herramienta más potente y más duradera de un profesional técnico: administradores, desarrolladores, analistas de seguridad e ingenieros de datos viven en ella.
Permite **automatizar**, combinar programas y trabajar en servidores sin pantalla. **Git** guarda la historia de un proyecto y permite colaborar sin pisarse. Juntos son la base de casi todo el trabajo técnico
moderno, y para ciberseguridad (el nodo de fundamentos de seguridad) son imprescindibles.

## Objetivos

Al terminar sabrás:

1. Moverte por el sistema de archivos, manejar archivos y entender los **permisos**.
2. Combinar programas con **redirecciones y tuberías**, y usar las herramientas de texto esenciales.
3. Escribir **scripts** de bash sencillos, usando variables, condiciones, bucles y códigos de salida.
4. Gestionar procesos y señales.
5. Usar **Git** con soltura: commits, ramas, fusiones, remotos, deshacer cambios y no filtrar secretos.
6. Trabajar con seguridad: mínimo privilegio, cuidado con `rm` y con ejecutar código ajeno.

> [!question] Test de entrada
> 1. ¿Qué crees que hace el comando `ls`? 2. ¿Qué significa que un archivo tenga permisos `rwx------`? 3. ¿Para qué sirve un sistema de control de versiones?
>
> Respuestas: **lista** el contenido de un directorio; el dueño puede leer, escribir y ejecutar y nadie más; guarda la **historia** de los cambios y permite volver atrás y trabajar en equipo.

## 1. Para qué sirve

- **Automatizar**: renombrar miles de archivos, procesar registros, desplegar un servidor con un script.
- **Servidores y la nube**: casi todos funcionan con Linux y se administran por terminal (SSH).
- **Análisis**: filtrar un registro de millones de líneas con `grep`, `sort` y `awk` en segundos.
- **Colaboración**: Git es el estándar para el código y, cada vez más, para documentos y configuración.
- **Seguridad**: investigar un incidente, auditar permisos, analizar malware: todo empieza en la terminal.

## 2. El sistema de archivos y el intérprete de órdenes

> [!practico]
> La terminal es hablar con el ordenador por escrito en vez de con el ratón. Parece más difícil, pero tiene una ventaja enorme:
> lo que escribes se puede **repetir y automatizar** (renombrar mil fotos con una línea). Los archivos están en un árbol de
> carpetas, como las ramas de un árbol que sale de una raíz (`/`); moverte por él es decir en qué carpeta estás y a cuál vas.


Un **intérprete** (*shell*, normalmente `bash`) lee una línea, la interpreta y ejecuta programas. Linux organiza los archivos en **un único árbol** que empieza en la raíz `/`:

| Directorio | Contenido |
|---|---|
| `/home` | carpetas de los usuarios (`~` es la tuya) |
| `/etc` | configuración del sistema |
| `/var` | datos que cambian: registros (`/var/log`), colas |
| `/usr`, `/bin` | programas y bibliotecas |
| `/tmp` | archivos temporales |
| `/dev`, `/proc` | dispositivos y procesos, expuestos **como archivos** |

Idea central de Unix: **todo es un archivo** (o se trata como uno). Una **ruta absoluta** empieza en `/` (`/etc/passwd`); una **relativa** parte del directorio actual (`../docs/a.txt`); `.` es el directorio actual, `..` el padre.

```bash
pwd                      # dónde estoy
ls -la                   # lista con detalle (incluye ocultos, que empiezan por .)
cd /var/log              # ir a una ruta;  cd ~  (a casa);  cd -  (al anterior)
mkdir -p proy/src        # crear directorios (con los intermedios)
touch notas.txt          # crear un archivo vacío (o actualizar su fecha)
cp a.txt copia.txt       # copiar;  cp -r  para directorios
mv a.txt b.txt           # mover o renombrar
rm notas.txt             # BORRAR (no hay papelera)
cat a.txt                # mostrar;  less a.txt  para paginar;  head -n 5, tail -n 5, tail -f (seguir)
man ls                   # manual de un comando
```

> [!warning] Peligro: `rm` no tiene papelera
> `rm -rf` borra recursivamente **sin preguntar** y sin posibilidad de deshacer. Antes de ejecutarlo con comodín, ejecuta `ls` con el **mismo patrón**. Nunca copies a ciegas comandos con `sudo rm -rf`.

## 3. Permisos

> [!practico]
> Cada archivo tiene una lista de quién puede **leerlo**, **escribirlo** y **ejecutarlo**: su dueño, su grupo y el resto. Es como
> las llaves de una casa: el dueño tiene todas, la familia algunas y los vecinos ninguna. Los números como `640` son una forma
> abreviada de escribir esa lista.


Cada archivo tiene un **dueño**, un **grupo** y tres conjuntos de permisos: para el dueño (`u`), el grupo (`g`) y los demás (`o`). Cada conjunto tiene tres bits:
**r** lectura ($4$), **w** escritura ($2$), **x** ejecución ($1$). `ls -l` muestra, por ejemplo, `-rwxr-xr-- 1 ana dev 120 ... script.sh`:
el primer carácter es el tipo (`-` archivo, `d` directorio) y los nueve siguientes los permisos.

La suma de los bits de cada conjunto da una cifra **octal**: $\texttt{rwx} = 7$, $\texttt{r-x} = 5$, $\texttt{r--} = 4$. Así `rwxr-xr--` es **754**. Se cambian con `chmod`:

```bash
chmod 754 script.sh      # numérico: rwxr-xr--
chmod u+x script.sh      # simbólico: añadir ejecución al dueño
chmod go-rwx secreto     # quitar todo a grupo y otros
chown ana:dev archivo    # cambiar dueño y grupo (requiere privilegios)
```

En un **directorio**, `r` permite **listar**, `w` (junto con `x`) permite **crear y borrar** entradas y `x` permite **entrar** (atravesarlo). Un directorio sin `x` no se puede cruzar aunque se pueda listar.

**umask.** Los archivos nuevos no nacen con todos los permisos: el sistema parte de $666$ (archivos) o $777$ (directorios) y **quita** los bits de la máscara. Con `umask 022`: archivos: $666$ sin los bits de $022$ $= 644$ (`rw-r--r--`),
directorios $755$. Con `umask 027`: $640$ y $750$ (el grupo no escribe y los demás **nada**). Es una de las decisiones de seguridad más sencillas y más descuidadas.

**Seguridad.** Principio de **mínimo privilegio**: da solo los permisos necesarios. Una clave privada SSH debe ser `600` (si es legible por otros, SSH se niega a usarla). Un archivo con contraseñas nunca debe ser `777`. El
usuario **root** (administrador) puede todo: trabaja como usuario normal y usa `sudo` solo para lo concreto.

## 4. Entrada, salida y tuberías

> [!practico]
> Cada orden de la terminal es como una máquina pequeña con una entrada y una salida. La **tubería** (`|`) conecta la salida de
> una con la entrada de la siguiente, como una cadena de montaje: una saca las líneas, otra las ordena, otra cuenta. Con piezas
> sencillas se monta algo potente.


Todo programa tiene tres **flujos**: **entrada estándar** (descriptor $0$, el teclado), **salida estándar** ($1$) y **error estándar** ($2$, para los mensajes de error). Se redirigen:

```bash
programa > salida.txt      # la salida a un archivo (SOBRESCRIBE)
programa >> salida.txt     # añade al final
programa < entrada.txt     # lee de un archivo
programa 2> errores.txt    # solo los errores
programa > todo.txt 2>&1   # salida y errores al mismo sitio
programa 2> /dev/null      # tirar los errores a la papelera de Unix
```

Una **tubería** `|` conecta la salida de un programa con la entrada del siguiente. Es la idea más productiva de Unix: **programas pequeños que hacen una sola cosa, combinados**.

**Códigos de salida.** Al terminar, todo programa devuelve un número a su padre: **$0$ significa éxito**, cualquier otro valor, error. En bash, `$?` guarda el del último comando: `true` $\to 0$; `false` $\to 1$; `ls /noexiste` $\to 2$
(en GNU `ls`); una orden que no existe $\to 127$. Los scripts se apoyan en esto para decidir.

## 5. Herramientas de texto

> [!practico]
> Casi todo en Linux son archivos de texto con líneas y columnas (registros, configuraciones, datos). Por eso unas pocas
> herramientas sirven para todo: buscar líneas (`grep`), cortar columnas (`cut`), ordenar (`sort`), contar repeticiones
> (`uniq -c`) y hacer cuentas por columnas (`awk`).


Casi todo en Unix es texto, y estas herramientas lo procesan por líneas:

| Comando | Para qué |
|---|---|
| `grep patrón` | filtrar líneas que cumplen un patrón (`-v` las que no, `-c` contar, `-i` ignorar mayúsculas, `-r` recursivo) |
| `cut -d' ' -f1` | extraer una columna por delimitador |
| `sort` / `sort -rn` | ordenar (alfabético / numérico inverso) |
| `uniq -c` | agrupar líneas **consecutivas** iguales y contarlas (por eso va tras `sort`) |
| `wc -l` | contar líneas (`-w` palabras, `-c` bytes) |
| `tr 'a-z' 'A-Z'` / `tr -d 'aeiou'` | traducir o borrar caracteres |
| `sed 's/viejo/nuevo/g'` | sustituir texto |
| `awk '{s+=$3} END{print s}'` | procesar columnas: sumar, filtrar, formatear |
| `head`, `tail` | primeras y últimas líneas |
| `find . -name '*.log'` | buscar archivos por nombre, tipo, fecha, tamaño |
| `xargs` | convertir líneas de entrada en argumentos de un comando |

**Ejemplo resuelto.** Dado un registro de accesos con la IP en la primera columna, ¿qué IP aparece más?

```bash
cut -d' ' -f1 acceso.log | sort | uniq -c | sort -rn | head -1
```

Paso a paso: `cut` saca las IP; `sort` las agrupa (para que las iguales sean consecutivas); `uniq -c` cuenta cada grupo; `sort -rn` ordena por el contador de mayor a menor; `head -1` se queda con la primera.
Es el tipo de tubería que se escribe a diario para analizar registros de un servidor o un ataque.

**Expresiones regulares básicas** (en `grep`, `sed`): `.` cualquier carácter, `*` repetición, `^` inicio, `$` fin, `[abc]` uno de los caracteres, `\d` no existe en la sintaxis básica (usa `[0-9]`).
`grep '^ERROR' log` filtra las líneas que **empiezan** por ERROR.

## 6. Variables, entorno y comillas

```bash
nombre="Ana"             # sin espacios alrededor del =
echo "Hola, $nombre"     # comillas dobles: se expande $nombre
echo 'Hola, $nombre'     # comillas simples: literal, no se expande
hoy=$(date +%F)          # sustitución de comandos: guarda la salida
echo $((7 * 6 + 1))      # aritmética entera: 43
echo $PATH               # lista de directorios donde se buscan los programas
```

El `PATH` explica por qué escribir `ls` funciona (`/bin/ls` está en el `PATH`) y por qué para ejecutar un script del directorio actual hay que escribir `./script.sh`. Las **variables de entorno** se heredan a los programas
que lanzas (`export VAR=valor`); **nunca** pongas contraseñas en la línea de órdenes (quedan en el historial y en la lista de procesos).

## 7. Scripts de bash

> [!practico]
> Un **script** es una lista de órdenes guardada en un archivo para ejecutarla de golpe, como una receta escrita para no tener
> que recordarla. Lo que repites a mano más de tres veces merece un script.


Un script es un archivo de texto con órdenes. La primera línea, el **shebang**, indica quién lo interpreta. Hay que darle permiso de ejecución.

```bash
#!/usr/bin/env bash
# cuenta_errores.sh: cuenta las líneas con ERROR de cada archivo recibido
set -euo pipefail            # parar ante errores, variables sin definir y fallos en tuberías

if [ $# -eq 0 ]; then
    echo "Uso: $0 archivo..." >&2
    exit 1
fi

for f in "$@"; do
    n=$(grep -c 'ERROR' "$f" || true)     # grep devuelve 1 si no hay coincidencias; || true lo tolera
    echo "$f: $n"
done
```

Conceptos clave: `$1, $2...` argumentos, `$#` cuántos, `"$@"` todos, `$0` el nombre del script; `if [ condición ]; then ... fi`; `for x in lista; do ... done`; `while`; funciones; `exit N` fija el código de salida.
**Las comillas alrededor de `"$f"` importan:** sin ellas, un nombre de archivo con espacios se rompería en varios argumentos (fuente típica de errores y de **fallos de seguridad por inyección**). Herramienta recomendada: `shellcheck`, un
analizador que detecta errores típicos.

## 8. Procesos y señales

Cada programa en ejecución es un **proceso** con un identificador (PID). `ps aux` los lista, `top` los muestra en vivo, `kill PID` envía una **señal**: `SIGTERM` (15, pide terminar con educación, por defecto) o `SIGKILL` (9, **mata**
sin dejarle limpiar). `programa &` lo lanza en segundo plano; `Ctrl+C` interrumpe el primer plano (`SIGINT`); `Ctrl+Z` lo suspende. `nohup` hace que sobreviva al cierre de la terminal. Los servicios del sistema los gestiona
**systemd** (`systemctl status nombre`).

## 9. Git: el control de versiones

> [!practico]
> Git es un sistema de **puntos de guardado** para tu código, como en un videojuego: cada `commit` es una foto del proyecto a la que
> puedes volver. Las **ramas** permiten probar una idea sin tocar la versión buena, y si sale bien, se **fusiona**. Y como cada
> foto se guarda con su autor y su fecha, nunca se pierde quién cambió qué.


**El modelo mental.** Git no guarda «diferencias»: guarda **instantáneas** (*snapshots*) del proyecto, llamadas **commits**. Cada commit lleva un identificador que es el **resumen criptográfico** (hash) de su contenido, de su autor, mensaje y del
**commit padre**; por eso el historial es una **cadena a prueba de manipulaciones** (cambiar un commit antiguo cambia todos los hashes posteriores). Los commits forman un **grafo** (con ramas y fusiones). Hay tres zonas:

> directorio de trabajo $\xrightarrow{\text{git add}}$ **índice** (*staging*) $\xrightarrow{\text{git commit}}$ **repositorio**

```bash
git init                     # crear un repositorio
git status                   # qué ha cambiado
git add archivo              # preparar cambios (git add -p: elegir trozos)
git commit -m "mensaje"      # guardar la instantánea
git log --oneline --graph --all   # ver la historia
git diff                     # cambios sin preparar;  git diff --staged  los preparados
```

**Buen mensaje de commit:** una línea corta en imperativo («Corrige el cálculo del IVA») y, si hace falta, un párrafo con el **porqué**. Commits pequeños y con una sola idea.

### Ramas y fusiones

Una **rama** es una etiqueta movible que apunta a un commit. Crear una rama es casi gratis, así que se trabaja **cada tarea en su rama**:

```bash
git switch -c mejora         # crear y cambiar a una rama (antes: git checkout -b)
git switch main              # volver a main
git merge mejora             # fusionar mejora en la rama actual
```

Si `main` no ha avanzado, la fusión es un **avance rápido** (*fast-forward*: solo se mueve la etiqueta). Si ambas ramas avanzaron, Git crea un **commit de fusión** con dos padres. Si las dos modificaron las **mismas líneas**, hay un **conflicto**:
Git marca el archivo con `<<<<<<<`, `=======`, `>>>>>>>`; se edita a mano, se hace `git add` y `git commit`. **Ejemplo:** un historial con $A$ en `main`, $B$ en `feat` y $C$ en `main`, tras `git merge feat` tiene $4$ commits ($A, B, C$ y el de fusión).

### Remotos y colaboración

```bash
git clone URL                # copiar un repositorio remoto
git remote -v                # ver remotos (normalmente «origin»)
git pull                     # traer y fusionar cambios
git push -u origin mejora    # subir una rama
```

El flujo habitual en equipo: rama por tarea $\to$ *pull request* $\to$ revisión $\to$ fusión. Un archivo `.gitignore` lista lo que **no** debe versionarse (binarios generados, `node_modules`, claves).

### Deshacer cambios sin perder nada importante

| Situación | Comando |
|---|---|
| Descartar cambios de un archivo (no preparados con `git add`) | `git restore archivo` |
| Sacar del índice lo que añadí con `git add` | `git restore --staged archivo` |
| Corregir el **último** mensaje o añadir algo olvidado | `git commit --amend` (solo si **no** se ha publicado) |
| Deshacer un commit **ya publicado** con otro que lo revierte | `git revert COMMIT` |
| Mover la rama a otro commit descartando lo posterior | `git reset --hard HEAD~2` ($\,\Rightarrow\,$ **destructivo** en el árbol de trabajo) |
| «Se me ha perdido un commit» | `git reflog` (historial de dónde ha estado `HEAD`; casi todo se recupera) |

**Ejemplo:** tras $5$ commits, `git reset --hard HEAD~2` deja la rama con $3$; los otros dos siguen un tiempo en el `reflog` y se pueden recuperar. (Ojo: `HEAD~2` sigue siempre el **primer padre**, así que tras una fusión no equivale a «los dos últimos commits».)

> [!warning] Los secretos no deben llegar al repositorio
> Una contraseña, clave de API o clave privada **commiteada** queda en la historia aunque la borres después, y si se publicó hay que **considerarla comprometida** y cambiarla. Usa `.gitignore`, variables de entorno o un gestor de secretos.
> Antes de publicar, revisa con `git diff --staged`.

## 10. Seguridad en la terminal

- **Mínimo privilegio**: usa `sudo` solo cuando haga falta; no trabajes como root.
- **No ejecutes lo que no entiendes**: el patrón `curl URL | sh` ejecuta código remoto sin que lo hayas leído; descarga, lee y después ejecuta.
- **Cuidado con los espacios y el comodín** en `rm`, y con las variables vacías: `rm -rf "$DIR"/*` con `$DIR` vacío se convierte en `rm -rf /*`. Protégelo con `"${DIR:?}"/*`, que aborta si la variable está vacía o sin definir (`set -u` solo detecta las **sin definir**, no las vacías; GNU `rm` se niega por defecto a borrar `/` mismo, pero no `/*`).
- **Claves SSH**: la privada con permisos `600`, protegida con contraseña, y **nunca** subida a un repositorio.
- **Registros**: `/var/log` es la primera fuente al investigar un incidente; aprende a filtrarlo.

## 11. Errores típicos

- Esperar que `uniq` cuente repeticiones **no consecutivas** (hay que ordenar antes).
- Sobrescribir un archivo con `>` en lugar de añadir con `>>`.
- Escribir `x = 5` en bash (con espacios) en vez de `x=5`.
- Olvidar las comillas en `"$variable"` y romper con nombres con espacios.
- Confundir `git reset --hard` (destructivo) con `git revert` (seguro para historial publicado).
- Hacer `git add .` sin mirar y subir archivos que no debían (secretos, binarios grandes).
- Cambiar el historial publicado (`--amend`, `rebase`) en una rama que otros usan.

## Repaso: lo que debe quedarte dentro de un mes

1. Permisos: $r=4$, $w=2$, $x=1$; `chmod 754` $=$ `rwxr-xr--`; la umask **quita bits** de $666$ / $777$ (no es una resta cifra a cifra).
2. `>` sobrescribe, `>>` añade, `|` conecta; salida $=1$, error $=2$; `$?` $=0$ es éxito.
3. `sort | uniq -c | sort -rn | head` para frecuencias; `grep`, `cut`, `awk`, `find`.
4. Git: directorio de trabajo $\to$ índice $\to$ repositorio; rama = etiqueta que apunta a un commit; fusión; `reflog` salva.
5. Mínimo privilegio y nada de secretos en el repositorio.

## Siguiente

`prog-estructuras-datos` formaliza cómo se organizan los datos en memoria (listas, pilas, árboles, grafos, tablas hash), y el nodo de fundamentos de seguridad usa estas herramientas para la seguridad práctica.
