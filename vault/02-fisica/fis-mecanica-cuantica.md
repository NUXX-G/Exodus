---
id: fis-mecanica-cuantica
title: "Mecánica cuántica: postulados, pozos y túnel, oscilador, hidrógeno, espín y entrelazamiento"
area: fisica
trunk_level: 13
prerequisites: [fis-mecanica-clasica, mat-algebra-lineal-avanzada, fis-ondas-optica]
academic_sources:
  - "Griffiths, D. J.; Schroeter, D. F. Introduction to Quantum Mechanics, 3ª ed. Cambridge University Press, 2018."
  - "Sakurai, J. J.; Napolitano, J. Modern Quantum Mechanics, 3ª ed. Cambridge University Press, 2020."
  - "Shankar, R. Principles of Quantum Mechanics, 2ª ed. Plenum (hoy Springer), 1994."
  - "Cohen-Tannoudji, C.; Diu, B.; Laloë, F. Quantum Mechanics, Vol. 1. Wiley, 1977."
  - "Nielsen, M. A.; Chuang, I. L. Quantum Computation and Quantum Information, ed. 10º aniversario. Cambridge University Press, 2010."
  - "Clauser, J. F.; Horne, M. A.; Shimony, A.; Holt, R. A. Proposed Experiment to Test Local Hidden-Variable Theories. Physical Review Letters 23, 880-884, 1969."
ctf_flag: "sha256:8b101c43eb66c86445b69b22bd6cea3ba7f55a548a91ac5bee2f92d296d6014f"
hints:
  - "(a) El estado fundamental es par: empalma un coseno dentro con una exponencial decreciente fuera, igualando la derivada logarítmica en el borde. La ecuación resultante es trascendente. (b) El hamiltoniano es una matriz 2×2 constante: la evolución es una rotación del espín alrededor de un eje inclinado. (c) Escribe los coeficientes del estado como una matriz 2×2; sus valores singulares son los coeficientes de Schmidt."
  - "(a) Bisección sobre cos z − z/z₀ en (0, π/2), que no tiene polos; o sobre z·tan z − √(z₀² − z²) evitando el polo. (b) La fórmula de Rabi, o exponenciar la matriz con el lema de la sección 7 (scipy.linalg.expm también sirve); P es el módulo al cuadrado de la segunda componente. (c) Los autovalores de ρ_A = CC† salen de λ² − λ + |det C|² = 0; S = −Σ λ log₂ λ."
  - "Griffiths & Schroeter, §2.6 (pozo finito) y §4.4 (espín 1/2 en un campo magnético). Sakurai, §2.1 y §3.2. Nielsen & Chuang, §2.5 (descomposición de Schmidt) y §11.3 (entropía de von Neumann). Documentación: docs.scipy.org, scipy.linalg.expm."
