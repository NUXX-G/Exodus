---
id: sys-bases-datos
title: "Bases de datos relacionales: modelo, SQL, diseño, índices y transacciones"
area: bajo-nivel
trunk_level: 8
prerequisites: [prog-estructuras-datos, mat-logica-demostraciones]
academic_sources:
  - "Codd, E. F. A Relational Model of Data for Large Shared Data Banks. Communications of the ACM, 13(6), 377-387, 1970."
  - "Silberschatz, A.; Korth, H. F.; Sudarshan, S. Database System Concepts, 7ª ed. McGraw-Hill, 2019."
  - "Bayer, R.; McCreight, E. M. Organization and Maintenance of Large Ordered Indexes. Acta Informatica, 1(3), 173-189, 1972."
  - "Haerder, T.; Reuter, A. Principles of Transaction-Oriented Database Recovery. ACM Computing Surveys, 15(4), 287-317, 1983."
  - "SQLite. Documentación oficial: SQL As Understood By SQLite, Window Functions, EXPLAIN QUERY PLAN e Isolation In SQLite (sqlite.org/docs.html); módulo sqlite3 de Python (docs.python.org/3/library/sqlite3.html)."
attachments: [tienda.sql]
hints:
  - "Concepto: una consulta SQL describe QUÉ filas quieres, no cómo obtenerlas. Piensa en el orden lógico: FROM y JOIN construyen la tabla de trabajo, WHERE filtra filas, GROUP BY forma grupos, HAVING filtra grupos, SELECT calcula columnas, ORDER BY y LIMIT ordenan y recortan. NULL significa «desconocido»: cualquier comparación con NULL da desconocido, no verdadero."
  - "Herramienta: carga la base con `sqlite3 tienda.db < tienda.sql` y prueba en el intérprete (`.headers on`, `.mode column`, `.schema`); construye la consulta por partes y comprueba cada una con COUNT(*). EXPLAIN QUERY PLAN muestra si se usa un índice. Desde Python: sqlite3.connect y siempre parámetros `?`."
  - "Documentación: sqlite.org/lang_select.html (SELECT), sqlite.org/windowfunctions.html (funciones de ventana), sqlite.org/lang_transaction.html y lang_savepoint.html (transacciones), sqlite.org/eqp.html (planes de consulta); docs.python.org/3/library/sqlite3.html (consultas con parámetros); Silberschatz, Korth y Sudarshan, capítulos de SQL, diseño relacional, índices y transacciones."
