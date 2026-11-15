---
id: tro-razonamiento-cientifico
title: "Razonamiento científico: método, experimentos, incertidumbre, estimación y lectura crítica de la evidencia"
area: troncal
trunk_level: 7
prerequisites: [tro-aprender-a-aprender, fis-medida-movimiento, mat-combinatoria-probabilidad-basica]
academic_sources:
  - "Popper, K. R. The Logic of Scientific Discovery. Hutchinson, 1959 (versión inglesa de Logik der Forschung, 1934)."
  - "JCGM 100:2008. Evaluation of measurement data — Guide to the expression of uncertainty in measurement (GUM). BIPM, 2008 (doi.org/10.59161/JCGM100-2008E)."
  - "Open Science Collaboration. Estimating the reproducibility of psychological science. Science, 349(6251), aac4716, 2015."
  - "Ioannidis, J. P. A. Why Most Published Research Findings Are False. PLoS Medicine, 2(8), e124, 2005."
  - "Wasserstein, R. L.; Lazar, N. A. The ASA Statement on p-Values: Context, Process, and Purpose. The American Statistician, 70(2), 129-133, 2016."
hints:
  - "Concepto: antes de calcular, pregunta qué afirmación se pone a prueba y qué observación la refutaría. Para las incertidumbres independientes: en sumas y restas se combinan en cuadratura las absolutas; en productos y cocientes, las relativas. Para la evidencia: separa la probabilidad de un resultado dada una hipótesis de la probabilidad de la hipótesis dado el resultado (tasa base)."
  - "Herramienta: escribe las unidades en cada paso (el análisis dimensional caza errores); comprueba una propagación de incertidumbres derivando numéricamente o simulando muchas medidas con random.gauss; para una estimación de Fermi, calcula con la cota baja y con la alta y quédate con la media geométrica; dibuja los datos en escala lineal y logarítmica."
  - "Documentación: GUM (JCGM 100:2008) en bipm.org, apartados de incertidumbre típica y ley de propagación; declaración de la ASA sobre los p-valores (2016); Ioannidis (2005) y Open Science Collaboration (2015) para la reproducibilidad; Popper sobre la falsabilidad."
