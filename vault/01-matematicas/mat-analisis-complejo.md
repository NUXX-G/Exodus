---
id: mat-analisis-complejo
title: "Análisis complejo: holomorfía, integración de contorno, Cauchy, series de Laurent, residuos y transformaciones conformes"
area: matematicas
trunk_level: 11
prerequisites: [mat-analisis-real, mat-calculo-multivariable]
academic_sources:
  - "Ahlfors, L. V. Complex Analysis, 3ª ed. McGraw-Hill, 1979."
  - "Stein, E. M.; Shakarchi, R. Complex Analysis (Princeton Lectures in Analysis II). Princeton University Press, 2003."
  - "Needham, T. Visual Complex Analysis. Oxford University Press (Clarendon Press), 1997."
exercises:
  - id: potencia-de-un-complejo
    tier: 1
    prompt: |
      Calcula $(1 + i)^8$ con la forma polar. Respuesta: un número real.
    answers: ["sha256:b17ef6d19c7a5b1ee83b907c595526dcb1eb06db8227d650d5dda0a9f4ce8cd9"]
  - id: conjugada-armonica
    tier: 1
    prompt: |
      Halla la conjugada armónica $v$ de $u(x, y) = x^3 - 3xy^2$ (con $v(0, 0) = 0$), de modo que $u + iv$ sea holomorfa, y evalúa $v(1, 2)$. Respuesta: un entero.
    answers: ["sha256:cf3bae39dd692048a8bf961182e6a34dfd323eeb0748e162eaf055107f1cb873"]
  - id: raiz-principal
    tier: 1
    prompt: |
      ¿Cuál es la raíz cúbica principal de $8i$ (la de argumento en $(-\pi/3, \pi/3]$)? Respuesta: `re;im`, la parte real con **3 decimales**.
    answers: ["sha256:cb3639d6597340441955363aedc705c43c178cc6ae6d766cfdd9ac2f359be2ff"]
  - id: logaritmo-principal
    tier: 1
    prompt: |
      Calcula el logaritmo principal $\operatorname{Log}(-1 + i)$. Respuesta: `re;im`, ambas con **4 decimales**.
    answers: ["sha256:fb0152e0653cf22cd93e0be30477784285612fc1d5cabe6c6d0f777608f9c1b7"]
  - id: formula-integral-de-cauchy
    tier: 2
    prompt: |
      Calcula $\dfrac{1}{2\pi i}\displaystyle\oint_{\lvert z\rvert = 2}\frac{e^z}{z - 1}\,dz$. Respuesta: con **4 decimales**.
    answers: ["sha256:47ae1d78f6ec2212555a67d2bf8a842f1a0e9f35b5ede1e9a814897444966aa7"]
  - id: residuo-en-un-polo-doble
    tier: 2
    prompt: |
      ¿Cuánto vale el residuo de $\dfrac{1}{z(z - 2)^2}$ en $z = 2$? Respuesta: un número.
    answers: ["sha256:c39e10a12e907115c23f0597a37ba310350471a14f107c08bc831478d0114554"]
  - id: integral-real-por-residuos
    tier: 2
    prompt: |
      Calcula $\displaystyle\int_{-\infty}^{\infty}\frac{dx}{(x^2 + 1)^2}$ cerrando por el semiplano superior. Respuesta: con **4 decimales**.
    answers: ["sha256:52f67ab92235bbb0fc4da6e2e9eacc0ada687af43a98285e0967948796bb0836"]
  - id: integral-trigonometrica
    tier: 2
    prompt: |
      Calcula $\displaystyle\int_0^{2\pi}\frac{d\theta}{2 + \cos\theta}$ con el cambio $z = e^{i\theta}$. Respuesta: con **4 decimales**.
    answers: ["sha256:3047fcdec420dd1ff17f740a624d1bc3e3cf195f2455f2e5cad5369e64176ec9"]
  - id: coeficiente-de-taylor
    tier: 2
    prompt: |
      ¿Cuál es el coeficiente de $z^5$ en la serie de Taylor de $\tan z$ en $0$? (Puedes obtenerlo como $\frac{1}{2\pi i}\oint\frac{\tan z}{z^6}\,dz$ sobre $\lvert z\rvert = 1$.) Respuesta: con **4 decimales**.
    answers: ["sha256:ff25dfa7e656562668e0b29dcf5b4110a7b42adc7bb7828330c689634c3ac083"]
  - id: principio-del-maximo
    tier: 2
    prompt: |
      ¿Cuál es el máximo de $\lvert z^2 + 3z - 2\rvert$ en el disco $\lvert z\rvert \le 1$? Por el principio del máximo, se alcanza en el borde. Respuesta: con **4 decimales**.
    answers: ["sha256:3f92c049d056f6e84cd52a5cf6ae35d0d7e0b1f6de8a0e3a37d1da627fac5d9c"]
  - id: potencia-compleja
    tier: 2
    prompt: |
      ¿Cuánto vale el valor principal de $i^i = e^{i\operatorname{Log} i}$? Respuesta: con **4 decimales**.
    answers: ["sha256:254e8d70b2b9a544aa94cb656eb53a076ad94e04163b392cfe8af9d91353dba2"]
  - id: teorema-de-rouche
    tier: 3
    prompt: |
      ¿Cuántos ceros tiene $z^5 + 3z^2 + 1$ en el disco $\lvert z\rvert < 1$? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: transformada-por-residuos
    tier: 3
    prompt: |
      Calcula $\displaystyle\int_{-\infty}^{\infty}\frac{\cos x}{x^2 + 1}\,dx$ como la parte real de $\int\frac{e^{iz}}{z^2 + 1}\,dz$. Respuesta: con **4 decimales**.
    answers: ["sha256:b0890ad01005a4def45a5aac9e25c09ff270afd6e3365571b0e9ff23e6ea0706"]
  - id: transformacion-de-mobius
    tier: 3
    prompt: |
      La transformación de Cayley $T(z) = \dfrac{z - i}{z + i}$ lleva el semiplano superior al disco unidad. ¿Cuál es la imagen de $1 + i$? Respuesta: `re;im`.
    answers: ["sha256:5a1e35767631a057968d7eefc71d66b98f06749a712d74305431f91dc745da40"]
  - id: principio-del-argumento
    tier: 3
    prompt: |
      ¿Cuántos ceros tiene $e^z - 3z$ en el disco $\lvert z\rvert < 1$? Respuesta: un entero.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: suma-de-residuos
    tier: 3
    prompt: |
      Calcula $\dfrac{1}{2\pi i}\displaystyle\oint_{\lvert z\rvert = 3}\frac{z^3}{z^4 - 1}\,dz$. Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
