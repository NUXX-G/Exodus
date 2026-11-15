---
id: tro-lectura-tecnica
title: "Lectura técnica: manuales, RFC y estándares, hojas de datos, artículos y verificación de fuentes"
area: troncal
trunk_level: 8
prerequisites: [tro-razonamiento-cientifico, prog-terminal-linux-git]
academic_sources:
  - "Keshav, S. How to Read a Paper. ACM SIGCOMM Computer Communication Review, 37(3), 83-84, 2007."
  - "Bradner, S. RFC 2119: Key words for use in RFCs to Indicate Requirement Levels. IETF, 1997; Leiba, B. RFC 8174: Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words. IETF, 2017 (juntas, BCP 14)."
  - "Crocker, D.; Overell, P. RFC 5234: Augmented BNF for Syntax Specifications: ABNF. IETF, 2008 (STD 68)."
  - "Preston-Werner, T. Semantic Versioning 2.0.0 (semver.org)."
  - "The Linux man-pages project. man-pages(7): convenciones de las páginas de manual y sus secciones (man7.org/linux/man-pages)."
hints:
  - "Concepto: cada tipo de documento tiene su estructura y su contrato. En una página de manual, mira SYNOPSIS, RETURN VALUE y ERRORS; en una RFC, las palabras clave en MAYÚSCULAS (BCP 14) y la gramática ABNF; en una hoja de datos, distingue máximos absolutos (no superar nunca) de condiciones recomendadas (donde se garantiza el funcionamiento), y valores típicos de mínimos y máximos; en un artículo, haz tres pasadas."
  - "Herramienta: `man -k palabra` busca páginas, `man 3 printf` elige sección y `man -w` dice qué archivo abre; las RFC se leen en rfc-editor.org (mira «Obsoletes», «Updated by» y las erratas); los DOI se resuelven en doi.org; Python trae datetime.isocalendar, re y la comparación de tuplas para comprobar fechas, expresiones regulares y versiones."
  - "Documentación: man7.org/linux/man-pages/man7/man-pages.7.html (secciones del manual), rfc-editor.org/rfc/rfc2119 y rfc8174 (BCP 14), rfc-editor.org/rfc/rfc5234 (ABNF), semver.org, Keshav (2007) «How to Read a Paper»."