exercises:
  - id: cifras-significativas
    tier: 1
    prompt: |
      ¿Cuántas cifras significativas tiene la medida $0{,}004050$ m? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: producto-con-cifras-significativas
    tier: 1
    prompt: |
      Un rectángulo mide $3{,}24$ m por $2{,}1$ m. Expresa su área en m$^2$ con el número de cifras significativas que permiten los datos. Respuesta: un número.
    answers: ["sha256:ee7e860a857feb60180ac10dcdabc3afc06f9e45f9d761232cb9f8aed33162a6"]
  - id: orden-de-magnitud
    tier: 1
    prompt: |
      ¿Cuál es el orden de magnitud (el exponente $k$ de $10^k$, con la mantisa entre $1$ y $10$) del número de **segundos** que dura una vida de $80$ años? Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: media-geometrica-de-fermi
    tier: 1
    prompt: |
      En una estimación de Fermi sabes que una cantidad está seguro entre $50$ y $2000$. ¿Qué valor central tomas si usas la **media geométrica** de las cotas? Respuesta: redondeada a un entero.
    answers: ["sha256:7a20311cf7a4b222d436424480bc65dd0f9d2cefcbbb1fa148ca0d7e1d5bb55a"]
  - id: analisis-dimensional
    tier: 2
    prompt: |
      Se sospecha que el periodo $T$ de un péndulo depende solo de su longitud $L$ y de $g$: $T = k\,L^a g^b$ con $k$ adimensional. Halla $a$ y $b$ por análisis dimensional. Respuesta: `a;b` como fracciones o enteros.
    answers: ["sha256:d44cf7fbcbd393c4da32675526f69815416b859011fba242b61a22e671fb357d"]
  - id: propagar-una-suma
    tier: 2
    prompt: |
      Se suman dos longitudes medidas de forma independiente, $(12{,}3 \pm 0{,}2)$ cm y $(4{,}1 \pm 0{,}1)$ cm (incertidumbres típicas). ¿Cuál es la incertidumbre típica de la suma, combinando en cuadratura? Respuesta: un número con **2 decimales**.
    answers: ["sha256:dc08a4e8bbdd4019572c30507de074a79e24846715cd9028fb82bda6f3f8f9d7"]
  - id: propagar-un-cociente
    tier: 2
    prompt: |
      Una pieza tiene masa $(25{,}0 \pm 0{,}5)$ g y volumen $(10{,}0 \pm 0{,}3)$ cm$^3$ (incertidumbres típicas independientes). Calcula su densidad y la incertidumbre típica de la densidad (las incertidumbres **relativas** se combinan en cuadratura). Respuesta: `densidad;incertidumbre` en g/cm$^3$, ambas con **2 decimales**.
    answers: ["sha256:44d0f8685e2af8898eb28653029ea500d45054a7b3673bef2b7dcab712d44a24", "sha256:04837dcb61bea629174a2ea129093191c7abd991d2e7fef5a86f720eb86b4102"]
  - id: estimacion-de-fermi
    tier: 2
    prompt: |
      Estima cuántos afinadores de piano trabajan en una ciudad de $3$ millones de habitantes con estas hipótesis: $2{,}5$ personas por hogar, un piano en uno de cada $20$ hogares, cada piano se afina una vez al año y un afinador afina $4$ pianos al día durante $250$ días al año. Respuesta: un entero.
    answers: ["sha256:39fa9ec190eee7b6f4dff1100d6343e10918d044c75eac8f9e9a2596173f80c9"]
  - id: tasa-base
    tier: 2
    prompt: |
      El $2\,\%$ de las piezas de una fábrica son defectuosas. Un sistema de visión detecta el $90\,\%$ de las defectuosas y da falsa alarma en el $5\,\%$ de las buenas. Si salta la alarma, ¿qué probabilidad hay de que la pieza sea defectuosa? Respuesta: un número redondeado a **4 decimales**.
    answers: ["sha256:08ffc62cdba9393413be8a1c7f2f44a1116bf79dea9cb4b68333a5c851b9a0f7"]
  - id: riesgo-relativo-y-absoluto
    tier: 2
    prompt: |
      Un fármaco reduce el riesgo de un infarto en cinco años del $2\,\%$ al $1{,}5\,\%$. ¿Cuánto vale la reducción **relativa** del riesgo (en %), la reducción **absoluta** (en puntos porcentuales) y el **número necesario a tratar** (cuántas personas hay que tratar para evitar un infarto)? Respuesta: los tres números separados por `;`.
    answers: ["sha256:f49472444968b8c8fea482171afbc6bb55fff3ea632d77c529d1ef3e2936dd02"]
  - id: grafico-con-eje-truncado
    tier: 2
    prompt: |
      Un gráfico de barras compara $98$ y $102$, pero su eje vertical empieza en $96$. ¿Cuántas veces más alta **parece** la segunda barra y cuál es el cociente **real** de los valores? Respuesta: los dos números separados por `;`, el segundo con **2 decimales**.
    answers: ["sha256:7a8ceb34ae1c68c582a3a39985435b97cbf6aab90e710d6667b0ccda522a18e2"]
  - id: energia-cinetica-con-unidades
    tier: 2
    prompt: |
      ¿Qué energía cinética tiene un coche de $1500$ kg a $108$ km/h, en kilojulios? (Convierte primero a unidades del SI.) Respuesta: un número.
    answers: ["sha256:a440868cf4311953cb45c7ded9360009e1bb77775b6395a3e13aa9ef831794b1"]
  - id: regresion-a-la-media
    tier: 3
    prompt: |
      Las notas de dos exámenes, tipificadas, siguen una normal bivariante con correlación $0{,}6$. Un alumno saca en el primero $z = 2$ (dos desviaciones por encima de la media). ¿Qué $z$ se espera, de media, en el segundo? Respuesta: un número con **1 decimal**.
    answers: ["sha256:77ac319bfe1979e2d799d9e6987e65feb54f61511c03552ebae990826c208590"]
  - id: escala-logaritmica
    tier: 3
    prompt: |
      En un gráfico con eje vertical logarítmico, una magnitud pasa de $10^2$ a $10^5$ en $6$ años creciendo a un ritmo constante. ¿Por qué factor se multiplica **cada año**? Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:a2108a37a6605e337adae024a2134378f1a4e5854f1d2f023d413769518029e5"]
  - id: ley-de-potencias
    tier: 3
    prompt: |
      Dos medidas de una relación $y = c\,x^k$ dan $y = 5$ para $x = 2$ e $y = 40$ para $x = 8$. ¿Cuánto vale el exponente $k$? (En papel log-log, es la pendiente de la recta.) Respuesta: un número.
    answers: ["sha256:9f29a130438b81170b92a42650f9a94291ecad60bd47af2a3886e75f7f728725"]
  - id: valor-predictivo-de-un-hallazgo
    tier: 3
    prompt: |
      En un campo de investigación, el $10\,\%$ de las hipótesis que se ponen a prueba son ciertas. Los estudios tienen potencia $0{,}8$ y nivel de significación $0{,}05$. ¿Qué fracción de los resultados «significativos» corresponde a hipótesis ciertas? Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:04bd088be6c6f4228903a04eab7817db13463da0b94cbbad21063f4216a49380"]
