---
id: lab-rob-fusion-sensores
title: "Laboratorio: reconstruir la trayectoria de un robot con encoders, giróscopo y marcas en el suelo (odometría, sesgo, patinamiento y fusión)"
area: robotica
trunk_level: 16
kind: laboratorio
prerequisites: [rob-sensores-actuadores, rob-cinematica]
academic_sources:
  - "Borenstein, J.; Feng, L. Measurement and Correction of Systematic Odometry Errors in Mobile Robots. IEEE Transactions on Robotics and Automation 12(6), 1996 (UMBmark: radios distintos y batalla mal calibrada)."
  - "Siegwart, R.; Nourbakhsh, I. R.; Scaramuzza, D. Introduction to Autonomous Mobile Robots, 2ª ed. MIT Press, 2011 (cap. 5: odometría y su propagación de errores)."
  - "Woodman, O. J. An introduction to inertial navigation. Informe técnico UCAM-CL-TR-696, Universidad de Cambridge, 2007; Groves, P. D. Principles of GNSS, Inertial, and Multisensor Integrated Navigation Systems, 2ª ed. Artech House, 2013."
  - "Thrun, S.; Burgard, W.; Fox, D. Probabilistic Robotics. MIT Press, 2005 (modelos de movimiento por odometría y corrección con medidas absolutas)."
attachments: [odometria.csv, imu.csv, marcas.csv, almacen.csv]
ctf_flag: "sha256:00dfea906bc9929956fdb2ad96647f194827332f6e16cd3dbee54e1239b76cb2"
exercises:
  - id: sesgo-del-giroscopo
    tier: 1
    prompt: |
      El robot está quieto los 3 primeros segundos. ¿Cuánto vale el sesgo del giróscopo, la media de gz en las muestras con t < 3 s?

      Respuesta: en mrad/s, con **1 decimal**.
    answers: ["sha256:4f36b20a12f674948711867f480618085afbbc9df556b577309ac6a3702c419e"]
  - id: distancia-recorrida
    tier: 1
    prompt: |
      Con los parámetros nominales (radio 0,050 m, 2048 cuentas por vuelta), ¿qué distancia recorre el centro del robot según los encoders, Σ|Δs| con Δs = (Δs_izq + Δs_der)/2 en cada intervalo de la odometría?

      Respuesta: en metros, con **2 decimales**.
    answers: ["sha256:f411d3868c0707eac7df107df87f915e8977dcea08878e199e53a7d5546bee74"]
  - id: error-solo-con-encoders
    tier: 2
    prompt: |
      Integra la pose solo con los encoders (§2: Δθ = (Δs_der − Δs_izq)/0,300 y el avance con el rumbo a mitad de intervalo), desde (0, 0) mirando al eje x. El robot acaba en el muelle: ¿a qué distancia del origen termina la estimación?

      Respuesta: en metros, con **2 decimales**.
    answers: ["sha256:228a2b2024dc58c860ca5e7220a26f9d4a1829ecf439e600589f6f39895edc76"]
  - id: error-con-giroscopo
    tier: 2
    prompt: |
      Repite la integración tomando cada Δθ del giróscopo sin sesgo (integrado por trapecios e interpolado linealmente en los instantes de la odometría) y Δs de los encoders. ¿A qué distancia del origen termina ahora?

      Respuesta: en metros, con **2 decimales**.
    answers: ["sha256:4469f737b2dd804071928d213943ec492df9f8de7007c67001699a846cdccebb"]
  - id: inicio-del-patinamiento
    tier: 2
    prompt: |
      ¿En qué instante empieza el primer intervalo de la odometría en el que el giro que dicen los encoders y el que dice el giróscopo difieren en más de 0,3 rad/s? ¿Qué le pasa ahí al robot?

      Respuesta: en segundos, con **2 decimales**.
    answers: ["sha256:1bea98b5f4fb1df1ca74292b71391a53c806629fbc1337b441c17eb1fcd2b444"]
  - id: estanteria-segun-los-encoders
    tier: 2
    prompt: |
      El robot se para unos segundos a recoger una caja (el intervalo sin cuentas nuevas más largo que no es ni el del principio ni el del final). Según la estimación solo con encoders, ¿en qué estantería de `almacen.csv` (la más cercana) se paró? ¿Te lo crees?

      Respuesta: el nombre de la estantería, como `A1`.
    answers: ["sha256:2f5da6e9921baa794759ee9f4b362555bcb3c1646eb51f671253b5d7d710b75e"]
