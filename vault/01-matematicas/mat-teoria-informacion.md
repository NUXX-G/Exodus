---
id: mat-teoria-informacion
title: "Teoría de la información: entropía, compresión, información mutua, capacidad de canal y códigos correctores"
area: matematicas
trunk_level: 12
prerequisites: [mat-probabilidad, mat-matematica-discreta]
academic_sources:
  - "Cover, T. M.; Thomas, J. A. Elements of Information Theory, 2ª ed. Wiley-Interscience, 2006."
  - "MacKay, D. J. C. Information Theory, Inference, and Learning Algorithms. Cambridge University Press, 2003."
exercises:
  - id: entropia-diadica
    tier: 1
    prompt: |
      Una fuente emite cuatro símbolos con probabilidades $\frac12, \frac14, \frac18, \frac18$. ¿Cuál es su entropía en bits? Respuesta: un número.
    answers: ["sha256:f4881c772c8950930750e103abbe15b6720b84168921e66850d5800500ea0865"]
  - id: entropia-binaria
    tier: 1
    prompt: |
      ¿Cuánto vale la entropía binaria $H(0{,}1) = -0{,}1\log_2 0{,}1 - 0{,}9\log_2 0{,}9$? Respuesta: con **4 decimales**.
    answers: ["sha256:410ae0fe1b4a2b341e350e1318c08cd592c9311f10eda7cf1d0f79f6ff968871"]
  - id: entropia-de-una-fuente
    tier: 1
    prompt: |
      ¿Cuál es la entropía en bits de la fuente $(0{,}4;\ 0{,}2;\ 0{,}2;\ 0{,}1;\ 0{,}1)$? Respuesta: con **4 decimales**.
    answers: ["sha256:539f732f3e766fe5dcfc31fe7eb79930d32c29c918a81eb90d2a6b8016f87d34"]
  - id: shannon-hartley
    tier: 1
    prompt: |
      Un canal gaussiano tiene ancho de banda 1 MHz y relación señal-ruido de 20 dB. ¿Cuál es su capacidad en Mbit/s? Respuesta: con **4 decimales**.
    answers: ["sha256:ba9cb322fa7b325b23daeaea784f75e72c45e57e72a173fb3979b7bdc402105a"]
  - id: desigualdad-de-kraft
    tier: 1
    prompt: |
      ¿Cuánto vale $\sum 2^{-l_i}$ para las longitudes $(1, 2, 2, 3)$? ¿Existe un código prefijo binario con esas longitudes? Respuesta: `suma;si` o `suma;no`.
    answers: ["sha256:9529006d55544dc4019fc14783ae80931b7a865ab3410786d013775fcebf94e1"]
  - id: huffman
    tier: 2
    prompt: |
      Construye un código de Huffman para la fuente $(0{,}5;\ 0{,}2;\ 0{,}15;\ 0{,}1;\ 0{,}05)$. ¿Cuál es su longitud media en bits por símbolo? Respuesta: un número.
    answers: ["sha256:312115dbd13c05f6d2f2bca8d9492f4fbd589ac17ae156bb701a2710afac7e45"]
  - id: divergencia-kl
    tier: 2
    prompt: |
      Calcula $D(p\|q)$ en bits con $p = (\frac12, \frac12)$ y $q = (0{,}9;\ 0{,}1)$. Respuesta: con **4 decimales**.
    answers: ["sha256:6de5461972c31571c78a2fe71cc4d1763a0e5028e8df31527380ea4a20251f12"]
  - id: informacion-mutua
    tier: 2
    prompt: |
      Por un canal binario simétrico con probabilidad de error $0{,}1$ se envían bits equiprobables. ¿Cuánto vale $I(X; Y)$ en bits? Respuesta: con **4 decimales**.
    answers: ["sha256:9ad30fe0a57d8ea78f117812efda48e8a2f4646b4be8a31efb153eb5ea033c8f"]
  - id: canal-de-borrado
    tier: 2
    prompt: |
      ¿Cuál es la capacidad (bits por uso) de un canal binario de borrado que borra cada bit con probabilidad $0{,}25$? Respuesta: un número.
    answers: ["sha256:ce5d3aa79ae56155078af52e8fac68eb2d0a78489f82bc26c1e1bbc667ba9fde"]
  - id: tasa-distorsion
    tier: 2
    prompt: |
      ¿Cuántos bits por muestra hacen falta como mínimo para describir una fuente gaussiana de varianza 1 con error cuadrático medio $D = 0{,}1$? Respuesta: con **4 decimales**.
    answers: ["sha256:1ee2389ebf6f5cc8f192aaee53a768f91d72a724bbec1fb4c83ee444da74370f"]
  - id: entropia-diferencial
    tier: 2
    prompt: |
      ¿Cuál es la entropía diferencial en bits de una normal de media 0 y desviación típica 2? Respuesta: con **4 decimales**.
    answers: ["sha256:819021a8af29e18e34c97d9adb1c8d51b921f1c23462b6548b4566656a90a049"]
  - id: canal-z
    tier: 3
    prompt: |
      En el canal Z, el 0 llega siempre bien y el 1 se convierte en 0 con probabilidad $\frac12$. ¿Cuál es su capacidad en bits por uso? Respuesta: con **4 decimales**.
    answers: ["sha256:d3c2a520ed3f011ced2302bfdd0b68151a1ba63eaa0f3ab959f372c8d9e877f4"]
  - id: hamming-7-4
    tier: 3
    prompt: |
      Se transmite con el código de Hamming (7,4), que corrige un error por bloque, por un canal binario simétrico con $p = 0{,}01$. ¿Con qué probabilidad un bloque se decodifica mal? Respuesta: con **6 decimales**.
    answers: ["sha256:ebd9656c0080ffe8065512dd16ab943e076a591593293087c7e024b099824574"]
  - id: codificacion-aritmetica
    tier: 3
    prompt: |
      Con $\Pr(A) = 0{,}8$ y $\Pr(B) = 0{,}2$, ¿qué anchura tiene el intervalo de la codificación aritmética del mensaje `ABA`, y cuántos bits bastan para identificarlo ($\lceil-\log_2\text{anchura}\rceil + 1$)? Respuesta: `anchura;bits`.
    answers: ["sha256:45e18605859ee99d1462c30adea4cd8bea3aa3011260511a858b92083861fa33"]
  - id: canal-simetrico
    tier: 3
    prompt: |
      Un canal de 3 símbolos tiene matriz de transición con filas $(0{,}7;\ 0{,}2;\ 0{,}1)$, $(0{,}1;\ 0{,}7;\ 0{,}2)$ y $(0{,}2;\ 0{,}1;\ 0{,}7)$. ¿Cuál es su capacidad en bits por uso? Respuesta: con **4 decimales**.
    answers: ["sha256:fcd37ebd416ebfd6e288117568d168b16290396879e16a36d9e552b5769eaf34"]
  - id: desigualdad-de-fano
    tier: 3
    prompt: |
      Se quiere adivinar $X$ (4 valores posibles) a partir de $Y$, y $H(X|Y) = 1$ bit. Por la desigualdad de Fano, $H(P_e) + P_e\log_2 3 \ge 1$. ¿Cuál es la menor probabilidad de error posible? Respuesta: con **4 decimales**.
    answers: ["sha256:c1ec50002b21c5cf4e532735039880ad1cfa3b59abbf5beeab82319e53e80781"]