exercises:
  - id: longitud-de-de-broglie
    tier: 1
    prompt: |
      ¿Cuál es la longitud de onda de de Broglie de un electrón con $100$ eV de energía cinética (no relativista)? Constantes: $h = 6{,}62607015\cdot10^{-34}$ J·s, $\hbar = h/2\pi$, $m_e = 9{,}1093837\cdot10^{-31}$ kg, $1$ eV $= 1{,}602176634\cdot10^{-19}$ J. Respuesta: en nm, con **4 decimales**.
    answers: ["sha256:3b6d401c25131af1242716ec585793bfe1f81aa82bc6b1382caaff6ce17b767a"]
  - id: regla-de-born
    tier: 1
    prompt: |
      Un qubit está en $\lvert\psi\rangle = \frac15\bigl(3\lvert0\rangle + 4i\lvert1\rangle\bigr)$. ¿Con qué probabilidad da $1$ al medirlo en la base computacional? Respuesta: un número.
    answers: ["sha256:04bd088be6c6f4228903a04eab7817db13463da0b94cbbad21063f4216a49380"]
  - id: valor-esperado-de-sigma-x
    tier: 1
    prompt: |
      ¿Cuánto vale $\langle\sigma_x\rangle$ en el estado $\frac{1}{\sqrt2}\bigl(\lvert0\rangle + e^{i\pi/3}\lvert1\rangle\bigr)$? Respuesta: un número.
    answers: ["sha256:d2cbad71ff333de67d07ec676e352ab7f38248eb69c942950157220607c55e84"]
  - id: espin-en-otro-eje
    tier: 1
    prompt: |
      Un espín $\frac12$ está en $\lvert{\uparrow_z}\rangle$ y se mide su componente a lo largo de un eje del plano $xz$ que forma $60°$ con $z$. ¿Con qué probabilidad sale $+\hbar/2$? Respuesta: un número.
    answers: ["sha256:ce5d3aa79ae56155078af52e8fac68eb2d0a78489f82bc26c1e1bbc667ba9fde"]
  - id: pozo-infinito
    tier: 1
    prompt: |
      ¿Cuál es la energía del estado fundamental de un electrón en un pozo infinito unidimensional de $1$ nm de anchura? Constantes: $h = 6{,}62607015\cdot10^{-34}$ J·s, $\hbar = h/2\pi$, $m_e = 9{,}1093837\cdot10^{-31}$ kg, $1$ eV $= 1{,}602176634\cdot10^{-19}$ J. Respuesta: en eV, con **3 decimales**.
    answers: ["sha256:60253d146b1668a22e64cb6744a36f3cbc02875e400897fa9d9726858155130b"]
  - id: incertidumbre-de-la-velocidad
    tier: 2
    prompt: |
      Un electrón está localizado con $\sigma_x = 0{,}1$ nm (el tamaño de un átomo). ¿Cuál es la mínima incertidumbre de su velocidad que permite $\sigma_x\sigma_p \ge \hbar/2$? Constantes: $h = 6{,}62607015\cdot10^{-34}$ J·s, $\hbar = h/2\pi$, $m_e = 9{,}1093837\cdot10^{-31}$ kg, $1$ eV $= 1{,}602176634\cdot10^{-19}$ J. Respuesta: en km/s, con **1 decimal**.
    answers: ["sha256:4092d9ea47f339d2b9b7a8852a6353a6e522ff5e516ea59d9d2437cf92fe088a"]
  - id: salto-del-oscilador
    tier: 2
    prompt: |
      Una vibración molecular se modela como un oscilador armónico con $\hbar\omega = 0{,}2$ eV. ¿Qué longitud de onda absorbe en el salto $0 \to 1$? Usa $hc = 1239{,}84198$ eV·nm. Respuesta: en μm, con **3 decimales**.
    answers: ["sha256:cd802071402812871c8b0714fd420ecf3a913677cedd6cfbeb30d769376ad5cb"]
  - id: estados-ligados-del-pozo-finito
    tier: 2
    prompt: |
      ¿Cuántos estados ligados tiene un pozo finito unidimensional con $z_0 = \frac a\hbar\sqrt{2mV_0} = 5$? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: oscilacion-de-rabi
    tier: 2
    prompt: |
      Con $\hbar = 1$ y $H = \frac12(\Delta\sigma_z + \Omega\sigma_x)$, $\Delta = 1$ y $\Omega = 3$, el sistema parte de $\lvert{\uparrow}\rangle$. ¿Con qué probabilidad está en $\lvert{\downarrow}\rangle$ en $t = 1$? Respuesta: con **4 decimales**.
    answers: ["sha256:33c111d8ddf4e231a5072d0ef651ccbdf55b867b0fa516f40fafc019c90f7d04"]
  - id: fuera-del-radio-de-bohr
    tier: 2
    prompt: |
      En el estado fundamental del hidrógeno, $\psi_{1s} = \frac{1}{\sqrt{\pi a_0^3}}e^{-r/a_0}$, ¿con qué probabilidad está el electrón a más de $2a_0$ del núcleo? Respuesta: con **4 decimales**.
    answers: ["sha256:3e575a0e767f3f0385cbe975aa3d7c35bcfc1853797b5b230e7dd0162c929ee6"]
  - id: entropia-de-entrelazamiento
    tier: 2
    prompt: |
      ¿Cuál es la entropía de entrelazamiento, en bits, del estado de dos qubits $\frac13\bigl(2\lvert00\rangle + \lvert01\rangle + 2\lvert11\rangle\bigr)$? Respuesta: con **4 decimales**.
    answers: ["sha256:1f4e2f39978966fa9cffb0f95bd5a0aae2d1174c846c4ce1d4767046e3bdf504"]
  - id: efecto-tunel
    tier: 3
    prompt: |
      Un electrón de $1$ eV incide sobre una barrera rectangular de $2$ eV de altura y $0{,}5$ nm de anchura. ¿Cuál es su probabilidad de transmisión, $T = \Bigl[1 + \frac{V_0^2\sinh^2(\kappa a)}{4E(V_0 - E)}\Bigr]^{-1}$ con $\kappa = \sqrt{2m(V_0 - E)}/\hbar$? Constantes: $h = 6{,}62607015\cdot10^{-34}$ J·s, $\hbar = h/2\pi$, $m_e = 9{,}1093837\cdot10^{-31}$ kg, $1$ eV $= 1{,}602176634\cdot10^{-19}$ J. Respuesta: con **5 decimales**.
    answers: ["sha256:916d9fd782411dd41b165881ae91513753106d6fa573cd1d8012028a46bd355f"]
  - id: linea-h-alfa
    tier: 3
    prompt: |
      ¿Qué longitud de onda (en el vacío) emite el hidrógeno en el salto $n = 3 \to 2$ (línea H$\alpha$), con $\frac1\lambda = R_H\bigl(\frac{1}{2^2} - \frac{1}{3^2}\bigr)$ y $R_H = 1{,}09678\cdot10^7$ m$^{-1}$? Respuesta: en nm, con **1 decimal**.
    answers: ["sha256:7c8b502d27db89e5b77f9e11f958fd122c7a1c53564a01841b554b35815de083"]
  - id: batido-cuantico
    tier: 3
    prompt: |
      Un electrón en un pozo infinito de $1$ nm está en una superposición de los niveles $1$ y $2$. ¿Con qué periodo oscila su densidad de probabilidad, $T = h/(E_2 - E_1)$? Constantes: $h = 6{,}62607015\cdot10^{-34}$ J·s, $\hbar = h/2\pi$, $m_e = 9{,}1093837\cdot10^{-31}$ kg, $1$ eV $= 1{,}602176634\cdot10^{-19}$ J. Respuesta: en femtosegundos, con **3 decimales**.
    answers: ["sha256:4285818b84ddc4dcb515fdb8bb9024358a59a6ef322252ffbc2b2b50f9eb440f"]
  - id: desigualdad-chsh
    tier: 3
    prompt: |
      En el singlete $\frac{1}{\sqrt2}(\lvert01\rangle - \lvert10\rangle)$, la correlación de medidas de espín en direcciones del plano $xz$ con ángulos $\theta_a$ y $\theta_b$ es $E(a, b) = -\cos(\theta_a - \theta_b)$. Con $a = 0°$, $a' = 90°$, $b = 45°$ y $b' = 135°$, ¿cuánto vale $\lvert E(a,b) - E(a,b') + E(a',b) + E(a',b')\rvert$? (Toda teoría local da como mucho $2$.) Respuesta: con **4 decimales**.
    answers: ["sha256:fe7a4e79ee5c5db0ac347057efd375af8f17ee8f3f415e383ea9038d18556940"]
  - id: energia-de-un-estado-no-estacionario
    tier: 3
    prompt: |
      Una partícula en un pozo infinito $[0, L]$ está en el estado $\psi(x) \propto x(L - x)$. ¿Cuánto vale $\langle E\rangle/E_1$, con $E_1 = \frac{\pi^2\hbar^2}{2mL^2}$? Respuesta: con **4 decimales**.
    answers: ["sha256:998f2adf21b4e24456b27c5cab61f6982ed2541541d016b25e7084bd697b55b5"]
