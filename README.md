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

### Actualizar una instalación

```bash
cp database/exodus.db database/exodus.db.bak   # copia de seguridad (Windows: copy database\exodus.db database\exodus.db.bak)
git pull
./deploy.sh                                     # Windows: deploy.bat
```

Las migraciones de la base de datos se aplican solas al arrancar; el progreso y las cuentas se conservan.
Si solo cambia el contenido del vault, basta `git pull` (sin reconstruir).

### Dar acceso a otras personas

Cada cuenta tiene su propio progreso. Para que alguien entre desde fuera hace falta que la web sea
alcanzable por HTTPS; nunca publiques el puerto 3210 directamente:

- **VPS con dominio**: `EXODUS_DOMAIN=exodus.midominio.com ./deploy.sh` (Caddy + Let's Encrypt).
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
| `TZ` | `Europe/Madrid` | Zona horaria del heatmap y la racha |

## Formato de un nodo

Cualquier `.md` del vault con `id` en su frontmatter es un nodo del árbol. Las notas sin `id` se ignoran.

```yaml
---
id: sys-c-memoria              # único, kebab-case
title: C y el modelo de memoria
area: bajo-nivel               # troncal | matematicas | fisica | ingenieria | robotica | bajo-nivel | ciberseguridad | ia-cuantica
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
