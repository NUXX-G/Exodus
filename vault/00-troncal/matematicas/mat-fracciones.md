---
id: mat-fracciones
title: "Fracciones: significado, equivalencia, comparación y las cuatro operaciones"
area: matematicas
trunk_level: 2
prerequisites: [mat-divisibilidad, mat-numeros-enteros]
academic_sources:
  - "Matemáticas 1.º de ESO (LOMLOE), capítulo 5: «Fracciones», secciones 1 (interpretación y términos), 2.1-2.4 (suma y resta con igual y distinto denominador, fracciones equivalentes, propiedades), 3.1-3.4 (reducción, producto, propiedades y cociente) y 4.1-4.3 (comparación, representación, descomposición y fracciones negativas). Apuntes Marea Verde, rev. 11/08/2024. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/1ESO/1%2005%20Fracciones.pdf"
  - "Matemáticas 3.º de ESO (LOMLOE), capítulo 1: «Números racionales» (operaciones combinadas y problemas con fracciones). Apuntes Marea Verde, rev. 27/08/2022. https://www.apuntesmareaverde.org.es/grupos/mat/LOMLOE/3ESO/01%20Racionales%203.pdf"
hints:
  - "Concepto: a/b son a partes de las b iguales en que se divide la unidad. Multiplicar arriba y abajo por el mismo número no cambia la fracción. Para sumar hace falta el mismo denominador (las partes deben ser del mismo tamaño); para multiplicar, se multiplica arriba por arriba y abajo por abajo; dividir es multiplicar por la inversa."
  - "Herramienta: busca el mcm de los denominadores para sumar; simplifica dividiendo por el mcd; en los problemas, dibuja una barra partida en partes y razona sobre lo que queda en cada paso."
  - "Documentación: Marea Verde 1.º ESO, cap. 5; 3.º ESO, cap. 1."
