---
id: sys-sistemas-operativos
title: "Sistemas operativos II: memoria virtual, reemplazo de páginas, concurrencia y sistemas de archivos"
area: bajo-nivel
trunk_level: 10
prerequisites: [sys-procesos-planificacion]
academic_sources:
  - "Arpaci-Dusseau, R. H.; Arpaci-Dusseau, A. C. Operating Systems: Three Easy Pieces, v1.10 (octubre de 2023). Gratuito en ostep.org."
  - "Tanenbaum, A. S.; Bos, H. Modern Operating Systems, 5ª ed. Pearson, 2022."
  - "Kerrisk, M. The Linux Programming Interface. No Starch Press, 2010."
  - "Belady, L. A. A Study of Replacement Algorithms for a Virtual-Storage Computer. IBM Systems Journal, 5(2), 78-101, 1966."
  - "Belady, L. A.; Nelson, R. A.; Shedler, G. S. An Anomaly in Space-Time Characteristics of Certain Programs Running in a Paging Machine. Communications of the ACM, 12(6), 349-353, 1969."
  - "Coffman, E. G.; Elphick, M. J.; Shoshani, A. System Deadlocks. ACM Computing Surveys, 3(2), 67-78, 1971."
ctf_flag: "sha256:050232ac3b7c8111f2f8ecba5190d2124a65e497b3d520eaa8e29f427855cc90"
hints:
  - "Los tres algoritmos solo difieren en la víctima que expulsan cuando la memoria está llena: FIFO, la página que lleva más tiempo cargada; LRU, la que lleva más tiempo sin usarse; OPT, la que tardará más en volver a usarse (o no volverá). Un acierto cambia el estado de LRU pero no el de FIFO. OPT necesita conocer el futuro: recorre antes la cadena completa."
  - "Genera la cadena de referencias una sola vez en un array y pásala a tres funciones. Valida las tres con la cadena de Belady del texto antes de usar la grande. Para OPT, precalcula de derecha a izquierda la posición del siguiente uso de cada referencia. Cuidado con el generador: 1103515245 · x desborda 32 bits; usa uint64_t antes de reducir módulo 2³¹."
  - "OSTEP, capítulo 22 («Beyond Physical Memory: Policies»), con la traza de ejemplo y la anomalía de Belady. Belady (1966) para la política óptima. Página de manual proc(5), campos de /proc/vmstat, para ver los contadores reales de fallos de página (pgfault, pgmajfault)."