exercises:
  - id: contar-con-where
    tier: 1
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuántos clientes son de **Madrid**? Respuesta: un entero.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: count-y-null
    tier: 1
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿qué devuelve esta consulta?

      ```sql
      SELECT COUNT(*) - COUNT(ciudad) FROM clientes
      ```

      Respuesta: un entero.
    answers: ["sha256:7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451"]
  - id: facturacion-total
    tier: 1
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuál es la facturación total (suma de cantidad por precio de todas las líneas), en euros? Respuesta: un número con **2 decimales**.
    answers: ["sha256:9f614d2385738349487329e7844d25101426a295d1e3c881a37a1339b17ac0fb"]
  - id: clientes-sin-pedidos
    tier: 2
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuántos clientes no han hecho **ningún** pedido? (Usa `LEFT JOIN ... IS NULL` o `NOT EXISTS`.) Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: categoria-que-mas-factura
    tier: 2
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿qué categoría de producto factura más y cuánto, en euros? Respuesta: `categoria;importe` con el importe con **2 decimales** (por ejemplo `hogar;123.45`).
    answers: ["sha256:922dea0ad4d218a11badb7abf5b936aa25f1cb4d3d0fcaaecae57175f4ff462e"]
  - id: pedidos-de-marzo
    tier: 2
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuántos pedidos se hicieron en **marzo de 2025**? (Las fechas son texto `AAAA-MM-DD`: se pueden comparar como cadenas.) Respuesta: un entero.
    answers: ["sha256:f5ca38f748a1d6eaf726b8a42fb575c3c71f1864a8143301782de13da2d9202b"]
  - id: unidades-por-pedido
    tier: 2
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuántas unidades (suma de `cantidad`) tiene de media un pedido? Respuesta: un número con **2 decimales**.
    answers: ["sha256:7c730065f11c16c622827efa7a7b0cf1da38312481685e659b6ff4c0c1dccadd"]
  - id: group-by-y-having
    tier: 2
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuántos clientes han hecho **más de 8** pedidos? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: productos-nunca-vendidos
    tier: 2
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuántos productos no aparecen en ninguna línea de pedido? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: inyeccion-sql
    tier: 2
    prompt: |
      Un programa en Python busca clientes por nombre **concatenando** lo que escribe el usuario. Con la base `tienda.sql` cargada en `con` (y sin modificarla), un usuario introduce `' OR '1'='1`. ¿Cuántas filas devuelve cada versión?

      ```python
      entrada = "' OR '1'='1"
      mala = con.execute("SELECT * FROM clientes WHERE nombre = '" + entrada + "'").fetchall()
      buena = con.execute("SELECT * FROM clientes WHERE nombre = ?", (entrada,)).fetchall()
      ```

      Respuesta: `len(mala);len(buena)`.
    answers: ["sha256:a92e29619a8d15259f214a705f70a17668d7face5a3749c7780affecd31f29ff"]
  - id: transaccion-y-savepoint
    tier: 2
    prompt: |
      En una base SQLite se ejecuta este guion. ¿Cuántas filas **más** tiene la tabla `clientes` al final que al principio?

      ```sql
      BEGIN;
      INSERT INTO clientes(nombre, ciudad) VALUES ('A','X'),('B','X'),('C','X'),('D','X'),('E','X');
      SAVEPOINT s;
      INSERT INTO clientes(nombre, ciudad) VALUES ('F','X'),('G','X'),('H','X');
      ROLLBACK TO s;
      COMMIT;
      ```

      Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: not-in-con-null
    tier: 3
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿qué devuelven estas dos consultas?

      ```sql
      SELECT COUNT(*) FROM clientes WHERE ciudad NOT IN ('Madrid', NULL);
      SELECT COUNT(*) FROM clientes WHERE ciudad NOT IN ('Madrid');
      ```

      Respuesta: los dos resultados separados por `;`.
    answers: ["sha256:8acbef114c6a31efb7dba82e4c12ff0e3d4163fbc6f9dfe191dda76cb3eac29f"]
  - id: funcion-de-ventana
    tier: 3
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ordena a los clientes por gasto total (de mayor a menor) con `DENSE_RANK()`. ¿Qué `id` tiene el cliente en el **tercer** puesto? Respuesta: un entero.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: media-con-left-join
    tier: 3
    prompt: |
      Con la base de ejemplo `tienda.sql` (adjunta al nodo: `sqlite3 tienda.db < tienda.sql`), ¿cuál es el gasto medio por cliente de **Sevilla**, en euros, contando con gasto $0$ a los clientes de Sevilla que no han comprado nada? Respuesta: un número con **2 decimales**.
    answers: ["sha256:4d258c5567738b0a14b0f1978313f512e6f730af6231f31cde22cd7213312b91"]
  - id: claves-candidatas
    tier: 3
    prompt: |
      La relación $R(A, B, C, D)$ cumple las dependencias funcionales $A \to B$, $B \to C$ y $C \to A$. ¿Cuántas **claves candidatas** tiene (conjuntos mínimos de atributos cuyo cierre es todo $R$)? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: cierre-de-atributos
    tier: 3
    prompt: |
      Con las dependencias $A \to C$, $BC \to D$, $D \to E$ y $CE \to F$ sobre $R(A, B, C, D, E, F)$, calcula el cierre $\{A, B\}^+$. Respuesta: las letras en orden alfabético, juntas (por ejemplo `ACD`).
    answers: ["sha256:bef57ec7f53a6d40beb640a780a639c83bc29ac8a9816f1fc6c5c6dcd93c4721", "sha256:396b95a2ac1374b19f55194cc33da5ec160de5bdda2b8d2fd3ba5641a52cc003"]
  - id: capacidad-de-un-b-arbol
    tier: 3
    prompt: |
      En un B-árbol de **grado mínimo** $t = 50$ (cada nodo salvo la raíz tiene entre $t - 1$ y $2t - 1$ claves; la raíz, entre $1$ y $2t - 1$) y **altura** $h = 2$ (la raíz está a profundidad $0$ y todas las hojas a profundidad $2$), ¿cuántas claves caben como **máximo** y cuántas hay como **mínimo**? Respuesta: los dos números separados por `;`.
    answers: ["sha256:134f879d9663ffb19ae9572d471a5f1818fb61de1788ac8fc2876e852fa1cb2f"]
