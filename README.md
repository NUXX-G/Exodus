# Exodus

Plataforma privada, autohospedada y de conocimiento absoluto diseñada para el dominio riguroso de sistemas, bajo nivel, ciberseguridad, matemáticas, física, ingeniería y computación cuántica.

## Arquitectura y Filosofia

* **Cero Suposiciones:** El temario parte del cero absoluto, estructurándose mediante un 20% troncal fundamental que desbloquea el análisis avanzado de cada disciplina.
* **Conocimiento Extremo:** Enfoque basado en primeros principios, rigor bibliográfico académico y validación mediante retos prácticos, desarrollo de código y resolución de pruebas tipo CTF.
* **Arquitectura Markdown-First:** El contenido reside en archivos locales estructurados para permitir una sincronización bidireccional directa con tu Obsidian Vault a traves de Git.
* **Aprendizaje Autónomo:** Sin asistencias directas de IA durante el estudio. Sistema de pistas graduales por niveles para forzar la investigación y la depuración manual.

## Stack Tecnologico

* **Frontend/Backend:** Next.js / FastAPI
* **Base de Datos:** SQLite (Prisma / Drizzle)
* **Despliegue:** Contenerizado mediante Docker y Docker Compose para VPS Linux.
* **Gestión de Versiones:** Git

## Estructura del Repositorio

```text
.
├── vault/            # Archivos Markdown de temarios y retos (Sincronizado con Obsidian)
├── src/              # Código fuente de la plataforma web (Frontend y Backend)
│   ├── app/          #   Rutas Next.js: árbol (/), nodo (/nodo/[id]), /api/health
│   ├── components/   #   Árbol de habilidades, heatmap, formulario de flag
│   └── lib/          #   Parser del vault, render Markdown, progreso, conexión SQLite
├── database/         # Esquemas y migraciones de base de datos
├── scripts/          # Utilidades de línea de comandos para el vault
├── docker/           # Configuración de contenedores y despliegue
├── CLAUDE.md         # Contexto permanente y directrices para agentes de IA
├── STATUS.md         # Estado del proyecto y cola de pendientes entre sesiones
├── deploy.sh / .bat  # Despliegue en una línea
└── FASE_1.md         # Especificación de arranque y arquitectura base

```

## Puesta en Marcha

### Desarrollo local

```bash
npm install
npm run dev          # http://localhost:3000
```

La base de datos SQLite se crea y migra sola en `database/exodus.db` al primer arranque.

En la primera visita, `/configurar` pide crear la única cuenta de la instancia. Exige un **código
de configuración** que el servidor escribe en su registro (la terminal de `npm run dev`): así solo
quien controla la máquina puede crear la cuenta.

Para dar acceso a otras personas (cada una con su progreso), la cuenta principal genera en `/cuenta` una
**invitación** de un solo uso que caduca (1, 3 o 7 días) y la comparte como código o enlace; el invitado
crea su cuenta en `/registro`. No hay registro abierto y las cuentas invitadas no pueden invitar.

### Libreta

`/libreta` es un cuaderno de apuntes por usuario (Markdown, LaTeX y `[[enlaces]]` a nodos). Cada nota puede
asociarse a un nodo; desde la página de un nodo se apunta algo sin salir de ella. Las notas se exportan a la
carpeta `Exodus/Libreta` de la bóveda de Obsidian de su dueño (nunca a la de otro usuario) y quedan enlazadas
desde la nota del nodo.

### Tu progreso en Obsidian

En `/cuenta → Obsidian` cada usuario descarga **su** progreso como bóveda de Obsidian (o solo el plugin para
una bóveda que ya tenga): el temario con su estado, una nota por cada nodo abierto (teoría, ejercicios resueltos
y pendientes, próximos repasos, pistas reveladas), un panel y un registro por días. Con «Sincronizar
automáticamente», el plugin *Exodus Sync* lo actualiza al abrir Obsidian y cada 30 minutos usando un token
personal (`GET /api/obsidian/sync`, solo lectura, revocable en `/cuenta`). Solo reescribe lo que hay entre
`<!-- exodus:inicio -->` y `<!-- exodus:fin -->`: lo que el usuario escribe debajo («Mis notas») no se toca, y
nunca borra archivos. No se exportan respuestas, flags ni pistas sin revelar.

| Comando | Qué hace |
| --- | --- |
| `npm run vault:check` | Valida el vault: frontmatter, grafo de prerequisitos y render de cada nodo (LaTeX, wikilinks) |
| `npm test` | Tests del parser, el render, las contraseñas, el limitador de intentos, las sesiones, el progreso y las invitaciones |
| `npm run vault:flag -- "EXODUS{...}"` | Genera el `ctf_flag: "sha256:..."` para el frontmatter sin dejar la flag en claro |
| `npm run db:generate` | Genera una migración SQL tras cambiar `database/schema.ts` |
| `npm run typecheck` | Comprobación de tipos |

### Docker (local o VPS)

```bash
./deploy.sh        # Linux / macOS
deploy.bat         # Windows
# equivalente: docker compose -f docker/docker-compose.yml up -d --build
```

El script construye la imagen, espera a que la app responda en `http://127.0.0.1:3210` y, en el
primer arranque, muestra el código de configuración para crear la cuenta en `/configurar`.

