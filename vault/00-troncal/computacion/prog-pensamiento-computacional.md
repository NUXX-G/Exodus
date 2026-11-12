---
id: prog-pensamiento-computacional
title: "Pensamiento computacional: algoritmos, bits y trazas"
area: bajo-nivel
trunk_level: 1
prerequisites: [mat-numeros-naturales]
academic_sources:
  - "Abelson, H.; Sussman, G. J.; Sussman, J. Structure and Interpretation of Computer Programs, 2ª ed. MIT Press, 1996."
  - "Knuth, D. E. The Art of Computer Programming, vol. 1: Fundamental Algorithms, 3ª ed. Addison-Wesley, 1997."
  - "Cormen, T. H.; Leiserson, C. E.; Rivest, R. L.; Stein, C. Introduction to Algorithms, 4ª ed. MIT Press, 2022."
  - "Wing, J. M. Computational Thinking. Communications of the ACM, 49(3), 33-35, 2006."
  - "Euclides. Elementos, libro VII, proposiciones 1 y 2 (algoritmo de Euclides). Edición en línea de D. E. Joyce, Clark University."
  - "Pólya, G. How to Solve It. Princeton University Press, 1945."
hints:
  - "Concepto: para predecir qué hace un programa, hazle una traza: una tabla con una fila por paso y una columna por variable. No adivines; ejecuta a mano los primeros pasos, busca el patrón y comprueba con una ejecución real. Para contar operaciones, cuenta cuántas veces se ejecuta la línea más interna."
  - "Herramienta: instala Python 3 (python.org) y ejecuta tu código con `python archivo.py`, o escribe `python` para abrir el intérprete interactivo. Para contar o comprobar sin riesgo, usa `print` dentro del bucle (solo las primeras iteraciones) y `assert` para fijar lo que debe cumplirse."
  - "Documentación oficial: docs.python.org/3/tutorial/introduction.html y docs.python.org/3/tutorial/controlflow.html (for, while, if); docs.python.org/3/library/functions.html#bin (bin) y la función incorporada `sum`."