---

# Mecánica cuántica: postulados, pozos y túnel, oscilador, hidrógeno, espín y entrelazamiento

A escala atómica, la mecánica de [[fis-mecanica-clasica]] falla: los átomos serían inestables, la luz llegaría en cantidades continuas y los
electrones no formarían figuras de interferencia. La mecánica cuántica lo arregla con una estructura sorprendentemente pequeña: **álgebra
lineal en un espacio de Hilbert más una regla probabilística**. Este nodo presenta esa estructura entera y la aplica a los sistemas que
reaparecen en toda la física y la tecnología: partículas confinadas y el efecto túnel, el oscilador armónico, el átomo de hidrógeno, el espín y
los pares entrelazados. Es la base de los semiconductores, los láseres, la química y [[cua-computacion-cuantica]].

## Objetivos

Al terminar sabrás:

1. Enunciar los postulados (estados, observables, regla de Born, evolución, sistemas compuestos) y aplicarlos a vectores de $\mathbb C^n$.
2. Demostrar la relación de incertidumbre de Robertson y usarla para estimar escalas.
3. Resolver la ecuación de Schrödinger en pozos infinito y finito, y calcular probabilidades de túnel.
4. Usar el oscilador armónico cuántico y los niveles del hidrógeno.
5. Manejar el espín $\frac12$ con matrices de Pauli, medidas en ejes arbitrarios y oscilaciones de Rabi.
6. Reconocer el entrelazamiento, calcular la descomposición de Schmidt y la entropía de entrelazamiento, y evaluar la desigualdad CHSH.
7. Comprobar todo lo anterior con diagonalización numérica y simulación de la evolución.

## Qué debes dominar antes

[[mat-algebra-lineal-avanzada]] (teorema espectral, matrices hermíticas y unitarias, valores singulares, exponencial de matrices),
[[fis-mecanica-clasica]] (hamiltoniano, corchete de Poisson) y [[fis-ondas-optica]] (ondas, interferencia). Números complejos con soltura.

> [!question] Test de entrada
> 1. ¿Cuáles son los autovalores de $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ y sus autovectores normalizados?
> 2. ¿Cuánto vale $\lvert(1 + i)/\sqrt2\rvert^2$?
> 3. ¿Qué es una matriz unitaria?
>
> Respuestas: $\pm1$, con $(1, \pm1)/\sqrt2$; $1$; una que cumple $U^\dagger U = I$ (conserva el producto escalar).

## 1. Para qué sirve

- **Electrónica y materiales**: bandas de energía, semiconductores, transistores, diodos túnel, LED y láseres.
- **Química**: el enlace químico y la tabla periódica son consecuencia de los niveles atómicos y del principio de exclusión.
- **Tecnologías cuánticas**: qubits superconductores, iones atrapados, criptografía cuántica ([[cua-computacion-cuantica]]).
- **Instrumentación**: resonancia magnética (espín en un campo), relojes atómicos, microscopio de efecto túnel.
- **Física estadística**: los niveles de energía que se ocupan con Boltzmann, Fermi-Dirac o Bose-Einstein ([[fis-termo-estadistica]]).

## 2. Los postulados

1. **Estados.** El estado de un sistema aislado es un vector unitario $\lvert\psi\rangle$ de un espacio de Hilbert complejo $\mathcal H$, definido salvo una
   fase global.
2. **Observables.** A cada magnitud medible le corresponde un operador autoadjunto $A$. Por el teorema espectral, $A = \sum_a a\,P_a$, con
   autovalores reales $a$ y proyectores ortogonales $P_a$.
3. **Medida (regla de Born).** Al medir $A$ se obtiene $a$ con probabilidad $p(a) = \langle\psi\rvert P_a\lvert\psi\rangle$, y el estado pasa a ser
   $P_a\lvert\psi\rangle/\sqrt{p(a)}$.
