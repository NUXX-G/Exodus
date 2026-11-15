---
id: lab-cua-tomografia
title: "Laboratorio: reconstruir estados cuánticos a partir de recuentos y detectar un espía en BB84 (tomografía, fidelidad, criba y QBER)"
area: ia-cuantica
trunk_level: 15
kind: laboratorio
prerequisites: [cua-computacion-cuantica, mat-probabilidad]
academic_sources:
  - "Nielsen, M. A.; Chuang, I. L. Quantum Computation and Quantum Information, ed. del 10.º aniversario. Cambridge University Press, 2010 (§8.4.2: tomografía de estados; §12.6: distribución cuántica de claves)."
  - "James, D. F. V.; Kwiat, P. G.; Munro, W. J.; White, A. G. Measurement of qubits. Physical Review A 64, 052312, 2001; Hradil, Z. Quantum-state estimation. Physical Review A 55, R1561, 1997 (máxima verosimilitud)."
  - "Bennett, C. H.; Brassard, G. Quantum cryptography: Public key distribution and coin tossing. Proceedings of the IEEE International Conference on Computers, Systems and Signal Processing, Bangalore, 1984."
  - "Shor, P. W.; Preskill, J. Simple Proof of Security of the BB84 Quantum Key Distribution Protocol. Physical Review Letters 85, 441, 2000 (umbral de QBER del 11 %)."
attachments: [cubit.csv, bell.csv, bb84.csv]
ctf_flag: "sha256:75c03816cdc00e69f4341deb1ee3b0574245f38ca60e3216c0639c7c60db7ddd"
exercises:
  - id: vector-de-bloch
    tier: 1
    prompt: |
      Con `cubit.csv`, estima los valores esperados ⟨X⟩, ⟨Y⟩ y ⟨Z⟩ como (n0 − n1)/(n0 + n1) en cada base.

      Respuesta: `X;Y;Z`, los tres con **3 decimales**.
    answers: ["sha256:8fb62a712807b17b02886b904857c0514d9de019113202f81ef65b87d1c1b66d"]
  - id: pureza
    tier: 2
    prompt: |
      Con ρ = (I + ⟨X⟩X + ⟨Y⟩Y + ⟨Z⟩Z)/2, ¿cuánto vale la pureza Tr ρ²? ¿Es un estado puro?

      Respuesta: con **3 decimales**.
    answers: ["sha256:0d425f5d0b0f7f127e62f34ce32b0af306036f9b19359f6d0b5f3830ae936e71"]
  - id: fidelidad-del-cubit
    tier: 2
    prompt: |
      ¿Cuál es la fidelidad ⟨ψ|ρ|ψ⟩ con el estado que se quería preparar, |ψ⟩ = Rz(0,7)·Ry(1,1)|0⟩?

      Respuesta: con **3 decimales**.
    answers: ["sha256:c9a6613c0fd1607693473042d3e2cfbf710389c63e4082d9168cc1189da5b766"]
  - id: fidelidad-del-par-de-bell
    tier: 2
    prompt: |
      Con `bell.csv`, reconstruye los correladores ⟨σₐ⊗σ_b⟩ y calcula la fidelidad con |Φ⁺⟩ = (|00⟩ + |11⟩)/√2. ¿Supera 1/2 (lo que garantiza entrelazamiento)?

      Respuesta: con **3 decimales**.
    answers: ["sha256:ff7b023626eec04bd4733d7df109beb50c646fa60c4ea13895f03326ca758d59"]
  - id: autovalor-minimo
    tier: 3
    prompt: |
      Reconstruye la matriz de densidad completa del par por inversión lineal, ρ = ¼ Σ c_ab σₐ⊗σ_b (con c_II = 1, los nueve correladores y los marginales de cada cúbit promediados sobre las tres bases del otro). ¿Cuál es su autovalor más pequeño? ¿Qué significa?

      Respuesta: con **3 decimales**.
    answers: ["sha256:9eacbef605c96e2e3568458a99c7f80941f06e77c3c410ac7d326da0aa8b671e"]
  - id: qber-de-las-dos-sesiones
    tier: 2
    prompt: |
      En `bb84.csv`, quédate con las posiciones en las que Alice y Bob usaron la misma base (la criba) y, de ellas, con las publicadas. ¿Qué porcentaje de esos bits no coincide (QBER) en cada sesión? ¿En cuál hay que abortar?

      Respuesta: `sesion1;sesion2`, en porcentaje con **1 decimal**.
    answers: ["sha256:5ff0221338a61701daa7a0fb5fa5530816609131ccc0e8d1b12a497174006af2"]
  - id: longitud-de-la-clave
    tier: 2
    prompt: |
      En la sesión buena, ¿cuántos bits quedan para la clave (cribados y no publicados)?

      Respuesta: un número.
    answers: ["sha256:f32828acecb4282c87eaa554d2e1db74e418cd6845843012463a3324028bdd9d"]