---

# Análisis complejo: holomorfía, integración de contorno, Cauchy, series de Laurent, residuos y transformaciones conformes

Derivar en $\mathbb C$ es mucho más exigente que en $\mathbb R^2$: una función con derivada compleja en un abierto (holomorfa) resulta tener derivadas de
todos los órdenes, desarrollarse en serie de potencias y quedar determinada en todo su dominio por sus valores en un trozo diminuto. Esa rigidez es la
fuente de herramientas sorprendentemente potentes: integrales reales imposibles se calculan con un residuo, se cuentan ceros sin hallarlos y se
transforman regiones complicadas en discos. Es la matemática detrás de la transformada de Laplace y la estabilidad de [[rob-control]], de la
respuesta en frecuencia de [[ing-senales-sistemas]], de los flujos potenciales en fluidos y de la teoría analítica de números.

## Objetivos

Al terminar sabrás:

1. Operar con complejos en forma polar, raíces, ramas del logaritmo y potencias complejas.
2. Reconocer funciones holomorfas con las ecuaciones de Cauchy-Riemann y construir conjugadas armónicas.
3. Calcular integrales de contorno y aplicar el teorema y la fórmula integral de Cauchy, Liouville y el principio del máximo.
4. Desarrollar en series de Taylor y de Laurent, clasificar singularidades y calcular residuos.
5. Evaluar integrales reales con el teorema de los residuos.
6. Contar ceros con el principio del argumento y el teorema de Rouché, y usar transformaciones de Möbius.

