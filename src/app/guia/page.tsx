import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Guía" };

/** Guía de uso: estudiar, moverse por la web, conectar Obsidian (ordenador y móvil) y administrar la instancia. */
export default function Guia() {
  return (
    <main className="pagina guia">
      <article className="prosa">
        <h1>Guía de Exodus</h1>
        <p>
          Todo lo que necesitas para estudiar aquí, llevarte tu progreso a Obsidian (en el ordenador y en el móvil) y, si
          administras la instancia, actualizarla.
        </p>
        <nav aria-label="Apartados de la guía" className="guia-indice">
          <ol>
            <li>
              <a href="#estudiar">Cómo se estudia en Exodus</a>
            </li>
            <li>
              <a href="#moverse">Moverse por la web</a>
            </li>
            <li>
              <a href="#obsidian">Obsidian en el ordenador</a>
            </li>
            <li>
              <a href="#obsidian-existente">Obsidian con una bóveda que ya tienes</a>
            </li>
            <li>
              <a href="#movil">Obsidian en el móvil</a>
            </li>
            <li>
              <a href="#problemas">Si algo no funciona</a>
            </li>
            <li>
              <a href="#administrar">Para quien administra la instancia</a>
            </li>
          </ol>
        </nav>

        <h2 id="estudiar">1. Cómo se estudia en Exodus</h2>
        <ul>
          <li>
            <strong>Temario</strong>: todos los nodos ordenados por nivel. Cada fila dice su estado: <em>Empezar →</em> si
            ya tienes sus prerequisitos, <em>Completado</em> si lo dominas y <em>Bloqueado</em> si te faltan
            prerequisitos (puedes leerlo igualmente). Pulsa la fila entera para entrar. Filtra por área, estado o tipo.
          </li>
          <li>
            <strong>Un nodo</strong>: primero la teoría, después los ejercicios. Un nodo se completa al resolver los
            ejercicios necesarios para el dominio (lo indica la barra) o, si tiene reto, al validar su flag. Las pistas van
            de menos a más concretas: pide una solo cuando te atasques de verdad.
          </li>
          <li>
            <strong>Proyectos</strong>: escribes un programa; cada hito se comprueba con el archivo <code>prueba.sh</code>{" "}
            del nodo, que imprime un código que pegas como respuesta. <strong>Laboratorios</strong>: descargas archivos,
            los analizas y entregas la flag <code>EXODUS{"{…}"}</code>.
          </li>
          <li>
            <strong>Repaso</strong> te devuelve los ejercicios ya resueltos cuando toca recordarlos; <strong>Práctica</strong>{" "}
            reúne proyectos y laboratorios; <strong>Libreta</strong> guarda tus notas; <strong>Recursos</strong> tiene libros,
            cursos y vídeos por rama.
          </li>
        </ul>

        <h2 id="moverse">2. Moverse por la web</h2>
        <ul>
          <li>La barra de arriba se queda fija al bajar. En el móvil, sus secciones están en el botón <strong>☰ Menú</strong>.</li>
          <li>
            En cada nodo tienes <strong>← Volver al temario</strong> arriba y, al final, el nodo anterior y el siguiente de
            la misma área.
          </li>
          <li>
            Al pulsar un enlace verás una barra arriba y el aviso <strong>Cargando…</strong>: la página nueva está en
            camino. No hace falta volver a pulsar.
          </li>
        </ul>

        <h2 id="obsidian">3. Obsidian en el ordenador (bóveda nueva)</h2>
        <p>
          Exodus puede escribir tu progreso en Obsidian: el temario con tu estado, cada nodo que has abierto con su teoría y
          tus ejercicios resueltos, los repasos pendientes y un registro por días. Lo que escribas en la sección{" "}
          <em>Mis notas</em> de cada nota nunca se sobrescribe.
        </p>
        <ol>
          <li>
            Instala Obsidian desde <a href="https://obsidian.md">obsidian.md</a>.
          </li>
          <li>
            En <Link href="/cuenta">Cuenta → Obsidian</Link>, elige «Una bóveda nueva…», deja marcada la sincronización y
            pulsa <strong>Descargar</strong>.
          </li>
          <li>
            Descomprime el ZIP (Windows: clic derecho → <em>Extraer todo</em>). Sale una carpeta con la nota{" "}
            <em>Empieza aquí</em>, la carpeta <em>Exodus</em> y una carpeta oculta <code>.obsidian</code> que contiene el
            plugin.
          </li>
          <li>
            En Obsidian: <em>Abrir carpeta como bóveda</em> y elige <strong>esa</strong> carpeta, la que contiene{" "}
            <em>Empieza aquí</em>. Si eliges otra de más arriba, Obsidian no encuentra el plugin.
          </li>
          <li>
            Obsidian pregunta si confías en el autor de la bóveda: pulsa <strong>Confiar en el autor y activar plugins</strong>.
          </li>
          <li>
            Comprueba que en la barra lateral izquierda aparece el icono de flechas circulares (<em>Sincronizar Exodus</em>).
            Púlsalo: aparece «Exodus: N notas nuevas…». A partir de ahí se sincroniza solo al abrir Obsidian y cada 30
            minutos.
          </li>
        </ol>

        <h2 id="obsidian-existente">4. Obsidian con una bóveda que ya tienes</h2>
        <ol>
          <li>
            En <Link href="/cuenta">Cuenta → Obsidian</Link>, elige «Solo el plugin» y descarga. El ZIP trae la carpeta{" "}
            <code>exodus-sync</code>.
          </li>
          <li>
            Abre la carpeta de tu bóveda y entra en <code>.obsidian/plugins</code> (créala si no existe). La carpeta{" "}
            <code>.obsidian</code> está oculta: en Windows, Explorador → <em>Ver → Mostrar → Elementos ocultos</em>; en
            macOS, <kbd>Cmd</kbd>+<kbd>Mayús</kbd>+<kbd>.</kbd> en el Finder.
          </li>
          <li>
            Copia dentro la carpeta <code>exodus-sync</code>, de modo que quede{" "}
            <code>.obsidian/plugins/exodus-sync/main.js</code>.
          </li>
          <li>
            En Obsidian: <em>Ajustes → Plugins de la comunidad</em>. Si está en modo restringido, pulsa{" "}
            <em>Activar plugins de la comunidad</em>. Después pulsa el botón de recargar de <em>Plugins instalados</em> y
            activa <strong>Exodus Sync</strong>.
          </li>
        </ol>

        <h2 id="movil">5. Obsidian en el móvil</h2>
        <p>
          El plugin funciona en Android y en iPhone. Lo difícil en el móvil es meterlo en la bóveda, porque las carpetas que
          empiezan por punto están ocultas. Tres formas, de más fácil a menos:
        </p>
        <h3>a) Sincronizando la bóveda desde el ordenador (recomendado)</h3>
        <p>
          Crea la bóveda en el ordenador (apartado 3) dentro de una carpeta que se sincronice con el móvil: iCloud Drive
          (carpeta <em>Obsidian</em>) en iPhone, o Syncthing, Obsidian Sync o una carpeta de Drive/OneDrive sincronizada en
          Android. La carpeta <code>.obsidian</code> viaja con la bóveda, así que el plugin llega instalado. En el móvil,
          abre esa bóveda y confía en el autor. Si usas Obsidian Sync, activa en sus ajustes la sincronización de plugins de
          la comunidad.
        </p>
        <h3>b) Android: copiando la carpeta del plugin</h3>
        <ol>
          <li>
            Descarga «Solo el plugin» desde <Link href="/cuenta">Cuenta</Link> y descomprímelo con el gestor de archivos.
          </li>
          <li>
            En el gestor de archivos, activa «mostrar archivos ocultos», entra en la carpeta de tu bóveda (suele estar en{" "}
            <em>Documentos</em> o <em>Obsidian</em>) y copia <code>exodus-sync</code> dentro de{" "}
            <code>.obsidian/plugins/</code>.
          </li>
          <li>En Obsidian: Ajustes → Plugins de la comunidad → activar plugins → activa Exodus Sync.</li>
        </ol>
        <h3>c) Con BRAT, si el plugin está publicado en GitHub</h3>
        <p>
          Si quien administra la instancia ha publicado el plugin en un repositorio público de GitHub (ver apartado 7):
          instala desde <em>Plugins de la comunidad</em> el plugin <strong>BRAT</strong>, abre sus ajustes, pulsa{" "}
          <em>Add Beta plugin</em> y pega la dirección del repositorio. BRAT lo instala y lo mantiene actualizado.
        </p>
        <h3>Conectar el plugin a tu cuenta</h3>
        <p>
          En las formas b) y c), el plugin llega sin conectar. En <Link href="/cuenta">Cuenta → Obsidian</Link> pulsa{" "}
          <strong>Crear un token para conectar a mano</strong>: te muestra la dirección de Exodus y un token. En Obsidian,
          abre <em>Ajustes → Exodus Sync</em>, pega las dos cosas y pulsa <em>Sincronizar</em>. El token solo se muestra
          una vez; si lo pierdes, desconéctalo en la lista de conexiones y crea otro.
        </p>

        <h2 id="problemas">6. Si algo no funciona</h2>
        <ul>
          <li>
            <strong>No aparece el plugin</strong>: comprueba que existe <code>.obsidian/plugins/exodus-sync/main.js</code>{" "}
            dentro de la carpeta que abriste como bóveda, que los plugins de la comunidad están activados (no en modo
            restringido) y pulsa recargar en la lista de plugins instalados.
          </li>
          <li>
            <strong>«el token no es válido»</strong>: se desconectó en Cuenta, o se copió mal. Crea otro.
          </li>
          <li>
            <strong>«no se pudo sincronizar»</strong>: revisa la dirección de Exodus en los ajustes del plugin (con{" "}
            <code>https://</code>) y que la web abra desde ese dispositivo.
          </li>
          <li>
            <strong>Para ver el error exacto</strong> en el ordenador: <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>I</kbd> en
            Obsidian abre la consola.
          </li>
          <li>
            <strong>Una página tarda</strong>: tras actualizar la instancia, el servidor prepara todos los nodos en segundo
            plano durante uno o dos minutos; después, abrirlos es inmediato.
          </li>
        </ul>

        <h2 id="administrar">7. Para quien administra la instancia</h2>
        <h3>Actualizar</h3>
        <pre>
          <code>{`cd /ruta/a/Exodus
cp database/exodus.db database/exodus.db.bak   # copia de seguridad
git pull
EXODUS_PROXY=externo ./deploy.sh               # con Apache o nginx delante; sin ellos: ./deploy.sh`}</code>
        </pre>
        <p>
          Las migraciones de la base de datos se aplican solas y se conservan las cuentas y el progreso. El HTML de los
          nodos se guarda en una caché junto a la base de datos (<code>cache-html</code>): se puede borrar sin perder nada.
        </p>
        <h3>Invitar</h3>
        <p>
          En <Link href="/cuenta">Cuenta → Invitaciones</Link> genera una invitación y pásale el enlace a la otra persona.
          Cada cuenta tiene su propio progreso y su propia conexión con Obsidian.
        </p>
        <h3>Publicar el plugin en GitHub</h3>
        <p>
          La carpeta <code>obsidian-plugin/</code> del repositorio es un plugin de Obsidian completo (manifest.json,
          main.js, versions.json y README), generado a partir del código de la web con{" "}
          <code>npm run obsidian:plugin</code>. Su README explica cómo subirlo a un repositorio público propio y crear la
          versión para que se pueda instalar con BRAT.
        </p>
      </article>
    </main>
  );
}