exercises:
  - id: numero-de-pagina-y-desplazamiento
    tier: 1
    prompt: |
      Con páginas de $4$ KiB, ¿qué número de página virtual (VPN) y qué desplazamiento corresponden a la dirección virtual `0x12345`? Respuesta: los dos en **hexadecimal sin `0x`**, separados por `;`.
    answers: ["sha256:56c3d825ad6995fdd74ea146953fce795d9b96ec3bc848f16a368416f2432c0c"]
  - id: tamano-de-tabla-plana
    tier: 1
    prompt: |
      Un sistema de $32$ bits de dirección virtual usa páginas de $4$ KiB y entradas de tabla de páginas de $4$ bytes. ¿Cuánto ocupa una tabla de páginas **plana** (una entrada por página virtual) de un proceso, en MiB? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
  - id: traducir-una-direccion
    tier: 1
    prompt: |
      Páginas de $4$ KiB. La tabla de páginas de un proceso asigna las páginas virtuales $0, 1, 2, 3, 4$ a los marcos físicos `0x07`, `0x2B`, `0x11`, `0x15` y `0x03`. ¿A qué dirección física corresponde la dirección virtual `0x3A7C`? Respuesta: en **hexadecimal sin `0x`**.
    answers: ["sha256:77d597c20408ad64fedc0b7f67f33e513babc0821ba7a87b27e3d4bf91ebdba9"]
  - id: fifo-tres-marcos
    tier: 1
    prompt: |
      Con **3 marcos** inicialmente vacíos y reemplazo **FIFO**, ¿cuántos fallos de página produce la cadena de referencias `7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1`? Respuesta: un entero.
    answers: ["sha256:e629fa6598d732768f7c726b4b621285f9c3b85303900aa912017db7617d8bdb"]
  - id: indices-de-cuatro-niveles
    tier: 2
    prompt: |
      En x86-64 con paginación de cuatro niveles y páginas de $4$ KiB, una dirección virtual de $48$ bits se divide en cuatro índices de $9$ bits (PML4, PDPT, PD, PT, del más alto al más bajo) y un desplazamiento de $12$ bits. ¿Cuáles son para `0x00007F1234567ABC`? Respuesta: los cuatro índices y el desplazamiento **en decimal**, separados por `;`.
    answers: ["sha256:3bafb84c14c8d99f09a4a64fe3f344c3cc51f6d584ef340d5a0720e95e2db421"]
  - id: tiempo-efectivo-con-tlb
    tier: 2
    prompt: |
      Un acceso a memoria cuesta $100$ ns y consultar la TLB, $1$ ns. Si la traducción está en la TLB (el $98\,\%$ de las veces) basta un acceso a memoria; si no, hay que recorrer la tabla de **cuatro niveles** (cuatro accesos) y después hacer el acceso. ¿Cuál es el tiempo **medio** por acceso, en ns? Respuesta: un número.
    answers: ["sha256:0fd42b3f73c448b34940b339f87d07adf116b05c0227aad72e8f0ee90533e699"]
  - id: lru-tres-marcos
    tier: 2
    prompt: |
      Con **3 marcos** inicialmente vacíos y reemplazo **LRU**, ¿cuántos fallos produce la cadena `7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1`? Respuesta: un entero.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: opt-tres-marcos
    tier: 2
    prompt: |
      Con **3 marcos** inicialmente vacíos y el algoritmo **óptimo** (OPT, de Belady), ¿cuántos fallos produce la cadena `7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1`? Respuesta: un entero.
    answers: ["sha256:19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7"]
  - id: anomalia-de-belady
    tier: 2
    prompt: |
      Con reemplazo **FIFO** y la cadena `1 2 3 4 1 2 5 1 2 3 4 5`, ¿cuántos fallos hay con **3** marcos y cuántos con **4**? Respuesta: los dos números separados por `;`.
    answers: ["sha256:1d5790e08fbafa4ace1456f27b2b7e301c02a9c562723d8e106ddbda1d305030"]
  - id: algoritmo-del-reloj
    tier: 2
    prompt: |
      El algoritmo del **reloj** (segunda oportunidad) mantiene los marcos en círculo con un bit de referencia que se pone a 1 en cada acceso y al cargar una página. En un fallo con la memoria llena, la manecilla avanza: si el bit es 1 lo pone a 0 y sigue; si es 0, expulsa esa página, carga la nueva (bit 1) y avanza una posición. Con **3 marcos** (que se llenan en orden, con la manecilla en el primero) y la cadena `1 2 3 2 4 1 5 2 1 3 4 5 1 2`, ¿cuántos fallos hay? Respuesta: un entero.
    answers: ["sha256:6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918"]
  - id: productor-consumidor
    tier: 2
    prompt: |
      ¿Qué imprime este programa (compílalo con `-pthread`)?

      ```c
      #include <pthread.h>
      #include <stdio.h>

      #define N 8
      static int buf[N], ini = 0, fin = 0, cuenta = 0;
      static pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;
      static pthread_cond_t hay_hueco = PTHREAD_COND_INITIALIZER, hay_dato = PTHREAD_COND_INITIALIZER;

      static void *productor(void *arg) {
          (void)arg;
          for (int i = 1; i <= 1000; i++) {
              pthread_mutex_lock(&m);
              while (cuenta == N)
                  pthread_cond_wait(&hay_hueco, &m);
              buf[fin] = i;
              fin = (fin + 1) % N;
              cuenta++;
              pthread_cond_signal(&hay_dato);
              pthread_mutex_unlock(&m);
          }
          return NULL;
      }

      static void *consumidor(void *arg) {
          long *suma = arg;
          for (int k = 0; k < 1000; k++) {
              pthread_mutex_lock(&m);
              while (cuenta == 0)
                  pthread_cond_wait(&hay_dato, &m);
              *suma += buf[ini];
              ini = (ini + 1) % N;
              cuenta--;
              pthread_cond_signal(&hay_hueco);
              pthread_mutex_unlock(&m);
          }
          return NULL;
      }

      int main(void) {
          long suma = 0;
          pthread_t p, c;
          pthread_create(&p, NULL, productor, NULL);
          pthread_create(&c, NULL, consumidor, &suma);
          pthread_join(p, NULL);
          pthread_join(c, NULL);
          printf("%ld\n", suma);
          return 0;
      }
      ```

      Respuesta: un entero.
    answers: ["sha256:c0b6cc61a817cfe4aaa0dd7e63fcfb2380281f918cff27b9fe68c6e9aed0c3f1"]
  - id: mmap-compartida-y-privada
    tier: 2
    prompt: |
      ¿Qué imprime este programa en Linux?

      ```c
      #include <stdio.h>
      #include <sys/mman.h>
      #include <sys/wait.h>
      #include <unistd.h>

      int main(void) {
          int *compartida = mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_SHARED | MAP_ANONYMOUS, -1, 0);
          int *privada = mmap(NULL, 4096, PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
          if (compartida == MAP_FAILED || privada == MAP_FAILED)
              return 1;
          *compartida = 0;
          *privada = 0;
          if (fork() == 0) {
              *compartida = 42;
              *privada = 42;
              _exit(0);
          }
          wait(NULL);
          printf("%d %d\n", *compartida, *privada);
          return 0;
      }
      ```

      Respuesta: los dos números separados por `;`.
    answers: ["sha256:62983596e22fda67e7c3473fba12f091939c04c0fb46d8007b9c45dd377cc66c"]
  - id: algoritmo-del-banquero
    tier: 3
    prompt: |
      Cinco procesos $P_0, \dots, P_4$ y tres tipos de recurso. Disponibles: $(3, 3, 2)$. Asignación actual: $P_0 = (0,1,0)$, $P_1 = (2,0,0)$, $P_2 = (3,0,2)$, $P_3 = (2,1,1)$, $P_4 = (0,0,2)$. Máximo que puede pedir cada uno: $P_0 = (7,5,3)$, $P_1 = (3,2,2)$, $P_2 = (9,0,2)$, $P_3 = (2,2,2)$, $P_4 = (4,3,3)$. Aplica el algoritmo de seguridad del **banquero** recorriendo los procesos en orden $P_0 \to P_4$ una y otra vez y eligiendo el **primero** cuya necesidad (máximo − asignación) cabe en lo disponible. ¿En qué orden terminan? Respuesta: la secuencia, como `P1;P3;...`.
    answers: ["sha256:536522f6b18a18b4fdabaf7fc75f41da46aaa0851c0a2ed4cff531ab144724aa", "sha256:b088f1c8ee4d6896824e6d98a4174c0c6126523f7394c385d0840c391e1646f0"]
  - id: tamano-maximo-de-archivo
    tier: 3
    prompt: |
      Un inodo tiene $12$ punteros directos, uno indirecto simple, uno doble y uno triple. Los bloques son de $4096$ bytes y cada puntero ocupa $4$ bytes. ¿Cuál es el tamaño máximo de un archivo, en bytes? Respuesta: un entero exacto.
    answers: ["sha256:b1fe8a95702e98dd6d16b3913ef088072fedc82dd5b84d63499f22c16c6166c1"]
  - id: enlaces-duros-y-simbolicos
    tier: 3
    prompt: |
      ¿Qué imprime este programa en Linux, ejecutado en un directorio donde puede escribir?

      ```c
      #include <fcntl.h>
      #include <stdio.h>
      #include <sys/stat.h>
      #include <unistd.h>

      int main(void) {
          struct stat st;
          int fd = open("a.txt", O_CREAT | O_WRONLY | O_TRUNC, 0644);
          write(fd, "hola\n", 5);
          close(fd);
          link("a.txt", "b.txt");           /* enlace duro */
          symlink("a.txt", "c.txt");        /* enlace simbólico */
          stat("b.txt", &st);
          int antes = (int)st.st_nlink;
          unlink("a.txt");
          stat("b.txt", &st);
          int despues = (int)st.st_nlink;
          int abre_c = open("c.txt", O_RDONLY) >= 0;
          printf("%d %d %d\n", antes, despues, abre_c);
          unlink("b.txt");
          unlink("c.txt");
          return 0;
      }
      ```

      Respuesta: los tres números separados por `;`.
    answers: ["sha256:4229f1a7fe9dfc92b99ff012c1465410b49232a218f36c078afb89e6dbffe0b4"]
  - id: conjunto-de-trabajo
    tier: 3
    prompt: |
      El **conjunto de trabajo** $W(t, \Delta)$ es el conjunto de páginas distintas referenciadas en las últimas $\Delta$ referencias hasta la $t$-ésima (incluida). Para la cadena `7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1` y $\Delta = 5$, ¿cuál es el **máximo** de $\lvert W(t, 5)\rvert$ a lo largo de la cadena? Respuesta: un entero.
    answers: ["sha256:4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a"]
