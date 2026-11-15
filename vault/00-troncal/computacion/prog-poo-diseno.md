---
id: prog-poo-diseno
title: "Programación orientada a objetos y diseño: clases, invariantes, herencia y patrones"
area: bajo-nivel
trunk_level: 8
prerequisites: [prog-estructuras-datos, mat-logica-demostraciones]
academic_sources:
  - "Python Software Foundation. The Python Tutorial: Classes; The Python Language Reference: Data model; dataclasses, abc y functools (docs.python.org/3)."
  - "Simionato, M. The Python 2.3 Method Resolution Order (docs.python.org/3/howto/mro.html): la linealización C3, vigente en Python 3."
  - "Gamma, E.; Helm, R.; Johnson, R.; Vlissides, J. Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994 (copyright 1995)."
  - "Liskov, B.; Wing, J. M. A Behavioral Notion of Subtyping. ACM Transactions on Programming Languages and Systems, 16(6), 1811-1841, 1994."
  - "Ramalho, L. Fluent Python, 2ª ed. O'Reilly, 2022."
hints:
  - "Concepto: un objeto junta estado y comportamiento y protege un invariante (lo que siempre debe ser cierto de su estado). Para predecir la salida de un programa con clases, sigue la búsqueda de atributos: primero la instancia, después la clase y luego las clases del MRO, en orden. Hereda solo si la subclase cumple el contrato de la base (Liskov); si no, compón."
  - "Herramienta: ejecuta el programa en python3 y comprueba tu predicción; Clase.__mro__ muestra el orden de resolución; vars(obj) y vars(Clase) muestran dónde vive cada atributo; help(obj) y dir(obj) listan los métodos especiales; @dataclass genera __init__, __repr__ y __eq__."
  - "Documentación oficial: docs.python.org/3/tutorial/classes.html, docs.python.org/3/reference/datamodel.html (métodos especiales, __hash__ y __eq__, gestores de contexto), docs.python.org/3/library/dataclasses.html, docs.python.org/3/library/abc.html y docs.python.org/3/howto/mro.html."