exercises:
  - id: intercambio
    tier: 1
    prompt: |
      Sigue paso a paso este programa y da el valor **final** de las variables.

      ~~~python
      x = 5
      y = 3
      x = x + y
      y = x - y
      x = x - y
      ~~~

      Respuesta en la forma «x;y» (primero el valor de x y luego el de y).
    answers: ["sha256:dc43bb75e55bd1a41d407b63447508e12314ff83f23995acb7e87412cad54f0d"]
  - id: suma-cuadrados
    tier: 1
    prompt: |
      ¿Qué número imprime este programa?

      ~~~python
      s = 0
      for i in range(1, 11):
          s += i * i
      print(s)
      ~~~
    answers: ["sha256:131b0c35e2d7edef9dd63f48eff39341ef0a5f770538aa4e0017f41b9cdb135d"]
  - id: unos-en-binario
    tier: 1
    prompt: |
      ¿Cuántos **unos** tiene el número $2026$ escrito en binario? Respuesta: un entero.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: adivinar-1000
    tier: 2
    prompt: |
      Se piensa un número entre $1$ y $1000$ y tú lo adivinas con preguntas de sí o no («¿es menor o igual que $x$?»).
      Con la mejor estrategia, ¿cuántas preguntas bastan **en el peor caso**? Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: collatz-27
    tier: 2
    prompt: |
      Se parte de $n = 27$ y se repite: si $n$ es par se divide entre $2$; si es impar se calcula $3n + 1$. ¿Cuántos pasos hacen falta para llegar a $1$?
      Respuesta: un entero.
    answers: ["sha256:f6e0a1e2ac41945a9aa7ff8a8aaa0cebc12a3bcc981a929ad5cf810a090e11ae"]
  - id: fizzbuzz-numeros
    tier: 2
    prompt: |
      El programa «FizzBuzz» recorre $1, 2, \ldots, 1000$ e imprime «Fizz» si el número es múltiplo de $3$, «Buzz» si lo es de $5$ y «FizzBuzz» si lo es de ambos;
      en cualquier otro caso imprime el propio número. ¿Cuántas líneas imprimen **el número** (no una palabra)? Respuesta: un entero.
    answers: ["sha256:fb8a0d2da8683cec6cc64542f95ae11e085c72d56c744b2be5be335295976610"]
  - id: bucles-anidados
    tier: 2
    prompt: |
      ¿Cuánto vale la variable c al final?

      ~~~python
      c = 0
      for i in range(1, 11):
          for j in range(i, 11):
              c += 1
      print(c)
      ~~~
    answers: ["sha256:02d20bbd7e394ad5999a4cebabac9619732c343a4cac99470c03e23ba2bdc2bc"]
  - id: burbuja
    tier: 2
    prompt: |
      Este programa ordena una lista y cuenta los intercambios que hace. ¿Qué número imprime?

      ~~~python
      a = [5, 2, 9, 1, 5, 6]
      sw = 0
      for i in range(len(a)):
          for j in range(len(a) - 1 - i):
              if a[j] > a[j + 1]:
                  a[j], a[j + 1] = a[j + 1], a[j]
                  sw += 1
      print(sw)
      ~~~
    answers: ["sha256:e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683"]
  - id: pasos-euclides
    tier: 3
    prompt: |
      ¿Cuántas iteraciones del bucle hace este programa?

      ~~~python
      a, b, pasos = 10946, 6765, 0
      while b:
          a, b = b, a % b
          pasos += 1
      print(pasos)
      ~~~
    answers: ["sha256:9400f1b21cb527d7fa3d3eabba93557a18ebe7a2ca4e471cfe5e4c5b4ca7f767"]
  - id: congruencial
    tier: 3
    prompt: |
      ¿Qué imprime este programa? (Pista de método: ejecútalo, o busca el ciclo que forman los valores.)

      ~~~python
      x = 1
      for _ in range(1000):
          x = (7 * x + 3) % 101
      print(x)
      ~~~
    answers: ["sha256:6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"]
  - id: multiplos-3-o-5
    tier: 3
    prompt: |
      ¿Cuánto suman todos los números naturales menores que $1000$ que son múltiplos de $3$ **o** de $5$? Respuesta: un entero.
    answers: ["sha256:c0b20f4665d0388d564f0b6ecf3edc9f9480cb15fff87198b95701d9f5fe1f7b"]
  - id: fibonacci-40
    tier: 3
    prompt: |
      Con $F_0 = 0$, $F_1 = 1$ y $F_n = F_{n-1} + F_{n-2}$, ¿cuánto vale $F_{40}$? Respuesta: un entero.
    answers: ["sha256:10644921fbf8cd16d23d6d1b762f2f564f78a7e4ed7258aa6f23d698797cf49e"]
  - id: busqueda-binaria
    tier: 3
    prompt: |
      Se busca el número $777\,777$ en la lista ordenada $1, 2, \ldots, 1\,000\,000$ con búsqueda binaria (se mira siempre el elemento central, $\lfloor(lo + hi)/2\rfloor$,
      y se descarta la mitad que no sirve). ¿Cuántas comparaciones de igualdad se hacen hasta encontrarlo? Respuesta: un entero.
    answers: ["sha256:4523540f1504cd17100c4835e85b7eefd49911580f8efff0599a8f283be6b9e3"]
  - id: pares-ordenados
    tier: 3
    prompt: |
      ¿Cuántos pares $(i, j)$ con $0 \le i < j < 2000$ recorre un doble bucle que compara cada elemento con todos los posteriores? Respuesta: un entero.
    answers: ["sha256:be8a5249429cfda6f0ab294bf3dab821b6783209bf2fbdd358f09690e86a12b1"]
---

# Pensamiento computacional: algoritmos, bits y trazas

Programar es **dar instrucciones exactas a una máquina que hace exactamente lo que le dices**. Antes de aprender un lenguaje
conviene aprender a pensar como ella: descomponer un problema en pasos, expresarlos sin ambigüedad, seguirlos a mano y
medir cuánto cuestan. Eso se llama **pensamiento computacional** (Wing, 2006) y es la base de todo lo que viene después, desde un
guion de Python hasta el diseño de un sistema operativo.

## Objetivos

Al terminar sabrás:

1. Describir un problema como un **algoritmo**: entradas, pasos finitos y no ambiguos, salida.
2. Seguir un programa con una **traza** y predecir su resultado sin ejecutarlo.
3. Usar variables, condiciones y bucles, y reconocer cuándo se termina un bucle.
4. Explicar cómo se representa la información con **bits** y por qué $n$ bits distinguen $2^n$ casos.
5. **Medir** un algoritmo contando pasos, y ver por qué la búsqueda binaria es tan potente.
6. Depurar con método: aislar, reproducir y comprobar.

> [!question] Test de entrada
> 1. Si $x = 4$ y se ejecuta $x = x + 3$, ¿cuánto vale $x$? 2. ¿Cuánto es $2^{10}$? 3. ¿Qué hace el algoritmo «mientras haya
> piezas sin ordenar, coger la menor y ponerla al final de la fila»?
>
> Respuestas: $7$; $1024$; **ordena** las piezas de menor a mayor (es la ordenación por selección).

## 1. Para qué sirve

- **Automatizar** lo repetitivo: renombrar mil archivos, limpiar una hoja de datos, calcular una nómina.
- **Resolver con precisión**: un algoritmo no «más o menos» funciona; o es correcto o no lo es.
- **Entender las máquinas** que te rodean: buscadores, mapas, cifrado, inteligencia artificial.
- **Pensar mejor**: descomponer, buscar patrones, abstraer y comprobar son habilidades que sirven fuera de la informática.

