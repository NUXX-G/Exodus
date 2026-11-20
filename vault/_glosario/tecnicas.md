---
glosario: bajo-nivel
terminos:
  - termino: algoritmo
    sinonimos: [algoritmos]
    llano: "Una receta exacta, paso a paso, para resolver un problema, tan precisa que la puede seguir una máquina sin pensar."
    formal: "Secuencia finita de instrucciones bien definidas que, para cada entrada válida, termina y produce una salida."
    nodo: prog-pensamiento-computacional
  - termino: compilador
    sinonimos: [compiladores]
    llano: "Un programa que traduce el código que escribes (en C, Rust…) al lenguaje de instrucciones que entiende el procesador."
    formal: "Traductor de un lenguaje fuente a uno destino (código máquina u otro intermedio), con análisis léxico, sintáctico y semántico, optimización y generación de código."
    nodo: sys-c-fundamentos
  - termino: puntero
    sinonimos: [punteros]
    llano: "Una variable que no guarda un dato, sino la dirección de memoria donde está el dato: como apuntar el número de una taquilla en vez de llevar lo que hay dentro."
    formal: "En C, objeto de tipo `T *` cuyo valor es la dirección de un objeto de tipo `T` (o nulo); `*p` accede al objeto y la aritmética avanza en múltiplos de `sizeof(T)`."
    nodo: sys-c-memoria
  - termino: sistema operativo
    sinonimos: [sistemas operativos]
    llano: "El programa que manda en el ordenador: reparte el procesador y la memoria entre los programas y les da acceso a discos, red y pantalla."
    formal: "Software que gestiona los recursos del hardware y ofrece abstracciones (procesos, memoria virtual, archivos, sockets) a través de llamadas al sistema, con el núcleo en modo privilegiado."
    nodo: sys-sistemas-operativos
  - termino: condición de carrera
    sinonimos: [condiciones de carrera]
    llano: "Un fallo que aparece cuando dos tareas tocan el mismo dato a la vez y el resultado depende de quién llegue antes: a veces funciona y a veces no."
    formal: "Situación en la que el resultado depende del entrelazado de operaciones concurrentes sobre estado compartido sin sincronización suficiente (en C y C++, una carrera de datos es comportamiento indefinido)."
    nodo: sys-concurrencia
  - termino: interbloqueo
    sinonimos: [deadlock]
    llano: "Cuando dos tareas se quedan esperándose la una a la otra para siempre: cada una tiene algo que la otra necesita."
    formal: "Estado en que un conjunto de hilos espera recursos retenidos por otros del conjunto; requiere exclusión mutua, retención y espera, no expropiación y espera circular (condiciones de Coffman)."
    nodo: sys-concurrencia
---

Glosario de bajo nivel (esta nota no es un nodo). Los glosarios de las demás ramas técnicas están en sus propias notas.