exercises:
  - id: secciones-del-manual
    tier: 1
    prompt: |
      En las páginas de manual de Linux, ¿en qué sección está la llamada al sistema `open`, la función de la biblioteca C `printf`, la orden `ls` y el **formato de archivo** de `crontab`? Respuesta: los cuatro números en ese orden, separados por `;`.
    answers: ["sha256:0244550014d3358ccea272e21c0727fc83d3bcf0a2ba98d3f9487c3d642054a9"]
  - id: palabras-clave-de-las-rfc
    tier: 1
    prompt: |
      Según RFC 2119, ¿qué significa que una especificación diga que una implementación **SHOULD** hacer algo?

      (a) es obligatorio, sin excepciones · (b) es lo recomendado, pero puede haber razones válidas para no hacerlo, si se entienden sus consecuencias · (c) es opcional y da igual · (d) está prohibido

      Respuesta: una letra.
    answers: ["sha256:3e23e8160039594a33894f6564e1b1348bbd7a0088d42c4acb73eeaed59c009d"]
  - id: versionado-semantico
    tier: 1
    prompt: |
      Una biblioteca que sigue el versionado semántico (SemVer 2.0.0) está en la versión `2.3.7`. ¿Qué número debe tener la siguiente versión si (1) rompe la compatibilidad de su API, (2) añade una función compatible, (3) solo corrige un error? Respuesta: las tres versiones separadas por `;`.
    answers: ["sha256:bc07e5e7f1ce37b5e2b1381ad72069c3e9fd9d60cdfe0dc1d7b57129aee8bc46"]
  - id: prefijo-de-un-doi
    tier: 1
    prompt: |
      El artículo de Shannon «A Mathematical Theory of Communication» tiene el DOI `10.1002/j.1538-7305.1948.tb01338.x`. ¿Cuál es el **prefijo** del DOI (el que identifica a quien lo registró, aquí la editorial Wiley)? Respuesta: el prefijo.
    answers: ["sha256:2a0cd7ca1cdb50411bd67df904d9c7d0b809b1b398806a590b5d0e2090ae5524"]
  - id: orden-de-versiones
    tier: 2
    prompt: |
      Ordena de menor a mayor precedencia, según SemVer 2.0.0, las versiones `1.0.0`, `1.0.0-rc.1`, `1.0.0-beta.11`, `1.0.0-alpha`, `1.0.0-beta.2`. Respuesta: las cinco separadas por `;`.
    answers: ["sha256:7c3f9c3f0da747f016e33651ad1b281c9f43640e14f1155214f7aa279c1e9321"]
  - id: resistencia-desde-la-hoja-de-datos
    tier: 2
    prompt: |
      La hoja de datos de un LED da una tensión directa típica de $2{,}0$ V a $20$ mA (corriente recomendada) y una corriente máxima absoluta de $30$ mA. Se alimenta a $5$ V con una resistencia en serie. ¿Qué resistencia hace circular $20$ mA y qué potencia disipa, en mW? Respuesta: `ohmios;mW`.
    answers: ["sha256:ceb60ab5ee515456ff4544dfb065531dd7e2bce3bad85c99ffe3d6ba0390fb85"]
  - id: temperatura-de-union
    tier: 2
    prompt: |
      Un regulador disipa $1{,}5$ W. Su hoja de datos da una resistencia térmica unión-ambiente $\theta_{JA} = 50\ ^\circ$C/W y una temperatura máxima de unión de $125\ ^\circ$C. Con el ambiente a $40\ ^\circ$C, ¿a qué temperatura está la unión y cuántos grados de margen quedan? Respuesta: los dos números separados por `;`.
    answers: ["sha256:ebd5c902407da33024875c1fb9f06f3e9ddceb351b48c962ed7514ad4199fd88"]
  - id: campo-de-una-cabecera
    tier: 2
    prompt: |
      La especificación de TCP (RFC 9293) dice que el campo *Data Offset* (4 bits) da «el número de palabras de 32 bits de la cabecera TCP». Si vale $8$, ¿cuántos **bytes** ocupa la cabecera? Respuesta: un entero.
    answers: ["sha256:e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b"]
  - id: leer-una-gramatica-abnf
    tier: 2
    prompt: |
      Una especificación define en ABNF (RFC 5234) la regla `numero = 1*DIGIT [ "." 1*DIGIT ]` (uno o más dígitos, y opcionalmente un punto seguido de uno o más dígitos). ¿Cuántas de estas cadenas son un `numero` válido: `12`, `1.5`, `.5`, `3.`, `007`, `1.2.3`? Respuesta: un entero.
    answers: ["sha256:4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce"]
  - id: semana-iso
    tier: 2
    prompt: |
      Según ISO 8601, la semana 1 de un año es la que contiene su primer jueves, y las semanas empiezan en lunes. El 1 de enero de 2027 es viernes. ¿A qué año y semana ISO pertenece? Respuesta: en el formato `AAAA-Wss` (por ejemplo `2025-W07`).
    answers: ["sha256:00caeddcbe7221950d9560755c51b9fb862843ff6f4831ca1083539c842bb6f5"]
  - id: marca-de-tiempo-unix
    tier: 3
    prompt: |
      ¿Qué marca de tiempo Unix (segundos desde el 1 de enero de 1970 a las 00:00:00 UTC, sin segundos intercalares) corresponde al 12 de noviembre de 2026 a las 00:00:00 UTC? Respuesta: un entero.
    answers: ["sha256:8d326cf98c84a8112ea187ecc8cd184701cc0e94a8f90d8ea2789d064fec6976"]
  - id: escalado-de-una-complejidad
    tier: 3
    prompt: |
      La documentación de una función dice que tarda $\Theta(n \log n)$. Si con $n = 10^6$ tarda $2$ s, ¿por cuánto se **multiplica** el tiempo con $n = 10^7$, según esa fórmula? Respuesta: un número redondeado a **2 decimales**.
    answers: ["sha256:557b4b08db42e9f5eac4af0325a4f9d0d8f323b329afeea06d3fd2b036f13dab"]
  - id: mayusculas-en-las-rfc
    tier: 3
    prompt: |
      Una especificación que declara seguir BCP 14 escribe: «el cliente must cerrar la conexión». Según RFC 8174, ¿qué valor normativo tiene ese *must* en minúsculas?

      (a) el mismo que MUST · (b) el mismo que SHOULD · (c) ninguno especial: es lenguaje corriente · (d) significa que está prohibido

      Respuesta: una letra.
    answers: ["sha256:2e7d2c03a9507ae265ecf5b5356885a53393a2029d241394997265a1a25aefc6"]
  - id: expresion-regular-en-la-documentacion
    tier: 3
    prompt: |
      La documentación de un validador dice que acepta teléfonos con el patrón `\b\d{3}-\d{4}\b` (`\b` es un límite de palabra). ¿Cuántas coincidencias encuentra `re.findall` con ese patrón en el texto `Llamar al 555-1234 o al 555-98765; fax 123-4567, ref 99-1234 y 5551234.`? Respuesta: un entero.
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
---