## 2. Qué es un algoritmo

Un **algoritmo** es una secuencia **finita** de pasos **precisos** que, a partir de unos datos de **entrada**, produce una **salida**.
Una receta de cocina es un algoritmo imperfecto (¿cuánto es «un poco de sal»?). Para una máquina, cada paso debe ser inequívoco.

**Ejemplo: el algoritmo de Euclides** para el mayor divisor común de $a$ y $b$ (nodo [[mat-numeros-naturales]]):

1. Mientras $b \neq 0$: sustituye el par $(a, b)$ por $(b,\ a \bmod b)$.
2. El resultado es $a$.

Cumple lo que exigimos: es finito (el resto decrece), preciso y da la respuesta correcta. Euclides lo describió hacia el 300 a. C.:
es uno de los algoritmos **más antiguos que se siguen usando**.

### Las cuatro herramientas del pensamiento computacional

- **Descomposición**: dividir un problema grande en partes pequeñas («ordenar la lista» = «encontrar el menor», «colocarlo», repetir).
- **Reconocimiento de patrones**: ver lo que se repite («cada paso hace lo mismo con un dato menor»).
- **Abstracción**: ignorar los detalles que no importan («no me importa cómo se multiplica, solo que se multiplica»).
- **Diseño del algoritmo**: expresar los pasos de forma exacta.

## 3. Variables, instrucciones y estado

Un programa guarda los datos en **variables**: nombres asociados a valores. La instrucción **asignación** escribe un valor:

```python
x = 5          # x vale 5
x = x + 3      # se calcula el lado derecho (5 + 3) y se guarda en x: ahora x vale 8
```

Atención: `=` **no** es la igualdad matemática, es «guarda el resultado de la derecha en la izquierda». La línea `x = x + 3` no es una
ecuación imposible: significa «aumenta `x` en $3$». Se llama **estado** del programa al conjunto de los valores de todas
sus variables en un instante; cada instrucción lo modifica.

**Ejemplo (intercambio de dos variables con una auxiliar):**

```python
a = 7
b = 2
t = a      # t guarda el valor de a
a = b      # a toma el valor de b
b = t      # b toma el valor guardado: 7
```

Sin la variable `t`, la segunda asignación destruiría el valor original de `a`.

## 4. Condiciones y bucles

- **Condición** (`if`): ejecuta un bloque solo si algo es cierto.
- **Bucle** (`while`, `for`): repite un bloque.

```python
n = 12
if n % 2 == 0:
    print("par")      # n % 2 es el resto de dividir n entre 2
else:
    print("impar")
```

Un bucle `while` repite **mientras** la condición sea cierta. Tiene tres partes: inicialización, condición y un cambio que
**acerca** el bucle a su final. Si el cambio no acerca, el bucle es **infinito**:

```python
# Suma 1 + 2 + ... + 10
s = 0
i = 1
while i <= 10:
    s = s + i
    i = i + 1     # este cambio garantiza que i llegará a 11 y el bucle terminará
print(s)          # 55
```

El bucle `for i in range(1, 11)` hace lo mismo con la cuenta incorporada. En Python, `range(a, b)` recorre $a, a+1, \dots, b-1$ (el límite superior
**no** se incluye).

### La traza: ejecutar a mano

La técnica más importante para entender y depurar es la **traza**: una tabla con un paso por fila y las variables en columnas.
**Ejemplo resuelto**, el programa anterior con $i \le 4$:

| Paso | `i` | `s` |
|:---:|:---:|:---:|
| inicio | 1 | 0 |
| tras 1.ª vuelta | 2 | 1 |
| tras 2.ª vuelta | 3 | 3 |
| tras 3.ª vuelta | 4 | 6 |
| tras 4.ª vuelta | 5 | 10 |

Si la traza revela un patrón, se puede **comprobar con una fórmula** (aquí $1 + 2 + \cdots + 10 = \frac{10 \cdot 11}{2} = 55$).

**Intercambio sin variable auxiliar.** Un truco con aritmética (válido para enteros): `x = x + y; y = x - y; x = x - y`. Con $x = 8$,
$y = 3$: `x` pasa a $11$; `y` pasa a $11 - 3 = 8$; `x` pasa a $11 - 8 = 3$. Traza completa, y comprobada: se ha intercambiado.

## 5. Los datos son bits

Un ordenador solo maneja **bits** (0 o 1). Con $n$ bits se distinguen $2^n$ combinaciones distintas: con $8$ bits (un **byte**), $256$.
Todo se codifica en bits: los números (base $2$, ver el nodo de naturales), el texto (cada letra es un número según una tabla, como ASCII y
Unicode), las imágenes (números por píxel), el sonido (números por muestra).

