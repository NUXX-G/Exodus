---
id: tro-lectura-tecnica
title: "Lectura técnica: manuales, RFC y estándares, hojas de datos, artículos y verificación de fuentes"
area: troncal
trunk_level: 8
prerequisites: [tro-razonamiento-cientifico, prog-terminal-linux-git]
academic_sources:
  - "Keshav, S. How to Read a Paper. ACM SIGCOMM Computer Communication Review, 37(3), 83-84, 2007."
  - "Bradner, S. RFC 2119: Key words for use in RFCs to Indicate Requirement Levels. IETF, 1997; Leiba, B. RFC 8174: Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words. IETF, 2017 (juntas, BCP 14)."
  - "Crocker, D.; Overell, P. RFC 5234: Augmented BNF for Syntax Specifications: ABNF. IETF, 2008 (STD 68)."
  - "Preston-Werner, T. Semantic Versioning 2.0.0 (semver.org)."
  - "The Linux man-pages project. man-pages(7): convenciones de las páginas de manual y sus secciones (man7.org/linux/man-pages)."
hints:
  - "Concepto: cada tipo de documento tiene su estructura y su contrato. En una página de manual, mira SYNOPSIS, RETURN VALUE y ERRORS; en una RFC, las palabras clave en MAYÚSCULAS (BCP 14) y la gramática ABNF; en una hoja de datos, distingue máximos absolutos (no superar nunca) de condiciones recomendadas (donde se garantiza el funcionamiento), y valores típicos de mínimos y máximos; en un artículo, haz tres pasadas."
  - "Herramienta: `man -k palabra` busca páginas, `man 3 printf` elige sección y `man -w` dice qué archivo abre; las RFC se leen en rfc-editor.org (mira «Obsoletes», «Updated by» y las erratas); los DOI se resuelven en doi.org; Python trae datetime.isocalendar, re y la comparación de tuplas para comprobar fechas, expresiones regulares y versiones."
  - "Documentación: man7.org/linux/man-pages/man7/man-pages.7.html (secciones del manual), rfc-editor.org/rfc/rfc2119 y rfc8174 (BCP 14), rfc-editor.org/rfc/rfc5234 (ABNF), semver.org, Keshav (2007) «How to Read a Paper»."