# Lectura técnica: manuales, RFC y estándares, hojas de datos, artículos y verificación de fuentes

La mayor parte de lo que un profesional técnico necesita saber no está en un libro de texto: está en una página de manual, una RFC, la
documentación de una biblioteca, la hoja de datos de un componente o un artículo de investigación. Leer esos documentos con rapidez y sin
malinterpretarlos es una habilidad que se aprende, y es la que te permitirá seguir avanzando sin un profesor (y sin una IA que te lo
resuma, que es justo lo que Exodus te pide evitar durante el estudio). Este nodo enseña la estructura y las convenciones de cada tipo de
documento técnico, cómo extraer de ellos lo que importa y cómo buscar y verificar fuentes.

## Objetivos

Al terminar sabrás:

1. Orientarte en las páginas de manual de Linux (secciones, estructura) y en la documentación de una API.
2. Leer una RFC: su estado, las palabras clave normativas (BCP 14) y una gramática ABNF.
3. Leer una hoja de datos: máximos absolutos frente a condiciones recomendadas, valores típicos, curvas y condiciones de prueba, cálculo térmico.
4. Leer un artículo de investigación con el método de las tres pasadas.
5. Buscar y verificar fuentes: primarias y secundarias, DOI, preprints, erratas, versiones de la documentación.
6. Manejar las convenciones que aparecen en toda la documentación: versionado semántico, fechas ISO 8601 y tiempo Unix.

## Qué debes dominar antes

[[tro-razonamiento-cientifico]] (evaluar evidencia, unidades) y [[prog-terminal-linux-git]] (la terminal y `man`).

> [!question] Test de entrada
> 1. ¿Qué orden muestra la documentación de otra orden en la terminal?
> 2. ¿Qué diferencia hay entre una fuente primaria y una secundaria?
> 3. ¿Qué día de la semana es hoy en formato ISO 8601 (lunes = 1)?
>
> Respuestas: `man`; la primaria es el documento original (el artículo, el estándar, el código), la secundaria lo resume o interpreta;
> depende del día: el lunes es 1 y el domingo 7.

## 1. Para qué sirve

- **Programar y administrar**: casi todos los errores de uso de una función se evitan leyendo su sección RETURN VALUE y ERRORS.
- **Implementar protocolos y formatos**: interoperar exige cumplir los MUST de una RFC o de un estándar, no lo que hace «la mayoría».
- **Electrónica**: un componente que funciona en el banco puede fallar en verano si no se leyó la curva térmica.
- **Investigación y aprendizaje continuo**: el conocimiento nuevo sale primero en artículos; las ramas N5 y N6 de Exodus se apoyan en ellos.
- **Seguridad**: los avisos de vulnerabilidades (CVE), los cambios de versión y las erratas de los estándares son documentos técnicos.

## 2. Tipos de documentación y cómo leerlos

No todo documento se lee de principio a fin. Conviene distinguir cuatro intenciones: un **tutorial** enseña con un ejemplo guiado; una
**guía práctica** resuelve una tarea concreta; una **referencia** describe con exactitud cada elemento (una página de manual, una tabla de
una API); una **explicación** cuenta el porqué y el diseño. Para aprender, tutorial y explicación; para trabajar, guía y referencia. Una
referencia se **consulta** (se busca la entrada exacta), no se lee seguida.

Antes de leer cualquier documento técnico, comprueba **a qué versión** se refiere: la documentación de Python 3.12 no es la de 3.8, y una
RFC puede estar **obsoleta**.

## 3. Páginas de manual

Las páginas de manual de Linux se organizan en **secciones** numeradas (man-pages(7)):