---

# Bases de datos relacionales: modelo, SQL, diseño, índices y transacciones

Casi todo dato importante del mundo (cuentas bancarias, historiales médicos, inventarios, matrículas) vive en una base de
datos relacional. En 1970 Codd propuso separar **qué** datos hay de **cómo** se guardan: el usuario ve tablas (relaciones) y pide
resultados con un lenguaje declarativo, y el sistema decide cómo obtenerlos. Este nodo enseña el modelo relacional, SQL con la
precisión que exige un profesional (combinaciones, agregación, subconsultas, funciones de ventana, y la lógica de tres valores de
`NULL`), cómo diseñar esquemas sin redundancia (dependencias funcionales y formas normales), cómo funcionan los índices
(B-árboles) y qué garantizan las transacciones. Todo se practica con **SQLite**, que viene con Python y es la base de datos más
desplegada del mundo.

## Objetivos

Al terminar sabrás:

1. Explicar relaciones, claves (candidata, primaria, foránea) e integridad referencial, y crear tablas con restricciones.
2. Escribir consultas con `WHERE`, `JOIN` (interno y externo), `GROUP BY`/`HAVING`, subconsultas, `EXISTS`, CTE y funciones de
   ventana, y razonar sobre `NULL`.
3. Traducir entre SQL y álgebra relacional.
4. Calcular cierres de atributos y claves candidatas, y normalizar un esquema hasta 3FN o FNBC.
5. Explicar los B-árboles, calcular su capacidad y leer un plan de consulta.
6. Explicar ACID, los niveles de aislamiento y sus anomalías, y escribir código inmune a la **inyección SQL**.

## Qué debes dominar antes

[[prog-estructuras-datos]] (árboles de búsqueda, tablas hash, coste de las operaciones) y [[mat-logica-demostraciones]]
(conjuntos, producto cartesiano, relaciones, cuantificadores). Para los ejemplos en Python, [[prog-python-fundamentos]].

> [!question] Test de entrada
> 1. Si $A = \{1, 2\}$ y $B = \{x, y, z\}$, ¿cuántos elementos tiene $A \times B$?
> 2. ¿Cuántas comparaciones hacen falta, como mucho, para buscar en un árbol de búsqueda equilibrado de un millón de claves?
> 3. ¿Es cierto «$x \ne 3$» si no se conoce $x$?
>
> Respuestas: 6; unas 20 ($\log_2 10^6 \approx 20$); no se sabe: ni verdadero ni falso (así razona SQL con `NULL`).

Descarga el adjunto **`tienda.sql`** y cárgalo: `sqlite3 tienda.db < tienda.sql` (o en Python, `con.executescript(open("tienda.sql").read())`).
Contiene 36 clientes, 20 productos, 260 pedidos y sus líneas. Los ejercicios se resuelven con ella.

## 1. Para qué sirve

- **Cualquier aplicación con datos persistentes**: webs, aplicaciones móviles (SQLite está en todos los teléfonos), sistemas de
  gestión. Esta misma plataforma guarda tu progreso en SQLite.
- **Análisis de datos**: SQL es el lenguaje común de analistas, científicos de datos e ingenieros; las funciones de ventana y la
  agregación responden en una línea preguntas que costarían un programa entero.
