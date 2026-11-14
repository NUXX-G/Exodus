---
id: proy-cua-simulador
title: "Proyecto: un simulador de circuitos cuánticos (vector de estado, medida, Grover, QFT, estimación de fase, Shor, ruido con matrices densidad y corrección de errores)"
area: ia-cuantica
trunk_level: 15
kind: proyecto
prerequisites: [cua-computacion-cuantica, mat-algebra-lineal]
academic_sources:
  - "Nielsen, M. A.; Chuang, I. L. Quantum Computation and Quantum Information, edición del décimo aniversario. Cambridge University Press, 2010 (caps. 4–6, 8 y 10)."
  - "Preskill, J. Lecture Notes for Physics 219/229: Quantum Information and Computation. Caltech (preskill.caltech.edu/ph229)."
  - "Shor, P. W. Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer. SIAM J. Comput. 26(5), 1997; Grover, L. K. A Fast Quantum Mechanical Algorithm for Database Search. STOC 1996."
  - "Documentación de Qiskit (IBM): convenciones de orden de cúbits y definiciones de puertas (RZ, P, CP)."
attachments: [prueba.sh]
exercises:
  - id: hito-1-un-cubit
    tier: 1
    prompt: |
      **Hito 1.** `qsim estado ARCHIVO` lee un circuito (formato del §2) con puertas de un cúbit (`h x y z s sdg t tdg rx ry rz p`) e imprime el vector de estado final con el formato del §3. Un circuito mal formado (cúbit fuera de rango, puerta desconocida, ángulo inválido, sin la línea `qubits`, o una puerta de dos cúbits sobre el mismo cúbit) termina con código 1.

      Comprueba con `bash prueba.sh ./qsim 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4bac5a402948aed6ff75339f1c8212fa9e537fee5dc4ecd39159057d8d6619e7"]
  - id: hito-2-entrelazamiento
    tier: 1
    prompt: |
      **Hito 2.** Añade `cx cz cp swap ccx` y comprueba estados entrelazados (Bell, GHZ), una QFT de 3 cúbits escrita puerta a puerta y un circuito de 5 cúbits.

      Comprueba con `bash prueba.sh ./qsim 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:42a1380bda6262b0e4222ea05cc6b3bb754327803528b2e1bfb8a516869885b0"]
  - id: hito-3-medida
    tier: 2
    prompt: |
      **Hito 3.** `qsim probs ARCHIVO` imprime las probabilidades de la base; `qsim muestras ARCHIVO N SEMILLA` ejecuta el circuito `N` veces con medidas a mitad de circuito, `reset` e instrucciones `if`, usando el generador del §4, e imprime cuántas veces sale cada valor del registro clásico (incluida la teleportación). `qsim estado` rechaza con código 1 un circuito con medidas.

      Comprueba con `bash prueba.sh ./qsim 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:b6bace04c4c36c36d54608b1b9255e83ec96b760b3adf71b3b73ea2f5b262cc0"]
  - id: hito-4-grover
    tier: 2
    prompt: |
      **Hito 4.** `qsim grover n m` simula el algoritmo de Grover con `n` cúbits y el estado marcado `m`, e imprime el número óptimo de iteraciones `K` y la probabilidad de medir `m` tras 0, 1, …, K+1 iteraciones (§5).

      Comprueba con `bash prueba.sh ./qsim 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f77d8c393e3a9d0467f7355ee079b61676141776ba572130a7ea3785a252b0fd"]
  - id: hito-5-qft-y-fase
    tier: 2
    prompt: |
      **Hito 5.** `qsim qft n x` imprime QFT|x⟩ y `qsim fase n num den` simula la estimación de fase con `n` cúbits de conteo para el autovalor e^{2πi·num/den} e imprime los tres resultados más probables (§5).

      Comprueba con `bash prueba.sh ./qsim 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:f1b028690483b30555f772746245b1910c9e22132ee2adcbd52baacdedb2dfa5"]
  - id: hito-6-shor
    tier: 3
    prompt: |
      **Hito 6.** `qsim orden a N` simula la búsqueda del orden de Shor (registro de conteo de 2⌈log₂N⌉ cúbits, multiplicación modular controlada y QFT inversa), imprime la distribución del registro de conteo, el orden `r` hallado con fracciones continuas y los factores de `N` (§5).

      Comprueba con `bash prueba.sh ./qsim 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:7e1cc56bdcc626e222c3b7cbd3709d18b5e3d9be4c63603212d5b38956706622"]
  - id: hito-7-ruido
    tier: 3
    prompt: |
      **Hito 7.** `qsim ruido ARCHIVO p` simula el circuito con matrices densidad aplicando un canal despolarizante de parámetro `p` tras cada puerta en cada cúbit sobre el que actúa, e imprime la diagonal, la pureza y la fidelidad con el estado ideal (§6).

      Comprueba con `bash prueba.sh ./qsim 7`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:08a5762d666b0ca2710053e0458e3347b8ed2ac10f01e4de694727185a70aede"]
  - id: hito-8-correccion-de-errores
    tier: 3
    prompt: |
      **Hito 8.** `qsim codigo p a` protege el estado cos(a)|0⟩ + sin(a)|1⟩ con el código de repetición de 3 cúbits frente a un canal de inversión de bit de probabilidad `p` en cada cúbit, lo decodifica por mayoría y compara la fidelidad con la de un cúbit sin proteger (§6).

      Comprueba con `bash prueba.sh ./qsim 8`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d80b8535ed860e81a29859e3102ece2510b38833e6736fb1065b712a2cb523f2"]