exercises:
  - id: secciones-del-manual
    tier: 1
    prompt: |
      En las páginas de manual de Linux, ¿en qué sección están {{lista}}? Respuesta: los cuatro números en ese orden, separados
      por `;`.
    variants:
      - values: {"lista":"la llamada al sistema `open`, la función de la biblioteca C `printf`, la orden `ls` y el **formato de archivo** de `crontab`"}
        answers: ["sha256:0244550014d3358ccea272e21c0727fc83d3bcf0a2ba98d3f9487c3d642054a9"]
      - values: {"lista":"la llamada al sistema `fork`, la función de la biblioteca C `malloc`, la orden `grep` y el **formato de archivo** `passwd`"}
        answers: ["sha256:0244550014d3358ccea272e21c0727fc83d3bcf0a2ba98d3f9487c3d642054a9"]
      - values: {"lista":"la orden de administración `mount`, la llamada al sistema `read`, la visión general de `signal` y la función de la biblioteca C `strlen`"}
        answers: ["sha256:8d4cff1ceb9c8985404e1754b42fe43b85946730d62307a2489cf69997381b4c"]
      - values: {"lista":"el **formato de archivo** `fstab`, la orden `cat`, la llamada al sistema `execve` y la visión general del protocolo `tcp`"}
        answers: ["sha256:2d09790115eab8af38b75b4a524bdd0899e63b4878e4e3ab50efa2b3936c03cd"]
      - values: {"lista":"la función de la biblioteca C `fopen`, la orden de administración `useradd`, el archivo especial `null` y la orden `tar`"}
        answers: ["sha256:8550295c4058b349d0c2627e61d548f5aa3113d82f75fd3b092939a9f49acca6"]
      - values: {"lista":"la llamada al sistema `socket`, el **formato de archivo** `hosts`, la función de la biblioteca C `qsort` y la orden de administración `iptables`"}
        answers: ["sha256:25174f560e8ad2cace438b1b381e1bb38c8652b884f8e2a8b988fe926d3e9536"]
  - id: palabras-clave-de-las-rfc
    tier: 1
    prompt: |
      Según RFC 2119, ¿qué significa que una especificación diga que una implementación **SHOULD** hacer algo?

      (a) es obligatorio, sin excepciones · (b) es lo recomendado, pero puede haber razones válidas para no hacerlo, si se entienden sus consecuencias · (c) es opcional y da igual · (d) está prohibido

      Respuesta: una letra.
    answers: ["sha256:3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"]
  - id: versionado-semantico
    tier: 1
    prompt: |
      Una biblioteca que sigue el versionado semántico (SemVer 2.0.0) está en la versión `{{v}}`. ¿Qué número debe tener la siguiente
      versión si (1) rompe la compatibilidad de su API, (2) añade una función compatible, (3) solo corrige un error? Respuesta: las tres
      versiones separadas por `;`.
    variants:
      - values: {"v":"2.3.7"}
        answers: ["sha256:bc07e5e7f1ce37b5e2b1381ad72069c3e9fd9d60cdfe0dc1d7b57129aee8bc46"]
      - values: {"v":"0.9.12"}
        answers: ["sha256:ba86e24f29f950ef785be7f19bdb9fef7c9267f7dd2fa3929bfd6ebe055fc37a"]
      - values: {"v":"1.0.0"}
        answers: ["sha256:35004b09e17a9d01bbf8beed9ad02c0f4054855feb26192a933418175b2f85de"]
      - values: {"v":"4.19.2"}
        answers: ["sha256:1d15c48b02364f6c837c184ee5ca8be728230d41d5a1ef6d01e5067ce70c80f5"]
      - values: {"v":"10.2.0"}
        answers: ["sha256:49e99b437fbe766b294cd3c5f74346847196a4f7007f20fcf8471e54ff224608"]
      - values: {"v":"3.0.9"}
        answers: ["sha256:30e373f67abb2008d434c2b1de4adb67d22b915cf618f464c8161f048ccc1f6d"]
  - id: prefijo-de-un-doi
    tier: 1
    prompt: |
      {{que}} tiene el DOI `{{doi}}`. ¿Cuál es el **prefijo** del DOI (la parte que identifica a quien lo registró)? Respuesta: el
      prefijo.
    variants:
      - values: {"que":"el artículo de Watson y Crick sobre la doble hélice del ADN (1953)","doi":"10.1038/171737a0"}
        answers: ["sha256:44d435c6fe6d030afb34cf79cef361a3ac22c4a4fa4bd0bfb1dd9ab84ef5df48"]
      - values: {"que":"el artículo de Diffie y Hellman «New Directions in Cryptography» (1976)","doi":"10.1109/TIT.1976.1055638"}
        answers: ["sha256:168015363bb4a2d5bb876b1f40626faec4c948ac3cf6e474cab28070d72eceee"]
      - values: {"que":"el artículo de Hochreiter y Schmidhuber sobre las redes LSTM (1997)","doi":"10.1162/neco.1997.9.8.1735"}
        answers: ["sha256:81f459039f19dea3350a2aba0493b650a69d7dd7becc2f11db316d40ee262bca"]
      - values: {"que":"el artículo de Turing «On Computable Numbers» (1936)","doi":"10.1112/plms/s2-42.1.230"}
        answers: ["sha256:72e0a4119b76e0fa14d2ebc58ea37413043ea18b3a89a8da366ba6072b9ab56e"]
      - values: {"que":"el artículo de Einstein sobre la electrodinámica de los cuerpos en movimiento (1905)","doi":"10.1002/andp.19053221004"}
        answers: ["sha256:2a0cd7ca1cdb50411bd67df904d9c7d0b809b1b398806a590b5d0e2090ae5524"]
      - values: {"que":"el artículo de Shannon «A Mathematical Theory of Communication» (1948)","doi":"10.1002/j.1538-7305.1948.tb01338.x"}
        answers: ["sha256:2a0cd7ca1cdb50411bd67df904d9c7d0b809b1b398806a590b5d0e2090ae5524"]
  - id: orden-de-versiones
    tier: 2
    prompt: |
      Ordena de menor a mayor precedencia, según SemVer 2.0.0, las versiones `1.0.0`, `1.0.0-rc.1`, `1.0.0-beta.11`, `1.0.0-alpha`, `1.0.0-beta.2`. Respuesta: las cinco separadas por `;`.
    answers: ["sha256:7c3f9c3f0da747f016e33651ad1b281c9f43640e14f1155214f7aa279c1e9321"]
  - id: resistencia-desde-la-hoja-de-datos
    tier: 2
    prompt: |
      La hoja de datos de un LED da una tensión directa típica de ${{Vf}}$ V a ${{mA}}$ mA (corriente recomendada). Se alimenta a ${{Vs}}$ V
      con una resistencia en serie. ¿Qué resistencia hace circular esa corriente y qué potencia disipa, en mW? Respuesta: `ohmios;mW`.
    variants:
      - values: {"Vs":"5","Vf":"2{,}2","mA":20}
        answers: ["sha256:dca375470a011625ca45295e507723557b254e93ec5cfbf237dbe804bcd23c17"]
      - values: {"Vs":"3{,}3","Vf":"1{,}8","mA":10}
        answers: ["sha256:6a2ab7976465135ae2efcf8fca0892fd4442dab1070bbe99a61cd61b8fe860a6"]
      - values: {"Vs":"12","Vf":"3{,}2","mA":20}
        answers: ["sha256:6a13170fb75f8c72a744ae4d1f4b9dae975e04f2d305d218a23cd1b38643ce33"]
      - values: {"Vs":"9","Vf":"2{,}1","mA":15}
        answers: ["sha256:e06c5d9a347b4dd8552617e8c97825615c9d09e419bf8ece282179afc6c0e83b"]
      - values: {"Vs":"5","Vf":"3{,}0","mA":10}
        answers: ["sha256:8d5946e7d9fb66bd76e1c0604c80da828707a6d832fe7bf8454e87f65e0b77af"]
      - values: {"Vs":"24","Vf":"2{,}0","mA":20}
        answers: ["sha256:6dca134373f516add7ae4e7bf3b6d11acad26e65c8e0ca70d1cd1987c2d867e5"]
  - id: temperatura-de-union
    tier: 2
    prompt: |
      Un regulador disipa ${{P}}$ W. Su hoja de datos da una resistencia térmica unión-ambiente $\theta_{JA} = {{th}}\ ^\circ$C/W y una
      temperatura máxima de unión de ${{Tmax}}\ ^\circ$C. Con el ambiente a ${{Ta}}\ ^\circ$C, ¿a qué temperatura está la unión y cuántos grados
      de margen quedan (negativo si se supera)? Respuesta: los dos números separados por `;`.
    variants:
      - values: {"P":"1{,}5","th":50,"Tmax":125,"Ta":40}
        answers: ["sha256:ebd5c902407da33024875c1fb9f06f3e9ddceb351b48c962ed7514ad4199fd88"]
      - values: {"P":"2{,}1","th":65,"Tmax":150,"Ta":30}
        answers: ["sha256:5d1fed55352b7acf3ccf2d33a59e6334ee1f8748e83107dacb37ff5ef455437d"]
      - values: {"P":"0{,}8","th":90,"Tmax":125,"Ta":25}
        answers: ["sha256:ac09f024d2fb943dd16970e9c774fa396f864e2210dea076c79154e95f96d4d7"]
      - values: {"P":"3","th":25,"Tmax":175,"Ta":60}
        answers: ["sha256:26a226217d605b54c4ab156285ca0020844964173299959876beaa4506b7d667"]
      - values: {"P":"1{,}2","th":70,"Tmax":150,"Ta":45}
        answers: ["sha256:141c6ecdacf7fa9ee89d83023537fd0fee7bc9f51b723ae6a96790b9f3f746d9"]
      - values: {"P":"0{,}5","th":120,"Tmax":125,"Ta":35}
        answers: ["sha256:349fa223308ffa6c9259aa270ded838187539b807e54222e6126aae3cfc58c9b"]
  - id: campo-de-una-cabecera
    tier: 2
    type: numero
    sig: 6
    prompt: |
      La especificación de {{prot}} dice que el campo *{{campo}}* (4 bits) da la longitud de la cabecera en palabras de 32 bits. Si vale
      ${{n}}$, ¿cuántos **bytes** ocupa la cabecera?
    variants:
      - values: {"prot":"TCP (RFC 9293)","campo":"Data Offset","n":8}
        answers: ["sha256:ca7c89ff6a0de498fec679ac0c3ec4a71ee9a4ce7a97ac659e394e88783d4ff0","sha256:3b42146e359fcd5bd4da3838e1729218983daee122c76b2a6a78160f9c61545c","sha256:53e48759039d1f63678174dc9b8ea7a24ec09a1c74ef5b0a34fba75708a1bbb5"]
      - values: {"prot":"TCP (RFC 9293)","campo":"Data Offset","n":5}
        answers: ["sha256:2ffd236a877e1ebc04195a08c5af522b9de5f074ca4ce608255a50b78a116ff8","sha256:540ffd0e7f73be5c452dcebf229f09d0db7db6048fd6410519eadd7efbf0b665","sha256:5f6afa5b45edf95b7d6cd58b9525ab314dcf699ca4e41927d828f8f305aa4c41"]
      - values: {"prot":"IPv4 (RFC 791)","campo":"IHL (Internet Header Length)","n":5}
        answers: ["sha256:403c563a8c4435cc3806d9d6b68ccb0c95618c25892bfd25a7acd16d3df74ae3","sha256:46c336e9f0df4a282be7bd104588abbc8f62b360e1d7cb1e34edee8804057609","sha256:065051c263819474c0db56a4c01c78ef5b0557d09a00f1a949be2411cab854e6"]
      - values: {"prot":"IPv4 (RFC 791)","campo":"IHL (Internet Header Length)","n":7}
        answers: ["sha256:a94ee035775b1796a2884935243fd99fc379800af334a8ce5ae0081c613deaac","sha256:e42a435a36656d18e9a219a30648808bda7b4dd2d5980112c8c30e89b38f6cfb","sha256:c65c5d3556f174bdc49c204b03931475dec42207f9a634e2cd949ee7f1ca368f"]
      - values: {"prot":"TCP (RFC 9293)","campo":"Data Offset","n":15}
        answers: ["sha256:cd76d4320e0103f2b8681820add14eed211f148df4ee350f860814a5280961c6","sha256:4b71b3802ebeb785229f47cc4d56098b602497aa977ea610f5ac3ceaaa98b5d3","sha256:8cd86dd5d40b87f28a2ad934fe7fd075f103524e18224b130f87e8e90af9b516"]
      - values: {"prot":"IPv4 (RFC 791)","campo":"IHL (Internet Header Length)","n":15}
        answers: ["sha256:b0cc76ceb42964bb20ee0e862d2e75f3b068c93afd34ce67f7a47370b5c28230","sha256:f0c9c7cfcc2abe2200c6d431fd1c8f376fbd72669bb0a38fad62e162064f9cc6","sha256:4861a4957130ef95339a0fd2d2a5a0091685453fd44e57c331acd7f601e1e30e"]
  - id: leer-una-gramatica-abnf
    tier: 2
    prompt: |
      Una especificación define en ABNF (RFC 5234) la regla `numero = 1*DIGIT [ "." 1*DIGIT ]` (uno o más dígitos, y opcionalmente un punto seguido de uno o más dígitos). ¿Cuántas de estas cadenas son un `numero` válido: `12`, `1.5`, `.5`, `3.`, `007`, `1.2.3`? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: semana-iso
    tier: 2
    prompt: |
      Según ISO 8601, la semana 1 de un año es la que contiene su primer jueves, y las semanas empiezan en lunes. El {{fecha}} es
      {{dia}}. ¿A qué año y semana ISO pertenece? Respuesta: en el formato `AAAA-Wss` (por ejemplo `2025-W07`).
    variants:
      - values: {"fecha":"1 de enero de 2027","dia":"viernes"}
        answers: ["sha256:00caeddcbe7221950d9560755c51b9fb862843ff6f4831ca1083539c842bb6f5"]
      - values: {"fecha":"1 de enero de 2028","dia":"sábado"}
        answers: ["sha256:a6b0a78c8a82a61b4d1cd382f1723180992291a2f68d75aefcbbab5bb92d1606"]
      - values: {"fecha":"31 de diciembre de 2026","dia":"jueves"}
        answers: ["sha256:00caeddcbe7221950d9560755c51b9fb862843ff6f4831ca1083539c842bb6f5"]
      - values: {"fecha":"31 de diciembre de 2029","dia":"lunes"}
        answers: ["sha256:ee32c2e84f43c0a9417919b7e55be5e7a7fc6d63c00e1a85e587c4a600e8a623"]
      - values: {"fecha":"29 de diciembre de 2025","dia":"lunes"}
        answers: ["sha256:5c89e970ee91397ff0f8563cff5ae788c1051bc9c4a7e281b570c358cdaa0845"]
      - values: {"fecha":"2 de enero de 2032","dia":"viernes"}
        answers: ["sha256:79df0c45c74373d3da89521892a48c41ce9d4fb02ffdaf4f8aa62ab535bba780"]
  - id: marca-de-tiempo-unix
    tier: 3
    prompt: |
      ¿Qué marca de tiempo Unix (segundos desde el 1 de enero de 1970 a las 00:00:00 UTC, sin segundos intercalares) corresponde al
      {{fecha}} a las {{hora}} UTC? Respuesta: un entero.
    variants:
      - values: {"fecha":"12 de noviembre de 2026","hora":"00:00:00"}
        answers: ["sha256:8d326cf98c84a8112ea187ecc8cd184701cc0e94a8f90d8ea2789d064fec6976"]
      - values: {"fecha":"1 de enero de 2000","hora":"00:00:00"}
        answers: ["sha256:95147b43ecfcf4cdb069a500ac1eb7b29bcb901638ac4c35a06863d526bb055b"]
      - values: {"fecha":"19 de enero de 2038","hora":"03:14:00"}
        answers: ["sha256:39ca9dfbc510a983e2ac344e0ce14a6118115cd60cc0d02c1812d83e3d1a76bd"]
      - values: {"fecha":"31 de diciembre de 1999","hora":"23:59:00"}
        answers: ["sha256:06bc496634fb25f7420f562a8ebd411d8b30e71f42e8ce7fc067371b29243781"]
      - values: {"fecha":"29 de febrero de 2024","hora":"12:00:00"}
        answers: ["sha256:15fdccb7cc550b52fcfa2fcc03a50223ff6e8ee5c6371f3ee65c5cd634fbf1d1"]
      - values: {"fecha":"2 de enero de 1970","hora":"00:00:00"}
        answers: ["sha256:b045dd9c18caa8be1e17a4b902152cc1fd292b242b7b9dd74ba8c40896239424"]
  - id: escalado-de-una-complejidad
    tier: 3
    type: numero
    sig: 3
    prompt: |
      La documentación de una función dice que tarda ${{F}}$. Si pasa de $n = 10^{{{a}}}$ a $n = 10^{{{b}}}$, ¿por cuánto se **multiplica** el
      tiempo según esa fórmula? Respuesta: un número redondeado a **2 decimales**.
    variants:
      - values: {"a":6,"b":7,"f":"n \\log n","F":"\\Theta(n \\log n)"}
        answers: ["sha256:6c625978eb76d6e329bf18c719a60558981ef5ab9d77c6b2baaad4cee0e1432c","sha256:fda1ac091e6ed46a7afcbd9a4ec78c50314f8565b47e5bd833895fc354194ba5","sha256:687fd7bb12269bf785d3793faed5afadd46639c9b0d670eede764c31bd21c693"]
      - values: {"a":3,"b":6,"f":"n \\log n","F":"\\Theta(n \\log n)"}
        answers: ["sha256:29ffefdf73ca809206aca287ca2e1982a66c607dff6dba628b4a9680ebf70560","sha256:66fd56776c811f8b5edf178794efc5f6181b3b81dca3af681451fe71ac32b5d1","sha256:5049a12b9f16f6d0b358bdc8ca6878d2d9cbbc5955da0b9f5c71aa6e0fedc544"]
      - values: {"a":4,"b":5,"f":"n^2","F":"\\Theta(n^2)"}
        answers: ["sha256:bc136f35eeace373fe895d747aa4877423d1763787a9d1df55f436e067e58eef","sha256:02c0a67dacf896628eb650f980444217ef29537c91e72bd40c6b9505825a3158","sha256:ca58e3c02f0f5d374dfbacc4392be65f6beea563db3cf61ccbbcda2747870d04"]
      - values: {"a":5,"b":6,"f":"n \\log n","F":"\\Theta(n \\log n)"}
        answers: ["sha256:6a2a9e96f916b78544e729d6dd7b9ba0519da1e0a36e6543fb4eab0252dcc1d5","sha256:09e4cb800b65dde0bd0491522fc2acdca05243efc241f6c7226e72014ab5842e","sha256:44bf1fe6d25ea36d011204c2f4011163bdbb218f048b50d7c7a8800f7caae446"]
      - values: {"a":3,"b":4,"f":"n^{1{,}5}","F":"\\Theta(n^{1{,}5})"}
        answers: ["sha256:052c43bf2c5ee1a267e2b35996af9944900d74e9b0eb014fa33a9d6512ac3f3d","sha256:ca373b9a9a48363c3aae94430910f89964ac91a574e69451d5c770f8681b24e1","sha256:56a97986f3de116871ce66917abbc677df5b96427206773b595b883bd42d15d3"]
      - values: {"a":6,"b":8,"f":"n \\log n","F":"\\Theta(n \\log n)"}
        answers: ["sha256:44fc2de56ca9cc2649babb619a13dc79053948f90b4fe789bca312ed5ddd53cb","sha256:2a31109ec50a153ec7f6c9604eb3255b3fdac645cd4c7360aaf3b358f118adbd","sha256:52a6d9705552bd1060237f07bd6b07f32fc1f11d63786b6026f52abf6049f610"]
  - id: mayusculas-en-las-rfc
    tier: 3
    prompt: |
      Una especificación que declara seguir BCP 14 escribe: «el cliente must cerrar la conexión». Según RFC 8174, ¿qué valor normativo tiene ese *must* en minúsculas?

      (a) el mismo que MUST · (b) el mismo que SHOULD · (c) ninguno especial: es lenguaje corriente · (d) significa que está prohibido

      Respuesta: una letra.
    answers: ["sha256:2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"]
  - id: expresion-regular-en-la-documentacion
    tier: 3
    prompt: |
      La documentación de un validador dice que acepta teléfonos con el patrón `\b\d{3}-\d{4}\b` (`\b` es un límite de palabra). ¿Cuántas coincidencias encuentra `re.findall` con ese patrón en el texto `Llamar al 555-1234 o al 555-98765; fax 123-4567, ref 99-1234 y 5551234.`? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: r-referencia
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cómo se usa una documentación de **referencia** (por ejemplo, una página de manual)?
    options:
      - |
        Leerla de principio a fin
      - |
        Buscar directamente la entrada que necesitas
      - |
        Empezar por el final
      - |
        Resumirla con una IA
    answers: ["sha256:d7fdace9119cc9acc3c90f020d459004a9d2c1d0158ff21e78c4268b5d5f8437"]
  - id: r-maximo-absoluto
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué es un «máximo absoluto» en una hoja de datos?
    options:
      - |
        La condición normal de funcionamiento
      - |
        Un valor típico
      - |
        Un límite que no se debe superar nunca, ni un instante
      - |
        Un valor recomendado
    answers: ["sha256:a5bc93019449519200ccdfa8ad7fb6e03f7db2cf5f6dae1acc9abc2073533949"]
  - id: r-primera-pasada
    tier: 1
    type: opcion
    review: true
    prompt: |
      En la primera pasada de lectura de un artículo (Keshav), ¿qué se lee?
    options:
      - |
        Título, resumen, introducción, títulos de sección y conclusiones
      - |
        Las demostraciones
      - |
        Solo las referencias
      - |
        Todo, palabra por palabra
    answers: ["sha256:de676b1a63c78dbb5943686a0339ae513c5db1c9cd070f2b73e5efa9cafdde40"]
  - id: r-may
    tier: 2
    type: opcion
    review: true
    prompt: |
      En una RFC, ¿qué significa MAY (en mayúsculas)?
    options:
      - |
        Obligatorio
      - |
        Prohibido
      - |
        Recomendado
      - |
        Opcional
    answers: ["sha256:f5c3161c45e307ec69541beb5576952913c025622a9c1de11df35d00fd953e14"]
  - id: r-semver-cero
    tier: 2
    review: true
    prompt: |
      Una biblioteca en la versión `1.14.3` publica un cambio que rompe la compatibilidad. ¿Qué versión le toca (SemVer)?
    answers: ["sha256:f22abd6773ab232869321ad4b1e47ac0c908febf4f3a2bd10c8066140f741261"]
  - id: r-orden-texto
    tier: 2
    type: opcion
    review: true
    prompt: |
      Según SemVer, ¿qué relación hay entre las versiones `1.9.0` y `1.10.0`?
    options:
      - |
        $1.10.0$ es menor que $1.9.0$
      - |
        $1.9.0$ es menor que $1.10.0$
      - |
        Son iguales
      - |
        No se pueden comparar
    answers: ["sha256:089c91ca9e8dc489f8fc968f98d6c948c5adb4bd18d174fa53cae3d5ac9c5a78"]
