---
id: sec-gestion-riesgo
title: "Gestión del riesgo y gobierno de la seguridad: análisis cualitativo y cuantitativo (ALE, FAIR, Monte Carlo), modelado de amenazas, marcos (ISO 27001/27005, NIST CSF 2.0, CIS, ENS), continuidad, respuesta a incidentes y obligaciones legales"
area: ciberseguridad
trunk_level: 18
prerequisites: [sec-metodologia-pentest, sec-cloud-contenedores, mat-probabilidad]
academic_sources:
  - "NIST. The NIST Cybersecurity Framework (CSF) 2.0, CSWP 29, 2024; NIST SP 800-30 Rev. 1, Guide for Conducting Risk Assessments, 2012; NIST SP 800-61 Rev. 3, Incident Response Recommendations and Considerations for Cybersecurity Risk Management, 2025."
  - "ISO/IEC 27001:2022 (sistemas de gestión de la seguridad de la información) e ISO/IEC 27005:2022 (gestión del riesgo); CIS Critical Security Controls v8; Real Decreto 311/2022 (Esquema Nacional de Seguridad)."
  - "Freund, J.; Jones, J. Measuring and Managing Information Risk: A FAIR Approach. Butterworth-Heinemann, 2014; Hubbard, D. W.; Seiersen, R. How to Measure Anything in Cybersecurity Risk, 2ª ed. Wiley, 2023; Shostack, A. Threat Modeling: Designing for Security. Wiley, 2014."
  - "Reglamento (UE) 2016/679 (RGPD), art. 33; Directiva (UE) 2022/2555 (NIS2), art. 23; CISA, BOD 22-01; consultados en noviembre de 2026."