exercises:
  - id: atributo-de-clase
    tier: 1
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Contador:
          total = 0

          def __init__(self):
              Contador.total += 1
              self.id = Contador.total


      a = Contador()
      b = Contador()
      c = Contador()
      b.total = 100
      print(a.total + b.total + c.id)
      ```

      Respuesta: un entero.
    answers: ["sha256:482d9673cfee5de391f97fde4d1c84f9f8d6f2cf0784fcffb958b4032de7236c"]
  - id: dataclass-congelada
    tier: 1
    prompt: |
      ¿Qué imprime este programa?

      ```python
      from dataclasses import dataclass


      @dataclass(frozen=True)
      class Punto:
          x: int
          y: int


      ps = [Punto(1, 2), Punto(2, 1), Punto(1, 2), Punto(0, 0), Punto(2, 1)]
      print(len(set(ps)))
      ```

      Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: argumento-por-defecto-mutable
    tier: 1
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Carrito:
          def __init__(self, items=[]):
              self.items = items

          def add(self, x):
              self.items.append(x)


      a = Carrito()
      a.add("pan")
      b = Carrito()
      b.add("leche")
      c = Carrito(["agua"])
      c.add("sal")
      print(len(a.items), len(b.items), len(c.items))
      ```

      Respuesta: los tres números en orden, separados por `;`.
    answers: ["sha256:373ae5d8224efc375ca9f200183a435c348c1b579a3c76d425304e4d1b5e52a2"]
  - id: propiedad-con-validacion
    tier: 1
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Temperatura:
          def __init__(self, k):
              self.kelvin = k

          @property
          def kelvin(self):
              return self._k

          @kelvin.setter
          def kelvin(self, v):
              if v < 0:
                  raise ValueError("por debajo del cero absoluto")
              self._k = v


      validas = 0
      for v in [300, -5, 0, 273.15, -0.01, 1e3]:
          try:
              Temperatura(v)
              validas += 1
          except ValueError:
              pass
      print(validas)
      ```

      Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: orden-de-resolucion
    tier: 2
    prompt: |
      ¿Qué imprime este programa? (Calcula la linealización C3 a mano antes de comprobarlo.)

      ```python
      class A: pass
      class B(A): pass
      class C(A): pass
      class D(B, C): pass
      class E(B): pass
      class F(D, E): pass

      print(";".join(k.__name__ for k in F.__mro__ if k is not object))
      ```

      Respuesta: los nombres en el orden impreso, separados por `;`.
    answers: ["sha256:317d5cff374fd5b14cdf21c9ae242bc21119f821f9168364caac1273519ffd45"]
  - id: super-cooperativo
    tier: 2
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Base:
          def saluda(self):
              return ["Base"]


      class Izq(Base):
          def saluda(self):
              return ["Izq"] + super().saluda()


      class Der(Base):
          def saluda(self):
              return ["Der"] + super().saluda()


      class Hija(Izq, Der):
          def saluda(self):
              return ["Hija"] + super().saluda()


      print(";".join(Hija().saluda()))
      ```

      Respuesta: la línea impresa (nombres separados por `;`).
    answers: ["sha256:a46b90a49c7753a5461da4747e0db58bb48c42018d6ed7e8a869d107920242df"]
  - id: polimorfismo-areas
    tier: 2
    prompt: |
      ¿Qué imprime este programa?

      ```python
      import math


      class Figura:
          def area(self):
              raise NotImplementedError


      class Rect(Figura):
          def __init__(self, a, b):
              self.a, self.b = a, b

          def area(self):
              return self.a * self.b


      class Circulo(Figura):
          def __init__(self, r):
              self.r = r

          def area(self):
              return math.pi * self.r ** 2


      class Triangulo(Figura):
          def __init__(self, a, b, c):
              self.lados = (a, b, c)

          def area(self):  # fórmula de Herón
              a, b, c = self.lados
              p = (a + b + c) / 2
              return math.sqrt(p * (p - a) * (p - b) * (p - c))


      figuras = [Rect(3, 4), Circulo(2), Triangulo(3, 4, 5), Rect(1.5, 2)]
      print(round(sum(f.area() for f in figuras), 2))
      ```

      Respuesta: el número impreso.
    answers: ["sha256:fb09b50f9d26669590f224fc408a279859d232da04681ad7bed19f9567cb22d3"]
  - id: ordenar-versiones
    tier: 2
    prompt: |
      ¿Qué imprime este programa?

      ```python
      from functools import total_ordering


      @total_ordering
      class Version:
          def __init__(self, s):
              self.p = tuple(int(x) for x in s.split("."))

          def __eq__(self, o):
              return self.p == o.p

          def __lt__(self, o):
              return self.p < o.p

          def __repr__(self):
              return ".".join(map(str, self.p))


      vs = [Version(s) for s in ["1.10.0", "1.2.10", "1.2.9", "0.9.12", "1.10"]]
      print(";".join(map(repr, sorted(vs))))
      ```

      Respuesta: la línea impresa (versiones separadas por `;`).
    answers: ["sha256:c2ccdabf7950ee4c71b37aa448a9a20fde68f4d82b730650bd782599c52c2f4c"]
  - id: iterador-collatz
    tier: 2
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Collatz:
          def __init__(self, n):
              self.n = n

          def __iter__(self):
              n = self.n
              while n != 1:
                  yield n
                  n = n // 2 if n % 2 == 0 else 3 * n + 1
              yield 1


      print(sum(1 for _ in Collatz(27)), max(Collatz(27)))
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:30ee54aa9eb49175b918e21671b7772e1a33c8ff3429ec620a0578e83f7c884e"]
  - id: patron-observador
    tier: 2
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Sensor:
          def __init__(self):
              self._observadores = []

          def suscribir(self, f):
              self._observadores.append(f)

          def medir(self, v):
              for f in self._observadores:
                  f(v)


      alertas = []
      registro = []
      s = Sensor()
      s.suscribir(registro.append)
      s.suscribir(lambda v: alertas.append(v) if v > 30 else None)
      for v in [25, 31, 29, 35, 40, 18]:
          s.medir(v)
      print(len(registro) + 10 * len(alertas))
      ```

      Respuesta: un entero.
    answers: ["sha256:76a50887d8f1c2e9301755428990ad81479ee21c25b43215cf524541e0503269"]
  - id: patron-estrategia
    tier: 2
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Pedido:
          def __init__(self, lineas, estrategia):
              self.lineas, self.estrategia = lineas, estrategia

          def total(self):
              return sum(precio * cant for precio, cant in self.lineas)

          def a_pagar(self):
              return round(self.estrategia.aplicar(self), 2)


      class Porcentaje:
          def __init__(self, p):
              self.p = p

          def aplicar(self, pedido):
              return pedido.total() * (1 - self.p / 100)


      class Volumen:  # 5 % por cada línea con 10 o más unidades, como mucho 15 %
          def aplicar(self, pedido):
              n = sum(1 for _, cant in pedido.lineas if cant >= 10)
              return pedido.total() * (1 - min(5 * n, 15) / 100)


      lineas = [(2.5, 12), (10, 3), (0.8, 50), (4, 10)]
      print(Pedido(lineas, Porcentaje(10)).a_pagar(), Pedido(lineas, Volumen()).a_pagar())
      ```

      Respuesta: los dos importes separados por `;` (con o sin «.0»).
    answers: ["sha256:574506822b405c1b9063af7371f6706de7cd22d6decc689e7b6404f70e5cecf2", "sha256:b66702cb37893775dfecadf56239394aecc3ecfbd5cbb60a2ae423189c6c6eac"]
  - id: principio-de-liskov
    tier: 3
    prompt: |
      Este diseño hace a `Cuadrado` subclase de `Rect`. ¿Qué imprime el programa? (El segundo número muestra por qué viola el principio de sustitución de Liskov.)

      ```python
      class Rect:
          def __init__(self, w, h):
              self._w, self._h = w, h

          def set_w(self, w):
              self._w = w

          def set_h(self, h):
              self._h = h

          def area(self):
              return self._w * self._h


      class Cuadrado(Rect):
          def __init__(self, lado):
              super().__init__(lado, lado)

          def set_w(self, w):
              self._w = self._h = w

          def set_h(self, h):
              self._w = self._h = h


      def prueba(r):
          r.set_w(5)
          r.set_h(4)
          return r.area()


      print(prueba(Rect(1, 1)), prueba(Cuadrado(1)))
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:1f9b8d31d52acf0dcb70b7a5a585917b5032b22dcbcb7be7dacc9ea2ea2a03ec"]
  - id: hash-inconsistente
    tier: 3
    prompt: |
      `__hash__` y `__eq__` no son coherentes en esta clase. ¿Qué imprime el programa?

      ```python
      class Usuario:
          def __init__(self, email):
              self.email = email

          def __eq__(self, o):
              return isinstance(o, Usuario) and self.email.lower() == o.email.lower()

          def __hash__(self):
              return hash(self.email)  # inconsistente con __eq__


      u = [Usuario("Ana@x.es"), Usuario("ana@x.es"), Usuario("ANA@X.ES"), Usuario("luis@x.es"), Usuario("luis@x.es")]
      print(len(set(u)))
      ```

      Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: composicion-y-excepciones
    tier: 3
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class SinStock(Exception):
          pass


      class Almacen:
          def __init__(self):
              self.stock = {}

          def entrada(self, art, n):
              self.stock[art] = self.stock.get(art, 0) + n

          def salida(self, art, n):
              if self.stock.get(art, 0) < n:
                  raise SinStock(art)
              self.stock[art] -= n


      ops = [("e", "tornillo", 100), ("e", "tuerca", 80), ("s", "tornillo", 30), ("s", "tuerca", 90),
             ("e", "arandela", 50), ("s", "tornillo", 70), ("s", "tornillo", 1), ("s", "arandela", 20)]
      a = Almacen()
      fallos = 0
      for t, art, n in ops:
          try:
              if t == "e":
                  a.entrada(art, n)
              else:
                  a.salida(art, n)
          except SinStock:
              fallos += 1
      print(sum(a.stock.values()), fallos)
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:d7654c6382d9a0786725c74956a15d0491857ebfa610ce1766fdd2383a26a4c0"]
  - id: gestores-de-contexto
    tier: 3
    prompt: |
      ¿Qué imprime este programa? (Recuerda en qué orden se cierran los gestores y qué significa que `__exit__` devuelva `True`.)

      ```python
      class Recurso:
          def __init__(self, nombre, log):
              self.nombre, self.log = nombre, log

          def __enter__(self):
              self.log.append("abre" + self.nombre)
              return self

          def __exit__(self, tipo, exc, tb):
              self.log.append("cierra" + self.nombre)
              return tipo is ValueError


      log = []
      with Recurso("A", log), Recurso("B", log):
          log.append("trabajo")
          raise ValueError
      log.append("fin")
      print(";".join(log))
      ```

      Respuesta: la línea impresa, tal cual.
    answers: ["sha256:7cd8ebe0b7ffca56a466525f1c6b333189d69af4480374091061893149151c5c"]
  - id: maquina-de-estados
    tier: 3
    prompt: |
      ¿Qué imprime este programa?

      ```python
      class Torno:
          def __init__(self):
              self.estado, self.alarmas, self.pasos = "cerrado", 0, 0

          def evento(self, e):
              if self.estado == "cerrado":
                  if e == "moneda":
                      self.estado = "abierto"
                  elif e == "empuje":
                      self.alarmas += 1
              elif e == "empuje":
                  self.estado = "cerrado"
                  self.pasos += 1
              # una moneda con el torno abierto no cambia nada


      t = Torno()
      for e in "moneda empuje empuje moneda moneda empuje empuje empuje moneda".split():
          t.evento(e)
      print(t.pasos, t.alarmas, t.estado)
      ```

      Respuesta: los tres valores separados por `;`.
    answers: ["sha256:c6df021e1e6ebc2fe1e12a5d45a1cc4656106ca251e098f5b24d7d6b21fca4bb"]
  - id: fracciones-con-dunder
    tier: 3
    prompt: |
      ¿Qué imprime este programa?

      ```python
      from math import gcd


      class Fr:
          def __init__(self, n, d=1):
              if d == 0:
                  raise ZeroDivisionError("denominador nulo")
              g = gcd(n, d) * (1 if d > 0 else -1)
              self.n, self.d = n // g, d // g

          def __add__(self, o):
              return Fr(self.n * o.d + o.n * self.d, self.d * o.d)

          def __mul__(self, o):
              return Fr(self.n * o.n, self.d * o.d)

          def __repr__(self):
              return f"{self.n}/{self.d}"


      x = Fr(0)
      for k in range(1, 11):
          x = x + Fr(1, k * (k + 1))
      print(x * Fr(-3, 4))
      ```

      Respuesta: la fracción impresa, como `a/b`.
    answers: ["sha256:947b2cad7c3ad325b3f66dcbc25bbaf8276b3eb5caac1ce8ddb7bafb937b64b6"]
---

# Programación orientada a objetos y diseño: clases, invariantes, herencia y patrones

Un programa de cien líneas cabe en la cabeza; uno de cien mil, no. La **programación orientada a objetos** (POO) es una manera
de partirlo en piezas con una responsabilidad clara, que **protegen su propio estado** y se comunican por una interfaz
pequeña. Este nodo enseña el modelo de objetos de Python con precisión (dónde vive cada atributo, cómo se busca un método,
qué hace cada método especial), las reglas que separan un buen diseño de uno frágil (invariantes, composición, el principio
de sustitución de Liskov) y los patrones de diseño que aparecen en todo código profesional.

## Objetivos

Al terminar sabrás:

1. Definir clases con **invariantes** protegidos por el constructor, propiedades y excepciones.
2. Explicar la búsqueda de atributos (instancia → clase → MRO) y calcular a mano el **MRO** con la linealización C3.
3. Implementar el **modelo de datos** de Python: `__repr__`, `__eq__`, `__hash__`, `__lt__`, `__add__`, `__iter__`,
   `__enter__`/`__exit__`, y saber qué contrato impone cada uno.
4. Elegir entre **herencia y composición**, reconocer una violación del **principio de Liskov** y usar clases abstractas y
   protocolos.
5. Aplicar los patrones **Estrategia**, **Observador**, **Estado**, **Fábrica**, **Iterador** y **Decorador** a problemas
   reales.
6. Predecir la salida exacta de programas con clases, y probarlas con `assert`.

## Qué debes dominar antes

[[prog-estructuras-datos]] (listas, diccionarios, conjuntos, tablas hash) y [[mat-logica-demostraciones]] (un invariante es
un enunciado que se demuestra por inducción sobre las operaciones). De [[prog-python-fundamentos]]: funciones, excepciones,
módulos.

> [!question] Test de entrada
> 1. ¿Qué imprime `a = [1]; b = a; b.append(2); print(a)`?
> 2. ¿Por qué no se puede usar una lista como clave de un diccionario?
> 3. ¿Qué hace `try: ... except ValueError: ...`?
>
> Respuestas: `[1, 2]` (los dos nombres apuntan a la misma lista); porque es mutable y no tiene `hash`; captura solo los
> errores de tipo `ValueError` lanzados en el bloque `try`.

## 1. Para qué sirve

- **Mantener software grande**: cada clase oculta sus detalles; se cambia su implementación sin tocar a quien la usa.
- **Bibliotecas y marcos**: Django, PyTorch (`nn.Module`), pytest o la propia biblioteca estándar se usan heredando de sus
  clases o implementando sus protocolos; sin este nodo no se leen ([[ia-redes-profundas]]).
- **Corrección**: una cuenta bancaria que **no puede** quedar en negativo, una fecha que **no puede** ser el 31 de febrero:
  el invariante se comprueba en un único sitio.
- **Seguridad**: un objeto inmutable no se puede alterar a escondidas; un `__hash__` incoherente produce duplicados en un
  conjunto de usuarios ([[sec-fundamentos]]).

## 2. Clases, objetos e invariantes

Una **clase** describe un tipo; un **objeto** (instancia) es un valor de ese tipo con su propio estado.

```python
class Cuenta:
    """Cuenta bancaria. Invariante: saldo >= 0 en todo momento."""

    comision = 0.5  # atributo de clase: compartido por todas las cuentas

    def __init__(self, titular, saldo=0):
        if saldo < 0:
            raise ValueError("saldo inicial negativo")
        self.titular = titular  # atributos de instancia: uno por objeto
        self._saldo = saldo     # «_»: detalle interno, no se toca desde fuera

    @property
    def saldo(self):            # lectura sí; escritura directa no (no hay setter)
        return self._saldo

    def ingresar(self, x):
        if x <= 0:
            raise ValueError("importe no positivo")
        self._saldo += x

    def retirar(self, x):
        if x <= 0 or x + Cuenta.comision > self._saldo:
            raise ValueError("operación no permitida")
        self._saldo -= x + Cuenta.comision


