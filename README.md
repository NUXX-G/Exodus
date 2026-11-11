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
└── FASE_1.md         # Especificación de arranque y arquitectura base

```

## Puesta en Marcha

### Desarrollo local

```bash
npm install
npm run dev          # http://localhost:3000
```

La base de datos SQLite se crea y migra sola en `database/exodus.db` al primer arranque.

| Comando | Qué hace |
| --- | --- |
| `npm run vault:check` | Valida el vault: frontmatter, ids duplicados, prerequisitos inexistentes, ciclos |
| `npm run vault:flag -- "EXODUS{...}"` | Genera el `ctf_flag: "sha256:..."` para el frontmatter sin dejar la flag en claro |
| `npm run db:generate` | Genera una migración SQL tras cambiar `database/schema.ts` |
| `npm run typecheck` | Comprobación de tipos |

### VPS (Docker)

```bash
./deploy.sh        # Linux / macOS
deploy.bat         # Windows
# equivalente: docker compose -f docker/docker-compose.yml up -d --build
```

La Fase 1 no incluye autenticación: el puerto se publica solo en `127.0.0.1`. Accede por túnel SSH
(`ssh -L 3000:127.0.0.1:3000 usuario@vps`) o detrás de un proxy inverso con autenticación.
El vault se monta en solo lectura; para publicar contenido nuevo basta `git pull` en el host.

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