---

# Teoría de la información: entropía, compresión, información mutua, capacidad de canal y códigos correctores

En 1948 Claude Shannon respondió a dos preguntas con una sola teoría: **¿cuánto se puede comprimir un mensaje?** (hasta su entropía, y no más) y **¿a qué
velocidad se puede transmitir sin errores por un canal ruidoso?** (hasta su capacidad, y por debajo de ella con error tan pequeño como se quiera). Las
dos respuestas son límites exactos, y las cantidades que los expresan —entropía, información mutua, divergencia de Kullback-Leibler— aparecen hoy en
compresión (ZIP, JPEG, vídeo), comunicaciones (Wi-Fi, 5G, discos), criptografía, física estadística y, sobre todo, en aprendizaje automático: la
pérdida de entropía cruzada con la que se entrena casi todo clasificador y todo modelo de lenguaje es teoría de la información.

## Objetivos

Al terminar sabrás:

1. Calcular entropía, entropía conjunta y condicional, información mutua y divergencia KL, y usar sus propiedades (regla de la cadena, no negatividad).
2. Enunciar el teorema de codificación de fuente y construir códigos prefijo óptimos (Kraft, Huffman, codificación aritmética).
3. Calcular la capacidad de canales discretos (simétrico, borrado, Z) y del canal gaussiano (Shannon-Hartley), también numéricamente (Blahut-Arimoto).
4. Entender el teorema de codificación de canal y la desigualdad de Fano.
5. Codificar y decodificar con el código de Hamming (7,4) y calcular su probabilidad de error.
6. Usar entropía diferencial y la función tasa-distorsión de una fuente gaussiana.

