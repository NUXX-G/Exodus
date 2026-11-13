---
id: mat-procesos-estocasticos
title: "Procesos estocásticos: cadenas de Markov, martingalas, procesos de Poisson, colas y movimiento browniano"
area: matematicas
trunk_level: 13
prerequisites: [mat-probabilidad, mat-algebra-lineal-avanzada, mat-ecuaciones-diferenciales]
academic_sources:
  - "Norris, J. R. Markov Chains. Cambridge University Press, 1997."
  - "Grimmett, G. R.; Stirzaker, D. R. Probability and Random Processes, 4ª ed. Oxford University Press, 2020."
exercises:
  - id: distribucion-estacionaria
    tier: 1
    prompt: |
      Una cadena de Markov tiene matriz de transición $P = \begin{pmatrix} 0{,}9 & 0{,}1 \\ 0{,}5 & 0{,}5 \end{pmatrix}$. ¿Cuál es su distribución estacionaria $\pi$ ($\pi P = \pi$)? Respuesta: `pi1;pi2` con **4 decimales**.
    answers: ["sha256:c5882c787899a51de0d1f2e5699c3931bd2096e113a3cdb9112b66219db62c36"]
  - id: transicion-en-dos-pasos
    tier: 1
    prompt: |
      Con la misma cadena, ¿cuál es la probabilidad de estar en el estado 2 dentro de dos pasos partiendo del estado 1? Respuesta: un número.
    answers: ["sha256:358e553bf44a364c4b9cf2ae457d0554b1e0605d6eba0239f6c682f456980791"]
  - id: ruina-del-jugador
    tier: 1
    prompt: |
      Un jugador con 3 € apuesta 1 € a cara o cruz (probabilidad $\frac12$) hasta llegar a 10 € o arruinarse. ¿Con qué probabilidad llega a 10 €? Respuesta: un número.
    answers: ["sha256:221764976efe04132774d96b0253cc31434c5261737469324f222621baf34b20"]
  - id: proceso-de-poisson
    tier: 1
    prompt: |
      Llegan peticiones según un proceso de Poisson de tasa 2 por minuto. ¿Con qué probabilidad llegan exactamente 4 en 3 minutos? Respuesta: con **5 decimales**.
    answers: ["sha256:c9a497b5406b9974e207dcfa531a833ee1071d3645a3a75b7769e805ff03fe46"]
  - id: ruina-sesgada
    tier: 2
    prompt: |
      Igual que en `ruina-del-jugador`, pero cada apuesta se gana con probabilidad $0{,}6$. ¿Con qué probabilidad llega a 10 € desde 3 €? Respuesta: con **4 decimales**.
    answers: ["sha256:cf29ece398dd5188a10513a03ecbc2d83bb59f389dbc8a95a0f8c6b5e1562fea"]
  - id: duracion-de-la-partida
    tier: 2
    prompt: |
      En la ruina justa de 3 € a 10 €, ¿cuántas apuestas dura la partida en media? Respuesta: un entero.
    answers: ["sha256:6f4b6612125fb3a0daecd2799dfd6c9c299424fd920f9b308110a2c1fbd8f443"]
  - id: tiempo-de-retorno
    tier: 2
    prompt: |
      En la cadena de `distribucion-estacionaria`, ¿cuántos pasos tarda en media en volver al estado 2 partiendo de él? (Para una cadena irreducible, $1/\pi_2$.) Respuesta: un entero.
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: cadena-absorbente
    tier: 2
    prompt: |
      Una cadena tiene dos estados transitorios A y B y uno absorbente. Desde A va a B con probabilidad $0{,}5$ y se absorbe con $0{,}5$; desde B va a A con $0{,}4$ y se absorbe con $0{,}6$. ¿Cuántos pasos tarda en media en absorberse partiendo de A? Usa la matriz fundamental $(I - Q)^{-1}$. Respuesta: un número.
    answers: ["sha256:f6aa2e8630ef1189e2e59dfa6dbfa1e75a7dd0bac44f9482bed50a74e27ffaa1"]
  - id: cola-mm1
    tier: 2
    prompt: |
      Una cola M/M/1 recibe clientes a tasa $\lambda = 3$ por minuto y los atiende a tasa $\mu = 4$. ¿Cuántos clientes hay en el sistema en media ($L$) y cuánto tiempo pasa cada uno en él ($W$, en minutos)? Respuesta: `L;W`.
    answers: ["sha256:916bfa6a3155437d4b9f446853322fcbe6214d652102fe9f16caa5be5cd90952"]
  - id: pagerank
    tier: 2
    prompt: |
      Tres páginas enlazan así: 1 → 2 y 1 → 3; 2 → 3; 3 → 1. Con factor de amortiguación $0{,}85$, ¿cuál es el PageRank de la página 3 (normalizado para que sumen 1)? Respuesta: con **4 decimales**.
    answers: ["sha256:bb806de610015971cf700d5f72d91a78c8e57881a6b4a8a0ac0c8955086a0501"]
  - id: extincion
    tier: 2
    prompt: |
      En un proceso de ramificación, cada individuo tiene 0, 1 o 2 hijos con probabilidades $\frac14$, $\frac14$ y $\frac12$. Partiendo de un individuo, ¿con qué probabilidad se extingue la población? (Menor raíz de $q = G(q)$.) Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: principio-de-reflexion
    tier: 3
    prompt: |
      Para un movimiento browniano estándar, ¿cuánto vale $\Pr(B_1 > 1)$ y, por el principio de reflexión, $\Pr(\max_{0\le t\le1}B_t \ge 1)$? Respuesta: `p1;p2` con **4 decimales**.
    answers: ["sha256:e6f9803e14d02368e65b24323790a00fa73a9f11f21d6d16859ff45b257f5b64"]
  - id: ornstein-uhlenbeck
    tier: 3
    prompt: |
      El proceso de Ornstein-Uhlenbeck $dX = -\theta X\,dt + \sigma\,dW$ con $\theta = 2$ y $\sigma = 1$ tiene varianza que obedece $v' = -2\theta v + \sigma^2$. ¿Cuál es su varianza estacionaria? Respuesta: un número.
    answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: duracion-sesgada
    tier: 3
    prompt: |
      En la ruina sesgada ($p = 0{,}6$) de 3 € a 10 €, ¿cuántas apuestas dura la partida en media? Respuesta: con **4 decimales**.
    answers: ["sha256:39df01af95ecab62a22fc167134d3bc7cfa2bb95925dcf1c3b40ab8acce25d58"]
  - id: markov-en-tiempo-continuo
    tier: 3
    prompt: |
      Una máquina pasa de funcionar (0) a averiada (1) a tasa 1 por hora y se repara a tasa 2 por hora. Si funciona en $t = 0$, ¿con qué probabilidad está averiada en $t = 1$ h? Respuesta: con **4 decimales**.
    answers: ["sha256:ffd2b9e61b36383a327787cda6f5420f9b2b6f6c8ae7c47050b4c546720006c6"]
  - id: carrera-de-poisson
    tier: 3
    prompt: |
      Dos procesos de Poisson independientes tienen tasas 3 y 5. ¿Con qué probabilidad el primer suceso viene del primero, y cuál es el tiempo medio hasta el primer suceso? Respuesta: `probabilidad;tiempo`.
    answers: ["sha256:5bb475f51a98e83e83284f6808489ebc156125464acf3f78ca02d47de1806a93"]
