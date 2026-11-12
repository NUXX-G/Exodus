---
id: cua-computacion-cuantica
title: "Computación cuántica"
area: ia-cuantica
trunk_level: 5
prerequisites: [fis-mecanica-cuantica, mat-probabilidad]
academic_sources:
  - "Nielsen, M. A.; Chuang, I. L. Quantum Computation and Quantum Information, ed. 10º aniversario. Cambridge University Press, 2010."
  - "Preskill, J. Lecture Notes for Physics 229: Quantum Information and Computation. Caltech."
  - "Shor, P. W. Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer. SIAM Journal on Computing, 26(5), 1997."
  - "Grover, L. K. A fast quantum mechanical algorithm for database search. Proceedings of the 28th ACM STOC, 1996."
  - "Bennett, C. H.; Bernstein, E.; Brassard, G.; Vazirani, U. Strengths and Weaknesses of Quantum Computing. SIAM Journal on Computing, 26(5), 1997."
  - "Deutsch, D.; Jozsa, R. Rapid solution of problems by quantum computation. Proceedings of the Royal Society A, 439, 1992."
  - "Wootters, W. K.; Zurek, W. H. A single quantum cannot be cloned. Nature, 299, 1982."
  - "Bennett, C. H. et al. Teleporting an unknown quantum state via dual classical and Einstein-Podolsky-Rosen channels. Physical Review Letters, 70, 1993."
  - "Clauser, J. F.; Horne, M. A.; Shimony, A.; Holt, R. A. Proposed Experiment to Test Local Hidden-Variable Theories. Physical Review Letters, 23, 1969."
  - "Cirel'son, B. S. Quantum generalizations of Bell's inequality. Letters in Mathematical Physics, 4, 1980."
  - "Boyer, M.; Brassard, G.; Høyer, P.; Tapp, A. Tight bounds on quantum searching. Fortschritte der Physik, 46, 1998."
  - "Kitaev, A. Yu. Quantum measurements and the Abelian Stabilizer Problem. arXiv:quant-ph/9511026, 1995."
  - "NIST. FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard, 2024."
ctf_flag: "sha256:46df4b2114bcd4e3ff85db625c6e5a5c22a4ceefde2d2e64ddd73a60a29e4ec7"
hints:
  - "(a) Grover mantiene el estado en un plano de dos dimensiones y cada iteración lo gira un ángulo fijo 2θ, con sin θ = 1/√N. (b) El orden de a módulo N es el menor r > 0 con a^r ≡ 1; si es par y a^(r/2) ≢ −1, los máximos comunes divisores de a^(r/2) ± 1 con N dan factores. (c) Tras medir el segundo registro, el primero queda en una superposición uniforme de x ≡ x0 (mod r); su transformada de Fourier cuántica es una suma geométrica (núcleo de Dirichlet) de m términos. (d) El valor esperado ⟨A⊗B⟩ para el estado de Bell |Φ+⟩ con observables en el plano XZ depende solo de la diferencia de ángulos."
  - "Para (a) simula el vector de 1024 amplitudes con numpy (oráculo: cambio de signo; difusión: 2·media − amplitud) y compara con sin²((2k+1)θ). Para (b) pow(a, r, N) en Python y math.gcd. Para (c) calcula la suma directa de los m exponenciales y contrástala con la forma cerrada; comprueba que Σ_y P(y) = 1. Para (d) construye las matrices 2×2 de los observables y usa np.kron o una doble suma sobre el vector de estado."
  - "Nielsen & Chuang, §6.1 (Grover y su geometría), §5.2–5.3 (estimación de fase y búsqueda de orden), §5.3 y apéndice 4 (fracciones continuas), §2.6 (desigualdad de Bell y CHSH). Preskill, cap. 6 (algoritmos cuánticos). Documentación: qiskit.org/documentation y numpy.org/doc/stable/reference/generated/numpy.kron.html"
---

# Computación cuántica

Un ordenador cuántico no es "un ordenador más rápido": es un modelo de cómputo basado en las
reglas de [[fis-mecanica-cuantica]] sobre sistemas de dos niveles. Para un número muy pequeño de
problemas conocidos da ventaja asintótica probada o conjeturada; para casi todo lo demás no
ayuda. Entender qué da y qué no da es tan importante como saber operar los circuitos.

## 1. Qubits y postulados

Un **qubit** es un vector unitario de $\mathbb{C}^2$, $|\psi\rangle = \alpha|0\rangle + \beta|1\rangle$
con $|\alpha|^2 + |\beta|^2 = 1$. Módulo una fase global (no observable), se parametriza por la
**esfera de Bloch**: $|\psi\rangle = \cos\tfrac\theta2|0\rangle + e^{i\varphi}\sin\tfrac\theta2|1\rangle$.