| Sección | Contenido | Ejemplos |
|:---:|---|---|
| 1 | órdenes de usuario | `ls(1)`, `grep(1)` |
| 2 | llamadas al sistema (envoltorios de operaciones del núcleo) | `open(2)`, `fork(2)` |
| 3 | funciones de biblioteca | `printf(3)`, `malloc(3)` |
| 4 | archivos especiales (dispositivos) | `null(4)` |
| 5 | formatos de archivo y configuración | `crontab(5)`, `passwd(5)` |
| 7 | visiones generales, convenciones, protocolos | `tcp(7)`, `signal(7)` |
| 8 | administración del sistema | `mount(8)` |

Un mismo nombre puede estar en varias: `printf(1)` es la orden de la shell y `printf(3)` la función de C; `man 3 printf` elige la sección.
`man -k palabra` busca en las descripciones.

Cada página sigue una estructura fija. **NAME** y **SYNOPSIS** (la firma exacta y los `#include` necesarios), **DESCRIPTION**, **RETURN VALUE**
(qué devuelve en éxito y en error), **ERRORS** (los valores de `errno` posibles y su causa), **NOTES** y **BUGS** (sorpresas conocidas),
**EXAMPLES** y **SEE ALSO**. Ejemplo resuelto: en `open(2)`, RETURN VALUE dice que devuelve un descriptor o $-1$ con `errno` puesto; ERRORS lista,
entre otros, `ENOENT` (no existe el archivo) y `EACCES` (permiso denegado). Un programa correcto comprueba el $-1$ y trata cada error que le
importe: es la diferencia entre «funciona en mi máquina» y «funciona».

## 4. RFC y estándares

Las **RFC** (*Request for Comments*) son los documentos de la IETF que definen los protocolos de Internet. Cada una tiene número fijo (nunca se
modifica: se publica otra que la **actualiza** o la **deja obsoleta**), una **categoría** (*Standards Track*, *Best Current Practice*,
*Informational*…) y **erratas** verificadas. En la cabecera aparecen «Obsoletes» y «Updated by»: TCP es hoy RFC 9293, que dejó obsoleta la RFC 793.

**Palabras clave (BCP 14).** RFC 2119 fija el significado de **MUST** (requisito absoluto), **MUST NOT**, **SHOULD** (recomendado: puede haber
razones válidas para no hacerlo, pero hay que entender y sopesar las consecuencias), **SHOULD NOT** y **MAY** (opcional). RFC 8174 aclara que
solo tienen ese significado especial **en mayúsculas**: un *must* en minúsculas es lenguaje corriente.

**Gramáticas ABNF** (RFC 5234). Los formatos se definen con reglas como

```text
numero  = 1*DIGIT [ "." 1*DIGIT ]
fecha   = 4DIGIT "-" 2DIGIT "-" 2DIGIT
metodo  = "GET" / "POST" / "PUT"
```

donde `/` separa alternativas, `[ ]` marca lo opcional, `n*m` repite entre $n$ y $m$ veces (`1*` = una o más, `4DIGIT` = exactamente cuatro) y
`DIGIT` es una regla básica del propio estándar (`0` a `9`). Leer la gramática responde con exactitud preguntas como «¿es válido `3.`?» (no:
tras el punto hace falta al menos un dígito).

Otros organismos (ISO, IEC, IEEE, ITU, W3C, el comité de C) publican estándares con estructura parecida: alcance, referencias normativas,
definiciones y el texto normativo, separado de las notas y los ejemplos **informativos**.

## 5. Hojas de datos

La hoja de datos (*datasheet*) de un componente es su contrato. Las secciones que más importan:

- **Máximos absolutos** (*absolute maximum ratings*): límites que **no** se deben superar nunca, ni un instante; superarlos puede destruir el
  componente. No son condiciones de funcionamiento.
- **Condiciones recomendadas de funcionamiento**: el rango en que el fabricante **garantiza** las especificaciones.
- **Características eléctricas**: tablas con valores **mínimo**, **típico** y **máximo**, siempre con sus **condiciones de prueba** (temperatura,
  tensión, corriente). Se diseña con los mínimos y máximos; el típico es orientativo.
