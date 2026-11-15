---
id: lab-fis-datos-experimentales
title: "Laboratorio: ajustar modelos a medidas con incertidumbre (péndulo, desintegración con fondo y calibración de un termopar)"
area: fisica
trunk_level: 14
kind: laboratorio
prerequisites: [ing-medidas-laboratorio, mat-estadistica-matematica]
academic_sources:
  - "Taylor, J. R. An Introduction to Error Analysis, 2ª ed. University Science Books, 1997; Hughes, I. G.; Hase, T. P. A. Measurements and their Uncertainties. Oxford University Press, 2010."
  - "Bevington, P. R.; Robinson, D. K. Data Reduction and Error Analysis for the Physical Sciences, 3ª ed. McGraw-Hill, 2003 (mínimos cuadrados ponderados y χ²)."
  - "Baker, S.; Cousins, R. D. Clarification of the use of chi-square and likelihood functions in fits to histograms. Nuclear Instruments and Methods 221, 1984; Particle Data Group, Review of Particle Physics, capítulo «Statistics»."
  - "JCGM 100:2008. Evaluation of measurement data — Guide to the expression of uncertainty in measurement (GUM). BIPM, 2008."
attachments: [pendulo.csv, desintegracion.csv, termopar.csv]
ctf_flag: "sha256:7ebca5ae1905a46005f5bc906a2adc6ee4de459a2556192f6d3cde417043a251"
exercises:
  - id: fila-mal-cronometrada
    tier: 1
    prompt: |
      En `pendulo.csv`, ajusta T² = a·L + b por mínimos cuadrados ponderados (T = t20/20, σ_T = σ_t20/20 y σ(T²) = 2T·σ_T). ¿Qué fila de datos (contando desde 1, sin la cabecera) tiene el residuo normalizado (T² − ajuste)/σ(T²) más grande en valor absoluto? Mira su valor: ¿qué le pasó a esa medida?

      Respuesta: el número de fila.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: aceleracion-de-la-gravedad
    tier: 2
    prompt: |
      Repite el ajuste sin esa fila. Con g = 4π²/a, ¿cuánto vale g?

      Respuesta: en m/s², con **3 decimales**.
    answers: ["sha256:3d7963cf2d8e951bd981e044343af2fbdfb516ed427a4d0183a9b69ef0126e94"]
  - id: incertidumbre-de-g
    tier: 2
    prompt: |
      ¿Cuál es la incertidumbre de g que se deduce de la covarianza del ajuste (sin reescalarla por χ²/ν), σ_g = 4π²·σ_a/a²?

      Respuesta: en m/s², con **3 decimales**.
    answers: ["sha256:378e8baa3a4e8ecca71f21baed2159d4f49a3f570a639bb74443758a3c41cb51"]
  - id: radio-de-la-bola
    tier: 2
    prompt: |
      La longitud se midió hasta el borde superior de la bola, así que la longitud efectiva es L + δ. ¿Cuánto vale δ = b/a?

      Respuesta: en centímetros, con **1 decimal**.
    answers: ["sha256:77ac319bfe1979e2d799d9e6987e65feb54f61511c03552ebae990826c208590"]
  - id: semivida
    tier: 2
    prompt: |
      En `desintegracion.csv`, ajusta μ(t) = N₀·e^(−λt) + B a las cuentas por **máxima verosimilitud de Poisson** (minimiza Σ [μᵢ − cᵢ·ln μᵢ]). ¿Cuánto vale la semivida T½ = ln 2/λ?

      Respuesta: en segundos, con **1 decimal**.
    answers: ["sha256:9691b61a2349c5052a5206f0b2fd9acb9c8ace8ec7942dffa0b5d0d323fd360a"]
  - id: incertidumbre-de-la-semivida
    tier: 3
    prompt: |
      Calcula la incertidumbre de T½ con la inversa de la matriz hessiana de −ln L en el mínimo (la información observada), propagando a T½: σ = ln 2·σ_λ/λ².

      Respuesta: en segundos, con **1 decimal**.
    answers: ["sha256:f491e65f8d4b8dbec7621fcedaf1b7a4b21bf6cfe8070f407548a6334dc55ccd"]
  - id: fondo-segun-el-metodo
    tier: 3
    prompt: |
      Ajusta ahora el mismo modelo minimizando el χ² de Neyman, Σ (cᵢ − μᵢ)²/max(cᵢ, 1). ¿Cuánto vale el fondo B por intervalo con cada método? ¿Por qué el de Neyman sale más bajo?

      Respuesta: `B_verosimilitud;B_Neyman`, los dos con **1 decimal**.
    answers: ["sha256:b38913bb0c3f060c6991ca4dc6d65c2d21c36861dcdc9db293c0049da50e33de"]
  - id: recta-o-parabola
    tier: 2
    prompt: |
      En `termopar.csv`, ajusta V(T) con una recta y con una parábola (mínimos cuadrados ponderados con σ_V). ¿Cuánto vale χ²/ν en cada caso?

      Respuesta: `recta;parabola`, el de la recta **sin decimales** y el de la parábola con **2 decimales**.
    answers: ["sha256:f08eac620f68f14cbb57d4cfe912cf8b84cca898a1e2d91e95fc67d9c65cd324"]
  - id: termino-cuadratico
    tier: 2
    prompt: |
      ¿Cuánto vale el coeficiente del término cuadrático de la parábola?

      Respuesta: en µV/°C², con **4 decimales**.
    answers: ["sha256:03e10c2e30ad54c2460c0129d17a096ee6495337d92c055bbd974b2cb87c61eb"]
