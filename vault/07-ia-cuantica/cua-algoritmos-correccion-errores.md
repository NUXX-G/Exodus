---
id: cua-algoritmos-correccion-errores
title: "Algoritmos cuánticos y corrección de errores: estimación de fase, amplificación de amplitud, Shor en detalle, simulación hamiltoniana (Trotter), algoritmos variacionales, ruido y canales, códigos estabilizadores (repetición, Shor, Steane, superficie), umbral, tolerancia a fallos y estados mágicos"
area: ia-cuantica
trunk_level: 16
prerequisites: [cua-computacion-cuantica, proy-cua-simulador, mat-algebra-lineal-avanzada]
academic_sources:
  - "Nielsen, M. A.; Chuang, I. L. Quantum Computation and Quantum Information, ed. 10.º aniversario. Cambridge University Press, 2010 (caps. 5, 8 y 10); Preskill, J. Lecture Notes for Ph219/CS219, Caltech (cap. 7, corrección de errores)."
  - "Fowler, A. G.; Mariantoni, M.; Martinis, J.; Cleland, A. Surface codes: Towards practical large-scale quantum computation. Phys. Rev. A 86, 032324, 2012; Bravyi, S.; Kitaev, A. Universal quantum computation with ideal Clifford gates and noisy ancillas. Phys. Rev. A 71, 022316, 2005."
  - "Google Quantum AI. Quantum error correction below the surface code threshold. Nature 638, 2025, pp. 920-926; Gidney, C.; Ekerå, M. How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits. Quantum 5, 433, 2021; Gidney, C. How to factor 2048 bit RSA integers with less than a million noisy qubits. arXiv:2505.15917, 2025."
  - "Preskill, J. Quantum Computing in the NISQ era and beyond. Quantum 2, 79, 2018; documentación de Qiskit 1.3 y Qiskit Aer 0.15, consultada en noviembre de 2026."