---

# Sistemas operativos II: memoria virtual, reemplazo de páginas, concurrencia y sistemas de archivos

[[sys-procesos-planificacion]] mostró cómo el núcleo reparte la CPU entre procesos. Este nodo completa la visión del sistema
operativo con sus otros tres pilares: la **memoria virtual**, que da a cada proceso un espacio de direcciones propio y aislado;
las **políticas de reemplazo**, que deciden qué guardar en la memoria física cuando no cabe todo; la **concurrencia**, el
problema de coordinar hilos que comparten memoria; y la **persistencia**, cómo un sistema de archivos guarda datos que
sobreviven a un apagón. Todo con Linux sobre x86-64 como caso concreto.

## Objetivos

Al terminar sabrás:

1. Traducir direcciones virtuales a físicas con páginas, calcular el tamaño de una tabla y los índices de la paginación de
   cuatro niveles de x86-64.
2. Calcular el tiempo efectivo de acceso con TLB y explicar fallos de página, *copy-on-write* y `mmap`.
3. Simular **FIFO**, **LRU**, **OPT** y el **reloj**, explicar la anomalía de Belady y el *thrashing*.
4. Proteger secciones críticas con cerrojos y variables de condición, y resolver el productor-consumidor.
5. Enunciar las condiciones de **interbloqueo** de Coffman, prevenirlo con orden de adquisición y aplicar el algoritmo del
   **banquero**.
