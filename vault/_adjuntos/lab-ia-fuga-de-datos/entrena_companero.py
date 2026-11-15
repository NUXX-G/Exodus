#!/usr/bin/env python3
"""El script de un compañero: predice el reingreso a 30 días con k vecinos y presume de AUC.
Uso: python3 entrena_companero.py ingresos.csv
Solo usa la biblioteca estándar. Lee con atención: hay más de un problema."""
import csv
import math
import sys

K = 25
filas = list(csv.DictReader(open(sys.argv[1])))
# «todas las columnas numéricas útiles»
columnas = ["edad", "sexo", "altura_cm", "peso_kg", "comorbilidades", "dias_estancia", "n_diagnosticos", "urgente", "hemoglobina", "ingresos_previos", "consultas_post_alta"]
X = [[float(f[c]) for c in columnas] for f in filas]
y = [int(f["reingreso_30d"]) for f in filas]

# estandarizar (media y desviación típica de todos los datos)
n = len(X)
medias = [sum(x[j] for x in X) / n for j in range(len(columnas))]
desv = [math.sqrt(sum((x[j] - medias[j]) ** 2 for x in X) / n) for j in range(len(columnas))]
Z = [[(x[j] - medias[j]) / desv[j] for j in range(len(columnas))] for x in X]

entr = [i for i, f in enumerate(filas) if f["particion"] == "entrenamiento"]
prue = [i for i, f in enumerate(filas) if f["particion"] == "prueba"]


def puntuacion(i):
    d = sorted(entr, key=lambda j: (sum((a - b) ** 2 for a, b in zip(Z[i], Z[j])), j))
    return sum(y[j] for j in d[:K]) / K


def auc(p, etiquetas):
    pos = [s for s, e in zip(p, etiquetas) if e == 1]
    neg = [s for s, e in zip(p, etiquetas) if e == 0]
    return sum(1.0 if a > b else 0.5 if a == b else 0.0 for a in pos for b in neg) / (len(pos) * len(neg))


p = [puntuacion(i) for i in prue]
print("AUC en prueba: %.3f  ¡listo para producción!" % auc(p, [y[i] for i in prue]))
