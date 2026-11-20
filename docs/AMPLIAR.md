# Ampliar Exodus dentro de meses: nodos, ramas y áreas nuevas

El contenido vive en `vault/` (Markdown con frontmatter) y la plataforma lo lee **en cada petición**. Añadir o
mejorar contenido no exige tocar código ni reconstruir la imagen: basta con escribir los `.md`, comprobarlos y
hacer `git pull` en el servidor. El progreso de todos los usuarios se conserva.

## 1. Añadir un nodo a una rama que ya existe

1. Crea `vault/<carpeta-del-area>/<id>.md` siguiendo `docs/PEDAGOGIA.md` (objetivos, test de entrada, teoría con
   ejemplos resueltos, errores típicos, resumen, repaso, siguiente) y el formato del README:
   ```yaml
   ---
   id: mat-topologia                 # único y para siempre (ver §4)
   title: "Topología: espacios, continuidad, compacidad y conexión"
   area: matematicas                 # un área existente (o una nueva, ver §3)
   trunk_level: 13                   # lo recalcula `npm run vault:relevel`
   prerequisites: [mat-analisis-real]
   academic_sources:
     - "Munkres, J. R. Topology, 2ª ed. Prentice Hall, 2000."
   exercises: __EJERCICIOS__         # se sustituye con scripts/ex-inject.ts
   ---
   ```
2. Ejercicios: escribe `.soluciones/<id>.spec.mjs` (no se versiona) con cada respuesta comprobada por dos métodos y
   ejecuta `npx tsx scripts/ex-inject.ts vault/.../<id>.md .soluciones/<id>.spec.mjs`. En el vault solo queda el
   SHA-256 de cada respuesta.
3. Si el nodo tiene reto con flag: `npm run vault:flag -- "EXODUS{...}"` y pega el `sha256:` en `ctf_flag`.
4. Comprueba: `npm run vault:relevel && npm run vault:check && npm test`, y en local, con las soluciones,
   `npm run vault:soluciones -- <id>` (repite la doble comprobación del spec, comprueba que el vault coincide con él y
   avisa de variantes degeneradas). `npm run vault:check -- --avisos` lista lo mejorable (fuentes sin capítulo o
   sección, pocas variantes) y `npm run vault:cobertura` actualiza `docs/contenido/cobertura.md`.
5. Rama, PR, CI en verde, fusión. En el servidor: `git pull` (sin reconstruir: el vault se monta en solo lectura).

Otros nodos pueden citarlo como `` `mat-topologia` `` en el texto: en cuanto exista, la web lo convierte en enlace.

### Tipos de ejercicio (v2)

Los ejercicios siguen en el frontmatter del nodo (`exercises:`), generados por `scripts/ex-inject.ts` desde
`.soluciones/<id>.spec.mjs`. Se eligió el frontmatter frente a un archivo hermano porque el nodo sigue siendo un
único `.md` autocontenido (Obsidian, `git mv`, búsqueda) y el bloque lo escribe siempre la herramienta. En el vault
solo hay hashes con sal (id del ejercicio y de la variante); la solución nunca queda en claro. El corrector está en
`src/lib/tipos-ejercicio.ts` (registro de tipos) y `src/lib/cas.ts` (lectura de expresiones y LaTeX).

