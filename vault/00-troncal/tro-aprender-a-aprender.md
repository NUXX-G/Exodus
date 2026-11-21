---
id: tro-aprender-a-aprender
title: "Aprender a aprender: método de estudio con evidencia"
area: troncal
trunk_level: 0
prerequisites: []
academic_sources:
  - "Dunlosky, J.; Rawson, K. A.; Marsh, E. J.; Nathan, M. J.; Willingham, D. T. Improving Students' Learning With Effective Learning Techniques: Promising Directions From Cognitive and Educational Psychology. Psychological Science in the Public Interest, 14(1), 4-58, 2013."
  - "Roediger, H. L.; Karpicke, J. D. Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention. Psychological Science, 17(3), 249-255, 2006."
  - "Cepeda, N. J.; Pashler, H.; Vul, E.; Wixted, J. T.; Rohrer, D. Distributed Practice in Verbal Recall Tasks: A Review and Quantitative Synthesis. Psychological Bulletin, 132(3), 354-380, 2006."
  - "Bloom, B. S. The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring. Educational Researcher, 13(6), 4-16, 1984."
  - "Kalyuga, S.; Ayres, P.; Chandler, P.; Sweller, J. The Expertise Reversal Effect. Educational Psychologist, 38(1), 23-31, 2003."
  - "Ericsson, K. A.; Krampe, R. T.; Tesch-Römer, C. The Role of Deliberate Practice in the Acquisition of Expert Performance. Psychological Review, 100(3), 363-406, 1993."
  - "Macnamara, B. N.; Maitra, M. The role of deliberate practice in expert performance: revisiting Ericsson, Krampe & Tesch-Römer (1993). Royal Society Open Science, 6(8):190327, 2019."
  - "Pólya, G. How to Solve It. Princeton University Press, 1945, parte I (las cuatro fases)."
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
    type: numero
    sig: 6
    prompt: |
      Un precio sube un ${{p}}\,\%$ y después baja un ${{p}}\,\%$. ¿Qué porcentaje del precio **inicial** es el precio final?
      Respuesta: un número sin el símbolo %.
    variants:
      - values: {"p":50}
        answers: ["sha256:f75575e7282423f07b1c44ef5fc08631be50ccbe961fbde55b45d6e8dffdf1d8","sha256:eb5d836a59ed0cd974789ad90cb7ba5bb8cd9f56f9077c74209ac2445eecc91a","sha256:ce9d3e5f33b7a7dcedec894b861a8f10e05152632c80d0fc68d78ccaa2e6d302"]
      - values: {"p":20}
        answers: ["sha256:655cce2dc5270207ba9c6acf042ede0c9ebc0c340281225f164a6ee41fb5edce","sha256:360ae3a9c8646687cbaf74b6a87764b49473addb744998bd48e1920723182b76","sha256:5e3316fdb5ad96101fcd5343b834a4e494439c9b61821a2a129fdf62a152273a"]
      - values: {"p":10}
        answers: ["sha256:9f60d2ae1132172cce3b36dd574d8f221f693d28feb69d20ae441b7b553c32c1","sha256:2393a425517a008325a3bd169412f0e60226522e5d24fcb416a97de8ee45eeaf","sha256:b236e6476b4fefa6e65507c41dec9a9097ba3177e8152aed02b3fb426abf496f"]
      - values: {"p":30}
        answers: ["sha256:b8f7c7939f6ac51dd053ef1bedc31d2aecb359367cdc3cf9cf715bca246e7d3e","sha256:b1ebf1c3b3506a2f06187f8c1fcf4f1888b466f18b86e97d65e2c1f0c8fa5794","sha256:15de2bea257f480dbd265681fb6aad8ef888f7785a3f05f74f6ef11dadca80f0"]
      - values: {"p":40}
        answers: ["sha256:e071436f9010f7856336c1e30266bca74a50bf3666a900a6c48f596dd33ec6dd","sha256:ea4726898da3c8e9960907f7bf088d674141042a5a6582e17165b54753671a43","sha256:27ba50994c44b1d10ab673f3e1a6ec57bb0a3c5237a147f4056cd6340178cd48"]
      - values: {"p":25}
        answers: ["sha256:2fc1b945bf7538ab25ac49ceca0fea1096607bef8f382d8c4af58120768b569c","sha256:53c6744fb16238300a773af543e93b6b2b53d7f3df87550729b8109e8d27e6bb","sha256:f7b2601b6f0a765d5063f861a1ebef351de581f7963fd597534ec520518d5176"]
  - id: umbral-de-dominio
    tier: 2
    type: numero
    sig: 6
    prompt: |
      En Exodus un nodo se domina al resolver el $80\,\%$ de sus ejercicios, redondeando hacia arriba. Si un nodo tiene ${{n}}$
      ejercicios, ¿cuántos hay que resolver? Respuesta: un entero.
    variants:
      - values: {"n":23}
        answers: ["sha256:6ab1266f522393be10ad20bc58e0ea5c629e2f55a59e3432494a06e8b51327e1","sha256:38de63212ae84b7ebf2e362c41b0470d81f97e7595e1ca1c8b63a08b5686f0b9","sha256:2f96fa19b15d0e5b5c29eb9a45e6f1ec2b07f891561bbe50b417c0f01fcd4e62"]
      - values: {"n":16}
        answers: ["sha256:33cba5d662d098840aedff9ac829d9ff2ea63e98975332d3878dd1534e81cd0e","sha256:d643f0723a41b63391f438233432bf0b3d993205bf9f1f1cd88374e646279b99","sha256:ecafc55142b343767c99e549662016cab670841c8d7df26f806915bc15cf8a4f"]
      - values: {"n":17}
        answers: ["sha256:f166ad4b9832415f537f718f7b6814b8dbdee09595ac4768c9de329e88adffbc","sha256:17b682bfee4a992ed5187a7cc34a718ca3c1816f2851d776e498f075a1b84e1d","sha256:18457689c041f459ffe2f111f630d67a1757f00c900de83cec2e6f815ddfda67"]
      - values: {"n":9}
        answers: ["sha256:2882ce97fa7fa1aad26e365a7f7336e7d912bc085cf07c1a3b01f2fd35592836","sha256:cc9ab77cb9bb453e82c1634af71e070ce82f849512123943c9b15ca20f32b59d","sha256:64794a1d9d8bb8ca36be694247ff90ae45e6c613697b621e9f8e71c3cf637596"]
      - values: {"n":31}
        answers: ["sha256:39f85c0a14211cc9b4268d14aa718557ff02690832f08e3c87e37148c6d99958","sha256:ecb0e6d1e3d2989475df6e5aab8e0fb7ae6b0a85acaaf616bb9c89dae282eae9","sha256:cac501b7f61a8ae22402cf47dac8ec25e6298ad17b986ee63bb1957c4e057f60"]
      - values: {"n":12}
        answers: ["sha256:fe31cb5b07cd93417a670d4e2f9c820bc7ef27617c8519408462e8bba492a517","sha256:35caca5e25e564c7e4e7a40b010923a9ac2176d64f46e22048472bce30961894","sha256:44134209498c7858d6fb0b6c4c0fbdc927b5681f5239ccc38f0c7fbf72c24431"]
      - values: {"n":44}
        answers: ["sha256:11ea03445c0f4c1a835415c4a5daecd6a4ada947d97e34c2f6cfd589e84aaeb8","sha256:5fb9428da5e01ecb343fb30bda03143edadf37ca38ef8564270018732eda79a0","sha256:245150a1d4848be009e2f7232c7590cf4619490a2edeafa94ade9f1a792ebb4d"]
      - values: {"n":7}
        answers: ["sha256:d36f9273b47826dd3a5b19da18d8351ef014eec68b32709fd6b7cffa0b4d7992","sha256:b3fec96f6c8bb502cba430a3b69a4f4d14dd1185b62a0dbb6ab61ddaa2464b26","sha256:4e64097f301692c79d8a9b28ccfd43a3bc5b2c6cb0e928a35da59dd4159e4f75"]
  - id: repasos-en-100-dias
    tier: 3
    prompt: |
      Con el calendario de repaso de Exodus y sin fallar nunca, ¿cuántos repasos genera un ejercicio **durante sus primeros $100$ días**
      (sin contar el día $0$)? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: plan-realista
    tier: 3
    type: numero
    sig: 6
    prompt: |
      Suponte que tu objetivo tiene ${{n}}$ nodos y que dominar cada uno exige unas ${{h}}$ horas de estudio. Estudiando ${{d}}$
      horas al día, todos los días, ¿cuántos días hacen falta? (Redondea hacia arriba.) Respuesta: un entero.
    variants:
      - values: {"n":140,"h":5,"d":"3"}
        answers: ["sha256:a7a43661567421d66bef9e169dfa15a833452a6656cf5a1fec0420fbf2cccc85","sha256:317fcb0205a7e990fea8e19b9e0e6763cd9140b246477f53a8e4df3397f25e47","sha256:fa3061ca492c681560b9215f7c50526de3091a7188fbaf404f1a44beaac279b3"]
      - values: {"n":32,"h":10,"d":"1"}
        answers: ["sha256:f796d44e09dbf60ef5e7716e6632111846a503fd02afaa2d56921e406af220fc","sha256:5e0f081c17f08ddef2f374f22f37ab1dac27a8687218e272139883b4b85bb40b","sha256:4a7210c5337229d3e18985e16bc8038731add5960af3710c2c0fd16c993aa516"]
      - values: {"n":30,"h":10,"d":"2"}
        answers: ["sha256:0f27e971ece7b164ff38c9dfe76b3fc241e3e89216e11a7b00af167d8f45ccd6","sha256:9fb5e980b8c13ceb52207299a762c8898d9032738cf737aaa44469f97b4521f6","sha256:cb34a77800e2d9fd7592ae79959bb23c8fa34a58996e4221980c97178d477fbc"]
      - values: {"n":200,"h":6,"d":"2"}
        answers: ["sha256:a0ddaebff3579be7c4504b84c0494f36498345b023bb092a02477966c6e9ca04","sha256:a660154ee263f1c8b40ba857c2908b65ab0b917dbe912627e55bf19a1d836234","sha256:7b02d4102fc5d05e0a0c905f31d66bebb485c368b6ab69f47250c4c590f403a9"]
      - values: {"n":60,"h":8,"d":"1{,}5"}
        answers: ["sha256:99a062a32f839cb39b384667665355ca991ffd4bc0c871a02a103ec9e9b07702","sha256:6c6c36db7b9c09a413f8e0362423fbc563eae63fa24bedc4cacd5db51660c342","sha256:e2ad466e00d4268cc71154385a84b4b97cce310c1374bc6a3de4890ed9155f01"]
      - values: {"n":120,"h":7,"d":"4"}
        answers: ["sha256:1ff69141a20ff7467b1f5eacb1e06e4012cd530df9167e803bdb68e09444d3c7","sha256:03e00b8cb68f9c83eb30223b7dc64f262d9ac8bd0044d9785a684713ed029ed8","sha256:d63507cb5b1b3cd60fa9ed04e7ff32c9532e0b5d5191a520a39827c232aff428"]
  - id: r-releer-o-examinarse
    tier: 1
    type: opcion
    review: true
    prompt: |
      Tienes un examen dentro de dos semanas. Según la evidencia, ¿qué es lo que **más** te ayudará a recordar el tema?
    options:
      - |
        Releer el tema tres veces, porque al final todo te suena
      - |
        Subrayar lo importante y hacer un resumen bonito
      - |
        Cerrar el libro e intentar explicar el tema de memoria, y luego comprobar qué se te olvidó
      - |
        Ver un vídeo resumen el día antes del examen
    answers: ["sha256:8c82c012e05017dd362477efcb50f6fc606003d4877932b679b819607f6da0f3"]
  - id: r-espaciar
    tier: 1
    type: opcion
    review: true
    prompt: |
      Con el mismo tiempo total, ¿qué reparto retiene más a largo plazo?
    options:
      - |
        Estudiar 6 horas seguidas el sábado
      - |
        Estudiar 1 hora al día durante 6 días repartidos
      - |
        Da igual: lo que cuenta es el total de horas
    answers: ["sha256:3ddea3557374948535be55a33b292fea3415b1cee6380af25ad7cbdc4d22021d"]
  - id: r-ilusion
    tier: 2
    type: opcion
    review: true
    prompt: |
      ¿Qué es la «ilusión de competencia» (o de saber)?
    options:
      - |
        Que reconocer algo al verlo no significa saber producirlo sin ayuda
      - |
        Que las técnicas de estudio no sirven para nada
      - |
        Que hay que estudiar siempre con música
      - |
        Que si un tema te resulta difícil, no es para ti
    answers: ["sha256:fce39a7acecad6a975b4d41bed417363e6f0554c523b7c25e2b374eb24e7255f"]
  - id: r-fallo-concepto
    tier: 2
    type: opcion
    review: true
    prompt: |
      Fallas un ejercicio porque no entendías bien la idea. ¿Qué es lo mejor que puedes hacer?
    options:
      - |
        Pasar al tema siguiente: ya lo verás más adelante
      - |
        Repetir el mismo ejercicio hasta acertarlo de memoria
      - |
        Pedir la solución a una IA
      - |
        Volver a la explicación del tema, etiquetar el fallo como de concepto y repetir con otros datos más adelante
    answers: ["sha256:11b1f92573fdf598e8c4b8c7f5bf6b0c3438abeeaf3725bf97c1af78ac1d120f"]
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