exercises:
  - id: fraccion-de-una-cantidad
    tier: 1
    type: numero
    sig: 10
    prompt: |
      Calcula $\dfrac{{{a}}}{{{b}}}$ de ${{N}}$.
    variants:
      - values: {"a":3,"b":5,"N":40}
        answers: ["sha256:c5440ebf96752e4cb0da3e0f157061e14f49473741c5d377f8e5216216e5c0c4","sha256:4abf78d33aec1b7db45db5b5d026e7da682ac90f21ec722e0bccbf5b45a1cd2b","sha256:b4d0dfabcdb27d9eb5d08ab1736dc38e925c37c0e4c95b8db2018709767a12b5"]
      - values: {"a":5,"b":8,"N":96}
        answers: ["sha256:97f4596f4c78a1327f262f2d55af2240afc492e35c225cba3a9298b92aa2f6cc","sha256:857c0b6c46ff23a12ba6a1e3b109ad46ef20ed83fb2016d45888767db0c0715e","sha256:e42d742c0d8f68300a2a8d0e18194248640bea38fd86f9f35af3eb2d9750660d"]
      - values: {"a":7,"b":12,"N":180}
        answers: ["sha256:ebd2727d0bca1d7d60fe1a1e96d06159170fd7dc27a8e4933e3baecb8ee22e7c","sha256:55c1b052fbfba413e29c8ec6ce1378da37dc715712a78a6239920ece27eacd35","sha256:abf97f6beb912bebf48ebac5bc168552b3af0e5a9c88c9e9fc745795dd4dff30"]
      - values: {"a":2,"b":9,"N":135}
        answers: ["sha256:cc724d003f07608c9f627e8b762ab0f311510b49f83c2d33b5726e47ac0d93ec","sha256:279961fa548453fef7ad2063cd49778a90e87233cbe57ebf04c869b44091531b","sha256:52f80253f302684fd21cbdd167764ff4aebfe8610a557a23d6f601d0bc65ced6"]
      - values: {"a":4,"b":7,"N":210}
        answers: ["sha256:1dfb48675b0e02e7322c326a63153e7f7c48cdfc031fad1fd4af24391a7c4d5a","sha256:3a1c28c37b2927ec16f2ea3d15f49a8d331e7dde097c236ad4b42ac05c88129b","sha256:2ac6c9cea0fd08d5f7e42886571f78cf55b9f7fb4815f7669b4caa3151f01638"]
      - values: {"a":11,"b":20,"N":300}
        answers: ["sha256:f00b1bd9f434f30d71707460ff0121545094a3e68828fa80760a3f451e73b952","sha256:02231525c60b69b803e7217aaae68dc98e88f0cb2ce711da4a31b125d12effce","sha256:1f06c9dac95a80e37dc315d8314e3b0d2b832471f5797a7add102a643d098180"]
  - id: simplificar-fraccion
    tier: 1
    prompt: |
      Simplifica $\dfrac{{{a}}}{{{b}}}$ hasta obtener una fracción irreducible. Respuesta: `p/q`.
    variants:
      - values: {"a":36,"b":48}
        answers: ["sha256:5132a20379415fe98f3a0700afc2a901e9b01af839b5454a8659152f0782c223"]
      - values: {"a":45,"b":75}
        answers: ["sha256:e8692ca200b54ddada768e71960a0511416137a374776dcfd1aa8305d0a96fa3"]
      - values: {"a":84,"b":126}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
      - values: {"a":150,"b":210}
        answers: ["sha256:a524479da1a7b96f24eecaa8da1cf07eb7fb144cdca7625825bffb3bdefd0c37"]
      - values: {"a":99,"b":165}
        answers: ["sha256:e8692ca200b54ddada768e71960a0511416137a374776dcfd1aa8305d0a96fa3"]
      - values: {"a":128,"b":320}
        answers: ["sha256:0b9db2ecfb8de65fb248232d099982a827055c98d6372e9b4e1fa81d98dc1cc2"]
  - id: termino-que-falta
    tier: 1
    type: numero
    sig: 10
    prompt: |
      ¿Qué número hay que poner en el hueco para que las fracciones sean equivalentes? $\dfrac{{{a}}}{{{b}}} = \dfrac{{{c}}}{\square}$
    variants:
      - values: {"a":3,"b":7,"c":12}
        answers: ["sha256:19eb590aa8b088beeca19c47a4b51c7162b5fba2e9b67ef787bfbca6d69c3814","sha256:95a15b9afba01c2c4cdf671a07f8b69467b8516e23d1e4aafdb5ad2d1f8bd3e8","sha256:d0a197c99cac7fafc176b04e856a008f516962d63104ee2f282bab5cac775a89"]
      - values: {"a":5,"b":6,"c":35}
        answers: ["sha256:2483daa12030e6bd75cea3ab065a829ec6888fd2902ba307cad010d89b3b981d","sha256:00a75e32e0061c2462713f29c3ea059c56ba57f7c4cf0a32c3a26119811fc6d8","sha256:b153f859abc4366c04e8783e7e6369b387f31210080e962fc7227d665eba5499"]
      - values: {"a":4,"b":9,"c":28}
        answers: ["sha256:6c596c998e14b6f6e027e2ee6a87c599cdc6270e55e1cab7feb920dc8125b6fd","sha256:7ac5454b9599985a5b12dca93509d6967cd8b64cac922a521af8a22de710fa3b","sha256:5555cd94d0f0f4873288c6a9d443ebc2d3f76a106c249640999b610921e94e1a"]
      - values: {"a":2,"b":15,"c":10}
        answers: ["sha256:ac14797f52a9561c8dbe34ba33500e16c17b0192e8bcc5de03c243b7e362d51a","sha256:3b86a94f60e7fa24f9e9a2aa342b83ebdf8ad5427e7737b2f5be09d639e10c9b","sha256:7e8c1fff303722151e31b1d35de23bcb8f98f07a20fc9775b7591151e835e8fd"]
      - values: {"a":7,"b":8,"c":63}
        answers: ["sha256:e85975f2da1c22b57c9b7f66807e238e33762927ef936210e4775e20e3fac640","sha256:bcd11f040575b20f789dd3402fbf664cdc73a9b23c1a1a1957ed414adf3d8e9c","sha256:89adf3d3af30a61a8126ba51fd94f8b3b0f81ac740c1f7b8caf64da8c97ec4f1"]
      - values: {"a":9,"b":4,"c":54}
        answers: ["sha256:42ec60e0ec32543f8448ff08795db9912ff38acd72f87dc3a0cf44d695402f35","sha256:7a9eada2f487cf4cf0857044aff92ac7b012f47a7c28483ab8715e1b55f0e742","sha256:9fc4e4f93279b60f324cd14cd38074fdd1444ebe7b476c3aa28808cad81005d4"]
  - id: ordenar-fracciones
    tier: 2
    prompt: |
      Ordena de menor a mayor: ${{L}}$. Respuesta: las fracciones separadas por `;`, escritas `p/q`.
    variants:
      - values: {"L":"\\dfrac{3}{4},\\ \\dfrac{5}{8},\\ \\dfrac{2}{3}"}
        answers: ["sha256:d6cda2815c2e099e2bbb9ca87cea823bb9a33c1199a8d5b9469bbdc55ce27987"]
      - values: {"L":"\\dfrac{7}{10},\\ \\dfrac{3}{5},\\ \\dfrac{5}{7}"}
        answers: ["sha256:a06d8a5535ee26a77e94bcb23c0a7229ca410d824481e65e59041ef21fb6774e"]
      - values: {"L":"\\dfrac{5}{6},\\ \\dfrac{7}{9},\\ \\dfrac{11}{12}"}
        answers: ["sha256:f37487bc4f299ff5edee2197e3d47668b684aeb98c998b7b1d5a616627882e6a"]
      - values: {"L":"\\dfrac{2}{5},\\ \\dfrac{3}{8},\\ \\dfrac{4}{11}"}
        answers: ["sha256:46d6c4807815e7b44a0d7a1495a35e7a9352c2384d6e13e9fe10c4c8d95bc8e2"]
      - values: {"L":"\\dfrac{9}{10},\\ \\dfrac{8}{9},\\ \\dfrac{10}{11}"}
        answers: ["sha256:ed85869369b8b68d19f048634b867313299cae1ee026eb14cb5177f553282811"]
      - values: {"L":"\\dfrac{1}{3},\\ \\dfrac{2}{7},\\ \\dfrac{3}{10}"}
        answers: ["sha256:65086c46e46c7d4769d553ef718c89b8c2c58ce6d292951aeb3b97eff2f81f63"]
  - id: sumar-y-restar-fracciones
    tier: 1
    prompt: |
      Calcula y simplifica: ${{p}} {{op}} {{q}}$. Respuesta: `p/q` (irreducible).
    variants:
      - values: {"p":"\\dfrac{2}{3}","op":"+","q":"\\dfrac{3}{4}"}
        answers: ["sha256:426cc2a5ba30d12079f3b46f1fd3f77f513de124946d0b9e958f423a77d215c0"]
      - values: {"p":"\\dfrac{5}{6}","op":"-","q":"\\dfrac{2}{9}"}
        answers: ["sha256:240aba76e7b16aef4fcca9d89a4612f3eed6b587c17a981b536a039653d23a40"]
      - values: {"p":"\\dfrac{7}{10}","op":"+","q":"\\dfrac{4}{15}"}
        answers: ["sha256:90e3ecb4f1352fad02f6db03fae08f1be366d9461ad8a3d37a451b5a8ea60415"]
      - values: {"p":"\\dfrac{3}{8}","op":"-","q":"\\dfrac{5}{12}"}
        answers: ["sha256:1ce4856c4a21fbc42febc2cb8beef69c54cb9b95582ab48e88802fe9b61d206e"]
      - values: {"p":"\\dfrac{1}{6}","op":"+","q":"\\dfrac{3}{10}"}
        answers: ["sha256:170b6fbc9474e95f607d477059c3c48ff15439a74041d912f83b384ab1e15820"]
      - values: {"p":"\\dfrac{11}{12}","op":"-","q":"\\dfrac{7}{18}"}
        answers: ["sha256:c2e69355fa15adfd076805e858bdcad8cfecb83cabb89ffeb1e6cf51cff9ffd2"]
  - id: multiplicar-fracciones
    tier: 1
    prompt: |
      Calcula y simplifica: ${{p}} \cdot {{q}}$. Respuesta: `p/q` (o un entero).
    variants:
      - values: {"p":"\\dfrac{4}{9}","q":"\\dfrac{15}{8}"}
        answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
      - values: {"p":"\\dfrac{7}{12}","q":"\\dfrac{6}{35}"}
        answers: ["sha256:9d5d5c10c5dfaa296101bfabcab5d27d45675232f717d055b60662578d31e64c"]
      - values: {"p":"\\dfrac{5}{6}","q":"\\dfrac{9}{10}"}
        answers: ["sha256:5132a20379415fe98f3a0700afc2a901e9b01af839b5454a8659152f0782c223"]
      - values: {"p":"\\dfrac{2}{3}","q":"\\dfrac{3}{2}"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"p":"\\dfrac{14}{15}","q":"\\dfrac{10}{21}"}
        answers: ["sha256:2b4a3397494a9e1bf65517b40760ebeb3313a738a9eabd4e73f0ddbf1df441a5"]
      - values: {"p":"\\dfrac{8}{25}","q":"\\dfrac{5}{12}"}
        answers: ["sha256:3d9e0949dfd88625c2042dd6d84f515e48907b31a7e8c4232c891613ddce9e00"]
  - id: dividir-fracciones
    tier: 1
    prompt: |
      Calcula y simplifica: ${{p}} : {{q}}$. Respuesta: `p/q` (o un entero).
    variants:
      - values: {"p":"\\dfrac{5}{8}","q":"\\dfrac{3}{4}"}
        answers: ["sha256:6527243b137e313aee168954360944e5a3bdd5e700e74a5b1ac6a44bd24dd652"]
      - values: {"p":"\\dfrac{9}{10}","q":"\\dfrac{6}{5}"}
        answers: ["sha256:5132a20379415fe98f3a0700afc2a901e9b01af839b5454a8659152f0782c223"]
      - values: {"p":"\\dfrac{2}{7}","q":"\\dfrac{4}{21}"}
        answers: ["sha256:6d27ca189b30af4f85eab024881ab00a37ef4bab14248c18349e900f40510397"]
      - values: {"p":"\\dfrac{3}{5}","q":"\\dfrac{9}{10}"}
        answers: ["sha256:484aa6ccd17c9fe96eb955b9b56ed0c883b275301479deec1b817afe2abdaf72"]
      - values: {"p":"\\dfrac{12}{7}","q":"\\dfrac{3}{14}"}
        answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
      - values: {"p":"\\dfrac{5}{9}","q":"\\dfrac{10}{3}"}
        answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
  - id: combinadas-con-fracciones
    tier: 2
    prompt: |
      Calcula respetando la jerarquía y simplifica: ${{e}}$. Respuesta: `p/q` (o un entero).
    variants:
      - values: {"e":"\\dfrac12 + \\dfrac23 \\cdot \\dfrac34"}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"e":"\\left(\\dfrac12 + \\dfrac23\\right) \\cdot \\dfrac34"}
        answers: ["sha256:fc5755dd88ccc67dae22b275accd73534cff79d13189ef7c90da6db72f075178"]
      - values: {"e":"2 - \\dfrac35 : \\dfrac{9}{10}"}
        answers: ["sha256:88a09c48f589386b2d18d8be987cffe6a938c9e22314f3542082f7f6243efdb5"]
      - values: {"e":"\\dfrac56 - \\dfrac13 \\cdot \\left(1 - \\dfrac14\\right)"}
        answers: ["sha256:2d0ba250dbdb3e61c40f6500fcb6cd35f793a14e94bacab7197ab693092f3521"]
      - values: {"e":"\\left(\\dfrac34 - \\dfrac12\\right) : \\left(\\dfrac23 + \\dfrac16\\right)"}
        answers: ["sha256:088ae5cc7815cf98be130c0421b8ba0cb92125b5a50045e0aff058e5e04bfe94"]
      - values: {"e":"3 \\cdot \\dfrac29 + \\dfrac{5}{12} : \\dfrac58"}
        answers: ["sha256:88a09c48f589386b2d18d8be987cffe6a938c9e22314f3542082f7f6243efdb5"]
  - id: cuanto-tenia
    tier: 3
    prompt: |
      Ana gasta ${{pq}}$ de su dinero en un libro y después ${{rs}}$ de lo que le quedaba en una camiseta. Al final le quedan ${{Q}}$ €.
      ¿Cuánto dinero tenía al principio?
    variants:
      - values: {"pq":"\\dfrac{1}{3}","rs":"\\dfrac{1}{2}","Q":40}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"pq":"\\dfrac{2}{5}","rs":"\\dfrac{1}{3}","Q":36}
        answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
      - values: {"pq":"\\dfrac{1}{4}","rs":"\\dfrac{3}{5}","Q":54}
        answers: ["sha256:7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405"]
      - values: {"pq":"\\dfrac{3}{8}","rs":"\\dfrac{2}{5}","Q":45}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"pq":"\\dfrac{1}{6}","rs":"\\dfrac{1}{4}","Q":75}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"pq":"\\dfrac{2}{7}","rs":"\\dfrac{3}{10}","Q":70}
        answers: ["sha256:dbae772db29058a88f9bd830e957c695347c41b6162a7eb9a9ea13def34be56b"]
  - id: fraccion-de-fraccion
    tier: 2
    prompt: |
      En una clase de ${{N}}$ estudiantes, ${{cd}}$ hacen deporte, y de ellos ${{ab}}$ juegan al baloncesto. ¿Cuántos juegan al
      baloncesto?
    variants:
      - values: {"ab":"\\dfrac{2}{3}","cd":"\\dfrac{3}{4}","N":240}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"ab":"\\dfrac{3}{5}","cd":"\\dfrac{5}{6}","N":180}
        answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
      - values: {"ab":"\\dfrac{1}{2}","cd":"\\dfrac{4}{9}","N":360}
        answers: ["sha256:48449a14a4ff7d79bb7a1b6f3d488eba397c36ef25634c111b49baf362511afc"]
      - values: {"ab":"\\dfrac{5}{7}","cd":"\\dfrac{7}{10}","N":420}
        answers: ["sha256:d29d53701d3c859e29e1b90028eec1ca8e2f29439198b6e036c60951fb458aa1"]
      - values: {"ab":"\\dfrac{3}{4}","cd":"\\dfrac{2}{9}","N":216}
        answers: ["sha256:76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"]
      - values: {"ab":"\\dfrac{4}{5}","cd":"\\dfrac{5}{8}","N":400}
        answers: ["sha256:27badc983df1780b60c2b3fa9d3a19a00e46aac798451f0febdca52920faaddf"]
  - id: numero-mixto
    tier: 1
    prompt: |
      Escribe $\dfrac{{{a}}}{{{b}}}$ como número mixto: un entero más una fracción propia con denominador ${{b}}$. Respuesta:
      `entero;numerador`.
    variants:
      - values: {"a":23,"b":5}
        answers: ["sha256:4705493788fb5f8c7e7ed1fc8f84dae22845ae13fdec95541c3ae7bd229fb945"]
      - values: {"a":47,"b":6}
        answers: ["sha256:27d5035446fd7debd92dd7e0db440f25d9b2de7e6a1662a4ab2f9b12f1d55047"]
      - values: {"a":100,"b":7}
        answers: ["sha256:89422f37d4ebac5b81530a52eb18a787bc81c7d8c83c130b6960d4fa55d1c2b5"]
      - values: {"a":31,"b":4}
        answers: ["sha256:affd7224c792f22eaeb6e2b0dc6414c6d7a6bcb18ad6eeda6f6086de7b1d1a63"]
      - values: {"a":85,"b":12}
        answers: ["sha256:43bc2a0c49952d30f7f66177268b363d564635c0cdca978aa6a3067ef8b1b92b"]
      - values: {"a":59,"b":9}
        answers: ["sha256:852d67a1c4dce9756ad0ff93bdd48460b98c50d683afc2b6177790edd407378f"]
  - id: capacidad-del-deposito
    tier: 2
    prompt: |
      Un depósito está lleno hasta ${{pq}}$ de su capacidad. Si se le añaden ${{L}}$ litros, queda lleno hasta ${{rs}}$. ¿Cuál es su
      capacidad, en litros?
    variants:
      - values: {"pq":"\\dfrac{2}{5}","rs":"\\dfrac{3}{4}","L":70}
        answers: ["sha256:27badc983df1780b60c2b3fa9d3a19a00e46aac798451f0febdca52920faaddf"]
      - values: {"pq":"\\dfrac{1}{3}","rs":"\\dfrac{5}{6}","L":90}
        answers: ["sha256:7b69759630f869f2723875f873935fed29d2d12b10ef763c1c33b8e0004cb405"]
      - values: {"pq":"\\dfrac{3}{8}","rs":"\\dfrac{7}{8}","L":60}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"pq":"\\dfrac{1}{4}","rs":"\\dfrac{2}{3}","L":50}
        answers: ["sha256:2abaca4911e68fa9bfbf3482ee797fd5b9045b841fdff7253557c5fe15de6477"]
      - values: {"pq":"\\dfrac{2}{7}","rs":"\\dfrac{5}{7}","L":39}
        answers: ["sha256:1da51b8d8ff98f6a48f80ae79fe3ca6c26e1abb7b7d125259255d6d2b875ea08"]
      - values: {"pq":"\\dfrac{3}{10}","rs":"\\dfrac{4}{5}","L":45}
        answers: ["sha256:69f59c273b6e669ac32a6dd5e1b2cb63333d8b004f9696447aee2d422ce63763"]
  - id: fracciones-con-signo
    tier: 2
    prompt: |
      Calcula y simplifica: ${{p}} {{op}} {{q}}$. Respuesta: `p/q` (con el signo delante si es negativa, por ejemplo `-3/4`).
    variants:
      - values: {"p":"\\left(-\\dfrac{3}{4}\\right)","op":"+","q":"\\dfrac{5}{6}"}
        answers: ["sha256:47ba35745effadff9e578cbc46df1652bbf082998fb90393de64b5c1f5bd1fa6"]
      - values: {"p":"\\dfrac{2}{3}","op":"-","q":"\\left(-\\dfrac{7}{9}\\right)"}
        answers: ["sha256:bfe348545647ca66590fe95f01a47d47a7464b962b04f15809d2b252a72952fe"]
      - values: {"p":"\\left(-\\dfrac{5}{8}\\right)","op":"\\cdot","q":"\\left(-\\dfrac{4}{15}\\right)"}
        answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
      - values: {"p":"\\left(-\\dfrac{9}{10}\\right)","op":":","q":"\\dfrac{3}{5}"}
        answers: ["sha256:2e96b5de46e5936d858bafc1abe4050882dbab1e54fffbc55fd98b977356c938"]
      - values: {"p":"\\dfrac{7}{12}","op":"-","q":"\\dfrac{5}{4}"}
        answers: ["sha256:527a7f0844472f3cc7360c10db36011507264f496f7e8f147317b11256624805"]
      - values: {"p":"\\left(-\\dfrac{2}{5}\\right)","op":"\\cdot","q":"\\dfrac{15}{4}"}
        answers: ["sha256:2e96b5de46e5936d858bafc1abe4050882dbab1e54fffbc55fd98b977356c938"]
  - id: fracciones-irreducibles
    tier: 3
    type: numero
    sig: 10
    prompt: |
      ¿Cuántas fracciones **irreducibles** $\dfrac{k}{{{n}}}$ hay entre $0$ y $1$ (con $1 \le k < {{n}}$)?
    variants:
      - values: {"n":12}
        answers: ["sha256:c83bf7e9ebe7bcfe421292c2e4c8ff50ac20ad00db25baef57fb259cdd5deb1f","sha256:ab6638f9693d649f1b96613005d459c6662b0487f02bd1e4948811c204dee24a","sha256:5bc7d8fe300f6280ef8110ebdc546fb8250019dc57d044dbe7d0c7a9f0b48994"]
      - values: {"n":15}
        answers: ["sha256:fc440b4406292dc447649e2a03cbdc833fdb96e4f85eac16dffcd6cbffa7f4da","sha256:0f8d7a356599da4d301e6cbda0577c1f26da0532c302543dc5bf79a42c3b3b77","sha256:9f7191adfbfb039d8f485c03ea6078078a884be90da45c75518dd89cabb15ecb"]
      - values: {"n":20}
        answers: ["sha256:a28dd6567640f3728efe447d678087b6e1dffa28e5b2ef25dc3fce0c5f16ad48","sha256:6cfe79e80d0c939f5b9b0e1c584e60afd5a57120cfc4c56b050a5b8de861ad77","sha256:50674c61adf4fc57e0872e7e2144e1f75b9a1f2e67bc7963b59b0a9819885179"]
      - values: {"n":9}
        answers: ["sha256:837690373e60803046da815028b55cdcc8f5ac354f73c558a4a3a4a67df78081","sha256:6a5af8265609200485fa445d5d46b0dfc54b41a4a2b35573aa46eabe4de5c645","sha256:496e6063fc67ef8198e30b124f8b7a23ea5f52c25ba9fff0df04083156b05be8"]
      - values: {"n":30}
        answers: ["sha256:45c8775fbd6214be0b7209436cd999de8c24ef619449b8eaa6c84a68273a24d9","sha256:06691b0acb239ff2c9ab8649a193a83f29de2ad66ac586e4ef9cceec2c99f281","sha256:d801033fe824603ad2244d76cf621cea9b72ef5c6a4584acd2c55b5aaaea745b"]
      - values: {"n":16}
        answers: ["sha256:1d4ef1a5cf3fab4d568cd88cc9562f0daf190a92e3ed7379723a9cc89261ca63","sha256:3e89d5c36c8e954c60c773484d9b7de88ac08f2a5ea2082e9e1fa8d44802ce51","sha256:5961bde1d9d7221f6cd83d28d9111ce706025385e999c9ff88c65d3f592e0887"]
  - id: por-que-se-multiplica-cruzado
    tier: 2
    type: desarrollo
    prompt: |
      **Desarrollo.** Explica por qué, para dividir entre una fracción, se multiplica por su inversa: $\dfrac ab : \dfrac cd = \dfrac ab \cdot \dfrac dc$.
      (Pista: dividir es preguntar «¿cuántas veces cabe…?», o bien: el cociente es el número que multiplicado por el divisor da el
      dividendo.) Comprueba tu explicación con $\dfrac34 : \dfrac18$.
    sealed: "gz64:H4sIAAAAAAACCpVSPW8TQRD9K0+nLRLLshQSWdFJKRBQ0NFzFHuzE2lhvXPeDyuO5V9BS0ONqOigi/8JvwSt7TvbIQqi3Jn33r55M6sqisvJiq/q6rVdWGMD1B1qLBU4os2RdAA7+M3PGQeBmisk7TDPDDVH05CRhCVucKcmeBek5ZlEkPjSvkHTmNugCbrtsX3FkKobr1Tj54fWtkNmS/yLt6f9B3plaL0is34KcXFSnOysvIyb77vZnjVesvmYY9Iz9omP8yncWXbJds6SNoJOwkGMjILRx+KqLlrsQEK2iE1Kt3WaPsV51oFV4xs/Gr2SWRek1WQ3P3w9Gg0al1eoe2sX14fEL69636U4VRO88eBbpiTjgXxxrWAYnb2/1yDdMtRUYcFUPPmjP45gZylwBGUdksTGR/GIbCOEkl5IPB9jCTV9FNqxs+mJS4XfXz5PqnEVchssVfX7VUXBJg5Wqrp66xOHLnDScBrGLmwsCYBkJv/Mnd2OIaGkvn8Z9kZwJjuJh2+UN1990nE/dknh4dd5cdRlnyRW9Yv1+MTTdheZW91fyn6Xu5GHO1VPHsKjO+jP4Nn/tKPsBvh+40OsU4UlnMAOUZ2KfVj/ARnI9AHnAwAA"
  - id: r-equivalentes
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Qué pareja de fracciones son equivalentes?
    options:
      - |
        $\dfrac{3}{5}$ y $\dfrac{5}{3}$
      - |
        $\dfrac{2}{5}$ y $\dfrac{3}{6}$
      - |
        $\dfrac{4}{6}$ y $\dfrac{10}{15}$
      - |
        $\dfrac{1}{2}$ y $\dfrac{2}{3}$
    answers: ["sha256:464b56aed130bb3ea0e8821c977dd3b5138fe05aca01c9f8785c69e6977b2e6d"]
  - id: r-no-sumar-denominadores
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuánto vale $\dfrac12 + \dfrac13$?
    options:
      - |
        $\dfrac{2}{5}$
      - |
        $\dfrac{5}{6}$
      - |
        $\dfrac{1}{5}$
      - |
        $\dfrac{2}{6}$
    answers: ["sha256:65fa73cfc731e0217ed3fe6de68ca7c0b922ebdedbb53fa5c202d1b32b00b71b"]
  - id: r-inversa
    tier: 1
    review: true
    prompt: |
      ¿Cuál es la inversa de $\dfrac38$? Respuesta: `p/q`.
    answers: ["sha256:5bdb15b49f6ce00d8f14a9b691a06657c8983dde480ba2a5066d89ff7a5e53a3"]
  - id: r-mayor-que-uno
    tier: 1
    type: opcion
    review: true
    prompt: |
      ¿Cuándo es una fracción positiva mayor que $1$?
    options:
      - |
        Siempre que el numerador sea par
      - |
        Nunca
      - |
        Cuando el denominador es mayor que el numerador
      - |
        Cuando el numerador es mayor que el denominador
    answers: ["sha256:52f5c5cbfeef078c5556d783310bd9a20178dfb251e23f29845929256de8fd63"]
  - id: r-multiplicar-por-fraccion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Cómo es $20 \cdot \dfrac35$ comparado con $20$?
    options:
      - |
        Más pequeño, porque se toma una parte de $20$
      - |
        Más grande, porque multiplicar siempre aumenta
      - |
        Igual
      - |
        Negativo
    answers: ["sha256:cd0c1826a9f76bb69596b95e6f1d86ec93e299c3a76ca141522ead75fe28382a"]
  - id: r-parte-de-parte
    tier: 2
    review: true
    prompt: |
      ¿Qué fracción de una tarta es la mitad de un tercio? Respuesta: `p/q`.
    answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
  - id: r-signo-fraccion
    tier: 2
    type: opcion
    review: true
    prompt: |
      Compara $-\dfrac34$, $\dfrac{-3}{4}$ y $\dfrac{3}{-4}$.
    options:
      - |
        Todas distintas
      - |
        Solo las dos primeras son iguales
      - |
        Las tres son iguales
      - |
        Ninguna tiene sentido
    answers: ["sha256:0301dc216841608998200461105a5f2605c841d7ca7b6a91b6facd911a70d8c6"]