6. Explicar inodos, directorios, enlaces duros y simbólicos, punteros indirectos y el registro por diario (*journaling*).

## Qué debes dominar antes

[[sys-procesos-planificacion]] (procesos, `fork`, llamadas al sistema) y, a través de él, [[sys-c-memoria]] (punteros y
memoria dinámica). Las potencias de dos y el hexadecimal de [[sys-c-fundamentos]].

> [!question] Test de entrada
> 1. ¿Cuántos bytes son 4 KiB? ¿Cuántos bits hacen falta para numerar un byte dentro de 4 KiB?
> 2. ¿Qué es `0x3A7C` en binario?
> 3. ¿Qué devuelve `fork()` en el hijo?
>
> Respuestas: $4096 = 2^{12}$, 12 bits; `0011 1010 0111 1100`; 0.

## 1. Para qué sirve

- **Aislamiento y seguridad**: la memoria virtual impide que un proceso lea o escriba la memoria de otro o del núcleo; los bits
  de permiso de las páginas (solo lectura, no ejecutable) son la base de mitigaciones como W^X ([[sec-explotacion-binaria]]).
- **Rendimiento**: entender la TLB, los fallos de página y la localidad explica por qué un programa es diez veces más lento
  de lo esperado o por qué un servidor «se arrastra» al quedarse sin memoria.
- **Programas concurrentes correctos**: las condiciones de carrera y los interbloqueos son los errores más difíciles de
  depurar; se evitan con disciplina, no con pruebas.
- **Datos que no se pierden**: bases de datos y editores escriben de forma que un corte de luz no corrompa el archivo.

## 2. Espacios de direcciones

Cada proceso cree tener toda la memoria para él: el código empieza en la misma dirección en todos, la pila está arriba, el
montón en medio ([[sys-c-memoria]]). Las direcciones que usa un programa son **virtuales**; el hardware las traduce a
direcciones **físicas** en cada acceso, con tablas que solo el núcleo puede modificar. Objetivos: **transparencia** (el programa
no lo nota), **eficiencia** (la traducción la hace el hardware) y **protección** (un proceso no puede tocar lo que no es suyo).

Las primeras soluciones (un registro **base** que se suma a cada dirección y otro **límite** que la acota; después la
**segmentación**, un par base-límite por región) dejan huecos libres de tamaños variables entre regiones (**fragmentación
externa**). La solución moderna es la paginación.

## 3. Paginación

La memoria virtual se divide en **páginas** de tamaño fijo (en x86-64, normalmente $4\ \text{KiB} = 2^{12}$ bytes) y la física en
**marcos** del mismo tamaño. Una dirección virtual se parte en **número de página virtual** (VPN) y **desplazamiento**:

$$
\text{VPN} = \left\lfloor \frac{\text{dirección}}{2^{12}} \right\rfloor, \qquad
\text{desplazamiento} = \text{dirección} \bmod 2^{12} .
$$

En hexadecimal es inmediato: los tres últimos dígitos son el desplazamiento. La **tabla de páginas** asocia cada VPN a un
**número de marco físico** (PFN), y la dirección física es $\text{PFN}\cdot 2^{12} + \text{desplazamiento}$. Cada entrada (PTE)
lleva además bits de control: **presente**, **escritura**, **usuario/núcleo**, **accedido** (la MMU lo pone a 1 en cada
acceso), **sucio** (en cada escritura) y **no ejecutable** (NX).

**Ejemplo resuelto 1.** Dirección virtual `0x2B3F0` con páginas de 4 KiB: VPN `0x2B`, desplazamiento `0x3F0`. Si la tabla
asigna la página `0x2B` al marco `0x1C`, la dirección física es `0x1C3F0`.