exercises:
  - id: estimacion-de-fase
    tier: 2
    prompt: |
      La estimación de fase con t = 3 cúbits de lectura sobre un autovector con fase φ = 1/3 (en unidades de vuelta). ¿Qué resultado m (entero de 0 a 7) es el más probable y con qué probabilidad sale?

      Respuesta: `m;probabilidad` con 4 decimales.
    answers: ["sha256:ac5fc1055490aac03ffb74f6106e016f944e9c7ac9b5c9eee636e95324c42838"]
  - id: iteraciones-de-grover
    tier: 2
    prompt: |
      Grover en N = 64 elementos con un solo marcado: ¿cuántas iteraciones ⌊(π/4)√N⌋ se hacen y qué probabilidad de acierto hay al medir después?

      Respuesta: `iteraciones;probabilidad` con 4 decimales.
    answers: ["sha256:ae96467815c0ec7ec3e7bcb0e7287756d083707f5afb722d8565050dfc590da8"]
  - id: shor-para-21
    tier: 1
    prompt: |
      En el algoritmo de Shor para N = 21 con a = 2, ¿qué orden r tiene 2 módulo 21, y qué factores dan mcd(2^(r/2) ± 1, 21)?

      Respuesta: `r;factor,factor` (factores de menor a mayor).
    answers: ["sha256:ef0cc54b596d0629e89086a84403160543c74c4f3474d8e908b9b352eef04d26"]
  - id: codigo-de-repeticion
    tier: 1
    prompt: |
      Un código de repetición de 3 cúbits frente a errores de bit independientes con probabilidad p = 0,1 por cúbit falla si se equivocan 2 o 3. ¿Cuál es su probabilidad de error lógico?

      Respuesta: con 4 decimales.
    answers: ["sha256:205dedb85ccba3c703f3285ff30538c0a7545c12dc75442b7da6344e7f054711"]
  - id: sindromes
    tier: 2
    prompt: |
      En el código de bit de 3 cúbits se miden Z₁Z₂ y Z₂Z₃ (cada bit del síndrome vale 1 si el resultado es −1). ¿Qué síndrome da un error X en el segundo cúbit y cuál en el tercero?

      Respuesta: `segundo;tercero`, cada uno como dos bits (Z₁Z₂ y luego Z₂Z₃).
    answers: ["sha256:cdcb8dc19fa511a15e24ac93b2dbb3f219db262eae60c3b85376e593a85a6632"]
  - id: codigo-de-superficie
    tier: 3
    prompt: |
      Para un código de superficie, la tasa de error lógico por ciclo se aproxima por p_L ≈ A·(p/p_umbral)^((d+1)/2). Con A = 0,1, p = 10⁻³ y p_umbral = 10⁻², ¿qué log₁₀ p_L se obtiene con distancia d = 5 y con d = 7?

      Respuesta: `d5;d7` (dos enteros).
    answers: ["sha256:944a164886bd1cf04acaf22d983ba82d349a0cf7b338b95dad6c2df340a65d5f"]
  - id: codigo-de-steane
    tier: 1
    prompt: |
      ¿Qué parámetros ⟦n, k, d⟧ tiene el código de Steane?

      Respuesta: `n;k;d`.
    answers: ["sha256:dd2daba8f1c1820c19ca9841ca063fe47c8845c40519a6cc545c174e6e7d315b"]
  - id: canal-despolarizante
    tier: 1
    prompt: |
      El canal despolarizante ρ → (1 − p)ρ + p·I/2 con p = 0,3 actúa sobre |0⟩. ¿Con qué probabilidad se mide después 0?

      Respuesta: con 4 decimales.
    answers: ["sha256:1e181f0934d441445f03ff51c972ef44275b830c10a80401e53b27bf5baf327a"]
  - id: error-de-trotter
    tier: 3
    prompt: |
      Simula e^(−i(X+Z)) (t = 1) con la fórmula de Trotter de primer orden de 4 pasos, (e^(−iX/4)·e^(−iZ/4))⁴, sobre |0⟩. ¿Cuánto vale la infidelidad 1 − |⟨ψ_exacto|ψ_Trotter⟩|²?

      Respuesta: en notación científica con 3 decimales (por ejemplo `1.234e-05`).
    answers: ["sha256:3b4cb43dc43c1ac39518c14a8c25f185d878d87f233749ebc679e6feb2688187"]
  - id: vqe-de-un-cubit
    tier: 2
    prompt: |
      Para H = Z + 0,5·X y el ansatz |ψ(θ)⟩ = R_y(θ)|0⟩, la energía es ⟨H⟩ = cos θ + 0,5·sin θ. ¿Cuál es la energía mínima y en qué θ ∈ [0, 2π) se alcanza?

      Respuesta: `energia;theta` con 4 decimales.
    answers: ["sha256:e7fc8047149ab53454f1e525487184fe6bfdaaace8b2cdc14ee9424a2c724216"]
  - id: destilacion-de-estados-magicos
    tier: 2
    prompt: |
      El protocolo 15-a-1 de Bravyi y Kitaev reduce el error de los estados T de p a unos 35·p³. ¿Qué error de salida da con p = 0,01?

      Respuesta: en notación científica con 1 decimal (por ejemplo `1.2e-04`).
    answers: ["sha256:01d008fa07f1337e3edfd09f2ab9343a69fc7bc2a9ae7e168ec871aaf2c5217c"]
  - id: transformada-de-fourier-cuantica
    tier: 2
    prompt: |
      La QFT de 3 cúbits lleva |x⟩ a (1/√8)·Σₖ e^(2πi·x·k/8)|k⟩. Aplicada a |5⟩, ¿qué fase (en grados, entre 0 y 360) tiene la amplitud de |1⟩?

      Respuesta: un número.
    answers: ["sha256:0e6523810856a138a75dec70a9cf3778a5c70b83ac915f22c33f05db97cb3e68"]
---

[[cua-computacion-cuantica]] presentó los cúbits, las puertas y los algoritmos famosos; [[proy-cua-simulador]] los programó. Este nodo profundiza en las dos preguntas que deciden si la computación cuántica será útil:
**¿qué algoritmos dan una ventaja real y cuánto cuestan exactamente?** y **¿cómo se calcula con cúbits que se equivocan una vez de cada mil operaciones?** La primera lleva a la estimación de fase como pieza
universal, a la simulación de sistemas físicos y a los algoritmos variacionales; la segunda, a la corrección de errores, el teorema del umbral y la enorme sobrecarga de la tolerancia a fallos, que explica por qué
romper RSA exige hoy del orden de un millón de cúbits físicos y no unos pocos miles. Usa [[mat-algebra-lineal-avanzada]].

## Objetivos

Al terminar sabrás:

1. Analizar la estimación de fase (precisión, probabilidad de éxito) y la amplificación de amplitud, y aplicarlas a Shor y Grover con cuentas exactas.
2. Simular la evolución de un hamiltoniano con fórmulas de Trotter y acotar su error; entender VQE y QAOA y sus límites.
3. Modelar el ruido con canales cuánticos y medir su efecto.
4. Usar el formalismo de estabilizadores: códigos de repetición, Shor, Steane y de superficie, síndromes y decodificación.
5. Explicar el umbral, la tolerancia a fallos, la destilación de estados mágicos y las estimaciones de recursos actuales.