---

# Fracciones: significado, equivalencia, comparación y las cuatro operaciones

Una fracción expresa una **parte** de algo: tres cuartos de pizza, dos tercios del trayecto, la mitad del sueldo. También es una
**división** pendiente ($\frac34 = 3 : 4$) y una **razón** entre dos cantidades. Las fracciones son la primera gran dificultad de las
matemáticas escolares y la causa de muchos atascos posteriores en álgebra; por eso este nodo va despacio y explica el porqué de
cada regla: por qué para sumar hace falta el mismo denominador y por qué para dividir se multiplica por la inversa.

## Objetivos

Al terminar sabrás:

1. Interpretar una fracción como parte de un todo, como división y como operador («$\frac23$ de $60$»).
2. Reconocer y construir fracciones equivalentes y simplificarlas hasta la irreducible.
3. Comparar, ordenar y representar fracciones en la recta, también negativas.
4. Sumar, restar, multiplicar y dividir fracciones, justificando cada regla.
5. Resolver operaciones combinadas y problemas de partes de partes y de «lo que queda».

## Qué debes dominar antes

[[mat-divisibilidad]] (mcd y mcm) y [[mat-numeros-enteros]] (signos).

> [!question] Test de entrada
> 1. ¿Cuál es el mcm de $4$ y $6$?
> 2. ¿Cuál es el mcd de $12$ y $18$?
> 3. Si repartes $12$ caramelos entre $3$ personas, ¿cuántos recibe cada una?
>
> Respuestas: $12$; $6$; $4$.

