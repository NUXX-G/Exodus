---
id: mat-numeros-naturales
title: "Números naturales y aritmética"
area: matematicas
trunk_level: 0
prerequisites: []
academic_sources:
  - "Niven, I.; Zuckerman, H. S.; Montgomery, H. L. An Introduction to the Theory of Numbers, 5ª ed. Wiley, 1991."
  - "Hardy, G. H.; Wright, E. M. An Introduction to the Theory of Numbers, 6ª ed. (rev. Heath-Brown y Silverman). Oxford University Press, 2008."
  - "Euclides. Elementos, libro VII, proposiciones 1 y 2 (algoritmo de Euclides). Edición en línea de D. E. Joyce, Clark University: mathcs.clarku.edu/~djoyce/elements/bookVII/bookVII.html"
  - "Pólya, G. How to Solve It. Princeton University Press, 1945 (las cuatro fases de la resolución de problemas)."
hints:
  - "Concepto: casi todos los problemas difíciles de este nodo se resuelven descomponiendo en factores primos. Los exponentes de la descomposición te dan el número de divisores, su suma, los ceros finales (el exponente del 5 en un factorial) y el periodo de las últimas cifras de una potencia."
  - "Herramienta: en Python, `math.gcd`, `pow(a, b, m)` (potencia modular exacta) y `sympy.factorint(n)` (factorización). Para comprobar a mano un resultado contado, escribe el recuento más simple posible (un bucle) y úsalo como segundo método."
  - "Documentación oficial: docs.python.org/3/library/math.html (gcd, lcm, factorial) y docs.python.org/3/library/functions.html#pow (pow con tres argumentos); Niven et al., capítulos 1 y 2 (divisibilidad y congruencias); Euclides, Elementos VII.1-2."
