/*
 * informe: resumen diario del registro de acceso del servidor web.
 *
 * Lee un registro en formato Common Log Format por la entrada estándar:
 *   IP - - [fecha] "MÉTODO /ruta HTTP/1.1" estado bytes
 * e imprime el número de líneas válidas, de IP distintas, el total de bytes servidos y las 5 rutas más pedidas
 * (las rutas se comparan sin distinguir mayúsculas; empates por orden alfabético).
 *
 * Compilación: gcc -O2 -g -o informe informe.c
 * Uso: ./informe < access.log
 */
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct cuenta_ip { char ip[16]; long n; };
struct cuenta_ruta { char ruta[256]; long n; };

static struct cuenta_ip *ips;
static size_t nips, capips;
static struct cuenta_ruta *rutas;
static size_t nrutas, caprutas;

static void normaliza(char *s) {
    for (size_t i = 0; i < strlen(s); i++) s[i] = (char)tolower((unsigned char)s[i]);
}

static struct cuenta_ip *busca_ip(const char *ip) {
    for (size_t i = 0; i < nips; i++)
        if (strcmp(ips[i].ip, ip) == 0) return &ips[i];
    if (nips == capips) {
        capips = capips ? 2 * capips : 1024;
        ips = realloc(ips, capips * sizeof *ips);
        if (!ips) { perror("realloc"); exit(1); }
    }
    snprintf(ips[nips].ip, sizeof ips[nips].ip, "%s", ip);
    ips[nips].n = 0;
    return &ips[nips++];
}

static struct cuenta_ruta *busca_ruta(const char *ruta) {
    for (size_t i = 0; i < nrutas; i++)
        if (strcmp(rutas[i].ruta, ruta) == 0) return &rutas[i];
    if (nrutas == caprutas) {
        caprutas = caprutas ? 2 * caprutas : 1024;
        rutas = realloc(rutas, caprutas * sizeof *rutas);
        if (!rutas) { perror("realloc"); exit(1); }
    }
    snprintf(rutas[nrutas].ruta, sizeof rutas[nrutas].ruta, "%s", ruta);
    rutas[nrutas].n = 0;
    return &rutas[nrutas++];
}

static int por_cuenta(const void *a, const void *b) {
    const struct cuenta_ruta *x = a, *y = b;
    if (x->n != y->n) return x->n < y->n ? 1 : -1;
    return strcmp(x->ruta, y->ruta);
}

int main(void) {
    char linea[1024], ip[64], metodo[16], ruta[256];
    int estado;
    long bytes, nlineas = 0, total = 0;
    while (fgets(linea, sizeof linea, stdin)) {
        if (sscanf(linea, "%63s - - [%*[^]]] \"%15s %255s HTTP/%*[0-9.]\" %d %ld", ip, metodo, ruta, &estado, &bytes) != 5) continue;
        nlineas++;
        total += bytes;
        busca_ip(ip)->n++;
        normaliza(ruta);
        busca_ruta(ruta)->n++;
    }
    qsort(rutas, nrutas, sizeof *rutas, por_cuenta);
    printf("lineas=%ld\nips_distintas=%zu\nrutas_distintas=%zu\nbytes=%ld\n", nlineas, nips, nrutas, total);
    for (size_t i = 0; i < nrutas && i < 5; i++) printf("%ld %s\n", rutas[i].n, rutas[i].ruta);
    return 0;
}