## 1. Para qué sirve

- **En la vida diaria**: recetas («$\frac34$ de taza»), rebajas («un tercio menos»), horarios («un cuarto de hora»), música (corcheas y
  semicorcheas son fracciones del pulso).
- **Azar**: de las $40$ cartas de una baraja española, $4$ son ases: la fracción de casos favorables es $\frac{4}{40} = \frac{1}{10}$
  (el tema `mat-probabilidad-elemental`).
- **Álgebra y ciencias**: las proporciones, las escalas, las velocidades y casi todas las fórmulas tienen fracciones.

## 2. Qué significa una fracción

> [!practico]
> Una pizza cortada en $8$ porciones iguales: si te comes $3$, te has comido $\frac38$. El número de abajo (**denominador**) dice
> en cuántas partes iguales se ha cortado; el de arriba (**numerador**), cuántas se toman. Lo importante es que las partes sean
> **iguales**: si cortas mal la pizza, «tres trozos» no son $\frac38$.

En la fracción $\frac ab$ ($b \neq 0$), $b$ es el **denominador** y $a$ el **numerador**. Tiene tres lecturas:

- **Parte de un todo**: la unidad se divide en $b$ partes iguales y se toman $a$. Si $a < b$ es una fracción **propia** (menor que $1$);
  si $a > b$, **impropia** (mayor que $1$): $\frac73$ son siete tercios, dos unidades y un tercio, el **número mixto** $2\frac13$.