exercises:
  - id: binario-2026
    tier: 1
    prompt: |
      Escribe el número ${{n}}$ en base 2. Respuesta: solo ceros y unos, sin espacios.
    variants:
      - values: {"n":2026}
        answers: ["sha256:2286b936353fb3909a12a2b2079e2846b89b7dbc921aec85005a688f97b90fb6"]
      - values: {"n":1500}
        answers: ["sha256:31ff9acfdf79254506e5347b843a579e6016fab70ffc8652fde25d47daf855a8"]
      - values: {"n":777}
        answers: ["sha256:57d633fd372b7ba53cbb6aafcf715f90b0431b2aa5825f5951b9294cc42809ae"]
      - values: {"n":2049}
        answers: ["sha256:b41aaa1989b66759a0572cbe647b7ab036b28fdfcc74cefb906f6e0f048d65c5"]
      - values: {"n":365}
        answers: ["sha256:28233940756e0a49b30584f427637c6e4bc1926df6c46cdf22f6fd9a8cb5733b"]
      - values: {"n":1023}
        answers: ["sha256:d2d02ea74de2c9fab1d802db969c18d409a8663a9697977bb1c98ccdd9de4372"]
      - values: {"n":640}
        answers: ["sha256:f74d46c18f5e165d82a033b7691ce8be00827ccab2d3bc4afb612523e5260785"]
  - id: orden-operaciones
    tier: 1
    prompt: |
      Calcula ${{a}} + {{b}} \times ({{c}} - {{d}})^2 \div {{e}} - {{f}}^3$. Respuesta: un número entero.
    variants:
      - values: {"a":8,"b":6,"c":5,"d":3,"e":4,"f":1}
        answers: ["sha256:3fdba35f04dc8c462986c992bcf875546257113072a909c162f7e470e581e278"]
      - values: {"a":10,"b":3,"c":7,"d":4,"e":9,"f":2}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"a":21,"b":5,"c":6,"d":2,"e":8,"f":3}
        answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
      - values: {"a":7,"b":4,"c":9,"d":6,"e":6,"f":1}
        answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
      - values: {"a":15,"b":2,"c":8,"d":2,"e":4,"f":2}
        answers: ["sha256:b7a56873cd771f2c446d369b649430b65a756ba278ff97ec81bb6f55b2e73569"]
      - values: {"a":30,"b":9,"c":4,"d":1,"e":3,"f":2}
        answers: ["sha256:0e17daca5f3e175f448bacace3bc0da47d0655a74c8dd0dc497a3afbdad95f1f"]
  - id: cifras-2-64
    tier: 1
    prompt: |
      ¿Cuántas cifras tiene $2^{64}$ escrito en base 10? Respuesta: un número entero.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: division-euclidea
    tier: 2
    prompt: |
      Divide ${{a}}$ entre ${{b}}$ (división euclídea: $a = bq + r$ con $0 \le r < b$). Respuesta en la forma «cociente;resto».
    variants:
      - values: {"a":98765,"b":123}
        answers: ["sha256:a892b22920a5b6e41eeb4eb29211bfe34c29818ec7c5967ca6bf99f0efa11fd1"]
      - values: {"a":54321,"b":87}
        answers: ["sha256:820fb062754afa8b6f259d0a76b0fc1f138a57b333ca84497543d92c20d7357c"]
      - values: {"a":10000,"b":37}
        answers: ["sha256:14e550017f20ce649f2172d2b281cb7451ac61da347561e82cf9d7cd8766fc93"]
      - values: {"a":7777,"b":64}
        answers: ["sha256:005a04411eb0785c994b4ad274d99850dd40c7d0e15bc409512467770ddc09fb"]
      - values: {"a":123456,"b":999}
        answers: ["sha256:8bc1fc30ca64b49c4c80371425efce1531dff7e30571e690d4afecb443eebc69"]
      - values: {"a":31415,"b":271}
        answers: ["sha256:4f2d54cdd7d9f63182c723b43c1c416d69bbdee58be9076b7454d0a6699ce3aa"]
  - id: mcd-euclides
    tier: 2
    prompt: |
      Calcula $\operatorname{mcd}({{a}}, {{b}})$ con el algoritmo de Euclides. Respuesta: un entero.
    variants:
      - values: {"a":1071,"b":462}
        answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
      - values: {"a":1386,"b":495}
        answers: ["sha256:8c1f1046219ddd216a023f792356ddf127fce372a72ec9b4cdac989ee5b0b455"]
      - values: {"a":2346,"b":1702}
        answers: ["sha256:25fc0e7096fc653718202dc30b0c580b8ab87eac11a700cba03a7c021bc35b0c"]
      - values: {"a":987,"b":610}
        answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
      - values: {"a":4199,"b":3553}
        answers: ["sha256:3949ac1596ec77106a709a618bf5adcb19b77537ce8bcbdf54ff830169cdd084"]
      - values: {"a":1260,"b":1638}
        answers: ["sha256:65a699905c02619370bcf9207f5a477c3d67130ca71ec6f750e07fe8d510b084"]
  - id: mcm-84-90
    tier: 2
    prompt: |
      Calcula $\operatorname{mcm}({{a}}, {{b}})$. Respuesta: un entero.
    variants:
      - values: {"a":84,"b":90}
        answers: ["sha256:9c19f29d0e6fefa21eec58f6ff4d0cf807b63d0ed146f1fea0874506b66c35ee"]
      - values: {"a":36,"b":48}
        answers: ["sha256:5ec1a0c99d428601ce42b407ae9c675e0836a8ba591c8ca6e2a2cf5563d97ff0"]
      - values: {"a":45,"b":75}
        answers: ["sha256:0e6523810856a138a75dec70a9cf3778a5c70b83ac915f22c33f05db97cb3e68"]
      - values: {"a":28,"b":42}
        answers: ["sha256:44c8031cb036a7350d8b9b8603af662a4b9cdbd2f96e8d5de5af435c9c35da69"]
      - values: {"a":120,"b":84}
        answers: ["sha256:fd0f7e53c5b02b688a57ee37f3d52065cb168a7b9fd5a3abd93d37e1559fbd30"]
      - values: {"a":66,"b":99}
        answers: ["sha256:a4e00d7e6aa82111575438c5e5d3e63269d4c475c718b2389f6d02932c47f8a6"]
  - id: autobuses
    tier: 2
    prompt: |
      Dos autobuses salen juntos de la estación a las {{hora}}. Uno vuelve a salir cada {{p}} minutos y el otro cada {{q}}.
      ¿A qué hora vuelven a salir juntos por primera vez? Respuesta en formato «H:MM», por ejemplo «9:05».
    variants:
      - values: {"p":12,"q":18,"hora":"8:00"}
        answers: ["sha256:314c2d13fae11fe8673f3af0a9ed0831f30b92726b1990068557ac537c2d4d38"]
      - values: {"p":20,"q":30,"hora":"7:15"}
        answers: ["sha256:705aeb945c265d498122fde7580b048ab8993c89028278deda656d92395a055c"]
      - values: {"p":14,"q":21,"hora":"9:30"}
        answers: ["sha256:bc0be66f222f16283e4ae437529c0a71dac11e7b6f11997e7dd4e3ed588b804d"]
      - values: {"p":16,"q":24,"hora":"6:45"}
        answers: ["sha256:10660a55e8d34de001740be4380fd759b6bd2ee0615a36410e43fc7343314c8d"]
      - values: {"p":25,"q":40,"hora":"10:00"}
        answers: ["sha256:abff8e5d6fa90edb54431e5f8599914a7fc23a1a3ed727d94a1f7b35fc5f1bf9"]
      - values: {"p":18,"q":27,"hora":"7:50"}
        answers: ["sha256:1fd888d13443b9d6971fbf336240a984b952c6c091360a8db9d7ab1b7e80a58b"]
  - id: baldosas
    tier: 2
    prompt: |
      Un suelo rectangular mide ${{a}}$ cm por ${{b}}$ cm. Se quiere cubrir con baldosas cuadradas enteras, todas
      iguales y del mayor tamaño posible, sin cortar ninguna. ¿Cuánto mide el lado y cuántas baldosas hacen falta?
      Respuesta en la forma «lado en cm;número de baldosas».
    variants:
      - values: {"a":840,"b":600}
        answers: ["sha256:1bc94f350dcb7da52e55fc6b54b1cbf7a71074615080da8e87b0273cede6ba80"]
      - values: {"a":720,"b":480}
        answers: ["sha256:6bbdf4dc11dd8372d69046f331fb78b32caedddfafbc19a0dafefdd94555432c"]
      - values: {"a":450,"b":330}
        answers: ["sha256:7647ceecd8814c45debeae6adcae2b55e212dd233413af367ba4b9921363d0fa"]
      - values: {"a":960,"b":640}
        answers: ["sha256:fbb8802913a404ecb8ecce22e6c4d215e630f5b54f17acd7e2e8ddce506a278b"]
      - values: {"a":540,"b":420}
        answers: ["sha256:848c8fd782c5cc83da2a234bcee550c6cb873401252449902515334ce877c01a"]
      - values: {"a":1050,"b":750}
        answers: ["sha256:f59be712bd53d9a4149000d77781ccad9b1457a2306cd56725eaf5771b0c2c0d"]
  - id: resto-11
    tier: 2
    prompt: |
      ¿Cuál es el resto de dividir ${{n}}$ entre $11$? Usa el criterio de divisibilidad por $11$ y comprueba después con la
      división. Respuesta: un entero.
    variants:
      - values: {"n":123456789}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"n":987654321}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"n":31415926}
        answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
      - values: {"n":2718281828}
        answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
      - values: {"n":55555}
        answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
      - values: {"n":100000001}
        answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: divisores-360
    tier: 2
    prompt: |
      ¿Cuántos divisores positivos tiene ${{n}}$ y cuánto suman todos ellos? Respuesta en la forma «cantidad;suma».
    variants:
      - values: {"n":360}
        answers: ["sha256:dfeba01aedd9a60c93fcfe4f69772ce018dfa7d7b1dcb1aa4377e6853a98bc7a"]
      - values: {"n":240}
        answers: ["sha256:0c4c174a10e268933de3bdd7b92dffe71cb444e3ac58f06f9e0656f0640d5161"]
      - values: {"n":180}
        answers: ["sha256:58cb038c1496b4dcfd4f0fd74d8d2b34d54ff21c872afc570c3b9fd19d40cff0"]
      - values: {"n":504}
        answers: ["sha256:137f70677e71143ed9560d5e67d60d777ef52f3c72cd0341a344029a91c6999a"]
      - values: {"n":600}
        answers: ["sha256:9e59d205e49e74c5c3b12f0a4e4f345b84f0d3b5064c903de0ffbf4d2eabc915"]
      - values: {"n":1000}
        answers: ["sha256:07dde5f054b44c09468b00f85bdaa4745ad671f48556a04eca9a899fd0b4382b"]
      - values: {"n":210}
        answers: ["sha256:50cd9c0fd86ad099b6a5ca74aa5be5e0f45772d980fe18b30b7bb1d86f96f606"]
  - id: ultimas-cifras
    tier: 3
    prompt: |
      ¿Cuáles son las dos últimas cifras de ${{a}}^{{{n}}}$? Respuesta: dos cifras, sin espacios.
    variants:
      - values: {"a":7,"n":2026}
        answers: ["sha256:0e17daca5f3e175f448bacace3bc0da47d0655a74c8dd0dc497a3afbdad95f1f"]
      - values: {"a":3,"n":1000}
        answers: ["sha256:938db8c9f82c8cb58d3f3ef4fd250036a48d26a712753d2fde5abd03a85cabf4"]
      - values: {"a":13,"n":500}
        answers: ["sha256:938db8c9f82c8cb58d3f3ef4fd250036a48d26a712753d2fde5abd03a85cabf4"]
      - values: {"a":9,"n":2027}
        answers: ["sha256:c75cb66ae28d8ebc6eded002c28a8ba0d06d3a78c6b5cbf9b2ade051f0775ac4"]
      - values: {"a":7,"n":1234}
        answers: ["sha256:0e17daca5f3e175f448bacace3bc0da47d0655a74c8dd0dc497a3afbdad95f1f"]
      - values: {"a":11,"n":2026}
        answers: ["sha256:d029fa3a95e174a19934857f535eb9427d967218a36ea014b70ad704bc6c8d1c"]
  - id: doce-divisores
    tier: 3
    prompt: |
      ¿Cuál es el menor número natural que tiene exactamente $12$ divisores positivos? Respuesta: un entero.
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: ceros-100-factorial
    tier: 3
    prompt: |
      ¿Con cuántos ceros termina el número ${{n}}! = 1 \times 2 \times 3 \times \cdots \times {{n}}$? Respuesta: un entero.
    variants:
      - values: {"n":100}
        answers: ["sha256:c2356069e9d1e79ca924378153cfbbfb4d4416b1f99d41a2940bfdb66c5319db"]
      - values: {"n":50}
        answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
      - values: {"n":125}
        answers: ["sha256:eb1e33e8a81b697b75855af6bfcdbcbf7cbbde9f94962ceaec1ed8af21f5a50f"]
      - values: {"n":200}
        answers: ["sha256:0e17daca5f3e175f448bacace3bc0da47d0655a74c8dd0dc497a3afbdad95f1f"]
      - values: {"n":75}
        answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
      - values: {"n":1000}
        answers: ["sha256:9f484139a27415ae2e8612bf6c65a8101a18eb5e9b7809e74ca63a45a65f17f4"]
  - id: pares-coprimos
    tier: 3
    prompt: |
      ¿Cuántos pares $(a, b)$ de números naturales con $1 \le a < b \le 100$ cumplen $\operatorname{mcd}(a, b) = 1$?
      Respuesta: un entero.
    answers: ["sha256:deeced0756445f4466bd032c573b0c4c48ad83a7c13b17bc15e6f73e22fbe7ae"]
  - id: primos-1000
    tier: 3
    prompt: |
      ¿Cuántos números primos hay menores que $1000$? Respuesta: un entero.
    answers: ["sha256:80c3cd40fa35f9088b8741bd8be6153de05f661cfeeb4625ffbf5f4a6c3c02c4"]
  - id: cajero
    tier: 3
    prompt: |
      Un cajero automático solo dispone de billetes de $20$ y de $50$ euros y entrega la cantidad exacta que se
      pide. De los importes enteros entre $1$ y $1000$ euros, ¿cuántos **no** se pueden entregar? Respuesta: un entero.
    answers: ["sha256:6a97982dccf77dd3dafa27fcbdf75c017301f730ba186b1d9e8ea212eee73f54"]
  - id: r-mcd-o-mcm
    tier: 1
    type: opcion
    review: true
    prompt: |
      Un faro da un destello cada $24$ segundos y otro cada $36$. Acaban de coincidir. ¿Qué hay que calcular para saber
      cuándo vuelven a coincidir?
    options:
      - |
        El mcd de 24 y 36
      - |
        El mcm de 24 y 36
      - |
        La suma 24 + 36
      - |
        El producto 24 · 36
    answers: ["sha256:f79ac157f3b7e225f6a84b0f7c6b4fa408c8ef8a982ef9253dcbd1b41b140f33"]
  - id: r-resto-menor
    tier: 1
    type: opcion
    review: true
    prompt: |
      Al dividir un natural entre $9$ con resto, ¿qué valores puede tomar el resto $r$?
    options:
      - |
        $0 \le r \le 9$
      - |
        $r$ puede ser cualquier natural
      - |
        $0 \le r < 9$
      - |
        $1 \le r \le 9$
    answers: ["sha256:a0ba8bf8f4df6dc97406598cdc0d016f25a6003ac52aaff06c82b924c95d64c5"]
  - id: r-primo-sqrt
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Para decidir si $143$ es primo, ¿cuántos **primos** distintos basta probar como divisores, como mucho? (Los primos
      menores o iguales que $\sqrt{143}$.) Respuesta: un entero.
    answers: ["sha256:0ad244c1fa3c36372b3a5534d78c13f5aae45be321106d6ac08bff3632c57871","sha256:a29aa41931fb96900e8bdf3bbd1f283cd6eec0d00b92c18ff192dfc3f039c109","sha256:22885be0e28b981dbdf84b817a379460f7c63fe6a8e803a90da8260013ecf879"]
  - id: r-criterio-9
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Sin dividir: ¿qué resto deja $482\,017$ al dividirlo entre $9$? Respuesta: un entero.
    answers: ["sha256:cfa556343545cd0beb35998b6a466d970c7fbbee81df94cd6bf4fc2cf7458043","sha256:49006465ad227109835d238aef14a5884c17ff07eb9df085c0e34704b6cd61ec","sha256:09d22a4bafcceeb1c07ead14df29b6992ad42cfd723bb2b118be9819bcc30cb8"]
  - id: r-mcd-por-mcm
    tier: 2
    type: numero
    review: true
    sig: 6
    prompt: |
      Dos números tienen $\operatorname{mcd} = 4$ y su producto es $672$. ¿Cuál es su mcm? Respuesta: un entero.
    answers: ["sha256:dd8d22082a0d57e6d4d7b6732aae5d827ff23063b66691182175ab2fc051e402","sha256:02184d6f1724f82ce00491ed050f60af06546fc06c6b46d96781355907a9b8be","sha256:67ce80720dfe6fcd23798b33cea350ca4489f195300fcb53d186f07cedbbadf4"]
  - id: r-orden-izq-der
    tier: 1
    type: numero
    review: true
    sig: 6
    prompt: |
      Calcula $18 \div 2 \times 3$. Respuesta: un entero.
    answers: ["sha256:4548dde1081f1ce2fdf6f9c581f0f02707267e4a782935fbd65648e7bde8c0ea","sha256:5cc12e5f20e468de35f7da23698fecd9fa0a0a46953928fe27fbd022a6f1ffbb","sha256:4003707d482b1334e8bddecc665cc25702ee64edf87f5901133f49039ed008c7"]