---

Vas a escribir **`qsim`**, un simulador de circuitos cuánticos de verdad: lee circuitos de un archivo, los ejecuta sobre un vector de estado de hasta 16 cúbits, mide con colapso y control clásico,
implementa los algoritmos que justifican la computación cuántica (Grover, la transformada cuántica de Fourier, la estimación de fase y la búsqueda del orden de Shor) y simula ruido con matrices densidad para
ver por qué hace falta la corrección de errores. Es la forma más directa de entender [[cua-computacion-cuantica]]: un algoritmo cuántico deja de ser magia cuando has escrito el bucle que multiplica las
amplitudes y has visto la interferencia en tus propios números.

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `qsim` en el lenguaje que quieras (Python con o sin NumPy, Rust, C++, Julia…), con siete órdenes:

| Orden | Hace | Hito |
|---|---|---|
| `qsim estado ARCHIVO` | imprime el vector de estado final | 1 y 2 |
| `qsim probs ARCHIVO` | imprime las probabilidades | 3 |
| `qsim muestras ARCHIVO N SEMILLA` | ejecuta `N` veces con medidas y cuenta los resultados | 3 |
| `qsim grover n m` | algoritmo de Grover | 4 |
| `qsim qft n x` y `qsim fase n num den` | QFT y estimación de fase | 5 |
| `qsim orden a N` | búsqueda del orden de Shor y factorización | 6 |
| `qsim ruido ARCHIVO p` y `qsim codigo p a` | matrices densidad, canales y código de repetición | 7 y 8 |

El adjunto **`prueba.sh`** ejecuta tu programa sobre circuitos preparados y da un código por hito si todo coincide; con `-v` muestra cada salida. Los errores van por la salida de error con código 1; la
prueba solo mira la salida estándar y el código de salida.

## 2. El formato de los circuitos

Una instrucción por línea; `#` empieza un comentario; las líneas vacías se ignoran.

- La primera instrucción es `qubits n` (1 ≤ n ≤ 16). Puede seguirle `bits m` (número de bits clásicos; 0 si no se indica).
- **Puertas de un cúbit**: `h q`, `x q`, `y q`, `z q`, `s q`, `sdg q`, `t q`, `tdg q`, y con ángulo `rx θ q`, `ry θ q`, `rz θ q`, `p θ q`.
- **Puertas de varios cúbits**: `cx c t`, `cz a b`, `cp θ a b`, `swap a b` y `ccx c1 c2 t` (los cúbits de una misma puerta deben ser distintos).
- **No unitarias**: `measure q b` (mide el cúbit `q` y guarda el resultado en el bit `b`), `reset q` (mide y, si sale 1, aplica `x`), e `if b v PUERTA …` (aplica la puerta solo si el bit `b` vale `v`, 0 o 1).
- **Ángulos**: un decimal (`0.5`, `-1.25`) o una expresión con π de la forma `pi`, `pi/4`, `3*pi/4`, `-pi/2` (expresión regular `-?(\d+(\.\d+)?|(\d+\*)?pi(/\d+)?)`).