---

# Lectura técnica: manuales, RFC y estándares, hojas de datos, artículos y verificación de fuentes

La mayor parte de lo que un profesional técnico necesita saber no está en un libro de texto: está en una página de manual, una RFC, la
documentación de una biblioteca, la hoja de datos de un componente o un artículo de investigación. Leer esos documentos con rapidez y sin
malinterpretarlos es una habilidad que se aprende, y es la que te permitirá seguir avanzando sin un profesor (y sin una IA que te lo
resuma, que es justo lo que Exodus te pide evitar durante el estudio). Este nodo enseña la estructura y las convenciones de cada tipo de
documento técnico, cómo extraer de ellos lo que importa y cómo buscar y verificar fuentes.

## Objetivos

Al terminar sabrás:

1. Orientarte en las páginas de manual de Linux (secciones, estructura) y en la documentación de una API.
2. Leer una RFC: su estado, las palabras clave normativas (BCP 14) y una gramática ABNF.
3. Leer una hoja de datos: máximos absolutos frente a condiciones recomendadas, valores típicos, curvas y condiciones de prueba, cálculo térmico.
4. Leer un artículo de investigación con el método de las tres pasadas.
5. Buscar y verificar fuentes: primarias y secundarias, DOI, preprints, erratas, versiones de la documentación.
6. Manejar las convenciones que aparecen en toda la documentación: versionado semántico, fechas ISO 8601 y tiempo Unix.