## Qué debes dominar antes

[[mat-probabilidad]] (distribuciones conjuntas y condicionales, esperanza, ley de los grandes números) y [[mat-matematica-discreta]] (árboles, aritmética
binaria, módulo 2). Un poco de [[mat-optimizacion]] (convexidad, Lagrange) ayuda en las demostraciones.

> [!question] Test de entrada
> 1. ¿Cuánto vale $\log_2 32$? ¿Y $\log_2(1/8)$?
> 2. Si $X$ e $Y$ son independientes, ¿cuánto vale $\Pr(X = x, Y = y)$?
> 3. ¿Cuántas cadenas binarias de longitud 10 tienen exactamente 2 unos?
>
> Respuestas: 5 y $-3$; $\Pr(X = x)\Pr(Y = y)$; $\binom{10}{2} = 45$.

## 1. Para qué sirve

- **Compresión**: Huffman y codificación aritmética (dentro de ZIP, PNG, JPEG, H.264), y el límite de lo que cualquier compresor sin pérdidas puede lograr.
- **Comunicaciones**: la capacidad dice cuánto se puede pedir a un enlace; los códigos LDPC y polares de Wi-Fi y 5G la rozan ([[ing-senales-sistemas]]).
- **Aprendizaje automático**: entropía cruzada como pérdida, KL en inferencia variacional y modelos de difusión, información mutua en selección de
  variables ([[ia-aprendizaje-estadistico]], [[ia-redes-profundas]]).
- **Criptografía y seguridad**: entropía de contraseñas y claves, secreto perfecto de Shannon ([[sec-criptografia]]).

## 2. Entropía y sus parientes

La **información** de un suceso de probabilidad $p$ es $-\log_2 p$ bits: lo improbable informa más. La **entropía** de $X$ es la información media,

$$
H(X) = -\sum_x p(x)\log_2 p(x),
$$

con $0\log 0 = 0$. Cumple $0 \le H(X) \le \log_2|\mathcal X|$, con igualdad arriba solo para la uniforme. Para dos resultados, $H(p) = -p\log_2 p - (1 - p)\log_2(1 - p)$ (entropía
binaria): $H(0{,}5) = 1$, $H(0{,}1) \approx 0{,}469$.

- **Conjunta y condicional**: $H(X, Y)$ y $H(Y|X) = \sum_x p(x)H(Y|X = x)$. **Regla de la cadena**: $H(X, Y) = H(X) + H(Y|X)$.
- **Información mutua**: $I(X; Y) = H(X) - H(X|Y) = H(X) + H(Y) - H(X, Y)$: lo que $Y$ revela sobre $X$. Es simétrica y no negativa, y vale 0 si y solo si son
  independientes.
- **Divergencia de Kullback-Leibler**: $D(p\|q) = \sum p(x)\log_2\frac{p(x)}{q(x)} \ge 0$, con igualdad solo si $p = q$ (**desigualdad de Gibbs**). No es simétrica. La
  **entropía cruzada** $H(p, q) = -\sum p\log_2 q = H(p) + D(p\|q)$: minimizarla sobre $q$ es minimizar la KL.

*Demostración de $D(p\|q) \ge 0$.* Como $\ln t \le t - 1$, $-D(p\|q)\ln 2 = \sum p\ln\frac qp \le \sum p\left(\frac qp - 1\right) = \sum q - 1 \le 0$. $\blacksquare$ De aquí salen casi todas las
desigualdades: $I(X; Y) = D(p_{XY}\|p_Xp_Y) \ge 0$, "condicionar reduce la entropía" y $H(X) \le \log_2|\mathcal X|$ (KL con la uniforme).

**Procesamiento de datos.** Si $X \to Y \to Z$ es una cadena de Markov, $I(X; Z) \le I(X; Y)$: ningún procesado de $Y$ añade información sobre $X$.

## 3. Compresión sin pérdidas

