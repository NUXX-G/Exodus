---
id: lab-sec-hardening
title: "Laboratorio: auditoría de bastionado de un servidor Linux (sshd con bloques Match, sudoers, permisos y SUID)"
area: ciberseguridad
trunk_level: 11
kind: laboratorio
prerequisites: [sys-sistemas-operativos, prog-bash-scripting]
academic_sources:
  - "CIS Benchmarks: Debian Linux 12 y Ubuntu Linux 24.04 LTS (secciones de SSH, sudo y permisos). Center for Internet Security, consultados en noviembre de 2026."
  - "OpenBSD/OpenSSH. sshd_config(5) y sshd(8) (opciones Match y -T). man.openbsd.org; y sudoers(5) del proyecto sudo."
  - "GTFOBins: entradas de tar y vim (sudo). gtfobins.github.io, consultado en noviembre de 2026."
attachments: [sshd_config, sudoers, permisos.txt, crontab-root.txt]
ctf_flag: "sha256:c021b6d1f976d56746148d2a4e764e4dd85ac18e5db185d939295ed14be0df10"
hints:
  - "La configuración que importa es la efectiva, no la primera línea que lees: en sshd los bloques Match sustituyen valores para ciertos usuarios o direcciones; en sudo, una regla que permite un programa que puede ejecutar otros (un editor, tar, find, less) equivale a permitir una shell."
  - "Calcula la configuración efectiva con sshd -T -f sshd_config -C user=deploy,host=x,addr=203.0.113.9 (en un contenedor con openssh-server); busca en GTFOBins las entradas de tar y vim en la sección sudo; y para los permisos, fíjate en la tercera terna (otros) y en la s del bit SUID."
  - "sshd_config(5) (sección Match), sudoers(5) (comodines en argumentos) y los apartados de SSH, sudo y permisos de archivos del CIS Benchmark para Debian 12."
exercises:
  - id: root-desde-internet
    tier: 1
    prompt: |
      Según `sshd_config`, ¿qué valor efectivo tiene `PermitRootLogin` para `root` conectando desde `203.0.113.9`?

      Respuesta: el valor.
    answers: ["sha256:8a798890fe93817163b10b5f7bd2ca4d25d84c52739a645a889c173eee7d9d3d"]
  - id: root-desde-la-red-interna
    tier: 2
    prompt: |
      ¿Y para `root` conectando desde `10.1.2.3`? (Ten en cuenta los bloques `Match`.)

      Respuesta: el valor.
    answers: ["sha256:6f47c02c2ccf7c85d3c417460987750dfade21edabf8363ae91e2ecf43bf535b", "sha256:3b55212600eb5829c0949119caca70ad257cc0195761a7a107332dc5a0f928c3"]
  - id: contrasena-de-deploy
    tier: 1
    prompt: |
      ¿Puede `deploy` iniciar sesión por SSH con contraseña?

      Respuesta: `yes` o `no`.
    answers: ["sha256:9390298f3fb0c5b160498935d79cb139aef28e1c47358b4bbba61862b9c26e59"]
  - id: intentos-maximos
    tier: 2
    prompt: |
      ¿Cuántos intentos de autenticación por conexión (`MaxAuthTries`) tienen `deploy` y `ana`?

      Respuesta: `deploy;ana`.
    answers: ["sha256:2a113867750a5e9f6529423a6b987dbdd1da273e15e24346ba3dff9d9ade9a47"]
  - id: sudo-sin-contrasena
    tier: 3
    prompt: |
      En `sudoers`, ¿qué cuentas pueden conseguir una shell de root **sin** escribir su contraseña, aunque la regla no mencione ninguna shell? (Piensa en lo que permiten `tar` con comodines y un editor ejecutado como root.)

      Respuesta: las cuentas en orden alfabético, separadas por comas.
    answers: ["sha256:65582a82b165a9e8fe92d6fe5440c0ce6151dd14e22b673a5a185ad1c188f71a"]
  - id: escribibles-por-todos
    tier: 2
    prompt: |
      En `permisos.txt`, ¿qué dos archivos (no directorios) puede modificar cualquier usuario y acaban ejecutándose como root? (Mira también `crontab-root.txt`.)

      Respuesta: las dos rutas en orden alfabético, separadas por `;`.
    answers: ["sha256:cb787cb27627cf4cb7a8224dac24e91ce15d507b76e20753955b2b2b85fea4e7"]
  - id: suid-no-estandar
    tier: 2
    prompt: |
      ¿Qué binario con el bit SUID de root no forma parte del sistema base y habría que justificar o retirar?

      Respuesta: la ruta.
    answers: ["sha256:25bf8b8e5addde9080e1abcad637f317dcfaeb1d51af7af91e2810af45df2916"]
  - id: secretos-legibles
    tier: 1
    prompt: |
      ¿Qué archivo, que suele contener contraseñas de bases de datos y claves de API, puede leer cualquier usuario del sistema?

      Respuesta: la ruta.
    answers: ["sha256:adfc525f62db14b6bd910c7641875cf50332a0b7aa61b3b2d9a6c2ab6fe75cdf"]
