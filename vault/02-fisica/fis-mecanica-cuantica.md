---
id: fis-mecanica-cuantica
title: "Mecánica cuántica"
area: fisica
trunk_level: 11
prerequisites: [fis-mecanica-clasica, mat-algebra-lineal]
academic_sources:
  - "Sakurai, J. J.; Napolitano, J. Modern Quantum Mechanics, 3ª ed. Cambridge University Press, 2020."
  - "Griffiths, D. J.; Schroeter, D. F. Introduction to Quantum Mechanics, 3ª ed. Cambridge University Press, 2018."
  - "Shankar, R. Principles of Quantum Mechanics, 2ª ed. Springer, 1994."
  - "Cohen-Tannoudji, C.; Diu, B.; Laloë, F. Quantum Mechanics, Vol. 1. Wiley, 1977."
  - "Nielsen, M. A.; Chuang, I. L. Quantum Computation and Quantum Information, ed. 10º aniversario. Cambridge University Press, 2010."
ctf_flag: "sha256:8b101c43eb66c86445b69b22bd6cea3ba7f55a548a91ac5bee2f92d296d6014f"
hints:
  - "(a) El estado fundamental es par: empalma un coseno dentro con una exponencial decreciente fuera, igualando la derivada logarítmica en el borde. La ecuación resultante es trascendente. (b) El hamiltoniano es una matriz 2×2 constante: la evolución es una rotación del espín alrededor de un eje inclinado. (c) Escribe los coeficientes del estado como una matriz 2×2; sus valores singulares son los coeficientes de Schmidt."
  - "(a) scipy.optimize.brentq sobre z·tan z − √(z₀² − z²) en (0, π/2), evitando el polo; o sobre cos z − z/z₀, que es equivalente y no tiene polos. (b) scipy.linalg.expm(−1j·H·t) aplicado a (1, 0); P es el módulo al cuadrado de la segunda componente. (c) numpy.linalg.svd de la matriz de coeficientes normalizada; S = −Σ λ log₂ λ con λ los cuadrados de los valores singulares."
  - "Griffiths & Schroeter, §2.6 (pozo finito, ecuaciones 2.156–2.160) y §4.4 (espín 1/2 en un campo magnético). Sakurai, §2.1 y §3.2. Nielsen & Chuang, §2.5 (descomposición de Schmidt) y §11.3 (entropía de von Neumann). Documentación: docs.scipy.org, scipy.linalg.expm."
---

# Mecánica cuántica

La mecánica cuántica es álgebra lineal con una regla probabilística. Su estructura formal es
pequeña, y este nodo la presenta entera antes de aplicarla a los tres sistemas que reaparecen en
toda la física: una partícula confinada, un sistema de dos niveles y un par de sistemas
entrelazados. Es la base de [[cua-computacion-cuantica]].

## 1. Postulados

1. **Estados.** El estado de un sistema aislado es un vector unitario $|\psi\rangle$ de un
   espacio de Hilbert complejo $\mathcal H$, definido salvo una fase global.
2. **Observables.** A cada magnitud medible le corresponde un operador autoadjunto $A$. Por el
   teorema espectral, $A = \sum_a a\, P_a$, con autovalores reales $a$ y proyectores ortogonales
   $P_a$.
3. **Medida (regla de Born).** Al medir $A$ se obtiene $a$ con probabilidad
   $p(a) = \langle\psi|P_a|\psi\rangle$, y el estado pasa a ser
   $P_a|\psi\rangle / \sqrt{p(a)}$.
4. **Evolución.** Entre medidas, $i\hbar\,\partial_t|\psi\rangle = H|\psi\rangle$ (ecuación de
   Schrödinger), con $H$ el hamiltoniano. Si $H$ no depende del tiempo,
   $|\psi(t)\rangle = e^{-iHt/\hbar}|\psi(0)\rangle$.
5. **Sistemas compuestos.** El espacio de dos sistemas es el producto tensorial
   $\mathcal H_A \otimes \mathcal H_B$.

**Valor esperado.** $\langle A\rangle = \sum_a a\,p(a) = \langle\psi|A|\psi\rangle$.

**Teorema.** La evolución $U(t) = e^{-iHt/\hbar}$ es unitaria y conserva la norma.

*Demostración.* Como $H = H^\dagger$, $U^\dagger = e^{iHt/\hbar}$ y $U^\dagger U = I$; por tanto
$\langle\psi(t)|\psi(t)\rangle = \langle\psi(0)|U^\dagger U|\psi(0)\rangle = 1$. $\blacksquare$

**Teorema (Robertson).** Para observables $A$ y $B$,
$\sigma_A\sigma_B \ge \tfrac12\,|\langle[A, B]\rangle|$.

