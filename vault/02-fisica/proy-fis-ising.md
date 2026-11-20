---
id: proy-fis-ising
title: "Proyecto: el modelo de Ising en dos dimensiones (enumeración exacta, Metropolis, algoritmo de Wolff, solución de Onsager y transición de fase con el cumulante de Binder)"
area: fisica
trunk_level: 15
kind: proyecto
prerequisites: [fis-mecanica-estadistica-avanzada, mat-procesos-estocasticos]
academic_sources:
  - "Newman, M. E. J.; Barkema, G. T. Monte Carlo Methods in Statistical Physics. Oxford University Press, 1999; Landau, D. P.; Binder, K. A Guide to Monte Carlo Simulations in Statistical Physics, 5ª ed. Cambridge University Press, 2021."
  - "Onsager, L. Crystal Statistics. I. A Two-Dimensional Model with an Order-Disorder Transition. Physical Review 65, 1944; Yang, C. N. The Spontaneous Magnetization of a Two-Dimensional Ising Model. Physical Review 85, 1952."
  - "Metropolis, N. et al. Equation of State Calculations by Fast Computing Machines. J. Chem. Phys. 21, 1953; Wolff, U. Collective Monte Carlo Updating for Spin Systems. Phys. Rev. Lett. 62, 1989."
  - "Binder, K. Finite size scaling analysis of Ising model block distribution functions. Z. Phys. B 43, 1981."
attachments: [prueba.sh]
exercises:
  - id: hito-1-energia
    tier: 1
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 1
    prompt: |
      **Hito 1.** `ising energia ARCHIVO` lee una configuración (formato del §2) e imprime cuatro líneas: `E` (la energía E = −J·Σ⟨ij⟩ sᵢsⱼ − h·Σ sᵢ, calculada exactamente como −J·S − h·M con S la suma entera de los productos de vecinos y M la magnetización), `M` (entero), `e` = E/N y `m` = M/N, con el formato del §3. Un archivo con un carácter distinto de `+` y `-`, con un número de filas o de columnas distinto de L, con L < 2 o inexistente termina con código 1.

      Comprueba con `bash prueba.sh ./ising 1`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:90f9417dd4541f5d413e9deb30b940249c287d55a5920503562bc155bc67d8e6"]
  - id: hito-2-enumeracion-exacta
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 2
    prompt: |
      **Hito 2.** `ising exacto L T` (2 ≤ L ≤ 4, J = 1, h = 0, T > 0) enumera los 2^(L²) estados, agrupándolos por (E, M), y calcula por espín la energía media `e` = ⟨E⟩/N, la magnetización absoluta media `m` = ⟨|M|⟩/N, el calor específico `c` = (⟨E²⟩ − ⟨E⟩²)/(N·T²) y la susceptibilidad `chi` = (⟨M²⟩ − ⟨|M|⟩²)/(N·T). Usa pesos e^(−(E − E_min)/T) para no desbordar. Otros valores de L o una T no positiva terminan con código 1.

      Comprueba con `bash prueba.sh ./ising 2`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:428329a933c073bdb0fc2f248fa3c390b0740679898e0d8853c1a57c439647c1"]
  - id: hito-3-metropolis
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 3
    prompt: |
      **Hito 3.** `ising metropolis L T BARRIDOS TERM SEMILLA` empieza con todos los espines a +1 y hace BARRIDOS barridos secuenciales (sitio 0, 1, …, N − 1; el sitio i = y·L + x) con el algoritmo de Metropolis del §5: en cada sitio se extrae **siempre** un u del generador y se invierte el espín si ΔE ≤ 0 o si u < e^(−ΔE/T). Tras los TERM primeros barridos, mide E y M al final de cada barrido. Imprime `E` y `M` finales (enteros), `e_media` = ΣE/(n·N), `m_media` = Σ|M|/(n·N) y `aceptacion` (inversiones aceptadas entre BARRIDOS·N). Si TERM ≥ BARRIDOS, código 1.

      Comprueba con `bash prueba.sh ./ising 3`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:54fdc62633ca36d0c9c690591fd98831f22cebcb3420182255ac817de013891c"]
  - id: hito-4-wolff
    tier: 2
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 4
    prompt: |
      **Hito 4.** `ising wolff L T PASOS SEMILLA` empieza con todos los espines a +1 y hace PASOS pasos del algoritmo de Wolff con el orden exacto del §6: el sitio semilla es ⌊u·N⌋, se invierte y se apila; al desapilar un sitio se recorren sus vecinos en el orden derecha, izquierda, abajo, arriba, y por cada vecino con el espín original de la semilla se extrae un u y, si u < 1 − e^(−2/T), se invierte y se apila. Imprime `total` (suma de los tamaños de los grupos), `media` (total/PASOS), y `M` y `E` finales.

      Comprueba con `bash prueba.sh ./ising 4`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:300bbd75d9953a6bd3616d8a26bcac8b91eecc613f92ddc5c136709907ad8739"]
  - id: hito-5-onsager
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 5
    prompt: |
      **Hito 5.** `ising onsager T1 T2 …` imprime `Tc` = 2/ln(1 + √2) y, para cada temperatura, una línea `T e m` con la energía por espín exacta de Onsager, e = −coth(2β)·[1 + (2/π)(2·tanh²(2β) − 1)·K(κ)] con κ = 2·sinh(2β)/cosh²(2β) y K la integral elíptica completa de primera especie (calculada con la media aritmético-geométrica: K = π/(2·AGM(1, √(1 − κ²)))), y la magnetización espontánea de Yang, m = (1 − sinh(2β)⁻⁴)^(1/8) por debajo de Tc y 0 por encima. Sin temperaturas, código 1.

      Comprueba con `bash prueba.sh ./ising 5`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:1432f1b01f2f3865986c75d4c081a9b04b8244df28268845f55419c0d2d3db6a"]
  - id: hito-6-cumulante-de-binder
    tier: 3
    type: codigo
    language: cualquiera
    harness: prueba.sh
    stage: 6
    prompt: |
      **Hito 6.** `ising binder L T BARRIDOS TERM SEMILLA` hace la misma simulación de Metropolis que el hito 3 y, con las medidas tras la termalización, imprime el cumulante de Binder `U4` = 1 − ⟨M⁴⟩/(3⟨M²⟩²) y la susceptibilidad `chi` = (⟨M²⟩ − ⟨|M|⟩²)/(N·T). Las sumas de potencias de M son enteras: calcúlalas sin pérdida de precisión.

      Comprueba con `bash prueba.sh ./ising 6`.

      Respuesta: el código de 12 caracteres que imprime la prueba cuando todos los casos pasan.
    answers: ["sha256:a88043883289c2f87dfe93db895d88aa6071ad19899bf4fbaaa3bc0a4d46ae57"]
