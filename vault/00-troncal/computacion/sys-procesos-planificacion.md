---
id: sys-procesos-planificacion
title: "Sistemas operativos I: núcleo, procesos, descriptores, señales y planificación"
area: bajo-nivel
trunk_level: 9
prerequisites: [sys-c-memoria, prog-terminal-linux-git]
academic_sources:
  - "Arpaci-Dusseau, R. H.; Arpaci-Dusseau, A. C. Operating Systems: Three Easy Pieces, v1.10 (octubre de 2023). Gratuito en ostep.org."
  - "Kerrisk, M. The Linux Programming Interface. No Starch Press, 2010 (capítulos 24 a 28: creación, terminación y ejecución de procesos)."
  - "Tanenbaum, A. S.; Bos, H. Modern Operating Systems, 5ª ed. Pearson, 2022."
  - "Linux kernel documentation: EEVDF Scheduler (docs.kernel.org/scheduler/sched-eevdf.html); páginas de manual fork(2), execve(2), wait(2), pipe(2), dup(2), signal(7), syscall(2)."
  - "Stoica, I.; Abdel-Wahab, H. Earliest Eligible Virtual Deadline First: A Flexible and Accurate Mechanism for Proportional Share Resource Allocation. Old Dominion University, informe técnico, 1995."
hints:
  - "Concepto: fork() duplica el proceso entero, incluido el búfer de stdio que aún no se ha escrito; exec sustituye la imagen (lo no volcado se pierde); cada proceso tiene su propia copia de la memoria. Para la planificación, dibuja un diagrama de Gantt con el instante de inicio y fin de cada tramo y calcula retorno = fin − llegada, espera = retorno − duración, respuesta = primer inicio − llegada."
  - "Herramienta: compila y ejecuta con la salida redirigida (./prog > s.txt; cat s.txt) y compárala con la de la terminal; strace -f ./prog muestra cada fork (clone), execve, wait4 y write; ps -o pid,ppid,stat,cmd y pstree muestran el árbol de procesos. Para la planificación, simula con un bucle de tiempo en Python."
  - "Documentación: OSTEP, capítulos 4 a 9 (procesos, API de procesos, ejecución directa limitada, planificación, MLFQ, reparto proporcional); páginas de manual fork(2), execve(2), wait(2), pipe(2), dup(2), signal(7) y setvbuf(3); docs.kernel.org/scheduler/sched-eevdf.html."