---

# Números naturales y aritmética

Aquí empieza el troncal. Todo lo que viene después, del álgebra a la criptografía, se apoya en dominar los
números enteros con una seguridad total: saber qué significa cada operación, por qué funcionan los
trucos de cálculo y cómo se razona sobre divisibilidad. Este nodo lo hace desde cero y llega hasta
resultados que se usan en informática y en la vida diaria.

## Objetivos

Al terminar sabrás:

1. Escribir y leer números en cualquier base (decimal, binario, hexadecimal) y justificar por qué el
   sistema posicional funciona.
2. Hacer una división con resto y enunciar con precisión qué garantiza.
3. Evaluar expresiones respetando la prioridad de las operaciones, y manejar potencias.
4. Decidir si un número es divisible por 2, 3, 4, 5, 8, 9, 10 u 11 **sin dividir**, y demostrar por qué.
5. Factorizar un número, reconocer primos y calcular el máximo común divisor (mcd) y el mínimo común
   múltiplo (mcm) de dos formas distintas.
6. Plantear y resolver problemas reales (horarios, embaldosado, pagos) con estas herramientas.

> [!question] Test de entrada
> Antes de seguir, intenta estas tres sin calculadora. Si no te salen, el nodo te lo enseña; no hace
> falta saberlo ya.
> 1. ¿Cuánto es $7 \times 8$?
> 2. ¿Cuál es el resto de dividir $50$ entre $7$?
> 3. ¿Es $91$ un número primo?
>
> Respuestas: $56$; $1$; no ($91 = 7 \times 13$). Si fallas la 3, es el caso típico de un número que
> «parece primo»: aprenderás a comprobarlo con seguridad.