exercises:
  - id: perdida-esperada
    tier: 1
    prompt: |
      Un servidor de comercio electrónico vale 200 000 € (activo, datos y negocio); un ransomware destruiría el 30 % de ese valor y se estima que ocurrirá una vez cada dos años. ¿Cuál es la pérdida esperada por incidente (SLE) y la anual (ALE)?

      Respuesta: `SLE;ALE` en euros, sin separadores.
    answers: ["sha256:a3d8a5e8b49ad3ee6e6b93eccc775ecaf97aae2062dfc1f762a2054ad23de7df"]
  - id: retorno-de-la-inversion
    tier: 2
    prompt: |
      Un control que cuesta 8000 € al año reduce la frecuencia anual del caso anterior de 0,5 a 0,1. ¿Cuál es su ROSI = (ALE antes − ALE después − coste) / coste?

      Respuesta: con 2 decimales.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: iso-27001-anexo-a
    tier: 1
    prompt: |
      ¿Cuántos controles tiene el anexo A de ISO/IEC 27001:2022 y cuántos hay en cada uno de sus cuatro temas (organizativos, de personas, físicos y tecnológicos)?

      Respuesta: `total;organizativos;personas;fisicos;tecnologicos`.
    answers: ["sha256:679c50a6b650c61e455cc9a6a9d8890c87df38b09c4c53db47f5fe9cd0f98f5e"]
  - id: nist-csf-2
    tier: 1
    prompt: |
      ¿Cuántas funciones tiene el NIST Cybersecurity Framework 2.0 y qué identificador de dos letras tiene la función que añadió respecto a la 1.1?

      Respuesta: `numero;identificador`.
    answers: ["sha256:1ed75afef90d73c8d2489e5fb88e975fa99b2627bb762c83440a90d4e71653cb"]
  - id: plazos-de-notificacion
    tier: 1
    prompt: |
      ¿En cuántas horas debe un responsable notificar una brecha de datos personales a la autoridad según el artículo 33 del RGPD, y en cuántas debe una entidad de NIS2 enviar la alerta temprana y la notificación del incidente a su CSIRT?

      Respuesta: `rgpd;alerta;notificacion` en horas.
    answers: ["sha256:245df044e2d88a628e116e4ad653a9d940ff1d63c9474c711755a02b8d090367"]
  - id: rto-y-rpo
    tier: 2
    prompt: |
      Se hacen copias de seguridad cada 4 horas y restaurar el sistema completo lleva 6 horas. Los objetivos del negocio son RPO = 2 h y RTO = 8 h. En el peor caso, ¿se cumple el RPO? ¿Y el RTO?

      Respuesta: `rpo;rto` con `si` o `no`.
    answers: ["sha256:7a4dae830a7a38317563e00b59f9f4bf818813dec10ba189db782363d23d9432"]
  - id: frecuencia-y-perdida
    tier: 3
    prompt: |
      Al estilo de FAIR, los incidentes de un tipo llegan como un proceso de Poisson con media 2 al año, y cada uno cuesta una cantidad uniforme entre 10 000 € y 50 000 €. ¿Cuál es la pérdida anual esperada y la probabilidad de un año sin incidentes?

      Respuesta: `euros;probabilidad` (la probabilidad con 3 decimales).
    answers: ["sha256:7862d4c014d39c54d92e90132bec757eff7c97aae6975982e2187dd43437b0c6"]
  - id: matriz-de-riesgos
    tier: 1
    prompt: |
      Con una matriz 5 × 5 (probabilidad × impacto) y el umbral «riesgo alto si el producto es 15 o más», ¿cuáles son altos? R1 (4, 4), R2 (5, 2), R3 (3, 5), R4 (2, 5), R5 (5, 3).

      Respuesta: los identificadores en orden, separados por espacios.
    answers: ["sha256:e78828d7938fb66bf0ca01fe3f2c13dc06c8da2c68dad438e1fe1013eeecb4a2"]
  - id: stride
    tier: 1
    prompt: |
      Clasifica cada amenaza en STRIDE (S, T, R, I, D, E): 1) un usuario normal consigue permisos de administrador; 2) alguien lee las nóminas de otros; 3) un atacante entra con la sesión robada de otro usuario; 4) una inundación de peticiones tumba el servicio; 5) un cliente niega haber ordenado una transferencia y no hay registro que lo pruebe; 6) alguien cambia un precio en la base de datos.

      Respuesta: las seis letras en orden, separadas por espacios.
    answers: ["sha256:f0b0a1ce7d21a0dc64332588fa6d12d014c9390575be5b4a260435dea2cea7d4"]
  - id: controles-cis
    tier: 1
    prompt: |
      ¿Cuántos controles tiene la versión 8 de los CIS Critical Security Controls?

      Respuesta: un número.
    answers: ["sha256:4ec9599fc203d176a301536c2e091a19bc852759b255bd6818810a42c5fed14a"]
  - id: disponibilidad-pactada
    tier: 1
    prompt: |
      ¿Cuántos minutos de caída permite al mes (30 días) un acuerdo de servicio del 99,9 % y uno del 99,99 %?

      Respuesta: `99,9;99,99` con 1 y 2 decimales (punto decimal).
    answers: ["sha256:92b194e2cbaf843455b89b723c5fbadf85aa2cabfbbe6fdd55ca694750181ed3"]
  - id: plazos-kev
    tier: 1
    prompt: |
      La directiva BOD 22-01 de CISA obliga a corregir las vulnerabilidades del catálogo KEV en un plazo. ¿Cuántos días hay para las que tienen un CVE asignado desde 2021, y cuántos meses para las anteriores?

      Respuesta: `dias;meses`.
    answers: ["sha256:e915ab3c40d04052dc3156dbd794e15d10632d0b80217721583ccd3e7be26012"]
  - id: tratamiento-del-riesgo
    tier: 1
    prompt: |
      Relaciona cada decisión con su opción de tratamiento: 1) contratar un ciberseguro; 2) dejar de ofrecer una función que no se puede proteger; 3) aplicar el parche y la autenticación multifactor; 4) documentar que un riesgo bajo se asume. Opciones: a) mitigar; b) transferir; c) evitar; d) aceptar.

      Respuesta: las letras para 1, 2, 3 y 4, separadas por espacios.
    answers: ["sha256:c87c9b7868f07921e663e778e334aa5074dc707becc30fd7155b7dda7bf9426e"]
  - id: regla-3-2-1
    tier: 2
    prompt: |
      La regla 3-2-1 pide 3 copias de los datos, en 2 tipos de soporte distintos y 1 fuera de las instalaciones. ¿Qué esquemas la cumplen? a) tres copias en el mismo NAS; b) el original en el servidor, una copia en un disco externo que se guarda en otra oficina y otra en la nube; c) el original, una copia en un segundo disco del mismo servidor y una cinta en la misma sala; d) el original en el disco local, una copia en la nube y otra en otra región de la nube.

      Respuesta: las letras que la cumplen, en orden.
    answers: ["sha256:5e657ff6158d3e2a6d23e2a523917a2305acee9423365e268695c4b7b8919f4c"]
