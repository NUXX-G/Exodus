---
recursos: bajo-nivel
title: Recursos de programación de sistemas y bajo nivel
resumen: "C, C++, Rust, ensamblador, sistemas operativos, compiladores y scripting: canales, cursos, libros gratuitos y herramientas."
revisado: 2026-11-14
---

En esta rama casi todo el material de nivel profesional está en inglés. La regla es la de siempre: un vídeo para la idea, y luego código propio compilado con avisos como errores y probado con sanitizadores.

## Canales en español

- **[MoureDev by Brais Moure](https://www.youtube.com/@mouredev)**: cursos completos y gratuitos de programación (Python, Git, fundamentos), muy claros para empezar. Para [[prog-python-fundamentos]] y
  [[prog-terminal-linux-git]].
- **[pildorasinformaticas](https://www.youtube.com/@pildorasinformaticas)** (Juan Díaz): cursos largos y ordenados de Java, Python, C# y otros lenguajes, lección a lección.
- **[Unicoos](https://www.youtube.com/@unicoos)**: lógica digital y tecnología de Bachillerato, útil como puente hacia [[ing-logica-digital]].

## Canales y cursos en inglés

- **[CS50](https://cs50.harvard.edu/x/)** (Harvard, David Malan): la mejor introducción a la informática que existe, con C, memoria, estructuras de datos, Python y SQL, y problemas exigentes. Gratis.
- **[The Missing Semester of Your CS Education](https://missing.csail.mit.edu)** (MIT): la terminal, el shell, Vim, Git, depuración y metaprogramación: lo que nadie enseña y todos usan.
- **[Ben Eater](https://www.youtube.com/@BenEater)**: construye un ordenador de 8 bits en placas de prototipos y un 6502 desde cero. La mejor forma de entender qué hace de verdad una CPU.
- **[Low Level](https://www.youtube.com/@LowLevelTV)** y **[Jacob Sorber](https://www.youtube.com/@JacobSorber)**: C, memoria, llamadas al sistema y seguridad de bajo nivel, en vídeos cortos y concretos.
- **[Jon Gjengset](https://www.youtube.com/@jonhoo)**: la serie *Crust of Rust* y sesiones largas implementando cosas reales en Rust (concurrencia, `async`, estructuras de datos). Nivel intermedio y avanzado,
  ideal para [[prog-rust-concurrencia-async]].
- **[CppCon](https://www.youtube.com/@CppCon)**: las charlas de la conferencia de C++, incluida la serie *Back to Basics*, que recorre el lenguaje moderno con rigor.
- **[Computerphile](https://www.youtube.com/@Computerphile)** (Universidad de Nottingham): conceptos de informática explicados por investigadores.
- **[MIT 6.172 Performance Engineering of Software Systems](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/)**: rendimiento, cachés, vectorización y paralelismo, con
  vídeos y proyectos.

## Libros gratuitos

- **Arpaci-Dusseau, R. y A. [Operating Systems: Three Easy Pieces](https://pages.cs.wisc.edu/~remzi/OSTEP/)**: virtualización, concurrencia y persistencia. Para [[sys-sistemas-operativos]].
- **[The Rust Programming Language](https://doc.rust-lang.org/book/)** (Klabnik, Nichols y otros): el libro oficial de Rust. Para [[prog-rust-fundamentos]].
- **Nystrom, R. [Crafting Interpreters](https://craftinginterpreters.com)**: un intérprete de árbol en Java y una máquina virtual de bytecode en C, explicados línea a línea. Para [[sys-compiladores]].
- **[Beej's Guide to Network Programming](https://beej.us/guide/bgnet/)**: sockets en C, claro y práctico. Para [[sys-redes-sockets]].
- **[learncpp.com](https://www.learncpp.com)**: un curso completo y actualizado de C++ moderno.
- **[BashGuide](https://mywiki.wooledge.org/BashGuide)** (Greg's Wiki) y la **[documentación de PowerShell](https://learn.microsoft.com/es-es/powershell/)** (en español): para [[prog-bash-scripting]] y
  [[prog-powershell-batch]].
- **[The Linux Kernel documentation](https://docs.kernel.org)**: la referencia de las API internas del núcleo. Para [[sys-kernel-linux]].

## Proyectos guiados

- **[Nand2Tetris](https://www.nand2tetris.org)** (Nisan y Schocken): de la puerta NAND a un ordenador completo con ensamblador, máquina virtual, compilador y sistema operativo, construyendo cada pieza.
- **[Compiler Explorer](https://godbolt.org)**: ver al instante el ensamblador que generan GCC, Clang o `rustc` para cualquier fragmento, en x86-64 o AArch64.