**Tamaño de la tabla.** Con direcciones de $v$ bits y páginas de $2^{p}$ bytes hay $2^{v-p}$ páginas virtuales; una tabla
**plana** necesita una entrada por cada una, aunque el proceso use pocas. Con 48 bits y entradas de 8 bytes serían
$2^{36}\cdot 8$ bytes $= 512$ GiB por proceso: imposible.

**Tablas multinivel.** x86-64 usa un árbol de **cuatro niveles**: los 48 bits se dividen en cuatro índices de 9 bits
(PML4, PDPT, PD y PT) y 12 de desplazamiento; cada tabla ocupa una página ($2^9$ entradas de 8 bytes $= 4$ KiB), y solo existen
las ramas de las regiones que el proceso usa. El registro `CR3` apunta a la raíz del proceso actual; cambiar de proceso es
cambiar `CR3`. Los procesadores recientes admiten un quinto nivel (57 bits).

**Ejemplo resuelto 2.** Índices de `0x00007FFFFFFFF000` (cerca de la cima de la pila de usuario): desplazando, el índice PML4
son los bits 47-39, todos a 1 salvo el 47: $255$; los demás índices valen $511$, y el desplazamiento, $0$. Se comprueba con
$(\text{dirección} \gg 39) \mathbin{\&} 511$, $(\text{dirección} \gg 30) \mathbin{\&} 511$, etc.

**La TLB.** Recorrer cuatro niveles cuesta cuatro accesos a memoria por cada acceso del programa. El procesador guarda las
traducciones recientes en una caché pequeña y muy rápida, la **TLB** (*translation lookaside buffer*). Gracias a la localidad,
casi todos los accesos aciertan. Si la TLB tarda $t_{\text{TLB}}$, la memoria $t_m$, la tasa de acierto es $h$ y un fallo exige
recorrer $k$ niveles,

$$
\text{EAT} = h\,(t_{\text{TLB}} + t_m) + (1 - h)\,(t_{\text{TLB}} + k\,t_m + t_m) .
$$

Con $h = 0{,}99$, $t_{\text{TLB}} = 1$ ns, $t_m = 100$ ns y $k = 4$: $0{,}99\cdot101 + 0{,}01\cdot501 = 105$ ns, un 5 % más que
un acceso sin traducción (100 ns). Las **páginas grandes** (2 MiB o 1 GiB) cubren más memoria con cada entrada de la TLB; los identificadores de
espacio de direcciones (PCID) evitan vaciarla en cada cambio de proceso.

## 4. Fallos de página, `mmap` y *copy-on-write*

Si una entrada no está presente, la MMU provoca un **fallo de página** y el núcleo decide:

- la página es válida pero no está en memoria: la carga del disco (del ejecutable, de un archivo o del área de intercambio) y
  reintenta la instrucción (**paginación bajo demanda**: un programa empieza sin cargar nada y trae solo lo que toca);
- es memoria anónima nueva (montón, pila): asigna un marco a cero;
- es una página *copy-on-write* tras un `fork` y se intenta escribir: la duplica;
- el acceso es ilegítimo: envía `SIGSEGV`.

`mmap` pide al núcleo una región del espacio de direcciones respaldada por un archivo o anónima. Con `MAP_SHARED`, las
escrituras son visibles para los demás procesos que proyectan lo mismo (y llegan al archivo); con `MAP_PRIVATE`, cada proceso
tiene su copia (*copy-on-write*). Un único mecanismo, el fallo de página, implementa la carga de programas, las bibliotecas
compartidas, la memoria compartida entre procesos, el intercambio a disco y el aislamiento.

```c
#define _DEFAULT_SOURCE
#include <assert.h>
#include <fcntl.h>
#include <string.h>
#include <sys/mman.h>
#include <unistd.h>

int main(void) {
    int fd = open("datos.txt", O_CREAT | O_RDWR | O_TRUNC, 0600);
    assert(fd >= 0 && write(fd, "hola, memoria", 13) == 13);
    char *p = mmap(NULL, 13, PROT_READ, MAP_PRIVATE, fd, 0);  /* el archivo, como un array */
    assert(p != MAP_FAILED);
    assert(memcmp(p + 6, "memoria", 7) == 0);                 /* sin read(): fallos de página */
    munmap(p, 13);
    close(fd);
    unlink("datos.txt");
    return 0;
}
```

## 5. Políticas de reemplazo

Cuando no quedan marcos libres hay que expulsar una página (escribiéndola antes en disco si está sucia). La medida es el número
de **fallos** sobre una **cadena de referencias** (la sucesión de páginas que se usan).