## Qué debes dominar antes

[[cua-computacion-cuantica]] (puertas, QFT, Grover, Shor a grandes rasgos), [[proy-cua-simulador]] (simulación por vector de estado) y [[mat-algebra-lineal-avanzada]] (autovalores, exponencial de matrices, productos tensoriales).

> [!question] Test de entrada
> 1. ¿Qué hace la QFT sobre |x⟩?
> 2. ¿Qué son las matrices de Pauli y qué relación de conmutación tienen X y Z?
> 3. ¿Por qué no se puede corregir un error cuántico copiando el estado tres veces, como con un bit clásico?
>
> Respuestas: lo lleva a (1/√N) Σₖ e^(2πi·xk/N)|k⟩; X = [[0, 1], [1, 0]], Y, Z = diag(1, −1), con XZ = −ZX (anticonmutan); por el teorema de no clonación, y porque medir el estado para comprobarlo lo destruye:
> hay que medir solo **propiedades conjuntas** (paridades) que no revelan la información codificada.

## 1. Estimación de fase

Si U|u⟩ = e^(2πiφ)|u⟩, la **estimación de fase** (QPE) usa t cúbits de lectura en superposición, aplica U^(2ʲ) controlada por cada uno (que acumulan fase en el registro: el «retroceso de fase») y una QFT inversa.
Si φ tiene exactamente t bits, se obtiene sin error. Si no, el resultado m sale con probabilidad

```
P(m) = sin²(π·2ᵗ·δ) / (2²ᵗ · sin²(π·δ)),   δ = φ − m/2ᵗ
```

concentrada en los valores de m más cercanos a 2ᵗφ (la mejor aproximación sale con probabilidad ≥ 4/π² ≈ 0,405); con t + ⌈log₂(2 + 1/2ε)⌉ cúbits se obtienen t bits correctos con probabilidad ≥ 1 − ε. La QPE es
el corazón de Shor (la fase es s/r), de la simulación química (la fase es una energía) y de HHL.

**Amplificación de amplitud** (generaliza Grover): si un algoritmo acierta con probabilidad a = sin²θ, cada iteración gira el estado 2θ hacia las soluciones; tras k iteraciones la probabilidad es sin²((2k + 1)θ),
máxima para k ≈ π/(4θ). Con N elementos y una solución, θ = arcsen(1/√N) y bastan ⌊(π/4)√N⌋ iteraciones. Pasarse **empeora** el resultado. La **estimación de amplitud** combina esto con la QPE para estimar a con error
O(1/k) en vez del O(1/√k) del Monte Carlo clásico: una ventaja cuadrática para integración y finanzas.

## 2. Shor en detalle

Para factorizar N: elegir a < N coprimo, encontrar el **orden** r (el menor r con aʳ ≡ 1 mód N) con QPE sobre U|y⟩ = |a·y mód N⟩, y si r es par y a^(r/2) ≢ −1, mcd(a^(r/2) ± 1, N) da factores. La QPE devuelve
aproximaciones de s/r; las **fracciones continuas** recuperan r (si s y r no son coprimos se obtiene un divisor de r, y se repite). El coste lo domina la exponenciación modular: unas O(n³) puertas para n bits. Las
estimaciones de recursos han bajado mucho: Gidney y Ekerå (2021) calcularon 20 millones de cúbits físicos y 8 horas para RSA-2048 con 0,1 % de error por puerta; Gidney (2025) lo rebajó a menos de un millón de
cúbits en menos de una semana. Por eso la migración poscuántica ([[sec-criptografia-aplicada]]) es urgente aunque esa máquina no exista.

## 3. Simulación hamiltoniana y algoritmos variacionales

Simular la evolución e^(−iHt) de un sistema cuántico es la aplicación más natural (Feynman, 1982). Si H = Σ Hⱼ con términos sencillos que no conmutan, la **fórmula de Trotter** aproxima
e^(−i(A+B)t) ≈ (e^(−iAt/n)·e^(−iBt/n))ⁿ con error O(t²‖[A, B]‖/n) (primer orden); las de orden superior (Suzuki) y los métodos de qubitización mejoran la dependencia. Cada exponencial de un producto de Paulis es
una rotación sencilla: e^(−iθP) = cos θ·I − i sen θ·P.

