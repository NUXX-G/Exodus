---
id: sys-kernel-linux
title: "El núcleo Linux por dentro: arranque, llamadas al sistema, procesos y planificación (EEVDF), memoria, VFS, módulos y controladores, interrupciones, sincronización en el núcleo, espacios de nombres y cgroups, eBPF y depuración"
area: bajo-nivel
trunk_level: 12
prerequisites: [sys-sistemas-operativos, sys-concurrencia, sys-ensamblador-x86-64]
academic_sources:
  - "The Linux Kernel documentation (docs.kernel.org): core-api, driver-api, filesystems, scheduler, admin-guide y process (desarrollo y envío de parches). Consultada en noviembre de 2026."
  - "Billimoria, K. N. Linux Kernel Programming, 2ª ed. (núcleo 6.1 LTS). Packt, 2024."
  - "Love, R. Linux Kernel Development, 3ª ed. Addison-Wesley, 2010 (conceptos; las API se contrastan con la documentación actual)."
  - "Kerrisk, M. The Linux Programming Interface. No Starch Press, 2010; y las páginas de manual de man7.org."
  - "Gregg, B. BPF Performance Tools. Addison-Wesley, 2019; Stoica, I.; Abdel-Wahab, H. Earliest Eligible Virtual Deadline First. Informe técnico, Old Dominion University, 1995."