- **Curvas**: cómo cambian los parámetros con la temperatura o la frecuencia. Mira los ejes y las condiciones.
- **Datos térmicos**: la resistencia térmica unión-ambiente $\theta_{JA}$ (en °C/W) da la temperatura de la unión: $T_J = T_A + P\,\theta_{JA}$.

**Ejemplo resuelto 1.** Un regulador lineal baja de $12$ V a $5$ V con $0{,}3$ A: disipa $P = (12 - 5)\cdot0{,}3 = 2{,}1$ W. Con $\theta_{JA} = 65$ °C/W y
$T_A = 30$ °C, $T_J = 30 + 2{,}1\cdot65 = 166{,}5$ °C, por encima del máximo habitual de $125$–$150$ °C: hace falta un disipador, una entrada más
baja o un regulador conmutado. La hoja de datos lo decía; solo había que hacer la cuenta ([[ing-circuitos-dc-ac]]).

## 6. Artículos de investigación

Un artículo sigue casi siempre la estructura **IMRaD**: introducción (problema y estado del arte), métodos, resultados y discusión, más el
resumen (*abstract*), las figuras y las referencias. Keshav (2007) propone leerlo en **tres pasadas**:

1. **Primera pasada** (5-10 minutos): título, resumen, introducción, títulos de sección, conclusiones y una ojeada a las referencias. Debes poder
   decir de qué tipo de artículo se trata, en qué contexto se sitúa, si sus supuestos parecen válidos, cuáles son sus contribuciones y si está
   bien escrito. Muchas veces basta con esto para decidir no seguir.
2. **Segunda pasada** (hasta una hora): leer con cuidado, fijándose en figuras y tablas (ejes, barras de error, tamaño de muestra), anotando lo que
   no se entiende y las referencias que conviene leer, pero sin entrar en las demostraciones.
3. **Tercera pasada** (varias horas): **reconstruir** el trabajo mentalmente, con los mismos supuestos, como si hubiera que reimplementarlo. Así
   aparecen los supuestos ocultos, los errores y las ideas para trabajo futuro.

Para empezar en un tema nuevo: busca un artículo de **revisión** (*survey*) reciente o unos pocos artículos muy citados, y sigue sus referencias.

## 7. Buscar y verificar fuentes

- **Primaria, secundaria, terciaria.** La fuente primaria es el original (el estándar, el artículo, el código fuente, el conjunto de datos); una
  secundaria lo interpreta (un libro de texto, un artículo de revisión, un blog); una terciaria la recopila (una enciclopedia). Cita y comprueba
  siempre en la primaria cuando el detalle importa; usa las demás como mapa.
- **DOI.** El *Digital Object Identifier* identifica de forma permanente un artículo: `10.1145/362384.362685` tiene el **prefijo** `10.1145` (quien lo
  registró, aquí la ACM) y un sufijo propio; `https://doi.org/` + DOI lleva al documento.
- **Preprints.** arXiv y servidores similares publican trabajos **antes** (o sin) revisión por pares: útiles y rápidos, pero sin ese filtro.
- **Retractaciones y erratas.** Un artículo puede corregirse o retirarse; un estándar, tener erratas. Comprueba el estado actual antes de basarte en él.
- **Coherencia y triangulación.** Una afirmación importante debe aparecer en varias fuentes independientes; si solo la repite una cadena de
  blogs que se citan entre sí, sigue la cadena hasta el origen.
- **Fechas y versiones.** La documentación de la versión que usas, no la de la última. Los números, la fecha de consulta.
- **Generadores de texto.** Un modelo de lenguaje puede inventar referencias, versiones o parámetros con total aplomo. En Exodus no se usan
  durante el estudio; fuera de él, nada de lo que digan sustituye a la fuente primaria comprobada.

## 8. Convenciones que aparecen en todas partes

**Versionado semántico (SemVer 2.0.0).** `MAYOR.MENOR.PARCHE`: se incrementa MAYOR al romper la compatibilidad de la API pública (y MENOR y PARCHE
vuelven a 0), MENOR al añadir funciones compatibles (PARCHE vuelve a 0), y PARCHE al corregir errores compatibles. Las versiones previas llevan
un guion (`1.0.0-rc.1`) y tienen **menor** precedencia que la versión normal; sus identificadores se comparan uno a uno, **numéricamente** si son
números (`beta.2` < `beta.11`) y **lexicográficamente** si no (`alpha` < `beta` < `rc`). Según SemVer, la versión mayor `0` (`0.y.z`) es de desarrollo
inicial: cualquier cosa puede cambiar en cualquier momento.