- **FIFO** expulsa la página que se cargó hace más tiempo. Un acierto no cambia nada.
- **LRU** (*least recently used*) expulsa la que lleva más tiempo sin usarse. Un acierto la pone la última.
- **OPT** (o MIN) expulsa aquella cuya próxima referencia está más lejos en el futuro (o que no se volverá a usar).

**Teorema (optimalidad de OPT; Belady, 1966).** OPT produce el mínimo número de fallos posible para cualquier cadena y número de
marcos.

*Idea de la demostración.* Por intercambio: dado un algoritmo cualquiera que en algún instante expulsa una página distinta de la
que elegiría OPT, se construye otro que expulsa la de OPT en ese instante y no produce más fallos, porque la página conservada se
necesita antes que la descartada. Aplicándolo repetidamente se llega a OPT sin aumentar los fallos. $\blacksquare$

OPT no es implementable (exige conocer el futuro), pero es la **cota** con la que se mide todo lo demás. LRU lo aproxima
suponiendo que el pasado reciente predice el futuro cercano (**localidad**).

**Ejemplo resuelto 3.** 3 marcos, cadena `1 2 3 4 1 2 5 1 2 3 4 5`, con LRU: los tres primeros son fallos (`1 2 3`); `4` expulsa
al menos reciente, `1`; después `1` expulsa a `2`, `2` a `3`, `5` a `4`; `1` y `2` aciertan; `3` expulsa a `5`, `4` a `1`, `5` a
`2`. Total: $10$ fallos. Con OPT, en cambio, al llegar `4` se expulsa la página cuyo próximo uso está más lejos (`3`), y el total
baja a $7$.

**Anomalía de Belady.** Con FIFO, dar **más** marcos puede producir **más** fallos: con la cadena del ejemplo 3 ocurre al pasar de
3 a 4 marcos (Belady, Nelson y Shedler, 1969; calcúlalo en los ejercicios). LRU y OPT son **algoritmos de pila**: el conjunto de
páginas en memoria con $k$ marcos está siempre contenido en el de $k + 1$, lo que excluye la anomalía.

**El reloj.** LRU exacto exigiría actualizar una lista en cada acceso a memoria. El algoritmo del **reloj** lo aproxima con el bit
de *accedido*: los marcos forman un círculo; ante un fallo, la manecilla avanza; si el bit está a 1 lo borra (segunda
oportunidad) y sigue; si está a 0, expulsa esa página. Linux usa una variante con listas de páginas activas e inactivas.

**Conjunto de trabajo y *thrashing*.** El **conjunto de trabajo** $W(t, \Delta)$ son las páginas distintas usadas en las últimas
$\Delta$ referencias. Si la suma de los conjuntos de trabajo de los procesos activos supera la memoria física, el sistema pasa
casi todo el tiempo trayendo y llevando páginas (**hiperpaginación**, *thrashing*): la CPU está ociosa y el disco saturado. La
solución es reducir el número de procesos activos (o añadir memoria); Linux, en último extremo, mata un proceso (el *OOM killer*).

## 6. Concurrencia

Un **hilo** es un flujo de ejecución dentro de un proceso: los hilos de un proceso comparten el espacio de direcciones (código,
montón, globales), pero cada uno tiene su pila y sus registros. Son la forma de aprovechar varios núcleos y de esperar E/S sin
bloquear todo el programa (`pthread_create`, `pthread_join`).

**Condición de carrera.** Dos hilos que ejecutan `contador++` sobre una variable compartida pueden perder incrementos, porque la
operación son tres pasos (leer, sumar, escribir) que pueden intercalarse: ambos leen 41, ambos escriben 42. El resultado depende
del orden de ejecución, que no se controla. El tramo de código que no admite intercalado es una **sección crítica**.

**Cerrojos.** Un **mutex** garantiza exclusión mutua: solo un hilo a la vez entre `lock` y `unlock`. Se implementa con una
instrucción atómica del procesador (en x86, `lock cmpxchg`: compara y, solo si coincide, intercambia, en un paso indivisible).
Esperar dando vueltas desperdicia CPU, así que Linux combina el camino rápido atómico en espacio de usuario con una llamada al
sistema (`futex`) que duerme al hilo solo cuando hay contención.

```c
#include <assert.h>
#include <pthread.h>

static long contador = 0;
static pthread_mutex_t cerrojo = PTHREAD_MUTEX_INITIALIZER;

static void *suma(void *arg) {
    (void)arg;
    for (int i = 0; i < 1000000; i++) {
        pthread_mutex_lock(&cerrojo);
        contador++;                       /* sección crítica */
        pthread_mutex_unlock(&cerrojo);
    }
    return NULL;
}

int main(void) {
    pthread_t h[4];
    for (int i = 0; i < 4; i++)
        pthread_create(&h[i], NULL, suma, NULL);
    for (int i = 0; i < 4; i++)
        pthread_join(h[i], NULL);
    assert(contador == 4000000);          /* sin el cerrojo, casi siempre saldría menos */
    return 0;
}
```

