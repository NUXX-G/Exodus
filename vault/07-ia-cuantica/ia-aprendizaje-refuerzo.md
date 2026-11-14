---
id: ia-aprendizaje-refuerzo
title: "Aprendizaje por refuerzo: MDP y ecuaciones de Bellman, programación dinámica, bandidos y exploración, Monte Carlo y diferencias temporales (SARSA, Q-learning), aproximación de funciones y DQN, gradiente de la política, actor-crítico, GAE y PPO"
area: ia-cuantica
trunk_level: 21
prerequisites: [ia-pytorch, mat-procesos-estocasticos, rob-aprendizaje-robots]
academic_sources:
  - "Sutton, R. S.; Barto, A. G. Reinforcement Learning: An Introduction, 2ª ed. MIT Press, 2018 (incompleteideas.net/book)."
  - "Watkins, C.; Dayan, P. Q-learning. Machine Learning 8, 1992; Williams, R. J. Simple statistical gradient-following algorithms (REINFORCE). Machine Learning 8, 1992; Auer, P.; Cesa-Bianchi, N.; Fischer, P. Finite-time Analysis of the Multiarmed Bandit Problem (UCB1). Machine Learning 47, 2002."
  - "Mnih, V. et al. Human-level control through deep reinforcement learning (DQN). Nature 518, 2015; Schulman, J. et al. High-Dimensional Continuous Control Using Generalized Advantage Estimation. ICLR 2016; Schulman, J. et al. Proximal Policy Optimization Algorithms. arXiv:1707.06347, 2017."
  - "Towers, M. et al. Gymnasium: A Standard Interface for Reinforcement Learning Environments. arXiv:2407.17032, 2024 (documentación de gymnasium 1.0)."
