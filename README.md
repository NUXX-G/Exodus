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
├── database/         # Esquemas y migraciones de base de datos
├── docker/           # Configuración de contenedores y despliegue
├── CLAUDE.md         # Contexto permanente y directrices para agentes de IA
└── FASE_1.md         # Especificación de arranque y arquitectura base

```

## Puesta en Marcha

1. Clonar el repositorio en tu entorno local o VPS.
2. Configurar las variables de entorno necesarias para el despliegue.
3. Levantar los servicios mediante Docker Compose:
```bash
docker compose -f docker/docker-compose.yml up -d

```
