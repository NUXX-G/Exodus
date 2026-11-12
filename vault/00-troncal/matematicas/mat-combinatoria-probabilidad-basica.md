---
id: mat-combinatoria-probabilidad-basica
title: "Combinatoria y probabilidad básica: contar, azar y Bayes"
area: matematicas
trunk_level: 6
prerequisites: [mat-algebra-secundaria, mat-enteros-fracciones]
academic_sources:
  - "Grinstead, C. M.; Snell, J. L. Introduction to Probability, 2ª ed. American Mathematical Society, 1997 (disponible gratis en línea)."
  - "Freedman, D.; Pisani, R.; Purves, R. Statistics, 4ª ed. W. W. Norton, 2007."
  - "Charig, C. R. et al. British Medical Journal, 292, 1986 (datos de la paradoja de Simpson; ver nodo de funciones y estadística)."
hints:
  - "Concepto: contar bien es decidir si el orden importa y si se pueden repetir elementos. En probabilidad, casi todo problema se resuelve como casos favorables entre casos posibles (si son equiprobables), o con el complementario («al menos uno» = 1 menos «ninguno»), o descomponiendo en una población imaginaria de 10 000 personas (Bayes)."
  - "Herramienta: verifica cada recuento de dos formas: la fórmula y una enumeración con un bucle de Python (itertools.product, permutations, combinations) o una simulación Monte Carlo con random; math.comb(n, k) y math.factorial calculan combinaciones y factoriales exactos; fractions.Fraction da probabilidades exactas."
  - "Documentación oficial: docs.python.org/3/library/itertools.html, docs.python.org/3/library/math.html (comb, perm, factorial) y docs.python.org/3/library/fractions.html; Grinstead y Snell, capítulos sobre probabilidad discreta, combinatoria y probabilidad condicional."