exercises:
  - id: evaluacion-de-una-politica
    tier: 2
    prompt: |
      Bajo una política fija, un MDP de dos estados da recompensas esperadas R = (1, 2) y transiciones P = [[0,5; 0,5], [0,2; 0,8]], con γ = 0,9. Resuelve la ecuación de Bellman V = R + γPV. ¿Cuánto vale V en cada estado?

      Respuesta: `v1;v2` con 4 decimales.
    answers: ["sha256:9f258c8ba6d6eab9210d727e86b57aefcf297453cd8b3f0f0520c886614750e6"]
  - id: retorno-descontado
    tier: 1
    prompt: |
      Con recompensas 1, 0, 0, 5 y γ = 0,9, ¿cuál es el retorno descontado desde el primer paso?

      Respuesta: con 4 decimales.
    answers: ["sha256:2fcd29e6bd78f847130026c33cc4a4df9cbaa48847fe0eee4129dcee4ad36e8d"]
  - id: iteracion-de-valores-en-frozenlake
    tier: 3
    prompt: |
      En FrozenLake 4 × 4 resbaladizo (mapa SFFF / FHFH / FFFH / HFFG; cada acción va a la dirección pedida o a una de las dos perpendiculares con probabilidad 1/3; recompensa 1 al llegar a G; H y G terminan) con γ = 0,99, aplica iteración de valores hasta converger. ¿Cuánto vale V*(inicio) y qué acción óptima hay en el inicio (0 izquierda, 1 abajo, 2 derecha, 3 arriba)?

      Respuesta: `valor;accion` (el valor con 4 decimales).
    answers: ["sha256:b40bd1bb27ce02c53218bf1622206024c0e795d24920f22105b22a1aaa1ed1ff"]
  - id: actualizacion-de-q-learning
    tier: 1
    prompt: |
      Con Q(s, a) = 0,5, recompensa 1, γ = 0,9, máx Q(s′, ·) = 2 y α = 0,1, ¿cuánto vale Q(s, a) tras una actualización de Q-learning?

      Respuesta: con 4 decimales.
    answers: ["sha256:99d03fc3771fe6848d675339fc49eeb1cb8d99a12e6358173336b99a2ec530ea"]
  - id: sarsa-frente-a-q-learning
    tier: 2
    prompt: |
      Misma transición que antes (Q(s, a) = 0,5, r = 1, γ = 0,9, α = 0,1) con Q(s′, ·) = (2; 0,5), y la política ε-voraz elige en s′ la segunda acción. ¿Qué valor da la actualización de SARSA y cuál la de Q-learning?

      Respuesta: `sarsa;q` con 4 decimales.
    answers: ["sha256:8937e944e6c20ebc00dba7350e4ae96b8891d5ec2ea89d81f9a3acc7698fe4d8"]
  - id: td-cero
    tier: 1
    prompt: |
      Con V(s) = 3, recompensa −1, γ = 0,95, V(s′) = 4 y α = 0,2, ¿cuánto vale V(s) tras una actualización TD(0)?

      Respuesta: con 4 decimales.
    answers: ["sha256:35dd0de5bffbe78caa2ff42cd861b1187e12634618c6d32cfef5aecac341b974"]
  - id: ucb1
    tier: 2
    prompt: |
      Un bandido de 3 brazos lleva t = 20 tiradas: n = (10, 6, 4) con medias (0,6; 0,55; 0,4). ¿Qué brazo elige UCB1 (media + √(2 ln t / n)) y con qué valor?

      Respuesta: `brazo;valor` (brazos numerados desde 0, valor con 4 decimales).
    answers: ["sha256:b8cfa9e48ad2bcca79c8a6fd4b622c803d24ab4debcaddd6049963d06fadec5b"]
  - id: epsilon-voraz
    tier: 1
    prompt: |
      Con ε = 0,1 y 4 acciones, ¿con qué probabilidad elige una política ε-voraz la acción voraz (contando que la exploración también puede elegirla)?

      Respuesta: con 4 decimales.
    answers: ["sha256:585602cdbf23a6ecdf80018ae820a3c3dc4746f49ec710a12fb3907ac7272e37"]
  - id: gradiente-de-la-politica
    tier: 2
    prompt: |
      Una política softmax con preferencias θ = (0,5; −0,5) toma la acción 2 (la segunda). ¿Cuánto vale ∇θ log π(a) para cada componente?

      Respuesta: `componente1;componente2` con 4 decimales.
    answers: ["sha256:da2e33b7e797d0e4b7284fdffc424b2b7872921ccfdb217be44950dfdc551a3e"]
  - id: objetivo-recortado-de-ppo
    tier: 2
    prompt: |
      Con ε = 0,2, ¿qué vale el objetivo recortado de PPO, mín(r·A, clip(r, 1 − ε, 1 + ε)·A), para r = 1,3 con A = 2, y para r = 0,7 con A = −1?

      Respuesta: `primero;segundo` con 4 decimales.
    answers: ["sha256:296635e00bd40669ff2415237247a6fa4b2eb35e97e52eb8ceef64b2b63b1dd4"]
  - id: ventaja-generalizada
    tier: 2
    prompt: |
      Una trayectoria de 3 pasos que termina tiene recompensas (1, 0, 2) y valores estimados V = (0,5; 1,0; 1,5) en sus estados (0 tras el final). Con γ = 0,99 y λ = 0,95, ¿cuánto vale la ventaja GAE del primer paso?

      Respuesta: con 4 decimales.
    answers: ["sha256:8343457a0dc73a7d877baffa48cce02f496ae39baf48379fc64448fdb4234290"]
  - id: horizonte-efectivo
    tier: 1
    prompt: |
      ¿Qué horizonte efectivo, 1/(1 − γ), corresponde a γ = 0,99?

      Respuesta: un número.
    answers: ["sha256:ad57366865126e55649ecb23ae1d48887544976efea46a48eb5d85a6eeb4d306"]
  - id: objetivo-de-dqn
    tier: 2
    prompt: |
      En DQN, la red objetivo da Q(s′, ·) = (1,2; 3,4) y la recompensa es 0,5 con γ = 0,99. ¿Qué objetivo y se usa si s′ no es terminal, y cuál si lo es?

      Respuesta: `no_terminal;terminal` con 4 decimales.
    answers: ["sha256:f3753f62204d8f4fb385bdc109fea8ccf3d49349456382ba3c8ffd9df065e895"]
  - id: el-acantilado
    tier: 1
    prompt: |
      En el ejemplo del acantilado de Sutton y Barto, con exploración ε-voraz fija, ¿qué algoritmo aprende el camino seguro alejado del borde (y obtiene más recompensa durante el aprendizaje), SARSA o Q-learning?

      Respuesta: `sarsa` o `q-learning`.
    answers: ["sha256:f03f597bbe04b9043a15fe797abdede4c5db1d88cf7d5b8f077e6c615efa6f19"]
---

