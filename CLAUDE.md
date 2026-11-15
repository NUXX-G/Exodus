# CLAUDE.md - Exodus LMS & CTF System

## Tech Stack
- Frontend/Backend: Next.js 16 (App Router) + TypeScript
- Base de datos: SQLite + Drizzle (migraciones en `database/migrations`)
- Contenido: Markdown local cargado dinámicamente desde `./vault` (Sincronizado con Obsidian)

## Áreas de Conocimiento Generales
- Matemáticas (Todas las ramas puras y aplicadas al máximo nivel)
- Física (Todas las ramas teóricas y experimentales)
- Ingeniería General, Electrónica y Hardware
- Robótica y Microcontroladores
- Programación de Sistemas y Bajo Nivel (C, C++, Rust, Assembly, Linux Kernel)
- Redes, Criptografía y Ciberseguridad (Reversing, Exploit Dev, Web Sec, Forense)
- Inteligencia Artificial y Computación Cuántica

## Core Guidelines
- El sistema NO encasilla los temarios: investiga y genera el 20% troncal fundamental de cada gran área que abre el 80% restante.
- Cero florituras, cero contenido superficial: investigar bibliografía académica real y fuentes oficiales.
- Principio de Aprendizaje Activo: Teoría formal -> Reto práctico / Validación de FLAG / Código.
- Prohibida la IA durante el estudio: Implementar sistema de pistas graduales (3 niveles).
- Carga de archivos Markdown bajo demanda mediante referencias (`@vault/...`).

## Arranque de sesión
- Estado vivo y protocolo de arranque: `STATUS.md` (corto; léelo entero). Historia de la v1: `docs/HISTORIAL_V1.md` (solo con `grep`).
- Rama de trabajo de la v2: `v2`. Guardar trabajo: `bash scripts/dev/guardar.sh "v2: ..."` (checks + commit + push). Nunca fusionar `v2` en `main`.

## Roadmap activo
Si hay un roadmap activo, lee STATUS.md y SOLO la sección de la fase actual en docs/ROADMAP_V2.md. Continúa desde ahí siguiendo las reglas de ejecución del roadmap.