Hay dos formas de acceder a un VPS:

- **Túnel SSH** (por defecto, sin dominio): el puerto solo se publica en `127.0.0.1`.
  `ssh -L 3210:127.0.0.1:3210 usuario@vps` y abre `http://127.0.0.1:3210`.
- **Dominio con HTTPS automático**: `EXODUS_DOMAIN=exodus.midominio.com ./deploy.sh` arranca
  además Caddy, que obtiene el certificado de Let's Encrypt. Requiere que el dominio apunte al VPS
  y los puertos 80 y 443 abiertos.

### Detrás de tu propio Apache o nginx

Exodus escucha solo en `127.0.0.1:3210`; tu servidor web pone el HTTPS (por ejemplo con certbot) y le pasa
las peticiones. Las dos cabeceras importan: `X-Forwarded-Proto` marca la cookie de sesión como solo-HTTPS y
`X-Forwarded-For` (que Apache y nginx añaden) permite al limitador de intentos distinguir a cada visitante.

Apache (`sudo a2enmod proxy proxy_http headers`), dentro del `<VirtualHost *:443>` del subdominio:

```apache
ProxyPreserveHost On
RequestHeader set X-Forwarded-Proto "https"
ProxyPass / http://127.0.0.1:3210/
ProxyPassReverse / http://127.0.0.1:3210/
```

nginx, dentro del `server { listen 443 ssl; ... }`:

```nginx
location / {
    proxy_pass http://127.0.0.1:3210;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto https;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

Y despliega siempre con `EXODUS_PROXY=externo ./deploy.sh`.

### Actualizar una instalación

```bash
cp database/exodus.db database/exodus.db.bak   # copia de seguridad (Windows: copy database\exodus.db database\exodus.db.bak)
git pull
./deploy.sh                                     # Windows: deploy.bat; con Apache/nginx: EXODUS_PROXY=externo ./deploy.sh
```

Las migraciones de la base de datos se aplican solas al arrancar; el progreso y las cuentas se conservan.
Si solo cambia el contenido del vault, basta `git pull` (sin reconstruir).

### Dar acceso a otras personas

Cada cuenta tiene su propio progreso. Para que alguien entre desde fuera hace falta que la web sea
alcanzable por HTTPS; nunca publiques el puerto 3210 directamente:

- **VPS con dominio**: `EXODUS_DOMAIN=exodus.midominio.com ./deploy.sh` (Caddy + Let's Encrypt).
- **VPS que ya tiene Apache o nginx** (otras webs en los puertos 80/443): no uses Caddy. Despliega con
  `EXODUS_PROXY=externo ./deploy.sh` y publica Exodus desde tu servidor web (ver «Detrás de tu propio Apache o nginx»).
- **Tu PC, sin dominio, solo para quien tú elijas**: [Tailscale](https://tailscale.com/). Instálalo, ejecuta
  `tailscale serve --bg 3210` (la web queda en `https://<tu-equipo>.<tu-tailnet>.ts.net`, solo dentro de tu
  red de Tailscale) y comparte el equipo con tu amigo desde el panel de Tailscale (*Share*). Él instala
  Tailscale con su cuenta y abre esa dirección.

Después, entra en `/cuenta` **por esa misma dirección** y genera la invitación: el enlace usa la dirección
por la que la estás viendo.

El vault se monta en solo lectura; para publicar contenido nuevo basta `git pull` en el host.
La base de datos vive en `database/exodus.db`: copiar ese archivo es la copia de seguridad.

| Variable | Por defecto | Uso |
| --- | --- | --- |
| `EXODUS_PORT` | `3210` | Puerto local publicado |
| `EXODUS_DOMAIN` | (vacío) | Activa el perfil `https` con Caddy |
| `EXODUS_PROXY` | (vacío) | `externo`: hay un Apache/nginx propio delante; no arranca Caddy y confía en su `X-Forwarded-For` |
| `TZ` | `Europe/Madrid` | Zona horaria del heatmap y la racha |

Para añadir nodos, ramas o áreas nuevas más adelante sin perder el progreso de nadie, sigue
[`docs/AMPLIAR.md`](docs/AMPLIAR.md).

## Formato de un nodo

Cualquier `.md` del vault con `id` en su frontmatter es un nodo del árbol. Las notas sin `id` se ignoran.

```yaml
---
id: sys-c-memoria              # único, kebab-case
title: C y el modelo de memoria
area: bajo-nivel               # troncal | matematicas | fisica | ingenieria | robotica | bajo-nivel | ciberseguridad | ia-cuantica | (nuevas en vault/_areas.md)
trunk_level: 1                 # fila en el árbol (0 = raíz)
prerequisites: [nodo-ejemplo]  # ids de otros nodos
academic_sources:
  - "Kernighan & Ritchie. The C Programming Language, 2ª ed."
ctf_flag: "sha256:<hex>"       # o la flag en claro; null = nodo sin reto todavía
hints: ["pista 1", "pista 2", "pista 3"]   # opcional, máximo 3, se revelan en orden
---
```

El cuerpo admite GFM, LaTeX (`$...$`, `$$...$$`), bloques de código en cualquier lenguaje,
`[[wikilinks]]` y callouts de Obsidian (`> [!warning] Título`).