- **Cociente**: $\frac ab = a : b$. Repartir $3$ pizzas entre $4$ personas da $\frac34$ de pizza a cada una.
- **Operador**: «$\frac23$ de $60$» es dividir $60$ en $3$ partes ($20$ cada una) y tomar $2$: $40$. En general, $\frac ab$ de $N$ es $\frac{a \cdot N}{b}$.

## 3. Fracciones equivalentes y simplificación

> [!practico]
> Media pizza es lo mismo que dos cuartos o que cuatro octavos: el trozo es igual, solo que cortado en más pedazos. Multiplicar
> numerador y denominador por el mismo número es cortar cada porción en más pedazos: la cantidad no cambia.

Dos fracciones son **equivalentes** si representan la misma cantidad: $\frac ab = \frac cd$ si y solo si $a \cdot d = b \cdot c$ (productos
cruzados). Se obtienen fracciones equivalentes multiplicando o dividiendo numerador y denominador por el mismo número distinto de
cero: $\frac23 = \frac46 = \frac{10}{15}$.

**Simplificar** es dividir los dos términos por un divisor común. Si se divide por el **máximo común divisor**, se obtiene la
**fracción irreducible**, que ya no se puede simplificar: $\frac{12}{18}$, con $\operatorname{mcd}(12, 18) = 6$, es $\frac23$.