- **Seguridad**: la inyección SQL sigue entre los fallos web más graves y se evita por completo con consultas parametrizadas
  ([[sec-web]]); los permisos mínimos limitan el daño.
- **Rendimiento**: un índice bien elegido convierte una consulta de minutos en milisegundos.

## 2. El modelo relacional

Una **relación** sobre los dominios $D_1, \dots, D_n$ es un subconjunto de $D_1 \times \cdots \times D_n$: un **conjunto** de
tuplas (filas). Sus columnas se llaman **atributos**; el **esquema** es la lista de atributos con sus tipos. Por ser un conjunto,
en teoría no hay filas repetidas ni orden (SQL relaja lo primero: hay que pedir `DISTINCT`).

- Una **superclave** es un conjunto de atributos que identifica cada fila (no hay dos filas con los mismos valores en él). Una
  **clave candidata** es una superclave **mínima**. La **clave primaria** es la candidata elegida (`PRIMARY KEY`).
- Una **clave foránea** es un atributo que debe coincidir con la clave primaria de otra tabla (`REFERENCES`): `pedidos.cliente_id`
  apunta a `clientes.id`. La **integridad referencial** impide que un pedido apunte a un cliente que no existe.
- Las **restricciones** (`NOT NULL`, `UNIQUE`, `CHECK (precio > 0)`) son invariantes que el sistema garantiza en toda escritura.

El esquema de `tienda.sql`:

```sql
CREATE TABLE clientes  (id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, ciudad TEXT);
CREATE TABLE productos (id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, categoria TEXT NOT NULL,
                        precio INTEGER NOT NULL CHECK (precio > 0));            -- en céntimos
CREATE TABLE pedidos   (id INTEGER PRIMARY KEY, cliente_id INTEGER NOT NULL REFERENCES clientes(id),
                        fecha TEXT NOT NULL);                                   -- AAAA-MM-DD
CREATE TABLE lineas    (pedido_id INTEGER NOT NULL REFERENCES pedidos(id),
                        producto_id INTEGER NOT NULL REFERENCES productos(id),
                        cantidad INTEGER NOT NULL CHECK (cantidad > 0),
                        PRIMARY KEY (pedido_id, producto_id));
```

Observa que el dinero se guarda en **céntimos enteros** (nunca en coma flotante: [[sys-c-fundamentos]]) y las fechas en formato
ISO, que se ordena correctamente como texto. En SQLite las claves foráneas se comprueban solo con `PRAGMA foreign_keys = ON`.

## 3. Consultas básicas

```sql
SELECT nombre, precio / 100.0 AS euros
FROM productos
WHERE categoria = 'libros' AND precio < 6000
ORDER BY precio DESC
LIMIT 3;
```

