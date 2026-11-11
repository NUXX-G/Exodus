---
id: sys-sistemas-operativos
title: "Sistemas operativos y kernel de Linux"
area: bajo-nivel
trunk_level: 2
prerequisites: [sys-c-memoria]
academic_sources:
  - "Arpaci-Dusseau, R. H.; Arpaci-Dusseau, A. C. Operating Systems: Three Easy Pieces, v1.10. Arpaci-Dusseau Books, 2023."
  - "Tanenbaum, A. S.; Bos, H. Modern Operating Systems, 5ª ed. Pearson, 2022."
  - "Love, R. Linux Kernel Development, 3ª ed. Addison-Wesley, 2010."
  - "Kerrisk, M. The Linux Programming Interface. No Starch Press, 2010."
  - "Belady, L. A. A Study of Replacement Algorithms for a Virtual-Storage Computer. IBM Systems Journal, 5(2), 1966."
ctf_flag: "sha256:050232ac3b7c8111f2f8ecba5190d2124a65e497b3d520eaa8e29f427855cc90"
hints:
  - "Los tres algoritmos solo difieren en la víctima que expulsan cuando la memoria está llena: FIFO, la página que lleva más tiempo cargada; LRU, la que lleva más tiempo sin usarse; OPT, la que tardará más en volver a usarse (o no volverá). Un acierto cambia el estado de LRU pero no el de FIFO. OPT necesita conocer el futuro: recorre antes la cadena completa."
  - "Genera la cadena de referencias una sola vez en un array y pásala a tres funciones. Valida las tres con la cadena de Belady del enunciado antes de usar la grande. Para OPT, precalcula de derecha a izquierda la posición del siguiente uso de cada referencia. Cuidado con el generador: 1103515245 · x desborda 32 bits; usa uint64_t antes de reducir módulo 2³¹."
  - "OSTEP, cap. 22 («Beyond Physical Memory: Policies»), con la traza de ejemplo y la anomalía de Belady. Belady (1966) para la demostración de optimalidad. Página de manual proc(5), campos de /proc/vmstat, para ver los contadores reales de fallos de página (pgfault, pgmajfault)."
---

# Sistemas operativos y kernel de Linux

Un sistema operativo hace tres cosas: **virtualiza** el hardware para que cada programa crea
tener la máquina entera, gestiona la **concurrencia** que esa ilusión provoca, y da
**persistencia** a los datos. Este nodo recorre los mecanismos que lo hacen posible, con Linux
sobre x86-64 como caso concreto.

## 1. El núcleo y la frontera con el usuario

El procesador ejecuta en al menos dos niveles de privilegio. En **modo núcleo** se permite todo;
en **modo usuario** las instrucciones privilegiadas (cambiar tablas de páginas, acceder a
dispositivos, deshabilitar interrupciones) provocan una excepción. Solo hay tres formas de pasar
de usuario a núcleo, y las tres saltan a direcciones fijadas por el propio núcleo al arrancar:

- **Llamada al sistema**: el programa lo pide (instrucción `syscall` en x86-64).
- **Excepción**: el programa provoca un fallo (división por cero, fallo de página).
- **Interrupción**: un dispositivo requiere atención (temporizador, tarjeta de red).

En x86-64 Linux el número de llamada va en `rax` y los argumentos en `rdi`, `rsi`, `rdx`, `r10`,
`r8`, `r9`; el resultado vuelve en `rax`, y un valor entre $-4095$ y $-1$ indica error.

```c
#include <unistd.h>

int main(void) {
    /* write(1, ...) sin pasar por stdio: una única transición a modo núcleo. */
    static const char msg[] = "hola desde modo usuario\n";
    return write(STDOUT_FILENO, msg, sizeof msg - 1) < 0;
}
```

`strace ./a.out` muestra cada llamada al sistema que hace un proceso: es la herramienta de
diagnóstico más útil de esta frontera.

## 2. Procesos

Un **proceso** es un programa en ejecución: un espacio de direcciones, uno o más hilos y un
conjunto de recursos (descriptores de archivo, credenciales). En Unix se crean en dos pasos:

- `fork()` duplica el proceso que llama. Devuelve 0 en el hijo y el PID del hijo en el padre.
- `execve()` sustituye la imagen del proceso por otro programa, conservando el PID y los
  descriptores abiertos.

Separar ambos pasos permite al hijo reconfigurarse (redirigir la salida, cerrar descriptores)
antes de cargar el programa: así implementa una shell las tuberías y las redirecciones. `fork` no
copia la memoria: marca las páginas de solo lectura en ambos procesos y las duplica solo cuando
alguno escribe (*copy-on-write*).

El núcleo representa cada hilo con una estructura (`task_struct` en Linux) y lo mantiene en uno
de varios estados: en ejecución, listo, o bloqueado esperando un evento.

## 3. Planificación

El temporizador interrumpe periódicamente; el núcleo puede entonces realizar un **cambio de
contexto**: guardar los registros del hilo actual y restaurar los de otro. Qué hilo elegir es la
política de planificación.

Para $n$ trabajos que llegan a la vez con duraciones conocidas, ejecutar primero el más corto
(SJF) minimiza el tiempo medio de finalización.