## 1. Para qué sirve

- **Tu DNI.** La letra del DNI español es el resto de dividir el número entre $23$, traducido con una
  tabla. Es una operación de este nodo.
- **Libros y pagos.** El dígito de control del ISBN-10 y de muchos códigos bancarios es un resto de una
  división: detecta errores de tecleo.
- **Informática.** Todo lo que guarda un ordenador son números en base $2$; las direcciones de memoria y
  los colores usan base $16$.
- **Organizar.** Horarios que coinciden, repartos sin sobrantes y piezas que encajan son problemas de
  múltiplos y divisores.
- **Seguridad.** El cifrado RSA con el que se protege casi toda comunicación en internet se apoya en que
  factorizar números enormes es difícil, aunque multiplicarlos sea fácil
  (se verá en [[sec-criptografia]]).

## 2. El sistema decimal posicional

> [!practico]
> Piensa en un cuentakilómetros o en el contador de una gasolinera: cuando las unidades llegan a 9 y suman una más,
> vuelven a 0 y la rueda de al lado avanza una. Eso es el sistema **posicional**: una cifra vale más o menos según el
> **sitio** que ocupa. En $4,096$, el $4$ son cuatro *millares*, no cuatro unidades.
>
> Usamos el diez porque tenemos diez dedos, pero se puede contar con cualquier número de cifras. Los ordenadores usan
> solo dos (0 y 1, apagado y encendido): es la **base 2** o binario. Pasar de una base a otra es como cambiar dinero de
> moneda: la cantidad es la misma, cambia cómo se escribe.
>
> Antes de seguir, dos palabras que saldrán en todo el curso:
>
> - Un **teorema** es una afirmación que se ha **demostrado**: se ha comprobado con un razonamiento que no deja ningún
>   caso fuera, no solo con unos cuantos ejemplos. Ver que algo funciona con 10 números no basta: podría fallar con el 11.
> - Un **algoritmo** es una receta de pasos precisos que, seguida al pie de la letra, siempre termina y da el resultado,
>   como el método de la división que aprendiste en primaria. Los ordenadores solo saben seguir algoritmos.


Los **números naturales** son $0, 1, 2, 3, \dots$ (en este curso incluimos el $0$). Se escriben con
**cifras** y el valor de cada cifra depende de su **posición**:

$$
4\,096 = 4\cdot 10^3 + 0\cdot 10^2 + 9\cdot 10^1 + 6\cdot 10^0 .
$$

El invento clave es que con solo diez símbolos se escribe cualquier número, porque la posición
multiplica por una potencia de diez. Nada obliga a usar el diez: se puede usar cualquier base
$b \ge 2$.