El **orden lógico** de evaluación no es el de escritura: `FROM` (y los `JOIN`) → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` →
`ORDER BY` → `LIMIT`. Por eso en `WHERE` no se puede usar un alias definido en `SELECT`, y por eso `WHERE` filtra filas y
`HAVING`, grupos.

**`NULL` y la lógica de tres valores.** `NULL` significa «desconocido» o «no aplicable». Cualquier comparación con `NULL`
(incluida `NULL = NULL`) da **desconocido**, y `WHERE` solo deja pasar las filas en que la condición es **verdadera**. Para
preguntar por `NULL` se usa `IS NULL` / `IS NOT NULL`. Las tablas de verdad de [[mat-logica-demostraciones]] se amplían:
$\text{falso} \land \text{desconocido} = \text{falso}$, $\text{verdadero} \lor \text{desconocido} = \text{verdadero}$, y en el resto
de casos con desconocido el resultado es desconocido. `COUNT(*)` cuenta filas; `COUNT(columna)` cuenta los valores **no nulos**;
`SUM`, `AVG`, `MIN` y `MAX` ignoran los `NULL`. `COALESCE(x, 0)` sustituye un `NULL` por un valor.

## 4. Combinar tablas: `JOIN`

`A JOIN B ON condición` (combinación **interna**) produce las parejas de filas de $A$ y $B$ que cumplen la condición: es el
producto cartesiano filtrado. Una `LEFT JOIN` conserva además las filas de $A$ **sin pareja**, rellenando con `NULL` las columnas
de $B$. Así se buscan «los que no tienen»: clientes sin pedidos son los que, tras `LEFT JOIN pedidos`, tienen `pedidos.id IS NULL`.

**Ejemplo resuelto 1.** Facturación por pedido, de mayor a menor:

```sql
SELECT p.id, p.fecha, SUM(l.cantidad * pr.precio) / 100.0 AS total
FROM pedidos p
JOIN lineas l     ON l.pedido_id = p.id
JOIN productos pr ON pr.id = l.producto_id
GROUP BY p.id
ORDER BY total DESC
LIMIT 5;
```

Cada fila de `lineas` se combina con su pedido y su producto; después se agrupan por pedido y se suma. Comprobación barata: la
suma de los totales de todos los pedidos debe coincidir con la facturación total calculada directamente sobre `lineas`.

> [!warning] Combinaciones que multiplican filas
> Si se combina una tabla con **dos** relaciones de uno a muchos a la vez (un cliente con sus pedidos **y** con sus reseñas), cada
> pedido se repite tantas veces como reseñas: las sumas salen infladas. Agrega cada relación por separado (en subconsultas o
> CTE) y combina después los resultados.

## 5. Agregación, subconsultas y funciones de ventana

**Agregación.** `GROUP BY` forma un grupo por cada valor distinto de las columnas indicadas; en `SELECT` solo pueden aparecer
esas columnas y funciones de agregado. `HAVING` filtra grupos: «ciudades con más de 5 clientes» es
`SELECT ciudad, COUNT(*) FROM clientes GROUP BY ciudad HAVING COUNT(*) > 5`.

**Subconsultas.** Una consulta puede aparecer como valor, como tabla o en una condición:

- `WHERE x IN (SELECT ...)` y `WHERE EXISTS (SELECT 1 FROM ... WHERE ...)` (correlacionada: se evalúa para cada fila exterior).
- **Cuidado con `NOT IN`**: `x NOT IN (a, b)` significa `x <> a AND x <> b`. Si la lista contiene un `NULL`, la comparación con él es
  desconocida y la conjunción **nunca** es verdadera: la consulta no devuelve nada. `NOT EXISTS` no tiene este problema.

**CTE.** `WITH gasto AS (SELECT ...) SELECT ... FROM gasto` da nombre a una subconsulta y hace legibles las consultas largas.

**Funciones de ventana.** Calculan un valor para cada fila a partir de un conjunto de filas relacionadas, **sin** agruparlas:

```sql
WITH ventas AS (
    SELECT producto_id, SUM(cantidad) AS unidades
    FROM lineas
    GROUP BY producto_id
)
SELECT pr.nombre, v.unidades,
       RANK()          OVER (ORDER BY v.unidades DESC) AS puesto,
       SUM(v.unidades) OVER (ORDER BY v.unidades DESC) AS acumulado