Un **código prefijo** (ninguna palabra es prefijo de otra) se decodifica sin separadores. **Desigualdad de Kraft**: existe un código prefijo binario con
longitudes $l_1, \ldots, l_m$ si y solo si $\sum 2^{-l_i} \le 1$.

**Teorema de codificación de fuente.** La longitud media $L$ de cualquier código prefijo cumple $L \ge H(X)$, y existe uno con $L < H(X) + 1$ (longitudes
$\lceil-\log_2 p_i\rceil$, de Shannon). Codificando bloques de $n$ símbolos, la longitud por símbolo tiende a $H$: **la entropía es el límite exacto de la
compresión**.

*Por qué $L \ge H$.* Con $q_i = 2^{-l_i}/\sum_j 2^{-l_j}$, $L - H = \sum p_i\log_2\frac{p_i}{q_i} - \log_2\sum 2^{-l_j} = D(p\|q) - \log_2(\text{Kraft}) \ge 0$. $\blacksquare$

**Huffman** construye el código óptimo: se fusionan repetidamente los dos símbolos menos probables. La longitud media es la suma de los pesos fusionados.

> [!example] Ejemplo resuelto 1: Huffman en una fuente de cinco símbolos
> Fuente $(0{,}4;\ 0{,}2;\ 0{,}2;\ 0{,}1;\ 0{,}1)$. Fusiones: $0{,}1 + 0{,}1 = 0{,}2$; $0{,}2 + 0{,}2 = 0{,}4$; $0{,}2 + 0{,}4 = 0{,}6$; $0{,}4 + 0{,}6 = 1$. La longitud media es $0{,}2 + 0{,}4 + 0{,}6 + 1 = 2{,}2$
> bits, frente a una entropía de $2{,}122$ bits y a los 3 bits de un código de longitud fija: el desperdicio es solo $0{,}08$ bits por símbolo. Si las probabilidades
> son potencias de $\frac12$, Huffman alcanza exactamente la entropía.

**Codificación aritmética** representa todo el mensaje como un subintervalo de $[0, 1)$ de anchura igual a su probabilidad; bastan $\lceil-\log_2\text{anchura}\rceil + 1$
bits para identificarlo. Supera a Huffman cuando hay símbolos muy probables (Huffman gasta al menos 1 bit por símbolo).

## 4. Canales y capacidad

Un **canal discreto sin memoria** es una matriz $W(y|x)$. Su **capacidad** es $C = \max_{p(x)}I(X; Y)$ bits por uso.

- **Binario simétrico** (BSC, error $p$): $C = 1 - H(p)$, con entrada uniforme.
- **Binario de borrado** (BEC, borra con probabilidad $\varepsilon$): $C = 1 - \varepsilon$.
- **Simétrico** en general (filas permutaciones unas de otras y columnas también): $C = \log_2|\mathcal Y| - H(\text{fila})$.
- **Canal Z** (el 1 se convierte en 0 con probabilidad $p$): $C = \log_2(1 + (1 - p)p^{p/(1-p)})$, con entrada no uniforme.
- **Gaussiano** con ancho de banda $B$ y relación señal-ruido $S/N$: $C = B\log_2(1 + S/N)$ bit/s (**Shannon-Hartley**).

Cuando no hay fórmula, el **algoritmo de Blahut-Arimoto** alterna dos pasos que hacen crecer $I$ y converge a la capacidad: es un ejemplo limpio de
optimización convexa ([[mat-optimizacion]]).

**Teorema de codificación de canal.** Para toda tasa $R < C$ existen códigos de longitud $n$ con probabilidad de error que tiende a 0; para $R > C$, la
probabilidad de error no puede tender a 0. La prueba de Shannon usa **códigos aleatorios** y **secuencias típicas**: con $n$ grande, casi toda la probabilidad
se concentra en unas $2^{nH}$ secuencias, cada una de probabilidad $\approx 2^{-nH}$ (equipartición asintótica, consecuencia de la ley de los grandes números).

**Desigualdad de Fano.** Si se estima $X$ a partir de $Y$ con probabilidad de error $P_e$, entonces $H(X|Y) \le H(P_e) + P_e\log_2(|\mathcal X| - 1)$: mucha incertidumbre
restante obliga a errar a menudo. Es la mitad "inversa" del teorema de canal.