exercises:
  - id: orden-en-fila
    tier: 1
    prompt: |
      ¿De cuántas maneras distintas pueden colocarse $6$ personas en una fila? Respuesta: un entero.
    answers: ["sha256:d829857eb1366e70be857a69886d1555af0d32681beab068afb93492c2e2b843"]
  - id: combinaciones
    tier: 1
    prompt: |
      ¿De cuántas formas se pueden elegir $3$ personas de un grupo de $8$, sin importar el orden? Respuesta: un entero.
    answers: ["sha256:7688b6ef52555962d008fff894223582c484517cea7da49ee67800adc7fc8866"]
  - id: dos-dados
    tier: 1
    prompt: |
      Se lanzan dos dados equilibrados. ¿Cuál es la probabilidad de que sumen $7$? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
  - id: contrasenas
    tier: 2
    prompt: |
      ¿Cuántas contraseñas de exactamente $8$ caracteres se pueden formar con las $26$ letras minúsculas, las $26$ mayúsculas y las $10$ cifras ($62$ símbolos), pudiendo repetirlos?
      Respuesta: un entero.
    answers: ["sha256:588722a648f91b2eda32506d3f78eda6527697a50db9035f1a0e7ad7a33cdeb5"]
  - id: pin-sin-repetir
    tier: 2
    prompt: |
      ¿Cuántos PIN de $4$ cifras (de $0$ a $9$) tienen **todas las cifras distintas**? Respuesta: un entero.
    answers: ["sha256:68bc5ec90a2d9464eba42cbe67ccf5a442629e039a2e7d21942c0ea7420b4576"]
  - id: anagramas
    tier: 2
    prompt: |
      ¿Cuántas ordenaciones distintas (anagramas, tengan sentido o no) se pueden formar con todas las letras de «MISSISSIPPI»? Respuesta: un entero.
    answers: ["sha256:19f27f9a065c016b1bc3238d240f1b24c68ff3d8e646e298d3e6f3f0047033b1"]
  - id: cuatro-ases
    tier: 2
    prompt: |
      Se reparten $5$ cartas de una baraja francesa de $52$. ¿Cuál es la probabilidad de recibir los **cuatro ases**? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:7d9afa61f0902caf2dabda6e939662dd1c1cd15d0f7fcdf25a3f824cd153bbb8"]
  - id: al-menos-un-seis
    tier: 2
    prompt: |
      Se lanza un dado $4$ veces. ¿Cuál es la probabilidad de obtener **al menos un seis**? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:c46ad4a38aaf421e3fed6c11237cb2543e73df9b45d63eaff27c2b21c961d992"]
  - id: bayes-test-medico
    tier: 2
    prompt: |
      Una enfermedad afecta al $1\,\%$ de la población. Un test da positivo en el $99\,\%$ de los enfermos (sensibilidad) y negativo en el $95\,\%$ de los sanos (especificidad).
      Si una persona elegida al azar da **positivo**, ¿cuál es la probabilidad de que esté realmente enferma? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:8f854692d8bc8def84a88d511dd150de9dd8b6bfe000d5a417dde49e4a3d12c2"]
  - id: cumpleanos
    tier: 2
    prompt: |
      Suponiendo $365$ días equiprobables, ¿cuál es el menor número de personas para que sea **más probable que no** que al menos dos cumplan años el mismo día? Respuesta: un entero.
    answers: ["sha256:535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790"]
  - id: monty-hall-100
    tier: 3
    prompt: |
      Hay $100$ puertas y un premio tras una de ellas. Eliges una; el presentador, que sabe dónde está el premio, abre otras $98$ **sin premio** y te ofrece cambiar a la única puerta que queda cerrada.
      ¿Cuál es la probabilidad de ganar **si cambias**? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:adda290c53eda62a0d8f44a131302a84651364227fcc02f7ed70159e8fc5f6ba"]
  - id: ruleta
    tier: 3
    prompt: |
      En la ruleta europea hay $37$ casillas (del $0$ al $36$). Una apuesta «a pleno» a un número paga $35$ euros por cada euro apostado (y se pierde la apuesta si no sale).
      ¿Cuántos euros se pierden **de media** por cada $1000$ euros apostados? Respuesta: dos decimales.
    answers: ["sha256:0c6af0cf1560242e9d44d21e34b8147916ca9fcde5404e43dc943f10c1fb0d5b"]
  - id: diez-monedas
    tier: 3
    prompt: |
      Se lanzan $10$ monedas equilibradas. ¿Cuál es la probabilidad de obtener **exactamente $5$ caras**? Respuesta: fracción irreducible «a/b».
    answers: ["sha256:23ba51225d75fc7b486cb8c5fe150be7996c5e54a49ad75d8026912b5dc10e06"]
  - id: inclusion-exclusion
    tier: 3
    prompt: |
      ¿Cuántos números enteros de $1$ a $1000$ son divisibles por $2$, por $3$ **o** por $5$? Respuesta: un entero.
    answers: ["sha256:c2a181d8178a9f753b013fc4bb892ceeb5dc5bcb763352610844b93341ea52a4"]
  - id: palomar
    tier: 3
    prompt: |
      ¿Cuántos números hay que elegir, como mínimo, del conjunto $\{1, 2, \ldots, 20\}$ para **garantizar** que entre ellos hay dos que suman $21$? Respuesta: un entero.
    answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: estrellas-y-barras
    tier: 3
    prompt: |
      ¿Cuántas soluciones en enteros **no negativos** tiene $x + y + z + w = 10$? Respuesta: un entero.
    answers: ["sha256:00328ce57bbc14b33bd6695bc8eb32cdf2fb5f3a7d89ec14a42825e15d39df60"]
---

# Combinatoria y probabilidad básica: contar, azar y Bayes

Casi todo lo que no se puede predecir con certeza se maneja con probabilidad: el tiempo, un diagnóstico médico, el riesgo de un seguro, la seguridad de una contraseña, un algoritmo
aleatorio, un modelo de inteligencia artificial. Y la probabilidad empieza **contando**: ¿cuántos casos hay? Este nodo enseña las dos cosas, y sobre todo **a no dejarse engañar** por la intuición,
que en probabilidad falla con frecuencia.