> [!practico]
> Aprender se parece a ponerse en forma: mirar a otra persona levantar pesas no te hace más fuerte, aunque la entiendas
> perfectamente. Releer los apuntes es «mirar»: todo te suena y parece que lo sabes. Lo que de verdad fortalece la memoria
> es **sacar la información de la cabeza tú solo**, sin mirar (como cuando te preguntan la lección), y hacerlo **varias
> veces separadas en el tiempo** (hoy, dentro de unos días, dentro de unas semanas). Cuesta más y da menos gusto, pero es
> lo que funciona. Exodus está hecho para obligarte a eso.

> [!formal] Con rigor: lo que dicen los estudios
> En 2013, Dunlosky y sus colegas revisaron diez técnicas de estudio populares y valoraron su **utilidad** (cuánto
> funcionan y en cuántas situaciones). El resultado:
>
> | Utilidad | Técnicas |
> |---|---|
> | **Alta** | **práctica de recuperación** (autoexaminarse) · **práctica distribuida** (espaciar el estudio) |
> | Moderada | interrogación elaborativa («¿por qué es cierto?») · autoexplicación · práctica intercalada (mezclar temas) |
> | **Baja** | subrayar · releer · resumir · mnemotecnias de palabra clave · imágenes mentales para textos |
>
> Los autores subrayan que nada de esto es una panacea, y que la eficacia de algunas técnicas en ciertos contextos aún no se conoce bien.
> Pero el patrón es claro y coincide con otros trabajos:
>
> - **El efecto de la prueba.** Roediger y Karpicke (2006) pidieron a estudiantes aprender textos: unos los **releían** varias veces y
>   otros se **examinaban** de memoria. A los 5 minutos, releer iba mejor; a los **2 días y a la semana**, examinarse retenía claramente más.
>   Además, quienes releían se sentían **más seguros** de recordar, y recordaban peor. Releer da sensación de dominio; es una ilusión.
> - **El efecto del espaciado.** Cepeda y colaboradores (2006) reunieron 839 evaluaciones de 317 experimentos: repartir el estudio en el tiempo
>   retiene más que concentrarlo, y el intervalo óptimo entre sesiones **crece** con el tiempo que se quiere recordar.

