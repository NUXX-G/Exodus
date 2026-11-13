---
id: mat-geometria-diferencial
title: "Geometría diferencial: curvas, superficies, curvatura de Gauss, geodésicas, variedades, formas diferenciales y conexiones"
area: matematicas
trunk_level: 13
prerequisites: [mat-calculo-multivariable, mat-algebra-lineal-avanzada, mat-topologia]
academic_sources:
  - "do Carmo, M. P. Differential Geometry of Curves and Surfaces. Prentice-Hall, 1976."
  - "Lee, J. M. Introduction to Smooth Manifolds, 2ª ed. Springer (Graduate Texts in Mathematics 218), 2012."
exercises:
  - id: curvatura-de-una-parabola
    tier: 1
    prompt: |
      ¿Cuál es la curvatura de $y = x^2$ en $x = 1$? Respuesta: con **4 decimales**.
    answers: ["sha256:04a841f71145118fe90a77a869ae05e6afcc37d6b57d5f7eb45725d775bb2b1d"]
  - id: longitud-de-la-helice
    tier: 1
    prompt: |
      ¿Cuánto mide una vuelta ($t \in [0, 2\pi]$) de la hélice $(\cos t, \operatorname{sen} t, t)$? Respuesta: con **4 decimales**.
    answers: ["sha256:c27d4ea76195dc57d7b2e14d6dbd5572c9cf7767ee5fe1fa99299048833a5a13"]
  - id: curvatura-de-la-esfera
    tier: 1
    prompt: |
      ¿Cuál es la curvatura de Gauss de una esfera de radio 2? Respuesta: un número.
    answers: ["sha256:a30a043314fa89294fa2c1c989a01fbb5329e5c085a5c5a8d27317656de24ae0"]
  - id: longitud-de-un-paralelo
    tier: 1
    prompt: |
      Con la métrica de la esfera unidad $ds^2 = d\theta^2 + \operatorname{sen}^2\theta\,d\varphi^2$, ¿cuánto mide el paralelo de colatitud $\theta = 30°$? Respuesta: con **4 decimales**.
    answers: ["sha256:23741492d396d4d556f0982fbcc97870d7b0e61859d7d7619d8418f875a42602"]
  - id: curvaturas-del-cilindro
    tier: 1
    prompt: |
      Para un cilindro de radio 2, ¿cuánto valen la curvatura media $|H|$ y la de Gauss $K$? Respuesta: `H;K`.
    answers: ["sha256:b2069910bd53ddb7f43822ea441d8324500a9bd22749146ae627a08701a6173a"]
  - id: curvatura-y-torsion
    tier: 2
    prompt: |
      Calcula la curvatura y la torsión de la hélice $(2\cos t, 2\operatorname{sen} t, t)$. Respuesta: `curvatura;torsion`.
    answers: ["sha256:aec2a24544c5b6ff0283c15ab42402d8aa5515cadccfe193feb550f946771a71"]
  - id: curvatura-del-toro
    tier: 2
    prompt: |
      El toro $((R + r\cos\theta)\cos\varphi, (R + r\cos\theta)\operatorname{sen}\varphi, r\operatorname{sen}\theta)$ con $R = 3$, $r = 1$ tiene $K = \frac{\cos\theta}{r(R + r\cos\theta)}$. ¿Cuánto vale en el ecuador exterior ($\theta = 0$) y en el interior ($\theta = \pi$)? Respuesta: `exterior;interior`.
    answers: ["sha256:ee852a2ddaee70f03495f35134de81d9d10b8df168614048c0feb48ddb688ee4"]
  - id: gauss-bonnet
    tier: 2
    prompt: |
      Por el teorema de Gauss-Bonnet, ¿cuánto vale $\iint K\,dA$ sobre un toro, y sobre una superficie cerrada orientable de género 2? Respuesta: `toro;genero2`, el segundo con **4 decimales**.
    answers: ["sha256:808ba087d4fad6673cf3ebc78ab3a43fca389a164a2aabf33025b97f51e6e43e"]
  - id: triangulo-esferico
    tier: 2
    prompt: |
      Un triángulo geodésico de la esfera unidad tiene tres ángulos rectos. ¿Cuál es su área? Respuesta: con **4 decimales**.
    answers: ["sha256:52f67ab92235bbb0fc4da6e2e9eacc0ada687af43a98285e0967948796bb0836"]
  - id: simbolos-de-christoffel
    tier: 2
    prompt: |
      En coordenadas polares del plano, $ds^2 = dr^2 + r^2d\theta^2$. ¿Cuánto valen $\Gamma^r_{\theta\theta}$ y $\Gamma^\theta_{r\theta}$ en $r = 2$? Respuesta: `Grtt;Gtrt`.
    answers: ["sha256:bd9886e884e3ce0702790edb32fa675b8c9eb3045ebd01de1ebd1cd2e82bb015"]
  - id: area-del-toro
    tier: 2
    prompt: |
      ¿Cuál es el área del toro con $R = 3$ y $r = 1$? Respuesta: con **3 decimales**.
    answers: ["sha256:c343e113f1ac8c1c9251b2be700136dbf74a1b25ae8487bb90790c24e5611a98"]
  - id: corchete-de-lie
    tier: 2
    prompt: |
      Calcula el corchete de Lie $[X, Y]$ de $X = x\,\partial_y$ e $Y = y\,\partial_x$ y evalúalo en $(1, 2)$. Respuesta: las componentes `a;b` de $a\,\partial_x + b\,\partial_y$.
    answers: ["sha256:f2a490014bb9a9a7880c1d1e325866ec7ea9998d66fae9ed249f797b00c10312"]
  - id: stokes-en-el-plano
    tier: 2
    prompt: |
      Calcula $\oint(-y\,dx + x\,dy)$ sobre la circunferencia de radio 2 recorrida en sentido antihorario, usando $d(-y\,dx + x\,dy) = 2\,dx\wedge dy$. Respuesta: con **4 decimales**.
    answers: ["sha256:cd38ecd45929d760cd2c8816dd0b68830e66feba70988ce0ffe4f4fd12675d4b"]
  - id: holonomia
    tier: 3
    prompt: |
      Transporta paralelamente un vector tangente a la esfera unidad alrededor del paralelo de colatitud $45°$. ¿Qué ángulo ha girado al volver al punto de partida (igual al área encerrada por el casquete)? Respuesta: con **4 decimales**.
    answers: ["sha256:4d42d105e342cf8a16cb6652182371e60395e032d7dcc4acd778f990d1559cd7"]
  - id: curvatura-geodesica
    tier: 3
    prompt: |
      ¿Cuál es la curvatura geodésica del paralelo de colatitud $45°$ en la esfera unidad? Respuesta: un número.
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: semiplano-de-poincare
    tier: 3
    prompt: |
      ¿Cuál es la curvatura de Gauss del semiplano superior con la métrica $ds^2 = \frac{dx^2 + dy^2}{y^2}$? Respuesta: un número.
    answers: ["sha256:1bad6b8cf97131fceab8543e81f7757195fbb1d36b376ee994ad1cf17699c464"]
