---
id: proy-fis-nbody
title: "Proyecto: simulación gravitatoria de N cuerpos (energía y momentos, integradores simplécticos, solución de Kepler, orden de convergencia, conservación y Barnes-Hut)"
area: fisica
trunk_level: 12
kind: proyecto
prerequisites: [fis-mecanica-clasica, mat-analisis-numerico]
academic_sources:
  - "Hairer, E.; Lubich, C.; Wanner, G. Geometric Numerical Integration, 2ª ed. Springer, 2006 (integradores simplécticos, Verlet, composición de Yoshida)."
  - "Yoshida, H. Construction of higher order symplectic integrators. Physics Letters A 150(5–7), 1990; Chenciner, A.; Montgomery, R. A remarkable periodic solution of the three-body problem in the case of equal masses. Annals of Mathematics 152(3), 2000."
  - "Barnes, J.; Hut, P. A hierarchical O(N log N) force-calculation algorithm. Nature 324, 1986."
  - "Curtis, H. D. Orbital Mechanics for Engineering Students, 4ª ed. Butterworth-Heinemann, 2020 (ecuación de Kepler y funciones f y g de Lagrange)."
attachments: [prueba.sh]
exercises:
  - id: hito-1-energia-y-momentos
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `nbody energia ARCHIVO` lee un sistema (formato del §2) e imprime la energía cinética, la potencial (con suavizado), la total, el momento lineal, el momento angular respecto al origen y el centro de masas, con el formato numérico del §3. Un archivo con una masa no positiva, una línea mal formada o sin cuerpos termina con código 1.

      Comprueba con `bash prueba.sh ./nbody 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:48b0963097195f31573a0c019ffe3c0fdf5bec790b68b19d509a322dd45260eb"]
  - id: hito-2-fuerzas
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `nbody fuerzas ARCHIVO` imprime la aceleración de cada cuerpo, a_i = Σ_j G m_j (r_j − r_i) / (|r_j − r_i|² + ε²)^{3/2}, una línea por cuerpo.

      Comprueba con `bash prueba.sh ./nbody 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:db6929c4cc7de0a3dd881ad08249faa36c48ca5aea209be9e6fb0f0c7c4bfbef"]
  - id: hito-3-integradores
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `nbody integra ARCHIVO METODO dt PASOS` integra con `euler`, `euler-simplectico`, `verlet` (velocidad de Verlet: medio impulso, deriva, medio impulso), `rk4` o `yoshida4` (composición de Verlet de cuarto orden) e imprime posición y velocidad finales de cada cuerpo y el error relativo de energía. Un método desconocido termina con código 1.

      Comprueba con `bash prueba.sh ./nbody 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:20a3c861531e234ae178b4058b1a3e838b67f3443ace923a6327fbf40eb40421"]
  - id: hito-4-kepler
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `nbody kepler ARCHIVO t` resuelve analíticamente el problema de dos cuerpos: imprime la posición y la velocidad del cuerpo 2 respecto al 1 en el instante `t`, resolviendo la ecuación de Kepler (§5). Con un número de cuerpos distinto de dos, código 1.

      Comprueba con `bash prueba.sh ./nbody 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:062d38780c06f1cb4c13fb2ee9687bed49baa375d53e4e2da6e993607538dc83"]
  - id: hito-5-orden-de-convergencia
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** `nbody orden ARCHIVO METODO T N1 N2 …` integra hasta `T` con `N` pasos para cada `N`, mide el error de la posición relativa frente a la solución de Kepler y estima el orden del método entre resultados consecutivos (§5).

      Comprueba con `bash prueba.sh ./nbody 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:880bb3dd368db3491b82e257e82735b7f771fec5c866c6551b5f8a80a19f4af1"]
  - id: hito-6-conservacion
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** `nbody deriva ARCHIVO METODO dt PASOS` mide el máximo y el final del error relativo de energía y el máximo cambio del momento angular a lo largo de la integración (§6), para comparar métodos simplécticos y no simplécticos.

      Comprueba con `bash prueba.sh ./nbody 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:b50e6acf10da94fb7b80501884670b806c4cb83151fa3f6b19be1ff2160e0514"]
  - id: hito-7-barnes-hut
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 7
    prompt: |
      **Hito 7.** `nbody bh N SEMILLA θ ε` genera `N` cuerpos con el generador del §7, calcula las aceleraciones con un octárbol de Barnes-Hut con el criterio de apertura `lado/d < θ` y las compara con la suma directa: número de interacciones y errores relativos máximo y medio.

      Comprueba con `bash prueba.sh ./nbody 7`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:c64bcedbd8cd79b3409a9d22efbae7296170327672e5e372397ed383d22e1e41"]
