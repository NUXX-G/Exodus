---
id: tro-aprender-a-aprender
title: "Aprender a aprender: método de estudio con evidencia"
area: troncal
trunk_level: 0
prerequisites: []
academic_sources:
  - "Dunlosky, J.; Rawson, K. A.; Marsh, E. J.; Nathan, M. J.; Willingham, D. T. Improving Students' Learning With Effective Learning Techniques: Promising Directions From Cognitive and Educational Psychology. Psychological Science in the Public Interest, 14(1), 2013."
  - "Roediger, H. L.; Karpicke, J. D. Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention. Psychological Science, 17(3), 249-255, 2006."
  - "Cepeda, N. J.; Pashler, H.; Vul, E.; Wixted, J. T.; Rohrer, D. Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis. Psychological Bulletin, 132(3), 354-380, 2006."
  - "Bloom, B. S. The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring. Educational Researcher, 13(6), 4-16, 1984."
  - "Kalyuga, S.; Ayres, P.; Chandler, P.; Sweller, J. The Expertise Reversal Effect. Educational Psychologist, 38(1), 2003."
  - "Ericsson, K. A.; Krampe, R. T.; Tesch-Römer, C. The Role of Deliberate Practice in the Acquisition of Expert Performance. Psychological Review, 100(3), 363-406, 1993."
  - "Macnamara, B. N.; Maitra, M. The role of deliberate practice in expert performance: revisiting Ericsson, Krampe & Tesch-Römer (1993). Royal Society Open Science, 2019."
  - "Pólya, G. How to Solve It. Princeton University Press, 1945."
hints:
  - "Concepto: aprender no es releer, es recuperar. Una técnica es buena si te obliga a sacar la información de la memoria (autoexamen) y a volver a ella con espacio de tiempo. Si estudiar te resulta cómodo y fluido, es una señal de que probablemente no estás aprendiendo todo lo que crees."
  - "Herramienta: simula el calendario paso a paso en una hoja o con un bucle; cada repaso sumado al día del anterior, el último intervalo como techo y, tras un fallo, vuelta al primer intervalo."
  - "Documentación oficial: el texto de Dunlosky et al. (2013) está disponible gratis en la web de la Association for Psychological Science (psychologicalscience.org); el calendario exacto de Exodus está en docs/PEDAGOGIA.md y src/lib/exercises.ts del repositorio."
exercises:
  - id: tecnica-baja-utilidad
    tier: 1
    prompt: |
      Según la revisión de Dunlosky y colaboradores (2013), ¿cuál de estas técnicas de estudio tiene una utilidad **baja**?
      **a)** autoexaminarse con preguntas (práctica de recuperación) · **b)** subrayar · **c)** espaciar el estudio en el tiempo.
      Responde con una letra: «a», «b» o «c».
    answers: ["sha256:3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"]
  - id: cuarto-repaso
    tier: 1
    prompt: |
      En Exodus, un ejercicio resuelto por primera vez el día $0$ se repasa a los $1$, $3$, $7$, $16$, $35$ y $70$ días, cada intervalo contado
      desde el repaso anterior. Si acertaras siempre, ¿en qué día (contando desde el día $0$) te tocaría el **cuarto** repaso?
      Respuesta: un entero.
    answers: ["sha256:670671cd97404156226e507973f2ab8330d3022ca96e0c93bdbdb320c41adcaf"]
  - id: tras-fallar
    tier: 2
    prompt: |
      Con ese mismo calendario: aciertas el $1.^\circ$ y el $2.^\circ$ repaso, **fallas** el $3.^\circ$ (que te toca el día $11$) y vuelves a
      acertar cuando te lo pide de nuevo. ¿En qué día te tocará el repaso siguiente a ese acierto? (Recuerda: un fallo devuelve el ejercicio
      al primer intervalo.) Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: error-en-la-demostracion
    tier: 2
    prompt: |
      Se «demuestra» que $2 = 1$ así. Sea $a = b$.
      1. $a = b$
      2. $a^2 = ab$
      3. $a^2 - b^2 = ab - b^2$
      4. $(a + b)(a - b) = b(a - b)$
      5. $a + b = b$
      6. $2b = b$
      7. $2 = 1$

      Todos los pasos son correctos salvo uno. ¿Cuál es el número del paso que contiene la operación ilegal? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: subir-y-bajar-50
    tier: 2
    prompt: |
      Un precio sube un $50\,\%$ y después baja un $50\,\%$. ¿Qué porcentaje del precio **inicial** es el precio final? Respuesta: un número
      sin el símbolo %.
    answers: ["sha256:f369cb89fc627e668987007d121ed1eacdc01db9e28f8bb26f358b7d8c4f08ac"]
  - id: umbral-de-dominio
    tier: 2
    prompt: |
      En Exodus un nodo se domina al resolver el $80\,\%$ de sus ejercicios, redondeando hacia arriba. Si un nodo tiene $23$ ejercicios,
      ¿cuántos hay que resolver? Respuesta: un entero.
    answers: ["sha256:9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"]
  - id: repasos-en-100-dias
    tier: 3
    prompt: |
      Con el calendario de repaso de Exodus y sin fallar nunca, ¿cuántos repasos genera un ejercicio **durante sus primeros $100$ días**
      (sin contar el día $0$)? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: plan-realista
    tier: 3
    prompt: |
      Suponte que el currículo tiene $140$ nodos y que dominar cada uno exige unas $5$ horas de estudio. Estudiando $2$ horas al día, todos los
      días, ¿cuántos días hacen falta? (Redondea hacia arriba.) Respuesta: un entero.
    answers: ["sha256:deeeb5df3f2cee6bf4e597a8a3a878a6ce49b932b9e90b416922d4499f54fae6"]