exercises:
  - id: tres-forks
    tier: 1
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`?

      ```c
      #include <stdio.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int main(void) {
          fork();
          fork();
          fork();
          printf("x\n");
          while (wait(NULL) > 0)
              ;
          return 0;
      }
      ```

      Respuesta: el número de líneas.
    answers: ["sha256:2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3"]
  - id: numeros-de-llamada-al-sistema
    tier: 1
    prompt: |
      ¿Qué imprime este programa en x86-64 Linux?

      ```c
      #include <stdio.h>
      #include <sys/syscall.h>

      int main(void) {
          printf("%d %d %d\n", SYS_read, SYS_write, SYS_getpid);
          return 0;
      }
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:28d7cd17a4c2306d00d0d2ea7277c56175ae0959a1cccd528bd9ecaed9e392de"]
  - id: codigos-de-salida
    tier: 1
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`?

      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int main(void) {
          for (int i = 0; i < 3; i++)
              if (fork() == 0)
                  exit(i * i + 3);
          int suma = 0, estado;
          while (wait(&estado) > 0)
              if (WIFEXITED(estado))
                  suma += WEXITSTATUS(estado);
          printf("%d\n", suma);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61"]
  - id: fcfs-frente-a-sjf
    tier: 1
    prompt: |
      Cuatro trabajos llegan a la vez, en el orden $A, B, C, D$, con duraciones $10, 2, 5$ y $1$. ¿Cuál es el **tiempo medio de retorno** (finalización menos llegada) con **FCFS** (en el orden de llegada)? ¿Y con **SJF** (el más corto primero)?

      Respuesta: los dos valores separados por `;`.
    answers: ["sha256:ba603753005813c219a781dadf72cceffc9fb3cdcb9e80e3d60a1f6869e0a1fe"]
  - id: printf-y-fork
    tier: 2
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`? (Ojo: con la salida en un archivo, `stdio` guarda el texto en un búfer hasta que el proceso termina.)

      ```c
      #include <stdio.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int main(void) {
          for (int i = 0; i < 2; i++) {
              fork();
              printf("-");
          }
          while (wait(NULL) > 0)
              ;
          return 0;
      }
      ```

      Respuesta: el contenido exacto del archivo.
    answers: ["sha256:370d9b71060be968d97de6de91fff200e4dd739e4e1fd7d6e983d9a7c60bdbb0"]
  - id: round-robin-quantum-2
    tier: 2
    prompt: |
      Tres trabajos llegan a la vez, en el orden $A, B, C$, con duraciones $5, 3$ y $1$, y se planifican con **Round Robin** de cuanto $2$ (un trabajo que agota su cuanto vuelve al final de la cola). ¿Cuál es el **tiempo medio de retorno** y cuál el **tiempo medio de respuesta** (desde la llegada hasta la primera vez que se ejecuta)?

      Respuesta: los dos valores separados por `;`, el primero redondeado a **2 decimales**.
    answers: ["sha256:639c70c19e42dabd84d759e37c0d0b30afb1685fea670540ca6dc127b4188183"]
  - id: srtf-espera-media
    tier: 2
    prompt: |
      Con planificación **SRTF** (expropiativa: en cada instante se ejecuta el trabajo con menos tiempo restante), llegan $A$ en $t = 0$ con duración $8$, $B$ en $t = 1$ con $4$, $C$ en $t = 2$ con $9$ y $D$ en $t = 3$ con $5$. ¿Cuál es el **tiempo medio de espera** (retorno menos duración)?

      Respuesta: un número.
    answers: ["sha256:a22eea496bce0154f2e2dc5e652100cd8a0f9571b95ed89dd48599e76d339657"]
  - id: tuberia-entre-procesos
    tier: 2
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`?

      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int main(void) {
          int fd[2];
          if (pipe(fd) < 0) return 1;
          if (fork() == 0) {                 /* hijo: lee hasta fin de archivo */
              close(fd[1]);
              int x, s = 0;
              while (read(fd[0], &x, sizeof x) == sizeof x)
                  s += x;
              printf("%d\n", s);
              exit(0);
          }
          close(fd[0]);                      /* padre: escribe 1..10 y cierra */
          for (int i = 1; i <= 10; i++)
              write(fd[1], &i, sizeof i);
          close(fd[1]);
          wait(NULL);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:02d20bbd7e394ad5999a4cebabac9619732c343a4cac99470c03e23ba2bdc2bc"]
  - id: redireccion-con-dup2
    tier: 2
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`?

      ```c
      #include <fcntl.h>
      #include <stdio.h>
      #include <unistd.h>

      int main(void) {
          printf("a\n");
          fflush(stdout);
          int copia = dup(STDOUT_FILENO);
          int nulo = open("/dev/null", O_WRONLY);
          dup2(nulo, STDOUT_FILENO);
          printf("b\n");
          fflush(stdout);
          dup2(copia, STDOUT_FILENO);
          printf("c\n");
          return 0;
      }
      ```

      Respuesta: las líneas, en orden, separadas por `;`.
    answers: ["sha256:82cc80798acaf4cfdff5f58eb1107b7ddc3a348697305ce46be001993f209c2c"]
  - id: senales-y-wait
    tier: 2
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`?

      ```c
      #include <signal.h>
      #include <stdio.h>
      #include <stdlib.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int main(void) {
          pid_t a = fork();
          if (a == 0) {
              raise(SIGKILL);
              exit(0);
          }
          pid_t b = fork();
          if (b == 0)
              exit(3);
          int ea, eb;
          waitpid(a, &ea, 0);
          waitpid(b, &eb, 0);
          printf("%d %d\n", WIFSIGNALED(ea) ? WTERMSIG(ea) : -1, WIFEXITED(eb) ? WEXITSTATUS(eb) : -1);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:2f9619a1e0464ac79d7c235783d08e857619248ca17abb7a4e99dccaa8e7cc95"]
  - id: copia-del-espacio-de-direcciones
    tier: 2
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`?

      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int x = 0;

      int main(void) {
          if (fork() == 0) {
              x += 10;
              exit(x);
          }
          x += 1;
          int estado;
          wait(&estado);
          printf("%d\n", x + WEXITSTATUS(estado));
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8"]
  - id: round-robin-para-iguales
    tier: 2
    prompt: |
      Cuatro trabajos **idénticos** de duración $3$ llegan a la vez. ¿Cuál es el **tiempo medio de retorno** con **Round Robin** de cuanto $1$? ¿Y con **FCFS**?

      Respuesta: los dos valores separados por `;`.
    answers: ["sha256:645526d8864378dde55d41b20e7be90cf43cf686a131dbd2ceb62eb2b8a82d38"]
  - id: round-robin-cambios-de-contexto
    tier: 3
    prompt: |
      Tres trabajos llegan a la vez, en el orden $A, B, C$, con duraciones $7, 4$ y $2$, con **Round Robin** de cuanto $3$. ¿Cuál es el **tiempo medio de retorno**? ¿Cuántos **cambios de contexto** hay entre trabajos distintos (sin contar el arranque del primero)?

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:67e09b73dbb81cdf93e27cac93c90720e17926b49eaa40d519561f7d51fff0eb"]
  - id: fork-con-cortocircuito
    tier: 3
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`? Recuerda que `&&` y `||` no evalúan el segundo operando si el primero ya decide el resultado.

      ```c
      #include <stdio.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int main(void) {
          (fork() && fork()) || fork();
          printf("x\n");
          while (wait(NULL) > 0)
              ;
          return 0;
      }
      ```

      Respuesta: el número de líneas.
    answers: ["sha256:ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d"]
  - id: exec-y-bufer
    tier: 3
    prompt: |
      Se compila con GCC en Linux y se ejecuta con la salida **redirigida a un archivo** (`./prog > salida.txt`). ¿Qué contiene `salida.txt`?

      ```c
      #include <stdio.h>
      #include <unistd.h>

      int main(void) {
          printf("1\n");
          execlp("echo", "echo", "2", (char *)NULL);
          printf("3\n");
          return 0;
      }
      ```

      Respuesta: las líneas, en orden, separadas por `;` (si es una sola, solo ella).
    answers: ["sha256:d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35"]
  - id: pesos-del-planificador
    tier: 3
    prompt: |
      El planificador de Linux reparte la CPU entre tareas listas en proporción a su **peso**, que depende del valor *nice*: en la tabla del núcleo, *nice* $0$ pesa $1024$, $1$ pesa $820$, $2$ pesa $655$, $3$ pesa $526$ y $4$ pesa $423$ (cada paso, unas $1{,}25$ veces menos). Dos tareas que siempre quieren CPU, con *nice* $0$ y *nice* $3$, comparten un núcleo. ¿Qué **porcentaje** del tiempo obtiene la de *nice* $0$?

      Respuesta: un número redondeado a **1 decimal**.
    answers: ["sha256:34678fac62332760f22d8196d02adcb0e239c57dc0e455986a9986a923523f55"]