Las matrices son las de Qiskit: H = (1/√2)[[1, 1], [1, −1]]; S = diag(1, i); T = diag(1, e^{iπ/4}); RX(θ) = [[cos θ/2, −i sen θ/2], [−i sen θ/2, cos θ/2]]; RY(θ) = [[cos θ/2, −sen θ/2], [sen θ/2, cos θ/2]];
**RZ(θ) = diag(e^{−iθ/2}, e^{iθ/2})** y **P(θ) = diag(1, e^{iθ})** (difieren en una fase global, que en este simulador sí se ve); CP(θ) multiplica por e^{iθ} el término con los dos cúbits a 1; CX invierte el destino si
el control vale 1.

## 3. Convenciones de salida

- **Orden de los cúbits**: el índice de un estado de la base es `Σ q_k · 2^k`, con el **cúbit 0 como bit menos significativo**, y se escribe en binario con `n` dígitos y el cúbit `n − 1` a la izquierda (como
  Qiskit). Así, `x 0` sobre 3 cúbits da `001`.
- **`estado`**: una línea `bits re im` por cada estado con |amplitud| > 10⁻⁹, en orden creciente. **`probs`**: `bits p` por cada estado con p > 10⁻⁹.
- **Números**: con 6 decimales, como el **redondeo correcto de x + 10⁻¹²**, y `0.000000` en lugar de `-0.000000`. El sumando evita que un empate exacto (Grover con 8 estados da exactamente 0,9453125) se
  redondee distinto en Python, en C o en JavaScript: es un problema real de reproducibilidad numérica, no un capricho de la prueba.

## 4. Medida y números aleatorios

Para que los resultados sean reproducibles, todos usamos el mismo generador: un congruencial lineal de 64 bits con estado inicial `s = SEMILLA`, y en cada llamada
`s ← (6364136223846793005 · s + 1442695040888963407) mod 2⁶⁴` y `u = ⌊s / 2¹¹⌋ / 2⁵³` (un número en [0, 1)).

- **`measure q b`**: calcula `p1` (la probabilidad de que el cúbit `q` valga 1), pide un `u`, el resultado es 1 si `u < p1` y 0 si no, colapsa el estado (anula las amplitudes incompatibles y renormaliza) y lo
  guarda en el bit `b`. `reset` consume también un `u`.
- **`muestras ARCHIVO N SEMILLA`**: un solo generador para las `N` ejecuciones, cada una desde |0…0⟩ y con los bits a 0. Imprime `valor cuenta` para cada valor del registro clásico que haya salido, con el bit
  `m − 1` a la izquierda, en orden creciente.
- `estado` y `probs` rechazan con código 1 los circuitos con `measure`, `reset` o `if`.

## 5. Algoritmos

- **`grover n m`**: N = 2ⁿ estados, θ = arcsen(1/√N), **K = ⌊π / (4θ)⌋**. Parte de la superposición uniforme; cada iteración es el oráculo (cambia el signo de |m⟩) seguido de la difusión 2|s⟩⟨s| − I. Imprime
  `k K` y luego `j p_j` para j = 0, 1, …, K + 1, donde `p_j` es la probabilidad de medir `m` tras `j` iteraciones. Verás que pasarse de iteraciones **empeora** el resultado.
- **`qft n x`**: imprime, con el formato de `estado`, QFT|x⟩ = (1/√N) Σ_y e^{2πi·xy/N} |y⟩. Impleméntala con puertas (H, CP y SWAP) y compruébala contra la fórmula.
- **`fase n num den`**: estimación de fase con `n` cúbits de conteo (los cúbits 0 a n−1; el cúbit `j` controla U^{2^j}) para un autoestado de U con autovalor e^{2πiφ}, φ = num/den, seguida de la QFT
  inversa. Imprime los **tres** resultados `m p` más probables (probabilidad descendente; si dos difieren en menos de 10⁻⁹, `m` ascendente).