---

> [!info] Escenario
> Antes de pasar `web02` a producción, te piden una auditoría de bastionado. El administrador asegura que "el SSH está cerrado para root, `deploy` solo entra con clave y nadie tiene más privilegios de
> los necesarios". Te pasa la configuración de SSH, el `sudoers`, los permisos de algunos archivos y la tabla de cron de root. Tu trabajo es comprobarlo, no creerlo.

Un laboratorio de **auditoría defensiva**: se revisan configuraciones, no se ataca ninguna máquina. Aplica lo que viste de usuarios, permisos y procesos en [[sys-sistemas-operativos]] y la
lectura cuidadosa de archivos de configuración de [[prog-bash-scripting]]. Es el trabajo diario de quien endurece sistemas, de quien hace auditorías de cumplimiento (CIS, ENS, ISO 27001) y de quien prepara
un pentest.

## 1. Cómo trabajar

1. Lee cada archivo entero antes de responder. En `sshd_config` importa el **orden**: la primera vez que aparece una opción fija su valor, y los bloques `Match` (hasta el siguiente `Match` o el final)
   lo cambian para quien encaje.
2. Si tienes Docker, comprueba tus conclusiones con la herramienta real: `sshd -T` calcula la configuración efectiva para un usuario y una dirección concretos.
3. Para cada hallazgo anota: evidencia, riesgo, y la corrección que propondrías.
4. **La flag**: `EXODUS{N_binario}`, donde `N` es el `MaxAuthTries` efectivo de `deploy` y `binario` el nombre (sin ruta) del SUID no estándar. Ejemplo de formato: `EXODUS{6_ejemplo}`.

## 2. Qué revisar

- **SSH**: acceso de root (`PermitRootLogin no` o, como mínimo, `prohibit-password`), autenticación por contraseña desactivada (`PasswordAuthentication no`), intentos limitados (`MaxAuthTries` bajo), redirecciones
  (`X11Forwarding`, `AllowTcpForwarding`) desactivadas si no se usan, tiempos de gracia cortos, y quién puede entrar (`AllowUsers`/`AllowGroups`).
- **sudo**: el principio de **mínimo privilegio** dice "solo la orden exacta que hace falta". Son peligrosos los comodines en los argumentos (`/usr/bin/tar *`), los programas que pueden ejecutar otros
  (editores, `less`, `find`, `tar`, `awk`, `python`…: el catálogo GTFOBins los recoge), `NOPASSWD` sin necesidad, y `ALL` en cualquier forma.
- **Permisos**: archivos escribibles por todos (`o+w`) que ejecuta root (guiones de cron, servicios, `/etc/cron.d/*`); secretos legibles por todos (`.env`, claves privadas); binarios **SUID** de root fuera
  de los conocidos del sistema (cada uno es una posible escalada); y el bit *sticky* en directorios compartidos como `/tmp` (correcto).

## 3. El informe

Prioriza los hallazgos por riesgo (crítico: escalada a root para cualquier usuario local; alto: acceso remoto de root o por contraseña; medio: exposición de secretos) y propón para cada uno el cambio
concreto: la línea corregida de `sshd_config` o de `sudoers` (editado siempre con `visudo`), el `chmod`/`chown` exacto, o la retirada del binario. Comprueba la sintaxis antes de aplicarla (`sshd -t`,
`visudo -c`), porque un `sshd_config` roto puede dejarte sin acceso.

## 4. Para ir más allá

Automatiza esta auditoría con un guion en bash que reciba un directorio raíz y genere el informe (`find -perm`, `sshd -T` por usuario, análisis de `sudoers`), y compáralo con herramientas existentes
como Lynis u OpenSCAP con el perfil CIS. Continúa con `sec-seguridad-so`, que trata el modelo de seguridad del sistema operativo en profundidad (capacidades, MAC con SELinux y AppArmor, espacios de
nombres).