> [!formal] Con rigor: el criterio de los productos cruzados
> Si $\frac ab = \frac cd$ como números, multiplicando los dos lados por $bd$ (distinto de cero) queda $ad = bc$; y al revés, si $ad = bc$,
> dividiendo entre $bd$ se recupera $\frac ab = \frac cd$. Cada número racional tiene una **única** representación irreducible con
> denominador positivo, y todas las demás se obtienen de ella multiplicando arriba y abajo por un mismo entero
> ([[mat-conjuntos-numeros]] construye así los racionales).

## 4. Comparar y ordenar

> [!practico]
> ¿Qué es más, $\frac34$ o $\frac58$ de pizza? Si cortas la pizza de los dos en octavos, $\frac34$ son $6$ octavos, más que $5$.
> Comparar fracciones es ponerlas en las mismas porciones.

- Con el **mismo denominador**, es mayor la de mayor numerador.
- Con el **mismo numerador**, es mayor la de **menor** denominador (las partes son más grandes): $\frac35 > \frac37$.
- En general, se pasan a **común denominador** (el mcm de los denominadores) o se comparan los productos cruzados:
  $\frac ab < \frac cd$ (con denominadores positivos) si y solo si $ad < bc$. *Ejemplo:* $\frac34$ y $\frac58$: $3 \cdot 8 = 24 > 5 \cdot 4 = 20$, luego
  $\frac34 > \frac58$.