c = Cuenta("Ana", 100)
c.retirar(40)
assert c.saldo == 59.5
try:
    c.retirar(1000)
except ValueError:
    pass
assert c.saldo == 59.5      # la operación fallida no cambió el estado
```

- `self` es el objeto sobre el que se llama el método: `c.retirar(40)` es `Cuenta.retirar(c, 40)`.
- El **invariante** ($\text{saldo} \ge 0$) es un enunciado que se demuestra **por inducción sobre las operaciones**
  ([[mat-logica-demostraciones]]): lo establece el constructor (base) y cada método que modifica el estado lo conserva (paso).
  Por eso **toda** modificación pasa por métodos que lo comprueban, y una operación que falla **no deja el objeto a medias**
  (primero se valida, después se modifica).
- Python no tiene atributos privados de verdad: `_saldo` es una **convención** («no lo toques»). La encapsulación es un
  contrato entre programadores, no una barrera de seguridad.

**Búsqueda de atributos.** `obj.x` busca `x` primero en el diccionario de la instancia (`vars(obj)`), después en el de la
clase y luego en las clases base, en el orden del MRO (sección 4). Asignar `obj.x = ...` **siempre** crea o cambia el atributo
**de la instancia**, aunque exista uno de clase con el mismo nombre: lo **sombrea** solo para ese objeto. Por eso los contadores
compartidos se modifican como `Clase.total += 1`, no como `self.total += 1`.

> [!warning] El argumento por defecto mutable
> `def __init__(self, items=[])` crea **una sola lista** cuando se define la función, y todos los objetos construidos sin
> argumento la comparten. Se escribe `items=None` y dentro `self.items = [] if items is None else list(items)`.

**Propiedades.** `@property` convierte un método en un atributo calculado; con `@x.setter` se valida cada asignación. Así
un atributo público puede pasar a estar validado sin cambiar el código de quien lo usa.

## 3. El modelo de datos: métodos especiales

Python llama a métodos con doble guion bajo («dunder») para implementar la sintaxis del lenguaje: `a + b` llama a
`a.__add__(b)`, `len(x)` a `x.__len__()`, `for v in x` a `iter(x)`, que llama a `x.__iter__()`. Implementarlos hace que tus
objetos se comporten como los del lenguaje.

| Método | Lo usa | Contrato |
|---|---|---|
| `__repr__` | `repr()`, la consola, los depuradores | texto inequívoco, idealmente código que recrea el objeto |
| `__eq__` | `==` | relación de equivalencia (reflexiva, simétrica, transitiva) |
| `__hash__` | `set`, claves de `dict` | `a == b` implica `hash(a) == hash(b)`; constante mientras el objeto esté en el conjunto |
| `__lt__` | `<`, `sorted`, `min` | orden estricto; con `functools.total_ordering` se deducen `<=`, `>`, `>=` |
| `__add__`, `__mul__` | `+`, `*` | devolver `NotImplemented` si no sabe operar con el otro tipo |
| `__iter__` | `for`, `list()`, `sum()` | devolver un iterador (lo más sencillo: escribirlo como generador con `yield`) |
| `__len__`, `__getitem__` | `len()`, `x[i]` | secuencias |
| `__enter__`, `__exit__` | `with` | adquirir y liberar un recurso pase lo que pase |

**`__eq__` y `__hash__`.** Un `set` o un `dict` buscan primero por **hash** y solo comparan con `__eq__` los objetos cuyo
hash coincide. Si dos objetos son iguales pero tienen hash distinto, el conjunto **los guarda dos veces**. Por eso el contrato
es: iguales $\Rightarrow$ mismo hash. Python lo protege así: si una clase define `__eq__` sin `__hash__`, sus instancias
**dejan de ser hashables**. Y un objeto que cambia después de entrar en un conjunto puede «perderse» dentro de él: solo los
objetos **inmutables** deben ser hashables.

**Ejemplo resuelto 1: una fracción como valor.**

```python
from functools import total_ordering
from math import gcd