---

# Aprender a aprender: método de estudio con evidencia

Este es el primer nodo del troncal, y es corto a propósito: antes de estudiar nada, hay que saber **cómo** se estudia para
aprender de verdad. La buena noticia es que sobre esto hay investigación sólida. La mala, que lo que casi todo el mundo hace
por intuición (releer, subrayar, resumir) es de lo que **peor** funciona. Todo Exodus está diseñado alrededor de lo que la
evidencia dice que sí funciona.

## Objetivos

Al terminar sabrás:

1. Qué técnicas de estudio tienen evidencia a favor y cuáles no, y por qué.
2. Estudiar un nodo con un protocolo concreto, y usar la práctica de recuperación y el repaso espaciado de Exodus.
3. Reconocer la «ilusión de saber» y medirte sin engañarte.
4. Fijar un plan de estudio realista para llegar lejos.

## 1. Lo que dice la investigación

En 2013, Dunlosky y sus colegas revisaron diez técnicas de estudio populares y valoraron su **utilidad** (cuánto funcionan y en
cuántas situaciones). El resultado:

| Utilidad | Técnicas |
|---|---|
| **Alta** | **práctica de recuperación** (autoexaminarse) · **práctica distribuida** (espaciar el estudio) |
| Moderada | interrogación elaborativa («¿por qué es cierto?») · autoexplicación · práctica intercalada (mezclar temas) |
| **Baja** | subrayar · releer · resumir · mnemotecnias de palabra clave · imágenes mentales para textos |

Los autores subrayan que nada de esto es una panacea, y que la eficacia de algunas técnicas en ciertos contextos aún no se conoce bien.
Pero el patrón es claro y coincide con otros trabajos:

- **El efecto de la prueba.** Roediger y Karpicke (2006) pidieron a estudiantes aprender textos: unos los **releían** varias veces y
  otros se **examinaban** de memoria. A los 5 minutos, releer iba mejor; a los **2 días y a la semana**, examinarse retenía claramente más.
  Además, quienes releían se sentían **más seguros** de recordar, y recordaban peor. Releer da sensación de dominio; es una ilusión.
- **El efecto del espaciado.** Cepeda y colaboradores (2006) reunieron 839 evaluaciones de 317 experimentos: repartir el estudio en el tiempo
  retiene más que concentrarlo, y el intervalo óptimo entre sesiones **crece** con el tiempo que se quiere recordar.

**Conclusión práctica:** estudiar bien es **difícil** y a menudo incómodo. Si estás recordando con esfuerzo, estás aprendiendo. Si todo
te parece familiar y fluido porque lo estás mirando delante, puede que no.

## 2. Más ideas bien apoyadas

**Aprendizaje de dominio (Bloom, 1984).** No avanzar al siguiente tema hasta dominar el actual, con retroalimentación y corrección de
errores, produjo en los estudios de Bloom unos resultados en torno a **una desviación típica** por encima de la enseñanza
convencional (la tutoría individual, en torno a dos). Las cifras exactas conviene tomarlas con cautela, pero la idea es robusta: los
huecos se acumulan, y cada tema se apoya en el anterior. Por eso en Exodus **un nodo no se completa hasta dominar el 80 % de sus
ejercicios.**

**Ejemplos resueltos y su retirada (Sweller; Kalyuga et al., 2003).** Para un tema nuevo, estudiar un ejemplo resuelto paso a paso
enseña más que lanzarse a resolver un problema abierto sin saber cómo. Pero según se gana experiencia esa ayuda estorba, así que debe
**retirarse gradualmente**: de ahí la escalera de ejercicios de cada nodo (a completar → problema → difícil).