---

# Geometría diferencial: curvas, superficies, curvatura de Gauss, geodésicas, variedades, formas diferenciales y conexiones

La geometría diferencial usa el cálculo para medir **forma**: cuánto se dobla una curva, cuánto se curva una superficie, cuál es el camino más corto sobre
ella, qué le pasa a una flecha que se transporta "sin girar" por un espacio curvo. Su resultado más famoso, el *Theorema Egregium* de Gauss, dice que una
superficie puede medir su propia curvatura **desde dentro**, sin salir de ella; esa idea, llevada a cuatro dimensiones, es la relatividad general
(`fis-relatividad-general`). También es la geometría de la robótica (orientaciones como grupo de Lie, [[rob-cinematica]]), la visión por ordenador, la
optimización en variedades y los gráficos 3D.

## Objetivos

Al terminar sabrás:

1. Calcular longitud, curvatura y torsión de curvas, y usar el triedro de Frenet.
2. Calcular las formas fundamentales de una superficie y sus curvaturas (normal, principales, media y de Gauss).
3. Usar el *Theorema Egregium* y el teorema de Gauss-Bonnet (local y global).
4. Escribir métricas en coordenadas, calcular símbolos de Christoffel y ecuaciones de geodésicas, y entender el transporte paralelo y la holonomía.
5. Manejar variedades diferenciables, campos vectoriales y corchetes de Lie.
6. Usar formas diferenciales, derivada exterior y el teorema de Stokes general.

## Qué debes dominar antes

[[mat-calculo-multivariable]] (derivadas parciales, jacobiano, integrales de superficie, teoremas de Green y Stokes clásicos), [[mat-algebra-lineal-avanzada]]
(formas bilineales, autovalores de matrices simétricas) y [[mat-topologia]] (característica de Euler, superficies).