**Variables de condición.** Para **esperar** a que algo ocurra (que haya datos en una cola) sin dar vueltas: `pthread_cond_wait`
suelta el cerrojo y duerme, y al despertar lo vuelve a tomar; otro hilo avisa con `pthread_cond_signal`. La condición se
comprueba **siempre en un bucle `while`**, porque un hilo puede despertar sin que la condición se cumpla (despertares espurios, u
otro hilo que se adelantó). El **productor-consumidor** con un búfer acotado usa un cerrojo y dos condiciones: «hay hueco» y «hay
dato».

Un **semáforo** (Dijkstra) es un contador con dos operaciones atómicas: `wait` (decrementa; si queda negativo, duerme) y `post`
(incrementa y despierta a uno). Con valor inicial 1 actúa como cerrojo; con valor $N$, limita a $N$ los hilos que usan un recurso.

**Interbloqueo.** Hay **interbloqueo** cuando un conjunto de hilos espera cada uno un recurso que tiene otro del conjunto. Coffman,
Elphick y Shoshani (1971) dieron las cuatro condiciones que deben darse a la vez: **exclusión mutua**, **retención y espera**,
**ausencia de expropiación** y **espera circular**. Romper cualquiera lo evita; la más práctica es la última: adquirir siempre los
cerrojos en un **orden global fijo** (por ejemplo, por dirección de memoria), de modo que no puede formarse un ciclo.

**El algoritmo del banquero** (Dijkstra) evita el interbloqueo de otra forma: cada proceso declara su máximo; el sistema solo
concede una petición si el estado resultante es **seguro**, es decir, si existe un orden en que todos pueden terminar. Para
comprobarlo: $\text{trabajo} \leftarrow \text{disponible}$; mientras haya un proceso no terminado cuya **necesidad**
($\text{máximo} - \text{asignado}$) quepa en $\text{trabajo}$, se supone que termina y devuelve lo suyo
($\text{trabajo} \leftarrow \text{trabajo} + \text{asignado}$). Si todos terminan, el estado es seguro. Exige conocer los máximos,
por eso se usa poco en sistemas generales, pero ilustra la idea de estado seguro.

## 7. Persistencia: sistemas de archivos

Un **sistema de archivos** proyecta nombres jerárquicos sobre bloques de disco. En los de tipo Unix (ext4):

- Un **inodo** guarda los metadatos de un archivo (tamaño, propietario, permisos, fechas, número de enlaces) y dónde están sus
  bloques; **no** guarda su nombre.
- Un **directorio** es un archivo que asocia nombres a números de inodo. Por eso un archivo puede tener varios nombres: un
  **enlace duro** (`link`, `ln a b`) es otra entrada de directorio al mismo inodo; borrar (`unlink`) quita un nombre y decrementa
  el contador de enlaces, y los datos se liberan cuando llega a 0 (y nadie lo tiene abierto). Un **enlace simbólico**
  (`symlink`, `ln -s`) es un archivo pequeño que contiene una **ruta**: si se borra el destino, queda colgando.
- **Punteros a bloques**: un inodo clásico tiene unos cuantos punteros **directos** y punteros **indirectos** (a un bloque lleno
  de punteros), **doble** y **triple** indirectos. Con bloques de $B$ bytes y punteros de $4$, un bloque indirecto contiene $B/4$
  punteros, así que el tamaño máximo es $(d + n + n^2 + n^3)\,B$ con $n = B/4$ y $d$ directos. Los archivos pequeños (la
  mayoría) solo usan los directos; ext4 usa además **extensiones** (rangos contiguos de bloques).

**Consistencia ante fallos.** Crear un archivo exige varias escrituras (bitmap de inodos, inodo, directorio, bitmap de bloques,
datos); un corte de luz entre ellas deja el disco inconsistente. El **registro por diario** (*journaling*) escribe primero en un
registro secuencial la intención completa y una marca de «confirmado», y solo después aplica los cambios en su sitio; tras un
fallo, se reproducen las transacciones confirmadas y se descartan las incompletas. ext4 por defecto registra los metadatos.

**Escribir datos de forma segura.** `write` deja los datos en la caché del núcleo; `fsync(fd)` fuerza que lleguen al disco.
Para sustituir un archivo sin riesgo de dejarlo a medias se escribe uno temporal, se hace `fsync` y se **renombra** sobre el
original: `rename` es atómico (en todo momento existe la versión antigua o la nueva entera).