---

Ninguna organización puede protegerlo todo contra todo. La seguridad es una decisión económica bajo incertidumbre: qué activos importan, qué les puede pasar, con qué probabilidad, cuánto costaría y
cuánto cuesta evitarlo. Este nodo enseña a tomar y defender esas decisiones: medir el riesgo con números cuando se puede y con método cuando no, elegir y priorizar controles, prepararse para el incidente
que llegará igualmente y cumplir lo que la ley exige. Es el marco en el que encajan todos los nodos técnicos de la rama, de [[sec-metodologia-pentest]] a [[sec-cloud-contenedores]], y usa la
probabilidad de [[mat-probabilidad]].

## Objetivos

Al terminar sabrás:

1. Identificar activos, amenazas y vulnerabilidades, y modelar amenazas de un sistema (STRIDE, árboles de ataque).
2. Estimar el riesgo de forma cualitativa (matrices) y cuantitativa (SLE, ALE, ROSI, FAIR con Monte Carlo), conociendo los límites de cada una.
3. Elegir el tratamiento (mitigar, transferir, evitar, aceptar) y priorizar controles con marcos reconocidos.
4. Diseñar continuidad y recuperación (BIA, RTO, RPO, copias) y un proceso de respuesta a incidentes.
5. Conocer las obligaciones legales de notificación (RGPD, NIS2) y los marcos de cumplimiento (ISO 27001, ENS).

## Qué debes dominar antes

[[sec-metodologia-pentest]] (CVSS, riesgo de OWASP), [[sec-cloud-contenedores]] (responsabilidad compartida) y [[mat-probabilidad]] (esperanza, Poisson, simulación).

> [!question] Test de entrada
> 1. ¿Qué diferencia hay entre una amenaza, una vulnerabilidad y un riesgo?
> 2. ¿Qué es la esperanza de una variable aleatoria?
> 3. ¿Por qué una matriz de riesgos con colores puede llevar a malas decisiones?
>
> Respuestas: la amenaza es lo que puede causar daño (un grupo de ransomware), la vulnerabilidad la debilidad que aprovecharía (un servidor sin parchear) y el riesgo la combinación de probabilidad e impacto
> de que ocurra; el valor medio a largo plazo, Σ valor · probabilidad; porque redondea a pocas categorías, mezcla escalas ordinales como si fueran números y oculta la incertidumbre (Hubbard y Seiersen lo
> documentan).

## 1. Activos, amenazas y modelado

El análisis empieza por **qué** proteger: inventario de activos (datos, sistemas, procesos, personas, reputación) y su valor para el negocio, que casi nunca es el precio del equipo. Después, **de quién**:
perfiles de atacante (delincuencia organizada, empleados, competidores, Estados) con sus motivos y capacidades, informados por inteligencia de amenazas y ATT&CK.

El **modelado de amenazas** (Shostack) responde cuatro preguntas sobre un diseño: ¿qué estamos construyendo? (un diagrama de flujo de datos con sus fronteras de confianza), ¿qué puede salir mal?, ¿qué
vamos a hacer?, ¿lo hicimos bien? **STRIDE** guía la segunda: **S**uplantación (autenticación), manipulación (**T**ampering, integridad), **R**epudio (no poder probar quién hizo qué), revelación de
**I**nformación (confidencialidad), denegación de servicio (**D**, disponibilidad) y **E**levación de privilegios (autorización). Los **árboles de ataque** (Schneier) descomponen un objetivo en caminos
alternativos (O) y pasos necesarios (Y), y permiten asignar costes o probabilidades.

## 2. Medir el riesgo

**Cualitativo**: probabilidad e impacto en escalas de 1 a 5, producto o matriz de colores. Rápido y comunicable, pero con defectos serios: categorías gruesas, escalas ordinales tratadas como números,
y dos riesgos muy distintos en la misma casilla. Úsalo para triar, no para decidir inversiones grandes.

