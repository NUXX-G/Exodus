---
id: sec-explotacion-binaria
title: "Reversing y explotación binaria"
area: ciberseguridad
trunk_level: 5
prerequisites: [sys-ensamblador-x86-64, sys-sistemas-operativos]
academic_sources:
  - "Erickson, J. Hacking: The Art of Exploitation, 2ª ed. No Starch Press, 2008."
  - "Aleph One. Smashing the Stack for Fun and Profit. Phrack 49, 1996."
  - "Shacham, H. The Geometry of Innocent Flesh on the Bone: Return-into-libc without Function Calls (on the x86). ACM CCS, 2007."
ctf_flag: null
---

# Reversing y explotación binaria

> [!abstract] Nodo troncal en preparación
> La Fase 1 fija la posición de este nodo en el árbol, sus prerequisitos y su bibliografía.
> La teoría formal y el reto con flag se redactan en la fase de contenido.

## Alcance troncal

- Análisis estático y dinámico de binarios
- Corrupción de memoria en pila y montón
- Mitigaciones (NX, ASLR, canarios) y ROP

## Se apoya en

- [[sys-ensamblador-x86-64]]
- [[sys-sistemas-operativos]]