- **`orden a N`** (con mcd(a, N) = 1): w = ⌈log₂N⌉ cúbits de trabajo (en |1⟩) y t = 2w de conteo (cúbits 0 a t−1); el cúbit `j` controla la multiplicación por a^{2^j} mód N sobre el registro de trabajo (los
  valores ≥ N no cambian); QFT inversa sobre el conteo. Imprime `m p` para cada resultado del registro de conteo con p > 10⁻⁴, en orden creciente de `m`. Después, recorre los resultados `m ≠ 0` con p > 10⁻⁴ de
  más a menos probable (empates como arriba) y, para cada uno, los convergentes h/d de m/2ᵗ con d < N en orden; el **primer** `d` con a^d ≡ 1 (mód N) es el orden: imprime `r d` (o `r -` si no aparece). Por
  último, si `r` es par y a^{r/2} ≢ −1 (mód N), imprime `factores g1 g2` con g1 = mcd(a^{r/2} − 1, N) y g2 = mcd(a^{r/2} + 1, N); si no, `factores -`.

## 6. Ruido y corrección de errores

- Una **matriz densidad** ρ describe estados mezcla; una puerta U la transforma en UρU†, y un **canal** en Σ_k K_k ρ K_k†.
- **`ruido ARCHIVO p`**: tras cada puerta, aplica a cada cúbit sobre el que actúa (en el orden de sus argumentos) el canal **despolarizante** ρ → (1 − p)ρ + (p/3)(XρX + YρY + ZρZ). Imprime la diagonal (`bits p`
  con p > 10⁻⁹), y después `pureza Tr(ρ²)` y `fidelidad ⟨ψ|ρ|ψ⟩`, con |ψ⟩ el estado ideal sin ruido.
- **`codigo p a`**: |ψ⟩ = cos(a)|0⟩ + sin(a)|1⟩ (el ángulo `a` en el formato de los circuitos). Primero un solo cúbit con el canal de **inversión de bit** ρ → (1 − p)ρ + pXρX: imprime `sin_codigo F`, la
  fidelidad ⟨ψ|ρ|ψ⟩. Después, el código de repetición: |ψ⟩ en el cúbit 0, codificado con `cx 0 1` y `cx 0 2`; el mismo canal sobre cada uno de los tres cúbits; decodificación con `cx 0 1`, `cx 0 2` y
  `ccx 2 1 0`; e imprime `con_codigo F` con la fidelidad del estado reducido del cúbit 0. Comprueba tu resultado con la teoría: el código falla si hay dos o tres inversiones, con probabilidad 3p² − 2p³.

## 7. Arquitectura recomendada

Un analizador del formato que produce una lista de instrucciones; un tipo `Estado` con el vector de 2ⁿ complejos y una función que aplica una puerta de un cúbit recorriendo los pares de índices que difieren en
ese bit (no construyas matrices de 2ⁿ × 2ⁿ: con 16 cúbits serían 65 536²); las puertas controladas como permutaciones o fases sobre los índices; y, para el ruido, una matriz densidad de 2ⁿ × 2ⁿ (con pocos
cúbits). Escribe pruebas propias de invariantes: la norma vale 1 después de cada puerta, H·H = I, la QFT seguida de su inversa es la identidad, y la traza de ρ vale 1.

## 8. Calidad exigida

- Pruebas unitarias de cada puerta contra su matriz y de cada algoritmo contra su fórmula analítica (Grover: sen²((2k + 1)θ); estimación de fase: |Σ_k e^{2πik(φ − m/2ⁿ)}|²/2²ⁿ).
- Medir el tiempo con 16 cúbits y con 20 cúbits: un vector de estado crece como 2ⁿ, y ese crecimiento es la razón de ser de los ordenadores cuánticos.
- Comparar algún circuito con Qiskit (`Statevector.from_instruction`), cuidando el orden de los cúbits.

## 9. Ampliaciones

Bernstein-Vazirani y Deutsch-Jozsa; Shor con N = 35 o 51 y un análisis del número esperado de repeticiones; **VQE** para la energía del hidrógeno molecular o **QAOA** para el corte máximo de un grafo
pequeño; el código de Shor de 9 cúbits o el de superficie de distancia 3 con medida de síndromes; simulación por **trayectorias** (Monte Carlo) del ruido en lugar de matrices densidad; y un simulador de
**estabilizadores** (Gottesman-Knill) que simula circuitos de Clifford con miles de cúbits.

## 10. Recursos

Nielsen y Chuang (capítulos 4 a 6 para circuitos y algoritmos, 8 para ruido y 10 para corrección de errores), los apuntes de Preskill, los artículos de Grover (1996) y Shor (1997), y la documentación de
Qiskit para comparar convenciones. Más en la [página de recursos de la rama](/recursos/ia-cuantica).
