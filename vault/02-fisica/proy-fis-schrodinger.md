---
id: proy-fis-schrodinger
title: "Proyecto: la ecuación de Schrödinger numérica (estados ligados por diferencias finitas, convergencia, pozo finito exacto, incertidumbre, efecto túnel con matrices de transferencia y paquetes de ondas con Crank-Nicolson)"
area: fisica
trunk_level: 14
kind: proyecto
prerequisites: [fis-mecanica-cuantica, mat-analisis-numerico]
academic_sources:
  - "Griffiths, D. J.; Schroeter, D. F. Introduction to Quantum Mechanics, 3ª ed. Cambridge University Press, 2018 (pozo finito, barrera, coeficientes de transmisión)."
  - "Press, W. H. et al. Numerical Recipes, 3ª ed. Cambridge University Press, 2007 (autovalores de matrices tridiagonales: QL implícito y bisección de Sturm; sistemas tridiagonales)."
  - "Crank, J.; Nicolson, P. A practical method for numerical evaluation of solutions of partial differential equations of the heat-conduction type. Proc. Cambridge Phil. Soc. 43, 1947; Goldberg, A.; Schey, H. M.; Schwartz, J. L. Computer-Generated Motion Pictures of One-Dimensional Quantum-Mechanical Transmission and Reflection Phenomena. Am. J. Phys. 35, 1967."
  - "Tsu, R.; Esaki, L. Tunneling in a finite superlattice. Applied Physics Letters 22, 1973 (efecto túnel resonante en una doble barrera)."
attachments: [prueba.sh]
exercises:
  - id: hito-1-autovalores
    tier: 1
    prompt: |
      **Hito 1.** `schro autovalores N L K POTENCIAL…` discretiza H = −½ d²/dx² + V(x) con diferencias finitas de tres puntos en N puntos interiores de [−L/2, L/2] (h = L/(N + 1), xⱼ = −L/2 + (j + 1)·h, ψ = 0 en los extremos) e imprime los K autovalores más bajos, uno por línea. Potenciales: `armonico ω` (½ω²x²), `pozo V0 a` (−V0 si |x| < a/2, 0 fuera) y `cuartico g` (g·x⁴). N < 10, K fuera de [1, N] o un potencial desconocido terminan con código 1.

      Comprueba con `bash prueba.sh ./schro 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:aaf715fd5e8f6259214bc1c05d138ca902af6429ac0e19342edeba9b553fd608"]
  - id: hito-2-orden-de-convergencia
    tier: 1
    prompt: |
      **Hito 2.** `schro orden ω N1 N2 …` calcula, con L = 20, el error |E₀ − ω/2| del estado fundamental del oscilador para cada N, imprime `N error` (error con 2 cifras significativas, `%.1e`) y, para cada par consecutivo, `orden p` con p = ln(error_anterior/error_siguiente) / ln((N_siguiente + 1)/(N_anterior + 1)) con un decimal (h es proporcional a 1/(N + 1)).

      Comprueba con `bash prueba.sh ./schro 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:d03e30f75f4ac8cadf4ace4e1f7921ae7e866efd25b7ce8513de5b16bafd30b8"]
  - id: hito-3-pozo-finito
    tier: 2
    prompt: |
      **Hito 3.** `schro pozo V0 a` resuelve de forma exacta los estados ligados del pozo finito de profundidad V0 y anchura a: con z = k·a/2 y z₀ = (a/2)·√(2·V0), los estados pares cumplen z·tan z = √(z₀² − z²) y los impares −z·cot z = √(z₀² − z²); E = k²/2 − V0. Imprime `estados n` y las energías de menor a mayor. V0 o a no positivos terminan con código 1.

      Comprueba con `bash prueba.sh ./schro 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:eb5ac63344f365e85f82131b2ea010197f85315742af0a99f8c2f77a41d1bd50"]
  - id: hito-4-valores-esperados
    tier: 2
    prompt: |
      **Hito 4.** `schro esperados N L POTENCIAL…` obtiene el estado fundamental de la discretización del hito 1 (por iteración inversa, normalizado con Σψ²·h = 1) e imprime `E0`, `x2` = ⟨x²⟩, `p2` = ⟨p²⟩ = 2(E₀ − ⟨V⟩) y `dxdp` = √(⟨x²⟩ − ⟨x⟩²)·√⟨p²⟩, que debe cumplir el principio de incertidumbre (≥ 1/2).

      Comprueba con `bash prueba.sh ./schro 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:2dd8d09c9ee715451d6b90e0e659fefe74618b526d34e848c0dee33347d93835"]
  - id: hito-5-transmision
    tier: 2
    prompt: |
      **Hito 5.** `schro transmision E V1 a1 [V2 a2 …]` calcula, para una partícula de energía E > 0 que llega desde la izquierda, los coeficientes de transmisión `T` y de reflexión `R` de un potencial constante a trozos que empieza en x = 0 (capas de altura Vᵢ y anchura aᵢ, potencial nulo fuera), imponiendo la continuidad de ψ y ψ′ en cada frontera (matrices de transferencia). E ≤ 0 o una anchura no positiva terminan con código 1.

      Comprueba con `bash prueba.sh ./schro 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:44afabdd161582932f9573b517343674a8a02dec3bb0dc366fbefe1c191a7b5a"]
  - id: hito-6-paquete-de-ondas
    tier: 3
    prompt: |
      **Hito 6.** `schro paquete N L x0 σ k0 V0 a dt PASOS` evoluciona con Crank-Nicolson, (I + iΔt·H/2)·ψⁿ⁺¹ = (I − iΔt·H/2)·ψⁿ, el paquete gaussiano ψ ∝ exp(−(x − x0)²/(4σ²) + i·k0·x) (normalizado en la malla) sobre la malla del hito 1 con una barrera de altura V0 en |x| < a/2. Tras PASOS pasos imprime `norma` (Σ|ψ|²·h − 1, con 2 cifras y 0.0e+00 por debajo de 10⁻¹²), `transmitida` (probabilidad en x ≥ a/2), `reflejada` (en x ≤ −a/2) y `x_medio`.

      Comprueba con `bash prueba.sh ./schro 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:46fc48ecc4a6dc6ab162632333aa34f635503f1dc312355a3e6f2f6750553cc0"]