Los postulados, aplicados a $n$ qubits (espacio $(\mathbb{C}^2)^{\otimes n} \cong \mathbb{C}^{2^n}$):

1. **Estado**: un vector unitario de ese espacio. Los sistemas compuestos se combinan con el
   producto tensorial. Un estado es **entrelazado** si no se puede escribir como producto de
   estados de cada parte.
2. **Evolución**: una matriz unitaria $U$ ($U^\dagger U = I$), reversible por construcción.
3. **Medición** en la base computacional: se obtiene $x$ con probabilidad $|\langle x|\psi\rangle|^2$
   (regla de Born) y el estado **colapsa** a $|x\rangle$.

Toda la dificultad de simular un sistema cuántico clásicamente está en el postulado 1: el
vector tiene $2^n$ amplitudes. Con 50 qubits ya son $2^{50}$ números complejos.

## 2. Puertas

Las puertas de un qubit son rotaciones de la esfera de Bloch:

$$
X = \begin{pmatrix}0&1\\1&0\end{pmatrix},\;
Z = \begin{pmatrix}1&0\\0&-1\end{pmatrix},\;
H = \tfrac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix},\;
S = \begin{pmatrix}1&0\\0&i\end{pmatrix},\;
T = \begin{pmatrix}1&0\\0&e^{i\pi/4}\end{pmatrix}.
$$

$H$ lleva $|0\rangle \mapsto (|0\rangle + |1\rangle)/\sqrt2$: crea superposición. La puerta de dos
qubits fundamental es **CNOT**, que invierte el objetivo si el control vale 1. Con $H$ y CNOT:

$$
|00\rangle \xrightarrow{H\otimes I} \tfrac{1}{\sqrt2}(|00\rangle + |10\rangle)
\xrightarrow{\text{CNOT}} \tfrac{1}{\sqrt2}(|00\rangle + |11\rangle) = |\Phi^+\rangle ,
$$

un **estado de Bell**, máximamente entrelazado. Cada qubit por separado da 0 o 1 con
probabilidad 1/2, pero los dos resultados coinciden siempre.

**Universalidad.** Un conjunto finito como $\{H, T, \text{CNOT}\}$ aproxima cualquier unitaria
con error arbitrario, y el teorema de Solovay-Kitaev garantiza que basta una longitud
polilogarítmica en $1/\varepsilon$ (Nielsen y Chuang, §4.5). Las puertas $\{H, S, \text{CNOT}\}$
(Clifford) por sí solas se pueden simular eficientemente en un ordenador clásico
(Gottesman-Knill): la puerta $T$ es la que aporta el poder extra.

**Teorema de no clonación** (Wootters y Zurek, 1982). No existe una unitaria $U$ con
$U(|\psi\rangle|0\rangle) = |\psi\rangle|\psi\rangle$ para todo $|\psi\rangle$.

*Demostración.* Si $U$ clonase $|\psi\rangle$ y $|\phi\rangle$, el producto interno de ambas
salidas sería $\langle\psi|\phi\rangle^2$, pero una unitaria conserva productos internos:
$\langle\psi|\phi\rangle = \langle\psi|\phi\rangle^2$, lo que solo ocurre si el producto es 0 o 1.
$\blacksquare$

Consecuencia directa: un estado cuántico desconocido no se puede copiar ni observar sin
perturbarlo. Es el fundamento de la distribución cuántica de claves.

## 3. Entrelazamiento: teleportación y Bell-CHSH

**Teleportación** (Bennett et al., 1993). Alice tiene un qubit $|\psi\rangle = \alpha|0\rangle +
\beta|1\rangle$ desconocido y comparte con Bob un par $|\Phi^+\rangle$. Alice aplica CNOT y $H$ a
su qubit y su mitad del par, y mide ambos, obteniendo dos bits $(m_1, m_2)$. Desarrollando el
estado de los tres qubits se obtiene

$$
\tfrac12\sum_{m_1,m_2}|m_1m_2\rangle \otimes X^{m_2}Z^{m_1}|\psi\rangle ,
$$

de modo que, tras enviar los dos bits por un canal clásico, Bob aplica $X^{m_2}Z^{m_1}$ y
recupera $|\psi\rangle$. No se transmite información más rápido que la luz (Bob necesita los dos
bits clásicos) y el original se destruye (coherente con la no clonación).

**Desigualdad de Bell-CHSH.** Con observables $A, A'$ en un lado y $B, B'$ en el otro, de
valores $\pm1$, cualquier teoría con variables ocultas locales cumple

$$
|S| \le 2, \qquad S = E(A,B) - E(A,B') + E(A',B) + E(A',B') .
$$