| `type` | Qué compara | Campos | Respuesta en el spec |
| --- | --- | --- | --- |
| *(sin type)* `texto` | Texto exacto normalizado (formato v1) | — | `"3/4"` (varias formas si hace falta) |
| `numero` | Valor redondeado a `sig` cifras (3 por defecto), ±1 en la última; cualquier unidad compatible | `sig`, `unit` | `"27.8"` (en `unit`) |
| `expresion` | Equivalencia matemática: evaluación en 8 puntos fijos de `domain` (por defecto [0.5, 2.5]) | `vars`, `domain`, `form` | `"2x cos(x^2)"` o LaTeX |
| `matriz` | Matriz o vector (fila = columna en vectores), `sig` 6 por defecto | `sig` | `"[[1, 1/2], [0, 1]]"` |
| `opcion` | Opción u opciones elegidas | `options`, `multiple` | `"b"` o `"a, c"` |
| `flag` | Texto exacto sin normalizar | — | `"EXODUS{…}"` |
| `codigo` | El «código del ejercicio» (12 hex) que imprime el script de pruebas al ejecutar el programa del alumno en su ordenador | `language`, `template`, `cases` (o `harness` y `stage`) | `outputs` (salidas esperadas; no se publican) |
| `desarrollo` | No se corrige solo: el alumno entrega (texto o «en papel»), ve la solución y se puntúa con la rúbrica; con el 60 % cuenta como resuelto | `solution`, `rubric` | — (ver abajo) |

- `form` (expresiones): `factorizada`, `expandida` o `sin-raices-en-denominador`. Además de ser equivalente, la
  respuesta debe tener esa forma.
- `domain`: el intervalo donde la solución está definida (raíces, logaritmos). `ex-inject` falla si la solución no
  se puede evaluar en el dominio.
- **Variantes** (plantillas parametrizadas): `variants: [{ values: { a: 3 }, answers: ["6"] }, …]` y `{{a}}` en el
  enunciado. Cada acierto pasa al alumno a la siguiente variante; el repaso usa otra variante. Genera las variantes
  en el spec con un bucle y calcula cada respuesta por dos métodos, como siempre. Evita datos que den casos
  degenerados (división por cero, raíces dobles no buscadas).
- **Banco de repaso**: `review: true` marca una pregunta que solo sale en `/repaso` y no cuenta para el dominio.
  Sirve para preguntar lo mismo de otra manera (concepto, aplicación, «¿por qué falla esto?»). Al repasar un
  ejercicio del nodo, Exodus alterna entre el banco y una variante nueva del ejercicio; si no hay ni banco ni
  variantes, repite el original.
- `ex-inject` comprueba que cada respuesta de referencia se acepta con el propio corrector antes de escribir nada.
- **Código** (Python, C, C++, Rust, Bash o cualquiera): el programa del alumno **nunca se ejecuta en el servidor**.
  Con `cases` (entradas: `{ name, stdin, args? }`) y `outputs` (salidas esperadas en el spec), Exodus genera el
  script `/api/codigo/<nodo>` (`src/lib/codigo.ts`) con las entradas; el alumno lo ejecuta
  (`bash prueba.sh <ejercicio> -- python3 solucion.py`) y pega el código que imprime. En el vault solo queda la huella
  de ese código. Calcula `outputs` en JS y ejecuta además una solución de referencia en otro lenguaje con el script real
  (`.soluciones/_codigo.mjs`: `comprueba`, `pythonDocker`, `cDocker`, `fmtF`, `fmtE`): si los dos códigos no coinciden,
  `ex-inject` falla. Formatea los números con un número fijo de decimales y evita empates de redondeo (`fmtF` lo
  comprueba). Los proyectos con un `prueba.sh` propio usan `harness: prueba.sh` y `stage: N`
  (`node scripts/dev/marcar-hitos.cjs` los marca). Los casos no se exportan a Obsidian; la plantilla sí.
- **Desarrollo** (demostraciones, derivaciones, informes, explicación de algoritmos): en el spec, `type: "desarrollo"`,
  `solution` (Markdown con LaTeX y código) y `rubric: [{ criterio, puntos }]` (puntos enteros). `ex-inject` los
  guarda **sellados** en `sealed` (gzip + base64, `src/lib/sellado.ts`): no es cifrado, solo evita leerlos sin querer en
  Obsidian o GitHub. Ni la solución ni la rúbrica llegan al navegador ni a la exportación antes de entregar; tras
  puntuarse, la exportación incluye la entrega y la solución. La rúbrica debe permitir puntuarse con honestidad:
  criterios observables ("escribe el caso base", "llega a … sin errores de signo"), no "está bien".