hints:
  - "Todo ajuste es minimizar algo. Con errores gaussianos conocidos, χ² = Σ ((yᵢ − f(xᵢ))/σᵢ)²: si el modelo es lineal en los parámetros, la solución es exacta, p = (XᵀWX)⁻¹XᵀWy con W = diag(1/σᵢ²), y (XᵀWX)⁻¹ es su covarianza. Con cuentas (Poisson), maximiza la verosimilitud: −ln L = Σ (μᵢ − cᵢ ln μᵢ) + constante. Un buen ajuste tiene χ²/ν ≈ 1; mucho mayor indica un modelo malo o errores subestimados; mucho menor, errores sobreestimados."
  - "En Python: numpy.linalg para las ecuaciones normales, scipy.optimize.minimize para −ln L y scipy.optimize.curve_fit (con absolute_sigma=True) para el χ² de Neyman. En R: lm(y ~ x, weights = 1/s^2) y vcov(fit)/summary(fit)$sigma^2 para la covarianza sin reescalar, y optim + optimHess. Cuidado con las hessianas numéricas con el paso por defecto."
  - "Taylor (caps. 8 y 12), Bevington (caps. 6 a 8), el capítulo de estadística del Particle Data Group y el artículo de Baker y Cousins (1984) sobre por qué no se ajustan histogramas con σ² = cuentas."
---

> En el laboratorio de física de primer curso se han tomado tres series de medidas: el periodo de un péndulo para varias longitudes, las cuentas de un contador Geiger frente a una fuente de vida corta y la
> calibración de un termopar. Tienes que dar g, la semivida y la curva de calibración **con su incertidumbre**, y decidir qué medidas y qué modelos son de fiar. Las medidas son simuladas con ruido realista
> y algunos de los errores típicos de un laboratorio de verdad.

Medir es estimar: un número sin incertidumbre no dice nada, y un ajuste sin una comprobación de su calidad tampoco. Este laboratorio aplica [[ing-medidas-laboratorio]] y la estadística de
[[mat-estadistica-matematica]] a los tres casos más frecuentes: un modelo lineal con errores gaussianos, un recuento con estadística de Poisson y la elección entre dos modelos.

## 1. Los artefactos

- **`pendulo.csv`**: para 10 longitudes del hilo L (medidas hasta el borde superior de la bola), el tiempo de 20 oscilaciones con su incertidumbre. Para oscilaciones pequeñas, T = 2π√(ℓ/g) con ℓ la
  longitud hasta el centro de la bola, así que T² es lineal en L: T² = (4π²/g)·L + (4π²/g)·δ.
- **`desintegracion.csv`**: cuentas en 60 intervalos de 10 s; el modelo es una exponencial más un fondo constante.
- **`termopar.csv`**: tensión de un termopar a 21 temperaturas de referencia, con σ_V = 5 µV.

La **flag** es `EXODUS{g;T½}` con g en m/s² con 3 decimales (tras quitar la medida mala) y la semivida por máxima verosimilitud en segundos con 1 decimal, separados por punto y coma.

## 2. Qué deberías concluir

- **Mira los residuos antes de creerte un ajuste.** Un punto a 17σ no es mala suerte: es un error de procedimiento (aquí, contar 19 oscilaciones creyendo que eran 20, que da un periodo un 5 % menor). Se
  identifica, se explica y se excluye **declarándolo** en el informe; nunca se borra un punto solo porque «estorba». Sin él, χ²/ν es del orden de 1 y g coincide con el valor de referencia dentro de su
  incertidumbre. La ordenada en el origen no es un estorbo: mide una magnitud física (la distancia al centro de la bola).
- **Con cuentas bajas, usa la verosimilitud de Poisson.** El χ² de Neyman, con σᵢ² = cᵢ, da más peso a los intervalos que por azar salieron **bajos**, y por eso subestima sistemáticamente lo que se mide con
  pocas cuentas: aquí, el fondo. Con estos datos la diferencia parece pequeña, pero repitiéndolo con muchas simulaciones el sesgo es de un 40 % del fondo (Baker y Cousins, 1984). La máxima verosimilitud de
  Poisson no tiene ese problema y su hessiana da las incertidumbres. Y ojo con las **hessianas numéricas**: la de `optim(…, hessian = TRUE)` de R, con su paso por defecto, da aquí una incertidumbre un 5 % menor
  que la exacta; compruébala siempre con la analítica o con pasos más pequeños.
- **χ²/ν decide entre modelos.** Una recta con χ²/ν ≈ 1000 está mal sin discusión, aunque «a ojo» se parezca a los datos: el término cuadrático es pequeño pero los datos son lo bastante precisos para verlo.
  La parábola da χ²/ν ≈ 1 y su p-valor es razonable. Añadir parámetros siempre baja χ²; lo que cuenta es si baja mucho más de lo que se espera por azar (un grado de libertad menos).

## 3. Para el informe

Cada resultado con su incertidumbre y sus cifras significativas coherentes (por ejemplo, g = 9,81 ± 0,05 m/s², y no 9,8123456 m/s²), el valor de χ²/ν de cada ajuste, los puntos excluidos y por qué, y una frase sobre las
fuentes de error sistemático que el ajuste **no** recoge (la aproximación de ángulos pequeños, el tiempo de reacción en el cronómetro, el tiempo muerto del contador).

## 4. Para ir más allá

Simula mil veces la desintegración con los parámetros que obtuviste y comprueba el sesgo del fondo con cada método y la cobertura de los intervalos ±σ (¿contienen al valor verdadero el 68 % de las veces?);
ajusta el péndulo con errores también en L (el método de la varianza efectiva o la regresión de York); y estima la incertidumbre de g por **bootstrap** remuestreando los puntos.