4. **Evolución.** Entre medidas, $i\hbar\,\partial_t\lvert\psi\rangle = H\lvert\psi\rangle$ (ecuación de Schrödinger), con $H$ el hamiltoniano. Si $H$ no depende del
   tiempo, $\lvert\psi(t)\rangle = e^{-iHt/\hbar}\lvert\psi(0)\rangle$.
5. **Sistemas compuestos.** El espacio de dos sistemas es el producto tensorial $\mathcal H_A \otimes \mathcal H_B$.

**Valor esperado.** $\langle A\rangle = \sum_a a\,p(a) = \langle\psi\rvert A\lvert\psi\rangle$.

> [!example] Ejemplo resuelto 1: medir un qubit
> $\lvert\psi\rangle = \frac{1}{\sqrt5}(\lvert0\rangle + 2\lvert1\rangle)$. Medido en la base $\{\lvert0\rangle, \lvert1\rangle\}$ (el observable $\sigma_z$), da $0$ con probabilidad
> $\lvert1/\sqrt5\rvert^2 = 0{,}2$ y $1$ con $0{,}8$; tras la medida el estado es el vector obtenido. Las fases cuentan solo en medidas en otras bases:
> $\frac{1}{\sqrt2}(\lvert0\rangle + \lvert1\rangle)$ y $\frac{1}{\sqrt2}(\lvert0\rangle - \lvert1\rangle)$ dan las mismas probabilidades en $\sigma_z$ pero $\langle\sigma_x\rangle = +1$ y $-1$.

**Teorema.** La evolución $U(t) = e^{-iHt/\hbar}$ es unitaria y conserva la norma.

*Demostración.* Como $H = H^\dagger$, $U^\dagger = e^{iHt/\hbar}$ y $U^\dagger U = I$; por tanto $\langle\psi(t)\vert\psi(t)\rangle = \langle\psi(0)\rvert U^\dagger U\lvert\psi(0)\rangle = 1$. $\blacksquare$

**Teorema (Robertson).** Para observables $A$ y $B$, $\sigma_A\sigma_B \ge \frac12\lvert\langle[A, B]\rangle\rvert$.

*Demostración.* Con $\tilde A = A - \langle A\rangle$ y $\tilde B$ análogo, la desigualdad de Cauchy-Schwarz da
$\sigma_A^2\sigma_B^2 = \lVert\tilde A\psi\rVert^2\lVert\tilde B\psi\rVert^2 \ge \lvert\langle\tilde A\psi, \tilde B\psi\rangle\rvert^2 \ge (\operatorname{Im}\langle\tilde A\tilde B\rangle)^2$, y
$2i\operatorname{Im}\langle\tilde A\tilde B\rangle = \langle[A, B]\rangle$. $\blacksquare$

Con $[x, p] = i\hbar$ resulta $\sigma_x\sigma_p \ge \hbar/2$: el principio de incertidumbre no es un postulado, sino un teorema sobre operadores que no
conmutan. El conmutador ocupa el lugar del corchete de Poisson de [[fis-mecanica-clasica]]. Un electrón confinado en un átomo
($\sigma_x \sim 0{,}1$ nm) no puede estar quieto: su velocidad fluctúa en cientos de km/s, y esa energía cinética mínima es la que impide que
el átomo colapse.

## 3. Una partícula en una dimensión

En la representación de posición, $\psi(x) = \langle x\vert\psi\rangle$, $\lvert\psi(x)\rvert^2$ es una densidad de probabilidad, $p = -i\hbar\,\partial_x$ y

$$
H = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V(x) .
$$

Una onda plana $e^{ikx}$ tiene momento $\hbar k$: la **longitud de onda de de Broglie** es $\lambda = h/p$, unas décimas de nanómetro para un electrón de
unas decenas de eV, el tamaño de las distancias entre átomos de un cristal (por eso los electrones se difractan en ellos). Los **estados
estacionarios** $H\psi = E\psi$ evolucionan solo con una fase, $e^{-iEt/\hbar}$, y el estado general es una superposición de ellos.

**Teorema (paridad).** Si $V(-x) = V(x)$, los estados ligados no degenerados son pares o impares.

*Demostración.* Si $\psi(x)$ es solución, también lo es $\psi(-x)$ con la misma energía. Como el nivel no es degenerado, $\psi(-x) = c\,\psi(x)$; aplicándolo dos
veces, $c^2 = 1$. $\blacksquare$

**Pozo infinito** de anchura $L$ ($V = 0$ en $[0, L]$, infinito fuera): $\psi_n = \sqrt{2/L}\sin(n\pi x/L)$ y

$$
E_n = \frac{n^2\pi^2\hbar^2}{2mL^2}, \qquad n = 1, 2, \dots
$$

La energía crece como $n^2$ y como $1/L^2$: confinar más cuesta más energía.

> [!example] Ejemplo resuelto 2: un punto cuántico
> Un electrón en un pozo de $0{,}5$ nm: $E_1 = \frac{\pi^2\hbar^2}{2m_e(0{,}5\text{ nm})^2} \approx 1{,}504$ eV, $E_2 = 4E_1 \approx 6{,}016$ eV. El salto $2 \to 1$ emite
> un fotón de $4{,}51$ eV, es decir, $\lambda = hc/E \approx 1239{,}84/4{,}51 \approx 275$ nm. En los puntos cuánticos reales, el color de la luz emitida se
> ajusta así con el tamaño del cristal.
>
> Una superposición $\frac{1}{\sqrt2}(\psi_1 + \psi_2)$ no es estacionaria: su densidad oscila con la frecuencia de la diferencia de energías, con periodo
> $h/(E_2 - E_1)$ (un «batido cuántico»).