---

# Razonamiento científico: método, experimentos, incertidumbre, estimación y lectura crítica de la evidencia

La ciencia no es una lista de datos, sino un **método** para no engañarse: proponer explicaciones que puedan resultar falsas, ponerlas a
prueba con experimentos bien diseñados, medir con incertidumbre conocida y aceptar lo que digan los datos. Este nodo enseña ese oficio,
común a la física, la ingeniería, la medicina, la seguridad informática y la vida diaria: cómo se formula una hipótesis contrastable,
cómo se diseña un experimento sin sesgos, cómo se expresa y propaga la incertidumbre de una medida, cómo se estima cualquier cosa con un
orden de magnitud razonable, cómo se leen gráficos sin caer en sus trampas y cómo se juzga la calidad de una afirmación o de un estudio.

## Objetivos

Al terminar sabrás:

1. Distinguir afirmaciones **falsables** de las que no lo son, y separar hipótesis, predicción, ley y teoría.
2. Diseñar un experimento con grupo de control, aleatorización y cegamiento, e identificar variables de confusión.
3. Expresar una medida con su **incertidumbre típica** y propagarla en sumas, productos y funciones generales (GUM).
4. Hacer **estimaciones de Fermi** y comprobar fórmulas con **análisis dimensional**.
5. Leer escalas logarítmicas y log-log, detectar ejes truncados y reconocer la **regresión a la media**.
6. Evaluar una afirmación: tasa base, riesgo relativo frente a absoluto, número necesario a tratar, reproducibilidad, sesgos y falacias.

## Qué debes dominar antes

[[tro-aprender-a-aprender]] (estudiar con evidencia), [[fis-medida-movimiento]] (unidades, error, cifras significativas, orden de
magnitud) y [[mat-combinatoria-probabilidad-basica]] (probabilidad condicionada).

> [!question] Test de entrada
> 1. ¿Cuántos segundos tiene un día?
> 2. Si una magnitud se duplica cada año, ¿por cuánto se multiplica en 10 años?
> 3. ¿Qué unidades tiene $g$, la aceleración de la gravedad?
>
> Respuestas: $86\,400$; $2^{10} = 1024$; m/s$^2$.

## 1. Para qué sirve