**Algoritmos variacionales** para el hardware ruidoso actual (NISQ, Preskill 2018): **VQE** prepara un estado parametrizado |ψ(θ)⟩, mide ⟨H⟩ y un optimizador clásico ajusta θ (por el principio variacional,
⟨H⟩ ≥ E₀); **QAOA** alterna el hamiltoniano del problema con uno de mezcla para problemas combinatorios. Límites serios: **mesetas estériles** (el gradiente se anula exponencialmente con el número de cúbits para
muchos ansätze), ruido, y el coste de medir muchas veces; aún no hay una ventaja práctica demostrada.

## 4. Ruido

Un cúbit real interactúa con su entorno. El estado se describe con una **matriz densidad** ρ y el ruido con **canales** (mapas completamente positivos que conservan la traza), escritos con operadores de Kraus
ρ → Σ Kᵢ ρ Kᵢ†: inversión de bit (X con probabilidad p), de fase (Z con probabilidad p), **despolarizante** (ρ → (1 − p)ρ + p·I/2) y amortiguamiento de amplitud (relajación T₁). La **fidelidad** mide cuánto se parece
el estado obtenido al deseado. Hoy, las mejores puertas de dos cúbits tienen errores del orden de 10⁻³; un algoritmo útil necesita billones de operaciones con error total pequeño: sin corrección de errores no hay
forma.

## 5. Corrección de errores y estabilizadores

La idea: codificar un cúbit lógico en varios físicos y medir **síndromes**, paridades que delatan el error sin tocar la información.

- **Código de repetición** de 3 cúbits contra inversiones de bit: |0⟩ → |000⟩, |1⟩ → |111⟩. Se miden Z₁Z₂ y Z₂Z₃ (con cúbits auxiliares); cada error X en un cúbit da un síndrome distinto y se deshace. Falla si
  se equivocan 2 o 3: probabilidad 3p² − 2p³, mejor que p si p < 1/2. El de fase es igual en la base |±⟩.
- **Código de Shor** (9 cúbits): concatena los dos y corrige cualquier error en un cúbit. Clave: corregir X y Z basta para corregir **cualquier** error, porque toda matriz de un cúbit es combinación de I, X, Y y Z y
  la medida del síndrome «discretiza» el error.
- **Formalismo de estabilizadores** (Gottesman): el código es el subespacio fijado por un grupo abeliano de productos de Paulis (los estabilizadores); ⟦n, k, d⟧ significa n cúbits físicos, k lógicos y distancia
  d (corrige ⌊(d − 1)/2⌋ errores). Los códigos **CSS** combinan dos códigos clásicos; el de **Steane** (⟦7, 1, 3⟧) sale del código de Hamming y permite aplicar muchas puertas lógicas transversalmente.
- **Código de superficie**: cúbits en una rejilla 2D con estabilizadores de 4 cúbits entre vecinos (lo único que exige el hardware es conectividad local), distancia d con unos 2d² cúbits físicos, y un **umbral**
  alto (del orden del 1 %; Fowler et al. estiman 0,57 % con su modelo de ruido). Por debajo del umbral, el error lógico por ciclo cae como p_L ≈ A·(p/p_umbral)^((d+1)/2): cada aumento de la distancia en 2 lo divide
  por un factor Λ. Los síndromes se **decodifican** con algoritmos de emparejamiento (MWPM) o redes neuronales, en tiempo real.
- **Demostración experimental**: Google Quantum AI (Nature, 2025) operó memorias de código de superficie de distancia 5 y 7 por debajo del umbral, con Λ ≈ 2,14 y un cúbit lógico de distancia 7 (101 cúbits) que vive
  más que su mejor cúbit físico.

## 6. Tolerancia a fallos y estados mágicos

El **teorema del umbral**: si el error por operación está por debajo de un valor constante, se puede calcular con error arbitrariamente pequeño con una sobrecarga solo polilogarítmica. Pero ningún código permite
hacer **todas** las puertas transversalmente (Eastin-Knill): con el código de superficie, las puertas de Clifford son baratas y la puerta T no. Se resuelve con **estados mágicos**: se preparan muchos estados
|T⟩ ruidosos y se **destilan** (Bravyi y Kitaev, 2005): el protocolo 15-a-1 consume 15 estados con error p y produce uno con error ≈ 35p³, repetible por rondas. Las «fábricas» de estados mágicos ocupan buena
parte del chip; técnicas recientes (cultivo de estados mágicos) reducen ese coste y explican parte de la bajada de las estimaciones para Shor.

## 7. Comprobar con un programa

Un código de repetición con ruido simulado en Qiskit Aer, comparando el error lógico medido con 3p² − 2p³ para varios p, y una estimación de fase con un ángulo distinto de los ejercicios (Qiskit 1.3.1 y Aer
0.15.1):

