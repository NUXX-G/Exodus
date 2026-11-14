// Entorno de ejecución de los programas de Mini compilados (proy-sys-compilador).
// Se enlaza con el ensamblador que genera tu compilador:  gcc -o prog prog.s runtime.c
// Tu ensamblador debe definir la función global mini_main; puede llamar a mini_imprime y a mini_div0.
#include <stdio.h>
#include <stdlib.h>

long mini_main(void);

// print(e): escribe el entero y un salto de línea.
void mini_imprime(long v) { printf("%ld\n", v); }

// División o resto por cero: mensaje por la salida de error y código de salida 3.
void mini_div0(void) {
    fflush(stdout);
    fputs("error: división por cero\n", stderr);
    exit(3);
}

// El código de salida del programa es el valor que devuelve main módulo 256.
int main(void) { return (int)(mini_main() & 255); }