exercises:
  - id: numeros-de-llamada
    tier: 1
    prompt: |
      ¿Qué número tiene la llamada al sistema `write` en Linux x86-64 y cuál en AArch64?

      Respuesta: `x86-64;aarch64`.
    answers: ["sha256:8b1c257aecdc64619260deb08d68a4b3e99687370d03745d25122dae6defb5f2"]
  - id: bufer-de-stdio
    tier: 1
    prompt: |
      Un programa hace `printf("a\n"); printf("b\n");`. Con la salida redirigida a un archivo, ¿cuántas llamadas `write` hace? ¿Y si antes hace `setvbuf(stdout, NULL, _IONBF, 0)`? Compruébalo con `strace -e trace=write` (GCC y glibc) y explica el resultado.

      Respuesta: `normal;sin_bufer`.
    answers: ["sha256:2192dfe7c072e51bc665f3cf7966dd5260acafe140c94ddbd3e647a592956039"]
  - id: mapa-de-memoria
    tier: 1
    prompt: |
      En `/proc/self/maps` de un proceso x86-64, ¿qué permisos tienen las regiones `[stack]` y `[vdso]`?

      Respuesta: `pila;vdso` con el formato de cuatro caracteres de `maps` (por ejemplo `r--p`).
    answers: ["sha256:defbd549576804835aa6fbcf1200def2f0a967483998d2b10cdae5b4fedcdd58"]
  - id: tamanos-de-pagina
    tier: 1
    prompt: |
      En x86-64, ¿cuánto mide una página normal (en bytes) y una página enorme por defecto (en KiB, como en `/proc/meminfo`)?

      Respuesta: `bytes;KiB`.
    answers: ["sha256:3eed8cc7b773a76b8d6f391d84921bd4fd2e3ab6d11c214c57ed740f89bc05a7"]
  - id: numero-mayor-misc
    tier: 1
    prompt: |
      Un controlador que se registra con `misc_register` crea un dispositivo de caracteres en `/dev`. ¿Qué número mayor tiene?

      Respuesta: un número.
    answers: ["sha256:4a44dc15364204a80fe80e9039455cc1608281820fe2b24f1e5233ade6af1dd5"]
  - id: niveles-de-printk
    tier: 1
    prompt: |
      ¿Qué nivel numérico tiene `KERN_WARNING`? En el núcleo de Debian, ¿cuál es el nivel de consola por defecto (`CONFIG_CONSOLE_LOGLEVEL_DEFAULT`) y cuál con la opción `quiet`?

      Respuesta: `warning;defecto;quiet`.
    answers: ["sha256:49906f7d5435d531792075188e1411bc38e3045d05daf7ffc2856f8db2138299"]
  - id: asignacion-en-interrupcion
    tier: 2
    prompt: |
      Un manejador de interrupción necesita reservar 64 bytes con `kmalloc`. ¿Qué indicador GFP debe usar?

      Respuesta: el nombre de la constante.
    answers: ["sha256:9bd816e53d646dae6e2da919a88d2383717c4fdaf19c5bc51b815e574cca1c64"]
  - id: espacios-de-nombres
    tier: 2
    prompt: |
      Tras `unshare -p -f --mount-proc sh -c 'echo $$'`, ¿qué PID imprime el shell? ¿Cuántas entradas tiene `/proc/self/ns` en Linux 6.12?

      Respuesta: `pid;entradas`.
    answers: ["sha256:f970cbe4641ef754462d7c0e02d346365be695d6a38cf37461085a1b9de281ef"]
  - id: cgroup-sin-memoria
    tier: 2
    prompt: |
      Un contenedor con `--memory=50m --memory-swap=50m` ejecuta un programa que reserva y toca 200 MiB. ¿Con qué código de salida termina el contenedor?

      Respuesta: un número.
    answers: ["sha256:d80eae6e96d148b3b2abbbc6760077b66c4ea071f847dab573d507a32c4d99a5"]
  - id: codigo-ioctl
    tier: 2
    prompt: |
      ¿Qué valor tiene `_IOR('k', 3, int)` en Linux x86-64?

      Respuesta: en hexadecimal con prefijo `0x` y minúsculas.
    answers: ["sha256:09a7bc65df1c19271e8c8eaa215a20d0e9c8f4bd38f26296bf4db75475a03594"]
  - id: dormir-o-no
    tier: 2
    prompt: |
      ¿Se puede dormir (llamar a algo que bloquee) en cada uno de estos contextos? (1) con un `spinlock` tomado; (2) con un `mutex` tomado; (3) dentro de `rcu_read_lock()` clásico; (4) en una función de una *workqueue*; (5) en un manejador de interrupción (parte alta).

      Respuesta: `si` o `no` para cada uno, separados por espacios.
    answers: ["sha256:4d440c773adb67a73b03d696c9addb1db3d479da91477fb7486b31116292aaf5"]
  - id: registros-de-syscall
    tier: 2
    prompt: |
      En Linux x86-64, ¿en qué registro va el cuarto argumento de una llamada al sistema hecha con la instrucción `syscall`, y qué dos registros destruye esa instrucción?

      Respuesta: `registro;destruido1 destruido2`, en orden alfabético los destruidos.
    answers: ["sha256:6ba414e7415bc4aeff8cc8807dbf4671f8709e1c4aff7f55d11bc797246db094"]
  - id: reparto-por-nice
    tier: 2
    prompt: |
      Dos procesos que solo calculan comparten una CPU, uno con nice 0 (peso 1024) y otro con nice 5 (peso 335). ¿Qué porcentaje de la CPU recibe el de nice 0?

      Respuesta: un número entero.
    answers: ["sha256:f369cb89fc627e668987007d121ed1eacdc01db9e28f8bb26f358b7d8c4f08ac"]
  - id: modulo-contador
    tier: 3
    prompt: |
      Compila el módulo `contador` del §13 y cárgalo con `insmod contador.ko inicio=5`. Ejecuta `cat /dev/contador` dos veces, luego `echo 100 > /dev/contador` y otra vez `cat`. ¿Qué imprimen las tres lecturas y qué valor final anota el módulo en `dmesg` al descargarlo?

      Respuesta: `l1 l2 l3;final`.
    answers: ["sha256:d0c7788792dc873da9d153e57b0635df619ad786758ba7d0c370f5cffb2fa8b5"]
  - id: oops
    tier: 3
    prompt: |
      Un módulo desreferencia un puntero nulo en su función de inicio. Con `panic_on_oops = 0` (lo habitual), ¿sigue funcionando el sistema tras el *oops*, y con qué código de salida termina `insmod` en el shell?

      Respuesta: `si` o `no`, y el código: `respuesta;codigo`.
    answers: ["sha256:a5e334aca1e75fc8f9e0c41d76e4c25f062983f4bd59f2573e9eae9b2c8b0a18"]
  - id: seccomp-estricto
    tier: 3
    prompt: |
      Un proceso activa `prctl(PR_SET_SECCOMP, SECCOMP_MODE_STRICT)`, escribe una línea con `write` y luego llama a `getpid()`. ¿Con qué señal muere?

      Respuesta: el número de la señal.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
---

