#!/usr/bin/env bash
# Pruebas de los hitos de proy-ia-mini-gpt.
# Uso: bash prueba.sh ./gpt N [-v]    (N = hito, de 1 a 6). texto.txt debe estar junto a este guion.
# Si todos los casos son correctos, el código que se imprime al final es la respuesta del hito en Exodus.
set -u
k=$(cd "$(dirname "$1")" && pwd)/$(basename "$1")
hito=$2
detalle=${3:-}
[ -x "$k" ] || { echo "no encuentro un ejecutable en $1" >&2; exit 2; }
d=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
[ -f "$d/texto.txt" ] || { echo "falta texto.txt junto a prueba.sh" >&2; exit 2; }
t=$(mktemp -d)
trap 'rm -rf "$t"' EXIT
cp "$d/texto.txt" "$t/"
total=""
anota() {
  total+="$1|$2"$'\n'
  printf '  %-26s %s\n' "$1" "$(printf '%s' "$2" | tr '\n' ' ' | cut -c1-76)"
  [ "$detalle" = "-v" ] && printf '%s\n' "$2" | sed 's/^/      | /'
}
sal() {
  local r
  r=$(cd "$t" && "$k" "$@" 2>/dev/null)
  printf '%s\n[estado %s]' "$r" "$?"
}
# Los entrenamientos largos acumulan diferencias de redondeo entre implementaciones correctas: se comprueban por tramos.
tramos() {
  awk '/^entrenamiento / { e = $5 / $7 } /^prueba / { p = $5 / $7 }
    END { printf "entrenamiento %s, prueba %s\n", (e >= 0.99 ? ">=99%" : "<99%"), (p >= 0.95 ? ">=95%" : (p >= 0.5 ? "50-95%" : "<50%")) }'
}
N=$'\n'

case $hito in
1)
  anota veinte-fusiones "$(sal bpe texto.txt 20)"
  anota cien-y-codifica "$(sal bpe texto.txt 100 'el faro' 'La farera subió al faro.' 'niño' 'zzz' '')"
  anota sin-fusiones "$(sal bpe texto.txt 0 'faro')"
  anota hasta-agotar "$(sal bpe texto.txt 100000 | tail -4)"
  anota sin-fichero "$(sal bpe nada.txt 5 | tail -1)"
  anota k-no-entero "$(sal bpe texto.txt diez | tail -1)"
  ;;
2)
  anota suma-completa "$(sal adelante 16-2-2 7 "12+34=046$N")"
  anota una-capa "$(sal adelante 32-4-1 1 "99+99=198$N")"
  anota tres-capas "$(sal adelante 8-1-3 42 "5+")"
  anota desordenada "$(sal adelante 12-3-2 0 "0=$N+9$N")"
  anota cabezas-no-dividen "$(sal adelante 10-3-1 1 "12+34=046" | tail -1)"
  anota caracter-invalido "$(sal adelante 16-2-2 7 "12-34=" | tail -1)"
  anota demasiado-larga "$(sal adelante 16-2-2 7 "12+34=046${N}1" | tail -1)"
  ;;
3)
  anota lote-de-uno "$(sal gradiente 16-2-2 7 "12+34=046$N")"
  anota lote-de-tres "$(sal gradiente 16-4-1 3 "12+34=046$N" "99+99=198$N" "05+70=075$N")"
  anota dos-capas-respuestas-malas "$(sal gradiente 24-3-2 11 "50+50=100$N" "50+50=010$N" "00+00=000$N" "01+01=999$N")"
  anota longitud-incorrecta "$(sal gradiente 16-2-2 7 "12+34=46$N" | tail -1)"
  ;;
4)
  anota veinte-pasos "$(sal entrena 32-4-2 5 20 0.003 32)"
  anota cincuenta-pasos "$(sal entrena 16-2-1 3 50 0.01 16)"
  anota doscientos-pasos "$(sal entrena 32-4-2 5 200 0.01 32)"
  anota tasa-nula "$(sal entrena 32-4-2 5 20 0 32 | tail -1)"
  anota lote-nulo "$(sal entrena 32-4-2 5 20 0.01 0 | tail -1)"
  ;;
5)
  anota codiciosa "$(sal genera 32-4-2 5 200 0.01 32 0 12+34= 99+99= 50+05= 00+00=)"
  anota con-temperatura "$(sal genera 32-4-2 5 200 0.01 32 0.8 12+34= 99+99= 50+05= 07+08=)"
  anota temperatura-alta "$(sal genera 16-2-1 3 50 0.01 16 2 12+34= 12+34= 12+34=)"
  anota prompt-invalido "$(sal genera 16-2-1 3 50 0.01 16 0 1+2= | tail -1)"
  ;;
6)
  anota corta "$(sal evalua 32-4-2 1 30 0.01 64 aleatoria)"
  anota corta-unidades "$(sal evalua 32-4-2 1 30 0.01 64 unidades)"
  anota generaliza "$(sal evalua 32-4-2 1 2000 0.01 64 aleatoria | tramos)"
  anota modelo-pequeno "$(sal evalua 8-1-1 1 1000 0.01 64 aleatoria | tramos)"
  anota particion-por-unidades "$(sal evalua 32-4-2 1 2000 0.01 64 unidades | tramos)"
  anota particion-desconocida "$(sal evalua 32-4-2 1 30 0.01 64 azar | tail -1)"
  ;;
*) echo "hito desconocido: $hito (de 1 a 6)" >&2; exit 2 ;;
esac
codigo=$(printf '%s' "$total" | sha256sum | cut -c1-12)
echo "código del hito $hito: $codigo"