FROM ventas v
JOIN productos pr ON pr.id = v.producto_id
ORDER BY v.unidades DESC
LIMIT 5;
```

(Con `ORDER BY` dentro de `OVER`, la suma acumulada incluye por defecto a las filas **empatadas** con la actual.)

`ROW_NUMBER` numera sin empates; `RANK` deja huecos tras un empate (1, 1, 3); `DENSE_RANK` no (1, 1, 2). `PARTITION BY` reinicia
la ventana por grupo («el pedido más caro **de cada** cliente»).

## 6. Álgebra relacional

SQL se traduce a un **álgebra** de operadores sobre relaciones, que es lo que el optimizador manipula:

| Operador | Símbolo | SQL |
|---|:---:|---|
| selección (filas) | $\sigma_{c}(R)$ | `WHERE c` |
| proyección (columnas) | $\pi_{A, B}(R)$ | `SELECT DISTINCT A, B` |
| producto cartesiano | $R \times S$ | `FROM R, S` |
| combinación | $R \bowtie_{c} S = \sigma_c(R \times S)$ | `R JOIN S ON c` |
| unión, diferencia | $R \cup S$, $R - S$ | `UNION`, `EXCEPT` |
| renombrado | $\rho$ | `AS` |

Las equivalencias algebraicas permiten reescribir una consulta sin cambiar su resultado; la más rentable es **empujar las
selecciones hacia abajo**: $\sigma_c(R \bowtie S) = \sigma_c(R) \bowtie S$ si $c$ solo usa atributos de $R$, porque filtrar antes de
combinar reduce el trabajo. El **optimizador** elige entre los planes equivalentes estimando su coste.

## 7. Diseño: dependencias funcionales y formas normales

Un mal esquema repite datos y provoca **anomalías**: si cada línea de pedido guarda el nombre y la ciudad del cliente, cambiar la
ciudad exige actualizar muchas filas (anomalía de actualización), no se puede registrar un cliente sin pedidos (inserción) y
borrar su último pedido borra el cliente (borrado).

Una **dependencia funcional** $X \to Y$ dice que dos filas que coinciden en $X$ coinciden en $Y$. El **cierre** $X^+$ es el conjunto
de atributos determinados por $X$; se calcula partiendo de $X$ y añadiendo el lado derecho de toda dependencia cuyo lado
izquierdo ya esté contenido, hasta que no cambie. $X$ es superclave si $X^+$ contiene todos los atributos.

**Ejemplo resuelto 2.** $R(A, B, C, D, E)$ con $A \to B$, $B \to C$, $CD \to E$. $\{A\}^+ = \{A, B, C\}$: no es clave. $\{A, D\}^+$:
$A$ da $B$, $B$ da $C$, $CD$ da $E$: $\{A, B, C, D, E\}$, todo; y ni $\{A\}$ ni $\{D\}$ bastan, así que $AD$ es clave candidata. Como
$D$ no aparece en ningún lado derecho, **toda** clave debe contener $D$; y como $A$ solo se obtiene de sí mismo, también $A$:
$AD$ es la **única** clave.

**Formas normales.**

- **1FN**: atributos atómicos (nada de listas en una celda).
- **2FN**: ningún atributo no clave depende de **parte** de una clave candidata.
- **3FN**: para toda dependencia no trivial $X \to A$, o $X$ es superclave o $A$ forma parte de alguna clave candidata.
- **FNBC** (Boyce-Codd): para toda dependencia no trivial $X \to A$, $X$ es superclave.

Para normalizar se **descompone**: si $X \to Y$ viola la forma normal, se separa $R$ en $R_1 = X \cup Y$ y $R_2 = R - (Y - X)$. Esta
descomposición es **sin pérdida** (la combinación de $R_1$ y $R_2$ por $X$ devuelve exactamente $R$) porque $X$ es clave de $R_1$.
En el ejemplo 2, $B \to C$ viola la FNBC; se separa en $(B, C)$ y $(A, B, D, E)$, y se sigue. `tienda.sql` está en FNBC: cada dato
se guarda una sola vez.

## 8. Índices y B-árboles

Sin índice, buscar `WHERE cliente_id = 7` exige leer toda la tabla. Un **índice** es una estructura auxiliar ordenada por la
columna que lleva a las filas en $O(\log n)$. Las bases de datos usan **B-árboles** (Bayer y McCreight, 1972) y su variante
**B+** (todas las claves en las hojas, enlazadas para recorrer rangos): árboles de búsqueda en los que cada nodo ocupa una
**página** de disco y contiene cientos de claves, de modo que la altura es pequeñísima y cada nivel cuesta una lectura.

Con **grado mínimo** $t$ (definición de CLRS), cada nodo salvo la raíz tiene entre $t - 1$ y $2t - 1$ claves y todas las hojas están a
la misma profundidad. Un B-árbol de altura $h$ con $n$ claves cumple

$$
n \ge 2t^h - 1, \qquad\text{luego}\qquad h \le \log_t \frac{n + 1}{2} .
$$

*Demostración.* La raíz tiene al menos 1 clave y 2 hijos; en la profundidad $d \ge 1$ hay al menos $2t^{d-1}$ nodos, cada uno con al
menos $t - 1$ claves. Sumando, $n \ge 1 + (t - 1)\sum_{d=1}^{h} 2t^{d-1} = 1 + 2(t^h - 1) = 2t^h - 1$. $\blacksquare$ Con $t = 100$ y
mil millones de claves, $h \le 4$: cuatro lecturas de página.

En SQLite, `EXPLAIN QUERY PLAN` muestra si una consulta recorre la tabla entera (`SCAN`) o usa un índice (`SEARCH ... USING
INDEX`). Un índice **compuesto** `(a, b)` sirve para buscar por `a` o por `a` y `b`, pero no solo por `b` (como un listín ordenado
por apellido y nombre). Los índices aceleran las lecturas y **encarecen** las escrituras (hay que mantenerlos) y ocupan espacio.

## 9. Transacciones

Una **transacción** es una secuencia de operaciones que se ejecuta como una unidad. Haerder y Reuter (1983) resumieron sus
garantías en el acrónimo **ACID**:

- **Atomicidad**: o se aplican todas las operaciones o ninguna (`COMMIT` o `ROLLBACK`). Una transferencia no puede quitar el dinero
  de una cuenta sin ponerlo en la otra.
- **Consistencia**: lleva la base de un estado que cumple las restricciones a otro que también las cumple.
- **Aislamiento**: las transacciones concurrentes no ven los estados intermedios de las demás.
- **Durabilidad**: lo confirmado sobrevive a un fallo (se escribe antes en un registro: [[sys-sistemas-operativos]]).

`SAVEPOINT nombre` marca un punto dentro de una transacción; `ROLLBACK TO nombre` deshace solo lo posterior, y la transacción
sigue.

**Aislamiento y anomalías.** Ejecutar transacciones en serie es seguro pero lento; los sistemas permiten intercalarlas y ofrecen
niveles de aislamiento según qué anomalías toleran: **lectura sucia** (leer datos no confirmados de otra transacción), **lectura no
repetible** (releer una fila y encontrarla cambiada), **fantasmas** (repetir una consulta y que aparezcan filas nuevas) y
**actualización perdida** (dos transacciones leen, ambas escriben y una pisa a la otra). El nivel `SERIALIZABLE` las impide todas;
`READ COMMITTED` (el predeterminado en PostgreSQL) solo impide las lecturas sucias. SQLite ofrece aislamiento serializable entre
conexiones, porque solo admite un escritor a la vez.

## 10. Seguridad: inyección SQL

Construir una consulta **concatenando** texto que viene del usuario permite que ese texto cambie la estructura de la consulta: con
la entrada `' OR '1'='1`, la condición `nombre = '...'` se convierte en una disyunción siempre verdadera, y con otras entradas se
pueden leer otras tablas o borrar datos. La defensa es **siempre** la misma: **consultas parametrizadas** (el valor viaja aparte y
el motor nunca lo interpreta como SQL). Escapar a mano es frágil; validar la entrada ayuda, pero no sustituye a los parámetros.

```python
import sqlite3