> [!formal] Con rigor: por qué cada número tiene una única escritura
> **Teorema (representación en base $b$).** Todo natural $n$ se escribe de una única manera como
>
> $$
> n = d_k b^k + d_{k-1} b^{k-1} + \cdots + d_1 b + d_0, \qquad 0 \le d_i < b,\ d_k \ne 0 .
> $$
>
> *Idea de la demostración.* Existencia: dividir $n$ entre $b$ da $n = bq + d_0$ con $0 \le d_0 < b$; se
> repite con $q$ (que es menor que $n$) hasta llegar a $0$; las cifras son los restos, en orden inverso.
> Unicidad: dos escrituras distintas darían una diferencia no nula $\sum e_i b^i = 0$ con $|e_i| < b$; mirando el
> menor $i$ con $e_i \ne 0$ y dividiendo entre $b^i$ se obtiene que $b$ divide a $e_i$, imposible porque
> $0 < |e_i| < b$. $\blacksquare$

**Ejemplo resuelto: $1000$ en base 2.** Se divide entre $2$ y se anotan los restos:

| División | Cociente | Resto |
|---|---|---|
| $1000 \div 2$ | $500$ | $0$ |
| $500 \div 2$ | $250$ | $0$ |
| $250 \div 2$ | $125$ | $0$ |
| $125 \div 2$ | $62$ | $1$ |
| $62 \div 2$ | $31$ | $0$ |
| $31 \div 2$ | $15$ | $1$ |
| $15 \div 2$ | $7$ | $1$ |
| $7 \div 2$ | $3$ | $1$ |
| $3 \div 2$ | $1$ | $1$ |
| $1 \div 2$ | $0$ | $1$ |

Leyendo los restos de abajo arriba: $1000 = 1111101000_2$. **Comprobación** (siempre, y por el camino
inverso): $512 + 256 + 128 + 64 + 32 + 8 = 1000$. $\checkmark$

Las bases más usadas en computación:

| Base | Cifras | Uso |
|:---:|---|---|
| $2$ | 0, 1 | Todo dato en un ordenador |
| $8$ | 0–7 | Permisos de archivos en Unix |
| $16$ | 0–9, A–F | Direcciones, colores (`#FF8800`), volcados |

Como $16 = 2^4$, cada cifra hexadecimal equivale a exactamente cuatro bits:
$\mathrm{F}_{16} = 1111_2$. Por eso convertir entre binario y hexadecimal es solo agrupar de cuatro en
cuatro.

```python
def a_base(n, b):
    """Cifras de n en base b (lista, de más a menos significativa), por divisiones sucesivas."""
    if n == 0:
        return [0]
    cifras = []
    while n > 0:
        n, resto = divmod(n, b)   # divmod devuelve (cociente, resto)
        cifras.append(resto)
    return cifras[::-1]

assert a_base(1000, 2) == [1, 1, 1, 1, 1, 0, 1, 0, 0, 0]
```

**Cuántas cifras tiene un número.** $n$ tiene $k + 1$ cifras en base $10$ si y solo si
$10^k \le n < 10^{k+1}$, es decir, $k = \lfloor \log_{10} n \rfloor$. El **logaritmo** en base $10$ responde a
«¿a qué hay que elevar $10$ para obtener $n$?» ($\log_{10} 1000 = 3$ porque $10^3 = 1000$); se estudia a fondo en
[[mat-algebra-secundaria]]. De momento basta contar cifras.

## 3. Las operaciones y la división con resto

> [!practico]
> Repartir $50$ caramelos entre $7$ amigos: a cada uno le tocan $7$ (el **cociente**) y sobran $1$ (el **resto**). El
> resto siempre es **menor** que el número de amigos: si sobrasen $7$ o más, podrías dar otra vuelta. Esa idea tan simple,
> «cuántas vueltas completas y cuánto sobra», está detrás de la letra del DNI, de los relojes (las $15$ h son las $3$) y
> de la criptografía.
>
> Las propiedades de la suma y el producto son cosas que ya usas sin nombrarlas: da igual el orden en que sumes la compra
> (conmutativa) y $17 	imes 12$ es «$17$ por $10$ más $17$ por $2$» (distributiva).


**Suma y producto** cumplen, para cualesquiera naturales $a, b, c$:

- conmutativa: $a + b = b + a$, $ab = ba$;
- asociativa: $(a + b) + c = a + (b + c)$, $(ab)c = a(bc)$;
- elementos neutros: $a + 0 = a$, $a \cdot 1 = a$;
- **distributiva**: $a(b + c) = ab + ac$.

La distributiva es la propiedad más usada del cálculo, también mental: $17 \times 12 = 17 \times 10 +
17 \times 2 = 170 + 34 = 204$. La resta y la división no son conmutativas ni asociativas, y la división
exacta no siempre existe ($7$ no se reparte entre $2$ sin resto). Eso lleva a la operación fundamental
siguiente.

> [!formal] Con rigor: el teorema de la división
> **Teorema (división euclídea).** Para todo natural $a$ y todo natural $b \ge 1$ existen un único
> **cociente** $q$ y un único **resto** $r$ tales que
>
> $$
> a = bq + r, \qquad 0 \le r < b .
> $$
>
> *Demostración.* Existencia: el conjunto de los múltiplos $bk$ que no superan a $a$ no está vacío ($k=0$)
> y está acotado, así que hay un mayor $q$ con $bq \le a$; sea $r = a - bq \ge 0$; si fuese $r \ge b$ entonces
> $b(q+1) \le a$, contra la elección de $q$. Unicidad: si $bq + r = bq' + r'$ con $q < q'$, entonces
> $r - r' = b(q' - q) \ge b$, pero $r - r' < b$; contradicción. $\blacksquare$

**Nunca se divide entre cero.** Si $b = 0$, $a = 0\cdot q + r$ obligaría a $a = r$ para cualquier $q$: no habría
un único cociente. Por eso $a \div 0$ no está definido.

**Ejemplo resuelto: $1234 \div 17$.** $17 \times 72 = 1224 \le 1234 < 1241 = 17 \times 73$. Luego $q = 72$ y
$r = 1234 - 1224 = 10$. Comprobación: $17\cdot 72 + 10 = 1234$ y $0 \le 10 < 17$. $\checkmark$