**Conclusión práctica:** estudiar bien es **difícil** y a menudo incómodo. Si estás recordando con esfuerzo, estás aprendiendo. Si todo
te parece familiar y fluido porque lo estás mirando delante, puede que no.

## 2. Más ideas bien apoyadas

> [!practico]
> Tres ideas más, en una frase cada una:
>
> 1. **No pases al tema siguiente hasta dominar el actual**, igual que no se construye el segundo piso sin el primero:
>    por eso un nodo de Exodus no se completa hasta acertar el 80 % de sus ejercicios.
> 2. **Al principio, ejemplos resueltos; después, sin ayuda**, como los ruedines de una bici: ayudan los primeros días
>    y estorban después.
> 3. **Practica sobre todo lo que aún te sale mal**, no lo que ya dominas: es más incómodo, pero es lo que te hace
>    mejorar.

> [!formal] Con rigor: de dónde salen
> **Aprendizaje de dominio (Bloom, 1984).** No avanzar al siguiente tema hasta dominar el actual, con retroalimentación y corrección de
> errores, produjo en los estudios de Bloom unos resultados en torno a **una desviación típica** por encima de la enseñanza
> convencional (la tutoría individual, en torno a dos). Dicho sin estadística: el alumno medio del grupo «de dominio»
> superaba a unos 84 de cada 100 alumnos del grupo convencional (con tutoría, a unos 98 de cada 100). Las cifras exactas conviene tomarlas con cautela, pero la idea es robusta: los
> huecos se acumulan, y cada tema se apoya en el anterior. Por eso en Exodus **un nodo no se completa hasta dominar el 80 % de sus
> ejercicios.**
>
> **Ejemplos resueltos y su retirada (Sweller; Kalyuga et al., 2003).** Para un tema nuevo, estudiar un ejemplo resuelto paso a paso
> enseña más que lanzarse a resolver un problema abierto sin saber cómo. Pero según se gana experiencia esa ayuda estorba, así que debe
> **retirarse gradualmente**: de ahí la escalera de ejercicios de cada nodo (a completar → problema → difícil).
>
> **Práctica deliberada (Ericsson et al., 1993).** La pericia se construye con práctica **centrada en lo que aún no se hace bien**, con
> retroalimentación inmediata y esfuerzo, no con repetición cómoda. Una revisión posterior (Macnamara y Maitra, 2019) no reprodujo el
> efecto con la misma fuerza: la cantidad de práctica deliberada importa, pero **no lo explica todo**. Es una pieza, no la fórmula
> mágica.

