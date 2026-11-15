# Exodus Sync (plugin de Obsidian)

Sincroniza tu progreso de una instancia de **Exodus** con tu bóveda de Obsidian: el temario con tu estado, cada nodo
que has abierto con su teoría y tus ejercicios resueltos, los repasos pendientes y un registro por días. Escribe en
una carpeta de la bóveda (por defecto `Exodus/`) y, en cada nota, solo reescribe lo que hay entre las marcas
`exodus:inicio` y `exodus:fin`: lo que escribas debajo, en «Mis notas», no se toca nunca. No borra archivos.

Funciona en escritorio y en móvil (`isDesktopOnly: false`).

## Instalación

**Desde la propia instancia (lo más fácil).** En Exodus, *Cuenta → Obsidian*: «Una bóveda nueva» trae el plugin ya
instalado y conectado; «Solo el plugin» trae la carpeta `exodus-sync` para copiarla en `.obsidian/plugins/` de una
bóveda existente. La guía paso a paso está en `/guia#obsidian` de tu instancia.

**Con BRAT, desde GitHub** (cuando este plugin está publicado en un repositorio público):

1. En Obsidian, *Ajustes → Plugins de la comunidad → Explorar*, instala **BRAT** y actívalo.
2. En los ajustes de BRAT, *Add Beta plugin*, pega la dirección del repositorio (por ejemplo
   `https://github.com/USUARIO/exodus-obsidian-sync`) y confirma.
3. Activa **Exodus Sync** en *Plugins instalados*.

**A mano**: copia `manifest.json` y `main.js` de la última versión en `.obsidian/plugins/exodus-sync/` de tu bóveda,
recarga la lista de plugins y activa Exodus Sync.

## Configuración

En *Ajustes → Exodus Sync*:

- **Dirección de Exodus**: por ejemplo `https://exodus.midominio.com`.
- **Token**: en Exodus, *Cuenta → Obsidian → Crear un token para conectar a mano*. Se muestra una sola vez; si lo
  desconectas en Exodus, deja de funcionar.
- **Carpeta**: dónde se escriben las notas (por defecto `Exodus`).
- **Sincronizar automáticamente**: al abrir Obsidian y cada 15, 30 o 60 minutos, o solo a mano (botón de la barra
  lateral o comando «Exodus Sync: Sincronizar ahora»).

## Privacidad

El plugin solo habla con la dirección que configures y solo envía el token. El token da acceso de lectura a tu
progreso: no lo compartas.

## Publicar este plugin en GitHub (para quien administra Exodus)

Esta carpeta vive dentro del repositorio de Exodus y se genera a partir del código de la web
(`src/lib/obsidian-plugin.ts`) con `npm run obsidian:plugin`, así que el plugin publicado siempre coincide con el que
sirve la instancia. Para que se pueda instalar con BRAT, tiene que estar en la **raíz** de un repositorio **público**
con una *release* que adjunte `main.js` y `manifest.json`, con la misma etiqueta que la versión del manifiesto.

Desde la raíz del repositorio de Exodus (con [GitHub CLI](https://cli.github.com/) y la sesión iniciada):

```bash
npm run obsidian:plugin                                            # por si acaso: deja la carpeta al día
git subtree split --prefix obsidian-plugin -b plugin-publicacion   # rama con solo esta carpeta, en la raíz
gh repo create exodus-obsidian-sync --public                       # una vez
git push https://github.com/USUARIO/exodus-obsidian-sync.git plugin-publicacion:main
git push https://github.com/USUARIO/exodus-obsidian-sync.git plugin-publicacion:refs/tags/1.0.0
```

Al llegar la etiqueta, el flujo `.github/workflows/release.yml` de ese repositorio crea la *release* con los dos
archivos. Para una versión nueva: sube `PLUGIN_VERSION` en `src/lib/obsidian-plugin.ts`, ejecuta
`npm run obsidian:plugin` (actualiza también `versions.json`), haz commit y repite los `git subtree split` y `git push`
con la etiqueta nueva. BRAT actualiza solo a quien lo tenga instalado.