*Demostración.* Con $\tilde A = A - \langle A\rangle$ y $\tilde B$ análogo, la desigualdad de
Cauchy-Schwarz da $\sigma_A^2\sigma_B^2 = \|\tilde A\psi\|^2\|\tilde B\psi\|^2 \ge
|\langle\tilde A\psi, \tilde B\psi\rangle|^2 \ge (\operatorname{Im}\langle\tilde A\tilde
B\rangle)^2$, y $2i\operatorname{Im}\langle\tilde A\tilde B\rangle = \langle[A, B]\rangle$.
$\blacksquare$

Con $[x, p] = i\hbar$ resulta $\sigma_x\sigma_p \ge \hbar/2$: el principio de incertidumbre no es
un postulado, sino un teorema sobre operadores que no conmutan. El conmutador ocupa el lugar del
corchete de Poisson de [[fis-mecanica-clasica]].

## 2. Una partícula en una dimensión

En la representación de posición, $\psi(x) = \langle x|\psi\rangle$, $|\psi(x)|^2$ es una densidad
de probabilidad, $p = -i\hbar\,\partial_x$ y

$$
H = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x) .
$$

Los **estados estacionarios** $H\psi = E\psi$ evolucionan solo con una fase, $e^{-iEt/\hbar}$, y
el estado general es una superposición de ellos.

**Teorema (paridad).** Si $V(-x) = V(x)$, los estados ligados no degenerados son pares o impares.

*Demostración.* Si $\psi(x)$ es solución, también lo es $\psi(-x)$ con la misma energía. Como el
nivel no es degenerado, $\psi(-x) = c\,\psi(x)$; aplicándolo dos veces, $c^2 = 1$. $\blacksquare$

## 3. El pozo finito

$V(x) = -V_0$ para $|x| < a$ y $V = 0$ fuera, con $V_0 > 0$. Para un estado ligado,
$-V_0 < E < 0$. Se definen

$$
k = \frac{\sqrt{2m(E + V_0)}}{\hbar}, \qquad \kappa = \frac{\sqrt{-2mE}}{\hbar}, \qquad
z = ka, \qquad z_0 = \frac{a}{\hbar}\sqrt{2mV_0},
$$

de modo que $z^2 + (\kappa a)^2 = z_0^2$. Dentro, $\psi = \cos(kx)$ para los estados pares; fuera,
$\psi = A e^{-\kappa|x|}$, la única solución normalizable. La continuidad de $\psi$ y de $\psi'$
en $x = a$ equivale a la de la derivada logarítmica, $\psi'/\psi$:

$$
k\tan(ka) = \kappa \quad\Longleftrightarrow\quad z\tan z = \sqrt{z_0^2 - z^2} .
$$

Los estados impares dan $-z\cot z = \sqrt{z_0^2 - z^2}$. Las soluciones se ven como cortes entre
las ramas de $\tan$ y una circunferencia de radio $z_0$, de donde:

- siempre existe al menos un estado ligado, por poco profundo que sea el pozo, a diferencia de
  lo que ocurre en tres dimensiones;
- hay $\lceil 2z_0/\pi\rceil$ estados ligados;
- el fundamental cumple $0 < z_1 < \pi/2$ y $\frac{E_1 + V_0}{V_0} = \frac{z_1^2}{z_0^2}$.

Elevando al cuadrado la condición par y usando $1 + \tan^2 z = 1/\cos^2 z$, queda la forma
equivalente $\cos z = z/z_0$ en las ramas con $\tan z > 0$, sin polos y más cómoda para bisección.

Valor de control: con $z_0 = 1$, $z_1 = 0{,}739085133\ldots$, el punto fijo del coseno.

Cuando $z_0 \to \infty$, $z_n \to n\pi/2$ y se recupera el pozo infinito de anchura $2a$, con
$E_n + V_0 = \frac{n^2\pi^2\hbar^2}{8ma^2}$. El pozo finito es el modelo de un electrón en un pozo
cuántico de semiconductor, y la cola $e^{-\kappa|x|}$ en la zona clásicamente prohibida es el
origen del **efecto túnel**.

## 4. Espín 1/2 y sistemas de dos niveles

El espacio más pequeño es $\mathbb C^2$, con base $|{\uparrow}\rangle, |{\downarrow}\rangle$. Todo
operador autoadjunto se escribe con las **matrices de Pauli**,

$$
\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad
\sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad
\sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix},
$$

que cumplen $\sigma_j\sigma_k = \delta_{jk} I + i\varepsilon_{jkl}\sigma_l$. El espín es
$\mathbf S = \frac{\hbar}{2}\boldsymbol\sigma$.

**Lema.** Para un vector unitario $\hat{\mathbf n}$,
$e^{-i\theta\,\hat{\mathbf n}\cdot\boldsymbol\sigma/2} = \cos\frac\theta2\, I -
i\sin\frac\theta2\;\hat{\mathbf n}\cdot\boldsymbol\sigma$.