## Objetivos

Al terminar sabrás:

1. Contar con los principios de la suma y del producto, permutaciones, variaciones y combinaciones.
2. Usar el triángulo de Pascal, el binomio de Newton, el principio del palomar y la inclusión-exclusión.
3. Calcular probabilidades con la regla de Laplace, el suceso complementario y los axiomas.
4. Usar probabilidad condicionada, independencia, probabilidad total y el **teorema de Bayes**.
5. Calcular esperanzas y entender la distribución binomial y la ley de los grandes números.
6. Reconocer falacias típicas: el jugador, la tasa base, la coincidencia sorprendente.

> [!question] Test de entrada
> 1. ¿Cuántos resultados posibles hay al lanzar un dado y una moneda? 2. ¿Cuál es la probabilidad de sacar un número par en un dado? 3. Si lanzas una moneda y sale cara cinco veces seguidas, ¿es más probable cruz en el sexto?
>
> Respuestas: $12$; $\frac12$; **no**: cada lanzamiento es independiente (sigue siendo $\frac12$).

## 1. Para qué sirve

- **Seguridad**: cuántas contraseñas o claves posibles hay decide cuánto tarda en romperse una (por fuerza bruta).
- **Medicina**: interpretar un test positivo (¿cuántos «positivos» están realmente enfermos?).
- **Juegos y seguros**: calcular la esperanza de ganar o pagar.
- **Informática**: algoritmos aleatorios, colisiones de funciones hash, simulaciones.
- **Vida diaria**: no caer en la falacia del jugador ni confundir coincidencia con causa.

## 2. Contar: los principios básicos

**Principio de la suma.** Si una tarea se puede hacer de $m$ maneras **o** de $n$ maneras **y no a la vez**, hay $m + n$ posibilidades.
**Principio del producto.** Si una tarea consta de pasos **sucesivos** con $m$ y $n$ opciones (independientes), hay $m\cdot n$ en total. Un menú con $4$ entrantes, $5$ platos y $3$ postres: $4\cdot 5\cdot 3 = 60$ menús.

**Contraseñas.** Con $62$ símbolos (letras mayúsculas y minúsculas y cifras) y longitud $8$, repetición permitida: $62^8 = 218\,340\,105\,584\,896 \approx 2{,}2\cdot 10^{14}$. Cada símbolo aporta $\log_2 62 \approx 5{,}95$ bits, así que son
unos $47{,}6$ bits. A $10^{10}$ intentos por segundo (hardware dedicado contra un hash muy rápido), agotarlas llevaría unas $6$ horas; con un hash lento diseñado para ello, mucho más. **La longitud pesa más que
la variedad de símbolos:** cada carácter extra multiplica por $62$.

### Ordenaciones y selecciones

- **Permutaciones** de $n$ objetos distintos (orden importa, usar todos): $n! = n(n-1)\cdots 1$. $6$ personas en fila: $6! = 720$. *(Por el principio del producto: $6$ opciones para el primero, $5$ para el segundo...)*
- **Variaciones** de $n$ elegidos de $k$ (orden importa, sin repetir): $n(n-1)\cdots(n-k+1) = \dfrac{n!}{(n-k)!}$. PIN de $4$ cifras distintas: $10\cdot 9\cdot 8\cdot 7 = 5040$.
- **Con repetición**: $n^k$ (como las contraseñas).
- **Combinaciones** (orden **no** importa): $\dbinom{n}{k} = \dfrac{n!}{k!\,(n-k)!}$. *Justificación:* las variaciones cuentan cada grupo de $k$ elementos $k!$ veces (una por orden); dividir. $\dbinom{8}{3} = 56$.
- **Permutaciones con repetición**: ordenaciones de $n$ objetos con $n_1, n_2, \dots$ iguales: $\dfrac{n!}{n_1!\,n_2!\cdots}$. Los anagramas de «ANA» son $\frac{3!}{2!} = 3$.