## 3. Cómo se estudia un nodo en Exodus

> [!practico]
> En cada tema: lee primero la explicación **práctica** (con ejemplos de la vida real) y luego la **formal** (la versión
> rigurosa, la que te pedirán en un examen de universidad). Haz los ejercicios sin mirar nada. Si fallas, apunta por qué.
> Y cada día, antes de nada, haz el **repaso**: diez minutos que te ahorran horas.

1. **Objetivos y test de entrada.** Léelos antes de empezar. Si el test de entrada te cuesta, repasa antes los prerrequisitos.
   Si ya sabes parte de un área, la **prueba de nivel** te dice por dónde empezar.
2. **Escalera: práctico → formal.** Cada idea se explica primero con palabras normales y ejemplos, y después con su
   definición y su demostración. Con el selector «Explicación» puedes ver solo una de las dos, pero el objetivo es llegar
   siempre a la formal. Las palabras técnicas subrayadas con puntos tienen su explicación en el **glosario** (pasa el
   ratón por encima).
3. **Lee con lápiz y papel** (o en el lienzo de tu Libreta). No pases de largo una demostración: ciérrala, reconstruye el
   argumento **sin mirar** y compara.
4. **Ejemplos resueltos: tápalos.** Cubre la solución, intenta el siguiente paso tú, y destapa para comprobar.
5. **Ejercicios en orden y sin ayuda.** La respuesta debe salir de tu cabeza. Si te atascas, pide una pista, empezando por la
   del nivel más bajo (concepto); solo después, la herramienta y la documentación. La pista se registra: es una medida
   honesta de tu autonomía. En muchos ejercicios, cada acierto trae **datos nuevos**: repítelo hasta que salga solo.
