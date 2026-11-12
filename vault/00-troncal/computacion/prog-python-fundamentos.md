---
id: prog-python-fundamentos
title: "Python desde cero: tipos, colecciones, funciones y archivos"
area: bajo-nivel
trunk_level: 2
prerequisites: [prog-pensamiento-computacional]
academic_sources:
  - "Python Software Foundation. The Python Tutorial (docs.python.org/3/tutorial/)."
  - "Python Software Foundation. The Python Language Reference y The Python Standard Library (docs.python.org/3/)."
  - "van Rossum, G.; Warsaw, B.; Coghlan, A. PEP 8 – Style Guide for Python Code (peps.python.org/pep-0008/)."
  - "Downey, A. B. Think Python: How to Think Like a Computer Scientist, 3ª ed. O'Reilly, 2024."
  - "Abelson, H.; Sussman, G. J.; Sussman, J. Structure and Interpretation of Computer Programs, 2ª ed. MIT Press, 1996."
hints:
  - "Concepto: en Python todo es un objeto y los nombres son etiquetas que apuntan a objetos. Eso explica los alias (dos nombres, una lista), por qué un valor por defecto mutable se comparte entre llamadas y por qué la asignación no copia. Ante la duda, ejecuta un caso pequeño."
  - "Herramienta: abre el intérprete interactivo (`python`) y prueba cada expresión antes de contestar; `type(x)` dice el tipo, `help(f)` la documentación, `dir(x)` los métodos, `id(x)` la identidad del objeto (sirve para ver si dos nombres apuntan a lo mismo)."
  - "Documentación oficial: docs.python.org/3/tutorial/datastructures.html (listas, diccionarios, conjuntos), docs.python.org/3/tutorial/controlflow.html (funciones y bucles), docs.python.org/3/tutorial/errors.html (excepciones) y docs.python.org/3/reference/executionmodel.html (ámbitos y nombres)."