## Qué debes dominar antes

[[mat-analisis-real]] (límites, series, convergencia uniforme), [[mat-calculo-multivariable]] (derivadas parciales, integrales de línea, teorema de
Green) y los números complejos de [[mat-trigonometria]].

> [!question] Test de entrada
> 1. ¿Cuánto vale $\lvert 3 + 4i\rvert$?
> 2. ¿Cuánto vale $e^{i\pi}$?
> 3. ¿Qué dice el teorema de Green?
>
> Respuestas: $5$; $-1$; $\oint_{\partial D}(P\,dx + Q\,dy) = \iint_D(Q_x - P_y)\,dA$.

## 1. Para qué sirve

- **Integrales reales**: muchas integrales de la física y la estadística (transformadas de Fourier, integrales racionales) se resuelven con residuos.
- **Estabilidad y control**: el criterio de Nyquist es el principio del argumento; la transformada inversa de Laplace es una integral de contorno.
- **Física e ingeniería**: flujos potenciales bidimensionales, electrostática en el plano, perfiles alares por transformaciones conformes.
- **Matemáticas**: funciones especiales, teoría analítica de números (la función zeta), combinatoria analítica.

## 2. Números complejos, polar y ramas

$z = x + iy = re^{i\theta}$ con $r = \lvert z\rvert$ y $\theta = \arg z$. La multiplicación multiplica módulos y suma argumentos (**De Moivre**: $(re^{i\theta})^n = r^ne^{in\theta}$), y
$z^n = w$ tiene $n$ raíces $\sqrt[n]{\lvert w\rvert}\,e^{i(\arg w + 2\pi k)/n}$.

La exponencial $e^z = e^x(\cos y + i\sin y)$ es periódica de periodo $2\pi i$, así que su inversa es **multivaluada**: $\log z = \ln\lvert z\rvert + i(\arg z + 2\pi k)$. El
**logaritmo principal** $\operatorname{Log} z = \ln\lvert z\rvert + i\operatorname{Arg} z$, con $\operatorname{Arg} \in (-\pi, \pi]$, es holomorfo fuera del corte $(-\infty, 0]$. Las potencias complejas se definen
con él: $z^w = e^{w\operatorname{Log} z}$, de modo que $i^i = e^{i\cdot i\pi/2} = e^{-\pi/2}$, un número real.

## 3. Holomorfía y Cauchy-Riemann

$f$ es **holomorfa** en un abierto si tiene derivada compleja $f'(z) = \lim_{h\to0}\frac{f(z + h) - f(z)}{h}$ en cada punto, con $h$ complejo acercándose en **cualquier** dirección.

**Teorema (Cauchy-Riemann).** Si $f = u + iv$ es holomorfa, $u_x = v_y$ y $u_y = -v_x$. Recíprocamente, si $u$ y $v$ tienen derivadas parciales continuas que
cumplen esas ecuaciones, $f$ es holomorfa.

*Demostración de la necesidad.* Acercándose por $h$ real, $f' = u_x + iv_x$; por $h = ik$ imaginario, $f' = \frac{u_y + iv_y}{i} = v_y - iu_y$. Igualando partes reales e
imaginarias, $u_x = v_y$ y $v_x = -u_y$. $\blacksquare$

Consecuencia: $u$ y $v$ son **armónicas** ($\Delta u = u_{xx} + u_{yy} = v_{yx} - v_{xy} = 0$). Dada $u$ armónica en un dominio simplemente conexo, su **conjugada armónica** $v$
se obtiene integrando $dv = -u_y\,dx + u_x\,dy$. $\bar z$ no es holomorfa ($u_x = 1 \ne -1 = v_y$).

## 4. Integración de contorno y teorema de Cauchy