## Qué debes dominar antes

[[tro-razonamiento-cientifico]] (evaluar evidencia, unidades) y [[prog-terminal-linux-git]] (la terminal y `man`).

> [!question] Test de entrada
> 1. ¿Qué orden muestra la documentación de otra orden en la terminal?
> 2. ¿Qué diferencia hay entre una fuente primaria y una secundaria?
> 3. ¿Qué día de la semana es hoy en formato ISO 8601 (lunes = 1)?
>
> Respuestas: `man`; la primaria es el documento original (el artículo, el estándar, el código), la secundaria lo resume o interpreta;
> depende del día: el lunes es 1 y el domingo 7.

## 1. Para qué sirve

- **Programar y administrar**: casi todos los errores de uso de una función se evitan leyendo su sección RETURN VALUE y ERRORS.
- **Implementar protocolos y formatos**: interoperar exige cumplir los MUST de una RFC o de un estándar, no lo que hace «la mayoría».
- **Electrónica**: un componente que funciona en el banco puede fallar en verano si no se leyó la curva térmica.
- **Investigación y aprendizaje continuo**: el conocimiento nuevo sale primero en artículos; las ramas N5 y N6 de Exodus se apoyan en ellos.
- **Seguridad**: los avisos de fallos de seguridad (los CVE), los cambios de versión y las erratas de los estándares son
  documentos técnicos.