---

Vas a escribir **`nbody`**, un simulador gravitatorio como los que usan la astrofísica y la mecánica celeste: calcula energías, momentos y fuerzas, integra el movimiento con cinco métodos, compara con la
solución exacta del problema de dos cuerpos, **mide** el orden de cada método y su capacidad de conservar la energía durante miles de órbitas, y acelera el cálculo de fuerzas con el algoritmo de
Barnes-Hut. El objetivo no es solo que "salgan órbitas": es entender por qué un integrador simpléctico de segundo orden conserva mejor la energía a largo plazo que un Runge-Kutta de cuarto orden, y cómo se
comprueba un código numérico con física y matemáticas, no a ojo. Aplica [[fis-mecanica-clasica]] y [[mat-analisis-numerico]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `nbody` en el lenguaje que quieras, con siete órdenes (`energia`, `fuerzas`, `integra`, `kepler`, `orden`, `deriva` y `bh`), una por hito, con el contrato exacto de los ejercicios. El adjunto
**`prueba.sh`** ejecuta tu programa sobre sistemas preparados (una órbita de Kepler excéntrica, otra inclinada y muy excéntrica, tres cuerpos en reposo, la coreografía en ocho de Chenciner y Montgomery, la
Tierra y la Luna con suavizado, y cinco cuerpos) y da un código por hito si todo coincide; con `-v` muestra cada salida.

## 2. Formato de los sistemas

Una línea por dato; `#` empieza un comentario. `G valor` (por defecto 1) y `suavizado ε` (por defecto 0) son opcionales; después, un cuerpo por línea con siete números: `m x y z vx vy vz` (la masa,
positiva). Cualquier otra línea es un error.

## 3. Formato numérico

- Los valores físicos se escriben con **7 cifras significativas** en notación científica de C (`%.6e`: `-1.287142e+00`), como el redondeo correcto de **x·(1 + 10⁻¹²)** (para que un empate exacto se resuelva
  igual en cualquier lenguaje) y `0.000000e+00` en lugar de `-0.000000e+00`.
- Los errores y las derivas se escriben con **2 cifras significativas** (`%.1e`); un valor por debajo de **10⁻¹²** se escribe `0.0e+00`. Por debajo de ese umbral solo hay **ruido de redondeo**: depende del
  orden en que se suman los términos, cambia entre lenguajes y compiladores, y no tiene significado físico. Saber dónde está ese suelo es parte del oficio de la simulación numérica.

## 4. Física y métodos

- **Energía**: K = Σ ½ m_i |v_i|², U = −Σ_{i<j} G m_i m_j / √(|r_j − r_i|² + ε²) (el potencial de Plummer, coherente con la fuerza suavizada). **Momento angular** L = Σ m_i r_i × v_i.
- **Integradores** (un paso de tamaño `dt`, con `a(x)` la aceleración de todos los cuerpos):
  - `euler`: x' = x + dt·v, v' = v + dt·a(x). Primer orden, no simpléctico: la energía deriva sin límite.
  - `euler-simplectico`: v' = v + dt·a(x), x' = x + dt·v'. Primer orden y simpléctico.
  - `verlet` (velocidad de Verlet o *leapfrog* en forma impulso-deriva-impulso): v½ = v + (dt/2)·a(x), x' = x + dt·v½, v' = v½ + (dt/2)·a(x'). Segundo orden, simpléctico, reversible en el tiempo.
  - `rk4`: Runge-Kutta clásico de cuarto orden sobre el sistema (x, v). No simpléctico.
  - `yoshida4`: tres pasos de Verlet de tamaños w₁·dt, w₀·dt y w₁·dt, con w₁ = 1/(2 − 2^{1/3}) y w₀ = −2^{1/3}/(2 − 2^{1/3}). Cuarto orden y simpléctico (Yoshida, 1990).
- `integra` imprime una línea `x y z vx vy vz` por cuerpo y después `dE e` con e = (E_final − E₀)/|E₀|.

## 5. El problema de dos cuerpos

El movimiento relativo r = r₂ − r₁ es una cónica con μ = G(m₁ + m₂). Para una órbita elíptica: el semieje a = 1/(2/r − v²/μ), el vector excentricidad e = ((v² − μ/r) r − (r·v) v)/μ, el movimiento medio
n = √(μ/a³), y la **ecuación de Kepler** M = E − e sen E, con M = M₀ + n t, que se resuelve con Newton (si e es grande, empieza en E = π). La posición en el instante t se obtiene con las funciones f y g de
Lagrange o con los elementos orbitales en el plano perifocal; las dos vías dan lo mismo y es un buen ejercicio programar ambas. `kepler ARCHIVO t` imprime `x y z vx vy vz` del cuerpo 2 respecto al 1.

`orden ARCHIVO METODO T N1 N2 …` integra hasta T con N pasos (dt = T/N) para cada N, calcula el error ‖r_numérico − r_Kepler‖ de la posición relativa, imprime `N error` para cada uno y, para cada par
consecutivo, `orden p` con p = log(error_anterior/error_siguiente) / log(N_siguiente/N_anterior), con un decimal (sumando 10⁻¹² antes de redondear). Un método de orden p reduce el error 2^p veces al doblar N.

## 6. Conservación a largo plazo

`deriva ARCHIVO METODO dt PASOS` integra y, tras **cada** paso, calcula el error relativo de energía |E − E₀|/|E₀| y el cambio relativo del momento angular ‖L − L₀‖/‖L₀‖ (absoluto si ‖L₀‖ < 10⁻¹², como en la
figura en ocho, cuyo momento angular total es nulo). Imprime `max_dE`, `final_dE` (con signo) y `max_dL`. Lo que verás, y lo que debes saber explicar: un método **simpléctico** conserva una "energía
modificada" muy próxima a la real, así que su error de energía **oscila acotado** durante millones de pasos, mientras que el de un método no simpléctico crece; y los métodos simplécticos conservan el momento
angular de una fuerza central **exactamente** (salvo redondeo), porque conservan las simetrías del sistema.

## 7. Barnes-Hut

`bh N SEMILLA θ ε` genera N cuerpos de masa 1/N con el generador congruencial de 64 bits de Exodus (s ← (6364136223846793005·s + 1442695040888963407) mod 2⁶⁴, u = ⌊s/2¹¹⌋/2⁵³, con s = SEMILLA al empezar):
para cada cuerpo, x = 2u − 1, y = 2u − 1, z = 2u − 1 (tres números seguidos), sin velocidades, y G = 1.

- **Árbol**: la raíz es el cubo centrado en el punto medio de la caja que contiene a los cuerpos, con lado igual a la mayor de sus tres dimensiones. Cada celda con más de un cuerpo se divide en 8 octantes; el
  octante de un cuerpo tiene el bit 0 a 1 si x ≥ x_centro, el bit 1 si y ≥ y_centro y el bit 2 si z ≥ z_centro. Las hojas tienen un cuerpo. Cada celda guarda su masa total y su centro de masas.
- **Recorrido** para el cuerpo i desde la raíz: una hoja con el propio cuerpo se ignora; una hoja con otro cuerpo da una interacción directa; una celda interna se **abre** (se visitan sus hijos) si contiene al
  cuerpo (bordes incluidos) o si **no** se cumple `lado < θ·d`, con d la distancia del cuerpo al centro de masas de la celda; si no se abre, se usa su masa en su centro de masas (una interacción). Todas las
  interacciones usan el suavizado ε.
- Imprime `interacciones` (el número total de interacciones de todos los cuerpos; un entero exacto), `directas` (N(N − 1)), y `error_max` y `error_medio` de ‖a_BH − a_directa‖/‖a_directa‖.

## 8. Arquitectura recomendada

Un tipo para el sistema (masas, posiciones y velocidades en arrays contiguos), una función de aceleraciones que se pueda cambiar (directa, Barnes-Hut), y los integradores como funciones que reciben la función de
aceleración: así, el mismo Verlet sirve para la suma directa y para el árbol. Pruebas propias de invariantes: con dos cuerpos, el momento lineal total no cambia; con `euler` y dt → 0 el error tiende a cero
linealmente; y debes poder explicar por qué `yoshida4` da un paso hacia atrás (w₀ < 0): ningún método de partición con todos los pasos positivos supera el orden 2 (Sheng, 1989; Suzuki, 1991).

## 9. Ampliaciones

Paso de tiempo adaptativo (y por qué rompe la simplecticidad), el integrador de Wisdom-Holman para sistemas planetarios, el sistema solar real con condiciones iniciales de JPL Horizons y la precesión del perihelio
de Mercurio con la corrección relativista a primer orden, colisión de dos galaxias de Plummer con Barnes-Hut a 10⁵ cuerpos en paralelo (Rust con Rayon, o la GPU), el método multipolar rápido, y la conexión con
`proy-fis-schrodinger`: el mismo método de partición (*split-operator*) es un integrador simpléctico de la ecuación de Schrödinger.

## 10. Recursos

Hairer, Lubich y Wanner para la teoría de la integración geométrica; el artículo de Yoshida; el de Barnes y Hut; Curtis para la mecánica orbital; y la [página de recursos de física](/recursos/fisica).