- **En cualquier profesión técnica**: depurar un programa, diagnosticar una avería o investigar un incidente de seguridad es aplicar el
  método científico (hipótesis, prueba que podría refutarla, conclusión).
- **Ingeniería**: una medida sin incertidumbre no sirve para decidir si una pieza cumple una tolerancia.
- **Salud y dinero**: «reduce el riesgo un 25 %» puede significar medio punto; una prueba con 99 % de acierto puede equivocarse casi siempre
  si la enfermedad es rara.
- **Ciudadanía**: distinguir un estudio sólido de un titular, un gráfico honesto de uno manipulado.

## 2. El método científico y la falsabilidad

El ciclo es: **observar** un fenómeno, proponer una **hipótesis** que lo explique, deducir de ella una **predicción** concreta,
**contrastarla** con un experimento u observación, y **revisar**. Una **ley** describe una regularidad (la ley de Ohm); una **teoría** es un
sistema explicativo amplio, muy contrastado, del que se deducen muchas leyes (el electromagnetismo).

**Falsabilidad (Popper).** En *Logik der Forschung* (1934; en inglés, *The Logic of Scientific Discovery*, 1959), Popper señaló una asimetría:
ningún número de confirmaciones demuestra una afirmación universal, pero **un solo** contraejemplo bien establecido la refuta (igual que en
[[mat-logica-demostraciones]]). Una afirmación es científica si **prohíbe** algo observable: «todos los metales se dilatan al calentarse» se
refutaría con un metal que se contrae; «hay fuerzas invisibles que lo explican todo» no prohíbe nada y no es contrastable. Cuanto más
prohíbe una hipótesis, más contenido tiene y más arriesgada es su prueba.

**La navaja de Ockham.** Entre explicaciones que predicen igual de bien, se prefiere la que menos supuestos añade (no porque sea
necesariamente cierta, sino porque es más fácil de poner a prueba).

## 3. Diseñar un experimento

- **Variables**: la **independiente** es la que se manipula; la **dependiente**, la que se mide; las **controladas** se mantienen fijas.
- **Grupo de control**: idéntico salvo en el factor estudiado. Sin él no se sabe qué habría pasado de todos modos (mejoras espontáneas,
  **regresión a la media**, efecto placebo).
- **Aleatorización**: asignar al azar quién recibe el tratamiento reparte por igual las **variables de confusión**, incluidas las que no se
  conocen. Es lo que permite concluir **causalidad**.
- **Cegamiento**: si el participante (simple ciego) o también quien mide (doble ciego) no saben quién recibe qué, sus expectativas no sesgan
  el resultado.
- **Tamaño de muestra**: suficiente para detectar el efecto buscado (potencia), y fijado **antes** de mirar los datos.
- **Preregistro**: publicar la hipótesis y el análisis antes de recoger datos impide ajustar el análisis a lo que salga.

En un **estudio observacional** (no se asigna el tratamiento: se observa quién lo eligió) una correlación puede deberse a una tercera
variable. Quien toma vitaminas también suele hacer más ejercicio y fumar menos; la vitamina puede no tener ningún efecto. Con datos
observacionales se puede sugerir causalidad, pero se necesitan diseños cuidadosos (y modestia) para afirmarla.

## 4. Incertidumbre de medida

El resultado de una medida es un valor **y** una incertidumbre: $L = (12{,}3 \pm 0{,}2)$ cm. La guía internacional (GUM, JCGM 100:2008) llama
**incertidumbre típica** a la desviación típica que describe la duda sobre el valor y distingue cómo se evalúa:

- **Tipo A**: estadísticamente, repitiendo la medida: la incertidumbre de la media de $n$ lecturas es $s/\sqrt n$.
- **Tipo B**: por otros medios: la resolución del instrumento, el certificado de calibración, la experiencia. Una resolución $d$ con lectura
  uniforme dentro de $\pm d/2$ da $u = d/\sqrt{12}$.