exercises:
  - id: operadores
    tier: 1
    prompt: |
      ¿Qué imprime `print(7 // 2, 7 % 2, 7 / 2)`? Respuesta con los tres valores separados por punto y coma, por ejemplo «1;2;3».
    answers: ["sha256:6d77d3a65a7b76b0f1e23671072f17a372eaac82d97d4edf42fa411778614192"]
  - id: rebanadas
    tier: 1
    prompt: |
      Con `s = "aprendizaje"`, ¿qué imprime `print(s[3:8].upper())`? Respuesta: el texto impreso (sin comillas).
    answers: ["sha256:bdf069b58b27a78ac915df7a77d75f296ee5e29558d01344de57389bb27b5d67"]
  - id: formato-decimales
    tier: 1
    prompt: |
      ¿Qué imprime `print(f"{3.14159265:.2f}")`? Respuesta: el texto impreso.
    answers: ["sha256:2efff1261c25d94dd6698ea1047f5c0a7107ca98b0a6c2427ee6614143500215"]
  - id: comprension
    tier: 2
    prompt: |
      ¿Qué número imprime `print(sum(x * x for x in range(1, 21) if x % 3 == 0))`? Respuesta: un entero.
    answers: ["sha256:bc57590a33fe355e174396df60ac503f8e99763776307dcd8b9ce8dfe3c47a2a"]
  - id: argumento-mutable
    tier: 2
    prompt: |
      ¿Qué número imprime este programa? (Es una trampa clásica de Python: piensa **cuándo** se crea la lista del valor por defecto.)

      ~~~python
      def f(x, L=[]):
          L.append(x)
          return L

      f(1)
      f(2)
      print(len(f(3)))
      ~~~
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: alias-de-listas
    tier: 2
    prompt: |
      ¿Qué número imprime este programa?

      ~~~python
      a = [1, 2]
      b = a
      b.append(3)
      print(len(a))
      ~~~
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: flotantes
    tier: 2
    prompt: |
      ¿Qué imprime `print(0.1 * 3 == 0.3)`? Respuesta: «True» o «False».
    answers: ["sha256:fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa"]
  - id: excepcion
    tier: 2
    prompt: |
      ¿Cómo se llama la excepción que lanza `1 / 0` en Python? Respuesta: el nombre exacto de la clase.
    answers: ["sha256:7dc75aac10b66d191eac0b3bfb8a7382891e95d495bf142c8513e30682a11822"]
  - id: potencia-modular
    tier: 2
    prompt: |
      ¿Qué imprime `print(pow(2, 100, 10**9 + 7))`? (Calcula $2^{100} \bmod (10^9 + 7)$.) Respuesta: un entero.
    answers: ["sha256:fc8d90c6c98af982ea34527eaf9db94df30b4e9730b67f321a99bb9942b07c69"]
  - id: ordenar-con-clave
    tier: 2
    prompt: |
      ¿Qué imprime `print(sorted(["banana", "kiwi", "fig", "apple"], key=len)[0])`? Respuesta: el texto impreso.
    answers: ["sha256:8c39c63488260c318aea4cb09df75d79e27f13c6997489d4aee818cbb88a7d23"]
  - id: zip-diccionario
    tier: 3
    prompt: |
      ¿Qué imprime `print(dict(zip("abc", range(3)))["c"])`? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: conjuntos
    tier: 3
    prompt: |
      ¿Qué imprime `print(len(set("mississippi")), len({x % 7 for x in range(100)}))`? Respuesta con los dos números separados por punto y coma.
    answers: ["sha256:303967d1437e85a0093d7a74e5a3acec2282fad4e534023ed0a8be8571b543cb"]
  - id: factorial-20
    tier: 3
    prompt: |
      ¿Qué imprime este programa? (Python tiene enteros de tamaño ilimitado.)

      ~~~python
      def fact(n):
          return 1 if n <= 1 else n * fact(n - 1)

      print(fact(20))
      ~~~
    answers: ["sha256:0f90a83d6efa0e58870635bedb7ca3eff1bdde520d4a98f83c8fec4c6b864611"]
  - id: capicuas
    tier: 3
    prompt: |
      ¿Qué imprime `print(sum(1 for n in range(1, 10000) if str(n) == str(n)[::-1]))`? (Cuenta los capicúas de $1$ a $9999$.) Respuesta: un entero.
    answers: ["sha256:a4e00d7e6aa82111575438c5e5d3e63269d4c475c718b2389f6d02932c47f8a6"]
  - id: vocales
    tier: 3
    prompt: |
      ¿Cuántas vocales (a, e, i, o, u) hay en `"Universidad de Salamanca"`? (Sin tildes; no distingas mayúsculas.) Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: ambito
    tier: 3
    prompt: |
      ¿Qué imprime este programa?

      ~~~python
      x = 10

      def g():
          x = 5
          return x

      g()
      print(x)
      ~~~
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
---

# Python desde cero: tipos, colecciones, funciones y archivos

Python es, hoy, uno de los lenguajes más usados del mundo: se escribe casi como se piensa, tiene una biblioteca enorme y sirve
para automatizar tareas, analizar datos, construir webs, hacer ciencia y entrenar modelos de inteligencia artificial. Aquí lo
aprendes **bien**, con el modelo mental que evita los errores clásicos, y lo usarás durante todo el currículo.

## Objetivos

Al terminar sabrás:

1. Instalar Python, ejecutar código y leer un mensaje de error.
2. Usar los tipos básicos (números, texto, booleanos) y sus operaciones.
3. Elegir y manejar listas, tuplas, diccionarios y conjuntos, y entender la **mutabilidad** y los alias.
4. Escribir funciones, entender el ámbito de las variables y la recursión.
5. Leer y escribir archivos y manejar errores con excepciones.
6. Probar tu código y escribirlo con claridad (PEP 8).

> [!question] Test de entrada
> 1. ¿Qué imprime `print(len("hola"))`? 2. ¿Y `print(2 ** 5)`? 3. Si `a = 3` y luego `a = a * 2`, ¿cuánto vale `a`?
>
> Respuestas: `4`; `32`; `6`. Si no lo tienes claro, repasa `prog-pensamiento-computacional`.

## 1. Para qué sirve