## 4. El pozo finito y el efecto túnel

$V(x) = -V_0$ para $\lvert x\rvert < a$ y $V = 0$ fuera, con $V_0 > 0$. Para un estado ligado, $-V_0 < E < 0$. Se definen

$$
k = \frac{\sqrt{2m(E + V_0)}}{\hbar}, \qquad \kappa = \frac{\sqrt{-2mE}}{\hbar}, \qquad z = ka, \qquad z_0 = \frac a\hbar\sqrt{2mV_0},
$$

de modo que $z^2 + (\kappa a)^2 = z_0^2$. Dentro, $\psi = \cos(kx)$ para los estados pares; fuera, $\psi = Ae^{-\kappa\lvert x\rvert}$, la única solución normalizable. La
continuidad de $\psi$ y de $\psi'$ en $x = a$ equivale a la de la derivada logarítmica, $\psi'/\psi$:

$$
k\tan(ka) = \kappa \quad\Longleftrightarrow\quad z\tan z = \sqrt{z_0^2 - z^2} .
$$

Los estados impares dan $-z\cot z = \sqrt{z_0^2 - z^2}$. Las soluciones se ven como cortes entre las ramas de $\tan$ y una circunferencia de radio $z_0$:

- siempre existe al menos un estado ligado, por poco profundo que sea el pozo (en una dimensión);
- hay $\lceil 2z_0/\pi\rceil$ estados ligados;
- el fundamental cumple $0 < z_1 < \pi/2$ y $\frac{E_1 + V_0}{V_0} = \frac{z_1^2}{z_0^2}$.

Elevando al cuadrado la condición par y usando $1 + \tan^2z = 1/\cos^2z$, queda la forma equivalente $\cos z = z/z_0$ en las ramas con $\tan z > 0$, sin
polos y más cómoda para bisección. Valor de control: con $z_0 = 1$, $z_1 = 0{,}739085133\ldots$, el punto fijo del coseno.

**Efecto túnel.** La cola $e^{-\kappa\lvert x\rvert}$ en la zona clásicamente prohibida significa que una partícula puede atravesar una barrera más alta
que su energía. Para una barrera rectangular de altura $V_0 > E$ y anchura $a$, empalmando ondas a ambos lados,

$$
T = \left[1 + \frac{V_0^2\sinh^2(\kappa a)}{4E(V_0 - E)}\right]^{-1}, \qquad \kappa = \frac{\sqrt{2m(V_0 - E)}}{\hbar},
$$

que para barreras gruesas ($\kappa a \gg 1$) decae como $e^{-2\kappa a}$: cada décima de nanómetro más de barrera divide la corriente por un factor
grande. Es el principio del microscopio de efecto túnel, de la memoria flash (los electrones atraviesan el óxido) y de la desintegración alfa.

## 5. El oscilador armónico

Con $V = \frac12m\omega^2x^2$, los **operadores escalera** $a = \sqrt{\frac{m\omega}{2\hbar}}\bigl(x + \frac{ip}{m\omega}\bigr)$ y $a^\dagger$ cumplen $[a, a^\dagger] = 1$ y
$H = \hbar\omega\bigl(a^\dagger a + \frac12\bigr)$. De ahí, sin resolver ninguna ecuación diferencial,

$$
E_n = \hbar\omega\left(n + \tfrac12\right), \qquad n = 0, 1, 2, \dots
$$

Niveles equiespaciados: el oscilador solo absorbe o emite cuantos de $\hbar\omega$ (fotones en una cavidad, fonones en un cristal, vibraciones de
una molécula en el infrarrojo). La energía mínima $\frac12\hbar\omega$ (energía del **punto cero**) no se puede quitar. El fundamental es una gaussiana
con $\sigma_x = \sqrt{\hbar/(2m\omega)}$ y $\sigma_p = \sqrt{m\hbar\omega/2}$: satura la desigualdad, $\sigma_x\sigma_p = \hbar/2$.

## 6. El átomo de hidrógeno

En tres dimensiones con $V = -\frac{e^2}{4\pi\varepsilon_0r}$, la separación en coordenadas esféricas da estados $\psi_{n\ell m}$ con

$$
E_n = -\frac{13{,}6\ \text{eV}}{n^2}, \qquad \ell = 0, \dots, n - 1, \qquad m = -\ell, \dots, \ell ,
$$

con degeneración $n^2$ (el doble con espín). El fundamental es $\psi_{1s} = \frac{1}{\sqrt{\pi a_0^3}}e^{-r/a_0}$, con el **radio de Bohr** $a_0 \approx 0{,}0529$ nm;
la densidad radial $4\pi r^2\lvert\psi\rvert^2$ es máxima precisamente en $a_0$. Los saltos entre niveles dan las líneas espectrales:
$\frac1\lambda = R_H\bigl(\frac{1}{n_f^2} - \frac{1}{n_i^2}\bigr)$, la fórmula de Rydberg, con $R_H \approx 1{,}0968\cdot10^7$ m$^{-1}$ para el hidrógeno (la serie de
Balmer, $n_f = 2$, cae en el visible). La estructura de capas de los demás átomos, con el principio de exclusión, explica la tabla periódica.