---

Vas a escribir **`ising`**, un laboratorio numérico del modelo más estudiado de la física estadística: espines ±1 en una red cuadrada que prefieren alinearse con sus vecinos. Con un modelo tan simple aparece
una **transición de fase** de verdad: por debajo de una temperatura crítica el sistema se imana espontáneamente; por encima, el desorden térmico gana. Lo calcularás de cuatro formas que se comprueban entre sí:
enumeración exacta de todos los estados en redes diminutas, simulación de Monte Carlo con Metropolis, el algoritmo de grupos de Wolff (que vence la ralentización crítica) y la solución exacta de Onsager para la
red infinita; y localizarás la temperatura crítica con el cumulante de Binder, la técnica estándar de escalado de tamaño finito. Aplica [[fis-mecanica-estadistica-avanzada]] y [[mat-procesos-estocasticos]].

## 1. Qué vas a construir y cómo se evalúa

Un ejecutable `ising` en el lenguaje que quieras, con seis órdenes (`energia`, `exacto`, `metropolis`, `wolff`, `onsager` y `binder`), una por hito, con el contrato exacto de los ejercicios. El adjunto
**`prueba.sh`** ejecuta tu programa sobre configuraciones y parámetros preparados y da un código por hito si todo coincide; con `-v` muestra cada salida. Las simulaciones usan el generador congruencial de
64 bits de Exodus y un orden de operaciones fijado, así que son **deterministas**: si tu programa hace exactamente lo especificado, obtendrás exactamente los mismos números.

## 2. El modelo y el formato de las configuraciones

En una red L × L con condiciones periódicas (el vecino derecho del último de una fila es el primero), con N = L² espines sᵢ = ±1 y el sitio i = y·L + x:

```
E = −J · Σ⟨ij⟩ sᵢ sⱼ − h · Σᵢ sᵢ,     M = Σᵢ sᵢ
```

La suma ⟨ij⟩ recorre cada par de vecinos una vez: para cada sitio, su vecino de la derecha y el de abajo. Un archivo de configuración tiene una primera línea `L J h` y después L filas de L caracteres `+` o `-`.
Las líneas vacías se ignoran; cualquier otra cosa es un error.

## 3. Formato numérico

Los valores reales se escriben con `%.6e` de C (`-1.745565e+00`) como el redondeo correcto de **x·(1 + 10⁻¹²)** (para que un empate exacto se resuelva igual en cualquier lenguaje) y `0.000000e+00` para el cero;
los enteros, sin decimales. El generador: s ← (6364136223846793005·s + 1442695040888963407) mód 2⁶⁴ y u = ⌊s/2¹¹⌋/2⁵³, con s = SEMILLA al empezar.

## 4. Lo que hay que saber de física

Con J > 0 (ferromagnético) y h = 0, el estado fundamental tiene todos los espines alineados (E = −2N) y a temperatura infinita están al azar. En el equilibrio, cada configuración tiene probabilidad
e^(−E/T)/Z (Boltzmann, con k_B = 1). Onsager (1944) resolvió exactamente la red infinita: hay una transición a **Tc = 2/ln(1 + √2) ≈ 2,269** en la que el calor específico diverge logarítmicamente; Yang
(1952) obtuvo la magnetización espontánea m = (1 − sinh(2β)⁻⁴)^(1/8), que se anula en Tc con exponente β = 1/8. Cerca de Tc la longitud de correlación diverge como |T − Tc|^(−ν) con ν = 1 y la susceptibilidad
como |T − Tc|^(−γ) con γ = 7/4. En una red finita no hay transición abrupta: todo se suaviza, y aprender a sacar las propiedades del sistema infinito de redes finitas es el corazón del proyecto.