- Redondea en el spec los resultados de coma flotante que deban ser exactos: un `0` calculado puede salir como
  `1e-33` y entonces «0» no se aceptaría. En los enunciados con datos, escribe `\{{dato}}` dentro de `String.raw`
  (JavaScript leería `${{` como interpolación) y quita la barra al exportar.
- Una respuesta que no se entiende («tres», una unidad incompatible) no cuenta como intento: el alumno ve el error.

### Simulacros y retos (`kind: examen`)

Un nodo `kind: examen` lleva un bloque `exam` y no tiene teoría propia (el cuerpo explica qué cubre y cómo prepararlo):

```yaml
kind: examen
prerequisites: [mat-calculo-1, mat-trigonometria]     # los temas que cubre
exam: {"duration": 120, "paper": true, "items": [{"ref": "mat-calculo-1/regla-de-la-cadena", "puntos": 1}, {"ref": "./propio", "puntos": 2}]}
```

- `items`: ejercicios de otros nodos (`nodo/ejercicio`) o propios del examen (`./id`, en su `exercises`, para importar un
  examen real); `puntos` por item (1 por defecto). Con variantes, cada intento usa datos nuevos.
- **Simulacro** (`duration` en minutos): no se corrige nada hasta entregar; las respuestas se guardan solas; al acabarse el
  tiempo se entrega solo. `paper: true` permite el **modo papel** (resolver a mano y pasar los resultados, con
  10 minutos de margen). Los desarrollos se puntúan con su rúbrica tras entregar.
- **Reto encadenado** (`chained: true`): sin tiempo; cada paso se desbloquea al acertar el anterior (no admite
  desarrollos). `pass: 1` exige llegar al final.
- `pass` (0-1, 0,5 por defecto): nota para completar el nodo. Un examen **no** resuelve los ejercicios de origen ni
  cuenta para su dominio. El historial guarda cada intento con nota, modo y tiempo.
- `scripts/dev/genera-examenes.ts` genera los simulacros y retos de `vault/09-simulacros/` eligiendo de forma
  determinista los ejercicios de mayor nivel de cada nodo de origen.

### Prueba de nivel

La prueba de nivel (`src/lib/diagnostico.ts`) sondea los nodos de un área en orden de estudio con preguntas de
corrección automática (`texto`, `numero`, `expresion`, `matriz`, `opcion`), primero del banco de repaso. Un nodo sin
esas preguntas (solo desarrollo o código) se salta. Para que el diagnóstico sea fino, cada nodo debería tener al
menos 2-3 preguntas de repaso cortas que comprueben lo esencial.

### Proyectos y laboratorios

Un nodo puede declarar `kind: proyecto` o `kind: laboratorio` en el frontmatter (sin `kind` es teoría). Aparecen en
`/practica`, se pueden filtrar en el temario y se exportan a Obsidian con la etiqueta `exodus/proyecto` o
`exodus/laboratorio`.

- **Proyecto**: un trabajo grande dividido en hitos. Cada hito es un ejercicio cuya respuesta es la salida del
  programa del estudiante para una entrada fija que da el enunciado (un número, un hash de la salida…), así que la
  plataforma comprueba el trabajo sin ver el código. El enunciado describe el contrato de cada hito, los casos
  límite y cómo probarlo localmente.
- **Laboratorio**: un reto práctico con archivos en `vault/_adjuntos/<id>/` (registros, capturas, binarios, datos de
  sensores) que se analizan hasta obtener la flag (`ctf_flag` con su SHA-256) y, si se quiere, ejercicios
  intermedios. Las pistas (`hints`, máximo 3) siguen el orden concepto, herramienta, documentación.

Las respuestas se generan con una implementación de referencia en `.soluciones/` (no versionada) y se comprueban
por dos caminos, como en cualquier otro nodo.

## 2. Añadir una rama entera dentro de un área