hints:
  - "Un estado de un cúbit queda determinado por su vector de Bloch: ρ = (I + r·σ)/2, con rₖ = ⟨σₖ⟩, y cada valor esperado se estima midiendo en esa base: (n₊ − n₋)/N. Para dos cúbits hacen falta los 15 valores esperados de los productos de Pauli. En BB84 solo cuentan las posiciones en las que Alice y Bob eligieron la misma base; un espía que mide y reenvía acierta la base la mitad de las veces y, cuando falla, provoca un error en la mitad de los casos: un QBER del 25 %."
  - "Para el cúbit: pureza = (1 + |r|²)/2 y fidelidad con un estado puro de vector s = (1 + r·s)/2; Rz(φ)·Ry(θ)|0⟩ tiene s = (sen θ cos φ, sen θ sen φ, cos θ). Para el par: ⟨σₐ⊗σ_b⟩ = (n₀₀ − n₀₁ − n₁₀ + n₁₁)/N y la fidelidad con Φ⁺ es (1 + ⟨XX⟩ − ⟨YY⟩ + ⟨ZZ⟩)/4. Los autovalores de ρ, con numpy.linalg.eigvalsh. La clave son los bits de Alice cribados y no publicados, en orden: agrúpalos de 8 en 8."
  - "Nielsen y Chuang (§8.4.2 y §12.6); James et al. (2001), que explican por qué la inversión lineal puede dar matrices no físicas y cómo arreglarlo con máxima verosimilitud; y Shor y Preskill (2000) para el umbral del 11 %."
---

> Dos pruebas en el laboratorio de óptica cuántica. Primero, comprobar si el montaje prepara bien un cúbit y un par entrelazado: solo se tienen los recuentos de las medidas, porque un estado cuántico no
> se puede «leer». Después, revisar el registro de dos sesiones de distribución de claves BB84 entre Alice y Bob y decidir si alguien estaba escuchando.

Medir un estado cuántico lo destruye y da un solo resultado al azar: para saber qué estado era, hay que preparar muchas copias, medirlas en varias bases y **reconstruirlo** a partir de las estadísticas
(tomografía). Y esa misma imposibilidad de observar sin perturbar es lo que hace detectable a un espía en la distribución cuántica de claves. Este laboratorio aplica [[cua-computacion-cuantica]] y la
estadística de [[mat-probabilidad]]. Los recuentos de la tomografía se generaron con el simulador Qiskit Aer con ruido de despolarización en todas las puertas (también en las que cambian de base para
medir); los de BB84, con un modelo de canal con un 1,5 % de errores.

## 1. Los artefactos

- **`cubit.csv`**: 2000 medidas en cada base X, Y y Z de un cúbit que se quería preparar en Rz(0,7)·Ry(1,1)|0⟩. Medir en X equivale a aplicar H y medir en Z; en Y, S† y después H.
- **`bell.csv`**: 2000 medidas para cada una de las 9 combinaciones de bases de un par que se quería preparar en (|00⟩ + |11⟩)/√2.
- **`bb84.csv`**: dos sesiones de 900 fotones: la base y el bit de Alice, la base y el resultado de Bob, y si ese bit se publicó para estimar los errores.

La **flag** es el texto de los 184 primeros bits de la clave de la sesión buena (los bits de Alice, en orden, de 8 en 8, el más significativo primero).

## 2. Qué deberías concluir

- **El vector de Bloch apunta en la dirección correcta pero es más corto que 1**: el ruido de despolarización encoge la esfera, y la pureza baja de 1. La fidelidad mide cuánto se parece lo preparado a lo
  que se quería; los errores al cambiar de base para medir (errores de preparación y medida, SPAM) también la reducen y son difíciles de separar de los de la preparación.
- **El par está entrelazado**: una fidelidad con Φ⁺ por encima de 1/2 lo garantiza (es un testigo de entrelazamiento), aunque el ruido la aleje de 1. Fíjate en que ⟨ZZ⟩ sale mejor que ⟨XX⟩ y ⟨YY⟩: las
  bases X e Y necesitan puertas adicionales antes de medir, y cada puerta añade ruido.
- **La inversión lineal puede dar estados imposibles.** Con un número finito de medidas, la matriz reconstruida puede tener un autovalor negativo: no es una matriz de densidad. Lo correcto es buscar el
  estado físico más compatible con los datos (**máxima verosimilitud**, Hradil; James et al.), que en la práctica sustituye a la inversión lineal.
- **El espía se delata.** En la sesión buena, el QBER (la fracción de bits publicados que no coinciden) es del orden del ruido del canal; en la otra se acerca al 25 % que produce un espía que intercepta y
  reenvía todos los fotones. Por encima del 11 % (Shor y Preskill) no se puede destilar una clave segura con BB84: se aborta. Los bits publicados se descartan siempre: ya los conoce cualquiera.

## 3. Para ir más allá

Implementa la tomografía por máxima verosimilitud (el algoritmo iterativo R·ρ·R de Hradil) y compara sus autovalores con los de la inversión lineal; calcula la concurrencia del par; añade a BB84 la
corrección de errores y la amplificación de privacidad (una función hash universal que acorta la clave según el QBER); y simula un espía que solo intercepta una fracción de los fotones para ver cómo crece el
QBER con esa fracción.