- También se puede pasar a decimal ($0{,}75 > 0{,}625$); se estudia en [[mat-decimales]].

**En la recta**: para colocar $\frac ab$ se divide cada unidad en $b$ partes iguales y se cuentan $a$. Las **fracciones negativas**
($-\frac34 = \frac{-3}{4} = \frac{3}{-4}$) van a la izquierda del cero, y entre ellas el orden se invierte: $-\frac34 < -\frac58$.

## 5. Suma y resta

> [!practico]
> No se pueden sumar «tercios y cuartos» tal cual, igual que no se suman metros y centímetros sin pasarlos a la misma unidad.
> Primero se cortan las dos fracciones en porciones del mismo tamaño (común denominador) y luego se cuentan las porciones.

**Igual denominador**: se suman o restan los numeradores y se deja el denominador: $\frac27 + \frac37 = \frac57$.

**Distinto denominador**: se pasan a fracciones equivalentes con un denominador común (el más cómodo es el **mcm** de los
denominadores) y después se suman los numeradores.

**Ejemplo resuelto 1.** $\frac14 + \frac26$: $\operatorname{mcm}(4, 6) = 12$; $\frac14 = \frac{3}{12}$ y $\frac26 = \frac{4}{12}$; la suma es $\frac{7}{12}$.
(Simplificar antes, $\frac26 = \frac13$, también vale.)