Para un camino $\gamma : [a, b] \to \mathbb C$, $\int_\gamma f(z)\,dz = \int_a^bf(\gamma(t))\,\gamma'(t)\,dt$. El cálculo básico: $\oint_{\lvert z\rvert = r}z^n\,dz = 2\pi i$ si $n = -1$ y $0$ para los
demás enteros.

**Teorema de Cauchy.** Si $f$ es holomorfa en un dominio simplemente conexo, $\oint_\gamma f\,dz = 0$ para todo camino cerrado $\gamma$ en él.

*Idea de la demostración* (con $f'$ continua). Por Green, $\oint(u + iv)(dx + i\,dy) = \iint(-v_x - u_y)\,dA + i\iint(u_x - v_y)\,dA$, y ambos integrandos son nulos por
Cauchy-Riemann. (Goursat lo demostró sin suponer $f'$ continua.) $\blacksquare$

**Fórmula integral de Cauchy.** Si $f$ es holomorfa en un disco cerrado y $z_0$ está dentro,

$$
f(z_0) = \frac{1}{2\pi i}\oint\frac{f(z)}{z - z_0}\,dz, \qquad f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint\frac{f(z)}{(z - z_0)^{n+1}}\,dz .
$$

Los valores en el interior quedan determinados por los del borde, y **toda función holomorfa es infinitamente derivable**. Consecuencias:

- **Liouville**: una función entera y acotada es constante. De ahí el **teorema fundamental del álgebra**: si $p$ no tuviera raíces, $1/p$ sería entera y acotada.
- **Principio del máximo**: el módulo de una función holomorfa no constante no alcanza su máximo en el interior de un dominio; en un disco cerrado,
  el máximo está en el borde.

> [!example] Ejemplo resuelto 1: Cauchy en acción
> $\oint_{\lvert z\rvert = 2}\frac{\cos z}{z}\,dz = 2\pi i\cos0 = 2\pi i$. Y $\oint_{\lvert z\rvert = 2}\frac{e^z}{z^3}\,dz = \frac{2\pi i}{2!}(e^z)''\big\rvert_0 = \pi i$. Comprobación numérica: en la
> circunferencia, la regla del trapecio con $N$ puntos converge **exponencialmente** para integrandos analíticos, así que con unos cientos de puntos se
> obtienen 15 cifras (sección 9).

## 5. Series de Taylor y de Laurent; singularidades

Una función holomorfa en un disco de centro $z_0$ es la suma de su **serie de Taylor**, $f(z) = \sum a_n(z - z_0)^n$ con $a_n = f^{(n)}(z_0)/n!$, y el radio de
convergencia llega hasta la singularidad más cercana. (Por eso $\frac{1}{1 + x^2}$, suave en todo $\mathbb R$, tiene radio $1$ en $0$: la singularidad está en $\pm i$.)

En una corona $r < \lvert z - z_0\rvert < R$ vale la **serie de Laurent** $f(z) = \sum_{n=-\infty}^{\infty}a_n(z - z_0)^n$, con $a_n = \frac{1}{2\pi i}\oint\frac{f(z)}{(z - z_0)^{n+1}}\,dz$. En una
singularidad aislada, la parte de potencias negativas la clasifica:

- **evitable** (ninguna potencia negativa): $\frac{\sin z}{z}$ en $0$;
- **polo de orden $m$** (hasta $(z - z_0)^{-m}$): $\frac{1}{z^2}$;
- **esencial** (infinitas): $e^{1/z}$ en $0$, que toma todos los valores complejos salvo uno en cualquier entorno (Picard).

## 6. Residuos

El **residuo** de $f$ en $z_0$ es el coeficiente $a_{-1}$ de su serie de Laurent. **Teorema de los residuos**: si $f$ es holomorfa salvo en singularidades aisladas
$z_k$ dentro de $\gamma$ (recorrida una vez en sentido positivo),

$$
\oint_\gamma f(z)\,dz = 2\pi i\sum_k\operatorname{Res}_{z_k}f .
$$

Cálculo práctico: en un polo simple, $\operatorname{Res}_{z_0}\frac{g}{h} = \frac{g(z_0)}{h'(z_0)}$; en un polo de orden $m$,
$\operatorname{Res} = \frac{1}{(m - 1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\bigl[(z - z_0)^mf(z)\bigr]$.

**Integrales reales.**

- $\int_{-\infty}^{\infty}R(x)\,dx$ con $R$ racional de grado del denominador al menos 2 más que el numerador: se cierra con un semicírculo grande en el semiplano
  superior (su contribución tiende a cero) y queda $2\pi i\sum$ de residuos en el semiplano superior.
- $\int_{-\infty}^{\infty}R(x)e^{ix}\,dx$: igual, porque $\lvert e^{iz}\rvert = e^{-y} \le 1$ arriba (lema de Jordan); la parte real da integrales con $\cos x$.
- $\int_0^{2\pi}R(\cos\theta, \sin\theta)\,d\theta$: con $z = e^{i\theta}$, $\cos\theta = \frac{z + z^{-1}}{2}$, $d\theta = \frac{dz}{iz}$, y se suman los residuos dentro del círculo unidad.

> [!example] Ejemplo resuelto 2: una integral racional (con menos ayuda)
> $\int_{-\infty}^{\infty}\frac{dx}{x^2 + 1}$: el único polo arriba es $i$, con residuo $\frac{1}{2i}$, así que la integral vale $2\pi i\cdot\frac{1}{2i} = \pi$ (y en efecto
> $\arctan$ va de $-\pi/2$ a $\pi/2$). Para $\frac{1}{(x^2 + 1)^2}$ el polo en $i$ es doble: calcula tú $\frac{d}{dz}(z + i)^{-2}$ en $z = i$ y comprueba que sale $\pi/2$.

## 7. Contar ceros: principio del argumento y Rouché

**Principio del argumento.** Si $f$ es meromorfa dentro de $\gamma$ y no tiene ceros ni polos sobre ella, $\frac{1}{2\pi i}\oint_\gamma\frac{f'}{f}\,dz = Z - P$ (ceros menos polos, con
multiplicidad): el número de vueltas que da $f(\gamma)$ alrededor de $0$. Es exactamente el **criterio de Nyquist** de [[rob-control]].

**Teorema de Rouché.** Si $\lvert g\rvert < \lvert f\rvert$ sobre $\gamma$, entonces $f$ y $f + g$ tienen el mismo número de ceros dentro de $\gamma$. Ejemplo: en $\lvert z\rvert = 1$,
$\lvert z^5 + 1\rvert \le 2 < 3 = \lvert 3z^2\rvert$, así que $z^5 + 3z^2 + 1$ tiene, como $3z^2$, dos ceros en el disco.

## 8. Transformaciones conformes

Una función holomorfa con $f' \ne 0$ conserva los ángulos (es **conforme**): localmente es un giro más una homotecia. Las **transformaciones de Möbius**
$T(z) = \frac{az + b}{cz + d}$ con $ad - bc \ne 0$ llevan circunferencias y rectas a circunferencias y rectas, forman un grupo y quedan determinadas por la imagen de
tres puntos. La de **Cayley**, $T(z) = \frac{z - i}{z + i}$, lleva el semiplano superior al disco unidad: los puntos de arriba están más cerca de $i$ que de $-i$. Por el
**teorema de Riemann**, todo dominio simplemente conexo propio del plano es conformemente equivalente al disco; en la práctica, eso permite resolver
problemas de potencial (Laplace) en regiones complicadas trasladándolos al disco.

## 9. Comprobar con un programa

La regla del trapecio sobre una circunferencia es un método espectral para funciones analíticas: contrasta los residuos, la fórmula de Cauchy y el
principio del argumento con muy pocas líneas.

```python
import cmath
import math

def contorno(f, c=0, r=1.0, n=2048):
    """∮ f(z) dz sobre |z − c| = r por la regla del trapecio (convergencia exponencial si f es analítica cerca)."""
    total = 0
    for k in range(n):
        e = cmath.exp(2j * math.pi * k / n)
        total += f(c + r * e) * 1j * r * e
    return total * 2 * math.pi / n

dos_pi_i = 2j * math.pi

# 1. Ejemplo resuelto 1: Cauchy y su derivada.
assert abs(contorno(lambda z: cmath.cos(z) / z, r=2) - dos_pi_i) < 1e-12
assert abs(contorno(lambda z: cmath.exp(z) / z**3, r=2) - 1j * math.pi) < 1e-12

# 2. Residuos: 1/(z² + 1)² en z = i vale −i/4, y la integral real es π/2.
residuo = contorno(lambda z: 1 / (z * z + 1) ** 2, c=1j, r=0.5) / dos_pi_i
assert abs(residuo - (-0.25j)) < 1e-12
assert abs((dos_pi_i * residuo).real - math.pi / 2) < 1e-12

# 3. Principio del argumento: z⁵ + 3z² + 1 tiene 2 ceros en |z| < 1 (Rouché).
p = lambda z: z**5 + 3 * z**2 + 1
dp = lambda z: 5 * z**4 + 6 * z
ceros = contorno(lambda z: dp(z) / p(z)) / dos_pi_i
assert abs(ceros - 2) < 1e-9

# 4. Cayley: el semiplano superior va al disco y la inversa deshace el cambio.
T = lambda z: (z - 1j) / (z + 1j)
Tinv = lambda w: 1j * (1 + w) / (1 - w)
for z in (1 + 1j, -3 + 0.2j, 5j):
    assert abs(T(z)) < 1 and abs(Tinv(T(z)) - z) < 1e-12
print("Residuo de 1/(z²+1)² en i:", residuo, "| ceros dentro:", round(ceros.real))
```

## 10. Errores típicos

- Tratar $\log z$ o $z^{1/2}$ como funciones univaluadas sin fijar la rama ni el corte.
- Creer que una función diferenciable como función de $\mathbb R^2$ es holomorfa (falla Cauchy-Riemann: $\bar z$, $\lvert z\rvert^2$).
- Olvidar el factor $2\pi i$, el sentido de recorrido o los polos que caen fuera del contorno.
- Calcular el residuo de un polo múltiple con la fórmula del polo simple.
- Cerrar por el semiplano equivocado en las integrales con $e^{ix}$ (hay que ir donde $e^{iz}$ decae).
- Aplicar Rouché sin comprobar la desigualdad estricta sobre todo el contorno.

## 11. Resumen

- Polar y De Moivre; raíces; $\operatorname{Log}$ principal y corte; $z^w = e^{w\operatorname{Log} z}$.
- Holomorfa ⇔ Cauchy-Riemann (con continuidad); partes real e imaginaria armónicas.
- Cauchy: $\oint f = 0$; fórmula integral y derivadas; Liouville; teorema fundamental del álgebra; principio del máximo.
- Taylor y Laurent; singularidades evitables, polos, esenciales.
- Residuos: $\oint f = 2\pi i\sum\operatorname{Res}$; integrales reales racionales, de Fourier y trigonométricas.
- Principio del argumento ($Z - P$), Rouché; Möbius y Cayley; Riemann.

## Repaso: lo que debe quedarte dentro de un mes

1. Holomorfa significa derivable en todas las direcciones a la vez: Cauchy-Riemann.
2. El borde determina el interior: fórmula integral de Cauchy.
3. Una integral cerrada es $2\pi i$ por la suma de los residuos de dentro.
4. Para contar ceros, cuenta vueltas (principio del argumento) o compara tamaños (Rouché).
5. Las funciones holomorfas conservan ángulos y transforman regiones difíciles en discos.

## Siguiente

En las ramas: `mat-edp` (las funciones armónicas y la ecuación de Laplace), `mat-analisis-funcional` y `mat-teoria-numeros` (funciones generatrices y zeta).
En ingeniería, [[ing-senales-sistemas]] y [[rob-control]] usan estas herramientas a diario.
