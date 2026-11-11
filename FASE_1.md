================================================================================
FASE 1: ARQUITECTURA BASE Y MOTOR DE APRENDIZAJE ABSOLUTO + OBSIDIAN
================================================================================

ROL Y OBJETIVO:
Actúa como Arquitecto Full-Stack y Diseñador de Sistemas. Vamos a construir la infraestructura privada, moderna y autohospedada para Exodus (LMS/CTF de conocimiento absoluto y autónomo).

EN ESTA PRIMERA FASE NO GENERES TEMARIOS EXTENSOS. Tu objetivo es construir la infraestructura base, el layout de carpetas, el motor de lectura Markdown/Obsidian, la base de datos y la interfaz del árbol de habilidades.

REQUERIMIENTOS DE ARQUITECTURA:

1. MOTOR DE CONTENIDO E INVESTIGACIÓN (Obsidian Vault Connection):
   - Estructura el directorio `./vault` para albergar archivos Markdown dinámicos.
   - Diseña el parser de Markdown con metadatos Frontmatter YAML (id, title, area, trunk_level, prerequisites, academic_sources, ctf_flag).
   - El sistema debe investigar el 20% TRONCAL fundamental de cada gran área (Matemáticas, Física, Ingeniería/Electrónica/Hardware, Robótica, Bajo Nivel, Ciberseguridad, IA/Cuántica) para establecer los nodos base del árbol.

2. ESQUEMA DE BASE DE DATOS Y METROLOGÍA:
   - Usa SQLite (Prisma/Drizzle) para usuarios, progreso de nodos, registro de FLAGS de CTF validadas y racha de actividad (heatmap).

3. MOTOR DE RENDIMIENTO Y RENDIDO:
   - Soporte nativo para resaltado de código en cualquier lenguaje y MathJax/LaTeX para matemáticas/física de alto nivel.
   - Interfaz visual estilo Grafo/Árbol de Habilidades con libertad total de navegación y nodos bloqueados/desbloqueados según prerequisitos.

4. INFRAESTRUCTURA:
   - Prepara un `docker-compose.yml` optimizado en `./docker` para desplegar en VPS.

ENTREGABLES:
1. Estructura de carpetas completa en disco.
2. Esquema de base de datos.
3. Un archivo de prueba en `./vault/00-troncal/nodo-ejemplo.md` con teoría de primeros principios, fórmula en LaTeX, bloque de código y una FLAG de validación.
4. Dashboard web funcional leyendo dicho archivo.

Procede paso a paso iniciando por la estructura de carpetas y el esquema de datos.