Una rama es un conjunto de nodos con prerequisitos entre sí. Escribe los nodos en orden (primero los que no
dependen de otros nuevos), apúntalos en `docs/CURRICULO.md` y sigue §1 para cada uno. El árbol, el temario, la
búsqueda, el repaso y la exportación a Obsidian los incluyen solos.

## 3. Añadir un área nueva (por ejemplo, Química)

Crea o edita `vault/_areas.md`:

```yaml
---
areas:
  - id: quimica
    label: Química
    color: "#9be37f"
---
Áreas añadidas al vault (esta nota no es un nodo).
```

Desde ese momento `area: quimica` es válido en los nodos. Las áreas nuevas aparecen en el árbol, los filtros del
temario y Obsidian detrás de las integradas, en el orden del archivo. La misma nota sirve para cambiar la etiqueta
o el color de un área integrada (`id: fisica`, `label: ...`). `vault:check` avisa de cualquier nodo con un área
sin declarar. Crea también la carpeta `vault/08-quimica/` para mantener el orden.

## 4. Qué pasa con el progreso al cambiar contenido

| Cambio | Efecto en el progreso |
| --- | --- |
| Nodo nuevo | Aparece bloqueado o disponible según sus prerequisitos. |
| Teoría reescrita | Ninguno. La nota de Obsidian del usuario se actualiza en la siguiente sincronización. |
| Ejercicio nuevo | Queda pendiente; un nodo ya completado sigue completado. |
| Ejercicio quitado | Lo resuelto se conserva en la base de datos pero deja de contar y de pedirse en el repaso. |
| Respuesta corregida (mismo `id` de ejercicio) | Lo resuelto se conserva. |
| Cambiar el `type` o añadir `variants` (mismo `id`) | Lo resuelto se conserva; el alumno ve la variante que le toca. |
| Pregunta nueva con `review: true` | No cambia el dominio; empieza a salir en el repaso. |
| Prueba de nivel (`/diagnostico`) | Marca nodos «dominado por diagnóstico» en `diagnostic_marks`: desbloquean sus dependientes pero no son «completado»; el alumno las quita cuando quiere. Repetir la prueba de un área sustituye sus marcas. |
| Nodo borrado | Su historial se conserva (el `node_id` es texto libre) y reaparece si el nodo vuelve con el mismo `id`. |
| **`id` cambiado** | El progreso queda asociado al `id` viejo. **No cambies ids**: cambia `title` o la carpeta, que sí son libres. |

## 5. Actualizar el servidor

```bash
cd ~/Exodus
cp database/exodus.db database/exodus.db.bak
git pull
# Solo contenido (vault/): ya está, se ve al recargar.
# Cambios de código o de base de datos: reconstruir.
EXODUS_PROXY=externo ./deploy.sh      # o ./deploy.sh, o EXODUS_DOMAIN=... ./deploy.sh, según tu instalación
```

Las migraciones de la base de datos se aplican solas al arrancar. Antes de una actualización grande, la copia
`database/exodus.db.bak` permite volver atrás (`git checkout <commit anterior>` y restaurar el archivo).

## Recursos recomendados por rama

Cada rama puede tener una página de recursos (canales, cursos, libros y herramientas) en `vault/_recursos/<área>.md`.
Es una nota normal de Obsidian **sin `id`** (el cargador de nodos la ignora) con este frontmatter:

```yaml
---
recursos: matematicas        # id del área; debe existir
title: Recursos de matemáticas
resumen: Una línea para la tarjeta del índice.
revisado: 2026-11-14          # fecha de la última comprobación de los enlaces
---
```

El cuerpo es Markdown (con `[[wikilinks]]` a nodos). Se muestra en `/recursos` y `/recursos/<área>`, y cada nodo
enlaza a la página de su rama. `npm run vault:check` comprueba el área, los wikilinks y que todos los enlaces sean
`https`. Cada recomendación debe comprobarse antes de publicarla: que el canal o el curso existe (abrir el enlace),
su idioma, su autor y de qué trata, contrastado en más de una fuente; y al revisar, actualizar `revisado`.
