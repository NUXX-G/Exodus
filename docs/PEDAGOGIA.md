# Pedagogía de Exodus

Objetivo: llevar a una persona desde el nivel de 1º de ESO hasta el de un máster, en cada rama.
El **troncal es la primera escalera** (N0 a N3, con los cimientos de todas las áreas) y las ramas parten de él (N4 a N6). Este documento fija **cómo** se enseña y se evalúa. El **qué** está en `CURRICULO.md`.

## Evidencia en que se apoya

Verificadas en la web durante la sesión del 2026-11-12:

- **Práctica de recuperación y práctica espaciada**: la monografía de Dunlosky et al. (2013, *Psychological
  Science in the Public Interest*, 14(1)) valora diez técnicas de estudio. Solo la **práctica de recuperación**
  (autoevaluarse) y la **práctica distribuida** (espaciar el estudio) obtienen utilidad alta. La
  interrogación elaborativa, la autoexplicación y la práctica intercalada obtienen utilidad moderada.
  Subrayar, resumir y releer obtienen utilidad baja.
  <https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html>
- **Aprendizaje de dominio** (Bloom, 1984, «The 2 Sigma Problem», *Educational Researcher*, 13(6), 4-16): con
  retroalimentación correctiva y exigiendo dominio antes de avanzar, el alumno medio rinde en torno a 1
  desviación típica por encima de la enseñanza convencional; con tutoría individual, en torno a 2.
  La cifra exacta conviene contrastarla con el artículo original.
- **Ejemplos resueltos y su desvanecimiento** (Sweller y Cooper, 1985; Kalyuga, Ayres, Chandler y Sweller,
  2003): al principio un ejemplo resuelto enseña más que un problema abierto; cuando el alumno gana
  conocimiento esa guía estorba (*efecto de inversión de la pericia*), de modo que se **retiran pasos
  gradualmente**. Los estudios proceden sobre todo de dominios bien estructurados (matemáticas, física).

Pendientes de verificar antes de citarlas en un nodo: Ericsson, Krampe y Tesch-Römer (1993, *Psychological
Review*, 100(3)) sobre práctica deliberada; Roediger y Karpicke (2006, *Psychological Science*, 17(3)) sobre el
efecto de la prueba; Cepeda et al. (2006, *Psychological Bulletin*, 132(3)) sobre el espaciado.

Referencias de currículo consultadas:

- **CS2023** (ACM, IEEE-CS y AAAI, enero de 2024): 17 áreas de conocimiento para computación de grado.
  <https://csed.acm.org/>
- **CyBOK v1.1** (julio de 2021): 21 áreas de conocimiento de ciberseguridad.
  <https://www.cybok.org/>

## Principios de diseño

1. **Dominio antes de avanzar.** Un nodo se completa al demostrar dominio (umbral de aciertos), no al leerlo.
   Un fallo no penaliza: devuelve al material y permite reintentar con ejercicios equivalentes.
2. **Escalera de ejercicios por nodo**, del más guiado al más libre:
   1. *Ejemplo resuelto* paso a paso, con el porqué de cada paso.
   2. *Ejemplo a completar*: faltan uno o dos pasos.
   3. *Problemas propios*: enunciado completo, respuesta autocorregida.
   4. *Reto integrador* con flag: calcula un resultado grande y único que no se adivina.
3. **Recuperación activa.** Cada nodo cierra con preguntas sin apuntes. Cada ejercicio resuelto entra en un
   calendario de **repaso espaciado**: 1, 3, 7, 16, 35 días, con reinicio si se falla.
4. **Intercalado.** Los repasos mezclan temas de nodos distintos; los ejercicios de un nodo incluyen
   problemas de prerrequisitos.
5. **Teoría rigurosa y mínima.** Definiciones precisas, enunciados exactos, demostración de lo que enseña algo,
   cero relleno. Cada afirmación no trivial lleva una fuente verificada.
6. **Aplicación real en cada nodo**: un caso del trabajo o de la vida diaria (finanzas, salud, ingeniería,
   seguridad, datos), para que lo aprendido se use fuera de la plataforma.
7. **Sin IA durante el estudio.** Tres niveles de pista por reto: concepto, herramienta o comando,
   documentación oficial. Nunca la solución.

## Plantilla de nodo

Todo nodo tiene, en este orden:

1. **Objetivos** medibles («al terminar sabrás calcular…»). Se evalúan en los ejercicios.
2. **Qué debes dominar antes** (prerrequisitos, con enlaces) y un test de entrada de 3 preguntas.
3. **Idea central** en lenguaje llano y un caso real que motiva el tema.
4. **Teoría**: definiciones, teoremas, demostraciones, código ejecutable.
5. **Ejemplos resueltos** (mínimo tres, de dificultad creciente).
6. **Errores típicos** y cómo detectarlos.
7. **Ejercicios graduados** (cuatro niveles de la escalera).
8. **Reto integrador** con flag.
9. **Fuentes** (al menos dos independientes para el contenido central: un manual de referencia y una
   fuente primaria u oficial).
10. **Repaso espaciado**: las 3 a 5 ideas que deben seguir en la memoria dentro de un mes.

## Criterios de calidad (puerta antes de fusionar un nodo)

- Todo resultado numérico del texto y de los retos se **recalcula con un segundo método**.
- Las citas se **comprueban en la web** o se omite el dato que no se pueda respaldar (sin números de capítulo de memoria).
- `npm run vault:check` en verde: LaTeX, enlaces, grafo de prerrequisitos.
- Un lector del nivel anterior puede seguir el nodo sin saltos: cada símbolo se define antes de usarlo.

## Niveles de la escalera

| Nivel | Equivale a | Se sabe hacer |
|:---:|---|---|
| N0 | 1º-2º de ESO (troncal) | Operar con números y fórmulas sencillas, razonar con rigor básico |
| N1 | ESO / Bachillerato | Modelar con funciones y álgebra, programar lo básico |
| N2 | Bachillerato / 1.º de grado | Cálculo, física con cálculo, programación estructurada |
| N3 | Grado (fin del troncal) | Teoría de grado y su práctica profesional inicial |
| N4 | Grado avanzado | Especialización con demostración y proyecto |
| N5 | Máster | Resolver problemas abiertos de la especialidad |
| N6 | Frontera | Leer y reproducir artículos de investigación recientes |