## 7. Espín 1/2 y sistemas de dos niveles

El espacio más pequeño es $\mathbb C^2$, con base $\lvert{\uparrow}\rangle, \lvert{\downarrow}\rangle$. Todo operador autoadjunto se escribe con las **matrices de Pauli**,

$$
\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix},
$$

que cumplen $\sigma_j\sigma_k = \delta_{jk}I + i\varepsilon_{jkl}\sigma_l$. El espín es $\mathbf S = \frac\hbar2\boldsymbol\sigma$. Medir el espín a lo largo de un eje
$\hat{\mathbf n}$ es medir $\hat{\mathbf n}\cdot\boldsymbol\sigma$, de autovalores $\pm1$; si el eje forma un ángulo $\theta$ con $z$, el estado $\lvert{\uparrow_z}\rangle$ da $+1$ con
probabilidad $\cos^2(\theta/2)$.

**Lema.** Para un vector unitario $\hat{\mathbf n}$, $e^{-i\theta\,\hat{\mathbf n}\cdot\boldsymbol\sigma/2} = \cos\frac\theta2\, I - i\sin\frac\theta2\;\hat{\mathbf n}\cdot\boldsymbol\sigma$.

*Demostración.* $(\hat{\mathbf n}\cdot\boldsymbol\sigma)^2 = I$ por la relación anterior; se separan los términos pares e impares de la serie de la exponencial. $\blacksquare$

**Oscilaciones de Rabi.** Con $\hbar = 1$, sea $H = \frac12(\Delta\,\sigma_z + \Omega\,\sigma_x) = \frac W2\,\hat{\mathbf n}\cdot\boldsymbol\sigma$, con $W = \sqrt{\Delta^2 + \Omega^2}$ y
$\hat{\mathbf n} = (\Omega, 0, \Delta)/W$. Por el lema, partiendo de $\lvert{\uparrow}\rangle$,

$$
P_\downarrow(t) = \lvert\langle{\downarrow}\rvert e^{-iHt}\lvert{\uparrow}\rangle\rvert^2 = \frac{\Omega^2}{\Delta^2 + \Omega^2}\,\sin^2\frac{Wt}{2} .
$$

Es la **fórmula de Rabi**. En resonancia ($\Delta = 0$) la población se transfiere por completo, y un pulso con $\Omega t = \pi$ invierte el estado: es la
puerta NOT de un qubit físico. Fuera de resonancia, la transferencia máxima cae como una lorentziana en $\Delta$. Es el principio de la resonancia
magnética: los protones del agua, en un campo de $1{,}5$ T, se excitan con radio de unos $64$ MHz.

## 8. Sistemas compuestos y entrelazamiento

Un estado de $\mathcal H_A \otimes \mathcal H_B$ es **producto** si se escribe $\lvert\alpha\rangle\otimes\lvert\beta\rangle$, y **entrelazado** si no. Ejemplo:
$\lvert\Phi^+\rangle = \frac{1}{\sqrt2}(\lvert00\rangle + \lvert11\rangle)$.

**Teorema (descomposición de Schmidt).** Todo $\lvert\psi\rangle \in \mathcal H_A \otimes \mathcal H_B$ admite bases ortonormales $\{\lvert a_i\rangle\}$, $\{\lvert b_i\rangle\}$ y coeficientes
$\lambda_i \ge 0$ con $\sum\lambda_i^2 = 1$ tales que $\lvert\psi\rangle = \sum_i\lambda_i\,\lvert a_i\rangle\lvert b_i\rangle$.

*Demostración.* Si $\lvert\psi\rangle = \sum_{jk}c_{jk}\lvert j\rangle\lvert k\rangle$, la matriz $C = (c_{jk})$ tiene una descomposición en valores singulares $C = U\Sigma V^\dagger$. Basta
tomar $\lvert a_i\rangle = \sum_jU_{ji}\lvert j\rangle$, $\lvert b_i\rangle = \sum_k\overline{V_{ki}}\lvert k\rangle$ y $\lambda_i = \Sigma_{ii}$. $\blacksquare$

**Operador densidad reducido.** Lo que se puede predecir de las medidas solo sobre $A$ lo contiene
$\rho_A = \operatorname{Tr}_B\lvert\psi\rangle\langle\psi\rvert = \sum_i\lambda_i^2\,\lvert a_i\rangle\langle a_i\rvert = CC^\dagger$. Un estado es producto si y solo si tiene un único coeficiente de
Schmidt no nulo.

**Entropía de entrelazamiento.** $S = -\operatorname{Tr}(\rho_A\log_2\rho_A) = -\sum_i\lambda_i^2\log_2\lambda_i^2$, en bits. Vale $0$ en los estados producto y alcanza su
máximo, $1$ en dos qubits, en los estados de Bell. Para dos qubits, los autovalores de $\rho_A = CC^\dagger$ son las raíces de
$\lambda^2 - \lambda + \lvert\det C\rvert^2 = 0$, porque $\operatorname{Tr}\rho_A = 1$ y $\det\rho_A = \lvert\det C\rvert^2$. Valor de control: para $\lvert\Phi^+\rangle$, $C = I/\sqrt2$ y $S = 1$.