Linux funciona en la mayoría de los servidores, en todos los Android, en los superordenadores, en los coches y en buena parte de los robots ([[rob-ros2]] corre sobre él). [[sys-sistemas-operativos]]
explicó qué hace un sistema operativo; este nodo explica **cómo lo hace Linux**, con sus estructuras y sus API reales, hasta el punto de poder escribir un módulo, leer un *oops*, entender por qué un
contenedor es solo un proceso con espacios de nombres y cgroups, y diagnosticar el sistema en producción con `strace`, `perf` y eBPF. Todo lo que sigue se ha comprobado en un núcleo 6.12 real arrancado
en una máquina virtual.

## Objetivos

Al terminar sabrás:

1. Describir la arquitectura del núcleo (monolítico y modular), el árbol de fuentes y cómo se compila y arranca.
2. Seguir una llamada al sistema desde la instrucción `syscall` hasta su implementación, y observarla con `strace`.
3. Explicar `task_struct`, la creación de procesos e hilos, y el planificador EEVDF con sus pesos.
4. Explicar la gestión de memoria: espacio de direcciones, fallos de página, asignadores (*buddy*, SLUB, `vmalloc`), indicadores GFP, caché de páginas y OOM.
5. Explicar el VFS (superbloque, inodo, *dentry*, `file`) y escribir un controlador de caracteres como módulo.
6. Manejar interrupciones (parte alta y parte baja: *softirq*, *workqueue*, IRQ en hilo) y saber en qué contextos se puede dormir.
7. Elegir la primitiva de sincronización del núcleo adecuada (atómicos, `spinlock`, `mutex`, RCU, por CPU).
8. Construir el aislamiento de un contenedor con espacios de nombres, cgroups v2, capacidades y seccomp.
9. Trazar y depurar: `printk` y `dmesg`, *oops*, ftrace, `perf`, eBPF y bpftrace, KASAN y lockdep.

## Qué debes dominar antes

[[sys-sistemas-operativos]] (procesos, memoria virtual, sistemas de archivos), [[sys-concurrencia]] (cerrojos, atómicos, RCU) y [[sys-ensamblador-x86-64]] (registros, convención de llamada).

> [!question] Test de entrada
> 1. ¿Qué diferencia hay entre modo usuario y modo núcleo?
> 2. ¿Qué es un fallo de página y cuándo es "menor"?
> 3. ¿Por qué no se puede tomar un `mutex` con un `spinlock` tomado?
>
> Respuestas: en modo núcleo el procesador puede ejecutar instrucciones privilegiadas y acceder a toda la memoria; en modo usuario no, y para pedir servicios hace una llamada al sistema. Un fallo de página
> ocurre al acceder a una página sin traducción válida; es menor si la página ya está en memoria (en la caché de páginas o compartida) y solo falta la entrada de la tabla. Porque `mutex` puede dormir, y
> dormir con un `spinlock` tomado puede bloquear el sistema (otro hilo giraría para siempre en esa CPU).

## 1. Para qué sirve

- **Rendimiento y diagnóstico**: entender por qué un servicio tiene latencias, dónde se va la memoria o por qué la máquina intercambia exige saber qué hace el núcleo.
- **Contenedores y nube**: Docker y Kubernetes son espacios de nombres, cgroups, capacidades y seccomp; configurarlos bien es seguridad ([[lab-sec-hardening]]).
- **Controladores y embebidos**: dar soporte a un sensor, una cámara o una placa propia es escribir un controlador con el modelo de dispositivos y el *device tree*.
- **Seguridad**: las vulnerabilidades del núcleo son las de mayor impacto, y las defensas (KASLR, SMEP/SMAP, CFI, *lockdown*) solo se entienden conociendo el núcleo.

## 2. Arquitectura, fuentes, compilación y arranque

- **Monolítico y modular**: todo el núcleo comparte un espacio de direcciones y se comunica con llamadas a función (rápido); los **módulos** (`.ko`) añaden código en ejecución (controladores, sistemas de
  archivos) sin reiniciar. No hay ABI interna estable: un módulo se compila para una versión y configuración concretas.