**Ejemplo:** $13_{10} = 1101_2$ porque $8 + 4 + 1 = 13$. **Cuántas cifras hacen falta:** $n$ necesita $\lfloor\log_2 n\rfloor + 1$ bits.
Mil millones ($10^9$) cabe en $30$ bits, porque $2^{30} = 1\,073\,741\,824$.

**Por qué importa:** un entero de $32$ bits **sin signo** llega a $2^{32} - 1 = 4\,294\,967\,295$; al pasarse, **da la vuelta** a $0$. Esa limitación
causa errores reales (ver el nodo de explotación binaria, [[sec-explotacion-binaria]]). Y los decimales en binario son **aproximaciones**: por eso `0.1 + 0.2` no da
exactamente `0.3` en un ordenador.

## 6. Cuánto cuesta un algoritmo

Dos algoritmos que resuelven lo mismo pueden diferir enormemente en **rapidez**. Se mide **contando pasos** en función del tamaño $n$
de la entrada, no segundos (que dependen de la máquina).

**Ejemplo: encontrar un número en una lista ordenada de $n$.**

- **Búsqueda lineal**: mirar uno a uno. En el peor caso, $n$ pasos.
- **Búsqueda binaria**: mirar el elemento **central**; si es el buscado, hecho; si el buscado es menor, quedarse con la mitad izquierda; si
  mayor, con la derecha. Cada paso **descarta la mitad**. En el peor caso, $\lceil \log_2 (n + 1) \rceil$ pasos.

Para $n = 1\,000\,000$: lineal, hasta un millón de pasos; binaria, **como máximo $20$**. Es la razón por la que un buscador encuentra algo entre
miles de millones de páginas en un instante, y la del juego de «adivina el número»: con $10$ preguntas de sí o no se identifica cualquier número
del $1$ al $1024$, porque $2^{10} = 1024$.

```python
def busqueda_binaria(lista, objetivo):
    lo, hi = 0, len(lista) - 1
    while lo <= hi:
        mid = (lo + hi) // 2           # // es la división entera
        if lista[mid] == objetivo:
            return mid
        if lista[mid] < objetivo:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1                           # no está
```

**Contar bucles anidados.** Un bucle dentro de otro multiplica: `for i in range(n): for j in range(n): ...` ejecuta el interior $n^2$ veces. Si el interior
empieza en `i`, la cuenta es $n + (n-1) + \cdots + 1 = \frac{n(n+1)}{2}$. Con $n = 100$ son $10\,000$ o $5050$ pasos; con $n = 100\,000$,
$10^{10}$: el algoritmo deja de ser utilizable. Esta forma de medir se formaliza más adelante en `prog-algoritmos`.

## 7. Depurar con método

Un **error** (*bug*) es una diferencia entre lo que el programa hace y lo que se quería que hiciera. Depurar es una habilidad metódica,
no de tanteo (aplicación de las cuatro fases de Pólya):

1. **Reproducir** el fallo con una entrada concreta y pequeña.
2. **Aislar**: reduce la entrada y el código hasta el mínimo que sigue fallando.
3. **Hipótesis**: ¿qué variable tiene un valor distinto del esperado, y en qué línea cambia?
4. **Comprobar** con `print` o con un depurador, y **corregir una cosa cada vez**.
5. **Fijar** el caso con una prueba (`assert funcion(3) == 9`) para que no vuelva.

Errores típicos de principiante: confundir `=` (asignar) con `==` (comparar), el **error por uno** (un bucle que se pasa o se queda corto en
una iteración), no inicializar una variable y usar un valor de una ejecución anterior.

## 8. Errores típicos

- Creer que `x = x + 1` es una ecuación imposible.
- Bucles infinitos: el cambio no acerca la condición a ser falsa.
- Error por uno: `range(1, 10)` llega hasta $9$, no hasta $10$.
- Dar por buena la ejecución de «el caso típico» sin probar el vacío, el mínimo o el máximo.
- Optimizar sin medir: primero correcto, luego rápido.

## Repaso: lo que debe quedarte dentro de un mes

1. Algoritmo: pasos finitos, precisos, con entrada y salida; Euclides es de los más antiguos.
2. `x = x + 1` es **asignar**, no igualar; el estado cambia con cada instrucción; la traza es la herramienta de comprobación.
3. $n$ bits distinguen $2^n$ casos; los enteros de ancho fijo dan la vuelta; los decimales binarios son aproximados.
4. Búsqueda binaria: $\lceil \log_2 n \rceil$ pasos frente a $n$.
5. Depurar: reproducir, aislar, hipótesis, comprobar y fijar con una prueba.

## Siguiente

El nodo `prog-python-fundamentos` aprende el lenguaje Python con esta forma de pensar: tipos, texto, listas, funciones y archivos.