**Propagación.** Si $y = f(x_1, \dots, x_n)$ con entradas **independientes**, la ley de propagación de la GUM (aproximación lineal) es

$$
u(y)^2 = \sum_i \left(\frac{\partial f}{\partial x_i}\right)^2 u(x_i)^2 .
$$

Casos que salen de ella:

- **Suma o resta**: se suman en cuadratura las incertidumbres **absolutas**: $u(a \pm b) = \sqrt{u_a^2 + u_b^2}$.
- **Producto o cociente**: se suman en cuadratura las **relativas**: $\frac{u(ab)}{\lvert ab\rvert} = \sqrt{\left(\frac{u_a}{a}\right)^2 + \left(\frac{u_b}{b}\right)^2}$.
- **Potencia** $y = x^k$: $\frac{u_y}{\lvert y\rvert} = \lvert k\rvert\frac{u_x}{\lvert x\rvert}$.

Que se sumen en **cuadratura** (y no directamente) refleja que errores independientes tienden a compensarse en parte.

**Ejemplo resuelto 1.** Se mide el periodo de un péndulo cronometrando $20$ oscilaciones: $(36{,}4 \pm 0{,}2)$ s, luego $T = (1{,}820 \pm 0{,}010)$ s
(medir muchas oscilaciones divide la incertidumbre entre 20). Con $L = (0{,}823 \pm 0{,}002)$ m, $g = 4\pi^2L/T^2 = 9{,}81$ m/s$^2$, y
$\frac{u_g}{g} = \sqrt{\left(\frac{0{,}002}{0{,}823}\right)^2 + \left(2\cdot\frac{0{,}010}{1{,}820}\right)^2} = \sqrt{0{,}0024^2 + 0{,}0110^2} \approx 0{,}0113$: $g = (9{,}81 \pm 0{,}11)$ m/s$^2$. La
incertidumbre del tiempo domina: para mejorar, cronometra más oscilaciones, no midas mejor la cuerda.

**Expresar el resultado.** La incertidumbre se da con una o dos cifras significativas y el valor se redondea a la misma posición decimal:
$9{,}81 \pm 0{,}11$, no $9{,}8143 \pm 0{,}1127$. Dos medidas son **compatibles** si su diferencia es pequeña frente a la incertidumbre combinada.

## 5. Estimación de Fermi

Enrico Fermi era célebre por estimar en segundos cantidades que parecían imposibles. El método: **descomponer** el problema en factores que
se puedan estimar, estimar cada uno con un orden de magnitud razonable y **multiplicar**. Los errores de cada factor tienden a compensarse.
Si para un factor solo sabes que está entre $a$ y $b$, la **media geométrica** $\sqrt{ab}$ es el valor central natural en escala logarítmica
(entre 100 y 10 000, el centro es 1000, no 5050).

**Ejemplo resuelto 2.** ¿Cuántas veces late un corazón humano en una vida? Unos $70$ latidos por minuto $\times\ 60\cdot24\cdot365 \approx 5\cdot10^5$
minutos al año $\times\ 80$ años $\approx 3\cdot10^9$. Orden de magnitud: mil millones largos. Una estimación así sirve para detectar errores de
cálculo groseros (si un programa da $10^{12}$, algo está mal) y para decidir si merece la pena medir con precisión.

## 6. Análisis dimensional

Una ecuación física debe ser **homogénea**: los dos lados con las mismas dimensiones (longitud L, masa M, tiempo T…). Eso permite comprobar
fórmulas y hasta deducirlas.

**Ejemplo resuelto 3.** ¿De qué depende la velocidad $v$ de las olas en aguas profundas? Si solo de $g$ (L T$^{-2}$) y de la longitud de onda
$\lambda$ (L): $v = k\,g^a\lambda^b$ con dimensiones L T$^{-1}$ = L$^{a+b}$ T$^{-2a}$. Igualando: $-2a = -1$ y $a + b = 1$, luego $a = b = \tfrac12$:
$v = k\sqrt{g\lambda}$. (La teoría da $k = 1/\sqrt{2\pi}$; el análisis dimensional no da la constante, pero sí cómo escala: olas cuatro veces más
largas van el doble de rápido.) El **teorema $\Pi$ de Buckingham** generaliza la idea a muchas variables.