---

# Sistemas operativos I: núcleo, procesos, descriptores, señales y planificación

Un sistema operativo hace tres cosas: **virtualiza** el hardware para que cada programa crea tener la máquina entera,
gestiona la **concurrencia** que esa ilusión provoca y da **persistencia** a los datos (es la organización de OSTEP, el libro de
referencia de este nodo). Este primer nodo trata la virtualización de la CPU: la frontera entre el programa y el núcleo, los
procesos y cómo se crean, los descriptores de archivo con los que una shell construye tuberías y redirecciones, las señales y
la decisión de qué proceso usa la CPU en cada momento. Todo con Linux sobre x86-64 como caso concreto y con programas que se
ejecutan de verdad. La memoria virtual, la concurrencia y los sistemas de archivos están en [[sys-sistemas-operativos]].

## Objetivos

Al terminar sabrás:

1. Explicar los modos de privilegio y las tres vías de entrada al núcleo (llamada al sistema, excepción, interrupción), y
   observar las llamadas de un programa con `strace`.
2. Crear y esperar procesos con `fork`, `execve`, `wait` y `exit`, y predecir cuántos procesos y qué salida produce un programa.
3. Usar descriptores de archivo, `dup2` y `pipe` para redirigir la entrada y la salida como lo hace una shell.
4. Explicar la interacción entre el búfer de `stdio` y `fork`/`exec`, y manejar señales con `sigaction`.
5. Calcular retorno, espera y respuesta con **FCFS**, **SJF**, **SRTF** y **Round Robin**, y demostrar que SJF minimiza el
   retorno medio.
