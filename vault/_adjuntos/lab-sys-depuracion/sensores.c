/*
 * sensores: agregador de telemetría de la red de sensores del invernadero.
 *
 * Lee órdenes de un archivo, una por línea:
 *   ALTA <nombre>          da de alta un sensor
 *   DATO <nombre> <valor>  añade una medida (número con decimales)
 *   BAJA <nombre>          da de baja un sensor (sus medidas ya no cuentan en el resumen por sensor)
 *   RESUMEN                imprime un resumen por sensor y el total
 * Especificación del formato (documento de la red, v2): un nombre tiene de 1 a 15 caracteres [a-z0-9-].
 * Las líneas inválidas se anotan como AVISO en el registro y se ignoran.
 * El registro (stderr) lleva el número de línea de cada orden.
 *
 * Compilación de producción: gcc -O0 -g -static -o sensores sensores.c
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_SENSORES 128

struct sensor {
    char nombre[16];
    double *muestras;
    size_t n, cap;
};

static struct sensor *tabla[MAX_SENSORES];
static int nsensores;
static long datos_aceptados;
static double suma_aceptada;

static struct sensor *busca(const char *nombre) {
    for (int i = 0; i < nsensores; i++)
        if (strcmp(tabla[i]->nombre, nombre) == 0) return tabla[i];
    return NULL;
}

static int alta(const char *nombre) {
    if (nsensores == MAX_SENSORES || busca(nombre)) return -1;
    struct sensor *s = calloc(1, sizeof *s);
    if (!s) return -1;
    s->cap = 8;
    s->muestras = malloc(s->cap * sizeof(double));
    if (!s->muestras) { free(s); return -1; }
    strcpy(s->nombre, nombre);
    tabla[nsensores++] = s;
    return 0;
}

static void anota_dato(struct sensor *s, double v) {
    if (s->n == s->cap) {
        s->cap *= 2;
        s->muestras = realloc(s->muestras, s->cap * sizeof(double));
    }
    s->muestras[s->n++] = v;
}

static int baja(const char *nombre) {
    for (int i = 0; i < nsensores; i++)
        if (strcmp(tabla[i]->nombre, nombre) == 0) {
            free(tabla[i]);
            tabla[i] = tabla[--nsensores];
            return 0;
        }
    return -1;
}

static void resumen(void) {
    for (int i = 0; i < nsensores; i++) {
        struct sensor *s = tabla[i];
        double suma = 0;
        for (size_t k = 0; k < s->n; k++) suma += s->muestras[k];
        printf("%-15s n=%zu media=%.3f\n", s->nombre, s->n, s->n ? suma / s->n : 0.0);
    }
    printf("TOTAL sensores=%d datos=%ld media=%.3f\n", nsensores, datos_aceptados,
           datos_aceptados ? suma_aceptada / datos_aceptados : 0.0);
}

static void libera_todo(void) {
    for (int i = 0; i < nsensores; i++) {
        free(tabla[i]->muestras);
        free(tabla[i]);
    }
    nsensores = 0;
}

int main(int argc, char **argv) {
    if (argc != 2) { fprintf(stderr, "uso: %s ordenes.txt\n", argv[0]); return 2; }
    FILE *f = fopen(argv[1], "r");
    if (!f) { perror(argv[1]); return 2; }
    char linea[256], orden[16], nombre[64];
    double v;
    long numlinea = 0;
    while (fgets(linea, sizeof linea, f)) {
        numlinea++;
        if (sscanf(linea, "DATO %63s %lf", nombre, &v) == 2) {
            struct sensor *s = busca(nombre);
            if (!s) { fprintf(stderr, "[%ld] AVISO sensor desconocido %s\n", numlinea, nombre); continue; }
            anota_dato(s, v);
            datos_aceptados++;
            suma_aceptada += v;
        } else if (sscanf(linea, "%15s %63s", orden, nombre) == 2 && strcmp(orden, "ALTA") == 0) {
            if (alta(nombre) == 0) fprintf(stderr, "[%ld] ALTA %s\n", numlinea, nombre);
            else fprintf(stderr, "[%ld] AVISO alta rechazada %s\n", numlinea, nombre);
        } else if (sscanf(linea, "%15s %63s", orden, nombre) == 2 && strcmp(orden, "BAJA") == 0) {
            if (baja(nombre) == 0) fprintf(stderr, "[%ld] BAJA %s\n", numlinea, nombre);
            else fprintf(stderr, "[%ld] AVISO baja de sensor desconocido %s\n", numlinea, nombre);
        } else if (strncmp(linea, "RESUMEN", 7) == 0) {
            fprintf(stderr, "[%ld] RESUMEN\n", numlinea);
            resumen();
        } else {
            fprintf(stderr, "[%ld] AVISO línea inválida\n", numlinea);
        }
    }
    fclose(f);
    libera_todo();
    return 0;
}