*Demostración (intercambio).* Si en un orden un trabajo largo $L$ precede inmediatamente a uno
corto $C$, intercambiarlos adelanta la finalización de $C$ en $|L|$ y retrasa la de $L$ en $|C|$;
como $|C| < |L|$, la suma disminuye. Un orden sin tales parejas es el orden creciente.
$\blacksquare$

En la práctica las duraciones no se conocen y además importa la respuesta interactiva. El
planificador **CFS** de Linux asigna a cada hilo un *tiempo virtual de ejecución* que avanza en
proporción inversa a su peso, y elige siempre el de menor valor, que localiza en $O(\log n)$ con
un árbol rojo-negro.

## 4. Memoria virtual

Cada proceso ve un espacio de direcciones propio. La MMU traduce cada dirección virtual a una
física mediante una **tabla de páginas** que mantiene el núcleo. Con páginas de $4\,\text{KiB}$,
los 12 bits bajos son el desplazamiento dentro de la página y el resto, el número de página
virtual:

$$
\text{dirección virtual} = \underbrace{\text{VPN}}_{36 \text{ bits}} \;\Vert\; \underbrace{\text{desplazamiento}}_{12 \text{ bits}}
\quad\longrightarrow\quad
\text{dirección física} = \text{PFN} \;\Vert\; \text{desplazamiento}.
$$

Una tabla plana para 48 bits de dirección necesitaría $2^{36}$ entradas de 8 bytes, 512 GiB por
proceso. x86-64 usa un árbol de **cuatro niveles** indexado por 9 bits cada uno: solo existen las
ramas de las regiones realmente usadas. Cada traducción costaría cuatro accesos a memoria, y por
eso el procesador guarda las traducciones recientes en la **TLB**.

Una entrada marcada como no presente provoca un **fallo de página**, y el núcleo decide: cargar
la página desde disco, asignar una página a cero, duplicarla (copy-on-write) o, si el acceso es
ilegítimo, enviar `SIGSEGV`. Este único mecanismo implementa la carga bajo demanda, `mmap`, el
intercambio a disco y el aislamiento entre procesos.

## 5. Políticas de reemplazo

Cuando no quedan marcos libres hay que expulsar una página. La medida es el número de fallos
sobre una cadena de referencias.

- **FIFO** expulsa la página que se cargó hace más tiempo.
- **LRU** expulsa la que lleva más tiempo sin referenciarse.
- **OPT** expulsa aquella cuya próxima referencia está más lejos en el futuro.

**Teorema (Belady, 1966).** OPT produce el mínimo número de fallos posible para cualquier cadena
y número de marcos.

*Idea de la demostración.* Por intercambio: dado un algoritmo cualquiera que en algún instante
expulsa una página distinta de la que elegiría OPT, se construye otro que expulsa la de OPT en
ese instante y no produce más fallos, porque la página conservada se necesita antes que la
descartada. Aplicándolo repetidamente se llega a OPT sin aumentar los fallos. $\blacksquare$

OPT no es implementable (exige conocer el futuro), pero es la cota con la que se mide todo lo
demás. LRU lo aproxima suponiendo que el pasado reciente predice el futuro cercano
(**localidad**).

**Anomalía de Belady.** Con FIFO, más memoria puede producir *más* fallos. Para la cadena
`1 2 3 4 1 2 5 1 2 3 4 5`:

| Marcos | FIFO | LRU | OPT |
|:---:|:---:|:---:|:---:|
| 3 | 9 | 10 | 7 |
| 4 | 10 | 8 | 6 |

LRU y OPT son *algoritmos de pila*: el conjunto de páginas en memoria con $k$ marcos está siempre
contenido en el de $k + 1$, lo que excluye la anomalía. Linux no mantiene LRU exacto, que
exigiría actualizar una lista en cada acceso a memoria; lo aproxima con listas de páginas activas
e inactivas y el bit de *accedido* que la MMU pone en la tabla de páginas.

## 6. Concurrencia

Dos hilos que ejecutan `contador++` sobre una variable compartida pueden perder incrementos,
porque la operación son tres pasos (leer, sumar, escribir) que pueden intercalarse. Es una
**condición de carrera**; el tramo de código que no admite intercalado es una **sección
crítica**.

Un **cerrojo** garantiza exclusión mutua. Su implementación descansa en una instrucción atómica
del procesador (`lock cmpxchg` en x86): compara y, solo si coincide, intercambia, todo en un paso
indivisible. Esperar activamente desperdicia CPU, así que Linux combina el camino rápido atómico
en espacio de usuario con una llamada al sistema (`futex`) que duerme al hilo solo cuando hay
contención.

Hay **interbloqueo** cuando se cumplen a la vez cuatro condiciones (Coffman): exclusión mutua,
retención y espera, ausencia de expropiación y espera circular. Romper cualquiera lo evita; la
más práctica es la última, adquiriendo siempre los cerrojos en un orden global fijo.

## 7. Persistencia

Un sistema de archivos proyecta nombres jerárquicos sobre bloques de disco. Un **inodo** guarda
los metadatos de un archivo y la ubicación de sus bloques; un directorio es un archivo que
asocia nombres a números de inodo. Por eso un archivo puede tener varios nombres (enlaces
duros) y borrarlo solo decrementa un contador.

Un corte de energía entre dos escrituras relacionadas deja el disco inconsistente. El **registro
por diario** (*journaling*) escribe primero la intención en un registro secuencial y solo después
aplica los cambios; tras un fallo, se reproduce o se descarta el registro.

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