@total_ordering
class Fraccion:
    """Invariante: den > 0 y gcd(num, den) == 1 (forma canónica)."""

    __slots__ = ("num", "den")  # sin __dict__: menos memoria, sin atributos nuevos por error

    def __init__(self, num, den=1):
        if den == 0:
            raise ZeroDivisionError("denominador nulo")
        g = gcd(num, den) * (1 if den > 0 else -1)
        self.num, self.den = num // g, den // g

    def __repr__(self):
        return f"Fraccion({self.num}, {self.den})"

    def __eq__(self, o):
        if not isinstance(o, Fraccion):
            return NotImplemented
        return (self.num, self.den) == (o.num, o.den)  # vale por la forma canónica

    def __hash__(self):
        return hash((self.num, self.den))

    def __lt__(self, o):
        return self.num * o.den < o.num * self.den      # den > 0 por el invariante

    def __add__(self, o):
        return Fraccion(self.num * o.den + o.num * self.den, self.den * o.den)


a, b = Fraccion(1, 2), Fraccion(2, 4)
assert a == b and hash(a) == hash(b) and len({a, b}) == 1
assert a + Fraccion(1, 3) == Fraccion(5, 6)
assert sorted([Fraccion(3, 4), Fraccion(-1, 2), a]) == [Fraccion(-1, 2), a, Fraccion(3, 4)]
assert Fraccion(3, -6) == Fraccion(-1, 2)
```

Fíjate en cómo el **invariante** (forma canónica) hace correctos a `__eq__` y `__hash__`: dos fracciones iguales tienen la
misma representación, luego el mismo hash. Y `__lt__` es correcto porque el invariante garantiza $\text{den} > 0$ (multiplicar
por un negativo cambiaría el sentido de la desigualdad).

**`@dataclass`.** Para clases que son sobre todo datos, el decorador genera `__init__`, `__repr__` y `__eq__`; con
`frozen=True` los objetos son inmutables y además hashables; con `order=True`, comparables campo a campo.

**Gestores de contexto.** `with recurso as r:` llama a `__enter__` al entrar y a `__exit__(tipo, valor, traza)` al salir,
**también si hay una excepción**. Si `__exit__` devuelve verdadero, la excepción se **suprime**. Con varios gestores en un
mismo `with`, se cierran en orden **inverso** al de apertura. Así se garantiza cerrar archivos, liberar cerrojos o
deshacer transacciones.

## 4. Herencia, `super()` y el orden de resolución

Una **subclase** hereda los atributos y métodos de su clase base y puede **redefinirlos**. `super().metodo()` llama a la
versión **siguiente en el MRO**, no necesariamente a la de la clase base directa.

El **MRO** (*method resolution order*) es la lista de clases en la que se busca un atributo, en `Clase.__mro__`. Con herencia
múltiple, Python usa la **linealización C3** (introducida en Python 2.3 y vigente en Python 3):

$$
L(C) = C + \operatorname{merge}\bigl(L(B_1), \dots, L(B_n), [B_1, \dots, B_n]\bigr),
$$

donde $\operatorname{merge}$ toma repetidamente la **primera cabeza** de las listas que **no aparezca en la cola** de ninguna
otra lista, la añade al resultado y la quita de todas. Si en algún paso no hay cabeza válida, la jerarquía es incoherente y
Python se niega a crear la clase (`TypeError`). El resultado respeta dos reglas: cada clase va antes que sus bases, y las bases
de una clase conservan el orden en que se declararon.

**Ejemplo resuelto 2 (el diamante).** `class A`, `class B(A)`, `class C(A)`, `class D(B, C)`.
$L(B) = [B, A, o]$, $L(C) = [C, A, o]$ ($o$ = `object`).
$L(D) = D + \operatorname{merge}([B, A, o], [C, A, o], [B, C])$:

1. Cabeza $B$: no está en ninguna cola → se toma. Quedan $[A, o], [C, A, o], [C]$.
2. Cabeza $A$: está en la cola de $[C, A, o]$ → se salta. Cabeza $C$: válida → se toma. Quedan $[A, o], [A, o], []$.
3. $A$, después $o$.

$L(D) = [D, B, C, A, o]$: **$A$ aparece una sola vez y después de $B$ y $C$**. Por eso, si cada clase llama a
`super().metodo()`, el método de $A$ se ejecuta **una vez**: es la **herencia cooperativa**.

**Ahora tú.** Añade `class E(C)` y `class F(D, E)`. Calcula $L(F)$ antes de abrir la solución.

> [!tip]- Solución
> $L(E) = [E, C, A, o]$. $L(F) = F + \operatorname{merge}([D, B, C, A, o], [E, C, A, o], [D, E])$: se toman $D$ y $B$; la
> cabeza $C$ está en la cola de $[E, C, A, o]$, así que se toma $E$; después $C$, $A$, $o$:
> $L(F) = [F, D, B, E, C, A, o]$. Compruébalo con `F.__mro__`.

**Clases abstractas y protocolos.** `abc.ABC` con `@abstractmethod` define una interfaz que las subclases **deben**
implementar (no se puede instanciar una clase con métodos abstractos pendientes). Python también admite el **tipado de pato**
(*duck typing*): cualquier objeto con los métodos adecuados sirve, herede de lo que herede; `typing.Protocol` permite
declarar esa interfaz para un comprobador de tipos.

## 5. Diseño: composición, Liskov y responsabilidades

**Polimorfismo.** Código que trabaja con la **interfaz** sirve para cualquier implementación: `sum(f.area() for f in figuras)`
no pregunta qué figura es cada una. Añadir una figura nueva no obliga a modificar ese código (**abierto a la extensión,
cerrado a la modificación**).

**El principio de sustitución de Liskov.** Liskov y Wing (1994) definieron el **subtipado de comportamiento**: $S$ es subtipo
de $T$ si todo lo que se puede demostrar de los objetos de $T$ a partir de su especificación sigue siendo cierto para los de
$S$. En la práctica: una subclase **no puede exigir más** en las precondiciones ni **garantizar menos** en las
postcondiciones, y debe **conservar los invariantes** de la base.

**Ejemplo resuelto 3 (el cuadrado que no es un rectángulo).** Un `Rect` mutable garantiza: «tras `set_w(5)` y `set_h(4)`, el
área es $20$». Un `Cuadrado(Rect)` que mantiene sus lados iguales debe cambiar los dos en cada `set`, y el área resulta
$16$: rompe la postcondición, y **toda función escrita para `Rect` falla con un `Cuadrado`**. En geometría un cuadrado es un
rectángulo; como **objetos mutables con esa interfaz**, no. Soluciones: que sean inmutables (un `Cuadrado` inmutable sí cumple
todo lo que promete un `Rect` inmutable), o que no se hereden.

**Composición frente a herencia.** «Es un» (herencia) acopla la subclase a todos los detalles de la base; «tiene un»
(composición) solo a su interfaz. Regla práctica: **compón por defecto; hereda solo cuando la subclase es sustituible** por la
base en todos sus usos. Un `Almacen` *tiene* un diccionario de existencias; no *es* un diccionario (si heredara de `dict`,
cualquiera podría escribir `almacen["tornillo"] = -5` saltándose el invariante).

**Una responsabilidad por clase.** Si para describir una clase hace falta la palabra «y» («lee el archivo **y** calcula la
nómina **y** envía el correo»), probablemente son tres clases. Los cinco principios conocidos como SOLID (responsabilidad
única, abierto/cerrado, sustitución de Liskov, segregación de interfaces, inversión de dependencias) resumen estas ideas; no
son leyes, sino heurísticas para que el código sea fácil de cambiar.

## 6. Patrones de diseño

Un **patrón** es una solución con nombre a un problema de diseño recurrente. El catálogo clásico es el de Gamma, Helm,
Johnson y Vlissides (1994), con 23 patrones. En Python muchos se simplifican porque las funciones son objetos.

**Estrategia**: encapsula un algoritmo intercambiable. Un pedido recibe la política de descuento como objeto (o como
función) y no sabe cuál es:

```python
class Pedido:
    def __init__(self, lineas, descuento):
        self.lineas, self.descuento = lineas, descuento

    def total(self):
        return sum(precio * cantidad for precio, cantidad in self.lineas)

    def a_pagar(self):
        return round(self.descuento(self), 2)


