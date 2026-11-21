---
glosario: matematicas
terminos:
  - termino: número primo
    sinonimos: [números primos]
    llano: "Un número mayor que 1 que solo se puede dividir exactamente entre 1 y entre sí mismo, como 2, 3, 5, 7 u 11. Son las «piezas» con las que se construyen todos los demás multiplicando."
    formal: "Un entero $p > 1$ cuyos únicos divisores positivos son $1$ y $p$. Teorema fundamental de la aritmética: todo entero $n > 1$ se escribe de forma única (salvo el orden) como producto de primos."
    nodo: mat-divisibilidad
  - termino: máximo común divisor
    llano: "El número más grande que divide exactamente a dos números a la vez. El de 12 y 18 es 6. Sirve para simplificar fracciones."
    formal: "Para enteros $a, b$ no ambos nulos, $\\gcd(a, b)$ es el mayor entero positivo $d$ con $d \\mid a$ y $d \\mid b$. Se calcula con el algoritmo de Euclides: $\\gcd(a, b) = \\gcd(b, a \\bmod b)$."
    nodo: mat-divisibilidad
  - termino: fracción irreducible
    sinonimos: [fracciones irreducibles]
    llano: "Una fracción que ya no se puede simplificar más: arriba y abajo no tienen ningún divisor común salvo el 1, como 3/4 (y no 6/8)."
    formal: "Una fracción $a/b$ con $b > 0$ y $\\gcd(a, b) = 1$. Todo número racional tiene exactamente una representación irreducible."
    nodo: mat-fracciones
  - termino: incógnita
    sinonimos: [incógnitas]
    llano: "El dato que no conocemos y queremos averiguar en una ecuación; se le pone una letra, normalmente x."
    formal: "Variable cuyo valor se busca: los valores que la sustituyen y hacen verdadera la ecuación son sus soluciones."
    nodo: mat-ecuaciones-primer-grado
  - termino: ecuación
    sinonimos: [ecuaciones]
    llano: "Una igualdad con algo desconocido. Resolverla es encontrar qué valores hacen que los dos lados valgan lo mismo."
    formal: "Igualdad $f(x) = g(x)$ entre dos expresiones; su conjunto solución es $\\{x : f(x) = g(x)\\}$ dentro del dominio considerado."
    nodo: mat-ecuaciones-primer-grado
  - termino: porcentaje
    sinonimos: [porcentajes, tanto por ciento]
    llano: "Una forma de decir «cuántos de cada 100». Un 25 % es 25 de cada 100, es decir, la cuarta parte."
    formal: "Un $p\\,\\%$ es la razón $p/100$. Aplicar un aumento del $p\\,\\%$ equivale a multiplicar por $1 + p/100$; una disminución, por $1 - p/100$."
    nodo: mat-porcentajes-finanzas
  - termino: proporcionalidad directa
    sinonimos: [directamente proporcionales]
    llano: "Dos cantidades que crecen a la vez y al mismo ritmo: si una se duplica, la otra también (kilos de fruta y precio a pagar)."
    formal: "Las magnitudes $x$ e $y$ son directamente proporcionales si existe $k \\ne 0$ con $y = kx$ para todos los pares de valores; $k$ es la constante de proporcionalidad."
    nodo: mat-proporcionalidad
  - termino: proporcionalidad inversa
    sinonimos: [inversamente proporcionales]
    llano: "Dos cantidades en las que si una se duplica la otra se reduce a la mitad: más obreros, menos días para la misma obra."
    formal: "Las magnitudes $x$ e $y$ (no nulas) son inversamente proporcionales si $xy = k$ constante, es decir, $y = k/x$."
    nodo: mat-proporcionalidad
  - termino: hipotenusa
    llano: "En un triángulo con un ángulo recto (como una esquina de un folio), el lado más largo: el que está enfrente de esa esquina."
    formal: "En un triángulo rectángulo, el lado opuesto al ángulo recto. Por el teorema de Pitágoras, $c^2 = a^2 + b^2$, donde $c$ es la hipotenusa y $a, b$ los catetos."
    nodo: mat-triangulos-pitagoras
  - termino: función
    sinonimos: [funciones]
    llano: "Una regla que a cada valor de entrada le asigna exactamente un valor de salida, como «a cada hora del día, la temperatura»."
    formal: "Una función $f\\colon A \\to B$ asigna a cada $a \\in A$ un único $f(a) \\in B$. $A$ es el dominio y $B$ el codominio."
    nodo: mat-funciones-basicas
  - termino: polinomio
    sinonimos: [polinomios]
    llano: "Una expresión hecha sumando potencias de una letra multiplicadas por números, como 3x² − 5x + 2."
    formal: "Expresión $a_n x^n + \\dots + a_1 x + a_0$ con coeficientes $a_i$ en un cuerpo (o anillo) y $n \\in \\mathbb N$; si $a_n \\ne 0$, su grado es $n$."
    nodo: mat-expresiones-algebraicas
  - termino: logaritmo
    sinonimos: [logaritmos]
    llano: "La pregunta «¿a qué número hay que elevar la base para obtener este resultado?». Como 10 × 10 × 10 = 1000, el logaritmo en base 10 de 1000 es 3."
    formal: "Para $b > 0$, $b \\ne 1$ y $x > 0$: $\\log_b x = y \\iff b^y = x$. Cumple $\\log_b(xy) = \\log_b x + \\log_b y$."
    nodo: mat-exponenciales-logaritmos
    tambien: [mat-numeros-naturales]
  - termino: seno
    llano: "En un triángulo rectángulo, el cociente entre el lado opuesto a un ángulo y la hipotenusa. Dice «cuánto sube» por cada unidad de longitud inclinada."
    formal: "Para un ángulo $\\theta$, $\\sin\\theta$ es la ordenada del punto de la circunferencia unidad que forma un ángulo $\\theta$ con el eje $x$; en un triángulo rectángulo, cateto opuesto entre hipotenusa."
    nodo: mat-trigonometria
  - termino: coseno
    llano: "En un triángulo rectángulo, el cociente entre el lado pegado a un ángulo (no la hipotenusa) y la hipotenusa: «cuánto avanza» en horizontal."
    formal: "$\\cos\\theta$ es la abscisa del punto de la circunferencia unidad de ángulo $\\theta$; en un triángulo rectángulo, cateto contiguo entre hipotenusa. $\\sin^2\\theta + \\cos^2\\theta = 1$."
    nodo: mat-trigonometria
  - termino: teorema
    sinonimos: [teoremas]
    llano: "Una afirmación matemática que se ha demostrado que es verdad a partir de otras ya aceptadas."
    formal: "Proposición que se deduce, mediante reglas lógicas, de axiomas, definiciones y resultados ya demostrados."
    nodo: mat-logica-demostraciones
    tambien: [mat-numeros-naturales, mat-divisibilidad, mat-triangulos-pitagoras]
  - termino: axioma
    sinonimos: [axiomas]
    llano: "Una regla de partida que se acepta sin demostrarla, como los cimientos de una casa: todo lo demás se construye encima."
    formal: "Enunciado que se toma como punto de partida de una teoría sin demostración; los teoremas se deducen de los axiomas."
    nodo: mat-logica-demostraciones
  - termino: inducción matemática
    sinonimos: [principio de inducción]
    llano: "Una forma de demostrar algo para todos los números como con fichas de dominó: se comprueba que cae la primera y que cada una tira la siguiente."
    formal: "Si $P(1)$ es cierta y $P(n) \\Rightarrow P(n+1)$ para todo $n \\ge 1$, entonces $P(n)$ es cierta para todo $n \\ge 1$."
    nodo: mat-logica-demostraciones
  - termino: derivada
    sinonimos: [derivadas]
    llano: "Lo rápido que cambia algo en un instante: la velocidad es la derivada de la posición. Gráficamente, la inclinación de la curva en un punto."
    formal: "$f'(a) = \\displaystyle\\lim_{h\\to0}\\frac{f(a+h) - f(a)}{h}$, si el límite existe. Es la pendiente de la recta tangente a la gráfica en $(a, f(a))$."
    nodo: mat-calculo-1
  - termino: integral
    sinonimos: [integrales]
    llano: "La forma de sumar infinitos trocitos muy pequeños: por ejemplo, el área bajo una curva, o la distancia recorrida a partir de la velocidad."
    formal: "La integral de Riemann $\\int_a^b f(x)\\,dx$ es el límite de las sumas $\\sum f(\\xi_i)\\,\\Delta x_i$ cuando la partición se hace fina; si $F' = f$ (continua), vale $F(b) - F(a)$."
    nodo: mat-calculo-2
  - termino: matriz
    sinonimos: [matrices]
    llano: "Una tabla rectangular de números en filas y columnas. Sirve para guardar datos y, sobre todo, para describir transformaciones como girar o estirar."
    formal: "Una matriz $m\\times n$ sobre un cuerpo $K$ es una familia $(a_{ij})$ con $1 \\le i \\le m$, $1 \\le j \\le n$; representa una aplicación lineal $K^n \\to K^m$."
    nodo: mat-algebra-lineal-1
  - termino: determinante
    llano: "Un número que se calcula a partir de una matriz cuadrada y dice cuánto «estira» el área o el volumen la transformación; si vale 0, la aplasta y no se puede deshacer."
    formal: "Función $\\det\\colon M_n(K) \\to K$ multilineal y alternada en las columnas con $\\det I = 1$. $A$ es invertible si y solo si $\\det A \\ne 0$."
    nodo: mat-algebra-lineal-1
  - termino: probabilidad
    llano: "Un número entre 0 y 1 que mide lo esperable que es que algo pase: 0 es imposible, 1 seguro, 0,5 tan probable como no."
    formal: "Medida $P$ sobre los sucesos de un espacio muestral con $P(\\Omega) = 1$, $P(A) \\ge 0$ y aditividad numerable (axiomas de Kolmogórov)."
    nodo: mat-combinatoria-probabilidad-basica
  - termino: variable aleatoria
    sinonimos: [variables aleatorias]
    llano: "Un número que depende del azar, como el resultado de lanzar un dado o la altura de una persona elegida al azar."
    formal: "Función medible $X\\colon \\Omega \\to \\mathbb R$ definida sobre un espacio de probabilidad $(\\Omega, \\mathcal F, P)$."
    nodo: mat-probabilidad
    tambien: [mat-distribuciones-binomial-normal]
  - termino: progresión aritmética
    sinonimos: [progresiones aritméticas]
    llano: "Una lista de números en la que se suma siempre la misma cantidad para pasar de uno al siguiente, como 3, 7, 11, 15…"
    formal: "Sucesión con $a_{n+1} = a_n + d$; término general $a_n = a_1 + (n-1)d$ y suma $S_n = \\frac{(a_1 + a_n)n}{2}$."
    nodo: mat-sucesiones-progresiones
  - termino: progresión geométrica
    sinonimos: [progresiones geométricas]
    llano: "Una lista de números en la que se multiplica siempre por la misma cantidad para pasar de uno al siguiente, como 2, 6, 18, 54…"
    formal: "Sucesión con $a_{n+1} = r\\,a_n$; término general $a_n = a_1 r^{n-1}$ y, si $r \\ne 1$, suma $S_n = a_1\\frac{r^n - 1}{r - 1}$."
    nodo: mat-sucesiones-progresiones
  - termino: número irracional
    sinonimos: [números irracionales]
    llano: "Un número que no se puede escribir como fracción: su parte decimal sigue para siempre sin repetirse, como la raíz cuadrada de 2 o el número pi."
    formal: "Número real que no pertenece a $\\mathbb{Q}$; por ejemplo $\\sqrt{2}$ (prueba por reducción al absurdo) o $\\pi$."
    nodo: mat-numeros-reales
  - termino: número complejo
    sinonimos: [números complejos]
    llano: "Un número de la forma a + bi, donde i es un número inventado que cumple i·i = −1. Se dibuja como un punto o una flecha en un plano; multiplicar por él gira y estira."
    formal: "Elemento $a + bi$ de $\\mathbb{C}$, con $a, b \\in \\mathbb{R}$ e $i^2 = -1$; en forma polar $r(\\cos\\theta + i\\sin\\theta)$, y el producto multiplica módulos y suma argumentos."
    nodo: mat-numeros-complejos
  - termino: recta de regresión
    sinonimos: [rectas de regresión, regresión lineal]
    llano: "La recta que pasa lo más cerca posible de una nube de puntos de datos; sirve para resumir la relación entre dos variables y hacer predicciones."
    formal: "Recta $y - \\bar y = \\frac{s_{xy}}{s_x^2}(x - \\bar x)$, que minimiza la suma de los cuadrados de los errores verticales (mínimos cuadrados)."
    nodo: mat-estadistica-bidimensional
  - termino: supremo
    sinonimos: [supremos]
    llano: "El «techo» más bajo posible de un conjunto de números: el menor número que no es superado por ninguno del conjunto. Puede no pertenecer al conjunto: el supremo de 0,9; 0,99; 0,999… es 1."
    formal: "Para $S \\subseteq \\mathbb R$ no vacío y acotado superiormente, $\\sup S$ es la menor de sus cotas superiores. El axioma del supremo afirma que existe en $\\mathbb R$; en $\\mathbb Q$ puede no existir."
    nodo: mat-conjuntos-numeros
  - termino: conjunto cociente
    sinonimos: [conjuntos cociente]
    llano: "El conjunto que resulta de agrupar en montones las cosas que una relación considera «iguales» y tratar cada montón como un objeto nuevo, como las horas de un reloj."
    formal: "Dada una relación de equivalencia $\\sim$ en $A$, $A/\\!\\sim\\; = \\{[a] : a \\in A\\}$ es el conjunto de sus clases de equivalencia."
    nodo: mat-conjuntos-numeros
  - termino: espacio métrico
    sinonimos: [espacios métricos]
    llano: "Un conjunto en el que se ha fijado una forma de medir la distancia entre dos puntos cualesquiera, con tres reglas: solo vale cero entre un punto y sí mismo, de A a B es lo mismo que de B a A, y nunca es más corto dar un rodeo."
    formal: "Un par $(X, d)$ con $d : X \\times X \\to [0, \\infty)$ tal que $d(x, y) = 0 \\iff x = y$, $d(x, y) = d(y, x)$ y $d(x, z) \\le d(x, y) + d(y, z)$ (desigualdad triangular)."
    nodo: mat-geometria-euclidea
    tambien: [mat-topologia]
  - termino: isometría
    sinonimos: [isometrías]
    llano: "Un movimiento que no deforma: conserva todas las distancias, como deslizar, girar o dar la vuelta a una figura de papel."
    formal: "Una aplicación $f$ entre espacios métricos con $d(f(x), f(y)) = d(x, y)$ para todo $x, y$. En el plano euclídeo son las traslaciones, los giros, las simetrías y las simetrías con deslizamiento."
    nodo: mat-geometria-euclidea
    tambien: [mat-movimientos-plano]
---

Glosario de matemáticas (esta nota no es un nodo). Cada término: explicación llana, definición formal y el nodo donde
se estudia. Fuentes de las definiciones: las de cada nodo enlazado.