- **Árbol de fuentes**: `kernel/` (planificador, señales), `mm/` (memoria), `fs/` (VFS y sistemas de archivos), `net/`, `drivers/`, `arch/x86/`, `include/`, `rust/` (soporte de Rust desde 6.1).
- **Compilación**: `make menuconfig` (Kconfig) genera `.config`; `make -j$(nproc)` produce `vmlinux` y `bzImage`; `make modules_install`. Un módulo externo se compila con **kbuild**:
  `make -C /lib/modules/$(uname -r)/build M=$PWD modules`.
- **Arranque**: firmware (UEFI) → cargador (GRUB, systemd-boot) → el núcleo se descomprime, inicializa memoria, interrupciones y planificador (`start_kernel`), monta el **initramfs** (un cpio con lo
  necesario para encontrar el disco raíz) y ejecuta `/init`, que acaba pasando el control a `systemd` (PID 1). Con un initramfs de busybox y QEMU se arranca un núcleo en segundos, que es la forma cómoda de
  experimentar sin arriesgar la máquina.
- **Versiones**: una versión principal cada 9–10 semanas; las **LTS** reciben correcciones durante años (6.1, 6.6, 6.12).

## 3. Llamadas al sistema

En x86-64, el proceso pone el número en `rax` y los argumentos en `rdi`, `rsi`, `rdx`, **`r10`**, `r8` y `r9`, y ejecuta `syscall`, que salta a `entry_SYSCALL_64` en modo núcleo. La instrucción usa `rcx`
(guarda el `rip` de vuelta) y `r11` (guarda `rflags`): por eso el cuarto argumento va en `r10` y no en `rcx` como en la ABI de funciones, y por eso `rcx` y `r11` quedan destruidos. El núcleo busca la función
en `sys_call_table` (las implementaciones se declaran con `SYSCALL_DEFINEn`) y devuelve el resultado en `rax` (un error, como `-errno`, que la biblioteca de C convierte en `-1` y `errno`).

- Los **números** dependen de la arquitectura: `write` es la 1 en x86-64 y la 64 en AArch64 (que usa la tabla genérica de `asm-generic/unistd.h`).
- El **vDSO** es una página de código del núcleo mapeada en cada proceso (`[vdso]` en `/proc/self/maps`, con permisos `r-xp`) para llamadas sin cambio de modo, como `clock_gettime`.
- **`strace`** muestra cada llamada con sus argumentos (con `ptrace`); `strace -c` las cuenta y `strace -f` sigue a los hijos. Revela cosas como el búfer de `stdio`: redirigido a un archivo, `stdout` va con
  búfer completo y dos `printf` acaban en un solo `write`.

## 4. Procesos, hilos y planificación

- Cada tarea es una **`task_struct`**: estado, PID y TGID, credenciales, puntero al espacio de direcciones (`mm_struct`), tabla de archivos, espacios de nombres, manejadores de señales, datos del planificador.
  Para Linux, un **hilo es una tarea que comparte** `mm`, archivos y señales con otras: `fork` y `pthread_create` son variantes de **`clone`** con distintos indicadores.
- **Planificador**: clases por prioridad: `stop`, *deadline* (`SCHED_DEADLINE`, EDF con reserva), tiempo real (`SCHED_FIFO`, `SCHED_RR`, prioridades 1–99), normal (`SCHED_OTHER`, `SCHED_BATCH`) e `idle`.
  Desde **Linux 6.6** la clase normal usa **EEVDF** (*Earliest Eligible Virtual Deadline First*, Stoica y Abdel-Wahab, 1995), que sustituyó a CFS (2007–2023): cada tarea acumula **tiempo virtual** en
  proporción inversa a su **peso**, solo son elegibles las que no han recibido más de lo que les toca, y entre ellas se elige la de plazo virtual más próximo, lo que mejora la latencia de las tareas cortas.
- **Pesos y `nice`**: `nice` 0 pesa 1024 y cada nivel cambia el peso en un factor de unos 1,25 (`nice` 5 pesa 335, `nice` −5, 3121). Dos procesos que solo calculan, con `nice` 0 y 5, se reparten la CPU en
  proporción a sus pesos: el primero recibe 1024 / (1024 + 335) ≈ **75 %**.
- **Multiprocesador**: una cola por CPU, balanceo de carga entre dominios (núcleos, *sockets*, nodos NUMA) y afinidad (`taskset`, `sched_setaffinity`). Para baja latencia: `isolcpus`, `nohz_full` y el
  parche **PREEMPT_RT**, integrado en la rama principal en 6.12.