## 5. Metropolis

Un algoritmo de Monte Carlo genera una cadena de Markov cuya distribución estacionaria es la de Boltzmann. Metropolis (1953) propone invertir un espín y acepta con probabilidad mín(1, e^(−ΔE/T)), lo que
cumple el **balance detallado**. Con h = 0, invertir sᵢ cuesta ΔE = 2·sᵢ·Σ vecinos ∈ {−8, −4, 0, 4, 8}: precalcula e^(−4/T) y e^(−8/T). El orden exacto del contrato: barridos secuenciales sobre i = 0, …, N − 1;
en cada sitio se extrae un u (aunque no haga falta) y se invierte si ΔE ≤ 0 o si u < e^(−ΔE/T). Actualiza E y M de forma incremental (no recalcules todo en cada paso). Descarta los barridos de **termalización** antes
de medir, y recuerda que las medidas sucesivas están **correlacionadas**: el número efectivo de muestras independientes es mucho menor que el de barridos, sobre todo cerca de Tc (ralentización crítica).

## 6. Wolff

Cerca de Tc los dominios son enormes y Metropolis, que invierte espines de uno en uno, tarda muchísimo en cambiarlos. **Wolff** (1989) construye un **grupo** de espines alineados y lo invierte entero: desde una semilla,
cada vecino con el mismo espín se añade con probabilidad p = 1 − e^(−2J/T); esta elección hace que la inversión del grupo se acepte **siempre** y que se cumpla el balance detallado. Su tiempo de correlación crece
mucho más despacio con L que el de Metropolis. En el contrato: la semilla es ⌊u·N⌋; se invierte y se apila; mientras la pila no esté vacía, se desapila el último y se miran sus vecinos en el orden derecha, izquierda,
abajo, arriba; por cada uno que conserve el espín original de la semilla se extrae un u y, si u < p, se invierte y se apila. A temperatura alta los grupos son pequeños; a baja, abarcan casi toda la red.

## 7. Enumeración exacta

Con L ≤ 4 hay como mucho 2¹⁶ = 65 536 estados: se pueden recorrer todos, acumular cuántos hay con cada (E, M) (la **densidad de estados**) y calcular cualquier media exacta a cualquier temperatura. Es la
referencia perfecta para comprobar un Monte Carlo en redes pequeñas, y muestra los efectos de tamaño finito: en L = 4 el máximo del calor específico está lejos de Tc y es pequeño. Para no desbordar
exponenciales a baja temperatura, usa pesos e^(−(E − E_min)/T).

## 8. Encontrar Tc: el cumulante de Binder

El cumulante U₄ = 1 − ⟨M⁴⟩/(3⟨M²⟩²) vale 2/3 en la fase ordenada (M ≈ ±M₀) y tiende a 0 en la desordenada (M gaussiana). Según la teoría del escalado de tamaño finito (Binder, 1981), en Tc depende muy poco
de L: las curvas U₄(T) de varios tamaños **se cruzan** en Tc, sin necesidad de conocer los exponentes. Con las medidas del hito 6 puedes trazar esas curvas para L = 4, 8, 16 y estimar Tc; y con la susceptibilidad
en Tc, que crece como L^(γ/ν), estimar γ/ν = 7/4. Las sumas de M² y M⁴ son enteras: acumúlalas en enteros (o en coma flotante, con valores muy por debajo de 2⁵³) para no perder precisión.

## 9. Arquitectura recomendada

- Un módulo de red (índices, vecinos precalculados, energía y magnetización), el generador, y un módulo por algoritmo.
- Pruebas propias: Metropolis y Wolff deben reproducir, en L = 4 y con muchos barridos, las medias exactas del hito 2 dentro de su error estadístico (estímalo con bloques); la energía de una configuración
  totalmente alineada es −2N; invertir todos los espines no cambia E con h = 0.
- Si el lenguaje lo permite, compila con optimización: los hitos 3 y 6 hacen millones de actualizaciones.

## 10. Ampliaciones

Estima tiempos de autocorrelación integrados y compara Metropolis con Wolff en función de L (exponente dinámico z ≈ 2,17 frente a ≈ 0,25); haz el colapso de datos de m·L^(β/ν) frente a (T − Tc)·L^(1/ν); añade
un campo h y dibuja ciclos de histéresis; implementa la repesada de histogramas de Ferrenberg y Swendsen para obtener curvas continuas en T de una sola simulación; o paraleliza con la descomposición en
tablero de ajedrez.

## 11. Recursos

Newman y Barkema (capítulos 3 y 4, Metropolis y Wolff), Landau y Binder (escalado de tamaño finito), el artículo de Onsager y el de Yang para la solución exacta, y [[fis-mecanica-estadistica-avanzada]] para la teoría
de las transiciones de fase.