6. Describir MLFQ y el reparto proporcional de Linux (de CFS a EEVDF, pesos según *nice*).

## Qué debes dominar antes

[[sys-c-memoria]] (punteros, memoria dinámica, compilar con *sanitizers*) y [[prog-terminal-linux-git]] (shell, tuberías y
redirecciones desde el lado del usuario).

> [!question] Test de entrada
> 1. ¿Qué hace `ls | wc -l` en la shell?
> 2. ¿Qué diferencia hay entre `cmd > f` y `cmd 2> f`?
> 3. Si una función recibe un `int` por valor y lo modifica, ¿cambia la variable de quien la llamó?
>
> Respuestas: cuenta las líneas que imprime `ls`; la primera redirige la salida estándar (descriptor 1), la segunda la de
> error (descriptor 2); no: la función trabaja sobre una copia (igual que un proceso hijo, como verás).

## 1. Para qué sirve

- **Administrar y diagnosticar sistemas**: entender qué hace un proceso (`strace`, `ps`, `/proc`), por qué un servidor se queda
  sin descriptores o por qué hay procesos «zombi».
- **Escribir servidores y herramientas**: un servidor web crea procesos o hilos; una shell, un gestor de servicios
  (`systemd`) o un contenedor (Docker) son, en el fondo, `fork`, `exec`, descriptores y señales.
- **Seguridad**: la frontera usuario/núcleo es la principal barrera de aislamiento; los privilegios de un proceso, los
  descriptores que hereda y las señales que acepta forman parte de su superficie de ataque ([[sec-fundamentos]]).
- **Rendimiento**: la política de planificación decide la latencia de una aplicación interactiva o de un sistema de control
  ([[rob-control]]).

## 2. El núcleo y la frontera con el usuario

El procesador ejecuta en al menos dos niveles de privilegio. En **modo núcleo** se permite todo; en **modo usuario** las
instrucciones privilegiadas (cambiar tablas de páginas, acceder a dispositivos, deshabilitar interrupciones) provocan una
excepción. Solo hay tres formas de pasar de usuario a núcleo, y las tres saltan a direcciones fijadas por el propio núcleo al
arrancar (por eso un programa no puede «entrar» por donde quiera):

- **Llamada al sistema**: el programa lo pide (instrucción `syscall` en x86-64).
- **Excepción**: el programa provoca un fallo (división entre cero, fallo de página, instrucción inválida).
- **Interrupción**: un dispositivo requiere atención (temporizador, tarjeta de red, disco).

Esto es la **ejecución directa limitada** de OSTEP: el programa corre directamente sobre la CPU (rápido), pero el núcleo
recupera el control con el temporizador y en cada llamada o fallo.

En x86-64 Linux el **número** de la llamada va en `rax` (`read` es 0, `write` es 1, `getpid` es 39) y los argumentos en `rdi`,
`rsi`, `rdx`, `r10`, `r8`, `r9`; el resultado vuelve en `rax`, y un valor entre $-4095$ y $-1$ indica un error (la biblioteca C
lo convierte en `-1` y guarda el código en `errno`). Las funciones `read`, `write`, `fork`… de la biblioteca C son
**envoltorios** finos de esas llamadas; `syscall()` permite hacerlas a mano:

