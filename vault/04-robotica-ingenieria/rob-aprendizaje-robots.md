---
id: rob-aprendizaje-robots
title: "Aprendizaje para robots: procesos de decisión de Markov, valor y Q-learning, gradiente de política, PPO y SAC, de la simulación a la realidad, aprendizaje por imitación y políticas generativas"
area: robotica
trunk_level: 20
prerequisites: [rob-control-optimo-mpc, ia-redes-profundas]
academic_sources:
  - "Sutton, R. S.; Barto, A. G. Reinforcement Learning: An Introduction, 2ª ed. MIT Press, 2018."
  - "Kober, J.; Bagnell, J. A.; Peters, J. Reinforcement learning in robotics: A survey. The International Journal of Robotics Research 32(11), 1238–1274, 2013."
  - "Chi, C. et al. Diffusion Policy: Visuomotor Policy Learning via Action Diffusion. Robotics: Science and Systems (RSS), 2023."
exercises:
  - id: retorno-descontado
    tier: 1
    prompt: |
      Un episodio da las recompensas 1, 0, 2 y 3. ¿Cuál es su retorno descontado con $\gamma = 0{,}9$? Respuesta: con **3 decimales**.
    answers: ["sha256:c6dcc17761f32555239702a94752964a83b16c25b79fd006eb237d1a287fd437"]
  - id: horizonte-efectivo
    tier: 1
    prompt: |
      Con $\gamma = 0{,}99$, ¿cuál es el horizonte efectivo $1/(1 - \gamma)$, y a partir de qué paso $k$ el factor $\gamma^k$ baja de 0,01? Respuesta: `horizonte;k`.
    answers: ["sha256:6ed8f0c1e49ca909c332b8be937bf6de67816b0d86ab8e342e8a61bd64ba5500"]
  - id: recorte-de-ppo
    tier: 1
    prompt: |
      El objetivo de PPO es $\min\left(rA,\ \text{clip}(r, 1 - \varepsilon, 1 + \varepsilon)A\right)$ con $\varepsilon = 0{,}2$. ¿Cuánto vale para $(r, A) = (1{,}3;\ 2)$ y para $(r, A) = (0{,}7;\ -2)$? Respuesta: `primero;segundo` con **1 decimal**.
    answers: ["sha256:27374513dfed7c44d25957b449da393127580c3f4b5f8446e327a88f397c6e31"]
  - id: aleatorizacion-de-dominio
    tier: 1
    prompt: |
      En simulación, el rozamiento se sortea uniforme en $[0{,}5;\ 1{,}5]$ y la masa uniforme en $\pm20\,\%$ de la nominal, de forma independiente. ¿Qué probabilidad hay de que un episodio tenga ambos a menos de un 10 % de sus valores nominales (rozamiento 1)? Respuesta: con **2 decimales**.
    answers: ["sha256:14be4b45f18e0d8c67b4f719b5144eee88497e413709d11d85b096d8e2346310"]
  - id: politica-softmax
    tier: 1
    prompt: |
      Una política softmax tiene preferencias 1, 2 y 0,5 para tres acciones. ¿Qué probabilidad tiene la segunda? Respuesta: con **4 decimales**.
    answers: ["sha256:ee3d9fc82756afbd9868c9593af5df74c6025d98b8ed1994defb0e6bab198004"]
  - id: actualizacion-td
    tier: 1
    prompt: |
      Con $V(s) = 2$, una transición con recompensa 1 a un estado con $V(s') = 3$, $\gamma = 0{,}9$ y $\alpha = 0{,}1$, ¿cuánto vale $V(s)$ tras la actualización TD(0)? Respuesta: con **2 decimales**.
    answers: ["sha256:359e34c3951a45586734a1649fb07ddc1fd95074faab24b218229661084de7a2"]
  - id: iteracion-de-valores
    tier: 1
    prompt: |
      Un robot está en una línea de estados 0 a 4; puede moverse a la izquierda o a la derecha (determinista; en 0, ir a la izquierda lo deja en 0). Cada paso cuesta $-1$, salvo entrar en el 4, que da $+10$ y termina. Con $\gamma = 0{,}9$, ¿cuánto vale $V^*(0)$? Respuesta: con **2 decimales**.
    answers: ["sha256:62512bdc9864eb2c5efb4b8ffb7ca866d459468a3d607e559201347499b0f998"]
  - id: evaluacion-de-politica
    tier: 2
    prompt: |
      Bajo una política fija, desde A se recibe $+1$ y se pasa a B; desde B se recibe 0 y se vuelve a A o se queda en B con probabilidad ½ cada una. Con $\gamma = 0{,}9$, ¿cuánto valen $V(A)$ y $V(B)$? Respuesta: `VA;VB` con **3 decimales**.
    answers: ["sha256:e00837c1f61f0455e1251dec0fc62244349aea66d559c11ae88767218219fe85"]
  - id: gradiente-de-politica
    tier: 2
    prompt: |
      Un bandido de dos brazos (recompensas 1 y 0) usa una política softmax con parámetros $\theta = (0, 0)$. ¿Cuánto vale el gradiente exacto del rendimiento esperado $\nabla_\theta J$? Respuesta: `g1;g2` con **2 decimales**.
    answers: ["sha256:a6502b24630115d99f439ca4c348d353b525a13e0c6835e32d68a490bd9e6398"]
  - id: tasa-de-exito
    tier: 2
    prompt: |
      Una política de agarre tiene éxito en 18 de 20 intentos. ¿Cuál es el extremo inferior del intervalo de Wilson al 95 % ($z = 1{,}96$) para su tasa de éxito? Respuesta: con **4 decimales**.
    answers: ["sha256:5c97d232613ef6364a394789d9c4a3dafd98d9025602370adc753b57e8e2ae4e"]
  - id: q-learning
    tier: 2
    prompt: |
      Con Q-learning tabular ($\alpha = 0{,}5$, $\gamma = 0{,}9$, todo a 0 al principio) se observan, en orden: $(s_0, a_0, 1, s_1)$, $(s_1, a_1, 2, \text{fin})$ y otra vez $(s_0, a_0, 1, s_1)$. ¿Cuánto vale $Q(s_0, a_0)$ al final? Respuesta: con **1 decimal**.
    answers: ["sha256:77ac319bfe1979e2d799d9e6987e65feb54f61511c03552ebae990826c208590"]
  - id: ventaja-gae
    tier: 2
    prompt: |
      Un fragmento de 3 pasos tiene recompensas 1, 1, 1, valores estimados 2, 2, 2 y termina tras el tercero (valor final 0). Con $\gamma = 0{,}9$ y $\lambda = 0{,}95$, ¿cuánto vale la ventaja GAE del primer paso? Respuesta: con **4 decimales**.
    answers: ["sha256:7a00f43870dded4638e344838a4a08d00285f4667622e07086a8e02a8407517e"]
  - id: entropia-de-la-politica
    tier: 2
    prompt: |
      SAC premia la entropía de la política. ¿Cuál es la entropía diferencial, en nats, de una política gaussiana unidimensional con $\sigma = 0{,}5$? Respuesta: con **4 decimales**.
    answers: ["sha256:6f3918295752b1b2cbef5907034991ccaf36fd244cdbb61885bcb1d9d766f6f5"]
  - id: muestreo-por-importancia
    tier: 2
    prompt: |
      Una trayectoria de dos pasos recogida con la política de comportamiento $\mu$ (probabilidades de las acciones tomadas 0,35 y 0,3) tiene retorno 2. Para la política objetivo $\pi$, esas acciones tienen probabilidades 0,7 y 0,6. ¿Qué retorno ponderado por importancia aporta? Respuesta: un número.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: ascenso-de-gradiente
    tier: 3
    prompt: |
      En el bandido de dos brazos (recompensas 1 y 0, softmax, $\theta = (0, 0)$) se dan dos pasos de ascenso con el gradiente exacto y tasa 1. ¿Qué probabilidad tiene entonces el brazo bueno? Respuesta: con **4 decimales**.
    answers: ["sha256:c2a3e76da8f17afef144697c3486a92167f88c7a5ba8b5679940dfb542d6c914"]
  - id: iteracion-de-politicas-lqr
    tier: 3
    prompt: |
      Para $x_{k+1} = x_k + u_k$ con coste $\sum(x_k^2 + u_k^2)$, se parte de la política $u = -0{,}5x$ y se aplica iteración de políticas: evaluar ($V = Px^2$ para la $K$ actual) y mejorar ($K \leftarrow P/(1 + P)$). ¿Cuánto vale $K$ tras dos iteraciones? Respuesta: con **4 decimales**.
    answers: ["sha256:b3b31ab786d35b5fe5297299fe00c45fb8bb6259c4f5bbe6483d9936fdcadf11"]
---

Hay tareas que no sabemos modelar bien: agarrar ropa, caminar sobre piedras sueltas, insertar una pieza con holgura de décimas de milímetro. En ellas, en vez de
escribir el controlador, el robot lo **aprende**: por prueba y error con una recompensa (aprendizaje por refuerzo), o a partir de demostraciones de una persona
(aprendizaje por imitación). Este nodo da la base matemática del aprendizaje por refuerzo (MDP, Bellman, Q-learning, gradiente de política, PPO, SAC), cómo se lleva de la
simulación al robot real, y las técnicas de imitación que han dado los avances recientes en manipulación. Une el control óptimo de [[rob-control-optimo-mpc]] (el refuerzo es
programación dinámica aproximada) con las redes de [[ia-redes-profundas]].

## Objetivos

Al terminar sabrás:

1. Formular una tarea como un proceso de decisión de Markov y calcular retornos y funciones de valor con las ecuaciones de Bellman.
2. Aplicar iteración de valores y de políticas, TD y Q-learning.
3. Derivar el gradiente de política y entender REINFORCE, actor-crítico, GAE, PPO y SAC.
4. Llevar políticas de la simulación al robot: aleatorización de dominio, identificación, brecha con la realidad.
5. Usar aprendizaje por imitación (clonación de comportamiento, DAgger) y conocer las políticas de difusión y los modelos visión-lenguaje-acción.
6. Evaluar políticas con rigor estadístico y reconocer los riesgos (recompensas mal diseñadas, seguridad).

## Qué debes dominar antes

[[rob-control-optimo-mpc]] (programación dinámica, LQR), [[ia-redes-profundas]] (redes, retropropagación, optimizadores) y probabilidad de [[mat-probabilidad]] (esperanzas, muestreo).

> [!question] Test de entrada
> 1. ¿Qué dice el principio de optimalidad de Bellman?
> 2. ¿Qué es un estimador insesgado?
> 3. ¿Cómo se calcula la derivada de $\log\pi_\theta(a)$ si $\pi$ es un softmax de preferencias $\theta$?
>
> Respuestas: la cola de una política óptima es óptima desde donde empieza; uno cuya esperanza es el valor que estima; $\partial\log\pi(a)/\partial\theta_b = \mathbb{1}[a = b] - \pi(b)$.

## 1. Para qué sirve

- **Locomoción**: cuadrúpedos y humanoides que caminan por terreno irregular con políticas entrenadas en simulación masivamente paralela.
- **Manipulación**: agarre de objetos variados, tareas de cocina, doblado de ropa, ensamblaje, a partir de demostraciones por teleoperación.
- **Drones**: políticas de carreras que igualan a pilotos humanos.
- **Ajuste fino de controladores clásicos**: aprender parámetros, residuos o modelos de rozamiento sobre un controlador conocido.

## 2. Procesos de decisión de Markov

Un **MDP** tiene estados $s$, acciones $a$, transiciones $p(s' \mid s, a)$, recompensas $r(s, a)$ y un descuento $\gamma \in [0, 1)$. Una **política** $\pi(a \mid s)$ busca maximizar el **retorno** esperado
$G_t = \sum_k\gamma^kr_{t+k}$; $\gamma$ fija un horizonte efectivo de unos $1/(1 - \gamma)$ pasos. Las funciones de **valor** $V^\pi(s) = \mathbb{E}[G_t \mid s]$ y **acción-valor** $Q^\pi(s, a)$ cumplen las **ecuaciones de Bellman**

$$
V^\pi(s) = \sum_a\pi(a \mid s)\left[r(s, a) + \gamma\sum_{s'}p(s' \mid s, a)V^\pi(s')\right], \qquad Q^*(s, a) = r(s, a) + \gamma\sum_{s'}p(s' \mid s, a)\max_{a'}Q^*(s', a') .
$$

Con el modelo conocido y pocos estados se resuelven por **evaluación de políticas** (un sistema lineal), **iteración de políticas** (evaluar y mejorar, que converge en pocas iteraciones; aplicada
al LQR, es el algoritmo de Kleinman) o **iteración de valores** (aplicar el operador de Bellman, una contracción de factor $\gamma$). Es la programación dinámica de [[rob-control-optimo-mpc]].

> [!example] Ejemplo resuelto 1: valores en una línea
> Una línea de estados 0, 1, 2, 3; entrar en el 3 da $+1$ y termina; nada más da recompensa; $\gamma = 0{,}9$. La política óptima es avanzar: $V^*(2) = 1$, $V^*(1) = 0{,}9$, $V^*(0) = 0{,}81$. El descuento hace que el
> robot prefiera llegar antes: un camino dos pasos más largo valdría $0{,}81\cdot0{,}81 = 0{,}66$.

## 3. Aprender sin modelo: TD y Q-learning

Sin conocer $p$, se aprende de transiciones. **TD(0)** corrige $V(s) \leftarrow V(s) + \alpha[r + \gamma V(s') - V(s)]$ con el **error de diferencia temporal** $\delta$; **Q-learning** hace lo mismo con
$Q(s, a) \leftarrow Q(s, a) + \alpha[r + \gamma\max_{a'}Q(s', a') - Q(s, a)]$ y es **fuera de política**: aprende la política óptima mientras explora (por ejemplo, $\varepsilon$-voraz). Con redes neuronales
(DQN) hacen falta un buffer de repetición y una red objetivo para estabilizar. En robótica las acciones son continuas, y el $\max_{a'}$ no es trivial: de ahí los métodos actor-crítico.

## 4. Gradiente de política

Se parametriza directamente la política $\pi_\theta$ y se sube por el gradiente del rendimiento $J(\theta) = \mathbb{E}[G_0]$. El **teorema del gradiente de política** da

$$
\nabla_\theta J = \mathbb{E}\left[\sum_t\nabla_\theta\log\pi_\theta(a_t \mid s_t)\,A_t\right],
$$

con $A_t$ la **ventaja** (cuánto mejor fue la acción que la media). REINFORCE usa el retorno Monte Carlo (insesgado, mucha varianza); restar una línea base $V(s)$ no cambia la esperanza y
reduce la varianza. Los métodos **actor-crítico** estiman $V$ con otra red, y la **GAE** mezcla los errores TD con un parámetro $\lambda$: $A_t = \sum_l(\gamma\lambda)^l\delta_{t+l}$ ($\lambda = 0$: TD, poca
varianza y algo de sesgo; $\lambda = 1$: Monte Carlo).

- **PPO** limita cuánto cambia la política en cada actualización recortando el cociente $r = \pi_\theta/\pi_{\theta_{old}}$: maximiza $\min(rA, \text{clip}(r, 1 \pm \varepsilon)A)$. Es robusto y el estándar en
  locomoción con miles de simulaciones en paralelo.
- **SAC** (soft actor-critic) es fuera de política y maximiza recompensa más **entropía** de la política: explora mejor y reutiliza datos, lo que importa cuando cada muestra es
  un experimento real.
- Los métodos **basados en modelo** aprenden la dinámica y planifican o generan datos con ella (MPC con modelo aprendido, Dreamer): mucho más eficientes en muestras.

> [!example] Ejemplo resuelto 2: sesgo y varianza en la ventaja
> Con recompensas 1, 1, 1, valores estimados 2, 2, 2 y final terminal ($\gamma = 0{,}9$): los errores TD son $\delta = (0{,}8;\ 0{,}8;\ -1)$. Con $\lambda = 0$, $A_0 = 0{,}8$ (solo un paso, confía en el crítico); con $\lambda = 1$,
> $A_0 = G_0 - V = 2{,}71 - 2 = 0{,}71$ (Monte Carlo, ignora el crítico); con $\lambda = 0{,}95$, 0,753. Si el crítico está mal, $\lambda$ bajo hereda su error; si los episodios son ruidosos, $\lambda$ alto hereda su
> varianza.

## 5. De la simulación a la realidad

Entrenar en el robot real es lento y peligroso. Se entrena en **simulación** (MuJoCo, Isaac, Genesis…) con miles de entornos en paralelo y se transfiere. La **brecha con la realidad**
(rozamientos, retardos, flexibilidades, sensores, contactos) se ataca con:

- **Aleatorización de dominio**: sortear masas, rozamientos, retardos, ruido y apariencia en cada episodio para que la política sea robusta a toda la familia y la realidad sea "un
  caso más".
- **Identificación del sistema** y redes que aprenden el actuador real a partir de datos.
- **Aprendizaje con información privilegiada**: un "profesor" entrenado con el estado completo de la simulación y un "alumno" que lo imita con los sensores reales.
- **Ajuste fino en real** con pocos datos y seguridad (límites, un controlador clásico de respaldo, escudos con MPC).

## 6. Aprendizaje por imitación y políticas generativas

Si una persona puede demostrar la tarea (teleoperación, guiado), la **clonación de comportamiento** la convierte en aprendizaje supervisado: $\min_\theta\sum\|\pi_\theta(o) - a_{demo}\|^2$. Su problema es el
**desplazamiento de covariables**: un pequeño error lleva a estados que el experto nunca visitó y los errores se acumulan (el coste puede crecer con el cuadrado del horizonte). **DAgger**
lo corrige pidiendo al experto la acción correcta en los estados que visita la propia política, con error que crece solo linealmente.

Las demostraciones humanas son **multimodales** (rodear un obstáculo por la izquierda o por la derecha): una regresión por mínimos cuadrados promedia los modos y choca. Las **políticas
de difusión** (Chi y col., 2023) generan secuencias de acciones con un modelo de difusión condicionado por la observación y representan bien esa multimodalidad. Los modelos
**visión-lenguaje-acción** (RT-2, $\pi_0$ y sucesores) parten de modelos de visión y lenguaje preentrenados y se ajustan con grandes conjuntos de demostraciones de muchos robots, de modo
que siguen órdenes en lenguaje natural. El campo avanza deprisa: lo estable son los principios (supervisión, cambio de distribución, multimodalidad, evaluación).

## 7. Evaluar y desplegar con rigor

- **Tasa de éxito con intervalo**: con $n$ intentos, el intervalo de **Wilson** es más fiable que $\hat p \pm z\sqrt{\hat p(1 - \hat p)/n}$, sobre todo cerca de 0 o 1: 18 de 20 éxitos son compatibles con una tasa real del 70 %.
- **Recompensas mal diseñadas**: el agente optimiza lo que se le pide, no lo que se quería (*reward hacking*); se revisan vídeos, no solo curvas.
- **Seguridad**: límites de par y velocidad fuera de la red, paradas de emergencia, supervisión por un controlador verificable.
- **Reproducibilidad**: varias semillas, mismo presupuesto de cómputo, informar la varianza.

> [!example] Ejemplo resuelto 3: Q-learning en la línea (con menos ayuda)
> En la línea de 5 estados del ejercicio de iteración de valores ($-1$ por paso, $+10$ al entrar en el 4, $\gamma = 0{,}9$), entrena Q-learning con $\alpha = 0{,}1$ y exploración $\varepsilon$-voraz con $\varepsilon = 0{,}2$ durante
> unos miles de episodios. Comprueba en el programa que la política voraz va siempre a la derecha y que $Q(0, \text{derecha})$ se acerca al $V^*(0) = 4{,}58$ de la iteración de valores. ¿Por qué Q-learning
> converge a la política óptima aunque explore al azar?

## 8. Comprobar con un programa

La iteración de valores del ejemplo 1, la GAE del ejemplo 2 con sus casos límite, y el Q-learning del ejemplo 3 frente a la iteración de valores, con un generador
pseudoaleatorio fijo.

```python
import math

# 1. Ejemplo resuelto 1: iteración de valores en la línea 0..3.
V = [0.0] * 4
for _ in range(100):
    V = [max(1.0 if s + 1 == 3 else 0.9 * V[s + 1], 0.9 * V[max(0, s - 1)]) for s in range(3)] + [0.0]
assert [round(v, 10) for v in V[:3]] == [0.81, 0.9, 1.0]

# 2. Ejemplo resuelto 2: GAE con λ = 0, 0,95 y 1.
r, v, g = [1, 1, 1], [2, 2, 2, 0], 0.9
d = [r[t] + g * v[t + 1] - v[t] for t in range(3)]
def gae(lam):
    A = 0.0
    for t in (2, 1, 0):
        A = d[t] + g * lam * A
    return A
G0 = sum(r[k] * g**k for k in range(3))
print("δ =", [round(x, 3) for x in d], "| A0:", round(gae(0), 4), round(gae(0.95), 4), round(gae(1), 4))
assert abs(gae(0) - 0.8) < 1e-12 and abs(gae(1) - (G0 - 2)) < 1e-12 and abs(gae(0.95) - 0.7530) < 1e-4

# 3. Ejemplo resuelto 3: Q-learning ε-voraz frente a iteración de valores.
def paso(s, a):  # a = 0 izquierda, 1 derecha
    s2 = max(0, s - 1) if a == 0 else s + 1
    return (s2, 10.0, True) if s2 == 4 else (s2, -1.0, False)
Vs = [0.0] * 5
for _ in range(200):
    Vs = [max(r_ + (0 if fin else 0.9 * Vs[s2]) for s2, r_, fin in (paso(s, 0), paso(s, 1))) for s in range(4)] + [0.0]
semilla = 7
def rnd():
    global semilla
    semilla = (1103515245 * semilla + 12345) % 2**31
    return semilla / 2**31
Q = [[0.0, 0.0] for _ in range(5)]
for episodio in range(5000):
    s = 0
    for _ in range(100):
        a = (0 if rnd() < 0.5 else 1) if rnd() < 0.2 else (1 if Q[s][1] >= Q[s][0] else 0)
        s2, r_, fin = paso(s, a)
        objetivo = r_ + (0.0 if fin else 0.9 * max(Q[s2]))
        Q[s][a] += 0.1 * (objetivo - Q[s][a])
        if fin:
            break
        s = s2
print("V* =", [round(x, 3) for x in Vs[:4]], "| Q(·, derecha) =", [round(Q[s][1], 3) for s in range(4)])
assert all(Q[s][1] > Q[s][0] for s in range(4))
assert all(abs(Q[s][1] - Vs[s]) < 1e-3 for s in range(4)) and abs(Vs[0] - 4.58) < 1e-12
```

## 9. Errores típicos

- Diseñar una recompensa que el agente pueda satisfacer sin hacer la tarea.
- Entrenar en una simulación demasiado ideal y esperar que funcione en el robot sin aleatorizar ni identificar.
- Comparar algoritmos con una sola semilla.
- Usar clonación de comportamiento con pocas demostraciones y sin cubrir los estados de recuperación.
- Promediar demostraciones multimodales con una regresión simple.
- Desplegar una política aprendida sin límites de seguridad fuera de la red.
- Informar una tasa de éxito sin intervalo con 10 o 20 intentos.

## 10. Resumen

- MDP $(S, A, p, r, \gamma)$; retorno descontado, horizonte $1/(1 - \gamma)$; Bellman para $V^\pi$ y $Q^*$.
- Evaluación (sistema lineal), iteración de políticas y de valores; TD(0), Q-learning, DQN.
- Gradiente de política $\mathbb{E}[\nabla\log\pi\,A]$, línea base, actor-crítico, GAE, PPO (recorte), SAC (entropía), basados en modelo.
- Simulación a realidad: aleatorización de dominio, identificación, profesor-alumno, ajuste fino seguro.
- Imitación: clonación de comportamiento, desplazamiento de covariables, DAgger; políticas de difusión; modelos visión-lenguaje-acción.
- Evaluación con Wilson, semillas, revisión cualitativa; seguridad.

## Repaso: lo que debe quedarte dentro de un mes

1. Todo el refuerzo sale de las ecuaciones de Bellman.
2. Q-learning aprende la política óptima mientras explora otra.
3. El gradiente de política sube por $\nabla\log\pi$ pesado por la ventaja.
4. La realidad es un dominio más: aleatoriza en simulación.
5. Clonar demostraciones acumula errores; DAgger y las políticas generativas los atacan.

## Siguiente

`ia-aprendizaje-refuerzo` (la teoría completa del refuerzo), `ia-modelos-generativos` (difusión y modelos de flujo) e `ia-transformers-llm` (la base de los modelos
visión-lenguaje-acción).