> [!example] Ejemplo resuelto 3: ¿entrelazado o no? (con menos ayuda)
> $\frac{1}{\sqrt2}(\lvert00\rangle + \lvert01\rangle)$ tiene $C = \frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, con $\det C = 0$: los autovalores de $\rho_A$ son $1$ y $0$, $S = 0$, y en
> efecto el estado es $\lvert0\rangle\otimes\frac{1}{\sqrt2}(\lvert0\rangle + \lvert1\rangle)$. Haz tú $\frac12(\lvert00\rangle + \lvert01\rangle + \lvert10\rangle - \lvert11\rangle)$: comprueba que
> $\lvert\det C\rvert^2 = \frac14$ y que, por tanto, $S = 1$ aunque no se parezca a $\lvert\Phi^+\rangle$.

**Desigualdad CHSH.** Cada observador elige entre dos medidas de resultado $\pm1$ ($a$ o $a'$, $b$ o $b'$). Toda teoría en la que los resultados estén
fijados de antemano localmente cumple $\lvert E(a,b) - E(a,b') + E(a',b) + E(a',b')\rvert \le 2$ (Clauser, Horne, Shimony y Holt, 1969). En el singlete,
$E(a, b) = -\cos(\theta_a - \theta_b)$, y con ángulos bien elegidos la mecánica cuántica alcanza $2\sqrt2$. Los experimentos confirman la violación:
la naturaleza no admite una descripción local con valores predeterminados.

## 9. Comprobar con un programa

Los niveles del pozo infinito y del oscilador salen también diagonalizando el hamiltoniano discretizado (diferencias finitas, con bisección y el
conteo de Sturm); la fórmula de Rabi, de exponenciar la matriz con su serie de Taylor; la entropía de entrelazamiento, de los autovalores de
$CC^\dagger$; y la violación de CHSH, de productos tensoriales explícitos.

```python
import cmath
import math

def autovalor(d, e, k, lo, hi):
    """k-ésimo autovalor (desde 0) de la tridiagonal simétrica (d, e) por bisección y conteo de Sturm."""
    def bajo(x):
        c, q = 0, d[0] - x
        c += q < 0
        for i in range(1, len(d)):
            q = d[i] - x - e[i - 1] ** 2 / (q if q != 0 else 1e-300)
            c += q < 0
        return c
    for _ in range(100):
        m = (lo + hi) / 2
        lo, hi = (lo, m) if bajo(m) > k else (m, hi)
    return (lo + hi) / 2

def hamiltoniano(V, x0, dx, N):  # −ψ'' + Vψ
    return [2 / dx ** 2 + V(x0 + (i + 1) * dx) for i in range(N)], [-1 / dx ** 2] * (N - 1)

# 1. Pozo infinito de anchura 1: −ψ'' = εψ da ε_n = (nπ)², es decir, E_n ∝ n².
d, e = hamiltoniano(lambda x: 0.0, 0.0, 1 / 2001, 2000)
for n in (1, 2, 3):
    assert abs(autovalor(d, e, n - 1, 0, 200) / (n * math.pi) ** 2 - 1) < 1e-5

# 2. Oscilador: −ψ'' + x²ψ = 2Eψ (unidades ħ = m = ω = 1) da E = 0,5; 1,5; 2,5.
d, e = hamiltoniano(lambda x: x * x, -8.0, 16 / 2001, 2000)
for n in range(3):
    assert abs(autovalor(d, e, n, 0, 20) / 2 - (n + 0.5)) < 1e-4

# 3. Rabi: exp(−iHt) por la serie de Taylor frente a la fórmula cerrada.
def mat_mul(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(2)) for j in range(2)] for i in range(2)]

def expm(M, terminos=60):
    R, T = [[1, 0], [0, 1]], [[1, 0], [0, 1]]
    for n in range(1, terminos):
        T = [[x / n for x in fila] for fila in mat_mul(T, M)]
        R = [[R[i][j] + T[i][j] for j in range(2)] for i in range(2)]
    return R

D, O, t = 0.7, 1.3, 2.0
H = [[D / 2, O / 2], [O / 2, -D / 2]]
U = expm([[-1j * t * x for x in fila] for fila in H])
W = math.hypot(D, O)
assert abs(abs(U[1][0]) ** 2 - O ** 2 / W ** 2 * math.sin(W * t / 2) ** 2) < 1e-12
assert abs(sum(abs(U[i][0]) ** 2 for i in range(2)) - 1) < 1e-12  # unitaria: conserva la norma

# 4. Entropía de entrelazamiento: autovalores de ρ_A = C C† frente a λ² − λ + |det C|² = 0.
C = [[1 / 2, 1 / 2], [1 / 2, -1 / 2]]  # (|00⟩ + |01⟩ + |10⟩ − |11⟩)/2
rho = [[sum(C[i][k] * C[j][k] for k in range(2)) for j in range(2)] for i in range(2)]
tr, det = rho[0][0] + rho[1][1], rho[0][0] * rho[1][1] - rho[0][1] * rho[1][0]
lam = [(tr + s * math.sqrt(max(0.0, tr * tr - 4 * det))) / 2 for s in (1, -1)]
dC = C[0][0] * C[1][1] - C[0][1] * C[1][0]
assert abs(det - dC ** 2) < 1e-15
S = -sum(l * math.log2(l) for l in lam if l > 1e-15)
assert abs(S - 1) < 1e-12

# 5. CHSH en el singlete con medidas cos θ σz + sen θ σx: 2√2.
def medida(t):
    return [[math.cos(t), math.sin(t)], [math.sin(t), -math.cos(t)]]

singlete = [0, 1 / math.sqrt(2), -1 / math.sqrt(2), 0]
def correlacion(ta, tb):
    A, B = medida(ta), medida(tb)
    return sum(singlete[2 * i + k] * A[i][j] * B[k][l] * singlete[2 * j + l]
               for i in range(2) for j in range(2) for k in range(2) for l in range(2))

g = math.radians
chsh = correlacion(0, g(45)) - correlacion(0, g(135)) + correlacion(g(90), g(45)) + correlacion(g(90), g(135))
assert abs(abs(chsh) - 2 * math.sqrt(2)) < 1e-12
print(f"CHSH = {abs(chsh):.6f} > 2")
```