def sin_descuento(pedido):
    return pedido.total()


def diez_por_ciento(pedido):
    return pedido.total() * 0.9


p = [(20.0, 2), (5.0, 4)]
assert Pedido(p, sin_descuento).a_pagar() == 60.0
assert Pedido(p, diez_por_ciento).a_pagar() == 54.0
```

**Observador**: un sujeto mantiene una lista de suscriptores y los avisa de cada cambio (eventos de una interfaz gráfica,
alarmas de un sensor, *webhooks*). El sujeto no conoce a sus observadores; solo los llama.

**Estado**: un objeto cambia de comportamiento según su estado interno. Un torno de metro: en estado *cerrado*, una moneda lo
abre y un empuje dispara la alarma; en *abierto*, un empuje deja pasar y lo cierra. Se implementa con una tabla de
transiciones o con una clase por estado; es una **máquina de estados finitos**, el mismo modelo que un protocolo de red o un
analizador léxico.

```python
TRANSICIONES = {                      # (estado, evento) -> (nuevo estado, acción)
    ("cerrado", "moneda"): ("abierto", None),
    ("cerrado", "empuje"): ("cerrado", "alarma"),
    ("abierto", "empuje"): ("cerrado", "paso"),
    ("abierto", "moneda"): ("abierto", None),
}