hints:
  - "Dos fuentes de rumbo con defectos opuestos. Los encoders no derivan con el tiempo, pero cualquier diferencia entre las ruedas (radios distintos, una batalla mal medida, una rueda que patina) se convierte en un giro que el robot no hizo, y ese error de rumbo se multiplica por toda la distancia que queda. El giróscopo mide el giro de verdad, pero su sesgo, integrado, crece linealmente con el tiempo: hay que estimarlo con el robot quieto y restarlo. Lo sensato es tomar la distancia de los encoders y el giro del giróscopo, y corregir con una medida absoluta cuando la haya."
  - "Δs_rueda = 2π·0,05·Δcuentas/2048; Δs = (Δs_izq + Δs_der)/2; Δθ_encoders = (Δs_der − Δs_izq)/0,300; x += Δs·cos(θ + Δθ/2), y += Δs·sin(θ + Δθ/2), θ += Δθ. El giróscopo va a 100 Hz y los encoders a 50 Hz: integra el giróscopo (trapecios) y obtén su ángulo en los instantes de los encoders por interpolación lineal. Cuando el instante de un intervalo de odometría coincide con el de una marca, sustituye la pose por la medida."
  - "Borenstein y Feng (1996) explican los errores sistemáticos de la odometría y cómo calibrarlos con un recorrido cuadrado; Woodman (2007), el sesgo y la deriva de los giróscopos MEMS; Siegwart et al. (cap. 5), la propagación de la incertidumbre de la odometría."
---

> Un almacén quiere quitar la banda magnética que guía a sus vehículos autónomos (AGV) y sustituirla por navegación con sus propios sensores. Para evaluar la idea, un AGV ha hecho una ruta real (del
> muelle de carga a una estantería, una parada para recoger y vuelta al muelle) siguiendo la banda, mientras se registraban sus encoders, su giróscopo y las marcas de posición del suelo por las que pasaba.
> Los registros no dicen en qué estantería paró: tienes que deducirlo tú.

Con los registros reconstruirás la trayectoria de tres maneras y verás por qué ningún robot real navega solo con la odometría de las ruedas. Aplica la cinemática diferencial de [[rob-cinematica]] y lo que
sabes de los sensores en [[rob-sensores-actuadores]]. Los datos son simulados con los defectos típicos de un robot real.

## 1. Los artefactos

- **`odometria.csv`**: cuentas acumuladas de los encoders de las dos ruedas, a 50 Hz. Parámetros nominales del fabricante: radio de rueda 0,050 m, batalla (distancia entre ruedas) 0,300 m y 2048 cuentas por
  vuelta.
- **`imu.csv`**: velocidad de giro del eje vertical, a 100 Hz.
- **`marcas.csv`**: cuando la cámara inferior ve una marca del suelo, la pose medida (x, y, θ), con un error de alrededor de 1 cm.
- **`almacen.csv`**: el plano con el punto de recogida de cada estantería. El muelle está en (0, 0) y el robot sale mirando al eje x.

La **flag** es `EXODUS{estanteria_XX}`, con la estantería donde de verdad se paró: la más cercana a la estimación con giróscopo y marcas en el instante de la parada.

## 2. El método

1. **Sesgo**: la media del giróscopo con el robot quieto (t < 3 s).
2. **Odometría**: para cada intervalo de los encoders, Δs_rueda = 2π·r·Δcuentas/N; el centro avanza Δs = (Δs_izq + Δs_der)/2 y gira Δθ = (Δs_der − Δs_izq)/b. La pose se integra con el rumbo a mitad de
   intervalo: x += Δs·cos(θ + Δθ/2), y += Δs·sin(θ + Δθ/2), θ += Δθ.
3. **Giróscopo**: su velocidad menos el sesgo, integrada con la regla de los trapecios, da un ángulo; su valor en los instantes de la odometría (interpolación lineal) da un Δθ por intervalo que sustituye al de los
   encoders.
4. **Marcas**: en el intervalo que termina en el instante de una marca, la pose se sustituye por la medida. Es la versión más sencilla de una corrección absoluta; un filtro de Kalman haría lo mismo pesando
   cada fuente por su incertidumbre (como en [[proy-rob-robot-movil]]).
5. **Parada**: el intervalo sin cuentas nuevas más largo que no está ni al principio ni al final.

## 3. Qué deberías concluir

- **La odometría pura falla por el rumbo.** Un error de radio de menos del 1 % o unos milímetros de batalla parecen inofensivos, pero cada uno se convierte en un giro fantasma, y un error de rumbo de pocos grados
  desplaza el final de un recorrido de 18 m varios metros. Si además una rueda **patina** (suelo mojado), la odometría «ve» un giro brusco que no ocurrió. Es justo lo que mide el método UMBmark de Borenstein y
  Feng para calibrar los radios y la batalla.
- **El giróscopo arregla el rumbo, pero solo si se le quita el sesgo.** Un sesgo de 10 mrad/s (medio grado por segundo) integrado durante un minuto son más de 30°. Estimarlo con el robot quieto es el paso más
  barato y más importante.
- **Comparar sensores detecta averías.** Donde el giro de los encoders y el del giróscopo no cuadran, algo pasa: aquí, un patinamiento. Un sistema real usa esa comprobación para no fiarse de la odometría en
  ese tramo.
- **Las medidas absolutas acotan el error.** Con las marcas, el error deja de crecer con la distancia: es la idea de toda la fusión de sensores (GNSS con inercial, SLAM con odometría).

## 4. Para ir más allá

Calibra los parámetros reales de la odometría (los dos radios y la batalla) a partir de los propios registros, usando las marcas como referencia; sustituye el reinicio en las marcas por un filtro de Kalman
extendido con la covarianza de la odometría; y estima el sesgo del giróscopo también en movimiento, añadiéndolo al estado del filtro.