**Fechas ISO 8601.** `2026-11-12T08:30:00Z`: año-mes-día (se ordena bien como texto), `T`, hora en 24 horas y la zona (`Z` = UTC, o `+01:00`). Las
**semanas ISO** empiezan en lunes y la semana 1 es la que contiene el primer jueves del año, así que los primeros días de enero pueden pertenecer a
la última semana del año anterior.

**Tiempo Unix.** Segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC, sin contar los segundos intercalares. Es como guardan el
tiempo casi todos los sistemas; un entero con signo de 32 bits se desborda el 19 de enero de 2038 (de ahí que se usen 64 bits).

```python
import datetime as dt
import re


def clave_semver(v):
    """Clave de ordenación de SemVer 2.0.0 (sin metadatos de compilación)."""
    nucleo, _, previa = v.partition("-")
    base = tuple(int(x) for x in nucleo.split("."))
    if not previa:
        return (base, 1, ())
    ids = tuple((0, int(p), "") if p.isdigit() else (1, 0, p) for p in previa.split("."))
    return (base, 0, ids)


assert sorted(["2.0.0", "2.0.0-rc.1", "1.10.0", "1.9.3"], key=clave_semver) == ["1.9.3", "1.10.0", "2.0.0-rc.1", "2.0.0"]

# Semanas ISO: el 1 de enero de 2021 (viernes) pertenece a la semana 53 de 2020.
assert dt.date(2021, 1, 1).isocalendar()[:2] == (2020, 53)

# Tiempo Unix y el límite de 2038 para enteros de 32 bits con signo.
limite = dt.datetime(1970, 1, 1, tzinfo=dt.timezone.utc) + dt.timedelta(seconds=2**31 - 1)
assert limite.isoformat() == "2038-01-19T03:14:07+00:00"

# La regla ABNF  fecha = 4DIGIT "-" 2DIGIT "-" 2DIGIT  como expresión regular.
fecha = re.compile(r"[0-9]{4}-[0-9]{2}-[0-9]{2}")
assert [bool(fecha.fullmatch(s)) for s in ["2026-11-12", "2026-1-12", "26-11-12"]] == [True, False, False]
```

## 9. Errores típicos

- Leer la documentación de otra versión del programa o de una RFC obsoleta.
- Tratar un valor **típico** de una hoja de datos como garantizado, o diseñar cerca de los máximos absolutos.
- Ignorar las secciones RETURN VALUE y ERRORS de una función.
- Dar a un *should* o un *must* en minúsculas el valor normativo de BCP 14 (o, al revés, tratar un SHOULD como opcional sin pensarlo).
- Citar una fuente secundaria (o una IA) sin comprobar la primaria; dar por revisado un preprint.
- Ordenar versiones como texto (`1.10.0` < `1.9.0`) o comparar fechas en formatos ambiguos (`03/04/2026`).
- Leer un artículo de principio a fin la primera vez en lugar de hacer una primera pasada.

## 10. Resumen

- Referencia se consulta; tutorial y explicación se leen. Comprueba siempre la versión.
- `man`: secciones 1, 2, 3, 5, 7, 8; SYNOPSIS, RETURN VALUE, ERRORS.
- RFC: número fijo, obsoletas y actualizadas, erratas; MUST/SHOULD/MAY solo en mayúsculas; ABNF.
- Hojas de datos: máximos absolutos frente a recomendados; mín/típ/máx con condiciones; $T_J = T_A + P\theta_{JA}$.
- Artículos: IMRaD y tres pasadas.
- Fuentes: primaria, DOI, preprints, erratas, triangulación. SemVer, ISO 8601 y tiempo Unix.

## Repaso: lo que debe quedarte dentro de un mes

1. `man 2 open` y `man 3 printf`: qué hay en cada sección.
2. MUST, SHOULD y MAY en mayúsculas; un *must* en minúsculas no obliga.
3. Máximo absoluto no es condición de funcionamiento; diseña con mínimos y máximos.
4. Tres pasadas para leer un artículo.
5. SemVer: mayor rompe, menor añade, parche corrige; las versiones previas van antes.

## Siguiente

Todas las ramas: a partir de N4 los nodos remiten cada vez más a manuales, estándares y artículos originales.