```c
#define _GNU_SOURCE
#include <assert.h>
#include <string.h>
#include <sys/syscall.h>
#include <unistd.h>

int main(void) {
    const char msg[] = "hola desde modo usuario\n";
    long n = syscall(SYS_write, STDOUT_FILENO, msg, strlen(msg));  /* una transición al núcleo */
    assert(n == (long)strlen(msg));
    assert(syscall(SYS_getpid) == getpid());
    return 0;
}
```

`strace ./prog` muestra cada llamada al sistema con sus argumentos y su resultado: es la herramienta de diagnóstico más útil de
esta frontera (con `-f` sigue también a los hijos).

## 3. Procesos

Un **proceso** es un programa en ejecución: un espacio de direcciones, uno o más hilos y un conjunto de recursos (descriptores
de archivo, credenciales, directorio actual). El núcleo lo describe con una estructura (`task_struct` en Linux) y lo mantiene en
uno de varios estados:

```text
            admitido            elegido por el planificador
  nuevo ──────────────▶ listo ◀─────────────────────────▶ en ejecución ──exit──▶ terminado (zombi)
                          ▲          expropiado (temporizador)    │
                          │                                       │ espera E/S o un evento
                          └────────── el evento ocurre ── bloqueado ◀┘
```

En Unix se crean en dos pasos:

- `fork()` **duplica** el proceso que llama. Devuelve **0 en el hijo** y el **PID del hijo** en el padre (o $-1$ si falla). El hijo
  es una copia: misma memoria (copiada), mismos descriptores abiertos, mismo punto de ejecución.
- `execve()` **sustituye** la imagen del proceso por otro programa, conservando el PID y los descriptores abiertos. Si tiene
  éxito, **no vuelve**: el código que hay detrás solo se ejecuta si falla.

Separar ambos pasos permite al hijo **reconfigurarse** (redirigir la salida, cerrar descriptores, cambiar de directorio)
**antes** de cargar el programa: así implementa una shell las tuberías y las redirecciones. `fork` no copia la memoria de
inmediato: marca las páginas como de solo lectura en ambos procesos y las duplica solo cuando alguno escribe (**copy-on-write**),
de modo que es barato aunque el proceso sea grande.

El padre recoge el resultado del hijo con `wait`/`waitpid`. Un hijo que ha terminado pero cuyo padre aún no lo ha esperado es un
**zombi** (solo ocupa una entrada en la tabla de procesos); si el padre muere antes, el hijo **huérfano** pasa a ser hijo de
`init` (PID 1), que lo esperará. Las macros `WIFEXITED`/`WEXITSTATUS` y `WIFSIGNALED`/`WTERMSIG` interpretan el estado.

**Ejemplo resuelto 1: el núcleo de una shell.**

```c
#define _POSIX_C_SOURCE 200809L
#include <assert.h>
#include <sys/wait.h>
#include <unistd.h>

/* Ejecuta argv como haría una shell y devuelve su código de salida ($? en la shell). */
static int ejecuta(char *const argv[]) {
    pid_t pid = fork();
    if (pid < 0)
        return -1;
    if (pid == 0) {                 /* hijo: aquí se redirigiría la E/S */
        execvp(argv[0], argv);
        _exit(127);                 /* solo se llega si exec falla: «orden no encontrada» */
    }
    int estado;
    if (waitpid(pid, &estado, 0) < 0)
        return -1;
    return WIFEXITED(estado) ? WEXITSTATUS(estado) : 128 + WTERMSIG(estado);
}

int main(void) {
    char *verdadero[] = {"true", NULL}, *falso[] = {"false", NULL};
    char *no_existe[] = {"orden-que-no-existe", NULL}, *sale42[] = {"sh", "-c", "exit 42", NULL};
    assert(ejecuta(verdadero) == 0);
    assert(ejecuta(falso) == 1);
    assert(ejecuta(no_existe) == 127);
    assert(ejecuta(sale42) == 42);
    return 0;
}
```

En el hijo se usa `_exit` y no `exit`: `exit` vaciaría los búferes de `stdio` heredados del padre y los escribiría dos veces.