> [!question] Test de entrada
> 1. ¿Cuál es el producto vectorial de $(1, 0, 0)$ y $(0, 1, 0)$?
> 2. ¿Qué dice el teorema de Green para $\oint P\,dx + Q\,dy$?
> 3. ¿Cuál es la característica de Euler de la esfera? ¿Y del toro?
>
> Respuestas: $(0, 0, 1)$; $\iint(Q_x - P_y)\,dA$; 2 y 0.

## 1. Para qué sirve

- **Física**: la relatividad general es geometría de una variedad de 4 dimensiones; las fuerzas de gauge (electromagnetismo, fuerzas nucleares) son conexiones.
- **Robótica y visión**: las rotaciones forman la variedad $SO(3)$; estimar poses y trayectorias es optimizar en variedades; la curvatura de superficies guía
  agarres y reconstrucción 3D.
- **Ingeniería**: trazado de carreteras y vías con curvatura continua (clotoides), cascos y alas, cartografía (ninguna proyección plana de la Tierra
  conserva distancias, por el *Theorema Egregium*).
- **Aprendizaje automático**: gradiente natural (la información de Fisher como métrica), optimización en variedades, redes equivariantes.

## 2. Curvas

Una curva regular $r(t)$ tiene **longitud** $\int|r'(t)|\,dt$; reparametrizada por arco $s$, el vector tangente $T = r'(s)$ es unitario.

- **Curvatura** $\kappa = |T'(s)|$: cuánto gira la tangente por unidad de longitud. En cualquier parámetro, $\kappa = \frac{|r'\times r''|}{|r'|^3}$; para $y = f(x)$, $\kappa = \frac{|f''|}{(1 + f'^2)^{3/2}}$.
  Una circunferencia de radio $R$ tiene $\kappa = 1/R$ (el **radio de curvatura** es $1/\kappa$).