## 5. Memoria

- **Espacio de direcciones**: `mm_struct` con una lista de **VMA** (regiones: código, montón, pilas, `mmap`, bibliotecas), visible en `/proc/PID/maps`; la pila es `rw-p`, el código `r-xp`. Las tablas de
  páginas tienen 4 niveles (5 con LA57). Las páginas miden **4 KiB**, y las enormes, **2 MiB** (o 1 GiB); THP (*transparent huge pages*) las usa sin pedirlo.
- **Fallos de página**: el núcleo busca la VMA, y si el acceso es válido trae o crea la página (de la caché de páginas, de cero para memoria anónima, copiando en COW tras `fork`); si no, envía `SIGSEGV`.
- **Asignadores**: el **buddy allocator** gestiona páginas físicas en bloques de potencias de 2; **SLUB** da objetos pequeños (`kmalloc`, cachés `kmem_cache` para estructuras frecuentes como `task_struct`);
  `vmalloc` da memoria virtualmente contigua pero físicamente dispersa (más lenta, para bloques grandes).
- **Indicadores GFP**: `GFP_KERNEL` puede dormir (reclamar memoria, esperar E/S): es lo normal en contexto de proceso. **`GFP_ATOMIC`** no duerme: es el que se usa en interrupciones o con un `spinlock`
  tomado, y puede fallar con más facilidad. Variantes: `GFP_NOWAIT`, `GFP_NOIO`, `GFP_NOFS`.
- **Caché de páginas**: los archivos se leen y escriben a través de ella; `free` la cuenta como `buff/cache` y se libera cuando hace falta. Las páginas sucias se escriben en segundo plano.
- **Falta de memoria**: si no se puede reclamar, el **OOM killer** elige un proceso (por `oom_score`) y lo mata con `SIGKILL`; dentro de un cgroup con `memory.max`, el OOM se limita al grupo. Un contenedor
  matado así termina con **137** (128 + 9).

## 6. El VFS y los controladores de caracteres

El **VFS** da una interfaz común a todos los sistemas de archivos con cuatro objetos: **superbloque** (un sistema de archivos montado), **inodo** (un archivo: metadatos y operaciones), **dentry** (un
componente de una ruta, en una caché) y **`file`** (un archivo abierto: posición, modo). Cada uno tiene su tabla de operaciones; para un dispositivo, la importante es `file_operations` (`open`, `read`,
`write`, `unlocked_ioctl`, `mmap`, `poll`, `release`).

- Un dispositivo de caracteres se identifica por **número mayor y menor**. La forma más sencilla de crear uno es **`misc_register`**: número mayor **10**, menor dinámico, y `devtmpfs`/udev crean el nodo en
  `/dev` automáticamente.
- Los datos entre usuario y núcleo **solo** se mueven con `copy_to_user`/`copy_from_user` (o `kstrtol_from_user`): comprueban la dirección y gestionan los fallos de página; un puntero de usuario nunca se
  desreferencia directamente (SMAP lo impide en hardware).
- Los códigos de `ioctl` codifican dirección, tamaño, tipo y número: `_IOW('k', 5, long)` vale `0x40086b05` (escritura = 1 en los bits 30–31, tamaño 8 en los bits 16–29, `'k'` = `0x6b` en los bits 8–15, número 5 en los bits 0–7).
- El **modelo de dispositivos** (`struct device`, buses, `driver`, `probe`) y el **device tree** (en ARM y RISC-V) describen el hardware; los controladores de plataforma se enlazan por la propiedad
  `compatible`. `sysfs` (`/sys`) expone ese árbol.

> [!example] Ejemplo resuelto 1: el ciclo de vida de un módulo
> `insmod contador.ko inicio=5` carga el módulo y ejecuta su función `module_init`, que registra el dispositivo; el parámetro aparece en `/sys/module/contador/parameters/inicio` con los permisos de
> `module_param` (0444: solo lectura). Cada `cat /dev/contador` abre el archivo, llama a `read` con `*pos = 0` (devuelve una línea y avanza `*pos`) y otra vez (devuelve 0: fin de archivo, `cat` termina).
> `rmmod` ejecuta `module_exit`, que debe deshacer **todo** lo que hizo `init`, en orden inverso. Un módulo sin licencia GPL no puede usar los símbolos exportados con `EXPORT_SYMBOL_GPL` y "contamina" el
> núcleo (*taint*), igual que uno sin firmar en un núcleo que firma sus módulos: `dmesg` lo indica.