## 2. Tipos de documentación y cómo leerlos

> [!practico]
> No se lee igual una novela que un diccionario. La documentación técnica tiene «novelas» (tutoriales que se leen de
> principio a fin) y «diccionarios» (referencias en las que solo buscas la entrada que necesitas). El error más común es
> intentar leer un diccionario seguido, o buscar una explicación en un diccionario.


No todo documento se lee de principio a fin. Conviene distinguir cuatro intenciones: un **tutorial** enseña con un ejemplo guiado; una
**guía práctica** resuelve una tarea concreta; una **referencia** describe con exactitud cada elemento (una página de manual, una tabla de
una API); una **explicación** cuenta el porqué y el diseño. Para aprender, tutorial y explicación; para trabajar, guía y referencia. Una
referencia se **consulta** (se busca la entrada exacta), no se lee seguida.

Antes de leer cualquier documento técnico, comprueba **a qué versión** se refiere: la documentación de Python 3.12 no es la de 3.8, y una
RFC puede estar **obsoleta**.

## 3. Páginas de manual

> [!practico]
> Casi todas las órdenes y funciones de Linux traen su propio manual: escribe `man ls` en la terminal. Todas las páginas tienen
> las mismas partes en el mismo orden, como las fichas de un catálogo: qué hace, cómo se escribe y, lo más importante para
> que un programa no falle, **qué devuelve cuando algo sale mal**.