> [!example] Ejemplo resuelto 2: un BSC con $p = 0{,}1$
> Con entrada uniforme, $Y$ también es uniforme: $H(Y) = 1$ y $H(Y|X) = H(0{,}1) = 0{,}469$, así que $I = 0{,}531$ bits por uso. Es la capacidad: por cada 1000 usos
> del canal se pueden enviar hasta unos 531 bits de información con error arbitrariamente pequeño. Repetir cada bit tres veces (tasa $\frac13$) solo baja
> el error a $3p^2(1 - p) + p^3 = 0{,}028$: los buenos códigos consiguen mucho más con tasas cercanas a $0{,}53$.

## 5. Códigos correctores: Hamming (7,4)

El **código de Hamming (7,4)** añade 3 bits de paridad a cada 4 de datos (tasa $\frac47$). Su matriz de comprobación $H$ tiene como columnas los números del 1 al
7 en binario; si llega $r = c + e$ con un solo error, el **síndrome** $Hr^{\mathsf T} = He^{\mathsf T}$ es la columna del bit erróneo: escrito en binario, da su posición. Corrige
cualquier error simple y falla con dos o más:

$$
P_{\text{bloque}} = 1 - (1 - p)^7 - 7p(1 - p)^6 .
$$

Con $p = 0{,}01$ eso es $\approx 0{,}002$: unas 20 veces menos que enviar los 4 bits de datos sin protección ($1 - 0{,}99^4 \approx 0{,}039$), a cambio de transmitir 7 bits en lugar de 4.
La **distancia mínima** de un código es el menor número de bits en que difieren dos palabras; con distancia $d$ se corrigen $\lfloor(d - 1)/2\rfloor$ errores
(Hamming tiene $d = 3$).

## 6. Fuentes continuas

La **entropía diferencial** $h(X) = -\int f\log_2 f$ puede ser negativa y depende de las unidades, pero las diferencias sí tienen sentido. Para una
gaussiana, $h = \frac12\log_2(2\pi e\sigma^2)$, y **la gaussiana maximiza $h$ entre las variables de varianza dada** (por eso el ruido gaussiano es el peor caso).

**Tasa-distorsión.** Comprimir **con pérdidas** una fuente gaussiana de varianza $\sigma^2$ con error cuadrático medio $D$ exige como mínimo
$R(D) = \frac12\log_2\frac{\sigma^2}{D}$ bits por muestra (si $D < \sigma^2$): cada bit adicional divide el error entre 4 (6 dB por bit, la regla de los conversores
analógico-digitales).

> [!example] Ejemplo resuelto 3: canal Z (con menos ayuda)
> En el canal Z con $p = \frac12$, escribe $I(X; Y)$ en función de $q = \Pr(X = 1)$: la salida 1 solo aparece si se envió un 1 y llegó bien, así que $\Pr(Y = 1) = q/2$ e
> $I = H(q/2) - q\,H(\tfrac12)$. Deriva, iguala a cero y comprueba que el máximo está en $q = 0{,}4$ con $C = \log_2 1{,}25 \approx 0{,}322$ bits: menos que el BSC con el mismo
> número de errores medios, pero sin malgastar usos en enviar unos.

## 7. Comprobar con un programa

Entropías, el Huffman del ejemplo 1, la capacidad del canal Z por Blahut-Arimoto frente a la fórmula y el Hamming (7,4) decodificando todos los
patrones de error.