## 7. Interrupciones y trabajo diferido

- Una interrupción ejecuta su **manejador** (parte alta) con esa línea enmascarada y en **contexto atómico**: debe ser muy corto, no puede dormir, y suele limitarse a reconocer el hardware y programar trabajo.
- El trabajo se difiere a la **parte baja**: **softirq** (red, bloques, temporizadores; contexto atómico), **tasklets** (en desuso), **workqueues** (se ejecutan en hilos del núcleo, en contexto de
  proceso: **pueden dormir**) e **IRQ en hilo** (`request_threaded_irq`: el manejador real corre en un hilo con prioridad propia; es lo habitual en controladores nuevos y con PREEMPT_RT).
- **Temporizadores**: `timer_list` (resolución de *jiffies*), `hrtimer` (alta resolución); `msleep` y `usleep_range` para esperar en contexto de proceso, `udelay` (espera activa) en contexto atómico.

## 8. Sincronización dentro del núcleo

| Primitiva | Puede dormir quien la tiene | Uso |
|---|---|---|
| `atomic_t`, `refcount_t`, operaciones de bits | — | contadores, referencias (con protección contra desbordamiento) |
| `spinlock_t` (`spin_lock_irqsave` si se comparte con una interrupción) | **no** | secciones muy cortas, también en interrupciones |
| `mutex` | sí | secciones largas en contexto de proceso |
| `rw_semaphore`, `seqlock` | sí / no | muchos lectores; lecturas sin bloqueo con reintento |
| **RCU** (`rcu_read_lock`, `rcu_dereference`, `synchronize_rcu`, `kfree_rcu`) | no (en el lado lector clásico) | estructuras de lectura masiva: tablas de rutas, listas de módulos |
| variables **por CPU** | — | contadores sin contención |

Con PREEMPT_RT, los `spinlock_t` se convierten en cerrojos que duermen; los `raw_spinlock_t` siguen girando. **lockdep** comprueba en tiempo de ejecución el orden de adquisición y avisa de interbloqueos
posibles antes de que ocurran ([[sys-concurrencia]]).

## 9. Contenedores: espacios de nombres, cgroups, capacidades y seccomp

- **Espacios de nombres** (`clone`, `unshare`, `setns`): `pid`, `mnt`, `net`, `uts`, `ipc`, `user`, `cgroup` y `time`. Dentro de un espacio de PID nuevo, el primer proceso tiene el **PID 1** (y si muere,
  mueren todos). En 6.12, `/proc/self/ns` tiene 10 entradas (las 8 más `pid_for_children` y `time_for_children`).
- **cgroups v2**: una jerarquía única en `/sys/fs/cgroup` con controladores `cpu` (`cpu.max`, `cpu.weight`), `memory` (`memory.max`, `memory.high`), `io` y `pids`. Docker y systemd los usan para limitar
  recursos.
- **Capacidades**: el poder de root dividido en unas 40 (`CAP_NET_ADMIN`, `CAP_SYS_ADMIN`…); un contenedor arranca con un subconjunto.
- **seccomp**: el modo estricto solo permite `read`, `write`, `_exit` y `sigreturn`, y mata con **`SIGKILL`** ante cualquier otra llamada; el modo filtro aplica un programa BPF que decide por llamada (Docker
  tiene un perfil por defecto que bloquea unas 40).
- Un contenedor es, por tanto, un proceso normal con todo esto aplicado: comparte el núcleo con el anfitrión, y por eso una vulnerabilidad del núcleo puede romper el aislamiento.

## 10. Observar y depurar

- **`printk`** con niveles (`KERN_EMERG` 0 … `KERN_WARNING` 4 … `KERN_DEBUG` 7; macros `pr_info`, `pr_err`, `dev_info`); `dmesg` lee el búfer. La consola muestra los mensajes con nivel menor que el
  nivel de consola (7 por defecto en Debian; 4 con la opción `quiet`). `pr_debug` y la depuración dinámica se activan en ejecución.
