---
id: proy-ia-aprendizaje-refuerzo
title: "Proyecto: un agente que aprende a equilibrar un péndulo invertido (simulador de CartPole, LQR, Q-learning, REINFORCE y robustez frente a cambios de física)"
area: ia-cuantica
trunk_level: 22
kind: proyecto
prerequisites: [ia-aprendizaje-refuerzo, rob-control]
academic_sources:
  - "Barto, A. G.; Sutton, R. S.; Anderson, C. W. Neuronlike adaptive elements that can solve difficult learning control problems. IEEE Transactions on Systems, Man, and Cybernetics 13(5), 1983; Florian, R. V. Correct equations for the dynamics of the cart-pole system. Center for Cognitive and Neural Studies, 2007."
  - "Sutton, R. S.; Barto, A. G. Reinforcement Learning: An Introduction, 2ª ed. MIT Press, 2018 (cap. 6: Q-learning; cap. 13: gradiente de la política y REINFORCE con línea base)."
  - "Watkins, C. J. C. H.; Dayan, P. Q-learning. Machine Learning 8, 1992; Williams, R. J. Simple statistical gradient-following algorithms for connectionist reinforcement learning. Machine Learning 8, 1992."
  - "Towers, M. et al. Gymnasium: A Standard Interface for Reinforcement Learning Environments. arXiv:2407.17032, 2024; Åström, K. J.; Murray, R. M. Feedback Systems, 2ª ed. Princeton University Press, 2021 (LQR)."
attachments: [prueba.sh]
exercises:
  - id: hito-1-simulador
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `rl simula FISICA X XD TH THD ACCIONES` parte del estado dado y aplica las acciones (una cadena de 0 y 1, de 1 a 600) con la física exacta de CartPole-v1 del §2 (Euler con τ = 0,02 s y el orden de operaciones de Gymnasium) e imprime una línea `t x xd th thd` por paso. Se para cuando el paso deja |x| > 2,4 o |θ| > 12° (`fin terminado`), al llegar a 500 pasos (`fin truncado`) o al acabar las acciones (`fin acciones`), y termina con `recompensa R` (1 por paso, incluido el último). FISICA es una de las del §2. Valores con `%.6e` (medias con `%.3e`), como el redondeo de x·(1 + 10⁻¹²), y 0 si |x| < 10⁻¹². Una física desconocida, un estado no numérico o una acción que no sea 0 o 1 terminan con código 1.

      Comprueba con `bash prueba.sh ./rl 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c0961624f5c8921c2eac543f7778b7a0c666193933334fc54f8d4f9afe8fea9e"]
  - id: hito-2-lqr
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `rl lqr FISICA Q1 Q2 Q3 Q4 R EPISODIOS SEMILLA` linealiza la física en torno al equilibrio, la discretiza con el mismo Euler (A = I + τA_c, B = τB_c), resuelve la ecuación de Riccati discreta por iteración desde P = Q hasta que ningún elemento cambie más de 10⁻¹⁰ (§3), e imprime `A` (cuatro filas), `B`, la ganancia `K` y `episodios n media M minimo a maximo b` con la política «empuja a la derecha si −K·s > 0» en EPISODIOS episodios que empiezan como en el §2 con el generador en SEMILLA. Valores con `%.6e` (medias con `%.3e`), como el redondeo de x·(1 + 10⁻¹²), y 0 si |x| < 10⁻¹². Pesos de Q negativos o R ≤ 0, código 1.

      Comprueba con `bash prueba.sh ./rl 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:840e7a74d50453c4e53ba823ff4f2a0bf6dece7b952cf1cf91d71067573f8c95"]
  - id: hito-3-q-learning
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `rl q FISICA EPISODIOS SEMILLA` aprende con Q-learning tabular con la discretización, la exploración ε y las reglas exactas del §4 e imprime la media de los retornos en cinco bloques iguales de episodios (`bloque b media M`), `tabla S visitadas V` (la suma de la tabla y las casillas con algún valor distinto de cero) y `evaluacion media M minimo a maximo b` con la política codiciosa en 20 episodios. Los entrenamientos largos se comprueban por tramos. Menos de 5 episodios, código 1.

      Comprueba con `bash prueba.sh ./rl 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:91eb01900a741bce21b29c963615838db21523b040f03b812c2994c21ee738e4"]
  - id: hito-4-reinforce
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `rl reinforce FISICA EPISODIOS SEMILLA LR simple` entrena la política logística π(empujar a la derecha | s) = σ(w·(x, ẋ, θ, θ̇, 1)) con REINFORCE (§5): w empieza en 0, se muestrea cada acción con un u del generador, y al final de cada episodio w ← w + LR·Σₜ Gₜ(aₜ − πₜ)φₜ con los retornos descontados Gₜ (γ = 0,99). Imprime los cinco bloques, `pesos` y la evaluación de la política determinista (empujar a la derecha si w·φ > 0) en 20 episodios. LR debe ser positivo; si no, código 1.

      Comprueba con `bash prueba.sh ./rl 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:92257efe7668b2dbeb4bfece36d313c5c82adfa35139b539e3cffbfa2372bc49"]
  - id: hito-5-normalizacion
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** Añade la variante `normalizado` de `rl reinforce`: antes de actualizar, cada episodio estandariza sus retornos, Gₜ ← (Gₜ − media)/(desviación + 10⁻⁸) (desviación poblacional), una línea base que reduce la varianza del gradiente (§5). Misma salida. Con la misma tasa, la versión normalizada aprende y la simple no.

      Comprueba con `bash prueba.sh ./rl 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c1c84ddc3812748eefc31f4f37da7e9d18fcca793e223689ba148ab1c0dae051"]
  - id: hito-6-robustez
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** `rl robustez METODO SEMILLA` prepara un controlador con la física normal y lo evalúa 30 episodios en cada física del §2 (en su orden, con el mismo generador), imprimiendo `fisica media M minimo a maximo b`. METODO: `lqr` (Q = diag(1, 1, 10, 1), R = 1), `lqr-redisenado` (el mismo diseño, pero hecho con el modelo de cada física), `q` (5000 episodios del hito 3) o `reinforce` (500 episodios normalizados con LR = 0,01). Se comprueba por tramos de la media; un método desconocido termina con código 1.

      Comprueba con `bash prueba.sh ./rl 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:4de250fa5bb657eeb4c77ede51510c834e7af4319d3c772ae20e914fcf30d55f"]
