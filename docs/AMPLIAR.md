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
4. Comprueba: `npm run vault:relevel && npm run vault:check && npm test`.
5. Rama, PR, CI en verde, fusión. En el servidor: `git pull` (sin reconstruir: el vault se monta en solo lectura).

Otros nodos pueden citarlo como `` `mat-topologia` `` en el texto: en cuanto exista, la web lo convierte en enlace.

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
