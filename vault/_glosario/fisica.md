---
glosario: fisica
terminos:
  - termino: velocidad media
    llano: "La distancia recorrida en una dirección dividida entre el tiempo empleado: si haces 120 km en 2 horas, 60 km/h de media, aunque a ratos fueras más rápido o más lento."
    formal: "$\\bar v = \\Delta x / \\Delta t$, cociente del desplazamiento entre el intervalo de tiempo. Es un vector en el caso tridimensional: $\\bar{\\vec v} = \\Delta\\vec r/\\Delta t$."
    nodo: fis-cinematica-rectilinea
    tambien: [mat-proporcionalidad-porcentajes]
  - termino: aceleración
    llano: "Lo rápido que cambia la velocidad: un coche que pasa de 0 a 100 km/h en pocos segundos tiene mucha aceleración. Frenar también es acelerar (en sentido contrario)."
    formal: "$\\vec a = d\\vec v/dt$, derivada de la velocidad respecto del tiempo. En el SI se mide en m/s²."
    nodo: fis-cinematica-rectilinea
    tambien: [mat-calculo-1, mat-derivadas]
  - termino: magnitud vectorial
    sinonimos: [magnitudes vectoriales]
    llano: "Una cantidad que no se describe solo con un número: también importa hacia dónde apunta. La velocidad o la fuerza lo son; la masa o la temperatura, no."
    formal: "Magnitud representada por un vector: módulo, dirección y sentido; se suma con la regla del paralelogramo y cambia de componentes al girar los ejes."
    nodo: fis-vectores-movimiento-plano
  - termino: fuerza
    sinonimos: [fuerzas]
    excepto: [fuerza bruta, fuerzas armadas, a la fuerza, por fuerza, misma fuerza, con fuerza, más fuerza, fuerza de voluntad, su fuerza]
    llano: "Un empujón o un tirón que puede cambiar cómo se mueve algo (acelerarlo, frenarlo, desviarlo) o deformarlo. Se mide en newtons."
    formal: "Magnitud vectorial que mide la interacción entre cuerpos; segunda ley de Newton: $\\vec F_{\\text{neta}} = m\\vec a$ (masa constante). $1\\ \\mathrm N = 1\\ \\mathrm{kg\\,m/s^2}$."
    nodo: fis-fuerzas-energia
  - termino: energía cinética
    llano: "La energía que tiene algo por estar moviéndose: cuanto más pesado y, sobre todo, más rápido, más tiene (al doble de velocidad, cuatro veces más)."
    formal: "$E_c = \\tfrac12 m v^2$ para una partícula de masa $m$ y rapidez $v$ (mecánica no relativista). Teorema de las fuerzas vivas: el trabajo neto es igual a $\\Delta E_c$."
    nodo: fis-fuerzas-energia
  - termino: energía potencial
    llano: "Energía «guardada» por la posición: un libro en lo alto de una estantería la tiene y la convierte en movimiento si se cae."
    formal: "Para una fuerza conservativa $\\vec F$, $U$ tal que $\\vec F = -\\nabla U$; cerca de la superficie terrestre, $U = mgh$."
    nodo: fis-fuerzas-energia
  - termino: rozamiento
    llano: "La fuerza que se opone a que una superficie deslice sobre otra; por eso un objeto que empujas acaba parándose."
    formal: "Fuerza tangente al contacto; en el modelo de Coulomb, estático $f_s \\le \\mu_s N$ y dinámico $f_k = \\mu_k N$, opuesto a la velocidad relativa."
    nodo: fis-fuerzas-energia
  - termino: inercia
    excepto: [ley de inercia de Sylvester]
    llano: "La tendencia de las cosas a seguir como están: si van, seguir yendo; si están quietas, seguir quietas. Por eso te vas hacia delante cuando el autobús frena."
    formal: "Primera ley de Newton: en un sistema de referencia inercial, un cuerpo sin fuerza neta mantiene su velocidad. La masa inercial mide la resistencia a cambiarla."
    nodo: fis-mecanica-newtoniana
    tambien: [fis-fuerzas-energia]
  - termino: momento lineal
    sinonimos: [cantidad de movimiento]
    llano: "La «cantidad de movimiento» de algo: su masa por su velocidad. En un choque, la suma total se conserva."
    formal: "$\\vec p = m\\vec v$; $\\vec F_{\\text{neta}} = d\\vec p/dt$. En un sistema aislado, $\\sum \\vec p$ se conserva."
    nodo: fis-mecanica-newtoniana
    tambien: [fis-fuerzas-energia]
  - termino: frecuencia
    excepto: [con frecuencia, frecuencia absoluta, frecuencia relativa, frecuencia acumulada, frecuencias absolutas, frecuencias relativas, frecuencia de aparición, frecuencias de aparición, frecuencia de palabras, frecuencia de las letras, frecuencia de uso, tabla de frecuencias, tablas de frecuencias, con frecuencias, las frecuencias, frecuencia conjunta, frecuencias conjuntas, frecuencias marginales, distribución de frecuencias, frecuencias acumuladas, polígono de frecuencias]
    llano: "Cuántas veces se repite algo por segundo: una cuerda que vibra 440 veces por segundo da la nota la. Se mide en hercios."
    formal: "$f = 1/T$, inversa del periodo; en una onda, $v = \\lambda f$. $1\\ \\mathrm{Hz} = 1\\ \\mathrm s^{-1}$."
    nodo: fis-ondas-calor-fluidos
    tambien: [mat-trigonometria, fis-medida-movimiento, mat-funciones-trigonometricas, fis-vectores-movimiento-plano]
  - termino: longitud de onda
    llano: "La distancia entre dos crestas seguidas de una onda, como entre dos olas consecutivas."
    formal: "Periodo espacial $\\lambda$ de una onda: $y(x + \\lambda, t) = y(x, t)$. Se relaciona con la velocidad de propagación por $v = \\lambda f$."
    nodo: fis-ondas-calor-fluidos
  - termino: carga eléctrica
    llano: "Una propiedad de las partículas que hace que se atraigan o se repelan: cargas iguales se repelen y distintas se atraen."
    formal: "Magnitud escalar conservada y cuantizada (múltiplo de $e = 1{,}602\\,176\\,634\\times10^{-19}$ C); entre cargas puntuales, ley de Coulomb $F = k\\,|q_1q_2|/r^2$."
    nodo: fis-electricidad-magnetismo-1
    tambien: [ing-electricidad-basica]
  - termino: campo eléctrico
    llano: "La «influencia» que una carga crea a su alrededor: cualquier otra carga que entre ahí siente una fuerza."
    formal: "$\\vec E = \\vec F/q$, fuerza por unidad de carga de prueba; para una carga puntual, $\\vec E = k\\,q\\,\\hat r/r^2$. Unidades: N/C = V/m."
    nodo: fis-electricidad-magnetismo-1
---

Glosario de física (esta nota no es un nodo). Valor de $e$: exacto desde la redefinición del SI de 2019.
