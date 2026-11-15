/**
 * Textos que acompañan a la descarga de Obsidian: la nota «Primeros pasos» de la bóveda nueva y el LEEME del ZIP
 * que solo trae el plugin. Los nombres de comandos y ajustes del plugin Git son los de su versión incluida (2.42.0),
 * en inglés porque así aparecen en Obsidian.
 */
import { PLUGIN_ID } from "./obsidian-plugin";

export const NOTA_PRIMEROS_PASOS = "Primeros pasos.md";

export interface OpcionesPrimerosPasos {
  /** Dirección pública de la instancia, sin barra final. */
  origin: string;
  /** El plugin Exodus Sync viene conectado con un token. */
  conSync: boolean;
  /** La bóveda trae el plugin Git preparado. */
  conGit: boolean;
}

export function primerosPasos({ origin, conSync, conGit }: OpcionesPrimerosPasos): string {
  const l: string[] = [];
  // Un bloque por llamada; si empieza por un título, línea en blanco entre el título y el texto.
  const p = (...lineas: string[]) =>
    lineas[0]?.startsWith("#") ? l.push(lineas[0], "", ...lineas.slice(1), "") : l.push(...lineas, "");

  p(
    "# Primeros pasos",
    `Esta bóveda es **tuya**: vive en tu ordenador (o en tu móvil) y nadie más la ve. Exodus solo escribe en ella tu progreso; nunca sube nada a ningún sitio. Estudias en la web (${origin}) y aquí tienes tus apuntes, con tu progreso al día y tus notas al lado.`,
  );

  p(
    "## 1. Qué hay en esta carpeta",
    "- **Primeros pasos** (esta nota). Puedes borrarla o moverla cuando quieras.",
    "- **Exodus/**: lo que escribe el plugin Exodus Sync: tu panel, el temario con tu estado, una nota por cada nodo que has abierto (teoría, ejercicios resueltos, repasos pendientes, pistas que has revelado), tu libreta y un registro por días.",
    `- **.obsidian/** (carpeta oculta): los ajustes de Obsidian y los plugins ya instalados: **Exodus Sync**${conGit ? " y **Git**" : ""}.`,
  );

  p(
    "## 2. Comprobar que todo funciona",
    "1. Si Obsidian te preguntó si confías en el autor de la bóveda, pulsa **Confiar en el autor y activar plugins**. Si elegiste el modo restringido: *Ajustes → Plugins de la comunidad → Activar plugins de la comunidad*, y activa los plugins de la lista de instalados.",
    "2. En la barra lateral izquierda tiene que estar el icono de dos flechas en círculo (**Sincronizar Exodus**). Púlsalo: aparece un aviso «Exodus: …».",
    conSync
      ? "3. A partir de ahí se sincroniza solo: al abrir Obsidian y cada 30 minutos. También con el comando *Exodus Sync: Sincronizar ahora* (Ctrl+P o Cmd+P abre la lista de comandos)."
      : "3. Esta bóveda se descargó **sin** sincronización: es una foto de tu progreso de hoy. Para conectarla, en la web ve a *Cuenta → Obsidian → Crear un token para conectar a mano* y pega la dirección y el token en *Ajustes → Exodus Sync*.",
  );

  p(
    "## 3. Cómo se trabaja",
    "- Estudias y haces los ejercicios **en la web**. Aquí llega el resultado.",
    "- Cada nota de *Exodus/* tiene una zona que escribe el plugin (entre las marcas `exodus:inicio` y `exodus:fin`) y debajo una sección **Mis notas**. Escribe tus apuntes ahí: el plugin nunca la toca.",
    "- Puedes crear todas las notas y carpetas que quieras, dentro o fuera de *Exodus/*. El plugin no borra archivos.",
  );

  if (conGit) {
    p(
      "## 4. Guardar tu bóveda en tu GitHub (opcional)",
      "Así tienes copia de seguridad, historial de cambios y la misma bóveda en varios dispositivos. Se guarda en un repositorio **privado y tuyo**, con tu cuenta de GitHub: ni Exodus ni nadie más tiene acceso.",
      "",
      "El plugin **Git** ya está instalado y configurado para guardar y subir tus cambios cada 10 minutos y traer los de otros dispositivos al abrir Obsidian. Hasta que lo conectes a tu repositorio verás un aviso de que no encuentra ningún repositorio: es normal. Si no vas a usar GitHub, desactívalo en *Ajustes → Plugins de la comunidad*.",
    );
    p(
      "### 4.1 En GitHub (una vez)",
      "1. Crea una cuenta en https://github.com si no la tienes.",
      "2. Arriba a la derecha, **+ → New repository**. Nombre, por ejemplo, `mis-apuntes`. Marca **Private**. No añadas README, .gitignore ni licencia: tiene que quedar vacío. Pulsa **Create repository**.",
      "3. Solo si usas Mac, Linux o el móvil, crea un token (hace de contraseña): tu foto → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**. En *Repository access* elige *Only select repositories* y tu repositorio; en *Permissions → Repository permissions*, **Contents: Read and write**. Genera el token y cópialo: GitHub solo lo enseña una vez.",
    );
    p(
      "### 4.2 En el ordenador",
      "1. Instala Git desde https://git-scm.com/downloads (en Windows vale todo por defecto) y **cierra y vuelve a abrir Obsidian**.",
      "2. *Ajustes → Git → Identity*: escribe tu nombre en *Repository author name* y tu correo en *Repository author email*. Es lo que firma cada guardado.",
      "3. Ctrl+P (Cmd+P en Mac) y ejecuta **Git: Initialize a new repo**.",
      "4. Ctrl+P → **Git: Commit all changes**. Es tu primer guardado.",
      "5. Ctrl+P → **Git: Push**. Te pide un nombre para el remoto: escribe `origin`. Después, la dirección:",
      "   - **Windows**: `https://github.com/TU-USUARIO/mis-apuntes.git`. Se abre una ventana para iniciar sesión en GitHub: acéptala y ya está.",
      "   - **Mac o Linux**: `https://TU-USUARIO:TU-TOKEN@github.com/TU-USUARIO/mis-apuntes.git`, con el token del paso 4.1.3. Se guarda solo en este ordenador (dentro de la carpeta oculta `.git`) y nunca se sube.",
      "6. Abre tu repositorio en GitHub y recarga: tienen que aparecer tus notas. Desde ahora se sube solo cada 10 minutos; para hacerlo al momento, **Git: Commit-and-sync**.",
    );
    p(
      "### 4.3 En el móvil",
      "> [!warning] Experimental en el móvil",
      "> El autor del plugin Git avisa de que en Android e iPhone funciona de forma experimental y puede ir lento o cerrarse con bóvedas grandes. Si te da problemas, usa una de las opciones del apartado 5 en el móvil y deja que el ordenador suba a GitHub.",
      "",
      "Primero sube la bóveda desde el ordenador (4.2). Luego, en el móvil:",
      "1. Instala Obsidian y crea una bóveda **vacía** (en iPhone, **sin** guardarla en iCloud).",
      "2. *Ajustes → Plugins de la comunidad*: actívalos, busca **Git**, instálalo y actívalo.",
      "3. *Ajustes → Git → Identity*: tu usuario de GitHub en *Username on your Git server* y el token en *Git server password or access token*.",
      "4. Abre la lista de comandos y ejecuta **Git: Clone an existing remote repo**. Dirección: `https://github.com/TU-USUARIO/mis-apuntes.git`. Sigue las preguntas (carpeta: la raíz de la bóveda) y reinicia Obsidian cuando lo pida.",
      "5. Llega todo, plugins incluidos, menos el token de Exodus (no se sube nunca, ver apartado 6). En la web, *Cuenta → Obsidian → Crear un token para conectar a mano*, y pega la dirección y el token en *Ajustes → Exodus Sync*.",
    );
  }

  p(
    `## ${conGit ? 5 : 4}. Otras formas de tener la bóveda en varios dispositivos`,
    "- **Obsidian Sync** (servicio oficial de pago): *Ajustes → Sync*. Activa también la sincronización de plugins de la comunidad.",
    "- **iCloud Drive** (iPhone y Mac): guarda esta carpeta dentro de *iCloud Drive/Obsidian*.",
    "- **Syncthing** (gratis, Android, Windows, Mac y Linux): sincroniza la carpeta directamente entre tus dispositivos.",
    conGit
      ? "- Puedes combinarlas con GitHub: por ejemplo, Syncthing o iCloud para el móvil y GitHub solo desde el ordenador como copia de seguridad."
      : "",
  );

  p(
    `## ${conGit ? 6 : 5}. Seguridad`,
    `- \`.obsidian/plugins/${PLUGIN_ID}/data.json\` guarda tu token de Exodus. El archivo \`.gitignore\` de esta bóveda lo deja fuera de Git, así que no se sube a GitHub. No lo quites de ahí.`,
    "- Deja tu repositorio en **privado**: tus notas incluyen tu progreso.",
    "- Si pierdes un dispositivo o crees que alguien tiene tu token, desconéctalo en la web, en *Cuenta → Obsidian*. En GitHub, los tokens se borran en *Settings → Developer settings*.",
  );

  p(
    `## ${conGit ? 7 : 6}. Si algo no funciona`,
    "- **No veo el icono de Exodus**: comprueba que abriste como bóveda la carpeta que contiene esta nota, que los plugins de la comunidad están activados y que *Exodus Sync* está activo en la lista de instalados.",
    "- **«El token no es válido»**: se desconectó en la web o se copió mal. Crea otro en *Cuenta → Obsidian*.",
    ...(conGit
      ? [
          "- **Git: «Cannot run git command»** en el ordenador: falta instalar Git (4.2.1) o reiniciar Obsidian después de instalarlo.",
          "- **Git: «Can't find a valid git repository»**: aún no has hecho el apartado 4.2. Si no vas a usar GitHub, desactiva el plugin Git.",
          "- **Git pide usuario y contraseña o da error de autenticación**: en Windows, vuelve a hacer *Git: Push* e inicia sesión en la ventana; en Mac o Linux, revisa el token y su permiso *Contents: Read and write* (para cambiar la dirección: **Git: Edit remotes**).",
        ]
      : []),
    `- Guía completa en la web: ${origin}/guia#obsidian`,
  );

  return l.join("\n").replace(/\n{3,}/g, "\n\n");
}

/** LEEME del ZIP que solo trae el plugin Exodus Sync, para una bóveda que ya existe. */
export function leemePlugin(origin: string, conSync: boolean): string {
  return [
    "Exodus Sync: plugin para una bóveda de Obsidian que ya tienes",
    "",
    "1. Abre la carpeta de tu bóveda y entra en .obsidian/plugins (créala si no existe; .obsidian está oculta).",
    `2. Copia ahí la carpeta ${PLUGIN_ID} de este ZIP.`,
    "3. En Obsidian: Ajustes → Plugins de la comunidad → activa los plugins si hace falta y luego «Exodus Sync».",
    "",
    conSync
      ? `El plugin ya está conectado a ${origin} con un token personal guardado en ${PLUGIN_ID}/data.json. Si tu bóveda está en Git, añade «.obsidian/plugins/${PLUGIN_ID}/data.json» a su .gitignore para no subir el token.`
      : `El plugin viene sin conectar: en ${origin}/cuenta crea un token para conectar a mano y pégalo en Ajustes → Exodus Sync.`,
    "",
    `Guía completa: ${origin}/guia#obsidian`,
    "",
  ].join("\n");
}