**Aplicación: la letra del DNI.** Se divide el número entre $23$ y el resto indica una posición en la
cadena `TRWAGMYFPDXBNJZSQVHLCKE` (la posición $0$ es la `T`). Para $12345678$:
$12345678 = 23 \cdot 536768 + 14$; la posición $14$ es la `Z`. La letra es `Z`.

## 4. Orden de las operaciones

> [!practico]
> Es un acuerdo, como conducir por la derecha: no es «más verdad» un orden que otro, pero si cada uno usa el suyo, nadie
> se entiende. Una calculadora científica y cualquier lenguaje de programación siguen este orden. Truco para recordarlo:
> primero lo que está «más apretado» (paréntesis, potencias), y al final lo «más suelto» (sumas y restas).


Una expresión sin paréntesis se evalúa con este orden, que es una convención universal:

1. paréntesis (de dentro afuera);
2. potencias;
3. multiplicaciones y divisiones, **de izquierda a derecha**;
4. sumas y restas, **de izquierda a derecha**.

**Ejemplo resuelto:** $12 - 3 \times (4 + 1)^2 \div 5 + 2$.

$$
12 - 3 \times 5^2 \div 5 + 2 = 12 - 3 \times 25 \div 5 + 2 = 12 - 75 \div 5 + 2 = 12 - 15 + 2 = -1 .
$$

Aquí aparece un resultado negativo: los naturales no alcanzan para restar siempre. Los enteros
($\dots,-2,-1,0,1,2,\dots$) se estudian en [[mat-enteros-fracciones]].

Error típico: $8 \div 2 \times 4$ vale $16$ (izquierda a derecha), **no** $1$. La multiplicación y la
división tienen la **misma** prioridad.

## 5. Potencias de exponente natural

> [!practico]
> Una potencia es una multiplicación repetida, igual que una multiplicación es una suma repetida: $2^5$ es
> $2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$. Crecen de forma explosiva: si doblas un folio $42$ veces (que no se
> puede), su grosor llegaría a la Luna. Por eso un ordenador con $64$ bits puede contar hasta un número de $20$ cifras.


$a^n$ es multiplicar $a$ por sí mismo $n$ veces, con el convenio $a^0 = 1$. De la definición salen las
reglas, que se justifican sin más que contar factores:

$$
a^m a^n = a^{m+n}, \qquad (a^m)^n = a^{mn}, \qquad (ab)^n = a^n b^n .
$$

Por ejemplo $2^3 \cdot 2^4$ son $3 + 4 = 7$ factores $2$. **Las potencias de $2$ crecen muy deprisa**:
$2^{10} = 1024 \approx 10^3$, y por eso $2^{64}$ ya tiene $20$ cifras.

**Última cifra de una potencia.** Las últimas cifras de las potencias de un número se repiten con un
**periodo**. Para $3^n$: $3, 9, 27, 81, 243, \dots$ terminan en $3, 9, 7, 1, 3, 9, 7, 1, \dots$ (periodo $4$).
**Ejemplo resuelto:** ¿última cifra de $3^{2026}$? Como $2026 = 4\cdot 506 + 2$, ocupa la posición $2$ del
ciclo: termina en $9$. Para varias cifras se trabaja igual con el resto módulo $100$, $1000$...

## 6. Divisibilidad y números primos

> [!practico]
> «$3$ divide a $12$» quiere decir que $12$ caramelos se reparten entre $3$ sin que sobre ninguno. Los **números primos**
> son los que solo se dejan repartir de forma trivial (entre $1$ o entre ellos mismos): $2, 3, 5, 7, 11, 13, \dots$ Son
> las «piezas de Lego» con las que se construyen todos los demás multiplicando: $12 = 2 \cdot 2 \cdot 3$.
>
> Los **criterios de divisibilidad** son atajos para saber si una división será exacta sin hacerla: un número es par si
> acaba en cifra par; es múltiplo de $3$ si la suma de sus cifras lo es ($123$: $1+2+3 = 6$, sí). Aquí no solo se usan:
> se **demuestra** por qué funcionan.


$a$ **divide** a $b$ (se escribe $a \mid b$) si existe un natural $k$ con $b = ak$. Equivalentemente, el
resto de dividir $b$ entre $a$ es $0$. Decimos que $a$ es un **divisor** de $b$ y $b$ un **múltiplo** de $a$.