---

# Procesos estocásticos: cadenas de Markov, martingalas, procesos de Poisson, colas y movimiento browniano

Un **proceso estocástico** es una familia de variables aleatorias indexada por el tiempo: la cola de un servidor, el precio de un activo, la posición de una
molécula, el estado de un robot con sensores ruidosos. [[mat-probabilidad]] presentó las cadenas de Markov finitas; este nodo construye la teoría que se usa
de verdad: **tiempos de llegada y absorción** (sistemas lineales), **convergencia al equilibrio**, **martingalas** y el teorema de parada opcional, el
**proceso de Poisson** y las cadenas en tiempo continuo, las **colas**, los **procesos de ramificación** y el **movimiento browniano**, puerta del cálculo
estocástico.

## Objetivos

Al terminar sabrás:

1. Calcular distribuciones a $n$ pasos, distribuciones estacionarias y tiempos medios de retorno de una cadena de Markov.
2. Plantear probabilidades de absorción y tiempos medios de llegada como sistemas lineales (análisis del primer paso) y resolver la ruina del jugador.
3. Reconocer martingalas y usar el teorema de parada opcional para obtener probabilidades y esperanzas sin resolver sistemas.
4. Manejar el proceso de Poisson (llegadas, tiempos exponenciales, superposición) y las cadenas en tiempo continuo con su generador.
5. Analizar la cola M/M/1 y aplicar la ley de Little.
6. Calcular probabilidades de extinción de un proceso de ramificación.
7. Usar las propiedades del movimiento browniano (incrementos gaussianos, principio de reflexión) y del proceso de Ornstein-Uhlenbeck.

