#!/usr/bin/env python3
"""Genera un registro de acceso sintético y determinista (LCG del curso).

Uso: python3 genera_log.py NUMERO_DE_LINEAS > access.log
El día real tuvo 2 000 000 de líneas: python3 genera_log.py 2000000 > dia.log
"""
import sys

s = 2026


def u():
    global s
    s = (6364136223846793005 * s + 1442695040888963407) % 2**64
    return (s >> 11) / 2**53


N_IPS, N_RUTAS = 200_000, 5_000
secciones = ["Productos", "Blog", "Ayuda", "Tienda", "Cuenta", "Api/V2", "Static/Img", "Docs"]
pesos = [1.0 / (k + 1) for k in range(N_RUTAS)]          # Zipf: la ruta k se pide con probabilidad ∝ 1/(k+1)
acum, t = [], 0.0
for p in pesos:
    t += p
    acum.append(t)


def ruta(k):
    return f"/{secciones[k % len(secciones)]}/Item-{k:04d}.html"


def caja(r):                                               # el mismo recurso llega con mayúsculas distintas
    if u() < 0.3:
        return r.lower()
    return r


def elige_ruta():
    x = u() * acum[-1]
    lo, hi = 0, N_RUTAS - 1
    while lo < hi:
        m = (lo + hi) // 2
        if acum[m] < x:
            lo = m + 1
        else:
            hi = m
    return lo


def ip(k):                                                 # 200 000 direcciones de un rastreador distribuido
    return f"10.{(k >> 16) & 255}.{(k >> 8) & 255}.{k & 255}"


n = int(sys.argv[1])
out = sys.stdout
estados = [200] * 17 + [304, 404, 500]
for i in range(n):
    k_ip = int(u() * N_IPS)
    r = caja(ruta(elige_ruta()))
    est = estados[int(u() * len(estados))]
    b = 0 if est == 304 else 200 + int(u() * 50_000)
    seg = i * 86400 // max(n, 1)
    out.write(f'{ip(k_ip)} - - [14/Nov/2026:{seg // 3600:02d}:{seg // 60 % 60:02d}:{seg % 60:02d} +0000] "GET {r} HTTP/1.1" {est} {b}\n')