estado, acciones = "cerrado", []
for evento in ["empuje", "moneda", "empuje", "empuje"]:
    estado, accion = TRANSICIONES[(estado, evento)]
    if accion:
        acciones.append(accion)
assert (estado, acciones) == ("cerrado", ["alarma", "paso", "alarma"])
```

**Fábrica**: un método o función decide qué clase instanciar (`Figura.desde_texto("circulo 2")`); en Python suele ser un
`@classmethod` o un diccionario de clases.

**Iterador**: recorre una colección sin exponer su estructura. En Python es el protocolo `__iter__`/`__next__`, y un
generador (`yield`) lo implementa en pocas líneas.

**Decorador** (el patrón): envuelve un objeto para añadirle comportamiento con la misma interfaz (un flujo de datos que
además comprime). Los decoradores de funciones de Python (`@functools.cache`) aplican la misma idea a funciones.

## 7. Probar clases

Cada método público se prueba **con su contrato**: estado inicial, efecto de cada operación, invariante tras cada operación,
y que las operaciones inválidas lanzan la excepción esperada **sin modificar el estado**. Con `unittest` o `pytest`:

```python
import unittest


class Pila:
    def __init__(self):
        self._datos = []

    def apilar(self, x):
        self._datos.append(x)

    def desapilar(self):
        if not self._datos:
            raise IndexError("pila vacía")
        return self._datos.pop()

    def __len__(self):
        return len(self._datos)