## Qué debes dominar antes

[[mat-probabilidad]] (esperanza condicionada, distribuciones exponencial, Poisson y normal, cadenas de Markov finitas), [[mat-algebra-lineal-avanzada]]
(autovalores, matrices estocásticas) y [[mat-ecuaciones-diferenciales]] (sistemas lineales $x' = Ax$, exponencial de matrices).

> [!question] Test de entrada
> 1. Si $X \sim \text{Exp}(\lambda)$, ¿cuánto vale $\Pr(X > t)$ y $E[X]$?
> 2. ¿Qué significa $\pi P = \pi$ para una matriz estocástica $P$?
> 3. ¿Cuál es la solución de $x' = -ax + b$ con $a > 0$ cuando $t \to \infty$?
>
> Respuestas: $e^{-\lambda t}$ y $1/\lambda$; que $\pi$ es un vector propio por la izquierda de autovalor 1 (distribución invariante); $b/a$.

## 1. Para qué sirve

- **Redes y sistemas**: dimensionar servidores y colas (tiempos de espera, ocupación), PageRank, protocolos con reintentos aleatorios.
- **Robótica e IA**: filtros de Kalman y de partículas modelan el estado como proceso de Markov oculto; el aprendizaje por refuerzo trabaja sobre procesos de
  decisión de Markov; MCMC (Metropolis, Gibbs) muestrea distribuciones construyendo una cadena con la estacionaria deseada.
- **Física**: difusión, ruido térmico (Langevin, Ornstein-Uhlenbeck), desintegración radiactiva (Poisson).
- **Finanzas y fiabilidad**: precios como movimiento browniano geométrico, tiempos de fallo y reparación como cadenas en tiempo continuo.

## 2. Cadenas de Markov en tiempo discreto

Una sucesión $(X_n)$ en un espacio de estados $S$ es una **cadena de Markov** con matriz de transición $P$ si
$\Pr(X_{n+1} = j \mid X_n = i, X_{n-1}, \ldots, X_0) = p_{ij}$: el futuro solo depende del presente. Las probabilidades a $n$ pasos son las entradas de $P^n$
(**ecuaciones de Chapman-Kolmogorov**: $P^{m+n} = P^mP^n$), y si $\lambda$ es la distribución inicial (vector fila), la de $X_n$ es $\lambda P^n$.

**Clasificación.** $i$ **comunica** con $j$ si cada uno es accesible desde el otro; las clases de comunicación parten $S$. Una cadena es **irreducible** si hay una
sola clase. Un estado es **recurrente** si la cadena vuelve a él con probabilidad 1, y **transitorio** si no. El **periodo** de $i$ es el mcd de los $n$ con
$p^{(n)}_{ii} > 0$; es **aperiódica** si vale 1.

**Teorema (convergencia al equilibrio).** Si $S$ es finito y la cadena es irreducible y aperiódica, existe una única distribución estacionaria $\pi$
($\pi P = \pi$, $\sum\pi_i = 1$, $\pi_i > 0$) y $p^{(n)}_{ij} \to \pi_j$ para todo $i$. Además el **tiempo medio de retorno** a $i$ es $m_i = 1/\pi_i$, y la fracción de
tiempo que la cadena pasa en $i$ tiende a $\pi_i$ (teorema ergódico).

*Idea de la prueba (acoplamiento).* Se lanzan dos copias independientes, una desde $i$ y otra desde $\pi$. Por irreducibilidad y aperiodicidad, la cadena
producto es irreducible y finita, así que las dos copias se encuentran en un tiempo $T$ finito casi seguro; a partir de ahí se las hace moverse juntas. Entonces
$|p^{(n)}_{ij} - \pi_j| \le \Pr(T > n) \to 0$. $\blacksquare$

La velocidad la fija el **segundo autovalor** en módulo: el error decrece como $|\lambda_2|^n$.

> [!example] Ejemplo resuelto 1: la cadena de dos estados
> $P = \begin{pmatrix} 1 - a & a \\ b & 1 - b \end{pmatrix}$. La ecuación $\pi P = \pi$ da $\pi_1a = \pi_2b$ (el flujo de 1 a 2 iguala al de 2 a 1), así que
> $\pi = \left(\frac{b}{a + b}, \frac{a}{a + b}\right)$. Con $a = 0{,}2$, $b = 0{,}3$: $\pi = (0{,}6;\ 0{,}4)$. Los autovalores de $P$ son $1$ y $1 - a - b = 0{,}5$, así que
> $p^{(n)}_{11} = 0{,}6 + 0{,}4\cdot0{,}5^n$: en 10 pasos el error es $4\cdot10^{-4}$. El tiempo medio de retorno a 2 es $1/0{,}4 = 2{,}5$ pasos.

**Reversibilidad.** Si $\pi_ip_{ij} = \pi_jp_{ji}$ para todo par (**equilibrio detallado**), $\pi$ es estacionaria: basta sumar en $i$. Las cadenas de nacimiento y
muerte y los paseos aleatorios por grafos ($\pi_i \propto$ grado de $i$) son reversibles, y el algoritmo de **Metropolis** se diseña imponiendo esta condición.

**PageRank** es la distribución estacionaria de un navegante que con probabilidad $d$ sigue un enlace al azar de la página actual y con probabilidad $1 - d$
salta a una página uniforme: el salto hace la cadena irreducible y aperiódica, y la iteración $\pi \leftarrow \pi G$ converge como $d^n$.

## 3. Análisis del primer paso: absorción y tiempos de llegada

Sea $A \subset S$ un conjunto objetivo. La probabilidad $h_i$ de llegar a $A$ alguna vez desde $i$ y el tiempo medio $k_i$ hasta llegar cumplen, condicionando
en el primer paso,

$$
h_i = 1\ (i \in A), \quad h_i = \sum_jp_{ij}h_j\ (i \notin A); \qquad k_i = 0\ (i \in A), \quad k_i = 1 + \sum_jp_{ij}k_j\ (i \notin A),
$$

y son la **solución mínima no negativa** de esos sistemas (Norris, teoremas 1.3.2 y 1.3.5); con estados finitos y absorción segura, la solución es única.

**Matriz fundamental.** Si se ordenan los estados transitorios primero, $P = \begin{pmatrix} Q & R \\ 0 & I \end{pmatrix}$. Entonces $N = (I - Q)^{-1} = I + Q + Q^2 + \cdots$ cuenta
las visitas esperadas a cada transitorio, el tiempo medio de absorción es $t = N\mathbf 1$ y las probabilidades de absorción en cada absorbente son $B = NR$.

> [!example] Ejemplo resuelto 2: la ruina del jugador
> Un jugador con $k$ € apuesta 1 € cada vez, gana con probabilidad $p$ y pierde con $q = 1 - p$, hasta tener $N$ o $0$. La probabilidad $h_k$ de llegar a $N$
> cumple $h_k = ph_{k+1} + qh_{k-1}$, $h_0 = 0$, $h_N = 1$. Es una recurrencia lineal con polinomio $pr^2 - r + q = 0$, de raíces $1$ y $q/p$:
> - si $p \ne q$: $h_k = \dfrac{(q/p)^k - 1}{(q/p)^N - 1}$;
> - si $p = q = \frac12$ (raíz doble): $h_k = k/N$.
>
> Con $p = \frac12$, $k = 2$, $N = 5$: $h_2 = 0{,}4$. El tiempo medio cumple $k_j = 1 + \frac12k_{j+1} + \frac12k_{j-1}$, cuya solución con $k_0 = k_N = 0$ es $k_j = j(N - j)$:
> desde 2 hasta 5, $2\cdot3 = 6$ apuestas.

## 4. Martingalas y parada opcional

$(M_n)$ es una **martingala** respecto a la información $\mathcal F_n$ si $E|M_n| < \infty$ y $E[M_{n+1} \mid \mathcal F_n] = M_n$: en media, el mañana es como el hoy. Un **tiempo de
parada** $T$ es un tiempo aleatorio tal que $\{T = n\}$ se decide con la información hasta $n$ (no mira el futuro).

**Teorema de parada opcional.** Si $M$ es martingala, $T$ es tiempo de parada y se cumple alguna de: $T$ acotado; o $E[T] < \infty$ y los incrementos
$|M_{n+1} - M_n|$ están acotados; o $(M_{n\wedge T})$ está acotada, entonces $E[M_T] = E[M_0]$.

*Prueba en el caso acotado.* Si $T \le K$, $M_T = M_0 + \sum_{n<K}(M_{n+1} - M_n)\mathbf 1_{\{T>n\}}$. El suceso $\{T > n\}$ está en $\mathcal F_n$, así que cada término tiene esperanza
$E[\mathbf 1_{\{T>n\}}E[M_{n+1} - M_n \mid \mathcal F_n]] = 0$. $\blacksquare$

**Aplicación a la ruina.** Con $p \ne q$, $M_n = (q/p)^{X_n}$ es martingala (compruébalo: $p(q/p)^{x+1} + q(q/p)^{x-1} = (q/p)^x$) y está acotada hasta el tiempo de
parada; igualando $E[M_T] = (q/p)^k$ con $h(q/p)^N + (1 - h)$ sale la fórmula de $h_k$ sin resolver nada. Y $X_n - n(p - q)$ también es martingala, de donde
$E[X_T] - (p - q)E[T] = k$, es decir,

$$
E[T] = \frac{k - Nh_k}{q - p} \qquad (p \ne q).
$$

En el caso justo, $X_n^2 - n$ es martingala y da $E[T] = k(N - k)$.

**Advertencia.** Las hipótesis no son decorativas: el paseo justo desde 0 parado al llegar a 1 tiene $E[X_T] = 1 \ne 0$; ahí $E[T] = \infty$. Es la razón por la que
la "martingala" de doblar la apuesta no gana dinero con crédito finito.

## 5. Procesos de ramificación

En un proceso de **Galton-Watson**, cada individuo tiene un número aleatorio de hijos con ley $p_k$ independiente de todo lo demás, y $Z_n$ es el tamaño de la
generación $n$. Sea $G(s) = \sum p_ks^k$ la función generatriz y $\mu = G'(1)$ la media de hijos. Entonces $E[Z_n] = \mu^n$ y la función generatriz de $Z_n$ es la
composición $G_n = G \circ \cdots \circ G$.

**Teorema.** La probabilidad de extinción $q$ es la **menor raíz no negativa** de $s = G(s)$. Si $\mu \le 1$ (y $p_1 < 1$), $q = 1$; si $\mu > 1$, $q < 1$.

*Prueba.* $q_n = \Pr(Z_n = 0) = G_n(0) = G(q_{n-1})$ es creciente y tiende a un punto fijo de $G$; por inducción, $q_n \le r$ para cualquier punto fijo $r \ge 0$
(pues $G$ es creciente y $q_0 = 0 \le r$). Como $G$ es convexa, la gráfica corta a la diagonal en $[0, 1)$ solo si $G'(1) > 1$. $\blacksquare$

Con $p_0 = 0{,}2$, $p_1 = 0{,}3$, $p_2 = 0{,}5$: $\mu = 1{,}3$ y $0{,}5s^2 - 0{,}7s + 0{,}2 = 0$ tiene raíces $1$ y $0{,}4$: la estirpe se extingue con probabilidad $0{,}4$.

## 6. El proceso de Poisson y las cadenas en tiempo continuo

Un **proceso de Poisson** de tasa $\lambda$ es un proceso de conteo $N(t)$ con $N(0) = 0$, incrementos independientes y $N(t + s) - N(s) \sim \text{Poisson}(\lambda t)$. Tres
descripciones equivalentes:

1. $\Pr(N(t) = k) = e^{-\lambda t}\frac{(\lambda t)^k}{k!}$ con incrementos independientes.
2. Los **tiempos entre llegadas** son exponenciales independientes de media $1/\lambda$; el tiempo de la llegada $n$ es $S_n \sim \text{Gamma}(n, \lambda)$ (Erlang), y
   $\{N(t) \ge n\} = \{S_n \le t\}$.
3. En un intervalo corto $h$, hay una llegada con probabilidad $\lambda h + o(h)$ y dos o más con $o(h)$.

La exponencial **no tiene memoria**: $\Pr(X > t + s \mid X > s) = \Pr(X > t)$. **Superposición**: la suma de Poisson independientes de tasas $\lambda_1$ y $\lambda_2$ es Poisson
de tasa $\lambda_1 + \lambda_2$, y el primer suceso viene del primero con probabilidad $\frac{\lambda_1}{\lambda_1 + \lambda_2}$ (de $\Pr(X_1 < X_2) = \int_0^\infty\lambda_1e^{-\lambda_1t}e^{-\lambda_2t}\,dt$).
**Adelgazamiento**: si cada llegada se marca con probabilidad $p$, las marcadas forman un Poisson de tasa $p\lambda$.

**Cadenas en tiempo continuo.** Una cadena en tiempo continuo se describe por un **generador** $Q$: $q_{ij} \ge 0$ es la tasa de salto $i \to j$ y $q_{ii} = -\sum_{j\ne i}q_{ij}$.
La cadena pasa en $i$ un tiempo exponencial de tasa $-q_{ii}$ y salta a $j$ con probabilidad $q_{ij}/(-q_{ii})$. Las probabilidades $P(t)$ cumplen las **ecuaciones de
Kolmogorov** $P'(t) = P(t)Q$, así que $P(t) = e^{tQ}$, y la distribución estacionaria resuelve $\pi Q = 0$.

> [!example] Ejemplo resuelto 3: encendido y apagado (con menos ayuda)
> Un estado 0 pasa a 1 a tasa $a$ y vuelve a tasa $b$. Escribe $p_1'(t) = a\,p_0 - b\,p_1 = a - (a + b)p_1$ y resuélvela con $p_1(0) = 0$; comprueba que
> $p_1(t) = \frac{a}{a + b}\left(1 - e^{-(a+b)t}\right)$ y que el límite es la estacionaria $\pi_1 = \frac{a}{a + b}$. Con $a = 2$, $b = 3$, $t = 0{,}2$: $p_1 = 0{,}4(1 - e^{-1}) \approx 0{,}2528$.

## 7. Colas

Una cola **M/M/1** tiene llegadas de Poisson de tasa $\lambda$, servicio exponencial de tasa $\mu$ y un servidor. El número en el sistema es una cadena de nacimiento
y muerte; el equilibrio detallado $\pi_n\lambda = \pi_{n+1}\mu$ da, si $\rho = \lambda/\mu < 1$,

$$
\pi_n = (1 - \rho)\rho^n, \qquad L = E[N] = \frac{\rho}{1 - \rho}, \qquad W = \frac{1}{\mu - \lambda}.
$$

Si $\rho \ge 1$ la cola crece sin límite. La **ley de Little**, $L = \lambda W$, vale para cualquier sistema estable (no solo M/M/1): número medio = tasa de entrada ×
tiempo medio dentro. La lección práctica es la explosión de $1/(1 - \rho)$: al pasar de $80\,\%$ a $95\,\%$ de ocupación, el tiempo de respuesta se multiplica por 4.

## 8. Movimiento browniano

El **movimiento browniano** estándar $(B_t)$ es un proceso con $B_0 = 0$, trayectorias continuas, incrementos independientes y $B_t - B_s \sim N(0, t - s)$. Es el
límite del paseo aleatorio reescalado, $S_{\lfloor nt\rfloor}/\sqrt n \to B_t$ (teorema de Donsker): por eso aparece en todas partes. Sus trayectorias son continuas
pero no derivables en ningún punto, y $B_t$ y $B_t^2 - t$ son martingalas.

**Principio de reflexión.** Para $a > 0$, $\Pr(\max_{s\le t}B_s \ge a) = 2\Pr(B_t \ge a)$. *Razón*: cada trayectoria que alcanza $a$ y acaba por debajo se corresponde,
reflejándola desde el primer instante en que toca $a$, con otra que acaba por encima, y por simetría y la propiedad de Markov fuerte ambas son igual de
probables. Derivando en $t$ se obtiene la densidad del tiempo de primer paso, $\frac{a}{\sqrt{2\pi t^3}}e^{-a^2/(2t)}$.

**Ornstein-Uhlenbeck.** La ecuación $dX = -\theta X\,dt + \sigma\,dW$ describe una partícula con rozamiento y ruido (Langevin), o un error que vuelve a cero. Su media
cumple $m' = -\theta m$ y su varianza $v' = -2\theta v + \sigma^2$, así que la varianza estacionaria es $\sigma^2/(2\theta)$. El estudio general de estas ecuaciones es el
cálculo de Itô.

## 9. Comprobar con un programa

Cada resultado por dos caminos: la estacionaria por sistema y por potencias de la matriz, la ruina por fórmula y por sistema lineal, la extinción por raíz y
por iteración, y el Poisson por la fórmula y por simulación con semilla fija.

```python
import math
import random

def resolver(A, b):
    n = len(b)
    M = [fila[:] + [bi] for fila, bi in zip(A, b)]
    for c in range(n):
        p = max(range(c, n), key=lambda r: abs(M[r][c]))
        M[c], M[p] = M[p], M[c]
        for r in range(n):
            if r != c:
                f = M[r][c] / M[c][c]
                M[r] = [x - f * y for x, y in zip(M[r], M[c])]
    return [M[i][n] / M[i][i] for i in range(n)]

def producto(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(len(B))) for j in range(len(B[0]))] for i in range(len(A))]

# 1. Ejemplo resuelto 1: π = (0,6; 0,4) y p11(n) = 0,6 + 0,4·0,5^n.
P = [[0.8, 0.2], [0.3, 0.7]]
Pn = P
for n in range(2, 11):
    Pn = producto(Pn, P)
assert abs(Pn[0][0] - (0.6 + 0.4 * 0.5 ** 10)) < 1e-15
pi = resolver([[P[0][0] - 1, P[1][0]], [1.0, 1.0]], [0.0, 1.0])
assert abs(pi[0] - 0.6) < 1e-15 and abs(pi[1] - 0.4) < 1e-15

# 2. Ejemplo resuelto 2: ruina del jugador por sistema lineal frente a la fórmula.
def ruina(p, k, N):
    n = N - 1
    A = [[0.0] * n for _ in range(n)]
    b, t = [0.0] * n, [1.0] * n
    for i in range(1, N):
        A[i - 1][i - 1] = 1.0
        if i + 1 < N:
            A[i - 1][i] = -p
        else:
            b[i - 1] = p
        if i - 1 > 0:
            A[i - 1][i - 2] = -(1 - p)
    return resolver(A, b)[k - 1], resolver(A, t)[k - 1]

h, T = ruina(0.5, 2, 5)
assert abs(h - 0.4) < 1e-12 and abs(T - 6) < 1e-12
p, k, N = 0.45, 4, 9
r = (1 - p) / p
h, T = ruina(p, k, N)
assert abs(h - (r ** k - 1) / (r ** N - 1)) < 1e-12
assert abs(T - (k - N * h) / ((1 - p) - p)) < 1e-10   # parada opcional

# 3. Extinción: iterar q ← G(q) desde 0 llega a la menor raíz, 0,4.
G = lambda s: 0.2 + 0.3 * s + 0.5 * s * s
q = 0.0
for _ in range(500):
    q = G(q)
assert abs(q - 0.4) < 1e-12

# 4. Poisson: tiempos exponenciales simulados frente a la fórmula (semilla fija).
random.seed(1)
lam, t, repeticiones = 1.5, 2.0, 200_000
cuenta = [0] * 15
for _ in range(repeticiones):
    s, n = random.expovariate(lam), 0
    while s <= t:
        n += 1
        s += random.expovariate(lam)
    cuenta[min(n, 14)] += 1
for n in range(6):
    exacta = math.exp(-lam * t) * (lam * t) ** n / math.factorial(n)
    assert abs(cuenta[n] / repeticiones - exacta) < 0.005
print("P(N(2) = 3): simulada", cuenta[3] / repeticiones, "exacta", round(math.exp(-3) * 27 / 6, 5))
```

## 10. Errores típicos

- Aplicar $p^{(n)}_{ij} \to \pi_j$ a una cadena periódica (la de dos estados que alterna nunca converge) o reducible (la estacionaria no es única).
- Olvidar en el análisis del primer paso las condiciones de frontera, o el "1 +" del paso dado en los tiempos medios.
- Usar parada opcional sin comprobar sus hipótesis: con $E[T] = \infty$ la igualdad $E[M_T] = E[M_0]$ puede fallar.
- Confundir la tasa $\lambda$ de un Poisson con la media del tiempo entre llegadas, que es $1/\lambda$.
- Tomar la raíz $s = 1$ como probabilidad de extinción cuando hay una menor en $[0, 1)$.
- Creer que una cola con $\rho = 0{,}99$ va "casi vacía": $L = 99$.
- Tratar el movimiento browniano como derivable: $(dB)^2 = dt$, no $0$.

## 11. Resumen

- Markov: $P^n$, Chapman-Kolmogorov, $\pi P = \pi$, convergencia si es irreducible y aperiódica (velocidad $|\lambda_2|^n$), $m_i = 1/\pi_i$, equilibrio detallado.
- Primer paso: $h = Ph$, $k = 1 + Pk$; matriz fundamental $(I - Q)^{-1}$; ruina $\frac{(q/p)^k - 1}{(q/p)^N - 1}$ o $k/N$, duración $k(N - k)$.
- Martingalas y parada opcional: probabilidades y esperanzas de tiempos de parada.
- Ramificación: extinción = menor raíz de $s = G(s)$, segura si $\mu \le 1$.
- Poisson: exponenciales sin memoria, superposición y adelgazamiento; tiempo continuo: generador $Q$, $P(t) = e^{tQ}$, $\pi Q = 0$.
- M/M/1: $L = \rho/(1 - \rho)$, $W = 1/(\mu - \lambda)$, Little $L = \lambda W$. Browniano: incrementos $N(0, t)$, reflexión, Ornstein-Uhlenbeck $\sigma^2/(2\theta)$.

## Repaso: lo que debe quedarte dentro de un mes

1. Toda pregunta de "probabilidad de llegar" o "tiempo medio hasta" es un sistema lineal condicionando en el primer paso.
2. Una cadena irreducible y aperiódica olvida su origen; el equilibrio es el vector propio por la izquierda.
3. Si encuentras una martingala, la parada opcional te da la respuesta casi gratis.
4. Poisson = exponenciales independientes; las tasas se suman.
5. Las colas explotan como $1/(1 - \rho)$.

## Siguiente

En las ramas, `mat-medida-integracion` (la base rigurosa: esperanza condicionada y convergencia de martingalas), `ia-aprendizaje-refuerzo` (procesos de decisión
de Markov), `rob-percepcion-slam` (filtros bayesianos sobre procesos de Markov ocultos) y `fis-mecanica-estadistica-avanzada` (ecuación de Langevin y de
Fokker-Planck). La estadística que estima estos modelos está en [[mat-estadistica-inferencia]].