con = sqlite3.connect(":memory:")
con.executescript("""
    CREATE TABLE usuarios (id INTEGER PRIMARY KEY, nombre TEXT NOT NULL, saldo INTEGER NOT NULL);
    INSERT INTO usuarios (nombre, saldo) VALUES ('ana', 100), ('luis', 250), ('eva', 75);
""")

def buscar(nombre):
    # Correcto: el valor va como parámetro y nunca se interpreta como SQL.
    return con.execute("SELECT id, saldo FROM usuarios WHERE nombre = ?", (nombre,)).fetchall()

assert buscar("luis") == [(2, 250)]
assert buscar("x' OR 'a'='a") == []          # el ataque es solo un nombre raro que no existe

# Transferencia atómica: o las dos actualizaciones o ninguna.
def transferir(origen, destino, importe):
    with con:                                 # BEGIN ... COMMIT, o ROLLBACK si hay excepción
        con.execute("UPDATE usuarios SET saldo = saldo - ? WHERE id = ?", (importe, origen))
        (saldo,) = con.execute("SELECT saldo FROM usuarios WHERE id = ?", (origen,)).fetchone()
        if saldo < 0:
            raise ValueError("saldo insuficiente")
        con.execute("UPDATE usuarios SET saldo = saldo + ? WHERE id = ?", (importe, destino))