## 7. Leer gráficos sin engañarse

- **Escala logarítmica**: distancias iguales son **factores** iguales. Un crecimiento exponencial se ve como una recta; su pendiente da el
  factor por unidad de tiempo.
- **Escala log-log**: una ley de potencias $y = cx^k$ se ve como una recta de pendiente $k$
  ($\log y = \log c + k\log x$): así se reconocen leyes de escala en física, biología o redes.
- **Ejes truncados**: si el eje no empieza en cero, una diferencia del 4 % puede parecer del 300 %. Mira siempre dónde empieza el eje.
- **Regresión a la media**: si dos medidas tienen correlación $\rho < 1$, a una primera medida extrema le sigue, de media, una segunda menos
  extrema (en unidades tipificadas, $\rho\,z$). Quien sacó la peor nota y «mejoró tras el castigo» quizá solo regresó a la media: sin grupo de
  control no se puede atribuir la mejora al castigo.

## 8. Evaluar la evidencia

**Tasa base.** La probabilidad de que algo sea cierto dado un indicio depende de lo frecuente que era antes (Bayes, [[mat-probabilidad]]).
Una alarma muy sensible en un sistema con pocos casos reales produce sobre todo falsas alarmas.

**Riesgo relativo y absoluto.** Si un fármaco baja el riesgo del $2\,\%$ al $1{,}5\,\%$, la reducción **relativa** es del $25\,\%$ (titular
llamativo), pero la **absoluta** es de $0{,}5$ puntos, y hay que tratar a $1/0{,}005 = 200$ personas para evitar un caso (**número necesario a
tratar**). Para decidir hacen falta los dos, y los efectos secundarios.

**Jerarquía de la evidencia** (de menos a más fiable, en general): anécdotas y opiniones; estudios de casos; estudios observacionales;
ensayos controlados aleatorizados; revisiones sistemáticas y metaanálisis de buenos ensayos. Un estudio aislado, pequeño o sin grupo de
control es un indicio, no una conclusión.

**Reproducibilidad.** La Open Science Collaboration (2015) repitió 100 estudios publicados en tres revistas de psicología: el 97 % de los
originales tenía resultados significativos, frente al 36 % de las réplicas, y los efectos replicados eran en media la mitad de grandes.
Ioannidis (2005) mostró con un modelo sencillo por qué: si en un campo se ponen a prueba muchas hipótesis falsas, con poca potencia y
flexibilidad en el análisis, una fracción grande de los resultados «significativos» son falsos positivos. La declaración de la American
Statistical Association (2016) recuerda que un p-valor no mide la probabilidad de que la hipótesis sea cierta ([[mat-estadistica-inferencia]]).
Lo que aumenta la confianza: **réplicas independientes**, preregistro, muestras grandes, efectos grandes y mecanismos plausibles.

**Sesgos cognitivos** que afectan a todo el mundo, incluidos los científicos: **confirmación** (buscar y recordar lo que apoya lo que ya
creemos), **superviviente** (estudiar solo los casos que llegaron al final: las empresas de éxito, los aviones que volvieron), **disponibilidad**
(sobrestimar lo que se recuerda fácilmente), **anclaje**. **Falacias** frecuentes: *post hoc* («ocurrió después, luego por eso»), ataque a la
persona en lugar del argumento, apelación a la autoridad fuera de su campo, falso dilema, hombre de paja.

**Lista para leer una afirmación.** ¿Quién lo dice y qué gana? ¿Cuál es la fuente primaria? ¿Qué tipo de estudio es, con cuántos sujetos y qué
grupo de control? ¿Se dan efectos absolutos, con incertidumbre? ¿Se ha replicado? ¿Qué observación lo refutaría? ¿Encaja con lo que ya se sabe
o exige pruebas extraordinarias?