---

Vas a escribir **`schro`**, un programa que resuelve la ecuación de Schrödinger en una dimensión (con ħ = m = 1) de las formas que usa la física computacional: autovalores de un hamiltoniano discretizado,
soluciones exactas para comprobarlo, coeficientes de transmisión por efecto túnel y la evolución temporal de un paquete de ondas que choca con una barrera. La meta es convertir en números y en experimentos lo
que en [[fis-mecanica-cuantica]] son fórmulas: ver que la energía del oscilador es (n + ½)ω, que Δx·Δp nunca baja de ½, que una partícula atraviesa una barrera más alta que su energía y que dos barreras pueden
dejar pasar casi todo a ciertas energías. Y aprender a fiarte de un resultado numérico: medir su orden de convergencia, compararlo con la solución exacta y vigilar la conservación de la probabilidad. Usa
[[mat-analisis-numerico]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `schro` en el lenguaje que quieras, con seis órdenes (`autovalores`, `orden`, `pozo`, `esperados`, `transmision` y `paquete`), una por hito, con el contrato exacto de los ejercicios. El adjunto
**`prueba.sh`** ejecuta tu programa en casos preparados y da un código por hito si todo coincide; con `-v` muestra cada salida.

## 2. Formato numérico

Los valores se escriben con `%.6e` de C (`-4.296393e+00`) como el redondeo correcto de **x·(1 + 10⁻¹²)** (para resolver los empates igual en cualquier lenguaje) y `0.000000e+00` para el cero. Los errores y la
desviación de la norma, con 2 cifras significativas (`%.1e`) y `0.0e+00` por debajo de 10⁻¹², el nivel del ruido de redondeo. Los autovalores y raíces deben estar convergidos a precisión de máquina (por
ejemplo, bisección hasta un intervalo de 10⁻¹³ relativo): con eso, cualquier método correcto da las mismas siete cifras.

## 3. Estados ligados por diferencias finitas

Con la malla xⱼ = −L/2 + (j + 1)·h, j = 0, …, N − 1, h = L/(N + 1), y ψ = 0 en ±L/2 (una «caja» lo bastante grande para que la función de onda ya sea despreciable allí), la segunda derivada se aproxima con
(ψⱼ₊₁ − 2ψⱼ + ψⱼ₋₁)/h². El hamiltoniano queda como una matriz **tridiagonal simétrica**: diagonal 1/h² + V(xⱼ) y fuera de ella −1/(2h²). Sus autovalores aproximan las energías. Dos métodos clásicos, igual de
válidos para el contrato:

- **Bisección con secuencias de Sturm**: el número de autovalores menores que λ es el número de pivotes negativos de la factorización de H − λI (qᵢ = dᵢ − λ − eᵢ²/qᵢ₋₁); con él se encierra cada autovalor por bisección.
- **QL implícito** (Numerical Recipes, `tqli`): rotaciones que diagonalizan la matriz tridiagonal; da todos los autovalores a la vez.

El estado fundamental se obtiene por **iteración inversa**: resolver (H − σI)z = y con σ un poco por debajo de E₀ (sistema tridiagonal: algoritmo de Thomas) y normalizar, unas pocas veces. Con ψ normalizada
(Σψⱼ²·h = 1), ⟨x²⟩ = Σxⱼ²ψⱼ²·h y ⟨p²⟩ = 2(E₀ − ⟨V⟩) (porque E₀ = ⟨p²⟩/2 + ⟨V⟩). En el oscilador armónico, Δx·Δp = ½ exactamente: es el estado de incertidumbre mínima.

**Orden de convergencia**: el error de la aproximación de tres puntos es O(h²); si al duplicar los puntos el error se divide entre 4, el método es de orden 2. Con un potencial discontinuo (el pozo), la
convergencia es peor, porque la malla no ve exactamente dónde está el borde: compáralo.

## 4. El pozo finito, exacto

Para V = −V0 en |x| < a/2, con k = √(2(E + V0)) dentro y κ = √(−2E) fuera, las condiciones de continuidad dan, con z = k·a/2 y z₀ = (a/2)√(2V0): z·tan z = √(z₀² − z²) (estados pares) y −z·cot z = √(z₀² − z²)
(impares). Cada intervalo [nπ/2, (n + 1)π/2] con nπ/2 < z₀ contiene exactamente una solución, alternando pares e impares, así que hay ⌈z₀/(π/2)⌉ estados ligados: **siempre al menos uno**, por estrecho o poco
profundo que sea el pozo (en una dimensión). Resuelve cada ecuación por bisección; si usas la forma con tangente, empieza y acaba un poco dentro del intervalo para evitar los polos (o multiplica por cos z y sen z para
quitarlos).

## 5. Efecto túnel: matrices de transferencia

Para un potencial constante a trozos, en cada región ψ es combinación de e^(±iqx) con q = √(2(E − V)) (imaginario si E < V: exponenciales reales). En cada frontera ψ y ψ′ son continuas, lo que relaciona los
coeficientes de una región con los de la siguiente con una matriz 2 × 2; el producto de todas da la matriz total. Con una onda incidente desde la izquierda (amplitud 1, reflejada r) y solo transmitida a la derecha (t):
T = |t|², R = |r|² (los dos medios exteriores tienen V = 0) y **T + R = 1**, que es tu primera comprobación. Otra formulación equivalente propaga el vector (ψ, ψ′) con matrices reales de cada capa
([[cos qd, sen qd/q], [−q sen qd, cos qd]] o su versión hiperbólica). Para una barrera simple con E < V0, T = 1/(1 + V0²·sinh²(κa)/(4E(V0 − E))): compruébalo. En una **doble barrera**, a ciertas energías (las de los
estados casi ligados del pozo entre ellas) la transmisión llega a 1: es el **efecto túnel resonante** de Tsu y Esaki (1973), la base de los diodos de efecto túnel resonante.

## 6. Paquetes de ondas: Crank-Nicolson

La evolución temporal ψ(t + Δt) = e^(−iHΔt)ψ(t) se aproxima con **Crank-Nicolson**, (I + iΔt·H/2)·ψⁿ⁺¹ = (I − iΔt·H/2)·ψⁿ: la aproximación de Cayley de la exponencial, que es **unitaria** (conserva la norma
exactamente, salvo redondeo) e incondicionalmente estable, con error O(Δt²). Cada paso es un sistema tridiagonal **complejo** (Thomas con números complejos). Un paquete gaussiano con número de onda k0 tiene
energía media ≈ k0²/2: si se acerca a una barrera, una parte se transmite y otra se refleja (Goldberg, Schey y Schwartz, 1967, hicieron las primeras películas por ordenador de este fenómeno). Comprueba que la
norma se conserva a 10⁻¹², que las probabilidades transmitida y reflejada suman casi 1 cuando el paquete ya ha salido de la barrera, y que un paquete libre con k0 = 0 no se mueve pero se ensancha.

## 7. Arquitectura recomendada

- Un módulo de mallas y potenciales, otro de álgebra tridiagonal (Sturm o QL, Thomas real y complejo), y uno por orden.
- Pruebas propias: los autovalores del oscilador deben acercarse a (n + ½)ω; los del pozo grande, a los exactos del hito 3; T + R = 1; la norma de Crank-Nicolson, constante.
- Cuidado con los complejos si tu lenguaje no los tiene: escribe las cuatro operaciones una vez y pruébalas.

## 8. Ampliaciones

Método de Numerov con disparo para potenciales arbitrarios; diferencias de cuarto orden y medida de su orden; evolución por división del operador con FFT (*split-operator*) y comparación con Crank-Nicolson; el
oscilador anarmónico y la teoría de perturbaciones; dos dimensiones (un paquete que atraviesa dos rendijas); o el átomo de hidrógeno radial.

## 9. Recursos

Griffiths y Schroeter (capítulos 2 y 9), Numerical Recipes (capítulo 11, autovalores), el artículo de Goldberg, Schey y Schwartz y, para el efecto túnel resonante, Tsu y Esaki (1973). Base teórica en
[[fis-mecanica-cuantica]].