- **Oops**: un fallo en el núcleo (como desreferenciar un puntero nulo) imprime registros, la pila de llamadas y el código; el núcleo mata a la tarea actual (que termina como con `SIGKILL`) y sigue
  funcionando, aunque queda marcado y puede ser inestable. Con `panic_on_oops=1` se reinicia. `scripts/decode_stacktrace.sh` traduce las direcciones a líneas.
- **ftrace** (`/sys/kernel/tracing`): trazas de funciones, de latencias y de *tracepoints*; `trace-cmd` y KernelShark.
- **perf**: contadores de hardware, muestreo de pilas y gráficos de llamas (`perf record -g`, `perf report`), que se estudian a fondo en `sys-optimizacion-rendimiento`.
- **eBPF**: programas que el **verificador** comprueba (terminan, no acceden fuera de límites) y que se enganchan a *kprobes*, *tracepoints*, *uprobes*, red (XDP) o seguridad (LSM). **bpftrace**
  (`bpftrace -e 'tracepoint:syscalls:sys_enter_openat { @[comm] = count(); }'`) y las herramientas BCC (`execsnoop`, `biolatency`, `opensnoop`) permiten observar producción sin reiniciar.
- **Herramientas de depuración**: KASAN (accesos inválidos a memoria), KCSAN (carreras de datos), UBSAN, lockdep, kmemleak, `CONFIG_DEBUG_*`, y kgdb o QEMU con `-s -S` y gdb para depurar paso a paso.

## 11. Contribuir y Rust en el núcleo

Los cambios se envían como **parches por correo** a la lista y a los responsables que indica `scripts/get_maintainer.pl`, tras pasar `scripts/checkpatch.pl` y con una línea `Signed-off-by` (el *Developer
Certificate of Origin*). La documentación de `Documentation/process/` explica el proceso. Desde 6.1 se pueden escribir controladores en **Rust** con abstracciones seguras sobre las API del núcleo; en la rama principal ya hay
controladores escritos en Rust (por ejemplo, de PHY de red y el comienzo de Nova, para GPU de NVIDIA), y la proporción crece en cada versión.

## 12. Comprobar con un programa

El módulo `contador`: un dispositivo `misc` en `/dev/contador` que devuelve un número que se incrementa en cada lectura y que se puede fijar escribiendo en él, con un parámetro de carga, un `mutex`, copias
seguras entre usuario y núcleo y limpieza al descargar. Se ha compilado con kbuild contra las cabeceras del núcleo 6.12 de Debian y se ha cargado en ese núcleo arrancado en QEMU con un initramfs de
busybox.

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/fs.h>
#include <linux/miscdevice.h>
#include <linux/module.h>
#include <linux/mutex.h>
#include <linux/uaccess.h>

static long inicio;
module_param(inicio, long, 0444);
MODULE_PARM_DESC(inicio, "valor inicial del contador");

static DEFINE_MUTEX(cerrojo);
static long valor;

static ssize_t contador_read(struct file *f, char __user *buf, size_t len, loff_t *pos)
{
	char tmp[32];
	int n;

	if (*pos > 0)
		return 0;	/* una línea por apertura: así cat termina */
	mutex_lock(&cerrojo);
	n = scnprintf(tmp, sizeof(tmp), "%ld\n", valor++);
	mutex_unlock(&cerrojo);
	if (len < (size_t)n)
		return -EINVAL;
	if (copy_to_user(buf, tmp, n))
		return -EFAULT;
	*pos += n;
	return n;
}

static ssize_t contador_write(struct file *f, const char __user *buf, size_t len, loff_t *pos)
{
	long v;
	int err = kstrtol_from_user(buf, len, 10, &v);

	if (err)
		return err;
	mutex_lock(&cerrojo);
	valor = v;
	mutex_unlock(&cerrojo);
	return len;
}

static const struct file_operations contador_fops = {
	.owner = THIS_MODULE,
	.read = contador_read,
	.write = contador_write,
};

static struct miscdevice contador_dev = {
	.minor = MISC_DYNAMIC_MINOR,
	.name = "contador",
	.fops = &contador_fops,
	.mode = 0666,
};