**Cuantitativo clásico**: valor del activo (AV), factor de exposición (EF, la fracción que se pierde), pérdida por incidente SLE = AV · EF, frecuencia anual ARO y pérdida anual esperada ALE = SLE · ARO.
Un control merece la pena si reduce el ALE más de lo que cuesta: **ROSI** = (ALE antes − ALE después − coste) / coste. Por ejemplo, un portátil con datos de clientes valorado en 50 000 € del que se perdería
todo (EF = 1) en un robo cada cinco años tiene ALE = 10 000 €; cifrar el disco por 500 € al año, si reduce el impacto al 10 %, da ROSI = (10 000 − 1000 − 500)/500 = 17.

**FAIR y simulación**: en lugar de un número, distribuciones: la frecuencia de eventos (por ejemplo Poisson con media λ) y la magnitud de cada pérdida (rangos calibrados por expertos, a menudo
lognormales). La pérdida anual es la suma aleatoria de un número aleatorio de pérdidas; su media es λ · E[pérdida], pero lo que interesa para decidir es la **distribución**: la probabilidad de un año sin
incidentes (e^(−λ) con Poisson), la de superar un umbral, el percentil 95. Se calcula con **Monte Carlo**: simular decenas de miles de años y mirar el histograma (la curva de excedencia de pérdidas). Hubbard
y Seiersen muestran que expertos entrenados en calibración dan rangos útiles, y que este enfoque supera a las matrices.

## 3. Tratar el riesgo

Cuatro opciones: **mitigar** (controles que reducen probabilidad o impacto), **transferir** (seguros, contratos, externalizar a quien lo gestione mejor; la responsabilidad legal no se transfiere),
**evitar** (dejar de hacer la actividad) y **aceptar** (documentado, por quien tiene autoridad y con fecha de revisión). El **riesgo residual** tras los controles debe quedar dentro del **apetito de
riesgo** que fija la dirección.

Marcos para elegir controles:

- **ISO/IEC 27001:2022**: requisitos de un sistema de gestión (contexto, liderazgo, riesgo, mejora continua) certificable; su anexo A tiene 93 controles en cuatro temas (organizativos, de personas, físicos
  y tecnológicos). **ISO/IEC 27005** detalla la gestión del riesgo.
- **NIST CSF 2.0** (2024): seis funciones, Gobernar (nueva), Identificar, Proteger, Detectar, Responder y Recuperar, con perfiles actuales y objetivo para planificar la mejora.
- **CIS Controls v8**: controles priorizados y concretos, en grupos de implementación según el tamaño de la organización; el punto de partida práctico para una pyme.
- **ENS** (España, RD 311/2022): obligatorio para el sector público y sus proveedores, con categorías de sistema y medidas proporcionales.
- **Priorizar con datos**: lo que se explota de verdad primero (catálogo KEV de CISA, que fija plazos de corrección a las agencias federales; EPSS), luego lo expuesto a Internet, luego lo demás.

## 4. Continuidad y recuperación

El **análisis de impacto en el negocio** (BIA) fija para cada proceso cuánto tiempo puede estar parado (**RTO**, objetivo de tiempo de recuperación) y cuántos datos puede perder (**RPO**, objetivo de punto
de recuperación). De ahí salen la frecuencia de las copias (el RPO real en el peor caso es el intervalo entre copias) y la arquitectura de recuperación (el RTO real es lo que tarda en volver a funcionar,
medido en un **simulacro**, no estimado). Copias: regla **3-2-1** (tres copias, dos tipos de soporte, una fuera), con al menos una **inmutable o desconectada** frente al ransomware, y restauraciones
probadas periódicamente. La disponibilidad pactada se traduce en minutos: un 99,95 % mensual (30 días) permite 21,6 minutos de caída.

## 5. Respuesta a incidentes

NIST SP 800-61 Rev. 3 (2025) integra la respuesta en las funciones del CSF 2.0: prepararse (equipo, contactos, herramientas, registros, ejercicios de mesa), detectar y analizar, contener, erradicar y
recuperar, y aprender (lecciones aprendidas que vuelven a la gestión del riesgo). Decisiones que hay que tomar **antes**: quién puede desconectar sistemas, cuándo se avisa a la dirección, a los clientes,
a las autoridades y a la aseguradora, cómo se conservan las evidencias ([[sec-forense-logs]]) y si se negocia con extorsionadores (casi nunca, y nunca sin asesoría legal).

## 6. Obligaciones legales

- **RGPD** (art. 33): una brecha de datos personales se notifica a la autoridad de control sin dilación y, si es posible, en 72 horas desde que se conoce, salvo que sea improbable que suponga un riesgo; y a
  los afectados si el riesgo es alto (art. 34).