```c
#define _POSIX_C_SOURCE 200809L
#include <assert.h>
#include <fcntl.h>
#include <stdio.h>
#include <string.h>
#include <unistd.h>

static int guarda_atomico(const char *ruta, const char *texto) {
    char tmp[256];
    snprintf(tmp, sizeof tmp, "%s.tmp", ruta);
    int fd = open(tmp, O_CREAT | O_WRONLY | O_TRUNC, 0644);
    if (fd < 0)
        return -1;
    size_t n = strlen(texto);
    if (write(fd, texto, n) != (ssize_t)n || fsync(fd) != 0) {
        close(fd);
        unlink(tmp);
        return -1;
    }
    close(fd);
    return rename(tmp, ruta);           /* atómico: la versión vieja o la nueva, nunca media */
}

int main(void) {
    assert(guarda_atomico("config.txt", "version=1\n") == 0);
    assert(guarda_atomico("config.txt", "version=2\n") == 0);
    char buf[32] = {0};
    int fd = open("config.txt", O_RDONLY);
    assert(fd >= 0 && read(fd, buf, sizeof buf - 1) == 10);
    close(fd);
    assert(strcmp(buf, "version=2\n") == 0);
    unlink("config.txt");
    return 0;
}
```

## 8. Errores típicos

- Confundir dirección virtual y física, o VPN y desplazamiento (los 12 bits bajos con páginas de 4 KiB).
- Olvidar que en LRU un **acierto** actualiza el orden y en FIFO no.
- Pensar que más memoria siempre reduce los fallos (FIFO).
- Comprobar la condición de una variable de condición con `if` en lugar de `while`.
- Adquirir cerrojos en órdenes distintos en distintas partes del programa.
- Creer que un enlace simbólico mantiene vivo el archivo, o que borrar un nombre borra los datos si hay otros enlaces duros.
- Suponer que tras `write` los datos están en el disco (falta `fsync`).

## 9. Resumen

- Paginación: VPN y desplazamiento; PTE con bits de control; tablas de 4 niveles de 9 bits en x86-64; TLB y EAT.
- Fallo de página: bajo demanda, memoria anónima, *copy-on-write*, `SIGSEGV`; `mmap` compartida o privada.
- FIFO, LRU, OPT (óptimo), reloj; anomalía de Belady; algoritmos de pila; conjunto de trabajo y *thrashing*.
- Carreras y secciones críticas; mutex (instrucción atómica + `futex`); variables de condición en bucle; semáforos.
- Interbloqueo: cuatro condiciones de Coffman; orden global de cerrojos; banquero y estado seguro.
- Inodos, directorios, enlaces duros y simbólicos, punteros indirectos, *journaling*, `fsync` y `rename` atómico.

## Reto

Simula un sistema con **8 marcos** de memoria, inicialmente vacíos, sobre una cadena de
$100\,000$ referencias generada así:

```c
uint32_t x = 2026;
for (int k = 0; k < 100000; k++) {
    x = (uint32_t)((1103515245ULL * x + 12345ULL) % 2147483648ULL);
    pagina[k] = ((k / 500) * 3 + ((x >> 16) % 12)) % 64;
}
```

Las diez primeras referencias son `4 6 7 2 8 11 8 1 9 6`. Calcula el número de fallos de página
con **FIFO**, con **LRU** y con **OPT** (si varias páginas no vuelven a usarse, da igual cuál
expulses: el número de fallos es el mismo).

Formato de la flag, en decimal: `EXODUS{fifo-lru-opt}`

## Repaso: lo que debe quedarte dentro de un mes

1. Dirección física $= \text{PFN}\cdot 2^{12} + \text{desplazamiento}$; cuatro niveles de 9 bits en x86-64; la TLB evita recorrerlos.
2. OPT es óptimo y no implementable; LRU lo aproxima; FIFO sufre la anomalía de Belady.
3. Un mutex protege una sección crítica; las condiciones se esperan en un `while`.
4. Interbloqueo: exclusión mutua, retención y espera, no expropiación, espera circular; orden fijo de cerrojos.
5. Un nombre es una entrada de directorio a un inodo; `fsync` + `rename` para guardar sin corromper.

## Siguiente

[[sys-ensamblador-x86-64]] (la máquina por dentro) y [[sec-explotacion-binaria]] (cómo las mitigaciones del sistema operativo
protegen frente a errores de memoria). La concurrencia y el núcleo de Linux se profundizan en las ramas de sistemas.