6. **Diario de errores.** Cuando fallas, Exodus te pregunta qué ha pasado (concepto, cálculo, mala lectura, despiste…). En
   **Errores** ves qué tipo de error repites; un fallo de concepto hace que ese tema vuelva antes al repaso.
7. **Repaso espaciado cada día.** La página de **Repaso** te pregunta, sin apuntes, lo que ya resolviste, pero **no con el
   mismo enunciado**: con otros datos o con una pregunta distinta del mismo tema. Vuelve a los $1$, $3$, $7$, $16$, $35$ y
   $70$ días; si fallas, **vuelve mañana**. Diez minutos diarios valen más que dos horas el domingo. La **práctica
   intercalada** mezcla temas que ya dominas, como en un examen.
8. **Sin IA mientras estudias.** Es la regla del proyecto: resolver con ayuda te deja con la sensación de haberlo hecho sin
   que tu memoria haya hecho el trabajo. La dificultad es la parte que enseña.

## 4. Errores de estudio frecuentes

- **Ilusión de competencia**: confundir «lo reconozco» con «lo sé producir». Se corrige autoexaminándose antes de dar un tema por
  aprendido.
- **Estudio en maratón**: concentrar todo en un día, con la esperanza de que se quede. Se olvida mucho más rápido.
- **Saltar prerrequisitos**: es una causa muy frecuente de atascos. Retrocede sin miedo.
- **Evitar el error**: equivocarse **es** el aprendizaje, siempre que lo corrijas pronto.
- **Cambiar de método cada semana** sin darle tiempo a funcionar.