Las páginas de manual de Linux se organizan en **secciones** numeradas (man-pages(7)):

| Sección | Contenido | Ejemplos |
|:---:|---|---|
| 1 | órdenes de usuario | `ls(1)`, `grep(1)` |
| 2 | llamadas al sistema (envoltorios de operaciones del núcleo) | `open(2)`, `fork(2)` |
| 3 | funciones de biblioteca | `printf(3)`, `malloc(3)` |
| 4 | archivos especiales (dispositivos) | `null(4)` |
| 5 | formatos de archivo y configuración | `crontab(5)`, `passwd(5)` |
| 7 | visiones generales, convenciones, protocolos | `tcp(7)`, `signal(7)` |
| 8 | administración del sistema | `mount(8)` |

Un mismo nombre puede estar en varias: `printf(1)` es la orden de la shell y `printf(3)` la función de C; `man 3 printf` elige la sección.
`man -k palabra` busca en las descripciones.

Cada página sigue una estructura fija. **NAME** y **SYNOPSIS** (la firma exacta y los `#include` necesarios), **DESCRIPTION**, **RETURN VALUE**
(qué devuelve en éxito y en error), **ERRORS** (los valores de `errno` posibles y su causa), **NOTES** y **BUGS** (sorpresas conocidas),
**EXAMPLES** y **SEE ALSO**. Ejemplo resuelto: en `open(2)`, RETURN VALUE dice que devuelve un descriptor o $-1$ con `errno` puesto; ERRORS lista,
entre otros, `ENOENT` (no existe el archivo) y `EACCES` (permiso denegado). Un programa correcto comprueba el $-1$ y trata cada error que le
importe: es la diferencia entre «funciona en mi máquina» y «funciona».

## 4. RFC y estándares

> [!practico]
> Internet funciona porque millones de programas distintos siguen las **mismas reglas**, escritas en documentos públicos
> llamados RFC. Son como el reglamento de un deporte: si un árbitro (un programa) se inventa una regla, el partido se rompe.
> En ellos, unas pocas palabras en MAYÚSCULAS tienen un significado exacto: MUST es «obligatorio» y SHOULD «muy recomendado».


Las **RFC** (*Request for Comments*) son los documentos de la IETF que definen los protocolos de Internet. Cada una tiene número fijo (nunca se
modifica: se publica otra que la **actualiza** o la **deja obsoleta**), una **categoría** (*Standards Track*, *Best Current Practice*,
*Informational*…) y **erratas** verificadas. En la cabecera aparecen «Obsoletes» y «Updated by»: TCP es hoy RFC 9293, que dejó obsoleta la RFC 793.

**Palabras clave (BCP 14).** RFC 2119 fija el significado de **MUST** (requisito absoluto), **MUST NOT**, **SHOULD** (recomendado: puede haber
razones válidas para no hacerlo, pero hay que entender y sopesar las consecuencias), **SHOULD NOT** y **MAY** (opcional). RFC 8174 aclara que
solo tienen ese significado especial **en mayúsculas**: un *must* en minúsculas es lenguaje corriente.

**Gramáticas ABNF** (RFC 5234). Los formatos se definen con reglas como

```text
numero  = 1*DIGIT [ "." 1*DIGIT ]
fecha   = 4DIGIT "-" 2DIGIT "-" 2DIGIT
metodo  = "GET" / "POST" / "PUT"
```

donde `/` separa alternativas, `[ ]` marca lo opcional, `n*m` repite entre $n$ y $m$ veces (`1*` = una o más, `4DIGIT` = exactamente cuatro) y
`DIGIT` es una regla básica del propio estándar (`0` a `9`). Leer la gramática responde con exactitud preguntas como «¿es válido `3.`?» (no:
tras el punto hace falta al menos un dígito).