- **Automatizar**: procesar mil archivos, renombrar, descargar, generar informes.
- **Datos y ciencia**: cálculo numérico, estadística, gráficos (NumPy, pandas, Matplotlib).
- **Web y APIs**: servidores, scripts de integración.
- **Seguridad**: gran parte de las herramientas de pentesting y de análisis de malware están escritas en Python.
- **IA**: casi todo el aprendizaje automático moderno (PyTorch, scikit-learn) se usa desde Python.

## 2. Primeros pasos

**Instalar.** Descarga Python 3 desde python.org (en Linux suele venir instalado). Comprueba en una terminal:

```
python --version        # en algunos sistemas: python3 --version
```

**Dos formas de usarlo:**

- El **intérprete interactivo** (escribe `python`): ejecuta línea a línea y muestra el resultado. Ideal para experimentar.
- Un **archivo** `programa.py` que se ejecuta con `python programa.py`.

Un editor con coloreado (Thonny para empezar; Visual Studio Code más adelante) ayuda mucho. Lo esencial:

```python
print("Hola, Exodus")          # muestra texto
nombre = input("¿Cómo te llamas? ")   # lee una línea de teclado (siempre como texto)
print("Encantado,", nombre)
```

`#` inicia un **comentario**: Python lo ignora; sirve para explicar el *porqué*, no el *qué*. Python usa la **sangría** (cuatro espacios) para
delimitar bloques: no es estética, es sintaxis.

### Leer un error

Cuando algo falla, Python muestra una **traza** (*traceback*). Se lee **de abajo arriba**: la última línea dice el **tipo de error** y el
mensaje; las anteriores dicen en qué línea ocurrió y quién llamó a quién.

```
Traceback (most recent call last):
  File "demo.py", line 3, in <module>
    print(10 / 0)
ZeroDivisionError: division by zero
```

Aprender a leerlas ahorra horas. Los más frecuentes: `SyntaxError` (código mal escrito), `NameError` (nombre sin definir), `TypeError` (operación
con un tipo inadecuado), `ValueError` (valor inadecuado), `IndexError` (posición fuera de la lista), `KeyError` (clave inexistente en un diccionario).

## 3. Valores y tipos

Todo valor tiene un **tipo**. Los básicos:

| Tipo | Ejemplo | Notas |
|---|---|---|
| `int` | `42`, `-7`, `10**30` | enteros de **tamaño ilimitado** |
| `float` | `3.14`, `1e-3` | decimales binarios de 64 bits (aproximados) |
| `str` | `"texto"`, `'texto'` | cadenas (inmutables) |
| `bool` | `True`, `False` | lógico |
| `NoneType` | `None` | «ausencia de valor» |

**Operadores aritméticos:** `+ - * /` y además `//` (**división entera**), `%` (**resto**) y `**` (**potencia**). Fíjate:

```python
7 / 2     # 3.5   (la división «/» siempre da float)
7 // 2    # 3     (cociente entero)
7 % 2     # 1     (resto)    ->  7 == 2*3 + 1, como en la división euclídea
-7 // 2   # -4    (la división entera redondea hacia abajo, no hacia cero)
2 ** 100  # 1267650600228229401496703205376 (sin desbordamiento)
```

**Comparaciones:** `== != < <= > >=`; combinables con `and`, `or`, `not`. **Ojo:** `=` asigna, `==` compara. Las comparaciones se encadenan:
`0 < x < 10` significa «`x` entre `0` y `10`».

**Conversión:** `int("42")`, `float("3.5")`, `str(7)`. `int("3.5")` falla (`ValueError`); `int(3.9)` da `3` (trunca).

**Flotantes y precisión.** Como en [[mat-enteros-fracciones]], un decimal en binario es aproximado: `0.1 + 0.2 == 0.3` es **`False`**. Para dinero
o para cálculo exacto usa enteros (céntimos), `decimal.Decimal` o `fractions.Fraction`. Para comparar flotantes, `math.isclose(a, b)`.

**Verdad y falsedad.** En una condición, `0`, `0.0`, `""` (texto vacío), `[]`, `{}`, `set()` y `None` cuentan como **falsos**; el resto, como verdaderos.

## 4. Texto

Una cadena es una **secuencia inmutable** de caracteres (Unicode). Se indexa desde `0`; los índices **negativos** cuentan desde el final:

```python
s = "aprendizaje"
s[0]        # 'a'
s[-1]       # 'e'
s[3:8]      # 'endiz'   (desde el 3 hasta el 7; el final NO se incluye)
s[::-1]     # 'ejazidnerpa' (el paso -1 invierte)
len(s)      # 11
```

Las **rebanadas** `s[a:b:c]` valen para cadenas, listas y tuplas. Los métodos más usados (devuelven **nuevas** cadenas, porque no se puede
modificar la original):

```python
"  hola  ".strip()           # 'hola'
"a,b,c".split(",")           # ['a', 'b', 'c']
"-".join(["a", "b", "c"])    # 'a-b-c'
"hola".replace("o", "0")     # 'h0la'
"Hola".lower(), "Hola".upper()
"hola".find("l")             # 2   (-1 si no está)
"ab" in "cabra"              # True
```

**f-strings**: la forma moderna de componer texto con valores y formato:

```python
nombre, nota = "Ana", 7.456
print(f"{nombre} sacó {nota:.1f}")   # Ana sacó 7.5
print(f"{1234567:,}")                # 1,234,567
print(f"{255:b} {255:x}")            # 11111111 ff   (binario y hexadecimal)
```

**Caracteres y números:** `ord("A")` es `65` y `chr(65)` es `"A"` (códigos Unicode). El texto que escribes en archivos se codifica en
**bytes**, casi siempre en UTF-8.

## 5. Colecciones

| Tipo | Se escribe | Ordenada | Mutable | Uso |
|---|---|:---:|:---:|---|
| `list` | `[1, 2, 3]` | sí | **sí** | secuencia general |
| `tuple` | `(1, 2, 3)` | sí | no | registro fijo, claves de diccionario |
| `dict` | `{"a": 1, "b": 2}` | por inserción | **sí** | asociar clave → valor |
| `set` | `{1, 2, 3}` | no | **sí** | pertenencia rápida, sin repetidos |

```python
nums = [5, 2, 9]
nums.append(7)            # [5, 2, 9, 7]
nums.sort()               # ordena la lista en su sitio -> [2, 5, 7, 9]
sorted(nums, reverse=True)  # NUEVA lista ordenada: [9, 7, 5, 2]

edades = {"ana": 31, "luis": 28}
edades["marta"] = 25      # añadir
edades.get("pedro", 0)    # 0  (valor por defecto si no existe; edades["pedro"] daría KeyError)
for nombre, edad in edades.items():
    print(nombre, edad)

vistos = set()
vistos.add(3); vistos.add(3)   # sigue siendo {3}: sin repetidos
```

**Eficiencia (idea):** buscar un elemento en una `list` recorre la lista ($O(n)$); en un `set` o un `dict` es casi inmediato (tiempo
constante **medio**, gracias a una tabla hash). Por eso, si vas a preguntar muchas veces «¿está?», usa un conjunto.

### Mutabilidad y alias: el modelo mental correcto

Un nombre **no contiene** el valor: es una **etiqueta** que apunta a un objeto. Asignar `b = a` **no copia**: pone dos etiquetas en el mismo objeto.

```python
a = [1, 2]
b = a           # b y a son el MISMO objeto
b.append(3)
print(a)        # [1, 2, 3]   <- a «cambió» sin tocarla
c = a.copy()    # copia superficial (otra lista con los mismos elementos)
c.append(4)
print(a, c)     # [1, 2, 3] [1, 2, 3, 4]
```

Con tipos **inmutables** (`int`, `str`, `tuple`) esto no da problemas, porque no se pueden modificar: `x = x + 1` crea un objeto nuevo.

**Comprensiones** (crear colecciones con una expresión):

```python
[x * x for x in range(1, 6)]            # [1, 4, 9, 16, 25]
{x % 7 for x in range(100)}             # {0, 1, 2, 3, 4, 5, 6}
{p: len(p) for p in ["sol", "luna"]}    # {'sol': 3, 'luna': 4}
sum(x * x for x in range(1, 21) if x % 3 == 0)   # 819
```

**Desempaquetado y `zip`:** `a, b = b, a` intercambia sin variable auxiliar; `dict(zip("abc", range(3)))` da `{'a': 0, 'b': 1, 'c': 2}`.