```python
# Código de repetición con ruido de bit en Qiskit Aer y estimación de fase de φ = 0,2
import numpy as np
from qiskit import QuantumCircuit, transpile
from qiskit.circuit.library import PhaseEstimation, PhaseGate
from qiskit.quantum_info import Statevector
from qiskit_aer import AerSimulator
from qiskit_aer.noise import NoiseModel, pauli_error

def error_logico(p, disparos=20000):
    ruido = NoiseModel()
    ruido.add_all_qubit_quantum_error(pauli_error([("X", p), ("I", 1 - p)]), ["id"])
    qc = QuantumCircuit(3, 3)
    qc.id([0, 1, 2])                          # cada cúbit sufre el canal de inversión de bit
    qc.measure([0, 1, 2], [0, 1, 2])
    sim = AerSimulator(noise_model=ruido, seed_simulator=7)
    cuentas = sim.run(transpile(qc, sim, optimization_level=0), shots=disparos).result().get_counts()
    return sum(n for clave, n in cuentas.items() if clave.count("1") >= 2) / disparos

for p in (0.01, 0.05, 0.2):
    print("p = %.2f  lógico medido %.4f  teórico %.4f" % (p, error_logico(p), 3 * p**2 - 2 * p**3))

t = 4
qc = QuantumCircuit(t + 1)
qc.x(t)
qc.append(PhaseEstimation(t, PhaseGate(2 * np.pi * 0.2)), range(t + 1))
prob = Statevector(qc).probabilities_dict(qargs=list(range(t)))
mejor = max(prob, key=prob.get)
print("φ = 0,2 con 4 cúbits: m = %d (m/16 = %.4f) con probabilidad %.4f" % (int(mejor[::-1], 2), int(mejor[::-1], 2) / 16, prob[mejor]))
```

Salida (el error lógico simulado sigue la fórmula; la QPE devuelve la mejor aproximación de 4 bits con alta probabilidad):

```
p = 0.01  lógico medido 0.0003  teórico 0.0003
p = 0.05  lógico medido 0.0072  teórico 0.0073
p = 0.20  lógico medido 0.1023  teórico 0.1040
φ = 0,2 con 4 cúbits: m = 3 (m/16 = 0.1875) con probabilidad 0.8756
```

## 8. Errores típicos

- Confundir el número de cúbits lógicos de un algoritmo con el de cúbits físicos necesarios (la diferencia es de miles por lógico).
- Hacer más iteraciones de Grover de las óptimas; leer el registro de la QPE con el orden de bits equivocado (cada biblioteca tiene su convenio).
- Olvidar que la QPE es probabilística cuando la fase no tiene representación exacta, y que Shor puede necesitar repetir.
- Creer que corregir errores exige medir los datos: se miden solo paridades.
- Extrapolar resultados variacionales de pocos cúbits sin tener en cuenta las mesetas estériles y el ruido.

## 9. Resumen

- QPE: P(m) = sin²(π2ᵗδ)/(2²ᵗsin²(πδ)); base de Shor, química y HHL. Amplificación de amplitud: sin²((2k + 1)θ), k ≈ π/(4θ); estimación de amplitud.
- Shor: orden por QPE, fracciones continuas, mcd(a^(r/2) ± 1, N); recursos: 20 millones (2021) → menos de un millón de cúbits (2025) para RSA-2048.
- Trotter (error O(t²‖[A, B]‖/n)); VQE, QAOA, mesetas estériles.
- Canales (Kraus): bit, fase, despolarizante, amortiguamiento; fidelidad.
- Estabilizadores: repetición (3p² − 2p³), Shor, Steane ⟦7,1,3⟧, superficie (umbral ~1 %, p_L ∝ (p/p_umbral)^((d+1)/2), Λ ≈ 2 en el experimento de Google).
- Umbral, Eastin-Knill, estados mágicos y destilación 15-a-1 (35p³).

## Repaso: lo que debe quedarte dentro de un mes

1. La estimación de fase es la pieza común de casi todos los algoritmos con ventaja exponencial.
2. Grover: ⌊(π/4)√N⌋ iteraciones; pasarse empeora.
3. Se miden paridades, nunca los datos codificados.
4. Por debajo del umbral, más distancia = error lógico exponencialmente menor.
5. La puerta T cuesta estados mágicos destilados.

## Siguiente

`lab-cua-tomografia` (reconstruir un estado y detectar un espía a partir de recuentos de medidas).