- **NIS2** (Directiva (UE) 2022/2555, art. 23), para entidades esenciales e importantes: alerta temprana al CSIRT en 24 horas, notificación del incidente en 72 horas e informe final en un mes. Exige además
  medidas de gestión del riesgo y hace **responsable a la dirección**.
- Otros: DORA para el sector financiero, la Ley de Ciberresiliencia para productos con elementos digitales, y los contratos con clientes y proveedores (el riesgo de terceros se gestiona con cuestionarios,
  auditorías y cláusulas).

## 7. Comprobar con un programa

El cálculo de ALE y ROSI del ejemplo del portátil y una simulación de Monte Carlo de un modelo de frecuencia y pérdida (con datos distintos de los ejercicios):

```python
# ALE y ROSI, y pérdidas anuales con Monte Carlo (Poisson × lognormal)
import math
import random
import statistics

av, ef, aro = 50_000, 1.0, 0.2
ale_antes = av * ef * aro
ale_despues = av * 0.1 * aro
coste = 500
print("ALE antes:", ale_antes, " después:", ale_despues, " ROSI:", (ale_antes - ale_despues - coste) / coste)

random.seed(7)
lam = 0.8                       # incidentes al año
mu, sigma = math.log(40_000), 0.9  # pérdida por incidente: lognormal con mediana 40 000 €

def anio():
    n, t = 0, random.expovariate(lam)
    while t < 1:
        n, t = n + 1, t + random.expovariate(lam)
    return sum(random.lognormvariate(mu, sigma) for _ in range(n))

perdidas = sorted(anio() for _ in range(100_000))
media_exacta = lam * math.exp(mu + sigma ** 2 / 2)
print("media simulada: %.0f  exacta: %.0f" % (statistics.fmean(perdidas), media_exacta))
print("años sin incidentes: %.3f (exacto %.3f)" % (sum(p == 0 for p in perdidas) / len(perdidas), math.exp(-lam)))
print("percentil 95: %.0f €" % perdidas[int(0.95 * len(perdidas))])
print("minutos de caída al mes con 99,95 %%: %.1f" % (0.0005 * 30 * 24 * 60))
```

Salida (la simulación da valores muy cercanos a los exactos; el percentil 95 depende de la semilla):

```
ALE antes: 10000.0  después: 1000.0  ROSI: 17.0
media simulada: 48280  exacta: 47978
años sin incidentes: 0.448 (exacto 0.449)
percentil 95: 201221 €
minutos de caída al mes con 99,95 %: 21.6
```

## 8. Errores típicos

- Empezar por los controles (o por la herramienta de moda) en vez de por los activos y las amenazas.
- Decidir inversiones grandes con matrices de colores; presentar un solo número sin la incertidumbre.
- Aceptar riesgos sin que lo decida quien tiene autoridad, o sin fecha de revisión.
- Copias que nunca se han restaurado, o todas alcanzables por el mismo atacante.
- Planes de respuesta que nadie ha ensayado; no saber a quién notificar ni en qué plazo.
- Tratar el cumplimiento (pasar la auditoría) como si fuera seguridad.

## 9. Resumen

- Activos y su valor de negocio; perfiles de amenaza; modelado con STRIDE y árboles de ataque.
- Cualitativo para triar; SLE, ALE y ROSI; FAIR con distribuciones y Monte Carlo.
- Mitigar, transferir, evitar, aceptar; riesgo residual y apetito. ISO 27001 (93 controles), NIST CSF 2.0 (6 funciones), CIS v8, ENS; priorizar con KEV.
- BIA, RTO y RPO medidos en simulacros; copias 3-2-1 con una inmutable.
- Respuesta a incidentes (SP 800-61r3) preparada antes; RGPD (72 h) y NIS2 (24 h, 72 h, un mes).

## Repaso: lo que debe quedarte dentro de un mes

1. Primero qué proteger y de quién; después los controles.
2. ALE = valor · exposición · frecuencia; un control vale si el ALE baja más de lo que cuesta.
3. Mejor una distribución honesta que un número falso.
4. Una copia que no se ha restaurado no es una copia.
5. Los plazos de notificación empiezan a contar cuando se sabe, no cuando se termina de investigar.

## Siguiente

`proy-sec-ids` (el proyecto de la rama) y, como cierre, el superproyecto [[proy-exodus-mision]].