En el aprendizaje supervisado alguien te da la respuesta correcta; en el **aprendizaje por refuerzo** solo recibes, de vez en cuando, una recompensa, y tienes que descubrir qué secuencia de decisiones
la produce. Es el problema de aprender a actuar: jugar, controlar un robot, gestionar recursos, y también ajustar un modelo de lenguaje a las preferencias humanas (RLHF, [[ia-transformers-llm]]). Este nodo
construye la teoría desde los procesos de decisión de Markov y las ecuaciones de Bellman hasta los algoritmos profundos que se usan hoy (DQN, PPO), con la exploración y la estimación de ventajas que deciden si
un agente aprende o no. Usa los procesos de [[mat-procesos-estocasticos]], la práctica de [[ia-pytorch]] y la visión aplicada de [[rob-aprendizaje-robots]].

## Objetivos

Al terminar sabrás:

1. Modelar un problema como MDP y escribir y resolver las ecuaciones de Bellman.
2. Resolver MDP conocidos con programación dinámica (evaluación, iteración de políticas y de valores).
3. Equilibrar exploración y explotación (ε-voraz, UCB) y aprender sin modelo con Monte Carlo y diferencias temporales (TD(0), SARSA, Q-learning).
4. Escalar con aproximación de funciones (DQN y sus trucos) y optimizar políticas directamente (REINFORCE, actor-crítico, GAE, PPO).
5. Reconocer las dificultades prácticas: inestabilidad, eficiencia de muestras, recompensas mal diseñadas.

## Qué debes dominar antes

[[mat-procesos-estocasticos]] (cadenas de Markov), [[ia-pytorch]] (redes y optimización) y [[rob-aprendizaje-robots]] (el contexto robótico).

> [!question] Test de entrada
> 1. ¿Qué es la propiedad de Markov?
> 2. ¿Cuánto vale 1 + γ + γ² + … para |γ| < 1?
> 3. ¿Qué es una esperanza condicionada?
>
> Respuestas: que el futuro depende del pasado solo a través del estado presente; 1/(1 − γ); el valor medio de una variable aleatoria sabiendo el valor de otra (por ejemplo, el retorno medio sabiendo el estado
> de partida).

## 1. Procesos de decisión de Markov

Un **MDP** es (S, A, P, R, γ): estados, acciones, probabilidades de transición P(s′ | s, a), recompensas y un **descuento** γ ∈ [0, 1). El agente sigue una **política** π(a | s) y busca maximizar el **retorno**
Gₜ = Rₜ₊₁ + γRₜ₊₂ + γ²Rₜ₊₃ + …; el descuento hace la suma finita y fija un horizonte efectivo de unos 1/(1 − γ) pasos. Las funciones de valor resumen lo que se espera conseguir:

```
V^π(s)   = E[Gₜ | Sₜ = s]                       = Σₐ π(a|s) Σₛ′ P(s′|s,a) [R + γ V^π(s′)]
Q^π(s,a) = E[Gₜ | Sₜ = s, Aₜ = a]
V*(s)    = máxₐ Σₛ′ P(s′|s,a) [R + γ V*(s′)]           (ecuación de optimalidad de Bellman)
```

Para una política fija, la ecuación de Bellman es un sistema lineal, V = R^π + γP^πV, que se resuelve directamente con pocos estados.

## 2. Programación dinámica

Con el modelo conocido: **evaluación de políticas** (aplicar la ecuación de Bellman como iteración hasta converger; es una contracción de factor γ), **iteración de políticas** (evaluar y mejorar voraz
alternativamente; converge en pocas iteraciones) e **iteración de valores** (aplicar directamente la ecuación de optimalidad). En entornos con ruido, la política óptima puede ser contraintuitiva: en el lago
helado resbaladizo, a veces conviene empujar «contra la pared» para que el resbalón no te lleve al agujero.

## 3. Bandidos y exploración

Sin modelo, el agente debe **probar** para aprender, pero cada prueba de una opción mala cuesta recompensa. El caso más simple es el **bandido de k brazos** (un solo estado):

- **ε-voraz**: con probabilidad 1 − ε la mejor estimación, con ε una al azar (que también puede ser la mejor). Sencillo; explora igual de mal todas las opciones.
- **UCB1** (Auer et al., 2002): elegir el brazo con mayor media + √(2 ln t / nₐ): optimismo ante la incertidumbre; los brazos poco probados reciben un premio que decrece al probarlos. Arrepentimiento
  logarítmico.