## 5. Razonar con rigor

Las matemáticas y la informática exigen una habilidad que se entrena como cualquier otra: comprobar que cada paso **se sigue** del
anterior. Es lo que enseña la sección de demostraciones de cada nodo. Un ejemplo clásico: «demostrar» que $2 = 1$ parte de $a = b$ y, tras
varios pasos aparentemente correctos, llega a un absurdo. Hay **un paso** ilegal (en uno se divide entre una cantidad que vale cero). Encontrar ese paso,
y no solo creer en el resultado final, es pensar bien.

Pólya (1945) propone, para cualquier problema, **cuatro fases**: entender, trazar un plan, ejecutarlo y mirar atrás. Todo ejercicio
de Exodus se beneficia de ese hábito: lo último («¿tiene sentido el resultado?») evita la mayoría de los errores.

## 6. Un plan realista

> [!practico]
> Aprender matemáticas y física desde 1.º de ESO hasta la universidad es una maratón de meses, no un sprint de semanas.
> Lo que cuenta no es cuánto estudias un día, sino estudiar **casi todos los días**.

Algunas cuentas para hacerse una idea:

- El **troncal** (de 1.º de ESO a Bachillerato) son unos $30$ nodos. Si cada uno exige unas $10$ horas entre teoría,
  ejercicios y repasos, son unas $300$ horas: a $1$ hora diaria, unos $10$ meses; a $2$ horas, unos $5$.
- Las **ramas** llegan hasta el nivel de un máster y son mucho más largas: se cuentan en años. En **Objetivos** eliges una
  meta (por ejemplo, primero del doble grado de la UNED) y Exodus calcula a qué ritmo vas.
- Es preferible una hora al día, siete días a la semana, que siete horas el sábado.

Un buen hábito: **mismo sitio, misma hora, sin distracciones**, y empezar siempre por el **repaso** del día (10 minutos),
antes del material nuevo. El **temporizador** (botón ⏱, o Alt+P) divide el estudio en bloques de 25 minutos con pausas y
anota el tiempo en el tema que estudias.

## Repaso: lo que debe quedarte dentro de un mes

1. Recuperar de memoria y espaciar son las dos técnicas con utilidad **alta**; releer y subrayar, **baja**.
2. Releer da sensación de saber; examinarse da retención real.
3. Dominio antes de avanzar; el repaso de Exodus: $1, 3, 7, 16, 35, 70$ días, y un fallo vuelve a mañana.
4. Constancia diaria: la meta es de meses o años.

## Siguiente

Empieza por [[mat-numeros-naturales]], el primer nodo de matemáticas del troncal.