Otros organismos (ISO, IEC, IEEE, ITU, W3C, el comité de C) publican estándares con estructura parecida: alcance, referencias normativas,
definiciones y el texto normativo, separado de las notas y los ejemplos **informativos**.

## 5. Hojas de datos

> [!practico]
> La hoja de datos es el «manual de instrucciones» que el fabricante da de cada componente electrónico. Lo crucial es separar
> dos cosas: los **límites que pueden destruirlo** si los pasas (aunque sea un instante) y las **condiciones en las que funciona
> bien**. Diseñar justo en el límite es como conducir siempre a la velocidad máxima de un coche: funciona hasta que no.


La hoja de datos (*datasheet*) de un componente es su contrato. Las secciones que más importan:

- **Máximos absolutos** (*absolute maximum ratings*): límites que **no** se deben superar nunca, ni un instante; superarlos puede destruir el
  componente. No son condiciones de funcionamiento.
- **Condiciones recomendadas de funcionamiento**: el rango en que el fabricante **garantiza** las especificaciones.
- **Características eléctricas**: tablas con valores **mínimo**, **típico** y **máximo**, siempre con sus **condiciones de prueba** (temperatura,
  tensión, corriente). Se diseña con los mínimos y máximos; el típico es orientativo.
- **Curvas**: cómo cambian los parámetros con la temperatura o la frecuencia. Mira los ejes y las condiciones.
- **Datos térmicos**: la resistencia térmica unión-ambiente $\theta_{JA}$ (en °C/W) da la temperatura de la unión: $T_J = T_A + P\,\theta_{JA}$.

**Ejemplo resuelto 1.** Un regulador lineal baja de $12$ V a $5$ V con $0{,}3$ A: disipa $P = (12 - 5)\cdot0{,}3 = 2{,}1$ W. Con $\theta_{JA} = 65$ °C/W y
$T_A = 30$ °C, $T_J = 30 + 2{,}1\cdot65 = 166{,}5$ °C, por encima del máximo habitual de $125$–$150$ °C: hace falta un disipador, una entrada más
baja o un regulador conmutado. La hoja de datos lo decía; solo había que hacer la cuenta ([[ing-circuitos-dc-ac]]).

## 6. Artículos de investigación

> [!practico]
> Un artículo científico no se lee como un libro, de la primera a la última página. Primero se le echa un vistazo rápido
> (título, resumen, conclusiones) para decidir si interesa; si interesa, se lee con calma mirando bien las figuras; y solo si
> es importante para ti se reconstruye entero, como si tuvieras que repetir el trabajo.


Un artículo sigue casi siempre la estructura **IMRaD**: introducción (problema y estado del arte), métodos, resultados y discusión, más el
resumen (*abstract*), las figuras y las referencias. Keshav (2007) propone leerlo en **tres pasadas**:

1. **Primera pasada** (5-10 minutos): título, resumen, introducción, títulos de sección, conclusiones y una ojeada a las referencias. Debes poder
   decir de qué tipo de artículo se trata, en qué contexto se sitúa, si sus supuestos parecen válidos, cuáles son sus contribuciones y si está
   bien escrito. Muchas veces basta con esto para decidir no seguir.
2. **Segunda pasada** (hasta una hora): leer con cuidado, fijándose en figuras y tablas (ejes, barras de error, tamaño de muestra), anotando lo que
   no se entiende y las referencias que conviene leer, pero sin entrar en las demostraciones.
3. **Tercera pasada** (varias horas): **reconstruir** el trabajo mentalmente, con los mismos supuestos, como si hubiera que reimplementarlo. Así
   aparecen los supuestos ocultos, los errores y las ideas para trabajo futuro.

Para empezar en un tema nuevo: busca un artículo de **revisión** (*survey*) reciente o unos pocos artículos muy citados, y sigue sus referencias.

## 7. Buscar y verificar fuentes

> [!practico]
> Ante una afirmación importante, pregunta: **¿quién lo dijo primero, y cómo lo sabe?** Un blog que cita a otro blog que cita
> un estudio no vale lo que el estudio. Ve al original, comprueba la fecha y la versión, y desconfía de cualquier dato que
> solo aparezca en un sitio. Tampoco te fíes de una IA: puede inventarse referencias con total seguridad.


- **Primaria, secundaria, terciaria.** La fuente primaria es el original (el estándar, el artículo, el código fuente, el conjunto de datos); una
  secundaria lo interpreta (un libro de texto, un artículo de revisión, un blog); una terciaria la recopila (una enciclopedia). Cita y comprueba
  siempre en la primaria cuando el detalle importa; usa las demás como mapa.
- **DOI.** El *Digital Object Identifier* identifica de forma permanente un artículo: `10.1145/362384.362685` tiene el **prefijo** `10.1145` (quien lo
  registró, aquí la ACM) y un sufijo propio; `https://doi.org/` + DOI lleva al documento.
- **Preprints.** arXiv y servidores similares publican trabajos **antes** (o sin) revisión por pares: útiles y rápidos, pero sin ese filtro.
- **Retractaciones y erratas.** Un artículo puede corregirse o retirarse; un estándar, tener erratas. Comprueba el estado actual antes de basarte en él.
- **Coherencia y triangulación.** Una afirmación importante debe aparecer en varias fuentes independientes; si solo la repite una cadena de
  blogs que se citan entre sí, sigue la cadena hasta el origen.
- **Fechas y versiones.** La documentación de la versión que usas, no la de la última. Los números, la fecha de consulta.
- **Generadores de texto.** Un modelo de lenguaje puede inventar referencias, versiones o parámetros con total aplomo. En Exodus no se usan
  durante el estudio; fuera de él, nada de lo que digan sustituye a la fuente primaria comprobada.