**Contar procesos.** Cada `fork` ejecutado por $k$ procesos crea $k$ nuevos: tres `fork` seguidos dan $2^3 = 8$ procesos. Con
condiciones, se dibuja el árbol: en `fork() && fork()`, el hijo del primer `fork` recibe 0, el `&&` se cortocircuita y no ejecuta
el segundo.

## 4. Descriptores de archivo, redirecciones y tuberías

Cada proceso tiene una **tabla de descriptores**: enteros pequeños que identifican archivos abiertos, tuberías, sockets o
terminales. Por convenio, 0 es la entrada estándar, 1 la salida y 2 la de error. `open` devuelve el **menor** descriptor libre;
`read`, `write` y `close` operan sobre ellos. `fork` copia la tabla y `exec` la conserva (salvo los marcados con `O_CLOEXEC`).

- `dup2(viejo, nuevo)` hace que `nuevo` apunte al mismo archivo que `viejo`. Para `cmd > f`, la shell, en el hijo, abre `f` y
  hace `dup2(fd, 1)` antes del `exec`: el programa escribe en «su» descriptor 1 sin saber que es un archivo.
- `pipe(fd)` crea una **tubería**: lo que se escribe en `fd[1]` se lee en `fd[0]`, en orden, con un búfer en el núcleo. Para
  `a | b`, la shell crea la tubería, lanza `a` con su salida conectada a `fd[1]` y `b` con su entrada en `fd[0]`. `read` devuelve
  0 (fin de archivo) cuando **todos** los extremos de escritura se han cerrado: olvidar cerrar uno en algún proceso deja al
  lector esperando para siempre.

**Ejemplo resuelto 2: `seq 1 100 | suma`.**

```c
#define _POSIX_C_SOURCE 200809L
#include <assert.h>
#include <stdio.h>
#include <sys/wait.h>
#include <unistd.h>

int main(void) {
    int fd[2];
    assert(pipe(fd) == 0);
    pid_t pid = fork();
    assert(pid >= 0);
    if (pid == 0) {                    /* hijo: su salida estándar será la tubería */
        dup2(fd[1], STDOUT_FILENO);
        close(fd[0]);
        close(fd[1]);
        execlp("seq", "seq", "1", "100", (char *)NULL);
        _exit(127);
    }
    close(fd[1]);                      /* imprescindible: si no, nunca llega el fin de archivo */
    FILE *f = fdopen(fd[0], "r");
    long s = 0, x;
    while (fscanf(f, "%ld", &x) == 1)
        s += x;
    fclose(f);
    int estado;
    waitpid(pid, &estado, 0);
    assert(s == 5050 && WIFEXITED(estado) && WEXITSTATUS(estado) == 0);
    return 0;
}
```

## 5. El búfer de `stdio`, `fork` y `exec`

`printf` no hace una llamada al sistema por cada carácter: acumula en un **búfer** en la memoria del proceso y llama a `write`
cuando conviene. La política depende de a dónde va la salida: hacia una **terminal**, búfer **por líneas** (se vuelca en cada
`\n`); hacia un **archivo o una tubería**, búfer **completo** (se vuelca al llenarse, con `fflush` o al terminar con `exit`).
`stderr` no tiene búfer. Consecuencias:

- Tras `fork`, el hijo hereda una **copia** del búfer pendiente: el texto aún no escrito aparece **dos veces**. Un programa puede
  escribir bien en la terminal y duplicar líneas al redirigirlo a un archivo.
- `exec` sustituye la memoria del proceso: lo que quedaba en el búfer **se pierde**.
- Remedio: `fflush(stdout)` antes de `fork` y de `exec`, y `_exit` en los hijos que no deben vaciar búferes ajenos.

## 6. Señales

Una **señal** es una notificación asíncrona a un proceso: `SIGINT` (Ctrl+C), `SIGTERM` (petición educada de terminar),
`SIGKILL` (terminación inmediata: **no se puede capturar ni ignorar**), `SIGSEGV` (acceso inválido a memoria), `SIGCHLD` (un hijo
ha terminado), `SIGPIPE` (escribir en una tubería sin lectores). Se envían con `kill(pid, señal)` (o `raise` a uno mismo).