*Demostración.* Para valores $\pm1$: $S = A(B - B') + A'(B + B')$, y como $B, B' \in \{\pm1\}$
uno de los dos paréntesis es 0 y el otro $\pm2$, así que $|S|\le2$ en cada realización; el
promedio mantiene la cota. $\blacksquare$

Con $|\Phi^+\rangle$ y observables $\cos\theta\,Z + \sin\theta\,X$, $E(\theta_A,\theta_B) =
\cos(\theta_A - \theta_B)$, y con $\theta_A \in \{0, 90°\}$, $\theta_B \in \{45°, 135°\}$ se
llega a $S = 2\sqrt2 \approx 2{,}828$. Cirel'son (1980) probó que esa es la cota máxima de la
mecánica cuántica. Los experimentos violan $|S| \le 2$: ninguna teoría local con variables
ocultas puede describir la naturaleza.

## 4. Algoritmos y su estructura

**Paralelismo cuántico no es magia.** Con $H^{\otimes n}$ se prepara la superposición uniforme
de $2^n$ valores, y un oráculo $U_f|x\rangle|0\rangle = |x\rangle|f(x)\rangle$ evalúa $f$ en
todos a la vez. Pero una medición devuelve un solo resultado. Todo algoritmo cuántico consiste
en organizar la **interferencia** para que las amplitudes de las respuestas erróneas se anulen.

**Deutsch-Jozsa** (1992). Se promete que $f:\{0,1\}^n \to \{0,1\}$ es constante o equilibrada.
Aplicando $H^{\otimes n}$, el oráculo con *retroceso de fase* ($|x\rangle \mapsto (-1)^{f(x)}|x\rangle$)
y de nuevo $H^{\otimes n}$, la amplitud de $|0\cdots0\rangle$ es $\frac{1}{2^n}\sum_x (-1)^{f(x)}$:
vale $\pm1$ si $f$ es constante y 0 si es equilibrada. Una sola consulta distingue los casos;
clásicamente hacen falta $2^{n-1} + 1$ en el peor caso determinista. Es la primera separación
oráculo, aunque un algoritmo clásico *aleatorizado* resuelve el problema con pocas consultas.

**Grover** (1996). Búsqueda entre $N = 2^n$ elementos con $M = 1$ marcado. Sea $|s\rangle$ la
superposición uniforme y $|w\rangle$ el elemento buscado. El oráculo es la reflexión
$O = I - 2|w\rangle\langle w|$ y la difusión $D = 2|s\rangle\langle s| - I$. El estado permanece
en el plano generado por $|w\rangle$ y $|s^\perp\rangle$, donde $\langle w|s\rangle = 1/\sqrt N =
\sin\theta$. Dos reflexiones componen una **rotación** de ángulo $2\theta$, por lo que tras $k$
iteraciones

$$
P_k = \sin^2\bigl((2k+1)\theta\bigr), \qquad \theta = \arcsin\frac{1}{\sqrt N},
$$

máxima cuando $(2k+1)\theta \approx \pi/2$, es decir, $k \approx \frac\pi4\sqrt N$. **Si se
itera de más, la probabilidad baja**. Cuadráticamente más rápido que el mejor algoritmo clásico
($\Theta(N)$), y Bennett et al. (1997) y Boyer et al. (1998) probaron que $\Omega(\sqrt N)$
consultas son necesarias: Grover es óptimo. La ganancia es cuadrática, no exponencial.

**Transformada de Fourier cuántica y estimación de fase.** La QFT de tamaño $Q$ lleva
$|x\rangle \mapsto \frac{1}{\sqrt Q}\sum_y e^{2\pi i xy/Q}|y\rangle$ y se implementa con
$O(n^2)$ puertas ($n = \log_2 Q$). Dada una unitaria $U$ con autovector
$U|u\rangle = e^{2\pi i\varphi}|u\rangle$, la estimación de fase (Kitaev, 1995) obtiene
$\varphi$ con $t$ bits de precisión usando $t$ qubits de conteo.

**Shor** (1994). Factorizar $N$ se reduce a hallar el **orden** $r$ de un $a$ coprimo con $N$ (el
menor $r>0$ con $a^r \equiv 1 \bmod N$).

*Reducción clásica.* Si $r$ es par y $a^{r/2} \not\equiv -1 \pmod N$, entonces
$(a^{r/2}-1)(a^{r/2}+1) \equiv 0 \pmod N$ sin que $N$ divida a ninguno de los factores, de modo
que $\gcd(a^{r/2}\pm1, N)$ son factores no triviales de $N$. Para un $a$ aleatorio esto ocurre
con probabilidad al menos 1/2.

*Parte cuántica.* Con $Q = 2^t \ge N^2$, se prepara $\frac{1}{\sqrt Q}\sum_x|x\rangle|a^x \bmod N\rangle$
y se mide el segundo registro. El primero queda uniformemente repartido sobre los
$m \approx Q/r$ valores $x \equiv x_0 \pmod r$. La QFT lo transforma en

$$
\Pr(y) = \frac{1}{Qm}\left|\sum_{j=0}^{m-1} e^{2\pi i\, y\,j r/Q}\right|^2
= \frac{1}{Qm}\left(\frac{\sin(\pi m y r/Q)}{\sin(\pi y r/Q)}\right)^2 ,
$$

con picos en los $y$ próximos a $sQ/r$, $s = 0,\dots,r-1$. De $y/Q \approx s/r$ se recupera $r$
con **fracciones continuas** (si $\gcd(s,r) = 1$, la aproximación $s/r$ aparece como convergente
porque $|y/Q - s/r| \e 1/(2Q) e 1/(2N^2) < 1/(2r^2)$). El coste total es polinómico en $\log N$, frente al
subexponencial del mejor algoritmo clásico conocido (criba general del cuerpo de números). Un
ordenador cuántico tolerante a fallos rompería RSA, Diffie-Hellman y las curvas elípticas
([[sec-criptografia]]), y por eso el NIST publicó en 2024 los primeros estándares
poscuánticos (FIPS 203, 204 y 205).

```python
import numpy as np

def grover(n, marcado, iteraciones):
    N = 1 << n
    psi = np.full(N, 1 / np.sqrt(N))
    for _ in range(iteraciones):
        psi[marcado] *= -1               # oráculo
        psi = 2 * psi.mean() - psi       # difusión
    return psi[marcado] ** 2

# n = 10 -> k = floor(pi/4 * sqrt(1024)) = 25;  P ≈ 0.99946
```

## 5. Límites y realidad actual

- **BQP**: la clase de problemas que un ordenador cuántico resuelve con error acotado en
  tiempo polinómico. Contiene a BPP y está contenida en PSPACE; no se cree que contenga a los
  problemas NP-completos.
- **Decoherencia y ruido**: las puertas reales fallan con probabilidad $10^{-3}$ a $10^{-2}$ por
  operación. Se necesita **corrección de errores cuántica**: un qubit lógico se codifica en
  muchos físicos, y el teorema del umbral garantiza cómputo arbitrariamente largo si el error
  físico está por debajo de un umbral (del orden del 1 % en códigos de superficie). Ejecutar
  Shor sobre claves de 2048 bits exige millones de qubits físicos, no los cientos actuales.
- **Cuándo ayuda**: simulación de sistemas cuánticos (química, materiales), factorización y
  logaritmo discreto, y aceleraciones cuadráticas generales. **Cuándo no**: bases de datos
  convencionales, IA generalista, y problemas sin estructura aprovechable. Cualquier
  afirmación de "aceleración exponencial" sin una referencia al algoritmo concreto es
  publicidad.

## Reto

Calcula cinco enteros.

- **a.** Grover con $n = 10$ qubits, un único elemento marcado, y $k = \lfloor \tfrac\pi4\sqrt N
  \rfloor$ iteraciones. Probabilidad de medir el elemento marcado: $\lfloor 10^9 P\rfloor$.
  Valor de control: con $N = 8$ y $k = 2$, $P = 0{,}9453125$.
- **b.** Orden $r$ de $a = 2$ módulo $N = 143$.
- **c.** El menor de los dos factores primos de 143 que se obtienen con $\gcd(a^{r/2} \pm 1, N)$.
- **d.** Estimación de fase con $Q = 2^{15} = 32768$ y el mismo $r$. Tras medir el segundo
  registro con resultado $a^0 \bmod 143 = 1$, el primer registro es la superposición uniforme
  de los $x \in [0, Q)$ con $x \equiv 0 \pmod r$ ($m = 547$ términos). Calcula $\Pr(y)$ para
  $y = \operatorname{round}(7Q/r)$ y entrega $\lfloor 10^9 \Pr(y)\rfloor$. Valor de control:
  $\sum_y \Pr(y) = 1$.
- **e.** Estado $|\Phi^+\rangle$ y observables $\cos\theta\,Z + \sin\theta\,X$. Con los ángulos
  $A: 0°$, $A': 50°$, $B: 25°$, $B': -20°$, calcula
  $S = E(A,B) - E(A,B') + E(A',B) + E(A',B')$ y entrega $\lfloor 10^9 S\rfloor$. Valor de
  control: con $A:0°$, $A':90°$, $B:45°$, $B':135°$ sale $S = 2\sqrt2$.

Formato de la flag, en decimal: `EXODUS{a-b-c-d-e}`