## 8. Convenciones que aparecen en todas partes

> [!practico]
> Tres convenciones aparecen en todo software: el número de versión «$2.3.7$» (cuánto ha cambiado un programa y si romperá lo que
> ya tenías), las fechas «$2026$-$11$-$12$» (año, mes, día: se ordenan bien y no se confunden entre países) y el «tiempo Unix» (un
> número de segundos desde 1970, que es como los ordenadores guardan la hora).


**Versionado semántico (SemVer 2.0.0).** `MAYOR.MENOR.PARCHE`: se incrementa MAYOR al romper la compatibilidad de la API pública (y MENOR y PARCHE
vuelven a 0), MENOR al añadir funciones compatibles (PARCHE vuelve a 0), y PARCHE al corregir errores compatibles. Las versiones previas llevan
un guion (`1.0.0-rc.1`) y tienen **menor** precedencia que la versión normal; sus identificadores se comparan uno a uno, **numéricamente** si son
números (`beta.2` < `beta.11`) y **lexicográficamente** si no (`alpha` < `beta` < `rc`). Según SemVer, la versión mayor `0` (`0.y.z`) es de desarrollo
inicial: cualquier cosa puede cambiar en cualquier momento.

**Fechas ISO 8601.** `2026-11-12T08:30:00Z`: año-mes-día (se ordena bien como texto), `T`, hora en 24 horas y la zona (`Z` = UTC, o `+01:00`). Las
**semanas ISO** empiezan en lunes y la semana 1 es la que contiene el primer jueves del año, así que los primeros días de enero pueden pertenecer a
la última semana del año anterior.

**Tiempo Unix.** Segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC, sin contar los segundos intercalares. Es como guardan el
tiempo casi todos los sistemas; un entero con signo de 32 bits se desborda el 19 de enero de 2038 (de ahí que se usen 64 bits).

```python
import datetime as dt
import re


def clave_semver(v):
    """Clave de ordenación de SemVer 2.0.0 (sin metadatos de compilación)."""
    nucleo, _, previa = v.partition("-")
    base = tuple(int(x) for x in nucleo.split("."))
    if not previa:
        return (base, 1, ())
    ids = tuple((0, int(p), "") if p.isdigit() else (1, 0, p) for p in previa.split("."))
    return (base, 0, ids)


assert sorted(["2.0.0", "2.0.0-rc.1", "1.10.0", "1.9.3"], key=clave_semver) == ["1.9.3", "1.10.0", "2.0.0-rc.1", "2.0.0"]

# Semanas ISO: el 1 de enero de 2021 (viernes) pertenece a la semana 53 de 2020.
assert dt.date(2021, 1, 1).isocalendar()[:2] == (2020, 53)

# Tiempo Unix y el límite de 2038 para enteros de 32 bits con signo.
limite = dt.datetime(1970, 1, 1, tzinfo=dt.timezone.utc) + dt.timedelta(seconds=2**31 - 1)
assert limite.isoformat() == "2038-01-19T03:14:07+00:00"

# La regla ABNF  fecha = 4DIGIT "-" 2DIGIT "-" 2DIGIT  como expresión regular.
fecha = re.compile(r"[0-9]{4}-[0-9]{2}-[0-9]{2}")
assert [bool(fecha.fullmatch(s)) for s in ["2026-11-12", "2026-1-12", "26-11-12"]] == [True, False, False]
```

## 9. Errores típicos

- Leer la documentación de otra versión del programa o de una RFC obsoleta.
- Tratar un valor **típico** de una hoja de datos como garantizado, o diseñar cerca de los máximos absolutos.
- Ignorar las secciones RETURN VALUE y ERRORS de una función.
- Dar a un *should* o un *must* en minúsculas el valor normativo de BCP 14 (o, al revés, tratar un SHOULD como opcional sin pensarlo).
- Citar una fuente secundaria (o una IA) sin comprobar la primaria; dar por revisado un preprint.
- Ordenar versiones como texto (`1.10.0` < `1.9.0`) o comparar fechas en formatos ambiguos (`03/04/2026`).
- Leer un artículo de principio a fin la primera vez en lugar de hacer una primera pasada.

## 10. Resumen

- Referencia se consulta; tutorial y explicación se leen. Comprueba siempre la versión.
- `man`: secciones 1, 2, 3, 5, 7, 8; SYNOPSIS, RETURN VALUE, ERRORS.
- RFC: número fijo, obsoletas y actualizadas, erratas; MUST/SHOULD/MAY solo en mayúsculas; ABNF.
- Hojas de datos: máximos absolutos frente a recomendados; mín/típ/máx con condiciones; $T_J = T_A + P\theta_{JA}$.
- Artículos: IMRaD y tres pasadas.
- Fuentes: primaria, DOI, preprints, erratas, triangulación. SemVer, ISO 8601 y tiempo Unix.

## Repaso: lo que debe quedarte dentro de un mes

1. `man 2 open` y `man 3 printf`: qué hay en cada sección.
2. MUST, SHOULD y MAY en mayúsculas; un *must* en minúsculas no obliga.
3. Máximo absoluto no es condición de funcionamiento; diseña con mínimos y máximos.
4. Tres pasadas para leer un artículo.
5. SemVer: mayor rompe, menor añade, parche corrige; las versiones previas van antes.

## Siguiente

Todas las ramas: a partir de los nodos de grado se remite cada vez más a manuales, estándares y artículos originales.
El troncal termina con [[prog-pensamiento-computacional]], [[prog-python-fundamentos]] y [[prog-terminal-linux-git]].