class PruebasPila(unittest.TestCase):
    def test_lifo(self):
        p = Pila()
        for x in (1, 2, 3):
            p.apilar(x)
        self.assertEqual([p.desapilar() for _ in range(3)], [3, 2, 1])

    def test_vacia(self):
        p = Pila()
        with self.assertRaises(IndexError):
            p.desapilar()
        self.assertEqual(len(p), 0)


resultado = unittest.main(argv=["x"], exit=False, verbosity=0).result
assert resultado.wasSuccessful() and resultado.testsRun == 2
```

## 8. Errores típicos

- **Argumentos por defecto mutables** en `__init__` (sección 2).
- Usar `self.contador += 1` para un contador de clase: crea un atributo de instancia.
- Definir `__eq__` sin `__hash__` (objetos no hashables) o con un `__hash__` incoherente (duplicados en conjuntos).
- Hacer hashable un objeto **mutable** y modificarlo dentro de un conjunto.
- Heredar para **reutilizar código** cuando la subclase no es sustituible (Liskov): usar composición.
- Romper el invariante en un método que falla a mitad (modificar antes de validar).
- Llamar a `Base.metodo(self)` en herencia múltiple en lugar de `super()`: la base común se ejecuta dos veces.
- Exponer el estado interno (devolver la lista interna en lugar de una copia o una vista de solo lectura).
- Clases «dios» con veinte responsabilidades; o, al revés, una clase para algo que es una función.

## 9. Resumen

- Clase = estado + comportamiento + invariante; el constructor lo establece y cada método lo conserva.
- Búsqueda de atributos: instancia, clase, MRO; asignar en la instancia sombrea el de clase.
- Métodos especiales: `__repr__`, `__eq__` + `__hash__` coherentes, `__lt__`, `__add__`, `__iter__`, `__enter__`/`__exit__`.
- MRO por linealización C3; `super()` llama al siguiente del MRO (herencia cooperativa).
- Liskov: la subclase no exige más ni promete menos; si no, composición.
- Patrones: Estrategia, Observador, Estado, Fábrica, Iterador, Decorador.

## Repaso: lo que debe quedarte dentro de un mes

1. Un invariante se establece en `__init__` y lo conserva cada método; validar antes de modificar.
2. `a == b` $\Rightarrow$ `hash(a) == hash(b)`; solo lo inmutable debe ser hashable.
3. Cómo se calcula un MRO con C3 y por qué `super()` ejecuta la base común una vez.
4. El cuadrado mutable no es sustituible por el rectángulo mutable: compón por defecto.
5. Estrategia (algoritmo intercambiable), Observador (suscriptores) y Estado (máquina de estados).

## Siguiente

Los nodos de sistemas ([[sys-c-memoria]]) muestran cómo se representa un objeto en memoria (una estructura más una tabla de
punteros a funciones); `prog-cpp-moderno` y `prog-rust-fundamentos` (ramas) llevan estas ideas a lenguajes con control explícito de la memoria.