**Ordenar con clave.** `sorted(lista, key=f)` ordena por el valor de `f` de cada elemento, y es **estable** (los empates conservan su orden):
`sorted(["banana", "kiwi", "fig"], key=len)` da `['fig', 'kiwi', 'banana']`.

## 6. Control de flujo

```python
n = 15
if n % 15 == 0:
    print("FizzBuzz")
elif n % 3 == 0:
    print("Fizz")
else:
    print(n)

for i in range(3):               # 0, 1, 2
    print(i)
for i, letra in enumerate("abc"):   # (0,'a'), (1,'b'), (2,'c')
    print(i, letra)

while True:
    linea = input("> ")
    if linea == "salir":
        break                    # sale del bucle
    if not linea:
        continue                 # salta a la siguiente vuelta
    print(linea.upper())
```

`range(a, b)` recorre de `a` a `b-1`; con tres argumentos, `range(a, b, paso)`. `for` itera sobre **cualquier** colección; `enumerate` añade el índice.

## 7. Funciones

```python
def area_circulo(radio):
    """Devuelve el área de un círculo de ese radio."""
    return 3.141592653589793 * radio ** 2

print(area_circulo(2))     # 12.566370614359172
```

Una **función** agrupa código reutilizable, recibe **parámetros** y devuelve un valor con `return` (si no hay `return`, devuelve `None`). La
cadena entre triples comillas es la **docstring**; `help(area_circulo)` la muestra.

**Parámetros con nombre y por defecto:**

```python
def saludar(nombre, saludo="Hola"):
    return f"{saludo}, {nombre}"

saludar("Ana")                    # 'Hola, Ana'
saludar("Ana", saludo="Buenas")   # 'Buenas, Ana'
```

**La trampa clásica: valor por defecto mutable.** El valor por defecto se crea **una sola vez**, cuando se define la función, no en cada llamada:

```python
def f(x, L=[]):       # ¡MAL!
    L.append(x)
    return L

f(1); f(2)
print(f(3))           # [1, 2, 3]   (la misma lista se arrastra entre llamadas)

def g(x, L=None):     # BIEN
    if L is None:
        L = []
    L.append(x)
    return L
```

**Ámbito.** Una variable creada **dentro** de una función es **local**: no existe fuera ni pisa a otra del mismo nombre de fuera.

```python
x = 10
def g():
    x = 5          # otra x, local
    return x
g()
print(x)           # 10
```

Python busca un nombre en este orden: local, la función que la encierra, global, y los incorporados (*LEGB*). Se evita modificar variables
globales desde dentro de funciones: pasa datos por parámetros y devuelve resultados.

**Recursión.** Una función puede llamarse a sí misma, con un **caso base** que detiene la cadena:

```python
def fact(n):
    return 1 if n <= 1 else n * fact(n - 1)

fact(20)   # 2432902008176640000   (enteros ilimitados: fact(100) también cabe)
```

**Funciones como valores.** Se pueden pasar a otras funciones (`key=len`) y se pueden escribir en línea con `lambda`:
`sorted(personas, key=lambda p: p[1])`.

## 8. Módulos y biblioteca estándar

Un **módulo** es un archivo de Python que se importa. La **biblioteca estándar** ya incluye mucho:

```python
import math
math.sqrt(2), math.pi, math.gcd(84, 90)          # (1.4142135623730951, 3.141592653589793, 6)

from collections import Counter
Counter("mississippi")                            # Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})

import random
random.seed(7)                                    # fija la semilla: resultados reproducibles
random.randint(1, 6)

import statistics
statistics.mean([2, 4, 9]), statistics.median([2, 4, 9, 10])   # (5, 6.5)
```

Para código de terceros se usa `pip` (`pip install requests`), dentro de un **entorno virtual** (`python -m venv .venv`) para no mezclar proyectos.

## 9. Archivos y excepciones

```python
# Escribir
with open("notas.txt", "w", encoding="utf-8") as f:
    f.write("primera línea\n")
    f.write("segunda línea\n")

# Leer
with open("notas.txt", encoding="utf-8") as f:
    for linea in f:
        print(linea.rstrip("\n"))
```