Cada señal tiene una acción por defecto (terminar, ignorar, detener…) que se puede cambiar con `sigaction`, instalando un
**manejador**. El manejador interrumpe al programa en cualquier punto, así que solo debe hacer lo imprescindible: modificar una
variable `volatile sig_atomic_t` o llamar a funciones *async-signal-safe* (`write` sí; `printf` y `malloc` no).

```c
#define _POSIX_C_SOURCE 200809L
#include <assert.h>
#include <signal.h>
#include <stddef.h>

static volatile sig_atomic_t recibidas = 0;

static void manejador(int senal) {
    (void)senal;
    recibidas++;
}

int main(void) {
    struct sigaction sa = {0};
    sa.sa_handler = manejador;
    sigemptyset(&sa.sa_mask);
    assert(sigaction(SIGUSR1, &sa, NULL) == 0);
    for (int i = 0; i < 3; i++)
        raise(SIGUSR1);                 /* se entrega antes de que raise vuelva */
    assert(recibidas == 3);
    return 0;
}
```

Un servidor bien escrito captura `SIGTERM` para cerrar ordenadamente (vaciar datos, liberar recursos) y recoge a sus hijos al
recibir `SIGCHLD` para no acumular zombis.

## 7. Planificación de la CPU

Cuando hay más procesos listos que núcleos, el **planificador** elige quién se ejecuta; el temporizador le devuelve el control
periódicamente y entonces puede hacer un **cambio de contexto** (guardar los registros de uno y restaurar los de otro), que
cuesta tiempo y vacía cachés. Métricas, para un trabajo que llega en $t_a$, empieza por primera vez en $t_p$, termina en $t_f$ y
dura $d$:

$$
\text{retorno} = t_f - t_a, \qquad \text{espera} = \text{retorno} - d, \qquad \text{respuesta} = t_p - t_a .
$$

El retorno importa en trabajos por lotes; la respuesta, en sistemas interactivos. Además se busca **equidad** (que nadie se quede
sin CPU: *inanición*).

**FCFS** (*first come, first served*): en orden de llegada. Simple, pero un trabajo largo delante de muchos cortos dispara el
retorno medio (**efecto convoy**).

**SJF** (*shortest job first*): primero el más corto.

**Teorema.** Para $n$ trabajos que llegan a la vez con duraciones conocidas, SJF minimiza el retorno medio.

*Demostración (intercambio).* Si en un orden un trabajo de duración $L$ precede inmediatamente a otro de duración $C < L$,
intercambiarlos adelanta la finalización del corto en $L$ y retrasa la del largo en $C$; los demás no cambian. La suma de
retornos baja en $L - C > 0$. Un orden sin tales parejas es el orden creciente, que por tanto es óptimo. $\blacksquare$

**Ejemplo resuelto 3.** Duraciones $6, 3, 1$ llegando a la vez. FCFS: terminan en $6, 9, 10$; retorno medio
$25/3 \approx 8{,}33$. SJF: orden $1, 3, 6$, terminan en $1, 4, 10$; retorno medio $5$.

**SRTF** (*shortest remaining time first*): la versión expropiativa; cuando llega un trabajo con menos tiempo **restante** que el
actual, lo expulsa. Óptimo para el retorno medio con llegadas escalonadas, pero exige conocer las duraciones (en la práctica se
estiman con el pasado) y puede causar inanición de los largos.

**Round Robin (RR)**: cola circular; cada trabajo usa como mucho un **cuanto** $q$ y vuelve al final. Da buena respuesta (ningún
trabajo espera más de $(n - 1)q$ para empezar), pero mal retorno: con trabajos iguales, todos terminan casi al final. Un cuanto
pequeño mejora la respuesta y multiplica los cambios de contexto; uno muy grande convierte RR en FCFS.

**Ejemplo resuelto 4 (Gantt).** RR con $q = 2$ y trabajos $A = 4$, $B = 3$ que llegan a la vez:

```text
t:  0   2   4   6   7
    | A | B | A | B |
```

$A$ termina en $6$, $B$ en $7$: retorno medio $6{,}5$; respuesta media $(0 + 2)/2 = 1$; cambios de contexto entre trabajos: 3.

**MLFQ** (*multi-level feedback queue*, de CTSS en los años sesenta; OSTEP lo describe con detalle): varias colas de prioridad;
un trabajo nuevo entra en la más alta; si agota su cuanto, **baja** de nivel; los que ceden la CPU pronto (interactivos) se
quedan arriba. Periódicamente todos **suben** de nuevo para evitar la inanición. Aprende el comportamiento sin conocer
duraciones.

**Reparto proporcional en Linux.** Desde Linux 2.6.23 (2007) el planificador por defecto fue **CFS**: cada tarea acumula un
*tiempo virtual de ejecución* que avanza en proporción inversa a su **peso**, y se elige la de menor valor, guardadas en un árbol
rojo-negro ($O(\log n)$). Desde **Linux 6.6** el núcleo pasa a **EEVDF** (*earliest eligible virtual deadline first*, propuesto
por Stoica y Abdel-Wahab en 1995), que mantiene el reparto proporcional y añade a cada tarea un **plazo virtual**: entre las tareas
con derecho a CPU elige la de plazo más próximo, lo que mejora la latencia. En ambos, el peso viene del valor *nice* (de $-20$ a
$19$): *nice* 0 pesa $1024$ y cada paso aproximadamente divide entre $1{,}25$ ($820$, $655$, $526$, $423$ para *nice* 1 a 4).
Dos tareas que siempre quieren CPU reciben fracciones proporcionales a sus pesos: con *nice* 0 y 1, $1024/(1024 + 820) \approx 55{,}5\,\%$
para la primera.

## 8. Errores típicos

- No comprobar el valor de retorno de `fork`, `exec`, `pipe` o `dup2`.
- Olvidar que el código tras `exec` solo se ejecuta si `exec` falla (y terminar ahí con `_exit(127)`).
- No cerrar los extremos sobrantes de una tubería: el lector nunca recibe el fin de archivo.
- No esperar a los hijos (zombis) o esperarlos con `wait` cuando se quería uno concreto (`waitpid`).
- Usar `exit` en un hijo creado con `fork` que no ha hecho `exec`: vacía búferes heredados y duplica salida.
- Llamar a `printf` o `malloc` dentro de un manejador de señales.
- Confundir retorno con respuesta, o contar el tiempo de espera desde el inicio de la simulación y no desde la llegada.

## 9. Resumen

- Modo núcleo/usuario; tres entradas al núcleo; convención de `syscall` en x86-64; `strace`.
- `fork` duplica (copy-on-write) y devuelve 0 al hijo; `exec` sustituye y no vuelve; `wait` recoge; zombis y huérfanos.
- Descriptores 0, 1, 2; `dup2` para redirigir; `pipe` y el cierre de extremos.
- `stdio` con búfer por líneas o completo: `fflush` antes de `fork` y `exec`.
- Señales: `SIGKILL` no se captura; manejadores mínimos con `sig_atomic_t`.
- Retorno, espera, respuesta; FCFS, SJF (óptimo, demostrado por intercambio), SRTF, RR, MLFQ; CFS y EEVDF con pesos por *nice*.

## Repaso: lo que debe quedarte dentro de un mes

1. `fork()` devuelve 0 en el hijo; $k$ forks seguidos dan $2^k$ procesos.
2. Cómo implementa una shell `cmd > f` y `a | b` con `fork`, `dup2`, `pipe` y `exec`.
3. Por qué un programa duplica salida al redirigirlo a un archivo y cómo se evita.
4. SJF minimiza el retorno medio (argumento de intercambio); RR mejora la respuesta a costa del retorno.
5. Linux reparte la CPU en proporción a pesos derivados de *nice* (CFS, y desde 6.6, EEVDF).

## Siguiente

[[sys-sistemas-operativos]]: memoria virtual y paginación, políticas de reemplazo, concurrencia y sistemas de archivos.