---

Vas a escribir **`rl`**: un simulador del **carro con péndulo** (*cart-pole*, el problema de control con el que Barto, Sutton y Anderson enseñaron a aprender a una red en 1983 y que hoy es el `CartPole-v1` de
Gymnasium) y tres maneras de equilibrarlo: un controlador clásico **LQR** diseñado con el modelo, un agente de **Q-learning** que aprende una tabla sin saber física, y una política entrenada con el **gradiente
de la política** (REINFORCE). Al final los someterás a físicas que no conocían, y verás la diferencia entre aprender un comportamiento y entender un sistema. Aplica [[ia-aprendizaje-refuerzo]] y
[[rob-control]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `rl` con cinco órdenes (`simula`, `lqr`, `q`, `reinforce` y `robustez`), con el contrato exacto de los ejercicios. El adjunto **`prueba.sh`** las ejecuta y da un código por hito si todo coincide;
con `-v` muestra las salidas. Valores con `%.6e`, medias con `%.3e` (como el redondeo de x·(1 + 10⁻¹²)) y 0 si |x| < 10⁻¹².

**Por qué hay comprobaciones por tramos.** El péndulo invertido es **inestable**: una diferencia en la última cifra decimal crece como e^(√(g/l)·t), unas 80 veces por segundo simulado. Dos implementaciones
correctas que calculen un coseno con un bit de diferencia acaban, tras cientos de pasos, en trayectorias distintas, y un aprendizaje que dura miles de episodios llega a una tabla distinta. Por eso los
episodios cortos se comprueban exactamente y los entrenamientos largos por lo que el agente consigue («el último bloque llega a 300 pasos de media»). Una de las referencias de este proyecto usa el entorno real
de Gymnasium; la otra, la física escrita a mano.

## 2. El simulador (hito 1)

Estado s = (x, ẋ, θ, θ̇): posición y velocidad del carro, ángulo del péndulo respecto a la vertical (positivo hacia la derecha) y su velocidad angular. Acción 1: fuerza F a la derecha; 0: −F. Constantes:
g = 9,8, masa del carro m_c = 1, τ = 0,02 s, y según la **física**:

| Física | masa del péndulo m_p | semilongitud l | fuerza F |
|---|---|---|---|
| `normal` | 0,1 | 0,5 | 10 |
| `palo-pesado` | 1,0 | 0,5 | 10 |
| `palo-corto` | 0,1 | 0,05 | 10 |
| `palo-largo` | 0,1 | 3,0 | 10 |
| `debil` | 0,1 | 0,5 | 3 |

Las ecuaciones (las de Florian, que corrigen las de 1983), con M = m_p + m_c y el mismo orden de operaciones que Gymnasium:

```text
temp   = (f + (m_p·l)·(θ̇·θ̇)·sen θ) / M
θ̈      = (g·sen θ − cos θ·temp) / (l·(4/3 − m_p·(cos θ·cos θ)/M))
ẍ      = temp − (m_p·l)·θ̈·cos θ / M
x ← x + τ·ẋ;  ẋ ← ẋ + τ·ẍ;  θ ← θ + τ·θ̇;  θ̇ ← θ̇ + τ·θ̈        (Euler: las posiciones con las velocidades viejas)
```

El episodio **termina** (*terminated*) cuando un paso deja |x| > 2,4 o |θ| > 12° = 12·2π/360 rad, y se **trunca** (*truncated*) a los 500 pasos; la recompensa es 1 por paso, incluido el último. Cada
episodio empieza con los cuatro valores 0,1u − 0,05 (en el orden x, ẋ, θ, θ̇), con u del generador de Exodus (s ← (6364136223846793005·s + 1442695040888963407) mód 2⁶⁴, u = ⌊s/2¹¹⌋/2⁵³). La distinción entre
terminar y truncar importa: el episodio truncado no ha fracasado, y un agente que lo trate como un fracaso aprende mal (Gymnasium la hace explícita desde su versión 0.26).

## 3. LQR: control con modelo (hito 2)

Cerca del equilibrio (θ pequeño, sen θ ≈ θ, cos θ ≈ 1, θ̇² ≈ 0) el sistema es lineal: θ̈ = a·θ + b·f y ẍ = f/M − (m_p·l/M)·θ̈, con d = l·(4/3 − m_p/M), a = g/d y b = −1/(M·d). En forma de estado,
ṡ = A_c·s + B_c·f, y con el mismo Euler: A = I + τA_c, B = τB_c. El **regulador lineal cuadrático** busca la ley f = −K·s que minimiza Σ (sᵀQs + R·f²): con Q diagonal se dice cuánto importa cada desviación y
con R, cuánto cuesta empujar. La ganancia sale de la **ecuación de Riccati discreta**, que se resuelve iterando desde P = Q:

P ← Q + AᵀPA − (AᵀPB)(BᵀPA)/(R + BᵀPB),    y al final K = (BᵀPA)/(R + BᵀPB).

Como el carro solo admite ±F, la política es el **signo** de la ley: empujar a la derecha si −K·s > 0. Es un controlador diseñado en unas líneas, sin un solo episodio de práctica, y equilibra el péndulo los
500 pasos.

## 4. Q-learning tabular (hito 3)

El agente no conoce las ecuaciones: solo ve estados y recompensas. **Discretización** en 3 × 6 × 12 = 216 casillas: ẋ en 3 tramos de [−1,5; 1,5], θ en 6 de [−12°, 12°] y θ̇ en 12 de [−2, 2] (la x no se
usa); el tramo es ⌊(v − bajo)/(alto − bajo)·n⌋ recortado a [0, n − 1], y la casilla, (i_ẋ·6 + i_θ)·12 + i_θ̇. Con Q a cero, en el episodio k (desde 0) de E: ε = max(0,01; 1 − 2k/E). En cada paso se extrae un u:
si u < ε, se explora con otro u (acción 1 si es < 0,5); si no, la acción codiciosa (1 si Q[c][1] > Q[c][0]). Tras el paso, con α = 0,1 y γ = 0,99,

Q[c][a] ← Q[c][a] + α·(objetivo − Q[c][a]),   objetivo = 1 si el episodio terminó, y 1 + γ·máxₐ Q[c′][a] si no (también al truncar).

La evaluación usa la política codiciosa y empieza sus episodios con el mismo generador, que sigue donde lo dejó el entrenamiento. Observa dos cosas en tus resultados: el retorno medio de los últimos episodios
de entrenamiento es estable, pero la política codiciosa **final** varía muchísimo entre semillas (de una veintena de pasos a 500), porque cada actualización puede cambiar la acción preferida de una casilla. En la
práctica se guarda la mejor política vista, no la última.

## 5. REINFORCE (hitos 4 y 5)

Ahora se aprende **directamente la política**: π(1 | s) = σ(w·φ), con φ = (x, ẋ, θ, θ̇, 1) y σ la logística (calculada sin desbordar). w empieza en 0; en cada paso se extrae un u y la acción es 1 si u < π. Al acabar
el episodio, con los retornos descontados Gₜ = 1 + γ·Gₜ₊₁ (γ = 0,99, desde el final), el estimador REINFORCE (Williams, 1992) da la actualización

w ← w + LR·Σₜ Gₜ·(aₜ − πₜ)·φₜ,

porque ∇_w log π(aₜ | sₜ) = (aₜ − πₜ)·φₜ. Los Gₜ son todos positivos y grandes, así que el gradiente tiene una **varianza** enorme: con una tasa alta los pasos son tan grandes que la política salta de un extremo
a otro y no aprende. Restar a los retornos una **línea base** que no dependa de la acción no cambia el gradiente esperado y reduce mucho su varianza (Sutton y Barto, §13.4). La variante **normalizada** es la
versión práctica más común de esa idea: estandariza los retornos de cada episodio, Gₜ ← (Gₜ − media)/(desviación + 10⁻⁸) (al calcular la media con el propio episodio introduce un pequeño sesgo, a cambio de
mucha estabilidad), y con la misma tasa el agente aprende. La evaluación usa la política determinista (acción 1 si w·φ > 0).

## 6. Robustez: ¿qué ha aprendido cada uno? (hito 6)

`robustez` prepara cada controlador con la física `normal` y lo prueba en las cinco físicas. Lo que verás:

- El LQR es muy robusto (aguanta un péndulo diez veces más pesado o una fuerza tres veces menor), pero no hace milagros: con un péndulo de 3 m su ganancia ya no sirve, y con uno de 5 cm la dinámica es demasiado
  rápida para él. **Rediseñado** con el modelo correcto, vuelve a equilibrar todas las físicas: si conoces el sistema, adaptarte es recalcular una matriz.
- Las políticas **aprendidas** solo saben lo que vieron: en la física de 5 cm fracasan casi de inmediato. Es el problema del **paso de la simulación a la realidad** (*sim-to-real*), y una de sus soluciones
  es la **aleatorización del dominio**: entrenar con físicas variadas para que la política no dependa de una en concreto.

## 7. Arquitectura recomendada

- Un entorno con `inicio(generador)` y `paso(estado, acción) → (estado, terminado)`, y los agentes encima; el generador se pasa explícitamente para que el orden de las extracciones sea el del contrato.
- Pruebas propias: la energía y el periodo de las pequeñas oscilaciones del péndulo **colgando** (cambiando el signo de g) como comprobación del simulador; el LQR debe dar autovalores de A − BK con módulo menor
  que 1; un Q-learning sin exploración no aprende; y REINFORCE con LR = 0 deja w en cero.

## 8. Ampliaciones

Q-learning con aproximación lineal o con una red (DQN, con memoria de repetición y red objetivo), actor-crítico con ventaja, PPO, la versión de acción continua (fuerza en [−F, F], donde el LQR puede aplicarse
tal cual), el péndulo que debe **levantarse** desde abajo (*swing-up*, donde la linealización no sirve), aleatorización del dominio, y comparar tu simulador con el entorno de Gymnasium paso a paso.

## 9. Recursos

Sutton y Barto (gratis en la web de los autores), el artículo de 1983, las ecuaciones de Florian, la documentación de Gymnasium (y su código de CartPole, que se lee en una tarde), el curso de David Silver
(UCL/DeepMind) y Spinning Up de OpenAI. La teoría, en [[ia-aprendizaje-refuerzo]]; el LQR, en [[rob-control]].