```python
import heapq
import itertools
import math

def H(p):
    return -sum(x * math.log2(x) for x in p if x > 0)

# 1. Ejemplo resuelto 1: Huffman (longitud media = suma de fusiones) frente a la entropía.
fuente = [0.4, 0.2, 0.2, 0.1, 0.1]
cola = [(p, i) for i, p in enumerate(fuente)]
heapq.heapify(cola)
fusiones, contador = 0.0, len(fuente)
while len(cola) > 1:
    (a, _), (b, _) = heapq.heappop(cola), heapq.heappop(cola)
    fusiones += a + b
    heapq.heappush(cola, (a + b, contador))
    contador += 1
assert abs(fusiones - 2.2) < 1e-12 and H(fuente) <= fusiones < H(fuente) + 1

# 2. Ejemplo resuelto 2: capacidad del BSC p = 0,1 y error de la repetición triple.
assert abs((1 - H([0.1, 0.9])) - 0.531) < 1e-3
assert abs(3 * 0.01 * 0.9 + 0.001 - 0.028) < 1e-12

# 3. Ejemplo resuelto 3: canal Z por Blahut-Arimoto frente a log2(1,25).
W = [[1.0, 0.0], [0.5, 0.5]]
px = [0.5, 0.5]
for _ in range(2000):
    py = [sum(px[i] * W[i][j] for i in range(2)) for j in range(2)]
    c = [2 ** sum(W[i][j] * math.log2(W[i][j] / py[j]) for j in range(2) if W[i][j] > 0) for i in range(2)]
    z = sum(px[i] * c[i] for i in range(2))
    px = [px[i] * c[i] / z for i in range(2)]
py = [sum(px[i] * W[i][j] for i in range(2)) for j in range(2)]
I = H(py) - sum(px[i] * H(W[i]) for i in range(2))
assert abs(I - math.log2(1.25)) < 1e-9 and abs(px[1] - 0.4) < 1e-6

# 4. Hamming (7,4): decodificar por síndrome los 128 patrones de error con p = 0,01.
Hm = [[1, 0, 1, 0, 1, 0, 1], [0, 1, 1, 0, 0, 1, 1], [0, 0, 0, 1, 1, 1, 1]]
p, fallo = 0.01, 0.0
for e in itertools.product((0, 1), repeat=7):
    s = [sum(h * x for h, x in zip(fila, e)) % 2 for fila in Hm]
    pos = s[0] + 2 * s[1] + 4 * s[2]
    resto = list(e)
    if pos:
        resto[pos - 1] ^= 1
    if any(resto):
        k = sum(e)
        fallo += p**k * (1 - p) ** (7 - k)
assert abs(fallo - (1 - 0.99**7 - 7 * 0.01 * 0.99**6)) < 1e-15
print("Huffman", round(fusiones, 3), "bits; H =", round(H(fuente), 4), "| Hamming (7,4):", round(fallo, 6))
```

## 8. Errores típicos

- Mezclar logaritmos neperianos (nats) y en base 2 (bits) en la misma cuenta.
- Tratar la KL como una distancia simétrica.
- Creer que un código puede comprimir **todo** mensaje: por conteo, siempre hay mensajes que se alargan; solo se gana en media.
- Pensar que la capacidad es la tasa a la que "no hay errores": es el supremo de tasas con error **arbitrariamente pequeño**, con bloques largos.
- Interpretar la entropía diferencial como número de bits (puede ser negativa).
- Usar Shannon-Hartley con la SNR en dB sin convertirla ($20$ dB $= 100$).

## 9. Resumen

- $H(X) = -\sum p\log_2 p$; regla de la cadena; $I(X; Y) = H(X) - H(X|Y)$; $D(p\|q) \ge 0$ (Gibbs); entropía cruzada $= H + D$; procesamiento de datos.
- Kraft $\sum 2^{-l} \le 1$; $H \le L < H + 1$; Huffman óptimo; codificación aritmética.
- $C = \max I$: BSC $1 - H(p)$, BEC $1 - \varepsilon$, simétrico $\log|\mathcal Y| - H(\text{fila})$, Z, gaussiano $B\log_2(1 + S/N)$; Blahut-Arimoto; secuencias típicas; Fano.
- Hamming (7,4): síndrome = posición del error, $d = 3$, $P_{\text{bloque}} = 1 - (1-p)^7 - 7p(1-p)^6$.
- $h$ gaussiana $\frac12\log_2(2\pi e\sigma^2)$; $R(D) = \frac12\log_2(\sigma^2/D)$: 6 dB por bit.

## Repaso: lo que debe quedarte dentro de un mes

1. La entropía es el límite exacto de la compresión sin pérdidas.
2. La capacidad es el límite exacto de la transmisión fiable, y se alcanza con bloques largos.
3. Casi todas las desigualdades salen de $D(p\|q) \ge 0$.
4. Entrenar con entropía cruzada es minimizar una divergencia KL.
5. Un buen código añade redundancia estructurada, no repeticiones.

## Siguiente

`ing-comunicaciones` (modulación y códigos en la práctica), `sec-criptoanalisis` (entropía y distinguidores), `ia-modelos-generativos` (KL y
verosimilitud) y `mat-estadistica-matematica` (información de Fisher). La base probabilística está en [[mat-probabilidad]].