- **Muestreo de Thompson**: muestrear cada brazo de su distribución a posteriori y elegir el máximo (`ia-bayesiana`).

## 4. Aprender sin modelo: Monte Carlo y diferencias temporales

- **Monte Carlo**: esperar al final del episodio y promediar los retornos observados; sin sesgo, con mucha varianza.
- **TD(0)**: actualizar con la estimación del siguiente estado, V(s) ← V(s) + α[r + γV(s′) − V(s)]; el término entre corchetes es el **error TD** δ. Aprende en cada paso (*bootstrapping*): menos varianza, algo
  de sesgo.
- **SARSA** (en política): Q(s,a) ← Q(s,a) + α[r + γQ(s′, a′) − Q(s,a)], con a′ la acción que de verdad se tomará. **Q-learning** (fuera de política, Watkins y Dayan): usa máxₐ′ Q(s′, a′) aunque se explore.
  La diferencia importa: en el ejemplo del **acantilado** de Sutton y Barto, con exploración ε-voraz, Q-learning aprende el camino óptimo pegado al borde pero se cae a menudo mientras explora; SARSA, que tiene
  en cuenta su propia exploración, aprende un camino más alejado y obtiene más recompensa durante el aprendizaje.

## 5. Aproximación de funciones y DQN

Con estados continuos o enormes (imágenes), Q se aproxima con una red. La combinación de aproximación, *bootstrapping* y aprendizaje fuera de política (la «tríada mortal») puede divergir. **DQN** (Mnih et al.,
2015) lo estabilizó con dos trucos: una **memoria de repetición** (se entrena con transiciones antiguas tomadas al azar, rompiendo las correlaciones) y una **red objetivo** congelada que da y = r + γ máxₐ′
Q_objetivo(s′, a′) (o solo r si s′ es terminal) y se copia cada cierto tiempo. Mejoras: Double DQN (reduce la sobreestimación del máximo), *dueling*, repetición priorizada.

## 6. Gradiente de la política, actor-crítico y PPO

En vez de aprender valores, se optimiza directamente una política parametrizada π_θ. El **teorema del gradiente de la política** da ∇J = E[∇θ log π_θ(a|s) · Q(s, a)]; para una softmax, ∇θ log π(a) = eₐ − π.
**REINFORCE** (Williams, 1992) usa el retorno observado como estimación de Q: sin sesgo y con enorme varianza, que se reduce restando una **línea base** (V(s)): así aparece la **ventaja** A = Q − V.
Los métodos **actor-crítico** aprenden a la vez la política (actor) y V (crítico).

La **ventaja generalizada** (GAE, Schulman et al., 2016) promedia estimaciones de distinto alcance: Âₜ = Σₗ (γλ)ˡ δₜ₊ₗ, con δₜ = rₜ + γV(sₜ₊₁) − V(sₜ); λ = 0 es TD de un paso (poca varianza, más sesgo),
λ = 1 es Monte Carlo. **PPO** (Schulman et al., 2017) evita pasos de política demasiado grandes maximizando mín(rₜÂₜ, clip(rₜ, 1 − ε, 1 + ε)Âₜ), con rₜ el cociente entre la política nueva y la antigua: cuando la
ventaja es positiva no se gana nada empujando r por encima de 1 + ε, y cuando es negativa no se gana nada bajándolo de 1 − ε. Es el algoritmo por defecto en control continuo y el que se usó en RLHF.

## 7. Dificultades prácticas

El aprendizaje por refuerzo es **ineficiente en muestras** (millones de pasos de simulación), **inestable** (sensibilidad a semillas e hiperparámetros: hay que dar resultados con varias semillas e intervalos)
y vulnerable a la **piratería de la recompensa** (el agente encuentra una forma de maximizar la recompensa que no es lo que se quería: diseñarla es la parte difícil). Herramientas: Gymnasium (la interfaz
estándar de entornos), implementaciones de referencia (Stable-Baselines3, CleanRL), simulación y transferencia a la realidad para robots.

## 8. Comprobar con un programa

SARSA y Q-learning en el acantilado (4 × 12; caerse cuesta −100 y vuelve al inicio; cada paso −1), con ε = 0,1 y el generador congruencial de Exodus:

```python
# El acantilado de Sutton y Barto: SARSA aprende el camino seguro, Q-learning el óptimo pegado al borde
estado_lcg = 99
def u():
    global estado_lcg
    estado_lcg = (6364136223846793005 * estado_lcg + 1442695040888963407) % 2**64
    return (estado_lcg >> 11) / 2**53

FILAS, COLS = 4, 12
INICIO, META = (3, 0), (3, 11)
MOV = [(-1, 0), (0, 1), (1, 0), (0, -1)]

def paso(s, a):
    f = min(max(s[0] + MOV[a][0], 0), FILAS - 1)
    c = min(max(s[1] + MOV[a][1], 0), COLS - 1)
    if f == 3 and 0 < c < 11:
        return INICIO, -100
    return (f, c), -1

def eps_voraz(Q, s, eps=0.1):
    if u() < eps:
        return int(u() * 4)
    fila = Q[s]
    return max(range(4), key=lambda a: (fila[a], -a))

def entrenar(metodo, episodios=500, alfa=0.5, gamma=1.0):
    Q = {(f, c): [0.0] * 4 for f in range(FILAS) for c in range(COLS)}
    sumas = []
    for _ in range(episodios):
        s, a, total = INICIO, eps_voraz(Q, INICIO), 0
        while s != META:
            s2, r = paso(s, a)
            total += r
            a2 = eps_voraz(Q, s2)
            objetivo = Q[s2][a2] if metodo == "sarsa" else max(Q[s2])
            Q[s][a] += alfa * (r + gamma * (0 if s2 == META else objetivo) - Q[s][a])
            s, a = s2, a2
        sumas.append(total)
    return Q, sum(sumas[-100:]) / 100

def camino_voraz(Q):
    s, filas = INICIO, []
    for _ in range(50):
        if s == META:
            break
        s, _ = paso(s, max(range(4), key=lambda a: (Q[s][a], -a)))
        filas.append(s[0])
    return min(filas)

for metodo in ("sarsa", "q-learning"):
    Q, media = entrenar(metodo)
    print("%-10s recompensa media de los últimos 100 episodios: %6.1f   fila más alta del camino voraz: %d" % (metodo, media, camino_voraz(Q)))
```

Salida (SARSA rodea por la fila de arriba; Q-learning va por la fila 2, junto al borde, y se cae más mientras explora):

```
sarsa      recompensa media de los últimos 100 episodios:  -23.3   fila más alta del camino voraz: 0
q-learning recompensa media de los últimos 100 episodios:  -37.6   fila más alta del camino voraz: 2
```

## 9. Errores típicos

- Confundir el valor de un estado con la recompensa inmediata; olvidar que en los estados terminales no hay valor futuro.
- Usar Q(s′, a′) de la acción voraz en SARSA (eso es Q-learning) o al revés.
- Entrenar DQN sin red objetivo ni memoria de repetición; no cortar el *bootstrapping* en los estados terminales.
- Dar resultados con una sola semilla; comparar algoritmos con presupuestos de pasos distintos.
- Recompensas que el agente puede explotar de formas no previstas.

## 10. Resumen

- MDP, retorno descontado (horizonte ~1/(1 − γ)), V, Q, ecuaciones de Bellman y de optimalidad.
- Programación dinámica: evaluación, iteración de políticas y de valores.
- Exploración: ε-voraz, UCB1, Thompson. Monte Carlo frente a TD; error TD; SARSA (en política) frente a Q-learning (fuera de política); el acantilado.
- DQN: memoria de repetición y red objetivo; Double DQN.
- Gradiente de la política (∇log π · A), REINFORCE con línea base, actor-crítico, GAE (γλ), PPO (cociente recortado).
- Ineficiencia, inestabilidad, piratería de la recompensa; Gymnasium.

## Repaso: lo que debe quedarte dentro de un mes

1. V(s) = esperanza del retorno; Bellman la relaciona con la del siguiente estado.
2. SARSA aprende el valor de lo que hace; Q-learning, el de la política voraz.
3. DQN = Q-learning + red + repetición + red objetivo.
4. Ventaja = Q − V; GAE la estima con δ y (γλ).
5. PPO recorta el cociente para no dar pasos demasiado grandes.

## Siguiente

`proy-ia-aprendizaje-refuerzo` (un agente que controla un sistema físico simulado), `ia-modelos-generativos` e `ia-bayesiana`.