`with` cierra el archivo **siempre**, incluso si hay un error. Indica siempre `encoding="utf-8"` para no depender del sistema.

**Excepciones.** Cuando algo falla, Python **lanza** una excepción. Se **capturan** con `try/except`:

```python
def leer_entero(texto):
    try:
        return int(texto)
    except ValueError:
        return None                # texto que no es un número entero

leer_entero("42"), leer_entero("hola")     # (42, None)
```

Captura **tipos concretos** (`ValueError`), no `except Exception:` a ciegas: así no escondes errores que no esperabas. `finally` se ejecuta
siempre; `raise ValueError("mensaje")` lanza una excepción propia.

## 10. Probar y escribir con claridad

**Probar:** una prueba es un código que comprueba que otro hace lo que debe. Lo más simple es `assert`:

```python
def es_capicua(n):
    s = str(n)
    return s == s[::-1]

assert es_capicua(1221)
assert not es_capicua(1223)
assert sum(1 for n in range(1, 10000) if es_capicua(n)) == 198
```

Para proyectos más grandes se usa `unittest` (incluido) o `pytest`. Prueba **los casos límite**: lista vacía, un elemento, el
máximo, texto vacío.

**Estilo (PEP 8):** sangría de 4 espacios, nombres en `minusculas_con_guiones_bajos` para funciones y variables, `CamelCase` para clases,
líneas de menos de unos 79–99 caracteres, un espacio alrededor de los operadores. El código se **lee** mucho más de lo que se escribe.
`import this` imprime el *Zen de Python* («Lo explícito es mejor que lo implícito», «La legibilidad cuenta»).

## 11. Mini-proyecto: contador de palabras

Programa completo que cuenta las palabras más frecuentes de un texto, aplicando todo lo anterior:

```python
from collections import Counter
import re

def palabras(texto):
    """Devuelve la lista de palabras en minúsculas (solo letras)."""
    return re.findall(r"[a-záéíóúüñ]+", texto.lower())

def mas_frecuentes(texto, n=3):
    return Counter(palabras(texto)).most_common(n)

texto = "El perro y el gato. El gato y el pez; el perro corre."
assert palabras("¡Hola, Mundo!") == ["hola", "mundo"]
print(mas_frecuentes(texto))     # [('el', 5), ('perro', 2), ('y', 2)]
```

Observa el patrón: una función **pequeña** que hace una cosa, probada con `assert`, y un resultado que se puede predecir a mano. Fíjate también en que `perro`, `gato` e `y` aparecen dos veces: `most_common` devuelve los empates **en el orden en que se vieron por primera vez**, y por eso salen `perro` e `y` y no `gato`. Predecir el resultado a mano habría descubierto la `y`; ejecutarlo lo confirma.

## 12. Errores típicos

- Confundir `=` con `==`; olvidar los dos puntos `:` o la sangría.
- Creer que `b = a` copia una lista; modificar una lista mientras se recorre.
- Usar un valor por defecto **mutable** en una función.
- Dividir con `/` y esperar un entero (usa `//`).
- Comparar flotantes con `==`.
- Abrir un archivo sin `with` ni `encoding`.
- Capturar todas las excepciones con `except:` y esconder el fallo.
- Error por uno: `range(1, 10)` no llega a `10`; `s[3:8]` no incluye el índice `8`.

## Repaso: lo que debe quedarte dentro de un mes

1. `/` da `float`, `//` cociente, `%` resto, `**` potencia; `int` ilimitado; `float` aproximado.
2. Las cadenas son inmutables; las rebanadas `s[a:b:c]` excluyen `b`.
3. `list`/`dict`/`set` son **mutables**; `b = a` crea un alias; copiar con `.copy()`.
4. Valor por defecto mutable: una sola vez; usar `None`. Ámbito local frente a global.
5. `with open(..., encoding="utf-8")`; `try/except` con tipos concretos; probar con `assert`.

## Siguiente

Con Python se llega al nodo `prog-estructuras-datos` (pilas, colas, árboles, grafos, tablas hash) y, junto a la matemática de funciones y probabilidad, al análisis de datos.