transferir(2, 1, 50)
try:
    transferir(3, 1, 500)
except ValueError:
    pass
saldos = dict(con.execute("SELECT nombre, saldo FROM usuarios"))
assert saldos == {"ana": 150, "luis": 200, "eva": 75}   # la transferencia fallida no dejó rastro
assert sum(saldos.values()) == 425                      # invariante: el dinero total se conserva

# Un índice cambia el plan de consulta.
con.execute("CREATE INDEX idx_nombre ON usuarios(nombre)")
plan = " ".join(fila[-1] for fila in con.execute("EXPLAIN QUERY PLAN SELECT * FROM usuarios WHERE nombre = 'eva'"))
assert "USING INDEX idx_nombre" in plan
```

Además, la cuenta con la que la aplicación se conecta debe tener **los permisos mínimos** necesarios: si solo lee, que no pueda
borrar tablas.

## 11. Errores típicos

- Comparar con `= NULL` en lugar de `IS NULL`; usar `NOT IN` con una subconsulta que puede devolver `NULL`.
- Confundir `WHERE` (filas) y `HAVING` (grupos); poner en `SELECT` columnas que no están en `GROUP BY`.
- `JOIN` interno cuando se querían conservar las filas sin pareja (`LEFT JOIN`), o filtrar en `WHERE` la tabla de la derecha de
  un `LEFT JOIN` (lo convierte en interno: la condición va en `ON`).
- Sumar después de combinar con dos relaciones de uno a muchos (totales inflados).
- Dinero en coma flotante; fechas en formatos que no se ordenan como texto.
- Concatenar entradas del usuario en el SQL.
- Crear índices para todo (escrituras lentas) o para nada (lecturas lentas): medir con el plan de consulta.

## 12. Resumen

- Relación = conjunto de tuplas; claves candidata, primaria y foránea; restricciones como invariantes.
- Orden lógico: `FROM`/`JOIN` → `WHERE` → `GROUP BY` → `HAVING` → `SELECT` → `ORDER BY` → `LIMIT`.
- `NULL`: lógica de tres valores; `IS NULL`; `COUNT(*)` frente a `COUNT(col)`; `NOT IN` con `NULL` no devuelve nada.
- `LEFT JOIN` para conservar filas sin pareja; subconsultas, `EXISTS`, CTE, funciones de ventana (`RANK`, `DENSE_RANK`).
- Álgebra relacional: $\sigma$, $\pi$, $\bowtie$; empujar selecciones.
- Dependencias funcionales, cierre, claves, 3FN y FNBC; descomposición sin pérdida.
- B-árboles: $n \ge 2t^h - 1$; pocas lecturas de página; `EXPLAIN QUERY PLAN`.
- ACID, niveles de aislamiento y anomalías; consultas parametrizadas siempre.

## Repaso: lo que debe quedarte dentro de un mes

1. El orden lógico de una consulta SQL y la diferencia entre `WHERE` y `HAVING`.
2. `NULL` es desconocido: `IS NULL`, `COUNT(col)` lo ignora, `NOT IN` con `NULL` falla.
3. `LEFT JOIN ... WHERE derecha.id IS NULL` encuentra lo que no tiene pareja.
4. Cierre de atributos y clave candidata; FNBC: todo determinante es superclave.
5. ACID y consultas parametrizadas contra la inyección.

## Siguiente

[[sec-web]] (la inyección SQL y otras vulnerabilidades de aplicaciones web) y, en las ramas, sistemas distribuidos (replicación y
transacciones distribuidas).