**El error más común** es sumar numeradores y denominadores: $\frac12 + \frac13 \neq \frac25$. Basta pensar que $\frac25$ es **menos** que $\frac12$, y
al añadirle algo no puede bajar. Lo correcto es $\frac36 + \frac26 = \frac56$.

La suma de fracciones es conmutativa y asociativa, el $0$ es el elemento neutro y cada fracción tiene su opuesta ($\frac ab$ y $-\frac ab$
suman $0$).

## 6. Producto y cociente

> [!practico]
> Multiplicar por una fracción es «tomar una parte»: $\frac23 \cdot \frac34$ es tomar dos tercios de tres cuartos de pizza. Si dibujas
> la pizza dividida en $4$ franjas, coges $3$, y esas tres las divides en $3$ y coges $2$, te queda $\frac{6}{12} = \frac12$. Dividir
> pregunta «cuántas veces cabe»: ¿cuántos octavos caben en tres cuartos? Seis.

**Producto**: numerador por numerador y denominador por denominador: $\dfrac ab \cdot \dfrac cd = \dfrac{a\cdot c}{b\cdot d}$. Conviene simplificar
antes de multiplicar: $\frac35 \cdot \frac{10}{9} = \frac{3 \cdot 10}{5 \cdot 9} = \frac{30}{45} = \frac23$ (o cancelando el $3$ con el $9$ y el $5$ con el $10$
antes).

**Inversa**: la inversa de $\frac ab$ ($a \neq 0$) es $\frac ba$, porque su producto es $1$.

**Cociente**: dividir es multiplicar por la inversa: $\dfrac ab : \dfrac cd = \dfrac ab \cdot \dfrac dc$. *Ejemplo:* $\frac47 : \frac23 = \frac47 \cdot \frac32 = \frac{12}{14} = \frac67$.
(El porqué se explica en el ejercicio de desarrollo.)

**Multiplicar por una fracción propia hace más pequeño**: $20 \cdot \frac35 = 12 < 20$. Y dividir entre una fracción propia hace más
grande: $3 : \frac12 = 6$ (en $3$ pizzas caben $6$ medias pizzas).

## 7. Operaciones combinadas y problemas

> [!practico]
> En los problemas con fracciones hay que fijarse siempre en **de qué** es cada fracción: «gasta $\frac14$ del dinero» y «gasta $\frac23$ de
> lo que le queda» se refieren a cantidades distintas. Un dibujo de una barra partida, paso a paso, aclara casi cualquier problema.

La jerarquía es la de siempre: paréntesis, productos y cocientes, sumas y restas.

**Ejemplo resuelto 2.** $\frac12 + \frac23 \cdot \frac34 = \frac12 + \frac12 = 1$, pero $\left(\frac12 + \frac23\right) \cdot \frac34 = \frac76 \cdot \frac34 = \frac78$.

**Ejemplo resuelto 3 (lo que queda).** Luis gasta $\frac14$ de su paga y después $\frac23$ de lo que le queda. Le quedan $10$ €. ¿Cuánto era la paga?
Tras gastar $\frac14$ le queda $\frac34$. De eso gasta $\frac23$ y le queda $\frac13$ de $\frac34$, es decir $\frac14$ de la paga. Si $\frac14$ son
$10$ €, la paga es $40$ €. *Comprobación:* gasta $10$, quedan $30$; gasta $\frac23$ de $30 = 20$, quedan $10$ ✓.

## 8. Errores típicos

- Sumar numeradores y denominadores ($\frac12 + \frac13 \neq \frac25$).
- Olvidar que las partes deben ser iguales al interpretar una fracción.
- Comparar mirando solo los numeradores o solo los denominadores.
- Al dividir, invertir la primera fracción en vez de la segunda.
- No simplificar el resultado final, o simplificar sumandos («tachar» en una suma: $\frac{2 + 3}{2 + 5} \neq \frac35$).
- En los problemas, aplicar una fracción al total cuando se refiere a lo que queda.

## 9. Resumen

- $\frac ab$: $a$ partes de $b$ iguales; también $a : b$ y operador ($\frac ab$ de $N = \frac{aN}{b}$).
- Equivalentes si $ad = bc$; simplificar dividiendo por el mcd hasta la irreducible.
- Comparar con común denominador o productos cruzados; negativas a la izquierda del cero.
- Suma y resta con común denominador (mcm); producto en línea; cociente por la inversa.
- Problemas: identificar de qué cantidad es cada fracción; dibujar barras.

## Repaso: lo que debe quedarte dentro de un mes

1. Las tres lecturas de una fracción.
2. Cómo se simplifica y qué es la fracción irreducible.
3. Por qué para sumar hace falta el mismo denominador.
4. Cómo se multiplica y por qué dividir es multiplicar por la inversa.
5. Cómo se resuelve un problema de «lo que queda».

## Siguiente

[[mat-decimales]] (otra forma de escribir las fracciones), [[mat-proporcionalidad]] y [[mat-expresiones-algebraicas]].