**Ejemplos con números reales.** La lotería primitiva española elige $6$ números de $49$: $\binom{49}{6} = 13\,983\,816$ combinaciones, luego la probabilidad de acertar los seis es $\frac{1}{13\,983\,816}$. Una mano de póquer
de $5$ cartas de $52$: $\binom{52}{5} = 2\,598\,960$.

### El triángulo de Pascal y el binomio

$$
\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k} .
$$

*Demostración (combinatoria).* Fija un elemento concreto. Los subconjuntos de $k$ elementos que **lo contienen** son $\binom{n-1}{k-1}$ (se eligen los otros $k - 1$ de los $n - 1$ restantes) y los que **no** lo contienen, $\binom{n-1}{k}$. $\blacksquare$
Así se construye el **triángulo de Pascal** (cada número es la suma de los dos de encima) y se prueba el **binomio de Newton**:

$$
(a + b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k .
$$

*Idea:* al multiplicar $n$ factores $(a + b)$, el término $a^{n-k}b^k$ se forma eligiendo $b$ en exactamente $k$ de los $n$ paréntesis, de $\binom{n}{k}$ maneras. Por ejemplo $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$. Tomando $a = b = 1$: la suma de una fila de Pascal es $2^n$, el número de subconjuntos de un conjunto de $n$ elementos.

### Estrellas y barras

¿De cuántas maneras se reparten $n$ objetos iguales en $r$ cajas (pudiendo quedar alguna vacía)? Es el número de soluciones en enteros $\ge 0$ de $x_1 + \cdots + x_r = n$: se disponen $n$ «estrellas» y $r - 1$ «barras»
separadoras, y se elige dónde van las barras: $\dbinom{n + r - 1}{r - 1}$. Con $n = 5$ y $r = 3$: $\binom{7}{2} = 21$.

### Principio del palomar

*Si se colocan $n + 1$ objetos en $n$ cajas, alguna caja contiene al menos dos.* (Si todas tuvieran como mucho uno, habría a lo sumo $n$ objetos.) Parece trivial y es muy potente: en una ciudad con más de $10^6$ habitantes y un máximo de
$300\,000$ pelos por cabeza hay dos con el mismo número de pelos. **Ejemplo resuelto:** de $\{1, \dots, 10\}$, ¿cuántos números garantizan que dos suman $11$? Las parejas $(1, 10), (2, 9), \dots, (5, 6)$ son $5$ «cajas»; con $6$ números, dos caen en la misma pareja: **$6$**.

### Inclusión-exclusión

Para dos conjuntos, $|A \cup B| = |A| + |B| - |A \cap B|$ (los comunes se contaron dos veces); para tres, $|A \cup B \cup C| = |A| + |B| + |C| - |A\cap B| - |A\cap C| - |B\cap C| + |A\cap B\cap C|$.
**Ejemplo:** de $1$ a $100$, los divisibles por $2$ o por $3$: $50 + 33 - 16 = 67$.

## 3. Probabilidad

Un **experimento aleatorio** tiene un **espacio muestral** $\Omega$ (todos los resultados posibles); un **suceso** es un subconjunto de $\Omega$. Kolmogorov (1933) axiomatizó la probabilidad $P$ con tres reglas:

1. $0 \le P(A) \le 1$.  2. $P(\Omega) = 1$.  3. Si $A$ y $B$ son **incompatibles**, $P(A \cup B) = P(A) + P(B)$.

De ellos se deducen el **suceso contrario**, $P(\bar A) = 1 - P(A)$, y la unión general, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

**Regla de Laplace.** Si todos los resultados son **equiprobables**: $P(A) = \dfrac{\text{casos favorables}}{\text{casos posibles}}$. Dos dados: hay $36$ resultados y $6$ suman $7$, luego $P = \frac{6}{36} = \frac16$.

**«Al menos uno».** Casi siempre se calcula con el contrario. Probabilidad de **al menos un seis** en $3$ tiradas: $1 - \left(\frac56\right)^3 = \frac{91}{216} \approx 42{,}1\,\%$. (Error típico: «$3\cdot\frac16 = \frac12$»; no, porque los sucesos no son incompatibles.)

### Probabilidad condicionada e independencia

La probabilidad de $A$ **sabiendo que ha ocurrido $B$**:

$$
P(A\mid B) = \frac{P(A \cap B)}{P(B)} .
$$

Dos sucesos son **independientes** si saber uno no cambia la probabilidad del otro: $P(A \cap B) = P(A)\,P(B)$. Las tiradas sucesivas de una moneda son independientes: **la moneda no tiene memoria** (falacia del jugador:
creer que tras cinco caras «toca» cruz).

**Ley de la probabilidad total.** Si $B_1, \dots, B_n$ son sucesos incompatibles que cubren $\Omega$: $P(A) = \sum P(A\mid B_i)\,P(B_i)$.

### El teorema de Bayes

$$
P(B\mid A) = \frac{P(A\mid B)\,P(B)}{P(A)} .
$$

*Demostración.* $P(A \cap B)$ se puede escribir de dos maneras: $P(A\mid B)P(B)$ y $P(B\mid A)P(A)$; igualar y despejar. $\blacksquare$
Sirve para **invertir** una probabilidad condicionada: pasar de «la probabilidad de un positivo si estás enfermo» a «la probabilidad de estar enfermo si das positivo». Y esa inversión **no es intuitiva**.

**Ejemplo resuelto (la falacia de la tasa base).** Una enfermedad afecta al $0{,}5\,\%$; un test detecta al $98\,\%$ de los enfermos y da falsos positivos en el $4\,\%$ de los sanos. ¿Qué probabilidad hay de estar enfermo si el test da positivo?
Imagina $100\,000$ personas: $500$ enfermas ($490$ dan positivo) y $99\,500$ sanas ($3980$ dan positivo). De los $4470$ positivos, solo $490$ están enfermos: $\frac{490}{4470} \approx 11\,\%$. **Un test «de un $98\,\%$» puede dar,
con una enfermedad rara, un positivo que es falso nueve de cada diez veces.** Razonar con **frecuencias naturales** (poblaciones imaginarias) evita casi todos los errores.

## 4. Paradojas famosas (y por qué no lo son)

**El problema del cumpleaños.** En un grupo de $n$ personas con $365$ días equiprobables, la probabilidad de que **todos** cumplan en días distintos es
$\dfrac{365}{365}\cdot\dfrac{364}{365}\cdots\dfrac{365 - n + 1}{365}$. Con $n = 23$ baja a $0{,}493$: **con $23$ personas ya es más probable que no que haya una coincidencia.** Parece increíble porque hay $\binom{23}{2} = 253$ **parejas**
posibles, no $23$. Es el mismo cálculo que **colisiones de hash**: con una función de $N$ valores, tras $\approx\sqrt{N}$ elementos ya hay una colisión probable (por eso los hashes necesitan el doble de bits que la seguridad buscada).

**Monty Hall.** Hay $3$ puertas, un premio y dos cabras. Eliges una; el presentador, que **sabe** dónde está el premio, abre otra con cabra y te ofrece cambiar. **Conviene cambiar**: ganas con probabilidad $\frac23$.
*Razón:* eliges bien con probabilidad $\frac13$ y entonces cambiar pierde; con probabilidad $\frac23$ eliges una cabra, y el presentador **te deja** la puerta del premio como única alternativa. Con $100$ puertas y $98$ abiertas, cambiar gana con $\frac{99}{100}$:
se ve mejor. La clave es que el presentador **no abre al azar**.

**Coincidencias.** En un número enorme de intentos, lo improbable ocurre: con $8\cdot 10^9$ personas, un suceso de probabilidad $10^{-6}$ le sucede a miles. «Qué casualidad» es a veces solo estadística.

## 5. Esperanza, varianza y la ley de los grandes números

La **esperanza** (valor esperado) de una variable $X$ con valores $x_i$ y probabilidades $p_i$ es $E[X] = \sum x_i p_i$: lo que se obtiene **de media a largo plazo**.
**Ejemplo (ruleta europea, $37$ casillas, $0$ a $36$):** apostar $1$ € a un número paga $35$ € de ganancia si sale. $E = \frac{1}{37}\cdot 35 - \frac{36}{37}\cdot 1 = -\frac{1}{37} \approx -0{,}027$ €: la casa **gana de media un $2{,}7\,\%$**
de lo apostado, haga lo que haga el jugador. Todo juego de casino tiene esperanza negativa para el jugador; la lotería, también (se paga solo una parte de lo recaudado).

La **esperanza es lineal**: $E[X + Y] = E[X] + E[Y]$ aunque no sean independientes. La **varianza** $\sigma^2 = E[(X - \mu)^2]$ mide la dispersión.

**Distribución binomial.** Si se repite $n$ veces un experimento independiente con probabilidad de éxito $p$, la probabilidad de **exactamente $k$ éxitos** es

$$
P(X = k) = \binom{n}{k}p^k(1 - p)^{n-k} .
$$

Con $n = 10$, $p = \frac12$, $k = 5$: $\binom{10}{5}\cdot\frac{1}{1024} = \frac{252}{1024} = \frac{63}{256} \approx 24{,}6\,\%$. Tiene esperanza $np$ y varianza $np(1-p)$.

**Ley de los grandes números** (enunciado): al repetir un experimento, la **frecuencia relativa** de un suceso se acerca a su probabilidad. **No** dice que los resultados «se compensen» (sin memoria): dice que
la proporción converge. Permite estimar probabilidades **simulando** (método de Monte Carlo): para aproximar $\pi$ se lanzan puntos al azar en un cuadrado de lado $1$; la fracción dentro del cuarto de círculo de radio $1$ tiende a $\frac{\pi}{4}$.

```python
import random

def pi_montecarlo(n, semilla=1):
    random.seed(semilla)
    dentro = sum(1 for _ in range(n) if random.random() ** 2 + random.random() ** 2 <= 1)
    return 4 * dentro / n

print(pi_montecarlo(1_000_000))   # ≈ 3.14 (el error baja como 1/sqrt(n))
```

## 6. Errores típicos

- **Sumar** probabilidades de sucesos que **no** son incompatibles (usar el contrario o inclusión-exclusión).
- **Falacia del jugador**: creer que el azar tiene memoria. Y su opuesta, «la mano caliente».
- **Falacia de la tasa base**: ignorar cuán frecuente es el suceso antes del test (Bayes).
- Confundir $P(A\mid B)$ con $P(B\mid A)$ (por ejemplo, «el $90\,\%$ de los conductores accidentados llevaba móvil» no es «el $90\,\%$ de quienes llevan móvil tienen accidente»).
- Contar mal: ¿importa el orden? ¿se puede repetir?
- Suponer **equiprobabilidad** cuando no la hay: con dos dados, la suma $7$ es más probable que la $2$.
- Tomar muestras pequeñas por prueba: la ley de los grandes números actúa con muchos datos.

## Repaso: lo que debe quedarte dentro de un mes

1. Producto y suma; $n!$; $\binom{n}{k} = \frac{n!}{k!(n-k)!}$; Pascal; binomio de Newton.
2. Laplace: favorables entre posibles (equiprobables); «al menos uno» $= 1 - $ «ninguno».
3. $P(A\mid B) = \frac{P(A\cap B)}{P(B)}$; independencia $\iff P(A\cap B) = P(A)P(B)$.
4. Bayes: razona con una población imaginaria de $10\,000$ personas.
5. $E[X] = \sum x_ip_i$; binomial $\binom{n}{k}p^k(1-p)^{n-k}$; cumpleaños: $23$ personas.

## Siguiente

La probabilidad se formaliza en `mat-probabilidad` (variables aleatorias, distribuciones, teoremas límite) y alimenta la estadística inferencial y el aprendizaje automático. Antes, el troncal pasa a **razonar con rigor**: lógica y demostraciones.