> [!formal] Con rigor: congruencias (restos que se pueden sumar y multiplicar)
> **Congruencias.** Para hablar de restos con comodidad: $a \equiv b \pmod m$ significa que $a$ y $b$ dejan el
> mismo resto al dividir entre $m$ (equivale a $m \mid a - b$). Se pueden sumar y multiplicar congruencias:
> si $a \equiv a'$ y $b \equiv b'$ entonces $a + b \equiv a' + b'$ y $ab \equiv a'b'$ (pues $ab - a'b' =
> a(b - b') + b'(a - a')$ es múltiplo de $m$).

### Criterios de divisibilidad (con demostración)

Se escribe $n = \sum d_i 10^i$ con $d_i$ las cifras.

- **Por 2, 5 y 10**: basta la última cifra, porque $10$ es múltiplo de $2$, de $5$ y de $10$ y solo
  queda $d_0$.
- **Por 4 y por 8**: $100$ es múltiplo de $4$ y $1000$ lo es de $8$, así que cuentan solo las dos (o tres)
  últimas cifras.
- **Por 3 y por 9**: $10^i - 1 = 99\ldots9$ es múltiplo de $9$, luego $10^i \equiv 1 \pmod 9$ y por tanto
  $$
  n \equiv d_0 + d_1 + \cdots + d_k \pmod 9 .
  $$
  Un número es divisible por $9$ (o por $3$, que divide a $9$) si y solo si lo es la **suma de sus
  cifras**; más aún, deja el mismo resto que su suma de cifras módulo $9$.
- **Por 11**: $10 \equiv -1 \pmod{11}$, luego $10^i \equiv (-1)^i$ y
  $n \equiv d_0 - d_1 + d_2 - \cdots \pmod{11}$: la **suma alternada** de cifras, de derecha a izquierda.

**Ejemplo resuelto:** ¿resto de $7\,321\,058$ entre $9$? Suma de cifras: $7+3+2+1+0+5+8 = 26 \to 2+6 = 8$.
Resto $8$. ¿Y entre $11$? De derecha a izquierda: $8 - 5 + 0 - 1 + 2 - 3 + 7 = 8$. Resto $8$.

### Números primos

Un natural $p > 1$ es **primo** si sus únicos divisores positivos son $1$ y $p$; si no, es
**compuesto**. ($1$ no es primo por convenio, para que la factorización sea única.)

> [!formal] Con rigor: hay infinitos primos
> **Teorema (Euclides).** Hay infinitos números primos.
>
> *Demostración.* Si hubiese solo un número finito $p_1, \dots, p_m$, el número $N = p_1 p_2 \cdots p_m + 1$
> no sería divisible por ningún $p_i$ (deja resto $1$). Pero todo número $>1$ tiene algún divisor primo
> (el menor divisor mayor que $1$ de $N$ es primo), que sería uno nuevo. Contradicción. $\blacksquare$

**Cómo saber si $n$ es primo.** Si $n$ es compuesto, $n = ab$ con $1 < a \le b$, y entonces
$a \le \sqrt n$ (si no, $ab > n$). Por tanto **basta probar los divisores hasta $\sqrt n$**. Para
$91$: $\sqrt{91} < 10$, y $91 = 7 \times 13$: compuesto. La **criba de Eratóstenes** aplica esto a todos los
números a la vez: se tachan los múltiplos de cada primo $p \le \sqrt N$ empezando en $p^2$.

```python
def criba(N):
    """Lista de primos menores que N."""
    es_primo = [True] * N
    es_primo[0:2] = [False, False]
    p = 2
    while p * p < N:
        if es_primo[p]:
            for m in range(p * p, N, p):
                es_primo[m] = False
        p += 1
    return [i for i, f in enumerate(es_primo) if f]

assert len(criba(100)) == 25      # hay 25 primos menores que 100
```

## 7. Factorización, mcd y mcm

> [!practico]
> **Factorizar** es desmontar un número en sus piezas primas: $360 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5$.
>
> - El **máximo común divisor** (mcd) responde a «¿cuál es el trozo más grande que cabe un número exacto de veces en los
>   dos?». Con una cuerda de $60$ cm y otra de $90$ cm, el trozo más largo para cortar ambas sin que sobre es de $30$ cm.
> - El **mínimo común múltiplo** (mcm) responde a «¿cuándo vuelven a coincidir?». Un autobús pasa cada $10$ minutos y otro
>   cada $15$: si acaban de coincidir, lo harán de nuevo dentro de $30$.


**Teorema fundamental de la aritmética.** Todo natural $n > 1$ se escribe como producto de primos, y esa
escritura es única salvo el orden de los factores.

> [!formal] Con rigor: demostración de la factorización única
> *Existencia.* Por inducción fuerte: si $n$ es primo, ya está; si no, $n = ab$ con $1 < a, b < n$, y por
> hipótesis cada uno es producto de primos. *Unicidad.* Supongamos que existen números con dos
> factorizaciones distintas y sea $n$ el menor de ellos:
> $n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$ con $p_1 \le \dots \le p_r$ y $q_1 \le \dots \le q_s$.
> Ningún primo aparece en ambas (se cancelaría y quedaría un número menor con dos factorizaciones
> distintas), y $r, s \ge 2$ (un primo solo se factoriza de una manera). Podemos suponer $p_1 < q_1$.
> Como $p_1^2 \le n$ y $q_1^2 \le n$ con $p_1 \ne q_1$, resulta $p_1 q_1 < n$. Sea $N = n - p_1 q_1$,
> con $0 < N < n$. Tanto $p_1$ como $q_1$ dividen a $N$ (dividen a $n$ y a $p_1 q_1$). Como $N < n$, $N$ tiene
> factorización única, en la que aparecen $p_1$ y $q_1$, que son primos distintos; luego $p_1 q_1 \mid N$ y
> por tanto $p_1 q_1 \mid n$. De ahí, $q_1 \mid n / p_1 = p_2 \cdots p_r$. Pero $n / p_1 < n$ tiene
> factorización única, y en ella no figura $q_1$ (porque ningún primo se repite entre las dos
> factorizaciones de $n$). Contradicción. $\blacksquare$ (Es la prueba de Hardy y Wright, §2.11.)

**Ejemplo resuelto:** $360 = 2^3 \cdot 3^2 \cdot 5$. Dividimos entre $2$ tres veces ($360 \to 180 \to 90 \to
45$), entre $3$ dos veces ($45 \to 15 \to 5$) y queda $5$.

### mcd y mcm

El **máximo común divisor** $\operatorname{mcd}(a, b)$ es el mayor natural que divide a ambos; el **mínimo común
múltiplo** $\operatorname{mcm}(a, b)$ es el menor positivo que es múltiplo de ambos. Con las factorizaciones:
el mcd toma cada primo con el **menor** exponente, y el mcm con el **mayor**. Como $\min(x, y) + \max(x, y) =
x + y$ para cualquier par de exponentes, se obtiene

$$
\operatorname{mcd}(a, b)\cdot \operatorname{mcm}(a, b) = a\, b .
$$

**Ejemplo:** $\operatorname{mcd}(60, 90)$: $60 = 2^2\cdot 3\cdot 5$, $90 = 2\cdot 3^2\cdot 5$; mcd $= 2\cdot 3\cdot 5 = 30$,
mcm $= 2^2\cdot 3^2\cdot 5 = 180$, y $30 \cdot 180 = 5400 = 60 \cdot 90$. $\checkmark$

### Algoritmo de Euclides

Factorizar números grandes es muy costoso; el mcd, en cambio, se calcula casi al instante sin factorizar.
Se basa en que **$\operatorname{mcd}(a, b) = \operatorname{mcd}(b, r)$ donde $r$ es el resto de dividir $a$ entre $b$**:
si $a = bq + r$, todo divisor común de $a$ y $b$ divide a $r = a - bq$, y todo divisor común de $b$ y $r$
divide a $a = bq + r$; los dos pares tienen **los mismos** divisores comunes, y por tanto el mismo
mayor. Se repite hasta que el resto sea $0$ (termina, porque los restos son naturales que decrecen
estrictamente); el último resto no nulo es el mcd. Está en los *Elementos* de Euclides (VII.1-2).

**Ejemplo resuelto: $\operatorname{mcd}(252, 198)$.**

$$
252 = 1\cdot 198 + 54,\quad 198 = 3\cdot 54 + 36,\quad 54 = 1\cdot 36 + 18,\quad 36 = 2\cdot 18 + 0 .
$$

El último resto no nulo es $18$: $\operatorname{mcd}(252, 198) = 18$. Comprobación por factores:
$252 = 2^2\cdot 3^2\cdot 7$, $198 = 2\cdot 3^2\cdot 11$, mcd $= 2\cdot 3^2 = 18$. $\checkmark$

```python
def mcd(a, b):
    while b:
        a, b = b, a % b
    return a

def mcm(a, b):
    return a // mcd(a, b) * b      # dividir antes de multiplicar evita desbordamientos en otros lenguajes
```

### Contar divisores y sumarlos

Si $n = p_1^{a_1} \cdots p_r^{a_r}$, un divisor de $n$ se forma eligiendo, para cada primo, un exponente entre
$0$ y $a_i$. Luego

$$
\tau(n) = (a_1 + 1)(a_2 + 1)\cdots(a_r + 1), \qquad
\sigma(n) = \prod_{i=1}^{r} \frac{p_i^{a_i + 1} - 1}{p_i - 1},
$$

donde $\tau$ es el número de divisores y $\sigma$ su suma (la suma de una progresión geométrica
$1 + p + \cdots + p^a$ da la fracción). **Ejemplo resuelto: $n = 48 = 2^4 \cdot 3$.**
$\tau = 5 \cdot 2 = 10$ divisores; $\sigma = \frac{2^5 - 1}{2 - 1}\cdot\frac{3^2 - 1}{3 - 1} = 31 \cdot 4 = 124$.
Comprobación enumerando: $1, 2, 3, 4, 6, 8, 12, 16, 24, 48$ son $10$ y suman $124$. $\checkmark$

**Ceros finales de un factorial.** Un cero final es un factor $10 = 2 \cdot 5$; como hay más factores $2$
que $5$, los ceros son el exponente del $5$ en $n!$, que es
$\lfloor n/5 \rfloor + \lfloor n/25 \rfloor + \lfloor n/125 \rfloor + \cdots$ (los múltiplos de $5$ aportan uno,
los de $25$ uno más, etc.). Para $25!$: $5 + 1 = 6$ ceros.

## 8. Cómo resolver problemas

Los problemas reales no vienen con la fórmula puesta. Pólya (1945) propuso cuatro fases que siguen
valiendo hoy: **entender** el problema (¿qué se pide? ¿qué datos hay?), **trazar un plan** (¿se parece a otro
conocido? ¿se puede probar con números pequeños?), **ejecutar** el plan comprobando cada paso y **mirar
atrás** (¿tiene sentido el resultado? ¿se puede obtener de otro modo?).

**Ejemplo resuelto.** *Dos luces parpadean, una cada $10$ s y otra cada $15$ s, y acaban de coincidir.
¿Cuándo vuelven a coincidir?*

1. *Entender:* piden el primer instante positivo que es múltiplo de $10$ y de $15$.
2. *Plan:* eso es el mcm.
3. *Ejecutar:* $\operatorname{mcm}(10, 15) = 10\cdot 15 / \operatorname{mcd}(10, 15) = 150/5 = 30$ s.
4. *Mirar atrás:* a los $30$ s la primera ha parpadeado $3$ veces y la segunda $2$; antes de eso
   ($10, 15, 20, 30$) solo el $30$ es común. $\checkmark$

**Regla práctica**: «¿cuándo vuelven a coincidir?» $\to$ **mcm**. «¿cuál es el mayor trozo/baldosa/grupo que
reparte todo sin sobrar?» $\to$ **mcd**.

## 9. Cálculo mental y estimación

- **Estimar antes de calcular** detecta errores: $4\,987 \times 21 \approx 5\,000 \times 20 = 100\,000$.
- **Prueba del nueve**: si $a \cdot b = c$, entonces las sumas de cifras (mod $9$) cumplen la misma relación.
  Si no se cumple, hay un error. Si se cumple, *no garantiza* que esté bien (no detecta, por ejemplo,
  cifras permutadas).
- **Descomponer** con la distributiva: $98 \times 7 = 100 \times 7 - 2 \times 7 = 686$.

## 10. Errores típicos

- Escribir $8 \div 2 \times 4 = 1$ (la multiplicación y la división se hacen de izquierda a derecha).
- Creer que $1$ es primo, o que $91$ y $51$ lo son (son $7\cdot 13$ y $3 \cdot 17$).
- Confundir mcd y mcm: el mcd nunca supera al menor de los dos números; el mcm nunca es menor que el mayor.
- Dar como resto algo $\ge$ divisor. Si $r \ge b$ la división no ha terminado.
- Fiarse de un solo cálculo. Siempre una segunda vía: la prueba inversa, otro método o una estimación.

## Repaso: lo que debe quedarte dentro de un mes

1. $n = bq + r$ con $0 \le r < b$, único.
2. $n \equiv$ (suma de cifras) mod $9$; suma alternada para $11$.
3. Primo: probar divisores hasta $\sqrt n$; factorización única.
4. mcd por Euclides; $\operatorname{mcd}\cdot\operatorname{mcm} = ab$.
5. $\tau(n) = \prod (a_i + 1)$; ceros de $n!$ = exponente del $5$.

## Siguiente

Con los naturales dominados, [[mat-enteros-fracciones]] amplía el sistema numérico a los enteros y a las
fracciones, y el nodo de álgebra básica sustituye los números por letras.