*Demostración.* $(\hat{\mathbf n}\cdot\boldsymbol\sigma)^2 = I$ por la relación anterior; se
separan los términos pares e impares de la serie de la exponencial. $\blacksquare$

**Oscilaciones de Rabi.** Con $\hbar = 1$, sea $H = \frac12(\Delta\,\sigma_z + \Omega\,\sigma_x)
= \frac W2\,\hat{\mathbf n}\cdot\boldsymbol\sigma$, con $W = \sqrt{\Delta^2 + \Omega^2}$ y
$\hat{\mathbf n} = (\Omega, 0, \Delta)/W$. Por el lema, partiendo de $|{\uparrow}\rangle$,

$$
P_{\downarrow}(t) = |\langle{\downarrow}|e^{-iHt}|{\uparrow}\rangle|^2 =
\frac{\Omega^2}{\Delta^2 + \Omega^2}\,\sin^2\frac{Wt}{2} .
$$

Es la **fórmula de Rabi**. En resonancia ($\Delta = 0$) la población se transfiere por completo,
y un pulso con $\Omega t = \pi$ invierte el estado: es la puerta NOT de un qubit físico. Fuera de
resonancia, la transferencia máxima cae como una lorentziana en $\Delta$.

## 5. Sistemas compuestos y entrelazamiento

Un estado de $\mathcal H_A \otimes \mathcal H_B$ es **producto** si se escribe
$|\alpha\rangle\otimes|\beta\rangle$, y **entrelazado** si no. Ejemplo:
$|\Phi^+\rangle = \frac{1}{\sqrt 2}(|00\rangle + |11\rangle)$.

**Teorema (descomposición de Schmidt).** Todo $|\psi\rangle \in \mathcal H_A \otimes \mathcal H_B$
admite bases ortonormales $\{|a_i\rangle\}$, $\{|b_i\rangle\}$ y coeficientes $\lambda_i \ge 0$ con
$\sum\lambda_i^2 = 1$ tales que $|\psi\rangle = \sum_i \lambda_i\,|a_i\rangle|b_i\rangle$.

*Demostración.* Si $|\psi\rangle = \sum_{jk} c_{jk}|j\rangle|k\rangle$, la matriz
$C = (c_{jk})$ tiene una descomposición en valores singulares $C = U\Sigma V^\dagger$. Basta tomar
$|a_i\rangle = \sum_j U_{ji}|j\rangle$, $|b_i\rangle = \sum_k \overline{V_{ki}}|k\rangle$ y
$\lambda_i = \Sigma_{ii}$. $\blacksquare$

**Operador densidad reducido.** Lo que se puede predecir de las medidas solo sobre $A$ lo contiene
$\rho_A = \operatorname{Tr}_B|\psi\rangle\langle\psi| = \sum_i \lambda_i^2\,|a_i\rangle\langle
a_i| = CC^\dagger$. Un estado es producto si y solo si $\rho_A$ es un proyector puro, es decir, si
tiene un único coeficiente de Schmidt no nulo.

**Entropía de entrelazamiento.** $S = -\operatorname{Tr}(\rho_A\log_2\rho_A) =
-\sum_i \lambda_i^2\log_2\lambda_i^2$, medida en bits (ebits). Vale $0$ en los estados producto y
alcanza su máximo, $1$ en dos qubits, en los estados de Bell.

Para dos qubits basta un cálculo directo: los autovalores de $\rho_A = CC^\dagger$ son las raíces
de $\lambda^2 - \lambda + |\det C|^2 = 0$, porque $\operatorname{Tr}\rho_A = 1$ y
$\det\rho_A = |\det C|^2$.

Valor de control: para $|\Phi^+\rangle$, $C = I/\sqrt2$ y $S = 1$.

## Reto

Tres números adimensionales. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** Un pozo finito con $z_0 = 8$. Halla $(E_1 + V_0)/V_0$ para el estado fundamental.
  ¿Cuántos estados ligados tiene? No forma parte de la flag, pero debería salirte $6$.
- **b.** Con $\hbar = 1$, $H = \frac12(\Delta\,\sigma_z + \Omega\,\sigma_x)$, $\Delta = 1$ y
  $\Omega = 2$, el sistema parte de $|{\uparrow}\rangle$ en $t = 0$. Halla la probabilidad de
  encontrarlo en $|{\downarrow}\rangle$ en $t = 3$.
- **c.** La entropía de entrelazamiento, en bits, del estado de dos qubits
  $\frac{1}{\sqrt{14}}\bigl(|00\rangle + 2\,|01\rangle + 3\,|11\rangle\bigr)$.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9 \cdot (E_1 + V_0)/V_0\rfloor$, y
análogamente $b$ y $c$.