## 10. Errores típicos

- Sumar probabilidades donde hay que sumar amplitudes (y al revés): las amplitudes interfieren, las probabilidades de resultados excluyentes se suman.
- Olvidar normalizar el estado antes de aplicar la regla de Born.
- Creer que la fase global importa (no) o que la relativa no importa (sí, en medidas en otras bases).
- Confundir $h$ con $\hbar$, o eV con J, en las cuentas numéricas.
- Tomar el colapso como evolución unitaria, o la evolución como medida.
- Aplicar $\cos z = z/z_0$ fuera de las ramas con $\tan z > 0$, o contar mal los estados ligados.
- Usar $T \approx e^{-2\kappa a}$ en barreras finas, donde no vale.
- Decidir si un estado está entrelazado mirando si «parece» un estado de Bell en vez de calcular $\det C$ o los coeficientes de Schmidt.

## 11. Resumen

- Estados = vectores unitarios; observables = operadores autoadjuntos; Born $p(a) = \langle\psi\rvert P_a\lvert\psi\rangle$; evolución unitaria $e^{-iHt/\hbar}$.
- Robertson: $\sigma_A\sigma_B \ge \frac12\lvert\langle[A,B]\rangle\rvert$; $\sigma_x\sigma_p \ge \hbar/2$.
- Pozo infinito $E_n = n^2\pi^2\hbar^2/(2mL^2)$; pozo finito $z\tan z = \sqrt{z_0^2 - z^2}$, $\lceil 2z_0/\pi\rceil$ ligados; túnel con $\sinh^2(\kappa a)$.
- Oscilador $E_n = \hbar\omega(n + \frac12)$; hidrógeno $E_n = -13{,}6\text{ eV}/n^2$, Rydberg.
- Espín: Pauli, $P(+) = \cos^2(\theta/2)$, Rabi $\frac{\Omega^2}{W^2}\sin^2\frac{Wt}{2}$.
- Entrelazamiento: Schmidt, $\rho_A = CC^\dagger$, $S = -\sum\lambda\log_2\lambda$; CHSH $\le 2$ local, $2\sqrt2$ cuántico.

## Reto

Tres números adimensionales. En cada caso, multiplica el valor por $10^9$ y toma la parte entera.

- **a.** Un pozo finito con $z_0 = 8$. Halla $(E_1 + V_0)/V_0$ para el estado fundamental. ¿Cuántos estados ligados tiene? No forma parte de la flag,
  pero debería salirte $6$.
- **b.** Con $\hbar = 1$, $H = \frac12(\Delta\,\sigma_z + \Omega\,\sigma_x)$, $\Delta = 1$ y $\Omega = 2$, el sistema parte de $\lvert{\uparrow}\rangle$ en $t = 0$. Halla la probabilidad de
  encontrarlo en $\lvert{\downarrow}\rangle$ en $t = 3$.
- **c.** La entropía de entrelazamiento, en bits, del estado de dos qubits $\frac{1}{\sqrt{14}}\bigl(\lvert00\rangle + 2\,\lvert01\rangle + 3\,\lvert11\rangle\bigr)$.

Formato de la flag: `EXODUS{a-b-c}`, con $a = \lfloor 10^9 \cdot (E_1 + V_0)/V_0\rfloor$, y análogamente $b$ y $c$.

## Repaso: lo que debe quedarte dentro de un mes

1. Los cinco postulados, y que la medida no es unitaria.
2. La incertidumbre es un teorema sobre conmutadores.
3. Confinar cuesta energía ($\propto 1/L^2$) y las barreras finas se atraviesan ($\propto e^{-2\kappa a}$).
4. Oscilador: escalones de $\hbar\omega$ desde $\frac12\hbar\omega$; hidrógeno: $-13{,}6/n^2$ eV.
5. Un estado de dos sistemas está entrelazado si su matriz de coeficientes tiene rango mayor que uno.

## Siguiente

[[cua-computacion-cuantica]] convierte el espín y el entrelazamiento en un modelo de cálculo; en las ramas, mecánica cuántica avanzada
(momento angular, perturbaciones, partículas idénticas, dispersión), materia condensada, física atómica y teoría cuántica de campos.