## 9. Comprobar con un programa

```python
import math
import random

# Propagación por cuadratura frente a simulación de muchas medidas (ejemplo resuelto 1).
L, uL, T, uT = 0.823, 0.002, 1.820, 0.010
g = 4 * math.pi ** 2 * L / T ** 2
ug = g * math.hypot(uL / L, 2 * uT / T)
rng = random.Random(3)
muestras = [4 * math.pi ** 2 * rng.gauss(L, uL) / rng.gauss(T, uT) ** 2 for _ in range(200_000)]
media = sum(muestras) / len(muestras)
sd = math.sqrt(sum((x - media) ** 2 for x in muestras) / (len(muestras) - 1))
assert round(g, 2) == 9.81 and abs(sd - ug) / ug < 0.02

# Regresión a la media: con correlación 0.5, los que sacan z > 2 en la primera prueba
# sacan de media bastante menos en la segunda.
primera, segunda = [], []
for _ in range(300_000):
    z1 = rng.gauss(0, 1)
    z2 = 0.5 * z1 + math.sqrt(1 - 0.25) * rng.gauss(0, 1)
    if z1 > 2:
        primera.append(z1)
        segunda.append(z2)
m1, m2 = sum(primera) / len(primera), sum(segunda) / len(segunda)
assert abs(m2 - 0.5 * m1) < 0.03                       # E[z2 | z1] = ρ z1

# Tasa base: una prueba buena, una enfermedad rara.
p = 0.001 * 0.99 / (0.001 * 0.99 + 0.999 * 0.01)
assert 0.08 < p < 0.10
```

## 10. Errores típicos

- Aceptar una hipótesis porque «encaja» con los datos sin preguntarse qué la refutaría.
- Sacar conclusiones causales de una correlación observacional; olvidar el grupo de control.
- Sumar incertidumbres absolutas en un producto, o no combinarlas en cuadratura cuando son independientes.
- Dar resultados con más cifras de las que justifica la incertidumbre.
- En una estimación de Fermi, usar la media aritmética de cotas que difieren en órdenes de magnitud.
- Leer un gráfico sin mirar dónde empieza el eje ni si la escala es logarítmica.
- Ignorar la tasa base; confundir riesgo relativo con absoluto.
- Fiarse de un único estudio pequeño, sobre todo si su resultado es sorprendente.

## 11. Resumen

- Hipótesis falsable $\to$ predicción $\to$ contraste; una refutación pesa más que mil confirmaciones.
- Experimento: control, aleatorización, cegamiento, tamaño de muestra fijado antes, preregistro.
- GUM: tipo A ($s/\sqrt n$) y tipo B; propagación $u_y^2 = \sum(\partial f/\partial x_i)^2u_i^2$; absolutas en sumas, relativas en productos.
- Fermi: descomponer, estimar, multiplicar; media geométrica de las cotas. Análisis dimensional para comprobar y deducir.
- Gráficos: log, log-log, ejes truncados, regresión a la media.
- Evidencia: tasa base, riesgo absoluto y NNT, jerarquía de estudios, reproducibilidad, sesgos y falacias.

## Repaso: lo que debe quedarte dentro de un mes

1. Una afirmación científica prohíbe algo observable.
2. Solo un experimento aleatorizado con control permite concluir causalidad con confianza.
3. Sumas: absolutas en cuadratura; productos: relativas en cuadratura.
4. La media geométrica de las cotas en una estimación de órdenes de magnitud.
5. Tasa base y riesgo absoluto antes de creerte un titular.

## Siguiente

[[tro-lectura-tecnica]] (leer manuales, estándares y artículos y verificar fuentes), [[mat-estadistica-inferencia]] (las herramientas
cuantitativas del contraste) y `ing-medidas-laboratorio` (la incertidumbre en el banco de trabajo).