static int __init contador_init(void)
{
	int err;

	valor = inicio;
	err = misc_register(&contador_dev);
	if (err)
		return err;
	pr_info("contador: cargado, valor inicial %ld\n", valor);
	return 0;
}

static void __exit contador_exit(void)
{
	misc_deregister(&contador_dev);
	pr_info("contador: descargado, valor final %ld\n", valor);
}

module_init(contador_init);
module_exit(contador_exit);
MODULE_LICENSE("GPL");
MODULE_DESCRIPTION("Dispositivo de caracteres de ejemplo: un contador");
```

Con un `Makefile` de una línea (`obj-m := contador.o`), así se compila y se prueba (en una máquina virtual, nunca en la tuya mientras aprendes):

```bash
# sin-ejecutar
make -C /lib/modules/"$(uname -r)"/build M="$PWD" modules
sudo insmod contador.ko inicio=5
cat /dev/contador; cat /dev/contador        # 5, 6
echo 100 > /dev/contador; cat /dev/contador # 100
cat /sys/module/contador/parameters/inicio  # 5
sudo rmmod contador; sudo dmesg | tail -2   # contador: descargado, valor final 101
```

## 13. Errores típicos

- Dormir en contexto atómico: `GFP_KERNEL`, `mutex_lock`, `copy_from_user` o `msleep` con un `spinlock` tomado o en un manejador de interrupción (el aviso es "BUG: sleeping function called from invalid
  context").
- Desreferenciar punteros de usuario o no comprobar el valor de `copy_*_user`.
- `module_exit` que no deshace todo, o en orden distinto; usar el dispositivo antes de terminar de inicializarlo (registrarlo debe ser lo último de `init`).
- Olvidar que `read` debe gestionar `*pos` y devolver 0 al final (si no, `cat` no termina).
- Probar módulos en la máquina de trabajo en lugar de en una máquina virtual.
- Confundir las API: el código de un libro de hace diez años a menudo ya no compila (tasklets, `ioctl` en lugar de `unlocked_ioctl`, `proc_create` con `file_operations` en lugar de `proc_ops`).
- Pensar que un contenedor aísla como una máquina virtual.

## 14. Resumen

- Núcleo monolítico y modular; kbuild; arranque con initramfs; LTS.
- `syscall`: número en `rax`, argumentos `rdi rsi rdx r10 r8 r9`, destruye `rcx` y `r11`; `sys_call_table`; vDSO; `strace`.
- `task_struct`, `clone`, hilos como tareas que comparten; clases de planificación; EEVDF desde 6.6; pesos de `nice` (factor ~1,25); PREEMPT_RT.
- VMA y `/proc/PID/maps`, páginas de 4 KiB y 2 MiB, fallos de página, *buddy*, SLUB, `vmalloc`, `GFP_KERNEL` frente a `GFP_ATOMIC`, caché de páginas, OOM y 137.
- VFS (superbloque, inodo, dentry, `file`), `file_operations`, `misc_register` (mayor 10), `copy_*_user`, `_IOR`, modelo de dispositivos y *device tree*.
- Parte alta corta y atómica; softirq, workqueues (pueden dormir), IRQ en hilo.
- `spinlock` (no dormir), `mutex`, RCU, por CPU, lockdep.
- Espacios de nombres (PID 1), cgroups v2, capacidades, seccomp (estricto: `SIGKILL`).
- `printk` y niveles, *oops*, ftrace, perf, eBPF y bpftrace, KASAN.

## Repaso: lo que debe quedarte dentro de un mes

1. El cuarto argumento de una llamada al sistema va en `r10`; `syscall` destruye `rcx` y `r11`.
2. En contexto atómico no se duerme: `GFP_ATOMIC`, `spinlock`, nada de `mutex` ni `copy_from_user`.
3. Un hilo es una tarea que comparte memoria; el planificador reparte por pesos (`nice` 0 frente a 5: 75 % y 25 %).
4. Un contenedor es un proceso con espacios de nombres, cgroups, capacidades y seccomp sobre el mismo núcleo.
5. Para ver qué pasa en producción: `strace`, `perf` y bpftrace, antes que adivinar.

## Siguiente

`lab-sys-depuracion` (diagnosticar un fallo con un volcado y sus registros), `sys-optimizacion-rendimiento` (perf y gráficos de llama a fondo) y `sys-sistemas-distribuidos`.