**Práctica deliberada (Ericsson et al., 1993).** La pericia se construye con práctica **centrada en lo que aún no se hace bien**, con
retroalimentación inmediata y esfuerzo, no con repetición cómoda. Una revisión posterior (Macnamara y Maitra, 2019) no reprodujo el
efecto con la misma fuerza: la cantidad de práctica deliberada importa, pero **no lo explica todo**. Es una pieza, no la fórmula
mágica.

## 3. Cómo se estudia un nodo en Exodus

1. **Objetivos y test de entrada.** Léelos antes de empezar. Si el test de entrada te cuesta, repasa antes los prerrequisitos.
2. **Lee con lápiz y papel.** No pases de largo una demostración: ciérrala, reconstruye el argumento **sin mirar** y compara.
3. **Ejemplos resueltos: tápalos.** Cubre la solución, intenta el siguiente paso tú, y destapa para comprobar.
4. **Ejercicios en orden y sin ayuda.** La respuesta debe salir de tu cabeza. Si te atascas, pasa a una pista, empezando por la del
   nivel más bajo (concepto); solo después, la herramienta y la documentación. La pista se registra: es una medida honesta de tu autonomía.
5. **Diario de errores.** Apunta cada fallo con su causa (¿concepto?, ¿cálculo?, ¿enunciado mal leído?). Repasarlo antes de un examen
   rinde más que releer los apuntes.
6. **Repaso espaciado cada día.** La página de **Repaso** te pide, sin apuntes, ejercicios que ya resolviste. Un ejercicio vuelve a
   los $1$, $3$, $7$, $16$, $35$ y $70$ días; si fallas, **vuelve mañana**. Diez minutos diarios valen más que dos horas el domingo.
7. **Sin IA mientras estudias.** Es la regla del proyecto: resolver con ayuda te deja con la sensación de haberlo hecho sin que tu
   memoria haya hecho el trabajo. La dificultad es la parte que enseña.

## 4. Errores de estudio frecuentes

- **Ilusión de competencia**: confundir «lo reconozco» con «lo sé producir». Se corrige autoexaminándose antes de dar un tema por
  aprendido.
- **Estudio en maratón**: concentrar todo en un día, con la esperanza de que se quede. Se olvida mucho más rápido.
- **Saltar prerrequisitos**: es la causa número uno de atascos. Retrocede sin miedo.
- **Evitar el error**: equivocarse **es** el aprendizaje, siempre que lo corrijas pronto.
- **Cambiar de método cada semana** sin darle tiempo a funcionar.

## 5. Razonar con rigor

Las matemáticas y la informática exigen una habilidad que se entrena como cualquier otra: comprobar que cada paso **se sigue** del
anterior. Es lo que enseña la sección de demostraciones de cada nodo. Un ejemplo clásico: «demostrar» que $2 = 1$ parte de $a = b$ y, tras
varios pasos correctos, llega a un absurdo. Hay **un paso** ilegal (en uno se divide entre una cantidad que vale cero). Encontrar ese paso,
y no solo creer en el resultado final, es pensar bien.

Pólya (1945) propone, para cualquier problema, **cuatro fases**: entender, trazar un plan, ejecutarlo y mirar atrás. Todo ejercicio
de Exodus se beneficia de ese hábito: lo último («¿tiene sentido el resultado?») evita la mayoría de los errores.

## 6. Un plan realista

Llegar a un nivel de experto es una **maratón** de meses o años, no de semanas. Hay que asumirlo para no frustrarse. Algunas cuentas:

- Si cada nodo exige unas $5$ horas y el currículo tiene unos $140$ nodos, son $700$ horas.
- A $2$ horas diarias, $350$ días; a $1$ hora, casi $2$ años.
- Lo importante no es la intensidad de un día, sino la **constancia**: es preferible una hora al día, siete días a la semana, que siete
  horas el sábado.

Un buen hábito: **mismo sitio, misma hora, sin distracciones**, y empezar siempre por el **repaso** del día (10 minutos), antes del
material nuevo.

## Repaso: lo que debe quedarte dentro de un mes

1. Recuperar de memoria y espaciar son las dos técnicas con utilidad **alta**; releer y subrayar, **baja**.
2. Releer da sensación de saber; examinarse da retención real.
3. Dominio antes de avanzar; el repaso de Exodus: $1, 3, 7, 16, 35, 70$ días, y un fallo vuelve a mañana.
4. Constancia diaria: la meta es de meses o años.

## Siguiente

Empieza por [[mat-numeros-naturales]], el primer nodo de matemáticas del troncal.