- **Torsión** $\tau = \frac{(r'\times r'')\cdot r'''}{|r'\times r''|^2}$: cuánto se sale la curva de su plano osculador.
- **Fórmulas de Frenet-Serret**: con la normal $N$ y la binormal $B = T\times N$, $T' = \kappa N$, $N' = -\kappa T + \tau B$, $B' = -\tau N$. **Teorema fundamental**: $\kappa(s)$ y $\tau(s)$ determinan la
  curva salvo movimientos rígidos.

La hélice $(a\cos t, a\operatorname{sen} t, bt)$ tiene curvatura y torsión constantes, $\kappa = \frac{a}{a^2 + b^2}$ y $\tau = \frac{b}{a^2 + b^2}$: es la única curva así (aparte de rectas y circunferencias).

## 3. Superficies: formas fundamentales y curvaturas

Para $X(u, v)$, la **primera forma fundamental** $ds^2 = E\,du^2 + 2F\,du\,dv + G\,dv^2$, con $E = X_u\cdot X_u$, $F = X_u\cdot X_v$, $G = X_v\cdot X_v$, mide longitudes, ángulos y áreas
($dA = \sqrt{EG - F^2}\,du\,dv$) **dentro** de la superficie. La **segunda forma fundamental** $e\,du^2 + 2f\,du\,dv + g\,dv^2$, con $e = X_{uu}\cdot n$, etc., mide cómo se separa de su
plano tangente.

- La **curvatura normal** en una dirección es $\frac{\text{II}}{\text{I}}$; sus valores extremos son las **curvaturas principales** $k_1, k_2$ (autovalores del operador forma, en
  direcciones ortogonales).
- **Curvatura de Gauss** $K = k_1k_2 = \frac{eg - f^2}{EG - F^2}$; **curvatura media** $H = \frac{k_1 + k_2}{2}$.
- $K > 0$: punto elíptico (esfera, $K = 1/R^2$); $K < 0$: hiperbólico, silla (el interior del toro); $K = 0$: parabólico o plano (cilindro: $k_1 = 1/R$, $k_2 = 0$).
- $H = 0$: **superficies mínimas** (pompas de jabón apoyadas en un alambre: catenoide, helicoide).

> [!example] Ejemplo resuelto 1: la curvatura del toro
> $X = ((R + r\cos\theta)\cos\varphi, (R + r\cos\theta)\operatorname{sen}\varphi, r\operatorname{sen}\theta)$. Derivando, $E = r^2$, $F = 0$, $G = (R + r\cos\theta)^2$, y con la normal $n$ hacia fuera,
> $e = r$, $f = 0$, $g = \cos\theta(R + r\cos\theta)$. Por tanto $K = \frac{\cos\theta}{r(R + r\cos\theta)}$: con $R = 3$, $r = 1$, $K = \frac14$ en el ecuador exterior (como una esfera), $-\frac12$ en el interior (silla) y
> 0 arriba y abajo. El área es $\iint r(R + r\cos\theta)\,d\theta\,d\varphi = 4\pi^2Rr$.

## 4. *Theorema Egregium* y Gauss-Bonnet

**Theorema Egregium (Gauss).** $K$ depende solo de la primera forma fundamental (de $E, F, G$ y sus derivadas). Doblar una hoja de papel sin estirarla no
cambia $K = 0$: por eso un cilindro se desenrolla en un plano pero una esfera no; ningún mapa plano de la Tierra conserva las distancias. Para métricas
conformes $ds^2 = \lambda(dx^2 + dy^2)$ hay una fórmula sencilla: $K = -\frac{1}{2\lambda}\Delta\log\lambda$. El **semiplano de Poincaré** $\frac{dx^2 + dy^2}{y^2}$ tiene $K = -1$ constante: es el plano
hiperbólico.

**Gauss-Bonnet.** Para una región $R$ con borde formado por curvas con curvatura geodésica $\kappa_g$ y ángulos exteriores $\theta_i$,

$$
\iint_R K\,dA + \oint_{\partial R}\kappa_g\,ds + \sum\theta_i = 2\pi\chi(R),
$$

y para una superficie cerrada, $\iint K\,dA = 2\pi\chi$: la curvatura total es una **invariante topológica** ([[mat-topologia]]). El toro tiene curvatura total 0 (lo positivo
de fuera compensa lo negativo de dentro); una superficie de género 2, $-4\pi$.

> [!example] Ejemplo resuelto 2: triángulos esféricos
> Un triángulo geodésico de la esfera unidad (lados de círculo máximo, $\kappa_g = 0$) con ángulos interiores $\alpha, \beta, \gamma$ tiene ángulos exteriores $\pi - \alpha$, etc., y $\chi = 1$:
> Gauss-Bonnet da $\text{área} + 3\pi - (\alpha + \beta + \gamma) = 2\pi$, es decir, $\text{área} = \alpha + \beta + \gamma - \pi$: el **exceso angular**. Con tres ángulos rectos (un octante), área $= \frac\pi2$,
> que es $\frac{4\pi}{8}$. En un plano ($K = 0$) los ángulos suman exactamente $\pi$; en el plano hiperbólico, menos.

## 5. Métricas, geodésicas y transporte paralelo

En coordenadas $x^i$, una **métrica** $g_{ij}$ define longitudes $\int\sqrt{g_{ij}\dot x^i\dot x^j}\,dt$. Las **geodésicas** (curvas localmente más cortas) cumplen

$$
\ddot x^k + \Gamma^k_{ij}\dot x^i\dot x^j = 0, \qquad \Gamma^k_{ij} = \tfrac12 g^{kl}\left(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\right).
$$

En polares, $ds^2 = dr^2 + r^2d\theta^2$ da $\Gamma^r_{\theta\theta} = -r$ y $\Gamma^\theta_{r\theta} = \frac1r$: las ecuaciones de las rectas escritas en polares (aparecen las "fuerzas" centrífuga y de
Coriolis). En la esfera, las geodésicas son los círculos máximos: por eso las rutas aéreas parecen curvas en un mapa.

**Transporte paralelo**: mover un vector a lo largo de una curva sin "girarlo" respecto a la superficie ($\nabla_{\dot\gamma}V = 0$). En una superficie curva, al dar la vuelta
a un lazo el vector vuelve **girado**: la **holonomía**. Para un lazo que encierra una región simple, el ángulo girado es $\iint K\,dA$. Alrededor del paralelo de
colatitud $\theta_0$ de la esfera unidad, el giro es $2\pi(1 - \cos\theta_0)$, el área del casquete: es el péndulo de Foucault, que gira $2\pi\cos\theta_0$ al día respecto a la
Tierra (en el polo, una vuelta; en el ecuador, nada).

La **curvatura geodésica** $\kappa_g$ mide cuánto se desvía una curva de ser geodésica dentro de la superficie; con la normal $\kappa_n$, $\kappa^2 = \kappa_g^2 + \kappa_n^2$. El paralelo de
colatitud $\theta_0$ tiene $\kappa = 1/\operatorname{sen}\theta_0$, $\kappa_n = 1$ y $\kappa_g = \cot\theta_0$ (el ecuador, $\theta_0 = \pi/2$, es geodésica).

## 6. Variedades, campos y corchetes

Una **variedad diferenciable** de dimensión $n$ es un espacio topológico (Hausdorff, con base numerable) recubierto por **cartas** $\varphi_\alpha: U_\alpha \to \mathbb R^n$ cuyos
cambios $\varphi_\beta\circ\varphi_\alpha^{-1}$ son diferenciables. Ejemplos: esferas, toros, el espacio de configuraciones de un brazo, $SO(3)$, el espacio de matrices de rango
fijo. El **espacio tangente** $T_pM$ son las derivadas direccionales en $p$; un **campo vectorial** asigna un vector a cada punto, $X = X^i\partial_i$.

El **corchete de Lie** $[X, Y] = XY - YX$, en coordenadas $[X, Y]^i = X^j\partial_jY^i - Y^j\partial_jX^i$, mide si los flujos de $X$ e $Y$ conmutan. Si no conmutan, combinando dos
movimientos se consigue un tercero: así se aparca un coche en paralelo (dos controles, avanzar y girar, generan el desplazamiento lateral) y es la base
de la controlabilidad no lineal en robótica.

> [!example] Ejemplo resuelto 3: un corchete (con menos ayuda)
> Con $X = x\,\partial_y$ e $Y = y\,\partial_x$, aplica la fórmula: solo hay dos derivadas no nulas, $\partial_x X^y = 1$ y $\partial_y Y^x = 1$. Comprueba que $[X, Y] = x\,\partial_x - y\,\partial_y$ y que en
> $(1, 2)$ vale $\partial_x - 2\partial_y$. Interpreta: alternar los dos cizallamientos produce un estiramiento en $x$ y una compresión en $y$.

## 7. Formas diferenciales y Stokes

Una **$k$-forma** se integra sobre objetos de dimensión $k$: $dx$, $dy$ son 1-formas; $dx\wedge dy$ es una 2-forma (área orientada), con $dx\wedge dy = -dy\wedge dx$. La **derivada
exterior** $d$ generaliza gradiente, rotacional y divergencia, y cumple $d\circ d = 0$ (rotacional de un gradiente y divergencia de un rotacional son nulos).

**Teorema de Stokes**: $\int_M d\omega = \int_{\partial M}\omega$. Contiene el teorema fundamental del cálculo, Green, Stokes clásico y Gauss (divergencia). Por ejemplo,
$d(-y\,dx + x\,dy) = 2\,dx\wedge dy$, así que $\oint_{\partial D}(-y\,dx + x\,dy) = 2\,\text{área}(D)$: el planímetro mide áreas recorriendo el borde.

Una **conexión** generaliza el transporte paralelo a variedades arbitrarias; su curvatura (el tensor de Riemann) mide la holonomía de lazos
infinitesimales. En dimensión 2 se reduce a $K$; en relatividad general, la ecuación de Einstein relaciona la curvatura de Ricci con la energía.

## 8. Comprobar con un programa

Curvatura y torsión de la hélice con derivadas numéricas, la curvatura del toro y Gauss-Bonnet por integración, y el transporte paralelo en la esfera
integrando la ecuación de las geodésicas.

```python
import math

def d(f, t, h=1e-4):
    return [(a - b) / (2 * h) for a, b in zip(f(t + h), f(t - h))]

def dd(f, t, h=1e-4):
    return [(a - 2 * c + b) / (h * h) for a, b, c in zip(f(t + h), f(t - h), f(t))]

cruz = lambda a, b: [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
norma = lambda a: math.sqrt(sum(x * x for x in a))
punto = lambda a, b: sum(x * y for x, y in zip(a, b))

# 1. Hélice (2cos t, 2sen t, t): κ = 2/5 y τ = 1/5.
hel = lambda t: [2 * math.cos(t), 2 * math.sin(t), t]
r1, r2 = d(hel, 0.7), dd(hel, 0.7)
r3 = d(lambda s: dd(hel, s, 1e-3), 0.7, 1e-3)
c = cruz(r1, r2)
assert abs(norma(c) / norma(r1) ** 3 - 0.4) < 1e-6 and abs(punto(c, r3) / punto(c, c) - 0.2) < 1e-4

# 2. Ejemplo resuelto 1: K del toro (R = 3, r = 1) y Gauss-Bonnet: ∬ K dA = 0, área 4π²Rr.
R, r = 3.0, 1.0
K = lambda th: math.cos(th) / (r * (R + r * math.cos(th)))
dA = lambda th: r * (R + r * math.cos(th))
N = 2000
paso = 2 * math.pi / N
total = sum(K(i * paso) * dA(i * paso) for i in range(N)) * paso * 2 * math.pi
area = sum(dA(i * paso) for i in range(N)) * paso * 2 * math.pi
assert abs(K(0) - 0.25) < 1e-15 and abs(K(math.pi) + 0.5) < 1e-15
assert abs(total) < 1e-9 and abs(area - 4 * math.pi**2 * R * r) < 1e-9

# 3. Geodésica de la esfera: ecuaciones θ'' = sen θ cos θ φ'², φ'' = −2 cot θ θ' φ' (RK4).
#    Partiendo del ecuador en dirección inclinada, la curva vuelve al ecuador en φ = π (círculo máximo).
def f(y):
    th, ph, dth, dph = y
    return [dth, dph, math.sin(th) * math.cos(th) * dph**2, -2 * math.cos(th) / math.sin(th) * dth * dph]

y = [math.pi / 2, 0.0, -0.6, 0.8]
h = 1e-4
cruces = []
for k in range(40000):
    k1 = f(y)
    k2 = f([a + h / 2 * b for a, b in zip(y, k1)])
    k3 = f([a + h / 2 * b for a, b in zip(y, k2)])
    k4 = f([a + h * b for a, b in zip(y, k3)])
    nuevo = [a + h / 6 * (b + 2 * c + 2 * e + g) for a, b, c, e, g in zip(y, k1, k2, k3, k4)]
    if (y[0] - math.pi / 2) * (nuevo[0] - math.pi / 2) < 0:
        cruces.append(nuevo[1])
    y = nuevo
assert abs(cruces[0] - math.pi) < 1e-3
print("κ, τ de la hélice ≈ 0,4 y 0,2 | Gauss-Bonnet en el toro:", round(total, 12), "| la geodésica cruza el ecuador en φ =", round(cruces[0], 4))
```

## 9. Errores típicos

- Usar $\kappa = |r''|$ sin parametrizar por arco.
- Confundir la curvatura de Gauss (intrínseca) con la media (depende de cómo está metida la superficie en el espacio).
- Olvidar los ángulos exteriores o la curvatura geodésica del borde en Gauss-Bonnet local.
- Tratar los símbolos de Christoffel como un tensor (no lo son: dependen de las coordenadas).
- Pensar que "geodésica" significa "la más corta globalmente": solo localmente (dos puntos de la esfera tienen dos arcos de círculo máximo).
- Cambiar el orden de $\wedge$ sin cambiar el signo.

## 10. Resumen

- Curvas: $\kappa = |r'\times r''|/|r'|^3$, $\tau$, Frenet-Serret; la hélice tiene $\kappa$ y $\tau$ constantes.
- Superficies: I $(E, F, G)$, II $(e, f, g)$, $K = \frac{eg - f^2}{EG - F^2}$, $H$, principales; elíptico, hiperbólico, parabólico; mínimas.
- *Egregium*: $K$ intrínseca; conforme $K = -\frac{1}{2\lambda}\Delta\log\lambda$; Poincaré $K = -1$.
- Gauss-Bonnet: $\iint K + \oint\kappa_g + \sum\theta = 2\pi\chi$; exceso angular; curvatura total $2\pi\chi$.
- Christoffel, geodésicas, transporte paralelo, holonomía $= \iint K$; $\kappa^2 = \kappa_g^2 + \kappa_n^2$.
- Variedades, campos, corchete de Lie; formas, $d$, $d^2 = 0$, Stokes $\int_M d\omega = \int_{\partial M}\omega$.

## Repaso: lo que debe quedarte dentro de un mes

1. La curvatura de una curva es lo que gira su tangente; la de una superficie, el producto de las curvaturas principales.
2. La curvatura de Gauss se mide desde dentro: por eso no hay mapas planos perfectos.
3. La curvatura total de una superficie cerrada es $2\pi\chi$.
4. En un espacio curvo, transportar un vector alrededor de un lazo lo gira tanto como la curvatura encerrada.
5. Stokes unifica todos los teoremas integrales del cálculo.

## Siguiente

`fis-relatividad-general` (variedades de Lorentz y ecuación de Einstein), `rob-planificacion-movimiento` y `rob-control-optimo-mpc` (optimizar en
variedades), y `fis-teoria-cuantica-campos` (conexiones de gauge). El cálculo de base está en [[mat-calculo-multivariable]].
