---
glosario: ia-cuantica
terminos:
  - termino: sobreajuste
    llano: "Cuando un modelo se aprende de memoria los ejemplos de entrenamiento (incluido su ruido) y luego falla con datos nuevos, como quien memoriza las respuestas de un examen sin entender nada."
    formal: "Situación en que el error de entrenamiento es bajo pero el error de generalización (sobre datos no vistos) es alto; se detecta con validación y se combate con regularización o más datos."
    nodo: ia-aprendizaje-estadistico
  - termino: función de pérdida
    sinonimos: [funciones de pérdida]
    llano: "Un número que mide lo mucho que se equivoca un modelo: entrenarlo es ir ajustándolo para que ese número baje."
    formal: "Función $L(\\hat y, y)$ que penaliza la discrepancia entre predicción y valor real; el entrenamiento minimiza su media empírica sobre los datos."
    nodo: ia-aprendizaje-estadistico
  - termino: descenso por gradiente
    llano: "Una forma de encontrar el punto más bajo de una montaña con niebla: dar pasos pequeños siempre cuesta abajo, en la dirección en que más baja."
    formal: "Iteración $\\theta_{t+1} = \\theta_t - \\eta\\,\\nabla L(\\theta_t)$ con tasa de aprendizaje $\\eta > 0$; en su versión estocástica, el gradiente se estima con un lote de datos."
    nodo: ia-redes-profundas
  - termino: red neuronal
    sinonimos: [redes neuronales]
    llano: "Un modelo hecho de muchas capas de operaciones sencillas (sumar con pesos y aplicar una curva) que, ajustando esos pesos con datos, aprende a reconocer patrones."
    formal: "Composición $f = f_L \\circ \\dots \\circ f_1$ de capas $f_\\ell(x) = \\sigma(W_\\ell x + b_\\ell)$ con funciones de activación no lineales; sus parámetros se ajustan minimizando una pérdida con retropropagación."
    nodo: ia-redes-profundas
  - termino: qubit
    sinonimos: [qubits, cúbit, cúbits]
    llano: "La unidad de información de un ordenador cuántico: a diferencia de un bit, puede estar en una combinación de 0 y 1 hasta que se mide."
    formal: "Sistema cuántico de dos niveles: estado $\\alpha\\lvert0\\rangle + \\beta\\lvert1\\rangle$ con $\\lvert\\alpha\\rvert^2 + \\lvert\\beta\\rvert^2 = 1$; al medir sale 0 con probabilidad $\\lvert\\alpha\\rvert^2$."
    nodo: cua-computacion-cuantica
---

Glosario de IA y computación cuántica (esta nota no es un nodo).
